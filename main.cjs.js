var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/lib/utils.js
var require_utils = __commonJS({
  "src/lib/utils.js"(exports2, module2) {
    function flatten(value) {
      return value.reduce((prev, cur) => prev.concat(cur), []);
    }
    function repeat(value, times) {
      const out = [];
      while (times) {
        out.push(value);
        times -= 1;
      }
      return out;
    }
    function range(min, max, step) {
      const acc = [];
      if (!step) {
        for (let i = min; i <= max; i += 1) {
          acc.push(i);
        }
      } else {
        const diff = (max - min) / step;
        for (let i = min; i <= max; i += diff) {
          acc.push(i);
        }
      }
      return acc;
    }
    function clone(value) {
      if (!value || typeof value !== "object") return value;
      if (Array.isArray(value)) return value.map(clone);
      const copy = {};
      Object.keys(value).forEach((key) => {
        copy[key] = clone(value[key]);
      });
      return copy;
    }
    function zip(a, b, cb) {
      const max = Math.max(a.length, b.length);
      for (let i = 0; i < max; i += 1) {
        if (typeof a[i] !== "undefined" && typeof b[i] !== "undefined") cb(a[i], b[i]);
      }
    }
    Object.assign(module2.exports, { clone, flatten, range, repeat, zip });
  }
});

// node_modules/harmonics/main.js
var require_main = __commonJS({
  "node_modules/harmonics/main.js"(exports2) {
    (() => {
      "use strict";
      var n = { 413: (n2) => {
        n2.exports = JSON.parse('{"5th":"100000010000","M7#5sus4":"100001001001","7#5sus4":"100001001010","sus4":"100001010000","M7sus4":"100001010001","7sus4":"100001010010","7no5":"100010000010","aug":"100010001000","M7b6":"100010001001","maj7#5":"100010001001","7#5":"100010001010","7b13":"100010001010","M":"100010010000","maj7":"100010010001","7th":"100010010010","6th":"100010010100","7add6":"100010010110","7b6":"100010011010","Mb5":"100010100000","M7b5":"100010100001","7b5":"100010100010","maj#4":"100010110001","7#11":"100010110010","M6#11":"100010110100","7#11b13":"100010111010","m#5":"100100001000","mb6M7":"100100001001","m7#5":"100100001010","m":"100100010000","m/ma7":"100100010001","m7":"100100010010","m6":"100100010100","mMaj7b6":"100100011001","dim":"100100100000","oM7":"100100100001","m7b5":"100100100010","dim7":"100100100100","o7M7":"100100100101","4th":"100101000010","madd4":"100101010000","m7add11":"100101010010","+add#9":"100110001000","7#5#9":"100110001010","7#9":"100110010010","13#9":"100110010110","7#9b13":"100110011010","maj7#9#11":"100110110001","7#9#11":"100110110010","13#9#11":"100110110110","7#9#11b13":"100110111010","sus2":"101000010000","M9#5sus4":"101001001001","sus24":"101001010000","M9sus4":"101001010001","11th":"101001010010","9sus4":"101001010010","13sus4":"101001010110","9no5":"101010000010","13no5":"101010000110","M#5add9":"101010001000","maj9#5":"101010001001","9#5":"101010001010","9b13":"101010001010","Madd9":"101010010000","maj9":"101010010001","9th":"101010010010","6/9":"101010010100","maj13":"101010010101","M7add13":"101010010101","13th":"101010010110","M9b5":"101010100001","9b5":"101010100010","13b5":"101010100110","9#5#11":"101010101010","maj9#11":"101010110001","9#11":"101010110010","69#11":"101010110100","M13#11":"101010110101","13#11":"101010110110","9#11b13":"101010111010","m9#5":"101100001010","madd9":"101100010000","mM9":"101100010001","m9":"101100010010","m69":"101100010100","m13":"101100010110","mMaj9b6":"101100011001","m9b5":"101100100010","m11A":"101101001010","m11":"101101010010","b9sus":"110001010010","11b9":"110001010010","7sus4b9b13":"110001011010","alt7":"110010000010","7#5b9":"110010001010","Maddb9":"110010010000","M7b9":"110010010001","7b9":"110010010010","13b9":"110010010110","7b9b13":"110010011010","7#5b9#11":"110010101010","7b9#11":"110010110010","13b9#11":"110010110110","7b9b13#11":"110010111010","mb6b9":"110100001000","7b9#9":"110110010010"}');
      }, 722: (n2) => {
        n2.exports = JSON.parse(`{"major pentatonic":"101010010100","ionian pentatonic":"100011010001","mixolydian pentatonic":"100011010010","ritusen":"101001010100","egyptian":"101001010010","neopolitan major pentatonic":"100011100010","vietnamese 1":"100101011000","pelog":"110100011000","kumoijoshi":"110001011000","hirajoshi":"101100011000","iwato":"110001100010","in-sen":"110001010010","lydian pentatonic":"100010110001","malkos raga":"100101001010","locrian pentatonic":"100101100010","minor pentatonic":"100101010010","minor six pentatonic":"100101010100","flat three pentatonic":"101100010100","flat six pentatonic":"101010011000","scriabin":"110010010100","whole tone pentatonic":"100010101010","lydian #5P pentatonic":"100010101001","lydian dominant pentatonic":"100010110010","minor #7M pentatonic":"100101010001","super locrian pentatonic":"100110100010","minor hexatonic":"101101010001","augmented":"100110011001","major blues":"101110010100","piongio":"101001010110","prometheus neopolitan":"110010100110","prometheus":"101010100110","mystery #1":"110010101010","six tone symmetric":"110011001100","whole tone":"101010101010","messiaen's mode #5":"110001110001","minor blues":"100101110010","locrian major":"101011101010","double harmonic lydian":"110010111001","harmonic minor":"101101011001","altered":"110110101010","locrian #2":"101101101010","mixolydian b6":"101011011010","lydian dominant":"101010110110","lydian":"101010110101","lydian augmented":"101010101101","dorian b2":"110101010110","melodic minor":"101101010101","locrian":"110101101010","ultralocrian":"110110101100","locrian 6":"110101100110","augmented heptatonic":"100111011001","romanian minor":"101100110110","dorian #4":"101100110110","lydian diminished":"101100110101","phrygian":"110101011010","leading whole tone":"101010101011","lydian minor":"101010111010","phrygian dominant":"110011011010","balinese":"110101011001","neopolitan major":"110101010101","aeolian":"101101011010","harmonic major":"101011011001","double harmonic major":"110011011001","dorian":"101101010110","hungarian minor":"101100111001","hungarian major":"100110110110","oriental":"110011100110","flamenco":"110110110010","todi raga":"110100111001","mixolydian":"101011010110","persian":"110011101001","major":"101011010101","enigmatic":"110010101011","major augmented":"101011001101","lydian #9":"100110110101","messiaen's mode #4":"111001111001","purvi raga":"110011111001","spanish heptatonic":"110111011010","bebop":"101011010111","bebop minor":"101111010110","bebop major":"101011011101","bebop locrian":"110101111010","minor bebop":"101101011011","diminished":"101101101101","ichikosucho":"101011110101","minor six diminished":"101101011101","half-whole diminished":"110110110110","kafi raga":"100111010111","messiaen's mode #6":"101011101011","composite blues":"101111110110","messiaen's mode #3":"101110111011","messiaen's mode #7":"111101111101","chromatic":"111111111111","ionian":"101011010101","minor":"101101011010"}`);
      } }, e = {};
      function o(a2) {
        var i2 = e[a2];
        if (void 0 !== i2) return i2.exports;
        var r2 = e[a2] = { exports: {} };
        return n[a2](r2, r2.exports, o), r2.exports;
      }
      o.d = (n2, e2) => {
        for (var a2 in e2) o.o(e2, a2) && !o.o(n2, a2) && Object.defineProperty(n2, a2, { enumerable: true, get: e2[a2] });
      }, o.o = (n2, e2) => Object.prototype.hasOwnProperty.call(n2, e2), o.r = (n2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n2, "__esModule", { value: true });
      };
      var a = {};
      (() => {
        o.r(a), o.d(a, { chord: () => m2, chords: () => t, inlineChord: () => r2, scale: () => c, scales: () => s });
        var n2 = o(722), e2 = o(413), i2 = function(o2) {
          var a2 = o2.scale, i3 = o2.chord, r3 = a2 || i3, t2 = a2 ? "scale" : "chord";
          if ("string" != typeof r3) throw new Error("".concat(r3, " is not a valid input for ").concat(t2));
          var s2, m3, c2 = r3.indexOf(" ");
          -1 === c2 ? (s2 = r3.slice(1), m3 = r3[0], "b" !== r3[1] && "#" !== r3[1] || (s2 = r3.slice(2), m3 += r3[1])) : (s2 = r3.slice(-1 === c2 ? 1 : c2 + 1), m3 = r3.slice(0, c2));
          var d = (function(n3) {
            return { "C#": "Db", "D#": "Eb", "F#": "Gb", "G#": "Ab", "A#": "Bb" }[n3.toUpperCase()] || n3.charAt(0).toUpperCase() + n3.slice(1);
          })(m3.replace(/\d/g, "")), l = "" !== m3.replace(/\D/g, "") ? +m3.replace(/\D/g, "") : 4;
          if (isNaN(l)) throw new Error("".concat(m3[0], " does not have a valid octave"));
          if (!n2[s2] && !e2[s2]) throw new Error("".concat(r3, " is not a valid ").concat(t2));
          for (var b = (function(n3, e3) {
            var o3 = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"], a3 = o3.map((function(n4) {
              return n4 + e3;
            })), i4 = o3.map((function(n4) {
              return n4 + (e3 + 1);
            })), r4 = a3.concat(i4);
            return r4.slice(r4.indexOf(n3 + e3));
          })(d, l), u = [], p = 0, h = 0, f = a2 ? n2 : e2; p < f[s2].length; ) "1" === f[s2][p] && u.push(b[h]), p++, h++;
          return u;
        }, r2 = function(n3) {
          var e3, o2, a2 = "b9sus", r3 = 4;
          return n3.includes(a2) ? (o2 = a2, e3 = n3.slice(0, n3.indexOf(a2))) : (e3 = n3[0], o2 = n3.slice(1), "b" !== n3[1] && "#" !== n3[1] || (e3 += n3[1], o2 = n3.slice(2))), n3.includes("_") && (r3 = +n3.split("_")[1], o2 = o2.slice(0, o2.indexOf("_"))), i2({ chord: e3 + r3 + " " + o2 });
        }, t = function() {
          return Object.keys(e2);
        }, s = function() {
          return Object.keys(n2);
        }, m2 = function(n3) {
          return i2({ chord: n3 });
        }, c = function(n3) {
          return i2({ scale: n3 });
        };
      })();
      var i = exports2;
      for (var r in a) i[r] = a[r];
      a.__esModule && Object.defineProperty(i, "__esModule", { value: true });
    })();
  }
});

// src/lib/tokenize.js
var require_tokenize = __commonJS({
  "src/lib/tokenize.js"(exports2, module2) {
    var { inlineChord } = require_main();
    var RE_SEPARATOR = /\|/;
    var RE_PATTERN = /^(?:[x_-]|\[.+?\])+$/;
    var RE_NUMBER = /^(?:\.?\d+|\d+(?:\.\d+)?)$/;
    var RE_CHORD = /^[a-gA-G][^#\s]*\d+(?:\.\.)?$/;
    var RE_NOTE = /^[a-gA-G][#b]?\d+$/;
    var RE_MODE = /^(?![ivIV]{1,3})[a-z]{2,}/;
    var RE_PROG = /^[ivIV]{1,3}°?$/;
    var RE_TRIM = /\.+$/;
    var CACHE = {};
    function split(value) {
      let data = [];
      try {
        data = JSON.stringify(value.split(/(?=[\d[\]x_-])/));
        data = data.replace(/,"\[",/g, ", [");
        data = data.replace(/"\[",/g, "[");
        data = data.replace(/,"\]"/g, "]");
        data = JSON.parse(data);
      } catch (e) {
      }
      return data;
    }
    function level(value) {
      if (!CACHE[value]) {
        if (value.includes("%")) {
          CACHE[value] = 127 * parseFloat(`.${value}`);
        } else if (value.includes("/")) {
          const [a, b] = value.split("/");
          CACHE[value] = a / b;
        } else if (value.includes("*")) {
          const [a, b] = value.split("*");
          CACHE[value] = a * b;
        } else {
          CACHE[value] = parseFloat(value);
        }
      }
      return CACHE[value];
    }
    function validate(re, value) {
      if (!CACHE[re.source + value]) {
        CACHE[re.source + value] = re.test(value);
      }
      return CACHE[re.source + value];
    }
    function isProgression(value) {
      return validate(RE_PROG, value);
    }
    function isPattern(value) {
      return validate(RE_PATTERN, value);
    }
    function isNumber(value) {
      return validate(RE_NUMBER, value);
    }
    function isChord(value) {
      return validate(RE_CHORD, value);
    }
    function isNote(value) {
      return validate(RE_NOTE, value);
    }
    function isMode(value) {
      return validate(RE_MODE, value);
    }
    function getType(value) {
      const key = `T${value}`;
      if (!CACHE[key]) {
        if (isNote(value)) CACHE[key] = "note";
        else if (isChord(value)) CACHE[key] = "chord";
        else if (isPattern(value)) CACHE[key] = "pattern";
        else if (isMode(value)) CACHE[key] = "mode";
        else if (isNumber(value)) CACHE[key] = "number";
        else CACHE[key] = "value";
      }
      return CACHE[key];
    }
    function transform(expression) {
      if (!expression || typeof expression !== "string") {
        throw new Error(`Expecting a valid string, given '${expression}'`);
      }
      if (CACHE[`$${expression}`]) return CACHE[`$${expression}`];
      const tokens = expression.split(/\s+/);
      if (!tokens.length) {
        throw new Error(`Expecting a valid expression, given '${expression}'`);
      }
      const ast = [];
      const carry = [];
      function add(type, value) {
        const item = { type, value };
        if (type === "number" && typeof value === "string") {
          item.value = typeof value === "string" ? level(value) : value;
        }
        if (type === "chord" && typeof value === "string") {
          item.value = inlineChord(value.replace(RE_TRIM, ""));
          if (value.includes("..")) {
            item.unfold = true;
          }
        }
        if (type === "value" && value.indexOf("x") > -1) {
          const x = value.split("x");
          if (!(isNumber(x[0]) && isNumber(x[1]))) {
            throw new Error(`Expecting valid numbers for ${type}, given '${value}'`);
          }
          item.value = parseInt(x[0], 10);
          item.repeat = parseInt(x[1], 10);
          item.type = "number";
        }
        ast.push(item);
      }
      tokens.reduce((prev, cur, i) => {
        let type;
        const next = tokens[i + 1];
        const last = ast[ast.length - 1] || {};
        if (RE_SEPARATOR.test(cur)) {
          add("chord", cur.split(RE_SEPARATOR));
          return prev;
        }
        if (typeof cur === "string" && (cur.includes("/") && cur.indexOf("/") > 0 || cur.includes("*") && cur.indexOf("*") > 0 || cur.includes("%") && cur.indexOf("%") > 0)) {
          add("number", level(cur));
          return prev;
        }
        if (cur.indexOf("%") > -1) {
          if (cur === "%") {
            if (!last.type) {
              throw new Error(`Missing expression to repeat, given '${tokens.slice(0, i).join(" ")}'`);
            }
            last.repeat = last.repeat || 1;
            last.repeat += 1;
          } else {
            add("param", cur);
          }
          return prev;
        }
        if (isProgression(cur)) {
          last.value += ` ${cur}`;
          return prev;
        }
        if (cur.charAt() === "#") {
          add("channel", cur);
          return prev;
        }
        if (isNote(cur) || isChord(cur) || isMode(cur) || isNumber(cur)) {
          carry.push(cur);
          if (!next || carry.length === 3 || !(isNote(next) || isMode(next) || isNumber(next))) {
            const old = carry.splice(0, carry.length);
            const test = old[0];
            let mode = old[1];
            let octave = old[2];
            if (!octave && isNumber(mode)) {
              octave = mode;
              mode = void 0;
            }
            if (test.length < 2 && isNote(test) && (isMode(mode) || isNumber(octave))) {
              add("mode", old.join(" "));
              return prev;
            }
            old.forEach((x) => {
              add(x.length > 1 || !isNote(x) ? getType(x) : "mode", x);
            });
          }
          return prev;
        }
        if (typeof cur === "string" && cur.indexOf("..") > -1) {
          const parts = cur.split("..");
          const min = parts[0] || 1;
          const max = parts[1] || Infinity;
          type = "slice";
          cur = [min, max];
        }
        if (typeof cur === "string" && (cur.charAt() === "/" || cur.charAt() === "*")) {
          const operator = cur.charAt() === "/" ? "divide" : "multiply";
          const number = cur.substr(1);
          if (!isNumber(number)) {
            throw new Error(`Expecting a valid expression to ${operator}, given '${tokens.slice(0, i).join(" ")} ${cur}'`);
          }
          add(operator, parseFloat(number));
          return prev;
        }
        if (!type && getType(cur) === "value" && Array.isArray(last.value)) {
          last.value[1] = last.value[1] || "";
          last.value[1] += last.value[1] ? " " : "";
          last.value[1] += cur;
          return cur;
        }
        add(type || getType(cur), typeof cur === "string" && isNumber(cur) ? parseInt(cur, 10) : cur);
        return cur;
      }, null);
      CACHE[`$${expression}`] = ast;
      return ast;
    }
    Object.assign(module2.exports, { RE_CHORD, RE_MODE, RE_NOTE, RE_NUMBER, RE_PATTERN, RE_PROG, RE_SEPARATOR, RE_TRIM, getType, isChord, isMode, isNote, isNumber, isPattern, isProgression, level, split, transform, validate });
  }
});

// node_modules/scribbletune/src/utils.ts
var pickOne, dice;
var init_utils = __esm({
  "node_modules/scribbletune/src/utils.ts"() {
    pickOne = (arr) => arr.length > 1 ? arr[Math.round(Math.random())] : arr[0];
    dice = () => !!Math.round(Math.random());
  }
});

// node_modules/scribbletune/src/progression.ts
var progression_exports = {};
__export(progression_exports, {
  getChordDegrees: () => getChordDegrees,
  getChordsByProgression: () => getChordsByProgression,
  progression: () => progression
});
var import_harmonics, getChordDegrees, idxByDegree, getChordName, getChordsByProgression, getProgFactory, M, m, progression;
var init_progression = __esm({
  "node_modules/scribbletune/src/progression.ts"() {
    import_harmonics = __toESM(require_main());
    init_utils();
    getChordDegrees = (mode) => {
      const theRomans = {
        ionian: ["I", "ii", "iii", "IV", "V", "vi", "vii\xB0"],
        dorian: ["i", "ii", "III", "IV", "v", "vi\xB0", "VII"],
        phrygian: ["i", "II", "III", "iv", "v\xB0", "VI", "vii"],
        lydian: ["I", "II", "iii", "iv\xB0", "V", "vi", "vii"],
        mixolydian: ["I", "ii", "iii\xB0", "IV", "v", "vi", "VII"],
        aeolian: ["i", "ii\xB0", "III", "iv", "v", "VI", "VII"],
        locrian: ["i\xB0", "II", "iii", "iv", "V", "VI", "vii"],
        "melodic minor": ["i", "ii", "III+", "IV", "V", "vi\xB0", "vii\xB0"],
        "harmonic minor": ["i", "ii\xB0", "III+", "iv", "V", "VI", "vii\xB0"]
      };
      theRomans.major = theRomans.ionian;
      theRomans.minor = theRomans.aeolian;
      return theRomans[mode] || [];
    };
    idxByDegree = {
      i: 0,
      ii: 1,
      iii: 2,
      iv: 3,
      v: 4,
      vi: 5,
      vii: 6
    };
    getChordName = (roman) => {
      const str = roman.replace(/\W/g, "");
      let prefix = "M";
      if (str.toLowerCase() === str) {
        prefix = "m";
      }
      if (roman.indexOf("\xB0") > -1) {
        return prefix + "7b5";
      }
      if (roman.indexOf("+") > -1) {
        return prefix + "#5";
      }
      if (roman.indexOf("7") > -1) {
        return prefix === "M" ? "maj7" : "m7";
      }
      return prefix;
    };
    getChordsByProgression = (noteOctaveScale, chordDegress) => {
      const noteOctaveScaleArr = noteOctaveScale.split(" ");
      if (!noteOctaveScaleArr[0].match(/\d/)) {
        noteOctaveScaleArr[0] += "4";
        noteOctaveScale = noteOctaveScaleArr.join(" ");
      }
      const mode = (0, import_harmonics.scale)(noteOctaveScale);
      const chordDegreesArr = chordDegress.replace(/\s*,+\s*/g, " ").split(" ");
      const chordFamily = chordDegreesArr.map((roman, idx) => {
        const chordName = getChordName(roman);
        const scaleId = idxByDegree[roman.replace(/\W|\d/g, "").toLowerCase()];
        const note2 = mode[scaleId];
        const oct = note2.replace(/\D+/, "");
        return note2.replace(/\d/, "") + chordName + "_" + oct;
      });
      return chordFamily.toString().replace(/,/g, " ");
    };
    getProgFactory = ({ T, P, D }) => {
      return (count = 4) => {
        const chords = [];
        chords.push(pickOne(T));
        let i = 1;
        if (i < count - 1) {
          chords.push(pickOne(P));
          i++;
        }
        if (i < count - 1 && dice()) {
          chords.push(pickOne(P));
          i++;
        }
        if (i < count - 1) {
          chords.push(pickOne(D));
          i++;
        }
        if (i < count - 1) {
          chords.push(pickOne(P));
          i++;
        }
        if (i < count - 1) {
          chords.push(pickOne(D));
          i++;
        }
        if (i < count - 1 && dice()) {
          chords.push(pickOne(P));
          i++;
        }
        while (i < count) {
          chords.push(pickOne(D));
          i++;
        }
        return chords;
      };
    };
    M = getProgFactory({ T: ["I", "vi"], P: ["ii", "IV"], D: ["V"] });
    m = getProgFactory({ T: ["i", "VI"], P: ["ii", "iv"], D: ["V"] });
    progression = (scaleType, count = 4) => {
      if (scaleType === "major" || scaleType === "M") {
        return M(count);
      }
      if (scaleType === "minor" || scaleType === "m") {
        return m(count);
      }
    };
  }
});

// src/lib/parser.js
var require_parser = __commonJS({
  "src/lib/parser.js"(exports2, module2) {
    var { getChordsByProgression: getChordsByProgression2 } = (init_progression(), __toCommonJS(progression_exports));
    var { scale: scale2, inlineChord } = require_main();
    var { isProgression, transform } = require_tokenize();
    var { repeat, clone } = require_utils();
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
          case "param":
          case "value":
            {
              let value = null;
              if (typeof context[cur.value] !== "undefined") value = context[cur.value];
              if (value === null) {
                throw new Error(`Missing expression for '${cur.value}'`);
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
          const chunks = item.split(" ");
          if (chunks.some(isProgression)) {
            const offset = chunks.findIndex(isProgression);
            const [a, b] = [chunks.slice(0, offset), chunks.slice(offset)];
            memo.push(getChordsByProgression2(a.join(" "), b.join(" ")).split(" ").map((x) => fn(inlineChord(x))));
          } else {
            memo.push(fn(scale2(item)));
          }
        } else {
          memo.push(fn(item));
        }
        return memo;
      }, []);
    }
    function parse2(buffer) {
      const tracks = {};
      const main = [];
      const data = {};
      let channel = null;
      let prefix = "";
      let track;
      let info = {};
      buffer.split(/\r?\n/g).forEach((line, nth) => {
        line = line.replace(/;.+?$/, "").trim();
        if (!line) return;
        try {
          if (line.charAt() === "%") {
            const [name, ...value] = line.split(/\s+/);
            if (value.length > 0) {
              data[name] = transform(value.join(" "));
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
            main.push(transform(line.substr(1).trim()));
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
            const ticks = transform(line);
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
            channel = prefix + inputs[0].value;
            if (!info[channel]) {
              info[channel] = [];
            }
            let spec;
            if (notes > 0 && index === -1) {
              const end = info[channel][info[channel].length - 1];
              end.data = value.slice(notes);
              spec = {
                input: end.input,
                values: value.slice(1, notes)
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
              spec.values = inputs.slice(1);
            }
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
      return { main, data, tracks };
    }
    Object.assign(module2.exports, { parse: parse2, reduce });
  }
});

// node_modules/note-parser/index.js
function isNum(x) {
  return typeof x === "number";
}
function isStr(x) {
  return typeof x === "string";
}
function isDef(x) {
  return typeof x !== "undefined";
}
function midiToFreq(midi2, tuning) {
  return Math.pow(2, (midi2 - 69) / 12) * (tuning || 440);
}
function parse(str, isTonic, tuning) {
  if (typeof str !== "string") return null;
  var m2 = REGEX.exec(str);
  if (!m2 || !isTonic && m2[4]) return null;
  var p = { letter: m2[1].toUpperCase(), acc: m2[2].replace(/x/g, "##") };
  p.pc = p.letter + p.acc;
  p.step = (p.letter.charCodeAt(0) + 3) % 7;
  p.alt = p.acc[0] === "b" ? -p.acc.length : p.acc.length;
  var pos = SEMITONES[p.step] + p.alt;
  p.chroma = pos < 0 ? 12 + pos : pos % 12;
  if (m2[3]) {
    p.oct = +m2[3];
    p.midi = pos + 12 * (p.oct + 1);
    p.freq = midiToFreq(p.midi, tuning);
  }
  if (isTonic) p.tonicOf = m2[4];
  return p;
}
function midi(note2) {
  if ((isNum(note2) || isStr(note2)) && note2 >= 0 && note2 < 128) return +note2;
  var p = parse(note2);
  return p && isDef(p.midi) ? p.midi : null;
}
var REGEX, SEMITONES;
var init_note_parser = __esm({
  "node_modules/note-parser/index.js"() {
    "use strict";
    REGEX = /^([a-gA-G])(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)\s*$/;
    SEMITONES = [0, 2, 4, 5, 7, 9, 11];
  }
});

// node_modules/tonal-midi/index.js
var tonal_midi_exports = {};
__export(tonal_midi_exports, {
  note: () => note,
  toMidi: () => toMidi
});
function toMidi(val) {
  if (Array.isArray(val) && val.length === 2) return val[0] * 7 + val[1] * 12 + 12;
  return midi(val);
}
function note(num, sharps) {
  if (num === true || num === false) return function(m2) {
    return note(m2, num);
  };
  num = Math.round(num);
  var pcs = sharps === true ? SHARPS : FLATS;
  var pc = pcs[num % 12];
  var o = Math.floor(num / 12) - 1;
  return pc + o;
}
var FLATS, SHARPS;
var init_tonal_midi = __esm({
  "node_modules/tonal-midi/index.js"() {
    init_note_parser();
    FLATS = "C Db D Eb E F Gb G Ab A Bb B".split(" ");
    SHARPS = "C C# D D# E F F# G G# A A# B".split(" ");
  }
});

// node_modules/midi-writer-js/package.json
var require_package = __commonJS({
  "node_modules/midi-writer-js/package.json"(exports2, module2) {
    module2.exports = {
      name: "midi-writer-js",
      version: "2.0.1",
      description: "A library providing an API for generating MIDI files.",
      main: "build/index.js",
      types: "types.d.ts",
      dependencies: {
        "tonal-midi": "^0.69.7"
      },
      devDependencies: {
        "@babel/core": "^7.9.6",
        "@babel/plugin-transform-destructuring": "^7.9.5",
        "@babel/preset-env": "^7.9.6",
        "@rollup/plugin-babel": "^5.0.0",
        eslint: "^7.0.0",
        "eslint-config-standard": "^12.0.0",
        "eslint-plugin-import": "^2.20.2",
        "eslint-plugin-node": "^9.2.0",
        "eslint-plugin-promise": "^4.1.1",
        "eslint-plugin-standard": "^4.0.1",
        jsdoc: "^3.6.4",
        minami: "^1.2.3",
        mocha: "^9.0.1",
        nyc: "^15.0.1",
        rollup: "^2.9.0",
        watch: "^1.0.2"
      },
      directories: {
        lib: "src",
        example: "examples",
        test: "test"
      },
      scripts: {
        build: "mkdir -p build && rollup -c && npm run docs",
        docs: "./node_modules/.bin/jsdoc -r src README.md -d ./docs -t ./node_modules/minami",
        "lint:js": "eslint 'src/**/**.js'",
        prepublishOnly: "npm test",
        pretest: "npm run build",
        test: "nyc --reporter=text mocha --no-config --no-package",
        watch: "watch 'npm run build' src",
        postinstall: "node postinstall.js"
      },
      runkitExampleFilename: "runkit.js",
      repository: {
        type: "git",
        url: "git+https://github.com/grimmdude/MidiWriterJS.git"
      },
      keywords: [
        "midi",
        "generator",
        "music"
      ],
      author: "Garrett Grimm",
      license: "MIT",
      bugs: {
        url: "https://github.com/grimmdude/MidiWriterJS/issues"
      },
      homepage: "https://github.com/grimmdude/MidiWriterJS#readme"
    };
  }
});

// node_modules/midi-writer-js/build/index.js
var require_build = __commonJS({
  "node_modules/midi-writer-js/build/index.js"(exports2, module2) {
    "use strict";
    var tonalMidi = (init_tonal_midi(), __toCommonJS(tonal_midi_exports));
    var Constants = {
      VERSION: require_package().version,
      HEADER_CHUNK_TYPE: [77, 84, 104, 100],
      // Mthd
      HEADER_CHUNK_LENGTH: [0, 0, 0, 6],
      // Header size for SMF
      HEADER_CHUNK_FORMAT0: [0, 0],
      // Midi Type 0 id
      HEADER_CHUNK_FORMAT1: [0, 1],
      // Midi Type 1 id
      HEADER_CHUNK_DIVISION: [0, 128],
      // Defaults to 128 ticks per beat
      TRACK_CHUNK_TYPE: [77, 84, 114, 107],
      // MTrk,
      META_EVENT_ID: 255,
      META_TEXT_ID: 1,
      META_COPYRIGHT_ID: 2,
      META_TRACK_NAME_ID: 3,
      META_INSTRUMENT_NAME_ID: 4,
      META_LYRIC_ID: 5,
      META_MARKER_ID: 6,
      META_CUE_POINT: 7,
      META_TEMPO_ID: 81,
      META_SMTPE_OFFSET: 84,
      META_TIME_SIGNATURE_ID: 88,
      META_KEY_SIGNATURE_ID: 89,
      META_END_OF_TRACK_ID: [47, 0],
      CONTROLLER_CHANGE_STATUS: 176,
      // includes channel number (0)
      PROGRAM_CHANGE_STATUS: 192,
      // includes channel number (0)
      PITCH_BEND_STATUS: 224
      // includes channel number (0)
    };
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    function _wrapRegExp() {
      _wrapRegExp = function(re, groups) {
        return new BabelRegExp(re, void 0, groups);
      };
      var _super = RegExp.prototype;
      var _groups = /* @__PURE__ */ new WeakMap();
      function BabelRegExp(re, flags, groups) {
        var _this = new RegExp(re, flags);
        _groups.set(_this, groups || _groups.get(re));
        return _setPrototypeOf(_this, BabelRegExp.prototype);
      }
      _inherits(BabelRegExp, RegExp);
      BabelRegExp.prototype.exec = function(str) {
        var result = _super.exec.call(this, str);
        if (result) result.groups = buildGroups(result, this);
        return result;
      };
      BabelRegExp.prototype[Symbol.replace] = function(str, substitution) {
        if (typeof substitution === "string") {
          var groups = _groups.get(this);
          return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function(_, name) {
            return "$" + groups[name];
          }));
        } else if (typeof substitution === "function") {
          var _this = this;
          return _super[Symbol.replace].call(this, str, function() {
            var args = arguments;
            if (typeof args[args.length - 1] !== "object") {
              args = [].slice.call(args);
              args.push(buildGroups(args, _this));
            }
            return substitution.apply(this, args);
          });
        } else {
          return _super[Symbol.replace].call(this, str, substitution);
        }
      };
      function buildGroups(result, re) {
        var g = _groups.get(re);
        return Object.keys(g).reduce(function(groups, name) {
          groups[name] = result[g[name]];
          return groups;
        }, /* @__PURE__ */ Object.create(null));
      }
      return _wrapRegExp.apply(this, arguments);
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var Utils = /* @__PURE__ */ (function() {
      function Utils2() {
        _classCallCheck(this, Utils2);
      }
      _createClass(Utils2, null, [{
        key: "version",
        value: (
          /**
           * Gets MidiWriterJS version number.
           * @return {string}
           */
          function version() {
            return Constants.VERSION;
          }
        )
        /**
         * Convert a string to an array of bytes
         * @param {string} string
         * @return {array}
         */
      }, {
        key: "stringToBytes",
        value: function stringToBytes(string) {
          return string.split("").map(function(_char) {
            return _char.charCodeAt();
          });
        }
        /**
         * Checks if argument is a valid number.
         * @param {*} n - Value to check
         * @return {boolean}
         */
      }, {
        key: "isNumeric",
        value: function isNumeric(n) {
          return !isNaN(parseFloat(n)) && isFinite(n);
        }
        /**
         * Returns the correct MIDI number for the specified pitch.
         * Uses Tonal Midi - https://github.com/danigb/tonal/tree/master/packages/midi
         * @param {(string|number)} pitch - 'C#4' or midi note code
         * @return {number}
         */
      }, {
        key: "getPitch",
        value: function getPitch(pitch) {
          return tonalMidi.toMidi(pitch);
        }
        /**
         * Translates number of ticks to MIDI timestamp format, returning an array of
         * hex strings with the time values. Midi has a very particular time to express time,
         * take a good look at the spec before ever touching this function.
         * Thanks to https://github.com/sergi/jsmidi
         *
         * @param {number} ticks - Number of ticks to be translated
         * @return {array} - Bytes that form the MIDI time value
         */
      }, {
        key: "numberToVariableLength",
        value: function numberToVariableLength(ticks) {
          ticks = Math.round(ticks);
          var buffer = ticks & 127;
          while (ticks = ticks >> 7) {
            buffer <<= 8;
            buffer |= ticks & 127 | 128;
          }
          var bList = [];
          while (true) {
            bList.push(buffer & 255);
            if (buffer & 128) buffer >>= 8;
            else {
              break;
            }
          }
          return bList;
        }
        /**
         * Counts number of bytes in string
         * @param {string} s
         * @return {array}
         */
      }, {
        key: "stringByteCount",
        value: function stringByteCount(s) {
          return encodeURI(s).split(/%..|./).length - 1;
        }
        /**
         * Get an int from an array of bytes.
         * @param {array} bytes
         * @return {number}
         */
      }, {
        key: "numberFromBytes",
        value: function numberFromBytes(bytes) {
          var hex = "";
          var stringResult;
          bytes.forEach(function(_byte) {
            stringResult = _byte.toString(16);
            if (stringResult.length == 1) stringResult = "0" + stringResult;
            hex += stringResult;
          });
          return parseInt(hex, 16);
        }
        /**
         * Takes a number and splits it up into an array of bytes.  Can be padded by passing a number to bytesNeeded
         * @param {number} number
         * @param {number} bytesNeeded
         * @return {array} - Array of bytes
         */
      }, {
        key: "numberToBytes",
        value: function numberToBytes(number, bytesNeeded) {
          bytesNeeded = bytesNeeded || 1;
          var hexString = number.toString(16);
          if (hexString.length & 1) {
            hexString = "0" + hexString;
          }
          var hexArray = hexString.match(/.{2}/g);
          hexArray = hexArray.map(function(item) {
            return parseInt(item, 16);
          });
          if (hexArray.length < bytesNeeded) {
            while (bytesNeeded - hexArray.length > 0) {
              hexArray.unshift(0);
            }
          }
          return hexArray;
        }
        /**
         * Converts value to array if needed.
         * @param {string} value
         * @return {array}
         */
      }, {
        key: "toArray",
        value: function toArray(value) {
          if (Array.isArray(value)) return value;
          return [value];
        }
        /**
         * Converts velocity to value 0-127
         * @param {number} velocity - Velocity value 1-100
         * @return {number}
         */
      }, {
        key: "convertVelocity",
        value: function convertVelocity(velocity) {
          velocity = velocity > 100 ? 100 : velocity;
          return Math.round(velocity / 100 * 127);
        }
        /**
         * Gets the total number of ticks of a specified duration.
         * Note: type=='note' defaults to quarter note, type==='rest' defaults to 0
         * @param {(string|array)} duration
         * @return {number}
         */
      }, {
        key: "getTickDuration",
        value: function getTickDuration(duration) {
          if (Array.isArray(duration)) {
            return duration.map(function(value) {
              return Utils2.getTickDuration(value);
            }).reduce(function(a, b) {
              return a + b;
            }, 0);
          }
          duration = duration.toString();
          if (duration.toLowerCase().charAt(0) === "t") {
            return parseInt(duration.substring(1));
          }
          var quarterTicks = Utils2.numberFromBytes(Constants.HEADER_CHUNK_DIVISION);
          var tickDuration = quarterTicks * Utils2.getDurationMultiplier(duration);
          return Utils2.getRoundedIfClose(tickDuration);
        }
        /**
         * Due to rounding errors in JavaScript engines,
         * it's safe to round when we're very close to the actual tick number
         *
         * @static
         * @param {number} tick
         * @return {number}
         */
      }, {
        key: "getRoundedIfClose",
        value: function getRoundedIfClose(tick) {
          var roundedTick = Math.round(tick);
          return Math.abs(roundedTick - tick) < 1e-6 ? roundedTick : tick;
        }
        /**
         * Due to low precision of MIDI,
         * we need to keep track of rounding errors in deltas.
         * This function will calculate the rounding error for a given duration.
         *
         * @static
         * @param {number} tick
         * @return {number}
         */
      }, {
        key: "getPrecisionLoss",
        value: function getPrecisionLoss(tick) {
          var roundedTick = Math.round(tick);
          return roundedTick - tick;
        }
        /**
         * Gets what to multiple ticks/quarter note by to get the specified duration.
         * Note: type=='note' defaults to quarter note, type==='rest' defaults to 0
         * @param {string} duration
         * @return {number}
         */
      }, {
        key: "getDurationMultiplier",
        value: function getDurationMultiplier(duration) {
          if (duration === "0") return 0;
          var match = duration.match(/* @__PURE__ */ _wrapRegExp(/^(d+)?([0-9]+)(?:t([0-9]*))?/, {
            dotted: 1,
            base: 2,
            tuplet: 3
          }));
          if (match) {
            var base = Number(match.groups.base);
            var isValidBase = base === 1 || (base & base - 1) === 0;
            if (isValidBase) {
              var ratio = base / 4;
              var durationInQuarters = 1 / ratio;
              var _match$groups = match.groups, dotted = _match$groups.dotted, tuplet = _match$groups.tuplet;
              if (dotted) {
                var thisManyDots = dotted.length;
                var divisor = Math.pow(2, thisManyDots);
                durationInQuarters = durationInQuarters + durationInQuarters * ((divisor - 1) / divisor);
              }
              if (typeof tuplet === "string") {
                var fitInto = durationInQuarters * 2;
                var thisManyNotes = Number(tuplet || "3");
                durationInQuarters = fitInto / thisManyNotes;
              }
              return durationInQuarters;
            }
          }
          throw new Error(duration + " is not a valid duration.");
        }
      }]);
      return Utils2;
    })();
    var NoteOnEvent = /* @__PURE__ */ (function() {
      function NoteOnEvent2(fields) {
        _classCallCheck(this, NoteOnEvent2);
        fields = Object.assign({
          channel: 1,
          startTick: null,
          velocity: 50,
          wait: 0
        }, fields);
        this.type = "note-on";
        this.channel = fields.channel;
        this.pitch = fields.pitch;
        this.wait = fields.wait;
        this.velocity = fields.velocity;
        this.startTick = fields.startTick;
        this.midiNumber = Utils.getPitch(this.pitch);
        this.tick = null;
        this.delta = null;
        this.data = fields.data;
      }
      _createClass(NoteOnEvent2, [{
        key: "buildData",
        value: function buildData(track, precisionDelta) {
          this.data = [];
          if (this.startTick) {
            this.tick = Utils.getRoundedIfClose(this.startTick);
            if (track.tickPointer == 0) {
              this.delta = this.tick;
            }
          } else {
            this.delta = Utils.getTickDuration(this.wait);
            this.tick = Utils.getRoundedIfClose(track.tickPointer + this.delta);
          }
          this.deltaWithPrecisionCorrection = Utils.getRoundedIfClose(this.delta - precisionDelta);
          this.data = Utils.numberToVariableLength(this.deltaWithPrecisionCorrection).concat(this.getStatusByte(), this.midiNumber, Utils.convertVelocity(this.velocity));
          return this;
        }
        /**
         * Gets the note on status code based on the selected channel. 0x9{0-F}
         * Note on at channel 0 is 0x90 (144)
         * 0 = Ch 1
         * @return {number}
         */
      }, {
        key: "getStatusByte",
        value: function getStatusByte() {
          return 144 + this.channel - 1;
        }
      }]);
      return NoteOnEvent2;
    })();
    var NoteOffEvent = /* @__PURE__ */ (function() {
      function NoteOffEvent2(fields) {
        _classCallCheck(this, NoteOffEvent2);
        fields = Object.assign({
          channel: 1,
          velocity: 50,
          tick: null
        }, fields);
        this.type = "note-off";
        this.channel = fields.channel;
        this.pitch = fields.pitch;
        this.duration = fields.duration;
        this.velocity = fields.velocity;
        this.midiNumber = Utils.getPitch(this.pitch);
        this.tick = fields.tick;
        this.delta = Utils.getTickDuration(this.duration);
        this.data = fields.data;
      }
      _createClass(NoteOffEvent2, [{
        key: "buildData",
        value: function buildData(track, precisionDelta) {
          if (this.tick === null) {
            this.tick = Utils.getRoundedIfClose(this.delta + track.tickPointer);
          }
          this.deltaWithPrecisionCorrection = Utils.getRoundedIfClose(this.delta - precisionDelta);
          this.data = Utils.numberToVariableLength(this.deltaWithPrecisionCorrection).concat(this.getStatusByte(), this.midiNumber, Utils.convertVelocity(this.velocity));
          return this;
        }
        /**
         * Gets the note off status code based on the selected channel. 0x8{0-F}
         * Note off at channel 0 is 0x80 (128)
         * 0 = Ch 1
         * @return {number}
         */
      }, {
        key: "getStatusByte",
        value: function getStatusByte() {
          return 128 + this.channel - 1;
        }
      }]);
      return NoteOffEvent2;
    })();
    var NoteEvent = /* @__PURE__ */ (function() {
      function NoteEvent2(fields) {
        _classCallCheck(this, NoteEvent2);
        fields = Object.assign({
          channel: 1,
          repeat: 1,
          sequential: false,
          startTick: null,
          velocity: 50,
          wait: 0
        }, fields);
        this.data = [];
        this.type = "note";
        this.pitch = Utils.toArray(fields.pitch);
        this.channel = fields.channel;
        this.duration = fields.duration;
        this.grace = fields.grace;
        this.repeat = fields.repeat;
        this.sequential = fields.sequential;
        this.startTick = fields.startTick;
        this.velocity = fields.velocity;
        this.wait = fields.wait;
        this.tickDuration = Utils.getTickDuration(this.duration);
        this.restDuration = Utils.getTickDuration(this.wait);
        this.events = [];
      }
      _createClass(NoteEvent2, [{
        key: "buildData",
        value: function buildData() {
          var _this = this;
          this.data = [];
          this.tickDuration;
          this.restDuration;
          if (this.grace) {
            var graceDuration = 1;
            this.grace = Utils.toArray(this.grace);
            this.grace.forEach(function(pitch) {
              var noteEvent = new NoteEvent2({
                pitch: _this.grace,
                duration: "T" + graceDuration
              });
              _this.data = _this.data.concat(noteEvent.data);
            });
          }
          if (!this.sequential) {
            for (var j = 0; j < this.repeat; j++) {
              this.pitch.forEach(function(p, i) {
                if (i == 0) {
                  var noteOnNew = new NoteOnEvent({
                    channel: _this.channel,
                    wait: _this.wait,
                    velocity: _this.velocity,
                    pitch: p,
                    startTick: _this.startTick
                  });
                } else {
                  var noteOnNew = new NoteOnEvent({
                    channel: _this.channel,
                    wait: 0,
                    velocity: _this.velocity,
                    pitch: p,
                    startTick: _this.startTick
                  });
                }
                _this.events.push(noteOnNew);
              });
              this.pitch.forEach(function(p, i) {
                if (i == 0) {
                  var noteOffNew = new NoteOffEvent({
                    channel: _this.channel,
                    duration: _this.duration,
                    velocity: _this.velocity,
                    pitch: p,
                    tick: _this.startTick !== null ? Utils.getTickDuration(_this.duration) + _this.startTick : null
                  });
                } else {
                  var noteOffNew = new NoteOffEvent({
                    channel: _this.channel,
                    duration: 0,
                    velocity: _this.velocity,
                    pitch: p,
                    tick: _this.startTick !== null ? Utils.getTickDuration(_this.duration) + _this.startTick : null
                  });
                }
                _this.events.push(noteOffNew);
              });
            }
          } else {
            for (var j = 0; j < this.repeat; j++) {
              this.pitch.forEach(function(p, i) {
                var noteOnNew = new NoteOnEvent({
                  channel: _this.channel,
                  wait: i > 0 ? 0 : _this.wait,
                  // wait only applies to first note in repetition
                  velocity: _this.velocity,
                  pitch: p,
                  startTick: _this.startTick
                });
                var noteOffNew = new NoteOffEvent({
                  channel: _this.channel,
                  duration: _this.duration,
                  velocity: _this.velocity,
                  pitch: p
                });
                _this.events.push(noteOnNew, noteOffNew);
              });
            }
          }
          return this;
        }
      }]);
      return NoteEvent2;
    })();
    var scale14bits = function scale14bits2(zeroOne) {
      if (zeroOne <= 0) {
        return Math.floor(16384 * (zeroOne + 1) / 2);
      }
      return Math.floor(16383 * (zeroOne + 1) / 2);
    };
    var PitchBendEvent = function PitchBendEvent2(fields) {
      _classCallCheck(this, PitchBendEvent2);
      this.type = "pitch-bend";
      var bend14 = scale14bits(fields.bend);
      var channel = fields.channel || 0;
      var lsbValue = bend14 & 127;
      var msbValue = bend14 >> 7 & 127;
      this.data = Utils.numberToVariableLength(0).concat(Constants.PITCH_BEND_STATUS | channel, lsbValue, msbValue);
    };
    var ProgramChangeEvent = function ProgramChangeEvent2(fields) {
      _classCallCheck(this, ProgramChangeEvent2);
      this.type = "program";
      this.data = Utils.numberToVariableLength(0).concat(Constants.PROGRAM_CHANGE_STATUS, fields.instrument);
    };
    var ControllerChangeEvent = function ControllerChangeEvent2(fields) {
      _classCallCheck(this, ControllerChangeEvent2);
      this.type = "controller";
      this.data = Utils.numberToVariableLength(0).concat(Constants.CONTROLLER_CHANGE_STATUS, fields.controllerNumber, fields.controllerValue);
    };
    var CopyrightEvent = function CopyrightEvent2(text) {
      _classCallCheck(this, CopyrightEvent2);
      this.type = "copyright";
      var textBytes = Utils.stringToBytes(text);
      this.data = Utils.numberToVariableLength(0).concat(
        Constants.META_EVENT_ID,
        Constants.META_COPYRIGHT_ID,
        Utils.numberToVariableLength(textBytes.length),
        // Size
        textBytes
        // Text
      );
    };
    var CuePointEvent = function CuePointEvent2(text) {
      _classCallCheck(this, CuePointEvent2);
      this.type = "marker";
      var textBytes = Utils.stringToBytes(text);
      this.data = Utils.numberToVariableLength(0).concat(
        Constants.META_EVENT_ID,
        Constants.META_CUE_POINT,
        Utils.numberToVariableLength(textBytes.length),
        // Size
        textBytes
        // Text
      );
    };
    var EndTrackEvent = function EndTrackEvent2() {
      _classCallCheck(this, EndTrackEvent2);
      this.type = "end-track";
      this.data = Utils.numberToVariableLength(0).concat(Constants.META_EVENT_ID, Constants.META_END_OF_TRACK_ID);
    };
    var InstrumentNameEvent = function InstrumentNameEvent2(text) {
      _classCallCheck(this, InstrumentNameEvent2);
      this.type = "instrument-name";
      var textBytes = Utils.stringToBytes(text);
      this.data = Utils.numberToVariableLength(0).concat(
        Constants.META_EVENT_ID,
        Constants.META_INSTRUMENT_NAME_ID,
        Utils.numberToVariableLength(textBytes.length),
        // Size
        textBytes
        // Instrument name
      );
    };
    var KeySignatureEvent = function KeySignatureEvent2(sf, mi) {
      _classCallCheck(this, KeySignatureEvent2);
      this.type = "key-signature";
      var mode = mi || 0;
      sf = sf || 0;
      if (typeof mi === "undefined") {
        var fifths = [["Cb", "Gb", "Db", "Ab", "Eb", "Bb", "F", "C", "G", "D", "A", "E", "B", "F#", "C#"], ["ab", "eb", "bb", "f", "c", "g", "d", "a", "e", "b", "f#", "c#", "g#", "d#", "a#"]];
        var _sflen = sf.length;
        var note2 = sf || "C";
        if (sf[0] === sf[0].toLowerCase()) mode = 1;
        if (_sflen > 1) {
          switch (sf.charAt(_sflen - 1)) {
            case "m":
              mode = 1;
              note2 = sf.charAt(0).toLowerCase();
              note2 = note2.concat(sf.substring(1, _sflen - 1));
              break;
            case "-":
              mode = 1;
              note2 = sf.charAt(0).toLowerCase();
              note2 = note2.concat(sf.substring(1, _sflen - 1));
              break;
            case "M":
              mode = 0;
              note2 = sf.charAt(0).toUpperCase();
              note2 = note2.concat(sf.substring(1, _sflen - 1));
              break;
            case "+":
              mode = 0;
              note2 = sf.charAt(0).toUpperCase();
              note2 = note2.concat(sf.substring(1, _sflen - 1));
              break;
          }
        }
        var fifthindex = fifths[mode].indexOf(note2);
        sf = fifthindex === -1 ? 0 : fifthindex - 7;
      }
      this.data = Utils.numberToVariableLength(0).concat(
        Constants.META_EVENT_ID,
        Constants.META_KEY_SIGNATURE_ID,
        [2],
        // Size
        Utils.numberToBytes(sf, 1),
        // Number of sharp or flats ( < 0 flat; > 0 sharp)
        Utils.numberToBytes(mode, 1)
        // Mode: 0 major, 1 minor
      );
    };
    var LyricEvent = function LyricEvent2(text) {
      _classCallCheck(this, LyricEvent2);
      this.type = "marker";
      var textBytes = Utils.stringToBytes(text);
      this.data = Utils.numberToVariableLength(0).concat(
        Constants.META_EVENT_ID,
        Constants.META_LYRIC_ID,
        Utils.numberToVariableLength(textBytes.length),
        // Size
        textBytes
        // Text
      );
    };
    var MarkerEvent = function MarkerEvent2(text) {
      _classCallCheck(this, MarkerEvent2);
      this.type = "marker";
      var textBytes = Utils.stringToBytes(text);
      this.data = Utils.numberToVariableLength(0).concat(
        Constants.META_EVENT_ID,
        Constants.META_MARKER_ID,
        Utils.numberToVariableLength(textBytes.length),
        // Size
        textBytes
        // Text
      );
    };
    var TempoEvent = function TempoEvent2(bpm) {
      _classCallCheck(this, TempoEvent2);
      this.type = "tempo";
      var tempo = Math.round(6e7 / bpm);
      this.data = Utils.numberToVariableLength(0).concat(
        Constants.META_EVENT_ID,
        Constants.META_TEMPO_ID,
        [3],
        // Size
        Utils.numberToBytes(tempo, 3)
        // Tempo, 3 bytes
      );
    };
    var TextEvent = function TextEvent2(text) {
      _classCallCheck(this, TextEvent2);
      this.type = "text";
      var textBytes = Utils.stringToBytes(text);
      this.data = Utils.numberToVariableLength(0).concat(
        Constants.META_EVENT_ID,
        Constants.META_TEXT_ID,
        Utils.numberToVariableLength(textBytes.length),
        // Size
        textBytes
        // Text
      );
    };
    var TimeSignatureEvent = function TimeSignatureEvent2(numerator, denominator, midiclockspertick, notespermidiclock) {
      _classCallCheck(this, TimeSignatureEvent2);
      this.type = "time-signature";
      this.data = Utils.numberToVariableLength(0).concat(
        Constants.META_EVENT_ID,
        Constants.META_TIME_SIGNATURE_ID,
        [4],
        // Size
        Utils.numberToBytes(numerator, 1),
        // Numerator, 1 bytes
        Utils.numberToBytes(Math.log2(denominator), 1),
        // Denominator is expressed as pow of 2, 1 bytes
        Utils.numberToBytes(midiclockspertick || 24, 1),
        // MIDI Clocks per tick, 1 bytes
        Utils.numberToBytes(notespermidiclock || 8, 1)
        // Number of 1/32 notes per MIDI clocks, 1 bytes
      );
    };
    var TrackNameEvent = function TrackNameEvent2(text) {
      _classCallCheck(this, TrackNameEvent2);
      this.type = "track-name";
      var textBytes = Utils.stringToBytes(text);
      this.data = Utils.numberToVariableLength(0).concat(
        Constants.META_EVENT_ID,
        Constants.META_TRACK_NAME_ID,
        Utils.numberToVariableLength(textBytes.length),
        // Size
        textBytes
        // Text
      );
    };
    var Track = /* @__PURE__ */ (function() {
      function Track2() {
        _classCallCheck(this, Track2);
        this.type = Constants.TRACK_CHUNK_TYPE;
        this.data = [];
        this.size = [];
        this.events = [];
        this.explicitTickEvents = [];
        this.tickPointer = 0;
      }
      _createClass(Track2, [{
        key: "addEvent",
        value: function addEvent(events, mapFunction) {
          var _this = this;
          Utils.toArray(events).forEach(function(event, i) {
            if (event instanceof NoteEvent) {
              if (typeof mapFunction === "function") {
                var properties = mapFunction(i, event);
                if (_typeof(properties) === "object") {
                  for (var j in properties) {
                    switch (j) {
                      case "channel":
                        event.channel = properties[j];
                        break;
                      case "duration":
                        event.duration = properties[j];
                        break;
                      case "sequential":
                        event.sequential = properties[j];
                        break;
                      case "velocity":
                        event.velocity = Utils.convertVelocity(properties[j]);
                        break;
                    }
                  }
                }
              }
              if (event.startTick !== null) {
                _this.explicitTickEvents.push(event);
              } else {
                event.buildData().events.forEach(function(e) {
                  return _this.events.push(e);
                });
              }
            } else {
              _this.events.push(event);
            }
          });
          return this;
        }
        /**
         * Builds int array of all events.
         * @return {Track}
         */
      }, {
        key: "buildData",
        value: function buildData() {
          var _this2 = this;
          this.removeEventsByType("end-track").addEvent(new EndTrackEvent());
          this.data = [];
          this.size = [];
          this.tickPointer = 0;
          var precisionLoss = 0;
          this.events.forEach(function(event, eventIndex) {
            if (event instanceof NoteOnEvent || event instanceof NoteOffEvent) {
              var built = event.buildData(_this2, precisionLoss);
              precisionLoss = Utils.getPrecisionLoss(event.deltaWithPrecisionCorrection || 0);
              _this2.data = _this2.data.concat(built.data);
              _this2.tickPointer = Utils.getRoundedIfClose(event.tick);
            } else {
              _this2.data = _this2.data.concat(event.data);
            }
          });
          this.mergeExplicitTickEvents();
          this.size = Utils.numberToBytes(this.data.length, 4);
          return this;
        }
      }, {
        key: "mergeExplicitTickEvents",
        value: function mergeExplicitTickEvents() {
          var _this3 = this;
          if (!this.explicitTickEvents.length) return;
          this.explicitTickEvents.sort(function(a, b) {
            return a.startTick - b.startTick;
          });
          this.explicitTickEvents.forEach(function(noteEvent) {
            noteEvent.buildData().events.forEach(function(e) {
              return e.buildData(_this3);
            });
            noteEvent.events.forEach(function(event) {
              return _this3.mergeSingleEvent(event);
            });
          });
          this.explicitTickEvents = [];
          this.buildData();
        }
        /**
         * Merges another track's events with this track.
         * @param {Track} track
         * @return {Track}
         */
      }, {
        key: "mergeTrack",
        value: function mergeTrack(track) {
          var _this4 = this;
          this.buildData();
          track.buildData().events.forEach(function(event) {
            return _this4.mergeSingleEvent(event);
          });
        }
        /**
         * Merges a single event into this track's list of events based on event.tick property.
         * @param {NoteOnEvent|NoteOffEvent} - event
         * @return {Track}
         */
      }, {
        key: "mergeSingleEvent",
        value: function mergeSingleEvent(event) {
          var lastEventIndex = 0;
          for (var i = 0; i < this.events.length; i++) {
            if (this.events[i].tick > event.tick) break;
            lastEventIndex = i;
          }
          var splicedEventIndex = lastEventIndex + 1;
          event.delta = event.tick - this.events[lastEventIndex].tick;
          this.events.splice(splicedEventIndex, 0, event);
          for (var i = splicedEventIndex + 1; i < this.events.length; i++) {
            this.events[i].delta = this.events[i].tick - this.events[i - 1].tick;
          }
        }
        /**
         * Removes all events matching specified type.
         * @param {string} eventType - Event type
         * @return {Track}
         */
      }, {
        key: "removeEventsByType",
        value: function removeEventsByType(eventType) {
          var _this5 = this;
          this.events.forEach(function(event, index) {
            if (event.type === eventType) {
              _this5.events.splice(index, 1);
            }
          });
          return this;
        }
        /**
         * Sets tempo of the MIDI file.
         * @param {number} bpm - Tempo in beats per minute.
         * @return {Track}
         */
      }, {
        key: "setTempo",
        value: function setTempo(bpm) {
          return this.addEvent(new TempoEvent(bpm));
        }
        /**
         * Sets time signature.
         * @param {number} numerator - Top number of the time signature.
         * @param {number} denominator - Bottom number of the time signature.
         * @param {number} midiclockspertick - Defaults to 24.
         * @param {number} notespermidiclock - Defaults to 8.
         * @return {Track}
         */
      }, {
        key: "setTimeSignature",
        value: function setTimeSignature(numerator, denominator, midiclockspertick, notespermidiclock) {
          return this.addEvent(new TimeSignatureEvent(numerator, denominator, midiclockspertick, notespermidiclock));
        }
        /**
         * Sets key signature.
         * @param {*} sf -
         * @param {*} mi -
         * @return {Track}
         */
      }, {
        key: "setKeySignature",
        value: function setKeySignature(sf, mi) {
          return this.addEvent(new KeySignatureEvent(sf, mi));
        }
        /**
         * Adds text to MIDI file.
         * @param {string} text - Text to add.
         * @return {Track}
         */
      }, {
        key: "addText",
        value: function addText(text) {
          return this.addEvent(new TextEvent(text));
        }
        /**
         * Adds copyright to MIDI file.
         * @param {string} text - Text of copyright line.
         * @return {Track}
         */
      }, {
        key: "addCopyright",
        value: function addCopyright(text) {
          return this.addEvent(new CopyrightEvent(text));
        }
        /**
         * Adds Sequence/Track Name.
         * @param {string} text - Text of track name.
         * @return {Track}
         */
      }, {
        key: "addTrackName",
        value: function addTrackName(text) {
          return this.addEvent(new TrackNameEvent(text));
        }
        /**
         * Sets instrument name of track.
         * @param {string} text - Name of instrument.
         * @return {Track}
         */
      }, {
        key: "addInstrumentName",
        value: function addInstrumentName(text) {
          return this.addEvent(new InstrumentNameEvent(text));
        }
        /**
         * Adds marker to MIDI file.
         * @param {string} text - Marker text.
         * @return {Track}
         */
      }, {
        key: "addMarker",
        value: function addMarker(text) {
          return this.addEvent(new MarkerEvent(text));
        }
        /**
         * Adds cue point to MIDI file.
         * @param {string} text - Text of cue point.
         * @return {Track}
         */
      }, {
        key: "addCuePoint",
        value: function addCuePoint(text) {
          return this.addEvent(new CuePointEvent(text));
        }
        /**
         * Adds lyric to MIDI file.
         * @param {string} text - Lyric text to add.
         * @return {Track}
         */
      }, {
        key: "addLyric",
        value: function addLyric(text) {
          return this.addEvent(new LyricEvent(text));
        }
        /**
         * Channel mode messages
         * @return {Track}
         */
      }, {
        key: "polyModeOn",
        value: function polyModeOn() {
          var event = new NoteOnEvent({
            data: [0, 176, 126, 0]
          });
          return this.addEvent(event);
        }
        /**
         * Sets a pitch bend.
         * @param {float} bend - Bend value ranging [-1,1], zero meaning no bend.
         * @return {Track}
         */
      }, {
        key: "setPitchBend",
        value: function setPitchBend(bend) {
          return this.addEvent(new PitchBendEvent({
            bend
          }));
        }
        /**
         * Adds a controller change event
         * @param {number} number - Control number.
         * @param {number} value - Control value.
         * @return {Track}
         */
      }, {
        key: "controllerChange",
        value: function controllerChange(number, value) {
          return this.addEvent(new ControllerChangeEvent({
            controllerNumber: number,
            controllerValue: value
          }));
        }
      }]);
      return Track2;
    })();
    var VexFlow = /* @__PURE__ */ (function() {
      function VexFlow2() {
        _classCallCheck(this, VexFlow2);
      }
      _createClass(VexFlow2, [{
        key: "trackFromVoice",
        value: (
          /**
           * Support for converting VexFlow voice into MidiWriterJS track
           * @return MidiWriter.Track object
           */
          function trackFromVoice(voice) {
            var _this = this;
            var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
              addRenderedAccidentals: false
            };
            var track = new Track();
            var wait = [];
            voice.tickables.forEach(function(tickable) {
              if (tickable.noteType === "n") {
                track.addEvent(new NoteEvent({
                  pitch: tickable.keys.map(function(pitch, index) {
                    return _this.convertPitch(pitch, index, tickable, options.addRenderedAccidentals);
                  }),
                  duration: _this.convertDuration(tickable),
                  wait
                }));
                wait = [];
              } else if (tickable.noteType === "r") {
                wait.push(_this.convertDuration(tickable));
                return;
              }
            });
            if (wait.length > 0) {
              track.addEvent(new NoteEvent({
                pitch: "[c4]",
                duration: "0",
                wait,
                velocity: "0"
              }));
            }
            return track;
          }
        )
        /**
         * Converts VexFlow pitch syntax to MidiWriterJS syntax
         * @param pitch string
         * @param index pitch index
         * @param note struct from Vexflow
         * @param addRenderedAccidentals adds Vexflow rendered accidentals
         */
      }, {
        key: "convertPitch",
        value: function convertPitch(pitch, index, note2) {
          var addRenderedAccidentals = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
          var pitchParts = pitch.split("/");
          var accidentals = pitchParts[0].substring(1).replace("n", "");
          if (addRenderedAccidentals) {
            var _note$getAccidentals;
            (_note$getAccidentals = note2.getAccidentals()) === null || _note$getAccidentals === void 0 ? void 0 : _note$getAccidentals.forEach(function(accidental) {
              if (accidental.index === index) {
                if (accidental.type === "n") {
                  accidentals = "";
                } else {
                  accidentals += accidental.type;
                }
              }
            });
          }
          return pitchParts[0][0] + accidentals + pitchParts[1];
        }
        /**
         * Converts VexFlow duration syntax to MidiWriterJS syntax
         * @param note struct from VexFlow
         */
      }, {
        key: "convertDuration",
        value: function convertDuration(note2) {
          return "d".repeat(note2.dots) + this.convertBaseDuration(note2.duration) + (note2.tuplet ? "t" + note2.tuplet.num_notes : "");
        }
        /**
         * Converts VexFlow base duration syntax to MidiWriterJS syntax
         * @param duration Vexflow duration
         * @returns MidiWriterJS duration
         */
      }, {
        key: "convertBaseDuration",
        value: function convertBaseDuration(duration) {
          switch (duration) {
            case "w":
              return "1";
            case "h":
              return "2";
            case "q":
              return "4";
            default:
              return duration;
          }
        }
      }]);
      return VexFlow2;
    })();
    var HeaderChunk = function HeaderChunk2(numberOfTracks) {
      _classCallCheck(this, HeaderChunk2);
      this.type = Constants.HEADER_CHUNK_TYPE;
      var trackType = numberOfTracks > 1 ? Constants.HEADER_CHUNK_FORMAT1 : Constants.HEADER_CHUNK_FORMAT0;
      this.data = trackType.concat(
        Utils.numberToBytes(numberOfTracks, 2),
        // two bytes long,
        Constants.HEADER_CHUNK_DIVISION
      );
      this.size = [0, 0, 0, this.data.length];
    };
    var Writer = /* @__PURE__ */ (function() {
      function Writer2(tracks) {
        var _this = this;
        _classCallCheck(this, Writer2);
        tracks = Utils.toArray(tracks);
        this.data = [];
        this.data.push(new HeaderChunk(tracks.length));
        tracks.forEach(function(track, i) {
          _this.data.push(track.buildData());
        });
      }
      _createClass(Writer2, [{
        key: "buildFile",
        value: function buildFile() {
          var build = [];
          this.data.forEach(function(d) {
            return build = build.concat(d.type, d.size, d.data);
          });
          return new Uint8Array(build);
        }
        /**
         * Convert file buffer to a base64 string.  Different methods depending on if browser or node.
         * @return {string}
         */
      }, {
        key: "base64",
        value: function base64() {
          if (typeof btoa === "function") return btoa(String.fromCharCode.apply(null, this.buildFile()));
          return Buffer.from(this.buildFile()).toString("base64");
        }
        /**
         * Get the data URI.
         * @return {string}
         */
      }, {
        key: "dataUri",
        value: function dataUri() {
          return "data:audio/midi;base64," + this.base64();
        }
        /**
         * Output to stdout
         * @return {string}
         */
      }, {
        key: "stdout",
        value: function stdout() {
          return process.stdout.write(new Buffer(this.buildFile()));
        }
      }]);
      return Writer2;
    })();
    var main = {
      Constants,
      NoteOnEvent,
      NoteOffEvent,
      NoteEvent,
      PitchBendEvent,
      ProgramChangeEvent,
      Track,
      Utils,
      VexFlow,
      Writer
    };
    module2.exports = main;
  }
});

// node_modules/jsmidgen/lib/jsmidgen.js
var require_jsmidgen = __commonJS({
  "node_modules/jsmidgen/lib/jsmidgen.js"(exports2, module2) {
    var Midi = {};
    (function(exported) {
      var DEFAULT_VOLUME = exported.DEFAULT_VOLUME = 90;
      var DEFAULT_DURATION = exported.DEFAULT_DURATION = 128;
      var DEFAULT_CHANNEL = exported.DEFAULT_CHANNEL = 0;
      var Util = {
        midi_letter_pitches: { a: 21, b: 23, c: 12, d: 14, e: 16, f: 17, g: 19 },
        /**
         * Convert a symbolic note name (e.g. "c4") to a numeric MIDI pitch (e.g.
         * 60, middle C).
         *
         * @param {string} n - The symbolic note name to parse.
         * @returns {number} The MIDI pitch that corresponds to the symbolic note
         * name.
         */
        midiPitchFromNote: function(n) {
          var matches = /([a-g])(#+|b+)?([0-9]+)$/i.exec(n);
          var note2 = matches[1].toLowerCase(), accidental = matches[2] || "", octave = parseInt(matches[3], 10);
          return 12 * octave + Util.midi_letter_pitches[note2] + (accidental.substr(0, 1) == "#" ? 1 : -1) * accidental.length;
        },
        /**
         * Ensure that the given argument is converted to a MIDI pitch. Note that
         * it may already be one (including a purely numeric string).
         *
         * @param {string|number} p - The pitch to convert.
         * @returns {number} The resulting numeric MIDI pitch.
         */
        ensureMidiPitch: function(p) {
          if (typeof p == "number" || !/[^0-9]/.test(p)) {
            return parseInt(p, 10);
          } else {
            return Util.midiPitchFromNote(p);
          }
        },
        midi_pitches_letter: { "12": "c", "13": "c#", "14": "d", "15": "d#", "16": "e", "17": "f", "18": "f#", "19": "g", "20": "g#", "21": "a", "22": "a#", "23": "b" },
        midi_flattened_notes: { "a#": "bb", "c#": "db", "d#": "eb", "f#": "gb", "g#": "ab" },
        /**
         * Convert a numeric MIDI pitch value (e.g. 60) to a symbolic note name
         * (e.g. "c4").
         *
         * @param {number} n - The numeric MIDI pitch value to convert.
         * @param {boolean} [returnFlattened=false] - Whether to prefer flattened
         * notes to sharpened ones. Optional, default false.
         * @returns {string} The resulting symbolic note name.
         */
        noteFromMidiPitch: function(n, returnFlattened) {
          var octave = 0, noteNum = n, noteName, returnFlattened = returnFlattened || false;
          if (n > 23) {
            octave = Math.floor(n / 12) - 1;
            noteNum = n - octave * 12;
          }
          noteName = Util.midi_pitches_letter[noteNum];
          if (returnFlattened && noteName.indexOf("#") > 0) {
            noteName = Util.midi_flattened_notes[noteName];
          }
          return noteName + octave;
        },
        /**
         * Convert beats per minute (BPM) to microseconds per quarter note (MPQN).
         *
         * @param {number} bpm - A number in beats per minute.
         * @returns {number} The number of microseconds per quarter note.
         */
        mpqnFromBpm: function(bpm) {
          var mpqn = Math.floor(6e7 / bpm);
          var ret = [];
          do {
            ret.unshift(mpqn & 255);
            mpqn >>= 8;
          } while (mpqn);
          while (ret.length < 3) {
            ret.push(0);
          }
          return ret;
        },
        /**
         * Convert microseconds per quarter note (MPQN) to beats per minute (BPM).
         *
         * @param {number} mpqn - The number of microseconds per quarter note.
         * @returns {number} A number in beats per minute.
         */
        bpmFromMpqn: function(mpqn) {
          var m2 = mpqn;
          if (typeof mpqn[0] != "undefined") {
            m2 = 0;
            for (var i = 0, l = mpqn.length - 1; l >= 0; ++i, --l) {
              m2 |= mpqn[i] << l;
            }
          }
          return Math.floor(6e7 / mpqn);
        },
        /**
         * Converts an array of bytes to a string of hexadecimal characters. Prepares
         * it to be converted into a base64 string.
         *
         * @param {Array} byteArray - Array of bytes to be converted.
         * @returns {string} Hexadecimal string, e.g. "097B8A".
         */
        codes2Str: function(byteArray) {
          return String.fromCharCode.apply(null, byteArray);
        },
        /**
         * Converts a string of hexadecimal values to an array of bytes. It can also
         * add remaining "0" nibbles in order to have enough bytes in the array as the
         * `finalBytes` parameter.
         *
         * @param {string} str - string of hexadecimal values e.g. "097B8A"
         * @param {number} [finalBytes] - Optional. The desired number of bytes
         * (not nibbles) that the returned array should contain.
         * @returns {Array} An array of nibbles.
         */
        str2Bytes: function(str, finalBytes) {
          if (finalBytes) {
            while (str.length / 2 < finalBytes) {
              str = "0" + str;
            }
          }
          var bytes = [];
          for (var i = str.length - 1; i >= 0; i = i - 2) {
            var chars = i === 0 ? str[i] : str[i - 1] + str[i];
            bytes.unshift(parseInt(chars, 16));
          }
          return bytes;
        },
        /**
         * Translates number of ticks to MIDI timestamp format, returning an array
         * of bytes with the time values. MIDI has a very particular way to express
         * time; take a good look at the spec before ever touching this function.
         *
         * @param {number} ticks - Number of ticks to be translated.
         * @returns {number} Array of bytes that form the MIDI time value.
         */
        translateTickTime: function(ticks) {
          var buffer = ticks & 127;
          while (ticks = ticks >> 7) {
            buffer <<= 8;
            buffer |= ticks & 127 | 128;
          }
          var bList = [];
          while (true) {
            bList.push(buffer & 255);
            if (buffer & 128) {
              buffer >>= 8;
            } else {
              break;
            }
          }
          return bList;
        }
      };
      var MidiEvent = function(params) {
        if (!this) return new MidiEvent(params);
        if (params && (params.type !== null || params.type !== void 0) && (params.channel !== null || params.channel !== void 0) && (params.param1 !== null || params.param1 !== void 0)) {
          this.setTime(params.time);
          this.setType(params.type);
          this.setChannel(params.channel);
          this.setParam1(params.param1);
          this.setParam2(params.param2);
        }
      };
      MidiEvent.NOTE_OFF = 128;
      MidiEvent.NOTE_ON = 144;
      MidiEvent.AFTER_TOUCH = 160;
      MidiEvent.CONTROLLER = 176;
      MidiEvent.PROGRAM_CHANGE = 192;
      MidiEvent.CHANNEL_AFTERTOUCH = 208;
      MidiEvent.PITCH_BEND = 224;
      MidiEvent.prototype.setTime = function(ticks) {
        this.time = Util.translateTickTime(ticks || 0);
      };
      MidiEvent.prototype.setType = function(type) {
        if (type < MidiEvent.NOTE_OFF || type > MidiEvent.PITCH_BEND) {
          throw new Error("Trying to set an unknown event: " + type);
        }
        this.type = type;
      };
      MidiEvent.prototype.setChannel = function(channel) {
        if (channel < 0 || channel > 15) {
          throw new Error("Channel is out of bounds.");
        }
        this.channel = channel;
      };
      MidiEvent.prototype.setParam1 = function(p) {
        this.param1 = p;
      };
      MidiEvent.prototype.setParam2 = function(p) {
        this.param2 = p;
      };
      MidiEvent.prototype.toBytes = function() {
        var byteArray = [];
        var typeChannelByte = this.type | this.channel & 15;
        byteArray.push.apply(byteArray, this.time);
        byteArray.push(typeChannelByte);
        byteArray.push(this.param1);
        if (this.param2 !== void 0 && this.param2 !== null) {
          byteArray.push(this.param2);
        }
        return byteArray;
      };
      var MetaEvent = function(params) {
        if (!this) return new MetaEvent(params);
        var p = params || {};
        this.setTime(params.time);
        this.setType(params.type);
        this.setData(params.data);
      };
      MetaEvent.SEQUENCE = 0;
      MetaEvent.TEXT = 1;
      MetaEvent.COPYRIGHT = 2;
      MetaEvent.TRACK_NAME = 3;
      MetaEvent.INSTRUMENT = 4;
      MetaEvent.LYRIC = 5;
      MetaEvent.MARKER = 6;
      MetaEvent.CUE_POINT = 7;
      MetaEvent.CHANNEL_PREFIX = 32;
      MetaEvent.END_OF_TRACK = 47;
      MetaEvent.TEMPO = 81;
      MetaEvent.SMPTE = 84;
      MetaEvent.TIME_SIG = 88;
      MetaEvent.KEY_SIG = 89;
      MetaEvent.SEQ_EVENT = 127;
      MetaEvent.prototype.setTime = function(ticks) {
        this.time = Util.translateTickTime(ticks || 0);
      };
      MetaEvent.prototype.setType = function(t) {
        this.type = t;
      };
      MetaEvent.prototype.setData = function(d) {
        this.data = d;
      };
      MetaEvent.prototype.toBytes = function() {
        if (!this.type) {
          throw new Error("Type for meta-event not specified.");
        }
        var byteArray = [];
        byteArray.push.apply(byteArray, this.time);
        byteArray.push(255, this.type);
        if (Array.isArray(this.data)) {
          byteArray.push(this.data.length);
          byteArray.push.apply(byteArray, this.data);
        } else if (typeof this.data == "number") {
          byteArray.push(1, this.data);
        } else if (this.data !== null && this.data !== void 0) {
          byteArray.push(this.data.length);
          var dataBytes = this.data.split("").map(function(x) {
            return x.charCodeAt(0);
          });
          byteArray.push.apply(byteArray, dataBytes);
        } else {
          byteArray.push(0);
        }
        return byteArray;
      };
      var Track = function(config) {
        if (!this) return new Track(config);
        var c = config || {};
        this.events = c.events || [];
      };
      Track.START_BYTES = [77, 84, 114, 107];
      Track.END_BYTES = [0, 255, 47, 0];
      Track.prototype.addEvent = function(event) {
        this.events.push(event);
        return this;
      };
      Track.prototype.addNoteOn = Track.prototype.noteOn = function(channel, pitch, time, velocity) {
        this.events.push(new MidiEvent({
          type: MidiEvent.NOTE_ON,
          channel,
          param1: Util.ensureMidiPitch(pitch),
          param2: velocity || DEFAULT_VOLUME,
          time: time || 0
        }));
        return this;
      };
      Track.prototype.addNoteOff = Track.prototype.noteOff = function(channel, pitch, time, velocity) {
        this.events.push(new MidiEvent({
          type: MidiEvent.NOTE_OFF,
          channel,
          param1: Util.ensureMidiPitch(pitch),
          param2: velocity || DEFAULT_VOLUME,
          time: time || 0
        }));
        return this;
      };
      Track.prototype.addNote = Track.prototype.note = function(channel, pitch, dur, time, velocity) {
        this.noteOn(channel, pitch, time, velocity);
        if (dur) {
          this.noteOff(channel, pitch, dur, velocity);
        }
        return this;
      };
      Track.prototype.addChord = Track.prototype.chord = function(channel, chord, dur, velocity) {
        if (!Array.isArray(chord) && !chord.length) {
          throw new Error("Chord must be an array of pitches");
        }
        chord.forEach(function(note2) {
          this.noteOn(channel, note2, 0, velocity);
        }, this);
        chord.forEach(function(note2, index) {
          if (index === 0) {
            this.noteOff(channel, note2, dur);
          } else {
            this.noteOff(channel, note2);
          }
        }, this);
        return this;
      };
      Track.prototype.setInstrument = Track.prototype.instrument = function(channel, instrument, time) {
        this.events.push(new MidiEvent({
          type: MidiEvent.PROGRAM_CHANGE,
          channel,
          param1: instrument,
          time: time || 0
        }));
        return this;
      };
      Track.prototype.setTempo = Track.prototype.tempo = function(bpm, time) {
        this.events.push(new MetaEvent({
          type: MetaEvent.TEMPO,
          data: Util.mpqnFromBpm(bpm),
          time: time || 0
        }));
        return this;
      };
      Track.prototype.toBytes = function() {
        var trackLength = 0;
        var eventBytes = [];
        var startBytes = Track.START_BYTES;
        var endBytes = Track.END_BYTES;
        var addEventBytes = function(event) {
          var bytes = event.toBytes();
          trackLength += bytes.length;
          eventBytes.push.apply(eventBytes, bytes);
        };
        this.events.forEach(addEventBytes);
        trackLength += endBytes.length;
        var lengthBytes = Util.str2Bytes(trackLength.toString(16), 4);
        return startBytes.concat(lengthBytes, eventBytes, endBytes);
      };
      var File = function(config) {
        if (!this) return new File(config);
        var c = config || {};
        if (c.ticks) {
          if (typeof c.ticks !== "number") {
            throw new Error("Ticks per beat must be a number!");
            return;
          }
          if (c.ticks <= 0 || c.ticks >= 1 << 15 || c.ticks % 1 !== 0) {
            throw new Error("Ticks per beat must be an integer between 1 and 32767!");
            return;
          }
        }
        this.ticks = c.ticks || 128;
        this.tracks = c.tracks || [];
      };
      File.HDR_CHUNKID = "MThd";
      File.HDR_CHUNK_SIZE = "\0\0\0";
      File.HDR_TYPE0 = "\0\0";
      File.HDR_TYPE1 = "\0";
      File.prototype.addTrack = function(track) {
        if (track) {
          this.tracks.push(track);
          return this;
        } else {
          track = new Track();
          this.tracks.push(track);
          return track;
        }
      };
      File.prototype.toBytes = function() {
        var trackCount = this.tracks.length.toString(16);
        var bytes = File.HDR_CHUNKID + File.HDR_CHUNK_SIZE;
        if (parseInt(trackCount, 16) > 1) {
          bytes += File.HDR_TYPE1;
        } else {
          bytes += File.HDR_TYPE0;
        }
        bytes += Util.codes2Str(Util.str2Bytes(trackCount, 2));
        bytes += String.fromCharCode(this.ticks / 256, this.ticks % 256);
        ;
        this.tracks.forEach(function(track) {
          bytes += Util.codes2Str(track.toBytes());
        });
        return bytes;
      };
      exported.Util = Util;
      exported.File = File;
      exported.Track = Track;
      exported.Event = MidiEvent;
      exported.MetaEvent = MetaEvent;
    })(Midi);
    if (typeof module2 != "undefined" && module2 !== null) {
      module2.exports = Midi;
    } else if (typeof exports2 != "undefined" && exports2 !== null) {
      exports2 = Midi;
    } else {
      exports2.Midi = Midi;
    }
  }
});

// src/lib/mixup.js
var require_mixup = __commonJS({
  "src/lib/mixup.js"(exports2, module2) {
    var { Utils } = require_build();
    var { File, Track } = require_jsmidgen();
    var { zip, flatten } = require_utils();
    var { split, isPattern } = require_tokenize();
    var { reduce } = require_parser();
    var DEFAULT = Symbol("@main");
    function build(midi2, bpm = 120, length = 16) {
      const file = new File();
      const q = 16;
      const o = {};
      bpm *= length / q;
      let ch = 0;
      function get(nth, name) {
        const key = nth + name;
        if (!get[key]) {
          const track = new Track();
          const chan = nth === "0" ? 9 : ch;
          file.addTrack(track);
          get[key] = { chan, track };
          if (nth !== "0") ch += 1;
        }
        return get[key];
      }
      midi2.forEach((section) => {
        section.forEach((parts) => {
          parts.forEach((e) => {
            const { chan, track } = get(e[0], e[1]);
            track.setTempo(bpm);
            if (chan !== 9) {
              track.instrument(chan, e[0]);
            }
            for (let i = 0; i < e[2].length; i += 1) {
              const tick = e[2][i];
              if (tick.v > 0) {
                const note2 = tick.n || "C3";
                if (Array.isArray(note2)) {
                  track.noteOff(chan, "", q);
                  track.addChord(chan, note2, q, tick.v);
                } else {
                  track.noteOn(chan, note2, q, tick.v);
                  track.noteOff(chan, note2, q);
                }
              } else {
                track.noteOff(chan, "", q * 2);
              }
            }
          });
        });
      });
      return file.toBytes();
    }
    function pack(values, notes) {
      let offset;
      function resolve(x) {
        if (Array.isArray(x)) {
          return x.map(resolve);
        }
        let token;
        if (!"-x_".includes(x)) {
          token = { v: 127, l: x };
        } else {
          token = { v: x === "-" ? 0 : 127 };
        }
        if (x !== "-") {
          token.v = typeof values[offset] !== "undefined" ? values[offset] : token.v || 0;
          if (typeof notes[offset] !== "undefined") token.n = notes[offset];
          if (values.length === 1) token.v = values[0];
          if (token.v || token.n) offset += 1;
        }
        return token;
      }
      return (value) => {
        let result = value;
        if (typeof value === "string") {
          if (isPattern(value)) {
            offset = 0;
            result = split(value).map(resolve);
          }
        }
        return result;
      };
    }
    function merge(ctx) {
      const scenes = {};
      Object.entries(ctx.tracks).forEach(([name, channels]) => {
        Object.entries(channels).forEach(([ch, clips]) => {
          const [tag, midi2] = ch.split("#");
          const key = tag || DEFAULT;
          let ticks;
          let inc = 0;
          clips.forEach((clip) => {
            const values = clip.values ? reduce(clip.values, ctx.data) : [];
            const notes = clip.data ? reduce(clip.data, ctx.data) : [];
            if (clip.input) {
              if (values.length > 1) values.shift();
              const input = flatten(reduce(clip.input, ctx.data, pack(values, notes)));
              if (!ticks) {
                ticks = input;
                return;
              }
              zip(ticks, input, (a, b) => {
                if (b.v > 0) a.v = b.v;
              });
            }
            if (ticks) {
              const mode = clip.values && clip.values[0] && clip.values[0].type === "mode" ? clip.values[0].value : null;
              ticks.forEach((tick) => {
                if (tick.v > 0) {
                  if (!tick.n && notes.length > 0) tick.n = notes.shift();
                  if (mode && values.length > 0) tick[mode[0].toLowerCase()] = values.shift();
                }
              });
            }
          });
          if (!scenes[key]) scenes[key] = { tracks: [] };
          scenes[key].tracks.push([midi2, name, ticks]);
        });
      });
      if (!ctx.main.length) {
        ctx.main = [[{ type: "value", value: DEFAULT }]];
      }
      return ctx.main.map((track) => {
        return reduce(track, scenes).map((item) => {
          return [].concat(item).reduce((memo, x) => {
            memo.push(...x.tracks);
            return memo;
          }, []);
        });
      });
    }
    Object.assign(module2.exports, { build, merge, pack });
  }
});

// src/src/main.cjs.js
var main_cjs_exports = {};
module.exports = __toCommonJS(main_cjs_exports);
__reExport(main_cjs_exports, __toESM(require_utils()), module.exports);
__reExport(main_cjs_exports, __toESM(require_tokenize()), module.exports);
__reExport(main_cjs_exports, __toESM(require_parser()), module.exports);
__reExport(main_cjs_exports, __toESM(require_mixup()), module.exports);
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2xpYi9zcmMvbGliL3NyYy9saWIvdXRpbHMuanMiLCAibm9kZV9tb2R1bGVzL2hhcm1vbmljcy9tYWluLmpzIiwgInNyYy9saWIvc3JjL2xpYi9zcmMvbGliL3Rva2VuaXplLmpzIiwgIm5vZGVfbW9kdWxlcy9zY3JpYmJsZXR1bmUvc3JjL3V0aWxzLnRzIiwgIm5vZGVfbW9kdWxlcy9zY3JpYmJsZXR1bmUvc3JjL3Byb2dyZXNzaW9uLnRzIiwgInNyYy9saWIvc3JjL2xpYi9zcmMvbGliL3BhcnNlci5qcyIsICJub2RlX21vZHVsZXMvbm90ZS1wYXJzZXIvaW5kZXguanMiLCAibm9kZV9tb2R1bGVzL3RvbmFsLW1pZGkvaW5kZXguanMiLCAibm9kZV9tb2R1bGVzL21pZGktd3JpdGVyLWpzL3BhY2thZ2UuanNvbiIsICJub2RlX21vZHVsZXMvbWlkaS13cml0ZXItanMvYnVpbGQvaW5kZXguanMiLCAibm9kZV9tb2R1bGVzL2pzbWlkZ2VuL2xpYi9qc21pZGdlbi5qcyIsICJzcmMvbGliL3NyYy9saWIvc3JjL2xpYi9taXh1cC5qcyIsICJzcmMvc3JjL21haW4uY2pzLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgZnVuY3Rpb24gZmxhdHRlbih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUucmVkdWNlKChwcmV2LCBjdXIpID0+IHByZXYuY29uY2F0KGN1ciksIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdCh2YWx1ZSwgdGltZXMpIHtcbiAgY29uc3Qgb3V0ID0gW107XG5cbiAgd2hpbGUgKHRpbWVzKSB7XG4gICAgb3V0LnB1c2godmFsdWUpO1xuICAgIHRpbWVzIC09IDE7XG4gIH1cblxuICByZXR1cm4gb3V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZ2UobWluLCBtYXgsIHN0ZXApIHtcbiAgY29uc3QgYWNjID0gW107XG5cbiAgaWYgKCFzdGVwKSB7XG4gICAgZm9yIChsZXQgaSA9IG1pbjsgaSA8PSBtYXg7IGkgKz0gMSkge1xuICAgICAgYWNjLnB1c2goaSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IGRpZmYgPSAobWF4IC0gbWluKSAvIHN0ZXA7XG5cbiAgICBmb3IgKGxldCBpID0gbWluOyBpIDw9IG1heDsgaSArPSBkaWZmKSB7XG4gICAgICBhY2MucHVzaChpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYWNjO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSByZXR1cm4gdmFsdWU7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkgcmV0dXJuIHZhbHVlLm1hcChjbG9uZSk7XG5cbiAgY29uc3QgY29weSA9IHt9O1xuXG4gIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgY29weVtrZXldID0gY2xvbmUodmFsdWVba2V5XSk7XG4gIH0pO1xuXG4gIHJldHVybiBjb3B5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gemlwKGEsIGIsIGNiKSB7XG4gIGNvbnN0IG1heCA9IE1hdGgubWF4KGEubGVuZ3RoLCBiLmxlbmd0aCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXg7IGkgKz0gMSkge1xuICAgIGlmICh0eXBlb2YgYVtpXSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGJbaV0gIT09ICd1bmRlZmluZWQnKSBjYihhW2ldLCBiW2ldKTtcbiAgfVxufVxuIiwgIigoKT0+e1widXNlIHN0cmljdFwiO3ZhciBuPXs0MTM6bj0+e24uZXhwb3J0cz1KU09OLnBhcnNlKCd7XCI1dGhcIjpcIjEwMDAwMDAxMDAwMFwiLFwiTTcjNXN1czRcIjpcIjEwMDAwMTAwMTAwMVwiLFwiNyM1c3VzNFwiOlwiMTAwMDAxMDAxMDEwXCIsXCJzdXM0XCI6XCIxMDAwMDEwMTAwMDBcIixcIk03c3VzNFwiOlwiMTAwMDAxMDEwMDAxXCIsXCI3c3VzNFwiOlwiMTAwMDAxMDEwMDEwXCIsXCI3bm81XCI6XCIxMDAwMTAwMDAwMTBcIixcImF1Z1wiOlwiMTAwMDEwMDAxMDAwXCIsXCJNN2I2XCI6XCIxMDAwMTAwMDEwMDFcIixcIm1hajcjNVwiOlwiMTAwMDEwMDAxMDAxXCIsXCI3IzVcIjpcIjEwMDAxMDAwMTAxMFwiLFwiN2IxM1wiOlwiMTAwMDEwMDAxMDEwXCIsXCJNXCI6XCIxMDAwMTAwMTAwMDBcIixcIm1hajdcIjpcIjEwMDAxMDAxMDAwMVwiLFwiN3RoXCI6XCIxMDAwMTAwMTAwMTBcIixcIjZ0aFwiOlwiMTAwMDEwMDEwMTAwXCIsXCI3YWRkNlwiOlwiMTAwMDEwMDEwMTEwXCIsXCI3YjZcIjpcIjEwMDAxMDAxMTAxMFwiLFwiTWI1XCI6XCIxMDAwMTAxMDAwMDBcIixcIk03YjVcIjpcIjEwMDAxMDEwMDAwMVwiLFwiN2I1XCI6XCIxMDAwMTAxMDAwMTBcIixcIm1haiM0XCI6XCIxMDAwMTAxMTAwMDFcIixcIjcjMTFcIjpcIjEwMDAxMDExMDAxMFwiLFwiTTYjMTFcIjpcIjEwMDAxMDExMDEwMFwiLFwiNyMxMWIxM1wiOlwiMTAwMDEwMTExMDEwXCIsXCJtIzVcIjpcIjEwMDEwMDAwMTAwMFwiLFwibWI2TTdcIjpcIjEwMDEwMDAwMTAwMVwiLFwibTcjNVwiOlwiMTAwMTAwMDAxMDEwXCIsXCJtXCI6XCIxMDAxMDAwMTAwMDBcIixcIm0vbWE3XCI6XCIxMDAxMDAwMTAwMDFcIixcIm03XCI6XCIxMDAxMDAwMTAwMTBcIixcIm02XCI6XCIxMDAxMDAwMTAxMDBcIixcIm1NYWo3YjZcIjpcIjEwMDEwMDAxMTAwMVwiLFwiZGltXCI6XCIxMDAxMDAxMDAwMDBcIixcIm9NN1wiOlwiMTAwMTAwMTAwMDAxXCIsXCJtN2I1XCI6XCIxMDAxMDAxMDAwMTBcIixcImRpbTdcIjpcIjEwMDEwMDEwMDEwMFwiLFwibzdNN1wiOlwiMTAwMTAwMTAwMTAxXCIsXCI0dGhcIjpcIjEwMDEwMTAwMDAxMFwiLFwibWFkZDRcIjpcIjEwMDEwMTAxMDAwMFwiLFwibTdhZGQxMVwiOlwiMTAwMTAxMDEwMDEwXCIsXCIrYWRkIzlcIjpcIjEwMDExMDAwMTAwMFwiLFwiNyM1IzlcIjpcIjEwMDExMDAwMTAxMFwiLFwiNyM5XCI6XCIxMDAxMTAwMTAwMTBcIixcIjEzIzlcIjpcIjEwMDExMDAxMDExMFwiLFwiNyM5YjEzXCI6XCIxMDAxMTAwMTEwMTBcIixcIm1hajcjOSMxMVwiOlwiMTAwMTEwMTEwMDAxXCIsXCI3IzkjMTFcIjpcIjEwMDExMDExMDAxMFwiLFwiMTMjOSMxMVwiOlwiMTAwMTEwMTEwMTEwXCIsXCI3IzkjMTFiMTNcIjpcIjEwMDExMDExMTAxMFwiLFwic3VzMlwiOlwiMTAxMDAwMDEwMDAwXCIsXCJNOSM1c3VzNFwiOlwiMTAxMDAxMDAxMDAxXCIsXCJzdXMyNFwiOlwiMTAxMDAxMDEwMDAwXCIsXCJNOXN1czRcIjpcIjEwMTAwMTAxMDAwMVwiLFwiMTF0aFwiOlwiMTAxMDAxMDEwMDEwXCIsXCI5c3VzNFwiOlwiMTAxMDAxMDEwMDEwXCIsXCIxM3N1czRcIjpcIjEwMTAwMTAxMDExMFwiLFwiOW5vNVwiOlwiMTAxMDEwMDAwMDEwXCIsXCIxM25vNVwiOlwiMTAxMDEwMDAwMTEwXCIsXCJNIzVhZGQ5XCI6XCIxMDEwMTAwMDEwMDBcIixcIm1hajkjNVwiOlwiMTAxMDEwMDAxMDAxXCIsXCI5IzVcIjpcIjEwMTAxMDAwMTAxMFwiLFwiOWIxM1wiOlwiMTAxMDEwMDAxMDEwXCIsXCJNYWRkOVwiOlwiMTAxMDEwMDEwMDAwXCIsXCJtYWo5XCI6XCIxMDEwMTAwMTAwMDFcIixcIjl0aFwiOlwiMTAxMDEwMDEwMDEwXCIsXCI2LzlcIjpcIjEwMTAxMDAxMDEwMFwiLFwibWFqMTNcIjpcIjEwMTAxMDAxMDEwMVwiLFwiTTdhZGQxM1wiOlwiMTAxMDEwMDEwMTAxXCIsXCIxM3RoXCI6XCIxMDEwMTAwMTAxMTBcIixcIk05YjVcIjpcIjEwMTAxMDEwMDAwMVwiLFwiOWI1XCI6XCIxMDEwMTAxMDAwMTBcIixcIjEzYjVcIjpcIjEwMTAxMDEwMDExMFwiLFwiOSM1IzExXCI6XCIxMDEwMTAxMDEwMTBcIixcIm1hajkjMTFcIjpcIjEwMTAxMDExMDAwMVwiLFwiOSMxMVwiOlwiMTAxMDEwMTEwMDEwXCIsXCI2OSMxMVwiOlwiMTAxMDEwMTEwMTAwXCIsXCJNMTMjMTFcIjpcIjEwMTAxMDExMDEwMVwiLFwiMTMjMTFcIjpcIjEwMTAxMDExMDExMFwiLFwiOSMxMWIxM1wiOlwiMTAxMDEwMTExMDEwXCIsXCJtOSM1XCI6XCIxMDExMDAwMDEwMTBcIixcIm1hZGQ5XCI6XCIxMDExMDAwMTAwMDBcIixcIm1NOVwiOlwiMTAxMTAwMDEwMDAxXCIsXCJtOVwiOlwiMTAxMTAwMDEwMDEwXCIsXCJtNjlcIjpcIjEwMTEwMDAxMDEwMFwiLFwibTEzXCI6XCIxMDExMDAwMTAxMTBcIixcIm1NYWo5YjZcIjpcIjEwMTEwMDAxMTAwMVwiLFwibTliNVwiOlwiMTAxMTAwMTAwMDEwXCIsXCJtMTFBXCI6XCIxMDExMDEwMDEwMTBcIixcIm0xMVwiOlwiMTAxMTAxMDEwMDEwXCIsXCJiOXN1c1wiOlwiMTEwMDAxMDEwMDEwXCIsXCIxMWI5XCI6XCIxMTAwMDEwMTAwMTBcIixcIjdzdXM0YjliMTNcIjpcIjExMDAwMTAxMTAxMFwiLFwiYWx0N1wiOlwiMTEwMDEwMDAwMDEwXCIsXCI3IzViOVwiOlwiMTEwMDEwMDAxMDEwXCIsXCJNYWRkYjlcIjpcIjExMDAxMDAxMDAwMFwiLFwiTTdiOVwiOlwiMTEwMDEwMDEwMDAxXCIsXCI3YjlcIjpcIjExMDAxMDAxMDAxMFwiLFwiMTNiOVwiOlwiMTEwMDEwMDEwMTEwXCIsXCI3YjliMTNcIjpcIjExMDAxMDAxMTAxMFwiLFwiNyM1YjkjMTFcIjpcIjExMDAxMDEwMTAxMFwiLFwiN2I5IzExXCI6XCIxMTAwMTAxMTAwMTBcIixcIjEzYjkjMTFcIjpcIjExMDAxMDExMDExMFwiLFwiN2I5YjEzIzExXCI6XCIxMTAwMTAxMTEwMTBcIixcIm1iNmI5XCI6XCIxMTAxMDAwMDEwMDBcIixcIjdiOSM5XCI6XCIxMTAxMTAwMTAwMTBcIn0nKX0sNzIyOm49PntuLmV4cG9ydHM9SlNPTi5wYXJzZSgne1wibWFqb3IgcGVudGF0b25pY1wiOlwiMTAxMDEwMDEwMTAwXCIsXCJpb25pYW4gcGVudGF0b25pY1wiOlwiMTAwMDExMDEwMDAxXCIsXCJtaXhvbHlkaWFuIHBlbnRhdG9uaWNcIjpcIjEwMDAxMTAxMDAxMFwiLFwicml0dXNlblwiOlwiMTAxMDAxMDEwMTAwXCIsXCJlZ3lwdGlhblwiOlwiMTAxMDAxMDEwMDEwXCIsXCJuZW9wb2xpdGFuIG1ham9yIHBlbnRhdG9uaWNcIjpcIjEwMDAxMTEwMDAxMFwiLFwidmlldG5hbWVzZSAxXCI6XCIxMDAxMDEwMTEwMDBcIixcInBlbG9nXCI6XCIxMTAxMDAwMTEwMDBcIixcImt1bW9pam9zaGlcIjpcIjExMDAwMTAxMTAwMFwiLFwiaGlyYWpvc2hpXCI6XCIxMDExMDAwMTEwMDBcIixcIml3YXRvXCI6XCIxMTAwMDExMDAwMTBcIixcImluLXNlblwiOlwiMTEwMDAxMDEwMDEwXCIsXCJseWRpYW4gcGVudGF0b25pY1wiOlwiMTAwMDEwMTEwMDAxXCIsXCJtYWxrb3MgcmFnYVwiOlwiMTAwMTAxMDAxMDEwXCIsXCJsb2NyaWFuIHBlbnRhdG9uaWNcIjpcIjEwMDEwMTEwMDAxMFwiLFwibWlub3IgcGVudGF0b25pY1wiOlwiMTAwMTAxMDEwMDEwXCIsXCJtaW5vciBzaXggcGVudGF0b25pY1wiOlwiMTAwMTAxMDEwMTAwXCIsXCJmbGF0IHRocmVlIHBlbnRhdG9uaWNcIjpcIjEwMTEwMDAxMDEwMFwiLFwiZmxhdCBzaXggcGVudGF0b25pY1wiOlwiMTAxMDEwMDExMDAwXCIsXCJzY3JpYWJpblwiOlwiMTEwMDEwMDEwMTAwXCIsXCJ3aG9sZSB0b25lIHBlbnRhdG9uaWNcIjpcIjEwMDAxMDEwMTAxMFwiLFwibHlkaWFuICM1UCBwZW50YXRvbmljXCI6XCIxMDAwMTAxMDEwMDFcIixcImx5ZGlhbiBkb21pbmFudCBwZW50YXRvbmljXCI6XCIxMDAwMTAxMTAwMTBcIixcIm1pbm9yICM3TSBwZW50YXRvbmljXCI6XCIxMDAxMDEwMTAwMDFcIixcInN1cGVyIGxvY3JpYW4gcGVudGF0b25pY1wiOlwiMTAwMTEwMTAwMDEwXCIsXCJtaW5vciBoZXhhdG9uaWNcIjpcIjEwMTEwMTAxMDAwMVwiLFwiYXVnbWVudGVkXCI6XCIxMDAxMTAwMTEwMDFcIixcIm1ham9yIGJsdWVzXCI6XCIxMDExMTAwMTAxMDBcIixcInBpb25naW9cIjpcIjEwMTAwMTAxMDExMFwiLFwicHJvbWV0aGV1cyBuZW9wb2xpdGFuXCI6XCIxMTAwMTAxMDAxMTBcIixcInByb21ldGhldXNcIjpcIjEwMTAxMDEwMDExMFwiLFwibXlzdGVyeSAjMVwiOlwiMTEwMDEwMTAxMDEwXCIsXCJzaXggdG9uZSBzeW1tZXRyaWNcIjpcIjExMDAxMTAwMTEwMFwiLFwid2hvbGUgdG9uZVwiOlwiMTAxMDEwMTAxMDEwXCIsXCJtZXNzaWFlblxcJ3MgbW9kZSAjNVwiOlwiMTEwMDAxMTEwMDAxXCIsXCJtaW5vciBibHVlc1wiOlwiMTAwMTAxMTEwMDEwXCIsXCJsb2NyaWFuIG1ham9yXCI6XCIxMDEwMTExMDEwMTBcIixcImRvdWJsZSBoYXJtb25pYyBseWRpYW5cIjpcIjExMDAxMDExMTAwMVwiLFwiaGFybW9uaWMgbWlub3JcIjpcIjEwMTEwMTAxMTAwMVwiLFwiYWx0ZXJlZFwiOlwiMTEwMTEwMTAxMDEwXCIsXCJsb2NyaWFuICMyXCI6XCIxMDExMDExMDEwMTBcIixcIm1peG9seWRpYW4gYjZcIjpcIjEwMTAxMTAxMTAxMFwiLFwibHlkaWFuIGRvbWluYW50XCI6XCIxMDEwMTAxMTAxMTBcIixcImx5ZGlhblwiOlwiMTAxMDEwMTEwMTAxXCIsXCJseWRpYW4gYXVnbWVudGVkXCI6XCIxMDEwMTAxMDExMDFcIixcImRvcmlhbiBiMlwiOlwiMTEwMTAxMDEwMTEwXCIsXCJtZWxvZGljIG1pbm9yXCI6XCIxMDExMDEwMTAxMDFcIixcImxvY3JpYW5cIjpcIjExMDEwMTEwMTAxMFwiLFwidWx0cmFsb2NyaWFuXCI6XCIxMTAxMTAxMDExMDBcIixcImxvY3JpYW4gNlwiOlwiMTEwMTAxMTAwMTEwXCIsXCJhdWdtZW50ZWQgaGVwdGF0b25pY1wiOlwiMTAwMTExMDExMDAxXCIsXCJyb21hbmlhbiBtaW5vclwiOlwiMTAxMTAwMTEwMTEwXCIsXCJkb3JpYW4gIzRcIjpcIjEwMTEwMDExMDExMFwiLFwibHlkaWFuIGRpbWluaXNoZWRcIjpcIjEwMTEwMDExMDEwMVwiLFwicGhyeWdpYW5cIjpcIjExMDEwMTAxMTAxMFwiLFwibGVhZGluZyB3aG9sZSB0b25lXCI6XCIxMDEwMTAxMDEwMTFcIixcImx5ZGlhbiBtaW5vclwiOlwiMTAxMDEwMTExMDEwXCIsXCJwaHJ5Z2lhbiBkb21pbmFudFwiOlwiMTEwMDExMDExMDEwXCIsXCJiYWxpbmVzZVwiOlwiMTEwMTAxMDExMDAxXCIsXCJuZW9wb2xpdGFuIG1ham9yXCI6XCIxMTAxMDEwMTAxMDFcIixcImFlb2xpYW5cIjpcIjEwMTEwMTAxMTAxMFwiLFwiaGFybW9uaWMgbWFqb3JcIjpcIjEwMTAxMTAxMTAwMVwiLFwiZG91YmxlIGhhcm1vbmljIG1ham9yXCI6XCIxMTAwMTEwMTEwMDFcIixcImRvcmlhblwiOlwiMTAxMTAxMDEwMTEwXCIsXCJodW5nYXJpYW4gbWlub3JcIjpcIjEwMTEwMDExMTAwMVwiLFwiaHVuZ2FyaWFuIG1ham9yXCI6XCIxMDAxMTAxMTAxMTBcIixcIm9yaWVudGFsXCI6XCIxMTAwMTExMDAxMTBcIixcImZsYW1lbmNvXCI6XCIxMTAxMTAxMTAwMTBcIixcInRvZGkgcmFnYVwiOlwiMTEwMTAwMTExMDAxXCIsXCJtaXhvbHlkaWFuXCI6XCIxMDEwMTEwMTAxMTBcIixcInBlcnNpYW5cIjpcIjExMDAxMTEwMTAwMVwiLFwibWFqb3JcIjpcIjEwMTAxMTAxMDEwMVwiLFwiZW5pZ21hdGljXCI6XCIxMTAwMTAxMDEwMTFcIixcIm1ham9yIGF1Z21lbnRlZFwiOlwiMTAxMDExMDAxMTAxXCIsXCJseWRpYW4gIzlcIjpcIjEwMDExMDExMDEwMVwiLFwibWVzc2lhZW5cXCdzIG1vZGUgIzRcIjpcIjExMTAwMTExMTAwMVwiLFwicHVydmkgcmFnYVwiOlwiMTEwMDExMTExMDAxXCIsXCJzcGFuaXNoIGhlcHRhdG9uaWNcIjpcIjExMDExMTAxMTAxMFwiLFwiYmVib3BcIjpcIjEwMTAxMTAxMDExMVwiLFwiYmVib3AgbWlub3JcIjpcIjEwMTExMTAxMDExMFwiLFwiYmVib3AgbWFqb3JcIjpcIjEwMTAxMTAxMTEwMVwiLFwiYmVib3AgbG9jcmlhblwiOlwiMTEwMTAxMTExMDEwXCIsXCJtaW5vciBiZWJvcFwiOlwiMTAxMTAxMDExMDExXCIsXCJkaW1pbmlzaGVkXCI6XCIxMDExMDExMDExMDFcIixcImljaGlrb3N1Y2hvXCI6XCIxMDEwMTExMTAxMDFcIixcIm1pbm9yIHNpeCBkaW1pbmlzaGVkXCI6XCIxMDExMDEwMTExMDFcIixcImhhbGYtd2hvbGUgZGltaW5pc2hlZFwiOlwiMTEwMTEwMTEwMTEwXCIsXCJrYWZpIHJhZ2FcIjpcIjEwMDExMTAxMDExMVwiLFwibWVzc2lhZW5cXCdzIG1vZGUgIzZcIjpcIjEwMTAxMTEwMTAxMVwiLFwiY29tcG9zaXRlIGJsdWVzXCI6XCIxMDExMTExMTAxMTBcIixcIm1lc3NpYWVuXFwncyBtb2RlICMzXCI6XCIxMDExMTAxMTEwMTFcIixcIm1lc3NpYWVuXFwncyBtb2RlICM3XCI6XCIxMTExMDExMTExMDFcIixcImNocm9tYXRpY1wiOlwiMTExMTExMTExMTExXCIsXCJpb25pYW5cIjpcIjEwMTAxMTAxMDEwMVwiLFwibWlub3JcIjpcIjEwMTEwMTAxMTAxMFwifScpfX0sZT17fTtmdW5jdGlvbiBvKGEpe3ZhciBpPWVbYV07aWYodm9pZCAwIT09aSlyZXR1cm4gaS5leHBvcnRzO3ZhciByPWVbYV09e2V4cG9ydHM6e319O3JldHVybiBuW2FdKHIsci5leHBvcnRzLG8pLHIuZXhwb3J0c31vLmQ9KG4sZSk9Pntmb3IodmFyIGEgaW4gZSlvLm8oZSxhKSYmIW8ubyhuLGEpJiZPYmplY3QuZGVmaW5lUHJvcGVydHkobixhLHtlbnVtZXJhYmxlOiEwLGdldDplW2FdfSl9LG8ubz0obixlKT0+T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4sZSksby5yPW49PntcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfTt2YXIgYT17fTsoKCk9PntvLnIoYSksby5kKGEse2Nob3JkOigpPT5tLGNob3JkczooKT0+dCxpbmxpbmVDaG9yZDooKT0+cixzY2FsZTooKT0+YyxzY2FsZXM6KCk9PnN9KTt2YXIgbj1vKDcyMiksZT1vKDQxMyksaT1mdW5jdGlvbihvKXt2YXIgYT1vLnNjYWxlLGk9by5jaG9yZCxyPWF8fGksdD1hP1wic2NhbGVcIjpcImNob3JkXCI7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIHIpdGhyb3cgbmV3IEVycm9yKFwiXCIuY29uY2F0KHIsXCIgaXMgbm90IGEgdmFsaWQgaW5wdXQgZm9yIFwiKS5jb25jYXQodCkpO3ZhciBzLG0sYz1yLmluZGV4T2YoXCIgXCIpOy0xPT09Yz8ocz1yLnNsaWNlKDEpLG09clswXSxcImJcIiE9PXJbMV0mJlwiI1wiIT09clsxXXx8KHM9ci5zbGljZSgyKSxtKz1yWzFdKSk6KHM9ci5zbGljZSgtMT09PWM/MTpjKzEpLG09ci5zbGljZSgwLGMpKTt2YXIgZD1mdW5jdGlvbihuKXtyZXR1cm57XCJDI1wiOlwiRGJcIixcIkQjXCI6XCJFYlwiLFwiRiNcIjpcIkdiXCIsXCJHI1wiOlwiQWJcIixcIkEjXCI6XCJCYlwifVtuLnRvVXBwZXJDYXNlKCldfHxuLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK24uc2xpY2UoMSl9KG0ucmVwbGFjZSgvXFxkL2csXCJcIikpLGw9XCJcIiE9PW0ucmVwbGFjZSgvXFxEL2csXCJcIik/K20ucmVwbGFjZSgvXFxEL2csXCJcIik6NDtpZihpc05hTihsKSl0aHJvdyBuZXcgRXJyb3IoXCJcIi5jb25jYXQobVswXSxcIiBkb2VzIG5vdCBoYXZlIGEgdmFsaWQgb2N0YXZlXCIpKTtpZighbltzXSYmIWVbc10pdGhyb3cgbmV3IEVycm9yKFwiXCIuY29uY2F0KHIsXCIgaXMgbm90IGEgdmFsaWQgXCIpLmNvbmNhdCh0KSk7Zm9yKHZhciBiPWZ1bmN0aW9uKG4sZSl7dmFyIG89W1wiQ1wiLFwiRGJcIixcIkRcIixcIkViXCIsXCJFXCIsXCJGXCIsXCJHYlwiLFwiR1wiLFwiQWJcIixcIkFcIixcIkJiXCIsXCJCXCJdLGE9by5tYXAoKGZ1bmN0aW9uKG4pe3JldHVybiBuK2V9KSksaT1vLm1hcCgoZnVuY3Rpb24obil7cmV0dXJuIG4rKGUrMSl9KSkscj1hLmNvbmNhdChpKTtyZXR1cm4gci5zbGljZShyLmluZGV4T2YobitlKSl9KGQsbCksdT1bXSxwPTAsaD0wLGY9YT9uOmU7cDxmW3NdLmxlbmd0aDspXCIxXCI9PT1mW3NdW3BdJiZ1LnB1c2goYltoXSkscCsrLGgrKztyZXR1cm4gdX0scj1mdW5jdGlvbihuKXt2YXIgZSxvLGE9XCJiOXN1c1wiLHI9NDtyZXR1cm4gbi5pbmNsdWRlcyhhKT8obz1hLGU9bi5zbGljZSgwLG4uaW5kZXhPZihhKSkpOihlPW5bMF0sbz1uLnNsaWNlKDEpLFwiYlwiIT09blsxXSYmXCIjXCIhPT1uWzFdfHwoZSs9blsxXSxvPW4uc2xpY2UoMikpKSxuLmluY2x1ZGVzKFwiX1wiKSYmKHI9K24uc3BsaXQoXCJfXCIpWzFdLG89by5zbGljZSgwLG8uaW5kZXhPZihcIl9cIikpKSxpKHtjaG9yZDplK3IrXCIgXCIrb30pfSx0PWZ1bmN0aW9uKCl7cmV0dXJuIE9iamVjdC5rZXlzKGUpfSxzPWZ1bmN0aW9uKCl7cmV0dXJuIE9iamVjdC5rZXlzKG4pfSxtPWZ1bmN0aW9uKG4pe3JldHVybiBpKHtjaG9yZDpufSl9LGM9ZnVuY3Rpb24obil7cmV0dXJuIGkoe3NjYWxlOm59KX19KSgpO3ZhciBpPWV4cG9ydHM7Zm9yKHZhciByIGluIGEpaVtyXT1hW3JdO2EuX19lc01vZHVsZSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGksXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWFpbi5qcy5tYXAiLCAiaW1wb3J0IHsgaW5saW5lQ2hvcmQgfSBmcm9tICdoYXJtb25pY3MnO1xuXG5leHBvcnQgY29uc3QgUkVfU0VQQVJBVE9SID0gL1xcfC87XG5leHBvcnQgY29uc3QgUkVfUEFUVEVSTiA9IC9eKD86W3hfLV18XFxbLis/XFxdKSskLztcbmV4cG9ydCBjb25zdCBSRV9OVU1CRVIgPSAvXig/OlxcLj9cXGQrfFxcZCsoPzpcXC5cXGQrKT8pJC87XG5leHBvcnQgY29uc3QgUkVfQ0hPUkQgPSAvXlthLWdBLUddW14jXFxzXSpcXGQrKD86XFwuXFwuKT8kLztcbmV4cG9ydCBjb25zdCBSRV9OT1RFID0gL15bYS1nQS1HXVsjYl0/XFxkKyQvO1xuZXhwb3J0IGNvbnN0IFJFX01PREUgPSAvXig/IVtpdklWXXsxLDN9KVthLXpdezIsfS87XG5leHBvcnQgY29uc3QgUkVfUFJPRyA9IC9eW2l2SVZdezEsM31cdTAwQjA/JC87XG5leHBvcnQgY29uc3QgUkVfVFJJTSA9IC9cXC4rJC87XG5cbmNvbnN0IENBQ0hFID0ge307XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGxpdCh2YWx1ZSkge1xuICBsZXQgZGF0YSA9IFtdO1xuICB0cnkge1xuICAgIGRhdGEgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZS5zcGxpdCgvKD89W1xcZFtcXF14Xy1dKS8pKTtcbiAgICBkYXRhID0gZGF0YS5yZXBsYWNlKC8sXCJcXFtcIiwvZywgJywgWycpO1xuICAgIGRhdGEgPSBkYXRhLnJlcGxhY2UoL1wiXFxbXCIsL2csICdbJyk7XG4gICAgZGF0YSA9IGRhdGEucmVwbGFjZSgvLFwiXFxdXCIvZywgJ10nKTtcbiAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIGlnbm9yZVxuICB9XG4gIHJldHVybiBkYXRhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGV2ZWwodmFsdWUpIHtcbiAgaWYgKCFDQUNIRVt2YWx1ZV0pIHtcbiAgICBpZiAodmFsdWUuaW5jbHVkZXMoJyUnKSkge1xuICAgICAgQ0FDSEVbdmFsdWVdID0gMTI3ICogcGFyc2VGbG9hdChgLiR7dmFsdWV9YCk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZS5pbmNsdWRlcygnLycpKSB7XG4gICAgICBjb25zdCBbYSwgYl0gPSB2YWx1ZS5zcGxpdCgnLycpO1xuXG4gICAgICBDQUNIRVt2YWx1ZV0gPSBhIC8gYjtcbiAgICB9IGVsc2UgaWYgKHZhbHVlLmluY2x1ZGVzKCcqJykpIHtcbiAgICAgIGNvbnN0IFthLCBiXSA9IHZhbHVlLnNwbGl0KCcqJyk7XG5cbiAgICAgIENBQ0hFW3ZhbHVlXSA9IGEgKiBiO1xuICAgIH0gZWxzZSB7XG4gICAgICBDQUNIRVt2YWx1ZV0gPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIENBQ0hFW3ZhbHVlXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlKHJlLCB2YWx1ZSkge1xuICBpZiAoIUNBQ0hFW3JlLnNvdXJjZSArIHZhbHVlXSkge1xuICAgIENBQ0hFW3JlLnNvdXJjZSArIHZhbHVlXSA9IHJlLnRlc3QodmFsdWUpO1xuICB9XG4gIHJldHVybiBDQUNIRVtyZS5zb3VyY2UgKyB2YWx1ZV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb2dyZXNzaW9uKHZhbHVlKSB7XG4gIHJldHVybiB2YWxpZGF0ZShSRV9QUk9HLCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdHRlcm4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbGlkYXRlKFJFX1BBVFRFUk4sIHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XG4gIHJldHVybiB2YWxpZGF0ZShSRV9OVU1CRVIsIHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ2hvcmQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbGlkYXRlKFJFX0NIT1JELCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05vdGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbGlkYXRlKFJFX05PVEUsIHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTW9kZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsaWRhdGUoUkVfTU9ERSwgdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHlwZSh2YWx1ZSkge1xuICBjb25zdCBrZXkgPSBgVCR7dmFsdWV9YDtcbiAgaWYgKCFDQUNIRVtrZXldKSB7XG4gICAgaWYgKGlzTm90ZSh2YWx1ZSkpIENBQ0hFW2tleV0gPSAnbm90ZSc7XG4gICAgZWxzZSBpZiAoaXNDaG9yZCh2YWx1ZSkpIENBQ0hFW2tleV0gPSAnY2hvcmQnO1xuICAgIGVsc2UgaWYgKGlzUGF0dGVybih2YWx1ZSkpIENBQ0hFW2tleV0gPSAncGF0dGVybic7XG4gICAgZWxzZSBpZiAoaXNNb2RlKHZhbHVlKSkgQ0FDSEVba2V5XSA9ICdtb2RlJztcbiAgICBlbHNlIGlmIChpc051bWJlcih2YWx1ZSkpIENBQ0hFW2tleV0gPSAnbnVtYmVyJztcbiAgICBlbHNlIENBQ0hFW2tleV0gPSAndmFsdWUnO1xuICB9XG4gIHJldHVybiBDQUNIRVtrZXldO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtKGV4cHJlc3Npb24pIHtcbiAgaWYgKCFleHByZXNzaW9uIHx8IHR5cGVvZiBleHByZXNzaW9uICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0aW5nIGEgdmFsaWQgc3RyaW5nLCBnaXZlbiAnJHtleHByZXNzaW9ufSdgKTtcbiAgfVxuXG4gIGlmIChDQUNIRVtgJCR7ZXhwcmVzc2lvbn1gXSkgcmV0dXJuIENBQ0hFW2AkJHtleHByZXNzaW9ufWBdO1xuXG4gIGNvbnN0IHRva2VucyA9IGV4cHJlc3Npb24uc3BsaXQoL1xccysvKTtcblxuICBpZiAoIXRva2Vucy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGluZyBhIHZhbGlkIGV4cHJlc3Npb24sIGdpdmVuICcke2V4cHJlc3Npb259J2ApO1xuICB9XG5cbiAgY29uc3QgYXN0ID0gW107XG4gIGNvbnN0IGNhcnJ5ID0gW107XG5cbiAgZnVuY3Rpb24gYWRkKHR5cGUsIHZhbHVlKSB7XG4gICAgY29uc3QgaXRlbSA9IHsgdHlwZSwgdmFsdWUgfTtcblxuICAgIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpdGVtLnZhbHVlID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IGxldmVsKHZhbHVlKSA6IHZhbHVlO1xuICAgIH1cblxuICAgIGlmICh0eXBlID09PSAnY2hvcmQnICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGl0ZW0udmFsdWUgPSBpbmxpbmVDaG9yZCh2YWx1ZS5yZXBsYWNlKFJFX1RSSU0sICcnKSk7XG5cbiAgICAgIGlmICh2YWx1ZS5pbmNsdWRlcygnLi4nKSkge1xuICAgICAgICBpdGVtLnVuZm9sZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09ICd2YWx1ZScgJiYgdmFsdWUuaW5kZXhPZigneCcpID4gLTEpIHtcbiAgICAgIGNvbnN0IHggPSB2YWx1ZS5zcGxpdCgneCcpO1xuXG4gICAgICBpZiAoIShpc051bWJlcih4WzBdKSAmJiBpc051bWJlcih4WzFdKSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RpbmcgdmFsaWQgbnVtYmVycyBmb3IgJHt0eXBlfSwgZ2l2ZW4gJyR7dmFsdWV9J2ApO1xuICAgICAgfVxuXG4gICAgICBpdGVtLnZhbHVlID0gcGFyc2VJbnQoeFswXSwgMTApO1xuICAgICAgaXRlbS5yZXBlYXQgPSBwYXJzZUludCh4WzFdLCAxMCk7XG4gICAgICBpdGVtLnR5cGUgPSAnbnVtYmVyJztcbiAgICB9XG5cbiAgICBhc3QucHVzaChpdGVtKTtcbiAgfVxuXG4gIHRva2Vucy5yZWR1Y2UoKHByZXYsIGN1ciwgaSkgPT4ge1xuICAgIGxldCB0eXBlO1xuXG4gICAgY29uc3QgbmV4dCA9IHRva2Vuc1tpICsgMV07XG4gICAgY29uc3QgbGFzdCA9IGFzdFthc3QubGVuZ3RoIC0gMV0gfHwge307XG5cbiAgICBpZiAoUkVfU0VQQVJBVE9SLnRlc3QoY3VyKSkge1xuICAgICAgYWRkKCdjaG9yZCcsIGN1ci5zcGxpdChSRV9TRVBBUkFUT1IpKTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY3VyID09PSAnc3RyaW5nJyAmJiAoXG4gICAgICAoY3VyLmluY2x1ZGVzKCcvJykgJiYgY3VyLmluZGV4T2YoJy8nKSA+IDApXG4gICAgICB8fCAoY3VyLmluY2x1ZGVzKCcqJykgJiYgY3VyLmluZGV4T2YoJyonKSA+IDApXG4gICAgICB8fCAoY3VyLmluY2x1ZGVzKCclJykgJiYgY3VyLmluZGV4T2YoJyUnKSA+IDApXG4gICAgKSkge1xuICAgICAgYWRkKCdudW1iZXInLCBsZXZlbChjdXIpKTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmIChjdXIuaW5kZXhPZignJScpID4gLTEpIHtcbiAgICAgIGlmIChjdXIgPT09ICclJykge1xuICAgICAgICBpZiAoIWxhc3QudHlwZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyBleHByZXNzaW9uIHRvIHJlcGVhdCwgZ2l2ZW4gJyR7dG9rZW5zLnNsaWNlKDAsIGkpLmpvaW4oJyAnKX0nYCk7XG4gICAgICAgIH1cblxuICAgICAgICBsYXN0LnJlcGVhdCA9IGxhc3QucmVwZWF0IHx8IDE7XG4gICAgICAgIGxhc3QucmVwZWF0ICs9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGQoJ3BhcmFtJywgY3VyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKGlzUHJvZ3Jlc3Npb24oY3VyKSkge1xuICAgICAgbGFzdC52YWx1ZSArPSBgICR7Y3VyfWA7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAoY3VyLmNoYXJBdCgpID09PSAnIycpIHtcbiAgICAgIGFkZCgnY2hhbm5lbCcsIGN1cik7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAoaXNOb3RlKGN1cikgfHwgaXNDaG9yZChjdXIpIHx8IGlzTW9kZShjdXIpIHx8IGlzTnVtYmVyKGN1cikpIHtcbiAgICAgIGNhcnJ5LnB1c2goY3VyKTtcblxuICAgICAgaWYgKFxuICAgICAgICAhbmV4dFxuICAgICAgICB8fCBjYXJyeS5sZW5ndGggPT09IDNcbiAgICAgICAgfHwgIShpc05vdGUobmV4dCkgfHwgaXNNb2RlKG5leHQpIHx8IGlzTnVtYmVyKG5leHQpKVxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IG9sZCA9IGNhcnJ5LnNwbGljZSgwLCBjYXJyeS5sZW5ndGgpO1xuICAgICAgICBjb25zdCB0ZXN0ID0gb2xkWzBdO1xuXG4gICAgICAgIGxldCBtb2RlID0gb2xkWzFdO1xuICAgICAgICBsZXQgb2N0YXZlID0gb2xkWzJdO1xuXG4gICAgICAgIGlmICghb2N0YXZlICYmIGlzTnVtYmVyKG1vZGUpKSB7XG4gICAgICAgICAgb2N0YXZlID0gbW9kZTtcbiAgICAgICAgICBtb2RlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRlc3QubGVuZ3RoIDwgMlxuICAgICAgICAgICYmIGlzTm90ZSh0ZXN0KVxuICAgICAgICAgICYmIChpc01vZGUobW9kZSkgfHwgaXNOdW1iZXIob2N0YXZlKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgYWRkKCdtb2RlJywgb2xkLmpvaW4oJyAnKSk7XG4gICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgIH1cblxuICAgICAgICBvbGQuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICBhZGQoeC5sZW5ndGggPiAxIHx8ICFpc05vdGUoeCkgPyBnZXRUeXBlKHgpIDogJ21vZGUnLCB4KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGN1ciA9PT0gJ3N0cmluZycgJiYgY3VyLmluZGV4T2YoJy4uJykgPiAtMSkge1xuICAgICAgY29uc3QgcGFydHMgPSBjdXIuc3BsaXQoJy4uJyk7XG4gICAgICBjb25zdCBtaW4gPSBwYXJ0c1swXSB8fCAxO1xuICAgICAgY29uc3QgbWF4ID0gcGFydHNbMV0gfHwgSW5maW5pdHk7XG5cbiAgICAgIHR5cGUgPSAnc2xpY2UnO1xuICAgICAgY3VyID0gW21pbiwgbWF4XTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGN1ciA9PT0gJ3N0cmluZycgJiYgKGN1ci5jaGFyQXQoKSA9PT0gJy8nIHx8IGN1ci5jaGFyQXQoKSA9PT0gJyonKSkge1xuICAgICAgY29uc3Qgb3BlcmF0b3IgPSBjdXIuY2hhckF0KCkgPT09ICcvJyA/ICdkaXZpZGUnIDogJ211bHRpcGx5JztcbiAgICAgIGNvbnN0IG51bWJlciA9IGN1ci5zdWJzdHIoMSk7XG5cbiAgICAgIGlmICghaXNOdW1iZXIobnVtYmVyKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGluZyBhIHZhbGlkIGV4cHJlc3Npb24gdG8gJHtvcGVyYXRvcn0sIGdpdmVuICcke3Rva2Vucy5zbGljZSgwLCBpKS5qb2luKCcgJyl9ICR7Y3VyfSdgKTtcbiAgICAgIH1cblxuICAgICAgYWRkKG9wZXJhdG9yLCBwYXJzZUZsb2F0KG51bWJlcikpO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKCF0eXBlICYmIGdldFR5cGUoY3VyKSA9PT0gJ3ZhbHVlJyAmJiBBcnJheS5pc0FycmF5KGxhc3QudmFsdWUpKSB7XG4gICAgICBsYXN0LnZhbHVlWzFdID0gbGFzdC52YWx1ZVsxXSB8fCAnJztcbiAgICAgIGxhc3QudmFsdWVbMV0gKz0gbGFzdC52YWx1ZVsxXSA/ICcgJyA6ICcnO1xuICAgICAgbGFzdC52YWx1ZVsxXSArPSBjdXI7XG4gICAgICByZXR1cm4gY3VyO1xuICAgIH1cblxuICAgIGFkZCh0eXBlIHx8IGdldFR5cGUoY3VyKSwgdHlwZW9mIGN1ciA9PT0gJ3N0cmluZycgJiYgaXNOdW1iZXIoY3VyKSA/IHBhcnNlSW50KGN1ciwgMTApIDogY3VyKTtcbiAgICByZXR1cm4gY3VyO1xuICB9LCBudWxsKTtcblxuICBDQUNIRVtgJCR7ZXhwcmVzc2lvbn1gXSA9IGFzdDtcbiAgcmV0dXJuIGFzdDtcbn1cbiIsICIvKipcbiAqIFRha2UgYSBzdHJpbmcgaW5wdXQgYW5kIGNoZWNrIGlmIGl0IHMgYSBub3RlIG5hbWUgb3Igbm90XG4gKiBAcGFyYW0gIHtTdHJpbmd9IHN0ciBOb3RlIG5hbWUgZS5nLiBjNFxuICogQHJldHVybiB7Qm9vbGVhbn0gUmV0dXJuIHRydWUgZm9yIGM0IG9yIHJldHVybiBmYWxzZSBmb3Igc29tZXRoaW5nIGxpa2UgQ01cbiAqL1xuZXhwb3J0IGNvbnN0IGlzTm90ZSA9IChzdHI6IHN0cmluZyk6IGJvb2xlYW4gPT5cbiAgL15bYS1nQS1HXSg/OiN8Yik/XFxkJC8udGVzdChzdHIpO1xuXG4vKipcbiAqIFRha2UgYSBTdHJpbmcgaW5wdXQgc3VjaCBhcyB4eHhbeHhbeHhdXVxuICogYW5kIHJldHVybiBhbiBBcnJheSBhcyBbJ3gnLCAneCcsICd4JywgWyd4JywgJ3gnLCBbJ3gnLCAneCddXV1cbiAqIEBwYXJhbSAge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuZXhwb3J0IGNvbnN0IGV4cGFuZFN0ciA9IChzdHI6IHN0cmluZyk6IGFueSA9PiB7XG4gIHN0ciA9IEpTT04uc3RyaW5naWZ5KHN0ci5zcGxpdCgnJykpO1xuICBzdHIgPSBzdHIucmVwbGFjZSgvLFwiXFxbXCIsL2csICcsIFsnKTtcbiAgc3RyID0gc3RyLnJlcGxhY2UoL1wiXFxbXCIsL2csICdbJyk7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKC8sXCJcXF1cIi9nLCAnXScpO1xuICByZXR1cm4gSlNPTi5wYXJzZShzdHIpO1xufTtcblxuLyoqXG4gKiBCYXNpYyBBcnJheSByYW5kb21pemVyXG4gKiBAcGFyYW0gIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0gIHtib29sZWFufSBmdWxsU2h1ZmZsZSBFbnN1cmUgbm8gZWxlbWVudHMgcmVtYWluIGluIG9sZCBwbGFjZVxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbmV4cG9ydCBjb25zdCBzaHVmZmxlID0gKGFycjogYW55W10sIGZ1bGxTaHVmZmxlOiBib29sZWFuID0gdHJ1ZSk6IHN0cmluZ1tdID0+IHtcbiAgY29uc3QgbGFzdEluZGV4OiBudW1iZXIgPSBhcnIubGVuZ3RoIC0gMTtcblxuICAvLyBTaHVmZmxlIGFsZ29yaXRobSBieSBSaWNoYXJkIER1cnN0ZW5mZWxkIChEb25hbGQgRS4gS251dGgpLCBhbHNvIFJvbmFsZCBGaXNoZXIgYW5kIEZyYW5rIFlhdGVzLlxuICAvLyBcIkZ1bGwgU2h1ZmZsZVwiIE1vZGlmaWNhdGlvbiB0byBlbnN1cmUgbm8gZWxlbWVudHMgcmVtYWluIGluIHRoZWlyIG9yaWdpbmFsIHBsYWNlIChieSB0YWtpbmcgZWFjaCBlbGVtZW50IG9uY2VcbiAgLy8gYW5kIHN3YXBwaW5nIHdpdGggYW55IHJlbWFpbmluZyBlbGVtZW50cylcbiAgYXJyLmZvckVhY2goKGVsLCBpZHg6IG51bWJlcikgPT4ge1xuICAgIGlmIChpZHggPj0gbGFzdEluZGV4KSB7XG4gICAgICAvLyBObyBzaHVmZmxpbmcgbGFzdCBlbGVtZW50XG4gICAgICAvLyBPbmUgYmVmb3JlIGxhc3QgaXMgYWx3YXlzIHN3YXBwZWQgd2l0aCBsYXN0IGF0IHRoZSBlbmQgb2YgdGhlIGxvb3BcbiAgICAgIC8vIFNpbmNlIHByZXZpb3VzIHN3YXBzIGNhbiBtb3ZlIGxhc3QgZWxlbWVudCBpbnRvIG90aGVyIHBsYWNlcywgdGhlcmUgaXMgc3RpbGwgYSByYW5kb20gc2h1ZmZsZSBvZiBsYXN0IGVsZW1lbnRcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gU3dhcCBlbCB3aXRoIG9uZSBvZiB0aGUgaGlnaGVyIGVsZW1lbnRzIHJhbmRvbWx5XG4gICAgbGV0IHJuZDtcbiAgICBybmQgPSBmdWxsU2h1ZmZsZVxuICAgICAgPyAvLyBQaWNrIHJhbmRvbSBudW1iZXIgZnJvbSBpZHgrMSB0byBsYXN0SW5kZXggKE1vZGlmaWVkIGFsZ29yaXRobSwgKE4tMSkhIGNvbWJpbmF0aW9ucylcbiAgICAgICAgLy8gTWF0aC5yYW5kb20gLT4gWzAsIDEpIC0+IFswLCBsYXN0SW5kZXgtaWR4ICkgLS1mbG9vci0+IFswLCBsYXN0SW5kZXgtaWR4LTFdXG4gICAgICAgIC8vIHJuZCA9IFswLCBsYXN0SW5kZXgtaWR4LTFdICsgMSArIGlkeCA9IFsxICsgaWR4LCBsYXN0SW5kZXhdXG4gICAgICAgIC8vIChPcmlnaW5hbCBhbGdvcml0aG0gd291bGQgcGljayBybmQgPSBbaWR4LCBsYXN0SW5kZXhdLCB0aHVzIGFueSBlbGVtZW50IGNvdWxkIGFycml2ZSBiYWNrIGludG8gaXRzIHNsb3QpXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChsYXN0SW5kZXggLSBpZHgpKSArIDEgKyBpZHhcbiAgICAgIDogLy8gUGljayByYW5kb20gbnVtYmVyIGZyb20gaWR4IHRvIGxhc3RJbmRleCAoVW5tb2RpZmllZCBSaWNoYXJkIER1cnN0ZW5mZWxkLCBOISBjb21iaW5hdGlvbnMpXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChsYXN0SW5kZXggKyAxIC0gaWR4KSkgKyBpZHg7XG4gICAgYXJyW2lkeF0gPSBhcnJbcm5kXTtcbiAgICBhcnJbcm5kXSA9IGVsO1xuICB9KTtcblxuICByZXR1cm4gYXJyO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gYW4gYXJyYXkgb2YgbnVtYmVycyByZWxhdGl2ZSB0byBtYXhMZXZlbCB8fCAxMjcgb3JkZXJlZCBpbiBhIFNpbmUgd2F2ZSBmb3JtYXRcbiAqIFRoaXMgaXMgdXNlZCBieSB0aGUgYHNpenpsZWAgcGFyYW0gb2YgdGhlIGBjbGlwYCBtZXRob2QgdG8gYWRkIGEgcnVkaW1lbnRhcnkgdmFyaWF0aW9uIHRvIHRoZSBhY2NlbnQgb2YgZWFjaCBub3RlXG4gKiBAcGFyYW0ge051bWJlcn0gbWF4TGV2ZWwgQSBudW1iZXIgYmV0d2VlbiBub3QgbW9yZSB0aGFuIDEyN1xuICogQHJldHVybiB7QXJyYXl9ICBFeGFtcGxlIG91dHB1dCBbNjMsIDkwLCAxMTAsIDEyNywgMTEwLCA5MCwgNjMsIDAsIDYzLCA5MCwgMTEwLCAxMjcsIDExMCwgOTAsIDYzLCAwXVxuICovXG5leHBvcnQgY29uc3Qgc2l6emxlTWFwID0gKG1heExldmVsOiBudW1iZXIgPSAxMjcpOiBudW1iZXJbXSA9PiB7XG4gIGNvbnN0IHBpID0gTWF0aC5QSTtcbiAgY29uc3QgcGlBcnI6IG51bWJlcltdID0gW1xuICAgIHBpIC8gNixcbiAgICBwaSAvIDQsXG4gICAgcGkgLyAzLFxuICAgIHBpIC8gMixcbiAgICAoMiAqIHBpKSAvIDMsXG4gICAgKDMgKiBwaSkgLyA0LFxuICAgICg1ICogcGkpIC8gNixcbiAgICBwaSxcbiAgXTtcbiAgY29uc3QgcGlBcnJSZXY6IG51bWJlcltdID0gW1xuICAgIDAsXG4gICAgcGkgLyA2LFxuICAgIHBpIC8gNCxcbiAgICBwaSAvIDMsXG4gICAgcGkgLyAyLFxuICAgICgyICogcGkpIC8gMyxcbiAgICAoMyAqIHBpKSAvIDQsXG4gICAgKDUgKiBwaSkgLyA2LFxuICBdO1xuICBwaUFyclJldi5yZXZlcnNlKCk7XG4gIGNvbnN0IGFycjogbnVtYmVyW10gPSBwaUFyci5jb25jYXQocGlBcnJSZXYpO1xuICByZXR1cm4gYXJyLm1hcChlbGVtZW50ID0+IE1hdGgucm91bmQoTWF0aC5zaW4oZWxlbWVudCkgKiBtYXhMZXZlbCkpO1xufTtcblxuLyoqXG4gKiBQaWNrIG9uZSBpdGVtIHJhbmRvbWx5IGZyb20gYW4gYXJyYXkgYW5kIHJldHVybiBpdFxuICogQHBhcmFtIGFyclxuICovXG5leHBvcnQgY29uc3QgcGlja09uZSA9IChhcnI6IGFueVtdKSA9PlxuICBhcnIubGVuZ3RoID4gMSA/IGFycltNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXSA6IGFyclswXTtcblxuLyoqXG4gKiBCb29sZWFuIGdlbmVyYXRvclxuICovXG5leHBvcnQgY29uc3QgZGljZSA9ICgpID0+ICEhTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcblxuLyoqXG4gKiBQb2x5ZmlsbCBmb3IgQXJyYXkucHJvdG90eXBlLmZsYXRcbiAqL1xuZXhwb3J0IGNvbnN0IGZsYXQgPSAoYXJyOiBhbnlbXVtdKSA9PlxuICBhcnIucmVkdWNlKChhY2MsIHZhbCkgPT4gYWNjLmNvbmNhdCh2YWwpLCBbXSk7XG4iLCAiaW1wb3J0IHsgc2NhbGUgfSBmcm9tICdoYXJtb25pY3MnO1xuaW1wb3J0IHsgcGlja09uZSwgZGljZSB9IGZyb20gJy4vdXRpbHMnO1xuXG4vKipcbiAqIEdldCB0aGUgY2hvcmRzIHRoYXQgZ28gd2l0aCBhIGdpdmVuIHNjYWxlL21vZGVcbiAqIFRoaXMgaXMgdXNlZnVsIG9ubHkgaW4gY2FzZSB5b3Ugd2FudCB0byBjaGVjayB3aGF0IGNob3JkcyB3b3JrIHdpdGggYSBzY2FsZS9tb2RlXG4gKiBzbyB0aGF0IHlvdSBjYW4gY29tZSB1cCB3aXRoIGNob3JkIHByb2dyZXNzaW9uc1xuICogQHBhcmFtICB7U3RyaW5nfSBtb2RlIGUuZy4gbWFqb3JcbiAqIEByZXR1cm4ge0FycmF5fSBlLmcuWydJJywgJ2lpJywgJ2lpaScsICdJVicsICdWJywgJ3ZpJywgJ3ZpaVx1MDBCMCddXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRDaG9yZERlZ3JlZXMgPSAobW9kZTogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHRoZVJvbWFuczogTlZQPHN0cmluZ1tdPiA9IHtcbiAgICBpb25pYW46IFsnSScsICdpaScsICdpaWknLCAnSVYnLCAnVicsICd2aScsICd2aWlcdTAwQjAnXSxcbiAgICBkb3JpYW46IFsnaScsICdpaScsICdJSUknLCAnSVYnLCAndicsICd2aVx1MDBCMCcsICdWSUknXSxcbiAgICBwaHJ5Z2lhbjogWydpJywgJ0lJJywgJ0lJSScsICdpdicsICd2XHUwMEIwJywgJ1ZJJywgJ3ZpaSddLFxuICAgIGx5ZGlhbjogWydJJywgJ0lJJywgJ2lpaScsICdpdlx1MDBCMCcsICdWJywgJ3ZpJywgJ3ZpaSddLFxuICAgIG1peG9seWRpYW46IFsnSScsICdpaScsICdpaWlcdTAwQjAnLCAnSVYnLCAndicsICd2aScsICdWSUknXSxcbiAgICBhZW9saWFuOiBbJ2knLCAnaWlcdTAwQjAnLCAnSUlJJywgJ2l2JywgJ3YnLCAnVkknLCAnVklJJ10sXG4gICAgbG9jcmlhbjogWydpXHUwMEIwJywgJ0lJJywgJ2lpaScsICdpdicsICdWJywgJ1ZJJywgJ3ZpaSddLFxuICAgICdtZWxvZGljIG1pbm9yJzogWydpJywgJ2lpJywgJ0lJSSsnLCAnSVYnLCAnVicsICd2aVx1MDBCMCcsICd2aWlcdTAwQjAnXSxcbiAgICAnaGFybW9uaWMgbWlub3InOiBbJ2knLCAnaWlcdTAwQjAnLCAnSUlJKycsICdpdicsICdWJywgJ1ZJJywgJ3ZpaVx1MDBCMCddLFxuICB9O1xuICB0aGVSb21hbnMubWFqb3IgPSB0aGVSb21hbnMuaW9uaWFuO1xuICB0aGVSb21hbnMubWlub3IgPSB0aGVSb21hbnMuYWVvbGlhbjtcblxuICByZXR1cm4gdGhlUm9tYW5zW21vZGVdIHx8IFtdO1xufTtcblxuY29uc3QgaWR4QnlEZWdyZWU6IE5WUDxudW1iZXI+ID0ge1xuICBpOiAwLFxuICBpaTogMSxcbiAgaWlpOiAyLFxuICBpdjogMyxcbiAgdjogNCxcbiAgdmk6IDUsXG4gIHZpaTogNixcbn07XG5cbi8qKlxuICogR2V0IGEgY2hvcmQgbmFtZSBmcm9tIGRlZ3JlZVxuICogQHBhcmFtICB7U3RyaW5nfSByb21hbiBlLmcuIGlpIE9SIGlpXHUwMEIwIE9SIFY3XG4gKiBAcmV0dXJuIHtTdHJpbmd9IGUuZy4gbSBPUiBtN2I1IE9SIE1hajdcbiAqL1xuY29uc3QgZ2V0Q2hvcmROYW1lID0gKHJvbWFuOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAvLyByZW1vdmUgYW55IG5vbiBjaGFyYWN0ZXJcbiAgY29uc3Qgc3RyID0gcm9tYW4ucmVwbGFjZSgvXFxXL2csICcnKTtcbiAgbGV0IHByZWZpeCA9ICdNJztcbiAgLy8gY2hlY2sgaWYgaXQgcyBsb3dlcmNhc2VcbiAgaWYgKHN0ci50b0xvd2VyQ2FzZSgpID09PSBzdHIpIHtcbiAgICBwcmVmaXggPSAnbSc7XG4gIH1cbiAgaWYgKHJvbWFuLmluZGV4T2YoJ1x1MDBCMCcpID4gLTEpIHtcbiAgICByZXR1cm4gcHJlZml4ICsgJzdiNSc7XG4gIH1cbiAgaWYgKHJvbWFuLmluZGV4T2YoJysnKSA+IC0xKSB7XG4gICAgcmV0dXJuIHByZWZpeCArICcjNSc7XG4gIH1cblxuICBpZiAocm9tYW4uaW5kZXhPZignNycpID4gLTEpIHtcbiAgICByZXR1cm4gcHJlZml4ID09PSAnTScgPyAnbWFqNycgOiAnbTcnO1xuICB9XG5cbiAgcmV0dXJuIHByZWZpeDtcbn07XG5cbi8qKlxuICogVGFrZSB0aGUgc3BlY2lmaWVkIHNjYWxlIGFuZCBkZWdyZWVzIGFuZCByZXR1cm4gdGhlIGNob3JkIG5hbWVzIGZvciB0aGVtXG4gKiBUaGVzZSBjYW4gYmUgdXNlZCBhcyB0aGUgdmFsdWUgZm9yIHRoZSBgbm90ZXNgIHBhcmFtIG9mIHRoZSBgY2xpcGAgbWV0aG9kXG4gKiBAcGFyYW0ge1N0cmluZ30gbm90ZU9jdGF2ZVNjYWxlIGUuZy4gJ0M0IG1ham9yJ1xuICogQHBhcmFtICB7U3RyaW5nfSBjaG9yZERlZ3Jlc3MgZS5nLiAnSSBJViBWIElWJ1xuICogQHJldHVybiB7U3RyaW5nfSBlLmcuICdDTSBGTSBHTSBGTSdcbiAqL1xuZXhwb3J0IGNvbnN0IGdldENob3Jkc0J5UHJvZ3Jlc3Npb24gPSAoXG4gIG5vdGVPY3RhdmVTY2FsZTogc3RyaW5nLFxuICBjaG9yZERlZ3Jlc3M6IHN0cmluZ1xuKTogc3RyaW5nID0+IHtcbiAgLy8gU2V0IHRoZSBvY3RhdmUgaWYgbWlzc2luZ1xuICAvLyBGb3IgZXhhbXBsZSBpZiB0aGUgbWV0aG9kIHdhcyBjYWxsZWQgd2l0aCBgQyBtYWpvcmAgaW5zdGVhZCBvZiBgQzQgbWFqb3JgLCB0aGVuIGFkZCB0aGUgNFxuICBjb25zdCBub3RlT2N0YXZlU2NhbGVBcnIgPSBub3RlT2N0YXZlU2NhbGUuc3BsaXQoJyAnKTtcbiAgaWYgKCFub3RlT2N0YXZlU2NhbGVBcnJbMF0ubWF0Y2goL1xcZC8pKSB7XG4gICAgbm90ZU9jdGF2ZVNjYWxlQXJyWzBdICs9ICc0JztcbiAgICBub3RlT2N0YXZlU2NhbGUgPSBub3RlT2N0YXZlU2NhbGVBcnIuam9pbignICcpO1xuICB9XG5cbiAgLy8gR2V0IHRoZSBzY2FsZSBmcm9tIHRoZSBnaXZlbiBub3RlIGFuZCBzY2FsZS9tb2RlIGNvbWJpbmF0aW9uXG4gIGNvbnN0IG1vZGUgPSBzY2FsZShub3RlT2N0YXZlU2NhbGUpO1xuICBjb25zdCBjaG9yZERlZ3JlZXNBcnIgPSBjaG9yZERlZ3Jlc3MucmVwbGFjZSgvXFxzKiwrXFxzKi9nLCAnICcpLnNwbGl0KCcgJyk7XG4gIC8vIE5vdyB3ZSBoYXZlIHNvbWV0aGluZyBsaWtlIFsnaScsICdpaScsICdJViddXG4gIC8vIENvbnZlcnQgaXQgdG8gYSBjaG9yZCBmYW1pbHkgc3VjaCBhcyBbJ0NtJywgJ0RtJywgJ0ZNJ11cbiAgY29uc3QgY2hvcmRGYW1pbHkgPSBjaG9yZERlZ3JlZXNBcnIubWFwKChyb21hbiwgaWR4KSA9PiB7XG4gICAgY29uc3QgY2hvcmROYW1lID0gZ2V0Q2hvcmROYW1lKHJvbWFuKTsgLy8gZS5nLiBtXG4gICAgLy8gZ2V0IHRoZSBpbmRleCB0byBiZSB1c2VkIGJ5IHJlbW92aW5nIGFueSBkaWdpdCBvciBub24gYWxwaGFiZXQgY2hhcmFjdGVyXG4gICAgY29uc3Qgc2NhbGVJZCA9IGlkeEJ5RGVncmVlW3JvbWFuLnJlcGxhY2UoL1xcV3xcXGQvZywgJycpLnRvTG93ZXJDYXNlKCldOyAvLyBlLmcuIDBcbiAgICAvLyBnZXQgdGhlIG5vdGUgaXRzZWxmXG4gICAgY29uc3Qgbm90ZSA9IG1vZGVbc2NhbGVJZF07IC8vIGUuZy4gQ1xuICAgIC8vIGdldCB0aGUgb2N0YXZlIG9mIHRoZSBub3RlO1xuICAgIGNvbnN0IG9jdCA9IG5vdGUucmVwbGFjZSgvXFxEKy8sICcnKTsgLy8gZS5nLiA0XG4gICAgLy8gbm93IGdldCB0aGUgY2hvcmRcbiAgICByZXR1cm4gbm90ZS5yZXBsYWNlKC9cXGQvLCAnJykgKyBjaG9yZE5hbWUgKyAnXycgKyBvY3Q7XG4gIH0pO1xuXG4gIHJldHVybiBjaG9yZEZhbWlseS50b1N0cmluZygpLnJlcGxhY2UoLywvZywgJyAnKTtcbn07XG5cbmNvbnN0IGdldFByb2dGYWN0b3J5ID0gKHsgVCwgUCwgRCB9OiBUUEQpID0+IHtcbiAgcmV0dXJuIChjb3VudDogbnVtYmVyID0gNCkgPT4ge1xuICAgIGNvbnN0IGNob3JkcyA9IFtdO1xuXG4gICAgLy8gUHVzaCByb290L3RvbmljXG4gICAgY2hvcmRzLnB1c2gocGlja09uZShUKSk7XG5cbiAgICBsZXQgaSA9IDE7XG5cbiAgICAvLyBQaWNrIGEgcHJlZG9taW5hbnRcbiAgICBpZiAoaSA8IGNvdW50IC0gMSkge1xuICAgICAgY2hvcmRzLnB1c2gocGlja09uZShQKSk7XG4gICAgICBpKys7XG4gICAgfVxuXG4gICAgLy8gVHJ5IGFub3RoZXIgcHJlZG9taW5hbnRcbiAgICBpZiAoaSA8IGNvdW50IC0gMSAmJiBkaWNlKCkpIHtcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoUCkpO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIC8vLy8vLy8vLyA0IG9yIG1vcmUvLy8vLy8vLy8vXG4gICAgaWYgKGkgPCBjb3VudCAtIDEpIHtcbiAgICAgIC8vIFBpY2sgYSBkb21pbmFudFxuICAgICAgY2hvcmRzLnB1c2gocGlja09uZShEKSk7XG4gICAgICBpKys7XG4gICAgfVxuXG4gICAgaWYgKGkgPCBjb3VudCAtIDEpIHtcbiAgICAgIC8vIFBpY2sgYSBwcmVkb21pbmFudFxuICAgICAgY2hvcmRzLnB1c2gocGlja09uZShQKSk7XG4gICAgICBpKys7XG4gICAgfVxuXG4gICAgaWYgKGkgPCBjb3VudCAtIDEpIHtcbiAgICAgIC8vIFBpY2sgYSBkb21pbmFudFxuICAgICAgY2hvcmRzLnB1c2gocGlja09uZShEKSk7XG4gICAgICBpKys7XG4gICAgfVxuXG4gICAgLy8gUGljayBhIHByZWRvbWluYW50IGlmIHBvc3NpYmxlXG4gICAgaWYgKGkgPCBjb3VudCAtIDEgJiYgZGljZSgpKSB7XG4gICAgICBjaG9yZHMucHVzaChwaWNrT25lKFApKTtcbiAgICAgIGkrKztcbiAgICB9XG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgLy8gRmlsbCB0aGUgcmVzdCB3aXRoIGRvbWluYW50XG4gICAgd2hpbGUgKGkgPCBjb3VudCkge1xuICAgICAgY2hvcmRzLnB1c2gocGlja09uZShEKSk7XG4gICAgICBpKys7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNob3JkcztcbiAgfTtcbn07XG5cbmNvbnN0IE0gPSBnZXRQcm9nRmFjdG9yeSh7IFQ6IFsnSScsICd2aSddLCBQOiBbJ2lpJywgJ0lWJ10sIEQ6IFsnViddIH0pO1xuY29uc3QgbSA9IGdldFByb2dGYWN0b3J5KHsgVDogWydpJywgJ1ZJJ10sIFA6IFsnaWknLCAnaXYnXSwgRDogWydWJ10gfSk7XG5cbi8qKlxuICogR2VuZXJhdGUgYSBjaG9yZCBwcm9ncmVzc2lvbiBiYXNlZCBvbiBiYXNpYyBtdXNpYyB0aGVvcnlcbiAqIHdoZXJlIHdlIGZvbGxvdyB0b25pYyB0byBvcHRpb25hbGx5IHByZWRvbWluYW50IGFuZCB0aGVuIGRvbWluYW50XG4gKiBhbmQgdGhlbiByYW5kb21seSB0byBwcmVkb21pbmFudCBhbmQgY29udGludWUgdGhpcyB0aWxsIHdlIHJlYWNoIGBjb3VudGBcbiAqIEBwYXJhbSBzY2FsZVR5cGUgZS5nLiBNIChmb3IgbWFqb3IgY2hvcmQgcHJvZ3Jlc3Npb24pLCBtIChmb3IgbWlub3IgY2hvcmQgcHJvZ3Jlc3Npb24pXG4gKiBAcGFyYW0gY291bnQgZS5nLiA0XG4gKi9cbmV4cG9ydCBjb25zdCBwcm9ncmVzc2lvbiA9IChzY2FsZVR5cGU6IHByb2dyZXNzaW9uU2NhbGUsIGNvdW50OiBudW1iZXIgPSA0KSA9PiB7XG4gIGlmIChzY2FsZVR5cGUgPT09ICdtYWpvcicgfHwgc2NhbGVUeXBlID09PSAnTScpIHtcbiAgICByZXR1cm4gTShjb3VudCk7XG4gIH1cblxuICBpZiAoc2NhbGVUeXBlID09PSAnbWlub3InIHx8IHNjYWxlVHlwZSA9PT0gJ20nKSB7XG4gICAgcmV0dXJuIG0oY291bnQpO1xuICB9XG59O1xuIiwgImltcG9ydCB7IGdldENob3Jkc0J5UHJvZ3Jlc3Npb24gfSBmcm9tICdzY3JpYmJsZXR1bmUvc3JjL3Byb2dyZXNzaW9uJztcbmltcG9ydCB7IHNjYWxlLCBpbmxpbmVDaG9yZCB9IGZyb20gJ2hhcm1vbmljcyc7XG5cbmltcG9ydCB7IGlzUHJvZ3Jlc3Npb24sIHRyYW5zZm9ybSB9IGZyb20gJy4vdG9rZW5pemUnO1xuaW1wb3J0IHsgcmVwZWF0LCBjbG9uZSB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlKGlucHV0LCBjb250ZXh0LCBjYWxsYmFjaykge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoaW5wdXQpKSByZXR1cm4gaW5wdXQ7XG5cbiAgY29uc3QgZm4gPSB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgPyBjYWxsYmFjayA6ICh2ID0+IHYpO1xuXG4gIGxldCBza2lwO1xuICByZXR1cm4gaW5wdXQucmVkdWNlKChwcmV2LCBjdXIsIGkpID0+IHtcbiAgICBjb25zdCBsYXN0ID0gcHJldltwcmV2Lmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IG5leHQgPSBpbnB1dFtpICsgMV0gfHwge307XG4gICAgY29uc3Qgb2xkID0gaW5wdXRbaSAtIDFdIHx8IHt9O1xuXG4gICAgaWYgKHNraXApIHtcbiAgICAgIHNraXAgPSBmYWxzZTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KGN1cikpIHtcbiAgICAgIHByZXYucHVzaCguLi5jdXIpO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKGN1ci50eXBlID09PSAndmFsdWUnICYmIGN1ci52YWx1ZSA9PT0gJy4nKSB7XG4gICAgICBpZiAocHJldi5sZW5ndGggPiAwKSBwcmV2LnB1c2gocHJldlswXSk7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAob2xkLnR5cGUgPT09ICdwYXR0ZXJuJyAmJiBjdXIudHlwZSA9PT0gJ3BhdHRlcm4nKSB7XG4gICAgICBwcmV2W3ByZXYubGVuZ3RoIC0gMV0gKz0gY3VyLnZhbHVlO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgc3dpdGNoIChjdXIudHlwZSkge1xuICAgICAgY2FzZSAncGF0dGVybic6XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnbm90ZSc6XG4gICAgICAgIGlmIChjdXIucmVwZWF0KSBwcmV2LnB1c2goLi4ucmVwZWF0KGN1ci52YWx1ZSwgY3VyLnJlcGVhdCkpO1xuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGN1ci52YWx1ZSkpIHByZXYucHVzaCguLi5jdXIudmFsdWUpO1xuICAgICAgICBlbHNlIHByZXYucHVzaChjdXIudmFsdWUpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnY2hvcmQnOlxuICAgICAgICBpZiAoY3VyLnJlcGVhdCkgcHJldi5wdXNoKC4uLnJlcGVhdChjdXIudmFsdWUsIGN1ci5yZXBlYXQpKTtcbiAgICAgICAgZWxzZSBpZiAoY3VyLnVuZm9sZCkgcHJldi5wdXNoKC4uLmN1ci52YWx1ZSk7XG4gICAgICAgIGVsc2UgcHJldi5wdXNoKGN1ci52YWx1ZSk7XG5cbiAgICAgICAgaWYgKGN1ci50eXBlICE9PSAnY2hvcmQnKSB7XG4gICAgICAgICAgc2tpcCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2RpdmlkZSc6XG4gICAgICAgIHByZXZbcHJldi5sZW5ndGggLSAxXSAvPSBjdXIudmFsdWU7XG4gICAgICAgIHJldHVybiBwcmV2O1xuXG4gICAgICBjYXNlICdtdWx0aXBseSc6XG4gICAgICAgIHByZXYucHVzaCguLi5yZXBlYXQobGFzdCwgY3VyLnZhbHVlIC0gMSkpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnc2xpY2UnOlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShsYXN0KSkge1xuICAgICAgICAgIHByZXZbcHJldi5sZW5ndGggLSAxXSA9IGxhc3Quc2xpY2UoY3VyLnZhbHVlWzBdIC0gMSwgY3VyLnZhbHVlWzFdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmV2LnB1c2goY3VyLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnbW9kZSc6XG4gICAgICAgIHByZXZbcHJldi5sZW5ndGggLSAxXSA9IGAke2xhc3R9ICR7Y3VyLnZhbHVlfWA7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdwYXJhbSc6XG4gICAgICBjYXNlICd2YWx1ZSc6IHtcbiAgICAgICAgbGV0IHZhbHVlID0gbnVsbDtcbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZXh0W2N1ci52YWx1ZV0gIT09ICd1bmRlZmluZWQnKSB2YWx1ZSA9IGNvbnRleHRbY3VyLnZhbHVlXTtcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIGV4cHJlc3Npb24gZm9yICcke2N1ci52YWx1ZX0nYCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWVbMF0gJiYgdmFsdWVbMF0udHlwZSkge1xuICAgICAgICAgIHZhbHVlID0gcmVkdWNlKHZhbHVlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjdXIucmVwZWF0KSB7XG4gICAgICAgICAgICBwcmV2LnB1c2goLi4ucmVwZWF0KHZhbHVlLCBjdXIucmVwZWF0KS5yZWR1Y2UoKF9wcmV2LCBfY3VyKSA9PiB7XG4gICAgICAgICAgICAgIF9wcmV2LnB1c2goLi4uX2N1cik7XG4gICAgICAgICAgICAgIHJldHVybiBfcHJldjtcbiAgICAgICAgICAgIH0sIFtdKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByZXYucHVzaCguLi52YWx1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgIH1cblxuICAgICAgICB2YWx1ZSA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdO1xuICAgICAgICBpZiAoY3VyLnJlcGVhdCkgcHJldi5wdXNoKC4uLnJlcGVhdCh2YWx1ZSwgY3VyLnJlcGVhdCkpO1xuICAgICAgICBlbHNlIHByZXYucHVzaCguLi52YWx1ZSk7XG4gICAgICB9IGJyZWFrO1xuICAgICAgZGVmYXVsdDoge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuaGFuZGxlZCAnJHtjdXIudHlwZX0nYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZXY7XG4gIH0sIFtdKS5yZWR1Y2UoKG1lbW8sIGl0ZW0pID0+IHtcbiAgICBjb25zdCBwcmV2ID0gbWVtb1ttZW1vLmxlbmd0aCAtIDFdO1xuXG4gICAgaWYgKFxuICAgICAgQXJyYXkuaXNBcnJheShwcmV2KVxuICAgICAgJiYgQXJyYXkuaXNBcnJheShpdGVtKVxuICAgICAgJiYgdHlwZW9mIGl0ZW1bMF0gPT09ICdudW1iZXInXG4gICAgICAmJiBpdGVtLmxlbmd0aCA9PT0gMlxuICAgICkge1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gaXRlbVsxXSA9PT0gSW5maW5pdHkgPyBwcmV2Lmxlbmd0aCA6IGl0ZW1bMV07XG4gICAgICBjb25zdCBbYmFzZSwgbGVuZ3RoXSA9IFN0cmluZyhvZmZzZXQpLnNwbGl0KC9cXEQvKTtcblxuICAgICAgbWVtby5wb3AoKTtcbiAgICAgIG1lbW8ucHVzaCguLi5wcmV2LnNsaWNlKGl0ZW1bMF0gLSAxLCBiYXNlKSk7XG5cbiAgICAgIGlmIChTdHJpbmcob2Zmc2V0KS5pbmNsdWRlcygnPicpKSB7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gbWVtby5zbGljZSgtbGVuZ3RoIC0gMSk7XG5cbiAgICAgICAgcGFydHMucG9wKCk7XG4gICAgICAgIHBhcnRzLnJldmVyc2UoKTtcbiAgICAgICAgbWVtby5wdXNoKC4uLnBhcnRzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtZW1vO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycgJiYgaXRlbS5pbmNsdWRlcygnICcpKSB7XG4gICAgICBjb25zdCBjaHVua3MgPSBpdGVtLnNwbGl0KCcgJyk7XG5cbiAgICAgIGlmIChjaHVua3Muc29tZShpc1Byb2dyZXNzaW9uKSkge1xuICAgICAgICBjb25zdCBvZmZzZXQgPSBjaHVua3MuZmluZEluZGV4KGlzUHJvZ3Jlc3Npb24pO1xuICAgICAgICBjb25zdCBbYSwgYl0gPSBbY2h1bmtzLnNsaWNlKDAsIG9mZnNldCksIGNodW5rcy5zbGljZShvZmZzZXQpXTtcblxuICAgICAgICBtZW1vLnB1c2goZ2V0Q2hvcmRzQnlQcm9ncmVzc2lvbihhLmpvaW4oJyAnKSwgYi5qb2luKCcgJykpLnNwbGl0KCcgJykubWFwKHggPT4gZm4oaW5saW5lQ2hvcmQoeCkpKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZW1vLnB1c2goZm4oc2NhbGUoaXRlbSkpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbWVtby5wdXNoKGZuKGl0ZW0pKTtcbiAgICB9XG4gICAgcmV0dXJuIG1lbW87XG4gIH0sIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlKGJ1ZmZlcikge1xuICBjb25zdCB0cmFja3MgPSB7fTtcbiAgY29uc3QgbWFpbiA9IFtdO1xuICBjb25zdCBkYXRhID0ge307XG5cbiAgbGV0IGNoYW5uZWwgPSBudWxsO1xuICBsZXQgcHJlZml4ID0gJyc7XG4gIGxldCB0cmFjaztcbiAgbGV0IGluZm8gPSB7fTtcbiAgYnVmZmVyLnNwbGl0KC9cXHI/XFxuL2cpLmZvckVhY2goKGxpbmUsIG50aCkgPT4ge1xuICAgIGxpbmUgPSBsaW5lLnJlcGxhY2UoLzsuKz8kLywgJycpLnRyaW0oKTtcbiAgICBpZiAoIWxpbmUpIHJldHVybjtcblxuICAgIHRyeSB7XG4gICAgICBpZiAobGluZS5jaGFyQXQoKSA9PT0gJyUnKSB7XG4gICAgICAgIGNvbnN0IFtuYW1lLCAuLi52YWx1ZV0gPSBsaW5lLnNwbGl0KC9cXHMrLyk7XG5cbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBkYXRhW25hbWVdID0gdHJhbnNmb3JtKHZhbHVlLmpvaW4oJyAnKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobGluZS5pbmRleE9mKCcjICcpID49IDApIHtcbiAgICAgICAgaWYgKHRyYWNrKSB7XG4gICAgICAgICAgdHJhY2tzW3RyYWNrXSA9IGluZm87XG4gICAgICAgICAgY2hhbm5lbCA9IG51bGw7XG4gICAgICAgICAgcHJlZml4ID0gJyc7XG4gICAgICAgICAgaW5mbyA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgdHJhY2sgPSBsaW5lLnNwbGl0KC9cXHMrLykuc2xpY2UoMSkuam9pbignICcpO1xuICAgICAgfSBlbHNlIGlmIChsaW5lLmNoYXJBdCgpID09PSAnPicpIHtcbiAgICAgICAgbWFpbi5wdXNoKHRyYW5zZm9ybShsaW5lLnN1YnN0cigxKS50cmltKCkpKTtcbiAgICAgIH0gZWxzZSBpZiAobGluZS5jaGFyQXQoKSA9PT0gJ0AnKSB7XG4gICAgICAgIGNvbnN0IFtuYW1lLCAuLi5leHRlbmRdID0gbGluZS5zdWJzdHIoMSkuc3BsaXQoJyAnKTtcblxuICAgICAgICBpZiAoZXh0ZW5kWzBdID09PSAnPCcpIHtcbiAgICAgICAgICBjb25zdCBrZXkgPSBgJHtleHRlbmRbMV19I2A7XG5cbiAgICAgICAgICBPYmplY3Qua2V5cyhpbmZvKVxuICAgICAgICAgICAgLmZpbHRlcih4ID0+IHguaW5kZXhPZihrZXkpID09PSAwKVxuICAgICAgICAgICAgLmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICAgIGluZm9bYCR7bmFtZX0jJHtrLnNwbGl0KCcjJylbMV19YF0gPSBjbG9uZShpbmZvW2tdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHByZWZpeCA9IG5hbWU7XG4gICAgICB9IGVsc2UgaWYgKGxpbmUuaW5kZXhPZignOicpID4gMCkge1xuICAgICAgICBjb25zdCBbbmFtZSwgLi4udmFsdWVdID0gbGluZS5zcGxpdCgnOicpO1xuXG4gICAgICAgIGRhdGFbbmFtZV0gPSB0cmFuc2Zvcm0odmFsdWUuam9pbignOicpLnRyaW0oKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0aWNrcyA9IHRyYW5zZm9ybShsaW5lKTtcblxuICAgICAgICBpZiAoIXRpY2tzWzBdIHx8IHRpY2tzWzBdLnR5cGUgIT09ICdjaGFubmVsJykge1xuICAgICAgICAgIGlmICghY2hhbm5lbCkgdGhyb3cgbmV3IFR5cGVFcnJvcihgTWlzc2luZyBjaGFubmVsLCBnaXZlbiAnJHtsaW5lfSdgKTtcblxuICAgICAgICAgIGNvbnN0IGVuZCA9IGluZm9bY2hhbm5lbF1baW5mb1tjaGFubmVsXS5sZW5ndGggLSAxXTtcblxuICAgICAgICAgIGlmICghZW5kLnZhbHVlcykgZW5kLnZhbHVlcyA9IFt7IHR5cGU6ICdudW1iZXInLCB2YWx1ZTogMTI3IH1dO1xuICAgICAgICAgIGVuZC52YWx1ZXMucHVzaCguLi50aWNrcyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgbm90ZXMgPSB0aWNrcy5maW5kSW5kZXgoeCA9PiBbJ25vdGUnLCAnY2hvcmQnLCAncGFyYW0nXS5pbmNsdWRlcyh4LnR5cGUpKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aWNrcy5maW5kSW5kZXgoeCA9PiB4LnR5cGUgPT09ICdwYXR0ZXJuJyk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gaW5kZXggPiAwID8gdGlja3Muc2xpY2UoaW5kZXgpIDogdGlja3M7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHZhbHVlLmZpbmRJbmRleCh4ID0+IHgudHlwZSAhPT0gJ3BhdHRlcm4nKTtcbiAgICAgICAgY29uc3QgaW5wdXRzID0gdGlja3Muc2xpY2UoMCwgaW5kZXggPiAwID8gaW5kZXggOiAxKTtcblxuICAgICAgICBjaGFubmVsID0gcHJlZml4ICsgaW5wdXRzWzBdLnZhbHVlO1xuICAgICAgICBpZiAoIWluZm9bY2hhbm5lbF0pIHtcbiAgICAgICAgICBpbmZvW2NoYW5uZWxdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc3BlYztcbiAgICAgICAgaWYgKG5vdGVzID4gMCAmJiBpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zdCBlbmQgPSBpbmZvW2NoYW5uZWxdW2luZm9bY2hhbm5lbF0ubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICBlbmQuZGF0YSA9IHZhbHVlLnNsaWNlKG5vdGVzKTtcbiAgICAgICAgICBzcGVjID0ge1xuICAgICAgICAgICAgaW5wdXQ6IGVuZC5pbnB1dCxcbiAgICAgICAgICAgIHZhbHVlczogdmFsdWUuc2xpY2UoMSwgbm90ZXMpLFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAob2Zmc2V0ID4gMCkge1xuICAgICAgICAgIHNwZWMgPSB7XG4gICAgICAgICAgICBkYXRhOiB2YWx1ZS5zbGljZShvZmZzZXQpLFxuICAgICAgICAgICAgaW5wdXQ6IHZhbHVlLnNsaWNlKDAsIG9mZnNldCksXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChvZmZzZXQgPT09IDApIHtcbiAgICAgICAgICBzcGVjID0geyB2YWx1ZXM6IHZhbHVlLnNsaWNlKDEpIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3BlYyA9IHsgaW5wdXQ6IHZhbHVlIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5wdXRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBzcGVjLnZhbHVlcyA9IGlucHV0cy5zbGljZSgxKTtcbiAgICAgICAgfVxuICAgICAgICBpbmZvW2NoYW5uZWxdLnB1c2goc3BlYyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc3QgbXNnID0gdHlwZW9mIGUgPT09ICdzdHJpbmcnID8gZSA6IGUubWVzc2FnZTtcblxuICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGAke21zZ31cXG4gIGF0IGxpbmUgJHtudGggKyAxfVxcbiR7bGluZX1gKTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmICh0cmFjaykge1xuICAgIHRyYWNrc1t0cmFja10gPSBpbmZvO1xuICB9XG4gIHJldHVybiB7IG1haW4sIGRhdGEsIHRyYWNrcyB9O1xufVxuIiwgIid1c2Ugc3RyaWN0J1xuXG4vLyB1dGlsXG5mdW5jdGlvbiBmaWxsU3RyIChzLCBudW0pIHsgcmV0dXJuIEFycmF5KG51bSArIDEpLmpvaW4ocykgfVxuZnVuY3Rpb24gaXNOdW0gKHgpIHsgcmV0dXJuIHR5cGVvZiB4ID09PSAnbnVtYmVyJyB9XG5mdW5jdGlvbiBpc1N0ciAoeCkgeyByZXR1cm4gdHlwZW9mIHggPT09ICdzdHJpbmcnIH1cbmZ1bmN0aW9uIGlzRGVmICh4KSB7IHJldHVybiB0eXBlb2YgeCAhPT0gJ3VuZGVmaW5lZCcgfVxuZnVuY3Rpb24gbWlkaVRvRnJlcSAobWlkaSwgdHVuaW5nKSB7XG4gIHJldHVybiBNYXRoLnBvdygyLCAobWlkaSAtIDY5KSAvIDEyKSAqICh0dW5pbmcgfHwgNDQwKVxufVxuXG52YXIgUkVHRVggPSAvXihbYS1nQS1HXSkoI3sxLH18YnsxLH18eHsxLH18KSgtP1xcZCopXFxzKiguKilcXHMqJC9cbi8qKlxuICogQSByZWdleCBmb3IgbWF0Y2hpbmcgbm90ZSBzdHJpbmdzIGluIHNjaWVudGlmaWMgbm90YXRpb24uXG4gKlxuICogQG5hbWUgcmVnZXhcbiAqIEBmdW5jdGlvblxuICogQHJldHVybiB7UmVnRXhwfSB0aGUgcmVnZXhwIHVzZWQgdG8gcGFyc2UgdGhlIG5vdGUgbmFtZVxuICpcbiAqIFRoZSBub3RlIHN0cmluZyBzaG91bGQgaGF2ZSB0aGUgZm9ybSBgbGV0dGVyW2FjY2lkZW50YWxzXVtvY3RhdmVdW2VsZW1lbnRdYFxuICogd2hlcmU6XG4gKlxuICogLSBsZXR0ZXI6IChSZXF1aXJlZCkgaXMgYSBsZXR0ZXIgZnJvbSBBIHRvIEcgZWl0aGVyIHVwcGVyIG9yIGxvd2VyIGNhc2VcbiAqIC0gYWNjaWRlbnRhbHM6IChPcHRpb25hbCkgY2FuIGJlIG9uZSBvciBtb3JlIGBiYCAoZmxhdHMpLCBgI2AgKHNoYXJwcykgb3IgYHhgIChkb3VibGUgc2hhcnBzKS5cbiAqIFRoZXkgY2FuIE5PVCBiZSBtaXhlZC5cbiAqIC0gb2N0YXZlOiAoT3B0aW9uYWwpIGEgcG9zaXRpdmUgb3IgbmVnYXRpdmUgaW50ZWdlclxuICogLSBlbGVtZW50OiAoT3B0aW9uYWwpIGFkZGl0aW9uYWxseSBhbnl0aGluZyBhZnRlciB0aGUgZHVyYXRpb24gaXMgY29uc2lkZXJlZCB0b1xuICogYmUgdGhlIGVsZW1lbnQgbmFtZSAoZm9yIGV4YW1wbGU6ICdDMiBkb3JpYW4nKVxuICpcbiAqIFRoZSBleGVjdXRlZCByZWdleCBjb250YWlucyAoYnkgYXJyYXkgaW5kZXgpOlxuICpcbiAqIC0gMDogdGhlIGNvbXBsZXRlIHN0cmluZ1xuICogLSAxOiB0aGUgbm90ZSBsZXR0ZXJcbiAqIC0gMjogdGhlIG9wdGlvbmFsIGFjY2lkZW50YWxzXG4gKiAtIDM6IHRoZSBvcHRpb25hbCBvY3RhdmVcbiAqIC0gNDogdGhlIHJlc3Qgb2YgdGhlIHN0cmluZyAodHJpbW1lZClcbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIHBhcnNlciA9IHJlcXVpcmUoJ25vdGUtcGFyc2VyJylcbiAqIHBhcnNlci5yZWdleC5leGVjKCdjIzQnKVxuICogLy8gPT4gWydjIzQnLCAnYycsICcjJywgJzQnLCAnJ11cbiAqIHBhcnNlci5yZWdleC5leGVjKCdjIzQgbWFqb3InKVxuICogLy8gPT4gWydjIzRtYWpvcicsICdjJywgJyMnLCAnNCcsICdtYWpvciddXG4gKiBwYXJzZXIucmVnZXgoKS5leGVjKCdDTWFqNycpXG4gKiAvLyA9PiBbJ0NNYWo3JywgJ0MnLCAnJywgJycsICdNYWo3J11cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2V4ICgpIHsgcmV0dXJuIFJFR0VYIH1cblxudmFyIFNFTUlUT05FUyA9IFswLCAyLCA0LCA1LCA3LCA5LCAxMV1cbi8qKlxuICogUGFyc2UgYSBub3RlIG5hbWUgaW4gc2NpZW50aWZpYyBub3RhdGlvbiBhbiByZXR1cm4gaXQncyBjb21wb25lbnRzLFxuICogYW5kIHNvbWUgbnVtZXJpYyBwcm9wZXJ0aWVzIGluY2x1ZGluZyBtaWRpIG51bWJlciBhbmQgZnJlcXVlbmN5LlxuICpcbiAqIEBuYW1lIHBhcnNlXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBub3RlIC0gdGhlIG5vdGUgc3RyaW5nIHRvIGJlIHBhcnNlZFxuICogQHBhcmFtIHtCb29sZWFufSBpc1RvbmljIC0gdHJ1ZSB0aGUgc3RyaW5ncyBpdCdzIHN1cHBvc2VkIHRvIGNvbnRhaW4gYSBub3RlIG51bWJlclxuICogYW5kIHNvbWUgY2F0ZWdvcnkgKGZvciBleGFtcGxlIGFuIHNjYWxlOiAnQyMgbWFqb3InKS4gSXQncyBmYWxzZSBieSBkZWZhdWx0LFxuICogYnV0IHdoZW4gdHJ1ZSwgZW4gZXh0cmEgdG9uaWNPZiBwcm9wZXJ0eSBpcyByZXR1cm5lZCB3aXRoIHRoZSBjYXRlZ29yeSAoJ21ham9yJylcbiAqIEBwYXJhbSB7RmxvYXR9IHR1bm5pbmcgLSBUaGUgZnJlcXVlbmN5IG9mIEE0IG5vdGUgdG8gY2FsY3VsYXRlIGZyZXF1ZW5jaWVzLlxuICogQnkgZGVmYXVsdCBpdCA0NDAuXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBwYXJzZWQgbm90ZSBuYW1lIG9yIG51bGwgaWYgbm90IGEgdmFsaWQgbm90ZVxuICpcbiAqIFRoZSBwYXJzZWQgbm90ZSBuYW1lIG9iamVjdCB3aWxsIEFMV0FZUyBjb250YWluczpcbiAqIC0gbGV0dGVyOiB0aGUgdXBwZXJjYXNlIGxldHRlciBvZiB0aGUgbm90ZVxuICogLSBhY2M6IHRoZSBhY2NpZGVudGFscyBvZiB0aGUgbm90ZSAob25seSBzaGFycHMgb3IgZmxhdHMpXG4gKiAtIHBjOiB0aGUgcGl0Y2ggY2xhc3MgKGxldHRlciArIGFjYylcbiAqIC0gc3RlcDogcyBhIG51bWVyaWMgcmVwcmVzZW50YXRpb24gb2YgdGhlIGxldHRlci4gSXQncyBhbiBpbnRlZ2VyIGZyb20gMCB0byA2XG4gKiB3aGVyZSAwID0gQywgMSA9IEQgLi4uIDYgPSBCXG4gKiAtIGFsdDogYSBudW1lcmljIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBhY2NpZGVudGFscy4gMCBtZWFucyBubyBhbHRlcmF0aW9uLFxuICogcG9zaXRpdmUgbnVtYmVycyBhcmUgZm9yIHNoYXJwcyBhbmQgbmVnYXRpdmUgZm9yIGZsYXRzXG4gKiAtIGNocm9tYTogYSBudW1lcmljIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBwaXRjaCBjbGFzcy4gSXQncyBsaWtlIG1pZGkgZm9yXG4gKiBwaXRjaCBjbGFzc2VzLiAwID0gQywgMSA9IEMjLCAyID0gRCAuLi4gMTEgPSBCLiBDYW4gYmUgdXNlZCB0byBmaW5kIGVuaGFybW9uaWNzXG4gKiBzaW5jZSwgZm9yIGV4YW1wbGUsIGNocm9tYSBvZiAnQ2InIGFuZCAnQicgYXJlIGJvdGggMTFcbiAqXG4gKiBJZiB0aGUgbm90ZSBoYXMgb2N0YXZlLCB0aGUgcGFyc2VyIG9iamVjdCB3aWxsIGNvbnRhaW46XG4gKiAtIG9jdDogdGhlIG9jdGF2ZSBudW1iZXIgKGFzIGludGVnZXIpXG4gKiAtIG1pZGk6IHRoZSBtaWRpIG51bWJlclxuICogLSBmcmVxOiB0aGUgZnJlcXVlbmN5ICh1c2luZyB0dW5pbmcgcGFyYW1ldGVyIGFzIGJhc2UpXG4gKlxuICogSWYgdGhlIHBhcmFtZXRlciBgaXNUb25pY2AgaXMgc2V0IHRvIHRydWUsIHRoZSBwYXJzZWQgb2JqZWN0IHdpbGwgY29udGFpbjpcbiAqIC0gdG9uaWNPZjogdGhlIHJlc3Qgb2YgdGhlIHN0cmluZyB0aGF0IGZvbGxvd3Mgbm90ZSBuYW1lIChsZWZ0IGFuZCByaWdodCB0cmltbWVkKVxuICpcbiAqIEBleGFtcGxlXG4gKiB2YXIgcGFyc2UgPSByZXF1aXJlKCdub3RlLXBhcnNlcicpLnBhcnNlXG4gKiBwYXJzZSgnQ2I0JylcbiAqIC8vID0+IHsgbGV0dGVyOiAnQycsIGFjYzogJ2InLCBwYzogJ0NiJywgc3RlcDogMCwgYWx0OiAtMSwgY2hyb21hOiAtMSxcbiAqICAgICAgICAgb2N0OiA0LCBtaWRpOiA1OSwgZnJlcTogMjQ2Ljk0MTY1MDYyODA2MjA2IH1cbiAqIC8vIGlmIG5vIG9jdGF2ZSwgbm8gbWlkaSwgbm8gZnJlcVxuICogcGFyc2UoJ2Z4JylcbiAqIC8vID0+IHsgbGV0dGVyOiAnRicsIGFjYzogJyMjJywgcGM6ICdGIyMnLCBzdGVwOiAzLCBhbHQ6IDIsIGNocm9tYTogNyB9KVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2UgKHN0ciwgaXNUb25pYywgdHVuaW5nKSB7XG4gIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykgcmV0dXJuIG51bGxcbiAgdmFyIG0gPSBSRUdFWC5leGVjKHN0cilcbiAgaWYgKCFtIHx8ICghaXNUb25pYyAmJiBtWzRdKSkgcmV0dXJuIG51bGxcblxuICB2YXIgcCA9IHsgbGV0dGVyOiBtWzFdLnRvVXBwZXJDYXNlKCksIGFjYzogbVsyXS5yZXBsYWNlKC94L2csICcjIycpIH1cbiAgcC5wYyA9IHAubGV0dGVyICsgcC5hY2NcbiAgcC5zdGVwID0gKHAubGV0dGVyLmNoYXJDb2RlQXQoMCkgKyAzKSAlIDdcbiAgcC5hbHQgPSBwLmFjY1swXSA9PT0gJ2InID8gLXAuYWNjLmxlbmd0aCA6IHAuYWNjLmxlbmd0aFxuICB2YXIgcG9zID0gU0VNSVRPTkVTW3Auc3RlcF0gKyBwLmFsdFxuICBwLmNocm9tYSA9IHBvcyA8IDAgPyAxMiArIHBvcyA6IHBvcyAlIDEyXG4gIGlmIChtWzNdKSB7IC8vIGhhcyBvY3RhdmVcbiAgICBwLm9jdCA9ICttWzNdXG4gICAgcC5taWRpID0gcG9zICsgMTIgKiAocC5vY3QgKyAxKVxuICAgIHAuZnJlcSA9IG1pZGlUb0ZyZXEocC5taWRpLCB0dW5pbmcpXG4gIH1cbiAgaWYgKGlzVG9uaWMpIHAudG9uaWNPZiA9IG1bNF1cbiAgcmV0dXJuIHBcbn1cblxudmFyIExFVFRFUlMgPSAnQ0RFRkdBQidcbmZ1bmN0aW9uIGFjY1N0ciAobikgeyByZXR1cm4gIWlzTnVtKG4pID8gJycgOiBuIDwgMCA/IGZpbGxTdHIoJ2InLCAtbikgOiBmaWxsU3RyKCcjJywgbikgfVxuZnVuY3Rpb24gb2N0U3RyIChuKSB7IHJldHVybiAhaXNOdW0obikgPyAnJyA6ICcnICsgbiB9XG5cbi8qKlxuICogQ3JlYXRlIGEgc3RyaW5nIGZyb20gYSBwYXJzZWQgb2JqZWN0IG9yIGBzdGVwLCBhbHRlcmF0aW9uLCBvY3RhdmVgIHBhcmFtZXRlcnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSB0aGUgcGFyc2VkIGRhdGEgb2JqZWN0XG4gKiBAcmV0dXJuIHtTdHJpbmd9IGEgbm90ZSBzdHJpbmcgb3IgbnVsbCBpZiBub3QgdmFsaWQgcGFyYW1ldGVyc1xuICogQHNpbmNlIDEuMlxuICogQGV4YW1wbGVcbiAqIHBhcnNlci5idWlsZChwYXJzZXIucGFyc2UoJ2NiMicpKSAvLyA9PiAnQ2IyJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBpdCBhY2NlcHRzIChzdGVwLCBhbHRlcmF0aW9uLCBvY3RhdmUpIHBhcmFtZXRlcnM6XG4gKiBwYXJzZXIuYnVpbGQoMykgLy8gPT4gJ0YnXG4gKiBwYXJzZXIuYnVpbGQoMywgLTEpIC8vID0+ICdGYidcbiAqIHBhcnNlci5idWlsZCgzLCAtMSwgNCkgLy8gPT4gJ0ZiNCdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkIChzLCBhLCBvKSB7XG4gIGlmIChzID09PSBudWxsIHx8IHR5cGVvZiBzID09PSAndW5kZWZpbmVkJykgcmV0dXJuIG51bGxcbiAgaWYgKHMuc3RlcCkgcmV0dXJuIGJ1aWxkKHMuc3RlcCwgcy5hbHQsIHMub2N0KVxuICBpZiAocyA8IDAgfHwgcyA+IDYpIHJldHVybiBudWxsXG4gIHJldHVybiBMRVRURVJTLmNoYXJBdChzKSArIGFjY1N0cihhKSArIG9jdFN0cihvKVxufVxuXG4vKipcbiAqIEdldCBtaWRpIG9mIGEgbm90ZVxuICpcbiAqIEBuYW1lIG1pZGlcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtTdHJpbmd8SW50ZWdlcn0gbm90ZSAtIHRoZSBub3RlIG5hbWUgb3IgbWlkaSBudW1iZXJcbiAqIEByZXR1cm4ge0ludGVnZXJ9IHRoZSBtaWRpIG51bWJlciBvZiB0aGUgbm90ZSBvciBudWxsIGlmIG5vdCBhIHZhbGlkIG5vdGVcbiAqIG9yIHRoZSBub3RlIGRvZXMgTk9UIGNvbnRhaW5zIG9jdGF2ZVxuICogQGV4YW1wbGVcbiAqIHZhciBwYXJzZXIgPSByZXF1aXJlKCdub3RlLXBhcnNlcicpXG4gKiBwYXJzZXIubWlkaSgnQTQnKSAvLyA9PiA2OVxuICogcGFyc2VyLm1pZGkoJ0EnKSAvLyA9PiBudWxsXG4gKiBAZXhhbXBsZVxuICogLy8gbWlkaSBudW1iZXJzIGFyZSBieXBhc3NlZCAoZXZlbiBhcyBzdHJpbmdzKVxuICogcGFyc2VyLm1pZGkoNjApIC8vID0+IDYwXG4gKiBwYXJzZXIubWlkaSgnNjAnKSAvLyA9PiA2MFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWlkaSAobm90ZSkge1xuICBpZiAoKGlzTnVtKG5vdGUpIHx8IGlzU3RyKG5vdGUpKSAmJiBub3RlID49IDAgJiYgbm90ZSA8IDEyOCkgcmV0dXJuICtub3RlXG4gIHZhciBwID0gcGFyc2Uobm90ZSlcbiAgcmV0dXJuIHAgJiYgaXNEZWYocC5taWRpKSA/IHAubWlkaSA6IG51bGxcbn1cblxuLyoqXG4gKiBHZXQgZnJlcSBvZiBhIG5vdGUgaW4gaGVydHpzIChpbiBhIHdlbGwgdGVtcGVyZWQgNDQwSHogQTQpXG4gKlxuICogQG5hbWUgZnJlcVxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbm90ZSAtIHRoZSBub3RlIG5hbWUgb3Igbm90ZSBtaWRpIG51bWJlclxuICogQHBhcmFtIHtTdHJpbmd9IHR1bmluZyAtIChPcHRpb25hbCkgdGhlIEE0IGZyZXF1ZW5jeSAoNDQwIGJ5IGRlZmF1bHQpXG4gKiBAcmV0dXJuIHtGbG9hdH0gdGhlIGZyZXEgb2YgdGhlIG51bWJlciBpZiBoZXJ0enMgb3IgbnVsbCBpZiBub3QgdmFsaWQgbm90ZVxuICogQGV4YW1wbGVcbiAqIHZhciBwYXJzZXIgPSByZXF1aXJlKCdub3RlLXBhcnNlcicpXG4gKiBwYXJzZXIuZnJlcSgnQTQnKSAvLyA9PiA0NDBcbiAqIHBhcnNlci5mcmVxKCdBJykgLy8gPT4gbnVsbFxuICogQGV4YW1wbGVcbiAqIC8vIGNhbiBjaGFuZ2UgdHVuaW5nICg0NDAgYnkgZGVmYXVsdClcbiAqIHBhcnNlci5mcmVxKCdBNCcsIDQ0NCkgLy8gPT4gNDQ0XG4gKiBwYXJzZXIuZnJlcSgnQTMnLCA0NDQpIC8vID0+IDIyMlxuICogQGV4YW1wbGVcbiAqIC8vIGl0IGFjY2VwdHMgbWlkaSBudW1iZXJzIChhcyBudW1iZXJzIGFuZCBhcyBzdHJpbmdzKVxuICogcGFyc2VyLmZyZXEoNjkpIC8vID0+IDQ0MFxuICogcGFyc2VyLmZyZXEoJzY5JywgNDQyKSAvLyA9PiA0NDJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyZXEgKG5vdGUsIHR1bmluZykge1xuICB2YXIgbSA9IG1pZGkobm90ZSlcbiAgcmV0dXJuIG0gPT09IG51bGwgPyBudWxsIDogbWlkaVRvRnJlcShtLCB0dW5pbmcpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZXR0ZXIgKHNyYykgeyByZXR1cm4gKHBhcnNlKHNyYykgfHwge30pLmxldHRlciB9XG5leHBvcnQgZnVuY3Rpb24gYWNjIChzcmMpIHsgcmV0dXJuIChwYXJzZShzcmMpIHx8IHt9KS5hY2MgfVxuZXhwb3J0IGZ1bmN0aW9uIHBjIChzcmMpIHsgcmV0dXJuIChwYXJzZShzcmMpIHx8IHt9KS5wYyB9XG5leHBvcnQgZnVuY3Rpb24gc3RlcCAoc3JjKSB7IHJldHVybiAocGFyc2Uoc3JjKSB8fCB7fSkuc3RlcCB9XG5leHBvcnQgZnVuY3Rpb24gYWx0IChzcmMpIHsgcmV0dXJuIChwYXJzZShzcmMpIHx8IHt9KS5hbHQgfVxuZXhwb3J0IGZ1bmN0aW9uIGNocm9tYSAoc3JjKSB7IHJldHVybiAocGFyc2Uoc3JjKSB8fCB7fSkuY2hyb21hIH1cbmV4cG9ydCBmdW5jdGlvbiBvY3QgKHNyYykgeyByZXR1cm4gKHBhcnNlKHNyYykgfHwge30pLm9jdCB9XG4iLCAiLyoqXG4gKiBBIG1pZGkgbm90ZSBudW1iZXIgaXMgYSBudW1iZXIgcmVwcmVzZW50YXRpb24gb2YgYSBub3RlIHBpdGNoLiBJdCBjYW4gYmVcbiAqIGludGVnZXJzIHNvIGl0J3MgZXF1YWwgdGVtcGVyZWQgdHVuZWQsIG9yIGZsb2F0IHRvIGluZGljYXRlIGl0J3Mgbm90XG4gKiB0dW5lZCBpbnRvIGVxdWFsIHRlbWVwZXJlZCBzY2FsZS5cbiAqXG4gKiBUaGlzIG1vZHVsZSBjb250YWlucyBmdW5jdGlvbnMgdG8gY29udmVydCB0byBhbmQgZnJvbSBtaWRpIG5vdGVzLlxuICpcbiAqIEBleGFtcGxlXG4gKiB2YXIgbWlkaSA9IHJlcXVpcmUoJ3RvbmFsLW1pZGknKVxuICogbWlkaS50b01pZGkoJ0E0JykgLy8gPT4gNjlcbiAqIG1pZGkubm90ZSg2OSkgLy8gPT4gJ0E0J1xuICogbWlkaS5ub3RlKDYxKSAvLyA9PiAnRGI0J1xuICogbWlkaS5ub3RlKDYxLCB0cnVlKSAvLyA9PiAnQyM0J1xuICpcbiAqIEBtb2R1bGUgbWlkaVxuICovXG5cbmltcG9ydCB7IG1pZGkgfSBmcm9tICdub3RlLXBhcnNlcidcblxuLyoqXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBub3RlIHRvIGEgbWlkaSBub3RlIG51bWJlci4gSWYgeW91IHBhc3MgYSBtaWRpIG51bWJlciBpdFxuICogd2lsbCByZXR1cm5lZCBhcyBpcy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fFN0cmluZ3xOdW1iZXJ9IG5vdGUgLSB0aGUgbm90ZSB0byBnZXQgdGhlIG1pZGkgbnVtYmVyIGZyb21cbiAqIEByZXR1cm4ge0ludGVnZXJ9IHRoZSBtaWRpIG51bWJlciBvciBudWxsIGlmIG5vdCB2YWxpZCBwaXRjaFxuICogQGV4YW1wbGVcbiAqIG1pZGkudG9NaWRpKCdDNCcpIC8vID0+IDYwXG4gKiBtaWRpLnRvTWlkaSg2MCkgLy8gPT4gNjBcbiAqIG1pZGkudG9NaWRpKCc2MCcpIC8vID0+IDYwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b01pZGkgKHZhbCkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpICYmIHZhbC5sZW5ndGggPT09IDIpIHJldHVybiB2YWxbMF0gKiA3ICsgdmFsWzFdICogMTIgKyAxMlxuICByZXR1cm4gbWlkaSh2YWwpXG59XG5cbnZhciBGTEFUUyA9ICdDIERiIEQgRWIgRSBGIEdiIEcgQWIgQSBCYiBCJy5zcGxpdCgnICcpXG52YXIgU0hBUlBTID0gJ0MgQyMgRCBEIyBFIEYgRiMgRyBHIyBBIEEjIEInLnNwbGl0KCcgJylcblxuLyoqXG4gKiBHaXZlbiBhIG1pZGkgbnVtYmVyLCByZXR1cm5zIGEgbm90ZSBuYW1lLiBUaGUgYWx0ZXJlZCBub3RlcyB3aWxsIGhhdmVcbiAqIGZsYXRzIHVubGVzcyBleHBsaWNpdGx5IHNldCB3aXRoIHRoZSBvcHRpb25hbCBgdXNlU2hhcnBzYCBwYXJhbWV0ZXIuXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0ludGVnZXJ9IG1pZGkgLSB0aGUgbWlkaSBub3RlIG51bWJlclxuICogQHBhcmFtIHtCb29sZWFufSB1c2VTaGFycHMgLSAoT3B0aW9uYWwpIHNldCB0byB0cnVlIHRvIHVzZSBzaGFycHMgaW5zdGVhZCBvZiBmbGF0c1xuICogQHJldHVybiB7U3RyaW5nfSB0aGUgbm90ZSBuYW1lXG4gKiBAZXhhbXBsZVxuICogdmFyIG1pZGkgPSByZXF1aXJlKCd0b25hbC1taWRpJylcbiAqIG1pZGkubm90ZSg2MSkgLy8gPT4gJ0RiNCdcbiAqIG1pZGkubm90ZSg2MSwgdHJ1ZSkgLy8gPT4gJ0MjNCdcbiAqIC8vIGl0IHJvdW5kcyB0byBuZWFyZXN0IG5vdGVcbiAqIG1pZGkubm90ZSg2MS43KSAvLyA9PiAnRDQnXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3RlIChudW0sIHNoYXJwcykge1xuICBpZiAobnVtID09PSB0cnVlIHx8IG51bSA9PT0gZmFsc2UpIHJldHVybiBmdW5jdGlvbiAobSkgeyByZXR1cm4gbm90ZShtLCBudW0pIH1cbiAgbnVtID0gTWF0aC5yb3VuZChudW0pXG4gIHZhciBwY3MgPSBzaGFycHMgPT09IHRydWUgPyBTSEFSUFMgOiBGTEFUU1xuICB2YXIgcGMgPSBwY3NbbnVtICUgMTJdXG4gIHZhciBvID0gTWF0aC5mbG9vcihudW0gLyAxMikgLSAxXG4gIHJldHVybiBwYyArIG9cbn1cbiIsICJ7XG4gIFwibmFtZVwiOiBcIm1pZGktd3JpdGVyLWpzXCIsXG4gIFwidmVyc2lvblwiOiBcIjIuMC4xXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJBIGxpYnJhcnkgcHJvdmlkaW5nIGFuIEFQSSBmb3IgZ2VuZXJhdGluZyBNSURJIGZpbGVzLlwiLFxuICBcIm1haW5cIjogXCJidWlsZC9pbmRleC5qc1wiLFxuICBcInR5cGVzXCI6IFwidHlwZXMuZC50c1wiLFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJ0b25hbC1taWRpXCI6IFwiXjAuNjkuN1wiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBiYWJlbC9jb3JlXCI6IFwiXjcuOS42XCIsXG4gICAgXCJAYmFiZWwvcGx1Z2luLXRyYW5zZm9ybS1kZXN0cnVjdHVyaW5nXCI6IFwiXjcuOS41XCIsXG4gICAgXCJAYmFiZWwvcHJlc2V0LWVudlwiOiBcIl43LjkuNlwiLFxuICAgIFwiQHJvbGx1cC9wbHVnaW4tYmFiZWxcIjogXCJeNS4wLjBcIixcbiAgICBcImVzbGludFwiOiBcIl43LjAuMFwiLFxuICAgIFwiZXNsaW50LWNvbmZpZy1zdGFuZGFyZFwiOiBcIl4xMi4wLjBcIixcbiAgICBcImVzbGludC1wbHVnaW4taW1wb3J0XCI6IFwiXjIuMjAuMlwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1ub2RlXCI6IFwiXjkuMi4wXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXByb21pc2VcIjogXCJeNC4xLjFcIixcbiAgICBcImVzbGludC1wbHVnaW4tc3RhbmRhcmRcIjogXCJeNC4wLjFcIixcbiAgICBcImpzZG9jXCI6IFwiXjMuNi40XCIsXG4gICAgXCJtaW5hbWlcIjogXCJeMS4yLjNcIixcbiAgICBcIm1vY2hhXCI6IFwiXjkuMC4xXCIsXG4gICAgXCJueWNcIjogXCJeMTUuMC4xXCIsXG4gICAgXCJyb2xsdXBcIjogXCJeMi45LjBcIixcbiAgICBcIndhdGNoXCI6IFwiXjEuMC4yXCJcbiAgfSxcbiAgXCJkaXJlY3Rvcmllc1wiOiB7XG4gICAgXCJsaWJcIjogXCJzcmNcIixcbiAgICBcImV4YW1wbGVcIjogXCJleGFtcGxlc1wiLFxuICAgIFwidGVzdFwiOiBcInRlc3RcIlxuICB9LFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwiYnVpbGRcIjogXCJta2RpciAtcCBidWlsZCAmJiByb2xsdXAgLWMgJiYgbnBtIHJ1biBkb2NzXCIsXG4gICAgXCJkb2NzXCI6IFwiLi9ub2RlX21vZHVsZXMvLmJpbi9qc2RvYyAtciBzcmMgUkVBRE1FLm1kIC1kIC4vZG9jcyAtdCAuL25vZGVfbW9kdWxlcy9taW5hbWlcIixcbiAgICBcImxpbnQ6anNcIjogXCJlc2xpbnQgJ3NyYy8qKi8qKi5qcydcIixcbiAgICBcInByZXB1Ymxpc2hPbmx5XCI6IFwibnBtIHRlc3RcIixcbiAgICBcInByZXRlc3RcIjogXCJucG0gcnVuIGJ1aWxkXCIsXG4gICAgXCJ0ZXN0XCI6IFwibnljIC0tcmVwb3J0ZXI9dGV4dCBtb2NoYSAtLW5vLWNvbmZpZyAtLW5vLXBhY2thZ2VcIixcbiAgICBcIndhdGNoXCI6IFwid2F0Y2ggJ25wbSBydW4gYnVpbGQnIHNyY1wiLFxuICAgIFwicG9zdGluc3RhbGxcIjogXCJub2RlIHBvc3RpbnN0YWxsLmpzXCJcbiAgfSxcbiAgXCJydW5raXRFeGFtcGxlRmlsZW5hbWVcIjogXCJydW5raXQuanNcIixcbiAgXCJyZXBvc2l0b3J5XCI6IHtcbiAgICBcInR5cGVcIjogXCJnaXRcIixcbiAgICBcInVybFwiOiBcImdpdCtodHRwczovL2dpdGh1Yi5jb20vZ3JpbW1kdWRlL01pZGlXcml0ZXJKUy5naXRcIlxuICB9LFxuICBcImtleXdvcmRzXCI6IFtcbiAgICBcIm1pZGlcIixcbiAgICBcImdlbmVyYXRvclwiLFxuICAgIFwibXVzaWNcIlxuICBdLFxuICBcImF1dGhvclwiOiBcIkdhcnJldHQgR3JpbW1cIixcbiAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gIFwiYnVnc1wiOiB7XG4gICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZ3JpbW1kdWRlL01pZGlXcml0ZXJKUy9pc3N1ZXNcIlxuICB9LFxuICBcImhvbWVwYWdlXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2dyaW1tZHVkZS9NaWRpV3JpdGVySlMjcmVhZG1lXCJcbn1cbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciB0b25hbE1pZGkgPSByZXF1aXJlKCd0b25hbC1taWRpJyk7XG5cbi8qKlxuICogTUlESSBmaWxlIGZvcm1hdCBjb25zdGFudHMuXG4gKiBAcmV0dXJuIHtDb25zdGFudHN9XG4gKi9cbnZhciBDb25zdGFudHMgPSB7XG4gIFZFUlNJT046IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpLnZlcnNpb24sXG4gIEhFQURFUl9DSFVOS19UWVBFOiBbMHg0ZCwgMHg1NCwgMHg2OCwgMHg2NF0sXG4gIC8vIE10aGRcbiAgSEVBREVSX0NIVU5LX0xFTkdUSDogWzB4MDAsIDB4MDAsIDB4MDAsIDB4MDZdLFxuICAvLyBIZWFkZXIgc2l6ZSBmb3IgU01GXG4gIEhFQURFUl9DSFVOS19GT1JNQVQwOiBbMHgwMCwgMHgwMF0sXG4gIC8vIE1pZGkgVHlwZSAwIGlkXG4gIEhFQURFUl9DSFVOS19GT1JNQVQxOiBbMHgwMCwgMHgwMV0sXG4gIC8vIE1pZGkgVHlwZSAxIGlkXG4gIEhFQURFUl9DSFVOS19ESVZJU0lPTjogWzB4MDAsIDB4ODBdLFxuICAvLyBEZWZhdWx0cyB0byAxMjggdGlja3MgcGVyIGJlYXRcbiAgVFJBQ0tfQ0hVTktfVFlQRTogWzB4NGQsIDB4NTQsIDB4NzIsIDB4NmJdLFxuICAvLyBNVHJrLFxuICBNRVRBX0VWRU5UX0lEOiAweEZGLFxuICBNRVRBX1RFWFRfSUQ6IDB4MDEsXG4gIE1FVEFfQ09QWVJJR0hUX0lEOiAweDAyLFxuICBNRVRBX1RSQUNLX05BTUVfSUQ6IDB4MDMsXG4gIE1FVEFfSU5TVFJVTUVOVF9OQU1FX0lEOiAweDA0LFxuICBNRVRBX0xZUklDX0lEOiAweDA1LFxuICBNRVRBX01BUktFUl9JRDogMHgwNixcbiAgTUVUQV9DVUVfUE9JTlQ6IDB4MDcsXG4gIE1FVEFfVEVNUE9fSUQ6IDB4NTEsXG4gIE1FVEFfU01UUEVfT0ZGU0VUOiAweDU0LFxuICBNRVRBX1RJTUVfU0lHTkFUVVJFX0lEOiAweDU4LFxuICBNRVRBX0tFWV9TSUdOQVRVUkVfSUQ6IDB4NTksXG4gIE1FVEFfRU5EX09GX1RSQUNLX0lEOiBbMHgyRiwgMHgwMF0sXG4gIENPTlRST0xMRVJfQ0hBTkdFX1NUQVRVUzogMHhCMCxcbiAgLy8gaW5jbHVkZXMgY2hhbm5lbCBudW1iZXIgKDApXG4gIFBST0dSQU1fQ0hBTkdFX1NUQVRVUzogMHhDMCxcbiAgLy8gaW5jbHVkZXMgY2hhbm5lbCBudW1iZXIgKDApXG4gIFBJVENIX0JFTkRfU1RBVFVTOiAweEUwIC8vIGluY2x1ZGVzIGNoYW5uZWwgbnVtYmVyICgwKVxuXG59O1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5mdW5jdGlvbiBfd3JhcFJlZ0V4cCgpIHtcbiAgX3dyYXBSZWdFeHAgPSBmdW5jdGlvbiAocmUsIGdyb3Vwcykge1xuICAgIHJldHVybiBuZXcgQmFiZWxSZWdFeHAocmUsIHVuZGVmaW5lZCwgZ3JvdXBzKTtcbiAgfTtcblxuICB2YXIgX3N1cGVyID0gUmVnRXhwLnByb3RvdHlwZTtcblxuICB2YXIgX2dyb3VwcyA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgZnVuY3Rpb24gQmFiZWxSZWdFeHAocmUsIGZsYWdzLCBncm91cHMpIHtcbiAgICB2YXIgX3RoaXMgPSBuZXcgUmVnRXhwKHJlLCBmbGFncyk7XG5cbiAgICBfZ3JvdXBzLnNldChfdGhpcywgZ3JvdXBzIHx8IF9ncm91cHMuZ2V0KHJlKSk7XG5cbiAgICByZXR1cm4gX3NldFByb3RvdHlwZU9mKF90aGlzLCBCYWJlbFJlZ0V4cC5wcm90b3R5cGUpO1xuICB9XG5cbiAgX2luaGVyaXRzKEJhYmVsUmVnRXhwLCBSZWdFeHApO1xuXG4gIEJhYmVsUmVnRXhwLnByb3RvdHlwZS5leGVjID0gZnVuY3Rpb24gKHN0cikge1xuICAgIHZhciByZXN1bHQgPSBfc3VwZXIuZXhlYy5jYWxsKHRoaXMsIHN0cik7XG5cbiAgICBpZiAocmVzdWx0KSByZXN1bHQuZ3JvdXBzID0gYnVpbGRHcm91cHMocmVzdWx0LCB0aGlzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIEJhYmVsUmVnRXhwLnByb3RvdHlwZVtTeW1ib2wucmVwbGFjZV0gPSBmdW5jdGlvbiAoc3RyLCBzdWJzdGl0dXRpb24pIHtcbiAgICBpZiAodHlwZW9mIHN1YnN0aXR1dGlvbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgdmFyIGdyb3VwcyA9IF9ncm91cHMuZ2V0KHRoaXMpO1xuXG4gICAgICByZXR1cm4gX3N1cGVyW1N5bWJvbC5yZXBsYWNlXS5jYWxsKHRoaXMsIHN0ciwgc3Vic3RpdHV0aW9uLnJlcGxhY2UoL1xcJDwoW14+XSspPi9nLCBmdW5jdGlvbiAoXywgbmFtZSkge1xuICAgICAgICByZXR1cm4gXCIkXCIgKyBncm91cHNbbmFtZV07XG4gICAgICB9KSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc3Vic3RpdHV0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBfc3VwZXJbU3ltYm9sLnJlcGxhY2VdLmNhbGwodGhpcywgc3RyLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuXG4gICAgICAgIGlmICh0eXBlb2YgYXJnc1thcmdzLmxlbmd0aCAtIDFdICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJncyk7XG4gICAgICAgICAgYXJncy5wdXNoKGJ1aWxkR3JvdXBzKGFyZ3MsIF90aGlzKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3Vic3RpdHV0aW9uLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBfc3VwZXJbU3ltYm9sLnJlcGxhY2VdLmNhbGwodGhpcywgc3RyLCBzdWJzdGl0dXRpb24pO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBidWlsZEdyb3VwcyhyZXN1bHQsIHJlKSB7XG4gICAgdmFyIGcgPSBfZ3JvdXBzLmdldChyZSk7XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZykucmVkdWNlKGZ1bmN0aW9uIChncm91cHMsIG5hbWUpIHtcbiAgICAgIGdyb3Vwc1tuYW1lXSA9IHJlc3VsdFtnW25hbWVdXTtcbiAgICAgIHJldHVybiBncm91cHM7XG4gICAgfSwgT2JqZWN0LmNyZWF0ZShudWxsKSk7XG4gIH1cblxuICByZXR1cm4gX3dyYXBSZWdFeHAuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxuLyoqXG4gKiBTdGF0aWMgdXRpbGl0eSBmdW5jdGlvbnMgdXNlZCB0aHJvdWdob3V0IHRoZSBsaWJyYXJ5LlxuICovXG5cbnZhciBVdGlscyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFV0aWxzKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBVdGlscyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVXRpbHMsIG51bGwsIFt7XG4gICAga2V5OiBcInZlcnNpb25cIixcbiAgICB2YWx1ZTpcbiAgICAvKipcbiAgICAgKiBHZXRzIE1pZGlXcml0ZXJKUyB2ZXJzaW9uIG51bWJlci5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgZnVuY3Rpb24gdmVyc2lvbigpIHtcbiAgICAgIHJldHVybiBDb25zdGFudHMuVkVSU0lPTjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVydCBhIHN0cmluZyB0byBhbiBhcnJheSBvZiBieXRlc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdcbiAgICAgKiBAcmV0dXJuIHthcnJheX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInN0cmluZ1RvQnl0ZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RyaW5nVG9CeXRlcyhzdHJpbmcpIHtcbiAgICAgIHJldHVybiBzdHJpbmcuc3BsaXQoJycpLm1hcChmdW5jdGlvbiAoX2NoYXIpIHtcbiAgICAgICAgcmV0dXJuIF9jaGFyLmNoYXJDb2RlQXQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgYXJndW1lbnQgaXMgYSB2YWxpZCBudW1iZXIuXG4gICAgICogQHBhcmFtIHsqfSBuIC0gVmFsdWUgdG8gY2hlY2tcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaXNOdW1lcmljXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzTnVtZXJpYyhuKSB7XG4gICAgICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQobikpICYmIGlzRmluaXRlKG4pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjb3JyZWN0IE1JREkgbnVtYmVyIGZvciB0aGUgc3BlY2lmaWVkIHBpdGNoLlxuICAgICAqIFVzZXMgVG9uYWwgTWlkaSAtIGh0dHBzOi8vZ2l0aHViLmNvbS9kYW5pZ2IvdG9uYWwvdHJlZS9tYXN0ZXIvcGFja2FnZXMvbWlkaVxuICAgICAqIEBwYXJhbSB7KHN0cmluZ3xudW1iZXIpfSBwaXRjaCAtICdDIzQnIG9yIG1pZGkgbm90ZSBjb2RlXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0UGl0Y2hcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UGl0Y2gocGl0Y2gpIHtcbiAgICAgIHJldHVybiB0b25hbE1pZGkudG9NaWRpKHBpdGNoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVHJhbnNsYXRlcyBudW1iZXIgb2YgdGlja3MgdG8gTUlESSB0aW1lc3RhbXAgZm9ybWF0LCByZXR1cm5pbmcgYW4gYXJyYXkgb2ZcbiAgICAgKiBoZXggc3RyaW5ncyB3aXRoIHRoZSB0aW1lIHZhbHVlcy4gTWlkaSBoYXMgYSB2ZXJ5IHBhcnRpY3VsYXIgdGltZSB0byBleHByZXNzIHRpbWUsXG4gICAgICogdGFrZSBhIGdvb2QgbG9vayBhdCB0aGUgc3BlYyBiZWZvcmUgZXZlciB0b3VjaGluZyB0aGlzIGZ1bmN0aW9uLlxuICAgICAqIFRoYW5rcyB0byBodHRwczovL2dpdGh1Yi5jb20vc2VyZ2kvanNtaWRpXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGlja3MgLSBOdW1iZXIgb2YgdGlja3MgdG8gYmUgdHJhbnNsYXRlZFxuICAgICAqIEByZXR1cm4ge2FycmF5fSAtIEJ5dGVzIHRoYXQgZm9ybSB0aGUgTUlESSB0aW1lIHZhbHVlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJudW1iZXJUb1ZhcmlhYmxlTGVuZ3RoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG51bWJlclRvVmFyaWFibGVMZW5ndGgodGlja3MpIHtcbiAgICAgIHRpY2tzID0gTWF0aC5yb3VuZCh0aWNrcyk7XG4gICAgICB2YXIgYnVmZmVyID0gdGlja3MgJiAweDdGO1xuXG4gICAgICB3aGlsZSAodGlja3MgPSB0aWNrcyA+PiA3KSB7XG4gICAgICAgIGJ1ZmZlciA8PD0gODtcbiAgICAgICAgYnVmZmVyIHw9IHRpY2tzICYgMHg3RiB8IDB4ODA7XG4gICAgICB9XG5cbiAgICAgIHZhciBiTGlzdCA9IFtdO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBiTGlzdC5wdXNoKGJ1ZmZlciAmIDB4ZmYpO1xuICAgICAgICBpZiAoYnVmZmVyICYgMHg4MCkgYnVmZmVyID4+PSA4O2Vsc2Uge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBiTGlzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ291bnRzIG51bWJlciBvZiBieXRlcyBpbiBzdHJpbmdcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc1xuICAgICAqIEByZXR1cm4ge2FycmF5fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3RyaW5nQnl0ZUNvdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0cmluZ0J5dGVDb3VudChzKSB7XG4gICAgICByZXR1cm4gZW5jb2RlVVJJKHMpLnNwbGl0KC8lLi58Li8pLmxlbmd0aCAtIDE7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBhbiBpbnQgZnJvbSBhbiBhcnJheSBvZiBieXRlcy5cbiAgICAgKiBAcGFyYW0ge2FycmF5fSBieXRlc1xuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm51bWJlckZyb21CeXRlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBudW1iZXJGcm9tQnl0ZXMoYnl0ZXMpIHtcbiAgICAgIHZhciBoZXggPSAnJztcbiAgICAgIHZhciBzdHJpbmdSZXN1bHQ7XG4gICAgICBieXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChfYnl0ZSkge1xuICAgICAgICBzdHJpbmdSZXN1bHQgPSBfYnl0ZS50b1N0cmluZygxNik7IC8vIGVuc3VyZSBzdHJpbmcgaXMgMiBjaGFyc1xuXG4gICAgICAgIGlmIChzdHJpbmdSZXN1bHQubGVuZ3RoID09IDEpIHN0cmluZ1Jlc3VsdCA9IFwiMFwiICsgc3RyaW5nUmVzdWx0O1xuICAgICAgICBoZXggKz0gc3RyaW5nUmVzdWx0O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcGFyc2VJbnQoaGV4LCAxNik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRha2VzIGEgbnVtYmVyIGFuZCBzcGxpdHMgaXQgdXAgaW50byBhbiBhcnJheSBvZiBieXRlcy4gIENhbiBiZSBwYWRkZWQgYnkgcGFzc2luZyBhIG51bWJlciB0byBieXRlc05lZWRlZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYnl0ZXNOZWVkZWRcbiAgICAgKiBAcmV0dXJuIHthcnJheX0gLSBBcnJheSBvZiBieXRlc1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibnVtYmVyVG9CeXRlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBudW1iZXJUb0J5dGVzKG51bWJlciwgYnl0ZXNOZWVkZWQpIHtcbiAgICAgIGJ5dGVzTmVlZGVkID0gYnl0ZXNOZWVkZWQgfHwgMTtcbiAgICAgIHZhciBoZXhTdHJpbmcgPSBudW1iZXIudG9TdHJpbmcoMTYpO1xuXG4gICAgICBpZiAoaGV4U3RyaW5nLmxlbmd0aCAmIDEpIHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIGhleCBzdHJpbmcgaXMgZXZlbiBudW1iZXIgb2YgY2hhcnNcbiAgICAgICAgaGV4U3RyaW5nID0gJzAnICsgaGV4U3RyaW5nO1xuICAgICAgfSAvLyBTcGxpdCBoZXggc3RyaW5nIGludG8gYW4gYXJyYXkgb2YgdHdvIGNoYXIgZWxlbWVudHNcblxuXG4gICAgICB2YXIgaGV4QXJyYXkgPSBoZXhTdHJpbmcubWF0Y2goLy57Mn0vZyk7IC8vIE5vdyBwYXJzZSB0aGVtIG91dCBhcyBpbnRlZ2Vyc1xuXG4gICAgICBoZXhBcnJheSA9IGhleEFycmF5Lm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoaXRlbSwgMTYpO1xuICAgICAgfSk7IC8vIFByZXBlbmQgZW1wdHkgYnl0ZXMgaWYgd2UgZG9uJ3QgaGF2ZSBlbm91Z2hcblxuICAgICAgaWYgKGhleEFycmF5Lmxlbmd0aCA8IGJ5dGVzTmVlZGVkKSB7XG4gICAgICAgIHdoaWxlIChieXRlc05lZWRlZCAtIGhleEFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBoZXhBcnJheS51bnNoaWZ0KDApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoZXhBcnJheTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgdmFsdWUgdG8gYXJyYXkgaWYgbmVlZGVkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgICAqIEByZXR1cm4ge2FycmF5fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidG9BcnJheVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b0FycmF5KHZhbHVlKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICAgIHJldHVybiBbdmFsdWVdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyB2ZWxvY2l0eSB0byB2YWx1ZSAwLTEyN1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2ZWxvY2l0eSAtIFZlbG9jaXR5IHZhbHVlIDEtMTAwXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY29udmVydFZlbG9jaXR5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbnZlcnRWZWxvY2l0eSh2ZWxvY2l0eSkge1xuICAgICAgLy8gTWF4IHBhc3NlZCB2YWx1ZSBsaW1pdGVkIHRvIDEwMFxuICAgICAgdmVsb2NpdHkgPSB2ZWxvY2l0eSA+IDEwMCA/IDEwMCA6IHZlbG9jaXR5O1xuICAgICAgcmV0dXJuIE1hdGgucm91bmQodmVsb2NpdHkgLyAxMDAgKiAxMjcpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSB0b3RhbCBudW1iZXIgb2YgdGlja3Mgb2YgYSBzcGVjaWZpZWQgZHVyYXRpb24uXG4gICAgICogTm90ZTogdHlwZT09J25vdGUnIGRlZmF1bHRzIHRvIHF1YXJ0ZXIgbm90ZSwgdHlwZT09PSdyZXN0JyBkZWZhdWx0cyB0byAwXG4gICAgICogQHBhcmFtIHsoc3RyaW5nfGFycmF5KX0gZHVyYXRpb25cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRUaWNrRHVyYXRpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VGlja0R1cmF0aW9uKGR1cmF0aW9uKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShkdXJhdGlvbikpIHtcbiAgICAgICAgLy8gUmVjdXJzaXZlbHkgZXhlY3V0ZSB0aGlzIG1ldGhvZCBmb3IgZWFjaCBpdGVtIGluIHRoZSBhcnJheSBhbmQgcmV0dXJuIHRoZSBzdW0gb2YgdGljayBkdXJhdGlvbnMuXG4gICAgICAgIHJldHVybiBkdXJhdGlvbi5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIFV0aWxzLmdldFRpY2tEdXJhdGlvbih2YWx1ZSk7XG4gICAgICAgIH0pLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgIHJldHVybiBhICsgYjtcbiAgICAgICAgfSwgMCk7XG4gICAgICB9XG5cbiAgICAgIGR1cmF0aW9uID0gZHVyYXRpb24udG9TdHJpbmcoKTtcblxuICAgICAgaWYgKGR1cmF0aW9uLnRvTG93ZXJDYXNlKCkuY2hhckF0KDApID09PSAndCcpIHtcbiAgICAgICAgLy8gSWYgZHVyYXRpb24gc3RhcnRzIHdpdGggJ3QnIHRoZW4gdGhlIG51bWJlciB0aGF0IGZvbGxvd3MgaXMgYW4gZXhwbGljaXQgdGljayBjb3VudFxuICAgICAgICByZXR1cm4gcGFyc2VJbnQoZHVyYXRpb24uc3Vic3RyaW5nKDEpKTtcbiAgICAgIH0gLy8gTmVlZCB0byBhcHBseSBkdXJhdGlvbiBoZXJlLiAgUXVhcnRlciBub3RlID09IENvbnN0YW50cy5IRUFERVJfQ0hVTktfRElWSVNJT05cblxuXG4gICAgICB2YXIgcXVhcnRlclRpY2tzID0gVXRpbHMubnVtYmVyRnJvbUJ5dGVzKENvbnN0YW50cy5IRUFERVJfQ0hVTktfRElWSVNJT04pO1xuICAgICAgdmFyIHRpY2tEdXJhdGlvbiA9IHF1YXJ0ZXJUaWNrcyAqIFV0aWxzLmdldER1cmF0aW9uTXVsdGlwbGllcihkdXJhdGlvbik7XG4gICAgICByZXR1cm4gVXRpbHMuZ2V0Um91bmRlZElmQ2xvc2UodGlja0R1cmF0aW9uKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRHVlIHRvIHJvdW5kaW5nIGVycm9ycyBpbiBKYXZhU2NyaXB0IGVuZ2luZXMsXG4gICAgICogaXQncyBzYWZlIHRvIHJvdW5kIHdoZW4gd2UncmUgdmVyeSBjbG9zZSB0byB0aGUgYWN0dWFsIHRpY2sgbnVtYmVyXG4gICAgICpcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpY2tcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRSb3VuZGVkSWZDbG9zZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSb3VuZGVkSWZDbG9zZSh0aWNrKSB7XG4gICAgICB2YXIgcm91bmRlZFRpY2sgPSBNYXRoLnJvdW5kKHRpY2spO1xuICAgICAgcmV0dXJuIE1hdGguYWJzKHJvdW5kZWRUaWNrIC0gdGljaykgPCAwLjAwMDAwMSA/IHJvdW5kZWRUaWNrIDogdGljaztcbiAgICB9XG4gICAgLyoqXG4gICAgICogRHVlIHRvIGxvdyBwcmVjaXNpb24gb2YgTUlESSxcbiAgICAgKiB3ZSBuZWVkIHRvIGtlZXAgdHJhY2sgb2Ygcm91bmRpbmcgZXJyb3JzIGluIGRlbHRhcy5cbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHdpbGwgY2FsY3VsYXRlIHRoZSByb3VuZGluZyBlcnJvciBmb3IgYSBnaXZlbiBkdXJhdGlvbi5cbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGlja1xuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFByZWNpc2lvbkxvc3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UHJlY2lzaW9uTG9zcyh0aWNrKSB7XG4gICAgICB2YXIgcm91bmRlZFRpY2sgPSBNYXRoLnJvdW5kKHRpY2spO1xuICAgICAgcmV0dXJuIHJvdW5kZWRUaWNrIC0gdGljaztcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB3aGF0IHRvIG11bHRpcGxlIHRpY2tzL3F1YXJ0ZXIgbm90ZSBieSB0byBnZXQgdGhlIHNwZWNpZmllZCBkdXJhdGlvbi5cbiAgICAgKiBOb3RlOiB0eXBlPT0nbm90ZScgZGVmYXVsdHMgdG8gcXVhcnRlciBub3RlLCB0eXBlPT09J3Jlc3QnIGRlZmF1bHRzIHRvIDBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZHVyYXRpb25cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXREdXJhdGlvbk11bHRpcGxpZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RHVyYXRpb25NdWx0aXBsaWVyKGR1cmF0aW9uKSB7XG4gICAgICAvLyBOZWVkIHRvIGFwcGx5IGR1cmF0aW9uIGhlcmUuXG4gICAgICAvLyBRdWFydGVyIG5vdGUgPT0gQ29uc3RhbnRzLkhFQURFUl9DSFVOS19ESVZJU0lPTiB0aWNrcy5cbiAgICAgIGlmIChkdXJhdGlvbiA9PT0gJzAnKSByZXR1cm4gMDtcbiAgICAgIHZhciBtYXRjaCA9IGR1cmF0aW9uLm1hdGNoKCAvKiNfX1BVUkVfXyovX3dyYXBSZWdFeHAoL14oZCspPyhbMC05XSspKD86dChbMC05XSopKT8vLCB7XG4gICAgICAgIGRvdHRlZDogMSxcbiAgICAgICAgYmFzZTogMixcbiAgICAgICAgdHVwbGV0OiAzXG4gICAgICB9KSk7XG5cbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICB2YXIgYmFzZSA9IE51bWJlcihtYXRjaC5ncm91cHMuYmFzZSk7IC8vIDEgb3IgYW55IHBvd2VyIG9mIHR3bzpcblxuICAgICAgICB2YXIgaXNWYWxpZEJhc2UgPSBiYXNlID09PSAxIHx8IChiYXNlICYgYmFzZSAtIDEpID09PSAwO1xuXG4gICAgICAgIGlmIChpc1ZhbGlkQmFzZSkge1xuICAgICAgICAgIC8vIGhvdyBtdWNoIGZhc3RlciBvciBzbG93ZXIgaXMgdGhpcyBub3RlIGNvbXBhcmVkIHRvIGEgcXVhcnRlcj9cbiAgICAgICAgICB2YXIgcmF0aW8gPSBiYXNlIC8gNDtcbiAgICAgICAgICB2YXIgZHVyYXRpb25JblF1YXJ0ZXJzID0gMSAvIHJhdGlvO1xuICAgICAgICAgIHZhciBfbWF0Y2gkZ3JvdXBzID0gbWF0Y2guZ3JvdXBzLFxuICAgICAgICAgICAgICBkb3R0ZWQgPSBfbWF0Y2gkZ3JvdXBzLmRvdHRlZCxcbiAgICAgICAgICAgICAgdHVwbGV0ID0gX21hdGNoJGdyb3Vwcy50dXBsZXQ7XG5cbiAgICAgICAgICBpZiAoZG90dGVkKSB7XG4gICAgICAgICAgICB2YXIgdGhpc01hbnlEb3RzID0gZG90dGVkLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciBkaXZpc29yID0gTWF0aC5wb3coMiwgdGhpc01hbnlEb3RzKTtcbiAgICAgICAgICAgIGR1cmF0aW9uSW5RdWFydGVycyA9IGR1cmF0aW9uSW5RdWFydGVycyArIGR1cmF0aW9uSW5RdWFydGVycyAqICgoZGl2aXNvciAtIDEpIC8gZGl2aXNvcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0dXBsZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB2YXIgZml0SW50byA9IGR1cmF0aW9uSW5RdWFydGVycyAqIDI7IC8vIGRlZmF1bHQgdG8gdHJpcGxldDpcblxuICAgICAgICAgICAgdmFyIHRoaXNNYW55Tm90ZXMgPSBOdW1iZXIodHVwbGV0IHx8ICczJyk7XG4gICAgICAgICAgICBkdXJhdGlvbkluUXVhcnRlcnMgPSBmaXRJbnRvIC8gdGhpc01hbnlOb3RlcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZHVyYXRpb25JblF1YXJ0ZXJzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihkdXJhdGlvbiArICcgaXMgbm90IGEgdmFsaWQgZHVyYXRpb24uJyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFV0aWxzO1xufSgpO1xuXG4vKipcbiAqIEhvbGRzIGFsbCBkYXRhIGZvciBhIFwibm90ZSBvblwiIE1JREkgZXZlbnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZHMge2RhdGE6IFtdfVxuICogQHJldHVybiB7Tm90ZU9uRXZlbnR9XG4gKi9cblxudmFyIE5vdGVPbkV2ZW50ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTm90ZU9uRXZlbnQoZmllbGRzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5vdGVPbkV2ZW50KTtcblxuICAgIC8vIFNldCBkZWZhdWx0IGZpZWxkc1xuICAgIGZpZWxkcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2hhbm5lbDogMSxcbiAgICAgIHN0YXJ0VGljazogbnVsbCxcbiAgICAgIHZlbG9jaXR5OiA1MCxcbiAgICAgIHdhaXQ6IDBcbiAgICB9LCBmaWVsZHMpO1xuICAgIHRoaXMudHlwZSA9ICdub3RlLW9uJztcbiAgICB0aGlzLmNoYW5uZWwgPSBmaWVsZHMuY2hhbm5lbDtcbiAgICB0aGlzLnBpdGNoID0gZmllbGRzLnBpdGNoO1xuICAgIHRoaXMud2FpdCA9IGZpZWxkcy53YWl0O1xuICAgIHRoaXMudmVsb2NpdHkgPSBmaWVsZHMudmVsb2NpdHk7XG4gICAgdGhpcy5zdGFydFRpY2sgPSBmaWVsZHMuc3RhcnRUaWNrO1xuICAgIHRoaXMubWlkaU51bWJlciA9IFV0aWxzLmdldFBpdGNoKHRoaXMucGl0Y2gpO1xuICAgIHRoaXMudGljayA9IG51bGw7XG4gICAgdGhpcy5kZWx0YSA9IG51bGw7XG4gICAgdGhpcy5kYXRhID0gZmllbGRzLmRhdGE7XG4gIH1cbiAgLyoqXG4gICAqIEJ1aWxkcyBpbnQgYXJyYXkgZm9yIHRoaXMgZXZlbnQuXG4gICAqIEBwYXJhbSB7VHJhY2t9IHRyYWNrIC0gcGFyZW50IHRyYWNrXG4gICAqIEByZXR1cm4ge05vdGVPbkV2ZW50fVxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhOb3RlT25FdmVudCwgW3tcbiAgICBrZXk6IFwiYnVpbGREYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJ1aWxkRGF0YSh0cmFjaywgcHJlY2lzaW9uRGVsdGEpIHtcbiAgICAgIHRoaXMuZGF0YSA9IFtdOyAvLyBFeHBsaWNpdGx5IGRlZmluZWQgc3RhcnRUaWNrIGV2ZW50XG5cbiAgICAgIGlmICh0aGlzLnN0YXJ0VGljaykge1xuICAgICAgICB0aGlzLnRpY2sgPSBVdGlscy5nZXRSb3VuZGVkSWZDbG9zZSh0aGlzLnN0YXJ0VGljayk7IC8vIElmIHRoaXMgaXMgdGhlIGZpcnN0IGV2ZW50IGluIHRoZSB0cmFjayB0aGVuIHVzZSBldmVudCdzIHN0YXJ0aW5nIHRpY2sgYXMgZGVsdGEuXG5cbiAgICAgICAgaWYgKHRyYWNrLnRpY2tQb2ludGVyID09IDApIHtcbiAgICAgICAgICB0aGlzLmRlbHRhID0gdGhpcy50aWNrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRlbHRhID0gVXRpbHMuZ2V0VGlja0R1cmF0aW9uKHRoaXMud2FpdCk7XG4gICAgICAgIHRoaXMudGljayA9IFV0aWxzLmdldFJvdW5kZWRJZkNsb3NlKHRyYWNrLnRpY2tQb2ludGVyICsgdGhpcy5kZWx0YSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGVsdGFXaXRoUHJlY2lzaW9uQ29ycmVjdGlvbiA9IFV0aWxzLmdldFJvdW5kZWRJZkNsb3NlKHRoaXMuZGVsdGEgLSBwcmVjaXNpb25EZWx0YSk7XG4gICAgICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRoaXMuZGVsdGFXaXRoUHJlY2lzaW9uQ29ycmVjdGlvbikuY29uY2F0KHRoaXMuZ2V0U3RhdHVzQnl0ZSgpLCB0aGlzLm1pZGlOdW1iZXIsIFV0aWxzLmNvbnZlcnRWZWxvY2l0eSh0aGlzLnZlbG9jaXR5KSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgbm90ZSBvbiBzdGF0dXMgY29kZSBiYXNlZCBvbiB0aGUgc2VsZWN0ZWQgY2hhbm5lbC4gMHg5ezAtRn1cbiAgICAgKiBOb3RlIG9uIGF0IGNoYW5uZWwgMCBpcyAweDkwICgxNDQpXG4gICAgICogMCA9IENoIDFcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRTdGF0dXNCeXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFN0YXR1c0J5dGUoKSB7XG4gICAgICByZXR1cm4gMTQ0ICsgdGhpcy5jaGFubmVsIC0gMTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTm90ZU9uRXZlbnQ7XG59KCk7XG5cbi8qKlxuICogSG9sZHMgYWxsIGRhdGEgZm9yIGEgXCJub3RlIG9mZlwiIE1JREkgZXZlbnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZHMge2RhdGE6IFtdfVxuICogQHJldHVybiB7Tm90ZU9mZkV2ZW50fVxuICovXG5cbnZhciBOb3RlT2ZmRXZlbnQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBOb3RlT2ZmRXZlbnQoZmllbGRzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5vdGVPZmZFdmVudCk7XG5cbiAgICAvLyBTZXQgZGVmYXVsdCBmaWVsZHNcbiAgICBmaWVsZHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNoYW5uZWw6IDEsXG4gICAgICB2ZWxvY2l0eTogNTAsXG4gICAgICB0aWNrOiBudWxsXG4gICAgfSwgZmllbGRzKTtcbiAgICB0aGlzLnR5cGUgPSAnbm90ZS1vZmYnO1xuICAgIHRoaXMuY2hhbm5lbCA9IGZpZWxkcy5jaGFubmVsO1xuICAgIHRoaXMucGl0Y2ggPSBmaWVsZHMucGl0Y2g7XG4gICAgdGhpcy5kdXJhdGlvbiA9IGZpZWxkcy5kdXJhdGlvbjtcbiAgICB0aGlzLnZlbG9jaXR5ID0gZmllbGRzLnZlbG9jaXR5O1xuICAgIHRoaXMubWlkaU51bWJlciA9IFV0aWxzLmdldFBpdGNoKHRoaXMucGl0Y2gpO1xuICAgIHRoaXMudGljayA9IGZpZWxkcy50aWNrO1xuICAgIHRoaXMuZGVsdGEgPSBVdGlscy5nZXRUaWNrRHVyYXRpb24odGhpcy5kdXJhdGlvbik7XG4gICAgdGhpcy5kYXRhID0gZmllbGRzLmRhdGE7XG4gIH1cbiAgLyoqXG4gICAqIEJ1aWxkcyBpbnQgYXJyYXkgZm9yIHRoaXMgZXZlbnQuXG4gICAqIEBwYXJhbSB7VHJhY2t9IHRyYWNrIC0gcGFyZW50IHRyYWNrXG4gICAqIEByZXR1cm4ge05vdGVPZmZFdmVudH1cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoTm90ZU9mZkV2ZW50LCBbe1xuICAgIGtleTogXCJidWlsZERhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYnVpbGREYXRhKHRyYWNrLCBwcmVjaXNpb25EZWx0YSkge1xuICAgICAgaWYgKHRoaXMudGljayA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLnRpY2sgPSBVdGlscy5nZXRSb3VuZGVkSWZDbG9zZSh0aGlzLmRlbHRhICsgdHJhY2sudGlja1BvaW50ZXIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRlbHRhV2l0aFByZWNpc2lvbkNvcnJlY3Rpb24gPSBVdGlscy5nZXRSb3VuZGVkSWZDbG9zZSh0aGlzLmRlbHRhIC0gcHJlY2lzaW9uRGVsdGEpO1xuICAgICAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0aGlzLmRlbHRhV2l0aFByZWNpc2lvbkNvcnJlY3Rpb24pLmNvbmNhdCh0aGlzLmdldFN0YXR1c0J5dGUoKSwgdGhpcy5taWRpTnVtYmVyLCBVdGlscy5jb252ZXJ0VmVsb2NpdHkodGhpcy52ZWxvY2l0eSkpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIG5vdGUgb2ZmIHN0YXR1cyBjb2RlIGJhc2VkIG9uIHRoZSBzZWxlY3RlZCBjaGFubmVsLiAweDh7MC1GfVxuICAgICAqIE5vdGUgb2ZmIGF0IGNoYW5uZWwgMCBpcyAweDgwICgxMjgpXG4gICAgICogMCA9IENoIDFcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRTdGF0dXNCeXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFN0YXR1c0J5dGUoKSB7XG4gICAgICByZXR1cm4gMTI4ICsgdGhpcy5jaGFubmVsIC0gMTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTm90ZU9mZkV2ZW50O1xufSgpO1xuXG4vKipcbiAqIFdyYXBwZXIgZm9yIG5vdGVPbkV2ZW50L25vdGVPZmZFdmVudCBvYmplY3RzIHRoYXQgYnVpbGRzIGJvdGggZXZlbnRzLlxuICogQHBhcmFtIHtvYmplY3R9IGZpZWxkcyAtIHtwaXRjaDogJ1tDNF0nLCBkdXJhdGlvbjogJzQnLCB3YWl0OiAnNCcsIHZlbG9jaXR5OiAxLTEwMH1cbiAqIEByZXR1cm4ge05vdGVFdmVudH1cbiAqL1xuXG52YXIgTm90ZUV2ZW50ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTm90ZUV2ZW50KGZpZWxkcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb3RlRXZlbnQpO1xuXG4gICAgLy8gU2V0IGRlZmF1bHQgZmllbGRzXG4gICAgZmllbGRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjaGFubmVsOiAxLFxuICAgICAgcmVwZWF0OiAxLFxuICAgICAgc2VxdWVudGlhbDogZmFsc2UsXG4gICAgICBzdGFydFRpY2s6IG51bGwsXG4gICAgICB2ZWxvY2l0eTogNTAsXG4gICAgICB3YWl0OiAwXG4gICAgfSwgZmllbGRzKTtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICB0aGlzLnR5cGUgPSAnbm90ZSc7XG4gICAgdGhpcy5waXRjaCA9IFV0aWxzLnRvQXJyYXkoZmllbGRzLnBpdGNoKTtcbiAgICB0aGlzLmNoYW5uZWwgPSBmaWVsZHMuY2hhbm5lbDtcbiAgICB0aGlzLmR1cmF0aW9uID0gZmllbGRzLmR1cmF0aW9uO1xuICAgIHRoaXMuZ3JhY2UgPSBmaWVsZHMuZ3JhY2U7XG4gICAgdGhpcy5yZXBlYXQgPSBmaWVsZHMucmVwZWF0O1xuICAgIHRoaXMuc2VxdWVudGlhbCA9IGZpZWxkcy5zZXF1ZW50aWFsO1xuICAgIHRoaXMuc3RhcnRUaWNrID0gZmllbGRzLnN0YXJ0VGljaztcbiAgICB0aGlzLnZlbG9jaXR5ID0gZmllbGRzLnZlbG9jaXR5O1xuICAgIHRoaXMud2FpdCA9IGZpZWxkcy53YWl0O1xuICAgIHRoaXMudGlja0R1cmF0aW9uID0gVXRpbHMuZ2V0VGlja0R1cmF0aW9uKHRoaXMuZHVyYXRpb24pO1xuICAgIHRoaXMucmVzdER1cmF0aW9uID0gVXRpbHMuZ2V0VGlja0R1cmF0aW9uKHRoaXMud2FpdCk7XG4gICAgdGhpcy5ldmVudHMgPSBbXTsgLy8gSG9sZCBhY3R1YWwgTm90ZU9uL05vdGVPZmYgZXZlbnRzXG4gIH1cbiAgLyoqXG4gICAqIEJ1aWxkcyBpbnQgYXJyYXkgZm9yIHRoaXMgZXZlbnQuXG4gICAqIEByZXR1cm4ge05vdGVFdmVudH1cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoTm90ZUV2ZW50LCBbe1xuICAgIGtleTogXCJidWlsZERhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYnVpbGREYXRhKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgLy8gUmVzZXQgZGF0YSBhcnJheVxuICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgICB0aGlzLnRpY2tEdXJhdGlvbjtcbiAgICAgIHRoaXMucmVzdER1cmF0aW9uOyAvLyBBcHBseSBncmFjZSBub3RlKHMpIGFuZCBzdWJ0cmFjdCB0aWNrcyAoY3VycmVudGx5IDEgdGljayBwZXIgZ3JhY2Ugbm90ZSkgZnJvbSB0aWNrRHVyYXRpb24gc28gbmV0IHZhbHVlIGlzIHRoZSBzYW1lXG5cbiAgICAgIGlmICh0aGlzLmdyYWNlKSB7XG4gICAgICAgIHZhciBncmFjZUR1cmF0aW9uID0gMTtcbiAgICAgICAgdGhpcy5ncmFjZSA9IFV0aWxzLnRvQXJyYXkodGhpcy5ncmFjZSk7XG4gICAgICAgIHRoaXMuZ3JhY2UuZm9yRWFjaChmdW5jdGlvbiAocGl0Y2gpIHtcbiAgICAgICAgICB2YXIgbm90ZUV2ZW50ID0gbmV3IE5vdGVFdmVudCh7XG4gICAgICAgICAgICBwaXRjaDogX3RoaXMuZ3JhY2UsXG4gICAgICAgICAgICBkdXJhdGlvbjogJ1QnICsgZ3JhY2VEdXJhdGlvblxuICAgICAgICAgIH0pO1xuICAgICAgICAgIF90aGlzLmRhdGEgPSBfdGhpcy5kYXRhLmNvbmNhdChub3RlRXZlbnQuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfSAvLyBmaWVsZHMucGl0Y2ggY291bGQgYmUgYW4gYXJyYXkgb2YgcGl0Y2hlcy5cbiAgICAgIC8vIElmIHRoaXMuc2VxdWVudGlhbCA9PT0gdHJ1ZSB0aGVuIGl0J3MgYSBzZXF1ZW50aWFsIHN0cmluZyBvZiBub3RlcyB0aGF0IHJlcXVpcmVzIHNlcGFyYXRlIE5vdGVPbkV2ZW50cy5cblxuICAgICAgaWYgKCF0aGlzLnNlcXVlbnRpYWwpIHtcbiAgICAgICAgLy8gSGFuZGxlIHJlcGVhdFxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMucmVwZWF0OyBqKyspIHtcbiAgICAgICAgICAvLyBOb3RlIG9uXG4gICAgICAgICAgdGhpcy5waXRjaC5mb3JFYWNoKGZ1bmN0aW9uIChwLCBpKSB7XG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgIHZhciBub3RlT25OZXcgPSBuZXcgTm90ZU9uRXZlbnQoe1xuICAgICAgICAgICAgICAgIGNoYW5uZWw6IF90aGlzLmNoYW5uZWwsXG4gICAgICAgICAgICAgICAgd2FpdDogX3RoaXMud2FpdCxcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eTogX3RoaXMudmVsb2NpdHksXG4gICAgICAgICAgICAgICAgcGl0Y2g6IHAsXG4gICAgICAgICAgICAgICAgc3RhcnRUaWNrOiBfdGhpcy5zdGFydFRpY2tcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBSdW5uaW5nIHN0YXR1cyAoY2FuIG9tbWl0IHRoZSBub3RlIG9uIHN0YXR1cylcbiAgICAgICAgICAgICAgLy9ub3RlT24gPSBuZXcgTm90ZU9uRXZlbnQoe2RhdGE6IFswLCBVdGlscy5nZXRQaXRjaChwKSwgVXRpbHMuY29udmVydFZlbG9jaXR5KHRoaXMudmVsb2NpdHkpXX0pO1xuICAgICAgICAgICAgICB2YXIgbm90ZU9uTmV3ID0gbmV3IE5vdGVPbkV2ZW50KHtcbiAgICAgICAgICAgICAgICBjaGFubmVsOiBfdGhpcy5jaGFubmVsLFxuICAgICAgICAgICAgICAgIHdhaXQ6IDAsXG4gICAgICAgICAgICAgICAgdmVsb2NpdHk6IF90aGlzLnZlbG9jaXR5LFxuICAgICAgICAgICAgICAgIHBpdGNoOiBwLFxuICAgICAgICAgICAgICAgIHN0YXJ0VGljazogX3RoaXMuc3RhcnRUaWNrXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfdGhpcy5ldmVudHMucHVzaChub3RlT25OZXcpO1xuICAgICAgICAgIH0pOyAvLyBOb3RlIG9mZlxuXG4gICAgICAgICAgdGhpcy5waXRjaC5mb3JFYWNoKGZ1bmN0aW9uIChwLCBpKSB7XG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgIC8vbm90ZU9mZiA9IG5ldyBOb3RlT2ZmRXZlbnQoe2RhdGE6IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgodGlja0R1cmF0aW9uKS5jb25jYXQodGhpcy5nZXROb3RlT2ZmU3RhdHVzKCksIFV0aWxzLmdldFBpdGNoKHApLCBVdGlscy5jb252ZXJ0VmVsb2NpdHkodGhpcy52ZWxvY2l0eSkpfSk7XG4gICAgICAgICAgICAgIHZhciBub3RlT2ZmTmV3ID0gbmV3IE5vdGVPZmZFdmVudCh7XG4gICAgICAgICAgICAgICAgY2hhbm5lbDogX3RoaXMuY2hhbm5lbCxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogX3RoaXMuZHVyYXRpb24sXG4gICAgICAgICAgICAgICAgdmVsb2NpdHk6IF90aGlzLnZlbG9jaXR5LFxuICAgICAgICAgICAgICAgIHBpdGNoOiBwLFxuICAgICAgICAgICAgICAgIHRpY2s6IF90aGlzLnN0YXJ0VGljayAhPT0gbnVsbCA/IFV0aWxzLmdldFRpY2tEdXJhdGlvbihfdGhpcy5kdXJhdGlvbikgKyBfdGhpcy5zdGFydFRpY2sgOiBudWxsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gUnVubmluZyBzdGF0dXMgKGNhbiBvbW1pdCB0aGUgbm90ZSBvZmYgc3RhdHVzKVxuICAgICAgICAgICAgICAvL25vdGVPZmYgPSBuZXcgTm90ZU9mZkV2ZW50KHtkYXRhOiBbMCwgVXRpbHMuZ2V0UGl0Y2gocCksIFV0aWxzLmNvbnZlcnRWZWxvY2l0eSh0aGlzLnZlbG9jaXR5KV19KTtcbiAgICAgICAgICAgICAgdmFyIG5vdGVPZmZOZXcgPSBuZXcgTm90ZU9mZkV2ZW50KHtcbiAgICAgICAgICAgICAgICBjaGFubmVsOiBfdGhpcy5jaGFubmVsLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5OiBfdGhpcy52ZWxvY2l0eSxcbiAgICAgICAgICAgICAgICBwaXRjaDogcCxcbiAgICAgICAgICAgICAgICB0aWNrOiBfdGhpcy5zdGFydFRpY2sgIT09IG51bGwgPyBVdGlscy5nZXRUaWNrRHVyYXRpb24oX3RoaXMuZHVyYXRpb24pICsgX3RoaXMuc3RhcnRUaWNrIDogbnVsbFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX3RoaXMuZXZlbnRzLnB1c2gobm90ZU9mZk5ldyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEhhbmRsZSByZXBlYXRcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLnJlcGVhdDsgaisrKSB7XG4gICAgICAgICAgdGhpcy5waXRjaC5mb3JFYWNoKGZ1bmN0aW9uIChwLCBpKSB7XG5cbiAgICAgICAgICAgIHZhciBub3RlT25OZXcgPSBuZXcgTm90ZU9uRXZlbnQoe1xuICAgICAgICAgICAgICBjaGFubmVsOiBfdGhpcy5jaGFubmVsLFxuICAgICAgICAgICAgICB3YWl0OiBpID4gMCA/IDAgOiBfdGhpcy53YWl0LFxuICAgICAgICAgICAgICAvLyB3YWl0IG9ubHkgYXBwbGllcyB0byBmaXJzdCBub3RlIGluIHJlcGV0aXRpb25cbiAgICAgICAgICAgICAgdmVsb2NpdHk6IF90aGlzLnZlbG9jaXR5LFxuICAgICAgICAgICAgICBwaXRjaDogcCxcbiAgICAgICAgICAgICAgc3RhcnRUaWNrOiBfdGhpcy5zdGFydFRpY2tcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIG5vdGVPZmZOZXcgPSBuZXcgTm90ZU9mZkV2ZW50KHtcbiAgICAgICAgICAgICAgY2hhbm5lbDogX3RoaXMuY2hhbm5lbCxcbiAgICAgICAgICAgICAgZHVyYXRpb246IF90aGlzLmR1cmF0aW9uLFxuICAgICAgICAgICAgICB2ZWxvY2l0eTogX3RoaXMudmVsb2NpdHksXG4gICAgICAgICAgICAgIHBpdGNoOiBwXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgX3RoaXMuZXZlbnRzLnB1c2gobm90ZU9uTmV3LCBub3RlT2ZmTmV3KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTm90ZUV2ZW50O1xufSgpO1xuXG4vKipcbiAqIEhvbGRzIGFsbCBkYXRhIGZvciBhIFwiUGl0Y2ggQmVuZFwiIE1JREkgZXZlbnRcbiAqIFsgLTEuMCwgMCwgMS4wIF0gLT4gIFsgMCwgODE5MiwgMTYzODNdXG4gKiBAcGFyYW0ge29iamVjdH0gZmllbGRzIHsgYmVuZCA6IGZsb2F0LCBjaGFubmVsIDogaW50IH1cbiAqIEByZXR1cm4ge1BpdGNoQmVuZEV2ZW50fVxuICovXG5cbnZhciBzY2FsZTE0Yml0cyA9IGZ1bmN0aW9uIHNjYWxlMTRiaXRzKHplcm9PbmUpIHtcbiAgaWYgKHplcm9PbmUgPD0gMCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKDE2Mzg0ICogKHplcm9PbmUgKyAxKSAvIDIpO1xuICB9XG5cbiAgcmV0dXJuIE1hdGguZmxvb3IoMTYzODMgKiAoemVyb09uZSArIDEpIC8gMik7XG59O1xuXG52YXIgUGl0Y2hCZW5kRXZlbnQgPSBmdW5jdGlvbiBQaXRjaEJlbmRFdmVudChmaWVsZHMpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBpdGNoQmVuZEV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAncGl0Y2gtYmVuZCc7XG4gIHZhciBiZW5kMTQgPSBzY2FsZTE0Yml0cyhmaWVsZHMuYmVuZCk7XG4gIHZhciBjaGFubmVsID0gZmllbGRzLmNoYW5uZWwgfHwgMDtcbiAgdmFyIGxzYlZhbHVlID0gYmVuZDE0ICYgMHg3ZjtcbiAgdmFyIG1zYlZhbHVlID0gYmVuZDE0ID4+IDcgJiAweDdmO1xuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuUElUQ0hfQkVORF9TVEFUVVMgfCBjaGFubmVsLCBsc2JWYWx1ZSwgbXNiVmFsdWUpO1xufTtcblxuLyoqXG4gKiBIb2xkcyBhbGwgZGF0YSBmb3IgYSBcInByb2dyYW0gY2hhbmdlXCIgTUlESSBldmVudFxuICogQHBhcmFtIHtvYmplY3R9IGZpZWxkcyB7aW5zdHJ1bWVudDogaW50ZWdlcn1cbiAqIEByZXR1cm4ge1Byb2dyYW1DaGFuZ2VFdmVudH1cbiAqL1xuXG52YXIgUHJvZ3JhbUNoYW5nZUV2ZW50ID0gZnVuY3Rpb24gUHJvZ3JhbUNoYW5nZUV2ZW50KGZpZWxkcykge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHJvZ3JhbUNoYW5nZUV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAncHJvZ3JhbSc7IC8vIGRlbHRhIHRpbWUgZGVmYXVsdHMgdG8gMC5cblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuUFJPR1JBTV9DSEFOR0VfU1RBVFVTLCBmaWVsZHMuaW5zdHJ1bWVudCk7XG59O1xuXG4vKipcbiAqIEhvbGRzIGFsbCBkYXRhIGZvciBhIFwiY29udHJvbGxlciBjaGFuZ2VcIiBNSURJIGV2ZW50XG4gKiBAcGFyYW0ge29iamVjdH0gZmllbGRzIHtjb250cm9sbGVyTnVtYmVyOiBpbnRlZ2VyLCBjb250cm9sbGVyVmFsdWU6IGludGVnZXJ9XG4gKiBAcmV0dXJuIHtDb250cm9sbGVyQ2hhbmdlRXZlbnR9XG4gKi9cblxudmFyIENvbnRyb2xsZXJDaGFuZ2VFdmVudCA9IGZ1bmN0aW9uIENvbnRyb2xsZXJDaGFuZ2VFdmVudChmaWVsZHMpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbnRyb2xsZXJDaGFuZ2VFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ2NvbnRyb2xsZXInOyAvLyBkZWx0YSB0aW1lIGRlZmF1bHRzIHRvIDAuXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLkNPTlRST0xMRVJfQ0hBTkdFX1NUQVRVUywgZmllbGRzLmNvbnRyb2xsZXJOdW1iZXIsIGZpZWxkcy5jb250cm9sbGVyVmFsdWUpO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSB0ZW1wbyBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBDb3B5cmlnaHQgdGV4dFxuICogQHJldHVybiB7Q29weXJpZ2h0RXZlbnR9XG4gKi9cblxudmFyIENvcHlyaWdodEV2ZW50ID0gZnVuY3Rpb24gQ29weXJpZ2h0RXZlbnQodGV4dCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29weXJpZ2h0RXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdjb3B5cmlnaHQnO1xuICB2YXIgdGV4dEJ5dGVzID0gVXRpbHMuc3RyaW5nVG9CeXRlcyh0ZXh0KTsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfQ09QWVJJR0hUX0lELCBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRleHRCeXRlcy5sZW5ndGgpLCAvLyBTaXplXG4gIHRleHRCeXRlcyAvLyBUZXh0XG4gICk7XG59O1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIGN1ZSBwb2ludCBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBDdWUgcG9pbnQgdGV4dFxuICogQHJldHVybiB7Q3VlUG9pbnRFdmVudH1cbiAqL1xuXG52YXIgQ3VlUG9pbnRFdmVudCA9IGZ1bmN0aW9uIEN1ZVBvaW50RXZlbnQodGV4dCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ3VlUG9pbnRFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ21hcmtlcic7XG4gIHZhciB0ZXh0Qnl0ZXMgPSBVdGlscy5zdHJpbmdUb0J5dGVzKHRleHQpOyAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9DVUVfUE9JTlQsIFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgodGV4dEJ5dGVzLmxlbmd0aCksIC8vIFNpemVcbiAgdGV4dEJ5dGVzIC8vIFRleHRcbiAgKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgZW5kIHRyYWNrIG1ldGEgZXZlbnQuXG4gKiBAcmV0dXJuIHtFbmRUcmFja0V2ZW50fVxuICovXG5cbnZhciBFbmRUcmFja0V2ZW50ID0gZnVuY3Rpb24gRW5kVHJhY2tFdmVudCgpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEVuZFRyYWNrRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdlbmQtdHJhY2snOyAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9FTkRfT0ZfVFJBQ0tfSUQpO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYW4gaW5zdHJ1bWVudCBuYW1lIG1ldGEgZXZlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gYnBtIC0gQmVhdHMgcGVyIG1pbnV0ZVxuICogQHJldHVybiB7SW5zdHJ1bWVudE5hbWVFdmVudH1cbiAqL1xuXG52YXIgSW5zdHJ1bWVudE5hbWVFdmVudCA9IGZ1bmN0aW9uIEluc3RydW1lbnROYW1lRXZlbnQodGV4dCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5zdHJ1bWVudE5hbWVFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ2luc3RydW1lbnQtbmFtZSc7XG4gIHZhciB0ZXh0Qnl0ZXMgPSBVdGlscy5zdHJpbmdUb0J5dGVzKHRleHQpOyAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9JTlNUUlVNRU5UX05BTUVfSUQsIFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgodGV4dEJ5dGVzLmxlbmd0aCksIC8vIFNpemVcbiAgdGV4dEJ5dGVzIC8vIEluc3RydW1lbnQgbmFtZVxuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSBrZXkgc2lnbmF0dXJlIG1ldGEgZXZlbnQuXG4gKiBAcmV0dXJuIHtLZXlTaWduYXR1cmVFdmVudH1cbiAqL1xuXG52YXIgS2V5U2lnbmF0dXJlRXZlbnQgPSBmdW5jdGlvbiBLZXlTaWduYXR1cmVFdmVudChzZiwgbWkpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEtleVNpZ25hdHVyZUV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAna2V5LXNpZ25hdHVyZSc7XG4gIHZhciBtb2RlID0gbWkgfHwgMDtcbiAgc2YgPSBzZiB8fCAwOyAvL1x0RnVuY3Rpb24gY2FsbGVkIHdpdGggc3RyaW5nIG5vdGF0aW9uXG5cbiAgaWYgKHR5cGVvZiBtaSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgZmlmdGhzID0gW1snQ2InLCAnR2InLCAnRGInLCAnQWInLCAnRWInLCAnQmInLCAnRicsICdDJywgJ0cnLCAnRCcsICdBJywgJ0UnLCAnQicsICdGIycsICdDIyddLCBbJ2FiJywgJ2ViJywgJ2JiJywgJ2YnLCAnYycsICdnJywgJ2QnLCAnYScsICdlJywgJ2InLCAnZiMnLCAnYyMnLCAnZyMnLCAnZCMnLCAnYSMnXV07XG4gICAgdmFyIF9zZmxlbiA9IHNmLmxlbmd0aDtcbiAgICB2YXIgbm90ZSA9IHNmIHx8ICdDJztcbiAgICBpZiAoc2ZbMF0gPT09IHNmWzBdLnRvTG93ZXJDYXNlKCkpIG1vZGUgPSAxO1xuXG4gICAgaWYgKF9zZmxlbiA+IDEpIHtcbiAgICAgIHN3aXRjaCAoc2YuY2hhckF0KF9zZmxlbiAtIDEpKSB7XG4gICAgICAgIGNhc2UgJ20nOlxuICAgICAgICAgIG1vZGUgPSAxO1xuICAgICAgICAgIG5vdGUgPSBzZi5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICBub3RlID0gbm90ZS5jb25jYXQoc2Yuc3Vic3RyaW5nKDEsIF9zZmxlbiAtIDEpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICBtb2RlID0gMTtcbiAgICAgICAgICBub3RlID0gc2YuY2hhckF0KDApLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgbm90ZSA9IG5vdGUuY29uY2F0KHNmLnN1YnN0cmluZygxLCBfc2ZsZW4gLSAxKSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnTSc6XG4gICAgICAgICAgbW9kZSA9IDA7XG4gICAgICAgICAgbm90ZSA9IHNmLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgIG5vdGUgPSBub3RlLmNvbmNhdChzZi5zdWJzdHJpbmcoMSwgX3NmbGVuIC0gMSkpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgIG1vZGUgPSAwO1xuICAgICAgICAgIG5vdGUgPSBzZi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICBub3RlID0gbm90ZS5jb25jYXQoc2Yuc3Vic3RyaW5nKDEsIF9zZmxlbiAtIDEpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZmlmdGhpbmRleCA9IGZpZnRoc1ttb2RlXS5pbmRleE9mKG5vdGUpO1xuICAgIHNmID0gZmlmdGhpbmRleCA9PT0gLTEgPyAwIDogZmlmdGhpbmRleCAtIDc7XG4gIH0gLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9LRVlfU0lHTkFUVVJFX0lELCBbMHgwMl0sIC8vIFNpemVcbiAgVXRpbHMubnVtYmVyVG9CeXRlcyhzZiwgMSksIC8vIE51bWJlciBvZiBzaGFycCBvciBmbGF0cyAoIDwgMCBmbGF0OyA+IDAgc2hhcnApXG4gIFV0aWxzLm51bWJlclRvQnl0ZXMobW9kZSwgMSkgLy8gTW9kZTogMCBtYWpvciwgMSBtaW5vclxuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSBseXJpYyBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBMeXJpYyB0ZXh0XG4gKiBAcmV0dXJuIHtMeXJpY0V2ZW50fVxuICovXG5cbnZhciBMeXJpY0V2ZW50ID0gZnVuY3Rpb24gTHlyaWNFdmVudCh0ZXh0KSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMeXJpY0V2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAnbWFya2VyJztcbiAgdmFyIHRleHRCeXRlcyA9IFV0aWxzLnN0cmluZ1RvQnl0ZXModGV4dCk7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX0xZUklDX0lELCBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRleHRCeXRlcy5sZW5ndGgpLCAvLyBTaXplXG4gIHRleHRCeXRlcyAvLyBUZXh0XG4gICk7XG59O1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIG1hcmtlciBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBNYXJrZXIgdGV4dFxuICogQHJldHVybiB7TWFya2VyRXZlbnR9XG4gKi9cblxudmFyIE1hcmtlckV2ZW50ID0gZnVuY3Rpb24gTWFya2VyRXZlbnQodGV4dCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFya2VyRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdtYXJrZXInO1xuICB2YXIgdGV4dEJ5dGVzID0gVXRpbHMuc3RyaW5nVG9CeXRlcyh0ZXh0KTsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfTUFSS0VSX0lELCBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRleHRCeXRlcy5sZW5ndGgpLCAvLyBTaXplXG4gIHRleHRCeXRlcyAvLyBUZXh0XG4gICk7XG59O1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIHRlbXBvIG1ldGEgZXZlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gYnBtIC0gQmVhdHMgcGVyIG1pbnV0ZVxuICogQHJldHVybiB7VGVtcG9FdmVudH1cbiAqL1xuXG52YXIgVGVtcG9FdmVudCA9IGZ1bmN0aW9uIFRlbXBvRXZlbnQoYnBtKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUZW1wb0V2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAndGVtcG8nO1xuICB2YXIgdGVtcG8gPSBNYXRoLnJvdW5kKDYwMDAwMDAwIC8gYnBtKTsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfVEVNUE9fSUQsIFsweDAzXSwgLy8gU2l6ZVxuICBVdGlscy5udW1iZXJUb0J5dGVzKHRlbXBvLCAzKSAvLyBUZW1wbywgMyBieXRlc1xuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSB0ZW1wbyBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IGJwbSAtIEJlYXRzIHBlciBtaW51dGVcbiAqIEByZXR1cm4ge1RleHRFdmVudH1cbiAqL1xuXG52YXIgVGV4dEV2ZW50ID0gZnVuY3Rpb24gVGV4dEV2ZW50KHRleHQpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRleHRFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ3RleHQnO1xuICB2YXIgdGV4dEJ5dGVzID0gVXRpbHMuc3RyaW5nVG9CeXRlcyh0ZXh0KTsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfVEVYVF9JRCwgVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0ZXh0Qnl0ZXMubGVuZ3RoKSwgLy8gU2l6ZVxuICB0ZXh0Qnl0ZXMgLy8gVGV4dFxuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSB0aW1lIHNpZ25hdHVyZSBtZXRhIGV2ZW50LlxuICogQHJldHVybiB7VGltZVNpZ25hdHVyZUV2ZW50fVxuICovXG5cbnZhciBUaW1lU2lnbmF0dXJlRXZlbnQgPSBmdW5jdGlvbiBUaW1lU2lnbmF0dXJlRXZlbnQobnVtZXJhdG9yLCBkZW5vbWluYXRvciwgbWlkaWNsb2Nrc3BlcnRpY2ssIG5vdGVzcGVybWlkaWNsb2NrKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUaW1lU2lnbmF0dXJlRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICd0aW1lLXNpZ25hdHVyZSc7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX1RJTUVfU0lHTkFUVVJFX0lELCBbMHgwNF0sIC8vIFNpemVcbiAgVXRpbHMubnVtYmVyVG9CeXRlcyhudW1lcmF0b3IsIDEpLCAvLyBOdW1lcmF0b3IsIDEgYnl0ZXNcbiAgVXRpbHMubnVtYmVyVG9CeXRlcyhNYXRoLmxvZzIoZGVub21pbmF0b3IpLCAxKSwgLy8gRGVub21pbmF0b3IgaXMgZXhwcmVzc2VkIGFzIHBvdyBvZiAyLCAxIGJ5dGVzXG4gIFV0aWxzLm51bWJlclRvQnl0ZXMobWlkaWNsb2Nrc3BlcnRpY2sgfHwgMjQsIDEpLCAvLyBNSURJIENsb2NrcyBwZXIgdGljaywgMSBieXRlc1xuICBVdGlscy5udW1iZXJUb0J5dGVzKG5vdGVzcGVybWlkaWNsb2NrIHx8IDgsIDEpIC8vIE51bWJlciBvZiAxLzMyIG5vdGVzIHBlciBNSURJIGNsb2NrcywgMSBieXRlc1xuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSB0ZW1wbyBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IGJwbSAtIEJlYXRzIHBlciBtaW51dGVcbiAqIEByZXR1cm4ge1RyYWNrTmFtZUV2ZW50fVxuICovXG5cbnZhciBUcmFja05hbWVFdmVudCA9IGZ1bmN0aW9uIFRyYWNrTmFtZUV2ZW50KHRleHQpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRyYWNrTmFtZUV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAndHJhY2stbmFtZSc7XG4gIHZhciB0ZXh0Qnl0ZXMgPSBVdGlscy5zdHJpbmdUb0J5dGVzKHRleHQpOyAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9UUkFDS19OQU1FX0lELCBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRleHRCeXRlcy5sZW5ndGgpLCAvLyBTaXplXG4gIHRleHRCeXRlcyAvLyBUZXh0XG4gICk7XG59O1xuXG4vKipcbiAqIEhvbGRzIGFsbCBkYXRhIGZvciBhIHRyYWNrLlxuICogQHBhcmFtIHtvYmplY3R9IGZpZWxkcyB7dHlwZTogbnVtYmVyLCBkYXRhOiBhcnJheSwgc2l6ZTogYXJyYXksIGV2ZW50czogYXJyYXl9XG4gKiBAcmV0dXJuIHtUcmFja31cbiAqL1xuXG52YXIgVHJhY2sgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBUcmFjaygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJhY2spO1xuXG4gICAgdGhpcy50eXBlID0gQ29uc3RhbnRzLlRSQUNLX0NIVU5LX1RZUEU7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgdGhpcy5zaXplID0gW107XG4gICAgdGhpcy5ldmVudHMgPSBbXTtcbiAgICB0aGlzLmV4cGxpY2l0VGlja0V2ZW50cyA9IFtdOyAvLyBJZiB0aGVyZSBhcmUgYW55IGV2ZW50cyB3aXRoIGFuIGV4cGxpY2l0IHRpY2sgZGVmaW5lZCB0aGVuIHdlIHdpbGwgY3JlYXRlIGEgXCJzdWJcIiB0cmFjayBmb3IgdGhvc2VcbiAgICAvLyBhbmQgbWVyZ2UgdGhlbSBpbiBhbmQgdGhlIGVuZC5cblxuICAgIHRoaXMudGlja1BvaW50ZXIgPSAwOyAvLyBFYWNoIHRpbWUgYW4gZXZlbnQgaXMgYWRkZWQgdGhpcyB3aWxsIGluY3JlYXNlXG4gIH1cbiAgLyoqXG4gICAqIEFkZHMgYW55IGV2ZW50IHR5cGUgdG8gdGhlIHRyYWNrLlxuICAgKiBFdmVudHMgd2l0aG91dCBhIHNwZWNpZmljIHN0YXJ0VGljayBwcm9wZXJ0eSBhcmUgYXNzdW1lZCB0byBiZSBhZGRlZCBpbiBvcmRlciBvZiBob3cgdGhleSBzaG91bGQgb3V0cHV0LlxuICAgKiBFdmVudHMgd2l0aCBhIHNwZWNpZmljIHN0YXJ0VGljayBwcm9wZXJ0eSBhcmUgc2V0IGFzaWRlIGZvciBub3cgd2lsbCBiZSBtZXJnZWQgaW4gZHVyaW5nIGJ1aWxkIHByb2Nlc3MuXG4gICAqIEBwYXJhbSB7KE5vdGVFdmVudHxQcm9ncmFtQ2hhbmdlRXZlbnQpfSBldmVudHMgLSBFdmVudCBvYmplY3Qgb3IgYXJyYXkgb2YgRXZlbnQgb2JqZWN0cy5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gbWFwRnVuY3Rpb24gLSBDYWxsYmFjayB3aGljaCBjYW4gYmUgdXNlZCB0byBhcHBseSBzcGVjaWZpYyBwcm9wZXJ0aWVzIHRvIGFsbCBldmVudHMuXG4gICAqIEByZXR1cm4ge1RyYWNrfVxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhUcmFjaywgW3tcbiAgICBrZXk6IFwiYWRkRXZlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkRXZlbnQoZXZlbnRzLCBtYXBGdW5jdGlvbikge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgVXRpbHMudG9BcnJheShldmVudHMpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50LCBpKSB7XG4gICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5vdGVFdmVudCkge1xuICAgICAgICAgIC8vIEhhbmRsZSBtYXAgZnVuY3Rpb24gaWYgcHJvdmlkZWRcbiAgICAgICAgICBpZiAodHlwZW9mIG1hcEZ1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgcHJvcGVydGllcyA9IG1hcEZ1bmN0aW9uKGksIGV2ZW50KTtcblxuICAgICAgICAgICAgaWYgKF90eXBlb2YocHJvcGVydGllcykgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIGogaW4gcHJvcGVydGllcykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoaikge1xuICAgICAgICAgICAgICAgICAgY2FzZSAnY2hhbm5lbCc6XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmNoYW5uZWwgPSBwcm9wZXJ0aWVzW2pdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgY2FzZSAnZHVyYXRpb24nOlxuICAgICAgICAgICAgICAgICAgICBldmVudC5kdXJhdGlvbiA9IHByb3BlcnRpZXNbal07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlICdzZXF1ZW50aWFsJzpcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc2VxdWVudGlhbCA9IHByb3BlcnRpZXNbal07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlICd2ZWxvY2l0eSc6XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnZlbG9jaXR5ID0gVXRpbHMuY29udmVydFZlbG9jaXR5KHByb3BlcnRpZXNbal0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IC8vIElmIHRoaXMgbm90ZSBldmVudCBoYXMgYW4gZXhwbGljaXQgc3RhcnRUaWNrIHRoZW4gd2UgbmVlZCB0byBzZXQgYXNpZGUgZm9yIG5vd1xuXG5cbiAgICAgICAgICBpZiAoZXZlbnQuc3RhcnRUaWNrICE9PSBudWxsKSB7XG4gICAgICAgICAgICBfdGhpcy5leHBsaWNpdFRpY2tFdmVudHMucHVzaChldmVudCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFB1c2ggZWFjaCBvbi9vZmYgZXZlbnQgdG8gdHJhY2sncyBldmVudCBzdGFja1xuICAgICAgICAgICAgZXZlbnQuYnVpbGREYXRhKCkuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmV2ZW50cy5wdXNoKGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzLmV2ZW50cy5wdXNoKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQnVpbGRzIGludCBhcnJheSBvZiBhbGwgZXZlbnRzLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYnVpbGREYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJ1aWxkRGF0YSgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAvLyBSZW1vdmUgZXhpc3RpbmcgZW5kIHRyYWNrIGV2ZW50IGFuZCBhZGQgb25lLlxuICAgICAgLy8gVGhpcyBtYWtlcyBzdXJlIGl0J3MgYXQgdGhlIHZlcnkgZW5kIG9mIHRoZSBldmVudCBsaXN0LlxuICAgICAgdGhpcy5yZW1vdmVFdmVudHNCeVR5cGUoJ2VuZC10cmFjaycpLmFkZEV2ZW50KG5ldyBFbmRUcmFja0V2ZW50KCkpOyAvLyBSZXNldFxuXG4gICAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICAgIHRoaXMuc2l6ZSA9IFtdO1xuICAgICAgdGhpcy50aWNrUG9pbnRlciA9IDA7XG4gICAgICB2YXIgcHJlY2lzaW9uTG9zcyA9IDA7XG4gICAgICB0aGlzLmV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCwgZXZlbnRJbmRleCkge1xuICAgICAgICAvLyBCdWlsZCBldmVudCAmIGFkZCB0byB0b3RhbCB0aWNrIGR1cmF0aW9uXG4gICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5vdGVPbkV2ZW50IHx8IGV2ZW50IGluc3RhbmNlb2YgTm90ZU9mZkV2ZW50KSB7XG4gICAgICAgICAgdmFyIGJ1aWx0ID0gZXZlbnQuYnVpbGREYXRhKF90aGlzMiwgcHJlY2lzaW9uTG9zcyk7XG4gICAgICAgICAgcHJlY2lzaW9uTG9zcyA9IFV0aWxzLmdldFByZWNpc2lvbkxvc3MoZXZlbnQuZGVsdGFXaXRoUHJlY2lzaW9uQ29ycmVjdGlvbiB8fCAwKTtcbiAgICAgICAgICBfdGhpczIuZGF0YSA9IF90aGlzMi5kYXRhLmNvbmNhdChidWlsdC5kYXRhKTtcbiAgICAgICAgICBfdGhpczIudGlja1BvaW50ZXIgPSBVdGlscy5nZXRSb3VuZGVkSWZDbG9zZShldmVudC50aWNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpczIuZGF0YSA9IF90aGlzMi5kYXRhLmNvbmNhdChldmVudC5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLm1lcmdlRXhwbGljaXRUaWNrRXZlbnRzKCk7XG4gICAgICB0aGlzLnNpemUgPSBVdGlscy5udW1iZXJUb0J5dGVzKHRoaXMuZGF0YS5sZW5ndGgsIDQpOyAvLyA0IGJ5dGVzIGxvbmdcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm1lcmdlRXhwbGljaXRUaWNrRXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1lcmdlRXhwbGljaXRUaWNrRXZlbnRzKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIGlmICghdGhpcy5leHBsaWNpdFRpY2tFdmVudHMubGVuZ3RoKSByZXR1cm47IC8vIEZpcnN0IHNvcnQgYXNjIGxpc3Qgb2YgZXZlbnRzIGJ5IHN0YXJ0VGlja1xuXG4gICAgICB0aGlzLmV4cGxpY2l0VGlja0V2ZW50cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBhLnN0YXJ0VGljayAtIGIuc3RhcnRUaWNrO1xuICAgICAgfSk7IC8vIE5vdyB0aGlzLmV4cGxpY2l0VGlja0V2ZW50cyBpcyBpbiBjb3JyZWN0IG9yZGVyLCBhbmQgc28gaXMgdGhpcy5ldmVudHMgbmF0dXJhbGx5LlxuICAgICAgLy8gRm9yIGVhY2ggZXhwbGljaXQgdGljayBldmVudCwgc3BsaWNlIGl0IGludG8gdGhlIG1haW4gbGlzdCBvZiBldmVudHMgYW5kXG4gICAgICAvLyBhZGp1c3QgdGhlIGRlbHRhIG9uIHRoZSBmb2xsb3dpbmcgZXZlbnRzIHNvIHRoZXkgc3RpbGwgcGxheSBub3JtYWxseS5cblxuICAgICAgdGhpcy5leHBsaWNpdFRpY2tFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAobm90ZUV2ZW50KSB7XG4gICAgICAgIC8vIENvbnZlcnQgTm90ZUV2ZW50IHRvIGl0J3MgcmVzcGVjdGl2ZSBOb3RlT24vTm90ZU9mZiBldmVudHNcbiAgICAgICAgLy8gTm90ZSB0aGF0IGFzIHdlIHNwbGljZSBpbiBldmVudHMgdGhlIGRlbHRhIGZvciB0aGUgTm90ZU9mZiBvbmVzIHdpbGxcbiAgICAgICAgLy8gTmVlZCB0byBjaGFuZ2UgYmFzZWQgb24gd2hhdCBjb21lcyBiZWZvcmUgdGhlbSBhZnRlciB0aGUgc3BsaWNlLlxuICAgICAgICBub3RlRXZlbnQuYnVpbGREYXRhKCkuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gZS5idWlsZERhdGEoX3RoaXMzKTtcbiAgICAgICAgfSk7IC8vIE1lcmdlIGVhY2ggZXZlbnQgaW5kaXZ1YWxseSBpbnRvIHRoaXMgdHJhY2sncyBldmVudCBsaXN0LlxuXG4gICAgICAgIG5vdGVFdmVudC5ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMzLm1lcmdlU2luZ2xlRXZlbnQoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgIH0pOyAvLyBIYWNreSB3YXkgdG8gcmVidWlsZCB0cmFjayB3aXRoIG5ld2x5IHNwbGljZWQgZXZlbnRzLiAgTmVlZCBiZXR0ZXIgc29sdXRpb24uXG5cbiAgICAgIHRoaXMuZXhwbGljaXRUaWNrRXZlbnRzID0gW107XG4gICAgICB0aGlzLmJ1aWxkRGF0YSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNZXJnZXMgYW5vdGhlciB0cmFjaydzIGV2ZW50cyB3aXRoIHRoaXMgdHJhY2suXG4gICAgICogQHBhcmFtIHtUcmFja30gdHJhY2tcbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm1lcmdlVHJhY2tcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWVyZ2VUcmFjayh0cmFjaykge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIC8vIEZpcnN0IGJ1aWxkIHRoaXMgdHJhY2sgdG8gcG9wdWxhdGUgZWFjaCBldmVudCdzIHRpY2sgcHJvcGVydHlcbiAgICAgIHRoaXMuYnVpbGREYXRhKCk7IC8vIFRoZW4gYnVpbGQgdHJhY2sgdG8gYmUgbWVyZ2VkIHNvIHRoYXQgdGljayBwcm9wZXJ0eSBpcyBwb3B1bGF0ZWQgb24gYWxsIGV2ZW50cyAmIG1lcmdlIGVhY2ggZXZlbnQuXG5cbiAgICAgIHRyYWNrLmJ1aWxkRGF0YSgpLmV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICByZXR1cm4gX3RoaXM0Lm1lcmdlU2luZ2xlRXZlbnQoZXZlbnQpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE1lcmdlcyBhIHNpbmdsZSBldmVudCBpbnRvIHRoaXMgdHJhY2sncyBsaXN0IG9mIGV2ZW50cyBiYXNlZCBvbiBldmVudC50aWNrIHByb3BlcnR5LlxuICAgICAqIEBwYXJhbSB7Tm90ZU9uRXZlbnR8Tm90ZU9mZkV2ZW50fSAtIGV2ZW50XG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJtZXJnZVNpbmdsZUV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1lcmdlU2luZ2xlRXZlbnQoZXZlbnQpIHtcbiAgICAgIC8vIEZpbmQgaW5kZXggb2YgZXhpc3RpbmcgZXZlbnQgd2UgbmVlZCB0byBmb2xsb3cgd2l0aFxuICAgICAgdmFyIGxhc3RFdmVudEluZGV4ID0gMDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5ldmVudHNbaV0udGljayA+IGV2ZW50LnRpY2spIGJyZWFrO1xuICAgICAgICBsYXN0RXZlbnRJbmRleCA9IGk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzcGxpY2VkRXZlbnRJbmRleCA9IGxhc3RFdmVudEluZGV4ICsgMTsgLy8gTmVlZCB0byBhZGp1c3QgdGhlIGRlbHRhIG9mIHRoaXMgZXZlbnQgdG8gZW5zdXJlIGl0IGZhbGxzIG9uIHRoZSBjb3JyZWN0IHRpY2suXG5cbiAgICAgIGV2ZW50LmRlbHRhID0gZXZlbnQudGljayAtIHRoaXMuZXZlbnRzW2xhc3RFdmVudEluZGV4XS50aWNrOyAvLyBTcGxpY2UgdGhpcyBldmVudCBhdCBsYXN0RXZlbnRJbmRleCArIDFcblxuICAgICAgdGhpcy5ldmVudHMuc3BsaWNlKHNwbGljZWRFdmVudEluZGV4LCAwLCBldmVudCk7IC8vIE5vdyBhZGp1c3QgZGVsdGEgb2YgYWxsIGZvbGxvd2luZyBldmVudHNcblxuICAgICAgZm9yICh2YXIgaSA9IHNwbGljZWRFdmVudEluZGV4ICsgMTsgaSA8IHRoaXMuZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIFNpbmNlIGVhY2ggZXhpc3RpbmcgZXZlbnQgc2hvdWxkIGhhdmUgYSB0aWNrIHZhbHVlIGF0IHRoaXMgcG9pbnQgd2UganVzdCBuZWVkIHRvXG4gICAgICAgIC8vIGFkanVzdCBkZWx0YSB0byB0aGF0IHRoZSBldmVudCBzdGlsbCBmYWxscyBvbiB0aGUgY29ycmVjdCB0aWNrLlxuICAgICAgICB0aGlzLmV2ZW50c1tpXS5kZWx0YSA9IHRoaXMuZXZlbnRzW2ldLnRpY2sgLSB0aGlzLmV2ZW50c1tpIC0gMV0udGljaztcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwgZXZlbnRzIG1hdGNoaW5nIHNwZWNpZmllZCB0eXBlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFR5cGUgLSBFdmVudCB0eXBlXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVFdmVudHNCeVR5cGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlRXZlbnRzQnlUeXBlKGV2ZW50VHlwZSkge1xuICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgIHRoaXMuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50LCBpbmRleCkge1xuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gZXZlbnRUeXBlKSB7XG4gICAgICAgICAgX3RoaXM1LmV2ZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRlbXBvIG9mIHRoZSBNSURJIGZpbGUuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGJwbSAtIFRlbXBvIGluIGJlYXRzIHBlciBtaW51dGUuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzZXRUZW1wb1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRUZW1wbyhicG0pIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBUZW1wb0V2ZW50KGJwbSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRpbWUgc2lnbmF0dXJlLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBudW1lcmF0b3IgLSBUb3AgbnVtYmVyIG9mIHRoZSB0aW1lIHNpZ25hdHVyZS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGVub21pbmF0b3IgLSBCb3R0b20gbnVtYmVyIG9mIHRoZSB0aW1lIHNpZ25hdHVyZS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWlkaWNsb2Nrc3BlcnRpY2sgLSBEZWZhdWx0cyB0byAyNC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbm90ZXNwZXJtaWRpY2xvY2sgLSBEZWZhdWx0cyB0byA4LlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2V0VGltZVNpZ25hdHVyZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRUaW1lU2lnbmF0dXJlKG51bWVyYXRvciwgZGVub21pbmF0b3IsIG1pZGljbG9ja3NwZXJ0aWNrLCBub3Rlc3Blcm1pZGljbG9jaykge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IFRpbWVTaWduYXR1cmVFdmVudChudW1lcmF0b3IsIGRlbm9taW5hdG9yLCBtaWRpY2xvY2tzcGVydGljaywgbm90ZXNwZXJtaWRpY2xvY2spKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyBrZXkgc2lnbmF0dXJlLlxuICAgICAqIEBwYXJhbSB7Kn0gc2YgLVxuICAgICAqIEBwYXJhbSB7Kn0gbWkgLVxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2V0S2V5U2lnbmF0dXJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEtleVNpZ25hdHVyZShzZiwgbWkpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBLZXlTaWduYXR1cmVFdmVudChzZiwgbWkpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyB0ZXh0IHRvIE1JREkgZmlsZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRleHQgdG8gYWRkLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkVGV4dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRUZXh0KHRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBUZXh0RXZlbnQodGV4dCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGNvcHlyaWdodCB0byBNSURJIGZpbGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUZXh0IG9mIGNvcHlyaWdodCBsaW5lLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkQ29weXJpZ2h0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZENvcHlyaWdodCh0ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgQ29weXJpZ2h0RXZlbnQodGV4dCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIFNlcXVlbmNlL1RyYWNrIE5hbWUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUZXh0IG9mIHRyYWNrIG5hbWUuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhZGRUcmFja05hbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkVHJhY2tOYW1lKHRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBUcmFja05hbWVFdmVudCh0ZXh0KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgaW5zdHJ1bWVudCBuYW1lIG9mIHRyYWNrLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gTmFtZSBvZiBpbnN0cnVtZW50LlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkSW5zdHJ1bWVudE5hbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkSW5zdHJ1bWVudE5hbWUodGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IEluc3RydW1lbnROYW1lRXZlbnQodGV4dCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIG1hcmtlciB0byBNSURJIGZpbGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBNYXJrZXIgdGV4dC5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFkZE1hcmtlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRNYXJrZXIodGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IE1hcmtlckV2ZW50KHRleHQpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBjdWUgcG9pbnQgdG8gTUlESSBmaWxlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCBvZiBjdWUgcG9pbnQuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhZGRDdWVQb2ludFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRDdWVQb2ludCh0ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgQ3VlUG9pbnRFdmVudCh0ZXh0KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgbHlyaWMgdG8gTUlESSBmaWxlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gTHlyaWMgdGV4dCB0byBhZGQuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhZGRMeXJpY1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRMeXJpYyh0ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgTHlyaWNFdmVudCh0ZXh0KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoYW5uZWwgbW9kZSBtZXNzYWdlc1xuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicG9seU1vZGVPblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwb2x5TW9kZU9uKCkge1xuICAgICAgdmFyIGV2ZW50ID0gbmV3IE5vdGVPbkV2ZW50KHtcbiAgICAgICAgZGF0YTogWzB4MDAsIDB4QjAsIDB4N0UsIDB4MDBdXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KGV2ZW50KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyBhIHBpdGNoIGJlbmQuXG4gICAgICogQHBhcmFtIHtmbG9hdH0gYmVuZCAtIEJlbmQgdmFsdWUgcmFuZ2luZyBbLTEsMV0sIHplcm8gbWVhbmluZyBubyBiZW5kLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2V0UGl0Y2hCZW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFBpdGNoQmVuZChiZW5kKSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgUGl0Y2hCZW5kRXZlbnQoe1xuICAgICAgICBiZW5kOiBiZW5kXG4gICAgICB9KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBjb250cm9sbGVyIGNoYW5nZSBldmVudFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIgLSBDb250cm9sIG51bWJlci5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSBDb250cm9sIHZhbHVlLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY29udHJvbGxlckNoYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb250cm9sbGVyQ2hhbmdlKG51bWJlciwgdmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBDb250cm9sbGVyQ2hhbmdlRXZlbnQoe1xuICAgICAgICBjb250cm9sbGVyTnVtYmVyOiBudW1iZXIsXG4gICAgICAgIGNvbnRyb2xsZXJWYWx1ZTogdmFsdWVcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVHJhY2s7XG59KCk7XG5cbnZhciBWZXhGbG93ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVmV4RmxvdygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVmV4Rmxvdyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVmV4RmxvdywgW3tcbiAgICBrZXk6IFwidHJhY2tGcm9tVm9pY2VcIixcbiAgICB2YWx1ZTpcbiAgICAvKipcbiAgICAgKiBTdXBwb3J0IGZvciBjb252ZXJ0aW5nIFZleEZsb3cgdm9pY2UgaW50byBNaWRpV3JpdGVySlMgdHJhY2tcbiAgICAgKiBAcmV0dXJuIE1pZGlXcml0ZXIuVHJhY2sgb2JqZWN0XG4gICAgICovXG4gICAgZnVuY3Rpb24gdHJhY2tGcm9tVm9pY2Uodm9pY2UpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7XG4gICAgICAgIGFkZFJlbmRlcmVkQWNjaWRlbnRhbHM6IGZhbHNlXG4gICAgICB9O1xuICAgICAgdmFyIHRyYWNrID0gbmV3IFRyYWNrKCk7XG4gICAgICB2YXIgd2FpdCA9IFtdO1xuICAgICAgdm9pY2UudGlja2FibGVzLmZvckVhY2goZnVuY3Rpb24gKHRpY2thYmxlKSB7XG4gICAgICAgIGlmICh0aWNrYWJsZS5ub3RlVHlwZSA9PT0gJ24nKSB7XG4gICAgICAgICAgdHJhY2suYWRkRXZlbnQobmV3IE5vdGVFdmVudCh7XG4gICAgICAgICAgICBwaXRjaDogdGlja2FibGUua2V5cy5tYXAoZnVuY3Rpb24gKHBpdGNoLCBpbmRleCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuY29udmVydFBpdGNoKHBpdGNoLCBpbmRleCwgdGlja2FibGUsIG9wdGlvbnMuYWRkUmVuZGVyZWRBY2NpZGVudGFscyk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBfdGhpcy5jb252ZXJ0RHVyYXRpb24odGlja2FibGUpLFxuICAgICAgICAgICAgd2FpdDogd2FpdFxuICAgICAgICAgIH0pKTsgLy8gcmVzZXQgd2FpdFxuXG4gICAgICAgICAgd2FpdCA9IFtdO1xuICAgICAgICB9IGVsc2UgaWYgKHRpY2thYmxlLm5vdGVUeXBlID09PSAncicpIHtcbiAgICAgICAgICAvLyBtb3ZlIG9uIHRvIHRoZSBuZXh0IHRpY2thYmxlIGFuZCBhZGQgdGhpcyB0byB0aGUgc3RhY2tcbiAgICAgICAgICAvLyBvZiB0aGUgYHdhaXRgIHByb3BlcnR5IGZvciB0aGUgbmV4dCBub3RlIGV2ZW50XG4gICAgICAgICAgd2FpdC5wdXNoKF90aGlzLmNvbnZlcnREdXJhdGlvbih0aWNrYWJsZSkpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSk7IC8vIFRoZXJlIG1heSBiZSBvdXRzdGFuZGluZyByZXN0cyBhdCB0aGUgZW5kIG9mIHRoZSB0cmFjayxcbiAgICAgIC8vIHBhZCB3aXRoIGEgZ2hvc3Qgbm90ZSAoemVybyBkdXJhdGlvbiBhbmQgdmVsb2NpdHkpLCBqdXN0IHRvIGNhcHR1cmUgdGhlIHdhaXQuXG5cbiAgICAgIGlmICh3YWl0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgdHJhY2suYWRkRXZlbnQobmV3IE5vdGVFdmVudCh7XG4gICAgICAgICAgcGl0Y2g6ICdbYzRdJyxcbiAgICAgICAgICBkdXJhdGlvbjogJzAnLFxuICAgICAgICAgIHdhaXQ6IHdhaXQsXG4gICAgICAgICAgdmVsb2NpdHk6ICcwJ1xuICAgICAgICB9KSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cmFjaztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgVmV4RmxvdyBwaXRjaCBzeW50YXggdG8gTWlkaVdyaXRlckpTIHN5bnRheFxuICAgICAqIEBwYXJhbSBwaXRjaCBzdHJpbmdcbiAgICAgKiBAcGFyYW0gaW5kZXggcGl0Y2ggaW5kZXhcbiAgICAgKiBAcGFyYW0gbm90ZSBzdHJ1Y3QgZnJvbSBWZXhmbG93XG4gICAgICogQHBhcmFtIGFkZFJlbmRlcmVkQWNjaWRlbnRhbHMgYWRkcyBWZXhmbG93IHJlbmRlcmVkIGFjY2lkZW50YWxzXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjb252ZXJ0UGl0Y2hcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29udmVydFBpdGNoKHBpdGNoLCBpbmRleCwgbm90ZSkge1xuICAgICAgdmFyIGFkZFJlbmRlcmVkQWNjaWRlbnRhbHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IGZhbHNlO1xuICAgICAgLy8gU3BsaXRzIG5vdGUgbmFtZSBmcm9tIG9jdGF2ZVxuICAgICAgdmFyIHBpdGNoUGFydHMgPSBwaXRjaC5zcGxpdCgnLycpOyAvLyBSZXRyaWV2ZXMgYWNjaWRlbnRhbHMgZnJvbSBwaXRjaFxuICAgICAgLy8gUmVtb3ZlcyBuYXR1cmFsIGFjY2lkZW50YWxzIHNpbmNlIHRoZXkgYXJlIG5vdCBhY2NlcHRlZCBpbiBUb25hbCBNaWRpXG5cbiAgICAgIHZhciBhY2NpZGVudGFscyA9IHBpdGNoUGFydHNbMF0uc3Vic3RyaW5nKDEpLnJlcGxhY2UoJ24nLCAnJyk7XG5cbiAgICAgIGlmIChhZGRSZW5kZXJlZEFjY2lkZW50YWxzKSB7XG4gICAgICAgIHZhciBfbm90ZSRnZXRBY2NpZGVudGFscztcblxuICAgICAgICAoX25vdGUkZ2V0QWNjaWRlbnRhbHMgPSBub3RlLmdldEFjY2lkZW50YWxzKCkpID09PSBudWxsIHx8IF9ub3RlJGdldEFjY2lkZW50YWxzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbm90ZSRnZXRBY2NpZGVudGFscy5mb3JFYWNoKGZ1bmN0aW9uIChhY2NpZGVudGFsKSB7XG4gICAgICAgICAgaWYgKGFjY2lkZW50YWwuaW5kZXggPT09IGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoYWNjaWRlbnRhbC50eXBlID09PSAnbicpIHtcbiAgICAgICAgICAgICAgYWNjaWRlbnRhbHMgPSAnJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGFjY2lkZW50YWxzICs9IGFjY2lkZW50YWwudHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGl0Y2hQYXJ0c1swXVswXSArIGFjY2lkZW50YWxzICsgcGl0Y2hQYXJ0c1sxXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgVmV4RmxvdyBkdXJhdGlvbiBzeW50YXggdG8gTWlkaVdyaXRlckpTIHN5bnRheFxuICAgICAqIEBwYXJhbSBub3RlIHN0cnVjdCBmcm9tIFZleEZsb3dcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNvbnZlcnREdXJhdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb252ZXJ0RHVyYXRpb24obm90ZSkge1xuICAgICAgcmV0dXJuICdkJy5yZXBlYXQobm90ZS5kb3RzKSArIHRoaXMuY29udmVydEJhc2VEdXJhdGlvbihub3RlLmR1cmF0aW9uKSArIChub3RlLnR1cGxldCA/ICd0JyArIG5vdGUudHVwbGV0Lm51bV9ub3RlcyA6ICcnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgVmV4RmxvdyBiYXNlIGR1cmF0aW9uIHN5bnRheCB0byBNaWRpV3JpdGVySlMgc3ludGF4XG4gICAgICogQHBhcmFtIGR1cmF0aW9uIFZleGZsb3cgZHVyYXRpb25cbiAgICAgKiBAcmV0dXJucyBNaWRpV3JpdGVySlMgZHVyYXRpb25cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNvbnZlcnRCYXNlRHVyYXRpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29udmVydEJhc2VEdXJhdGlvbihkdXJhdGlvbikge1xuICAgICAgc3dpdGNoIChkdXJhdGlvbikge1xuICAgICAgICBjYXNlICd3JzpcbiAgICAgICAgICByZXR1cm4gJzEnO1xuXG4gICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICAgIHJldHVybiAnMic7XG5cbiAgICAgICAgY2FzZSAncSc6XG4gICAgICAgICAgcmV0dXJuICc0JztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBkdXJhdGlvbjtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVmV4Rmxvdztcbn0oKTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSBoZWFkZXIgY2h1bmsgc2VjdGlvbiBvZiBhIE1JREkgZmlsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXJPZlRyYWNrcyAtIE51bWJlciBvZiB0cmFja3NcbiAqIEByZXR1cm4ge0hlYWRlckNodW5rfVxuICovXG5cbnZhciBIZWFkZXJDaHVuayA9IGZ1bmN0aW9uIEhlYWRlckNodW5rKG51bWJlck9mVHJhY2tzKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIZWFkZXJDaHVuayk7XG5cbiAgdGhpcy50eXBlID0gQ29uc3RhbnRzLkhFQURFUl9DSFVOS19UWVBFO1xuICB2YXIgdHJhY2tUeXBlID0gbnVtYmVyT2ZUcmFja3MgPiAxID8gQ29uc3RhbnRzLkhFQURFUl9DSFVOS19GT1JNQVQxIDogQ29uc3RhbnRzLkhFQURFUl9DSFVOS19GT1JNQVQwO1xuICB0aGlzLmRhdGEgPSB0cmFja1R5cGUuY29uY2F0KFV0aWxzLm51bWJlclRvQnl0ZXMobnVtYmVyT2ZUcmFja3MsIDIpLCAvLyB0d28gYnl0ZXMgbG9uZyxcbiAgQ29uc3RhbnRzLkhFQURFUl9DSFVOS19ESVZJU0lPTik7XG4gIHRoaXMuc2l6ZSA9IFswLCAwLCAwLCB0aGlzLmRhdGEubGVuZ3RoXTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHRoYXQgcHV0cyB0b2dldGhlciB0cmFja3MgYW5kIHByb3ZpZGVzIG1ldGhvZHMgZm9yIGZpbGUgb3V0cHV0LlxuICogQHBhcmFtIHthcnJheXxUcmFja30gdHJhY2tzIC0gQSBzaW5nbGUge1RyYWNrfSBvYmplY3Qgb3IgYW4gYXJyYXkgb2Yge1RyYWNrfSBvYmplY3RzLlxuICogQHJldHVybiB7V3JpdGVyfVxuICovXG5cbnZhciBXcml0ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBXcml0ZXIodHJhY2tzKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBXcml0ZXIpO1xuXG4gICAgLy8gRW5zdXJlIHRyYWNrIGlzIGFuIGFycmF5XG4gICAgdHJhY2tzID0gVXRpbHMudG9BcnJheSh0cmFja3MpO1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIHRoaXMuZGF0YS5wdXNoKG5ldyBIZWFkZXJDaHVuayh0cmFja3MubGVuZ3RoKSk7IC8vIEZvciBlYWNoIHRyYWNrIGFkZCBmaW5hbCBlbmQgb2YgdHJhY2sgZXZlbnQgYW5kIGJ1aWxkIGRhdGFcblxuICAgIHRyYWNrcy5mb3JFYWNoKGZ1bmN0aW9uICh0cmFjaywgaSkge1xuICAgICAgX3RoaXMuZGF0YS5wdXNoKHRyYWNrLmJ1aWxkRGF0YSgpKTtcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogQnVpbGRzIHRoZSBmaWxlIGludG8gYSBVaW50OEFycmF5XG4gICAqIEByZXR1cm4ge1VpbnQ4QXJyYXl9XG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKFdyaXRlciwgW3tcbiAgICBrZXk6IFwiYnVpbGRGaWxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJ1aWxkRmlsZSgpIHtcbiAgICAgIHZhciBidWlsZCA9IFtdOyAvLyBEYXRhIGNvbnNpc3RzIG9mIGNodW5rcyB3aGljaCBjb25zaXN0cyBvZiBkYXRhXG5cbiAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBidWlsZCA9IGJ1aWxkLmNvbmNhdChkLnR5cGUsIGQuc2l6ZSwgZC5kYXRhKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGJ1aWxkKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVydCBmaWxlIGJ1ZmZlciB0byBhIGJhc2U2NCBzdHJpbmcuICBEaWZmZXJlbnQgbWV0aG9kcyBkZXBlbmRpbmcgb24gaWYgYnJvd3NlciBvciBub2RlLlxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImJhc2U2NFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBiYXNlNjQoKSB7XG4gICAgICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHJldHVybiBidG9hKFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgdGhpcy5idWlsZEZpbGUoKSkpO1xuICAgICAgcmV0dXJuIEJ1ZmZlci5mcm9tKHRoaXMuYnVpbGRGaWxlKCkpLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBkYXRhIFVSSS5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkYXRhVXJpXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRhdGFVcmkoKSB7XG4gICAgICByZXR1cm4gJ2RhdGE6YXVkaW8vbWlkaTtiYXNlNjQsJyArIHRoaXMuYmFzZTY0KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE91dHB1dCB0byBzdGRvdXRcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzdGRvdXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3Rkb3V0KCkge1xuICAgICAgcmV0dXJuIHByb2Nlc3Muc3Rkb3V0LndyaXRlKG5ldyBCdWZmZXIodGhpcy5idWlsZEZpbGUoKSkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBXcml0ZXI7XG59KCk7XG5cbnZhciBtYWluID0ge1xuICBDb25zdGFudHM6IENvbnN0YW50cyxcbiAgTm90ZU9uRXZlbnQ6IE5vdGVPbkV2ZW50LFxuICBOb3RlT2ZmRXZlbnQ6IE5vdGVPZmZFdmVudCxcbiAgTm90ZUV2ZW50OiBOb3RlRXZlbnQsXG4gIFBpdGNoQmVuZEV2ZW50OiBQaXRjaEJlbmRFdmVudCxcbiAgUHJvZ3JhbUNoYW5nZUV2ZW50OiBQcm9ncmFtQ2hhbmdlRXZlbnQsXG4gIFRyYWNrOiBUcmFjayxcbiAgVXRpbHM6IFV0aWxzLFxuICBWZXhGbG93OiBWZXhGbG93LFxuICBXcml0ZXI6IFdyaXRlclxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtYWluO1xuIiwgInZhciBNaWRpID0ge307XG5cbihmdW5jdGlvbihleHBvcnRlZCkge1xuXG5cdHZhciBERUZBVUxUX1ZPTFVNRSAgID0gZXhwb3J0ZWQuREVGQVVMVF9WT0xVTUUgICA9IDkwO1xuXHR2YXIgREVGQVVMVF9EVVJBVElPTiA9IGV4cG9ydGVkLkRFRkFVTFRfRFVSQVRJT04gPSAxMjg7XG5cdHZhciBERUZBVUxUX0NIQU5ORUwgID0gZXhwb3J0ZWQuREVGQVVMVF9DSEFOTkVMICA9IDA7XG5cblx0LyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdCAqIFV0aWxpdHkgZnVuY3Rpb25zXG5cdCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuXHR2YXIgVXRpbCA9IHtcblxuXHRcdG1pZGlfbGV0dGVyX3BpdGNoZXM6IHsgYToyMSwgYjoyMywgYzoxMiwgZDoxNCwgZToxNiwgZjoxNywgZzoxOSB9LFxuXG5cdFx0LyoqXG5cdFx0ICogQ29udmVydCBhIHN5bWJvbGljIG5vdGUgbmFtZSAoZS5nLiBcImM0XCIpIHRvIGEgbnVtZXJpYyBNSURJIHBpdGNoIChlLmcuXG5cdFx0ICogNjAsIG1pZGRsZSBDKS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBuIC0gVGhlIHN5bWJvbGljIG5vdGUgbmFtZSB0byBwYXJzZS5cblx0XHQgKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgTUlESSBwaXRjaCB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSBzeW1ib2xpYyBub3RlXG5cdFx0ICogbmFtZS5cblx0XHQgKi9cblx0XHRtaWRpUGl0Y2hGcm9tTm90ZTogZnVuY3Rpb24obikge1xuXHRcdFx0dmFyIG1hdGNoZXMgPSAvKFthLWddKSgjK3xiKyk/KFswLTldKykkL2kuZXhlYyhuKTtcblx0XHRcdHZhciBub3RlID0gbWF0Y2hlc1sxXS50b0xvd2VyQ2FzZSgpLCBhY2NpZGVudGFsID0gbWF0Y2hlc1syXSB8fCAnJywgb2N0YXZlID0gcGFyc2VJbnQobWF0Y2hlc1szXSwgMTApO1xuXHRcdFx0cmV0dXJuICgxMiAqIG9jdGF2ZSkgKyBVdGlsLm1pZGlfbGV0dGVyX3BpdGNoZXNbbm90ZV0gKyAoYWNjaWRlbnRhbC5zdWJzdHIoMCwxKT09JyMnPzE6LTEpICogYWNjaWRlbnRhbC5sZW5ndGg7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIEVuc3VyZSB0aGF0IHRoZSBnaXZlbiBhcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gYSBNSURJIHBpdGNoLiBOb3RlIHRoYXRcblx0XHQgKiBpdCBtYXkgYWxyZWFkeSBiZSBvbmUgKGluY2x1ZGluZyBhIHB1cmVseSBudW1lcmljIHN0cmluZykuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IHAgLSBUaGUgcGl0Y2ggdG8gY29udmVydC5cblx0XHQgKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgcmVzdWx0aW5nIG51bWVyaWMgTUlESSBwaXRjaC5cblx0XHQgKi9cblx0XHRlbnN1cmVNaWRpUGl0Y2g6IGZ1bmN0aW9uKHApIHtcblx0XHRcdGlmICh0eXBlb2YgcCA9PSAnbnVtYmVyJyB8fCAhL1teMC05XS8udGVzdChwKSkge1xuXHRcdFx0XHQvLyBudW1lcmljIHBpdGNoXG5cdFx0XHRcdHJldHVybiBwYXJzZUludChwLCAxMCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBhc3N1bWUgaXQncyBhIG5vdGUgbmFtZVxuXHRcdFx0XHRyZXR1cm4gVXRpbC5taWRpUGl0Y2hGcm9tTm90ZShwKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0bWlkaV9waXRjaGVzX2xldHRlcjogeyAnMTInOidjJywgJzEzJzonYyMnLCAnMTQnOidkJywgJzE1JzonZCMnLCAnMTYnOidlJywgJzE3JzonZicsICcxOCc6J2YjJywgJzE5JzonZycsICcyMCc6J2cjJywgJzIxJzonYScsICcyMic6J2EjJywgJzIzJzonYicgfSxcblx0XHRtaWRpX2ZsYXR0ZW5lZF9ub3RlczogeyAnYSMnOidiYicsICdjIyc6J2RiJywgJ2QjJzonZWInLCAnZiMnOidnYicsICdnIyc6J2FiJyB9LFxuXG5cdFx0LyoqXG5cdFx0ICogQ29udmVydCBhIG51bWVyaWMgTUlESSBwaXRjaCB2YWx1ZSAoZS5nLiA2MCkgdG8gYSBzeW1ib2xpYyBub3RlIG5hbWVcblx0XHQgKiAoZS5nLiBcImM0XCIpLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IG4gLSBUaGUgbnVtZXJpYyBNSURJIHBpdGNoIHZhbHVlIHRvIGNvbnZlcnQuXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbcmV0dXJuRmxhdHRlbmVkPWZhbHNlXSAtIFdoZXRoZXIgdG8gcHJlZmVyIGZsYXR0ZW5lZFxuXHRcdCAqIG5vdGVzIHRvIHNoYXJwZW5lZCBvbmVzLiBPcHRpb25hbCwgZGVmYXVsdCBmYWxzZS5cblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcmVzdWx0aW5nIHN5bWJvbGljIG5vdGUgbmFtZS5cblx0XHQgKi9cblx0XHRub3RlRnJvbU1pZGlQaXRjaDogZnVuY3Rpb24obiwgcmV0dXJuRmxhdHRlbmVkKSB7XG5cdFx0XHR2YXIgb2N0YXZlID0gMCwgbm90ZU51bSA9IG4sIG5vdGVOYW1lLCByZXR1cm5GbGF0dGVuZWQgPSByZXR1cm5GbGF0dGVuZWQgfHwgZmFsc2U7XG5cdFx0XHRpZiAobiA+IDIzKSB7XG5cdFx0XHRcdC8vIG5vdGVOdW0gaXMgb24gb2N0YXZlIDEgb3IgbW9yZVxuXHRcdFx0XHRvY3RhdmUgPSBNYXRoLmZsb29yKG4vMTIpIC0gMTtcblx0XHRcdFx0Ly8gc3VidHJhY3QgbnVtYmVyIG9mIG9jdGF2ZXMgZnJvbSBub3RlTnVtXG5cdFx0XHRcdG5vdGVOdW0gPSBuIC0gb2N0YXZlICogMTI7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGdldCBub3RlIG5hbWUgKGMjLCBkLCBmIyBldGMpXG5cdFx0XHRub3RlTmFtZSA9IFV0aWwubWlkaV9waXRjaGVzX2xldHRlcltub3RlTnVtXTtcblx0XHRcdC8vIFVzZSBmbGF0dGVuZWQgbm90ZXMgaWYgcmVxdWVzdGVkIChlLmcuIGYjIHNob3VsZCBiZSBvdXRwdXQgYXMgZ2IpXG5cdFx0XHRpZiAocmV0dXJuRmxhdHRlbmVkICYmIG5vdGVOYW1lLmluZGV4T2YoJyMnKSA+IDApIHtcblx0XHRcdFx0bm90ZU5hbWUgPSBVdGlsLm1pZGlfZmxhdHRlbmVkX25vdGVzW25vdGVOYW1lXTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBub3RlTmFtZSArIG9jdGF2ZTtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogQ29udmVydCBiZWF0cyBwZXIgbWludXRlIChCUE0pIHRvIG1pY3Jvc2Vjb25kcyBwZXIgcXVhcnRlciBub3RlIChNUFFOKS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBicG0gLSBBIG51bWJlciBpbiBiZWF0cyBwZXIgbWludXRlLlxuXHRcdCAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgbWljcm9zZWNvbmRzIHBlciBxdWFydGVyIG5vdGUuXG5cdFx0ICovXG5cdFx0bXBxbkZyb21CcG06IGZ1bmN0aW9uKGJwbSkge1xuXHRcdFx0dmFyIG1wcW4gPSBNYXRoLmZsb29yKDYwMDAwMDAwIC8gYnBtKTtcblx0XHRcdHZhciByZXQ9W107XG5cdFx0XHRkbyB7XG5cdFx0XHRcdHJldC51bnNoaWZ0KG1wcW4gJiAweEZGKTtcblx0XHRcdFx0bXBxbiA+Pj0gODtcblx0XHRcdH0gd2hpbGUgKG1wcW4pO1xuXHRcdFx0d2hpbGUgKHJldC5sZW5ndGggPCAzKSB7XG5cdFx0XHRcdHJldC5wdXNoKDApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJldDtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogQ29udmVydCBtaWNyb3NlY29uZHMgcGVyIHF1YXJ0ZXIgbm90ZSAoTVBRTikgdG8gYmVhdHMgcGVyIG1pbnV0ZSAoQlBNKS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBtcHFuIC0gVGhlIG51bWJlciBvZiBtaWNyb3NlY29uZHMgcGVyIHF1YXJ0ZXIgbm90ZS5cblx0XHQgKiBAcmV0dXJucyB7bnVtYmVyfSBBIG51bWJlciBpbiBiZWF0cyBwZXIgbWludXRlLlxuXHRcdCAqL1xuXHRcdGJwbUZyb21NcHFuOiBmdW5jdGlvbihtcHFuKSB7XG5cdFx0XHR2YXIgbSA9IG1wcW47XG5cdFx0XHRpZiAodHlwZW9mIG1wcW5bMF0gIT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0bSA9IDA7XG5cdFx0XHRcdGZvciAodmFyIGk9MCwgbD1tcHFuLmxlbmd0aC0xOyBsID49IDA7ICsraSwgLS1sKSB7XG5cdFx0XHRcdFx0bSB8PSBtcHFuW2ldIDw8IGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBNYXRoLmZsb29yKDYwMDAwMDAwIC8gbXBxbik7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIENvbnZlcnRzIGFuIGFycmF5IG9mIGJ5dGVzIHRvIGEgc3RyaW5nIG9mIGhleGFkZWNpbWFsIGNoYXJhY3RlcnMuIFByZXBhcmVzXG5cdFx0ICogaXQgdG8gYmUgY29udmVydGVkIGludG8gYSBiYXNlNjQgc3RyaW5nLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtBcnJheX0gYnl0ZUFycmF5IC0gQXJyYXkgb2YgYnl0ZXMgdG8gYmUgY29udmVydGVkLlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9IEhleGFkZWNpbWFsIHN0cmluZywgZS5nLiBcIjA5N0I4QVwiLlxuXHRcdCAqL1xuXHRcdGNvZGVzMlN0cjogZnVuY3Rpb24oYnl0ZUFycmF5KSB7XG5cdFx0XHRyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBieXRlQXJyYXkpO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBDb252ZXJ0cyBhIHN0cmluZyBvZiBoZXhhZGVjaW1hbCB2YWx1ZXMgdG8gYW4gYXJyYXkgb2YgYnl0ZXMuIEl0IGNhbiBhbHNvXG5cdFx0ICogYWRkIHJlbWFpbmluZyBcIjBcIiBuaWJibGVzIGluIG9yZGVyIHRvIGhhdmUgZW5vdWdoIGJ5dGVzIGluIHRoZSBhcnJheSBhcyB0aGVcblx0XHQgKiBgZmluYWxCeXRlc2AgcGFyYW1ldGVyLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIHN0cmluZyBvZiBoZXhhZGVjaW1hbCB2YWx1ZXMgZS5nLiBcIjA5N0I4QVwiXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IFtmaW5hbEJ5dGVzXSAtIE9wdGlvbmFsLiBUaGUgZGVzaXJlZCBudW1iZXIgb2YgYnl0ZXNcblx0XHQgKiAobm90IG5pYmJsZXMpIHRoYXQgdGhlIHJldHVybmVkIGFycmF5IHNob3VsZCBjb250YWluLlxuXHRcdCAqIEByZXR1cm5zIHtBcnJheX0gQW4gYXJyYXkgb2YgbmliYmxlcy5cblx0XHQgKi9cblx0XHRzdHIyQnl0ZXM6IGZ1bmN0aW9uIChzdHIsIGZpbmFsQnl0ZXMpIHtcblx0XHRcdGlmIChmaW5hbEJ5dGVzKSB7XG5cdFx0XHRcdHdoaWxlICgoc3RyLmxlbmd0aCAvIDIpIDwgZmluYWxCeXRlcykgeyBzdHIgPSBcIjBcIiArIHN0cjsgfVxuXHRcdFx0fVxuXG5cdFx0XHR2YXIgYnl0ZXMgPSBbXTtcblx0XHRcdGZvciAodmFyIGk9c3RyLmxlbmd0aC0xOyBpPj0wOyBpID0gaS0yKSB7XG5cdFx0XHRcdHZhciBjaGFycyA9IGkgPT09IDAgPyBzdHJbaV0gOiBzdHJbaS0xXSArIHN0cltpXTtcblx0XHRcdFx0Ynl0ZXMudW5zaGlmdChwYXJzZUludChjaGFycywgMTYpKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGJ5dGVzO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBUcmFuc2xhdGVzIG51bWJlciBvZiB0aWNrcyB0byBNSURJIHRpbWVzdGFtcCBmb3JtYXQsIHJldHVybmluZyBhbiBhcnJheVxuXHRcdCAqIG9mIGJ5dGVzIHdpdGggdGhlIHRpbWUgdmFsdWVzLiBNSURJIGhhcyBhIHZlcnkgcGFydGljdWxhciB3YXkgdG8gZXhwcmVzc1xuXHRcdCAqIHRpbWU7IHRha2UgYSBnb29kIGxvb2sgYXQgdGhlIHNwZWMgYmVmb3JlIGV2ZXIgdG91Y2hpbmcgdGhpcyBmdW5jdGlvbi5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSB0aWNrcyAtIE51bWJlciBvZiB0aWNrcyB0byBiZSB0cmFuc2xhdGVkLlxuXHRcdCAqIEByZXR1cm5zIHtudW1iZXJ9IEFycmF5IG9mIGJ5dGVzIHRoYXQgZm9ybSB0aGUgTUlESSB0aW1lIHZhbHVlLlxuXHRcdCAqL1xuXHRcdHRyYW5zbGF0ZVRpY2tUaW1lOiBmdW5jdGlvbih0aWNrcykge1xuXHRcdFx0dmFyIGJ1ZmZlciA9IHRpY2tzICYgMHg3RjtcblxuXHRcdFx0d2hpbGUgKHRpY2tzID0gdGlja3MgPj4gNykge1xuXHRcdFx0XHRidWZmZXIgPDw9IDg7XG5cdFx0XHRcdGJ1ZmZlciB8PSAoKHRpY2tzICYgMHg3RikgfCAweDgwKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGJMaXN0ID0gW107XG5cdFx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0XHRiTGlzdC5wdXNoKGJ1ZmZlciAmIDB4ZmYpO1xuXG5cdFx0XHRcdGlmIChidWZmZXIgJiAweDgwKSB7IGJ1ZmZlciA+Pj0gODsgfVxuXHRcdFx0XHRlbHNlIHsgYnJlYWs7IH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBiTGlzdDtcblx0XHR9LFxuXG5cdH07XG5cblx0LyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdCAqIEV2ZW50IGNsYXNzXG5cdCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuXHQvKipcblx0ICogQ29uc3RydWN0IGEgTUlESSBldmVudC5cblx0ICpcblx0ICogUGFyYW1ldGVycyBpbmNsdWRlOlxuXHQgKiAgLSB0aW1lIFtvcHRpb25hbCBudW1iZXJdIC0gVGlja3Mgc2luY2UgcHJldmlvdXMgZXZlbnQuXG5cdCAqICAtIHR5cGUgW3JlcXVpcmVkIG51bWJlcl0gLSBUeXBlIG9mIGV2ZW50LlxuXHQgKiAgLSBjaGFubmVsIFtyZXF1aXJlZCBudW1iZXJdIC0gQ2hhbm5lbCBmb3IgdGhlIGV2ZW50LlxuXHQgKiAgLSBwYXJhbTEgW3JlcXVpcmVkIG51bWJlcl0gLSBGaXJzdCBldmVudCBwYXJhbWV0ZXIuXG5cdCAqICAtIHBhcmFtMiBbb3B0aW9uYWwgbnVtYmVyXSAtIFNlY29uZCBldmVudCBwYXJhbWV0ZXIuXG5cdCAqL1xuXHR2YXIgTWlkaUV2ZW50ID0gZnVuY3Rpb24ocGFyYW1zKSB7XG5cdFx0aWYgKCF0aGlzKSByZXR1cm4gbmV3IE1pZGlFdmVudChwYXJhbXMpO1xuXHRcdGlmIChwYXJhbXMgJiZcblx0XHRcdFx0KHBhcmFtcy50eXBlICAgICE9PSBudWxsIHx8IHBhcmFtcy50eXBlICAgICE9PSB1bmRlZmluZWQpICYmXG5cdFx0XHRcdChwYXJhbXMuY2hhbm5lbCAhPT0gbnVsbCB8fCBwYXJhbXMuY2hhbm5lbCAhPT0gdW5kZWZpbmVkKSAmJlxuXHRcdFx0XHQocGFyYW1zLnBhcmFtMSAgIT09IG51bGwgfHwgcGFyYW1zLnBhcmFtMSAgIT09IHVuZGVmaW5lZCkpIHtcblx0XHRcdHRoaXMuc2V0VGltZShwYXJhbXMudGltZSk7XG5cdFx0XHR0aGlzLnNldFR5cGUocGFyYW1zLnR5cGUpO1xuXHRcdFx0dGhpcy5zZXRDaGFubmVsKHBhcmFtcy5jaGFubmVsKTtcblx0XHRcdHRoaXMuc2V0UGFyYW0xKHBhcmFtcy5wYXJhbTEpO1xuXHRcdFx0dGhpcy5zZXRQYXJhbTIocGFyYW1zLnBhcmFtMik7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIGV2ZW50IGNvZGVzXG5cdE1pZGlFdmVudC5OT1RFX09GRiAgICAgICAgICAgPSAweDgwO1xuXHRNaWRpRXZlbnQuTk9URV9PTiAgICAgICAgICAgID0gMHg5MDtcblx0TWlkaUV2ZW50LkFGVEVSX1RPVUNIICAgICAgICA9IDB4QTA7XG5cdE1pZGlFdmVudC5DT05UUk9MTEVSICAgICAgICAgPSAweEIwO1xuXHRNaWRpRXZlbnQuUFJPR1JBTV9DSEFOR0UgICAgID0gMHhDMDtcblx0TWlkaUV2ZW50LkNIQU5ORUxfQUZURVJUT1VDSCA9IDB4RDA7XG5cdE1pZGlFdmVudC5QSVRDSF9CRU5EICAgICAgICAgPSAweEUwO1xuXG5cblx0LyoqXG5cdCAqIFNldCB0aGUgdGltZSBmb3IgdGhlIGV2ZW50IGluIHRpY2tzIHNpbmNlIHRoZSBwcmV2aW91cyBldmVudC5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHRpY2tzIC0gVGhlIG51bWJlciBvZiB0aWNrcyBzaW5jZSB0aGUgcHJldmlvdXMgZXZlbnQuIE1heVxuXHQgKiBiZSB6ZXJvLlxuXHQgKi9cblx0TWlkaUV2ZW50LnByb3RvdHlwZS5zZXRUaW1lID0gZnVuY3Rpb24odGlja3MpIHtcblx0XHR0aGlzLnRpbWUgPSBVdGlsLnRyYW5zbGF0ZVRpY2tUaW1lKHRpY2tzIHx8IDApO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIHR5cGUgb2YgdGhlIGV2ZW50LiBNdXN0IGJlIG9uZSBvZiB0aGUgZXZlbnQgY29kZXMgb24gTWlkaUV2ZW50LlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gdHlwZSAtIEV2ZW50IHR5cGUuXG5cdCAqL1xuXHRNaWRpRXZlbnQucHJvdG90eXBlLnNldFR5cGUgPSBmdW5jdGlvbih0eXBlKSB7XG5cdFx0aWYgKHR5cGUgPCBNaWRpRXZlbnQuTk9URV9PRkYgfHwgdHlwZSA+IE1pZGlFdmVudC5QSVRDSF9CRU5EKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUcnlpbmcgdG8gc2V0IGFuIHVua25vd24gZXZlbnQ6IFwiICsgdHlwZSk7XG5cdFx0fVxuXG5cdFx0dGhpcy50eXBlID0gdHlwZTtcblx0fTtcblxuXHQvKipcblx0ICogU2V0IHRoZSBjaGFubmVsIGZvciB0aGUgZXZlbnQuIE11c3QgYmUgYmV0d2VlbiAwIGFuZCAxNSwgaW5jbHVzaXZlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gY2hhbm5lbCAtIFRoZSBldmVudCBjaGFubmVsLlxuXHQgKi9cblx0TWlkaUV2ZW50LnByb3RvdHlwZS5zZXRDaGFubmVsID0gZnVuY3Rpb24oY2hhbm5lbCkge1xuXHRcdGlmIChjaGFubmVsIDwgMCB8fCBjaGFubmVsID4gMTUpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkNoYW5uZWwgaXMgb3V0IG9mIGJvdW5kcy5cIik7XG5cdFx0fVxuXG5cdFx0dGhpcy5jaGFubmVsID0gY2hhbm5lbDtcblx0fTtcblxuXHQvKipcblx0ICogU2V0IHRoZSBmaXJzdCBwYXJhbWV0ZXIgZm9yIHRoZSBldmVudC4gTXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDI1NSxcblx0ICogaW5jbHVzaXZlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gcCAtIFRoZSBmaXJzdCBldmVudCBwYXJhbWV0ZXIgdmFsdWUuXG5cdCAqL1xuXHRNaWRpRXZlbnQucHJvdG90eXBlLnNldFBhcmFtMSA9IGZ1bmN0aW9uKHApIHtcblx0XHR0aGlzLnBhcmFtMSA9IHA7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNldCB0aGUgc2Vjb25kIHBhcmFtZXRlciBmb3IgdGhlIGV2ZW50LiBNdXN0IGJlIGJldHdlZW4gMCBhbmQgMjU1LFxuXHQgKiBpbmNsdXNpdmUuXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBwIC0gVGhlIHNlY29uZCBldmVudCBwYXJhbWV0ZXIgdmFsdWUuXG5cdCAqL1xuXHRNaWRpRXZlbnQucHJvdG90eXBlLnNldFBhcmFtMiA9IGZ1bmN0aW9uKHApIHtcblx0XHR0aGlzLnBhcmFtMiA9IHA7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNlcmlhbGl6ZSB0aGUgZXZlbnQgdG8gYW4gYXJyYXkgb2YgYnl0ZXMuXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gVGhlIGFycmF5IG9mIHNlcmlhbGl6ZWQgYnl0ZXMuXG5cdCAqL1xuXHRNaWRpRXZlbnQucHJvdG90eXBlLnRvQnl0ZXMgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgYnl0ZUFycmF5ID0gW107XG5cblx0XHR2YXIgdHlwZUNoYW5uZWxCeXRlID0gdGhpcy50eXBlIHwgKHRoaXMuY2hhbm5lbCAmIDB4Rik7XG5cblx0XHRieXRlQXJyYXkucHVzaC5hcHBseShieXRlQXJyYXksIHRoaXMudGltZSk7XG5cdFx0Ynl0ZUFycmF5LnB1c2godHlwZUNoYW5uZWxCeXRlKTtcblx0XHRieXRlQXJyYXkucHVzaCh0aGlzLnBhcmFtMSk7XG5cblx0XHQvLyBTb21lIGV2ZW50cyBkb24ndCBoYXZlIGEgc2Vjb25kIHBhcmFtZXRlclxuXHRcdGlmICh0aGlzLnBhcmFtMiAhPT0gdW5kZWZpbmVkICYmIHRoaXMucGFyYW0yICE9PSBudWxsKSB7XG5cdFx0XHRieXRlQXJyYXkucHVzaCh0aGlzLnBhcmFtMik7XG5cdFx0fVxuXHRcdHJldHVybiBieXRlQXJyYXk7XG5cdH07XG5cblx0LyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdCAqIE1ldGFFdmVudCBjbGFzc1xuXHQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cblx0LyoqXG5cdCAqIENvbnN0cnVjdCBhIG1ldGEgZXZlbnQuXG5cdCAqXG5cdCAqIFBhcmFtZXRlcnMgaW5jbHVkZTpcblx0ICogIC0gdGltZSBbb3B0aW9uYWwgbnVtYmVyXSAtIFRpY2tzIHNpbmNlIHByZXZpb3VzIGV2ZW50LlxuXHQgKiAgLSB0eXBlIFtyZXF1aXJlZCBudW1iZXJdIC0gVHlwZSBvZiBldmVudC5cblx0ICogIC0gZGF0YSBbb3B0aW9uYWwgYXJyYXl8c3RyaW5nXSAtIEV2ZW50IGRhdGEuXG5cdCAqL1xuXHR2YXIgTWV0YUV2ZW50ID0gZnVuY3Rpb24ocGFyYW1zKSB7XG5cdFx0aWYgKCF0aGlzKSByZXR1cm4gbmV3IE1ldGFFdmVudChwYXJhbXMpO1xuXHRcdHZhciBwID0gcGFyYW1zIHx8IHt9O1xuXHRcdHRoaXMuc2V0VGltZShwYXJhbXMudGltZSk7XG5cdFx0dGhpcy5zZXRUeXBlKHBhcmFtcy50eXBlKTtcblx0XHR0aGlzLnNldERhdGEocGFyYW1zLmRhdGEpO1xuXHR9O1xuXG5cdE1ldGFFdmVudC5TRVFVRU5DRSAgID0gMHgwMDtcblx0TWV0YUV2ZW50LlRFWFQgICAgICAgPSAweDAxO1xuXHRNZXRhRXZlbnQuQ09QWVJJR0hUICA9IDB4MDI7XG5cdE1ldGFFdmVudC5UUkFDS19OQU1FID0gMHgwMztcblx0TWV0YUV2ZW50LklOU1RSVU1FTlQgPSAweDA0O1xuXHRNZXRhRXZlbnQuTFlSSUMgICAgICA9IDB4MDU7XG5cdE1ldGFFdmVudC5NQVJLRVIgICAgID0gMHgwNjtcblx0TWV0YUV2ZW50LkNVRV9QT0lOVCAgPSAweDA3O1xuXHRNZXRhRXZlbnQuQ0hBTk5FTF9QUkVGSVggPSAweDIwO1xuXHRNZXRhRXZlbnQuRU5EX09GX1RSQUNLICAgPSAweDJmO1xuXHRNZXRhRXZlbnQuVEVNUE8gICAgICA9IDB4NTE7XG5cdE1ldGFFdmVudC5TTVBURSAgICAgID0gMHg1NDtcblx0TWV0YUV2ZW50LlRJTUVfU0lHICAgPSAweDU4O1xuXHRNZXRhRXZlbnQuS0VZX1NJRyAgICA9IDB4NTk7XG5cdE1ldGFFdmVudC5TRVFfRVZFTlQgID0gMHg3ZjtcblxuXHQvKipcblx0ICogU2V0IHRoZSB0aW1lIGZvciB0aGUgZXZlbnQgaW4gdGlja3Mgc2luY2UgdGhlIHByZXZpb3VzIGV2ZW50LlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gdGlja3MgLSBUaGUgbnVtYmVyIG9mIHRpY2tzIHNpbmNlIHRoZSBwcmV2aW91cyBldmVudC4gTWF5XG5cdCAqIGJlIHplcm8uXG5cdCAqL1xuXHRNZXRhRXZlbnQucHJvdG90eXBlLnNldFRpbWUgPSBmdW5jdGlvbih0aWNrcykge1xuXHRcdHRoaXMudGltZSA9IFV0aWwudHJhbnNsYXRlVGlja1RpbWUodGlja3MgfHwgMCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNldCB0aGUgdHlwZSBvZiB0aGUgZXZlbnQuIE11c3QgYmUgb25lIG9mIHRoZSBldmVudCBjb2RlcyBvbiBNZXRhRXZlbnQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0IC0gRXZlbnQgdHlwZS5cblx0ICovXG5cdE1ldGFFdmVudC5wcm90b3R5cGUuc2V0VHlwZSA9IGZ1bmN0aW9uKHQpIHtcblx0XHR0aGlzLnR5cGUgPSB0O1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIGRhdGEgYXNzb2NpYXRlZCB3aXRoIHRoZSBldmVudC4gTWF5IGJlIGEgc3RyaW5nIG9yIGFycmF5IG9mIGJ5dGVcblx0ICogdmFsdWVzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ3xBcnJheX0gZCAtIEV2ZW50IGRhdGEuXG5cdCAqL1xuXHRNZXRhRXZlbnQucHJvdG90eXBlLnNldERhdGEgPSBmdW5jdGlvbihkKSB7XG5cdFx0dGhpcy5kYXRhID0gZDtcblx0fTtcblxuXHQvKipcblx0ICogU2VyaWFsaXplIHRoZSBldmVudCB0byBhbiBhcnJheSBvZiBieXRlcy5cblx0ICpcblx0ICogQHJldHVybnMge0FycmF5fSBUaGUgYXJyYXkgb2Ygc2VyaWFsaXplZCBieXRlcy5cblx0ICovXG5cdE1ldGFFdmVudC5wcm90b3R5cGUudG9CeXRlcyA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICghdGhpcy50eXBlKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUeXBlIGZvciBtZXRhLWV2ZW50IG5vdCBzcGVjaWZpZWQuXCIpO1xuXHRcdH1cblxuXHRcdHZhciBieXRlQXJyYXkgPSBbXTtcblx0XHRieXRlQXJyYXkucHVzaC5hcHBseShieXRlQXJyYXksIHRoaXMudGltZSk7XG5cdFx0Ynl0ZUFycmF5LnB1c2goMHhGRiwgdGhpcy50eXBlKTtcblxuXHRcdC8vIElmIGRhdGEgaXMgYW4gYXJyYXksIHdlIGFzc3VtZSB0aGF0IGl0IGNvbnRhaW5zIHNldmVyYWwgYnl0ZXMuIFdlXG5cdFx0Ly8gYXBlbmQgdGhlbSB0byBieXRlQXJyYXkuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkodGhpcy5kYXRhKSkge1xuXHRcdFx0Ynl0ZUFycmF5LnB1c2godGhpcy5kYXRhLmxlbmd0aCk7XG5cdFx0XHRieXRlQXJyYXkucHVzaC5hcHBseShieXRlQXJyYXksIHRoaXMuZGF0YSk7XG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgdGhpcy5kYXRhID09ICdudW1iZXInKSB7XG5cdFx0XHRieXRlQXJyYXkucHVzaCgxLCB0aGlzLmRhdGEpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5kYXRhICE9PSBudWxsICYmIHRoaXMuZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHQvLyBhc3N1bWUgc3RyaW5nOyBtYXkgYmUgYSBiYWQgYXNzdW1wdGlvblxuXHRcdFx0Ynl0ZUFycmF5LnB1c2godGhpcy5kYXRhLmxlbmd0aCk7XG5cdFx0XHR2YXIgZGF0YUJ5dGVzID0gdGhpcy5kYXRhLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24oeCl7IHJldHVybiB4LmNoYXJDb2RlQXQoMCkgfSk7XG5cdFx0XHRieXRlQXJyYXkucHVzaC5hcHBseShieXRlQXJyYXksIGRhdGFCeXRlcyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGJ5dGVBcnJheS5wdXNoKDApO1xuXHRcdH1cblxuXHRcdHJldHVybiBieXRlQXJyYXk7XG5cdH07XG5cblx0LyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdCAqIFRyYWNrIGNsYXNzXG5cdCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuXHQvKipcblx0ICogQ29uc3RydWN0IGEgTUlESSB0cmFjay5cblx0ICpcblx0ICogUGFyYW1ldGVycyBpbmNsdWRlOlxuXHQgKiAgLSBldmVudHMgW29wdGlvbmFsIGFycmF5XSAtIEFycmF5IG9mIGV2ZW50cyBmb3IgdGhlIHRyYWNrLlxuXHQgKi9cblx0dmFyIFRyYWNrID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0aWYgKCF0aGlzKSByZXR1cm4gbmV3IFRyYWNrKGNvbmZpZyk7XG5cdFx0dmFyIGMgPSBjb25maWcgfHwge307XG5cdFx0dGhpcy5ldmVudHMgPSBjLmV2ZW50cyB8fCBbXTtcblx0fTtcblxuXHRUcmFjay5TVEFSVF9CWVRFUyA9IFsweDRkLCAweDU0LCAweDcyLCAweDZiXTtcblx0VHJhY2suRU5EX0JZVEVTICAgPSBbMHgwMCwgMHhGRiwgMHgyRiwgMHgwMF07XG5cblx0LyoqXG5cdCAqIEFkZCBhbiBldmVudCB0byB0aGUgdHJhY2suXG5cdCAqXG5cdCAqIEBwYXJhbSB7TWlkaUV2ZW50fE1ldGFFdmVudH0gZXZlbnQgLSBUaGUgZXZlbnQgdG8gYWRkLlxuXHQgKiBAcmV0dXJucyB7VHJhY2t9IFRoZSBjdXJyZW50IHRyYWNrLlxuXHQgKi9cblx0VHJhY2sucHJvdG90eXBlLmFkZEV2ZW50ID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHR0aGlzLmV2ZW50cy5wdXNoKGV2ZW50KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHQvKipcblx0ICogQWRkIGEgbm90ZS1vbiBldmVudCB0byB0aGUgdHJhY2suXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBjaGFubmVsIC0gVGhlIGNoYW5uZWwgdG8gYWRkIHRoZSBldmVudCB0by5cblx0ICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBwaXRjaCAtIFRoZSBwaXRjaCBvZiB0aGUgbm90ZSwgZWl0aGVyIG51bWVyaWMgb3Jcblx0ICogc3ltYm9saWMuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbdGltZT0wXSAtIFRoZSBudW1iZXIgb2YgdGlja3Mgc2luY2UgdGhlIHByZXZpb3VzIGV2ZW50LFxuXHQgKiBkZWZhdWx0cyB0byAwLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gW3ZlbG9jaXR5PTkwXSAtIFRoZSB2b2x1bWUgZm9yIHRoZSBub3RlLCBkZWZhdWx0cyB0b1xuXHQgKiBERUZBVUxUX1ZPTFVNRS5cblx0ICogQHJldHVybnMge1RyYWNrfSBUaGUgY3VycmVudCB0cmFjay5cblx0ICovXG5cdFRyYWNrLnByb3RvdHlwZS5hZGROb3RlT24gPSBUcmFjay5wcm90b3R5cGUubm90ZU9uID0gZnVuY3Rpb24oY2hhbm5lbCwgcGl0Y2gsIHRpbWUsIHZlbG9jaXR5KSB7XG5cdFx0dGhpcy5ldmVudHMucHVzaChuZXcgTWlkaUV2ZW50KHtcblx0XHRcdHR5cGU6IE1pZGlFdmVudC5OT1RFX09OLFxuXHRcdFx0Y2hhbm5lbDogY2hhbm5lbCxcblx0XHRcdHBhcmFtMTogVXRpbC5lbnN1cmVNaWRpUGl0Y2gocGl0Y2gpLFxuXHRcdFx0cGFyYW0yOiB2ZWxvY2l0eSB8fCBERUZBVUxUX1ZPTFVNRSxcblx0XHRcdHRpbWU6IHRpbWUgfHwgMCxcblx0XHR9KSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0LyoqXG5cdCAqIEFkZCBhIG5vdGUtb2ZmIGV2ZW50IHRvIHRoZSB0cmFjay5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGNoYW5uZWwgLSBUaGUgY2hhbm5lbCB0byBhZGQgdGhlIGV2ZW50IHRvLlxuXHQgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IHBpdGNoIC0gVGhlIHBpdGNoIG9mIHRoZSBub3RlLCBlaXRoZXIgbnVtZXJpYyBvclxuXHQgKiBzeW1ib2xpYy5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lPTBdIC0gVGhlIG51bWJlciBvZiB0aWNrcyBzaW5jZSB0aGUgcHJldmlvdXMgZXZlbnQsXG5cdCAqIGRlZmF1bHRzIHRvIDAuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbdmVsb2NpdHk9OTBdIC0gVGhlIHZlbG9jaXR5IHRoZSBub3RlIHdhcyByZWxlYXNlZCxcblx0ICogZGVmYXVsdHMgdG8gREVGQVVMVF9WT0xVTUUuXG5cdCAqIEByZXR1cm5zIHtUcmFja30gVGhlIGN1cnJlbnQgdHJhY2suXG5cdCAqL1xuXHRUcmFjay5wcm90b3R5cGUuYWRkTm90ZU9mZiA9IFRyYWNrLnByb3RvdHlwZS5ub3RlT2ZmID0gZnVuY3Rpb24oY2hhbm5lbCwgcGl0Y2gsIHRpbWUsIHZlbG9jaXR5KSB7XG5cdFx0dGhpcy5ldmVudHMucHVzaChuZXcgTWlkaUV2ZW50KHtcblx0XHRcdHR5cGU6IE1pZGlFdmVudC5OT1RFX09GRixcblx0XHRcdGNoYW5uZWw6IGNoYW5uZWwsXG5cdFx0XHRwYXJhbTE6IFV0aWwuZW5zdXJlTWlkaVBpdGNoKHBpdGNoKSxcblx0XHRcdHBhcmFtMjogdmVsb2NpdHkgfHwgREVGQVVMVF9WT0xVTUUsXG5cdFx0XHR0aW1lOiB0aW1lIHx8IDAsXG5cdFx0fSkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBBZGQgYSBub3RlLW9uIGFuZCAtb2ZmIGV2ZW50IHRvIHRoZSB0cmFjay5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGNoYW5uZWwgLSBUaGUgY2hhbm5lbCB0byBhZGQgdGhlIGV2ZW50IHRvLlxuXHQgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IHBpdGNoIC0gVGhlIHBpdGNoIG9mIHRoZSBub3RlLCBlaXRoZXIgbnVtZXJpYyBvclxuXHQgKiBzeW1ib2xpYy5cblx0ICogQHBhcmFtIHtudW1iZXJ9IGR1ciAtIFRoZSBkdXJhdGlvbiBvZiB0aGUgbm90ZSwgaW4gdGlja3MuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbdGltZT0wXSAtIFRoZSBudW1iZXIgb2YgdGlja3Mgc2luY2UgdGhlIHByZXZpb3VzIGV2ZW50LFxuXHQgKiBkZWZhdWx0cyB0byAwLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gW3ZlbG9jaXR5PTkwXSAtIFRoZSB2ZWxvY2l0eSB0aGUgbm90ZSB3YXMgcmVsZWFzZWQsXG5cdCAqIGRlZmF1bHRzIHRvIERFRkFVTFRfVk9MVU1FLlxuXHQgKiBAcmV0dXJucyB7VHJhY2t9IFRoZSBjdXJyZW50IHRyYWNrLlxuXHQgKi9cblx0VHJhY2sucHJvdG90eXBlLmFkZE5vdGUgPSBUcmFjay5wcm90b3R5cGUubm90ZSA9IGZ1bmN0aW9uKGNoYW5uZWwsIHBpdGNoLCBkdXIsIHRpbWUsIHZlbG9jaXR5KSB7XG5cdFx0dGhpcy5ub3RlT24oY2hhbm5lbCwgcGl0Y2gsIHRpbWUsIHZlbG9jaXR5KTtcblx0XHRpZiAoZHVyKSB7XG5cdFx0XHR0aGlzLm5vdGVPZmYoY2hhbm5lbCwgcGl0Y2gsIGR1ciwgdmVsb2NpdHkpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHQvKipcblx0ICogQWRkIGEgbm90ZS1vbiBhbmQgLW9mZiBldmVudCB0byB0aGUgdHJhY2sgZm9yIGVhY2ggcGl0Y2ggaW4gYW4gYXJyYXkgb2YgcGl0Y2hlcy5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGNoYW5uZWwgLSBUaGUgY2hhbm5lbCB0byBhZGQgdGhlIGV2ZW50IHRvLlxuXHQgKiBAcGFyYW0ge2FycmF5fSBjaG9yZCAtIEFuIGFycmF5IG9mIHBpdGNoZXMsIGVpdGhlciBudW1lcmljIG9yXG5cdCAqIHN5bWJvbGljLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gZHVyIC0gVGhlIGR1cmF0aW9uIG9mIHRoZSBjaG9yZCwgaW4gdGlja3MuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbdmVsb2NpdHk9OTBdIC0gVGhlIHZlbG9jaXR5IG9mIHRoZSBjaG9yZCxcblx0ICogZGVmYXVsdHMgdG8gREVGQVVMVF9WT0xVTUUuXG5cdCAqIEByZXR1cm5zIHtUcmFja30gVGhlIGN1cnJlbnQgdHJhY2suXG5cdCAqL1xuXHRUcmFjay5wcm90b3R5cGUuYWRkQ2hvcmQgPSBUcmFjay5wcm90b3R5cGUuY2hvcmQgPSBmdW5jdGlvbihjaGFubmVsLCBjaG9yZCwgZHVyLCB2ZWxvY2l0eSkge1xuXHRcdGlmICghQXJyYXkuaXNBcnJheShjaG9yZCkgJiYgIWNob3JkLmxlbmd0aCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdDaG9yZCBtdXN0IGJlIGFuIGFycmF5IG9mIHBpdGNoZXMnKTtcblx0XHR9XG5cdFx0Y2hvcmQuZm9yRWFjaChmdW5jdGlvbihub3RlKSB7XG5cdFx0XHR0aGlzLm5vdGVPbihjaGFubmVsLCBub3RlLCAwLCB2ZWxvY2l0eSk7XG5cdFx0fSwgdGhpcyk7XG5cdFx0Y2hvcmQuZm9yRWFjaChmdW5jdGlvbihub3RlLCBpbmRleCkge1xuXHRcdFx0aWYgKGluZGV4ID09PSAwKSB7XG5cdFx0XHRcdHRoaXMubm90ZU9mZihjaGFubmVsLCBub3RlLCBkdXIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5ub3RlT2ZmKGNoYW5uZWwsIG5vdGUpO1xuXHRcdFx0fVxuXHRcdH0sIHRoaXMpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXQgaW5zdHJ1bWVudCBmb3IgdGhlIHRyYWNrLlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gY2hhbm5lbCAtIFRoZSBjaGFubmVsIHRvIHNldCB0aGUgaW5zdHJ1bWVudCBvbi5cblx0ICogQHBhcmFtIHtudW1iZXJ9IGluc3RydW1lbnQgLSBUaGUgaW5zdHJ1bWVudCB0byBzZXQgaXQgdG8uXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbdGltZT0wXSAtIFRoZSBudW1iZXIgb2YgdGlja3Mgc2luY2UgdGhlIHByZXZpb3VzIGV2ZW50LFxuXHQgKiBkZWZhdWx0cyB0byAwLlxuXHQgKiBAcmV0dXJucyB7VHJhY2t9IFRoZSBjdXJyZW50IHRyYWNrLlxuXHQgKi9cblx0VHJhY2sucHJvdG90eXBlLnNldEluc3RydW1lbnQgPSBUcmFjay5wcm90b3R5cGUuaW5zdHJ1bWVudCA9IGZ1bmN0aW9uKGNoYW5uZWwsIGluc3RydW1lbnQsIHRpbWUpIHtcblx0XHR0aGlzLmV2ZW50cy5wdXNoKG5ldyBNaWRpRXZlbnQoe1xuXHRcdFx0dHlwZTogTWlkaUV2ZW50LlBST0dSQU1fQ0hBTkdFLFxuXHRcdFx0Y2hhbm5lbDogY2hhbm5lbCxcblx0XHRcdHBhcmFtMTogaW5zdHJ1bWVudCxcblx0XHRcdHRpbWU6IHRpbWUgfHwgMCxcblx0XHR9KSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNldCB0aGUgdGVtcG8gZm9yIHRoZSB0cmFjay5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGJwbSAtIFRoZSBuZXcgbnVtYmVyIG9mIGJlYXRzIHBlciBtaW51dGUuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbdGltZT0wXSAtIFRoZSBudW1iZXIgb2YgdGlja3Mgc2luY2UgdGhlIHByZXZpb3VzIGV2ZW50LFxuXHQgKiBkZWZhdWx0cyB0byAwLlxuXHQgKiBAcmV0dXJucyB7VHJhY2t9IFRoZSBjdXJyZW50IHRyYWNrLlxuXHQgKi9cblx0VHJhY2sucHJvdG90eXBlLnNldFRlbXBvID0gVHJhY2sucHJvdG90eXBlLnRlbXBvID0gZnVuY3Rpb24oYnBtLCB0aW1lKSB7XG5cdFx0dGhpcy5ldmVudHMucHVzaChuZXcgTWV0YUV2ZW50KHtcblx0XHRcdHR5cGU6IE1ldGFFdmVudC5URU1QTyxcblx0XHRcdGRhdGE6IFV0aWwubXBxbkZyb21CcG0oYnBtKSxcblx0XHRcdHRpbWU6IHRpbWUgfHwgMCxcblx0XHR9KSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNlcmlhbGl6ZSB0aGUgdHJhY2sgdG8gYW4gYXJyYXkgb2YgYnl0ZXMuXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gVGhlIGFycmF5IG9mIHNlcmlhbGl6ZWQgYnl0ZXMuXG5cdCAqL1xuXHRUcmFjay5wcm90b3R5cGUudG9CeXRlcyA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciB0cmFja0xlbmd0aCA9IDA7XG5cdFx0dmFyIGV2ZW50Qnl0ZXMgPSBbXTtcblx0XHR2YXIgc3RhcnRCeXRlcyA9IFRyYWNrLlNUQVJUX0JZVEVTO1xuXHRcdHZhciBlbmRCeXRlcyAgID0gVHJhY2suRU5EX0JZVEVTO1xuXG5cdFx0dmFyIGFkZEV2ZW50Qnl0ZXMgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdFx0dmFyIGJ5dGVzID0gZXZlbnQudG9CeXRlcygpO1xuXHRcdFx0dHJhY2tMZW5ndGggKz0gYnl0ZXMubGVuZ3RoO1xuXHRcdFx0ZXZlbnRCeXRlcy5wdXNoLmFwcGx5KGV2ZW50Qnl0ZXMsIGJ5dGVzKTtcblx0XHR9O1xuXG5cdFx0dGhpcy5ldmVudHMuZm9yRWFjaChhZGRFdmVudEJ5dGVzKTtcblxuXHRcdC8vIEFkZCB0aGUgZW5kLW9mLXRyYWNrIGJ5dGVzIHRvIHRoZSBzdW0gb2YgYnl0ZXMgZm9yIHRoZSB0cmFjaywgc2luY2Vcblx0XHQvLyB0aGV5IGFyZSBjb3VudGVkICh1bmxpa2UgdGhlIHN0YXJ0LW9mLXRyYWNrIG9uZXMpLlxuXHRcdHRyYWNrTGVuZ3RoICs9IGVuZEJ5dGVzLmxlbmd0aDtcblxuXHRcdC8vIE1ha2VzIHN1cmUgdGhhdCB0cmFjayBsZW5ndGggd2lsbCBmaWxsIHVwIDQgYnl0ZXMgd2l0aCAwcyBpbiBjYXNlXG5cdFx0Ly8gdGhlIGxlbmd0aCBpcyBsZXNzIHRoYW4gdGhhdCAodGhlIHVzdWFsIGNhc2UpLlxuXHRcdHZhciBsZW5ndGhCeXRlcyA9IFV0aWwuc3RyMkJ5dGVzKHRyYWNrTGVuZ3RoLnRvU3RyaW5nKDE2KSwgNCk7XG5cblx0XHRyZXR1cm4gc3RhcnRCeXRlcy5jb25jYXQobGVuZ3RoQnl0ZXMsIGV2ZW50Qnl0ZXMsIGVuZEJ5dGVzKTtcblx0fTtcblxuXHQvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0ICogRmlsZSBjbGFzc1xuXHQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cblx0LyoqXG5cdCAqIENvbnN0cnVjdCBhIGZpbGUgb2JqZWN0LlxuXHQgKlxuXHQgKiBQYXJhbWV0ZXJzIGluY2x1ZGU6XG5cdCAqICAtIHRpY2tzIFtvcHRpb25hbCBudW1iZXJdIC0gTnVtYmVyIG9mIHRpY2tzIHBlciBiZWF0LCBkZWZhdWx0cyB0byAxMjguXG5cdCAqICAgIE11c3QgYmUgMS0zMjc2Ny5cblx0ICogIC0gdHJhY2tzIFtvcHRpb25hbCBhcnJheV0gLSBUcmFjayBkYXRhLlxuXHQgKi9cblx0dmFyIEZpbGUgPSBmdW5jdGlvbihjb25maWcpe1xuXHRcdGlmICghdGhpcykgcmV0dXJuIG5ldyBGaWxlKGNvbmZpZyk7XG5cblx0XHR2YXIgYyA9IGNvbmZpZyB8fCB7fTtcblx0XHRpZiAoYy50aWNrcykge1xuXHRcdFx0aWYgKHR5cGVvZiBjLnRpY2tzICE9PSAnbnVtYmVyJykge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RpY2tzIHBlciBiZWF0IG11c3QgYmUgYSBudW1iZXIhJyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmIChjLnRpY2tzIDw9IDAgfHwgYy50aWNrcyA+PSAoMSA8PCAxNSkgfHwgYy50aWNrcyAlIDEgIT09IDApIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdUaWNrcyBwZXIgYmVhdCBtdXN0IGJlIGFuIGludGVnZXIgYmV0d2VlbiAxIGFuZCAzMjc2NyEnKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMudGlja3MgPSBjLnRpY2tzIHx8IDEyODtcblx0XHR0aGlzLnRyYWNrcyA9IGMudHJhY2tzIHx8IFtdO1xuXHR9O1xuXG5cdEZpbGUuSERSX0NIVU5LSUQgICAgID0gXCJNVGhkXCI7ICAgICAgICAgICAgIC8vIEZpbGUgbWFnaWMgY29va2llXG5cdEZpbGUuSERSX0NIVU5LX1NJWkUgID0gXCJcXHgwMFxceDAwXFx4MDBcXHgwNlwiOyAvLyBIZWFkZXIgbGVuZ3RoIGZvciBTTUZcblx0RmlsZS5IRFJfVFlQRTAgICAgICAgPSBcIlxceDAwXFx4MDBcIjsgICAgICAgICAvLyBNaWRpIFR5cGUgMCBpZFxuXHRGaWxlLkhEUl9UWVBFMSAgICAgICA9IFwiXFx4MDBcXHgwMVwiOyAgICAgICAgIC8vIE1pZGkgVHlwZSAxIGlkXG5cblx0LyoqXG5cdCAqIEFkZCBhIHRyYWNrIHRvIHRoZSBmaWxlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge1RyYWNrfSB0cmFjayAtIFRoZSB0cmFjayB0byBhZGQuXG5cdCAqL1xuXHRGaWxlLnByb3RvdHlwZS5hZGRUcmFjayA9IGZ1bmN0aW9uKHRyYWNrKSB7XG5cdFx0aWYgKHRyYWNrKSB7XG5cdFx0XHR0aGlzLnRyYWNrcy5wdXNoKHRyYWNrKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0cmFjayA9IG5ldyBUcmFjaygpO1xuXHRcdFx0dGhpcy50cmFja3MucHVzaCh0cmFjayk7XG5cdFx0XHRyZXR1cm4gdHJhY2s7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXJpYWxpemUgdGhlIE1JREkgZmlsZSB0byBhbiBhcnJheSBvZiBieXRlcy5cblx0ICpcblx0ICogQHJldHVybnMge0FycmF5fSBUaGUgYXJyYXkgb2Ygc2VyaWFsaXplZCBieXRlcy5cblx0ICovXG5cdEZpbGUucHJvdG90eXBlLnRvQnl0ZXMgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgdHJhY2tDb3VudCA9IHRoaXMudHJhY2tzLmxlbmd0aC50b1N0cmluZygxNik7XG5cblx0XHQvLyBwcmVwYXJlIHRoZSBmaWxlIGhlYWRlclxuXHRcdHZhciBieXRlcyA9IEZpbGUuSERSX0NIVU5LSUQgKyBGaWxlLkhEUl9DSFVOS19TSVpFO1xuXG5cdFx0Ly8gc2V0IE1pZGkgdHlwZSBiYXNlZCBvbiBudW1iZXIgb2YgdHJhY2tzXG5cdFx0aWYgKHBhcnNlSW50KHRyYWNrQ291bnQsIDE2KSA+IDEpIHtcblx0XHRcdGJ5dGVzICs9IEZpbGUuSERSX1RZUEUxO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRieXRlcyArPSBGaWxlLkhEUl9UWVBFMDtcblx0XHR9XG5cblx0XHQvLyBhZGQgdGhlIG51bWJlciBvZiB0cmFja3MgKDIgYnl0ZXMpXG5cdFx0Ynl0ZXMgKz0gVXRpbC5jb2RlczJTdHIoVXRpbC5zdHIyQnl0ZXModHJhY2tDb3VudCwgMikpO1xuXHRcdC8vIGFkZCB0aGUgbnVtYmVyIG9mIHRpY2tzIHBlciBiZWF0IChjdXJyZW50bHkgaGFyZGNvZGVkKVxuXHRcdGJ5dGVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKHRoaXMudGlja3MvMjU2KSwgIHRoaXMudGlja3MlMjU2KTs7XG5cblx0XHQvLyBpdGVyYXRlIG92ZXIgdGhlIHRyYWNrcywgY29udmVydGluZyB0byBieXRlcyB0b29cblx0XHR0aGlzLnRyYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKHRyYWNrKSB7XG5cdFx0XHRieXRlcyArPSBVdGlsLmNvZGVzMlN0cih0cmFjay50b0J5dGVzKCkpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGJ5dGVzO1xuXHR9O1xuXG5cdC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXHQgKiBFeHBvcnRzXG5cdCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuXHRleHBvcnRlZC5VdGlsID0gVXRpbDtcblx0ZXhwb3J0ZWQuRmlsZSA9IEZpbGU7XG5cdGV4cG9ydGVkLlRyYWNrID0gVHJhY2s7XG5cdGV4cG9ydGVkLkV2ZW50ID0gTWlkaUV2ZW50O1xuXHRleHBvcnRlZC5NZXRhRXZlbnQgPSBNZXRhRXZlbnQ7XG5cbn0pKCBNaWRpICk7XG5cbmlmICh0eXBlb2YgbW9kdWxlICE9ICd1bmRlZmluZWQnICYmIG1vZHVsZSAhPT0gbnVsbCkge1xuXHRtb2R1bGUuZXhwb3J0cyA9IE1pZGk7XG59IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9ICd1bmRlZmluZWQnICYmIGV4cG9ydHMgIT09IG51bGwpIHtcblx0ZXhwb3J0cyA9IE1pZGk7XG59IGVsc2Uge1xuXHR0aGlzLk1pZGkgPSBNaWRpO1xufVxuIiwgImltcG9ydCB7IFV0aWxzIH0gZnJvbSAnbWlkaS13cml0ZXItanMnO1xuaW1wb3J0IHsgRmlsZSwgVHJhY2sgfSBmcm9tICdqc21pZGdlbic7XG5pbXBvcnQgeyB6aXAsIGZsYXR0ZW4gfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IHNwbGl0LCBpc1BhdHRlcm4gfSBmcm9tICcuL3Rva2VuaXplJztcbmltcG9ydCB7IHJlZHVjZSB9IGZyb20gJy4vcGFyc2VyJztcblxuY29uc3QgREVGQVVMVCA9IFN5bWJvbCgnQG1haW4nKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkKG1pZGksIGJwbSA9IDEyMCwgbGVuZ3RoID0gMTYpIHtcbiAgY29uc3QgZmlsZSA9IG5ldyBGaWxlKCk7XG4gIGNvbnN0IHEgPSAxNjtcbiAgY29uc3QgbyA9IHt9O1xuXG4gIGJwbSAqPSBsZW5ndGggLyBxO1xuXG4gIGxldCBjaCA9IDA7XG4gIGZ1bmN0aW9uIGdldChudGgsIG5hbWUpIHtcbiAgICBjb25zdCBrZXkgPSBudGggKyBuYW1lO1xuXG4gICAgaWYgKCFnZXRba2V5XSkge1xuICAgICAgY29uc3QgdHJhY2sgPSBuZXcgVHJhY2soKTtcbiAgICAgIGNvbnN0IGNoYW4gPSBudGggPT09ICcwJyA/IDkgOiBjaDtcblxuICAgICAgZmlsZS5hZGRUcmFjayh0cmFjayk7XG4gICAgICBnZXRba2V5XSA9IHsgY2hhbiwgdHJhY2sgfTtcbiAgICAgIGlmIChudGggIT09ICcwJykgY2ggKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFtrZXldO1xuICB9XG5cbiAgbWlkaS5mb3JFYWNoKHNlY3Rpb24gPT4ge1xuICAgIHNlY3Rpb24uZm9yRWFjaChwYXJ0cyA9PiB7XG4gICAgICBwYXJ0cy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICBjb25zdCB7IGNoYW4sIHRyYWNrIH0gPSBnZXQoZVswXSwgZVsxXSk7XG5cbiAgICAgICAgdHJhY2suc2V0VGVtcG8oYnBtKTtcbiAgICAgICAgaWYgKGNoYW4gIT09IDkpIHtcbiAgICAgICAgICB0cmFjay5pbnN0cnVtZW50KGNoYW4sIGVbMF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlWzJdLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgY29uc3QgdGljayA9IGVbMl1baV07XG5cbiAgICAgICAgICBpZiAodGljay52ID4gMCkge1xuICAgICAgICAgICAgY29uc3Qgbm90ZSA9IHRpY2subiB8fCAnQzMnO1xuXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShub3RlKSkge1xuICAgICAgICAgICAgICB0cmFjay5ub3RlT2ZmKGNoYW4sICcnLCBxKTtcbiAgICAgICAgICAgICAgdHJhY2suYWRkQ2hvcmQoY2hhbiwgbm90ZSwgcSwgdGljay52KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRyYWNrLm5vdGVPbihjaGFuLCBub3RlLCBxLCB0aWNrLnYpO1xuICAgICAgICAgICAgICB0cmFjay5ub3RlT2ZmKGNoYW4sIG5vdGUsIHEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cmFjay5ub3RlT2ZmKGNoYW4sICcnLCBxICogMik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBmaWxlLnRvQnl0ZXMoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhY2sodmFsdWVzLCBub3Rlcykge1xuICBsZXQgb2Zmc2V0O1xuICBmdW5jdGlvbiByZXNvbHZlKHgpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh4KSkge1xuICAgICAgcmV0dXJuIHgubWFwKHJlc29sdmUpO1xuICAgIH1cblxuICAgIGxldCB0b2tlbjtcbiAgICBpZiAoIScteF8nLmluY2x1ZGVzKHgpKSB7XG4gICAgICB0b2tlbiA9IHsgdjogMTI3LCBsOiB4IH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRva2VuID0geyB2OiB4ID09PSAnLScgPyAwIDogMTI3IH07XG4gICAgfVxuXG4gICAgaWYgKHggIT09ICctJykge1xuICAgICAgdG9rZW4udiA9IHR5cGVvZiB2YWx1ZXNbb2Zmc2V0XSAhPT0gJ3VuZGVmaW5lZCcgPyB2YWx1ZXNbb2Zmc2V0XSA6IHRva2VuLnYgfHwgMDtcbiAgICAgIGlmICh0eXBlb2Ygbm90ZXNbb2Zmc2V0XSAhPT0gJ3VuZGVmaW5lZCcpIHRva2VuLm4gPSBub3Rlc1tvZmZzZXRdO1xuICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPT09IDEpIHRva2VuLnYgPSB2YWx1ZXNbMF07XG4gICAgICBpZiAodG9rZW4udiB8fCB0b2tlbi5uKSBvZmZzZXQgKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gdmFsdWU7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmIChpc1BhdHRlcm4odmFsdWUpKSB7XG4gICAgICAgIG9mZnNldCA9IDA7XG4gICAgICAgIHJlc3VsdCA9IHNwbGl0KHZhbHVlKS5tYXAocmVzb2x2ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZShjdHgpIHtcbiAgY29uc3Qgc2NlbmVzID0ge307XG5cbiAgT2JqZWN0LmVudHJpZXMoY3R4LnRyYWNrcykuZm9yRWFjaCgoW25hbWUsIGNoYW5uZWxzXSkgPT4ge1xuICAgIE9iamVjdC5lbnRyaWVzKGNoYW5uZWxzKS5mb3JFYWNoKChbY2gsIGNsaXBzXSkgPT4ge1xuICAgICAgY29uc3QgW3RhZywgbWlkaV0gPSBjaC5zcGxpdCgnIycpO1xuICAgICAgY29uc3Qga2V5ID0gdGFnIHx8IERFRkFVTFQ7XG5cbiAgICAgIGxldCB0aWNrcztcbiAgICAgIGxldCBpbmMgPSAwO1xuICAgICAgY2xpcHMuZm9yRWFjaChjbGlwID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gY2xpcC52YWx1ZXMgPyByZWR1Y2UoY2xpcC52YWx1ZXMsIGN0eC5kYXRhKSA6IFtdO1xuICAgICAgICBjb25zdCBub3RlcyA9IGNsaXAuZGF0YSA/IHJlZHVjZShjbGlwLmRhdGEsIGN0eC5kYXRhKSA6IFtdO1xuXG4gICAgICAgIGlmIChjbGlwLmlucHV0KSB7XG4gICAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPiAxKSB2YWx1ZXMuc2hpZnQoKTtcblxuICAgICAgICAgIGNvbnN0IGlucHV0ID0gZmxhdHRlbihyZWR1Y2UoY2xpcC5pbnB1dCwgY3R4LmRhdGEsIHBhY2sodmFsdWVzLCBub3RlcykpKTtcblxuICAgICAgICAgIGlmICghdGlja3MpIHtcbiAgICAgICAgICAgIHRpY2tzID0gaW5wdXQ7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgemlwKHRpY2tzLCBpbnB1dCwgKGEsIGIpID0+IHtcbiAgICAgICAgICAgIGlmIChiLnYgPiAwKSBhLnYgPSBiLnY7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGlja3MpIHtcbiAgICAgICAgICBjb25zdCBtb2RlID0gY2xpcC52YWx1ZXNcbiAgICAgICAgICAgICYmIGNsaXAudmFsdWVzWzBdXG4gICAgICAgICAgICAmJiBjbGlwLnZhbHVlc1swXS50eXBlID09PSAnbW9kZScgPyBjbGlwLnZhbHVlc1swXS52YWx1ZSA6IG51bGw7XG5cbiAgICAgICAgICB0aWNrcy5mb3JFYWNoKHRpY2sgPT4ge1xuICAgICAgICAgICAgaWYgKHRpY2sudiA+IDApIHtcbiAgICAgICAgICAgICAgaWYgKCF0aWNrLm4gJiYgbm90ZXMubGVuZ3RoID4gMCkgdGljay5uID0gbm90ZXMuc2hpZnQoKTtcbiAgICAgICAgICAgICAgaWYgKG1vZGUgJiYgdmFsdWVzLmxlbmd0aCA+IDApIHRpY2tbbW9kZVswXS50b0xvd2VyQ2FzZSgpXSA9IHZhbHVlcy5zaGlmdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKCFzY2VuZXNba2V5XSkgc2NlbmVzW2tleV0gPSB7IHRyYWNrczogW10gfTtcbiAgICAgIHNjZW5lc1trZXldLnRyYWNrcy5wdXNoKFttaWRpLCBuYW1lLCB0aWNrc10pO1xuICAgIH0pO1xuICB9KTtcblxuICBpZiAoIWN0eC5tYWluLmxlbmd0aCkge1xuICAgIGN0eC5tYWluID0gW1t7IHR5cGU6ICd2YWx1ZScsIHZhbHVlOiBERUZBVUxUIH1dXTtcbiAgfVxuXG4gIHJldHVybiBjdHgubWFpbi5tYXAodHJhY2sgPT4ge1xuICAgIHJldHVybiByZWR1Y2UodHJhY2ssIHNjZW5lcykubWFwKGl0ZW0gPT4ge1xuICAgICAgcmV0dXJuIFtdLmNvbmNhdChpdGVtKS5yZWR1Y2UoKG1lbW8sIHgpID0+IHtcbiAgICAgICAgbWVtby5wdXNoKC4uLngudHJhY2tzKTtcbiAgICAgICAgcmV0dXJuIG1lbW87XG4gICAgICB9LCBbXSk7XG4gICAgfSk7XG4gIH0pO1xufVxuIiwgImV4cG9ydCAqIGZyb20gJy4vbGliL3V0aWxzJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL3Rva2VuaXplJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL3BhcnNlcic7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9taXh1cCc7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTztxQkFBQUEsVUFBQUMsU0FBQTthQUFTLFFBQVEsT0FBTztBQUM3QixhQUFPLE1BQU0sT0FBTyxDQUFDLE1BQU0sUUFBUSxLQUFLLE9BQU8sR0FBRyxHQUFHLENBQUMsQ0FBQztJQUN6RDtBQUVPLGFBQVMsT0FBTyxPQUFPLE9BQU87QUFDbkMsWUFBTSxNQUFNLENBQUM7QUFFYixhQUFPLE9BQU87QUFDWixZQUFJLEtBQUssS0FBSztBQUNkLGlCQUFTO01BQ1g7QUFFQSxhQUFPO0lBQ1Q7QUFFTyxhQUFTLE1BQU0sS0FBSyxLQUFLLE1BQU07QUFDcEMsWUFBTSxNQUFNLENBQUM7QUFFYixVQUFJLENBQUMsTUFBTTtBQUNULGlCQUFTLElBQUksS0FBSyxLQUFLLEtBQUssS0FBSyxHQUFHO0FBQ2xDLGNBQUksS0FBSyxDQUFDO1FBQ1o7TUFDRixPQUFPO0FBQ0wsY0FBTSxRQUFRLE1BQU0sT0FBTztBQUUzQixpQkFBUyxJQUFJLEtBQUssS0FBSyxLQUFLLEtBQUssTUFBTTtBQUNyQyxjQUFJLEtBQUssQ0FBQztRQUNaO01BQ0Y7QUFFQSxhQUFPO0lBQ1Q7QUFFTyxhQUFTLE1BQU0sT0FBTztBQUMzQixVQUFJLENBQUMsU0FBUyxPQUFPLFVBQVUsU0FBVSxR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QUksS0FBSyxJQUFJLEdBQUc7QUFDZCxzQkFBSSxDQUFDLEtBQUssS0FBSyxNQUFNLFNBQVMsRUFBRyxNQUFLLElBQUksTUFBTSxNQUFNO0FBQ3RELHNCQUFJLFFBQVEsT0FBTyxTQUFTLEVBQUcsTUFBSyxLQUFLLENBQUMsRUFBRSxZQUFZLENBQUMsSUFBSSxPQUFPLE1BQU07Z0JBQzVFO2NBQ0YsQ0FBQztZQUNIO1VBQ0YsQ0FBQztBQUVELGNBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRyxRQUFPLEdBQUcsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFO0FBQzdDLGlCQUFPLEdBQUcsRUFBRSxPQUFPLEtBQUssQ0FBQ0EsT0FBTSxNQUFNLEtBQUssQ0FBQztRQUM3QyxDQUFDO01BQ0gsQ0FBQztBQUVELFVBQUksQ0FBQyxJQUFJLEtBQUssUUFBUTtBQUNwQixZQUFJLE9BQU8sQ0FBQyxDQUFDLEVBQUUsTUFBTSxTQUFTLE9BQU8sUUFBUSxDQUFDLENBQUM7TUFDakQ7QUFFQSxhQUFPLElBQUksS0FBSyxJQUFJLENBQUEsVUFBUztBQUMzQixlQUFPLE9BQU8sT0FBTyxNQUFNLEVBQUUsSUFBSSxDQUFBLFNBQVE7QUFDdkMsaUJBQU8sQ0FBQyxFQUFFLE9BQU8sSUFBSSxFQUFFLE9BQU8sQ0FBQyxNQUFNLE1BQU07QUFDekMsaUJBQUssS0FBSyxHQUFHLEVBQUUsTUFBTTtBQUNyQixtQkFBTztVQUNULEdBQUcsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztNQUNILENBQUM7SUFDSDs7Ozs7O0FDOUpBO0FBQUE7QUFBQSw2QkFBYywwQkFBZDtBQUNBLDZCQUFjLDZCQURkO0FBRUEsNkJBQWMsMkJBRmQ7QUFHQSw2QkFBYywwQkFIZDsiLAogICJuYW1lcyI6IFsiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJuIiwgImEiLCAiaSIsICJyIiwgImUiLCAibSIsICJvIiwgInQiLCAicyIsICJjIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIm5vdGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2V0Q2hvcmRzQnlQcm9ncmVzc2lvbiIsICJzY2FsZSIsICJwYXJzZSIsICJtaWRpIiwgIm0iLCAibm90ZSIsICJtIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIm9iaiIsICJfc2V0UHJvdG90eXBlT2YiLCAibyIsICJwIiwgIlV0aWxzIiwgIk5vdGVPbkV2ZW50IiwgIk5vdGVPZmZFdmVudCIsICJOb3RlRXZlbnQiLCAic2NhbGUxNGJpdHMiLCAiUGl0Y2hCZW5kRXZlbnQiLCAiUHJvZ3JhbUNoYW5nZUV2ZW50IiwgIkNvbnRyb2xsZXJDaGFuZ2VFdmVudCIsICJDb3B5cmlnaHRFdmVudCIsICJDdWVQb2ludEV2ZW50IiwgIkVuZFRyYWNrRXZlbnQiLCAiSW5zdHJ1bWVudE5hbWVFdmVudCIsICJLZXlTaWduYXR1cmVFdmVudCIsICJub3RlIiwgIkx5cmljRXZlbnQiLCAiTWFya2VyRXZlbnQiLCAiVGVtcG9FdmVudCIsICJUZXh0RXZlbnQiLCAiVGltZVNpZ25hdHVyZUV2ZW50IiwgIlRyYWNrTmFtZUV2ZW50IiwgIlRyYWNrIiwgIlZleEZsb3ciLCAiSGVhZGVyQ2h1bmsiLCAiV3JpdGVyIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIm5vdGUiLCAibSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJtaWRpIiwgIm5vdGUiXQp9Cg==
