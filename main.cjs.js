var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/src/main.cjs.js
var main_cjs_exports = {};
__export(main_cjs_exports, {
  merge: () => export_merge,
  parse: () => export_parse
});
module.exports = __toCommonJS(main_cjs_exports);

// src/lib/index.js
var __create = Object.create;
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames2(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export2 = (target, all) => {
  for (var name in all)
    __defProp2(target, name, { get: all[name], enumerable: true });
};
var __copyProps2 = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames2(from))
      if (!__hasOwnProp2.call(to, key) && key !== except)
        __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps2(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
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
var REGEX;
var SEMITONES;
var init_note_parser = __esm({
  "node_modules/note-parser/index.js"() {
    "use strict";
    REGEX = /^([a-gA-G])(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)\s*$/;
    SEMITONES = [0, 2, 4, 5, 7, 9, 11];
  }
});
var tonal_midi_exports = {};
__export2(tonal_midi_exports, {
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
var FLATS;
var SHARPS;
var init_tonal_midi = __esm({
  "node_modules/tonal-midi/index.js"() {
    init_note_parser();
    FLATS = "C Db D Eb E F Gb G Ab A Bb B".split(" ");
    SHARPS = "C C# D D# E F F# G G# A A# B".split(" ");
  }
});
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
var require_build = __commonJS({
  "node_modules/midi-writer-js/build/index.js"(exports2, module2) {
    "use strict";
    var tonalMidi = (init_tonal_midi(), __toCommonJS2(tonal_midi_exports));
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
          (function version() {
            return Constants.VERSION;
          })
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
          (function trackFromVoice(voice) {
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
          })
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
var pickOne;
var dice;
var init_utils = __esm({
  "node_modules/scribbletune/src/utils.ts"() {
    pickOne = (arr) => arr.length > 1 ? arr[Math.round(Math.random())] : arr[0];
    dice = () => !!Math.round(Math.random());
  }
});
var progression_exports = {};
__export2(progression_exports, {
  getChordDegrees: () => getChordDegrees,
  getChordsByProgression: () => getChordsByProgression,
  progression: () => progression
});
var import_harmonics;
var getChordDegrees;
var idxByDegree;
var getChordName;
var getChordsByProgression;
var getProgFactory;
var M;
var m;
var progression;
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
var require_parser = __commonJS({
  "src/lib/parser.js"(exports2, module2) {
    var { getChordsByProgression: getChordsByProgression2 } = (init_progression(), __toCommonJS2(progression_exports));
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
    function parse3(buffer) {
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
    Object.assign(module2.exports, { parse: parse3, reduce });
  }
});
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
    function merge2(ctx) {
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
    Object.assign(module2.exports, { build, merge: merge2, pack });
  }
});
var lib_exports = {};
__export2(lib_exports, {
  merge: () => import_mixup.merge,
  parse: () => import_parser.parse
});
var import_mixup = __toESM(require_mixup());
var import_parser = __toESM(require_parser());
__reExport(lib_exports, __toESM(require_utils()));
__reExport(lib_exports, __toESM(require_mixup()));
__reExport(lib_exports, __toESM(require_parser()));
__reExport(lib_exports, __toESM(require_tokenize()));
var export_merge = import_mixup.merge;
var export_parse = import_parser.parse;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  merge,
  parse
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL3NyYy9tYWluLmNqcy5qcyIsICJzcmMvbGliL25vZGVfbW9kdWxlcy9ub3RlLXBhcnNlci9pbmRleC5qcyIsICJzcmMvbGliL25vZGVfbW9kdWxlcy90b25hbC1taWRpL2luZGV4LmpzIiwgInNyYy9saWIvbm9kZV9tb2R1bGVzL21pZGktd3JpdGVyLWpzL3BhY2thZ2UuanNvbiIsICJzcmMvbGliL25vZGVfbW9kdWxlcy9taWRpLXdyaXRlci1qcy9idWlsZC9pbmRleC5qcyIsICJzcmMvbGliL25vZGVfbW9kdWxlcy9qc21pZGdlbi9saWIvanNtaWRnZW4uanMiLCAic3JjL2xpYi9zcmMvbGliL3NyYy9saWIvc3JjL2xpYi91dGlscy5qcyIsICJzcmMvbGliL25vZGVfbW9kdWxlcy9oYXJtb25pY3MvbWFpbi5qcyIsICJzcmMvbGliL3NyYy9saWIvc3JjL2xpYi9zcmMvbGliL3Rva2VuaXplLmpzIiwgInNyYy9saWIvbm9kZV9tb2R1bGVzL3NjcmliYmxldHVuZS9zcmMvdXRpbHMudHMiLCAic3JjL2xpYi9ub2RlX21vZHVsZXMvc2NyaWJibGV0dW5lL3NyYy9wcm9ncmVzc2lvbi50cyIsICJzcmMvbGliL3NyYy9saWIvc3JjL2xpYi9zcmMvbGliL3BhcnNlci5qcyIsICJzcmMvbGliL3NyYy9saWIvc3JjL2xpYi9zcmMvbGliL21peHVwLmpzIiwgInNyYy9saWIvc3JjL2xpYi9zcmMvbGliL2luZGV4LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tICcuL2xpYic7XG4iLCAiJ3VzZSBzdHJpY3QnXG5cbi8vIHV0aWxcbmZ1bmN0aW9uIGZpbGxTdHIgKHMsIG51bSkgeyByZXR1cm4gQXJyYXkobnVtICsgMSkuam9pbihzKSB9XG5mdW5jdGlvbiBpc051bSAoeCkgeyByZXR1cm4gdHlwZW9mIHggPT09ICdudW1iZXInIH1cbmZ1bmN0aW9uIGlzU3RyICh4KSB7IHJldHVybiB0eXBlb2YgeCA9PT0gJ3N0cmluZycgfVxuZnVuY3Rpb24gaXNEZWYgKHgpIHsgcmV0dXJuIHR5cGVvZiB4ICE9PSAndW5kZWZpbmVkJyB9XG5mdW5jdGlvbiBtaWRpVG9GcmVxIChtaWRpLCB0dW5pbmcpIHtcbiAgcmV0dXJuIE1hdGgucG93KDIsIChtaWRpIC0gNjkpIC8gMTIpICogKHR1bmluZyB8fCA0NDApXG59XG5cbnZhciBSRUdFWCA9IC9eKFthLWdBLUddKSgjezEsfXxiezEsfXx4ezEsfXwpKC0/XFxkKilcXHMqKC4qKVxccyokL1xuLyoqXG4gKiBBIHJlZ2V4IGZvciBtYXRjaGluZyBub3RlIHN0cmluZ3MgaW4gc2NpZW50aWZpYyBub3RhdGlvbi5cbiAqXG4gKiBAbmFtZSByZWdleFxuICogQGZ1bmN0aW9uXG4gKiBAcmV0dXJuIHtSZWdFeHB9IHRoZSByZWdleHAgdXNlZCB0byBwYXJzZSB0aGUgbm90ZSBuYW1lXG4gKlxuICogVGhlIG5vdGUgc3RyaW5nIHNob3VsZCBoYXZlIHRoZSBmb3JtIGBsZXR0ZXJbYWNjaWRlbnRhbHNdW29jdGF2ZV1bZWxlbWVudF1gXG4gKiB3aGVyZTpcbiAqXG4gKiAtIGxldHRlcjogKFJlcXVpcmVkKSBpcyBhIGxldHRlciBmcm9tIEEgdG8gRyBlaXRoZXIgdXBwZXIgb3IgbG93ZXIgY2FzZVxuICogLSBhY2NpZGVudGFsczogKE9wdGlvbmFsKSBjYW4gYmUgb25lIG9yIG1vcmUgYGJgIChmbGF0cyksIGAjYCAoc2hhcnBzKSBvciBgeGAgKGRvdWJsZSBzaGFycHMpLlxuICogVGhleSBjYW4gTk9UIGJlIG1peGVkLlxuICogLSBvY3RhdmU6IChPcHRpb25hbCkgYSBwb3NpdGl2ZSBvciBuZWdhdGl2ZSBpbnRlZ2VyXG4gKiAtIGVsZW1lbnQ6IChPcHRpb25hbCkgYWRkaXRpb25hbGx5IGFueXRoaW5nIGFmdGVyIHRoZSBkdXJhdGlvbiBpcyBjb25zaWRlcmVkIHRvXG4gKiBiZSB0aGUgZWxlbWVudCBuYW1lIChmb3IgZXhhbXBsZTogJ0MyIGRvcmlhbicpXG4gKlxuICogVGhlIGV4ZWN1dGVkIHJlZ2V4IGNvbnRhaW5zIChieSBhcnJheSBpbmRleCk6XG4gKlxuICogLSAwOiB0aGUgY29tcGxldGUgc3RyaW5nXG4gKiAtIDE6IHRoZSBub3RlIGxldHRlclxuICogLSAyOiB0aGUgb3B0aW9uYWwgYWNjaWRlbnRhbHNcbiAqIC0gMzogdGhlIG9wdGlvbmFsIG9jdGF2ZVxuICogLSA0OiB0aGUgcmVzdCBvZiB0aGUgc3RyaW5nICh0cmltbWVkKVxuICpcbiAqIEBleGFtcGxlXG4gKiB2YXIgcGFyc2VyID0gcmVxdWlyZSgnbm90ZS1wYXJzZXInKVxuICogcGFyc2VyLnJlZ2V4LmV4ZWMoJ2MjNCcpXG4gKiAvLyA9PiBbJ2MjNCcsICdjJywgJyMnLCAnNCcsICcnXVxuICogcGFyc2VyLnJlZ2V4LmV4ZWMoJ2MjNCBtYWpvcicpXG4gKiAvLyA9PiBbJ2MjNG1ham9yJywgJ2MnLCAnIycsICc0JywgJ21ham9yJ11cbiAqIHBhcnNlci5yZWdleCgpLmV4ZWMoJ0NNYWo3JylcbiAqIC8vID0+IFsnQ01hajcnLCAnQycsICcnLCAnJywgJ01hajcnXVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnZXggKCkgeyByZXR1cm4gUkVHRVggfVxuXG52YXIgU0VNSVRPTkVTID0gWzAsIDIsIDQsIDUsIDcsIDksIDExXVxuLyoqXG4gKiBQYXJzZSBhIG5vdGUgbmFtZSBpbiBzY2llbnRpZmljIG5vdGF0aW9uIGFuIHJldHVybiBpdCdzIGNvbXBvbmVudHMsXG4gKiBhbmQgc29tZSBudW1lcmljIHByb3BlcnRpZXMgaW5jbHVkaW5nIG1pZGkgbnVtYmVyIGFuZCBmcmVxdWVuY3kuXG4gKlxuICogQG5hbWUgcGFyc2VcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5vdGUgLSB0aGUgbm90ZSBzdHJpbmcgdG8gYmUgcGFyc2VkXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzVG9uaWMgLSB0cnVlIHRoZSBzdHJpbmdzIGl0J3Mgc3VwcG9zZWQgdG8gY29udGFpbiBhIG5vdGUgbnVtYmVyXG4gKiBhbmQgc29tZSBjYXRlZ29yeSAoZm9yIGV4YW1wbGUgYW4gc2NhbGU6ICdDIyBtYWpvcicpLiBJdCdzIGZhbHNlIGJ5IGRlZmF1bHQsXG4gKiBidXQgd2hlbiB0cnVlLCBlbiBleHRyYSB0b25pY09mIHByb3BlcnR5IGlzIHJldHVybmVkIHdpdGggdGhlIGNhdGVnb3J5ICgnbWFqb3InKVxuICogQHBhcmFtIHtGbG9hdH0gdHVubmluZyAtIFRoZSBmcmVxdWVuY3kgb2YgQTQgbm90ZSB0byBjYWxjdWxhdGUgZnJlcXVlbmNpZXMuXG4gKiBCeSBkZWZhdWx0IGl0IDQ0MC5cbiAqIEByZXR1cm4ge09iamVjdH0gdGhlIHBhcnNlZCBub3RlIG5hbWUgb3IgbnVsbCBpZiBub3QgYSB2YWxpZCBub3RlXG4gKlxuICogVGhlIHBhcnNlZCBub3RlIG5hbWUgb2JqZWN0IHdpbGwgQUxXQVlTIGNvbnRhaW5zOlxuICogLSBsZXR0ZXI6IHRoZSB1cHBlcmNhc2UgbGV0dGVyIG9mIHRoZSBub3RlXG4gKiAtIGFjYzogdGhlIGFjY2lkZW50YWxzIG9mIHRoZSBub3RlIChvbmx5IHNoYXJwcyBvciBmbGF0cylcbiAqIC0gcGM6IHRoZSBwaXRjaCBjbGFzcyAobGV0dGVyICsgYWNjKVxuICogLSBzdGVwOiBzIGEgbnVtZXJpYyByZXByZXNlbnRhdGlvbiBvZiB0aGUgbGV0dGVyLiBJdCdzIGFuIGludGVnZXIgZnJvbSAwIHRvIDZcbiAqIHdoZXJlIDAgPSBDLCAxID0gRCAuLi4gNiA9IEJcbiAqIC0gYWx0OiBhIG51bWVyaWMgcmVwcmVzZW50YXRpb24gb2YgdGhlIGFjY2lkZW50YWxzLiAwIG1lYW5zIG5vIGFsdGVyYXRpb24sXG4gKiBwb3NpdGl2ZSBudW1iZXJzIGFyZSBmb3Igc2hhcnBzIGFuZCBuZWdhdGl2ZSBmb3IgZmxhdHNcbiAqIC0gY2hyb21hOiBhIG51bWVyaWMgcmVwcmVzZW50YXRpb24gb2YgdGhlIHBpdGNoIGNsYXNzLiBJdCdzIGxpa2UgbWlkaSBmb3JcbiAqIHBpdGNoIGNsYXNzZXMuIDAgPSBDLCAxID0gQyMsIDIgPSBEIC4uLiAxMSA9IEIuIENhbiBiZSB1c2VkIHRvIGZpbmQgZW5oYXJtb25pY3NcbiAqIHNpbmNlLCBmb3IgZXhhbXBsZSwgY2hyb21hIG9mICdDYicgYW5kICdCJyBhcmUgYm90aCAxMVxuICpcbiAqIElmIHRoZSBub3RlIGhhcyBvY3RhdmUsIHRoZSBwYXJzZXIgb2JqZWN0IHdpbGwgY29udGFpbjpcbiAqIC0gb2N0OiB0aGUgb2N0YXZlIG51bWJlciAoYXMgaW50ZWdlcilcbiAqIC0gbWlkaTogdGhlIG1pZGkgbnVtYmVyXG4gKiAtIGZyZXE6IHRoZSBmcmVxdWVuY3kgKHVzaW5nIHR1bmluZyBwYXJhbWV0ZXIgYXMgYmFzZSlcbiAqXG4gKiBJZiB0aGUgcGFyYW1ldGVyIGBpc1RvbmljYCBpcyBzZXQgdG8gdHJ1ZSwgdGhlIHBhcnNlZCBvYmplY3Qgd2lsbCBjb250YWluOlxuICogLSB0b25pY09mOiB0aGUgcmVzdCBvZiB0aGUgc3RyaW5nIHRoYXQgZm9sbG93cyBub3RlIG5hbWUgKGxlZnQgYW5kIHJpZ2h0IHRyaW1tZWQpXG4gKlxuICogQGV4YW1wbGVcbiAqIHZhciBwYXJzZSA9IHJlcXVpcmUoJ25vdGUtcGFyc2VyJykucGFyc2VcbiAqIHBhcnNlKCdDYjQnKVxuICogLy8gPT4geyBsZXR0ZXI6ICdDJywgYWNjOiAnYicsIHBjOiAnQ2InLCBzdGVwOiAwLCBhbHQ6IC0xLCBjaHJvbWE6IC0xLFxuICogICAgICAgICBvY3Q6IDQsIG1pZGk6IDU5LCBmcmVxOiAyNDYuOTQxNjUwNjI4MDYyMDYgfVxuICogLy8gaWYgbm8gb2N0YXZlLCBubyBtaWRpLCBubyBmcmVxXG4gKiBwYXJzZSgnZngnKVxuICogLy8gPT4geyBsZXR0ZXI6ICdGJywgYWNjOiAnIyMnLCBwYzogJ0YjIycsIHN0ZXA6IDMsIGFsdDogMiwgY2hyb21hOiA3IH0pXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZSAoc3RyLCBpc1RvbmljLCB0dW5pbmcpIHtcbiAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSByZXR1cm4gbnVsbFxuICB2YXIgbSA9IFJFR0VYLmV4ZWMoc3RyKVxuICBpZiAoIW0gfHwgKCFpc1RvbmljICYmIG1bNF0pKSByZXR1cm4gbnVsbFxuXG4gIHZhciBwID0geyBsZXR0ZXI6IG1bMV0udG9VcHBlckNhc2UoKSwgYWNjOiBtWzJdLnJlcGxhY2UoL3gvZywgJyMjJykgfVxuICBwLnBjID0gcC5sZXR0ZXIgKyBwLmFjY1xuICBwLnN0ZXAgPSAocC5sZXR0ZXIuY2hhckNvZGVBdCgwKSArIDMpICUgN1xuICBwLmFsdCA9IHAuYWNjWzBdID09PSAnYicgPyAtcC5hY2MubGVuZ3RoIDogcC5hY2MubGVuZ3RoXG4gIHZhciBwb3MgPSBTRU1JVE9ORVNbcC5zdGVwXSArIHAuYWx0XG4gIHAuY2hyb21hID0gcG9zIDwgMCA/IDEyICsgcG9zIDogcG9zICUgMTJcbiAgaWYgKG1bM10pIHsgLy8gaGFzIG9jdGF2ZVxuICAgIHAub2N0ID0gK21bM11cbiAgICBwLm1pZGkgPSBwb3MgKyAxMiAqIChwLm9jdCArIDEpXG4gICAgcC5mcmVxID0gbWlkaVRvRnJlcShwLm1pZGksIHR1bmluZylcbiAgfVxuICBpZiAoaXNUb25pYykgcC50b25pY09mID0gbVs0XVxuICByZXR1cm4gcFxufVxuXG52YXIgTEVUVEVSUyA9ICdDREVGR0FCJ1xuZnVuY3Rpb24gYWNjU3RyIChuKSB7IHJldHVybiAhaXNOdW0obikgPyAnJyA6IG4gPCAwID8gZmlsbFN0cignYicsIC1uKSA6IGZpbGxTdHIoJyMnLCBuKSB9XG5mdW5jdGlvbiBvY3RTdHIgKG4pIHsgcmV0dXJuICFpc051bShuKSA/ICcnIDogJycgKyBuIH1cblxuLyoqXG4gKiBDcmVhdGUgYSBzdHJpbmcgZnJvbSBhIHBhcnNlZCBvYmplY3Qgb3IgYHN0ZXAsIGFsdGVyYXRpb24sIG9jdGF2ZWAgcGFyYW1ldGVyc1xuICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIHRoZSBwYXJzZWQgZGF0YSBvYmplY3RcbiAqIEByZXR1cm4ge1N0cmluZ30gYSBub3RlIHN0cmluZyBvciBudWxsIGlmIG5vdCB2YWxpZCBwYXJhbWV0ZXJzXG4gKiBAc2luY2UgMS4yXG4gKiBAZXhhbXBsZVxuICogcGFyc2VyLmJ1aWxkKHBhcnNlci5wYXJzZSgnY2IyJykpIC8vID0+ICdDYjInXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIGl0IGFjY2VwdHMgKHN0ZXAsIGFsdGVyYXRpb24sIG9jdGF2ZSkgcGFyYW1ldGVyczpcbiAqIHBhcnNlci5idWlsZCgzKSAvLyA9PiAnRidcbiAqIHBhcnNlci5idWlsZCgzLCAtMSkgLy8gPT4gJ0ZiJ1xuICogcGFyc2VyLmJ1aWxkKDMsIC0xLCA0KSAvLyA9PiAnRmI0J1xuICovXG5leHBvcnQgZnVuY3Rpb24gYnVpbGQgKHMsIGEsIG8pIHtcbiAgaWYgKHMgPT09IG51bGwgfHwgdHlwZW9mIHMgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gbnVsbFxuICBpZiAocy5zdGVwKSByZXR1cm4gYnVpbGQocy5zdGVwLCBzLmFsdCwgcy5vY3QpXG4gIGlmIChzIDwgMCB8fCBzID4gNikgcmV0dXJuIG51bGxcbiAgcmV0dXJuIExFVFRFUlMuY2hhckF0KHMpICsgYWNjU3RyKGEpICsgb2N0U3RyKG8pXG59XG5cbi8qKlxuICogR2V0IG1pZGkgb2YgYSBub3RlXG4gKlxuICogQG5hbWUgbWlkaVxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ3xJbnRlZ2VyfSBub3RlIC0gdGhlIG5vdGUgbmFtZSBvciBtaWRpIG51bWJlclxuICogQHJldHVybiB7SW50ZWdlcn0gdGhlIG1pZGkgbnVtYmVyIG9mIHRoZSBub3RlIG9yIG51bGwgaWYgbm90IGEgdmFsaWQgbm90ZVxuICogb3IgdGhlIG5vdGUgZG9lcyBOT1QgY29udGFpbnMgb2N0YXZlXG4gKiBAZXhhbXBsZVxuICogdmFyIHBhcnNlciA9IHJlcXVpcmUoJ25vdGUtcGFyc2VyJylcbiAqIHBhcnNlci5taWRpKCdBNCcpIC8vID0+IDY5XG4gKiBwYXJzZXIubWlkaSgnQScpIC8vID0+IG51bGxcbiAqIEBleGFtcGxlXG4gKiAvLyBtaWRpIG51bWJlcnMgYXJlIGJ5cGFzc2VkIChldmVuIGFzIHN0cmluZ3MpXG4gKiBwYXJzZXIubWlkaSg2MCkgLy8gPT4gNjBcbiAqIHBhcnNlci5taWRpKCc2MCcpIC8vID0+IDYwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtaWRpIChub3RlKSB7XG4gIGlmICgoaXNOdW0obm90ZSkgfHwgaXNTdHIobm90ZSkpICYmIG5vdGUgPj0gMCAmJiBub3RlIDwgMTI4KSByZXR1cm4gK25vdGVcbiAgdmFyIHAgPSBwYXJzZShub3RlKVxuICByZXR1cm4gcCAmJiBpc0RlZihwLm1pZGkpID8gcC5taWRpIDogbnVsbFxufVxuXG4vKipcbiAqIEdldCBmcmVxIG9mIGEgbm90ZSBpbiBoZXJ0enMgKGluIGEgd2VsbCB0ZW1wZXJlZCA0NDBIeiBBNClcbiAqXG4gKiBAbmFtZSBmcmVxXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBub3RlIC0gdGhlIG5vdGUgbmFtZSBvciBub3RlIG1pZGkgbnVtYmVyXG4gKiBAcGFyYW0ge1N0cmluZ30gdHVuaW5nIC0gKE9wdGlvbmFsKSB0aGUgQTQgZnJlcXVlbmN5ICg0NDAgYnkgZGVmYXVsdClcbiAqIEByZXR1cm4ge0Zsb2F0fSB0aGUgZnJlcSBvZiB0aGUgbnVtYmVyIGlmIGhlcnR6cyBvciBudWxsIGlmIG5vdCB2YWxpZCBub3RlXG4gKiBAZXhhbXBsZVxuICogdmFyIHBhcnNlciA9IHJlcXVpcmUoJ25vdGUtcGFyc2VyJylcbiAqIHBhcnNlci5mcmVxKCdBNCcpIC8vID0+IDQ0MFxuICogcGFyc2VyLmZyZXEoJ0EnKSAvLyA9PiBudWxsXG4gKiBAZXhhbXBsZVxuICogLy8gY2FuIGNoYW5nZSB0dW5pbmcgKDQ0MCBieSBkZWZhdWx0KVxuICogcGFyc2VyLmZyZXEoJ0E0JywgNDQ0KSAvLyA9PiA0NDRcbiAqIHBhcnNlci5mcmVxKCdBMycsIDQ0NCkgLy8gPT4gMjIyXG4gKiBAZXhhbXBsZVxuICogLy8gaXQgYWNjZXB0cyBtaWRpIG51bWJlcnMgKGFzIG51bWJlcnMgYW5kIGFzIHN0cmluZ3MpXG4gKiBwYXJzZXIuZnJlcSg2OSkgLy8gPT4gNDQwXG4gKiBwYXJzZXIuZnJlcSgnNjknLCA0NDIpIC8vID0+IDQ0MlxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJlcSAobm90ZSwgdHVuaW5nKSB7XG4gIHZhciBtID0gbWlkaShub3RlKVxuICByZXR1cm4gbSA9PT0gbnVsbCA/IG51bGwgOiBtaWRpVG9GcmVxKG0sIHR1bmluZylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxldHRlciAoc3JjKSB7IHJldHVybiAocGFyc2Uoc3JjKSB8fCB7fSkubGV0dGVyIH1cbmV4cG9ydCBmdW5jdGlvbiBhY2MgKHNyYykgeyByZXR1cm4gKHBhcnNlKHNyYykgfHwge30pLmFjYyB9XG5leHBvcnQgZnVuY3Rpb24gcGMgKHNyYykgeyByZXR1cm4gKHBhcnNlKHNyYykgfHwge30pLnBjIH1cbmV4cG9ydCBmdW5jdGlvbiBzdGVwIChzcmMpIHsgcmV0dXJuIChwYXJzZShzcmMpIHx8IHt9KS5zdGVwIH1cbmV4cG9ydCBmdW5jdGlvbiBhbHQgKHNyYykgeyByZXR1cm4gKHBhcnNlKHNyYykgfHwge30pLmFsdCB9XG5leHBvcnQgZnVuY3Rpb24gY2hyb21hIChzcmMpIHsgcmV0dXJuIChwYXJzZShzcmMpIHx8IHt9KS5jaHJvbWEgfVxuZXhwb3J0IGZ1bmN0aW9uIG9jdCAoc3JjKSB7IHJldHVybiAocGFyc2Uoc3JjKSB8fCB7fSkub2N0IH1cbiIsICIvKipcbiAqIEEgbWlkaSBub3RlIG51bWJlciBpcyBhIG51bWJlciByZXByZXNlbnRhdGlvbiBvZiBhIG5vdGUgcGl0Y2guIEl0IGNhbiBiZVxuICogaW50ZWdlcnMgc28gaXQncyBlcXVhbCB0ZW1wZXJlZCB0dW5lZCwgb3IgZmxvYXQgdG8gaW5kaWNhdGUgaXQncyBub3RcbiAqIHR1bmVkIGludG8gZXF1YWwgdGVtZXBlcmVkIHNjYWxlLlxuICpcbiAqIFRoaXMgbW9kdWxlIGNvbnRhaW5zIGZ1bmN0aW9ucyB0byBjb252ZXJ0IHRvIGFuZCBmcm9tIG1pZGkgbm90ZXMuXG4gKlxuICogQGV4YW1wbGVcbiAqIHZhciBtaWRpID0gcmVxdWlyZSgndG9uYWwtbWlkaScpXG4gKiBtaWRpLnRvTWlkaSgnQTQnKSAvLyA9PiA2OVxuICogbWlkaS5ub3RlKDY5KSAvLyA9PiAnQTQnXG4gKiBtaWRpLm5vdGUoNjEpIC8vID0+ICdEYjQnXG4gKiBtaWRpLm5vdGUoNjEsIHRydWUpIC8vID0+ICdDIzQnXG4gKlxuICogQG1vZHVsZSBtaWRpXG4gKi9cblxuaW1wb3J0IHsgbWlkaSB9IGZyb20gJ25vdGUtcGFyc2VyJ1xuXG4vKipcbiAqIENvbnZlcnQgdGhlIGdpdmVuIG5vdGUgdG8gYSBtaWRpIG5vdGUgbnVtYmVyLiBJZiB5b3UgcGFzcyBhIG1pZGkgbnVtYmVyIGl0XG4gKiB3aWxsIHJldHVybmVkIGFzIGlzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfE51bWJlcn0gbm90ZSAtIHRoZSBub3RlIHRvIGdldCB0aGUgbWlkaSBudW1iZXIgZnJvbVxuICogQHJldHVybiB7SW50ZWdlcn0gdGhlIG1pZGkgbnVtYmVyIG9yIG51bGwgaWYgbm90IHZhbGlkIHBpdGNoXG4gKiBAZXhhbXBsZVxuICogbWlkaS50b01pZGkoJ0M0JykgLy8gPT4gNjBcbiAqIG1pZGkudG9NaWRpKDYwKSAvLyA9PiA2MFxuICogbWlkaS50b01pZGkoJzYwJykgLy8gPT4gNjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvTWlkaSAodmFsKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbCkgJiYgdmFsLmxlbmd0aCA9PT0gMikgcmV0dXJuIHZhbFswXSAqIDcgKyB2YWxbMV0gKiAxMiArIDEyXG4gIHJldHVybiBtaWRpKHZhbClcbn1cblxudmFyIEZMQVRTID0gJ0MgRGIgRCBFYiBFIEYgR2IgRyBBYiBBIEJiIEInLnNwbGl0KCcgJylcbnZhciBTSEFSUFMgPSAnQyBDIyBEIEQjIEUgRiBGIyBHIEcjIEEgQSMgQicuc3BsaXQoJyAnKVxuXG4vKipcbiAqIEdpdmVuIGEgbWlkaSBudW1iZXIsIHJldHVybnMgYSBub3RlIG5hbWUuIFRoZSBhbHRlcmVkIG5vdGVzIHdpbGwgaGF2ZVxuICogZmxhdHMgdW5sZXNzIGV4cGxpY2l0bHkgc2V0IHdpdGggdGhlIG9wdGlvbmFsIGB1c2VTaGFycHNgIHBhcmFtZXRlci5cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7SW50ZWdlcn0gbWlkaSAtIHRoZSBtaWRpIG5vdGUgbnVtYmVyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHVzZVNoYXJwcyAtIChPcHRpb25hbCkgc2V0IHRvIHRydWUgdG8gdXNlIHNoYXJwcyBpbnN0ZWFkIG9mIGZsYXRzXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHRoZSBub3RlIG5hbWVcbiAqIEBleGFtcGxlXG4gKiB2YXIgbWlkaSA9IHJlcXVpcmUoJ3RvbmFsLW1pZGknKVxuICogbWlkaS5ub3RlKDYxKSAvLyA9PiAnRGI0J1xuICogbWlkaS5ub3RlKDYxLCB0cnVlKSAvLyA9PiAnQyM0J1xuICogLy8gaXQgcm91bmRzIHRvIG5lYXJlc3Qgbm90ZVxuICogbWlkaS5ub3RlKDYxLjcpIC8vID0+ICdENCdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vdGUgKG51bSwgc2hhcnBzKSB7XG4gIGlmIChudW0gPT09IHRydWUgfHwgbnVtID09PSBmYWxzZSkgcmV0dXJuIGZ1bmN0aW9uIChtKSB7IHJldHVybiBub3RlKG0sIG51bSkgfVxuICBudW0gPSBNYXRoLnJvdW5kKG51bSlcbiAgdmFyIHBjcyA9IHNoYXJwcyA9PT0gdHJ1ZSA/IFNIQVJQUyA6IEZMQVRTXG4gIHZhciBwYyA9IHBjc1tudW0gJSAxMl1cbiAgdmFyIG8gPSBNYXRoLmZsb29yKG51bSAvIDEyKSAtIDFcbiAgcmV0dXJuIHBjICsgb1xufVxuIiwgIntcbiAgXCJuYW1lXCI6IFwibWlkaS13cml0ZXItanNcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMi4wLjFcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkEgbGlicmFyeSBwcm92aWRpbmcgYW4gQVBJIGZvciBnZW5lcmF0aW5nIE1JREkgZmlsZXMuXCIsXG4gIFwibWFpblwiOiBcImJ1aWxkL2luZGV4LmpzXCIsXG4gIFwidHlwZXNcIjogXCJ0eXBlcy5kLnRzXCIsXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcInRvbmFsLW1pZGlcIjogXCJeMC42OS43XCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQGJhYmVsL2NvcmVcIjogXCJeNy45LjZcIixcbiAgICBcIkBiYWJlbC9wbHVnaW4tdHJhbnNmb3JtLWRlc3RydWN0dXJpbmdcIjogXCJeNy45LjVcIixcbiAgICBcIkBiYWJlbC9wcmVzZXQtZW52XCI6IFwiXjcuOS42XCIsXG4gICAgXCJAcm9sbHVwL3BsdWdpbi1iYWJlbFwiOiBcIl41LjAuMFwiLFxuICAgIFwiZXNsaW50XCI6IFwiXjcuMC4wXCIsXG4gICAgXCJlc2xpbnQtY29uZmlnLXN0YW5kYXJkXCI6IFwiXjEyLjAuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1pbXBvcnRcIjogXCJeMi4yMC4yXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLW5vZGVcIjogXCJeOS4yLjBcIixcbiAgICBcImVzbGludC1wbHVnaW4tcHJvbWlzZVwiOiBcIl40LjEuMVwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1zdGFuZGFyZFwiOiBcIl40LjAuMVwiLFxuICAgIFwianNkb2NcIjogXCJeMy42LjRcIixcbiAgICBcIm1pbmFtaVwiOiBcIl4xLjIuM1wiLFxuICAgIFwibW9jaGFcIjogXCJeOS4wLjFcIixcbiAgICBcIm55Y1wiOiBcIl4xNS4wLjFcIixcbiAgICBcInJvbGx1cFwiOiBcIl4yLjkuMFwiLFxuICAgIFwid2F0Y2hcIjogXCJeMS4wLjJcIlxuICB9LFxuICBcImRpcmVjdG9yaWVzXCI6IHtcbiAgICBcImxpYlwiOiBcInNyY1wiLFxuICAgIFwiZXhhbXBsZVwiOiBcImV4YW1wbGVzXCIsXG4gICAgXCJ0ZXN0XCI6IFwidGVzdFwiXG4gIH0sXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJidWlsZFwiOiBcIm1rZGlyIC1wIGJ1aWxkICYmIHJvbGx1cCAtYyAmJiBucG0gcnVuIGRvY3NcIixcbiAgICBcImRvY3NcIjogXCIuL25vZGVfbW9kdWxlcy8uYmluL2pzZG9jIC1yIHNyYyBSRUFETUUubWQgLWQgLi9kb2NzIC10IC4vbm9kZV9tb2R1bGVzL21pbmFtaVwiLFxuICAgIFwibGludDpqc1wiOiBcImVzbGludCAnc3JjLyoqLyoqLmpzJ1wiLFxuICAgIFwicHJlcHVibGlzaE9ubHlcIjogXCJucG0gdGVzdFwiLFxuICAgIFwicHJldGVzdFwiOiBcIm5wbSBydW4gYnVpbGRcIixcbiAgICBcInRlc3RcIjogXCJueWMgLS1yZXBvcnRlcj10ZXh0IG1vY2hhIC0tbm8tY29uZmlnIC0tbm8tcGFja2FnZVwiLFxuICAgIFwid2F0Y2hcIjogXCJ3YXRjaCAnbnBtIHJ1biBidWlsZCcgc3JjXCIsXG4gICAgXCJwb3N0aW5zdGFsbFwiOiBcIm5vZGUgcG9zdGluc3RhbGwuanNcIlxuICB9LFxuICBcInJ1bmtpdEV4YW1wbGVGaWxlbmFtZVwiOiBcInJ1bmtpdC5qc1wiLFxuICBcInJlcG9zaXRvcnlcIjoge1xuICAgIFwidHlwZVwiOiBcImdpdFwiLFxuICAgIFwidXJsXCI6IFwiZ2l0K2h0dHBzOi8vZ2l0aHViLmNvbS9ncmltbWR1ZGUvTWlkaVdyaXRlckpTLmdpdFwiXG4gIH0sXG4gIFwia2V5d29yZHNcIjogW1xuICAgIFwibWlkaVwiLFxuICAgIFwiZ2VuZXJhdG9yXCIsXG4gICAgXCJtdXNpY1wiXG4gIF0sXG4gIFwiYXV0aG9yXCI6IFwiR2FycmV0dCBHcmltbVwiLFxuICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgXCJidWdzXCI6IHtcbiAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ncmltbWR1ZGUvTWlkaVdyaXRlckpTL2lzc3Vlc1wiXG4gIH0sXG4gIFwiaG9tZXBhZ2VcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZ3JpbW1kdWRlL01pZGlXcml0ZXJKUyNyZWFkbWVcIlxufVxuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIHRvbmFsTWlkaSA9IHJlcXVpcmUoJ3RvbmFsLW1pZGknKTtcblxuLyoqXG4gKiBNSURJIGZpbGUgZm9ybWF0IGNvbnN0YW50cy5cbiAqIEByZXR1cm4ge0NvbnN0YW50c31cbiAqL1xudmFyIENvbnN0YW50cyA9IHtcbiAgVkVSU0lPTjogcmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJykudmVyc2lvbixcbiAgSEVBREVSX0NIVU5LX1RZUEU6IFsweDRkLCAweDU0LCAweDY4LCAweDY0XSxcbiAgLy8gTXRoZFxuICBIRUFERVJfQ0hVTktfTEVOR1RIOiBbMHgwMCwgMHgwMCwgMHgwMCwgMHgwNl0sXG4gIC8vIEhlYWRlciBzaXplIGZvciBTTUZcbiAgSEVBREVSX0NIVU5LX0ZPUk1BVDA6IFsweDAwLCAweDAwXSxcbiAgLy8gTWlkaSBUeXBlIDAgaWRcbiAgSEVBREVSX0NIVU5LX0ZPUk1BVDE6IFsweDAwLCAweDAxXSxcbiAgLy8gTWlkaSBUeXBlIDEgaWRcbiAgSEVBREVSX0NIVU5LX0RJVklTSU9OOiBbMHgwMCwgMHg4MF0sXG4gIC8vIERlZmF1bHRzIHRvIDEyOCB0aWNrcyBwZXIgYmVhdFxuICBUUkFDS19DSFVOS19UWVBFOiBbMHg0ZCwgMHg1NCwgMHg3MiwgMHg2Yl0sXG4gIC8vIE1UcmssXG4gIE1FVEFfRVZFTlRfSUQ6IDB4RkYsXG4gIE1FVEFfVEVYVF9JRDogMHgwMSxcbiAgTUVUQV9DT1BZUklHSFRfSUQ6IDB4MDIsXG4gIE1FVEFfVFJBQ0tfTkFNRV9JRDogMHgwMyxcbiAgTUVUQV9JTlNUUlVNRU5UX05BTUVfSUQ6IDB4MDQsXG4gIE1FVEFfTFlSSUNfSUQ6IDB4MDUsXG4gIE1FVEFfTUFSS0VSX0lEOiAweDA2LFxuICBNRVRBX0NVRV9QT0lOVDogMHgwNyxcbiAgTUVUQV9URU1QT19JRDogMHg1MSxcbiAgTUVUQV9TTVRQRV9PRkZTRVQ6IDB4NTQsXG4gIE1FVEFfVElNRV9TSUdOQVRVUkVfSUQ6IDB4NTgsXG4gIE1FVEFfS0VZX1NJR05BVFVSRV9JRDogMHg1OSxcbiAgTUVUQV9FTkRfT0ZfVFJBQ0tfSUQ6IFsweDJGLCAweDAwXSxcbiAgQ09OVFJPTExFUl9DSEFOR0VfU1RBVFVTOiAweEIwLFxuICAvLyBpbmNsdWRlcyBjaGFubmVsIG51bWJlciAoMClcbiAgUFJPR1JBTV9DSEFOR0VfU1RBVFVTOiAweEMwLFxuICAvLyBpbmNsdWRlcyBjaGFubmVsIG51bWJlciAoMClcbiAgUElUQ0hfQkVORF9TVEFUVVM6IDB4RTAgLy8gaW5jbHVkZXMgY2hhbm5lbCBudW1iZXIgKDApXG5cbn07XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbmZ1bmN0aW9uIF93cmFwUmVnRXhwKCkge1xuICBfd3JhcFJlZ0V4cCA9IGZ1bmN0aW9uIChyZSwgZ3JvdXBzKSB7XG4gICAgcmV0dXJuIG5ldyBCYWJlbFJlZ0V4cChyZSwgdW5kZWZpbmVkLCBncm91cHMpO1xuICB9O1xuXG4gIHZhciBfc3VwZXIgPSBSZWdFeHAucHJvdG90eXBlO1xuXG4gIHZhciBfZ3JvdXBzID0gbmV3IFdlYWtNYXAoKTtcblxuICBmdW5jdGlvbiBCYWJlbFJlZ0V4cChyZSwgZmxhZ3MsIGdyb3Vwcykge1xuICAgIHZhciBfdGhpcyA9IG5ldyBSZWdFeHAocmUsIGZsYWdzKTtcblxuICAgIF9ncm91cHMuc2V0KF90aGlzLCBncm91cHMgfHwgX2dyb3Vwcy5nZXQocmUpKTtcblxuICAgIHJldHVybiBfc2V0UHJvdG90eXBlT2YoX3RoaXMsIEJhYmVsUmVnRXhwLnByb3RvdHlwZSk7XG4gIH1cblxuICBfaW5oZXJpdHMoQmFiZWxSZWdFeHAsIFJlZ0V4cCk7XG5cbiAgQmFiZWxSZWdFeHAucHJvdG90eXBlLmV4ZWMgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgdmFyIHJlc3VsdCA9IF9zdXBlci5leGVjLmNhbGwodGhpcywgc3RyKTtcblxuICAgIGlmIChyZXN1bHQpIHJlc3VsdC5ncm91cHMgPSBidWlsZEdyb3VwcyhyZXN1bHQsIHRoaXMpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgQmFiZWxSZWdFeHAucHJvdG90eXBlW1N5bWJvbC5yZXBsYWNlXSA9IGZ1bmN0aW9uIChzdHIsIHN1YnN0aXR1dGlvbikge1xuICAgIGlmICh0eXBlb2Ygc3Vic3RpdHV0aW9uID09PSBcInN0cmluZ1wiKSB7XG4gICAgICB2YXIgZ3JvdXBzID0gX2dyb3Vwcy5nZXQodGhpcyk7XG5cbiAgICAgIHJldHVybiBfc3VwZXJbU3ltYm9sLnJlcGxhY2VdLmNhbGwodGhpcywgc3RyLCBzdWJzdGl0dXRpb24ucmVwbGFjZSgvXFwkPChbXj5dKyk+L2csIGZ1bmN0aW9uIChfLCBuYW1lKSB7XG4gICAgICAgIHJldHVybiBcIiRcIiArIGdyb3Vwc1tuYW1lXTtcbiAgICAgIH0pKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBzdWJzdGl0dXRpb24gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgcmV0dXJuIF9zdXBlcltTeW1ib2wucmVwbGFjZV0uY2FsbCh0aGlzLCBzdHIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICBhcmdzID0gW10uc2xpY2UuY2FsbChhcmdzKTtcbiAgICAgICAgICBhcmdzLnB1c2goYnVpbGRHcm91cHMoYXJncywgX3RoaXMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWJzdGl0dXRpb24uYXBwbHkodGhpcywgYXJncyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIF9zdXBlcltTeW1ib2wucmVwbGFjZV0uY2FsbCh0aGlzLCBzdHIsIHN1YnN0aXR1dGlvbik7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIGJ1aWxkR3JvdXBzKHJlc3VsdCwgcmUpIHtcbiAgICB2YXIgZyA9IF9ncm91cHMuZ2V0KHJlKTtcblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhnKS5yZWR1Y2UoZnVuY3Rpb24gKGdyb3VwcywgbmFtZSkge1xuICAgICAgZ3JvdXBzW25hbWVdID0gcmVzdWx0W2dbbmFtZV1dO1xuICAgICAgcmV0dXJuIGdyb3VwcztcbiAgICB9LCBPYmplY3QuY3JlYXRlKG51bGwpKTtcbiAgfVxuXG4gIHJldHVybiBfd3JhcFJlZ0V4cC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG4vKipcbiAqIFN0YXRpYyB1dGlsaXR5IGZ1bmN0aW9ucyB1c2VkIHRocm91Z2hvdXQgdGhlIGxpYnJhcnkuXG4gKi9cblxudmFyIFV0aWxzID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVXRpbHMoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFV0aWxzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhVdGlscywgbnVsbCwgW3tcbiAgICBrZXk6IFwidmVyc2lvblwiLFxuICAgIHZhbHVlOlxuICAgIC8qKlxuICAgICAqIEdldHMgTWlkaVdyaXRlckpTIHZlcnNpb24gbnVtYmVyLlxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiB2ZXJzaW9uKCkge1xuICAgICAgcmV0dXJuIENvbnN0YW50cy5WRVJTSU9OO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IGEgc3RyaW5nIHRvIGFuIGFycmF5IG9mIGJ5dGVzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuICAgICAqIEByZXR1cm4ge2FycmF5fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3RyaW5nVG9CeXRlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdHJpbmdUb0J5dGVzKHN0cmluZykge1xuICAgICAgcmV0dXJuIHN0cmluZy5zcGxpdCgnJykubWFwKGZ1bmN0aW9uIChfY2hhcikge1xuICAgICAgICByZXR1cm4gX2NoYXIuY2hhckNvZGVBdCgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiBhcmd1bWVudCBpcyBhIHZhbGlkIG51bWJlci5cbiAgICAgKiBAcGFyYW0geyp9IG4gLSBWYWx1ZSB0byBjaGVja1xuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpc051bWVyaWNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNOdW1lcmljKG4pIHtcbiAgICAgIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdChuKSkgJiYgaXNGaW5pdGUobik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNvcnJlY3QgTUlESSBudW1iZXIgZm9yIHRoZSBzcGVjaWZpZWQgcGl0Y2guXG4gICAgICogVXNlcyBUb25hbCBNaWRpIC0gaHR0cHM6Ly9naXRodWIuY29tL2RhbmlnYi90b25hbC90cmVlL21hc3Rlci9wYWNrYWdlcy9taWRpXG4gICAgICogQHBhcmFtIHsoc3RyaW5nfG51bWJlcil9IHBpdGNoIC0gJ0MjNCcgb3IgbWlkaSBub3RlIGNvZGVcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRQaXRjaFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQaXRjaChwaXRjaCkge1xuICAgICAgcmV0dXJuIHRvbmFsTWlkaS50b01pZGkocGl0Y2gpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUcmFuc2xhdGVzIG51bWJlciBvZiB0aWNrcyB0byBNSURJIHRpbWVzdGFtcCBmb3JtYXQsIHJldHVybmluZyBhbiBhcnJheSBvZlxuICAgICAqIGhleCBzdHJpbmdzIHdpdGggdGhlIHRpbWUgdmFsdWVzLiBNaWRpIGhhcyBhIHZlcnkgcGFydGljdWxhciB0aW1lIHRvIGV4cHJlc3MgdGltZSxcbiAgICAgKiB0YWtlIGEgZ29vZCBsb29rIGF0IHRoZSBzcGVjIGJlZm9yZSBldmVyIHRvdWNoaW5nIHRoaXMgZnVuY3Rpb24uXG4gICAgICogVGhhbmtzIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9zZXJnaS9qc21pZGlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aWNrcyAtIE51bWJlciBvZiB0aWNrcyB0byBiZSB0cmFuc2xhdGVkXG4gICAgICogQHJldHVybiB7YXJyYXl9IC0gQnl0ZXMgdGhhdCBmb3JtIHRoZSBNSURJIHRpbWUgdmFsdWVcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm51bWJlclRvVmFyaWFibGVMZW5ndGhcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0aWNrcykge1xuICAgICAgdGlja3MgPSBNYXRoLnJvdW5kKHRpY2tzKTtcbiAgICAgIHZhciBidWZmZXIgPSB0aWNrcyAmIDB4N0Y7XG5cbiAgICAgIHdoaWxlICh0aWNrcyA9IHRpY2tzID4+IDcpIHtcbiAgICAgICAgYnVmZmVyIDw8PSA4O1xuICAgICAgICBidWZmZXIgfD0gdGlja3MgJiAweDdGIHwgMHg4MDtcbiAgICAgIH1cblxuICAgICAgdmFyIGJMaXN0ID0gW107XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGJMaXN0LnB1c2goYnVmZmVyICYgMHhmZik7XG4gICAgICAgIGlmIChidWZmZXIgJiAweDgwKSBidWZmZXIgPj49IDg7ZWxzZSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGJMaXN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb3VudHMgbnVtYmVyIG9mIGJ5dGVzIGluIHN0cmluZ1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzXG4gICAgICogQHJldHVybiB7YXJyYXl9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzdHJpbmdCeXRlQ291bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RyaW5nQnl0ZUNvdW50KHMpIHtcbiAgICAgIHJldHVybiBlbmNvZGVVUkkocykuc3BsaXQoLyUuLnwuLykubGVuZ3RoIC0gMTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IGFuIGludCBmcm9tIGFuIGFycmF5IG9mIGJ5dGVzLlxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGJ5dGVzXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibnVtYmVyRnJvbUJ5dGVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG51bWJlckZyb21CeXRlcyhieXRlcykge1xuICAgICAgdmFyIGhleCA9ICcnO1xuICAgICAgdmFyIHN0cmluZ1Jlc3VsdDtcbiAgICAgIGJ5dGVzLmZvckVhY2goZnVuY3Rpb24gKF9ieXRlKSB7XG4gICAgICAgIHN0cmluZ1Jlc3VsdCA9IF9ieXRlLnRvU3RyaW5nKDE2KTsgLy8gZW5zdXJlIHN0cmluZyBpcyAyIGNoYXJzXG5cbiAgICAgICAgaWYgKHN0cmluZ1Jlc3VsdC5sZW5ndGggPT0gMSkgc3RyaW5nUmVzdWx0ID0gXCIwXCIgKyBzdHJpbmdSZXN1bHQ7XG4gICAgICAgIGhleCArPSBzdHJpbmdSZXN1bHQ7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBwYXJzZUludChoZXgsIDE2KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGFrZXMgYSBudW1iZXIgYW5kIHNwbGl0cyBpdCB1cCBpbnRvIGFuIGFycmF5IG9mIGJ5dGVzLiAgQ2FuIGJlIHBhZGRlZCBieSBwYXNzaW5nIGEgbnVtYmVyIHRvIGJ5dGVzTmVlZGVkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG51bWJlclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBieXRlc05lZWRlZFxuICAgICAqIEByZXR1cm4ge2FycmF5fSAtIEFycmF5IG9mIGJ5dGVzXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJudW1iZXJUb0J5dGVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG51bWJlclRvQnl0ZXMobnVtYmVyLCBieXRlc05lZWRlZCkge1xuICAgICAgYnl0ZXNOZWVkZWQgPSBieXRlc05lZWRlZCB8fCAxO1xuICAgICAgdmFyIGhleFN0cmluZyA9IG51bWJlci50b1N0cmluZygxNik7XG5cbiAgICAgIGlmIChoZXhTdHJpbmcubGVuZ3RoICYgMSkge1xuICAgICAgICAvLyBNYWtlIHN1cmUgaGV4IHN0cmluZyBpcyBldmVuIG51bWJlciBvZiBjaGFyc1xuICAgICAgICBoZXhTdHJpbmcgPSAnMCcgKyBoZXhTdHJpbmc7XG4gICAgICB9IC8vIFNwbGl0IGhleCBzdHJpbmcgaW50byBhbiBhcnJheSBvZiB0d28gY2hhciBlbGVtZW50c1xuXG5cbiAgICAgIHZhciBoZXhBcnJheSA9IGhleFN0cmluZy5tYXRjaCgvLnsyfS9nKTsgLy8gTm93IHBhcnNlIHRoZW0gb3V0IGFzIGludGVnZXJzXG5cbiAgICAgIGhleEFycmF5ID0gaGV4QXJyYXkubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludChpdGVtLCAxNik7XG4gICAgICB9KTsgLy8gUHJlcGVuZCBlbXB0eSBieXRlcyBpZiB3ZSBkb24ndCBoYXZlIGVub3VnaFxuXG4gICAgICBpZiAoaGV4QXJyYXkubGVuZ3RoIDwgYnl0ZXNOZWVkZWQpIHtcbiAgICAgICAgd2hpbGUgKGJ5dGVzTmVlZGVkIC0gaGV4QXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGhleEFycmF5LnVuc2hpZnQoMCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGhleEFycmF5O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyB2YWx1ZSB0byBhcnJheSBpZiBuZWVkZWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAgICogQHJldHVybiB7YXJyYXl9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ0b0FycmF5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvQXJyYXkodmFsdWUpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgICAgcmV0dXJuIFt2YWx1ZV07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIHZlbG9jaXR5IHRvIHZhbHVlIDAtMTI3XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZlbG9jaXR5IC0gVmVsb2NpdHkgdmFsdWUgMS0xMDBcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjb252ZXJ0VmVsb2NpdHlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29udmVydFZlbG9jaXR5KHZlbG9jaXR5KSB7XG4gICAgICAvLyBNYXggcGFzc2VkIHZhbHVlIGxpbWl0ZWQgdG8gMTAwXG4gICAgICB2ZWxvY2l0eSA9IHZlbG9jaXR5ID4gMTAwID8gMTAwIDogdmVsb2NpdHk7XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZCh2ZWxvY2l0eSAvIDEwMCAqIDEyNyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHRvdGFsIG51bWJlciBvZiB0aWNrcyBvZiBhIHNwZWNpZmllZCBkdXJhdGlvbi5cbiAgICAgKiBOb3RlOiB0eXBlPT0nbm90ZScgZGVmYXVsdHMgdG8gcXVhcnRlciBub3RlLCB0eXBlPT09J3Jlc3QnIGRlZmF1bHRzIHRvIDBcbiAgICAgKiBAcGFyYW0geyhzdHJpbmd8YXJyYXkpfSBkdXJhdGlvblxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFRpY2tEdXJhdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUaWNrRHVyYXRpb24oZHVyYXRpb24pIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGR1cmF0aW9uKSkge1xuICAgICAgICAvLyBSZWN1cnNpdmVseSBleGVjdXRlIHRoaXMgbWV0aG9kIGZvciBlYWNoIGl0ZW0gaW4gdGhlIGFycmF5IGFuZCByZXR1cm4gdGhlIHN1bSBvZiB0aWNrIGR1cmF0aW9ucy5cbiAgICAgICAgcmV0dXJuIGR1cmF0aW9uLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gVXRpbHMuZ2V0VGlja0R1cmF0aW9uKHZhbHVlKTtcbiAgICAgICAgfSkucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgcmV0dXJuIGEgKyBiO1xuICAgICAgICB9LCAwKTtcbiAgICAgIH1cblxuICAgICAgZHVyYXRpb24gPSBkdXJhdGlvbi50b1N0cmluZygpO1xuXG4gICAgICBpZiAoZHVyYXRpb24udG9Mb3dlckNhc2UoKS5jaGFyQXQoMCkgPT09ICd0Jykge1xuICAgICAgICAvLyBJZiBkdXJhdGlvbiBzdGFydHMgd2l0aCAndCcgdGhlbiB0aGUgbnVtYmVyIHRoYXQgZm9sbG93cyBpcyBhbiBleHBsaWNpdCB0aWNrIGNvdW50XG4gICAgICAgIHJldHVybiBwYXJzZUludChkdXJhdGlvbi5zdWJzdHJpbmcoMSkpO1xuICAgICAgfSAvLyBOZWVkIHRvIGFwcGx5IGR1cmF0aW9uIGhlcmUuICBRdWFydGVyIG5vdGUgPT0gQ29uc3RhbnRzLkhFQURFUl9DSFVOS19ESVZJU0lPTlxuXG5cbiAgICAgIHZhciBxdWFydGVyVGlja3MgPSBVdGlscy5udW1iZXJGcm9tQnl0ZXMoQ29uc3RhbnRzLkhFQURFUl9DSFVOS19ESVZJU0lPTik7XG4gICAgICB2YXIgdGlja0R1cmF0aW9uID0gcXVhcnRlclRpY2tzICogVXRpbHMuZ2V0RHVyYXRpb25NdWx0aXBsaWVyKGR1cmF0aW9uKTtcbiAgICAgIHJldHVybiBVdGlscy5nZXRSb3VuZGVkSWZDbG9zZSh0aWNrRHVyYXRpb24pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEdWUgdG8gcm91bmRpbmcgZXJyb3JzIGluIEphdmFTY3JpcHQgZW5naW5lcyxcbiAgICAgKiBpdCdzIHNhZmUgdG8gcm91bmQgd2hlbiB3ZSdyZSB2ZXJ5IGNsb3NlIHRvIHRoZSBhY3R1YWwgdGljayBudW1iZXJcbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGlja1xuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFJvdW5kZWRJZkNsb3NlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJvdW5kZWRJZkNsb3NlKHRpY2spIHtcbiAgICAgIHZhciByb3VuZGVkVGljayA9IE1hdGgucm91bmQodGljayk7XG4gICAgICByZXR1cm4gTWF0aC5hYnMocm91bmRlZFRpY2sgLSB0aWNrKSA8IDAuMDAwMDAxID8gcm91bmRlZFRpY2sgOiB0aWNrO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEdWUgdG8gbG93IHByZWNpc2lvbiBvZiBNSURJLFxuICAgICAqIHdlIG5lZWQgdG8ga2VlcCB0cmFjayBvZiByb3VuZGluZyBlcnJvcnMgaW4gZGVsdGFzLlxuICAgICAqIFRoaXMgZnVuY3Rpb24gd2lsbCBjYWxjdWxhdGUgdGhlIHJvdW5kaW5nIGVycm9yIGZvciBhIGdpdmVuIGR1cmF0aW9uLlxuICAgICAqXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aWNrXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0UHJlY2lzaW9uTG9zc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQcmVjaXNpb25Mb3NzKHRpY2spIHtcbiAgICAgIHZhciByb3VuZGVkVGljayA9IE1hdGgucm91bmQodGljayk7XG4gICAgICByZXR1cm4gcm91bmRlZFRpY2sgLSB0aWNrO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHdoYXQgdG8gbXVsdGlwbGUgdGlja3MvcXVhcnRlciBub3RlIGJ5IHRvIGdldCB0aGUgc3BlY2lmaWVkIGR1cmF0aW9uLlxuICAgICAqIE5vdGU6IHR5cGU9PSdub3RlJyBkZWZhdWx0cyB0byBxdWFydGVyIG5vdGUsIHR5cGU9PT0ncmVzdCcgZGVmYXVsdHMgdG8gMFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkdXJhdGlvblxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldER1cmF0aW9uTXVsdGlwbGllclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREdXJhdGlvbk11bHRpcGxpZXIoZHVyYXRpb24pIHtcbiAgICAgIC8vIE5lZWQgdG8gYXBwbHkgZHVyYXRpb24gaGVyZS5cbiAgICAgIC8vIFF1YXJ0ZXIgbm90ZSA9PSBDb25zdGFudHMuSEVBREVSX0NIVU5LX0RJVklTSU9OIHRpY2tzLlxuICAgICAgaWYgKGR1cmF0aW9uID09PSAnMCcpIHJldHVybiAwO1xuICAgICAgdmFyIG1hdGNoID0gZHVyYXRpb24ubWF0Y2goIC8qI19fUFVSRV9fKi9fd3JhcFJlZ0V4cCgvXihkKyk/KFswLTldKykoPzp0KFswLTldKikpPy8sIHtcbiAgICAgICAgZG90dGVkOiAxLFxuICAgICAgICBiYXNlOiAyLFxuICAgICAgICB0dXBsZXQ6IDNcbiAgICAgIH0pKTtcblxuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHZhciBiYXNlID0gTnVtYmVyKG1hdGNoLmdyb3Vwcy5iYXNlKTsgLy8gMSBvciBhbnkgcG93ZXIgb2YgdHdvOlxuXG4gICAgICAgIHZhciBpc1ZhbGlkQmFzZSA9IGJhc2UgPT09IDEgfHwgKGJhc2UgJiBiYXNlIC0gMSkgPT09IDA7XG5cbiAgICAgICAgaWYgKGlzVmFsaWRCYXNlKSB7XG4gICAgICAgICAgLy8gaG93IG11Y2ggZmFzdGVyIG9yIHNsb3dlciBpcyB0aGlzIG5vdGUgY29tcGFyZWQgdG8gYSBxdWFydGVyP1xuICAgICAgICAgIHZhciByYXRpbyA9IGJhc2UgLyA0O1xuICAgICAgICAgIHZhciBkdXJhdGlvbkluUXVhcnRlcnMgPSAxIC8gcmF0aW87XG4gICAgICAgICAgdmFyIF9tYXRjaCRncm91cHMgPSBtYXRjaC5ncm91cHMsXG4gICAgICAgICAgICAgIGRvdHRlZCA9IF9tYXRjaCRncm91cHMuZG90dGVkLFxuICAgICAgICAgICAgICB0dXBsZXQgPSBfbWF0Y2gkZ3JvdXBzLnR1cGxldDtcblxuICAgICAgICAgIGlmIChkb3R0ZWQpIHtcbiAgICAgICAgICAgIHZhciB0aGlzTWFueURvdHMgPSBkb3R0ZWQubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIGRpdmlzb3IgPSBNYXRoLnBvdygyLCB0aGlzTWFueURvdHMpO1xuICAgICAgICAgICAgZHVyYXRpb25JblF1YXJ0ZXJzID0gZHVyYXRpb25JblF1YXJ0ZXJzICsgZHVyYXRpb25JblF1YXJ0ZXJzICogKChkaXZpc29yIC0gMSkgLyBkaXZpc29yKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mIHR1cGxldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHZhciBmaXRJbnRvID0gZHVyYXRpb25JblF1YXJ0ZXJzICogMjsgLy8gZGVmYXVsdCB0byB0cmlwbGV0OlxuXG4gICAgICAgICAgICB2YXIgdGhpc01hbnlOb3RlcyA9IE51bWJlcih0dXBsZXQgfHwgJzMnKTtcbiAgICAgICAgICAgIGR1cmF0aW9uSW5RdWFydGVycyA9IGZpdEludG8gLyB0aGlzTWFueU5vdGVzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBkdXJhdGlvbkluUXVhcnRlcnM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IEVycm9yKGR1cmF0aW9uICsgJyBpcyBub3QgYSB2YWxpZCBkdXJhdGlvbi4nKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVXRpbHM7XG59KCk7XG5cbi8qKlxuICogSG9sZHMgYWxsIGRhdGEgZm9yIGEgXCJub3RlIG9uXCIgTUlESSBldmVudFxuICogQHBhcmFtIHtvYmplY3R9IGZpZWxkcyB7ZGF0YTogW119XG4gKiBAcmV0dXJuIHtOb3RlT25FdmVudH1cbiAqL1xuXG52YXIgTm90ZU9uRXZlbnQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBOb3RlT25FdmVudChmaWVsZHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTm90ZU9uRXZlbnQpO1xuXG4gICAgLy8gU2V0IGRlZmF1bHQgZmllbGRzXG4gICAgZmllbGRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjaGFubmVsOiAxLFxuICAgICAgc3RhcnRUaWNrOiBudWxsLFxuICAgICAgdmVsb2NpdHk6IDUwLFxuICAgICAgd2FpdDogMFxuICAgIH0sIGZpZWxkcyk7XG4gICAgdGhpcy50eXBlID0gJ25vdGUtb24nO1xuICAgIHRoaXMuY2hhbm5lbCA9IGZpZWxkcy5jaGFubmVsO1xuICAgIHRoaXMucGl0Y2ggPSBmaWVsZHMucGl0Y2g7XG4gICAgdGhpcy53YWl0ID0gZmllbGRzLndhaXQ7XG4gICAgdGhpcy52ZWxvY2l0eSA9IGZpZWxkcy52ZWxvY2l0eTtcbiAgICB0aGlzLnN0YXJ0VGljayA9IGZpZWxkcy5zdGFydFRpY2s7XG4gICAgdGhpcy5taWRpTnVtYmVyID0gVXRpbHMuZ2V0UGl0Y2godGhpcy5waXRjaCk7XG4gICAgdGhpcy50aWNrID0gbnVsbDtcbiAgICB0aGlzLmRlbHRhID0gbnVsbDtcbiAgICB0aGlzLmRhdGEgPSBmaWVsZHMuZGF0YTtcbiAgfVxuICAvKipcbiAgICogQnVpbGRzIGludCBhcnJheSBmb3IgdGhpcyBldmVudC5cbiAgICogQHBhcmFtIHtUcmFja30gdHJhY2sgLSBwYXJlbnQgdHJhY2tcbiAgICogQHJldHVybiB7Tm90ZU9uRXZlbnR9XG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKE5vdGVPbkV2ZW50LCBbe1xuICAgIGtleTogXCJidWlsZERhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYnVpbGREYXRhKHRyYWNrLCBwcmVjaXNpb25EZWx0YSkge1xuICAgICAgdGhpcy5kYXRhID0gW107IC8vIEV4cGxpY2l0bHkgZGVmaW5lZCBzdGFydFRpY2sgZXZlbnRcblxuICAgICAgaWYgKHRoaXMuc3RhcnRUaWNrKSB7XG4gICAgICAgIHRoaXMudGljayA9IFV0aWxzLmdldFJvdW5kZWRJZkNsb3NlKHRoaXMuc3RhcnRUaWNrKTsgLy8gSWYgdGhpcyBpcyB0aGUgZmlyc3QgZXZlbnQgaW4gdGhlIHRyYWNrIHRoZW4gdXNlIGV2ZW50J3Mgc3RhcnRpbmcgdGljayBhcyBkZWx0YS5cblxuICAgICAgICBpZiAodHJhY2sudGlja1BvaW50ZXIgPT0gMCkge1xuICAgICAgICAgIHRoaXMuZGVsdGEgPSB0aGlzLnRpY2s7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGVsdGEgPSBVdGlscy5nZXRUaWNrRHVyYXRpb24odGhpcy53YWl0KTtcbiAgICAgICAgdGhpcy50aWNrID0gVXRpbHMuZ2V0Um91bmRlZElmQ2xvc2UodHJhY2sudGlja1BvaW50ZXIgKyB0aGlzLmRlbHRhKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kZWx0YVdpdGhQcmVjaXNpb25Db3JyZWN0aW9uID0gVXRpbHMuZ2V0Um91bmRlZElmQ2xvc2UodGhpcy5kZWx0YSAtIHByZWNpc2lvbkRlbHRhKTtcbiAgICAgIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgodGhpcy5kZWx0YVdpdGhQcmVjaXNpb25Db3JyZWN0aW9uKS5jb25jYXQodGhpcy5nZXRTdGF0dXNCeXRlKCksIHRoaXMubWlkaU51bWJlciwgVXRpbHMuY29udmVydFZlbG9jaXR5KHRoaXMudmVsb2NpdHkpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBub3RlIG9uIHN0YXR1cyBjb2RlIGJhc2VkIG9uIHRoZSBzZWxlY3RlZCBjaGFubmVsLiAweDl7MC1GfVxuICAgICAqIE5vdGUgb24gYXQgY2hhbm5lbCAwIGlzIDB4OTAgKDE0NClcbiAgICAgKiAwID0gQ2ggMVxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFN0YXR1c0J5dGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U3RhdHVzQnl0ZSgpIHtcbiAgICAgIHJldHVybiAxNDQgKyB0aGlzLmNoYW5uZWwgLSAxO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBOb3RlT25FdmVudDtcbn0oKTtcblxuLyoqXG4gKiBIb2xkcyBhbGwgZGF0YSBmb3IgYSBcIm5vdGUgb2ZmXCIgTUlESSBldmVudFxuICogQHBhcmFtIHtvYmplY3R9IGZpZWxkcyB7ZGF0YTogW119XG4gKiBAcmV0dXJuIHtOb3RlT2ZmRXZlbnR9XG4gKi9cblxudmFyIE5vdGVPZmZFdmVudCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE5vdGVPZmZFdmVudChmaWVsZHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTm90ZU9mZkV2ZW50KTtcblxuICAgIC8vIFNldCBkZWZhdWx0IGZpZWxkc1xuICAgIGZpZWxkcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2hhbm5lbDogMSxcbiAgICAgIHZlbG9jaXR5OiA1MCxcbiAgICAgIHRpY2s6IG51bGxcbiAgICB9LCBmaWVsZHMpO1xuICAgIHRoaXMudHlwZSA9ICdub3RlLW9mZic7XG4gICAgdGhpcy5jaGFubmVsID0gZmllbGRzLmNoYW5uZWw7XG4gICAgdGhpcy5waXRjaCA9IGZpZWxkcy5waXRjaDtcbiAgICB0aGlzLmR1cmF0aW9uID0gZmllbGRzLmR1cmF0aW9uO1xuICAgIHRoaXMudmVsb2NpdHkgPSBmaWVsZHMudmVsb2NpdHk7XG4gICAgdGhpcy5taWRpTnVtYmVyID0gVXRpbHMuZ2V0UGl0Y2godGhpcy5waXRjaCk7XG4gICAgdGhpcy50aWNrID0gZmllbGRzLnRpY2s7XG4gICAgdGhpcy5kZWx0YSA9IFV0aWxzLmdldFRpY2tEdXJhdGlvbih0aGlzLmR1cmF0aW9uKTtcbiAgICB0aGlzLmRhdGEgPSBmaWVsZHMuZGF0YTtcbiAgfVxuICAvKipcbiAgICogQnVpbGRzIGludCBhcnJheSBmb3IgdGhpcyBldmVudC5cbiAgICogQHBhcmFtIHtUcmFja30gdHJhY2sgLSBwYXJlbnQgdHJhY2tcbiAgICogQHJldHVybiB7Tm90ZU9mZkV2ZW50fVxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhOb3RlT2ZmRXZlbnQsIFt7XG4gICAga2V5OiBcImJ1aWxkRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBidWlsZERhdGEodHJhY2ssIHByZWNpc2lvbkRlbHRhKSB7XG4gICAgICBpZiAodGhpcy50aWNrID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMudGljayA9IFV0aWxzLmdldFJvdW5kZWRJZkNsb3NlKHRoaXMuZGVsdGEgKyB0cmFjay50aWNrUG9pbnRlcik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGVsdGFXaXRoUHJlY2lzaW9uQ29ycmVjdGlvbiA9IFV0aWxzLmdldFJvdW5kZWRJZkNsb3NlKHRoaXMuZGVsdGEgLSBwcmVjaXNpb25EZWx0YSk7XG4gICAgICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRoaXMuZGVsdGFXaXRoUHJlY2lzaW9uQ29ycmVjdGlvbikuY29uY2F0KHRoaXMuZ2V0U3RhdHVzQnl0ZSgpLCB0aGlzLm1pZGlOdW1iZXIsIFV0aWxzLmNvbnZlcnRWZWxvY2l0eSh0aGlzLnZlbG9jaXR5KSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgbm90ZSBvZmYgc3RhdHVzIGNvZGUgYmFzZWQgb24gdGhlIHNlbGVjdGVkIGNoYW5uZWwuIDB4OHswLUZ9XG4gICAgICogTm90ZSBvZmYgYXQgY2hhbm5lbCAwIGlzIDB4ODAgKDEyOClcbiAgICAgKiAwID0gQ2ggMVxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFN0YXR1c0J5dGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U3RhdHVzQnl0ZSgpIHtcbiAgICAgIHJldHVybiAxMjggKyB0aGlzLmNoYW5uZWwgLSAxO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBOb3RlT2ZmRXZlbnQ7XG59KCk7XG5cbi8qKlxuICogV3JhcHBlciBmb3Igbm90ZU9uRXZlbnQvbm90ZU9mZkV2ZW50IG9iamVjdHMgdGhhdCBidWlsZHMgYm90aCBldmVudHMuXG4gKiBAcGFyYW0ge29iamVjdH0gZmllbGRzIC0ge3BpdGNoOiAnW0M0XScsIGR1cmF0aW9uOiAnNCcsIHdhaXQ6ICc0JywgdmVsb2NpdHk6IDEtMTAwfVxuICogQHJldHVybiB7Tm90ZUV2ZW50fVxuICovXG5cbnZhciBOb3RlRXZlbnQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBOb3RlRXZlbnQoZmllbGRzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5vdGVFdmVudCk7XG5cbiAgICAvLyBTZXQgZGVmYXVsdCBmaWVsZHNcbiAgICBmaWVsZHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNoYW5uZWw6IDEsXG4gICAgICByZXBlYXQ6IDEsXG4gICAgICBzZXF1ZW50aWFsOiBmYWxzZSxcbiAgICAgIHN0YXJ0VGljazogbnVsbCxcbiAgICAgIHZlbG9jaXR5OiA1MCxcbiAgICAgIHdhaXQ6IDBcbiAgICB9LCBmaWVsZHMpO1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIHRoaXMudHlwZSA9ICdub3RlJztcbiAgICB0aGlzLnBpdGNoID0gVXRpbHMudG9BcnJheShmaWVsZHMucGl0Y2gpO1xuICAgIHRoaXMuY2hhbm5lbCA9IGZpZWxkcy5jaGFubmVsO1xuICAgIHRoaXMuZHVyYXRpb24gPSBmaWVsZHMuZHVyYXRpb247XG4gICAgdGhpcy5ncmFjZSA9IGZpZWxkcy5ncmFjZTtcbiAgICB0aGlzLnJlcGVhdCA9IGZpZWxkcy5yZXBlYXQ7XG4gICAgdGhpcy5zZXF1ZW50aWFsID0gZmllbGRzLnNlcXVlbnRpYWw7XG4gICAgdGhpcy5zdGFydFRpY2sgPSBmaWVsZHMuc3RhcnRUaWNrO1xuICAgIHRoaXMudmVsb2NpdHkgPSBmaWVsZHMudmVsb2NpdHk7XG4gICAgdGhpcy53YWl0ID0gZmllbGRzLndhaXQ7XG4gICAgdGhpcy50aWNrRHVyYXRpb24gPSBVdGlscy5nZXRUaWNrRHVyYXRpb24odGhpcy5kdXJhdGlvbik7XG4gICAgdGhpcy5yZXN0RHVyYXRpb24gPSBVdGlscy5nZXRUaWNrRHVyYXRpb24odGhpcy53YWl0KTtcbiAgICB0aGlzLmV2ZW50cyA9IFtdOyAvLyBIb2xkIGFjdHVhbCBOb3RlT24vTm90ZU9mZiBldmVudHNcbiAgfVxuICAvKipcbiAgICogQnVpbGRzIGludCBhcnJheSBmb3IgdGhpcyBldmVudC5cbiAgICogQHJldHVybiB7Tm90ZUV2ZW50fVxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhOb3RlRXZlbnQsIFt7XG4gICAga2V5OiBcImJ1aWxkRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBidWlsZERhdGEoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAvLyBSZXNldCBkYXRhIGFycmF5XG4gICAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICAgIHRoaXMudGlja0R1cmF0aW9uO1xuICAgICAgdGhpcy5yZXN0RHVyYXRpb247IC8vIEFwcGx5IGdyYWNlIG5vdGUocykgYW5kIHN1YnRyYWN0IHRpY2tzIChjdXJyZW50bHkgMSB0aWNrIHBlciBncmFjZSBub3RlKSBmcm9tIHRpY2tEdXJhdGlvbiBzbyBuZXQgdmFsdWUgaXMgdGhlIHNhbWVcblxuICAgICAgaWYgKHRoaXMuZ3JhY2UpIHtcbiAgICAgICAgdmFyIGdyYWNlRHVyYXRpb24gPSAxO1xuICAgICAgICB0aGlzLmdyYWNlID0gVXRpbHMudG9BcnJheSh0aGlzLmdyYWNlKTtcbiAgICAgICAgdGhpcy5ncmFjZS5mb3JFYWNoKGZ1bmN0aW9uIChwaXRjaCkge1xuICAgICAgICAgIHZhciBub3RlRXZlbnQgPSBuZXcgTm90ZUV2ZW50KHtcbiAgICAgICAgICAgIHBpdGNoOiBfdGhpcy5ncmFjZSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAnVCcgKyBncmFjZUR1cmF0aW9uXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgX3RoaXMuZGF0YSA9IF90aGlzLmRhdGEuY29uY2F0KG5vdGVFdmVudC5kYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICB9IC8vIGZpZWxkcy5waXRjaCBjb3VsZCBiZSBhbiBhcnJheSBvZiBwaXRjaGVzLlxuICAgICAgLy8gSWYgdGhpcy5zZXF1ZW50aWFsID09PSB0cnVlIHRoZW4gaXQncyBhIHNlcXVlbnRpYWwgc3RyaW5nIG9mIG5vdGVzIHRoYXQgcmVxdWlyZXMgc2VwYXJhdGUgTm90ZU9uRXZlbnRzLlxuXG4gICAgICBpZiAoIXRoaXMuc2VxdWVudGlhbCkge1xuICAgICAgICAvLyBIYW5kbGUgcmVwZWF0XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5yZXBlYXQ7IGorKykge1xuICAgICAgICAgIC8vIE5vdGUgb25cbiAgICAgICAgICB0aGlzLnBpdGNoLmZvckVhY2goZnVuY3Rpb24gKHAsIGkpIHtcbiAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgdmFyIG5vdGVPbk5ldyA9IG5ldyBOb3RlT25FdmVudCh7XG4gICAgICAgICAgICAgICAgY2hhbm5lbDogX3RoaXMuY2hhbm5lbCxcbiAgICAgICAgICAgICAgICB3YWl0OiBfdGhpcy53YWl0LFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5OiBfdGhpcy52ZWxvY2l0eSxcbiAgICAgICAgICAgICAgICBwaXRjaDogcCxcbiAgICAgICAgICAgICAgICBzdGFydFRpY2s6IF90aGlzLnN0YXJ0VGlja1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFJ1bm5pbmcgc3RhdHVzIChjYW4gb21taXQgdGhlIG5vdGUgb24gc3RhdHVzKVxuICAgICAgICAgICAgICAvL25vdGVPbiA9IG5ldyBOb3RlT25FdmVudCh7ZGF0YTogWzAsIFV0aWxzLmdldFBpdGNoKHApLCBVdGlscy5jb252ZXJ0VmVsb2NpdHkodGhpcy52ZWxvY2l0eSldfSk7XG4gICAgICAgICAgICAgIHZhciBub3RlT25OZXcgPSBuZXcgTm90ZU9uRXZlbnQoe1xuICAgICAgICAgICAgICAgIGNoYW5uZWw6IF90aGlzLmNoYW5uZWwsXG4gICAgICAgICAgICAgICAgd2FpdDogMCxcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eTogX3RoaXMudmVsb2NpdHksXG4gICAgICAgICAgICAgICAgcGl0Y2g6IHAsXG4gICAgICAgICAgICAgICAgc3RhcnRUaWNrOiBfdGhpcy5zdGFydFRpY2tcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF90aGlzLmV2ZW50cy5wdXNoKG5vdGVPbk5ldyk7XG4gICAgICAgICAgfSk7IC8vIE5vdGUgb2ZmXG5cbiAgICAgICAgICB0aGlzLnBpdGNoLmZvckVhY2goZnVuY3Rpb24gKHAsIGkpIHtcbiAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgLy9ub3RlT2ZmID0gbmV3IE5vdGVPZmZFdmVudCh7ZGF0YTogVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0aWNrRHVyYXRpb24pLmNvbmNhdCh0aGlzLmdldE5vdGVPZmZTdGF0dXMoKSwgVXRpbHMuZ2V0UGl0Y2gocCksIFV0aWxzLmNvbnZlcnRWZWxvY2l0eSh0aGlzLnZlbG9jaXR5KSl9KTtcbiAgICAgICAgICAgICAgdmFyIG5vdGVPZmZOZXcgPSBuZXcgTm90ZU9mZkV2ZW50KHtcbiAgICAgICAgICAgICAgICBjaGFubmVsOiBfdGhpcy5jaGFubmVsLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBfdGhpcy5kdXJhdGlvbixcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eTogX3RoaXMudmVsb2NpdHksXG4gICAgICAgICAgICAgICAgcGl0Y2g6IHAsXG4gICAgICAgICAgICAgICAgdGljazogX3RoaXMuc3RhcnRUaWNrICE9PSBudWxsID8gVXRpbHMuZ2V0VGlja0R1cmF0aW9uKF90aGlzLmR1cmF0aW9uKSArIF90aGlzLnN0YXJ0VGljayA6IG51bGxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBSdW5uaW5nIHN0YXR1cyAoY2FuIG9tbWl0IHRoZSBub3RlIG9mZiBzdGF0dXMpXG4gICAgICAgICAgICAgIC8vbm90ZU9mZiA9IG5ldyBOb3RlT2ZmRXZlbnQoe2RhdGE6IFswLCBVdGlscy5nZXRQaXRjaChwKSwgVXRpbHMuY29udmVydFZlbG9jaXR5KHRoaXMudmVsb2NpdHkpXX0pO1xuICAgICAgICAgICAgICB2YXIgbm90ZU9mZk5ldyA9IG5ldyBOb3RlT2ZmRXZlbnQoe1xuICAgICAgICAgICAgICAgIGNoYW5uZWw6IF90aGlzLmNoYW5uZWwsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDAsXG4gICAgICAgICAgICAgICAgdmVsb2NpdHk6IF90aGlzLnZlbG9jaXR5LFxuICAgICAgICAgICAgICAgIHBpdGNoOiBwLFxuICAgICAgICAgICAgICAgIHRpY2s6IF90aGlzLnN0YXJ0VGljayAhPT0gbnVsbCA/IFV0aWxzLmdldFRpY2tEdXJhdGlvbihfdGhpcy5kdXJhdGlvbikgKyBfdGhpcy5zdGFydFRpY2sgOiBudWxsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfdGhpcy5ldmVudHMucHVzaChub3RlT2ZmTmV3KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSGFuZGxlIHJlcGVhdFxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMucmVwZWF0OyBqKyspIHtcbiAgICAgICAgICB0aGlzLnBpdGNoLmZvckVhY2goZnVuY3Rpb24gKHAsIGkpIHtcblxuICAgICAgICAgICAgdmFyIG5vdGVPbk5ldyA9IG5ldyBOb3RlT25FdmVudCh7XG4gICAgICAgICAgICAgIGNoYW5uZWw6IF90aGlzLmNoYW5uZWwsXG4gICAgICAgICAgICAgIHdhaXQ6IGkgPiAwID8gMCA6IF90aGlzLndhaXQsXG4gICAgICAgICAgICAgIC8vIHdhaXQgb25seSBhcHBsaWVzIHRvIGZpcnN0IG5vdGUgaW4gcmVwZXRpdGlvblxuICAgICAgICAgICAgICB2ZWxvY2l0eTogX3RoaXMudmVsb2NpdHksXG4gICAgICAgICAgICAgIHBpdGNoOiBwLFxuICAgICAgICAgICAgICBzdGFydFRpY2s6IF90aGlzLnN0YXJ0VGlja1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgbm90ZU9mZk5ldyA9IG5ldyBOb3RlT2ZmRXZlbnQoe1xuICAgICAgICAgICAgICBjaGFubmVsOiBfdGhpcy5jaGFubmVsLFxuICAgICAgICAgICAgICBkdXJhdGlvbjogX3RoaXMuZHVyYXRpb24sXG4gICAgICAgICAgICAgIHZlbG9jaXR5OiBfdGhpcy52ZWxvY2l0eSxcbiAgICAgICAgICAgICAgcGl0Y2g6IHBcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBfdGhpcy5ldmVudHMucHVzaChub3RlT25OZXcsIG5vdGVPZmZOZXcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBOb3RlRXZlbnQ7XG59KCk7XG5cbi8qKlxuICogSG9sZHMgYWxsIGRhdGEgZm9yIGEgXCJQaXRjaCBCZW5kXCIgTUlESSBldmVudFxuICogWyAtMS4wLCAwLCAxLjAgXSAtPiAgWyAwLCA4MTkyLCAxNjM4M11cbiAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZHMgeyBiZW5kIDogZmxvYXQsIGNoYW5uZWwgOiBpbnQgfVxuICogQHJldHVybiB7UGl0Y2hCZW5kRXZlbnR9XG4gKi9cblxudmFyIHNjYWxlMTRiaXRzID0gZnVuY3Rpb24gc2NhbGUxNGJpdHMoemVyb09uZSkge1xuICBpZiAoemVyb09uZSA8PSAwKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoMTYzODQgKiAoemVyb09uZSArIDEpIC8gMik7XG4gIH1cblxuICByZXR1cm4gTWF0aC5mbG9vcigxNjM4MyAqICh6ZXJvT25lICsgMSkgLyAyKTtcbn07XG5cbnZhciBQaXRjaEJlbmRFdmVudCA9IGZ1bmN0aW9uIFBpdGNoQmVuZEV2ZW50KGZpZWxkcykge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGl0Y2hCZW5kRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdwaXRjaC1iZW5kJztcbiAgdmFyIGJlbmQxNCA9IHNjYWxlMTRiaXRzKGZpZWxkcy5iZW5kKTtcbiAgdmFyIGNoYW5uZWwgPSBmaWVsZHMuY2hhbm5lbCB8fCAwO1xuICB2YXIgbHNiVmFsdWUgPSBiZW5kMTQgJiAweDdmO1xuICB2YXIgbXNiVmFsdWUgPSBiZW5kMTQgPj4gNyAmIDB4N2Y7XG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5QSVRDSF9CRU5EX1NUQVRVUyB8IGNoYW5uZWwsIGxzYlZhbHVlLCBtc2JWYWx1ZSk7XG59O1xuXG4vKipcbiAqIEhvbGRzIGFsbCBkYXRhIGZvciBhIFwicHJvZ3JhbSBjaGFuZ2VcIiBNSURJIGV2ZW50XG4gKiBAcGFyYW0ge29iamVjdH0gZmllbGRzIHtpbnN0cnVtZW50OiBpbnRlZ2VyfVxuICogQHJldHVybiB7UHJvZ3JhbUNoYW5nZUV2ZW50fVxuICovXG5cbnZhciBQcm9ncmFtQ2hhbmdlRXZlbnQgPSBmdW5jdGlvbiBQcm9ncmFtQ2hhbmdlRXZlbnQoZmllbGRzKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQcm9ncmFtQ2hhbmdlRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdwcm9ncmFtJzsgLy8gZGVsdGEgdGltZSBkZWZhdWx0cyB0byAwLlxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5QUk9HUkFNX0NIQU5HRV9TVEFUVVMsIGZpZWxkcy5pbnN0cnVtZW50KTtcbn07XG5cbi8qKlxuICogSG9sZHMgYWxsIGRhdGEgZm9yIGEgXCJjb250cm9sbGVyIGNoYW5nZVwiIE1JREkgZXZlbnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZHMge2NvbnRyb2xsZXJOdW1iZXI6IGludGVnZXIsIGNvbnRyb2xsZXJWYWx1ZTogaW50ZWdlcn1cbiAqIEByZXR1cm4ge0NvbnRyb2xsZXJDaGFuZ2VFdmVudH1cbiAqL1xuXG52YXIgQ29udHJvbGxlckNoYW5nZUV2ZW50ID0gZnVuY3Rpb24gQ29udHJvbGxlckNoYW5nZUV2ZW50KGZpZWxkcykge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29udHJvbGxlckNoYW5nZUV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAnY29udHJvbGxlcic7IC8vIGRlbHRhIHRpbWUgZGVmYXVsdHMgdG8gMC5cblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuQ09OVFJPTExFUl9DSEFOR0VfU1RBVFVTLCBmaWVsZHMuY29udHJvbGxlck51bWJlciwgZmllbGRzLmNvbnRyb2xsZXJWYWx1ZSk7XG59O1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIHRlbXBvIG1ldGEgZXZlbnQuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIENvcHlyaWdodCB0ZXh0XG4gKiBAcmV0dXJuIHtDb3B5cmlnaHRFdmVudH1cbiAqL1xuXG52YXIgQ29weXJpZ2h0RXZlbnQgPSBmdW5jdGlvbiBDb3B5cmlnaHRFdmVudCh0ZXh0KSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb3B5cmlnaHRFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ2NvcHlyaWdodCc7XG4gIHZhciB0ZXh0Qnl0ZXMgPSBVdGlscy5zdHJpbmdUb0J5dGVzKHRleHQpOyAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9DT1BZUklHSFRfSUQsIFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgodGV4dEJ5dGVzLmxlbmd0aCksIC8vIFNpemVcbiAgdGV4dEJ5dGVzIC8vIFRleHRcbiAgKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgY3VlIHBvaW50IG1ldGEgZXZlbnQuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIEN1ZSBwb2ludCB0ZXh0XG4gKiBAcmV0dXJuIHtDdWVQb2ludEV2ZW50fVxuICovXG5cbnZhciBDdWVQb2ludEV2ZW50ID0gZnVuY3Rpb24gQ3VlUG9pbnRFdmVudCh0ZXh0KSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDdWVQb2ludEV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAnbWFya2VyJztcbiAgdmFyIHRleHRCeXRlcyA9IFV0aWxzLnN0cmluZ1RvQnl0ZXModGV4dCk7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX0NVRV9QT0lOVCwgVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0ZXh0Qnl0ZXMubGVuZ3RoKSwgLy8gU2l6ZVxuICB0ZXh0Qnl0ZXMgLy8gVGV4dFxuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSBlbmQgdHJhY2sgbWV0YSBldmVudC5cbiAqIEByZXR1cm4ge0VuZFRyYWNrRXZlbnR9XG4gKi9cblxudmFyIEVuZFRyYWNrRXZlbnQgPSBmdW5jdGlvbiBFbmRUcmFja0V2ZW50KCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRW5kVHJhY2tFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ2VuZC10cmFjayc7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX0VORF9PRl9UUkFDS19JRCk7XG59O1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhbiBpbnN0cnVtZW50IG5hbWUgbWV0YSBldmVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBicG0gLSBCZWF0cyBwZXIgbWludXRlXG4gKiBAcmV0dXJuIHtJbnN0cnVtZW50TmFtZUV2ZW50fVxuICovXG5cbnZhciBJbnN0cnVtZW50TmFtZUV2ZW50ID0gZnVuY3Rpb24gSW5zdHJ1bWVudE5hbWVFdmVudCh0ZXh0KSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbnN0cnVtZW50TmFtZUV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAnaW5zdHJ1bWVudC1uYW1lJztcbiAgdmFyIHRleHRCeXRlcyA9IFV0aWxzLnN0cmluZ1RvQnl0ZXModGV4dCk7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX0lOU1RSVU1FTlRfTkFNRV9JRCwgVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0ZXh0Qnl0ZXMubGVuZ3RoKSwgLy8gU2l6ZVxuICB0ZXh0Qnl0ZXMgLy8gSW5zdHJ1bWVudCBuYW1lXG4gICk7XG59O1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIGtleSBzaWduYXR1cmUgbWV0YSBldmVudC5cbiAqIEByZXR1cm4ge0tleVNpZ25hdHVyZUV2ZW50fVxuICovXG5cbnZhciBLZXlTaWduYXR1cmVFdmVudCA9IGZ1bmN0aW9uIEtleVNpZ25hdHVyZUV2ZW50KHNmLCBtaSkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgS2V5U2lnbmF0dXJlRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdrZXktc2lnbmF0dXJlJztcbiAgdmFyIG1vZGUgPSBtaSB8fCAwO1xuICBzZiA9IHNmIHx8IDA7IC8vXHRGdW5jdGlvbiBjYWxsZWQgd2l0aCBzdHJpbmcgbm90YXRpb25cblxuICBpZiAodHlwZW9mIG1pID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBmaWZ0aHMgPSBbWydDYicsICdHYicsICdEYicsICdBYicsICdFYicsICdCYicsICdGJywgJ0MnLCAnRycsICdEJywgJ0EnLCAnRScsICdCJywgJ0YjJywgJ0MjJ10sIFsnYWInLCAnZWInLCAnYmInLCAnZicsICdjJywgJ2cnLCAnZCcsICdhJywgJ2UnLCAnYicsICdmIycsICdjIycsICdnIycsICdkIycsICdhIyddXTtcbiAgICB2YXIgX3NmbGVuID0gc2YubGVuZ3RoO1xuICAgIHZhciBub3RlID0gc2YgfHwgJ0MnO1xuICAgIGlmIChzZlswXSA9PT0gc2ZbMF0udG9Mb3dlckNhc2UoKSkgbW9kZSA9IDE7XG5cbiAgICBpZiAoX3NmbGVuID4gMSkge1xuICAgICAgc3dpdGNoIChzZi5jaGFyQXQoX3NmbGVuIC0gMSkpIHtcbiAgICAgICAgY2FzZSAnbSc6XG4gICAgICAgICAgbW9kZSA9IDE7XG4gICAgICAgICAgbm90ZSA9IHNmLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIG5vdGUgPSBub3RlLmNvbmNhdChzZi5zdWJzdHJpbmcoMSwgX3NmbGVuIC0gMSkpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgIG1vZGUgPSAxO1xuICAgICAgICAgIG5vdGUgPSBzZi5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICBub3RlID0gbm90ZS5jb25jYXQoc2Yuc3Vic3RyaW5nKDEsIF9zZmxlbiAtIDEpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdNJzpcbiAgICAgICAgICBtb2RlID0gMDtcbiAgICAgICAgICBub3RlID0gc2YuY2hhckF0KDApLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgbm90ZSA9IG5vdGUuY29uY2F0KHNmLnN1YnN0cmluZygxLCBfc2ZsZW4gLSAxKSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgbW9kZSA9IDA7XG4gICAgICAgICAgbm90ZSA9IHNmLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgIG5vdGUgPSBub3RlLmNvbmNhdChzZi5zdWJzdHJpbmcoMSwgX3NmbGVuIC0gMSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBmaWZ0aGluZGV4ID0gZmlmdGhzW21vZGVdLmluZGV4T2Yobm90ZSk7XG4gICAgc2YgPSBmaWZ0aGluZGV4ID09PSAtMSA/IDAgOiBmaWZ0aGluZGV4IC0gNztcbiAgfSAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX0tFWV9TSUdOQVRVUkVfSUQsIFsweDAyXSwgLy8gU2l6ZVxuICBVdGlscy5udW1iZXJUb0J5dGVzKHNmLCAxKSwgLy8gTnVtYmVyIG9mIHNoYXJwIG9yIGZsYXRzICggPCAwIGZsYXQ7ID4gMCBzaGFycClcbiAgVXRpbHMubnVtYmVyVG9CeXRlcyhtb2RlLCAxKSAvLyBNb2RlOiAwIG1ham9yLCAxIG1pbm9yXG4gICk7XG59O1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIGx5cmljIG1ldGEgZXZlbnQuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIEx5cmljIHRleHRcbiAqIEByZXR1cm4ge0x5cmljRXZlbnR9XG4gKi9cblxudmFyIEx5cmljRXZlbnQgPSBmdW5jdGlvbiBMeXJpY0V2ZW50KHRleHQpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEx5cmljRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdtYXJrZXInO1xuICB2YXIgdGV4dEJ5dGVzID0gVXRpbHMuc3RyaW5nVG9CeXRlcyh0ZXh0KTsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfTFlSSUNfSUQsIFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgodGV4dEJ5dGVzLmxlbmd0aCksIC8vIFNpemVcbiAgdGV4dEJ5dGVzIC8vIFRleHRcbiAgKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgbWFya2VyIG1ldGEgZXZlbnQuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIE1hcmtlciB0ZXh0XG4gKiBAcmV0dXJuIHtNYXJrZXJFdmVudH1cbiAqL1xuXG52YXIgTWFya2VyRXZlbnQgPSBmdW5jdGlvbiBNYXJrZXJFdmVudCh0ZXh0KSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXJrZXJFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ21hcmtlcic7XG4gIHZhciB0ZXh0Qnl0ZXMgPSBVdGlscy5zdHJpbmdUb0J5dGVzKHRleHQpOyAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9NQVJLRVJfSUQsIFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgodGV4dEJ5dGVzLmxlbmd0aCksIC8vIFNpemVcbiAgdGV4dEJ5dGVzIC8vIFRleHRcbiAgKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgdGVtcG8gbWV0YSBldmVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBicG0gLSBCZWF0cyBwZXIgbWludXRlXG4gKiBAcmV0dXJuIHtUZW1wb0V2ZW50fVxuICovXG5cbnZhciBUZW1wb0V2ZW50ID0gZnVuY3Rpb24gVGVtcG9FdmVudChicG0pIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRlbXBvRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICd0ZW1wbyc7XG4gIHZhciB0ZW1wbyA9IE1hdGgucm91bmQoNjAwMDAwMDAgLyBicG0pOyAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9URU1QT19JRCwgWzB4MDNdLCAvLyBTaXplXG4gIFV0aWxzLm51bWJlclRvQnl0ZXModGVtcG8sIDMpIC8vIFRlbXBvLCAzIGJ5dGVzXG4gICk7XG59O1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIHRlbXBvIG1ldGEgZXZlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gYnBtIC0gQmVhdHMgcGVyIG1pbnV0ZVxuICogQHJldHVybiB7VGV4dEV2ZW50fVxuICovXG5cbnZhciBUZXh0RXZlbnQgPSBmdW5jdGlvbiBUZXh0RXZlbnQodGV4dCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGV4dEV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAndGV4dCc7XG4gIHZhciB0ZXh0Qnl0ZXMgPSBVdGlscy5zdHJpbmdUb0J5dGVzKHRleHQpOyAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9URVhUX0lELCBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRleHRCeXRlcy5sZW5ndGgpLCAvLyBTaXplXG4gIHRleHRCeXRlcyAvLyBUZXh0XG4gICk7XG59O1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIHRpbWUgc2lnbmF0dXJlIG1ldGEgZXZlbnQuXG4gKiBAcmV0dXJuIHtUaW1lU2lnbmF0dXJlRXZlbnR9XG4gKi9cblxudmFyIFRpbWVTaWduYXR1cmVFdmVudCA9IGZ1bmN0aW9uIFRpbWVTaWduYXR1cmVFdmVudChudW1lcmF0b3IsIGRlbm9taW5hdG9yLCBtaWRpY2xvY2tzcGVydGljaywgbm90ZXNwZXJtaWRpY2xvY2spIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRpbWVTaWduYXR1cmVFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ3RpbWUtc2lnbmF0dXJlJzsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfVElNRV9TSUdOQVRVUkVfSUQsIFsweDA0XSwgLy8gU2l6ZVxuICBVdGlscy5udW1iZXJUb0J5dGVzKG51bWVyYXRvciwgMSksIC8vIE51bWVyYXRvciwgMSBieXRlc1xuICBVdGlscy5udW1iZXJUb0J5dGVzKE1hdGgubG9nMihkZW5vbWluYXRvciksIDEpLCAvLyBEZW5vbWluYXRvciBpcyBleHByZXNzZWQgYXMgcG93IG9mIDIsIDEgYnl0ZXNcbiAgVXRpbHMubnVtYmVyVG9CeXRlcyhtaWRpY2xvY2tzcGVydGljayB8fCAyNCwgMSksIC8vIE1JREkgQ2xvY2tzIHBlciB0aWNrLCAxIGJ5dGVzXG4gIFV0aWxzLm51bWJlclRvQnl0ZXMobm90ZXNwZXJtaWRpY2xvY2sgfHwgOCwgMSkgLy8gTnVtYmVyIG9mIDEvMzIgbm90ZXMgcGVyIE1JREkgY2xvY2tzLCAxIGJ5dGVzXG4gICk7XG59O1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIHRlbXBvIG1ldGEgZXZlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gYnBtIC0gQmVhdHMgcGVyIG1pbnV0ZVxuICogQHJldHVybiB7VHJhY2tOYW1lRXZlbnR9XG4gKi9cblxudmFyIFRyYWNrTmFtZUV2ZW50ID0gZnVuY3Rpb24gVHJhY2tOYW1lRXZlbnQodGV4dCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJhY2tOYW1lRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICd0cmFjay1uYW1lJztcbiAgdmFyIHRleHRCeXRlcyA9IFV0aWxzLnN0cmluZ1RvQnl0ZXModGV4dCk7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX1RSQUNLX05BTUVfSUQsIFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgodGV4dEJ5dGVzLmxlbmd0aCksIC8vIFNpemVcbiAgdGV4dEJ5dGVzIC8vIFRleHRcbiAgKTtcbn07XG5cbi8qKlxuICogSG9sZHMgYWxsIGRhdGEgZm9yIGEgdHJhY2suXG4gKiBAcGFyYW0ge29iamVjdH0gZmllbGRzIHt0eXBlOiBudW1iZXIsIGRhdGE6IGFycmF5LCBzaXplOiBhcnJheSwgZXZlbnRzOiBhcnJheX1cbiAqIEByZXR1cm4ge1RyYWNrfVxuICovXG5cbnZhciBUcmFjayA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFRyYWNrKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmFjayk7XG5cbiAgICB0aGlzLnR5cGUgPSBDb25zdGFudHMuVFJBQ0tfQ0hVTktfVFlQRTtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICB0aGlzLnNpemUgPSBbXTtcbiAgICB0aGlzLmV2ZW50cyA9IFtdO1xuICAgIHRoaXMuZXhwbGljaXRUaWNrRXZlbnRzID0gW107IC8vIElmIHRoZXJlIGFyZSBhbnkgZXZlbnRzIHdpdGggYW4gZXhwbGljaXQgdGljayBkZWZpbmVkIHRoZW4gd2Ugd2lsbCBjcmVhdGUgYSBcInN1YlwiIHRyYWNrIGZvciB0aG9zZVxuICAgIC8vIGFuZCBtZXJnZSB0aGVtIGluIGFuZCB0aGUgZW5kLlxuXG4gICAgdGhpcy50aWNrUG9pbnRlciA9IDA7IC8vIEVhY2ggdGltZSBhbiBldmVudCBpcyBhZGRlZCB0aGlzIHdpbGwgaW5jcmVhc2VcbiAgfVxuICAvKipcbiAgICogQWRkcyBhbnkgZXZlbnQgdHlwZSB0byB0aGUgdHJhY2suXG4gICAqIEV2ZW50cyB3aXRob3V0IGEgc3BlY2lmaWMgc3RhcnRUaWNrIHByb3BlcnR5IGFyZSBhc3N1bWVkIHRvIGJlIGFkZGVkIGluIG9yZGVyIG9mIGhvdyB0aGV5IHNob3VsZCBvdXRwdXQuXG4gICAqIEV2ZW50cyB3aXRoIGEgc3BlY2lmaWMgc3RhcnRUaWNrIHByb3BlcnR5IGFyZSBzZXQgYXNpZGUgZm9yIG5vdyB3aWxsIGJlIG1lcmdlZCBpbiBkdXJpbmcgYnVpbGQgcHJvY2Vzcy5cbiAgICogQHBhcmFtIHsoTm90ZUV2ZW50fFByb2dyYW1DaGFuZ2VFdmVudCl9IGV2ZW50cyAtIEV2ZW50IG9iamVjdCBvciBhcnJheSBvZiBFdmVudCBvYmplY3RzLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBtYXBGdW5jdGlvbiAtIENhbGxiYWNrIHdoaWNoIGNhbiBiZSB1c2VkIHRvIGFwcGx5IHNwZWNpZmljIHByb3BlcnRpZXMgdG8gYWxsIGV2ZW50cy5cbiAgICogQHJldHVybiB7VHJhY2t9XG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKFRyYWNrLCBbe1xuICAgIGtleTogXCJhZGRFdmVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRFdmVudChldmVudHMsIG1hcEZ1bmN0aW9uKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBVdGlscy50b0FycmF5KGV2ZW50cykuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQsIGkpIHtcbiAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTm90ZUV2ZW50KSB7XG4gICAgICAgICAgLy8gSGFuZGxlIG1hcCBmdW5jdGlvbiBpZiBwcm92aWRlZFxuICAgICAgICAgIGlmICh0eXBlb2YgbWFwRnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBwcm9wZXJ0aWVzID0gbWFwRnVuY3Rpb24oaSwgZXZlbnQpO1xuXG4gICAgICAgICAgICBpZiAoX3R5cGVvZihwcm9wZXJ0aWVzKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgaiBpbiBwcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChqKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlICdjaGFubmVsJzpcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuY2hhbm5lbCA9IHByb3BlcnRpZXNbal07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlICdkdXJhdGlvbic6XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmR1cmF0aW9uID0gcHJvcGVydGllc1tqXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgJ3NlcXVlbnRpYWwnOlxuICAgICAgICAgICAgICAgICAgICBldmVudC5zZXF1ZW50aWFsID0gcHJvcGVydGllc1tqXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgJ3ZlbG9jaXR5JzpcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQudmVsb2NpdHkgPSBVdGlscy5jb252ZXJ0VmVsb2NpdHkocHJvcGVydGllc1tqXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gLy8gSWYgdGhpcyBub3RlIGV2ZW50IGhhcyBhbiBleHBsaWNpdCBzdGFydFRpY2sgdGhlbiB3ZSBuZWVkIHRvIHNldCBhc2lkZSBmb3Igbm93XG5cblxuICAgICAgICAgIGlmIChldmVudC5zdGFydFRpY2sgIT09IG51bGwpIHtcbiAgICAgICAgICAgIF90aGlzLmV4cGxpY2l0VGlja0V2ZW50cy5wdXNoKGV2ZW50KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gUHVzaCBlYWNoIG9uL29mZiBldmVudCB0byB0cmFjaydzIGV2ZW50IHN0YWNrXG4gICAgICAgICAgICBldmVudC5idWlsZERhdGEoKS5ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuZXZlbnRzLnB1c2goZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMuZXZlbnRzLnB1c2goZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBCdWlsZHMgaW50IGFycmF5IG9mIGFsbCBldmVudHMuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJidWlsZERhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYnVpbGREYXRhKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIC8vIFJlbW92ZSBleGlzdGluZyBlbmQgdHJhY2sgZXZlbnQgYW5kIGFkZCBvbmUuXG4gICAgICAvLyBUaGlzIG1ha2VzIHN1cmUgaXQncyBhdCB0aGUgdmVyeSBlbmQgb2YgdGhlIGV2ZW50IGxpc3QuXG4gICAgICB0aGlzLnJlbW92ZUV2ZW50c0J5VHlwZSgnZW5kLXRyYWNrJykuYWRkRXZlbnQobmV3IEVuZFRyYWNrRXZlbnQoKSk7IC8vIFJlc2V0XG5cbiAgICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICAgdGhpcy5zaXplID0gW107XG4gICAgICB0aGlzLnRpY2tQb2ludGVyID0gMDtcbiAgICAgIHZhciBwcmVjaXNpb25Mb3NzID0gMDtcbiAgICAgIHRoaXMuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50LCBldmVudEluZGV4KSB7XG4gICAgICAgIC8vIEJ1aWxkIGV2ZW50ICYgYWRkIHRvIHRvdGFsIHRpY2sgZHVyYXRpb25cbiAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTm90ZU9uRXZlbnQgfHwgZXZlbnQgaW5zdGFuY2VvZiBOb3RlT2ZmRXZlbnQpIHtcbiAgICAgICAgICB2YXIgYnVpbHQgPSBldmVudC5idWlsZERhdGEoX3RoaXMyLCBwcmVjaXNpb25Mb3NzKTtcbiAgICAgICAgICBwcmVjaXNpb25Mb3NzID0gVXRpbHMuZ2V0UHJlY2lzaW9uTG9zcyhldmVudC5kZWx0YVdpdGhQcmVjaXNpb25Db3JyZWN0aW9uIHx8IDApO1xuICAgICAgICAgIF90aGlzMi5kYXRhID0gX3RoaXMyLmRhdGEuY29uY2F0KGJ1aWx0LmRhdGEpO1xuICAgICAgICAgIF90aGlzMi50aWNrUG9pbnRlciA9IFV0aWxzLmdldFJvdW5kZWRJZkNsb3NlKGV2ZW50LnRpY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzMi5kYXRhID0gX3RoaXMyLmRhdGEuY29uY2F0KGV2ZW50LmRhdGEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMubWVyZ2VFeHBsaWNpdFRpY2tFdmVudHMoKTtcbiAgICAgIHRoaXMuc2l6ZSA9IFV0aWxzLm51bWJlclRvQnl0ZXModGhpcy5kYXRhLmxlbmd0aCwgNCk7IC8vIDQgYnl0ZXMgbG9uZ1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibWVyZ2VFeHBsaWNpdFRpY2tFdmVudHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWVyZ2VFeHBsaWNpdFRpY2tFdmVudHMoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgaWYgKCF0aGlzLmV4cGxpY2l0VGlja0V2ZW50cy5sZW5ndGgpIHJldHVybjsgLy8gRmlyc3Qgc29ydCBhc2MgbGlzdCBvZiBldmVudHMgYnkgc3RhcnRUaWNrXG5cbiAgICAgIHRoaXMuZXhwbGljaXRUaWNrRXZlbnRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEuc3RhcnRUaWNrIC0gYi5zdGFydFRpY2s7XG4gICAgICB9KTsgLy8gTm93IHRoaXMuZXhwbGljaXRUaWNrRXZlbnRzIGlzIGluIGNvcnJlY3Qgb3JkZXIsIGFuZCBzbyBpcyB0aGlzLmV2ZW50cyBuYXR1cmFsbHkuXG4gICAgICAvLyBGb3IgZWFjaCBleHBsaWNpdCB0aWNrIGV2ZW50LCBzcGxpY2UgaXQgaW50byB0aGUgbWFpbiBsaXN0IG9mIGV2ZW50cyBhbmRcbiAgICAgIC8vIGFkanVzdCB0aGUgZGVsdGEgb24gdGhlIGZvbGxvd2luZyBldmVudHMgc28gdGhleSBzdGlsbCBwbGF5IG5vcm1hbGx5LlxuXG4gICAgICB0aGlzLmV4cGxpY2l0VGlja0V2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChub3RlRXZlbnQpIHtcbiAgICAgICAgLy8gQ29udmVydCBOb3RlRXZlbnQgdG8gaXQncyByZXNwZWN0aXZlIE5vdGVPbi9Ob3RlT2ZmIGV2ZW50c1xuICAgICAgICAvLyBOb3RlIHRoYXQgYXMgd2Ugc3BsaWNlIGluIGV2ZW50cyB0aGUgZGVsdGEgZm9yIHRoZSBOb3RlT2ZmIG9uZXMgd2lsbFxuICAgICAgICAvLyBOZWVkIHRvIGNoYW5nZSBiYXNlZCBvbiB3aGF0IGNvbWVzIGJlZm9yZSB0aGVtIGFmdGVyIHRoZSBzcGxpY2UuXG4gICAgICAgIG5vdGVFdmVudC5idWlsZERhdGEoKS5ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiBlLmJ1aWxkRGF0YShfdGhpczMpO1xuICAgICAgICB9KTsgLy8gTWVyZ2UgZWFjaCBldmVudCBpbmRpdnVhbGx5IGludG8gdGhpcyB0cmFjaydzIGV2ZW50IGxpc3QuXG5cbiAgICAgICAgbm90ZUV2ZW50LmV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczMubWVyZ2VTaW5nbGVFdmVudChldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7IC8vIEhhY2t5IHdheSB0byByZWJ1aWxkIHRyYWNrIHdpdGggbmV3bHkgc3BsaWNlZCBldmVudHMuICBOZWVkIGJldHRlciBzb2x1dGlvbi5cblxuICAgICAgdGhpcy5leHBsaWNpdFRpY2tFdmVudHMgPSBbXTtcbiAgICAgIHRoaXMuYnVpbGREYXRhKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE1lcmdlcyBhbm90aGVyIHRyYWNrJ3MgZXZlbnRzIHdpdGggdGhpcyB0cmFjay5cbiAgICAgKiBAcGFyYW0ge1RyYWNrfSB0cmFja1xuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibWVyZ2VUcmFja1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtZXJnZVRyYWNrKHRyYWNrKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgLy8gRmlyc3QgYnVpbGQgdGhpcyB0cmFjayB0byBwb3B1bGF0ZSBlYWNoIGV2ZW50J3MgdGljayBwcm9wZXJ0eVxuICAgICAgdGhpcy5idWlsZERhdGEoKTsgLy8gVGhlbiBidWlsZCB0cmFjayB0byBiZSBtZXJnZWQgc28gdGhhdCB0aWNrIHByb3BlcnR5IGlzIHBvcHVsYXRlZCBvbiBhbGwgZXZlbnRzICYgbWVyZ2UgZWFjaCBldmVudC5cblxuICAgICAgdHJhY2suYnVpbGREYXRhKCkuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfdGhpczQubWVyZ2VTaW5nbGVFdmVudChldmVudCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTWVyZ2VzIGEgc2luZ2xlIGV2ZW50IGludG8gdGhpcyB0cmFjaydzIGxpc3Qgb2YgZXZlbnRzIGJhc2VkIG9uIGV2ZW50LnRpY2sgcHJvcGVydHkuXG4gICAgICogQHBhcmFtIHtOb3RlT25FdmVudHxOb3RlT2ZmRXZlbnR9IC0gZXZlbnRcbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm1lcmdlU2luZ2xlRXZlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWVyZ2VTaW5nbGVFdmVudChldmVudCkge1xuICAgICAgLy8gRmluZCBpbmRleCBvZiBleGlzdGluZyBldmVudCB3ZSBuZWVkIHRvIGZvbGxvdyB3aXRoXG4gICAgICB2YXIgbGFzdEV2ZW50SW5kZXggPSAwO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmV2ZW50c1tpXS50aWNrID4gZXZlbnQudGljaykgYnJlYWs7XG4gICAgICAgIGxhc3RFdmVudEluZGV4ID0gaTtcbiAgICAgIH1cblxuICAgICAgdmFyIHNwbGljZWRFdmVudEluZGV4ID0gbGFzdEV2ZW50SW5kZXggKyAxOyAvLyBOZWVkIHRvIGFkanVzdCB0aGUgZGVsdGEgb2YgdGhpcyBldmVudCB0byBlbnN1cmUgaXQgZmFsbHMgb24gdGhlIGNvcnJlY3QgdGljay5cblxuICAgICAgZXZlbnQuZGVsdGEgPSBldmVudC50aWNrIC0gdGhpcy5ldmVudHNbbGFzdEV2ZW50SW5kZXhdLnRpY2s7IC8vIFNwbGljZSB0aGlzIGV2ZW50IGF0IGxhc3RFdmVudEluZGV4ICsgMVxuXG4gICAgICB0aGlzLmV2ZW50cy5zcGxpY2Uoc3BsaWNlZEV2ZW50SW5kZXgsIDAsIGV2ZW50KTsgLy8gTm93IGFkanVzdCBkZWx0YSBvZiBhbGwgZm9sbG93aW5nIGV2ZW50c1xuXG4gICAgICBmb3IgKHZhciBpID0gc3BsaWNlZEV2ZW50SW5kZXggKyAxOyBpIDwgdGhpcy5ldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gU2luY2UgZWFjaCBleGlzdGluZyBldmVudCBzaG91bGQgaGF2ZSBhIHRpY2sgdmFsdWUgYXQgdGhpcyBwb2ludCB3ZSBqdXN0IG5lZWQgdG9cbiAgICAgICAgLy8gYWRqdXN0IGRlbHRhIHRvIHRoYXQgdGhlIGV2ZW50IHN0aWxsIGZhbGxzIG9uIHRoZSBjb3JyZWN0IHRpY2suXG4gICAgICAgIHRoaXMuZXZlbnRzW2ldLmRlbHRhID0gdGhpcy5ldmVudHNbaV0udGljayAtIHRoaXMuZXZlbnRzW2kgLSAxXS50aWNrO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCBldmVudHMgbWF0Y2hpbmcgc3BlY2lmaWVkIHR5cGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZSAtIEV2ZW50IHR5cGVcbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZUV2ZW50c0J5VHlwZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVFdmVudHNCeVR5cGUoZXZlbnRUeXBlKSB7XG4gICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgdGhpcy5ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQsIGluZGV4KSB7XG4gICAgICAgIGlmIChldmVudC50eXBlID09PSBldmVudFR5cGUpIHtcbiAgICAgICAgICBfdGhpczUuZXZlbnRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGVtcG8gb2YgdGhlIE1JREkgZmlsZS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYnBtIC0gVGVtcG8gaW4gYmVhdHMgcGVyIG1pbnV0ZS5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNldFRlbXBvXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFRlbXBvKGJwbSkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IFRlbXBvRXZlbnQoYnBtKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGltZSBzaWduYXR1cmUuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG51bWVyYXRvciAtIFRvcCBudW1iZXIgb2YgdGhlIHRpbWUgc2lnbmF0dXJlLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZW5vbWluYXRvciAtIEJvdHRvbSBudW1iZXIgb2YgdGhlIHRpbWUgc2lnbmF0dXJlLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaWRpY2xvY2tzcGVydGljayAtIERlZmF1bHRzIHRvIDI0LlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBub3Rlc3Blcm1pZGljbG9jayAtIERlZmF1bHRzIHRvIDguXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzZXRUaW1lU2lnbmF0dXJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFRpbWVTaWduYXR1cmUobnVtZXJhdG9yLCBkZW5vbWluYXRvciwgbWlkaWNsb2Nrc3BlcnRpY2ssIG5vdGVzcGVybWlkaWNsb2NrKSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgVGltZVNpZ25hdHVyZUV2ZW50KG51bWVyYXRvciwgZGVub21pbmF0b3IsIG1pZGljbG9ja3NwZXJ0aWNrLCBub3Rlc3Blcm1pZGljbG9jaykpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIGtleSBzaWduYXR1cmUuXG4gICAgICogQHBhcmFtIHsqfSBzZiAtXG4gICAgICogQHBhcmFtIHsqfSBtaSAtXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzZXRLZXlTaWduYXR1cmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0S2V5U2lnbmF0dXJlKHNmLCBtaSkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IEtleVNpZ25hdHVyZUV2ZW50KHNmLCBtaSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIHRleHQgdG8gTUlESSBmaWxlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCB0byBhZGQuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhZGRUZXh0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZFRleHQodGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IFRleHRFdmVudCh0ZXh0KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgY29weXJpZ2h0IHRvIE1JREkgZmlsZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRleHQgb2YgY29weXJpZ2h0IGxpbmUuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhZGRDb3B5cmlnaHRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkQ29weXJpZ2h0KHRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBDb3B5cmlnaHRFdmVudCh0ZXh0KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgU2VxdWVuY2UvVHJhY2sgTmFtZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRleHQgb2YgdHJhY2sgbmFtZS5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFkZFRyYWNrTmFtZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRUcmFja05hbWUodGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IFRyYWNrTmFtZUV2ZW50KHRleHQpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyBpbnN0cnVtZW50IG5hbWUgb2YgdHJhY2suXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBOYW1lIG9mIGluc3RydW1lbnQuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhZGRJbnN0cnVtZW50TmFtZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRJbnN0cnVtZW50TmFtZSh0ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgSW5zdHJ1bWVudE5hbWVFdmVudCh0ZXh0KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgbWFya2VyIHRvIE1JREkgZmlsZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIE1hcmtlciB0ZXh0LlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkTWFya2VyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZE1hcmtlcih0ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgTWFya2VyRXZlbnQodGV4dCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGN1ZSBwb2ludCB0byBNSURJIGZpbGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUZXh0IG9mIGN1ZSBwb2ludC5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFkZEN1ZVBvaW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEN1ZVBvaW50KHRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBDdWVQb2ludEV2ZW50KHRleHQpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBseXJpYyB0byBNSURJIGZpbGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBMeXJpYyB0ZXh0IHRvIGFkZC5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFkZEx5cmljXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEx5cmljKHRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBMeXJpY0V2ZW50KHRleHQpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hhbm5lbCBtb2RlIG1lc3NhZ2VzXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJwb2x5TW9kZU9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBvbHlNb2RlT24oKSB7XG4gICAgICB2YXIgZXZlbnQgPSBuZXcgTm90ZU9uRXZlbnQoe1xuICAgICAgICBkYXRhOiBbMHgwMCwgMHhCMCwgMHg3RSwgMHgwMF1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQoZXZlbnQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIGEgcGl0Y2ggYmVuZC5cbiAgICAgKiBAcGFyYW0ge2Zsb2F0fSBiZW5kIC0gQmVuZCB2YWx1ZSByYW5naW5nIFstMSwxXSwgemVybyBtZWFuaW5nIG5vIGJlbmQuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzZXRQaXRjaEJlbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UGl0Y2hCZW5kKGJlbmQpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBQaXRjaEJlbmRFdmVudCh7XG4gICAgICAgIGJlbmQ6IGJlbmRcbiAgICAgIH0pKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIGNvbnRyb2xsZXIgY2hhbmdlIGV2ZW50XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciAtIENvbnRyb2wgbnVtYmVyLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSAtIENvbnRyb2wgdmFsdWUuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjb250cm9sbGVyQ2hhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbnRyb2xsZXJDaGFuZ2UobnVtYmVyLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IENvbnRyb2xsZXJDaGFuZ2VFdmVudCh7XG4gICAgICAgIGNvbnRyb2xsZXJOdW1iZXI6IG51bWJlcixcbiAgICAgICAgY29udHJvbGxlclZhbHVlOiB2YWx1ZVxuICAgICAgfSkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBUcmFjaztcbn0oKTtcblxudmFyIFZleEZsb3cgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBWZXhGbG93KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBWZXhGbG93KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhWZXhGbG93LCBbe1xuICAgIGtleTogXCJ0cmFja0Zyb21Wb2ljZVwiLFxuICAgIHZhbHVlOlxuICAgIC8qKlxuICAgICAqIFN1cHBvcnQgZm9yIGNvbnZlcnRpbmcgVmV4RmxvdyB2b2ljZSBpbnRvIE1pZGlXcml0ZXJKUyB0cmFja1xuICAgICAqIEByZXR1cm4gTWlkaVdyaXRlci5UcmFjayBvYmplY3RcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB0cmFja0Zyb21Wb2ljZSh2b2ljZSkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHtcbiAgICAgICAgYWRkUmVuZGVyZWRBY2NpZGVudGFsczogZmFsc2VcbiAgICAgIH07XG4gICAgICB2YXIgdHJhY2sgPSBuZXcgVHJhY2soKTtcbiAgICAgIHZhciB3YWl0ID0gW107XG4gICAgICB2b2ljZS50aWNrYWJsZXMuZm9yRWFjaChmdW5jdGlvbiAodGlja2FibGUpIHtcbiAgICAgICAgaWYgKHRpY2thYmxlLm5vdGVUeXBlID09PSAnbicpIHtcbiAgICAgICAgICB0cmFjay5hZGRFdmVudChuZXcgTm90ZUV2ZW50KHtcbiAgICAgICAgICAgIHBpdGNoOiB0aWNrYWJsZS5rZXlzLm1hcChmdW5jdGlvbiAocGl0Y2gsIGluZGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpcy5jb252ZXJ0UGl0Y2gocGl0Y2gsIGluZGV4LCB0aWNrYWJsZSwgb3B0aW9ucy5hZGRSZW5kZXJlZEFjY2lkZW50YWxzKTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgZHVyYXRpb246IF90aGlzLmNvbnZlcnREdXJhdGlvbih0aWNrYWJsZSksXG4gICAgICAgICAgICB3YWl0OiB3YWl0XG4gICAgICAgICAgfSkpOyAvLyByZXNldCB3YWl0XG5cbiAgICAgICAgICB3YWl0ID0gW107XG4gICAgICAgIH0gZWxzZSBpZiAodGlja2FibGUubm90ZVR5cGUgPT09ICdyJykge1xuICAgICAgICAgIC8vIG1vdmUgb24gdG8gdGhlIG5leHQgdGlja2FibGUgYW5kIGFkZCB0aGlzIHRvIHRoZSBzdGFja1xuICAgICAgICAgIC8vIG9mIHRoZSBgd2FpdGAgcHJvcGVydHkgZm9yIHRoZSBuZXh0IG5vdGUgZXZlbnRcbiAgICAgICAgICB3YWl0LnB1c2goX3RoaXMuY29udmVydER1cmF0aW9uKHRpY2thYmxlKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9KTsgLy8gVGhlcmUgbWF5IGJlIG91dHN0YW5kaW5nIHJlc3RzIGF0IHRoZSBlbmQgb2YgdGhlIHRyYWNrLFxuICAgICAgLy8gcGFkIHdpdGggYSBnaG9zdCBub3RlICh6ZXJvIGR1cmF0aW9uIGFuZCB2ZWxvY2l0eSksIGp1c3QgdG8gY2FwdHVyZSB0aGUgd2FpdC5cblxuICAgICAgaWYgKHdhaXQubGVuZ3RoID4gMCkge1xuICAgICAgICB0cmFjay5hZGRFdmVudChuZXcgTm90ZUV2ZW50KHtcbiAgICAgICAgICBwaXRjaDogJ1tjNF0nLFxuICAgICAgICAgIGR1cmF0aW9uOiAnMCcsXG4gICAgICAgICAgd2FpdDogd2FpdCxcbiAgICAgICAgICB2ZWxvY2l0eTogJzAnXG4gICAgICAgIH0pKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRyYWNrO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBWZXhGbG93IHBpdGNoIHN5bnRheCB0byBNaWRpV3JpdGVySlMgc3ludGF4XG4gICAgICogQHBhcmFtIHBpdGNoIHN0cmluZ1xuICAgICAqIEBwYXJhbSBpbmRleCBwaXRjaCBpbmRleFxuICAgICAqIEBwYXJhbSBub3RlIHN0cnVjdCBmcm9tIFZleGZsb3dcbiAgICAgKiBAcGFyYW0gYWRkUmVuZGVyZWRBY2NpZGVudGFscyBhZGRzIFZleGZsb3cgcmVuZGVyZWQgYWNjaWRlbnRhbHNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNvbnZlcnRQaXRjaFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb252ZXJ0UGl0Y2gocGl0Y2gsIGluZGV4LCBub3RlKSB7XG4gICAgICB2YXIgYWRkUmVuZGVyZWRBY2NpZGVudGFscyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogZmFsc2U7XG4gICAgICAvLyBTcGxpdHMgbm90ZSBuYW1lIGZyb20gb2N0YXZlXG4gICAgICB2YXIgcGl0Y2hQYXJ0cyA9IHBpdGNoLnNwbGl0KCcvJyk7IC8vIFJldHJpZXZlcyBhY2NpZGVudGFscyBmcm9tIHBpdGNoXG4gICAgICAvLyBSZW1vdmVzIG5hdHVyYWwgYWNjaWRlbnRhbHMgc2luY2UgdGhleSBhcmUgbm90IGFjY2VwdGVkIGluIFRvbmFsIE1pZGlcblxuICAgICAgdmFyIGFjY2lkZW50YWxzID0gcGl0Y2hQYXJ0c1swXS5zdWJzdHJpbmcoMSkucmVwbGFjZSgnbicsICcnKTtcblxuICAgICAgaWYgKGFkZFJlbmRlcmVkQWNjaWRlbnRhbHMpIHtcbiAgICAgICAgdmFyIF9ub3RlJGdldEFjY2lkZW50YWxzO1xuXG4gICAgICAgIChfbm90ZSRnZXRBY2NpZGVudGFscyA9IG5vdGUuZ2V0QWNjaWRlbnRhbHMoKSkgPT09IG51bGwgfHwgX25vdGUkZ2V0QWNjaWRlbnRhbHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9ub3RlJGdldEFjY2lkZW50YWxzLmZvckVhY2goZnVuY3Rpb24gKGFjY2lkZW50YWwpIHtcbiAgICAgICAgICBpZiAoYWNjaWRlbnRhbC5pbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChhY2NpZGVudGFsLnR5cGUgPT09ICduJykge1xuICAgICAgICAgICAgICBhY2NpZGVudGFscyA9ICcnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYWNjaWRlbnRhbHMgKz0gYWNjaWRlbnRhbC50eXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwaXRjaFBhcnRzWzBdWzBdICsgYWNjaWRlbnRhbHMgKyBwaXRjaFBhcnRzWzFdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBWZXhGbG93IGR1cmF0aW9uIHN5bnRheCB0byBNaWRpV3JpdGVySlMgc3ludGF4XG4gICAgICogQHBhcmFtIG5vdGUgc3RydWN0IGZyb20gVmV4Rmxvd1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY29udmVydER1cmF0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbnZlcnREdXJhdGlvbihub3RlKSB7XG4gICAgICByZXR1cm4gJ2QnLnJlcGVhdChub3RlLmRvdHMpICsgdGhpcy5jb252ZXJ0QmFzZUR1cmF0aW9uKG5vdGUuZHVyYXRpb24pICsgKG5vdGUudHVwbGV0ID8gJ3QnICsgbm90ZS50dXBsZXQubnVtX25vdGVzIDogJycpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBWZXhGbG93IGJhc2UgZHVyYXRpb24gc3ludGF4IHRvIE1pZGlXcml0ZXJKUyBzeW50YXhcbiAgICAgKiBAcGFyYW0gZHVyYXRpb24gVmV4ZmxvdyBkdXJhdGlvblxuICAgICAqIEByZXR1cm5zIE1pZGlXcml0ZXJKUyBkdXJhdGlvblxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY29udmVydEJhc2VEdXJhdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb252ZXJ0QmFzZUR1cmF0aW9uKGR1cmF0aW9uKSB7XG4gICAgICBzd2l0Y2ggKGR1cmF0aW9uKSB7XG4gICAgICAgIGNhc2UgJ3cnOlxuICAgICAgICAgIHJldHVybiAnMSc7XG5cbiAgICAgICAgY2FzZSAnaCc6XG4gICAgICAgICAgcmV0dXJuICcyJztcblxuICAgICAgICBjYXNlICdxJzpcbiAgICAgICAgICByZXR1cm4gJzQnO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIGR1cmF0aW9uO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBWZXhGbG93O1xufSgpO1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIGhlYWRlciBjaHVuayBzZWN0aW9uIG9mIGEgTUlESSBmaWxlLlxuICogQHBhcmFtIHtudW1iZXJ9IG51bWJlck9mVHJhY2tzIC0gTnVtYmVyIG9mIHRyYWNrc1xuICogQHJldHVybiB7SGVhZGVyQ2h1bmt9XG4gKi9cblxudmFyIEhlYWRlckNodW5rID0gZnVuY3Rpb24gSGVhZGVyQ2h1bmsobnVtYmVyT2ZUcmFja3MpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhlYWRlckNodW5rKTtcblxuICB0aGlzLnR5cGUgPSBDb25zdGFudHMuSEVBREVSX0NIVU5LX1RZUEU7XG4gIHZhciB0cmFja1R5cGUgPSBudW1iZXJPZlRyYWNrcyA+IDEgPyBDb25zdGFudHMuSEVBREVSX0NIVU5LX0ZPUk1BVDEgOiBDb25zdGFudHMuSEVBREVSX0NIVU5LX0ZPUk1BVDA7XG4gIHRoaXMuZGF0YSA9IHRyYWNrVHlwZS5jb25jYXQoVXRpbHMubnVtYmVyVG9CeXRlcyhudW1iZXJPZlRyYWNrcywgMiksIC8vIHR3byBieXRlcyBsb25nLFxuICBDb25zdGFudHMuSEVBREVSX0NIVU5LX0RJVklTSU9OKTtcbiAgdGhpcy5zaXplID0gWzAsIDAsIDAsIHRoaXMuZGF0YS5sZW5ndGhdO1xufTtcblxuLyoqXG4gKiBPYmplY3QgdGhhdCBwdXRzIHRvZ2V0aGVyIHRyYWNrcyBhbmQgcHJvdmlkZXMgbWV0aG9kcyBmb3IgZmlsZSBvdXRwdXQuXG4gKiBAcGFyYW0ge2FycmF5fFRyYWNrfSB0cmFja3MgLSBBIHNpbmdsZSB7VHJhY2t9IG9iamVjdCBvciBhbiBhcnJheSBvZiB7VHJhY2t9IG9iamVjdHMuXG4gKiBAcmV0dXJuIHtXcml0ZXJ9XG4gKi9cblxudmFyIFdyaXRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFdyaXRlcih0cmFja3MpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFdyaXRlcik7XG5cbiAgICAvLyBFbnN1cmUgdHJhY2sgaXMgYW4gYXJyYXlcbiAgICB0cmFja3MgPSBVdGlscy50b0FycmF5KHRyYWNrcyk7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgdGhpcy5kYXRhLnB1c2gobmV3IEhlYWRlckNodW5rKHRyYWNrcy5sZW5ndGgpKTsgLy8gRm9yIGVhY2ggdHJhY2sgYWRkIGZpbmFsIGVuZCBvZiB0cmFjayBldmVudCBhbmQgYnVpbGQgZGF0YVxuXG4gICAgdHJhY2tzLmZvckVhY2goZnVuY3Rpb24gKHRyYWNrLCBpKSB7XG4gICAgICBfdGhpcy5kYXRhLnB1c2godHJhY2suYnVpbGREYXRhKCkpO1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBCdWlsZHMgdGhlIGZpbGUgaW50byBhIFVpbnQ4QXJyYXlcbiAgICogQHJldHVybiB7VWludDhBcnJheX1cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoV3JpdGVyLCBbe1xuICAgIGtleTogXCJidWlsZEZpbGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYnVpbGRGaWxlKCkge1xuICAgICAgdmFyIGJ1aWxkID0gW107IC8vIERhdGEgY29uc2lzdHMgb2YgY2h1bmtzIHdoaWNoIGNvbnNpc3RzIG9mIGRhdGFcblxuICAgICAgdGhpcy5kYXRhLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGJ1aWxkID0gYnVpbGQuY29uY2F0KGQudHlwZSwgZC5zaXplLCBkLmRhdGEpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYnVpbGQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IGZpbGUgYnVmZmVyIHRvIGEgYmFzZTY0IHN0cmluZy4gIERpZmZlcmVudCBtZXRob2RzIGRlcGVuZGluZyBvbiBpZiBicm93c2VyIG9yIG5vZGUuXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYmFzZTY0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJhc2U2NCgpIHtcbiAgICAgIGlmICh0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGJ0b2EoU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCB0aGlzLmJ1aWxkRmlsZSgpKSk7XG4gICAgICByZXR1cm4gQnVmZmVyLmZyb20odGhpcy5idWlsZEZpbGUoKSkudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGRhdGEgVVJJLlxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRhdGFVcmlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGF0YVVyaSgpIHtcbiAgICAgIHJldHVybiAnZGF0YTphdWRpby9taWRpO2Jhc2U2NCwnICsgdGhpcy5iYXNlNjQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogT3V0cHV0IHRvIHN0ZG91dFxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInN0ZG91dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdGRvdXQoKSB7XG4gICAgICByZXR1cm4gcHJvY2Vzcy5zdGRvdXQud3JpdGUobmV3IEJ1ZmZlcih0aGlzLmJ1aWxkRmlsZSgpKSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFdyaXRlcjtcbn0oKTtcblxudmFyIG1haW4gPSB7XG4gIENvbnN0YW50czogQ29uc3RhbnRzLFxuICBOb3RlT25FdmVudDogTm90ZU9uRXZlbnQsXG4gIE5vdGVPZmZFdmVudDogTm90ZU9mZkV2ZW50LFxuICBOb3RlRXZlbnQ6IE5vdGVFdmVudCxcbiAgUGl0Y2hCZW5kRXZlbnQ6IFBpdGNoQmVuZEV2ZW50LFxuICBQcm9ncmFtQ2hhbmdlRXZlbnQ6IFByb2dyYW1DaGFuZ2VFdmVudCxcbiAgVHJhY2s6IFRyYWNrLFxuICBVdGlsczogVXRpbHMsXG4gIFZleEZsb3c6IFZleEZsb3csXG4gIFdyaXRlcjogV3JpdGVyXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1haW47XG4iLCAidmFyIE1pZGkgPSB7fTtcblxuKGZ1bmN0aW9uKGV4cG9ydGVkKSB7XG5cblx0dmFyIERFRkFVTFRfVk9MVU1FICAgPSBleHBvcnRlZC5ERUZBVUxUX1ZPTFVNRSAgID0gOTA7XG5cdHZhciBERUZBVUxUX0RVUkFUSU9OID0gZXhwb3J0ZWQuREVGQVVMVF9EVVJBVElPTiA9IDEyODtcblx0dmFyIERFRkFVTFRfQ0hBTk5FTCAgPSBleHBvcnRlZC5ERUZBVUxUX0NIQU5ORUwgID0gMDtcblxuXHQvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0ICogVXRpbGl0eSBmdW5jdGlvbnNcblx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG5cdHZhciBVdGlsID0ge1xuXG5cdFx0bWlkaV9sZXR0ZXJfcGl0Y2hlczogeyBhOjIxLCBiOjIzLCBjOjEyLCBkOjE0LCBlOjE2LCBmOjE3LCBnOjE5IH0sXG5cblx0XHQvKipcblx0XHQgKiBDb252ZXJ0IGEgc3ltYm9saWMgbm90ZSBuYW1lIChlLmcuIFwiYzRcIikgdG8gYSBudW1lcmljIE1JREkgcGl0Y2ggKGUuZy5cblx0XHQgKiA2MCwgbWlkZGxlIEMpLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IG4gLSBUaGUgc3ltYm9saWMgbm90ZSBuYW1lIHRvIHBhcnNlLlxuXHRcdCAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBNSURJIHBpdGNoIHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIHN5bWJvbGljIG5vdGVcblx0XHQgKiBuYW1lLlxuXHRcdCAqL1xuXHRcdG1pZGlQaXRjaEZyb21Ob3RlOiBmdW5jdGlvbihuKSB7XG5cdFx0XHR2YXIgbWF0Y2hlcyA9IC8oW2EtZ10pKCMrfGIrKT8oWzAtOV0rKSQvaS5leGVjKG4pO1xuXHRcdFx0dmFyIG5vdGUgPSBtYXRjaGVzWzFdLnRvTG93ZXJDYXNlKCksIGFjY2lkZW50YWwgPSBtYXRjaGVzWzJdIHx8ICcnLCBvY3RhdmUgPSBwYXJzZUludChtYXRjaGVzWzNdLCAxMCk7XG5cdFx0XHRyZXR1cm4gKDEyICogb2N0YXZlKSArIFV0aWwubWlkaV9sZXR0ZXJfcGl0Y2hlc1tub3RlXSArIChhY2NpZGVudGFsLnN1YnN0cigwLDEpPT0nIyc/MTotMSkgKiBhY2NpZGVudGFsLmxlbmd0aDtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogRW5zdXJlIHRoYXQgdGhlIGdpdmVuIGFyZ3VtZW50IGlzIGNvbnZlcnRlZCB0byBhIE1JREkgcGl0Y2guIE5vdGUgdGhhdFxuXHRcdCAqIGl0IG1heSBhbHJlYWR5IGJlIG9uZSAoaW5jbHVkaW5nIGEgcHVyZWx5IG51bWVyaWMgc3RyaW5nKS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gcCAtIFRoZSBwaXRjaCB0byBjb252ZXJ0LlxuXHRcdCAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSByZXN1bHRpbmcgbnVtZXJpYyBNSURJIHBpdGNoLlxuXHRcdCAqL1xuXHRcdGVuc3VyZU1pZGlQaXRjaDogZnVuY3Rpb24ocCkge1xuXHRcdFx0aWYgKHR5cGVvZiBwID09ICdudW1iZXInIHx8ICEvW14wLTldLy50ZXN0KHApKSB7XG5cdFx0XHRcdC8vIG51bWVyaWMgcGl0Y2hcblx0XHRcdFx0cmV0dXJuIHBhcnNlSW50KHAsIDEwKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIGFzc3VtZSBpdCdzIGEgbm90ZSBuYW1lXG5cdFx0XHRcdHJldHVybiBVdGlsLm1pZGlQaXRjaEZyb21Ob3RlKHApO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRtaWRpX3BpdGNoZXNfbGV0dGVyOiB7ICcxMic6J2MnLCAnMTMnOidjIycsICcxNCc6J2QnLCAnMTUnOidkIycsICcxNic6J2UnLCAnMTcnOidmJywgJzE4JzonZiMnLCAnMTknOidnJywgJzIwJzonZyMnLCAnMjEnOidhJywgJzIyJzonYSMnLCAnMjMnOidiJyB9LFxuXHRcdG1pZGlfZmxhdHRlbmVkX25vdGVzOiB7ICdhIyc6J2JiJywgJ2MjJzonZGInLCAnZCMnOidlYicsICdmIyc6J2diJywgJ2cjJzonYWInIH0sXG5cblx0XHQvKipcblx0XHQgKiBDb252ZXJ0IGEgbnVtZXJpYyBNSURJIHBpdGNoIHZhbHVlIChlLmcuIDYwKSB0byBhIHN5bWJvbGljIG5vdGUgbmFtZVxuXHRcdCAqIChlLmcuIFwiYzRcIikuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gbiAtIFRoZSBudW1lcmljIE1JREkgcGl0Y2ggdmFsdWUgdG8gY29udmVydC5cblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXR1cm5GbGF0dGVuZWQ9ZmFsc2VdIC0gV2hldGhlciB0byBwcmVmZXIgZmxhdHRlbmVkXG5cdFx0ICogbm90ZXMgdG8gc2hhcnBlbmVkIG9uZXMuIE9wdGlvbmFsLCBkZWZhdWx0IGZhbHNlLlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSByZXN1bHRpbmcgc3ltYm9saWMgbm90ZSBuYW1lLlxuXHRcdCAqL1xuXHRcdG5vdGVGcm9tTWlkaVBpdGNoOiBmdW5jdGlvbihuLCByZXR1cm5GbGF0dGVuZWQpIHtcblx0XHRcdHZhciBvY3RhdmUgPSAwLCBub3RlTnVtID0gbiwgbm90ZU5hbWUsIHJldHVybkZsYXR0ZW5lZCA9IHJldHVybkZsYXR0ZW5lZCB8fCBmYWxzZTtcblx0XHRcdGlmIChuID4gMjMpIHtcblx0XHRcdFx0Ly8gbm90ZU51bSBpcyBvbiBvY3RhdmUgMSBvciBtb3JlXG5cdFx0XHRcdG9jdGF2ZSA9IE1hdGguZmxvb3Iobi8xMikgLSAxO1xuXHRcdFx0XHQvLyBzdWJ0cmFjdCBudW1iZXIgb2Ygb2N0YXZlcyBmcm9tIG5vdGVOdW1cblx0XHRcdFx0bm90ZU51bSA9IG4gLSBvY3RhdmUgKiAxMjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gZ2V0IG5vdGUgbmFtZSAoYyMsIGQsIGYjIGV0Yylcblx0XHRcdG5vdGVOYW1lID0gVXRpbC5taWRpX3BpdGNoZXNfbGV0dGVyW25vdGVOdW1dO1xuXHRcdFx0Ly8gVXNlIGZsYXR0ZW5lZCBub3RlcyBpZiByZXF1ZXN0ZWQgKGUuZy4gZiMgc2hvdWxkIGJlIG91dHB1dCBhcyBnYilcblx0XHRcdGlmIChyZXR1cm5GbGF0dGVuZWQgJiYgbm90ZU5hbWUuaW5kZXhPZignIycpID4gMCkge1xuXHRcdFx0XHRub3RlTmFtZSA9IFV0aWwubWlkaV9mbGF0dGVuZWRfbm90ZXNbbm90ZU5hbWVdO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG5vdGVOYW1lICsgb2N0YXZlO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBDb252ZXJ0IGJlYXRzIHBlciBtaW51dGUgKEJQTSkgdG8gbWljcm9zZWNvbmRzIHBlciBxdWFydGVyIG5vdGUgKE1QUU4pLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IGJwbSAtIEEgbnVtYmVyIGluIGJlYXRzIHBlciBtaW51dGUuXG5cdFx0ICogQHJldHVybnMge251bWJlcn0gVGhlIG51bWJlciBvZiBtaWNyb3NlY29uZHMgcGVyIHF1YXJ0ZXIgbm90ZS5cblx0XHQgKi9cblx0XHRtcHFuRnJvbUJwbTogZnVuY3Rpb24oYnBtKSB7XG5cdFx0XHR2YXIgbXBxbiA9IE1hdGguZmxvb3IoNjAwMDAwMDAgLyBicG0pO1xuXHRcdFx0dmFyIHJldD1bXTtcblx0XHRcdGRvIHtcblx0XHRcdFx0cmV0LnVuc2hpZnQobXBxbiAmIDB4RkYpO1xuXHRcdFx0XHRtcHFuID4+PSA4O1xuXHRcdFx0fSB3aGlsZSAobXBxbik7XG5cdFx0XHR3aGlsZSAocmV0Lmxlbmd0aCA8IDMpIHtcblx0XHRcdFx0cmV0LnB1c2goMCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBDb252ZXJ0IG1pY3Jvc2Vjb25kcyBwZXIgcXVhcnRlciBub3RlIChNUFFOKSB0byBiZWF0cyBwZXIgbWludXRlIChCUE0pLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IG1wcW4gLSBUaGUgbnVtYmVyIG9mIG1pY3Jvc2Vjb25kcyBwZXIgcXVhcnRlciBub3RlLlxuXHRcdCAqIEByZXR1cm5zIHtudW1iZXJ9IEEgbnVtYmVyIGluIGJlYXRzIHBlciBtaW51dGUuXG5cdFx0ICovXG5cdFx0YnBtRnJvbU1wcW46IGZ1bmN0aW9uKG1wcW4pIHtcblx0XHRcdHZhciBtID0gbXBxbjtcblx0XHRcdGlmICh0eXBlb2YgbXBxblswXSAhPSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRtID0gMDtcblx0XHRcdFx0Zm9yICh2YXIgaT0wLCBsPW1wcW4ubGVuZ3RoLTE7IGwgPj0gMDsgKytpLCAtLWwpIHtcblx0XHRcdFx0XHRtIHw9IG1wcW5baV0gPDwgbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIE1hdGguZmxvb3IoNjAwMDAwMDAgLyBtcHFuKTtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogQ29udmVydHMgYW4gYXJyYXkgb2YgYnl0ZXMgdG8gYSBzdHJpbmcgb2YgaGV4YWRlY2ltYWwgY2hhcmFjdGVycy4gUHJlcGFyZXNcblx0XHQgKiBpdCB0byBiZSBjb252ZXJ0ZWQgaW50byBhIGJhc2U2NCBzdHJpbmcuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0FycmF5fSBieXRlQXJyYXkgLSBBcnJheSBvZiBieXRlcyB0byBiZSBjb252ZXJ0ZWQuXG5cdFx0ICogQHJldHVybnMge3N0cmluZ30gSGV4YWRlY2ltYWwgc3RyaW5nLCBlLmcuIFwiMDk3QjhBXCIuXG5cdFx0ICovXG5cdFx0Y29kZXMyU3RyOiBmdW5jdGlvbihieXRlQXJyYXkpIHtcblx0XHRcdHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIGJ5dGVBcnJheSk7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIENvbnZlcnRzIGEgc3RyaW5nIG9mIGhleGFkZWNpbWFsIHZhbHVlcyB0byBhbiBhcnJheSBvZiBieXRlcy4gSXQgY2FuIGFsc29cblx0XHQgKiBhZGQgcmVtYWluaW5nIFwiMFwiIG5pYmJsZXMgaW4gb3JkZXIgdG8gaGF2ZSBlbm91Z2ggYnl0ZXMgaW4gdGhlIGFycmF5IGFzIHRoZVxuXHRcdCAqIGBmaW5hbEJ5dGVzYCBwYXJhbWV0ZXIuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gc3RyaW5nIG9mIGhleGFkZWNpbWFsIHZhbHVlcyBlLmcuIFwiMDk3QjhBXCJcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gW2ZpbmFsQnl0ZXNdIC0gT3B0aW9uYWwuIFRoZSBkZXNpcmVkIG51bWJlciBvZiBieXRlc1xuXHRcdCAqIChub3QgbmliYmxlcykgdGhhdCB0aGUgcmV0dXJuZWQgYXJyYXkgc2hvdWxkIGNvbnRhaW4uXG5cdFx0ICogQHJldHVybnMge0FycmF5fSBBbiBhcnJheSBvZiBuaWJibGVzLlxuXHRcdCAqL1xuXHRcdHN0cjJCeXRlczogZnVuY3Rpb24gKHN0ciwgZmluYWxCeXRlcykge1xuXHRcdFx0aWYgKGZpbmFsQnl0ZXMpIHtcblx0XHRcdFx0d2hpbGUgKChzdHIubGVuZ3RoIC8gMikgPCBmaW5hbEJ5dGVzKSB7IHN0ciA9IFwiMFwiICsgc3RyOyB9XG5cdFx0XHR9XG5cblx0XHRcdHZhciBieXRlcyA9IFtdO1xuXHRcdFx0Zm9yICh2YXIgaT1zdHIubGVuZ3RoLTE7IGk+PTA7IGkgPSBpLTIpIHtcblx0XHRcdFx0dmFyIGNoYXJzID0gaSA9PT0gMCA/IHN0cltpXSA6IHN0cltpLTFdICsgc3RyW2ldO1xuXHRcdFx0XHRieXRlcy51bnNoaWZ0KHBhcnNlSW50KGNoYXJzLCAxNikpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gYnl0ZXM7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIFRyYW5zbGF0ZXMgbnVtYmVyIG9mIHRpY2tzIHRvIE1JREkgdGltZXN0YW1wIGZvcm1hdCwgcmV0dXJuaW5nIGFuIGFycmF5XG5cdFx0ICogb2YgYnl0ZXMgd2l0aCB0aGUgdGltZSB2YWx1ZXMuIE1JREkgaGFzIGEgdmVyeSBwYXJ0aWN1bGFyIHdheSB0byBleHByZXNzXG5cdFx0ICogdGltZTsgdGFrZSBhIGdvb2QgbG9vayBhdCB0aGUgc3BlYyBiZWZvcmUgZXZlciB0b3VjaGluZyB0aGlzIGZ1bmN0aW9uLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IHRpY2tzIC0gTnVtYmVyIG9mIHRpY2tzIHRvIGJlIHRyYW5zbGF0ZWQuXG5cdFx0ICogQHJldHVybnMge251bWJlcn0gQXJyYXkgb2YgYnl0ZXMgdGhhdCBmb3JtIHRoZSBNSURJIHRpbWUgdmFsdWUuXG5cdFx0ICovXG5cdFx0dHJhbnNsYXRlVGlja1RpbWU6IGZ1bmN0aW9uKHRpY2tzKSB7XG5cdFx0XHR2YXIgYnVmZmVyID0gdGlja3MgJiAweDdGO1xuXG5cdFx0XHR3aGlsZSAodGlja3MgPSB0aWNrcyA+PiA3KSB7XG5cdFx0XHRcdGJ1ZmZlciA8PD0gODtcblx0XHRcdFx0YnVmZmVyIHw9ICgodGlja3MgJiAweDdGKSB8IDB4ODApO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgYkxpc3QgPSBbXTtcblx0XHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRcdGJMaXN0LnB1c2goYnVmZmVyICYgMHhmZik7XG5cblx0XHRcdFx0aWYgKGJ1ZmZlciAmIDB4ODApIHsgYnVmZmVyID4+PSA4OyB9XG5cdFx0XHRcdGVsc2UgeyBicmVhazsgfVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGJMaXN0O1xuXHRcdH0sXG5cblx0fTtcblxuXHQvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0ICogRXZlbnQgY2xhc3Ncblx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG5cdC8qKlxuXHQgKiBDb25zdHJ1Y3QgYSBNSURJIGV2ZW50LlxuXHQgKlxuXHQgKiBQYXJhbWV0ZXJzIGluY2x1ZGU6XG5cdCAqICAtIHRpbWUgW29wdGlvbmFsIG51bWJlcl0gLSBUaWNrcyBzaW5jZSBwcmV2aW91cyBldmVudC5cblx0ICogIC0gdHlwZSBbcmVxdWlyZWQgbnVtYmVyXSAtIFR5cGUgb2YgZXZlbnQuXG5cdCAqICAtIGNoYW5uZWwgW3JlcXVpcmVkIG51bWJlcl0gLSBDaGFubmVsIGZvciB0aGUgZXZlbnQuXG5cdCAqICAtIHBhcmFtMSBbcmVxdWlyZWQgbnVtYmVyXSAtIEZpcnN0IGV2ZW50IHBhcmFtZXRlci5cblx0ICogIC0gcGFyYW0yIFtvcHRpb25hbCBudW1iZXJdIC0gU2Vjb25kIGV2ZW50IHBhcmFtZXRlci5cblx0ICovXG5cdHZhciBNaWRpRXZlbnQgPSBmdW5jdGlvbihwYXJhbXMpIHtcblx0XHRpZiAoIXRoaXMpIHJldHVybiBuZXcgTWlkaUV2ZW50KHBhcmFtcyk7XG5cdFx0aWYgKHBhcmFtcyAmJlxuXHRcdFx0XHQocGFyYW1zLnR5cGUgICAgIT09IG51bGwgfHwgcGFyYW1zLnR5cGUgICAgIT09IHVuZGVmaW5lZCkgJiZcblx0XHRcdFx0KHBhcmFtcy5jaGFubmVsICE9PSBudWxsIHx8IHBhcmFtcy5jaGFubmVsICE9PSB1bmRlZmluZWQpICYmXG5cdFx0XHRcdChwYXJhbXMucGFyYW0xICAhPT0gbnVsbCB8fCBwYXJhbXMucGFyYW0xICAhPT0gdW5kZWZpbmVkKSkge1xuXHRcdFx0dGhpcy5zZXRUaW1lKHBhcmFtcy50aW1lKTtcblx0XHRcdHRoaXMuc2V0VHlwZShwYXJhbXMudHlwZSk7XG5cdFx0XHR0aGlzLnNldENoYW5uZWwocGFyYW1zLmNoYW5uZWwpO1xuXHRcdFx0dGhpcy5zZXRQYXJhbTEocGFyYW1zLnBhcmFtMSk7XG5cdFx0XHR0aGlzLnNldFBhcmFtMihwYXJhbXMucGFyYW0yKTtcblx0XHR9XG5cdH07XG5cblx0Ly8gZXZlbnQgY29kZXNcblx0TWlkaUV2ZW50Lk5PVEVfT0ZGICAgICAgICAgICA9IDB4ODA7XG5cdE1pZGlFdmVudC5OT1RFX09OICAgICAgICAgICAgPSAweDkwO1xuXHRNaWRpRXZlbnQuQUZURVJfVE9VQ0ggICAgICAgID0gMHhBMDtcblx0TWlkaUV2ZW50LkNPTlRST0xMRVIgICAgICAgICA9IDB4QjA7XG5cdE1pZGlFdmVudC5QUk9HUkFNX0NIQU5HRSAgICAgPSAweEMwO1xuXHRNaWRpRXZlbnQuQ0hBTk5FTF9BRlRFUlRPVUNIID0gMHhEMDtcblx0TWlkaUV2ZW50LlBJVENIX0JFTkQgICAgICAgICA9IDB4RTA7XG5cblxuXHQvKipcblx0ICogU2V0IHRoZSB0aW1lIGZvciB0aGUgZXZlbnQgaW4gdGlja3Mgc2luY2UgdGhlIHByZXZpb3VzIGV2ZW50LlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gdGlja3MgLSBUaGUgbnVtYmVyIG9mIHRpY2tzIHNpbmNlIHRoZSBwcmV2aW91cyBldmVudC4gTWF5XG5cdCAqIGJlIHplcm8uXG5cdCAqL1xuXHRNaWRpRXZlbnQucHJvdG90eXBlLnNldFRpbWUgPSBmdW5jdGlvbih0aWNrcykge1xuXHRcdHRoaXMudGltZSA9IFV0aWwudHJhbnNsYXRlVGlja1RpbWUodGlja3MgfHwgMCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNldCB0aGUgdHlwZSBvZiB0aGUgZXZlbnQuIE11c3QgYmUgb25lIG9mIHRoZSBldmVudCBjb2RlcyBvbiBNaWRpRXZlbnQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlIC0gRXZlbnQgdHlwZS5cblx0ICovXG5cdE1pZGlFdmVudC5wcm90b3R5cGUuc2V0VHlwZSA9IGZ1bmN0aW9uKHR5cGUpIHtcblx0XHRpZiAodHlwZSA8IE1pZGlFdmVudC5OT1RFX09GRiB8fCB0eXBlID4gTWlkaUV2ZW50LlBJVENIX0JFTkQpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlRyeWluZyB0byBzZXQgYW4gdW5rbm93biBldmVudDogXCIgKyB0eXBlKTtcblx0XHR9XG5cblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIGNoYW5uZWwgZm9yIHRoZSBldmVudC4gTXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDE1LCBpbmNsdXNpdmUuXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBjaGFubmVsIC0gVGhlIGV2ZW50IGNoYW5uZWwuXG5cdCAqL1xuXHRNaWRpRXZlbnQucHJvdG90eXBlLnNldENoYW5uZWwgPSBmdW5jdGlvbihjaGFubmVsKSB7XG5cdFx0aWYgKGNoYW5uZWwgPCAwIHx8IGNoYW5uZWwgPiAxNSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2hhbm5lbCBpcyBvdXQgb2YgYm91bmRzLlwiKTtcblx0XHR9XG5cblx0XHR0aGlzLmNoYW5uZWwgPSBjaGFubmVsO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIGZpcnN0IHBhcmFtZXRlciBmb3IgdGhlIGV2ZW50LiBNdXN0IGJlIGJldHdlZW4gMCBhbmQgMjU1LFxuXHQgKiBpbmNsdXNpdmUuXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBwIC0gVGhlIGZpcnN0IGV2ZW50IHBhcmFtZXRlciB2YWx1ZS5cblx0ICovXG5cdE1pZGlFdmVudC5wcm90b3R5cGUuc2V0UGFyYW0xID0gZnVuY3Rpb24ocCkge1xuXHRcdHRoaXMucGFyYW0xID0gcDtcblx0fTtcblxuXHQvKipcblx0ICogU2V0IHRoZSBzZWNvbmQgcGFyYW1ldGVyIGZvciB0aGUgZXZlbnQuIE11c3QgYmUgYmV0d2VlbiAwIGFuZCAyNTUsXG5cdCAqIGluY2x1c2l2ZS5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHAgLSBUaGUgc2Vjb25kIGV2ZW50IHBhcmFtZXRlciB2YWx1ZS5cblx0ICovXG5cdE1pZGlFdmVudC5wcm90b3R5cGUuc2V0UGFyYW0yID0gZnVuY3Rpb24ocCkge1xuXHRcdHRoaXMucGFyYW0yID0gcDtcblx0fTtcblxuXHQvKipcblx0ICogU2VyaWFsaXplIHRoZSBldmVudCB0byBhbiBhcnJheSBvZiBieXRlcy5cblx0ICpcblx0ICogQHJldHVybnMge0FycmF5fSBUaGUgYXJyYXkgb2Ygc2VyaWFsaXplZCBieXRlcy5cblx0ICovXG5cdE1pZGlFdmVudC5wcm90b3R5cGUudG9CeXRlcyA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBieXRlQXJyYXkgPSBbXTtcblxuXHRcdHZhciB0eXBlQ2hhbm5lbEJ5dGUgPSB0aGlzLnR5cGUgfCAodGhpcy5jaGFubmVsICYgMHhGKTtcblxuXHRcdGJ5dGVBcnJheS5wdXNoLmFwcGx5KGJ5dGVBcnJheSwgdGhpcy50aW1lKTtcblx0XHRieXRlQXJyYXkucHVzaCh0eXBlQ2hhbm5lbEJ5dGUpO1xuXHRcdGJ5dGVBcnJheS5wdXNoKHRoaXMucGFyYW0xKTtcblxuXHRcdC8vIFNvbWUgZXZlbnRzIGRvbid0IGhhdmUgYSBzZWNvbmQgcGFyYW1ldGVyXG5cdFx0aWYgKHRoaXMucGFyYW0yICE9PSB1bmRlZmluZWQgJiYgdGhpcy5wYXJhbTIgIT09IG51bGwpIHtcblx0XHRcdGJ5dGVBcnJheS5wdXNoKHRoaXMucGFyYW0yKTtcblx0XHR9XG5cdFx0cmV0dXJuIGJ5dGVBcnJheTtcblx0fTtcblxuXHQvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0ICogTWV0YUV2ZW50IGNsYXNzXG5cdCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuXHQvKipcblx0ICogQ29uc3RydWN0IGEgbWV0YSBldmVudC5cblx0ICpcblx0ICogUGFyYW1ldGVycyBpbmNsdWRlOlxuXHQgKiAgLSB0aW1lIFtvcHRpb25hbCBudW1iZXJdIC0gVGlja3Mgc2luY2UgcHJldmlvdXMgZXZlbnQuXG5cdCAqICAtIHR5cGUgW3JlcXVpcmVkIG51bWJlcl0gLSBUeXBlIG9mIGV2ZW50LlxuXHQgKiAgLSBkYXRhIFtvcHRpb25hbCBhcnJheXxzdHJpbmddIC0gRXZlbnQgZGF0YS5cblx0ICovXG5cdHZhciBNZXRhRXZlbnQgPSBmdW5jdGlvbihwYXJhbXMpIHtcblx0XHRpZiAoIXRoaXMpIHJldHVybiBuZXcgTWV0YUV2ZW50KHBhcmFtcyk7XG5cdFx0dmFyIHAgPSBwYXJhbXMgfHwge307XG5cdFx0dGhpcy5zZXRUaW1lKHBhcmFtcy50aW1lKTtcblx0XHR0aGlzLnNldFR5cGUocGFyYW1zLnR5cGUpO1xuXHRcdHRoaXMuc2V0RGF0YShwYXJhbXMuZGF0YSk7XG5cdH07XG5cblx0TWV0YUV2ZW50LlNFUVVFTkNFICAgPSAweDAwO1xuXHRNZXRhRXZlbnQuVEVYVCAgICAgICA9IDB4MDE7XG5cdE1ldGFFdmVudC5DT1BZUklHSFQgID0gMHgwMjtcblx0TWV0YUV2ZW50LlRSQUNLX05BTUUgPSAweDAzO1xuXHRNZXRhRXZlbnQuSU5TVFJVTUVOVCA9IDB4MDQ7XG5cdE1ldGFFdmVudC5MWVJJQyAgICAgID0gMHgwNTtcblx0TWV0YUV2ZW50Lk1BUktFUiAgICAgPSAweDA2O1xuXHRNZXRhRXZlbnQuQ1VFX1BPSU5UICA9IDB4MDc7XG5cdE1ldGFFdmVudC5DSEFOTkVMX1BSRUZJWCA9IDB4MjA7XG5cdE1ldGFFdmVudC5FTkRfT0ZfVFJBQ0sgICA9IDB4MmY7XG5cdE1ldGFFdmVudC5URU1QTyAgICAgID0gMHg1MTtcblx0TWV0YUV2ZW50LlNNUFRFICAgICAgPSAweDU0O1xuXHRNZXRhRXZlbnQuVElNRV9TSUcgICA9IDB4NTg7XG5cdE1ldGFFdmVudC5LRVlfU0lHICAgID0gMHg1OTtcblx0TWV0YUV2ZW50LlNFUV9FVkVOVCAgPSAweDdmO1xuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIHRpbWUgZm9yIHRoZSBldmVudCBpbiB0aWNrcyBzaW5jZSB0aGUgcHJldmlvdXMgZXZlbnQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0aWNrcyAtIFRoZSBudW1iZXIgb2YgdGlja3Mgc2luY2UgdGhlIHByZXZpb3VzIGV2ZW50LiBNYXlcblx0ICogYmUgemVyby5cblx0ICovXG5cdE1ldGFFdmVudC5wcm90b3R5cGUuc2V0VGltZSA9IGZ1bmN0aW9uKHRpY2tzKSB7XG5cdFx0dGhpcy50aW1lID0gVXRpbC50cmFuc2xhdGVUaWNrVGltZSh0aWNrcyB8fCAwKTtcblx0fTtcblxuXHQvKipcblx0ICogU2V0IHRoZSB0eXBlIG9mIHRoZSBldmVudC4gTXVzdCBiZSBvbmUgb2YgdGhlIGV2ZW50IGNvZGVzIG9uIE1ldGFFdmVudC5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHQgLSBFdmVudCB0eXBlLlxuXHQgKi9cblx0TWV0YUV2ZW50LnByb3RvdHlwZS5zZXRUeXBlID0gZnVuY3Rpb24odCkge1xuXHRcdHRoaXMudHlwZSA9IHQ7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNldCB0aGUgZGF0YSBhc3NvY2lhdGVkIHdpdGggdGhlIGV2ZW50LiBNYXkgYmUgYSBzdHJpbmcgb3IgYXJyYXkgb2YgYnl0ZVxuXHQgKiB2YWx1ZXMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfEFycmF5fSBkIC0gRXZlbnQgZGF0YS5cblx0ICovXG5cdE1ldGFFdmVudC5wcm90b3R5cGUuc2V0RGF0YSA9IGZ1bmN0aW9uKGQpIHtcblx0XHR0aGlzLmRhdGEgPSBkO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXJpYWxpemUgdGhlIGV2ZW50IHRvIGFuIGFycmF5IG9mIGJ5dGVzLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IFRoZSBhcnJheSBvZiBzZXJpYWxpemVkIGJ5dGVzLlxuXHQgKi9cblx0TWV0YUV2ZW50LnByb3RvdHlwZS50b0J5dGVzID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCF0aGlzLnR5cGUpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlR5cGUgZm9yIG1ldGEtZXZlbnQgbm90IHNwZWNpZmllZC5cIik7XG5cdFx0fVxuXG5cdFx0dmFyIGJ5dGVBcnJheSA9IFtdO1xuXHRcdGJ5dGVBcnJheS5wdXNoLmFwcGx5KGJ5dGVBcnJheSwgdGhpcy50aW1lKTtcblx0XHRieXRlQXJyYXkucHVzaCgweEZGLCB0aGlzLnR5cGUpO1xuXG5cdFx0Ly8gSWYgZGF0YSBpcyBhbiBhcnJheSwgd2UgYXNzdW1lIHRoYXQgaXQgY29udGFpbnMgc2V2ZXJhbCBieXRlcy4gV2Vcblx0XHQvLyBhcGVuZCB0aGVtIHRvIGJ5dGVBcnJheS5cblx0XHRpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmRhdGEpKSB7XG5cdFx0XHRieXRlQXJyYXkucHVzaCh0aGlzLmRhdGEubGVuZ3RoKTtcblx0XHRcdGJ5dGVBcnJheS5wdXNoLmFwcGx5KGJ5dGVBcnJheSwgdGhpcy5kYXRhKTtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLmRhdGEgPT0gJ251bWJlcicpIHtcblx0XHRcdGJ5dGVBcnJheS5wdXNoKDEsIHRoaXMuZGF0YSk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLmRhdGEgIT09IG51bGwgJiYgdGhpcy5kYXRhICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdC8vIGFzc3VtZSBzdHJpbmc7IG1heSBiZSBhIGJhZCBhc3N1bXB0aW9uXG5cdFx0XHRieXRlQXJyYXkucHVzaCh0aGlzLmRhdGEubGVuZ3RoKTtcblx0XHRcdHZhciBkYXRhQnl0ZXMgPSB0aGlzLmRhdGEuc3BsaXQoJycpLm1hcChmdW5jdGlvbih4KXsgcmV0dXJuIHguY2hhckNvZGVBdCgwKSB9KTtcblx0XHRcdGJ5dGVBcnJheS5wdXNoLmFwcGx5KGJ5dGVBcnJheSwgZGF0YUJ5dGVzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ynl0ZUFycmF5LnB1c2goMCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGJ5dGVBcnJheTtcblx0fTtcblxuXHQvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0ICogVHJhY2sgY2xhc3Ncblx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG5cdC8qKlxuXHQgKiBDb25zdHJ1Y3QgYSBNSURJIHRyYWNrLlxuXHQgKlxuXHQgKiBQYXJhbWV0ZXJzIGluY2x1ZGU6XG5cdCAqICAtIGV2ZW50cyBbb3B0aW9uYWwgYXJyYXldIC0gQXJyYXkgb2YgZXZlbnRzIGZvciB0aGUgdHJhY2suXG5cdCAqL1xuXHR2YXIgVHJhY2sgPSBmdW5jdGlvbihjb25maWcpIHtcblx0XHRpZiAoIXRoaXMpIHJldHVybiBuZXcgVHJhY2soY29uZmlnKTtcblx0XHR2YXIgYyA9IGNvbmZpZyB8fCB7fTtcblx0XHR0aGlzLmV2ZW50cyA9IGMuZXZlbnRzIHx8IFtdO1xuXHR9O1xuXG5cdFRyYWNrLlNUQVJUX0JZVEVTID0gWzB4NGQsIDB4NTQsIDB4NzIsIDB4NmJdO1xuXHRUcmFjay5FTkRfQllURVMgICA9IFsweDAwLCAweEZGLCAweDJGLCAweDAwXTtcblxuXHQvKipcblx0ICogQWRkIGFuIGV2ZW50IHRvIHRoZSB0cmFjay5cblx0ICpcblx0ICogQHBhcmFtIHtNaWRpRXZlbnR8TWV0YUV2ZW50fSBldmVudCAtIFRoZSBldmVudCB0byBhZGQuXG5cdCAqIEByZXR1cm5zIHtUcmFja30gVGhlIGN1cnJlbnQgdHJhY2suXG5cdCAqL1xuXHRUcmFjay5wcm90b3R5cGUuYWRkRXZlbnQgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdHRoaXMuZXZlbnRzLnB1c2goZXZlbnQpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBBZGQgYSBub3RlLW9uIGV2ZW50IHRvIHRoZSB0cmFjay5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGNoYW5uZWwgLSBUaGUgY2hhbm5lbCB0byBhZGQgdGhlIGV2ZW50IHRvLlxuXHQgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IHBpdGNoIC0gVGhlIHBpdGNoIG9mIHRoZSBub3RlLCBlaXRoZXIgbnVtZXJpYyBvclxuXHQgKiBzeW1ib2xpYy5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lPTBdIC0gVGhlIG51bWJlciBvZiB0aWNrcyBzaW5jZSB0aGUgcHJldmlvdXMgZXZlbnQsXG5cdCAqIGRlZmF1bHRzIHRvIDAuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbdmVsb2NpdHk9OTBdIC0gVGhlIHZvbHVtZSBmb3IgdGhlIG5vdGUsIGRlZmF1bHRzIHRvXG5cdCAqIERFRkFVTFRfVk9MVU1FLlxuXHQgKiBAcmV0dXJucyB7VHJhY2t9IFRoZSBjdXJyZW50IHRyYWNrLlxuXHQgKi9cblx0VHJhY2sucHJvdG90eXBlLmFkZE5vdGVPbiA9IFRyYWNrLnByb3RvdHlwZS5ub3RlT24gPSBmdW5jdGlvbihjaGFubmVsLCBwaXRjaCwgdGltZSwgdmVsb2NpdHkpIHtcblx0XHR0aGlzLmV2ZW50cy5wdXNoKG5ldyBNaWRpRXZlbnQoe1xuXHRcdFx0dHlwZTogTWlkaUV2ZW50Lk5PVEVfT04sXG5cdFx0XHRjaGFubmVsOiBjaGFubmVsLFxuXHRcdFx0cGFyYW0xOiBVdGlsLmVuc3VyZU1pZGlQaXRjaChwaXRjaCksXG5cdFx0XHRwYXJhbTI6IHZlbG9jaXR5IHx8IERFRkFVTFRfVk9MVU1FLFxuXHRcdFx0dGltZTogdGltZSB8fCAwLFxuXHRcdH0pKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHQvKipcblx0ICogQWRkIGEgbm90ZS1vZmYgZXZlbnQgdG8gdGhlIHRyYWNrLlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gY2hhbm5lbCAtIFRoZSBjaGFubmVsIHRvIGFkZCB0aGUgZXZlbnQgdG8uXG5cdCAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gcGl0Y2ggLSBUaGUgcGl0Y2ggb2YgdGhlIG5vdGUsIGVpdGhlciBudW1lcmljIG9yXG5cdCAqIHN5bWJvbGljLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gW3RpbWU9MF0gLSBUaGUgbnVtYmVyIG9mIHRpY2tzIHNpbmNlIHRoZSBwcmV2aW91cyBldmVudCxcblx0ICogZGVmYXVsdHMgdG8gMC5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFt2ZWxvY2l0eT05MF0gLSBUaGUgdmVsb2NpdHkgdGhlIG5vdGUgd2FzIHJlbGVhc2VkLFxuXHQgKiBkZWZhdWx0cyB0byBERUZBVUxUX1ZPTFVNRS5cblx0ICogQHJldHVybnMge1RyYWNrfSBUaGUgY3VycmVudCB0cmFjay5cblx0ICovXG5cdFRyYWNrLnByb3RvdHlwZS5hZGROb3RlT2ZmID0gVHJhY2sucHJvdG90eXBlLm5vdGVPZmYgPSBmdW5jdGlvbihjaGFubmVsLCBwaXRjaCwgdGltZSwgdmVsb2NpdHkpIHtcblx0XHR0aGlzLmV2ZW50cy5wdXNoKG5ldyBNaWRpRXZlbnQoe1xuXHRcdFx0dHlwZTogTWlkaUV2ZW50Lk5PVEVfT0ZGLFxuXHRcdFx0Y2hhbm5lbDogY2hhbm5lbCxcblx0XHRcdHBhcmFtMTogVXRpbC5lbnN1cmVNaWRpUGl0Y2gocGl0Y2gpLFxuXHRcdFx0cGFyYW0yOiB2ZWxvY2l0eSB8fCBERUZBVUxUX1ZPTFVNRSxcblx0XHRcdHRpbWU6IHRpbWUgfHwgMCxcblx0XHR9KSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0LyoqXG5cdCAqIEFkZCBhIG5vdGUtb24gYW5kIC1vZmYgZXZlbnQgdG8gdGhlIHRyYWNrLlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gY2hhbm5lbCAtIFRoZSBjaGFubmVsIHRvIGFkZCB0aGUgZXZlbnQgdG8uXG5cdCAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gcGl0Y2ggLSBUaGUgcGl0Y2ggb2YgdGhlIG5vdGUsIGVpdGhlciBudW1lcmljIG9yXG5cdCAqIHN5bWJvbGljLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gZHVyIC0gVGhlIGR1cmF0aW9uIG9mIHRoZSBub3RlLCBpbiB0aWNrcy5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lPTBdIC0gVGhlIG51bWJlciBvZiB0aWNrcyBzaW5jZSB0aGUgcHJldmlvdXMgZXZlbnQsXG5cdCAqIGRlZmF1bHRzIHRvIDAuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbdmVsb2NpdHk9OTBdIC0gVGhlIHZlbG9jaXR5IHRoZSBub3RlIHdhcyByZWxlYXNlZCxcblx0ICogZGVmYXVsdHMgdG8gREVGQVVMVF9WT0xVTUUuXG5cdCAqIEByZXR1cm5zIHtUcmFja30gVGhlIGN1cnJlbnQgdHJhY2suXG5cdCAqL1xuXHRUcmFjay5wcm90b3R5cGUuYWRkTm90ZSA9IFRyYWNrLnByb3RvdHlwZS5ub3RlID0gZnVuY3Rpb24oY2hhbm5lbCwgcGl0Y2gsIGR1ciwgdGltZSwgdmVsb2NpdHkpIHtcblx0XHR0aGlzLm5vdGVPbihjaGFubmVsLCBwaXRjaCwgdGltZSwgdmVsb2NpdHkpO1xuXHRcdGlmIChkdXIpIHtcblx0XHRcdHRoaXMubm90ZU9mZihjaGFubmVsLCBwaXRjaCwgZHVyLCB2ZWxvY2l0eSk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBBZGQgYSBub3RlLW9uIGFuZCAtb2ZmIGV2ZW50IHRvIHRoZSB0cmFjayBmb3IgZWFjaCBwaXRjaCBpbiBhbiBhcnJheSBvZiBwaXRjaGVzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gY2hhbm5lbCAtIFRoZSBjaGFubmVsIHRvIGFkZCB0aGUgZXZlbnQgdG8uXG5cdCAqIEBwYXJhbSB7YXJyYXl9IGNob3JkIC0gQW4gYXJyYXkgb2YgcGl0Y2hlcywgZWl0aGVyIG51bWVyaWMgb3Jcblx0ICogc3ltYm9saWMuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBkdXIgLSBUaGUgZHVyYXRpb24gb2YgdGhlIGNob3JkLCBpbiB0aWNrcy5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFt2ZWxvY2l0eT05MF0gLSBUaGUgdmVsb2NpdHkgb2YgdGhlIGNob3JkLFxuXHQgKiBkZWZhdWx0cyB0byBERUZBVUxUX1ZPTFVNRS5cblx0ICogQHJldHVybnMge1RyYWNrfSBUaGUgY3VycmVudCB0cmFjay5cblx0ICovXG5cdFRyYWNrLnByb3RvdHlwZS5hZGRDaG9yZCA9IFRyYWNrLnByb3RvdHlwZS5jaG9yZCA9IGZ1bmN0aW9uKGNoYW5uZWwsIGNob3JkLCBkdXIsIHZlbG9jaXR5KSB7XG5cdFx0aWYgKCFBcnJheS5pc0FycmF5KGNob3JkKSAmJiAhY2hvcmQubGVuZ3RoKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0Nob3JkIG11c3QgYmUgYW4gYXJyYXkgb2YgcGl0Y2hlcycpO1xuXHRcdH1cblx0XHRjaG9yZC5mb3JFYWNoKGZ1bmN0aW9uKG5vdGUpIHtcblx0XHRcdHRoaXMubm90ZU9uKGNoYW5uZWwsIG5vdGUsIDAsIHZlbG9jaXR5KTtcblx0XHR9LCB0aGlzKTtcblx0XHRjaG9yZC5mb3JFYWNoKGZ1bmN0aW9uKG5vdGUsIGluZGV4KSB7XG5cdFx0XHRpZiAoaW5kZXggPT09IDApIHtcblx0XHRcdFx0dGhpcy5ub3RlT2ZmKGNoYW5uZWwsIG5vdGUsIGR1cik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLm5vdGVPZmYoY2hhbm5lbCwgbm90ZSk7XG5cdFx0XHR9XG5cdFx0fSwgdGhpcyk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNldCBpbnN0cnVtZW50IGZvciB0aGUgdHJhY2suXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBjaGFubmVsIC0gVGhlIGNoYW5uZWwgdG8gc2V0IHRoZSBpbnN0cnVtZW50IG9uLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gaW5zdHJ1bWVudCAtIFRoZSBpbnN0cnVtZW50IHRvIHNldCBpdCB0by5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lPTBdIC0gVGhlIG51bWJlciBvZiB0aWNrcyBzaW5jZSB0aGUgcHJldmlvdXMgZXZlbnQsXG5cdCAqIGRlZmF1bHRzIHRvIDAuXG5cdCAqIEByZXR1cm5zIHtUcmFja30gVGhlIGN1cnJlbnQgdHJhY2suXG5cdCAqL1xuXHRUcmFjay5wcm90b3R5cGUuc2V0SW5zdHJ1bWVudCA9IFRyYWNrLnByb3RvdHlwZS5pbnN0cnVtZW50ID0gZnVuY3Rpb24oY2hhbm5lbCwgaW5zdHJ1bWVudCwgdGltZSkge1xuXHRcdHRoaXMuZXZlbnRzLnB1c2gobmV3IE1pZGlFdmVudCh7XG5cdFx0XHR0eXBlOiBNaWRpRXZlbnQuUFJPR1JBTV9DSEFOR0UsXG5cdFx0XHRjaGFubmVsOiBjaGFubmVsLFxuXHRcdFx0cGFyYW0xOiBpbnN0cnVtZW50LFxuXHRcdFx0dGltZTogdGltZSB8fCAwLFxuXHRcdH0pKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHQvKipcblx0ICogU2V0IHRoZSB0ZW1wbyBmb3IgdGhlIHRyYWNrLlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gYnBtIC0gVGhlIG5ldyBudW1iZXIgb2YgYmVhdHMgcGVyIG1pbnV0ZS5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lPTBdIC0gVGhlIG51bWJlciBvZiB0aWNrcyBzaW5jZSB0aGUgcHJldmlvdXMgZXZlbnQsXG5cdCAqIGRlZmF1bHRzIHRvIDAuXG5cdCAqIEByZXR1cm5zIHtUcmFja30gVGhlIGN1cnJlbnQgdHJhY2suXG5cdCAqL1xuXHRUcmFjay5wcm90b3R5cGUuc2V0VGVtcG8gPSBUcmFjay5wcm90b3R5cGUudGVtcG8gPSBmdW5jdGlvbihicG0sIHRpbWUpIHtcblx0XHR0aGlzLmV2ZW50cy5wdXNoKG5ldyBNZXRhRXZlbnQoe1xuXHRcdFx0dHlwZTogTWV0YUV2ZW50LlRFTVBPLFxuXHRcdFx0ZGF0YTogVXRpbC5tcHFuRnJvbUJwbShicG0pLFxuXHRcdFx0dGltZTogdGltZSB8fCAwLFxuXHRcdH0pKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHQvKipcblx0ICogU2VyaWFsaXplIHRoZSB0cmFjayB0byBhbiBhcnJheSBvZiBieXRlcy5cblx0ICpcblx0ICogQHJldHVybnMge0FycmF5fSBUaGUgYXJyYXkgb2Ygc2VyaWFsaXplZCBieXRlcy5cblx0ICovXG5cdFRyYWNrLnByb3RvdHlwZS50b0J5dGVzID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHRyYWNrTGVuZ3RoID0gMDtcblx0XHR2YXIgZXZlbnRCeXRlcyA9IFtdO1xuXHRcdHZhciBzdGFydEJ5dGVzID0gVHJhY2suU1RBUlRfQllURVM7XG5cdFx0dmFyIGVuZEJ5dGVzICAgPSBUcmFjay5FTkRfQllURVM7XG5cblx0XHR2YXIgYWRkRXZlbnRCeXRlcyA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHR2YXIgYnl0ZXMgPSBldmVudC50b0J5dGVzKCk7XG5cdFx0XHR0cmFja0xlbmd0aCArPSBieXRlcy5sZW5ndGg7XG5cdFx0XHRldmVudEJ5dGVzLnB1c2guYXBwbHkoZXZlbnRCeXRlcywgYnl0ZXMpO1xuXHRcdH07XG5cblx0XHR0aGlzLmV2ZW50cy5mb3JFYWNoKGFkZEV2ZW50Qnl0ZXMpO1xuXG5cdFx0Ly8gQWRkIHRoZSBlbmQtb2YtdHJhY2sgYnl0ZXMgdG8gdGhlIHN1bSBvZiBieXRlcyBmb3IgdGhlIHRyYWNrLCBzaW5jZVxuXHRcdC8vIHRoZXkgYXJlIGNvdW50ZWQgKHVubGlrZSB0aGUgc3RhcnQtb2YtdHJhY2sgb25lcykuXG5cdFx0dHJhY2tMZW5ndGggKz0gZW5kQnl0ZXMubGVuZ3RoO1xuXG5cdFx0Ly8gTWFrZXMgc3VyZSB0aGF0IHRyYWNrIGxlbmd0aCB3aWxsIGZpbGwgdXAgNCBieXRlcyB3aXRoIDBzIGluIGNhc2Vcblx0XHQvLyB0aGUgbGVuZ3RoIGlzIGxlc3MgdGhhbiB0aGF0ICh0aGUgdXN1YWwgY2FzZSkuXG5cdFx0dmFyIGxlbmd0aEJ5dGVzID0gVXRpbC5zdHIyQnl0ZXModHJhY2tMZW5ndGgudG9TdHJpbmcoMTYpLCA0KTtcblxuXHRcdHJldHVybiBzdGFydEJ5dGVzLmNvbmNhdChsZW5ndGhCeXRlcywgZXZlbnRCeXRlcywgZW5kQnl0ZXMpO1xuXHR9O1xuXG5cdC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXHQgKiBGaWxlIGNsYXNzXG5cdCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuXHQvKipcblx0ICogQ29uc3RydWN0IGEgZmlsZSBvYmplY3QuXG5cdCAqXG5cdCAqIFBhcmFtZXRlcnMgaW5jbHVkZTpcblx0ICogIC0gdGlja3MgW29wdGlvbmFsIG51bWJlcl0gLSBOdW1iZXIgb2YgdGlja3MgcGVyIGJlYXQsIGRlZmF1bHRzIHRvIDEyOC5cblx0ICogICAgTXVzdCBiZSAxLTMyNzY3LlxuXHQgKiAgLSB0cmFja3MgW29wdGlvbmFsIGFycmF5XSAtIFRyYWNrIGRhdGEuXG5cdCAqL1xuXHR2YXIgRmlsZSA9IGZ1bmN0aW9uKGNvbmZpZyl7XG5cdFx0aWYgKCF0aGlzKSByZXR1cm4gbmV3IEZpbGUoY29uZmlnKTtcblxuXHRcdHZhciBjID0gY29uZmlnIHx8IHt9O1xuXHRcdGlmIChjLnRpY2tzKSB7XG5cdFx0XHRpZiAodHlwZW9mIGMudGlja3MgIT09ICdudW1iZXInKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignVGlja3MgcGVyIGJlYXQgbXVzdCBiZSBhIG51bWJlciEnKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGMudGlja3MgPD0gMCB8fCBjLnRpY2tzID49ICgxIDw8IDE1KSB8fCBjLnRpY2tzICUgMSAhPT0gMCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RpY2tzIHBlciBiZWF0IG11c3QgYmUgYW4gaW50ZWdlciBiZXR3ZWVuIDEgYW5kIDMyNzY3IScpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy50aWNrcyA9IGMudGlja3MgfHwgMTI4O1xuXHRcdHRoaXMudHJhY2tzID0gYy50cmFja3MgfHwgW107XG5cdH07XG5cblx0RmlsZS5IRFJfQ0hVTktJRCAgICAgPSBcIk1UaGRcIjsgICAgICAgICAgICAgLy8gRmlsZSBtYWdpYyBjb29raWVcblx0RmlsZS5IRFJfQ0hVTktfU0laRSAgPSBcIlxceDAwXFx4MDBcXHgwMFxceDA2XCI7IC8vIEhlYWRlciBsZW5ndGggZm9yIFNNRlxuXHRGaWxlLkhEUl9UWVBFMCAgICAgICA9IFwiXFx4MDBcXHgwMFwiOyAgICAgICAgIC8vIE1pZGkgVHlwZSAwIGlkXG5cdEZpbGUuSERSX1RZUEUxICAgICAgID0gXCJcXHgwMFxceDAxXCI7ICAgICAgICAgLy8gTWlkaSBUeXBlIDEgaWRcblxuXHQvKipcblx0ICogQWRkIGEgdHJhY2sgdG8gdGhlIGZpbGUuXG5cdCAqXG5cdCAqIEBwYXJhbSB7VHJhY2t9IHRyYWNrIC0gVGhlIHRyYWNrIHRvIGFkZC5cblx0ICovXG5cdEZpbGUucHJvdG90eXBlLmFkZFRyYWNrID0gZnVuY3Rpb24odHJhY2spIHtcblx0XHRpZiAodHJhY2spIHtcblx0XHRcdHRoaXMudHJhY2tzLnB1c2godHJhY2spO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRyYWNrID0gbmV3IFRyYWNrKCk7XG5cdFx0XHR0aGlzLnRyYWNrcy5wdXNoKHRyYWNrKTtcblx0XHRcdHJldHVybiB0cmFjaztcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIFNlcmlhbGl6ZSB0aGUgTUlESSBmaWxlIHRvIGFuIGFycmF5IG9mIGJ5dGVzLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IFRoZSBhcnJheSBvZiBzZXJpYWxpemVkIGJ5dGVzLlxuXHQgKi9cblx0RmlsZS5wcm90b3R5cGUudG9CeXRlcyA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciB0cmFja0NvdW50ID0gdGhpcy50cmFja3MubGVuZ3RoLnRvU3RyaW5nKDE2KTtcblxuXHRcdC8vIHByZXBhcmUgdGhlIGZpbGUgaGVhZGVyXG5cdFx0dmFyIGJ5dGVzID0gRmlsZS5IRFJfQ0hVTktJRCArIEZpbGUuSERSX0NIVU5LX1NJWkU7XG5cblx0XHQvLyBzZXQgTWlkaSB0eXBlIGJhc2VkIG9uIG51bWJlciBvZiB0cmFja3Ncblx0XHRpZiAocGFyc2VJbnQodHJhY2tDb3VudCwgMTYpID4gMSkge1xuXHRcdFx0Ynl0ZXMgKz0gRmlsZS5IRFJfVFlQRTE7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGJ5dGVzICs9IEZpbGUuSERSX1RZUEUwO1xuXHRcdH1cblxuXHRcdC8vIGFkZCB0aGUgbnVtYmVyIG9mIHRyYWNrcyAoMiBieXRlcylcblx0XHRieXRlcyArPSBVdGlsLmNvZGVzMlN0cihVdGlsLnN0cjJCeXRlcyh0cmFja0NvdW50LCAyKSk7XG5cdFx0Ly8gYWRkIHRoZSBudW1iZXIgb2YgdGlja3MgcGVyIGJlYXQgKGN1cnJlbnRseSBoYXJkY29kZWQpXG5cdFx0Ynl0ZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgodGhpcy50aWNrcy8yNTYpLCAgdGhpcy50aWNrcyUyNTYpOztcblxuXHRcdC8vIGl0ZXJhdGUgb3ZlciB0aGUgdHJhY2tzLCBjb252ZXJ0aW5nIHRvIGJ5dGVzIHRvb1xuXHRcdHRoaXMudHJhY2tzLmZvckVhY2goZnVuY3Rpb24odHJhY2spIHtcblx0XHRcdGJ5dGVzICs9IFV0aWwuY29kZXMyU3RyKHRyYWNrLnRvQnl0ZXMoKSk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gYnl0ZXM7XG5cdH07XG5cblx0LyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdCAqIEV4cG9ydHNcblx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG5cdGV4cG9ydGVkLlV0aWwgPSBVdGlsO1xuXHRleHBvcnRlZC5GaWxlID0gRmlsZTtcblx0ZXhwb3J0ZWQuVHJhY2sgPSBUcmFjaztcblx0ZXhwb3J0ZWQuRXZlbnQgPSBNaWRpRXZlbnQ7XG5cdGV4cG9ydGVkLk1ldGFFdmVudCA9IE1ldGFFdmVudDtcblxufSkoIE1pZGkgKTtcblxuaWYgKHR5cGVvZiBtb2R1bGUgIT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlICE9PSBudWxsKSB7XG5cdG1vZHVsZS5leHBvcnRzID0gTWlkaTtcbn0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT0gJ3VuZGVmaW5lZCcgJiYgZXhwb3J0cyAhPT0gbnVsbCkge1xuXHRleHBvcnRzID0gTWlkaTtcbn0gZWxzZSB7XG5cdHRoaXMuTWlkaSA9IE1pZGk7XG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLnJlZHVjZSgocHJldiwgY3VyKSA9PiBwcmV2LmNvbmNhdChjdXIpLCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBlYXQodmFsdWUsIHRpbWVzKSB7XG4gIGNvbnN0IG91dCA9IFtdO1xuXG4gIHdoaWxlICh0aW1lcykge1xuICAgIG91dC5wdXNoKHZhbHVlKTtcbiAgICB0aW1lcyAtPSAxO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmdlKG1pbiwgbWF4LCBzdGVwKSB7XG4gIGNvbnN0IGFjYyA9IFtdO1xuXG4gIGlmICghc3RlcCkge1xuICAgIGZvciAobGV0IGkgPSBtaW47IGkgPD0gbWF4OyBpICs9IDEpIHtcbiAgICAgIGFjYy5wdXNoKGkpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBkaWZmID0gKG1heCAtIG1pbikgLyBzdGVwO1xuXG4gICAgZm9yIChsZXQgaSA9IG1pbjsgaSA8PSBtYXg7IGkgKz0gZGlmZikge1xuICAgICAgYWNjLnB1c2goaSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFjYztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKHZhbHVlKSB7XG4gIGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JykgcmV0dXJuIHZhbHVlO1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHJldHVybiB2YWx1ZS5tYXAoY2xvbmUpO1xuXG4gIGNvbnN0IGNvcHkgPSB7fTtcblxuICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaChrZXkgPT4ge1xuICAgIGNvcHlba2V5XSA9IGNsb25lKHZhbHVlW2tleV0pO1xuICB9KTtcblxuICByZXR1cm4gY29weTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHppcChhLCBiLCBjYikge1xuICBjb25zdCBtYXggPSBNYXRoLm1heChhLmxlbmd0aCwgYi5sZW5ndGgpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4OyBpICs9IDEpIHtcbiAgICBpZiAodHlwZW9mIGFbaV0gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBiW2ldICE9PSAndW5kZWZpbmVkJykgY2IoYVtpXSwgYltpXSk7XG4gIH1cbn1cbiIsICIoKCk9PntcInVzZSBzdHJpY3RcIjt2YXIgbj17NDEzOm49PntuLmV4cG9ydHM9SlNPTi5wYXJzZSgne1wiNXRoXCI6XCIxMDAwMDAwMTAwMDBcIixcIk03IzVzdXM0XCI6XCIxMDAwMDEwMDEwMDFcIixcIjcjNXN1czRcIjpcIjEwMDAwMTAwMTAxMFwiLFwic3VzNFwiOlwiMTAwMDAxMDEwMDAwXCIsXCJNN3N1czRcIjpcIjEwMDAwMTAxMDAwMVwiLFwiN3N1czRcIjpcIjEwMDAwMTAxMDAxMFwiLFwiN25vNVwiOlwiMTAwMDEwMDAwMDEwXCIsXCJhdWdcIjpcIjEwMDAxMDAwMTAwMFwiLFwiTTdiNlwiOlwiMTAwMDEwMDAxMDAxXCIsXCJtYWo3IzVcIjpcIjEwMDAxMDAwMTAwMVwiLFwiNyM1XCI6XCIxMDAwMTAwMDEwMTBcIixcIjdiMTNcIjpcIjEwMDAxMDAwMTAxMFwiLFwiTVwiOlwiMTAwMDEwMDEwMDAwXCIsXCJtYWo3XCI6XCIxMDAwMTAwMTAwMDFcIixcIjd0aFwiOlwiMTAwMDEwMDEwMDEwXCIsXCI2dGhcIjpcIjEwMDAxMDAxMDEwMFwiLFwiN2FkZDZcIjpcIjEwMDAxMDAxMDExMFwiLFwiN2I2XCI6XCIxMDAwMTAwMTEwMTBcIixcIk1iNVwiOlwiMTAwMDEwMTAwMDAwXCIsXCJNN2I1XCI6XCIxMDAwMTAxMDAwMDFcIixcIjdiNVwiOlwiMTAwMDEwMTAwMDEwXCIsXCJtYWojNFwiOlwiMTAwMDEwMTEwMDAxXCIsXCI3IzExXCI6XCIxMDAwMTAxMTAwMTBcIixcIk02IzExXCI6XCIxMDAwMTAxMTAxMDBcIixcIjcjMTFiMTNcIjpcIjEwMDAxMDExMTAxMFwiLFwibSM1XCI6XCIxMDAxMDAwMDEwMDBcIixcIm1iNk03XCI6XCIxMDAxMDAwMDEwMDFcIixcIm03IzVcIjpcIjEwMDEwMDAwMTAxMFwiLFwibVwiOlwiMTAwMTAwMDEwMDAwXCIsXCJtL21hN1wiOlwiMTAwMTAwMDEwMDAxXCIsXCJtN1wiOlwiMTAwMTAwMDEwMDEwXCIsXCJtNlwiOlwiMTAwMTAwMDEwMTAwXCIsXCJtTWFqN2I2XCI6XCIxMDAxMDAwMTEwMDFcIixcImRpbVwiOlwiMTAwMTAwMTAwMDAwXCIsXCJvTTdcIjpcIjEwMDEwMDEwMDAwMVwiLFwibTdiNVwiOlwiMTAwMTAwMTAwMDEwXCIsXCJkaW03XCI6XCIxMDAxMDAxMDAxMDBcIixcIm83TTdcIjpcIjEwMDEwMDEwMDEwMVwiLFwiNHRoXCI6XCIxMDAxMDEwMDAwMTBcIixcIm1hZGQ0XCI6XCIxMDAxMDEwMTAwMDBcIixcIm03YWRkMTFcIjpcIjEwMDEwMTAxMDAxMFwiLFwiK2FkZCM5XCI6XCIxMDAxMTAwMDEwMDBcIixcIjcjNSM5XCI6XCIxMDAxMTAwMDEwMTBcIixcIjcjOVwiOlwiMTAwMTEwMDEwMDEwXCIsXCIxMyM5XCI6XCIxMDAxMTAwMTAxMTBcIixcIjcjOWIxM1wiOlwiMTAwMTEwMDExMDEwXCIsXCJtYWo3IzkjMTFcIjpcIjEwMDExMDExMDAwMVwiLFwiNyM5IzExXCI6XCIxMDAxMTAxMTAwMTBcIixcIjEzIzkjMTFcIjpcIjEwMDExMDExMDExMFwiLFwiNyM5IzExYjEzXCI6XCIxMDAxMTAxMTEwMTBcIixcInN1czJcIjpcIjEwMTAwMDAxMDAwMFwiLFwiTTkjNXN1czRcIjpcIjEwMTAwMTAwMTAwMVwiLFwic3VzMjRcIjpcIjEwMTAwMTAxMDAwMFwiLFwiTTlzdXM0XCI6XCIxMDEwMDEwMTAwMDFcIixcIjExdGhcIjpcIjEwMTAwMTAxMDAxMFwiLFwiOXN1czRcIjpcIjEwMTAwMTAxMDAxMFwiLFwiMTNzdXM0XCI6XCIxMDEwMDEwMTAxMTBcIixcIjlubzVcIjpcIjEwMTAxMDAwMDAxMFwiLFwiMTNubzVcIjpcIjEwMTAxMDAwMDExMFwiLFwiTSM1YWRkOVwiOlwiMTAxMDEwMDAxMDAwXCIsXCJtYWo5IzVcIjpcIjEwMTAxMDAwMTAwMVwiLFwiOSM1XCI6XCIxMDEwMTAwMDEwMTBcIixcIjliMTNcIjpcIjEwMTAxMDAwMTAxMFwiLFwiTWFkZDlcIjpcIjEwMTAxMDAxMDAwMFwiLFwibWFqOVwiOlwiMTAxMDEwMDEwMDAxXCIsXCI5dGhcIjpcIjEwMTAxMDAxMDAxMFwiLFwiNi85XCI6XCIxMDEwMTAwMTAxMDBcIixcIm1hajEzXCI6XCIxMDEwMTAwMTAxMDFcIixcIk03YWRkMTNcIjpcIjEwMTAxMDAxMDEwMVwiLFwiMTN0aFwiOlwiMTAxMDEwMDEwMTEwXCIsXCJNOWI1XCI6XCIxMDEwMTAxMDAwMDFcIixcIjliNVwiOlwiMTAxMDEwMTAwMDEwXCIsXCIxM2I1XCI6XCIxMDEwMTAxMDAxMTBcIixcIjkjNSMxMVwiOlwiMTAxMDEwMTAxMDEwXCIsXCJtYWo5IzExXCI6XCIxMDEwMTAxMTAwMDFcIixcIjkjMTFcIjpcIjEwMTAxMDExMDAxMFwiLFwiNjkjMTFcIjpcIjEwMTAxMDExMDEwMFwiLFwiTTEzIzExXCI6XCIxMDEwMTAxMTAxMDFcIixcIjEzIzExXCI6XCIxMDEwMTAxMTAxMTBcIixcIjkjMTFiMTNcIjpcIjEwMTAxMDExMTAxMFwiLFwibTkjNVwiOlwiMTAxMTAwMDAxMDEwXCIsXCJtYWRkOVwiOlwiMTAxMTAwMDEwMDAwXCIsXCJtTTlcIjpcIjEwMTEwMDAxMDAwMVwiLFwibTlcIjpcIjEwMTEwMDAxMDAxMFwiLFwibTY5XCI6XCIxMDExMDAwMTAxMDBcIixcIm0xM1wiOlwiMTAxMTAwMDEwMTEwXCIsXCJtTWFqOWI2XCI6XCIxMDExMDAwMTEwMDFcIixcIm05YjVcIjpcIjEwMTEwMDEwMDAxMFwiLFwibTExQVwiOlwiMTAxMTAxMDAxMDEwXCIsXCJtMTFcIjpcIjEwMTEwMTAxMDAxMFwiLFwiYjlzdXNcIjpcIjExMDAwMTAxMDAxMFwiLFwiMTFiOVwiOlwiMTEwMDAxMDEwMDEwXCIsXCI3c3VzNGI5YjEzXCI6XCIxMTAwMDEwMTEwMTBcIixcImFsdDdcIjpcIjExMDAxMDAwMDAxMFwiLFwiNyM1YjlcIjpcIjExMDAxMDAwMTAxMFwiLFwiTWFkZGI5XCI6XCIxMTAwMTAwMTAwMDBcIixcIk03YjlcIjpcIjExMDAxMDAxMDAwMVwiLFwiN2I5XCI6XCIxMTAwMTAwMTAwMTBcIixcIjEzYjlcIjpcIjExMDAxMDAxMDExMFwiLFwiN2I5YjEzXCI6XCIxMTAwMTAwMTEwMTBcIixcIjcjNWI5IzExXCI6XCIxMTAwMTAxMDEwMTBcIixcIjdiOSMxMVwiOlwiMTEwMDEwMTEwMDEwXCIsXCIxM2I5IzExXCI6XCIxMTAwMTAxMTAxMTBcIixcIjdiOWIxMyMxMVwiOlwiMTEwMDEwMTExMDEwXCIsXCJtYjZiOVwiOlwiMTEwMTAwMDAxMDAwXCIsXCI3YjkjOVwiOlwiMTEwMTEwMDEwMDEwXCJ9Jyl9LDcyMjpuPT57bi5leHBvcnRzPUpTT04ucGFyc2UoJ3tcIm1ham9yIHBlbnRhdG9uaWNcIjpcIjEwMTAxMDAxMDEwMFwiLFwiaW9uaWFuIHBlbnRhdG9uaWNcIjpcIjEwMDAxMTAxMDAwMVwiLFwibWl4b2x5ZGlhbiBwZW50YXRvbmljXCI6XCIxMDAwMTEwMTAwMTBcIixcInJpdHVzZW5cIjpcIjEwMTAwMTAxMDEwMFwiLFwiZWd5cHRpYW5cIjpcIjEwMTAwMTAxMDAxMFwiLFwibmVvcG9saXRhbiBtYWpvciBwZW50YXRvbmljXCI6XCIxMDAwMTExMDAwMTBcIixcInZpZXRuYW1lc2UgMVwiOlwiMTAwMTAxMDExMDAwXCIsXCJwZWxvZ1wiOlwiMTEwMTAwMDExMDAwXCIsXCJrdW1vaWpvc2hpXCI6XCIxMTAwMDEwMTEwMDBcIixcImhpcmFqb3NoaVwiOlwiMTAxMTAwMDExMDAwXCIsXCJpd2F0b1wiOlwiMTEwMDAxMTAwMDEwXCIsXCJpbi1zZW5cIjpcIjExMDAwMTAxMDAxMFwiLFwibHlkaWFuIHBlbnRhdG9uaWNcIjpcIjEwMDAxMDExMDAwMVwiLFwibWFsa29zIHJhZ2FcIjpcIjEwMDEwMTAwMTAxMFwiLFwibG9jcmlhbiBwZW50YXRvbmljXCI6XCIxMDAxMDExMDAwMTBcIixcIm1pbm9yIHBlbnRhdG9uaWNcIjpcIjEwMDEwMTAxMDAxMFwiLFwibWlub3Igc2l4IHBlbnRhdG9uaWNcIjpcIjEwMDEwMTAxMDEwMFwiLFwiZmxhdCB0aHJlZSBwZW50YXRvbmljXCI6XCIxMDExMDAwMTAxMDBcIixcImZsYXQgc2l4IHBlbnRhdG9uaWNcIjpcIjEwMTAxMDAxMTAwMFwiLFwic2NyaWFiaW5cIjpcIjExMDAxMDAxMDEwMFwiLFwid2hvbGUgdG9uZSBwZW50YXRvbmljXCI6XCIxMDAwMTAxMDEwMTBcIixcImx5ZGlhbiAjNVAgcGVudGF0b25pY1wiOlwiMTAwMDEwMTAxMDAxXCIsXCJseWRpYW4gZG9taW5hbnQgcGVudGF0b25pY1wiOlwiMTAwMDEwMTEwMDEwXCIsXCJtaW5vciAjN00gcGVudGF0b25pY1wiOlwiMTAwMTAxMDEwMDAxXCIsXCJzdXBlciBsb2NyaWFuIHBlbnRhdG9uaWNcIjpcIjEwMDExMDEwMDAxMFwiLFwibWlub3IgaGV4YXRvbmljXCI6XCIxMDExMDEwMTAwMDFcIixcImF1Z21lbnRlZFwiOlwiMTAwMTEwMDExMDAxXCIsXCJtYWpvciBibHVlc1wiOlwiMTAxMTEwMDEwMTAwXCIsXCJwaW9uZ2lvXCI6XCIxMDEwMDEwMTAxMTBcIixcInByb21ldGhldXMgbmVvcG9saXRhblwiOlwiMTEwMDEwMTAwMTEwXCIsXCJwcm9tZXRoZXVzXCI6XCIxMDEwMTAxMDAxMTBcIixcIm15c3RlcnkgIzFcIjpcIjExMDAxMDEwMTAxMFwiLFwic2l4IHRvbmUgc3ltbWV0cmljXCI6XCIxMTAwMTEwMDExMDBcIixcIndob2xlIHRvbmVcIjpcIjEwMTAxMDEwMTAxMFwiLFwibWVzc2lhZW5cXCdzIG1vZGUgIzVcIjpcIjExMDAwMTExMDAwMVwiLFwibWlub3IgYmx1ZXNcIjpcIjEwMDEwMTExMDAxMFwiLFwibG9jcmlhbiBtYWpvclwiOlwiMTAxMDExMTAxMDEwXCIsXCJkb3VibGUgaGFybW9uaWMgbHlkaWFuXCI6XCIxMTAwMTAxMTEwMDFcIixcImhhcm1vbmljIG1pbm9yXCI6XCIxMDExMDEwMTEwMDFcIixcImFsdGVyZWRcIjpcIjExMDExMDEwMTAxMFwiLFwibG9jcmlhbiAjMlwiOlwiMTAxMTAxMTAxMDEwXCIsXCJtaXhvbHlkaWFuIGI2XCI6XCIxMDEwMTEwMTEwMTBcIixcImx5ZGlhbiBkb21pbmFudFwiOlwiMTAxMDEwMTEwMTEwXCIsXCJseWRpYW5cIjpcIjEwMTAxMDExMDEwMVwiLFwibHlkaWFuIGF1Z21lbnRlZFwiOlwiMTAxMDEwMTAxMTAxXCIsXCJkb3JpYW4gYjJcIjpcIjExMDEwMTAxMDExMFwiLFwibWVsb2RpYyBtaW5vclwiOlwiMTAxMTAxMDEwMTAxXCIsXCJsb2NyaWFuXCI6XCIxMTAxMDExMDEwMTBcIixcInVsdHJhbG9jcmlhblwiOlwiMTEwMTEwMTAxMTAwXCIsXCJsb2NyaWFuIDZcIjpcIjExMDEwMTEwMDExMFwiLFwiYXVnbWVudGVkIGhlcHRhdG9uaWNcIjpcIjEwMDExMTAxMTAwMVwiLFwicm9tYW5pYW4gbWlub3JcIjpcIjEwMTEwMDExMDExMFwiLFwiZG9yaWFuICM0XCI6XCIxMDExMDAxMTAxMTBcIixcImx5ZGlhbiBkaW1pbmlzaGVkXCI6XCIxMDExMDAxMTAxMDFcIixcInBocnlnaWFuXCI6XCIxMTAxMDEwMTEwMTBcIixcImxlYWRpbmcgd2hvbGUgdG9uZVwiOlwiMTAxMDEwMTAxMDExXCIsXCJseWRpYW4gbWlub3JcIjpcIjEwMTAxMDExMTAxMFwiLFwicGhyeWdpYW4gZG9taW5hbnRcIjpcIjExMDAxMTAxMTAxMFwiLFwiYmFsaW5lc2VcIjpcIjExMDEwMTAxMTAwMVwiLFwibmVvcG9saXRhbiBtYWpvclwiOlwiMTEwMTAxMDEwMTAxXCIsXCJhZW9saWFuXCI6XCIxMDExMDEwMTEwMTBcIixcImhhcm1vbmljIG1ham9yXCI6XCIxMDEwMTEwMTEwMDFcIixcImRvdWJsZSBoYXJtb25pYyBtYWpvclwiOlwiMTEwMDExMDExMDAxXCIsXCJkb3JpYW5cIjpcIjEwMTEwMTAxMDExMFwiLFwiaHVuZ2FyaWFuIG1pbm9yXCI6XCIxMDExMDAxMTEwMDFcIixcImh1bmdhcmlhbiBtYWpvclwiOlwiMTAwMTEwMTEwMTEwXCIsXCJvcmllbnRhbFwiOlwiMTEwMDExMTAwMTEwXCIsXCJmbGFtZW5jb1wiOlwiMTEwMTEwMTEwMDEwXCIsXCJ0b2RpIHJhZ2FcIjpcIjExMDEwMDExMTAwMVwiLFwibWl4b2x5ZGlhblwiOlwiMTAxMDExMDEwMTEwXCIsXCJwZXJzaWFuXCI6XCIxMTAwMTExMDEwMDFcIixcIm1ham9yXCI6XCIxMDEwMTEwMTAxMDFcIixcImVuaWdtYXRpY1wiOlwiMTEwMDEwMTAxMDExXCIsXCJtYWpvciBhdWdtZW50ZWRcIjpcIjEwMTAxMTAwMTEwMVwiLFwibHlkaWFuICM5XCI6XCIxMDAxMTAxMTAxMDFcIixcIm1lc3NpYWVuXFwncyBtb2RlICM0XCI6XCIxMTEwMDExMTEwMDFcIixcInB1cnZpIHJhZ2FcIjpcIjExMDAxMTExMTAwMVwiLFwic3BhbmlzaCBoZXB0YXRvbmljXCI6XCIxMTAxMTEwMTEwMTBcIixcImJlYm9wXCI6XCIxMDEwMTEwMTAxMTFcIixcImJlYm9wIG1pbm9yXCI6XCIxMDExMTEwMTAxMTBcIixcImJlYm9wIG1ham9yXCI6XCIxMDEwMTEwMTExMDFcIixcImJlYm9wIGxvY3JpYW5cIjpcIjExMDEwMTExMTAxMFwiLFwibWlub3IgYmVib3BcIjpcIjEwMTEwMTAxMTAxMVwiLFwiZGltaW5pc2hlZFwiOlwiMTAxMTAxMTAxMTAxXCIsXCJpY2hpa29zdWNob1wiOlwiMTAxMDExMTEwMTAxXCIsXCJtaW5vciBzaXggZGltaW5pc2hlZFwiOlwiMTAxMTAxMDExMTAxXCIsXCJoYWxmLXdob2xlIGRpbWluaXNoZWRcIjpcIjExMDExMDExMDExMFwiLFwia2FmaSByYWdhXCI6XCIxMDAxMTEwMTAxMTFcIixcIm1lc3NpYWVuXFwncyBtb2RlICM2XCI6XCIxMDEwMTExMDEwMTFcIixcImNvbXBvc2l0ZSBibHVlc1wiOlwiMTAxMTExMTEwMTEwXCIsXCJtZXNzaWFlblxcJ3MgbW9kZSAjM1wiOlwiMTAxMTEwMTExMDExXCIsXCJtZXNzaWFlblxcJ3MgbW9kZSAjN1wiOlwiMTExMTAxMTExMTAxXCIsXCJjaHJvbWF0aWNcIjpcIjExMTExMTExMTExMVwiLFwiaW9uaWFuXCI6XCIxMDEwMTEwMTAxMDFcIixcIm1pbm9yXCI6XCIxMDExMDEwMTEwMTBcIn0nKX19LGU9e307ZnVuY3Rpb24gbyhhKXt2YXIgaT1lW2FdO2lmKHZvaWQgMCE9PWkpcmV0dXJuIGkuZXhwb3J0czt2YXIgcj1lW2FdPXtleHBvcnRzOnt9fTtyZXR1cm4gblthXShyLHIuZXhwb3J0cyxvKSxyLmV4cG9ydHN9by5kPShuLGUpPT57Zm9yKHZhciBhIGluIGUpby5vKGUsYSkmJiFvLm8obixhKSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sYSx7ZW51bWVyYWJsZTohMCxnZXQ6ZVthXX0pfSxvLm89KG4sZSk9Pk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLGUpLG8ucj1uPT57XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkobixTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkobixcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX07dmFyIGE9e307KCgpPT57by5yKGEpLG8uZChhLHtjaG9yZDooKT0+bSxjaG9yZHM6KCk9PnQsaW5saW5lQ2hvcmQ6KCk9PnIsc2NhbGU6KCk9PmMsc2NhbGVzOigpPT5zfSk7dmFyIG49byg3MjIpLGU9byg0MTMpLGk9ZnVuY3Rpb24obyl7dmFyIGE9by5zY2FsZSxpPW8uY2hvcmQscj1hfHxpLHQ9YT9cInNjYWxlXCI6XCJjaG9yZFwiO2lmKFwic3RyaW5nXCIhPXR5cGVvZiByKXRocm93IG5ldyBFcnJvcihcIlwiLmNvbmNhdChyLFwiIGlzIG5vdCBhIHZhbGlkIGlucHV0IGZvciBcIikuY29uY2F0KHQpKTt2YXIgcyxtLGM9ci5pbmRleE9mKFwiIFwiKTstMT09PWM/KHM9ci5zbGljZSgxKSxtPXJbMF0sXCJiXCIhPT1yWzFdJiZcIiNcIiE9PXJbMV18fChzPXIuc2xpY2UoMiksbSs9clsxXSkpOihzPXIuc2xpY2UoLTE9PT1jPzE6YysxKSxtPXIuc2xpY2UoMCxjKSk7dmFyIGQ9ZnVuY3Rpb24obil7cmV0dXJue1wiQyNcIjpcIkRiXCIsXCJEI1wiOlwiRWJcIixcIkYjXCI6XCJHYlwiLFwiRyNcIjpcIkFiXCIsXCJBI1wiOlwiQmJcIn1bbi50b1VwcGVyQ2FzZSgpXXx8bi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStuLnNsaWNlKDEpfShtLnJlcGxhY2UoL1xcZC9nLFwiXCIpKSxsPVwiXCIhPT1tLnJlcGxhY2UoL1xcRC9nLFwiXCIpPyttLnJlcGxhY2UoL1xcRC9nLFwiXCIpOjQ7aWYoaXNOYU4obCkpdGhyb3cgbmV3IEVycm9yKFwiXCIuY29uY2F0KG1bMF0sXCIgZG9lcyBub3QgaGF2ZSBhIHZhbGlkIG9jdGF2ZVwiKSk7aWYoIW5bc10mJiFlW3NdKXRocm93IG5ldyBFcnJvcihcIlwiLmNvbmNhdChyLFwiIGlzIG5vdCBhIHZhbGlkIFwiKS5jb25jYXQodCkpO2Zvcih2YXIgYj1mdW5jdGlvbihuLGUpe3ZhciBvPVtcIkNcIixcIkRiXCIsXCJEXCIsXCJFYlwiLFwiRVwiLFwiRlwiLFwiR2JcIixcIkdcIixcIkFiXCIsXCJBXCIsXCJCYlwiLFwiQlwiXSxhPW8ubWFwKChmdW5jdGlvbihuKXtyZXR1cm4gbitlfSkpLGk9by5tYXAoKGZ1bmN0aW9uKG4pe3JldHVybiBuKyhlKzEpfSkpLHI9YS5jb25jYXQoaSk7cmV0dXJuIHIuc2xpY2Uoci5pbmRleE9mKG4rZSkpfShkLGwpLHU9W10scD0wLGg9MCxmPWE/bjplO3A8ZltzXS5sZW5ndGg7KVwiMVwiPT09ZltzXVtwXSYmdS5wdXNoKGJbaF0pLHArKyxoKys7cmV0dXJuIHV9LHI9ZnVuY3Rpb24obil7dmFyIGUsbyxhPVwiYjlzdXNcIixyPTQ7cmV0dXJuIG4uaW5jbHVkZXMoYSk/KG89YSxlPW4uc2xpY2UoMCxuLmluZGV4T2YoYSkpKTooZT1uWzBdLG89bi5zbGljZSgxKSxcImJcIiE9PW5bMV0mJlwiI1wiIT09blsxXXx8KGUrPW5bMV0sbz1uLnNsaWNlKDIpKSksbi5pbmNsdWRlcyhcIl9cIikmJihyPStuLnNwbGl0KFwiX1wiKVsxXSxvPW8uc2xpY2UoMCxvLmluZGV4T2YoXCJfXCIpKSksaSh7Y2hvcmQ6ZStyK1wiIFwiK299KX0sdD1mdW5jdGlvbigpe3JldHVybiBPYmplY3Qua2V5cyhlKX0scz1mdW5jdGlvbigpe3JldHVybiBPYmplY3Qua2V5cyhuKX0sbT1mdW5jdGlvbihuKXtyZXR1cm4gaSh7Y2hvcmQ6bn0pfSxjPWZ1bmN0aW9uKG4pe3JldHVybiBpKHtzY2FsZTpufSl9fSkoKTt2YXIgaT1leHBvcnRzO2Zvcih2YXIgciBpbiBhKWlbcl09YVtyXTthLl9fZXNNb2R1bGUmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShpLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1haW4uanMubWFwIiwgImltcG9ydCB7IGlubGluZUNob3JkIH0gZnJvbSAnaGFybW9uaWNzJztcblxuZXhwb3J0IGNvbnN0IFJFX1NFUEFSQVRPUiA9IC9cXHwvO1xuZXhwb3J0IGNvbnN0IFJFX1BBVFRFUk4gPSAvXig/Olt4Xy1dfFxcWy4rP1xcXSkrJC87XG5leHBvcnQgY29uc3QgUkVfTlVNQkVSID0gL14oPzpcXC4/XFxkK3xcXGQrKD86XFwuXFxkKyk/KSQvO1xuZXhwb3J0IGNvbnN0IFJFX0NIT1JEID0gL15bYS1nQS1HXVteI1xcc10qXFxkKyg/OlxcLlxcLik/JC87XG5leHBvcnQgY29uc3QgUkVfTk9URSA9IC9eW2EtZ0EtR11bI2JdP1xcZCskLztcbmV4cG9ydCBjb25zdCBSRV9NT0RFID0gL14oPyFbaXZJVl17MSwzfSlbYS16XXsyLH0vO1xuZXhwb3J0IGNvbnN0IFJFX1BST0cgPSAvXltpdklWXXsxLDN9XHUwMEIwPyQvO1xuZXhwb3J0IGNvbnN0IFJFX1RSSU0gPSAvXFwuKyQvO1xuXG5jb25zdCBDQUNIRSA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gc3BsaXQodmFsdWUpIHtcbiAgbGV0IGRhdGEgPSBbXTtcbiAgdHJ5IHtcbiAgICBkYXRhID0gSlNPTi5zdHJpbmdpZnkodmFsdWUuc3BsaXQoLyg/PVtcXGRbXFxdeF8tXSkvKSk7XG4gICAgZGF0YSA9IGRhdGEucmVwbGFjZSgvLFwiXFxbXCIsL2csICcsIFsnKTtcbiAgICBkYXRhID0gZGF0YS5yZXBsYWNlKC9cIlxcW1wiLC9nLCAnWycpO1xuICAgIGRhdGEgPSBkYXRhLnJlcGxhY2UoLyxcIlxcXVwiL2csICddJyk7XG4gICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBpZ25vcmVcbiAgfVxuICByZXR1cm4gZGF0YTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxldmVsKHZhbHVlKSB7XG4gIGlmICghQ0FDSEVbdmFsdWVdKSB7XG4gICAgaWYgKHZhbHVlLmluY2x1ZGVzKCclJykpIHtcbiAgICAgIENBQ0hFW3ZhbHVlXSA9IDEyNyAqIHBhcnNlRmxvYXQoYC4ke3ZhbHVlfWApO1xuICAgIH0gZWxzZSBpZiAodmFsdWUuaW5jbHVkZXMoJy8nKSkge1xuICAgICAgY29uc3QgW2EsIGJdID0gdmFsdWUuc3BsaXQoJy8nKTtcblxuICAgICAgQ0FDSEVbdmFsdWVdID0gYSAvIGI7XG4gICAgfSBlbHNlIGlmICh2YWx1ZS5pbmNsdWRlcygnKicpKSB7XG4gICAgICBjb25zdCBbYSwgYl0gPSB2YWx1ZS5zcGxpdCgnKicpO1xuXG4gICAgICBDQUNIRVt2YWx1ZV0gPSBhICogYjtcbiAgICB9IGVsc2Uge1xuICAgICAgQ0FDSEVbdmFsdWVdID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBDQUNIRVt2YWx1ZV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZShyZSwgdmFsdWUpIHtcbiAgaWYgKCFDQUNIRVtyZS5zb3VyY2UgKyB2YWx1ZV0pIHtcbiAgICBDQUNIRVtyZS5zb3VyY2UgKyB2YWx1ZV0gPSByZS50ZXN0KHZhbHVlKTtcbiAgfVxuICByZXR1cm4gQ0FDSEVbcmUuc291cmNlICsgdmFsdWVdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcm9ncmVzc2lvbih2YWx1ZSkge1xuICByZXR1cm4gdmFsaWRhdGUoUkVfUFJPRywgdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXR0ZXJuKHZhbHVlKSB7XG4gIHJldHVybiB2YWxpZGF0ZShSRV9QQVRURVJOLCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICByZXR1cm4gdmFsaWRhdGUoUkVfTlVNQkVSLCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Nob3JkKHZhbHVlKSB7XG4gIHJldHVybiB2YWxpZGF0ZShSRV9DSE9SRCwgdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOb3RlKHZhbHVlKSB7XG4gIHJldHVybiB2YWxpZGF0ZShSRV9OT1RFLCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc01vZGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbGlkYXRlKFJFX01PREUsIHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFR5cGUodmFsdWUpIHtcbiAgY29uc3Qga2V5ID0gYFQke3ZhbHVlfWA7XG4gIGlmICghQ0FDSEVba2V5XSkge1xuICAgIGlmIChpc05vdGUodmFsdWUpKSBDQUNIRVtrZXldID0gJ25vdGUnO1xuICAgIGVsc2UgaWYgKGlzQ2hvcmQodmFsdWUpKSBDQUNIRVtrZXldID0gJ2Nob3JkJztcbiAgICBlbHNlIGlmIChpc1BhdHRlcm4odmFsdWUpKSBDQUNIRVtrZXldID0gJ3BhdHRlcm4nO1xuICAgIGVsc2UgaWYgKGlzTW9kZSh2YWx1ZSkpIENBQ0hFW2tleV0gPSAnbW9kZSc7XG4gICAgZWxzZSBpZiAoaXNOdW1iZXIodmFsdWUpKSBDQUNIRVtrZXldID0gJ251bWJlcic7XG4gICAgZWxzZSBDQUNIRVtrZXldID0gJ3ZhbHVlJztcbiAgfVxuICByZXR1cm4gQ0FDSEVba2V5XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybShleHByZXNzaW9uKSB7XG4gIGlmICghZXhwcmVzc2lvbiB8fCB0eXBlb2YgZXhwcmVzc2lvbiAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGluZyBhIHZhbGlkIHN0cmluZywgZ2l2ZW4gJyR7ZXhwcmVzc2lvbn0nYCk7XG4gIH1cblxuICBpZiAoQ0FDSEVbYCQke2V4cHJlc3Npb259YF0pIHJldHVybiBDQUNIRVtgJCR7ZXhwcmVzc2lvbn1gXTtcblxuICBjb25zdCB0b2tlbnMgPSBleHByZXNzaW9uLnNwbGl0KC9cXHMrLyk7XG5cbiAgaWYgKCF0b2tlbnMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RpbmcgYSB2YWxpZCBleHByZXNzaW9uLCBnaXZlbiAnJHtleHByZXNzaW9ufSdgKTtcbiAgfVxuXG4gIGNvbnN0IGFzdCA9IFtdO1xuICBjb25zdCBjYXJyeSA9IFtdO1xuXG4gIGZ1bmN0aW9uIGFkZCh0eXBlLCB2YWx1ZSkge1xuICAgIGNvbnN0IGl0ZW0gPSB7IHR5cGUsIHZhbHVlIH07XG5cbiAgICBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgaXRlbS52YWx1ZSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBsZXZlbCh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gJ2Nob3JkJyAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpdGVtLnZhbHVlID0gaW5saW5lQ2hvcmQodmFsdWUucmVwbGFjZShSRV9UUklNLCAnJykpO1xuXG4gICAgICBpZiAodmFsdWUuaW5jbHVkZXMoJy4uJykpIHtcbiAgICAgICAgaXRlbS51bmZvbGQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlID09PSAndmFsdWUnICYmIHZhbHVlLmluZGV4T2YoJ3gnKSA+IC0xKSB7XG4gICAgICBjb25zdCB4ID0gdmFsdWUuc3BsaXQoJ3gnKTtcblxuICAgICAgaWYgKCEoaXNOdW1iZXIoeFswXSkgJiYgaXNOdW1iZXIoeFsxXSkpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0aW5nIHZhbGlkIG51bWJlcnMgZm9yICR7dHlwZX0sIGdpdmVuICcke3ZhbHVlfSdgKTtcbiAgICAgIH1cblxuICAgICAgaXRlbS52YWx1ZSA9IHBhcnNlSW50KHhbMF0sIDEwKTtcbiAgICAgIGl0ZW0ucmVwZWF0ID0gcGFyc2VJbnQoeFsxXSwgMTApO1xuICAgICAgaXRlbS50eXBlID0gJ251bWJlcic7XG4gICAgfVxuXG4gICAgYXN0LnB1c2goaXRlbSk7XG4gIH1cblxuICB0b2tlbnMucmVkdWNlKChwcmV2LCBjdXIsIGkpID0+IHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGNvbnN0IG5leHQgPSB0b2tlbnNbaSArIDFdO1xuICAgIGNvbnN0IGxhc3QgPSBhc3RbYXN0Lmxlbmd0aCAtIDFdIHx8IHt9O1xuXG4gICAgaWYgKFJFX1NFUEFSQVRPUi50ZXN0KGN1cikpIHtcbiAgICAgIGFkZCgnY2hvcmQnLCBjdXIuc3BsaXQoUkVfU0VQQVJBVE9SKSk7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGN1ciA9PT0gJ3N0cmluZycgJiYgKFxuICAgICAgKGN1ci5pbmNsdWRlcygnLycpICYmIGN1ci5pbmRleE9mKCcvJykgPiAwKVxuICAgICAgfHwgKGN1ci5pbmNsdWRlcygnKicpICYmIGN1ci5pbmRleE9mKCcqJykgPiAwKVxuICAgICAgfHwgKGN1ci5pbmNsdWRlcygnJScpICYmIGN1ci5pbmRleE9mKCclJykgPiAwKVxuICAgICkpIHtcbiAgICAgIGFkZCgnbnVtYmVyJywgbGV2ZWwoY3VyKSk7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAoY3VyLmluZGV4T2YoJyUnKSA+IC0xKSB7XG4gICAgICBpZiAoY3VyID09PSAnJScpIHtcbiAgICAgICAgaWYgKCFsYXN0LnR5cGUpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgZXhwcmVzc2lvbiB0byByZXBlYXQsIGdpdmVuICcke3Rva2Vucy5zbGljZSgwLCBpKS5qb2luKCcgJyl9J2ApO1xuICAgICAgICB9XG5cbiAgICAgICAgbGFzdC5yZXBlYXQgPSBsYXN0LnJlcGVhdCB8fCAxO1xuICAgICAgICBsYXN0LnJlcGVhdCArPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWRkKCdwYXJhbScsIGN1cik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmIChpc1Byb2dyZXNzaW9uKGN1cikpIHtcbiAgICAgIGxhc3QudmFsdWUgKz0gYCAke2N1cn1gO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKGN1ci5jaGFyQXQoKSA9PT0gJyMnKSB7XG4gICAgICBhZGQoJ2NoYW5uZWwnLCBjdXIpO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKGlzTm90ZShjdXIpIHx8IGlzQ2hvcmQoY3VyKSB8fCBpc01vZGUoY3VyKSB8fCBpc051bWJlcihjdXIpKSB7XG4gICAgICBjYXJyeS5wdXNoKGN1cik7XG5cbiAgICAgIGlmIChcbiAgICAgICAgIW5leHRcbiAgICAgICAgfHwgY2FycnkubGVuZ3RoID09PSAzXG4gICAgICAgIHx8ICEoaXNOb3RlKG5leHQpIHx8IGlzTW9kZShuZXh0KSB8fCBpc051bWJlcihuZXh0KSlcbiAgICAgICkge1xuICAgICAgICBjb25zdCBvbGQgPSBjYXJyeS5zcGxpY2UoMCwgY2FycnkubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgdGVzdCA9IG9sZFswXTtcblxuICAgICAgICBsZXQgbW9kZSA9IG9sZFsxXTtcbiAgICAgICAgbGV0IG9jdGF2ZSA9IG9sZFsyXTtcblxuICAgICAgICBpZiAoIW9jdGF2ZSAmJiBpc051bWJlcihtb2RlKSkge1xuICAgICAgICAgIG9jdGF2ZSA9IG1vZGU7XG4gICAgICAgICAgbW9kZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICB0ZXN0Lmxlbmd0aCA8IDJcbiAgICAgICAgICAmJiBpc05vdGUodGVzdClcbiAgICAgICAgICAmJiAoaXNNb2RlKG1vZGUpIHx8IGlzTnVtYmVyKG9jdGF2ZSkpXG4gICAgICAgICkge1xuICAgICAgICAgIGFkZCgnbW9kZScsIG9sZC5qb2luKCcgJykpO1xuICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICB9XG5cbiAgICAgICAgb2xkLmZvckVhY2goeCA9PiB7XG4gICAgICAgICAgYWRkKHgubGVuZ3RoID4gMSB8fCAhaXNOb3RlKHgpID8gZ2V0VHlwZSh4KSA6ICdtb2RlJywgeCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjdXIgPT09ICdzdHJpbmcnICYmIGN1ci5pbmRleE9mKCcuLicpID4gLTEpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gY3VyLnNwbGl0KCcuLicpO1xuICAgICAgY29uc3QgbWluID0gcGFydHNbMF0gfHwgMTtcbiAgICAgIGNvbnN0IG1heCA9IHBhcnRzWzFdIHx8IEluZmluaXR5O1xuXG4gICAgICB0eXBlID0gJ3NsaWNlJztcbiAgICAgIGN1ciA9IFttaW4sIG1heF07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjdXIgPT09ICdzdHJpbmcnICYmIChjdXIuY2hhckF0KCkgPT09ICcvJyB8fCBjdXIuY2hhckF0KCkgPT09ICcqJykpIHtcbiAgICAgIGNvbnN0IG9wZXJhdG9yID0gY3VyLmNoYXJBdCgpID09PSAnLycgPyAnZGl2aWRlJyA6ICdtdWx0aXBseSc7XG4gICAgICBjb25zdCBudW1iZXIgPSBjdXIuc3Vic3RyKDEpO1xuXG4gICAgICBpZiAoIWlzTnVtYmVyKG51bWJlcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RpbmcgYSB2YWxpZCBleHByZXNzaW9uIHRvICR7b3BlcmF0b3J9LCBnaXZlbiAnJHt0b2tlbnMuc2xpY2UoMCwgaSkuam9pbignICcpfSAke2N1cn0nYCk7XG4gICAgICB9XG5cbiAgICAgIGFkZChvcGVyYXRvciwgcGFyc2VGbG9hdChudW1iZXIpKTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmICghdHlwZSAmJiBnZXRUeXBlKGN1cikgPT09ICd2YWx1ZScgJiYgQXJyYXkuaXNBcnJheShsYXN0LnZhbHVlKSkge1xuICAgICAgbGFzdC52YWx1ZVsxXSA9IGxhc3QudmFsdWVbMV0gfHwgJyc7XG4gICAgICBsYXN0LnZhbHVlWzFdICs9IGxhc3QudmFsdWVbMV0gPyAnICcgOiAnJztcbiAgICAgIGxhc3QudmFsdWVbMV0gKz0gY3VyO1xuICAgICAgcmV0dXJuIGN1cjtcbiAgICB9XG5cbiAgICBhZGQodHlwZSB8fCBnZXRUeXBlKGN1ciksIHR5cGVvZiBjdXIgPT09ICdzdHJpbmcnICYmIGlzTnVtYmVyKGN1cikgPyBwYXJzZUludChjdXIsIDEwKSA6IGN1cik7XG4gICAgcmV0dXJuIGN1cjtcbiAgfSwgbnVsbCk7XG5cbiAgQ0FDSEVbYCQke2V4cHJlc3Npb259YF0gPSBhc3Q7XG4gIHJldHVybiBhc3Q7XG59XG4iLCAiLyoqXG4gKiBUYWtlIGEgc3RyaW5nIGlucHV0IGFuZCBjaGVjayBpZiBpdCBzIGEgbm90ZSBuYW1lIG9yIG5vdFxuICogQHBhcmFtICB7U3RyaW5nfSBzdHIgTm90ZSBuYW1lIGUuZy4gYzRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IFJldHVybiB0cnVlIGZvciBjNCBvciByZXR1cm4gZmFsc2UgZm9yIHNvbWV0aGluZyBsaWtlIENNXG4gKi9cbmV4cG9ydCBjb25zdCBpc05vdGUgPSAoc3RyOiBzdHJpbmcpOiBib29sZWFuID0+XG4gIC9eW2EtZ0EtR10oPzojfGIpP1xcZCQvLnRlc3Qoc3RyKTtcblxuLyoqXG4gKiBUYWtlIGEgU3RyaW5nIGlucHV0IHN1Y2ggYXMgeHh4W3h4W3h4XV1cbiAqIGFuZCByZXR1cm4gYW4gQXJyYXkgYXMgWyd4JywgJ3gnLCAneCcsIFsneCcsICd4JywgWyd4JywgJ3gnXV1dXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbmV4cG9ydCBjb25zdCBleHBhbmRTdHIgPSAoc3RyOiBzdHJpbmcpOiBhbnkgPT4ge1xuICBzdHIgPSBKU09OLnN0cmluZ2lmeShzdHIuc3BsaXQoJycpKTtcbiAgc3RyID0gc3RyLnJlcGxhY2UoLyxcIlxcW1wiLC9nLCAnLCBbJyk7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKC9cIlxcW1wiLC9nLCAnWycpO1xuICBzdHIgPSBzdHIucmVwbGFjZSgvLFwiXFxdXCIvZywgJ10nKTtcbiAgcmV0dXJuIEpTT04ucGFyc2Uoc3RyKTtcbn07XG5cbi8qKlxuICogQmFzaWMgQXJyYXkgcmFuZG9taXplclxuICogQHBhcmFtICB7QXJyYXl9IGFyclxuICogQHBhcmFtICB7Ym9vbGVhbn0gZnVsbFNodWZmbGUgRW5zdXJlIG5vIGVsZW1lbnRzIHJlbWFpbiBpbiBvbGQgcGxhY2VcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5leHBvcnQgY29uc3Qgc2h1ZmZsZSA9IChhcnI6IGFueVtdLCBmdWxsU2h1ZmZsZTogYm9vbGVhbiA9IHRydWUpOiBzdHJpbmdbXSA9PiB7XG4gIGNvbnN0IGxhc3RJbmRleDogbnVtYmVyID0gYXJyLmxlbmd0aCAtIDE7XG5cbiAgLy8gU2h1ZmZsZSBhbGdvcml0aG0gYnkgUmljaGFyZCBEdXJzdGVuZmVsZCAoRG9uYWxkIEUuIEtudXRoKSwgYWxzbyBSb25hbGQgRmlzaGVyIGFuZCBGcmFuayBZYXRlcy5cbiAgLy8gXCJGdWxsIFNodWZmbGVcIiBNb2RpZmljYXRpb24gdG8gZW5zdXJlIG5vIGVsZW1lbnRzIHJlbWFpbiBpbiB0aGVpciBvcmlnaW5hbCBwbGFjZSAoYnkgdGFraW5nIGVhY2ggZWxlbWVudCBvbmNlXG4gIC8vIGFuZCBzd2FwcGluZyB3aXRoIGFueSByZW1haW5pbmcgZWxlbWVudHMpXG4gIGFyci5mb3JFYWNoKChlbCwgaWR4OiBudW1iZXIpID0+IHtcbiAgICBpZiAoaWR4ID49IGxhc3RJbmRleCkge1xuICAgICAgLy8gTm8gc2h1ZmZsaW5nIGxhc3QgZWxlbWVudFxuICAgICAgLy8gT25lIGJlZm9yZSBsYXN0IGlzIGFsd2F5cyBzd2FwcGVkIHdpdGggbGFzdCBhdCB0aGUgZW5kIG9mIHRoZSBsb29wXG4gICAgICAvLyBTaW5jZSBwcmV2aW91cyBzd2FwcyBjYW4gbW92ZSBsYXN0IGVsZW1lbnQgaW50byBvdGhlciBwbGFjZXMsIHRoZXJlIGlzIHN0aWxsIGEgcmFuZG9tIHNodWZmbGUgb2YgbGFzdCBlbGVtZW50XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFN3YXAgZWwgd2l0aCBvbmUgb2YgdGhlIGhpZ2hlciBlbGVtZW50cyByYW5kb21seVxuICAgIGxldCBybmQ7XG4gICAgcm5kID0gZnVsbFNodWZmbGVcbiAgICAgID8gLy8gUGljayByYW5kb20gbnVtYmVyIGZyb20gaWR4KzEgdG8gbGFzdEluZGV4IChNb2RpZmllZCBhbGdvcml0aG0sIChOLTEpISBjb21iaW5hdGlvbnMpXG4gICAgICAgIC8vIE1hdGgucmFuZG9tIC0+IFswLCAxKSAtPiBbMCwgbGFzdEluZGV4LWlkeCApIC0tZmxvb3ItPiBbMCwgbGFzdEluZGV4LWlkeC0xXVxuICAgICAgICAvLyBybmQgPSBbMCwgbGFzdEluZGV4LWlkeC0xXSArIDEgKyBpZHggPSBbMSArIGlkeCwgbGFzdEluZGV4XVxuICAgICAgICAvLyAoT3JpZ2luYWwgYWxnb3JpdGhtIHdvdWxkIHBpY2sgcm5kID0gW2lkeCwgbGFzdEluZGV4XSwgdGh1cyBhbnkgZWxlbWVudCBjb3VsZCBhcnJpdmUgYmFjayBpbnRvIGl0cyBzbG90KVxuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobGFzdEluZGV4IC0gaWR4KSkgKyAxICsgaWR4XG4gICAgICA6IC8vIFBpY2sgcmFuZG9tIG51bWJlciBmcm9tIGlkeCB0byBsYXN0SW5kZXggKFVubW9kaWZpZWQgUmljaGFyZCBEdXJzdGVuZmVsZCwgTiEgY29tYmluYXRpb25zKVxuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobGFzdEluZGV4ICsgMSAtIGlkeCkpICsgaWR4O1xuICAgIGFycltpZHhdID0gYXJyW3JuZF07XG4gICAgYXJyW3JuZF0gPSBlbDtcbiAgfSk7XG5cbiAgcmV0dXJuIGFycjtcbn07XG5cbi8qKlxuICogUmV0dXJuIGFuIGFycmF5IG9mIG51bWJlcnMgcmVsYXRpdmUgdG8gbWF4TGV2ZWwgfHwgMTI3IG9yZGVyZWQgaW4gYSBTaW5lIHdhdmUgZm9ybWF0XG4gKiBUaGlzIGlzIHVzZWQgYnkgdGhlIGBzaXp6bGVgIHBhcmFtIG9mIHRoZSBgY2xpcGAgbWV0aG9kIHRvIGFkZCBhIHJ1ZGltZW50YXJ5IHZhcmlhdGlvbiB0byB0aGUgYWNjZW50IG9mIGVhY2ggbm90ZVxuICogQHBhcmFtIHtOdW1iZXJ9IG1heExldmVsIEEgbnVtYmVyIGJldHdlZW4gbm90IG1vcmUgdGhhbiAxMjdcbiAqIEByZXR1cm4ge0FycmF5fSAgRXhhbXBsZSBvdXRwdXQgWzYzLCA5MCwgMTEwLCAxMjcsIDExMCwgOTAsIDYzLCAwLCA2MywgOTAsIDExMCwgMTI3LCAxMTAsIDkwLCA2MywgMF1cbiAqL1xuZXhwb3J0IGNvbnN0IHNpenpsZU1hcCA9IChtYXhMZXZlbDogbnVtYmVyID0gMTI3KTogbnVtYmVyW10gPT4ge1xuICBjb25zdCBwaSA9IE1hdGguUEk7XG4gIGNvbnN0IHBpQXJyOiBudW1iZXJbXSA9IFtcbiAgICBwaSAvIDYsXG4gICAgcGkgLyA0LFxuICAgIHBpIC8gMyxcbiAgICBwaSAvIDIsXG4gICAgKDIgKiBwaSkgLyAzLFxuICAgICgzICogcGkpIC8gNCxcbiAgICAoNSAqIHBpKSAvIDYsXG4gICAgcGksXG4gIF07XG4gIGNvbnN0IHBpQXJyUmV2OiBudW1iZXJbXSA9IFtcbiAgICAwLFxuICAgIHBpIC8gNixcbiAgICBwaSAvIDQsXG4gICAgcGkgLyAzLFxuICAgIHBpIC8gMixcbiAgICAoMiAqIHBpKSAvIDMsXG4gICAgKDMgKiBwaSkgLyA0LFxuICAgICg1ICogcGkpIC8gNixcbiAgXTtcbiAgcGlBcnJSZXYucmV2ZXJzZSgpO1xuICBjb25zdCBhcnI6IG51bWJlcltdID0gcGlBcnIuY29uY2F0KHBpQXJyUmV2KTtcbiAgcmV0dXJuIGFyci5tYXAoZWxlbWVudCA9PiBNYXRoLnJvdW5kKE1hdGguc2luKGVsZW1lbnQpICogbWF4TGV2ZWwpKTtcbn07XG5cbi8qKlxuICogUGljayBvbmUgaXRlbSByYW5kb21seSBmcm9tIGFuIGFycmF5IGFuZCByZXR1cm4gaXRcbiAqIEBwYXJhbSBhcnJcbiAqL1xuZXhwb3J0IGNvbnN0IHBpY2tPbmUgPSAoYXJyOiBhbnlbXSkgPT5cbiAgYXJyLmxlbmd0aCA+IDEgPyBhcnJbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV0gOiBhcnJbMF07XG5cbi8qKlxuICogQm9vbGVhbiBnZW5lcmF0b3JcbiAqL1xuZXhwb3J0IGNvbnN0IGRpY2UgPSAoKSA9PiAhIU1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG5cbi8qKlxuICogUG9seWZpbGwgZm9yIEFycmF5LnByb3RvdHlwZS5mbGF0XG4gKi9cbmV4cG9ydCBjb25zdCBmbGF0ID0gKGFycjogYW55W11bXSkgPT5cbiAgYXJyLnJlZHVjZSgoYWNjLCB2YWwpID0+IGFjYy5jb25jYXQodmFsKSwgW10pO1xuIiwgImltcG9ydCB7IHNjYWxlIH0gZnJvbSAnaGFybW9uaWNzJztcbmltcG9ydCB7IHBpY2tPbmUsIGRpY2UgfSBmcm9tICcuL3V0aWxzJztcblxuLyoqXG4gKiBHZXQgdGhlIGNob3JkcyB0aGF0IGdvIHdpdGggYSBnaXZlbiBzY2FsZS9tb2RlXG4gKiBUaGlzIGlzIHVzZWZ1bCBvbmx5IGluIGNhc2UgeW91IHdhbnQgdG8gY2hlY2sgd2hhdCBjaG9yZHMgd29yayB3aXRoIGEgc2NhbGUvbW9kZVxuICogc28gdGhhdCB5b3UgY2FuIGNvbWUgdXAgd2l0aCBjaG9yZCBwcm9ncmVzc2lvbnNcbiAqIEBwYXJhbSAge1N0cmluZ30gbW9kZSBlLmcuIG1ham9yXG4gKiBAcmV0dXJuIHtBcnJheX0gZS5nLlsnSScsICdpaScsICdpaWknLCAnSVYnLCAnVicsICd2aScsICd2aWlcdTAwQjAnXVxuICovXG5leHBvcnQgY29uc3QgZ2V0Q2hvcmREZWdyZWVzID0gKG1vZGU6IHN0cmluZykgPT4ge1xuICBjb25zdCB0aGVSb21hbnM6IE5WUDxzdHJpbmdbXT4gPSB7XG4gICAgaW9uaWFuOiBbJ0knLCAnaWknLCAnaWlpJywgJ0lWJywgJ1YnLCAndmknLCAndmlpXHUwMEIwJ10sXG4gICAgZG9yaWFuOiBbJ2knLCAnaWknLCAnSUlJJywgJ0lWJywgJ3YnLCAndmlcdTAwQjAnLCAnVklJJ10sXG4gICAgcGhyeWdpYW46IFsnaScsICdJSScsICdJSUknLCAnaXYnLCAndlx1MDBCMCcsICdWSScsICd2aWknXSxcbiAgICBseWRpYW46IFsnSScsICdJSScsICdpaWknLCAnaXZcdTAwQjAnLCAnVicsICd2aScsICd2aWknXSxcbiAgICBtaXhvbHlkaWFuOiBbJ0knLCAnaWknLCAnaWlpXHUwMEIwJywgJ0lWJywgJ3YnLCAndmknLCAnVklJJ10sXG4gICAgYWVvbGlhbjogWydpJywgJ2lpXHUwMEIwJywgJ0lJSScsICdpdicsICd2JywgJ1ZJJywgJ1ZJSSddLFxuICAgIGxvY3JpYW46IFsnaVx1MDBCMCcsICdJSScsICdpaWknLCAnaXYnLCAnVicsICdWSScsICd2aWknXSxcbiAgICAnbWVsb2RpYyBtaW5vcic6IFsnaScsICdpaScsICdJSUkrJywgJ0lWJywgJ1YnLCAndmlcdTAwQjAnLCAndmlpXHUwMEIwJ10sXG4gICAgJ2hhcm1vbmljIG1pbm9yJzogWydpJywgJ2lpXHUwMEIwJywgJ0lJSSsnLCAnaXYnLCAnVicsICdWSScsICd2aWlcdTAwQjAnXSxcbiAgfTtcbiAgdGhlUm9tYW5zLm1ham9yID0gdGhlUm9tYW5zLmlvbmlhbjtcbiAgdGhlUm9tYW5zLm1pbm9yID0gdGhlUm9tYW5zLmFlb2xpYW47XG5cbiAgcmV0dXJuIHRoZVJvbWFuc1ttb2RlXSB8fCBbXTtcbn07XG5cbmNvbnN0IGlkeEJ5RGVncmVlOiBOVlA8bnVtYmVyPiA9IHtcbiAgaTogMCxcbiAgaWk6IDEsXG4gIGlpaTogMixcbiAgaXY6IDMsXG4gIHY6IDQsXG4gIHZpOiA1LFxuICB2aWk6IDYsXG59O1xuXG4vKipcbiAqIEdldCBhIGNob3JkIG5hbWUgZnJvbSBkZWdyZWVcbiAqIEBwYXJhbSAge1N0cmluZ30gcm9tYW4gZS5nLiBpaSBPUiBpaVx1MDBCMCBPUiBWN1xuICogQHJldHVybiB7U3RyaW5nfSBlLmcuIG0gT1IgbTdiNSBPUiBNYWo3XG4gKi9cbmNvbnN0IGdldENob3JkTmFtZSA9IChyb21hbjogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgLy8gcmVtb3ZlIGFueSBub24gY2hhcmFjdGVyXG4gIGNvbnN0IHN0ciA9IHJvbWFuLnJlcGxhY2UoL1xcVy9nLCAnJyk7XG4gIGxldCBwcmVmaXggPSAnTSc7XG4gIC8vIGNoZWNrIGlmIGl0IHMgbG93ZXJjYXNlXG4gIGlmIChzdHIudG9Mb3dlckNhc2UoKSA9PT0gc3RyKSB7XG4gICAgcHJlZml4ID0gJ20nO1xuICB9XG4gIGlmIChyb21hbi5pbmRleE9mKCdcdTAwQjAnKSA+IC0xKSB7XG4gICAgcmV0dXJuIHByZWZpeCArICc3YjUnO1xuICB9XG4gIGlmIChyb21hbi5pbmRleE9mKCcrJykgPiAtMSkge1xuICAgIHJldHVybiBwcmVmaXggKyAnIzUnO1xuICB9XG5cbiAgaWYgKHJvbWFuLmluZGV4T2YoJzcnKSA+IC0xKSB7XG4gICAgcmV0dXJuIHByZWZpeCA9PT0gJ00nID8gJ21hajcnIDogJ203JztcbiAgfVxuXG4gIHJldHVybiBwcmVmaXg7XG59O1xuXG4vKipcbiAqIFRha2UgdGhlIHNwZWNpZmllZCBzY2FsZSBhbmQgZGVncmVlcyBhbmQgcmV0dXJuIHRoZSBjaG9yZCBuYW1lcyBmb3IgdGhlbVxuICogVGhlc2UgY2FuIGJlIHVzZWQgYXMgdGhlIHZhbHVlIGZvciB0aGUgYG5vdGVzYCBwYXJhbSBvZiB0aGUgYGNsaXBgIG1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IG5vdGVPY3RhdmVTY2FsZSBlLmcuICdDNCBtYWpvcidcbiAqIEBwYXJhbSAge1N0cmluZ30gY2hvcmREZWdyZXNzIGUuZy4gJ0kgSVYgViBJVidcbiAqIEByZXR1cm4ge1N0cmluZ30gZS5nLiAnQ00gRk0gR00gRk0nXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRDaG9yZHNCeVByb2dyZXNzaW9uID0gKFxuICBub3RlT2N0YXZlU2NhbGU6IHN0cmluZyxcbiAgY2hvcmREZWdyZXNzOiBzdHJpbmdcbik6IHN0cmluZyA9PiB7XG4gIC8vIFNldCB0aGUgb2N0YXZlIGlmIG1pc3NpbmdcbiAgLy8gRm9yIGV4YW1wbGUgaWYgdGhlIG1ldGhvZCB3YXMgY2FsbGVkIHdpdGggYEMgbWFqb3JgIGluc3RlYWQgb2YgYEM0IG1ham9yYCwgdGhlbiBhZGQgdGhlIDRcbiAgY29uc3Qgbm90ZU9jdGF2ZVNjYWxlQXJyID0gbm90ZU9jdGF2ZVNjYWxlLnNwbGl0KCcgJyk7XG4gIGlmICghbm90ZU9jdGF2ZVNjYWxlQXJyWzBdLm1hdGNoKC9cXGQvKSkge1xuICAgIG5vdGVPY3RhdmVTY2FsZUFyclswXSArPSAnNCc7XG4gICAgbm90ZU9jdGF2ZVNjYWxlID0gbm90ZU9jdGF2ZVNjYWxlQXJyLmpvaW4oJyAnKTtcbiAgfVxuXG4gIC8vIEdldCB0aGUgc2NhbGUgZnJvbSB0aGUgZ2l2ZW4gbm90ZSBhbmQgc2NhbGUvbW9kZSBjb21iaW5hdGlvblxuICBjb25zdCBtb2RlID0gc2NhbGUobm90ZU9jdGF2ZVNjYWxlKTtcbiAgY29uc3QgY2hvcmREZWdyZWVzQXJyID0gY2hvcmREZWdyZXNzLnJlcGxhY2UoL1xccyosK1xccyovZywgJyAnKS5zcGxpdCgnICcpO1xuICAvLyBOb3cgd2UgaGF2ZSBzb21ldGhpbmcgbGlrZSBbJ2knLCAnaWknLCAnSVYnXVxuICAvLyBDb252ZXJ0IGl0IHRvIGEgY2hvcmQgZmFtaWx5IHN1Y2ggYXMgWydDbScsICdEbScsICdGTSddXG4gIGNvbnN0IGNob3JkRmFtaWx5ID0gY2hvcmREZWdyZWVzQXJyLm1hcCgocm9tYW4sIGlkeCkgPT4ge1xuICAgIGNvbnN0IGNob3JkTmFtZSA9IGdldENob3JkTmFtZShyb21hbik7IC8vIGUuZy4gbVxuICAgIC8vIGdldCB0aGUgaW5kZXggdG8gYmUgdXNlZCBieSByZW1vdmluZyBhbnkgZGlnaXQgb3Igbm9uIGFscGhhYmV0IGNoYXJhY3RlclxuICAgIGNvbnN0IHNjYWxlSWQgPSBpZHhCeURlZ3JlZVtyb21hbi5yZXBsYWNlKC9cXFd8XFxkL2csICcnKS50b0xvd2VyQ2FzZSgpXTsgLy8gZS5nLiAwXG4gICAgLy8gZ2V0IHRoZSBub3RlIGl0c2VsZlxuICAgIGNvbnN0IG5vdGUgPSBtb2RlW3NjYWxlSWRdOyAvLyBlLmcuIENcbiAgICAvLyBnZXQgdGhlIG9jdGF2ZSBvZiB0aGUgbm90ZTtcbiAgICBjb25zdCBvY3QgPSBub3RlLnJlcGxhY2UoL1xcRCsvLCAnJyk7IC8vIGUuZy4gNFxuICAgIC8vIG5vdyBnZXQgdGhlIGNob3JkXG4gICAgcmV0dXJuIG5vdGUucmVwbGFjZSgvXFxkLywgJycpICsgY2hvcmROYW1lICsgJ18nICsgb2N0O1xuICB9KTtcblxuICByZXR1cm4gY2hvcmRGYW1pbHkudG9TdHJpbmcoKS5yZXBsYWNlKC8sL2csICcgJyk7XG59O1xuXG5jb25zdCBnZXRQcm9nRmFjdG9yeSA9ICh7IFQsIFAsIEQgfTogVFBEKSA9PiB7XG4gIHJldHVybiAoY291bnQ6IG51bWJlciA9IDQpID0+IHtcbiAgICBjb25zdCBjaG9yZHMgPSBbXTtcblxuICAgIC8vIFB1c2ggcm9vdC90b25pY1xuICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoVCkpO1xuXG4gICAgbGV0IGkgPSAxO1xuXG4gICAgLy8gUGljayBhIHByZWRvbWluYW50XG4gICAgaWYgKGkgPCBjb3VudCAtIDEpIHtcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoUCkpO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIC8vIFRyeSBhbm90aGVyIHByZWRvbWluYW50XG4gICAgaWYgKGkgPCBjb3VudCAtIDEgJiYgZGljZSgpKSB7XG4gICAgICBjaG9yZHMucHVzaChwaWNrT25lKFApKTtcbiAgICAgIGkrKztcbiAgICB9XG5cbiAgICAvLy8vLy8vLy8gNCBvciBtb3JlLy8vLy8vLy8vL1xuICAgIGlmIChpIDwgY291bnQgLSAxKSB7XG4gICAgICAvLyBQaWNrIGEgZG9taW5hbnRcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoRCkpO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIGlmIChpIDwgY291bnQgLSAxKSB7XG4gICAgICAvLyBQaWNrIGEgcHJlZG9taW5hbnRcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoUCkpO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIGlmIChpIDwgY291bnQgLSAxKSB7XG4gICAgICAvLyBQaWNrIGEgZG9taW5hbnRcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoRCkpO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIC8vIFBpY2sgYSBwcmVkb21pbmFudCBpZiBwb3NzaWJsZVxuICAgIGlmIChpIDwgY291bnQgLSAxICYmIGRpY2UoKSkge1xuICAgICAgY2hvcmRzLnB1c2gocGlja09uZShQKSk7XG4gICAgICBpKys7XG4gICAgfVxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIC8vIEZpbGwgdGhlIHJlc3Qgd2l0aCBkb21pbmFudFxuICAgIHdoaWxlIChpIDwgY291bnQpIHtcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoRCkpO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIHJldHVybiBjaG9yZHM7XG4gIH07XG59O1xuXG5jb25zdCBNID0gZ2V0UHJvZ0ZhY3RvcnkoeyBUOiBbJ0knLCAndmknXSwgUDogWydpaScsICdJViddLCBEOiBbJ1YnXSB9KTtcbmNvbnN0IG0gPSBnZXRQcm9nRmFjdG9yeSh7IFQ6IFsnaScsICdWSSddLCBQOiBbJ2lpJywgJ2l2J10sIEQ6IFsnViddIH0pO1xuXG4vKipcbiAqIEdlbmVyYXRlIGEgY2hvcmQgcHJvZ3Jlc3Npb24gYmFzZWQgb24gYmFzaWMgbXVzaWMgdGhlb3J5XG4gKiB3aGVyZSB3ZSBmb2xsb3cgdG9uaWMgdG8gb3B0aW9uYWxseSBwcmVkb21pbmFudCBhbmQgdGhlbiBkb21pbmFudFxuICogYW5kIHRoZW4gcmFuZG9tbHkgdG8gcHJlZG9taW5hbnQgYW5kIGNvbnRpbnVlIHRoaXMgdGlsbCB3ZSByZWFjaCBgY291bnRgXG4gKiBAcGFyYW0gc2NhbGVUeXBlIGUuZy4gTSAoZm9yIG1ham9yIGNob3JkIHByb2dyZXNzaW9uKSwgbSAoZm9yIG1pbm9yIGNob3JkIHByb2dyZXNzaW9uKVxuICogQHBhcmFtIGNvdW50IGUuZy4gNFxuICovXG5leHBvcnQgY29uc3QgcHJvZ3Jlc3Npb24gPSAoc2NhbGVUeXBlOiBwcm9ncmVzc2lvblNjYWxlLCBjb3VudDogbnVtYmVyID0gNCkgPT4ge1xuICBpZiAoc2NhbGVUeXBlID09PSAnbWFqb3InIHx8IHNjYWxlVHlwZSA9PT0gJ00nKSB7XG4gICAgcmV0dXJuIE0oY291bnQpO1xuICB9XG5cbiAgaWYgKHNjYWxlVHlwZSA9PT0gJ21pbm9yJyB8fCBzY2FsZVR5cGUgPT09ICdtJykge1xuICAgIHJldHVybiBtKGNvdW50KTtcbiAgfVxufTtcbiIsICJpbXBvcnQgeyBnZXRDaG9yZHNCeVByb2dyZXNzaW9uIH0gZnJvbSAnc2NyaWJibGV0dW5lL3NyYy9wcm9ncmVzc2lvbic7XG5pbXBvcnQgeyBzY2FsZSwgaW5saW5lQ2hvcmQgfSBmcm9tICdoYXJtb25pY3MnO1xuXG5pbXBvcnQgeyBpc1Byb2dyZXNzaW9uLCB0cmFuc2Zvcm0gfSBmcm9tICcuL3Rva2VuaXplJztcbmltcG9ydCB7IHJlcGVhdCwgY2xvbmUgfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZShpbnB1dCwgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGlucHV0KSkgcmV0dXJuIGlucHV0O1xuXG4gIGNvbnN0IGZuID0gdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nID8gY2FsbGJhY2sgOiAodiA9PiB2KTtcblxuICBsZXQgc2tpcDtcbiAgcmV0dXJuIGlucHV0LnJlZHVjZSgocHJldiwgY3VyLCBpKSA9PiB7XG4gICAgY29uc3QgbGFzdCA9IHByZXZbcHJldi5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBuZXh0ID0gaW5wdXRbaSArIDFdIHx8IHt9O1xuICAgIGNvbnN0IG9sZCA9IGlucHV0W2kgLSAxXSB8fCB7fTtcblxuICAgIGlmIChza2lwKSB7XG4gICAgICBza2lwID0gZmFsc2U7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShjdXIpKSB7XG4gICAgICBwcmV2LnB1c2goLi4uY3VyKTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmIChjdXIudHlwZSA9PT0gJ3ZhbHVlJyAmJiBjdXIudmFsdWUgPT09ICcuJykge1xuICAgICAgaWYgKHByZXYubGVuZ3RoID4gMCkgcHJldi5wdXNoKHByZXZbMF0pO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKG9sZC50eXBlID09PSAncGF0dGVybicgJiYgY3VyLnR5cGUgPT09ICdwYXR0ZXJuJykge1xuICAgICAgcHJldltwcmV2Lmxlbmd0aCAtIDFdICs9IGN1ci52YWx1ZTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIHN3aXRjaCAoY3VyLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3BhdHRlcm4nOlxuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ25vdGUnOlxuICAgICAgICBpZiAoY3VyLnJlcGVhdCkgcHJldi5wdXNoKC4uLnJlcGVhdChjdXIudmFsdWUsIGN1ci5yZXBlYXQpKTtcbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjdXIudmFsdWUpKSBwcmV2LnB1c2goLi4uY3VyLnZhbHVlKTtcbiAgICAgICAgZWxzZSBwcmV2LnB1c2goY3VyLnZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2Nob3JkJzpcbiAgICAgICAgaWYgKGN1ci5yZXBlYXQpIHByZXYucHVzaCguLi5yZXBlYXQoY3VyLnZhbHVlLCBjdXIucmVwZWF0KSk7XG4gICAgICAgIGVsc2UgaWYgKGN1ci51bmZvbGQpIHByZXYucHVzaCguLi5jdXIudmFsdWUpO1xuICAgICAgICBlbHNlIHByZXYucHVzaChjdXIudmFsdWUpO1xuXG4gICAgICAgIGlmIChjdXIudHlwZSAhPT0gJ2Nob3JkJykge1xuICAgICAgICAgIHNraXAgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdkaXZpZGUnOlxuICAgICAgICBwcmV2W3ByZXYubGVuZ3RoIC0gMV0gLz0gY3VyLnZhbHVlO1xuICAgICAgICByZXR1cm4gcHJldjtcblxuICAgICAgY2FzZSAnbXVsdGlwbHknOlxuICAgICAgICBwcmV2LnB1c2goLi4ucmVwZWF0KGxhc3QsIGN1ci52YWx1ZSAtIDEpKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3NsaWNlJzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobGFzdCkpIHtcbiAgICAgICAgICBwcmV2W3ByZXYubGVuZ3RoIC0gMV0gPSBsYXN0LnNsaWNlKGN1ci52YWx1ZVswXSAtIDEsIGN1ci52YWx1ZVsxXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJldi5wdXNoKGN1ci52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ21vZGUnOlxuICAgICAgICBwcmV2W3ByZXYubGVuZ3RoIC0gMV0gPSBgJHtsYXN0fSAke2N1ci52YWx1ZX1gO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAncGFyYW0nOlxuICAgICAgY2FzZSAndmFsdWUnOiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IG51bGw7XG4gICAgICAgIGlmICh0eXBlb2YgY29udGV4dFtjdXIudmFsdWVdICE9PSAndW5kZWZpbmVkJykgdmFsdWUgPSBjb250ZXh0W2N1ci52YWx1ZV07XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyBleHByZXNzaW9uIGZvciAnJHtjdXIudmFsdWV9J2ApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlWzBdICYmIHZhbHVlWzBdLnR5cGUpIHtcbiAgICAgICAgICB2YWx1ZSA9IHJlZHVjZSh2YWx1ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY3VyLnJlcGVhdCkge1xuICAgICAgICAgICAgcHJldi5wdXNoKC4uLnJlcGVhdCh2YWx1ZSwgY3VyLnJlcGVhdCkucmVkdWNlKChfcHJldiwgX2N1cikgPT4ge1xuICAgICAgICAgICAgICBfcHJldi5wdXNoKC4uLl9jdXIpO1xuICAgICAgICAgICAgICByZXR1cm4gX3ByZXY7XG4gICAgICAgICAgICB9LCBbXSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcmV2LnB1c2goLi4udmFsdWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFsdWUgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXTtcbiAgICAgICAgaWYgKGN1ci5yZXBlYXQpIHByZXYucHVzaCguLi5yZXBlYXQodmFsdWUsIGN1ci5yZXBlYXQpKTtcbiAgICAgICAgZWxzZSBwcmV2LnB1c2goLi4udmFsdWUpO1xuICAgICAgfSBicmVhaztcbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmhhbmRsZWQgJyR7Y3VyLnR5cGV9J2ApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcmV2O1xuICB9LCBbXSkucmVkdWNlKChtZW1vLCBpdGVtKSA9PiB7XG4gICAgY29uc3QgcHJldiA9IG1lbW9bbWVtby5sZW5ndGggLSAxXTtcblxuICAgIGlmIChcbiAgICAgIEFycmF5LmlzQXJyYXkocHJldilcbiAgICAgICYmIEFycmF5LmlzQXJyYXkoaXRlbSlcbiAgICAgICYmIHR5cGVvZiBpdGVtWzBdID09PSAnbnVtYmVyJ1xuICAgICAgJiYgaXRlbS5sZW5ndGggPT09IDJcbiAgICApIHtcbiAgICAgIGNvbnN0IG9mZnNldCA9IGl0ZW1bMV0gPT09IEluZmluaXR5ID8gcHJldi5sZW5ndGggOiBpdGVtWzFdO1xuICAgICAgY29uc3QgW2Jhc2UsIGxlbmd0aF0gPSBTdHJpbmcob2Zmc2V0KS5zcGxpdCgvXFxELyk7XG5cbiAgICAgIG1lbW8ucG9wKCk7XG4gICAgICBtZW1vLnB1c2goLi4ucHJldi5zbGljZShpdGVtWzBdIC0gMSwgYmFzZSkpO1xuXG4gICAgICBpZiAoU3RyaW5nKG9mZnNldCkuaW5jbHVkZXMoJz4nKSkge1xuICAgICAgICBjb25zdCBwYXJ0cyA9IG1lbW8uc2xpY2UoLWxlbmd0aCAtIDEpO1xuXG4gICAgICAgIHBhcnRzLnBvcCgpO1xuICAgICAgICBwYXJ0cy5yZXZlcnNlKCk7XG4gICAgICAgIG1lbW8ucHVzaCguLi5wYXJ0cyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWVtbztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnICYmIGl0ZW0uaW5jbHVkZXMoJyAnKSkge1xuICAgICAgY29uc3QgY2h1bmtzID0gaXRlbS5zcGxpdCgnICcpO1xuXG4gICAgICBpZiAoY2h1bmtzLnNvbWUoaXNQcm9ncmVzc2lvbikpIHtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gY2h1bmtzLmZpbmRJbmRleChpc1Byb2dyZXNzaW9uKTtcbiAgICAgICAgY29uc3QgW2EsIGJdID0gW2NodW5rcy5zbGljZSgwLCBvZmZzZXQpLCBjaHVua3Muc2xpY2Uob2Zmc2V0KV07XG5cbiAgICAgICAgbWVtby5wdXNoKGdldENob3Jkc0J5UHJvZ3Jlc3Npb24oYS5qb2luKCcgJyksIGIuam9pbignICcpKS5zcGxpdCgnICcpLm1hcCh4ID0+IGZuKGlubGluZUNob3JkKHgpKSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVtby5wdXNoKGZuKHNjYWxlKGl0ZW0pKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lbW8ucHVzaChmbihpdGVtKSk7XG4gICAgfVxuICAgIHJldHVybiBtZW1vO1xuICB9LCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZShidWZmZXIpIHtcbiAgY29uc3QgdHJhY2tzID0ge307XG4gIGNvbnN0IG1haW4gPSBbXTtcbiAgY29uc3QgZGF0YSA9IHt9O1xuXG4gIGxldCBjaGFubmVsID0gbnVsbDtcbiAgbGV0IHByZWZpeCA9ICcnO1xuICBsZXQgdHJhY2s7XG4gIGxldCBpbmZvID0ge307XG4gIGJ1ZmZlci5zcGxpdCgvXFxyP1xcbi9nKS5mb3JFYWNoKChsaW5lLCBudGgpID0+IHtcbiAgICBsaW5lID0gbGluZS5yZXBsYWNlKC87Lis/JC8sICcnKS50cmltKCk7XG4gICAgaWYgKCFsaW5lKSByZXR1cm47XG5cbiAgICB0cnkge1xuICAgICAgaWYgKGxpbmUuY2hhckF0KCkgPT09ICclJykge1xuICAgICAgICBjb25zdCBbbmFtZSwgLi4udmFsdWVdID0gbGluZS5zcGxpdCgvXFxzKy8pO1xuXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZGF0YVtuYW1lXSA9IHRyYW5zZm9ybSh2YWx1ZS5qb2luKCcgJykpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGxpbmUuaW5kZXhPZignIyAnKSA+PSAwKSB7XG4gICAgICAgIGlmICh0cmFjaykge1xuICAgICAgICAgIHRyYWNrc1t0cmFja10gPSBpbmZvO1xuICAgICAgICAgIGNoYW5uZWwgPSBudWxsO1xuICAgICAgICAgIHByZWZpeCA9ICcnO1xuICAgICAgICAgIGluZm8gPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyYWNrID0gbGluZS5zcGxpdCgvXFxzKy8pLnNsaWNlKDEpLmpvaW4oJyAnKTtcbiAgICAgIH0gZWxzZSBpZiAobGluZS5jaGFyQXQoKSA9PT0gJz4nKSB7XG4gICAgICAgIG1haW4ucHVzaCh0cmFuc2Zvcm0obGluZS5zdWJzdHIoMSkudHJpbSgpKSk7XG4gICAgICB9IGVsc2UgaWYgKGxpbmUuY2hhckF0KCkgPT09ICdAJykge1xuICAgICAgICBjb25zdCBbbmFtZSwgLi4uZXh0ZW5kXSA9IGxpbmUuc3Vic3RyKDEpLnNwbGl0KCcgJyk7XG5cbiAgICAgICAgaWYgKGV4dGVuZFswXSA9PT0gJzwnKSB7XG4gICAgICAgICAgY29uc3Qga2V5ID0gYCR7ZXh0ZW5kWzFdfSNgO1xuXG4gICAgICAgICAgT2JqZWN0LmtleXMoaW5mbylcbiAgICAgICAgICAgIC5maWx0ZXIoeCA9PiB4LmluZGV4T2Yoa2V5KSA9PT0gMClcbiAgICAgICAgICAgIC5mb3JFYWNoKGsgPT4ge1xuICAgICAgICAgICAgICBpbmZvW2Ake25hbWV9IyR7ay5zcGxpdCgnIycpWzFdfWBdID0gY2xvbmUoaW5mb1trXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBwcmVmaXggPSBuYW1lO1xuICAgICAgfSBlbHNlIGlmIChsaW5lLmluZGV4T2YoJzonKSA+IDApIHtcbiAgICAgICAgY29uc3QgW25hbWUsIC4uLnZhbHVlXSA9IGxpbmUuc3BsaXQoJzonKTtcblxuICAgICAgICBkYXRhW25hbWVdID0gdHJhbnNmb3JtKHZhbHVlLmpvaW4oJzonKS50cmltKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGlja3MgPSB0cmFuc2Zvcm0obGluZSk7XG5cbiAgICAgICAgaWYgKCF0aWNrc1swXSB8fCB0aWNrc1swXS50eXBlICE9PSAnY2hhbm5lbCcpIHtcbiAgICAgICAgICBpZiAoIWNoYW5uZWwpIHRocm93IG5ldyBUeXBlRXJyb3IoYE1pc3NpbmcgY2hhbm5lbCwgZ2l2ZW4gJyR7bGluZX0nYCk7XG5cbiAgICAgICAgICBjb25zdCBlbmQgPSBpbmZvW2NoYW5uZWxdW2luZm9bY2hhbm5lbF0ubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICBpZiAoIWVuZC52YWx1ZXMpIGVuZC52YWx1ZXMgPSBbeyB0eXBlOiAnbnVtYmVyJywgdmFsdWU6IDEyNyB9XTtcbiAgICAgICAgICBlbmQudmFsdWVzLnB1c2goLi4udGlja3MpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5vdGVzID0gdGlja3MuZmluZEluZGV4KHggPT4gWydub3RlJywgJ2Nob3JkJywgJ3BhcmFtJ10uaW5jbHVkZXMoeC50eXBlKSk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGlja3MuZmluZEluZGV4KHggPT4geC50eXBlID09PSAncGF0dGVybicpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGluZGV4ID4gMCA/IHRpY2tzLnNsaWNlKGluZGV4KSA6IHRpY2tzO1xuICAgICAgICBjb25zdCBvZmZzZXQgPSB2YWx1ZS5maW5kSW5kZXgoeCA9PiB4LnR5cGUgIT09ICdwYXR0ZXJuJyk7XG4gICAgICAgIGNvbnN0IGlucHV0cyA9IHRpY2tzLnNsaWNlKDAsIGluZGV4ID4gMCA/IGluZGV4IDogMSk7XG5cbiAgICAgICAgY2hhbm5lbCA9IHByZWZpeCArIGlucHV0c1swXS52YWx1ZTtcbiAgICAgICAgaWYgKCFpbmZvW2NoYW5uZWxdKSB7XG4gICAgICAgICAgaW5mb1tjaGFubmVsXSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNwZWM7XG4gICAgICAgIGlmIChub3RlcyA+IDAgJiYgaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgY29uc3QgZW5kID0gaW5mb1tjaGFubmVsXVtpbmZvW2NoYW5uZWxdLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgICAgZW5kLmRhdGEgPSB2YWx1ZS5zbGljZShub3Rlcyk7XG4gICAgICAgICAgc3BlYyA9IHtcbiAgICAgICAgICAgIGlucHV0OiBlbmQuaW5wdXQsXG4gICAgICAgICAgICB2YWx1ZXM6IHZhbHVlLnNsaWNlKDEsIG5vdGVzKSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKG9mZnNldCA+IDApIHtcbiAgICAgICAgICBzcGVjID0ge1xuICAgICAgICAgICAgZGF0YTogdmFsdWUuc2xpY2Uob2Zmc2V0KSxcbiAgICAgICAgICAgIGlucHV0OiB2YWx1ZS5zbGljZSgwLCBvZmZzZXQpLFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAob2Zmc2V0ID09PSAwKSB7XG4gICAgICAgICAgc3BlYyA9IHsgdmFsdWVzOiB2YWx1ZS5zbGljZSgxKSB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNwZWMgPSB7IGlucHV0OiB2YWx1ZSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlucHV0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgc3BlYy52YWx1ZXMgPSBpbnB1dHMuc2xpY2UoMSk7XG4gICAgICAgIH1cbiAgICAgICAgaW5mb1tjaGFubmVsXS5wdXNoKHNwZWMpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnN0IG1zZyA9IHR5cGVvZiBlID09PSAnc3RyaW5nJyA/IGUgOiBlLm1lc3NhZ2U7XG5cbiAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgJHttc2d9XFxuICBhdCBsaW5lICR7bnRoICsgMX1cXG4ke2xpbmV9YCk7XG4gICAgfVxuICB9KTtcblxuICBpZiAodHJhY2spIHtcbiAgICB0cmFja3NbdHJhY2tdID0gaW5mbztcbiAgfVxuICByZXR1cm4geyBtYWluLCBkYXRhLCB0cmFja3MgfTtcbn1cbiIsICJpbXBvcnQgeyBVdGlscyB9IGZyb20gJ21pZGktd3JpdGVyLWpzJztcbmltcG9ydCB7IEZpbGUsIFRyYWNrIH0gZnJvbSAnanNtaWRnZW4nO1xuaW1wb3J0IHsgemlwLCBmbGF0dGVuIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBzcGxpdCwgaXNQYXR0ZXJuIH0gZnJvbSAnLi90b2tlbml6ZSc7XG5pbXBvcnQgeyByZWR1Y2UgfSBmcm9tICcuL3BhcnNlcic7XG5cbmNvbnN0IERFRkFVTFQgPSBTeW1ib2woJ0BtYWluJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZChtaWRpLCBicG0gPSAxMjAsIGxlbmd0aCA9IDE2KSB7XG4gIGNvbnN0IGZpbGUgPSBuZXcgRmlsZSgpO1xuICBjb25zdCBxID0gMTY7XG4gIGNvbnN0IG8gPSB7fTtcblxuICBicG0gKj0gbGVuZ3RoIC8gcTtcblxuICBsZXQgY2ggPSAwO1xuICBmdW5jdGlvbiBnZXQobnRoLCBuYW1lKSB7XG4gICAgY29uc3Qga2V5ID0gbnRoICsgbmFtZTtcblxuICAgIGlmICghZ2V0W2tleV0pIHtcbiAgICAgIGNvbnN0IHRyYWNrID0gbmV3IFRyYWNrKCk7XG4gICAgICBjb25zdCBjaGFuID0gbnRoID09PSAnMCcgPyA5IDogY2g7XG5cbiAgICAgIGZpbGUuYWRkVHJhY2sodHJhY2spO1xuICAgICAgZ2V0W2tleV0gPSB7IGNoYW4sIHRyYWNrIH07XG4gICAgICBpZiAobnRoICE9PSAnMCcpIGNoICs9IDE7XG4gICAgfVxuICAgIHJldHVybiBnZXRba2V5XTtcbiAgfVxuXG4gIG1pZGkuZm9yRWFjaChzZWN0aW9uID0+IHtcbiAgICBzZWN0aW9uLmZvckVhY2gocGFydHMgPT4ge1xuICAgICAgcGFydHMuZm9yRWFjaChlID0+IHtcbiAgICAgICAgY29uc3QgeyBjaGFuLCB0cmFjayB9ID0gZ2V0KGVbMF0sIGVbMV0pO1xuXG4gICAgICAgIHRyYWNrLnNldFRlbXBvKGJwbSk7XG4gICAgICAgIGlmIChjaGFuICE9PSA5KSB7XG4gICAgICAgICAgdHJhY2suaW5zdHJ1bWVudChjaGFuLCBlWzBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZVsyXS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGNvbnN0IHRpY2sgPSBlWzJdW2ldO1xuXG4gICAgICAgICAgaWYgKHRpY2sudiA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IG5vdGUgPSB0aWNrLm4gfHwgJ0MzJztcblxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobm90ZSkpIHtcbiAgICAgICAgICAgICAgdHJhY2subm90ZU9mZihjaGFuLCAnJywgcSk7XG4gICAgICAgICAgICAgIHRyYWNrLmFkZENob3JkKGNoYW4sIG5vdGUsIHEsIHRpY2sudik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0cmFjay5ub3RlT24oY2hhbiwgbm90ZSwgcSwgdGljay52KTtcbiAgICAgICAgICAgICAgdHJhY2subm90ZU9mZihjaGFuLCBub3RlLCBxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJhY2subm90ZU9mZihjaGFuLCAnJywgcSAqIDIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gZmlsZS50b0J5dGVzKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYWNrKHZhbHVlcywgbm90ZXMpIHtcbiAgbGV0IG9mZnNldDtcbiAgZnVuY3Rpb24gcmVzb2x2ZSh4KSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoeCkpIHtcbiAgICAgIHJldHVybiB4Lm1hcChyZXNvbHZlKTtcbiAgICB9XG5cbiAgICBsZXQgdG9rZW47XG4gICAgaWYgKCEnLXhfJy5pbmNsdWRlcyh4KSkge1xuICAgICAgdG9rZW4gPSB7IHY6IDEyNywgbDogeCB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0b2tlbiA9IHsgdjogeCA9PT0gJy0nID8gMCA6IDEyNyB9O1xuICAgIH1cblxuICAgIGlmICh4ICE9PSAnLScpIHtcbiAgICAgIHRva2VuLnYgPSB0eXBlb2YgdmFsdWVzW29mZnNldF0gIT09ICd1bmRlZmluZWQnID8gdmFsdWVzW29mZnNldF0gOiB0b2tlbi52IHx8IDA7XG4gICAgICBpZiAodHlwZW9mIG5vdGVzW29mZnNldF0gIT09ICd1bmRlZmluZWQnKSB0b2tlbi5uID0gbm90ZXNbb2Zmc2V0XTtcbiAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID09PSAxKSB0b2tlbi52ID0gdmFsdWVzWzBdO1xuICAgICAgaWYgKHRva2VuLnYgfHwgdG9rZW4ubikgb2Zmc2V0ICs9IDE7XG4gICAgfVxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZSA9PiB7XG4gICAgbGV0IHJlc3VsdCA9IHZhbHVlO1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoaXNQYXR0ZXJuKHZhbHVlKSkge1xuICAgICAgICBvZmZzZXQgPSAwO1xuICAgICAgICByZXN1bHQgPSBzcGxpdCh2YWx1ZSkubWFwKHJlc29sdmUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoY3R4KSB7XG4gIGNvbnN0IHNjZW5lcyA9IHt9O1xuXG4gIE9iamVjdC5lbnRyaWVzKGN0eC50cmFja3MpLmZvckVhY2goKFtuYW1lLCBjaGFubmVsc10pID0+IHtcbiAgICBPYmplY3QuZW50cmllcyhjaGFubmVscykuZm9yRWFjaCgoW2NoLCBjbGlwc10pID0+IHtcbiAgICAgIGNvbnN0IFt0YWcsIG1pZGldID0gY2guc3BsaXQoJyMnKTtcbiAgICAgIGNvbnN0IGtleSA9IHRhZyB8fCBERUZBVUxUO1xuXG4gICAgICBsZXQgdGlja3M7XG4gICAgICBsZXQgaW5jID0gMDtcbiAgICAgIGNsaXBzLmZvckVhY2goY2xpcCA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IGNsaXAudmFsdWVzID8gcmVkdWNlKGNsaXAudmFsdWVzLCBjdHguZGF0YSkgOiBbXTtcbiAgICAgICAgY29uc3Qgbm90ZXMgPSBjbGlwLmRhdGEgPyByZWR1Y2UoY2xpcC5kYXRhLCBjdHguZGF0YSkgOiBbXTtcblxuICAgICAgICBpZiAoY2xpcC5pbnB1dCkge1xuICAgICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID4gMSkgdmFsdWVzLnNoaWZ0KCk7XG5cbiAgICAgICAgICBjb25zdCBpbnB1dCA9IGZsYXR0ZW4ocmVkdWNlKGNsaXAuaW5wdXQsIGN0eC5kYXRhLCBwYWNrKHZhbHVlcywgbm90ZXMpKSk7XG5cbiAgICAgICAgICBpZiAoIXRpY2tzKSB7XG4gICAgICAgICAgICB0aWNrcyA9IGlucHV0O1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHppcCh0aWNrcywgaW5wdXQsIChhLCBiKSA9PiB7XG4gICAgICAgICAgICBpZiAoYi52ID4gMCkgYS52ID0gYi52O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRpY2tzKSB7XG4gICAgICAgICAgY29uc3QgbW9kZSA9IGNsaXAudmFsdWVzXG4gICAgICAgICAgICAmJiBjbGlwLnZhbHVlc1swXVxuICAgICAgICAgICAgJiYgY2xpcC52YWx1ZXNbMF0udHlwZSA9PT0gJ21vZGUnID8gY2xpcC52YWx1ZXNbMF0udmFsdWUgOiBudWxsO1xuXG4gICAgICAgICAgdGlja3MuZm9yRWFjaCh0aWNrID0+IHtcbiAgICAgICAgICAgIGlmICh0aWNrLnYgPiAwKSB7XG4gICAgICAgICAgICAgIGlmICghdGljay5uICYmIG5vdGVzLmxlbmd0aCA+IDApIHRpY2subiA9IG5vdGVzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgIGlmIChtb2RlICYmIHZhbHVlcy5sZW5ndGggPiAwKSB0aWNrW21vZGVbMF0udG9Mb3dlckNhc2UoKV0gPSB2YWx1ZXMuc2hpZnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICghc2NlbmVzW2tleV0pIHNjZW5lc1trZXldID0geyB0cmFja3M6IFtdIH07XG4gICAgICBzY2VuZXNba2V5XS50cmFja3MucHVzaChbbWlkaSwgbmFtZSwgdGlja3NdKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgaWYgKCFjdHgubWFpbi5sZW5ndGgpIHtcbiAgICBjdHgubWFpbiA9IFtbeyB0eXBlOiAndmFsdWUnLCB2YWx1ZTogREVGQVVMVCB9XV07XG4gIH1cblxuICByZXR1cm4gY3R4Lm1haW4ubWFwKHRyYWNrID0+IHtcbiAgICByZXR1cm4gcmVkdWNlKHRyYWNrLCBzY2VuZXMpLm1hcChpdGVtID0+IHtcbiAgICAgIHJldHVybiBbXS5jb25jYXQoaXRlbSkucmVkdWNlKChtZW1vLCB4KSA9PiB7XG4gICAgICAgIG1lbW8ucHVzaCguLi54LnRyYWNrcyk7XG4gICAgICAgIHJldHVybiBtZW1vO1xuICAgICAgfSwgW10pO1xuICAgIH0pO1xuICB9KTtcbn1cbiIsICJleHBvcnQgeyBtZXJnZSB9IGZyb20gJy4vbWl4dXAnO1xuZXhwb3J0IHsgcGFyc2UgfSBmcm9tICcuL3BhcnNlcic7XG5leHBvcnQgKiBmcm9tICcuL3V0aWxzJztcbmV4cG9ydCAqIGZyb20gJy4vbWl4dXAnO1xuZXhwb3J0ICogZnJvbSAnLi9wYXJzZXInO1xuZXhwb3J0ICogZnJvbSAnLi90b2tlbml6ZSc7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSUEsU0FBUyxNQUFPLEdBQUc7QUFBRSxTQUFPLE9BQU8sTUFBTTtBQUFTO0FBQ2xELFNBQVMsTUFBTyxHQUFHO0FBQUUsU0FBTyxPQUFPLE1BQU07QUFBUztBQUNsRCxTQUFTLE1BQU8sR0FBRztBQUFFLFNBQU8sT0FBTyxNQUFNO0FBQVk7QUFDckQsU0FBUyxXQUFZQSxPQUFNLFFBQVE7QUFDakMsU0FBTyxLQUFLLElBQUksSUFBSUEsUUFBTyxNQUFNLEVBQUUsS0FBSyxVQUFVO0FBQ3BEO0FBbUZPLFNBQVMsTUFBTyxLQUFLLFNBQVMsUUFBUTtBQUMzQyxNQUFJLE9BQU8sUUFBUSxTQUFV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RyxDQUFDLENBQUM7UUFDUCxDQUFDO01BQ0gsQ0FBQztJQUNIOzs7O0FDOUpBLElBQUEsY0FBQSxDQUFBO0FBQUFHLFVBQUEsYUFBQTtFQUFBLE9BQUEsTUFBQSxhQUFBO0VBQUEsT0FBQSxNQUFBLGNBQUE7QUFBQSxDQUFBO0FBQUEsSUFBQSxlQUFzQixRQUFBLGNBQUEsQ0FBQTtBQUN0QixJQUFBLGdCQUFzQixRQUFBLGVBQUEsQ0FBQTtBQUN0QixXQUFBLGFBQWMsUUFBQSxjQUFBLENBQUEsQ0FBQTtBQUNkLFdBQUEsYUFBYyxRQUFBLGNBQUEsQ0FBQSxDQUFBO0FBQ2QsV0FBQSxhQUFjLFFBQUEsZUFBQSxDQUFBLENBQUE7QUFDZCxXQUFBLGFBQWMsUUFBQSxpQkFBQSxDQUFBLENBQUE7OzsiLAogICJuYW1lcyI6IFsibWlkaSIsICJtIiwgIm5vdGUiLCAiX19leHBvcnQiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiX190b0NvbW1vbkpTIiwgIm9iaiIsICJfc2V0UHJvdG90eXBlT2YiLCAibyIsICJwIiwgIlV0aWxzIiwgIk5vdGVPbkV2ZW50IiwgIk5vdGVPZmZFdmVudCIsICJOb3RlRXZlbnQiLCAic2NhbGUxNGJpdHMiLCAiUGl0Y2hCZW5kRXZlbnQiLCAiUHJvZ3JhbUNoYW5nZUV2ZW50IiwgIkNvbnRyb2xsZXJDaGFuZ2VFdmVudCIsICJDb3B5cmlnaHRFdmVudCIsICJDdWVQb2ludEV2ZW50IiwgIkVuZFRyYWNrRXZlbnQiLCAiSW5zdHJ1bWVudE5hbWVFdmVudCIsICJLZXlTaWduYXR1cmVFdmVudCIsICJMeXJpY0V2ZW50IiwgIk1hcmtlckV2ZW50IiwgIlRlbXBvRXZlbnQiLCAiVGV4dEV2ZW50IiwgIlRpbWVTaWduYXR1cmVFdmVudCIsICJUcmFja05hbWVFdmVudCIsICJUcmFjayIsICJWZXhGbG93IiwgIkhlYWRlckNodW5rIiwgIldyaXRlciIsICJuIiwgImEiLCAiaSIsICJyIiwgImUiLCAidCIsICJzIiwgImMiLCAiZ2V0Q2hvcmRzQnlQcm9ncmVzc2lvbiIsICJzY2FsZSIsICJwYXJzZSIsICJtZXJnZSJdCn0K
