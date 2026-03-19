var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/midi-writer-js/build/index.js
var require_build = __commonJS({
  "node_modules/midi-writer-js/build/index.js"(exports, module) {
    "use strict";
    var Constants = {
      VERSION: "3.2.1",
      HEADER_CHUNK_TYPE: [77, 84, 104, 100],
      HEADER_CHUNK_LENGTH: [0, 0, 0, 6],
      HEADER_CHUNK_FORMAT0: [0, 0],
      HEADER_CHUNK_FORMAT1: [0, 1],
      HEADER_CHUNK_DIVISION: [0, 128],
      TRACK_CHUNK_TYPE: [77, 84, 114, 107],
      META_EVENT_ID: 255,
      META_SMTPE_OFFSET: 84
    };
    var fillStr = (s, n) => Array(Math.abs(n) + 1).join(s);
    function isNamed(src) {
      return src !== null && typeof src === "object" && typeof src.name === "string" ? true : false;
    }
    function isPitch(pitch) {
      return pitch !== null && typeof pitch === "object" && typeof pitch.step === "number" && typeof pitch.alt === "number" ? true : false;
    }
    var FIFTHS = [0, 2, 4, -1, 1, 3, 5];
    var STEPS_TO_OCTS = FIFTHS.map(
      (fifths) => Math.floor(fifths * 7 / 12)
    );
    function encode(pitch) {
      const { step, alt, oct, dir = 1 } = pitch;
      const f = FIFTHS[step] + 7 * alt;
      if (oct === void 0) {
        return [dir * f];
      }
      const o = oct - STEPS_TO_OCTS[step] - 4 * alt;
      return [dir * f, dir * o];
    }
    var NoNote = { empty: true, name: "", pc: "", acc: "" };
    var cache = /* @__PURE__ */ new Map();
    var stepToLetter = (step) => "CDEFGAB".charAt(step);
    var altToAcc = (alt) => alt < 0 ? fillStr("b", -alt) : fillStr("#", alt);
    var accToAlt = (acc) => acc[0] === "b" ? -acc.length : acc.length;
    function note(src) {
      const stringSrc = JSON.stringify(src);
      const cached = cache.get(stringSrc);
      if (cached) {
        return cached;
      }
      const value = typeof src === "string" ? parse2(src) : isPitch(src) ? note(pitchName(src)) : isNamed(src) ? note(src.name) : NoNote;
      cache.set(stringSrc, value);
      return value;
    }
    var REGEX = /^([a-gA-G]?)(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)$/;
    function tokenizeNote(str) {
      const m = REGEX.exec(str);
      return [m[1].toUpperCase(), m[2].replace(/x/g, "##"), m[3], m[4]];
    }
    var mod = (n, m) => (n % m + m) % m;
    var SEMI = [0, 2, 4, 5, 7, 9, 11];
    function parse2(noteName) {
      const tokens = tokenizeNote(noteName);
      if (tokens[0] === "" || tokens[3] !== "") {
        return NoNote;
      }
      const letter = tokens[0];
      const acc = tokens[1];
      const octStr = tokens[2];
      const step = (letter.charCodeAt(0) + 3) % 7;
      const alt = accToAlt(acc);
      const oct = octStr.length ? +octStr : void 0;
      const coord = encode({ step, alt, oct });
      const name = letter + acc + octStr;
      const pc = letter + acc;
      const chroma = (SEMI[step] + alt + 120) % 12;
      const height = oct === void 0 ? mod(SEMI[step] + alt, 12) - 12 * 99 : SEMI[step] + alt + 12 * (oct + 1);
      const midi = height >= 0 && height <= 127 ? height : null;
      const freq = oct === void 0 ? null : Math.pow(2, (height - 69) / 12) * 440;
      return {
        empty: false,
        acc,
        alt,
        chroma,
        coord,
        freq,
        height,
        letter,
        midi,
        name,
        oct,
        pc,
        step
      };
    }
    function pitchName(props) {
      const { step, alt, oct } = props;
      const letter = stepToLetter(step);
      if (!letter) {
        return "";
      }
      const pc = letter + altToAcc(alt);
      return oct || oct === 0 ? pc + oct : pc;
    }
    function isMidi(arg) {
      return +arg >= 0 && +arg <= 127;
    }
    function toMidi(note$1) {
      if (isMidi(note$1)) {
        return +note$1;
      }
      const n = note(note$1);
      return n.empty ? null : n.midi;
    }
    var Utils2 = (
      /** @class */
      (function() {
        function Utils3() {
        }
        Utils3.version = function() {
          return "3.2.0";
        };
        Utils3.stringToBytes = function(string) {
          return string.split("").map(function(char) {
            return char.charCodeAt(0);
          });
        };
        Utils3.isNumeric = function(n) {
          return !isNaN(parseFloat(n)) && isFinite(n);
        };
        Utils3.getPitch = function(pitch, middleC) {
          if (middleC === void 0) {
            middleC = "C4";
          }
          return 60 - toMidi(middleC) + toMidi(pitch);
        };
        Utils3.numberToVariableLength = function(ticks) {
          ticks = Math.round(ticks);
          var buffer = ticks & 127;
          while (ticks = ticks >> 7) {
            buffer <<= 8;
            buffer |= ticks & 127 | 128;
          }
          var bList = [];
          while (true) {
            bList.push(buffer & 255);
            if (buffer & 128)
              buffer >>= 8;
            else {
              break;
            }
          }
          return bList;
        };
        Utils3.stringByteCount = function(s) {
          return encodeURI(s).split(/%..|./).length - 1;
        };
        Utils3.numberFromBytes = function(bytes) {
          var hex = "";
          var stringResult;
          bytes.forEach(function(byte) {
            stringResult = byte.toString(16);
            if (stringResult.length == 1)
              stringResult = "0" + stringResult;
            hex += stringResult;
          });
          return parseInt(hex, 16);
        };
        Utils3.numberToBytes = function(number, bytesNeeded) {
          bytesNeeded = bytesNeeded || 1;
          var hexString = number.toString(16);
          if (hexString.length & 1) {
            hexString = "0" + hexString;
          }
          var hexArray = hexString.match(/.{2}/g);
          var intArray = hexArray.map(function(item) {
            return parseInt(item, 16);
          });
          if (intArray.length < bytesNeeded) {
            while (bytesNeeded - intArray.length > 0) {
              intArray.unshift(0);
            }
          }
          return intArray;
        };
        Utils3.toArray = function(value) {
          if (Array.isArray(value))
            return value;
          return [value];
        };
        Utils3.convertVelocity = function(velocity) {
          velocity = velocity > 100 ? 100 : velocity;
          return Math.round(velocity / 100 * 127);
        };
        Utils3.getTickDuration = function(duration, ticksPerBeat) {
          if (ticksPerBeat === void 0) {
            ticksPerBeat = 128;
          }
          if (Array.isArray(duration)) {
            return duration.map(function(value) {
              return Utils3.getTickDuration(value, ticksPerBeat);
            }).reduce(function(a, b) {
              return a + b;
            }, 0);
          }
          duration = duration.toString();
          if (duration.toLowerCase().charAt(0) === "t") {
            var ticks = parseInt(duration.substring(1));
            if (isNaN(ticks) || ticks < 0) {
              throw new Error(duration + " is not a valid duration.");
            }
            return ticks;
          }
          var tickDuration = ticksPerBeat * Utils3.getDurationMultiplier(duration);
          return Utils3.getRoundedIfClose(tickDuration);
        };
        Utils3.getRoundedIfClose = function(tick) {
          var roundedTick = Math.round(tick);
          return Math.abs(roundedTick - tick) < 1e-6 ? roundedTick : tick;
        };
        Utils3.getPrecisionLoss = function(tick) {
          var roundedTick = Math.round(tick);
          return roundedTick - tick;
        };
        Utils3.getDurationMultiplier = function(duration) {
          if (duration === "0")
            return 0;
          var match = duration.match(/^(?<dotted>d+)?(?<base>\d+)(?:t(?<tuplet>\d*))?/);
          if (match) {
            var base = Number(match.groups.base);
            var isValidBase = base === 1 || (base & base - 1) === 0;
            if (isValidBase) {
              var ratio = base / 4;
              var durationInQuarters = 1 / ratio;
              var _a = match.groups, dotted = _a.dotted, tuplet = _a.tuplet;
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
        };
        return Utils3;
      })()
    );
    var ControllerChangeEvent = (
      /** @class */
      /* @__PURE__ */ (function() {
        function ControllerChangeEvent2(fields) {
          this.channel = fields.channel - 1 || 0;
          this.controllerValue = fields.controllerValue;
          this.controllerNumber = fields.controllerNumber;
          this.delta = fields.delta || 0;
          this.name = "ControllerChangeEvent";
          this.status = 176;
          this.data = Utils2.numberToVariableLength(fields.delta).concat(this.status | this.channel, this.controllerNumber, this.controllerValue);
        }
        return ControllerChangeEvent2;
      })()
    );
    var CopyrightEvent = (
      /** @class */
      /* @__PURE__ */ (function() {
        function CopyrightEvent2(fields) {
          this.delta = fields.delta || 0;
          this.name = "CopyrightEvent";
          this.text = fields.text;
          this.type = 2;
          var textBytes = Utils2.stringToBytes(this.text);
          this.data = Utils2.numberToVariableLength(this.delta).concat(
            Constants.META_EVENT_ID,
            this.type,
            Utils2.numberToVariableLength(textBytes.length),
            // Size
            textBytes
          );
        }
        return CopyrightEvent2;
      })()
    );
    var CuePointEvent = (
      /** @class */
      /* @__PURE__ */ (function() {
        function CuePointEvent2(fields) {
          this.delta = fields.delta || 0;
          this.name = "CuePointEvent";
          this.text = fields.text;
          this.type = 7;
          var textBytes = Utils2.stringToBytes(this.text);
          this.data = Utils2.numberToVariableLength(this.delta).concat(
            Constants.META_EVENT_ID,
            this.type,
            Utils2.numberToVariableLength(textBytes.length),
            // Size
            textBytes
          );
        }
        return CuePointEvent2;
      })()
    );
    var EndTrackEvent = (
      /** @class */
      /* @__PURE__ */ (function() {
        function EndTrackEvent2(fields) {
          this.delta = (fields === null || fields === void 0 ? void 0 : fields.delta) || 0;
          this.name = "EndTrackEvent";
          this.type = [47, 0];
          this.data = Utils2.numberToVariableLength(this.delta).concat(Constants.META_EVENT_ID, this.type);
        }
        return EndTrackEvent2;
      })()
    );
    var InstrumentNameEvent = (
      /** @class */
      /* @__PURE__ */ (function() {
        function InstrumentNameEvent2(fields) {
          this.delta = fields.delta || 0;
          this.name = "InstrumentNameEvent";
          this.text = fields.text;
          this.type = 4;
          var textBytes = Utils2.stringToBytes(this.text);
          this.data = Utils2.numberToVariableLength(this.delta).concat(
            Constants.META_EVENT_ID,
            this.type,
            Utils2.numberToVariableLength(textBytes.length),
            // Size
            textBytes
          );
        }
        return InstrumentNameEvent2;
      })()
    );
    var KeySignatureEvent = (
      /** @class */
      /* @__PURE__ */ (function() {
        function KeySignatureEvent2(sf, mi) {
          this.name = "KeySignatureEvent";
          this.type = 89;
          var mode = mi || 0;
          sf = sf || 0;
          if (typeof mi === "undefined") {
            var fifths = [
              ["Cb", "Gb", "Db", "Ab", "Eb", "Bb", "F", "C", "G", "D", "A", "E", "B", "F#", "C#"],
              ["ab", "eb", "bb", "f", "c", "g", "d", "a", "e", "b", "f#", "c#", "g#", "d#", "a#"]
            ];
            var _sflen = sf.length;
            var note2 = sf || "C";
            if (sf[0] === sf[0].toLowerCase())
              mode = 1;
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
          this.data = Utils2.numberToVariableLength(0).concat(
            Constants.META_EVENT_ID,
            this.type,
            [2],
            // Size
            Utils2.numberToBytes(sf, 1),
            // Number of sharp or flats ( < 0 flat; > 0 sharp)
            Utils2.numberToBytes(mode, 1)
          );
        }
        return KeySignatureEvent2;
      })()
    );
    var LyricEvent = (
      /** @class */
      /* @__PURE__ */ (function() {
        function LyricEvent2(fields) {
          this.delta = fields.delta || 0;
          this.name = "LyricEvent";
          this.text = fields.text;
          this.type = 5;
          var textBytes = Utils2.stringToBytes(this.text);
          this.data = Utils2.numberToVariableLength(this.delta).concat(
            Constants.META_EVENT_ID,
            this.type,
            Utils2.numberToVariableLength(textBytes.length),
            // Size
            textBytes
          );
        }
        return LyricEvent2;
      })()
    );
    var MarkerEvent = (
      /** @class */
      /* @__PURE__ */ (function() {
        function MarkerEvent2(fields) {
          this.delta = fields.delta || 0;
          this.name = "MarkerEvent";
          this.text = fields.text;
          this.type = 6;
          var textBytes = Utils2.stringToBytes(this.text);
          this.data = Utils2.numberToVariableLength(this.delta).concat(
            Constants.META_EVENT_ID,
            this.type,
            Utils2.numberToVariableLength(textBytes.length),
            // Size
            textBytes
          );
        }
        return MarkerEvent2;
      })()
    );
    var NoteOnEvent = (
      /** @class */
      (function() {
        function NoteOnEvent2(fields) {
          this.name = "NoteOnEvent";
          this.channel = fields.channel || 1;
          this.pitch = fields.pitch;
          this.wait = fields.wait || 0;
          this.velocity = fields.velocity || 50;
          this.tick = fields.tick || null;
          this.delta = null;
          this.data = fields.data;
          this.status = 144;
        }
        NoteOnEvent2.prototype.buildData = function(track, precisionDelta, options) {
          if (options === void 0) {
            options = {};
          }
          this.data = [];
          var ticksPerBeat = options.ticksPerBeat || 128;
          if (this.tick) {
            this.tick = Utils2.getRoundedIfClose(this.tick);
            if (track.tickPointer == 0) {
              this.delta = this.tick;
            }
          } else {
            this.delta = Utils2.getTickDuration(this.wait, ticksPerBeat);
            this.tick = Utils2.getRoundedIfClose(track.tickPointer + this.delta);
          }
          this.deltaWithPrecisionCorrection = Utils2.getRoundedIfClose(this.delta - precisionDelta);
          this.data = Utils2.numberToVariableLength(this.deltaWithPrecisionCorrection).concat(this.status | this.channel - 1, Utils2.getPitch(this.pitch, options.middleC), Utils2.convertVelocity(this.velocity));
          return this;
        };
        return NoteOnEvent2;
      })()
    );
    var NoteOffEvent = (
      /** @class */
      (function() {
        function NoteOffEvent2(fields) {
          this.name = "NoteOffEvent";
          this.channel = fields.channel || 1;
          this.pitch = fields.pitch;
          this.velocity = fields.velocity || 50;
          this.tick = fields.tick || null;
          this.data = fields.data;
          this.delta = fields.delta !== void 0 ? fields.delta : Utils2.getTickDuration(fields.duration);
          this.status = 128;
        }
        NoteOffEvent2.prototype.buildData = function(track, precisionDelta, options) {
          if (options === void 0) {
            options = {};
          }
          if (this.tick === null) {
            this.tick = Utils2.getRoundedIfClose(this.delta + track.tickPointer);
          }
          this.deltaWithPrecisionCorrection = Utils2.getRoundedIfClose(this.delta - precisionDelta);
          this.data = Utils2.numberToVariableLength(this.deltaWithPrecisionCorrection).concat(this.status | this.channel - 1, Utils2.getPitch(this.pitch, options.middleC), Utils2.convertVelocity(this.velocity));
          return this;
        };
        return NoteOffEvent2;
      })()
    );
    var NoteEvent = (
      /** @class */
      (function() {
        function NoteEvent2(fields) {
          this.data = [];
          this.name = "NoteEvent";
          this.pitch = Utils2.toArray(fields.pitch);
          this.channel = fields.channel || 1;
          this.duration = fields.duration || "4";
          this.grace = fields.grace;
          this.repeat = fields.repeat || 1;
          this.sequential = fields.sequential || false;
          this.tick = fields.startTick || fields.tick || null;
          this.velocity = fields.velocity || 50;
          this.wait = fields.wait || 0;
          this.tickDuration = Utils2.getTickDuration(this.duration);
          this.restDuration = Utils2.getTickDuration(this.wait);
          this.events = [];
        }
        NoteEvent2.prototype.buildData = function(options) {
          var _this = this;
          if (options === void 0) {
            options = {};
          }
          this.data = [];
          this.events = [];
          var ticksPerBeat = options.ticksPerBeat || 128;
          if (this.grace) {
            var graceDuration_1 = 1;
            this.grace = Utils2.toArray(this.grace);
            this.grace.forEach(function() {
              var _a;
              var noteEvent = new NoteEvent2({ pitch: _this.grace, duration: "T" + graceDuration_1 });
              (_a = _this.data).push.apply(_a, noteEvent.data);
            });
          }
          if (!this.sequential) {
            for (var j = 0; j < this.repeat; j++) {
              this.pitch.forEach(function(p, i) {
                var noteOnNew;
                if (i == 0) {
                  noteOnNew = new NoteOnEvent({
                    channel: _this.channel,
                    wait: _this.wait,
                    delta: Utils2.getTickDuration(_this.wait, ticksPerBeat),
                    velocity: _this.velocity,
                    pitch: p,
                    tick: _this.tick
                  });
                } else {
                  noteOnNew = new NoteOnEvent({
                    channel: _this.channel,
                    wait: 0,
                    delta: 0,
                    velocity: _this.velocity,
                    pitch: p,
                    tick: _this.tick
                  });
                }
                _this.events.push(noteOnNew);
              });
              this.pitch.forEach(function(p, i) {
                var noteOffNew;
                if (i == 0) {
                  noteOffNew = new NoteOffEvent({
                    channel: _this.channel,
                    duration: _this.duration,
                    delta: Utils2.getTickDuration(_this.duration, ticksPerBeat),
                    velocity: _this.velocity,
                    pitch: p,
                    tick: _this.tick !== null ? Utils2.getTickDuration(_this.duration, ticksPerBeat) + _this.tick : null
                  });
                } else {
                  noteOffNew = new NoteOffEvent({
                    channel: _this.channel,
                    duration: 0,
                    delta: 0,
                    velocity: _this.velocity,
                    pitch: p,
                    tick: _this.tick !== null ? Utils2.getTickDuration(_this.duration, ticksPerBeat) + _this.tick : null
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
                  delta: i > 0 ? 0 : Utils2.getTickDuration(_this.wait, ticksPerBeat),
                  velocity: _this.velocity,
                  pitch: p,
                  tick: _this.tick
                });
                var noteOffNew = new NoteOffEvent({
                  channel: _this.channel,
                  duration: _this.duration,
                  delta: Utils2.getTickDuration(_this.duration, ticksPerBeat),
                  velocity: _this.velocity,
                  pitch: p
                });
                _this.events.push(noteOnNew, noteOffNew);
              });
            }
          }
          return this;
        };
        return NoteEvent2;
      })()
    );
    var PitchBendEvent = (
      /** @class */
      (function() {
        function PitchBendEvent2(fields) {
          this.channel = fields.channel || 0;
          this.delta = fields.delta || 0;
          this.name = "PitchBendEvent";
          this.status = 224;
          var bend14 = this.scale14bits(fields.bend);
          var lsbValue = bend14 & 127;
          var msbValue = bend14 >> 7 & 127;
          this.data = Utils2.numberToVariableLength(this.delta).concat(this.status | this.channel, lsbValue, msbValue);
        }
        PitchBendEvent2.prototype.scale14bits = function(zeroOne) {
          if (zeroOne <= 0) {
            return Math.floor(16384 * (zeroOne + 1) / 2);
          }
          return Math.floor(16383 * (zeroOne + 1) / 2);
        };
        return PitchBendEvent2;
      })()
    );
    var ProgramChangeEvent = (
      /** @class */
      /* @__PURE__ */ (function() {
        function ProgramChangeEvent2(fields) {
          this.channel = fields.channel || 0;
          this.delta = fields.delta || 0;
          this.instrument = fields.instrument;
          this.status = 192;
          this.name = "ProgramChangeEvent";
          this.data = Utils2.numberToVariableLength(this.delta).concat(this.status | this.channel, this.instrument);
        }
        return ProgramChangeEvent2;
      })()
    );
    var TempoEvent = (
      /** @class */
      /* @__PURE__ */ (function() {
        function TempoEvent2(fields) {
          this.bpm = fields.bpm;
          this.delta = fields.delta || 0;
          this.tick = fields.tick;
          this.name = "TempoEvent";
          this.type = 81;
          var tempo = Math.round(6e7 / this.bpm);
          this.data = Utils2.numberToVariableLength(this.delta).concat(
            Constants.META_EVENT_ID,
            this.type,
            [3],
            // Size
            Utils2.numberToBytes(tempo, 3)
          );
        }
        return TempoEvent2;
      })()
    );
    var TextEvent = (
      /** @class */
      /* @__PURE__ */ (function() {
        function TextEvent2(fields) {
          this.delta = fields.delta || 0;
          this.text = fields.text;
          this.name = "TextEvent";
          this.type = 1;
          var textBytes = Utils2.stringToBytes(this.text);
          this.data = Utils2.numberToVariableLength(fields.delta).concat(
            Constants.META_EVENT_ID,
            this.type,
            Utils2.numberToVariableLength(textBytes.length),
            // Size
            textBytes
          );
        }
        return TextEvent2;
      })()
    );
    var TimeSignatureEvent = (
      /** @class */
      /* @__PURE__ */ (function() {
        function TimeSignatureEvent2(numerator, denominator, midiclockspertick, notespermidiclock) {
          this.name = "TimeSignatureEvent";
          this.type = 88;
          this.data = Utils2.numberToVariableLength(0).concat(
            Constants.META_EVENT_ID,
            this.type,
            [4],
            // Size
            Utils2.numberToBytes(numerator, 1),
            // Numerator, 1 bytes
            Utils2.numberToBytes(Math.log2(denominator), 1),
            // Denominator is expressed as pow of 2, 1 bytes
            Utils2.numberToBytes(midiclockspertick || 24, 1),
            // MIDI Clocks per tick, 1 bytes
            Utils2.numberToBytes(notespermidiclock || 8, 1)
          );
        }
        return TimeSignatureEvent2;
      })()
    );
    var TrackNameEvent = (
      /** @class */
      /* @__PURE__ */ (function() {
        function TrackNameEvent2(fields) {
          this.delta = fields.delta || 0;
          this.name = "TrackNameEvent";
          this.text = fields.text;
          this.type = 3;
          var textBytes = Utils2.stringToBytes(this.text);
          this.data = Utils2.numberToVariableLength(this.delta).concat(
            Constants.META_EVENT_ID,
            this.type,
            Utils2.numberToVariableLength(textBytes.length),
            // Size
            textBytes
          );
        }
        return TrackNameEvent2;
      })()
    );
    var Track2 = (
      /** @class */
      (function() {
        function Track3() {
          this.type = Constants.TRACK_CHUNK_TYPE;
          this.data = [];
          this.size = [];
          this.events = [];
          this.explicitTickEvents = [];
          this.tickPointer = 0;
        }
        Track3.prototype.addEvent = function(events, mapFunction) {
          var _this = this;
          Utils2.toArray(events).forEach(function(event, i) {
            if (event instanceof NoteEvent) {
              if (typeof mapFunction === "function") {
                var properties = mapFunction(i, event);
                if (typeof properties === "object") {
                  Object.assign(event, properties);
                }
              }
              if (event.tick !== null) {
                _this.explicitTickEvents.push(event);
              } else {
                _this.events.push(event);
              }
            } else {
              _this.events.push(event);
            }
          });
          return this;
        };
        Track3.prototype.buildData = function(options) {
          var _a;
          var _this = this;
          if (options === void 0) {
            options = {};
          }
          this.data = [];
          this.size = [];
          this.tickPointer = 0;
          var expandedEvents = [];
          this.events.forEach(function(event) {
            if (event instanceof NoteEvent && event.tick === null) {
              event.buildData(options).events.forEach(function(e) {
                return expandedEvents.push(e);
              });
            } else {
              expandedEvents.push(event);
            }
          });
          this.events = expandedEvents;
          var precisionLoss = 0;
          this.events.forEach(function(event) {
            var _a2, _b, _c;
            if (event instanceof NoteOnEvent || event instanceof NoteOffEvent) {
              var built = event.buildData(_this, precisionLoss, options);
              precisionLoss = Utils2.getPrecisionLoss(event.deltaWithPrecisionCorrection || 0);
              (_a2 = _this.data).push.apply(_a2, built.data);
              _this.tickPointer = Utils2.getRoundedIfClose(event.tick);
            } else if (event instanceof TempoEvent) {
              _this.tickPointer = Utils2.getRoundedIfClose(event.tick);
              (_b = _this.data).push.apply(_b, event.data);
            } else {
              event.tick = _this.tickPointer;
              (_c = _this.data).push.apply(_c, event.data);
            }
          });
          this.mergeExplicitTickEvents(options);
          if (!this.events.length || !(this.events[this.events.length - 1] instanceof EndTrackEvent)) {
            (_a = this.data).push.apply(_a, new EndTrackEvent().data);
          }
          this.size = Utils2.numberToBytes(this.data.length, 4);
          return this;
        };
        Track3.prototype.mergeExplicitTickEvents = function(options) {
          var _this = this;
          if (options === void 0) {
            options = {};
          }
          if (!this.explicitTickEvents.length)
            return;
          this.explicitTickEvents.sort(function(a, b) {
            return a.tick - b.tick;
          });
          this.explicitTickEvents.forEach(function(noteEvent) {
            noteEvent.buildData(options).events.forEach(function(e) {
              return e.buildData(_this, 0, options);
            });
            noteEvent.events.forEach(function(event) {
              return _this.mergeSingleEvent(event);
            });
          });
          this.explicitTickEvents = [];
          this.buildData(options);
        };
        Track3.prototype.mergeTrack = function(track) {
          var _this = this;
          this.buildData();
          track.buildData().events.forEach(function(event) {
            return _this.mergeSingleEvent(event);
          });
          return this;
        };
        Track3.prototype.mergeSingleEvent = function(event) {
          if (!this.events.length) {
            this.addEvent(event);
            return this;
          }
          var lastEventIndex;
          for (var i = 0; i < this.events.length; i++) {
            if (this.events[i].tick > event.tick)
              break;
            lastEventIndex = i;
          }
          if (lastEventIndex === void 0) {
            event.delta = event.tick;
            this.events.splice(0, 0, event);
            if (this.events.length > 1) {
              this.events[1].delta = this.events[1].tick - event.tick;
            }
          } else {
            var splicedEventIndex = lastEventIndex + 1;
            event.delta = event.tick - this.events[lastEventIndex].tick;
            this.events.splice(splicedEventIndex, 0, event);
            for (var i = splicedEventIndex + 1; i < this.events.length; i++) {
              this.events[i].delta = this.events[i].tick - this.events[i - 1].tick;
            }
          }
          return this;
        };
        Track3.prototype.removeEventsByName = function(eventName) {
          this.events = this.events.filter(function(event) {
            return event.name !== eventName;
          });
          return this;
        };
        Track3.prototype.setTempo = function(bpm, tick) {
          if (tick === void 0) {
            tick = 0;
          }
          return this.addEvent(new TempoEvent({ bpm, tick }));
        };
        Track3.prototype.setTimeSignature = function(numerator, denominator, midiclockspertick, notespermidiclock) {
          return this.addEvent(new TimeSignatureEvent(numerator, denominator, midiclockspertick, notespermidiclock));
        };
        Track3.prototype.setKeySignature = function(sf, mi) {
          return this.addEvent(new KeySignatureEvent(sf, mi));
        };
        Track3.prototype.addText = function(text) {
          return this.addEvent(new TextEvent({ text }));
        };
        Track3.prototype.addCopyright = function(text) {
          return this.addEvent(new CopyrightEvent({ text }));
        };
        Track3.prototype.addTrackName = function(text) {
          return this.addEvent(new TrackNameEvent({ text }));
        };
        Track3.prototype.addInstrumentName = function(text) {
          return this.addEvent(new InstrumentNameEvent({ text }));
        };
        Track3.prototype.addMarker = function(text) {
          return this.addEvent(new MarkerEvent({ text }));
        };
        Track3.prototype.addCuePoint = function(text) {
          return this.addEvent(new CuePointEvent({ text }));
        };
        Track3.prototype.addLyric = function(text) {
          return this.addEvent(new LyricEvent({ text }));
        };
        Track3.prototype.polyModeOn = function() {
          var event = new NoteOnEvent({ data: [0, 176, 126, 0] });
          return this.addEvent(event);
        };
        Track3.prototype.setPitchBend = function(bend) {
          return this.addEvent(new PitchBendEvent({ bend }));
        };
        Track3.prototype.controllerChange = function(number, value, channel, delta) {
          return this.addEvent(new ControllerChangeEvent({ controllerNumber: number, controllerValue: value, channel, delta }));
        };
        return Track3;
      })()
    );
    var VexFlow = (
      /** @class */
      (function() {
        function VexFlow2() {
        }
        VexFlow2.prototype.trackFromVoice = function(voice, options) {
          var _this = this;
          if (options === void 0) {
            options = { addRenderedAccidentals: false };
          }
          var track = new Track2();
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
            }
          });
          if (wait.length > 0) {
            track.addEvent(new NoteEvent({ pitch: "[c4]", duration: "0", wait, velocity: "0" }));
          }
          return track;
        };
        VexFlow2.prototype.convertPitch = function(pitch, index, note2, addRenderedAccidentals) {
          var _a;
          if (addRenderedAccidentals === void 0) {
            addRenderedAccidentals = false;
          }
          var pitchParts = pitch.split("/");
          var accidentals = pitchParts[0].substring(1).replace("n", "");
          if (addRenderedAccidentals) {
            (_a = note2.getAccidentals()) === null || _a === void 0 ? void 0 : _a.forEach(function(accidental) {
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
        };
        VexFlow2.prototype.convertDuration = function(note2) {
          var dots = this.countDots(note2);
          return "d".repeat(dots) + this.convertBaseDuration(note2.duration) + (note2.tuplet ? "t" + note2.tuplet.num_notes : "");
        };
        VexFlow2.prototype.countDots = function(note2) {
          if (typeof note2.getModifiersByType === "function") {
            return note2.getModifiersByType("Dot").length;
          }
          if (Array.isArray(note2.modifiers)) {
            return note2.modifiers.filter(function(m) {
              var _a, _b;
              return ((_a = m.getCategory) === null || _a === void 0 ? void 0 : _a.call(m)) === "dots" || ((_b = m.attrs) === null || _b === void 0 ? void 0 : _b.type) === "Dot";
            }).length;
          }
          return note2.dots || 0;
        };
        VexFlow2.prototype.convertBaseDuration = function(duration) {
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
        };
        return VexFlow2;
      })()
    );
    function __spreadArray(to, from, pack2) {
      if (pack2 || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
      return to.concat(ar || Array.prototype.slice.call(from));
    }
    var Header = (
      /** @class */
      /* @__PURE__ */ (function() {
        function Header2(numberOfTracks, ticksPerBeat) {
          if (ticksPerBeat === void 0) {
            ticksPerBeat = 128;
          }
          this.type = Constants.HEADER_CHUNK_TYPE;
          var trackType = numberOfTracks > 1 ? Constants.HEADER_CHUNK_FORMAT1 : Constants.HEADER_CHUNK_FORMAT0;
          this.data = trackType.concat(
            Utils2.numberToBytes(numberOfTracks, 2),
            // two bytes long,
            Utils2.numberToBytes(ticksPerBeat, 2)
          );
          this.size = [0, 0, 0, this.data.length];
        }
        return Header2;
      })()
    );
    var Writer = (
      /** @class */
      (function() {
        function Writer2(tracks, options) {
          if (options === void 0) {
            options = {};
          }
          this.tracks = Utils2.toArray(tracks);
          this.options = options;
        }
        Writer2.prototype.buildData = function() {
          var _this = this;
          var data = [];
          var ticksPerBeat = this.options["ticksPerBeat"] || 128;
          data.push(new Header(this.tracks.length, ticksPerBeat));
          this.tracks.forEach(function(track) {
            data.push(track.buildData(_this.options));
          });
          return data;
        };
        Writer2.prototype.buildFile = function() {
          var build2 = [];
          this.buildData().forEach(function(d) {
            return build2.push.apply(build2, __spreadArray(__spreadArray(__spreadArray([], d.type, false), d.size, false), d.data, false));
          });
          return new Uint8Array(build2);
        };
        Writer2.prototype.base64 = function() {
          if (typeof btoa === "function") {
            var bytes = this.buildFile();
            var len = bytes.byteLength;
            var chars = new Array(len);
            for (var i = 0; i < len; i++) {
              chars[i] = String.fromCharCode(bytes[i]);
            }
            return btoa(chars.join(""));
          }
          return Buffer.from(this.buildFile()).toString("base64");
        };
        Writer2.prototype.dataUri = function() {
          return "data:audio/midi;base64," + this.base64();
        };
        Writer2.prototype.setOption = function(key, value) {
          this.options[key] = value;
          return this;
        };
        Writer2.prototype.stdout = function() {
          return process.stdout.write(Buffer.from(this.buildFile()));
        };
        return Writer2;
      })()
    );
    var main = {
      Constants,
      ControllerChangeEvent,
      CopyrightEvent,
      CuePointEvent,
      EndTrackEvent,
      InstrumentNameEvent,
      KeySignatureEvent,
      LyricEvent,
      MarkerEvent,
      NoteOnEvent,
      NoteOffEvent,
      NoteEvent,
      PitchBendEvent,
      ProgramChangeEvent,
      TempoEvent,
      TextEvent,
      TimeSignatureEvent,
      Track: Track2,
      TrackNameEvent,
      Utils: Utils2,
      VexFlow,
      Writer
    };
    module.exports = main;
  }
});

// node_modules/jsmidgen/lib/jsmidgen.js
var require_jsmidgen = __commonJS({
  "node_modules/jsmidgen/lib/jsmidgen.js"(exports, module) {
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
          var note = matches[1].toLowerCase(), accidental = matches[2] || "", octave = parseInt(matches[3], 10);
          return 12 * octave + Util.midi_letter_pitches[note] + (accidental.substr(0, 1) == "#" ? 1 : -1) * accidental.length;
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
          var m = mpqn;
          if (typeof mpqn[0] != "undefined") {
            m = 0;
            for (var i = 0, l = mpqn.length - 1; l >= 0; ++i, --l) {
              m |= mpqn[i] << l;
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
      var Track2 = function(config) {
        if (!this) return new Track2(config);
        var c = config || {};
        this.events = c.events || [];
      };
      Track2.START_BYTES = [77, 84, 114, 107];
      Track2.END_BYTES = [0, 255, 47, 0];
      Track2.prototype.addEvent = function(event) {
        this.events.push(event);
        return this;
      };
      Track2.prototype.addNoteOn = Track2.prototype.noteOn = function(channel, pitch, time, velocity) {
        this.events.push(new MidiEvent({
          type: MidiEvent.NOTE_ON,
          channel,
          param1: Util.ensureMidiPitch(pitch),
          param2: velocity || DEFAULT_VOLUME,
          time: time || 0
        }));
        return this;
      };
      Track2.prototype.addNoteOff = Track2.prototype.noteOff = function(channel, pitch, time, velocity) {
        this.events.push(new MidiEvent({
          type: MidiEvent.NOTE_OFF,
          channel,
          param1: Util.ensureMidiPitch(pitch),
          param2: velocity || DEFAULT_VOLUME,
          time: time || 0
        }));
        return this;
      };
      Track2.prototype.addNote = Track2.prototype.note = function(channel, pitch, dur, time, velocity) {
        this.noteOn(channel, pitch, time, velocity);
        if (dur) {
          this.noteOff(channel, pitch, dur, velocity);
        }
        return this;
      };
      Track2.prototype.addChord = Track2.prototype.chord = function(channel, chord, dur, velocity) {
        if (!Array.isArray(chord) && !chord.length) {
          throw new Error("Chord must be an array of pitches");
        }
        chord.forEach(function(note) {
          this.noteOn(channel, note, 0, velocity);
        }, this);
        chord.forEach(function(note, index) {
          if (index === 0) {
            this.noteOff(channel, note, dur);
          } else {
            this.noteOff(channel, note);
          }
        }, this);
        return this;
      };
      Track2.prototype.setInstrument = Track2.prototype.instrument = function(channel, instrument, time) {
        this.events.push(new MidiEvent({
          type: MidiEvent.PROGRAM_CHANGE,
          channel,
          param1: instrument,
          time: time || 0
        }));
        return this;
      };
      Track2.prototype.setTempo = Track2.prototype.tempo = function(bpm, time) {
        this.events.push(new MetaEvent({
          type: MetaEvent.TEMPO,
          data: Util.mpqnFromBpm(bpm),
          time: time || 0
        }));
        return this;
      };
      Track2.prototype.setTimeSignature = Track2.prototype.timeSignature = function(numerator, denominator, time) {
        var ddlog2 = Math.log2(denominator);
        if (ddlog2 != Math.floor(ddlog2)) {
          throw new Error("Time signature denominator must be an exact power of 2!");
        }
        this.events.push(new MetaEvent({
          type: MetaEvent.TIME_SIG,
          data: [numerator & 255, Math.floor(ddlog2) & 255, 24, 8],
          time: time || 0
        }));
        return this;
      };
      Track2.prototype.setKeySignature = Track2.prototype.keySignature = function(accidentals, minor, time) {
        this.events.push(new MetaEvent({
          type: MetaEvent.KEY_SIG,
          data: [accidentals & 255, minor ? 1 : 0],
          time: time || 0
        }));
        return this;
      };
      Track2.prototype.toBytes = function() {
        var trackLength = 0;
        var eventBytes = [];
        var startBytes = Track2.START_BYTES;
        var endBytes = Track2.END_BYTES;
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
      var File2 = function(config) {
        if (!this) return new File2(config);
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
      File2.HDR_CHUNKID = "MThd";
      File2.HDR_CHUNK_SIZE = "\0\0\0";
      File2.HDR_TYPE0 = "\0\0";
      File2.HDR_TYPE1 = "\0";
      File2.prototype.addTrack = function(track) {
        if (track) {
          this.tracks.push(track);
          return this;
        } else {
          track = new Track2();
          this.tracks.push(track);
          return track;
        }
      };
      File2.prototype.toBytes = function() {
        var trackCount = this.tracks.length.toString(16);
        var bytes = File2.HDR_CHUNKID + File2.HDR_CHUNK_SIZE;
        if (parseInt(trackCount, 16) > 1) {
          bytes += File2.HDR_TYPE1;
        } else {
          bytes += File2.HDR_TYPE0;
        }
        bytes += Util.codes2Str(Util.str2Bytes(trackCount, 2));
        bytes += String.fromCharCode(this.ticks / 256, this.ticks % 256);
        ;
        this.tracks.forEach(function(track) {
          bytes += Util.codes2Str(track.toBytes());
        });
        return bytes;
      };
      File2.prototype.toUint8Array = function() {
        return Uint8Array.from(this.toBytes());
      };
      File2.prototype.toBlob = function(genericType) {
        return new Blob([this.toUint8Array()], {
          type: genericType ? "application/octet-stream" : "audio/x-midi"
        });
      };
      exported.Util = Util;
      exported.File = File2;
      exported.Track = Track2;
      exported.Event = MidiEvent;
      exported.MetaEvent = MetaEvent;
    })(Midi);
    if (typeof module != "undefined" && module !== null) {
      module.exports = Midi;
    } else if (typeof exports != "undefined" && exports !== null) {
      exports = Midi;
    } else {
      exports.Midi = Midi;
    }
  }
});

// src/lib/utils.js
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

// src/lib/channels.js
var DEFAULT_ALIASES = {
  drums: {
    bd: 2001,
    kick: 2001,
    sd: 2004,
    sn: 2004,
    snare: 2004,
    cp: 2028,
    clap: 2028,
    hh: 2035,
    hat: 2035,
    oh: 2081,
    ride: 2081,
    perc: 2123
  },
  instruments: {
    piano: 0,
    epiano: 4,
    organ: 16,
    guitar: 24,
    bass: 33,
    strings: 48,
    brass: 61,
    lead: 80,
    pad: 88,
    choir: 52,
    fx: 98,
    synth: 94
  }
};
function toChannelNumber(value) {
  if (typeof value === "number" && Number.isFinite(value)) return Math.max(0, Math.floor(value));
  const raw = String(value || "").trim();
  if (!raw) return null;
  if (raw.charAt(0) === "#") {
    const n2 = parseInt(raw.slice(1), 10);
    return Number.isFinite(n2) ? Math.max(0, n2) : null;
  }
  const n = parseInt(raw, 10);
  return Number.isFinite(n) ? Math.max(0, n) : null;
}
function normalizeAliasRows(rows = {}) {
  const out = {};
  Object.entries(rows || {}).forEach(([name, target]) => {
    const alias = String(name || "").toLowerCase().trim();
    if (!alias) return;
    const channel = toChannelNumber(target);
    if (!Number.isFinite(channel)) return;
    out[alias] = channel;
  });
  return out;
}
function normalizeChannelAliases(raw = null) {
  const base = {
    drums: normalizeAliasRows(DEFAULT_ALIASES.drums),
    instruments: normalizeAliasRows(DEFAULT_ALIASES.instruments)
  };
  if (!raw || typeof raw !== "object") {
    return {
      ...base,
      all: { ...base.drums, ...base.instruments }
    };
  }
  const nextDrums = {
    ...base.drums,
    ...normalizeAliasRows(raw.drums)
  };
  const nextInstruments = {
    ...base.instruments,
    ...normalizeAliasRows(raw.instruments)
  };
  return {
    drums: nextDrums,
    instruments: nextInstruments,
    all: {
      ...nextDrums,
      ...nextInstruments
    }
  };
}
function resolveChannelToken(value, channelAliases = null) {
  const token = String(value || "").trim();
  if (!token || token.charAt(0) !== "#") return token;
  const raw = token.slice(1).trim();
  if (!raw) throw new TypeError(`Missing channel value in '${token}'`);
  const numeric = toChannelNumber(raw);
  if (Number.isFinite(numeric) && /^\d+$/.test(raw)) return `#${numeric}`;
  const aliases = normalizeChannelAliases(channelAliases);
  const target = aliases.all[String(raw).toLowerCase()];
  if (Number.isFinite(target)) return `#${target}`;
  throw new TypeError(`Unknown channel alias '#${raw}'`);
}
var DEFAULT_CHANNEL_ALIASES = normalizeChannelAliases();

// node_modules/harmonics/dist/index.mjs
var scaleMaps_default = {
  "major pentatonic": "101010010100",
  "ionian pentatonic": "100011010001",
  "mixolydian pentatonic": "100011010010",
  ritusen: "101001010100",
  egyptian: "101001010010",
  "neopolitan major pentatonic": "100011100010",
  "vietnamese 1": "100101011000",
  pelog: "110100011000",
  kumoijoshi: "110001011000",
  hirajoshi: "101100011000",
  iwato: "110001100010",
  "in-sen": "110001010010",
  "lydian pentatonic": "100010110001",
  "malkos raga": "100101001010",
  "locrian pentatonic": "100101100010",
  "minor pentatonic": "100101010010",
  "minor six pentatonic": "100101010100",
  "flat three pentatonic": "101100010100",
  "flat six pentatonic": "101010011000",
  scriabin: "110010010100",
  "whole tone pentatonic": "100010101010",
  "lydian #5P pentatonic": "100010101001",
  "lydian dominant pentatonic": "100010110010",
  "minor #7M pentatonic": "100101010001",
  "super locrian pentatonic": "100110100010",
  "minor hexatonic": "101101010001",
  augmented: "100110011001",
  "major blues": "101110010100",
  piongio: "101001010110",
  "prometheus neopolitan": "110010100110",
  prometheus: "101010100110",
  "mystery #1": "110010101010",
  "six tone symmetric": "110011001100",
  "whole tone": "101010101010",
  "messiaen's mode #5": "110001110001",
  "minor blues": "100101110010",
  "locrian major": "101011101010",
  "double harmonic lydian": "110010111001",
  "harmonic minor": "101101011001",
  altered: "110110101010",
  "locrian #2": "101101101010",
  "mixolydian b6": "101011011010",
  "lydian dominant": "101010110110",
  lydian: "101010110101",
  "lydian augmented": "101010101101",
  "dorian b2": "110101010110",
  "melodic minor": "101101010101",
  locrian: "110101101010",
  ultralocrian: "110110101100",
  "locrian 6": "110101100110",
  "augmented heptatonic": "100111011001",
  "romanian minor": "101100110110",
  "dorian #4": "101100110110",
  "lydian diminished": "101100110101",
  phrygian: "110101011010",
  "leading whole tone": "101010101011",
  "lydian minor": "101010111010",
  "phrygian dominant": "110011011010",
  balinese: "110101011001",
  "neopolitan major": "110101010101",
  aeolian: "101101011010",
  "harmonic major": "101011011001",
  "double harmonic major": "110011011001",
  dorian: "101101010110",
  "hungarian minor": "101100111001",
  "hungarian major": "100110110110",
  oriental: "110011100110",
  flamenco: "110110110010",
  "todi raga": "110100111001",
  mixolydian: "101011010110",
  persian: "110011101001",
  major: "101011010101",
  enigmatic: "110010101011",
  "major augmented": "101011001101",
  "lydian #9": "100110110101",
  "messiaen's mode #4": "111001111001",
  "purvi raga": "110011111001",
  "spanish heptatonic": "110111011010",
  bebop: "101011010111",
  "bebop minor": "101111010110",
  "bebop major": "101011011101",
  "bebop locrian": "110101111010",
  "minor bebop": "101101011011",
  diminished: "101101101101",
  ichikosucho: "101011110101",
  "minor six diminished": "101101011101",
  "half-whole diminished": "110110110110",
  "kafi raga": "100111010111",
  "messiaen's mode #6": "101011101011",
  "composite blues": "101111110110",
  "messiaen's mode #3": "101110111011",
  "messiaen's mode #7": "111101111101",
  chromatic: "111111111111",
  ionian: "101011010101",
  minor: "101101011010",
  Kanakangi: "111001011100",
  Ratnangi: "111001011010",
  Ganamurti: "111001011001",
  Vanaspati: "111001010110",
  Manavati: "111001010101",
  Tanarupi: "111001010011",
  Senavati: "110101011100",
  Hanumatodi: "110101011010",
  Dhenuka: "110101011001",
  Natakapriya: "110101010110",
  Kokilapriya: "110101010101",
  Rupavati: "110101010011",
  Gayakapriya: "110011011100",
  Vakulabharanam: "110011011010",
  Mayamalavagowla: "110011011001",
  Chakravakam: "110011010110",
  Suryakantam: "110011010101",
  Hatakambari: "110011010011",
  Jhankaradhwani: "101101011100",
  Natabhairavi: "101101011010",
  Keeravani: "101101011001",
  Kharaharapriya: "101101010110",
  Gourimanohari: "101101010101",
  Varunapriya: "101101010011",
  Mararanjani: "101011011100",
  Charukesi: "101011011010",
  Sarasangi: "101011011001",
  Harikambhoji: "101011010110",
  Dheerasankarabaranam: "101011010101",
  Naganandini: "101011010011",
  Yagapriya: "100111011100",
  Ragavardhini: "100111011010",
  Gangeyabhushani: "100111011001",
  Vagadheeswari: "100111010110",
  Shulini: "100111010101",
  Chalanata: "100111010011",
  Salagam: "111000111100",
  Jalarnavam: "111000111010",
  Jhalavarali: "111000111001",
  Navaneetam: "111000110110",
  Pavani: "111000110101",
  Raghupriya: "111000110011",
  Gavambhodi: "110100111100",
  Bhavapriya: "110100111010",
  Shubhapantuvarali: "110100111001",
  Shadvidamargini: "110100110110",
  Suvarnangi: "110100110101",
  Divyamani: "110100110011",
  Dhavalambari: "110010111100",
  Namanarayani: "110010111010",
  Kamavardhini: "110010111001",
  Ramapriya: "110010110110",
  Gamanashrama: "110010110101",
  Vishwambari: "110010110011",
  Shamalangi: "101100111100",
  Shanmukhapriya: "101100111010",
  Simhendramadhyamam: "101100111001",
  Hemavati: "101100110110",
  Dharmavati: "101100110101",
  Neetimati: "101100110011",
  Kantamani: "101010111100",
  Rishabhapriya: "101010111010",
  Latangi: "101010111001",
  Vachaspati: "101010110110",
  Mechakalyani: "101010110101",
  Chitrambari: "101010110011",
  Sucharitra: "100110111100",
  "Jyoti swarupini": "100110111010",
  Dhatuvardani: "100110111001",
  Nasikabhushini: "100110110110",
  Kosalam: "100110110101",
  Rasikapriya: "100110110011"
};
var chordMaps_default = {
  "5th": "100000010000",
  "M7#5sus4": "100001001001",
  "7#5sus4": "100001001010",
  sus4: "100001010000",
  M7sus4: "100001010001",
  "7sus4": "100001010010",
  "7no5": "100010000010",
  aug: "100010001000",
  M7b6: "100010001001",
  "maj7#5": "100010001001",
  "7#5": "100010001010",
  "7b13": "100010001010",
  M: "100010010000",
  maj7: "100010010001",
  "7th": "100010010010",
  "6th": "100010010100",
  "7add6": "100010010110",
  "7b6": "100010011010",
  Mb5: "100010100000",
  M7b5: "100010100001",
  "7b5": "100010100010",
  "maj#4": "100010110001",
  "7#11": "100010110010",
  "M6#11": "100010110100",
  "7#11b13": "100010111010",
  "m#5": "100100001000",
  mb6M7: "100100001001",
  "m7#5": "100100001010",
  m: "100100010000",
  "m/ma7": "100100010001",
  m7: "100100010010",
  m6: "100100010100",
  mMaj7b6: "100100011001",
  dim: "100100100000",
  oM7: "100100100001",
  m7b5: "100100100010",
  dim7: "100100100100",
  o7M7: "100100100101",
  "4th": "100101000010",
  madd4: "100101010000",
  m7add11: "100101010010",
  "+add#9": "100110001000",
  "7#5#9": "100110001010",
  "7#9": "100110010010",
  "13#9": "100110010110",
  "7#9b13": "100110011010",
  "maj7#9#11": "100110110001",
  "7#9#11": "100110110010",
  "13#9#11": "100110110110",
  "7#9#11b13": "100110111010",
  sus2: "101000010000",
  "M9#5sus4": "101001001001",
  sus24: "101001010000",
  M9sus4: "101001010001",
  "11th": "101001010010",
  "9sus4": "101001010010",
  "13sus4": "101001010110",
  "9no5": "101010000010",
  "13no5": "101010000110",
  "M#5add9": "101010001000",
  "maj9#5": "101010001001",
  "9#5": "101010001010",
  "9b13": "101010001010",
  Madd9: "101010010000",
  maj9: "101010010001",
  "9th": "101010010010",
  "6/9": "101010010100",
  maj13: "101010010101",
  M7add13: "101010010101",
  "13th": "101010010110",
  M9b5: "101010100001",
  "9b5": "101010100010",
  "13b5": "101010100110",
  "9#5#11": "101010101010",
  "maj9#11": "101010110001",
  "9#11": "101010110010",
  "69#11": "101010110100",
  "M13#11": "101010110101",
  "13#11": "101010110110",
  "9#11b13": "101010111010",
  "m9#5": "101100001010",
  madd9: "101100010000",
  mM9: "101100010001",
  m9: "101100010010",
  m69: "101100010100",
  m13: "101100010110",
  mMaj9b6: "101100011001",
  m9b5: "101100100010",
  m11A: "101101001010",
  m11: "101101010010",
  b9sus: "110001010010",
  "11b9": "110001010010",
  "7sus4b9b13": "110001011010",
  alt7: "110010000010",
  "7#5b9": "110010001010",
  Maddb9: "110010010000",
  M7b9: "110010010001",
  "7b9": "110010010010",
  "13b9": "110010010110",
  "7b9b13": "110010011010",
  "7#5b9#11": "110010101010",
  "7b9#11": "110010110010",
  "13b9#11": "110010110110",
  "7b9b13#11": "110010111010",
  mb6b9: "110100001000",
  "7b9#9": "110110010010"
};
var DEFAULT_OCTAVE = 4;
var sharpToFlatMap = {
  "C#": "Db",
  "D#": "Eb",
  "F#": "Gb",
  "G#": "Ab",
  "A#": "Bb",
  "CB": "B",
  "FB": "E",
  "E#": "F",
  "B#": "C"
};
function sharpToFlat(root) {
  return sharpToFlatMap[root.toUpperCase()] || root.charAt(0).toUpperCase() + root.slice(1);
}
var CHROMATIC = [
  "C",
  "Db",
  "D",
  "Eb",
  "E",
  "F",
  "Gb",
  "G",
  "Ab",
  "A",
  "Bb",
  "B"
];
function getChromatic(root, octave) {
  const index = CHROMATIC.indexOf(root);
  if (index === -1) {
    throw new Error(`${root} is not a valid root note`);
  }
  const o1 = CHROMATIC.map((n) => n + octave);
  const o2 = CHROMATIC.map((n) => n + (octave + 1));
  const c = o1.concat(o2);
  return c.slice(index);
}
var scaleMap = scaleMaps_default;
var chordMap = chordMaps_default;
function _getNotesForScaleOrChord({ scale: scale2, chord: chord2 }) {
  const input = scale2 || chord2;
  const SCALE_OR_CHORD = scale2 ? "scale" : "chord";
  if (typeof input !== "string") {
    throw new Error(`${input} is not a valid input for ${SCALE_OR_CHORD}`);
  }
  const rootOctaveScale = input.trim();
  const indexOfFirstSpace = rootOctaveScale.indexOf(" ");
  let scaleOrChord;
  let rootOctave;
  if (indexOfFirstSpace === -1) {
    scaleOrChord = rootOctaveScale.slice(1);
    rootOctave = rootOctaveScale[0];
    if (rootOctaveScale[1] === "b" || rootOctaveScale[1] === "#") {
      scaleOrChord = rootOctaveScale.slice(2);
      rootOctave += rootOctaveScale[1];
    }
  } else {
    scaleOrChord = rootOctaveScale.slice(indexOfFirstSpace === -1 ? 1 : indexOfFirstSpace + 1);
    rootOctave = rootOctaveScale.slice(0, indexOfFirstSpace);
  }
  const root = sharpToFlat(rootOctave.replace(/\d/g, ""));
  const octaveNumber = rootOctave.replace(/\D/g, "");
  const octave = octaveNumber !== "" ? +rootOctave.replace(/\D/g, "") : DEFAULT_OCTAVE;
  if (isNaN(octave)) {
    throw new Error(`${rootOctave[0]} does not have a valid octave`);
  }
  if (!scaleMap[scaleOrChord] && !chordMap[scaleOrChord]) {
    throw new Error(`${rootOctaveScale} is not a valid ${SCALE_OR_CHORD}`);
  }
  const chroma = getChromatic(root, octave);
  const acc = [];
  let p1 = 0, p2 = 0;
  const map = scale2 ? scaleMap : chordMap;
  while (p1 < map[scaleOrChord].length) {
    if (map[scaleOrChord][p1] === "1") {
      acc.push(chroma[p2]);
    }
    p1++;
    p2++;
  }
  return acc;
}
function inlineChord(rootChord_Oct) {
  const B9SUS = "b9sus";
  let root, chord2, octave = DEFAULT_OCTAVE;
  if (rootChord_Oct.includes(B9SUS)) {
    chord2 = B9SUS;
    root = rootChord_Oct.slice(0, rootChord_Oct.indexOf(B9SUS));
  } else {
    root = rootChord_Oct[0];
    chord2 = rootChord_Oct.slice(1);
    if (rootChord_Oct[1] === "b" || rootChord_Oct[1] === "#") {
      root += rootChord_Oct[1];
      chord2 = rootChord_Oct.slice(2);
    }
  }
  if (rootChord_Oct.includes("_")) {
    octave = +rootChord_Oct.split("_")[1];
    chord2 = chord2.slice(0, chord2.indexOf("_"));
  }
  return _getNotesForScaleOrChord({ chord: root + octave + " " + chord2 });
}
function scale(scale2) {
  return _getNotesForScaleOrChord({ scale: scale2 });
}

// src/lib/euclidean.js
function euclidean(onsets, steps, rotation = 0) {
  const k = Math.max(0, parseInt(onsets, 10) || 0);
  const n = Math.max(1, parseInt(steps, 10) || 1);
  if (k <= 0) return "-".repeat(n);
  if (k >= n) return "x".repeat(n);
  const out = [];
  for (let i = 0; i < n; i += 1) {
    out.push(i * k % n < k ? "x" : "-");
  }
  const r = ((parseInt(rotation, 10) || 0) % n + n) % n;
  if (r === 0) return out.join("");
  return out.slice(-r).concat(out.slice(0, -r)).join("");
}
function parseEuclideanToken(token) {
  const m = String(token || "").match(/^(?:[a-zA-Z_]\w*)?\((\d+)\s*,\s*(\d+)(?:\s*,\s*(-?\d+))?\)$/);
  if (!m) return null;
  return {
    onsets: parseInt(m[1], 10),
    steps: parseInt(m[2], 10),
    rotation: m[3] ? parseInt(m[3], 10) : 0
  };
}

// src/lib/tokenize.js
var RE_SEPARATOR = /\|/;
var RE_PATTERN = /^(?:[x_-]|\[.+?\])+$/;
var RE_NUMBER = /^(?:\.?\d+|\d+(?:\.\d+)?)$/;
var RE_CHORD = /^[a-gA-G][^#\s]*\d+(?:\.\.)?$/;
var RE_NOTE = /^[a-gA-G][#b]?\d+$/;
var RE_MODE = /^(?![ivIV]{1,3})[a-z]{2,}/;
var RE_PROG = /^[ivIV]{1,3}°?$/;
var RE_TRIM = /\.+$/;
var RE_DEGREE = /^\d+(?:\.\.\d+)?$/;
var RE_PATTERN_REF = /^&[a-zA-Z_]\w*$/;
var CACHE = {};
function split(value) {
  if (typeof value !== "string" || !value.length) return [];
  const out = [];
  for (let i = 0; i < value.length; i += 1) {
    const ch = value[i];
    if (ch === "[") {
      const end = value.indexOf("]", i + 1);
      if (end < 0) break;
      out.push(value.slice(i + 1, end).split(""));
      i = end;
      continue;
    }
    out.push(ch);
  }
  return out;
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
function isDegree(value) {
  return validate(RE_DEGREE, value);
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
  const ignore = /* @__PURE__ */ new Set();
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
    if (ignore.has(i)) return prev;
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
    if (cur === "**") {
      const degrees = [];
      let offset = i + 1;
      while (tokens[offset] && isDegree(tokens[offset])) {
        degrees.push(tokens[offset]);
        ignore.add(offset);
        offset += 1;
      }
      if (!degrees.length) {
        throw new Error(`Missing degree expression after '**', given '${tokens.slice(0, i + 1).join(" ")}'`);
      }
      add("degrees", degrees);
      return prev;
    }
    if (typeof cur === "string" && cur.charAt() === "*") {
      throw new Error(`Deprecated repeat syntax '${cur}'. Use 'xN' instead`);
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
    if (RE_PATTERN_REF.test(cur)) {
      add("pattern_ref", cur);
      return prev;
    }
    if (isProgression(cur)) {
      if (last.type === "mode" || last.type === "progression" || last.type === "value") {
        last.value += ` ${cur}`;
        return prev;
      }
      add("value", cur);
      return prev;
    }
    if (cur === "++") {
      const progression = [];
      let offset = i + 1;
      while (tokens[offset] && isProgression(tokens[offset])) {
        progression.push(tokens[offset]);
        ignore.add(offset);
        offset += 1;
      }
      if (!progression.length) {
        throw new Error(`Missing progression after '++', given '${tokens.slice(0, i + 1).join(" ")}'`);
      }
      add("progression", progression.join(" "));
      return prev;
    }
    if (cur.charAt() === "#") {
      add("channel", cur);
      return prev;
    }
    const euclid = parseEuclideanToken(cur);
    if (euclid) {
      add("pattern", euclidean(euclid.onsets, euclid.steps, euclid.rotation));
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
      const rawMin = parts[0];
      const rawMax = parts[1];
      const min = rawMin ? isNumber(rawMin) ? parseInt(rawMin, 10) : rawMin : 1;
      const max = rawMax ? isNumber(rawMax) ? parseInt(rawMax, 10) : rawMax : Infinity;
      if (typeof min === "number" && min < 1) {
        throw new Error(`Slice start must be >= 1, given '${cur}'`);
      }
      type = "slice";
      cur = [min, max];
    }
    if (typeof cur === "string" && !isPattern(cur) && (cur.charAt() === "/" || /^x\d+$/.test(cur))) {
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

// src/lib/arrangement.js
var RE_SECTION = /^[A-Z][A-Z0-9]*$/;
var RE_REPEAT = /^x(\d+)$/;
function isSection(value) {
  return RE_SECTION.test(String(value || ""));
}
function parseRepeat(value) {
  const m = String(value || "").match(RE_REPEAT);
  if (!m) return null;
  const n = parseInt(m[1], 10);
  if (!Number.isFinite(n)) return null;
  return Math.max(1, n);
}
function lex(body) {
  return (String(body || "").match(/\[|\]|[^\s\[\]]+/g) || []).map((text, idx) => ({
    text,
    index: idx,
    order: -1,
    kind: "unknown",
    blockId: null,
    blockLive: false,
    blockStartOrder: null,
    blockEndOrder: null
  }));
}
function applyBlockMeta(token, blockMeta) {
  if (!token || !blockMeta) return;
  token.blockId = blockMeta.id;
  token.blockLive = Boolean(blockMeta.live);
  token.blockStartOrder = blockMeta.startOrder;
  token.blockEndOrder = blockMeta.endOrder;
}
function parseSimpleRange(tokens, start, end, state, blockMeta, expanded) {
  let i = start;
  while (i < end) {
    const token = tokens[i];
    if (!token) break;
    applyBlockMeta(token, blockMeta);
    if (token.text === "[" || token.text === "]") {
      token.kind = token.text === "[" ? "block-open" : "block-close";
      i += 1;
      continue;
    }
    if (isSection(token.text)) {
      token.kind = "section";
      state.lastName = token.text;
      expanded.push({
        name: token.text,
        displayOrder: token.order,
        blockId: blockMeta ? blockMeta.id : null,
        blockLive: blockMeta ? Boolean(blockMeta.live) : false,
        blockStartOrder: blockMeta ? blockMeta.startOrder : null,
        blockEndOrder: blockMeta ? blockMeta.endOrder : null
      });
      i += 1;
      continue;
    }
    if (token.text === "%" && state.lastName) {
      token.kind = "repeat-last";
      expanded.push({
        name: state.lastName,
        displayOrder: token.order,
        blockId: blockMeta ? blockMeta.id : null,
        blockLive: blockMeta ? Boolean(blockMeta.live) : false,
        blockStartOrder: blockMeta ? blockMeta.startOrder : null,
        blockEndOrder: blockMeta ? blockMeta.endOrder : null
      });
      i += 1;
      continue;
    }
    const repeat2 = parseRepeat(token.text);
    if (repeat2 && state.lastName) {
      token.kind = "repeat";
      for (let k = 1; k < repeat2; k += 1) {
        expanded.push({
          name: state.lastName,
          displayOrder: token.order,
          blockId: blockMeta ? blockMeta.id : null,
          blockLive: blockMeta ? Boolean(blockMeta.live) : false,
          blockStartOrder: blockMeta ? blockMeta.startOrder : null,
          blockEndOrder: blockMeta ? blockMeta.endOrder : null
        });
      }
      i += 1;
      continue;
    }
    token.kind = "unknown";
    i += 1;
  }
}
function parseArrangementBody(body, options = {}) {
  const orderOffset = Number.isFinite(options.orderOffset) ? options.orderOffset : 0;
  const blockOffset = Number.isFinite(options.blockOffset) ? options.blockOffset : 0;
  const tokens = lex(body);
  tokens.forEach((token, i2) => {
    token.order = orderOffset + i2;
  });
  const expanded = [];
  const state = { lastName: null };
  let nextBlock = blockOffset;
  let i = 0;
  while (i < tokens.length) {
    const token = tokens[i];
    if (!token) break;
    if (token.text !== "[") {
      parseSimpleRange(tokens, i, i + 1, state, null, expanded);
      i += 1;
      continue;
    }
    let close = -1;
    for (let j = i + 1; j < tokens.length; j += 1) {
      if (tokens[j].text === "]") {
        close = j;
        break;
      }
    }
    if (close < 0) {
      token.kind = "unknown";
      i += 1;
      continue;
    }
    const repeatToken = tokens[close + 1];
    const repeatCount = repeatToken ? parseRepeat(repeatToken.text) : null;
    const blockMeta = {
      id: `block-${nextBlock}`,
      live: !repeatCount,
      startOrder: token.order,
      endOrder: tokens[close].order
    };
    nextBlock += 1;
    const innerExpanded = [];
    parseSimpleRange(tokens, i, close + 1, state, blockMeta, innerExpanded);
    if (!innerExpanded.length) {
      i = close + (repeatCount ? 2 : 1);
      if (repeatToken && repeatCount) {
        repeatToken.kind = "repeat";
      }
      continue;
    }
    if (repeatToken && repeatCount) {
      repeatToken.kind = "repeat";
      for (let n = 0; n < repeatCount; n += 1) {
        innerExpanded.forEach((item) => {
          expanded.push({
            ...item,
            displayOrder: n === 0 ? item.displayOrder : repeatToken.order,
            blockLive: false
          });
        });
      }
      i = close + 2;
      continue;
    }
    expanded.push(...innerExpanded);
    i = close + 1;
  }
  return {
    tokens,
    expanded,
    nextOrder: orderOffset + tokens.length,
    nextBlock
  };
}
function buildArrangementMain(body) {
  const parsed = parseArrangementBody(body);
  if (parsed.tokens.some((token) => token.kind === "unknown")) return null;
  if (!parsed.expanded.length) return null;
  return parsed.expanded.map((item) => ({ type: "value", value: item.name }));
}

// src/lib/parser.js
var ROMAN_TO_DEGREE = {
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

// src/lib/mixup.js
var import_midi_writer_js = __toESM(require_build(), 1);
var import_jsmidgen = __toESM(require_jsmidgen(), 1);
var { Utils } = import_midi_writer_js.default;
var { File, Track } = import_jsmidgen.default;
var DEFAULT = Symbol("@main");
function mergeNotePayload(a, b) {
  const aa = Array.isArray(a) ? a : a ? [a] : [];
  const bb = Array.isArray(b) ? b : b ? [b] : [];
  const out = [];
  aa.concat(bb).forEach((note) => {
    if (typeof note === "undefined" || note === null) return;
    if (!out.includes(note)) out.push(note);
  });
  if (out.length === 0) return void 0;
  if (out.length === 1) return out[0];
  return out;
}
function mergeTicks(left, right) {
  if (Array.isArray(left) || Array.isArray(right)) {
    if (Array.isArray(left) && Array.isArray(right)) {
      const max = Math.max(left.length, right.length);
      const out2 = [];
      for (let i = 0; i < max; i += 1) {
        out2.push(mergeTicks(left[i], right[i]));
      }
      return out2;
    }
    return typeof right !== "undefined" ? right : left;
  }
  if (!left) return right;
  if (!right) return left;
  const lv = left.v || 0;
  const rv = right.v || 0;
  const hitLeft = lv > 0;
  const hitRight = rv > 0;
  if (!hitLeft && hitRight) return { ...right };
  if (hitLeft && !hitRight) return { ...left };
  if (!hitLeft && !hitRight) {
    return left.h || right.h ? { v: 0, h: 1 } : { v: 0 };
  }
  const out = {
    ...left,
    ...right,
    v: Math.max(lv, rv)
  };
  const note = mergeNotePayload(left.n, right.n);
  if (typeof note !== "undefined") out.n = note;
  return out;
}
function mergeTickLayers(base, top) {
  const max = Math.max(base.length, top.length);
  const out = [];
  for (let i = 0; i < max; i += 1) {
    out.push(mergeTicks(base[i], top[i]));
  }
  return out;
}
function build(midi, bpm = 120, length = 16) {
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
  midi.forEach((section) => {
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
            const note = tick.n || "C3";
            if (Array.isArray(note)) {
              track.noteOff(chan, "", q);
              track.addChord(chan, note, q, tick.v);
            } else {
              track.noteOn(chan, note, q, tick.v);
              track.noteOff(chan, note, q);
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
  function cyclical(list, index) {
    if (!Array.isArray(list) || !list.length) return void 0;
    const pos = (index % list.length + list.length) % list.length;
    return list[pos];
  }
  function resolve(x) {
    if (Array.isArray(x)) {
      return x.map(resolve);
    }
    if (typeof x === "string" && x.length > 1 && /[x_\-\[\]]/.test(x)) {
      const parts = split(x);
      if (Array.isArray(parts) && parts.length > 1) {
        return parts.map(resolve);
      }
    }
    let token;
    if (!"-x_".includes(x)) {
      token = { v: 127, l: x };
      const velocity2 = cyclical(values, offset);
      token.v = typeof velocity2 !== "undefined" ? velocity2 : token.v || 0;
      const note2 = cyclical(notes, offset);
      if (typeof note2 !== "undefined") token.n = note2;
      if (values.length === 1) token.v = values[0];
      if (token.v || token.n) offset += 1;
      return token;
    }
    if (x === "-") {
      return { v: 0 };
    }
    if (x === "_") {
      return { v: 0, h: 1 };
    }
    token = { v: 127 };
    const velocity = cyclical(values, offset);
    token.v = typeof velocity !== "undefined" ? velocity : token.v || 0;
    const note = cyclical(notes, offset);
    if (typeof note !== "undefined") token.n = note;
    if (values.length === 1) token.v = values[0];
    if (token.v || token.n) offset += 1;
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
      const [tag, midi] = ch.split("#");
      const key = tag || DEFAULT;
      let ticks;
      clips.forEach((clip) => {
        const values = clip.values ? reduce(clip.values, ctx.data) : [];
        const notes = clip.data ? reduce(clip.data, ctx.data) : [];
        if (clip.input) {
          if (values.length > 1) values.shift();
          const input = flatten(reduce(clip.input, ctx.data, pack(values, notes)));
          const mode = clip.values && clip.values[0] && clip.values[0].type === "mode" ? clip.values[0].value : null;
          input.forEach((tick) => {
            if (tick.v > 0) {
              if (mode && values.length > 0) tick[mode[0].toLowerCase()] = values.shift();
            }
          });
          if (clip.merge === "layer" && ticks) {
            ticks = mergeTickLayers(ticks, input);
          } else {
            ticks = input;
          }
        } else if (ticks) {
          const mode = clip.values && clip.values[0] && clip.values[0].type === "mode" ? clip.values[0].value : null;
          ticks.forEach((tick) => {
            if (tick.v > 0) {
              if (mode && values.length > 0) tick[mode[0].toLowerCase()] = values.shift();
            }
          });
        }
      });
      if (!scenes[key]) scenes[key] = { tracks: [] };
      scenes[key].tracks.push([midi, name, ticks]);
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

// src/lib/compress.js
var DEFAULT_OPTIONS = {
  aggressive: false,
  maxVariableIndex: 1,
  minOccurrences: 2,
  minSequenceLength: 2
};
var VARIABLE_PREFIX = "c";
var CANDIDATE_TOKEN_TYPES = /* @__PURE__ */ new Set(["note", "chord"]);
function normalizeSource(source) {
  return String(source || "").replace(/\r/g, "").trim();
}
function findSuffixDashCommentIndex2(rawLine) {
  const match = rawLine.match(/\s--\s/);
  if (!match || typeof match.index !== "number") return -1;
  if (!/\S/.test(rawLine.slice(0, match.index))) return -1;
  return match.index;
}
function stripComment(rawLine) {
  const semicolonIndex = rawLine.indexOf(";");
  const dashCommentIndex = findSuffixDashCommentIndex2(rawLine);
  let index = -1;
  if (semicolonIndex >= 0 && dashCommentIndex >= 0) {
    index = Math.min(semicolonIndex, dashCommentIndex);
  } else if (semicolonIndex >= 0) {
    index = semicolonIndex;
  } else if (dashCommentIndex >= 0) {
    index = dashCommentIndex;
  }
  if (index < 0) return {
    code: rawLine,
    comment: ""
  };
  return {
    code: rawLine.slice(0, index),
    comment: rawLine.slice(index)
  };
}
function toInt(value, fallback) {
  const parsed = parseInt(value, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}
function tokenText(token) {
  if (!token) return "";
  switch (token.type) {
    case "channel":
      return String(token.value);
    case "chord":
      return token.value.join("|");
    case "number":
    case "mode":
    case "param":
    case "value":
      return String(token.value);
    case "slice":
      return `${token.value[0]}..${token.value[1]}`;
    case "pattern":
      return token.value;
    default:
      return String(token.value);
  }
}
function tokensToText(tokens) {
  return tokens.map(tokenText).join(" ");
}
function isCandidateToken(token) {
  return CANDIDATE_TOKEN_TYPES.has(token && token.type);
}
function buildLineSegments(tokens, hasChannel) {
  const segments = [];
  if (!hasChannel) {
    return [{
      kind: "values",
      start: 0,
      end: tokens.length,
      tokens: tokens.slice(0, tokens.length)
    }];
  }
  const notes = tokens.findIndex((token) => ["note", "chord", "param"].includes(token.type));
  const index = tokens.findIndex((token) => token.type === "pattern");
  const value = index > 0 ? tokens.slice(index) : tokens;
  const offset = value.findIndex((token) => token.type !== "pattern");
  const inputs = tokens.slice(0, index > 0 ? index : 1);
  let values = [];
  let data = [];
  let valuesStart = -1;
  let dataStart = -1;
  if (notes > 0 && index === -1) {
    values = value.slice(1, notes);
    valuesStart = 1;
    data = value.slice(notes);
    dataStart = valuesStart + values.length;
  } else if (offset > 0) {
    data = value.slice(offset);
    dataStart = index + offset;
  } else if (offset === 0) {
    values = value.slice(1);
    valuesStart = 1;
  }
  if (inputs.length > 1) {
    let rest = inputs.slice(1);
    if (rest[0] && rest[0].type === "value" && (rest[0].value === "!" || rest[0].value === "+")) {
      rest = rest.slice(1);
    }
    if (rest.length > 0) {
      values = rest;
      valuesStart = 1;
    }
  }
  if (valuesStart >= 0 && values.length) {
    segments.push({
      kind: "values",
      start: valuesStart,
      end: valuesStart + values.length,
      tokens: tokens.slice(valuesStart, valuesStart + values.length)
    });
  }
  if (dataStart >= 0 && data.length) {
    segments.push({
      kind: "data",
      start: dataStart,
      end: dataStart + data.length,
      tokens: tokens.slice(dataStart, dataStart + data.length)
    });
  }
  return segments;
}
function parseClipLines(source) {
  const lines = normalizeSource(source).split("\n");
  const lineEntries = /* @__PURE__ */ new Map();
  const segments = [];
  let prefix = "";
  let channel = null;
  lines.forEach((rawLine, lineNumber) => {
    const { code, comment } = stripComment(rawLine);
    const line = code.trim();
    if (!line) return;
    if (line.charAt() === ";") return;
    if (line.indexOf("# ") >= 0) {
      prefix = "";
      channel = null;
      return;
    }
    if (line.charAt() === "@") {
      prefix = line.substr(1).trim().split(" ")[0];
      channel = null;
      return;
    }
    if (line.charAt() === ">" || line.indexOf(":") > 0 || line.charAt() === "%" && line.charAt(1) !== "%") {
      return;
    }
    let tokens;
    try {
      tokens = transform(line);
    } catch (error) {
      const msg = typeof error === "string" ? error : error.message;
      throw new SyntaxError(`${msg}
  at line ${lineNumber + 1}
${line}`);
    }
    if (!tokens.length) return;
    const hasChannel = tokens[0] && tokens[0].type === "channel";
    if (!hasChannel && !channel) {
      throw new TypeError(`Missing channel, given '${line}'`);
    }
    if (hasChannel) {
      channel = `${prefix}${tokens[0].value}`;
      void channel;
    }
    const lineSegments = buildLineSegments(tokens, hasChannel);
    if (!lineSegments.length) return;
    const entry = {
      raw: rawLine,
      indent: rawLine.match(/^\s*/)[0] || "",
      comment,
      tokens,
      segments: []
    };
    lineSegments.forEach((range2) => {
      const segment = {
        id: segments.length,
        line: lineNumber,
        kind: range2.kind,
        start: range2.start,
        end: range2.end,
        tokens: range2.tokens
      };
      segments.push(segment);
      entry.segments.push(segment);
    });
    lineEntries.set(lineNumber, entry);
  });
  return {
    lines,
    lineEntries,
    segments
  };
}
function collectCandidates(segments, minSequenceLength) {
  const literals = /* @__PURE__ */ new Map();
  const sequences = /* @__PURE__ */ new Map();
  segments.forEach((segment) => {
    segment.tokens.forEach((token, index) => {
      if (token.type !== "chord") return;
      const text = tokenText(token);
      const key = `chord:${text}`;
      if (!literals.has(key)) {
        literals.set(key, {
          key,
          text,
          textLength: text.length,
          tokenCount: 1,
          occurrences: []
        });
      }
      literals.get(key).occurrences.push({
        segmentId: segment.id,
        start: index,
        length: 1
      });
    });
    if (segment.tokens.length < minSequenceLength) return;
    for (let start = 0; start < segment.tokens.length; start += 1) {
      if (!isCandidateToken(segment.tokens[start])) continue;
      const parts = [];
      for (let end = start; end < segment.tokens.length; end += 1) {
        const token = segment.tokens[end];
        if (!isCandidateToken(token)) break;
        parts.push(tokenText(token));
        if (parts.length < minSequenceLength) continue;
        const text = parts.join(" ");
        const key = `seq:${text}`;
        if (!sequences.has(key)) {
          sequences.set(key, {
            key,
            text,
            textLength: text.length,
            tokenCount: parts.length,
            occurrences: []
          });
        }
        sequences.get(key).occurrences.push({
          segmentId: segment.id,
          start,
          length: parts.length
        });
        const existing = sequences.get(key);
        if (parts.length > existing.tokenCount) {
          existing.tokenCount = parts.length;
          existing.textLength = text.length;
        }
      }
    }
  });
  return {
    literals: [...literals.values()],
    sequences: [...sequences.values()]
  };
}
function sortCandidates(candidates, options) {
  return candidates.filter((candidate) => candidate.occurrences.length >= options.minOccurrences).sort((a, b) => {
    if (b.tokenCount !== a.tokenCount) return b.tokenCount - a.tokenCount;
    if (b.textLength !== a.textLength) return b.textLength - a.textLength;
    if (b.occurrences.length !== a.occurrences.length) return b.occurrences.length - a.occurrences.length;
    return a.key.localeCompare(b.key);
  });
}
function releaseMarks(perSegmentUsed, marks) {
  marks.forEach(({ segmentId, index }) => {
    const slots = perSegmentUsed[segmentId];
    if (slots) {
      slots[index] = false;
    }
  });
}
function pickCandidate(candidate, perSegmentUsed, options, stats) {
  const ordered = candidate.occurrences.slice().sort((a, b) => {
    if (a.segmentId !== b.segmentId) return a.segmentId - b.segmentId;
    return a.start - b.start;
  });
  const selected = [];
  const marks = [];
  ordered.forEach((occurrence) => {
    const used = perSegmentUsed[occurrence.segmentId] || (perSegmentUsed[occurrence.segmentId] = []);
    let conflict = false;
    for (let i = occurrence.start; i < occurrence.start + occurrence.length; i += 1) {
      if (used[i]) {
        conflict = true;
        break;
      }
    }
    if (conflict) return;
    for (let i = occurrence.start; i < occurrence.start + occurrence.length; i += 1) {
      used[i] = true;
      marks.push({
        segmentId: occurrence.segmentId,
        index: i
      });
    }
    selected.push(occurrence);
  });
  if (selected.length < options.minOccurrences) {
    releaseMarks(perSegmentUsed, marks);
    return null;
  }
  const name = `${VARIABLE_PREFIX}${stats.nextVariable}`;
  const replacementText = `%${name}`;
  const definitionCost = options.aggressive ? 0 : candidate.textLength + replacementText.length + 1;
  const savings = selected.length * (candidate.textLength - replacementText.length) - definitionCost;
  if (!options.aggressive && savings <= 0) {
    releaseMarks(perSegmentUsed, marks);
    return null;
  }
  stats.nextVariable += 1;
  stats.totalReplacements += selected.length;
  stats.totalTokenSavings += selected.length * (candidate.tokenCount - 1) - 1;
  return {
    name,
    selected,
    candidate,
    savings
  };
}
function chooseCandidates(candidates, perSegmentUsed, options, stats) {
  const chosen = [];
  const ordered = sortCandidates(candidates, options);
  ordered.forEach((candidate) => {
    const picked = pickCandidate(candidate, perSegmentUsed, options, stats);
    if (!picked) return;
    chosen.push(picked);
  });
  return chosen;
}
function buildDefinitions(chosen, segments) {
  return chosen.map((item) => {
    const first = item.selected[0];
    const segment = segments[first.segmentId];
    const expression = segment.tokens.slice(first.start, first.start + first.length).map(tokenText).join(" ");
    return {
      name: `%${item.name}`,
      expression,
      line: `%${item.name} ${expression}`,
      replacements: item.selected.length,
      savings: item.savings
    };
  });
}
function applyReplacements(parsed, chosen) {
  const replacementsByLine = /* @__PURE__ */ new Map();
  chosen.forEach((item) => {
    const token = {
      type: "param",
      value: `%${item.name}`
    };
    item.selected.forEach((occurrence) => {
      const segment = parsed.segments[occurrence.segmentId];
      const start = segment.start + occurrence.start;
      const end = segment.start + occurrence.start + occurrence.length;
      const list = replacementsByLine.get(segment.line) || [];
      list.push({ start, end, token });
      replacementsByLine.set(segment.line, list);
    });
  });
  const outLines = parsed.lines.slice();
  replacementsByLine.forEach((replacements, lineNumber) => {
    const entry = parsed.lineEntries.get(lineNumber);
    if (!entry) return;
    const lineTokens = entry.tokens.slice();
    replacements.sort((a, b) => b.start - a.start).forEach((item) => {
      lineTokens.splice(item.start, item.end - item.start, item.token);
    });
    outLines[lineNumber] = `${entry.indent}${tokensToText(lineTokens)}${entry.comment}`;
  });
  return outLines;
}
function insertDefinitions(lines, definitions) {
  if (!definitions.length) return lines;
  const definitionLines = definitions.map((item) => item.line);
  let insertAt = 0;
  while (insertAt < lines.length) {
    const { code } = stripComment(lines[insertAt]);
    const clean = code.trim();
    if (!clean || clean.charAt() === ";" || clean.charAt() === "%") {
      insertAt += 1;
      continue;
    }
    break;
  }
  const output = lines.slice();
  output.splice(insertAt, 0, ...definitionLines);
  return output;
}
function parseExistingVariableIndexes(ast) {
  return Object.keys(ast.data || {}).filter((name) => /^%c\d+$/.test(name)).map((name) => parseInt(name.slice(2), 10)).filter((name) => Number.isFinite(name));
}
function safeMerge(ctx) {
  try {
    return merge(ctx);
  } catch (error) {
    return null;
  }
}
function compressDub(source, opts = {}) {
  const options = {
    ...DEFAULT_OPTIONS,
    ...opts,
    minOccurrences: toInt(opts.minOccurrences, DEFAULT_OPTIONS.minOccurrences),
    minSequenceLength: toInt(opts.minSequenceLength, DEFAULT_OPTIONS.minSequenceLength)
  };
  const normalized = normalizeSource(source);
  const sourceAst = parse(normalized);
  const parsed = parseClipLines(normalized);
  const existing = parseExistingVariableIndexes(sourceAst);
  const nextVariable = Math.max(
    options.maxVariableIndex,
    existing.length ? Math.max(...existing) + 1 : options.maxVariableIndex
  );
  const stats = {
    nextVariable,
    totalReplacements: 0,
    totalTokenSavings: 0,
    variables: 0
  };
  const candidates = collectCandidates(parsed.segments, options.minSequenceLength);
  const usedBySegment = {};
  const chosenLiterals = chooseCandidates(candidates.literals, usedBySegment, options, stats);
  const chosenSequences = chooseCandidates(candidates.sequences, usedBySegment, options, stats);
  const chosen = [...chosenLiterals, ...chosenSequences];
  if (!chosen.length) {
    return {
      source: normalized,
      definitions: [],
      summary: {
        replacements: 0,
        variables: 0,
        tokenSavings: 0,
        charSavings: 0
      },
      merged: safeMerge(sourceAst),
      mergedCompressed: null,
      hasCompressed: false
    };
  }
  const definitions = buildDefinitions(chosen, parsed.segments);
  const replacedLines = applyReplacements(parsed, chosen);
  const withDefinitions = insertDefinitions(replacedLines, definitions);
  const output = normalizeSource(withDefinitions.join("\n"));
  return {
    source: output,
    definitions,
    summary: {
      replacements: stats.totalReplacements,
      variables: definitions.length,
      tokenSavings: stats.totalTokenSavings,
      charSavings: Math.max(0, normalized.length - output.length)
    },
    merged: safeMerge(sourceAst),
    mergedCompressed: safeMerge(parse(output)),
    hasCompressed: true
  };
}

// src/lib/playground.js
function findSuffixDashCommentIndex3(line) {
  const match = String(line || "").match(/\s--\s/);
  if (!match || typeof match.index !== "number") return -1;
  if (!/\S/.test(String(line || "").slice(0, match.index))) return -1;
  return match.index;
}
function stripInlineComment2(line) {
  const value = String(line || "");
  const semicolonIndex = value.indexOf(";");
  const dashCommentIndex = findSuffixDashCommentIndex3(value);
  if (semicolonIndex < 0 && dashCommentIndex < 0) return value;
  if (semicolonIndex < 0) return value.slice(0, dashCommentIndex);
  if (dashCommentIndex < 0) return value.slice(0, semicolonIndex);
  return value.slice(0, Math.min(semicolonIndex, dashCommentIndex));
}
function splitDefinitionSuffixComment(line) {
  const raw = String(line || "");
  const semicolonIndex = raw.indexOf(";");
  const scoped = semicolonIndex >= 0 ? raw.slice(0, semicolonIndex) : raw;
  const dashCommentIndex = findSuffixDashCommentIndex3(scoped);
  if (dashCommentIndex < 0) return { code: scoped, comment: "" };
  return {
    code: scoped.slice(0, dashCommentIndex),
    comment: scoped.slice(dashCommentIndex + 4).trim()
  };
}
function extractDraftTempo(input) {
  const m = String(input || "").match(/^\s*;\s*tempo\s*:\s*(\d+(?:\.\d+)?)\s*$/im);
  if (!m) return null;
  const n = Math.round(parseFloat(m[1]));
  if (!Number.isFinite(n)) return null;
  return Math.max(60, Math.min(200, n));
}
function extractDraftBars(input) {
  const m = String(input || "").match(/^\s*;\s*bars\s*:\s*(\d+)\s*$/im);
  if (!m) return null;
  const n = parseInt(m[1], 10);
  if (!Number.isFinite(n)) return null;
  return Math.max(4, Math.min(32, n));
}
function extractDraftKey(input) {
  const m = String(input || "").match(/^\s*;\s*key\s*:\s*([+-]?\d+)\s*$/im);
  if (!m) return null;
  const n = parseInt(m[1], 10);
  if (!Number.isFinite(n)) return null;
  return Math.max(-12, Math.min(12, n));
}
function extractDraftBankSelection(input) {
  const out = {
    bank: null,
    drums: null,
    instruments: null
  };
  String(input || "").split(/\r?\n/).forEach((line) => {
    const m = String(line).match(/^\s*;\s*bank(?:\.(drums|instruments))?\s*:\s*([a-z0-9._-]+)\s*$/i);
    if (!m) return;
    const scope = String(m[1] || "bank").toLowerCase();
    const value = String(m[2] || "").trim();
    if (!value) return;
    if (scope === "bank") out.bank = value;
    if (scope === "drums") out.drums = value;
    if (scope === "instruments") out.instruments = value;
  });
  return out;
}
function buildMixFromMerged(midi) {
  const mix = [];
  function get(nth, name) {
    const key = nth + name;
    if (!get[key]) {
      const track = [nth, name, []];
      mix.push(track);
      get[key] = { track };
    }
    return get[key];
  }
  midi.forEach((section) => {
    section.forEach((parts) => {
      parts.forEach((e) => {
        const { track } = get(e[0], e[1]);
        for (let i = 0; i < e[2].length; i += 1) {
          track[2].push(e[2][i]);
        }
      });
    });
  });
  return mix;
}
function buildTrackLineMap(input, options = {}) {
  const map = /* @__PURE__ */ new Map();
  let currentTrack = null;
  String(input || "").split(/\r?\n/).forEach((rawLine, lineNumber) => {
    const line = stripInlineComment2(rawLine).trim();
    if (!line) return;
    if (/^#{1,2}\s+/.test(line) && !/^#\d+/.test(line)) {
      currentTrack = line.replace(/^#{1,2}\s+/, "").trim();
      return;
    }
    if (!currentTrack) return;
    const match = line.match(/^(#[^\s]+)\b/);
    if (!match) return;
    const resolvedChannel = resolveChannelToken(match[1], options.channelAliases);
    const key = `${parseInt(resolvedChannel.slice(1), 10)}/${currentTrack}`;
    const prev = map.get(key) || [];
    if (!prev.includes(lineNumber)) prev.push(lineNumber);
    map.set(key, prev);
  });
  return map;
}
function collectVariableDefinitions(input) {
  const out = [];
  const seen = /* @__PURE__ */ new Set();
  String(input || "").split(/\r?\n/).forEach((raw, idx) => {
    const { code, comment } = splitDefinitionSuffixComment(raw);
    const line = code.trim();
    const match = line.match(/^\s*([%&][^\s]+)\s+/);
    if (!match) return;
    const name = match[1];
    if (!name || seen.has(name)) return;
    seen.add(name);
    out.push({ name, line: idx + 1, comment });
  });
  return out;
}
function applyLatestInputWins(context) {
  Object.values(context && context.tracks || {}).forEach((channels) => {
    Object.keys(channels || {}).forEach((ch) => {
      const clips = channels[ch] || [];
      const lastInput = clips.reduce((idx, clip, i) => clip && clip.input ? i : idx, -1);
      if (lastInput > 0) channels[ch] = clips.slice(lastInput);
    });
  });
  return context;
}
function buildArrangementDisplayExpansion(sourceText) {
  const lines = String(sourceText || "").split(/\r?\n/);
  const expanded = [];
  let tokenOrder = 0;
  let blockOrder = 0;
  lines.forEach((rawLine) => {
    const noComment = rawLine.replace(/;.*$/, "");
    const trimmed = noComment.trim();
    if (!trimmed.startsWith(">")) return;
    const body = trimmed.slice(1).trim();
    if (!body) return;
    const parsed = parseArrangementBody(body, {
      orderOffset: tokenOrder,
      blockOffset: blockOrder
    });
    tokenOrder = parsed.nextOrder;
    blockOrder = parsed.nextBlock;
    expanded.push(...parsed.expanded);
  });
  return expanded;
}
function buildSectionTimeline(context, merged, sourceText) {
  if (!context || !Array.isArray(merged) || merged.length === 0) return [];
  if (!context.main || !context.main.length) return [];
  const expanded = buildArrangementDisplayExpansion(sourceText || "");
  const flattenedSections = [];
  merged.forEach((group) => {
    (group || []).forEach((parts) => {
      flattenedSections.push(parts);
    });
  });
  const timeline = [];
  let cursor = 0;
  flattenedSections.forEach((parts, idx) => {
    const mergedBeats = (parts || []).reduce((max, t) => {
      const len = Array.isArray(t[2]) ? t[2].length : 0;
      return Math.max(max, len);
    }, 0);
    const token = expanded[idx] || expanded[expanded.length - 1] || null;
    const name = token ? token.name : null;
    const displayOrder = token ? token.displayOrder : null;
    const blockId = token ? token.blockId : null;
    const blockLive = token ? Boolean(token.blockLive) : false;
    const blockStartOrder = token ? token.blockStartOrder : null;
    const blockEndOrder = token ? token.blockEndOrder : null;
    const beats = Math.max(1, mergedBeats);
    const start = cursor;
    const end = Math.max(start, start + beats - 1);
    cursor = end + 1;
    timeline.push({
      name,
      displayOrder,
      start,
      end,
      blockId,
      blockLive,
      blockStartOrder,
      blockEndOrder,
      blockStart: null,
      blockEnd: null
    });
  });
  const blocks = /* @__PURE__ */ new Map();
  timeline.forEach((item) => {
    if (!item.blockId) return;
    const prev = blocks.get(item.blockId);
    if (!prev) {
      blocks.set(item.blockId, {
        start: item.start,
        end: item.end
      });
      return;
    }
    prev.start = Math.min(prev.start, item.start);
    prev.end = Math.max(prev.end, item.end);
  });
  timeline.forEach((item) => {
    if (!item.blockId) return;
    const block = blocks.get(item.blockId);
    if (!block) return;
    item.blockStart = block.start;
    item.blockEnd = block.end;
  });
  return timeline;
}
function getSectionAtBeat(sectionTimeline, beatIndex) {
  const index = (sectionTimeline || []).findIndex((section) => section.name && beatIndex >= section.start && beatIndex <= section.end);
  if (index < 0) return null;
  return { index, item: sectionTimeline[index] };
}
function findTimelineIndex(sectionTimeline, displayOrder, name) {
  if (typeof displayOrder === "number" && displayOrder >= 0) {
    const idx = (sectionTimeline || []).findIndex((section) => section.displayOrder === displayOrder);
    if (idx >= 0) return idx;
  }
  if (name) return (sectionTimeline || []).findIndex((section) => section.name === name);
  return -1;
}
function getMaxPatternSlots(context) {
  if (!context || !context.trackPatternSlots) return 0;
  const slots = Object.values(context.trackPatternSlots);
  if (slots.length === 0) return 0;
  return Math.max(...slots);
}

// src/lib/lint.js
function deepVisit(node, fn) {
  if (Array.isArray(node)) {
    node.forEach((item) => deepVisit(item, fn));
    return;
  }
  fn(node);
}
function countPatternStats(node) {
  const stats = {
    hits: 0,
    slots: 0,
    sustainAfterHit: true
  };
  let seenHit = false;
  deepVisit(node, (value) => {
    if (typeof value !== "string") return;
    const parts = split(value);
    deepVisit(parts, (part) => {
      if (part === "x") {
        stats.hits += 1;
        stats.slots += 1;
        seenHit = true;
        return;
      }
      if (part === "-") {
        stats.slots += 1;
        return;
      }
      if (part === "_") {
        stats.slots += 1;
        if (!seenHit) stats.sustainAfterHit = false;
      }
    });
  });
  return stats;
}
function flattenSectionBeats(beats) {
  let active = 0;
  deepVisit(beats, (tick) => {
    if (tick && typeof tick === "object" && tick.v > 0) active += 1;
  });
  return active;
}
function findSuffixDashCommentIndex4(line) {
  const match = String(line || "").match(/\s--\s/);
  if (!match || typeof match.index !== "number") return -1;
  if (!/\S/.test(String(line || "").slice(0, match.index))) return -1;
  return match.index;
}
function stripInlineComment3(line) {
  const value = String(line || "");
  const semicolonIndex = value.indexOf(";");
  const dashCommentIndex = findSuffixDashCommentIndex4(value);
  if (semicolonIndex < 0 && dashCommentIndex < 0) return value;
  if (semicolonIndex < 0) return value.slice(0, dashCommentIndex);
  if (dashCommentIndex < 0) return value.slice(0, semicolonIndex);
  return value.slice(0, Math.min(semicolonIndex, dashCommentIndex));
}
function scanClipLineMap(source, opts = {}) {
  const clipLineMap = /* @__PURE__ */ new Map();
  const explicitClipCounts = /* @__PURE__ */ new Map();
  const sectionNames = /* @__PURE__ */ new Set();
  const sectionLineMap = /* @__PURE__ */ new Map();
  const trackLineMap = /* @__PURE__ */ new Map();
  const trackHasClip = /* @__PURE__ */ new Set();
  const variableDefinitionLineMap = /* @__PURE__ */ new Map();
  const variableReferenceCounts = /* @__PURE__ */ new Map();
  const patternDefinitionLineMap = /* @__PURE__ */ new Map();
  const patternReferenceCounts = /* @__PURE__ */ new Map();
  let track = null;
  let prefix = "";
  const counters = /* @__PURE__ */ new Map();
  String(source || "").split(/\r?\n/).forEach((rawLine, nth) => {
    const line = stripInlineComment3(rawLine).trim();
    if (!line) return;
    if (line.indexOf("# ") >= 0) {
      track = line.split(/\s+/).slice(1).join(" ");
      if (track && !trackLineMap.has(track)) trackLineMap.set(track, nth + 1);
      prefix = "";
      return;
    }
    if (line.charAt() === "%") {
      const [name, ...rest] = line.split(/\s+/);
      if (/^%[a-zA-Z_]\w*$/.test(name) && !variableDefinitionLineMap.has(name)) {
        variableDefinitionLineMap.set(name, nth + 1);
      }
      rest.forEach((token) => {
        if (/^%[a-zA-Z_]\w*$/.test(token)) {
          variableReferenceCounts.set(token, (variableReferenceCounts.get(token) || 0) + 1);
        }
        if (/^&[a-zA-Z_]\w*$/.test(token)) {
          patternReferenceCounts.set(token, (patternReferenceCounts.get(token) || 0) + 1);
        }
      });
      return;
    }
    if (line.charAt() === "&") {
      const [name, ...rest] = line.split(/\s+/);
      if (/^&[a-zA-Z_]\w*$/.test(name) && !patternDefinitionLineMap.has(name)) {
        patternDefinitionLineMap.set(name, nth + 1);
      }
      rest.forEach((token) => {
        if (/^%[a-zA-Z_]\w*$/.test(token)) {
          variableReferenceCounts.set(token, (variableReferenceCounts.get(token) || 0) + 1);
        }
        if (/^&[a-zA-Z_]\w*$/.test(token)) {
          patternReferenceCounts.set(token, (patternReferenceCounts.get(token) || 0) + 1);
        }
      });
      return;
    }
    if (line.charAt() === "@") {
      const name = line.substr(1).split(/\s+/)[0];
      prefix = name || "";
      if (prefix) {
        sectionNames.add(prefix);
        if (!sectionLineMap.has(prefix)) sectionLineMap.set(prefix, nth + 1);
      }
      return;
    }
    line.split(/\s+/).forEach((token) => {
      if (/^%[a-zA-Z_]\w*$/.test(token)) {
        variableReferenceCounts.set(token, (variableReferenceCounts.get(token) || 0) + 1);
      }
      if (/^&[a-zA-Z_]\w*$/.test(token)) {
        patternReferenceCounts.set(token, (patternReferenceCounts.get(token) || 0) + 1);
      }
    });
    if (!track) return;
    if (!/^#[^\s]+\b/.test(line)) return;
    const channelValue = line.match(/^(#[^\s]+)\b/);
    if (!channelValue) return;
    let resolved;
    try {
      resolved = resolveChannelToken(channelValue[1], opts.channelAliases);
    } catch (e) {
      return;
    }
    const channel = `${prefix}${resolved}`;
    const key = `${track}|${channel}`;
    const idx = counters.get(key) || 0;
    counters.set(key, idx + 1);
    explicitClipCounts.set(key, (explicitClipCounts.get(key) || 0) + 1);
    trackHasClip.add(track);
    clipLineMap.set(`${key}|${idx}`, nth + 1);
  });
  return {
    clipLineMap,
    explicitClipCounts,
    sectionNames,
    sectionLineMap,
    trackLineMap,
    trackHasClip,
    variableDefinitionLineMap,
    variableReferenceCounts,
    patternDefinitionLineMap,
    patternReferenceCounts
  };
}
function inputSignature(clip, context) {
  if (!clip || !clip.input) return null;
  try {
    return JSON.stringify(reduce(clip.input, context.data));
  } catch (e) {
    return null;
  }
}
function scanInvalidTokenPrefixes(source) {
  const warnings = [];
  String(source || "").split(/\r?\n/).forEach((rawLine, nth) => {
    const line = stripInlineComment3(rawLine).trim();
    if (!line) return;
    const tokens = line.split(/\s+/);
    tokens.forEach((token) => {
      const pos = token.search(/[#@<%&>]/);
      if (pos <= 0) return;
      const prefix = token.slice(0, pos);
      const symbol = token.charAt(pos);
      let invalid = false;
      if (symbol === "#") {
        const noteLike = pos === 1 && /^[a-gA-G]$/.test(prefix) && /^\d/.test(token.slice(pos + 1));
        invalid = !noteLike;
      } else {
        invalid = true;
      }
      if (!invalid) return;
      warnings.push({
        rule: "invalid-token-prefix",
        message: `Token '${token}' has invalid prefix '${prefix}' before '${symbol}'.`,
        line: nth + 1
      });
    });
  });
  return warnings;
}
function parseErrorLine(error) {
  const text = String(error && error.message || error || "");
  const match = text.match(/\bat line\s+(\d+)\b/i);
  if (!match) return null;
  const line = parseInt(match[1], 10);
  return Number.isInteger(line) && line > 0 ? line : null;
}
function lintDub(source, opts = {}) {
  const report = {
    errors: [],
    warnings: []
  };
  let context = opts.context;
  let merged = opts.merged;
  report.warnings.push(...scanInvalidTokenPrefixes(source));
  try {
    if (!context) context = parse(source);
  } catch (e) {
    report.errors.push({
      rule: "parse-error",
      message: e && e.message ? e.message : "Parse error",
      line: parseErrorLine(e),
      stack: e && e.stack ? String(e.stack) : null
    });
    return report;
  }
  const {
    clipLineMap,
    explicitClipCounts,
    sectionNames,
    sectionLineMap,
    trackLineMap,
    trackHasClip,
    variableDefinitionLineMap,
    variableReferenceCounts,
    patternDefinitionLineMap,
    patternReferenceCounts
  } = scanClipLineMap(source, opts);
  const expanded = buildArrangementDisplayExpansion(source);
  const usedSections = new Set(expanded.map((item) => item.name));
  expanded.forEach((item, idx) => {
    if (!sectionNames.has(item.name)) {
      report.errors.push({
        rule: "unknown-section",
        message: `Arrangement token '${item.name}' (index ${idx}) has no matching @section.`,
        line: null
      });
    }
  });
  if (expanded.length > 0) {
    sectionNames.forEach((name) => {
      if (usedSections.has(name)) return;
      report.warnings.push({
        rule: "unused-section",
        message: `Section '@${name}' is defined but never used in arrangement.`,
        line: sectionLineMap.get(name) || null
      });
    });
  }
  variableDefinitionLineMap.forEach((line, name) => {
    if ((variableReferenceCounts.get(name) || 0) > 0) return;
    report.warnings.push({
      rule: "unused-variable",
      message: `Variable '${name}' is defined but never used.`,
      line
    });
  });
  patternDefinitionLineMap.forEach((line, name) => {
    if ((patternReferenceCounts.get(name) || 0) > 0) return;
    report.warnings.push({
      rule: "unused-pattern-variable",
      message: `Pattern variable '${name}' is defined but never used.`,
      line
    });
  });
  Object.keys(context.tracks || {}).forEach((trackName) => {
    if (trackHasClip.has(trackName)) return;
    report.warnings.push({
      rule: "empty-track",
      message: `Track '${trackName}' has no channel clips.`,
      line: trackLineMap.get(trackName) || null
    });
  });
  Object.entries(context.tracks || {}).forEach(([trackName, channels]) => {
    Object.entries(channels || {}).forEach(([channel, clips]) => {
      const channelMatch = String(channel).match(/#(\d+)$/);
      if (channelMatch && typeof opts.resolveInstrument === "function") {
        const program = parseInt(channelMatch[1], 10);
        const isValid = opts.resolveInstrument(String(program));
        if (!isValid) {
          report.warnings.push({
            rule: "invalid-instrument",
            message: `Track '${trackName}' channel '${channel}' uses unsupported instrument/program number '${program}'.`,
            line: clipLineMap.get(`${trackName}|${channel}|0`) || trackLineMap.get(trackName) || null
          });
        }
      }
      const inputClips = (clips || []).filter((clip) => clip && clip.input);
      const explicitCount = explicitClipCounts.get(`${trackName}|${channel}`) || 0;
      const unmergedInputs = inputClips.filter((clip) => !clip.merge);
      const seenInputSignatures = /* @__PURE__ */ new Set();
      let hasDuplicateInput = false;
      for (let i = 0; i < unmergedInputs.length; i += 1) {
        const signature = inputSignature(unmergedInputs[i], context);
        if (!signature) continue;
        if (seenInputSignatures.has(signature)) {
          hasDuplicateInput = true;
          break;
        }
        seenInputSignatures.add(signature);
      }
      if (explicitCount > 1 && hasDuplicateInput) {
        const line = clipLineMap.get(`${trackName}|${channel}|0`) || null;
        report.warnings.push({
          rule: "duplicate-input-clips",
          message: `Track '${trackName}' channel '${channel}' has repeated input clips without explicit '!' or '+' merge operator.`,
          line
        });
      }
      (clips || []).forEach((clip, clipIndex) => {
        if (!clip || !clip.input) return;
        const line = clipLineMap.get(`${trackName}|${channel}|${clipIndex}`) || null;
        let input;
        let stats;
        let values = [];
        let notes = [];
        try {
          values = clip.values ? reduce(clip.values, context.data) : [];
          notes = clip.data ? reduce(clip.data, context.data) : [];
          input = flatten(reduce(clip.input, context.data, pack(values.slice(), notes.slice())));
          stats = countPatternStats(reduce(clip.input, context.data));
        } catch (e) {
          report.errors.push({
            rule: "clip-reduce-failed",
            message: `Unable to evaluate clip in '${trackName}' '${channel}': ${e.message}`,
            line,
            stack: e && e.stack ? String(e.stack) : null
          });
          return;
        }
        const outOfRangeLevel = values.find((value) => typeof value === "number" && Number.isFinite(value) && (value < 0 || value > 127));
        if (typeof outOfRangeLevel === "number") {
          report.warnings.push({
            rule: "invalid-level",
            message: `Track '${trackName}' '${channel}' has level/velocity '${outOfRangeLevel}' outside MIDI range 0..127.`,
            line
          });
        }
        const noteEvents = notes;
        const noteCount = Array.isArray(noteEvents) ? noteEvents.length : 0;
        if (noteCount > stats.hits) {
          report.warnings.push({
            rule: "missing-pulses",
            message: `Track '${trackName}' '${channel}' has ${noteCount} notes/chords but only ${stats.hits} hit pulses.`,
            line
          });
        }
        if (!stats.sustainAfterHit) {
          report.warnings.push({
            rule: "orphan-sustain",
            message: `Track '${trackName}' '${channel}' uses '_' before any 'x' hit in the same pattern.`,
            line
          });
        }
        if (stats.hits > 0 && flattenSectionBeats(input) === 0) {
          report.warnings.push({
            rule: "silent-pattern",
            message: `Track '${trackName}' '${channel}' resolves to silence after reduction.`,
            line
          });
        }
      });
    });
  });
  if (!merged) {
    try {
      merged = merge(context);
    } catch (e) {
      if (!report.errors.some((item) => item.rule === "unknown-section")) {
        report.errors.push({
          rule: "merge-error",
          message: e && e.message ? e.message : "Merge error",
          line: null,
          stack: e && e.stack ? String(e.stack) : null
        });
      }
    }
  }
  if (expanded.length && Array.isArray(merged)) {
    let flatIndex = 0;
    merged.forEach((group) => {
      (group || []).forEach((parts) => {
        const token = expanded[flatIndex];
        if (token && flattenSectionBeats(parts.map((t) => t[2])) === 0) {
          report.warnings.push({
            rule: "silent-section",
            message: `Section '${token.name}' resolves to silence.`,
            line: null
          });
        }
        flatIndex += 1;
      });
    });
  }
  return report;
}
export {
  DEFAULT_CHANNEL_ALIASES,
  RE_CHORD,
  RE_DEGREE,
  RE_MODE,
  RE_NOTE,
  RE_NUMBER,
  RE_PATTERN,
  RE_PATTERN_REF,
  RE_PROG,
  RE_SEPARATOR,
  RE_TRIM,
  applyLatestInputWins,
  build,
  buildArrangementDisplayExpansion,
  buildMixFromMerged,
  buildSectionTimeline,
  buildTrackLineMap,
  clone,
  collectVariableDefinitions,
  compressDub,
  euclidean,
  extractDraftBankSelection,
  extractDraftBars,
  extractDraftKey,
  extractDraftTempo,
  findTimelineIndex,
  flatten,
  getMaxPatternSlots,
  getSectionAtBeat,
  getType,
  isChord,
  isDegree,
  isMode,
  isNote,
  isNumber,
  isPattern,
  isProgression,
  level,
  lintDub,
  merge,
  normalizeChannelAliases,
  pack,
  parse,
  parseEuclideanToken,
  range,
  reduce,
  repeat,
  resolveChannelToken,
  split,
  transform,
  validate,
  zip
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL21pZGktd3JpdGVyLWpzL2J1aWxkL2luZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy9qc21pZGdlbi9saWIvanNtaWRnZW4uanMiLCAic3JjL2xpYi9zcmMvbGliL3NyYy9saWIvdXRpbHMuanMiLCAic3JjL2xpYi9zcmMvbGliL3NyYy9saWIvY2hhbm5lbHMuanMiLCAibm9kZV9tb2R1bGVzL2hhcm1vbmljcy9kaXN0L2luZGV4Lm1qcyIsICJzcmMvbGliL3NyYy9saWIvc3JjL2xpYi9ldWNsaWRlYW4uanMiLCAic3JjL2xpYi9zcmMvbGliL3NyYy9saWIvdG9rZW5pemUuanMiLCAic3JjL2xpYi9zcmMvbGliL3NyYy9saWIvYXJyYW5nZW1lbnQuanMiLCAic3JjL2xpYi9zcmMvbGliL3NyYy9saWIvcGFyc2VyLmpzIiwgInNyYy9saWIvc3JjL2xpYi9zcmMvbGliL21peHVwLmpzIiwgInNyYy9saWIvc3JjL2xpYi9zcmMvbGliL2NvbXByZXNzLmpzIiwgInNyYy9saWIvc3JjL2xpYi9zcmMvbGliL3BsYXlncm91bmQuanMiLCAic3JjL2xpYi9zcmMvbGliL3NyYy9saWIvbGludC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIE1JREkgZmlsZSBmb3JtYXQgY29uc3RhbnRzLlxuICogQHJldHVybiB7Q29uc3RhbnRzfVxuICovXG52YXIgQ29uc3RhbnRzID0ge1xuICAgIFZFUlNJT046ICczLjIuMScsXG4gICAgSEVBREVSX0NIVU5LX1RZUEU6IFsweDRkLCAweDU0LCAweDY4LCAweDY0XSxcbiAgICBIRUFERVJfQ0hVTktfTEVOR1RIOiBbMHgwMCwgMHgwMCwgMHgwMCwgMHgwNl0sXG4gICAgSEVBREVSX0NIVU5LX0ZPUk1BVDA6IFsweDAwLCAweDAwXSxcbiAgICBIRUFERVJfQ0hVTktfRk9STUFUMTogWzB4MDAsIDB4MDFdLFxuICAgIEhFQURFUl9DSFVOS19ESVZJU0lPTjogWzB4MDAsIDB4ODBdLFxuICAgIFRSQUNLX0NIVU5LX1RZUEU6IFsweDRkLCAweDU0LCAweDcyLCAweDZiXSxcbiAgICBNRVRBX0VWRU5UX0lEOiAweEZGLFxuICAgIE1FVEFfU01UUEVfT0ZGU0VUOiAweDU0XG59O1xuXG4vLyBzcmMvdXRpbHMudHNcbnZhciBmaWxsU3RyID0gKHMsIG4pID0+IEFycmF5KE1hdGguYWJzKG4pICsgMSkuam9pbihzKTtcblxuLy8gc3JjL25hbWVkLnRzXG5mdW5jdGlvbiBpc05hbWVkKHNyYykge1xuICByZXR1cm4gc3JjICE9PSBudWxsICYmIHR5cGVvZiBzcmMgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHNyYy5uYW1lID09PSBcInN0cmluZ1wiID8gdHJ1ZSA6IGZhbHNlO1xufVxuXG4vLyBzcmMvcGl0Y2gudHNcbmZ1bmN0aW9uIGlzUGl0Y2gocGl0Y2gpIHtcbiAgcmV0dXJuIHBpdGNoICE9PSBudWxsICYmIHR5cGVvZiBwaXRjaCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgcGl0Y2guc3RlcCA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgcGl0Y2guYWx0ID09PSBcIm51bWJlclwiID8gdHJ1ZSA6IGZhbHNlO1xufVxudmFyIEZJRlRIUyA9IFswLCAyLCA0LCAtMSwgMSwgMywgNV07XG52YXIgU1RFUFNfVE9fT0NUUyA9IEZJRlRIUy5tYXAoXG4gIChmaWZ0aHMpID0+IE1hdGguZmxvb3IoZmlmdGhzICogNyAvIDEyKVxuKTtcbmZ1bmN0aW9uIGVuY29kZShwaXRjaCkge1xuICBjb25zdCB7IHN0ZXAsIGFsdCwgb2N0LCBkaXIgPSAxIH0gPSBwaXRjaDtcbiAgY29uc3QgZiA9IEZJRlRIU1tzdGVwXSArIDcgKiBhbHQ7XG4gIGlmIChvY3QgPT09IHZvaWQgMCkge1xuICAgIHJldHVybiBbZGlyICogZl07XG4gIH1cbiAgY29uc3QgbyA9IG9jdCAtIFNURVBTX1RPX09DVFNbc3RlcF0gLSA0ICogYWx0O1xuICByZXR1cm4gW2RpciAqIGYsIGRpciAqIG9dO1xufVxuXG4vLyBzcmMvbm90ZS50c1xudmFyIE5vTm90ZSA9IHsgZW1wdHk6IHRydWUsIG5hbWU6IFwiXCIsIHBjOiBcIlwiLCBhY2M6IFwiXCIgfTtcbnZhciBjYWNoZSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgc3RlcFRvTGV0dGVyID0gKHN0ZXApID0+IFwiQ0RFRkdBQlwiLmNoYXJBdChzdGVwKTtcbnZhciBhbHRUb0FjYyA9IChhbHQpID0+IGFsdCA8IDAgPyBmaWxsU3RyKFwiYlwiLCAtYWx0KSA6IGZpbGxTdHIoXCIjXCIsIGFsdCk7XG52YXIgYWNjVG9BbHQgPSAoYWNjKSA9PiBhY2NbMF0gPT09IFwiYlwiID8gLWFjYy5sZW5ndGggOiBhY2MubGVuZ3RoO1xuZnVuY3Rpb24gbm90ZShzcmMpIHtcbiAgY29uc3Qgc3RyaW5nU3JjID0gSlNPTi5zdHJpbmdpZnkoc3JjKTtcbiAgY29uc3QgY2FjaGVkID0gY2FjaGUuZ2V0KHN0cmluZ1NyYyk7XG4gIGlmIChjYWNoZWQpIHtcbiAgICByZXR1cm4gY2FjaGVkO1xuICB9XG4gIGNvbnN0IHZhbHVlID0gdHlwZW9mIHNyYyA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlKHNyYykgOiBpc1BpdGNoKHNyYykgPyBub3RlKHBpdGNoTmFtZShzcmMpKSA6IGlzTmFtZWQoc3JjKSA/IG5vdGUoc3JjLm5hbWUpIDogTm9Ob3RlO1xuICBjYWNoZS5zZXQoc3RyaW5nU3JjLCB2YWx1ZSk7XG4gIHJldHVybiB2YWx1ZTtcbn1cbnZhciBSRUdFWCA9IC9eKFthLWdBLUddPykoI3sxLH18YnsxLH18eHsxLH18KSgtP1xcZCopXFxzKiguKikkLztcbmZ1bmN0aW9uIHRva2VuaXplTm90ZShzdHIpIHtcbiAgY29uc3QgbSA9IFJFR0VYLmV4ZWMoc3RyKTtcbiAgcmV0dXJuIFttWzFdLnRvVXBwZXJDYXNlKCksIG1bMl0ucmVwbGFjZSgveC9nLCBcIiMjXCIpLCBtWzNdLCBtWzRdXTtcbn1cbnZhciBtb2QgPSAobiwgbSkgPT4gKG4gJSBtICsgbSkgJSBtO1xudmFyIFNFTUkgPSBbMCwgMiwgNCwgNSwgNywgOSwgMTFdO1xuZnVuY3Rpb24gcGFyc2Uobm90ZU5hbWUpIHtcbiAgY29uc3QgdG9rZW5zID0gdG9rZW5pemVOb3RlKG5vdGVOYW1lKTtcbiAgaWYgKHRva2Vuc1swXSA9PT0gXCJcIiB8fCB0b2tlbnNbM10gIT09IFwiXCIpIHtcbiAgICByZXR1cm4gTm9Ob3RlO1xuICB9XG4gIGNvbnN0IGxldHRlciA9IHRva2Vuc1swXTtcbiAgY29uc3QgYWNjID0gdG9rZW5zWzFdO1xuICBjb25zdCBvY3RTdHIgPSB0b2tlbnNbMl07XG4gIGNvbnN0IHN0ZXAgPSAobGV0dGVyLmNoYXJDb2RlQXQoMCkgKyAzKSAlIDc7XG4gIGNvbnN0IGFsdCA9IGFjY1RvQWx0KGFjYyk7XG4gIGNvbnN0IG9jdCA9IG9jdFN0ci5sZW5ndGggPyArb2N0U3RyIDogdm9pZCAwO1xuICBjb25zdCBjb29yZCA9IGVuY29kZSh7IHN0ZXAsIGFsdCwgb2N0IH0pO1xuICBjb25zdCBuYW1lID0gbGV0dGVyICsgYWNjICsgb2N0U3RyO1xuICBjb25zdCBwYyA9IGxldHRlciArIGFjYztcbiAgY29uc3QgY2hyb21hID0gKFNFTUlbc3RlcF0gKyBhbHQgKyAxMjApICUgMTI7XG4gIGNvbnN0IGhlaWdodCA9IG9jdCA9PT0gdm9pZCAwID8gbW9kKFNFTUlbc3RlcF0gKyBhbHQsIDEyKSAtIDEyICogOTkgOiBTRU1JW3N0ZXBdICsgYWx0ICsgMTIgKiAob2N0ICsgMSk7XG4gIGNvbnN0IG1pZGkgPSBoZWlnaHQgPj0gMCAmJiBoZWlnaHQgPD0gMTI3ID8gaGVpZ2h0IDogbnVsbDtcbiAgY29uc3QgZnJlcSA9IG9jdCA9PT0gdm9pZCAwID8gbnVsbCA6IE1hdGgucG93KDIsIChoZWlnaHQgLSA2OSkgLyAxMikgKiA0NDA7XG4gIHJldHVybiB7XG4gICAgZW1wdHk6IGZhbHNlLFxuICAgIGFjYyxcbiAgICBhbHQsXG4gICAgY2hyb21hLFxuICAgIGNvb3JkLFxuICAgIGZyZXEsXG4gICAgaGVpZ2h0LFxuICAgIGxldHRlcixcbiAgICBtaWRpLFxuICAgIG5hbWUsXG4gICAgb2N0LFxuICAgIHBjLFxuICAgIHN0ZXBcbiAgfTtcbn1cbmZ1bmN0aW9uIHBpdGNoTmFtZShwcm9wcykge1xuICBjb25zdCB7IHN0ZXAsIGFsdCwgb2N0IH0gPSBwcm9wcztcbiAgY29uc3QgbGV0dGVyID0gc3RlcFRvTGV0dGVyKHN0ZXApO1xuICBpZiAoIWxldHRlcikge1xuICAgIHJldHVybiBcIlwiO1xuICB9XG4gIGNvbnN0IHBjID0gbGV0dGVyICsgYWx0VG9BY2MoYWx0KTtcbiAgcmV0dXJuIG9jdCB8fCBvY3QgPT09IDAgPyBwYyArIG9jdCA6IHBjO1xufVxuXG4vLyBpbmRleC50c1xuZnVuY3Rpb24gaXNNaWRpKGFyZykge1xuICByZXR1cm4gK2FyZyA+PSAwICYmICthcmcgPD0gMTI3O1xufVxuZnVuY3Rpb24gdG9NaWRpKG5vdGUkMSkge1xuICBpZiAoaXNNaWRpKG5vdGUkMSkpIHtcbiAgICByZXR1cm4gK25vdGUkMTtcbiAgfVxuICBjb25zdCBuID0gbm90ZShub3RlJDEpO1xuICByZXR1cm4gbi5lbXB0eSA/IG51bGwgOiBuLm1pZGk7XG59XG5cbi8qKlxuICogU3RhdGljIHV0aWxpdHkgZnVuY3Rpb25zIHVzZWQgdGhyb3VnaG91dCB0aGUgbGlicmFyeS5cbiAqL1xudmFyIFV0aWxzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFV0aWxzKCkge1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIE1pZGlXcml0ZXJKUyB2ZXJzaW9uIG51bWJlci5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgVXRpbHMudmVyc2lvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICczLjIuMCc7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IGEgc3RyaW5nIHRvIGFuIGFycmF5IG9mIGJ5dGVzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuICAgICAqIEByZXR1cm4ge2FycmF5fVxuICAgICAqL1xuICAgIFV0aWxzLnN0cmluZ1RvQnl0ZXMgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmcuc3BsaXQoJycpLm1hcChmdW5jdGlvbiAoY2hhcikgeyByZXR1cm4gY2hhci5jaGFyQ29kZUF0KDApOyB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiBhcmd1bWVudCBpcyBhIHZhbGlkIG51bWJlci5cbiAgICAgKiBAcGFyYW0geyp9IG4gLSBWYWx1ZSB0byBjaGVja1xuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICBVdGlscy5pc051bWVyaWMgPSBmdW5jdGlvbiAobikge1xuICAgICAgICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQobikpICYmIGlzRmluaXRlKG4pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY29ycmVjdCBNSURJIG51bWJlciBmb3IgdGhlIHNwZWNpZmllZCBwaXRjaC5cbiAgICAgKiBVc2VzIFRvbmFsIE1pZGkgLSBodHRwczovL2dpdGh1Yi5jb20vZGFuaWdiL3RvbmFsL3RyZWUvbWFzdGVyL3BhY2thZ2VzL21pZGlcbiAgICAgKiBAcGFyYW0geyhzdHJpbmd8bnVtYmVyKX0gcGl0Y2ggLSAnQyM0JyBvciBtaWRpIG5vdGUgY29kZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtaWRkbGVDXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIFV0aWxzLmdldFBpdGNoID0gZnVuY3Rpb24gKHBpdGNoLCBtaWRkbGVDKSB7XG4gICAgICAgIGlmIChtaWRkbGVDID09PSB2b2lkIDApIHsgbWlkZGxlQyA9ICdDNCc7IH1cbiAgICAgICAgcmV0dXJuIDYwIC0gdG9NaWRpKG1pZGRsZUMpICsgdG9NaWRpKHBpdGNoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRyYW5zbGF0ZXMgbnVtYmVyIG9mIHRpY2tzIHRvIE1JREkgdGltZXN0YW1wIGZvcm1hdCwgcmV0dXJuaW5nIGFuIGFycmF5IG9mXG4gICAgICogaGV4IHN0cmluZ3Mgd2l0aCB0aGUgdGltZSB2YWx1ZXMuIE1pZGkgaGFzIGEgdmVyeSBwYXJ0aWN1bGFyIHRpbWUgdG8gZXhwcmVzcyB0aW1lLFxuICAgICAqIHRha2UgYSBnb29kIGxvb2sgYXQgdGhlIHNwZWMgYmVmb3JlIGV2ZXIgdG91Y2hpbmcgdGhpcyBmdW5jdGlvbi5cbiAgICAgKiBUaGFua3MgdG8gaHR0cHM6Ly9naXRodWIuY29tL3NlcmdpL2pzbWlkaVxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpY2tzIC0gTnVtYmVyIG9mIHRpY2tzIHRvIGJlIHRyYW5zbGF0ZWRcbiAgICAgKiBAcmV0dXJuIHthcnJheX0gLSBCeXRlcyB0aGF0IGZvcm0gdGhlIE1JREkgdGltZSB2YWx1ZVxuICAgICAqL1xuICAgIFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGggPSBmdW5jdGlvbiAodGlja3MpIHtcbiAgICAgICAgdGlja3MgPSBNYXRoLnJvdW5kKHRpY2tzKTtcbiAgICAgICAgdmFyIGJ1ZmZlciA9IHRpY2tzICYgMHg3RjtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbmQtYXNzaWduXG4gICAgICAgIHdoaWxlICh0aWNrcyA9IHRpY2tzID4+IDcpIHtcbiAgICAgICAgICAgIGJ1ZmZlciA8PD0gODtcbiAgICAgICAgICAgIGJ1ZmZlciB8PSAoKHRpY2tzICYgMHg3RikgfCAweDgwKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYkxpc3QgPSBbXTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnN0YW50LWNvbmRpdGlvblxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgYkxpc3QucHVzaChidWZmZXIgJiAweGZmKTtcbiAgICAgICAgICAgIGlmIChidWZmZXIgJiAweDgwKVxuICAgICAgICAgICAgICAgIGJ1ZmZlciA+Pj0gODtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiTGlzdDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENvdW50cyBudW1iZXIgb2YgYnl0ZXMgaW4gc3RyaW5nXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgVXRpbHMuc3RyaW5nQnl0ZUNvdW50ID0gZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgcmV0dXJuIGVuY29kZVVSSShzKS5zcGxpdCgvJS4ufC4vKS5sZW5ndGggLSAxO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IGFuIGludCBmcm9tIGFuIGFycmF5IG9mIGJ5dGVzLlxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGJ5dGVzXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIFV0aWxzLm51bWJlckZyb21CeXRlcyA9IGZ1bmN0aW9uIChieXRlcykge1xuICAgICAgICB2YXIgaGV4ID0gJyc7XG4gICAgICAgIHZhciBzdHJpbmdSZXN1bHQ7XG4gICAgICAgIGJ5dGVzLmZvckVhY2goZnVuY3Rpb24gKGJ5dGUpIHtcbiAgICAgICAgICAgIHN0cmluZ1Jlc3VsdCA9IGJ5dGUudG9TdHJpbmcoMTYpO1xuICAgICAgICAgICAgLy8gZW5zdXJlIHN0cmluZyBpcyAyIGNoYXJzXG4gICAgICAgICAgICBpZiAoc3RyaW5nUmVzdWx0Lmxlbmd0aCA9PSAxKVxuICAgICAgICAgICAgICAgIHN0cmluZ1Jlc3VsdCA9IFwiMFwiICsgc3RyaW5nUmVzdWx0O1xuICAgICAgICAgICAgaGV4ICs9IHN0cmluZ1Jlc3VsdDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwYXJzZUludChoZXgsIDE2KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRha2VzIGEgbnVtYmVyIGFuZCBzcGxpdHMgaXQgdXAgaW50byBhbiBhcnJheSBvZiBieXRlcy4gIENhbiBiZSBwYWRkZWQgYnkgcGFzc2luZyBhIG51bWJlciB0byBieXRlc05lZWRlZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYnl0ZXNOZWVkZWRcbiAgICAgKiBAcmV0dXJuIHthcnJheX0gLSBBcnJheSBvZiBieXRlc1xuICAgICAqL1xuICAgIFV0aWxzLm51bWJlclRvQnl0ZXMgPSBmdW5jdGlvbiAobnVtYmVyLCBieXRlc05lZWRlZCkge1xuICAgICAgICBieXRlc05lZWRlZCA9IGJ5dGVzTmVlZGVkIHx8IDE7XG4gICAgICAgIHZhciBoZXhTdHJpbmcgPSBudW1iZXIudG9TdHJpbmcoMTYpO1xuICAgICAgICBpZiAoaGV4U3RyaW5nLmxlbmd0aCAmIDEpIHsgLy8gTWFrZSBzdXJlIGhleCBzdHJpbmcgaXMgZXZlbiBudW1iZXIgb2YgY2hhcnNcbiAgICAgICAgICAgIGhleFN0cmluZyA9ICcwJyArIGhleFN0cmluZztcbiAgICAgICAgfVxuICAgICAgICAvLyBTcGxpdCBoZXggc3RyaW5nIGludG8gYW4gYXJyYXkgb2YgdHdvIGNoYXIgZWxlbWVudHNcbiAgICAgICAgdmFyIGhleEFycmF5ID0gaGV4U3RyaW5nLm1hdGNoKC8uezJ9L2cpO1xuICAgICAgICAvLyBOb3cgcGFyc2UgdGhlbSBvdXQgYXMgaW50ZWdlcnNcbiAgICAgICAgdmFyIGludEFycmF5ID0gaGV4QXJyYXkubWFwKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBwYXJzZUludChpdGVtLCAxNik7IH0pO1xuICAgICAgICAvLyBQcmVwZW5kIGVtcHR5IGJ5dGVzIGlmIHdlIGRvbid0IGhhdmUgZW5vdWdoXG4gICAgICAgIGlmIChpbnRBcnJheS5sZW5ndGggPCBieXRlc05lZWRlZCkge1xuICAgICAgICAgICAgd2hpbGUgKGJ5dGVzTmVlZGVkIC0gaW50QXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGludEFycmF5LnVuc2hpZnQoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGludEFycmF5O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgdmFsdWUgdG8gYXJyYXkgaWYgbmVlZGVkLlxuICAgICAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICAgICAqIEByZXR1cm4ge2FycmF5fVxuICAgICAqL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgVXRpbHMudG9BcnJheSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHJldHVybiBbdmFsdWVdO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgdmVsb2NpdHkgdG8gdmFsdWUgMC0xMjdcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmVsb2NpdHkgLSBWZWxvY2l0eSB2YWx1ZSAxLTEwMFxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgICBVdGlscy5jb252ZXJ0VmVsb2NpdHkgPSBmdW5jdGlvbiAodmVsb2NpdHkpIHtcbiAgICAgICAgLy8gTWF4IHBhc3NlZCB2YWx1ZSBsaW1pdGVkIHRvIDEwMFxuICAgICAgICB2ZWxvY2l0eSA9IHZlbG9jaXR5ID4gMTAwID8gMTAwIDogdmVsb2NpdHk7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHZlbG9jaXR5IC8gMTAwICogMTI3KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHRvdGFsIG51bWJlciBvZiB0aWNrcyBvZiBhIHNwZWNpZmllZCBkdXJhdGlvbi5cbiAgICAgKiBOb3RlOiB0eXBlPT0nbm90ZScgZGVmYXVsdHMgdG8gcXVhcnRlciBub3RlLCB0eXBlPT09J3Jlc3QnIGRlZmF1bHRzIHRvIDBcbiAgICAgKiBAcGFyYW0geyhzdHJpbmd8YXJyYXkpfSBkdXJhdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aWNrc1BlckJlYXQgLSBUaWNrcyBwZXIgcXVhcnRlciBub3RlIChQUFFOKS4gRGVmYXVsdHMgdG8gMTI4LlxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgICBVdGlscy5nZXRUaWNrRHVyYXRpb24gPSBmdW5jdGlvbiAoZHVyYXRpb24sIHRpY2tzUGVyQmVhdCkge1xuICAgICAgICBpZiAodGlja3NQZXJCZWF0ID09PSB2b2lkIDApIHsgdGlja3NQZXJCZWF0ID0gMTI4OyB9XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGR1cmF0aW9uKSkge1xuICAgICAgICAgICAgLy8gUmVjdXJzaXZlbHkgZXhlY3V0ZSB0aGlzIG1ldGhvZCBmb3IgZWFjaCBpdGVtIGluIHRoZSBhcnJheSBhbmQgcmV0dXJuIHRoZSBzdW0gb2YgdGljayBkdXJhdGlvbnMuXG4gICAgICAgICAgICByZXR1cm4gZHVyYXRpb24ubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBVdGlscy5nZXRUaWNrRHVyYXRpb24odmFsdWUsIHRpY2tzUGVyQmVhdCk7XG4gICAgICAgICAgICB9KS5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYSArIGI7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfVxuICAgICAgICBkdXJhdGlvbiA9IGR1cmF0aW9uLnRvU3RyaW5nKCk7XG4gICAgICAgIGlmIChkdXJhdGlvbi50b0xvd2VyQ2FzZSgpLmNoYXJBdCgwKSA9PT0gJ3QnKSB7XG4gICAgICAgICAgICAvLyBJZiBkdXJhdGlvbiBzdGFydHMgd2l0aCAndCcgdGhlbiB0aGUgbnVtYmVyIHRoYXQgZm9sbG93cyBpcyBhbiBleHBsaWNpdCB0aWNrIGNvdW50XG4gICAgICAgICAgICB2YXIgdGlja3MgPSBwYXJzZUludChkdXJhdGlvbi5zdWJzdHJpbmcoMSkpO1xuICAgICAgICAgICAgaWYgKGlzTmFOKHRpY2tzKSB8fCB0aWNrcyA8IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZHVyYXRpb24gKyAnIGlzIG5vdCBhIHZhbGlkIGR1cmF0aW9uLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRpY2tzO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0aWNrRHVyYXRpb24gPSB0aWNrc1BlckJlYXQgKiBVdGlscy5nZXREdXJhdGlvbk11bHRpcGxpZXIoZHVyYXRpb24pO1xuICAgICAgICByZXR1cm4gVXRpbHMuZ2V0Um91bmRlZElmQ2xvc2UodGlja0R1cmF0aW9uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIER1ZSB0byByb3VuZGluZyBlcnJvcnMgaW4gSmF2YVNjcmlwdCBlbmdpbmVzLFxuICAgICAqIGl0J3Mgc2FmZSB0byByb3VuZCB3aGVuIHdlJ3JlIHZlcnkgY2xvc2UgdG8gdGhlIGFjdHVhbCB0aWNrIG51bWJlclxuICAgICAqXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aWNrXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIFV0aWxzLmdldFJvdW5kZWRJZkNsb3NlID0gZnVuY3Rpb24gKHRpY2spIHtcbiAgICAgICAgdmFyIHJvdW5kZWRUaWNrID0gTWF0aC5yb3VuZCh0aWNrKTtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHJvdW5kZWRUaWNrIC0gdGljaykgPCAwLjAwMDAwMSA/IHJvdW5kZWRUaWNrIDogdGljaztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIER1ZSB0byBsb3cgcHJlY2lzaW9uIG9mIE1JREksXG4gICAgICogd2UgbmVlZCB0byBrZWVwIHRyYWNrIG9mIHJvdW5kaW5nIGVycm9ycyBpbiBkZWx0YXMuXG4gICAgICogVGhpcyBmdW5jdGlvbiB3aWxsIGNhbGN1bGF0ZSB0aGUgcm91bmRpbmcgZXJyb3IgZm9yIGEgZ2l2ZW4gZHVyYXRpb24uXG4gICAgICpcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpY2tcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgVXRpbHMuZ2V0UHJlY2lzaW9uTG9zcyA9IGZ1bmN0aW9uICh0aWNrKSB7XG4gICAgICAgIHZhciByb3VuZGVkVGljayA9IE1hdGgucm91bmQodGljayk7XG4gICAgICAgIHJldHVybiByb3VuZGVkVGljayAtIHRpY2s7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXRzIHdoYXQgdG8gbXVsdGlwbGUgdGlja3MvcXVhcnRlciBub3RlIGJ5IHRvIGdldCB0aGUgc3BlY2lmaWVkIGR1cmF0aW9uLlxuICAgICAqIE5vdGU6IHR5cGU9PSdub3RlJyBkZWZhdWx0cyB0byBxdWFydGVyIG5vdGUsIHR5cGU9PT0ncmVzdCcgZGVmYXVsdHMgdG8gMFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkdXJhdGlvblxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgICBVdGlscy5nZXREdXJhdGlvbk11bHRpcGxpZXIgPSBmdW5jdGlvbiAoZHVyYXRpb24pIHtcbiAgICAgICAgLy8gTmVlZCB0byBhcHBseSBkdXJhdGlvbiBoZXJlLlxuICAgICAgICAvLyBRdWFydGVyIG5vdGUgPT0gQ29uc3RhbnRzLkhFQURFUl9DSFVOS19ESVZJU0lPTiB0aWNrcy5cbiAgICAgICAgaWYgKGR1cmF0aW9uID09PSAnMCcpXG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgdmFyIG1hdGNoID0gZHVyYXRpb24ubWF0Y2goL14oPzxkb3R0ZWQ+ZCspPyg/PGJhc2U+XFxkKykoPzp0KD88dHVwbGV0PlxcZCopKT8vKTtcbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICB2YXIgYmFzZSA9IE51bWJlcihtYXRjaC5ncm91cHMuYmFzZSk7XG4gICAgICAgICAgICAvLyAxIG9yIGFueSBwb3dlciBvZiB0d286XG4gICAgICAgICAgICB2YXIgaXNWYWxpZEJhc2UgPSBiYXNlID09PSAxIHx8ICgoYmFzZSAmIChiYXNlIC0gMSkpID09PSAwKTtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkQmFzZSkge1xuICAgICAgICAgICAgICAgIC8vIGhvdyBtdWNoIGZhc3RlciBvciBzbG93ZXIgaXMgdGhpcyBub3RlIGNvbXBhcmVkIHRvIGEgcXVhcnRlcj9cbiAgICAgICAgICAgICAgICB2YXIgcmF0aW8gPSBiYXNlIC8gNDtcbiAgICAgICAgICAgICAgICB2YXIgZHVyYXRpb25JblF1YXJ0ZXJzID0gMSAvIHJhdGlvO1xuICAgICAgICAgICAgICAgIHZhciBfYSA9IG1hdGNoLmdyb3VwcywgZG90dGVkID0gX2EuZG90dGVkLCB0dXBsZXQgPSBfYS50dXBsZXQ7XG4gICAgICAgICAgICAgICAgaWYgKGRvdHRlZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGhpc01hbnlEb3RzID0gZG90dGVkLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpdmlzb3IgPSBNYXRoLnBvdygyLCB0aGlzTWFueURvdHMpO1xuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbkluUXVhcnRlcnMgPSBkdXJhdGlvbkluUXVhcnRlcnMgKyAoZHVyYXRpb25JblF1YXJ0ZXJzICogKChkaXZpc29yIC0gMSkgLyBkaXZpc29yKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdHVwbGV0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZml0SW50byA9IGR1cmF0aW9uSW5RdWFydGVycyAqIDI7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRlZmF1bHQgdG8gdHJpcGxldDpcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRoaXNNYW55Tm90ZXMgPSBOdW1iZXIodHVwbGV0IHx8ICczJyk7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uSW5RdWFydGVycyA9IGZpdEludG8gLyB0aGlzTWFueU5vdGVzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZHVyYXRpb25JblF1YXJ0ZXJzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihkdXJhdGlvbiArICcgaXMgbm90IGEgdmFsaWQgZHVyYXRpb24uJyk7XG4gICAgfTtcbiAgICByZXR1cm4gVXRpbHM7XG59KCkpO1xuXG4vKipcbiAqIEhvbGRzIGFsbCBkYXRhIGZvciBhIFwiY29udHJvbGxlciBjaGFuZ2VcIiBNSURJIGV2ZW50XG4gKiBAcGFyYW0ge29iamVjdH0gZmllbGRzIHtjb250cm9sbGVyTnVtYmVyOiBpbnRlZ2VyLCBjb250cm9sbGVyVmFsdWU6IGludGVnZXIsIGRlbHRhOiBpbnRlZ2VyfVxuICogQHJldHVybiB7Q29udHJvbGxlckNoYW5nZUV2ZW50fVxuICovXG52YXIgQ29udHJvbGxlckNoYW5nZUV2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENvbnRyb2xsZXJDaGFuZ2VFdmVudChmaWVsZHMpIHtcbiAgICAgICAgdGhpcy5jaGFubmVsID0gZmllbGRzLmNoYW5uZWwgLSAxIHx8IDA7XG4gICAgICAgIHRoaXMuY29udHJvbGxlclZhbHVlID0gZmllbGRzLmNvbnRyb2xsZXJWYWx1ZTtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyTnVtYmVyID0gZmllbGRzLmNvbnRyb2xsZXJOdW1iZXI7XG4gICAgICAgIHRoaXMuZGVsdGEgPSBmaWVsZHMuZGVsdGEgfHwgMHgwMDtcbiAgICAgICAgdGhpcy5uYW1lID0gJ0NvbnRyb2xsZXJDaGFuZ2VFdmVudCc7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gMHhCMDtcbiAgICAgICAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aChmaWVsZHMuZGVsdGEpLmNvbmNhdCh0aGlzLnN0YXR1cyB8IHRoaXMuY2hhbm5lbCwgdGhpcy5jb250cm9sbGVyTnVtYmVyLCB0aGlzLmNvbnRyb2xsZXJWYWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBDb250cm9sbGVyQ2hhbmdlRXZlbnQ7XG59KCkpO1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIHRlbXBvIG1ldGEgZXZlbnQuXG4gKiBAcGFyYW0ge29iamVjdH0gZmllbGRzIHt0ZXh0OiBzdHJpbmcsIGRlbHRhOiBpbnRlZ2VyfVxuICogQHJldHVybiB7Q29weXJpZ2h0RXZlbnR9XG4gKi9cbnZhciBDb3B5cmlnaHRFdmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb3B5cmlnaHRFdmVudChmaWVsZHMpIHtcbiAgICAgICAgdGhpcy5kZWx0YSA9IGZpZWxkcy5kZWx0YSB8fCAweDAwO1xuICAgICAgICB0aGlzLm5hbWUgPSAnQ29weXJpZ2h0RXZlbnQnO1xuICAgICAgICB0aGlzLnRleHQgPSBmaWVsZHMudGV4dDtcbiAgICAgICAgdGhpcy50eXBlID0gMHgwMjtcbiAgICAgICAgdmFyIHRleHRCeXRlcyA9IFV0aWxzLnN0cmluZ1RvQnl0ZXModGhpcy50ZXh0KTtcbiAgICAgICAgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcbiAgICAgICAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0aGlzLmRlbHRhKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIHRoaXMudHlwZSwgVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0ZXh0Qnl0ZXMubGVuZ3RoKSwgLy8gU2l6ZVxuICAgICAgICB0ZXh0Qnl0ZXMpO1xuICAgIH1cbiAgICByZXR1cm4gQ29weXJpZ2h0RXZlbnQ7XG59KCkpO1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIGN1ZSBwb2ludCBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtvYmplY3R9IGZpZWxkcyB7dGV4dDogc3RyaW5nLCBkZWx0YTogaW50ZWdlcn1cbiAqIEByZXR1cm4ge0N1ZVBvaW50RXZlbnR9XG4gKi9cbnZhciBDdWVQb2ludEV2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEN1ZVBvaW50RXZlbnQoZmllbGRzKSB7XG4gICAgICAgIHRoaXMuZGVsdGEgPSBmaWVsZHMuZGVsdGEgfHwgMHgwMDtcbiAgICAgICAgdGhpcy5uYW1lID0gJ0N1ZVBvaW50RXZlbnQnO1xuICAgICAgICB0aGlzLnRleHQgPSBmaWVsZHMudGV4dDtcbiAgICAgICAgdGhpcy50eXBlID0gMHgwNztcbiAgICAgICAgdmFyIHRleHRCeXRlcyA9IFV0aWxzLnN0cmluZ1RvQnl0ZXModGhpcy50ZXh0KTtcbiAgICAgICAgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcbiAgICAgICAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0aGlzLmRlbHRhKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIHRoaXMudHlwZSwgVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0ZXh0Qnl0ZXMubGVuZ3RoKSwgLy8gU2l6ZVxuICAgICAgICB0ZXh0Qnl0ZXMpO1xuICAgIH1cbiAgICByZXR1cm4gQ3VlUG9pbnRFdmVudDtcbn0oKSk7XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgZW5kIHRyYWNrIG1ldGEgZXZlbnQuXG4gKiBAcGFyYW0ge29iamVjdH0gZmllbGRzIHtkZWx0YTogaW50ZWdlcn1cbiAqIEByZXR1cm4ge0VuZFRyYWNrRXZlbnR9XG4gKi9cbnZhciBFbmRUcmFja0V2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEVuZFRyYWNrRXZlbnQoZmllbGRzKSB7XG4gICAgICAgIHRoaXMuZGVsdGEgPSAoZmllbGRzID09PSBudWxsIHx8IGZpZWxkcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZmllbGRzLmRlbHRhKSB8fCAweDAwO1xuICAgICAgICB0aGlzLm5hbWUgPSAnRW5kVHJhY2tFdmVudCc7XG4gICAgICAgIHRoaXMudHlwZSA9IFsweDJGLCAweDAwXTtcbiAgICAgICAgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcbiAgICAgICAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0aGlzLmRlbHRhKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIHRoaXMudHlwZSk7XG4gICAgfVxuICAgIHJldHVybiBFbmRUcmFja0V2ZW50O1xufSgpKTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYW4gaW5zdHJ1bWVudCBuYW1lIG1ldGEgZXZlbnQuXG4gKiBAcGFyYW0ge29iamVjdH0gZmllbGRzIHt0ZXh0OiBzdHJpbmcsIGRlbHRhOiBpbnRlZ2VyfVxuICogQHJldHVybiB7SW5zdHJ1bWVudE5hbWVFdmVudH1cbiAqL1xudmFyIEluc3RydW1lbnROYW1lRXZlbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSW5zdHJ1bWVudE5hbWVFdmVudChmaWVsZHMpIHtcbiAgICAgICAgdGhpcy5kZWx0YSA9IGZpZWxkcy5kZWx0YSB8fCAweDAwO1xuICAgICAgICB0aGlzLm5hbWUgPSAnSW5zdHJ1bWVudE5hbWVFdmVudCc7XG4gICAgICAgIHRoaXMudGV4dCA9IGZpZWxkcy50ZXh0O1xuICAgICAgICB0aGlzLnR5cGUgPSAweDA0O1xuICAgICAgICB2YXIgdGV4dEJ5dGVzID0gVXRpbHMuc3RyaW5nVG9CeXRlcyh0aGlzLnRleHQpO1xuICAgICAgICAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuICAgICAgICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRoaXMuZGVsdGEpLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgdGhpcy50eXBlLCBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRleHRCeXRlcy5sZW5ndGgpLCAvLyBTaXplXG4gICAgICAgIHRleHRCeXRlcyk7XG4gICAgfVxuICAgIHJldHVybiBJbnN0cnVtZW50TmFtZUV2ZW50O1xufSgpKTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSBrZXkgc2lnbmF0dXJlIG1ldGEgZXZlbnQuXG4gKiBAcmV0dXJuIHtLZXlTaWduYXR1cmVFdmVudH1cbiAqL1xudmFyIEtleVNpZ25hdHVyZUV2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEtleVNpZ25hdHVyZUV2ZW50KHNmLCBtaSkge1xuICAgICAgICB0aGlzLm5hbWUgPSAnS2V5U2lnbmF0dXJlRXZlbnQnO1xuICAgICAgICB0aGlzLnR5cGUgPSAweDU5O1xuICAgICAgICB2YXIgbW9kZSA9IG1pIHx8IDA7XG4gICAgICAgIHNmID0gc2YgfHwgMDtcbiAgICAgICAgLy9cdEZ1bmN0aW9uIGNhbGxlZCB3aXRoIHN0cmluZyBub3RhdGlvblxuICAgICAgICBpZiAodHlwZW9mIG1pID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdmFyIGZpZnRocyA9IFtcbiAgICAgICAgICAgICAgICBbJ0NiJywgJ0diJywgJ0RiJywgJ0FiJywgJ0ViJywgJ0JiJywgJ0YnLCAnQycsICdHJywgJ0QnLCAnQScsICdFJywgJ0InLCAnRiMnLCAnQyMnXSxcbiAgICAgICAgICAgICAgICBbJ2FiJywgJ2ViJywgJ2JiJywgJ2YnLCAnYycsICdnJywgJ2QnLCAnYScsICdlJywgJ2InLCAnZiMnLCAnYyMnLCAnZyMnLCAnZCMnLCAnYSMnXVxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIHZhciBfc2ZsZW4gPSBzZi5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgbm90ZSA9IHNmIHx8ICdDJztcbiAgICAgICAgICAgIGlmIChzZlswXSA9PT0gc2ZbMF0udG9Mb3dlckNhc2UoKSlcbiAgICAgICAgICAgICAgICBtb2RlID0gMTtcbiAgICAgICAgICAgIGlmIChfc2ZsZW4gPiAxKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChzZi5jaGFyQXQoX3NmbGVuIC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdGUgPSBzZi5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdGUgPSBub3RlLmNvbmNhdChzZi5zdWJzdHJpbmcoMSwgX3NmbGVuIC0gMSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZSA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RlID0gc2YuY2hhckF0KDApLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RlID0gbm90ZS5jb25jYXQoc2Yuc3Vic3RyaW5nKDEsIF9zZmxlbiAtIDEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdNJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGUgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90ZSA9IHNmLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90ZSA9IG5vdGUuY29uY2F0KHNmLnN1YnN0cmluZygxLCBfc2ZsZW4gLSAxKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdGUgPSBzZi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdGUgPSBub3RlLmNvbmNhdChzZi5zdWJzdHJpbmcoMSwgX3NmbGVuIC0gMSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGZpZnRoaW5kZXggPSBmaWZ0aHNbbW9kZV0uaW5kZXhPZihub3RlKTtcbiAgICAgICAgICAgIHNmID0gZmlmdGhpbmRleCA9PT0gLTEgPyAwIDogZmlmdGhpbmRleCAtIDc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcbiAgICAgICAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIHRoaXMudHlwZSwgWzB4MDJdLCAvLyBTaXplXG4gICAgICAgIFV0aWxzLm51bWJlclRvQnl0ZXMoc2YsIDEpLCAvLyBOdW1iZXIgb2Ygc2hhcnAgb3IgZmxhdHMgKCA8IDAgZmxhdDsgPiAwIHNoYXJwKVxuICAgICAgICBVdGlscy5udW1iZXJUb0J5dGVzKG1vZGUsIDEpKTtcbiAgICB9XG4gICAgcmV0dXJuIEtleVNpZ25hdHVyZUV2ZW50O1xufSgpKTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSBseXJpYyBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtvYmplY3R9IGZpZWxkcyB7dGV4dDogc3RyaW5nLCBkZWx0YTogaW50ZWdlcn1cbiAqIEByZXR1cm4ge0x5cmljRXZlbnR9XG4gKi9cbnZhciBMeXJpY0V2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEx5cmljRXZlbnQoZmllbGRzKSB7XG4gICAgICAgIHRoaXMuZGVsdGEgPSBmaWVsZHMuZGVsdGEgfHwgMHgwMDtcbiAgICAgICAgdGhpcy5uYW1lID0gJ0x5cmljRXZlbnQnO1xuICAgICAgICB0aGlzLnRleHQgPSBmaWVsZHMudGV4dDtcbiAgICAgICAgdGhpcy50eXBlID0gMHgwNTtcbiAgICAgICAgdmFyIHRleHRCeXRlcyA9IFV0aWxzLnN0cmluZ1RvQnl0ZXModGhpcy50ZXh0KTtcbiAgICAgICAgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcbiAgICAgICAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0aGlzLmRlbHRhKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIHRoaXMudHlwZSwgVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0ZXh0Qnl0ZXMubGVuZ3RoKSwgLy8gU2l6ZVxuICAgICAgICB0ZXh0Qnl0ZXMpO1xuICAgIH1cbiAgICByZXR1cm4gTHlyaWNFdmVudDtcbn0oKSk7XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgbWFya2VyIG1ldGEgZXZlbnQuXG4gKiBAcGFyYW0ge29iamVjdH0gZmllbGRzIHt0ZXh0OiBzdHJpbmcsIGRlbHRhOiBpbnRlZ2VyfVxuICogQHJldHVybiB7TWFya2VyRXZlbnR9XG4gKi9cbnZhciBNYXJrZXJFdmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNYXJrZXJFdmVudChmaWVsZHMpIHtcbiAgICAgICAgdGhpcy5kZWx0YSA9IGZpZWxkcy5kZWx0YSB8fCAweDAwO1xuICAgICAgICB0aGlzLm5hbWUgPSAnTWFya2VyRXZlbnQnO1xuICAgICAgICB0aGlzLnRleHQgPSBmaWVsZHMudGV4dDtcbiAgICAgICAgdGhpcy50eXBlID0gMHgwNjtcbiAgICAgICAgdmFyIHRleHRCeXRlcyA9IFV0aWxzLnN0cmluZ1RvQnl0ZXModGhpcy50ZXh0KTtcbiAgICAgICAgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcbiAgICAgICAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0aGlzLmRlbHRhKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIHRoaXMudHlwZSwgVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0ZXh0Qnl0ZXMubGVuZ3RoKSwgLy8gU2l6ZVxuICAgICAgICB0ZXh0Qnl0ZXMpO1xuICAgIH1cbiAgICByZXR1cm4gTWFya2VyRXZlbnQ7XG59KCkpO1xuXG4vKipcbiAqIEhvbGRzIGFsbCBkYXRhIGZvciBhIFwibm90ZSBvblwiIE1JREkgZXZlbnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZHMge2RhdGE6IFtdfVxuICogQHJldHVybiB7Tm90ZU9uRXZlbnR9XG4gKi9cbnZhciBOb3RlT25FdmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBOb3RlT25FdmVudChmaWVsZHMpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gJ05vdGVPbkV2ZW50JztcbiAgICAgICAgdGhpcy5jaGFubmVsID0gZmllbGRzLmNoYW5uZWwgfHwgMTtcbiAgICAgICAgdGhpcy5waXRjaCA9IGZpZWxkcy5waXRjaDtcbiAgICAgICAgdGhpcy53YWl0ID0gZmllbGRzLndhaXQgfHwgMDtcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IGZpZWxkcy52ZWxvY2l0eSB8fCA1MDtcbiAgICAgICAgdGhpcy50aWNrID0gZmllbGRzLnRpY2sgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5kZWx0YSA9IG51bGw7XG4gICAgICAgIHRoaXMuZGF0YSA9IGZpZWxkcy5kYXRhO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IDB4OTA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJ1aWxkcyBpbnQgYXJyYXkgZm9yIHRoaXMgZXZlbnQuXG4gICAgICogQHBhcmFtIHtUcmFja30gdHJhY2sgLSBwYXJlbnQgdHJhY2tcbiAgICAgKiBAcmV0dXJuIHtOb3RlT25FdmVudH1cbiAgICAgKi9cbiAgICBOb3RlT25FdmVudC5wcm90b3R5cGUuYnVpbGREYXRhID0gZnVuY3Rpb24gKHRyYWNrLCBwcmVjaXNpb25EZWx0YSwgb3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICAgICAgdmFyIHRpY2tzUGVyQmVhdCA9IG9wdGlvbnMudGlja3NQZXJCZWF0IHx8IDEyODtcbiAgICAgICAgLy8gRXhwbGljaXRseSBkZWZpbmVkIHN0YXJ0VGljayBldmVudFxuICAgICAgICBpZiAodGhpcy50aWNrKSB7XG4gICAgICAgICAgICB0aGlzLnRpY2sgPSBVdGlscy5nZXRSb3VuZGVkSWZDbG9zZSh0aGlzLnRpY2spO1xuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyB0aGUgZmlyc3QgZXZlbnQgaW4gdGhlIHRyYWNrIHRoZW4gdXNlIGV2ZW50J3Mgc3RhcnRpbmcgdGljayBhcyBkZWx0YS5cbiAgICAgICAgICAgIGlmICh0cmFjay50aWNrUG9pbnRlciA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWx0YSA9IHRoaXMudGljaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGVsdGEgPSBVdGlscy5nZXRUaWNrRHVyYXRpb24odGhpcy53YWl0LCB0aWNrc1BlckJlYXQpO1xuICAgICAgICAgICAgdGhpcy50aWNrID0gVXRpbHMuZ2V0Um91bmRlZElmQ2xvc2UodHJhY2sudGlja1BvaW50ZXIgKyB0aGlzLmRlbHRhKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlbHRhV2l0aFByZWNpc2lvbkNvcnJlY3Rpb24gPSBVdGlscy5nZXRSb3VuZGVkSWZDbG9zZSh0aGlzLmRlbHRhIC0gcHJlY2lzaW9uRGVsdGEpO1xuICAgICAgICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRoaXMuZGVsdGFXaXRoUHJlY2lzaW9uQ29ycmVjdGlvbilcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy5zdGF0dXMgfCB0aGlzLmNoYW5uZWwgLSAxLCBVdGlscy5nZXRQaXRjaCh0aGlzLnBpdGNoLCBvcHRpb25zLm1pZGRsZUMpLCBVdGlscy5jb252ZXJ0VmVsb2NpdHkodGhpcy52ZWxvY2l0eSkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHJldHVybiBOb3RlT25FdmVudDtcbn0oKSk7XG5cbi8qKlxuICogSG9sZHMgYWxsIGRhdGEgZm9yIGEgXCJub3RlIG9mZlwiIE1JREkgZXZlbnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZHMge2RhdGE6IFtdfVxuICogQHJldHVybiB7Tm90ZU9mZkV2ZW50fVxuICovXG52YXIgTm90ZU9mZkV2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE5vdGVPZmZFdmVudChmaWVsZHMpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gJ05vdGVPZmZFdmVudCc7XG4gICAgICAgIHRoaXMuY2hhbm5lbCA9IGZpZWxkcy5jaGFubmVsIHx8IDE7XG4gICAgICAgIHRoaXMucGl0Y2ggPSBmaWVsZHMucGl0Y2g7XG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSBmaWVsZHMudmVsb2NpdHkgfHwgNTA7XG4gICAgICAgIHRoaXMudGljayA9IGZpZWxkcy50aWNrIHx8IG51bGw7XG4gICAgICAgIHRoaXMuZGF0YSA9IGZpZWxkcy5kYXRhO1xuICAgICAgICB0aGlzLmRlbHRhID0gZmllbGRzLmRlbHRhICE9PSB1bmRlZmluZWQgPyBmaWVsZHMuZGVsdGEgOiBVdGlscy5nZXRUaWNrRHVyYXRpb24oZmllbGRzLmR1cmF0aW9uKTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSAweDgwO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBCdWlsZHMgaW50IGFycmF5IGZvciB0aGlzIGV2ZW50LlxuICAgICAqIEBwYXJhbSB7VHJhY2t9IHRyYWNrIC0gcGFyZW50IHRyYWNrXG4gICAgICogQHJldHVybiB7Tm90ZU9mZkV2ZW50fVxuICAgICAqL1xuICAgIE5vdGVPZmZFdmVudC5wcm90b3R5cGUuYnVpbGREYXRhID0gZnVuY3Rpb24gKHRyYWNrLCBwcmVjaXNpb25EZWx0YSwgb3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICBpZiAodGhpcy50aWNrID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnRpY2sgPSBVdGlscy5nZXRSb3VuZGVkSWZDbG9zZSh0aGlzLmRlbHRhICsgdHJhY2sudGlja1BvaW50ZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVsdGFXaXRoUHJlY2lzaW9uQ29ycmVjdGlvbiA9IFV0aWxzLmdldFJvdW5kZWRJZkNsb3NlKHRoaXMuZGVsdGEgLSBwcmVjaXNpb25EZWx0YSk7XG4gICAgICAgIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgodGhpcy5kZWx0YVdpdGhQcmVjaXNpb25Db3JyZWN0aW9uKVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLnN0YXR1cyB8IHRoaXMuY2hhbm5lbCAtIDEsIFV0aWxzLmdldFBpdGNoKHRoaXMucGl0Y2gsIG9wdGlvbnMubWlkZGxlQyksIFV0aWxzLmNvbnZlcnRWZWxvY2l0eSh0aGlzLnZlbG9jaXR5KSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgcmV0dXJuIE5vdGVPZmZFdmVudDtcbn0oKSk7XG5cbi8qKlxuICogV3JhcHBlciBmb3Igbm90ZU9uRXZlbnQvbm90ZU9mZkV2ZW50IG9iamVjdHMgdGhhdCBidWlsZHMgYm90aCBldmVudHMuXG4gKiBAcGFyYW0ge29iamVjdH0gZmllbGRzIC0ge3BpdGNoOiAnW0M0XScsIGR1cmF0aW9uOiAnNCcsIHdhaXQ6ICc0JywgdmVsb2NpdHk6IDEtMTAwfVxuICogQHJldHVybiB7Tm90ZUV2ZW50fVxuICovXG52YXIgTm90ZUV2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE5vdGVFdmVudChmaWVsZHMpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgICAgIHRoaXMubmFtZSA9ICdOb3RlRXZlbnQnO1xuICAgICAgICB0aGlzLnBpdGNoID0gVXRpbHMudG9BcnJheShmaWVsZHMucGl0Y2gpO1xuICAgICAgICB0aGlzLmNoYW5uZWwgPSBmaWVsZHMuY2hhbm5lbCB8fCAxO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gZmllbGRzLmR1cmF0aW9uIHx8ICc0JztcbiAgICAgICAgdGhpcy5ncmFjZSA9IGZpZWxkcy5ncmFjZTtcbiAgICAgICAgdGhpcy5yZXBlYXQgPSBmaWVsZHMucmVwZWF0IHx8IDE7XG4gICAgICAgIHRoaXMuc2VxdWVudGlhbCA9IGZpZWxkcy5zZXF1ZW50aWFsIHx8IGZhbHNlO1xuICAgICAgICB0aGlzLnRpY2sgPSBmaWVsZHMuc3RhcnRUaWNrIHx8IGZpZWxkcy50aWNrIHx8IG51bGw7XG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSBmaWVsZHMudmVsb2NpdHkgfHwgNTA7XG4gICAgICAgIHRoaXMud2FpdCA9IGZpZWxkcy53YWl0IHx8IDA7XG4gICAgICAgIHRoaXMudGlja0R1cmF0aW9uID0gVXRpbHMuZ2V0VGlja0R1cmF0aW9uKHRoaXMuZHVyYXRpb24pO1xuICAgICAgICB0aGlzLnJlc3REdXJhdGlvbiA9IFV0aWxzLmdldFRpY2tEdXJhdGlvbih0aGlzLndhaXQpO1xuICAgICAgICB0aGlzLmV2ZW50cyA9IFtdOyAvLyBIb2xkIGFjdHVhbCBOb3RlT24vTm90ZU9mZiBldmVudHNcbiAgICB9XG4gICAgLyoqXG4gICAgICogQnVpbGRzIGludCBhcnJheSBmb3IgdGhpcyBldmVudC5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIHt0aWNrc1BlckJlYXQ6IG51bWJlcn1cbiAgICAgKiBAcmV0dXJuIHtOb3RlRXZlbnR9XG4gICAgICovXG4gICAgTm90ZUV2ZW50LnByb3RvdHlwZS5idWlsZERhdGEgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICAvLyBSZXNldCBkYXRhIGFycmF5XG4gICAgICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICAgICB0aGlzLmV2ZW50cyA9IFtdO1xuICAgICAgICB2YXIgdGlja3NQZXJCZWF0ID0gb3B0aW9ucy50aWNrc1BlckJlYXQgfHwgMTI4O1xuICAgICAgICAvLyBBcHBseSBncmFjZSBub3RlKHMpIGFuZCBzdWJ0cmFjdCB0aWNrcyAoY3VycmVudGx5IDEgdGljayBwZXIgZ3JhY2Ugbm90ZSkgZnJvbSB0aWNrRHVyYXRpb24gc28gbmV0IHZhbHVlIGlzIHRoZSBzYW1lXG4gICAgICAgIGlmICh0aGlzLmdyYWNlKSB7XG4gICAgICAgICAgICB2YXIgZ3JhY2VEdXJhdGlvbl8xID0gMTtcbiAgICAgICAgICAgIHRoaXMuZ3JhY2UgPSBVdGlscy50b0FycmF5KHRoaXMuZ3JhY2UpO1xuICAgICAgICAgICAgdGhpcy5ncmFjZS5mb3JFYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgdmFyIG5vdGVFdmVudCA9IG5ldyBOb3RlRXZlbnQoeyBwaXRjaDogX3RoaXMuZ3JhY2UsIGR1cmF0aW9uOiAnVCcgKyBncmFjZUR1cmF0aW9uXzEgfSk7XG4gICAgICAgICAgICAgICAgKF9hID0gX3RoaXMuZGF0YSkucHVzaC5hcHBseShfYSwgbm90ZUV2ZW50LmRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZmllbGRzLnBpdGNoIGNvdWxkIGJlIGFuIGFycmF5IG9mIHBpdGNoZXMuXG4gICAgICAgIC8vIElmIHNvIGNyZWF0ZSBub3RlIGV2ZW50cyBmb3IgZWFjaCBhbmQgYXBwbHkgdGhlIHNhbWUgZHVyYXRpb24uXG4gICAgICAgIC8vIEJ5IGRlZmF1bHQgdGhpcyBpcyBhIGNob3JkIGlmIGl0J3MgYW4gYXJyYXkgb2Ygbm90ZXMgdGhhdCByZXF1aXJlcyBvbmUgTm90ZU9uRXZlbnQuXG4gICAgICAgIC8vIElmIHRoaXMuc2VxdWVudGlhbCA9PT0gdHJ1ZSB0aGVuIGl0J3MgYSBzZXF1ZW50aWFsIHN0cmluZyBvZiBub3RlcyB0aGF0IHJlcXVpcmVzIHNlcGFyYXRlIE5vdGVPbkV2ZW50cy5cbiAgICAgICAgaWYgKCF0aGlzLnNlcXVlbnRpYWwpIHtcbiAgICAgICAgICAgIC8vIEhhbmRsZSByZXBlYXRcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5yZXBlYXQ7IGorKykge1xuICAgICAgICAgICAgICAgIC8vIE5vdGUgb25cbiAgICAgICAgICAgICAgICB0aGlzLnBpdGNoLmZvckVhY2goZnVuY3Rpb24gKHAsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vdGVPbk5ldztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90ZU9uTmV3ID0gbmV3IE5vdGVPbkV2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFubmVsOiBfdGhpcy5jaGFubmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhaXQ6IF90aGlzLndhaXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IFV0aWxzLmdldFRpY2tEdXJhdGlvbihfdGhpcy53YWl0LCB0aWNrc1BlckJlYXQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlbG9jaXR5OiBfdGhpcy52ZWxvY2l0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaXRjaDogcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrOiBfdGhpcy50aWNrLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSdW5uaW5nIHN0YXR1cyAoY2FuIG9tbWl0IHRoZSBub3RlIG9uIHN0YXR1cylcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vbm90ZU9uID0gbmV3IE5vdGVPbkV2ZW50KHtkYXRhOiBbMCwgVXRpbHMuZ2V0UGl0Y2gocCksIFV0aWxzLmNvbnZlcnRWZWxvY2l0eSh0aGlzLnZlbG9jaXR5KV19KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdGVPbk5ldyA9IG5ldyBOb3RlT25FdmVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbDogX3RoaXMuY2hhbm5lbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWl0OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlbG9jaXR5OiBfdGhpcy52ZWxvY2l0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaXRjaDogcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrOiBfdGhpcy50aWNrLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZXZlbnRzLnB1c2gobm90ZU9uTmV3KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyBOb3RlIG9mZlxuICAgICAgICAgICAgICAgIHRoaXMucGl0Y2guZm9yRWFjaChmdW5jdGlvbiAocCwgaSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbm90ZU9mZk5ldztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9ub3RlT2ZmID0gbmV3IE5vdGVPZmZFdmVudCh7ZGF0YTogVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0aWNrRHVyYXRpb24pLmNvbmNhdCh0aGlzLmdldE5vdGVPZmZTdGF0dXMoKSwgVXRpbHMuZ2V0UGl0Y2gocCksIFV0aWxzLmNvbnZlcnRWZWxvY2l0eSh0aGlzLnZlbG9jaXR5KSl9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdGVPZmZOZXcgPSBuZXcgTm90ZU9mZkV2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFubmVsOiBfdGhpcy5jaGFubmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBfdGhpcy5kdXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogVXRpbHMuZ2V0VGlja0R1cmF0aW9uKF90aGlzLmR1cmF0aW9uLCB0aWNrc1BlckJlYXQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlbG9jaXR5OiBfdGhpcy52ZWxvY2l0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaXRjaDogcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrOiBfdGhpcy50aWNrICE9PSBudWxsID8gVXRpbHMuZ2V0VGlja0R1cmF0aW9uKF90aGlzLmR1cmF0aW9uLCB0aWNrc1BlckJlYXQpICsgX3RoaXMudGljayA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJ1bm5pbmcgc3RhdHVzIChjYW4gb21pdCB0aGUgbm90ZSBvZmYgc3RhdHVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy9ub3RlT2ZmID0gbmV3IE5vdGVPZmZFdmVudCh7ZGF0YTogWzAsIFV0aWxzLmdldFBpdGNoKHApLCBVdGlscy5jb252ZXJ0VmVsb2NpdHkodGhpcy52ZWxvY2l0eSldfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RlT2ZmTmV3ID0gbmV3IE5vdGVPZmZFdmVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbDogX3RoaXMuY2hhbm5lbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWxvY2l0eTogX3RoaXMudmVsb2NpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGl0Y2g6IHAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGljazogX3RoaXMudGljayAhPT0gbnVsbCA/IFV0aWxzLmdldFRpY2tEdXJhdGlvbihfdGhpcy5kdXJhdGlvbiwgdGlja3NQZXJCZWF0KSArIF90aGlzLnRpY2sgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZXZlbnRzLnB1c2gobm90ZU9mZk5ldyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBIYW5kbGUgcmVwZWF0XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMucmVwZWF0OyBqKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBpdGNoLmZvckVhY2goZnVuY3Rpb24gKHAsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vdGVPbk5ldyA9IG5ldyBOb3RlT25FdmVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFubmVsOiBfdGhpcy5jaGFubmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2FpdDogKGkgPiAwID8gMCA6IF90aGlzLndhaXQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IChpID4gMCA/IDAgOiBVdGlscy5nZXRUaWNrRHVyYXRpb24oX3RoaXMud2FpdCwgdGlja3NQZXJCZWF0KSksXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZWxvY2l0eTogX3RoaXMudmVsb2NpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICBwaXRjaDogcCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2s6IF90aGlzLnRpY2ssXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbm90ZU9mZk5ldyA9IG5ldyBOb3RlT2ZmRXZlbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbDogX3RoaXMuY2hhbm5lbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBfdGhpcy5kdXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhOiBVdGlscy5nZXRUaWNrRHVyYXRpb24oX3RoaXMuZHVyYXRpb24sIHRpY2tzUGVyQmVhdCksXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZWxvY2l0eTogX3RoaXMudmVsb2NpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICBwaXRjaDogcCxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmV2ZW50cy5wdXNoKG5vdGVPbk5ldywgbm90ZU9mZk5ldyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICByZXR1cm4gTm90ZUV2ZW50O1xufSgpKTtcblxuLyoqXG4gKiBIb2xkcyBhbGwgZGF0YSBmb3IgYSBcIlBpdGNoIEJlbmRcIiBNSURJIGV2ZW50XG4gKiBbIC0xLjAsIDAsIDEuMCBdIC0+ICBbIDAsIDgxOTIsIDE2MzgzXVxuICogQHBhcmFtIHtvYmplY3R9IGZpZWxkcyB7IGJlbmQgOiBmbG9hdCwgY2hhbm5lbCA6IGludCwgZGVsdGE6IGludCB9XG4gKiBAcmV0dXJuIHtQaXRjaEJlbmRFdmVudH1cbiAqL1xudmFyIFBpdGNoQmVuZEV2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFBpdGNoQmVuZEV2ZW50KGZpZWxkcykge1xuICAgICAgICB0aGlzLmNoYW5uZWwgPSBmaWVsZHMuY2hhbm5lbCB8fCAwO1xuICAgICAgICB0aGlzLmRlbHRhID0gZmllbGRzLmRlbHRhIHx8IDB4MDA7XG4gICAgICAgIHRoaXMubmFtZSA9ICdQaXRjaEJlbmRFdmVudCc7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gMHhFMDtcbiAgICAgICAgdmFyIGJlbmQxNCA9IHRoaXMuc2NhbGUxNGJpdHMoZmllbGRzLmJlbmQpO1xuICAgICAgICB2YXIgbHNiVmFsdWUgPSBiZW5kMTQgJiAweDdmO1xuICAgICAgICB2YXIgbXNiVmFsdWUgPSAoYmVuZDE0ID4+IDcpICYgMHg3ZjtcbiAgICAgICAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0aGlzLmRlbHRhKS5jb25jYXQodGhpcy5zdGF0dXMgfCB0aGlzLmNoYW5uZWwsIGxzYlZhbHVlLCBtc2JWYWx1ZSk7XG4gICAgfVxuICAgIFBpdGNoQmVuZEV2ZW50LnByb3RvdHlwZS5zY2FsZTE0Yml0cyA9IGZ1bmN0aW9uICh6ZXJvT25lKSB7XG4gICAgICAgIGlmICh6ZXJvT25lIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKDE2Mzg0ICogKHplcm9PbmUgKyAxKSAvIDIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKDE2MzgzICogKHplcm9PbmUgKyAxKSAvIDIpO1xuICAgIH07XG4gICAgcmV0dXJuIFBpdGNoQmVuZEV2ZW50O1xufSgpKTtcblxuLyoqXG4gKiBIb2xkcyBhbGwgZGF0YSBmb3IgYSBcInByb2dyYW0gY2hhbmdlXCIgTUlESSBldmVudFxuICogQHBhcmFtIHtvYmplY3R9IGZpZWxkcyB7aW5zdHJ1bWVudDogaW50ZWdlciwgZGVsdGE6IGludGVnZXJ9XG4gKiBAcmV0dXJuIHtQcm9ncmFtQ2hhbmdlRXZlbnR9XG4gKi9cbnZhciBQcm9ncmFtQ2hhbmdlRXZlbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUHJvZ3JhbUNoYW5nZUV2ZW50KGZpZWxkcykge1xuICAgICAgICB0aGlzLmNoYW5uZWwgPSBmaWVsZHMuY2hhbm5lbCB8fCAwO1xuICAgICAgICB0aGlzLmRlbHRhID0gZmllbGRzLmRlbHRhIHx8IDB4MDA7XG4gICAgICAgIHRoaXMuaW5zdHJ1bWVudCA9IGZpZWxkcy5pbnN0cnVtZW50O1xuICAgICAgICB0aGlzLnN0YXR1cyA9IDB4QzA7XG4gICAgICAgIHRoaXMubmFtZSA9ICdQcm9ncmFtQ2hhbmdlRXZlbnQnO1xuICAgICAgICAvLyBkZWx0YSB0aW1lIGRlZmF1bHRzIHRvIDAuXG4gICAgICAgIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgodGhpcy5kZWx0YSkuY29uY2F0KHRoaXMuc3RhdHVzIHwgdGhpcy5jaGFubmVsLCB0aGlzLmluc3RydW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvZ3JhbUNoYW5nZUV2ZW50O1xufSgpKTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSB0ZW1wbyBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtvYmplY3R9IGZpZWxkcyB7YnBtOiBpbnRlZ2VyLCBkZWx0YTogaW50ZWdlcn1cbiAqIEByZXR1cm4ge1RlbXBvRXZlbnR9XG4gKi9cbnZhciBUZW1wb0V2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRlbXBvRXZlbnQoZmllbGRzKSB7XG4gICAgICAgIHRoaXMuYnBtID0gZmllbGRzLmJwbTtcbiAgICAgICAgdGhpcy5kZWx0YSA9IGZpZWxkcy5kZWx0YSB8fCAweDAwO1xuICAgICAgICB0aGlzLnRpY2sgPSBmaWVsZHMudGljaztcbiAgICAgICAgdGhpcy5uYW1lID0gJ1RlbXBvRXZlbnQnO1xuICAgICAgICB0aGlzLnR5cGUgPSAweDUxO1xuICAgICAgICB2YXIgdGVtcG8gPSBNYXRoLnJvdW5kKDYwMDAwMDAwIC8gdGhpcy5icG0pO1xuICAgICAgICAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuICAgICAgICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRoaXMuZGVsdGEpLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgdGhpcy50eXBlLCBbMHgwM10sIC8vIFNpemVcbiAgICAgICAgVXRpbHMubnVtYmVyVG9CeXRlcyh0ZW1wbywgMykpO1xuICAgIH1cbiAgICByZXR1cm4gVGVtcG9FdmVudDtcbn0oKSk7XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgdGVtcG8gbWV0YSBldmVudC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZHMge3RleHQ6IHN0cmluZywgZGVsdGE6IGludGVnZXJ9XG4gKiBAcmV0dXJuIHtUZXh0RXZlbnR9XG4gKi9cbnZhciBUZXh0RXZlbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVGV4dEV2ZW50KGZpZWxkcykge1xuICAgICAgICB0aGlzLmRlbHRhID0gZmllbGRzLmRlbHRhIHx8IDB4MDA7XG4gICAgICAgIHRoaXMudGV4dCA9IGZpZWxkcy50ZXh0O1xuICAgICAgICB0aGlzLm5hbWUgPSAnVGV4dEV2ZW50JztcbiAgICAgICAgdGhpcy50eXBlID0gMHgwMTtcbiAgICAgICAgdmFyIHRleHRCeXRlcyA9IFV0aWxzLnN0cmluZ1RvQnl0ZXModGhpcy50ZXh0KTtcbiAgICAgICAgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcbiAgICAgICAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aChmaWVsZHMuZGVsdGEpLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgdGhpcy50eXBlLCBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRleHRCeXRlcy5sZW5ndGgpLCAvLyBTaXplXG4gICAgICAgIHRleHRCeXRlcyk7XG4gICAgfVxuICAgIHJldHVybiBUZXh0RXZlbnQ7XG59KCkpO1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIHRpbWUgc2lnbmF0dXJlIG1ldGEgZXZlbnQuXG4gKiBAcmV0dXJuIHtUaW1lU2lnbmF0dXJlRXZlbnR9XG4gKi9cbnZhciBUaW1lU2lnbmF0dXJlRXZlbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVGltZVNpZ25hdHVyZUV2ZW50KG51bWVyYXRvciwgZGVub21pbmF0b3IsIG1pZGljbG9ja3NwZXJ0aWNrLCBub3Rlc3Blcm1pZGljbG9jaykge1xuICAgICAgICB0aGlzLm5hbWUgPSAnVGltZVNpZ25hdHVyZUV2ZW50JztcbiAgICAgICAgdGhpcy50eXBlID0gMHg1ODtcbiAgICAgICAgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcbiAgICAgICAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIHRoaXMudHlwZSwgWzB4MDRdLCAvLyBTaXplXG4gICAgICAgIFV0aWxzLm51bWJlclRvQnl0ZXMobnVtZXJhdG9yLCAxKSwgLy8gTnVtZXJhdG9yLCAxIGJ5dGVzXG4gICAgICAgIFV0aWxzLm51bWJlclRvQnl0ZXMoTWF0aC5sb2cyKGRlbm9taW5hdG9yKSwgMSksIC8vIERlbm9taW5hdG9yIGlzIGV4cHJlc3NlZCBhcyBwb3cgb2YgMiwgMSBieXRlc1xuICAgICAgICBVdGlscy5udW1iZXJUb0J5dGVzKG1pZGljbG9ja3NwZXJ0aWNrIHx8IDI0LCAxKSwgLy8gTUlESSBDbG9ja3MgcGVyIHRpY2ssIDEgYnl0ZXNcbiAgICAgICAgVXRpbHMubnVtYmVyVG9CeXRlcyhub3Rlc3Blcm1pZGljbG9jayB8fCA4LCAxKSk7XG4gICAgfVxuICAgIHJldHVybiBUaW1lU2lnbmF0dXJlRXZlbnQ7XG59KCkpO1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIHRlbXBvIG1ldGEgZXZlbnQuXG4gKiBAcGFyYW0ge29iamVjdH0gZmllbGRzIHt0ZXh0OiBzdHJpbmcsIGRlbHRhOiBpbnRlZ2VyfVxuICogQHJldHVybiB7VHJhY2tOYW1lRXZlbnR9XG4gKi9cbnZhciBUcmFja05hbWVFdmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUcmFja05hbWVFdmVudChmaWVsZHMpIHtcbiAgICAgICAgdGhpcy5kZWx0YSA9IGZpZWxkcy5kZWx0YSB8fCAweDAwO1xuICAgICAgICB0aGlzLm5hbWUgPSAnVHJhY2tOYW1lRXZlbnQnO1xuICAgICAgICB0aGlzLnRleHQgPSBmaWVsZHMudGV4dDtcbiAgICAgICAgdGhpcy50eXBlID0gMHgwMztcbiAgICAgICAgdmFyIHRleHRCeXRlcyA9IFV0aWxzLnN0cmluZ1RvQnl0ZXModGhpcy50ZXh0KTtcbiAgICAgICAgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcbiAgICAgICAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0aGlzLmRlbHRhKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIHRoaXMudHlwZSwgVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0ZXh0Qnl0ZXMubGVuZ3RoKSwgLy8gU2l6ZVxuICAgICAgICB0ZXh0Qnl0ZXMpO1xuICAgIH1cbiAgICByZXR1cm4gVHJhY2tOYW1lRXZlbnQ7XG59KCkpO1xuXG4vKipcbiAqIEhvbGRzIGFsbCBkYXRhIGZvciBhIHRyYWNrLlxuICogQHBhcmFtIHtvYmplY3R9IGZpZWxkcyB7dHlwZTogbnVtYmVyLCBkYXRhOiBhcnJheSwgc2l6ZTogYXJyYXksIGV2ZW50czogYXJyYXl9XG4gKiBAcmV0dXJuIHtUcmFja31cbiAqL1xudmFyIFRyYWNrID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRyYWNrKCkge1xuICAgICAgICB0aGlzLnR5cGUgPSBDb25zdGFudHMuVFJBQ0tfQ0hVTktfVFlQRTtcbiAgICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgICAgIHRoaXMuc2l6ZSA9IFtdO1xuICAgICAgICB0aGlzLmV2ZW50cyA9IFtdO1xuICAgICAgICB0aGlzLmV4cGxpY2l0VGlja0V2ZW50cyA9IFtdO1xuICAgICAgICAvLyBJZiB0aGVyZSBhcmUgYW55IGV2ZW50cyB3aXRoIGFuIGV4cGxpY2l0IHRpY2sgZGVmaW5lZCB0aGVuIHdlIHdpbGwgY3JlYXRlIGEgXCJzdWJcIiB0cmFjayBmb3IgdGhvc2VcbiAgICAgICAgLy8gYW5kIG1lcmdlIHRoZW0gaW4gYW5kIHRoZSBlbmQuXG4gICAgICAgIHRoaXMudGlja1BvaW50ZXIgPSAwOyAvLyBFYWNoIHRpbWUgYW4gZXZlbnQgaXMgYWRkZWQgdGhpcyB3aWxsIGluY3JlYXNlXG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYW55IGV2ZW50IHR5cGUgdG8gdGhlIHRyYWNrLlxuICAgICAqIEV2ZW50cyB3aXRob3V0IGEgc3BlY2lmaWMgc3RhcnRUaWNrIHByb3BlcnR5IGFyZSBhc3N1bWVkIHRvIGJlIGFkZGVkIGluIG9yZGVyIG9mIGhvdyB0aGV5IHNob3VsZCBvdXRwdXQuXG4gICAgICogRXZlbnRzIHdpdGggYSBzcGVjaWZpYyBzdGFydFRpY2sgcHJvcGVydHkgYXJlIHNldCBhc2lkZSBmb3Igbm93IHdpbGwgYmUgbWVyZ2VkIGluIGR1cmluZyBidWlsZCBwcm9jZXNzLlxuICAgICAqXG4gICAgICogVE9ETzogRG9uJ3QgcHV0IHN0YXJ0VGljayBldmVudHMgaW4gdGhlaXIgb3duIGFycmF5LiAgSnVzdCBsdW1wIGV2ZXJ5dGhpbmcgdG9nZXRoZXIgYW5kIHNvcnQgaXQgb3V0IGR1cmluZyBidWlsZERhdGEoKTtcbiAgICAgKiBAcGFyYW0geyhOb3RlRXZlbnR8UHJvZ3JhbUNoYW5nZUV2ZW50KX0gZXZlbnRzIC0gRXZlbnQgb2JqZWN0IG9yIGFycmF5IG9mIEV2ZW50IG9iamVjdHMuXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gbWFwRnVuY3Rpb24gLSBDYWxsYmFjayB3aGljaCBjYW4gYmUgdXNlZCB0byBhcHBseSBzcGVjaWZpYyBwcm9wZXJ0aWVzIHRvIGFsbCBldmVudHMuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG4gICAgVHJhY2sucHJvdG90eXBlLmFkZEV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50cywgbWFwRnVuY3Rpb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgVXRpbHMudG9BcnJheShldmVudHMpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50LCBpKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOb3RlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBIYW5kbGUgbWFwIGZ1bmN0aW9uIGlmIHByb3ZpZGVkXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtYXBGdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcGVydGllcyA9IG1hcEZ1bmN0aW9uKGksIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm9wZXJ0aWVzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihldmVudCwgcHJvcGVydGllcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhpcyBub3RlIGV2ZW50IGhhcyBhbiBleHBsaWNpdCBzdGFydFRpY2sgdGhlbiB3ZSBuZWVkIHRvIHNldCBhc2lkZSBmb3Igbm93XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRpY2sgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZXhwbGljaXRUaWNrRXZlbnRzLnB1c2goZXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRGVmZXIgYnVpbGRpbmcgdW50aWwgYnVpbGREYXRhKCkgd2hlbiB3ZSBoYXZlIFdyaXRlciBvcHRpb25zICh0aWNrc1BlckJlYXQpLlxuICAgICAgICAgICAgICAgICAgICAvLyBQdXNoIHRoZSBOb3RlRXZlbnQgaXRzZWxmIGFzIGEgcGxhY2Vob2xkZXIgdG8gcHJlc2VydmUgb3JkZXJpbmcuXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmV2ZW50cy5wdXNoKGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5ldmVudHMucHVzaChldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEJ1aWxkcyBpbnQgYXJyYXkgb2YgYWxsIGV2ZW50cy5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuICAgIFRyYWNrLnByb3RvdHlwZS5idWlsZERhdGEgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIC8vIFJlc2V0XG4gICAgICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICAgICB0aGlzLnNpemUgPSBbXTtcbiAgICAgICAgdGhpcy50aWNrUG9pbnRlciA9IDA7XG4gICAgICAgIC8vIEV4cGFuZCBhbnkgZGVmZXJyZWQgTm90ZUV2ZW50IHBsYWNlaG9sZGVycyBpbi1wbGFjZSwgcHJlc2VydmluZyBvcmRlclxuICAgICAgICB2YXIgZXhwYW5kZWRFdmVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5vdGVFdmVudCAmJiBldmVudC50aWNrID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQuYnVpbGREYXRhKG9wdGlvbnMpLmV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7IHJldHVybiBleHBhbmRlZEV2ZW50cy5wdXNoKGUpOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGV4cGFuZGVkRXZlbnRzLnB1c2goZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ldmVudHMgPSBleHBhbmRlZEV2ZW50cztcbiAgICAgICAgdmFyIHByZWNpc2lvbkxvc3MgPSAwO1xuICAgICAgICB0aGlzLmV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgICAgICAvLyBCdWlsZCBldmVudCAmIGFkZCB0byB0b3RhbCB0aWNrIGR1cmF0aW9uXG4gICAgICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOb3RlT25FdmVudCB8fCBldmVudCBpbnN0YW5jZW9mIE5vdGVPZmZFdmVudCkge1xuICAgICAgICAgICAgICAgIHZhciBidWlsdCA9IGV2ZW50LmJ1aWxkRGF0YShfdGhpcywgcHJlY2lzaW9uTG9zcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgcHJlY2lzaW9uTG9zcyA9IFV0aWxzLmdldFByZWNpc2lvbkxvc3MoZXZlbnQuZGVsdGFXaXRoUHJlY2lzaW9uQ29ycmVjdGlvbiB8fCAwKTtcbiAgICAgICAgICAgICAgICAoX2EgPSBfdGhpcy5kYXRhKS5wdXNoLmFwcGx5KF9hLCBidWlsdC5kYXRhKTtcbiAgICAgICAgICAgICAgICBfdGhpcy50aWNrUG9pbnRlciA9IFV0aWxzLmdldFJvdW5kZWRJZkNsb3NlKGV2ZW50LnRpY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnQgaW5zdGFuY2VvZiBUZW1wb0V2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudGlja1BvaW50ZXIgPSBVdGlscy5nZXRSb3VuZGVkSWZDbG9zZShldmVudC50aWNrKTtcbiAgICAgICAgICAgICAgICAoX2IgPSBfdGhpcy5kYXRhKS5wdXNoLmFwcGx5KF9iLCBldmVudC5kYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGV2ZW50LnRpY2sgPSBfdGhpcy50aWNrUG9pbnRlcjtcbiAgICAgICAgICAgICAgICAoX2MgPSBfdGhpcy5kYXRhKS5wdXNoLmFwcGx5KF9jLCBldmVudC5kYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubWVyZ2VFeHBsaWNpdFRpY2tFdmVudHMob3B0aW9ucyk7XG4gICAgICAgIC8vIElmIHRoZSBsYXN0IGV2ZW50IGlzbid0IEVuZFRyYWNrRXZlbnQsIHRoZW4gdGFjayBpdCBvbnRvIHRoZSBkYXRhLlxuICAgICAgICBpZiAoIXRoaXMuZXZlbnRzLmxlbmd0aCB8fCAhKHRoaXMuZXZlbnRzW3RoaXMuZXZlbnRzLmxlbmd0aCAtIDFdIGluc3RhbmNlb2YgRW5kVHJhY2tFdmVudCkpIHtcbiAgICAgICAgICAgIChfYSA9IHRoaXMuZGF0YSkucHVzaC5hcHBseShfYSwgKG5ldyBFbmRUcmFja0V2ZW50KS5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNpemUgPSBVdGlscy5udW1iZXJUb0J5dGVzKHRoaXMuZGF0YS5sZW5ndGgsIDQpOyAvLyA0IGJ5dGVzIGxvbmdcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBUcmFjay5wcm90b3R5cGUubWVyZ2VFeHBsaWNpdFRpY2tFdmVudHMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICBpZiAoIXRoaXMuZXhwbGljaXRUaWNrRXZlbnRzLmxlbmd0aClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gRmlyc3Qgc29ydCBhc2MgbGlzdCBvZiBldmVudHMgYnkgc3RhcnRUaWNrXG4gICAgICAgIHRoaXMuZXhwbGljaXRUaWNrRXZlbnRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEudGljayAtIGIudGljazsgfSk7XG4gICAgICAgIC8vIE5vdyB0aGlzLmV4cGxpY2l0VGlja0V2ZW50cyBpcyBpbiBjb3JyZWN0IG9yZGVyLCBhbmQgc28gaXMgdGhpcy5ldmVudHMgbmF0dXJhbGx5LlxuICAgICAgICAvLyBGb3IgZWFjaCBleHBsaWNpdCB0aWNrIGV2ZW50LCBzcGxpY2UgaXQgaW50byB0aGUgbWFpbiBsaXN0IG9mIGV2ZW50cyBhbmRcbiAgICAgICAgLy8gYWRqdXN0IHRoZSBkZWx0YSBvbiB0aGUgZm9sbG93aW5nIGV2ZW50cyBzbyB0aGV5IHN0aWxsIHBsYXkgbm9ybWFsbHkuXG4gICAgICAgIHRoaXMuZXhwbGljaXRUaWNrRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKG5vdGVFdmVudCkge1xuICAgICAgICAgICAgLy8gQ29udmVydCBOb3RlRXZlbnQgdG8gaXQncyByZXNwZWN0aXZlIE5vdGVPbi9Ob3RlT2ZmIGV2ZW50c1xuICAgICAgICAgICAgLy8gTm90ZSB0aGF0IGFzIHdlIHNwbGljZSBpbiBldmVudHMgdGhlIGRlbHRhIGZvciB0aGUgTm90ZU9mZiBvbmVzIHdpbGxcbiAgICAgICAgICAgIC8vIE5lZWQgdG8gY2hhbmdlIGJhc2VkIG9uIHdoYXQgY29tZXMgYmVmb3JlIHRoZW0gYWZ0ZXIgdGhlIHNwbGljZS5cbiAgICAgICAgICAgIG5vdGVFdmVudC5idWlsZERhdGEob3B0aW9ucykuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGUuYnVpbGREYXRhKF90aGlzLCAwLCBvcHRpb25zKTsgfSk7XG4gICAgICAgICAgICAvLyBNZXJnZSBlYWNoIGV2ZW50IGluZGl2aWR1YWxseSBpbnRvIHRoaXMgdHJhY2sncyBldmVudCBsaXN0LlxuICAgICAgICAgICAgbm90ZUV2ZW50LmV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gX3RoaXMubWVyZ2VTaW5nbGVFdmVudChldmVudCk7IH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gSGFja3kgd2F5IHRvIHJlYnVpbGQgdHJhY2sgd2l0aCBuZXdseSBzcGxpY2VkIGV2ZW50cy4gIE5lZWQgYmV0dGVyIHNvbHV0aW9uLlxuICAgICAgICB0aGlzLmV4cGxpY2l0VGlja0V2ZW50cyA9IFtdO1xuICAgICAgICB0aGlzLmJ1aWxkRGF0YShvcHRpb25zKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE1lcmdlcyBhbm90aGVyIHRyYWNrJ3MgZXZlbnRzIHdpdGggdGhpcyB0cmFjay5cbiAgICAgKiBAcGFyYW0ge1RyYWNrfSB0cmFja1xuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuICAgIFRyYWNrLnByb3RvdHlwZS5tZXJnZVRyYWNrID0gZnVuY3Rpb24gKHRyYWNrKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIEZpcnN0IGJ1aWxkIHRoaXMgdHJhY2sgdG8gcG9wdWxhdGUgZWFjaCBldmVudCdzIHRpY2sgcHJvcGVydHlcbiAgICAgICAgdGhpcy5idWlsZERhdGEoKTtcbiAgICAgICAgLy8gVGhlbiBidWlsZCB0cmFjayB0byBiZSBtZXJnZWQgc28gdGhhdCB0aWNrIHByb3BlcnR5IGlzIHBvcHVsYXRlZCBvbiBhbGwgZXZlbnRzICYgbWVyZ2UgZWFjaCBldmVudC5cbiAgICAgICAgdHJhY2suYnVpbGREYXRhKCkuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBfdGhpcy5tZXJnZVNpbmdsZUV2ZW50KGV2ZW50KTsgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTWVyZ2VzIGEgc2luZ2xlIGV2ZW50IGludG8gdGhpcyB0cmFjaydzIGxpc3Qgb2YgZXZlbnRzIGJhc2VkIG9uIGV2ZW50LnRpY2sgcHJvcGVydHkuXG4gICAgICogQHBhcmFtIHtBYnN0cmFjdEV2ZW50fSAtIGV2ZW50XG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG4gICAgVHJhY2sucHJvdG90eXBlLm1lcmdlU2luZ2xlRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgLy8gVGhlcmUgYXJlIG5vIGV2ZW50cyB5ZXQsIHNvIGp1c3QgYWRkIGl0IGluLlxuICAgICAgICBpZiAoIXRoaXMuZXZlbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudChldmVudCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICAvLyBGaW5kIGluZGV4IG9mIGV4aXN0aW5nIGV2ZW50IHdlIG5lZWQgdG8gZm9sbG93IHdpdGhcbiAgICAgICAgdmFyIGxhc3RFdmVudEluZGV4O1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ldmVudHNbaV0udGljayA+IGV2ZW50LnRpY2spXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBsYXN0RXZlbnRJbmRleCA9IGk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxhc3RFdmVudEluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgZXZlbnQgbmVlZHMgdG8gYmUgaW5zZXJ0ZWQgYmVmb3JlIGFsbCBleGlzdGluZyBldmVudHMuXG4gICAgICAgICAgICBldmVudC5kZWx0YSA9IGV2ZW50LnRpY2s7XG4gICAgICAgICAgICB0aGlzLmV2ZW50cy5zcGxpY2UoMCwgMCwgZXZlbnQpO1xuICAgICAgICAgICAgLy8gQWRqdXN0IGRlbHRhIG9mIHRoZSBldmVudCB0aGF0IG5vdyBmb2xsb3dzIHRoZSBpbnNlcnRlZCBvbmUuXG4gICAgICAgICAgICBpZiAodGhpcy5ldmVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRzWzFdLmRlbHRhID0gdGhpcy5ldmVudHNbMV0udGljayAtIGV2ZW50LnRpY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgc3BsaWNlZEV2ZW50SW5kZXggPSBsYXN0RXZlbnRJbmRleCArIDE7XG4gICAgICAgICAgICAvLyBOZWVkIHRvIGFkanVzdCB0aGUgZGVsdGEgb2YgdGhpcyBldmVudCB0byBlbnN1cmUgaXQgZmFsbHMgb24gdGhlIGNvcnJlY3QgdGljay5cbiAgICAgICAgICAgIGV2ZW50LmRlbHRhID0gZXZlbnQudGljayAtIHRoaXMuZXZlbnRzW2xhc3RFdmVudEluZGV4XS50aWNrO1xuICAgICAgICAgICAgLy8gU3BsaWNlIHRoaXMgZXZlbnQgYXQgbGFzdEV2ZW50SW5kZXggKyAxXG4gICAgICAgICAgICB0aGlzLmV2ZW50cy5zcGxpY2Uoc3BsaWNlZEV2ZW50SW5kZXgsIDAsIGV2ZW50KTtcbiAgICAgICAgICAgIC8vIE5vdyBhZGp1c3QgZGVsdGEgb2YgYWxsIGZvbGxvd2luZyBldmVudHNcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBzcGxpY2VkRXZlbnRJbmRleCArIDE7IGkgPCB0aGlzLmV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vIFNpbmNlIGVhY2ggZXhpc3RpbmcgZXZlbnQgc2hvdWxkIGhhdmUgYSB0aWNrIHZhbHVlIGF0IHRoaXMgcG9pbnQgd2UganVzdCBuZWVkIHRvXG4gICAgICAgICAgICAgICAgLy8gYWRqdXN0IGRlbHRhIHRvIHRoYXQgdGhlIGV2ZW50IHN0aWxsIGZhbGxzIG9uIHRoZSBjb3JyZWN0IHRpY2suXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudHNbaV0uZGVsdGEgPSB0aGlzLmV2ZW50c1tpXS50aWNrIC0gdGhpcy5ldmVudHNbaSAtIDFdLnRpY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCBldmVudHMgbWF0Y2hpbmcgc3BlY2lmaWVkIHR5cGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSAtIEV2ZW50IHR5cGVcbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cbiAgICBUcmFjay5wcm90b3R5cGUucmVtb3ZlRXZlbnRzQnlOYW1lID0gZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgICAgICB0aGlzLmV2ZW50cyA9IHRoaXMuZXZlbnRzLmZpbHRlcihmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIGV2ZW50Lm5hbWUgIT09IGV2ZW50TmFtZTsgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyB0ZW1wbyBvZiB0aGUgTUlESSBmaWxlLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBicG0gLSBUZW1wbyBpbiBiZWF0cyBwZXIgbWludXRlLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aWNrIC0gU3RhcnQgdGljay5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cbiAgICBUcmFjay5wcm90b3R5cGUuc2V0VGVtcG8gPSBmdW5jdGlvbiAoYnBtLCB0aWNrKSB7XG4gICAgICAgIGlmICh0aWNrID09PSB2b2lkIDApIHsgdGljayA9IDA7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IFRlbXBvRXZlbnQoeyBicG06IGJwbSwgdGljazogdGljayB9KSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRpbWUgc2lnbmF0dXJlLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBudW1lcmF0b3IgLSBUb3AgbnVtYmVyIG9mIHRoZSB0aW1lIHNpZ25hdHVyZS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGVub21pbmF0b3IgLSBCb3R0b20gbnVtYmVyIG9mIHRoZSB0aW1lIHNpZ25hdHVyZS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWlkaWNsb2Nrc3BlcnRpY2sgLSBEZWZhdWx0cyB0byAyNC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbm90ZXNwZXJtaWRpY2xvY2sgLSBEZWZhdWx0cyB0byA4LlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuICAgIFRyYWNrLnByb3RvdHlwZS5zZXRUaW1lU2lnbmF0dXJlID0gZnVuY3Rpb24gKG51bWVyYXRvciwgZGVub21pbmF0b3IsIG1pZGljbG9ja3NwZXJ0aWNrLCBub3Rlc3Blcm1pZGljbG9jaykge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgVGltZVNpZ25hdHVyZUV2ZW50KG51bWVyYXRvciwgZGVub21pbmF0b3IsIG1pZGljbG9ja3NwZXJ0aWNrLCBub3Rlc3Blcm1pZGljbG9jaykpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyBrZXkgc2lnbmF0dXJlLlxuICAgICAqIEBwYXJhbSB7Kn0gc2YgLVxuICAgICAqIEBwYXJhbSB7Kn0gbWkgLVxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuICAgIFRyYWNrLnByb3RvdHlwZS5zZXRLZXlTaWduYXR1cmUgPSBmdW5jdGlvbiAoc2YsIG1pKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBLZXlTaWduYXR1cmVFdmVudChzZiwgbWkpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFkZHMgdGV4dCB0byBNSURJIGZpbGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUZXh0IHRvIGFkZC5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cbiAgICBUcmFjay5wcm90b3R5cGUuYWRkVGV4dCA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBUZXh0RXZlbnQoeyB0ZXh0OiB0ZXh0IH0pKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFkZHMgY29weXJpZ2h0IHRvIE1JREkgZmlsZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRleHQgb2YgY29weXJpZ2h0IGxpbmUuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG4gICAgVHJhY2sucHJvdG90eXBlLmFkZENvcHlyaWdodCA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBDb3B5cmlnaHRFdmVudCh7IHRleHQ6IHRleHQgfSkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQWRkcyBTZXF1ZW5jZS9UcmFjayBOYW1lLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCBvZiB0cmFjayBuYW1lLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuICAgIFRyYWNrLnByb3RvdHlwZS5hZGRUcmFja05hbWUgPSBmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgVHJhY2tOYW1lRXZlbnQoeyB0ZXh0OiB0ZXh0IH0pKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgaW5zdHJ1bWVudCBuYW1lIG9mIHRyYWNrLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gTmFtZSBvZiBpbnN0cnVtZW50LlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuICAgIFRyYWNrLnByb3RvdHlwZS5hZGRJbnN0cnVtZW50TmFtZSA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBJbnN0cnVtZW50TmFtZUV2ZW50KHsgdGV4dDogdGV4dCB9KSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBZGRzIG1hcmtlciB0byBNSURJIGZpbGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBNYXJrZXIgdGV4dC5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cbiAgICBUcmFjay5wcm90b3R5cGUuYWRkTWFya2VyID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IE1hcmtlckV2ZW50KHsgdGV4dDogdGV4dCB9KSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBZGRzIGN1ZSBwb2ludCB0byBNSURJIGZpbGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUZXh0IG9mIGN1ZSBwb2ludC5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cbiAgICBUcmFjay5wcm90b3R5cGUuYWRkQ3VlUG9pbnQgPSBmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgQ3VlUG9pbnRFdmVudCh7IHRleHQ6IHRleHQgfSkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQWRkcyBseXJpYyB0byBNSURJIGZpbGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBMeXJpYyB0ZXh0IHRvIGFkZC5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cbiAgICBUcmFjay5wcm90b3R5cGUuYWRkTHlyaWMgPSBmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgTHlyaWNFdmVudCh7IHRleHQ6IHRleHQgfSkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hhbm5lbCBtb2RlIG1lc3NhZ2VzXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG4gICAgVHJhY2sucHJvdG90eXBlLnBvbHlNb2RlT24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBldmVudCA9IG5ldyBOb3RlT25FdmVudCh7IGRhdGE6IFsweDAwLCAweEIwLCAweDdFLCAweDAwXSB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQoZXZlbnQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyBhIHBpdGNoIGJlbmQuXG4gICAgICogQHBhcmFtIHtmbG9hdH0gYmVuZCAtIEJlbmQgdmFsdWUgcmFuZ2luZyBbLTEsMV0sIHplcm8gbWVhbmluZyBubyBiZW5kLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuICAgIFRyYWNrLnByb3RvdHlwZS5zZXRQaXRjaEJlbmQgPSBmdW5jdGlvbiAoYmVuZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgUGl0Y2hCZW5kRXZlbnQoeyBiZW5kOiBiZW5kIH0pKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFkZHMgYSBjb250cm9sbGVyIGNoYW5nZSBldmVudFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIgLSBDb250cm9sIG51bWJlci5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSBDb250cm9sIHZhbHVlLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjaGFubmVsIC0gQ2hhbm5lbCB0byBzZW5kIGNvbnRyb2xsZXIgY2hhbmdlIGV2ZW50IG9uICgxLWJhc2VkKS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGVsdGEgLSBUcmFjayB0aWNrIG9mZnNldCBmb3IgY2MgZXZlbnQuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG4gICAgVHJhY2sucHJvdG90eXBlLmNvbnRyb2xsZXJDaGFuZ2UgPSBmdW5jdGlvbiAobnVtYmVyLCB2YWx1ZSwgY2hhbm5lbCwgZGVsdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IENvbnRyb2xsZXJDaGFuZ2VFdmVudCh7IGNvbnRyb2xsZXJOdW1iZXI6IG51bWJlciwgY29udHJvbGxlclZhbHVlOiB2YWx1ZSwgY2hhbm5lbDogY2hhbm5lbCwgZGVsdGE6IGRlbHRhIH0pKTtcbiAgICB9O1xuICAgIHJldHVybiBUcmFjaztcbn0oKSk7XG5cbnZhciBWZXhGbG93ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFZleEZsb3coKSB7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN1cHBvcnQgZm9yIGNvbnZlcnRpbmcgVmV4RmxvdyB2b2ljZSBpbnRvIE1pZGlXcml0ZXJKUyB0cmFja1xuICAgICAqIEByZXR1cm4gTWlkaVdyaXRlci5UcmFjayBvYmplY3RcbiAgICAgKi9cbiAgICBWZXhGbG93LnByb3RvdHlwZS50cmFja0Zyb21Wb2ljZSA9IGZ1bmN0aW9uICh2b2ljZSwgb3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7IGFkZFJlbmRlcmVkQWNjaWRlbnRhbHM6IGZhbHNlIH07IH1cbiAgICAgICAgdmFyIHRyYWNrID0gbmV3IFRyYWNrO1xuICAgICAgICB2YXIgd2FpdCA9IFtdO1xuICAgICAgICB2b2ljZS50aWNrYWJsZXMuZm9yRWFjaChmdW5jdGlvbiAodGlja2FibGUpIHtcbiAgICAgICAgICAgIGlmICh0aWNrYWJsZS5ub3RlVHlwZSA9PT0gJ24nKSB7XG4gICAgICAgICAgICAgICAgdHJhY2suYWRkRXZlbnQobmV3IE5vdGVFdmVudCh7XG4gICAgICAgICAgICAgICAgICAgIHBpdGNoOiB0aWNrYWJsZS5rZXlzLm1hcChmdW5jdGlvbiAocGl0Y2gsIGluZGV4KSB7IHJldHVybiBfdGhpcy5jb252ZXJ0UGl0Y2gocGl0Y2gsIGluZGV4LCB0aWNrYWJsZSwgb3B0aW9ucy5hZGRSZW5kZXJlZEFjY2lkZW50YWxzKTsgfSksXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBfdGhpcy5jb252ZXJ0RHVyYXRpb24odGlja2FibGUpLFxuICAgICAgICAgICAgICAgICAgICB3YWl0OiB3YWl0XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIC8vIHJlc2V0IHdhaXRcbiAgICAgICAgICAgICAgICB3YWl0ID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aWNrYWJsZS5ub3RlVHlwZSA9PT0gJ3InKSB7XG4gICAgICAgICAgICAgICAgLy8gbW92ZSBvbiB0byB0aGUgbmV4dCB0aWNrYWJsZSBhbmQgYWRkIHRoaXMgdG8gdGhlIHN0YWNrXG4gICAgICAgICAgICAgICAgLy8gb2YgdGhlIGB3YWl0YCBwcm9wZXJ0eSBmb3IgdGhlIG5leHQgbm90ZSBldmVudFxuICAgICAgICAgICAgICAgIHdhaXQucHVzaChfdGhpcy5jb252ZXJ0RHVyYXRpb24odGlja2FibGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFRoZXJlIG1heSBiZSBvdXRzdGFuZGluZyByZXN0cyBhdCB0aGUgZW5kIG9mIHRoZSB0cmFjayxcbiAgICAgICAgLy8gcGFkIHdpdGggYSBnaG9zdCBub3RlICh6ZXJvIGR1cmF0aW9uIGFuZCB2ZWxvY2l0eSksIGp1c3QgdG8gY2FwdHVyZSB0aGUgd2FpdC5cbiAgICAgICAgaWYgKHdhaXQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdHJhY2suYWRkRXZlbnQobmV3IE5vdGVFdmVudCh7IHBpdGNoOiAnW2M0XScsIGR1cmF0aW9uOiAnMCcsIHdhaXQ6IHdhaXQsIHZlbG9jaXR5OiAnMCcgfSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cmFjaztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIFZleEZsb3cgcGl0Y2ggc3ludGF4IHRvIE1pZGlXcml0ZXJKUyBzeW50YXhcbiAgICAgKiBAcGFyYW0gcGl0Y2ggc3RyaW5nXG4gICAgICogQHBhcmFtIGluZGV4IHBpdGNoIGluZGV4XG4gICAgICogQHBhcmFtIG5vdGUgc3RydWN0IGZyb20gVmV4Zmxvd1xuICAgICAqIEBwYXJhbSBhZGRSZW5kZXJlZEFjY2lkZW50YWxzIGFkZHMgVmV4ZmxvdyByZW5kZXJlZCBhY2NpZGVudGFsc1xuICAgICAqL1xuICAgIFZleEZsb3cucHJvdG90eXBlLmNvbnZlcnRQaXRjaCA9IGZ1bmN0aW9uIChwaXRjaCwgaW5kZXgsIG5vdGUsIGFkZFJlbmRlcmVkQWNjaWRlbnRhbHMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoYWRkUmVuZGVyZWRBY2NpZGVudGFscyA9PT0gdm9pZCAwKSB7IGFkZFJlbmRlcmVkQWNjaWRlbnRhbHMgPSBmYWxzZTsgfVxuICAgICAgICAvLyBTcGxpdHMgbm90ZSBuYW1lIGZyb20gb2N0YXZlXG4gICAgICAgIHZhciBwaXRjaFBhcnRzID0gcGl0Y2guc3BsaXQoJy8nKTtcbiAgICAgICAgLy8gUmV0cmlldmVzIGFjY2lkZW50YWxzIGZyb20gcGl0Y2hcbiAgICAgICAgLy8gUmVtb3ZlcyBuYXR1cmFsIGFjY2lkZW50YWxzIHNpbmNlIHRoZXkgYXJlIG5vdCBhY2NlcHRlZCBpbiBUb25hbCBNaWRpXG4gICAgICAgIHZhciBhY2NpZGVudGFscyA9IHBpdGNoUGFydHNbMF0uc3Vic3RyaW5nKDEpLnJlcGxhY2UoJ24nLCAnJyk7XG4gICAgICAgIGlmIChhZGRSZW5kZXJlZEFjY2lkZW50YWxzKSB7XG4gICAgICAgICAgICAoX2EgPSBub3RlLmdldEFjY2lkZW50YWxzKCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKGZ1bmN0aW9uIChhY2NpZGVudGFsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFjY2lkZW50YWwuaW5kZXggPT09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhY2NpZGVudGFsLnR5cGUgPT09ICduJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWNjaWRlbnRhbHMgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY2lkZW50YWxzICs9IGFjY2lkZW50YWwudHlwZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwaXRjaFBhcnRzWzBdWzBdICsgYWNjaWRlbnRhbHMgKyBwaXRjaFBhcnRzWzFdO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgVmV4RmxvdyBkdXJhdGlvbiBzeW50YXggdG8gTWlkaVdyaXRlckpTIHN5bnRheFxuICAgICAqIEBwYXJhbSBub3RlIHN0cnVjdCBmcm9tIFZleEZsb3dcbiAgICAgKi9cbiAgICBWZXhGbG93LnByb3RvdHlwZS5jb252ZXJ0RHVyYXRpb24gPSBmdW5jdGlvbiAobm90ZSkge1xuICAgICAgICB2YXIgZG90cyA9IHRoaXMuY291bnREb3RzKG5vdGUpO1xuICAgICAgICByZXR1cm4gJ2QnLnJlcGVhdChkb3RzKSArIHRoaXMuY29udmVydEJhc2VEdXJhdGlvbihub3RlLmR1cmF0aW9uKSArIChub3RlLnR1cGxldCA/ICd0JyArIG5vdGUudHVwbGV0Lm51bV9ub3RlcyA6ICcnKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENvdW50cyB0aGUgbnVtYmVyIG9mIGRvdHMgb24gYSBWZXhGbG93IG5vdGUgYnkgY2hlY2tpbmcgbW9kaWZpZXJzXG4gICAgICogQHBhcmFtIG5vdGUgc3RydWN0IGZyb20gVmV4Rmxvd1xuICAgICAqIEByZXR1cm5zIG51bWJlciBvZiBkb3RzXG4gICAgICovXG4gICAgVmV4Rmxvdy5wcm90b3R5cGUuY291bnREb3RzID0gZnVuY3Rpb24gKG5vdGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBub3RlLmdldE1vZGlmaWVyc0J5VHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIG5vdGUuZ2V0TW9kaWZpZXJzQnlUeXBlKCdEb3QnKS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobm90ZS5tb2RpZmllcnMpKSB7XG4gICAgICAgICAgICByZXR1cm4gbm90ZS5tb2RpZmllcnMuZmlsdGVyKGZ1bmN0aW9uIChtKSB7IHZhciBfYSwgX2I7IHJldHVybiAoKF9hID0gbS5nZXRDYXRlZ29yeSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwobSkpID09PSAnZG90cycgfHwgKChfYiA9IG0uYXR0cnMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi50eXBlKSA9PT0gJ0RvdCc7IH0pLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm90ZS5kb3RzIHx8IDA7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBWZXhGbG93IGJhc2UgZHVyYXRpb24gc3ludGF4IHRvIE1pZGlXcml0ZXJKUyBzeW50YXhcbiAgICAgKiBAcGFyYW0gZHVyYXRpb24gVmV4ZmxvdyBkdXJhdGlvblxuICAgICAqIEByZXR1cm5zIE1pZGlXcml0ZXJKUyBkdXJhdGlvblxuICAgICAqL1xuICAgIFZleEZsb3cucHJvdG90eXBlLmNvbnZlcnRCYXNlRHVyYXRpb24gPSBmdW5jdGlvbiAoZHVyYXRpb24pIHtcbiAgICAgICAgc3dpdGNoIChkdXJhdGlvbikge1xuICAgICAgICAgICAgY2FzZSAndyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICcxJztcbiAgICAgICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICAgICAgICAgIHJldHVybiAnMic7XG4gICAgICAgICAgICBjYXNlICdxJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJzQnO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gZHVyYXRpb247XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBWZXhGbG93O1xufSgpKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG5mdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tLCBwYWNrKSB7XHJcbiAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcclxuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcclxuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xyXG59XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgaGVhZGVyIGNodW5rIHNlY3Rpb24gb2YgYSBNSURJIGZpbGUuXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyT2ZUcmFja3MgLSBOdW1iZXIgb2YgdHJhY2tzXG4gKiBAcmV0dXJuIHtIZWFkZXJ9XG4gKi9cbnZhciBIZWFkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSGVhZGVyKG51bWJlck9mVHJhY2tzLCB0aWNrc1BlckJlYXQpIHtcbiAgICAgICAgaWYgKHRpY2tzUGVyQmVhdCA9PT0gdm9pZCAwKSB7IHRpY2tzUGVyQmVhdCA9IDEyODsgfVxuICAgICAgICB0aGlzLnR5cGUgPSBDb25zdGFudHMuSEVBREVSX0NIVU5LX1RZUEU7XG4gICAgICAgIHZhciB0cmFja1R5cGUgPSBudW1iZXJPZlRyYWNrcyA+IDEgPyBDb25zdGFudHMuSEVBREVSX0NIVU5LX0ZPUk1BVDEgOiBDb25zdGFudHMuSEVBREVSX0NIVU5LX0ZPUk1BVDA7XG4gICAgICAgIHRoaXMuZGF0YSA9IHRyYWNrVHlwZS5jb25jYXQoVXRpbHMubnVtYmVyVG9CeXRlcyhudW1iZXJPZlRyYWNrcywgMiksIC8vIHR3byBieXRlcyBsb25nLFxuICAgICAgICBVdGlscy5udW1iZXJUb0J5dGVzKHRpY2tzUGVyQmVhdCwgMikpO1xuICAgICAgICB0aGlzLnNpemUgPSBbMCwgMCwgMCwgdGhpcy5kYXRhLmxlbmd0aF07XG4gICAgfVxuICAgIHJldHVybiBIZWFkZXI7XG59KCkpO1xuXG4vKipcbiAqIE9iamVjdCB0aGF0IHB1dHMgdG9nZXRoZXIgdHJhY2tzIGFuZCBwcm92aWRlcyBtZXRob2RzIGZvciBmaWxlIG91dHB1dC5cbiAqIEBwYXJhbSB7YXJyYXl8VHJhY2t9IHRyYWNrcyAtIEEgc2luZ2xlIHtUcmFja30gb2JqZWN0IG9yIGFuIGFycmF5IG9mIHtUcmFja30gb2JqZWN0cy5cbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0ge21pZGRsZUM6ICdDNCcsIHRpY2tzUGVyQmVhdDogMTI4fVxuICogQHJldHVybiB7V3JpdGVyfVxuICovXG52YXIgV3JpdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFdyaXRlcih0cmFja3MsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgLy8gRW5zdXJlIHRyYWNrcyBpcyBhbiBhcnJheVxuICAgICAgICB0aGlzLnRyYWNrcyA9IFV0aWxzLnRvQXJyYXkodHJhY2tzKTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQnVpbGRzIGFycmF5IG9mIGRhdGEgZnJvbSBjaHVua3MuXG4gICAgICogQHJldHVybiB7YXJyYXl9XG4gICAgICovXG4gICAgV3JpdGVyLnByb3RvdHlwZS5idWlsZERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBkYXRhID0gW107XG4gICAgICAgIHZhciB0aWNrc1BlckJlYXQgPSB0aGlzLm9wdGlvbnNbJ3RpY2tzUGVyQmVhdCddIHx8IDEyODtcbiAgICAgICAgZGF0YS5wdXNoKG5ldyBIZWFkZXIodGhpcy50cmFja3MubGVuZ3RoLCB0aWNrc1BlckJlYXQpKTtcbiAgICAgICAgLy8gRm9yIGVhY2ggdHJhY2sgYWRkIGZpbmFsIGVuZCBvZiB0cmFjayBldmVudCBhbmQgYnVpbGQgZGF0YVxuICAgICAgICB0aGlzLnRyYWNrcy5mb3JFYWNoKGZ1bmN0aW9uICh0cmFjaykge1xuICAgICAgICAgICAgZGF0YS5wdXNoKHRyYWNrLmJ1aWxkRGF0YShfdGhpcy5vcHRpb25zKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEJ1aWxkcyB0aGUgZmlsZSBpbnRvIGEgVWludDhBcnJheVxuICAgICAqIEByZXR1cm4ge1VpbnQ4QXJyYXl9XG4gICAgICovXG4gICAgV3JpdGVyLnByb3RvdHlwZS5idWlsZEZpbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBidWlsZCA9IFtdO1xuICAgICAgICAvLyBEYXRhIGNvbnNpc3RzIG9mIGNodW5rcyB3aGljaCBjb25zaXN0cyBvZiBkYXRhXG4gICAgICAgIHRoaXMuYnVpbGREYXRhKCkuZm9yRWFjaChmdW5jdGlvbiAoZCkgeyByZXR1cm4gYnVpbGQucHVzaC5hcHBseShidWlsZCwgX19zcHJlYWRBcnJheShfX3NwcmVhZEFycmF5KF9fc3ByZWFkQXJyYXkoW10sIGQudHlwZSwgZmFsc2UpLCBkLnNpemUsIGZhbHNlKSwgZC5kYXRhLCBmYWxzZSkpOyB9KTtcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGJ1aWxkKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENvbnZlcnQgZmlsZSBidWZmZXIgdG8gYSBiYXNlNjQgc3RyaW5nLiAgRGlmZmVyZW50IG1ldGhvZHMgZGVwZW5kaW5nIG9uIGlmIGJyb3dzZXIgb3Igbm9kZS5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgV3JpdGVyLnByb3RvdHlwZS5iYXNlNjQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGJ5dGVzID0gdGhpcy5idWlsZEZpbGUoKTtcbiAgICAgICAgICAgIHZhciBsZW4gPSBieXRlcy5ieXRlTGVuZ3RoO1xuICAgICAgICAgICAgdmFyIGNoYXJzID0gbmV3IEFycmF5KGxlbik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY2hhcnNbaV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBidG9hKGNoYXJzLmpvaW4oJycpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQnVmZmVyLmZyb20odGhpcy5idWlsZEZpbGUoKSkudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBkYXRhIFVSSS5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgV3JpdGVyLnByb3RvdHlwZS5kYXRhVXJpID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJ2RhdGE6YXVkaW8vbWlkaTtiYXNlNjQsJyArIHRoaXMuYmFzZTY0KCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXQgb3B0aW9uIG9uIGluc3RhbnRpYXRlZCBXcml0ZXIuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgICAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICAgICAqIEByZXR1cm4ge1dyaXRlcn1cbiAgICAgKi9cbiAgICBXcml0ZXIucHJvdG90eXBlLnNldE9wdGlvbiA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIHRoaXMub3B0aW9uc1trZXldID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogT3V0cHV0IHRvIHN0ZG91dFxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBXcml0ZXIucHJvdG90eXBlLnN0ZG91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHByb2Nlc3Muc3Rkb3V0LndyaXRlKEJ1ZmZlci5mcm9tKHRoaXMuYnVpbGRGaWxlKCkpKTtcbiAgICB9O1xuICAgIHJldHVybiBXcml0ZXI7XG59KCkpO1xuXG52YXIgbWFpbiA9IHtcbiAgICBDb25zdGFudHM6IENvbnN0YW50cyxcbiAgICBDb250cm9sbGVyQ2hhbmdlRXZlbnQ6IENvbnRyb2xsZXJDaGFuZ2VFdmVudCxcbiAgICBDb3B5cmlnaHRFdmVudDogQ29weXJpZ2h0RXZlbnQsXG4gICAgQ3VlUG9pbnRFdmVudDogQ3VlUG9pbnRFdmVudCxcbiAgICBFbmRUcmFja0V2ZW50OiBFbmRUcmFja0V2ZW50LFxuICAgIEluc3RydW1lbnROYW1lRXZlbnQ6IEluc3RydW1lbnROYW1lRXZlbnQsXG4gICAgS2V5U2lnbmF0dXJlRXZlbnQ6IEtleVNpZ25hdHVyZUV2ZW50LFxuICAgIEx5cmljRXZlbnQ6IEx5cmljRXZlbnQsXG4gICAgTWFya2VyRXZlbnQ6IE1hcmtlckV2ZW50LFxuICAgIE5vdGVPbkV2ZW50OiBOb3RlT25FdmVudCxcbiAgICBOb3RlT2ZmRXZlbnQ6IE5vdGVPZmZFdmVudCxcbiAgICBOb3RlRXZlbnQ6IE5vdGVFdmVudCxcbiAgICBQaXRjaEJlbmRFdmVudDogUGl0Y2hCZW5kRXZlbnQsXG4gICAgUHJvZ3JhbUNoYW5nZUV2ZW50OiBQcm9ncmFtQ2hhbmdlRXZlbnQsXG4gICAgVGVtcG9FdmVudDogVGVtcG9FdmVudCxcbiAgICBUZXh0RXZlbnQ6IFRleHRFdmVudCxcbiAgICBUaW1lU2lnbmF0dXJlRXZlbnQ6IFRpbWVTaWduYXR1cmVFdmVudCxcbiAgICBUcmFjazogVHJhY2ssXG4gICAgVHJhY2tOYW1lRXZlbnQ6IFRyYWNrTmFtZUV2ZW50LFxuICAgIFV0aWxzOiBVdGlscyxcbiAgICBWZXhGbG93OiBWZXhGbG93LFxuICAgIFdyaXRlcjogV3JpdGVyXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1haW47XG4iLCAidmFyIE1pZGkgPSB7fTtcblxuKGZ1bmN0aW9uKGV4cG9ydGVkKSB7XG5cblx0dmFyIERFRkFVTFRfVk9MVU1FICAgPSBleHBvcnRlZC5ERUZBVUxUX1ZPTFVNRSAgID0gOTA7XG5cdHZhciBERUZBVUxUX0RVUkFUSU9OID0gZXhwb3J0ZWQuREVGQVVMVF9EVVJBVElPTiA9IDEyODtcblx0dmFyIERFRkFVTFRfQ0hBTk5FTCAgPSBleHBvcnRlZC5ERUZBVUxUX0NIQU5ORUwgID0gMDtcblxuXHQvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0ICogVXRpbGl0eSBmdW5jdGlvbnNcblx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG5cdHZhciBVdGlsID0ge1xuXG5cdFx0bWlkaV9sZXR0ZXJfcGl0Y2hlczogeyBhOjIxLCBiOjIzLCBjOjEyLCBkOjE0LCBlOjE2LCBmOjE3LCBnOjE5IH0sXG5cblx0XHQvKipcblx0XHQgKiBDb252ZXJ0IGEgc3ltYm9saWMgbm90ZSBuYW1lIChlLmcuIFwiYzRcIikgdG8gYSBudW1lcmljIE1JREkgcGl0Y2ggKGUuZy5cblx0XHQgKiA2MCwgbWlkZGxlIEMpLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IG4gLSBUaGUgc3ltYm9saWMgbm90ZSBuYW1lIHRvIHBhcnNlLlxuXHRcdCAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBNSURJIHBpdGNoIHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIHN5bWJvbGljIG5vdGVcblx0XHQgKiBuYW1lLlxuXHRcdCAqL1xuXHRcdG1pZGlQaXRjaEZyb21Ob3RlOiBmdW5jdGlvbihuKSB7XG5cdFx0XHR2YXIgbWF0Y2hlcyA9IC8oW2EtZ10pKCMrfGIrKT8oWzAtOV0rKSQvaS5leGVjKG4pO1xuXHRcdFx0dmFyIG5vdGUgPSBtYXRjaGVzWzFdLnRvTG93ZXJDYXNlKCksIGFjY2lkZW50YWwgPSBtYXRjaGVzWzJdIHx8ICcnLCBvY3RhdmUgPSBwYXJzZUludChtYXRjaGVzWzNdLCAxMCk7XG5cdFx0XHRyZXR1cm4gKDEyICogb2N0YXZlKSArIFV0aWwubWlkaV9sZXR0ZXJfcGl0Y2hlc1tub3RlXSArIChhY2NpZGVudGFsLnN1YnN0cigwLDEpPT0nIyc/MTotMSkgKiBhY2NpZGVudGFsLmxlbmd0aDtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogRW5zdXJlIHRoYXQgdGhlIGdpdmVuIGFyZ3VtZW50IGlzIGNvbnZlcnRlZCB0byBhIE1JREkgcGl0Y2guIE5vdGUgdGhhdFxuXHRcdCAqIGl0IG1heSBhbHJlYWR5IGJlIG9uZSAoaW5jbHVkaW5nIGEgcHVyZWx5IG51bWVyaWMgc3RyaW5nKS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gcCAtIFRoZSBwaXRjaCB0byBjb252ZXJ0LlxuXHRcdCAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSByZXN1bHRpbmcgbnVtZXJpYyBNSURJIHBpdGNoLlxuXHRcdCAqL1xuXHRcdGVuc3VyZU1pZGlQaXRjaDogZnVuY3Rpb24ocCkge1xuXHRcdFx0aWYgKHR5cGVvZiBwID09ICdudW1iZXInIHx8ICEvW14wLTldLy50ZXN0KHApKSB7XG5cdFx0XHRcdC8vIG51bWVyaWMgcGl0Y2hcblx0XHRcdFx0cmV0dXJuIHBhcnNlSW50KHAsIDEwKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIGFzc3VtZSBpdCdzIGEgbm90ZSBuYW1lXG5cdFx0XHRcdHJldHVybiBVdGlsLm1pZGlQaXRjaEZyb21Ob3RlKHApO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRtaWRpX3BpdGNoZXNfbGV0dGVyOiB7ICcxMic6J2MnLCAnMTMnOidjIycsICcxNCc6J2QnLCAnMTUnOidkIycsICcxNic6J2UnLCAnMTcnOidmJywgJzE4JzonZiMnLCAnMTknOidnJywgJzIwJzonZyMnLCAnMjEnOidhJywgJzIyJzonYSMnLCAnMjMnOidiJyB9LFxuXHRcdG1pZGlfZmxhdHRlbmVkX25vdGVzOiB7ICdhIyc6J2JiJywgJ2MjJzonZGInLCAnZCMnOidlYicsICdmIyc6J2diJywgJ2cjJzonYWInIH0sXG5cblx0XHQvKipcblx0XHQgKiBDb252ZXJ0IGEgbnVtZXJpYyBNSURJIHBpdGNoIHZhbHVlIChlLmcuIDYwKSB0byBhIHN5bWJvbGljIG5vdGUgbmFtZVxuXHRcdCAqIChlLmcuIFwiYzRcIikuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gbiAtIFRoZSBudW1lcmljIE1JREkgcGl0Y2ggdmFsdWUgdG8gY29udmVydC5cblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXR1cm5GbGF0dGVuZWQ9ZmFsc2VdIC0gV2hldGhlciB0byBwcmVmZXIgZmxhdHRlbmVkXG5cdFx0ICogbm90ZXMgdG8gc2hhcnBlbmVkIG9uZXMuIE9wdGlvbmFsLCBkZWZhdWx0IGZhbHNlLlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSByZXN1bHRpbmcgc3ltYm9saWMgbm90ZSBuYW1lLlxuXHRcdCAqL1xuXHRcdG5vdGVGcm9tTWlkaVBpdGNoOiBmdW5jdGlvbihuLCByZXR1cm5GbGF0dGVuZWQpIHtcblx0XHRcdHZhciBvY3RhdmUgPSAwLCBub3RlTnVtID0gbiwgbm90ZU5hbWUsIHJldHVybkZsYXR0ZW5lZCA9IHJldHVybkZsYXR0ZW5lZCB8fCBmYWxzZTtcblx0XHRcdGlmIChuID4gMjMpIHtcblx0XHRcdFx0Ly8gbm90ZU51bSBpcyBvbiBvY3RhdmUgMSBvciBtb3JlXG5cdFx0XHRcdG9jdGF2ZSA9IE1hdGguZmxvb3Iobi8xMikgLSAxO1xuXHRcdFx0XHQvLyBzdWJ0cmFjdCBudW1iZXIgb2Ygb2N0YXZlcyBmcm9tIG5vdGVOdW1cblx0XHRcdFx0bm90ZU51bSA9IG4gLSBvY3RhdmUgKiAxMjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gZ2V0IG5vdGUgbmFtZSAoYyMsIGQsIGYjIGV0Yylcblx0XHRcdG5vdGVOYW1lID0gVXRpbC5taWRpX3BpdGNoZXNfbGV0dGVyW25vdGVOdW1dO1xuXHRcdFx0Ly8gVXNlIGZsYXR0ZW5lZCBub3RlcyBpZiByZXF1ZXN0ZWQgKGUuZy4gZiMgc2hvdWxkIGJlIG91dHB1dCBhcyBnYilcblx0XHRcdGlmIChyZXR1cm5GbGF0dGVuZWQgJiYgbm90ZU5hbWUuaW5kZXhPZignIycpID4gMCkge1xuXHRcdFx0XHRub3RlTmFtZSA9IFV0aWwubWlkaV9mbGF0dGVuZWRfbm90ZXNbbm90ZU5hbWVdO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG5vdGVOYW1lICsgb2N0YXZlO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBDb252ZXJ0IGJlYXRzIHBlciBtaW51dGUgKEJQTSkgdG8gbWljcm9zZWNvbmRzIHBlciBxdWFydGVyIG5vdGUgKE1QUU4pLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IGJwbSAtIEEgbnVtYmVyIGluIGJlYXRzIHBlciBtaW51dGUuXG5cdFx0ICogQHJldHVybnMge251bWJlcn0gVGhlIG51bWJlciBvZiBtaWNyb3NlY29uZHMgcGVyIHF1YXJ0ZXIgbm90ZS5cblx0XHQgKi9cblx0XHRtcHFuRnJvbUJwbTogZnVuY3Rpb24oYnBtKSB7XG5cdFx0XHR2YXIgbXBxbiA9IE1hdGguZmxvb3IoNjAwMDAwMDAgLyBicG0pO1xuXHRcdFx0dmFyIHJldD1bXTtcblx0XHRcdGRvIHtcblx0XHRcdFx0cmV0LnVuc2hpZnQobXBxbiAmIDB4RkYpO1xuXHRcdFx0XHRtcHFuID4+PSA4O1xuXHRcdFx0fSB3aGlsZSAobXBxbik7XG5cdFx0XHR3aGlsZSAocmV0Lmxlbmd0aCA8IDMpIHtcblx0XHRcdFx0cmV0LnB1c2goMCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBDb252ZXJ0IG1pY3Jvc2Vjb25kcyBwZXIgcXVhcnRlciBub3RlIChNUFFOKSB0byBiZWF0cyBwZXIgbWludXRlIChCUE0pLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IG1wcW4gLSBUaGUgbnVtYmVyIG9mIG1pY3Jvc2Vjb25kcyBwZXIgcXVhcnRlciBub3RlLlxuXHRcdCAqIEByZXR1cm5zIHtudW1iZXJ9IEEgbnVtYmVyIGluIGJlYXRzIHBlciBtaW51dGUuXG5cdFx0ICovXG5cdFx0YnBtRnJvbU1wcW46IGZ1bmN0aW9uKG1wcW4pIHtcblx0XHRcdHZhciBtID0gbXBxbjtcblx0XHRcdGlmICh0eXBlb2YgbXBxblswXSAhPSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRtID0gMDtcblx0XHRcdFx0Zm9yICh2YXIgaT0wLCBsPW1wcW4ubGVuZ3RoLTE7IGwgPj0gMDsgKytpLCAtLWwpIHtcblx0XHRcdFx0XHRtIHw9IG1wcW5baV0gPDwgbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIE1hdGguZmxvb3IoNjAwMDAwMDAgLyBtcHFuKTtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogQ29udmVydHMgYW4gYXJyYXkgb2YgYnl0ZXMgdG8gYSBzdHJpbmcgb2YgaGV4YWRlY2ltYWwgY2hhcmFjdGVycy4gUHJlcGFyZXNcblx0XHQgKiBpdCB0byBiZSBjb252ZXJ0ZWQgaW50byBhIGJhc2U2NCBzdHJpbmcuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0FycmF5fSBieXRlQXJyYXkgLSBBcnJheSBvZiBieXRlcyB0byBiZSBjb252ZXJ0ZWQuXG5cdFx0ICogQHJldHVybnMge3N0cmluZ30gSGV4YWRlY2ltYWwgc3RyaW5nLCBlLmcuIFwiMDk3QjhBXCIuXG5cdFx0ICovXG5cdFx0Y29kZXMyU3RyOiBmdW5jdGlvbihieXRlQXJyYXkpIHtcblx0XHRcdHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIGJ5dGVBcnJheSk7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIENvbnZlcnRzIGEgc3RyaW5nIG9mIGhleGFkZWNpbWFsIHZhbHVlcyB0byBhbiBhcnJheSBvZiBieXRlcy4gSXQgY2FuIGFsc29cblx0XHQgKiBhZGQgcmVtYWluaW5nIFwiMFwiIG5pYmJsZXMgaW4gb3JkZXIgdG8gaGF2ZSBlbm91Z2ggYnl0ZXMgaW4gdGhlIGFycmF5IGFzIHRoZVxuXHRcdCAqIGBmaW5hbEJ5dGVzYCBwYXJhbWV0ZXIuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gc3RyaW5nIG9mIGhleGFkZWNpbWFsIHZhbHVlcyBlLmcuIFwiMDk3QjhBXCJcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gW2ZpbmFsQnl0ZXNdIC0gT3B0aW9uYWwuIFRoZSBkZXNpcmVkIG51bWJlciBvZiBieXRlc1xuXHRcdCAqIChub3QgbmliYmxlcykgdGhhdCB0aGUgcmV0dXJuZWQgYXJyYXkgc2hvdWxkIGNvbnRhaW4uXG5cdFx0ICogQHJldHVybnMge0FycmF5fSBBbiBhcnJheSBvZiBuaWJibGVzLlxuXHRcdCAqL1xuXHRcdHN0cjJCeXRlczogZnVuY3Rpb24gKHN0ciwgZmluYWxCeXRlcykge1xuXHRcdFx0aWYgKGZpbmFsQnl0ZXMpIHtcblx0XHRcdFx0d2hpbGUgKChzdHIubGVuZ3RoIC8gMikgPCBmaW5hbEJ5dGVzKSB7IHN0ciA9IFwiMFwiICsgc3RyOyB9XG5cdFx0XHR9XG5cblx0XHRcdHZhciBieXRlcyA9IFtdO1xuXHRcdFx0Zm9yICh2YXIgaT1zdHIubGVuZ3RoLTE7IGk+PTA7IGkgPSBpLTIpIHtcblx0XHRcdFx0dmFyIGNoYXJzID0gaSA9PT0gMCA/IHN0cltpXSA6IHN0cltpLTFdICsgc3RyW2ldO1xuXHRcdFx0XHRieXRlcy51bnNoaWZ0KHBhcnNlSW50KGNoYXJzLCAxNikpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gYnl0ZXM7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIFRyYW5zbGF0ZXMgbnVtYmVyIG9mIHRpY2tzIHRvIE1JREkgdGltZXN0YW1wIGZvcm1hdCwgcmV0dXJuaW5nIGFuIGFycmF5XG5cdFx0ICogb2YgYnl0ZXMgd2l0aCB0aGUgdGltZSB2YWx1ZXMuIE1JREkgaGFzIGEgdmVyeSBwYXJ0aWN1bGFyIHdheSB0byBleHByZXNzXG5cdFx0ICogdGltZTsgdGFrZSBhIGdvb2QgbG9vayBhdCB0aGUgc3BlYyBiZWZvcmUgZXZlciB0b3VjaGluZyB0aGlzIGZ1bmN0aW9uLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IHRpY2tzIC0gTnVtYmVyIG9mIHRpY2tzIHRvIGJlIHRyYW5zbGF0ZWQuXG5cdFx0ICogQHJldHVybnMge251bWJlcn0gQXJyYXkgb2YgYnl0ZXMgdGhhdCBmb3JtIHRoZSBNSURJIHRpbWUgdmFsdWUuXG5cdFx0ICovXG5cdFx0dHJhbnNsYXRlVGlja1RpbWU6IGZ1bmN0aW9uKHRpY2tzKSB7XG5cdFx0XHR2YXIgYnVmZmVyID0gdGlja3MgJiAweDdGO1xuXG5cdFx0XHR3aGlsZSAodGlja3MgPSB0aWNrcyA+PiA3KSB7XG5cdFx0XHRcdGJ1ZmZlciA8PD0gODtcblx0XHRcdFx0YnVmZmVyIHw9ICgodGlja3MgJiAweDdGKSB8IDB4ODApO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgYkxpc3QgPSBbXTtcblx0XHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRcdGJMaXN0LnB1c2goYnVmZmVyICYgMHhmZik7XG5cblx0XHRcdFx0aWYgKGJ1ZmZlciAmIDB4ODApIHsgYnVmZmVyID4+PSA4OyB9XG5cdFx0XHRcdGVsc2UgeyBicmVhazsgfVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGJMaXN0O1xuXHRcdH0sXG5cblx0fTtcblxuXHQvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0ICogRXZlbnQgY2xhc3Ncblx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG5cdC8qKlxuXHQgKiBDb25zdHJ1Y3QgYSBNSURJIGV2ZW50LlxuXHQgKlxuXHQgKiBQYXJhbWV0ZXJzIGluY2x1ZGU6XG5cdCAqICAtIHRpbWUgW29wdGlvbmFsIG51bWJlcl0gLSBUaWNrcyBzaW5jZSBwcmV2aW91cyBldmVudC5cblx0ICogIC0gdHlwZSBbcmVxdWlyZWQgbnVtYmVyXSAtIFR5cGUgb2YgZXZlbnQuXG5cdCAqICAtIGNoYW5uZWwgW3JlcXVpcmVkIG51bWJlcl0gLSBDaGFubmVsIGZvciB0aGUgZXZlbnQuXG5cdCAqICAtIHBhcmFtMSBbcmVxdWlyZWQgbnVtYmVyXSAtIEZpcnN0IGV2ZW50IHBhcmFtZXRlci5cblx0ICogIC0gcGFyYW0yIFtvcHRpb25hbCBudW1iZXJdIC0gU2Vjb25kIGV2ZW50IHBhcmFtZXRlci5cblx0ICovXG5cdHZhciBNaWRpRXZlbnQgPSBmdW5jdGlvbihwYXJhbXMpIHtcblx0XHRpZiAoIXRoaXMpIHJldHVybiBuZXcgTWlkaUV2ZW50KHBhcmFtcyk7XG5cdFx0aWYgKHBhcmFtcyAmJlxuXHRcdFx0XHQocGFyYW1zLnR5cGUgICAgIT09IG51bGwgfHwgcGFyYW1zLnR5cGUgICAgIT09IHVuZGVmaW5lZCkgJiZcblx0XHRcdFx0KHBhcmFtcy5jaGFubmVsICE9PSBudWxsIHx8IHBhcmFtcy5jaGFubmVsICE9PSB1bmRlZmluZWQpICYmXG5cdFx0XHRcdChwYXJhbXMucGFyYW0xICAhPT0gbnVsbCB8fCBwYXJhbXMucGFyYW0xICAhPT0gdW5kZWZpbmVkKSkge1xuXHRcdFx0dGhpcy5zZXRUaW1lKHBhcmFtcy50aW1lKTtcblx0XHRcdHRoaXMuc2V0VHlwZShwYXJhbXMudHlwZSk7XG5cdFx0XHR0aGlzLnNldENoYW5uZWwocGFyYW1zLmNoYW5uZWwpO1xuXHRcdFx0dGhpcy5zZXRQYXJhbTEocGFyYW1zLnBhcmFtMSk7XG5cdFx0XHR0aGlzLnNldFBhcmFtMihwYXJhbXMucGFyYW0yKTtcblx0XHR9XG5cdH07XG5cblx0Ly8gZXZlbnQgY29kZXNcblx0TWlkaUV2ZW50Lk5PVEVfT0ZGICAgICAgICAgICA9IDB4ODA7XG5cdE1pZGlFdmVudC5OT1RFX09OICAgICAgICAgICAgPSAweDkwO1xuXHRNaWRpRXZlbnQuQUZURVJfVE9VQ0ggICAgICAgID0gMHhBMDtcblx0TWlkaUV2ZW50LkNPTlRST0xMRVIgICAgICAgICA9IDB4QjA7XG5cdE1pZGlFdmVudC5QUk9HUkFNX0NIQU5HRSAgICAgPSAweEMwO1xuXHRNaWRpRXZlbnQuQ0hBTk5FTF9BRlRFUlRPVUNIID0gMHhEMDtcblx0TWlkaUV2ZW50LlBJVENIX0JFTkQgICAgICAgICA9IDB4RTA7XG5cblxuXHQvKipcblx0ICogU2V0IHRoZSB0aW1lIGZvciB0aGUgZXZlbnQgaW4gdGlja3Mgc2luY2UgdGhlIHByZXZpb3VzIGV2ZW50LlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gdGlja3MgLSBUaGUgbnVtYmVyIG9mIHRpY2tzIHNpbmNlIHRoZSBwcmV2aW91cyBldmVudC4gTWF5XG5cdCAqIGJlIHplcm8uXG5cdCAqL1xuXHRNaWRpRXZlbnQucHJvdG90eXBlLnNldFRpbWUgPSBmdW5jdGlvbih0aWNrcykge1xuXHRcdHRoaXMudGltZSA9IFV0aWwudHJhbnNsYXRlVGlja1RpbWUodGlja3MgfHwgMCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNldCB0aGUgdHlwZSBvZiB0aGUgZXZlbnQuIE11c3QgYmUgb25lIG9mIHRoZSBldmVudCBjb2RlcyBvbiBNaWRpRXZlbnQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlIC0gRXZlbnQgdHlwZS5cblx0ICovXG5cdE1pZGlFdmVudC5wcm90b3R5cGUuc2V0VHlwZSA9IGZ1bmN0aW9uKHR5cGUpIHtcblx0XHRpZiAodHlwZSA8IE1pZGlFdmVudC5OT1RFX09GRiB8fCB0eXBlID4gTWlkaUV2ZW50LlBJVENIX0JFTkQpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlRyeWluZyB0byBzZXQgYW4gdW5rbm93biBldmVudDogXCIgKyB0eXBlKTtcblx0XHR9XG5cblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIGNoYW5uZWwgZm9yIHRoZSBldmVudC4gTXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDE1LCBpbmNsdXNpdmUuXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBjaGFubmVsIC0gVGhlIGV2ZW50IGNoYW5uZWwuXG5cdCAqL1xuXHRNaWRpRXZlbnQucHJvdG90eXBlLnNldENoYW5uZWwgPSBmdW5jdGlvbihjaGFubmVsKSB7XG5cdFx0aWYgKGNoYW5uZWwgPCAwIHx8IGNoYW5uZWwgPiAxNSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2hhbm5lbCBpcyBvdXQgb2YgYm91bmRzLlwiKTtcblx0XHR9XG5cblx0XHR0aGlzLmNoYW5uZWwgPSBjaGFubmVsO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIGZpcnN0IHBhcmFtZXRlciBmb3IgdGhlIGV2ZW50LiBNdXN0IGJlIGJldHdlZW4gMCBhbmQgMjU1LFxuXHQgKiBpbmNsdXNpdmUuXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBwIC0gVGhlIGZpcnN0IGV2ZW50IHBhcmFtZXRlciB2YWx1ZS5cblx0ICovXG5cdE1pZGlFdmVudC5wcm90b3R5cGUuc2V0UGFyYW0xID0gZnVuY3Rpb24ocCkge1xuXHRcdHRoaXMucGFyYW0xID0gcDtcblx0fTtcblxuXHQvKipcblx0ICogU2V0IHRoZSBzZWNvbmQgcGFyYW1ldGVyIGZvciB0aGUgZXZlbnQuIE11c3QgYmUgYmV0d2VlbiAwIGFuZCAyNTUsXG5cdCAqIGluY2x1c2l2ZS5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHAgLSBUaGUgc2Vjb25kIGV2ZW50IHBhcmFtZXRlciB2YWx1ZS5cblx0ICovXG5cdE1pZGlFdmVudC5wcm90b3R5cGUuc2V0UGFyYW0yID0gZnVuY3Rpb24ocCkge1xuXHRcdHRoaXMucGFyYW0yID0gcDtcblx0fTtcblxuXHQvKipcblx0ICogU2VyaWFsaXplIHRoZSBldmVudCB0byBhbiBhcnJheSBvZiBieXRlcy5cblx0ICpcblx0ICogQHJldHVybnMge0FycmF5fSBUaGUgYXJyYXkgb2Ygc2VyaWFsaXplZCBieXRlcy5cblx0ICovXG5cdE1pZGlFdmVudC5wcm90b3R5cGUudG9CeXRlcyA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBieXRlQXJyYXkgPSBbXTtcblxuXHRcdHZhciB0eXBlQ2hhbm5lbEJ5dGUgPSB0aGlzLnR5cGUgfCAodGhpcy5jaGFubmVsICYgMHhGKTtcblxuXHRcdGJ5dGVBcnJheS5wdXNoLmFwcGx5KGJ5dGVBcnJheSwgdGhpcy50aW1lKTtcblx0XHRieXRlQXJyYXkucHVzaCh0eXBlQ2hhbm5lbEJ5dGUpO1xuXHRcdGJ5dGVBcnJheS5wdXNoKHRoaXMucGFyYW0xKTtcblxuXHRcdC8vIFNvbWUgZXZlbnRzIGRvbid0IGhhdmUgYSBzZWNvbmQgcGFyYW1ldGVyXG5cdFx0aWYgKHRoaXMucGFyYW0yICE9PSB1bmRlZmluZWQgJiYgdGhpcy5wYXJhbTIgIT09IG51bGwpIHtcblx0XHRcdGJ5dGVBcnJheS5wdXNoKHRoaXMucGFyYW0yKTtcblx0XHR9XG5cdFx0cmV0dXJuIGJ5dGVBcnJheTtcblx0fTtcblxuXHQvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0ICogTWV0YUV2ZW50IGNsYXNzXG5cdCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuXHQvKipcblx0ICogQ29uc3RydWN0IGEgbWV0YSBldmVudC5cblx0ICpcblx0ICogUGFyYW1ldGVycyBpbmNsdWRlOlxuXHQgKiAgLSB0aW1lIFtvcHRpb25hbCBudW1iZXJdIC0gVGlja3Mgc2luY2UgcHJldmlvdXMgZXZlbnQuXG5cdCAqICAtIHR5cGUgW3JlcXVpcmVkIG51bWJlcl0gLSBUeXBlIG9mIGV2ZW50LlxuXHQgKiAgLSBkYXRhIFtvcHRpb25hbCBhcnJheXxzdHJpbmddIC0gRXZlbnQgZGF0YS5cblx0ICovXG5cdHZhciBNZXRhRXZlbnQgPSBmdW5jdGlvbihwYXJhbXMpIHtcblx0XHRpZiAoIXRoaXMpIHJldHVybiBuZXcgTWV0YUV2ZW50KHBhcmFtcyk7XG5cdFx0dmFyIHAgPSBwYXJhbXMgfHwge307XG5cdFx0dGhpcy5zZXRUaW1lKHBhcmFtcy50aW1lKTtcblx0XHR0aGlzLnNldFR5cGUocGFyYW1zLnR5cGUpO1xuXHRcdHRoaXMuc2V0RGF0YShwYXJhbXMuZGF0YSk7XG5cdH07XG5cblx0TWV0YUV2ZW50LlNFUVVFTkNFICAgPSAweDAwO1xuXHRNZXRhRXZlbnQuVEVYVCAgICAgICA9IDB4MDE7XG5cdE1ldGFFdmVudC5DT1BZUklHSFQgID0gMHgwMjtcblx0TWV0YUV2ZW50LlRSQUNLX05BTUUgPSAweDAzO1xuXHRNZXRhRXZlbnQuSU5TVFJVTUVOVCA9IDB4MDQ7XG5cdE1ldGFFdmVudC5MWVJJQyAgICAgID0gMHgwNTtcblx0TWV0YUV2ZW50Lk1BUktFUiAgICAgPSAweDA2O1xuXHRNZXRhRXZlbnQuQ1VFX1BPSU5UICA9IDB4MDc7XG5cdE1ldGFFdmVudC5DSEFOTkVMX1BSRUZJWCA9IDB4MjA7XG5cdE1ldGFFdmVudC5FTkRfT0ZfVFJBQ0sgICA9IDB4MmY7XG5cdE1ldGFFdmVudC5URU1QTyAgICAgID0gMHg1MTtcblx0TWV0YUV2ZW50LlNNUFRFICAgICAgPSAweDU0O1xuXHRNZXRhRXZlbnQuVElNRV9TSUcgICA9IDB4NTg7XG5cdE1ldGFFdmVudC5LRVlfU0lHICAgID0gMHg1OTtcblx0TWV0YUV2ZW50LlNFUV9FVkVOVCAgPSAweDdmO1xuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIHRpbWUgZm9yIHRoZSBldmVudCBpbiB0aWNrcyBzaW5jZSB0aGUgcHJldmlvdXMgZXZlbnQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0aWNrcyAtIFRoZSBudW1iZXIgb2YgdGlja3Mgc2luY2UgdGhlIHByZXZpb3VzIGV2ZW50LiBNYXlcblx0ICogYmUgemVyby5cblx0ICovXG5cdE1ldGFFdmVudC5wcm90b3R5cGUuc2V0VGltZSA9IGZ1bmN0aW9uKHRpY2tzKSB7XG5cdFx0dGhpcy50aW1lID0gVXRpbC50cmFuc2xhdGVUaWNrVGltZSh0aWNrcyB8fCAwKTtcblx0fTtcblxuXHQvKipcblx0ICogU2V0IHRoZSB0eXBlIG9mIHRoZSBldmVudC4gTXVzdCBiZSBvbmUgb2YgdGhlIGV2ZW50IGNvZGVzIG9uIE1ldGFFdmVudC5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHQgLSBFdmVudCB0eXBlLlxuXHQgKi9cblx0TWV0YUV2ZW50LnByb3RvdHlwZS5zZXRUeXBlID0gZnVuY3Rpb24odCkge1xuXHRcdHRoaXMudHlwZSA9IHQ7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNldCB0aGUgZGF0YSBhc3NvY2lhdGVkIHdpdGggdGhlIGV2ZW50LiBNYXkgYmUgYSBzdHJpbmcgb3IgYXJyYXkgb2YgYnl0ZVxuXHQgKiB2YWx1ZXMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfEFycmF5fSBkIC0gRXZlbnQgZGF0YS5cblx0ICovXG5cdE1ldGFFdmVudC5wcm90b3R5cGUuc2V0RGF0YSA9IGZ1bmN0aW9uKGQpIHtcblx0XHR0aGlzLmRhdGEgPSBkO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXJpYWxpemUgdGhlIGV2ZW50IHRvIGFuIGFycmF5IG9mIGJ5dGVzLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IFRoZSBhcnJheSBvZiBzZXJpYWxpemVkIGJ5dGVzLlxuXHQgKi9cblx0TWV0YUV2ZW50LnByb3RvdHlwZS50b0J5dGVzID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCF0aGlzLnR5cGUpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlR5cGUgZm9yIG1ldGEtZXZlbnQgbm90IHNwZWNpZmllZC5cIik7XG5cdFx0fVxuXG5cdFx0dmFyIGJ5dGVBcnJheSA9IFtdO1xuXHRcdGJ5dGVBcnJheS5wdXNoLmFwcGx5KGJ5dGVBcnJheSwgdGhpcy50aW1lKTtcblx0XHRieXRlQXJyYXkucHVzaCgweEZGLCB0aGlzLnR5cGUpO1xuXG5cdFx0Ly8gSWYgZGF0YSBpcyBhbiBhcnJheSwgd2UgYXNzdW1lIHRoYXQgaXQgY29udGFpbnMgc2V2ZXJhbCBieXRlcy4gV2Vcblx0XHQvLyBhcGVuZCB0aGVtIHRvIGJ5dGVBcnJheS5cblx0XHRpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmRhdGEpKSB7XG5cdFx0XHRieXRlQXJyYXkucHVzaCh0aGlzLmRhdGEubGVuZ3RoKTtcblx0XHRcdGJ5dGVBcnJheS5wdXNoLmFwcGx5KGJ5dGVBcnJheSwgdGhpcy5kYXRhKTtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLmRhdGEgPT0gJ251bWJlcicpIHtcblx0XHRcdGJ5dGVBcnJheS5wdXNoKDEsIHRoaXMuZGF0YSk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLmRhdGEgIT09IG51bGwgJiYgdGhpcy5kYXRhICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdC8vIGFzc3VtZSBzdHJpbmc7IG1heSBiZSBhIGJhZCBhc3N1bXB0aW9uXG5cdFx0XHRieXRlQXJyYXkucHVzaCh0aGlzLmRhdGEubGVuZ3RoKTtcblx0XHRcdHZhciBkYXRhQnl0ZXMgPSB0aGlzLmRhdGEuc3BsaXQoJycpLm1hcChmdW5jdGlvbih4KXsgcmV0dXJuIHguY2hhckNvZGVBdCgwKSB9KTtcblx0XHRcdGJ5dGVBcnJheS5wdXNoLmFwcGx5KGJ5dGVBcnJheSwgZGF0YUJ5dGVzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ynl0ZUFycmF5LnB1c2goMCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGJ5dGVBcnJheTtcblx0fTtcblxuXHQvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0ICogVHJhY2sgY2xhc3Ncblx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG5cdC8qKlxuXHQgKiBDb25zdHJ1Y3QgYSBNSURJIHRyYWNrLlxuXHQgKlxuXHQgKiBQYXJhbWV0ZXJzIGluY2x1ZGU6XG5cdCAqICAtIGV2ZW50cyBbb3B0aW9uYWwgYXJyYXldIC0gQXJyYXkgb2YgZXZlbnRzIGZvciB0aGUgdHJhY2suXG5cdCAqL1xuXHR2YXIgVHJhY2sgPSBmdW5jdGlvbihjb25maWcpIHtcblx0XHRpZiAoIXRoaXMpIHJldHVybiBuZXcgVHJhY2soY29uZmlnKTtcblx0XHR2YXIgYyA9IGNvbmZpZyB8fCB7fTtcblx0XHR0aGlzLmV2ZW50cyA9IGMuZXZlbnRzIHx8IFtdO1xuXHR9O1xuXG5cdFRyYWNrLlNUQVJUX0JZVEVTID0gWzB4NGQsIDB4NTQsIDB4NzIsIDB4NmJdO1xuXHRUcmFjay5FTkRfQllURVMgICA9IFsweDAwLCAweEZGLCAweDJGLCAweDAwXTtcblxuXHQvKipcblx0ICogQWRkIGFuIGV2ZW50IHRvIHRoZSB0cmFjay5cblx0ICpcblx0ICogQHBhcmFtIHtNaWRpRXZlbnR8TWV0YUV2ZW50fSBldmVudCAtIFRoZSBldmVudCB0byBhZGQuXG5cdCAqIEByZXR1cm5zIHtUcmFja30gVGhlIGN1cnJlbnQgdHJhY2suXG5cdCAqL1xuXHRUcmFjay5wcm90b3R5cGUuYWRkRXZlbnQgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdHRoaXMuZXZlbnRzLnB1c2goZXZlbnQpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBBZGQgYSBub3RlLW9uIGV2ZW50IHRvIHRoZSB0cmFjay5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGNoYW5uZWwgLSBUaGUgY2hhbm5lbCB0byBhZGQgdGhlIGV2ZW50IHRvLlxuXHQgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IHBpdGNoIC0gVGhlIHBpdGNoIG9mIHRoZSBub3RlLCBlaXRoZXIgbnVtZXJpYyBvclxuXHQgKiBzeW1ib2xpYy5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lPTBdIC0gVGhlIG51bWJlciBvZiB0aWNrcyBzaW5jZSB0aGUgcHJldmlvdXMgZXZlbnQsXG5cdCAqIGRlZmF1bHRzIHRvIDAuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbdmVsb2NpdHk9OTBdIC0gVGhlIHZvbHVtZSBmb3IgdGhlIG5vdGUsIGRlZmF1bHRzIHRvXG5cdCAqIERFRkFVTFRfVk9MVU1FLlxuXHQgKiBAcmV0dXJucyB7VHJhY2t9IFRoZSBjdXJyZW50IHRyYWNrLlxuXHQgKi9cblx0VHJhY2sucHJvdG90eXBlLmFkZE5vdGVPbiA9IFRyYWNrLnByb3RvdHlwZS5ub3RlT24gPSBmdW5jdGlvbihjaGFubmVsLCBwaXRjaCwgdGltZSwgdmVsb2NpdHkpIHtcblx0XHR0aGlzLmV2ZW50cy5wdXNoKG5ldyBNaWRpRXZlbnQoe1xuXHRcdFx0dHlwZTogTWlkaUV2ZW50Lk5PVEVfT04sXG5cdFx0XHRjaGFubmVsOiBjaGFubmVsLFxuXHRcdFx0cGFyYW0xOiBVdGlsLmVuc3VyZU1pZGlQaXRjaChwaXRjaCksXG5cdFx0XHRwYXJhbTI6IHZlbG9jaXR5IHx8IERFRkFVTFRfVk9MVU1FLFxuXHRcdFx0dGltZTogdGltZSB8fCAwLFxuXHRcdH0pKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHQvKipcblx0ICogQWRkIGEgbm90ZS1vZmYgZXZlbnQgdG8gdGhlIHRyYWNrLlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gY2hhbm5lbCAtIFRoZSBjaGFubmVsIHRvIGFkZCB0aGUgZXZlbnQgdG8uXG5cdCAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gcGl0Y2ggLSBUaGUgcGl0Y2ggb2YgdGhlIG5vdGUsIGVpdGhlciBudW1lcmljIG9yXG5cdCAqIHN5bWJvbGljLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gW3RpbWU9MF0gLSBUaGUgbnVtYmVyIG9mIHRpY2tzIHNpbmNlIHRoZSBwcmV2aW91cyBldmVudCxcblx0ICogZGVmYXVsdHMgdG8gMC5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFt2ZWxvY2l0eT05MF0gLSBUaGUgdmVsb2NpdHkgdGhlIG5vdGUgd2FzIHJlbGVhc2VkLFxuXHQgKiBkZWZhdWx0cyB0byBERUZBVUxUX1ZPTFVNRS5cblx0ICogQHJldHVybnMge1RyYWNrfSBUaGUgY3VycmVudCB0cmFjay5cblx0ICovXG5cdFRyYWNrLnByb3RvdHlwZS5hZGROb3RlT2ZmID0gVHJhY2sucHJvdG90eXBlLm5vdGVPZmYgPSBmdW5jdGlvbihjaGFubmVsLCBwaXRjaCwgdGltZSwgdmVsb2NpdHkpIHtcblx0XHR0aGlzLmV2ZW50cy5wdXNoKG5ldyBNaWRpRXZlbnQoe1xuXHRcdFx0dHlwZTogTWlkaUV2ZW50Lk5PVEVfT0ZGLFxuXHRcdFx0Y2hhbm5lbDogY2hhbm5lbCxcblx0XHRcdHBhcmFtMTogVXRpbC5lbnN1cmVNaWRpUGl0Y2gocGl0Y2gpLFxuXHRcdFx0cGFyYW0yOiB2ZWxvY2l0eSB8fCBERUZBVUxUX1ZPTFVNRSxcblx0XHRcdHRpbWU6IHRpbWUgfHwgMCxcblx0XHR9KSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0LyoqXG5cdCAqIEFkZCBhIG5vdGUtb24gYW5kIC1vZmYgZXZlbnQgdG8gdGhlIHRyYWNrLlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gY2hhbm5lbCAtIFRoZSBjaGFubmVsIHRvIGFkZCB0aGUgZXZlbnQgdG8uXG5cdCAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gcGl0Y2ggLSBUaGUgcGl0Y2ggb2YgdGhlIG5vdGUsIGVpdGhlciBudW1lcmljIG9yXG5cdCAqIHN5bWJvbGljLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gZHVyIC0gVGhlIGR1cmF0aW9uIG9mIHRoZSBub3RlLCBpbiB0aWNrcy5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lPTBdIC0gVGhlIG51bWJlciBvZiB0aWNrcyBzaW5jZSB0aGUgcHJldmlvdXMgZXZlbnQsXG5cdCAqIGRlZmF1bHRzIHRvIDAuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbdmVsb2NpdHk9OTBdIC0gVGhlIHZlbG9jaXR5IHRoZSBub3RlIHdhcyByZWxlYXNlZCxcblx0ICogZGVmYXVsdHMgdG8gREVGQVVMVF9WT0xVTUUuXG5cdCAqIEByZXR1cm5zIHtUcmFja30gVGhlIGN1cnJlbnQgdHJhY2suXG5cdCAqL1xuXHRUcmFjay5wcm90b3R5cGUuYWRkTm90ZSA9IFRyYWNrLnByb3RvdHlwZS5ub3RlID0gZnVuY3Rpb24oY2hhbm5lbCwgcGl0Y2gsIGR1ciwgdGltZSwgdmVsb2NpdHkpIHtcblx0XHR0aGlzLm5vdGVPbihjaGFubmVsLCBwaXRjaCwgdGltZSwgdmVsb2NpdHkpO1xuXHRcdGlmIChkdXIpIHtcblx0XHRcdHRoaXMubm90ZU9mZihjaGFubmVsLCBwaXRjaCwgZHVyLCB2ZWxvY2l0eSk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBBZGQgYSBub3RlLW9uIGFuZCAtb2ZmIGV2ZW50IHRvIHRoZSB0cmFjayBmb3IgZWFjaCBwaXRjaCBpbiBhbiBhcnJheSBvZiBwaXRjaGVzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gY2hhbm5lbCAtIFRoZSBjaGFubmVsIHRvIGFkZCB0aGUgZXZlbnQgdG8uXG5cdCAqIEBwYXJhbSB7YXJyYXl9IGNob3JkIC0gQW4gYXJyYXkgb2YgcGl0Y2hlcywgZWl0aGVyIG51bWVyaWMgb3Jcblx0ICogc3ltYm9saWMuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBkdXIgLSBUaGUgZHVyYXRpb24gb2YgdGhlIGNob3JkLCBpbiB0aWNrcy5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFt2ZWxvY2l0eT05MF0gLSBUaGUgdmVsb2NpdHkgb2YgdGhlIGNob3JkLFxuXHQgKiBkZWZhdWx0cyB0byBERUZBVUxUX1ZPTFVNRS5cblx0ICogQHJldHVybnMge1RyYWNrfSBUaGUgY3VycmVudCB0cmFjay5cblx0ICovXG5cdFRyYWNrLnByb3RvdHlwZS5hZGRDaG9yZCA9IFRyYWNrLnByb3RvdHlwZS5jaG9yZCA9IGZ1bmN0aW9uKGNoYW5uZWwsIGNob3JkLCBkdXIsIHZlbG9jaXR5KSB7XG5cdFx0aWYgKCFBcnJheS5pc0FycmF5KGNob3JkKSAmJiAhY2hvcmQubGVuZ3RoKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0Nob3JkIG11c3QgYmUgYW4gYXJyYXkgb2YgcGl0Y2hlcycpO1xuXHRcdH1cblx0XHRjaG9yZC5mb3JFYWNoKGZ1bmN0aW9uKG5vdGUpIHtcblx0XHRcdHRoaXMubm90ZU9uKGNoYW5uZWwsIG5vdGUsIDAsIHZlbG9jaXR5KTtcblx0XHR9LCB0aGlzKTtcblx0XHRjaG9yZC5mb3JFYWNoKGZ1bmN0aW9uKG5vdGUsIGluZGV4KSB7XG5cdFx0XHRpZiAoaW5kZXggPT09IDApIHtcblx0XHRcdFx0dGhpcy5ub3RlT2ZmKGNoYW5uZWwsIG5vdGUsIGR1cik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLm5vdGVPZmYoY2hhbm5lbCwgbm90ZSk7XG5cdFx0XHR9XG5cdFx0fSwgdGhpcyk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNldCBpbnN0cnVtZW50IGZvciB0aGUgdHJhY2suXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBjaGFubmVsIC0gVGhlIGNoYW5uZWwgdG8gc2V0IHRoZSBpbnN0cnVtZW50IG9uLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gaW5zdHJ1bWVudCAtIFRoZSBpbnN0cnVtZW50IHRvIHNldCBpdCB0by5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lPTBdIC0gVGhlIG51bWJlciBvZiB0aWNrcyBzaW5jZSB0aGUgcHJldmlvdXMgZXZlbnQsXG5cdCAqIGRlZmF1bHRzIHRvIDAuXG5cdCAqIEByZXR1cm5zIHtUcmFja30gVGhlIGN1cnJlbnQgdHJhY2suXG5cdCAqL1xuXHRUcmFjay5wcm90b3R5cGUuc2V0SW5zdHJ1bWVudCA9IFRyYWNrLnByb3RvdHlwZS5pbnN0cnVtZW50ID0gZnVuY3Rpb24oY2hhbm5lbCwgaW5zdHJ1bWVudCwgdGltZSkge1xuXHRcdHRoaXMuZXZlbnRzLnB1c2gobmV3IE1pZGlFdmVudCh7XG5cdFx0XHR0eXBlOiBNaWRpRXZlbnQuUFJPR1JBTV9DSEFOR0UsXG5cdFx0XHRjaGFubmVsOiBjaGFubmVsLFxuXHRcdFx0cGFyYW0xOiBpbnN0cnVtZW50LFxuXHRcdFx0dGltZTogdGltZSB8fCAwLFxuXHRcdH0pKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHQvKipcblx0ICogU2V0IHRoZSB0ZW1wbyBmb3IgdGhlIHRyYWNrLlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gYnBtIC0gVGhlIG5ldyBudW1iZXIgb2YgYmVhdHMgcGVyIG1pbnV0ZS5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lPTBdIC0gVGhlIG51bWJlciBvZiB0aWNrcyBzaW5jZSB0aGUgcHJldmlvdXMgZXZlbnQsXG5cdCAqIGRlZmF1bHRzIHRvIDAuXG5cdCAqIEByZXR1cm5zIHtUcmFja30gVGhlIGN1cnJlbnQgdHJhY2suXG5cdCAqL1xuXHRUcmFjay5wcm90b3R5cGUuc2V0VGVtcG8gPSBUcmFjay5wcm90b3R5cGUudGVtcG8gPSBmdW5jdGlvbihicG0sIHRpbWUpIHtcblx0XHR0aGlzLmV2ZW50cy5wdXNoKG5ldyBNZXRhRXZlbnQoe1xuXHRcdFx0dHlwZTogTWV0YUV2ZW50LlRFTVBPLFxuXHRcdFx0ZGF0YTogVXRpbC5tcHFuRnJvbUJwbShicG0pLFxuXHRcdFx0dGltZTogdGltZSB8fCAwLFxuXHRcdH0pKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHQvKipcblx0ICogU2V0IHRoZSB0aW1lIHNpZ25hdHVyZSBmb3IgdGhlIHRyYWNrLlxuXHQgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBudW1lcmF0b3IgLSBUaGUgbnVtZXJhdG9yIG9mIHRoZSB0aW1lIHNpZ25hdHVyZS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGVub21pbmF0b3IgLSBUaGUgZGVub21pbmF0b3Igb2YgdGhlIHRpbWUgc2lnbmF0dXJlLlxuICAgICAqIE11c3QgYmUgYSBwb3dlciBvZiAyLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gW3RpbWU9MF0gLSBUaGUgbnVtYmVyIG9mIHRpY2tzIHNpbmNlIHRoZSBwcmV2aW91cyBldmVudCxcblx0ICogZGVmYXVsdHMgdG8gMC5cblx0ICogQHJldHVybnMge1RyYWNrfSBUaGUgY3VycmVudCB0cmFjay5cblx0ICovXG5cdFRyYWNrLnByb3RvdHlwZS5zZXRUaW1lU2lnbmF0dXJlID0gVHJhY2sucHJvdG90eXBlLnRpbWVTaWduYXR1cmUgPSBmdW5jdGlvbihudW1lcmF0b3IsIGRlbm9taW5hdG9yLCB0aW1lKSB7XG4gICAgICAgIHZhciBkZGxvZzIgPSBNYXRoLmxvZzIoZGVub21pbmF0b3IpO1xuICAgICAgICBpZiAoZGRsb2cyICE9IE1hdGguZmxvb3IoZGRsb2cyKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaW1lIHNpZ25hdHVyZSBkZW5vbWluYXRvciBtdXN0IGJlIGFuIGV4YWN0IHBvd2VyIG9mIDIhJyk7XG4gICAgICAgIH1cblx0XHR0aGlzLmV2ZW50cy5wdXNoKG5ldyBNZXRhRXZlbnQoe1xuXHRcdFx0dHlwZTogTWV0YUV2ZW50LlRJTUVfU0lHLFxuXHRcdFx0ZGF0YTogW251bWVyYXRvciAmIDB4RkYsIE1hdGguZmxvb3IoZGRsb2cyKSAmIDB4RkYsIDB4MTgsIDB4MDhdLFxuXHRcdFx0dGltZTogdGltZSB8fCAwLFxuXHRcdH0pKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHQvKipcblx0ICogU2V0IHRoZSBrZXkgc2lnbmF0dXJlIGZvciB0aGUgdHJhY2suXG5cdCAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGFjY2lkZW50YWxzIC0gVGhlIG51bWJlciBvZiBzaGFycHMgKGlmIHBvc2l0aXZlKSBvclxuICAgICAqIGZsYXRzIChpZiBuZWdhdGl2ZSkgaW4gdGhlIGtleSBzaWduYXR1cmUuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbbWlub3I9ZmFsc2VdIC0gVHJ1ZSBpZiB0aGlzIGlzIGEgbWlub3Iga2V5LlxuXHQgKiBAcGFyYW0ge251bWJlcn0gW3RpbWU9MF0gLSBUaGUgbnVtYmVyIG9mIHRpY2tzIHNpbmNlIHRoZSBwcmV2aW91cyBldmVudCxcblx0ICogZGVmYXVsdHMgdG8gMC5cblx0ICogQHJldHVybnMge1RyYWNrfSBUaGUgY3VycmVudCB0cmFjay5cblx0ICovXG5cdFRyYWNrLnByb3RvdHlwZS5zZXRLZXlTaWduYXR1cmUgPSBUcmFjay5wcm90b3R5cGUua2V5U2lnbmF0dXJlID0gZnVuY3Rpb24oYWNjaWRlbnRhbHMsIG1pbm9yLCB0aW1lKSB7XG5cdFx0dGhpcy5ldmVudHMucHVzaChuZXcgTWV0YUV2ZW50KHtcblx0XHRcdHR5cGU6IE1ldGFFdmVudC5LRVlfU0lHLFxuXHRcdFx0ZGF0YTogW2FjY2lkZW50YWxzICYgMHhGRiwgbWlub3IgPyAxIDogMF0sXG5cdFx0XHR0aW1lOiB0aW1lIHx8IDAsXG5cdFx0fSkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXJpYWxpemUgdGhlIHRyYWNrIHRvIGFuIGFycmF5IG9mIGJ5dGVzLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IFRoZSBhcnJheSBvZiBzZXJpYWxpemVkIGJ5dGVzLlxuXHQgKi9cblx0VHJhY2sucHJvdG90eXBlLnRvQnl0ZXMgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgdHJhY2tMZW5ndGggPSAwO1xuXHRcdHZhciBldmVudEJ5dGVzID0gW107XG5cdFx0dmFyIHN0YXJ0Qnl0ZXMgPSBUcmFjay5TVEFSVF9CWVRFUztcblx0XHR2YXIgZW5kQnl0ZXMgICA9IFRyYWNrLkVORF9CWVRFUztcblxuXHRcdHZhciBhZGRFdmVudEJ5dGVzID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdHZhciBieXRlcyA9IGV2ZW50LnRvQnl0ZXMoKTtcblx0XHRcdHRyYWNrTGVuZ3RoICs9IGJ5dGVzLmxlbmd0aDtcblx0XHRcdGV2ZW50Qnl0ZXMucHVzaC5hcHBseShldmVudEJ5dGVzLCBieXRlcyk7XG5cdFx0fTtcblxuXHRcdHRoaXMuZXZlbnRzLmZvckVhY2goYWRkRXZlbnRCeXRlcyk7XG5cblx0XHQvLyBBZGQgdGhlIGVuZC1vZi10cmFjayBieXRlcyB0byB0aGUgc3VtIG9mIGJ5dGVzIGZvciB0aGUgdHJhY2ssIHNpbmNlXG5cdFx0Ly8gdGhleSBhcmUgY291bnRlZCAodW5saWtlIHRoZSBzdGFydC1vZi10cmFjayBvbmVzKS5cblx0XHR0cmFja0xlbmd0aCArPSBlbmRCeXRlcy5sZW5ndGg7XG5cblx0XHQvLyBNYWtlcyBzdXJlIHRoYXQgdHJhY2sgbGVuZ3RoIHdpbGwgZmlsbCB1cCA0IGJ5dGVzIHdpdGggMHMgaW4gY2FzZVxuXHRcdC8vIHRoZSBsZW5ndGggaXMgbGVzcyB0aGFuIHRoYXQgKHRoZSB1c3VhbCBjYXNlKS5cblx0XHR2YXIgbGVuZ3RoQnl0ZXMgPSBVdGlsLnN0cjJCeXRlcyh0cmFja0xlbmd0aC50b1N0cmluZygxNiksIDQpO1xuXG5cdFx0cmV0dXJuIHN0YXJ0Qnl0ZXMuY29uY2F0KGxlbmd0aEJ5dGVzLCBldmVudEJ5dGVzLCBlbmRCeXRlcyk7XG5cdH07XG5cblx0LyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdCAqIEZpbGUgY2xhc3Ncblx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG5cdC8qKlxuXHQgKiBDb25zdHJ1Y3QgYSBmaWxlIG9iamVjdC5cblx0ICpcblx0ICogUGFyYW1ldGVycyBpbmNsdWRlOlxuXHQgKiAgLSB0aWNrcyBbb3B0aW9uYWwgbnVtYmVyXSAtIE51bWJlciBvZiB0aWNrcyBwZXIgYmVhdCwgZGVmYXVsdHMgdG8gMTI4LlxuXHQgKiAgICBNdXN0IGJlIDEtMzI3NjcuXG5cdCAqICAtIHRyYWNrcyBbb3B0aW9uYWwgYXJyYXldIC0gVHJhY2sgZGF0YS5cblx0ICovXG5cdHZhciBGaWxlID0gZnVuY3Rpb24oY29uZmlnKXtcblx0XHRpZiAoIXRoaXMpIHJldHVybiBuZXcgRmlsZShjb25maWcpO1xuXG5cdFx0dmFyIGMgPSBjb25maWcgfHwge307XG5cdFx0aWYgKGMudGlja3MpIHtcblx0XHRcdGlmICh0eXBlb2YgYy50aWNrcyAhPT0gJ251bWJlcicpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdUaWNrcyBwZXIgYmVhdCBtdXN0IGJlIGEgbnVtYmVyIScpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoYy50aWNrcyA8PSAwIHx8IGMudGlja3MgPj0gKDEgPDwgMTUpIHx8IGMudGlja3MgJSAxICE9PSAwKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignVGlja3MgcGVyIGJlYXQgbXVzdCBiZSBhbiBpbnRlZ2VyIGJldHdlZW4gMSBhbmQgMzI3NjchJyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLnRpY2tzID0gYy50aWNrcyB8fCAxMjg7XG5cdFx0dGhpcy50cmFja3MgPSBjLnRyYWNrcyB8fCBbXTtcblx0fTtcblxuXHRGaWxlLkhEUl9DSFVOS0lEICAgICA9IFwiTVRoZFwiOyAgICAgICAgICAgICAvLyBGaWxlIG1hZ2ljIGNvb2tpZVxuXHRGaWxlLkhEUl9DSFVOS19TSVpFICA9IFwiXFx4MDBcXHgwMFxceDAwXFx4MDZcIjsgLy8gSGVhZGVyIGxlbmd0aCBmb3IgU01GXG5cdEZpbGUuSERSX1RZUEUwICAgICAgID0gXCJcXHgwMFxceDAwXCI7ICAgICAgICAgLy8gTWlkaSBUeXBlIDAgaWRcblx0RmlsZS5IRFJfVFlQRTEgICAgICAgPSBcIlxceDAwXFx4MDFcIjsgICAgICAgICAvLyBNaWRpIFR5cGUgMSBpZFxuXG5cdC8qKlxuXHQgKiBBZGQgYSB0cmFjayB0byB0aGUgZmlsZS5cblx0ICpcblx0ICogQHBhcmFtIHtUcmFja30gdHJhY2sgLSBUaGUgdHJhY2sgdG8gYWRkLlxuXHQgKi9cblx0RmlsZS5wcm90b3R5cGUuYWRkVHJhY2sgPSBmdW5jdGlvbih0cmFjaykge1xuXHRcdGlmICh0cmFjaykge1xuXHRcdFx0dGhpcy50cmFja3MucHVzaCh0cmFjayk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IGVsc2Uge1xuXHRcdFx0dHJhY2sgPSBuZXcgVHJhY2soKTtcblx0XHRcdHRoaXMudHJhY2tzLnB1c2godHJhY2spO1xuXHRcdFx0cmV0dXJuIHRyYWNrO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogU2VyaWFsaXplIHRoZSBNSURJIGZpbGUgdG8gYW4gYXJyYXkgb2YgYnl0ZXMuXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gVGhlIGFycmF5IG9mIHNlcmlhbGl6ZWQgYnl0ZXMuXG5cdCAqL1xuXHRGaWxlLnByb3RvdHlwZS50b0J5dGVzID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHRyYWNrQ291bnQgPSB0aGlzLnRyYWNrcy5sZW5ndGgudG9TdHJpbmcoMTYpO1xuXG5cdFx0Ly8gcHJlcGFyZSB0aGUgZmlsZSBoZWFkZXJcblx0XHR2YXIgYnl0ZXMgPSBGaWxlLkhEUl9DSFVOS0lEICsgRmlsZS5IRFJfQ0hVTktfU0laRTtcblxuXHRcdC8vIHNldCBNaWRpIHR5cGUgYmFzZWQgb24gbnVtYmVyIG9mIHRyYWNrc1xuXHRcdGlmIChwYXJzZUludCh0cmFja0NvdW50LCAxNikgPiAxKSB7XG5cdFx0XHRieXRlcyArPSBGaWxlLkhEUl9UWVBFMTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ynl0ZXMgKz0gRmlsZS5IRFJfVFlQRTA7XG5cdFx0fVxuXG5cdFx0Ly8gYWRkIHRoZSBudW1iZXIgb2YgdHJhY2tzICgyIGJ5dGVzKVxuXHRcdGJ5dGVzICs9IFV0aWwuY29kZXMyU3RyKFV0aWwuc3RyMkJ5dGVzKHRyYWNrQ291bnQsIDIpKTtcblx0XHQvLyBhZGQgdGhlIG51bWJlciBvZiB0aWNrcyBwZXIgYmVhdCAoY3VycmVudGx5IGhhcmRjb2RlZClcblx0XHRieXRlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCh0aGlzLnRpY2tzLzI1NiksICB0aGlzLnRpY2tzJTI1Nik7O1xuXG5cdFx0Ly8gaXRlcmF0ZSBvdmVyIHRoZSB0cmFja3MsIGNvbnZlcnRpbmcgdG8gYnl0ZXMgdG9vXG5cdFx0dGhpcy50cmFja3MuZm9yRWFjaChmdW5jdGlvbih0cmFjaykge1xuXHRcdFx0Ynl0ZXMgKz0gVXRpbC5jb2RlczJTdHIodHJhY2sudG9CeXRlcygpKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiBieXRlcztcblx0fTtcblxuXHQvKipcblx0ICogU2VyaWFsaXplIHRoZSBNSURJIGZpbGUgdG8gYSBVaW50OEFycmF5LlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7VWludDhBcnJheX0gVGhlIGFycmF5IG9mIHNlcmlhbGl6ZWQgYnl0ZXMuXG5cdCAqL1xuICAgIEZpbGUucHJvdG90eXBlLnRvVWludDhBcnJheSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5mcm9tKHRoaXMudG9CeXRlcygpKTtcbiAgICB9O1xuXG5cdC8qKlxuXHQgKiBTZXJpYWxpemUgdGhlIE1JREkgZmlsZSB0byBhIEJsb2IuXG5cdCAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbZ2VuZXJpY1R5cGU9ZmFsc2VdIC0gSWYgZmFsc2UsIHVzZXMgdGhlIGNvcnJlY3QgTUlESVxuICAgICAqIE1JTUUgdHlwZS4gSWYgdHJ1ZSwgdXNlcyB0aGUgZ2VuZXJpYyBieXRlc3RyZWFtIE1JTUUgdHlwZS5cblx0ICogQHJldHVybnMge0Jsb2J9IFRoZSBibG9iIGNvbnRhaW5pbmcgdGhlIHNlcmlhbGl6ZWQgYnl0ZXMuXG5cdCAqL1xuICAgIEZpbGUucHJvdG90eXBlLnRvQmxvYiA9IGZ1bmN0aW9uKGdlbmVyaWNUeXBlKSB7XG4gICAgICAgIHJldHVybiBuZXcgQmxvYihbdGhpcy50b1VpbnQ4QXJyYXkoKV0sIHtcbiAgICAgICAgICAgIHR5cGU6IGdlbmVyaWNUeXBlID8gXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIiA6IFwiYXVkaW8veC1taWRpXCJcbiAgICAgICAgfSk7XG4gICAgfTtcblxuXHQvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0ICogRXhwb3J0c1xuXHQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cblx0ZXhwb3J0ZWQuVXRpbCA9IFV0aWw7XG5cdGV4cG9ydGVkLkZpbGUgPSBGaWxlO1xuXHRleHBvcnRlZC5UcmFjayA9IFRyYWNrO1xuXHRleHBvcnRlZC5FdmVudCA9IE1pZGlFdmVudDtcblx0ZXhwb3J0ZWQuTWV0YUV2ZW50ID0gTWV0YUV2ZW50O1xuXG59KSggTWlkaSApO1xuXG5pZiAodHlwZW9mIG1vZHVsZSAhPSAndW5kZWZpbmVkJyAmJiBtb2R1bGUgIT09IG51bGwpIHtcblx0bW9kdWxlLmV4cG9ydHMgPSBNaWRpO1xufSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPSAndW5kZWZpbmVkJyAmJiBleHBvcnRzICE9PSBudWxsKSB7XG5cdGV4cG9ydHMgPSBNaWRpO1xufSBlbHNlIHtcblx0dGhpcy5NaWRpID0gTWlkaTtcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gZmxhdHRlbih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUucmVkdWNlKChwcmV2LCBjdXIpID0+IHByZXYuY29uY2F0KGN1ciksIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdCh2YWx1ZSwgdGltZXMpIHtcbiAgY29uc3Qgb3V0ID0gW107XG5cbiAgd2hpbGUgKHRpbWVzKSB7XG4gICAgb3V0LnB1c2godmFsdWUpO1xuICAgIHRpbWVzIC09IDE7XG4gIH1cblxuICByZXR1cm4gb3V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZ2UobWluLCBtYXgsIHN0ZXApIHtcbiAgY29uc3QgYWNjID0gW107XG5cbiAgaWYgKCFzdGVwKSB7XG4gICAgZm9yIChsZXQgaSA9IG1pbjsgaSA8PSBtYXg7IGkgKz0gMSkge1xuICAgICAgYWNjLnB1c2goaSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IGRpZmYgPSAobWF4IC0gbWluKSAvIHN0ZXA7XG5cbiAgICBmb3IgKGxldCBpID0gbWluOyBpIDw9IG1heDsgaSArPSBkaWZmKSB7XG4gICAgICBhY2MucHVzaChpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYWNjO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSByZXR1cm4gdmFsdWU7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkgcmV0dXJuIHZhbHVlLm1hcChjbG9uZSk7XG5cbiAgY29uc3QgY29weSA9IHt9O1xuXG4gIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgY29weVtrZXldID0gY2xvbmUodmFsdWVba2V5XSk7XG4gIH0pO1xuXG4gIHJldHVybiBjb3B5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gemlwKGEsIGIsIGNiKSB7XG4gIGNvbnN0IG1heCA9IE1hdGgubWF4KGEubGVuZ3RoLCBiLmxlbmd0aCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXg7IGkgKz0gMSkge1xuICAgIGlmICh0eXBlb2YgYVtpXSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGJbaV0gIT09ICd1bmRlZmluZWQnKSBjYihhW2ldLCBiW2ldKTtcbiAgfVxufVxuIiwgImNvbnN0IERFRkFVTFRfQUxJQVNFUyA9IHtcbiAgZHJ1bXM6IHtcbiAgICBiZDogMjAwMSxcbiAgICBraWNrOiAyMDAxLFxuICAgIHNkOiAyMDA0LFxuICAgIHNuOiAyMDA0LFxuICAgIHNuYXJlOiAyMDA0LFxuICAgIGNwOiAyMDI4LFxuICAgIGNsYXA6IDIwMjgsXG4gICAgaGg6IDIwMzUsXG4gICAgaGF0OiAyMDM1LFxuICAgIG9oOiAyMDgxLFxuICAgIHJpZGU6IDIwODEsXG4gICAgcGVyYzogMjEyMyxcbiAgfSxcbiAgaW5zdHJ1bWVudHM6IHtcbiAgICBwaWFubzogMCxcbiAgICBlcGlhbm86IDQsXG4gICAgb3JnYW46IDE2LFxuICAgIGd1aXRhcjogMjQsXG4gICAgYmFzczogMzMsXG4gICAgc3RyaW5nczogNDgsXG4gICAgYnJhc3M6IDYxLFxuICAgIGxlYWQ6IDgwLFxuICAgIHBhZDogODgsXG4gICAgY2hvaXI6IDUyLFxuICAgIGZ4OiA5OCxcbiAgICBzeW50aDogOTQsXG4gIH0sXG59O1xuXG5mdW5jdGlvbiB0b0NoYW5uZWxOdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgTnVtYmVyLmlzRmluaXRlKHZhbHVlKSkgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGguZmxvb3IodmFsdWUpKTtcbiAgY29uc3QgcmF3ID0gU3RyaW5nKHZhbHVlIHx8ICcnKS50cmltKCk7XG4gIGlmICghcmF3KSByZXR1cm4gbnVsbDtcbiAgaWYgKHJhdy5jaGFyQXQoMCkgPT09ICcjJykge1xuICAgIGNvbnN0IG4gPSBwYXJzZUludChyYXcuc2xpY2UoMSksIDEwKTtcbiAgICByZXR1cm4gTnVtYmVyLmlzRmluaXRlKG4pID8gTWF0aC5tYXgoMCwgbikgOiBudWxsO1xuICB9XG4gIGNvbnN0IG4gPSBwYXJzZUludChyYXcsIDEwKTtcbiAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShuKSA/IE1hdGgubWF4KDAsIG4pIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplQWxpYXNSb3dzKHJvd3MgPSB7fSkge1xuICBjb25zdCBvdXQgPSB7fTtcbiAgT2JqZWN0LmVudHJpZXMocm93cyB8fCB7fSkuZm9yRWFjaCgoW25hbWUsIHRhcmdldF0pID0+IHtcbiAgICBjb25zdCBhbGlhcyA9IFN0cmluZyhuYW1lIHx8ICcnKS50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcbiAgICBpZiAoIWFsaWFzKSByZXR1cm47XG4gICAgY29uc3QgY2hhbm5lbCA9IHRvQ2hhbm5lbE51bWJlcih0YXJnZXQpO1xuICAgIGlmICghTnVtYmVyLmlzRmluaXRlKGNoYW5uZWwpKSByZXR1cm47XG4gICAgb3V0W2FsaWFzXSA9IGNoYW5uZWw7XG4gIH0pO1xuICByZXR1cm4gb3V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQ2hhbm5lbEFsaWFzZXMocmF3ID0gbnVsbCkge1xuICBjb25zdCBiYXNlID0ge1xuICAgIGRydW1zOiBub3JtYWxpemVBbGlhc1Jvd3MoREVGQVVMVF9BTElBU0VTLmRydW1zKSxcbiAgICBpbnN0cnVtZW50czogbm9ybWFsaXplQWxpYXNSb3dzKERFRkFVTFRfQUxJQVNFUy5pbnN0cnVtZW50cyksXG4gIH07XG4gIGlmICghcmF3IHx8IHR5cGVvZiByYXcgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmJhc2UsXG4gICAgICBhbGw6IHsgLi4uYmFzZS5kcnVtcywgLi4uYmFzZS5pbnN0cnVtZW50cyB9LFxuICAgIH07XG4gIH1cblxuICBjb25zdCBuZXh0RHJ1bXMgPSB7XG4gICAgLi4uYmFzZS5kcnVtcyxcbiAgICAuLi5ub3JtYWxpemVBbGlhc1Jvd3MocmF3LmRydW1zKSxcbiAgfTtcbiAgY29uc3QgbmV4dEluc3RydW1lbnRzID0ge1xuICAgIC4uLmJhc2UuaW5zdHJ1bWVudHMsXG4gICAgLi4ubm9ybWFsaXplQWxpYXNSb3dzKHJhdy5pbnN0cnVtZW50cyksXG4gIH07XG4gIHJldHVybiB7XG4gICAgZHJ1bXM6IG5leHREcnVtcyxcbiAgICBpbnN0cnVtZW50czogbmV4dEluc3RydW1lbnRzLFxuICAgIGFsbDoge1xuICAgICAgLi4ubmV4dERydW1zLFxuICAgICAgLi4ubmV4dEluc3RydW1lbnRzLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlQ2hhbm5lbFRva2VuKHZhbHVlLCBjaGFubmVsQWxpYXNlcyA9IG51bGwpIHtcbiAgY29uc3QgdG9rZW4gPSBTdHJpbmcodmFsdWUgfHwgJycpLnRyaW0oKTtcbiAgaWYgKCF0b2tlbiB8fCB0b2tlbi5jaGFyQXQoMCkgIT09ICcjJykgcmV0dXJuIHRva2VuO1xuICBjb25zdCByYXcgPSB0b2tlbi5zbGljZSgxKS50cmltKCk7XG4gIGlmICghcmF3KSB0aHJvdyBuZXcgVHlwZUVycm9yKGBNaXNzaW5nIGNoYW5uZWwgdmFsdWUgaW4gJyR7dG9rZW59J2ApO1xuXG4gIGNvbnN0IG51bWVyaWMgPSB0b0NoYW5uZWxOdW1iZXIocmF3KTtcbiAgaWYgKE51bWJlci5pc0Zpbml0ZShudW1lcmljKSAmJiAvXlxcZCskLy50ZXN0KHJhdykpIHJldHVybiBgIyR7bnVtZXJpY31gO1xuXG4gIGNvbnN0IGFsaWFzZXMgPSBub3JtYWxpemVDaGFubmVsQWxpYXNlcyhjaGFubmVsQWxpYXNlcyk7XG4gIGNvbnN0IHRhcmdldCA9IGFsaWFzZXMuYWxsW1N0cmluZyhyYXcpLnRvTG93ZXJDYXNlKCldO1xuICBpZiAoTnVtYmVyLmlzRmluaXRlKHRhcmdldCkpIHJldHVybiBgIyR7dGFyZ2V0fWA7XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihgVW5rbm93biBjaGFubmVsIGFsaWFzICcjJHtyYXd9J2ApO1xufVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9DSEFOTkVMX0FMSUFTRVMgPSBub3JtYWxpemVDaGFubmVsQWxpYXNlcygpO1xuIiwgIi8vIHNyYy9nZW4vc2NhbGVNYXBzLmpzb25cbnZhciBzY2FsZU1hcHNfZGVmYXVsdCA9IHtcbiAgXCJtYWpvciBwZW50YXRvbmljXCI6IFwiMTAxMDEwMDEwMTAwXCIsXG4gIFwiaW9uaWFuIHBlbnRhdG9uaWNcIjogXCIxMDAwMTEwMTAwMDFcIixcbiAgXCJtaXhvbHlkaWFuIHBlbnRhdG9uaWNcIjogXCIxMDAwMTEwMTAwMTBcIixcbiAgcml0dXNlbjogXCIxMDEwMDEwMTAxMDBcIixcbiAgZWd5cHRpYW46IFwiMTAxMDAxMDEwMDEwXCIsXG4gIFwibmVvcG9saXRhbiBtYWpvciBwZW50YXRvbmljXCI6IFwiMTAwMDExMTAwMDEwXCIsXG4gIFwidmlldG5hbWVzZSAxXCI6IFwiMTAwMTAxMDExMDAwXCIsXG4gIHBlbG9nOiBcIjExMDEwMDAxMTAwMFwiLFxuICBrdW1vaWpvc2hpOiBcIjExMDAwMTAxMTAwMFwiLFxuICBoaXJham9zaGk6IFwiMTAxMTAwMDExMDAwXCIsXG4gIGl3YXRvOiBcIjExMDAwMTEwMDAxMFwiLFxuICBcImluLXNlblwiOiBcIjExMDAwMTAxMDAxMFwiLFxuICBcImx5ZGlhbiBwZW50YXRvbmljXCI6IFwiMTAwMDEwMTEwMDAxXCIsXG4gIFwibWFsa29zIHJhZ2FcIjogXCIxMDAxMDEwMDEwMTBcIixcbiAgXCJsb2NyaWFuIHBlbnRhdG9uaWNcIjogXCIxMDAxMDExMDAwMTBcIixcbiAgXCJtaW5vciBwZW50YXRvbmljXCI6IFwiMTAwMTAxMDEwMDEwXCIsXG4gIFwibWlub3Igc2l4IHBlbnRhdG9uaWNcIjogXCIxMDAxMDEwMTAxMDBcIixcbiAgXCJmbGF0IHRocmVlIHBlbnRhdG9uaWNcIjogXCIxMDExMDAwMTAxMDBcIixcbiAgXCJmbGF0IHNpeCBwZW50YXRvbmljXCI6IFwiMTAxMDEwMDExMDAwXCIsXG4gIHNjcmlhYmluOiBcIjExMDAxMDAxMDEwMFwiLFxuICBcIndob2xlIHRvbmUgcGVudGF0b25pY1wiOiBcIjEwMDAxMDEwMTAxMFwiLFxuICBcImx5ZGlhbiAjNVAgcGVudGF0b25pY1wiOiBcIjEwMDAxMDEwMTAwMVwiLFxuICBcImx5ZGlhbiBkb21pbmFudCBwZW50YXRvbmljXCI6IFwiMTAwMDEwMTEwMDEwXCIsXG4gIFwibWlub3IgIzdNIHBlbnRhdG9uaWNcIjogXCIxMDAxMDEwMTAwMDFcIixcbiAgXCJzdXBlciBsb2NyaWFuIHBlbnRhdG9uaWNcIjogXCIxMDAxMTAxMDAwMTBcIixcbiAgXCJtaW5vciBoZXhhdG9uaWNcIjogXCIxMDExMDEwMTAwMDFcIixcbiAgYXVnbWVudGVkOiBcIjEwMDExMDAxMTAwMVwiLFxuICBcIm1ham9yIGJsdWVzXCI6IFwiMTAxMTEwMDEwMTAwXCIsXG4gIHBpb25naW86IFwiMTAxMDAxMDEwMTEwXCIsXG4gIFwicHJvbWV0aGV1cyBuZW9wb2xpdGFuXCI6IFwiMTEwMDEwMTAwMTEwXCIsXG4gIHByb21ldGhldXM6IFwiMTAxMDEwMTAwMTEwXCIsXG4gIFwibXlzdGVyeSAjMVwiOiBcIjExMDAxMDEwMTAxMFwiLFxuICBcInNpeCB0b25lIHN5bW1ldHJpY1wiOiBcIjExMDAxMTAwMTEwMFwiLFxuICBcIndob2xlIHRvbmVcIjogXCIxMDEwMTAxMDEwMTBcIixcbiAgXCJtZXNzaWFlbidzIG1vZGUgIzVcIjogXCIxMTAwMDExMTAwMDFcIixcbiAgXCJtaW5vciBibHVlc1wiOiBcIjEwMDEwMTExMDAxMFwiLFxuICBcImxvY3JpYW4gbWFqb3JcIjogXCIxMDEwMTExMDEwMTBcIixcbiAgXCJkb3VibGUgaGFybW9uaWMgbHlkaWFuXCI6IFwiMTEwMDEwMTExMDAxXCIsXG4gIFwiaGFybW9uaWMgbWlub3JcIjogXCIxMDExMDEwMTEwMDFcIixcbiAgYWx0ZXJlZDogXCIxMTAxMTAxMDEwMTBcIixcbiAgXCJsb2NyaWFuICMyXCI6IFwiMTAxMTAxMTAxMDEwXCIsXG4gIFwibWl4b2x5ZGlhbiBiNlwiOiBcIjEwMTAxMTAxMTAxMFwiLFxuICBcImx5ZGlhbiBkb21pbmFudFwiOiBcIjEwMTAxMDExMDExMFwiLFxuICBseWRpYW46IFwiMTAxMDEwMTEwMTAxXCIsXG4gIFwibHlkaWFuIGF1Z21lbnRlZFwiOiBcIjEwMTAxMDEwMTEwMVwiLFxuICBcImRvcmlhbiBiMlwiOiBcIjExMDEwMTAxMDExMFwiLFxuICBcIm1lbG9kaWMgbWlub3JcIjogXCIxMDExMDEwMTAxMDFcIixcbiAgbG9jcmlhbjogXCIxMTAxMDExMDEwMTBcIixcbiAgdWx0cmFsb2NyaWFuOiBcIjExMDExMDEwMTEwMFwiLFxuICBcImxvY3JpYW4gNlwiOiBcIjExMDEwMTEwMDExMFwiLFxuICBcImF1Z21lbnRlZCBoZXB0YXRvbmljXCI6IFwiMTAwMTExMDExMDAxXCIsXG4gIFwicm9tYW5pYW4gbWlub3JcIjogXCIxMDExMDAxMTAxMTBcIixcbiAgXCJkb3JpYW4gIzRcIjogXCIxMDExMDAxMTAxMTBcIixcbiAgXCJseWRpYW4gZGltaW5pc2hlZFwiOiBcIjEwMTEwMDExMDEwMVwiLFxuICBwaHJ5Z2lhbjogXCIxMTAxMDEwMTEwMTBcIixcbiAgXCJsZWFkaW5nIHdob2xlIHRvbmVcIjogXCIxMDEwMTAxMDEwMTFcIixcbiAgXCJseWRpYW4gbWlub3JcIjogXCIxMDEwMTAxMTEwMTBcIixcbiAgXCJwaHJ5Z2lhbiBkb21pbmFudFwiOiBcIjExMDAxMTAxMTAxMFwiLFxuICBiYWxpbmVzZTogXCIxMTAxMDEwMTEwMDFcIixcbiAgXCJuZW9wb2xpdGFuIG1ham9yXCI6IFwiMTEwMTAxMDEwMTAxXCIsXG4gIGFlb2xpYW46IFwiMTAxMTAxMDExMDEwXCIsXG4gIFwiaGFybW9uaWMgbWFqb3JcIjogXCIxMDEwMTEwMTEwMDFcIixcbiAgXCJkb3VibGUgaGFybW9uaWMgbWFqb3JcIjogXCIxMTAwMTEwMTEwMDFcIixcbiAgZG9yaWFuOiBcIjEwMTEwMTAxMDExMFwiLFxuICBcImh1bmdhcmlhbiBtaW5vclwiOiBcIjEwMTEwMDExMTAwMVwiLFxuICBcImh1bmdhcmlhbiBtYWpvclwiOiBcIjEwMDExMDExMDExMFwiLFxuICBvcmllbnRhbDogXCIxMTAwMTExMDAxMTBcIixcbiAgZmxhbWVuY286IFwiMTEwMTEwMTEwMDEwXCIsXG4gIFwidG9kaSByYWdhXCI6IFwiMTEwMTAwMTExMDAxXCIsXG4gIG1peG9seWRpYW46IFwiMTAxMDExMDEwMTEwXCIsXG4gIHBlcnNpYW46IFwiMTEwMDExMTAxMDAxXCIsXG4gIG1ham9yOiBcIjEwMTAxMTAxMDEwMVwiLFxuICBlbmlnbWF0aWM6IFwiMTEwMDEwMTAxMDExXCIsXG4gIFwibWFqb3IgYXVnbWVudGVkXCI6IFwiMTAxMDExMDAxMTAxXCIsXG4gIFwibHlkaWFuICM5XCI6IFwiMTAwMTEwMTEwMTAxXCIsXG4gIFwibWVzc2lhZW4ncyBtb2RlICM0XCI6IFwiMTExMDAxMTExMDAxXCIsXG4gIFwicHVydmkgcmFnYVwiOiBcIjExMDAxMTExMTAwMVwiLFxuICBcInNwYW5pc2ggaGVwdGF0b25pY1wiOiBcIjExMDExMTAxMTAxMFwiLFxuICBiZWJvcDogXCIxMDEwMTEwMTAxMTFcIixcbiAgXCJiZWJvcCBtaW5vclwiOiBcIjEwMTExMTAxMDExMFwiLFxuICBcImJlYm9wIG1ham9yXCI6IFwiMTAxMDExMDExMTAxXCIsXG4gIFwiYmVib3AgbG9jcmlhblwiOiBcIjExMDEwMTExMTAxMFwiLFxuICBcIm1pbm9yIGJlYm9wXCI6IFwiMTAxMTAxMDExMDExXCIsXG4gIGRpbWluaXNoZWQ6IFwiMTAxMTAxMTAxMTAxXCIsXG4gIGljaGlrb3N1Y2hvOiBcIjEwMTAxMTExMDEwMVwiLFxuICBcIm1pbm9yIHNpeCBkaW1pbmlzaGVkXCI6IFwiMTAxMTAxMDExMTAxXCIsXG4gIFwiaGFsZi13aG9sZSBkaW1pbmlzaGVkXCI6IFwiMTEwMTEwMTEwMTEwXCIsXG4gIFwia2FmaSByYWdhXCI6IFwiMTAwMTExMDEwMTExXCIsXG4gIFwibWVzc2lhZW4ncyBtb2RlICM2XCI6IFwiMTAxMDExMTAxMDExXCIsXG4gIFwiY29tcG9zaXRlIGJsdWVzXCI6IFwiMTAxMTExMTEwMTEwXCIsXG4gIFwibWVzc2lhZW4ncyBtb2RlICMzXCI6IFwiMTAxMTEwMTExMDExXCIsXG4gIFwibWVzc2lhZW4ncyBtb2RlICM3XCI6IFwiMTExMTAxMTExMTAxXCIsXG4gIGNocm9tYXRpYzogXCIxMTExMTExMTExMTFcIixcbiAgaW9uaWFuOiBcIjEwMTAxMTAxMDEwMVwiLFxuICBtaW5vcjogXCIxMDExMDEwMTEwMTBcIixcbiAgS2FuYWthbmdpOiBcIjExMTAwMTAxMTEwMFwiLFxuICBSYXRuYW5naTogXCIxMTEwMDEwMTEwMTBcIixcbiAgR2FuYW11cnRpOiBcIjExMTAwMTAxMTAwMVwiLFxuICBWYW5hc3BhdGk6IFwiMTExMDAxMDEwMTEwXCIsXG4gIE1hbmF2YXRpOiBcIjExMTAwMTAxMDEwMVwiLFxuICBUYW5hcnVwaTogXCIxMTEwMDEwMTAwMTFcIixcbiAgU2VuYXZhdGk6IFwiMTEwMTAxMDExMTAwXCIsXG4gIEhhbnVtYXRvZGk6IFwiMTEwMTAxMDExMDEwXCIsXG4gIERoZW51a2E6IFwiMTEwMTAxMDExMDAxXCIsXG4gIE5hdGFrYXByaXlhOiBcIjExMDEwMTAxMDExMFwiLFxuICBLb2tpbGFwcml5YTogXCIxMTAxMDEwMTAxMDFcIixcbiAgUnVwYXZhdGk6IFwiMTEwMTAxMDEwMDExXCIsXG4gIEdheWFrYXByaXlhOiBcIjExMDAxMTAxMTEwMFwiLFxuICBWYWt1bGFiaGFyYW5hbTogXCIxMTAwMTEwMTEwMTBcIixcbiAgTWF5YW1hbGF2YWdvd2xhOiBcIjExMDAxMTAxMTAwMVwiLFxuICBDaGFrcmF2YWthbTogXCIxMTAwMTEwMTAxMTBcIixcbiAgU3VyeWFrYW50YW06IFwiMTEwMDExMDEwMTAxXCIsXG4gIEhhdGFrYW1iYXJpOiBcIjExMDAxMTAxMDAxMVwiLFxuICBKaGFua2FyYWRod2FuaTogXCIxMDExMDEwMTExMDBcIixcbiAgTmF0YWJoYWlyYXZpOiBcIjEwMTEwMTAxMTAxMFwiLFxuICBLZWVyYXZhbmk6IFwiMTAxMTAxMDExMDAxXCIsXG4gIEtoYXJhaGFyYXByaXlhOiBcIjEwMTEwMTAxMDExMFwiLFxuICBHb3VyaW1hbm9oYXJpOiBcIjEwMTEwMTAxMDEwMVwiLFxuICBWYXJ1bmFwcml5YTogXCIxMDExMDEwMTAwMTFcIixcbiAgTWFyYXJhbmphbmk6IFwiMTAxMDExMDExMTAwXCIsXG4gIENoYXJ1a2VzaTogXCIxMDEwMTEwMTEwMTBcIixcbiAgU2FyYXNhbmdpOiBcIjEwMTAxMTAxMTAwMVwiLFxuICBIYXJpa2FtYmhvamk6IFwiMTAxMDExMDEwMTEwXCIsXG4gIERoZWVyYXNhbmthcmFiYXJhbmFtOiBcIjEwMTAxMTAxMDEwMVwiLFxuICBOYWdhbmFuZGluaTogXCIxMDEwMTEwMTAwMTFcIixcbiAgWWFnYXByaXlhOiBcIjEwMDExMTAxMTEwMFwiLFxuICBSYWdhdmFyZGhpbmk6IFwiMTAwMTExMDExMDEwXCIsXG4gIEdhbmdleWFiaHVzaGFuaTogXCIxMDAxMTEwMTEwMDFcIixcbiAgVmFnYWRoZWVzd2FyaTogXCIxMDAxMTEwMTAxMTBcIixcbiAgU2h1bGluaTogXCIxMDAxMTEwMTAxMDFcIixcbiAgQ2hhbGFuYXRhOiBcIjEwMDExMTAxMDAxMVwiLFxuICBTYWxhZ2FtOiBcIjExMTAwMDExMTEwMFwiLFxuICBKYWxhcm5hdmFtOiBcIjExMTAwMDExMTAxMFwiLFxuICBKaGFsYXZhcmFsaTogXCIxMTEwMDAxMTEwMDFcIixcbiAgTmF2YW5lZXRhbTogXCIxMTEwMDAxMTAxMTBcIixcbiAgUGF2YW5pOiBcIjExMTAwMDExMDEwMVwiLFxuICBSYWdodXByaXlhOiBcIjExMTAwMDExMDAxMVwiLFxuICBHYXZhbWJob2RpOiBcIjExMDEwMDExMTEwMFwiLFxuICBCaGF2YXByaXlhOiBcIjExMDEwMDExMTAxMFwiLFxuICBTaHViaGFwYW50dXZhcmFsaTogXCIxMTAxMDAxMTEwMDFcIixcbiAgU2hhZHZpZGFtYXJnaW5pOiBcIjExMDEwMDExMDExMFwiLFxuICBTdXZhcm5hbmdpOiBcIjExMDEwMDExMDEwMVwiLFxuICBEaXZ5YW1hbmk6IFwiMTEwMTAwMTEwMDExXCIsXG4gIERoYXZhbGFtYmFyaTogXCIxMTAwMTAxMTExMDBcIixcbiAgTmFtYW5hcmF5YW5pOiBcIjExMDAxMDExMTAxMFwiLFxuICBLYW1hdmFyZGhpbmk6IFwiMTEwMDEwMTExMDAxXCIsXG4gIFJhbWFwcml5YTogXCIxMTAwMTAxMTAxMTBcIixcbiAgR2FtYW5hc2hyYW1hOiBcIjExMDAxMDExMDEwMVwiLFxuICBWaXNod2FtYmFyaTogXCIxMTAwMTAxMTAwMTFcIixcbiAgU2hhbWFsYW5naTogXCIxMDExMDAxMTExMDBcIixcbiAgU2hhbm11a2hhcHJpeWE6IFwiMTAxMTAwMTExMDEwXCIsXG4gIFNpbWhlbmRyYW1hZGh5YW1hbTogXCIxMDExMDAxMTEwMDFcIixcbiAgSGVtYXZhdGk6IFwiMTAxMTAwMTEwMTEwXCIsXG4gIERoYXJtYXZhdGk6IFwiMTAxMTAwMTEwMTAxXCIsXG4gIE5lZXRpbWF0aTogXCIxMDExMDAxMTAwMTFcIixcbiAgS2FudGFtYW5pOiBcIjEwMTAxMDExMTEwMFwiLFxuICBSaXNoYWJoYXByaXlhOiBcIjEwMTAxMDExMTAxMFwiLFxuICBMYXRhbmdpOiBcIjEwMTAxMDExMTAwMVwiLFxuICBWYWNoYXNwYXRpOiBcIjEwMTAxMDExMDExMFwiLFxuICBNZWNoYWthbHlhbmk6IFwiMTAxMDEwMTEwMTAxXCIsXG4gIENoaXRyYW1iYXJpOiBcIjEwMTAxMDExMDAxMVwiLFxuICBTdWNoYXJpdHJhOiBcIjEwMDExMDExMTEwMFwiLFxuICBcIkp5b3RpIHN3YXJ1cGluaVwiOiBcIjEwMDExMDExMTAxMFwiLFxuICBEaGF0dXZhcmRhbmk6IFwiMTAwMTEwMTExMDAxXCIsXG4gIE5hc2lrYWJodXNoaW5pOiBcIjEwMDExMDExMDExMFwiLFxuICBLb3NhbGFtOiBcIjEwMDExMDExMDEwMVwiLFxuICBSYXNpa2Fwcml5YTogXCIxMDAxMTAxMTAwMTFcIlxufTtcblxuLy8gc3JjL2dlbi9jaG9yZE1hcHMuanNvblxudmFyIGNob3JkTWFwc19kZWZhdWx0ID0ge1xuICBcIjV0aFwiOiBcIjEwMDAwMDAxMDAwMFwiLFxuICBcIk03IzVzdXM0XCI6IFwiMTAwMDAxMDAxMDAxXCIsXG4gIFwiNyM1c3VzNFwiOiBcIjEwMDAwMTAwMTAxMFwiLFxuICBzdXM0OiBcIjEwMDAwMTAxMDAwMFwiLFxuICBNN3N1czQ6IFwiMTAwMDAxMDEwMDAxXCIsXG4gIFwiN3N1czRcIjogXCIxMDAwMDEwMTAwMTBcIixcbiAgXCI3bm81XCI6IFwiMTAwMDEwMDAwMDEwXCIsXG4gIGF1ZzogXCIxMDAwMTAwMDEwMDBcIixcbiAgTTdiNjogXCIxMDAwMTAwMDEwMDFcIixcbiAgXCJtYWo3IzVcIjogXCIxMDAwMTAwMDEwMDFcIixcbiAgXCI3IzVcIjogXCIxMDAwMTAwMDEwMTBcIixcbiAgXCI3YjEzXCI6IFwiMTAwMDEwMDAxMDEwXCIsXG4gIE06IFwiMTAwMDEwMDEwMDAwXCIsXG4gIG1hajc6IFwiMTAwMDEwMDEwMDAxXCIsXG4gIFwiN3RoXCI6IFwiMTAwMDEwMDEwMDEwXCIsXG4gIFwiNnRoXCI6IFwiMTAwMDEwMDEwMTAwXCIsXG4gIFwiN2FkZDZcIjogXCIxMDAwMTAwMTAxMTBcIixcbiAgXCI3YjZcIjogXCIxMDAwMTAwMTEwMTBcIixcbiAgTWI1OiBcIjEwMDAxMDEwMDAwMFwiLFxuICBNN2I1OiBcIjEwMDAxMDEwMDAwMVwiLFxuICBcIjdiNVwiOiBcIjEwMDAxMDEwMDAxMFwiLFxuICBcIm1haiM0XCI6IFwiMTAwMDEwMTEwMDAxXCIsXG4gIFwiNyMxMVwiOiBcIjEwMDAxMDExMDAxMFwiLFxuICBcIk02IzExXCI6IFwiMTAwMDEwMTEwMTAwXCIsXG4gIFwiNyMxMWIxM1wiOiBcIjEwMDAxMDExMTAxMFwiLFxuICBcIm0jNVwiOiBcIjEwMDEwMDAwMTAwMFwiLFxuICBtYjZNNzogXCIxMDAxMDAwMDEwMDFcIixcbiAgXCJtNyM1XCI6IFwiMTAwMTAwMDAxMDEwXCIsXG4gIG06IFwiMTAwMTAwMDEwMDAwXCIsXG4gIFwibS9tYTdcIjogXCIxMDAxMDAwMTAwMDFcIixcbiAgbTc6IFwiMTAwMTAwMDEwMDEwXCIsXG4gIG02OiBcIjEwMDEwMDAxMDEwMFwiLFxuICBtTWFqN2I2OiBcIjEwMDEwMDAxMTAwMVwiLFxuICBkaW06IFwiMTAwMTAwMTAwMDAwXCIsXG4gIG9NNzogXCIxMDAxMDAxMDAwMDFcIixcbiAgbTdiNTogXCIxMDAxMDAxMDAwMTBcIixcbiAgZGltNzogXCIxMDAxMDAxMDAxMDBcIixcbiAgbzdNNzogXCIxMDAxMDAxMDAxMDFcIixcbiAgXCI0dGhcIjogXCIxMDAxMDEwMDAwMTBcIixcbiAgbWFkZDQ6IFwiMTAwMTAxMDEwMDAwXCIsXG4gIG03YWRkMTE6IFwiMTAwMTAxMDEwMDEwXCIsXG4gIFwiK2FkZCM5XCI6IFwiMTAwMTEwMDAxMDAwXCIsXG4gIFwiNyM1IzlcIjogXCIxMDAxMTAwMDEwMTBcIixcbiAgXCI3IzlcIjogXCIxMDAxMTAwMTAwMTBcIixcbiAgXCIxMyM5XCI6IFwiMTAwMTEwMDEwMTEwXCIsXG4gIFwiNyM5YjEzXCI6IFwiMTAwMTEwMDExMDEwXCIsXG4gIFwibWFqNyM5IzExXCI6IFwiMTAwMTEwMTEwMDAxXCIsXG4gIFwiNyM5IzExXCI6IFwiMTAwMTEwMTEwMDEwXCIsXG4gIFwiMTMjOSMxMVwiOiBcIjEwMDExMDExMDExMFwiLFxuICBcIjcjOSMxMWIxM1wiOiBcIjEwMDExMDExMTAxMFwiLFxuICBzdXMyOiBcIjEwMTAwMDAxMDAwMFwiLFxuICBcIk05IzVzdXM0XCI6IFwiMTAxMDAxMDAxMDAxXCIsXG4gIHN1czI0OiBcIjEwMTAwMTAxMDAwMFwiLFxuICBNOXN1czQ6IFwiMTAxMDAxMDEwMDAxXCIsXG4gIFwiMTF0aFwiOiBcIjEwMTAwMTAxMDAxMFwiLFxuICBcIjlzdXM0XCI6IFwiMTAxMDAxMDEwMDEwXCIsXG4gIFwiMTNzdXM0XCI6IFwiMTAxMDAxMDEwMTEwXCIsXG4gIFwiOW5vNVwiOiBcIjEwMTAxMDAwMDAxMFwiLFxuICBcIjEzbm81XCI6IFwiMTAxMDEwMDAwMTEwXCIsXG4gIFwiTSM1YWRkOVwiOiBcIjEwMTAxMDAwMTAwMFwiLFxuICBcIm1hajkjNVwiOiBcIjEwMTAxMDAwMTAwMVwiLFxuICBcIjkjNVwiOiBcIjEwMTAxMDAwMTAxMFwiLFxuICBcIjliMTNcIjogXCIxMDEwMTAwMDEwMTBcIixcbiAgTWFkZDk6IFwiMTAxMDEwMDEwMDAwXCIsXG4gIG1hajk6IFwiMTAxMDEwMDEwMDAxXCIsXG4gIFwiOXRoXCI6IFwiMTAxMDEwMDEwMDEwXCIsXG4gIFwiNi85XCI6IFwiMTAxMDEwMDEwMTAwXCIsXG4gIG1hajEzOiBcIjEwMTAxMDAxMDEwMVwiLFxuICBNN2FkZDEzOiBcIjEwMTAxMDAxMDEwMVwiLFxuICBcIjEzdGhcIjogXCIxMDEwMTAwMTAxMTBcIixcbiAgTTliNTogXCIxMDEwMTAxMDAwMDFcIixcbiAgXCI5YjVcIjogXCIxMDEwMTAxMDAwMTBcIixcbiAgXCIxM2I1XCI6IFwiMTAxMDEwMTAwMTEwXCIsXG4gIFwiOSM1IzExXCI6IFwiMTAxMDEwMTAxMDEwXCIsXG4gIFwibWFqOSMxMVwiOiBcIjEwMTAxMDExMDAwMVwiLFxuICBcIjkjMTFcIjogXCIxMDEwMTAxMTAwMTBcIixcbiAgXCI2OSMxMVwiOiBcIjEwMTAxMDExMDEwMFwiLFxuICBcIk0xMyMxMVwiOiBcIjEwMTAxMDExMDEwMVwiLFxuICBcIjEzIzExXCI6IFwiMTAxMDEwMTEwMTEwXCIsXG4gIFwiOSMxMWIxM1wiOiBcIjEwMTAxMDExMTAxMFwiLFxuICBcIm05IzVcIjogXCIxMDExMDAwMDEwMTBcIixcbiAgbWFkZDk6IFwiMTAxMTAwMDEwMDAwXCIsXG4gIG1NOTogXCIxMDExMDAwMTAwMDFcIixcbiAgbTk6IFwiMTAxMTAwMDEwMDEwXCIsXG4gIG02OTogXCIxMDExMDAwMTAxMDBcIixcbiAgbTEzOiBcIjEwMTEwMDAxMDExMFwiLFxuICBtTWFqOWI2OiBcIjEwMTEwMDAxMTAwMVwiLFxuICBtOWI1OiBcIjEwMTEwMDEwMDAxMFwiLFxuICBtMTFBOiBcIjEwMTEwMTAwMTAxMFwiLFxuICBtMTE6IFwiMTAxMTAxMDEwMDEwXCIsXG4gIGI5c3VzOiBcIjExMDAwMTAxMDAxMFwiLFxuICBcIjExYjlcIjogXCIxMTAwMDEwMTAwMTBcIixcbiAgXCI3c3VzNGI5YjEzXCI6IFwiMTEwMDAxMDExMDEwXCIsXG4gIGFsdDc6IFwiMTEwMDEwMDAwMDEwXCIsXG4gIFwiNyM1YjlcIjogXCIxMTAwMTAwMDEwMTBcIixcbiAgTWFkZGI5OiBcIjExMDAxMDAxMDAwMFwiLFxuICBNN2I5OiBcIjExMDAxMDAxMDAwMVwiLFxuICBcIjdiOVwiOiBcIjExMDAxMDAxMDAxMFwiLFxuICBcIjEzYjlcIjogXCIxMTAwMTAwMTAxMTBcIixcbiAgXCI3YjliMTNcIjogXCIxMTAwMTAwMTEwMTBcIixcbiAgXCI3IzViOSMxMVwiOiBcIjExMDAxMDEwMTAxMFwiLFxuICBcIjdiOSMxMVwiOiBcIjExMDAxMDExMDAxMFwiLFxuICBcIjEzYjkjMTFcIjogXCIxMTAwMTAxMTAxMTBcIixcbiAgXCI3YjliMTMjMTFcIjogXCIxMTAwMTAxMTEwMTBcIixcbiAgbWI2Yjk6IFwiMTEwMTAwMDAxMDAwXCIsXG4gIFwiN2I5IzlcIjogXCIxMTAxMTAwMTAwMTBcIlxufTtcblxuLy8gc3JjL3NjYWxlc0FuZENob3Jkcy50c1xudmFyIERFRkFVTFRfT0NUQVZFID0gNDtcbnZhciBzaGFycFRvRmxhdE1hcCA9IHtcbiAgXCJDI1wiOiBcIkRiXCIsXG4gIFwiRCNcIjogXCJFYlwiLFxuICBcIkYjXCI6IFwiR2JcIixcbiAgXCJHI1wiOiBcIkFiXCIsXG4gIFwiQSNcIjogXCJCYlwiLFxuICBcIkNCXCI6IFwiQlwiLFxuICBcIkZCXCI6IFwiRVwiLFxuICBcIkUjXCI6IFwiRlwiLFxuICBcIkIjXCI6IFwiQ1wiXG59O1xuZnVuY3Rpb24gc2hhcnBUb0ZsYXQocm9vdCkge1xuICByZXR1cm4gc2hhcnBUb0ZsYXRNYXBbcm9vdC50b1VwcGVyQ2FzZSgpXSB8fCByb290LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcm9vdC5zbGljZSgxKTtcbn1cbnZhciBDSFJPTUFUSUMgPSBbXG4gIFwiQ1wiLFxuICBcIkRiXCIsXG4gIFwiRFwiLFxuICBcIkViXCIsXG4gIFwiRVwiLFxuICBcIkZcIixcbiAgXCJHYlwiLFxuICBcIkdcIixcbiAgXCJBYlwiLFxuICBcIkFcIixcbiAgXCJCYlwiLFxuICBcIkJcIlxuXTtcbmZ1bmN0aW9uIGdldENocm9tYXRpYyhyb290LCBvY3RhdmUpIHtcbiAgY29uc3QgaW5kZXggPSBDSFJPTUFUSUMuaW5kZXhPZihyb290KTtcbiAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgJHtyb290fSBpcyBub3QgYSB2YWxpZCByb290IG5vdGVgKTtcbiAgfVxuICBjb25zdCBvMSA9IENIUk9NQVRJQy5tYXAoKG4pID0+IG4gKyBvY3RhdmUpO1xuICBjb25zdCBvMiA9IENIUk9NQVRJQy5tYXAoKG4pID0+IG4gKyAob2N0YXZlICsgMSkpO1xuICBjb25zdCBjID0gbzEuY29uY2F0KG8yKTtcbiAgcmV0dXJuIGMuc2xpY2UoaW5kZXgpO1xufVxudmFyIHNjYWxlTWFwID0gc2NhbGVNYXBzX2RlZmF1bHQ7XG52YXIgY2hvcmRNYXAgPSBjaG9yZE1hcHNfZGVmYXVsdDtcbmZ1bmN0aW9uIF9nZXROb3Rlc0ZvclNjYWxlT3JDaG9yZCh7IHNjYWxlOiBzY2FsZTIsIGNob3JkOiBjaG9yZDIgfSkge1xuICBjb25zdCBpbnB1dCA9IHNjYWxlMiB8fCBjaG9yZDI7XG4gIGNvbnN0IFNDQUxFX09SX0NIT1JEID0gc2NhbGUyID8gXCJzY2FsZVwiIDogXCJjaG9yZFwiO1xuICBpZiAodHlwZW9mIGlucHV0ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGAke2lucHV0fSBpcyBub3QgYSB2YWxpZCBpbnB1dCBmb3IgJHtTQ0FMRV9PUl9DSE9SRH1gKTtcbiAgfVxuICBjb25zdCByb290T2N0YXZlU2NhbGUgPSBpbnB1dC50cmltKCk7XG4gIGNvbnN0IGluZGV4T2ZGaXJzdFNwYWNlID0gcm9vdE9jdGF2ZVNjYWxlLmluZGV4T2YoXCIgXCIpO1xuICBsZXQgc2NhbGVPckNob3JkO1xuICBsZXQgcm9vdE9jdGF2ZTtcbiAgaWYgKGluZGV4T2ZGaXJzdFNwYWNlID09PSAtMSkge1xuICAgIHNjYWxlT3JDaG9yZCA9IHJvb3RPY3RhdmVTY2FsZS5zbGljZSgxKTtcbiAgICByb290T2N0YXZlID0gcm9vdE9jdGF2ZVNjYWxlWzBdO1xuICAgIGlmIChyb290T2N0YXZlU2NhbGVbMV0gPT09IFwiYlwiIHx8IHJvb3RPY3RhdmVTY2FsZVsxXSA9PT0gXCIjXCIpIHtcbiAgICAgIHNjYWxlT3JDaG9yZCA9IHJvb3RPY3RhdmVTY2FsZS5zbGljZSgyKTtcbiAgICAgIHJvb3RPY3RhdmUgKz0gcm9vdE9jdGF2ZVNjYWxlWzFdO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzY2FsZU9yQ2hvcmQgPSByb290T2N0YXZlU2NhbGUuc2xpY2UoaW5kZXhPZkZpcnN0U3BhY2UgPT09IC0xID8gMSA6IGluZGV4T2ZGaXJzdFNwYWNlICsgMSk7XG4gICAgcm9vdE9jdGF2ZSA9IHJvb3RPY3RhdmVTY2FsZS5zbGljZSgwLCBpbmRleE9mRmlyc3RTcGFjZSk7XG4gIH1cbiAgY29uc3Qgcm9vdCA9IHNoYXJwVG9GbGF0KHJvb3RPY3RhdmUucmVwbGFjZSgvXFxkL2csIFwiXCIpKTtcbiAgY29uc3Qgb2N0YXZlTnVtYmVyID0gcm9vdE9jdGF2ZS5yZXBsYWNlKC9cXEQvZywgXCJcIik7XG4gIGNvbnN0IG9jdGF2ZSA9IG9jdGF2ZU51bWJlciAhPT0gXCJcIiA/ICtyb290T2N0YXZlLnJlcGxhY2UoL1xcRC9nLCBcIlwiKSA6IERFRkFVTFRfT0NUQVZFO1xuICBpZiAoaXNOYU4ob2N0YXZlKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgJHtyb290T2N0YXZlWzBdfSBkb2VzIG5vdCBoYXZlIGEgdmFsaWQgb2N0YXZlYCk7XG4gIH1cbiAgaWYgKCFzY2FsZU1hcFtzY2FsZU9yQ2hvcmRdICYmICFjaG9yZE1hcFtzY2FsZU9yQ2hvcmRdKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGAke3Jvb3RPY3RhdmVTY2FsZX0gaXMgbm90IGEgdmFsaWQgJHtTQ0FMRV9PUl9DSE9SRH1gKTtcbiAgfVxuICBjb25zdCBjaHJvbWEgPSBnZXRDaHJvbWF0aWMocm9vdCwgb2N0YXZlKTtcbiAgY29uc3QgYWNjID0gW107XG4gIGxldCBwMSA9IDAsIHAyID0gMDtcbiAgY29uc3QgbWFwID0gc2NhbGUyID8gc2NhbGVNYXAgOiBjaG9yZE1hcDtcbiAgd2hpbGUgKHAxIDwgbWFwW3NjYWxlT3JDaG9yZF0ubGVuZ3RoKSB7XG4gICAgaWYgKG1hcFtzY2FsZU9yQ2hvcmRdW3AxXSA9PT0gXCIxXCIpIHtcbiAgICAgIGFjYy5wdXNoKGNocm9tYVtwMl0pO1xuICAgIH1cbiAgICBwMSsrO1xuICAgIHAyKys7XG4gIH1cbiAgcmV0dXJuIGFjYztcbn1cbmZ1bmN0aW9uIGlubGluZUNob3JkKHJvb3RDaG9yZF9PY3QpIHtcbiAgY29uc3QgQjlTVVMgPSBcImI5c3VzXCI7XG4gIGxldCByb290LCBjaG9yZDIsIG9jdGF2ZSA9IERFRkFVTFRfT0NUQVZFO1xuICBpZiAocm9vdENob3JkX09jdC5pbmNsdWRlcyhCOVNVUykpIHtcbiAgICBjaG9yZDIgPSBCOVNVUztcbiAgICByb290ID0gcm9vdENob3JkX09jdC5zbGljZSgwLCByb290Q2hvcmRfT2N0LmluZGV4T2YoQjlTVVMpKTtcbiAgfSBlbHNlIHtcbiAgICByb290ID0gcm9vdENob3JkX09jdFswXTtcbiAgICBjaG9yZDIgPSByb290Q2hvcmRfT2N0LnNsaWNlKDEpO1xuICAgIGlmIChyb290Q2hvcmRfT2N0WzFdID09PSBcImJcIiB8fCByb290Q2hvcmRfT2N0WzFdID09PSBcIiNcIikge1xuICAgICAgcm9vdCArPSByb290Q2hvcmRfT2N0WzFdO1xuICAgICAgY2hvcmQyID0gcm9vdENob3JkX09jdC5zbGljZSgyKTtcbiAgICB9XG4gIH1cbiAgaWYgKHJvb3RDaG9yZF9PY3QuaW5jbHVkZXMoXCJfXCIpKSB7XG4gICAgb2N0YXZlID0gK3Jvb3RDaG9yZF9PY3Quc3BsaXQoXCJfXCIpWzFdO1xuICAgIGNob3JkMiA9IGNob3JkMi5zbGljZSgwLCBjaG9yZDIuaW5kZXhPZihcIl9cIikpO1xuICB9XG4gIHJldHVybiBfZ2V0Tm90ZXNGb3JTY2FsZU9yQ2hvcmQoeyBjaG9yZDogcm9vdCArIG9jdGF2ZSArIFwiIFwiICsgY2hvcmQyIH0pO1xufVxuZnVuY3Rpb24gY2hvcmRzKCkge1xuICByZXR1cm4gT2JqZWN0LmtleXMoY2hvcmRNYXApO1xufVxuZnVuY3Rpb24gc2NhbGVzKCkge1xuICByZXR1cm4gT2JqZWN0LmtleXMoc2NhbGVNYXApO1xufVxuZnVuY3Rpb24gY2hvcmQoY2hvcmQyKSB7XG4gIHJldHVybiBfZ2V0Tm90ZXNGb3JTY2FsZU9yQ2hvcmQoeyBjaG9yZDogY2hvcmQyIH0pO1xufVxuZnVuY3Rpb24gc2NhbGUoc2NhbGUyKSB7XG4gIHJldHVybiBfZ2V0Tm90ZXNGb3JTY2FsZU9yQ2hvcmQoeyBzY2FsZTogc2NhbGUyIH0pO1xufVxuZnVuY3Rpb24gZ2V0SW5kaWNlc0Zyb21TY2FsZShzY2FsZU9yQml0bWFwKSB7XG4gIGNvbnN0IHN0ciA9IHNjYWxlTWFwW3NjYWxlT3JCaXRtYXBdIHx8IHNjYWxlT3JCaXRtYXA7XG4gIGNvbnN0IGludGVydmFscyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHJbaV0gPT09IFwiMVwiKSB7XG4gICAgICBpbnRlcnZhbHMucHVzaChpKTtcbiAgICB9XG4gIH1cbiAgaW50ZXJ2YWxzLnB1c2goMTIpO1xuICByZXR1cm4gaW50ZXJ2YWxzO1xufVxuZXhwb3J0IHtcbiAgY2hvcmQsXG4gIGNob3JkcyxcbiAgZ2V0SW5kaWNlc0Zyb21TY2FsZSxcbiAgaW5saW5lQ2hvcmQsXG4gIHNjYWxlLFxuICBzY2FsZXNcbn07XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIGV1Y2xpZGVhbihvbnNldHMsIHN0ZXBzLCByb3RhdGlvbiA9IDApIHtcbiAgY29uc3QgayA9IE1hdGgubWF4KDAsIHBhcnNlSW50KG9uc2V0cywgMTApIHx8IDApO1xuICBjb25zdCBuID0gTWF0aC5tYXgoMSwgcGFyc2VJbnQoc3RlcHMsIDEwKSB8fCAxKTtcbiAgaWYgKGsgPD0gMCkgcmV0dXJuICctJy5yZXBlYXQobik7XG4gIGlmIChrID49IG4pIHJldHVybiAneCcucmVwZWF0KG4pO1xuXG4gIGNvbnN0IG91dCA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkgKz0gMSkge1xuICAgIG91dC5wdXNoKCgoaSAqIGspICUgbikgPCBrID8gJ3gnIDogJy0nKTtcbiAgfVxuICBjb25zdCByID0gKChwYXJzZUludChyb3RhdGlvbiwgMTApIHx8IDApICUgbiArIG4pICUgbjtcbiAgaWYgKHIgPT09IDApIHJldHVybiBvdXQuam9pbignJyk7XG4gIHJldHVybiBvdXQuc2xpY2UoLXIpLmNvbmNhdChvdXQuc2xpY2UoMCwgLXIpKS5qb2luKCcnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRXVjbGlkZWFuVG9rZW4odG9rZW4pIHtcbiAgY29uc3QgbSA9IFN0cmluZyh0b2tlbiB8fCAnJykubWF0Y2goL14oPzpbYS16QS1aX11cXHcqKT9cXCgoXFxkKylcXHMqLFxccyooXFxkKykoPzpcXHMqLFxccyooLT9cXGQrKSk/XFwpJC8pO1xuICBpZiAoIW0pIHJldHVybiBudWxsO1xuICByZXR1cm4ge1xuICAgIG9uc2V0czogcGFyc2VJbnQobVsxXSwgMTApLFxuICAgIHN0ZXBzOiBwYXJzZUludChtWzJdLCAxMCksXG4gICAgcm90YXRpb246IG1bM10gPyBwYXJzZUludChtWzNdLCAxMCkgOiAwLFxuICB9O1xufVxuIiwgImltcG9ydCB7IGlubGluZUNob3JkIH0gZnJvbSAnaGFybW9uaWNzJztcbmltcG9ydCB7IGV1Y2xpZGVhbiwgcGFyc2VFdWNsaWRlYW5Ub2tlbiB9IGZyb20gJy4vZXVjbGlkZWFuLmpzJztcblxuZXhwb3J0IGNvbnN0IFJFX1NFUEFSQVRPUiA9IC9cXHwvO1xuZXhwb3J0IGNvbnN0IFJFX1BBVFRFUk4gPSAvXig/Olt4Xy1dfFxcWy4rP1xcXSkrJC87XG5leHBvcnQgY29uc3QgUkVfTlVNQkVSID0gL14oPzpcXC4/XFxkK3xcXGQrKD86XFwuXFxkKyk/KSQvO1xuZXhwb3J0IGNvbnN0IFJFX0NIT1JEID0gL15bYS1nQS1HXVteI1xcc10qXFxkKyg/OlxcLlxcLik/JC87XG5leHBvcnQgY29uc3QgUkVfTk9URSA9IC9eW2EtZ0EtR11bI2JdP1xcZCskLztcbmV4cG9ydCBjb25zdCBSRV9NT0RFID0gL14oPyFbaXZJVl17MSwzfSlbYS16XXsyLH0vO1xuZXhwb3J0IGNvbnN0IFJFX1BST0cgPSAvXltpdklWXXsxLDN9XHUwMEIwPyQvO1xuZXhwb3J0IGNvbnN0IFJFX1RSSU0gPSAvXFwuKyQvO1xuZXhwb3J0IGNvbnN0IFJFX0RFR1JFRSA9IC9eXFxkKyg/OlxcLlxcLlxcZCspPyQvO1xuZXhwb3J0IGNvbnN0IFJFX1BBVFRFUk5fUkVGID0gL14mW2EtekEtWl9dXFx3KiQvO1xuXG5jb25zdCBDQUNIRSA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gc3BsaXQodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycgfHwgIXZhbHVlLmxlbmd0aCkgcmV0dXJuIFtdO1xuXG4gIGNvbnN0IG91dCA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgY2ggPSB2YWx1ZVtpXTtcblxuICAgIGlmIChjaCA9PT0gJ1snKSB7XG4gICAgICBjb25zdCBlbmQgPSB2YWx1ZS5pbmRleE9mKCddJywgaSArIDEpO1xuICAgICAgaWYgKGVuZCA8IDApIGJyZWFrO1xuICAgICAgb3V0LnB1c2godmFsdWUuc2xpY2UoaSArIDEsIGVuZCkuc3BsaXQoJycpKTtcbiAgICAgIGkgPSBlbmQ7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBvdXQucHVzaChjaCk7XG4gIH1cbiAgcmV0dXJuIG91dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxldmVsKHZhbHVlKSB7XG4gIGlmICghQ0FDSEVbdmFsdWVdKSB7XG4gICAgaWYgKHZhbHVlLmluY2x1ZGVzKCclJykpIHtcbiAgICAgIENBQ0hFW3ZhbHVlXSA9IDEyNyAqIHBhcnNlRmxvYXQoYC4ke3ZhbHVlfWApO1xuICAgIH0gZWxzZSBpZiAodmFsdWUuaW5jbHVkZXMoJy8nKSkge1xuICAgICAgY29uc3QgW2EsIGJdID0gdmFsdWUuc3BsaXQoJy8nKTtcblxuICAgICAgQ0FDSEVbdmFsdWVdID0gYSAvIGI7XG4gICAgfSBlbHNlIGlmICh2YWx1ZS5pbmNsdWRlcygnKicpKSB7XG4gICAgICBjb25zdCBbYSwgYl0gPSB2YWx1ZS5zcGxpdCgnKicpO1xuXG4gICAgICBDQUNIRVt2YWx1ZV0gPSBhICogYjtcbiAgICB9IGVsc2Uge1xuICAgICAgQ0FDSEVbdmFsdWVdID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBDQUNIRVt2YWx1ZV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZShyZSwgdmFsdWUpIHtcbiAgaWYgKCFDQUNIRVtyZS5zb3VyY2UgKyB2YWx1ZV0pIHtcbiAgICBDQUNIRVtyZS5zb3VyY2UgKyB2YWx1ZV0gPSByZS50ZXN0KHZhbHVlKTtcbiAgfVxuICByZXR1cm4gQ0FDSEVbcmUuc291cmNlICsgdmFsdWVdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcm9ncmVzc2lvbih2YWx1ZSkge1xuICByZXR1cm4gdmFsaWRhdGUoUkVfUFJPRywgdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEZWdyZWUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbGlkYXRlKFJFX0RFR1JFRSwgdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXR0ZXJuKHZhbHVlKSB7XG4gIHJldHVybiB2YWxpZGF0ZShSRV9QQVRURVJOLCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICByZXR1cm4gdmFsaWRhdGUoUkVfTlVNQkVSLCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Nob3JkKHZhbHVlKSB7XG4gIHJldHVybiB2YWxpZGF0ZShSRV9DSE9SRCwgdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOb3RlKHZhbHVlKSB7XG4gIHJldHVybiB2YWxpZGF0ZShSRV9OT1RFLCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc01vZGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbGlkYXRlKFJFX01PREUsIHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFR5cGUodmFsdWUpIHtcbiAgY29uc3Qga2V5ID0gYFQke3ZhbHVlfWA7XG4gIGlmICghQ0FDSEVba2V5XSkge1xuICAgIGlmIChpc05vdGUodmFsdWUpKSBDQUNIRVtrZXldID0gJ25vdGUnO1xuICAgIGVsc2UgaWYgKGlzQ2hvcmQodmFsdWUpKSBDQUNIRVtrZXldID0gJ2Nob3JkJztcbiAgICBlbHNlIGlmIChpc1BhdHRlcm4odmFsdWUpKSBDQUNIRVtrZXldID0gJ3BhdHRlcm4nO1xuICAgIGVsc2UgaWYgKGlzTW9kZSh2YWx1ZSkpIENBQ0hFW2tleV0gPSAnbW9kZSc7XG4gICAgZWxzZSBpZiAoaXNOdW1iZXIodmFsdWUpKSBDQUNIRVtrZXldID0gJ251bWJlcic7XG4gICAgZWxzZSBDQUNIRVtrZXldID0gJ3ZhbHVlJztcbiAgfVxuICByZXR1cm4gQ0FDSEVba2V5XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybShleHByZXNzaW9uKSB7XG4gIGlmICghZXhwcmVzc2lvbiB8fCB0eXBlb2YgZXhwcmVzc2lvbiAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGluZyBhIHZhbGlkIHN0cmluZywgZ2l2ZW4gJyR7ZXhwcmVzc2lvbn0nYCk7XG4gIH1cblxuICBpZiAoQ0FDSEVbYCQke2V4cHJlc3Npb259YF0pIHJldHVybiBDQUNIRVtgJCR7ZXhwcmVzc2lvbn1gXTtcblxuICBjb25zdCB0b2tlbnMgPSBleHByZXNzaW9uLnNwbGl0KC9cXHMrLyk7XG5cbiAgaWYgKCF0b2tlbnMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RpbmcgYSB2YWxpZCBleHByZXNzaW9uLCBnaXZlbiAnJHtleHByZXNzaW9ufSdgKTtcbiAgfVxuXG4gIGNvbnN0IGFzdCA9IFtdO1xuICBjb25zdCBjYXJyeSA9IFtdO1xuICBjb25zdCBpZ25vcmUgPSBuZXcgU2V0KCk7XG5cbiAgZnVuY3Rpb24gYWRkKHR5cGUsIHZhbHVlKSB7XG4gICAgY29uc3QgaXRlbSA9IHsgdHlwZSwgdmFsdWUgfTtcblxuICAgIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpdGVtLnZhbHVlID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IGxldmVsKHZhbHVlKSA6IHZhbHVlO1xuICAgIH1cblxuICAgIGlmICh0eXBlID09PSAnY2hvcmQnICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGl0ZW0udmFsdWUgPSBpbmxpbmVDaG9yZCh2YWx1ZS5yZXBsYWNlKFJFX1RSSU0sICcnKSk7XG5cbiAgICAgIGlmICh2YWx1ZS5pbmNsdWRlcygnLi4nKSkge1xuICAgICAgICBpdGVtLnVuZm9sZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09ICd2YWx1ZScgJiYgdmFsdWUuaW5kZXhPZigneCcpID4gLTEpIHtcbiAgICAgIGNvbnN0IHggPSB2YWx1ZS5zcGxpdCgneCcpO1xuXG4gICAgICBpZiAoIShpc051bWJlcih4WzBdKSAmJiBpc051bWJlcih4WzFdKSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RpbmcgdmFsaWQgbnVtYmVycyBmb3IgJHt0eXBlfSwgZ2l2ZW4gJyR7dmFsdWV9J2ApO1xuICAgICAgfVxuXG4gICAgICBpdGVtLnZhbHVlID0gcGFyc2VJbnQoeFswXSwgMTApO1xuICAgICAgaXRlbS5yZXBlYXQgPSBwYXJzZUludCh4WzFdLCAxMCk7XG4gICAgICBpdGVtLnR5cGUgPSAnbnVtYmVyJztcbiAgICB9XG5cbiAgICBhc3QucHVzaChpdGVtKTtcbiAgfVxuXG4gIHRva2Vucy5yZWR1Y2UoKHByZXYsIGN1ciwgaSkgPT4ge1xuICAgIGlmIChpZ25vcmUuaGFzKGkpKSByZXR1cm4gcHJldjtcblxuICAgIGxldCB0eXBlO1xuXG4gICAgY29uc3QgbmV4dCA9IHRva2Vuc1tpICsgMV07XG4gICAgY29uc3QgbGFzdCA9IGFzdFthc3QubGVuZ3RoIC0gMV0gfHwge307XG5cbiAgICBpZiAoUkVfU0VQQVJBVE9SLnRlc3QoY3VyKSkge1xuICAgICAgYWRkKCdjaG9yZCcsIGN1ci5zcGxpdChSRV9TRVBBUkFUT1IpKTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY3VyID09PSAnc3RyaW5nJyAmJiAoXG4gICAgICAoY3VyLmluY2x1ZGVzKCcvJykgJiYgY3VyLmluZGV4T2YoJy8nKSA+IDApXG4gICAgICB8fCAoY3VyLmluY2x1ZGVzKCcqJykgJiYgY3VyLmluZGV4T2YoJyonKSA+IDApXG4gICAgICB8fCAoY3VyLmluY2x1ZGVzKCclJykgJiYgY3VyLmluZGV4T2YoJyUnKSA+IDApXG4gICAgKSkge1xuICAgICAgYWRkKCdudW1iZXInLCBsZXZlbChjdXIpKTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmIChjdXIgPT09ICcqKicpIHtcbiAgICAgIGNvbnN0IGRlZ3JlZXMgPSBbXTtcbiAgICAgIGxldCBvZmZzZXQgPSBpICsgMTtcblxuICAgICAgd2hpbGUgKHRva2Vuc1tvZmZzZXRdICYmIGlzRGVncmVlKHRva2Vuc1tvZmZzZXRdKSkge1xuICAgICAgICBkZWdyZWVzLnB1c2godG9rZW5zW29mZnNldF0pO1xuICAgICAgICBpZ25vcmUuYWRkKG9mZnNldCk7XG4gICAgICAgIG9mZnNldCArPSAxO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWRlZ3JlZXMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyBkZWdyZWUgZXhwcmVzc2lvbiBhZnRlciAnKionLCBnaXZlbiAnJHt0b2tlbnMuc2xpY2UoMCwgaSArIDEpLmpvaW4oJyAnKX0nYCk7XG4gICAgICB9XG5cbiAgICAgIGFkZCgnZGVncmVlcycsIGRlZ3JlZXMpO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjdXIgPT09ICdzdHJpbmcnICYmIGN1ci5jaGFyQXQoKSA9PT0gJyonKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYERlcHJlY2F0ZWQgcmVwZWF0IHN5bnRheCAnJHtjdXJ9Jy4gVXNlICd4TicgaW5zdGVhZGApO1xuICAgIH1cblxuICAgIGlmIChjdXIuaW5kZXhPZignJScpID4gLTEpIHtcbiAgICAgIGlmIChjdXIgPT09ICclJykge1xuICAgICAgICBpZiAoIWxhc3QudHlwZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyBleHByZXNzaW9uIHRvIHJlcGVhdCwgZ2l2ZW4gJyR7dG9rZW5zLnNsaWNlKDAsIGkpLmpvaW4oJyAnKX0nYCk7XG4gICAgICAgIH1cblxuICAgICAgICBsYXN0LnJlcGVhdCA9IGxhc3QucmVwZWF0IHx8IDE7XG4gICAgICAgIGxhc3QucmVwZWF0ICs9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGQoJ3BhcmFtJywgY3VyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKFJFX1BBVFRFUk5fUkVGLnRlc3QoY3VyKSkge1xuICAgICAgYWRkKCdwYXR0ZXJuX3JlZicsIGN1cik7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAoaXNQcm9ncmVzc2lvbihjdXIpKSB7XG4gICAgICBpZiAobGFzdC50eXBlID09PSAnbW9kZScgfHwgbGFzdC50eXBlID09PSAncHJvZ3Jlc3Npb24nIHx8IGxhc3QudHlwZSA9PT0gJ3ZhbHVlJykge1xuICAgICAgICBsYXN0LnZhbHVlICs9IGAgJHtjdXJ9YDtcbiAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICB9XG5cbiAgICAgIGFkZCgndmFsdWUnLCBjdXIpO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKGN1ciA9PT0gJysrJykge1xuICAgICAgY29uc3QgcHJvZ3Jlc3Npb24gPSBbXTtcbiAgICAgIGxldCBvZmZzZXQgPSBpICsgMTtcblxuICAgICAgd2hpbGUgKHRva2Vuc1tvZmZzZXRdICYmIGlzUHJvZ3Jlc3Npb24odG9rZW5zW29mZnNldF0pKSB7XG4gICAgICAgIHByb2dyZXNzaW9uLnB1c2godG9rZW5zW29mZnNldF0pO1xuICAgICAgICBpZ25vcmUuYWRkKG9mZnNldCk7XG4gICAgICAgIG9mZnNldCArPSAxO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXByb2dyZXNzaW9uLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgcHJvZ3Jlc3Npb24gYWZ0ZXIgJysrJywgZ2l2ZW4gJyR7dG9rZW5zLnNsaWNlKDAsIGkgKyAxKS5qb2luKCcgJyl9J2ApO1xuICAgICAgfVxuXG4gICAgICBhZGQoJ3Byb2dyZXNzaW9uJywgcHJvZ3Jlc3Npb24uam9pbignICcpKTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmIChjdXIuY2hhckF0KCkgPT09ICcjJykge1xuICAgICAgYWRkKCdjaGFubmVsJywgY3VyKTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGNvbnN0IGV1Y2xpZCA9IHBhcnNlRXVjbGlkZWFuVG9rZW4oY3VyKTtcbiAgICBpZiAoZXVjbGlkKSB7XG4gICAgICBhZGQoJ3BhdHRlcm4nLCBldWNsaWRlYW4oZXVjbGlkLm9uc2V0cywgZXVjbGlkLnN0ZXBzLCBldWNsaWQucm90YXRpb24pKTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmIChpc05vdGUoY3VyKSB8fCBpc0Nob3JkKGN1cikgfHwgaXNNb2RlKGN1cikgfHwgaXNOdW1iZXIoY3VyKSkge1xuICAgICAgY2FycnkucHVzaChjdXIpO1xuXG4gICAgICBpZiAoXG4gICAgICAgICFuZXh0XG4gICAgICAgIHx8IGNhcnJ5Lmxlbmd0aCA9PT0gM1xuICAgICAgICB8fCAhKGlzTm90ZShuZXh0KSB8fCBpc01vZGUobmV4dCkgfHwgaXNOdW1iZXIobmV4dCkpXG4gICAgICApIHtcbiAgICAgICAgY29uc3Qgb2xkID0gY2Fycnkuc3BsaWNlKDAsIGNhcnJ5Lmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IHRlc3QgPSBvbGRbMF07XG5cbiAgICAgICAgbGV0IG1vZGUgPSBvbGRbMV07XG4gICAgICAgIGxldCBvY3RhdmUgPSBvbGRbMl07XG5cbiAgICAgICAgaWYgKCFvY3RhdmUgJiYgaXNOdW1iZXIobW9kZSkpIHtcbiAgICAgICAgICBvY3RhdmUgPSBtb2RlO1xuICAgICAgICAgIG1vZGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgdGVzdC5sZW5ndGggPCAyXG4gICAgICAgICAgJiYgaXNOb3RlKHRlc3QpXG4gICAgICAgICAgJiYgKGlzTW9kZShtb2RlKSB8fCBpc051bWJlcihvY3RhdmUpKVxuICAgICAgICApIHtcbiAgICAgICAgICBhZGQoJ21vZGUnLCBvbGQuam9pbignICcpKTtcbiAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgfVxuXG4gICAgICAgIG9sZC5mb3JFYWNoKHggPT4ge1xuICAgICAgICAgIGFkZCh4Lmxlbmd0aCA+IDEgfHwgIWlzTm90ZSh4KSA/IGdldFR5cGUoeCkgOiAnbW9kZScsIHgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY3VyID09PSAnc3RyaW5nJyAmJiBjdXIuaW5kZXhPZignLi4nKSA+IC0xKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IGN1ci5zcGxpdCgnLi4nKTtcbiAgICAgIGNvbnN0IHJhd01pbiA9IHBhcnRzWzBdO1xuICAgICAgY29uc3QgcmF3TWF4ID0gcGFydHNbMV07XG4gICAgICBjb25zdCBtaW4gPSByYXdNaW5cbiAgICAgICAgPyAoaXNOdW1iZXIocmF3TWluKSA/IHBhcnNlSW50KHJhd01pbiwgMTApIDogcmF3TWluKVxuICAgICAgICA6IDE7XG4gICAgICBjb25zdCBtYXggPSByYXdNYXhcbiAgICAgICAgPyAoaXNOdW1iZXIocmF3TWF4KSA/IHBhcnNlSW50KHJhd01heCwgMTApIDogcmF3TWF4KVxuICAgICAgICA6IEluZmluaXR5O1xuXG4gICAgICBpZiAodHlwZW9mIG1pbiA9PT0gJ251bWJlcicgJiYgbWluIDwgMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFNsaWNlIHN0YXJ0IG11c3QgYmUgPj0gMSwgZ2l2ZW4gJyR7Y3VyfSdgKTtcbiAgICAgIH1cblxuICAgICAgdHlwZSA9ICdzbGljZSc7XG4gICAgICBjdXIgPSBbbWluLCBtYXhdO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY3VyID09PSAnc3RyaW5nJyAmJiAhaXNQYXR0ZXJuKGN1cikgJiYgKGN1ci5jaGFyQXQoKSA9PT0gJy8nIHx8IC9eeFxcZCskLy50ZXN0KGN1cikpKSB7XG4gICAgICBjb25zdCBvcGVyYXRvciA9IGN1ci5jaGFyQXQoKSA9PT0gJy8nID8gJ2RpdmlkZScgOiAnbXVsdGlwbHknO1xuICAgICAgY29uc3QgbnVtYmVyID0gY3VyLnN1YnN0cigxKTtcblxuICAgICAgaWYgKCFpc051bWJlcihudW1iZXIpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0aW5nIGEgdmFsaWQgZXhwcmVzc2lvbiB0byAke29wZXJhdG9yfSwgZ2l2ZW4gJyR7dG9rZW5zLnNsaWNlKDAsIGkpLmpvaW4oJyAnKX0gJHtjdXJ9J2ApO1xuICAgICAgfVxuXG4gICAgICBhZGQob3BlcmF0b3IsIHBhcnNlRmxvYXQobnVtYmVyKSk7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAoIXR5cGUgJiYgZ2V0VHlwZShjdXIpID09PSAndmFsdWUnICYmIEFycmF5LmlzQXJyYXkobGFzdC52YWx1ZSkpIHtcbiAgICAgIGxhc3QudmFsdWVbMV0gPSBsYXN0LnZhbHVlWzFdIHx8ICcnO1xuICAgICAgbGFzdC52YWx1ZVsxXSArPSBsYXN0LnZhbHVlWzFdID8gJyAnIDogJyc7XG4gICAgICBsYXN0LnZhbHVlWzFdICs9IGN1cjtcbiAgICAgIHJldHVybiBjdXI7XG4gICAgfVxuXG4gICAgYWRkKHR5cGUgfHwgZ2V0VHlwZShjdXIpLCB0eXBlb2YgY3VyID09PSAnc3RyaW5nJyAmJiBpc051bWJlcihjdXIpID8gcGFyc2VJbnQoY3VyLCAxMCkgOiBjdXIpO1xuICAgIHJldHVybiBjdXI7XG4gIH0sIG51bGwpO1xuXG4gIENBQ0hFW2AkJHtleHByZXNzaW9ufWBdID0gYXN0O1xuICByZXR1cm4gYXN0O1xufVxuIiwgImNvbnN0IFJFX1NFQ1RJT04gPSAvXltBLVpdW0EtWjAtOV0qJC87XG5jb25zdCBSRV9SRVBFQVQgPSAvXngoXFxkKykkLztcblxuZnVuY3Rpb24gaXNTZWN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBSRV9TRUNUSU9OLnRlc3QoU3RyaW5nKHZhbHVlIHx8ICcnKSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlUmVwZWF0KHZhbHVlKSB7XG4gIGNvbnN0IG0gPSBTdHJpbmcodmFsdWUgfHwgJycpLm1hdGNoKFJFX1JFUEVBVCk7XG4gIGlmICghbSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IG4gPSBwYXJzZUludChtWzFdLCAxMCk7XG4gIGlmICghTnVtYmVyLmlzRmluaXRlKG4pKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIE1hdGgubWF4KDEsIG4pO1xufVxuXG5mdW5jdGlvbiBsZXgoYm9keSkge1xuICByZXR1cm4gKFN0cmluZyhib2R5IHx8ICcnKS5tYXRjaCgvXFxbfFxcXXxbXlxcc1xcW1xcXV0rL2cpIHx8IFtdKVxuICAgIC5tYXAoKHRleHQsIGlkeCkgPT4gKHtcbiAgICAgIHRleHQsXG4gICAgICBpbmRleDogaWR4LFxuICAgICAgb3JkZXI6IC0xLFxuICAgICAga2luZDogJ3Vua25vd24nLFxuICAgICAgYmxvY2tJZDogbnVsbCxcbiAgICAgIGJsb2NrTGl2ZTogZmFsc2UsXG4gICAgICBibG9ja1N0YXJ0T3JkZXI6IG51bGwsXG4gICAgICBibG9ja0VuZE9yZGVyOiBudWxsLFxuICAgIH0pKTtcbn1cblxuZnVuY3Rpb24gYXBwbHlCbG9ja01ldGEodG9rZW4sIGJsb2NrTWV0YSkge1xuICBpZiAoIXRva2VuIHx8ICFibG9ja01ldGEpIHJldHVybjtcbiAgdG9rZW4uYmxvY2tJZCA9IGJsb2NrTWV0YS5pZDtcbiAgdG9rZW4uYmxvY2tMaXZlID0gQm9vbGVhbihibG9ja01ldGEubGl2ZSk7XG4gIHRva2VuLmJsb2NrU3RhcnRPcmRlciA9IGJsb2NrTWV0YS5zdGFydE9yZGVyO1xuICB0b2tlbi5ibG9ja0VuZE9yZGVyID0gYmxvY2tNZXRhLmVuZE9yZGVyO1xufVxuXG5mdW5jdGlvbiBwYXJzZVNpbXBsZVJhbmdlKHRva2Vucywgc3RhcnQsIGVuZCwgc3RhdGUsIGJsb2NrTWV0YSwgZXhwYW5kZWQpIHtcbiAgbGV0IGkgPSBzdGFydDtcbiAgd2hpbGUgKGkgPCBlbmQpIHtcbiAgICBjb25zdCB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICBpZiAoIXRva2VuKSBicmVhaztcbiAgICBhcHBseUJsb2NrTWV0YSh0b2tlbiwgYmxvY2tNZXRhKTtcblxuICAgIGlmICh0b2tlbi50ZXh0ID09PSAnWycgfHwgdG9rZW4udGV4dCA9PT0gJ10nKSB7XG4gICAgICB0b2tlbi5raW5kID0gdG9rZW4udGV4dCA9PT0gJ1snID8gJ2Jsb2NrLW9wZW4nIDogJ2Jsb2NrLWNsb3NlJztcbiAgICAgIGkgKz0gMTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChpc1NlY3Rpb24odG9rZW4udGV4dCkpIHtcbiAgICAgIHRva2VuLmtpbmQgPSAnc2VjdGlvbic7XG4gICAgICBzdGF0ZS5sYXN0TmFtZSA9IHRva2VuLnRleHQ7XG4gICAgICBleHBhbmRlZC5wdXNoKHtcbiAgICAgICAgbmFtZTogdG9rZW4udGV4dCxcbiAgICAgICAgZGlzcGxheU9yZGVyOiB0b2tlbi5vcmRlcixcbiAgICAgICAgYmxvY2tJZDogYmxvY2tNZXRhID8gYmxvY2tNZXRhLmlkIDogbnVsbCxcbiAgICAgICAgYmxvY2tMaXZlOiBibG9ja01ldGEgPyBCb29sZWFuKGJsb2NrTWV0YS5saXZlKSA6IGZhbHNlLFxuICAgICAgICBibG9ja1N0YXJ0T3JkZXI6IGJsb2NrTWV0YSA/IGJsb2NrTWV0YS5zdGFydE9yZGVyIDogbnVsbCxcbiAgICAgICAgYmxvY2tFbmRPcmRlcjogYmxvY2tNZXRhID8gYmxvY2tNZXRhLmVuZE9yZGVyIDogbnVsbCxcbiAgICAgIH0pO1xuICAgICAgaSArPSAxO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKHRva2VuLnRleHQgPT09ICclJyAmJiBzdGF0ZS5sYXN0TmFtZSkge1xuICAgICAgdG9rZW4ua2luZCA9ICdyZXBlYXQtbGFzdCc7XG4gICAgICBleHBhbmRlZC5wdXNoKHtcbiAgICAgICAgbmFtZTogc3RhdGUubGFzdE5hbWUsXG4gICAgICAgIGRpc3BsYXlPcmRlcjogdG9rZW4ub3JkZXIsXG4gICAgICAgIGJsb2NrSWQ6IGJsb2NrTWV0YSA/IGJsb2NrTWV0YS5pZCA6IG51bGwsXG4gICAgICAgIGJsb2NrTGl2ZTogYmxvY2tNZXRhID8gQm9vbGVhbihibG9ja01ldGEubGl2ZSkgOiBmYWxzZSxcbiAgICAgICAgYmxvY2tTdGFydE9yZGVyOiBibG9ja01ldGEgPyBibG9ja01ldGEuc3RhcnRPcmRlciA6IG51bGwsXG4gICAgICAgIGJsb2NrRW5kT3JkZXI6IGJsb2NrTWV0YSA/IGJsb2NrTWV0YS5lbmRPcmRlciA6IG51bGwsXG4gICAgICB9KTtcbiAgICAgIGkgKz0gMTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHJlcGVhdCA9IHBhcnNlUmVwZWF0KHRva2VuLnRleHQpO1xuICAgIGlmIChyZXBlYXQgJiYgc3RhdGUubGFzdE5hbWUpIHtcbiAgICAgIHRva2VuLmtpbmQgPSAncmVwZWF0JztcbiAgICAgIGZvciAobGV0IGsgPSAxOyBrIDwgcmVwZWF0OyBrICs9IDEpIHtcbiAgICAgICAgZXhwYW5kZWQucHVzaCh7XG4gICAgICAgICAgbmFtZTogc3RhdGUubGFzdE5hbWUsXG4gICAgICAgICAgZGlzcGxheU9yZGVyOiB0b2tlbi5vcmRlcixcbiAgICAgICAgICBibG9ja0lkOiBibG9ja01ldGEgPyBibG9ja01ldGEuaWQgOiBudWxsLFxuICAgICAgICAgIGJsb2NrTGl2ZTogYmxvY2tNZXRhID8gQm9vbGVhbihibG9ja01ldGEubGl2ZSkgOiBmYWxzZSxcbiAgICAgICAgICBibG9ja1N0YXJ0T3JkZXI6IGJsb2NrTWV0YSA/IGJsb2NrTWV0YS5zdGFydE9yZGVyIDogbnVsbCxcbiAgICAgICAgICBibG9ja0VuZE9yZGVyOiBibG9ja01ldGEgPyBibG9ja01ldGEuZW5kT3JkZXIgOiBudWxsLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGkgKz0gMTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHRva2VuLmtpbmQgPSAndW5rbm93bic7XG4gICAgaSArPSAxO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUFycmFuZ2VtZW50Qm9keShib2R5LCBvcHRpb25zID0ge30pIHtcbiAgY29uc3Qgb3JkZXJPZmZzZXQgPSBOdW1iZXIuaXNGaW5pdGUob3B0aW9ucy5vcmRlck9mZnNldCkgPyBvcHRpb25zLm9yZGVyT2Zmc2V0IDogMDtcbiAgY29uc3QgYmxvY2tPZmZzZXQgPSBOdW1iZXIuaXNGaW5pdGUob3B0aW9ucy5ibG9ja09mZnNldCkgPyBvcHRpb25zLmJsb2NrT2Zmc2V0IDogMDtcbiAgY29uc3QgdG9rZW5zID0gbGV4KGJvZHkpO1xuICB0b2tlbnMuZm9yRWFjaCgodG9rZW4sIGkpID0+IHtcbiAgICB0b2tlbi5vcmRlciA9IG9yZGVyT2Zmc2V0ICsgaTtcbiAgfSk7XG5cbiAgY29uc3QgZXhwYW5kZWQgPSBbXTtcbiAgY29uc3Qgc3RhdGUgPSB7IGxhc3ROYW1lOiBudWxsIH07XG4gIGxldCBuZXh0QmxvY2sgPSBibG9ja09mZnNldDtcblxuICBsZXQgaSA9IDA7XG4gIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgIGNvbnN0IHRva2VuID0gdG9rZW5zW2ldO1xuICAgIGlmICghdG9rZW4pIGJyZWFrO1xuXG4gICAgaWYgKHRva2VuLnRleHQgIT09ICdbJykge1xuICAgICAgcGFyc2VTaW1wbGVSYW5nZSh0b2tlbnMsIGksIGkgKyAxLCBzdGF0ZSwgbnVsbCwgZXhwYW5kZWQpO1xuICAgICAgaSArPSAxO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgbGV0IGNsb3NlID0gLTE7XG4gICAgZm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgdG9rZW5zLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICBpZiAodG9rZW5zW2pdLnRleHQgPT09ICddJykge1xuICAgICAgICBjbG9zZSA9IGo7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjbG9zZSA8IDApIHtcbiAgICAgIHRva2VuLmtpbmQgPSAndW5rbm93bic7XG4gICAgICBpICs9IDE7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBjb25zdCByZXBlYXRUb2tlbiA9IHRva2Vuc1tjbG9zZSArIDFdO1xuICAgIGNvbnN0IHJlcGVhdENvdW50ID0gcmVwZWF0VG9rZW4gPyBwYXJzZVJlcGVhdChyZXBlYXRUb2tlbi50ZXh0KSA6IG51bGw7XG4gICAgY29uc3QgYmxvY2tNZXRhID0ge1xuICAgICAgaWQ6IGBibG9jay0ke25leHRCbG9ja31gLFxuICAgICAgbGl2ZTogIXJlcGVhdENvdW50LFxuICAgICAgc3RhcnRPcmRlcjogdG9rZW4ub3JkZXIsXG4gICAgICBlbmRPcmRlcjogdG9rZW5zW2Nsb3NlXS5vcmRlcixcbiAgICB9O1xuICAgIG5leHRCbG9jayArPSAxO1xuXG4gICAgY29uc3QgaW5uZXJFeHBhbmRlZCA9IFtdO1xuICAgIHBhcnNlU2ltcGxlUmFuZ2UodG9rZW5zLCBpLCBjbG9zZSArIDEsIHN0YXRlLCBibG9ja01ldGEsIGlubmVyRXhwYW5kZWQpO1xuXG4gICAgaWYgKCFpbm5lckV4cGFuZGVkLmxlbmd0aCkge1xuICAgICAgaSA9IGNsb3NlICsgKHJlcGVhdENvdW50ID8gMiA6IDEpO1xuICAgICAgaWYgKHJlcGVhdFRva2VuICYmIHJlcGVhdENvdW50KSB7XG4gICAgICAgIHJlcGVhdFRva2VuLmtpbmQgPSAncmVwZWF0JztcbiAgICAgIH1cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChyZXBlYXRUb2tlbiAmJiByZXBlYXRDb3VudCkge1xuICAgICAgcmVwZWF0VG9rZW4ua2luZCA9ICdyZXBlYXQnO1xuICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCByZXBlYXRDb3VudDsgbiArPSAxKSB7XG4gICAgICAgIGlubmVyRXhwYW5kZWQuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICBleHBhbmRlZC5wdXNoKHtcbiAgICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgICBkaXNwbGF5T3JkZXI6IG4gPT09IDAgPyBpdGVtLmRpc3BsYXlPcmRlciA6IHJlcGVhdFRva2VuLm9yZGVyLFxuICAgICAgICAgICAgYmxvY2tMaXZlOiBmYWxzZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpID0gY2xvc2UgKyAyO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgZXhwYW5kZWQucHVzaCguLi5pbm5lckV4cGFuZGVkKTtcbiAgICBpID0gY2xvc2UgKyAxO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0b2tlbnMsXG4gICAgZXhwYW5kZWQsXG4gICAgbmV4dE9yZGVyOiBvcmRlck9mZnNldCArIHRva2Vucy5sZW5ndGgsXG4gICAgbmV4dEJsb2NrLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRBcnJhbmdlbWVudE1haW4oYm9keSkge1xuICBjb25zdCBwYXJzZWQgPSBwYXJzZUFycmFuZ2VtZW50Qm9keShib2R5KTtcbiAgaWYgKHBhcnNlZC50b2tlbnMuc29tZSh0b2tlbiA9PiB0b2tlbi5raW5kID09PSAndW5rbm93bicpKSByZXR1cm4gbnVsbDtcbiAgaWYgKCFwYXJzZWQuZXhwYW5kZWQubGVuZ3RoKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIHBhcnNlZC5leHBhbmRlZC5tYXAoaXRlbSA9PiAoeyB0eXBlOiAndmFsdWUnLCB2YWx1ZTogaXRlbS5uYW1lIH0pKTtcbn1cbiIsICJpbXBvcnQgeyBzY2FsZSwgaW5saW5lQ2hvcmQgfSBmcm9tICdoYXJtb25pY3MnO1xuXG5pbXBvcnQgeyBpc1Byb2dyZXNzaW9uLCB0cmFuc2Zvcm0gfSBmcm9tICcuL3Rva2VuaXplLmpzJztcbmltcG9ydCB7IGJ1aWxkQXJyYW5nZW1lbnRNYWluIH0gZnJvbSAnLi9hcnJhbmdlbWVudC5qcyc7XG5pbXBvcnQgeyByZXBlYXQsIGNsb25lIH0gZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQgeyByZXNvbHZlQ2hhbm5lbFRva2VuIH0gZnJvbSAnLi9jaGFubmVscy5qcyc7XG5cbmNvbnN0IFJPTUFOX1RPX0RFR1JFRSA9IHtcbiAgSTogMSxcbiAgSUk6IDIsXG4gIElJSTogMyxcbiAgSVY6IDQsXG4gIFY6IDUsXG4gIFZJOiA2LFxuICBWSUk6IDcsXG59O1xuXG5mdW5jdGlvbiBwYXJzZVByb2dyZXNzaW9uVG9rZW4odG9rZW4pIHtcbiAgY29uc3QgcmF3ID0gU3RyaW5nKHRva2VuIHx8ICcnKS50cmltKCk7XG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSByYXcucmVwbGFjZSgvXHUwMEIwJC8sICcnKS50b1VwcGVyQ2FzZSgpO1xuICBjb25zdCBkZWdyZWUgPSBST01BTl9UT19ERUdSRUVbbm9ybWFsaXplZF07XG4gIGlmICghZGVncmVlKSB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgcHJvZ3Jlc3Npb24gc3ltYm9sICcke3Jhd30nYCk7XG4gIGlmIChyYXcuZW5kc1dpdGgoJ1x1MDBCMCcpKSByZXR1cm4geyBkZWdyZWUsIHF1YWxpdHk6ICdtN2I1JyB9O1xuICBpZiAocmF3ID09PSByYXcudG9VcHBlckNhc2UoKSkgcmV0dXJuIHsgZGVncmVlLCBxdWFsaXR5OiAnTScgfTtcbiAgcmV0dXJuIHsgZGVncmVlLCBxdWFsaXR5OiAnbScgfTtcbn1cblxuZnVuY3Rpb24gYnVpbGRQcm9ncmVzc2lvbkNob3JkcyhiYXNlLCBwcm9ncmVzc2lvbikge1xuICBjb25zdCBub3RlcyA9IHNjYWxlKGJhc2UpO1xuICBpZiAoIUFycmF5LmlzQXJyYXkobm90ZXMpIHx8IG5vdGVzLmxlbmd0aCA8IDMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byByZXNvbHZlIHByb2dyZXNzaW9uIGZyb20gJyR7YmFzZX0nYCk7XG4gIH1cblxuICBjb25zdCB0b2tlbnMgPSBTdHJpbmcocHJvZ3Jlc3Npb24gfHwgJycpLnRyaW0oKS5zcGxpdCgvXFxzKy8pLmZpbHRlcihpc1Byb2dyZXNzaW9uKTtcbiAgcmV0dXJuIHRva2Vucy5tYXAoKHRva2VuKSA9PiB7XG4gICAgY29uc3QgeyBkZWdyZWUsIHF1YWxpdHkgfSA9IHBhcnNlUHJvZ3Jlc3Npb25Ub2tlbih0b2tlbik7XG4gICAgY29uc3Qgcm9vdCA9IG5vdGVzW2RlZ3JlZSAtIDFdO1xuICAgIGNvbnN0IG1hdGNoID0gU3RyaW5nKHJvb3QgfHwgJycpLm1hdGNoKC9eKFtBLUdhLWddWyNiXT8pKC0/XFxkKykkLyk7XG4gICAgaWYgKCFtYXRjaCkgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHJvb3Qgbm90ZSAnJHtyb290fScgZm9yIHByb2dyZXNzaW9uICcke3Rva2VufSdgKTtcbiAgICBjb25zdCBbLCBwaXRjaENsYXNzLCBvY3RhdmVdID0gbWF0Y2g7XG4gICAgcmV0dXJuIGlubGluZUNob3JkKGAke3BpdGNoQ2xhc3N9JHtxdWFsaXR5fV8ke29jdGF2ZX1gKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGVncmVlVG9rZW4odG9rZW4pIHtcbiAgaWYgKC9eXFxkKyQvLnRlc3QodG9rZW4pKSByZXR1cm4gW3BhcnNlSW50KHRva2VuLCAxMCldO1xuICBpZiAoL15cXGQrXFwuXFwuXFxkKyQvLnRlc3QodG9rZW4pKSB7XG4gICAgY29uc3QgW2EsIGJdID0gdG9rZW4uc3BsaXQoJy4uJykubWFwKG4gPT4gcGFyc2VJbnQobiwgMTApKTtcbiAgICBpZiAoYSA+IGIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBkZWdyZWUgcmFuZ2UgJyR7dG9rZW59Jy4gVXNlIGFzY2VuZGluZyByYW5nZXMgbGlrZSAnMS4uNydgKTtcbiAgICB9XG4gICAgY29uc3Qgb3V0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IGE7IGkgPD0gYjsgaSArPSAxKSBvdXQucHVzaChpKTtcbiAgICByZXR1cm4gb3V0O1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBkZWdyZWUgZXhwcmVzc2lvbiAnJHt0b2tlbn0nYCk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdFNjYWxlRGVncmVlcyhiYXNlLCByYXdEZWdyZWVzLCBtYXBGbikge1xuICBjb25zdCBub3RlcyA9IG1hcEZuKHNjYWxlKGJhc2UpKTtcbiAgY29uc3QgdmFsdWVzID0gcmF3RGVncmVlcy5yZWR1Y2UoKG1lbW8sIHRva2VuKSA9PiB7XG4gICAgbWVtby5wdXNoKC4uLnBhcnNlRGVncmVlVG9rZW4odG9rZW4pKTtcbiAgICByZXR1cm4gbWVtbztcbiAgfSwgW10pO1xuXG4gIHZhbHVlcy5mb3JFYWNoKGRlZyA9PiB7XG4gICAgaWYgKGRlZyA8IDEgfHwgZGVnID4gbm90ZXMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYERlZ3JlZSAnJHtkZWd9JyBpcyBvdXQgb2YgcmFuZ2UgZm9yICcke2Jhc2V9Jy4gQWxsb3dlZCByYW5nZSBpcyAxLi4ke25vdGVzLmxlbmd0aH1gKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB2YWx1ZXMubWFwKGRlZyA9PiBub3Rlc1tkZWcgLSAxXSk7XG59XG5cbmZ1bmN0aW9uIGZpbmRTdWZmaXhEYXNoQ29tbWVudEluZGV4KGxpbmUpIHtcbiAgY29uc3QgbWF0Y2ggPSBsaW5lLm1hdGNoKC9cXHMtLVxccy8pO1xuICBpZiAoIW1hdGNoIHx8IHR5cGVvZiBtYXRjaC5pbmRleCAhPT0gJ251bWJlcicpIHJldHVybiAtMTtcbiAgaWYgKCEvXFxTLy50ZXN0KGxpbmUuc2xpY2UoMCwgbWF0Y2guaW5kZXgpKSkgcmV0dXJuIC0xO1xuICByZXR1cm4gbWF0Y2guaW5kZXg7XG59XG5cbmZ1bmN0aW9uIHN0cmlwSW5saW5lQ29tbWVudChsaW5lKSB7XG4gIGNvbnN0IHNlbWljb2xvbkluZGV4ID0gbGluZS5pbmRleE9mKCc7Jyk7XG4gIGNvbnN0IGRhc2hDb21tZW50SW5kZXggPSBmaW5kU3VmZml4RGFzaENvbW1lbnRJbmRleChsaW5lKTtcblxuICBpZiAoc2VtaWNvbG9uSW5kZXggPCAwICYmIGRhc2hDb21tZW50SW5kZXggPCAwKSByZXR1cm4gbGluZTtcbiAgaWYgKHNlbWljb2xvbkluZGV4IDwgMCkgcmV0dXJuIGxpbmUuc2xpY2UoMCwgZGFzaENvbW1lbnRJbmRleCk7XG4gIGlmIChkYXNoQ29tbWVudEluZGV4IDwgMCkgcmV0dXJuIGxpbmUuc2xpY2UoMCwgc2VtaWNvbG9uSW5kZXgpO1xuICByZXR1cm4gbGluZS5zbGljZSgwLCBNYXRoLm1pbihzZW1pY29sb25JbmRleCwgZGFzaENvbW1lbnRJbmRleCkpO1xufVxuXG5mdW5jdGlvbiBhc3NlcnROb3JtYWxpemVkVmVsb2NpdHlTeW50YXgobGluZSkge1xuICBjb25zdCB0b2tlbnMgPSBTdHJpbmcobGluZSB8fCAnJykudHJpbSgpLnNwbGl0KC9cXHMrLykuZmlsdGVyKEJvb2xlYW4pO1xuICBpZiAoIXRva2Vucy5sZW5ndGggfHwgdG9rZW5zWzBdLmNoYXJBdCgwKSAhPT0gJyMnKSByZXR1cm47XG5cbiAgbGV0IGluZGV4ID0gMTtcbiAgaWYgKHRva2Vuc1tpbmRleF0gPT09ICchJyB8fCB0b2tlbnNbaW5kZXhdID09PSAnKycpIGluZGV4ICs9IDE7XG4gIGNvbnN0IHZlbG9jaXR5VG9rZW4gPSB0b2tlbnNbaW5kZXhdO1xuICBpZiAoIXZlbG9jaXR5VG9rZW4pIHJldHVybjtcblxuICAvLyBMZWdhY3kgdmVsb2NpdHkgc2hvcnRoYW5kIGZvcm1zIGFyZSByZWplY3RlZCBpbiBmYXZvciBvZiBwbGFpbiBudW1lcmljIHZhbHVlcy5cbiAgaWYgKFxuICAgICh2ZWxvY2l0eVRva2VuLmluY2x1ZGVzKCclJykgJiYgdmVsb2NpdHlUb2tlbi5pbmRleE9mKCclJykgPiAwKVxuICAgIHx8ICh2ZWxvY2l0eVRva2VuLmluY2x1ZGVzKCcvJykgJiYgdmVsb2NpdHlUb2tlbi5pbmRleE9mKCcvJykgPiAwKVxuICAgIHx8ICh2ZWxvY2l0eVRva2VuLmluY2x1ZGVzKCcqJykgJiYgdmVsb2NpdHlUb2tlbi5pbmRleE9mKCcqJykgPiAwKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYERlcHJlY2F0ZWQgdmVsb2NpdHkgc3ludGF4ICcke3ZlbG9jaXR5VG9rZW59Jy4gVXNlIHBsYWluIG51bWVyaWMgZm9ybSBsaWtlICcwLjc1JyBvciAnOTYnYCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xvbmVUb2tlbih0b2tlbikge1xuICBpZiAoIXRva2VuIHx8IHR5cGVvZiB0b2tlbiAhPT0gJ29iamVjdCcpIHJldHVybiB0b2tlbjtcbiAgY29uc3QgY2xvbmVkID0geyAuLi50b2tlbiB9O1xuICBpZiAoQXJyYXkuaXNBcnJheSh0b2tlbi52YWx1ZSkpIGNsb25lZC52YWx1ZSA9IFsuLi50b2tlbi52YWx1ZV07XG4gIHJldHVybiBjbG9uZWQ7XG59XG5cbmZ1bmN0aW9uIGV4cGFuZFBhdHRlcm5SZWZzKHRva2VucywgcGF0dGVybnMsIHN0YWNrID0gW10pIHtcbiAgcmV0dXJuIHRva2Vucy5yZWR1Y2UoKG91dCwgdG9rZW4pID0+IHtcbiAgICBpZiAoIXRva2VuIHx8IHRva2VuLnR5cGUgIT09ICdwYXR0ZXJuX3JlZicpIHtcbiAgICAgIG91dC5wdXNoKGNsb25lVG9rZW4odG9rZW4pKTtcbiAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuXG4gICAgY29uc3QgbmFtZSA9IHRva2VuLnZhbHVlO1xuICAgIGlmIChzdGFjay5pbmNsdWRlcyhuYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDaXJjdWxhciBwYXR0ZXJuIGV4cHJlc3Npb24gZm9yICcke25hbWV9J2ApO1xuICAgIH1cblxuICAgIGNvbnN0IHRhcmdldCA9IHBhdHRlcm5zW25hbWVdO1xuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgcGF0dGVybiBleHByZXNzaW9uIGZvciAnJHtuYW1lfSdgKTtcbiAgICB9XG5cbiAgICBjb25zdCBleHBhbmRlZCA9IGV4cGFuZFBhdHRlcm5SZWZzKHRhcmdldCwgcGF0dGVybnMsIFsuLi5zdGFjaywgbmFtZV0pO1xuICAgIGNvbnN0IHJlcGVhdHMgPSB0b2tlbi5yZXBlYXQgJiYgdG9rZW4ucmVwZWF0ID4gMSA/IHRva2VuLnJlcGVhdCA6IDE7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlcGVhdHM7IGkgKz0gMSkge1xuICAgICAgZXhwYW5kZWQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBvdXQucHVzaChjbG9uZVRva2VuKGl0ZW0pKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBvdXQ7XG4gIH0sIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZShpbnB1dCwgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGlucHV0KSkgcmV0dXJuIGlucHV0O1xuXG4gIGNvbnN0IGZuID0gdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nID8gY2FsbGJhY2sgOiAodiA9PiB2KTtcblxuICBsZXQgc2tpcDtcbiAgcmV0dXJuIGlucHV0LnJlZHVjZSgocHJldiwgY3VyLCBpKSA9PiB7XG4gICAgY29uc3QgbGFzdCA9IHByZXZbcHJldi5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBuZXh0ID0gaW5wdXRbaSArIDFdIHx8IHt9O1xuICAgIGNvbnN0IG9sZCA9IGlucHV0W2kgLSAxXSB8fCB7fTtcblxuICAgIGlmIChza2lwKSB7XG4gICAgICBza2lwID0gZmFsc2U7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShjdXIpKSB7XG4gICAgICBwcmV2LnB1c2goLi4uY3VyKTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmIChjdXIudHlwZSA9PT0gJ3ZhbHVlJyAmJiBjdXIudmFsdWUgPT09ICcuJykge1xuICAgICAgaWYgKHByZXYubGVuZ3RoID4gMCkgcHJldi5wdXNoKHByZXZbMF0pO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKG9sZC50eXBlID09PSAncGF0dGVybicgJiYgY3VyLnR5cGUgPT09ICdwYXR0ZXJuJykge1xuICAgICAgcHJldltwcmV2Lmxlbmd0aCAtIDFdICs9IGN1ci52YWx1ZTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIHN3aXRjaCAoY3VyLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3BhdHRlcm4nOlxuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ25vdGUnOlxuICAgICAgICBpZiAoY3VyLnJlcGVhdCkgcHJldi5wdXNoKC4uLnJlcGVhdChjdXIudmFsdWUsIGN1ci5yZXBlYXQpKTtcbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjdXIudmFsdWUpKSBwcmV2LnB1c2goLi4uY3VyLnZhbHVlKTtcbiAgICAgICAgZWxzZSBwcmV2LnB1c2goY3VyLnZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2Nob3JkJzpcbiAgICAgICAgaWYgKGN1ci5yZXBlYXQpIHByZXYucHVzaCguLi5yZXBlYXQoY3VyLnZhbHVlLCBjdXIucmVwZWF0KSk7XG4gICAgICAgIGVsc2UgaWYgKGN1ci51bmZvbGQpIHByZXYucHVzaCguLi5jdXIudmFsdWUpO1xuICAgICAgICBlbHNlIHByZXYucHVzaChjdXIudmFsdWUpO1xuXG4gICAgICAgIGlmIChjdXIudHlwZSAhPT0gJ2Nob3JkJykge1xuICAgICAgICAgIHNraXAgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdkaXZpZGUnOlxuICAgICAgICBwcmV2W3ByZXYubGVuZ3RoIC0gMV0gLz0gY3VyLnZhbHVlO1xuICAgICAgICByZXR1cm4gcHJldjtcblxuICAgICAgY2FzZSAnbXVsdGlwbHknOlxuICAgICAgICBwcmV2LnB1c2goLi4ucmVwZWF0KGxhc3QsIGN1ci52YWx1ZSAtIDEpKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3NsaWNlJzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobGFzdCkpIHtcbiAgICAgICAgICBwcmV2W3ByZXYubGVuZ3RoIC0gMV0gPSBsYXN0LnNsaWNlKGN1ci52YWx1ZVswXSAtIDEsIGN1ci52YWx1ZVsxXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJldi5wdXNoKGN1ci52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ21vZGUnOlxuICAgICAgICBwcmV2W3ByZXYubGVuZ3RoIC0gMV0gPSBgJHtsYXN0fSAke2N1ci52YWx1ZX1gO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAncHJvZ3Jlc3Npb24nOlxuICAgICAgICBpZiAodHlwZW9mIGxhc3QgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIGV4cHJlc3Npb24gZm9yICcrKyAke2N1ci52YWx1ZX0nYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxhc3QuaW5jbHVkZXMoJy4uLicpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHN5bnRheCAnJHtsYXN0fSArKyAke2N1ci52YWx1ZX0nLiBVc2UgZWl0aGVyICcuLi4nIChleHBhbmQgc2NhbGUpIG9yICcrKycgKHByb2dyZXNzaW9uKSwgbm90IGJvdGhgKTtcbiAgICAgICAgfVxuICAgICAgICBwcmV2W3ByZXYubGVuZ3RoIC0gMV0gPSBgJHtsYXN0fSArKyAke2N1ci52YWx1ZX1gO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZGVncmVlcyc6XG4gICAgICAgIGlmICh0eXBlb2YgbGFzdCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgZXhwcmVzc2lvbiBmb3IgJyoqICR7Y3VyLnZhbHVlLmpvaW4oJyAnKX0nYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxhc3QuaW5jbHVkZXMoJy4uLicpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHN5bnRheCAnJHtsYXN0fSAqKiAke2N1ci52YWx1ZS5qb2luKCcgJyl9Jy4gVXNlIGVpdGhlciAnLi4uJyAoZXhwYW5kIHNjYWxlKSBvciAnKionIChkZWdyZWUgc2VsZWN0aW9uKSwgbm90IGJvdGhgKTtcbiAgICAgICAgfVxuICAgICAgICBwcmV2W3ByZXYubGVuZ3RoIC0gMV0gPSBgJHtsYXN0fSAqKiAke2N1ci52YWx1ZS5qb2luKCcgJyl9YDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3BhcmFtJzpcbiAgICAgIGNhc2UgJ3ZhbHVlJzoge1xuICAgICAgICBsZXQgdmFsdWUgPSBudWxsO1xuICAgICAgICBpZiAodHlwZW9mIGNvbnRleHRbY3VyLnZhbHVlXSAhPT0gJ3VuZGVmaW5lZCcpIHZhbHVlID0gY29udGV4dFtjdXIudmFsdWVdO1xuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICBpZiAoY3VyLnR5cGUgPT09ICd2YWx1ZScgJiYgdHlwZW9mIGN1ci52YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmIChjdXIudmFsdWUuc3RhcnRzV2l0aCgnKysgJykgJiYgdHlwZW9mIHByZXZbcHJldi5sZW5ndGggLSAxXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgaWYgKHByZXZbcHJldi5sZW5ndGggLSAxXS5pbmNsdWRlcygnLi4uJykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3ludGF4ICcke3ByZXZbcHJldi5sZW5ndGggLSAxXX0gJHtjdXIudmFsdWV9Jy4gVXNlIGVpdGhlciAnLi4uJyAoZXhwYW5kIHNjYWxlKSBvciAnKysnIChwcm9ncmVzc2lvbiksIG5vdCBib3RoYCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcHJldltwcmV2Lmxlbmd0aCAtIDFdID0gYCR7cHJldltwcmV2Lmxlbmd0aCAtIDFdfSAke2N1ci52YWx1ZX1gO1xuICAgICAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGN1ci52YWx1ZS5pbmNsdWRlcygnICcpKSB7XG4gICAgICAgICAgICAgIHByZXYucHVzaChjdXIudmFsdWUpO1xuICAgICAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgY29uc3QgY2hvcmQgPSBpbmxpbmVDaG9yZChjdXIudmFsdWUpO1xuICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaG9yZCkgJiYgY2hvcmQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gW2Nob3JkXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAvLyBLZWVwIHJlZ3VsYXIgbWlzc2luZy1leHByZXNzaW9uIGVycm9ycyBmb3Igbm9uLWNob3JkIHZhbHVlcy5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyBleHByZXNzaW9uIGZvciAnJHtjdXIudmFsdWV9J2ApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZVswXSAmJiB2YWx1ZVswXS50eXBlKSB7XG4gICAgICAgICAgdmFsdWUgPSByZWR1Y2UodmFsdWUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGN1ci5yZXBlYXQpIHtcbiAgICAgICAgICAgIHByZXYucHVzaCguLi5yZXBlYXQodmFsdWUsIGN1ci5yZXBlYXQpLnJlZHVjZSgoX3ByZXYsIF9jdXIpID0+IHtcbiAgICAgICAgICAgICAgX3ByZXYucHVzaCguLi5fY3VyKTtcbiAgICAgICAgICAgICAgcmV0dXJuIF9wcmV2O1xuICAgICAgICAgICAgfSwgW10pKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJldi5wdXNoKC4uLnZhbHVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbHVlID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV07XG4gICAgICAgIGlmIChjdXIucmVwZWF0KSBwcmV2LnB1c2goLi4ucmVwZWF0KHZhbHVlLCBjdXIucmVwZWF0KSk7XG4gICAgICAgIGVsc2UgcHJldi5wdXNoKC4uLnZhbHVlKTtcbiAgICAgIH0gYnJlYWs7XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5oYW5kbGVkICcke2N1ci50eXBlfSdgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJldjtcbiAgfSwgW10pLnJlZHVjZSgobWVtbywgaXRlbSkgPT4ge1xuICAgIGNvbnN0IHByZXYgPSBtZW1vW21lbW8ubGVuZ3RoIC0gMV07XG5cbiAgICBpZiAoXG4gICAgICBBcnJheS5pc0FycmF5KHByZXYpXG4gICAgICAmJiBBcnJheS5pc0FycmF5KGl0ZW0pXG4gICAgICAmJiB0eXBlb2YgaXRlbVswXSA9PT0gJ251bWJlcidcbiAgICAgICYmIGl0ZW0ubGVuZ3RoID09PSAyXG4gICAgKSB7XG4gICAgICBjb25zdCBvZmZzZXQgPSBpdGVtWzFdID09PSBJbmZpbml0eSA/IHByZXYubGVuZ3RoIDogaXRlbVsxXTtcbiAgICAgIGNvbnN0IFtiYXNlLCBsZW5ndGhdID0gU3RyaW5nKG9mZnNldCkuc3BsaXQoL1xcRC8pO1xuXG4gICAgICBtZW1vLnBvcCgpO1xuICAgICAgbWVtby5wdXNoKC4uLnByZXYuc2xpY2UoaXRlbVswXSAtIDEsIGJhc2UpKTtcblxuICAgICAgaWYgKFN0cmluZyhvZmZzZXQpLmluY2x1ZGVzKCc+JykpIHtcbiAgICAgICAgY29uc3QgcGFydHMgPSBtZW1vLnNsaWNlKC1sZW5ndGggLSAxKTtcblxuICAgICAgICBwYXJ0cy5wb3AoKTtcbiAgICAgICAgcGFydHMucmV2ZXJzZSgpO1xuICAgICAgICBtZW1vLnB1c2goLi4ucGFydHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1lbW87XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJyAmJiBpdGVtLmluY2x1ZGVzKCcgJykpIHtcbiAgICAgIGlmIChpdGVtLmluY2x1ZGVzKCcgKiogJykpIHtcbiAgICAgICAgY29uc3QgW2Jhc2UsIHJhd10gPSBpdGVtLnNwbGl0KC9cXHMrXFwqXFwqXFxzKy8pO1xuICAgICAgICBjb25zdCBkZWdyZWVUb2tlbnMgPSByYXcudHJpbSgpLnNwbGl0KC9cXHMrLykuZmlsdGVyKEJvb2xlYW4pO1xuXG4gICAgICAgIG1lbW8ucHVzaChzZWxlY3RTY2FsZURlZ3JlZXMoYmFzZSwgZGVncmVlVG9rZW5zLCBmbikpO1xuICAgICAgICByZXR1cm4gbWVtbztcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2h1bmtzID0gaXRlbS5zcGxpdCgnICcpO1xuXG4gICAgICBpZiAoY2h1bmtzLnNvbWUoaXNQcm9ncmVzc2lvbikpIHtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gY2h1bmtzLmZpbmRJbmRleChpc1Byb2dyZXNzaW9uKTtcbiAgICAgICAgY29uc3QgW2EsIGJdID0gW2NodW5rcy5zbGljZSgwLCBvZmZzZXQpLCBjaHVua3Muc2xpY2Uob2Zmc2V0KV07XG5cbiAgICAgICAgaWYgKGFbYS5sZW5ndGggLSAxXSA9PT0gJysrJykgYS5wb3AoKTtcblxuICAgICAgICBtZW1vLnB1c2goYnVpbGRQcm9ncmVzc2lvbkNob3JkcyhhLmpvaW4oJyAnKSwgYi5qb2luKCcgJykpLm1hcChjaG9yZCA9PiBmbihjaG9yZCkpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lbW8ucHVzaChmbihzY2FsZShpdGVtKSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtZW1vLnB1c2goZm4oaXRlbSkpO1xuICAgIH1cbiAgICByZXR1cm4gbWVtbztcbiAgfSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2UoYnVmZmVyLCBvcHRpb25zID0ge30pIHtcbiAgY29uc3QgdHJhY2tzID0ge307XG4gIGNvbnN0IG1haW4gPSBbXTtcbiAgY29uc3QgZGF0YSA9IHt9O1xuICBjb25zdCBwYXR0ZXJuRGF0YSA9IHt9O1xuICBjb25zdCB0cmFja1BhdHRlcm5TbG90cyA9IHt9O1xuXG4gIGxldCBjaGFubmVsID0gbnVsbDtcbiAgbGV0IHByZWZpeCA9ICcnO1xuICBsZXQgdHJhY2s7XG4gIGxldCBpbmZvID0ge307XG4gIGJ1ZmZlci5zcGxpdCgvXFxyP1xcbi9nKS5mb3JFYWNoKChsaW5lLCBudGgpID0+IHtcbiAgICBsaW5lID0gc3RyaXBJbmxpbmVDb21tZW50KGxpbmUpLnRyaW0oKTtcbiAgICBpZiAoIWxpbmUpIHJldHVybjtcblxuICAgIHRyeSB7XG4gICAgICBhc3NlcnROb3JtYWxpemVkVmVsb2NpdHlTeW50YXgobGluZSk7XG5cbiAgICAgIGlmIChsaW5lLmNoYXJBdCgpID09PSAnJScpIHtcbiAgICAgICAgY29uc3QgW25hbWUsIC4uLnZhbHVlXSA9IGxpbmUuc3BsaXQoL1xccysvKTtcblxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGRhdGFbbmFtZV0gPSB0cmFuc2Zvcm0odmFsdWUuam9pbignICcpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChsaW5lLmNoYXJBdCgpID09PSAnJicpIHtcbiAgICAgICAgY29uc3QgW25hbWUsIC4uLnZhbHVlXSA9IGxpbmUuc3BsaXQoL1xccysvKTtcblxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHBhdHRlcm5EYXRhW25hbWVdID0gdHJhbnNmb3JtKHZhbHVlLmpvaW4oJyAnKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobGluZS5pbmRleE9mKCcjICcpID49IDApIHtcbiAgICAgICAgaWYgKHRyYWNrKSB7XG4gICAgICAgICAgdHJhY2tzW3RyYWNrXSA9IGluZm87XG4gICAgICAgICAgY2hhbm5lbCA9IG51bGw7XG4gICAgICAgICAgcHJlZml4ID0gJyc7XG4gICAgICAgICAgaW5mbyA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgdHJhY2sgPSBsaW5lLnNwbGl0KC9cXHMrLykuc2xpY2UoMSkuam9pbignICcpO1xuICAgICAgfSBlbHNlIGlmIChsaW5lLmNoYXJBdCgpID09PSAnPicpIHtcbiAgICAgICAgY29uc3QgYm9keSA9IGxpbmUuc3Vic3RyKDEpLnRyaW0oKTtcbiAgICAgICAgY29uc3QgYXJyYW5nZWQgPSBidWlsZEFycmFuZ2VtZW50TWFpbihib2R5KTtcbiAgICAgICAgbWFpbi5wdXNoKGFycmFuZ2VkIHx8IHRyYW5zZm9ybShib2R5KSk7XG4gICAgICB9IGVsc2UgaWYgKGxpbmUuY2hhckF0KCkgPT09ICdAJykge1xuICAgICAgICBjb25zdCBbbmFtZSwgLi4uZXh0ZW5kXSA9IGxpbmUuc3Vic3RyKDEpLnNwbGl0KCcgJyk7XG5cbiAgICAgICAgaWYgKGV4dGVuZFswXSA9PT0gJzwnKSB7XG4gICAgICAgICAgY29uc3Qga2V5ID0gYCR7ZXh0ZW5kWzFdfSNgO1xuXG4gICAgICAgICAgT2JqZWN0LmtleXMoaW5mbylcbiAgICAgICAgICAgIC5maWx0ZXIoeCA9PiB4LmluZGV4T2Yoa2V5KSA9PT0gMClcbiAgICAgICAgICAgIC5mb3JFYWNoKGsgPT4ge1xuICAgICAgICAgICAgICBpbmZvW2Ake25hbWV9IyR7ay5zcGxpdCgnIycpWzFdfWBdID0gY2xvbmUoaW5mb1trXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBwcmVmaXggPSBuYW1lO1xuICAgICAgfSBlbHNlIGlmIChsaW5lLmluZGV4T2YoJzonKSA+IDApIHtcbiAgICAgICAgY29uc3QgW25hbWUsIC4uLnZhbHVlXSA9IGxpbmUuc3BsaXQoJzonKTtcblxuICAgICAgICBkYXRhW25hbWVdID0gdHJhbnNmb3JtKHZhbHVlLmpvaW4oJzonKS50cmltKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGlja3MgPSBleHBhbmRQYXR0ZXJuUmVmcyh0cmFuc2Zvcm0obGluZSksIHBhdHRlcm5EYXRhKTtcblxuICAgICAgICBpZiAoIXRpY2tzWzBdIHx8IHRpY2tzWzBdLnR5cGUgIT09ICdjaGFubmVsJykge1xuICAgICAgICAgIGlmICghY2hhbm5lbCkgdGhyb3cgbmV3IFR5cGVFcnJvcihgTWlzc2luZyBjaGFubmVsLCBnaXZlbiAnJHtsaW5lfSdgKTtcblxuICAgICAgICAgIGNvbnN0IGVuZCA9IGluZm9bY2hhbm5lbF1baW5mb1tjaGFubmVsXS5sZW5ndGggLSAxXTtcblxuICAgICAgICAgIGlmICghZW5kLnZhbHVlcykgZW5kLnZhbHVlcyA9IFt7IHR5cGU6ICdudW1iZXInLCB2YWx1ZTogMTI3IH1dO1xuICAgICAgICAgIGVuZC52YWx1ZXMucHVzaCguLi50aWNrcyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgbm90ZXMgPSB0aWNrcy5maW5kSW5kZXgoeCA9PiBbJ25vdGUnLCAnY2hvcmQnLCAncGFyYW0nXS5pbmNsdWRlcyh4LnR5cGUpKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aWNrcy5maW5kSW5kZXgoeCA9PiB4LnR5cGUgPT09ICdwYXR0ZXJuJyk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gaW5kZXggPiAwID8gdGlja3Muc2xpY2UoaW5kZXgpIDogdGlja3M7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHZhbHVlLmZpbmRJbmRleCh4ID0+IHgudHlwZSAhPT0gJ3BhdHRlcm4nKTtcbiAgICAgICAgY29uc3QgaW5wdXRzID0gdGlja3Muc2xpY2UoMCwgaW5kZXggPiAwID8gaW5kZXggOiAxKTtcblxuICAgICAgICBjb25zdCByZXNvbHZlZENoYW5uZWwgPSByZXNvbHZlQ2hhbm5lbFRva2VuKGlucHV0c1swXS52YWx1ZSwgb3B0aW9ucy5jaGFubmVsQWxpYXNlcyk7XG4gICAgICAgIGNoYW5uZWwgPSBwcmVmaXggKyByZXNvbHZlZENoYW5uZWw7XG4gICAgICAgIGlmICghaW5mb1tjaGFubmVsXSkge1xuICAgICAgICAgIGluZm9bY2hhbm5lbF0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzcGVjO1xuICAgICAgICBpZiAobm90ZXMgPiAwICYmIGluZGV4ID09PSAtMSkge1xuICAgICAgICAgIGNvbnN0IGVuZCA9IGluZm9bY2hhbm5lbF1baW5mb1tjaGFubmVsXS5sZW5ndGggLSAxXTtcbiAgICAgICAgICBpZiAoIWVuZCB8fCAhZW5kLmlucHV0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBNaXNzaW5nIGV4cHJlc3Npb24gZm9yICcke2xpbmV9J2ApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNwZWMgPSB7XG4gICAgICAgICAgICBpbnB1dDogZW5kLmlucHV0LFxuICAgICAgICAgICAgdmFsdWVzOiB2YWx1ZS5zbGljZSgxLCBub3RlcyksXG4gICAgICAgICAgICBkYXRhOiB2YWx1ZS5zbGljZShub3RlcyksXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChvZmZzZXQgPiAwKSB7XG4gICAgICAgICAgc3BlYyA9IHtcbiAgICAgICAgICAgIGRhdGE6IHZhbHVlLnNsaWNlKG9mZnNldCksXG4gICAgICAgICAgICBpbnB1dDogdmFsdWUuc2xpY2UoMCwgb2Zmc2V0KSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKG9mZnNldCA9PT0gMCkge1xuICAgICAgICAgIHNwZWMgPSB7IHZhbHVlczogdmFsdWUuc2xpY2UoMSkgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzcGVjID0geyBpbnB1dDogdmFsdWUgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbnB1dHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIGxldCByZXN0ID0gaW5wdXRzLnNsaWNlKDEpO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHJlc3RbMF1cbiAgICAgICAgICAgICYmIHJlc3RbMF0udHlwZSA9PT0gJ3ZhbHVlJ1xuICAgICAgICAgICAgJiYgKHJlc3RbMF0udmFsdWUgPT09ICchJyB8fCByZXN0WzBdLnZhbHVlID09PSAnKycpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBzcGVjLm1lcmdlID0gcmVzdFswXS52YWx1ZSA9PT0gJysnID8gJ2xheWVyJyA6ICdyZXBsYWNlJztcbiAgICAgICAgICAgIHJlc3QgPSByZXN0LnNsaWNlKDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzcGVjLnZhbHVlcyA9IHJlc3Q7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBDb3VudCBwYXR0ZXJuIHNsb3RzIGZvciB0aGlzIGNoYW5uZWxcbiAgICAgICAgZnVuY3Rpb24gY291bnRQYXR0ZXJuU2xvdHMocGF0dGVyblN0cmluZykge1xuICAgICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgIHdoaWxlIChpIDwgcGF0dGVyblN0cmluZy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChwYXR0ZXJuU3RyaW5nW2ldID09PSAnWycpIHtcbiAgICAgICAgICAgICAgLy8gU2tpcCB0aGUgYnJhY2tldGVkIGdyb3VwIGFzIDEgc2xvdFxuICAgICAgICAgICAgICBjb25zdCBlbmRCcmFja2V0ID0gcGF0dGVyblN0cmluZy5pbmRleE9mKCddJywgaSk7XG4gICAgICAgICAgICAgIGlmIChlbmRCcmFja2V0ID4gaSkge1xuICAgICAgICAgICAgICAgIGNvdW50ICs9IDE7XG4gICAgICAgICAgICAgICAgaSA9IGVuZEJyYWNrZXQgKyAxO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXR0ZXJuU3RyaW5nW2ldID09PSAneCcgfHwgcGF0dGVyblN0cmluZ1tpXSA9PT0gJy0nIHx8IHBhdHRlcm5TdHJpbmdbaV0gPT09ICdfJykge1xuICAgICAgICAgICAgICAvLyBFYWNoIGluZGl2aWR1YWwgY2hhcmFjdGVyIGlzIDEgc2xvdFxuICAgICAgICAgICAgICBjb3VudCArPSAxO1xuICAgICAgICAgICAgICBpICs9IDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjb3VudDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGV0IHBhdHRlcm5TbG90cyA9IDA7XG4gICAgICAgIGlmIChzcGVjLmlucHV0ICYmIEFycmF5LmlzQXJyYXkoc3BlYy5pbnB1dCkpIHtcbiAgICAgICAgICBzcGVjLmlucHV0LmZvckVhY2godG9rZW4gPT4ge1xuICAgICAgICAgICAgaWYgKHRva2VuLnR5cGUgPT09ICdwYXR0ZXJuJyAmJiB0eXBlb2YgdG9rZW4udmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIHBhdHRlcm5TbG90cyArPSBjb3VudFBhdHRlcm5TbG90cyh0b2tlbi52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNwZWMuZGF0YSAmJiBBcnJheS5pc0FycmF5KHNwZWMuZGF0YSkpIHtcbiAgICAgICAgICBzcGVjLmRhdGEuZm9yRWFjaCh0b2tlbiA9PiB7XG4gICAgICAgICAgICBpZiAodG9rZW4udHlwZSA9PT0gJ3BhdHRlcm4nICYmIHR5cGVvZiB0b2tlbi52YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgcGF0dGVyblNsb3RzICs9IGNvdW50UGF0dGVyblNsb3RzKHRva2VuLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gQWNjdW11bGF0ZSBzbG90IGNvdW50IGZvciB0aGlzIGNoYW5uZWxcbiAgICAgICAgaWYgKCF0cmFja1BhdHRlcm5TbG90c1tjaGFubmVsXSkge1xuICAgICAgICAgIHRyYWNrUGF0dGVyblNsb3RzW2NoYW5uZWxdID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0cmFja1BhdHRlcm5TbG90c1tjaGFubmVsXSArPSBwYXR0ZXJuU2xvdHM7XG5cbiAgICAgICAgaW5mb1tjaGFubmVsXS5wdXNoKHNwZWMpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnN0IG1zZyA9IHR5cGVvZiBlID09PSAnc3RyaW5nJyA/IGUgOiBlLm1lc3NhZ2U7XG5cbiAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgJHttc2d9XFxuICBhdCBsaW5lICR7bnRoICsgMX1cXG4ke2xpbmV9YCk7XG4gICAgfVxuICB9KTtcblxuICBpZiAodHJhY2spIHtcbiAgICB0cmFja3NbdHJhY2tdID0gaW5mbztcbiAgfVxuICBjb25zdCByZXN1bHQgPSB7IG1haW4sIGRhdGEsIHRyYWNrcyB9O1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVzdWx0LCAndHJhY2tQYXR0ZXJuU2xvdHMnLCB7XG4gICAgdmFsdWU6IHRyYWNrUGF0dGVyblNsb3RzLFxuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCAiaW1wb3J0IG1pZGlXcml0ZXIgZnJvbSAnbWlkaS13cml0ZXItanMnO1xuaW1wb3J0IGpzbWlkZ2VuIGZyb20gJ2pzbWlkZ2VuJztcbmltcG9ydCB7IGZsYXR0ZW4gfSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCB7IHNwbGl0LCBpc1BhdHRlcm4gfSBmcm9tICcuL3Rva2VuaXplLmpzJztcbmltcG9ydCB7IHJlZHVjZSB9IGZyb20gJy4vcGFyc2VyLmpzJztcblxuY29uc3QgeyBVdGlscyB9ID0gbWlkaVdyaXRlcjtcbmNvbnN0IHsgRmlsZSwgVHJhY2sgfSA9IGpzbWlkZ2VuO1xuXG5jb25zdCBERUZBVUxUID0gU3ltYm9sKCdAbWFpbicpO1xuXG5mdW5jdGlvbiBtZXJnZU5vdGVQYXlsb2FkKGEsIGIpIHtcbiAgY29uc3QgYWEgPSBBcnJheS5pc0FycmF5KGEpID8gYSA6IChhID8gW2FdIDogW10pO1xuICBjb25zdCBiYiA9IEFycmF5LmlzQXJyYXkoYikgPyBiIDogKGIgPyBbYl0gOiBbXSk7XG4gIGNvbnN0IG91dCA9IFtdO1xuXG4gIGFhLmNvbmNhdChiYikuZm9yRWFjaChub3RlID0+IHtcbiAgICBpZiAodHlwZW9mIG5vdGUgPT09ICd1bmRlZmluZWQnIHx8IG5vdGUgPT09IG51bGwpIHJldHVybjtcbiAgICBpZiAoIW91dC5pbmNsdWRlcyhub3RlKSkgb3V0LnB1c2gobm90ZSk7XG4gIH0pO1xuXG4gIGlmIChvdXQubGVuZ3RoID09PSAwKSByZXR1cm4gdW5kZWZpbmVkO1xuICBpZiAob3V0Lmxlbmd0aCA9PT0gMSkgcmV0dXJuIG91dFswXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuZnVuY3Rpb24gbWVyZ2VUaWNrcyhsZWZ0LCByaWdodCkge1xuICBpZiAoQXJyYXkuaXNBcnJheShsZWZ0KSB8fCBBcnJheS5pc0FycmF5KHJpZ2h0KSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGxlZnQpICYmIEFycmF5LmlzQXJyYXkocmlnaHQpKSB7XG4gICAgICBjb25zdCBtYXggPSBNYXRoLm1heChsZWZ0Lmxlbmd0aCwgcmlnaHQubGVuZ3RoKTtcbiAgICAgIGNvbnN0IG91dCA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heDsgaSArPSAxKSB7XG4gICAgICAgIG91dC5wdXNoKG1lcmdlVGlja3MobGVmdFtpXSwgcmlnaHRbaV0pKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVvZiByaWdodCAhPT0gJ3VuZGVmaW5lZCcgPyByaWdodCA6IGxlZnQ7XG4gIH1cblxuICBpZiAoIWxlZnQpIHJldHVybiByaWdodDtcbiAgaWYgKCFyaWdodCkgcmV0dXJuIGxlZnQ7XG5cbiAgY29uc3QgbHYgPSBsZWZ0LnYgfHwgMDtcbiAgY29uc3QgcnYgPSByaWdodC52IHx8IDA7XG4gIGNvbnN0IGhpdExlZnQgPSBsdiA+IDA7XG4gIGNvbnN0IGhpdFJpZ2h0ID0gcnYgPiAwO1xuXG4gIGlmICghaGl0TGVmdCAmJiBoaXRSaWdodCkgcmV0dXJuIHsgLi4ucmlnaHQgfTtcbiAgaWYgKGhpdExlZnQgJiYgIWhpdFJpZ2h0KSByZXR1cm4geyAuLi5sZWZ0IH07XG5cbiAgaWYgKCFoaXRMZWZ0ICYmICFoaXRSaWdodCkge1xuICAgIHJldHVybiAobGVmdC5oIHx8IHJpZ2h0LmgpID8geyB2OiAwLCBoOiAxIH0gOiB7IHY6IDAgfTtcbiAgfVxuXG4gIGNvbnN0IG91dCA9IHtcbiAgICAuLi5sZWZ0LFxuICAgIC4uLnJpZ2h0LFxuICAgIHY6IE1hdGgubWF4KGx2LCBydiksXG4gIH07XG4gIGNvbnN0IG5vdGUgPSBtZXJnZU5vdGVQYXlsb2FkKGxlZnQubiwgcmlnaHQubik7XG4gIGlmICh0eXBlb2Ygbm90ZSAhPT0gJ3VuZGVmaW5lZCcpIG91dC5uID0gbm90ZTtcbiAgcmV0dXJuIG91dDtcbn1cblxuZnVuY3Rpb24gbWVyZ2VUaWNrTGF5ZXJzKGJhc2UsIHRvcCkge1xuICBjb25zdCBtYXggPSBNYXRoLm1heChiYXNlLmxlbmd0aCwgdG9wLmxlbmd0aCk7XG4gIGNvbnN0IG91dCA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4OyBpICs9IDEpIHtcbiAgICBvdXQucHVzaChtZXJnZVRpY2tzKGJhc2VbaV0sIHRvcFtpXSkpO1xuICB9XG4gIHJldHVybiBvdXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZChtaWRpLCBicG0gPSAxMjAsIGxlbmd0aCA9IDE2KSB7XG4gIGNvbnN0IGZpbGUgPSBuZXcgRmlsZSgpO1xuICBjb25zdCBxID0gMTY7XG4gIGNvbnN0IG8gPSB7fTtcblxuICBicG0gKj0gbGVuZ3RoIC8gcTtcblxuICBsZXQgY2ggPSAwO1xuICBmdW5jdGlvbiBnZXQobnRoLCBuYW1lKSB7XG4gICAgY29uc3Qga2V5ID0gbnRoICsgbmFtZTtcblxuICAgIGlmICghZ2V0W2tleV0pIHtcbiAgICAgIGNvbnN0IHRyYWNrID0gbmV3IFRyYWNrKCk7XG4gICAgICBjb25zdCBjaGFuID0gbnRoID09PSAnMCcgPyA5IDogY2g7XG5cbiAgICAgIGZpbGUuYWRkVHJhY2sodHJhY2spO1xuICAgICAgZ2V0W2tleV0gPSB7IGNoYW4sIHRyYWNrIH07XG4gICAgICBpZiAobnRoICE9PSAnMCcpIGNoICs9IDE7XG4gICAgfVxuICAgIHJldHVybiBnZXRba2V5XTtcbiAgfVxuXG4gIG1pZGkuZm9yRWFjaChzZWN0aW9uID0+IHtcbiAgICBzZWN0aW9uLmZvckVhY2gocGFydHMgPT4ge1xuICAgICAgcGFydHMuZm9yRWFjaChlID0+IHtcbiAgICAgICAgY29uc3QgeyBjaGFuLCB0cmFjayB9ID0gZ2V0KGVbMF0sIGVbMV0pO1xuXG4gICAgICAgIHRyYWNrLnNldFRlbXBvKGJwbSk7XG4gICAgICAgIGlmIChjaGFuICE9PSA5KSB7XG4gICAgICAgICAgdHJhY2suaW5zdHJ1bWVudChjaGFuLCBlWzBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZVsyXS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGNvbnN0IHRpY2sgPSBlWzJdW2ldO1xuXG4gICAgICAgICAgaWYgKHRpY2sudiA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IG5vdGUgPSB0aWNrLm4gfHwgJ0MzJztcblxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobm90ZSkpIHtcbiAgICAgICAgICAgICAgdHJhY2subm90ZU9mZihjaGFuLCAnJywgcSk7XG4gICAgICAgICAgICAgIHRyYWNrLmFkZENob3JkKGNoYW4sIG5vdGUsIHEsIHRpY2sudik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0cmFjay5ub3RlT24oY2hhbiwgbm90ZSwgcSwgdGljay52KTtcbiAgICAgICAgICAgICAgdHJhY2subm90ZU9mZihjaGFuLCBub3RlLCBxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJhY2subm90ZU9mZihjaGFuLCAnJywgcSAqIDIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gZmlsZS50b0J5dGVzKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYWNrKHZhbHVlcywgbm90ZXMpIHtcbiAgbGV0IG9mZnNldDtcbiAgZnVuY3Rpb24gY3ljbGljYWwobGlzdCwgaW5kZXgpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobGlzdCkgfHwgIWxpc3QubGVuZ3RoKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIGNvbnN0IHBvcyA9ICgoaW5kZXggJSBsaXN0Lmxlbmd0aCkgKyBsaXN0Lmxlbmd0aCkgJSBsaXN0Lmxlbmd0aDtcbiAgICByZXR1cm4gbGlzdFtwb3NdO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzb2x2ZSh4KSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoeCkpIHtcbiAgICAgIHJldHVybiB4Lm1hcChyZXNvbHZlKTtcbiAgICB9XG5cbiAgICAvLyBOb3JtYWxpemUgY29tcGFjdC9ncm91cGVkIHBhdHRlcm4gZnJhZ21lbnRzIHRoYXQgbWF5IHN1cmZhY2UgYXMgc3RyaW5nc1xuICAgIC8vIGluIHNvbWUgcnVudGltZS9idW5kbGUgcGF0aHM6IFwieHhcIiwgXCJbeHhdXCIsIFwieFt4eF1cIiwgZXRjLlxuICAgIGlmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycgJiYgeC5sZW5ndGggPiAxICYmIC9beF9cXC1cXFtcXF1dLy50ZXN0KHgpKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IHNwbGl0KHgpO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocGFydHMpICYmIHBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgcmV0dXJuIHBhcnRzLm1hcChyZXNvbHZlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgdG9rZW47XG4gICAgaWYgKCEnLXhfJy5pbmNsdWRlcyh4KSkge1xuICAgICAgdG9rZW4gPSB7IHY6IDEyNywgbDogeCB9O1xuICAgICAgY29uc3QgdmVsb2NpdHkgPSBjeWNsaWNhbCh2YWx1ZXMsIG9mZnNldCk7XG4gICAgICB0b2tlbi52ID0gdHlwZW9mIHZlbG9jaXR5ICE9PSAndW5kZWZpbmVkJyA/IHZlbG9jaXR5IDogdG9rZW4udiB8fCAwO1xuICAgICAgY29uc3Qgbm90ZSA9IGN5Y2xpY2FsKG5vdGVzLCBvZmZzZXQpO1xuICAgICAgaWYgKHR5cGVvZiBub3RlICE9PSAndW5kZWZpbmVkJykgdG9rZW4ubiA9IG5vdGU7XG4gICAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMSkgdG9rZW4udiA9IHZhbHVlc1swXTtcbiAgICAgIGlmICh0b2tlbi52IHx8IHRva2VuLm4pIG9mZnNldCArPSAxO1xuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH1cblxuICAgIGlmICh4ID09PSAnLScpIHtcbiAgICAgIHJldHVybiB7IHY6IDAgfTtcbiAgICB9XG5cbiAgICBpZiAoeCA9PT0gJ18nKSB7XG4gICAgICByZXR1cm4geyB2OiAwLCBoOiAxIH07XG4gICAgfVxuXG4gICAgdG9rZW4gPSB7IHY6IDEyNyB9O1xuICAgIGNvbnN0IHZlbG9jaXR5ID0gY3ljbGljYWwodmFsdWVzLCBvZmZzZXQpO1xuICAgIHRva2VuLnYgPSB0eXBlb2YgdmVsb2NpdHkgIT09ICd1bmRlZmluZWQnID8gdmVsb2NpdHkgOiB0b2tlbi52IHx8IDA7XG4gICAgY29uc3Qgbm90ZSA9IGN5Y2xpY2FsKG5vdGVzLCBvZmZzZXQpO1xuICAgIGlmICh0eXBlb2Ygbm90ZSAhPT0gJ3VuZGVmaW5lZCcpIHRva2VuLm4gPSBub3RlO1xuICAgIGlmICh2YWx1ZXMubGVuZ3RoID09PSAxKSB0b2tlbi52ID0gdmFsdWVzWzBdO1xuICAgIGlmICh0b2tlbi52IHx8IHRva2VuLm4pIG9mZnNldCArPSAxO1xuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZSA9PiB7XG4gICAgbGV0IHJlc3VsdCA9IHZhbHVlO1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoaXNQYXR0ZXJuKHZhbHVlKSkge1xuICAgICAgICBvZmZzZXQgPSAwO1xuICAgICAgICByZXN1bHQgPSBzcGxpdCh2YWx1ZSkubWFwKHJlc29sdmUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoY3R4KSB7XG4gIGNvbnN0IHNjZW5lcyA9IHt9O1xuXG4gIE9iamVjdC5lbnRyaWVzKGN0eC50cmFja3MpLmZvckVhY2goKFtuYW1lLCBjaGFubmVsc10pID0+IHtcbiAgICBPYmplY3QuZW50cmllcyhjaGFubmVscykuZm9yRWFjaCgoW2NoLCBjbGlwc10pID0+IHtcbiAgICAgIGNvbnN0IFt0YWcsIG1pZGldID0gY2guc3BsaXQoJyMnKTtcbiAgICAgIGNvbnN0IGtleSA9IHRhZyB8fCBERUZBVUxUO1xuXG4gICAgICBsZXQgdGlja3M7XG4gICAgICBjbGlwcy5mb3JFYWNoKGNsaXAgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBjbGlwLnZhbHVlcyA/IHJlZHVjZShjbGlwLnZhbHVlcywgY3R4LmRhdGEpIDogW107XG4gICAgICAgIGNvbnN0IG5vdGVzID0gY2xpcC5kYXRhID8gcmVkdWNlKGNsaXAuZGF0YSwgY3R4LmRhdGEpIDogW107XG5cbiAgICAgICAgaWYgKGNsaXAuaW5wdXQpIHtcbiAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA+IDEpIHZhbHVlcy5zaGlmdCgpO1xuXG4gICAgICAgICAgY29uc3QgaW5wdXQgPSBmbGF0dGVuKHJlZHVjZShjbGlwLmlucHV0LCBjdHguZGF0YSwgcGFjayh2YWx1ZXMsIG5vdGVzKSkpO1xuICAgICAgICAgIGNvbnN0IG1vZGUgPSBjbGlwLnZhbHVlc1xuICAgICAgICAgICAgJiYgY2xpcC52YWx1ZXNbMF1cbiAgICAgICAgICAgICYmIGNsaXAudmFsdWVzWzBdLnR5cGUgPT09ICdtb2RlJyA/IGNsaXAudmFsdWVzWzBdLnZhbHVlIDogbnVsbDtcblxuICAgICAgICAgIGlucHV0LmZvckVhY2godGljayA9PiB7XG4gICAgICAgICAgICBpZiAodGljay52ID4gMCkge1xuICAgICAgICAgICAgICBpZiAobW9kZSAmJiB2YWx1ZXMubGVuZ3RoID4gMCkgdGlja1ttb2RlWzBdLnRvTG93ZXJDYXNlKCldID0gdmFsdWVzLnNoaWZ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAoY2xpcC5tZXJnZSA9PT0gJ2xheWVyJyAmJiB0aWNrcykge1xuICAgICAgICAgICAgdGlja3MgPSBtZXJnZVRpY2tMYXllcnModGlja3MsIGlucHV0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGlja3MgPSBpbnB1dDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGlja3MpIHtcbiAgICAgICAgICBjb25zdCBtb2RlID0gY2xpcC52YWx1ZXNcbiAgICAgICAgICAgICYmIGNsaXAudmFsdWVzWzBdXG4gICAgICAgICAgICAmJiBjbGlwLnZhbHVlc1swXS50eXBlID09PSAnbW9kZScgPyBjbGlwLnZhbHVlc1swXS52YWx1ZSA6IG51bGw7XG5cbiAgICAgICAgICB0aWNrcy5mb3JFYWNoKHRpY2sgPT4ge1xuICAgICAgICAgICAgaWYgKHRpY2sudiA+IDApIHtcbiAgICAgICAgICAgICAgaWYgKG1vZGUgJiYgdmFsdWVzLmxlbmd0aCA+IDApIHRpY2tbbW9kZVswXS50b0xvd2VyQ2FzZSgpXSA9IHZhbHVlcy5zaGlmdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKCFzY2VuZXNba2V5XSkgc2NlbmVzW2tleV0gPSB7IHRyYWNrczogW10gfTtcbiAgICAgIHNjZW5lc1trZXldLnRyYWNrcy5wdXNoKFttaWRpLCBuYW1lLCB0aWNrc10pO1xuICAgIH0pO1xuICB9KTtcblxuICBpZiAoIWN0eC5tYWluLmxlbmd0aCkge1xuICAgIGN0eC5tYWluID0gW1t7IHR5cGU6ICd2YWx1ZScsIHZhbHVlOiBERUZBVUxUIH1dXTtcbiAgfVxuXG4gIHJldHVybiBjdHgubWFpbi5tYXAodHJhY2sgPT4ge1xuICAgIHJldHVybiByZWR1Y2UodHJhY2ssIHNjZW5lcykubWFwKGl0ZW0gPT4ge1xuICAgICAgcmV0dXJuIFtdLmNvbmNhdChpdGVtKS5yZWR1Y2UoKG1lbW8sIHgpID0+IHtcbiAgICAgICAgbWVtby5wdXNoKC4uLngudHJhY2tzKTtcbiAgICAgICAgcmV0dXJuIG1lbW87XG4gICAgICB9LCBbXSk7XG4gICAgfSk7XG4gIH0pO1xufVxuIiwgImltcG9ydCB7IHBhcnNlIH0gZnJvbSAnLi9wYXJzZXIuanMnO1xuaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICcuL21peHVwLmpzJztcbmltcG9ydCB7IHRyYW5zZm9ybSB9IGZyb20gJy4vdG9rZW5pemUuanMnO1xuXG5jb25zdCBERUZBVUxUX09QVElPTlMgPSB7XG4gIGFnZ3Jlc3NpdmU6IGZhbHNlLFxuICBtYXhWYXJpYWJsZUluZGV4OiAxLFxuICBtaW5PY2N1cnJlbmNlczogMixcbiAgbWluU2VxdWVuY2VMZW5ndGg6IDIsXG59O1xuXG5jb25zdCBWQVJJQUJMRV9QUkVGSVggPSAnYyc7XG5jb25zdCBDQU5ESURBVEVfVE9LRU5fVFlQRVMgPSBuZXcgU2V0KFsnbm90ZScsICdjaG9yZCddKTtcblxuZnVuY3Rpb24gbm9ybWFsaXplU291cmNlKHNvdXJjZSkge1xuICByZXR1cm4gU3RyaW5nKHNvdXJjZSB8fCAnJykucmVwbGFjZSgvXFxyL2csICcnKS50cmltKCk7XG59XG5cbmZ1bmN0aW9uIGZpbmRTdWZmaXhEYXNoQ29tbWVudEluZGV4KHJhd0xpbmUpIHtcbiAgY29uc3QgbWF0Y2ggPSByYXdMaW5lLm1hdGNoKC9cXHMtLVxccy8pO1xuICBpZiAoIW1hdGNoIHx8IHR5cGVvZiBtYXRjaC5pbmRleCAhPT0gJ251bWJlcicpIHJldHVybiAtMTtcbiAgaWYgKCEvXFxTLy50ZXN0KHJhd0xpbmUuc2xpY2UoMCwgbWF0Y2guaW5kZXgpKSkgcmV0dXJuIC0xO1xuICByZXR1cm4gbWF0Y2guaW5kZXg7XG59XG5cbmZ1bmN0aW9uIHN0cmlwQ29tbWVudChyYXdMaW5lKSB7XG4gIGNvbnN0IHNlbWljb2xvbkluZGV4ID0gcmF3TGluZS5pbmRleE9mKCc7Jyk7XG4gIGNvbnN0IGRhc2hDb21tZW50SW5kZXggPSBmaW5kU3VmZml4RGFzaENvbW1lbnRJbmRleChyYXdMaW5lKTtcbiAgbGV0IGluZGV4ID0gLTE7XG5cbiAgaWYgKHNlbWljb2xvbkluZGV4ID49IDAgJiYgZGFzaENvbW1lbnRJbmRleCA+PSAwKSB7XG4gICAgaW5kZXggPSBNYXRoLm1pbihzZW1pY29sb25JbmRleCwgZGFzaENvbW1lbnRJbmRleCk7XG4gIH0gZWxzZSBpZiAoc2VtaWNvbG9uSW5kZXggPj0gMCkge1xuICAgIGluZGV4ID0gc2VtaWNvbG9uSW5kZXg7XG4gIH0gZWxzZSBpZiAoZGFzaENvbW1lbnRJbmRleCA+PSAwKSB7XG4gICAgaW5kZXggPSBkYXNoQ29tbWVudEluZGV4O1xuICB9XG5cbiAgaWYgKGluZGV4IDwgMCkgcmV0dXJuIHtcbiAgICBjb2RlOiByYXdMaW5lLFxuICAgIGNvbW1lbnQ6ICcnLFxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY29kZTogcmF3TGluZS5zbGljZSgwLCBpbmRleCksXG4gICAgY29tbWVudDogcmF3TGluZS5zbGljZShpbmRleCksXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRvSW50KHZhbHVlLCBmYWxsYmFjaykge1xuICBjb25zdCBwYXJzZWQgPSBwYXJzZUludCh2YWx1ZSwgMTApO1xuICByZXR1cm4gTnVtYmVyLmlzRmluaXRlKHBhcnNlZCkgJiYgcGFyc2VkID4gMCA/IHBhcnNlZCA6IGZhbGxiYWNrO1xufVxuXG5mdW5jdGlvbiB0b2tlblRleHQodG9rZW4pIHtcbiAgaWYgKCF0b2tlbikgcmV0dXJuICcnO1xuXG4gIHN3aXRjaCAodG9rZW4udHlwZSkge1xuICAgIGNhc2UgJ2NoYW5uZWwnOlxuICAgICAgcmV0dXJuIFN0cmluZyh0b2tlbi52YWx1ZSk7XG4gICAgY2FzZSAnY2hvcmQnOlxuICAgICAgcmV0dXJuIHRva2VuLnZhbHVlLmpvaW4oJ3wnKTtcbiAgICBjYXNlICdudW1iZXInOlxuICAgIGNhc2UgJ21vZGUnOlxuICAgIGNhc2UgJ3BhcmFtJzpcbiAgICBjYXNlICd2YWx1ZSc6XG4gICAgICByZXR1cm4gU3RyaW5nKHRva2VuLnZhbHVlKTtcbiAgICBjYXNlICdzbGljZSc6XG4gICAgICByZXR1cm4gYCR7dG9rZW4udmFsdWVbMF19Li4ke3Rva2VuLnZhbHVlWzFdfWA7XG4gICAgY2FzZSAncGF0dGVybic6XG4gICAgICByZXR1cm4gdG9rZW4udmFsdWU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBTdHJpbmcodG9rZW4udmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRva2Vuc1RvVGV4dCh0b2tlbnMpIHtcbiAgcmV0dXJuIHRva2Vucy5tYXAodG9rZW5UZXh0KS5qb2luKCcgJyk7XG59XG5cbmZ1bmN0aW9uIGlzQ2FuZGlkYXRlVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIENBTkRJREFURV9UT0tFTl9UWVBFUy5oYXModG9rZW4gJiYgdG9rZW4udHlwZSk7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkTGluZVNlZ21lbnRzKHRva2VucywgaGFzQ2hhbm5lbCkge1xuICBjb25zdCBzZWdtZW50cyA9IFtdO1xuXG4gIGlmICghaGFzQ2hhbm5lbCkge1xuICAgIHJldHVybiBbe1xuICAgICAga2luZDogJ3ZhbHVlcycsXG4gICAgICBzdGFydDogMCxcbiAgICAgIGVuZDogdG9rZW5zLmxlbmd0aCxcbiAgICAgIHRva2VuczogdG9rZW5zLnNsaWNlKDAsIHRva2Vucy5sZW5ndGgpLFxuICAgIH1dO1xuICB9XG5cbiAgY29uc3Qgbm90ZXMgPSB0b2tlbnMuZmluZEluZGV4KHRva2VuID0+IFsnbm90ZScsICdjaG9yZCcsICdwYXJhbSddLmluY2x1ZGVzKHRva2VuLnR5cGUpKTtcbiAgY29uc3QgaW5kZXggPSB0b2tlbnMuZmluZEluZGV4KHRva2VuID0+IHRva2VuLnR5cGUgPT09ICdwYXR0ZXJuJyk7XG4gIGNvbnN0IHZhbHVlID0gaW5kZXggPiAwID8gdG9rZW5zLnNsaWNlKGluZGV4KSA6IHRva2VucztcbiAgY29uc3Qgb2Zmc2V0ID0gdmFsdWUuZmluZEluZGV4KHRva2VuID0+IHRva2VuLnR5cGUgIT09ICdwYXR0ZXJuJyk7XG4gIGNvbnN0IGlucHV0cyA9IHRva2Vucy5zbGljZSgwLCBpbmRleCA+IDAgPyBpbmRleCA6IDEpO1xuXG4gIGxldCB2YWx1ZXMgPSBbXTtcbiAgbGV0IGRhdGEgPSBbXTtcbiAgbGV0IHZhbHVlc1N0YXJ0ID0gLTE7XG4gIGxldCBkYXRhU3RhcnQgPSAtMTtcblxuICBpZiAobm90ZXMgPiAwICYmIGluZGV4ID09PSAtMSkge1xuICAgIHZhbHVlcyA9IHZhbHVlLnNsaWNlKDEsIG5vdGVzKTtcbiAgICB2YWx1ZXNTdGFydCA9IDE7XG4gICAgZGF0YSA9IHZhbHVlLnNsaWNlKG5vdGVzKTtcbiAgICBkYXRhU3RhcnQgPSB2YWx1ZXNTdGFydCArIHZhbHVlcy5sZW5ndGg7XG4gIH0gZWxzZSBpZiAob2Zmc2V0ID4gMCkge1xuICAgIGRhdGEgPSB2YWx1ZS5zbGljZShvZmZzZXQpO1xuICAgIGRhdGFTdGFydCA9IGluZGV4ICsgb2Zmc2V0O1xuICB9IGVsc2UgaWYgKG9mZnNldCA9PT0gMCkge1xuICAgIHZhbHVlcyA9IHZhbHVlLnNsaWNlKDEpO1xuICAgIHZhbHVlc1N0YXJ0ID0gMTtcbiAgfVxuXG4gIGlmIChpbnB1dHMubGVuZ3RoID4gMSkge1xuICAgIGxldCByZXN0ID0gaW5wdXRzLnNsaWNlKDEpO1xuXG4gICAgaWYgKFxuICAgICAgcmVzdFswXVxuICAgICAgJiYgcmVzdFswXS50eXBlID09PSAndmFsdWUnXG4gICAgICAmJiAocmVzdFswXS52YWx1ZSA9PT0gJyEnIHx8IHJlc3RbMF0udmFsdWUgPT09ICcrJylcbiAgICApIHtcbiAgICAgIHJlc3QgPSByZXN0LnNsaWNlKDEpO1xuICAgIH1cblxuICAgIGlmIChyZXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgIHZhbHVlcyA9IHJlc3Q7XG4gICAgICB2YWx1ZXNTdGFydCA9IDE7XG4gICAgfVxuICB9XG5cbiAgaWYgKHZhbHVlc1N0YXJ0ID49IDAgJiYgdmFsdWVzLmxlbmd0aCkge1xuICAgIHNlZ21lbnRzLnB1c2goe1xuICAgICAga2luZDogJ3ZhbHVlcycsXG4gICAgICBzdGFydDogdmFsdWVzU3RhcnQsXG4gICAgICBlbmQ6IHZhbHVlc1N0YXJ0ICsgdmFsdWVzLmxlbmd0aCxcbiAgICAgIHRva2VuczogdG9rZW5zLnNsaWNlKHZhbHVlc1N0YXJ0LCB2YWx1ZXNTdGFydCArIHZhbHVlcy5sZW5ndGgpLFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKGRhdGFTdGFydCA+PSAwICYmIGRhdGEubGVuZ3RoKSB7XG4gICAgc2VnbWVudHMucHVzaCh7XG4gICAgICBraW5kOiAnZGF0YScsXG4gICAgICBzdGFydDogZGF0YVN0YXJ0LFxuICAgICAgZW5kOiBkYXRhU3RhcnQgKyBkYXRhLmxlbmd0aCxcbiAgICAgIHRva2VuczogdG9rZW5zLnNsaWNlKGRhdGFTdGFydCwgZGF0YVN0YXJ0ICsgZGF0YS5sZW5ndGgpLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHNlZ21lbnRzO1xufVxuXG5mdW5jdGlvbiBwYXJzZUNsaXBMaW5lcyhzb3VyY2UpIHtcbiAgY29uc3QgbGluZXMgPSBub3JtYWxpemVTb3VyY2Uoc291cmNlKS5zcGxpdCgnXFxuJyk7XG4gIGNvbnN0IGxpbmVFbnRyaWVzID0gbmV3IE1hcCgpO1xuICBjb25zdCBzZWdtZW50cyA9IFtdO1xuXG4gIGxldCBwcmVmaXggPSAnJztcbiAgbGV0IGNoYW5uZWwgPSBudWxsO1xuXG4gIGxpbmVzLmZvckVhY2goKHJhd0xpbmUsIGxpbmVOdW1iZXIpID0+IHtcbiAgICBjb25zdCB7IGNvZGUsIGNvbW1lbnQgfSA9IHN0cmlwQ29tbWVudChyYXdMaW5lKTtcbiAgICBjb25zdCBsaW5lID0gY29kZS50cmltKCk7XG5cbiAgICBpZiAoIWxpbmUpIHJldHVybjtcbiAgICBpZiAobGluZS5jaGFyQXQoKSA9PT0gJzsnKSByZXR1cm47XG5cbiAgICBpZiAobGluZS5pbmRleE9mKCcjICcpID49IDApIHtcbiAgICAgIHByZWZpeCA9ICcnO1xuICAgICAgY2hhbm5lbCA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGxpbmUuY2hhckF0KCkgPT09ICdAJykge1xuICAgICAgcHJlZml4ID0gbGluZS5zdWJzdHIoMSkudHJpbSgpLnNwbGl0KCcgJylbMF07XG4gICAgICBjaGFubmVsID0gbnVsbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobGluZS5jaGFyQXQoKSA9PT0gJz4nIHx8IGxpbmUuaW5kZXhPZignOicpID4gMCB8fCAobGluZS5jaGFyQXQoKSA9PT0gJyUnICYmIGxpbmUuY2hhckF0KDEpICE9PSAnJScpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHRva2VucztcbiAgICB0cnkge1xuICAgICAgdG9rZW5zID0gdHJhbnNmb3JtKGxpbmUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zdCBtc2cgPSB0eXBlb2YgZXJyb3IgPT09ICdzdHJpbmcnID8gZXJyb3IgOiBlcnJvci5tZXNzYWdlO1xuICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGAke21zZ31cXG4gIGF0IGxpbmUgJHtsaW5lTnVtYmVyICsgMX1cXG4ke2xpbmV9YCk7XG4gICAgfVxuXG4gICAgaWYgKCF0b2tlbnMubGVuZ3RoKSByZXR1cm47XG5cbiAgICBjb25zdCBoYXNDaGFubmVsID0gdG9rZW5zWzBdICYmIHRva2Vuc1swXS50eXBlID09PSAnY2hhbm5lbCc7XG4gICAgaWYgKCFoYXNDaGFubmVsICYmICFjaGFubmVsKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBNaXNzaW5nIGNoYW5uZWwsIGdpdmVuICcke2xpbmV9J2ApO1xuICAgIH1cblxuICAgIGlmIChoYXNDaGFubmVsKSB7XG4gICAgICBjaGFubmVsID0gYCR7cHJlZml4fSR7dG9rZW5zWzBdLnZhbHVlfWA7XG4gICAgICB2b2lkIGNoYW5uZWw7XG4gICAgfVxuXG4gICAgY29uc3QgbGluZVNlZ21lbnRzID0gYnVpbGRMaW5lU2VnbWVudHModG9rZW5zLCBoYXNDaGFubmVsKTtcbiAgICBpZiAoIWxpbmVTZWdtZW50cy5sZW5ndGgpIHJldHVybjtcblxuICAgIGNvbnN0IGVudHJ5ID0ge1xuICAgICAgcmF3OiByYXdMaW5lLFxuICAgICAgaW5kZW50OiByYXdMaW5lLm1hdGNoKC9eXFxzKi8pWzBdIHx8ICcnLFxuICAgICAgY29tbWVudCxcbiAgICAgIHRva2VucyxcbiAgICAgIHNlZ21lbnRzOiBbXSxcbiAgICB9O1xuXG4gICAgbGluZVNlZ21lbnRzLmZvckVhY2gocmFuZ2UgPT4ge1xuICAgICAgY29uc3Qgc2VnbWVudCA9IHtcbiAgICAgICAgaWQ6IHNlZ21lbnRzLmxlbmd0aCxcbiAgICAgICAgbGluZTogbGluZU51bWJlcixcbiAgICAgICAga2luZDogcmFuZ2Uua2luZCxcbiAgICAgICAgc3RhcnQ6IHJhbmdlLnN0YXJ0LFxuICAgICAgICBlbmQ6IHJhbmdlLmVuZCxcbiAgICAgICAgdG9rZW5zOiByYW5nZS50b2tlbnMsXG4gICAgICB9O1xuICAgICAgc2VnbWVudHMucHVzaChzZWdtZW50KTtcbiAgICAgIGVudHJ5LnNlZ21lbnRzLnB1c2goc2VnbWVudCk7XG4gICAgfSk7XG5cbiAgICBsaW5lRW50cmllcy5zZXQobGluZU51bWJlciwgZW50cnkpO1xuICB9KTtcblxuICByZXR1cm4ge1xuICAgIGxpbmVzLFxuICAgIGxpbmVFbnRyaWVzLFxuICAgIHNlZ21lbnRzLFxuICB9O1xufVxuXG5mdW5jdGlvbiBjb2xsZWN0Q2FuZGlkYXRlcyhzZWdtZW50cywgbWluU2VxdWVuY2VMZW5ndGgpIHtcbiAgY29uc3QgbGl0ZXJhbHMgPSBuZXcgTWFwKCk7XG4gIGNvbnN0IHNlcXVlbmNlcyA9IG5ldyBNYXAoKTtcblxuICBzZWdtZW50cy5mb3JFYWNoKHNlZ21lbnQgPT4ge1xuICAgIHNlZ21lbnQudG9rZW5zLmZvckVhY2goKHRva2VuLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHRva2VuLnR5cGUgIT09ICdjaG9yZCcpIHJldHVybjtcblxuICAgICAgY29uc3QgdGV4dCA9IHRva2VuVGV4dCh0b2tlbik7XG4gICAgICBjb25zdCBrZXkgPSBgY2hvcmQ6JHt0ZXh0fWA7XG4gICAgICBpZiAoIWxpdGVyYWxzLmhhcyhrZXkpKSB7XG4gICAgICAgIGxpdGVyYWxzLnNldChrZXksIHtcbiAgICAgICAgICBrZXksXG4gICAgICAgICAgdGV4dCxcbiAgICAgICAgICB0ZXh0TGVuZ3RoOiB0ZXh0Lmxlbmd0aCxcbiAgICAgICAgICB0b2tlbkNvdW50OiAxLFxuICAgICAgICAgIG9jY3VycmVuY2VzOiBbXSxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGxpdGVyYWxzLmdldChrZXkpLm9jY3VycmVuY2VzLnB1c2goe1xuICAgICAgICBzZWdtZW50SWQ6IHNlZ21lbnQuaWQsXG4gICAgICAgIHN0YXJ0OiBpbmRleCxcbiAgICAgICAgbGVuZ3RoOiAxLFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpZiAoc2VnbWVudC50b2tlbnMubGVuZ3RoIDwgbWluU2VxdWVuY2VMZW5ndGgpIHJldHVybjtcblxuICAgIGZvciAobGV0IHN0YXJ0ID0gMDsgc3RhcnQgPCBzZWdtZW50LnRva2Vucy5sZW5ndGg7IHN0YXJ0ICs9IDEpIHtcbiAgICAgIGlmICghaXNDYW5kaWRhdGVUb2tlbihzZWdtZW50LnRva2Vuc1tzdGFydF0pKSBjb250aW51ZTtcblxuICAgICAgY29uc3QgcGFydHMgPSBbXTtcbiAgICAgIGZvciAobGV0IGVuZCA9IHN0YXJ0OyBlbmQgPCBzZWdtZW50LnRva2Vucy5sZW5ndGg7IGVuZCArPSAxKSB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gc2VnbWVudC50b2tlbnNbZW5kXTtcbiAgICAgICAgaWYgKCFpc0NhbmRpZGF0ZVRva2VuKHRva2VuKSkgYnJlYWs7XG5cbiAgICAgICAgcGFydHMucHVzaCh0b2tlblRleHQodG9rZW4pKTtcbiAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA8IG1pblNlcXVlbmNlTGVuZ3RoKSBjb250aW51ZTtcblxuICAgICAgICBjb25zdCB0ZXh0ID0gcGFydHMuam9pbignICcpO1xuICAgICAgICBjb25zdCBrZXkgPSBgc2VxOiR7dGV4dH1gO1xuICAgICAgICBpZiAoIXNlcXVlbmNlcy5oYXMoa2V5KSkge1xuICAgICAgICAgIHNlcXVlbmNlcy5zZXQoa2V5LCB7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgdGV4dExlbmd0aDogdGV4dC5sZW5ndGgsXG4gICAgICAgICAgICB0b2tlbkNvdW50OiBwYXJ0cy5sZW5ndGgsXG4gICAgICAgICAgICBvY2N1cnJlbmNlczogW10sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXF1ZW5jZXMuZ2V0KGtleSkub2NjdXJyZW5jZXMucHVzaCh7XG4gICAgICAgICAgc2VnbWVudElkOiBzZWdtZW50LmlkLFxuICAgICAgICAgIHN0YXJ0LFxuICAgICAgICAgIGxlbmd0aDogcGFydHMubGVuZ3RoLFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBleGlzdGluZyA9IHNlcXVlbmNlcy5nZXQoa2V5KTtcbiAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA+IGV4aXN0aW5nLnRva2VuQ291bnQpIHtcbiAgICAgICAgICBleGlzdGluZy50b2tlbkNvdW50ID0gcGFydHMubGVuZ3RoO1xuICAgICAgICAgIGV4aXN0aW5nLnRleHRMZW5ndGggPSB0ZXh0Lmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBsaXRlcmFsczogWy4uLmxpdGVyYWxzLnZhbHVlcygpXSxcbiAgICBzZXF1ZW5jZXM6IFsuLi5zZXF1ZW5jZXMudmFsdWVzKCldLFxuICB9O1xufVxuXG5mdW5jdGlvbiBzb3J0Q2FuZGlkYXRlcyhjYW5kaWRhdGVzLCBvcHRpb25zKSB7XG4gIHJldHVybiBjYW5kaWRhdGVzXG4gICAgLmZpbHRlcihjYW5kaWRhdGUgPT4gY2FuZGlkYXRlLm9jY3VycmVuY2VzLmxlbmd0aCA+PSBvcHRpb25zLm1pbk9jY3VycmVuY2VzKVxuICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBpZiAoYi50b2tlbkNvdW50ICE9PSBhLnRva2VuQ291bnQpIHJldHVybiBiLnRva2VuQ291bnQgLSBhLnRva2VuQ291bnQ7XG4gICAgICBpZiAoYi50ZXh0TGVuZ3RoICE9PSBhLnRleHRMZW5ndGgpIHJldHVybiBiLnRleHRMZW5ndGggLSBhLnRleHRMZW5ndGg7XG4gICAgICBpZiAoYi5vY2N1cnJlbmNlcy5sZW5ndGggIT09IGEub2NjdXJyZW5jZXMubGVuZ3RoKSByZXR1cm4gYi5vY2N1cnJlbmNlcy5sZW5ndGggLSBhLm9jY3VycmVuY2VzLmxlbmd0aDtcbiAgICAgIHJldHVybiBhLmtleS5sb2NhbGVDb21wYXJlKGIua2V5KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcmVsZWFzZU1hcmtzKHBlclNlZ21lbnRVc2VkLCBtYXJrcykge1xuICBtYXJrcy5mb3JFYWNoKCh7IHNlZ21lbnRJZCwgaW5kZXggfSkgPT4ge1xuICAgIGNvbnN0IHNsb3RzID0gcGVyU2VnbWVudFVzZWRbc2VnbWVudElkXTtcbiAgICBpZiAoc2xvdHMpIHtcbiAgICAgIHNsb3RzW2luZGV4XSA9IGZhbHNlO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHBpY2tDYW5kaWRhdGUoY2FuZGlkYXRlLCBwZXJTZWdtZW50VXNlZCwgb3B0aW9ucywgc3RhdHMpIHtcbiAgY29uc3Qgb3JkZXJlZCA9IGNhbmRpZGF0ZS5vY2N1cnJlbmNlcy5zbGljZSgpLnNvcnQoKGEsIGIpID0+IHtcbiAgICBpZiAoYS5zZWdtZW50SWQgIT09IGIuc2VnbWVudElkKSByZXR1cm4gYS5zZWdtZW50SWQgLSBiLnNlZ21lbnRJZDtcbiAgICByZXR1cm4gYS5zdGFydCAtIGIuc3RhcnQ7XG4gIH0pO1xuXG4gIGNvbnN0IHNlbGVjdGVkID0gW107XG4gIGNvbnN0IG1hcmtzID0gW107XG5cbiAgb3JkZXJlZC5mb3JFYWNoKG9jY3VycmVuY2UgPT4ge1xuICAgIGNvbnN0IHVzZWQgPSBwZXJTZWdtZW50VXNlZFtvY2N1cnJlbmNlLnNlZ21lbnRJZF0gfHwgKHBlclNlZ21lbnRVc2VkW29jY3VycmVuY2Uuc2VnbWVudElkXSA9IFtdKTtcbiAgICBsZXQgY29uZmxpY3QgPSBmYWxzZTtcblxuICAgIGZvciAobGV0IGkgPSBvY2N1cnJlbmNlLnN0YXJ0OyBpIDwgb2NjdXJyZW5jZS5zdGFydCArIG9jY3VycmVuY2UubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICh1c2VkW2ldKSB7XG4gICAgICAgIGNvbmZsaWN0ID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjb25mbGljdCkgcmV0dXJuO1xuXG4gICAgZm9yIChsZXQgaSA9IG9jY3VycmVuY2Uuc3RhcnQ7IGkgPCBvY2N1cnJlbmNlLnN0YXJ0ICsgb2NjdXJyZW5jZS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdXNlZFtpXSA9IHRydWU7XG4gICAgICBtYXJrcy5wdXNoKHtcbiAgICAgICAgc2VnbWVudElkOiBvY2N1cnJlbmNlLnNlZ21lbnRJZCxcbiAgICAgICAgaW5kZXg6IGksXG4gICAgICB9KTtcbiAgICB9XG4gICAgc2VsZWN0ZWQucHVzaChvY2N1cnJlbmNlKTtcbiAgfSk7XG5cbiAgaWYgKHNlbGVjdGVkLmxlbmd0aCA8IG9wdGlvbnMubWluT2NjdXJyZW5jZXMpIHtcbiAgICByZWxlYXNlTWFya3MocGVyU2VnbWVudFVzZWQsIG1hcmtzKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IG5hbWUgPSBgJHtWQVJJQUJMRV9QUkVGSVh9JHtzdGF0cy5uZXh0VmFyaWFibGV9YDtcbiAgY29uc3QgcmVwbGFjZW1lbnRUZXh0ID0gYCUke25hbWV9YDtcbiAgY29uc3QgZGVmaW5pdGlvbkNvc3QgPSBvcHRpb25zLmFnZ3Jlc3NpdmUgPyAwIDogKGNhbmRpZGF0ZS50ZXh0TGVuZ3RoICsgcmVwbGFjZW1lbnRUZXh0Lmxlbmd0aCArIDEpO1xuICBjb25zdCBzYXZpbmdzID0gc2VsZWN0ZWQubGVuZ3RoICogKGNhbmRpZGF0ZS50ZXh0TGVuZ3RoIC0gcmVwbGFjZW1lbnRUZXh0Lmxlbmd0aCkgLSBkZWZpbml0aW9uQ29zdDtcblxuICBpZiAoIW9wdGlvbnMuYWdncmVzc2l2ZSAmJiBzYXZpbmdzIDw9IDApIHtcbiAgICByZWxlYXNlTWFya3MocGVyU2VnbWVudFVzZWQsIG1hcmtzKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHN0YXRzLm5leHRWYXJpYWJsZSArPSAxO1xuICBzdGF0cy50b3RhbFJlcGxhY2VtZW50cyArPSBzZWxlY3RlZC5sZW5ndGg7XG4gIHN0YXRzLnRvdGFsVG9rZW5TYXZpbmdzICs9IHNlbGVjdGVkLmxlbmd0aCAqIChjYW5kaWRhdGUudG9rZW5Db3VudCAtIDEpIC0gMTtcblxuICByZXR1cm4ge1xuICAgIG5hbWUsXG4gICAgc2VsZWN0ZWQsXG4gICAgY2FuZGlkYXRlLFxuICAgIHNhdmluZ3MsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNob29zZUNhbmRpZGF0ZXMoY2FuZGlkYXRlcywgcGVyU2VnbWVudFVzZWQsIG9wdGlvbnMsIHN0YXRzKSB7XG4gIGNvbnN0IGNob3NlbiA9IFtdO1xuICBjb25zdCBvcmRlcmVkID0gc29ydENhbmRpZGF0ZXMoY2FuZGlkYXRlcywgb3B0aW9ucyk7XG4gIG9yZGVyZWQuZm9yRWFjaChjYW5kaWRhdGUgPT4ge1xuICAgIGNvbnN0IHBpY2tlZCA9IHBpY2tDYW5kaWRhdGUoY2FuZGlkYXRlLCBwZXJTZWdtZW50VXNlZCwgb3B0aW9ucywgc3RhdHMpO1xuICAgIGlmICghcGlja2VkKSByZXR1cm47XG5cbiAgICBjaG9zZW4ucHVzaChwaWNrZWQpO1xuICB9KTtcbiAgcmV0dXJuIGNob3Nlbjtcbn1cblxuZnVuY3Rpb24gYnVpbGREZWZpbml0aW9ucyhjaG9zZW4sIHNlZ21lbnRzKSB7XG4gIHJldHVybiBjaG9zZW4ubWFwKGl0ZW0gPT4ge1xuICAgIGNvbnN0IGZpcnN0ID0gaXRlbS5zZWxlY3RlZFswXTtcbiAgICBjb25zdCBzZWdtZW50ID0gc2VnbWVudHNbZmlyc3Quc2VnbWVudElkXTtcbiAgICBjb25zdCBleHByZXNzaW9uID0gc2VnbWVudC50b2tlbnNcbiAgICAgIC5zbGljZShmaXJzdC5zdGFydCwgZmlyc3Quc3RhcnQgKyBmaXJzdC5sZW5ndGgpXG4gICAgICAubWFwKHRva2VuVGV4dClcbiAgICAgIC5qb2luKCcgJyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogYCUke2l0ZW0ubmFtZX1gLFxuICAgICAgZXhwcmVzc2lvbixcbiAgICAgIGxpbmU6IGAlJHtpdGVtLm5hbWV9ICR7ZXhwcmVzc2lvbn1gLFxuICAgICAgcmVwbGFjZW1lbnRzOiBpdGVtLnNlbGVjdGVkLmxlbmd0aCxcbiAgICAgIHNhdmluZ3M6IGl0ZW0uc2F2aW5ncyxcbiAgICB9O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYXBwbHlSZXBsYWNlbWVudHMocGFyc2VkLCBjaG9zZW4pIHtcbiAgY29uc3QgcmVwbGFjZW1lbnRzQnlMaW5lID0gbmV3IE1hcCgpO1xuXG4gIGNob3Nlbi5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGNvbnN0IHRva2VuID0ge1xuICAgICAgdHlwZTogJ3BhcmFtJyxcbiAgICAgIHZhbHVlOiBgJSR7aXRlbS5uYW1lfWAsXG4gICAgfTtcblxuICAgIGl0ZW0uc2VsZWN0ZWQuZm9yRWFjaChvY2N1cnJlbmNlID0+IHtcbiAgICAgIGNvbnN0IHNlZ21lbnQgPSBwYXJzZWQuc2VnbWVudHNbb2NjdXJyZW5jZS5zZWdtZW50SWRdO1xuICAgICAgY29uc3Qgc3RhcnQgPSBzZWdtZW50LnN0YXJ0ICsgb2NjdXJyZW5jZS5zdGFydDtcbiAgICAgIGNvbnN0IGVuZCA9IHNlZ21lbnQuc3RhcnQgKyBvY2N1cnJlbmNlLnN0YXJ0ICsgb2NjdXJyZW5jZS5sZW5ndGg7XG5cbiAgICAgIGNvbnN0IGxpc3QgPSByZXBsYWNlbWVudHNCeUxpbmUuZ2V0KHNlZ21lbnQubGluZSkgfHwgW107XG4gICAgICBsaXN0LnB1c2goeyBzdGFydCwgZW5kLCB0b2tlbiB9KTtcbiAgICAgIHJlcGxhY2VtZW50c0J5TGluZS5zZXQoc2VnbWVudC5saW5lLCBsaXN0KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3Qgb3V0TGluZXMgPSBwYXJzZWQubGluZXMuc2xpY2UoKTtcblxuICByZXBsYWNlbWVudHNCeUxpbmUuZm9yRWFjaCgocmVwbGFjZW1lbnRzLCBsaW5lTnVtYmVyKSA9PiB7XG4gICAgY29uc3QgZW50cnkgPSBwYXJzZWQubGluZUVudHJpZXMuZ2V0KGxpbmVOdW1iZXIpO1xuICAgIGlmICghZW50cnkpIHJldHVybjtcblxuICAgIGNvbnN0IGxpbmVUb2tlbnMgPSBlbnRyeS50b2tlbnMuc2xpY2UoKTtcbiAgICByZXBsYWNlbWVudHNcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnN0YXJ0IC0gYS5zdGFydClcbiAgICAgIC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBsaW5lVG9rZW5zLnNwbGljZShpdGVtLnN0YXJ0LCBpdGVtLmVuZCAtIGl0ZW0uc3RhcnQsIGl0ZW0udG9rZW4pO1xuICAgICAgfSk7XG5cbiAgICBvdXRMaW5lc1tsaW5lTnVtYmVyXSA9IGAke2VudHJ5LmluZGVudH0ke3Rva2Vuc1RvVGV4dChsaW5lVG9rZW5zKX0ke2VudHJ5LmNvbW1lbnR9YDtcbiAgfSk7XG5cbiAgcmV0dXJuIG91dExpbmVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnREZWZpbml0aW9ucyhsaW5lcywgZGVmaW5pdGlvbnMpIHtcbiAgaWYgKCFkZWZpbml0aW9ucy5sZW5ndGgpIHJldHVybiBsaW5lcztcblxuICBjb25zdCBkZWZpbml0aW9uTGluZXMgPSBkZWZpbml0aW9ucy5tYXAoaXRlbSA9PiBpdGVtLmxpbmUpO1xuICBsZXQgaW5zZXJ0QXQgPSAwO1xuXG4gIHdoaWxlIChpbnNlcnRBdCA8IGxpbmVzLmxlbmd0aCkge1xuICAgIGNvbnN0IHsgY29kZSB9ID0gc3RyaXBDb21tZW50KGxpbmVzW2luc2VydEF0XSk7XG4gICAgY29uc3QgY2xlYW4gPSBjb2RlLnRyaW0oKTtcblxuICAgIGlmICghY2xlYW4gfHwgY2xlYW4uY2hhckF0KCkgPT09ICc7JyB8fCBjbGVhbi5jaGFyQXQoKSA9PT0gJyUnKSB7XG4gICAgICBpbnNlcnRBdCArPSAxO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgYnJlYWs7XG4gIH1cblxuICBjb25zdCBvdXRwdXQgPSBsaW5lcy5zbGljZSgpO1xuICBvdXRwdXQuc3BsaWNlKGluc2VydEF0LCAwLCAuLi5kZWZpbml0aW9uTGluZXMpO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5mdW5jdGlvbiBwYXJzZUV4aXN0aW5nVmFyaWFibGVJbmRleGVzKGFzdCkge1xuICByZXR1cm4gT2JqZWN0LmtleXMoYXN0LmRhdGEgfHwge30pXG4gICAgLmZpbHRlcihuYW1lID0+IC9eJWNcXGQrJC8udGVzdChuYW1lKSlcbiAgICAubWFwKG5hbWUgPT4gcGFyc2VJbnQobmFtZS5zbGljZSgyKSwgMTApKVxuICAgIC5maWx0ZXIobmFtZSA9PiBOdW1iZXIuaXNGaW5pdGUobmFtZSkpO1xufVxuXG5mdW5jdGlvbiBzYWZlTWVyZ2UoY3R4KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIG1lcmdlKGN0eCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXByZXNzRHViKHNvdXJjZSwgb3B0cyA9IHt9KSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgLi4uREVGQVVMVF9PUFRJT05TLFxuICAgIC4uLm9wdHMsXG4gICAgbWluT2NjdXJyZW5jZXM6IHRvSW50KG9wdHMubWluT2NjdXJyZW5jZXMsIERFRkFVTFRfT1BUSU9OUy5taW5PY2N1cnJlbmNlcyksXG4gICAgbWluU2VxdWVuY2VMZW5ndGg6IHRvSW50KG9wdHMubWluU2VxdWVuY2VMZW5ndGgsIERFRkFVTFRfT1BUSU9OUy5taW5TZXF1ZW5jZUxlbmd0aCksXG4gIH07XG5cbiAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZVNvdXJjZShzb3VyY2UpO1xuICBjb25zdCBzb3VyY2VBc3QgPSBwYXJzZShub3JtYWxpemVkKTtcblxuICBjb25zdCBwYXJzZWQgPSBwYXJzZUNsaXBMaW5lcyhub3JtYWxpemVkKTtcbiAgY29uc3QgZXhpc3RpbmcgPSBwYXJzZUV4aXN0aW5nVmFyaWFibGVJbmRleGVzKHNvdXJjZUFzdCk7XG4gIGNvbnN0IG5leHRWYXJpYWJsZSA9IE1hdGgubWF4KFxuICAgIG9wdGlvbnMubWF4VmFyaWFibGVJbmRleCxcbiAgICBleGlzdGluZy5sZW5ndGggPyBNYXRoLm1heCguLi5leGlzdGluZykgKyAxIDogb3B0aW9ucy5tYXhWYXJpYWJsZUluZGV4LFxuICApO1xuXG4gIGNvbnN0IHN0YXRzID0ge1xuICAgIG5leHRWYXJpYWJsZSxcbiAgICB0b3RhbFJlcGxhY2VtZW50czogMCxcbiAgICB0b3RhbFRva2VuU2F2aW5nczogMCxcbiAgICB2YXJpYWJsZXM6IDAsXG4gIH07XG5cbiAgY29uc3QgY2FuZGlkYXRlcyA9IGNvbGxlY3RDYW5kaWRhdGVzKHBhcnNlZC5zZWdtZW50cywgb3B0aW9ucy5taW5TZXF1ZW5jZUxlbmd0aCk7XG4gIGNvbnN0IHVzZWRCeVNlZ21lbnQgPSB7fTtcbiAgY29uc3QgY2hvc2VuTGl0ZXJhbHMgPSBjaG9vc2VDYW5kaWRhdGVzKGNhbmRpZGF0ZXMubGl0ZXJhbHMsIHVzZWRCeVNlZ21lbnQsIG9wdGlvbnMsIHN0YXRzKTtcbiAgY29uc3QgY2hvc2VuU2VxdWVuY2VzID0gY2hvb3NlQ2FuZGlkYXRlcyhjYW5kaWRhdGVzLnNlcXVlbmNlcywgdXNlZEJ5U2VnbWVudCwgb3B0aW9ucywgc3RhdHMpO1xuICBjb25zdCBjaG9zZW4gPSBbLi4uY2hvc2VuTGl0ZXJhbHMsIC4uLmNob3NlblNlcXVlbmNlc107XG5cbiAgaWYgKCFjaG9zZW4ubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNvdXJjZTogbm9ybWFsaXplZCxcbiAgICAgIGRlZmluaXRpb25zOiBbXSxcbiAgICAgIHN1bW1hcnk6IHtcbiAgICAgICAgcmVwbGFjZW1lbnRzOiAwLFxuICAgICAgICB2YXJpYWJsZXM6IDAsXG4gICAgICAgIHRva2VuU2F2aW5nczogMCxcbiAgICAgICAgY2hhclNhdmluZ3M6IDAsXG4gICAgICB9LFxuICAgICAgbWVyZ2VkOiBzYWZlTWVyZ2Uoc291cmNlQXN0KSxcbiAgICAgIG1lcmdlZENvbXByZXNzZWQ6IG51bGwsXG4gICAgICBoYXNDb21wcmVzc2VkOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgZGVmaW5pdGlvbnMgPSBidWlsZERlZmluaXRpb25zKGNob3NlbiwgcGFyc2VkLnNlZ21lbnRzKTtcbiAgY29uc3QgcmVwbGFjZWRMaW5lcyA9IGFwcGx5UmVwbGFjZW1lbnRzKHBhcnNlZCwgY2hvc2VuKTtcbiAgY29uc3Qgd2l0aERlZmluaXRpb25zID0gaW5zZXJ0RGVmaW5pdGlvbnMocmVwbGFjZWRMaW5lcywgZGVmaW5pdGlvbnMpO1xuICBjb25zdCBvdXRwdXQgPSBub3JtYWxpemVTb3VyY2Uod2l0aERlZmluaXRpb25zLmpvaW4oJ1xcbicpKTtcblxuICByZXR1cm4ge1xuICAgIHNvdXJjZTogb3V0cHV0LFxuICAgIGRlZmluaXRpb25zLFxuICAgIHN1bW1hcnk6IHtcbiAgICAgIHJlcGxhY2VtZW50czogc3RhdHMudG90YWxSZXBsYWNlbWVudHMsXG4gICAgICB2YXJpYWJsZXM6IGRlZmluaXRpb25zLmxlbmd0aCxcbiAgICAgIHRva2VuU2F2aW5nczogc3RhdHMudG90YWxUb2tlblNhdmluZ3MsXG4gICAgICBjaGFyU2F2aW5nczogTWF0aC5tYXgoMCwgbm9ybWFsaXplZC5sZW5ndGggLSBvdXRwdXQubGVuZ3RoKSxcbiAgICB9LFxuICAgIG1lcmdlZDogc2FmZU1lcmdlKHNvdXJjZUFzdCksXG4gICAgbWVyZ2VkQ29tcHJlc3NlZDogc2FmZU1lcmdlKHBhcnNlKG91dHB1dCkpLFxuICAgIGhhc0NvbXByZXNzZWQ6IHRydWUsXG4gIH07XG59XG4iLCAiaW1wb3J0IHsgcGFyc2VBcnJhbmdlbWVudEJvZHkgfSBmcm9tICcuL2FycmFuZ2VtZW50LmpzJztcbmltcG9ydCB7IHJlc29sdmVDaGFubmVsVG9rZW4gfSBmcm9tICcuL2NoYW5uZWxzLmpzJztcblxuZnVuY3Rpb24gZmluZFN1ZmZpeERhc2hDb21tZW50SW5kZXgobGluZSkge1xuICBjb25zdCBtYXRjaCA9IFN0cmluZyhsaW5lIHx8ICcnKS5tYXRjaCgvXFxzLS1cXHMvKTtcbiAgaWYgKCFtYXRjaCB8fCB0eXBlb2YgbWF0Y2guaW5kZXggIT09ICdudW1iZXInKSByZXR1cm4gLTE7XG4gIGlmICghL1xcUy8udGVzdChTdHJpbmcobGluZSB8fCAnJykuc2xpY2UoMCwgbWF0Y2guaW5kZXgpKSkgcmV0dXJuIC0xO1xuICByZXR1cm4gbWF0Y2guaW5kZXg7XG59XG5cbmZ1bmN0aW9uIHN0cmlwSW5saW5lQ29tbWVudChsaW5lKSB7XG4gIGNvbnN0IHZhbHVlID0gU3RyaW5nKGxpbmUgfHwgJycpO1xuICBjb25zdCBzZW1pY29sb25JbmRleCA9IHZhbHVlLmluZGV4T2YoJzsnKTtcbiAgY29uc3QgZGFzaENvbW1lbnRJbmRleCA9IGZpbmRTdWZmaXhEYXNoQ29tbWVudEluZGV4KHZhbHVlKTtcbiAgaWYgKHNlbWljb2xvbkluZGV4IDwgMCAmJiBkYXNoQ29tbWVudEluZGV4IDwgMCkgcmV0dXJuIHZhbHVlO1xuICBpZiAoc2VtaWNvbG9uSW5kZXggPCAwKSByZXR1cm4gdmFsdWUuc2xpY2UoMCwgZGFzaENvbW1lbnRJbmRleCk7XG4gIGlmIChkYXNoQ29tbWVudEluZGV4IDwgMCkgcmV0dXJuIHZhbHVlLnNsaWNlKDAsIHNlbWljb2xvbkluZGV4KTtcbiAgcmV0dXJuIHZhbHVlLnNsaWNlKDAsIE1hdGgubWluKHNlbWljb2xvbkluZGV4LCBkYXNoQ29tbWVudEluZGV4KSk7XG59XG5cbmZ1bmN0aW9uIHNwbGl0RGVmaW5pdGlvblN1ZmZpeENvbW1lbnQobGluZSkge1xuICBjb25zdCByYXcgPSBTdHJpbmcobGluZSB8fCAnJyk7XG4gIGNvbnN0IHNlbWljb2xvbkluZGV4ID0gcmF3LmluZGV4T2YoJzsnKTtcbiAgY29uc3Qgc2NvcGVkID0gc2VtaWNvbG9uSW5kZXggPj0gMCA/IHJhdy5zbGljZSgwLCBzZW1pY29sb25JbmRleCkgOiByYXc7XG4gIGNvbnN0IGRhc2hDb21tZW50SW5kZXggPSBmaW5kU3VmZml4RGFzaENvbW1lbnRJbmRleChzY29wZWQpO1xuICBpZiAoZGFzaENvbW1lbnRJbmRleCA8IDApIHJldHVybiB7IGNvZGU6IHNjb3BlZCwgY29tbWVudDogJycgfTtcbiAgcmV0dXJuIHtcbiAgICBjb2RlOiBzY29wZWQuc2xpY2UoMCwgZGFzaENvbW1lbnRJbmRleCksXG4gICAgY29tbWVudDogc2NvcGVkLnNsaWNlKGRhc2hDb21tZW50SW5kZXggKyA0KS50cmltKCksXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0RHJhZnRUZW1wbyhpbnB1dCkge1xuICBjb25zdCBtID0gU3RyaW5nKGlucHV0IHx8ICcnKS5tYXRjaCgvXlxccyo7XFxzKnRlbXBvXFxzKjpcXHMqKFxcZCsoPzpcXC5cXGQrKT8pXFxzKiQvaW0pO1xuICBpZiAoIW0pIHJldHVybiBudWxsO1xuICBjb25zdCBuID0gTWF0aC5yb3VuZChwYXJzZUZsb2F0KG1bMV0pKTtcbiAgaWYgKCFOdW1iZXIuaXNGaW5pdGUobikpIHJldHVybiBudWxsO1xuICByZXR1cm4gTWF0aC5tYXgoNjAsIE1hdGgubWluKDIwMCwgbikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdERyYWZ0QmFycyhpbnB1dCkge1xuICBjb25zdCBtID0gU3RyaW5nKGlucHV0IHx8ICcnKS5tYXRjaCgvXlxccyo7XFxzKmJhcnNcXHMqOlxccyooXFxkKylcXHMqJC9pbSk7XG4gIGlmICghbSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IG4gPSBwYXJzZUludChtWzFdLCAxMCk7XG4gIGlmICghTnVtYmVyLmlzRmluaXRlKG4pKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIE1hdGgubWF4KDQsIE1hdGgubWluKDMyLCBuKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0RHJhZnRLZXkoaW5wdXQpIHtcbiAgY29uc3QgbSA9IFN0cmluZyhpbnB1dCB8fCAnJykubWF0Y2goL15cXHMqO1xccyprZXlcXHMqOlxccyooWystXT9cXGQrKVxccyokL2ltKTtcbiAgaWYgKCFtKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgbiA9IHBhcnNlSW50KG1bMV0sIDEwKTtcbiAgaWYgKCFOdW1iZXIuaXNGaW5pdGUobikpIHJldHVybiBudWxsO1xuICByZXR1cm4gTWF0aC5tYXgoLTEyLCBNYXRoLm1pbigxMiwgbikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdERyYWZ0QmFua1NlbGVjdGlvbihpbnB1dCkge1xuICBjb25zdCBvdXQgPSB7XG4gICAgYmFuazogbnVsbCxcbiAgICBkcnVtczogbnVsbCxcbiAgICBpbnN0cnVtZW50czogbnVsbCxcbiAgfTtcblxuICBTdHJpbmcoaW5wdXQgfHwgJycpLnNwbGl0KC9cXHI/XFxuLykuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgIGNvbnN0IG0gPSBTdHJpbmcobGluZSkubWF0Y2goL15cXHMqO1xccypiYW5rKD86XFwuKGRydW1zfGluc3RydW1lbnRzKSk/XFxzKjpcXHMqKFthLXowLTkuXy1dKylcXHMqJC9pKTtcbiAgICBpZiAoIW0pIHJldHVybjtcbiAgICBjb25zdCBzY29wZSA9IFN0cmluZyhtWzFdIHx8ICdiYW5rJykudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCB2YWx1ZSA9IFN0cmluZyhtWzJdIHx8ICcnKS50cmltKCk7XG4gICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xuICAgIGlmIChzY29wZSA9PT0gJ2JhbmsnKSBvdXQuYmFuayA9IHZhbHVlO1xuICAgIGlmIChzY29wZSA9PT0gJ2RydW1zJykgb3V0LmRydW1zID0gdmFsdWU7XG4gICAgaWYgKHNjb3BlID09PSAnaW5zdHJ1bWVudHMnKSBvdXQuaW5zdHJ1bWVudHMgPSB2YWx1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIG91dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTWl4RnJvbU1lcmdlZChtaWRpKSB7XG4gIGNvbnN0IG1peCA9IFtdO1xuXG4gIGZ1bmN0aW9uIGdldChudGgsIG5hbWUpIHtcbiAgICBjb25zdCBrZXkgPSBudGggKyBuYW1lO1xuXG4gICAgaWYgKCFnZXRba2V5XSkge1xuICAgICAgY29uc3QgdHJhY2sgPSBbbnRoLCBuYW1lLCBbXV07XG4gICAgICBtaXgucHVzaCh0cmFjayk7XG4gICAgICBnZXRba2V5XSA9IHsgdHJhY2sgfTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFtrZXldO1xuICB9XG5cbiAgbWlkaS5mb3JFYWNoKHNlY3Rpb24gPT4ge1xuICAgIHNlY3Rpb24uZm9yRWFjaChwYXJ0cyA9PiB7XG4gICAgICBwYXJ0cy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICBjb25zdCB7IHRyYWNrIH0gPSBnZXQoZVswXSwgZVsxXSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZVsyXS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIHRyYWNrWzJdLnB1c2goZVsyXVtpXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIG1peDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkVHJhY2tMaW5lTWFwKGlucHV0LCBvcHRpb25zID0ge30pIHtcbiAgY29uc3QgbWFwID0gbmV3IE1hcCgpO1xuICBsZXQgY3VycmVudFRyYWNrID0gbnVsbDtcbiAgU3RyaW5nKGlucHV0IHx8ICcnKS5zcGxpdCgvXFxyP1xcbi8pLmZvckVhY2goKHJhd0xpbmUsIGxpbmVOdW1iZXIpID0+IHtcbiAgICBjb25zdCBsaW5lID0gc3RyaXBJbmxpbmVDb21tZW50KHJhd0xpbmUpLnRyaW0oKTtcbiAgICBpZiAoIWxpbmUpIHJldHVybjtcblxuICAgIGlmICgvXiN7MSwyfVxccysvLnRlc3QobGluZSkgJiYgIS9eI1xcZCsvLnRlc3QobGluZSkpIHtcbiAgICAgIGN1cnJlbnRUcmFjayA9IGxpbmUucmVwbGFjZSgvXiN7MSwyfVxccysvLCAnJykudHJpbSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghY3VycmVudFRyYWNrKSByZXR1cm47XG4gICAgY29uc3QgbWF0Y2ggPSBsaW5lLm1hdGNoKC9eKCNbXlxcc10rKVxcYi8pO1xuICAgIGlmICghbWF0Y2gpIHJldHVybjtcbiAgICBjb25zdCByZXNvbHZlZENoYW5uZWwgPSByZXNvbHZlQ2hhbm5lbFRva2VuKG1hdGNoWzFdLCBvcHRpb25zLmNoYW5uZWxBbGlhc2VzKTtcbiAgICBjb25zdCBrZXkgPSBgJHtwYXJzZUludChyZXNvbHZlZENoYW5uZWwuc2xpY2UoMSksIDEwKX0vJHtjdXJyZW50VHJhY2t9YDtcbiAgICBjb25zdCBwcmV2ID0gbWFwLmdldChrZXkpIHx8IFtdO1xuICAgIGlmICghcHJldi5pbmNsdWRlcyhsaW5lTnVtYmVyKSkgcHJldi5wdXNoKGxpbmVOdW1iZXIpO1xuICAgIG1hcC5zZXQoa2V5LCBwcmV2KTtcbiAgfSk7XG4gIHJldHVybiBtYXA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2xsZWN0VmFyaWFibGVEZWZpbml0aW9ucyhpbnB1dCkge1xuICBjb25zdCBvdXQgPSBbXTtcbiAgY29uc3Qgc2VlbiA9IG5ldyBTZXQoKTtcbiAgU3RyaW5nKGlucHV0IHx8ICcnKS5zcGxpdCgvXFxyP1xcbi8pLmZvckVhY2goKHJhdywgaWR4KSA9PiB7XG4gICAgY29uc3QgeyBjb2RlLCBjb21tZW50IH0gPSBzcGxpdERlZmluaXRpb25TdWZmaXhDb21tZW50KHJhdyk7XG4gICAgY29uc3QgbGluZSA9IGNvZGUudHJpbSgpO1xuICAgIGNvbnN0IG1hdGNoID0gbGluZS5tYXRjaCgvXlxccyooWyUmXVteXFxzXSspXFxzKy8pO1xuICAgIGlmICghbWF0Y2gpIHJldHVybjtcbiAgICBjb25zdCBuYW1lID0gbWF0Y2hbMV07XG4gICAgaWYgKCFuYW1lIHx8IHNlZW4uaGFzKG5hbWUpKSByZXR1cm47XG4gICAgc2Vlbi5hZGQobmFtZSk7XG4gICAgb3V0LnB1c2goeyBuYW1lLCBsaW5lOiBpZHggKyAxLCBjb21tZW50IH0pO1xuICB9KTtcbiAgcmV0dXJuIG91dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5TGF0ZXN0SW5wdXRXaW5zKGNvbnRleHQpIHtcbiAgT2JqZWN0LnZhbHVlcygoY29udGV4dCAmJiBjb250ZXh0LnRyYWNrcykgfHwge30pLmZvckVhY2goY2hhbm5lbHMgPT4ge1xuICAgIE9iamVjdC5rZXlzKGNoYW5uZWxzIHx8IHt9KS5mb3JFYWNoKGNoID0+IHtcbiAgICAgIGNvbnN0IGNsaXBzID0gY2hhbm5lbHNbY2hdIHx8IFtdO1xuICAgICAgY29uc3QgbGFzdElucHV0ID0gY2xpcHMucmVkdWNlKChpZHgsIGNsaXAsIGkpID0+IChjbGlwICYmIGNsaXAuaW5wdXQgPyBpIDogaWR4KSwgLTEpO1xuICAgICAgaWYgKGxhc3RJbnB1dCA+IDApIGNoYW5uZWxzW2NoXSA9IGNsaXBzLnNsaWNlKGxhc3RJbnB1dCk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gY29udGV4dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkQXJyYW5nZW1lbnREaXNwbGF5RXhwYW5zaW9uKHNvdXJjZVRleHQpIHtcbiAgY29uc3QgbGluZXMgPSBTdHJpbmcoc291cmNlVGV4dCB8fCAnJykuc3BsaXQoL1xccj9cXG4vKTtcbiAgY29uc3QgZXhwYW5kZWQgPSBbXTtcbiAgbGV0IHRva2VuT3JkZXIgPSAwO1xuICBsZXQgYmxvY2tPcmRlciA9IDA7XG5cbiAgbGluZXMuZm9yRWFjaChyYXdMaW5lID0+IHtcbiAgICBjb25zdCBub0NvbW1lbnQgPSByYXdMaW5lLnJlcGxhY2UoLzsuKiQvLCAnJyk7XG4gICAgY29uc3QgdHJpbW1lZCA9IG5vQ29tbWVudC50cmltKCk7XG4gICAgaWYgKCF0cmltbWVkLnN0YXJ0c1dpdGgoJz4nKSkgcmV0dXJuO1xuICAgIGNvbnN0IGJvZHkgPSB0cmltbWVkLnNsaWNlKDEpLnRyaW0oKTtcbiAgICBpZiAoIWJvZHkpIHJldHVybjtcbiAgICBjb25zdCBwYXJzZWQgPSBwYXJzZUFycmFuZ2VtZW50Qm9keShib2R5LCB7XG4gICAgICBvcmRlck9mZnNldDogdG9rZW5PcmRlcixcbiAgICAgIGJsb2NrT2Zmc2V0OiBibG9ja09yZGVyLFxuICAgIH0pO1xuICAgIHRva2VuT3JkZXIgPSBwYXJzZWQubmV4dE9yZGVyO1xuICAgIGJsb2NrT3JkZXIgPSBwYXJzZWQubmV4dEJsb2NrO1xuICAgIGV4cGFuZGVkLnB1c2goLi4ucGFyc2VkLmV4cGFuZGVkKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGV4cGFuZGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRTZWN0aW9uVGltZWxpbmUoY29udGV4dCwgbWVyZ2VkLCBzb3VyY2VUZXh0KSB7XG4gIGlmICghY29udGV4dCB8fCAhQXJyYXkuaXNBcnJheShtZXJnZWQpIHx8IG1lcmdlZC5sZW5ndGggPT09IDApIHJldHVybiBbXTtcbiAgaWYgKCFjb250ZXh0Lm1haW4gfHwgIWNvbnRleHQubWFpbi5sZW5ndGgpIHJldHVybiBbXTtcblxuICBjb25zdCBleHBhbmRlZCA9IGJ1aWxkQXJyYW5nZW1lbnREaXNwbGF5RXhwYW5zaW9uKHNvdXJjZVRleHQgfHwgJycpO1xuICBjb25zdCBmbGF0dGVuZWRTZWN0aW9ucyA9IFtdO1xuICBtZXJnZWQuZm9yRWFjaChncm91cCA9PiB7XG4gICAgKGdyb3VwIHx8IFtdKS5mb3JFYWNoKHBhcnRzID0+IHtcbiAgICAgIGZsYXR0ZW5lZFNlY3Rpb25zLnB1c2gocGFydHMpO1xuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCB0aW1lbGluZSA9IFtdO1xuICBsZXQgY3Vyc29yID0gMDtcbiAgZmxhdHRlbmVkU2VjdGlvbnMuZm9yRWFjaCgocGFydHMsIGlkeCkgPT4ge1xuICAgIGNvbnN0IG1lcmdlZEJlYXRzID0gKHBhcnRzIHx8IFtdKS5yZWR1Y2UoKG1heCwgdCkgPT4ge1xuICAgICAgY29uc3QgbGVuID0gQXJyYXkuaXNBcnJheSh0WzJdKSA/IHRbMl0ubGVuZ3RoIDogMDtcbiAgICAgIHJldHVybiBNYXRoLm1heChtYXgsIGxlbik7XG4gICAgfSwgMCk7XG4gICAgY29uc3QgdG9rZW4gPSBleHBhbmRlZFtpZHhdIHx8IGV4cGFuZGVkW2V4cGFuZGVkLmxlbmd0aCAtIDFdIHx8IG51bGw7XG4gICAgY29uc3QgbmFtZSA9IHRva2VuID8gdG9rZW4ubmFtZSA6IG51bGw7XG4gICAgY29uc3QgZGlzcGxheU9yZGVyID0gdG9rZW4gPyB0b2tlbi5kaXNwbGF5T3JkZXIgOiBudWxsO1xuICAgIGNvbnN0IGJsb2NrSWQgPSB0b2tlbiA/IHRva2VuLmJsb2NrSWQgOiBudWxsO1xuICAgIGNvbnN0IGJsb2NrTGl2ZSA9IHRva2VuID8gQm9vbGVhbih0b2tlbi5ibG9ja0xpdmUpIDogZmFsc2U7XG4gICAgY29uc3QgYmxvY2tTdGFydE9yZGVyID0gdG9rZW4gPyB0b2tlbi5ibG9ja1N0YXJ0T3JkZXIgOiBudWxsO1xuICAgIGNvbnN0IGJsb2NrRW5kT3JkZXIgPSB0b2tlbiA/IHRva2VuLmJsb2NrRW5kT3JkZXIgOiBudWxsO1xuICAgIGNvbnN0IGJlYXRzID0gTWF0aC5tYXgoMSwgbWVyZ2VkQmVhdHMpO1xuICAgIGNvbnN0IHN0YXJ0ID0gY3Vyc29yO1xuICAgIGNvbnN0IGVuZCA9IE1hdGgubWF4KHN0YXJ0LCBzdGFydCArIGJlYXRzIC0gMSk7XG4gICAgY3Vyc29yID0gZW5kICsgMTtcbiAgICB0aW1lbGluZS5wdXNoKHtcbiAgICAgIG5hbWUsXG4gICAgICBkaXNwbGF5T3JkZXIsXG4gICAgICBzdGFydCxcbiAgICAgIGVuZCxcbiAgICAgIGJsb2NrSWQsXG4gICAgICBibG9ja0xpdmUsXG4gICAgICBibG9ja1N0YXJ0T3JkZXIsXG4gICAgICBibG9ja0VuZE9yZGVyLFxuICAgICAgYmxvY2tTdGFydDogbnVsbCxcbiAgICAgIGJsb2NrRW5kOiBudWxsLFxuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCBibG9ja3MgPSBuZXcgTWFwKCk7XG4gIHRpbWVsaW5lLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaWYgKCFpdGVtLmJsb2NrSWQpIHJldHVybjtcbiAgICBjb25zdCBwcmV2ID0gYmxvY2tzLmdldChpdGVtLmJsb2NrSWQpO1xuICAgIGlmICghcHJldikge1xuICAgICAgYmxvY2tzLnNldChpdGVtLmJsb2NrSWQsIHtcbiAgICAgICAgc3RhcnQ6IGl0ZW0uc3RhcnQsXG4gICAgICAgIGVuZDogaXRlbS5lbmQsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcHJldi5zdGFydCA9IE1hdGgubWluKHByZXYuc3RhcnQsIGl0ZW0uc3RhcnQpO1xuICAgIHByZXYuZW5kID0gTWF0aC5tYXgocHJldi5lbmQsIGl0ZW0uZW5kKTtcbiAgfSk7XG5cbiAgdGltZWxpbmUuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpZiAoIWl0ZW0uYmxvY2tJZCkgcmV0dXJuO1xuICAgIGNvbnN0IGJsb2NrID0gYmxvY2tzLmdldChpdGVtLmJsb2NrSWQpO1xuICAgIGlmICghYmxvY2spIHJldHVybjtcbiAgICBpdGVtLmJsb2NrU3RhcnQgPSBibG9jay5zdGFydDtcbiAgICBpdGVtLmJsb2NrRW5kID0gYmxvY2suZW5kO1xuICB9KTtcblxuICByZXR1cm4gdGltZWxpbmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZWN0aW9uQXRCZWF0KHNlY3Rpb25UaW1lbGluZSwgYmVhdEluZGV4KSB7XG4gIGNvbnN0IGluZGV4ID0gKHNlY3Rpb25UaW1lbGluZSB8fCBbXSkuZmluZEluZGV4KHNlY3Rpb24gPT4gKFxuICAgIHNlY3Rpb24ubmFtZSAmJiBiZWF0SW5kZXggPj0gc2VjdGlvbi5zdGFydCAmJiBiZWF0SW5kZXggPD0gc2VjdGlvbi5lbmRcbiAgKSk7XG4gIGlmIChpbmRleCA8IDApIHJldHVybiBudWxsO1xuICByZXR1cm4geyBpbmRleCwgaXRlbTogc2VjdGlvblRpbWVsaW5lW2luZGV4XSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZFRpbWVsaW5lSW5kZXgoc2VjdGlvblRpbWVsaW5lLCBkaXNwbGF5T3JkZXIsIG5hbWUpIHtcbiAgaWYgKHR5cGVvZiBkaXNwbGF5T3JkZXIgPT09ICdudW1iZXInICYmIGRpc3BsYXlPcmRlciA+PSAwKSB7XG4gICAgY29uc3QgaWR4ID0gKHNlY3Rpb25UaW1lbGluZSB8fCBbXSkuZmluZEluZGV4KHNlY3Rpb24gPT4gc2VjdGlvbi5kaXNwbGF5T3JkZXIgPT09IGRpc3BsYXlPcmRlcik7XG4gICAgaWYgKGlkeCA+PSAwKSByZXR1cm4gaWR4O1xuICB9XG4gIGlmIChuYW1lKSByZXR1cm4gKHNlY3Rpb25UaW1lbGluZSB8fCBbXSkuZmluZEluZGV4KHNlY3Rpb24gPT4gc2VjdGlvbi5uYW1lID09PSBuYW1lKTtcbiAgcmV0dXJuIC0xO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWF4UGF0dGVyblNsb3RzKGNvbnRleHQpIHtcbiAgaWYgKCFjb250ZXh0IHx8ICFjb250ZXh0LnRyYWNrUGF0dGVyblNsb3RzKSByZXR1cm4gMDtcbiAgY29uc3Qgc2xvdHMgPSBPYmplY3QudmFsdWVzKGNvbnRleHQudHJhY2tQYXR0ZXJuU2xvdHMpO1xuICBpZiAoc2xvdHMubGVuZ3RoID09PSAwKSByZXR1cm4gMDtcbiAgcmV0dXJuIE1hdGgubWF4KC4uLnNsb3RzKTtcbn1cbiIsICJpbXBvcnQgeyBwYXJzZSwgcmVkdWNlIH0gZnJvbSAnLi9wYXJzZXIuanMnO1xuaW1wb3J0IHsgbWVyZ2UsIHBhY2sgfSBmcm9tICcuL21peHVwLmpzJztcbmltcG9ydCB7IHNwbGl0IH0gZnJvbSAnLi90b2tlbml6ZS5qcyc7XG5pbXBvcnQgeyBmbGF0dGVuIH0gZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQgeyBidWlsZEFycmFuZ2VtZW50RGlzcGxheUV4cGFuc2lvbiB9IGZyb20gJy4vcGxheWdyb3VuZC5qcyc7XG5pbXBvcnQgeyByZXNvbHZlQ2hhbm5lbFRva2VuIH0gZnJvbSAnLi9jaGFubmVscy5qcyc7XG5cbmZ1bmN0aW9uIGRlZXBWaXNpdChub2RlLCBmbikge1xuICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgIG5vZGUuZm9yRWFjaChpdGVtID0+IGRlZXBWaXNpdChpdGVtLCBmbikpO1xuICAgIHJldHVybjtcbiAgfVxuICBmbihub2RlKTtcbn1cblxuZnVuY3Rpb24gY291bnRQYXR0ZXJuU3RhdHMobm9kZSkge1xuICBjb25zdCBzdGF0cyA9IHtcbiAgICBoaXRzOiAwLFxuICAgIHNsb3RzOiAwLFxuICAgIHN1c3RhaW5BZnRlckhpdDogdHJ1ZSxcbiAgfTtcbiAgbGV0IHNlZW5IaXQgPSBmYWxzZTtcblxuICBkZWVwVmlzaXQobm9kZSwgdmFsdWUgPT4ge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSByZXR1cm47XG5cbiAgICBjb25zdCBwYXJ0cyA9IHNwbGl0KHZhbHVlKTtcbiAgICBkZWVwVmlzaXQocGFydHMsIHBhcnQgPT4ge1xuICAgICAgaWYgKHBhcnQgPT09ICd4Jykge1xuICAgICAgICBzdGF0cy5oaXRzICs9IDE7XG4gICAgICAgIHN0YXRzLnNsb3RzICs9IDE7XG4gICAgICAgIHNlZW5IaXQgPSB0cnVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAocGFydCA9PT0gJy0nKSB7XG4gICAgICAgIHN0YXRzLnNsb3RzICs9IDE7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJ0ID09PSAnXycpIHtcbiAgICAgICAgc3RhdHMuc2xvdHMgKz0gMTtcbiAgICAgICAgaWYgKCFzZWVuSGl0KSBzdGF0cy5zdXN0YWluQWZ0ZXJIaXQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHN0YXRzO1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuU2VjdGlvbkJlYXRzKGJlYXRzKSB7XG4gIGxldCBhY3RpdmUgPSAwO1xuICBkZWVwVmlzaXQoYmVhdHMsIHRpY2sgPT4ge1xuICAgIGlmICh0aWNrICYmIHR5cGVvZiB0aWNrID09PSAnb2JqZWN0JyAmJiB0aWNrLnYgPiAwKSBhY3RpdmUgKz0gMTtcbiAgfSk7XG4gIHJldHVybiBhY3RpdmU7XG59XG5cbmZ1bmN0aW9uIGZpbmRTdWZmaXhEYXNoQ29tbWVudEluZGV4KGxpbmUpIHtcbiAgY29uc3QgbWF0Y2ggPSBTdHJpbmcobGluZSB8fCAnJykubWF0Y2goL1xccy0tXFxzLyk7XG4gIGlmICghbWF0Y2ggfHwgdHlwZW9mIG1hdGNoLmluZGV4ICE9PSAnbnVtYmVyJykgcmV0dXJuIC0xO1xuICBpZiAoIS9cXFMvLnRlc3QoU3RyaW5nKGxpbmUgfHwgJycpLnNsaWNlKDAsIG1hdGNoLmluZGV4KSkpIHJldHVybiAtMTtcbiAgcmV0dXJuIG1hdGNoLmluZGV4O1xufVxuXG5mdW5jdGlvbiBzdHJpcElubGluZUNvbW1lbnQobGluZSkge1xuICBjb25zdCB2YWx1ZSA9IFN0cmluZyhsaW5lIHx8ICcnKTtcbiAgY29uc3Qgc2VtaWNvbG9uSW5kZXggPSB2YWx1ZS5pbmRleE9mKCc7Jyk7XG4gIGNvbnN0IGRhc2hDb21tZW50SW5kZXggPSBmaW5kU3VmZml4RGFzaENvbW1lbnRJbmRleCh2YWx1ZSk7XG4gIGlmIChzZW1pY29sb25JbmRleCA8IDAgJiYgZGFzaENvbW1lbnRJbmRleCA8IDApIHJldHVybiB2YWx1ZTtcbiAgaWYgKHNlbWljb2xvbkluZGV4IDwgMCkgcmV0dXJuIHZhbHVlLnNsaWNlKDAsIGRhc2hDb21tZW50SW5kZXgpO1xuICBpZiAoZGFzaENvbW1lbnRJbmRleCA8IDApIHJldHVybiB2YWx1ZS5zbGljZSgwLCBzZW1pY29sb25JbmRleCk7XG4gIHJldHVybiB2YWx1ZS5zbGljZSgwLCBNYXRoLm1pbihzZW1pY29sb25JbmRleCwgZGFzaENvbW1lbnRJbmRleCkpO1xufVxuXG5mdW5jdGlvbiBzY2FuQ2xpcExpbmVNYXAoc291cmNlLCBvcHRzID0ge30pIHtcbiAgY29uc3QgY2xpcExpbmVNYXAgPSBuZXcgTWFwKCk7XG4gIGNvbnN0IGV4cGxpY2l0Q2xpcENvdW50cyA9IG5ldyBNYXAoKTtcbiAgY29uc3Qgc2VjdGlvbk5hbWVzID0gbmV3IFNldCgpO1xuICBjb25zdCBzZWN0aW9uTGluZU1hcCA9IG5ldyBNYXAoKTtcbiAgY29uc3QgdHJhY2tMaW5lTWFwID0gbmV3IE1hcCgpO1xuICBjb25zdCB0cmFja0hhc0NsaXAgPSBuZXcgU2V0KCk7XG4gIGNvbnN0IHZhcmlhYmxlRGVmaW5pdGlvbkxpbmVNYXAgPSBuZXcgTWFwKCk7XG4gIGNvbnN0IHZhcmlhYmxlUmVmZXJlbmNlQ291bnRzID0gbmV3IE1hcCgpO1xuICBjb25zdCBwYXR0ZXJuRGVmaW5pdGlvbkxpbmVNYXAgPSBuZXcgTWFwKCk7XG4gIGNvbnN0IHBhdHRlcm5SZWZlcmVuY2VDb3VudHMgPSBuZXcgTWFwKCk7XG4gIGxldCB0cmFjayA9IG51bGw7XG4gIGxldCBwcmVmaXggPSAnJztcbiAgY29uc3QgY291bnRlcnMgPSBuZXcgTWFwKCk7XG5cbiAgU3RyaW5nKHNvdXJjZSB8fCAnJykuc3BsaXQoL1xccj9cXG4vKS5mb3JFYWNoKChyYXdMaW5lLCBudGgpID0+IHtcbiAgICBjb25zdCBsaW5lID0gc3RyaXBJbmxpbmVDb21tZW50KHJhd0xpbmUpLnRyaW0oKTtcbiAgICBpZiAoIWxpbmUpIHJldHVybjtcblxuICAgIGlmIChsaW5lLmluZGV4T2YoJyMgJykgPj0gMCkge1xuICAgICAgdHJhY2sgPSBsaW5lLnNwbGl0KC9cXHMrLykuc2xpY2UoMSkuam9pbignICcpO1xuICAgICAgaWYgKHRyYWNrICYmICF0cmFja0xpbmVNYXAuaGFzKHRyYWNrKSkgdHJhY2tMaW5lTWFwLnNldCh0cmFjaywgbnRoICsgMSk7XG4gICAgICBwcmVmaXggPSAnJztcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobGluZS5jaGFyQXQoKSA9PT0gJyUnKSB7XG4gICAgICBjb25zdCBbbmFtZSwgLi4ucmVzdF0gPSBsaW5lLnNwbGl0KC9cXHMrLyk7XG4gICAgICBpZiAoL14lW2EtekEtWl9dXFx3KiQvLnRlc3QobmFtZSkgJiYgIXZhcmlhYmxlRGVmaW5pdGlvbkxpbmVNYXAuaGFzKG5hbWUpKSB7XG4gICAgICAgIHZhcmlhYmxlRGVmaW5pdGlvbkxpbmVNYXAuc2V0KG5hbWUsIG50aCArIDEpO1xuICAgICAgfVxuICAgICAgcmVzdC5mb3JFYWNoKCh0b2tlbikgPT4ge1xuICAgICAgICBpZiAoL14lW2EtekEtWl9dXFx3KiQvLnRlc3QodG9rZW4pKSB7XG4gICAgICAgICAgdmFyaWFibGVSZWZlcmVuY2VDb3VudHMuc2V0KHRva2VuLCAodmFyaWFibGVSZWZlcmVuY2VDb3VudHMuZ2V0KHRva2VuKSB8fCAwKSArIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgvXiZbYS16QS1aX11cXHcqJC8udGVzdCh0b2tlbikpIHtcbiAgICAgICAgICBwYXR0ZXJuUmVmZXJlbmNlQ291bnRzLnNldCh0b2tlbiwgKHBhdHRlcm5SZWZlcmVuY2VDb3VudHMuZ2V0KHRva2VuKSB8fCAwKSArIDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobGluZS5jaGFyQXQoKSA9PT0gJyYnKSB7XG4gICAgICBjb25zdCBbbmFtZSwgLi4ucmVzdF0gPSBsaW5lLnNwbGl0KC9cXHMrLyk7XG4gICAgICBpZiAoL14mW2EtekEtWl9dXFx3KiQvLnRlc3QobmFtZSkgJiYgIXBhdHRlcm5EZWZpbml0aW9uTGluZU1hcC5oYXMobmFtZSkpIHtcbiAgICAgICAgcGF0dGVybkRlZmluaXRpb25MaW5lTWFwLnNldChuYW1lLCBudGggKyAxKTtcbiAgICAgIH1cbiAgICAgIHJlc3QuZm9yRWFjaCgodG9rZW4pID0+IHtcbiAgICAgICAgaWYgKC9eJVthLXpBLVpfXVxcdyokLy50ZXN0KHRva2VuKSkge1xuICAgICAgICAgIHZhcmlhYmxlUmVmZXJlbmNlQ291bnRzLnNldCh0b2tlbiwgKHZhcmlhYmxlUmVmZXJlbmNlQ291bnRzLmdldCh0b2tlbikgfHwgMCkgKyAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoL14mW2EtekEtWl9dXFx3KiQvLnRlc3QodG9rZW4pKSB7XG4gICAgICAgICAgcGF0dGVyblJlZmVyZW5jZUNvdW50cy5zZXQodG9rZW4sIChwYXR0ZXJuUmVmZXJlbmNlQ291bnRzLmdldCh0b2tlbikgfHwgMCkgKyAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGxpbmUuY2hhckF0KCkgPT09ICdAJykge1xuICAgICAgY29uc3QgbmFtZSA9IGxpbmUuc3Vic3RyKDEpLnNwbGl0KC9cXHMrLylbMF07XG4gICAgICBwcmVmaXggPSBuYW1lIHx8ICcnO1xuICAgICAgaWYgKHByZWZpeCkge1xuICAgICAgICBzZWN0aW9uTmFtZXMuYWRkKHByZWZpeCk7XG4gICAgICAgIGlmICghc2VjdGlvbkxpbmVNYXAuaGFzKHByZWZpeCkpIHNlY3Rpb25MaW5lTWFwLnNldChwcmVmaXgsIG50aCArIDEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxpbmUuc3BsaXQoL1xccysvKS5mb3JFYWNoKCh0b2tlbikgPT4ge1xuICAgICAgaWYgKC9eJVthLXpBLVpfXVxcdyokLy50ZXN0KHRva2VuKSkge1xuICAgICAgICB2YXJpYWJsZVJlZmVyZW5jZUNvdW50cy5zZXQodG9rZW4sICh2YXJpYWJsZVJlZmVyZW5jZUNvdW50cy5nZXQodG9rZW4pIHx8IDApICsgMSk7XG4gICAgICB9XG4gICAgICBpZiAoL14mW2EtekEtWl9dXFx3KiQvLnRlc3QodG9rZW4pKSB7XG4gICAgICAgIHBhdHRlcm5SZWZlcmVuY2VDb3VudHMuc2V0KHRva2VuLCAocGF0dGVyblJlZmVyZW5jZUNvdW50cy5nZXQodG9rZW4pIHx8IDApICsgMSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIXRyYWNrKSByZXR1cm47XG4gICAgaWYgKCEvXiNbXlxcc10rXFxiLy50ZXN0KGxpbmUpKSByZXR1cm47XG5cbiAgICBjb25zdCBjaGFubmVsVmFsdWUgPSBsaW5lLm1hdGNoKC9eKCNbXlxcc10rKVxcYi8pO1xuICAgIGlmICghY2hhbm5lbFZhbHVlKSByZXR1cm47XG4gICAgbGV0IHJlc29sdmVkO1xuICAgIHRyeSB7XG4gICAgICByZXNvbHZlZCA9IHJlc29sdmVDaGFubmVsVG9rZW4oY2hhbm5lbFZhbHVlWzFdLCBvcHRzLmNoYW5uZWxBbGlhc2VzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNoYW5uZWwgPSBgJHtwcmVmaXh9JHtyZXNvbHZlZH1gO1xuICAgIGNvbnN0IGtleSA9IGAke3RyYWNrfXwke2NoYW5uZWx9YDtcbiAgICBjb25zdCBpZHggPSBjb3VudGVycy5nZXQoa2V5KSB8fCAwO1xuICAgIGNvdW50ZXJzLnNldChrZXksIGlkeCArIDEpO1xuICAgIGV4cGxpY2l0Q2xpcENvdW50cy5zZXQoa2V5LCAoZXhwbGljaXRDbGlwQ291bnRzLmdldChrZXkpIHx8IDApICsgMSk7XG4gICAgdHJhY2tIYXNDbGlwLmFkZCh0cmFjayk7XG4gICAgY2xpcExpbmVNYXAuc2V0KGAke2tleX18JHtpZHh9YCwgbnRoICsgMSk7XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgY2xpcExpbmVNYXAsXG4gICAgZXhwbGljaXRDbGlwQ291bnRzLFxuICAgIHNlY3Rpb25OYW1lcyxcbiAgICBzZWN0aW9uTGluZU1hcCxcbiAgICB0cmFja0xpbmVNYXAsXG4gICAgdHJhY2tIYXNDbGlwLFxuICAgIHZhcmlhYmxlRGVmaW5pdGlvbkxpbmVNYXAsXG4gICAgdmFyaWFibGVSZWZlcmVuY2VDb3VudHMsXG4gICAgcGF0dGVybkRlZmluaXRpb25MaW5lTWFwLFxuICAgIHBhdHRlcm5SZWZlcmVuY2VDb3VudHMsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGlucHV0U2lnbmF0dXJlKGNsaXAsIGNvbnRleHQpIHtcbiAgaWYgKCFjbGlwIHx8ICFjbGlwLmlucHV0KSByZXR1cm4gbnVsbDtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocmVkdWNlKGNsaXAuaW5wdXQsIGNvbnRleHQuZGF0YSkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2NhbkludmFsaWRUb2tlblByZWZpeGVzKHNvdXJjZSkge1xuICBjb25zdCB3YXJuaW5ncyA9IFtdO1xuICBTdHJpbmcoc291cmNlIHx8ICcnKS5zcGxpdCgvXFxyP1xcbi8pLmZvckVhY2goKHJhd0xpbmUsIG50aCkgPT4ge1xuICAgIGNvbnN0IGxpbmUgPSBzdHJpcElubGluZUNvbW1lbnQocmF3TGluZSkudHJpbSgpO1xuICAgIGlmICghbGluZSkgcmV0dXJuO1xuXG4gICAgY29uc3QgdG9rZW5zID0gbGluZS5zcGxpdCgvXFxzKy8pO1xuICAgIHRva2Vucy5mb3JFYWNoKCh0b2tlbikgPT4ge1xuICAgICAgY29uc3QgcG9zID0gdG9rZW4uc2VhcmNoKC9bI0A8JSY+XS8pO1xuICAgICAgaWYgKHBvcyA8PSAwKSByZXR1cm47XG4gICAgICBjb25zdCBwcmVmaXggPSB0b2tlbi5zbGljZSgwLCBwb3MpO1xuICAgICAgY29uc3Qgc3ltYm9sID0gdG9rZW4uY2hhckF0KHBvcyk7XG4gICAgICBsZXQgaW52YWxpZCA9IGZhbHNlO1xuXG4gICAgICBpZiAoc3ltYm9sID09PSAnIycpIHtcbiAgICAgICAgY29uc3Qgbm90ZUxpa2UgPSBwb3MgPT09IDEgJiYgL15bYS1nQS1HXSQvLnRlc3QocHJlZml4KSAmJiAvXlxcZC8udGVzdCh0b2tlbi5zbGljZShwb3MgKyAxKSk7XG4gICAgICAgIGludmFsaWQgPSAhbm90ZUxpa2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnZhbGlkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpbnZhbGlkKSByZXR1cm47XG4gICAgICB3YXJuaW5ncy5wdXNoKHtcbiAgICAgICAgcnVsZTogJ2ludmFsaWQtdG9rZW4tcHJlZml4JyxcbiAgICAgICAgbWVzc2FnZTogYFRva2VuICcke3Rva2VufScgaGFzIGludmFsaWQgcHJlZml4ICcke3ByZWZpeH0nIGJlZm9yZSAnJHtzeW1ib2x9Jy5gLFxuICAgICAgICBsaW5lOiBudGggKyAxLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gd2FybmluZ3M7XG59XG5cbmZ1bmN0aW9uIHBhcnNlRXJyb3JMaW5lKGVycm9yKSB7XG4gIGNvbnN0IHRleHQgPSBTdHJpbmcoKGVycm9yICYmIGVycm9yLm1lc3NhZ2UpIHx8IGVycm9yIHx8ICcnKTtcbiAgY29uc3QgbWF0Y2ggPSB0ZXh0Lm1hdGNoKC9cXGJhdCBsaW5lXFxzKyhcXGQrKVxcYi9pKTtcbiAgaWYgKCFtYXRjaCkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGxpbmUgPSBwYXJzZUludChtYXRjaFsxXSwgMTApO1xuICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcihsaW5lKSAmJiBsaW5lID4gMCA/IGxpbmUgOiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGludER1Yihzb3VyY2UsIG9wdHMgPSB7fSkge1xuICBjb25zdCByZXBvcnQgPSB7XG4gICAgZXJyb3JzOiBbXSxcbiAgICB3YXJuaW5nczogW10sXG4gIH07XG5cbiAgbGV0IGNvbnRleHQgPSBvcHRzLmNvbnRleHQ7XG4gIGxldCBtZXJnZWQgPSBvcHRzLm1lcmdlZDtcbiAgcmVwb3J0Lndhcm5pbmdzLnB1c2goLi4uc2NhbkludmFsaWRUb2tlblByZWZpeGVzKHNvdXJjZSkpO1xuXG4gIHRyeSB7XG4gICAgaWYgKCFjb250ZXh0KSBjb250ZXh0ID0gcGFyc2Uoc291cmNlKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJlcG9ydC5lcnJvcnMucHVzaCh7XG4gICAgICBydWxlOiAncGFyc2UtZXJyb3InLFxuICAgICAgbWVzc2FnZTogZSAmJiBlLm1lc3NhZ2UgPyBlLm1lc3NhZ2UgOiAnUGFyc2UgZXJyb3InLFxuICAgICAgbGluZTogcGFyc2VFcnJvckxpbmUoZSksXG4gICAgICBzdGFjazogZSAmJiBlLnN0YWNrID8gU3RyaW5nKGUuc3RhY2spIDogbnVsbCxcbiAgICB9KTtcbiAgICByZXR1cm4gcmVwb3J0O1xuICB9XG5cbiAgY29uc3Qge1xuICAgIGNsaXBMaW5lTWFwLFxuICAgIGV4cGxpY2l0Q2xpcENvdW50cyxcbiAgICBzZWN0aW9uTmFtZXMsXG4gICAgc2VjdGlvbkxpbmVNYXAsXG4gICAgdHJhY2tMaW5lTWFwLFxuICAgIHRyYWNrSGFzQ2xpcCxcbiAgICB2YXJpYWJsZURlZmluaXRpb25MaW5lTWFwLFxuICAgIHZhcmlhYmxlUmVmZXJlbmNlQ291bnRzLFxuICAgIHBhdHRlcm5EZWZpbml0aW9uTGluZU1hcCxcbiAgICBwYXR0ZXJuUmVmZXJlbmNlQ291bnRzLFxuICB9ID0gc2NhbkNsaXBMaW5lTWFwKHNvdXJjZSwgb3B0cyk7XG4gIGNvbnN0IGV4cGFuZGVkID0gYnVpbGRBcnJhbmdlbWVudERpc3BsYXlFeHBhbnNpb24oc291cmNlKTtcbiAgY29uc3QgdXNlZFNlY3Rpb25zID0gbmV3IFNldChleHBhbmRlZC5tYXAoaXRlbSA9PiBpdGVtLm5hbWUpKTtcbiAgZXhwYW5kZWQuZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiB7XG4gICAgaWYgKCFzZWN0aW9uTmFtZXMuaGFzKGl0ZW0ubmFtZSkpIHtcbiAgICAgIHJlcG9ydC5lcnJvcnMucHVzaCh7XG4gICAgICAgIHJ1bGU6ICd1bmtub3duLXNlY3Rpb24nLFxuICAgICAgICBtZXNzYWdlOiBgQXJyYW5nZW1lbnQgdG9rZW4gJyR7aXRlbS5uYW1lfScgKGluZGV4ICR7aWR4fSkgaGFzIG5vIG1hdGNoaW5nIEBzZWN0aW9uLmAsXG4gICAgICAgIGxpbmU6IG51bGwsXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICBpZiAoZXhwYW5kZWQubGVuZ3RoID4gMCkge1xuICAgIHNlY3Rpb25OYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICBpZiAodXNlZFNlY3Rpb25zLmhhcyhuYW1lKSkgcmV0dXJuO1xuICAgICAgcmVwb3J0Lndhcm5pbmdzLnB1c2goe1xuICAgICAgICBydWxlOiAndW51c2VkLXNlY3Rpb24nLFxuICAgICAgICBtZXNzYWdlOiBgU2VjdGlvbiAnQCR7bmFtZX0nIGlzIGRlZmluZWQgYnV0IG5ldmVyIHVzZWQgaW4gYXJyYW5nZW1lbnQuYCxcbiAgICAgICAgbGluZTogc2VjdGlvbkxpbmVNYXAuZ2V0KG5hbWUpIHx8IG51bGwsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhcmlhYmxlRGVmaW5pdGlvbkxpbmVNYXAuZm9yRWFjaCgobGluZSwgbmFtZSkgPT4ge1xuICAgIGlmICgodmFyaWFibGVSZWZlcmVuY2VDb3VudHMuZ2V0KG5hbWUpIHx8IDApID4gMCkgcmV0dXJuO1xuICAgIHJlcG9ydC53YXJuaW5ncy5wdXNoKHtcbiAgICAgIHJ1bGU6ICd1bnVzZWQtdmFyaWFibGUnLFxuICAgICAgbWVzc2FnZTogYFZhcmlhYmxlICcke25hbWV9JyBpcyBkZWZpbmVkIGJ1dCBuZXZlciB1c2VkLmAsXG4gICAgICBsaW5lLFxuICAgIH0pO1xuICB9KTtcblxuICBwYXR0ZXJuRGVmaW5pdGlvbkxpbmVNYXAuZm9yRWFjaCgobGluZSwgbmFtZSkgPT4ge1xuICAgIGlmICgocGF0dGVyblJlZmVyZW5jZUNvdW50cy5nZXQobmFtZSkgfHwgMCkgPiAwKSByZXR1cm47XG4gICAgcmVwb3J0Lndhcm5pbmdzLnB1c2goe1xuICAgICAgcnVsZTogJ3VudXNlZC1wYXR0ZXJuLXZhcmlhYmxlJyxcbiAgICAgIG1lc3NhZ2U6IGBQYXR0ZXJuIHZhcmlhYmxlICcke25hbWV9JyBpcyBkZWZpbmVkIGJ1dCBuZXZlciB1c2VkLmAsXG4gICAgICBsaW5lLFxuICAgIH0pO1xuICB9KTtcblxuICBPYmplY3Qua2V5cyhjb250ZXh0LnRyYWNrcyB8fCB7fSkuZm9yRWFjaCgodHJhY2tOYW1lKSA9PiB7XG4gICAgaWYgKHRyYWNrSGFzQ2xpcC5oYXModHJhY2tOYW1lKSkgcmV0dXJuO1xuICAgIHJlcG9ydC53YXJuaW5ncy5wdXNoKHtcbiAgICAgIHJ1bGU6ICdlbXB0eS10cmFjaycsXG4gICAgICBtZXNzYWdlOiBgVHJhY2sgJyR7dHJhY2tOYW1lfScgaGFzIG5vIGNoYW5uZWwgY2xpcHMuYCxcbiAgICAgIGxpbmU6IHRyYWNrTGluZU1hcC5nZXQodHJhY2tOYW1lKSB8fCBudWxsLFxuICAgIH0pO1xuICB9KTtcblxuICBPYmplY3QuZW50cmllcyhjb250ZXh0LnRyYWNrcyB8fCB7fSkuZm9yRWFjaCgoW3RyYWNrTmFtZSwgY2hhbm5lbHNdKSA9PiB7XG4gICAgT2JqZWN0LmVudHJpZXMoY2hhbm5lbHMgfHwge30pLmZvckVhY2goKFtjaGFubmVsLCBjbGlwc10pID0+IHtcbiAgICAgIGNvbnN0IGNoYW5uZWxNYXRjaCA9IFN0cmluZyhjaGFubmVsKS5tYXRjaCgvIyhcXGQrKSQvKTtcbiAgICAgIGlmIChjaGFubmVsTWF0Y2ggJiYgdHlwZW9mIG9wdHMucmVzb2x2ZUluc3RydW1lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29uc3QgcHJvZ3JhbSA9IHBhcnNlSW50KGNoYW5uZWxNYXRjaFsxXSwgMTApO1xuICAgICAgICBjb25zdCBpc1ZhbGlkID0gb3B0cy5yZXNvbHZlSW5zdHJ1bWVudChTdHJpbmcocHJvZ3JhbSkpO1xuICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICByZXBvcnQud2FybmluZ3MucHVzaCh7XG4gICAgICAgICAgICBydWxlOiAnaW52YWxpZC1pbnN0cnVtZW50JyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBUcmFjayAnJHt0cmFja05hbWV9JyBjaGFubmVsICcke2NoYW5uZWx9JyB1c2VzIHVuc3VwcG9ydGVkIGluc3RydW1lbnQvcHJvZ3JhbSBudW1iZXIgJyR7cHJvZ3JhbX0nLmAsXG4gICAgICAgICAgICBsaW5lOiBjbGlwTGluZU1hcC5nZXQoYCR7dHJhY2tOYW1lfXwke2NoYW5uZWx9fDBgKSB8fCB0cmFja0xpbmVNYXAuZ2V0KHRyYWNrTmFtZSkgfHwgbnVsbCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBpbnB1dENsaXBzID0gKGNsaXBzIHx8IFtdKS5maWx0ZXIoY2xpcCA9PiBjbGlwICYmIGNsaXAuaW5wdXQpO1xuICAgICAgY29uc3QgZXhwbGljaXRDb3VudCA9IGV4cGxpY2l0Q2xpcENvdW50cy5nZXQoYCR7dHJhY2tOYW1lfXwke2NoYW5uZWx9YCkgfHwgMDtcbiAgICAgIGNvbnN0IHVubWVyZ2VkSW5wdXRzID0gaW5wdXRDbGlwcy5maWx0ZXIoY2xpcCA9PiAhY2xpcC5tZXJnZSk7XG4gICAgICBjb25zdCBzZWVuSW5wdXRTaWduYXR1cmVzID0gbmV3IFNldCgpO1xuICAgICAgbGV0IGhhc0R1cGxpY2F0ZUlucHV0ID0gZmFsc2U7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVubWVyZ2VkSW5wdXRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IHNpZ25hdHVyZSA9IGlucHV0U2lnbmF0dXJlKHVubWVyZ2VkSW5wdXRzW2ldLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKCFzaWduYXR1cmUpIGNvbnRpbnVlO1xuICAgICAgICBpZiAoc2VlbklucHV0U2lnbmF0dXJlcy5oYXMoc2lnbmF0dXJlKSkge1xuICAgICAgICAgIGhhc0R1cGxpY2F0ZUlucHV0ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBzZWVuSW5wdXRTaWduYXR1cmVzLmFkZChzaWduYXR1cmUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXhwbGljaXRDb3VudCA+IDEgJiYgaGFzRHVwbGljYXRlSW5wdXQpIHtcbiAgICAgICAgY29uc3QgbGluZSA9IGNsaXBMaW5lTWFwLmdldChgJHt0cmFja05hbWV9fCR7Y2hhbm5lbH18MGApIHx8IG51bGw7XG4gICAgICAgIHJlcG9ydC53YXJuaW5ncy5wdXNoKHtcbiAgICAgICAgICBydWxlOiAnZHVwbGljYXRlLWlucHV0LWNsaXBzJyxcbiAgICAgICAgICBtZXNzYWdlOiBgVHJhY2sgJyR7dHJhY2tOYW1lfScgY2hhbm5lbCAnJHtjaGFubmVsfScgaGFzIHJlcGVhdGVkIGlucHV0IGNsaXBzIHdpdGhvdXQgZXhwbGljaXQgJyEnIG9yICcrJyBtZXJnZSBvcGVyYXRvci5gLFxuICAgICAgICAgIGxpbmUsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAoY2xpcHMgfHwgW10pLmZvckVhY2goKGNsaXAsIGNsaXBJbmRleCkgPT4ge1xuICAgICAgICBpZiAoIWNsaXAgfHwgIWNsaXAuaW5wdXQpIHJldHVybjtcblxuICAgICAgICBjb25zdCBsaW5lID0gY2xpcExpbmVNYXAuZ2V0KGAke3RyYWNrTmFtZX18JHtjaGFubmVsfXwke2NsaXBJbmRleH1gKSB8fCBudWxsO1xuICAgICAgICBsZXQgaW5wdXQ7XG4gICAgICAgIGxldCBzdGF0cztcbiAgICAgICAgbGV0IHZhbHVlcyA9IFtdO1xuICAgICAgICBsZXQgbm90ZXMgPSBbXTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhbHVlcyA9IGNsaXAudmFsdWVzID8gcmVkdWNlKGNsaXAudmFsdWVzLCBjb250ZXh0LmRhdGEpIDogW107XG4gICAgICAgICAgbm90ZXMgPSBjbGlwLmRhdGEgPyByZWR1Y2UoY2xpcC5kYXRhLCBjb250ZXh0LmRhdGEpIDogW107XG4gICAgICAgICAgaW5wdXQgPSBmbGF0dGVuKHJlZHVjZShjbGlwLmlucHV0LCBjb250ZXh0LmRhdGEsIHBhY2sodmFsdWVzLnNsaWNlKCksIG5vdGVzLnNsaWNlKCkpKSk7XG4gICAgICAgICAgc3RhdHMgPSBjb3VudFBhdHRlcm5TdGF0cyhyZWR1Y2UoY2xpcC5pbnB1dCwgY29udGV4dC5kYXRhKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXBvcnQuZXJyb3JzLnB1c2goe1xuICAgICAgICAgICAgcnVsZTogJ2NsaXAtcmVkdWNlLWZhaWxlZCcsXG4gICAgICAgICAgICBtZXNzYWdlOiBgVW5hYmxlIHRvIGV2YWx1YXRlIGNsaXAgaW4gJyR7dHJhY2tOYW1lfScgJyR7Y2hhbm5lbH0nOiAke2UubWVzc2FnZX1gLFxuICAgICAgICAgICAgbGluZSxcbiAgICAgICAgICAgIHN0YWNrOiBlICYmIGUuc3RhY2sgPyBTdHJpbmcoZS5zdGFjaykgOiBudWxsLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG91dE9mUmFuZ2VMZXZlbCA9IHZhbHVlcy5maW5kKHZhbHVlID0+IChcbiAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInXG4gICAgICAgICAgJiYgTnVtYmVyLmlzRmluaXRlKHZhbHVlKVxuICAgICAgICAgICYmICh2YWx1ZSA8IDAgfHwgdmFsdWUgPiAxMjcpXG4gICAgICAgICkpO1xuICAgICAgICBpZiAodHlwZW9mIG91dE9mUmFuZ2VMZXZlbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICByZXBvcnQud2FybmluZ3MucHVzaCh7XG4gICAgICAgICAgICBydWxlOiAnaW52YWxpZC1sZXZlbCcsXG4gICAgICAgICAgICBtZXNzYWdlOiBgVHJhY2sgJyR7dHJhY2tOYW1lfScgJyR7Y2hhbm5lbH0nIGhhcyBsZXZlbC92ZWxvY2l0eSAnJHtvdXRPZlJhbmdlTGV2ZWx9JyBvdXRzaWRlIE1JREkgcmFuZ2UgMC4uMTI3LmAsXG4gICAgICAgICAgICBsaW5lLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgbm90ZUV2ZW50cyA9IG5vdGVzO1xuICAgICAgICBjb25zdCBub3RlQ291bnQgPSBBcnJheS5pc0FycmF5KG5vdGVFdmVudHMpID8gbm90ZUV2ZW50cy5sZW5ndGggOiAwO1xuXG4gICAgICAgIGlmIChub3RlQ291bnQgPiBzdGF0cy5oaXRzKSB7XG4gICAgICAgICAgcmVwb3J0Lndhcm5pbmdzLnB1c2goe1xuICAgICAgICAgICAgcnVsZTogJ21pc3NpbmctcHVsc2VzJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBUcmFjayAnJHt0cmFja05hbWV9JyAnJHtjaGFubmVsfScgaGFzICR7bm90ZUNvdW50fSBub3Rlcy9jaG9yZHMgYnV0IG9ubHkgJHtzdGF0cy5oaXRzfSBoaXQgcHVsc2VzLmAsXG4gICAgICAgICAgICBsaW5lLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzdGF0cy5zdXN0YWluQWZ0ZXJIaXQpIHtcbiAgICAgICAgICByZXBvcnQud2FybmluZ3MucHVzaCh7XG4gICAgICAgICAgICBydWxlOiAnb3JwaGFuLXN1c3RhaW4nLFxuICAgICAgICAgICAgbWVzc2FnZTogYFRyYWNrICcke3RyYWNrTmFtZX0nICcke2NoYW5uZWx9JyB1c2VzICdfJyBiZWZvcmUgYW55ICd4JyBoaXQgaW4gdGhlIHNhbWUgcGF0dGVybi5gLFxuICAgICAgICAgICAgbGluZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGF0cy5oaXRzID4gMCAmJiBmbGF0dGVuU2VjdGlvbkJlYXRzKGlucHV0KSA9PT0gMCkge1xuICAgICAgICAgIHJlcG9ydC53YXJuaW5ncy5wdXNoKHtcbiAgICAgICAgICAgIHJ1bGU6ICdzaWxlbnQtcGF0dGVybicsXG4gICAgICAgICAgICBtZXNzYWdlOiBgVHJhY2sgJyR7dHJhY2tOYW1lfScgJyR7Y2hhbm5lbH0nIHJlc29sdmVzIHRvIHNpbGVuY2UgYWZ0ZXIgcmVkdWN0aW9uLmAsXG4gICAgICAgICAgICBsaW5lLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgaWYgKCFtZXJnZWQpIHtcbiAgICB0cnkge1xuICAgICAgbWVyZ2VkID0gbWVyZ2UoY29udGV4dCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCFyZXBvcnQuZXJyb3JzLnNvbWUoaXRlbSA9PiBpdGVtLnJ1bGUgPT09ICd1bmtub3duLXNlY3Rpb24nKSkge1xuICAgICAgICByZXBvcnQuZXJyb3JzLnB1c2goe1xuICAgICAgICAgIHJ1bGU6ICdtZXJnZS1lcnJvcicsXG4gICAgICAgICAgbWVzc2FnZTogZSAmJiBlLm1lc3NhZ2UgPyBlLm1lc3NhZ2UgOiAnTWVyZ2UgZXJyb3InLFxuICAgICAgICAgIGxpbmU6IG51bGwsXG4gICAgICAgICAgc3RhY2s6IGUgJiYgZS5zdGFjayA/IFN0cmluZyhlLnN0YWNrKSA6IG51bGwsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChleHBhbmRlZC5sZW5ndGggJiYgQXJyYXkuaXNBcnJheShtZXJnZWQpKSB7XG4gICAgbGV0IGZsYXRJbmRleCA9IDA7XG4gICAgbWVyZ2VkLmZvckVhY2goZ3JvdXAgPT4ge1xuICAgICAgKGdyb3VwIHx8IFtdKS5mb3JFYWNoKHBhcnRzID0+IHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBleHBhbmRlZFtmbGF0SW5kZXhdO1xuICAgICAgICBpZiAodG9rZW4gJiYgZmxhdHRlblNlY3Rpb25CZWF0cyhwYXJ0cy5tYXAodCA9PiB0WzJdKSkgPT09IDApIHtcbiAgICAgICAgICByZXBvcnQud2FybmluZ3MucHVzaCh7XG4gICAgICAgICAgICBydWxlOiAnc2lsZW50LXNlY3Rpb24nLFxuICAgICAgICAgICAgbWVzc2FnZTogYFNlY3Rpb24gJyR7dG9rZW4ubmFtZX0nIHJlc29sdmVzIHRvIHNpbGVuY2UuYCxcbiAgICAgICAgICAgIGxpbmU6IG51bGwsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZmxhdEluZGV4ICs9IDE7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiByZXBvcnQ7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFNQSxRQUFJLFlBQVk7QUFBQSxNQUNaLFNBQVM7QUFBQSxNQUNULG1CQUFtQixDQUFDLElBQU0sSUFBTSxLQUFNLEdBQUk7QUFBQSxNQUMxQyxxQkFBcUIsQ0FBQyxHQUFNLEdBQU0sR0FBTSxDQUFJO0FBQUEsTUFDNUMsc0JBQXNCLENBQUMsR0FBTSxDQUFJO0FBQUEsTUFDakMsc0JBQXNCLENBQUMsR0FBTSxDQUFJO0FBQUEsTUFDakMsdUJBQXVCLENBQUMsR0FBTSxHQUFJO0FBQUEsTUFDbEMsa0JBQWtCLENBQUMsSUFBTSxJQUFNLEtBQU0sR0FBSTtBQUFBLE1BQ3pDLGVBQWU7QUFBQSxNQUNmLG1CQUFtQjtBQUFBLElBQ3ZCO0FBR0EsUUFBSSxVQUFVLENBQUMsR0FBRyxNQUFNLE1BQU0sS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDO0FBR3JELGFBQVMsUUFBUSxLQUFLO0FBQ3BCLGFBQU8sUUFBUSxRQUFRLE9BQU8sUUFBUSxZQUFZLE9BQU8sSUFBSSxTQUFTLFdBQVcsT0FBTztBQUFBLElBQzFGO0FBR0EsYUFBUyxRQUFRLE9BQU87QUFDdEIsYUFBTyxVQUFVLFFBQVEsT0FBTyxVQUFVLFlBQVksT0FBTyxNQUFNLFNBQVMsWUFBWSxPQUFPLE1BQU0sUUFBUSxXQUFXLE9BQU87QUFBQSxJQUNqSTtBQUNBLFFBQUksU0FBUyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLENBQUM7QUFDbEMsUUFBSSxnQkFBZ0IsT0FBTztBQUFB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RUFDVixZQUFZO0FBQUEsRUFDWixTQUFTO0FBQUEsRUFDVCxhQUFhO0FBQUEsRUFDYixhQUFhO0FBQUEsRUFDYixVQUFVO0FBQUEsRUFDVixhQUFhO0FBQUEsRUFDYixnQkFBZ0I7QUFBQSxFQUNoQixpQkFBaUI7QUFBQSxFQUNqQixhQUFhO0FBQUEsRUFDYixhQUFhO0FBQUEsRUFDYixhQUFhO0FBQUEsRUFDYixnQkFBZ0I7QUFBQSxFQUNoQixjQUFjO0FBQUEsRUFDZCxXQUFXO0FBQUEsRUFDWCxnQkFBZ0I7QUFBQSxFQUNoQixlQUFlO0FBQUEsRUFDZixhQUFhO0FBQUEsRUFDYixhQUFhO0FBQUEsRUFDYixXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxjQUFjO0FBQUEsRUFDZCxzQkFBc0I7QUFBQSxFQUN0QixhQUFhO0FBQUEsRUFDYixXQUFXO0FBQUEsRUFDWCxjQUFjO0FBQUEsRUFDZCxpQkFBaUI7QUFBQSxFQUNqQixlQUFlO0FBQUEsRUFDZixTQUFTO0FBQUEsRUFDVCxXQUFXO0FBQUEsRUFDWCxTQUFTO0FBQUEsRUFDVCxZQUFZO0FBQUEsRUFDWixhQUFhO0FBQUEsRUFDYixZQUFZO0FBQUEsRUFDWixRQUFRO0FBQUEsRUFDUixZQUFZO0FBQUEsRUFDWixZQUFZO0FBQUEsRUFDWixZQUFZO0FBQUEsRUFDWixtQkFBbUI7QUFBQSxFQUNuQixpQkFBaUI7QUFBQSxFQUNqQixZQUFZO0FBQUEsRUFDWixXQUFXO0FBQUEsRUFDWCxjQUFjO0FBQUEsRUFDZCxjQUFjO0FBQUEsRUFDZCxjQUFjO0FBQUEsRUFDZCxXQUFXO0FBQUEsRUFDWCxjQUFjO0FBQUEsRUFDZCxhQUFhO0FBQUEsRUFDYixZQUFZO0FBQUEsRUFDWixnQkFBZ0I7QUFBQSxFQUNoQixvQkFBb0I7QUFBQSxFQUNwQixVQUFVO0FBQUEsRUFDVixZQUFZO0FBQUEsRUFDWixXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxlQUFlO0FBQUEsRUFDZixTQUFTO0FBQUEsRUFDVCxZQUFZO0FBQUEsRUFDWixjQUFjO0FBQUEsRUFDZCxhQUFhO0FBQUEsRUFDYixZQUFZO0FBQUEsRUFDWixtQkFBbUI7QUFBQSxFQUNuQixjQUFjO0FBQUEsRUFDZCxnQkFBZ0I7QUFBQSxFQUNoQixTQUFTO0FBQUEsRUFDVCxhQUFhO0FBQ2Y7QUFHQSxJQUFJLG9CQUFvQjtBQUFBLEVBQ3RCLE9BQU87QUFBQSxFQUNQLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxFQUNSLFNBQVM7QUFBQSxFQUNULFFBQVE7QUFBQSxFQUNSLEtBQUs7QUFBQSxFQUNMLE1BQU07QUFBQSxFQUNOLFVBQVU7QUFBQSxFQUNWLE9BQU87QUFBQSxFQUNQLFFBQVE7QUFBQSxFQUNSLEdBQUc7QUFBQSxFQUNILE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLFNBQVM7QUFBQSxFQUNULE9BQU87QUFBQSxFQUNQLEtBQUs7QUFBQSxFQUNMLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLFNBQVM7QUFBQSxFQUNULFFBQVE7QUFBQSxFQUNSLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLFFBQVE7QUFBQSxFQUNSLEdBQUc7QUFBQSxFQUNILFNBQVM7QUFBQSxFQUNULElBQUk7QUFBQSxFQUNKLElBQUk7QUFBQSxFQUNKLFNBQVM7QUFBQSxFQUNULEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLFNBQVM7QUFBQSxFQUNULFVBQVU7QUFBQSxFQUNWLFNBQVM7QUFBQSxFQUNULE9BQU87QUFBQSxFQUNQLFFBQVE7QUFBQSxFQUNSLFVBQVU7QUFBQSxFQUNWLGFBQWE7QUFBQSxFQUNiLFVBQVU7QUFBQSxFQUNWLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLE1BQU07QUFBQSxFQUNOLFlBQVk7QUFBQSxFQUNaLE9BQU87QUFBQSxFQUNQLFFBQVE7QUFBQSxFQUNSLFFBQVE7QUFBQSxFQUNSLFNBQVM7QUFBQSxFQUNULFVBQVU7QUFBQSxFQUNWLFFBQVE7QUFBQSxFQUNSLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLFVBQVU7QUFBQSxFQUNWLE9BQU87QUFBQSxFQUNQLFFBQVE7QUFBQSxFQUNSLE9BQU87QUFBQSxFQUNQLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLFNBQVM7QUFBQSxFQUNULFFBQVE7QUFBQSxFQUNSLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLFFBQVE7QUFBQSxFQUNSLFVBQVU7QUFBQSxFQUNWLFdBQVc7QUFBQSxFQUNYLFFBQVE7QUFBQSxFQUNSLFNBQVM7QUFBQSxFQUNULFVBQVU7QUFBQSxFQUNWLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLFFBQVE7QUFBQSxFQUNSLE9BQU87QUFBQSxFQUNQLEtBQUs7QUFBQSxFQUNMLElBQUk7QUFBQSxFQUNKLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLFNBQVM7QUFBQSxFQUNULE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLEtBQUs7QUFBQSxFQUNMLE9BQU87QUFBQSxFQUNQLFFBQVE7QUFBQSxFQUNSLGNBQWM7QUFBQSxFQUNkLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQSxFQUNULFFBQVE7QUFBQSxFQUNSLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLFFBQVE7QUFBQSxFQUNSLFVBQVU7QUFBQSxFQUNWLFlBQVk7QUFBQSxFQUNaLFVBQVU7QUFBQSxFQUNWLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLE9BQU87QUFBQSxFQUNQLFNBQVM7QUFDWDtBQUdBLElBQUksaUJBQWlCO0FBQ3JCLElBQUksaUJBQWlCO0FBQUEsRUFDbkIsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04s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QzFDLENBQUM7TUFDSDtJQUNGO0VBQ0Y7QUFFQSxNQUFJLFNBQVMsVUFBVSxNQUFNLFFBQVEsTUFBTSxHQUFHO0FBQzVDLFFBQUksWUFBWTtBQUNoQixXQUFPLFFBQVEsQ0FBQSxVQUFTO0FBQ3RCLE9BQUMsU0FBUyxDQUFDLEdBQUcsUUFBUSxDQUFBLFVBQVM7QUFDN0IsY0FBTSxRQUFRLFNBQVMsU0FBUztBQUNoQyxZQUFJLFNBQVMsb0JBQW9CLE1BQU0sSUFBSSxDQUFBLE1BQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUc7QUFDNUQsaUJBQU8sU0FBUyxLQUFLO1lBQ25CLE1BQU07WUFDTixTQUFTLFlBQVksTUFBTSxJQUFJO1lBQy9CLE1BQU07VUFDUixDQUFDO1FBQ0g7QUFDQSxxQkFBYTtNQUNmLENBQUM7SUFDSCxDQUFDO0VBQ0g7QUFFQSxTQUFPO0FBQ1Q7IiwKICAibmFtZXMiOiBbInBhcnNlIiwgIlV0aWxzIiwgIkNvbnRyb2xsZXJDaGFuZ2VFdmVudCIsICJDb3B5cmlnaHRFdmVudCIsICJDdWVQb2ludEV2ZW50IiwgIkVuZFRyYWNrRXZlbnQiLCAiSW5zdHJ1bWVudE5hbWVFdmVudCIsICJLZXlTaWduYXR1cmVFdmVudCIsICJub3RlIiwgIkx5cmljRXZlbnQiLCAiTWFya2VyRXZlbnQiLCAiTm90ZU9uRXZlbnQiLCAiTm90ZU9mZkV2ZW50IiwgIk5vdGVFdmVudCIsICJQaXRjaEJlbmRFdmVudCIsICJQcm9ncmFtQ2hhbmdlRXZlbnQiLCAiVGVtcG9FdmVudCIsICJUZXh0RXZlbnQiLCAiVGltZVNpZ25hdHVyZUV2ZW50IiwgIlRyYWNrTmFtZUV2ZW50IiwgIlRyYWNrIiwgIl9hIiwgIlZleEZsb3ciLCAicGFjayIsICJIZWFkZXIiLCAiV3JpdGVyIiwgImJ1aWxkIiwgIlRyYWNrIiwgIkZpbGUiLCAibiIsICJyZXBlYXQiLCAiaSIsICJtaWRpV3JpdGVyIiwgImpzbWlkZ2VuIiwgIm91dCIsICJ2ZWxvY2l0eSIsICJub3RlIiwgImZpbmRTdWZmaXhEYXNoQ29tbWVudEluZGV4IiwgInJhbmdlIiwgImZpbmRTdWZmaXhEYXNoQ29tbWVudEluZGV4IiwgInN0cmlwSW5saW5lQ29tbWVudCIsICJmaW5kU3VmZml4RGFzaENvbW1lbnRJbmRleCIsICJzdHJpcElubGluZUNvbW1lbnQiXQp9Cg==
