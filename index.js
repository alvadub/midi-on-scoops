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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

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
function midiToFreq(midi3, tuning) {
  return Math.pow(2, (midi3 - 69) / 12) * (tuning || 440);
}
function parse(str, isTonic, tuning) {
  if (typeof str !== "string") return null;
  var m3 = REGEX.exec(str);
  if (!m3 || !isTonic && m3[4]) return null;
  var p2 = { letter: m3[1].toUpperCase(), acc: m3[2].replace(/x/g, "##") };
  p2.pc = p2.letter + p2.acc;
  p2.step = (p2.letter.charCodeAt(0) + 3) % 7;
  p2.alt = p2.acc[0] === "b" ? -p2.acc.length : p2.acc.length;
  var pos = SEMITONES[p2.step] + p2.alt;
  p2.chroma = pos < 0 ? 12 + pos : pos % 12;
  if (m3[3]) {
    p2.oct = +m3[3];
    p2.midi = pos + 12 * (p2.oct + 1);
    p2.freq = midiToFreq(p2.midi, tuning);
  }
  if (isTonic) p2.tonicOf = m3[4];
  return p2;
}
function midi(note3) {
  if ((isNum(note3) || isStr(note3)) && note3 >= 0 && note3 < 128) return +note3;
  var p2 = parse(note3);
  return p2 && isDef(p2.midi) ? p2.midi : null;
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
  if (num === true || num === false) return function(m3) {
    return note(m3, num);
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
  "node_modules/midi-writer-js/package.json"(exports, module) {
    module.exports = {
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
  "node_modules/midi-writer-js/build/index.js"(exports, module) {
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
    function _setPrototypeOf(o, p2) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p3) {
        o2.__proto__ = p3;
        return o2;
      };
      return _setPrototypeOf(o, p2);
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
              this.pitch.forEach(function(p2, i) {
                if (i == 0) {
                  var noteOnNew = new NoteOnEvent({
                    channel: _this.channel,
                    wait: _this.wait,
                    velocity: _this.velocity,
                    pitch: p2,
                    startTick: _this.startTick
                  });
                } else {
                  var noteOnNew = new NoteOnEvent({
                    channel: _this.channel,
                    wait: 0,
                    velocity: _this.velocity,
                    pitch: p2,
                    startTick: _this.startTick
                  });
                }
                _this.events.push(noteOnNew);
              });
              this.pitch.forEach(function(p2, i) {
                if (i == 0) {
                  var noteOffNew = new NoteOffEvent({
                    channel: _this.channel,
                    duration: _this.duration,
                    velocity: _this.velocity,
                    pitch: p2,
                    tick: _this.startTick !== null ? Utils.getTickDuration(_this.duration) + _this.startTick : null
                  });
                } else {
                  var noteOffNew = new NoteOffEvent({
                    channel: _this.channel,
                    duration: 0,
                    velocity: _this.velocity,
                    pitch: p2,
                    tick: _this.startTick !== null ? Utils.getTickDuration(_this.duration) + _this.startTick : null
                  });
                }
                _this.events.push(noteOffNew);
              });
            }
          } else {
            for (var j = 0; j < this.repeat; j++) {
              this.pitch.forEach(function(p2, i) {
                var noteOnNew = new NoteOnEvent({
                  channel: _this.channel,
                  wait: i > 0 ? 0 : _this.wait,
                  // wait only applies to first note in repetition
                  velocity: _this.velocity,
                  pitch: p2,
                  startTick: _this.startTick
                });
                var noteOffNew = new NoteOffEvent({
                  channel: _this.channel,
                  duration: _this.duration,
                  velocity: _this.velocity,
                  pitch: p2
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
        var note3 = sf || "C";
        if (sf[0] === sf[0].toLowerCase()) mode = 1;
        if (_sflen > 1) {
          switch (sf.charAt(_sflen - 1)) {
            case "m":
              mode = 1;
              note3 = sf.charAt(0).toLowerCase();
              note3 = note3.concat(sf.substring(1, _sflen - 1));
              break;
            case "-":
              mode = 1;
              note3 = sf.charAt(0).toLowerCase();
              note3 = note3.concat(sf.substring(1, _sflen - 1));
              break;
            case "M":
              mode = 0;
              note3 = sf.charAt(0).toUpperCase();
              note3 = note3.concat(sf.substring(1, _sflen - 1));
              break;
            case "+":
              mode = 0;
              note3 = sf.charAt(0).toUpperCase();
              note3 = note3.concat(sf.substring(1, _sflen - 1));
              break;
          }
        }
        var fifthindex = fifths[mode].indexOf(note3);
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
      var tempo2 = Math.round(6e7 / bpm);
      this.data = Utils.numberToVariableLength(0).concat(
        Constants.META_EVENT_ID,
        Constants.META_TEMPO_ID,
        [3],
        // Size
        Utils.numberToBytes(tempo2, 3)
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
        value: function convertPitch(pitch, index, note3) {
          var addRenderedAccidentals = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
          var pitchParts = pitch.split("/");
          var accidentals = pitchParts[0].substring(1).replace("n", "");
          if (addRenderedAccidentals) {
            var _note$getAccidentals;
            (_note$getAccidentals = note3.getAccidentals()) === null || _note$getAccidentals === void 0 ? void 0 : _note$getAccidentals.forEach(function(accidental) {
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
        value: function convertDuration(note3) {
          return "d".repeat(note3.dots) + this.convertBaseDuration(note3.duration) + (note3.tuplet ? "t" + note3.tuplet.num_notes : "");
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
          var build2 = [];
          this.data.forEach(function(d) {
            return build2 = build2.concat(d.type, d.size, d.data);
          });
          return new Uint8Array(build2);
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
    module.exports = main;
  }
});

// src/components/player.js
var require_player = __commonJS({
  "src/components/player.js"(exports, module) {
    var { Utils } = require_build();
    var Player2 = class {
      constructor() {
        this.data = [];
        this.beats = [];
        this.bars = 8;
        this.bpm = 127;
        this.fraq = 1 / this.bars;
        this.trackNodes = /* @__PURE__ */ new Map();
        this.trackState = /* @__PURE__ */ new Map();
        this.delayDivision = 3 / 8;
        this.onBeat = null;
        this.initAudio();
      }
      initAudio() {
        const AudioContextFunc = window.AudioContext || window.webkitAudioContext;
        this.audioContext = new AudioContextFunc();
        this.destination = this.audioContext.destination;
        this.player = new WebAudioFontPlayer();
        this.equalizer = this.player.createChannel(this.audioContext);
        this.masterGain = this.audioContext.createGain();
        this.echo = this.player.createReverberator(this.audioContext);
        this.delayInput = this.audioContext.createGain();
        this.delay = this.audioContext.createDelay(4);
        this.delayFeedback = this.audioContext.createGain();
        this.delayWet = this.audioContext.createGain();
        this.masterGain.gain.value = 1;
        this.delayFeedback.gain.value = 0.35;
        this.delayWet.gain.value = 1;
        this.delayInput.gain.value = 1;
        this.equalizer.output.connect(this.masterGain);
        this.echo.output.connect(this.masterGain);
        this.delayInput.connect(this.delay);
        this.delay.connect(this.delayFeedback);
        this.delayFeedback.connect(this.delay);
        this.delay.connect(this.delayWet);
        this.delayWet.connect(this.masterGain);
        this.masterGain.connect(this.destination);
        this.updateDelayTime();
      }
      pitch(value) {
        return Utils.getPitch(value) + this.offset;
      }
      preload(data) {
        this.data = data || this.data;
        let count = 0;
        this.data.forEach((track) => {
          if (track[2].length > count) count = track[2].length;
          const info = track[0] >= 2e3 ? this.player.loader.drumInfo(track[0] - 2e3) : this.player.loader.instrumentInfo(track[0]);
          this.cacheInstrument(info);
        });
        const duration = Utils.getTickDuration("32") / 256;
        const nextKeys = /* @__PURE__ */ new Set();
        for (let i = 0; i < count; i += 1) {
          const beat = /* @__PURE__ */ new Map();
          this.data.forEach((track) => {
            const key = `${track[0]}/${track[1]}`;
            nextKeys.add(key);
            if (!beat.has(key)) beat.set(key, { drums: [], notes: [] });
            const slot = beat.get(key);
            const tick = track[2][i] || {};
            if (track[0] >= 2e3) {
              slot.drums.push([track[0] - 2e3, tick.v]);
            } else if (Array.isArray(tick.n)) {
              tick.n.forEach((tone) => {
                slot.notes.push([track[0], this.pitch(tone), duration, tick.v]);
              });
            } else if (tick.n) {
              slot.notes.push([track[0], this.pitch(tick.n), duration, tick.v]);
            }
          });
          this.beats[i] = beat;
        }
        this.trackNodes.forEach((nodes, key) => {
          if (!nextKeys.has(key)) {
            try {
              nodes.dry.disconnect();
              nodes.reverbSend.disconnect();
              nodes.delaySend.disconnect();
            } catch (e) {
            }
            this.trackNodes.delete(key);
          }
        });
        nextKeys.forEach((key) => this.getTrackNodes(key));
      }
      contextTime() {
        return this.audioContext.currentTime;
      }
      playLoopMachine(fromBeat) {
        this.startPlayLoop(this.beats, this.bpm, this.fraq, fromBeat);
      }
      stopLoopMachine() {
        this.stopPlayLoop();
      }
      setLoopMachine(data, tempo2, length, transpose2) {
        const changed = tempo2 !== this.bpm || length !== this.bars || transpose2 !== this.offset;
        if (changed) this.stopPlayLoop();
        this.beats.length = 0;
        this.bpm = tempo2 || 127;
        this.bars = length || 16;
        this.offset = transpose2 || 0;
        this.updateDelayTime();
        this.preload(data);
        this.fraq = 1 / this.bars;
        return changed;
      }
      startPlayLoop(beats, bpm, density, fromBeat) {
        this.loopStarted = true;
        const wholeNoteDuration = 4 * 60 / bpm;
        this.beatIndex = fromBeat < beats.length ? fromBeat : 0;
        this.playBeatAt(this.contextTime(), beats[this.beatIndex], bpm);
        let nextLoopTime = this.contextTime() + density * wholeNoteDuration;
        this.loopIntervalID = setInterval(() => {
          if (this.contextTime() > nextLoopTime - density * wholeNoteDuration) {
            this.beatIndex += 1;
            if (this.beatIndex >= beats.length) {
              this.beatIndex = 0;
            }
            this.playBeatAt(nextLoopTime, beats[this.beatIndex], bpm);
            nextLoopTime += density * wholeNoteDuration;
          }
        }, 22);
      }
      stopPlayLoop() {
        this.loopStarted = false;
        clearInterval(this.loopIntervalID);
        this.cancelQueue();
      }
      getTrackState(key) {
        if (!this.trackState.has(key)) {
          this.trackState.set(key, {
            muted: false,
            solo: false,
            volume: 1,
            reverbSend: 0,
            delaySend: 0
          });
        }
        return this.trackState.get(key);
      }
      applyTrackState(key) {
        const nodes = this.getTrackNodes(key);
        const state = this.getTrackState(key);
        nodes.state = state;
        nodes.dry.gain.value = state.muted ? 0 : state.volume;
        nodes.reverbSend.gain.value = state.reverbSend;
        nodes.delaySend.gain.value = state.delaySend;
      }
      getTrackNodes(key) {
        if (this.trackNodes.has(key)) {
          return this.trackNodes.get(key);
        }
        const dry = this.audioContext.createGain();
        const reverbSend = this.audioContext.createGain();
        const delaySend = this.audioContext.createGain();
        dry.gain.value = 1;
        reverbSend.gain.value = 0;
        delaySend.gain.value = 0;
        dry.connect(this.equalizer.input);
        reverbSend.connect(this.echo.input);
        delaySend.connect(this.delayInput);
        const nodes = { dry, reverbSend, delaySend };
        this.trackNodes.set(key, nodes);
        this.applyTrackState(key);
        return nodes;
      }
      setMute(key, value) {
        const state = this.getTrackState(key);
        state.muted = Boolean(value);
        this.applyTrackState(key);
      }
      setSolo(key, value) {
        const state = this.getTrackState(key);
        state.solo = Boolean(value);
      }
      setVolume(key, value) {
        const state = this.getTrackState(key);
        state.volume = Math.max(0, Math.min(1, value));
        this.applyTrackState(key);
      }
      setReverbSend(key, value) {
        const state = this.getTrackState(key);
        state.reverbSend = Math.max(0, Math.min(1, value));
        this.applyTrackState(key);
      }
      setDelaySend(key, value) {
        const state = this.getTrackState(key);
        state.delaySend = Math.max(0, Math.min(1, value));
        this.applyTrackState(key);
      }
      setDelayFeedback(value) {
        this.delayFeedback.gain.value = Math.max(0, Math.min(0.75, value));
      }
      setDelayTime(value) {
        this.delayDivision = Math.max(0.125, Math.min(0.75, value));
        this.updateDelayTime();
      }
      updateDelayTime() {
        const whole = 4 * 60 / (this.bpm || 127);
        this.delay.delayTime.value = whole * this.delayDivision;
      }
      getTrackKeys() {
        return [...this.trackNodes.keys()];
      }
      cancelQueue() {
        this.player.cancelQueue(this.audioContext);
      }
      cacheInstrument(info) {
        if (info && !window[info.variable]) {
          if (window[info.variable + 127]) return;
          window[info.variable + 127] = true;
          this.player.loader.startLoad(this.audioContext, info.url, info.variable);
          this.player.loader.waitLoad(() => {
            console.log("cached", info.title);
            delete window[info.variable + 127];
          });
        }
      }
      playDrum(when, drum, nodes) {
        const [instrument, level] = drum;
        const info = this.player.loader.drumInfo(instrument);
        if (window[info.variable]) {
          const pitch = window[info.variable].zones[0].keyRangeLow;
          const gain = 1 / 127 * level;
          if (level > 0) this.queueToTrackNodes(window[info.variable], when, pitch, 1 / 64, gain, nodes);
        } else {
          this.cacheInstrument(info);
        }
      }
      queueToTrackNodes(font, when, pitch, duration, gain, nodes) {
        this.player.queueWaveTable(this.audioContext, nodes.dry, font, when, pitch, duration, gain);
        if (nodes.reverbSend.gain.value > 0) {
          this.player.queueWaveTable(this.audioContext, nodes.reverbSend, font, when, pitch, duration, gain);
        }
        if (nodes.delaySend.gain.value > 0) {
          this.player.queueWaveTable(this.audioContext, nodes.delaySend, font, when, pitch, duration, gain);
        }
      }
      playBeatAt(when, beat, bpm) {
        if (!beat) return;
        const N = 4 * 60 / bpm;
        const hasSolo = [...this.trackState.values()].some((item) => item.solo);
        beat.forEach((slot, key) => {
          const state = this.getTrackState(key);
          if (state.muted) return;
          if (hasSolo && !state.solo) return;
          const nodes = this.getTrackNodes(key);
          let touched = false;
          for (let i = 0; i < slot.drums.length; i += 1) {
            this.playDrum(when, slot.drums[i], nodes);
            touched = true;
          }
          slot.notes.forEach((note3) => {
            const [instrument, pitches, duration, level] = note3;
            const info = this.player.loader.instrumentInfo(instrument);
            if (window[info.variable]) {
              this.queueToTrackNodes(window[info.variable], when, pitches, duration * N, 1 / 127 * level, nodes);
              touched = true;
            } else {
              this.cacheInstrument(info);
            }
          });
          if (touched && typeof this.onBeat === "function") {
            this.onBeat(key, when);
          }
        });
      }
    };
    module.exports = Player2;
  }
});

// node_modules/harmonics/main.js
var require_main2 = __commonJS({
  "node_modules/harmonics/main.js"(exports) {
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
        o.r(a), o.d(a, { chord: () => m3, chords: () => t, inlineChord: () => r2, scale: () => c, scales: () => s });
        var n2 = o(722), e2 = o(413), i2 = function(o2) {
          var a2 = o2.scale, i3 = o2.chord, r3 = a2 || i3, t2 = a2 ? "scale" : "chord";
          if ("string" != typeof r3) throw new Error("".concat(r3, " is not a valid input for ").concat(t2));
          var s2, m4, c2 = r3.indexOf(" ");
          -1 === c2 ? (s2 = r3.slice(1), m4 = r3[0], "b" !== r3[1] && "#" !== r3[1] || (s2 = r3.slice(2), m4 += r3[1])) : (s2 = r3.slice(-1 === c2 ? 1 : c2 + 1), m4 = r3.slice(0, c2));
          var d = (function(n3) {
            return { "C#": "Db", "D#": "Eb", "F#": "Gb", "G#": "Ab", "A#": "Bb" }[n3.toUpperCase()] || n3.charAt(0).toUpperCase() + n3.slice(1);
          })(m4.replace(/\d/g, "")), l = "" !== m4.replace(/\D/g, "") ? +m4.replace(/\D/g, "") : 4;
          if (isNaN(l)) throw new Error("".concat(m4[0], " does not have a valid octave"));
          if (!n2[s2] && !e2[s2]) throw new Error("".concat(r3, " is not a valid ").concat(t2));
          for (var b = (function(n3, e3) {
            var o3 = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"], a3 = o3.map((function(n4) {
              return n4 + e3;
            })), i4 = o3.map((function(n4) {
              return n4 + (e3 + 1);
            })), r4 = a3.concat(i4);
            return r4.slice(r4.indexOf(n3 + e3));
          })(d, l), u = [], p2 = 0, h = 0, f = a2 ? n2 : e2; p2 < f[s2].length; ) "1" === f[s2][p2] && u.push(b[h]), p2++, h++;
          return u;
        }, r2 = function(n3) {
          var e3, o2, a2 = "b9sus", r3 = 4;
          return n3.includes(a2) ? (o2 = a2, e3 = n3.slice(0, n3.indexOf(a2))) : (e3 = n3[0], o2 = n3.slice(1), "b" !== n3[1] && "#" !== n3[1] || (e3 += n3[1], o2 = n3.slice(2))), n3.includes("_") && (r3 = +n3.split("_")[1], o2 = o2.slice(0, o2.indexOf("_"))), i2({ chord: e3 + r3 + " " + o2 });
        }, t = function() {
          return Object.keys(e2);
        }, s = function() {
          return Object.keys(n2);
        }, m3 = function(n3) {
          return i2({ chord: n3 });
        }, c = function(n3) {
          return i2({ scale: n3 });
        };
      })();
      var i = exports;
      for (var r in a) i[r] = a[r];
      a.__esModule && Object.defineProperty(i, "__esModule", { value: true });
    })();
  }
});

// node_modules/scribbletune/src/utils.ts
var pickOne2, dice2;
var init_utils2 = __esm({
  "node_modules/scribbletune/src/utils.ts"() {
    pickOne2 = (arr) => arr.length > 1 ? arr[Math.round(Math.random())] : arr[0];
    dice2 = () => !!Math.round(Math.random());
  }
});

// node_modules/scribbletune/src/progression.ts
var progression_exports2 = {};
__export(progression_exports2, {
  getChordDegrees: () => getChordDegrees2,
  getChordsByProgression: () => getChordsByProgression2,
  progression: () => progression2
});
var import_harmonics2, getChordDegrees2, idxByDegree2, getChordName2, getChordsByProgression2, getProgFactory2, M2, m2, progression2;
var init_progression2 = __esm({
  "node_modules/scribbletune/src/progression.ts"() {
    import_harmonics2 = __toESM(require_main2());
    init_utils2();
    getChordDegrees2 = (mode) => {
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
    idxByDegree2 = {
      i: 0,
      ii: 1,
      iii: 2,
      iv: 3,
      v: 4,
      vi: 5,
      vii: 6
    };
    getChordName2 = (roman) => {
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
    getChordsByProgression2 = (noteOctaveScale, chordDegress) => {
      const noteOctaveScaleArr = noteOctaveScale.split(" ");
      if (!noteOctaveScaleArr[0].match(/\d/)) {
        noteOctaveScaleArr[0] += "4";
        noteOctaveScale = noteOctaveScaleArr.join(" ");
      }
      const mode = (0, import_harmonics2.scale)(noteOctaveScale);
      const chordDegreesArr = chordDegress.replace(/\s*,+\s*/g, " ").split(" ");
      const chordFamily = chordDegreesArr.map((roman, idx) => {
        const chordName = getChordName2(roman);
        const scaleId = idxByDegree2[roman.replace(/\W|\d/g, "").toLowerCase()];
        const note3 = mode[scaleId];
        const oct = note3.replace(/\D+/, "");
        return note3.replace(/\d/, "") + chordName + "_" + oct;
      });
      return chordFamily.toString().replace(/,/g, " ");
    };
    getProgFactory2 = ({ T, P, D }) => {
      return (count = 4) => {
        const chords = [];
        chords.push(pickOne2(T));
        let i = 1;
        if (i < count - 1) {
          chords.push(pickOne2(P));
          i++;
        }
        if (i < count - 1 && dice2()) {
          chords.push(pickOne2(P));
          i++;
        }
        if (i < count - 1) {
          chords.push(pickOne2(D));
          i++;
        }
        if (i < count - 1) {
          chords.push(pickOne2(P));
          i++;
        }
        if (i < count - 1) {
          chords.push(pickOne2(D));
          i++;
        }
        if (i < count - 1 && dice2()) {
          chords.push(pickOne2(P));
          i++;
        }
        while (i < count) {
          chords.push(pickOne2(D));
          i++;
        }
        return chords;
      };
    };
    M2 = getProgFactory2({ T: ["I", "vi"], P: ["ii", "IV"], D: ["V"] });
    m2 = getProgFactory2({ T: ["i", "VI"], P: ["ii", "iv"], D: ["V"] });
    progression2 = (scaleType, count = 4) => {
      if (scaleType === "major" || scaleType === "M") {
        return M2(count);
      }
      if (scaleType === "minor" || scaleType === "m") {
        return m2(count);
      }
    };
  }
});

// src/lib/tokenize.js
var require_tokenize2 = __commonJS({
  "src/lib/tokenize.js"(exports, module) {
    var { inlineChord } = require_main2();
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
    Object.assign(module.exports, { RE_CHORD, RE_MODE, RE_NOTE, RE_NUMBER, RE_PATTERN, RE_PROG, RE_SEPARATOR, RE_TRIM, getType, isChord, isMode, isNote, isNumber, isPattern, isProgression, level, split, transform, validate });
  }
});

// src/lib/utils.js
var require_utils2 = __commonJS({
  "src/lib/utils.js"(exports, module) {
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
    Object.assign(module.exports, { clone, flatten, range, repeat, zip });
  }
});

// src/lib/parser.js
var require_parser2 = __commonJS({
  "src/lib/parser.js"(exports, module) {
    var { getChordsByProgression: getChordsByProgression3 } = (init_progression2(), __toCommonJS(progression_exports2));
    var { scale: scale2, inlineChord } = require_main2();
    var { isProgression, transform } = require_tokenize2();
    var { repeat, clone } = require_utils2();
    function reduce2(input, context, callback) {
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
                value = reduce2(value, context);
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
            memo.push(getChordsByProgression3(a.join(" "), b.join(" ")).split(" ").map((x) => fn(inlineChord(x))));
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
    Object.assign(module.exports, { parse: parse3, reduce: reduce2 });
  }
});

// src/highlight.js
var require_highlight = __commonJS({
  "src/highlight.js"(exports, module) {
    function esc(value) {
      return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    function span(cls, value, dataVar) {
      const attrs = dataVar ? ` class="${cls}" data-var="${esc(dataVar)}"` : ` class="${cls}"`;
      return `<span${attrs}>${esc(value)}</span>`;
    }
    function classify(token) {
      if (!token) return null;
      if (token === "<") return "tok-inherit";
      if (token === "%") return "tok-var-ref";
      if (token.charAt(0) === "%") return "tok-var-ref";
      if (/^\*\d+$/.test(token)) return "tok-repeat";
      if (/^[x_\-\[\]]+$/.test(token)) return "tok-pattern";
      if (/^[a-gA-G][#b]?\d+$/.test(token)) return "tok-note";
      if (token.includes("|")) return "tok-chord";
      if (/^(major|minor|phrygian|dorian|mixolydian|locrian|lydian)$/i.test(token)) return "tok-mode";
      if (/^(?:I|II|III|IV|V|VI|VII|i|ii|iii|iv|v|vi|vii)°?$/.test(token)) return "tok-progression";
      if (/^(?:\+\+|\.\.|>>|\*\*)$/.test(token)) return "tok-operator";
      if (/^#\d+$/.test(token)) return "tok-channel";
      if (/^-?\d+(\.\d+)?$/.test(token)) return "tok-number";
      return null;
    }
    function renderToken(token) {
      const cls = classify(token);
      if (!cls) return esc(token);
      if (cls === "tok-var-ref" && token !== "%") return span(cls, token, token);
      return span(cls, token);
    }
    function renderTokens(text) {
      return text.split(/(\s+)/).map((part) => /\s+/.test(part) ? part : renderToken(part)).join("");
    }
    function splitComment(line) {
      const idx = line.indexOf(";");
      if (idx < 0) return [line, ""];
      return [line.slice(0, idx), line.slice(idx)];
    }
    function renderBase(base) {
      if (!base.trim()) return esc(base);
      if (/^\s*##\s+/.test(base)) {
        return base.replace(/^(\s*##\s+)(.*)$/, (_, p1, p2) => `${esc(p1)}${span("tok-subtrack", p2)}`);
      }
      if (/^\s*#\s+/.test(base)) {
        return base.replace(/^(\s*#\s+)(.*)$/, (_, p1, p2) => `${esc(p1)}${span("tok-track", p2)}`);
      }
      if (/^\s*@/.test(base)) {
        return renderTokens(base.replace(/</g, " < "));
      }
      if (/^\s*>/.test(base)) {
        return span("tok-arrangement", base.trimStart().charAt(0)) + renderTokens(base.trimStart().slice(1).replace(/^\s*/, " ")).replace(/^/, esc(base.match(/^\s*/)[0]));
      }
      if (/^\s*%[^\s]+\s+/.test(base)) {
        return base.replace(/^(\s*)(%[^\s]+)(\s*)(.*)$/, (_, i, v, s, rest) => `${esc(i)}${span("tok-var-def", v, v)}${esc(s)}${renderTokens(rest)}`);
      }
      if (/^\s*#\d+/.test(base)) {
        return renderTokens(base);
      }
      return renderTokens(base);
    }
    function highlight(input) {
      return String(input || "").split(/\r?\n/).map((line) => {
        const [base, comment] = splitComment(line);
        const rendered = renderBase(base);
        if (!comment) return rendered;
        return `${rendered}${span("tok-comment", comment)}`;
      }).join("\n");
    }
    Object.assign(module.exports, { highlight });
  }
});

// src/components/editor.js
var require_editor = __commonJS({
  "src/components/editor.js"(exports, module) {
    var { highlight } = require_highlight();
    function clampTooltip(x, y, width = 320) {
      const maxX = Math.max(8, window.innerWidth - width - 8);
      const left = Math.min(x + 12, maxX);
      const top = Math.min(y + 12, window.innerHeight - 72);
      return { left, top };
    }
    function createEditor2(initialText, options = {}) {
      const wrap = document.createElement("div");
      wrap.id = "editor-wrap";
      const pre = document.createElement("pre");
      pre.id = "editor-hl";
      pre.setAttribute("aria-hidden", "true");
      const ta = document.createElement("textarea");
      ta.id = "editor";
      ta.spellcheck = false;
      ta.autocomplete = "off";
      ta.value = initialText;
      const tip = document.createElement("div");
      tip.id = "var-tooltip";
      tip.hidden = true;
      tip.innerHTML = '<strong></strong><span class="tooltip-resolved"></span>';
      const tipTitle = tip.querySelector("strong");
      const tipBody = tip.querySelector(".tooltip-resolved");
      function sync() {
        pre.innerHTML = `${highlight(ta.value)}
`;
      }
      function hideTooltip() {
        tip.hidden = true;
      }
      ta.addEventListener("scroll", () => {
        pre.scrollTop = ta.scrollTop;
        pre.scrollLeft = ta.scrollLeft;
      });
      ta.addEventListener("input", () => {
        sync();
        hideTooltip();
        if (options.onInput) options.onInput(ta.value);
      });
      ta.addEventListener("mousemove", (e) => {
        if (!options.resolveVar) return;
        const hit = document.elementsFromPoint(e.clientX, e.clientY).find((el) => el.dataset && el.dataset.var);
        if (!hit) {
          hideTooltip();
          return;
        }
        const name = hit.dataset.var;
        const text = options.resolveVar(name);
        if (!text) {
          hideTooltip();
          return;
        }
        const pos = clampTooltip(e.clientX, e.clientY);
        tipTitle.textContent = name;
        tipBody.textContent = text;
        tip.style.left = `${pos.left}px`;
        tip.style.top = `${pos.top}px`;
        tip.hidden = false;
      });
      ta.addEventListener("mouseleave", hideTooltip);
      sync();
      wrap.appendChild(pre);
      wrap.appendChild(ta);
      wrap.appendChild(tip);
      return {
        el: wrap,
        textarea: ta,
        on: (event, fn) => ta.addEventListener(event, fn),
        getValue: () => ta.value,
        setValue: (value) => {
          ta.value = value;
          sync();
          hideTooltip();
        },
        focus: () => ta.focus()
      };
    }
    Object.assign(module.exports, { createEditor: createEditor2 });
  }
});

// src/components/mixer.js
var require_mixer = __commonJS({
  "src/components/mixer.js"(exports, module) {
    function clamp(value) {
      return Math.max(0, Math.min(1, value));
    }
    function shortName(name) {
      const parts = String(name || "").split(/\s+/).filter(Boolean);
      if (!parts.length) return "track";
      return parts.slice(0, 2).join(" ");
    }
    function createMixer2(player, options = {}) {
      const root = document.createElement("aside");
      root.id = "mixer-panel";
      root.className = "collapsed";
      const title = document.createElement("h3");
      title.textContent = "Mixer";
      const strips = document.createElement("div");
      strips.id = "mixer-strips";
      const transport = document.createElement("div");
      transport.id = "mixer-transport";
      const fx = document.createElement("div");
      fx.id = "mixer-fx";
      const initialTempo = options.tempo || 146;
      const initialBars = options.bars || 8;
      const initialTranspose = options.transpose || 0;
      const bpmRow = document.createElement("label");
      bpmRow.className = "transport-row";
      bpmRow.textContent = "BPM";
      const bpm = document.createElement("input");
      bpm.type = "range";
      bpm.min = "60";
      bpm.max = "200";
      bpm.value = String(initialTempo);
      const bpmVal = document.createElement("span");
      bpmVal.className = "transport-val";
      bpmVal.textContent = String(initialTempo);
      bpm.addEventListener("input", () => {
        bpmVal.textContent = bpm.value;
        if (options.onChange) {
          options.onChange({ tempo: parseInt(bpm.value, 10) });
        }
      });
      bpmRow.appendChild(bpm);
      bpmRow.appendChild(bpmVal);
      const barsRow = document.createElement("label");
      barsRow.className = "transport-row";
      barsRow.textContent = "BARS";
      const bars2 = document.createElement("select");
      [4, 8, 16, 32].forEach((value) => {
        const option = document.createElement("option");
        option.value = String(value);
        option.textContent = String(value);
        if (value === initialBars) option.selected = true;
        bars2.appendChild(option);
      });
      bars2.addEventListener("change", () => {
        if (options.onChange) {
          options.onChange({ bars: parseInt(bars2.value, 10) });
        }
      });
      barsRow.appendChild(bars2);
      const keyRow = document.createElement("label");
      keyRow.className = "transport-row";
      keyRow.textContent = "KEY";
      const key = document.createElement("input");
      key.type = "range";
      key.min = "-12";
      key.max = "12";
      key.value = String(initialTranspose);
      const keyVal = document.createElement("span");
      keyVal.className = "transport-val";
      keyVal.textContent = String(initialTranspose > 0 ? `+${initialTranspose}` : initialTranspose);
      key.addEventListener("input", () => {
        const value = parseInt(key.value, 10);
        keyVal.textContent = value > 0 ? `+${value}` : String(value);
        if (options.onChange) {
          options.onChange({ transpose: value });
        }
      });
      keyRow.appendChild(key);
      keyRow.appendChild(keyVal);
      transport.appendChild(bpmRow);
      transport.appendChild(barsRow);
      transport.appendChild(keyRow);
      const delayLabel = document.createElement("label");
      delayLabel.textContent = "Delay Time";
      const delaySelect = document.createElement("select");
      [
        ["1/4", 1 / 4],
        ["3/8", 3 / 8],
        ["1/2", 1 / 2],
        ["3/4", 3 / 4]
      ].forEach(([label, value]) => {
        const option = document.createElement("option");
        option.textContent = label;
        option.value = String(value);
        if (value === player.delayDivision) option.selected = true;
        delaySelect.appendChild(option);
      });
      delaySelect.addEventListener("change", () => {
        player.setDelayTime(parseFloat(delaySelect.value));
      });
      delayLabel.appendChild(delaySelect);
      const feedbackLabel = document.createElement("label");
      feedbackLabel.textContent = "Feedback";
      const feedback = document.createElement("input");
      feedback.type = "range";
      feedback.min = "0";
      feedback.max = "75";
      feedback.value = "35";
      feedback.addEventListener("input", () => {
        player.setDelayFeedback(parseInt(feedback.value, 10) / 100);
      });
      feedbackLabel.appendChild(feedback);
      fx.appendChild(delayLabel);
      fx.appendChild(feedbackLabel);
      root.appendChild(title);
      root.appendChild(transport);
      root.appendChild(strips);
      root.appendChild(fx);
      const stripMap = /* @__PURE__ */ new Map();
      function createStrip(key2, label) {
        const state = player.getTrackState(key2);
        const strip = document.createElement("div");
        strip.className = "m-strip";
        strip.dataset.key = key2;
        const name = document.createElement("div");
        name.className = "m-name";
        name.textContent = shortName(label);
        const vu = document.createElement("div");
        vu.className = "m-vu";
        const row = document.createElement("div");
        row.className = "m-row";
        const solo = document.createElement("button");
        solo.className = "m-btn";
        solo.textContent = "S";
        const mute = document.createElement("button");
        mute.className = "m-btn";
        mute.textContent = "M";
        const volume = document.createElement("input");
        volume.type = "range";
        volume.className = "m-slider";
        volume.min = "0";
        volume.max = "100";
        volume.value = String(Math.round(state.volume * 100));
        const reverb = document.createElement("input");
        reverb.type = "range";
        reverb.className = "m-send";
        reverb.min = "0";
        reverb.max = "100";
        reverb.value = String(Math.round(state.reverbSend * 100));
        const delay = document.createElement("input");
        delay.type = "range";
        delay.className = "m-send";
        delay.min = "0";
        delay.max = "100";
        delay.value = String(Math.round(state.delaySend * 100));
        const sends = document.createElement("div");
        sends.className = "m-sends";
        const rWrap = document.createElement("label");
        rWrap.textContent = "Rev";
        rWrap.appendChild(reverb);
        const dWrap = document.createElement("label");
        dWrap.textContent = "Dly";
        dWrap.appendChild(delay);
        sends.appendChild(rWrap);
        sends.appendChild(dWrap);
        function syncButtons() {
          const cur = player.getTrackState(key2);
          solo.classList.toggle("active", cur.solo);
          mute.classList.toggle("active", cur.muted);
        }
        solo.addEventListener("click", () => {
          const cur = player.getTrackState(key2);
          player.setSolo(key2, !cur.solo);
          syncButtons();
        });
        mute.addEventListener("click", () => {
          const cur = player.getTrackState(key2);
          player.setMute(key2, !cur.muted);
          syncButtons();
        });
        volume.addEventListener("input", () => {
          player.setVolume(key2, clamp(parseInt(volume.value, 10) / 100));
        });
        reverb.addEventListener("input", () => {
          player.setReverbSend(key2, clamp(parseInt(reverb.value, 10) / 100));
        });
        delay.addEventListener("input", () => {
          player.setDelaySend(key2, clamp(parseInt(delay.value, 10) / 100));
        });
        row.appendChild(solo);
        row.appendChild(mute);
        row.appendChild(volume);
        strip.appendChild(name);
        strip.appendChild(vu);
        strip.appendChild(row);
        strip.appendChild(sends);
        strips.appendChild(strip);
        syncButtons();
        return { el: strip, vu, name, syncButtons };
      }
      function update(data) {
        const entries = Array.isArray(data) ? data.map((track) => ({ key: `${track[0]}/${track[1]}`, name: track[1] })) : [];
        const nextKeys = new Set(entries.map((item) => item.key));
        stripMap.forEach((value, key2) => {
          if (!nextKeys.has(key2)) {
            value.el.remove();
            stripMap.delete(key2);
          }
        });
        entries.forEach((item) => {
          if (!stripMap.has(item.key)) {
            stripMap.set(item.key, createStrip(item.key, item.name));
          } else {
            const strip = stripMap.get(item.key);
            strip.name.textContent = shortName(item.name);
            strip.syncButtons();
          }
        });
      }
      function flashVU(key2) {
        const strip = stripMap.get(key2);
        if (!strip) return;
        strip.vu.classList.add("active");
        setTimeout(() => strip.vu.classList.remove("active"), 80);
      }
      function toggle(forceOpen) {
        const open = typeof forceOpen === "boolean" ? forceOpen : root.classList.contains("collapsed");
        root.classList.toggle("collapsed", !open);
        return open;
      }
      function syncTransport(next = {}) {
        if (typeof next.tempo === "number") {
          bpm.value = String(next.tempo);
          bpmVal.textContent = String(next.tempo);
        }
        if (typeof next.bars === "number") {
          bars2.value = String(next.bars);
        }
        if (typeof next.transpose === "number") {
          key.value = String(next.transpose);
          keyVal.textContent = next.transpose > 0 ? `+${next.transpose}` : String(next.transpose);
        }
      }
      return { el: root, update, flashVU, toggle, syncTransport };
    }
    Object.assign(module.exports, { createMixer: createMixer2 });
  }
});

// src/src/index.js
var import_player = __toESM(require_player());

// src/lib/index.js
var __create2 = Object.create;
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __getProtoOf2 = Object.getPrototypeOf;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __esm2 = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames2(fn)[0]])(fn = 0)), res;
};
var __commonJS2 = (cb, mod) => function __require() {
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
var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
function isNum2(x) {
  return typeof x === "number";
}
function isStr2(x) {
  return typeof x === "string";
}
function isDef2(x) {
  return typeof x !== "undefined";
}
function midiToFreq2(midi22, tuning) {
  return Math.pow(2, (midi22 - 69) / 12) * (tuning || 440);
}
function parse2(str, isTonic, tuning) {
  if (typeof str !== "string") return null;
  var m22 = REGEX2.exec(str);
  if (!m22 || !isTonic && m22[4]) return null;
  var p2 = { letter: m22[1].toUpperCase(), acc: m22[2].replace(/x/g, "##") };
  p2.pc = p2.letter + p2.acc;
  p2.step = (p2.letter.charCodeAt(0) + 3) % 7;
  p2.alt = p2.acc[0] === "b" ? -p2.acc.length : p2.acc.length;
  var pos = SEMITONES2[p2.step] + p2.alt;
  p2.chroma = pos < 0 ? 12 + pos : pos % 12;
  if (m22[3]) {
    p2.oct = +m22[3];
    p2.midi = pos + 12 * (p2.oct + 1);
    p2.freq = midiToFreq2(p2.midi, tuning);
  }
  if (isTonic) p2.tonicOf = m22[4];
  return p2;
}
function midi2(note22) {
  if ((isNum2(note22) || isStr2(note22)) && note22 >= 0 && note22 < 128) return +note22;
  var p2 = parse2(note22);
  return p2 && isDef2(p2.midi) ? p2.midi : null;
}
var REGEX2;
var SEMITONES2;
var init_note_parser2 = __esm2({
  "node_modules/note-parser/index.js"() {
    "use strict";
    REGEX2 = /^([a-gA-G])(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)\s*$/;
    SEMITONES2 = [0, 2, 4, 5, 7, 9, 11];
  }
});
var tonal_midi_exports2 = {};
__export2(tonal_midi_exports2, {
  note: () => note2,
  toMidi: () => toMidi2
});
function toMidi2(val) {
  if (Array.isArray(val) && val.length === 2) return val[0] * 7 + val[1] * 12 + 12;
  return midi2(val);
}
function note2(num, sharps) {
  if (num === true || num === false) return function(m22) {
    return note2(m22, num);
  };
  num = Math.round(num);
  var pcs = sharps === true ? SHARPS2 : FLATS2;
  var pc = pcs[num % 12];
  var o = Math.floor(num / 12) - 1;
  return pc + o;
}
var FLATS2;
var SHARPS2;
var init_tonal_midi2 = __esm2({
  "node_modules/tonal-midi/index.js"() {
    init_note_parser2();
    FLATS2 = "C Db D Eb E F Gb G Ab A Bb B".split(" ");
    SHARPS2 = "C C# D D# E F F# G G# A A# B".split(" ");
  }
});
var require_package2 = __commonJS2({
  "node_modules/midi-writer-js/package.json"(exports, module) {
    module.exports = {
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
var require_build2 = __commonJS2({
  "node_modules/midi-writer-js/build/index.js"(exports, module) {
    "use strict";
    var tonalMidi = (init_tonal_midi2(), __toCommonJS2(tonal_midi_exports2));
    var Constants = {
      VERSION: require_package2().version,
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
    function _setPrototypeOf(o, p2) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p22) {
        o2.__proto__ = p22;
        return o2;
      };
      return _setPrototypeOf(o, p2);
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
              this.pitch.forEach(function(p2, i) {
                if (i == 0) {
                  var noteOnNew = new NoteOnEvent({
                    channel: _this.channel,
                    wait: _this.wait,
                    velocity: _this.velocity,
                    pitch: p2,
                    startTick: _this.startTick
                  });
                } else {
                  var noteOnNew = new NoteOnEvent({
                    channel: _this.channel,
                    wait: 0,
                    velocity: _this.velocity,
                    pitch: p2,
                    startTick: _this.startTick
                  });
                }
                _this.events.push(noteOnNew);
              });
              this.pitch.forEach(function(p2, i) {
                if (i == 0) {
                  var noteOffNew = new NoteOffEvent({
                    channel: _this.channel,
                    duration: _this.duration,
                    velocity: _this.velocity,
                    pitch: p2,
                    tick: _this.startTick !== null ? Utils.getTickDuration(_this.duration) + _this.startTick : null
                  });
                } else {
                  var noteOffNew = new NoteOffEvent({
                    channel: _this.channel,
                    duration: 0,
                    velocity: _this.velocity,
                    pitch: p2,
                    tick: _this.startTick !== null ? Utils.getTickDuration(_this.duration) + _this.startTick : null
                  });
                }
                _this.events.push(noteOffNew);
              });
            }
          } else {
            for (var j = 0; j < this.repeat; j++) {
              this.pitch.forEach(function(p2, i) {
                var noteOnNew = new NoteOnEvent({
                  channel: _this.channel,
                  wait: i > 0 ? 0 : _this.wait,
                  // wait only applies to first note in repetition
                  velocity: _this.velocity,
                  pitch: p2,
                  startTick: _this.startTick
                });
                var noteOffNew = new NoteOffEvent({
                  channel: _this.channel,
                  duration: _this.duration,
                  velocity: _this.velocity,
                  pitch: p2
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
        var note22 = sf || "C";
        if (sf[0] === sf[0].toLowerCase()) mode = 1;
        if (_sflen > 1) {
          switch (sf.charAt(_sflen - 1)) {
            case "m":
              mode = 1;
              note22 = sf.charAt(0).toLowerCase();
              note22 = note22.concat(sf.substring(1, _sflen - 1));
              break;
            case "-":
              mode = 1;
              note22 = sf.charAt(0).toLowerCase();
              note22 = note22.concat(sf.substring(1, _sflen - 1));
              break;
            case "M":
              mode = 0;
              note22 = sf.charAt(0).toUpperCase();
              note22 = note22.concat(sf.substring(1, _sflen - 1));
              break;
            case "+":
              mode = 0;
              note22 = sf.charAt(0).toUpperCase();
              note22 = note22.concat(sf.substring(1, _sflen - 1));
              break;
          }
        }
        var fifthindex = fifths[mode].indexOf(note22);
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
      var tempo2 = Math.round(6e7 / bpm);
      this.data = Utils.numberToVariableLength(0).concat(
        Constants.META_EVENT_ID,
        Constants.META_TEMPO_ID,
        [3],
        // Size
        Utils.numberToBytes(tempo2, 3)
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
        value: function convertPitch(pitch, index, note22) {
          var addRenderedAccidentals = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
          var pitchParts = pitch.split("/");
          var accidentals = pitchParts[0].substring(1).replace("n", "");
          if (addRenderedAccidentals) {
            var _note$getAccidentals;
            (_note$getAccidentals = note22.getAccidentals()) === null || _note$getAccidentals === void 0 ? void 0 : _note$getAccidentals.forEach(function(accidental) {
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
        value: function convertDuration(note22) {
          return "d".repeat(note22.dots) + this.convertBaseDuration(note22.duration) + (note22.tuplet ? "t" + note22.tuplet.num_notes : "");
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
          var build2 = [];
          this.data.forEach(function(d) {
            return build2 = build2.concat(d.type, d.size, d.data);
          });
          return new Uint8Array(build2);
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
    module.exports = main;
  }
});
var require_jsmidgen = __commonJS2({
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
          var note22 = matches[1].toLowerCase(), accidental = matches[2] || "", octave = parseInt(matches[3], 10);
          return 12 * octave + Util.midi_letter_pitches[note22] + (accidental.substr(0, 1) == "#" ? 1 : -1) * accidental.length;
        },
        /**
         * Ensure that the given argument is converted to a MIDI pitch. Note that
         * it may already be one (including a purely numeric string).
         *
         * @param {string|number} p - The pitch to convert.
         * @returns {number} The resulting numeric MIDI pitch.
         */
        ensureMidiPitch: function(p2) {
          if (typeof p2 == "number" || !/[^0-9]/.test(p2)) {
            return parseInt(p2, 10);
          } else {
            return Util.midiPitchFromNote(p2);
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
          var m22 = mpqn;
          if (typeof mpqn[0] != "undefined") {
            m22 = 0;
            for (var i = 0, l = mpqn.length - 1; l >= 0; ++i, --l) {
              m22 |= mpqn[i] << l;
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
      MidiEvent.prototype.setParam1 = function(p2) {
        this.param1 = p2;
      };
      MidiEvent.prototype.setParam2 = function(p2) {
        this.param2 = p2;
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
        var p2 = params || {};
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
        chord.forEach(function(note22) {
          this.noteOn(channel, note22, 0, velocity);
        }, this);
        chord.forEach(function(note22, index) {
          if (index === 0) {
            this.noteOff(channel, note22, dur);
          } else {
            this.noteOff(channel, note22);
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
    if (typeof module != "undefined" && module !== null) {
      module.exports = Midi;
    } else if (typeof exports != "undefined" && exports !== null) {
      exports = Midi;
    } else {
      exports.Midi = Midi;
    }
  }
});
var require_utils = __commonJS2({
  "src/lib/utils.js"(exports, module) {
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
    Object.assign(module.exports, { clone, flatten, range, repeat, zip });
  }
});
var require_main = __commonJS2({
  "node_modules/harmonics/main.js"(exports) {
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
        o.r(a), o.d(a, { chord: () => m22, chords: () => t, inlineChord: () => r2, scale: () => c, scales: () => s });
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
          })(d, l), u = [], p2 = 0, h = 0, f = a2 ? n2 : e2; p2 < f[s2].length; ) "1" === f[s2][p2] && u.push(b[h]), p2++, h++;
          return u;
        }, r2 = function(n3) {
          var e3, o2, a2 = "b9sus", r3 = 4;
          return n3.includes(a2) ? (o2 = a2, e3 = n3.slice(0, n3.indexOf(a2))) : (e3 = n3[0], o2 = n3.slice(1), "b" !== n3[1] && "#" !== n3[1] || (e3 += n3[1], o2 = n3.slice(2))), n3.includes("_") && (r3 = +n3.split("_")[1], o2 = o2.slice(0, o2.indexOf("_"))), i2({ chord: e3 + r3 + " " + o2 });
        }, t = function() {
          return Object.keys(e2);
        }, s = function() {
          return Object.keys(n2);
        }, m22 = function(n3) {
          return i2({ chord: n3 });
        }, c = function(n3) {
          return i2({ scale: n3 });
        };
      })();
      var i = exports;
      for (var r in a) i[r] = a[r];
      a.__esModule && Object.defineProperty(i, "__esModule", { value: true });
    })();
  }
});
var require_tokenize = __commonJS2({
  "src/lib/tokenize.js"(exports, module) {
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
    Object.assign(module.exports, { RE_CHORD, RE_MODE, RE_NOTE, RE_NUMBER, RE_PATTERN, RE_PROG, RE_SEPARATOR, RE_TRIM, getType, isChord, isMode, isNote, isNumber, isPattern, isProgression, level, split, transform, validate });
  }
});
var pickOne;
var dice;
var init_utils = __esm2({
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
var init_progression = __esm2({
  "node_modules/scribbletune/src/progression.ts"() {
    import_harmonics = __toESM2(require_main());
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
        const note22 = mode[scaleId];
        const oct = note22.replace(/\D+/, "");
        return note22.replace(/\d/, "") + chordName + "_" + oct;
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
var require_parser = __commonJS2({
  "src/lib/parser.js"(exports, module) {
    var { getChordsByProgression: getChordsByProgression22 } = (init_progression(), __toCommonJS2(progression_exports));
    var { scale: scale2, inlineChord } = require_main();
    var { isProgression, transform } = require_tokenize();
    var { repeat, clone } = require_utils();
    function reduce2(input, context, callback) {
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
                value = reduce2(value, context);
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
            memo.push(getChordsByProgression22(a.join(" "), b.join(" ")).split(" ").map((x) => fn(inlineChord(x))));
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
    Object.assign(module.exports, { parse: parse3, reduce: reduce2 });
  }
});
var require_mixup = __commonJS2({
  "src/lib/mixup.js"(exports, module) {
    var { Utils } = require_build2();
    var { File, Track } = require_jsmidgen();
    var { zip, flatten } = require_utils();
    var { split, isPattern } = require_tokenize();
    var { reduce: reduce2 } = require_parser();
    var DEFAULT = Symbol("@main");
    function build2(midi22, bpm = 120, length = 16) {
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
      midi22.forEach((section) => {
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
                const note22 = tick.n || "C3";
                if (Array.isArray(note22)) {
                  track.noteOff(chan, "", q);
                  track.addChord(chan, note22, q, tick.v);
                } else {
                  track.noteOn(chan, note22, q, tick.v);
                  track.noteOff(chan, note22, q);
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
          const [tag, midi22] = ch.split("#");
          const key = tag || DEFAULT;
          let ticks;
          let inc = 0;
          clips.forEach((clip) => {
            const values = clip.values ? reduce2(clip.values, ctx.data) : [];
            const notes = clip.data ? reduce2(clip.data, ctx.data) : [];
            if (clip.input) {
              if (values.length > 1) values.shift();
              const input = flatten(reduce2(clip.input, ctx.data, pack(values, notes)));
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
          scenes[key].tracks.push([midi22, name, ticks]);
        });
      });
      if (!ctx.main.length) {
        ctx.main = [[{ type: "value", value: DEFAULT }]];
      }
      return ctx.main.map((track) => {
        return reduce2(track, scenes).map((item) => {
          return [].concat(item).reduce((memo, x) => {
            memo.push(...x.tracks);
            return memo;
          }, []);
        });
      });
    }
    Object.assign(module.exports, { build: build2, merge: merge2, pack });
  }
});
var lib_exports = {};
__export2(lib_exports, {
  merge: () => import_mixup.merge,
  parse: () => import_parser.parse
});
var import_mixup = __toESM2(require_mixup());
var import_parser = __toESM2(require_parser());
__reExport(lib_exports, __toESM2(require_utils()));
__reExport(lib_exports, __toESM2(require_mixup()));
__reExport(lib_exports, __toESM2(require_parser()));
__reExport(lib_exports, __toESM2(require_tokenize()));
var export_merge = import_mixup.merge;
var export_parse = import_parser.parse;

// src/src/index.js
var import_parser2 = __toESM(require_parser2());
var import_editor = __toESM(require_editor());
var import_mixer = __toESM(require_mixer());
var tempo = 146;
var bars = 8;
var transpose = 0;
var playing = false;
var debounceTimer = null;
var statusResetTimer = null;
var editorApi = null;
var mixerApi = null;
var lastContext = null;
var p = window.p || new import_player.default();
window.p = p;
var STORAGE_KEY = "scoops:draft";
var BILLY_JEAN = `
  %F a3|c#4|f#4
  %G b3|d#4|g#4
  %A c#4|e4|a4
  %E b3|d4|f#4
  %C d3|f#4|a4 ; how to sum notes to chords?
  %B c#4|f4|g#3|b4

  # synth
    @INTRO
      #518      ---- ---- ---- ---- ---- ---- ---- ----
    @N < INTRO
    @A
      #518 75   x--- --x- ---- ---- x--- --x- ---- ---- %F %G %A %G
    @B < A
      #518      %E % % %
    @C < A
      #518      %C % %F %
    @D < A
      #518      %C % %B %

  ## bass
    %c f#2 c#2 e2 f#2 e2 c#2 b1 c#2
    %d b2 a2 b2 d3 d3 b2 a2 ; how to transpose?
    @INTRO
      #393      ---- ---- ---- ---- ---- ---- ---- ----
    @A
      #393  112 x-x- x-x- x-x- x-x- x-x- x-x- x-x- x-x- %c %
    @N < A
    @B
      #393      x-x- x-x- --x- x-x- x-x- x-x- --x- x-x- %d %
    @C < INTRO
    @D < INTRO

  ## drums
    @INTRO
      #2123     ---- ---- ---- ---- ---- ---- ---- ----
      #2081 50  x-x- x-x- x-x- x-x- x-x- x-x- x-x- x-x-
      #2028     ---- x--- ---- x--- ---- x--- ---- x---
      #2001     x--- ---- x--- ---- x--- ---- x--- ----
    @A < INTRO
      #2123 90  x--- x--- x--- x--- x--- x--- x--- x---
      #2123 70  --x- --x- --x- --x- --x- --x- --x- --x-
    @N < A
    @B < A
    @C < A
    @D < A

  > INTRO N *2 A %
  > A % B A B A
  > A % B A C *3 D
  > A % B A B A
  > A % B A B A
  > A % B A C *3 D
  > A % B A B A
`;
var TETRIS = `
%a E4 B3 C4 D4 C4 B3 A3
%b A3 C4 E4 D4 C4 B3
%c B3 C4 D4 E4 C4 A3 A3

%d D4 F4 A4 G4 F4 E4
%e E4 C4 E4 D4 C4 B3

%f E4 C4 D4 B3 C4 A3 Ab3 B3
%g E4 C4 D4 B3 C4 E4 A3 Ab3

# piano
  @A
    #3 x-xx x-xx x-xx x-xx x-xx x-x- x-x- x--- %a %b %c
  @B
    #3 -x-x x-xx x-xx x-xx x-xx x-x- x-x- x--- %d %e %c
  @C
    #3 x--- x--- x--- x--- x--- x--- x--- x--- %f
  @D < C
    #3 %g

%x E2 E2 A2 A2 Ab2 E2 A2
%y D2 D2 C2 C2 E2 E2 A2
%z A2 A2 Ab2 Ab2 A2 A2 Ab3
%z_ A2 A2 Ab2 Ab2 A2 A2 A4 Ab4

# bass
  @A
    #2 x--- x--- x--- x--- x--- x--- x--- ---- %x
  @B < A
    #2 %y
  @C < A
    #2 %z
  @D
    #2 x--- x--- x--- x--- x--- x-x- x--- ---- %z_

> A B A B C D
`.trim();
var PLAYGROUND = `
%a C4 phrygian.. ++ I I III IV

# scales
  @A
    #3 100 -x-x -x-x -x-x -x-x %a %a

## drums
  @A
    #0 120 [xx]-[xx]- [xx]-[xx]- d#1
    #0 110 -x-x -x-x d2
    #0 100 [xx][xx][xx][xx] [xx][xx][xx][xx] f#2

> A *4
`.trim();
var LOCKS = `
%Cm c4|eb4|g4 %
%Fm c4|f4|g#4 %

# drums
  @A
    #0 127 xxxxxxxxxxx[xx]xxxx [xx]xxxxxxxxxxxxxxx f#2
    #0 127 --x---x---x-x-x[xx] --x---x---x--[-x]x- c#2
    #0 90  ----------------x___------------ a3
    #0 120 --[xx]---[xx]---[xx]---[xx]- d#1

## skanking
  @A
    #1 100 -x-x-x-x-x-x-x-x %Cm %Fm

> A *4
`.trim();
var PRESETS = {
  tetris: TETRIS,
  billy_jean: BILLY_JEAN,
  playground: PLAYGROUND,
  locks: LOCKS
};
var PRESET_LABELS = {
  tetris: "Tetris",
  billy_jean: "Billy Jean",
  playground: "Playground",
  locks: "Locks"
};
function build(midi3) {
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
  midi3.forEach((section) => {
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
function getData(input) {
  try {
    lastContext = export_parse(input);
    return build(export_merge(lastContext));
  } catch (e) {
    lastContext = null;
    console.error("Parse error:", e);
    showError(e.message || "Parse error");
    return [];
  }
}
function resolveVarTooltip(name) {
  if (!lastContext || !lastContext.data || !lastContext.data[name]) return null;
  try {
    const data = (0, import_parser2.reduce)(lastContext.data[name], lastContext.data);
    const out = Array.isArray(data) ? data.flat(Infinity) : [data];
    const shown = out.slice(0, 16).map((item) => Array.isArray(item) ? item.join("|") : String(item));
    return shown.join("  ") + (out.length > shown.length ? " \u2026" : "");
  } catch (e) {
    return null;
  }
}
function showError(msg) {
  clearTimeout(statusResetTimer);
  const statusEl = document.getElementById("status-message");
  const statusbar = document.getElementById("statusbar");
  if (statusEl) {
    statusEl.textContent = `Error: ${msg}`;
  }
  if (statusbar) {
    statusbar.dataset.state = "error";
  }
}
function showStatus(msg, state = "ready") {
  clearTimeout(statusResetTimer);
  const statusEl = document.getElementById("status-message");
  const statusbar = document.getElementById("statusbar");
  if (statusEl) {
    statusEl.textContent = msg;
  }
  if (statusbar) {
    statusbar.dataset.state = state;
  }
}
function setReadyStatus() {
  showStatus("Ready", "ready");
}
function markDirty() {
  showStatus("Unsaved changes", "warning");
}
function saveSuccess() {
  const now = /* @__PURE__ */ new Date();
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  showStatus(`Saved ${hh}:${mm}`, "ready");
}
function setQueryLoad(name) {
  const url = new URL(window.location.href);
  if (name) {
    url.searchParams.set("load", name);
  } else {
    url.searchParams.delete("load");
  }
  window.history.replaceState({}, "", url.toString());
}
function updatePlayButton() {
  const playBtn = document.getElementById("play-btn");
  if (playBtn) playBtn.textContent = playing ? "\u25B6 Playing..." : "\u25B6 Play";
}
function loadPresetByName(name) {
  const preset = PRESETS[name];
  if (!editorApi || !preset) return;
  editorApi.setValue(preset.trim());
  localStorage.setItem(STORAGE_KEY, editorApi.getValue());
  setQueryLoad(name);
  showStatus(`Loaded preset: ${PRESET_LABELS[name] || name}`, "ready");
  updateLoop();
  editorApi.focus();
}
function syncMixer(data) {
  if (!mixerApi) return;
  mixerApi.update(data);
}
function bindGlobalShortcuts() {
  document.addEventListener("keydown", (e) => {
    const target = e.target;
    const editingField = target && (target.tagName === "TEXTAREA" || target.tagName === "INPUT" || target.tagName === "SELECT");
    if (e.code === "Space" && !editingField) {
      e.preventDefault();
      if (playing) stop();
      else play();
    }
    if (e.code === "Escape") {
      stop();
    }
  });
}
function createDOM(initialText, initialPreset) {
  document.body.innerHTML = "";
  const toolbar = document.createElement("div");
  toolbar.id = "toolbar";
  const aboutLink = document.createElement("a");
  aboutLink.id = "about-link";
  aboutLink.href = "landing.html";
  aboutLink.textContent = "\u2190 About";
  const playBtn = document.createElement("button");
  playBtn.id = "play-btn";
  playBtn.textContent = "\u25B6 Play";
  playBtn.addEventListener("click", play);
  const stopBtn = document.createElement("button");
  stopBtn.id = "stop-btn";
  stopBtn.textContent = "\u25A0 Stop";
  stopBtn.addEventListener("click", stop);
  const mixerBtn = document.createElement("button");
  mixerBtn.id = "mixer-btn";
  mixerBtn.textContent = "\u229E Mixer";
  const midiBtn = document.createElement("button");
  midiBtn.id = "midi-btn";
  midiBtn.textContent = "\u{1F39B} MIDI";
  midiBtn.disabled = true;
  midiBtn.title = "MIDI support comes next";
  const presetLabel = document.createElement("label");
  presetLabel.className = "field-group";
  presetLabel.textContent = "Preset ";
  const presetSelect = document.createElement("select");
  presetSelect.id = "preset-select";
  const customOption = document.createElement("option");
  customOption.value = "";
  customOption.textContent = "Custom";
  presetSelect.appendChild(customOption);
  Object.keys(PRESETS).forEach((name) => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = PRESET_LABELS[name] || name;
    presetSelect.appendChild(option);
  });
  if (initialPreset && PRESETS[initialPreset]) {
    presetSelect.value = initialPreset;
  }
  presetSelect.addEventListener("change", () => {
    if (presetSelect.value) {
      loadPresetByName(presetSelect.value);
    }
  });
  presetLabel.appendChild(presetSelect);
  toolbar.appendChild(aboutLink);
  toolbar.appendChild(playBtn);
  toolbar.appendChild(stopBtn);
  toolbar.appendChild(mixerBtn);
  toolbar.appendChild(midiBtn);
  toolbar.appendChild(presetLabel);
  editorApi = (0, import_editor.createEditor)(initialText, {
    resolveVar: resolveVarTooltip,
    onInput: () => {
      const presetSelect2 = document.getElementById("preset-select");
      if (presetSelect2) presetSelect2.value = "";
      setQueryLoad(null);
      markDirty();
      updateLoop();
      saveDraft();
    }
  });
  editorApi.on("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.code === "Enter") {
      e.preventDefault();
      if (playing) stop();
      else play();
    }
  });
  const statusbar = document.createElement("div");
  statusbar.id = "statusbar";
  statusbar.dataset.state = "ready";
  const beatDots = document.createElement("div");
  beatDots.id = "beat-dots";
  for (let i = 0; i < 16; i += 1) {
    const dot = document.createElement("span");
    dot.className = "beat-dot";
    beatDots.appendChild(dot);
  }
  const statusMessage = document.createElement("span");
  statusMessage.id = "status-message";
  statusMessage.textContent = "Ready";
  statusbar.appendChild(beatDots);
  statusbar.appendChild(statusMessage);
  const workspace = document.createElement("div");
  workspace.id = "workspace";
  mixerApi = (0, import_mixer.createMixer)(p, {
    tempo,
    bars,
    transpose,
    onChange(next) {
      if (typeof next.tempo === "number") tempo = next.tempo;
      if (typeof next.bars === "number") bars = next.bars;
      if (typeof next.transpose === "number") transpose = next.transpose;
      updateLoop();
    }
  });
  mixerApi.toggle(false);
  mixerBtn.addEventListener("click", () => {
    const open = mixerApi.toggle();
    workspace.classList.toggle("mixer-open", open);
  });
  p.onBeat = (key, when) => {
    const wait = Math.max(0, (when - p.audioContext.currentTime) * 1e3);
    setTimeout(() => mixerApi.flashVU(key), wait);
  };
  document.body.appendChild(toolbar);
  workspace.appendChild(editorApi.el);
  workspace.appendChild(mixerApi.el);
  document.body.appendChild(workspace);
  document.body.appendChild(statusbar);
  return editorApi;
}
async function loadExample(name) {
  if (PRESETS[name]) return PRESETS[name];
  try {
    const response = await fetch(`examples/${name}.dub`);
    if (response.ok) {
      return await response.text();
    }
  } catch (e) {
  }
  return null;
}
async function resolveInitialDraft() {
  const params = new URLSearchParams(window.location.search);
  const load = params.get("load");
  if (load) {
    const draft = await loadExample(load);
    if (draft) return draft.trim();
  }
  return localStorage.getItem(STORAGE_KEY) || TETRIS;
}
function saveDraft() {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    if (editorApi) {
      localStorage.setItem(STORAGE_KEY, editorApi.getValue());
      saveSuccess();
    }
  }, 300);
}
function play() {
  stop();
  if (!editorApi) return;
  if (p.audioContext.state === "suspended") {
    p.audioContext.resume();
  }
  playing = true;
  const data = getData(editorApi.getValue());
  p.setLoopMachine(data, tempo, bars, transpose);
  syncMixer(data);
  p.playLoopMachine();
  updatePlayButton();
  showStatus("Playing", "playing");
}
function stop() {
  if (playing) {
    playing = false;
    p.stopLoopMachine();
  }
  updatePlayButton();
  setReadyStatus();
}
function updateLoop() {
  if (!editorApi || !p) return;
  const data = getData(editorApi.getValue());
  const changed = p.setLoopMachine(data, tempo, bars, transpose);
  syncMixer(data);
  if (changed && playing) {
    p.playLoopMachine(p.beatIndex);
  }
}
function beatIndicator() {
  const dots = document.querySelectorAll(".beat-dot");
  const activeIndex = p.loopStarted ? p.beatIndex : -1;
  dots.forEach((dot, i) => dot.classList.toggle("active", i === activeIndex));
  requestAnimationFrame(beatIndicator);
}
async function bootstrap() {
  const params = new URLSearchParams(window.location.search);
  const initialPreset = params.get("load");
  const initialDraft = await resolveInitialDraft();
  const editor = createDOM(initialDraft, initialPreset);
  bindGlobalShortcuts();
  const data = getData(editor.getValue());
  p.setLoopMachine(data, tempo, bars, transpose);
  syncMixer(data);
  setReadyStatus();
  requestAnimationFrame(beatIndicator);
}
bootstrap();
var src_default = {};
export {
  src_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL25vdGUtcGFyc2VyL2luZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy90b25hbC1taWRpL2luZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy9taWRpLXdyaXRlci1qcy9wYWNrYWdlLmpzb24iLCAibm9kZV9tb2R1bGVzL21pZGktd3JpdGVyLWpzL2J1aWxkL2luZGV4LmpzIiwgInNyYy9jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL3BsYXllci5qcyIsICJub2RlX21vZHVsZXMvaGFybW9uaWNzL21haW4uanMiLCAibm9kZV9tb2R1bGVzL3NjcmliYmxldHVuZS9zcmMvdXRpbHMudHMiLCAibm9kZV9tb2R1bGVzL3NjcmliYmxldHVuZS9zcmMvcHJvZ3Jlc3Npb24udHMiLCAic3JjL2xpYi9zcmMvbGliL3NyYy9saWIvdG9rZW5pemUuanMiLCAic3JjL2xpYi9zcmMvbGliL3NyYy9saWIvdXRpbHMuanMiLCAic3JjL2xpYi9zcmMvbGliL3NyYy9saWIvcGFyc2VyLmpzIiwgInNyYy9zcmMvc3JjL2hpZ2hsaWdodC5qcyIsICJzcmMvY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9lZGl0b3IuanMiLCAic3JjL2NvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvbWl4ZXIuanMiLCAic3JjL3NyYy9pbmRleC5qcyIsICJzcmMvbGliL25vZGVfbW9kdWxlcy9ub3RlLXBhcnNlci9pbmRleC5qcyIsICJzcmMvbGliL25vZGVfbW9kdWxlcy90b25hbC1taWRpL2luZGV4LmpzIiwgInNyYy9saWIvbm9kZV9tb2R1bGVzL21pZGktd3JpdGVyLWpzL3BhY2thZ2UuanNvbiIsICJzcmMvbGliL25vZGVfbW9kdWxlcy9taWRpLXdyaXRlci1qcy9idWlsZC9pbmRleC5qcyIsICJzcmMvbGliL25vZGVfbW9kdWxlcy9qc21pZGdlbi9saWIvanNtaWRnZW4uanMiLCAic3JjL2xpYi9zcmMvbGliL3NyYy9saWIvc3JjL2xpYi91dGlscy5qcyIsICJzcmMvbGliL25vZGVfbW9kdWxlcy9oYXJtb25pY3MvbWFpbi5qcyIsICJzcmMvbGliL3NyYy9saWIvc3JjL2xpYi9zcmMvbGliL3Rva2VuaXplLmpzIiwgInNyYy9saWIvbm9kZV9tb2R1bGVzL3NjcmliYmxldHVuZS9zcmMvdXRpbHMudHMiLCAic3JjL2xpYi9ub2RlX21vZHVsZXMvc2NyaWJibGV0dW5lL3NyYy9wcm9ncmVzc2lvbi50cyIsICJzcmMvbGliL3NyYy9saWIvc3JjL2xpYi9zcmMvbGliL3BhcnNlci5qcyIsICJzcmMvbGliL3NyYy9saWIvc3JjL2xpYi9zcmMvbGliL21peHVwLmpzIiwgInNyYy9saWIvc3JjL2xpYi9zcmMvbGliL2luZGV4LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCdcblxuLy8gdXRpbFxuZnVuY3Rpb24gZmlsbFN0ciAocywgbnVtKSB7IHJldHVybiBBcnJheShudW0gKyAxKS5qb2luKHMpIH1cbmZ1bmN0aW9uIGlzTnVtICh4KSB7IHJldHVybiB0eXBlb2YgeCA9PT0gJ251bWJlcicgfVxuZnVuY3Rpb24gaXNTdHIgKHgpIHsgcmV0dXJuIHR5cGVvZiB4ID09PSAnc3RyaW5nJyB9XG5mdW5jdGlvbiBpc0RlZiAoeCkgeyByZXR1cm4gdHlwZW9mIHggIT09ICd1bmRlZmluZWQnIH1cbmZ1bmN0aW9uIG1pZGlUb0ZyZXEgKG1pZGksIHR1bmluZykge1xuICByZXR1cm4gTWF0aC5wb3coMiwgKG1pZGkgLSA2OSkgLyAxMikgKiAodHVuaW5nIHx8IDQ0MClcbn1cblxudmFyIFJFR0VYID0gL14oW2EtZ0EtR10pKCN7MSx9fGJ7MSx9fHh7MSx9fCkoLT9cXGQqKVxccyooLiopXFxzKiQvXG4vKipcbiAqIEEgcmVnZXggZm9yIG1hdGNoaW5nIG5vdGUgc3RyaW5ncyBpbiBzY2llbnRpZmljIG5vdGF0aW9uLlxuICpcbiAqIEBuYW1lIHJlZ2V4XG4gKiBAZnVuY3Rpb25cbiAqIEByZXR1cm4ge1JlZ0V4cH0gdGhlIHJlZ2V4cCB1c2VkIHRvIHBhcnNlIHRoZSBub3RlIG5hbWVcbiAqXG4gKiBUaGUgbm90ZSBzdHJpbmcgc2hvdWxkIGhhdmUgdGhlIGZvcm0gYGxldHRlclthY2NpZGVudGFsc11bb2N0YXZlXVtlbGVtZW50XWBcbiAqIHdoZXJlOlxuICpcbiAqIC0gbGV0dGVyOiAoUmVxdWlyZWQpIGlzIGEgbGV0dGVyIGZyb20gQSB0byBHIGVpdGhlciB1cHBlciBvciBsb3dlciBjYXNlXG4gKiAtIGFjY2lkZW50YWxzOiAoT3B0aW9uYWwpIGNhbiBiZSBvbmUgb3IgbW9yZSBgYmAgKGZsYXRzKSwgYCNgIChzaGFycHMpIG9yIGB4YCAoZG91YmxlIHNoYXJwcykuXG4gKiBUaGV5IGNhbiBOT1QgYmUgbWl4ZWQuXG4gKiAtIG9jdGF2ZTogKE9wdGlvbmFsKSBhIHBvc2l0aXZlIG9yIG5lZ2F0aXZlIGludGVnZXJcbiAqIC0gZWxlbWVudDogKE9wdGlvbmFsKSBhZGRpdGlvbmFsbHkgYW55dGhpbmcgYWZ0ZXIgdGhlIGR1cmF0aW9uIGlzIGNvbnNpZGVyZWQgdG9cbiAqIGJlIHRoZSBlbGVtZW50IG5hbWUgKGZvciBleGFtcGxlOiAnQzIgZG9yaWFuJylcbiAqXG4gKiBUaGUgZXhlY3V0ZWQgcmVnZXggY29udGFpbnMgKGJ5IGFycmF5IGluZGV4KTpcbiAqXG4gKiAtIDA6IHRoZSBjb21wbGV0ZSBzdHJpbmdcbiAqIC0gMTogdGhlIG5vdGUgbGV0dGVyXG4gKiAtIDI6IHRoZSBvcHRpb25hbCBhY2NpZGVudGFsc1xuICogLSAzOiB0aGUgb3B0aW9uYWwgb2N0YXZlXG4gKiAtIDQ6IHRoZSByZXN0IG9mIHRoZSBzdHJpbmcgKHRyaW1tZWQpXG4gKlxuICogQGV4YW1wbGVcbiAqIHZhciBwYXJzZXIgPSByZXF1aXJlKCdub3RlLXBhcnNlcicpXG4gKiBwYXJzZXIucmVnZXguZXhlYygnYyM0JylcbiAqIC8vID0+IFsnYyM0JywgJ2MnLCAnIycsICc0JywgJyddXG4gKiBwYXJzZXIucmVnZXguZXhlYygnYyM0IG1ham9yJylcbiAqIC8vID0+IFsnYyM0bWFqb3InLCAnYycsICcjJywgJzQnLCAnbWFqb3InXVxuICogcGFyc2VyLnJlZ2V4KCkuZXhlYygnQ01hajcnKVxuICogLy8gPT4gWydDTWFqNycsICdDJywgJycsICcnLCAnTWFqNyddXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdleCAoKSB7IHJldHVybiBSRUdFWCB9XG5cbnZhciBTRU1JVE9ORVMgPSBbMCwgMiwgNCwgNSwgNywgOSwgMTFdXG4vKipcbiAqIFBhcnNlIGEgbm90ZSBuYW1lIGluIHNjaWVudGlmaWMgbm90YXRpb24gYW4gcmV0dXJuIGl0J3MgY29tcG9uZW50cyxcbiAqIGFuZCBzb21lIG51bWVyaWMgcHJvcGVydGllcyBpbmNsdWRpbmcgbWlkaSBudW1iZXIgYW5kIGZyZXF1ZW5jeS5cbiAqXG4gKiBAbmFtZSBwYXJzZVxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbm90ZSAtIHRoZSBub3RlIHN0cmluZyB0byBiZSBwYXJzZWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNUb25pYyAtIHRydWUgdGhlIHN0cmluZ3MgaXQncyBzdXBwb3NlZCB0byBjb250YWluIGEgbm90ZSBudW1iZXJcbiAqIGFuZCBzb21lIGNhdGVnb3J5IChmb3IgZXhhbXBsZSBhbiBzY2FsZTogJ0MjIG1ham9yJykuIEl0J3MgZmFsc2UgYnkgZGVmYXVsdCxcbiAqIGJ1dCB3aGVuIHRydWUsIGVuIGV4dHJhIHRvbmljT2YgcHJvcGVydHkgaXMgcmV0dXJuZWQgd2l0aCB0aGUgY2F0ZWdvcnkgKCdtYWpvcicpXG4gKiBAcGFyYW0ge0Zsb2F0fSB0dW5uaW5nIC0gVGhlIGZyZXF1ZW5jeSBvZiBBNCBub3RlIHRvIGNhbGN1bGF0ZSBmcmVxdWVuY2llcy5cbiAqIEJ5IGRlZmF1bHQgaXQgNDQwLlxuICogQHJldHVybiB7T2JqZWN0fSB0aGUgcGFyc2VkIG5vdGUgbmFtZSBvciBudWxsIGlmIG5vdCBhIHZhbGlkIG5vdGVcbiAqXG4gKiBUaGUgcGFyc2VkIG5vdGUgbmFtZSBvYmplY3Qgd2lsbCBBTFdBWVMgY29udGFpbnM6XG4gKiAtIGxldHRlcjogdGhlIHVwcGVyY2FzZSBsZXR0ZXIgb2YgdGhlIG5vdGVcbiAqIC0gYWNjOiB0aGUgYWNjaWRlbnRhbHMgb2YgdGhlIG5vdGUgKG9ubHkgc2hhcnBzIG9yIGZsYXRzKVxuICogLSBwYzogdGhlIHBpdGNoIGNsYXNzIChsZXR0ZXIgKyBhY2MpXG4gKiAtIHN0ZXA6IHMgYSBudW1lcmljIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBsZXR0ZXIuIEl0J3MgYW4gaW50ZWdlciBmcm9tIDAgdG8gNlxuICogd2hlcmUgMCA9IEMsIDEgPSBEIC4uLiA2ID0gQlxuICogLSBhbHQ6IGEgbnVtZXJpYyByZXByZXNlbnRhdGlvbiBvZiB0aGUgYWNjaWRlbnRhbHMuIDAgbWVhbnMgbm8gYWx0ZXJhdGlvbixcbiAqIHBvc2l0aXZlIG51bWJlcnMgYXJlIGZvciBzaGFycHMgYW5kIG5lZ2F0aXZlIGZvciBmbGF0c1xuICogLSBjaHJvbWE6IGEgbnVtZXJpYyByZXByZXNlbnRhdGlvbiBvZiB0aGUgcGl0Y2ggY2xhc3MuIEl0J3MgbGlrZSBtaWRpIGZvclxuICogcGl0Y2ggY2xhc3Nlcy4gMCA9IEMsIDEgPSBDIywgMiA9IEQgLi4uIDExID0gQi4gQ2FuIGJlIHVzZWQgdG8gZmluZCBlbmhhcm1vbmljc1xuICogc2luY2UsIGZvciBleGFtcGxlLCBjaHJvbWEgb2YgJ0NiJyBhbmQgJ0InIGFyZSBib3RoIDExXG4gKlxuICogSWYgdGhlIG5vdGUgaGFzIG9jdGF2ZSwgdGhlIHBhcnNlciBvYmplY3Qgd2lsbCBjb250YWluOlxuICogLSBvY3Q6IHRoZSBvY3RhdmUgbnVtYmVyIChhcyBpbnRlZ2VyKVxuICogLSBtaWRpOiB0aGUgbWlkaSBudW1iZXJcbiAqIC0gZnJlcTogdGhlIGZyZXF1ZW5jeSAodXNpbmcgdHVuaW5nIHBhcmFtZXRlciBhcyBiYXNlKVxuICpcbiAqIElmIHRoZSBwYXJhbWV0ZXIgYGlzVG9uaWNgIGlzIHNldCB0byB0cnVlLCB0aGUgcGFyc2VkIG9iamVjdCB3aWxsIGNvbnRhaW46XG4gKiAtIHRvbmljT2Y6IHRoZSByZXN0IG9mIHRoZSBzdHJpbmcgdGhhdCBmb2xsb3dzIG5vdGUgbmFtZSAobGVmdCBhbmQgcmlnaHQgdHJpbW1lZClcbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIHBhcnNlID0gcmVxdWlyZSgnbm90ZS1wYXJzZXInKS5wYXJzZVxuICogcGFyc2UoJ0NiNCcpXG4gKiAvLyA9PiB7IGxldHRlcjogJ0MnLCBhY2M6ICdiJywgcGM6ICdDYicsIHN0ZXA6IDAsIGFsdDogLTEsIGNocm9tYTogLTEsXG4gKiAgICAgICAgIG9jdDogNCwgbWlkaTogNTksIGZyZXE6IDI0Ni45NDE2NTA2MjgwNjIwNiB9XG4gKiAvLyBpZiBubyBvY3RhdmUsIG5vIG1pZGksIG5vIGZyZXFcbiAqIHBhcnNlKCdmeCcpXG4gKiAvLyA9PiB7IGxldHRlcjogJ0YnLCBhY2M6ICcjIycsIHBjOiAnRiMjJywgc3RlcDogMywgYWx0OiAyLCBjaHJvbWE6IDcgfSlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlIChzdHIsIGlzVG9uaWMsIHR1bmluZykge1xuICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHJldHVybiBudWxsXG4gIHZhciBtID0gUkVHRVguZXhlYyhzdHIpXG4gIGlmICghbSB8fCAoIWlzVG9uaWMgJiYgbVs0XSkpIHJldHVybiBudWxsXG5cbiAgdmFyIHAgPSB7IGxldHRlcjogbVsxXS50b1VwcGVyQ2FzZSgpLCBhY2M6IG1bMl0ucmVwbGFjZSgveC9nLCAnIyMnKSB9XG4gIHAucGMgPSBwLmxldHRlciArIHAuYWNjXG4gIHAuc3RlcCA9IChwLmxldHRlci5jaGFyQ29kZUF0KDApICsgMykgJSA3XG4gIHAuYWx0ID0gcC5hY2NbMF0gPT09ICdiJyA/IC1wLmFjYy5sZW5ndGggOiBwLmFjYy5sZW5ndGhcbiAgdmFyIHBvcyA9IFNFTUlUT05FU1twLnN0ZXBdICsgcC5hbHRcbiAgcC5jaHJvbWEgPSBwb3MgPCAwID8gMTIgKyBwb3MgOiBwb3MgJSAxMlxuICBpZiAobVszXSkgeyAvLyBoYXMgb2N0YXZlXG4gICAgcC5vY3QgPSArbVszXVxuICAgIHAubWlkaSA9IHBvcyArIDEyICogKHAub2N0ICsgMSlcbiAgICBwLmZyZXEgPSBtaWRpVG9GcmVxKHAubWlkaSwgdHVuaW5nKVxuICB9XG4gIGlmIChpc1RvbmljKSBwLnRvbmljT2YgPSBtWzRdXG4gIHJldHVybiBwXG59XG5cbnZhciBMRVRURVJTID0gJ0NERUZHQUInXG5mdW5jdGlvbiBhY2NTdHIgKG4pIHsgcmV0dXJuICFpc051bShuKSA/ICcnIDogbiA8IDAgPyBmaWxsU3RyKCdiJywgLW4pIDogZmlsbFN0cignIycsIG4pIH1cbmZ1bmN0aW9uIG9jdFN0ciAobikgeyByZXR1cm4gIWlzTnVtKG4pID8gJycgOiAnJyArIG4gfVxuXG4vKipcbiAqIENyZWF0ZSBhIHN0cmluZyBmcm9tIGEgcGFyc2VkIG9iamVjdCBvciBgc3RlcCwgYWx0ZXJhdGlvbiwgb2N0YXZlYCBwYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gdGhlIHBhcnNlZCBkYXRhIG9iamVjdFxuICogQHJldHVybiB7U3RyaW5nfSBhIG5vdGUgc3RyaW5nIG9yIG51bGwgaWYgbm90IHZhbGlkIHBhcmFtZXRlcnNcbiAqIEBzaW5jZSAxLjJcbiAqIEBleGFtcGxlXG4gKiBwYXJzZXIuYnVpbGQocGFyc2VyLnBhcnNlKCdjYjInKSkgLy8gPT4gJ0NiMidcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gaXQgYWNjZXB0cyAoc3RlcCwgYWx0ZXJhdGlvbiwgb2N0YXZlKSBwYXJhbWV0ZXJzOlxuICogcGFyc2VyLmJ1aWxkKDMpIC8vID0+ICdGJ1xuICogcGFyc2VyLmJ1aWxkKDMsIC0xKSAvLyA9PiAnRmInXG4gKiBwYXJzZXIuYnVpbGQoMywgLTEsIDQpIC8vID0+ICdGYjQnXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidWlsZCAocywgYSwgbykge1xuICBpZiAocyA9PT0gbnVsbCB8fCB0eXBlb2YgcyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBudWxsXG4gIGlmIChzLnN0ZXApIHJldHVybiBidWlsZChzLnN0ZXAsIHMuYWx0LCBzLm9jdClcbiAgaWYgKHMgPCAwIHx8IHMgPiA2KSByZXR1cm4gbnVsbFxuICByZXR1cm4gTEVUVEVSUy5jaGFyQXQocykgKyBhY2NTdHIoYSkgKyBvY3RTdHIobylcbn1cblxuLyoqXG4gKiBHZXQgbWlkaSBvZiBhIG5vdGVcbiAqXG4gKiBAbmFtZSBtaWRpXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfEludGVnZXJ9IG5vdGUgLSB0aGUgbm90ZSBuYW1lIG9yIG1pZGkgbnVtYmVyXG4gKiBAcmV0dXJuIHtJbnRlZ2VyfSB0aGUgbWlkaSBudW1iZXIgb2YgdGhlIG5vdGUgb3IgbnVsbCBpZiBub3QgYSB2YWxpZCBub3RlXG4gKiBvciB0aGUgbm90ZSBkb2VzIE5PVCBjb250YWlucyBvY3RhdmVcbiAqIEBleGFtcGxlXG4gKiB2YXIgcGFyc2VyID0gcmVxdWlyZSgnbm90ZS1wYXJzZXInKVxuICogcGFyc2VyLm1pZGkoJ0E0JykgLy8gPT4gNjlcbiAqIHBhcnNlci5taWRpKCdBJykgLy8gPT4gbnVsbFxuICogQGV4YW1wbGVcbiAqIC8vIG1pZGkgbnVtYmVycyBhcmUgYnlwYXNzZWQgKGV2ZW4gYXMgc3RyaW5ncylcbiAqIHBhcnNlci5taWRpKDYwKSAvLyA9PiA2MFxuICogcGFyc2VyLm1pZGkoJzYwJykgLy8gPT4gNjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1pZGkgKG5vdGUpIHtcbiAgaWYgKChpc051bShub3RlKSB8fCBpc1N0cihub3RlKSkgJiYgbm90ZSA+PSAwICYmIG5vdGUgPCAxMjgpIHJldHVybiArbm90ZVxuICB2YXIgcCA9IHBhcnNlKG5vdGUpXG4gIHJldHVybiBwICYmIGlzRGVmKHAubWlkaSkgPyBwLm1pZGkgOiBudWxsXG59XG5cbi8qKlxuICogR2V0IGZyZXEgb2YgYSBub3RlIGluIGhlcnR6cyAoaW4gYSB3ZWxsIHRlbXBlcmVkIDQ0MEh6IEE0KVxuICpcbiAqIEBuYW1lIGZyZXFcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5vdGUgLSB0aGUgbm90ZSBuYW1lIG9yIG5vdGUgbWlkaSBudW1iZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSB0dW5pbmcgLSAoT3B0aW9uYWwpIHRoZSBBNCBmcmVxdWVuY3kgKDQ0MCBieSBkZWZhdWx0KVxuICogQHJldHVybiB7RmxvYXR9IHRoZSBmcmVxIG9mIHRoZSBudW1iZXIgaWYgaGVydHpzIG9yIG51bGwgaWYgbm90IHZhbGlkIG5vdGVcbiAqIEBleGFtcGxlXG4gKiB2YXIgcGFyc2VyID0gcmVxdWlyZSgnbm90ZS1wYXJzZXInKVxuICogcGFyc2VyLmZyZXEoJ0E0JykgLy8gPT4gNDQwXG4gKiBwYXJzZXIuZnJlcSgnQScpIC8vID0+IG51bGxcbiAqIEBleGFtcGxlXG4gKiAvLyBjYW4gY2hhbmdlIHR1bmluZyAoNDQwIGJ5IGRlZmF1bHQpXG4gKiBwYXJzZXIuZnJlcSgnQTQnLCA0NDQpIC8vID0+IDQ0NFxuICogcGFyc2VyLmZyZXEoJ0EzJywgNDQ0KSAvLyA9PiAyMjJcbiAqIEBleGFtcGxlXG4gKiAvLyBpdCBhY2NlcHRzIG1pZGkgbnVtYmVycyAoYXMgbnVtYmVycyBhbmQgYXMgc3RyaW5ncylcbiAqIHBhcnNlci5mcmVxKDY5KSAvLyA9PiA0NDBcbiAqIHBhcnNlci5mcmVxKCc2OScsIDQ0MikgLy8gPT4gNDQyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcmVxIChub3RlLCB0dW5pbmcpIHtcbiAgdmFyIG0gPSBtaWRpKG5vdGUpXG4gIHJldHVybiBtID09PSBudWxsID8gbnVsbCA6IG1pZGlUb0ZyZXEobSwgdHVuaW5nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbGV0dGVyIChzcmMpIHsgcmV0dXJuIChwYXJzZShzcmMpIHx8IHt9KS5sZXR0ZXIgfVxuZXhwb3J0IGZ1bmN0aW9uIGFjYyAoc3JjKSB7IHJldHVybiAocGFyc2Uoc3JjKSB8fCB7fSkuYWNjIH1cbmV4cG9ydCBmdW5jdGlvbiBwYyAoc3JjKSB7IHJldHVybiAocGFyc2Uoc3JjKSB8fCB7fSkucGMgfVxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXAgKHNyYykgeyByZXR1cm4gKHBhcnNlKHNyYykgfHwge30pLnN0ZXAgfVxuZXhwb3J0IGZ1bmN0aW9uIGFsdCAoc3JjKSB7IHJldHVybiAocGFyc2Uoc3JjKSB8fCB7fSkuYWx0IH1cbmV4cG9ydCBmdW5jdGlvbiBjaHJvbWEgKHNyYykgeyByZXR1cm4gKHBhcnNlKHNyYykgfHwge30pLmNocm9tYSB9XG5leHBvcnQgZnVuY3Rpb24gb2N0IChzcmMpIHsgcmV0dXJuIChwYXJzZShzcmMpIHx8IHt9KS5vY3QgfVxuIiwgIi8qKlxuICogQSBtaWRpIG5vdGUgbnVtYmVyIGlzIGEgbnVtYmVyIHJlcHJlc2VudGF0aW9uIG9mIGEgbm90ZSBwaXRjaC4gSXQgY2FuIGJlXG4gKiBpbnRlZ2VycyBzbyBpdCdzIGVxdWFsIHRlbXBlcmVkIHR1bmVkLCBvciBmbG9hdCB0byBpbmRpY2F0ZSBpdCdzIG5vdFxuICogdHVuZWQgaW50byBlcXVhbCB0ZW1lcGVyZWQgc2NhbGUuXG4gKlxuICogVGhpcyBtb2R1bGUgY29udGFpbnMgZnVuY3Rpb25zIHRvIGNvbnZlcnQgdG8gYW5kIGZyb20gbWlkaSBub3Rlcy5cbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIG1pZGkgPSByZXF1aXJlKCd0b25hbC1taWRpJylcbiAqIG1pZGkudG9NaWRpKCdBNCcpIC8vID0+IDY5XG4gKiBtaWRpLm5vdGUoNjkpIC8vID0+ICdBNCdcbiAqIG1pZGkubm90ZSg2MSkgLy8gPT4gJ0RiNCdcbiAqIG1pZGkubm90ZSg2MSwgdHJ1ZSkgLy8gPT4gJ0MjNCdcbiAqXG4gKiBAbW9kdWxlIG1pZGlcbiAqL1xuXG5pbXBvcnQgeyBtaWRpIH0gZnJvbSAnbm90ZS1wYXJzZXInXG5cbi8qKlxuICogQ29udmVydCB0aGUgZ2l2ZW4gbm90ZSB0byBhIG1pZGkgbm90ZSBudW1iZXIuIElmIHlvdSBwYXNzIGEgbWlkaSBudW1iZXIgaXRcbiAqIHdpbGwgcmV0dXJuZWQgYXMgaXMuXG4gKlxuICogQHBhcmFtIHtBcnJheXxTdHJpbmd8TnVtYmVyfSBub3RlIC0gdGhlIG5vdGUgdG8gZ2V0IHRoZSBtaWRpIG51bWJlciBmcm9tXG4gKiBAcmV0dXJuIHtJbnRlZ2VyfSB0aGUgbWlkaSBudW1iZXIgb3IgbnVsbCBpZiBub3QgdmFsaWQgcGl0Y2hcbiAqIEBleGFtcGxlXG4gKiBtaWRpLnRvTWlkaSgnQzQnKSAvLyA9PiA2MFxuICogbWlkaS50b01pZGkoNjApIC8vID0+IDYwXG4gKiBtaWRpLnRvTWlkaSgnNjAnKSAvLyA9PiA2MFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9NaWRpICh2YWwpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSAmJiB2YWwubGVuZ3RoID09PSAyKSByZXR1cm4gdmFsWzBdICogNyArIHZhbFsxXSAqIDEyICsgMTJcbiAgcmV0dXJuIG1pZGkodmFsKVxufVxuXG52YXIgRkxBVFMgPSAnQyBEYiBEIEViIEUgRiBHYiBHIEFiIEEgQmIgQicuc3BsaXQoJyAnKVxudmFyIFNIQVJQUyA9ICdDIEMjIEQgRCMgRSBGIEYjIEcgRyMgQSBBIyBCJy5zcGxpdCgnICcpXG5cbi8qKlxuICogR2l2ZW4gYSBtaWRpIG51bWJlciwgcmV0dXJucyBhIG5vdGUgbmFtZS4gVGhlIGFsdGVyZWQgbm90ZXMgd2lsbCBoYXZlXG4gKiBmbGF0cyB1bmxlc3MgZXhwbGljaXRseSBzZXQgd2l0aCB0aGUgb3B0aW9uYWwgYHVzZVNoYXJwc2AgcGFyYW1ldGVyLlxuICpcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtJbnRlZ2VyfSBtaWRpIC0gdGhlIG1pZGkgbm90ZSBudW1iZXJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlU2hhcnBzIC0gKE9wdGlvbmFsKSBzZXQgdG8gdHJ1ZSB0byB1c2Ugc2hhcnBzIGluc3RlYWQgb2YgZmxhdHNcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIG5vdGUgbmFtZVxuICogQGV4YW1wbGVcbiAqIHZhciBtaWRpID0gcmVxdWlyZSgndG9uYWwtbWlkaScpXG4gKiBtaWRpLm5vdGUoNjEpIC8vID0+ICdEYjQnXG4gKiBtaWRpLm5vdGUoNjEsIHRydWUpIC8vID0+ICdDIzQnXG4gKiAvLyBpdCByb3VuZHMgdG8gbmVhcmVzdCBub3RlXG4gKiBtaWRpLm5vdGUoNjEuNykgLy8gPT4gJ0Q0J1xuICovXG5leHBvcnQgZnVuY3Rpb24gbm90ZSAobnVtLCBzaGFycHMpIHtcbiAgaWYgKG51bSA9PT0gdHJ1ZSB8fCBudW0gPT09IGZhbHNlKSByZXR1cm4gZnVuY3Rpb24gKG0pIHsgcmV0dXJuIG5vdGUobSwgbnVtKSB9XG4gIG51bSA9IE1hdGgucm91bmQobnVtKVxuICB2YXIgcGNzID0gc2hhcnBzID09PSB0cnVlID8gU0hBUlBTIDogRkxBVFNcbiAgdmFyIHBjID0gcGNzW251bSAlIDEyXVxuICB2YXIgbyA9IE1hdGguZmxvb3IobnVtIC8gMTIpIC0gMVxuICByZXR1cm4gcGMgKyBvXG59XG4iLCAie1xuICBcIm5hbWVcIjogXCJtaWRpLXdyaXRlci1qc1wiLFxuICBcInZlcnNpb25cIjogXCIyLjAuMVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQSBsaWJyYXJ5IHByb3ZpZGluZyBhbiBBUEkgZm9yIGdlbmVyYXRpbmcgTUlESSBmaWxlcy5cIixcbiAgXCJtYWluXCI6IFwiYnVpbGQvaW5kZXguanNcIixcbiAgXCJ0eXBlc1wiOiBcInR5cGVzLmQudHNcIixcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwidG9uYWwtbWlkaVwiOiBcIl4wLjY5LjdcIlxuICB9LFxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAYmFiZWwvY29yZVwiOiBcIl43LjkuNlwiLFxuICAgIFwiQGJhYmVsL3BsdWdpbi10cmFuc2Zvcm0tZGVzdHJ1Y3R1cmluZ1wiOiBcIl43LjkuNVwiLFxuICAgIFwiQGJhYmVsL3ByZXNldC1lbnZcIjogXCJeNy45LjZcIixcbiAgICBcIkByb2xsdXAvcGx1Z2luLWJhYmVsXCI6IFwiXjUuMC4wXCIsXG4gICAgXCJlc2xpbnRcIjogXCJeNy4wLjBcIixcbiAgICBcImVzbGludC1jb25maWctc3RhbmRhcmRcIjogXCJeMTIuMC4wXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLWltcG9ydFwiOiBcIl4yLjIwLjJcIixcbiAgICBcImVzbGludC1wbHVnaW4tbm9kZVwiOiBcIl45LjIuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1wcm9taXNlXCI6IFwiXjQuMS4xXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXN0YW5kYXJkXCI6IFwiXjQuMC4xXCIsXG4gICAgXCJqc2RvY1wiOiBcIl4zLjYuNFwiLFxuICAgIFwibWluYW1pXCI6IFwiXjEuMi4zXCIsXG4gICAgXCJtb2NoYVwiOiBcIl45LjAuMVwiLFxuICAgIFwibnljXCI6IFwiXjE1LjAuMVwiLFxuICAgIFwicm9sbHVwXCI6IFwiXjIuOS4wXCIsXG4gICAgXCJ3YXRjaFwiOiBcIl4xLjAuMlwiXG4gIH0sXG4gIFwiZGlyZWN0b3JpZXNcIjoge1xuICAgIFwibGliXCI6IFwic3JjXCIsXG4gICAgXCJleGFtcGxlXCI6IFwiZXhhbXBsZXNcIixcbiAgICBcInRlc3RcIjogXCJ0ZXN0XCJcbiAgfSxcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcImJ1aWxkXCI6IFwibWtkaXIgLXAgYnVpbGQgJiYgcm9sbHVwIC1jICYmIG5wbSBydW4gZG9jc1wiLFxuICAgIFwiZG9jc1wiOiBcIi4vbm9kZV9tb2R1bGVzLy5iaW4vanNkb2MgLXIgc3JjIFJFQURNRS5tZCAtZCAuL2RvY3MgLXQgLi9ub2RlX21vZHVsZXMvbWluYW1pXCIsXG4gICAgXCJsaW50OmpzXCI6IFwiZXNsaW50ICdzcmMvKiovKiouanMnXCIsXG4gICAgXCJwcmVwdWJsaXNoT25seVwiOiBcIm5wbSB0ZXN0XCIsXG4gICAgXCJwcmV0ZXN0XCI6IFwibnBtIHJ1biBidWlsZFwiLFxuICAgIFwidGVzdFwiOiBcIm55YyAtLXJlcG9ydGVyPXRleHQgbW9jaGEgLS1uby1jb25maWcgLS1uby1wYWNrYWdlXCIsXG4gICAgXCJ3YXRjaFwiOiBcIndhdGNoICducG0gcnVuIGJ1aWxkJyBzcmNcIixcbiAgICBcInBvc3RpbnN0YWxsXCI6IFwibm9kZSBwb3N0aW5zdGFsbC5qc1wiXG4gIH0sXG4gIFwicnVua2l0RXhhbXBsZUZpbGVuYW1lXCI6IFwicnVua2l0LmpzXCIsXG4gIFwicmVwb3NpdG9yeVwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiZ2l0XCIsXG4gICAgXCJ1cmxcIjogXCJnaXQraHR0cHM6Ly9naXRodWIuY29tL2dyaW1tZHVkZS9NaWRpV3JpdGVySlMuZ2l0XCJcbiAgfSxcbiAgXCJrZXl3b3Jkc1wiOiBbXG4gICAgXCJtaWRpXCIsXG4gICAgXCJnZW5lcmF0b3JcIixcbiAgICBcIm11c2ljXCJcbiAgXSxcbiAgXCJhdXRob3JcIjogXCJHYXJyZXR0IEdyaW1tXCIsXG4gIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICBcImJ1Z3NcIjoge1xuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2dyaW1tZHVkZS9NaWRpV3JpdGVySlMvaXNzdWVzXCJcbiAgfSxcbiAgXCJob21lcGFnZVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ncmltbWR1ZGUvTWlkaVdyaXRlckpTI3JlYWRtZVwiXG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9uYWxNaWRpID0gcmVxdWlyZSgndG9uYWwtbWlkaScpO1xuXG4vKipcbiAqIE1JREkgZmlsZSBmb3JtYXQgY29uc3RhbnRzLlxuICogQHJldHVybiB7Q29uc3RhbnRzfVxuICovXG52YXIgQ29uc3RhbnRzID0ge1xuICBWRVJTSU9OOiByZXF1aXJlKCcuLi9wYWNrYWdlLmpzb24nKS52ZXJzaW9uLFxuICBIRUFERVJfQ0hVTktfVFlQRTogWzB4NGQsIDB4NTQsIDB4NjgsIDB4NjRdLFxuICAvLyBNdGhkXG4gIEhFQURFUl9DSFVOS19MRU5HVEg6IFsweDAwLCAweDAwLCAweDAwLCAweDA2XSxcbiAgLy8gSGVhZGVyIHNpemUgZm9yIFNNRlxuICBIRUFERVJfQ0hVTktfRk9STUFUMDogWzB4MDAsIDB4MDBdLFxuICAvLyBNaWRpIFR5cGUgMCBpZFxuICBIRUFERVJfQ0hVTktfRk9STUFUMTogWzB4MDAsIDB4MDFdLFxuICAvLyBNaWRpIFR5cGUgMSBpZFxuICBIRUFERVJfQ0hVTktfRElWSVNJT046IFsweDAwLCAweDgwXSxcbiAgLy8gRGVmYXVsdHMgdG8gMTI4IHRpY2tzIHBlciBiZWF0XG4gIFRSQUNLX0NIVU5LX1RZUEU6IFsweDRkLCAweDU0LCAweDcyLCAweDZiXSxcbiAgLy8gTVRyayxcbiAgTUVUQV9FVkVOVF9JRDogMHhGRixcbiAgTUVUQV9URVhUX0lEOiAweDAxLFxuICBNRVRBX0NPUFlSSUdIVF9JRDogMHgwMixcbiAgTUVUQV9UUkFDS19OQU1FX0lEOiAweDAzLFxuICBNRVRBX0lOU1RSVU1FTlRfTkFNRV9JRDogMHgwNCxcbiAgTUVUQV9MWVJJQ19JRDogMHgwNSxcbiAgTUVUQV9NQVJLRVJfSUQ6IDB4MDYsXG4gIE1FVEFfQ1VFX1BPSU5UOiAweDA3LFxuICBNRVRBX1RFTVBPX0lEOiAweDUxLFxuICBNRVRBX1NNVFBFX09GRlNFVDogMHg1NCxcbiAgTUVUQV9USU1FX1NJR05BVFVSRV9JRDogMHg1OCxcbiAgTUVUQV9LRVlfU0lHTkFUVVJFX0lEOiAweDU5LFxuICBNRVRBX0VORF9PRl9UUkFDS19JRDogWzB4MkYsIDB4MDBdLFxuICBDT05UUk9MTEVSX0NIQU5HRV9TVEFUVVM6IDB4QjAsXG4gIC8vIGluY2x1ZGVzIGNoYW5uZWwgbnVtYmVyICgwKVxuICBQUk9HUkFNX0NIQU5HRV9TVEFUVVM6IDB4QzAsXG4gIC8vIGluY2x1ZGVzIGNoYW5uZWwgbnVtYmVyICgwKVxuICBQSVRDSF9CRU5EX1NUQVRVUzogMHhFMCAvLyBpbmNsdWRlcyBjaGFubmVsIG51bWJlciAoMClcblxufTtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxuZnVuY3Rpb24gX3dyYXBSZWdFeHAoKSB7XG4gIF93cmFwUmVnRXhwID0gZnVuY3Rpb24gKHJlLCBncm91cHMpIHtcbiAgICByZXR1cm4gbmV3IEJhYmVsUmVnRXhwKHJlLCB1bmRlZmluZWQsIGdyb3Vwcyk7XG4gIH07XG5cbiAgdmFyIF9zdXBlciA9IFJlZ0V4cC5wcm90b3R5cGU7XG5cbiAgdmFyIF9ncm91cHMgPSBuZXcgV2Vha01hcCgpO1xuXG4gIGZ1bmN0aW9uIEJhYmVsUmVnRXhwKHJlLCBmbGFncywgZ3JvdXBzKSB7XG4gICAgdmFyIF90aGlzID0gbmV3IFJlZ0V4cChyZSwgZmxhZ3MpO1xuXG4gICAgX2dyb3Vwcy5zZXQoX3RoaXMsIGdyb3VwcyB8fCBfZ3JvdXBzLmdldChyZSkpO1xuXG4gICAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihfdGhpcywgQmFiZWxSZWdFeHAucHJvdG90eXBlKTtcbiAgfVxuXG4gIF9pbmhlcml0cyhCYWJlbFJlZ0V4cCwgUmVnRXhwKTtcblxuICBCYWJlbFJlZ0V4cC5wcm90b3R5cGUuZXhlYyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICB2YXIgcmVzdWx0ID0gX3N1cGVyLmV4ZWMuY2FsbCh0aGlzLCBzdHIpO1xuXG4gICAgaWYgKHJlc3VsdCkgcmVzdWx0Lmdyb3VwcyA9IGJ1aWxkR3JvdXBzKHJlc3VsdCwgdGhpcyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBCYWJlbFJlZ0V4cC5wcm90b3R5cGVbU3ltYm9sLnJlcGxhY2VdID0gZnVuY3Rpb24gKHN0ciwgc3Vic3RpdHV0aW9uKSB7XG4gICAgaWYgKHR5cGVvZiBzdWJzdGl0dXRpb24gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHZhciBncm91cHMgPSBfZ3JvdXBzLmdldCh0aGlzKTtcblxuICAgICAgcmV0dXJuIF9zdXBlcltTeW1ib2wucmVwbGFjZV0uY2FsbCh0aGlzLCBzdHIsIHN1YnN0aXR1dGlvbi5yZXBsYWNlKC9cXCQ8KFtePl0rKT4vZywgZnVuY3Rpb24gKF8sIG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIFwiJFwiICsgZ3JvdXBzW25hbWVdO1xuICAgICAgfSkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHN1YnN0aXR1dGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gX3N1cGVyW1N5bWJvbC5yZXBsYWNlXS5jYWxsKHRoaXMsIHN0ciwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcblxuICAgICAgICBpZiAodHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3MpO1xuICAgICAgICAgIGFyZ3MucHVzaChidWlsZEdyb3VwcyhhcmdzLCBfdGhpcykpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1YnN0aXR1dGlvbi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gX3N1cGVyW1N5bWJvbC5yZXBsYWNlXS5jYWxsKHRoaXMsIHN0ciwgc3Vic3RpdHV0aW9uKTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gYnVpbGRHcm91cHMocmVzdWx0LCByZSkge1xuICAgIHZhciBnID0gX2dyb3Vwcy5nZXQocmUpO1xuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGcpLnJlZHVjZShmdW5jdGlvbiAoZ3JvdXBzLCBuYW1lKSB7XG4gICAgICBncm91cHNbbmFtZV0gPSByZXN1bHRbZ1tuYW1lXV07XG4gICAgICByZXR1cm4gZ3JvdXBzO1xuICAgIH0sIE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICB9XG5cbiAgcmV0dXJuIF93cmFwUmVnRXhwLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbi8qKlxuICogU3RhdGljIHV0aWxpdHkgZnVuY3Rpb25zIHVzZWQgdGhyb3VnaG91dCB0aGUgbGlicmFyeS5cbiAqL1xuXG52YXIgVXRpbHMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBVdGlscygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVXRpbHMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFV0aWxzLCBudWxsLCBbe1xuICAgIGtleTogXCJ2ZXJzaW9uXCIsXG4gICAgdmFsdWU6XG4gICAgLyoqXG4gICAgICogR2V0cyBNaWRpV3JpdGVySlMgdmVyc2lvbiBudW1iZXIuXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHZlcnNpb24oKSB7XG4gICAgICByZXR1cm4gQ29uc3RhbnRzLlZFUlNJT047XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnQgYSBzdHJpbmcgdG8gYW4gYXJyYXkgb2YgYnl0ZXNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gICAgICogQHJldHVybiB7YXJyYXl9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzdHJpbmdUb0J5dGVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0cmluZ1RvQnl0ZXMoc3RyaW5nKSB7XG4gICAgICByZXR1cm4gc3RyaW5nLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24gKF9jaGFyKSB7XG4gICAgICAgIHJldHVybiBfY2hhci5jaGFyQ29kZUF0KCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIGFyZ3VtZW50IGlzIGEgdmFsaWQgbnVtYmVyLlxuICAgICAqIEBwYXJhbSB7Kn0gbiAtIFZhbHVlIHRvIGNoZWNrXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImlzTnVtZXJpY1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc051bWVyaWMobikge1xuICAgICAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KG4pKSAmJiBpc0Zpbml0ZShuKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY29ycmVjdCBNSURJIG51bWJlciBmb3IgdGhlIHNwZWNpZmllZCBwaXRjaC5cbiAgICAgKiBVc2VzIFRvbmFsIE1pZGkgLSBodHRwczovL2dpdGh1Yi5jb20vZGFuaWdiL3RvbmFsL3RyZWUvbWFzdGVyL3BhY2thZ2VzL21pZGlcbiAgICAgKiBAcGFyYW0geyhzdHJpbmd8bnVtYmVyKX0gcGl0Y2ggLSAnQyM0JyBvciBtaWRpIG5vdGUgY29kZVxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFBpdGNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFBpdGNoKHBpdGNoKSB7XG4gICAgICByZXR1cm4gdG9uYWxNaWRpLnRvTWlkaShwaXRjaCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRyYW5zbGF0ZXMgbnVtYmVyIG9mIHRpY2tzIHRvIE1JREkgdGltZXN0YW1wIGZvcm1hdCwgcmV0dXJuaW5nIGFuIGFycmF5IG9mXG4gICAgICogaGV4IHN0cmluZ3Mgd2l0aCB0aGUgdGltZSB2YWx1ZXMuIE1pZGkgaGFzIGEgdmVyeSBwYXJ0aWN1bGFyIHRpbWUgdG8gZXhwcmVzcyB0aW1lLFxuICAgICAqIHRha2UgYSBnb29kIGxvb2sgYXQgdGhlIHNwZWMgYmVmb3JlIGV2ZXIgdG91Y2hpbmcgdGhpcyBmdW5jdGlvbi5cbiAgICAgKiBUaGFua3MgdG8gaHR0cHM6Ly9naXRodWIuY29tL3NlcmdpL2pzbWlkaVxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpY2tzIC0gTnVtYmVyIG9mIHRpY2tzIHRvIGJlIHRyYW5zbGF0ZWRcbiAgICAgKiBAcmV0dXJuIHthcnJheX0gLSBCeXRlcyB0aGF0IGZvcm0gdGhlIE1JREkgdGltZSB2YWx1ZVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibnVtYmVyVG9WYXJpYWJsZUxlbmd0aFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBudW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRpY2tzKSB7XG4gICAgICB0aWNrcyA9IE1hdGgucm91bmQodGlja3MpO1xuICAgICAgdmFyIGJ1ZmZlciA9IHRpY2tzICYgMHg3RjtcblxuICAgICAgd2hpbGUgKHRpY2tzID0gdGlja3MgPj4gNykge1xuICAgICAgICBidWZmZXIgPDw9IDg7XG4gICAgICAgIGJ1ZmZlciB8PSB0aWNrcyAmIDB4N0YgfCAweDgwO1xuICAgICAgfVxuXG4gICAgICB2YXIgYkxpc3QgPSBbXTtcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgYkxpc3QucHVzaChidWZmZXIgJiAweGZmKTtcbiAgICAgICAgaWYgKGJ1ZmZlciAmIDB4ODApIGJ1ZmZlciA+Pj0gODtlbHNlIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYkxpc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvdW50cyBudW1iZXIgb2YgYnl0ZXMgaW4gc3RyaW5nXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNcbiAgICAgKiBAcmV0dXJuIHthcnJheX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInN0cmluZ0J5dGVDb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdHJpbmdCeXRlQ291bnQocykge1xuICAgICAgcmV0dXJuIGVuY29kZVVSSShzKS5zcGxpdCgvJS4ufC4vKS5sZW5ndGggLSAxO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgYW4gaW50IGZyb20gYW4gYXJyYXkgb2YgYnl0ZXMuXG4gICAgICogQHBhcmFtIHthcnJheX0gYnl0ZXNcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJudW1iZXJGcm9tQnl0ZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbnVtYmVyRnJvbUJ5dGVzKGJ5dGVzKSB7XG4gICAgICB2YXIgaGV4ID0gJyc7XG4gICAgICB2YXIgc3RyaW5nUmVzdWx0O1xuICAgICAgYnl0ZXMuZm9yRWFjaChmdW5jdGlvbiAoX2J5dGUpIHtcbiAgICAgICAgc3RyaW5nUmVzdWx0ID0gX2J5dGUudG9TdHJpbmcoMTYpOyAvLyBlbnN1cmUgc3RyaW5nIGlzIDIgY2hhcnNcblxuICAgICAgICBpZiAoc3RyaW5nUmVzdWx0Lmxlbmd0aCA9PSAxKSBzdHJpbmdSZXN1bHQgPSBcIjBcIiArIHN0cmluZ1Jlc3VsdDtcbiAgICAgICAgaGV4ICs9IHN0cmluZ1Jlc3VsdDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHBhcnNlSW50KGhleCwgMTYpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUYWtlcyBhIG51bWJlciBhbmQgc3BsaXRzIGl0IHVwIGludG8gYW4gYXJyYXkgb2YgYnl0ZXMuICBDYW4gYmUgcGFkZGVkIGJ5IHBhc3NpbmcgYSBudW1iZXIgdG8gYnl0ZXNOZWVkZWRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGJ5dGVzTmVlZGVkXG4gICAgICogQHJldHVybiB7YXJyYXl9IC0gQXJyYXkgb2YgYnl0ZXNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm51bWJlclRvQnl0ZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbnVtYmVyVG9CeXRlcyhudW1iZXIsIGJ5dGVzTmVlZGVkKSB7XG4gICAgICBieXRlc05lZWRlZCA9IGJ5dGVzTmVlZGVkIHx8IDE7XG4gICAgICB2YXIgaGV4U3RyaW5nID0gbnVtYmVyLnRvU3RyaW5nKDE2KTtcblxuICAgICAgaWYgKGhleFN0cmluZy5sZW5ndGggJiAxKSB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSBoZXggc3RyaW5nIGlzIGV2ZW4gbnVtYmVyIG9mIGNoYXJzXG4gICAgICAgIGhleFN0cmluZyA9ICcwJyArIGhleFN0cmluZztcbiAgICAgIH0gLy8gU3BsaXQgaGV4IHN0cmluZyBpbnRvIGFuIGFycmF5IG9mIHR3byBjaGFyIGVsZW1lbnRzXG5cblxuICAgICAgdmFyIGhleEFycmF5ID0gaGV4U3RyaW5nLm1hdGNoKC8uezJ9L2cpOyAvLyBOb3cgcGFyc2UgdGhlbSBvdXQgYXMgaW50ZWdlcnNcblxuICAgICAgaGV4QXJyYXkgPSBoZXhBcnJheS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGl0ZW0sIDE2KTtcbiAgICAgIH0pOyAvLyBQcmVwZW5kIGVtcHR5IGJ5dGVzIGlmIHdlIGRvbid0IGhhdmUgZW5vdWdoXG5cbiAgICAgIGlmIChoZXhBcnJheS5sZW5ndGggPCBieXRlc05lZWRlZCkge1xuICAgICAgICB3aGlsZSAoYnl0ZXNOZWVkZWQgLSBoZXhBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaGV4QXJyYXkudW5zaGlmdCgwKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaGV4QXJyYXk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIHZhbHVlIHRvIGFycmF5IGlmIG5lZWRlZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHthcnJheX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInRvQXJyYXlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9BcnJheSh2YWx1ZSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgICByZXR1cm4gW3ZhbHVlXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgdmVsb2NpdHkgdG8gdmFsdWUgMC0xMjdcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmVsb2NpdHkgLSBWZWxvY2l0eSB2YWx1ZSAxLTEwMFxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNvbnZlcnRWZWxvY2l0eVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb252ZXJ0VmVsb2NpdHkodmVsb2NpdHkpIHtcbiAgICAgIC8vIE1heCBwYXNzZWQgdmFsdWUgbGltaXRlZCB0byAxMDBcbiAgICAgIHZlbG9jaXR5ID0gdmVsb2NpdHkgPiAxMDAgPyAxMDAgOiB2ZWxvY2l0eTtcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKHZlbG9jaXR5IC8gMTAwICogMTI3KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgdG90YWwgbnVtYmVyIG9mIHRpY2tzIG9mIGEgc3BlY2lmaWVkIGR1cmF0aW9uLlxuICAgICAqIE5vdGU6IHR5cGU9PSdub3RlJyBkZWZhdWx0cyB0byBxdWFydGVyIG5vdGUsIHR5cGU9PT0ncmVzdCcgZGVmYXVsdHMgdG8gMFxuICAgICAqIEBwYXJhbSB7KHN0cmluZ3xhcnJheSl9IGR1cmF0aW9uXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0VGlja0R1cmF0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRpY2tEdXJhdGlvbihkdXJhdGlvbikge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZHVyYXRpb24pKSB7XG4gICAgICAgIC8vIFJlY3Vyc2l2ZWx5IGV4ZWN1dGUgdGhpcyBtZXRob2QgZm9yIGVhY2ggaXRlbSBpbiB0aGUgYXJyYXkgYW5kIHJldHVybiB0aGUgc3VtIG9mIHRpY2sgZHVyYXRpb25zLlxuICAgICAgICByZXR1cm4gZHVyYXRpb24ubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBVdGlscy5nZXRUaWNrRHVyYXRpb24odmFsdWUpO1xuICAgICAgICB9KS5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICByZXR1cm4gYSArIGI7XG4gICAgICAgIH0sIDApO1xuICAgICAgfVxuXG4gICAgICBkdXJhdGlvbiA9IGR1cmF0aW9uLnRvU3RyaW5nKCk7XG5cbiAgICAgIGlmIChkdXJhdGlvbi50b0xvd2VyQ2FzZSgpLmNoYXJBdCgwKSA9PT0gJ3QnKSB7XG4gICAgICAgIC8vIElmIGR1cmF0aW9uIHN0YXJ0cyB3aXRoICd0JyB0aGVuIHRoZSBudW1iZXIgdGhhdCBmb2xsb3dzIGlzIGFuIGV4cGxpY2l0IHRpY2sgY291bnRcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGR1cmF0aW9uLnN1YnN0cmluZygxKSk7XG4gICAgICB9IC8vIE5lZWQgdG8gYXBwbHkgZHVyYXRpb24gaGVyZS4gIFF1YXJ0ZXIgbm90ZSA9PSBDb25zdGFudHMuSEVBREVSX0NIVU5LX0RJVklTSU9OXG5cblxuICAgICAgdmFyIHF1YXJ0ZXJUaWNrcyA9IFV0aWxzLm51bWJlckZyb21CeXRlcyhDb25zdGFudHMuSEVBREVSX0NIVU5LX0RJVklTSU9OKTtcbiAgICAgIHZhciB0aWNrRHVyYXRpb24gPSBxdWFydGVyVGlja3MgKiBVdGlscy5nZXREdXJhdGlvbk11bHRpcGxpZXIoZHVyYXRpb24pO1xuICAgICAgcmV0dXJuIFV0aWxzLmdldFJvdW5kZWRJZkNsb3NlKHRpY2tEdXJhdGlvbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIER1ZSB0byByb3VuZGluZyBlcnJvcnMgaW4gSmF2YVNjcmlwdCBlbmdpbmVzLFxuICAgICAqIGl0J3Mgc2FmZSB0byByb3VuZCB3aGVuIHdlJ3JlIHZlcnkgY2xvc2UgdG8gdGhlIGFjdHVhbCB0aWNrIG51bWJlclxuICAgICAqXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aWNrXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Um91bmRlZElmQ2xvc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Um91bmRlZElmQ2xvc2UodGljaykge1xuICAgICAgdmFyIHJvdW5kZWRUaWNrID0gTWF0aC5yb3VuZCh0aWNrKTtcbiAgICAgIHJldHVybiBNYXRoLmFicyhyb3VuZGVkVGljayAtIHRpY2spIDwgMC4wMDAwMDEgPyByb3VuZGVkVGljayA6IHRpY2s7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIER1ZSB0byBsb3cgcHJlY2lzaW9uIG9mIE1JREksXG4gICAgICogd2UgbmVlZCB0byBrZWVwIHRyYWNrIG9mIHJvdW5kaW5nIGVycm9ycyBpbiBkZWx0YXMuXG4gICAgICogVGhpcyBmdW5jdGlvbiB3aWxsIGNhbGN1bGF0ZSB0aGUgcm91bmRpbmcgZXJyb3IgZm9yIGEgZ2l2ZW4gZHVyYXRpb24uXG4gICAgICpcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpY2tcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRQcmVjaXNpb25Mb3NzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFByZWNpc2lvbkxvc3ModGljaykge1xuICAgICAgdmFyIHJvdW5kZWRUaWNrID0gTWF0aC5yb3VuZCh0aWNrKTtcbiAgICAgIHJldHVybiByb3VuZGVkVGljayAtIHRpY2s7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgd2hhdCB0byBtdWx0aXBsZSB0aWNrcy9xdWFydGVyIG5vdGUgYnkgdG8gZ2V0IHRoZSBzcGVjaWZpZWQgZHVyYXRpb24uXG4gICAgICogTm90ZTogdHlwZT09J25vdGUnIGRlZmF1bHRzIHRvIHF1YXJ0ZXIgbm90ZSwgdHlwZT09PSdyZXN0JyBkZWZhdWx0cyB0byAwXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGR1cmF0aW9uXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0RHVyYXRpb25NdWx0aXBsaWVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldER1cmF0aW9uTXVsdGlwbGllcihkdXJhdGlvbikge1xuICAgICAgLy8gTmVlZCB0byBhcHBseSBkdXJhdGlvbiBoZXJlLlxuICAgICAgLy8gUXVhcnRlciBub3RlID09IENvbnN0YW50cy5IRUFERVJfQ0hVTktfRElWSVNJT04gdGlja3MuXG4gICAgICBpZiAoZHVyYXRpb24gPT09ICcwJykgcmV0dXJuIDA7XG4gICAgICB2YXIgbWF0Y2ggPSBkdXJhdGlvbi5tYXRjaCggLyojX19QVVJFX18qL193cmFwUmVnRXhwKC9eKGQrKT8oWzAtOV0rKSg/OnQoWzAtOV0qKSk/Lywge1xuICAgICAgICBkb3R0ZWQ6IDEsXG4gICAgICAgIGJhc2U6IDIsXG4gICAgICAgIHR1cGxldDogM1xuICAgICAgfSkpO1xuXG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgdmFyIGJhc2UgPSBOdW1iZXIobWF0Y2guZ3JvdXBzLmJhc2UpOyAvLyAxIG9yIGFueSBwb3dlciBvZiB0d286XG5cbiAgICAgICAgdmFyIGlzVmFsaWRCYXNlID0gYmFzZSA9PT0gMSB8fCAoYmFzZSAmIGJhc2UgLSAxKSA9PT0gMDtcblxuICAgICAgICBpZiAoaXNWYWxpZEJhc2UpIHtcbiAgICAgICAgICAvLyBob3cgbXVjaCBmYXN0ZXIgb3Igc2xvd2VyIGlzIHRoaXMgbm90ZSBjb21wYXJlZCB0byBhIHF1YXJ0ZXI/XG4gICAgICAgICAgdmFyIHJhdGlvID0gYmFzZSAvIDQ7XG4gICAgICAgICAgdmFyIGR1cmF0aW9uSW5RdWFydGVycyA9IDEgLyByYXRpbztcbiAgICAgICAgICB2YXIgX21hdGNoJGdyb3VwcyA9IG1hdGNoLmdyb3VwcyxcbiAgICAgICAgICAgICAgZG90dGVkID0gX21hdGNoJGdyb3Vwcy5kb3R0ZWQsXG4gICAgICAgICAgICAgIHR1cGxldCA9IF9tYXRjaCRncm91cHMudHVwbGV0O1xuXG4gICAgICAgICAgaWYgKGRvdHRlZCkge1xuICAgICAgICAgICAgdmFyIHRoaXNNYW55RG90cyA9IGRvdHRlZC5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgZGl2aXNvciA9IE1hdGgucG93KDIsIHRoaXNNYW55RG90cyk7XG4gICAgICAgICAgICBkdXJhdGlvbkluUXVhcnRlcnMgPSBkdXJhdGlvbkluUXVhcnRlcnMgKyBkdXJhdGlvbkluUXVhcnRlcnMgKiAoKGRpdmlzb3IgLSAxKSAvIGRpdmlzb3IpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2YgdHVwbGV0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFyIGZpdEludG8gPSBkdXJhdGlvbkluUXVhcnRlcnMgKiAyOyAvLyBkZWZhdWx0IHRvIHRyaXBsZXQ6XG5cbiAgICAgICAgICAgIHZhciB0aGlzTWFueU5vdGVzID0gTnVtYmVyKHR1cGxldCB8fCAnMycpO1xuICAgICAgICAgICAgZHVyYXRpb25JblF1YXJ0ZXJzID0gZml0SW50byAvIHRoaXNNYW55Tm90ZXM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGR1cmF0aW9uSW5RdWFydGVycztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZHVyYXRpb24gKyAnIGlzIG5vdCBhIHZhbGlkIGR1cmF0aW9uLicpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBVdGlscztcbn0oKTtcblxuLyoqXG4gKiBIb2xkcyBhbGwgZGF0YSBmb3IgYSBcIm5vdGUgb25cIiBNSURJIGV2ZW50XG4gKiBAcGFyYW0ge29iamVjdH0gZmllbGRzIHtkYXRhOiBbXX1cbiAqIEByZXR1cm4ge05vdGVPbkV2ZW50fVxuICovXG5cbnZhciBOb3RlT25FdmVudCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE5vdGVPbkV2ZW50KGZpZWxkcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb3RlT25FdmVudCk7XG5cbiAgICAvLyBTZXQgZGVmYXVsdCBmaWVsZHNcbiAgICBmaWVsZHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNoYW5uZWw6IDEsXG4gICAgICBzdGFydFRpY2s6IG51bGwsXG4gICAgICB2ZWxvY2l0eTogNTAsXG4gICAgICB3YWl0OiAwXG4gICAgfSwgZmllbGRzKTtcbiAgICB0aGlzLnR5cGUgPSAnbm90ZS1vbic7XG4gICAgdGhpcy5jaGFubmVsID0gZmllbGRzLmNoYW5uZWw7XG4gICAgdGhpcy5waXRjaCA9IGZpZWxkcy5waXRjaDtcbiAgICB0aGlzLndhaXQgPSBmaWVsZHMud2FpdDtcbiAgICB0aGlzLnZlbG9jaXR5ID0gZmllbGRzLnZlbG9jaXR5O1xuICAgIHRoaXMuc3RhcnRUaWNrID0gZmllbGRzLnN0YXJ0VGljaztcbiAgICB0aGlzLm1pZGlOdW1iZXIgPSBVdGlscy5nZXRQaXRjaCh0aGlzLnBpdGNoKTtcbiAgICB0aGlzLnRpY2sgPSBudWxsO1xuICAgIHRoaXMuZGVsdGEgPSBudWxsO1xuICAgIHRoaXMuZGF0YSA9IGZpZWxkcy5kYXRhO1xuICB9XG4gIC8qKlxuICAgKiBCdWlsZHMgaW50IGFycmF5IGZvciB0aGlzIGV2ZW50LlxuICAgKiBAcGFyYW0ge1RyYWNrfSB0cmFjayAtIHBhcmVudCB0cmFja1xuICAgKiBAcmV0dXJuIHtOb3RlT25FdmVudH1cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoTm90ZU9uRXZlbnQsIFt7XG4gICAga2V5OiBcImJ1aWxkRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBidWlsZERhdGEodHJhY2ssIHByZWNpc2lvbkRlbHRhKSB7XG4gICAgICB0aGlzLmRhdGEgPSBbXTsgLy8gRXhwbGljaXRseSBkZWZpbmVkIHN0YXJ0VGljayBldmVudFxuXG4gICAgICBpZiAodGhpcy5zdGFydFRpY2spIHtcbiAgICAgICAgdGhpcy50aWNrID0gVXRpbHMuZ2V0Um91bmRlZElmQ2xvc2UodGhpcy5zdGFydFRpY2spOyAvLyBJZiB0aGlzIGlzIHRoZSBmaXJzdCBldmVudCBpbiB0aGUgdHJhY2sgdGhlbiB1c2UgZXZlbnQncyBzdGFydGluZyB0aWNrIGFzIGRlbHRhLlxuXG4gICAgICAgIGlmICh0cmFjay50aWNrUG9pbnRlciA9PSAwKSB7XG4gICAgICAgICAgdGhpcy5kZWx0YSA9IHRoaXMudGljaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kZWx0YSA9IFV0aWxzLmdldFRpY2tEdXJhdGlvbih0aGlzLndhaXQpO1xuICAgICAgICB0aGlzLnRpY2sgPSBVdGlscy5nZXRSb3VuZGVkSWZDbG9zZSh0cmFjay50aWNrUG9pbnRlciArIHRoaXMuZGVsdGEpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRlbHRhV2l0aFByZWNpc2lvbkNvcnJlY3Rpb24gPSBVdGlscy5nZXRSb3VuZGVkSWZDbG9zZSh0aGlzLmRlbHRhIC0gcHJlY2lzaW9uRGVsdGEpO1xuICAgICAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0aGlzLmRlbHRhV2l0aFByZWNpc2lvbkNvcnJlY3Rpb24pLmNvbmNhdCh0aGlzLmdldFN0YXR1c0J5dGUoKSwgdGhpcy5taWRpTnVtYmVyLCBVdGlscy5jb252ZXJ0VmVsb2NpdHkodGhpcy52ZWxvY2l0eSkpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIG5vdGUgb24gc3RhdHVzIGNvZGUgYmFzZWQgb24gdGhlIHNlbGVjdGVkIGNoYW5uZWwuIDB4OXswLUZ9XG4gICAgICogTm90ZSBvbiBhdCBjaGFubmVsIDAgaXMgMHg5MCAoMTQ0KVxuICAgICAqIDAgPSBDaCAxXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U3RhdHVzQnl0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTdGF0dXNCeXRlKCkge1xuICAgICAgcmV0dXJuIDE0NCArIHRoaXMuY2hhbm5lbCAtIDE7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE5vdGVPbkV2ZW50O1xufSgpO1xuXG4vKipcbiAqIEhvbGRzIGFsbCBkYXRhIGZvciBhIFwibm90ZSBvZmZcIiBNSURJIGV2ZW50XG4gKiBAcGFyYW0ge29iamVjdH0gZmllbGRzIHtkYXRhOiBbXX1cbiAqIEByZXR1cm4ge05vdGVPZmZFdmVudH1cbiAqL1xuXG52YXIgTm90ZU9mZkV2ZW50ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTm90ZU9mZkV2ZW50KGZpZWxkcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb3RlT2ZmRXZlbnQpO1xuXG4gICAgLy8gU2V0IGRlZmF1bHQgZmllbGRzXG4gICAgZmllbGRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjaGFubmVsOiAxLFxuICAgICAgdmVsb2NpdHk6IDUwLFxuICAgICAgdGljazogbnVsbFxuICAgIH0sIGZpZWxkcyk7XG4gICAgdGhpcy50eXBlID0gJ25vdGUtb2ZmJztcbiAgICB0aGlzLmNoYW5uZWwgPSBmaWVsZHMuY2hhbm5lbDtcbiAgICB0aGlzLnBpdGNoID0gZmllbGRzLnBpdGNoO1xuICAgIHRoaXMuZHVyYXRpb24gPSBmaWVsZHMuZHVyYXRpb247XG4gICAgdGhpcy52ZWxvY2l0eSA9IGZpZWxkcy52ZWxvY2l0eTtcbiAgICB0aGlzLm1pZGlOdW1iZXIgPSBVdGlscy5nZXRQaXRjaCh0aGlzLnBpdGNoKTtcbiAgICB0aGlzLnRpY2sgPSBmaWVsZHMudGljaztcbiAgICB0aGlzLmRlbHRhID0gVXRpbHMuZ2V0VGlja0R1cmF0aW9uKHRoaXMuZHVyYXRpb24pO1xuICAgIHRoaXMuZGF0YSA9IGZpZWxkcy5kYXRhO1xuICB9XG4gIC8qKlxuICAgKiBCdWlsZHMgaW50IGFycmF5IGZvciB0aGlzIGV2ZW50LlxuICAgKiBAcGFyYW0ge1RyYWNrfSB0cmFjayAtIHBhcmVudCB0cmFja1xuICAgKiBAcmV0dXJuIHtOb3RlT2ZmRXZlbnR9XG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKE5vdGVPZmZFdmVudCwgW3tcbiAgICBrZXk6IFwiYnVpbGREYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJ1aWxkRGF0YSh0cmFjaywgcHJlY2lzaW9uRGVsdGEpIHtcbiAgICAgIGlmICh0aGlzLnRpY2sgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy50aWNrID0gVXRpbHMuZ2V0Um91bmRlZElmQ2xvc2UodGhpcy5kZWx0YSArIHRyYWNrLnRpY2tQb2ludGVyKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kZWx0YVdpdGhQcmVjaXNpb25Db3JyZWN0aW9uID0gVXRpbHMuZ2V0Um91bmRlZElmQ2xvc2UodGhpcy5kZWx0YSAtIHByZWNpc2lvbkRlbHRhKTtcbiAgICAgIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgodGhpcy5kZWx0YVdpdGhQcmVjaXNpb25Db3JyZWN0aW9uKS5jb25jYXQodGhpcy5nZXRTdGF0dXNCeXRlKCksIHRoaXMubWlkaU51bWJlciwgVXRpbHMuY29udmVydFZlbG9jaXR5KHRoaXMudmVsb2NpdHkpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBub3RlIG9mZiBzdGF0dXMgY29kZSBiYXNlZCBvbiB0aGUgc2VsZWN0ZWQgY2hhbm5lbC4gMHg4ezAtRn1cbiAgICAgKiBOb3RlIG9mZiBhdCBjaGFubmVsIDAgaXMgMHg4MCAoMTI4KVxuICAgICAqIDAgPSBDaCAxXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U3RhdHVzQnl0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTdGF0dXNCeXRlKCkge1xuICAgICAgcmV0dXJuIDEyOCArIHRoaXMuY2hhbm5lbCAtIDE7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE5vdGVPZmZFdmVudDtcbn0oKTtcblxuLyoqXG4gKiBXcmFwcGVyIGZvciBub3RlT25FdmVudC9ub3RlT2ZmRXZlbnQgb2JqZWN0cyB0aGF0IGJ1aWxkcyBib3RoIGV2ZW50cy5cbiAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZHMgLSB7cGl0Y2g6ICdbQzRdJywgZHVyYXRpb246ICc0Jywgd2FpdDogJzQnLCB2ZWxvY2l0eTogMS0xMDB9XG4gKiBAcmV0dXJuIHtOb3RlRXZlbnR9XG4gKi9cblxudmFyIE5vdGVFdmVudCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE5vdGVFdmVudChmaWVsZHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTm90ZUV2ZW50KTtcblxuICAgIC8vIFNldCBkZWZhdWx0IGZpZWxkc1xuICAgIGZpZWxkcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2hhbm5lbDogMSxcbiAgICAgIHJlcGVhdDogMSxcbiAgICAgIHNlcXVlbnRpYWw6IGZhbHNlLFxuICAgICAgc3RhcnRUaWNrOiBudWxsLFxuICAgICAgdmVsb2NpdHk6IDUwLFxuICAgICAgd2FpdDogMFxuICAgIH0sIGZpZWxkcyk7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgdGhpcy50eXBlID0gJ25vdGUnO1xuICAgIHRoaXMucGl0Y2ggPSBVdGlscy50b0FycmF5KGZpZWxkcy5waXRjaCk7XG4gICAgdGhpcy5jaGFubmVsID0gZmllbGRzLmNoYW5uZWw7XG4gICAgdGhpcy5kdXJhdGlvbiA9IGZpZWxkcy5kdXJhdGlvbjtcbiAgICB0aGlzLmdyYWNlID0gZmllbGRzLmdyYWNlO1xuICAgIHRoaXMucmVwZWF0ID0gZmllbGRzLnJlcGVhdDtcbiAgICB0aGlzLnNlcXVlbnRpYWwgPSBmaWVsZHMuc2VxdWVudGlhbDtcbiAgICB0aGlzLnN0YXJ0VGljayA9IGZpZWxkcy5zdGFydFRpY2s7XG4gICAgdGhpcy52ZWxvY2l0eSA9IGZpZWxkcy52ZWxvY2l0eTtcbiAgICB0aGlzLndhaXQgPSBmaWVsZHMud2FpdDtcbiAgICB0aGlzLnRpY2tEdXJhdGlvbiA9IFV0aWxzLmdldFRpY2tEdXJhdGlvbih0aGlzLmR1cmF0aW9uKTtcbiAgICB0aGlzLnJlc3REdXJhdGlvbiA9IFV0aWxzLmdldFRpY2tEdXJhdGlvbih0aGlzLndhaXQpO1xuICAgIHRoaXMuZXZlbnRzID0gW107IC8vIEhvbGQgYWN0dWFsIE5vdGVPbi9Ob3RlT2ZmIGV2ZW50c1xuICB9XG4gIC8qKlxuICAgKiBCdWlsZHMgaW50IGFycmF5IGZvciB0aGlzIGV2ZW50LlxuICAgKiBAcmV0dXJuIHtOb3RlRXZlbnR9XG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKE5vdGVFdmVudCwgW3tcbiAgICBrZXk6IFwiYnVpbGREYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJ1aWxkRGF0YSgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIC8vIFJlc2V0IGRhdGEgYXJyYXlcbiAgICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICAgdGhpcy50aWNrRHVyYXRpb247XG4gICAgICB0aGlzLnJlc3REdXJhdGlvbjsgLy8gQXBwbHkgZ3JhY2Ugbm90ZShzKSBhbmQgc3VidHJhY3QgdGlja3MgKGN1cnJlbnRseSAxIHRpY2sgcGVyIGdyYWNlIG5vdGUpIGZyb20gdGlja0R1cmF0aW9uIHNvIG5ldCB2YWx1ZSBpcyB0aGUgc2FtZVxuXG4gICAgICBpZiAodGhpcy5ncmFjZSkge1xuICAgICAgICB2YXIgZ3JhY2VEdXJhdGlvbiA9IDE7XG4gICAgICAgIHRoaXMuZ3JhY2UgPSBVdGlscy50b0FycmF5KHRoaXMuZ3JhY2UpO1xuICAgICAgICB0aGlzLmdyYWNlLmZvckVhY2goZnVuY3Rpb24gKHBpdGNoKSB7XG4gICAgICAgICAgdmFyIG5vdGVFdmVudCA9IG5ldyBOb3RlRXZlbnQoe1xuICAgICAgICAgICAgcGl0Y2g6IF90aGlzLmdyYWNlLFxuICAgICAgICAgICAgZHVyYXRpb246ICdUJyArIGdyYWNlRHVyYXRpb25cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBfdGhpcy5kYXRhID0gX3RoaXMuZGF0YS5jb25jYXQobm90ZUV2ZW50LmRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgIH0gLy8gZmllbGRzLnBpdGNoIGNvdWxkIGJlIGFuIGFycmF5IG9mIHBpdGNoZXMuXG4gICAgICAvLyBJZiB0aGlzLnNlcXVlbnRpYWwgPT09IHRydWUgdGhlbiBpdCdzIGEgc2VxdWVudGlhbCBzdHJpbmcgb2Ygbm90ZXMgdGhhdCByZXF1aXJlcyBzZXBhcmF0ZSBOb3RlT25FdmVudHMuXG5cbiAgICAgIGlmICghdGhpcy5zZXF1ZW50aWFsKSB7XG4gICAgICAgIC8vIEhhbmRsZSByZXBlYXRcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLnJlcGVhdDsgaisrKSB7XG4gICAgICAgICAgLy8gTm90ZSBvblxuICAgICAgICAgIHRoaXMucGl0Y2guZm9yRWFjaChmdW5jdGlvbiAocCwgaSkge1xuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICB2YXIgbm90ZU9uTmV3ID0gbmV3IE5vdGVPbkV2ZW50KHtcbiAgICAgICAgICAgICAgICBjaGFubmVsOiBfdGhpcy5jaGFubmVsLFxuICAgICAgICAgICAgICAgIHdhaXQ6IF90aGlzLndhaXQsXG4gICAgICAgICAgICAgICAgdmVsb2NpdHk6IF90aGlzLnZlbG9jaXR5LFxuICAgICAgICAgICAgICAgIHBpdGNoOiBwLFxuICAgICAgICAgICAgICAgIHN0YXJ0VGljazogX3RoaXMuc3RhcnRUaWNrXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gUnVubmluZyBzdGF0dXMgKGNhbiBvbW1pdCB0aGUgbm90ZSBvbiBzdGF0dXMpXG4gICAgICAgICAgICAgIC8vbm90ZU9uID0gbmV3IE5vdGVPbkV2ZW50KHtkYXRhOiBbMCwgVXRpbHMuZ2V0UGl0Y2gocCksIFV0aWxzLmNvbnZlcnRWZWxvY2l0eSh0aGlzLnZlbG9jaXR5KV19KTtcbiAgICAgICAgICAgICAgdmFyIG5vdGVPbk5ldyA9IG5ldyBOb3RlT25FdmVudCh7XG4gICAgICAgICAgICAgICAgY2hhbm5lbDogX3RoaXMuY2hhbm5lbCxcbiAgICAgICAgICAgICAgICB3YWl0OiAwLFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5OiBfdGhpcy52ZWxvY2l0eSxcbiAgICAgICAgICAgICAgICBwaXRjaDogcCxcbiAgICAgICAgICAgICAgICBzdGFydFRpY2s6IF90aGlzLnN0YXJ0VGlja1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX3RoaXMuZXZlbnRzLnB1c2gobm90ZU9uTmV3KTtcbiAgICAgICAgICB9KTsgLy8gTm90ZSBvZmZcblxuICAgICAgICAgIHRoaXMucGl0Y2guZm9yRWFjaChmdW5jdGlvbiAocCwgaSkge1xuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAvL25vdGVPZmYgPSBuZXcgTm90ZU9mZkV2ZW50KHtkYXRhOiBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRpY2tEdXJhdGlvbikuY29uY2F0KHRoaXMuZ2V0Tm90ZU9mZlN0YXR1cygpLCBVdGlscy5nZXRQaXRjaChwKSwgVXRpbHMuY29udmVydFZlbG9jaXR5KHRoaXMudmVsb2NpdHkpKX0pO1xuICAgICAgICAgICAgICB2YXIgbm90ZU9mZk5ldyA9IG5ldyBOb3RlT2ZmRXZlbnQoe1xuICAgICAgICAgICAgICAgIGNoYW5uZWw6IF90aGlzLmNoYW5uZWwsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IF90aGlzLmR1cmF0aW9uLFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5OiBfdGhpcy52ZWxvY2l0eSxcbiAgICAgICAgICAgICAgICBwaXRjaDogcCxcbiAgICAgICAgICAgICAgICB0aWNrOiBfdGhpcy5zdGFydFRpY2sgIT09IG51bGwgPyBVdGlscy5nZXRUaWNrRHVyYXRpb24oX3RoaXMuZHVyYXRpb24pICsgX3RoaXMuc3RhcnRUaWNrIDogbnVsbFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFJ1bm5pbmcgc3RhdHVzIChjYW4gb21taXQgdGhlIG5vdGUgb2ZmIHN0YXR1cylcbiAgICAgICAgICAgICAgLy9ub3RlT2ZmID0gbmV3IE5vdGVPZmZFdmVudCh7ZGF0YTogWzAsIFV0aWxzLmdldFBpdGNoKHApLCBVdGlscy5jb252ZXJ0VmVsb2NpdHkodGhpcy52ZWxvY2l0eSldfSk7XG4gICAgICAgICAgICAgIHZhciBub3RlT2ZmTmV3ID0gbmV3IE5vdGVPZmZFdmVudCh7XG4gICAgICAgICAgICAgICAgY2hhbm5lbDogX3RoaXMuY2hhbm5lbCxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eTogX3RoaXMudmVsb2NpdHksXG4gICAgICAgICAgICAgICAgcGl0Y2g6IHAsXG4gICAgICAgICAgICAgICAgdGljazogX3RoaXMuc3RhcnRUaWNrICE9PSBudWxsID8gVXRpbHMuZ2V0VGlja0R1cmF0aW9uKF90aGlzLmR1cmF0aW9uKSArIF90aGlzLnN0YXJ0VGljayA6IG51bGxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF90aGlzLmV2ZW50cy5wdXNoKG5vdGVPZmZOZXcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBIYW5kbGUgcmVwZWF0XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5yZXBlYXQ7IGorKykge1xuICAgICAgICAgIHRoaXMucGl0Y2guZm9yRWFjaChmdW5jdGlvbiAocCwgaSkge1xuXG4gICAgICAgICAgICB2YXIgbm90ZU9uTmV3ID0gbmV3IE5vdGVPbkV2ZW50KHtcbiAgICAgICAgICAgICAgY2hhbm5lbDogX3RoaXMuY2hhbm5lbCxcbiAgICAgICAgICAgICAgd2FpdDogaSA+IDAgPyAwIDogX3RoaXMud2FpdCxcbiAgICAgICAgICAgICAgLy8gd2FpdCBvbmx5IGFwcGxpZXMgdG8gZmlyc3Qgbm90ZSBpbiByZXBldGl0aW9uXG4gICAgICAgICAgICAgIHZlbG9jaXR5OiBfdGhpcy52ZWxvY2l0eSxcbiAgICAgICAgICAgICAgcGl0Y2g6IHAsXG4gICAgICAgICAgICAgIHN0YXJ0VGljazogX3RoaXMuc3RhcnRUaWNrXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBub3RlT2ZmTmV3ID0gbmV3IE5vdGVPZmZFdmVudCh7XG4gICAgICAgICAgICAgIGNoYW5uZWw6IF90aGlzLmNoYW5uZWwsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiBfdGhpcy5kdXJhdGlvbixcbiAgICAgICAgICAgICAgdmVsb2NpdHk6IF90aGlzLnZlbG9jaXR5LFxuICAgICAgICAgICAgICBwaXRjaDogcFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIF90aGlzLmV2ZW50cy5wdXNoKG5vdGVPbk5ldywgbm90ZU9mZk5ldyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE5vdGVFdmVudDtcbn0oKTtcblxuLyoqXG4gKiBIb2xkcyBhbGwgZGF0YSBmb3IgYSBcIlBpdGNoIEJlbmRcIiBNSURJIGV2ZW50XG4gKiBbIC0xLjAsIDAsIDEuMCBdIC0+ICBbIDAsIDgxOTIsIDE2MzgzXVxuICogQHBhcmFtIHtvYmplY3R9IGZpZWxkcyB7IGJlbmQgOiBmbG9hdCwgY2hhbm5lbCA6IGludCB9XG4gKiBAcmV0dXJuIHtQaXRjaEJlbmRFdmVudH1cbiAqL1xuXG52YXIgc2NhbGUxNGJpdHMgPSBmdW5jdGlvbiBzY2FsZTE0Yml0cyh6ZXJvT25lKSB7XG4gIGlmICh6ZXJvT25lIDw9IDApIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcigxNjM4NCAqICh6ZXJvT25lICsgMSkgLyAyKTtcbiAgfVxuXG4gIHJldHVybiBNYXRoLmZsb29yKDE2MzgzICogKHplcm9PbmUgKyAxKSAvIDIpO1xufTtcblxudmFyIFBpdGNoQmVuZEV2ZW50ID0gZnVuY3Rpb24gUGl0Y2hCZW5kRXZlbnQoZmllbGRzKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQaXRjaEJlbmRFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ3BpdGNoLWJlbmQnO1xuICB2YXIgYmVuZDE0ID0gc2NhbGUxNGJpdHMoZmllbGRzLmJlbmQpO1xuICB2YXIgY2hhbm5lbCA9IGZpZWxkcy5jaGFubmVsIHx8IDA7XG4gIHZhciBsc2JWYWx1ZSA9IGJlbmQxNCAmIDB4N2Y7XG4gIHZhciBtc2JWYWx1ZSA9IGJlbmQxNCA+PiA3ICYgMHg3ZjtcbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLlBJVENIX0JFTkRfU1RBVFVTIHwgY2hhbm5lbCwgbHNiVmFsdWUsIG1zYlZhbHVlKTtcbn07XG5cbi8qKlxuICogSG9sZHMgYWxsIGRhdGEgZm9yIGEgXCJwcm9ncmFtIGNoYW5nZVwiIE1JREkgZXZlbnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZHMge2luc3RydW1lbnQ6IGludGVnZXJ9XG4gKiBAcmV0dXJuIHtQcm9ncmFtQ2hhbmdlRXZlbnR9XG4gKi9cblxudmFyIFByb2dyYW1DaGFuZ2VFdmVudCA9IGZ1bmN0aW9uIFByb2dyYW1DaGFuZ2VFdmVudChmaWVsZHMpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFByb2dyYW1DaGFuZ2VFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ3Byb2dyYW0nOyAvLyBkZWx0YSB0aW1lIGRlZmF1bHRzIHRvIDAuXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLlBST0dSQU1fQ0hBTkdFX1NUQVRVUywgZmllbGRzLmluc3RydW1lbnQpO1xufTtcblxuLyoqXG4gKiBIb2xkcyBhbGwgZGF0YSBmb3IgYSBcImNvbnRyb2xsZXIgY2hhbmdlXCIgTUlESSBldmVudFxuICogQHBhcmFtIHtvYmplY3R9IGZpZWxkcyB7Y29udHJvbGxlck51bWJlcjogaW50ZWdlciwgY29udHJvbGxlclZhbHVlOiBpbnRlZ2VyfVxuICogQHJldHVybiB7Q29udHJvbGxlckNoYW5nZUV2ZW50fVxuICovXG5cbnZhciBDb250cm9sbGVyQ2hhbmdlRXZlbnQgPSBmdW5jdGlvbiBDb250cm9sbGVyQ2hhbmdlRXZlbnQoZmllbGRzKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb250cm9sbGVyQ2hhbmdlRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdjb250cm9sbGVyJzsgLy8gZGVsdGEgdGltZSBkZWZhdWx0cyB0byAwLlxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5DT05UUk9MTEVSX0NIQU5HRV9TVEFUVVMsIGZpZWxkcy5jb250cm9sbGVyTnVtYmVyLCBmaWVsZHMuY29udHJvbGxlclZhbHVlKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgdGVtcG8gbWV0YSBldmVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gQ29weXJpZ2h0IHRleHRcbiAqIEByZXR1cm4ge0NvcHlyaWdodEV2ZW50fVxuICovXG5cbnZhciBDb3B5cmlnaHRFdmVudCA9IGZ1bmN0aW9uIENvcHlyaWdodEV2ZW50KHRleHQpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvcHlyaWdodEV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAnY29weXJpZ2h0JztcbiAgdmFyIHRleHRCeXRlcyA9IFV0aWxzLnN0cmluZ1RvQnl0ZXModGV4dCk7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX0NPUFlSSUdIVF9JRCwgVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0ZXh0Qnl0ZXMubGVuZ3RoKSwgLy8gU2l6ZVxuICB0ZXh0Qnl0ZXMgLy8gVGV4dFxuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSBjdWUgcG9pbnQgbWV0YSBldmVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gQ3VlIHBvaW50IHRleHRcbiAqIEByZXR1cm4ge0N1ZVBvaW50RXZlbnR9XG4gKi9cblxudmFyIEN1ZVBvaW50RXZlbnQgPSBmdW5jdGlvbiBDdWVQb2ludEV2ZW50KHRleHQpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEN1ZVBvaW50RXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdtYXJrZXInO1xuICB2YXIgdGV4dEJ5dGVzID0gVXRpbHMuc3RyaW5nVG9CeXRlcyh0ZXh0KTsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfQ1VFX1BPSU5ULCBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRleHRCeXRlcy5sZW5ndGgpLCAvLyBTaXplXG4gIHRleHRCeXRlcyAvLyBUZXh0XG4gICk7XG59O1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIGVuZCB0cmFjayBtZXRhIGV2ZW50LlxuICogQHJldHVybiB7RW5kVHJhY2tFdmVudH1cbiAqL1xuXG52YXIgRW5kVHJhY2tFdmVudCA9IGZ1bmN0aW9uIEVuZFRyYWNrRXZlbnQoKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFbmRUcmFja0V2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAnZW5kLXRyYWNrJzsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfRU5EX09GX1RSQUNLX0lEKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGFuIGluc3RydW1lbnQgbmFtZSBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IGJwbSAtIEJlYXRzIHBlciBtaW51dGVcbiAqIEByZXR1cm4ge0luc3RydW1lbnROYW1lRXZlbnR9XG4gKi9cblxudmFyIEluc3RydW1lbnROYW1lRXZlbnQgPSBmdW5jdGlvbiBJbnN0cnVtZW50TmFtZUV2ZW50KHRleHQpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluc3RydW1lbnROYW1lRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdpbnN0cnVtZW50LW5hbWUnO1xuICB2YXIgdGV4dEJ5dGVzID0gVXRpbHMuc3RyaW5nVG9CeXRlcyh0ZXh0KTsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfSU5TVFJVTUVOVF9OQU1FX0lELCBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRleHRCeXRlcy5sZW5ndGgpLCAvLyBTaXplXG4gIHRleHRCeXRlcyAvLyBJbnN0cnVtZW50IG5hbWVcbiAgKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEga2V5IHNpZ25hdHVyZSBtZXRhIGV2ZW50LlxuICogQHJldHVybiB7S2V5U2lnbmF0dXJlRXZlbnR9XG4gKi9cblxudmFyIEtleVNpZ25hdHVyZUV2ZW50ID0gZnVuY3Rpb24gS2V5U2lnbmF0dXJlRXZlbnQoc2YsIG1pKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBLZXlTaWduYXR1cmVFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ2tleS1zaWduYXR1cmUnO1xuICB2YXIgbW9kZSA9IG1pIHx8IDA7XG4gIHNmID0gc2YgfHwgMDsgLy9cdEZ1bmN0aW9uIGNhbGxlZCB3aXRoIHN0cmluZyBub3RhdGlvblxuXG4gIGlmICh0eXBlb2YgbWkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIGZpZnRocyA9IFtbJ0NiJywgJ0diJywgJ0RiJywgJ0FiJywgJ0ViJywgJ0JiJywgJ0YnLCAnQycsICdHJywgJ0QnLCAnQScsICdFJywgJ0InLCAnRiMnLCAnQyMnXSwgWydhYicsICdlYicsICdiYicsICdmJywgJ2MnLCAnZycsICdkJywgJ2EnLCAnZScsICdiJywgJ2YjJywgJ2MjJywgJ2cjJywgJ2QjJywgJ2EjJ11dO1xuICAgIHZhciBfc2ZsZW4gPSBzZi5sZW5ndGg7XG4gICAgdmFyIG5vdGUgPSBzZiB8fCAnQyc7XG4gICAgaWYgKHNmWzBdID09PSBzZlswXS50b0xvd2VyQ2FzZSgpKSBtb2RlID0gMTtcblxuICAgIGlmIChfc2ZsZW4gPiAxKSB7XG4gICAgICBzd2l0Y2ggKHNmLmNoYXJBdChfc2ZsZW4gLSAxKSkge1xuICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICBtb2RlID0gMTtcbiAgICAgICAgICBub3RlID0gc2YuY2hhckF0KDApLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgbm90ZSA9IG5vdGUuY29uY2F0KHNmLnN1YnN0cmluZygxLCBfc2ZsZW4gLSAxKSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgbW9kZSA9IDE7XG4gICAgICAgICAgbm90ZSA9IHNmLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIG5vdGUgPSBub3RlLmNvbmNhdChzZi5zdWJzdHJpbmcoMSwgX3NmbGVuIC0gMSkpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ00nOlxuICAgICAgICAgIG1vZGUgPSAwO1xuICAgICAgICAgIG5vdGUgPSBzZi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICBub3RlID0gbm90ZS5jb25jYXQoc2Yuc3Vic3RyaW5nKDEsIF9zZmxlbiAtIDEpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICBtb2RlID0gMDtcbiAgICAgICAgICBub3RlID0gc2YuY2hhckF0KDApLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgbm90ZSA9IG5vdGUuY29uY2F0KHNmLnN1YnN0cmluZygxLCBfc2ZsZW4gLSAxKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGZpZnRoaW5kZXggPSBmaWZ0aHNbbW9kZV0uaW5kZXhPZihub3RlKTtcbiAgICBzZiA9IGZpZnRoaW5kZXggPT09IC0xID8gMCA6IGZpZnRoaW5kZXggLSA3O1xuICB9IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfS0VZX1NJR05BVFVSRV9JRCwgWzB4MDJdLCAvLyBTaXplXG4gIFV0aWxzLm51bWJlclRvQnl0ZXMoc2YsIDEpLCAvLyBOdW1iZXIgb2Ygc2hhcnAgb3IgZmxhdHMgKCA8IDAgZmxhdDsgPiAwIHNoYXJwKVxuICBVdGlscy5udW1iZXJUb0J5dGVzKG1vZGUsIDEpIC8vIE1vZGU6IDAgbWFqb3IsIDEgbWlub3JcbiAgKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgbHlyaWMgbWV0YSBldmVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gTHlyaWMgdGV4dFxuICogQHJldHVybiB7THlyaWNFdmVudH1cbiAqL1xuXG52YXIgTHlyaWNFdmVudCA9IGZ1bmN0aW9uIEx5cmljRXZlbnQodGV4dCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTHlyaWNFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ21hcmtlcic7XG4gIHZhciB0ZXh0Qnl0ZXMgPSBVdGlscy5zdHJpbmdUb0J5dGVzKHRleHQpOyAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9MWVJJQ19JRCwgVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0ZXh0Qnl0ZXMubGVuZ3RoKSwgLy8gU2l6ZVxuICB0ZXh0Qnl0ZXMgLy8gVGV4dFxuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSBtYXJrZXIgbWV0YSBldmVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gTWFya2VyIHRleHRcbiAqIEByZXR1cm4ge01hcmtlckV2ZW50fVxuICovXG5cbnZhciBNYXJrZXJFdmVudCA9IGZ1bmN0aW9uIE1hcmtlckV2ZW50KHRleHQpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hcmtlckV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAnbWFya2VyJztcbiAgdmFyIHRleHRCeXRlcyA9IFV0aWxzLnN0cmluZ1RvQnl0ZXModGV4dCk7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX01BUktFUl9JRCwgVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0ZXh0Qnl0ZXMubGVuZ3RoKSwgLy8gU2l6ZVxuICB0ZXh0Qnl0ZXMgLy8gVGV4dFxuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSB0ZW1wbyBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IGJwbSAtIEJlYXRzIHBlciBtaW51dGVcbiAqIEByZXR1cm4ge1RlbXBvRXZlbnR9XG4gKi9cblxudmFyIFRlbXBvRXZlbnQgPSBmdW5jdGlvbiBUZW1wb0V2ZW50KGJwbSkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGVtcG9FdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ3RlbXBvJztcbiAgdmFyIHRlbXBvID0gTWF0aC5yb3VuZCg2MDAwMDAwMCAvIGJwbSk7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX1RFTVBPX0lELCBbMHgwM10sIC8vIFNpemVcbiAgVXRpbHMubnVtYmVyVG9CeXRlcyh0ZW1wbywgMykgLy8gVGVtcG8sIDMgYnl0ZXNcbiAgKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgdGVtcG8gbWV0YSBldmVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBicG0gLSBCZWF0cyBwZXIgbWludXRlXG4gKiBAcmV0dXJuIHtUZXh0RXZlbnR9XG4gKi9cblxudmFyIFRleHRFdmVudCA9IGZ1bmN0aW9uIFRleHRFdmVudCh0ZXh0KSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUZXh0RXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICd0ZXh0JztcbiAgdmFyIHRleHRCeXRlcyA9IFV0aWxzLnN0cmluZ1RvQnl0ZXModGV4dCk7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX1RFWFRfSUQsIFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgodGV4dEJ5dGVzLmxlbmd0aCksIC8vIFNpemVcbiAgdGV4dEJ5dGVzIC8vIFRleHRcbiAgKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgdGltZSBzaWduYXR1cmUgbWV0YSBldmVudC5cbiAqIEByZXR1cm4ge1RpbWVTaWduYXR1cmVFdmVudH1cbiAqL1xuXG52YXIgVGltZVNpZ25hdHVyZUV2ZW50ID0gZnVuY3Rpb24gVGltZVNpZ25hdHVyZUV2ZW50KG51bWVyYXRvciwgZGVub21pbmF0b3IsIG1pZGljbG9ja3NwZXJ0aWNrLCBub3Rlc3Blcm1pZGljbG9jaykge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGltZVNpZ25hdHVyZUV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAndGltZS1zaWduYXR1cmUnOyAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9USU1FX1NJR05BVFVSRV9JRCwgWzB4MDRdLCAvLyBTaXplXG4gIFV0aWxzLm51bWJlclRvQnl0ZXMobnVtZXJhdG9yLCAxKSwgLy8gTnVtZXJhdG9yLCAxIGJ5dGVzXG4gIFV0aWxzLm51bWJlclRvQnl0ZXMoTWF0aC5sb2cyKGRlbm9taW5hdG9yKSwgMSksIC8vIERlbm9taW5hdG9yIGlzIGV4cHJlc3NlZCBhcyBwb3cgb2YgMiwgMSBieXRlc1xuICBVdGlscy5udW1iZXJUb0J5dGVzKG1pZGljbG9ja3NwZXJ0aWNrIHx8IDI0LCAxKSwgLy8gTUlESSBDbG9ja3MgcGVyIHRpY2ssIDEgYnl0ZXNcbiAgVXRpbHMubnVtYmVyVG9CeXRlcyhub3Rlc3Blcm1pZGljbG9jayB8fCA4LCAxKSAvLyBOdW1iZXIgb2YgMS8zMiBub3RlcyBwZXIgTUlESSBjbG9ja3MsIDEgYnl0ZXNcbiAgKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgdGVtcG8gbWV0YSBldmVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBicG0gLSBCZWF0cyBwZXIgbWludXRlXG4gKiBAcmV0dXJuIHtUcmFja05hbWVFdmVudH1cbiAqL1xuXG52YXIgVHJhY2tOYW1lRXZlbnQgPSBmdW5jdGlvbiBUcmFja05hbWVFdmVudCh0ZXh0KSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmFja05hbWVFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ3RyYWNrLW5hbWUnO1xuICB2YXIgdGV4dEJ5dGVzID0gVXRpbHMuc3RyaW5nVG9CeXRlcyh0ZXh0KTsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfVFJBQ0tfTkFNRV9JRCwgVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0ZXh0Qnl0ZXMubGVuZ3RoKSwgLy8gU2l6ZVxuICB0ZXh0Qnl0ZXMgLy8gVGV4dFxuICApO1xufTtcblxuLyoqXG4gKiBIb2xkcyBhbGwgZGF0YSBmb3IgYSB0cmFjay5cbiAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZHMge3R5cGU6IG51bWJlciwgZGF0YTogYXJyYXksIHNpemU6IGFycmF5LCBldmVudHM6IGFycmF5fVxuICogQHJldHVybiB7VHJhY2t9XG4gKi9cblxudmFyIFRyYWNrID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVHJhY2soKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRyYWNrKTtcblxuICAgIHRoaXMudHlwZSA9IENvbnN0YW50cy5UUkFDS19DSFVOS19UWVBFO1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIHRoaXMuc2l6ZSA9IFtdO1xuICAgIHRoaXMuZXZlbnRzID0gW107XG4gICAgdGhpcy5leHBsaWNpdFRpY2tFdmVudHMgPSBbXTsgLy8gSWYgdGhlcmUgYXJlIGFueSBldmVudHMgd2l0aCBhbiBleHBsaWNpdCB0aWNrIGRlZmluZWQgdGhlbiB3ZSB3aWxsIGNyZWF0ZSBhIFwic3ViXCIgdHJhY2sgZm9yIHRob3NlXG4gICAgLy8gYW5kIG1lcmdlIHRoZW0gaW4gYW5kIHRoZSBlbmQuXG5cbiAgICB0aGlzLnRpY2tQb2ludGVyID0gMDsgLy8gRWFjaCB0aW1lIGFuIGV2ZW50IGlzIGFkZGVkIHRoaXMgd2lsbCBpbmNyZWFzZVxuICB9XG4gIC8qKlxuICAgKiBBZGRzIGFueSBldmVudCB0eXBlIHRvIHRoZSB0cmFjay5cbiAgICogRXZlbnRzIHdpdGhvdXQgYSBzcGVjaWZpYyBzdGFydFRpY2sgcHJvcGVydHkgYXJlIGFzc3VtZWQgdG8gYmUgYWRkZWQgaW4gb3JkZXIgb2YgaG93IHRoZXkgc2hvdWxkIG91dHB1dC5cbiAgICogRXZlbnRzIHdpdGggYSBzcGVjaWZpYyBzdGFydFRpY2sgcHJvcGVydHkgYXJlIHNldCBhc2lkZSBmb3Igbm93IHdpbGwgYmUgbWVyZ2VkIGluIGR1cmluZyBidWlsZCBwcm9jZXNzLlxuICAgKiBAcGFyYW0geyhOb3RlRXZlbnR8UHJvZ3JhbUNoYW5nZUV2ZW50KX0gZXZlbnRzIC0gRXZlbnQgb2JqZWN0IG9yIGFycmF5IG9mIEV2ZW50IG9iamVjdHMuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IG1hcEZ1bmN0aW9uIC0gQ2FsbGJhY2sgd2hpY2ggY2FuIGJlIHVzZWQgdG8gYXBwbHkgc3BlY2lmaWMgcHJvcGVydGllcyB0byBhbGwgZXZlbnRzLlxuICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoVHJhY2ssIFt7XG4gICAga2V5OiBcImFkZEV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEV2ZW50KGV2ZW50cywgbWFwRnVuY3Rpb24pIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIFV0aWxzLnRvQXJyYXkoZXZlbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCwgaSkge1xuICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOb3RlRXZlbnQpIHtcbiAgICAgICAgICAvLyBIYW5kbGUgbWFwIGZ1bmN0aW9uIGlmIHByb3ZpZGVkXG4gICAgICAgICAgaWYgKHR5cGVvZiBtYXBGdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIHByb3BlcnRpZXMgPSBtYXBGdW5jdGlvbihpLCBldmVudCk7XG5cbiAgICAgICAgICAgIGlmIChfdHlwZW9mKHByb3BlcnRpZXMpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICBmb3IgKHZhciBqIGluIHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGopIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgJ2NoYW5uZWwnOlxuICAgICAgICAgICAgICAgICAgICBldmVudC5jaGFubmVsID0gcHJvcGVydGllc1tqXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgJ2R1cmF0aW9uJzpcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZHVyYXRpb24gPSBwcm9wZXJ0aWVzW2pdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgY2FzZSAnc2VxdWVudGlhbCc6XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnNlcXVlbnRpYWwgPSBwcm9wZXJ0aWVzW2pdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgY2FzZSAndmVsb2NpdHknOlxuICAgICAgICAgICAgICAgICAgICBldmVudC52ZWxvY2l0eSA9IFV0aWxzLmNvbnZlcnRWZWxvY2l0eShwcm9wZXJ0aWVzW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAvLyBJZiB0aGlzIG5vdGUgZXZlbnQgaGFzIGFuIGV4cGxpY2l0IHN0YXJ0VGljayB0aGVuIHdlIG5lZWQgdG8gc2V0IGFzaWRlIGZvciBub3dcblxuXG4gICAgICAgICAgaWYgKGV2ZW50LnN0YXJ0VGljayAhPT0gbnVsbCkge1xuICAgICAgICAgICAgX3RoaXMuZXhwbGljaXRUaWNrRXZlbnRzLnB1c2goZXZlbnQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBQdXNoIGVhY2ggb24vb2ZmIGV2ZW50IHRvIHRyYWNrJ3MgZXZlbnQgc3RhY2tcbiAgICAgICAgICAgIGV2ZW50LmJ1aWxkRGF0YSgpLmV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpcy5ldmVudHMucHVzaChlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpcy5ldmVudHMucHVzaChldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJ1aWxkcyBpbnQgYXJyYXkgb2YgYWxsIGV2ZW50cy5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImJ1aWxkRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBidWlsZERhdGEoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgLy8gUmVtb3ZlIGV4aXN0aW5nIGVuZCB0cmFjayBldmVudCBhbmQgYWRkIG9uZS5cbiAgICAgIC8vIFRoaXMgbWFrZXMgc3VyZSBpdCdzIGF0IHRoZSB2ZXJ5IGVuZCBvZiB0aGUgZXZlbnQgbGlzdC5cbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRzQnlUeXBlKCdlbmQtdHJhY2snKS5hZGRFdmVudChuZXcgRW5kVHJhY2tFdmVudCgpKTsgLy8gUmVzZXRcblxuICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgICB0aGlzLnNpemUgPSBbXTtcbiAgICAgIHRoaXMudGlja1BvaW50ZXIgPSAwO1xuICAgICAgdmFyIHByZWNpc2lvbkxvc3MgPSAwO1xuICAgICAgdGhpcy5ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQsIGV2ZW50SW5kZXgpIHtcbiAgICAgICAgLy8gQnVpbGQgZXZlbnQgJiBhZGQgdG8gdG90YWwgdGljayBkdXJhdGlvblxuICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOb3RlT25FdmVudCB8fCBldmVudCBpbnN0YW5jZW9mIE5vdGVPZmZFdmVudCkge1xuICAgICAgICAgIHZhciBidWlsdCA9IGV2ZW50LmJ1aWxkRGF0YShfdGhpczIsIHByZWNpc2lvbkxvc3MpO1xuICAgICAgICAgIHByZWNpc2lvbkxvc3MgPSBVdGlscy5nZXRQcmVjaXNpb25Mb3NzKGV2ZW50LmRlbHRhV2l0aFByZWNpc2lvbkNvcnJlY3Rpb24gfHwgMCk7XG4gICAgICAgICAgX3RoaXMyLmRhdGEgPSBfdGhpczIuZGF0YS5jb25jYXQoYnVpbHQuZGF0YSk7XG4gICAgICAgICAgX3RoaXMyLnRpY2tQb2ludGVyID0gVXRpbHMuZ2V0Um91bmRlZElmQ2xvc2UoZXZlbnQudGljayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMyLmRhdGEgPSBfdGhpczIuZGF0YS5jb25jYXQoZXZlbnQuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5tZXJnZUV4cGxpY2l0VGlja0V2ZW50cygpO1xuICAgICAgdGhpcy5zaXplID0gVXRpbHMubnVtYmVyVG9CeXRlcyh0aGlzLmRhdGEubGVuZ3RoLCA0KTsgLy8gNCBieXRlcyBsb25nXG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJtZXJnZUV4cGxpY2l0VGlja0V2ZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtZXJnZUV4cGxpY2l0VGlja0V2ZW50cygpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICBpZiAoIXRoaXMuZXhwbGljaXRUaWNrRXZlbnRzLmxlbmd0aCkgcmV0dXJuOyAvLyBGaXJzdCBzb3J0IGFzYyBsaXN0IG9mIGV2ZW50cyBieSBzdGFydFRpY2tcblxuICAgICAgdGhpcy5leHBsaWNpdFRpY2tFdmVudHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYS5zdGFydFRpY2sgLSBiLnN0YXJ0VGljaztcbiAgICAgIH0pOyAvLyBOb3cgdGhpcy5leHBsaWNpdFRpY2tFdmVudHMgaXMgaW4gY29ycmVjdCBvcmRlciwgYW5kIHNvIGlzIHRoaXMuZXZlbnRzIG5hdHVyYWxseS5cbiAgICAgIC8vIEZvciBlYWNoIGV4cGxpY2l0IHRpY2sgZXZlbnQsIHNwbGljZSBpdCBpbnRvIHRoZSBtYWluIGxpc3Qgb2YgZXZlbnRzIGFuZFxuICAgICAgLy8gYWRqdXN0IHRoZSBkZWx0YSBvbiB0aGUgZm9sbG93aW5nIGV2ZW50cyBzbyB0aGV5IHN0aWxsIHBsYXkgbm9ybWFsbHkuXG5cbiAgICAgIHRoaXMuZXhwbGljaXRUaWNrRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKG5vdGVFdmVudCkge1xuICAgICAgICAvLyBDb252ZXJ0IE5vdGVFdmVudCB0byBpdCdzIHJlc3BlY3RpdmUgTm90ZU9uL05vdGVPZmYgZXZlbnRzXG4gICAgICAgIC8vIE5vdGUgdGhhdCBhcyB3ZSBzcGxpY2UgaW4gZXZlbnRzIHRoZSBkZWx0YSBmb3IgdGhlIE5vdGVPZmYgb25lcyB3aWxsXG4gICAgICAgIC8vIE5lZWQgdG8gY2hhbmdlIGJhc2VkIG9uIHdoYXQgY29tZXMgYmVmb3JlIHRoZW0gYWZ0ZXIgdGhlIHNwbGljZS5cbiAgICAgICAgbm90ZUV2ZW50LmJ1aWxkRGF0YSgpLmV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGUuYnVpbGREYXRhKF90aGlzMyk7XG4gICAgICAgIH0pOyAvLyBNZXJnZSBlYWNoIGV2ZW50IGluZGl2dWFsbHkgaW50byB0aGlzIHRyYWNrJ3MgZXZlbnQgbGlzdC5cblxuICAgICAgICBub3RlRXZlbnQuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMy5tZXJnZVNpbmdsZUV2ZW50KGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTsgLy8gSGFja3kgd2F5IHRvIHJlYnVpbGQgdHJhY2sgd2l0aCBuZXdseSBzcGxpY2VkIGV2ZW50cy4gIE5lZWQgYmV0dGVyIHNvbHV0aW9uLlxuXG4gICAgICB0aGlzLmV4cGxpY2l0VGlja0V2ZW50cyA9IFtdO1xuICAgICAgdGhpcy5idWlsZERhdGEoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTWVyZ2VzIGFub3RoZXIgdHJhY2sncyBldmVudHMgd2l0aCB0aGlzIHRyYWNrLlxuICAgICAqIEBwYXJhbSB7VHJhY2t9IHRyYWNrXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJtZXJnZVRyYWNrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1lcmdlVHJhY2sodHJhY2spIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICAvLyBGaXJzdCBidWlsZCB0aGlzIHRyYWNrIHRvIHBvcHVsYXRlIGVhY2ggZXZlbnQncyB0aWNrIHByb3BlcnR5XG4gICAgICB0aGlzLmJ1aWxkRGF0YSgpOyAvLyBUaGVuIGJ1aWxkIHRyYWNrIHRvIGJlIG1lcmdlZCBzbyB0aGF0IHRpY2sgcHJvcGVydHkgaXMgcG9wdWxhdGVkIG9uIGFsbCBldmVudHMgJiBtZXJnZSBlYWNoIGV2ZW50LlxuXG4gICAgICB0cmFjay5idWlsZERhdGEoKS5ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzNC5tZXJnZVNpbmdsZUV2ZW50KGV2ZW50KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNZXJnZXMgYSBzaW5nbGUgZXZlbnQgaW50byB0aGlzIHRyYWNrJ3MgbGlzdCBvZiBldmVudHMgYmFzZWQgb24gZXZlbnQudGljayBwcm9wZXJ0eS5cbiAgICAgKiBAcGFyYW0ge05vdGVPbkV2ZW50fE5vdGVPZmZFdmVudH0gLSBldmVudFxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibWVyZ2VTaW5nbGVFdmVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtZXJnZVNpbmdsZUV2ZW50KGV2ZW50KSB7XG4gICAgICAvLyBGaW5kIGluZGV4IG9mIGV4aXN0aW5nIGV2ZW50IHdlIG5lZWQgdG8gZm9sbG93IHdpdGhcbiAgICAgIHZhciBsYXN0RXZlbnRJbmRleCA9IDA7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2ldLnRpY2sgPiBldmVudC50aWNrKSBicmVhaztcbiAgICAgICAgbGFzdEV2ZW50SW5kZXggPSBpO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3BsaWNlZEV2ZW50SW5kZXggPSBsYXN0RXZlbnRJbmRleCArIDE7IC8vIE5lZWQgdG8gYWRqdXN0IHRoZSBkZWx0YSBvZiB0aGlzIGV2ZW50IHRvIGVuc3VyZSBpdCBmYWxscyBvbiB0aGUgY29ycmVjdCB0aWNrLlxuXG4gICAgICBldmVudC5kZWx0YSA9IGV2ZW50LnRpY2sgLSB0aGlzLmV2ZW50c1tsYXN0RXZlbnRJbmRleF0udGljazsgLy8gU3BsaWNlIHRoaXMgZXZlbnQgYXQgbGFzdEV2ZW50SW5kZXggKyAxXG5cbiAgICAgIHRoaXMuZXZlbnRzLnNwbGljZShzcGxpY2VkRXZlbnRJbmRleCwgMCwgZXZlbnQpOyAvLyBOb3cgYWRqdXN0IGRlbHRhIG9mIGFsbCBmb2xsb3dpbmcgZXZlbnRzXG5cbiAgICAgIGZvciAodmFyIGkgPSBzcGxpY2VkRXZlbnRJbmRleCArIDE7IGkgPCB0aGlzLmV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBTaW5jZSBlYWNoIGV4aXN0aW5nIGV2ZW50IHNob3VsZCBoYXZlIGEgdGljayB2YWx1ZSBhdCB0aGlzIHBvaW50IHdlIGp1c3QgbmVlZCB0b1xuICAgICAgICAvLyBhZGp1c3QgZGVsdGEgdG8gdGhhdCB0aGUgZXZlbnQgc3RpbGwgZmFsbHMgb24gdGhlIGNvcnJlY3QgdGljay5cbiAgICAgICAgdGhpcy5ldmVudHNbaV0uZGVsdGEgPSB0aGlzLmV2ZW50c1tpXS50aWNrIC0gdGhpcy5ldmVudHNbaSAtIDFdLnRpY2s7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIGV2ZW50cyBtYXRjaGluZyBzcGVjaWZpZWQgdHlwZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlIC0gRXZlbnQgdHlwZVxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlRXZlbnRzQnlUeXBlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUV2ZW50c0J5VHlwZShldmVudFR5cGUpIHtcbiAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICB0aGlzLmV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCwgaW5kZXgpIHtcbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IGV2ZW50VHlwZSkge1xuICAgICAgICAgIF90aGlzNS5ldmVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0ZW1wbyBvZiB0aGUgTUlESSBmaWxlLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBicG0gLSBUZW1wbyBpbiBiZWF0cyBwZXIgbWludXRlLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2V0VGVtcG9cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VGVtcG8oYnBtKSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgVGVtcG9FdmVudChicG0pKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aW1lIHNpZ25hdHVyZS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbnVtZXJhdG9yIC0gVG9wIG51bWJlciBvZiB0aGUgdGltZSBzaWduYXR1cmUuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRlbm9taW5hdG9yIC0gQm90dG9tIG51bWJlciBvZiB0aGUgdGltZSBzaWduYXR1cmUuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pZGljbG9ja3NwZXJ0aWNrIC0gRGVmYXVsdHMgdG8gMjQuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5vdGVzcGVybWlkaWNsb2NrIC0gRGVmYXVsdHMgdG8gOC5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNldFRpbWVTaWduYXR1cmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VGltZVNpZ25hdHVyZShudW1lcmF0b3IsIGRlbm9taW5hdG9yLCBtaWRpY2xvY2tzcGVydGljaywgbm90ZXNwZXJtaWRpY2xvY2spIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBUaW1lU2lnbmF0dXJlRXZlbnQobnVtZXJhdG9yLCBkZW5vbWluYXRvciwgbWlkaWNsb2Nrc3BlcnRpY2ssIG5vdGVzcGVybWlkaWNsb2NrKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMga2V5IHNpZ25hdHVyZS5cbiAgICAgKiBAcGFyYW0geyp9IHNmIC1cbiAgICAgKiBAcGFyYW0geyp9IG1pIC1cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNldEtleVNpZ25hdHVyZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRLZXlTaWduYXR1cmUoc2YsIG1pKSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgS2V5U2lnbmF0dXJlRXZlbnQoc2YsIG1pKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgdGV4dCB0byBNSURJIGZpbGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUZXh0IHRvIGFkZC5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFkZFRleHRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkVGV4dCh0ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgVGV4dEV2ZW50KHRleHQpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBjb3B5cmlnaHQgdG8gTUlESSBmaWxlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCBvZiBjb3B5cmlnaHQgbGluZS5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFkZENvcHlyaWdodFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRDb3B5cmlnaHQodGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IENvcHlyaWdodEV2ZW50KHRleHQpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBTZXF1ZW5jZS9UcmFjayBOYW1lLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCBvZiB0cmFjayBuYW1lLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkVHJhY2tOYW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZFRyYWNrTmFtZSh0ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgVHJhY2tOYW1lRXZlbnQodGV4dCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIGluc3RydW1lbnQgbmFtZSBvZiB0cmFjay5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIE5hbWUgb2YgaW5zdHJ1bWVudC5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFkZEluc3RydW1lbnROYW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEluc3RydW1lbnROYW1lKHRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBJbnN0cnVtZW50TmFtZUV2ZW50KHRleHQpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBtYXJrZXIgdG8gTUlESSBmaWxlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gTWFya2VyIHRleHQuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhZGRNYXJrZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkTWFya2VyKHRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBNYXJrZXJFdmVudCh0ZXh0KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgY3VlIHBvaW50IHRvIE1JREkgZmlsZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRleHQgb2YgY3VlIHBvaW50LlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkQ3VlUG9pbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkQ3VlUG9pbnQodGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IEN1ZVBvaW50RXZlbnQodGV4dCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGx5cmljIHRvIE1JREkgZmlsZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIEx5cmljIHRleHQgdG8gYWRkLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkTHlyaWNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkTHlyaWModGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IEx5cmljRXZlbnQodGV4dCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGFubmVsIG1vZGUgbWVzc2FnZXNcbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInBvbHlNb2RlT25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcG9seU1vZGVPbigpIHtcbiAgICAgIHZhciBldmVudCA9IG5ldyBOb3RlT25FdmVudCh7XG4gICAgICAgIGRhdGE6IFsweDAwLCAweEIwLCAweDdFLCAweDAwXVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChldmVudCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgYSBwaXRjaCBiZW5kLlxuICAgICAqIEBwYXJhbSB7ZmxvYXR9IGJlbmQgLSBCZW5kIHZhbHVlIHJhbmdpbmcgWy0xLDFdLCB6ZXJvIG1lYW5pbmcgbm8gYmVuZC5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNldFBpdGNoQmVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQaXRjaEJlbmQoYmVuZCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IFBpdGNoQmVuZEV2ZW50KHtcbiAgICAgICAgYmVuZDogYmVuZFxuICAgICAgfSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgY29udHJvbGxlciBjaGFuZ2UgZXZlbnRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyIC0gQ29udHJvbCBudW1iZXIuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gQ29udHJvbCB2YWx1ZS5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNvbnRyb2xsZXJDaGFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29udHJvbGxlckNoYW5nZShudW1iZXIsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgQ29udHJvbGxlckNoYW5nZUV2ZW50KHtcbiAgICAgICAgY29udHJvbGxlck51bWJlcjogbnVtYmVyLFxuICAgICAgICBjb250cm9sbGVyVmFsdWU6IHZhbHVlXG4gICAgICB9KSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFRyYWNrO1xufSgpO1xuXG52YXIgVmV4RmxvdyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFZleEZsb3coKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFZleEZsb3cpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFZleEZsb3csIFt7XG4gICAga2V5OiBcInRyYWNrRnJvbVZvaWNlXCIsXG4gICAgdmFsdWU6XG4gICAgLyoqXG4gICAgICogU3VwcG9ydCBmb3IgY29udmVydGluZyBWZXhGbG93IHZvaWNlIGludG8gTWlkaVdyaXRlckpTIHRyYWNrXG4gICAgICogQHJldHVybiBNaWRpV3JpdGVyLlRyYWNrIG9iamVjdFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHRyYWNrRnJvbVZvaWNlKHZvaWNlKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge1xuICAgICAgICBhZGRSZW5kZXJlZEFjY2lkZW50YWxzOiBmYWxzZVxuICAgICAgfTtcbiAgICAgIHZhciB0cmFjayA9IG5ldyBUcmFjaygpO1xuICAgICAgdmFyIHdhaXQgPSBbXTtcbiAgICAgIHZvaWNlLnRpY2thYmxlcy5mb3JFYWNoKGZ1bmN0aW9uICh0aWNrYWJsZSkge1xuICAgICAgICBpZiAodGlja2FibGUubm90ZVR5cGUgPT09ICduJykge1xuICAgICAgICAgIHRyYWNrLmFkZEV2ZW50KG5ldyBOb3RlRXZlbnQoe1xuICAgICAgICAgICAgcGl0Y2g6IHRpY2thYmxlLmtleXMubWFwKGZ1bmN0aW9uIChwaXRjaCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmNvbnZlcnRQaXRjaChwaXRjaCwgaW5kZXgsIHRpY2thYmxlLCBvcHRpb25zLmFkZFJlbmRlcmVkQWNjaWRlbnRhbHMpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBkdXJhdGlvbjogX3RoaXMuY29udmVydER1cmF0aW9uKHRpY2thYmxlKSxcbiAgICAgICAgICAgIHdhaXQ6IHdhaXRcbiAgICAgICAgICB9KSk7IC8vIHJlc2V0IHdhaXRcblxuICAgICAgICAgIHdhaXQgPSBbXTtcbiAgICAgICAgfSBlbHNlIGlmICh0aWNrYWJsZS5ub3RlVHlwZSA9PT0gJ3InKSB7XG4gICAgICAgICAgLy8gbW92ZSBvbiB0byB0aGUgbmV4dCB0aWNrYWJsZSBhbmQgYWRkIHRoaXMgdG8gdGhlIHN0YWNrXG4gICAgICAgICAgLy8gb2YgdGhlIGB3YWl0YCBwcm9wZXJ0eSBmb3IgdGhlIG5leHQgbm90ZSBldmVudFxuICAgICAgICAgIHdhaXQucHVzaChfdGhpcy5jb252ZXJ0RHVyYXRpb24odGlja2FibGUpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0pOyAvLyBUaGVyZSBtYXkgYmUgb3V0c3RhbmRpbmcgcmVzdHMgYXQgdGhlIGVuZCBvZiB0aGUgdHJhY2ssXG4gICAgICAvLyBwYWQgd2l0aCBhIGdob3N0IG5vdGUgKHplcm8gZHVyYXRpb24gYW5kIHZlbG9jaXR5KSwganVzdCB0byBjYXB0dXJlIHRoZSB3YWl0LlxuXG4gICAgICBpZiAod2FpdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRyYWNrLmFkZEV2ZW50KG5ldyBOb3RlRXZlbnQoe1xuICAgICAgICAgIHBpdGNoOiAnW2M0XScsXG4gICAgICAgICAgZHVyYXRpb246ICcwJyxcbiAgICAgICAgICB3YWl0OiB3YWl0LFxuICAgICAgICAgIHZlbG9jaXR5OiAnMCdcbiAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJhY2s7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIFZleEZsb3cgcGl0Y2ggc3ludGF4IHRvIE1pZGlXcml0ZXJKUyBzeW50YXhcbiAgICAgKiBAcGFyYW0gcGl0Y2ggc3RyaW5nXG4gICAgICogQHBhcmFtIGluZGV4IHBpdGNoIGluZGV4XG4gICAgICogQHBhcmFtIG5vdGUgc3RydWN0IGZyb20gVmV4Zmxvd1xuICAgICAqIEBwYXJhbSBhZGRSZW5kZXJlZEFjY2lkZW50YWxzIGFkZHMgVmV4ZmxvdyByZW5kZXJlZCBhY2NpZGVudGFsc1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY29udmVydFBpdGNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbnZlcnRQaXRjaChwaXRjaCwgaW5kZXgsIG5vdGUpIHtcbiAgICAgIHZhciBhZGRSZW5kZXJlZEFjY2lkZW50YWxzID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiBmYWxzZTtcbiAgICAgIC8vIFNwbGl0cyBub3RlIG5hbWUgZnJvbSBvY3RhdmVcbiAgICAgIHZhciBwaXRjaFBhcnRzID0gcGl0Y2guc3BsaXQoJy8nKTsgLy8gUmV0cmlldmVzIGFjY2lkZW50YWxzIGZyb20gcGl0Y2hcbiAgICAgIC8vIFJlbW92ZXMgbmF0dXJhbCBhY2NpZGVudGFscyBzaW5jZSB0aGV5IGFyZSBub3QgYWNjZXB0ZWQgaW4gVG9uYWwgTWlkaVxuXG4gICAgICB2YXIgYWNjaWRlbnRhbHMgPSBwaXRjaFBhcnRzWzBdLnN1YnN0cmluZygxKS5yZXBsYWNlKCduJywgJycpO1xuXG4gICAgICBpZiAoYWRkUmVuZGVyZWRBY2NpZGVudGFscykge1xuICAgICAgICB2YXIgX25vdGUkZ2V0QWNjaWRlbnRhbHM7XG5cbiAgICAgICAgKF9ub3RlJGdldEFjY2lkZW50YWxzID0gbm90ZS5nZXRBY2NpZGVudGFscygpKSA9PT0gbnVsbCB8fCBfbm90ZSRnZXRBY2NpZGVudGFscyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX25vdGUkZ2V0QWNjaWRlbnRhbHMuZm9yRWFjaChmdW5jdGlvbiAoYWNjaWRlbnRhbCkge1xuICAgICAgICAgIGlmIChhY2NpZGVudGFsLmluZGV4ID09PSBpbmRleCkge1xuICAgICAgICAgICAgaWYgKGFjY2lkZW50YWwudHlwZSA9PT0gJ24nKSB7XG4gICAgICAgICAgICAgIGFjY2lkZW50YWxzID0gJyc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhY2NpZGVudGFscyArPSBhY2NpZGVudGFsLnR5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBpdGNoUGFydHNbMF1bMF0gKyBhY2NpZGVudGFscyArIHBpdGNoUGFydHNbMV07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIFZleEZsb3cgZHVyYXRpb24gc3ludGF4IHRvIE1pZGlXcml0ZXJKUyBzeW50YXhcbiAgICAgKiBAcGFyYW0gbm90ZSBzdHJ1Y3QgZnJvbSBWZXhGbG93XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjb252ZXJ0RHVyYXRpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29udmVydER1cmF0aW9uKG5vdGUpIHtcbiAgICAgIHJldHVybiAnZCcucmVwZWF0KG5vdGUuZG90cykgKyB0aGlzLmNvbnZlcnRCYXNlRHVyYXRpb24obm90ZS5kdXJhdGlvbikgKyAobm90ZS50dXBsZXQgPyAndCcgKyBub3RlLnR1cGxldC5udW1fbm90ZXMgOiAnJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIFZleEZsb3cgYmFzZSBkdXJhdGlvbiBzeW50YXggdG8gTWlkaVdyaXRlckpTIHN5bnRheFxuICAgICAqIEBwYXJhbSBkdXJhdGlvbiBWZXhmbG93IGR1cmF0aW9uXG4gICAgICogQHJldHVybnMgTWlkaVdyaXRlckpTIGR1cmF0aW9uXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjb252ZXJ0QmFzZUR1cmF0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbnZlcnRCYXNlRHVyYXRpb24oZHVyYXRpb24pIHtcbiAgICAgIHN3aXRjaCAoZHVyYXRpb24pIHtcbiAgICAgICAgY2FzZSAndyc6XG4gICAgICAgICAgcmV0dXJuICcxJztcblxuICAgICAgICBjYXNlICdoJzpcbiAgICAgICAgICByZXR1cm4gJzInO1xuXG4gICAgICAgIGNhc2UgJ3EnOlxuICAgICAgICAgIHJldHVybiAnNCc7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gZHVyYXRpb247XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFZleEZsb3c7XG59KCk7XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgaGVhZGVyIGNodW5rIHNlY3Rpb24gb2YgYSBNSURJIGZpbGUuXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyT2ZUcmFja3MgLSBOdW1iZXIgb2YgdHJhY2tzXG4gKiBAcmV0dXJuIHtIZWFkZXJDaHVua31cbiAqL1xuXG52YXIgSGVhZGVyQ2h1bmsgPSBmdW5jdGlvbiBIZWFkZXJDaHVuayhudW1iZXJPZlRyYWNrcykge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSGVhZGVyQ2h1bmspO1xuXG4gIHRoaXMudHlwZSA9IENvbnN0YW50cy5IRUFERVJfQ0hVTktfVFlQRTtcbiAgdmFyIHRyYWNrVHlwZSA9IG51bWJlck9mVHJhY2tzID4gMSA/IENvbnN0YW50cy5IRUFERVJfQ0hVTktfRk9STUFUMSA6IENvbnN0YW50cy5IRUFERVJfQ0hVTktfRk9STUFUMDtcbiAgdGhpcy5kYXRhID0gdHJhY2tUeXBlLmNvbmNhdChVdGlscy5udW1iZXJUb0J5dGVzKG51bWJlck9mVHJhY2tzLCAyKSwgLy8gdHdvIGJ5dGVzIGxvbmcsXG4gIENvbnN0YW50cy5IRUFERVJfQ0hVTktfRElWSVNJT04pO1xuICB0aGlzLnNpemUgPSBbMCwgMCwgMCwgdGhpcy5kYXRhLmxlbmd0aF07XG59O1xuXG4vKipcbiAqIE9iamVjdCB0aGF0IHB1dHMgdG9nZXRoZXIgdHJhY2tzIGFuZCBwcm92aWRlcyBtZXRob2RzIGZvciBmaWxlIG91dHB1dC5cbiAqIEBwYXJhbSB7YXJyYXl8VHJhY2t9IHRyYWNrcyAtIEEgc2luZ2xlIHtUcmFja30gb2JqZWN0IG9yIGFuIGFycmF5IG9mIHtUcmFja30gb2JqZWN0cy5cbiAqIEByZXR1cm4ge1dyaXRlcn1cbiAqL1xuXG52YXIgV3JpdGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gV3JpdGVyKHRyYWNrcykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV3JpdGVyKTtcblxuICAgIC8vIEVuc3VyZSB0cmFjayBpcyBhbiBhcnJheVxuICAgIHRyYWNrcyA9IFV0aWxzLnRvQXJyYXkodHJhY2tzKTtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICB0aGlzLmRhdGEucHVzaChuZXcgSGVhZGVyQ2h1bmsodHJhY2tzLmxlbmd0aCkpOyAvLyBGb3IgZWFjaCB0cmFjayBhZGQgZmluYWwgZW5kIG9mIHRyYWNrIGV2ZW50IGFuZCBidWlsZCBkYXRhXG5cbiAgICB0cmFja3MuZm9yRWFjaChmdW5jdGlvbiAodHJhY2ssIGkpIHtcbiAgICAgIF90aGlzLmRhdGEucHVzaCh0cmFjay5idWlsZERhdGEoKSk7XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIEJ1aWxkcyB0aGUgZmlsZSBpbnRvIGEgVWludDhBcnJheVxuICAgKiBAcmV0dXJuIHtVaW50OEFycmF5fVxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhXcml0ZXIsIFt7XG4gICAga2V5OiBcImJ1aWxkRmlsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBidWlsZEZpbGUoKSB7XG4gICAgICB2YXIgYnVpbGQgPSBbXTsgLy8gRGF0YSBjb25zaXN0cyBvZiBjaHVua3Mgd2hpY2ggY29uc2lzdHMgb2YgZGF0YVxuXG4gICAgICB0aGlzLmRhdGEuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gYnVpbGQgPSBidWlsZC5jb25jYXQoZC50eXBlLCBkLnNpemUsIGQuZGF0YSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShidWlsZCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnQgZmlsZSBidWZmZXIgdG8gYSBiYXNlNjQgc3RyaW5nLiAgRGlmZmVyZW50IG1ldGhvZHMgZGVwZW5kaW5nIG9uIGlmIGJyb3dzZXIgb3Igbm9kZS5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJiYXNlNjRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmFzZTY0KCkge1xuICAgICAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSByZXR1cm4gYnRvYShTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIHRoaXMuYnVpbGRGaWxlKCkpKTtcbiAgICAgIHJldHVybiBCdWZmZXIuZnJvbSh0aGlzLmJ1aWxkRmlsZSgpKS50b1N0cmluZygnYmFzZTY0Jyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZGF0YSBVUkkuXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZGF0YVVyaVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkYXRhVXJpKCkge1xuICAgICAgcmV0dXJuICdkYXRhOmF1ZGlvL21pZGk7YmFzZTY0LCcgKyB0aGlzLmJhc2U2NCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBPdXRwdXQgdG8gc3Rkb3V0XG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3Rkb3V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0ZG91dCgpIHtcbiAgICAgIHJldHVybiBwcm9jZXNzLnN0ZG91dC53cml0ZShuZXcgQnVmZmVyKHRoaXMuYnVpbGRGaWxlKCkpKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gV3JpdGVyO1xufSgpO1xuXG52YXIgbWFpbiA9IHtcbiAgQ29uc3RhbnRzOiBDb25zdGFudHMsXG4gIE5vdGVPbkV2ZW50OiBOb3RlT25FdmVudCxcbiAgTm90ZU9mZkV2ZW50OiBOb3RlT2ZmRXZlbnQsXG4gIE5vdGVFdmVudDogTm90ZUV2ZW50LFxuICBQaXRjaEJlbmRFdmVudDogUGl0Y2hCZW5kRXZlbnQsXG4gIFByb2dyYW1DaGFuZ2VFdmVudDogUHJvZ3JhbUNoYW5nZUV2ZW50LFxuICBUcmFjazogVHJhY2ssXG4gIFV0aWxzOiBVdGlscyxcbiAgVmV4RmxvdzogVmV4RmxvdyxcbiAgV3JpdGVyOiBXcml0ZXJcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbWFpbjtcbiIsICJpbXBvcnQgeyBVdGlscyB9IGZyb20gJ21pZGktd3JpdGVyLWpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgdGhpcy5iZWF0cyA9IFtdO1xuICAgIHRoaXMuYmFycyA9IDg7XG4gICAgdGhpcy5icG0gPSAxMjc7XG4gICAgdGhpcy5mcmFxID0gMSAvIHRoaXMuYmFycztcbiAgICB0aGlzLnRyYWNrTm9kZXMgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy50cmFja1N0YXRlID0gbmV3IE1hcCgpO1xuICAgIHRoaXMuZGVsYXlEaXZpc2lvbiA9IDMgLyA4O1xuICAgIHRoaXMub25CZWF0ID0gbnVsbDtcbiAgICB0aGlzLmluaXRBdWRpbygpO1xuICB9XG5cbiAgaW5pdEF1ZGlvKCkge1xuICAgIGNvbnN0IEF1ZGlvQ29udGV4dEZ1bmMgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQ7XG5cbiAgICB0aGlzLmF1ZGlvQ29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHRGdW5jKCk7XG4gICAgdGhpcy5kZXN0aW5hdGlvbiA9IHRoaXMuYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uO1xuICAgIHRoaXMucGxheWVyID0gbmV3IFdlYkF1ZGlvRm9udFBsYXllcigpO1xuICAgIHRoaXMuZXF1YWxpemVyID0gdGhpcy5wbGF5ZXIuY3JlYXRlQ2hhbm5lbCh0aGlzLmF1ZGlvQ29udGV4dCk7XG4gICAgdGhpcy5tYXN0ZXJHYWluID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgIHRoaXMuZWNobyA9IHRoaXMucGxheWVyLmNyZWF0ZVJldmVyYmVyYXRvcih0aGlzLmF1ZGlvQ29udGV4dCk7XG4gICAgdGhpcy5kZWxheUlucHV0ID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgIHRoaXMuZGVsYXkgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVEZWxheSg0KTtcbiAgICB0aGlzLmRlbGF5RmVlZGJhY2sgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgdGhpcy5kZWxheVdldCA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKTtcblxuICAgIHRoaXMubWFzdGVyR2Fpbi5nYWluLnZhbHVlID0gMTtcbiAgICB0aGlzLmRlbGF5RmVlZGJhY2suZ2Fpbi52YWx1ZSA9IDAuMzU7XG4gICAgdGhpcy5kZWxheVdldC5nYWluLnZhbHVlID0gMTtcbiAgICB0aGlzLmRlbGF5SW5wdXQuZ2Fpbi52YWx1ZSA9IDE7XG5cbiAgICB0aGlzLmVxdWFsaXplci5vdXRwdXQuY29ubmVjdCh0aGlzLm1hc3RlckdhaW4pO1xuICAgIHRoaXMuZWNoby5vdXRwdXQuY29ubmVjdCh0aGlzLm1hc3RlckdhaW4pO1xuXG4gICAgdGhpcy5kZWxheUlucHV0LmNvbm5lY3QodGhpcy5kZWxheSk7XG4gICAgdGhpcy5kZWxheS5jb25uZWN0KHRoaXMuZGVsYXlGZWVkYmFjayk7XG4gICAgdGhpcy5kZWxheUZlZWRiYWNrLmNvbm5lY3QodGhpcy5kZWxheSk7XG4gICAgdGhpcy5kZWxheS5jb25uZWN0KHRoaXMuZGVsYXlXZXQpO1xuICAgIHRoaXMuZGVsYXlXZXQuY29ubmVjdCh0aGlzLm1hc3RlckdhaW4pO1xuXG4gICAgdGhpcy5tYXN0ZXJHYWluLmNvbm5lY3QodGhpcy5kZXN0aW5hdGlvbik7XG4gICAgdGhpcy51cGRhdGVEZWxheVRpbWUoKTtcbiAgfVxuXG4gIHBpdGNoKHZhbHVlKSB7XG4gICAgcmV0dXJuIFV0aWxzLmdldFBpdGNoKHZhbHVlKSArIHRoaXMub2Zmc2V0O1xuICB9XG5cbiAgcHJlbG9hZChkYXRhKSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YSB8fCB0aGlzLmRhdGE7XG5cbiAgICBsZXQgY291bnQgPSAwO1xuICAgIHRoaXMuZGF0YS5mb3JFYWNoKHRyYWNrID0+IHtcbiAgICAgIGlmICh0cmFja1syXS5sZW5ndGggPiBjb3VudCkgY291bnQgPSB0cmFja1syXS5sZW5ndGg7XG5cbiAgICAgIGNvbnN0IGluZm8gPSB0cmFja1swXSA+PSAyMDAwXG4gICAgICAgID8gdGhpcy5wbGF5ZXIubG9hZGVyLmRydW1JbmZvKHRyYWNrWzBdIC0gMjAwMClcbiAgICAgICAgOiB0aGlzLnBsYXllci5sb2FkZXIuaW5zdHJ1bWVudEluZm8odHJhY2tbMF0pO1xuXG4gICAgICB0aGlzLmNhY2hlSW5zdHJ1bWVudChpbmZvKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGR1cmF0aW9uID0gVXRpbHMuZ2V0VGlja0R1cmF0aW9uKCczMicpIC8gMjU2O1xuICAgIGNvbnN0IG5leHRLZXlzID0gbmV3IFNldCgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBiZWF0ID0gbmV3IE1hcCgpO1xuXG4gICAgICB0aGlzLmRhdGEuZm9yRWFjaCh0cmFjayA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IGAke3RyYWNrWzBdfS8ke3RyYWNrWzFdfWA7XG4gICAgICAgIG5leHRLZXlzLmFkZChrZXkpO1xuICAgICAgICBpZiAoIWJlYXQuaGFzKGtleSkpIGJlYXQuc2V0KGtleSwgeyBkcnVtczogW10sIG5vdGVzOiBbXSB9KTtcbiAgICAgICAgY29uc3Qgc2xvdCA9IGJlYXQuZ2V0KGtleSk7XG4gICAgICAgIGNvbnN0IHRpY2sgPSB0cmFja1syXVtpXSB8fCB7fTtcblxuICAgICAgICBpZiAodHJhY2tbMF0gPj0gMjAwMCkge1xuICAgICAgICAgIHNsb3QuZHJ1bXMucHVzaChbdHJhY2tbMF0gLSAyMDAwLCB0aWNrLnZdKTtcbiAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHRpY2subikpIHtcbiAgICAgICAgICB0aWNrLm4uZm9yRWFjaCh0b25lID0+IHtcbiAgICAgICAgICAgIHNsb3Qubm90ZXMucHVzaChbdHJhY2tbMF0sIHRoaXMucGl0Y2godG9uZSksIGR1cmF0aW9uLCB0aWNrLnZdKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aWNrLm4pIHtcbiAgICAgICAgICBzbG90Lm5vdGVzLnB1c2goW3RyYWNrWzBdLCB0aGlzLnBpdGNoKHRpY2subiksIGR1cmF0aW9uLCB0aWNrLnZdKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuYmVhdHNbaV0gPSBiZWF0O1xuICAgIH1cblxuICAgIHRoaXMudHJhY2tOb2Rlcy5mb3JFYWNoKChub2Rlcywga2V5KSA9PiB7XG4gICAgICBpZiAoIW5leHRLZXlzLmhhcyhrZXkpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbm9kZXMuZHJ5LmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICBub2Rlcy5yZXZlcmJTZW5kLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICBub2Rlcy5kZWxheVNlbmQuZGlzY29ubmVjdCgpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaWdub3JlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmFja05vZGVzLmRlbGV0ZShrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbmV4dEtleXMuZm9yRWFjaChrZXkgPT4gdGhpcy5nZXRUcmFja05vZGVzKGtleSkpO1xuICB9XG5cbiAgY29udGV4dFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXVkaW9Db250ZXh0LmN1cnJlbnRUaW1lO1xuICB9XG5cbiAgcGxheUxvb3BNYWNoaW5lKGZyb21CZWF0KSB7XG4gICAgdGhpcy5zdGFydFBsYXlMb29wKHRoaXMuYmVhdHMsIHRoaXMuYnBtLCB0aGlzLmZyYXEsIGZyb21CZWF0KTtcbiAgfVxuXG4gIHN0b3BMb29wTWFjaGluZSgpIHtcbiAgICB0aGlzLnN0b3BQbGF5TG9vcCgpO1xuICB9XG5cbiAgc2V0TG9vcE1hY2hpbmUoZGF0YSwgdGVtcG8sIGxlbmd0aCwgdHJhbnNwb3NlKSB7XG4gICAgY29uc3QgY2hhbmdlZCA9IHRlbXBvICE9PSB0aGlzLmJwbVxuICAgICAgfHwgbGVuZ3RoICE9PSB0aGlzLmJhcnNcbiAgICAgIHx8IHRyYW5zcG9zZSAhPT0gdGhpcy5vZmZzZXQ7XG5cbiAgICBpZiAoY2hhbmdlZCkgdGhpcy5zdG9wUGxheUxvb3AoKTtcblxuICAgIHRoaXMuYmVhdHMubGVuZ3RoID0gMDtcbiAgICB0aGlzLmJwbSA9IHRlbXBvIHx8IDEyNztcbiAgICB0aGlzLmJhcnMgPSBsZW5ndGggfHwgMTY7XG4gICAgdGhpcy5vZmZzZXQgPSB0cmFuc3Bvc2UgfHwgMDtcbiAgICB0aGlzLnVwZGF0ZURlbGF5VGltZSgpO1xuICAgIHRoaXMucHJlbG9hZChkYXRhKTtcbiAgICB0aGlzLmZyYXEgPSAxIC8gdGhpcy5iYXJzO1xuXG4gICAgcmV0dXJuIGNoYW5nZWQ7XG4gIH1cblxuICBzdGFydFBsYXlMb29wKGJlYXRzLCBicG0sIGRlbnNpdHksIGZyb21CZWF0KSB7XG4gICAgdGhpcy5sb29wU3RhcnRlZCA9IHRydWU7XG5cbiAgICBjb25zdCB3aG9sZU5vdGVEdXJhdGlvbiA9ICg0ICogNjApIC8gYnBtO1xuXG4gICAgdGhpcy5iZWF0SW5kZXggPSBmcm9tQmVhdCA8IGJlYXRzLmxlbmd0aCA/IGZyb21CZWF0IDogMDtcbiAgICB0aGlzLnBsYXlCZWF0QXQodGhpcy5jb250ZXh0VGltZSgpLCBiZWF0c1t0aGlzLmJlYXRJbmRleF0sIGJwbSk7XG5cbiAgICBsZXQgbmV4dExvb3BUaW1lID0gdGhpcy5jb250ZXh0VGltZSgpICsgZGVuc2l0eSAqIHdob2xlTm90ZUR1cmF0aW9uO1xuICAgIHRoaXMubG9vcEludGVydmFsSUQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5jb250ZXh0VGltZSgpID4gbmV4dExvb3BUaW1lIC0gZGVuc2l0eSAqIHdob2xlTm90ZUR1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMuYmVhdEluZGV4ICs9IDE7XG4gICAgICAgIGlmICh0aGlzLmJlYXRJbmRleCA+PSBiZWF0cy5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLmJlYXRJbmRleCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBsYXlCZWF0QXQobmV4dExvb3BUaW1lLCBiZWF0c1t0aGlzLmJlYXRJbmRleF0sIGJwbSk7XG4gICAgICAgIG5leHRMb29wVGltZSArPSBkZW5zaXR5ICogd2hvbGVOb3RlRHVyYXRpb247XG4gICAgICB9XG4gICAgfSwgMjIpO1xuICB9XG5cbiAgc3RvcFBsYXlMb29wKCkge1xuICAgIHRoaXMubG9vcFN0YXJ0ZWQgPSBmYWxzZTtcbiAgICBjbGVhckludGVydmFsKHRoaXMubG9vcEludGVydmFsSUQpO1xuICAgIHRoaXMuY2FuY2VsUXVldWUoKTtcbiAgfVxuXG4gIGdldFRyYWNrU3RhdGUoa2V5KSB7XG4gICAgaWYgKCF0aGlzLnRyYWNrU3RhdGUuaGFzKGtleSkpIHtcbiAgICAgIHRoaXMudHJhY2tTdGF0ZS5zZXQoa2V5LCB7XG4gICAgICAgIG11dGVkOiBmYWxzZSxcbiAgICAgICAgc29sbzogZmFsc2UsXG4gICAgICAgIHZvbHVtZTogMSxcbiAgICAgICAgcmV2ZXJiU2VuZDogMCxcbiAgICAgICAgZGVsYXlTZW5kOiAwLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnRyYWNrU3RhdGUuZ2V0KGtleSk7XG4gIH1cblxuICBhcHBseVRyYWNrU3RhdGUoa2V5KSB7XG4gICAgY29uc3Qgbm9kZXMgPSB0aGlzLmdldFRyYWNrTm9kZXMoa2V5KTtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0VHJhY2tTdGF0ZShrZXkpO1xuICAgIG5vZGVzLnN0YXRlID0gc3RhdGU7XG4gICAgbm9kZXMuZHJ5LmdhaW4udmFsdWUgPSBzdGF0ZS5tdXRlZCA/IDAgOiBzdGF0ZS52b2x1bWU7XG4gICAgbm9kZXMucmV2ZXJiU2VuZC5nYWluLnZhbHVlID0gc3RhdGUucmV2ZXJiU2VuZDtcbiAgICBub2Rlcy5kZWxheVNlbmQuZ2Fpbi52YWx1ZSA9IHN0YXRlLmRlbGF5U2VuZDtcbiAgfVxuXG4gIGdldFRyYWNrTm9kZXMoa2V5KSB7XG4gICAgaWYgKHRoaXMudHJhY2tOb2Rlcy5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIHRoaXMudHJhY2tOb2Rlcy5nZXQoa2V5KTtcbiAgICB9XG5cbiAgICBjb25zdCBkcnkgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgY29uc3QgcmV2ZXJiU2VuZCA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgICBjb25zdCBkZWxheVNlbmQgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCk7XG5cbiAgICBkcnkuZ2Fpbi52YWx1ZSA9IDE7XG4gICAgcmV2ZXJiU2VuZC5nYWluLnZhbHVlID0gMDtcbiAgICBkZWxheVNlbmQuZ2Fpbi52YWx1ZSA9IDA7XG5cbiAgICBkcnkuY29ubmVjdCh0aGlzLmVxdWFsaXplci5pbnB1dCk7XG4gICAgcmV2ZXJiU2VuZC5jb25uZWN0KHRoaXMuZWNoby5pbnB1dCk7XG4gICAgZGVsYXlTZW5kLmNvbm5lY3QodGhpcy5kZWxheUlucHV0KTtcblxuICAgIGNvbnN0IG5vZGVzID0geyBkcnksIHJldmVyYlNlbmQsIGRlbGF5U2VuZCB9O1xuICAgIHRoaXMudHJhY2tOb2Rlcy5zZXQoa2V5LCBub2Rlcyk7XG4gICAgdGhpcy5hcHBseVRyYWNrU3RhdGUoa2V5KTtcbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBzZXRNdXRlKGtleSwgdmFsdWUpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0VHJhY2tTdGF0ZShrZXkpO1xuICAgIHN0YXRlLm11dGVkID0gQm9vbGVhbih2YWx1ZSk7XG4gICAgdGhpcy5hcHBseVRyYWNrU3RhdGUoa2V5KTtcbiAgfVxuXG4gIHNldFNvbG8oa2V5LCB2YWx1ZSkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRUcmFja1N0YXRlKGtleSk7XG4gICAgc3RhdGUuc29sbyA9IEJvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgc2V0Vm9sdW1lKGtleSwgdmFsdWUpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0VHJhY2tTdGF0ZShrZXkpO1xuICAgIHN0YXRlLnZvbHVtZSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHZhbHVlKSk7XG4gICAgdGhpcy5hcHBseVRyYWNrU3RhdGUoa2V5KTtcbiAgfVxuXG4gIHNldFJldmVyYlNlbmQoa2V5LCB2YWx1ZSkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRUcmFja1N0YXRlKGtleSk7XG4gICAgc3RhdGUucmV2ZXJiU2VuZCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHZhbHVlKSk7XG4gICAgdGhpcy5hcHBseVRyYWNrU3RhdGUoa2V5KTtcbiAgfVxuXG4gIHNldERlbGF5U2VuZChrZXksIHZhbHVlKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFRyYWNrU3RhdGUoa2V5KTtcbiAgICBzdGF0ZS5kZWxheVNlbmQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB2YWx1ZSkpO1xuICAgIHRoaXMuYXBwbHlUcmFja1N0YXRlKGtleSk7XG4gIH1cblxuICBzZXREZWxheUZlZWRiYWNrKHZhbHVlKSB7XG4gICAgdGhpcy5kZWxheUZlZWRiYWNrLmdhaW4udmFsdWUgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigwLjc1LCB2YWx1ZSkpO1xuICB9XG5cbiAgc2V0RGVsYXlUaW1lKHZhbHVlKSB7XG4gICAgdGhpcy5kZWxheURpdmlzaW9uID0gTWF0aC5tYXgoMC4xMjUsIE1hdGgubWluKDAuNzUsIHZhbHVlKSk7XG4gICAgdGhpcy51cGRhdGVEZWxheVRpbWUoKTtcbiAgfVxuXG4gIHVwZGF0ZURlbGF5VGltZSgpIHtcbiAgICBjb25zdCB3aG9sZSA9ICg0ICogNjApIC8gKHRoaXMuYnBtIHx8IDEyNyk7XG4gICAgdGhpcy5kZWxheS5kZWxheVRpbWUudmFsdWUgPSB3aG9sZSAqIHRoaXMuZGVsYXlEaXZpc2lvbjtcbiAgfVxuXG4gIGdldFRyYWNrS2V5cygpIHtcbiAgICByZXR1cm4gWy4uLnRoaXMudHJhY2tOb2Rlcy5rZXlzKCldO1xuICB9XG5cbiAgY2FuY2VsUXVldWUoKSB7XG4gICAgdGhpcy5wbGF5ZXIuY2FuY2VsUXVldWUodGhpcy5hdWRpb0NvbnRleHQpO1xuICB9XG5cbiAgY2FjaGVJbnN0cnVtZW50KGluZm8pIHtcbiAgICBpZiAoaW5mbyAmJiAhd2luZG93W2luZm8udmFyaWFibGVdKSB7XG4gICAgICBpZiAod2luZG93W2luZm8udmFyaWFibGUgKyAxMjddKSByZXR1cm47XG4gICAgICB3aW5kb3dbaW5mby52YXJpYWJsZSArIDEyN10gPSB0cnVlO1xuICAgICAgdGhpcy5wbGF5ZXIubG9hZGVyLnN0YXJ0TG9hZCh0aGlzLmF1ZGlvQ29udGV4dCwgaW5mby51cmwsIGluZm8udmFyaWFibGUpO1xuICAgICAgdGhpcy5wbGF5ZXIubG9hZGVyLndhaXRMb2FkKCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NhY2hlZCcsIGluZm8udGl0bGUpO1xuICAgICAgICBkZWxldGUgd2luZG93W2luZm8udmFyaWFibGUgKyAxMjddO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcGxheURydW0od2hlbiwgZHJ1bSwgbm9kZXMpIHtcbiAgICBjb25zdCBbaW5zdHJ1bWVudCwgbGV2ZWxdID0gZHJ1bTtcbiAgICBjb25zdCBpbmZvID0gdGhpcy5wbGF5ZXIubG9hZGVyLmRydW1JbmZvKGluc3RydW1lbnQpO1xuXG4gICAgaWYgKHdpbmRvd1tpbmZvLnZhcmlhYmxlXSkge1xuICAgICAgY29uc3QgcGl0Y2ggPSB3aW5kb3dbaW5mby52YXJpYWJsZV0uem9uZXNbMF0ua2V5UmFuZ2VMb3c7XG4gICAgICBjb25zdCBnYWluID0gKDEgLyAxMjcpICogbGV2ZWw7XG4gICAgICBpZiAobGV2ZWwgPiAwKSB0aGlzLnF1ZXVlVG9UcmFja05vZGVzKHdpbmRvd1tpbmZvLnZhcmlhYmxlXSwgd2hlbiwgcGl0Y2gsIDEgLyA2NCwgZ2Fpbiwgbm9kZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhY2hlSW5zdHJ1bWVudChpbmZvKTtcbiAgICB9XG4gIH1cblxuICBxdWV1ZVRvVHJhY2tOb2Rlcyhmb250LCB3aGVuLCBwaXRjaCwgZHVyYXRpb24sIGdhaW4sIG5vZGVzKSB7XG4gICAgdGhpcy5wbGF5ZXIucXVldWVXYXZlVGFibGUodGhpcy5hdWRpb0NvbnRleHQsIG5vZGVzLmRyeSwgZm9udCwgd2hlbiwgcGl0Y2gsIGR1cmF0aW9uLCBnYWluKTtcbiAgICBpZiAobm9kZXMucmV2ZXJiU2VuZC5nYWluLnZhbHVlID4gMCkge1xuICAgICAgdGhpcy5wbGF5ZXIucXVldWVXYXZlVGFibGUodGhpcy5hdWRpb0NvbnRleHQsIG5vZGVzLnJldmVyYlNlbmQsIGZvbnQsIHdoZW4sIHBpdGNoLCBkdXJhdGlvbiwgZ2Fpbik7XG4gICAgfVxuICAgIGlmIChub2Rlcy5kZWxheVNlbmQuZ2Fpbi52YWx1ZSA+IDApIHtcbiAgICAgIHRoaXMucGxheWVyLnF1ZXVlV2F2ZVRhYmxlKHRoaXMuYXVkaW9Db250ZXh0LCBub2Rlcy5kZWxheVNlbmQsIGZvbnQsIHdoZW4sIHBpdGNoLCBkdXJhdGlvbiwgZ2Fpbik7XG4gICAgfVxuICB9XG5cbiAgcGxheUJlYXRBdCh3aGVuLCBiZWF0LCBicG0pIHtcbiAgICBpZiAoIWJlYXQpIHJldHVybjtcbiAgICBjb25zdCBOID0gKDQgKiA2MCkgLyBicG07XG4gICAgY29uc3QgaGFzU29sbyA9IFsuLi50aGlzLnRyYWNrU3RhdGUudmFsdWVzKCldLnNvbWUoaXRlbSA9PiBpdGVtLnNvbG8pO1xuXG4gICAgYmVhdC5mb3JFYWNoKChzbG90LCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRUcmFja1N0YXRlKGtleSk7XG4gICAgICBpZiAoc3RhdGUubXV0ZWQpIHJldHVybjtcbiAgICAgIGlmIChoYXNTb2xvICYmICFzdGF0ZS5zb2xvKSByZXR1cm47XG5cbiAgICAgIGNvbnN0IG5vZGVzID0gdGhpcy5nZXRUcmFja05vZGVzKGtleSk7XG4gICAgICBsZXQgdG91Y2hlZCA9IGZhbHNlO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsb3QuZHJ1bXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdGhpcy5wbGF5RHJ1bSh3aGVuLCBzbG90LmRydW1zW2ldLCBub2Rlcyk7XG4gICAgICAgIHRvdWNoZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBzbG90Lm5vdGVzLmZvckVhY2gobm90ZSA9PiB7XG4gICAgICAgIGNvbnN0IFtpbnN0cnVtZW50LCBwaXRjaGVzLCBkdXJhdGlvbiwgbGV2ZWxdID0gbm90ZTtcbiAgICAgICAgY29uc3QgaW5mbyA9IHRoaXMucGxheWVyLmxvYWRlci5pbnN0cnVtZW50SW5mbyhpbnN0cnVtZW50KTtcbiAgICAgICAgaWYgKHdpbmRvd1tpbmZvLnZhcmlhYmxlXSkge1xuICAgICAgICAgIHRoaXMucXVldWVUb1RyYWNrTm9kZXMod2luZG93W2luZm8udmFyaWFibGVdLCB3aGVuLCBwaXRjaGVzLCBkdXJhdGlvbiAqIE4sICgxIC8gMTI3KSAqIGxldmVsLCBub2Rlcyk7XG4gICAgICAgICAgdG91Y2hlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jYWNoZUluc3RydW1lbnQoaW5mbyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodG91Y2hlZCAmJiB0eXBlb2YgdGhpcy5vbkJlYXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5vbkJlYXQoa2V5LCB3aGVuKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwgIigoKT0+e1widXNlIHN0cmljdFwiO3ZhciBuPXs0MTM6bj0+e24uZXhwb3J0cz1KU09OLnBhcnNlKCd7XCI1dGhcIjpcIjEwMDAwMDAxMDAwMFwiLFwiTTcjNXN1czRcIjpcIjEwMDAwMTAwMTAwMVwiLFwiNyM1c3VzNFwiOlwiMTAwMDAxMDAxMDEwXCIsXCJzdXM0XCI6XCIxMDAwMDEwMTAwMDBcIixcIk03c3VzNFwiOlwiMTAwMDAxMDEwMDAxXCIsXCI3c3VzNFwiOlwiMTAwMDAxMDEwMDEwXCIsXCI3bm81XCI6XCIxMDAwMTAwMDAwMTBcIixcImF1Z1wiOlwiMTAwMDEwMDAxMDAwXCIsXCJNN2I2XCI6XCIxMDAwMTAwMDEwMDFcIixcIm1hajcjNVwiOlwiMTAwMDEwMDAxMDAxXCIsXCI3IzVcIjpcIjEwMDAxMDAwMTAxMFwiLFwiN2IxM1wiOlwiMTAwMDEwMDAxMDEwXCIsXCJNXCI6XCIxMDAwMTAwMTAwMDBcIixcIm1hajdcIjpcIjEwMDAxMDAxMDAwMVwiLFwiN3RoXCI6XCIxMDAwMTAwMTAwMTBcIixcIjZ0aFwiOlwiMTAwMDEwMDEwMTAwXCIsXCI3YWRkNlwiOlwiMTAwMDEwMDEwMTEwXCIsXCI3YjZcIjpcIjEwMDAxMDAxMTAxMFwiLFwiTWI1XCI6XCIxMDAwMTAxMDAwMDBcIixcIk03YjVcIjpcIjEwMDAxMDEwMDAwMVwiLFwiN2I1XCI6XCIxMDAwMTAxMDAwMTBcIixcIm1haiM0XCI6XCIxMDAwMTAxMTAwMDFcIixcIjcjMTFcIjpcIjEwMDAxMDExMDAxMFwiLFwiTTYjMTFcIjpcIjEwMDAxMDExMDEwMFwiLFwiNyMxMWIxM1wiOlwiMTAwMDEwMTExMDEwXCIsXCJtIzVcIjpcIjEwMDEwMDAwMTAwMFwiLFwibWI2TTdcIjpcIjEwMDEwMDAwMTAwMVwiLFwibTcjNVwiOlwiMTAwMTAwMDAxMDEwXCIsXCJtXCI6XCIxMDAxMDAwMTAwMDBcIixcIm0vbWE3XCI6XCIxMDAxMDAwMTAwMDFcIixcIm03XCI6XCIxMDAxMDAwMTAwMTBcIixcIm02XCI6XCIxMDAxMDAwMTAxMDBcIixcIm1NYWo3YjZcIjpcIjEwMDEwMDAxMTAwMVwiLFwiZGltXCI6XCIxMDAxMDAxMDAwMDBcIixcIm9NN1wiOlwiMTAwMTAwMTAwMDAxXCIsXCJtN2I1XCI6XCIxMDAxMDAxMDAwMTBcIixcImRpbTdcIjpcIjEwMDEwMDEwMDEwMFwiLFwibzdNN1wiOlwiMTAwMTAwMTAwMTAxXCIsXCI0dGhcIjpcIjEwMDEwMTAwMDAxMFwiLFwibWFkZDRcIjpcIjEwMDEwMTAxMDAwMFwiLFwibTdhZGQxMVwiOlwiMTAwMTAxMDEwMDEwXCIsXCIrYWRkIzlcIjpcIjEwMDExMDAwMTAwMFwiLFwiNyM1IzlcIjpcIjEwMDExMDAwMTAxMFwiLFwiNyM5XCI6XCIxMDAxMTAwMTAwMTBcIixcIjEzIzlcIjpcIjEwMDExMDAxMDExMFwiLFwiNyM5YjEzXCI6XCIxMDAxMTAwMTEwMTBcIixcIm1hajcjOSMxMVwiOlwiMTAwMTEwMTEwMDAxXCIsXCI3IzkjMTFcIjpcIjEwMDExMDExMDAxMFwiLFwiMTMjOSMxMVwiOlwiMTAwMTEwMTEwMTEwXCIsXCI3IzkjMTFiMTNcIjpcIjEwMDExMDExMTAxMFwiLFwic3VzMlwiOlwiMTAxMDAwMDEwMDAwXCIsXCJNOSM1c3VzNFwiOlwiMTAxMDAxMDAxMDAxXCIsXCJzdXMyNFwiOlwiMTAxMDAxMDEwMDAwXCIsXCJNOXN1czRcIjpcIjEwMTAwMTAxMDAwMVwiLFwiMTF0aFwiOlwiMTAxMDAxMDEwMDEwXCIsXCI5c3VzNFwiOlwiMTAxMDAxMDEwMDEwXCIsXCIxM3N1czRcIjpcIjEwMTAwMTAxMDExMFwiLFwiOW5vNVwiOlwiMTAxMDEwMDAwMDEwXCIsXCIxM25vNVwiOlwiMTAxMDEwMDAwMTEwXCIsXCJNIzVhZGQ5XCI6XCIxMDEwMTAwMDEwMDBcIixcIm1hajkjNVwiOlwiMTAxMDEwMDAxMDAxXCIsXCI5IzVcIjpcIjEwMTAxMDAwMTAxMFwiLFwiOWIxM1wiOlwiMTAxMDEwMDAxMDEwXCIsXCJNYWRkOVwiOlwiMTAxMDEwMDEwMDAwXCIsXCJtYWo5XCI6XCIxMDEwMTAwMTAwMDFcIixcIjl0aFwiOlwiMTAxMDEwMDEwMDEwXCIsXCI2LzlcIjpcIjEwMTAxMDAxMDEwMFwiLFwibWFqMTNcIjpcIjEwMTAxMDAxMDEwMVwiLFwiTTdhZGQxM1wiOlwiMTAxMDEwMDEwMTAxXCIsXCIxM3RoXCI6XCIxMDEwMTAwMTAxMTBcIixcIk05YjVcIjpcIjEwMTAxMDEwMDAwMVwiLFwiOWI1XCI6XCIxMDEwMTAxMDAwMTBcIixcIjEzYjVcIjpcIjEwMTAxMDEwMDExMFwiLFwiOSM1IzExXCI6XCIxMDEwMTAxMDEwMTBcIixcIm1hajkjMTFcIjpcIjEwMTAxMDExMDAwMVwiLFwiOSMxMVwiOlwiMTAxMDEwMTEwMDEwXCIsXCI2OSMxMVwiOlwiMTAxMDEwMTEwMTAwXCIsXCJNMTMjMTFcIjpcIjEwMTAxMDExMDEwMVwiLFwiMTMjMTFcIjpcIjEwMTAxMDExMDExMFwiLFwiOSMxMWIxM1wiOlwiMTAxMDEwMTExMDEwXCIsXCJtOSM1XCI6XCIxMDExMDAwMDEwMTBcIixcIm1hZGQ5XCI6XCIxMDExMDAwMTAwMDBcIixcIm1NOVwiOlwiMTAxMTAwMDEwMDAxXCIsXCJtOVwiOlwiMTAxMTAwMDEwMDEwXCIsXCJtNjlcIjpcIjEwMTEwMDAxMDEwMFwiLFwibTEzXCI6XCIxMDExMDAwMTAxMTBcIixcIm1NYWo5YjZcIjpcIjEwMTEwMDAxMTAwMVwiLFwibTliNVwiOlwiMTAxMTAwMTAwMDEwXCIsXCJtMTFBXCI6XCIxMDExMDEwMDEwMTBcIixcIm0xMVwiOlwiMTAxMTAxMDEwMDEwXCIsXCJiOXN1c1wiOlwiMTEwMDAxMDEwMDEwXCIsXCIxMWI5XCI6XCIxMTAwMDEwMTAwMTBcIixcIjdzdXM0YjliMTNcIjpcIjExMDAwMTAxMTAxMFwiLFwiYWx0N1wiOlwiMTEwMDEwMDAwMDEwXCIsXCI3IzViOVwiOlwiMTEwMDEwMDAxMDEwXCIsXCJNYWRkYjlcIjpcIjExMDAxMDAxMDAwMFwiLFwiTTdiOVwiOlwiMTEwMDEwMDEwMDAxXCIsXCI3YjlcIjpcIjExMDAxMDAxMDAxMFwiLFwiMTNiOVwiOlwiMTEwMDEwMDEwMTEwXCIsXCI3YjliMTNcIjpcIjExMDAxMDAxMTAxMFwiLFwiNyM1YjkjMTFcIjpcIjExMDAxMDEwMTAxMFwiLFwiN2I5IzExXCI6XCIxMTAwMTAxMTAwMTBcIixcIjEzYjkjMTFcIjpcIjExMDAxMDExMDExMFwiLFwiN2I5YjEzIzExXCI6XCIxMTAwMTAxMTEwMTBcIixcIm1iNmI5XCI6XCIxMTAxMDAwMDEwMDBcIixcIjdiOSM5XCI6XCIxMTAxMTAwMTAwMTBcIn0nKX0sNzIyOm49PntuLmV4cG9ydHM9SlNPTi5wYXJzZSgne1wibWFqb3IgcGVudGF0b25pY1wiOlwiMTAxMDEwMDEwMTAwXCIsXCJpb25pYW4gcGVudGF0b25pY1wiOlwiMTAwMDExMDEwMDAxXCIsXCJtaXhvbHlkaWFuIHBlbnRhdG9uaWNcIjpcIjEwMDAxMTAxMDAxMFwiLFwicml0dXNlblwiOlwiMTAxMDAxMDEwMTAwXCIsXCJlZ3lwdGlhblwiOlwiMTAxMDAxMDEwMDEwXCIsXCJuZW9wb2xpdGFuIG1ham9yIHBlbnRhdG9uaWNcIjpcIjEwMDAxMTEwMDAxMFwiLFwidmlldG5hbWVzZSAxXCI6XCIxMDAxMDEwMTEwMDBcIixcInBlbG9nXCI6XCIxMTAxMDAwMTEwMDBcIixcImt1bW9pam9zaGlcIjpcIjExMDAwMTAxMTAwMFwiLFwiaGlyYWpvc2hpXCI6XCIxMDExMDAwMTEwMDBcIixcIml3YXRvXCI6XCIxMTAwMDExMDAwMTBcIixcImluLXNlblwiOlwiMTEwMDAxMDEwMDEwXCIsXCJseWRpYW4gcGVudGF0b25pY1wiOlwiMTAwMDEwMTEwMDAxXCIsXCJtYWxrb3MgcmFnYVwiOlwiMTAwMTAxMDAxMDEwXCIsXCJsb2NyaWFuIHBlbnRhdG9uaWNcIjpcIjEwMDEwMTEwMDAxMFwiLFwibWlub3IgcGVudGF0b25pY1wiOlwiMTAwMTAxMDEwMDEwXCIsXCJtaW5vciBzaXggcGVudGF0b25pY1wiOlwiMTAwMTAxMDEwMTAwXCIsXCJmbGF0IHRocmVlIHBlbnRhdG9uaWNcIjpcIjEwMTEwMDAxMDEwMFwiLFwiZmxhdCBzaXggcGVudGF0b25pY1wiOlwiMTAxMDEwMDExMDAwXCIsXCJzY3JpYWJpblwiOlwiMTEwMDEwMDEwMTAwXCIsXCJ3aG9sZSB0b25lIHBlbnRhdG9uaWNcIjpcIjEwMDAxMDEwMTAxMFwiLFwibHlkaWFuICM1UCBwZW50YXRvbmljXCI6XCIxMDAwMTAxMDEwMDFcIixcImx5ZGlhbiBkb21pbmFudCBwZW50YXRvbmljXCI6XCIxMDAwMTAxMTAwMTBcIixcIm1pbm9yICM3TSBwZW50YXRvbmljXCI6XCIxMDAxMDEwMTAwMDFcIixcInN1cGVyIGxvY3JpYW4gcGVudGF0b25pY1wiOlwiMTAwMTEwMTAwMDEwXCIsXCJtaW5vciBoZXhhdG9uaWNcIjpcIjEwMTEwMTAxMDAwMVwiLFwiYXVnbWVudGVkXCI6XCIxMDAxMTAwMTEwMDFcIixcIm1ham9yIGJsdWVzXCI6XCIxMDExMTAwMTAxMDBcIixcInBpb25naW9cIjpcIjEwMTAwMTAxMDExMFwiLFwicHJvbWV0aGV1cyBuZW9wb2xpdGFuXCI6XCIxMTAwMTAxMDAxMTBcIixcInByb21ldGhldXNcIjpcIjEwMTAxMDEwMDExMFwiLFwibXlzdGVyeSAjMVwiOlwiMTEwMDEwMTAxMDEwXCIsXCJzaXggdG9uZSBzeW1tZXRyaWNcIjpcIjExMDAxMTAwMTEwMFwiLFwid2hvbGUgdG9uZVwiOlwiMTAxMDEwMTAxMDEwXCIsXCJtZXNzaWFlblxcJ3MgbW9kZSAjNVwiOlwiMTEwMDAxMTEwMDAxXCIsXCJtaW5vciBibHVlc1wiOlwiMTAwMTAxMTEwMDEwXCIsXCJsb2NyaWFuIG1ham9yXCI6XCIxMDEwMTExMDEwMTBcIixcImRvdWJsZSBoYXJtb25pYyBseWRpYW5cIjpcIjExMDAxMDExMTAwMVwiLFwiaGFybW9uaWMgbWlub3JcIjpcIjEwMTEwMTAxMTAwMVwiLFwiYWx0ZXJlZFwiOlwiMTEwMTEwMTAxMDEwXCIsXCJsb2NyaWFuICMyXCI6XCIxMDExMDExMDEwMTBcIixcIm1peG9seWRpYW4gYjZcIjpcIjEwMTAxMTAxMTAxMFwiLFwibHlkaWFuIGRvbWluYW50XCI6XCIxMDEwMTAxMTAxMTBcIixcImx5ZGlhblwiOlwiMTAxMDEwMTEwMTAxXCIsXCJseWRpYW4gYXVnbWVudGVkXCI6XCIxMDEwMTAxMDExMDFcIixcImRvcmlhbiBiMlwiOlwiMTEwMTAxMDEwMTEwXCIsXCJtZWxvZGljIG1pbm9yXCI6XCIxMDExMDEwMTAxMDFcIixcImxvY3JpYW5cIjpcIjExMDEwMTEwMTAxMFwiLFwidWx0cmFsb2NyaWFuXCI6XCIxMTAxMTAxMDExMDBcIixcImxvY3JpYW4gNlwiOlwiMTEwMTAxMTAwMTEwXCIsXCJhdWdtZW50ZWQgaGVwdGF0b25pY1wiOlwiMTAwMTExMDExMDAxXCIsXCJyb21hbmlhbiBtaW5vclwiOlwiMTAxMTAwMTEwMTEwXCIsXCJkb3JpYW4gIzRcIjpcIjEwMTEwMDExMDExMFwiLFwibHlkaWFuIGRpbWluaXNoZWRcIjpcIjEwMTEwMDExMDEwMVwiLFwicGhyeWdpYW5cIjpcIjExMDEwMTAxMTAxMFwiLFwibGVhZGluZyB3aG9sZSB0b25lXCI6XCIxMDEwMTAxMDEwMTFcIixcImx5ZGlhbiBtaW5vclwiOlwiMTAxMDEwMTExMDEwXCIsXCJwaHJ5Z2lhbiBkb21pbmFudFwiOlwiMTEwMDExMDExMDEwXCIsXCJiYWxpbmVzZVwiOlwiMTEwMTAxMDExMDAxXCIsXCJuZW9wb2xpdGFuIG1ham9yXCI6XCIxMTAxMDEwMTAxMDFcIixcImFlb2xpYW5cIjpcIjEwMTEwMTAxMTAxMFwiLFwiaGFybW9uaWMgbWFqb3JcIjpcIjEwMTAxMTAxMTAwMVwiLFwiZG91YmxlIGhhcm1vbmljIG1ham9yXCI6XCIxMTAwMTEwMTEwMDFcIixcImRvcmlhblwiOlwiMTAxMTAxMDEwMTEwXCIsXCJodW5nYXJpYW4gbWlub3JcIjpcIjEwMTEwMDExMTAwMVwiLFwiaHVuZ2FyaWFuIG1ham9yXCI6XCIxMDAxMTAxMTAxMTBcIixcIm9yaWVudGFsXCI6XCIxMTAwMTExMDAxMTBcIixcImZsYW1lbmNvXCI6XCIxMTAxMTAxMTAwMTBcIixcInRvZGkgcmFnYVwiOlwiMTEwMTAwMTExMDAxXCIsXCJtaXhvbHlkaWFuXCI6XCIxMDEwMTEwMTAxMTBcIixcInBlcnNpYW5cIjpcIjExMDAxMTEwMTAwMVwiLFwibWFqb3JcIjpcIjEwMTAxMTAxMDEwMVwiLFwiZW5pZ21hdGljXCI6XCIxMTAwMTAxMDEwMTFcIixcIm1ham9yIGF1Z21lbnRlZFwiOlwiMTAxMDExMDAxMTAxXCIsXCJseWRpYW4gIzlcIjpcIjEwMDExMDExMDEwMVwiLFwibWVzc2lhZW5cXCdzIG1vZGUgIzRcIjpcIjExMTAwMTExMTAwMVwiLFwicHVydmkgcmFnYVwiOlwiMTEwMDExMTExMDAxXCIsXCJzcGFuaXNoIGhlcHRhdG9uaWNcIjpcIjExMDExMTAxMTAxMFwiLFwiYmVib3BcIjpcIjEwMTAxMTAxMDExMVwiLFwiYmVib3AgbWlub3JcIjpcIjEwMTExMTAxMDExMFwiLFwiYmVib3AgbWFqb3JcIjpcIjEwMTAxMTAxMTEwMVwiLFwiYmVib3AgbG9jcmlhblwiOlwiMTEwMTAxMTExMDEwXCIsXCJtaW5vciBiZWJvcFwiOlwiMTAxMTAxMDExMDExXCIsXCJkaW1pbmlzaGVkXCI6XCIxMDExMDExMDExMDFcIixcImljaGlrb3N1Y2hvXCI6XCIxMDEwMTExMTAxMDFcIixcIm1pbm9yIHNpeCBkaW1pbmlzaGVkXCI6XCIxMDExMDEwMTExMDFcIixcImhhbGYtd2hvbGUgZGltaW5pc2hlZFwiOlwiMTEwMTEwMTEwMTEwXCIsXCJrYWZpIHJhZ2FcIjpcIjEwMDExMTAxMDExMVwiLFwibWVzc2lhZW5cXCdzIG1vZGUgIzZcIjpcIjEwMTAxMTEwMTAxMVwiLFwiY29tcG9zaXRlIGJsdWVzXCI6XCIxMDExMTExMTAxMTBcIixcIm1lc3NpYWVuXFwncyBtb2RlICMzXCI6XCIxMDExMTAxMTEwMTFcIixcIm1lc3NpYWVuXFwncyBtb2RlICM3XCI6XCIxMTExMDExMTExMDFcIixcImNocm9tYXRpY1wiOlwiMTExMTExMTExMTExXCIsXCJpb25pYW5cIjpcIjEwMTAxMTAxMDEwMVwiLFwibWlub3JcIjpcIjEwMTEwMTAxMTAxMFwifScpfX0sZT17fTtmdW5jdGlvbiBvKGEpe3ZhciBpPWVbYV07aWYodm9pZCAwIT09aSlyZXR1cm4gaS5leHBvcnRzO3ZhciByPWVbYV09e2V4cG9ydHM6e319O3JldHVybiBuW2FdKHIsci5leHBvcnRzLG8pLHIuZXhwb3J0c31vLmQ9KG4sZSk9Pntmb3IodmFyIGEgaW4gZSlvLm8oZSxhKSYmIW8ubyhuLGEpJiZPYmplY3QuZGVmaW5lUHJvcGVydHkobixhLHtlbnVtZXJhYmxlOiEwLGdldDplW2FdfSl9LG8ubz0obixlKT0+T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4sZSksby5yPW49PntcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfTt2YXIgYT17fTsoKCk9PntvLnIoYSksby5kKGEse2Nob3JkOigpPT5tLGNob3JkczooKT0+dCxpbmxpbmVDaG9yZDooKT0+cixzY2FsZTooKT0+YyxzY2FsZXM6KCk9PnN9KTt2YXIgbj1vKDcyMiksZT1vKDQxMyksaT1mdW5jdGlvbihvKXt2YXIgYT1vLnNjYWxlLGk9by5jaG9yZCxyPWF8fGksdD1hP1wic2NhbGVcIjpcImNob3JkXCI7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIHIpdGhyb3cgbmV3IEVycm9yKFwiXCIuY29uY2F0KHIsXCIgaXMgbm90IGEgdmFsaWQgaW5wdXQgZm9yIFwiKS5jb25jYXQodCkpO3ZhciBzLG0sYz1yLmluZGV4T2YoXCIgXCIpOy0xPT09Yz8ocz1yLnNsaWNlKDEpLG09clswXSxcImJcIiE9PXJbMV0mJlwiI1wiIT09clsxXXx8KHM9ci5zbGljZSgyKSxtKz1yWzFdKSk6KHM9ci5zbGljZSgtMT09PWM/MTpjKzEpLG09ci5zbGljZSgwLGMpKTt2YXIgZD1mdW5jdGlvbihuKXtyZXR1cm57XCJDI1wiOlwiRGJcIixcIkQjXCI6XCJFYlwiLFwiRiNcIjpcIkdiXCIsXCJHI1wiOlwiQWJcIixcIkEjXCI6XCJCYlwifVtuLnRvVXBwZXJDYXNlKCldfHxuLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK24uc2xpY2UoMSl9KG0ucmVwbGFjZSgvXFxkL2csXCJcIikpLGw9XCJcIiE9PW0ucmVwbGFjZSgvXFxEL2csXCJcIik/K20ucmVwbGFjZSgvXFxEL2csXCJcIik6NDtpZihpc05hTihsKSl0aHJvdyBuZXcgRXJyb3IoXCJcIi5jb25jYXQobVswXSxcIiBkb2VzIG5vdCBoYXZlIGEgdmFsaWQgb2N0YXZlXCIpKTtpZighbltzXSYmIWVbc10pdGhyb3cgbmV3IEVycm9yKFwiXCIuY29uY2F0KHIsXCIgaXMgbm90IGEgdmFsaWQgXCIpLmNvbmNhdCh0KSk7Zm9yKHZhciBiPWZ1bmN0aW9uKG4sZSl7dmFyIG89W1wiQ1wiLFwiRGJcIixcIkRcIixcIkViXCIsXCJFXCIsXCJGXCIsXCJHYlwiLFwiR1wiLFwiQWJcIixcIkFcIixcIkJiXCIsXCJCXCJdLGE9by5tYXAoKGZ1bmN0aW9uKG4pe3JldHVybiBuK2V9KSksaT1vLm1hcCgoZnVuY3Rpb24obil7cmV0dXJuIG4rKGUrMSl9KSkscj1hLmNvbmNhdChpKTtyZXR1cm4gci5zbGljZShyLmluZGV4T2YobitlKSl9KGQsbCksdT1bXSxwPTAsaD0wLGY9YT9uOmU7cDxmW3NdLmxlbmd0aDspXCIxXCI9PT1mW3NdW3BdJiZ1LnB1c2goYltoXSkscCsrLGgrKztyZXR1cm4gdX0scj1mdW5jdGlvbihuKXt2YXIgZSxvLGE9XCJiOXN1c1wiLHI9NDtyZXR1cm4gbi5pbmNsdWRlcyhhKT8obz1hLGU9bi5zbGljZSgwLG4uaW5kZXhPZihhKSkpOihlPW5bMF0sbz1uLnNsaWNlKDEpLFwiYlwiIT09blsxXSYmXCIjXCIhPT1uWzFdfHwoZSs9blsxXSxvPW4uc2xpY2UoMikpKSxuLmluY2x1ZGVzKFwiX1wiKSYmKHI9K24uc3BsaXQoXCJfXCIpWzFdLG89by5zbGljZSgwLG8uaW5kZXhPZihcIl9cIikpKSxpKHtjaG9yZDplK3IrXCIgXCIrb30pfSx0PWZ1bmN0aW9uKCl7cmV0dXJuIE9iamVjdC5rZXlzKGUpfSxzPWZ1bmN0aW9uKCl7cmV0dXJuIE9iamVjdC5rZXlzKG4pfSxtPWZ1bmN0aW9uKG4pe3JldHVybiBpKHtjaG9yZDpufSl9LGM9ZnVuY3Rpb24obil7cmV0dXJuIGkoe3NjYWxlOm59KX19KSgpO3ZhciBpPWV4cG9ydHM7Zm9yKHZhciByIGluIGEpaVtyXT1hW3JdO2EuX19lc01vZHVsZSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGksXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWFpbi5qcy5tYXAiLCAiLyoqXG4gKiBUYWtlIGEgc3RyaW5nIGlucHV0IGFuZCBjaGVjayBpZiBpdCBzIGEgbm90ZSBuYW1lIG9yIG5vdFxuICogQHBhcmFtICB7U3RyaW5nfSBzdHIgTm90ZSBuYW1lIGUuZy4gYzRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IFJldHVybiB0cnVlIGZvciBjNCBvciByZXR1cm4gZmFsc2UgZm9yIHNvbWV0aGluZyBsaWtlIENNXG4gKi9cbmV4cG9ydCBjb25zdCBpc05vdGUgPSAoc3RyOiBzdHJpbmcpOiBib29sZWFuID0+XG4gIC9eW2EtZ0EtR10oPzojfGIpP1xcZCQvLnRlc3Qoc3RyKTtcblxuLyoqXG4gKiBUYWtlIGEgU3RyaW5nIGlucHV0IHN1Y2ggYXMgeHh4W3h4W3h4XV1cbiAqIGFuZCByZXR1cm4gYW4gQXJyYXkgYXMgWyd4JywgJ3gnLCAneCcsIFsneCcsICd4JywgWyd4JywgJ3gnXV1dXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbmV4cG9ydCBjb25zdCBleHBhbmRTdHIgPSAoc3RyOiBzdHJpbmcpOiBhbnkgPT4ge1xuICBzdHIgPSBKU09OLnN0cmluZ2lmeShzdHIuc3BsaXQoJycpKTtcbiAgc3RyID0gc3RyLnJlcGxhY2UoLyxcIlxcW1wiLC9nLCAnLCBbJyk7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKC9cIlxcW1wiLC9nLCAnWycpO1xuICBzdHIgPSBzdHIucmVwbGFjZSgvLFwiXFxdXCIvZywgJ10nKTtcbiAgcmV0dXJuIEpTT04ucGFyc2Uoc3RyKTtcbn07XG5cbi8qKlxuICogQmFzaWMgQXJyYXkgcmFuZG9taXplclxuICogQHBhcmFtICB7QXJyYXl9IGFyclxuICogQHBhcmFtICB7Ym9vbGVhbn0gZnVsbFNodWZmbGUgRW5zdXJlIG5vIGVsZW1lbnRzIHJlbWFpbiBpbiBvbGQgcGxhY2VcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5leHBvcnQgY29uc3Qgc2h1ZmZsZSA9IChhcnI6IGFueVtdLCBmdWxsU2h1ZmZsZTogYm9vbGVhbiA9IHRydWUpOiBzdHJpbmdbXSA9PiB7XG4gIGNvbnN0IGxhc3RJbmRleDogbnVtYmVyID0gYXJyLmxlbmd0aCAtIDE7XG5cbiAgLy8gU2h1ZmZsZSBhbGdvcml0aG0gYnkgUmljaGFyZCBEdXJzdGVuZmVsZCAoRG9uYWxkIEUuIEtudXRoKSwgYWxzbyBSb25hbGQgRmlzaGVyIGFuZCBGcmFuayBZYXRlcy5cbiAgLy8gXCJGdWxsIFNodWZmbGVcIiBNb2RpZmljYXRpb24gdG8gZW5zdXJlIG5vIGVsZW1lbnRzIHJlbWFpbiBpbiB0aGVpciBvcmlnaW5hbCBwbGFjZSAoYnkgdGFraW5nIGVhY2ggZWxlbWVudCBvbmNlXG4gIC8vIGFuZCBzd2FwcGluZyB3aXRoIGFueSByZW1haW5pbmcgZWxlbWVudHMpXG4gIGFyci5mb3JFYWNoKChlbCwgaWR4OiBudW1iZXIpID0+IHtcbiAgICBpZiAoaWR4ID49IGxhc3RJbmRleCkge1xuICAgICAgLy8gTm8gc2h1ZmZsaW5nIGxhc3QgZWxlbWVudFxuICAgICAgLy8gT25lIGJlZm9yZSBsYXN0IGlzIGFsd2F5cyBzd2FwcGVkIHdpdGggbGFzdCBhdCB0aGUgZW5kIG9mIHRoZSBsb29wXG4gICAgICAvLyBTaW5jZSBwcmV2aW91cyBzd2FwcyBjYW4gbW92ZSBsYXN0IGVsZW1lbnQgaW50byBvdGhlciBwbGFjZXMsIHRoZXJlIGlzIHN0aWxsIGEgcmFuZG9tIHNodWZmbGUgb2YgbGFzdCBlbGVtZW50XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFN3YXAgZWwgd2l0aCBvbmUgb2YgdGhlIGhpZ2hlciBlbGVtZW50cyByYW5kb21seVxuICAgIGxldCBybmQ7XG4gICAgcm5kID0gZnVsbFNodWZmbGVcbiAgICAgID8gLy8gUGljayByYW5kb20gbnVtYmVyIGZyb20gaWR4KzEgdG8gbGFzdEluZGV4IChNb2RpZmllZCBhbGdvcml0aG0sIChOLTEpISBjb21iaW5hdGlvbnMpXG4gICAgICAgIC8vIE1hdGgucmFuZG9tIC0+IFswLCAxKSAtPiBbMCwgbGFzdEluZGV4LWlkeCApIC0tZmxvb3ItPiBbMCwgbGFzdEluZGV4LWlkeC0xXVxuICAgICAgICAvLyBybmQgPSBbMCwgbGFzdEluZGV4LWlkeC0xXSArIDEgKyBpZHggPSBbMSArIGlkeCwgbGFzdEluZGV4XVxuICAgICAgICAvLyAoT3JpZ2luYWwgYWxnb3JpdGhtIHdvdWxkIHBpY2sgcm5kID0gW2lkeCwgbGFzdEluZGV4XSwgdGh1cyBhbnkgZWxlbWVudCBjb3VsZCBhcnJpdmUgYmFjayBpbnRvIGl0cyBzbG90KVxuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobGFzdEluZGV4IC0gaWR4KSkgKyAxICsgaWR4XG4gICAgICA6IC8vIFBpY2sgcmFuZG9tIG51bWJlciBmcm9tIGlkeCB0byBsYXN0SW5kZXggKFVubW9kaWZpZWQgUmljaGFyZCBEdXJzdGVuZmVsZCwgTiEgY29tYmluYXRpb25zKVxuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobGFzdEluZGV4ICsgMSAtIGlkeCkpICsgaWR4O1xuICAgIGFycltpZHhdID0gYXJyW3JuZF07XG4gICAgYXJyW3JuZF0gPSBlbDtcbiAgfSk7XG5cbiAgcmV0dXJuIGFycjtcbn07XG5cbi8qKlxuICogUmV0dXJuIGFuIGFycmF5IG9mIG51bWJlcnMgcmVsYXRpdmUgdG8gbWF4TGV2ZWwgfHwgMTI3IG9yZGVyZWQgaW4gYSBTaW5lIHdhdmUgZm9ybWF0XG4gKiBUaGlzIGlzIHVzZWQgYnkgdGhlIGBzaXp6bGVgIHBhcmFtIG9mIHRoZSBgY2xpcGAgbWV0aG9kIHRvIGFkZCBhIHJ1ZGltZW50YXJ5IHZhcmlhdGlvbiB0byB0aGUgYWNjZW50IG9mIGVhY2ggbm90ZVxuICogQHBhcmFtIHtOdW1iZXJ9IG1heExldmVsIEEgbnVtYmVyIGJldHdlZW4gbm90IG1vcmUgdGhhbiAxMjdcbiAqIEByZXR1cm4ge0FycmF5fSAgRXhhbXBsZSBvdXRwdXQgWzYzLCA5MCwgMTEwLCAxMjcsIDExMCwgOTAsIDYzLCAwLCA2MywgOTAsIDExMCwgMTI3LCAxMTAsIDkwLCA2MywgMF1cbiAqL1xuZXhwb3J0IGNvbnN0IHNpenpsZU1hcCA9IChtYXhMZXZlbDogbnVtYmVyID0gMTI3KTogbnVtYmVyW10gPT4ge1xuICBjb25zdCBwaSA9IE1hdGguUEk7XG4gIGNvbnN0IHBpQXJyOiBudW1iZXJbXSA9IFtcbiAgICBwaSAvIDYsXG4gICAgcGkgLyA0LFxuICAgIHBpIC8gMyxcbiAgICBwaSAvIDIsXG4gICAgKDIgKiBwaSkgLyAzLFxuICAgICgzICogcGkpIC8gNCxcbiAgICAoNSAqIHBpKSAvIDYsXG4gICAgcGksXG4gIF07XG4gIGNvbnN0IHBpQXJyUmV2OiBudW1iZXJbXSA9IFtcbiAgICAwLFxuICAgIHBpIC8gNixcbiAgICBwaSAvIDQsXG4gICAgcGkgLyAzLFxuICAgIHBpIC8gMixcbiAgICAoMiAqIHBpKSAvIDMsXG4gICAgKDMgKiBwaSkgLyA0LFxuICAgICg1ICogcGkpIC8gNixcbiAgXTtcbiAgcGlBcnJSZXYucmV2ZXJzZSgpO1xuICBjb25zdCBhcnI6IG51bWJlcltdID0gcGlBcnIuY29uY2F0KHBpQXJyUmV2KTtcbiAgcmV0dXJuIGFyci5tYXAoZWxlbWVudCA9PiBNYXRoLnJvdW5kKE1hdGguc2luKGVsZW1lbnQpICogbWF4TGV2ZWwpKTtcbn07XG5cbi8qKlxuICogUGljayBvbmUgaXRlbSByYW5kb21seSBmcm9tIGFuIGFycmF5IGFuZCByZXR1cm4gaXRcbiAqIEBwYXJhbSBhcnJcbiAqL1xuZXhwb3J0IGNvbnN0IHBpY2tPbmUgPSAoYXJyOiBhbnlbXSkgPT5cbiAgYXJyLmxlbmd0aCA+IDEgPyBhcnJbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV0gOiBhcnJbMF07XG5cbi8qKlxuICogQm9vbGVhbiBnZW5lcmF0b3JcbiAqL1xuZXhwb3J0IGNvbnN0IGRpY2UgPSAoKSA9PiAhIU1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG5cbi8qKlxuICogUG9seWZpbGwgZm9yIEFycmF5LnByb3RvdHlwZS5mbGF0XG4gKi9cbmV4cG9ydCBjb25zdCBmbGF0ID0gKGFycjogYW55W11bXSkgPT5cbiAgYXJyLnJlZHVjZSgoYWNjLCB2YWwpID0+IGFjYy5jb25jYXQodmFsKSwgW10pO1xuIiwgImltcG9ydCB7IHNjYWxlIH0gZnJvbSAnaGFybW9uaWNzJztcbmltcG9ydCB7IHBpY2tPbmUsIGRpY2UgfSBmcm9tICcuL3V0aWxzJztcblxuLyoqXG4gKiBHZXQgdGhlIGNob3JkcyB0aGF0IGdvIHdpdGggYSBnaXZlbiBzY2FsZS9tb2RlXG4gKiBUaGlzIGlzIHVzZWZ1bCBvbmx5IGluIGNhc2UgeW91IHdhbnQgdG8gY2hlY2sgd2hhdCBjaG9yZHMgd29yayB3aXRoIGEgc2NhbGUvbW9kZVxuICogc28gdGhhdCB5b3UgY2FuIGNvbWUgdXAgd2l0aCBjaG9yZCBwcm9ncmVzc2lvbnNcbiAqIEBwYXJhbSAge1N0cmluZ30gbW9kZSBlLmcuIG1ham9yXG4gKiBAcmV0dXJuIHtBcnJheX0gZS5nLlsnSScsICdpaScsICdpaWknLCAnSVYnLCAnVicsICd2aScsICd2aWlcdTAwQjAnXVxuICovXG5leHBvcnQgY29uc3QgZ2V0Q2hvcmREZWdyZWVzID0gKG1vZGU6IHN0cmluZykgPT4ge1xuICBjb25zdCB0aGVSb21hbnM6IE5WUDxzdHJpbmdbXT4gPSB7XG4gICAgaW9uaWFuOiBbJ0knLCAnaWknLCAnaWlpJywgJ0lWJywgJ1YnLCAndmknLCAndmlpXHUwMEIwJ10sXG4gICAgZG9yaWFuOiBbJ2knLCAnaWknLCAnSUlJJywgJ0lWJywgJ3YnLCAndmlcdTAwQjAnLCAnVklJJ10sXG4gICAgcGhyeWdpYW46IFsnaScsICdJSScsICdJSUknLCAnaXYnLCAndlx1MDBCMCcsICdWSScsICd2aWknXSxcbiAgICBseWRpYW46IFsnSScsICdJSScsICdpaWknLCAnaXZcdTAwQjAnLCAnVicsICd2aScsICd2aWknXSxcbiAgICBtaXhvbHlkaWFuOiBbJ0knLCAnaWknLCAnaWlpXHUwMEIwJywgJ0lWJywgJ3YnLCAndmknLCAnVklJJ10sXG4gICAgYWVvbGlhbjogWydpJywgJ2lpXHUwMEIwJywgJ0lJSScsICdpdicsICd2JywgJ1ZJJywgJ1ZJSSddLFxuICAgIGxvY3JpYW46IFsnaVx1MDBCMCcsICdJSScsICdpaWknLCAnaXYnLCAnVicsICdWSScsICd2aWknXSxcbiAgICAnbWVsb2RpYyBtaW5vcic6IFsnaScsICdpaScsICdJSUkrJywgJ0lWJywgJ1YnLCAndmlcdTAwQjAnLCAndmlpXHUwMEIwJ10sXG4gICAgJ2hhcm1vbmljIG1pbm9yJzogWydpJywgJ2lpXHUwMEIwJywgJ0lJSSsnLCAnaXYnLCAnVicsICdWSScsICd2aWlcdTAwQjAnXSxcbiAgfTtcbiAgdGhlUm9tYW5zLm1ham9yID0gdGhlUm9tYW5zLmlvbmlhbjtcbiAgdGhlUm9tYW5zLm1pbm9yID0gdGhlUm9tYW5zLmFlb2xpYW47XG5cbiAgcmV0dXJuIHRoZVJvbWFuc1ttb2RlXSB8fCBbXTtcbn07XG5cbmNvbnN0IGlkeEJ5RGVncmVlOiBOVlA8bnVtYmVyPiA9IHtcbiAgaTogMCxcbiAgaWk6IDEsXG4gIGlpaTogMixcbiAgaXY6IDMsXG4gIHY6IDQsXG4gIHZpOiA1LFxuICB2aWk6IDYsXG59O1xuXG4vKipcbiAqIEdldCBhIGNob3JkIG5hbWUgZnJvbSBkZWdyZWVcbiAqIEBwYXJhbSAge1N0cmluZ30gcm9tYW4gZS5nLiBpaSBPUiBpaVx1MDBCMCBPUiBWN1xuICogQHJldHVybiB7U3RyaW5nfSBlLmcuIG0gT1IgbTdiNSBPUiBNYWo3XG4gKi9cbmNvbnN0IGdldENob3JkTmFtZSA9IChyb21hbjogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgLy8gcmVtb3ZlIGFueSBub24gY2hhcmFjdGVyXG4gIGNvbnN0IHN0ciA9IHJvbWFuLnJlcGxhY2UoL1xcVy9nLCAnJyk7XG4gIGxldCBwcmVmaXggPSAnTSc7XG4gIC8vIGNoZWNrIGlmIGl0IHMgbG93ZXJjYXNlXG4gIGlmIChzdHIudG9Mb3dlckNhc2UoKSA9PT0gc3RyKSB7XG4gICAgcHJlZml4ID0gJ20nO1xuICB9XG4gIGlmIChyb21hbi5pbmRleE9mKCdcdTAwQjAnKSA+IC0xKSB7XG4gICAgcmV0dXJuIHByZWZpeCArICc3YjUnO1xuICB9XG4gIGlmIChyb21hbi5pbmRleE9mKCcrJykgPiAtMSkge1xuICAgIHJldHVybiBwcmVmaXggKyAnIzUnO1xuICB9XG5cbiAgaWYgKHJvbWFuLmluZGV4T2YoJzcnKSA+IC0xKSB7XG4gICAgcmV0dXJuIHByZWZpeCA9PT0gJ00nID8gJ21hajcnIDogJ203JztcbiAgfVxuXG4gIHJldHVybiBwcmVmaXg7XG59O1xuXG4vKipcbiAqIFRha2UgdGhlIHNwZWNpZmllZCBzY2FsZSBhbmQgZGVncmVlcyBhbmQgcmV0dXJuIHRoZSBjaG9yZCBuYW1lcyBmb3IgdGhlbVxuICogVGhlc2UgY2FuIGJlIHVzZWQgYXMgdGhlIHZhbHVlIGZvciB0aGUgYG5vdGVzYCBwYXJhbSBvZiB0aGUgYGNsaXBgIG1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IG5vdGVPY3RhdmVTY2FsZSBlLmcuICdDNCBtYWpvcidcbiAqIEBwYXJhbSAge1N0cmluZ30gY2hvcmREZWdyZXNzIGUuZy4gJ0kgSVYgViBJVidcbiAqIEByZXR1cm4ge1N0cmluZ30gZS5nLiAnQ00gRk0gR00gRk0nXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRDaG9yZHNCeVByb2dyZXNzaW9uID0gKFxuICBub3RlT2N0YXZlU2NhbGU6IHN0cmluZyxcbiAgY2hvcmREZWdyZXNzOiBzdHJpbmdcbik6IHN0cmluZyA9PiB7XG4gIC8vIFNldCB0aGUgb2N0YXZlIGlmIG1pc3NpbmdcbiAgLy8gRm9yIGV4YW1wbGUgaWYgdGhlIG1ldGhvZCB3YXMgY2FsbGVkIHdpdGggYEMgbWFqb3JgIGluc3RlYWQgb2YgYEM0IG1ham9yYCwgdGhlbiBhZGQgdGhlIDRcbiAgY29uc3Qgbm90ZU9jdGF2ZVNjYWxlQXJyID0gbm90ZU9jdGF2ZVNjYWxlLnNwbGl0KCcgJyk7XG4gIGlmICghbm90ZU9jdGF2ZVNjYWxlQXJyWzBdLm1hdGNoKC9cXGQvKSkge1xuICAgIG5vdGVPY3RhdmVTY2FsZUFyclswXSArPSAnNCc7XG4gICAgbm90ZU9jdGF2ZVNjYWxlID0gbm90ZU9jdGF2ZVNjYWxlQXJyLmpvaW4oJyAnKTtcbiAgfVxuXG4gIC8vIEdldCB0aGUgc2NhbGUgZnJvbSB0aGUgZ2l2ZW4gbm90ZSBhbmQgc2NhbGUvbW9kZSBjb21iaW5hdGlvblxuICBjb25zdCBtb2RlID0gc2NhbGUobm90ZU9jdGF2ZVNjYWxlKTtcbiAgY29uc3QgY2hvcmREZWdyZWVzQXJyID0gY2hvcmREZWdyZXNzLnJlcGxhY2UoL1xccyosK1xccyovZywgJyAnKS5zcGxpdCgnICcpO1xuICAvLyBOb3cgd2UgaGF2ZSBzb21ldGhpbmcgbGlrZSBbJ2knLCAnaWknLCAnSVYnXVxuICAvLyBDb252ZXJ0IGl0IHRvIGEgY2hvcmQgZmFtaWx5IHN1Y2ggYXMgWydDbScsICdEbScsICdGTSddXG4gIGNvbnN0IGNob3JkRmFtaWx5ID0gY2hvcmREZWdyZWVzQXJyLm1hcCgocm9tYW4sIGlkeCkgPT4ge1xuICAgIGNvbnN0IGNob3JkTmFtZSA9IGdldENob3JkTmFtZShyb21hbik7IC8vIGUuZy4gbVxuICAgIC8vIGdldCB0aGUgaW5kZXggdG8gYmUgdXNlZCBieSByZW1vdmluZyBhbnkgZGlnaXQgb3Igbm9uIGFscGhhYmV0IGNoYXJhY3RlclxuICAgIGNvbnN0IHNjYWxlSWQgPSBpZHhCeURlZ3JlZVtyb21hbi5yZXBsYWNlKC9cXFd8XFxkL2csICcnKS50b0xvd2VyQ2FzZSgpXTsgLy8gZS5nLiAwXG4gICAgLy8gZ2V0IHRoZSBub3RlIGl0c2VsZlxuICAgIGNvbnN0IG5vdGUgPSBtb2RlW3NjYWxlSWRdOyAvLyBlLmcuIENcbiAgICAvLyBnZXQgdGhlIG9jdGF2ZSBvZiB0aGUgbm90ZTtcbiAgICBjb25zdCBvY3QgPSBub3RlLnJlcGxhY2UoL1xcRCsvLCAnJyk7IC8vIGUuZy4gNFxuICAgIC8vIG5vdyBnZXQgdGhlIGNob3JkXG4gICAgcmV0dXJuIG5vdGUucmVwbGFjZSgvXFxkLywgJycpICsgY2hvcmROYW1lICsgJ18nICsgb2N0O1xuICB9KTtcblxuICByZXR1cm4gY2hvcmRGYW1pbHkudG9TdHJpbmcoKS5yZXBsYWNlKC8sL2csICcgJyk7XG59O1xuXG5jb25zdCBnZXRQcm9nRmFjdG9yeSA9ICh7IFQsIFAsIEQgfTogVFBEKSA9PiB7XG4gIHJldHVybiAoY291bnQ6IG51bWJlciA9IDQpID0+IHtcbiAgICBjb25zdCBjaG9yZHMgPSBbXTtcblxuICAgIC8vIFB1c2ggcm9vdC90b25pY1xuICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoVCkpO1xuXG4gICAgbGV0IGkgPSAxO1xuXG4gICAgLy8gUGljayBhIHByZWRvbWluYW50XG4gICAgaWYgKGkgPCBjb3VudCAtIDEpIHtcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoUCkpO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIC8vIFRyeSBhbm90aGVyIHByZWRvbWluYW50XG4gICAgaWYgKGkgPCBjb3VudCAtIDEgJiYgZGljZSgpKSB7XG4gICAgICBjaG9yZHMucHVzaChwaWNrT25lKFApKTtcbiAgICAgIGkrKztcbiAgICB9XG5cbiAgICAvLy8vLy8vLy8gNCBvciBtb3JlLy8vLy8vLy8vL1xuICAgIGlmIChpIDwgY291bnQgLSAxKSB7XG4gICAgICAvLyBQaWNrIGEgZG9taW5hbnRcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoRCkpO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIGlmIChpIDwgY291bnQgLSAxKSB7XG4gICAgICAvLyBQaWNrIGEgcHJlZG9taW5hbnRcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoUCkpO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIGlmIChpIDwgY291bnQgLSAxKSB7XG4gICAgICAvLyBQaWNrIGEgZG9taW5hbnRcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoRCkpO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIC8vIFBpY2sgYSBwcmVkb21pbmFudCBpZiBwb3NzaWJsZVxuICAgIGlmIChpIDwgY291bnQgLSAxICYmIGRpY2UoKSkge1xuICAgICAgY2hvcmRzLnB1c2gocGlja09uZShQKSk7XG4gICAgICBpKys7XG4gICAgfVxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIC8vIEZpbGwgdGhlIHJlc3Qgd2l0aCBkb21pbmFudFxuICAgIHdoaWxlIChpIDwgY291bnQpIHtcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoRCkpO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIHJldHVybiBjaG9yZHM7XG4gIH07XG59O1xuXG5jb25zdCBNID0gZ2V0UHJvZ0ZhY3RvcnkoeyBUOiBbJ0knLCAndmknXSwgUDogWydpaScsICdJViddLCBEOiBbJ1YnXSB9KTtcbmNvbnN0IG0gPSBnZXRQcm9nRmFjdG9yeSh7IFQ6IFsnaScsICdWSSddLCBQOiBbJ2lpJywgJ2l2J10sIEQ6IFsnViddIH0pO1xuXG4vKipcbiAqIEdlbmVyYXRlIGEgY2hvcmQgcHJvZ3Jlc3Npb24gYmFzZWQgb24gYmFzaWMgbXVzaWMgdGhlb3J5XG4gKiB3aGVyZSB3ZSBmb2xsb3cgdG9uaWMgdG8gb3B0aW9uYWxseSBwcmVkb21pbmFudCBhbmQgdGhlbiBkb21pbmFudFxuICogYW5kIHRoZW4gcmFuZG9tbHkgdG8gcHJlZG9taW5hbnQgYW5kIGNvbnRpbnVlIHRoaXMgdGlsbCB3ZSByZWFjaCBgY291bnRgXG4gKiBAcGFyYW0gc2NhbGVUeXBlIGUuZy4gTSAoZm9yIG1ham9yIGNob3JkIHByb2dyZXNzaW9uKSwgbSAoZm9yIG1pbm9yIGNob3JkIHByb2dyZXNzaW9uKVxuICogQHBhcmFtIGNvdW50IGUuZy4gNFxuICovXG5leHBvcnQgY29uc3QgcHJvZ3Jlc3Npb24gPSAoc2NhbGVUeXBlOiBwcm9ncmVzc2lvblNjYWxlLCBjb3VudDogbnVtYmVyID0gNCkgPT4ge1xuICBpZiAoc2NhbGVUeXBlID09PSAnbWFqb3InIHx8IHNjYWxlVHlwZSA9PT0gJ00nKSB7XG4gICAgcmV0dXJuIE0oY291bnQpO1xuICB9XG5cbiAgaWYgKHNjYWxlVHlwZSA9PT0gJ21pbm9yJyB8fCBzY2FsZVR5cGUgPT09ICdtJykge1xuICAgIHJldHVybiBtKGNvdW50KTtcbiAgfVxufTtcbiIsICJpbXBvcnQgeyBpbmxpbmVDaG9yZCB9IGZyb20gJ2hhcm1vbmljcyc7XG5cbmV4cG9ydCBjb25zdCBSRV9TRVBBUkFUT1IgPSAvXFx8LztcbmV4cG9ydCBjb25zdCBSRV9QQVRURVJOID0gL14oPzpbeF8tXXxcXFsuKz9cXF0pKyQvO1xuZXhwb3J0IGNvbnN0IFJFX05VTUJFUiA9IC9eKD86XFwuP1xcZCt8XFxkKyg/OlxcLlxcZCspPykkLztcbmV4cG9ydCBjb25zdCBSRV9DSE9SRCA9IC9eW2EtZ0EtR11bXiNcXHNdKlxcZCsoPzpcXC5cXC4pPyQvO1xuZXhwb3J0IGNvbnN0IFJFX05PVEUgPSAvXlthLWdBLUddWyNiXT9cXGQrJC87XG5leHBvcnQgY29uc3QgUkVfTU9ERSA9IC9eKD8hW2l2SVZdezEsM30pW2Etel17Mix9LztcbmV4cG9ydCBjb25zdCBSRV9QUk9HID0gL15baXZJVl17MSwzfVx1MDBCMD8kLztcbmV4cG9ydCBjb25zdCBSRV9UUklNID0gL1xcLiskLztcblxuY29uc3QgQ0FDSEUgPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0KHZhbHVlKSB7XG4gIGxldCBkYXRhID0gW107XG4gIHRyeSB7XG4gICAgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlLnNwbGl0KC8oPz1bXFxkW1xcXXhfLV0pLykpO1xuICAgIGRhdGEgPSBkYXRhLnJlcGxhY2UoLyxcIlxcW1wiLC9nLCAnLCBbJyk7XG4gICAgZGF0YSA9IGRhdGEucmVwbGFjZSgvXCJcXFtcIiwvZywgJ1snKTtcbiAgICBkYXRhID0gZGF0YS5yZXBsYWNlKC8sXCJcXF1cIi9nLCAnXScpO1xuICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gaWdub3JlXG4gIH1cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZXZlbCh2YWx1ZSkge1xuICBpZiAoIUNBQ0hFW3ZhbHVlXSkge1xuICAgIGlmICh2YWx1ZS5pbmNsdWRlcygnJScpKSB7XG4gICAgICBDQUNIRVt2YWx1ZV0gPSAxMjcgKiBwYXJzZUZsb2F0KGAuJHt2YWx1ZX1gKTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlLmluY2x1ZGVzKCcvJykpIHtcbiAgICAgIGNvbnN0IFthLCBiXSA9IHZhbHVlLnNwbGl0KCcvJyk7XG5cbiAgICAgIENBQ0hFW3ZhbHVlXSA9IGEgLyBiO1xuICAgIH0gZWxzZSBpZiAodmFsdWUuaW5jbHVkZXMoJyonKSkge1xuICAgICAgY29uc3QgW2EsIGJdID0gdmFsdWUuc3BsaXQoJyonKTtcblxuICAgICAgQ0FDSEVbdmFsdWVdID0gYSAqIGI7XG4gICAgfSBlbHNlIHtcbiAgICAgIENBQ0hFW3ZhbHVlXSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gQ0FDSEVbdmFsdWVdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGUocmUsIHZhbHVlKSB7XG4gIGlmICghQ0FDSEVbcmUuc291cmNlICsgdmFsdWVdKSB7XG4gICAgQ0FDSEVbcmUuc291cmNlICsgdmFsdWVdID0gcmUudGVzdCh2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIENBQ0hFW3JlLnNvdXJjZSArIHZhbHVlXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvZ3Jlc3Npb24odmFsdWUpIHtcbiAgcmV0dXJuIHZhbGlkYXRlKFJFX1BST0csIHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGF0dGVybih2YWx1ZSkge1xuICByZXR1cm4gdmFsaWRhdGUoUkVfUEFUVEVSTiwgdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgcmV0dXJuIHZhbGlkYXRlKFJFX05VTUJFUiwgdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDaG9yZCh2YWx1ZSkge1xuICByZXR1cm4gdmFsaWRhdGUoUkVfQ0hPUkQsIHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTm90ZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsaWRhdGUoUkVfTk9URSwgdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNNb2RlKHZhbHVlKSB7XG4gIHJldHVybiB2YWxpZGF0ZShSRV9NT0RFLCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUeXBlKHZhbHVlKSB7XG4gIGNvbnN0IGtleSA9IGBUJHt2YWx1ZX1gO1xuICBpZiAoIUNBQ0hFW2tleV0pIHtcbiAgICBpZiAoaXNOb3RlKHZhbHVlKSkgQ0FDSEVba2V5XSA9ICdub3RlJztcbiAgICBlbHNlIGlmIChpc0Nob3JkKHZhbHVlKSkgQ0FDSEVba2V5XSA9ICdjaG9yZCc7XG4gICAgZWxzZSBpZiAoaXNQYXR0ZXJuKHZhbHVlKSkgQ0FDSEVba2V5XSA9ICdwYXR0ZXJuJztcbiAgICBlbHNlIGlmIChpc01vZGUodmFsdWUpKSBDQUNIRVtrZXldID0gJ21vZGUnO1xuICAgIGVsc2UgaWYgKGlzTnVtYmVyKHZhbHVlKSkgQ0FDSEVba2V5XSA9ICdudW1iZXInO1xuICAgIGVsc2UgQ0FDSEVba2V5XSA9ICd2YWx1ZSc7XG4gIH1cbiAgcmV0dXJuIENBQ0hFW2tleV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm0oZXhwcmVzc2lvbikge1xuICBpZiAoIWV4cHJlc3Npb24gfHwgdHlwZW9mIGV4cHJlc3Npb24gIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RpbmcgYSB2YWxpZCBzdHJpbmcsIGdpdmVuICcke2V4cHJlc3Npb259J2ApO1xuICB9XG5cbiAgaWYgKENBQ0hFW2AkJHtleHByZXNzaW9ufWBdKSByZXR1cm4gQ0FDSEVbYCQke2V4cHJlc3Npb259YF07XG5cbiAgY29uc3QgdG9rZW5zID0gZXhwcmVzc2lvbi5zcGxpdCgvXFxzKy8pO1xuXG4gIGlmICghdG9rZW5zLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0aW5nIGEgdmFsaWQgZXhwcmVzc2lvbiwgZ2l2ZW4gJyR7ZXhwcmVzc2lvbn0nYCk7XG4gIH1cblxuICBjb25zdCBhc3QgPSBbXTtcbiAgY29uc3QgY2FycnkgPSBbXTtcblxuICBmdW5jdGlvbiBhZGQodHlwZSwgdmFsdWUpIHtcbiAgICBjb25zdCBpdGVtID0geyB0eXBlLCB2YWx1ZSB9O1xuXG4gICAgaWYgKHR5cGUgPT09ICdudW1iZXInICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGl0ZW0udmFsdWUgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gbGV2ZWwodmFsdWUpIDogdmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09ICdjaG9yZCcgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgaXRlbS52YWx1ZSA9IGlubGluZUNob3JkKHZhbHVlLnJlcGxhY2UoUkVfVFJJTSwgJycpKTtcblxuICAgICAgaWYgKHZhbHVlLmluY2x1ZGVzKCcuLicpKSB7XG4gICAgICAgIGl0ZW0udW5mb2xkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gJ3ZhbHVlJyAmJiB2YWx1ZS5pbmRleE9mKCd4JykgPiAtMSkge1xuICAgICAgY29uc3QgeCA9IHZhbHVlLnNwbGl0KCd4Jyk7XG5cbiAgICAgIGlmICghKGlzTnVtYmVyKHhbMF0pICYmIGlzTnVtYmVyKHhbMV0pKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGluZyB2YWxpZCBudW1iZXJzIGZvciAke3R5cGV9LCBnaXZlbiAnJHt2YWx1ZX0nYCk7XG4gICAgICB9XG5cbiAgICAgIGl0ZW0udmFsdWUgPSBwYXJzZUludCh4WzBdLCAxMCk7XG4gICAgICBpdGVtLnJlcGVhdCA9IHBhcnNlSW50KHhbMV0sIDEwKTtcbiAgICAgIGl0ZW0udHlwZSA9ICdudW1iZXInO1xuICAgIH1cblxuICAgIGFzdC5wdXNoKGl0ZW0pO1xuICB9XG5cbiAgdG9rZW5zLnJlZHVjZSgocHJldiwgY3VyLCBpKSA9PiB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBjb25zdCBuZXh0ID0gdG9rZW5zW2kgKyAxXTtcbiAgICBjb25zdCBsYXN0ID0gYXN0W2FzdC5sZW5ndGggLSAxXSB8fCB7fTtcblxuICAgIGlmIChSRV9TRVBBUkFUT1IudGVzdChjdXIpKSB7XG4gICAgICBhZGQoJ2Nob3JkJywgY3VyLnNwbGl0KFJFX1NFUEFSQVRPUikpO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjdXIgPT09ICdzdHJpbmcnICYmIChcbiAgICAgIChjdXIuaW5jbHVkZXMoJy8nKSAmJiBjdXIuaW5kZXhPZignLycpID4gMClcbiAgICAgIHx8IChjdXIuaW5jbHVkZXMoJyonKSAmJiBjdXIuaW5kZXhPZignKicpID4gMClcbiAgICAgIHx8IChjdXIuaW5jbHVkZXMoJyUnKSAmJiBjdXIuaW5kZXhPZignJScpID4gMClcbiAgICApKSB7XG4gICAgICBhZGQoJ251bWJlcicsIGxldmVsKGN1cikpO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKGN1ci5pbmRleE9mKCclJykgPiAtMSkge1xuICAgICAgaWYgKGN1ciA9PT0gJyUnKSB7XG4gICAgICAgIGlmICghbGFzdC50eXBlKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIGV4cHJlc3Npb24gdG8gcmVwZWF0LCBnaXZlbiAnJHt0b2tlbnMuc2xpY2UoMCwgaSkuam9pbignICcpfSdgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhc3QucmVwZWF0ID0gbGFzdC5yZXBlYXQgfHwgMTtcbiAgICAgICAgbGFzdC5yZXBlYXQgKz0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZCgncGFyYW0nLCBjdXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAoaXNQcm9ncmVzc2lvbihjdXIpKSB7XG4gICAgICBsYXN0LnZhbHVlICs9IGAgJHtjdXJ9YDtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmIChjdXIuY2hhckF0KCkgPT09ICcjJykge1xuICAgICAgYWRkKCdjaGFubmVsJywgY3VyKTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmIChpc05vdGUoY3VyKSB8fCBpc0Nob3JkKGN1cikgfHwgaXNNb2RlKGN1cikgfHwgaXNOdW1iZXIoY3VyKSkge1xuICAgICAgY2FycnkucHVzaChjdXIpO1xuXG4gICAgICBpZiAoXG4gICAgICAgICFuZXh0XG4gICAgICAgIHx8IGNhcnJ5Lmxlbmd0aCA9PT0gM1xuICAgICAgICB8fCAhKGlzTm90ZShuZXh0KSB8fCBpc01vZGUobmV4dCkgfHwgaXNOdW1iZXIobmV4dCkpXG4gICAgICApIHtcbiAgICAgICAgY29uc3Qgb2xkID0gY2Fycnkuc3BsaWNlKDAsIGNhcnJ5Lmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IHRlc3QgPSBvbGRbMF07XG5cbiAgICAgICAgbGV0IG1vZGUgPSBvbGRbMV07XG4gICAgICAgIGxldCBvY3RhdmUgPSBvbGRbMl07XG5cbiAgICAgICAgaWYgKCFvY3RhdmUgJiYgaXNOdW1iZXIobW9kZSkpIHtcbiAgICAgICAgICBvY3RhdmUgPSBtb2RlO1xuICAgICAgICAgIG1vZGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgdGVzdC5sZW5ndGggPCAyXG4gICAgICAgICAgJiYgaXNOb3RlKHRlc3QpXG4gICAgICAgICAgJiYgKGlzTW9kZShtb2RlKSB8fCBpc051bWJlcihvY3RhdmUpKVxuICAgICAgICApIHtcbiAgICAgICAgICBhZGQoJ21vZGUnLCBvbGQuam9pbignICcpKTtcbiAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgfVxuXG4gICAgICAgIG9sZC5mb3JFYWNoKHggPT4ge1xuICAgICAgICAgIGFkZCh4Lmxlbmd0aCA+IDEgfHwgIWlzTm90ZSh4KSA/IGdldFR5cGUoeCkgOiAnbW9kZScsIHgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY3VyID09PSAnc3RyaW5nJyAmJiBjdXIuaW5kZXhPZignLi4nKSA+IC0xKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IGN1ci5zcGxpdCgnLi4nKTtcbiAgICAgIGNvbnN0IG1pbiA9IHBhcnRzWzBdIHx8IDE7XG4gICAgICBjb25zdCBtYXggPSBwYXJ0c1sxXSB8fCBJbmZpbml0eTtcblxuICAgICAgdHlwZSA9ICdzbGljZSc7XG4gICAgICBjdXIgPSBbbWluLCBtYXhdO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY3VyID09PSAnc3RyaW5nJyAmJiAoY3VyLmNoYXJBdCgpID09PSAnLycgfHwgY3VyLmNoYXJBdCgpID09PSAnKicpKSB7XG4gICAgICBjb25zdCBvcGVyYXRvciA9IGN1ci5jaGFyQXQoKSA9PT0gJy8nID8gJ2RpdmlkZScgOiAnbXVsdGlwbHknO1xuICAgICAgY29uc3QgbnVtYmVyID0gY3VyLnN1YnN0cigxKTtcblxuICAgICAgaWYgKCFpc051bWJlcihudW1iZXIpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0aW5nIGEgdmFsaWQgZXhwcmVzc2lvbiB0byAke29wZXJhdG9yfSwgZ2l2ZW4gJyR7dG9rZW5zLnNsaWNlKDAsIGkpLmpvaW4oJyAnKX0gJHtjdXJ9J2ApO1xuICAgICAgfVxuXG4gICAgICBhZGQob3BlcmF0b3IsIHBhcnNlRmxvYXQobnVtYmVyKSk7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAoIXR5cGUgJiYgZ2V0VHlwZShjdXIpID09PSAndmFsdWUnICYmIEFycmF5LmlzQXJyYXkobGFzdC52YWx1ZSkpIHtcbiAgICAgIGxhc3QudmFsdWVbMV0gPSBsYXN0LnZhbHVlWzFdIHx8ICcnO1xuICAgICAgbGFzdC52YWx1ZVsxXSArPSBsYXN0LnZhbHVlWzFdID8gJyAnIDogJyc7XG4gICAgICBsYXN0LnZhbHVlWzFdICs9IGN1cjtcbiAgICAgIHJldHVybiBjdXI7XG4gICAgfVxuXG4gICAgYWRkKHR5cGUgfHwgZ2V0VHlwZShjdXIpLCB0eXBlb2YgY3VyID09PSAnc3RyaW5nJyAmJiBpc051bWJlcihjdXIpID8gcGFyc2VJbnQoY3VyLCAxMCkgOiBjdXIpO1xuICAgIHJldHVybiBjdXI7XG4gIH0sIG51bGwpO1xuXG4gIENBQ0hFW2AkJHtleHByZXNzaW9ufWBdID0gYXN0O1xuICByZXR1cm4gYXN0O1xufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5yZWR1Y2UoKHByZXYsIGN1cikgPT4gcHJldi5jb25jYXQoY3VyKSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwZWF0KHZhbHVlLCB0aW1lcykge1xuICBjb25zdCBvdXQgPSBbXTtcblxuICB3aGlsZSAodGltZXMpIHtcbiAgICBvdXQucHVzaCh2YWx1ZSk7XG4gICAgdGltZXMgLT0gMTtcbiAgfVxuXG4gIHJldHVybiBvdXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5nZShtaW4sIG1heCwgc3RlcCkge1xuICBjb25zdCBhY2MgPSBbXTtcblxuICBpZiAoIXN0ZXApIHtcbiAgICBmb3IgKGxldCBpID0gbWluOyBpIDw9IG1heDsgaSArPSAxKSB7XG4gICAgICBhY2MucHVzaChpKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZGlmZiA9IChtYXggLSBtaW4pIC8gc3RlcDtcblxuICAgIGZvciAobGV0IGkgPSBtaW47IGkgPD0gbWF4OyBpICs9IGRpZmYpIHtcbiAgICAgIGFjYy5wdXNoKGkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhY2M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZSh2YWx1ZSkge1xuICBpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHJldHVybiB2YWx1ZTtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSByZXR1cm4gdmFsdWUubWFwKGNsb25lKTtcblxuICBjb25zdCBjb3B5ID0ge307XG5cbiAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goa2V5ID0+IHtcbiAgICBjb3B5W2tleV0gPSBjbG9uZSh2YWx1ZVtrZXldKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvcHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB6aXAoYSwgYiwgY2IpIHtcbiAgY29uc3QgbWF4ID0gTWF0aC5tYXgoYS5sZW5ndGgsIGIubGVuZ3RoKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG1heDsgaSArPSAxKSB7XG4gICAgaWYgKHR5cGVvZiBhW2ldICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgYltpXSAhPT0gJ3VuZGVmaW5lZCcpIGNiKGFbaV0sIGJbaV0pO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgZ2V0Q2hvcmRzQnlQcm9ncmVzc2lvbiB9IGZyb20gJ3NjcmliYmxldHVuZS9zcmMvcHJvZ3Jlc3Npb24nO1xuaW1wb3J0IHsgc2NhbGUsIGlubGluZUNob3JkIH0gZnJvbSAnaGFybW9uaWNzJztcblxuaW1wb3J0IHsgaXNQcm9ncmVzc2lvbiwgdHJhbnNmb3JtIH0gZnJvbSAnLi90b2tlbml6ZSc7XG5pbXBvcnQgeyByZXBlYXQsIGNsb25lIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2UoaW5wdXQsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShpbnB1dCkpIHJldHVybiBpbnB1dDtcblxuICBjb25zdCBmbiA9IHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyA/IGNhbGxiYWNrIDogKHYgPT4gdik7XG5cbiAgbGV0IHNraXA7XG4gIHJldHVybiBpbnB1dC5yZWR1Y2UoKHByZXYsIGN1ciwgaSkgPT4ge1xuICAgIGNvbnN0IGxhc3QgPSBwcmV2W3ByZXYubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgbmV4dCA9IGlucHV0W2kgKyAxXSB8fCB7fTtcbiAgICBjb25zdCBvbGQgPSBpbnB1dFtpIC0gMV0gfHwge307XG5cbiAgICBpZiAoc2tpcCkge1xuICAgICAgc2tpcCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY3VyKSkge1xuICAgICAgcHJldi5wdXNoKC4uLmN1cik7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAoY3VyLnR5cGUgPT09ICd2YWx1ZScgJiYgY3VyLnZhbHVlID09PSAnLicpIHtcbiAgICAgIGlmIChwcmV2Lmxlbmd0aCA+IDApIHByZXYucHVzaChwcmV2WzBdKTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmIChvbGQudHlwZSA9PT0gJ3BhdHRlcm4nICYmIGN1ci50eXBlID09PSAncGF0dGVybicpIHtcbiAgICAgIHByZXZbcHJldi5sZW5ndGggLSAxXSArPSBjdXIudmFsdWU7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGN1ci50eXBlKSB7XG4gICAgICBjYXNlICdwYXR0ZXJuJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdub3RlJzpcbiAgICAgICAgaWYgKGN1ci5yZXBlYXQpIHByZXYucHVzaCguLi5yZXBlYXQoY3VyLnZhbHVlLCBjdXIucmVwZWF0KSk7XG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY3VyLnZhbHVlKSkgcHJldi5wdXNoKC4uLmN1ci52YWx1ZSk7XG4gICAgICAgIGVsc2UgcHJldi5wdXNoKGN1ci52YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdjaG9yZCc6XG4gICAgICAgIGlmIChjdXIucmVwZWF0KSBwcmV2LnB1c2goLi4ucmVwZWF0KGN1ci52YWx1ZSwgY3VyLnJlcGVhdCkpO1xuICAgICAgICBlbHNlIGlmIChjdXIudW5mb2xkKSBwcmV2LnB1c2goLi4uY3VyLnZhbHVlKTtcbiAgICAgICAgZWxzZSBwcmV2LnB1c2goY3VyLnZhbHVlKTtcblxuICAgICAgICBpZiAoY3VyLnR5cGUgIT09ICdjaG9yZCcpIHtcbiAgICAgICAgICBza2lwID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZGl2aWRlJzpcbiAgICAgICAgcHJldltwcmV2Lmxlbmd0aCAtIDFdIC89IGN1ci52YWx1ZTtcbiAgICAgICAgcmV0dXJuIHByZXY7XG5cbiAgICAgIGNhc2UgJ211bHRpcGx5JzpcbiAgICAgICAgcHJldi5wdXNoKC4uLnJlcGVhdChsYXN0LCBjdXIudmFsdWUgLSAxKSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdzbGljZSc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGxhc3QpKSB7XG4gICAgICAgICAgcHJldltwcmV2Lmxlbmd0aCAtIDFdID0gbGFzdC5zbGljZShjdXIudmFsdWVbMF0gLSAxLCBjdXIudmFsdWVbMV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByZXYucHVzaChjdXIudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdtb2RlJzpcbiAgICAgICAgcHJldltwcmV2Lmxlbmd0aCAtIDFdID0gYCR7bGFzdH0gJHtjdXIudmFsdWV9YDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3BhcmFtJzpcbiAgICAgIGNhc2UgJ3ZhbHVlJzoge1xuICAgICAgICBsZXQgdmFsdWUgPSBudWxsO1xuICAgICAgICBpZiAodHlwZW9mIGNvbnRleHRbY3VyLnZhbHVlXSAhPT0gJ3VuZGVmaW5lZCcpIHZhbHVlID0gY29udGV4dFtjdXIudmFsdWVdO1xuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgZXhwcmVzc2lvbiBmb3IgJyR7Y3VyLnZhbHVlfSdgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZVswXSAmJiB2YWx1ZVswXS50eXBlKSB7XG4gICAgICAgICAgdmFsdWUgPSByZWR1Y2UodmFsdWUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGN1ci5yZXBlYXQpIHtcbiAgICAgICAgICAgIHByZXYucHVzaCguLi5yZXBlYXQodmFsdWUsIGN1ci5yZXBlYXQpLnJlZHVjZSgoX3ByZXYsIF9jdXIpID0+IHtcbiAgICAgICAgICAgICAgX3ByZXYucHVzaCguLi5fY3VyKTtcbiAgICAgICAgICAgICAgcmV0dXJuIF9wcmV2O1xuICAgICAgICAgICAgfSwgW10pKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJldi5wdXNoKC4uLnZhbHVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbHVlID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV07XG4gICAgICAgIGlmIChjdXIucmVwZWF0KSBwcmV2LnB1c2goLi4ucmVwZWF0KHZhbHVlLCBjdXIucmVwZWF0KSk7XG4gICAgICAgIGVsc2UgcHJldi5wdXNoKC4uLnZhbHVlKTtcbiAgICAgIH0gYnJlYWs7XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5oYW5kbGVkICcke2N1ci50eXBlfSdgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJldjtcbiAgfSwgW10pLnJlZHVjZSgobWVtbywgaXRlbSkgPT4ge1xuICAgIGNvbnN0IHByZXYgPSBtZW1vW21lbW8ubGVuZ3RoIC0gMV07XG5cbiAgICBpZiAoXG4gICAgICBBcnJheS5pc0FycmF5KHByZXYpXG4gICAgICAmJiBBcnJheS5pc0FycmF5KGl0ZW0pXG4gICAgICAmJiB0eXBlb2YgaXRlbVswXSA9PT0gJ251bWJlcidcbiAgICAgICYmIGl0ZW0ubGVuZ3RoID09PSAyXG4gICAgKSB7XG4gICAgICBjb25zdCBvZmZzZXQgPSBpdGVtWzFdID09PSBJbmZpbml0eSA/IHByZXYubGVuZ3RoIDogaXRlbVsxXTtcbiAgICAgIGNvbnN0IFtiYXNlLCBsZW5ndGhdID0gU3RyaW5nKG9mZnNldCkuc3BsaXQoL1xcRC8pO1xuXG4gICAgICBtZW1vLnBvcCgpO1xuICAgICAgbWVtby5wdXNoKC4uLnByZXYuc2xpY2UoaXRlbVswXSAtIDEsIGJhc2UpKTtcblxuICAgICAgaWYgKFN0cmluZyhvZmZzZXQpLmluY2x1ZGVzKCc+JykpIHtcbiAgICAgICAgY29uc3QgcGFydHMgPSBtZW1vLnNsaWNlKC1sZW5ndGggLSAxKTtcblxuICAgICAgICBwYXJ0cy5wb3AoKTtcbiAgICAgICAgcGFydHMucmV2ZXJzZSgpO1xuICAgICAgICBtZW1vLnB1c2goLi4ucGFydHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1lbW87XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJyAmJiBpdGVtLmluY2x1ZGVzKCcgJykpIHtcbiAgICAgIGNvbnN0IGNodW5rcyA9IGl0ZW0uc3BsaXQoJyAnKTtcblxuICAgICAgaWYgKGNodW5rcy5zb21lKGlzUHJvZ3Jlc3Npb24pKSB7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IGNodW5rcy5maW5kSW5kZXgoaXNQcm9ncmVzc2lvbik7XG4gICAgICAgIGNvbnN0IFthLCBiXSA9IFtjaHVua3Muc2xpY2UoMCwgb2Zmc2V0KSwgY2h1bmtzLnNsaWNlKG9mZnNldCldO1xuXG4gICAgICAgIG1lbW8ucHVzaChnZXRDaG9yZHNCeVByb2dyZXNzaW9uKGEuam9pbignICcpLCBiLmpvaW4oJyAnKSkuc3BsaXQoJyAnKS5tYXAoeCA9PiBmbihpbmxpbmVDaG9yZCh4KSkpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lbW8ucHVzaChmbihzY2FsZShpdGVtKSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtZW1vLnB1c2goZm4oaXRlbSkpO1xuICAgIH1cbiAgICByZXR1cm4gbWVtbztcbiAgfSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2UoYnVmZmVyKSB7XG4gIGNvbnN0IHRyYWNrcyA9IHt9O1xuICBjb25zdCBtYWluID0gW107XG4gIGNvbnN0IGRhdGEgPSB7fTtcblxuICBsZXQgY2hhbm5lbCA9IG51bGw7XG4gIGxldCBwcmVmaXggPSAnJztcbiAgbGV0IHRyYWNrO1xuICBsZXQgaW5mbyA9IHt9O1xuICBidWZmZXIuc3BsaXQoL1xccj9cXG4vZykuZm9yRWFjaCgobGluZSwgbnRoKSA9PiB7XG4gICAgbGluZSA9IGxpbmUucmVwbGFjZSgvOy4rPyQvLCAnJykudHJpbSgpO1xuICAgIGlmICghbGluZSkgcmV0dXJuO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlmIChsaW5lLmNoYXJBdCgpID09PSAnJScpIHtcbiAgICAgICAgY29uc3QgW25hbWUsIC4uLnZhbHVlXSA9IGxpbmUuc3BsaXQoL1xccysvKTtcblxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGRhdGFbbmFtZV0gPSB0cmFuc2Zvcm0odmFsdWUuam9pbignICcpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChsaW5lLmluZGV4T2YoJyMgJykgPj0gMCkge1xuICAgICAgICBpZiAodHJhY2spIHtcbiAgICAgICAgICB0cmFja3NbdHJhY2tdID0gaW5mbztcbiAgICAgICAgICBjaGFubmVsID0gbnVsbDtcbiAgICAgICAgICBwcmVmaXggPSAnJztcbiAgICAgICAgICBpbmZvID0ge307XG4gICAgICAgIH1cblxuICAgICAgICB0cmFjayA9IGxpbmUuc3BsaXQoL1xccysvKS5zbGljZSgxKS5qb2luKCcgJyk7XG4gICAgICB9IGVsc2UgaWYgKGxpbmUuY2hhckF0KCkgPT09ICc+Jykge1xuICAgICAgICBtYWluLnB1c2godHJhbnNmb3JtKGxpbmUuc3Vic3RyKDEpLnRyaW0oKSkpO1xuICAgICAgfSBlbHNlIGlmIChsaW5lLmNoYXJBdCgpID09PSAnQCcpIHtcbiAgICAgICAgY29uc3QgW25hbWUsIC4uLmV4dGVuZF0gPSBsaW5lLnN1YnN0cigxKS5zcGxpdCgnICcpO1xuXG4gICAgICAgIGlmIChleHRlbmRbMF0gPT09ICc8Jykge1xuICAgICAgICAgIGNvbnN0IGtleSA9IGAke2V4dGVuZFsxXX0jYDtcblxuICAgICAgICAgIE9iamVjdC5rZXlzKGluZm8pXG4gICAgICAgICAgICAuZmlsdGVyKHggPT4geC5pbmRleE9mKGtleSkgPT09IDApXG4gICAgICAgICAgICAuZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgICAgaW5mb1tgJHtuYW1lfSMke2suc3BsaXQoJyMnKVsxXX1gXSA9IGNsb25lKGluZm9ba10pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJlZml4ID0gbmFtZTtcbiAgICAgIH0gZWxzZSBpZiAobGluZS5pbmRleE9mKCc6JykgPiAwKSB7XG4gICAgICAgIGNvbnN0IFtuYW1lLCAuLi52YWx1ZV0gPSBsaW5lLnNwbGl0KCc6Jyk7XG5cbiAgICAgICAgZGF0YVtuYW1lXSA9IHRyYW5zZm9ybSh2YWx1ZS5qb2luKCc6JykudHJpbSgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRpY2tzID0gdHJhbnNmb3JtKGxpbmUpO1xuXG4gICAgICAgIGlmICghdGlja3NbMF0gfHwgdGlja3NbMF0udHlwZSAhPT0gJ2NoYW5uZWwnKSB7XG4gICAgICAgICAgaWYgKCFjaGFubmVsKSB0aHJvdyBuZXcgVHlwZUVycm9yKGBNaXNzaW5nIGNoYW5uZWwsIGdpdmVuICcke2xpbmV9J2ApO1xuXG4gICAgICAgICAgY29uc3QgZW5kID0gaW5mb1tjaGFubmVsXVtpbmZvW2NoYW5uZWxdLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgICAgaWYgKCFlbmQudmFsdWVzKSBlbmQudmFsdWVzID0gW3sgdHlwZTogJ251bWJlcicsIHZhbHVlOiAxMjcgfV07XG4gICAgICAgICAgZW5kLnZhbHVlcy5wdXNoKC4uLnRpY2tzKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBub3RlcyA9IHRpY2tzLmZpbmRJbmRleCh4ID0+IFsnbm90ZScsICdjaG9yZCcsICdwYXJhbSddLmluY2x1ZGVzKHgudHlwZSkpO1xuICAgICAgICBjb25zdCBpbmRleCA9IHRpY2tzLmZpbmRJbmRleCh4ID0+IHgudHlwZSA9PT0gJ3BhdHRlcm4nKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBpbmRleCA+IDAgPyB0aWNrcy5zbGljZShpbmRleCkgOiB0aWNrcztcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdmFsdWUuZmluZEluZGV4KHggPT4geC50eXBlICE9PSAncGF0dGVybicpO1xuICAgICAgICBjb25zdCBpbnB1dHMgPSB0aWNrcy5zbGljZSgwLCBpbmRleCA+IDAgPyBpbmRleCA6IDEpO1xuXG4gICAgICAgIGNoYW5uZWwgPSBwcmVmaXggKyBpbnB1dHNbMF0udmFsdWU7XG4gICAgICAgIGlmICghaW5mb1tjaGFubmVsXSkge1xuICAgICAgICAgIGluZm9bY2hhbm5lbF0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzcGVjO1xuICAgICAgICBpZiAobm90ZXMgPiAwICYmIGluZGV4ID09PSAtMSkge1xuICAgICAgICAgIGNvbnN0IGVuZCA9IGluZm9bY2hhbm5lbF1baW5mb1tjaGFubmVsXS5sZW5ndGggLSAxXTtcblxuICAgICAgICAgIGVuZC5kYXRhID0gdmFsdWUuc2xpY2Uobm90ZXMpO1xuICAgICAgICAgIHNwZWMgPSB7XG4gICAgICAgICAgICBpbnB1dDogZW5kLmlucHV0LFxuICAgICAgICAgICAgdmFsdWVzOiB2YWx1ZS5zbGljZSgxLCBub3RlcyksXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChvZmZzZXQgPiAwKSB7XG4gICAgICAgICAgc3BlYyA9IHtcbiAgICAgICAgICAgIGRhdGE6IHZhbHVlLnNsaWNlKG9mZnNldCksXG4gICAgICAgICAgICBpbnB1dDogdmFsdWUuc2xpY2UoMCwgb2Zmc2V0KSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKG9mZnNldCA9PT0gMCkge1xuICAgICAgICAgIHNwZWMgPSB7IHZhbHVlczogdmFsdWUuc2xpY2UoMSkgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzcGVjID0geyBpbnB1dDogdmFsdWUgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbnB1dHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHNwZWMudmFsdWVzID0gaW5wdXRzLnNsaWNlKDEpO1xuICAgICAgICB9XG4gICAgICAgIGluZm9bY2hhbm5lbF0ucHVzaChzcGVjKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zdCBtc2cgPSB0eXBlb2YgZSA9PT0gJ3N0cmluZycgPyBlIDogZS5tZXNzYWdlO1xuXG4gICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYCR7bXNnfVxcbiAgYXQgbGluZSAke250aCArIDF9XFxuJHtsaW5lfWApO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHRyYWNrKSB7XG4gICAgdHJhY2tzW3RyYWNrXSA9IGluZm87XG4gIH1cbiAgcmV0dXJuIHsgbWFpbiwgZGF0YSwgdHJhY2tzIH07XG59XG4iLCAiZnVuY3Rpb24gZXNjKHZhbHVlKSB7XG4gIHJldHVybiBTdHJpbmcodmFsdWUpXG4gICAgLnJlcGxhY2UoLyYvZywgJyZhbXA7JylcbiAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXG4gICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKTtcbn1cblxuZnVuY3Rpb24gc3BhbihjbHMsIHZhbHVlLCBkYXRhVmFyKSB7XG4gIGNvbnN0IGF0dHJzID0gZGF0YVZhciA/IGAgY2xhc3M9XCIke2Nsc31cIiBkYXRhLXZhcj1cIiR7ZXNjKGRhdGFWYXIpfVwiYCA6IGAgY2xhc3M9XCIke2Nsc31cImA7XG4gIHJldHVybiBgPHNwYW4ke2F0dHJzfT4ke2VzYyh2YWx1ZSl9PC9zcGFuPmA7XG59XG5cbmZ1bmN0aW9uIGNsYXNzaWZ5KHRva2VuKSB7XG4gIGlmICghdG9rZW4pIHJldHVybiBudWxsO1xuICBpZiAodG9rZW4gPT09ICc8JykgcmV0dXJuICd0b2staW5oZXJpdCc7XG4gIGlmICh0b2tlbiA9PT0gJyUnKSByZXR1cm4gJ3Rvay12YXItcmVmJztcbiAgaWYgKHRva2VuLmNoYXJBdCgwKSA9PT0gJyUnKSByZXR1cm4gJ3Rvay12YXItcmVmJztcbiAgaWYgKC9eXFwqXFxkKyQvLnRlc3QodG9rZW4pKSByZXR1cm4gJ3Rvay1yZXBlYXQnO1xuICBpZiAoL15beF9cXC1cXFtcXF1dKyQvLnRlc3QodG9rZW4pKSByZXR1cm4gJ3Rvay1wYXR0ZXJuJztcbiAgaWYgKC9eW2EtZ0EtR11bI2JdP1xcZCskLy50ZXN0KHRva2VuKSkgcmV0dXJuICd0b2stbm90ZSc7XG4gIGlmICh0b2tlbi5pbmNsdWRlcygnfCcpKSByZXR1cm4gJ3Rvay1jaG9yZCc7XG4gIGlmICgvXihtYWpvcnxtaW5vcnxwaHJ5Z2lhbnxkb3JpYW58bWl4b2x5ZGlhbnxsb2NyaWFufGx5ZGlhbikkL2kudGVzdCh0b2tlbikpIHJldHVybiAndG9rLW1vZGUnO1xuICBpZiAoL14oPzpJfElJfElJSXxJVnxWfFZJfFZJSXxpfGlpfGlpaXxpdnx2fHZpfHZpaSlcdTAwQjA/JC8udGVzdCh0b2tlbikpIHJldHVybiAndG9rLXByb2dyZXNzaW9uJztcbiAgaWYgKC9eKD86XFwrXFwrfFxcLlxcLnw+PnxcXCpcXCopJC8udGVzdCh0b2tlbikpIHJldHVybiAndG9rLW9wZXJhdG9yJztcbiAgaWYgKC9eI1xcZCskLy50ZXN0KHRva2VuKSkgcmV0dXJuICd0b2stY2hhbm5lbCc7XG4gIGlmICgvXi0/XFxkKyhcXC5cXGQrKT8kLy50ZXN0KHRva2VuKSkgcmV0dXJuICd0b2stbnVtYmVyJztcbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRva2VuKHRva2VuKSB7XG4gIGNvbnN0IGNscyA9IGNsYXNzaWZ5KHRva2VuKTtcbiAgaWYgKCFjbHMpIHJldHVybiBlc2ModG9rZW4pO1xuICBpZiAoY2xzID09PSAndG9rLXZhci1yZWYnICYmIHRva2VuICE9PSAnJScpIHJldHVybiBzcGFuKGNscywgdG9rZW4sIHRva2VuKTtcbiAgcmV0dXJuIHNwYW4oY2xzLCB0b2tlbik7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRva2Vucyh0ZXh0KSB7XG4gIHJldHVybiB0ZXh0XG4gICAgLnNwbGl0KC8oXFxzKykvKVxuICAgIC5tYXAocGFydCA9PiAoL1xccysvLnRlc3QocGFydCkgPyBwYXJ0IDogcmVuZGVyVG9rZW4ocGFydCkpKVxuICAgIC5qb2luKCcnKTtcbn1cblxuZnVuY3Rpb24gc3BsaXRDb21tZW50KGxpbmUpIHtcbiAgY29uc3QgaWR4ID0gbGluZS5pbmRleE9mKCc7Jyk7XG4gIGlmIChpZHggPCAwKSByZXR1cm4gW2xpbmUsICcnXTtcbiAgcmV0dXJuIFtsaW5lLnNsaWNlKDAsIGlkeCksIGxpbmUuc2xpY2UoaWR4KV07XG59XG5cbmZ1bmN0aW9uIHJlbmRlckJhc2UoYmFzZSkge1xuICBpZiAoIWJhc2UudHJpbSgpKSByZXR1cm4gZXNjKGJhc2UpO1xuXG4gIGlmICgvXlxccyojI1xccysvLnRlc3QoYmFzZSkpIHtcbiAgICByZXR1cm4gYmFzZS5yZXBsYWNlKC9eKFxccyojI1xccyspKC4qKSQvLCAoXywgcDEsIHAyKSA9PiBgJHtlc2MocDEpfSR7c3BhbigndG9rLXN1YnRyYWNrJywgcDIpfWApO1xuICB9XG4gIGlmICgvXlxccyojXFxzKy8udGVzdChiYXNlKSkge1xuICAgIHJldHVybiBiYXNlLnJlcGxhY2UoL14oXFxzKiNcXHMrKSguKikkLywgKF8sIHAxLCBwMikgPT4gYCR7ZXNjKHAxKX0ke3NwYW4oJ3Rvay10cmFjaycsIHAyKX1gKTtcbiAgfVxuICBpZiAoL15cXHMqQC8udGVzdChiYXNlKSkge1xuICAgIHJldHVybiByZW5kZXJUb2tlbnMoYmFzZS5yZXBsYWNlKC88L2csICcgPCAnKSk7XG4gIH1cbiAgaWYgKC9eXFxzKj4vLnRlc3QoYmFzZSkpIHtcbiAgICByZXR1cm4gc3BhbigndG9rLWFycmFuZ2VtZW50JywgYmFzZS50cmltU3RhcnQoKS5jaGFyQXQoMCkpXG4gICAgICArIHJlbmRlclRva2VucyhiYXNlLnRyaW1TdGFydCgpLnNsaWNlKDEpLnJlcGxhY2UoL15cXHMqLywgJyAnKSlcbiAgICAgIC5yZXBsYWNlKC9eLywgZXNjKGJhc2UubWF0Y2goL15cXHMqLylbMF0pKTtcbiAgfVxuICBpZiAoL15cXHMqJVteXFxzXStcXHMrLy50ZXN0KGJhc2UpKSB7XG4gICAgcmV0dXJuIGJhc2UucmVwbGFjZSgvXihcXHMqKSglW15cXHNdKykoXFxzKikoLiopJC8sIChfLCBpLCB2LCBzLCByZXN0KSA9PiAoXG4gICAgICBgJHtlc2MoaSl9JHtzcGFuKCd0b2stdmFyLWRlZicsIHYsIHYpfSR7ZXNjKHMpfSR7cmVuZGVyVG9rZW5zKHJlc3QpfWBcbiAgICApKTtcbiAgfVxuICBpZiAoL15cXHMqI1xcZCsvLnRlc3QoYmFzZSkpIHtcbiAgICByZXR1cm4gcmVuZGVyVG9rZW5zKGJhc2UpO1xuICB9XG4gIHJldHVybiByZW5kZXJUb2tlbnMoYmFzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWdobGlnaHQoaW5wdXQpIHtcbiAgcmV0dXJuIFN0cmluZyhpbnB1dCB8fCAnJylcbiAgICAuc3BsaXQoL1xccj9cXG4vKVxuICAgIC5tYXAobGluZSA9PiB7XG4gICAgICBjb25zdCBbYmFzZSwgY29tbWVudF0gPSBzcGxpdENvbW1lbnQobGluZSk7XG4gICAgICBjb25zdCByZW5kZXJlZCA9IHJlbmRlckJhc2UoYmFzZSk7XG4gICAgICBpZiAoIWNvbW1lbnQpIHJldHVybiByZW5kZXJlZDtcbiAgICAgIHJldHVybiBgJHtyZW5kZXJlZH0ke3NwYW4oJ3Rvay1jb21tZW50JywgY29tbWVudCl9YDtcbiAgICB9KVxuICAgIC5qb2luKCdcXG4nKTtcbn1cblxuIiwgImltcG9ydCB7IGhpZ2hsaWdodCB9IGZyb20gJy4uL2hpZ2hsaWdodCc7XG5cbmZ1bmN0aW9uIGNsYW1wVG9vbHRpcCh4LCB5LCB3aWR0aCA9IDMyMCkge1xuICBjb25zdCBtYXhYID0gTWF0aC5tYXgoOCwgd2luZG93LmlubmVyV2lkdGggLSB3aWR0aCAtIDgpO1xuICBjb25zdCBsZWZ0ID0gTWF0aC5taW4oeCArIDEyLCBtYXhYKTtcbiAgY29uc3QgdG9wID0gTWF0aC5taW4oeSArIDEyLCB3aW5kb3cuaW5uZXJIZWlnaHQgLSA3Mik7XG4gIHJldHVybiB7IGxlZnQsIHRvcCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWRpdG9yKGluaXRpYWxUZXh0LCBvcHRpb25zID0ge30pIHtcbiAgY29uc3Qgd3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3cmFwLmlkID0gJ2VkaXRvci13cmFwJztcblxuICBjb25zdCBwcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcmUnKTtcbiAgcHJlLmlkID0gJ2VkaXRvci1obCc7XG4gIHByZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblxuICBjb25zdCB0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIHRhLmlkID0gJ2VkaXRvcic7XG4gIHRhLnNwZWxsY2hlY2sgPSBmYWxzZTtcbiAgdGEuYXV0b2NvbXBsZXRlID0gJ29mZic7XG4gIHRhLnZhbHVlID0gaW5pdGlhbFRleHQ7XG5cbiAgY29uc3QgdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpcC5pZCA9ICd2YXItdG9vbHRpcCc7XG4gIHRpcC5oaWRkZW4gPSB0cnVlO1xuICB0aXAuaW5uZXJIVE1MID0gJzxzdHJvbmc+PC9zdHJvbmc+PHNwYW4gY2xhc3M9XCJ0b29sdGlwLXJlc29sdmVkXCI+PC9zcGFuPic7XG4gIGNvbnN0IHRpcFRpdGxlID0gdGlwLnF1ZXJ5U2VsZWN0b3IoJ3N0cm9uZycpO1xuICBjb25zdCB0aXBCb2R5ID0gdGlwLnF1ZXJ5U2VsZWN0b3IoJy50b29sdGlwLXJlc29sdmVkJyk7XG5cbiAgZnVuY3Rpb24gc3luYygpIHtcbiAgICBwcmUuaW5uZXJIVE1MID0gYCR7aGlnaGxpZ2h0KHRhLnZhbHVlKX1cXG5gO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZVRvb2x0aXAoKSB7XG4gICAgdGlwLmhpZGRlbiA9IHRydWU7XG4gIH1cblxuICB0YS5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgcHJlLnNjcm9sbFRvcCA9IHRhLnNjcm9sbFRvcDtcbiAgICBwcmUuc2Nyb2xsTGVmdCA9IHRhLnNjcm9sbExlZnQ7XG4gIH0pO1xuXG4gIHRhLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIHN5bmMoKTtcbiAgICBoaWRlVG9vbHRpcCgpO1xuICAgIGlmIChvcHRpb25zLm9uSW5wdXQpIG9wdGlvbnMub25JbnB1dCh0YS52YWx1ZSk7XG4gIH0pO1xuXG4gIHRhLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGUgPT4ge1xuICAgIGlmICghb3B0aW9ucy5yZXNvbHZlVmFyKSByZXR1cm47XG4gICAgY29uc3QgaGl0ID0gZG9jdW1lbnRcbiAgICAgIC5lbGVtZW50c0Zyb21Qb2ludChlLmNsaWVudFgsIGUuY2xpZW50WSlcbiAgICAgIC5maW5kKGVsID0+IGVsLmRhdGFzZXQgJiYgZWwuZGF0YXNldC52YXIpO1xuICAgIGlmICghaGl0KSB7XG4gICAgICBoaWRlVG9vbHRpcCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBuYW1lID0gaGl0LmRhdGFzZXQudmFyO1xuICAgIGNvbnN0IHRleHQgPSBvcHRpb25zLnJlc29sdmVWYXIobmFtZSk7XG4gICAgaWYgKCF0ZXh0KSB7XG4gICAgICBoaWRlVG9vbHRpcCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwb3MgPSBjbGFtcFRvb2x0aXAoZS5jbGllbnRYLCBlLmNsaWVudFkpO1xuICAgIHRpcFRpdGxlLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICB0aXBCb2R5LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICB0aXAuc3R5bGUubGVmdCA9IGAke3Bvcy5sZWZ0fXB4YDtcbiAgICB0aXAuc3R5bGUudG9wID0gYCR7cG9zLnRvcH1weGA7XG4gICAgdGlwLmhpZGRlbiA9IGZhbHNlO1xuICB9KTtcblxuICB0YS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgaGlkZVRvb2x0aXApO1xuXG4gIHN5bmMoKTtcbiAgd3JhcC5hcHBlbmRDaGlsZChwcmUpO1xuICB3cmFwLmFwcGVuZENoaWxkKHRhKTtcbiAgd3JhcC5hcHBlbmRDaGlsZCh0aXApO1xuXG4gIHJldHVybiB7XG4gICAgZWw6IHdyYXAsXG4gICAgdGV4dGFyZWE6IHRhLFxuICAgIG9uOiAoZXZlbnQsIGZuKSA9PiB0YS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmbiksXG4gICAgZ2V0VmFsdWU6ICgpID0+IHRhLnZhbHVlLFxuICAgIHNldFZhbHVlOiB2YWx1ZSA9PiB7XG4gICAgICB0YS52YWx1ZSA9IHZhbHVlO1xuICAgICAgc3luYygpO1xuICAgICAgaGlkZVRvb2x0aXAoKTtcbiAgICB9LFxuICAgIGZvY3VzOiAoKSA9PiB0YS5mb2N1cygpLFxuICB9O1xufVxuXG4iLCAiZnVuY3Rpb24gY2xhbXAodmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHZhbHVlKSk7XG59XG5cbmZ1bmN0aW9uIHNob3J0TmFtZShuYW1lKSB7XG4gIGNvbnN0IHBhcnRzID0gU3RyaW5nKG5hbWUgfHwgJycpLnNwbGl0KC9cXHMrLykuZmlsdGVyKEJvb2xlYW4pO1xuICBpZiAoIXBhcnRzLmxlbmd0aCkgcmV0dXJuICd0cmFjayc7XG4gIHJldHVybiBwYXJ0cy5zbGljZSgwLCAyKS5qb2luKCcgJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNaXhlcihwbGF5ZXIsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXNpZGUnKTtcbiAgcm9vdC5pZCA9ICdtaXhlci1wYW5lbCc7XG4gIHJvb3QuY2xhc3NOYW1lID0gJ2NvbGxhcHNlZCc7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9ICdNaXhlcic7XG5cbiAgY29uc3Qgc3RyaXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHN0cmlwcy5pZCA9ICdtaXhlci1zdHJpcHMnO1xuICBjb25zdCB0cmFuc3BvcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdHJhbnNwb3J0LmlkID0gJ21peGVyLXRyYW5zcG9ydCc7XG5cbiAgY29uc3QgZnggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZnguaWQgPSAnbWl4ZXItZngnO1xuXG4gIGNvbnN0IGluaXRpYWxUZW1wbyA9IG9wdGlvbnMudGVtcG8gfHwgMTQ2O1xuICBjb25zdCBpbml0aWFsQmFycyA9IG9wdGlvbnMuYmFycyB8fCA4O1xuICBjb25zdCBpbml0aWFsVHJhbnNwb3NlID0gb3B0aW9ucy50cmFuc3Bvc2UgfHwgMDtcblxuICBjb25zdCBicG1Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBicG1Sb3cuY2xhc3NOYW1lID0gJ3RyYW5zcG9ydC1yb3cnO1xuICBicG1Sb3cudGV4dENvbnRlbnQgPSAnQlBNJztcbiAgY29uc3QgYnBtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgYnBtLnR5cGUgPSAncmFuZ2UnO1xuICBicG0ubWluID0gJzYwJztcbiAgYnBtLm1heCA9ICcyMDAnO1xuICBicG0udmFsdWUgPSBTdHJpbmcoaW5pdGlhbFRlbXBvKTtcbiAgY29uc3QgYnBtVmFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBicG1WYWwuY2xhc3NOYW1lID0gJ3RyYW5zcG9ydC12YWwnO1xuICBicG1WYWwudGV4dENvbnRlbnQgPSBTdHJpbmcoaW5pdGlhbFRlbXBvKTtcbiAgYnBtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIGJwbVZhbC50ZXh0Q29udGVudCA9IGJwbS52YWx1ZTtcbiAgICBpZiAob3B0aW9ucy5vbkNoYW5nZSkge1xuICAgICAgb3B0aW9ucy5vbkNoYW5nZSh7IHRlbXBvOiBwYXJzZUludChicG0udmFsdWUsIDEwKSB9KTtcbiAgICB9XG4gIH0pO1xuICBicG1Sb3cuYXBwZW5kQ2hpbGQoYnBtKTtcbiAgYnBtUm93LmFwcGVuZENoaWxkKGJwbVZhbCk7XG5cbiAgY29uc3QgYmFyc1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGJhcnNSb3cuY2xhc3NOYW1lID0gJ3RyYW5zcG9ydC1yb3cnO1xuICBiYXJzUm93LnRleHRDb250ZW50ID0gJ0JBUlMnO1xuICBjb25zdCBiYXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIFs0LCA4LCAxNiwgMzJdLmZvckVhY2godmFsdWUgPT4ge1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbi52YWx1ZSA9IFN0cmluZyh2YWx1ZSk7XG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gU3RyaW5nKHZhbHVlKTtcbiAgICBpZiAodmFsdWUgPT09IGluaXRpYWxCYXJzKSBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIGJhcnMuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgfSk7XG4gIGJhcnMuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIGlmIChvcHRpb25zLm9uQ2hhbmdlKSB7XG4gICAgICBvcHRpb25zLm9uQ2hhbmdlKHsgYmFyczogcGFyc2VJbnQoYmFycy52YWx1ZSwgMTApIH0pO1xuICAgIH1cbiAgfSk7XG4gIGJhcnNSb3cuYXBwZW5kQ2hpbGQoYmFycyk7XG5cbiAgY29uc3Qga2V5Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAga2V5Um93LmNsYXNzTmFtZSA9ICd0cmFuc3BvcnQtcm93JztcbiAga2V5Um93LnRleHRDb250ZW50ID0gJ0tFWSc7XG4gIGNvbnN0IGtleSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGtleS50eXBlID0gJ3JhbmdlJztcbiAga2V5Lm1pbiA9ICctMTInO1xuICBrZXkubWF4ID0gJzEyJztcbiAga2V5LnZhbHVlID0gU3RyaW5nKGluaXRpYWxUcmFuc3Bvc2UpO1xuICBjb25zdCBrZXlWYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGtleVZhbC5jbGFzc05hbWUgPSAndHJhbnNwb3J0LXZhbCc7XG4gIGtleVZhbC50ZXh0Q29udGVudCA9IFN0cmluZyhpbml0aWFsVHJhbnNwb3NlID4gMCA/IGArJHtpbml0aWFsVHJhbnNwb3NlfWAgOiBpbml0aWFsVHJhbnNwb3NlKTtcbiAga2V5LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQoa2V5LnZhbHVlLCAxMCk7XG4gICAga2V5VmFsLnRleHRDb250ZW50ID0gdmFsdWUgPiAwID8gYCske3ZhbHVlfWAgOiBTdHJpbmcodmFsdWUpO1xuICAgIGlmIChvcHRpb25zLm9uQ2hhbmdlKSB7XG4gICAgICBvcHRpb25zLm9uQ2hhbmdlKHsgdHJhbnNwb3NlOiB2YWx1ZSB9KTtcbiAgICB9XG4gIH0pO1xuICBrZXlSb3cuYXBwZW5kQ2hpbGQoa2V5KTtcbiAga2V5Um93LmFwcGVuZENoaWxkKGtleVZhbCk7XG5cbiAgdHJhbnNwb3J0LmFwcGVuZENoaWxkKGJwbVJvdyk7XG4gIHRyYW5zcG9ydC5hcHBlbmRDaGlsZChiYXJzUm93KTtcbiAgdHJhbnNwb3J0LmFwcGVuZENoaWxkKGtleVJvdyk7XG5cbiAgY29uc3QgZGVsYXlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGRlbGF5TGFiZWwudGV4dENvbnRlbnQgPSAnRGVsYXkgVGltZSc7XG4gIGNvbnN0IGRlbGF5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIFtcbiAgICBbJzEvNCcsIDEgLyA0XSxcbiAgICBbJzMvOCcsIDMgLyA4XSxcbiAgICBbJzEvMicsIDEgLyAyXSxcbiAgICBbJzMvNCcsIDMgLyA0XSxcbiAgXS5mb3JFYWNoKChbbGFiZWwsIHZhbHVlXSkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGxhYmVsO1xuICAgIG9wdGlvbi52YWx1ZSA9IFN0cmluZyh2YWx1ZSk7XG4gICAgaWYgKHZhbHVlID09PSBwbGF5ZXIuZGVsYXlEaXZpc2lvbikgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICBkZWxheVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9KTtcbiAgZGVsYXlTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIHBsYXllci5zZXREZWxheVRpbWUocGFyc2VGbG9hdChkZWxheVNlbGVjdC52YWx1ZSkpO1xuICB9KTtcbiAgZGVsYXlMYWJlbC5hcHBlbmRDaGlsZChkZWxheVNlbGVjdCk7XG5cbiAgY29uc3QgZmVlZGJhY2tMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGZlZWRiYWNrTGFiZWwudGV4dENvbnRlbnQgPSAnRmVlZGJhY2snO1xuICBjb25zdCBmZWVkYmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGZlZWRiYWNrLnR5cGUgPSAncmFuZ2UnO1xuICBmZWVkYmFjay5taW4gPSAnMCc7XG4gIGZlZWRiYWNrLm1heCA9ICc3NSc7XG4gIGZlZWRiYWNrLnZhbHVlID0gJzM1JztcbiAgZmVlZGJhY2suYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgcGxheWVyLnNldERlbGF5RmVlZGJhY2socGFyc2VJbnQoZmVlZGJhY2sudmFsdWUsIDEwKSAvIDEwMCk7XG4gIH0pO1xuICBmZWVkYmFja0xhYmVsLmFwcGVuZENoaWxkKGZlZWRiYWNrKTtcblxuICBmeC5hcHBlbmRDaGlsZChkZWxheUxhYmVsKTtcbiAgZnguYXBwZW5kQ2hpbGQoZmVlZGJhY2tMYWJlbCk7XG5cbiAgcm9vdC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIHJvb3QuYXBwZW5kQ2hpbGQodHJhbnNwb3J0KTtcbiAgcm9vdC5hcHBlbmRDaGlsZChzdHJpcHMpO1xuICByb290LmFwcGVuZENoaWxkKGZ4KTtcblxuICBjb25zdCBzdHJpcE1hcCA9IG5ldyBNYXAoKTtcblxuICBmdW5jdGlvbiBjcmVhdGVTdHJpcChrZXksIGxhYmVsKSB7XG4gICAgY29uc3Qgc3RhdGUgPSBwbGF5ZXIuZ2V0VHJhY2tTdGF0ZShrZXkpO1xuICAgIGNvbnN0IHN0cmlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3RyaXAuY2xhc3NOYW1lID0gJ20tc3RyaXAnO1xuICAgIHN0cmlwLmRhdGFzZXQua2V5ID0ga2V5O1xuXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hbWUuY2xhc3NOYW1lID0gJ20tbmFtZSc7XG4gICAgbmFtZS50ZXh0Q29udGVudCA9IHNob3J0TmFtZShsYWJlbCk7XG5cbiAgICBjb25zdCB2dSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZ1LmNsYXNzTmFtZSA9ICdtLXZ1JztcblxuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvdy5jbGFzc05hbWUgPSAnbS1yb3cnO1xuXG4gICAgY29uc3Qgc29sbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHNvbG8uY2xhc3NOYW1lID0gJ20tYnRuJztcbiAgICBzb2xvLnRleHRDb250ZW50ID0gJ1MnO1xuICAgIGNvbnN0IG11dGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtdXRlLmNsYXNzTmFtZSA9ICdtLWJ0bic7XG4gICAgbXV0ZS50ZXh0Q29udGVudCA9ICdNJztcblxuICAgIGNvbnN0IHZvbHVtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdm9sdW1lLnR5cGUgPSAncmFuZ2UnO1xuICAgIHZvbHVtZS5jbGFzc05hbWUgPSAnbS1zbGlkZXInO1xuICAgIHZvbHVtZS5taW4gPSAnMCc7XG4gICAgdm9sdW1lLm1heCA9ICcxMDAnO1xuICAgIHZvbHVtZS52YWx1ZSA9IFN0cmluZyhNYXRoLnJvdW5kKHN0YXRlLnZvbHVtZSAqIDEwMCkpO1xuXG4gICAgY29uc3QgcmV2ZXJiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICByZXZlcmIudHlwZSA9ICdyYW5nZSc7XG4gICAgcmV2ZXJiLmNsYXNzTmFtZSA9ICdtLXNlbmQnO1xuICAgIHJldmVyYi5taW4gPSAnMCc7XG4gICAgcmV2ZXJiLm1heCA9ICcxMDAnO1xuICAgIHJldmVyYi52YWx1ZSA9IFN0cmluZyhNYXRoLnJvdW5kKHN0YXRlLnJldmVyYlNlbmQgKiAxMDApKTtcblxuICAgIGNvbnN0IGRlbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkZWxheS50eXBlID0gJ3JhbmdlJztcbiAgICBkZWxheS5jbGFzc05hbWUgPSAnbS1zZW5kJztcbiAgICBkZWxheS5taW4gPSAnMCc7XG4gICAgZGVsYXkubWF4ID0gJzEwMCc7XG4gICAgZGVsYXkudmFsdWUgPSBTdHJpbmcoTWF0aC5yb3VuZChzdGF0ZS5kZWxheVNlbmQgKiAxMDApKTtcblxuICAgIGNvbnN0IHNlbmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VuZHMuY2xhc3NOYW1lID0gJ20tc2VuZHMnO1xuICAgIGNvbnN0IHJXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICByV3JhcC50ZXh0Q29udGVudCA9ICdSZXYnO1xuICAgIHJXcmFwLmFwcGVuZENoaWxkKHJldmVyYik7XG4gICAgY29uc3QgZFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRXcmFwLnRleHRDb250ZW50ID0gJ0RseSc7XG4gICAgZFdyYXAuYXBwZW5kQ2hpbGQoZGVsYXkpO1xuICAgIHNlbmRzLmFwcGVuZENoaWxkKHJXcmFwKTtcbiAgICBzZW5kcy5hcHBlbmRDaGlsZChkV3JhcCk7XG5cbiAgICBmdW5jdGlvbiBzeW5jQnV0dG9ucygpIHtcbiAgICAgIGNvbnN0IGN1ciA9IHBsYXllci5nZXRUcmFja1N0YXRlKGtleSk7XG4gICAgICBzb2xvLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIGN1ci5zb2xvKTtcbiAgICAgIG11dGUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJywgY3VyLm11dGVkKTtcbiAgICB9XG5cbiAgICBzb2xvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgY3VyID0gcGxheWVyLmdldFRyYWNrU3RhdGUoa2V5KTtcbiAgICAgIHBsYXllci5zZXRTb2xvKGtleSwgIWN1ci5zb2xvKTtcbiAgICAgIHN5bmNCdXR0b25zKCk7XG4gICAgfSk7XG4gICAgbXV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGN1ciA9IHBsYXllci5nZXRUcmFja1N0YXRlKGtleSk7XG4gICAgICBwbGF5ZXIuc2V0TXV0ZShrZXksICFjdXIubXV0ZWQpO1xuICAgICAgc3luY0J1dHRvbnMoKTtcbiAgICB9KTtcbiAgICB2b2x1bWUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICBwbGF5ZXIuc2V0Vm9sdW1lKGtleSwgY2xhbXAocGFyc2VJbnQodm9sdW1lLnZhbHVlLCAxMCkgLyAxMDApKTtcbiAgICB9KTtcbiAgICByZXZlcmIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICBwbGF5ZXIuc2V0UmV2ZXJiU2VuZChrZXksIGNsYW1wKHBhcnNlSW50KHJldmVyYi52YWx1ZSwgMTApIC8gMTAwKSk7XG4gICAgfSk7XG4gICAgZGVsYXkuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICBwbGF5ZXIuc2V0RGVsYXlTZW5kKGtleSwgY2xhbXAocGFyc2VJbnQoZGVsYXkudmFsdWUsIDEwKSAvIDEwMCkpO1xuICAgIH0pO1xuXG4gICAgcm93LmFwcGVuZENoaWxkKHNvbG8pO1xuICAgIHJvdy5hcHBlbmRDaGlsZChtdXRlKTtcbiAgICByb3cuYXBwZW5kQ2hpbGQodm9sdW1lKTtcblxuICAgIHN0cmlwLmFwcGVuZENoaWxkKG5hbWUpO1xuICAgIHN0cmlwLmFwcGVuZENoaWxkKHZ1KTtcbiAgICBzdHJpcC5hcHBlbmRDaGlsZChyb3cpO1xuICAgIHN0cmlwLmFwcGVuZENoaWxkKHNlbmRzKTtcbiAgICBzdHJpcHMuYXBwZW5kQ2hpbGQoc3RyaXApO1xuXG4gICAgc3luY0J1dHRvbnMoKTtcbiAgICByZXR1cm4geyBlbDogc3RyaXAsIHZ1LCBuYW1lLCBzeW5jQnV0dG9ucyB9O1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlKGRhdGEpIHtcbiAgICBjb25zdCBlbnRyaWVzID0gQXJyYXkuaXNBcnJheShkYXRhKVxuICAgICAgPyBkYXRhLm1hcCh0cmFjayA9PiAoeyBrZXk6IGAke3RyYWNrWzBdfS8ke3RyYWNrWzFdfWAsIG5hbWU6IHRyYWNrWzFdIH0pKVxuICAgICAgOiBbXTtcbiAgICBjb25zdCBuZXh0S2V5cyA9IG5ldyBTZXQoZW50cmllcy5tYXAoaXRlbSA9PiBpdGVtLmtleSkpO1xuXG4gICAgc3RyaXBNYXAuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgaWYgKCFuZXh0S2V5cy5oYXMoa2V5KSkge1xuICAgICAgICB2YWx1ZS5lbC5yZW1vdmUoKTtcbiAgICAgICAgc3RyaXBNYXAuZGVsZXRlKGtleSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBlbnRyaWVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAoIXN0cmlwTWFwLmhhcyhpdGVtLmtleSkpIHtcbiAgICAgICAgc3RyaXBNYXAuc2V0KGl0ZW0ua2V5LCBjcmVhdGVTdHJpcChpdGVtLmtleSwgaXRlbS5uYW1lKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzdHJpcCA9IHN0cmlwTWFwLmdldChpdGVtLmtleSk7XG4gICAgICAgIHN0cmlwLm5hbWUudGV4dENvbnRlbnQgPSBzaG9ydE5hbWUoaXRlbS5uYW1lKTtcbiAgICAgICAgc3RyaXAuc3luY0J1dHRvbnMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsYXNoVlUoa2V5KSB7XG4gICAgY29uc3Qgc3RyaXAgPSBzdHJpcE1hcC5nZXQoa2V5KTtcbiAgICBpZiAoIXN0cmlwKSByZXR1cm47XG4gICAgc3RyaXAudnUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzdHJpcC52dS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSwgODApO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlKGZvcmNlT3Blbikge1xuICAgIGNvbnN0IG9wZW4gPSB0eXBlb2YgZm9yY2VPcGVuID09PSAnYm9vbGVhbicgPyBmb3JjZU9wZW4gOiByb290LmNsYXNzTGlzdC5jb250YWlucygnY29sbGFwc2VkJyk7XG4gICAgcm9vdC5jbGFzc0xpc3QudG9nZ2xlKCdjb2xsYXBzZWQnLCAhb3Blbik7XG4gICAgcmV0dXJuIG9wZW47XG4gIH1cblxuICBmdW5jdGlvbiBzeW5jVHJhbnNwb3J0KG5leHQgPSB7fSkge1xuICAgIGlmICh0eXBlb2YgbmV4dC50ZW1wbyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGJwbS52YWx1ZSA9IFN0cmluZyhuZXh0LnRlbXBvKTtcbiAgICAgIGJwbVZhbC50ZXh0Q29udGVudCA9IFN0cmluZyhuZXh0LnRlbXBvKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBuZXh0LmJhcnMgPT09ICdudW1iZXInKSB7XG4gICAgICBiYXJzLnZhbHVlID0gU3RyaW5nKG5leHQuYmFycyk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbmV4dC50cmFuc3Bvc2UgPT09ICdudW1iZXInKSB7XG4gICAgICBrZXkudmFsdWUgPSBTdHJpbmcobmV4dC50cmFuc3Bvc2UpO1xuICAgICAga2V5VmFsLnRleHRDb250ZW50ID0gbmV4dC50cmFuc3Bvc2UgPiAwID8gYCske25leHQudHJhbnNwb3NlfWAgOiBTdHJpbmcobmV4dC50cmFuc3Bvc2UpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IGVsOiByb290LCB1cGRhdGUsIGZsYXNoVlUsIHRvZ2dsZSwgc3luY1RyYW5zcG9ydCB9O1xufVxuIiwgImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9jb21wb25lbnRzL3BsYXllci5qcyc7XG5pbXBvcnQgeyBwYXJzZSwgbWVyZ2UgfSBmcm9tICcuL2xpYic7XG5pbXBvcnQgeyByZWR1Y2UgfSBmcm9tICcuL2xpYi9wYXJzZXIuanMnO1xuaW1wb3J0IHsgY3JlYXRlRWRpdG9yIH0gZnJvbSAnLi9jb21wb25lbnRzL2VkaXRvci5qcyc7XG5pbXBvcnQgeyBjcmVhdGVNaXhlciB9IGZyb20gJy4vY29tcG9uZW50cy9taXhlci5qcyc7XG5cbmxldCB0ZW1wbyA9IDE0NjtcbmxldCBiYXJzID0gODtcbmxldCB0cmFuc3Bvc2UgPSAwO1xubGV0IHBsYXlpbmcgPSBmYWxzZTtcbmxldCBkZWJvdW5jZVRpbWVyID0gbnVsbDtcbmxldCBzdGF0dXNSZXNldFRpbWVyID0gbnVsbDtcbmxldCBlZGl0b3JBcGkgPSBudWxsO1xubGV0IG1peGVyQXBpID0gbnVsbDtcbmxldCBsYXN0Q29udGV4dCA9IG51bGw7XG5cbmNvbnN0IHAgPSB3aW5kb3cucCB8fCBuZXcgUGxheWVyKCk7XG53aW5kb3cucCA9IHA7XG5cbmNvbnN0IFNUT1JBR0VfS0VZID0gJ3Njb29wczpkcmFmdCc7XG5cbmNvbnN0IEJJTExZX0pFQU4gPSBgXG4gICVGIGEzfGMjNHxmIzRcbiAgJUcgYjN8ZCM0fGcjNFxuICAlQSBjIzR8ZTR8YTRcbiAgJUUgYjN8ZDR8ZiM0XG4gICVDIGQzfGYjNHxhNCA7IGhvdyB0byBzdW0gbm90ZXMgdG8gY2hvcmRzP1xuICAlQiBjIzR8ZjR8ZyMzfGI0XG5cbiAgIyBzeW50aFxuICAgIEBJTlRST1xuICAgICAgIzUxOCAgICAgIC0tLS0gLS0tLSAtLS0tIC0tLS0gLS0tLSAtLS0tIC0tLS0gLS0tLVxuICAgIEBOIDwgSU5UUk9cbiAgICBAQVxuICAgICAgIzUxOCA3NSAgIHgtLS0gLS14LSAtLS0tIC0tLS0geC0tLSAtLXgtIC0tLS0gLS0tLSAlRiAlRyAlQSAlR1xuICAgIEBCIDwgQVxuICAgICAgIzUxOCAgICAgICVFICUgJSAlXG4gICAgQEMgPCBBXG4gICAgICAjNTE4ICAgICAgJUMgJSAlRiAlXG4gICAgQEQgPCBBXG4gICAgICAjNTE4ICAgICAgJUMgJSAlQiAlXG5cbiAgIyMgYmFzc1xuICAgICVjIGYjMiBjIzIgZTIgZiMyIGUyIGMjMiBiMSBjIzJcbiAgICAlZCBiMiBhMiBiMiBkMyBkMyBiMiBhMiA7IGhvdyB0byB0cmFuc3Bvc2U/XG4gICAgQElOVFJPXG4gICAgICAjMzkzICAgICAgLS0tLSAtLS0tIC0tLS0gLS0tLSAtLS0tIC0tLS0gLS0tLSAtLS0tXG4gICAgQEFcbiAgICAgICMzOTMgIDExMiB4LXgtIHgteC0geC14LSB4LXgtIHgteC0geC14LSB4LXgtIHgteC0gJWMgJVxuICAgIEBOIDwgQVxuICAgIEBCXG4gICAgICAjMzkzICAgICAgeC14LSB4LXgtIC0teC0geC14LSB4LXgtIHgteC0gLS14LSB4LXgtICVkICVcbiAgICBAQyA8IElOVFJPXG4gICAgQEQgPCBJTlRST1xuXG4gICMjIGRydW1zXG4gICAgQElOVFJPXG4gICAgICAjMjEyMyAgICAgLS0tLSAtLS0tIC0tLS0gLS0tLSAtLS0tIC0tLS0gLS0tLSAtLS0tXG4gICAgICAjMjA4MSA1MCAgeC14LSB4LXgtIHgteC0geC14LSB4LXgtIHgteC0geC14LSB4LXgtXG4gICAgICAjMjAyOCAgICAgLS0tLSB4LS0tIC0tLS0geC0tLSAtLS0tIHgtLS0gLS0tLSB4LS0tXG4gICAgICAjMjAwMSAgICAgeC0tLSAtLS0tIHgtLS0gLS0tLSB4LS0tIC0tLS0geC0tLSAtLS0tXG4gICAgQEEgPCBJTlRST1xuICAgICAgIzIxMjMgOTAgIHgtLS0geC0tLSB4LS0tIHgtLS0geC0tLSB4LS0tIHgtLS0geC0tLVxuICAgICAgIzIxMjMgNzAgIC0teC0gLS14LSAtLXgtIC0teC0gLS14LSAtLXgtIC0teC0gLS14LVxuICAgIEBOIDwgQVxuICAgIEBCIDwgQVxuICAgIEBDIDwgQVxuICAgIEBEIDwgQVxuXG4gID4gSU5UUk8gTiAqMiBBICVcbiAgPiBBICUgQiBBIEIgQVxuICA+IEEgJSBCIEEgQyAqMyBEXG4gID4gQSAlIEIgQSBCIEFcbiAgPiBBICUgQiBBIEIgQVxuICA+IEEgJSBCIEEgQyAqMyBEXG4gID4gQSAlIEIgQSBCIEFcbmA7XG5cbmNvbnN0IFRFVFJJUyA9IGBcbiVhIEU0IEIzIEM0IEQ0IEM0IEIzIEEzXG4lYiBBMyBDNCBFNCBENCBDNCBCM1xuJWMgQjMgQzQgRDQgRTQgQzQgQTMgQTNcblxuJWQgRDQgRjQgQTQgRzQgRjQgRTRcbiVlIEU0IEM0IEU0IEQ0IEM0IEIzXG5cbiVmIEU0IEM0IEQ0IEIzIEM0IEEzIEFiMyBCM1xuJWcgRTQgQzQgRDQgQjMgQzQgRTQgQTMgQWIzXG5cbiMgcGlhbm9cbiAgQEFcbiAgICAjMyB4LXh4IHgteHggeC14eCB4LXh4IHgteHggeC14LSB4LXgtIHgtLS0gJWEgJWIgJWNcbiAgQEJcbiAgICAjMyAteC14IHgteHggeC14eCB4LXh4IHgteHggeC14LSB4LXgtIHgtLS0gJWQgJWUgJWNcbiAgQENcbiAgICAjMyB4LS0tIHgtLS0geC0tLSB4LS0tIHgtLS0geC0tLSB4LS0tIHgtLS0gJWZcbiAgQEQgPCBDXG4gICAgIzMgJWdcblxuJXggRTIgRTIgQTIgQTIgQWIyIEUyIEEyXG4leSBEMiBEMiBDMiBDMiBFMiBFMiBBMlxuJXogQTIgQTIgQWIyIEFiMiBBMiBBMiBBYjNcbiV6XyBBMiBBMiBBYjIgQWIyIEEyIEEyIEE0IEFiNFxuXG4jIGJhc3NcbiAgQEFcbiAgICAjMiB4LS0tIHgtLS0geC0tLSB4LS0tIHgtLS0geC0tLSB4LS0tIC0tLS0gJXhcbiAgQEIgPCBBXG4gICAgIzIgJXlcbiAgQEMgPCBBXG4gICAgIzIgJXpcbiAgQERcbiAgICAjMiB4LS0tIHgtLS0geC0tLSB4LS0tIHgtLS0geC14LSB4LS0tIC0tLS0gJXpfXG5cbj4gQSBCIEEgQiBDIERcbmAudHJpbSgpO1xuXG5jb25zdCBQTEFZR1JPVU5EID0gYFxuJWEgQzQgcGhyeWdpYW4uLiArKyBJIEkgSUlJIElWXG5cbiMgc2NhbGVzXG4gIEBBXG4gICAgIzMgMTAwIC14LXggLXgteCAteC14IC14LXggJWEgJWFcblxuIyMgZHJ1bXNcbiAgQEFcbiAgICAjMCAxMjAgW3h4XS1beHhdLSBbeHhdLVt4eF0tIGQjMVxuICAgICMwIDExMCAteC14IC14LXggZDJcbiAgICAjMCAxMDAgW3h4XVt4eF1beHhdW3h4XSBbeHhdW3h4XVt4eF1beHhdIGYjMlxuXG4+IEEgKjRcbmAudHJpbSgpO1xuXG5jb25zdCBMT0NLUyA9IGBcbiVDbSBjNHxlYjR8ZzQgJVxuJUZtIGM0fGY0fGcjNCAlXG5cbiMgZHJ1bXNcbiAgQEFcbiAgICAjMCAxMjcgeHh4eHh4eHh4eHhbeHhdeHh4eCBbeHhdeHh4eHh4eHh4eHh4eHh4IGYjMlxuICAgICMwIDEyNyAtLXgtLS14LS0teC14LXhbeHhdIC0teC0tLXgtLS14LS1bLXhdeC0gYyMyXG4gICAgIzAgOTAgIC0tLS0tLS0tLS0tLS0tLS14X19fLS0tLS0tLS0tLS0tIGEzXG4gICAgIzAgMTIwIC0tW3h4XS0tLVt4eF0tLS1beHhdLS0tW3h4XS0gZCMxXG5cbiMjIHNrYW5raW5nXG4gIEBBXG4gICAgIzEgMTAwIC14LXgteC14LXgteC14LXggJUNtICVGbVxuXG4+IEEgKjRcbmAudHJpbSgpO1xuXG5jb25zdCBQUkVTRVRTID0ge1xuICB0ZXRyaXM6IFRFVFJJUyxcbiAgYmlsbHlfamVhbjogQklMTFlfSkVBTixcbiAgcGxheWdyb3VuZDogUExBWUdST1VORCxcbiAgbG9ja3M6IExPQ0tTLFxufTtcblxuY29uc3QgUFJFU0VUX0xBQkVMUyA9IHtcbiAgdGV0cmlzOiAnVGV0cmlzJyxcbiAgYmlsbHlfamVhbjogJ0JpbGx5IEplYW4nLFxuICBwbGF5Z3JvdW5kOiAnUGxheWdyb3VuZCcsXG4gIGxvY2tzOiAnTG9ja3MnLFxufTtcblxuZnVuY3Rpb24gYnVpbGQobWlkaSkge1xuICBjb25zdCBtaXggPSBbXTtcblxuICBmdW5jdGlvbiBnZXQobnRoLCBuYW1lKSB7XG4gICAgY29uc3Qga2V5ID0gbnRoICsgbmFtZTtcblxuICAgIGlmICghZ2V0W2tleV0pIHtcbiAgICAgIGNvbnN0IHRyYWNrID0gW250aCwgbmFtZSwgW11dO1xuICAgICAgbWl4LnB1c2godHJhY2spO1xuICAgICAgZ2V0W2tleV0gPSB7IHRyYWNrIH07XG4gICAgfVxuICAgIHJldHVybiBnZXRba2V5XTtcbiAgfVxuXG4gIG1pZGkuZm9yRWFjaChzZWN0aW9uID0+IHtcbiAgICBzZWN0aW9uLmZvckVhY2gocGFydHMgPT4ge1xuICAgICAgcGFydHMuZm9yRWFjaChlID0+IHtcbiAgICAgICAgY29uc3QgeyB0cmFjayB9ID0gZ2V0KGVbMF0sIGVbMV0pO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVbMl0ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICB0cmFja1syXS5wdXNoKGVbMl1baV0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBtaXg7XG59XG5cbmZ1bmN0aW9uIGdldERhdGEoaW5wdXQpIHtcbiAgdHJ5IHtcbiAgICBsYXN0Q29udGV4dCA9IHBhcnNlKGlucHV0KTtcbiAgICByZXR1cm4gYnVpbGQobWVyZ2UobGFzdENvbnRleHQpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGxhc3RDb250ZXh0ID0gbnVsbDtcbiAgICBjb25zb2xlLmVycm9yKCdQYXJzZSBlcnJvcjonLCBlKTtcbiAgICBzaG93RXJyb3IoZS5tZXNzYWdlIHx8ICdQYXJzZSBlcnJvcicpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlVmFyVG9vbHRpcChuYW1lKSB7XG4gIGlmICghbGFzdENvbnRleHQgfHwgIWxhc3RDb250ZXh0LmRhdGEgfHwgIWxhc3RDb250ZXh0LmRhdGFbbmFtZV0pIHJldHVybiBudWxsO1xuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSByZWR1Y2UobGFzdENvbnRleHQuZGF0YVtuYW1lXSwgbGFzdENvbnRleHQuZGF0YSk7XG4gICAgY29uc3Qgb3V0ID0gQXJyYXkuaXNBcnJheShkYXRhKSA/IGRhdGEuZmxhdChJbmZpbml0eSkgOiBbZGF0YV07XG4gICAgY29uc3Qgc2hvd24gPSBvdXQuc2xpY2UoMCwgMTYpLm1hcChpdGVtID0+IChcbiAgICAgIEFycmF5LmlzQXJyYXkoaXRlbSkgPyBpdGVtLmpvaW4oJ3wnKSA6IFN0cmluZyhpdGVtKVxuICAgICkpO1xuICAgIHJldHVybiBzaG93bi5qb2luKCcgICcpICsgKG91dC5sZW5ndGggPiBzaG93bi5sZW5ndGggPyAnIFx1MjAyNicgOiAnJyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93RXJyb3IobXNnKSB7XG4gIGNsZWFyVGltZW91dChzdGF0dXNSZXNldFRpbWVyKTtcbiAgY29uc3Qgc3RhdHVzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdHVzLW1lc3NhZ2UnKTtcbiAgY29uc3Qgc3RhdHVzYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXR1c2JhcicpO1xuICBpZiAoc3RhdHVzRWwpIHtcbiAgICBzdGF0dXNFbC50ZXh0Q29udGVudCA9IGBFcnJvcjogJHttc2d9YDtcbiAgfVxuICBpZiAoc3RhdHVzYmFyKSB7XG4gICAgc3RhdHVzYmFyLmRhdGFzZXQuc3RhdGUgPSAnZXJyb3InO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dTdGF0dXMobXNnLCBzdGF0ZSA9ICdyZWFkeScpIHtcbiAgY2xlYXJUaW1lb3V0KHN0YXR1c1Jlc2V0VGltZXIpO1xuICBjb25zdCBzdGF0dXNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0dXMtbWVzc2FnZScpO1xuICBjb25zdCBzdGF0dXNiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdHVzYmFyJyk7XG4gIGlmIChzdGF0dXNFbCkge1xuICAgIHN0YXR1c0VsLnRleHRDb250ZW50ID0gbXNnO1xuICB9XG4gIGlmIChzdGF0dXNiYXIpIHtcbiAgICBzdGF0dXNiYXIuZGF0YXNldC5zdGF0ZSA9IHN0YXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldFJlYWR5U3RhdHVzKCkge1xuICBzaG93U3RhdHVzKCdSZWFkeScsICdyZWFkeScpO1xufVxuXG5mdW5jdGlvbiBtYXJrRGlydHkoKSB7XG4gIHNob3dTdGF0dXMoJ1Vuc2F2ZWQgY2hhbmdlcycsICd3YXJuaW5nJyk7XG59XG5cbmZ1bmN0aW9uIHNhdmVTdWNjZXNzKCkge1xuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBoaCA9IFN0cmluZyhub3cuZ2V0SG91cnMoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgY29uc3QgbW0gPSBTdHJpbmcobm93LmdldE1pbnV0ZXMoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgc2hvd1N0YXR1cyhgU2F2ZWQgJHtoaH06JHttbX1gLCAncmVhZHknKTtcbn1cblxuZnVuY3Rpb24gc2V0UXVlcnlMb2FkKG5hbWUpIHtcbiAgY29uc3QgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gIGlmIChuYW1lKSB7XG4gICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ2xvYWQnLCBuYW1lKTtcbiAgfSBlbHNlIHtcbiAgICB1cmwuc2VhcmNoUGFyYW1zLmRlbGV0ZSgnbG9hZCcpO1xuICB9XG4gIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7fSwgJycsIHVybC50b1N0cmluZygpKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUGxheUJ1dHRvbigpIHtcbiAgY29uc3QgcGxheUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5LWJ0bicpO1xuICBpZiAocGxheUJ0bikgcGxheUJ0bi50ZXh0Q29udGVudCA9IHBsYXlpbmcgPyAnXHUyNUI2IFBsYXlpbmcuLi4nIDogJ1x1MjVCNiBQbGF5Jztcbn1cblxuZnVuY3Rpb24gbG9hZFByZXNldEJ5TmFtZShuYW1lKSB7XG4gIGNvbnN0IHByZXNldCA9IFBSRVNFVFNbbmFtZV07XG4gIGlmICghZWRpdG9yQXBpIHx8ICFwcmVzZXQpIHJldHVybjtcblxuICBlZGl0b3JBcGkuc2V0VmFsdWUocHJlc2V0LnRyaW0oKSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFNUT1JBR0VfS0VZLCBlZGl0b3JBcGkuZ2V0VmFsdWUoKSk7XG4gIHNldFF1ZXJ5TG9hZChuYW1lKTtcbiAgc2hvd1N0YXR1cyhgTG9hZGVkIHByZXNldDogJHtQUkVTRVRfTEFCRUxTW25hbWVdIHx8IG5hbWV9YCwgJ3JlYWR5Jyk7XG4gIHVwZGF0ZUxvb3AoKTtcbiAgZWRpdG9yQXBpLmZvY3VzKCk7XG59XG5cbmZ1bmN0aW9uIHN5bmNNaXhlcihkYXRhKSB7XG4gIGlmICghbWl4ZXJBcGkpIHJldHVybjtcbiAgbWl4ZXJBcGkudXBkYXRlKGRhdGEpO1xufVxuXG5mdW5jdGlvbiBiaW5kR2xvYmFsU2hvcnRjdXRzKCkge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgY29uc3QgZWRpdGluZ0ZpZWxkID0gdGFyZ2V0ICYmIChcbiAgICAgIHRhcmdldC50YWdOYW1lID09PSAnVEVYVEFSRUEnXG4gICAgICB8fCB0YXJnZXQudGFnTmFtZSA9PT0gJ0lOUFVUJ1xuICAgICAgfHwgdGFyZ2V0LnRhZ05hbWUgPT09ICdTRUxFQ1QnXG4gICAgKTtcblxuICAgIGlmIChlLmNvZGUgPT09ICdTcGFjZScgJiYgIWVkaXRpbmdGaWVsZCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHBsYXlpbmcpIHN0b3AoKTtcbiAgICAgIGVsc2UgcGxheSgpO1xuICAgIH1cbiAgICBpZiAoZS5jb2RlID09PSAnRXNjYXBlJykge1xuICAgICAgc3RvcCgpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURPTShpbml0aWFsVGV4dCwgaW5pdGlhbFByZXNldCkge1xuICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9ICcnO1xuXG4gIGNvbnN0IHRvb2xiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9vbGJhci5pZCA9ICd0b29sYmFyJztcblxuICBjb25zdCBhYm91dExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGFib3V0TGluay5pZCA9ICdhYm91dC1saW5rJztcbiAgYWJvdXRMaW5rLmhyZWYgPSAnbGFuZGluZy5odG1sJztcbiAgYWJvdXRMaW5rLnRleHRDb250ZW50ID0gJ1x1MjE5MCBBYm91dCc7XG5cbiAgY29uc3QgcGxheUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBwbGF5QnRuLmlkID0gJ3BsYXktYnRuJztcbiAgcGxheUJ0bi50ZXh0Q29udGVudCA9ICdcdTI1QjYgUGxheSc7XG4gIHBsYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGF5KTtcblxuICBjb25zdCBzdG9wQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHN0b3BCdG4uaWQgPSAnc3RvcC1idG4nO1xuICBzdG9wQnRuLnRleHRDb250ZW50ID0gJ1x1MjVBMCBTdG9wJztcbiAgc3RvcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0b3ApO1xuXG4gIGNvbnN0IG1peGVyQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG1peGVyQnRuLmlkID0gJ21peGVyLWJ0bic7XG4gIG1peGVyQnRuLnRleHRDb250ZW50ID0gJ1x1MjI5RSBNaXhlcic7XG4gIGNvbnN0IG1pZGlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbWlkaUJ0bi5pZCA9ICdtaWRpLWJ0bic7XG4gIG1pZGlCdG4udGV4dENvbnRlbnQgPSAnXHVEODNDXHVERjlCIE1JREknO1xuICBtaWRpQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgbWlkaUJ0bi50aXRsZSA9ICdNSURJIHN1cHBvcnQgY29tZXMgbmV4dCc7XG5cbiAgY29uc3QgcHJlc2V0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBwcmVzZXRMYWJlbC5jbGFzc05hbWUgPSAnZmllbGQtZ3JvdXAnO1xuICBwcmVzZXRMYWJlbC50ZXh0Q29udGVudCA9ICdQcmVzZXQgJztcbiAgY29uc3QgcHJlc2V0U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIHByZXNldFNlbGVjdC5pZCA9ICdwcmVzZXQtc2VsZWN0JztcbiAgY29uc3QgY3VzdG9tT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGN1c3RvbU9wdGlvbi52YWx1ZSA9ICcnO1xuICBjdXN0b21PcHRpb24udGV4dENvbnRlbnQgPSAnQ3VzdG9tJztcbiAgcHJlc2V0U2VsZWN0LmFwcGVuZENoaWxkKGN1c3RvbU9wdGlvbik7XG4gIE9iamVjdC5rZXlzKFBSRVNFVFMpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uLnZhbHVlID0gbmFtZTtcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBQUkVTRVRfTEFCRUxTW25hbWVdIHx8IG5hbWU7XG4gICAgcHJlc2V0U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIH0pO1xuICBpZiAoaW5pdGlhbFByZXNldCAmJiBQUkVTRVRTW2luaXRpYWxQcmVzZXRdKSB7XG4gICAgcHJlc2V0U2VsZWN0LnZhbHVlID0gaW5pdGlhbFByZXNldDtcbiAgfVxuICBwcmVzZXRTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIGlmIChwcmVzZXRTZWxlY3QudmFsdWUpIHtcbiAgICAgIGxvYWRQcmVzZXRCeU5hbWUocHJlc2V0U2VsZWN0LnZhbHVlKTtcbiAgICB9XG4gIH0pO1xuICBwcmVzZXRMYWJlbC5hcHBlbmRDaGlsZChwcmVzZXRTZWxlY3QpO1xuXG4gIHRvb2xiYXIuYXBwZW5kQ2hpbGQoYWJvdXRMaW5rKTtcbiAgdG9vbGJhci5hcHBlbmRDaGlsZChwbGF5QnRuKTtcbiAgdG9vbGJhci5hcHBlbmRDaGlsZChzdG9wQnRuKTtcbiAgdG9vbGJhci5hcHBlbmRDaGlsZChtaXhlckJ0bik7XG4gIHRvb2xiYXIuYXBwZW5kQ2hpbGQobWlkaUJ0bik7XG4gIHRvb2xiYXIuYXBwZW5kQ2hpbGQocHJlc2V0TGFiZWwpO1xuXG4gIGVkaXRvckFwaSA9IGNyZWF0ZUVkaXRvcihpbml0aWFsVGV4dCwge1xuICAgIHJlc29sdmVWYXI6IHJlc29sdmVWYXJUb29sdGlwLFxuICAgIG9uSW5wdXQ6ICgpID0+IHtcbiAgICAgIGNvbnN0IHByZXNldFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmVzZXQtc2VsZWN0Jyk7XG4gICAgICBpZiAocHJlc2V0U2VsZWN0KSBwcmVzZXRTZWxlY3QudmFsdWUgPSAnJztcbiAgICAgIHNldFF1ZXJ5TG9hZChudWxsKTtcbiAgICAgIG1hcmtEaXJ0eSgpO1xuICAgICAgdXBkYXRlTG9vcCgpO1xuICAgICAgc2F2ZURyYWZ0KCk7XG4gICAgfSxcbiAgfSk7XG5cbiAgZWRpdG9yQXBpLm9uKCdrZXlkb3duJywgZSA9PiB7XG4gICAgaWYgKChlLm1ldGFLZXkgfHwgZS5jdHJsS2V5KSAmJiBlLmNvZGUgPT09ICdFbnRlcicpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChwbGF5aW5nKSBzdG9wKCk7XG4gICAgICBlbHNlIHBsYXkoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHN0YXR1c2JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzdGF0dXNiYXIuaWQgPSAnc3RhdHVzYmFyJztcbiAgc3RhdHVzYmFyLmRhdGFzZXQuc3RhdGUgPSAncmVhZHknO1xuXG4gIGNvbnN0IGJlYXREb3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJlYXREb3RzLmlkID0gJ2JlYXQtZG90cyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkgKz0gMSkge1xuICAgIGNvbnN0IGRvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBkb3QuY2xhc3NOYW1lID0gJ2JlYXQtZG90JztcbiAgICBiZWF0RG90cy5hcHBlbmRDaGlsZChkb3QpO1xuICB9XG5cbiAgY29uc3Qgc3RhdHVzTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgc3RhdHVzTWVzc2FnZS5pZCA9ICdzdGF0dXMtbWVzc2FnZSc7XG4gIHN0YXR1c01lc3NhZ2UudGV4dENvbnRlbnQgPSAnUmVhZHknO1xuXG4gIHN0YXR1c2Jhci5hcHBlbmRDaGlsZChiZWF0RG90cyk7XG4gIHN0YXR1c2Jhci5hcHBlbmRDaGlsZChzdGF0dXNNZXNzYWdlKTtcblxuICBjb25zdCB3b3Jrc3BhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd29ya3NwYWNlLmlkID0gJ3dvcmtzcGFjZSc7XG4gIG1peGVyQXBpID0gY3JlYXRlTWl4ZXIocCwge1xuICAgIHRlbXBvLFxuICAgIGJhcnMsXG4gICAgdHJhbnNwb3NlLFxuICAgIG9uQ2hhbmdlKG5leHQpIHtcbiAgICAgIGlmICh0eXBlb2YgbmV4dC50ZW1wbyA9PT0gJ251bWJlcicpIHRlbXBvID0gbmV4dC50ZW1wbztcbiAgICAgIGlmICh0eXBlb2YgbmV4dC5iYXJzID09PSAnbnVtYmVyJykgYmFycyA9IG5leHQuYmFycztcbiAgICAgIGlmICh0eXBlb2YgbmV4dC50cmFuc3Bvc2UgPT09ICdudW1iZXInKSB0cmFuc3Bvc2UgPSBuZXh0LnRyYW5zcG9zZTtcbiAgICAgIHVwZGF0ZUxvb3AoKTtcbiAgICB9LFxuICB9KTtcbiAgbWl4ZXJBcGkudG9nZ2xlKGZhbHNlKTtcbiAgbWl4ZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3Qgb3BlbiA9IG1peGVyQXBpLnRvZ2dsZSgpO1xuICAgIHdvcmtzcGFjZS5jbGFzc0xpc3QudG9nZ2xlKCdtaXhlci1vcGVuJywgb3Blbik7XG4gIH0pO1xuICBwLm9uQmVhdCA9IChrZXksIHdoZW4pID0+IHtcbiAgICBjb25zdCB3YWl0ID0gTWF0aC5tYXgoMCwgKHdoZW4gLSBwLmF1ZGlvQ29udGV4dC5jdXJyZW50VGltZSkgKiAxMDAwKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IG1peGVyQXBpLmZsYXNoVlUoa2V5KSwgd2FpdCk7XG4gIH07XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0b29sYmFyKTtcbiAgd29ya3NwYWNlLmFwcGVuZENoaWxkKGVkaXRvckFwaS5lbCk7XG4gIHdvcmtzcGFjZS5hcHBlbmRDaGlsZChtaXhlckFwaS5lbCk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQod29ya3NwYWNlKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdGF0dXNiYXIpO1xuXG4gIHJldHVybiBlZGl0b3JBcGk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRFeGFtcGxlKG5hbWUpIHtcbiAgaWYgKFBSRVNFVFNbbmFtZV0pIHJldHVybiBQUkVTRVRTW25hbWVdO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGV4YW1wbGVzLyR7bmFtZX0uZHViYCk7XG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIGlnbm9yZSBhbmQgdXNlIGZhbGxiYWNrXG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlc29sdmVJbml0aWFsRHJhZnQoKSB7XG4gIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gIGNvbnN0IGxvYWQgPSBwYXJhbXMuZ2V0KCdsb2FkJyk7XG5cbiAgaWYgKGxvYWQpIHtcbiAgICBjb25zdCBkcmFmdCA9IGF3YWl0IGxvYWRFeGFtcGxlKGxvYWQpO1xuICAgIGlmIChkcmFmdCkgcmV0dXJuIGRyYWZ0LnRyaW0oKTtcbiAgfVxuXG4gIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTVE9SQUdFX0tFWSkgfHwgVEVUUklTO1xufVxuXG5mdW5jdGlvbiBzYXZlRHJhZnQoKSB7XG4gIGNsZWFyVGltZW91dChkZWJvdW5jZVRpbWVyKTtcbiAgZGVib3VuY2VUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmIChlZGl0b3JBcGkpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFNUT1JBR0VfS0VZLCBlZGl0b3JBcGkuZ2V0VmFsdWUoKSk7XG4gICAgICBzYXZlU3VjY2VzcygpO1xuICAgIH1cbiAgfSwgMzAwKTtcbn1cblxuZnVuY3Rpb24gcGxheSgpIHtcbiAgc3RvcCgpO1xuICBpZiAoIWVkaXRvckFwaSkgcmV0dXJuO1xuXG4gIGlmIChwLmF1ZGlvQ29udGV4dC5zdGF0ZSA9PT0gJ3N1c3BlbmRlZCcpIHtcbiAgICBwLmF1ZGlvQ29udGV4dC5yZXN1bWUoKTtcbiAgfVxuICBwbGF5aW5nID0gdHJ1ZTtcbiAgY29uc3QgZGF0YSA9IGdldERhdGEoZWRpdG9yQXBpLmdldFZhbHVlKCkpO1xuICBwLnNldExvb3BNYWNoaW5lKGRhdGEsIHRlbXBvLCBiYXJzLCB0cmFuc3Bvc2UpO1xuICBzeW5jTWl4ZXIoZGF0YSk7XG4gIHAucGxheUxvb3BNYWNoaW5lKCk7XG4gIHVwZGF0ZVBsYXlCdXR0b24oKTtcbiAgc2hvd1N0YXR1cygnUGxheWluZycsICdwbGF5aW5nJyk7XG59XG5cbmZ1bmN0aW9uIHN0b3AoKSB7XG4gIGlmIChwbGF5aW5nKSB7XG4gICAgcGxheWluZyA9IGZhbHNlO1xuICAgIHAuc3RvcExvb3BNYWNoaW5lKCk7XG4gIH1cbiAgdXBkYXRlUGxheUJ1dHRvbigpO1xuICBzZXRSZWFkeVN0YXR1cygpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVMb29wKCkge1xuICBpZiAoIWVkaXRvckFwaSB8fCAhcCkgcmV0dXJuO1xuXG4gIGNvbnN0IGRhdGEgPSBnZXREYXRhKGVkaXRvckFwaS5nZXRWYWx1ZSgpKTtcbiAgY29uc3QgY2hhbmdlZCA9IHAuc2V0TG9vcE1hY2hpbmUoZGF0YSwgdGVtcG8sIGJhcnMsIHRyYW5zcG9zZSk7XG4gIHN5bmNNaXhlcihkYXRhKTtcbiAgaWYgKGNoYW5nZWQgJiYgcGxheWluZykge1xuICAgIHAucGxheUxvb3BNYWNoaW5lKHAuYmVhdEluZGV4KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBiZWF0SW5kaWNhdG9yKCkge1xuICBjb25zdCBkb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJlYXQtZG90Jyk7XG4gIGNvbnN0IGFjdGl2ZUluZGV4ID0gcC5sb29wU3RhcnRlZCA/IHAuYmVhdEluZGV4IDogLTE7XG4gIGRvdHMuZm9yRWFjaCgoZG90LCBpKSA9PiBkb3QuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJywgaSA9PT0gYWN0aXZlSW5kZXgpKTtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGJlYXRJbmRpY2F0b3IpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBib290c3RyYXAoKSB7XG4gIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gIGNvbnN0IGluaXRpYWxQcmVzZXQgPSBwYXJhbXMuZ2V0KCdsb2FkJyk7XG4gIGNvbnN0IGluaXRpYWxEcmFmdCA9IGF3YWl0IHJlc29sdmVJbml0aWFsRHJhZnQoKTtcbiAgY29uc3QgZWRpdG9yID0gY3JlYXRlRE9NKGluaXRpYWxEcmFmdCwgaW5pdGlhbFByZXNldCk7XG4gIGJpbmRHbG9iYWxTaG9ydGN1dHMoKTtcbiAgY29uc3QgZGF0YSA9IGdldERhdGEoZWRpdG9yLmdldFZhbHVlKCkpO1xuICBwLnNldExvb3BNYWNoaW5lKGRhdGEsIHRlbXBvLCBiYXJzLCB0cmFuc3Bvc2UpO1xuICBzeW5jTWl4ZXIoZGF0YSk7XG4gIHNldFJlYWR5U3RhdHVzKCk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShiZWF0SW5kaWNhdG9yKTtcbn1cblxuYm9vdHN0cmFwKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHt9O1xuIiwgIid1c2Ugc3RyaWN0J1xuXG4vLyB1dGlsXG5mdW5jdGlvbiBmaWxsU3RyIChzLCBudW0pIHsgcmV0dXJuIEFycmF5KG51bSArIDEpLmpvaW4ocykgfVxuZnVuY3Rpb24gaXNOdW0gKHgpIHsgcmV0dXJuIHR5cGVvZiB4ID09PSAnbnVtYmVyJyB9XG5mdW5jdGlvbiBpc1N0ciAoeCkgeyByZXR1cm4gdHlwZW9mIHggPT09ICdzdHJpbmcnIH1cbmZ1bmN0aW9uIGlzRGVmICh4KSB7IHJldHVybiB0eXBlb2YgeCAhPT0gJ3VuZGVmaW5lZCcgfVxuZnVuY3Rpb24gbWlkaVRvRnJlcSAobWlkaSwgdHVuaW5nKSB7XG4gIHJldHVybiBNYXRoLnBvdygyLCAobWlkaSAtIDY5KSAvIDEyKSAqICh0dW5pbmcgfHwgNDQwKVxufVxuXG52YXIgUkVHRVggPSAvXihbYS1nQS1HXSkoI3sxLH18YnsxLH18eHsxLH18KSgtP1xcZCopXFxzKiguKilcXHMqJC9cbi8qKlxuICogQSByZWdleCBmb3IgbWF0Y2hpbmcgbm90ZSBzdHJpbmdzIGluIHNjaWVudGlmaWMgbm90YXRpb24uXG4gKlxuICogQG5hbWUgcmVnZXhcbiAqIEBmdW5jdGlvblxuICogQHJldHVybiB7UmVnRXhwfSB0aGUgcmVnZXhwIHVzZWQgdG8gcGFyc2UgdGhlIG5vdGUgbmFtZVxuICpcbiAqIFRoZSBub3RlIHN0cmluZyBzaG91bGQgaGF2ZSB0aGUgZm9ybSBgbGV0dGVyW2FjY2lkZW50YWxzXVtvY3RhdmVdW2VsZW1lbnRdYFxuICogd2hlcmU6XG4gKlxuICogLSBsZXR0ZXI6IChSZXF1aXJlZCkgaXMgYSBsZXR0ZXIgZnJvbSBBIHRvIEcgZWl0aGVyIHVwcGVyIG9yIGxvd2VyIGNhc2VcbiAqIC0gYWNjaWRlbnRhbHM6IChPcHRpb25hbCkgY2FuIGJlIG9uZSBvciBtb3JlIGBiYCAoZmxhdHMpLCBgI2AgKHNoYXJwcykgb3IgYHhgIChkb3VibGUgc2hhcnBzKS5cbiAqIFRoZXkgY2FuIE5PVCBiZSBtaXhlZC5cbiAqIC0gb2N0YXZlOiAoT3B0aW9uYWwpIGEgcG9zaXRpdmUgb3IgbmVnYXRpdmUgaW50ZWdlclxuICogLSBlbGVtZW50OiAoT3B0aW9uYWwpIGFkZGl0aW9uYWxseSBhbnl0aGluZyBhZnRlciB0aGUgZHVyYXRpb24gaXMgY29uc2lkZXJlZCB0b1xuICogYmUgdGhlIGVsZW1lbnQgbmFtZSAoZm9yIGV4YW1wbGU6ICdDMiBkb3JpYW4nKVxuICpcbiAqIFRoZSBleGVjdXRlZCByZWdleCBjb250YWlucyAoYnkgYXJyYXkgaW5kZXgpOlxuICpcbiAqIC0gMDogdGhlIGNvbXBsZXRlIHN0cmluZ1xuICogLSAxOiB0aGUgbm90ZSBsZXR0ZXJcbiAqIC0gMjogdGhlIG9wdGlvbmFsIGFjY2lkZW50YWxzXG4gKiAtIDM6IHRoZSBvcHRpb25hbCBvY3RhdmVcbiAqIC0gNDogdGhlIHJlc3Qgb2YgdGhlIHN0cmluZyAodHJpbW1lZClcbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIHBhcnNlciA9IHJlcXVpcmUoJ25vdGUtcGFyc2VyJylcbiAqIHBhcnNlci5yZWdleC5leGVjKCdjIzQnKVxuICogLy8gPT4gWydjIzQnLCAnYycsICcjJywgJzQnLCAnJ11cbiAqIHBhcnNlci5yZWdleC5leGVjKCdjIzQgbWFqb3InKVxuICogLy8gPT4gWydjIzRtYWpvcicsICdjJywgJyMnLCAnNCcsICdtYWpvciddXG4gKiBwYXJzZXIucmVnZXgoKS5leGVjKCdDTWFqNycpXG4gKiAvLyA9PiBbJ0NNYWo3JywgJ0MnLCAnJywgJycsICdNYWo3J11cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2V4ICgpIHsgcmV0dXJuIFJFR0VYIH1cblxudmFyIFNFTUlUT05FUyA9IFswLCAyLCA0LCA1LCA3LCA5LCAxMV1cbi8qKlxuICogUGFyc2UgYSBub3RlIG5hbWUgaW4gc2NpZW50aWZpYyBub3RhdGlvbiBhbiByZXR1cm4gaXQncyBjb21wb25lbnRzLFxuICogYW5kIHNvbWUgbnVtZXJpYyBwcm9wZXJ0aWVzIGluY2x1ZGluZyBtaWRpIG51bWJlciBhbmQgZnJlcXVlbmN5LlxuICpcbiAqIEBuYW1lIHBhcnNlXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBub3RlIC0gdGhlIG5vdGUgc3RyaW5nIHRvIGJlIHBhcnNlZFxuICogQHBhcmFtIHtCb29sZWFufSBpc1RvbmljIC0gdHJ1ZSB0aGUgc3RyaW5ncyBpdCdzIHN1cHBvc2VkIHRvIGNvbnRhaW4gYSBub3RlIG51bWJlclxuICogYW5kIHNvbWUgY2F0ZWdvcnkgKGZvciBleGFtcGxlIGFuIHNjYWxlOiAnQyMgbWFqb3InKS4gSXQncyBmYWxzZSBieSBkZWZhdWx0LFxuICogYnV0IHdoZW4gdHJ1ZSwgZW4gZXh0cmEgdG9uaWNPZiBwcm9wZXJ0eSBpcyByZXR1cm5lZCB3aXRoIHRoZSBjYXRlZ29yeSAoJ21ham9yJylcbiAqIEBwYXJhbSB7RmxvYXR9IHR1bm5pbmcgLSBUaGUgZnJlcXVlbmN5IG9mIEE0IG5vdGUgdG8gY2FsY3VsYXRlIGZyZXF1ZW5jaWVzLlxuICogQnkgZGVmYXVsdCBpdCA0NDAuXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBwYXJzZWQgbm90ZSBuYW1lIG9yIG51bGwgaWYgbm90IGEgdmFsaWQgbm90ZVxuICpcbiAqIFRoZSBwYXJzZWQgbm90ZSBuYW1lIG9iamVjdCB3aWxsIEFMV0FZUyBjb250YWluczpcbiAqIC0gbGV0dGVyOiB0aGUgdXBwZXJjYXNlIGxldHRlciBvZiB0aGUgbm90ZVxuICogLSBhY2M6IHRoZSBhY2NpZGVudGFscyBvZiB0aGUgbm90ZSAob25seSBzaGFycHMgb3IgZmxhdHMpXG4gKiAtIHBjOiB0aGUgcGl0Y2ggY2xhc3MgKGxldHRlciArIGFjYylcbiAqIC0gc3RlcDogcyBhIG51bWVyaWMgcmVwcmVzZW50YXRpb24gb2YgdGhlIGxldHRlci4gSXQncyBhbiBpbnRlZ2VyIGZyb20gMCB0byA2XG4gKiB3aGVyZSAwID0gQywgMSA9IEQgLi4uIDYgPSBCXG4gKiAtIGFsdDogYSBudW1lcmljIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBhY2NpZGVudGFscy4gMCBtZWFucyBubyBhbHRlcmF0aW9uLFxuICogcG9zaXRpdmUgbnVtYmVycyBhcmUgZm9yIHNoYXJwcyBhbmQgbmVnYXRpdmUgZm9yIGZsYXRzXG4gKiAtIGNocm9tYTogYSBudW1lcmljIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBwaXRjaCBjbGFzcy4gSXQncyBsaWtlIG1pZGkgZm9yXG4gKiBwaXRjaCBjbGFzc2VzLiAwID0gQywgMSA9IEMjLCAyID0gRCAuLi4gMTEgPSBCLiBDYW4gYmUgdXNlZCB0byBmaW5kIGVuaGFybW9uaWNzXG4gKiBzaW5jZSwgZm9yIGV4YW1wbGUsIGNocm9tYSBvZiAnQ2InIGFuZCAnQicgYXJlIGJvdGggMTFcbiAqXG4gKiBJZiB0aGUgbm90ZSBoYXMgb2N0YXZlLCB0aGUgcGFyc2VyIG9iamVjdCB3aWxsIGNvbnRhaW46XG4gKiAtIG9jdDogdGhlIG9jdGF2ZSBudW1iZXIgKGFzIGludGVnZXIpXG4gKiAtIG1pZGk6IHRoZSBtaWRpIG51bWJlclxuICogLSBmcmVxOiB0aGUgZnJlcXVlbmN5ICh1c2luZyB0dW5pbmcgcGFyYW1ldGVyIGFzIGJhc2UpXG4gKlxuICogSWYgdGhlIHBhcmFtZXRlciBgaXNUb25pY2AgaXMgc2V0IHRvIHRydWUsIHRoZSBwYXJzZWQgb2JqZWN0IHdpbGwgY29udGFpbjpcbiAqIC0gdG9uaWNPZjogdGhlIHJlc3Qgb2YgdGhlIHN0cmluZyB0aGF0IGZvbGxvd3Mgbm90ZSBuYW1lIChsZWZ0IGFuZCByaWdodCB0cmltbWVkKVxuICpcbiAqIEBleGFtcGxlXG4gKiB2YXIgcGFyc2UgPSByZXF1aXJlKCdub3RlLXBhcnNlcicpLnBhcnNlXG4gKiBwYXJzZSgnQ2I0JylcbiAqIC8vID0+IHsgbGV0dGVyOiAnQycsIGFjYzogJ2InLCBwYzogJ0NiJywgc3RlcDogMCwgYWx0OiAtMSwgY2hyb21hOiAtMSxcbiAqICAgICAgICAgb2N0OiA0LCBtaWRpOiA1OSwgZnJlcTogMjQ2Ljk0MTY1MDYyODA2MjA2IH1cbiAqIC8vIGlmIG5vIG9jdGF2ZSwgbm8gbWlkaSwgbm8gZnJlcVxuICogcGFyc2UoJ2Z4JylcbiAqIC8vID0+IHsgbGV0dGVyOiAnRicsIGFjYzogJyMjJywgcGM6ICdGIyMnLCBzdGVwOiAzLCBhbHQ6IDIsIGNocm9tYTogNyB9KVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2UgKHN0ciwgaXNUb25pYywgdHVuaW5nKSB7XG4gIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykgcmV0dXJuIG51bGxcbiAgdmFyIG0gPSBSRUdFWC5leGVjKHN0cilcbiAgaWYgKCFtIHx8ICghaXNUb25pYyAmJiBtWzRdKSkgcmV0dXJuIG51bGxcblxuICB2YXIgcCA9IHsgbGV0dGVyOiBtWzFdLnRvVXBwZXJDYXNlKCksIGFjYzogbVsyXS5yZXBsYWNlKC94L2csICcjIycpIH1cbiAgcC5wYyA9IHAubGV0dGVyICsgcC5hY2NcbiAgcC5zdGVwID0gKHAubGV0dGVyLmNoYXJDb2RlQXQoMCkgKyAzKSAlIDdcbiAgcC5hbHQgPSBwLmFjY1swXSA9PT0gJ2InID8gLXAuYWNjLmxlbmd0aCA6IHAuYWNjLmxlbmd0aFxuICB2YXIgcG9zID0gU0VNSVRPTkVTW3Auc3RlcF0gKyBwLmFsdFxuICBwLmNocm9tYSA9IHBvcyA8IDAgPyAxMiArIHBvcyA6IHBvcyAlIDEyXG4gIGlmIChtWzNdKSB7IC8vIGhhcyBvY3RhdmVcbiAgICBwLm9jdCA9ICttWzNdXG4gICAgcC5taWRpID0gcG9zICsgMTIgKiAocC5vY3QgKyAxKVxuICAgIHAuZnJlcSA9IG1pZGlUb0ZyZXEocC5taWRpLCB0dW5pbmcpXG4gIH1cbiAgaWYgKGlzVG9uaWMpIHAudG9uaWNPZiA9IG1bNF1cbiAgcmV0dXJuIHBcbn1cblxudmFyIExFVFRFUlMgPSAnQ0RFRkdBQidcbmZ1bmN0aW9uIGFjY1N0ciAobikgeyByZXR1cm4gIWlzTnVtKG4pID8gJycgOiBuIDwgMCA/IGZpbGxTdHIoJ2InLCAtbikgOiBmaWxsU3RyKCcjJywgbikgfVxuZnVuY3Rpb24gb2N0U3RyIChuKSB7IHJldHVybiAhaXNOdW0obikgPyAnJyA6ICcnICsgbiB9XG5cbi8qKlxuICogQ3JlYXRlIGEgc3RyaW5nIGZyb20gYSBwYXJzZWQgb2JqZWN0IG9yIGBzdGVwLCBhbHRlcmF0aW9uLCBvY3RhdmVgIHBhcmFtZXRlcnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSB0aGUgcGFyc2VkIGRhdGEgb2JqZWN0XG4gKiBAcmV0dXJuIHtTdHJpbmd9IGEgbm90ZSBzdHJpbmcgb3IgbnVsbCBpZiBub3QgdmFsaWQgcGFyYW1ldGVyc1xuICogQHNpbmNlIDEuMlxuICogQGV4YW1wbGVcbiAqIHBhcnNlci5idWlsZChwYXJzZXIucGFyc2UoJ2NiMicpKSAvLyA9PiAnQ2IyJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBpdCBhY2NlcHRzIChzdGVwLCBhbHRlcmF0aW9uLCBvY3RhdmUpIHBhcmFtZXRlcnM6XG4gKiBwYXJzZXIuYnVpbGQoMykgLy8gPT4gJ0YnXG4gKiBwYXJzZXIuYnVpbGQoMywgLTEpIC8vID0+ICdGYidcbiAqIHBhcnNlci5idWlsZCgzLCAtMSwgNCkgLy8gPT4gJ0ZiNCdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkIChzLCBhLCBvKSB7XG4gIGlmIChzID09PSBudWxsIHx8IHR5cGVvZiBzID09PSAndW5kZWZpbmVkJykgcmV0dXJuIG51bGxcbiAgaWYgKHMuc3RlcCkgcmV0dXJuIGJ1aWxkKHMuc3RlcCwgcy5hbHQsIHMub2N0KVxuICBpZiAocyA8IDAgfHwgcyA+IDYpIHJldHVybiBudWxsXG4gIHJldHVybiBMRVRURVJTLmNoYXJBdChzKSArIGFjY1N0cihhKSArIG9jdFN0cihvKVxufVxuXG4vKipcbiAqIEdldCBtaWRpIG9mIGEgbm90ZVxuICpcbiAqIEBuYW1lIG1pZGlcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtTdHJpbmd8SW50ZWdlcn0gbm90ZSAtIHRoZSBub3RlIG5hbWUgb3IgbWlkaSBudW1iZXJcbiAqIEByZXR1cm4ge0ludGVnZXJ9IHRoZSBtaWRpIG51bWJlciBvZiB0aGUgbm90ZSBvciBudWxsIGlmIG5vdCBhIHZhbGlkIG5vdGVcbiAqIG9yIHRoZSBub3RlIGRvZXMgTk9UIGNvbnRhaW5zIG9jdGF2ZVxuICogQGV4YW1wbGVcbiAqIHZhciBwYXJzZXIgPSByZXF1aXJlKCdub3RlLXBhcnNlcicpXG4gKiBwYXJzZXIubWlkaSgnQTQnKSAvLyA9PiA2OVxuICogcGFyc2VyLm1pZGkoJ0EnKSAvLyA9PiBudWxsXG4gKiBAZXhhbXBsZVxuICogLy8gbWlkaSBudW1iZXJzIGFyZSBieXBhc3NlZCAoZXZlbiBhcyBzdHJpbmdzKVxuICogcGFyc2VyLm1pZGkoNjApIC8vID0+IDYwXG4gKiBwYXJzZXIubWlkaSgnNjAnKSAvLyA9PiA2MFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWlkaSAobm90ZSkge1xuICBpZiAoKGlzTnVtKG5vdGUpIHx8IGlzU3RyKG5vdGUpKSAmJiBub3RlID49IDAgJiYgbm90ZSA8IDEyOCkgcmV0dXJuICtub3RlXG4gIHZhciBwID0gcGFyc2Uobm90ZSlcbiAgcmV0dXJuIHAgJiYgaXNEZWYocC5taWRpKSA/IHAubWlkaSA6IG51bGxcbn1cblxuLyoqXG4gKiBHZXQgZnJlcSBvZiBhIG5vdGUgaW4gaGVydHpzIChpbiBhIHdlbGwgdGVtcGVyZWQgNDQwSHogQTQpXG4gKlxuICogQG5hbWUgZnJlcVxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbm90ZSAtIHRoZSBub3RlIG5hbWUgb3Igbm90ZSBtaWRpIG51bWJlclxuICogQHBhcmFtIHtTdHJpbmd9IHR1bmluZyAtIChPcHRpb25hbCkgdGhlIEE0IGZyZXF1ZW5jeSAoNDQwIGJ5IGRlZmF1bHQpXG4gKiBAcmV0dXJuIHtGbG9hdH0gdGhlIGZyZXEgb2YgdGhlIG51bWJlciBpZiBoZXJ0enMgb3IgbnVsbCBpZiBub3QgdmFsaWQgbm90ZVxuICogQGV4YW1wbGVcbiAqIHZhciBwYXJzZXIgPSByZXF1aXJlKCdub3RlLXBhcnNlcicpXG4gKiBwYXJzZXIuZnJlcSgnQTQnKSAvLyA9PiA0NDBcbiAqIHBhcnNlci5mcmVxKCdBJykgLy8gPT4gbnVsbFxuICogQGV4YW1wbGVcbiAqIC8vIGNhbiBjaGFuZ2UgdHVuaW5nICg0NDAgYnkgZGVmYXVsdClcbiAqIHBhcnNlci5mcmVxKCdBNCcsIDQ0NCkgLy8gPT4gNDQ0XG4gKiBwYXJzZXIuZnJlcSgnQTMnLCA0NDQpIC8vID0+IDIyMlxuICogQGV4YW1wbGVcbiAqIC8vIGl0IGFjY2VwdHMgbWlkaSBudW1iZXJzIChhcyBudW1iZXJzIGFuZCBhcyBzdHJpbmdzKVxuICogcGFyc2VyLmZyZXEoNjkpIC8vID0+IDQ0MFxuICogcGFyc2VyLmZyZXEoJzY5JywgNDQyKSAvLyA9PiA0NDJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyZXEgKG5vdGUsIHR1bmluZykge1xuICB2YXIgbSA9IG1pZGkobm90ZSlcbiAgcmV0dXJuIG0gPT09IG51bGwgPyBudWxsIDogbWlkaVRvRnJlcShtLCB0dW5pbmcpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZXR0ZXIgKHNyYykgeyByZXR1cm4gKHBhcnNlKHNyYykgfHwge30pLmxldHRlciB9XG5leHBvcnQgZnVuY3Rpb24gYWNjIChzcmMpIHsgcmV0dXJuIChwYXJzZShzcmMpIHx8IHt9KS5hY2MgfVxuZXhwb3J0IGZ1bmN0aW9uIHBjIChzcmMpIHsgcmV0dXJuIChwYXJzZShzcmMpIHx8IHt9KS5wYyB9XG5leHBvcnQgZnVuY3Rpb24gc3RlcCAoc3JjKSB7IHJldHVybiAocGFyc2Uoc3JjKSB8fCB7fSkuc3RlcCB9XG5leHBvcnQgZnVuY3Rpb24gYWx0IChzcmMpIHsgcmV0dXJuIChwYXJzZShzcmMpIHx8IHt9KS5hbHQgfVxuZXhwb3J0IGZ1bmN0aW9uIGNocm9tYSAoc3JjKSB7IHJldHVybiAocGFyc2Uoc3JjKSB8fCB7fSkuY2hyb21hIH1cbmV4cG9ydCBmdW5jdGlvbiBvY3QgKHNyYykgeyByZXR1cm4gKHBhcnNlKHNyYykgfHwge30pLm9jdCB9XG4iLCAiLyoqXG4gKiBBIG1pZGkgbm90ZSBudW1iZXIgaXMgYSBudW1iZXIgcmVwcmVzZW50YXRpb24gb2YgYSBub3RlIHBpdGNoLiBJdCBjYW4gYmVcbiAqIGludGVnZXJzIHNvIGl0J3MgZXF1YWwgdGVtcGVyZWQgdHVuZWQsIG9yIGZsb2F0IHRvIGluZGljYXRlIGl0J3Mgbm90XG4gKiB0dW5lZCBpbnRvIGVxdWFsIHRlbWVwZXJlZCBzY2FsZS5cbiAqXG4gKiBUaGlzIG1vZHVsZSBjb250YWlucyBmdW5jdGlvbnMgdG8gY29udmVydCB0byBhbmQgZnJvbSBtaWRpIG5vdGVzLlxuICpcbiAqIEBleGFtcGxlXG4gKiB2YXIgbWlkaSA9IHJlcXVpcmUoJ3RvbmFsLW1pZGknKVxuICogbWlkaS50b01pZGkoJ0E0JykgLy8gPT4gNjlcbiAqIG1pZGkubm90ZSg2OSkgLy8gPT4gJ0E0J1xuICogbWlkaS5ub3RlKDYxKSAvLyA9PiAnRGI0J1xuICogbWlkaS5ub3RlKDYxLCB0cnVlKSAvLyA9PiAnQyM0J1xuICpcbiAqIEBtb2R1bGUgbWlkaVxuICovXG5cbmltcG9ydCB7IG1pZGkgfSBmcm9tICdub3RlLXBhcnNlcidcblxuLyoqXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBub3RlIHRvIGEgbWlkaSBub3RlIG51bWJlci4gSWYgeW91IHBhc3MgYSBtaWRpIG51bWJlciBpdFxuICogd2lsbCByZXR1cm5lZCBhcyBpcy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fFN0cmluZ3xOdW1iZXJ9IG5vdGUgLSB0aGUgbm90ZSB0byBnZXQgdGhlIG1pZGkgbnVtYmVyIGZyb21cbiAqIEByZXR1cm4ge0ludGVnZXJ9IHRoZSBtaWRpIG51bWJlciBvciBudWxsIGlmIG5vdCB2YWxpZCBwaXRjaFxuICogQGV4YW1wbGVcbiAqIG1pZGkudG9NaWRpKCdDNCcpIC8vID0+IDYwXG4gKiBtaWRpLnRvTWlkaSg2MCkgLy8gPT4gNjBcbiAqIG1pZGkudG9NaWRpKCc2MCcpIC8vID0+IDYwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b01pZGkgKHZhbCkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpICYmIHZhbC5sZW5ndGggPT09IDIpIHJldHVybiB2YWxbMF0gKiA3ICsgdmFsWzFdICogMTIgKyAxMlxuICByZXR1cm4gbWlkaSh2YWwpXG59XG5cbnZhciBGTEFUUyA9ICdDIERiIEQgRWIgRSBGIEdiIEcgQWIgQSBCYiBCJy5zcGxpdCgnICcpXG52YXIgU0hBUlBTID0gJ0MgQyMgRCBEIyBFIEYgRiMgRyBHIyBBIEEjIEInLnNwbGl0KCcgJylcblxuLyoqXG4gKiBHaXZlbiBhIG1pZGkgbnVtYmVyLCByZXR1cm5zIGEgbm90ZSBuYW1lLiBUaGUgYWx0ZXJlZCBub3RlcyB3aWxsIGhhdmVcbiAqIGZsYXRzIHVubGVzcyBleHBsaWNpdGx5IHNldCB3aXRoIHRoZSBvcHRpb25hbCBgdXNlU2hhcnBzYCBwYXJhbWV0ZXIuXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0ludGVnZXJ9IG1pZGkgLSB0aGUgbWlkaSBub3RlIG51bWJlclxuICogQHBhcmFtIHtCb29sZWFufSB1c2VTaGFycHMgLSAoT3B0aW9uYWwpIHNldCB0byB0cnVlIHRvIHVzZSBzaGFycHMgaW5zdGVhZCBvZiBmbGF0c1xuICogQHJldHVybiB7U3RyaW5nfSB0aGUgbm90ZSBuYW1lXG4gKiBAZXhhbXBsZVxuICogdmFyIG1pZGkgPSByZXF1aXJlKCd0b25hbC1taWRpJylcbiAqIG1pZGkubm90ZSg2MSkgLy8gPT4gJ0RiNCdcbiAqIG1pZGkubm90ZSg2MSwgdHJ1ZSkgLy8gPT4gJ0MjNCdcbiAqIC8vIGl0IHJvdW5kcyB0byBuZWFyZXN0IG5vdGVcbiAqIG1pZGkubm90ZSg2MS43KSAvLyA9PiAnRDQnXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3RlIChudW0sIHNoYXJwcykge1xuICBpZiAobnVtID09PSB0cnVlIHx8IG51bSA9PT0gZmFsc2UpIHJldHVybiBmdW5jdGlvbiAobSkgeyByZXR1cm4gbm90ZShtLCBudW0pIH1cbiAgbnVtID0gTWF0aC5yb3VuZChudW0pXG4gIHZhciBwY3MgPSBzaGFycHMgPT09IHRydWUgPyBTSEFSUFMgOiBGTEFUU1xuICB2YXIgcGMgPSBwY3NbbnVtICUgMTJdXG4gIHZhciBvID0gTWF0aC5mbG9vcihudW0gLyAxMikgLSAxXG4gIHJldHVybiBwYyArIG9cbn1cbiIsICJ7XG4gIFwibmFtZVwiOiBcIm1pZGktd3JpdGVyLWpzXCIsXG4gIFwidmVyc2lvblwiOiBcIjIuMC4xXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJBIGxpYnJhcnkgcHJvdmlkaW5nIGFuIEFQSSBmb3IgZ2VuZXJhdGluZyBNSURJIGZpbGVzLlwiLFxuICBcIm1haW5cIjogXCJidWlsZC9pbmRleC5qc1wiLFxuICBcInR5cGVzXCI6IFwidHlwZXMuZC50c1wiLFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJ0b25hbC1taWRpXCI6IFwiXjAuNjkuN1wiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBiYWJlbC9jb3JlXCI6IFwiXjcuOS42XCIsXG4gICAgXCJAYmFiZWwvcGx1Z2luLXRyYW5zZm9ybS1kZXN0cnVjdHVyaW5nXCI6IFwiXjcuOS41XCIsXG4gICAgXCJAYmFiZWwvcHJlc2V0LWVudlwiOiBcIl43LjkuNlwiLFxuICAgIFwiQHJvbGx1cC9wbHVnaW4tYmFiZWxcIjogXCJeNS4wLjBcIixcbiAgICBcImVzbGludFwiOiBcIl43LjAuMFwiLFxuICAgIFwiZXNsaW50LWNvbmZpZy1zdGFuZGFyZFwiOiBcIl4xMi4wLjBcIixcbiAgICBcImVzbGludC1wbHVnaW4taW1wb3J0XCI6IFwiXjIuMjAuMlwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1ub2RlXCI6IFwiXjkuMi4wXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXByb21pc2VcIjogXCJeNC4xLjFcIixcbiAgICBcImVzbGludC1wbHVnaW4tc3RhbmRhcmRcIjogXCJeNC4wLjFcIixcbiAgICBcImpzZG9jXCI6IFwiXjMuNi40XCIsXG4gICAgXCJtaW5hbWlcIjogXCJeMS4yLjNcIixcbiAgICBcIm1vY2hhXCI6IFwiXjkuMC4xXCIsXG4gICAgXCJueWNcIjogXCJeMTUuMC4xXCIsXG4gICAgXCJyb2xsdXBcIjogXCJeMi45LjBcIixcbiAgICBcIndhdGNoXCI6IFwiXjEuMC4yXCJcbiAgfSxcbiAgXCJkaXJlY3Rvcmllc1wiOiB7XG4gICAgXCJsaWJcIjogXCJzcmNcIixcbiAgICBcImV4YW1wbGVcIjogXCJleGFtcGxlc1wiLFxuICAgIFwidGVzdFwiOiBcInRlc3RcIlxuICB9LFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwiYnVpbGRcIjogXCJta2RpciAtcCBidWlsZCAmJiByb2xsdXAgLWMgJiYgbnBtIHJ1biBkb2NzXCIsXG4gICAgXCJkb2NzXCI6IFwiLi9ub2RlX21vZHVsZXMvLmJpbi9qc2RvYyAtciBzcmMgUkVBRE1FLm1kIC1kIC4vZG9jcyAtdCAuL25vZGVfbW9kdWxlcy9taW5hbWlcIixcbiAgICBcImxpbnQ6anNcIjogXCJlc2xpbnQgJ3NyYy8qKi8qKi5qcydcIixcbiAgICBcInByZXB1Ymxpc2hPbmx5XCI6IFwibnBtIHRlc3RcIixcbiAgICBcInByZXRlc3RcIjogXCJucG0gcnVuIGJ1aWxkXCIsXG4gICAgXCJ0ZXN0XCI6IFwibnljIC0tcmVwb3J0ZXI9dGV4dCBtb2NoYSAtLW5vLWNvbmZpZyAtLW5vLXBhY2thZ2VcIixcbiAgICBcIndhdGNoXCI6IFwid2F0Y2ggJ25wbSBydW4gYnVpbGQnIHNyY1wiLFxuICAgIFwicG9zdGluc3RhbGxcIjogXCJub2RlIHBvc3RpbnN0YWxsLmpzXCJcbiAgfSxcbiAgXCJydW5raXRFeGFtcGxlRmlsZW5hbWVcIjogXCJydW5raXQuanNcIixcbiAgXCJyZXBvc2l0b3J5XCI6IHtcbiAgICBcInR5cGVcIjogXCJnaXRcIixcbiAgICBcInVybFwiOiBcImdpdCtodHRwczovL2dpdGh1Yi5jb20vZ3JpbW1kdWRlL01pZGlXcml0ZXJKUy5naXRcIlxuICB9LFxuICBcImtleXdvcmRzXCI6IFtcbiAgICBcIm1pZGlcIixcbiAgICBcImdlbmVyYXRvclwiLFxuICAgIFwibXVzaWNcIlxuICBdLFxuICBcImF1dGhvclwiOiBcIkdhcnJldHQgR3JpbW1cIixcbiAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gIFwiYnVnc1wiOiB7XG4gICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZ3JpbW1kdWRlL01pZGlXcml0ZXJKUy9pc3N1ZXNcIlxuICB9LFxuICBcImhvbWVwYWdlXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2dyaW1tZHVkZS9NaWRpV3JpdGVySlMjcmVhZG1lXCJcbn1cbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciB0b25hbE1pZGkgPSByZXF1aXJlKCd0b25hbC1taWRpJyk7XG5cbi8qKlxuICogTUlESSBmaWxlIGZvcm1hdCBjb25zdGFudHMuXG4gKiBAcmV0dXJuIHtDb25zdGFudHN9XG4gKi9cbnZhciBDb25zdGFudHMgPSB7XG4gIFZFUlNJT046IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpLnZlcnNpb24sXG4gIEhFQURFUl9DSFVOS19UWVBFOiBbMHg0ZCwgMHg1NCwgMHg2OCwgMHg2NF0sXG4gIC8vIE10aGRcbiAgSEVBREVSX0NIVU5LX0xFTkdUSDogWzB4MDAsIDB4MDAsIDB4MDAsIDB4MDZdLFxuICAvLyBIZWFkZXIgc2l6ZSBmb3IgU01GXG4gIEhFQURFUl9DSFVOS19GT1JNQVQwOiBbMHgwMCwgMHgwMF0sXG4gIC8vIE1pZGkgVHlwZSAwIGlkXG4gIEhFQURFUl9DSFVOS19GT1JNQVQxOiBbMHgwMCwgMHgwMV0sXG4gIC8vIE1pZGkgVHlwZSAxIGlkXG4gIEhFQURFUl9DSFVOS19ESVZJU0lPTjogWzB4MDAsIDB4ODBdLFxuICAvLyBEZWZhdWx0cyB0byAxMjggdGlja3MgcGVyIGJlYXRcbiAgVFJBQ0tfQ0hVTktfVFlQRTogWzB4NGQsIDB4NTQsIDB4NzIsIDB4NmJdLFxuICAvLyBNVHJrLFxuICBNRVRBX0VWRU5UX0lEOiAweEZGLFxuICBNRVRBX1RFWFRfSUQ6IDB4MDEsXG4gIE1FVEFfQ09QWVJJR0hUX0lEOiAweDAyLFxuICBNRVRBX1RSQUNLX05BTUVfSUQ6IDB4MDMsXG4gIE1FVEFfSU5TVFJVTUVOVF9OQU1FX0lEOiAweDA0LFxuICBNRVRBX0xZUklDX0lEOiAweDA1LFxuICBNRVRBX01BUktFUl9JRDogMHgwNixcbiAgTUVUQV9DVUVfUE9JTlQ6IDB4MDcsXG4gIE1FVEFfVEVNUE9fSUQ6IDB4NTEsXG4gIE1FVEFfU01UUEVfT0ZGU0VUOiAweDU0LFxuICBNRVRBX1RJTUVfU0lHTkFUVVJFX0lEOiAweDU4LFxuICBNRVRBX0tFWV9TSUdOQVRVUkVfSUQ6IDB4NTksXG4gIE1FVEFfRU5EX09GX1RSQUNLX0lEOiBbMHgyRiwgMHgwMF0sXG4gIENPTlRST0xMRVJfQ0hBTkdFX1NUQVRVUzogMHhCMCxcbiAgLy8gaW5jbHVkZXMgY2hhbm5lbCBudW1iZXIgKDApXG4gIFBST0dSQU1fQ0hBTkdFX1NUQVRVUzogMHhDMCxcbiAgLy8gaW5jbHVkZXMgY2hhbm5lbCBudW1iZXIgKDApXG4gIFBJVENIX0JFTkRfU1RBVFVTOiAweEUwIC8vIGluY2x1ZGVzIGNoYW5uZWwgbnVtYmVyICgwKVxuXG59O1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5mdW5jdGlvbiBfd3JhcFJlZ0V4cCgpIHtcbiAgX3dyYXBSZWdFeHAgPSBmdW5jdGlvbiAocmUsIGdyb3Vwcykge1xuICAgIHJldHVybiBuZXcgQmFiZWxSZWdFeHAocmUsIHVuZGVmaW5lZCwgZ3JvdXBzKTtcbiAgfTtcblxuICB2YXIgX3N1cGVyID0gUmVnRXhwLnByb3RvdHlwZTtcblxuICB2YXIgX2dyb3VwcyA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgZnVuY3Rpb24gQmFiZWxSZWdFeHAocmUsIGZsYWdzLCBncm91cHMpIHtcbiAgICB2YXIgX3RoaXMgPSBuZXcgUmVnRXhwKHJlLCBmbGFncyk7XG5cbiAgICBfZ3JvdXBzLnNldChfdGhpcywgZ3JvdXBzIHx8IF9ncm91cHMuZ2V0KHJlKSk7XG5cbiAgICByZXR1cm4gX3NldFByb3RvdHlwZU9mKF90aGlzLCBCYWJlbFJlZ0V4cC5wcm90b3R5cGUpO1xuICB9XG5cbiAgX2luaGVyaXRzKEJhYmVsUmVnRXhwLCBSZWdFeHApO1xuXG4gIEJhYmVsUmVnRXhwLnByb3RvdHlwZS5leGVjID0gZnVuY3Rpb24gKHN0cikge1xuICAgIHZhciByZXN1bHQgPSBfc3VwZXIuZXhlYy5jYWxsKHRoaXMsIHN0cik7XG5cbiAgICBpZiAocmVzdWx0KSByZXN1bHQuZ3JvdXBzID0gYnVpbGRHcm91cHMocmVzdWx0LCB0aGlzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIEJhYmVsUmVnRXhwLnByb3RvdHlwZVtTeW1ib2wucmVwbGFjZV0gPSBmdW5jdGlvbiAoc3RyLCBzdWJzdGl0dXRpb24pIHtcbiAgICBpZiAodHlwZW9mIHN1YnN0aXR1dGlvbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgdmFyIGdyb3VwcyA9IF9ncm91cHMuZ2V0KHRoaXMpO1xuXG4gICAgICByZXR1cm4gX3N1cGVyW1N5bWJvbC5yZXBsYWNlXS5jYWxsKHRoaXMsIHN0ciwgc3Vic3RpdHV0aW9uLnJlcGxhY2UoL1xcJDwoW14+XSspPi9nLCBmdW5jdGlvbiAoXywgbmFtZSkge1xuICAgICAgICByZXR1cm4gXCIkXCIgKyBncm91cHNbbmFtZV07XG4gICAgICB9KSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc3Vic3RpdHV0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBfc3VwZXJbU3ltYm9sLnJlcGxhY2VdLmNhbGwodGhpcywgc3RyLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuXG4gICAgICAgIGlmICh0eXBlb2YgYXJnc1thcmdzLmxlbmd0aCAtIDFdICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJncyk7XG4gICAgICAgICAgYXJncy5wdXNoKGJ1aWxkR3JvdXBzKGFyZ3MsIF90aGlzKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3Vic3RpdHV0aW9uLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBfc3VwZXJbU3ltYm9sLnJlcGxhY2VdLmNhbGwodGhpcywgc3RyLCBzdWJzdGl0dXRpb24pO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBidWlsZEdyb3VwcyhyZXN1bHQsIHJlKSB7XG4gICAgdmFyIGcgPSBfZ3JvdXBzLmdldChyZSk7XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZykucmVkdWNlKGZ1bmN0aW9uIChncm91cHMsIG5hbWUpIHtcbiAgICAgIGdyb3Vwc1tuYW1lXSA9IHJlc3VsdFtnW25hbWVdXTtcbiAgICAgIHJldHVybiBncm91cHM7XG4gICAgfSwgT2JqZWN0LmNyZWF0ZShudWxsKSk7XG4gIH1cblxuICByZXR1cm4gX3dyYXBSZWdFeHAuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxuLyoqXG4gKiBTdGF0aWMgdXRpbGl0eSBmdW5jdGlvbnMgdXNlZCB0aHJvdWdob3V0IHRoZSBsaWJyYXJ5LlxuICovXG5cbnZhciBVdGlscyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFV0aWxzKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBVdGlscyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVXRpbHMsIG51bGwsIFt7XG4gICAga2V5OiBcInZlcnNpb25cIixcbiAgICB2YWx1ZTpcbiAgICAvKipcbiAgICAgKiBHZXRzIE1pZGlXcml0ZXJKUyB2ZXJzaW9uIG51bWJlci5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgZnVuY3Rpb24gdmVyc2lvbigpIHtcbiAgICAgIHJldHVybiBDb25zdGFudHMuVkVSU0lPTjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVydCBhIHN0cmluZyB0byBhbiBhcnJheSBvZiBieXRlc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdcbiAgICAgKiBAcmV0dXJuIHthcnJheX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInN0cmluZ1RvQnl0ZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RyaW5nVG9CeXRlcyhzdHJpbmcpIHtcbiAgICAgIHJldHVybiBzdHJpbmcuc3BsaXQoJycpLm1hcChmdW5jdGlvbiAoX2NoYXIpIHtcbiAgICAgICAgcmV0dXJuIF9jaGFyLmNoYXJDb2RlQXQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgYXJndW1lbnQgaXMgYSB2YWxpZCBudW1iZXIuXG4gICAgICogQHBhcmFtIHsqfSBuIC0gVmFsdWUgdG8gY2hlY2tcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaXNOdW1lcmljXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzTnVtZXJpYyhuKSB7XG4gICAgICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQobikpICYmIGlzRmluaXRlKG4pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjb3JyZWN0IE1JREkgbnVtYmVyIGZvciB0aGUgc3BlY2lmaWVkIHBpdGNoLlxuICAgICAqIFVzZXMgVG9uYWwgTWlkaSAtIGh0dHBzOi8vZ2l0aHViLmNvbS9kYW5pZ2IvdG9uYWwvdHJlZS9tYXN0ZXIvcGFja2FnZXMvbWlkaVxuICAgICAqIEBwYXJhbSB7KHN0cmluZ3xudW1iZXIpfSBwaXRjaCAtICdDIzQnIG9yIG1pZGkgbm90ZSBjb2RlXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0UGl0Y2hcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UGl0Y2gocGl0Y2gpIHtcbiAgICAgIHJldHVybiB0b25hbE1pZGkudG9NaWRpKHBpdGNoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVHJhbnNsYXRlcyBudW1iZXIgb2YgdGlja3MgdG8gTUlESSB0aW1lc3RhbXAgZm9ybWF0LCByZXR1cm5pbmcgYW4gYXJyYXkgb2ZcbiAgICAgKiBoZXggc3RyaW5ncyB3aXRoIHRoZSB0aW1lIHZhbHVlcy4gTWlkaSBoYXMgYSB2ZXJ5IHBhcnRpY3VsYXIgdGltZSB0byBleHByZXNzIHRpbWUsXG4gICAgICogdGFrZSBhIGdvb2QgbG9vayBhdCB0aGUgc3BlYyBiZWZvcmUgZXZlciB0b3VjaGluZyB0aGlzIGZ1bmN0aW9uLlxuICAgICAqIFRoYW5rcyB0byBodHRwczovL2dpdGh1Yi5jb20vc2VyZ2kvanNtaWRpXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGlja3MgLSBOdW1iZXIgb2YgdGlja3MgdG8gYmUgdHJhbnNsYXRlZFxuICAgICAqIEByZXR1cm4ge2FycmF5fSAtIEJ5dGVzIHRoYXQgZm9ybSB0aGUgTUlESSB0aW1lIHZhbHVlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJudW1iZXJUb1ZhcmlhYmxlTGVuZ3RoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG51bWJlclRvVmFyaWFibGVMZW5ndGgodGlja3MpIHtcbiAgICAgIHRpY2tzID0gTWF0aC5yb3VuZCh0aWNrcyk7XG4gICAgICB2YXIgYnVmZmVyID0gdGlja3MgJiAweDdGO1xuXG4gICAgICB3aGlsZSAodGlja3MgPSB0aWNrcyA+PiA3KSB7XG4gICAgICAgIGJ1ZmZlciA8PD0gODtcbiAgICAgICAgYnVmZmVyIHw9IHRpY2tzICYgMHg3RiB8IDB4ODA7XG4gICAgICB9XG5cbiAgICAgIHZhciBiTGlzdCA9IFtdO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBiTGlzdC5wdXNoKGJ1ZmZlciAmIDB4ZmYpO1xuICAgICAgICBpZiAoYnVmZmVyICYgMHg4MCkgYnVmZmVyID4+PSA4O2Vsc2Uge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBiTGlzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ291bnRzIG51bWJlciBvZiBieXRlcyBpbiBzdHJpbmdcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc1xuICAgICAqIEByZXR1cm4ge2FycmF5fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3RyaW5nQnl0ZUNvdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0cmluZ0J5dGVDb3VudChzKSB7XG4gICAgICByZXR1cm4gZW5jb2RlVVJJKHMpLnNwbGl0KC8lLi58Li8pLmxlbmd0aCAtIDE7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBhbiBpbnQgZnJvbSBhbiBhcnJheSBvZiBieXRlcy5cbiAgICAgKiBAcGFyYW0ge2FycmF5fSBieXRlc1xuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm51bWJlckZyb21CeXRlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBudW1iZXJGcm9tQnl0ZXMoYnl0ZXMpIHtcbiAgICAgIHZhciBoZXggPSAnJztcbiAgICAgIHZhciBzdHJpbmdSZXN1bHQ7XG4gICAgICBieXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChfYnl0ZSkge1xuICAgICAgICBzdHJpbmdSZXN1bHQgPSBfYnl0ZS50b1N0cmluZygxNik7IC8vIGVuc3VyZSBzdHJpbmcgaXMgMiBjaGFyc1xuXG4gICAgICAgIGlmIChzdHJpbmdSZXN1bHQubGVuZ3RoID09IDEpIHN0cmluZ1Jlc3VsdCA9IFwiMFwiICsgc3RyaW5nUmVzdWx0O1xuICAgICAgICBoZXggKz0gc3RyaW5nUmVzdWx0O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcGFyc2VJbnQoaGV4LCAxNik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRha2VzIGEgbnVtYmVyIGFuZCBzcGxpdHMgaXQgdXAgaW50byBhbiBhcnJheSBvZiBieXRlcy4gIENhbiBiZSBwYWRkZWQgYnkgcGFzc2luZyBhIG51bWJlciB0byBieXRlc05lZWRlZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYnl0ZXNOZWVkZWRcbiAgICAgKiBAcmV0dXJuIHthcnJheX0gLSBBcnJheSBvZiBieXRlc1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibnVtYmVyVG9CeXRlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBudW1iZXJUb0J5dGVzKG51bWJlciwgYnl0ZXNOZWVkZWQpIHtcbiAgICAgIGJ5dGVzTmVlZGVkID0gYnl0ZXNOZWVkZWQgfHwgMTtcbiAgICAgIHZhciBoZXhTdHJpbmcgPSBudW1iZXIudG9TdHJpbmcoMTYpO1xuXG4gICAgICBpZiAoaGV4U3RyaW5nLmxlbmd0aCAmIDEpIHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIGhleCBzdHJpbmcgaXMgZXZlbiBudW1iZXIgb2YgY2hhcnNcbiAgICAgICAgaGV4U3RyaW5nID0gJzAnICsgaGV4U3RyaW5nO1xuICAgICAgfSAvLyBTcGxpdCBoZXggc3RyaW5nIGludG8gYW4gYXJyYXkgb2YgdHdvIGNoYXIgZWxlbWVudHNcblxuXG4gICAgICB2YXIgaGV4QXJyYXkgPSBoZXhTdHJpbmcubWF0Y2goLy57Mn0vZyk7IC8vIE5vdyBwYXJzZSB0aGVtIG91dCBhcyBpbnRlZ2Vyc1xuXG4gICAgICBoZXhBcnJheSA9IGhleEFycmF5Lm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoaXRlbSwgMTYpO1xuICAgICAgfSk7IC8vIFByZXBlbmQgZW1wdHkgYnl0ZXMgaWYgd2UgZG9uJ3QgaGF2ZSBlbm91Z2hcblxuICAgICAgaWYgKGhleEFycmF5Lmxlbmd0aCA8IGJ5dGVzTmVlZGVkKSB7XG4gICAgICAgIHdoaWxlIChieXRlc05lZWRlZCAtIGhleEFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBoZXhBcnJheS51bnNoaWZ0KDApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoZXhBcnJheTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgdmFsdWUgdG8gYXJyYXkgaWYgbmVlZGVkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgICAqIEByZXR1cm4ge2FycmF5fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidG9BcnJheVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b0FycmF5KHZhbHVlKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICAgIHJldHVybiBbdmFsdWVdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyB2ZWxvY2l0eSB0byB2YWx1ZSAwLTEyN1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2ZWxvY2l0eSAtIFZlbG9jaXR5IHZhbHVlIDEtMTAwXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY29udmVydFZlbG9jaXR5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbnZlcnRWZWxvY2l0eSh2ZWxvY2l0eSkge1xuICAgICAgLy8gTWF4IHBhc3NlZCB2YWx1ZSBsaW1pdGVkIHRvIDEwMFxuICAgICAgdmVsb2NpdHkgPSB2ZWxvY2l0eSA+IDEwMCA/IDEwMCA6IHZlbG9jaXR5O1xuICAgICAgcmV0dXJuIE1hdGgucm91bmQodmVsb2NpdHkgLyAxMDAgKiAxMjcpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSB0b3RhbCBudW1iZXIgb2YgdGlja3Mgb2YgYSBzcGVjaWZpZWQgZHVyYXRpb24uXG4gICAgICogTm90ZTogdHlwZT09J25vdGUnIGRlZmF1bHRzIHRvIHF1YXJ0ZXIgbm90ZSwgdHlwZT09PSdyZXN0JyBkZWZhdWx0cyB0byAwXG4gICAgICogQHBhcmFtIHsoc3RyaW5nfGFycmF5KX0gZHVyYXRpb25cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRUaWNrRHVyYXRpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VGlja0R1cmF0aW9uKGR1cmF0aW9uKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShkdXJhdGlvbikpIHtcbiAgICAgICAgLy8gUmVjdXJzaXZlbHkgZXhlY3V0ZSB0aGlzIG1ldGhvZCBmb3IgZWFjaCBpdGVtIGluIHRoZSBhcnJheSBhbmQgcmV0dXJuIHRoZSBzdW0gb2YgdGljayBkdXJhdGlvbnMuXG4gICAgICAgIHJldHVybiBkdXJhdGlvbi5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIFV0aWxzLmdldFRpY2tEdXJhdGlvbih2YWx1ZSk7XG4gICAgICAgIH0pLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgIHJldHVybiBhICsgYjtcbiAgICAgICAgfSwgMCk7XG4gICAgICB9XG5cbiAgICAgIGR1cmF0aW9uID0gZHVyYXRpb24udG9TdHJpbmcoKTtcblxuICAgICAgaWYgKGR1cmF0aW9uLnRvTG93ZXJDYXNlKCkuY2hhckF0KDApID09PSAndCcpIHtcbiAgICAgICAgLy8gSWYgZHVyYXRpb24gc3RhcnRzIHdpdGggJ3QnIHRoZW4gdGhlIG51bWJlciB0aGF0IGZvbGxvd3MgaXMgYW4gZXhwbGljaXQgdGljayBjb3VudFxuICAgICAgICByZXR1cm4gcGFyc2VJbnQoZHVyYXRpb24uc3Vic3RyaW5nKDEpKTtcbiAgICAgIH0gLy8gTmVlZCB0byBhcHBseSBkdXJhdGlvbiBoZXJlLiAgUXVhcnRlciBub3RlID09IENvbnN0YW50cy5IRUFERVJfQ0hVTktfRElWSVNJT05cblxuXG4gICAgICB2YXIgcXVhcnRlclRpY2tzID0gVXRpbHMubnVtYmVyRnJvbUJ5dGVzKENvbnN0YW50cy5IRUFERVJfQ0hVTktfRElWSVNJT04pO1xuICAgICAgdmFyIHRpY2tEdXJhdGlvbiA9IHF1YXJ0ZXJUaWNrcyAqIFV0aWxzLmdldER1cmF0aW9uTXVsdGlwbGllcihkdXJhdGlvbik7XG4gICAgICByZXR1cm4gVXRpbHMuZ2V0Um91bmRlZElmQ2xvc2UodGlja0R1cmF0aW9uKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRHVlIHRvIHJvdW5kaW5nIGVycm9ycyBpbiBKYXZhU2NyaXB0IGVuZ2luZXMsXG4gICAgICogaXQncyBzYWZlIHRvIHJvdW5kIHdoZW4gd2UncmUgdmVyeSBjbG9zZSB0byB0aGUgYWN0dWFsIHRpY2sgbnVtYmVyXG4gICAgICpcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpY2tcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRSb3VuZGVkSWZDbG9zZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSb3VuZGVkSWZDbG9zZSh0aWNrKSB7XG4gICAgICB2YXIgcm91bmRlZFRpY2sgPSBNYXRoLnJvdW5kKHRpY2spO1xuICAgICAgcmV0dXJuIE1hdGguYWJzKHJvdW5kZWRUaWNrIC0gdGljaykgPCAwLjAwMDAwMSA/IHJvdW5kZWRUaWNrIDogdGljaztcbiAgICB9XG4gICAgLyoqXG4gICAgICogRHVlIHRvIGxvdyBwcmVjaXNpb24gb2YgTUlESSxcbiAgICAgKiB3ZSBuZWVkIHRvIGtlZXAgdHJhY2sgb2Ygcm91bmRpbmcgZXJyb3JzIGluIGRlbHRhcy5cbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHdpbGwgY2FsY3VsYXRlIHRoZSByb3VuZGluZyBlcnJvciBmb3IgYSBnaXZlbiBkdXJhdGlvbi5cbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGlja1xuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFByZWNpc2lvbkxvc3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UHJlY2lzaW9uTG9zcyh0aWNrKSB7XG4gICAgICB2YXIgcm91bmRlZFRpY2sgPSBNYXRoLnJvdW5kKHRpY2spO1xuICAgICAgcmV0dXJuIHJvdW5kZWRUaWNrIC0gdGljaztcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB3aGF0IHRvIG11bHRpcGxlIHRpY2tzL3F1YXJ0ZXIgbm90ZSBieSB0byBnZXQgdGhlIHNwZWNpZmllZCBkdXJhdGlvbi5cbiAgICAgKiBOb3RlOiB0eXBlPT0nbm90ZScgZGVmYXVsdHMgdG8gcXVhcnRlciBub3RlLCB0eXBlPT09J3Jlc3QnIGRlZmF1bHRzIHRvIDBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZHVyYXRpb25cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXREdXJhdGlvbk11bHRpcGxpZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RHVyYXRpb25NdWx0aXBsaWVyKGR1cmF0aW9uKSB7XG4gICAgICAvLyBOZWVkIHRvIGFwcGx5IGR1cmF0aW9uIGhlcmUuXG4gICAgICAvLyBRdWFydGVyIG5vdGUgPT0gQ29uc3RhbnRzLkhFQURFUl9DSFVOS19ESVZJU0lPTiB0aWNrcy5cbiAgICAgIGlmIChkdXJhdGlvbiA9PT0gJzAnKSByZXR1cm4gMDtcbiAgICAgIHZhciBtYXRjaCA9IGR1cmF0aW9uLm1hdGNoKCAvKiNfX1BVUkVfXyovX3dyYXBSZWdFeHAoL14oZCspPyhbMC05XSspKD86dChbMC05XSopKT8vLCB7XG4gICAgICAgIGRvdHRlZDogMSxcbiAgICAgICAgYmFzZTogMixcbiAgICAgICAgdHVwbGV0OiAzXG4gICAgICB9KSk7XG5cbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICB2YXIgYmFzZSA9IE51bWJlcihtYXRjaC5ncm91cHMuYmFzZSk7IC8vIDEgb3IgYW55IHBvd2VyIG9mIHR3bzpcblxuICAgICAgICB2YXIgaXNWYWxpZEJhc2UgPSBiYXNlID09PSAxIHx8IChiYXNlICYgYmFzZSAtIDEpID09PSAwO1xuXG4gICAgICAgIGlmIChpc1ZhbGlkQmFzZSkge1xuICAgICAgICAgIC8vIGhvdyBtdWNoIGZhc3RlciBvciBzbG93ZXIgaXMgdGhpcyBub3RlIGNvbXBhcmVkIHRvIGEgcXVhcnRlcj9cbiAgICAgICAgICB2YXIgcmF0aW8gPSBiYXNlIC8gNDtcbiAgICAgICAgICB2YXIgZHVyYXRpb25JblF1YXJ0ZXJzID0gMSAvIHJhdGlvO1xuICAgICAgICAgIHZhciBfbWF0Y2gkZ3JvdXBzID0gbWF0Y2guZ3JvdXBzLFxuICAgICAgICAgICAgICBkb3R0ZWQgPSBfbWF0Y2gkZ3JvdXBzLmRvdHRlZCxcbiAgICAgICAgICAgICAgdHVwbGV0ID0gX21hdGNoJGdyb3Vwcy50dXBsZXQ7XG5cbiAgICAgICAgICBpZiAoZG90dGVkKSB7XG4gICAgICAgICAgICB2YXIgdGhpc01hbnlEb3RzID0gZG90dGVkLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciBkaXZpc29yID0gTWF0aC5wb3coMiwgdGhpc01hbnlEb3RzKTtcbiAgICAgICAgICAgIGR1cmF0aW9uSW5RdWFydGVycyA9IGR1cmF0aW9uSW5RdWFydGVycyArIGR1cmF0aW9uSW5RdWFydGVycyAqICgoZGl2aXNvciAtIDEpIC8gZGl2aXNvcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0dXBsZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB2YXIgZml0SW50byA9IGR1cmF0aW9uSW5RdWFydGVycyAqIDI7IC8vIGRlZmF1bHQgdG8gdHJpcGxldDpcblxuICAgICAgICAgICAgdmFyIHRoaXNNYW55Tm90ZXMgPSBOdW1iZXIodHVwbGV0IHx8ICczJyk7XG4gICAgICAgICAgICBkdXJhdGlvbkluUXVhcnRlcnMgPSBmaXRJbnRvIC8gdGhpc01hbnlOb3RlcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZHVyYXRpb25JblF1YXJ0ZXJzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihkdXJhdGlvbiArICcgaXMgbm90IGEgdmFsaWQgZHVyYXRpb24uJyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFV0aWxzO1xufSgpO1xuXG4vKipcbiAqIEhvbGRzIGFsbCBkYXRhIGZvciBhIFwibm90ZSBvblwiIE1JREkgZXZlbnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZHMge2RhdGE6IFtdfVxuICogQHJldHVybiB7Tm90ZU9uRXZlbnR9XG4gKi9cblxudmFyIE5vdGVPbkV2ZW50ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTm90ZU9uRXZlbnQoZmllbGRzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5vdGVPbkV2ZW50KTtcblxuICAgIC8vIFNldCBkZWZhdWx0IGZpZWxkc1xuICAgIGZpZWxkcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2hhbm5lbDogMSxcbiAgICAgIHN0YXJ0VGljazogbnVsbCxcbiAgICAgIHZlbG9jaXR5OiA1MCxcbiAgICAgIHdhaXQ6IDBcbiAgICB9LCBmaWVsZHMpO1xuICAgIHRoaXMudHlwZSA9ICdub3RlLW9uJztcbiAgICB0aGlzLmNoYW5uZWwgPSBmaWVsZHMuY2hhbm5lbDtcbiAgICB0aGlzLnBpdGNoID0gZmllbGRzLnBpdGNoO1xuICAgIHRoaXMud2FpdCA9IGZpZWxkcy53YWl0O1xuICAgIHRoaXMudmVsb2NpdHkgPSBmaWVsZHMudmVsb2NpdHk7XG4gICAgdGhpcy5zdGFydFRpY2sgPSBmaWVsZHMuc3RhcnRUaWNrO1xuICAgIHRoaXMubWlkaU51bWJlciA9IFV0aWxzLmdldFBpdGNoKHRoaXMucGl0Y2gpO1xuICAgIHRoaXMudGljayA9IG51bGw7XG4gICAgdGhpcy5kZWx0YSA9IG51bGw7XG4gICAgdGhpcy5kYXRhID0gZmllbGRzLmRhdGE7XG4gIH1cbiAgLyoqXG4gICAqIEJ1aWxkcyBpbnQgYXJyYXkgZm9yIHRoaXMgZXZlbnQuXG4gICAqIEBwYXJhbSB7VHJhY2t9IHRyYWNrIC0gcGFyZW50IHRyYWNrXG4gICAqIEByZXR1cm4ge05vdGVPbkV2ZW50fVxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhOb3RlT25FdmVudCwgW3tcbiAgICBrZXk6IFwiYnVpbGREYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJ1aWxkRGF0YSh0cmFjaywgcHJlY2lzaW9uRGVsdGEpIHtcbiAgICAgIHRoaXMuZGF0YSA9IFtdOyAvLyBFeHBsaWNpdGx5IGRlZmluZWQgc3RhcnRUaWNrIGV2ZW50XG5cbiAgICAgIGlmICh0aGlzLnN0YXJ0VGljaykge1xuICAgICAgICB0aGlzLnRpY2sgPSBVdGlscy5nZXRSb3VuZGVkSWZDbG9zZSh0aGlzLnN0YXJ0VGljayk7IC8vIElmIHRoaXMgaXMgdGhlIGZpcnN0IGV2ZW50IGluIHRoZSB0cmFjayB0aGVuIHVzZSBldmVudCdzIHN0YXJ0aW5nIHRpY2sgYXMgZGVsdGEuXG5cbiAgICAgICAgaWYgKHRyYWNrLnRpY2tQb2ludGVyID09IDApIHtcbiAgICAgICAgICB0aGlzLmRlbHRhID0gdGhpcy50aWNrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRlbHRhID0gVXRpbHMuZ2V0VGlja0R1cmF0aW9uKHRoaXMud2FpdCk7XG4gICAgICAgIHRoaXMudGljayA9IFV0aWxzLmdldFJvdW5kZWRJZkNsb3NlKHRyYWNrLnRpY2tQb2ludGVyICsgdGhpcy5kZWx0YSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGVsdGFXaXRoUHJlY2lzaW9uQ29ycmVjdGlvbiA9IFV0aWxzLmdldFJvdW5kZWRJZkNsb3NlKHRoaXMuZGVsdGEgLSBwcmVjaXNpb25EZWx0YSk7XG4gICAgICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRoaXMuZGVsdGFXaXRoUHJlY2lzaW9uQ29ycmVjdGlvbikuY29uY2F0KHRoaXMuZ2V0U3RhdHVzQnl0ZSgpLCB0aGlzLm1pZGlOdW1iZXIsIFV0aWxzLmNvbnZlcnRWZWxvY2l0eSh0aGlzLnZlbG9jaXR5KSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgbm90ZSBvbiBzdGF0dXMgY29kZSBiYXNlZCBvbiB0aGUgc2VsZWN0ZWQgY2hhbm5lbC4gMHg5ezAtRn1cbiAgICAgKiBOb3RlIG9uIGF0IGNoYW5uZWwgMCBpcyAweDkwICgxNDQpXG4gICAgICogMCA9IENoIDFcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRTdGF0dXNCeXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFN0YXR1c0J5dGUoKSB7XG4gICAgICByZXR1cm4gMTQ0ICsgdGhpcy5jaGFubmVsIC0gMTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTm90ZU9uRXZlbnQ7XG59KCk7XG5cbi8qKlxuICogSG9sZHMgYWxsIGRhdGEgZm9yIGEgXCJub3RlIG9mZlwiIE1JREkgZXZlbnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZHMge2RhdGE6IFtdfVxuICogQHJldHVybiB7Tm90ZU9mZkV2ZW50fVxuICovXG5cbnZhciBOb3RlT2ZmRXZlbnQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBOb3RlT2ZmRXZlbnQoZmllbGRzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5vdGVPZmZFdmVudCk7XG5cbiAgICAvLyBTZXQgZGVmYXVsdCBmaWVsZHNcbiAgICBmaWVsZHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNoYW5uZWw6IDEsXG4gICAgICB2ZWxvY2l0eTogNTAsXG4gICAgICB0aWNrOiBudWxsXG4gICAgfSwgZmllbGRzKTtcbiAgICB0aGlzLnR5cGUgPSAnbm90ZS1vZmYnO1xuICAgIHRoaXMuY2hhbm5lbCA9IGZpZWxkcy5jaGFubmVsO1xuICAgIHRoaXMucGl0Y2ggPSBmaWVsZHMucGl0Y2g7XG4gICAgdGhpcy5kdXJhdGlvbiA9IGZpZWxkcy5kdXJhdGlvbjtcbiAgICB0aGlzLnZlbG9jaXR5ID0gZmllbGRzLnZlbG9jaXR5O1xuICAgIHRoaXMubWlkaU51bWJlciA9IFV0aWxzLmdldFBpdGNoKHRoaXMucGl0Y2gpO1xuICAgIHRoaXMudGljayA9IGZpZWxkcy50aWNrO1xuICAgIHRoaXMuZGVsdGEgPSBVdGlscy5nZXRUaWNrRHVyYXRpb24odGhpcy5kdXJhdGlvbik7XG4gICAgdGhpcy5kYXRhID0gZmllbGRzLmRhdGE7XG4gIH1cbiAgLyoqXG4gICAqIEJ1aWxkcyBpbnQgYXJyYXkgZm9yIHRoaXMgZXZlbnQuXG4gICAqIEBwYXJhbSB7VHJhY2t9IHRyYWNrIC0gcGFyZW50IHRyYWNrXG4gICAqIEByZXR1cm4ge05vdGVPZmZFdmVudH1cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoTm90ZU9mZkV2ZW50LCBbe1xuICAgIGtleTogXCJidWlsZERhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYnVpbGREYXRhKHRyYWNrLCBwcmVjaXNpb25EZWx0YSkge1xuICAgICAgaWYgKHRoaXMudGljayA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLnRpY2sgPSBVdGlscy5nZXRSb3VuZGVkSWZDbG9zZSh0aGlzLmRlbHRhICsgdHJhY2sudGlja1BvaW50ZXIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRlbHRhV2l0aFByZWNpc2lvbkNvcnJlY3Rpb24gPSBVdGlscy5nZXRSb3VuZGVkSWZDbG9zZSh0aGlzLmRlbHRhIC0gcHJlY2lzaW9uRGVsdGEpO1xuICAgICAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0aGlzLmRlbHRhV2l0aFByZWNpc2lvbkNvcnJlY3Rpb24pLmNvbmNhdCh0aGlzLmdldFN0YXR1c0J5dGUoKSwgdGhpcy5taWRpTnVtYmVyLCBVdGlscy5jb252ZXJ0VmVsb2NpdHkodGhpcy52ZWxvY2l0eSkpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIG5vdGUgb2ZmIHN0YXR1cyBjb2RlIGJhc2VkIG9uIHRoZSBzZWxlY3RlZCBjaGFubmVsLiAweDh7MC1GfVxuICAgICAqIE5vdGUgb2ZmIGF0IGNoYW5uZWwgMCBpcyAweDgwICgxMjgpXG4gICAgICogMCA9IENoIDFcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRTdGF0dXNCeXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFN0YXR1c0J5dGUoKSB7XG4gICAgICByZXR1cm4gMTI4ICsgdGhpcy5jaGFubmVsIC0gMTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTm90ZU9mZkV2ZW50O1xufSgpO1xuXG4vKipcbiAqIFdyYXBwZXIgZm9yIG5vdGVPbkV2ZW50L25vdGVPZmZFdmVudCBvYmplY3RzIHRoYXQgYnVpbGRzIGJvdGggZXZlbnRzLlxuICogQHBhcmFtIHtvYmplY3R9IGZpZWxkcyAtIHtwaXRjaDogJ1tDNF0nLCBkdXJhdGlvbjogJzQnLCB3YWl0OiAnNCcsIHZlbG9jaXR5OiAxLTEwMH1cbiAqIEByZXR1cm4ge05vdGVFdmVudH1cbiAqL1xuXG52YXIgTm90ZUV2ZW50ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTm90ZUV2ZW50KGZpZWxkcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb3RlRXZlbnQpO1xuXG4gICAgLy8gU2V0IGRlZmF1bHQgZmllbGRzXG4gICAgZmllbGRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjaGFubmVsOiAxLFxuICAgICAgcmVwZWF0OiAxLFxuICAgICAgc2VxdWVudGlhbDogZmFsc2UsXG4gICAgICBzdGFydFRpY2s6IG51bGwsXG4gICAgICB2ZWxvY2l0eTogNTAsXG4gICAgICB3YWl0OiAwXG4gICAgfSwgZmllbGRzKTtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICB0aGlzLnR5cGUgPSAnbm90ZSc7XG4gICAgdGhpcy5waXRjaCA9IFV0aWxzLnRvQXJyYXkoZmllbGRzLnBpdGNoKTtcbiAgICB0aGlzLmNoYW5uZWwgPSBmaWVsZHMuY2hhbm5lbDtcbiAgICB0aGlzLmR1cmF0aW9uID0gZmllbGRzLmR1cmF0aW9uO1xuICAgIHRoaXMuZ3JhY2UgPSBmaWVsZHMuZ3JhY2U7XG4gICAgdGhpcy5yZXBlYXQgPSBmaWVsZHMucmVwZWF0O1xuICAgIHRoaXMuc2VxdWVudGlhbCA9IGZpZWxkcy5zZXF1ZW50aWFsO1xuICAgIHRoaXMuc3RhcnRUaWNrID0gZmllbGRzLnN0YXJ0VGljaztcbiAgICB0aGlzLnZlbG9jaXR5ID0gZmllbGRzLnZlbG9jaXR5O1xuICAgIHRoaXMud2FpdCA9IGZpZWxkcy53YWl0O1xuICAgIHRoaXMudGlja0R1cmF0aW9uID0gVXRpbHMuZ2V0VGlja0R1cmF0aW9uKHRoaXMuZHVyYXRpb24pO1xuICAgIHRoaXMucmVzdER1cmF0aW9uID0gVXRpbHMuZ2V0VGlja0R1cmF0aW9uKHRoaXMud2FpdCk7XG4gICAgdGhpcy5ldmVudHMgPSBbXTsgLy8gSG9sZCBhY3R1YWwgTm90ZU9uL05vdGVPZmYgZXZlbnRzXG4gIH1cbiAgLyoqXG4gICAqIEJ1aWxkcyBpbnQgYXJyYXkgZm9yIHRoaXMgZXZlbnQuXG4gICAqIEByZXR1cm4ge05vdGVFdmVudH1cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoTm90ZUV2ZW50LCBbe1xuICAgIGtleTogXCJidWlsZERhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYnVpbGREYXRhKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgLy8gUmVzZXQgZGF0YSBhcnJheVxuICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgICB0aGlzLnRpY2tEdXJhdGlvbjtcbiAgICAgIHRoaXMucmVzdER1cmF0aW9uOyAvLyBBcHBseSBncmFjZSBub3RlKHMpIGFuZCBzdWJ0cmFjdCB0aWNrcyAoY3VycmVudGx5IDEgdGljayBwZXIgZ3JhY2Ugbm90ZSkgZnJvbSB0aWNrRHVyYXRpb24gc28gbmV0IHZhbHVlIGlzIHRoZSBzYW1lXG5cbiAgICAgIGlmICh0aGlzLmdyYWNlKSB7XG4gICAgICAgIHZhciBncmFjZUR1cmF0aW9uID0gMTtcbiAgICAgICAgdGhpcy5ncmFjZSA9IFV0aWxzLnRvQXJyYXkodGhpcy5ncmFjZSk7XG4gICAgICAgIHRoaXMuZ3JhY2UuZm9yRWFjaChmdW5jdGlvbiAocGl0Y2gpIHtcbiAgICAgICAgICB2YXIgbm90ZUV2ZW50ID0gbmV3IE5vdGVFdmVudCh7XG4gICAgICAgICAgICBwaXRjaDogX3RoaXMuZ3JhY2UsXG4gICAgICAgICAgICBkdXJhdGlvbjogJ1QnICsgZ3JhY2VEdXJhdGlvblxuICAgICAgICAgIH0pO1xuICAgICAgICAgIF90aGlzLmRhdGEgPSBfdGhpcy5kYXRhLmNvbmNhdChub3RlRXZlbnQuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfSAvLyBmaWVsZHMucGl0Y2ggY291bGQgYmUgYW4gYXJyYXkgb2YgcGl0Y2hlcy5cbiAgICAgIC8vIElmIHRoaXMuc2VxdWVudGlhbCA9PT0gdHJ1ZSB0aGVuIGl0J3MgYSBzZXF1ZW50aWFsIHN0cmluZyBvZiBub3RlcyB0aGF0IHJlcXVpcmVzIHNlcGFyYXRlIE5vdGVPbkV2ZW50cy5cblxuICAgICAgaWYgKCF0aGlzLnNlcXVlbnRpYWwpIHtcbiAgICAgICAgLy8gSGFuZGxlIHJlcGVhdFxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMucmVwZWF0OyBqKyspIHtcbiAgICAgICAgICAvLyBOb3RlIG9uXG4gICAgICAgICAgdGhpcy5waXRjaC5mb3JFYWNoKGZ1bmN0aW9uIChwLCBpKSB7XG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgIHZhciBub3RlT25OZXcgPSBuZXcgTm90ZU9uRXZlbnQoe1xuICAgICAgICAgICAgICAgIGNoYW5uZWw6IF90aGlzLmNoYW5uZWwsXG4gICAgICAgICAgICAgICAgd2FpdDogX3RoaXMud2FpdCxcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eTogX3RoaXMudmVsb2NpdHksXG4gICAgICAgICAgICAgICAgcGl0Y2g6IHAsXG4gICAgICAgICAgICAgICAgc3RhcnRUaWNrOiBfdGhpcy5zdGFydFRpY2tcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBSdW5uaW5nIHN0YXR1cyAoY2FuIG9tbWl0IHRoZSBub3RlIG9uIHN0YXR1cylcbiAgICAgICAgICAgICAgLy9ub3RlT24gPSBuZXcgTm90ZU9uRXZlbnQoe2RhdGE6IFswLCBVdGlscy5nZXRQaXRjaChwKSwgVXRpbHMuY29udmVydFZlbG9jaXR5KHRoaXMudmVsb2NpdHkpXX0pO1xuICAgICAgICAgICAgICB2YXIgbm90ZU9uTmV3ID0gbmV3IE5vdGVPbkV2ZW50KHtcbiAgICAgICAgICAgICAgICBjaGFubmVsOiBfdGhpcy5jaGFubmVsLFxuICAgICAgICAgICAgICAgIHdhaXQ6IDAsXG4gICAgICAgICAgICAgICAgdmVsb2NpdHk6IF90aGlzLnZlbG9jaXR5LFxuICAgICAgICAgICAgICAgIHBpdGNoOiBwLFxuICAgICAgICAgICAgICAgIHN0YXJ0VGljazogX3RoaXMuc3RhcnRUaWNrXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfdGhpcy5ldmVudHMucHVzaChub3RlT25OZXcpO1xuICAgICAgICAgIH0pOyAvLyBOb3RlIG9mZlxuXG4gICAgICAgICAgdGhpcy5waXRjaC5mb3JFYWNoKGZ1bmN0aW9uIChwLCBpKSB7XG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgIC8vbm90ZU9mZiA9IG5ldyBOb3RlT2ZmRXZlbnQoe2RhdGE6IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgodGlja0R1cmF0aW9uKS5jb25jYXQodGhpcy5nZXROb3RlT2ZmU3RhdHVzKCksIFV0aWxzLmdldFBpdGNoKHApLCBVdGlscy5jb252ZXJ0VmVsb2NpdHkodGhpcy52ZWxvY2l0eSkpfSk7XG4gICAgICAgICAgICAgIHZhciBub3RlT2ZmTmV3ID0gbmV3IE5vdGVPZmZFdmVudCh7XG4gICAgICAgICAgICAgICAgY2hhbm5lbDogX3RoaXMuY2hhbm5lbCxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogX3RoaXMuZHVyYXRpb24sXG4gICAgICAgICAgICAgICAgdmVsb2NpdHk6IF90aGlzLnZlbG9jaXR5LFxuICAgICAgICAgICAgICAgIHBpdGNoOiBwLFxuICAgICAgICAgICAgICAgIHRpY2s6IF90aGlzLnN0YXJ0VGljayAhPT0gbnVsbCA/IFV0aWxzLmdldFRpY2tEdXJhdGlvbihfdGhpcy5kdXJhdGlvbikgKyBfdGhpcy5zdGFydFRpY2sgOiBudWxsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gUnVubmluZyBzdGF0dXMgKGNhbiBvbW1pdCB0aGUgbm90ZSBvZmYgc3RhdHVzKVxuICAgICAgICAgICAgICAvL25vdGVPZmYgPSBuZXcgTm90ZU9mZkV2ZW50KHtkYXRhOiBbMCwgVXRpbHMuZ2V0UGl0Y2gocCksIFV0aWxzLmNvbnZlcnRWZWxvY2l0eSh0aGlzLnZlbG9jaXR5KV19KTtcbiAgICAgICAgICAgICAgdmFyIG5vdGVPZmZOZXcgPSBuZXcgTm90ZU9mZkV2ZW50KHtcbiAgICAgICAgICAgICAgICBjaGFubmVsOiBfdGhpcy5jaGFubmVsLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5OiBfdGhpcy52ZWxvY2l0eSxcbiAgICAgICAgICAgICAgICBwaXRjaDogcCxcbiAgICAgICAgICAgICAgICB0aWNrOiBfdGhpcy5zdGFydFRpY2sgIT09IG51bGwgPyBVdGlscy5nZXRUaWNrRHVyYXRpb24oX3RoaXMuZHVyYXRpb24pICsgX3RoaXMuc3RhcnRUaWNrIDogbnVsbFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX3RoaXMuZXZlbnRzLnB1c2gobm90ZU9mZk5ldyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEhhbmRsZSByZXBlYXRcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLnJlcGVhdDsgaisrKSB7XG4gICAgICAgICAgdGhpcy5waXRjaC5mb3JFYWNoKGZ1bmN0aW9uIChwLCBpKSB7XG5cbiAgICAgICAgICAgIHZhciBub3RlT25OZXcgPSBuZXcgTm90ZU9uRXZlbnQoe1xuICAgICAgICAgICAgICBjaGFubmVsOiBfdGhpcy5jaGFubmVsLFxuICAgICAgICAgICAgICB3YWl0OiBpID4gMCA/IDAgOiBfdGhpcy53YWl0LFxuICAgICAgICAgICAgICAvLyB3YWl0IG9ubHkgYXBwbGllcyB0byBmaXJzdCBub3RlIGluIHJlcGV0aXRpb25cbiAgICAgICAgICAgICAgdmVsb2NpdHk6IF90aGlzLnZlbG9jaXR5LFxuICAgICAgICAgICAgICBwaXRjaDogcCxcbiAgICAgICAgICAgICAgc3RhcnRUaWNrOiBfdGhpcy5zdGFydFRpY2tcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIG5vdGVPZmZOZXcgPSBuZXcgTm90ZU9mZkV2ZW50KHtcbiAgICAgICAgICAgICAgY2hhbm5lbDogX3RoaXMuY2hhbm5lbCxcbiAgICAgICAgICAgICAgZHVyYXRpb246IF90aGlzLmR1cmF0aW9uLFxuICAgICAgICAgICAgICB2ZWxvY2l0eTogX3RoaXMudmVsb2NpdHksXG4gICAgICAgICAgICAgIHBpdGNoOiBwXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgX3RoaXMuZXZlbnRzLnB1c2gobm90ZU9uTmV3LCBub3RlT2ZmTmV3KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTm90ZUV2ZW50O1xufSgpO1xuXG4vKipcbiAqIEhvbGRzIGFsbCBkYXRhIGZvciBhIFwiUGl0Y2ggQmVuZFwiIE1JREkgZXZlbnRcbiAqIFsgLTEuMCwgMCwgMS4wIF0gLT4gIFsgMCwgODE5MiwgMTYzODNdXG4gKiBAcGFyYW0ge29iamVjdH0gZmllbGRzIHsgYmVuZCA6IGZsb2F0LCBjaGFubmVsIDogaW50IH1cbiAqIEByZXR1cm4ge1BpdGNoQmVuZEV2ZW50fVxuICovXG5cbnZhciBzY2FsZTE0Yml0cyA9IGZ1bmN0aW9uIHNjYWxlMTRiaXRzKHplcm9PbmUpIHtcbiAgaWYgKHplcm9PbmUgPD0gMCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKDE2Mzg0ICogKHplcm9PbmUgKyAxKSAvIDIpO1xuICB9XG5cbiAgcmV0dXJuIE1hdGguZmxvb3IoMTYzODMgKiAoemVyb09uZSArIDEpIC8gMik7XG59O1xuXG52YXIgUGl0Y2hCZW5kRXZlbnQgPSBmdW5jdGlvbiBQaXRjaEJlbmRFdmVudChmaWVsZHMpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBpdGNoQmVuZEV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAncGl0Y2gtYmVuZCc7XG4gIHZhciBiZW5kMTQgPSBzY2FsZTE0Yml0cyhmaWVsZHMuYmVuZCk7XG4gIHZhciBjaGFubmVsID0gZmllbGRzLmNoYW5uZWwgfHwgMDtcbiAgdmFyIGxzYlZhbHVlID0gYmVuZDE0ICYgMHg3ZjtcbiAgdmFyIG1zYlZhbHVlID0gYmVuZDE0ID4+IDcgJiAweDdmO1xuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuUElUQ0hfQkVORF9TVEFUVVMgfCBjaGFubmVsLCBsc2JWYWx1ZSwgbXNiVmFsdWUpO1xufTtcblxuLyoqXG4gKiBIb2xkcyBhbGwgZGF0YSBmb3IgYSBcInByb2dyYW0gY2hhbmdlXCIgTUlESSBldmVudFxuICogQHBhcmFtIHtvYmplY3R9IGZpZWxkcyB7aW5zdHJ1bWVudDogaW50ZWdlcn1cbiAqIEByZXR1cm4ge1Byb2dyYW1DaGFuZ2VFdmVudH1cbiAqL1xuXG52YXIgUHJvZ3JhbUNoYW5nZUV2ZW50ID0gZnVuY3Rpb24gUHJvZ3JhbUNoYW5nZUV2ZW50KGZpZWxkcykge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHJvZ3JhbUNoYW5nZUV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAncHJvZ3JhbSc7IC8vIGRlbHRhIHRpbWUgZGVmYXVsdHMgdG8gMC5cblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuUFJPR1JBTV9DSEFOR0VfU1RBVFVTLCBmaWVsZHMuaW5zdHJ1bWVudCk7XG59O1xuXG4vKipcbiAqIEhvbGRzIGFsbCBkYXRhIGZvciBhIFwiY29udHJvbGxlciBjaGFuZ2VcIiBNSURJIGV2ZW50XG4gKiBAcGFyYW0ge29iamVjdH0gZmllbGRzIHtjb250cm9sbGVyTnVtYmVyOiBpbnRlZ2VyLCBjb250cm9sbGVyVmFsdWU6IGludGVnZXJ9XG4gKiBAcmV0dXJuIHtDb250cm9sbGVyQ2hhbmdlRXZlbnR9XG4gKi9cblxudmFyIENvbnRyb2xsZXJDaGFuZ2VFdmVudCA9IGZ1bmN0aW9uIENvbnRyb2xsZXJDaGFuZ2VFdmVudChmaWVsZHMpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbnRyb2xsZXJDaGFuZ2VFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ2NvbnRyb2xsZXInOyAvLyBkZWx0YSB0aW1lIGRlZmF1bHRzIHRvIDAuXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLkNPTlRST0xMRVJfQ0hBTkdFX1NUQVRVUywgZmllbGRzLmNvbnRyb2xsZXJOdW1iZXIsIGZpZWxkcy5jb250cm9sbGVyVmFsdWUpO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSB0ZW1wbyBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBDb3B5cmlnaHQgdGV4dFxuICogQHJldHVybiB7Q29weXJpZ2h0RXZlbnR9XG4gKi9cblxudmFyIENvcHlyaWdodEV2ZW50ID0gZnVuY3Rpb24gQ29weXJpZ2h0RXZlbnQodGV4dCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29weXJpZ2h0RXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdjb3B5cmlnaHQnO1xuICB2YXIgdGV4dEJ5dGVzID0gVXRpbHMuc3RyaW5nVG9CeXRlcyh0ZXh0KTsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfQ09QWVJJR0hUX0lELCBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRleHRCeXRlcy5sZW5ndGgpLCAvLyBTaXplXG4gIHRleHRCeXRlcyAvLyBUZXh0XG4gICk7XG59O1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIGN1ZSBwb2ludCBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBDdWUgcG9pbnQgdGV4dFxuICogQHJldHVybiB7Q3VlUG9pbnRFdmVudH1cbiAqL1xuXG52YXIgQ3VlUG9pbnRFdmVudCA9IGZ1bmN0aW9uIEN1ZVBvaW50RXZlbnQodGV4dCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ3VlUG9pbnRFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ21hcmtlcic7XG4gIHZhciB0ZXh0Qnl0ZXMgPSBVdGlscy5zdHJpbmdUb0J5dGVzKHRleHQpOyAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9DVUVfUE9JTlQsIFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgodGV4dEJ5dGVzLmxlbmd0aCksIC8vIFNpemVcbiAgdGV4dEJ5dGVzIC8vIFRleHRcbiAgKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgZW5kIHRyYWNrIG1ldGEgZXZlbnQuXG4gKiBAcmV0dXJuIHtFbmRUcmFja0V2ZW50fVxuICovXG5cbnZhciBFbmRUcmFja0V2ZW50ID0gZnVuY3Rpb24gRW5kVHJhY2tFdmVudCgpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEVuZFRyYWNrRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdlbmQtdHJhY2snOyAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9FTkRfT0ZfVFJBQ0tfSUQpO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYW4gaW5zdHJ1bWVudCBuYW1lIG1ldGEgZXZlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gYnBtIC0gQmVhdHMgcGVyIG1pbnV0ZVxuICogQHJldHVybiB7SW5zdHJ1bWVudE5hbWVFdmVudH1cbiAqL1xuXG52YXIgSW5zdHJ1bWVudE5hbWVFdmVudCA9IGZ1bmN0aW9uIEluc3RydW1lbnROYW1lRXZlbnQodGV4dCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5zdHJ1bWVudE5hbWVFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ2luc3RydW1lbnQtbmFtZSc7XG4gIHZhciB0ZXh0Qnl0ZXMgPSBVdGlscy5zdHJpbmdUb0J5dGVzKHRleHQpOyAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9JTlNUUlVNRU5UX05BTUVfSUQsIFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgodGV4dEJ5dGVzLmxlbmd0aCksIC8vIFNpemVcbiAgdGV4dEJ5dGVzIC8vIEluc3RydW1lbnQgbmFtZVxuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSBrZXkgc2lnbmF0dXJlIG1ldGEgZXZlbnQuXG4gKiBAcmV0dXJuIHtLZXlTaWduYXR1cmVFdmVudH1cbiAqL1xuXG52YXIgS2V5U2lnbmF0dXJlRXZlbnQgPSBmdW5jdGlvbiBLZXlTaWduYXR1cmVFdmVudChzZiwgbWkpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEtleVNpZ25hdHVyZUV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAna2V5LXNpZ25hdHVyZSc7XG4gIHZhciBtb2RlID0gbWkgfHwgMDtcbiAgc2YgPSBzZiB8fCAwOyAvL1x0RnVuY3Rpb24gY2FsbGVkIHdpdGggc3RyaW5nIG5vdGF0aW9uXG5cbiAgaWYgKHR5cGVvZiBtaSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgZmlmdGhzID0gW1snQ2InLCAnR2InLCAnRGInLCAnQWInLCAnRWInLCAnQmInLCAnRicsICdDJywgJ0cnLCAnRCcsICdBJywgJ0UnLCAnQicsICdGIycsICdDIyddLCBbJ2FiJywgJ2ViJywgJ2JiJywgJ2YnLCAnYycsICdnJywgJ2QnLCAnYScsICdlJywgJ2InLCAnZiMnLCAnYyMnLCAnZyMnLCAnZCMnLCAnYSMnXV07XG4gICAgdmFyIF9zZmxlbiA9IHNmLmxlbmd0aDtcbiAgICB2YXIgbm90ZSA9IHNmIHx8ICdDJztcbiAgICBpZiAoc2ZbMF0gPT09IHNmWzBdLnRvTG93ZXJDYXNlKCkpIG1vZGUgPSAxO1xuXG4gICAgaWYgKF9zZmxlbiA+IDEpIHtcbiAgICAgIHN3aXRjaCAoc2YuY2hhckF0KF9zZmxlbiAtIDEpKSB7XG4gICAgICAgIGNhc2UgJ20nOlxuICAgICAgICAgIG1vZGUgPSAxO1xuICAgICAgICAgIG5vdGUgPSBzZi5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICBub3RlID0gbm90ZS5jb25jYXQoc2Yuc3Vic3RyaW5nKDEsIF9zZmxlbiAtIDEpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICBtb2RlID0gMTtcbiAgICAgICAgICBub3RlID0gc2YuY2hhckF0KDApLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgbm90ZSA9IG5vdGUuY29uY2F0KHNmLnN1YnN0cmluZygxLCBfc2ZsZW4gLSAxKSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnTSc6XG4gICAgICAgICAgbW9kZSA9IDA7XG4gICAgICAgICAgbm90ZSA9IHNmLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgIG5vdGUgPSBub3RlLmNvbmNhdChzZi5zdWJzdHJpbmcoMSwgX3NmbGVuIC0gMSkpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgIG1vZGUgPSAwO1xuICAgICAgICAgIG5vdGUgPSBzZi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICBub3RlID0gbm90ZS5jb25jYXQoc2Yuc3Vic3RyaW5nKDEsIF9zZmxlbiAtIDEpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZmlmdGhpbmRleCA9IGZpZnRoc1ttb2RlXS5pbmRleE9mKG5vdGUpO1xuICAgIHNmID0gZmlmdGhpbmRleCA9PT0gLTEgPyAwIDogZmlmdGhpbmRleCAtIDc7XG4gIH0gLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9LRVlfU0lHTkFUVVJFX0lELCBbMHgwMl0sIC8vIFNpemVcbiAgVXRpbHMubnVtYmVyVG9CeXRlcyhzZiwgMSksIC8vIE51bWJlciBvZiBzaGFycCBvciBmbGF0cyAoIDwgMCBmbGF0OyA+IDAgc2hhcnApXG4gIFV0aWxzLm51bWJlclRvQnl0ZXMobW9kZSwgMSkgLy8gTW9kZTogMCBtYWpvciwgMSBtaW5vclxuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSBseXJpYyBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBMeXJpYyB0ZXh0XG4gKiBAcmV0dXJuIHtMeXJpY0V2ZW50fVxuICovXG5cbnZhciBMeXJpY0V2ZW50ID0gZnVuY3Rpb24gTHlyaWNFdmVudCh0ZXh0KSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMeXJpY0V2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAnbWFya2VyJztcbiAgdmFyIHRleHRCeXRlcyA9IFV0aWxzLnN0cmluZ1RvQnl0ZXModGV4dCk7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX0xZUklDX0lELCBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRleHRCeXRlcy5sZW5ndGgpLCAvLyBTaXplXG4gIHRleHRCeXRlcyAvLyBUZXh0XG4gICk7XG59O1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIG1hcmtlciBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBNYXJrZXIgdGV4dFxuICogQHJldHVybiB7TWFya2VyRXZlbnR9XG4gKi9cblxudmFyIE1hcmtlckV2ZW50ID0gZnVuY3Rpb24gTWFya2VyRXZlbnQodGV4dCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFya2VyRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdtYXJrZXInO1xuICB2YXIgdGV4dEJ5dGVzID0gVXRpbHMuc3RyaW5nVG9CeXRlcyh0ZXh0KTsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfTUFSS0VSX0lELCBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRleHRCeXRlcy5sZW5ndGgpLCAvLyBTaXplXG4gIHRleHRCeXRlcyAvLyBUZXh0XG4gICk7XG59O1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIHRlbXBvIG1ldGEgZXZlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gYnBtIC0gQmVhdHMgcGVyIG1pbnV0ZVxuICogQHJldHVybiB7VGVtcG9FdmVudH1cbiAqL1xuXG52YXIgVGVtcG9FdmVudCA9IGZ1bmN0aW9uIFRlbXBvRXZlbnQoYnBtKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUZW1wb0V2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAndGVtcG8nO1xuICB2YXIgdGVtcG8gPSBNYXRoLnJvdW5kKDYwMDAwMDAwIC8gYnBtKTsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfVEVNUE9fSUQsIFsweDAzXSwgLy8gU2l6ZVxuICBVdGlscy5udW1iZXJUb0J5dGVzKHRlbXBvLCAzKSAvLyBUZW1wbywgMyBieXRlc1xuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSB0ZW1wbyBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IGJwbSAtIEJlYXRzIHBlciBtaW51dGVcbiAqIEByZXR1cm4ge1RleHRFdmVudH1cbiAqL1xuXG52YXIgVGV4dEV2ZW50ID0gZnVuY3Rpb24gVGV4dEV2ZW50KHRleHQpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRleHRFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ3RleHQnO1xuICB2YXIgdGV4dEJ5dGVzID0gVXRpbHMuc3RyaW5nVG9CeXRlcyh0ZXh0KTsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfVEVYVF9JRCwgVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0ZXh0Qnl0ZXMubGVuZ3RoKSwgLy8gU2l6ZVxuICB0ZXh0Qnl0ZXMgLy8gVGV4dFxuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSB0aW1lIHNpZ25hdHVyZSBtZXRhIGV2ZW50LlxuICogQHJldHVybiB7VGltZVNpZ25hdHVyZUV2ZW50fVxuICovXG5cbnZhciBUaW1lU2lnbmF0dXJlRXZlbnQgPSBmdW5jdGlvbiBUaW1lU2lnbmF0dXJlRXZlbnQobnVtZXJhdG9yLCBkZW5vbWluYXRvciwgbWlkaWNsb2Nrc3BlcnRpY2ssIG5vdGVzcGVybWlkaWNsb2NrKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUaW1lU2lnbmF0dXJlRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICd0aW1lLXNpZ25hdHVyZSc7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX1RJTUVfU0lHTkFUVVJFX0lELCBbMHgwNF0sIC8vIFNpemVcbiAgVXRpbHMubnVtYmVyVG9CeXRlcyhudW1lcmF0b3IsIDEpLCAvLyBOdW1lcmF0b3IsIDEgYnl0ZXNcbiAgVXRpbHMubnVtYmVyVG9CeXRlcyhNYXRoLmxvZzIoZGVub21pbmF0b3IpLCAxKSwgLy8gRGVub21pbmF0b3IgaXMgZXhwcmVzc2VkIGFzIHBvdyBvZiAyLCAxIGJ5dGVzXG4gIFV0aWxzLm51bWJlclRvQnl0ZXMobWlkaWNsb2Nrc3BlcnRpY2sgfHwgMjQsIDEpLCAvLyBNSURJIENsb2NrcyBwZXIgdGljaywgMSBieXRlc1xuICBVdGlscy5udW1iZXJUb0J5dGVzKG5vdGVzcGVybWlkaWNsb2NrIHx8IDgsIDEpIC8vIE51bWJlciBvZiAxLzMyIG5vdGVzIHBlciBNSURJIGNsb2NrcywgMSBieXRlc1xuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSB0ZW1wbyBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IGJwbSAtIEJlYXRzIHBlciBtaW51dGVcbiAqIEByZXR1cm4ge1RyYWNrTmFtZUV2ZW50fVxuICovXG5cbnZhciBUcmFja05hbWVFdmVudCA9IGZ1bmN0aW9uIFRyYWNrTmFtZUV2ZW50KHRleHQpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRyYWNrTmFtZUV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAndHJhY2stbmFtZSc7XG4gIHZhciB0ZXh0Qnl0ZXMgPSBVdGlscy5zdHJpbmdUb0J5dGVzKHRleHQpOyAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9UUkFDS19OQU1FX0lELCBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRleHRCeXRlcy5sZW5ndGgpLCAvLyBTaXplXG4gIHRleHRCeXRlcyAvLyBUZXh0XG4gICk7XG59O1xuXG4vKipcbiAqIEhvbGRzIGFsbCBkYXRhIGZvciBhIHRyYWNrLlxuICogQHBhcmFtIHtvYmplY3R9IGZpZWxkcyB7dHlwZTogbnVtYmVyLCBkYXRhOiBhcnJheSwgc2l6ZTogYXJyYXksIGV2ZW50czogYXJyYXl9XG4gKiBAcmV0dXJuIHtUcmFja31cbiAqL1xuXG52YXIgVHJhY2sgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBUcmFjaygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJhY2spO1xuXG4gICAgdGhpcy50eXBlID0gQ29uc3RhbnRzLlRSQUNLX0NIVU5LX1RZUEU7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgdGhpcy5zaXplID0gW107XG4gICAgdGhpcy5ldmVudHMgPSBbXTtcbiAgICB0aGlzLmV4cGxpY2l0VGlja0V2ZW50cyA9IFtdOyAvLyBJZiB0aGVyZSBhcmUgYW55IGV2ZW50cyB3aXRoIGFuIGV4cGxpY2l0IHRpY2sgZGVmaW5lZCB0aGVuIHdlIHdpbGwgY3JlYXRlIGEgXCJzdWJcIiB0cmFjayBmb3IgdGhvc2VcbiAgICAvLyBhbmQgbWVyZ2UgdGhlbSBpbiBhbmQgdGhlIGVuZC5cblxuICAgIHRoaXMudGlja1BvaW50ZXIgPSAwOyAvLyBFYWNoIHRpbWUgYW4gZXZlbnQgaXMgYWRkZWQgdGhpcyB3aWxsIGluY3JlYXNlXG4gIH1cbiAgLyoqXG4gICAqIEFkZHMgYW55IGV2ZW50IHR5cGUgdG8gdGhlIHRyYWNrLlxuICAgKiBFdmVudHMgd2l0aG91dCBhIHNwZWNpZmljIHN0YXJ0VGljayBwcm9wZXJ0eSBhcmUgYXNzdW1lZCB0byBiZSBhZGRlZCBpbiBvcmRlciBvZiBob3cgdGhleSBzaG91bGQgb3V0cHV0LlxuICAgKiBFdmVudHMgd2l0aCBhIHNwZWNpZmljIHN0YXJ0VGljayBwcm9wZXJ0eSBhcmUgc2V0IGFzaWRlIGZvciBub3cgd2lsbCBiZSBtZXJnZWQgaW4gZHVyaW5nIGJ1aWxkIHByb2Nlc3MuXG4gICAqIEBwYXJhbSB7KE5vdGVFdmVudHxQcm9ncmFtQ2hhbmdlRXZlbnQpfSBldmVudHMgLSBFdmVudCBvYmplY3Qgb3IgYXJyYXkgb2YgRXZlbnQgb2JqZWN0cy5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gbWFwRnVuY3Rpb24gLSBDYWxsYmFjayB3aGljaCBjYW4gYmUgdXNlZCB0byBhcHBseSBzcGVjaWZpYyBwcm9wZXJ0aWVzIHRvIGFsbCBldmVudHMuXG4gICAqIEByZXR1cm4ge1RyYWNrfVxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhUcmFjaywgW3tcbiAgICBrZXk6IFwiYWRkRXZlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkRXZlbnQoZXZlbnRzLCBtYXBGdW5jdGlvbikge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgVXRpbHMudG9BcnJheShldmVudHMpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50LCBpKSB7XG4gICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5vdGVFdmVudCkge1xuICAgICAgICAgIC8vIEhhbmRsZSBtYXAgZnVuY3Rpb24gaWYgcHJvdmlkZWRcbiAgICAgICAgICBpZiAodHlwZW9mIG1hcEZ1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgcHJvcGVydGllcyA9IG1hcEZ1bmN0aW9uKGksIGV2ZW50KTtcblxuICAgICAgICAgICAgaWYgKF90eXBlb2YocHJvcGVydGllcykgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIGogaW4gcHJvcGVydGllcykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoaikge1xuICAgICAgICAgICAgICAgICAgY2FzZSAnY2hhbm5lbCc6XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmNoYW5uZWwgPSBwcm9wZXJ0aWVzW2pdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgY2FzZSAnZHVyYXRpb24nOlxuICAgICAgICAgICAgICAgICAgICBldmVudC5kdXJhdGlvbiA9IHByb3BlcnRpZXNbal07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlICdzZXF1ZW50aWFsJzpcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc2VxdWVudGlhbCA9IHByb3BlcnRpZXNbal07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlICd2ZWxvY2l0eSc6XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnZlbG9jaXR5ID0gVXRpbHMuY29udmVydFZlbG9jaXR5KHByb3BlcnRpZXNbal0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IC8vIElmIHRoaXMgbm90ZSBldmVudCBoYXMgYW4gZXhwbGljaXQgc3RhcnRUaWNrIHRoZW4gd2UgbmVlZCB0byBzZXQgYXNpZGUgZm9yIG5vd1xuXG5cbiAgICAgICAgICBpZiAoZXZlbnQuc3RhcnRUaWNrICE9PSBudWxsKSB7XG4gICAgICAgICAgICBfdGhpcy5leHBsaWNpdFRpY2tFdmVudHMucHVzaChldmVudCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFB1c2ggZWFjaCBvbi9vZmYgZXZlbnQgdG8gdHJhY2sncyBldmVudCBzdGFja1xuICAgICAgICAgICAgZXZlbnQuYnVpbGREYXRhKCkuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmV2ZW50cy5wdXNoKGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzLmV2ZW50cy5wdXNoKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQnVpbGRzIGludCBhcnJheSBvZiBhbGwgZXZlbnRzLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYnVpbGREYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJ1aWxkRGF0YSgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAvLyBSZW1vdmUgZXhpc3RpbmcgZW5kIHRyYWNrIGV2ZW50IGFuZCBhZGQgb25lLlxuICAgICAgLy8gVGhpcyBtYWtlcyBzdXJlIGl0J3MgYXQgdGhlIHZlcnkgZW5kIG9mIHRoZSBldmVudCBsaXN0LlxuICAgICAgdGhpcy5yZW1vdmVFdmVudHNCeVR5cGUoJ2VuZC10cmFjaycpLmFkZEV2ZW50KG5ldyBFbmRUcmFja0V2ZW50KCkpOyAvLyBSZXNldFxuXG4gICAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICAgIHRoaXMuc2l6ZSA9IFtdO1xuICAgICAgdGhpcy50aWNrUG9pbnRlciA9IDA7XG4gICAgICB2YXIgcHJlY2lzaW9uTG9zcyA9IDA7XG4gICAgICB0aGlzLmV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCwgZXZlbnRJbmRleCkge1xuICAgICAgICAvLyBCdWlsZCBldmVudCAmIGFkZCB0byB0b3RhbCB0aWNrIGR1cmF0aW9uXG4gICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5vdGVPbkV2ZW50IHx8IGV2ZW50IGluc3RhbmNlb2YgTm90ZU9mZkV2ZW50KSB7XG4gICAgICAgICAgdmFyIGJ1aWx0ID0gZXZlbnQuYnVpbGREYXRhKF90aGlzMiwgcHJlY2lzaW9uTG9zcyk7XG4gICAgICAgICAgcHJlY2lzaW9uTG9zcyA9IFV0aWxzLmdldFByZWNpc2lvbkxvc3MoZXZlbnQuZGVsdGFXaXRoUHJlY2lzaW9uQ29ycmVjdGlvbiB8fCAwKTtcbiAgICAgICAgICBfdGhpczIuZGF0YSA9IF90aGlzMi5kYXRhLmNvbmNhdChidWlsdC5kYXRhKTtcbiAgICAgICAgICBfdGhpczIudGlja1BvaW50ZXIgPSBVdGlscy5nZXRSb3VuZGVkSWZDbG9zZShldmVudC50aWNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpczIuZGF0YSA9IF90aGlzMi5kYXRhLmNvbmNhdChldmVudC5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLm1lcmdlRXhwbGljaXRUaWNrRXZlbnRzKCk7XG4gICAgICB0aGlzLnNpemUgPSBVdGlscy5udW1iZXJUb0J5dGVzKHRoaXMuZGF0YS5sZW5ndGgsIDQpOyAvLyA0IGJ5dGVzIGxvbmdcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm1lcmdlRXhwbGljaXRUaWNrRXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1lcmdlRXhwbGljaXRUaWNrRXZlbnRzKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIGlmICghdGhpcy5leHBsaWNpdFRpY2tFdmVudHMubGVuZ3RoKSByZXR1cm47IC8vIEZpcnN0IHNvcnQgYXNjIGxpc3Qgb2YgZXZlbnRzIGJ5IHN0YXJ0VGlja1xuXG4gICAgICB0aGlzLmV4cGxpY2l0VGlja0V2ZW50cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBhLnN0YXJ0VGljayAtIGIuc3RhcnRUaWNrO1xuICAgICAgfSk7IC8vIE5vdyB0aGlzLmV4cGxpY2l0VGlja0V2ZW50cyBpcyBpbiBjb3JyZWN0IG9yZGVyLCBhbmQgc28gaXMgdGhpcy5ldmVudHMgbmF0dXJhbGx5LlxuICAgICAgLy8gRm9yIGVhY2ggZXhwbGljaXQgdGljayBldmVudCwgc3BsaWNlIGl0IGludG8gdGhlIG1haW4gbGlzdCBvZiBldmVudHMgYW5kXG4gICAgICAvLyBhZGp1c3QgdGhlIGRlbHRhIG9uIHRoZSBmb2xsb3dpbmcgZXZlbnRzIHNvIHRoZXkgc3RpbGwgcGxheSBub3JtYWxseS5cblxuICAgICAgdGhpcy5leHBsaWNpdFRpY2tFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAobm90ZUV2ZW50KSB7XG4gICAgICAgIC8vIENvbnZlcnQgTm90ZUV2ZW50IHRvIGl0J3MgcmVzcGVjdGl2ZSBOb3RlT24vTm90ZU9mZiBldmVudHNcbiAgICAgICAgLy8gTm90ZSB0aGF0IGFzIHdlIHNwbGljZSBpbiBldmVudHMgdGhlIGRlbHRhIGZvciB0aGUgTm90ZU9mZiBvbmVzIHdpbGxcbiAgICAgICAgLy8gTmVlZCB0byBjaGFuZ2UgYmFzZWQgb24gd2hhdCBjb21lcyBiZWZvcmUgdGhlbSBhZnRlciB0aGUgc3BsaWNlLlxuICAgICAgICBub3RlRXZlbnQuYnVpbGREYXRhKCkuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gZS5idWlsZERhdGEoX3RoaXMzKTtcbiAgICAgICAgfSk7IC8vIE1lcmdlIGVhY2ggZXZlbnQgaW5kaXZ1YWxseSBpbnRvIHRoaXMgdHJhY2sncyBldmVudCBsaXN0LlxuXG4gICAgICAgIG5vdGVFdmVudC5ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMzLm1lcmdlU2luZ2xlRXZlbnQoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgIH0pOyAvLyBIYWNreSB3YXkgdG8gcmVidWlsZCB0cmFjayB3aXRoIG5ld2x5IHNwbGljZWQgZXZlbnRzLiAgTmVlZCBiZXR0ZXIgc29sdXRpb24uXG5cbiAgICAgIHRoaXMuZXhwbGljaXRUaWNrRXZlbnRzID0gW107XG4gICAgICB0aGlzLmJ1aWxkRGF0YSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNZXJnZXMgYW5vdGhlciB0cmFjaydzIGV2ZW50cyB3aXRoIHRoaXMgdHJhY2suXG4gICAgICogQHBhcmFtIHtUcmFja30gdHJhY2tcbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm1lcmdlVHJhY2tcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWVyZ2VUcmFjayh0cmFjaykge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIC8vIEZpcnN0IGJ1aWxkIHRoaXMgdHJhY2sgdG8gcG9wdWxhdGUgZWFjaCBldmVudCdzIHRpY2sgcHJvcGVydHlcbiAgICAgIHRoaXMuYnVpbGREYXRhKCk7IC8vIFRoZW4gYnVpbGQgdHJhY2sgdG8gYmUgbWVyZ2VkIHNvIHRoYXQgdGljayBwcm9wZXJ0eSBpcyBwb3B1bGF0ZWQgb24gYWxsIGV2ZW50cyAmIG1lcmdlIGVhY2ggZXZlbnQuXG5cbiAgICAgIHRyYWNrLmJ1aWxkRGF0YSgpLmV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICByZXR1cm4gX3RoaXM0Lm1lcmdlU2luZ2xlRXZlbnQoZXZlbnQpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE1lcmdlcyBhIHNpbmdsZSBldmVudCBpbnRvIHRoaXMgdHJhY2sncyBsaXN0IG9mIGV2ZW50cyBiYXNlZCBvbiBldmVudC50aWNrIHByb3BlcnR5LlxuICAgICAqIEBwYXJhbSB7Tm90ZU9uRXZlbnR8Tm90ZU9mZkV2ZW50fSAtIGV2ZW50XG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJtZXJnZVNpbmdsZUV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1lcmdlU2luZ2xlRXZlbnQoZXZlbnQpIHtcbiAgICAgIC8vIEZpbmQgaW5kZXggb2YgZXhpc3RpbmcgZXZlbnQgd2UgbmVlZCB0byBmb2xsb3cgd2l0aFxuICAgICAgdmFyIGxhc3RFdmVudEluZGV4ID0gMDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5ldmVudHNbaV0udGljayA+IGV2ZW50LnRpY2spIGJyZWFrO1xuICAgICAgICBsYXN0RXZlbnRJbmRleCA9IGk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzcGxpY2VkRXZlbnRJbmRleCA9IGxhc3RFdmVudEluZGV4ICsgMTsgLy8gTmVlZCB0byBhZGp1c3QgdGhlIGRlbHRhIG9mIHRoaXMgZXZlbnQgdG8gZW5zdXJlIGl0IGZhbGxzIG9uIHRoZSBjb3JyZWN0IHRpY2suXG5cbiAgICAgIGV2ZW50LmRlbHRhID0gZXZlbnQudGljayAtIHRoaXMuZXZlbnRzW2xhc3RFdmVudEluZGV4XS50aWNrOyAvLyBTcGxpY2UgdGhpcyBldmVudCBhdCBsYXN0RXZlbnRJbmRleCArIDFcblxuICAgICAgdGhpcy5ldmVudHMuc3BsaWNlKHNwbGljZWRFdmVudEluZGV4LCAwLCBldmVudCk7IC8vIE5vdyBhZGp1c3QgZGVsdGEgb2YgYWxsIGZvbGxvd2luZyBldmVudHNcblxuICAgICAgZm9yICh2YXIgaSA9IHNwbGljZWRFdmVudEluZGV4ICsgMTsgaSA8IHRoaXMuZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIFNpbmNlIGVhY2ggZXhpc3RpbmcgZXZlbnQgc2hvdWxkIGhhdmUgYSB0aWNrIHZhbHVlIGF0IHRoaXMgcG9pbnQgd2UganVzdCBuZWVkIHRvXG4gICAgICAgIC8vIGFkanVzdCBkZWx0YSB0byB0aGF0IHRoZSBldmVudCBzdGlsbCBmYWxscyBvbiB0aGUgY29ycmVjdCB0aWNrLlxuICAgICAgICB0aGlzLmV2ZW50c1tpXS5kZWx0YSA9IHRoaXMuZXZlbnRzW2ldLnRpY2sgLSB0aGlzLmV2ZW50c1tpIC0gMV0udGljaztcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwgZXZlbnRzIG1hdGNoaW5nIHNwZWNpZmllZCB0eXBlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFR5cGUgLSBFdmVudCB0eXBlXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVFdmVudHNCeVR5cGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlRXZlbnRzQnlUeXBlKGV2ZW50VHlwZSkge1xuICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgIHRoaXMuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50LCBpbmRleCkge1xuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gZXZlbnRUeXBlKSB7XG4gICAgICAgICAgX3RoaXM1LmV2ZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRlbXBvIG9mIHRoZSBNSURJIGZpbGUuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGJwbSAtIFRlbXBvIGluIGJlYXRzIHBlciBtaW51dGUuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzZXRUZW1wb1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRUZW1wbyhicG0pIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBUZW1wb0V2ZW50KGJwbSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRpbWUgc2lnbmF0dXJlLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBudW1lcmF0b3IgLSBUb3AgbnVtYmVyIG9mIHRoZSB0aW1lIHNpZ25hdHVyZS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGVub21pbmF0b3IgLSBCb3R0b20gbnVtYmVyIG9mIHRoZSB0aW1lIHNpZ25hdHVyZS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWlkaWNsb2Nrc3BlcnRpY2sgLSBEZWZhdWx0cyB0byAyNC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbm90ZXNwZXJtaWRpY2xvY2sgLSBEZWZhdWx0cyB0byA4LlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2V0VGltZVNpZ25hdHVyZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRUaW1lU2lnbmF0dXJlKG51bWVyYXRvciwgZGVub21pbmF0b3IsIG1pZGljbG9ja3NwZXJ0aWNrLCBub3Rlc3Blcm1pZGljbG9jaykge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IFRpbWVTaWduYXR1cmVFdmVudChudW1lcmF0b3IsIGRlbm9taW5hdG9yLCBtaWRpY2xvY2tzcGVydGljaywgbm90ZXNwZXJtaWRpY2xvY2spKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyBrZXkgc2lnbmF0dXJlLlxuICAgICAqIEBwYXJhbSB7Kn0gc2YgLVxuICAgICAqIEBwYXJhbSB7Kn0gbWkgLVxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2V0S2V5U2lnbmF0dXJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEtleVNpZ25hdHVyZShzZiwgbWkpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBLZXlTaWduYXR1cmVFdmVudChzZiwgbWkpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyB0ZXh0IHRvIE1JREkgZmlsZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRleHQgdG8gYWRkLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkVGV4dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRUZXh0KHRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBUZXh0RXZlbnQodGV4dCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGNvcHlyaWdodCB0byBNSURJIGZpbGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUZXh0IG9mIGNvcHlyaWdodCBsaW5lLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkQ29weXJpZ2h0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZENvcHlyaWdodCh0ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgQ29weXJpZ2h0RXZlbnQodGV4dCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIFNlcXVlbmNlL1RyYWNrIE5hbWUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUZXh0IG9mIHRyYWNrIG5hbWUuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhZGRUcmFja05hbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkVHJhY2tOYW1lKHRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBUcmFja05hbWVFdmVudCh0ZXh0KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgaW5zdHJ1bWVudCBuYW1lIG9mIHRyYWNrLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gTmFtZSBvZiBpbnN0cnVtZW50LlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkSW5zdHJ1bWVudE5hbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkSW5zdHJ1bWVudE5hbWUodGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IEluc3RydW1lbnROYW1lRXZlbnQodGV4dCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIG1hcmtlciB0byBNSURJIGZpbGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBNYXJrZXIgdGV4dC5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFkZE1hcmtlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRNYXJrZXIodGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IE1hcmtlckV2ZW50KHRleHQpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBjdWUgcG9pbnQgdG8gTUlESSBmaWxlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCBvZiBjdWUgcG9pbnQuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhZGRDdWVQb2ludFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRDdWVQb2ludCh0ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgQ3VlUG9pbnRFdmVudCh0ZXh0KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgbHlyaWMgdG8gTUlESSBmaWxlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gTHlyaWMgdGV4dCB0byBhZGQuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhZGRMeXJpY1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRMeXJpYyh0ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgTHlyaWNFdmVudCh0ZXh0KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoYW5uZWwgbW9kZSBtZXNzYWdlc1xuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicG9seU1vZGVPblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwb2x5TW9kZU9uKCkge1xuICAgICAgdmFyIGV2ZW50ID0gbmV3IE5vdGVPbkV2ZW50KHtcbiAgICAgICAgZGF0YTogWzB4MDAsIDB4QjAsIDB4N0UsIDB4MDBdXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KGV2ZW50KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyBhIHBpdGNoIGJlbmQuXG4gICAgICogQHBhcmFtIHtmbG9hdH0gYmVuZCAtIEJlbmQgdmFsdWUgcmFuZ2luZyBbLTEsMV0sIHplcm8gbWVhbmluZyBubyBiZW5kLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2V0UGl0Y2hCZW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFBpdGNoQmVuZChiZW5kKSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgUGl0Y2hCZW5kRXZlbnQoe1xuICAgICAgICBiZW5kOiBiZW5kXG4gICAgICB9KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBjb250cm9sbGVyIGNoYW5nZSBldmVudFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIgLSBDb250cm9sIG51bWJlci5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSBDb250cm9sIHZhbHVlLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY29udHJvbGxlckNoYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb250cm9sbGVyQ2hhbmdlKG51bWJlciwgdmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBDb250cm9sbGVyQ2hhbmdlRXZlbnQoe1xuICAgICAgICBjb250cm9sbGVyTnVtYmVyOiBudW1iZXIsXG4gICAgICAgIGNvbnRyb2xsZXJWYWx1ZTogdmFsdWVcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVHJhY2s7XG59KCk7XG5cbnZhciBWZXhGbG93ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVmV4RmxvdygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVmV4Rmxvdyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVmV4RmxvdywgW3tcbiAgICBrZXk6IFwidHJhY2tGcm9tVm9pY2VcIixcbiAgICB2YWx1ZTpcbiAgICAvKipcbiAgICAgKiBTdXBwb3J0IGZvciBjb252ZXJ0aW5nIFZleEZsb3cgdm9pY2UgaW50byBNaWRpV3JpdGVySlMgdHJhY2tcbiAgICAgKiBAcmV0dXJuIE1pZGlXcml0ZXIuVHJhY2sgb2JqZWN0XG4gICAgICovXG4gICAgZnVuY3Rpb24gdHJhY2tGcm9tVm9pY2Uodm9pY2UpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7XG4gICAgICAgIGFkZFJlbmRlcmVkQWNjaWRlbnRhbHM6IGZhbHNlXG4gICAgICB9O1xuICAgICAgdmFyIHRyYWNrID0gbmV3IFRyYWNrKCk7XG4gICAgICB2YXIgd2FpdCA9IFtdO1xuICAgICAgdm9pY2UudGlja2FibGVzLmZvckVhY2goZnVuY3Rpb24gKHRpY2thYmxlKSB7XG4gICAgICAgIGlmICh0aWNrYWJsZS5ub3RlVHlwZSA9PT0gJ24nKSB7XG4gICAgICAgICAgdHJhY2suYWRkRXZlbnQobmV3IE5vdGVFdmVudCh7XG4gICAgICAgICAgICBwaXRjaDogdGlja2FibGUua2V5cy5tYXAoZnVuY3Rpb24gKHBpdGNoLCBpbmRleCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuY29udmVydFBpdGNoKHBpdGNoLCBpbmRleCwgdGlja2FibGUsIG9wdGlvbnMuYWRkUmVuZGVyZWRBY2NpZGVudGFscyk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBfdGhpcy5jb252ZXJ0RHVyYXRpb24odGlja2FibGUpLFxuICAgICAgICAgICAgd2FpdDogd2FpdFxuICAgICAgICAgIH0pKTsgLy8gcmVzZXQgd2FpdFxuXG4gICAgICAgICAgd2FpdCA9IFtdO1xuICAgICAgICB9IGVsc2UgaWYgKHRpY2thYmxlLm5vdGVUeXBlID09PSAncicpIHtcbiAgICAgICAgICAvLyBtb3ZlIG9uIHRvIHRoZSBuZXh0IHRpY2thYmxlIGFuZCBhZGQgdGhpcyB0byB0aGUgc3RhY2tcbiAgICAgICAgICAvLyBvZiB0aGUgYHdhaXRgIHByb3BlcnR5IGZvciB0aGUgbmV4dCBub3RlIGV2ZW50XG4gICAgICAgICAgd2FpdC5wdXNoKF90aGlzLmNvbnZlcnREdXJhdGlvbih0aWNrYWJsZSkpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSk7IC8vIFRoZXJlIG1heSBiZSBvdXRzdGFuZGluZyByZXN0cyBhdCB0aGUgZW5kIG9mIHRoZSB0cmFjayxcbiAgICAgIC8vIHBhZCB3aXRoIGEgZ2hvc3Qgbm90ZSAoemVybyBkdXJhdGlvbiBhbmQgdmVsb2NpdHkpLCBqdXN0IHRvIGNhcHR1cmUgdGhlIHdhaXQuXG5cbiAgICAgIGlmICh3YWl0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgdHJhY2suYWRkRXZlbnQobmV3IE5vdGVFdmVudCh7XG4gICAgICAgICAgcGl0Y2g6ICdbYzRdJyxcbiAgICAgICAgICBkdXJhdGlvbjogJzAnLFxuICAgICAgICAgIHdhaXQ6IHdhaXQsXG4gICAgICAgICAgdmVsb2NpdHk6ICcwJ1xuICAgICAgICB9KSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cmFjaztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgVmV4RmxvdyBwaXRjaCBzeW50YXggdG8gTWlkaVdyaXRlckpTIHN5bnRheFxuICAgICAqIEBwYXJhbSBwaXRjaCBzdHJpbmdcbiAgICAgKiBAcGFyYW0gaW5kZXggcGl0Y2ggaW5kZXhcbiAgICAgKiBAcGFyYW0gbm90ZSBzdHJ1Y3QgZnJvbSBWZXhmbG93XG4gICAgICogQHBhcmFtIGFkZFJlbmRlcmVkQWNjaWRlbnRhbHMgYWRkcyBWZXhmbG93IHJlbmRlcmVkIGFjY2lkZW50YWxzXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjb252ZXJ0UGl0Y2hcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29udmVydFBpdGNoKHBpdGNoLCBpbmRleCwgbm90ZSkge1xuICAgICAgdmFyIGFkZFJlbmRlcmVkQWNjaWRlbnRhbHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IGZhbHNlO1xuICAgICAgLy8gU3BsaXRzIG5vdGUgbmFtZSBmcm9tIG9jdGF2ZVxuICAgICAgdmFyIHBpdGNoUGFydHMgPSBwaXRjaC5zcGxpdCgnLycpOyAvLyBSZXRyaWV2ZXMgYWNjaWRlbnRhbHMgZnJvbSBwaXRjaFxuICAgICAgLy8gUmVtb3ZlcyBuYXR1cmFsIGFjY2lkZW50YWxzIHNpbmNlIHRoZXkgYXJlIG5vdCBhY2NlcHRlZCBpbiBUb25hbCBNaWRpXG5cbiAgICAgIHZhciBhY2NpZGVudGFscyA9IHBpdGNoUGFydHNbMF0uc3Vic3RyaW5nKDEpLnJlcGxhY2UoJ24nLCAnJyk7XG5cbiAgICAgIGlmIChhZGRSZW5kZXJlZEFjY2lkZW50YWxzKSB7XG4gICAgICAgIHZhciBfbm90ZSRnZXRBY2NpZGVudGFscztcblxuICAgICAgICAoX25vdGUkZ2V0QWNjaWRlbnRhbHMgPSBub3RlLmdldEFjY2lkZW50YWxzKCkpID09PSBudWxsIHx8IF9ub3RlJGdldEFjY2lkZW50YWxzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbm90ZSRnZXRBY2NpZGVudGFscy5mb3JFYWNoKGZ1bmN0aW9uIChhY2NpZGVudGFsKSB7XG4gICAgICAgICAgaWYgKGFjY2lkZW50YWwuaW5kZXggPT09IGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoYWNjaWRlbnRhbC50eXBlID09PSAnbicpIHtcbiAgICAgICAgICAgICAgYWNjaWRlbnRhbHMgPSAnJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGFjY2lkZW50YWxzICs9IGFjY2lkZW50YWwudHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGl0Y2hQYXJ0c1swXVswXSArIGFjY2lkZW50YWxzICsgcGl0Y2hQYXJ0c1sxXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgVmV4RmxvdyBkdXJhdGlvbiBzeW50YXggdG8gTWlkaVdyaXRlckpTIHN5bnRheFxuICAgICAqIEBwYXJhbSBub3RlIHN0cnVjdCBmcm9tIFZleEZsb3dcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNvbnZlcnREdXJhdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb252ZXJ0RHVyYXRpb24obm90ZSkge1xuICAgICAgcmV0dXJuICdkJy5yZXBlYXQobm90ZS5kb3RzKSArIHRoaXMuY29udmVydEJhc2VEdXJhdGlvbihub3RlLmR1cmF0aW9uKSArIChub3RlLnR1cGxldCA/ICd0JyArIG5vdGUudHVwbGV0Lm51bV9ub3RlcyA6ICcnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgVmV4RmxvdyBiYXNlIGR1cmF0aW9uIHN5bnRheCB0byBNaWRpV3JpdGVySlMgc3ludGF4XG4gICAgICogQHBhcmFtIGR1cmF0aW9uIFZleGZsb3cgZHVyYXRpb25cbiAgICAgKiBAcmV0dXJucyBNaWRpV3JpdGVySlMgZHVyYXRpb25cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNvbnZlcnRCYXNlRHVyYXRpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29udmVydEJhc2VEdXJhdGlvbihkdXJhdGlvbikge1xuICAgICAgc3dpdGNoIChkdXJhdGlvbikge1xuICAgICAgICBjYXNlICd3JzpcbiAgICAgICAgICByZXR1cm4gJzEnO1xuXG4gICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICAgIHJldHVybiAnMic7XG5cbiAgICAgICAgY2FzZSAncSc6XG4gICAgICAgICAgcmV0dXJuICc0JztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBkdXJhdGlvbjtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVmV4Rmxvdztcbn0oKTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSBoZWFkZXIgY2h1bmsgc2VjdGlvbiBvZiBhIE1JREkgZmlsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXJPZlRyYWNrcyAtIE51bWJlciBvZiB0cmFja3NcbiAqIEByZXR1cm4ge0hlYWRlckNodW5rfVxuICovXG5cbnZhciBIZWFkZXJDaHVuayA9IGZ1bmN0aW9uIEhlYWRlckNodW5rKG51bWJlck9mVHJhY2tzKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIZWFkZXJDaHVuayk7XG5cbiAgdGhpcy50eXBlID0gQ29uc3RhbnRzLkhFQURFUl9DSFVOS19UWVBFO1xuICB2YXIgdHJhY2tUeXBlID0gbnVtYmVyT2ZUcmFja3MgPiAxID8gQ29uc3RhbnRzLkhFQURFUl9DSFVOS19GT1JNQVQxIDogQ29uc3RhbnRzLkhFQURFUl9DSFVOS19GT1JNQVQwO1xuICB0aGlzLmRhdGEgPSB0cmFja1R5cGUuY29uY2F0KFV0aWxzLm51bWJlclRvQnl0ZXMobnVtYmVyT2ZUcmFja3MsIDIpLCAvLyB0d28gYnl0ZXMgbG9uZyxcbiAgQ29uc3RhbnRzLkhFQURFUl9DSFVOS19ESVZJU0lPTik7XG4gIHRoaXMuc2l6ZSA9IFswLCAwLCAwLCB0aGlzLmRhdGEubGVuZ3RoXTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHRoYXQgcHV0cyB0b2dldGhlciB0cmFja3MgYW5kIHByb3ZpZGVzIG1ldGhvZHMgZm9yIGZpbGUgb3V0cHV0LlxuICogQHBhcmFtIHthcnJheXxUcmFja30gdHJhY2tzIC0gQSBzaW5nbGUge1RyYWNrfSBvYmplY3Qgb3IgYW4gYXJyYXkgb2Yge1RyYWNrfSBvYmplY3RzLlxuICogQHJldHVybiB7V3JpdGVyfVxuICovXG5cbnZhciBXcml0ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBXcml0ZXIodHJhY2tzKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBXcml0ZXIpO1xuXG4gICAgLy8gRW5zdXJlIHRyYWNrIGlzIGFuIGFycmF5XG4gICAgdHJhY2tzID0gVXRpbHMudG9BcnJheSh0cmFja3MpO1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIHRoaXMuZGF0YS5wdXNoKG5ldyBIZWFkZXJDaHVuayh0cmFja3MubGVuZ3RoKSk7IC8vIEZvciBlYWNoIHRyYWNrIGFkZCBmaW5hbCBlbmQgb2YgdHJhY2sgZXZlbnQgYW5kIGJ1aWxkIGRhdGFcblxuICAgIHRyYWNrcy5mb3JFYWNoKGZ1bmN0aW9uICh0cmFjaywgaSkge1xuICAgICAgX3RoaXMuZGF0YS5wdXNoKHRyYWNrLmJ1aWxkRGF0YSgpKTtcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogQnVpbGRzIHRoZSBmaWxlIGludG8gYSBVaW50OEFycmF5XG4gICAqIEByZXR1cm4ge1VpbnQ4QXJyYXl9XG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKFdyaXRlciwgW3tcbiAgICBrZXk6IFwiYnVpbGRGaWxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJ1aWxkRmlsZSgpIHtcbiAgICAgIHZhciBidWlsZCA9IFtdOyAvLyBEYXRhIGNvbnNpc3RzIG9mIGNodW5rcyB3aGljaCBjb25zaXN0cyBvZiBkYXRhXG5cbiAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBidWlsZCA9IGJ1aWxkLmNvbmNhdChkLnR5cGUsIGQuc2l6ZSwgZC5kYXRhKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGJ1aWxkKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVydCBmaWxlIGJ1ZmZlciB0byBhIGJhc2U2NCBzdHJpbmcuICBEaWZmZXJlbnQgbWV0aG9kcyBkZXBlbmRpbmcgb24gaWYgYnJvd3NlciBvciBub2RlLlxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImJhc2U2NFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBiYXNlNjQoKSB7XG4gICAgICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHJldHVybiBidG9hKFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgdGhpcy5idWlsZEZpbGUoKSkpO1xuICAgICAgcmV0dXJuIEJ1ZmZlci5mcm9tKHRoaXMuYnVpbGRGaWxlKCkpLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBkYXRhIFVSSS5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkYXRhVXJpXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRhdGFVcmkoKSB7XG4gICAgICByZXR1cm4gJ2RhdGE6YXVkaW8vbWlkaTtiYXNlNjQsJyArIHRoaXMuYmFzZTY0KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE91dHB1dCB0byBzdGRvdXRcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzdGRvdXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3Rkb3V0KCkge1xuICAgICAgcmV0dXJuIHByb2Nlc3Muc3Rkb3V0LndyaXRlKG5ldyBCdWZmZXIodGhpcy5idWlsZEZpbGUoKSkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBXcml0ZXI7XG59KCk7XG5cbnZhciBtYWluID0ge1xuICBDb25zdGFudHM6IENvbnN0YW50cyxcbiAgTm90ZU9uRXZlbnQ6IE5vdGVPbkV2ZW50LFxuICBOb3RlT2ZmRXZlbnQ6IE5vdGVPZmZFdmVudCxcbiAgTm90ZUV2ZW50OiBOb3RlRXZlbnQsXG4gIFBpdGNoQmVuZEV2ZW50OiBQaXRjaEJlbmRFdmVudCxcbiAgUHJvZ3JhbUNoYW5nZUV2ZW50OiBQcm9ncmFtQ2hhbmdlRXZlbnQsXG4gIFRyYWNrOiBUcmFjayxcbiAgVXRpbHM6IFV0aWxzLFxuICBWZXhGbG93OiBWZXhGbG93LFxuICBXcml0ZXI6IFdyaXRlclxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtYWluO1xuIiwgInZhciBNaWRpID0ge307XG5cbihmdW5jdGlvbihleHBvcnRlZCkge1xuXG5cdHZhciBERUZBVUxUX1ZPTFVNRSAgID0gZXhwb3J0ZWQuREVGQVVMVF9WT0xVTUUgICA9IDkwO1xuXHR2YXIgREVGQVVMVF9EVVJBVElPTiA9IGV4cG9ydGVkLkRFRkFVTFRfRFVSQVRJT04gPSAxMjg7XG5cdHZhciBERUZBVUxUX0NIQU5ORUwgID0gZXhwb3J0ZWQuREVGQVVMVF9DSEFOTkVMICA9IDA7XG5cblx0LyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdCAqIFV0aWxpdHkgZnVuY3Rpb25zXG5cdCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuXHR2YXIgVXRpbCA9IHtcblxuXHRcdG1pZGlfbGV0dGVyX3BpdGNoZXM6IHsgYToyMSwgYjoyMywgYzoxMiwgZDoxNCwgZToxNiwgZjoxNywgZzoxOSB9LFxuXG5cdFx0LyoqXG5cdFx0ICogQ29udmVydCBhIHN5bWJvbGljIG5vdGUgbmFtZSAoZS5nLiBcImM0XCIpIHRvIGEgbnVtZXJpYyBNSURJIHBpdGNoIChlLmcuXG5cdFx0ICogNjAsIG1pZGRsZSBDKS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBuIC0gVGhlIHN5bWJvbGljIG5vdGUgbmFtZSB0byBwYXJzZS5cblx0XHQgKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgTUlESSBwaXRjaCB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSBzeW1ib2xpYyBub3RlXG5cdFx0ICogbmFtZS5cblx0XHQgKi9cblx0XHRtaWRpUGl0Y2hGcm9tTm90ZTogZnVuY3Rpb24obikge1xuXHRcdFx0dmFyIG1hdGNoZXMgPSAvKFthLWddKSgjK3xiKyk/KFswLTldKykkL2kuZXhlYyhuKTtcblx0XHRcdHZhciBub3RlID0gbWF0Y2hlc1sxXS50b0xvd2VyQ2FzZSgpLCBhY2NpZGVudGFsID0gbWF0Y2hlc1syXSB8fCAnJywgb2N0YXZlID0gcGFyc2VJbnQobWF0Y2hlc1szXSwgMTApO1xuXHRcdFx0cmV0dXJuICgxMiAqIG9jdGF2ZSkgKyBVdGlsLm1pZGlfbGV0dGVyX3BpdGNoZXNbbm90ZV0gKyAoYWNjaWRlbnRhbC5zdWJzdHIoMCwxKT09JyMnPzE6LTEpICogYWNjaWRlbnRhbC5sZW5ndGg7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIEVuc3VyZSB0aGF0IHRoZSBnaXZlbiBhcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gYSBNSURJIHBpdGNoLiBOb3RlIHRoYXRcblx0XHQgKiBpdCBtYXkgYWxyZWFkeSBiZSBvbmUgKGluY2x1ZGluZyBhIHB1cmVseSBudW1lcmljIHN0cmluZykuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IHAgLSBUaGUgcGl0Y2ggdG8gY29udmVydC5cblx0XHQgKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgcmVzdWx0aW5nIG51bWVyaWMgTUlESSBwaXRjaC5cblx0XHQgKi9cblx0XHRlbnN1cmVNaWRpUGl0Y2g6IGZ1bmN0aW9uKHApIHtcblx0XHRcdGlmICh0eXBlb2YgcCA9PSAnbnVtYmVyJyB8fCAhL1teMC05XS8udGVzdChwKSkge1xuXHRcdFx0XHQvLyBudW1lcmljIHBpdGNoXG5cdFx0XHRcdHJldHVybiBwYXJzZUludChwLCAxMCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBhc3N1bWUgaXQncyBhIG5vdGUgbmFtZVxuXHRcdFx0XHRyZXR1cm4gVXRpbC5taWRpUGl0Y2hGcm9tTm90ZShwKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0bWlkaV9waXRjaGVzX2xldHRlcjogeyAnMTInOidjJywgJzEzJzonYyMnLCAnMTQnOidkJywgJzE1JzonZCMnLCAnMTYnOidlJywgJzE3JzonZicsICcxOCc6J2YjJywgJzE5JzonZycsICcyMCc6J2cjJywgJzIxJzonYScsICcyMic6J2EjJywgJzIzJzonYicgfSxcblx0XHRtaWRpX2ZsYXR0ZW5lZF9ub3RlczogeyAnYSMnOidiYicsICdjIyc6J2RiJywgJ2QjJzonZWInLCAnZiMnOidnYicsICdnIyc6J2FiJyB9LFxuXG5cdFx0LyoqXG5cdFx0ICogQ29udmVydCBhIG51bWVyaWMgTUlESSBwaXRjaCB2YWx1ZSAoZS5nLiA2MCkgdG8gYSBzeW1ib2xpYyBub3RlIG5hbWVcblx0XHQgKiAoZS5nLiBcImM0XCIpLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IG4gLSBUaGUgbnVtZXJpYyBNSURJIHBpdGNoIHZhbHVlIHRvIGNvbnZlcnQuXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbcmV0dXJuRmxhdHRlbmVkPWZhbHNlXSAtIFdoZXRoZXIgdG8gcHJlZmVyIGZsYXR0ZW5lZFxuXHRcdCAqIG5vdGVzIHRvIHNoYXJwZW5lZCBvbmVzLiBPcHRpb25hbCwgZGVmYXVsdCBmYWxzZS5cblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcmVzdWx0aW5nIHN5bWJvbGljIG5vdGUgbmFtZS5cblx0XHQgKi9cblx0XHRub3RlRnJvbU1pZGlQaXRjaDogZnVuY3Rpb24obiwgcmV0dXJuRmxhdHRlbmVkKSB7XG5cdFx0XHR2YXIgb2N0YXZlID0gMCwgbm90ZU51bSA9IG4sIG5vdGVOYW1lLCByZXR1cm5GbGF0dGVuZWQgPSByZXR1cm5GbGF0dGVuZWQgfHwgZmFsc2U7XG5cdFx0XHRpZiAobiA+IDIzKSB7XG5cdFx0XHRcdC8vIG5vdGVOdW0gaXMgb24gb2N0YXZlIDEgb3IgbW9yZVxuXHRcdFx0XHRvY3RhdmUgPSBNYXRoLmZsb29yKG4vMTIpIC0gMTtcblx0XHRcdFx0Ly8gc3VidHJhY3QgbnVtYmVyIG9mIG9jdGF2ZXMgZnJvbSBub3RlTnVtXG5cdFx0XHRcdG5vdGVOdW0gPSBuIC0gb2N0YXZlICogMTI7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGdldCBub3RlIG5hbWUgKGMjLCBkLCBmIyBldGMpXG5cdFx0XHRub3RlTmFtZSA9IFV0aWwubWlkaV9waXRjaGVzX2xldHRlcltub3RlTnVtXTtcblx0XHRcdC8vIFVzZSBmbGF0dGVuZWQgbm90ZXMgaWYgcmVxdWVzdGVkIChlLmcuIGYjIHNob3VsZCBiZSBvdXRwdXQgYXMgZ2IpXG5cdFx0XHRpZiAocmV0dXJuRmxhdHRlbmVkICYmIG5vdGVOYW1lLmluZGV4T2YoJyMnKSA+IDApIHtcblx0XHRcdFx0bm90ZU5hbWUgPSBVdGlsLm1pZGlfZmxhdHRlbmVkX25vdGVzW25vdGVOYW1lXTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBub3RlTmFtZSArIG9jdGF2ZTtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogQ29udmVydCBiZWF0cyBwZXIgbWludXRlIChCUE0pIHRvIG1pY3Jvc2Vjb25kcyBwZXIgcXVhcnRlciBub3RlIChNUFFOKS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBicG0gLSBBIG51bWJlciBpbiBiZWF0cyBwZXIgbWludXRlLlxuXHRcdCAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgbWljcm9zZWNvbmRzIHBlciBxdWFydGVyIG5vdGUuXG5cdFx0ICovXG5cdFx0bXBxbkZyb21CcG06IGZ1bmN0aW9uKGJwbSkge1xuXHRcdFx0dmFyIG1wcW4gPSBNYXRoLmZsb29yKDYwMDAwMDAwIC8gYnBtKTtcblx0XHRcdHZhciByZXQ9W107XG5cdFx0XHRkbyB7XG5cdFx0XHRcdHJldC51bnNoaWZ0KG1wcW4gJiAweEZGKTtcblx0XHRcdFx0bXBxbiA+Pj0gODtcblx0XHRcdH0gd2hpbGUgKG1wcW4pO1xuXHRcdFx0d2hpbGUgKHJldC5sZW5ndGggPCAzKSB7XG5cdFx0XHRcdHJldC5wdXNoKDApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJldDtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogQ29udmVydCBtaWNyb3NlY29uZHMgcGVyIHF1YXJ0ZXIgbm90ZSAoTVBRTikgdG8gYmVhdHMgcGVyIG1pbnV0ZSAoQlBNKS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBtcHFuIC0gVGhlIG51bWJlciBvZiBtaWNyb3NlY29uZHMgcGVyIHF1YXJ0ZXIgbm90ZS5cblx0XHQgKiBAcmV0dXJucyB7bnVtYmVyfSBBIG51bWJlciBpbiBiZWF0cyBwZXIgbWludXRlLlxuXHRcdCAqL1xuXHRcdGJwbUZyb21NcHFuOiBmdW5jdGlvbihtcHFuKSB7XG5cdFx0XHR2YXIgbSA9IG1wcW47XG5cdFx0XHRpZiAodHlwZW9mIG1wcW5bMF0gIT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0bSA9IDA7XG5cdFx0XHRcdGZvciAodmFyIGk9MCwgbD1tcHFuLmxlbmd0aC0xOyBsID49IDA7ICsraSwgLS1sKSB7XG5cdFx0XHRcdFx0bSB8PSBtcHFuW2ldIDw8IGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBNYXRoLmZsb29yKDYwMDAwMDAwIC8gbXBxbik7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIENvbnZlcnRzIGFuIGFycmF5IG9mIGJ5dGVzIHRvIGEgc3RyaW5nIG9mIGhleGFkZWNpbWFsIGNoYXJhY3RlcnMuIFByZXBhcmVzXG5cdFx0ICogaXQgdG8gYmUgY29udmVydGVkIGludG8gYSBiYXNlNjQgc3RyaW5nLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtBcnJheX0gYnl0ZUFycmF5IC0gQXJyYXkgb2YgYnl0ZXMgdG8gYmUgY29udmVydGVkLlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9IEhleGFkZWNpbWFsIHN0cmluZywgZS5nLiBcIjA5N0I4QVwiLlxuXHRcdCAqL1xuXHRcdGNvZGVzMlN0cjogZnVuY3Rpb24oYnl0ZUFycmF5KSB7XG5cdFx0XHRyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBieXRlQXJyYXkpO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBDb252ZXJ0cyBhIHN0cmluZyBvZiBoZXhhZGVjaW1hbCB2YWx1ZXMgdG8gYW4gYXJyYXkgb2YgYnl0ZXMuIEl0IGNhbiBhbHNvXG5cdFx0ICogYWRkIHJlbWFpbmluZyBcIjBcIiBuaWJibGVzIGluIG9yZGVyIHRvIGhhdmUgZW5vdWdoIGJ5dGVzIGluIHRoZSBhcnJheSBhcyB0aGVcblx0XHQgKiBgZmluYWxCeXRlc2AgcGFyYW1ldGVyLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIHN0cmluZyBvZiBoZXhhZGVjaW1hbCB2YWx1ZXMgZS5nLiBcIjA5N0I4QVwiXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IFtmaW5hbEJ5dGVzXSAtIE9wdGlvbmFsLiBUaGUgZGVzaXJlZCBudW1iZXIgb2YgYnl0ZXNcblx0XHQgKiAobm90IG5pYmJsZXMpIHRoYXQgdGhlIHJldHVybmVkIGFycmF5IHNob3VsZCBjb250YWluLlxuXHRcdCAqIEByZXR1cm5zIHtBcnJheX0gQW4gYXJyYXkgb2YgbmliYmxlcy5cblx0XHQgKi9cblx0XHRzdHIyQnl0ZXM6IGZ1bmN0aW9uIChzdHIsIGZpbmFsQnl0ZXMpIHtcblx0XHRcdGlmIChmaW5hbEJ5dGVzKSB7XG5cdFx0XHRcdHdoaWxlICgoc3RyLmxlbmd0aCAvIDIpIDwgZmluYWxCeXRlcykgeyBzdHIgPSBcIjBcIiArIHN0cjsgfVxuXHRcdFx0fVxuXG5cdFx0XHR2YXIgYnl0ZXMgPSBbXTtcblx0XHRcdGZvciAodmFyIGk9c3RyLmxlbmd0aC0xOyBpPj0wOyBpID0gaS0yKSB7XG5cdFx0XHRcdHZhciBjaGFycyA9IGkgPT09IDAgPyBzdHJbaV0gOiBzdHJbaS0xXSArIHN0cltpXTtcblx0XHRcdFx0Ynl0ZXMudW5zaGlmdChwYXJzZUludChjaGFycywgMTYpKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGJ5dGVzO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBUcmFuc2xhdGVzIG51bWJlciBvZiB0aWNrcyB0byBNSURJIHRpbWVzdGFtcCBmb3JtYXQsIHJldHVybmluZyBhbiBhcnJheVxuXHRcdCAqIG9mIGJ5dGVzIHdpdGggdGhlIHRpbWUgdmFsdWVzLiBNSURJIGhhcyBhIHZlcnkgcGFydGljdWxhciB3YXkgdG8gZXhwcmVzc1xuXHRcdCAqIHRpbWU7IHRha2UgYSBnb29kIGxvb2sgYXQgdGhlIHNwZWMgYmVmb3JlIGV2ZXIgdG91Y2hpbmcgdGhpcyBmdW5jdGlvbi5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSB0aWNrcyAtIE51bWJlciBvZiB0aWNrcyB0byBiZSB0cmFuc2xhdGVkLlxuXHRcdCAqIEByZXR1cm5zIHtudW1iZXJ9IEFycmF5IG9mIGJ5dGVzIHRoYXQgZm9ybSB0aGUgTUlESSB0aW1lIHZhbHVlLlxuXHRcdCAqL1xuXHRcdHRyYW5zbGF0ZVRpY2tUaW1lOiBmdW5jdGlvbih0aWNrcykge1xuXHRcdFx0dmFyIGJ1ZmZlciA9IHRpY2tzICYgMHg3RjtcblxuXHRcdFx0d2hpbGUgKHRpY2tzID0gdGlja3MgPj4gNykge1xuXHRcdFx0XHRidWZmZXIgPDw9IDg7XG5cdFx0XHRcdGJ1ZmZlciB8PSAoKHRpY2tzICYgMHg3RikgfCAweDgwKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGJMaXN0ID0gW107XG5cdFx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0XHRiTGlzdC5wdXNoKGJ1ZmZlciAmIDB4ZmYpO1xuXG5cdFx0XHRcdGlmIChidWZmZXIgJiAweDgwKSB7IGJ1ZmZlciA+Pj0gODsgfVxuXHRcdFx0XHRlbHNlIHsgYnJlYWs7IH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBiTGlzdDtcblx0XHR9LFxuXG5cdH07XG5cblx0LyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdCAqIEV2ZW50IGNsYXNzXG5cdCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuXHQvKipcblx0ICogQ29uc3RydWN0IGEgTUlESSBldmVudC5cblx0ICpcblx0ICogUGFyYW1ldGVycyBpbmNsdWRlOlxuXHQgKiAgLSB0aW1lIFtvcHRpb25hbCBudW1iZXJdIC0gVGlja3Mgc2luY2UgcHJldmlvdXMgZXZlbnQuXG5cdCAqICAtIHR5cGUgW3JlcXVpcmVkIG51bWJlcl0gLSBUeXBlIG9mIGV2ZW50LlxuXHQgKiAgLSBjaGFubmVsIFtyZXF1aXJlZCBudW1iZXJdIC0gQ2hhbm5lbCBmb3IgdGhlIGV2ZW50LlxuXHQgKiAgLSBwYXJhbTEgW3JlcXVpcmVkIG51bWJlcl0gLSBGaXJzdCBldmVudCBwYXJhbWV0ZXIuXG5cdCAqICAtIHBhcmFtMiBbb3B0aW9uYWwgbnVtYmVyXSAtIFNlY29uZCBldmVudCBwYXJhbWV0ZXIuXG5cdCAqL1xuXHR2YXIgTWlkaUV2ZW50ID0gZnVuY3Rpb24ocGFyYW1zKSB7XG5cdFx0aWYgKCF0aGlzKSByZXR1cm4gbmV3IE1pZGlFdmVudChwYXJhbXMpO1xuXHRcdGlmIChwYXJhbXMgJiZcblx0XHRcdFx0KHBhcmFtcy50eXBlICAgICE9PSBudWxsIHx8IHBhcmFtcy50eXBlICAgICE9PSB1bmRlZmluZWQpICYmXG5cdFx0XHRcdChwYXJhbXMuY2hhbm5lbCAhPT0gbnVsbCB8fCBwYXJhbXMuY2hhbm5lbCAhPT0gdW5kZWZpbmVkKSAmJlxuXHRcdFx0XHQocGFyYW1zLnBhcmFtMSAgIT09IG51bGwgfHwgcGFyYW1zLnBhcmFtMSAgIT09IHVuZGVmaW5lZCkpIHtcblx0XHRcdHRoaXMuc2V0VGltZShwYXJhbXMudGltZSk7XG5cdFx0XHR0aGlzLnNldFR5cGUocGFyYW1zLnR5cGUpO1xuXHRcdFx0dGhpcy5zZXRDaGFubmVsKHBhcmFtcy5jaGFubmVsKTtcblx0XHRcdHRoaXMuc2V0UGFyYW0xKHBhcmFtcy5wYXJhbTEpO1xuXHRcdFx0dGhpcy5zZXRQYXJhbTIocGFyYW1zLnBhcmFtMik7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIGV2ZW50IGNvZGVzXG5cdE1pZGlFdmVudC5OT1RFX09GRiAgICAgICAgICAgPSAweDgwO1xuXHRNaWRpRXZlbnQuTk9URV9PTiAgICAgICAgICAgID0gMHg5MDtcblx0TWlkaUV2ZW50LkFGVEVSX1RPVUNIICAgICAgICA9IDB4QTA7XG5cdE1pZGlFdmVudC5DT05UUk9MTEVSICAgICAgICAgPSAweEIwO1xuXHRNaWRpRXZlbnQuUFJPR1JBTV9DSEFOR0UgICAgID0gMHhDMDtcblx0TWlkaUV2ZW50LkNIQU5ORUxfQUZURVJUT1VDSCA9IDB4RDA7XG5cdE1pZGlFdmVudC5QSVRDSF9CRU5EICAgICAgICAgPSAweEUwO1xuXG5cblx0LyoqXG5cdCAqIFNldCB0aGUgdGltZSBmb3IgdGhlIGV2ZW50IGluIHRpY2tzIHNpbmNlIHRoZSBwcmV2aW91cyBldmVudC5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHRpY2tzIC0gVGhlIG51bWJlciBvZiB0aWNrcyBzaW5jZSB0aGUgcHJldmlvdXMgZXZlbnQuIE1heVxuXHQgKiBiZSB6ZXJvLlxuXHQgKi9cblx0TWlkaUV2ZW50LnByb3RvdHlwZS5zZXRUaW1lID0gZnVuY3Rpb24odGlja3MpIHtcblx0XHR0aGlzLnRpbWUgPSBVdGlsLnRyYW5zbGF0ZVRpY2tUaW1lKHRpY2tzIHx8IDApO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIHR5cGUgb2YgdGhlIGV2ZW50LiBNdXN0IGJlIG9uZSBvZiB0aGUgZXZlbnQgY29kZXMgb24gTWlkaUV2ZW50LlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gdHlwZSAtIEV2ZW50IHR5cGUuXG5cdCAqL1xuXHRNaWRpRXZlbnQucHJvdG90eXBlLnNldFR5cGUgPSBmdW5jdGlvbih0eXBlKSB7XG5cdFx0aWYgKHR5cGUgPCBNaWRpRXZlbnQuTk9URV9PRkYgfHwgdHlwZSA+IE1pZGlFdmVudC5QSVRDSF9CRU5EKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUcnlpbmcgdG8gc2V0IGFuIHVua25vd24gZXZlbnQ6IFwiICsgdHlwZSk7XG5cdFx0fVxuXG5cdFx0dGhpcy50eXBlID0gdHlwZTtcblx0fTtcblxuXHQvKipcblx0ICogU2V0IHRoZSBjaGFubmVsIGZvciB0aGUgZXZlbnQuIE11c3QgYmUgYmV0d2VlbiAwIGFuZCAxNSwgaW5jbHVzaXZlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gY2hhbm5lbCAtIFRoZSBldmVudCBjaGFubmVsLlxuXHQgKi9cblx0TWlkaUV2ZW50LnByb3RvdHlwZS5zZXRDaGFubmVsID0gZnVuY3Rpb24oY2hhbm5lbCkge1xuXHRcdGlmIChjaGFubmVsIDwgMCB8fCBjaGFubmVsID4gMTUpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkNoYW5uZWwgaXMgb3V0IG9mIGJvdW5kcy5cIik7XG5cdFx0fVxuXG5cdFx0dGhpcy5jaGFubmVsID0gY2hhbm5lbDtcblx0fTtcblxuXHQvKipcblx0ICogU2V0IHRoZSBmaXJzdCBwYXJhbWV0ZXIgZm9yIHRoZSBldmVudC4gTXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDI1NSxcblx0ICogaW5jbHVzaXZlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gcCAtIFRoZSBmaXJzdCBldmVudCBwYXJhbWV0ZXIgdmFsdWUuXG5cdCAqL1xuXHRNaWRpRXZlbnQucHJvdG90eXBlLnNldFBhcmFtMSA9IGZ1bmN0aW9uKHApIHtcblx0XHR0aGlzLnBhcmFtMSA9IHA7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNldCB0aGUgc2Vjb25kIHBhcmFtZXRlciBmb3IgdGhlIGV2ZW50LiBNdXN0IGJlIGJldHdlZW4gMCBhbmQgMjU1LFxuXHQgKiBpbmNsdXNpdmUuXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBwIC0gVGhlIHNlY29uZCBldmVudCBwYXJhbWV0ZXIgdmFsdWUuXG5cdCAqL1xuXHRNaWRpRXZlbnQucHJvdG90eXBlLnNldFBhcmFtMiA9IGZ1bmN0aW9uKHApIHtcblx0XHR0aGlzLnBhcmFtMiA9IHA7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNlcmlhbGl6ZSB0aGUgZXZlbnQgdG8gYW4gYXJyYXkgb2YgYnl0ZXMuXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gVGhlIGFycmF5IG9mIHNlcmlhbGl6ZWQgYnl0ZXMuXG5cdCAqL1xuXHRNaWRpRXZlbnQucHJvdG90eXBlLnRvQnl0ZXMgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgYnl0ZUFycmF5ID0gW107XG5cblx0XHR2YXIgdHlwZUNoYW5uZWxCeXRlID0gdGhpcy50eXBlIHwgKHRoaXMuY2hhbm5lbCAmIDB4Rik7XG5cblx0XHRieXRlQXJyYXkucHVzaC5hcHBseShieXRlQXJyYXksIHRoaXMudGltZSk7XG5cdFx0Ynl0ZUFycmF5LnB1c2godHlwZUNoYW5uZWxCeXRlKTtcblx0XHRieXRlQXJyYXkucHVzaCh0aGlzLnBhcmFtMSk7XG5cblx0XHQvLyBTb21lIGV2ZW50cyBkb24ndCBoYXZlIGEgc2Vjb25kIHBhcmFtZXRlclxuXHRcdGlmICh0aGlzLnBhcmFtMiAhPT0gdW5kZWZpbmVkICYmIHRoaXMucGFyYW0yICE9PSBudWxsKSB7XG5cdFx0XHRieXRlQXJyYXkucHVzaCh0aGlzLnBhcmFtMik7XG5cdFx0fVxuXHRcdHJldHVybiBieXRlQXJyYXk7XG5cdH07XG5cblx0LyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdCAqIE1ldGFFdmVudCBjbGFzc1xuXHQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cblx0LyoqXG5cdCAqIENvbnN0cnVjdCBhIG1ldGEgZXZlbnQuXG5cdCAqXG5cdCAqIFBhcmFtZXRlcnMgaW5jbHVkZTpcblx0ICogIC0gdGltZSBbb3B0aW9uYWwgbnVtYmVyXSAtIFRpY2tzIHNpbmNlIHByZXZpb3VzIGV2ZW50LlxuXHQgKiAgLSB0eXBlIFtyZXF1aXJlZCBudW1iZXJdIC0gVHlwZSBvZiBldmVudC5cblx0ICogIC0gZGF0YSBbb3B0aW9uYWwgYXJyYXl8c3RyaW5nXSAtIEV2ZW50IGRhdGEuXG5cdCAqL1xuXHR2YXIgTWV0YUV2ZW50ID0gZnVuY3Rpb24ocGFyYW1zKSB7XG5cdFx0aWYgKCF0aGlzKSByZXR1cm4gbmV3IE1ldGFFdmVudChwYXJhbXMpO1xuXHRcdHZhciBwID0gcGFyYW1zIHx8IHt9O1xuXHRcdHRoaXMuc2V0VGltZShwYXJhbXMudGltZSk7XG5cdFx0dGhpcy5zZXRUeXBlKHBhcmFtcy50eXBlKTtcblx0XHR0aGlzLnNldERhdGEocGFyYW1zLmRhdGEpO1xuXHR9O1xuXG5cdE1ldGFFdmVudC5TRVFVRU5DRSAgID0gMHgwMDtcblx0TWV0YUV2ZW50LlRFWFQgICAgICAgPSAweDAxO1xuXHRNZXRhRXZlbnQuQ09QWVJJR0hUICA9IDB4MDI7XG5cdE1ldGFFdmVudC5UUkFDS19OQU1FID0gMHgwMztcblx0TWV0YUV2ZW50LklOU1RSVU1FTlQgPSAweDA0O1xuXHRNZXRhRXZlbnQuTFlSSUMgICAgICA9IDB4MDU7XG5cdE1ldGFFdmVudC5NQVJLRVIgICAgID0gMHgwNjtcblx0TWV0YUV2ZW50LkNVRV9QT0lOVCAgPSAweDA3O1xuXHRNZXRhRXZlbnQuQ0hBTk5FTF9QUkVGSVggPSAweDIwO1xuXHRNZXRhRXZlbnQuRU5EX09GX1RSQUNLICAgPSAweDJmO1xuXHRNZXRhRXZlbnQuVEVNUE8gICAgICA9IDB4NTE7XG5cdE1ldGFFdmVudC5TTVBURSAgICAgID0gMHg1NDtcblx0TWV0YUV2ZW50LlRJTUVfU0lHICAgPSAweDU4O1xuXHRNZXRhRXZlbnQuS0VZX1NJRyAgICA9IDB4NTk7XG5cdE1ldGFFdmVudC5TRVFfRVZFTlQgID0gMHg3ZjtcblxuXHQvKipcblx0ICogU2V0IHRoZSB0aW1lIGZvciB0aGUgZXZlbnQgaW4gdGlja3Mgc2luY2UgdGhlIHByZXZpb3VzIGV2ZW50LlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gdGlja3MgLSBUaGUgbnVtYmVyIG9mIHRpY2tzIHNpbmNlIHRoZSBwcmV2aW91cyBldmVudC4gTWF5XG5cdCAqIGJlIHplcm8uXG5cdCAqL1xuXHRNZXRhRXZlbnQucHJvdG90eXBlLnNldFRpbWUgPSBmdW5jdGlvbih0aWNrcykge1xuXHRcdHRoaXMudGltZSA9IFV0aWwudHJhbnNsYXRlVGlja1RpbWUodGlja3MgfHwgMCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNldCB0aGUgdHlwZSBvZiB0aGUgZXZlbnQuIE11c3QgYmUgb25lIG9mIHRoZSBldmVudCBjb2RlcyBvbiBNZXRhRXZlbnQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0IC0gRXZlbnQgdHlwZS5cblx0ICovXG5cdE1ldGFFdmVudC5wcm90b3R5cGUuc2V0VHlwZSA9IGZ1bmN0aW9uKHQpIHtcblx0XHR0aGlzLnR5cGUgPSB0O1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIGRhdGEgYXNzb2NpYXRlZCB3aXRoIHRoZSBldmVudC4gTWF5IGJlIGEgc3RyaW5nIG9yIGFycmF5IG9mIGJ5dGVcblx0ICogdmFsdWVzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ3xBcnJheX0gZCAtIEV2ZW50IGRhdGEuXG5cdCAqL1xuXHRNZXRhRXZlbnQucHJvdG90eXBlLnNldERhdGEgPSBmdW5jdGlvbihkKSB7XG5cdFx0dGhpcy5kYXRhID0gZDtcblx0fTtcblxuXHQvKipcblx0ICogU2VyaWFsaXplIHRoZSBldmVudCB0byBhbiBhcnJheSBvZiBieXRlcy5cblx0ICpcblx0ICogQHJldHVybnMge0FycmF5fSBUaGUgYXJyYXkgb2Ygc2VyaWFsaXplZCBieXRlcy5cblx0ICovXG5cdE1ldGFFdmVudC5wcm90b3R5cGUudG9CeXRlcyA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICghdGhpcy50eXBlKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUeXBlIGZvciBtZXRhLWV2ZW50IG5vdCBzcGVjaWZpZWQuXCIpO1xuXHRcdH1cblxuXHRcdHZhciBieXRlQXJyYXkgPSBbXTtcblx0XHRieXRlQXJyYXkucHVzaC5hcHBseShieXRlQXJyYXksIHRoaXMudGltZSk7XG5cdFx0Ynl0ZUFycmF5LnB1c2goMHhGRiwgdGhpcy50eXBlKTtcblxuXHRcdC8vIElmIGRhdGEgaXMgYW4gYXJyYXksIHdlIGFzc3VtZSB0aGF0IGl0IGNvbnRhaW5zIHNldmVyYWwgYnl0ZXMuIFdlXG5cdFx0Ly8gYXBlbmQgdGhlbSB0byBieXRlQXJyYXkuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkodGhpcy5kYXRhKSkge1xuXHRcdFx0Ynl0ZUFycmF5LnB1c2godGhpcy5kYXRhLmxlbmd0aCk7XG5cdFx0XHRieXRlQXJyYXkucHVzaC5hcHBseShieXRlQXJyYXksIHRoaXMuZGF0YSk7XG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgdGhpcy5kYXRhID09ICdudW1iZXInKSB7XG5cdFx0XHRieXRlQXJyYXkucHVzaCgxLCB0aGlzLmRhdGEpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5kYXRhICE9PSBudWxsICYmIHRoaXMuZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHQvLyBhc3N1bWUgc3RyaW5nOyBtYXkgYmUgYSBiYWQgYXNzdW1wdGlvblxuXHRcdFx0Ynl0ZUFycmF5LnB1c2godGhpcy5kYXRhLmxlbmd0aCk7XG5cdFx0XHR2YXIgZGF0YUJ5dGVzID0gdGhpcy5kYXRhLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24oeCl7IHJldHVybiB4LmNoYXJDb2RlQXQoMCkgfSk7XG5cdFx0XHRieXRlQXJyYXkucHVzaC5hcHBseShieXRlQXJyYXksIGRhdGFCeXRlcyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGJ5dGVBcnJheS5wdXNoKDApO1xuXHRcdH1cblxuXHRcdHJldHVybiBieXRlQXJyYXk7XG5cdH07XG5cblx0LyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdCAqIFRyYWNrIGNsYXNzXG5cdCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuXHQvKipcblx0ICogQ29uc3RydWN0IGEgTUlESSB0cmFjay5cblx0ICpcblx0ICogUGFyYW1ldGVycyBpbmNsdWRlOlxuXHQgKiAgLSBldmVudHMgW29wdGlvbmFsIGFycmF5XSAtIEFycmF5IG9mIGV2ZW50cyBmb3IgdGhlIHRyYWNrLlxuXHQgKi9cblx0dmFyIFRyYWNrID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0aWYgKCF0aGlzKSByZXR1cm4gbmV3IFRyYWNrKGNvbmZpZyk7XG5cdFx0dmFyIGMgPSBjb25maWcgfHwge307XG5cdFx0dGhpcy5ldmVudHMgPSBjLmV2ZW50cyB8fCBbXTtcblx0fTtcblxuXHRUcmFjay5TVEFSVF9CWVRFUyA9IFsweDRkLCAweDU0LCAweDcyLCAweDZiXTtcblx0VHJhY2suRU5EX0JZVEVTICAgPSBbMHgwMCwgMHhGRiwgMHgyRiwgMHgwMF07XG5cblx0LyoqXG5cdCAqIEFkZCBhbiBldmVudCB0byB0aGUgdHJhY2suXG5cdCAqXG5cdCAqIEBwYXJhbSB7TWlkaUV2ZW50fE1ldGFFdmVudH0gZXZlbnQgLSBUaGUgZXZlbnQgdG8gYWRkLlxuXHQgKiBAcmV0dXJucyB7VHJhY2t9IFRoZSBjdXJyZW50IHRyYWNrLlxuXHQgKi9cblx0VHJhY2sucHJvdG90eXBlLmFkZEV2ZW50ID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHR0aGlzLmV2ZW50cy5wdXNoKGV2ZW50KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHQvKipcblx0ICogQWRkIGEgbm90ZS1vbiBldmVudCB0byB0aGUgdHJhY2suXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBjaGFubmVsIC0gVGhlIGNoYW5uZWwgdG8gYWRkIHRoZSBldmVudCB0by5cblx0ICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBwaXRjaCAtIFRoZSBwaXRjaCBvZiB0aGUgbm90ZSwgZWl0aGVyIG51bWVyaWMgb3Jcblx0ICogc3ltYm9saWMuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbdGltZT0wXSAtIFRoZSBudW1iZXIgb2YgdGlja3Mgc2luY2UgdGhlIHByZXZpb3VzIGV2ZW50LFxuXHQgKiBkZWZhdWx0cyB0byAwLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gW3ZlbG9jaXR5PTkwXSAtIFRoZSB2b2x1bWUgZm9yIHRoZSBub3RlLCBkZWZhdWx0cyB0b1xuXHQgKiBERUZBVUxUX1ZPTFVNRS5cblx0ICogQHJldHVybnMge1RyYWNrfSBUaGUgY3VycmVudCB0cmFjay5cblx0ICovXG5cdFRyYWNrLnByb3RvdHlwZS5hZGROb3RlT24gPSBUcmFjay5wcm90b3R5cGUubm90ZU9uID0gZnVuY3Rpb24oY2hhbm5lbCwgcGl0Y2gsIHRpbWUsIHZlbG9jaXR5KSB7XG5cdFx0dGhpcy5ldmVudHMucHVzaChuZXcgTWlkaUV2ZW50KHtcblx0XHRcdHR5cGU6IE1pZGlFdmVudC5OT1RFX09OLFxuXHRcdFx0Y2hhbm5lbDogY2hhbm5lbCxcblx0XHRcdHBhcmFtMTogVXRpbC5lbnN1cmVNaWRpUGl0Y2gocGl0Y2gpLFxuXHRcdFx0cGFyYW0yOiB2ZWxvY2l0eSB8fCBERUZBVUxUX1ZPTFVNRSxcblx0XHRcdHRpbWU6IHRpbWUgfHwgMCxcblx0XHR9KSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0LyoqXG5cdCAqIEFkZCBhIG5vdGUtb2ZmIGV2ZW50IHRvIHRoZSB0cmFjay5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGNoYW5uZWwgLSBUaGUgY2hhbm5lbCB0byBhZGQgdGhlIGV2ZW50IHRvLlxuXHQgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IHBpdGNoIC0gVGhlIHBpdGNoIG9mIHRoZSBub3RlLCBlaXRoZXIgbnVtZXJpYyBvclxuXHQgKiBzeW1ib2xpYy5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lPTBdIC0gVGhlIG51bWJlciBvZiB0aWNrcyBzaW5jZSB0aGUgcHJldmlvdXMgZXZlbnQsXG5cdCAqIGRlZmF1bHRzIHRvIDAuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbdmVsb2NpdHk9OTBdIC0gVGhlIHZlbG9jaXR5IHRoZSBub3RlIHdhcyByZWxlYXNlZCxcblx0ICogZGVmYXVsdHMgdG8gREVGQVVMVF9WT0xVTUUuXG5cdCAqIEByZXR1cm5zIHtUcmFja30gVGhlIGN1cnJlbnQgdHJhY2suXG5cdCAqL1xuXHRUcmFjay5wcm90b3R5cGUuYWRkTm90ZU9mZiA9IFRyYWNrLnByb3RvdHlwZS5ub3RlT2ZmID0gZnVuY3Rpb24oY2hhbm5lbCwgcGl0Y2gsIHRpbWUsIHZlbG9jaXR5KSB7XG5cdFx0dGhpcy5ldmVudHMucHVzaChuZXcgTWlkaUV2ZW50KHtcblx0XHRcdHR5cGU6IE1pZGlFdmVudC5OT1RFX09GRixcblx0XHRcdGNoYW5uZWw6IGNoYW5uZWwsXG5cdFx0XHRwYXJhbTE6IFV0aWwuZW5zdXJlTWlkaVBpdGNoKHBpdGNoKSxcblx0XHRcdHBhcmFtMjogdmVsb2NpdHkgfHwgREVGQVVMVF9WT0xVTUUsXG5cdFx0XHR0aW1lOiB0aW1lIHx8IDAsXG5cdFx0fSkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBBZGQgYSBub3RlLW9uIGFuZCAtb2ZmIGV2ZW50IHRvIHRoZSB0cmFjay5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGNoYW5uZWwgLSBUaGUgY2hhbm5lbCB0byBhZGQgdGhlIGV2ZW50IHRvLlxuXHQgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IHBpdGNoIC0gVGhlIHBpdGNoIG9mIHRoZSBub3RlLCBlaXRoZXIgbnVtZXJpYyBvclxuXHQgKiBzeW1ib2xpYy5cblx0ICogQHBhcmFtIHtudW1iZXJ9IGR1ciAtIFRoZSBkdXJhdGlvbiBvZiB0aGUgbm90ZSwgaW4gdGlja3MuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbdGltZT0wXSAtIFRoZSBudW1iZXIgb2YgdGlja3Mgc2luY2UgdGhlIHByZXZpb3VzIGV2ZW50LFxuXHQgKiBkZWZhdWx0cyB0byAwLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gW3ZlbG9jaXR5PTkwXSAtIFRoZSB2ZWxvY2l0eSB0aGUgbm90ZSB3YXMgcmVsZWFzZWQsXG5cdCAqIGRlZmF1bHRzIHRvIERFRkFVTFRfVk9MVU1FLlxuXHQgKiBAcmV0dXJucyB7VHJhY2t9IFRoZSBjdXJyZW50IHRyYWNrLlxuXHQgKi9cblx0VHJhY2sucHJvdG90eXBlLmFkZE5vdGUgPSBUcmFjay5wcm90b3R5cGUubm90ZSA9IGZ1bmN0aW9uKGNoYW5uZWwsIHBpdGNoLCBkdXIsIHRpbWUsIHZlbG9jaXR5KSB7XG5cdFx0dGhpcy5ub3RlT24oY2hhbm5lbCwgcGl0Y2gsIHRpbWUsIHZlbG9jaXR5KTtcblx0XHRpZiAoZHVyKSB7XG5cdFx0XHR0aGlzLm5vdGVPZmYoY2hhbm5lbCwgcGl0Y2gsIGR1ciwgdmVsb2NpdHkpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHQvKipcblx0ICogQWRkIGEgbm90ZS1vbiBhbmQgLW9mZiBldmVudCB0byB0aGUgdHJhY2sgZm9yIGVhY2ggcGl0Y2ggaW4gYW4gYXJyYXkgb2YgcGl0Y2hlcy5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGNoYW5uZWwgLSBUaGUgY2hhbm5lbCB0byBhZGQgdGhlIGV2ZW50IHRvLlxuXHQgKiBAcGFyYW0ge2FycmF5fSBjaG9yZCAtIEFuIGFycmF5IG9mIHBpdGNoZXMsIGVpdGhlciBudW1lcmljIG9yXG5cdCAqIHN5bWJvbGljLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gZHVyIC0gVGhlIGR1cmF0aW9uIG9mIHRoZSBjaG9yZCwgaW4gdGlja3MuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbdmVsb2NpdHk9OTBdIC0gVGhlIHZlbG9jaXR5IG9mIHRoZSBjaG9yZCxcblx0ICogZGVmYXVsdHMgdG8gREVGQVVMVF9WT0xVTUUuXG5cdCAqIEByZXR1cm5zIHtUcmFja30gVGhlIGN1cnJlbnQgdHJhY2suXG5cdCAqL1xuXHRUcmFjay5wcm90b3R5cGUuYWRkQ2hvcmQgPSBUcmFjay5wcm90b3R5cGUuY2hvcmQgPSBmdW5jdGlvbihjaGFubmVsLCBjaG9yZCwgZHVyLCB2ZWxvY2l0eSkge1xuXHRcdGlmICghQXJyYXkuaXNBcnJheShjaG9yZCkgJiYgIWNob3JkLmxlbmd0aCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdDaG9yZCBtdXN0IGJlIGFuIGFycmF5IG9mIHBpdGNoZXMnKTtcblx0XHR9XG5cdFx0Y2hvcmQuZm9yRWFjaChmdW5jdGlvbihub3RlKSB7XG5cdFx0XHR0aGlzLm5vdGVPbihjaGFubmVsLCBub3RlLCAwLCB2ZWxvY2l0eSk7XG5cdFx0fSwgdGhpcyk7XG5cdFx0Y2hvcmQuZm9yRWFjaChmdW5jdGlvbihub3RlLCBpbmRleCkge1xuXHRcdFx0aWYgKGluZGV4ID09PSAwKSB7XG5cdFx0XHRcdHRoaXMubm90ZU9mZihjaGFubmVsLCBub3RlLCBkdXIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5ub3RlT2ZmKGNoYW5uZWwsIG5vdGUpO1xuXHRcdFx0fVxuXHRcdH0sIHRoaXMpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXQgaW5zdHJ1bWVudCBmb3IgdGhlIHRyYWNrLlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gY2hhbm5lbCAtIFRoZSBjaGFubmVsIHRvIHNldCB0aGUgaW5zdHJ1bWVudCBvbi5cblx0ICogQHBhcmFtIHtudW1iZXJ9IGluc3RydW1lbnQgLSBUaGUgaW5zdHJ1bWVudCB0byBzZXQgaXQgdG8uXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbdGltZT0wXSAtIFRoZSBudW1iZXIgb2YgdGlja3Mgc2luY2UgdGhlIHByZXZpb3VzIGV2ZW50LFxuXHQgKiBkZWZhdWx0cyB0byAwLlxuXHQgKiBAcmV0dXJucyB7VHJhY2t9IFRoZSBjdXJyZW50IHRyYWNrLlxuXHQgKi9cblx0VHJhY2sucHJvdG90eXBlLnNldEluc3RydW1lbnQgPSBUcmFjay5wcm90b3R5cGUuaW5zdHJ1bWVudCA9IGZ1bmN0aW9uKGNoYW5uZWwsIGluc3RydW1lbnQsIHRpbWUpIHtcblx0XHR0aGlzLmV2ZW50cy5wdXNoKG5ldyBNaWRpRXZlbnQoe1xuXHRcdFx0dHlwZTogTWlkaUV2ZW50LlBST0dSQU1fQ0hBTkdFLFxuXHRcdFx0Y2hhbm5lbDogY2hhbm5lbCxcblx0XHRcdHBhcmFtMTogaW5zdHJ1bWVudCxcblx0XHRcdHRpbWU6IHRpbWUgfHwgMCxcblx0XHR9KSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNldCB0aGUgdGVtcG8gZm9yIHRoZSB0cmFjay5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGJwbSAtIFRoZSBuZXcgbnVtYmVyIG9mIGJlYXRzIHBlciBtaW51dGUuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbdGltZT0wXSAtIFRoZSBudW1iZXIgb2YgdGlja3Mgc2luY2UgdGhlIHByZXZpb3VzIGV2ZW50LFxuXHQgKiBkZWZhdWx0cyB0byAwLlxuXHQgKiBAcmV0dXJucyB7VHJhY2t9IFRoZSBjdXJyZW50IHRyYWNrLlxuXHQgKi9cblx0VHJhY2sucHJvdG90eXBlLnNldFRlbXBvID0gVHJhY2sucHJvdG90eXBlLnRlbXBvID0gZnVuY3Rpb24oYnBtLCB0aW1lKSB7XG5cdFx0dGhpcy5ldmVudHMucHVzaChuZXcgTWV0YUV2ZW50KHtcblx0XHRcdHR5cGU6IE1ldGFFdmVudC5URU1QTyxcblx0XHRcdGRhdGE6IFV0aWwubXBxbkZyb21CcG0oYnBtKSxcblx0XHRcdHRpbWU6IHRpbWUgfHwgMCxcblx0XHR9KSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNlcmlhbGl6ZSB0aGUgdHJhY2sgdG8gYW4gYXJyYXkgb2YgYnl0ZXMuXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gVGhlIGFycmF5IG9mIHNlcmlhbGl6ZWQgYnl0ZXMuXG5cdCAqL1xuXHRUcmFjay5wcm90b3R5cGUudG9CeXRlcyA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciB0cmFja0xlbmd0aCA9IDA7XG5cdFx0dmFyIGV2ZW50Qnl0ZXMgPSBbXTtcblx0XHR2YXIgc3RhcnRCeXRlcyA9IFRyYWNrLlNUQVJUX0JZVEVTO1xuXHRcdHZhciBlbmRCeXRlcyAgID0gVHJhY2suRU5EX0JZVEVTO1xuXG5cdFx0dmFyIGFkZEV2ZW50Qnl0ZXMgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdFx0dmFyIGJ5dGVzID0gZXZlbnQudG9CeXRlcygpO1xuXHRcdFx0dHJhY2tMZW5ndGggKz0gYnl0ZXMubGVuZ3RoO1xuXHRcdFx0ZXZlbnRCeXRlcy5wdXNoLmFwcGx5KGV2ZW50Qnl0ZXMsIGJ5dGVzKTtcblx0XHR9O1xuXG5cdFx0dGhpcy5ldmVudHMuZm9yRWFjaChhZGRFdmVudEJ5dGVzKTtcblxuXHRcdC8vIEFkZCB0aGUgZW5kLW9mLXRyYWNrIGJ5dGVzIHRvIHRoZSBzdW0gb2YgYnl0ZXMgZm9yIHRoZSB0cmFjaywgc2luY2Vcblx0XHQvLyB0aGV5IGFyZSBjb3VudGVkICh1bmxpa2UgdGhlIHN0YXJ0LW9mLXRyYWNrIG9uZXMpLlxuXHRcdHRyYWNrTGVuZ3RoICs9IGVuZEJ5dGVzLmxlbmd0aDtcblxuXHRcdC8vIE1ha2VzIHN1cmUgdGhhdCB0cmFjayBsZW5ndGggd2lsbCBmaWxsIHVwIDQgYnl0ZXMgd2l0aCAwcyBpbiBjYXNlXG5cdFx0Ly8gdGhlIGxlbmd0aCBpcyBsZXNzIHRoYW4gdGhhdCAodGhlIHVzdWFsIGNhc2UpLlxuXHRcdHZhciBsZW5ndGhCeXRlcyA9IFV0aWwuc3RyMkJ5dGVzKHRyYWNrTGVuZ3RoLnRvU3RyaW5nKDE2KSwgNCk7XG5cblx0XHRyZXR1cm4gc3RhcnRCeXRlcy5jb25jYXQobGVuZ3RoQnl0ZXMsIGV2ZW50Qnl0ZXMsIGVuZEJ5dGVzKTtcblx0fTtcblxuXHQvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0ICogRmlsZSBjbGFzc1xuXHQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cblx0LyoqXG5cdCAqIENvbnN0cnVjdCBhIGZpbGUgb2JqZWN0LlxuXHQgKlxuXHQgKiBQYXJhbWV0ZXJzIGluY2x1ZGU6XG5cdCAqICAtIHRpY2tzIFtvcHRpb25hbCBudW1iZXJdIC0gTnVtYmVyIG9mIHRpY2tzIHBlciBiZWF0LCBkZWZhdWx0cyB0byAxMjguXG5cdCAqICAgIE11c3QgYmUgMS0zMjc2Ny5cblx0ICogIC0gdHJhY2tzIFtvcHRpb25hbCBhcnJheV0gLSBUcmFjayBkYXRhLlxuXHQgKi9cblx0dmFyIEZpbGUgPSBmdW5jdGlvbihjb25maWcpe1xuXHRcdGlmICghdGhpcykgcmV0dXJuIG5ldyBGaWxlKGNvbmZpZyk7XG5cblx0XHR2YXIgYyA9IGNvbmZpZyB8fCB7fTtcblx0XHRpZiAoYy50aWNrcykge1xuXHRcdFx0aWYgKHR5cGVvZiBjLnRpY2tzICE9PSAnbnVtYmVyJykge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RpY2tzIHBlciBiZWF0IG11c3QgYmUgYSBudW1iZXIhJyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmIChjLnRpY2tzIDw9IDAgfHwgYy50aWNrcyA+PSAoMSA8PCAxNSkgfHwgYy50aWNrcyAlIDEgIT09IDApIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdUaWNrcyBwZXIgYmVhdCBtdXN0IGJlIGFuIGludGVnZXIgYmV0d2VlbiAxIGFuZCAzMjc2NyEnKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMudGlja3MgPSBjLnRpY2tzIHx8IDEyODtcblx0XHR0aGlzLnRyYWNrcyA9IGMudHJhY2tzIHx8IFtdO1xuXHR9O1xuXG5cdEZpbGUuSERSX0NIVU5LSUQgICAgID0gXCJNVGhkXCI7ICAgICAgICAgICAgIC8vIEZpbGUgbWFnaWMgY29va2llXG5cdEZpbGUuSERSX0NIVU5LX1NJWkUgID0gXCJcXHgwMFxceDAwXFx4MDBcXHgwNlwiOyAvLyBIZWFkZXIgbGVuZ3RoIGZvciBTTUZcblx0RmlsZS5IRFJfVFlQRTAgICAgICAgPSBcIlxceDAwXFx4MDBcIjsgICAgICAgICAvLyBNaWRpIFR5cGUgMCBpZFxuXHRGaWxlLkhEUl9UWVBFMSAgICAgICA9IFwiXFx4MDBcXHgwMVwiOyAgICAgICAgIC8vIE1pZGkgVHlwZSAxIGlkXG5cblx0LyoqXG5cdCAqIEFkZCBhIHRyYWNrIHRvIHRoZSBmaWxlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge1RyYWNrfSB0cmFjayAtIFRoZSB0cmFjayB0byBhZGQuXG5cdCAqL1xuXHRGaWxlLnByb3RvdHlwZS5hZGRUcmFjayA9IGZ1bmN0aW9uKHRyYWNrKSB7XG5cdFx0aWYgKHRyYWNrKSB7XG5cdFx0XHR0aGlzLnRyYWNrcy5wdXNoKHRyYWNrKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0cmFjayA9IG5ldyBUcmFjaygpO1xuXHRcdFx0dGhpcy50cmFja3MucHVzaCh0cmFjayk7XG5cdFx0XHRyZXR1cm4gdHJhY2s7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXJpYWxpemUgdGhlIE1JREkgZmlsZSB0byBhbiBhcnJheSBvZiBieXRlcy5cblx0ICpcblx0ICogQHJldHVybnMge0FycmF5fSBUaGUgYXJyYXkgb2Ygc2VyaWFsaXplZCBieXRlcy5cblx0ICovXG5cdEZpbGUucHJvdG90eXBlLnRvQnl0ZXMgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgdHJhY2tDb3VudCA9IHRoaXMudHJhY2tzLmxlbmd0aC50b1N0cmluZygxNik7XG5cblx0XHQvLyBwcmVwYXJlIHRoZSBmaWxlIGhlYWRlclxuXHRcdHZhciBieXRlcyA9IEZpbGUuSERSX0NIVU5LSUQgKyBGaWxlLkhEUl9DSFVOS19TSVpFO1xuXG5cdFx0Ly8gc2V0IE1pZGkgdHlwZSBiYXNlZCBvbiBudW1iZXIgb2YgdHJhY2tzXG5cdFx0aWYgKHBhcnNlSW50KHRyYWNrQ291bnQsIDE2KSA+IDEpIHtcblx0XHRcdGJ5dGVzICs9IEZpbGUuSERSX1RZUEUxO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRieXRlcyArPSBGaWxlLkhEUl9UWVBFMDtcblx0XHR9XG5cblx0XHQvLyBhZGQgdGhlIG51bWJlciBvZiB0cmFja3MgKDIgYnl0ZXMpXG5cdFx0Ynl0ZXMgKz0gVXRpbC5jb2RlczJTdHIoVXRpbC5zdHIyQnl0ZXModHJhY2tDb3VudCwgMikpO1xuXHRcdC8vIGFkZCB0aGUgbnVtYmVyIG9mIHRpY2tzIHBlciBiZWF0IChjdXJyZW50bHkgaGFyZGNvZGVkKVxuXHRcdGJ5dGVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKHRoaXMudGlja3MvMjU2KSwgIHRoaXMudGlja3MlMjU2KTs7XG5cblx0XHQvLyBpdGVyYXRlIG92ZXIgdGhlIHRyYWNrcywgY29udmVydGluZyB0byBieXRlcyB0b29cblx0XHR0aGlzLnRyYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKHRyYWNrKSB7XG5cdFx0XHRieXRlcyArPSBVdGlsLmNvZGVzMlN0cih0cmFjay50b0J5dGVzKCkpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGJ5dGVzO1xuXHR9O1xuXG5cdC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXHQgKiBFeHBvcnRzXG5cdCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuXHRleHBvcnRlZC5VdGlsID0gVXRpbDtcblx0ZXhwb3J0ZWQuRmlsZSA9IEZpbGU7XG5cdGV4cG9ydGVkLlRyYWNrID0gVHJhY2s7XG5cdGV4cG9ydGVkLkV2ZW50ID0gTWlkaUV2ZW50O1xuXHRleHBvcnRlZC5NZXRhRXZlbnQgPSBNZXRhRXZlbnQ7XG5cbn0pKCBNaWRpICk7XG5cbmlmICh0eXBlb2YgbW9kdWxlICE9ICd1bmRlZmluZWQnICYmIG1vZHVsZSAhPT0gbnVsbCkge1xuXHRtb2R1bGUuZXhwb3J0cyA9IE1pZGk7XG59IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9ICd1bmRlZmluZWQnICYmIGV4cG9ydHMgIT09IG51bGwpIHtcblx0ZXhwb3J0cyA9IE1pZGk7XG59IGVsc2Uge1xuXHR0aGlzLk1pZGkgPSBNaWRpO1xufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5yZWR1Y2UoKHByZXYsIGN1cikgPT4gcHJldi5jb25jYXQoY3VyKSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwZWF0KHZhbHVlLCB0aW1lcykge1xuICBjb25zdCBvdXQgPSBbXTtcblxuICB3aGlsZSAodGltZXMpIHtcbiAgICBvdXQucHVzaCh2YWx1ZSk7XG4gICAgdGltZXMgLT0gMTtcbiAgfVxuXG4gIHJldHVybiBvdXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5nZShtaW4sIG1heCwgc3RlcCkge1xuICBjb25zdCBhY2MgPSBbXTtcblxuICBpZiAoIXN0ZXApIHtcbiAgICBmb3IgKGxldCBpID0gbWluOyBpIDw9IG1heDsgaSArPSAxKSB7XG4gICAgICBhY2MucHVzaChpKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZGlmZiA9IChtYXggLSBtaW4pIC8gc3RlcDtcblxuICAgIGZvciAobGV0IGkgPSBtaW47IGkgPD0gbWF4OyBpICs9IGRpZmYpIHtcbiAgICAgIGFjYy5wdXNoKGkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhY2M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZSh2YWx1ZSkge1xuICBpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHJldHVybiB2YWx1ZTtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSByZXR1cm4gdmFsdWUubWFwKGNsb25lKTtcblxuICBjb25zdCBjb3B5ID0ge307XG5cbiAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goa2V5ID0+IHtcbiAgICBjb3B5W2tleV0gPSBjbG9uZSh2YWx1ZVtrZXldKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvcHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB6aXAoYSwgYiwgY2IpIHtcbiAgY29uc3QgbWF4ID0gTWF0aC5tYXgoYS5sZW5ndGgsIGIubGVuZ3RoKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG1heDsgaSArPSAxKSB7XG4gICAgaWYgKHR5cGVvZiBhW2ldICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgYltpXSAhPT0gJ3VuZGVmaW5lZCcpIGNiKGFbaV0sIGJbaV0pO1xuICB9XG59XG4iLCAiKCgpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ezQxMzpuPT57bi5leHBvcnRzPUpTT04ucGFyc2UoJ3tcIjV0aFwiOlwiMTAwMDAwMDEwMDAwXCIsXCJNNyM1c3VzNFwiOlwiMTAwMDAxMDAxMDAxXCIsXCI3IzVzdXM0XCI6XCIxMDAwMDEwMDEwMTBcIixcInN1czRcIjpcIjEwMDAwMTAxMDAwMFwiLFwiTTdzdXM0XCI6XCIxMDAwMDEwMTAwMDFcIixcIjdzdXM0XCI6XCIxMDAwMDEwMTAwMTBcIixcIjdubzVcIjpcIjEwMDAxMDAwMDAxMFwiLFwiYXVnXCI6XCIxMDAwMTAwMDEwMDBcIixcIk03YjZcIjpcIjEwMDAxMDAwMTAwMVwiLFwibWFqNyM1XCI6XCIxMDAwMTAwMDEwMDFcIixcIjcjNVwiOlwiMTAwMDEwMDAxMDEwXCIsXCI3YjEzXCI6XCIxMDAwMTAwMDEwMTBcIixcIk1cIjpcIjEwMDAxMDAxMDAwMFwiLFwibWFqN1wiOlwiMTAwMDEwMDEwMDAxXCIsXCI3dGhcIjpcIjEwMDAxMDAxMDAxMFwiLFwiNnRoXCI6XCIxMDAwMTAwMTAxMDBcIixcIjdhZGQ2XCI6XCIxMDAwMTAwMTAxMTBcIixcIjdiNlwiOlwiMTAwMDEwMDExMDEwXCIsXCJNYjVcIjpcIjEwMDAxMDEwMDAwMFwiLFwiTTdiNVwiOlwiMTAwMDEwMTAwMDAxXCIsXCI3YjVcIjpcIjEwMDAxMDEwMDAxMFwiLFwibWFqIzRcIjpcIjEwMDAxMDExMDAwMVwiLFwiNyMxMVwiOlwiMTAwMDEwMTEwMDEwXCIsXCJNNiMxMVwiOlwiMTAwMDEwMTEwMTAwXCIsXCI3IzExYjEzXCI6XCIxMDAwMTAxMTEwMTBcIixcIm0jNVwiOlwiMTAwMTAwMDAxMDAwXCIsXCJtYjZNN1wiOlwiMTAwMTAwMDAxMDAxXCIsXCJtNyM1XCI6XCIxMDAxMDAwMDEwMTBcIixcIm1cIjpcIjEwMDEwMDAxMDAwMFwiLFwibS9tYTdcIjpcIjEwMDEwMDAxMDAwMVwiLFwibTdcIjpcIjEwMDEwMDAxMDAxMFwiLFwibTZcIjpcIjEwMDEwMDAxMDEwMFwiLFwibU1hajdiNlwiOlwiMTAwMTAwMDExMDAxXCIsXCJkaW1cIjpcIjEwMDEwMDEwMDAwMFwiLFwib003XCI6XCIxMDAxMDAxMDAwMDFcIixcIm03YjVcIjpcIjEwMDEwMDEwMDAxMFwiLFwiZGltN1wiOlwiMTAwMTAwMTAwMTAwXCIsXCJvN003XCI6XCIxMDAxMDAxMDAxMDFcIixcIjR0aFwiOlwiMTAwMTAxMDAwMDEwXCIsXCJtYWRkNFwiOlwiMTAwMTAxMDEwMDAwXCIsXCJtN2FkZDExXCI6XCIxMDAxMDEwMTAwMTBcIixcIithZGQjOVwiOlwiMTAwMTEwMDAxMDAwXCIsXCI3IzUjOVwiOlwiMTAwMTEwMDAxMDEwXCIsXCI3IzlcIjpcIjEwMDExMDAxMDAxMFwiLFwiMTMjOVwiOlwiMTAwMTEwMDEwMTEwXCIsXCI3IzliMTNcIjpcIjEwMDExMDAxMTAxMFwiLFwibWFqNyM5IzExXCI6XCIxMDAxMTAxMTAwMDFcIixcIjcjOSMxMVwiOlwiMTAwMTEwMTEwMDEwXCIsXCIxMyM5IzExXCI6XCIxMDAxMTAxMTAxMTBcIixcIjcjOSMxMWIxM1wiOlwiMTAwMTEwMTExMDEwXCIsXCJzdXMyXCI6XCIxMDEwMDAwMTAwMDBcIixcIk05IzVzdXM0XCI6XCIxMDEwMDEwMDEwMDFcIixcInN1czI0XCI6XCIxMDEwMDEwMTAwMDBcIixcIk05c3VzNFwiOlwiMTAxMDAxMDEwMDAxXCIsXCIxMXRoXCI6XCIxMDEwMDEwMTAwMTBcIixcIjlzdXM0XCI6XCIxMDEwMDEwMTAwMTBcIixcIjEzc3VzNFwiOlwiMTAxMDAxMDEwMTEwXCIsXCI5bm81XCI6XCIxMDEwMTAwMDAwMTBcIixcIjEzbm81XCI6XCIxMDEwMTAwMDAxMTBcIixcIk0jNWFkZDlcIjpcIjEwMTAxMDAwMTAwMFwiLFwibWFqOSM1XCI6XCIxMDEwMTAwMDEwMDFcIixcIjkjNVwiOlwiMTAxMDEwMDAxMDEwXCIsXCI5YjEzXCI6XCIxMDEwMTAwMDEwMTBcIixcIk1hZGQ5XCI6XCIxMDEwMTAwMTAwMDBcIixcIm1hajlcIjpcIjEwMTAxMDAxMDAwMVwiLFwiOXRoXCI6XCIxMDEwMTAwMTAwMTBcIixcIjYvOVwiOlwiMTAxMDEwMDEwMTAwXCIsXCJtYWoxM1wiOlwiMTAxMDEwMDEwMTAxXCIsXCJNN2FkZDEzXCI6XCIxMDEwMTAwMTAxMDFcIixcIjEzdGhcIjpcIjEwMTAxMDAxMDExMFwiLFwiTTliNVwiOlwiMTAxMDEwMTAwMDAxXCIsXCI5YjVcIjpcIjEwMTAxMDEwMDAxMFwiLFwiMTNiNVwiOlwiMTAxMDEwMTAwMTEwXCIsXCI5IzUjMTFcIjpcIjEwMTAxMDEwMTAxMFwiLFwibWFqOSMxMVwiOlwiMTAxMDEwMTEwMDAxXCIsXCI5IzExXCI6XCIxMDEwMTAxMTAwMTBcIixcIjY5IzExXCI6XCIxMDEwMTAxMTAxMDBcIixcIk0xMyMxMVwiOlwiMTAxMDEwMTEwMTAxXCIsXCIxMyMxMVwiOlwiMTAxMDEwMTEwMTEwXCIsXCI5IzExYjEzXCI6XCIxMDEwMTAxMTEwMTBcIixcIm05IzVcIjpcIjEwMTEwMDAwMTAxMFwiLFwibWFkZDlcIjpcIjEwMTEwMDAxMDAwMFwiLFwibU05XCI6XCIxMDExMDAwMTAwMDFcIixcIm05XCI6XCIxMDExMDAwMTAwMTBcIixcIm02OVwiOlwiMTAxMTAwMDEwMTAwXCIsXCJtMTNcIjpcIjEwMTEwMDAxMDExMFwiLFwibU1hajliNlwiOlwiMTAxMTAwMDExMDAxXCIsXCJtOWI1XCI6XCIxMDExMDAxMDAwMTBcIixcIm0xMUFcIjpcIjEwMTEwMTAwMTAxMFwiLFwibTExXCI6XCIxMDExMDEwMTAwMTBcIixcImI5c3VzXCI6XCIxMTAwMDEwMTAwMTBcIixcIjExYjlcIjpcIjExMDAwMTAxMDAxMFwiLFwiN3N1czRiOWIxM1wiOlwiMTEwMDAxMDExMDEwXCIsXCJhbHQ3XCI6XCIxMTAwMTAwMDAwMTBcIixcIjcjNWI5XCI6XCIxMTAwMTAwMDEwMTBcIixcIk1hZGRiOVwiOlwiMTEwMDEwMDEwMDAwXCIsXCJNN2I5XCI6XCIxMTAwMTAwMTAwMDFcIixcIjdiOVwiOlwiMTEwMDEwMDEwMDEwXCIsXCIxM2I5XCI6XCIxMTAwMTAwMTAxMTBcIixcIjdiOWIxM1wiOlwiMTEwMDEwMDExMDEwXCIsXCI3IzViOSMxMVwiOlwiMTEwMDEwMTAxMDEwXCIsXCI3YjkjMTFcIjpcIjExMDAxMDExMDAxMFwiLFwiMTNiOSMxMVwiOlwiMTEwMDEwMTEwMTEwXCIsXCI3YjliMTMjMTFcIjpcIjExMDAxMDExMTAxMFwiLFwibWI2YjlcIjpcIjExMDEwMDAwMTAwMFwiLFwiN2I5IzlcIjpcIjExMDExMDAxMDAxMFwifScpfSw3MjI6bj0+e24uZXhwb3J0cz1KU09OLnBhcnNlKCd7XCJtYWpvciBwZW50YXRvbmljXCI6XCIxMDEwMTAwMTAxMDBcIixcImlvbmlhbiBwZW50YXRvbmljXCI6XCIxMDAwMTEwMTAwMDFcIixcIm1peG9seWRpYW4gcGVudGF0b25pY1wiOlwiMTAwMDExMDEwMDEwXCIsXCJyaXR1c2VuXCI6XCIxMDEwMDEwMTAxMDBcIixcImVneXB0aWFuXCI6XCIxMDEwMDEwMTAwMTBcIixcIm5lb3BvbGl0YW4gbWFqb3IgcGVudGF0b25pY1wiOlwiMTAwMDExMTAwMDEwXCIsXCJ2aWV0bmFtZXNlIDFcIjpcIjEwMDEwMTAxMTAwMFwiLFwicGVsb2dcIjpcIjExMDEwMDAxMTAwMFwiLFwia3Vtb2lqb3NoaVwiOlwiMTEwMDAxMDExMDAwXCIsXCJoaXJham9zaGlcIjpcIjEwMTEwMDAxMTAwMFwiLFwiaXdhdG9cIjpcIjExMDAwMTEwMDAxMFwiLFwiaW4tc2VuXCI6XCIxMTAwMDEwMTAwMTBcIixcImx5ZGlhbiBwZW50YXRvbmljXCI6XCIxMDAwMTAxMTAwMDFcIixcIm1hbGtvcyByYWdhXCI6XCIxMDAxMDEwMDEwMTBcIixcImxvY3JpYW4gcGVudGF0b25pY1wiOlwiMTAwMTAxMTAwMDEwXCIsXCJtaW5vciBwZW50YXRvbmljXCI6XCIxMDAxMDEwMTAwMTBcIixcIm1pbm9yIHNpeCBwZW50YXRvbmljXCI6XCIxMDAxMDEwMTAxMDBcIixcImZsYXQgdGhyZWUgcGVudGF0b25pY1wiOlwiMTAxMTAwMDEwMTAwXCIsXCJmbGF0IHNpeCBwZW50YXRvbmljXCI6XCIxMDEwMTAwMTEwMDBcIixcInNjcmlhYmluXCI6XCIxMTAwMTAwMTAxMDBcIixcIndob2xlIHRvbmUgcGVudGF0b25pY1wiOlwiMTAwMDEwMTAxMDEwXCIsXCJseWRpYW4gIzVQIHBlbnRhdG9uaWNcIjpcIjEwMDAxMDEwMTAwMVwiLFwibHlkaWFuIGRvbWluYW50IHBlbnRhdG9uaWNcIjpcIjEwMDAxMDExMDAxMFwiLFwibWlub3IgIzdNIHBlbnRhdG9uaWNcIjpcIjEwMDEwMTAxMDAwMVwiLFwic3VwZXIgbG9jcmlhbiBwZW50YXRvbmljXCI6XCIxMDAxMTAxMDAwMTBcIixcIm1pbm9yIGhleGF0b25pY1wiOlwiMTAxMTAxMDEwMDAxXCIsXCJhdWdtZW50ZWRcIjpcIjEwMDExMDAxMTAwMVwiLFwibWFqb3IgYmx1ZXNcIjpcIjEwMTExMDAxMDEwMFwiLFwicGlvbmdpb1wiOlwiMTAxMDAxMDEwMTEwXCIsXCJwcm9tZXRoZXVzIG5lb3BvbGl0YW5cIjpcIjExMDAxMDEwMDExMFwiLFwicHJvbWV0aGV1c1wiOlwiMTAxMDEwMTAwMTEwXCIsXCJteXN0ZXJ5ICMxXCI6XCIxMTAwMTAxMDEwMTBcIixcInNpeCB0b25lIHN5bW1ldHJpY1wiOlwiMTEwMDExMDAxMTAwXCIsXCJ3aG9sZSB0b25lXCI6XCIxMDEwMTAxMDEwMTBcIixcIm1lc3NpYWVuXFwncyBtb2RlICM1XCI6XCIxMTAwMDExMTAwMDFcIixcIm1pbm9yIGJsdWVzXCI6XCIxMDAxMDExMTAwMTBcIixcImxvY3JpYW4gbWFqb3JcIjpcIjEwMTAxMTEwMTAxMFwiLFwiZG91YmxlIGhhcm1vbmljIGx5ZGlhblwiOlwiMTEwMDEwMTExMDAxXCIsXCJoYXJtb25pYyBtaW5vclwiOlwiMTAxMTAxMDExMDAxXCIsXCJhbHRlcmVkXCI6XCIxMTAxMTAxMDEwMTBcIixcImxvY3JpYW4gIzJcIjpcIjEwMTEwMTEwMTAxMFwiLFwibWl4b2x5ZGlhbiBiNlwiOlwiMTAxMDExMDExMDEwXCIsXCJseWRpYW4gZG9taW5hbnRcIjpcIjEwMTAxMDExMDExMFwiLFwibHlkaWFuXCI6XCIxMDEwMTAxMTAxMDFcIixcImx5ZGlhbiBhdWdtZW50ZWRcIjpcIjEwMTAxMDEwMTEwMVwiLFwiZG9yaWFuIGIyXCI6XCIxMTAxMDEwMTAxMTBcIixcIm1lbG9kaWMgbWlub3JcIjpcIjEwMTEwMTAxMDEwMVwiLFwibG9jcmlhblwiOlwiMTEwMTAxMTAxMDEwXCIsXCJ1bHRyYWxvY3JpYW5cIjpcIjExMDExMDEwMTEwMFwiLFwibG9jcmlhbiA2XCI6XCIxMTAxMDExMDAxMTBcIixcImF1Z21lbnRlZCBoZXB0YXRvbmljXCI6XCIxMDAxMTEwMTEwMDFcIixcInJvbWFuaWFuIG1pbm9yXCI6XCIxMDExMDAxMTAxMTBcIixcImRvcmlhbiAjNFwiOlwiMTAxMTAwMTEwMTEwXCIsXCJseWRpYW4gZGltaW5pc2hlZFwiOlwiMTAxMTAwMTEwMTAxXCIsXCJwaHJ5Z2lhblwiOlwiMTEwMTAxMDExMDEwXCIsXCJsZWFkaW5nIHdob2xlIHRvbmVcIjpcIjEwMTAxMDEwMTAxMVwiLFwibHlkaWFuIG1pbm9yXCI6XCIxMDEwMTAxMTEwMTBcIixcInBocnlnaWFuIGRvbWluYW50XCI6XCIxMTAwMTEwMTEwMTBcIixcImJhbGluZXNlXCI6XCIxMTAxMDEwMTEwMDFcIixcIm5lb3BvbGl0YW4gbWFqb3JcIjpcIjExMDEwMTAxMDEwMVwiLFwiYWVvbGlhblwiOlwiMTAxMTAxMDExMDEwXCIsXCJoYXJtb25pYyBtYWpvclwiOlwiMTAxMDExMDExMDAxXCIsXCJkb3VibGUgaGFybW9uaWMgbWFqb3JcIjpcIjExMDAxMTAxMTAwMVwiLFwiZG9yaWFuXCI6XCIxMDExMDEwMTAxMTBcIixcImh1bmdhcmlhbiBtaW5vclwiOlwiMTAxMTAwMTExMDAxXCIsXCJodW5nYXJpYW4gbWFqb3JcIjpcIjEwMDExMDExMDExMFwiLFwib3JpZW50YWxcIjpcIjExMDAxMTEwMDExMFwiLFwiZmxhbWVuY29cIjpcIjExMDExMDExMDAxMFwiLFwidG9kaSByYWdhXCI6XCIxMTAxMDAxMTEwMDFcIixcIm1peG9seWRpYW5cIjpcIjEwMTAxMTAxMDExMFwiLFwicGVyc2lhblwiOlwiMTEwMDExMTAxMDAxXCIsXCJtYWpvclwiOlwiMTAxMDExMDEwMTAxXCIsXCJlbmlnbWF0aWNcIjpcIjExMDAxMDEwMTAxMVwiLFwibWFqb3IgYXVnbWVudGVkXCI6XCIxMDEwMTEwMDExMDFcIixcImx5ZGlhbiAjOVwiOlwiMTAwMTEwMTEwMTAxXCIsXCJtZXNzaWFlblxcJ3MgbW9kZSAjNFwiOlwiMTExMDAxMTExMDAxXCIsXCJwdXJ2aSByYWdhXCI6XCIxMTAwMTExMTEwMDFcIixcInNwYW5pc2ggaGVwdGF0b25pY1wiOlwiMTEwMTExMDExMDEwXCIsXCJiZWJvcFwiOlwiMTAxMDExMDEwMTExXCIsXCJiZWJvcCBtaW5vclwiOlwiMTAxMTExMDEwMTEwXCIsXCJiZWJvcCBtYWpvclwiOlwiMTAxMDExMDExMTAxXCIsXCJiZWJvcCBsb2NyaWFuXCI6XCIxMTAxMDExMTEwMTBcIixcIm1pbm9yIGJlYm9wXCI6XCIxMDExMDEwMTEwMTFcIixcImRpbWluaXNoZWRcIjpcIjEwMTEwMTEwMTEwMVwiLFwiaWNoaWtvc3VjaG9cIjpcIjEwMTAxMTExMDEwMVwiLFwibWlub3Igc2l4IGRpbWluaXNoZWRcIjpcIjEwMTEwMTAxMTEwMVwiLFwiaGFsZi13aG9sZSBkaW1pbmlzaGVkXCI6XCIxMTAxMTAxMTAxMTBcIixcImthZmkgcmFnYVwiOlwiMTAwMTExMDEwMTExXCIsXCJtZXNzaWFlblxcJ3MgbW9kZSAjNlwiOlwiMTAxMDExMTAxMDExXCIsXCJjb21wb3NpdGUgYmx1ZXNcIjpcIjEwMTExMTExMDExMFwiLFwibWVzc2lhZW5cXCdzIG1vZGUgIzNcIjpcIjEwMTExMDExMTAxMVwiLFwibWVzc2lhZW5cXCdzIG1vZGUgIzdcIjpcIjExMTEwMTExMTEwMVwiLFwiY2hyb21hdGljXCI6XCIxMTExMTExMTExMTFcIixcImlvbmlhblwiOlwiMTAxMDExMDEwMTAxXCIsXCJtaW5vclwiOlwiMTAxMTAxMDExMDEwXCJ9Jyl9fSxlPXt9O2Z1bmN0aW9uIG8oYSl7dmFyIGk9ZVthXTtpZih2b2lkIDAhPT1pKXJldHVybiBpLmV4cG9ydHM7dmFyIHI9ZVthXT17ZXhwb3J0czp7fX07cmV0dXJuIG5bYV0ocixyLmV4cG9ydHMsbyksci5leHBvcnRzfW8uZD0obixlKT0+e2Zvcih2YXIgYSBpbiBlKW8ubyhlLGEpJiYhby5vKG4sYSkmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLGEse2VudW1lcmFibGU6ITAsZ2V0OmVbYV19KX0sby5vPShuLGUpPT5PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixlKSxvLnI9bj0+e1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9O3ZhciBhPXt9OygoKT0+e28ucihhKSxvLmQoYSx7Y2hvcmQ6KCk9Pm0sY2hvcmRzOigpPT50LGlubGluZUNob3JkOigpPT5yLHNjYWxlOigpPT5jLHNjYWxlczooKT0+c30pO3ZhciBuPW8oNzIyKSxlPW8oNDEzKSxpPWZ1bmN0aW9uKG8pe3ZhciBhPW8uc2NhbGUsaT1vLmNob3JkLHI9YXx8aSx0PWE/XCJzY2FsZVwiOlwiY2hvcmRcIjtpZihcInN0cmluZ1wiIT10eXBlb2Ygcil0aHJvdyBuZXcgRXJyb3IoXCJcIi5jb25jYXQocixcIiBpcyBub3QgYSB2YWxpZCBpbnB1dCBmb3IgXCIpLmNvbmNhdCh0KSk7dmFyIHMsbSxjPXIuaW5kZXhPZihcIiBcIik7LTE9PT1jPyhzPXIuc2xpY2UoMSksbT1yWzBdLFwiYlwiIT09clsxXSYmXCIjXCIhPT1yWzFdfHwocz1yLnNsaWNlKDIpLG0rPXJbMV0pKToocz1yLnNsaWNlKC0xPT09Yz8xOmMrMSksbT1yLnNsaWNlKDAsYykpO3ZhciBkPWZ1bmN0aW9uKG4pe3JldHVybntcIkMjXCI6XCJEYlwiLFwiRCNcIjpcIkViXCIsXCJGI1wiOlwiR2JcIixcIkcjXCI6XCJBYlwiLFwiQSNcIjpcIkJiXCJ9W24udG9VcHBlckNhc2UoKV18fG4uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrbi5zbGljZSgxKX0obS5yZXBsYWNlKC9cXGQvZyxcIlwiKSksbD1cIlwiIT09bS5yZXBsYWNlKC9cXEQvZyxcIlwiKT8rbS5yZXBsYWNlKC9cXEQvZyxcIlwiKTo0O2lmKGlzTmFOKGwpKXRocm93IG5ldyBFcnJvcihcIlwiLmNvbmNhdChtWzBdLFwiIGRvZXMgbm90IGhhdmUgYSB2YWxpZCBvY3RhdmVcIikpO2lmKCFuW3NdJiYhZVtzXSl0aHJvdyBuZXcgRXJyb3IoXCJcIi5jb25jYXQocixcIiBpcyBub3QgYSB2YWxpZCBcIikuY29uY2F0KHQpKTtmb3IodmFyIGI9ZnVuY3Rpb24obixlKXt2YXIgbz1bXCJDXCIsXCJEYlwiLFwiRFwiLFwiRWJcIixcIkVcIixcIkZcIixcIkdiXCIsXCJHXCIsXCJBYlwiLFwiQVwiLFwiQmJcIixcIkJcIl0sYT1vLm1hcCgoZnVuY3Rpb24obil7cmV0dXJuIG4rZX0pKSxpPW8ubWFwKChmdW5jdGlvbihuKXtyZXR1cm4gbisoZSsxKX0pKSxyPWEuY29uY2F0KGkpO3JldHVybiByLnNsaWNlKHIuaW5kZXhPZihuK2UpKX0oZCxsKSx1PVtdLHA9MCxoPTAsZj1hP246ZTtwPGZbc10ubGVuZ3RoOylcIjFcIj09PWZbc11bcF0mJnUucHVzaChiW2hdKSxwKyssaCsrO3JldHVybiB1fSxyPWZ1bmN0aW9uKG4pe3ZhciBlLG8sYT1cImI5c3VzXCIscj00O3JldHVybiBuLmluY2x1ZGVzKGEpPyhvPWEsZT1uLnNsaWNlKDAsbi5pbmRleE9mKGEpKSk6KGU9blswXSxvPW4uc2xpY2UoMSksXCJiXCIhPT1uWzFdJiZcIiNcIiE9PW5bMV18fChlKz1uWzFdLG89bi5zbGljZSgyKSkpLG4uaW5jbHVkZXMoXCJfXCIpJiYocj0rbi5zcGxpdChcIl9cIilbMV0sbz1vLnNsaWNlKDAsby5pbmRleE9mKFwiX1wiKSkpLGkoe2Nob3JkOmUrcitcIiBcIitvfSl9LHQ9ZnVuY3Rpb24oKXtyZXR1cm4gT2JqZWN0LmtleXMoZSl9LHM9ZnVuY3Rpb24oKXtyZXR1cm4gT2JqZWN0LmtleXMobil9LG09ZnVuY3Rpb24obil7cmV0dXJuIGkoe2Nob3JkOm59KX0sYz1mdW5jdGlvbihuKXtyZXR1cm4gaSh7c2NhbGU6bn0pfX0pKCk7dmFyIGk9ZXhwb3J0cztmb3IodmFyIHIgaW4gYSlpW3JdPWFbcl07YS5fX2VzTW9kdWxlJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoaSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0pKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYWluLmpzLm1hcCIsICJpbXBvcnQgeyBpbmxpbmVDaG9yZCB9IGZyb20gJ2hhcm1vbmljcyc7XG5cbmV4cG9ydCBjb25zdCBSRV9TRVBBUkFUT1IgPSAvXFx8LztcbmV4cG9ydCBjb25zdCBSRV9QQVRURVJOID0gL14oPzpbeF8tXXxcXFsuKz9cXF0pKyQvO1xuZXhwb3J0IGNvbnN0IFJFX05VTUJFUiA9IC9eKD86XFwuP1xcZCt8XFxkKyg/OlxcLlxcZCspPykkLztcbmV4cG9ydCBjb25zdCBSRV9DSE9SRCA9IC9eW2EtZ0EtR11bXiNcXHNdKlxcZCsoPzpcXC5cXC4pPyQvO1xuZXhwb3J0IGNvbnN0IFJFX05PVEUgPSAvXlthLWdBLUddWyNiXT9cXGQrJC87XG5leHBvcnQgY29uc3QgUkVfTU9ERSA9IC9eKD8hW2l2SVZdezEsM30pW2Etel17Mix9LztcbmV4cG9ydCBjb25zdCBSRV9QUk9HID0gL15baXZJVl17MSwzfVx1MDBCMD8kLztcbmV4cG9ydCBjb25zdCBSRV9UUklNID0gL1xcLiskLztcblxuY29uc3QgQ0FDSEUgPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0KHZhbHVlKSB7XG4gIGxldCBkYXRhID0gW107XG4gIHRyeSB7XG4gICAgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlLnNwbGl0KC8oPz1bXFxkW1xcXXhfLV0pLykpO1xuICAgIGRhdGEgPSBkYXRhLnJlcGxhY2UoLyxcIlxcW1wiLC9nLCAnLCBbJyk7XG4gICAgZGF0YSA9IGRhdGEucmVwbGFjZSgvXCJcXFtcIiwvZywgJ1snKTtcbiAgICBkYXRhID0gZGF0YS5yZXBsYWNlKC8sXCJcXF1cIi9nLCAnXScpO1xuICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gaWdub3JlXG4gIH1cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZXZlbCh2YWx1ZSkge1xuICBpZiAoIUNBQ0hFW3ZhbHVlXSkge1xuICAgIGlmICh2YWx1ZS5pbmNsdWRlcygnJScpKSB7XG4gICAgICBDQUNIRVt2YWx1ZV0gPSAxMjcgKiBwYXJzZUZsb2F0KGAuJHt2YWx1ZX1gKTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlLmluY2x1ZGVzKCcvJykpIHtcbiAgICAgIGNvbnN0IFthLCBiXSA9IHZhbHVlLnNwbGl0KCcvJyk7XG5cbiAgICAgIENBQ0hFW3ZhbHVlXSA9IGEgLyBiO1xuICAgIH0gZWxzZSBpZiAodmFsdWUuaW5jbHVkZXMoJyonKSkge1xuICAgICAgY29uc3QgW2EsIGJdID0gdmFsdWUuc3BsaXQoJyonKTtcblxuICAgICAgQ0FDSEVbdmFsdWVdID0gYSAqIGI7XG4gICAgfSBlbHNlIHtcbiAgICAgIENBQ0hFW3ZhbHVlXSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gQ0FDSEVbdmFsdWVdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGUocmUsIHZhbHVlKSB7XG4gIGlmICghQ0FDSEVbcmUuc291cmNlICsgdmFsdWVdKSB7XG4gICAgQ0FDSEVbcmUuc291cmNlICsgdmFsdWVdID0gcmUudGVzdCh2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIENBQ0hFW3JlLnNvdXJjZSArIHZhbHVlXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvZ3Jlc3Npb24odmFsdWUpIHtcbiAgcmV0dXJuIHZhbGlkYXRlKFJFX1BST0csIHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGF0dGVybih2YWx1ZSkge1xuICByZXR1cm4gdmFsaWRhdGUoUkVfUEFUVEVSTiwgdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgcmV0dXJuIHZhbGlkYXRlKFJFX05VTUJFUiwgdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDaG9yZCh2YWx1ZSkge1xuICByZXR1cm4gdmFsaWRhdGUoUkVfQ0hPUkQsIHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTm90ZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsaWRhdGUoUkVfTk9URSwgdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNNb2RlKHZhbHVlKSB7XG4gIHJldHVybiB2YWxpZGF0ZShSRV9NT0RFLCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUeXBlKHZhbHVlKSB7XG4gIGNvbnN0IGtleSA9IGBUJHt2YWx1ZX1gO1xuICBpZiAoIUNBQ0hFW2tleV0pIHtcbiAgICBpZiAoaXNOb3RlKHZhbHVlKSkgQ0FDSEVba2V5XSA9ICdub3RlJztcbiAgICBlbHNlIGlmIChpc0Nob3JkKHZhbHVlKSkgQ0FDSEVba2V5XSA9ICdjaG9yZCc7XG4gICAgZWxzZSBpZiAoaXNQYXR0ZXJuKHZhbHVlKSkgQ0FDSEVba2V5XSA9ICdwYXR0ZXJuJztcbiAgICBlbHNlIGlmIChpc01vZGUodmFsdWUpKSBDQUNIRVtrZXldID0gJ21vZGUnO1xuICAgIGVsc2UgaWYgKGlzTnVtYmVyKHZhbHVlKSkgQ0FDSEVba2V5XSA9ICdudW1iZXInO1xuICAgIGVsc2UgQ0FDSEVba2V5XSA9ICd2YWx1ZSc7XG4gIH1cbiAgcmV0dXJuIENBQ0hFW2tleV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm0oZXhwcmVzc2lvbikge1xuICBpZiAoIWV4cHJlc3Npb24gfHwgdHlwZW9mIGV4cHJlc3Npb24gIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RpbmcgYSB2YWxpZCBzdHJpbmcsIGdpdmVuICcke2V4cHJlc3Npb259J2ApO1xuICB9XG5cbiAgaWYgKENBQ0hFW2AkJHtleHByZXNzaW9ufWBdKSByZXR1cm4gQ0FDSEVbYCQke2V4cHJlc3Npb259YF07XG5cbiAgY29uc3QgdG9rZW5zID0gZXhwcmVzc2lvbi5zcGxpdCgvXFxzKy8pO1xuXG4gIGlmICghdG9rZW5zLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0aW5nIGEgdmFsaWQgZXhwcmVzc2lvbiwgZ2l2ZW4gJyR7ZXhwcmVzc2lvbn0nYCk7XG4gIH1cblxuICBjb25zdCBhc3QgPSBbXTtcbiAgY29uc3QgY2FycnkgPSBbXTtcblxuICBmdW5jdGlvbiBhZGQodHlwZSwgdmFsdWUpIHtcbiAgICBjb25zdCBpdGVtID0geyB0eXBlLCB2YWx1ZSB9O1xuXG4gICAgaWYgKHR5cGUgPT09ICdudW1iZXInICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGl0ZW0udmFsdWUgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gbGV2ZWwodmFsdWUpIDogdmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09ICdjaG9yZCcgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgaXRlbS52YWx1ZSA9IGlubGluZUNob3JkKHZhbHVlLnJlcGxhY2UoUkVfVFJJTSwgJycpKTtcblxuICAgICAgaWYgKHZhbHVlLmluY2x1ZGVzKCcuLicpKSB7XG4gICAgICAgIGl0ZW0udW5mb2xkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gJ3ZhbHVlJyAmJiB2YWx1ZS5pbmRleE9mKCd4JykgPiAtMSkge1xuICAgICAgY29uc3QgeCA9IHZhbHVlLnNwbGl0KCd4Jyk7XG5cbiAgICAgIGlmICghKGlzTnVtYmVyKHhbMF0pICYmIGlzTnVtYmVyKHhbMV0pKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGluZyB2YWxpZCBudW1iZXJzIGZvciAke3R5cGV9LCBnaXZlbiAnJHt2YWx1ZX0nYCk7XG4gICAgICB9XG5cbiAgICAgIGl0ZW0udmFsdWUgPSBwYXJzZUludCh4WzBdLCAxMCk7XG4gICAgICBpdGVtLnJlcGVhdCA9IHBhcnNlSW50KHhbMV0sIDEwKTtcbiAgICAgIGl0ZW0udHlwZSA9ICdudW1iZXInO1xuICAgIH1cblxuICAgIGFzdC5wdXNoKGl0ZW0pO1xuICB9XG5cbiAgdG9rZW5zLnJlZHVjZSgocHJldiwgY3VyLCBpKSA9PiB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBjb25zdCBuZXh0ID0gdG9rZW5zW2kgKyAxXTtcbiAgICBjb25zdCBsYXN0ID0gYXN0W2FzdC5sZW5ndGggLSAxXSB8fCB7fTtcblxuICAgIGlmIChSRV9TRVBBUkFUT1IudGVzdChjdXIpKSB7XG4gICAgICBhZGQoJ2Nob3JkJywgY3VyLnNwbGl0KFJFX1NFUEFSQVRPUikpO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjdXIgPT09ICdzdHJpbmcnICYmIChcbiAgICAgIChjdXIuaW5jbHVkZXMoJy8nKSAmJiBjdXIuaW5kZXhPZignLycpID4gMClcbiAgICAgIHx8IChjdXIuaW5jbHVkZXMoJyonKSAmJiBjdXIuaW5kZXhPZignKicpID4gMClcbiAgICAgIHx8IChjdXIuaW5jbHVkZXMoJyUnKSAmJiBjdXIuaW5kZXhPZignJScpID4gMClcbiAgICApKSB7XG4gICAgICBhZGQoJ251bWJlcicsIGxldmVsKGN1cikpO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKGN1ci5pbmRleE9mKCclJykgPiAtMSkge1xuICAgICAgaWYgKGN1ciA9PT0gJyUnKSB7XG4gICAgICAgIGlmICghbGFzdC50eXBlKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIGV4cHJlc3Npb24gdG8gcmVwZWF0LCBnaXZlbiAnJHt0b2tlbnMuc2xpY2UoMCwgaSkuam9pbignICcpfSdgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhc3QucmVwZWF0ID0gbGFzdC5yZXBlYXQgfHwgMTtcbiAgICAgICAgbGFzdC5yZXBlYXQgKz0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZCgncGFyYW0nLCBjdXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAoaXNQcm9ncmVzc2lvbihjdXIpKSB7XG4gICAgICBsYXN0LnZhbHVlICs9IGAgJHtjdXJ9YDtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmIChjdXIuY2hhckF0KCkgPT09ICcjJykge1xuICAgICAgYWRkKCdjaGFubmVsJywgY3VyKTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmIChpc05vdGUoY3VyKSB8fCBpc0Nob3JkKGN1cikgfHwgaXNNb2RlKGN1cikgfHwgaXNOdW1iZXIoY3VyKSkge1xuICAgICAgY2FycnkucHVzaChjdXIpO1xuXG4gICAgICBpZiAoXG4gICAgICAgICFuZXh0XG4gICAgICAgIHx8IGNhcnJ5Lmxlbmd0aCA9PT0gM1xuICAgICAgICB8fCAhKGlzTm90ZShuZXh0KSB8fCBpc01vZGUobmV4dCkgfHwgaXNOdW1iZXIobmV4dCkpXG4gICAgICApIHtcbiAgICAgICAgY29uc3Qgb2xkID0gY2Fycnkuc3BsaWNlKDAsIGNhcnJ5Lmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IHRlc3QgPSBvbGRbMF07XG5cbiAgICAgICAgbGV0IG1vZGUgPSBvbGRbMV07XG4gICAgICAgIGxldCBvY3RhdmUgPSBvbGRbMl07XG5cbiAgICAgICAgaWYgKCFvY3RhdmUgJiYgaXNOdW1iZXIobW9kZSkpIHtcbiAgICAgICAgICBvY3RhdmUgPSBtb2RlO1xuICAgICAgICAgIG1vZGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgdGVzdC5sZW5ndGggPCAyXG4gICAgICAgICAgJiYgaXNOb3RlKHRlc3QpXG4gICAgICAgICAgJiYgKGlzTW9kZShtb2RlKSB8fCBpc051bWJlcihvY3RhdmUpKVxuICAgICAgICApIHtcbiAgICAgICAgICBhZGQoJ21vZGUnLCBvbGQuam9pbignICcpKTtcbiAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgfVxuXG4gICAgICAgIG9sZC5mb3JFYWNoKHggPT4ge1xuICAgICAgICAgIGFkZCh4Lmxlbmd0aCA+IDEgfHwgIWlzTm90ZSh4KSA/IGdldFR5cGUoeCkgOiAnbW9kZScsIHgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY3VyID09PSAnc3RyaW5nJyAmJiBjdXIuaW5kZXhPZignLi4nKSA+IC0xKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IGN1ci5zcGxpdCgnLi4nKTtcbiAgICAgIGNvbnN0IG1pbiA9IHBhcnRzWzBdIHx8IDE7XG4gICAgICBjb25zdCBtYXggPSBwYXJ0c1sxXSB8fCBJbmZpbml0eTtcblxuICAgICAgdHlwZSA9ICdzbGljZSc7XG4gICAgICBjdXIgPSBbbWluLCBtYXhdO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY3VyID09PSAnc3RyaW5nJyAmJiAoY3VyLmNoYXJBdCgpID09PSAnLycgfHwgY3VyLmNoYXJBdCgpID09PSAnKicpKSB7XG4gICAgICBjb25zdCBvcGVyYXRvciA9IGN1ci5jaGFyQXQoKSA9PT0gJy8nID8gJ2RpdmlkZScgOiAnbXVsdGlwbHknO1xuICAgICAgY29uc3QgbnVtYmVyID0gY3VyLnN1YnN0cigxKTtcblxuICAgICAgaWYgKCFpc051bWJlcihudW1iZXIpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0aW5nIGEgdmFsaWQgZXhwcmVzc2lvbiB0byAke29wZXJhdG9yfSwgZ2l2ZW4gJyR7dG9rZW5zLnNsaWNlKDAsIGkpLmpvaW4oJyAnKX0gJHtjdXJ9J2ApO1xuICAgICAgfVxuXG4gICAgICBhZGQob3BlcmF0b3IsIHBhcnNlRmxvYXQobnVtYmVyKSk7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAoIXR5cGUgJiYgZ2V0VHlwZShjdXIpID09PSAndmFsdWUnICYmIEFycmF5LmlzQXJyYXkobGFzdC52YWx1ZSkpIHtcbiAgICAgIGxhc3QudmFsdWVbMV0gPSBsYXN0LnZhbHVlWzFdIHx8ICcnO1xuICAgICAgbGFzdC52YWx1ZVsxXSArPSBsYXN0LnZhbHVlWzFdID8gJyAnIDogJyc7XG4gICAgICBsYXN0LnZhbHVlWzFdICs9IGN1cjtcbiAgICAgIHJldHVybiBjdXI7XG4gICAgfVxuXG4gICAgYWRkKHR5cGUgfHwgZ2V0VHlwZShjdXIpLCB0eXBlb2YgY3VyID09PSAnc3RyaW5nJyAmJiBpc051bWJlcihjdXIpID8gcGFyc2VJbnQoY3VyLCAxMCkgOiBjdXIpO1xuICAgIHJldHVybiBjdXI7XG4gIH0sIG51bGwpO1xuXG4gIENBQ0hFW2AkJHtleHByZXNzaW9ufWBdID0gYXN0O1xuICByZXR1cm4gYXN0O1xufVxuIiwgIi8qKlxuICogVGFrZSBhIHN0cmluZyBpbnB1dCBhbmQgY2hlY2sgaWYgaXQgcyBhIG5vdGUgbmFtZSBvciBub3RcbiAqIEBwYXJhbSAge1N0cmluZ30gc3RyIE5vdGUgbmFtZSBlLmcuIGM0XG4gKiBAcmV0dXJuIHtCb29sZWFufSBSZXR1cm4gdHJ1ZSBmb3IgYzQgb3IgcmV0dXJuIGZhbHNlIGZvciBzb21ldGhpbmcgbGlrZSBDTVxuICovXG5leHBvcnQgY29uc3QgaXNOb3RlID0gKHN0cjogc3RyaW5nKTogYm9vbGVhbiA9PlxuICAvXlthLWdBLUddKD86I3xiKT9cXGQkLy50ZXN0KHN0cik7XG5cbi8qKlxuICogVGFrZSBhIFN0cmluZyBpbnB1dCBzdWNoIGFzIHh4eFt4eFt4eF1dXG4gKiBhbmQgcmV0dXJuIGFuIEFycmF5IGFzIFsneCcsICd4JywgJ3gnLCBbJ3gnLCAneCcsIFsneCcsICd4J11dXVxuICogQHBhcmFtICB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5leHBvcnQgY29uc3QgZXhwYW5kU3RyID0gKHN0cjogc3RyaW5nKTogYW55ID0+IHtcbiAgc3RyID0gSlNPTi5zdHJpbmdpZnkoc3RyLnNwbGl0KCcnKSk7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKC8sXCJcXFtcIiwvZywgJywgWycpO1xuICBzdHIgPSBzdHIucmVwbGFjZSgvXCJcXFtcIiwvZywgJ1snKTtcbiAgc3RyID0gc3RyLnJlcGxhY2UoLyxcIlxcXVwiL2csICddJyk7XG4gIHJldHVybiBKU09OLnBhcnNlKHN0cik7XG59O1xuXG4vKipcbiAqIEJhc2ljIEFycmF5IHJhbmRvbWl6ZXJcbiAqIEBwYXJhbSAge0FycmF5fSBhcnJcbiAqIEBwYXJhbSAge2Jvb2xlYW59IGZ1bGxTaHVmZmxlIEVuc3VyZSBubyBlbGVtZW50cyByZW1haW4gaW4gb2xkIHBsYWNlXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuZXhwb3J0IGNvbnN0IHNodWZmbGUgPSAoYXJyOiBhbnlbXSwgZnVsbFNodWZmbGU6IGJvb2xlYW4gPSB0cnVlKTogc3RyaW5nW10gPT4ge1xuICBjb25zdCBsYXN0SW5kZXg6IG51bWJlciA9IGFyci5sZW5ndGggLSAxO1xuXG4gIC8vIFNodWZmbGUgYWxnb3JpdGhtIGJ5IFJpY2hhcmQgRHVyc3RlbmZlbGQgKERvbmFsZCBFLiBLbnV0aCksIGFsc28gUm9uYWxkIEZpc2hlciBhbmQgRnJhbmsgWWF0ZXMuXG4gIC8vIFwiRnVsbCBTaHVmZmxlXCIgTW9kaWZpY2F0aW9uIHRvIGVuc3VyZSBubyBlbGVtZW50cyByZW1haW4gaW4gdGhlaXIgb3JpZ2luYWwgcGxhY2UgKGJ5IHRha2luZyBlYWNoIGVsZW1lbnQgb25jZVxuICAvLyBhbmQgc3dhcHBpbmcgd2l0aCBhbnkgcmVtYWluaW5nIGVsZW1lbnRzKVxuICBhcnIuZm9yRWFjaCgoZWwsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgaWYgKGlkeCA+PSBsYXN0SW5kZXgpIHtcbiAgICAgIC8vIE5vIHNodWZmbGluZyBsYXN0IGVsZW1lbnRcbiAgICAgIC8vIE9uZSBiZWZvcmUgbGFzdCBpcyBhbHdheXMgc3dhcHBlZCB3aXRoIGxhc3QgYXQgdGhlIGVuZCBvZiB0aGUgbG9vcFxuICAgICAgLy8gU2luY2UgcHJldmlvdXMgc3dhcHMgY2FuIG1vdmUgbGFzdCBlbGVtZW50IGludG8gb3RoZXIgcGxhY2VzLCB0aGVyZSBpcyBzdGlsbCBhIHJhbmRvbSBzaHVmZmxlIG9mIGxhc3QgZWxlbWVudFxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBTd2FwIGVsIHdpdGggb25lIG9mIHRoZSBoaWdoZXIgZWxlbWVudHMgcmFuZG9tbHlcbiAgICBsZXQgcm5kO1xuICAgIHJuZCA9IGZ1bGxTaHVmZmxlXG4gICAgICA/IC8vIFBpY2sgcmFuZG9tIG51bWJlciBmcm9tIGlkeCsxIHRvIGxhc3RJbmRleCAoTW9kaWZpZWQgYWxnb3JpdGhtLCAoTi0xKSEgY29tYmluYXRpb25zKVxuICAgICAgICAvLyBNYXRoLnJhbmRvbSAtPiBbMCwgMSkgLT4gWzAsIGxhc3RJbmRleC1pZHggKSAtLWZsb29yLT4gWzAsIGxhc3RJbmRleC1pZHgtMV1cbiAgICAgICAgLy8gcm5kID0gWzAsIGxhc3RJbmRleC1pZHgtMV0gKyAxICsgaWR4ID0gWzEgKyBpZHgsIGxhc3RJbmRleF1cbiAgICAgICAgLy8gKE9yaWdpbmFsIGFsZ29yaXRobSB3b3VsZCBwaWNrIHJuZCA9IFtpZHgsIGxhc3RJbmRleF0sIHRodXMgYW55IGVsZW1lbnQgY291bGQgYXJyaXZlIGJhY2sgaW50byBpdHMgc2xvdClcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGxhc3RJbmRleCAtIGlkeCkpICsgMSArIGlkeFxuICAgICAgOiAvLyBQaWNrIHJhbmRvbSBudW1iZXIgZnJvbSBpZHggdG8gbGFzdEluZGV4IChVbm1vZGlmaWVkIFJpY2hhcmQgRHVyc3RlbmZlbGQsIE4hIGNvbWJpbmF0aW9ucylcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGxhc3RJbmRleCArIDEgLSBpZHgpKSArIGlkeDtcbiAgICBhcnJbaWR4XSA9IGFycltybmRdO1xuICAgIGFycltybmRdID0gZWw7XG4gIH0pO1xuXG4gIHJldHVybiBhcnI7XG59O1xuXG4vKipcbiAqIFJldHVybiBhbiBhcnJheSBvZiBudW1iZXJzIHJlbGF0aXZlIHRvIG1heExldmVsIHx8IDEyNyBvcmRlcmVkIGluIGEgU2luZSB3YXZlIGZvcm1hdFxuICogVGhpcyBpcyB1c2VkIGJ5IHRoZSBgc2l6emxlYCBwYXJhbSBvZiB0aGUgYGNsaXBgIG1ldGhvZCB0byBhZGQgYSBydWRpbWVudGFyeSB2YXJpYXRpb24gdG8gdGhlIGFjY2VudCBvZiBlYWNoIG5vdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBtYXhMZXZlbCBBIG51bWJlciBiZXR3ZWVuIG5vdCBtb3JlIHRoYW4gMTI3XG4gKiBAcmV0dXJuIHtBcnJheX0gIEV4YW1wbGUgb3V0cHV0IFs2MywgOTAsIDExMCwgMTI3LCAxMTAsIDkwLCA2MywgMCwgNjMsIDkwLCAxMTAsIDEyNywgMTEwLCA5MCwgNjMsIDBdXG4gKi9cbmV4cG9ydCBjb25zdCBzaXp6bGVNYXAgPSAobWF4TGV2ZWw6IG51bWJlciA9IDEyNyk6IG51bWJlcltdID0+IHtcbiAgY29uc3QgcGkgPSBNYXRoLlBJO1xuICBjb25zdCBwaUFycjogbnVtYmVyW10gPSBbXG4gICAgcGkgLyA2LFxuICAgIHBpIC8gNCxcbiAgICBwaSAvIDMsXG4gICAgcGkgLyAyLFxuICAgICgyICogcGkpIC8gMyxcbiAgICAoMyAqIHBpKSAvIDQsXG4gICAgKDUgKiBwaSkgLyA2LFxuICAgIHBpLFxuICBdO1xuICBjb25zdCBwaUFyclJldjogbnVtYmVyW10gPSBbXG4gICAgMCxcbiAgICBwaSAvIDYsXG4gICAgcGkgLyA0LFxuICAgIHBpIC8gMyxcbiAgICBwaSAvIDIsXG4gICAgKDIgKiBwaSkgLyAzLFxuICAgICgzICogcGkpIC8gNCxcbiAgICAoNSAqIHBpKSAvIDYsXG4gIF07XG4gIHBpQXJyUmV2LnJldmVyc2UoKTtcbiAgY29uc3QgYXJyOiBudW1iZXJbXSA9IHBpQXJyLmNvbmNhdChwaUFyclJldik7XG4gIHJldHVybiBhcnIubWFwKGVsZW1lbnQgPT4gTWF0aC5yb3VuZChNYXRoLnNpbihlbGVtZW50KSAqIG1heExldmVsKSk7XG59O1xuXG4vKipcbiAqIFBpY2sgb25lIGl0ZW0gcmFuZG9tbHkgZnJvbSBhbiBhcnJheSBhbmQgcmV0dXJuIGl0XG4gKiBAcGFyYW0gYXJyXG4gKi9cbmV4cG9ydCBjb25zdCBwaWNrT25lID0gKGFycjogYW55W10pID0+XG4gIGFyci5sZW5ndGggPiAxID8gYXJyW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSldIDogYXJyWzBdO1xuXG4vKipcbiAqIEJvb2xlYW4gZ2VuZXJhdG9yXG4gKi9cbmV4cG9ydCBjb25zdCBkaWNlID0gKCkgPT4gISFNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuXG4vKipcbiAqIFBvbHlmaWxsIGZvciBBcnJheS5wcm90b3R5cGUuZmxhdFxuICovXG5leHBvcnQgY29uc3QgZmxhdCA9IChhcnI6IGFueVtdW10pID0+XG4gIGFyci5yZWR1Y2UoKGFjYywgdmFsKSA9PiBhY2MuY29uY2F0KHZhbCksIFtdKTtcbiIsICJpbXBvcnQgeyBzY2FsZSB9IGZyb20gJ2hhcm1vbmljcyc7XG5pbXBvcnQgeyBwaWNrT25lLCBkaWNlIH0gZnJvbSAnLi91dGlscyc7XG5cbi8qKlxuICogR2V0IHRoZSBjaG9yZHMgdGhhdCBnbyB3aXRoIGEgZ2l2ZW4gc2NhbGUvbW9kZVxuICogVGhpcyBpcyB1c2VmdWwgb25seSBpbiBjYXNlIHlvdSB3YW50IHRvIGNoZWNrIHdoYXQgY2hvcmRzIHdvcmsgd2l0aCBhIHNjYWxlL21vZGVcbiAqIHNvIHRoYXQgeW91IGNhbiBjb21lIHVwIHdpdGggY2hvcmQgcHJvZ3Jlc3Npb25zXG4gKiBAcGFyYW0gIHtTdHJpbmd9IG1vZGUgZS5nLiBtYWpvclxuICogQHJldHVybiB7QXJyYXl9IGUuZy5bJ0knLCAnaWknLCAnaWlpJywgJ0lWJywgJ1YnLCAndmknLCAndmlpXHUwMEIwJ11cbiAqL1xuZXhwb3J0IGNvbnN0IGdldENob3JkRGVncmVlcyA9IChtb2RlOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgdGhlUm9tYW5zOiBOVlA8c3RyaW5nW10+ID0ge1xuICAgIGlvbmlhbjogWydJJywgJ2lpJywgJ2lpaScsICdJVicsICdWJywgJ3ZpJywgJ3ZpaVx1MDBCMCddLFxuICAgIGRvcmlhbjogWydpJywgJ2lpJywgJ0lJSScsICdJVicsICd2JywgJ3ZpXHUwMEIwJywgJ1ZJSSddLFxuICAgIHBocnlnaWFuOiBbJ2knLCAnSUknLCAnSUlJJywgJ2l2JywgJ3ZcdTAwQjAnLCAnVkknLCAndmlpJ10sXG4gICAgbHlkaWFuOiBbJ0knLCAnSUknLCAnaWlpJywgJ2l2XHUwMEIwJywgJ1YnLCAndmknLCAndmlpJ10sXG4gICAgbWl4b2x5ZGlhbjogWydJJywgJ2lpJywgJ2lpaVx1MDBCMCcsICdJVicsICd2JywgJ3ZpJywgJ1ZJSSddLFxuICAgIGFlb2xpYW46IFsnaScsICdpaVx1MDBCMCcsICdJSUknLCAnaXYnLCAndicsICdWSScsICdWSUknXSxcbiAgICBsb2NyaWFuOiBbJ2lcdTAwQjAnLCAnSUknLCAnaWlpJywgJ2l2JywgJ1YnLCAnVkknLCAndmlpJ10sXG4gICAgJ21lbG9kaWMgbWlub3InOiBbJ2knLCAnaWknLCAnSUlJKycsICdJVicsICdWJywgJ3ZpXHUwMEIwJywgJ3ZpaVx1MDBCMCddLFxuICAgICdoYXJtb25pYyBtaW5vcic6IFsnaScsICdpaVx1MDBCMCcsICdJSUkrJywgJ2l2JywgJ1YnLCAnVkknLCAndmlpXHUwMEIwJ10sXG4gIH07XG4gIHRoZVJvbWFucy5tYWpvciA9IHRoZVJvbWFucy5pb25pYW47XG4gIHRoZVJvbWFucy5taW5vciA9IHRoZVJvbWFucy5hZW9saWFuO1xuXG4gIHJldHVybiB0aGVSb21hbnNbbW9kZV0gfHwgW107XG59O1xuXG5jb25zdCBpZHhCeURlZ3JlZTogTlZQPG51bWJlcj4gPSB7XG4gIGk6IDAsXG4gIGlpOiAxLFxuICBpaWk6IDIsXG4gIGl2OiAzLFxuICB2OiA0LFxuICB2aTogNSxcbiAgdmlpOiA2LFxufTtcblxuLyoqXG4gKiBHZXQgYSBjaG9yZCBuYW1lIGZyb20gZGVncmVlXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHJvbWFuIGUuZy4gaWkgT1IgaWlcdTAwQjAgT1IgVjdcbiAqIEByZXR1cm4ge1N0cmluZ30gZS5nLiBtIE9SIG03YjUgT1IgTWFqN1xuICovXG5jb25zdCBnZXRDaG9yZE5hbWUgPSAocm9tYW46IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIC8vIHJlbW92ZSBhbnkgbm9uIGNoYXJhY3RlclxuICBjb25zdCBzdHIgPSByb21hbi5yZXBsYWNlKC9cXFcvZywgJycpO1xuICBsZXQgcHJlZml4ID0gJ00nO1xuICAvLyBjaGVjayBpZiBpdCBzIGxvd2VyY2FzZVxuICBpZiAoc3RyLnRvTG93ZXJDYXNlKCkgPT09IHN0cikge1xuICAgIHByZWZpeCA9ICdtJztcbiAgfVxuICBpZiAocm9tYW4uaW5kZXhPZignXHUwMEIwJykgPiAtMSkge1xuICAgIHJldHVybiBwcmVmaXggKyAnN2I1JztcbiAgfVxuICBpZiAocm9tYW4uaW5kZXhPZignKycpID4gLTEpIHtcbiAgICByZXR1cm4gcHJlZml4ICsgJyM1JztcbiAgfVxuXG4gIGlmIChyb21hbi5pbmRleE9mKCc3JykgPiAtMSkge1xuICAgIHJldHVybiBwcmVmaXggPT09ICdNJyA/ICdtYWo3JyA6ICdtNyc7XG4gIH1cblxuICByZXR1cm4gcHJlZml4O1xufTtcblxuLyoqXG4gKiBUYWtlIHRoZSBzcGVjaWZpZWQgc2NhbGUgYW5kIGRlZ3JlZXMgYW5kIHJldHVybiB0aGUgY2hvcmQgbmFtZXMgZm9yIHRoZW1cbiAqIFRoZXNlIGNhbiBiZSB1c2VkIGFzIHRoZSB2YWx1ZSBmb3IgdGhlIGBub3Rlc2AgcGFyYW0gb2YgdGhlIGBjbGlwYCBtZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfSBub3RlT2N0YXZlU2NhbGUgZS5nLiAnQzQgbWFqb3InXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGNob3JkRGVncmVzcyBlLmcuICdJIElWIFYgSVYnXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGUuZy4gJ0NNIEZNIEdNIEZNJ1xuICovXG5leHBvcnQgY29uc3QgZ2V0Q2hvcmRzQnlQcm9ncmVzc2lvbiA9IChcbiAgbm90ZU9jdGF2ZVNjYWxlOiBzdHJpbmcsXG4gIGNob3JkRGVncmVzczogc3RyaW5nXG4pOiBzdHJpbmcgPT4ge1xuICAvLyBTZXQgdGhlIG9jdGF2ZSBpZiBtaXNzaW5nXG4gIC8vIEZvciBleGFtcGxlIGlmIHRoZSBtZXRob2Qgd2FzIGNhbGxlZCB3aXRoIGBDIG1ham9yYCBpbnN0ZWFkIG9mIGBDNCBtYWpvcmAsIHRoZW4gYWRkIHRoZSA0XG4gIGNvbnN0IG5vdGVPY3RhdmVTY2FsZUFyciA9IG5vdGVPY3RhdmVTY2FsZS5zcGxpdCgnICcpO1xuICBpZiAoIW5vdGVPY3RhdmVTY2FsZUFyclswXS5tYXRjaCgvXFxkLykpIHtcbiAgICBub3RlT2N0YXZlU2NhbGVBcnJbMF0gKz0gJzQnO1xuICAgIG5vdGVPY3RhdmVTY2FsZSA9IG5vdGVPY3RhdmVTY2FsZUFyci5qb2luKCcgJyk7XG4gIH1cblxuICAvLyBHZXQgdGhlIHNjYWxlIGZyb20gdGhlIGdpdmVuIG5vdGUgYW5kIHNjYWxlL21vZGUgY29tYmluYXRpb25cbiAgY29uc3QgbW9kZSA9IHNjYWxlKG5vdGVPY3RhdmVTY2FsZSk7XG4gIGNvbnN0IGNob3JkRGVncmVlc0FyciA9IGNob3JkRGVncmVzcy5yZXBsYWNlKC9cXHMqLCtcXHMqL2csICcgJykuc3BsaXQoJyAnKTtcbiAgLy8gTm93IHdlIGhhdmUgc29tZXRoaW5nIGxpa2UgWydpJywgJ2lpJywgJ0lWJ11cbiAgLy8gQ29udmVydCBpdCB0byBhIGNob3JkIGZhbWlseSBzdWNoIGFzIFsnQ20nLCAnRG0nLCAnRk0nXVxuICBjb25zdCBjaG9yZEZhbWlseSA9IGNob3JkRGVncmVlc0Fyci5tYXAoKHJvbWFuLCBpZHgpID0+IHtcbiAgICBjb25zdCBjaG9yZE5hbWUgPSBnZXRDaG9yZE5hbWUocm9tYW4pOyAvLyBlLmcuIG1cbiAgICAvLyBnZXQgdGhlIGluZGV4IHRvIGJlIHVzZWQgYnkgcmVtb3ZpbmcgYW55IGRpZ2l0IG9yIG5vbiBhbHBoYWJldCBjaGFyYWN0ZXJcbiAgICBjb25zdCBzY2FsZUlkID0gaWR4QnlEZWdyZWVbcm9tYW4ucmVwbGFjZSgvXFxXfFxcZC9nLCAnJykudG9Mb3dlckNhc2UoKV07IC8vIGUuZy4gMFxuICAgIC8vIGdldCB0aGUgbm90ZSBpdHNlbGZcbiAgICBjb25zdCBub3RlID0gbW9kZVtzY2FsZUlkXTsgLy8gZS5nLiBDXG4gICAgLy8gZ2V0IHRoZSBvY3RhdmUgb2YgdGhlIG5vdGU7XG4gICAgY29uc3Qgb2N0ID0gbm90ZS5yZXBsYWNlKC9cXEQrLywgJycpOyAvLyBlLmcuIDRcbiAgICAvLyBub3cgZ2V0IHRoZSBjaG9yZFxuICAgIHJldHVybiBub3RlLnJlcGxhY2UoL1xcZC8sICcnKSArIGNob3JkTmFtZSArICdfJyArIG9jdDtcbiAgfSk7XG5cbiAgcmV0dXJuIGNob3JkRmFtaWx5LnRvU3RyaW5nKCkucmVwbGFjZSgvLC9nLCAnICcpO1xufTtcblxuY29uc3QgZ2V0UHJvZ0ZhY3RvcnkgPSAoeyBULCBQLCBEIH06IFRQRCkgPT4ge1xuICByZXR1cm4gKGNvdW50OiBudW1iZXIgPSA0KSA9PiB7XG4gICAgY29uc3QgY2hvcmRzID0gW107XG5cbiAgICAvLyBQdXNoIHJvb3QvdG9uaWNcbiAgICBjaG9yZHMucHVzaChwaWNrT25lKFQpKTtcblxuICAgIGxldCBpID0gMTtcblxuICAgIC8vIFBpY2sgYSBwcmVkb21pbmFudFxuICAgIGlmIChpIDwgY291bnQgLSAxKSB7XG4gICAgICBjaG9yZHMucHVzaChwaWNrT25lKFApKTtcbiAgICAgIGkrKztcbiAgICB9XG5cbiAgICAvLyBUcnkgYW5vdGhlciBwcmVkb21pbmFudFxuICAgIGlmIChpIDwgY291bnQgLSAxICYmIGRpY2UoKSkge1xuICAgICAgY2hvcmRzLnB1c2gocGlja09uZShQKSk7XG4gICAgICBpKys7XG4gICAgfVxuXG4gICAgLy8vLy8vLy8vIDQgb3IgbW9yZS8vLy8vLy8vLy9cbiAgICBpZiAoaSA8IGNvdW50IC0gMSkge1xuICAgICAgLy8gUGljayBhIGRvbWluYW50XG4gICAgICBjaG9yZHMucHVzaChwaWNrT25lKEQpKTtcbiAgICAgIGkrKztcbiAgICB9XG5cbiAgICBpZiAoaSA8IGNvdW50IC0gMSkge1xuICAgICAgLy8gUGljayBhIHByZWRvbWluYW50XG4gICAgICBjaG9yZHMucHVzaChwaWNrT25lKFApKTtcbiAgICAgIGkrKztcbiAgICB9XG5cbiAgICBpZiAoaSA8IGNvdW50IC0gMSkge1xuICAgICAgLy8gUGljayBhIGRvbWluYW50XG4gICAgICBjaG9yZHMucHVzaChwaWNrT25lKEQpKTtcbiAgICAgIGkrKztcbiAgICB9XG5cbiAgICAvLyBQaWNrIGEgcHJlZG9taW5hbnQgaWYgcG9zc2libGVcbiAgICBpZiAoaSA8IGNvdW50IC0gMSAmJiBkaWNlKCkpIHtcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoUCkpO1xuICAgICAgaSsrO1xuICAgIH1cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICAvLyBGaWxsIHRoZSByZXN0IHdpdGggZG9taW5hbnRcbiAgICB3aGlsZSAoaSA8IGNvdW50KSB7XG4gICAgICBjaG9yZHMucHVzaChwaWNrT25lKEQpKTtcbiAgICAgIGkrKztcbiAgICB9XG5cbiAgICByZXR1cm4gY2hvcmRzO1xuICB9O1xufTtcblxuY29uc3QgTSA9IGdldFByb2dGYWN0b3J5KHsgVDogWydJJywgJ3ZpJ10sIFA6IFsnaWknLCAnSVYnXSwgRDogWydWJ10gfSk7XG5jb25zdCBtID0gZ2V0UHJvZ0ZhY3RvcnkoeyBUOiBbJ2knLCAnVkknXSwgUDogWydpaScsICdpdiddLCBEOiBbJ1YnXSB9KTtcblxuLyoqXG4gKiBHZW5lcmF0ZSBhIGNob3JkIHByb2dyZXNzaW9uIGJhc2VkIG9uIGJhc2ljIG11c2ljIHRoZW9yeVxuICogd2hlcmUgd2UgZm9sbG93IHRvbmljIHRvIG9wdGlvbmFsbHkgcHJlZG9taW5hbnQgYW5kIHRoZW4gZG9taW5hbnRcbiAqIGFuZCB0aGVuIHJhbmRvbWx5IHRvIHByZWRvbWluYW50IGFuZCBjb250aW51ZSB0aGlzIHRpbGwgd2UgcmVhY2ggYGNvdW50YFxuICogQHBhcmFtIHNjYWxlVHlwZSBlLmcuIE0gKGZvciBtYWpvciBjaG9yZCBwcm9ncmVzc2lvbiksIG0gKGZvciBtaW5vciBjaG9yZCBwcm9ncmVzc2lvbilcbiAqIEBwYXJhbSBjb3VudCBlLmcuIDRcbiAqL1xuZXhwb3J0IGNvbnN0IHByb2dyZXNzaW9uID0gKHNjYWxlVHlwZTogcHJvZ3Jlc3Npb25TY2FsZSwgY291bnQ6IG51bWJlciA9IDQpID0+IHtcbiAgaWYgKHNjYWxlVHlwZSA9PT0gJ21ham9yJyB8fCBzY2FsZVR5cGUgPT09ICdNJykge1xuICAgIHJldHVybiBNKGNvdW50KTtcbiAgfVxuXG4gIGlmIChzY2FsZVR5cGUgPT09ICdtaW5vcicgfHwgc2NhbGVUeXBlID09PSAnbScpIHtcbiAgICByZXR1cm4gbShjb3VudCk7XG4gIH1cbn07XG4iLCAiaW1wb3J0IHsgZ2V0Q2hvcmRzQnlQcm9ncmVzc2lvbiB9IGZyb20gJ3NjcmliYmxldHVuZS9zcmMvcHJvZ3Jlc3Npb24nO1xuaW1wb3J0IHsgc2NhbGUsIGlubGluZUNob3JkIH0gZnJvbSAnaGFybW9uaWNzJztcblxuaW1wb3J0IHsgaXNQcm9ncmVzc2lvbiwgdHJhbnNmb3JtIH0gZnJvbSAnLi90b2tlbml6ZSc7XG5pbXBvcnQgeyByZXBlYXQsIGNsb25lIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2UoaW5wdXQsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShpbnB1dCkpIHJldHVybiBpbnB1dDtcblxuICBjb25zdCBmbiA9IHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyA/IGNhbGxiYWNrIDogKHYgPT4gdik7XG5cbiAgbGV0IHNraXA7XG4gIHJldHVybiBpbnB1dC5yZWR1Y2UoKHByZXYsIGN1ciwgaSkgPT4ge1xuICAgIGNvbnN0IGxhc3QgPSBwcmV2W3ByZXYubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgbmV4dCA9IGlucHV0W2kgKyAxXSB8fCB7fTtcbiAgICBjb25zdCBvbGQgPSBpbnB1dFtpIC0gMV0gfHwge307XG5cbiAgICBpZiAoc2tpcCkge1xuICAgICAgc2tpcCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY3VyKSkge1xuICAgICAgcHJldi5wdXNoKC4uLmN1cik7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAoY3VyLnR5cGUgPT09ICd2YWx1ZScgJiYgY3VyLnZhbHVlID09PSAnLicpIHtcbiAgICAgIGlmIChwcmV2Lmxlbmd0aCA+IDApIHByZXYucHVzaChwcmV2WzBdKTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmIChvbGQudHlwZSA9PT0gJ3BhdHRlcm4nICYmIGN1ci50eXBlID09PSAncGF0dGVybicpIHtcbiAgICAgIHByZXZbcHJldi5sZW5ndGggLSAxXSArPSBjdXIudmFsdWU7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGN1ci50eXBlKSB7XG4gICAgICBjYXNlICdwYXR0ZXJuJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdub3RlJzpcbiAgICAgICAgaWYgKGN1ci5yZXBlYXQpIHByZXYucHVzaCguLi5yZXBlYXQoY3VyLnZhbHVlLCBjdXIucmVwZWF0KSk7XG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY3VyLnZhbHVlKSkgcHJldi5wdXNoKC4uLmN1ci52YWx1ZSk7XG4gICAgICAgIGVsc2UgcHJldi5wdXNoKGN1ci52YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdjaG9yZCc6XG4gICAgICAgIGlmIChjdXIucmVwZWF0KSBwcmV2LnB1c2goLi4ucmVwZWF0KGN1ci52YWx1ZSwgY3VyLnJlcGVhdCkpO1xuICAgICAgICBlbHNlIGlmIChjdXIudW5mb2xkKSBwcmV2LnB1c2goLi4uY3VyLnZhbHVlKTtcbiAgICAgICAgZWxzZSBwcmV2LnB1c2goY3VyLnZhbHVlKTtcblxuICAgICAgICBpZiAoY3VyLnR5cGUgIT09ICdjaG9yZCcpIHtcbiAgICAgICAgICBza2lwID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZGl2aWRlJzpcbiAgICAgICAgcHJldltwcmV2Lmxlbmd0aCAtIDFdIC89IGN1ci52YWx1ZTtcbiAgICAgICAgcmV0dXJuIHByZXY7XG5cbiAgICAgIGNhc2UgJ211bHRpcGx5JzpcbiAgICAgICAgcHJldi5wdXNoKC4uLnJlcGVhdChsYXN0LCBjdXIudmFsdWUgLSAxKSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdzbGljZSc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGxhc3QpKSB7XG4gICAgICAgICAgcHJldltwcmV2Lmxlbmd0aCAtIDFdID0gbGFzdC5zbGljZShjdXIudmFsdWVbMF0gLSAxLCBjdXIudmFsdWVbMV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByZXYucHVzaChjdXIudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdtb2RlJzpcbiAgICAgICAgcHJldltwcmV2Lmxlbmd0aCAtIDFdID0gYCR7bGFzdH0gJHtjdXIudmFsdWV9YDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3BhcmFtJzpcbiAgICAgIGNhc2UgJ3ZhbHVlJzoge1xuICAgICAgICBsZXQgdmFsdWUgPSBudWxsO1xuICAgICAgICBpZiAodHlwZW9mIGNvbnRleHRbY3VyLnZhbHVlXSAhPT0gJ3VuZGVmaW5lZCcpIHZhbHVlID0gY29udGV4dFtjdXIudmFsdWVdO1xuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgZXhwcmVzc2lvbiBmb3IgJyR7Y3VyLnZhbHVlfSdgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZVswXSAmJiB2YWx1ZVswXS50eXBlKSB7XG4gICAgICAgICAgdmFsdWUgPSByZWR1Y2UodmFsdWUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGN1ci5yZXBlYXQpIHtcbiAgICAgICAgICAgIHByZXYucHVzaCguLi5yZXBlYXQodmFsdWUsIGN1ci5yZXBlYXQpLnJlZHVjZSgoX3ByZXYsIF9jdXIpID0+IHtcbiAgICAgICAgICAgICAgX3ByZXYucHVzaCguLi5fY3VyKTtcbiAgICAgICAgICAgICAgcmV0dXJuIF9wcmV2O1xuICAgICAgICAgICAgfSwgW10pKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJldi5wdXNoKC4uLnZhbHVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbHVlID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV07XG4gICAgICAgIGlmIChjdXIucmVwZWF0KSBwcmV2LnB1c2goLi4ucmVwZWF0KHZhbHVlLCBjdXIucmVwZWF0KSk7XG4gICAgICAgIGVsc2UgcHJldi5wdXNoKC4uLnZhbHVlKTtcbiAgICAgIH0gYnJlYWs7XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5oYW5kbGVkICcke2N1ci50eXBlfSdgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJldjtcbiAgfSwgW10pLnJlZHVjZSgobWVtbywgaXRlbSkgPT4ge1xuICAgIGNvbnN0IHByZXYgPSBtZW1vW21lbW8ubGVuZ3RoIC0gMV07XG5cbiAgICBpZiAoXG4gICAgICBBcnJheS5pc0FycmF5KHByZXYpXG4gICAgICAmJiBBcnJheS5pc0FycmF5KGl0ZW0pXG4gICAgICAmJiB0eXBlb2YgaXRlbVswXSA9PT0gJ251bWJlcidcbiAgICAgICYmIGl0ZW0ubGVuZ3RoID09PSAyXG4gICAgKSB7XG4gICAgICBjb25zdCBvZmZzZXQgPSBpdGVtWzFdID09PSBJbmZpbml0eSA/IHByZXYubGVuZ3RoIDogaXRlbVsxXTtcbiAgICAgIGNvbnN0IFtiYXNlLCBsZW5ndGhdID0gU3RyaW5nKG9mZnNldCkuc3BsaXQoL1xcRC8pO1xuXG4gICAgICBtZW1vLnBvcCgpO1xuICAgICAgbWVtby5wdXNoKC4uLnByZXYuc2xpY2UoaXRlbVswXSAtIDEsIGJhc2UpKTtcblxuICAgICAgaWYgKFN0cmluZyhvZmZzZXQpLmluY2x1ZGVzKCc+JykpIHtcbiAgICAgICAgY29uc3QgcGFydHMgPSBtZW1vLnNsaWNlKC1sZW5ndGggLSAxKTtcblxuICAgICAgICBwYXJ0cy5wb3AoKTtcbiAgICAgICAgcGFydHMucmV2ZXJzZSgpO1xuICAgICAgICBtZW1vLnB1c2goLi4ucGFydHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1lbW87XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJyAmJiBpdGVtLmluY2x1ZGVzKCcgJykpIHtcbiAgICAgIGNvbnN0IGNodW5rcyA9IGl0ZW0uc3BsaXQoJyAnKTtcblxuICAgICAgaWYgKGNodW5rcy5zb21lKGlzUHJvZ3Jlc3Npb24pKSB7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IGNodW5rcy5maW5kSW5kZXgoaXNQcm9ncmVzc2lvbik7XG4gICAgICAgIGNvbnN0IFthLCBiXSA9IFtjaHVua3Muc2xpY2UoMCwgb2Zmc2V0KSwgY2h1bmtzLnNsaWNlKG9mZnNldCldO1xuXG4gICAgICAgIG1lbW8ucHVzaChnZXRDaG9yZHNCeVByb2dyZXNzaW9uKGEuam9pbignICcpLCBiLmpvaW4oJyAnKSkuc3BsaXQoJyAnKS5tYXAoeCA9PiBmbihpbmxpbmVDaG9yZCh4KSkpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lbW8ucHVzaChmbihzY2FsZShpdGVtKSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtZW1vLnB1c2goZm4oaXRlbSkpO1xuICAgIH1cbiAgICByZXR1cm4gbWVtbztcbiAgfSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2UoYnVmZmVyKSB7XG4gIGNvbnN0IHRyYWNrcyA9IHt9O1xuICBjb25zdCBtYWluID0gW107XG4gIGNvbnN0IGRhdGEgPSB7fTtcblxuICBsZXQgY2hhbm5lbCA9IG51bGw7XG4gIGxldCBwcmVmaXggPSAnJztcbiAgbGV0IHRyYWNrO1xuICBsZXQgaW5mbyA9IHt9O1xuICBidWZmZXIuc3BsaXQoL1xccj9cXG4vZykuZm9yRWFjaCgobGluZSwgbnRoKSA9PiB7XG4gICAgbGluZSA9IGxpbmUucmVwbGFjZSgvOy4rPyQvLCAnJykudHJpbSgpO1xuICAgIGlmICghbGluZSkgcmV0dXJuO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlmIChsaW5lLmNoYXJBdCgpID09PSAnJScpIHtcbiAgICAgICAgY29uc3QgW25hbWUsIC4uLnZhbHVlXSA9IGxpbmUuc3BsaXQoL1xccysvKTtcblxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGRhdGFbbmFtZV0gPSB0cmFuc2Zvcm0odmFsdWUuam9pbignICcpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChsaW5lLmluZGV4T2YoJyMgJykgPj0gMCkge1xuICAgICAgICBpZiAodHJhY2spIHtcbiAgICAgICAgICB0cmFja3NbdHJhY2tdID0gaW5mbztcbiAgICAgICAgICBjaGFubmVsID0gbnVsbDtcbiAgICAgICAgICBwcmVmaXggPSAnJztcbiAgICAgICAgICBpbmZvID0ge307XG4gICAgICAgIH1cblxuICAgICAgICB0cmFjayA9IGxpbmUuc3BsaXQoL1xccysvKS5zbGljZSgxKS5qb2luKCcgJyk7XG4gICAgICB9IGVsc2UgaWYgKGxpbmUuY2hhckF0KCkgPT09ICc+Jykge1xuICAgICAgICBtYWluLnB1c2godHJhbnNmb3JtKGxpbmUuc3Vic3RyKDEpLnRyaW0oKSkpO1xuICAgICAgfSBlbHNlIGlmIChsaW5lLmNoYXJBdCgpID09PSAnQCcpIHtcbiAgICAgICAgY29uc3QgW25hbWUsIC4uLmV4dGVuZF0gPSBsaW5lLnN1YnN0cigxKS5zcGxpdCgnICcpO1xuXG4gICAgICAgIGlmIChleHRlbmRbMF0gPT09ICc8Jykge1xuICAgICAgICAgIGNvbnN0IGtleSA9IGAke2V4dGVuZFsxXX0jYDtcblxuICAgICAgICAgIE9iamVjdC5rZXlzKGluZm8pXG4gICAgICAgICAgICAuZmlsdGVyKHggPT4geC5pbmRleE9mKGtleSkgPT09IDApXG4gICAgICAgICAgICAuZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgICAgaW5mb1tgJHtuYW1lfSMke2suc3BsaXQoJyMnKVsxXX1gXSA9IGNsb25lKGluZm9ba10pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJlZml4ID0gbmFtZTtcbiAgICAgIH0gZWxzZSBpZiAobGluZS5pbmRleE9mKCc6JykgPiAwKSB7XG4gICAgICAgIGNvbnN0IFtuYW1lLCAuLi52YWx1ZV0gPSBsaW5lLnNwbGl0KCc6Jyk7XG5cbiAgICAgICAgZGF0YVtuYW1lXSA9IHRyYW5zZm9ybSh2YWx1ZS5qb2luKCc6JykudHJpbSgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRpY2tzID0gdHJhbnNmb3JtKGxpbmUpO1xuXG4gICAgICAgIGlmICghdGlja3NbMF0gfHwgdGlja3NbMF0udHlwZSAhPT0gJ2NoYW5uZWwnKSB7XG4gICAgICAgICAgaWYgKCFjaGFubmVsKSB0aHJvdyBuZXcgVHlwZUVycm9yKGBNaXNzaW5nIGNoYW5uZWwsIGdpdmVuICcke2xpbmV9J2ApO1xuXG4gICAgICAgICAgY29uc3QgZW5kID0gaW5mb1tjaGFubmVsXVtpbmZvW2NoYW5uZWxdLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgICAgaWYgKCFlbmQudmFsdWVzKSBlbmQudmFsdWVzID0gW3sgdHlwZTogJ251bWJlcicsIHZhbHVlOiAxMjcgfV07XG4gICAgICAgICAgZW5kLnZhbHVlcy5wdXNoKC4uLnRpY2tzKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBub3RlcyA9IHRpY2tzLmZpbmRJbmRleCh4ID0+IFsnbm90ZScsICdjaG9yZCcsICdwYXJhbSddLmluY2x1ZGVzKHgudHlwZSkpO1xuICAgICAgICBjb25zdCBpbmRleCA9IHRpY2tzLmZpbmRJbmRleCh4ID0+IHgudHlwZSA9PT0gJ3BhdHRlcm4nKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBpbmRleCA+IDAgPyB0aWNrcy5zbGljZShpbmRleCkgOiB0aWNrcztcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdmFsdWUuZmluZEluZGV4KHggPT4geC50eXBlICE9PSAncGF0dGVybicpO1xuICAgICAgICBjb25zdCBpbnB1dHMgPSB0aWNrcy5zbGljZSgwLCBpbmRleCA+IDAgPyBpbmRleCA6IDEpO1xuXG4gICAgICAgIGNoYW5uZWwgPSBwcmVmaXggKyBpbnB1dHNbMF0udmFsdWU7XG4gICAgICAgIGlmICghaW5mb1tjaGFubmVsXSkge1xuICAgICAgICAgIGluZm9bY2hhbm5lbF0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzcGVjO1xuICAgICAgICBpZiAobm90ZXMgPiAwICYmIGluZGV4ID09PSAtMSkge1xuICAgICAgICAgIGNvbnN0IGVuZCA9IGluZm9bY2hhbm5lbF1baW5mb1tjaGFubmVsXS5sZW5ndGggLSAxXTtcblxuICAgICAgICAgIGVuZC5kYXRhID0gdmFsdWUuc2xpY2Uobm90ZXMpO1xuICAgICAgICAgIHNwZWMgPSB7XG4gICAgICAgICAgICBpbnB1dDogZW5kLmlucHV0LFxuICAgICAgICAgICAgdmFsdWVzOiB2YWx1ZS5zbGljZSgxLCBub3RlcyksXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChvZmZzZXQgPiAwKSB7XG4gICAgICAgICAgc3BlYyA9IHtcbiAgICAgICAgICAgIGRhdGE6IHZhbHVlLnNsaWNlKG9mZnNldCksXG4gICAgICAgICAgICBpbnB1dDogdmFsdWUuc2xpY2UoMCwgb2Zmc2V0KSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKG9mZnNldCA9PT0gMCkge1xuICAgICAgICAgIHNwZWMgPSB7IHZhbHVlczogdmFsdWUuc2xpY2UoMSkgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzcGVjID0geyBpbnB1dDogdmFsdWUgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbnB1dHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHNwZWMudmFsdWVzID0gaW5wdXRzLnNsaWNlKDEpO1xuICAgICAgICB9XG4gICAgICAgIGluZm9bY2hhbm5lbF0ucHVzaChzcGVjKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zdCBtc2cgPSB0eXBlb2YgZSA9PT0gJ3N0cmluZycgPyBlIDogZS5tZXNzYWdlO1xuXG4gICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYCR7bXNnfVxcbiAgYXQgbGluZSAke250aCArIDF9XFxuJHtsaW5lfWApO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHRyYWNrKSB7XG4gICAgdHJhY2tzW3RyYWNrXSA9IGluZm87XG4gIH1cbiAgcmV0dXJuIHsgbWFpbiwgZGF0YSwgdHJhY2tzIH07XG59XG4iLCAiaW1wb3J0IHsgVXRpbHMgfSBmcm9tICdtaWRpLXdyaXRlci1qcyc7XG5pbXBvcnQgeyBGaWxlLCBUcmFjayB9IGZyb20gJ2pzbWlkZ2VuJztcbmltcG9ydCB7IHppcCwgZmxhdHRlbiB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgc3BsaXQsIGlzUGF0dGVybiB9IGZyb20gJy4vdG9rZW5pemUnO1xuaW1wb3J0IHsgcmVkdWNlIH0gZnJvbSAnLi9wYXJzZXInO1xuXG5jb25zdCBERUZBVUxUID0gU3ltYm9sKCdAbWFpbicpO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGQobWlkaSwgYnBtID0gMTIwLCBsZW5ndGggPSAxNikge1xuICBjb25zdCBmaWxlID0gbmV3IEZpbGUoKTtcbiAgY29uc3QgcSA9IDE2O1xuICBjb25zdCBvID0ge307XG5cbiAgYnBtICo9IGxlbmd0aCAvIHE7XG5cbiAgbGV0IGNoID0gMDtcbiAgZnVuY3Rpb24gZ2V0KG50aCwgbmFtZSkge1xuICAgIGNvbnN0IGtleSA9IG50aCArIG5hbWU7XG5cbiAgICBpZiAoIWdldFtrZXldKSB7XG4gICAgICBjb25zdCB0cmFjayA9IG5ldyBUcmFjaygpO1xuICAgICAgY29uc3QgY2hhbiA9IG50aCA9PT0gJzAnID8gOSA6IGNoO1xuXG4gICAgICBmaWxlLmFkZFRyYWNrKHRyYWNrKTtcbiAgICAgIGdldFtrZXldID0geyBjaGFuLCB0cmFjayB9O1xuICAgICAgaWYgKG50aCAhPT0gJzAnKSBjaCArPSAxO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0W2tleV07XG4gIH1cblxuICBtaWRpLmZvckVhY2goc2VjdGlvbiA9PiB7XG4gICAgc2VjdGlvbi5mb3JFYWNoKHBhcnRzID0+IHtcbiAgICAgIHBhcnRzLmZvckVhY2goZSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY2hhbiwgdHJhY2sgfSA9IGdldChlWzBdLCBlWzFdKTtcblxuICAgICAgICB0cmFjay5zZXRUZW1wbyhicG0pO1xuICAgICAgICBpZiAoY2hhbiAhPT0gOSkge1xuICAgICAgICAgIHRyYWNrLmluc3RydW1lbnQoY2hhbiwgZVswXSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVbMl0ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBjb25zdCB0aWNrID0gZVsyXVtpXTtcblxuICAgICAgICAgIGlmICh0aWNrLnYgPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBub3RlID0gdGljay5uIHx8ICdDMyc7XG5cbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG5vdGUpKSB7XG4gICAgICAgICAgICAgIHRyYWNrLm5vdGVPZmYoY2hhbiwgJycsIHEpO1xuICAgICAgICAgICAgICB0cmFjay5hZGRDaG9yZChjaGFuLCBub3RlLCBxLCB0aWNrLnYpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdHJhY2subm90ZU9uKGNoYW4sIG5vdGUsIHEsIHRpY2sudik7XG4gICAgICAgICAgICAgIHRyYWNrLm5vdGVPZmYoY2hhbiwgbm90ZSwgcSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyYWNrLm5vdGVPZmYoY2hhbiwgJycsIHEgKiAyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIGZpbGUudG9CeXRlcygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFjayh2YWx1ZXMsIG5vdGVzKSB7XG4gIGxldCBvZmZzZXQ7XG4gIGZ1bmN0aW9uIHJlc29sdmUoeCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHgpKSB7XG4gICAgICByZXR1cm4geC5tYXAocmVzb2x2ZSk7XG4gICAgfVxuXG4gICAgbGV0IHRva2VuO1xuICAgIGlmICghJy14XycuaW5jbHVkZXMoeCkpIHtcbiAgICAgIHRva2VuID0geyB2OiAxMjcsIGw6IHggfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9rZW4gPSB7IHY6IHggPT09ICctJyA/IDAgOiAxMjcgfTtcbiAgICB9XG5cbiAgICBpZiAoeCAhPT0gJy0nKSB7XG4gICAgICB0b2tlbi52ID0gdHlwZW9mIHZhbHVlc1tvZmZzZXRdICE9PSAndW5kZWZpbmVkJyA/IHZhbHVlc1tvZmZzZXRdIDogdG9rZW4udiB8fCAwO1xuICAgICAgaWYgKHR5cGVvZiBub3Rlc1tvZmZzZXRdICE9PSAndW5kZWZpbmVkJykgdG9rZW4ubiA9IG5vdGVzW29mZnNldF07XG4gICAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMSkgdG9rZW4udiA9IHZhbHVlc1swXTtcbiAgICAgIGlmICh0b2tlbi52IHx8IHRva2VuLm4pIG9mZnNldCArPSAxO1xuICAgIH1cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICByZXR1cm4gdmFsdWUgPT4ge1xuICAgIGxldCByZXN1bHQgPSB2YWx1ZTtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKGlzUGF0dGVybih2YWx1ZSkpIHtcbiAgICAgICAgb2Zmc2V0ID0gMDtcbiAgICAgICAgcmVzdWx0ID0gc3BsaXQodmFsdWUpLm1hcChyZXNvbHZlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlKGN0eCkge1xuICBjb25zdCBzY2VuZXMgPSB7fTtcblxuICBPYmplY3QuZW50cmllcyhjdHgudHJhY2tzKS5mb3JFYWNoKChbbmFtZSwgY2hhbm5lbHNdKSA9PiB7XG4gICAgT2JqZWN0LmVudHJpZXMoY2hhbm5lbHMpLmZvckVhY2goKFtjaCwgY2xpcHNdKSA9PiB7XG4gICAgICBjb25zdCBbdGFnLCBtaWRpXSA9IGNoLnNwbGl0KCcjJyk7XG4gICAgICBjb25zdCBrZXkgPSB0YWcgfHwgREVGQVVMVDtcblxuICAgICAgbGV0IHRpY2tzO1xuICAgICAgbGV0IGluYyA9IDA7XG4gICAgICBjbGlwcy5mb3JFYWNoKGNsaXAgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBjbGlwLnZhbHVlcyA/IHJlZHVjZShjbGlwLnZhbHVlcywgY3R4LmRhdGEpIDogW107XG4gICAgICAgIGNvbnN0IG5vdGVzID0gY2xpcC5kYXRhID8gcmVkdWNlKGNsaXAuZGF0YSwgY3R4LmRhdGEpIDogW107XG5cbiAgICAgICAgaWYgKGNsaXAuaW5wdXQpIHtcbiAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA+IDEpIHZhbHVlcy5zaGlmdCgpO1xuXG4gICAgICAgICAgY29uc3QgaW5wdXQgPSBmbGF0dGVuKHJlZHVjZShjbGlwLmlucHV0LCBjdHguZGF0YSwgcGFjayh2YWx1ZXMsIG5vdGVzKSkpO1xuXG4gICAgICAgICAgaWYgKCF0aWNrcykge1xuICAgICAgICAgICAgdGlja3MgPSBpbnB1dDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB6aXAodGlja3MsIGlucHV0LCAoYSwgYikgPT4ge1xuICAgICAgICAgICAgaWYgKGIudiA+IDApIGEudiA9IGIudjtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aWNrcykge1xuICAgICAgICAgIGNvbnN0IG1vZGUgPSBjbGlwLnZhbHVlc1xuICAgICAgICAgICAgJiYgY2xpcC52YWx1ZXNbMF1cbiAgICAgICAgICAgICYmIGNsaXAudmFsdWVzWzBdLnR5cGUgPT09ICdtb2RlJyA/IGNsaXAudmFsdWVzWzBdLnZhbHVlIDogbnVsbDtcblxuICAgICAgICAgIHRpY2tzLmZvckVhY2godGljayA9PiB7XG4gICAgICAgICAgICBpZiAodGljay52ID4gMCkge1xuICAgICAgICAgICAgICBpZiAoIXRpY2subiAmJiBub3Rlcy5sZW5ndGggPiAwKSB0aWNrLm4gPSBub3Rlcy5zaGlmdCgpO1xuICAgICAgICAgICAgICBpZiAobW9kZSAmJiB2YWx1ZXMubGVuZ3RoID4gMCkgdGlja1ttb2RlWzBdLnRvTG93ZXJDYXNlKCldID0gdmFsdWVzLnNoaWZ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXNjZW5lc1trZXldKSBzY2VuZXNba2V5XSA9IHsgdHJhY2tzOiBbXSB9O1xuICAgICAgc2NlbmVzW2tleV0udHJhY2tzLnB1c2goW21pZGksIG5hbWUsIHRpY2tzXSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGlmICghY3R4Lm1haW4ubGVuZ3RoKSB7XG4gICAgY3R4Lm1haW4gPSBbW3sgdHlwZTogJ3ZhbHVlJywgdmFsdWU6IERFRkFVTFQgfV1dO1xuICB9XG5cbiAgcmV0dXJuIGN0eC5tYWluLm1hcCh0cmFjayA9PiB7XG4gICAgcmV0dXJuIHJlZHVjZSh0cmFjaywgc2NlbmVzKS5tYXAoaXRlbSA9PiB7XG4gICAgICByZXR1cm4gW10uY29uY2F0KGl0ZW0pLnJlZHVjZSgobWVtbywgeCkgPT4ge1xuICAgICAgICBtZW1vLnB1c2goLi4ueC50cmFja3MpO1xuICAgICAgICByZXR1cm4gbWVtbztcbiAgICAgIH0sIFtdKTtcbiAgICB9KTtcbiAgfSk7XG59XG4iLCAiZXhwb3J0IHsgbWVyZ2UgfSBmcm9tICcuL21peHVwJztcbmV4cG9ydCB7IHBhcnNlIH0gZnJvbSAnLi9wYXJzZXInO1xuZXhwb3J0ICogZnJvbSAnLi91dGlscyc7XG5leHBvcnQgKiBmcm9tICcuL21peHVwJztcbmV4cG9ydCAqIGZyb20gJy4v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QztBQUVBLGVBQWUsWUFBWTtBQUN6QixRQUFNLFNBQVMsSUFBSSxnQkFBZ0IsT0FBTyxTQUFTLE1BQU07QUFDekQsUUFBTSxnQkFBZ0IsT0FBTyxJQUFJLE1BQU07QUFDdkMsUUFBTSxlQUFlLE1BQU0sb0JBQW9CO0FBQy9DLFFBQU0sU0FBUyxVQUFVLGNBQWMsYUFBYTtBQUNwRCxzQkFBb0I7QUFDcEIsUUFBTSxPQUFPLFFBQVEsT0FBTyxTQUFTLENBQUM7QUFDdEMsSUFBRSxlQUFlLE1BQU0sT0FBTyxNQUFNLFNBQVM7QUFDN0MsWUFBVSxJQUFJO0FBQ2QsaUJBQWU7QUFDZix3QkFBc0IsYUFBYTtBQUNyQztBQUVBLFVBQVU7QUFFVixJQUFPLGNBQVEsQ0FBQzsiLAogICJuYW1lcyI6IFsibWlkaSIsICJtIiwgInAiLCAibm90ZSIsICJtIiwgIm9iaiIsICJwIiwgIl9zZXRQcm90b3R5cGVPZiIsICJvIiwgIlV0aWxzIiwgIk5vdGVPbkV2ZW50IiwgIk5vdGVPZmZFdmVudCIsICJOb3RlRXZlbnQiLCAic2NhbGUxNGJpdHMiLCAiUGl0Y2hCZW5kRXZlbnQiLCAiUHJvZ3JhbUNoYW5nZUV2ZW50IiwgIkNvbnRyb2xsZXJDaGFuZ2VFdmVudCIsICJDb3B5cmlnaHRFdmVudCIsICJDdWVQb2ludEV2ZW50IiwgIkVuZFRyYWNrRXZlbnQiLCAiSW5zdHJ1bWVudE5hbWVFdmVudCIsICJLZXlTaWduYXR1cmVFdmVudCIsICJub3RlIiwgIkx5cmljRXZlbnQiLCAiTWFya2VyRXZlbnQiLCAiVGVtcG9FdmVudCIsICJ0ZW1wbyIsICJUZXh0RXZlbnQiLCAiVGltZVNpZ25hdHVyZUV2ZW50IiwgIlRyYWNrTmFtZUV2ZW50IiwgIlRyYWNrIiwgIlZleEZsb3ciLCAiSGVhZGVyQ2h1bmsiLCAiV3JpdGVyIiwgImJ1aWxkIiwgIlBsYXllciIsICJ0ZW1wbyIsICJ0cmFuc3Bvc2UiLCAibm90ZSIsICJyZXF1aXJlX21haW4iLCAibiIsICJhIiwgImkiLCAiciIsICJlIiwgIm0iLCAibyIsICJ0IiwgInMiLCAiYyIsICJwIiwgInBpY2tPbmUiLCAiZGljZSIsICJpbml0X3V0aWxzIiwgInByb2dyZXNzaW9uX2V4cG9ydHMiLCAiZ2V0Q2hvcmREZWdyZWVzIiwgImdldENob3Jkc0J5UHJvZ3Jlc3Npb24iLCAicHJvZ3Jlc3Npb24iLCAiaW1wb3J0X2hhcm1vbmljcyIsICJpZHhCeURlZ3JlZSIsICJnZXRDaG9yZE5hbWUiLCAiZ2V0UHJvZ0ZhY3RvcnkiLCAiTSIsICJtIiwgImluaXRfcHJvZ3Jlc3Npb24iLCAiaW5pdF91dGlscyIsICJub3RlIiwgInBpY2tPbmUiLCAiZGljZSIsICJyZXF1aXJlX3Rva2VuaXplIiwgInJlcXVpcmVfdXRpbHMiLCAicmVxdWlyZV9wYXJzZXIiLCAiZ2V0Q2hvcmRzQnlQcm9ncmVzc2lvbiIsICJzY2FsZSIsICJyZWR1Y2UiLCAicGFyc2UiLCAiY3JlYXRlRWRpdG9yIiwgImNyZWF0ZU1peGVyIiwgImJhcnMiLCAia2V5IiwgImlzTnVtIiwgImlzU3RyIiwgImlzRGVmIiwgIm1pZGlUb0ZyZXEiLCAibWlkaSIsICJwYXJzZSIsICJtIiwgIlJFR0VYIiwgInAiLCAiU0VNSVRPTkVTIiwgIm5vdGUiLCAiaW5pdF9ub3RlX3BhcnNlciIsICJfX2VzbSIsICJ0b25hbF9taWRpX2V4cG9ydHMiLCAiX19leHBvcnQiLCAidG9NaWRpIiwgIlNIQVJQUyIsICJGTEFUUyIsICJpbml0X3RvbmFsX21pZGkiLCAicmVxdWlyZV9wYWNrYWdlIiwgIl9fY29tbW9uSlMiLCAicmVxdWlyZV9idWlsZCIsICJfX3RvQ29tbW9uSlMiLCAib2JqIiwgIl9zZXRQcm90b3R5cGVPZiIsICJvIiwgIlV0aWxzIiwgIk5vdGVPbkV2ZW50IiwgIk5vdGVPZmZFdmVudCIsICJOb3RlRXZlbnQiLCAic2NhbGUxNGJpdHMiLCAiUGl0Y2hCZW5kRXZlbnQiLCAiUHJvZ3JhbUNoYW5nZUV2ZW50IiwgIkNvbnRyb2xsZXJDaGFuZ2VFdmVudCIsICJDb3B5cmlnaHRFdmVudCIsICJDdWVQb2ludEV2ZW50IiwgIkVuZFRyYWNrRXZlbnQiLCAiSW5zdHJ1bWVudE5hbWVFdmVudCIsICJLZXlTaWduYXR1cmVFdmVudCIsICJMeXJpY0V2ZW50IiwgIk1hcmtlckV2ZW50IiwgIlRlbXBvRXZlbnQiLCAidGVtcG8iLCAiVGV4dEV2ZW50IiwgIlRpbWVTaWduYXR1cmVFdmVudCIsICJUcmFja05hbWVFdmVudCIsICJUcmFjayIsICJWZXhGbG93IiwgIkhlYWRlckNodW5rIiwgIldyaXRlciIsICJidWlsZCIsICJuIiwgImEiLCAiaSIsICJyIiwgImUiLCAidCIsICJzIiwgImMiLCAiX190b0VTTSIsICJnZXRDaG9yZHNCeVByb2dyZXNzaW9uIiwgInNjYWxlIiwgInJlZHVjZSIsICJtZXJnZSIsICJpbXBvcnRfcGFyc2VyIiwgIlBsYXllciIsICJtaWRpIiwgInByZXNldFNlbGVjdCJdCn0K
