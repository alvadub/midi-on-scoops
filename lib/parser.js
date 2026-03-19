import { scale, inlineChord } from "harmonics";
import { isProgression, transform } from "./tokenize.js";
import { buildArrangementMain } from "./arrangement.js";
import { repeat, clone } from "./utils.js";
import { resolveChannelToken } from "./channels.js";
const ROMAN_TO_DEGREE = {
  I: 1,
  II: 2,
  III: 3,
  IV: 4,
  V: 5,
  VI: 6,
  VII: 7
};
function parseProgressionToken(token) {
  const raw = String(token || "").trim();
  const normalized = raw.replace(/°$/, "").toUpperCase();
  const degree = ROMAN_TO_DEGREE[normalized];
  if (!degree) throw new Error(`Invalid progression symbol '${raw}'`);
  if (raw.endsWith("\xB0")) return { degree, quality: "m7b5" };
  if (raw === raw.toUpperCase()) return { degree, quality: "M" };
  return { degree, quality: "m" };
}
function buildProgressionChords(base, progression) {
  const notes = scale(base);
  if (!Array.isArray(notes) || notes.length < 3) {
    throw new Error(`Unable to resolve progression from '${base}'`);
  }
  const tokens = String(progression || "").trim().split(/\s+/).filter(isProgression);
  return tokens.map((token) => {
    const { degree, quality } = parseProgressionToken(token);
    const root = notes[degree - 1];
    const match = String(root || "").match(/^([A-Ga-g][#b]?)(-?\d+)$/);
    if (!match) throw new Error(`Invalid root note '${root}' for progression '${token}'`);
    const [, pitchClass, octave] = match;
    return inlineChord(`${pitchClass}${quality}_${octave}`);
  });
}
function parseDegreeToken(token) {
  if (/^\d+$/.test(token)) return [parseInt(token, 10)];
  if (/^\d+\.\.\d+$/.test(token)) {
    const [a, b] = token.split("..").map((n) => parseInt(n, 10));
    if (a > b) {
      throw new Error(`Invalid degree range '${token}'. Use ascending ranges like '1..7'`);
    }
    const out = [];
    for (let i = a; i <= b; i += 1) out.push(i);
    return out;
  }
  throw new Error(`Invalid degree expression '${token}'`);
}
function selectScaleDegrees(base, rawDegrees, mapFn) {
  const notes = mapFn(scale(base));
  const values = rawDegrees.reduce((memo, token) => {
    memo.push(...parseDegreeToken(token));
    return memo;
  }, []);
  values.forEach((deg) => {
    if (deg < 1 || deg > notes.length) {
      throw new Error(`Degree '${deg}' is out of range for '${base}'. Allowed range is 1..${notes.length}`);
    }
  });
  return values.map((deg) => notes[deg - 1]);
}
function findSuffixDashCommentIndex(line) {
  const match = line.match(/\s--\s/);
  if (!match || typeof match.index !== "number") return -1;
  if (!/\S/.test(line.slice(0, match.index))) return -1;
  return match.index;
}
function stripInlineComment(line) {
  const semicolonIndex = line.indexOf(";");
  const dashCommentIndex = findSuffixDashCommentIndex(line);
  if (semicolonIndex < 0 && dashCommentIndex < 0) return line;
  if (semicolonIndex < 0) return line.slice(0, dashCommentIndex);
  if (dashCommentIndex < 0) return line.slice(0, semicolonIndex);
  return line.slice(0, Math.min(semicolonIndex, dashCommentIndex));
}
function assertNormalizedVelocitySyntax(line) {
  const tokens = String(line || "").trim().split(/\s+/).filter(Boolean);
  if (!tokens.length || tokens[0].charAt(0) !== "#") return;
  let index = 1;
  if (tokens[index] === "!" || tokens[index] === "+") index += 1;
  const velocityToken = tokens[index];
  if (!velocityToken) return;
  if (velocityToken.includes("%") && velocityToken.indexOf("%") > 0 || velocityToken.includes("/") && velocityToken.indexOf("/") > 0 || velocityToken.includes("*") && velocityToken.indexOf("*") > 0) {
    throw new Error(`Deprecated velocity syntax '${velocityToken}'. Use plain numeric form like '0.75' or '96'`);
  }
}
function cloneToken(token) {
  if (!token || typeof token !== "object") return token;
  const cloned = { ...token };
  if (Array.isArray(token.value)) cloned.value = [...token.value];
  return cloned;
}
function expandPatternRefs(tokens, patterns, stack = []) {
  return tokens.reduce((out, token) => {
    if (!token || token.type !== "pattern_ref") {
      out.push(cloneToken(token));
      return out;
    }
    const name = token.value;
    if (stack.includes(name)) {
      throw new Error(`Circular pattern expression for '${name}'`);
    }
    const target = patterns[name];
    if (!target) {
      throw new Error(`Missing pattern expression for '${name}'`);
    }
    const expanded = expandPatternRefs(target, patterns, [...stack, name]);
    const repeats = token.repeat && token.repeat > 1 ? token.repeat : 1;
    for (let i = 0; i < repeats; i += 1) {
      expanded.forEach((item) => {
        out.push(cloneToken(item));
      });
    }
    return out;
  }, []);
}
function reduce(input, context, callback) {
  if (!Array.isArray(input)) return input;
  const fn = typeof callback === "function" ? callback : ((v) => v);
  let skip;
  return input.reduce((prev, cur, i) => {
    const last = prev[prev.length - 1];
    const next = input[i + 1] || {};
    const old = input[i - 1] || {};
    if (skip) {
      skip = false;
      return prev;
    }
    if (Array.isArray(cur)) {
      prev.push(...cur);
      return prev;
    }
    if (cur.type === "value" && cur.value === ".") {
      if (prev.length > 0) prev.push(prev[0]);
      return prev;
    }
    if (old.type === "pattern" && cur.type === "pattern") {
      prev[prev.length - 1] += cur.value;
      return prev;
    }
    switch (cur.type) {
      case "pattern":
      case "number":
      case "note":
        if (cur.repeat) prev.push(...repeat(cur.value, cur.repeat));
        else if (Array.isArray(cur.value)) prev.push(...cur.value);
        else prev.push(cur.value);
        break;
      case "chord":
        if (cur.repeat) prev.push(...repeat(cur.value, cur.repeat));
        else if (cur.unfold) prev.push(...cur.value);
        else prev.push(cur.value);
        if (cur.type !== "chord") {
          skip = true;
        }
        break;
      case "divide":
        prev[prev.length - 1] /= cur.value;
        return prev;
      case "multiply":
        prev.push(...repeat(last, cur.value - 1));
        break;
      case "slice":
        if (Array.isArray(last)) {
          prev[prev.length - 1] = last.slice(cur.value[0] - 1, cur.value[1]);
        } else {
          prev.push(cur.value);
        }
        break;
      case "mode":
        prev[prev.length - 1] = `${last} ${cur.value}`;
        break;
      case "progression":
        if (typeof last !== "string") {
          throw new Error(`Missing expression for '++ ${cur.value}'`);
        }
        if (last.includes("...")) {
          throw new Error(`Invalid syntax '${last} ++ ${cur.value}'. Use either '...' (expand scale) or '++' (progression), not both`);
        }
        prev[prev.length - 1] = `${last} ++ ${cur.value}`;
        break;
      case "degrees":
        if (typeof last !== "string") {
          throw new Error(`Missing expression for '** ${cur.value.join(" ")}'`);
        }
        if (last.includes("...")) {
          throw new Error(`Invalid syntax '${last} ** ${cur.value.join(" ")}'. Use either '...' (expand scale) or '**' (degree selection), not both`);
        }
        prev[prev.length - 1] = `${last} ** ${cur.value.join(" ")}`;
        break;
      case "param":
      case "value":
        {
          let value = null;
          if (typeof context[cur.value] !== "undefined") value = context[cur.value];
          if (value === null) {
            if (cur.type === "value" && typeof cur.value === "string") {
              if (cur.value.startsWith("++ ") && typeof prev[prev.length - 1] === "string") {
                if (prev[prev.length - 1].includes("...")) {
                  throw new Error(`Invalid syntax '${prev[prev.length - 1]} ${cur.value}'. Use either '...' (expand scale) or '++' (progression), not both`);
                }
                prev[prev.length - 1] = `${prev[prev.length - 1]} ${cur.value}`;
                return prev;
              }
              if (cur.value.includes(" ")) {
                prev.push(cur.value);
                return prev;
              }
              try {
                const chord = inlineChord(cur.value);
                if (Array.isArray(chord) && chord.length > 0) {
                  value = [chord];
                }
              } catch (e) {
              }
            }
            if (value === null) {
              throw new Error(`Missing expression for '${cur.value}'`);
            }
          }
          if (value[0] && value[0].type) {
            value = reduce(value, context);
            if (cur.repeat) {
              prev.push(...repeat(value, cur.repeat).reduce((_prev, _cur) => {
                _prev.push(..._cur);
                return _prev;
              }, []));
            } else {
              prev.push(...value);
            }
            return prev;
          }
          value = Array.isArray(value) ? value : [value];
          if (cur.repeat) prev.push(...repeat(value, cur.repeat));
          else prev.push(...value);
        }
        break;
      default: {
        throw new Error(`Unhandled '${cur.type}'`);
      }
    }
    return prev;
  }, []).reduce((memo, item) => {
    const prev = memo[memo.length - 1];
    if (Array.isArray(prev) && Array.isArray(item) && typeof item[0] === "number" && item.length === 2) {
      const offset = item[1] === Infinity ? prev.length : item[1];
      const [base, length] = String(offset).split(/\D/);
      memo.pop();
      memo.push(...prev.slice(item[0] - 1, base));
      if (String(offset).includes(">")) {
        const parts = memo.slice(-length - 1);
        parts.pop();
        parts.reverse();
        memo.push(...parts);
      }
      return memo;
    }
    if (typeof item === "string" && item.includes(" ")) {
      if (item.includes(" ** ")) {
        const [base, raw] = item.split(/\s+\*\*\s+/);
        const degreeTokens = raw.trim().split(/\s+/).filter(Boolean);
        memo.push(selectScaleDegrees(base, degreeTokens, fn));
        return memo;
      }
      const chunks = item.split(" ");
      if (chunks.some(isProgression)) {
        const offset = chunks.findIndex(isProgression);
        const [a, b] = [chunks.slice(0, offset), chunks.slice(offset)];
        if (a[a.length - 1] === "++") a.pop();
        memo.push(buildProgressionChords(a.join(" "), b.join(" ")).map((chord) => fn(chord)));
      } else {
        memo.push(fn(scale(item)));
      }
    } else {
      memo.push(fn(item));
    }
    return memo;
  }, []);
}
function parse(buffer, options = {}) {
  const tracks = {};
  const main = [];
  const data = {};
  const patternData = {};
  const trackPatternSlots = {};
  let channel = null;
  let prefix = "";
  let track;
  let info = {};
  buffer.split(/\r?\n/g).forEach((line, nth) => {
    line = stripInlineComment(line).trim();
    if (!line) return;
    try {
      assertNormalizedVelocitySyntax(line);
      if (line.charAt() === "%") {
        const [name, ...value] = line.split(/\s+/);
        if (value.length > 0) {
          data[name] = transform(value.join(" "));
        }
      } else if (line.charAt() === "&") {
        const [name, ...value] = line.split(/\s+/);
        if (value.length > 0) {
          patternData[name] = transform(value.join(" "));
        }
      } else if (line.indexOf("# ") >= 0) {
        if (track) {
          tracks[track] = info;
          channel = null;
          prefix = "";
          info = {};
        }
        track = line.split(/\s+/).slice(1).join(" ");
      } else if (line.charAt() === ">") {
        const body = line.substr(1).trim();
        const arranged = buildArrangementMain(body);
        main.push(arranged || transform(body));
      } else if (line.charAt() === "@") {
        const [name, ...extend] = line.substr(1).split(" ");
        if (extend[0] === "<") {
          const key = `${extend[1]}#`;
          Object.keys(info).filter((x) => x.indexOf(key) === 0).forEach((k) => {
            info[`${name}#${k.split("#")[1]}`] = clone(info[k]);
          });
        }
        prefix = name;
      } else if (line.indexOf(":") > 0) {
        const [name, ...value] = line.split(":");
        data[name] = transform(value.join(":").trim());
      } else {
        let countPatternSlots = function(patternString) {
          let count = 0;
          let i = 0;
          while (i < patternString.length) {
            if (patternString[i] === "[") {
              const endBracket = patternString.indexOf("]", i);
              if (endBracket > i) {
                count += 1;
                i = endBracket + 1;
              } else {
                i += 1;
              }
            } else if (patternString[i] === "x" || patternString[i] === "-" || patternString[i] === "_") {
              count += 1;
              i += 1;
            } else {
              i += 1;
            }
          }
          return count;
        };
        const ticks = expandPatternRefs(transform(line), patternData);
        if (!ticks[0] || ticks[0].type !== "channel") {
          if (!channel) throw new TypeError(`Missing channel, given '${line}'`);
          const end = info[channel][info[channel].length - 1];
          if (!end.values) end.values = [{ type: "number", value: 127 }];
          end.values.push(...ticks);
          return;
        }
        const notes = ticks.findIndex((x) => ["note", "chord", "param"].includes(x.type));
        const index = ticks.findIndex((x) => x.type === "pattern");
        const value = index > 0 ? ticks.slice(index) : ticks;
        const offset = value.findIndex((x) => x.type !== "pattern");
        const inputs = ticks.slice(0, index > 0 ? index : 1);
        const resolvedChannel = resolveChannelToken(inputs[0].value, options.channelAliases);
        channel = prefix + resolvedChannel;
        if (!info[channel]) {
          info[channel] = [];
        }
        let spec;
        if (notes > 0 && index === -1) {
          const end = info[channel][info[channel].length - 1];
          if (!end || !end.input) {
            throw new TypeError(`Missing expression for '${line}'`);
          }
          spec = {
            input: end.input,
            values: value.slice(1, notes),
            data: value.slice(notes)
          };
        } else if (offset > 0) {
          spec = {
            data: value.slice(offset),
            input: value.slice(0, offset)
          };
        } else if (offset === 0) {
          spec = { values: value.slice(1) };
        } else {
          spec = { input: value };
        }
        if (inputs.length > 1) {
          let rest = inputs.slice(1);
          if (rest[0] && rest[0].type === "value" && (rest[0].value === "!" || rest[0].value === "+")) {
            spec.merge = rest[0].value === "+" ? "layer" : "replace";
            rest = rest.slice(1);
          }
          if (rest.length > 0) {
            spec.values = rest;
          }
        }
        let patternSlots = 0;
        if (spec.input && Array.isArray(spec.input)) {
          spec.input.forEach((token) => {
            if (token.type === "pattern" && typeof token.value === "string") {
              patternSlots += countPatternSlots(token.value);
            }
          });
        }
        if (spec.data && Array.isArray(spec.data)) {
          spec.data.forEach((token) => {
            if (token.type === "pattern" && typeof token.value === "string") {
              patternSlots += countPatternSlots(token.value);
            }
          });
        }
        if (!trackPatternSlots[channel]) {
          trackPatternSlots[channel] = 0;
        }
        trackPatternSlots[channel] += patternSlots;
        info[channel].push(spec);
      }
    } catch (e) {
      const msg = typeof e === "string" ? e : e.message;
      throw new SyntaxError(`${msg}
  at line ${nth + 1}
${line}`);
    }
  });
  if (track) {
    tracks[track] = info;
  }
  const result = { main, data, tracks };
  Object.defineProperty(result, "trackPatternSlots", {
    value: trackPatternSlots,
    enumerable: false,
    configurable: true,
    writable: true
  });
  return result;
}
export {
  parse,
  reduce
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2xpYi9zcmMvbGliL3BhcnNlci5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgc2NhbGUsIGlubGluZUNob3JkIH0gZnJvbSAnaGFybW9uaWNzJztcblxuaW1wb3J0IHsgaXNQcm9ncmVzc2lvbiwgdHJhbnNmb3JtIH0gZnJvbSAnLi90b2tlbml6ZS5qcyc7XG5pbXBvcnQgeyBidWlsZEFycmFuZ2VtZW50TWFpbiB9IGZyb20gJy4vYXJyYW5nZW1lbnQuanMnO1xuaW1wb3J0IHsgcmVwZWF0LCBjbG9uZSB9IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IHsgcmVzb2x2ZUNoYW5uZWxUb2tlbiB9IGZyb20gJy4vY2hhbm5lbHMuanMnO1xuXG5jb25zdCBST01BTl9UT19ERUdSRUUgPSB7XG4gIEk6IDEsXG4gIElJOiAyLFxuICBJSUk6IDMsXG4gIElWOiA0LFxuICBWOiA1LFxuICBWSTogNixcbiAgVklJOiA3LFxufTtcblxuZnVuY3Rpb24gcGFyc2VQcm9ncmVzc2lvblRva2VuKHRva2VuKSB7XG4gIGNvbnN0IHJhdyA9IFN0cmluZyh0b2tlbiB8fCAnJykudHJpbSgpO1xuICBjb25zdCBub3JtYWxpemVkID0gcmF3LnJlcGxhY2UoL1x1MDBCMCQvLCAnJykudG9VcHBlckNhc2UoKTtcbiAgY29uc3QgZGVncmVlID0gUk9NQU5fVE9fREVHUkVFW25vcm1hbGl6ZWRdO1xuICBpZiAoIWRlZ3JlZSkgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHByb2dyZXNzaW9uIHN5bWJvbCAnJHtyYXd9J2ApO1xuICBpZiAocmF3LmVuZHNXaXRoKCdcdTAwQjAnKSkgcmV0dXJuIHsgZGVncmVlLCBxdWFsaXR5OiAnbTdiNScgfTtcbiAgaWYgKHJhdyA9PT0gcmF3LnRvVXBwZXJDYXNlKCkpIHJldHVybiB7IGRlZ3JlZSwgcXVhbGl0eTogJ00nIH07XG4gIHJldHVybiB7IGRlZ3JlZSwgcXVhbGl0eTogJ20nIH07XG59XG5cbmZ1bmN0aW9uIGJ1aWxkUHJvZ3Jlc3Npb25DaG9yZHMoYmFzZSwgcHJvZ3Jlc3Npb24pIHtcbiAgY29uc3Qgbm90ZXMgPSBzY2FsZShiYXNlKTtcbiAgaWYgKCFBcnJheS5pc0FycmF5KG5vdGVzKSB8fCBub3Rlcy5sZW5ndGggPCAzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gcmVzb2x2ZSBwcm9ncmVzc2lvbiBmcm9tICcke2Jhc2V9J2ApO1xuICB9XG5cbiAgY29uc3QgdG9rZW5zID0gU3RyaW5nKHByb2dyZXNzaW9uIHx8ICcnKS50cmltKCkuc3BsaXQoL1xccysvKS5maWx0ZXIoaXNQcm9ncmVzc2lvbik7XG4gIHJldHVybiB0b2tlbnMubWFwKCh0b2tlbikgPT4ge1xuICAgIGNvbnN0IHsgZGVncmVlLCBxdWFsaXR5IH0gPSBwYXJzZVByb2dyZXNzaW9uVG9rZW4odG9rZW4pO1xuICAgIGNvbnN0IHJvb3QgPSBub3Rlc1tkZWdyZWUgLSAxXTtcbiAgICBjb25zdCBtYXRjaCA9IFN0cmluZyhyb290IHx8ICcnKS5tYXRjaCgvXihbQS1HYS1nXVsjYl0/KSgtP1xcZCspJC8pO1xuICAgIGlmICghbWF0Y2gpIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCByb290IG5vdGUgJyR7cm9vdH0nIGZvciBwcm9ncmVzc2lvbiAnJHt0b2tlbn0nYCk7XG4gICAgY29uc3QgWywgcGl0Y2hDbGFzcywgb2N0YXZlXSA9IG1hdGNoO1xuICAgIHJldHVybiBpbmxpbmVDaG9yZChgJHtwaXRjaENsYXNzfSR7cXVhbGl0eX1fJHtvY3RhdmV9YCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwYXJzZURlZ3JlZVRva2VuKHRva2VuKSB7XG4gIGlmICgvXlxcZCskLy50ZXN0KHRva2VuKSkgcmV0dXJuIFtwYXJzZUludCh0b2tlbiwgMTApXTtcbiAgaWYgKC9eXFxkK1xcLlxcLlxcZCskLy50ZXN0KHRva2VuKSkge1xuICAgIGNvbnN0IFthLCBiXSA9IHRva2VuLnNwbGl0KCcuLicpLm1hcChuID0+IHBhcnNlSW50KG4sIDEwKSk7XG4gICAgaWYgKGEgPiBiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgZGVncmVlIHJhbmdlICcke3Rva2VufScuIFVzZSBhc2NlbmRpbmcgcmFuZ2VzIGxpa2UgJzEuLjcnYCk7XG4gICAgfVxuICAgIGNvbnN0IG91dCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSBhOyBpIDw9IGI7IGkgKz0gMSkgb3V0LnB1c2goaSk7XG4gICAgcmV0dXJuIG91dDtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgZGVncmVlIGV4cHJlc3Npb24gJyR7dG9rZW59J2ApO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RTY2FsZURlZ3JlZXMoYmFzZSwgcmF3RGVncmVlcywgbWFwRm4pIHtcbiAgY29uc3Qgbm90ZXMgPSBtYXBGbihzY2FsZShiYXNlKSk7XG4gIGNvbnN0IHZhbHVlcyA9IHJhd0RlZ3JlZXMucmVkdWNlKChtZW1vLCB0b2tlbikgPT4ge1xuICAgIG1lbW8ucHVzaCguLi5wYXJzZURlZ3JlZVRva2VuKHRva2VuKSk7XG4gICAgcmV0dXJuIG1lbW87XG4gIH0sIFtdKTtcblxuICB2YWx1ZXMuZm9yRWFjaChkZWcgPT4ge1xuICAgIGlmIChkZWcgPCAxIHx8IGRlZyA+IG5vdGVzLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBEZWdyZWUgJyR7ZGVnfScgaXMgb3V0IG9mIHJhbmdlIGZvciAnJHtiYXNlfScuIEFsbG93ZWQgcmFuZ2UgaXMgMS4uJHtub3Rlcy5sZW5ndGh9YCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdmFsdWVzLm1hcChkZWcgPT4gbm90ZXNbZGVnIC0gMV0pO1xufVxuXG5mdW5jdGlvbiBmaW5kU3VmZml4RGFzaENvbW1lbnRJbmRleChsaW5lKSB7XG4gIGNvbnN0IG1hdGNoID0gbGluZS5tYXRjaCgvXFxzLS1cXHMvKTtcbiAgaWYgKCFtYXRjaCB8fCB0eXBlb2YgbWF0Y2guaW5kZXggIT09ICdudW1iZXInKSByZXR1cm4gLTE7XG4gIGlmICghL1xcUy8udGVzdChsaW5lLnNsaWNlKDAsIG1hdGNoLmluZGV4KSkpIHJldHVybiAtMTtcbiAgcmV0dXJuIG1hdGNoLmluZGV4O1xufVxuXG5mdW5jdGlvbiBzdHJpcElubGluZUNvbW1lbnQobGluZSkge1xuICBjb25zdCBzZW1pY29sb25JbmRleCA9IGxpbmUuaW5kZXhPZignOycpO1xuICBjb25zdCBkYXNoQ29tbWVudEluZGV4ID0gZmluZFN1ZmZpeERhc2hDb21tZW50SW5kZXgobGluZSk7XG5cbiAgaWYgKHNlbWljb2xvbkluZGV4IDwgMCAmJiBkYXNoQ29tbWVudEluZGV4IDwgMCkgcmV0dXJuIGxpbmU7XG4gIGlmIChzZW1pY29sb25JbmRleCA8IDApIHJldHVybiBsaW5lLnNsaWNlKDAsIGRhc2hDb21tZW50SW5kZXgpO1xuICBpZiAoZGFzaENvbW1lbnRJbmRleCA8IDApIHJldHVybiBsaW5lLnNsaWNlKDAsIHNlbWljb2xvbkluZGV4KTtcbiAgcmV0dXJuIGxpbmUuc2xpY2UoMCwgTWF0aC5taW4oc2VtaWNvbG9uSW5kZXgsIGRhc2hDb21tZW50SW5kZXgpKTtcbn1cblxuZnVuY3Rpb24gYXNzZXJ0Tm9ybWFsaXplZFZlbG9jaXR5U3ludGF4KGxpbmUpIHtcbiAgY29uc3QgdG9rZW5zID0gU3RyaW5nKGxpbmUgfHwgJycpLnRyaW0oKS5zcGxpdCgvXFxzKy8pLmZpbHRlcihCb29sZWFuKTtcbiAgaWYgKCF0b2tlbnMubGVuZ3RoIHx8IHRva2Vuc1swXS5jaGFyQXQoMCkgIT09ICcjJykgcmV0dXJuO1xuXG4gIGxldCBpbmRleCA9IDE7XG4gIGlmICh0b2tlbnNbaW5kZXhdID09PSAnIScgfHwgdG9rZW5zW2luZGV4XSA9PT0gJysnKSBpbmRleCArPSAxO1xuICBjb25zdCB2ZWxvY2l0eVRva2VuID0gdG9rZW5zW2luZGV4XTtcbiAgaWYgKCF2ZWxvY2l0eVRva2VuKSByZXR1cm47XG5cbiAgLy8gTGVnYWN5IHZlbG9jaXR5IHNob3J0aGFuZCBmb3JtcyBhcmUgcmVqZWN0ZWQgaW4gZmF2b3Igb2YgcGxhaW4gbnVtZXJpYyB2YWx1ZXMuXG4gIGlmIChcbiAgICAodmVsb2NpdHlUb2tlbi5pbmNsdWRlcygnJScpICYmIHZlbG9jaXR5VG9rZW4uaW5kZXhPZignJScpID4gMClcbiAgICB8fCAodmVsb2NpdHlUb2tlbi5pbmNsdWRlcygnLycpICYmIHZlbG9jaXR5VG9rZW4uaW5kZXhPZignLycpID4gMClcbiAgICB8fCAodmVsb2NpdHlUb2tlbi5pbmNsdWRlcygnKicpICYmIHZlbG9jaXR5VG9rZW4uaW5kZXhPZignKicpID4gMClcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBEZXByZWNhdGVkIHZlbG9jaXR5IHN5bnRheCAnJHt2ZWxvY2l0eVRva2VufScuIFVzZSBwbGFpbiBudW1lcmljIGZvcm0gbGlrZSAnMC43NScgb3IgJzk2J2ApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsb25lVG9rZW4odG9rZW4pIHtcbiAgaWYgKCF0b2tlbiB8fCB0eXBlb2YgdG9rZW4gIT09ICdvYmplY3QnKSByZXR1cm4gdG9rZW47XG4gIGNvbnN0IGNsb25lZCA9IHsgLi4udG9rZW4gfTtcbiAgaWYgKEFycmF5LmlzQXJyYXkodG9rZW4udmFsdWUpKSBjbG9uZWQudmFsdWUgPSBbLi4udG9rZW4udmFsdWVdO1xuICByZXR1cm4gY2xvbmVkO1xufVxuXG5mdW5jdGlvbiBleHBhbmRQYXR0ZXJuUmVmcyh0b2tlbnMsIHBhdHRlcm5zLCBzdGFjayA9IFtdKSB7XG4gIHJldHVybiB0b2tlbnMucmVkdWNlKChvdXQsIHRva2VuKSA9PiB7XG4gICAgaWYgKCF0b2tlbiB8fCB0b2tlbi50eXBlICE9PSAncGF0dGVybl9yZWYnKSB7XG4gICAgICBvdXQucHVzaChjbG9uZVRva2VuKHRva2VuKSk7XG4gICAgICByZXR1cm4gb3V0O1xuICAgIH1cblxuICAgIGNvbnN0IG5hbWUgPSB0b2tlbi52YWx1ZTtcbiAgICBpZiAoc3RhY2suaW5jbHVkZXMobmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2lyY3VsYXIgcGF0dGVybiBleHByZXNzaW9uIGZvciAnJHtuYW1lfSdgKTtcbiAgICB9XG5cbiAgICBjb25zdCB0YXJnZXQgPSBwYXR0ZXJuc1tuYW1lXTtcbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIHBhdHRlcm4gZXhwcmVzc2lvbiBmb3IgJyR7bmFtZX0nYCk7XG4gICAgfVxuXG4gICAgY29uc3QgZXhwYW5kZWQgPSBleHBhbmRQYXR0ZXJuUmVmcyh0YXJnZXQsIHBhdHRlcm5zLCBbLi4uc3RhY2ssIG5hbWVdKTtcbiAgICBjb25zdCByZXBlYXRzID0gdG9rZW4ucmVwZWF0ICYmIHRva2VuLnJlcGVhdCA+IDEgPyB0b2tlbi5yZXBlYXQgOiAxO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXBlYXRzOyBpICs9IDEpIHtcbiAgICAgIGV4cGFuZGVkLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgb3V0LnB1c2goY2xvbmVUb2tlbihpdGVtKSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0O1xuICB9LCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2UoaW5wdXQsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShpbnB1dCkpIHJldHVybiBpbnB1dDtcblxuICBjb25zdCBmbiA9IHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyA/IGNhbGxiYWNrIDogKHYgPT4gdik7XG5cbiAgbGV0IHNraXA7XG4gIHJldHVybiBpbnB1dC5yZWR1Y2UoKHByZXYsIGN1ciwgaSkgPT4ge1xuICAgIGNvbnN0IGxhc3QgPSBwcmV2W3ByZXYubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgbmV4dCA9IGlucHV0W2kgKyAxXSB8fCB7fTtcbiAgICBjb25zdCBvbGQgPSBpbnB1dFtpIC0gMV0gfHwge307XG5cbiAgICBpZiAoc2tpcCkge1xuICAgICAgc2tpcCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY3VyKSkge1xuICAgICAgcHJldi5wdXNoKC4uLmN1cik7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAoY3VyLnR5cGUgPT09ICd2YWx1ZScgJiYgY3VyLnZhbHVlID09PSAnLicpIHtcbiAgICAgIGlmIChwcmV2Lmxlbmd0aCA+IDApIHByZXYucHVzaChwcmV2WzBdKTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmIChvbGQudHlwZSA9PT0gJ3BhdHRlcm4nICYmIGN1ci50eXBlID09PSAncGF0dGVybicpIHtcbiAgICAgIHByZXZbcHJldi5sZW5ndGggLSAxXSArPSBjdXIudmFsdWU7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGN1ci50eXBlKSB7XG4gICAgICBjYXNlICdwYXR0ZXJuJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdub3RlJzpcbiAgICAgICAgaWYgKGN1ci5yZXBlYXQpIHByZXYucHVzaCguLi5yZXBlYXQoY3VyLnZhbHVlLCBjdXIucmVwZWF0KSk7XG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY3VyLnZhbHVlKSkgcHJldi5wdXNoKC4uLmN1ci52YWx1ZSk7XG4gICAgICAgIGVsc2UgcHJldi5wdXNoKGN1ci52YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdjaG9yZCc6XG4gICAgICAgIGlmIChjdXIucmVwZWF0KSBwcmV2LnB1c2goLi4ucmVwZWF0KGN1ci52YWx1ZSwgY3VyLnJlcGVhdCkpO1xuICAgICAgICBlbHNlIGlmIChjdXIudW5mb2xkKSBwcmV2LnB1c2goLi4uY3VyLnZhbHVlKTtcbiAgICAgICAgZWxzZSBwcmV2LnB1c2goY3VyLnZhbHVlKTtcblxuICAgICAgICBpZiAoY3VyLnR5cGUgIT09ICdjaG9yZCcpIHtcbiAgICAgICAgICBza2lwID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZGl2aWRlJzpcbiAgICAgICAgcHJldltwcmV2Lmxlbmd0aCAtIDFdIC89IGN1ci52YWx1ZTtcbiAgICAgICAgcmV0dXJuIHByZXY7XG5cbiAgICAgIGNhc2UgJ211bHRpcGx5JzpcbiAgICAgICAgcHJldi5wdXNoKC4uLnJlcGVhdChsYXN0LCBjdXIudmFsdWUgLSAxKSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdzbGljZSc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGxhc3QpKSB7XG4gICAgICAgICAgcHJldltwcmV2Lmxlbmd0aCAtIDFdID0gbGFzdC5zbGljZShjdXIudmFsdWVbMF0gLSAxLCBjdXIudmFsdWVbMV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByZXYucHVzaChjdXIudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdtb2RlJzpcbiAgICAgICAgcHJldltwcmV2Lmxlbmd0aCAtIDFdID0gYCR7bGFzdH0gJHtjdXIudmFsdWV9YDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3Byb2dyZXNzaW9uJzpcbiAgICAgICAgaWYgKHR5cGVvZiBsYXN0ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyBleHByZXNzaW9uIGZvciAnKysgJHtjdXIudmFsdWV9J2ApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYXN0LmluY2x1ZGVzKCcuLi4nKSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzeW50YXggJyR7bGFzdH0gKysgJHtjdXIudmFsdWV9Jy4gVXNlIGVpdGhlciAnLi4uJyAoZXhwYW5kIHNjYWxlKSBvciAnKysnIChwcm9ncmVzc2lvbiksIG5vdCBib3RoYCk7XG4gICAgICAgIH1cbiAgICAgICAgcHJldltwcmV2Lmxlbmd0aCAtIDFdID0gYCR7bGFzdH0gKysgJHtjdXIudmFsdWV9YDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2RlZ3JlZXMnOlxuICAgICAgICBpZiAodHlwZW9mIGxhc3QgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIGV4cHJlc3Npb24gZm9yICcqKiAke2N1ci52YWx1ZS5qb2luKCcgJyl9J2ApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYXN0LmluY2x1ZGVzKCcuLi4nKSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzeW50YXggJyR7bGFzdH0gKiogJHtjdXIudmFsdWUuam9pbignICcpfScuIFVzZSBlaXRoZXIgJy4uLicgKGV4cGFuZCBzY2FsZSkgb3IgJyoqJyAoZGVncmVlIHNlbGVjdGlvbiksIG5vdCBib3RoYCk7XG4gICAgICAgIH1cbiAgICAgICAgcHJldltwcmV2Lmxlbmd0aCAtIDFdID0gYCR7bGFzdH0gKiogJHtjdXIudmFsdWUuam9pbignICcpfWA7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdwYXJhbSc6XG4gICAgICBjYXNlICd2YWx1ZSc6IHtcbiAgICAgICAgbGV0IHZhbHVlID0gbnVsbDtcbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZXh0W2N1ci52YWx1ZV0gIT09ICd1bmRlZmluZWQnKSB2YWx1ZSA9IGNvbnRleHRbY3VyLnZhbHVlXTtcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgaWYgKGN1ci50eXBlID09PSAndmFsdWUnICYmIHR5cGVvZiBjdXIudmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAoY3VyLnZhbHVlLnN0YXJ0c1dpdGgoJysrICcpICYmIHR5cGVvZiBwcmV2W3ByZXYubGVuZ3RoIC0gMV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGlmIChwcmV2W3ByZXYubGVuZ3RoIC0gMV0uaW5jbHVkZXMoJy4uLicpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHN5bnRheCAnJHtwcmV2W3ByZXYubGVuZ3RoIC0gMV19ICR7Y3VyLnZhbHVlfScuIFVzZSBlaXRoZXIgJy4uLicgKGV4cGFuZCBzY2FsZSkgb3IgJysrJyAocHJvZ3Jlc3Npb24pLCBub3QgYm90aGApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHByZXZbcHJldi5sZW5ndGggLSAxXSA9IGAke3ByZXZbcHJldi5sZW5ndGggLSAxXX0gJHtjdXIudmFsdWV9YDtcbiAgICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjdXIudmFsdWUuaW5jbHVkZXMoJyAnKSkge1xuICAgICAgICAgICAgICBwcmV2LnB1c2goY3VyLnZhbHVlKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNob3JkID0gaW5saW5lQ2hvcmQoY3VyLnZhbHVlKTtcbiAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hvcmQpICYmIGNob3JkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IFtjaG9yZF07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgLy8gS2VlcCByZWd1bGFyIG1pc3NpbmctZXhwcmVzc2lvbiBlcnJvcnMgZm9yIG5vbi1jaG9yZCB2YWx1ZXMuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgZXhwcmVzc2lvbiBmb3IgJyR7Y3VyLnZhbHVlfSdgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWVbMF0gJiYgdmFsdWVbMF0udHlwZSkge1xuICAgICAgICAgIHZhbHVlID0gcmVkdWNlKHZhbHVlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjdXIucmVwZWF0KSB7XG4gICAgICAgICAgICBwcmV2LnB1c2goLi4ucmVwZWF0KHZhbHVlLCBjdXIucmVwZWF0KS5yZWR1Y2UoKF9wcmV2LCBfY3VyKSA9PiB7XG4gICAgICAgICAgICAgIF9wcmV2LnB1c2goLi4uX2N1cik7XG4gICAgICAgICAgICAgIHJldHVybiBfcHJldjtcbiAgICAgICAgICAgIH0sIFtdKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByZXYucHVzaCguLi52YWx1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgIH1cblxuICAgICAgICB2YWx1ZSA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdO1xuICAgICAgICBpZiAoY3VyLnJlcGVhdCkgcHJldi5wdXNoKC4uLnJlcGVhdCh2YWx1ZSwgY3VyLnJlcGVhdCkpO1xuICAgICAgICBlbHNlIHByZXYucHVzaCguLi52YWx1ZSk7XG4gICAgICB9IGJyZWFrO1xuICAgICAgZGVmYXVsdDoge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuaGFuZGxlZCAnJHtjdXIudHlwZX0nYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZXY7XG4gIH0sIFtdKS5yZWR1Y2UoKG1lbW8sIGl0ZW0pID0+IHtcbiAgICBjb25zdCBwcmV2ID0gbWVtb1ttZW1vLmxlbmd0aCAtIDFdO1xuXG4gICAgaWYgKFxuICAgICAgQXJyYXkuaXNBcnJheShwcmV2KVxuICAgICAgJiYgQXJyYXkuaXNBcnJheShpdGVtKVxuICAgICAgJiYgdHlwZW9mIGl0ZW1bMF0gPT09ICdudW1iZXInXG4gICAgICAmJiBpdGVtLmxlbmd0aCA9PT0gMlxuICAgICkge1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gaXRlbVsxXSA9PT0gSW5maW5pdHkgPyBwcmV2Lmxlbmd0aCA6IGl0ZW1bMV07XG4gICAgICBjb25zdCBbYmFzZSwgbGVuZ3RoXSA9IFN0cmluZyhvZmZzZXQpLnNwbGl0KC9cXEQvKTtcblxuICAgICAgbWVtby5wb3AoKTtcbiAgICAgIG1lbW8ucHVzaCguLi5wcmV2LnNsaWNlKGl0ZW1bMF0gLSAxLCBiYXNlKSk7XG5cbiAgICAgIGlmIChTdHJpbmcob2Zmc2V0KS5pbmNsdWRlcygnPicpKSB7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gbWVtby5zbGljZSgtbGVuZ3RoIC0gMSk7XG5cbiAgICAgICAgcGFydHMucG9wKCk7XG4gICAgICAgIHBhcnRzLnJldmVyc2UoKTtcbiAgICAgICAgbWVtby5wdXNoKC4uLnBhcnRzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtZW1vO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycgJiYgaXRlbS5pbmNsdWRlcygnICcpKSB7XG4gICAgICBpZiAoaXRlbS5pbmNsdWRlcygnICoqICcpKSB7XG4gICAgICAgIGNvbnN0IFtiYXNlLCByYXddID0gaXRlbS5zcGxpdCgvXFxzK1xcKlxcKlxccysvKTtcbiAgICAgICAgY29uc3QgZGVncmVlVG9rZW5zID0gcmF3LnRyaW0oKS5zcGxpdCgvXFxzKy8pLmZpbHRlcihCb29sZWFuKTtcblxuICAgICAgICBtZW1vLnB1c2goc2VsZWN0U2NhbGVEZWdyZWVzKGJhc2UsIGRlZ3JlZVRva2VucywgZm4pKTtcbiAgICAgICAgcmV0dXJuIG1lbW87XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNodW5rcyA9IGl0ZW0uc3BsaXQoJyAnKTtcblxuICAgICAgaWYgKGNodW5rcy5zb21lKGlzUHJvZ3Jlc3Npb24pKSB7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IGNodW5rcy5maW5kSW5kZXgoaXNQcm9ncmVzc2lvbik7XG4gICAgICAgIGNvbnN0IFthLCBiXSA9IFtjaHVua3Muc2xpY2UoMCwgb2Zmc2V0KSwgY2h1bmtzLnNsaWNlKG9mZnNldCldO1xuXG4gICAgICAgIGlmIChhW2EubGVuZ3RoIC0gMV0gPT09ICcrKycpIGEucG9wKCk7XG5cbiAgICAgICAgbWVtby5wdXNoKGJ1aWxkUHJvZ3Jlc3Npb25DaG9yZHMoYS5qb2luKCcgJyksIGIuam9pbignICcpKS5tYXAoY2hvcmQgPT4gZm4oY2hvcmQpKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZW1vLnB1c2goZm4oc2NhbGUoaXRlbSkpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbWVtby5wdXNoKGZuKGl0ZW0pKTtcbiAgICB9XG4gICAgcmV0dXJuIG1lbW87XG4gIH0sIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlKGJ1ZmZlciwgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHRyYWNrcyA9IHt9O1xuICBjb25zdCBtYWluID0gW107XG4gIGNvbnN0IGRhdGEgPSB7fTtcbiAgY29uc3QgcGF0dGVybkRhdGEgPSB7fTtcbiAgY29uc3QgdHJhY2tQYXR0ZXJuU2xvdHMgPSB7fTtcblxuICBsZXQgY2hhbm5lbCA9IG51bGw7XG4gIGxldCBwcmVmaXggPSAnJztcbiAgbGV0IHRyYWNrO1xuICBsZXQgaW5mbyA9IHt9O1xuICBidWZmZXIuc3BsaXQoL1xccj9cXG4vZykuZm9yRWFjaCgobGluZSwgbnRoKSA9PiB7XG4gICAgbGluZSA9IHN0cmlwSW5saW5lQ29tbWVudChsaW5lKS50cmltKCk7XG4gICAgaWYgKCFsaW5lKSByZXR1cm47XG5cbiAgICB0cnkge1xuICAgICAgYXNzZXJ0Tm9ybWFsaXplZFZlbG9jaXR5U3ludGF4KGxpbmUpO1xuXG4gICAgICBpZiAobGluZS5jaGFyQXQoKSA9PT0gJyUnKSB7XG4gICAgICAgIGNvbnN0IFtuYW1lLCAuLi52YWx1ZV0gPSBsaW5lLnNwbGl0KC9cXHMrLyk7XG5cbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBkYXRhW25hbWVdID0gdHJhbnNmb3JtKHZhbHVlLmpvaW4oJyAnKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobGluZS5jaGFyQXQoKSA9PT0gJyYnKSB7XG4gICAgICAgIGNvbnN0IFtuYW1lLCAuLi52YWx1ZV0gPSBsaW5lLnNwbGl0KC9cXHMrLyk7XG5cbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBwYXR0ZXJuRGF0YVtuYW1lXSA9IHRyYW5zZm9ybSh2YWx1ZS5qb2luKCcgJykpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGxpbmUuaW5kZXhPZignIyAnKSA+PSAwKSB7XG4gICAgICAgIGlmICh0cmFjaykge1xuICAgICAgICAgIHRyYWNrc1t0cmFja10gPSBpbmZvO1xuICAgICAgICAgIGNoYW5uZWwgPSBudWxsO1xuICAgICAgICAgIHByZWZpeCA9ICcnO1xuICAgICAgICAgIGluZm8gPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyYWNrID0gbGluZS5zcGxpdCgvXFxzKy8pLnNsaWNlKDEpLmpvaW4oJyAnKTtcbiAgICAgIH0gZWxzZSBpZiAobGluZS5jaGFyQXQoKSA9PT0gJz4nKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBsaW5lLnN1YnN0cigxKS50cmltKCk7XG4gICAgICAgIGNvbnN0IGFycmFuZ2VkID0gYnVpbGRBcnJhbmdlbWVudE1haW4oYm9keSk7XG4gICAgICAgIG1haW4ucHVzaChhcnJhbmdlZCB8fCB0cmFuc2Zvcm0oYm9keSkpO1xuICAgICAgfSBlbHNlIGlmIChsaW5lLmNoYXJBdCgpID09PSAnQCcpIHtcbiAgICAgICAgY29uc3QgW25hbWUsIC4uLmV4dGVuZF0gPSBsaW5lLnN1YnN0cigxKS5zcGxpdCgnICcpO1xuXG4gICAgICAgIGlmIChleHRlbmRbMF0gPT09ICc8Jykge1xuICAgICAgICAgIGNvbnN0IGtleSA9IGAke2V4dGVuZFsxXX0jYDtcblxuICAgICAgICAgIE9iamVjdC5rZXlzKGluZm8pXG4gICAgICAgICAgICAuZmlsdGVyKHggPT4geC5pbmRleE9mKGtleSkgPT09IDApXG4gICAgICAgICAgICAuZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgICAgaW5mb1tgJHtuYW1lfSMke2suc3BsaXQoJyMnKVsxXX1gXSA9IGNsb25lKGluZm9ba10pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJlZml4ID0gbmFtZTtcbiAgICAgIH0gZWxzZSBpZiAobGluZS5pbmRleE9mKCc6JykgPiAwKSB7XG4gICAgICAgIGNvbnN0IFtuYW1lLCAuLi52YWx1ZV0gPSBsaW5lLnNwbGl0KCc6Jyk7XG5cbiAgICAgICAgZGF0YVtuYW1lXSA9IHRyYW5zZm9ybSh2YWx1ZS5qb2luKCc6JykudHJpbSgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRpY2tzID0gZXhwYW5kUGF0dGVyblJlZnModHJhbnNmb3JtKGxpbmUpLCBwYXR0ZXJuRGF0YSk7XG5cbiAgICAgICAgaWYgKCF0aWNrc1swXSB8fCB0aWNrc1swXS50eXBlICE9PSAnY2hhbm5lbCcpIHtcbiAgICAgICAgICBpZiAoIWNoYW5uZWwpIHRocm93IG5ldyBUeXBlRXJyb3IoYE1pc3NpbmcgY2hhbm5lbCwgZ2l2ZW4gJyR7bGluZX0nYCk7XG5cbiAgICAgICAgICBjb25zdCBlbmQgPSBpbmZvW2NoYW5uZWxdW2luZm9bY2hhbm5lbF0ubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICBpZiAoIWVuZC52YWx1ZXMpIGVuZC52YWx1ZXMgPSBbeyB0eXBlOiAnbnVtYmVyJywgdmFsdWU6IDEyNyB9XTtcbiAgICAgICAgICBlbmQudmFsdWVzLnB1c2goLi4udGlja3MpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5vdGVzID0gdGlja3MuZmluZEluZGV4KHggPT4gWydub3RlJywgJ2Nob3JkJywgJ3BhcmFtJ10uaW5jbHVkZXMoeC50eXBlKSk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGlja3MuZmluZEluZGV4KHggPT4geC50eXBlID09PSAncGF0dGVybicpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGluZGV4ID4gMCA/IHRpY2tzLnNsaWNlKGluZGV4KSA6IHRpY2tzO1xuICAgICAgICBjb25zdCBvZmZzZXQgPSB2YWx1ZS5maW5kSW5kZXgoeCA9PiB4LnR5cGUgIT09ICdwYXR0ZXJuJyk7XG4gICAgICAgIGNvbnN0IGlucHV0cyA9IHRpY2tzLnNsaWNlKDAsIGluZGV4ID4gMCA/IGluZGV4IDogMSk7XG5cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRDaGFubmVsID0gcmVzb2x2ZUNoYW5uZWxUb2tlbihpbnB1dHNbMF0udmFsdWUsIG9wdGlvbnMuY2hhbm5lbEFsaWFzZXMpO1xuICAgICAgICBjaGFubmVsID0gcHJlZml4ICsgcmVzb2x2ZWRDaGFubmVsO1xuICAgICAgICBpZiAoIWluZm9bY2hhbm5lbF0pIHtcbiAgICAgICAgICBpbmZvW2NoYW5uZWxdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc3BlYztcbiAgICAgICAgaWYgKG5vdGVzID4gMCAmJiBpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zdCBlbmQgPSBpbmZvW2NoYW5uZWxdW2luZm9bY2hhbm5lbF0ubGVuZ3RoIC0gMV07XG4gICAgICAgICAgaWYgKCFlbmQgfHwgIWVuZC5pbnB1dCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTWlzc2luZyBleHByZXNzaW9uIGZvciAnJHtsaW5lfSdgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzcGVjID0ge1xuICAgICAgICAgICAgaW5wdXQ6IGVuZC5pbnB1dCxcbiAgICAgICAgICAgIHZhbHVlczogdmFsdWUuc2xpY2UoMSwgbm90ZXMpLFxuICAgICAgICAgICAgZGF0YTogdmFsdWUuc2xpY2Uobm90ZXMpLFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAob2Zmc2V0ID4gMCkge1xuICAgICAgICAgIHNwZWMgPSB7XG4gICAgICAgICAgICBkYXRhOiB2YWx1ZS5zbGljZShvZmZzZXQpLFxuICAgICAgICAgICAgaW5wdXQ6IHZhbHVlLnNsaWNlKDAsIG9mZnNldCksXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChvZmZzZXQgPT09IDApIHtcbiAgICAgICAgICBzcGVjID0geyB2YWx1ZXM6IHZhbHVlLnNsaWNlKDEpIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3BlYyA9IHsgaW5wdXQ6IHZhbHVlIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5wdXRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBsZXQgcmVzdCA9IGlucHV0cy5zbGljZSgxKTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICByZXN0WzBdXG4gICAgICAgICAgICAmJiByZXN0WzBdLnR5cGUgPT09ICd2YWx1ZSdcbiAgICAgICAgICAgICYmIChyZXN0WzBdLnZhbHVlID09PSAnIScgfHwgcmVzdFswXS52YWx1ZSA9PT0gJysnKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgc3BlYy5tZXJnZSA9IHJlc3RbMF0udmFsdWUgPT09ICcrJyA/ICdsYXllcicgOiAncmVwbGFjZSc7XG4gICAgICAgICAgICByZXN0ID0gcmVzdC5zbGljZSgxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc3BlYy52YWx1ZXMgPSByZXN0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gQ291bnQgcGF0dGVybiBzbG90cyBmb3IgdGhpcyBjaGFubmVsXG4gICAgICAgIGZ1bmN0aW9uIGNvdW50UGF0dGVyblNsb3RzKHBhdHRlcm5TdHJpbmcpIHtcbiAgICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICB3aGlsZSAoaSA8IHBhdHRlcm5TdHJpbmcubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAocGF0dGVyblN0cmluZ1tpXSA9PT0gJ1snKSB7XG4gICAgICAgICAgICAgIC8vIFNraXAgdGhlIGJyYWNrZXRlZCBncm91cCBhcyAxIHNsb3RcbiAgICAgICAgICAgICAgY29uc3QgZW5kQnJhY2tldCA9IHBhdHRlcm5TdHJpbmcuaW5kZXhPZignXScsIGkpO1xuICAgICAgICAgICAgICBpZiAoZW5kQnJhY2tldCA+IGkpIHtcbiAgICAgICAgICAgICAgICBjb3VudCArPSAxO1xuICAgICAgICAgICAgICAgIGkgPSBlbmRCcmFja2V0ICsgMTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpICs9IDE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGF0dGVyblN0cmluZ1tpXSA9PT0gJ3gnIHx8IHBhdHRlcm5TdHJpbmdbaV0gPT09ICctJyB8fCBwYXR0ZXJuU3RyaW5nW2ldID09PSAnXycpIHtcbiAgICAgICAgICAgICAgLy8gRWFjaCBpbmRpdmlkdWFsIGNoYXJhY3RlciBpcyAxIHNsb3RcbiAgICAgICAgICAgICAgY291bnQgKz0gMTtcbiAgICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCBwYXR0ZXJuU2xvdHMgPSAwO1xuICAgICAgICBpZiAoc3BlYy5pbnB1dCAmJiBBcnJheS5pc0FycmF5KHNwZWMuaW5wdXQpKSB7XG4gICAgICAgICAgc3BlYy5pbnB1dC5mb3JFYWNoKHRva2VuID0+IHtcbiAgICAgICAgICAgIGlmICh0b2tlbi50eXBlID09PSAncGF0dGVybicgJiYgdHlwZW9mIHRva2VuLnZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBwYXR0ZXJuU2xvdHMgKz0gY291bnRQYXR0ZXJuU2xvdHModG9rZW4udmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzcGVjLmRhdGEgJiYgQXJyYXkuaXNBcnJheShzcGVjLmRhdGEpKSB7XG4gICAgICAgICAgc3BlYy5kYXRhLmZvckVhY2godG9rZW4gPT4ge1xuICAgICAgICAgICAgaWYgKHRva2VuLnR5cGUgPT09ICdwYXR0ZXJuJyAmJiB0eXBlb2YgdG9rZW4udmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIHBhdHRlcm5TbG90cyArPSBjb3VudFBhdHRlcm5TbG90cyh0b2tlbi52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIEFjY3VtdWxhdGUgc2xvdCBjb3VudCBmb3IgdGhpcyBjaGFubmVsXG4gICAgICAgIGlmICghdHJhY2tQYXR0ZXJuU2xvdHNbY2hhbm5lbF0pIHtcbiAgICAgICAgICB0cmFja1BhdHRlcm5TbG90c1tjaGFubmVsXSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdHJhY2tQYXR0ZXJuU2xvdHNbY2hhbm5lbF0gKz0gcGF0dGVyblNsb3RzO1xuXG4gICAgICAgIGluZm9bY2hhbm5lbF0ucHVzaChzcGVjKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zdCBtc2cgPSB0eXBlb2YgZSA9PT0gJ3N0cmluZycgPyBlIDogZS5tZXNzYWdlO1xuXG4gICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYCR7bXNnfVxcbiAgYXQgbGluZSAke250aCArIDF9XFxuJHtsaW5lfWApO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHRyYWNrKSB7XG4gICAgdHJhY2tzW3RyYWNrXSA9IGluZm87XG4gIH1cbiAgY29uc3QgcmVzdWx0ID0geyBtYWluLCBkYXRhLCB0cmFja3MgfTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlc3VsdCwgJ3RyYWNrUGF0dGVyblNsb3RzJywge1xuICAgIHZhbHVlOiB0cmFja1BhdHRlcm5TbG90cyxcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIkFBQUEsU0FBUyxPQUFPLG1CQUFtQjtBQUVuQyxTQUFTLGVBQWUsaUJBQWlCO0FBQ3pDLFNBQVMsNEJBQTRCO0FBQ3JDLFNBQVMsUUFBUSxhQUFhO0FBQzlCLFNBQVMsMkJBQTJCO0FBRXBDLE1BQU0sa0JBQWtCO0FBQUEsRUFDdEIsR0FBRztBQUFBLEVBQ0gsSUFBSTtBQUFBLEVBQ0osS0FBSztBQUFBLEVBQ0wsSUFBSTtBQUFBLEVBQ0osR0FBRztBQUFBLEVBQ0gsSUFBSTtBQUFBLEVBQ0osS0FBSztBQUNQO0FBRUEsU0FBUyxzQkFBc0IsT0FBTztBQUNwQyxRQUFNLE1BQU0sT0FBTyxTQUFTLEVBQUUsRUFBRSxLQUFLO0FBQ3JDLFFBQU0sYUFBYSxJQUFJLFFBQVEsTUFBTSxFQUFFLEVBQUUsWUFBWTtBQUNyRCxRQUFNLFNBQVMsZ0JBQWdCLFVBQVU7QUFDekMsTUFBSSxDQUFDLE9BQVEsT0FBTSxJQUFJLE1BQU0sK0JBQStCLEdBQUcsR0FBRztBQUNsRSxNQUFJLElBQUksU0FBUyxNQUFHLEVBQUcsUUFBTyxFQUFFLFFBQVEsU0FBUyxPQUFPO0FBQ3hELE1BQUksUUFBUSxJQUFJLFlBQVksRUFBRyxRQUFPLEVBQUUsUUFBUSxTQUFTLElBQUk7QUFDN0QsU0FBTyxFQUFFLFFBQVEsU0FBUyxJQUFJO0FBQ2hDO0FBRUEsU0FBUyx1QkFBdUIsTUFBTSxhQUFhO0FBQ2pELFFBQU0sUUFBUSxNQUFNLElBQUk7QUFDeEIsTUFBSSxDQUFDLE1BQU0sUUFBUSxLQUFLLEtBQUssTUFBTSxTQUFTLEdBQUc7QUFDN0MsVUFBTSxJQUFJLE1BQU0sdUNBQXVDLElBQUksR0FBRztBQUFBLEVBQ2hFO0FBRUEsUUFBTSxTQUFTLE9BQU8sZUFBZSxFQUFF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QUssQ0FBQyxFQUFFLFNBQVMsWUFDaEIsS0FBSyxDQUFDLEVBQUUsVUFBVSxPQUFPLEtBQUssQ0FBQyxFQUFFLFVBQVUsTUFDL0M7QUFDQSxpQkFBSyxRQUFRLEtBQUssQ0FBQyxFQUFFLFVBQVUsTUFBTSxVQUFVO0FBQy9DLG1CQUFPLEtBQUssTUFBTSxDQUFDO0FBQUEsVUFDckI7QUFDQSxjQUFJLEtBQUssU0FBUyxHQUFHO0FBQ25CLGlCQUFLLFNBQVM7QUFBQSxVQUNoQjtBQUFBLFFBQ0Y7QUEyQkEsWUFBSSxlQUFlO0FBQ25CLFlBQUksS0FBSyxTQUFTLE1BQU0sUUFBUSxLQUFLLEtBQUssR0FBRztBQUMzQyxlQUFLLE1BQU0sUUFBUSxXQUFTO0FBQzFCLGdCQUFJLE1BQU0sU0FBUyxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVU7QUFDL0QsOEJBQWdCLGtCQUFrQixNQUFNLEtBQUs7QUFBQSxZQUMvQztBQUFBLFVBQ0YsQ0FBQztBQUFBLFFBQ0g7QUFDQSxZQUFJLEtBQUssUUFBUSxNQUFNLFFBQVEsS0FBSyxJQUFJLEdBQUc7QUFDekMsZUFBSyxLQUFLLFFBQVEsV0FBUztBQUN6QixnQkFBSSxNQUFNLFNBQVMsYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVO0FBQy9ELDhCQUFnQixrQkFBa0IsTUFBTSxLQUFLO0FBQUEsWUFDL0M7QUFBQSxVQUNGLENBQUM7QUFBQSxRQUNIO0FBR0EsWUFBSSxDQUFDLGtCQUFrQixPQUFPLEdBQUc7QUFDL0IsNEJBQWtCLE9BQU8sSUFBSTtBQUFBLFFBQy9CO0FBQ0EsMEJBQWtCLE9BQU8sS0FBSztBQUU5QixhQUFLLE9BQU8sRUFBRSxLQUFLLElBQUk7QUFBQSxNQUN6QjtBQUFBLElBQ0YsU0FBUyxHQUFHO0FBQ1YsWUFBTSxNQUFNLE9BQU8sTUFBTSxXQUFXLElBQUksRUFBRTtBQUUxQyxZQUFNLElBQUksWUFBWSxHQUFHLEdBQUc7QUFBQSxZQUFlLE1BQU0sQ0FBQztBQUFBLEVBQUssSUFBSSxFQUFFO0FBQUEsSUFDL0Q7QUFBQSxFQUNGLENBQUM7QUFFRCxNQUFJLE9BQU87QUFDVCxXQUFPLEtBQUssSUFBSTtBQUFBLEVBQ2xCO0FBQ0EsUUFBTSxTQUFTLEVBQUUsTUFBTSxNQUFNLE9BQU87QUFDcEMsU0FBTyxlQUFlLFFBQVEscUJBQXFCO0FBQUEsSUFDakQsT0FBTztBQUFBLElBQ1AsWUFBWTtBQUFBLElBQ1osY0FBYztBQUFBLElBQ2QsVUFBVTtBQUFBLEVBQ1osQ0FBQztBQUNELFNBQU87QUFDVDsiLAogICJuYW1lcyI6IFtdCn0K
