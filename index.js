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
    function span(cls, value, attrs = {}) {
      const dataAttrs = Object.entries(attrs).map(([key, attrValue]) => ` data-${key}="${esc(attrValue)}"`).join("");
      return `<span class="${cls}"${dataAttrs}>${esc(value)}</span>`;
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
      if (cls === "tok-var-ref" && token !== "%") return span(cls, token, { var: token });
      if (cls === "tok-channel") return span(cls, token, { instrument: token.slice(1) });
      if (cls === "tok-mode") return span(cls, token, { mode: token.toLowerCase() });
      if (cls === "tok-pattern") return span(cls, token, { pattern: "1" });
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
        const indent = esc(base.match(/^\s*/)[0]);
        const body = base.trimStart().slice(1).replace(/^\s*/, " ");
        const rendered = body.split(/(\s+)/).map((part) => {
          if (!part || /\s+/.test(part)) return part;
          if (/^[A-Z][A-Z0-9]*$/.test(part)) return span("tok-section", part, { section: part });
          return renderToken(part);
        }).join("");
        return `${indent}${span("tok-arrangement", ">")}${rendered}`;
      }
      if (/^\s*%[^\s]+\s+/.test(base)) {
        return base.replace(/^(\s*)(%[^\s]+)(\s*)(.*)$/, (_, i, v, s, rest) => `${esc(i)}${span("tok-var-def", v, { var: v })}${esc(s)}${renderTokens(rest)}`);
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
      const tooltipHandlers = [
        options.resolveInstrument && {
          attr: "instrument",
          resolve: options.resolveInstrument,
          title: (value) => `#${value}`
        },
        options.resolveMode && {
          attr: "mode",
          resolve: options.resolveMode,
          title: (value) => value
        },
        options.resolveSection && {
          attr: "section",
          resolve: options.resolveSection,
          title: (value) => `@${value}`
        },
        options.resolveVar && {
          attr: "var",
          resolve: options.resolveVar,
          title: (value) => value
        },
        {
          attr: "pattern",
          resolve: () => "x = hit  |  - = hold  |  _ = rest  |  [ ] = subdivide",
          title: () => "Rhythm pattern"
        }
      ].filter(Boolean);
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
        const elements = document.elementsFromPoint(e.clientX, e.clientY);
        const found = tooltipHandlers.map((handler) => {
          const hit = elements.find((el) => el.dataset && el.dataset[handler.attr]);
          return hit ? { handler, value: hit.dataset[handler.attr] } : null;
        }).find(Boolean);
        if (!found) {
          hideTooltip();
          return;
        }
        const text = found.handler.resolve(found.value);
        if (!text) {
          hideTooltip();
          return;
        }
        const pos = clampTooltip(e.clientX, e.clientY);
        tipTitle.textContent = found.handler.title(found.value);
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
        name.title = label;
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
            strip.name.title = item.name;
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
var SCALE_INFO = {
  major: "W W H W W W H  -  do re mi fa sol la ti",
  minor: "W H W W H W W  -  do re mib fa sol lab sib",
  dorian: "W H W W W H W  -  minor with raised 6th",
  phrygian: "H W W W H W W  -  minor with lowered 2nd",
  lydian: "W W W H W W H  -  major with raised 4th",
  mixolydian: "W W H W W H W  -  major with lowered 7th",
  locrian: "H W W H W W W  -  diminished flavor"
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
function resolveInstrumentTooltip(value) {
  const n = parseInt(value, 10);
  if (Number.isNaN(n)) return null;
  try {
    const info = n >= 2e3 ? p.player.loader.drumInfo(n - 2e3) : p.player.loader.instrumentInfo(n);
    return info && info.title ? info.title : null;
  } catch (e) {
    return null;
  }
}
function resolveModeTooltip(name) {
  if (!name) return null;
  return SCALE_INFO[name.toLowerCase()] || null;
}
function resolveSectionTooltip(name) {
  if (!editorApi) return null;
  const lines = editorApi.getValue().split("\n");
  const sectionHeader = `@${name}`;
  const start = lines.findIndex((line) => line.trim() === sectionHeader);
  if (start < 0) return null;
  const preview = [];
  for (let i = start + 1; i < lines.length && preview.length < 4; i += 1) {
    const line = lines[i];
    if (/^\s*@/.test(line)) break;
    if (line.trim()) preview.push(line.trim());
  }
  return preview.length ? preview.join(" | ") : null;
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
    resolveInstrument: resolveInstrumentTooltip,
    resolveMode: resolveModeTooltip,
    resolveSection: resolveSectionTooltip,
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL25vdGUtcGFyc2VyL2luZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy90b25hbC1taWRpL2luZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy9taWRpLXdyaXRlci1qcy9wYWNrYWdlLmpzb24iLCAibm9kZV9tb2R1bGVzL21pZGktd3JpdGVyLWpzL2J1aWxkL2luZGV4LmpzIiwgInNyYy9jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL3BsYXllci5qcyIsICJub2RlX21vZHVsZXMvaGFybW9uaWNzL21haW4uanMiLCAibm9kZV9tb2R1bGVzL3NjcmliYmxldHVuZS9zcmMvdXRpbHMudHMiLCAibm9kZV9tb2R1bGVzL3NjcmliYmxldHVuZS9zcmMvcHJvZ3Jlc3Npb24udHMiLCAic3JjL2xpYi9zcmMvbGliL3NyYy9saWIvdG9rZW5pemUuanMiLCAic3JjL2xpYi9zcmMvbGliL3NyYy9saWIvdXRpbHMuanMiLCAic3JjL2xpYi9zcmMvbGliL3NyYy9saWIvcGFyc2VyLmpzIiwgInNyYy9zcmMvc3JjL2hpZ2hsaWdodC5qcyIsICJzcmMvY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9lZGl0b3IuanMiLCAic3JjL2NvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvbWl4ZXIuanMiLCAic3JjL3NyYy9pbmRleC5qcyIsICJzcmMvbGliL25vZGVfbW9kdWxlcy9ub3RlLXBhcnNlci9pbmRleC5qcyIsICJzcmMvbGliL25vZGVfbW9kdWxlcy90b25hbC1taWRpL2luZGV4LmpzIiwgInNyYy9saWIvbm9kZV9tb2R1bGVzL21pZGktd3JpdGVyLWpzL3BhY2thZ2UuanNvbiIsICJzcmMvbGliL25vZGVfbW9kdWxlcy9taWRpLXdyaXRlci1qcy9idWlsZC9pbmRleC5qcyIsICJzcmMvbGliL25vZGVfbW9kdWxlcy9qc21pZGdlbi9saWIvanNtaWRnZW4uanMiLCAic3JjL2xpYi9zcmMvbGliL3NyYy9saWIvc3JjL2xpYi91dGlscy5qcyIsICJzcmMvbGliL25vZGVfbW9kdWxlcy9oYXJtb25pY3MvbWFpbi5qcyIsICJzcmMvbGliL3NyYy9saWIvc3JjL2xpYi9zcmMvbGliL3Rva2VuaXplLmpzIiwgInNyYy9saWIvbm9kZV9tb2R1bGVzL3NjcmliYmxldHVuZS9zcmMvdXRpbHMudHMiLCAic3JjL2xpYi9ub2RlX21vZHVsZXMvc2NyaWJibGV0dW5lL3NyYy9wcm9ncmVzc2lvbi50cyIsICJzcmMvbGliL3NyYy9saWIvc3JjL2xpYi9zcmMvbGliL3BhcnNlci5qcyIsICJzcmMvbGliL3NyYy9saWIvc3JjL2xpYi9zcmMvbGliL21peHVwLmpzIiwgInNyYy9saWIvc3JjL2xpYi9zcmMvbGliL2luZGV4LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCdcblxuLy8gdXRpbFxuZnVuY3Rpb24gZmlsbFN0ciAocywgbnVtKSB7IHJldHVybiBBcnJheShudW0gKyAxKS5qb2luKHMpIH1cbmZ1bmN0aW9uIGlzTnVtICh4KSB7IHJldHVybiB0eXBlb2YgeCA9PT0gJ251bWJlcicgfVxuZnVuY3Rpb24gaXNTdHIgKHgpIHsgcmV0dXJuIHR5cGVvZiB4ID09PSAnc3RyaW5nJyB9XG5mdW5jdGlvbiBpc0RlZiAoeCkgeyByZXR1cm4gdHlwZW9mIHggIT09ICd1bmRlZmluZWQnIH1cbmZ1bmN0aW9uIG1pZGlUb0ZyZXEgKG1pZGksIHR1bmluZykge1xuICByZXR1cm4gTWF0aC5wb3coMiwgKG1pZGkgLSA2OSkgLyAxMikgKiAodHVuaW5nIHx8IDQ0MClcbn1cblxudmFyIFJFR0VYID0gL14oW2EtZ0EtR10pKCN7MSx9fGJ7MSx9fHh7MSx9fCkoLT9cXGQqKVxccyooLiopXFxzKiQvXG4vKipcbiAqIEEgcmVnZXggZm9yIG1hdGNoaW5nIG5vdGUgc3RyaW5ncyBpbiBzY2llbnRpZmljIG5vdGF0aW9uLlxuICpcbiAqIEBuYW1lIHJlZ2V4XG4gKiBAZnVuY3Rpb25cbiAqIEByZXR1cm4ge1JlZ0V4cH0gdGhlIHJlZ2V4cCB1c2VkIHRvIHBhcnNlIHRoZSBub3RlIG5hbWVcbiAqXG4gKiBUaGUgbm90ZSBzdHJpbmcgc2hvdWxkIGhhdmUgdGhlIGZvcm0gYGxldHRlclthY2NpZGVudGFsc11bb2N0YXZlXVtlbGVtZW50XWBcbiAqIHdoZXJlOlxuICpcbiAqIC0gbGV0dGVyOiAoUmVxdWlyZWQpIGlzIGEgbGV0dGVyIGZyb20gQSB0byBHIGVpdGhlciB1cHBlciBvciBsb3dlciBjYXNlXG4gKiAtIGFjY2lkZW50YWxzOiAoT3B0aW9uYWwpIGNhbiBiZSBvbmUgb3IgbW9yZSBgYmAgKGZsYXRzKSwgYCNgIChzaGFycHMpIG9yIGB4YCAoZG91YmxlIHNoYXJwcykuXG4gKiBUaGV5IGNhbiBOT1QgYmUgbWl4ZWQuXG4gKiAtIG9jdGF2ZTogKE9wdGlvbmFsKSBhIHBvc2l0aXZlIG9yIG5lZ2F0aXZlIGludGVnZXJcbiAqIC0gZWxlbWVudDogKE9wdGlvbmFsKSBhZGRpdGlvbmFsbHkgYW55dGhpbmcgYWZ0ZXIgdGhlIGR1cmF0aW9uIGlzIGNvbnNpZGVyZWQgdG9cbiAqIGJlIHRoZSBlbGVtZW50IG5hbWUgKGZvciBleGFtcGxlOiAnQzIgZG9yaWFuJylcbiAqXG4gKiBUaGUgZXhlY3V0ZWQgcmVnZXggY29udGFpbnMgKGJ5IGFycmF5IGluZGV4KTpcbiAqXG4gKiAtIDA6IHRoZSBjb21wbGV0ZSBzdHJpbmdcbiAqIC0gMTogdGhlIG5vdGUgbGV0dGVyXG4gKiAtIDI6IHRoZSBvcHRpb25hbCBhY2NpZGVudGFsc1xuICogLSAzOiB0aGUgb3B0aW9uYWwgb2N0YXZlXG4gKiAtIDQ6IHRoZSByZXN0IG9mIHRoZSBzdHJpbmcgKHRyaW1tZWQpXG4gKlxuICogQGV4YW1wbGVcbiAqIHZhciBwYXJzZXIgPSByZXF1aXJlKCdub3RlLXBhcnNlcicpXG4gKiBwYXJzZXIucmVnZXguZXhlYygnYyM0JylcbiAqIC8vID0+IFsnYyM0JywgJ2MnLCAnIycsICc0JywgJyddXG4gKiBwYXJzZXIucmVnZXguZXhlYygnYyM0IG1ham9yJylcbiAqIC8vID0+IFsnYyM0bWFqb3InLCAnYycsICcjJywgJzQnLCAnbWFqb3InXVxuICogcGFyc2VyLnJlZ2V4KCkuZXhlYygnQ01hajcnKVxuICogLy8gPT4gWydDTWFqNycsICdDJywgJycsICcnLCAnTWFqNyddXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdleCAoKSB7IHJldHVybiBSRUdFWCB9XG5cbnZhciBTRU1JVE9ORVMgPSBbMCwgMiwgNCwgNSwgNywgOSwgMTFdXG4vKipcbiAqIFBhcnNlIGEgbm90ZSBuYW1lIGluIHNjaWVudGlmaWMgbm90YXRpb24gYW4gcmV0dXJuIGl0J3MgY29tcG9uZW50cyxcbiAqIGFuZCBzb21lIG51bWVyaWMgcHJvcGVydGllcyBpbmNsdWRpbmcgbWlkaSBudW1iZXIgYW5kIGZyZXF1ZW5jeS5cbiAqXG4gKiBAbmFtZSBwYXJzZVxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbm90ZSAtIHRoZSBub3RlIHN0cmluZyB0byBiZSBwYXJzZWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNUb25pYyAtIHRydWUgdGhlIHN0cmluZ3MgaXQncyBzdXBwb3NlZCB0byBjb250YWluIGEgbm90ZSBudW1iZXJcbiAqIGFuZCBzb21lIGNhdGVnb3J5IChmb3IgZXhhbXBsZSBhbiBzY2FsZTogJ0MjIG1ham9yJykuIEl0J3MgZmFsc2UgYnkgZGVmYXVsdCxcbiAqIGJ1dCB3aGVuIHRydWUsIGVuIGV4dHJhIHRvbmljT2YgcHJvcGVydHkgaXMgcmV0dXJuZWQgd2l0aCB0aGUgY2F0ZWdvcnkgKCdtYWpvcicpXG4gKiBAcGFyYW0ge0Zsb2F0fSB0dW5uaW5nIC0gVGhlIGZyZXF1ZW5jeSBvZiBBNCBub3RlIHRvIGNhbGN1bGF0ZSBmcmVxdWVuY2llcy5cbiAqIEJ5IGRlZmF1bHQgaXQgNDQwLlxuICogQHJldHVybiB7T2JqZWN0fSB0aGUgcGFyc2VkIG5vdGUgbmFtZSBvciBudWxsIGlmIG5vdCBhIHZhbGlkIG5vdGVcbiAqXG4gKiBUaGUgcGFyc2VkIG5vdGUgbmFtZSBvYmplY3Qgd2lsbCBBTFdBWVMgY29udGFpbnM6XG4gKiAtIGxldHRlcjogdGhlIHVwcGVyY2FzZSBsZXR0ZXIgb2YgdGhlIG5vdGVcbiAqIC0gYWNjOiB0aGUgYWNjaWRlbnRhbHMgb2YgdGhlIG5vdGUgKG9ubHkgc2hhcnBzIG9yIGZsYXRzKVxuICogLSBwYzogdGhlIHBpdGNoIGNsYXNzIChsZXR0ZXIgKyBhY2MpXG4gKiAtIHN0ZXA6IHMgYSBudW1lcmljIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBsZXR0ZXIuIEl0J3MgYW4gaW50ZWdlciBmcm9tIDAgdG8gNlxuICogd2hlcmUgMCA9IEMsIDEgPSBEIC4uLiA2ID0gQlxuICogLSBhbHQ6IGEgbnVtZXJpYyByZXByZXNlbnRhdGlvbiBvZiB0aGUgYWNjaWRlbnRhbHMuIDAgbWVhbnMgbm8gYWx0ZXJhdGlvbixcbiAqIHBvc2l0aXZlIG51bWJlcnMgYXJlIGZvciBzaGFycHMgYW5kIG5lZ2F0aXZlIGZvciBmbGF0c1xuICogLSBjaHJvbWE6IGEgbnVtZXJpYyByZXByZXNlbnRhdGlvbiBvZiB0aGUgcGl0Y2ggY2xhc3MuIEl0J3MgbGlrZSBtaWRpIGZvclxuICogcGl0Y2ggY2xhc3Nlcy4gMCA9IEMsIDEgPSBDIywgMiA9IEQgLi4uIDExID0gQi4gQ2FuIGJlIHVzZWQgdG8gZmluZCBlbmhhcm1vbmljc1xuICogc2luY2UsIGZvciBleGFtcGxlLCBjaHJvbWEgb2YgJ0NiJyBhbmQgJ0InIGFyZSBib3RoIDExXG4gKlxuICogSWYgdGhlIG5vdGUgaGFzIG9jdGF2ZSwgdGhlIHBhcnNlciBvYmplY3Qgd2lsbCBjb250YWluOlxuICogLSBvY3Q6IHRoZSBvY3RhdmUgbnVtYmVyIChhcyBpbnRlZ2VyKVxuICogLSBtaWRpOiB0aGUgbWlkaSBudW1iZXJcbiAqIC0gZnJlcTogdGhlIGZyZXF1ZW5jeSAodXNpbmcgdHVuaW5nIHBhcmFtZXRlciBhcyBiYXNlKVxuICpcbiAqIElmIHRoZSBwYXJhbWV0ZXIgYGlzVG9uaWNgIGlzIHNldCB0byB0cnVlLCB0aGUgcGFyc2VkIG9iamVjdCB3aWxsIGNvbnRhaW46XG4gKiAtIHRvbmljT2Y6IHRoZSByZXN0IG9mIHRoZSBzdHJpbmcgdGhhdCBmb2xsb3dzIG5vdGUgbmFtZSAobGVmdCBhbmQgcmlnaHQgdHJpbW1lZClcbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIHBhcnNlID0gcmVxdWlyZSgnbm90ZS1wYXJzZXInKS5wYXJzZVxuICogcGFyc2UoJ0NiNCcpXG4gKiAvLyA9PiB7IGxldHRlcjogJ0MnLCBhY2M6ICdiJywgcGM6ICdDYicsIHN0ZXA6IDAsIGFsdDogLTEsIGNocm9tYTogLTEsXG4gKiAgICAgICAgIG9jdDogNCwgbWlkaTogNTksIGZyZXE6IDI0Ni45NDE2NTA2MjgwNjIwNiB9XG4gKiAvLyBpZiBubyBvY3RhdmUsIG5vIG1pZGksIG5vIGZyZXFcbiAqIHBhcnNlKCdmeCcpXG4gKiAvLyA9PiB7IGxldHRlcjogJ0YnLCBhY2M6ICcjIycsIHBjOiAnRiMjJywgc3RlcDogMywgYWx0OiAyLCBjaHJvbWE6IDcgfSlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlIChzdHIsIGlzVG9uaWMsIHR1bmluZykge1xuICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHJldHVybiBudWxsXG4gIHZhciBtID0gUkVHRVguZXhlYyhzdHIpXG4gIGlmICghbSB8fCAoIWlzVG9uaWMgJiYgbVs0XSkpIHJldHVybiBudWxsXG5cbiAgdmFyIHAgPSB7IGxldHRlcjogbVsxXS50b1VwcGVyQ2FzZSgpLCBhY2M6IG1bMl0ucmVwbGFjZSgveC9nLCAnIyMnKSB9XG4gIHAucGMgPSBwLmxldHRlciArIHAuYWNjXG4gIHAuc3RlcCA9IChwLmxldHRlci5jaGFyQ29kZUF0KDApICsgMykgJSA3XG4gIHAuYWx0ID0gcC5hY2NbMF0gPT09ICdiJyA/IC1wLmFjYy5sZW5ndGggOiBwLmFjYy5sZW5ndGhcbiAgdmFyIHBvcyA9IFNFTUlUT05FU1twLnN0ZXBdICsgcC5hbHRcbiAgcC5jaHJvbWEgPSBwb3MgPCAwID8gMTIgKyBwb3MgOiBwb3MgJSAxMlxuICBpZiAobVszXSkgeyAvLyBoYXMgb2N0YXZlXG4gICAgcC5vY3QgPSArbVszXVxuICAgIHAubWlkaSA9IHBvcyArIDEyICogKHAub2N0ICsgMSlcbiAgICBwLmZyZXEgPSBtaWRpVG9GcmVxKHAubWlkaSwgdHVuaW5nKVxuICB9XG4gIGlmIChpc1RvbmljKSBwLnRvbmljT2YgPSBtWzRdXG4gIHJldHVybiBwXG59XG5cbnZhciBMRVRURVJTID0gJ0NERUZHQUInXG5mdW5jdGlvbiBhY2NTdHIgKG4pIHsgcmV0dXJuICFpc051bShuKSA/ICcnIDogbiA8IDAgPyBmaWxsU3RyKCdiJywgLW4pIDogZmlsbFN0cignIycsIG4pIH1cbmZ1bmN0aW9uIG9jdFN0ciAobikgeyByZXR1cm4gIWlzTnVtKG4pID8gJycgOiAnJyArIG4gfVxuXG4vKipcbiAqIENyZWF0ZSBhIHN0cmluZyBmcm9tIGEgcGFyc2VkIG9iamVjdCBvciBgc3RlcCwgYWx0ZXJhdGlvbiwgb2N0YXZlYCBwYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gdGhlIHBhcnNlZCBkYXRhIG9iamVjdFxuICogQHJldHVybiB7U3RyaW5nfSBhIG5vdGUgc3RyaW5nIG9yIG51bGwgaWYgbm90IHZhbGlkIHBhcmFtZXRlcnNcbiAqIEBzaW5jZSAxLjJcbiAqIEBleGFtcGxlXG4gKiBwYXJzZXIuYnVpbGQocGFyc2VyLnBhcnNlKCdjYjInKSkgLy8gPT4gJ0NiMidcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gaXQgYWNjZXB0cyAoc3RlcCwgYWx0ZXJhdGlvbiwgb2N0YXZlKSBwYXJhbWV0ZXJzOlxuICogcGFyc2VyLmJ1aWxkKDMpIC8vID0+ICdGJ1xuICogcGFyc2VyLmJ1aWxkKDMsIC0xKSAvLyA9PiAnRmInXG4gKiBwYXJzZXIuYnVpbGQoMywgLTEsIDQpIC8vID0+ICdGYjQnXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidWlsZCAocywgYSwgbykge1xuICBpZiAocyA9PT0gbnVsbCB8fCB0eXBlb2YgcyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBudWxsXG4gIGlmIChzLnN0ZXApIHJldHVybiBidWlsZChzLnN0ZXAsIHMuYWx0LCBzLm9jdClcbiAgaWYgKHMgPCAwIHx8IHMgPiA2KSByZXR1cm4gbnVsbFxuICByZXR1cm4gTEVUVEVSUy5jaGFyQXQocykgKyBhY2NTdHIoYSkgKyBvY3RTdHIobylcbn1cblxuLyoqXG4gKiBHZXQgbWlkaSBvZiBhIG5vdGVcbiAqXG4gKiBAbmFtZSBtaWRpXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfEludGVnZXJ9IG5vdGUgLSB0aGUgbm90ZSBuYW1lIG9yIG1pZGkgbnVtYmVyXG4gKiBAcmV0dXJuIHtJbnRlZ2VyfSB0aGUgbWlkaSBudW1iZXIgb2YgdGhlIG5vdGUgb3IgbnVsbCBpZiBub3QgYSB2YWxpZCBub3RlXG4gKiBvciB0aGUgbm90ZSBkb2VzIE5PVCBjb250YWlucyBvY3RhdmVcbiAqIEBleGFtcGxlXG4gKiB2YXIgcGFyc2VyID0gcmVxdWlyZSgnbm90ZS1wYXJzZXInKVxuICogcGFyc2VyLm1pZGkoJ0E0JykgLy8gPT4gNjlcbiAqIHBhcnNlci5taWRpKCdBJykgLy8gPT4gbnVsbFxuICogQGV4YW1wbGVcbiAqIC8vIG1pZGkgbnVtYmVycyBhcmUgYnlwYXNzZWQgKGV2ZW4gYXMgc3RyaW5ncylcbiAqIHBhcnNlci5taWRpKDYwKSAvLyA9PiA2MFxuICogcGFyc2VyLm1pZGkoJzYwJykgLy8gPT4gNjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1pZGkgKG5vdGUpIHtcbiAgaWYgKChpc051bShub3RlKSB8fCBpc1N0cihub3RlKSkgJiYgbm90ZSA+PSAwICYmIG5vdGUgPCAxMjgpIHJldHVybiArbm90ZVxuICB2YXIgcCA9IHBhcnNlKG5vdGUpXG4gIHJldHVybiBwICYmIGlzRGVmKHAubWlkaSkgPyBwLm1pZGkgOiBudWxsXG59XG5cbi8qKlxuICogR2V0IGZyZXEgb2YgYSBub3RlIGluIGhlcnR6cyAoaW4gYSB3ZWxsIHRlbXBlcmVkIDQ0MEh6IEE0KVxuICpcbiAqIEBuYW1lIGZyZXFcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5vdGUgLSB0aGUgbm90ZSBuYW1lIG9yIG5vdGUgbWlkaSBudW1iZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSB0dW5pbmcgLSAoT3B0aW9uYWwpIHRoZSBBNCBmcmVxdWVuY3kgKDQ0MCBieSBkZWZhdWx0KVxuICogQHJldHVybiB7RmxvYXR9IHRoZSBmcmVxIG9mIHRoZSBudW1iZXIgaWYgaGVydHpzIG9yIG51bGwgaWYgbm90IHZhbGlkIG5vdGVcbiAqIEBleGFtcGxlXG4gKiB2YXIgcGFyc2VyID0gcmVxdWlyZSgnbm90ZS1wYXJzZXInKVxuICogcGFyc2VyLmZyZXEoJ0E0JykgLy8gPT4gNDQwXG4gKiBwYXJzZXIuZnJlcSgnQScpIC8vID0+IG51bGxcbiAqIEBleGFtcGxlXG4gKiAvLyBjYW4gY2hhbmdlIHR1bmluZyAoNDQwIGJ5IGRlZmF1bHQpXG4gKiBwYXJzZXIuZnJlcSgnQTQnLCA0NDQpIC8vID0+IDQ0NFxuICogcGFyc2VyLmZyZXEoJ0EzJywgNDQ0KSAvLyA9PiAyMjJcbiAqIEBleGFtcGxlXG4gKiAvLyBpdCBhY2NlcHRzIG1pZGkgbnVtYmVycyAoYXMgbnVtYmVycyBhbmQgYXMgc3RyaW5ncylcbiAqIHBhcnNlci5mcmVxKDY5KSAvLyA9PiA0NDBcbiAqIHBhcnNlci5mcmVxKCc2OScsIDQ0MikgLy8gPT4gNDQyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcmVxIChub3RlLCB0dW5pbmcpIHtcbiAgdmFyIG0gPSBtaWRpKG5vdGUpXG4gIHJldHVybiBtID09PSBudWxsID8gbnVsbCA6IG1pZGlUb0ZyZXEobSwgdHVuaW5nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbGV0dGVyIChzcmMpIHsgcmV0dXJuIChwYXJzZShzcmMpIHx8IHt9KS5sZXR0ZXIgfVxuZXhwb3J0IGZ1bmN0aW9uIGFjYyAoc3JjKSB7IHJldHVybiAocGFyc2Uoc3JjKSB8fCB7fSkuYWNjIH1cbmV4cG9ydCBmdW5jdGlvbiBwYyAoc3JjKSB7IHJldHVybiAocGFyc2Uoc3JjKSB8fCB7fSkucGMgfVxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXAgKHNyYykgeyByZXR1cm4gKHBhcnNlKHNyYykgfHwge30pLnN0ZXAgfVxuZXhwb3J0IGZ1bmN0aW9uIGFsdCAoc3JjKSB7IHJldHVybiAocGFyc2Uoc3JjKSB8fCB7fSkuYWx0IH1cbmV4cG9ydCBmdW5jdGlvbiBjaHJvbWEgKHNyYykgeyByZXR1cm4gKHBhcnNlKHNyYykgfHwge30pLmNocm9tYSB9XG5leHBvcnQgZnVuY3Rpb24gb2N0IChzcmMpIHsgcmV0dXJuIChwYXJzZShzcmMpIHx8IHt9KS5vY3QgfVxuIiwgIi8qKlxuICogQSBtaWRpIG5vdGUgbnVtYmVyIGlzIGEgbnVtYmVyIHJlcHJlc2VudGF0aW9uIG9mIGEgbm90ZSBwaXRjaC4gSXQgY2FuIGJlXG4gKiBpbnRlZ2VycyBzbyBpdCdzIGVxdWFsIHRlbXBlcmVkIHR1bmVkLCBvciBmbG9hdCB0byBpbmRpY2F0ZSBpdCdzIG5vdFxuICogdHVuZWQgaW50byBlcXVhbCB0ZW1lcGVyZWQgc2NhbGUuXG4gKlxuICogVGhpcyBtb2R1bGUgY29udGFpbnMgZnVuY3Rpb25zIHRvIGNvbnZlcnQgdG8gYW5kIGZyb20gbWlkaSBub3Rlcy5cbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIG1pZGkgPSByZXF1aXJlKCd0b25hbC1taWRpJylcbiAqIG1pZGkudG9NaWRpKCdBNCcpIC8vID0+IDY5XG4gKiBtaWRpLm5vdGUoNjkpIC8vID0+ICdBNCdcbiAqIG1pZGkubm90ZSg2MSkgLy8gPT4gJ0RiNCdcbiAqIG1pZGkubm90ZSg2MSwgdHJ1ZSkgLy8gPT4gJ0MjNCdcbiAqXG4gKiBAbW9kdWxlIG1pZGlcbiAqL1xuXG5pbXBvcnQgeyBtaWRpIH0gZnJvbSAnbm90ZS1wYXJzZXInXG5cbi8qKlxuICogQ29udmVydCB0aGUgZ2l2ZW4gbm90ZSB0byBhIG1pZGkgbm90ZSBudW1iZXIuIElmIHlvdSBwYXNzIGEgbWlkaSBudW1iZXIgaXRcbiAqIHdpbGwgcmV0dXJuZWQgYXMgaXMuXG4gKlxuICogQHBhcmFtIHtBcnJheXxTdHJpbmd8TnVtYmVyfSBub3RlIC0gdGhlIG5vdGUgdG8gZ2V0IHRoZSBtaWRpIG51bWJlciBmcm9tXG4gKiBAcmV0dXJuIHtJbnRlZ2VyfSB0aGUgbWlkaSBudW1iZXIgb3IgbnVsbCBpZiBub3QgdmFsaWQgcGl0Y2hcbiAqIEBleGFtcGxlXG4gKiBtaWRpLnRvTWlkaSgnQzQnKSAvLyA9PiA2MFxuICogbWlkaS50b01pZGkoNjApIC8vID0+IDYwXG4gKiBtaWRpLnRvTWlkaSgnNjAnKSAvLyA9PiA2MFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9NaWRpICh2YWwpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSAmJiB2YWwubGVuZ3RoID09PSAyKSByZXR1cm4gdmFsWzBdICogNyArIHZhbFsxXSAqIDEyICsgMTJcbiAgcmV0dXJuIG1pZGkodmFsKVxufVxuXG52YXIgRkxBVFMgPSAnQyBEYiBEIEViIEUgRiBHYiBHIEFiIEEgQmIgQicuc3BsaXQoJyAnKVxudmFyIFNIQVJQUyA9ICdDIEMjIEQgRCMgRSBGIEYjIEcgRyMgQSBBIyBCJy5zcGxpdCgnICcpXG5cbi8qKlxuICogR2l2ZW4gYSBtaWRpIG51bWJlciwgcmV0dXJucyBhIG5vdGUgbmFtZS4gVGhlIGFsdGVyZWQgbm90ZXMgd2lsbCBoYXZlXG4gKiBmbGF0cyB1bmxlc3MgZXhwbGljaXRseSBzZXQgd2l0aCB0aGUgb3B0aW9uYWwgYHVzZVNoYXJwc2AgcGFyYW1ldGVyLlxuICpcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtJbnRlZ2VyfSBtaWRpIC0gdGhlIG1pZGkgbm90ZSBudW1iZXJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlU2hhcnBzIC0gKE9wdGlvbmFsKSBzZXQgdG8gdHJ1ZSB0byB1c2Ugc2hhcnBzIGluc3RlYWQgb2YgZmxhdHNcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIG5vdGUgbmFtZVxuICogQGV4YW1wbGVcbiAqIHZhciBtaWRpID0gcmVxdWlyZSgndG9uYWwtbWlkaScpXG4gKiBtaWRpLm5vdGUoNjEpIC8vID0+ICdEYjQnXG4gKiBtaWRpLm5vdGUoNjEsIHRydWUpIC8vID0+ICdDIzQnXG4gKiAvLyBpdCByb3VuZHMgdG8gbmVhcmVzdCBub3RlXG4gKiBtaWRpLm5vdGUoNjEuNykgLy8gPT4gJ0Q0J1xuICovXG5leHBvcnQgZnVuY3Rpb24gbm90ZSAobnVtLCBzaGFycHMpIHtcbiAgaWYgKG51bSA9PT0gdHJ1ZSB8fCBudW0gPT09IGZhbHNlKSByZXR1cm4gZnVuY3Rpb24gKG0pIHsgcmV0dXJuIG5vdGUobSwgbnVtKSB9XG4gIG51bSA9IE1hdGgucm91bmQobnVtKVxuICB2YXIgcGNzID0gc2hhcnBzID09PSB0cnVlID8gU0hBUlBTIDogRkxBVFNcbiAgdmFyIHBjID0gcGNzW251bSAlIDEyXVxuICB2YXIgbyA9IE1hdGguZmxvb3IobnVtIC8gMTIpIC0gMVxuICByZXR1cm4gcGMgKyBvXG59XG4iLCAie1xuICBcIm5hbWVcIjogXCJtaWRpLXdyaXRlci1qc1wiLFxuICBcInZlcnNpb25cIjogXCIyLjAuMVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQSBsaWJyYXJ5IHByb3ZpZGluZyBhbiBBUEkgZm9yIGdlbmVyYXRpbmcgTUlESSBmaWxlcy5cIixcbiAgXCJtYWluXCI6IFwiYnVpbGQvaW5kZXguanNcIixcbiAgXCJ0eXBlc1wiOiBcInR5cGVzLmQudHNcIixcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwidG9uYWwtbWlkaVwiOiBcIl4wLjY5LjdcIlxuICB9LFxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAYmFiZWwvY29yZVwiOiBcIl43LjkuNlwiLFxuICAgIFwiQGJhYmVsL3BsdWdpbi10cmFuc2Zvcm0tZGVzdHJ1Y3R1cmluZ1wiOiBcIl43LjkuNVwiLFxuICAgIFwiQGJhYmVsL3ByZXNldC1lbnZcIjogXCJeNy45LjZcIixcbiAgICBcIkByb2xsdXAvcGx1Z2luLWJhYmVsXCI6IFwiXjUuMC4wXCIsXG4gICAgXCJlc2xpbnRcIjogXCJeNy4wLjBcIixcbiAgICBcImVzbGludC1jb25maWctc3RhbmRhcmRcIjogXCJeMTIuMC4wXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLWltcG9ydFwiOiBcIl4yLjIwLjJcIixcbiAgICBcImVzbGludC1wbHVnaW4tbm9kZVwiOiBcIl45LjIuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1wcm9taXNlXCI6IFwiXjQuMS4xXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXN0YW5kYXJkXCI6IFwiXjQuMC4xXCIsXG4gICAgXCJqc2RvY1wiOiBcIl4zLjYuNFwiLFxuICAgIFwibWluYW1pXCI6IFwiXjEuMi4zXCIsXG4gICAgXCJtb2NoYVwiOiBcIl45LjAuMVwiLFxuICAgIFwibnljXCI6IFwiXjE1LjAuMVwiLFxuICAgIFwicm9sbHVwXCI6IFwiXjIuOS4wXCIsXG4gICAgXCJ3YXRjaFwiOiBcIl4xLjAuMlwiXG4gIH0sXG4gIFwiZGlyZWN0b3JpZXNcIjoge1xuICAgIFwibGliXCI6IFwic3JjXCIsXG4gICAgXCJleGFtcGxlXCI6IFwiZXhhbXBsZXNcIixcbiAgICBcInRlc3RcIjogXCJ0ZXN0XCJcbiAgfSxcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcImJ1aWxkXCI6IFwibWtkaXIgLXAgYnVpbGQgJiYgcm9sbHVwIC1jICYmIG5wbSBydW4gZG9jc1wiLFxuICAgIFwiZG9jc1wiOiBcIi4vbm9kZV9tb2R1bGVzLy5iaW4vanNkb2MgLXIgc3JjIFJFQURNRS5tZCAtZCAuL2RvY3MgLXQgLi9ub2RlX21vZHVsZXMvbWluYW1pXCIsXG4gICAgXCJsaW50OmpzXCI6IFwiZXNsaW50ICdzcmMvKiovKiouanMnXCIsXG4gICAgXCJwcmVwdWJsaXNoT25seVwiOiBcIm5wbSB0ZXN0XCIsXG4gICAgXCJwcmV0ZXN0XCI6IFwibnBtIHJ1biBidWlsZFwiLFxuICAgIFwidGVzdFwiOiBcIm55YyAtLXJlcG9ydGVyPXRleHQgbW9jaGEgLS1uby1jb25maWcgLS1uby1wYWNrYWdlXCIsXG4gICAgXCJ3YXRjaFwiOiBcIndhdGNoICducG0gcnVuIGJ1aWxkJyBzcmNcIixcbiAgICBcInBvc3RpbnN0YWxsXCI6IFwibm9kZSBwb3N0aW5zdGFsbC5qc1wiXG4gIH0sXG4gIFwicnVua2l0RXhhbXBsZUZpbGVuYW1lXCI6IFwicnVua2l0LmpzXCIsXG4gIFwicmVwb3NpdG9yeVwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiZ2l0XCIsXG4gICAgXCJ1cmxcIjogXCJnaXQraHR0cHM6Ly9naXRodWIuY29tL2dyaW1tZHVkZS9NaWRpV3JpdGVySlMuZ2l0XCJcbiAgfSxcbiAgXCJrZXl3b3Jkc1wiOiBbXG4gICAgXCJtaWRpXCIsXG4gICAgXCJnZW5lcmF0b3JcIixcbiAgICBcIm11c2ljXCJcbiAgXSxcbiAgXCJhdXRob3JcIjogXCJHYXJyZXR0IEdyaW1tXCIsXG4gIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICBcImJ1Z3NcIjoge1xuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2dyaW1tZHVkZS9NaWRpV3JpdGVySlMvaXNzdWVzXCJcbiAgfSxcbiAgXCJob21lcGFnZVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ncmltbWR1ZGUvTWlkaVdyaXRlckpTI3JlYWRtZVwiXG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9uYWxNaWRpID0gcmVxdWlyZSgndG9uYWwtbWlkaScpO1xuXG4vKipcbiAqIE1JREkgZmlsZSBmb3JtYXQgY29uc3RhbnRzLlxuICogQHJldHVybiB7Q29uc3RhbnRzfVxuICovXG52YXIgQ29uc3RhbnRzID0ge1xuICBWRVJTSU9OOiByZXF1aXJlKCcuLi9wYWNrYWdlLmpzb24nKS52ZXJzaW9uLFxuICBIRUFERVJfQ0hVTktfVFlQRTogWzB4NGQsIDB4NTQsIDB4NjgsIDB4NjRdLFxuICAvLyBNdGhkXG4gIEhFQURFUl9DSFVOS19MRU5HVEg6IFsweDAwLCAweDAwLCAweDAwLCAweDA2XSxcbiAgLy8gSGVhZGVyIHNpemUgZm9yIFNNRlxuICBIRUFERVJfQ0hVTktfRk9STUFUMDogWzB4MDAsIDB4MDBdLFxuICAvLyBNaWRpIFR5cGUgMCBpZFxuICBIRUFERVJfQ0hVTktfRk9STUFUMTogWzB4MDAsIDB4MDFdLFxuICAvLyBNaWRpIFR5cGUgMSBpZFxuICBIRUFERVJfQ0hVTktfRElWSVNJT046IFsweDAwLCAweDgwXSxcbiAgLy8gRGVmYXVsdHMgdG8gMTI4IHRpY2tzIHBlciBiZWF0XG4gIFRSQUNLX0NIVU5LX1RZUEU6IFsweDRkLCAweDU0LCAweDcyLCAweDZiXSxcbiAgLy8gTVRyayxcbiAgTUVUQV9FVkVOVF9JRDogMHhGRixcbiAgTUVUQV9URVhUX0lEOiAweDAxLFxuICBNRVRBX0NPUFlSSUdIVF9JRDogMHgwMixcbiAgTUVUQV9UUkFDS19OQU1FX0lEOiAweDAzLFxuICBNRVRBX0lOU1RSVU1FTlRfTkFNRV9JRDogMHgwNCxcbiAgTUVUQV9MWVJJQ19JRDogMHgwNSxcbiAgTUVUQV9NQVJLRVJfSUQ6IDB4MDYsXG4gIE1FVEFfQ1VFX1BPSU5UOiAweDA3LFxuICBNRVRBX1RFTVBPX0lEOiAweDUxLFxuICBNRVRBX1NNVFBFX09GRlNFVDogMHg1NCxcbiAgTUVUQV9USU1FX1NJR05BVFVSRV9JRDogMHg1OCxcbiAgTUVUQV9LRVlfU0lHTkFUVVJFX0lEOiAweDU5LFxuICBNRVRBX0VORF9PRl9UUkFDS19JRDogWzB4MkYsIDB4MDBdLFxuICBDT05UUk9MTEVSX0NIQU5HRV9TVEFUVVM6IDB4QjAsXG4gIC8vIGluY2x1ZGVzIGNoYW5uZWwgbnVtYmVyICgwKVxuICBQUk9HUkFNX0NIQU5HRV9TVEFUVVM6IDB4QzAsXG4gIC8vIGluY2x1ZGVzIGNoYW5uZWwgbnVtYmVyICgwKVxuICBQSVRDSF9CRU5EX1NUQVRVUzogMHhFMCAvLyBpbmNsdWRlcyBjaGFubmVsIG51bWJlciAoMClcblxufTtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxuZnVuY3Rpb24gX3dyYXBSZWdFeHAoKSB7XG4gIF93cmFwUmVnRXhwID0gZnVuY3Rpb24gKHJlLCBncm91cHMpIHtcbiAgICByZXR1cm4gbmV3IEJhYmVsUmVnRXhwKHJlLCB1bmRlZmluZWQsIGdyb3Vwcyk7XG4gIH07XG5cbiAgdmFyIF9zdXBlciA9IFJlZ0V4cC5wcm90b3R5cGU7XG5cbiAgdmFyIF9ncm91cHMgPSBuZXcgV2Vha01hcCgpO1xuXG4gIGZ1bmN0aW9uIEJhYmVsUmVnRXhwKHJlLCBmbGFncywgZ3JvdXBzKSB7XG4gICAgdmFyIF90aGlzID0gbmV3IFJlZ0V4cChyZSwgZmxhZ3MpO1xuXG4gICAgX2dyb3Vwcy5zZXQoX3RoaXMsIGdyb3VwcyB8fCBfZ3JvdXBzLmdldChyZSkpO1xuXG4gICAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihfdGhpcywgQmFiZWxSZWdFeHAucHJvdG90eXBlKTtcbiAgfVxuXG4gIF9pbmhlcml0cyhCYWJlbFJlZ0V4cCwgUmVnRXhwKTtcblxuICBCYWJlbFJlZ0V4cC5wcm90b3R5cGUuZXhlYyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICB2YXIgcmVzdWx0ID0gX3N1cGVyLmV4ZWMuY2FsbCh0aGlzLCBzdHIpO1xuXG4gICAgaWYgKHJlc3VsdCkgcmVzdWx0Lmdyb3VwcyA9IGJ1aWxkR3JvdXBzKHJlc3VsdCwgdGhpcyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBCYWJlbFJlZ0V4cC5wcm90b3R5cGVbU3ltYm9sLnJlcGxhY2VdID0gZnVuY3Rpb24gKHN0ciwgc3Vic3RpdHV0aW9uKSB7XG4gICAgaWYgKHR5cGVvZiBzdWJzdGl0dXRpb24gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHZhciBncm91cHMgPSBfZ3JvdXBzLmdldCh0aGlzKTtcblxuICAgICAgcmV0dXJuIF9zdXBlcltTeW1ib2wucmVwbGFjZV0uY2FsbCh0aGlzLCBzdHIsIHN1YnN0aXR1dGlvbi5yZXBsYWNlKC9cXCQ8KFtePl0rKT4vZywgZnVuY3Rpb24gKF8sIG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIFwiJFwiICsgZ3JvdXBzW25hbWVdO1xuICAgICAgfSkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHN1YnN0aXR1dGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gX3N1cGVyW1N5bWJvbC5yZXBsYWNlXS5jYWxsKHRoaXMsIHN0ciwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcblxuICAgICAgICBpZiAodHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3MpO1xuICAgICAgICAgIGFyZ3MucHVzaChidWlsZEdyb3VwcyhhcmdzLCBfdGhpcykpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1YnN0aXR1dGlvbi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gX3N1cGVyW1N5bWJvbC5yZXBsYWNlXS5jYWxsKHRoaXMsIHN0ciwgc3Vic3RpdHV0aW9uKTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gYnVpbGRHcm91cHMocmVzdWx0LCByZSkge1xuICAgIHZhciBnID0gX2dyb3Vwcy5nZXQocmUpO1xuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGcpLnJlZHVjZShmdW5jdGlvbiAoZ3JvdXBzLCBuYW1lKSB7XG4gICAgICBncm91cHNbbmFtZV0gPSByZXN1bHRbZ1tuYW1lXV07XG4gICAgICByZXR1cm4gZ3JvdXBzO1xuICAgIH0sIE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICB9XG5cbiAgcmV0dXJuIF93cmFwUmVnRXhwLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbi8qKlxuICogU3RhdGljIHV0aWxpdHkgZnVuY3Rpb25zIHVzZWQgdGhyb3VnaG91dCB0aGUgbGlicmFyeS5cbiAqL1xuXG52YXIgVXRpbHMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBVdGlscygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVXRpbHMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFV0aWxzLCBudWxsLCBbe1xuICAgIGtleTogXCJ2ZXJzaW9uXCIsXG4gICAgdmFsdWU6XG4gICAgLyoqXG4gICAgICogR2V0cyBNaWRpV3JpdGVySlMgdmVyc2lvbiBudW1iZXIuXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHZlcnNpb24oKSB7XG4gICAgICByZXR1cm4gQ29uc3RhbnRzLlZFUlNJT047XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnQgYSBzdHJpbmcgdG8gYW4gYXJyYXkgb2YgYnl0ZXNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gICAgICogQHJldHVybiB7YXJyYXl9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzdHJpbmdUb0J5dGVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0cmluZ1RvQnl0ZXMoc3RyaW5nKSB7XG4gICAgICByZXR1cm4gc3RyaW5nLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24gKF9jaGFyKSB7XG4gICAgICAgIHJldHVybiBfY2hhci5jaGFyQ29kZUF0KCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIGFyZ3VtZW50IGlzIGEgdmFsaWQgbnVtYmVyLlxuICAgICAqIEBwYXJhbSB7Kn0gbiAtIFZhbHVlIHRvIGNoZWNrXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImlzTnVtZXJpY1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc051bWVyaWMobikge1xuICAgICAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KG4pKSAmJiBpc0Zpbml0ZShuKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY29ycmVjdCBNSURJIG51bWJlciBmb3IgdGhlIHNwZWNpZmllZCBwaXRjaC5cbiAgICAgKiBVc2VzIFRvbmFsIE1pZGkgLSBodHRwczovL2dpdGh1Yi5jb20vZGFuaWdiL3RvbmFsL3RyZWUvbWFzdGVyL3BhY2thZ2VzL21pZGlcbiAgICAgKiBAcGFyYW0geyhzdHJpbmd8bnVtYmVyKX0gcGl0Y2ggLSAnQyM0JyBvciBtaWRpIG5vdGUgY29kZVxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFBpdGNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFBpdGNoKHBpdGNoKSB7XG4gICAgICByZXR1cm4gdG9uYWxNaWRpLnRvTWlkaShwaXRjaCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRyYW5zbGF0ZXMgbnVtYmVyIG9mIHRpY2tzIHRvIE1JREkgdGltZXN0YW1wIGZvcm1hdCwgcmV0dXJuaW5nIGFuIGFycmF5IG9mXG4gICAgICogaGV4IHN0cmluZ3Mgd2l0aCB0aGUgdGltZSB2YWx1ZXMuIE1pZGkgaGFzIGEgdmVyeSBwYXJ0aWN1bGFyIHRpbWUgdG8gZXhwcmVzcyB0aW1lLFxuICAgICAqIHRha2UgYSBnb29kIGxvb2sgYXQgdGhlIHNwZWMgYmVmb3JlIGV2ZXIgdG91Y2hpbmcgdGhpcyBmdW5jdGlvbi5cbiAgICAgKiBUaGFua3MgdG8gaHR0cHM6Ly9naXRodWIuY29tL3NlcmdpL2pzbWlkaVxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpY2tzIC0gTnVtYmVyIG9mIHRpY2tzIHRvIGJlIHRyYW5zbGF0ZWRcbiAgICAgKiBAcmV0dXJuIHthcnJheX0gLSBCeXRlcyB0aGF0IGZvcm0gdGhlIE1JREkgdGltZSB2YWx1ZVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibnVtYmVyVG9WYXJpYWJsZUxlbmd0aFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBudW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRpY2tzKSB7XG4gICAgICB0aWNrcyA9IE1hdGgucm91bmQodGlja3MpO1xuICAgICAgdmFyIGJ1ZmZlciA9IHRpY2tzICYgMHg3RjtcblxuICAgICAgd2hpbGUgKHRpY2tzID0gdGlja3MgPj4gNykge1xuICAgICAgICBidWZmZXIgPDw9IDg7XG4gICAgICAgIGJ1ZmZlciB8PSB0aWNrcyAmIDB4N0YgfCAweDgwO1xuICAgICAgfVxuXG4gICAgICB2YXIgYkxpc3QgPSBbXTtcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgYkxpc3QucHVzaChidWZmZXIgJiAweGZmKTtcbiAgICAgICAgaWYgKGJ1ZmZlciAmIDB4ODApIGJ1ZmZlciA+Pj0gODtlbHNlIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYkxpc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvdW50cyBudW1iZXIgb2YgYnl0ZXMgaW4gc3RyaW5nXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNcbiAgICAgKiBAcmV0dXJuIHthcnJheX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInN0cmluZ0J5dGVDb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdHJpbmdCeXRlQ291bnQocykge1xuICAgICAgcmV0dXJuIGVuY29kZVVSSShzKS5zcGxpdCgvJS4ufC4vKS5sZW5ndGggLSAxO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgYW4gaW50IGZyb20gYW4gYXJyYXkgb2YgYnl0ZXMuXG4gICAgICogQHBhcmFtIHthcnJheX0gYnl0ZXNcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJudW1iZXJGcm9tQnl0ZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbnVtYmVyRnJvbUJ5dGVzKGJ5dGVzKSB7XG4gICAgICB2YXIgaGV4ID0gJyc7XG4gICAgICB2YXIgc3RyaW5nUmVzdWx0O1xuICAgICAgYnl0ZXMuZm9yRWFjaChmdW5jdGlvbiAoX2J5dGUpIHtcbiAgICAgICAgc3RyaW5nUmVzdWx0ID0gX2J5dGUudG9TdHJpbmcoMTYpOyAvLyBlbnN1cmUgc3RyaW5nIGlzIDIgY2hhcnNcblxuICAgICAgICBpZiAoc3RyaW5nUmVzdWx0Lmxlbmd0aCA9PSAxKSBzdHJpbmdSZXN1bHQgPSBcIjBcIiArIHN0cmluZ1Jlc3VsdDtcbiAgICAgICAgaGV4ICs9IHN0cmluZ1Jlc3VsdDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHBhcnNlSW50KGhleCwgMTYpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUYWtlcyBhIG51bWJlciBhbmQgc3BsaXRzIGl0IHVwIGludG8gYW4gYXJyYXkgb2YgYnl0ZXMuICBDYW4gYmUgcGFkZGVkIGJ5IHBhc3NpbmcgYSBudW1iZXIgdG8gYnl0ZXNOZWVkZWRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGJ5dGVzTmVlZGVkXG4gICAgICogQHJldHVybiB7YXJyYXl9IC0gQXJyYXkgb2YgYnl0ZXNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm51bWJlclRvQnl0ZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbnVtYmVyVG9CeXRlcyhudW1iZXIsIGJ5dGVzTmVlZGVkKSB7XG4gICAgICBieXRlc05lZWRlZCA9IGJ5dGVzTmVlZGVkIHx8IDE7XG4gICAgICB2YXIgaGV4U3RyaW5nID0gbnVtYmVyLnRvU3RyaW5nKDE2KTtcblxuICAgICAgaWYgKGhleFN0cmluZy5sZW5ndGggJiAxKSB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSBoZXggc3RyaW5nIGlzIGV2ZW4gbnVtYmVyIG9mIGNoYXJzXG4gICAgICAgIGhleFN0cmluZyA9ICcwJyArIGhleFN0cmluZztcbiAgICAgIH0gLy8gU3BsaXQgaGV4IHN0cmluZyBpbnRvIGFuIGFycmF5IG9mIHR3byBjaGFyIGVsZW1lbnRzXG5cblxuICAgICAgdmFyIGhleEFycmF5ID0gaGV4U3RyaW5nLm1hdGNoKC8uezJ9L2cpOyAvLyBOb3cgcGFyc2UgdGhlbSBvdXQgYXMgaW50ZWdlcnNcblxuICAgICAgaGV4QXJyYXkgPSBoZXhBcnJheS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGl0ZW0sIDE2KTtcbiAgICAgIH0pOyAvLyBQcmVwZW5kIGVtcHR5IGJ5dGVzIGlmIHdlIGRvbid0IGhhdmUgZW5vdWdoXG5cbiAgICAgIGlmIChoZXhBcnJheS5sZW5ndGggPCBieXRlc05lZWRlZCkge1xuICAgICAgICB3aGlsZSAoYnl0ZXNOZWVkZWQgLSBoZXhBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaGV4QXJyYXkudW5zaGlmdCgwKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaGV4QXJyYXk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIHZhbHVlIHRvIGFycmF5IGlmIG5lZWRlZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHthcnJheX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInRvQXJyYXlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9BcnJheSh2YWx1ZSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgICByZXR1cm4gW3ZhbHVlXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgdmVsb2NpdHkgdG8gdmFsdWUgMC0xMjdcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmVsb2NpdHkgLSBWZWxvY2l0eSB2YWx1ZSAxLTEwMFxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNvbnZlcnRWZWxvY2l0eVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb252ZXJ0VmVsb2NpdHkodmVsb2NpdHkpIHtcbiAgICAgIC8vIE1heCBwYXNzZWQgdmFsdWUgbGltaXRlZCB0byAxMDBcbiAgICAgIHZlbG9jaXR5ID0gdmVsb2NpdHkgPiAxMDAgPyAxMDAgOiB2ZWxvY2l0eTtcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKHZlbG9jaXR5IC8gMTAwICogMTI3KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgdG90YWwgbnVtYmVyIG9mIHRpY2tzIG9mIGEgc3BlY2lmaWVkIGR1cmF0aW9uLlxuICAgICAqIE5vdGU6IHR5cGU9PSdub3RlJyBkZWZhdWx0cyB0byBxdWFydGVyIG5vdGUsIHR5cGU9PT0ncmVzdCcgZGVmYXVsdHMgdG8gMFxuICAgICAqIEBwYXJhbSB7KHN0cmluZ3xhcnJheSl9IGR1cmF0aW9uXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0VGlja0R1cmF0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRpY2tEdXJhdGlvbihkdXJhdGlvbikge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZHVyYXRpb24pKSB7XG4gICAgICAgIC8vIFJlY3Vyc2l2ZWx5IGV4ZWN1dGUgdGhpcyBtZXRob2QgZm9yIGVhY2ggaXRlbSBpbiB0aGUgYXJyYXkgYW5kIHJldHVybiB0aGUgc3VtIG9mIHRpY2sgZHVyYXRpb25zLlxuICAgICAgICByZXR1cm4gZHVyYXRpb24ubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBVdGlscy5nZXRUaWNrRHVyYXRpb24odmFsdWUpO1xuICAgICAgICB9KS5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICByZXR1cm4gYSArIGI7XG4gICAgICAgIH0sIDApO1xuICAgICAgfVxuXG4gICAgICBkdXJhdGlvbiA9IGR1cmF0aW9uLnRvU3RyaW5nKCk7XG5cbiAgICAgIGlmIChkdXJhdGlvbi50b0xvd2VyQ2FzZSgpLmNoYXJBdCgwKSA9PT0gJ3QnKSB7XG4gICAgICAgIC8vIElmIGR1cmF0aW9uIHN0YXJ0cyB3aXRoICd0JyB0aGVuIHRoZSBudW1iZXIgdGhhdCBmb2xsb3dzIGlzIGFuIGV4cGxpY2l0IHRpY2sgY291bnRcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGR1cmF0aW9uLnN1YnN0cmluZygxKSk7XG4gICAgICB9IC8vIE5lZWQgdG8gYXBwbHkgZHVyYXRpb24gaGVyZS4gIFF1YXJ0ZXIgbm90ZSA9PSBDb25zdGFudHMuSEVBREVSX0NIVU5LX0RJVklTSU9OXG5cblxuICAgICAgdmFyIHF1YXJ0ZXJUaWNrcyA9IFV0aWxzLm51bWJlckZyb21CeXRlcyhDb25zdGFudHMuSEVBREVSX0NIVU5LX0RJVklTSU9OKTtcbiAgICAgIHZhciB0aWNrRHVyYXRpb24gPSBxdWFydGVyVGlja3MgKiBVdGlscy5nZXREdXJhdGlvbk11bHRpcGxpZXIoZHVyYXRpb24pO1xuICAgICAgcmV0dXJuIFV0aWxzLmdldFJvdW5kZWRJZkNsb3NlKHRpY2tEdXJhdGlvbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIER1ZSB0byByb3VuZGluZyBlcnJvcnMgaW4gSmF2YVNjcmlwdCBlbmdpbmVzLFxuICAgICAqIGl0J3Mgc2FmZSB0byByb3VuZCB3aGVuIHdlJ3JlIHZlcnkgY2xvc2UgdG8gdGhlIGFjdHVhbCB0aWNrIG51bWJlclxuICAgICAqXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aWNrXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Um91bmRlZElmQ2xvc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Um91bmRlZElmQ2xvc2UodGljaykge1xuICAgICAgdmFyIHJvdW5kZWRUaWNrID0gTWF0aC5yb3VuZCh0aWNrKTtcbiAgICAgIHJldHVybiBNYXRoLmFicyhyb3VuZGVkVGljayAtIHRpY2spIDwgMC4wMDAwMDEgPyByb3VuZGVkVGljayA6IHRpY2s7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIER1ZSB0byBsb3cgcHJlY2lzaW9uIG9mIE1JREksXG4gICAgICogd2UgbmVlZCB0byBrZWVwIHRyYWNrIG9mIHJvdW5kaW5nIGVycm9ycyBpbiBkZWx0YXMuXG4gICAgICogVGhpcyBmdW5jdGlvbiB3aWxsIGNhbGN1bGF0ZSB0aGUgcm91bmRpbmcgZXJyb3IgZm9yIGEgZ2l2ZW4gZHVyYXRpb24uXG4gICAgICpcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpY2tcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRQcmVjaXNpb25Mb3NzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFByZWNpc2lvbkxvc3ModGljaykge1xuICAgICAgdmFyIHJvdW5kZWRUaWNrID0gTWF0aC5yb3VuZCh0aWNrKTtcbiAgICAgIHJldHVybiByb3VuZGVkVGljayAtIHRpY2s7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgd2hhdCB0byBtdWx0aXBsZSB0aWNrcy9xdWFydGVyIG5vdGUgYnkgdG8gZ2V0IHRoZSBzcGVjaWZpZWQgZHVyYXRpb24uXG4gICAgICogTm90ZTogdHlwZT09J25vdGUnIGRlZmF1bHRzIHRvIHF1YXJ0ZXIgbm90ZSwgdHlwZT09PSdyZXN0JyBkZWZhdWx0cyB0byAwXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGR1cmF0aW9uXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0RHVyYXRpb25NdWx0aXBsaWVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldER1cmF0aW9uTXVsdGlwbGllcihkdXJhdGlvbikge1xuICAgICAgLy8gTmVlZCB0byBhcHBseSBkdXJhdGlvbiBoZXJlLlxuICAgICAgLy8gUXVhcnRlciBub3RlID09IENvbnN0YW50cy5IRUFERVJfQ0hVTktfRElWSVNJT04gdGlja3MuXG4gICAgICBpZiAoZHVyYXRpb24gPT09ICcwJykgcmV0dXJuIDA7XG4gICAgICB2YXIgbWF0Y2ggPSBkdXJhdGlvbi5tYXRjaCggLyojX19QVVJFX18qL193cmFwUmVnRXhwKC9eKGQrKT8oWzAtOV0rKSg/OnQoWzAtOV0qKSk/Lywge1xuICAgICAgICBkb3R0ZWQ6IDEsXG4gICAgICAgIGJhc2U6IDIsXG4gICAgICAgIHR1cGxldDogM1xuICAgICAgfSkpO1xuXG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgdmFyIGJhc2UgPSBOdW1iZXIobWF0Y2guZ3JvdXBzLmJhc2UpOyAvLyAxIG9yIGFueSBwb3dlciBvZiB0d286XG5cbiAgICAgICAgdmFyIGlzVmFsaWRCYXNlID0gYmFzZSA9PT0gMSB8fCAoYmFzZSAmIGJhc2UgLSAxKSA9PT0gMDtcblxuICAgICAgICBpZiAoaXNWYWxpZEJhc2UpIHtcbiAgICAgICAgICAvLyBob3cgbXVjaCBmYXN0ZXIgb3Igc2xvd2VyIGlzIHRoaXMgbm90ZSBjb21wYXJlZCB0byBhIHF1YXJ0ZXI/XG4gICAgICAgICAgdmFyIHJhdGlvID0gYmFzZSAvIDQ7XG4gICAgICAgICAgdmFyIGR1cmF0aW9uSW5RdWFydGVycyA9IDEgLyByYXRpbztcbiAgICAgICAgICB2YXIgX21hdGNoJGdyb3VwcyA9IG1hdGNoLmdyb3VwcyxcbiAgICAgICAgICAgICAgZG90dGVkID0gX21hdGNoJGdyb3Vwcy5kb3R0ZWQsXG4gICAgICAgICAgICAgIHR1cGxldCA9IF9tYXRjaCRncm91cHMudHVwbGV0O1xuXG4gICAgICAgICAgaWYgKGRvdHRlZCkge1xuICAgICAgICAgICAgdmFyIHRoaXNNYW55RG90cyA9IGRvdHRlZC5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgZGl2aXNvciA9IE1hdGgucG93KDIsIHRoaXNNYW55RG90cyk7XG4gICAgICAgICAgICBkdXJhdGlvbkluUXVhcnRlcnMgPSBkdXJhdGlvbkluUXVhcnRlcnMgKyBkdXJhdGlvbkluUXVhcnRlcnMgKiAoKGRpdmlzb3IgLSAxKSAvIGRpdmlzb3IpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2YgdHVwbGV0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFyIGZpdEludG8gPSBkdXJhdGlvbkluUXVhcnRlcnMgKiAyOyAvLyBkZWZhdWx0IHRvIHRyaXBsZXQ6XG5cbiAgICAgICAgICAgIHZhciB0aGlzTWFueU5vdGVzID0gTnVtYmVyKHR1cGxldCB8fCAnMycpO1xuICAgICAgICAgICAgZHVyYXRpb25JblF1YXJ0ZXJzID0gZml0SW50byAvIHRoaXNNYW55Tm90ZXM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGR1cmF0aW9uSW5RdWFydGVycztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZHVyYXRpb24gKyAnIGlzIG5vdCBhIHZhbGlkIGR1cmF0aW9uLicpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBVdGlscztcbn0oKTtcblxuLyoqXG4gKiBIb2xkcyBhbGwgZGF0YSBmb3IgYSBcIm5vdGUgb25cIiBNSURJIGV2ZW50XG4gKiBAcGFyYW0ge29iamVjdH0gZmllbGRzIHtkYXRhOiBbXX1cbiAqIEByZXR1cm4ge05vdGVPbkV2ZW50fVxuICovXG5cbnZhciBOb3RlT25FdmVudCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE5vdGVPbkV2ZW50KGZpZWxkcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb3RlT25FdmVudCk7XG5cbiAgICAvLyBTZXQgZGVmYXVsdCBmaWVsZHNcbiAgICBmaWVsZHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNoYW5uZWw6IDEsXG4gICAgICBzdGFydFRpY2s6IG51bGwsXG4gICAgICB2ZWxvY2l0eTogNTAsXG4gICAgICB3YWl0OiAwXG4gICAgfSwgZmllbGRzKTtcbiAgICB0aGlzLnR5cGUgPSAnbm90ZS1vbic7XG4gICAgdGhpcy5jaGFubmVsID0gZmllbGRzLmNoYW5uZWw7XG4gICAgdGhpcy5waXRjaCA9IGZpZWxkcy5waXRjaDtcbiAgICB0aGlzLndhaXQgPSBmaWVsZHMud2FpdDtcbiAgICB0aGlzLnZlbG9jaXR5ID0gZmllbGRzLnZlbG9jaXR5O1xuICAgIHRoaXMuc3RhcnRUaWNrID0gZmllbGRzLnN0YXJ0VGljaztcbiAgICB0aGlzLm1pZGlOdW1iZXIgPSBVdGlscy5nZXRQaXRjaCh0aGlzLnBpdGNoKTtcbiAgICB0aGlzLnRpY2sgPSBudWxsO1xuICAgIHRoaXMuZGVsdGEgPSBudWxsO1xuICAgIHRoaXMuZGF0YSA9IGZpZWxkcy5kYXRhO1xuICB9XG4gIC8qKlxuICAgKiBCdWlsZHMgaW50IGFycmF5IGZvciB0aGlzIGV2ZW50LlxuICAgKiBAcGFyYW0ge1RyYWNrfSB0cmFjayAtIHBhcmVudCB0cmFja1xuICAgKiBAcmV0dXJuIHtOb3RlT25FdmVudH1cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoTm90ZU9uRXZlbnQsIFt7XG4gICAga2V5OiBcImJ1aWxkRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBidWlsZERhdGEodHJhY2ssIHByZWNpc2lvbkRlbHRhKSB7XG4gICAgICB0aGlzLmRhdGEgPSBbXTsgLy8gRXhwbGljaXRseSBkZWZpbmVkIHN0YXJ0VGljayBldmVudFxuXG4gICAgICBpZiAodGhpcy5zdGFydFRpY2spIHtcbiAgICAgICAgdGhpcy50aWNrID0gVXRpbHMuZ2V0Um91bmRlZElmQ2xvc2UodGhpcy5zdGFydFRpY2spOyAvLyBJZiB0aGlzIGlzIHRoZSBmaXJzdCBldmVudCBpbiB0aGUgdHJhY2sgdGhlbiB1c2UgZXZlbnQncyBzdGFydGluZyB0aWNrIGFzIGRlbHRhLlxuXG4gICAgICAgIGlmICh0cmFjay50aWNrUG9pbnRlciA9PSAwKSB7XG4gICAgICAgICAgdGhpcy5kZWx0YSA9IHRoaXMudGljaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kZWx0YSA9IFV0aWxzLmdldFRpY2tEdXJhdGlvbih0aGlzLndhaXQpO1xuICAgICAgICB0aGlzLnRpY2sgPSBVdGlscy5nZXRSb3VuZGVkSWZDbG9zZSh0cmFjay50aWNrUG9pbnRlciArIHRoaXMuZGVsdGEpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRlbHRhV2l0aFByZWNpc2lvbkNvcnJlY3Rpb24gPSBVdGlscy5nZXRSb3VuZGVkSWZDbG9zZSh0aGlzLmRlbHRhIC0gcHJlY2lzaW9uRGVsdGEpO1xuICAgICAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0aGlzLmRlbHRhV2l0aFByZWNpc2lvbkNvcnJlY3Rpb24pLmNvbmNhdCh0aGlzLmdldFN0YXR1c0J5dGUoKSwgdGhpcy5taWRpTnVtYmVyLCBVdGlscy5jb252ZXJ0VmVsb2NpdHkodGhpcy52ZWxvY2l0eSkpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIG5vdGUgb24gc3RhdHVzIGNvZGUgYmFzZWQgb24gdGhlIHNlbGVjdGVkIGNoYW5uZWwuIDB4OXswLUZ9XG4gICAgICogTm90ZSBvbiBhdCBjaGFubmVsIDAgaXMgMHg5MCAoMTQ0KVxuICAgICAqIDAgPSBDaCAxXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U3RhdHVzQnl0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTdGF0dXNCeXRlKCkge1xuICAgICAgcmV0dXJuIDE0NCArIHRoaXMuY2hhbm5lbCAtIDE7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE5vdGVPbkV2ZW50O1xufSgpO1xuXG4vKipcbiAqIEhvbGRzIGFsbCBkYXRhIGZvciBhIFwibm90ZSBvZmZcIiBNSURJIGV2ZW50XG4gKiBAcGFyYW0ge29iamVjdH0gZmllbGRzIHtkYXRhOiBbXX1cbiAqIEByZXR1cm4ge05vdGVPZmZFdmVudH1cbiAqL1xuXG52YXIgTm90ZU9mZkV2ZW50ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTm90ZU9mZkV2ZW50KGZpZWxkcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb3RlT2ZmRXZlbnQpO1xuXG4gICAgLy8gU2V0IGRlZmF1bHQgZmllbGRzXG4gICAgZmllbGRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjaGFubmVsOiAxLFxuICAgICAgdmVsb2NpdHk6IDUwLFxuICAgICAgdGljazogbnVsbFxuICAgIH0sIGZpZWxkcyk7XG4gICAgdGhpcy50eXBlID0gJ25vdGUtb2ZmJztcbiAgICB0aGlzLmNoYW5uZWwgPSBmaWVsZHMuY2hhbm5lbDtcbiAgICB0aGlzLnBpdGNoID0gZmllbGRzLnBpdGNoO1xuICAgIHRoaXMuZHVyYXRpb24gPSBmaWVsZHMuZHVyYXRpb247XG4gICAgdGhpcy52ZWxvY2l0eSA9IGZpZWxkcy52ZWxvY2l0eTtcbiAgICB0aGlzLm1pZGlOdW1iZXIgPSBVdGlscy5nZXRQaXRjaCh0aGlzLnBpdGNoKTtcbiAgICB0aGlzLnRpY2sgPSBmaWVsZHMudGljaztcbiAgICB0aGlzLmRlbHRhID0gVXRpbHMuZ2V0VGlja0R1cmF0aW9uKHRoaXMuZHVyYXRpb24pO1xuICAgIHRoaXMuZGF0YSA9IGZpZWxkcy5kYXRhO1xuICB9XG4gIC8qKlxuICAgKiBCdWlsZHMgaW50IGFycmF5IGZvciB0aGlzIGV2ZW50LlxuICAgKiBAcGFyYW0ge1RyYWNrfSB0cmFjayAtIHBhcmVudCB0cmFja1xuICAgKiBAcmV0dXJuIHtOb3RlT2ZmRXZlbnR9XG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKE5vdGVPZmZFdmVudCwgW3tcbiAgICBrZXk6IFwiYnVpbGREYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJ1aWxkRGF0YSh0cmFjaywgcHJlY2lzaW9uRGVsdGEpIHtcbiAgICAgIGlmICh0aGlzLnRpY2sgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy50aWNrID0gVXRpbHMuZ2V0Um91bmRlZElmQ2xvc2UodGhpcy5kZWx0YSArIHRyYWNrLnRpY2tQb2ludGVyKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kZWx0YVdpdGhQcmVjaXNpb25Db3JyZWN0aW9uID0gVXRpbHMuZ2V0Um91bmRlZElmQ2xvc2UodGhpcy5kZWx0YSAtIHByZWNpc2lvbkRlbHRhKTtcbiAgICAgIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgodGhpcy5kZWx0YVdpdGhQcmVjaXNpb25Db3JyZWN0aW9uKS5jb25jYXQodGhpcy5nZXRTdGF0dXNCeXRlKCksIHRoaXMubWlkaU51bWJlciwgVXRpbHMuY29udmVydFZlbG9jaXR5KHRoaXMudmVsb2NpdHkpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBub3RlIG9mZiBzdGF0dXMgY29kZSBiYXNlZCBvbiB0aGUgc2VsZWN0ZWQgY2hhbm5lbC4gMHg4ezAtRn1cbiAgICAgKiBOb3RlIG9mZiBhdCBjaGFubmVsIDAgaXMgMHg4MCAoMTI4KVxuICAgICAqIDAgPSBDaCAxXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U3RhdHVzQnl0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTdGF0dXNCeXRlKCkge1xuICAgICAgcmV0dXJuIDEyOCArIHRoaXMuY2hhbm5lbCAtIDE7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE5vdGVPZmZFdmVudDtcbn0oKTtcblxuLyoqXG4gKiBXcmFwcGVyIGZvciBub3RlT25FdmVudC9ub3RlT2ZmRXZlbnQgb2JqZWN0cyB0aGF0IGJ1aWxkcyBib3RoIGV2ZW50cy5cbiAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZHMgLSB7cGl0Y2g6ICdbQzRdJywgZHVyYXRpb246ICc0Jywgd2FpdDogJzQnLCB2ZWxvY2l0eTogMS0xMDB9XG4gKiBAcmV0dXJuIHtOb3RlRXZlbnR9XG4gKi9cblxudmFyIE5vdGVFdmVudCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE5vdGVFdmVudChmaWVsZHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTm90ZUV2ZW50KTtcblxuICAgIC8vIFNldCBkZWZhdWx0IGZpZWxkc1xuICAgIGZpZWxkcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2hhbm5lbDogMSxcbiAgICAgIHJlcGVhdDogMSxcbiAgICAgIHNlcXVlbnRpYWw6IGZhbHNlLFxuICAgICAgc3RhcnRUaWNrOiBudWxsLFxuICAgICAgdmVsb2NpdHk6IDUwLFxuICAgICAgd2FpdDogMFxuICAgIH0sIGZpZWxkcyk7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgdGhpcy50eXBlID0gJ25vdGUnO1xuICAgIHRoaXMucGl0Y2ggPSBVdGlscy50b0FycmF5KGZpZWxkcy5waXRjaCk7XG4gICAgdGhpcy5jaGFubmVsID0gZmllbGRzLmNoYW5uZWw7XG4gICAgdGhpcy5kdXJhdGlvbiA9IGZpZWxkcy5kdXJhdGlvbjtcbiAgICB0aGlzLmdyYWNlID0gZmllbGRzLmdyYWNlO1xuICAgIHRoaXMucmVwZWF0ID0gZmllbGRzLnJlcGVhdDtcbiAgICB0aGlzLnNlcXVlbnRpYWwgPSBmaWVsZHMuc2VxdWVudGlhbDtcbiAgICB0aGlzLnN0YXJ0VGljayA9IGZpZWxkcy5zdGFydFRpY2s7XG4gICAgdGhpcy52ZWxvY2l0eSA9IGZpZWxkcy52ZWxvY2l0eTtcbiAgICB0aGlzLndhaXQgPSBmaWVsZHMud2FpdDtcbiAgICB0aGlzLnRpY2tEdXJhdGlvbiA9IFV0aWxzLmdldFRpY2tEdXJhdGlvbih0aGlzLmR1cmF0aW9uKTtcbiAgICB0aGlzLnJlc3REdXJhdGlvbiA9IFV0aWxzLmdldFRpY2tEdXJhdGlvbih0aGlzLndhaXQpO1xuICAgIHRoaXMuZXZlbnRzID0gW107IC8vIEhvbGQgYWN0dWFsIE5vdGVPbi9Ob3RlT2ZmIGV2ZW50c1xuICB9XG4gIC8qKlxuICAgKiBCdWlsZHMgaW50IGFycmF5IGZvciB0aGlzIGV2ZW50LlxuICAgKiBAcmV0dXJuIHtOb3RlRXZlbnR9XG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKE5vdGVFdmVudCwgW3tcbiAgICBrZXk6IFwiYnVpbGREYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJ1aWxkRGF0YSgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIC8vIFJlc2V0IGRhdGEgYXJyYXlcbiAgICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICAgdGhpcy50aWNrRHVyYXRpb247XG4gICAgICB0aGlzLnJlc3REdXJhdGlvbjsgLy8gQXBwbHkgZ3JhY2Ugbm90ZShzKSBhbmQgc3VidHJhY3QgdGlja3MgKGN1cnJlbnRseSAxIHRpY2sgcGVyIGdyYWNlIG5vdGUpIGZyb20gdGlja0R1cmF0aW9uIHNvIG5ldCB2YWx1ZSBpcyB0aGUgc2FtZVxuXG4gICAgICBpZiAodGhpcy5ncmFjZSkge1xuICAgICAgICB2YXIgZ3JhY2VEdXJhdGlvbiA9IDE7XG4gICAgICAgIHRoaXMuZ3JhY2UgPSBVdGlscy50b0FycmF5KHRoaXMuZ3JhY2UpO1xuICAgICAgICB0aGlzLmdyYWNlLmZvckVhY2goZnVuY3Rpb24gKHBpdGNoKSB7XG4gICAgICAgICAgdmFyIG5vdGVFdmVudCA9IG5ldyBOb3RlRXZlbnQoe1xuICAgICAgICAgICAgcGl0Y2g6IF90aGlzLmdyYWNlLFxuICAgICAgICAgICAgZHVyYXRpb246ICdUJyArIGdyYWNlRHVyYXRpb25cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBfdGhpcy5kYXRhID0gX3RoaXMuZGF0YS5jb25jYXQobm90ZUV2ZW50LmRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgIH0gLy8gZmllbGRzLnBpdGNoIGNvdWxkIGJlIGFuIGFycmF5IG9mIHBpdGNoZXMuXG4gICAgICAvLyBJZiB0aGlzLnNlcXVlbnRpYWwgPT09IHRydWUgdGhlbiBpdCdzIGEgc2VxdWVudGlhbCBzdHJpbmcgb2Ygbm90ZXMgdGhhdCByZXF1aXJlcyBzZXBhcmF0ZSBOb3RlT25FdmVudHMuXG5cbiAgICAgIGlmICghdGhpcy5zZXF1ZW50aWFsKSB7XG4gICAgICAgIC8vIEhhbmRsZSByZXBlYXRcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLnJlcGVhdDsgaisrKSB7XG4gICAgICAgICAgLy8gTm90ZSBvblxuICAgICAgICAgIHRoaXMucGl0Y2guZm9yRWFjaChmdW5jdGlvbiAocCwgaSkge1xuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICB2YXIgbm90ZU9uTmV3ID0gbmV3IE5vdGVPbkV2ZW50KHtcbiAgICAgICAgICAgICAgICBjaGFubmVsOiBfdGhpcy5jaGFubmVsLFxuICAgICAgICAgICAgICAgIHdhaXQ6IF90aGlzLndhaXQsXG4gICAgICAgICAgICAgICAgdmVsb2NpdHk6IF90aGlzLnZlbG9jaXR5LFxuICAgICAgICAgICAgICAgIHBpdGNoOiBwLFxuICAgICAgICAgICAgICAgIHN0YXJ0VGljazogX3RoaXMuc3RhcnRUaWNrXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gUnVubmluZyBzdGF0dXMgKGNhbiBvbW1pdCB0aGUgbm90ZSBvbiBzdGF0dXMpXG4gICAgICAgICAgICAgIC8vbm90ZU9uID0gbmV3IE5vdGVPbkV2ZW50KHtkYXRhOiBbMCwgVXRpbHMuZ2V0UGl0Y2gocCksIFV0aWxzLmNvbnZlcnRWZWxvY2l0eSh0aGlzLnZlbG9jaXR5KV19KTtcbiAgICAgICAgICAgICAgdmFyIG5vdGVPbk5ldyA9IG5ldyBOb3RlT25FdmVudCh7XG4gICAgICAgICAgICAgICAgY2hhbm5lbDogX3RoaXMuY2hhbm5lbCxcbiAgICAgICAgICAgICAgICB3YWl0OiAwLFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5OiBfdGhpcy52ZWxvY2l0eSxcbiAgICAgICAgICAgICAgICBwaXRjaDogcCxcbiAgICAgICAgICAgICAgICBzdGFydFRpY2s6IF90aGlzLnN0YXJ0VGlja1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX3RoaXMuZXZlbnRzLnB1c2gobm90ZU9uTmV3KTtcbiAgICAgICAgICB9KTsgLy8gTm90ZSBvZmZcblxuICAgICAgICAgIHRoaXMucGl0Y2guZm9yRWFjaChmdW5jdGlvbiAocCwgaSkge1xuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAvL25vdGVPZmYgPSBuZXcgTm90ZU9mZkV2ZW50KHtkYXRhOiBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRpY2tEdXJhdGlvbikuY29uY2F0KHRoaXMuZ2V0Tm90ZU9mZlN0YXR1cygpLCBVdGlscy5nZXRQaXRjaChwKSwgVXRpbHMuY29udmVydFZlbG9jaXR5KHRoaXMudmVsb2NpdHkpKX0pO1xuICAgICAgICAgICAgICB2YXIgbm90ZU9mZk5ldyA9IG5ldyBOb3RlT2ZmRXZlbnQoe1xuICAgICAgICAgICAgICAgIGNoYW5uZWw6IF90aGlzLmNoYW5uZWwsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IF90aGlzLmR1cmF0aW9uLFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5OiBfdGhpcy52ZWxvY2l0eSxcbiAgICAgICAgICAgICAgICBwaXRjaDogcCxcbiAgICAgICAgICAgICAgICB0aWNrOiBfdGhpcy5zdGFydFRpY2sgIT09IG51bGwgPyBVdGlscy5nZXRUaWNrRHVyYXRpb24oX3RoaXMuZHVyYXRpb24pICsgX3RoaXMuc3RhcnRUaWNrIDogbnVsbFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFJ1bm5pbmcgc3RhdHVzIChjYW4gb21taXQgdGhlIG5vdGUgb2ZmIHN0YXR1cylcbiAgICAgICAgICAgICAgLy9ub3RlT2ZmID0gbmV3IE5vdGVPZmZFdmVudCh7ZGF0YTogWzAsIFV0aWxzLmdldFBpdGNoKHApLCBVdGlscy5jb252ZXJ0VmVsb2NpdHkodGhpcy52ZWxvY2l0eSldfSk7XG4gICAgICAgICAgICAgIHZhciBub3RlT2ZmTmV3ID0gbmV3IE5vdGVPZmZFdmVudCh7XG4gICAgICAgICAgICAgICAgY2hhbm5lbDogX3RoaXMuY2hhbm5lbCxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eTogX3RoaXMudmVsb2NpdHksXG4gICAgICAgICAgICAgICAgcGl0Y2g6IHAsXG4gICAgICAgICAgICAgICAgdGljazogX3RoaXMuc3RhcnRUaWNrICE9PSBudWxsID8gVXRpbHMuZ2V0VGlja0R1cmF0aW9uKF90aGlzLmR1cmF0aW9uKSArIF90aGlzLnN0YXJ0VGljayA6IG51bGxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF90aGlzLmV2ZW50cy5wdXNoKG5vdGVPZmZOZXcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBIYW5kbGUgcmVwZWF0XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5yZXBlYXQ7IGorKykge1xuICAgICAgICAgIHRoaXMucGl0Y2guZm9yRWFjaChmdW5jdGlvbiAocCwgaSkge1xuXG4gICAgICAgICAgICB2YXIgbm90ZU9uTmV3ID0gbmV3IE5vdGVPbkV2ZW50KHtcbiAgICAgICAgICAgICAgY2hhbm5lbDogX3RoaXMuY2hhbm5lbCxcbiAgICAgICAgICAgICAgd2FpdDogaSA+IDAgPyAwIDogX3RoaXMud2FpdCxcbiAgICAgICAgICAgICAgLy8gd2FpdCBvbmx5IGFwcGxpZXMgdG8gZmlyc3Qgbm90ZSBpbiByZXBldGl0aW9uXG4gICAgICAgICAgICAgIHZlbG9jaXR5OiBfdGhpcy52ZWxvY2l0eSxcbiAgICAgICAgICAgICAgcGl0Y2g6IHAsXG4gICAgICAgICAgICAgIHN0YXJ0VGljazogX3RoaXMuc3RhcnRUaWNrXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBub3RlT2ZmTmV3ID0gbmV3IE5vdGVPZmZFdmVudCh7XG4gICAgICAgICAgICAgIGNoYW5uZWw6IF90aGlzLmNoYW5uZWwsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiBfdGhpcy5kdXJhdGlvbixcbiAgICAgICAgICAgICAgdmVsb2NpdHk6IF90aGlzLnZlbG9jaXR5LFxuICAgICAgICAgICAgICBwaXRjaDogcFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIF90aGlzLmV2ZW50cy5wdXNoKG5vdGVPbk5ldywgbm90ZU9mZk5ldyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE5vdGVFdmVudDtcbn0oKTtcblxuLyoqXG4gKiBIb2xkcyBhbGwgZGF0YSBmb3IgYSBcIlBpdGNoIEJlbmRcIiBNSURJIGV2ZW50XG4gKiBbIC0xLjAsIDAsIDEuMCBdIC0+ICBbIDAsIDgxOTIsIDE2MzgzXVxuICogQHBhcmFtIHtvYmplY3R9IGZpZWxkcyB7IGJlbmQgOiBmbG9hdCwgY2hhbm5lbCA6IGludCB9XG4gKiBAcmV0dXJuIHtQaXRjaEJlbmRFdmVudH1cbiAqL1xuXG52YXIgc2NhbGUxNGJpdHMgPSBmdW5jdGlvbiBzY2FsZTE0Yml0cyh6ZXJvT25lKSB7XG4gIGlmICh6ZXJvT25lIDw9IDApIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcigxNjM4NCAqICh6ZXJvT25lICsgMSkgLyAyKTtcbiAgfVxuXG4gIHJldHVybiBNYXRoLmZsb29yKDE2MzgzICogKHplcm9PbmUgKyAxKSAvIDIpO1xufTtcblxudmFyIFBpdGNoQmVuZEV2ZW50ID0gZnVuY3Rpb24gUGl0Y2hCZW5kRXZlbnQoZmllbGRzKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQaXRjaEJlbmRFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ3BpdGNoLWJlbmQnO1xuICB2YXIgYmVuZDE0ID0gc2NhbGUxNGJpdHMoZmllbGRzLmJlbmQpO1xuICB2YXIgY2hhbm5lbCA9IGZpZWxkcy5jaGFubmVsIHx8IDA7XG4gIHZhciBsc2JWYWx1ZSA9IGJlbmQxNCAmIDB4N2Y7XG4gIHZhciBtc2JWYWx1ZSA9IGJlbmQxNCA+PiA3ICYgMHg3ZjtcbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLlBJVENIX0JFTkRfU1RBVFVTIHwgY2hhbm5lbCwgbHNiVmFsdWUsIG1zYlZhbHVlKTtcbn07XG5cbi8qKlxuICogSG9sZHMgYWxsIGRhdGEgZm9yIGEgXCJwcm9ncmFtIGNoYW5nZVwiIE1JREkgZXZlbnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZHMge2luc3RydW1lbnQ6IGludGVnZXJ9XG4gKiBAcmV0dXJuIHtQcm9ncmFtQ2hhbmdlRXZlbnR9XG4gKi9cblxudmFyIFByb2dyYW1DaGFuZ2VFdmVudCA9IGZ1bmN0aW9uIFByb2dyYW1DaGFuZ2VFdmVudChmaWVsZHMpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFByb2dyYW1DaGFuZ2VFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ3Byb2dyYW0nOyAvLyBkZWx0YSB0aW1lIGRlZmF1bHRzIHRvIDAuXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLlBST0dSQU1fQ0hBTkdFX1NUQVRVUywgZmllbGRzLmluc3RydW1lbnQpO1xufTtcblxuLyoqXG4gKiBIb2xkcyBhbGwgZGF0YSBmb3IgYSBcImNvbnRyb2xsZXIgY2hhbmdlXCIgTUlESSBldmVudFxuICogQHBhcmFtIHtvYmplY3R9IGZpZWxkcyB7Y29udHJvbGxlck51bWJlcjogaW50ZWdlciwgY29udHJvbGxlclZhbHVlOiBpbnRlZ2VyfVxuICogQHJldHVybiB7Q29udHJvbGxlckNoYW5nZUV2ZW50fVxuICovXG5cbnZhciBDb250cm9sbGVyQ2hhbmdlRXZlbnQgPSBmdW5jdGlvbiBDb250cm9sbGVyQ2hhbmdlRXZlbnQoZmllbGRzKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb250cm9sbGVyQ2hhbmdlRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdjb250cm9sbGVyJzsgLy8gZGVsdGEgdGltZSBkZWZhdWx0cyB0byAwLlxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5DT05UUk9MTEVSX0NIQU5HRV9TVEFUVVMsIGZpZWxkcy5jb250cm9sbGVyTnVtYmVyLCBmaWVsZHMuY29udHJvbGxlclZhbHVlKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgdGVtcG8gbWV0YSBldmVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gQ29weXJpZ2h0IHRleHRcbiAqIEByZXR1cm4ge0NvcHlyaWdodEV2ZW50fVxuICovXG5cbnZhciBDb3B5cmlnaHRFdmVudCA9IGZ1bmN0aW9uIENvcHlyaWdodEV2ZW50KHRleHQpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvcHlyaWdodEV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAnY29weXJpZ2h0JztcbiAgdmFyIHRleHRCeXRlcyA9IFV0aWxzLnN0cmluZ1RvQnl0ZXModGV4dCk7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX0NPUFlSSUdIVF9JRCwgVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0ZXh0Qnl0ZXMubGVuZ3RoKSwgLy8gU2l6ZVxuICB0ZXh0Qnl0ZXMgLy8gVGV4dFxuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSBjdWUgcG9pbnQgbWV0YSBldmVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gQ3VlIHBvaW50IHRleHRcbiAqIEByZXR1cm4ge0N1ZVBvaW50RXZlbnR9XG4gKi9cblxudmFyIEN1ZVBvaW50RXZlbnQgPSBmdW5jdGlvbiBDdWVQb2ludEV2ZW50KHRleHQpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEN1ZVBvaW50RXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdtYXJrZXInO1xuICB2YXIgdGV4dEJ5dGVzID0gVXRpbHMuc3RyaW5nVG9CeXRlcyh0ZXh0KTsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfQ1VFX1BPSU5ULCBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRleHRCeXRlcy5sZW5ndGgpLCAvLyBTaXplXG4gIHRleHRCeXRlcyAvLyBUZXh0XG4gICk7XG59O1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIGVuZCB0cmFjayBtZXRhIGV2ZW50LlxuICogQHJldHVybiB7RW5kVHJhY2tFdmVudH1cbiAqL1xuXG52YXIgRW5kVHJhY2tFdmVudCA9IGZ1bmN0aW9uIEVuZFRyYWNrRXZlbnQoKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFbmRUcmFja0V2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAnZW5kLXRyYWNrJzsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfRU5EX09GX1RSQUNLX0lEKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGFuIGluc3RydW1lbnQgbmFtZSBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IGJwbSAtIEJlYXRzIHBlciBtaW51dGVcbiAqIEByZXR1cm4ge0luc3RydW1lbnROYW1lRXZlbnR9XG4gKi9cblxudmFyIEluc3RydW1lbnROYW1lRXZlbnQgPSBmdW5jdGlvbiBJbnN0cnVtZW50TmFtZUV2ZW50KHRleHQpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluc3RydW1lbnROYW1lRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdpbnN0cnVtZW50LW5hbWUnO1xuICB2YXIgdGV4dEJ5dGVzID0gVXRpbHMuc3RyaW5nVG9CeXRlcyh0ZXh0KTsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfSU5TVFJVTUVOVF9OQU1FX0lELCBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRleHRCeXRlcy5sZW5ndGgpLCAvLyBTaXplXG4gIHRleHRCeXRlcyAvLyBJbnN0cnVtZW50IG5hbWVcbiAgKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEga2V5IHNpZ25hdHVyZSBtZXRhIGV2ZW50LlxuICogQHJldHVybiB7S2V5U2lnbmF0dXJlRXZlbnR9XG4gKi9cblxudmFyIEtleVNpZ25hdHVyZUV2ZW50ID0gZnVuY3Rpb24gS2V5U2lnbmF0dXJlRXZlbnQoc2YsIG1pKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBLZXlTaWduYXR1cmVFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ2tleS1zaWduYXR1cmUnO1xuICB2YXIgbW9kZSA9IG1pIHx8IDA7XG4gIHNmID0gc2YgfHwgMDsgLy9cdEZ1bmN0aW9uIGNhbGxlZCB3aXRoIHN0cmluZyBub3RhdGlvblxuXG4gIGlmICh0eXBlb2YgbWkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIGZpZnRocyA9IFtbJ0NiJywgJ0diJywgJ0RiJywgJ0FiJywgJ0ViJywgJ0JiJywgJ0YnLCAnQycsICdHJywgJ0QnLCAnQScsICdFJywgJ0InLCAnRiMnLCAnQyMnXSwgWydhYicsICdlYicsICdiYicsICdmJywgJ2MnLCAnZycsICdkJywgJ2EnLCAnZScsICdiJywgJ2YjJywgJ2MjJywgJ2cjJywgJ2QjJywgJ2EjJ11dO1xuICAgIHZhciBfc2ZsZW4gPSBzZi5sZW5ndGg7XG4gICAgdmFyIG5vdGUgPSBzZiB8fCAnQyc7XG4gICAgaWYgKHNmWzBdID09PSBzZlswXS50b0xvd2VyQ2FzZSgpKSBtb2RlID0gMTtcblxuICAgIGlmIChfc2ZsZW4gPiAxKSB7XG4gICAgICBzd2l0Y2ggKHNmLmNoYXJBdChfc2ZsZW4gLSAxKSkge1xuICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICBtb2RlID0gMTtcbiAgICAgICAgICBub3RlID0gc2YuY2hhckF0KDApLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgbm90ZSA9IG5vdGUuY29uY2F0KHNmLnN1YnN0cmluZygxLCBfc2ZsZW4gLSAxKSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgbW9kZSA9IDE7XG4gICAgICAgICAgbm90ZSA9IHNmLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIG5vdGUgPSBub3RlLmNvbmNhdChzZi5zdWJzdHJpbmcoMSwgX3NmbGVuIC0gMSkpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ00nOlxuICAgICAgICAgIG1vZGUgPSAwO1xuICAgICAgICAgIG5vdGUgPSBzZi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICBub3RlID0gbm90ZS5jb25jYXQoc2Yuc3Vic3RyaW5nKDEsIF9zZmxlbiAtIDEpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICBtb2RlID0gMDtcbiAgICAgICAgICBub3RlID0gc2YuY2hhckF0KDApLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgbm90ZSA9IG5vdGUuY29uY2F0KHNmLnN1YnN0cmluZygxLCBfc2ZsZW4gLSAxKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGZpZnRoaW5kZXggPSBmaWZ0aHNbbW9kZV0uaW5kZXhPZihub3RlKTtcbiAgICBzZiA9IGZpZnRoaW5kZXggPT09IC0xID8gMCA6IGZpZnRoaW5kZXggLSA3O1xuICB9IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfS0VZX1NJR05BVFVSRV9JRCwgWzB4MDJdLCAvLyBTaXplXG4gIFV0aWxzLm51bWJlclRvQnl0ZXMoc2YsIDEpLCAvLyBOdW1iZXIgb2Ygc2hhcnAgb3IgZmxhdHMgKCA8IDAgZmxhdDsgPiAwIHNoYXJwKVxuICBVdGlscy5udW1iZXJUb0J5dGVzKG1vZGUsIDEpIC8vIE1vZGU6IDAgbWFqb3IsIDEgbWlub3JcbiAgKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgbHlyaWMgbWV0YSBldmVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gTHlyaWMgdGV4dFxuICogQHJldHVybiB7THlyaWNFdmVudH1cbiAqL1xuXG52YXIgTHlyaWNFdmVudCA9IGZ1bmN0aW9uIEx5cmljRXZlbnQodGV4dCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTHlyaWNFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ21hcmtlcic7XG4gIHZhciB0ZXh0Qnl0ZXMgPSBVdGlscy5zdHJpbmdUb0J5dGVzKHRleHQpOyAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9MWVJJQ19JRCwgVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0ZXh0Qnl0ZXMubGVuZ3RoKSwgLy8gU2l6ZVxuICB0ZXh0Qnl0ZXMgLy8gVGV4dFxuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSBtYXJrZXIgbWV0YSBldmVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gTWFya2VyIHRleHRcbiAqIEByZXR1cm4ge01hcmtlckV2ZW50fVxuICovXG5cbnZhciBNYXJrZXJFdmVudCA9IGZ1bmN0aW9uIE1hcmtlckV2ZW50KHRleHQpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hcmtlckV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAnbWFya2VyJztcbiAgdmFyIHRleHRCeXRlcyA9IFV0aWxzLnN0cmluZ1RvQnl0ZXModGV4dCk7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX01BUktFUl9JRCwgVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0ZXh0Qnl0ZXMubGVuZ3RoKSwgLy8gU2l6ZVxuICB0ZXh0Qnl0ZXMgLy8gVGV4dFxuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSB0ZW1wbyBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IGJwbSAtIEJlYXRzIHBlciBtaW51dGVcbiAqIEByZXR1cm4ge1RlbXBvRXZlbnR9XG4gKi9cblxudmFyIFRlbXBvRXZlbnQgPSBmdW5jdGlvbiBUZW1wb0V2ZW50KGJwbSkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGVtcG9FdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ3RlbXBvJztcbiAgdmFyIHRlbXBvID0gTWF0aC5yb3VuZCg2MDAwMDAwMCAvIGJwbSk7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX1RFTVBPX0lELCBbMHgwM10sIC8vIFNpemVcbiAgVXRpbHMubnVtYmVyVG9CeXRlcyh0ZW1wbywgMykgLy8gVGVtcG8sIDMgYnl0ZXNcbiAgKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgdGVtcG8gbWV0YSBldmVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBicG0gLSBCZWF0cyBwZXIgbWludXRlXG4gKiBAcmV0dXJuIHtUZXh0RXZlbnR9XG4gKi9cblxudmFyIFRleHRFdmVudCA9IGZ1bmN0aW9uIFRleHRFdmVudCh0ZXh0KSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUZXh0RXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICd0ZXh0JztcbiAgdmFyIHRleHRCeXRlcyA9IFV0aWxzLnN0cmluZ1RvQnl0ZXModGV4dCk7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX1RFWFRfSUQsIFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgodGV4dEJ5dGVzLmxlbmd0aCksIC8vIFNpemVcbiAgdGV4dEJ5dGVzIC8vIFRleHRcbiAgKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgdGltZSBzaWduYXR1cmUgbWV0YSBldmVudC5cbiAqIEByZXR1cm4ge1RpbWVTaWduYXR1cmVFdmVudH1cbiAqL1xuXG52YXIgVGltZVNpZ25hdHVyZUV2ZW50ID0gZnVuY3Rpb24gVGltZVNpZ25hdHVyZUV2ZW50KG51bWVyYXRvciwgZGVub21pbmF0b3IsIG1pZGljbG9ja3NwZXJ0aWNrLCBub3Rlc3Blcm1pZGljbG9jaykge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGltZVNpZ25hdHVyZUV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAndGltZS1zaWduYXR1cmUnOyAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9USU1FX1NJR05BVFVSRV9JRCwgWzB4MDRdLCAvLyBTaXplXG4gIFV0aWxzLm51bWJlclRvQnl0ZXMobnVtZXJhdG9yLCAxKSwgLy8gTnVtZXJhdG9yLCAxIGJ5dGVzXG4gIFV0aWxzLm51bWJlclRvQnl0ZXMoTWF0aC5sb2cyKGRlbm9taW5hdG9yKSwgMSksIC8vIERlbm9taW5hdG9yIGlzIGV4cHJlc3NlZCBhcyBwb3cgb2YgMiwgMSBieXRlc1xuICBVdGlscy5udW1iZXJUb0J5dGVzKG1pZGljbG9ja3NwZXJ0aWNrIHx8IDI0LCAxKSwgLy8gTUlESSBDbG9ja3MgcGVyIHRpY2ssIDEgYnl0ZXNcbiAgVXRpbHMubnVtYmVyVG9CeXRlcyhub3Rlc3Blcm1pZGljbG9jayB8fCA4LCAxKSAvLyBOdW1iZXIgb2YgMS8zMiBub3RlcyBwZXIgTUlESSBjbG9ja3MsIDEgYnl0ZXNcbiAgKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgdGVtcG8gbWV0YSBldmVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBicG0gLSBCZWF0cyBwZXIgbWludXRlXG4gKiBAcmV0dXJuIHtUcmFja05hbWVFdmVudH1cbiAqL1xuXG52YXIgVHJhY2tOYW1lRXZlbnQgPSBmdW5jdGlvbiBUcmFja05hbWVFdmVudCh0ZXh0KSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmFja05hbWVFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ3RyYWNrLW5hbWUnO1xuICB2YXIgdGV4dEJ5dGVzID0gVXRpbHMuc3RyaW5nVG9CeXRlcyh0ZXh0KTsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfVFJBQ0tfTkFNRV9JRCwgVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0ZXh0Qnl0ZXMubGVuZ3RoKSwgLy8gU2l6ZVxuICB0ZXh0Qnl0ZXMgLy8gVGV4dFxuICApO1xufTtcblxuLyoqXG4gKiBIb2xkcyBhbGwgZGF0YSBmb3IgYSB0cmFjay5cbiAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZHMge3R5cGU6IG51bWJlciwgZGF0YTogYXJyYXksIHNpemU6IGFycmF5LCBldmVudHM6IGFycmF5fVxuICogQHJldHVybiB7VHJhY2t9XG4gKi9cblxudmFyIFRyYWNrID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVHJhY2soKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRyYWNrKTtcblxuICAgIHRoaXMudHlwZSA9IENvbnN0YW50cy5UUkFDS19DSFVOS19UWVBFO1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIHRoaXMuc2l6ZSA9IFtdO1xuICAgIHRoaXMuZXZlbnRzID0gW107XG4gICAgdGhpcy5leHBsaWNpdFRpY2tFdmVudHMgPSBbXTsgLy8gSWYgdGhlcmUgYXJlIGFueSBldmVudHMgd2l0aCBhbiBleHBsaWNpdCB0aWNrIGRlZmluZWQgdGhlbiB3ZSB3aWxsIGNyZWF0ZSBhIFwic3ViXCIgdHJhY2sgZm9yIHRob3NlXG4gICAgLy8gYW5kIG1lcmdlIHRoZW0gaW4gYW5kIHRoZSBlbmQuXG5cbiAgICB0aGlzLnRpY2tQb2ludGVyID0gMDsgLy8gRWFjaCB0aW1lIGFuIGV2ZW50IGlzIGFkZGVkIHRoaXMgd2lsbCBpbmNyZWFzZVxuICB9XG4gIC8qKlxuICAgKiBBZGRzIGFueSBldmVudCB0eXBlIHRvIHRoZSB0cmFjay5cbiAgICogRXZlbnRzIHdpdGhvdXQgYSBzcGVjaWZpYyBzdGFydFRpY2sgcHJvcGVydHkgYXJlIGFzc3VtZWQgdG8gYmUgYWRkZWQgaW4gb3JkZXIgb2YgaG93IHRoZXkgc2hvdWxkIG91dHB1dC5cbiAgICogRXZlbnRzIHdpdGggYSBzcGVjaWZpYyBzdGFydFRpY2sgcHJvcGVydHkgYXJlIHNldCBhc2lkZSBmb3Igbm93IHdpbGwgYmUgbWVyZ2VkIGluIGR1cmluZyBidWlsZCBwcm9jZXNzLlxuICAgKiBAcGFyYW0geyhOb3RlRXZlbnR8UHJvZ3JhbUNoYW5nZUV2ZW50KX0gZXZlbnRzIC0gRXZlbnQgb2JqZWN0IG9yIGFycmF5IG9mIEV2ZW50IG9iamVjdHMuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IG1hcEZ1bmN0aW9uIC0gQ2FsbGJhY2sgd2hpY2ggY2FuIGJlIHVzZWQgdG8gYXBwbHkgc3BlY2lmaWMgcHJvcGVydGllcyB0byBhbGwgZXZlbnRzLlxuICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoVHJhY2ssIFt7XG4gICAga2V5OiBcImFkZEV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEV2ZW50KGV2ZW50cywgbWFwRnVuY3Rpb24pIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIFV0aWxzLnRvQXJyYXkoZXZlbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCwgaSkge1xuICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOb3RlRXZlbnQpIHtcbiAgICAgICAgICAvLyBIYW5kbGUgbWFwIGZ1bmN0aW9uIGlmIHByb3ZpZGVkXG4gICAgICAgICAgaWYgKHR5cGVvZiBtYXBGdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIHByb3BlcnRpZXMgPSBtYXBGdW5jdGlvbihpLCBldmVudCk7XG5cbiAgICAgICAgICAgIGlmIChfdHlwZW9mKHByb3BlcnRpZXMpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICBmb3IgKHZhciBqIGluIHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGopIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgJ2NoYW5uZWwnOlxuICAgICAgICAgICAgICAgICAgICBldmVudC5jaGFubmVsID0gcHJvcGVydGllc1tqXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgJ2R1cmF0aW9uJzpcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZHVyYXRpb24gPSBwcm9wZXJ0aWVzW2pdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgY2FzZSAnc2VxdWVudGlhbCc6XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnNlcXVlbnRpYWwgPSBwcm9wZXJ0aWVzW2pdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgY2FzZSAndmVsb2NpdHknOlxuICAgICAgICAgICAgICAgICAgICBldmVudC52ZWxvY2l0eSA9IFV0aWxzLmNvbnZlcnRWZWxvY2l0eShwcm9wZXJ0aWVzW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAvLyBJZiB0aGlzIG5vdGUgZXZlbnQgaGFzIGFuIGV4cGxpY2l0IHN0YXJ0VGljayB0aGVuIHdlIG5lZWQgdG8gc2V0IGFzaWRlIGZvciBub3dcblxuXG4gICAgICAgICAgaWYgKGV2ZW50LnN0YXJ0VGljayAhPT0gbnVsbCkge1xuICAgICAgICAgICAgX3RoaXMuZXhwbGljaXRUaWNrRXZlbnRzLnB1c2goZXZlbnQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBQdXNoIGVhY2ggb24vb2ZmIGV2ZW50IHRvIHRyYWNrJ3MgZXZlbnQgc3RhY2tcbiAgICAgICAgICAgIGV2ZW50LmJ1aWxkRGF0YSgpLmV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpcy5ldmVudHMucHVzaChlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpcy5ldmVudHMucHVzaChldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJ1aWxkcyBpbnQgYXJyYXkgb2YgYWxsIGV2ZW50cy5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImJ1aWxkRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBidWlsZERhdGEoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgLy8gUmVtb3ZlIGV4aXN0aW5nIGVuZCB0cmFjayBldmVudCBhbmQgYWRkIG9uZS5cbiAgICAgIC8vIFRoaXMgbWFrZXMgc3VyZSBpdCdzIGF0IHRoZSB2ZXJ5IGVuZCBvZiB0aGUgZXZlbnQgbGlzdC5cbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRzQnlUeXBlKCdlbmQtdHJhY2snKS5hZGRFdmVudChuZXcgRW5kVHJhY2tFdmVudCgpKTsgLy8gUmVzZXRcblxuICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgICB0aGlzLnNpemUgPSBbXTtcbiAgICAgIHRoaXMudGlja1BvaW50ZXIgPSAwO1xuICAgICAgdmFyIHByZWNpc2lvbkxvc3MgPSAwO1xuICAgICAgdGhpcy5ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQsIGV2ZW50SW5kZXgpIHtcbiAgICAgICAgLy8gQnVpbGQgZXZlbnQgJiBhZGQgdG8gdG90YWwgdGljayBkdXJhdGlvblxuICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOb3RlT25FdmVudCB8fCBldmVudCBpbnN0YW5jZW9mIE5vdGVPZmZFdmVudCkge1xuICAgICAgICAgIHZhciBidWlsdCA9IGV2ZW50LmJ1aWxkRGF0YShfdGhpczIsIHByZWNpc2lvbkxvc3MpO1xuICAgICAgICAgIHByZWNpc2lvbkxvc3MgPSBVdGlscy5nZXRQcmVjaXNpb25Mb3NzKGV2ZW50LmRlbHRhV2l0aFByZWNpc2lvbkNvcnJlY3Rpb24gfHwgMCk7XG4gICAgICAgICAgX3RoaXMyLmRhdGEgPSBfdGhpczIuZGF0YS5jb25jYXQoYnVpbHQuZGF0YSk7XG4gICAgICAgICAgX3RoaXMyLnRpY2tQb2ludGVyID0gVXRpbHMuZ2V0Um91bmRlZElmQ2xvc2UoZXZlbnQudGljayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMyLmRhdGEgPSBfdGhpczIuZGF0YS5jb25jYXQoZXZlbnQuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5tZXJnZUV4cGxpY2l0VGlja0V2ZW50cygpO1xuICAgICAgdGhpcy5zaXplID0gVXRpbHMubnVtYmVyVG9CeXRlcyh0aGlzLmRhdGEubGVuZ3RoLCA0KTsgLy8gNCBieXRlcyBsb25nXG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJtZXJnZUV4cGxpY2l0VGlja0V2ZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtZXJnZUV4cGxpY2l0VGlja0V2ZW50cygpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICBpZiAoIXRoaXMuZXhwbGljaXRUaWNrRXZlbnRzLmxlbmd0aCkgcmV0dXJuOyAvLyBGaXJzdCBzb3J0IGFzYyBsaXN0IG9mIGV2ZW50cyBieSBzdGFydFRpY2tcblxuICAgICAgdGhpcy5leHBsaWNpdFRpY2tFdmVudHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYS5zdGFydFRpY2sgLSBiLnN0YXJ0VGljaztcbiAgICAgIH0pOyAvLyBOb3cgdGhpcy5leHBsaWNpdFRpY2tFdmVudHMgaXMgaW4gY29ycmVjdCBvcmRlciwgYW5kIHNvIGlzIHRoaXMuZXZlbnRzIG5hdHVyYWxseS5cbiAgICAgIC8vIEZvciBlYWNoIGV4cGxpY2l0IHRpY2sgZXZlbnQsIHNwbGljZSBpdCBpbnRvIHRoZSBtYWluIGxpc3Qgb2YgZXZlbnRzIGFuZFxuICAgICAgLy8gYWRqdXN0IHRoZSBkZWx0YSBvbiB0aGUgZm9sbG93aW5nIGV2ZW50cyBzbyB0aGV5IHN0aWxsIHBsYXkgbm9ybWFsbHkuXG5cbiAgICAgIHRoaXMuZXhwbGljaXRUaWNrRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKG5vdGVFdmVudCkge1xuICAgICAgICAvLyBDb252ZXJ0IE5vdGVFdmVudCB0byBpdCdzIHJlc3BlY3RpdmUgTm90ZU9uL05vdGVPZmYgZXZlbnRzXG4gICAgICAgIC8vIE5vdGUgdGhhdCBhcyB3ZSBzcGxpY2UgaW4gZXZlbnRzIHRoZSBkZWx0YSBmb3IgdGhlIE5vdGVPZmYgb25lcyB3aWxsXG4gICAgICAgIC8vIE5lZWQgdG8gY2hhbmdlIGJhc2VkIG9uIHdoYXQgY29tZXMgYmVmb3JlIHRoZW0gYWZ0ZXIgdGhlIHNwbGljZS5cbiAgICAgICAgbm90ZUV2ZW50LmJ1aWxkRGF0YSgpLmV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGUuYnVpbGREYXRhKF90aGlzMyk7XG4gICAgICAgIH0pOyAvLyBNZXJnZSBlYWNoIGV2ZW50IGluZGl2dWFsbHkgaW50byB0aGlzIHRyYWNrJ3MgZXZlbnQgbGlzdC5cblxuICAgICAgICBub3RlRXZlbnQuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMy5tZXJnZVNpbmdsZUV2ZW50KGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTsgLy8gSGFja3kgd2F5IHRvIHJlYnVpbGQgdHJhY2sgd2l0aCBuZXdseSBzcGxpY2VkIGV2ZW50cy4gIE5lZWQgYmV0dGVyIHNvbHV0aW9uLlxuXG4gICAgICB0aGlzLmV4cGxpY2l0VGlja0V2ZW50cyA9IFtdO1xuICAgICAgdGhpcy5idWlsZERhdGEoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTWVyZ2VzIGFub3RoZXIgdHJhY2sncyBldmVudHMgd2l0aCB0aGlzIHRyYWNrLlxuICAgICAqIEBwYXJhbSB7VHJhY2t9IHRyYWNrXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJtZXJnZVRyYWNrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1lcmdlVHJhY2sodHJhY2spIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICAvLyBGaXJzdCBidWlsZCB0aGlzIHRyYWNrIHRvIHBvcHVsYXRlIGVhY2ggZXZlbnQncyB0aWNrIHByb3BlcnR5XG4gICAgICB0aGlzLmJ1aWxkRGF0YSgpOyAvLyBUaGVuIGJ1aWxkIHRyYWNrIHRvIGJlIG1lcmdlZCBzbyB0aGF0IHRpY2sgcHJvcGVydHkgaXMgcG9wdWxhdGVkIG9uIGFsbCBldmVudHMgJiBtZXJnZSBlYWNoIGV2ZW50LlxuXG4gICAgICB0cmFjay5idWlsZERhdGEoKS5ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzNC5tZXJnZVNpbmdsZUV2ZW50KGV2ZW50KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNZXJnZXMgYSBzaW5nbGUgZXZlbnQgaW50byB0aGlzIHRyYWNrJ3MgbGlzdCBvZiBldmVudHMgYmFzZWQgb24gZXZlbnQudGljayBwcm9wZXJ0eS5cbiAgICAgKiBAcGFyYW0ge05vdGVPbkV2ZW50fE5vdGVPZmZFdmVudH0gLSBldmVudFxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibWVyZ2VTaW5nbGVFdmVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtZXJnZVNpbmdsZUV2ZW50KGV2ZW50KSB7XG4gICAgICAvLyBGaW5kIGluZGV4IG9mIGV4aXN0aW5nIGV2ZW50IHdlIG5lZWQgdG8gZm9sbG93IHdpdGhcbiAgICAgIHZhciBsYXN0RXZlbnRJbmRleCA9IDA7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2ldLnRpY2sgPiBldmVudC50aWNrKSBicmVhaztcbiAgICAgICAgbGFzdEV2ZW50SW5kZXggPSBpO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3BsaWNlZEV2ZW50SW5kZXggPSBsYXN0RXZlbnRJbmRleCArIDE7IC8vIE5lZWQgdG8gYWRqdXN0IHRoZSBkZWx0YSBvZiB0aGlzIGV2ZW50IHRvIGVuc3VyZSBpdCBmYWxscyBvbiB0aGUgY29ycmVjdCB0aWNrLlxuXG4gICAgICBldmVudC5kZWx0YSA9IGV2ZW50LnRpY2sgLSB0aGlzLmV2ZW50c1tsYXN0RXZlbnRJbmRleF0udGljazsgLy8gU3BsaWNlIHRoaXMgZXZlbnQgYXQgbGFzdEV2ZW50SW5kZXggKyAxXG5cbiAgICAgIHRoaXMuZXZlbnRzLnNwbGljZShzcGxpY2VkRXZlbnRJbmRleCwgMCwgZXZlbnQpOyAvLyBOb3cgYWRqdXN0IGRlbHRhIG9mIGFsbCBmb2xsb3dpbmcgZXZlbnRzXG5cbiAgICAgIGZvciAodmFyIGkgPSBzcGxpY2VkRXZlbnRJbmRleCArIDE7IGkgPCB0aGlzLmV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBTaW5jZSBlYWNoIGV4aXN0aW5nIGV2ZW50IHNob3VsZCBoYXZlIGEgdGljayB2YWx1ZSBhdCB0aGlzIHBvaW50IHdlIGp1c3QgbmVlZCB0b1xuICAgICAgICAvLyBhZGp1c3QgZGVsdGEgdG8gdGhhdCB0aGUgZXZlbnQgc3RpbGwgZmFsbHMgb24gdGhlIGNvcnJlY3QgdGljay5cbiAgICAgICAgdGhpcy5ldmVudHNbaV0uZGVsdGEgPSB0aGlzLmV2ZW50c1tpXS50aWNrIC0gdGhpcy5ldmVudHNbaSAtIDFdLnRpY2s7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIGV2ZW50cyBtYXRjaGluZyBzcGVjaWZpZWQgdHlwZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlIC0gRXZlbnQgdHlwZVxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlRXZlbnRzQnlUeXBlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUV2ZW50c0J5VHlwZShldmVudFR5cGUpIHtcbiAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICB0aGlzLmV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCwgaW5kZXgpIHtcbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IGV2ZW50VHlwZSkge1xuICAgICAgICAgIF90aGlzNS5ldmVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0ZW1wbyBvZiB0aGUgTUlESSBmaWxlLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBicG0gLSBUZW1wbyBpbiBiZWF0cyBwZXIgbWludXRlLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2V0VGVtcG9cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VGVtcG8oYnBtKSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgVGVtcG9FdmVudChicG0pKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aW1lIHNpZ25hdHVyZS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbnVtZXJhdG9yIC0gVG9wIG51bWJlciBvZiB0aGUgdGltZSBzaWduYXR1cmUuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRlbm9taW5hdG9yIC0gQm90dG9tIG51bWJlciBvZiB0aGUgdGltZSBzaWduYXR1cmUuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pZGljbG9ja3NwZXJ0aWNrIC0gRGVmYXVsdHMgdG8gMjQuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5vdGVzcGVybWlkaWNsb2NrIC0gRGVmYXVsdHMgdG8gOC5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNldFRpbWVTaWduYXR1cmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VGltZVNpZ25hdHVyZShudW1lcmF0b3IsIGRlbm9taW5hdG9yLCBtaWRpY2xvY2tzcGVydGljaywgbm90ZXNwZXJtaWRpY2xvY2spIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBUaW1lU2lnbmF0dXJlRXZlbnQobnVtZXJhdG9yLCBkZW5vbWluYXRvciwgbWlkaWNsb2Nrc3BlcnRpY2ssIG5vdGVzcGVybWlkaWNsb2NrKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMga2V5IHNpZ25hdHVyZS5cbiAgICAgKiBAcGFyYW0geyp9IHNmIC1cbiAgICAgKiBAcGFyYW0geyp9IG1pIC1cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNldEtleVNpZ25hdHVyZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRLZXlTaWduYXR1cmUoc2YsIG1pKSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgS2V5U2lnbmF0dXJlRXZlbnQoc2YsIG1pKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgdGV4dCB0byBNSURJIGZpbGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUZXh0IHRvIGFkZC5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFkZFRleHRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkVGV4dCh0ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgVGV4dEV2ZW50KHRleHQpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBjb3B5cmlnaHQgdG8gTUlESSBmaWxlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCBvZiBjb3B5cmlnaHQgbGluZS5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFkZENvcHlyaWdodFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRDb3B5cmlnaHQodGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IENvcHlyaWdodEV2ZW50KHRleHQpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBTZXF1ZW5jZS9UcmFjayBOYW1lLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCBvZiB0cmFjayBuYW1lLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkVHJhY2tOYW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZFRyYWNrTmFtZSh0ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgVHJhY2tOYW1lRXZlbnQodGV4dCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIGluc3RydW1lbnQgbmFtZSBvZiB0cmFjay5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIE5hbWUgb2YgaW5zdHJ1bWVudC5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFkZEluc3RydW1lbnROYW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEluc3RydW1lbnROYW1lKHRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBJbnN0cnVtZW50TmFtZUV2ZW50KHRleHQpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBtYXJrZXIgdG8gTUlESSBmaWxlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gTWFya2VyIHRleHQuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhZGRNYXJrZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkTWFya2VyKHRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBNYXJrZXJFdmVudCh0ZXh0KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgY3VlIHBvaW50IHRvIE1JREkgZmlsZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRleHQgb2YgY3VlIHBvaW50LlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkQ3VlUG9pbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkQ3VlUG9pbnQodGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IEN1ZVBvaW50RXZlbnQodGV4dCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGx5cmljIHRvIE1JREkgZmlsZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIEx5cmljIHRleHQgdG8gYWRkLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkTHlyaWNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkTHlyaWModGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IEx5cmljRXZlbnQodGV4dCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGFubmVsIG1vZGUgbWVzc2FnZXNcbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInBvbHlNb2RlT25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcG9seU1vZGVPbigpIHtcbiAgICAgIHZhciBldmVudCA9IG5ldyBOb3RlT25FdmVudCh7XG4gICAgICAgIGRhdGE6IFsweDAwLCAweEIwLCAweDdFLCAweDAwXVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChldmVudCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgYSBwaXRjaCBiZW5kLlxuICAgICAqIEBwYXJhbSB7ZmxvYXR9IGJlbmQgLSBCZW5kIHZhbHVlIHJhbmdpbmcgWy0xLDFdLCB6ZXJvIG1lYW5pbmcgbm8gYmVuZC5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNldFBpdGNoQmVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQaXRjaEJlbmQoYmVuZCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IFBpdGNoQmVuZEV2ZW50KHtcbiAgICAgICAgYmVuZDogYmVuZFxuICAgICAgfSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgY29udHJvbGxlciBjaGFuZ2UgZXZlbnRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyIC0gQ29udHJvbCBudW1iZXIuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gQ29udHJvbCB2YWx1ZS5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNvbnRyb2xsZXJDaGFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29udHJvbGxlckNoYW5nZShudW1iZXIsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgQ29udHJvbGxlckNoYW5nZUV2ZW50KHtcbiAgICAgICAgY29udHJvbGxlck51bWJlcjogbnVtYmVyLFxuICAgICAgICBjb250cm9sbGVyVmFsdWU6IHZhbHVlXG4gICAgICB9KSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFRyYWNrO1xufSgpO1xuXG52YXIgVmV4RmxvdyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFZleEZsb3coKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFZleEZsb3cpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFZleEZsb3csIFt7XG4gICAga2V5OiBcInRyYWNrRnJvbVZvaWNlXCIsXG4gICAgdmFsdWU6XG4gICAgLyoqXG4gICAgICogU3VwcG9ydCBmb3IgY29udmVydGluZyBWZXhGbG93IHZvaWNlIGludG8gTWlkaVdyaXRlckpTIHRyYWNrXG4gICAgICogQHJldHVybiBNaWRpV3JpdGVyLlRyYWNrIG9iamVjdFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHRyYWNrRnJvbVZvaWNlKHZvaWNlKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge1xuICAgICAgICBhZGRSZW5kZXJlZEFjY2lkZW50YWxzOiBmYWxzZVxuICAgICAgfTtcbiAgICAgIHZhciB0cmFjayA9IG5ldyBUcmFjaygpO1xuICAgICAgdmFyIHdhaXQgPSBbXTtcbiAgICAgIHZvaWNlLnRpY2thYmxlcy5mb3JFYWNoKGZ1bmN0aW9uICh0aWNrYWJsZSkge1xuICAgICAgICBpZiAodGlja2FibGUubm90ZVR5cGUgPT09ICduJykge1xuICAgICAgICAgIHRyYWNrLmFkZEV2ZW50KG5ldyBOb3RlRXZlbnQoe1xuICAgICAgICAgICAgcGl0Y2g6IHRpY2thYmxlLmtleXMubWFwKGZ1bmN0aW9uIChwaXRjaCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmNvbnZlcnRQaXRjaChwaXRjaCwgaW5kZXgsIHRpY2thYmxlLCBvcHRpb25zLmFkZFJlbmRlcmVkQWNjaWRlbnRhbHMpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBkdXJhdGlvbjogX3RoaXMuY29udmVydER1cmF0aW9uKHRpY2thYmxlKSxcbiAgICAgICAgICAgIHdhaXQ6IHdhaXRcbiAgICAgICAgICB9KSk7IC8vIHJlc2V0IHdhaXRcblxuICAgICAgICAgIHdhaXQgPSBbXTtcbiAgICAgICAgfSBlbHNlIGlmICh0aWNrYWJsZS5ub3RlVHlwZSA9PT0gJ3InKSB7XG4gICAgICAgICAgLy8gbW92ZSBvbiB0byB0aGUgbmV4dCB0aWNrYWJsZSBhbmQgYWRkIHRoaXMgdG8gdGhlIHN0YWNrXG4gICAgICAgICAgLy8gb2YgdGhlIGB3YWl0YCBwcm9wZXJ0eSBmb3IgdGhlIG5leHQgbm90ZSBldmVudFxuICAgICAgICAgIHdhaXQucHVzaChfdGhpcy5jb252ZXJ0RHVyYXRpb24odGlja2FibGUpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0pOyAvLyBUaGVyZSBtYXkgYmUgb3V0c3RhbmRpbmcgcmVzdHMgYXQgdGhlIGVuZCBvZiB0aGUgdHJhY2ssXG4gICAgICAvLyBwYWQgd2l0aCBhIGdob3N0IG5vdGUgKHplcm8gZHVyYXRpb24gYW5kIHZlbG9jaXR5KSwganVzdCB0byBjYXB0dXJlIHRoZSB3YWl0LlxuXG4gICAgICBpZiAod2FpdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRyYWNrLmFkZEV2ZW50KG5ldyBOb3RlRXZlbnQoe1xuICAgICAgICAgIHBpdGNoOiAnW2M0XScsXG4gICAgICAgICAgZHVyYXRpb246ICcwJyxcbiAgICAgICAgICB3YWl0OiB3YWl0LFxuICAgICAgICAgIHZlbG9jaXR5OiAnMCdcbiAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJhY2s7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIFZleEZsb3cgcGl0Y2ggc3ludGF4IHRvIE1pZGlXcml0ZXJKUyBzeW50YXhcbiAgICAgKiBAcGFyYW0gcGl0Y2ggc3RyaW5nXG4gICAgICogQHBhcmFtIGluZGV4IHBpdGNoIGluZGV4XG4gICAgICogQHBhcmFtIG5vdGUgc3RydWN0IGZyb20gVmV4Zmxvd1xuICAgICAqIEBwYXJhbSBhZGRSZW5kZXJlZEFjY2lkZW50YWxzIGFkZHMgVmV4ZmxvdyByZW5kZXJlZCBhY2NpZGVudGFsc1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY29udmVydFBpdGNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbnZlcnRQaXRjaChwaXRjaCwgaW5kZXgsIG5vdGUpIHtcbiAgICAgIHZhciBhZGRSZW5kZXJlZEFjY2lkZW50YWxzID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiBmYWxzZTtcbiAgICAgIC8vIFNwbGl0cyBub3RlIG5hbWUgZnJvbSBvY3RhdmVcbiAgICAgIHZhciBwaXRjaFBhcnRzID0gcGl0Y2guc3BsaXQoJy8nKTsgLy8gUmV0cmlldmVzIGFjY2lkZW50YWxzIGZyb20gcGl0Y2hcbiAgICAgIC8vIFJlbW92ZXMgbmF0dXJhbCBhY2NpZGVudGFscyBzaW5jZSB0aGV5IGFyZSBub3QgYWNjZXB0ZWQgaW4gVG9uYWwgTWlkaVxuXG4gICAgICB2YXIgYWNjaWRlbnRhbHMgPSBwaXRjaFBhcnRzWzBdLnN1YnN0cmluZygxKS5yZXBsYWNlKCduJywgJycpO1xuXG4gICAgICBpZiAoYWRkUmVuZGVyZWRBY2NpZGVudGFscykge1xuICAgICAgICB2YXIgX25vdGUkZ2V0QWNjaWRlbnRhbHM7XG5cbiAgICAgICAgKF9ub3RlJGdldEFjY2lkZW50YWxzID0gbm90ZS5nZXRBY2NpZGVudGFscygpKSA9PT0gbnVsbCB8fCBfbm90ZSRnZXRBY2NpZGVudGFscyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX25vdGUkZ2V0QWNjaWRlbnRhbHMuZm9yRWFjaChmdW5jdGlvbiAoYWNjaWRlbnRhbCkge1xuICAgICAgICAgIGlmIChhY2NpZGVudGFsLmluZGV4ID09PSBpbmRleCkge1xuICAgICAgICAgICAgaWYgKGFjY2lkZW50YWwudHlwZSA9PT0gJ24nKSB7XG4gICAgICAgICAgICAgIGFjY2lkZW50YWxzID0gJyc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhY2NpZGVudGFscyArPSBhY2NpZGVudGFsLnR5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBpdGNoUGFydHNbMF1bMF0gKyBhY2NpZGVudGFscyArIHBpdGNoUGFydHNbMV07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIFZleEZsb3cgZHVyYXRpb24gc3ludGF4IHRvIE1pZGlXcml0ZXJKUyBzeW50YXhcbiAgICAgKiBAcGFyYW0gbm90ZSBzdHJ1Y3QgZnJvbSBWZXhGbG93XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjb252ZXJ0RHVyYXRpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29udmVydER1cmF0aW9uKG5vdGUpIHtcbiAgICAgIHJldHVybiAnZCcucmVwZWF0KG5vdGUuZG90cykgKyB0aGlzLmNvbnZlcnRCYXNlRHVyYXRpb24obm90ZS5kdXJhdGlvbikgKyAobm90ZS50dXBsZXQgPyAndCcgKyBub3RlLnR1cGxldC5udW1fbm90ZXMgOiAnJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIFZleEZsb3cgYmFzZSBkdXJhdGlvbiBzeW50YXggdG8gTWlkaVdyaXRlckpTIHN5bnRheFxuICAgICAqIEBwYXJhbSBkdXJhdGlvbiBWZXhmbG93IGR1cmF0aW9uXG4gICAgICogQHJldHVybnMgTWlkaVdyaXRlckpTIGR1cmF0aW9uXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjb252ZXJ0QmFzZUR1cmF0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbnZlcnRCYXNlRHVyYXRpb24oZHVyYXRpb24pIHtcbiAgICAgIHN3aXRjaCAoZHVyYXRpb24pIHtcbiAgICAgICAgY2FzZSAndyc6XG4gICAgICAgICAgcmV0dXJuICcxJztcblxuICAgICAgICBjYXNlICdoJzpcbiAgICAgICAgICByZXR1cm4gJzInO1xuXG4gICAgICAgIGNhc2UgJ3EnOlxuICAgICAgICAgIHJldHVybiAnNCc7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gZHVyYXRpb247XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFZleEZsb3c7XG59KCk7XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgaGVhZGVyIGNodW5rIHNlY3Rpb24gb2YgYSBNSURJIGZpbGUuXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyT2ZUcmFja3MgLSBOdW1iZXIgb2YgdHJhY2tzXG4gKiBAcmV0dXJuIHtIZWFkZXJDaHVua31cbiAqL1xuXG52YXIgSGVhZGVyQ2h1bmsgPSBmdW5jdGlvbiBIZWFkZXJDaHVuayhudW1iZXJPZlRyYWNrcykge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSGVhZGVyQ2h1bmspO1xuXG4gIHRoaXMudHlwZSA9IENvbnN0YW50cy5IRUFERVJfQ0hVTktfVFlQRTtcbiAgdmFyIHRyYWNrVHlwZSA9IG51bWJlck9mVHJhY2tzID4gMSA/IENvbnN0YW50cy5IRUFERVJfQ0hVTktfRk9STUFUMSA6IENvbnN0YW50cy5IRUFERVJfQ0hVTktfRk9STUFUMDtcbiAgdGhpcy5kYXRhID0gdHJhY2tUeXBlLmNvbmNhdChVdGlscy5udW1iZXJUb0J5dGVzKG51bWJlck9mVHJhY2tzLCAyKSwgLy8gdHdvIGJ5dGVzIGxvbmcsXG4gIENvbnN0YW50cy5IRUFERVJfQ0hVTktfRElWSVNJT04pO1xuICB0aGlzLnNpemUgPSBbMCwgMCwgMCwgdGhpcy5kYXRhLmxlbmd0aF07XG59O1xuXG4vKipcbiAqIE9iamVjdCB0aGF0IHB1dHMgdG9nZXRoZXIgdHJhY2tzIGFuZCBwcm92aWRlcyBtZXRob2RzIGZvciBmaWxlIG91dHB1dC5cbiAqIEBwYXJhbSB7YXJyYXl8VHJhY2t9IHRyYWNrcyAtIEEgc2luZ2xlIHtUcmFja30gb2JqZWN0IG9yIGFuIGFycmF5IG9mIHtUcmFja30gb2JqZWN0cy5cbiAqIEByZXR1cm4ge1dyaXRlcn1cbiAqL1xuXG52YXIgV3JpdGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gV3JpdGVyKHRyYWNrcykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV3JpdGVyKTtcblxuICAgIC8vIEVuc3VyZSB0cmFjayBpcyBhbiBhcnJheVxuICAgIHRyYWNrcyA9IFV0aWxzLnRvQXJyYXkodHJhY2tzKTtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICB0aGlzLmRhdGEucHVzaChuZXcgSGVhZGVyQ2h1bmsodHJhY2tzLmxlbmd0aCkpOyAvLyBGb3IgZWFjaCB0cmFjayBhZGQgZmluYWwgZW5kIG9mIHRyYWNrIGV2ZW50IGFuZCBidWlsZCBkYXRhXG5cbiAgICB0cmFja3MuZm9yRWFjaChmdW5jdGlvbiAodHJhY2ssIGkpIHtcbiAgICAgIF90aGlzLmRhdGEucHVzaCh0cmFjay5idWlsZERhdGEoKSk7XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIEJ1aWxkcyB0aGUgZmlsZSBpbnRvIGEgVWludDhBcnJheVxuICAgKiBAcmV0dXJuIHtVaW50OEFycmF5fVxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhXcml0ZXIsIFt7XG4gICAga2V5OiBcImJ1aWxkRmlsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBidWlsZEZpbGUoKSB7XG4gICAgICB2YXIgYnVpbGQgPSBbXTsgLy8gRGF0YSBjb25zaXN0cyBvZiBjaHVua3Mgd2hpY2ggY29uc2lzdHMgb2YgZGF0YVxuXG4gICAgICB0aGlzLmRhdGEuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gYnVpbGQgPSBidWlsZC5jb25jYXQoZC50eXBlLCBkLnNpemUsIGQuZGF0YSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShidWlsZCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnQgZmlsZSBidWZmZXIgdG8gYSBiYXNlNjQgc3RyaW5nLiAgRGlmZmVyZW50IG1ldGhvZHMgZGVwZW5kaW5nIG9uIGlmIGJyb3dzZXIgb3Igbm9kZS5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJiYXNlNjRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmFzZTY0KCkge1xuICAgICAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSByZXR1cm4gYnRvYShTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIHRoaXMuYnVpbGRGaWxlKCkpKTtcbiAgICAgIHJldHVybiBCdWZmZXIuZnJvbSh0aGlzLmJ1aWxkRmlsZSgpKS50b1N0cmluZygnYmFzZTY0Jyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZGF0YSBVUkkuXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZGF0YVVyaVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkYXRhVXJpKCkge1xuICAgICAgcmV0dXJuICdkYXRhOmF1ZGlvL21pZGk7YmFzZTY0LCcgKyB0aGlzLmJhc2U2NCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBPdXRwdXQgdG8gc3Rkb3V0XG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3Rkb3V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0ZG91dCgpIHtcbiAgICAgIHJldHVybiBwcm9jZXNzLnN0ZG91dC53cml0ZShuZXcgQnVmZmVyKHRoaXMuYnVpbGRGaWxlKCkpKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gV3JpdGVyO1xufSgpO1xuXG52YXIgbWFpbiA9IHtcbiAgQ29uc3RhbnRzOiBDb25zdGFudHMsXG4gIE5vdGVPbkV2ZW50OiBOb3RlT25FdmVudCxcbiAgTm90ZU9mZkV2ZW50OiBOb3RlT2ZmRXZlbnQsXG4gIE5vdGVFdmVudDogTm90ZUV2ZW50LFxuICBQaXRjaEJlbmRFdmVudDogUGl0Y2hCZW5kRXZlbnQsXG4gIFByb2dyYW1DaGFuZ2VFdmVudDogUHJvZ3JhbUNoYW5nZUV2ZW50LFxuICBUcmFjazogVHJhY2ssXG4gIFV0aWxzOiBVdGlscyxcbiAgVmV4RmxvdzogVmV4RmxvdyxcbiAgV3JpdGVyOiBXcml0ZXJcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbWFpbjtcbiIsICJpbXBvcnQgeyBVdGlscyB9IGZyb20gJ21pZGktd3JpdGVyLWpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgdGhpcy5iZWF0cyA9IFtdO1xuICAgIHRoaXMuYmFycyA9IDg7XG4gICAgdGhpcy5icG0gPSAxMjc7XG4gICAgdGhpcy5mcmFxID0gMSAvIHRoaXMuYmFycztcbiAgICB0aGlzLnRyYWNrTm9kZXMgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy50cmFja1N0YXRlID0gbmV3IE1hcCgpO1xuICAgIHRoaXMuZGVsYXlEaXZpc2lvbiA9IDMgLyA4O1xuICAgIHRoaXMub25CZWF0ID0gbnVsbDtcbiAgICB0aGlzLmluaXRBdWRpbygpO1xuICB9XG5cbiAgaW5pdEF1ZGlvKCkge1xuICAgIGNvbnN0IEF1ZGlvQ29udGV4dEZ1bmMgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQ7XG5cbiAgICB0aGlzLmF1ZGlvQ29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHRGdW5jKCk7XG4gICAgdGhpcy5kZXN0aW5hdGlvbiA9IHRoaXMuYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uO1xuICAgIHRoaXMucGxheWVyID0gbmV3IFdlYkF1ZGlvRm9udFBsYXllcigpO1xuICAgIHRoaXMuZXF1YWxpemVyID0gdGhpcy5wbGF5ZXIuY3JlYXRlQ2hhbm5lbCh0aGlzLmF1ZGlvQ29udGV4dCk7XG4gICAgdGhpcy5tYXN0ZXJHYWluID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgIHRoaXMuZWNobyA9IHRoaXMucGxheWVyLmNyZWF0ZVJldmVyYmVyYXRvcih0aGlzLmF1ZGlvQ29udGV4dCk7XG4gICAgdGhpcy5kZWxheUlucHV0ID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgIHRoaXMuZGVsYXkgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVEZWxheSg0KTtcbiAgICB0aGlzLmRlbGF5RmVlZGJhY2sgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgdGhpcy5kZWxheVdldCA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKTtcblxuICAgIHRoaXMubWFzdGVyR2Fpbi5nYWluLnZhbHVlID0gMTtcbiAgICB0aGlzLmRlbGF5RmVlZGJhY2suZ2Fpbi52YWx1ZSA9IDAuMzU7XG4gICAgdGhpcy5kZWxheVdldC5nYWluLnZhbHVlID0gMTtcbiAgICB0aGlzLmRlbGF5SW5wdXQuZ2Fpbi52YWx1ZSA9IDE7XG5cbiAgICB0aGlzLmVxdWFsaXplci5vdXRwdXQuY29ubmVjdCh0aGlzLm1hc3RlckdhaW4pO1xuICAgIHRoaXMuZWNoby5vdXRwdXQuY29ubmVjdCh0aGlzLm1hc3RlckdhaW4pO1xuXG4gICAgdGhpcy5kZWxheUlucHV0LmNvbm5lY3QodGhpcy5kZWxheSk7XG4gICAgdGhpcy5kZWxheS5jb25uZWN0KHRoaXMuZGVsYXlGZWVkYmFjayk7XG4gICAgdGhpcy5kZWxheUZlZWRiYWNrLmNvbm5lY3QodGhpcy5kZWxheSk7XG4gICAgdGhpcy5kZWxheS5jb25uZWN0KHRoaXMuZGVsYXlXZXQpO1xuICAgIHRoaXMuZGVsYXlXZXQuY29ubmVjdCh0aGlzLm1hc3RlckdhaW4pO1xuXG4gICAgdGhpcy5tYXN0ZXJHYWluLmNvbm5lY3QodGhpcy5kZXN0aW5hdGlvbik7XG4gICAgdGhpcy51cGRhdGVEZWxheVRpbWUoKTtcbiAgfVxuXG4gIHBpdGNoKHZhbHVlKSB7XG4gICAgcmV0dXJuIFV0aWxzLmdldFBpdGNoKHZhbHVlKSArIHRoaXMub2Zmc2V0O1xuICB9XG5cbiAgcHJlbG9hZChkYXRhKSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YSB8fCB0aGlzLmRhdGE7XG5cbiAgICBsZXQgY291bnQgPSAwO1xuICAgIHRoaXMuZGF0YS5mb3JFYWNoKHRyYWNrID0+IHtcbiAgICAgIGlmICh0cmFja1syXS5sZW5ndGggPiBjb3VudCkgY291bnQgPSB0cmFja1syXS5sZW5ndGg7XG5cbiAgICAgIGNvbnN0IGluZm8gPSB0cmFja1swXSA+PSAyMDAwXG4gICAgICAgID8gdGhpcy5wbGF5ZXIubG9hZGVyLmRydW1JbmZvKHRyYWNrWzBdIC0gMjAwMClcbiAgICAgICAgOiB0aGlzLnBsYXllci5sb2FkZXIuaW5zdHJ1bWVudEluZm8odHJhY2tbMF0pO1xuXG4gICAgICB0aGlzLmNhY2hlSW5zdHJ1bWVudChpbmZvKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGR1cmF0aW9uID0gVXRpbHMuZ2V0VGlja0R1cmF0aW9uKCczMicpIC8gMjU2O1xuICAgIGNvbnN0IG5leHRLZXlzID0gbmV3IFNldCgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBiZWF0ID0gbmV3IE1hcCgpO1xuXG4gICAgICB0aGlzLmRhdGEuZm9yRWFjaCh0cmFjayA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IGAke3RyYWNrWzBdfS8ke3RyYWNrWzFdfWA7XG4gICAgICAgIG5leHRLZXlzLmFkZChrZXkpO1xuICAgICAgICBpZiAoIWJlYXQuaGFzKGtleSkpIGJlYXQuc2V0KGtleSwgeyBkcnVtczogW10sIG5vdGVzOiBbXSB9KTtcbiAgICAgICAgY29uc3Qgc2xvdCA9IGJlYXQuZ2V0KGtleSk7XG4gICAgICAgIGNvbnN0IHRpY2sgPSB0cmFja1syXVtpXSB8fCB7fTtcblxuICAgICAgICBpZiAodHJhY2tbMF0gPj0gMjAwMCkge1xuICAgICAgICAgIHNsb3QuZHJ1bXMucHVzaChbdHJhY2tbMF0gLSAyMDAwLCB0aWNrLnZdKTtcbiAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHRpY2subikpIHtcbiAgICAgICAgICB0aWNrLm4uZm9yRWFjaCh0b25lID0+IHtcbiAgICAgICAgICAgIHNsb3Qubm90ZXMucHVzaChbdHJhY2tbMF0sIHRoaXMucGl0Y2godG9uZSksIGR1cmF0aW9uLCB0aWNrLnZdKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aWNrLm4pIHtcbiAgICAgICAgICBzbG90Lm5vdGVzLnB1c2goW3RyYWNrWzBdLCB0aGlzLnBpdGNoKHRpY2subiksIGR1cmF0aW9uLCB0aWNrLnZdKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuYmVhdHNbaV0gPSBiZWF0O1xuICAgIH1cblxuICAgIHRoaXMudHJhY2tOb2Rlcy5mb3JFYWNoKChub2Rlcywga2V5KSA9PiB7XG4gICAgICBpZiAoIW5leHRLZXlzLmhhcyhrZXkpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbm9kZXMuZHJ5LmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICBub2Rlcy5yZXZlcmJTZW5kLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICBub2Rlcy5kZWxheVNlbmQuZGlzY29ubmVjdCgpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaWdub3JlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmFja05vZGVzLmRlbGV0ZShrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbmV4dEtleXMuZm9yRWFjaChrZXkgPT4gdGhpcy5nZXRUcmFja05vZGVzKGtleSkpO1xuICB9XG5cbiAgY29udGV4dFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXVkaW9Db250ZXh0LmN1cnJlbnRUaW1lO1xuICB9XG5cbiAgcGxheUxvb3BNYWNoaW5lKGZyb21CZWF0KSB7XG4gICAgdGhpcy5zdGFydFBsYXlMb29wKHRoaXMuYmVhdHMsIHRoaXMuYnBtLCB0aGlzLmZyYXEsIGZyb21CZWF0KTtcbiAgfVxuXG4gIHN0b3BMb29wTWFjaGluZSgpIHtcbiAgICB0aGlzLnN0b3BQbGF5TG9vcCgpO1xuICB9XG5cbiAgc2V0TG9vcE1hY2hpbmUoZGF0YSwgdGVtcG8sIGxlbmd0aCwgdHJhbnNwb3NlKSB7XG4gICAgY29uc3QgY2hhbmdlZCA9IHRlbXBvICE9PSB0aGlzLmJwbVxuICAgICAgfHwgbGVuZ3RoICE9PSB0aGlzLmJhcnNcbiAgICAgIHx8IHRyYW5zcG9zZSAhPT0gdGhpcy5vZmZzZXQ7XG5cbiAgICBpZiAoY2hhbmdlZCkgdGhpcy5zdG9wUGxheUxvb3AoKTtcblxuICAgIHRoaXMuYmVhdHMubGVuZ3RoID0gMDtcbiAgICB0aGlzLmJwbSA9IHRlbXBvIHx8IDEyNztcbiAgICB0aGlzLmJhcnMgPSBsZW5ndGggfHwgMTY7XG4gICAgdGhpcy5vZmZzZXQgPSB0cmFuc3Bvc2UgfHwgMDtcbiAgICB0aGlzLnVwZGF0ZURlbGF5VGltZSgpO1xuICAgIHRoaXMucHJlbG9hZChkYXRhKTtcbiAgICB0aGlzLmZyYXEgPSAxIC8gdGhpcy5iYXJzO1xuXG4gICAgcmV0dXJuIGNoYW5nZWQ7XG4gIH1cblxuICBzdGFydFBsYXlMb29wKGJlYXRzLCBicG0sIGRlbnNpdHksIGZyb21CZWF0KSB7XG4gICAgdGhpcy5sb29wU3RhcnRlZCA9IHRydWU7XG5cbiAgICBjb25zdCB3aG9sZU5vdGVEdXJhdGlvbiA9ICg0ICogNjApIC8gYnBtO1xuXG4gICAgdGhpcy5iZWF0SW5kZXggPSBmcm9tQmVhdCA8IGJlYXRzLmxlbmd0aCA/IGZyb21CZWF0IDogMDtcbiAgICB0aGlzLnBsYXlCZWF0QXQodGhpcy5jb250ZXh0VGltZSgpLCBiZWF0c1t0aGlzLmJlYXRJbmRleF0sIGJwbSk7XG5cbiAgICBsZXQgbmV4dExvb3BUaW1lID0gdGhpcy5jb250ZXh0VGltZSgpICsgZGVuc2l0eSAqIHdob2xlTm90ZUR1cmF0aW9uO1xuICAgIHRoaXMubG9vcEludGVydmFsSUQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5jb250ZXh0VGltZSgpID4gbmV4dExvb3BUaW1lIC0gZGVuc2l0eSAqIHdob2xlTm90ZUR1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMuYmVhdEluZGV4ICs9IDE7XG4gICAgICAgIGlmICh0aGlzLmJlYXRJbmRleCA+PSBiZWF0cy5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLmJlYXRJbmRleCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBsYXlCZWF0QXQobmV4dExvb3BUaW1lLCBiZWF0c1t0aGlzLmJlYXRJbmRleF0sIGJwbSk7XG4gICAgICAgIG5leHRMb29wVGltZSArPSBkZW5zaXR5ICogd2hvbGVOb3RlRHVyYXRpb247XG4gICAgICB9XG4gICAgfSwgMjIpO1xuICB9XG5cbiAgc3RvcFBsYXlMb29wKCkge1xuICAgIHRoaXMubG9vcFN0YXJ0ZWQgPSBmYWxzZTtcbiAgICBjbGVhckludGVydmFsKHRoaXMubG9vcEludGVydmFsSUQpO1xuICAgIHRoaXMuY2FuY2VsUXVldWUoKTtcbiAgfVxuXG4gIGdldFRyYWNrU3RhdGUoa2V5KSB7XG4gICAgaWYgKCF0aGlzLnRyYWNrU3RhdGUuaGFzKGtleSkpIHtcbiAgICAgIHRoaXMudHJhY2tTdGF0ZS5zZXQoa2V5LCB7XG4gICAgICAgIG11dGVkOiBmYWxzZSxcbiAgICAgICAgc29sbzogZmFsc2UsXG4gICAgICAgIHZvbHVtZTogMSxcbiAgICAgICAgcmV2ZXJiU2VuZDogMCxcbiAgICAgICAgZGVsYXlTZW5kOiAwLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnRyYWNrU3RhdGUuZ2V0KGtleSk7XG4gIH1cblxuICBhcHBseVRyYWNrU3RhdGUoa2V5KSB7XG4gICAgY29uc3Qgbm9kZXMgPSB0aGlzLmdldFRyYWNrTm9kZXMoa2V5KTtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0VHJhY2tTdGF0ZShrZXkpO1xuICAgIG5vZGVzLnN0YXRlID0gc3RhdGU7XG4gICAgbm9kZXMuZHJ5LmdhaW4udmFsdWUgPSBzdGF0ZS5tdXRlZCA/IDAgOiBzdGF0ZS52b2x1bWU7XG4gICAgbm9kZXMucmV2ZXJiU2VuZC5nYWluLnZhbHVlID0gc3RhdGUucmV2ZXJiU2VuZDtcbiAgICBub2Rlcy5kZWxheVNlbmQuZ2Fpbi52YWx1ZSA9IHN0YXRlLmRlbGF5U2VuZDtcbiAgfVxuXG4gIGdldFRyYWNrTm9kZXMoa2V5KSB7XG4gICAgaWYgKHRoaXMudHJhY2tOb2Rlcy5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIHRoaXMudHJhY2tOb2Rlcy5nZXQoa2V5KTtcbiAgICB9XG5cbiAgICBjb25zdCBkcnkgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgY29uc3QgcmV2ZXJiU2VuZCA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgICBjb25zdCBkZWxheVNlbmQgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCk7XG5cbiAgICBkcnkuZ2Fpbi52YWx1ZSA9IDE7XG4gICAgcmV2ZXJiU2VuZC5nYWluLnZhbHVlID0gMDtcbiAgICBkZWxheVNlbmQuZ2Fpbi52YWx1ZSA9IDA7XG5cbiAgICBkcnkuY29ubmVjdCh0aGlzLmVxdWFsaXplci5pbnB1dCk7XG4gICAgcmV2ZXJiU2VuZC5jb25uZWN0KHRoaXMuZWNoby5pbnB1dCk7XG4gICAgZGVsYXlTZW5kLmNvbm5lY3QodGhpcy5kZWxheUlucHV0KTtcblxuICAgIGNvbnN0IG5vZGVzID0geyBkcnksIHJldmVyYlNlbmQsIGRlbGF5U2VuZCB9O1xuICAgIHRoaXMudHJhY2tOb2Rlcy5zZXQoa2V5LCBub2Rlcyk7XG4gICAgdGhpcy5hcHBseVRyYWNrU3RhdGUoa2V5KTtcbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBzZXRNdXRlKGtleSwgdmFsdWUpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0VHJhY2tTdGF0ZShrZXkpO1xuICAgIHN0YXRlLm11dGVkID0gQm9vbGVhbih2YWx1ZSk7XG4gICAgdGhpcy5hcHBseVRyYWNrU3RhdGUoa2V5KTtcbiAgfVxuXG4gIHNldFNvbG8oa2V5LCB2YWx1ZSkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRUcmFja1N0YXRlKGtleSk7XG4gICAgc3RhdGUuc29sbyA9IEJvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgc2V0Vm9sdW1lKGtleSwgdmFsdWUpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0VHJhY2tTdGF0ZShrZXkpO1xuICAgIHN0YXRlLnZvbHVtZSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHZhbHVlKSk7XG4gICAgdGhpcy5hcHBseVRyYWNrU3RhdGUoa2V5KTtcbiAgfVxuXG4gIHNldFJldmVyYlNlbmQoa2V5LCB2YWx1ZSkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRUcmFja1N0YXRlKGtleSk7XG4gICAgc3RhdGUucmV2ZXJiU2VuZCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHZhbHVlKSk7XG4gICAgdGhpcy5hcHBseVRyYWNrU3RhdGUoa2V5KTtcbiAgfVxuXG4gIHNldERlbGF5U2VuZChrZXksIHZhbHVlKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFRyYWNrU3RhdGUoa2V5KTtcbiAgICBzdGF0ZS5kZWxheVNlbmQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB2YWx1ZSkpO1xuICAgIHRoaXMuYXBwbHlUcmFja1N0YXRlKGtleSk7XG4gIH1cblxuICBzZXREZWxheUZlZWRiYWNrKHZhbHVlKSB7XG4gICAgdGhpcy5kZWxheUZlZWRiYWNrLmdhaW4udmFsdWUgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigwLjc1LCB2YWx1ZSkpO1xuICB9XG5cbiAgc2V0RGVsYXlUaW1lKHZhbHVlKSB7XG4gICAgdGhpcy5kZWxheURpdmlzaW9uID0gTWF0aC5tYXgoMC4xMjUsIE1hdGgubWluKDAuNzUsIHZhbHVlKSk7XG4gICAgdGhpcy51cGRhdGVEZWxheVRpbWUoKTtcbiAgfVxuXG4gIHVwZGF0ZURlbGF5VGltZSgpIHtcbiAgICBjb25zdCB3aG9sZSA9ICg0ICogNjApIC8gKHRoaXMuYnBtIHx8IDEyNyk7XG4gICAgdGhpcy5kZWxheS5kZWxheVRpbWUudmFsdWUgPSB3aG9sZSAqIHRoaXMuZGVsYXlEaXZpc2lvbjtcbiAgfVxuXG4gIGdldFRyYWNrS2V5cygpIHtcbiAgICByZXR1cm4gWy4uLnRoaXMudHJhY2tOb2Rlcy5rZXlzKCldO1xuICB9XG5cbiAgY2FuY2VsUXVldWUoKSB7XG4gICAgdGhpcy5wbGF5ZXIuY2FuY2VsUXVldWUodGhpcy5hdWRpb0NvbnRleHQpO1xuICB9XG5cbiAgY2FjaGVJbnN0cnVtZW50KGluZm8pIHtcbiAgICBpZiAoaW5mbyAmJiAhd2luZG93W2luZm8udmFyaWFibGVdKSB7XG4gICAgICBpZiAod2luZG93W2luZm8udmFyaWFibGUgKyAxMjddKSByZXR1cm47XG4gICAgICB3aW5kb3dbaW5mby52YXJpYWJsZSArIDEyN10gPSB0cnVlO1xuICAgICAgdGhpcy5wbGF5ZXIubG9hZGVyLnN0YXJ0TG9hZCh0aGlzLmF1ZGlvQ29udGV4dCwgaW5mby51cmwsIGluZm8udmFyaWFibGUpO1xuICAgICAgdGhpcy5wbGF5ZXIubG9hZGVyLndhaXRMb2FkKCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NhY2hlZCcsIGluZm8udGl0bGUpO1xuICAgICAgICBkZWxldGUgd2luZG93W2luZm8udmFyaWFibGUgKyAxMjddO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcGxheURydW0od2hlbiwgZHJ1bSwgbm9kZXMpIHtcbiAgICBjb25zdCBbaW5zdHJ1bWVudCwgbGV2ZWxdID0gZHJ1bTtcbiAgICBjb25zdCBpbmZvID0gdGhpcy5wbGF5ZXIubG9hZGVyLmRydW1JbmZvKGluc3RydW1lbnQpO1xuXG4gICAgaWYgKHdpbmRvd1tpbmZvLnZhcmlhYmxlXSkge1xuICAgICAgY29uc3QgcGl0Y2ggPSB3aW5kb3dbaW5mby52YXJpYWJsZV0uem9uZXNbMF0ua2V5UmFuZ2VMb3c7XG4gICAgICBjb25zdCBnYWluID0gKDEgLyAxMjcpICogbGV2ZWw7XG4gICAgICBpZiAobGV2ZWwgPiAwKSB0aGlzLnF1ZXVlVG9UcmFja05vZGVzKHdpbmRvd1tpbmZvLnZhcmlhYmxlXSwgd2hlbiwgcGl0Y2gsIDEgLyA2NCwgZ2Fpbiwgbm9kZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhY2hlSW5zdHJ1bWVudChpbmZvKTtcbiAgICB9XG4gIH1cblxuICBxdWV1ZVRvVHJhY2tOb2Rlcyhmb250LCB3aGVuLCBwaXRjaCwgZHVyYXRpb24sIGdhaW4sIG5vZGVzKSB7XG4gICAgdGhpcy5wbGF5ZXIucXVldWVXYXZlVGFibGUodGhpcy5hdWRpb0NvbnRleHQsIG5vZGVzLmRyeSwgZm9udCwgd2hlbiwgcGl0Y2gsIGR1cmF0aW9uLCBnYWluKTtcbiAgICBpZiAobm9kZXMucmV2ZXJiU2VuZC5nYWluLnZhbHVlID4gMCkge1xuICAgICAgdGhpcy5wbGF5ZXIucXVldWVXYXZlVGFibGUodGhpcy5hdWRpb0NvbnRleHQsIG5vZGVzLnJldmVyYlNlbmQsIGZvbnQsIHdoZW4sIHBpdGNoLCBkdXJhdGlvbiwgZ2Fpbik7XG4gICAgfVxuICAgIGlmIChub2Rlcy5kZWxheVNlbmQuZ2Fpbi52YWx1ZSA+IDApIHtcbiAgICAgIHRoaXMucGxheWVyLnF1ZXVlV2F2ZVRhYmxlKHRoaXMuYXVkaW9Db250ZXh0LCBub2Rlcy5kZWxheVNlbmQsIGZvbnQsIHdoZW4sIHBpdGNoLCBkdXJhdGlvbiwgZ2Fpbik7XG4gICAgfVxuICB9XG5cbiAgcGxheUJlYXRBdCh3aGVuLCBiZWF0LCBicG0pIHtcbiAgICBpZiAoIWJlYXQpIHJldHVybjtcbiAgICBjb25zdCBOID0gKDQgKiA2MCkgLyBicG07XG4gICAgY29uc3QgaGFzU29sbyA9IFsuLi50aGlzLnRyYWNrU3RhdGUudmFsdWVzKCldLnNvbWUoaXRlbSA9PiBpdGVtLnNvbG8pO1xuXG4gICAgYmVhdC5mb3JFYWNoKChzbG90LCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRUcmFja1N0YXRlKGtleSk7XG4gICAgICBpZiAoc3RhdGUubXV0ZWQpIHJldHVybjtcbiAgICAgIGlmIChoYXNTb2xvICYmICFzdGF0ZS5zb2xvKSByZXR1cm47XG5cbiAgICAgIGNvbnN0IG5vZGVzID0gdGhpcy5nZXRUcmFja05vZGVzKGtleSk7XG4gICAgICBsZXQgdG91Y2hlZCA9IGZhbHNlO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsb3QuZHJ1bXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdGhpcy5wbGF5RHJ1bSh3aGVuLCBzbG90LmRydW1zW2ldLCBub2Rlcyk7XG4gICAgICAgIHRvdWNoZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBzbG90Lm5vdGVzLmZvckVhY2gobm90ZSA9PiB7XG4gICAgICAgIGNvbnN0IFtpbnN0cnVtZW50LCBwaXRjaGVzLCBkdXJhdGlvbiwgbGV2ZWxdID0gbm90ZTtcbiAgICAgICAgY29uc3QgaW5mbyA9IHRoaXMucGxheWVyLmxvYWRlci5pbnN0cnVtZW50SW5mbyhpbnN0cnVtZW50KTtcbiAgICAgICAgaWYgKHdpbmRvd1tpbmZvLnZhcmlhYmxlXSkge1xuICAgICAgICAgIHRoaXMucXVldWVUb1RyYWNrTm9kZXMod2luZG93W2luZm8udmFyaWFibGVdLCB3aGVuLCBwaXRjaGVzLCBkdXJhdGlvbiAqIE4sICgxIC8gMTI3KSAqIGxldmVsLCBub2Rlcyk7XG4gICAgICAgICAgdG91Y2hlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jYWNoZUluc3RydW1lbnQoaW5mbyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodG91Y2hlZCAmJiB0eXBlb2YgdGhpcy5vbkJlYXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5vbkJlYXQoa2V5LCB3aGVuKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwgIigoKT0+e1widXNlIHN0cmljdFwiO3ZhciBuPXs0MTM6bj0+e24uZXhwb3J0cz1KU09OLnBhcnNlKCd7XCI1dGhcIjpcIjEwMDAwMDAxMDAwMFwiLFwiTTcjNXN1czRcIjpcIjEwMDAwMTAwMTAwMVwiLFwiNyM1c3VzNFwiOlwiMTAwMDAxMDAxMDEwXCIsXCJzdXM0XCI6XCIxMDAwMDEwMTAwMDBcIixcIk03c3VzNFwiOlwiMTAwMDAxMDEwMDAxXCIsXCI3c3VzNFwiOlwiMTAwMDAxMDEwMDEwXCIsXCI3bm81XCI6XCIxMDAwMTAwMDAwMTBcIixcImF1Z1wiOlwiMTAwMDEwMDAxMDAwXCIsXCJNN2I2XCI6XCIxMDAwMTAwMDEwMDFcIixcIm1hajcjNVwiOlwiMTAwMDEwMDAxMDAxXCIsXCI3IzVcIjpcIjEwMDAxMDAwMTAxMFwiLFwiN2IxM1wiOlwiMTAwMDEwMDAxMDEwXCIsXCJNXCI6XCIxMDAwMTAwMTAwMDBcIixcIm1hajdcIjpcIjEwMDAxMDAxMDAwMVwiLFwiN3RoXCI6XCIxMDAwMTAwMTAwMTBcIixcIjZ0aFwiOlwiMTAwMDEwMDEwMTAwXCIsXCI3YWRkNlwiOlwiMTAwMDEwMDEwMTEwXCIsXCI3YjZcIjpcIjEwMDAxMDAxMTAxMFwiLFwiTWI1XCI6XCIxMDAwMTAxMDAwMDBcIixcIk03YjVcIjpcIjEwMDAxMDEwMDAwMVwiLFwiN2I1XCI6XCIxMDAwMTAxMDAwMTBcIixcIm1haiM0XCI6XCIxMDAwMTAxMTAwMDFcIixcIjcjMTFcIjpcIjEwMDAxMDExMDAxMFwiLFwiTTYjMTFcIjpcIjEwMDAxMDExMDEwMFwiLFwiNyMxMWIxM1wiOlwiMTAwMDEwMTExMDEwXCIsXCJtIzVcIjpcIjEwMDEwMDAwMTAwMFwiLFwibWI2TTdcIjpcIjEwMDEwMDAwMTAwMVwiLFwibTcjNVwiOlwiMTAwMTAwMDAxMDEwXCIsXCJtXCI6XCIxMDAxMDAwMTAwMDBcIixcIm0vbWE3XCI6XCIxMDAxMDAwMTAwMDFcIixcIm03XCI6XCIxMDAxMDAwMTAwMTBcIixcIm02XCI6XCIxMDAxMDAwMTAxMDBcIixcIm1NYWo3YjZcIjpcIjEwMDEwMDAxMTAwMVwiLFwiZGltXCI6XCIxMDAxMDAxMDAwMDBcIixcIm9NN1wiOlwiMTAwMTAwMTAwMDAxXCIsXCJtN2I1XCI6XCIxMDAxMDAxMDAwMTBcIixcImRpbTdcIjpcIjEwMDEwMDEwMDEwMFwiLFwibzdNN1wiOlwiMTAwMTAwMTAwMTAxXCIsXCI0dGhcIjpcIjEwMDEwMTAwMDAxMFwiLFwibWFkZDRcIjpcIjEwMDEwMTAxMDAwMFwiLFwibTdhZGQxMVwiOlwiMTAwMTAxMDEwMDEwXCIsXCIrYWRkIzlcIjpcIjEwMDExMDAwMTAwMFwiLFwiNyM1IzlcIjpcIjEwMDExMDAwMTAxMFwiLFwiNyM5XCI6XCIxMDAxMTAwMTAwMTBcIixcIjEzIzlcIjpcIjEwMDExMDAxMDExMFwiLFwiNyM5YjEzXCI6XCIxMDAxMTAwMTEwMTBcIixcIm1hajcjOSMxMVwiOlwiMTAwMTEwMTEwMDAxXCIsXCI3IzkjMTFcIjpcIjEwMDExMDExMDAxMFwiLFwiMTMjOSMxMVwiOlwiMTAwMTEwMTEwMTEwXCIsXCI3IzkjMTFiMTNcIjpcIjEwMDExMDExMTAxMFwiLFwic3VzMlwiOlwiMTAxMDAwMDEwMDAwXCIsXCJNOSM1c3VzNFwiOlwiMTAxMDAxMDAxMDAxXCIsXCJzdXMyNFwiOlwiMTAxMDAxMDEwMDAwXCIsXCJNOXN1czRcIjpcIjEwMTAwMTAxMDAwMVwiLFwiMTF0aFwiOlwiMTAxMDAxMDEwMDEwXCIsXCI5c3VzNFwiOlwiMTAxMDAxMDEwMDEwXCIsXCIxM3N1czRcIjpcIjEwMTAwMTAxMDExMFwiLFwiOW5vNVwiOlwiMTAxMDEwMDAwMDEwXCIsXCIxM25vNVwiOlwiMTAxMDEwMDAwMTEwXCIsXCJNIzVhZGQ5XCI6XCIxMDEwMTAwMDEwMDBcIixcIm1hajkjNVwiOlwiMTAxMDEwMDAxMDAxXCIsXCI5IzVcIjpcIjEwMTAxMDAwMTAxMFwiLFwiOWIxM1wiOlwiMTAxMDEwMDAxMDEwXCIsXCJNYWRkOVwiOlwiMTAxMDEwMDEwMDAwXCIsXCJtYWo5XCI6XCIxMDEwMTAwMTAwMDFcIixcIjl0aFwiOlwiMTAxMDEwMDEwMDEwXCIsXCI2LzlcIjpcIjEwMTAxMDAxMDEwMFwiLFwibWFqMTNcIjpcIjEwMTAxMDAxMDEwMVwiLFwiTTdhZGQxM1wiOlwiMTAxMDEwMDEwMTAxXCIsXCIxM3RoXCI6XCIxMDEwMTAwMTAxMTBcIixcIk05YjVcIjpcIjEwMTAxMDEwMDAwMVwiLFwiOWI1XCI6XCIxMDEwMTAxMDAwMTBcIixcIjEzYjVcIjpcIjEwMTAxMDEwMDExMFwiLFwiOSM1IzExXCI6XCIxMDEwMTAxMDEwMTBcIixcIm1hajkjMTFcIjpcIjEwMTAxMDExMDAwMVwiLFwiOSMxMVwiOlwiMTAxMDEwMTEwMDEwXCIsXCI2OSMxMVwiOlwiMTAxMDEwMTEwMTAwXCIsXCJNMTMjMTFcIjpcIjEwMTAxMDExMDEwMVwiLFwiMTMjMTFcIjpcIjEwMTAxMDExMDExMFwiLFwiOSMxMWIxM1wiOlwiMTAxMDEwMTExMDEwXCIsXCJtOSM1XCI6XCIxMDExMDAwMDEwMTBcIixcIm1hZGQ5XCI6XCIxMDExMDAwMTAwMDBcIixcIm1NOVwiOlwiMTAxMTAwMDEwMDAxXCIsXCJtOVwiOlwiMTAxMTAwMDEwMDEwXCIsXCJtNjlcIjpcIjEwMTEwMDAxMDEwMFwiLFwibTEzXCI6XCIxMDExMDAwMTAxMTBcIixcIm1NYWo5YjZcIjpcIjEwMTEwMDAxMTAwMVwiLFwibTliNVwiOlwiMTAxMTAwMTAwMDEwXCIsXCJtMTFBXCI6XCIxMDExMDEwMDEwMTBcIixcIm0xMVwiOlwiMTAxMTAxMDEwMDEwXCIsXCJiOXN1c1wiOlwiMTEwMDAxMDEwMDEwXCIsXCIxMWI5XCI6XCIxMTAwMDEwMTAwMTBcIixcIjdzdXM0YjliMTNcIjpcIjExMDAwMTAxMTAxMFwiLFwiYWx0N1wiOlwiMTEwMDEwMDAwMDEwXCIsXCI3IzViOVwiOlwiMTEwMDEwMDAxMDEwXCIsXCJNYWRkYjlcIjpcIjExMDAxMDAxMDAwMFwiLFwiTTdiOVwiOlwiMTEwMDEwMDEwMDAxXCIsXCI3YjlcIjpcIjExMDAxMDAxMDAxMFwiLFwiMTNiOVwiOlwiMTEwMDEwMDEwMTEwXCIsXCI3YjliMTNcIjpcIjExMDAxMDAxMTAxMFwiLFwiNyM1YjkjMTFcIjpcIjExMDAxMDEwMTAxMFwiLFwiN2I5IzExXCI6XCIxMTAwMTAxMTAwMTBcIixcIjEzYjkjMTFcIjpcIjExMDAxMDExMDExMFwiLFwiN2I5YjEzIzExXCI6XCIxMTAwMTAxMTEwMTBcIixcIm1iNmI5XCI6XCIxMTAxMDAwMDEwMDBcIixcIjdiOSM5XCI6XCIxMTAxMTAwMTAwMTBcIn0nKX0sNzIyOm49PntuLmV4cG9ydHM9SlNPTi5wYXJzZSgne1wibWFqb3IgcGVudGF0b25pY1wiOlwiMTAxMDEwMDEwMTAwXCIsXCJpb25pYW4gcGVudGF0b25pY1wiOlwiMTAwMDExMDEwMDAxXCIsXCJtaXhvbHlkaWFuIHBlbnRhdG9uaWNcIjpcIjEwMDAxMTAxMDAxMFwiLFwicml0dXNlblwiOlwiMTAxMDAxMDEwMTAwXCIsXCJlZ3lwdGlhblwiOlwiMTAxMDAxMDEwMDEwXCIsXCJuZW9wb2xpdGFuIG1ham9yIHBlbnRhdG9uaWNcIjpcIjEwMDAxMTEwMDAxMFwiLFwidmlldG5hbWVzZSAxXCI6XCIxMDAxMDEwMTEwMDBcIixcInBlbG9nXCI6XCIxMTAxMDAwMTEwMDBcIixcImt1bW9pam9zaGlcIjpcIjExMDAwMTAxMTAwMFwiLFwiaGlyYWpvc2hpXCI6XCIxMDExMDAwMTEwMDBcIixcIml3YXRvXCI6XCIxMTAwMDExMDAwMTBcIixcImluLXNlblwiOlwiMTEwMDAxMDEwMDEwXCIsXCJseWRpYW4gcGVudGF0b25pY1wiOlwiMTAwMDEwMTEwMDAxXCIsXCJtYWxrb3MgcmFnYVwiOlwiMTAwMTAxMDAxMDEwXCIsXCJsb2NyaWFuIHBlbnRhdG9uaWNcIjpcIjEwMDEwMTEwMDAxMFwiLFwibWlub3IgcGVudGF0b25pY1wiOlwiMTAwMTAxMDEwMDEwXCIsXCJtaW5vciBzaXggcGVudGF0b25pY1wiOlwiMTAwMTAxMDEwMTAwXCIsXCJmbGF0IHRocmVlIHBlbnRhdG9uaWNcIjpcIjEwMTEwMDAxMDEwMFwiLFwiZmxhdCBzaXggcGVudGF0b25pY1wiOlwiMTAxMDEwMDExMDAwXCIsXCJzY3JpYWJpblwiOlwiMTEwMDEwMDEwMTAwXCIsXCJ3aG9sZSB0b25lIHBlbnRhdG9uaWNcIjpcIjEwMDAxMDEwMTAxMFwiLFwibHlkaWFuICM1UCBwZW50YXRvbmljXCI6XCIxMDAwMTAxMDEwMDFcIixcImx5ZGlhbiBkb21pbmFudCBwZW50YXRvbmljXCI6XCIxMDAwMTAxMTAwMTBcIixcIm1pbm9yICM3TSBwZW50YXRvbmljXCI6XCIxMDAxMDEwMTAwMDFcIixcInN1cGVyIGxvY3JpYW4gcGVudGF0b25pY1wiOlwiMTAwMTEwMTAwMDEwXCIsXCJtaW5vciBoZXhhdG9uaWNcIjpcIjEwMTEwMTAxMDAwMVwiLFwiYXVnbWVudGVkXCI6XCIxMDAxMTAwMTEwMDFcIixcIm1ham9yIGJsdWVzXCI6XCIxMDExMTAwMTAxMDBcIixcInBpb25naW9cIjpcIjEwMTAwMTAxMDExMFwiLFwicHJvbWV0aGV1cyBuZW9wb2xpdGFuXCI6XCIxMTAwMTAxMDAxMTBcIixcInByb21ldGhldXNcIjpcIjEwMTAxMDEwMDExMFwiLFwibXlzdGVyeSAjMVwiOlwiMTEwMDEwMTAxMDEwXCIsXCJzaXggdG9uZSBzeW1tZXRyaWNcIjpcIjExMDAxMTAwMTEwMFwiLFwid2hvbGUgdG9uZVwiOlwiMTAxMDEwMTAxMDEwXCIsXCJtZXNzaWFlblxcJ3MgbW9kZSAjNVwiOlwiMTEwMDAxMTEwMDAxXCIsXCJtaW5vciBibHVlc1wiOlwiMTAwMTAxMTEwMDEwXCIsXCJsb2NyaWFuIG1ham9yXCI6XCIxMDEwMTExMDEwMTBcIixcImRvdWJsZSBoYXJtb25pYyBseWRpYW5cIjpcIjExMDAxMDExMTAwMVwiLFwiaGFybW9uaWMgbWlub3JcIjpcIjEwMTEwMTAxMTAwMVwiLFwiYWx0ZXJlZFwiOlwiMTEwMTEwMTAxMDEwXCIsXCJsb2NyaWFuICMyXCI6XCIxMDExMDExMDEwMTBcIixcIm1peG9seWRpYW4gYjZcIjpcIjEwMTAxMTAxMTAxMFwiLFwibHlkaWFuIGRvbWluYW50XCI6XCIxMDEwMTAxMTAxMTBcIixcImx5ZGlhblwiOlwiMTAxMDEwMTEwMTAxXCIsXCJseWRpYW4gYXVnbWVudGVkXCI6XCIxMDEwMTAxMDExMDFcIixcImRvcmlhbiBiMlwiOlwiMTEwMTAxMDEwMTEwXCIsXCJtZWxvZGljIG1pbm9yXCI6XCIxMDExMDEwMTAxMDFcIixcImxvY3JpYW5cIjpcIjExMDEwMTEwMTAxMFwiLFwidWx0cmFsb2NyaWFuXCI6XCIxMTAxMTAxMDExMDBcIixcImxvY3JpYW4gNlwiOlwiMTEwMTAxMTAwMTEwXCIsXCJhdWdtZW50ZWQgaGVwdGF0b25pY1wiOlwiMTAwMTExMDExMDAxXCIsXCJyb21hbmlhbiBtaW5vclwiOlwiMTAxMTAwMTEwMTEwXCIsXCJkb3JpYW4gIzRcIjpcIjEwMTEwMDExMDExMFwiLFwibHlkaWFuIGRpbWluaXNoZWRcIjpcIjEwMTEwMDExMDEwMVwiLFwicGhyeWdpYW5cIjpcIjExMDEwMTAxMTAxMFwiLFwibGVhZGluZyB3aG9sZSB0b25lXCI6XCIxMDEwMTAxMDEwMTFcIixcImx5ZGlhbiBtaW5vclwiOlwiMTAxMDEwMTExMDEwXCIsXCJwaHJ5Z2lhbiBkb21pbmFudFwiOlwiMTEwMDExMDExMDEwXCIsXCJiYWxpbmVzZVwiOlwiMTEwMTAxMDExMDAxXCIsXCJuZW9wb2xpdGFuIG1ham9yXCI6XCIxMTAxMDEwMTAxMDFcIixcImFlb2xpYW5cIjpcIjEwMTEwMTAxMTAxMFwiLFwiaGFybW9uaWMgbWFqb3JcIjpcIjEwMTAxMTAxMTAwMVwiLFwiZG91YmxlIGhhcm1vbmljIG1ham9yXCI6XCIxMTAwMTEwMTEwMDFcIixcImRvcmlhblwiOlwiMTAxMTAxMDEwMTEwXCIsXCJodW5nYXJpYW4gbWlub3JcIjpcIjEwMTEwMDExMTAwMVwiLFwiaHVuZ2FyaWFuIG1ham9yXCI6XCIxMDAxMTAxMTAxMTBcIixcIm9yaWVudGFsXCI6XCIxMTAwMTExMDAxMTBcIixcImZsYW1lbmNvXCI6XCIxMTAxMTAxMTAwMTBcIixcInRvZGkgcmFnYVwiOlwiMTEwMTAwMTExMDAxXCIsXCJtaXhvbHlkaWFuXCI6XCIxMDEwMTEwMTAxMTBcIixcInBlcnNpYW5cIjpcIjExMDAxMTEwMTAwMVwiLFwibWFqb3JcIjpcIjEwMTAxMTAxMDEwMVwiLFwiZW5pZ21hdGljXCI6XCIxMTAwMTAxMDEwMTFcIixcIm1ham9yIGF1Z21lbnRlZFwiOlwiMTAxMDExMDAxMTAxXCIsXCJseWRpYW4gIzlcIjpcIjEwMDExMDExMDEwMVwiLFwibWVzc2lhZW5cXCdzIG1vZGUgIzRcIjpcIjExMTAwMTExMTAwMVwiLFwicHVydmkgcmFnYVwiOlwiMTEwMDExMTExMDAxXCIsXCJzcGFuaXNoIGhlcHRhdG9uaWNcIjpcIjExMDExMTAxMTAxMFwiLFwiYmVib3BcIjpcIjEwMTAxMTAxMDExMVwiLFwiYmVib3AgbWlub3JcIjpcIjEwMTExMTAxMDExMFwiLFwiYmVib3AgbWFqb3JcIjpcIjEwMTAxMTAxMTEwMVwiLFwiYmVib3AgbG9jcmlhblwiOlwiMTEwMTAxMTExMDEwXCIsXCJtaW5vciBiZWJvcFwiOlwiMTAxMTAxMDExMDExXCIsXCJkaW1pbmlzaGVkXCI6XCIxMDExMDExMDExMDFcIixcImljaGlrb3N1Y2hvXCI6XCIxMDEwMTExMTAxMDFcIixcIm1pbm9yIHNpeCBkaW1pbmlzaGVkXCI6XCIxMDExMDEwMTExMDFcIixcImhhbGYtd2hvbGUgZGltaW5pc2hlZFwiOlwiMTEwMTEwMTEwMTEwXCIsXCJrYWZpIHJhZ2FcIjpcIjEwMDExMTAxMDExMVwiLFwibWVzc2lhZW5cXCdzIG1vZGUgIzZcIjpcIjEwMTAxMTEwMTAxMVwiLFwiY29tcG9zaXRlIGJsdWVzXCI6XCIxMDExMTExMTAxMTBcIixcIm1lc3NpYWVuXFwncyBtb2RlICMzXCI6XCIxMDExMTAxMTEwMTFcIixcIm1lc3NpYWVuXFwncyBtb2RlICM3XCI6XCIxMTExMDExMTExMDFcIixcImNocm9tYXRpY1wiOlwiMTExMTExMTExMTExXCIsXCJpb25pYW5cIjpcIjEwMTAxMTAxMDEwMVwiLFwibWlub3JcIjpcIjEwMTEwMTAxMTAxMFwifScpfX0sZT17fTtmdW5jdGlvbiBvKGEpe3ZhciBpPWVbYV07aWYodm9pZCAwIT09aSlyZXR1cm4gaS5leHBvcnRzO3ZhciByPWVbYV09e2V4cG9ydHM6e319O3JldHVybiBuW2FdKHIsci5leHBvcnRzLG8pLHIuZXhwb3J0c31vLmQ9KG4sZSk9Pntmb3IodmFyIGEgaW4gZSlvLm8oZSxhKSYmIW8ubyhuLGEpJiZPYmplY3QuZGVmaW5lUHJvcGVydHkobixhLHtlbnVtZXJhYmxlOiEwLGdldDplW2FdfSl9LG8ubz0obixlKT0+T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4sZSksby5yPW49PntcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfTt2YXIgYT17fTsoKCk9PntvLnIoYSksby5kKGEse2Nob3JkOigpPT5tLGNob3JkczooKT0+dCxpbmxpbmVDaG9yZDooKT0+cixzY2FsZTooKT0+YyxzY2FsZXM6KCk9PnN9KTt2YXIgbj1vKDcyMiksZT1vKDQxMyksaT1mdW5jdGlvbihvKXt2YXIgYT1vLnNjYWxlLGk9by5jaG9yZCxyPWF8fGksdD1hP1wic2NhbGVcIjpcImNob3JkXCI7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIHIpdGhyb3cgbmV3IEVycm9yKFwiXCIuY29uY2F0KHIsXCIgaXMgbm90IGEgdmFsaWQgaW5wdXQgZm9yIFwiKS5jb25jYXQodCkpO3ZhciBzLG0sYz1yLmluZGV4T2YoXCIgXCIpOy0xPT09Yz8ocz1yLnNsaWNlKDEpLG09clswXSxcImJcIiE9PXJbMV0mJlwiI1wiIT09clsxXXx8KHM9ci5zbGljZSgyKSxtKz1yWzFdKSk6KHM9ci5zbGljZSgtMT09PWM/MTpjKzEpLG09ci5zbGljZSgwLGMpKTt2YXIgZD1mdW5jdGlvbihuKXtyZXR1cm57XCJDI1wiOlwiRGJcIixcIkQjXCI6XCJFYlwiLFwiRiNcIjpcIkdiXCIsXCJHI1wiOlwiQWJcIixcIkEjXCI6XCJCYlwifVtuLnRvVXBwZXJDYXNlKCldfHxuLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK24uc2xpY2UoMSl9KG0ucmVwbGFjZSgvXFxkL2csXCJcIikpLGw9XCJcIiE9PW0ucmVwbGFjZSgvXFxEL2csXCJcIik/K20ucmVwbGFjZSgvXFxEL2csXCJcIik6NDtpZihpc05hTihsKSl0aHJvdyBuZXcgRXJyb3IoXCJcIi5jb25jYXQobVswXSxcIiBkb2VzIG5vdCBoYXZlIGEgdmFsaWQgb2N0YXZlXCIpKTtpZighbltzXSYmIWVbc10pdGhyb3cgbmV3IEVycm9yKFwiXCIuY29uY2F0KHIsXCIgaXMgbm90IGEgdmFsaWQgXCIpLmNvbmNhdCh0KSk7Zm9yKHZhciBiPWZ1bmN0aW9uKG4sZSl7dmFyIG89W1wiQ1wiLFwiRGJcIixcIkRcIixcIkViXCIsXCJFXCIsXCJGXCIsXCJHYlwiLFwiR1wiLFwiQWJcIixcIkFcIixcIkJiXCIsXCJCXCJdLGE9by5tYXAoKGZ1bmN0aW9uKG4pe3JldHVybiBuK2V9KSksaT1vLm1hcCgoZnVuY3Rpb24obil7cmV0dXJuIG4rKGUrMSl9KSkscj1hLmNvbmNhdChpKTtyZXR1cm4gci5zbGljZShyLmluZGV4T2YobitlKSl9KGQsbCksdT1bXSxwPTAsaD0wLGY9YT9uOmU7cDxmW3NdLmxlbmd0aDspXCIxXCI9PT1mW3NdW3BdJiZ1LnB1c2goYltoXSkscCsrLGgrKztyZXR1cm4gdX0scj1mdW5jdGlvbihuKXt2YXIgZSxvLGE9XCJiOXN1c1wiLHI9NDtyZXR1cm4gbi5pbmNsdWRlcyhhKT8obz1hLGU9bi5zbGljZSgwLG4uaW5kZXhPZihhKSkpOihlPW5bMF0sbz1uLnNsaWNlKDEpLFwiYlwiIT09blsxXSYmXCIjXCIhPT1uWzFdfHwoZSs9blsxXSxvPW4uc2xpY2UoMikpKSxuLmluY2x1ZGVzKFwiX1wiKSYmKHI9K24uc3BsaXQoXCJfXCIpWzFdLG89by5zbGljZSgwLG8uaW5kZXhPZihcIl9cIikpKSxpKHtjaG9yZDplK3IrXCIgXCIrb30pfSx0PWZ1bmN0aW9uKCl7cmV0dXJuIE9iamVjdC5rZXlzKGUpfSxzPWZ1bmN0aW9uKCl7cmV0dXJuIE9iamVjdC5rZXlzKG4pfSxtPWZ1bmN0aW9uKG4pe3JldHVybiBpKHtjaG9yZDpufSl9LGM9ZnVuY3Rpb24obil7cmV0dXJuIGkoe3NjYWxlOm59KX19KSgpO3ZhciBpPWV4cG9ydHM7Zm9yKHZhciByIGluIGEpaVtyXT1hW3JdO2EuX19lc01vZHVsZSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGksXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWFpbi5qcy5tYXAiLCAiLyoqXG4gKiBUYWtlIGEgc3RyaW5nIGlucHV0IGFuZCBjaGVjayBpZiBpdCBzIGEgbm90ZSBuYW1lIG9yIG5vdFxuICogQHBhcmFtICB7U3RyaW5nfSBzdHIgTm90ZSBuYW1lIGUuZy4gYzRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IFJldHVybiB0cnVlIGZvciBjNCBvciByZXR1cm4gZmFsc2UgZm9yIHNvbWV0aGluZyBsaWtlIENNXG4gKi9cbmV4cG9ydCBjb25zdCBpc05vdGUgPSAoc3RyOiBzdHJpbmcpOiBib29sZWFuID0+XG4gIC9eW2EtZ0EtR10oPzojfGIpP1xcZCQvLnRlc3Qoc3RyKTtcblxuLyoqXG4gKiBUYWtlIGEgU3RyaW5nIGlucHV0IHN1Y2ggYXMgeHh4W3h4W3h4XV1cbiAqIGFuZCByZXR1cm4gYW4gQXJyYXkgYXMgWyd4JywgJ3gnLCAneCcsIFsneCcsICd4JywgWyd4JywgJ3gnXV1dXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbmV4cG9ydCBjb25zdCBleHBhbmRTdHIgPSAoc3RyOiBzdHJpbmcpOiBhbnkgPT4ge1xuICBzdHIgPSBKU09OLnN0cmluZ2lmeShzdHIuc3BsaXQoJycpKTtcbiAgc3RyID0gc3RyLnJlcGxhY2UoLyxcIlxcW1wiLC9nLCAnLCBbJyk7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKC9cIlxcW1wiLC9nLCAnWycpO1xuICBzdHIgPSBzdHIucmVwbGFjZSgvLFwiXFxdXCIvZywgJ10nKTtcbiAgcmV0dXJuIEpTT04ucGFyc2Uoc3RyKTtcbn07XG5cbi8qKlxuICogQmFzaWMgQXJyYXkgcmFuZG9taXplclxuICogQHBhcmFtICB7QXJyYXl9IGFyclxuICogQHBhcmFtICB7Ym9vbGVhbn0gZnVsbFNodWZmbGUgRW5zdXJlIG5vIGVsZW1lbnRzIHJlbWFpbiBpbiBvbGQgcGxhY2VcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5leHBvcnQgY29uc3Qgc2h1ZmZsZSA9IChhcnI6IGFueVtdLCBmdWxsU2h1ZmZsZTogYm9vbGVhbiA9IHRydWUpOiBzdHJpbmdbXSA9PiB7XG4gIGNvbnN0IGxhc3RJbmRleDogbnVtYmVyID0gYXJyLmxlbmd0aCAtIDE7XG5cbiAgLy8gU2h1ZmZsZSBhbGdvcml0aG0gYnkgUmljaGFyZCBEdXJzdGVuZmVsZCAoRG9uYWxkIEUuIEtudXRoKSwgYWxzbyBSb25hbGQgRmlzaGVyIGFuZCBGcmFuayBZYXRlcy5cbiAgLy8gXCJGdWxsIFNodWZmbGVcIiBNb2RpZmljYXRpb24gdG8gZW5zdXJlIG5vIGVsZW1lbnRzIHJlbWFpbiBpbiB0aGVpciBvcmlnaW5hbCBwbGFjZSAoYnkgdGFraW5nIGVhY2ggZWxlbWVudCBvbmNlXG4gIC8vIGFuZCBzd2FwcGluZyB3aXRoIGFueSByZW1haW5pbmcgZWxlbWVudHMpXG4gIGFyci5mb3JFYWNoKChlbCwgaWR4OiBudW1iZXIpID0+IHtcbiAgICBpZiAoaWR4ID49IGxhc3RJbmRleCkge1xuICAgICAgLy8gTm8gc2h1ZmZsaW5nIGxhc3QgZWxlbWVudFxuICAgICAgLy8gT25lIGJlZm9yZSBsYXN0IGlzIGFsd2F5cyBzd2FwcGVkIHdpdGggbGFzdCBhdCB0aGUgZW5kIG9mIHRoZSBsb29wXG4gICAgICAvLyBTaW5jZSBwcmV2aW91cyBzd2FwcyBjYW4gbW92ZSBsYXN0IGVsZW1lbnQgaW50byBvdGhlciBwbGFjZXMsIHRoZXJlIGlzIHN0aWxsIGEgcmFuZG9tIHNodWZmbGUgb2YgbGFzdCBlbGVtZW50XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFN3YXAgZWwgd2l0aCBvbmUgb2YgdGhlIGhpZ2hlciBlbGVtZW50cyByYW5kb21seVxuICAgIGxldCBybmQ7XG4gICAgcm5kID0gZnVsbFNodWZmbGVcbiAgICAgID8gLy8gUGljayByYW5kb20gbnVtYmVyIGZyb20gaWR4KzEgdG8gbGFzdEluZGV4IChNb2RpZmllZCBhbGdvcml0aG0sIChOLTEpISBjb21iaW5hdGlvbnMpXG4gICAgICAgIC8vIE1hdGgucmFuZG9tIC0+IFswLCAxKSAtPiBbMCwgbGFzdEluZGV4LWlkeCApIC0tZmxvb3ItPiBbMCwgbGFzdEluZGV4LWlkeC0xXVxuICAgICAgICAvLyBybmQgPSBbMCwgbGFzdEluZGV4LWlkeC0xXSArIDEgKyBpZHggPSBbMSArIGlkeCwgbGFzdEluZGV4XVxuICAgICAgICAvLyAoT3JpZ2luYWwgYWxnb3JpdGhtIHdvdWxkIHBpY2sgcm5kID0gW2lkeCwgbGFzdEluZGV4XSwgdGh1cyBhbnkgZWxlbWVudCBjb3VsZCBhcnJpdmUgYmFjayBpbnRvIGl0cyBzbG90KVxuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobGFzdEluZGV4IC0gaWR4KSkgKyAxICsgaWR4XG4gICAgICA6IC8vIFBpY2sgcmFuZG9tIG51bWJlciBmcm9tIGlkeCB0byBsYXN0SW5kZXggKFVubW9kaWZpZWQgUmljaGFyZCBEdXJzdGVuZmVsZCwgTiEgY29tYmluYXRpb25zKVxuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobGFzdEluZGV4ICsgMSAtIGlkeCkpICsgaWR4O1xuICAgIGFycltpZHhdID0gYXJyW3JuZF07XG4gICAgYXJyW3JuZF0gPSBlbDtcbiAgfSk7XG5cbiAgcmV0dXJuIGFycjtcbn07XG5cbi8qKlxuICogUmV0dXJuIGFuIGFycmF5IG9mIG51bWJlcnMgcmVsYXRpdmUgdG8gbWF4TGV2ZWwgfHwgMTI3IG9yZGVyZWQgaW4gYSBTaW5lIHdhdmUgZm9ybWF0XG4gKiBUaGlzIGlzIHVzZWQgYnkgdGhlIGBzaXp6bGVgIHBhcmFtIG9mIHRoZSBgY2xpcGAgbWV0aG9kIHRvIGFkZCBhIHJ1ZGltZW50YXJ5IHZhcmlhdGlvbiB0byB0aGUgYWNjZW50IG9mIGVhY2ggbm90ZVxuICogQHBhcmFtIHtOdW1iZXJ9IG1heExldmVsIEEgbnVtYmVyIGJldHdlZW4gbm90IG1vcmUgdGhhbiAxMjdcbiAqIEByZXR1cm4ge0FycmF5fSAgRXhhbXBsZSBvdXRwdXQgWzYzLCA5MCwgMTEwLCAxMjcsIDExMCwgOTAsIDYzLCAwLCA2MywgOTAsIDExMCwgMTI3LCAxMTAsIDkwLCA2MywgMF1cbiAqL1xuZXhwb3J0IGNvbnN0IHNpenpsZU1hcCA9IChtYXhMZXZlbDogbnVtYmVyID0gMTI3KTogbnVtYmVyW10gPT4ge1xuICBjb25zdCBwaSA9IE1hdGguUEk7XG4gIGNvbnN0IHBpQXJyOiBudW1iZXJbXSA9IFtcbiAgICBwaSAvIDYsXG4gICAgcGkgLyA0LFxuICAgIHBpIC8gMyxcbiAgICBwaSAvIDIsXG4gICAgKDIgKiBwaSkgLyAzLFxuICAgICgzICogcGkpIC8gNCxcbiAgICAoNSAqIHBpKSAvIDYsXG4gICAgcGksXG4gIF07XG4gIGNvbnN0IHBpQXJyUmV2OiBudW1iZXJbXSA9IFtcbiAgICAwLFxuICAgIHBpIC8gNixcbiAgICBwaSAvIDQsXG4gICAgcGkgLyAzLFxuICAgIHBpIC8gMixcbiAgICAoMiAqIHBpKSAvIDMsXG4gICAgKDMgKiBwaSkgLyA0LFxuICAgICg1ICogcGkpIC8gNixcbiAgXTtcbiAgcGlBcnJSZXYucmV2ZXJzZSgpO1xuICBjb25zdCBhcnI6IG51bWJlcltdID0gcGlBcnIuY29uY2F0KHBpQXJyUmV2KTtcbiAgcmV0dXJuIGFyci5tYXAoZWxlbWVudCA9PiBNYXRoLnJvdW5kKE1hdGguc2luKGVsZW1lbnQpICogbWF4TGV2ZWwpKTtcbn07XG5cbi8qKlxuICogUGljayBvbmUgaXRlbSByYW5kb21seSBmcm9tIGFuIGFycmF5IGFuZCByZXR1cm4gaXRcbiAqIEBwYXJhbSBhcnJcbiAqL1xuZXhwb3J0IGNvbnN0IHBpY2tPbmUgPSAoYXJyOiBhbnlbXSkgPT5cbiAgYXJyLmxlbmd0aCA+IDEgPyBhcnJbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV0gOiBhcnJbMF07XG5cbi8qKlxuICogQm9vbGVhbiBnZW5lcmF0b3JcbiAqL1xuZXhwb3J0IGNvbnN0IGRpY2UgPSAoKSA9PiAhIU1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG5cbi8qKlxuICogUG9seWZpbGwgZm9yIEFycmF5LnByb3RvdHlwZS5mbGF0XG4gKi9cbmV4cG9ydCBjb25zdCBmbGF0ID0gKGFycjogYW55W11bXSkgPT5cbiAgYXJyLnJlZHVjZSgoYWNjLCB2YWwpID0+IGFjYy5jb25jYXQodmFsKSwgW10pO1xuIiwgImltcG9ydCB7IHNjYWxlIH0gZnJvbSAnaGFybW9uaWNzJztcbmltcG9ydCB7IHBpY2tPbmUsIGRpY2UgfSBmcm9tICcuL3V0aWxzJztcblxuLyoqXG4gKiBHZXQgdGhlIGNob3JkcyB0aGF0IGdvIHdpdGggYSBnaXZlbiBzY2FsZS9tb2RlXG4gKiBUaGlzIGlzIHVzZWZ1bCBvbmx5IGluIGNhc2UgeW91IHdhbnQgdG8gY2hlY2sgd2hhdCBjaG9yZHMgd29yayB3aXRoIGEgc2NhbGUvbW9kZVxuICogc28gdGhhdCB5b3UgY2FuIGNvbWUgdXAgd2l0aCBjaG9yZCBwcm9ncmVzc2lvbnNcbiAqIEBwYXJhbSAge1N0cmluZ30gbW9kZSBlLmcuIG1ham9yXG4gKiBAcmV0dXJuIHtBcnJheX0gZS5nLlsnSScsICdpaScsICdpaWknLCAnSVYnLCAnVicsICd2aScsICd2aWlcdTAwQjAnXVxuICovXG5leHBvcnQgY29uc3QgZ2V0Q2hvcmREZWdyZWVzID0gKG1vZGU6IHN0cmluZykgPT4ge1xuICBjb25zdCB0aGVSb21hbnM6IE5WUDxzdHJpbmdbXT4gPSB7XG4gICAgaW9uaWFuOiBbJ0knLCAnaWknLCAnaWlpJywgJ0lWJywgJ1YnLCAndmknLCAndmlpXHUwMEIwJ10sXG4gICAgZG9yaWFuOiBbJ2knLCAnaWknLCAnSUlJJywgJ0lWJywgJ3YnLCAndmlcdTAwQjAnLCAnVklJJ10sXG4gICAgcGhyeWdpYW46IFsnaScsICdJSScsICdJSUknLCAnaXYnLCAndlx1MDBCMCcsICdWSScsICd2aWknXSxcbiAgICBseWRpYW46IFsnSScsICdJSScsICdpaWknLCAnaXZcdTAwQjAnLCAnVicsICd2aScsICd2aWknXSxcbiAgICBtaXhvbHlkaWFuOiBbJ0knLCAnaWknLCAnaWlpXHUwMEIwJywgJ0lWJywgJ3YnLCAndmknLCAnVklJJ10sXG4gICAgYWVvbGlhbjogWydpJywgJ2lpXHUwMEIwJywgJ0lJSScsICdpdicsICd2JywgJ1ZJJywgJ1ZJSSddLFxuICAgIGxvY3JpYW46IFsnaVx1MDBCMCcsICdJSScsICdpaWknLCAnaXYnLCAnVicsICdWSScsICd2aWknXSxcbiAgICAnbWVsb2RpYyBtaW5vcic6IFsnaScsICdpaScsICdJSUkrJywgJ0lWJywgJ1YnLCAndmlcdTAwQjAnLCAndmlpXHUwMEIwJ10sXG4gICAgJ2hhcm1vbmljIG1pbm9yJzogWydpJywgJ2lpXHUwMEIwJywgJ0lJSSsnLCAnaXYnLCAnVicsICdWSScsICd2aWlcdTAwQjAnXSxcbiAgfTtcbiAgdGhlUm9tYW5zLm1ham9yID0gdGhlUm9tYW5zLmlvbmlhbjtcbiAgdGhlUm9tYW5zLm1pbm9yID0gdGhlUm9tYW5zLmFlb2xpYW47XG5cbiAgcmV0dXJuIHRoZVJvbWFuc1ttb2RlXSB8fCBbXTtcbn07XG5cbmNvbnN0IGlkeEJ5RGVncmVlOiBOVlA8bnVtYmVyPiA9IHtcbiAgaTogMCxcbiAgaWk6IDEsXG4gIGlpaTogMixcbiAgaXY6IDMsXG4gIHY6IDQsXG4gIHZpOiA1LFxuICB2aWk6IDYsXG59O1xuXG4vKipcbiAqIEdldCBhIGNob3JkIG5hbWUgZnJvbSBkZWdyZWVcbiAqIEBwYXJhbSAge1N0cmluZ30gcm9tYW4gZS5nLiBpaSBPUiBpaVx1MDBCMCBPUiBWN1xuICogQHJldHVybiB7U3RyaW5nfSBlLmcuIG0gT1IgbTdiNSBPUiBNYWo3XG4gKi9cbmNvbnN0IGdldENob3JkTmFtZSA9IChyb21hbjogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgLy8gcmVtb3ZlIGFueSBub24gY2hhcmFjdGVyXG4gIGNvbnN0IHN0ciA9IHJvbWFuLnJlcGxhY2UoL1xcVy9nLCAnJyk7XG4gIGxldCBwcmVmaXggPSAnTSc7XG4gIC8vIGNoZWNrIGlmIGl0IHMgbG93ZXJjYXNlXG4gIGlmIChzdHIudG9Mb3dlckNhc2UoKSA9PT0gc3RyKSB7XG4gICAgcHJlZml4ID0gJ20nO1xuICB9XG4gIGlmIChyb21hbi5pbmRleE9mKCdcdTAwQjAnKSA+IC0xKSB7XG4gICAgcmV0dXJuIHByZWZpeCArICc3YjUnO1xuICB9XG4gIGlmIChyb21hbi5pbmRleE9mKCcrJykgPiAtMSkge1xuICAgIHJldHVybiBwcmVmaXggKyAnIzUnO1xuICB9XG5cbiAgaWYgKHJvbWFuLmluZGV4T2YoJzcnKSA+IC0xKSB7XG4gICAgcmV0dXJuIHByZWZpeCA9PT0gJ00nID8gJ21hajcnIDogJ203JztcbiAgfVxuXG4gIHJldHVybiBwcmVmaXg7XG59O1xuXG4vKipcbiAqIFRha2UgdGhlIHNwZWNpZmllZCBzY2FsZSBhbmQgZGVncmVlcyBhbmQgcmV0dXJuIHRoZSBjaG9yZCBuYW1lcyBmb3IgdGhlbVxuICogVGhlc2UgY2FuIGJlIHVzZWQgYXMgdGhlIHZhbHVlIGZvciB0aGUgYG5vdGVzYCBwYXJhbSBvZiB0aGUgYGNsaXBgIG1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IG5vdGVPY3RhdmVTY2FsZSBlLmcuICdDNCBtYWpvcidcbiAqIEBwYXJhbSAge1N0cmluZ30gY2hvcmREZWdyZXNzIGUuZy4gJ0kgSVYgViBJVidcbiAqIEByZXR1cm4ge1N0cmluZ30gZS5nLiAnQ00gRk0gR00gRk0nXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRDaG9yZHNCeVByb2dyZXNzaW9uID0gKFxuICBub3RlT2N0YXZlU2NhbGU6IHN0cmluZyxcbiAgY2hvcmREZWdyZXNzOiBzdHJpbmdcbik6IHN0cmluZyA9PiB7XG4gIC8vIFNldCB0aGUgb2N0YXZlIGlmIG1pc3NpbmdcbiAgLy8gRm9yIGV4YW1wbGUgaWYgdGhlIG1ldGhvZCB3YXMgY2FsbGVkIHdpdGggYEMgbWFqb3JgIGluc3RlYWQgb2YgYEM0IG1ham9yYCwgdGhlbiBhZGQgdGhlIDRcbiAgY29uc3Qgbm90ZU9jdGF2ZVNjYWxlQXJyID0gbm90ZU9jdGF2ZVNjYWxlLnNwbGl0KCcgJyk7XG4gIGlmICghbm90ZU9jdGF2ZVNjYWxlQXJyWzBdLm1hdGNoKC9cXGQvKSkge1xuICAgIG5vdGVPY3RhdmVTY2FsZUFyclswXSArPSAnNCc7XG4gICAgbm90ZU9jdGF2ZVNjYWxlID0gbm90ZU9jdGF2ZVNjYWxlQXJyLmpvaW4oJyAnKTtcbiAgfVxuXG4gIC8vIEdldCB0aGUgc2NhbGUgZnJvbSB0aGUgZ2l2ZW4gbm90ZSBhbmQgc2NhbGUvbW9kZSBjb21iaW5hdGlvblxuICBjb25zdCBtb2RlID0gc2NhbGUobm90ZU9jdGF2ZVNjYWxlKTtcbiAgY29uc3QgY2hvcmREZWdyZWVzQXJyID0gY2hvcmREZWdyZXNzLnJlcGxhY2UoL1xccyosK1xccyovZywgJyAnKS5zcGxpdCgnICcpO1xuICAvLyBOb3cgd2UgaGF2ZSBzb21ldGhpbmcgbGlrZSBbJ2knLCAnaWknLCAnSVYnXVxuICAvLyBDb252ZXJ0IGl0IHRvIGEgY2hvcmQgZmFtaWx5IHN1Y2ggYXMgWydDbScsICdEbScsICdGTSddXG4gIGNvbnN0IGNob3JkRmFtaWx5ID0gY2hvcmREZWdyZWVzQXJyLm1hcCgocm9tYW4sIGlkeCkgPT4ge1xuICAgIGNvbnN0IGNob3JkTmFtZSA9IGdldENob3JkTmFtZShyb21hbik7IC8vIGUuZy4gbVxuICAgIC8vIGdldCB0aGUgaW5kZXggdG8gYmUgdXNlZCBieSByZW1vdmluZyBhbnkgZGlnaXQgb3Igbm9uIGFscGhhYmV0IGNoYXJhY3RlclxuICAgIGNvbnN0IHNjYWxlSWQgPSBpZHhCeURlZ3JlZVtyb21hbi5yZXBsYWNlKC9cXFd8XFxkL2csICcnKS50b0xvd2VyQ2FzZSgpXTsgLy8gZS5nLiAwXG4gICAgLy8gZ2V0IHRoZSBub3RlIGl0c2VsZlxuICAgIGNvbnN0IG5vdGUgPSBtb2RlW3NjYWxlSWRdOyAvLyBlLmcuIENcbiAgICAvLyBnZXQgdGhlIG9jdGF2ZSBvZiB0aGUgbm90ZTtcbiAgICBjb25zdCBvY3QgPSBub3RlLnJlcGxhY2UoL1xcRCsvLCAnJyk7IC8vIGUuZy4gNFxuICAgIC8vIG5vdyBnZXQgdGhlIGNob3JkXG4gICAgcmV0dXJuIG5vdGUucmVwbGFjZSgvXFxkLywgJycpICsgY2hvcmROYW1lICsgJ18nICsgb2N0O1xuICB9KTtcblxuICByZXR1cm4gY2hvcmRGYW1pbHkudG9TdHJpbmcoKS5yZXBsYWNlKC8sL2csICcgJyk7XG59O1xuXG5jb25zdCBnZXRQcm9nRmFjdG9yeSA9ICh7IFQsIFAsIEQgfTogVFBEKSA9PiB7XG4gIHJldHVybiAoY291bnQ6IG51bWJlciA9IDQpID0+IHtcbiAgICBjb25zdCBjaG9yZHMgPSBbXTtcblxuICAgIC8vIFB1c2ggcm9vdC90b25pY1xuICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoVCkpO1xuXG4gICAgbGV0IGkgPSAxO1xuXG4gICAgLy8gUGljayBhIHByZWRvbWluYW50XG4gICAgaWYgKGkgPCBjb3VudCAtIDEpIHtcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoUCkpO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIC8vIFRyeSBhbm90aGVyIHByZWRvbWluYW50XG4gICAgaWYgKGkgPCBjb3VudCAtIDEgJiYgZGljZSgpKSB7XG4gICAgICBjaG9yZHMucHVzaChwaWNrT25lKFApKTtcbiAgICAgIGkrKztcbiAgICB9XG5cbiAgICAvLy8vLy8vLy8gNCBvciBtb3JlLy8vLy8vLy8vL1xuICAgIGlmIChpIDwgY291bnQgLSAxKSB7XG4gICAgICAvLyBQaWNrIGEgZG9taW5hbnRcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoRCkpO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIGlmIChpIDwgY291bnQgLSAxKSB7XG4gICAgICAvLyBQaWNrIGEgcHJlZG9taW5hbnRcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoUCkpO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIGlmIChpIDwgY291bnQgLSAxKSB7XG4gICAgICAvLyBQaWNrIGEgZG9taW5hbnRcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoRCkpO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIC8vIFBpY2sgYSBwcmVkb21pbmFudCBpZiBwb3NzaWJsZVxuICAgIGlmIChpIDwgY291bnQgLSAxICYmIGRpY2UoKSkge1xuICAgICAgY2hvcmRzLnB1c2gocGlja09uZShQKSk7XG4gICAgICBpKys7XG4gICAgfVxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIC8vIEZpbGwgdGhlIHJlc3Qgd2l0aCBkb21pbmFudFxuICAgIHdoaWxlIChpIDwgY291bnQpIHtcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoRCkpO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIHJldHVybiBjaG9yZHM7XG4gIH07XG59O1xuXG5jb25zdCBNID0gZ2V0UHJvZ0ZhY3RvcnkoeyBUOiBbJ0knLCAndmknXSwgUDogWydpaScsICdJViddLCBEOiBbJ1YnXSB9KTtcbmNvbnN0IG0gPSBnZXRQcm9nRmFjdG9yeSh7IFQ6IFsnaScsICdWSSddLCBQOiBbJ2lpJywgJ2l2J10sIEQ6IFsnViddIH0pO1xuXG4vKipcbiAqIEdlbmVyYXRlIGEgY2hvcmQgcHJvZ3Jlc3Npb24gYmFzZWQgb24gYmFzaWMgbXVzaWMgdGhlb3J5XG4gKiB3aGVyZSB3ZSBmb2xsb3cgdG9uaWMgdG8gb3B0aW9uYWxseSBwcmVkb21pbmFudCBhbmQgdGhlbiBkb21pbmFudFxuICogYW5kIHRoZW4gcmFuZG9tbHkgdG8gcHJlZG9taW5hbnQgYW5kIGNvbnRpbnVlIHRoaXMgdGlsbCB3ZSByZWFjaCBgY291bnRgXG4gKiBAcGFyYW0gc2NhbGVUeXBlIGUuZy4gTSAoZm9yIG1ham9yIGNob3JkIHByb2dyZXNzaW9uKSwgbSAoZm9yIG1pbm9yIGNob3JkIHByb2dyZXNzaW9uKVxuICogQHBhcmFtIGNvdW50IGUuZy4gNFxuICovXG5leHBvcnQgY29uc3QgcHJvZ3Jlc3Npb24gPSAoc2NhbGVUeXBlOiBwcm9ncmVzc2lvblNjYWxlLCBjb3VudDogbnVtYmVyID0gNCkgPT4ge1xuICBpZiAoc2NhbGVUeXBlID09PSAnbWFqb3InIHx8IHNjYWxlVHlwZSA9PT0gJ00nKSB7XG4gICAgcmV0dXJuIE0oY291bnQpO1xuICB9XG5cbiAgaWYgKHNjYWxlVHlwZSA9PT0gJ21pbm9yJyB8fCBzY2FsZVR5cGUgPT09ICdtJykge1xuICAgIHJldHVybiBtKGNvdW50KTtcbiAgfVxufTtcbiIsICJpbXBvcnQgeyBpbmxpbmVDaG9yZCB9IGZyb20gJ2hhcm1vbmljcyc7XG5cbmV4cG9ydCBjb25zdCBSRV9TRVBBUkFUT1IgPSAvXFx8LztcbmV4cG9ydCBjb25zdCBSRV9QQVRURVJOID0gL14oPzpbeF8tXXxcXFsuKz9cXF0pKyQvO1xuZXhwb3J0IGNvbnN0IFJFX05VTUJFUiA9IC9eKD86XFwuP1xcZCt8XFxkKyg/OlxcLlxcZCspPykkLztcbmV4cG9ydCBjb25zdCBSRV9DSE9SRCA9IC9eW2EtZ0EtR11bXiNcXHNdKlxcZCsoPzpcXC5cXC4pPyQvO1xuZXhwb3J0IGNvbnN0IFJFX05PVEUgPSAvXlthLWdBLUddWyNiXT9cXGQrJC87XG5leHBvcnQgY29uc3QgUkVfTU9ERSA9IC9eKD8hW2l2SVZdezEsM30pW2Etel17Mix9LztcbmV4cG9ydCBjb25zdCBSRV9QUk9HID0gL15baXZJVl17MSwzfVx1MDBCMD8kLztcbmV4cG9ydCBjb25zdCBSRV9UUklNID0gL1xcLiskLztcblxuY29uc3QgQ0FDSEUgPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0KHZhbHVlKSB7XG4gIGxldCBkYXRhID0gW107XG4gIHRyeSB7XG4gICAgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlLnNwbGl0KC8oPz1bXFxkW1xcXXhfLV0pLykpO1xuICAgIGRhdGEgPSBkYXRhLnJlcGxhY2UoLyxcIlxcW1wiLC9nLCAnLCBbJyk7XG4gICAgZGF0YSA9IGRhdGEucmVwbGFjZSgvXCJcXFtcIiwvZywgJ1snKTtcbiAgICBkYXRhID0gZGF0YS5yZXBsYWNlKC8sXCJcXF1cIi9nLCAnXScpO1xuICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gaWdub3JlXG4gIH1cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZXZlbCh2YWx1ZSkge1xuICBpZiAoIUNBQ0hFW3ZhbHVlXSkge1xuICAgIGlmICh2YWx1ZS5pbmNsdWRlcygnJScpKSB7XG4gICAgICBDQUNIRVt2YWx1ZV0gPSAxMjcgKiBwYXJzZUZsb2F0KGAuJHt2YWx1ZX1gKTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlLmluY2x1ZGVzKCcvJykpIHtcbiAgICAgIGNvbnN0IFthLCBiXSA9IHZhbHVlLnNwbGl0KCcvJyk7XG5cbiAgICAgIENBQ0hFW3ZhbHVlXSA9IGEgLyBiO1xuICAgIH0gZWxzZSBpZiAodmFsdWUuaW5jbHVkZXMoJyonKSkge1xuICAgICAgY29uc3QgW2EsIGJdID0gdmFsdWUuc3BsaXQoJyonKTtcblxuICAgICAgQ0FDSEVbdmFsdWVdID0gYSAqIGI7XG4gICAgfSBlbHNlIHtcbiAgICAgIENBQ0hFW3ZhbHVlXSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gQ0FDSEVbdmFsdWVdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGUocmUsIHZhbHVlKSB7XG4gIGlmICghQ0FDSEVbcmUuc291cmNlICsgdmFsdWVdKSB7XG4gICAgQ0FDSEVbcmUuc291cmNlICsgdmFsdWVdID0gcmUudGVzdCh2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIENBQ0hFW3JlLnNvdXJjZSArIHZhbHVlXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvZ3Jlc3Npb24odmFsdWUpIHtcbiAgcmV0dXJuIHZhbGlkYXRlKFJFX1BST0csIHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGF0dGVybih2YWx1ZSkge1xuICByZXR1cm4gdmFsaWRhdGUoUkVfUEFUVEVSTiwgdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgcmV0dXJuIHZhbGlkYXRlKFJFX05VTUJFUiwgdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDaG9yZCh2YWx1ZSkge1xuICByZXR1cm4gdmFsaWRhdGUoUkVfQ0hPUkQsIHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTm90ZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsaWRhdGUoUkVfTk9URSwgdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNNb2RlKHZhbHVlKSB7XG4gIHJldHVybiB2YWxpZGF0ZShSRV9NT0RFLCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUeXBlKHZhbHVlKSB7XG4gIGNvbnN0IGtleSA9IGBUJHt2YWx1ZX1gO1xuICBpZiAoIUNBQ0hFW2tleV0pIHtcbiAgICBpZiAoaXNOb3RlKHZhbHVlKSkgQ0FDSEVba2V5XSA9ICdub3RlJztcbiAgICBlbHNlIGlmIChpc0Nob3JkKHZhbHVlKSkgQ0FDSEVba2V5XSA9ICdjaG9yZCc7XG4gICAgZWxzZSBpZiAoaXNQYXR0ZXJuKHZhbHVlKSkgQ0FDSEVba2V5XSA9ICdwYXR0ZXJuJztcbiAgICBlbHNlIGlmIChpc01vZGUodmFsdWUpKSBDQUNIRVtrZXldID0gJ21vZGUnO1xuICAgIGVsc2UgaWYgKGlzTnVtYmVyKHZhbHVlKSkgQ0FDSEVba2V5XSA9ICdudW1iZXInO1xuICAgIGVsc2UgQ0FDSEVba2V5XSA9ICd2YWx1ZSc7XG4gIH1cbiAgcmV0dXJuIENBQ0hFW2tleV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm0oZXhwcmVzc2lvbikge1xuICBpZiAoIWV4cHJlc3Npb24gfHwgdHlwZW9mIGV4cHJlc3Npb24gIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RpbmcgYSB2YWxpZCBzdHJpbmcsIGdpdmVuICcke2V4cHJlc3Npb259J2ApO1xuICB9XG5cbiAgaWYgKENBQ0hFW2AkJHtleHByZXNzaW9ufWBdKSByZXR1cm4gQ0FDSEVbYCQke2V4cHJlc3Npb259YF07XG5cbiAgY29uc3QgdG9rZW5zID0gZXhwcmVzc2lvbi5zcGxpdCgvXFxzKy8pO1xuXG4gIGlmICghdG9rZW5zLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0aW5nIGEgdmFsaWQgZXhwcmVzc2lvbiwgZ2l2ZW4gJyR7ZXhwcmVzc2lvbn0nYCk7XG4gIH1cblxuICBjb25zdCBhc3QgPSBbXTtcbiAgY29uc3QgY2FycnkgPSBbXTtcblxuICBmdW5jdGlvbiBhZGQodHlwZSwgdmFsdWUpIHtcbiAgICBjb25zdCBpdGVtID0geyB0eXBlLCB2YWx1ZSB9O1xuXG4gICAgaWYgKHR5cGUgPT09ICdudW1iZXInICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGl0ZW0udmFsdWUgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gbGV2ZWwodmFsdWUpIDogdmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09ICdjaG9yZCcgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgaXRlbS52YWx1ZSA9IGlubGluZUNob3JkKHZhbHVlLnJlcGxhY2UoUkVfVFJJTSwgJycpKTtcblxuICAgICAgaWYgKHZhbHVlLmluY2x1ZGVzKCcuLicpKSB7XG4gICAgICAgIGl0ZW0udW5mb2xkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gJ3ZhbHVlJyAmJiB2YWx1ZS5pbmRleE9mKCd4JykgPiAtMSkge1xuICAgICAgY29uc3QgeCA9IHZhbHVlLnNwbGl0KCd4Jyk7XG5cbiAgICAgIGlmICghKGlzTnVtYmVyKHhbMF0pICYmIGlzTnVtYmVyKHhbMV0pKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGluZyB2YWxpZCBudW1iZXJzIGZvciAke3R5cGV9LCBnaXZlbiAnJHt2YWx1ZX0nYCk7XG4gICAgICB9XG5cbiAgICAgIGl0ZW0udmFsdWUgPSBwYXJzZUludCh4WzBdLCAxMCk7XG4gICAgICBpdGVtLnJlcGVhdCA9IHBhcnNlSW50KHhbMV0sIDEwKTtcbiAgICAgIGl0ZW0udHlwZSA9ICdudW1iZXInO1xuICAgIH1cblxuICAgIGFzdC5wdXNoKGl0ZW0pO1xuICB9XG5cbiAgdG9rZW5zLnJlZHVjZSgocHJldiwgY3VyLCBpKSA9PiB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBjb25zdCBuZXh0ID0gdG9rZW5zW2kgKyAxXTtcbiAgICBjb25zdCBsYXN0ID0gYXN0W2FzdC5sZW5ndGggLSAxXSB8fCB7fTtcblxuICAgIGlmIChSRV9TRVBBUkFUT1IudGVzdChjdXIpKSB7XG4gICAgICBhZGQoJ2Nob3JkJywgY3VyLnNwbGl0KFJFX1NFUEFSQVRPUikpO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjdXIgPT09ICdzdHJpbmcnICYmIChcbiAgICAgIChjdXIuaW5jbHVkZXMoJy8nKSAmJiBjdXIuaW5kZXhPZignLycpID4gMClcbiAgICAgIHx8IChjdXIuaW5jbHVkZXMoJyonKSAmJiBjdXIuaW5kZXhPZignKicpID4gMClcbiAgICAgIHx8IChjdXIuaW5jbHVkZXMoJyUnKSAmJiBjdXIuaW5kZXhPZignJScpID4gMClcbiAgICApKSB7XG4gICAgICBhZGQoJ251bWJlcicsIGxldmVsKGN1cikpO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKGN1ci5pbmRleE9mKCclJykgPiAtMSkge1xuICAgICAgaWYgKGN1ciA9PT0gJyUnKSB7XG4gICAgICAgIGlmICghbGFzdC50eXBlKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIGV4cHJlc3Npb24gdG8gcmVwZWF0LCBnaXZlbiAnJHt0b2tlbnMuc2xpY2UoMCwgaSkuam9pbignICcpfSdgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhc3QucmVwZWF0ID0gbGFzdC5yZXBlYXQgfHwgMTtcbiAgICAgICAgbGFzdC5yZXBlYXQgKz0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZCgncGFyYW0nLCBjdXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAoaXNQcm9ncmVzc2lvbihjdXIpKSB7XG4gICAgICBsYXN0LnZhbHVlICs9IGAgJHtjdXJ9YDtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmIChjdXIuY2hhckF0KCkgPT09ICcjJykge1xuICAgICAgYWRkKCdjaGFubmVsJywgY3VyKTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmIChpc05vdGUoY3VyKSB8fCBpc0Nob3JkKGN1cikgfHwgaXNNb2RlKGN1cikgfHwgaXNOdW1iZXIoY3VyKSkge1xuICAgICAgY2FycnkucHVzaChjdXIpO1xuXG4gICAgICBpZiAoXG4gICAgICAgICFuZXh0XG4gICAgICAgIHx8IGNhcnJ5Lmxlbmd0aCA9PT0gM1xuICAgICAgICB8fCAhKGlzTm90ZShuZXh0KSB8fCBpc01vZGUobmV4dCkgfHwgaXNOdW1iZXIobmV4dCkpXG4gICAgICApIHtcbiAgICAgICAgY29uc3Qgb2xkID0gY2Fycnkuc3BsaWNlKDAsIGNhcnJ5Lmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IHRlc3QgPSBvbGRbMF07XG5cbiAgICAgICAgbGV0IG1vZGUgPSBvbGRbMV07XG4gICAgICAgIGxldCBvY3RhdmUgPSBvbGRbMl07XG5cbiAgICAgICAgaWYgKCFvY3RhdmUgJiYgaXNOdW1iZXIobW9kZSkpIHtcbiAgICAgICAgICBvY3RhdmUgPSBtb2RlO1xuICAgICAgICAgIG1vZGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgdGVzdC5sZW5ndGggPCAyXG4gICAgICAgICAgJiYgaXNOb3RlKHRlc3QpXG4gICAgICAgICAgJiYgKGlzTW9kZShtb2RlKSB8fCBpc051bWJlcihvY3RhdmUpKVxuICAgICAgICApIHtcbiAgICAgICAgICBhZGQoJ21vZGUnLCBvbGQuam9pbignICcpKTtcbiAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgfVxuXG4gICAgICAgIG9sZC5mb3JFYWNoKHggPT4ge1xuICAgICAgICAgIGFkZCh4Lmxlbmd0aCA+IDEgfHwgIWlzTm90ZSh4KSA/IGdldFR5cGUoeCkgOiAnbW9kZScsIHgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY3VyID09PSAnc3RyaW5nJyAmJiBjdXIuaW5kZXhPZignLi4nKSA+IC0xKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IGN1ci5zcGxpdCgnLi4nKTtcbiAgICAgIGNvbnN0IG1pbiA9IHBhcnRzWzBdIHx8IDE7XG4gICAgICBjb25zdCBtYXggPSBwYXJ0c1sxXSB8fCBJbmZpbml0eTtcblxuICAgICAgdHlwZSA9ICdzbGljZSc7XG4gICAgICBjdXIgPSBbbWluLCBtYXhdO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY3VyID09PSAnc3RyaW5nJyAmJiAoY3VyLmNoYXJBdCgpID09PSAnLycgfHwgY3VyLmNoYXJBdCgpID09PSAnKicpKSB7XG4gICAgICBjb25zdCBvcGVyYXRvciA9IGN1ci5jaGFyQXQoKSA9PT0gJy8nID8gJ2RpdmlkZScgOiAnbXVsdGlwbHknO1xuICAgICAgY29uc3QgbnVtYmVyID0gY3VyLnN1YnN0cigxKTtcblxuICAgICAgaWYgKCFpc051bWJlcihudW1iZXIpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0aW5nIGEgdmFsaWQgZXhwcmVzc2lvbiB0byAke29wZXJhdG9yfSwgZ2l2ZW4gJyR7dG9rZW5zLnNsaWNlKDAsIGkpLmpvaW4oJyAnKX0gJHtjdXJ9J2ApO1xuICAgICAgfVxuXG4gICAgICBhZGQob3BlcmF0b3IsIHBhcnNlRmxvYXQobnVtYmVyKSk7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAoIXR5cGUgJiYgZ2V0VHlwZShjdXIpID09PSAndmFsdWUnICYmIEFycmF5LmlzQXJyYXkobGFzdC52YWx1ZSkpIHtcbiAgICAgIGxhc3QudmFsdWVbMV0gPSBsYXN0LnZhbHVlWzFdIHx8ICcnO1xuICAgICAgbGFzdC52YWx1ZVsxXSArPSBsYXN0LnZhbHVlWzFdID8gJyAnIDogJyc7XG4gICAgICBsYXN0LnZhbHVlWzFdICs9IGN1cjtcbiAgICAgIHJldHVybiBjdXI7XG4gICAgfVxuXG4gICAgYWRkKHR5cGUgfHwgZ2V0VHlwZShjdXIpLCB0eXBlb2YgY3VyID09PSAnc3RyaW5nJyAmJiBpc051bWJlcihjdXIpID8gcGFyc2VJbnQoY3VyLCAxMCkgOiBjdXIpO1xuICAgIHJldHVybiBjdXI7XG4gIH0sIG51bGwpO1xuXG4gIENBQ0hFW2AkJHtleHByZXNzaW9ufWBdID0gYXN0O1xuICByZXR1cm4gYXN0O1xufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5yZWR1Y2UoKHByZXYsIGN1cikgPT4gcHJldi5jb25jYXQoY3VyKSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwZWF0KHZhbHVlLCB0aW1lcykge1xuICBjb25zdCBvdXQgPSBbXTtcblxuICB3aGlsZSAodGltZXMpIHtcbiAgICBvdXQucHVzaCh2YWx1ZSk7XG4gICAgdGltZXMgLT0gMTtcbiAgfVxuXG4gIHJldHVybiBvdXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5nZShtaW4sIG1heCwgc3RlcCkge1xuICBjb25zdCBhY2MgPSBbXTtcblxuICBpZiAoIXN0ZXApIHtcbiAgICBmb3IgKGxldCBpID0gbWluOyBpIDw9IG1heDsgaSArPSAxKSB7XG4gICAgICBhY2MucHVzaChpKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZGlmZiA9IChtYXggLSBtaW4pIC8gc3RlcDtcblxuICAgIGZvciAobGV0IGkgPSBtaW47IGkgPD0gbWF4OyBpICs9IGRpZmYpIHtcbiAgICAgIGFjYy5wdXNoKGkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhY2M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZSh2YWx1ZSkge1xuICBpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHJldHVybiB2YWx1ZTtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSByZXR1cm4gdmFsdWUubWFwKGNsb25lKTtcblxuICBjb25zdCBjb3B5ID0ge307XG5cbiAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goa2V5ID0+IHtcbiAgICBjb3B5W2tleV0gPSBjbG9uZSh2YWx1ZVtrZXldKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvcHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB6aXAoYSwgYiwgY2IpIHtcbiAgY29uc3QgbWF4ID0gTWF0aC5tYXgoYS5sZW5ndGgsIGIubGVuZ3RoKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG1heDsgaSArPSAxKSB7XG4gICAgaWYgKHR5cGVvZiBhW2ldICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgYltpXSAhPT0gJ3VuZGVmaW5lZCcpIGNiKGFbaV0sIGJbaV0pO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgZ2V0Q2hvcmRzQnlQcm9ncmVzc2lvbiB9IGZyb20gJ3NjcmliYmxldHVuZS9zcmMvcHJvZ3Jlc3Npb24nO1xuaW1wb3J0IHsgc2NhbGUsIGlubGluZUNob3JkIH0gZnJvbSAnaGFybW9uaWNzJztcblxuaW1wb3J0IHsgaXNQcm9ncmVzc2lvbiwgdHJhbnNmb3JtIH0gZnJvbSAnLi90b2tlbml6ZSc7XG5pbXBvcnQgeyByZXBlYXQsIGNsb25lIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2UoaW5wdXQsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShpbnB1dCkpIHJldHVybiBpbnB1dDtcblxuICBjb25zdCBmbiA9IHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyA/IGNhbGxiYWNrIDogKHYgPT4gdik7XG5cbiAgbGV0IHNraXA7XG4gIHJldHVybiBpbnB1dC5yZWR1Y2UoKHByZXYsIGN1ciwgaSkgPT4ge1xuICAgIGNvbnN0IGxhc3QgPSBwcmV2W3ByZXYubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgbmV4dCA9IGlucHV0W2kgKyAxXSB8fCB7fTtcbiAgICBjb25zdCBvbGQgPSBpbnB1dFtpIC0gMV0gfHwge307XG5cbiAgICBpZiAoc2tpcCkge1xuICAgICAgc2tpcCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY3VyKSkge1xuICAgICAgcHJldi5wdXNoKC4uLmN1cik7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAoY3VyLnR5cGUgPT09ICd2YWx1ZScgJiYgY3VyLnZhbHVlID09PSAnLicpIHtcbiAgICAgIGlmIChwcmV2Lmxlbmd0aCA+IDApIHByZXYucHVzaChwcmV2WzBdKTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmIChvbGQudHlwZSA9PT0gJ3BhdHRlcm4nICYmIGN1ci50eXBlID09PSAncGF0dGVybicpIHtcbiAgICAgIHByZXZbcHJldi5sZW5ndGggLSAxXSArPSBjdXIudmFsdWU7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGN1ci50eXBlKSB7XG4gICAgICBjYXNlICdwYXR0ZXJuJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdub3RlJzpcbiAgICAgICAgaWYgKGN1ci5yZXBlYXQpIHByZXYucHVzaCguLi5yZXBlYXQoY3VyLnZhbHVlLCBjdXIucmVwZWF0KSk7XG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY3VyLnZhbHVlKSkgcHJldi5wdXNoKC4uLmN1ci52YWx1ZSk7XG4gICAgICAgIGVsc2UgcHJldi5wdXNoKGN1ci52YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdjaG9yZCc6XG4gICAgICAgIGlmIChjdXIucmVwZWF0KSBwcmV2LnB1c2goLi4ucmVwZWF0KGN1ci52YWx1ZSwgY3VyLnJlcGVhdCkpO1xuICAgICAgICBlbHNlIGlmIChjdXIudW5mb2xkKSBwcmV2LnB1c2goLi4uY3VyLnZhbHVlKTtcbiAgICAgICAgZWxzZSBwcmV2LnB1c2goY3VyLnZhbHVlKTtcblxuICAgICAgICBpZiAoY3VyLnR5cGUgIT09ICdjaG9yZCcpIHtcbiAgICAgICAgICBza2lwID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZGl2aWRlJzpcbiAgICAgICAgcHJldltwcmV2Lmxlbmd0aCAtIDFdIC89IGN1ci52YWx1ZTtcbiAgICAgICAgcmV0dXJuIHByZXY7XG5cbiAgICAgIGNhc2UgJ211bHRpcGx5JzpcbiAgICAgICAgcHJldi5wdXNoKC4uLnJlcGVhdChsYXN0LCBjdXIudmFsdWUgLSAxKSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdzbGljZSc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGxhc3QpKSB7XG4gICAgICAgICAgcHJldltwcmV2Lmxlbmd0aCAtIDFdID0gbGFzdC5zbGljZShjdXIudmFsdWVbMF0gLSAxLCBjdXIudmFsdWVbMV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByZXYucHVzaChjdXIudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdtb2RlJzpcbiAgICAgICAgcHJldltwcmV2Lmxlbmd0aCAtIDFdID0gYCR7bGFzdH0gJHtjdXIudmFsdWV9YDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3BhcmFtJzpcbiAgICAgIGNhc2UgJ3ZhbHVlJzoge1xuICAgICAgICBsZXQgdmFsdWUgPSBudWxsO1xuICAgICAgICBpZiAodHlwZW9mIGNvbnRleHRbY3VyLnZhbHVlXSAhPT0gJ3VuZGVmaW5lZCcpIHZhbHVlID0gY29udGV4dFtjdXIudmFsdWVdO1xuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgZXhwcmVzc2lvbiBmb3IgJyR7Y3VyLnZhbHVlfSdgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZVswXSAmJiB2YWx1ZVswXS50eXBlKSB7XG4gICAgICAgICAgdmFsdWUgPSByZWR1Y2UodmFsdWUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGN1ci5yZXBlYXQpIHtcbiAgICAgICAgICAgIHByZXYucHVzaCguLi5yZXBlYXQodmFsdWUsIGN1ci5yZXBlYXQpLnJlZHVjZSgoX3ByZXYsIF9jdXIpID0+IHtcbiAgICAgICAgICAgICAgX3ByZXYucHVzaCguLi5fY3VyKTtcbiAgICAgICAgICAgICAgcmV0dXJuIF9wcmV2O1xuICAgICAgICAgICAgfSwgW10pKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJldi5wdXNoKC4uLnZhbHVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbHVlID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV07XG4gICAgICAgIGlmIChjdXIucmVwZWF0KSBwcmV2LnB1c2goLi4ucmVwZWF0KHZhbHVlLCBjdXIucmVwZWF0KSk7XG4gICAgICAgIGVsc2UgcHJldi5wdXNoKC4uLnZhbHVlKTtcbiAgICAgIH0gYnJlYWs7XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5oYW5kbGVkICcke2N1ci50eXBlfSdgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJldjtcbiAgfSwgW10pLnJlZHVjZSgobWVtbywgaXRlbSkgPT4ge1xuICAgIGNvbnN0IHByZXYgPSBtZW1vW21lbW8ubGVuZ3RoIC0gMV07XG5cbiAgICBpZiAoXG4gICAgICBBcnJheS5pc0FycmF5KHByZXYpXG4gICAgICAmJiBBcnJheS5pc0FycmF5KGl0ZW0pXG4gICAgICAmJiB0eXBlb2YgaXRlbVswXSA9PT0gJ251bWJlcidcbiAgICAgICYmIGl0ZW0ubGVuZ3RoID09PSAyXG4gICAgKSB7XG4gICAgICBjb25zdCBvZmZzZXQgPSBpdGVtWzFdID09PSBJbmZpbml0eSA/IHByZXYubGVuZ3RoIDogaXRlbVsxXTtcbiAgICAgIGNvbnN0IFtiYXNlLCBsZW5ndGhdID0gU3RyaW5nKG9mZnNldCkuc3BsaXQoL1xcRC8pO1xuXG4gICAgICBtZW1vLnBvcCgpO1xuICAgICAgbWVtby5wdXNoKC4uLnByZXYuc2xpY2UoaXRlbVswXSAtIDEsIGJhc2UpKTtcblxuICAgICAgaWYgKFN0cmluZyhvZmZzZXQpLmluY2x1ZGVzKCc+JykpIHtcbiAgICAgICAgY29uc3QgcGFydHMgPSBtZW1vLnNsaWNlKC1sZW5ndGggLSAxKTtcblxuICAgICAgICBwYXJ0cy5wb3AoKTtcbiAgICAgICAgcGFydHMucmV2ZXJzZSgpO1xuICAgICAgICBtZW1vLnB1c2goLi4ucGFydHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1lbW87XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJyAmJiBpdGVtLmluY2x1ZGVzKCcgJykpIHtcbiAgICAgIGNvbnN0IGNodW5rcyA9IGl0ZW0uc3BsaXQoJyAnKTtcblxuICAgICAgaWYgKGNodW5rcy5zb21lKGlzUHJvZ3Jlc3Npb24pKSB7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IGNodW5rcy5maW5kSW5kZXgoaXNQcm9ncmVzc2lvbik7XG4gICAgICAgIGNvbnN0IFthLCBiXSA9IFtjaHVua3Muc2xpY2UoMCwgb2Zmc2V0KSwgY2h1bmtzLnNsaWNlKG9mZnNldCldO1xuXG4gICAgICAgIG1lbW8ucHVzaChnZXRDaG9yZHNCeVByb2dyZXNzaW9uKGEuam9pbignICcpLCBiLmpvaW4oJyAnKSkuc3BsaXQoJyAnKS5tYXAoeCA9PiBmbihpbmxpbmVDaG9yZCh4KSkpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lbW8ucHVzaChmbihzY2FsZShpdGVtKSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtZW1vLnB1c2goZm4oaXRlbSkpO1xuICAgIH1cbiAgICByZXR1cm4gbWVtbztcbiAgfSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2UoYnVmZmVyKSB7XG4gIGNvbnN0IHRyYWNrcyA9IHt9O1xuICBjb25zdCBtYWluID0gW107XG4gIGNvbnN0IGRhdGEgPSB7fTtcblxuICBsZXQgY2hhbm5lbCA9IG51bGw7XG4gIGxldCBwcmVmaXggPSAnJztcbiAgbGV0IHRyYWNrO1xuICBsZXQgaW5mbyA9IHt9O1xuICBidWZmZXIuc3BsaXQoL1xccj9cXG4vZykuZm9yRWFjaCgobGluZSwgbnRoKSA9PiB7XG4gICAgbGluZSA9IGxpbmUucmVwbGFjZSgvOy4rPyQvLCAnJykudHJpbSgpO1xuICAgIGlmICghbGluZSkgcmV0dXJuO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlmIChsaW5lLmNoYXJBdCgpID09PSAnJScpIHtcbiAgICAgICAgY29uc3QgW25hbWUsIC4uLnZhbHVlXSA9IGxpbmUuc3BsaXQoL1xccysvKTtcblxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGRhdGFbbmFtZV0gPSB0cmFuc2Zvcm0odmFsdWUuam9pbignICcpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChsaW5lLmluZGV4T2YoJyMgJykgPj0gMCkge1xuICAgICAgICBpZiAodHJhY2spIHtcbiAgICAgICAgICB0cmFja3NbdHJhY2tdID0gaW5mbztcbiAgICAgICAgICBjaGFubmVsID0gbnVsbDtcbiAgICAgICAgICBwcmVmaXggPSAnJztcbiAgICAgICAgICBpbmZvID0ge307XG4gICAgICAgIH1cblxuICAgICAgICB0cmFjayA9IGxpbmUuc3BsaXQoL1xccysvKS5zbGljZSgxKS5qb2luKCcgJyk7XG4gICAgICB9IGVsc2UgaWYgKGxpbmUuY2hhckF0KCkgPT09ICc+Jykge1xuICAgICAgICBtYWluLnB1c2godHJhbnNmb3JtKGxpbmUuc3Vic3RyKDEpLnRyaW0oKSkpO1xuICAgICAgfSBlbHNlIGlmIChsaW5lLmNoYXJBdCgpID09PSAnQCcpIHtcbiAgICAgICAgY29uc3QgW25hbWUsIC4uLmV4dGVuZF0gPSBsaW5lLnN1YnN0cigxKS5zcGxpdCgnICcpO1xuXG4gICAgICAgIGlmIChleHRlbmRbMF0gPT09ICc8Jykge1xuICAgICAgICAgIGNvbnN0IGtleSA9IGAke2V4dGVuZFsxXX0jYDtcblxuICAgICAgICAgIE9iamVjdC5rZXlzKGluZm8pXG4gICAgICAgICAgICAuZmlsdGVyKHggPT4geC5pbmRleE9mKGtleSkgPT09IDApXG4gICAgICAgICAgICAuZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgICAgaW5mb1tgJHtuYW1lfSMke2suc3BsaXQoJyMnKVsxXX1gXSA9IGNsb25lKGluZm9ba10pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJlZml4ID0gbmFtZTtcbiAgICAgIH0gZWxzZSBpZiAobGluZS5pbmRleE9mKCc6JykgPiAwKSB7XG4gICAgICAgIGNvbnN0IFtuYW1lLCAuLi52YWx1ZV0gPSBsaW5lLnNwbGl0KCc6Jyk7XG5cbiAgICAgICAgZGF0YVtuYW1lXSA9IHRyYW5zZm9ybSh2YWx1ZS5qb2luKCc6JykudHJpbSgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRpY2tzID0gdHJhbnNmb3JtKGxpbmUpO1xuXG4gICAgICAgIGlmICghdGlja3NbMF0gfHwgdGlja3NbMF0udHlwZSAhPT0gJ2NoYW5uZWwnKSB7XG4gICAgICAgICAgaWYgKCFjaGFubmVsKSB0aHJvdyBuZXcgVHlwZUVycm9yKGBNaXNzaW5nIGNoYW5uZWwsIGdpdmVuICcke2xpbmV9J2ApO1xuXG4gICAgICAgICAgY29uc3QgZW5kID0gaW5mb1tjaGFubmVsXVtpbmZvW2NoYW5uZWxdLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgICAgaWYgKCFlbmQudmFsdWVzKSBlbmQudmFsdWVzID0gW3sgdHlwZTogJ251bWJlcicsIHZhbHVlOiAxMjcgfV07XG4gICAgICAgICAgZW5kLnZhbHVlcy5wdXNoKC4uLnRpY2tzKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBub3RlcyA9IHRpY2tzLmZpbmRJbmRleCh4ID0+IFsnbm90ZScsICdjaG9yZCcsICdwYXJhbSddLmluY2x1ZGVzKHgudHlwZSkpO1xuICAgICAgICBjb25zdCBpbmRleCA9IHRpY2tzLmZpbmRJbmRleCh4ID0+IHgudHlwZSA9PT0gJ3BhdHRlcm4nKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBpbmRleCA+IDAgPyB0aWNrcy5zbGljZShpbmRleCkgOiB0aWNrcztcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdmFsdWUuZmluZEluZGV4KHggPT4geC50eXBlICE9PSAncGF0dGVybicpO1xuICAgICAgICBjb25zdCBpbnB1dHMgPSB0aWNrcy5zbGljZSgwLCBpbmRleCA+IDAgPyBpbmRleCA6IDEpO1xuXG4gICAgICAgIGNoYW5uZWwgPSBwcmVmaXggKyBpbnB1dHNbMF0udmFsdWU7XG4gICAgICAgIGlmICghaW5mb1tjaGFubmVsXSkge1xuICAgICAgICAgIGluZm9bY2hhbm5lbF0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzcGVjO1xuICAgICAgICBpZiAobm90ZXMgPiAwICYmIGluZGV4ID09PSAtMSkge1xuICAgICAgICAgIGNvbnN0IGVuZCA9IGluZm9bY2hhbm5lbF1baW5mb1tjaGFubmVsXS5sZW5ndGggLSAxXTtcblxuICAgICAgICAgIGVuZC5kYXRhID0gdmFsdWUuc2xpY2Uobm90ZXMpO1xuICAgICAgICAgIHNwZWMgPSB7XG4gICAgICAgICAgICBpbnB1dDogZW5kLmlucHV0LFxuICAgICAgICAgICAgdmFsdWVzOiB2YWx1ZS5zbGljZSgxLCBub3RlcyksXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChvZmZzZXQgPiAwKSB7XG4gICAgICAgICAgc3BlYyA9IHtcbiAgICAgICAgICAgIGRhdGE6IHZhbHVlLnNsaWNlKG9mZnNldCksXG4gICAgICAgICAgICBpbnB1dDogdmFsdWUuc2xpY2UoMCwgb2Zmc2V0KSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKG9mZnNldCA9PT0gMCkge1xuICAgICAgICAgIHNwZWMgPSB7IHZhbHVlczogdmFsdWUuc2xpY2UoMSkgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzcGVjID0geyBpbnB1dDogdmFsdWUgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbnB1dHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHNwZWMudmFsdWVzID0gaW5wdXRzLnNsaWNlKDEpO1xuICAgICAgICB9XG4gICAgICAgIGluZm9bY2hhbm5lbF0ucHVzaChzcGVjKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zdCBtc2cgPSB0eXBlb2YgZSA9PT0gJ3N0cmluZycgPyBlIDogZS5tZXNzYWdlO1xuXG4gICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYCR7bXNnfVxcbiAgYXQgbGluZSAke250aCArIDF9XFxuJHtsaW5lfWApO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHRyYWNrKSB7XG4gICAgdHJhY2tzW3RyYWNrXSA9IGluZm87XG4gIH1cbiAgcmV0dXJuIHsgbWFpbiwgZGF0YSwgdHJhY2tzIH07XG59XG4iLCAiZnVuY3Rpb24gZXNjKHZhbHVlKSB7XG4gIHJldHVybiBTdHJpbmcodmFsdWUpXG4gICAgLnJlcGxhY2UoLyYvZywgJyZhbXA7JylcbiAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXG4gICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKTtcbn1cblxuZnVuY3Rpb24gc3BhbihjbHMsIHZhbHVlLCBhdHRycyA9IHt9KSB7XG4gIGNvbnN0IGRhdGFBdHRycyA9IE9iamVjdC5lbnRyaWVzKGF0dHJzKVxuICAgIC5tYXAoKFtrZXksIGF0dHJWYWx1ZV0pID0+IGAgZGF0YS0ke2tleX09XCIke2VzYyhhdHRyVmFsdWUpfVwiYClcbiAgICAuam9pbignJyk7XG4gIHJldHVybiBgPHNwYW4gY2xhc3M9XCIke2Nsc31cIiR7ZGF0YUF0dHJzfT4ke2VzYyh2YWx1ZSl9PC9zcGFuPmA7XG59XG5cbmZ1bmN0aW9uIGNsYXNzaWZ5KHRva2VuKSB7XG4gIGlmICghdG9rZW4pIHJldHVybiBudWxsO1xuICBpZiAodG9rZW4gPT09ICc8JykgcmV0dXJuICd0b2staW5oZXJpdCc7XG4gIGlmICh0b2tlbiA9PT0gJyUnKSByZXR1cm4gJ3Rvay12YXItcmVmJztcbiAgaWYgKHRva2VuLmNoYXJBdCgwKSA9PT0gJyUnKSByZXR1cm4gJ3Rvay12YXItcmVmJztcbiAgaWYgKC9eXFwqXFxkKyQvLnRlc3QodG9rZW4pKSByZXR1cm4gJ3Rvay1yZXBlYXQnO1xuICBpZiAoL15beF9cXC1cXFtcXF1dKyQvLnRlc3QodG9rZW4pKSByZXR1cm4gJ3Rvay1wYXR0ZXJuJztcbiAgaWYgKC9eW2EtZ0EtR11bI2JdP1xcZCskLy50ZXN0KHRva2VuKSkgcmV0dXJuICd0b2stbm90ZSc7XG4gIGlmICh0b2tlbi5pbmNsdWRlcygnfCcpKSByZXR1cm4gJ3Rvay1jaG9yZCc7XG4gIGlmICgvXihtYWpvcnxtaW5vcnxwaHJ5Z2lhbnxkb3JpYW58bWl4b2x5ZGlhbnxsb2NyaWFufGx5ZGlhbikkL2kudGVzdCh0b2tlbikpIHJldHVybiAndG9rLW1vZGUnO1xuICBpZiAoL14oPzpJfElJfElJSXxJVnxWfFZJfFZJSXxpfGlpfGlpaXxpdnx2fHZpfHZpaSlcdTAwQjA/JC8udGVzdCh0b2tlbikpIHJldHVybiAndG9rLXByb2dyZXNzaW9uJztcbiAgaWYgKC9eKD86XFwrXFwrfFxcLlxcLnw+PnxcXCpcXCopJC8udGVzdCh0b2tlbikpIHJldHVybiAndG9rLW9wZXJhdG9yJztcbiAgaWYgKC9eI1xcZCskLy50ZXN0KHRva2VuKSkgcmV0dXJuICd0b2stY2hhbm5lbCc7XG4gIGlmICgvXi0/XFxkKyhcXC5cXGQrKT8kLy50ZXN0KHRva2VuKSkgcmV0dXJuICd0b2stbnVtYmVyJztcbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRva2VuKHRva2VuKSB7XG4gIGNvbnN0IGNscyA9IGNsYXNzaWZ5KHRva2VuKTtcbiAgaWYgKCFjbHMpIHJldHVybiBlc2ModG9rZW4pO1xuICBpZiAoY2xzID09PSAndG9rLXZhci1yZWYnICYmIHRva2VuICE9PSAnJScpIHJldHVybiBzcGFuKGNscywgdG9rZW4sIHsgdmFyOiB0b2tlbiB9KTtcbiAgaWYgKGNscyA9PT0gJ3Rvay1jaGFubmVsJykgcmV0dXJuIHNwYW4oY2xzLCB0b2tlbiwgeyBpbnN0cnVtZW50OiB0b2tlbi5zbGljZSgxKSB9KTtcbiAgaWYgKGNscyA9PT0gJ3Rvay1tb2RlJykgcmV0dXJuIHNwYW4oY2xzLCB0b2tlbiwgeyBtb2RlOiB0b2tlbi50b0xvd2VyQ2FzZSgpIH0pO1xuICBpZiAoY2xzID09PSAndG9rLXBhdHRlcm4nKSByZXR1cm4gc3BhbihjbHMsIHRva2VuLCB7IHBhdHRlcm46ICcxJyB9KTtcbiAgcmV0dXJuIHNwYW4oY2xzLCB0b2tlbik7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRva2Vucyh0ZXh0KSB7XG4gIHJldHVybiB0ZXh0XG4gICAgLnNwbGl0KC8oXFxzKykvKVxuICAgIC5tYXAocGFydCA9PiAoL1xccysvLnRlc3QocGFydCkgPyBwYXJ0IDogcmVuZGVyVG9rZW4ocGFydCkpKVxuICAgIC5qb2luKCcnKTtcbn1cblxuZnVuY3Rpb24gc3BsaXRDb21tZW50KGxpbmUpIHtcbiAgY29uc3QgaWR4ID0gbGluZS5pbmRleE9mKCc7Jyk7XG4gIGlmIChpZHggPCAwKSByZXR1cm4gW2xpbmUsICcnXTtcbiAgcmV0dXJuIFtsaW5lLnNsaWNlKDAsIGlkeCksIGxpbmUuc2xpY2UoaWR4KV07XG59XG5cbmZ1bmN0aW9uIHJlbmRlckJhc2UoYmFzZSkge1xuICBpZiAoIWJhc2UudHJpbSgpKSByZXR1cm4gZXNjKGJhc2UpO1xuXG4gIGlmICgvXlxccyojI1xccysvLnRlc3QoYmFzZSkpIHtcbiAgICByZXR1cm4gYmFzZS5yZXBsYWNlKC9eKFxccyojI1xccyspKC4qKSQvLCAoXywgcDEsIHAyKSA9PiBgJHtlc2MocDEpfSR7c3BhbigndG9rLXN1YnRyYWNrJywgcDIpfWApO1xuICB9XG4gIGlmICgvXlxccyojXFxzKy8udGVzdChiYXNlKSkge1xuICAgIHJldHVybiBiYXNlLnJlcGxhY2UoL14oXFxzKiNcXHMrKSguKikkLywgKF8sIHAxLCBwMikgPT4gYCR7ZXNjKHAxKX0ke3NwYW4oJ3Rvay10cmFjaycsIHAyKX1gKTtcbiAgfVxuICBpZiAoL15cXHMqQC8udGVzdChiYXNlKSkge1xuICAgIHJldHVybiByZW5kZXJUb2tlbnMoYmFzZS5yZXBsYWNlKC88L2csICcgPCAnKSk7XG4gIH1cbiAgaWYgKC9eXFxzKj4vLnRlc3QoYmFzZSkpIHtcbiAgICBjb25zdCBpbmRlbnQgPSBlc2MoYmFzZS5tYXRjaCgvXlxccyovKVswXSk7XG4gICAgY29uc3QgYm9keSA9IGJhc2UudHJpbVN0YXJ0KCkuc2xpY2UoMSkucmVwbGFjZSgvXlxccyovLCAnICcpO1xuICAgIGNvbnN0IHJlbmRlcmVkID0gYm9keVxuICAgICAgLnNwbGl0KC8oXFxzKykvKVxuICAgICAgLm1hcChwYXJ0ID0+IHtcbiAgICAgICAgaWYgKCFwYXJ0IHx8IC9cXHMrLy50ZXN0KHBhcnQpKSByZXR1cm4gcGFydDtcbiAgICAgICAgaWYgKC9eW0EtWl1bQS1aMC05XSokLy50ZXN0KHBhcnQpKSByZXR1cm4gc3BhbigndG9rLXNlY3Rpb24nLCBwYXJ0LCB7IHNlY3Rpb246IHBhcnQgfSk7XG4gICAgICAgIHJldHVybiByZW5kZXJUb2tlbihwYXJ0KTtcbiAgICAgIH0pXG4gICAgICAuam9pbignJyk7XG4gICAgcmV0dXJuIGAke2luZGVudH0ke3NwYW4oJ3Rvay1hcnJhbmdlbWVudCcsICc+Jyl9JHtyZW5kZXJlZH1gO1xuICB9XG4gIGlmICgvXlxccyolW15cXHNdK1xccysvLnRlc3QoYmFzZSkpIHtcbiAgICByZXR1cm4gYmFzZS5yZXBsYWNlKC9eKFxccyopKCVbXlxcc10rKShcXHMqKSguKikkLywgKF8sIGksIHYsIHMsIHJlc3QpID0+IChcbiAgICAgIGAke2VzYyhpKX0ke3NwYW4oJ3Rvay12YXItZGVmJywgdiwgeyB2YXI6IHYgfSl9JHtlc2Mocyl9JHtyZW5kZXJUb2tlbnMocmVzdCl9YFxuICAgICkpO1xuICB9XG4gIGlmICgvXlxccyojXFxkKy8udGVzdChiYXNlKSkge1xuICAgIHJldHVybiByZW5kZXJUb2tlbnMoYmFzZSk7XG4gIH1cbiAgcmV0dXJuIHJlbmRlclRva2VucyhiYXNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZ2hsaWdodChpbnB1dCkge1xuICByZXR1cm4gU3RyaW5nKGlucHV0IHx8ICcnKVxuICAgIC5zcGxpdCgvXFxyP1xcbi8pXG4gICAgLm1hcChsaW5lID0+IHtcbiAgICAgIGNvbnN0IFtiYXNlLCBjb21tZW50XSA9IHNwbGl0Q29tbWVudChsaW5lKTtcbiAgICAgIGNvbnN0IHJlbmRlcmVkID0gcmVuZGVyQmFzZShiYXNlKTtcbiAgICAgIGlmICghY29tbWVudCkgcmV0dXJuIHJlbmRlcmVkO1xuICAgICAgcmV0dXJuIGAke3JlbmRlcmVkfSR7c3BhbigndG9rLWNvbW1lbnQnLCBjb21tZW50KX1gO1xuICAgIH0pXG4gICAgLmpvaW4oJ1xcbicpO1xufVxuIiwgImltcG9ydCB7IGhpZ2hsaWdodCB9IGZyb20gJy4uL2hpZ2hsaWdodCc7XG5cbmZ1bmN0aW9uIGNsYW1wVG9vbHRpcCh4LCB5LCB3aWR0aCA9IDMyMCkge1xuICBjb25zdCBtYXhYID0gTWF0aC5tYXgoOCwgd2luZG93LmlubmVyV2lkdGggLSB3aWR0aCAtIDgpO1xuICBjb25zdCBsZWZ0ID0gTWF0aC5taW4oeCArIDEyLCBtYXhYKTtcbiAgY29uc3QgdG9wID0gTWF0aC5taW4oeSArIDEyLCB3aW5kb3cuaW5uZXJIZWlnaHQgLSA3Mik7XG4gIHJldHVybiB7IGxlZnQsIHRvcCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWRpdG9yKGluaXRpYWxUZXh0LCBvcHRpb25zID0ge30pIHtcbiAgY29uc3Qgd3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3cmFwLmlkID0gJ2VkaXRvci13cmFwJztcblxuICBjb25zdCBwcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcmUnKTtcbiAgcHJlLmlkID0gJ2VkaXRvci1obCc7XG4gIHByZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblxuICBjb25zdCB0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIHRhLmlkID0gJ2VkaXRvcic7XG4gIHRhLnNwZWxsY2hlY2sgPSBmYWxzZTtcbiAgdGEuYXV0b2NvbXBsZXRlID0gJ29mZic7XG4gIHRhLnZhbHVlID0gaW5pdGlhbFRleHQ7XG5cbiAgY29uc3QgdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpcC5pZCA9ICd2YXItdG9vbHRpcCc7XG4gIHRpcC5oaWRkZW4gPSB0cnVlO1xuICB0aXAuaW5uZXJIVE1MID0gJzxzdHJvbmc+PC9zdHJvbmc+PHNwYW4gY2xhc3M9XCJ0b29sdGlwLXJlc29sdmVkXCI+PC9zcGFuPic7XG4gIGNvbnN0IHRpcFRpdGxlID0gdGlwLnF1ZXJ5U2VsZWN0b3IoJ3N0cm9uZycpO1xuICBjb25zdCB0aXBCb2R5ID0gdGlwLnF1ZXJ5U2VsZWN0b3IoJy50b29sdGlwLXJlc29sdmVkJyk7XG4gIGNvbnN0IHRvb2x0aXBIYW5kbGVycyA9IFtcbiAgICBvcHRpb25zLnJlc29sdmVJbnN0cnVtZW50ICYmIHtcbiAgICAgIGF0dHI6ICdpbnN0cnVtZW50JyxcbiAgICAgIHJlc29sdmU6IG9wdGlvbnMucmVzb2x2ZUluc3RydW1lbnQsXG4gICAgICB0aXRsZTogdmFsdWUgPT4gYCMke3ZhbHVlfWAsXG4gICAgfSxcbiAgICBvcHRpb25zLnJlc29sdmVNb2RlICYmIHtcbiAgICAgIGF0dHI6ICdtb2RlJyxcbiAgICAgIHJlc29sdmU6IG9wdGlvbnMucmVzb2x2ZU1vZGUsXG4gICAgICB0aXRsZTogdmFsdWUgPT4gdmFsdWUsXG4gICAgfSxcbiAgICBvcHRpb25zLnJlc29sdmVTZWN0aW9uICYmIHtcbiAgICAgIGF0dHI6ICdzZWN0aW9uJyxcbiAgICAgIHJlc29sdmU6IG9wdGlvbnMucmVzb2x2ZVNlY3Rpb24sXG4gICAgICB0aXRsZTogdmFsdWUgPT4gYEAke3ZhbHVlfWAsXG4gICAgfSxcbiAgICBvcHRpb25zLnJlc29sdmVWYXIgJiYge1xuICAgICAgYXR0cjogJ3ZhcicsXG4gICAgICByZXNvbHZlOiBvcHRpb25zLnJlc29sdmVWYXIsXG4gICAgICB0aXRsZTogdmFsdWUgPT4gdmFsdWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBhdHRyOiAncGF0dGVybicsXG4gICAgICByZXNvbHZlOiAoKSA9PiAneCA9IGhpdCAgfCAgLSA9IGhvbGQgIHwgIF8gPSByZXN0ICB8ICBbIF0gPSBzdWJkaXZpZGUnLFxuICAgICAgdGl0bGU6ICgpID0+ICdSaHl0aG0gcGF0dGVybicsXG4gICAgfSxcbiAgXS5maWx0ZXIoQm9vbGVhbik7XG5cbiAgZnVuY3Rpb24gc3luYygpIHtcbiAgICBwcmUuaW5uZXJIVE1MID0gYCR7aGlnaGxpZ2h0KHRhLnZhbHVlKX1cXG5gO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZVRvb2x0aXAoKSB7XG4gICAgdGlwLmhpZGRlbiA9IHRydWU7XG4gIH1cblxuICB0YS5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgcHJlLnNjcm9sbFRvcCA9IHRhLnNjcm9sbFRvcDtcbiAgICBwcmUuc2Nyb2xsTGVmdCA9IHRhLnNjcm9sbExlZnQ7XG4gIH0pO1xuXG4gIHRhLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIHN5bmMoKTtcbiAgICBoaWRlVG9vbHRpcCgpO1xuICAgIGlmIChvcHRpb25zLm9uSW5wdXQpIG9wdGlvbnMub25JbnB1dCh0YS52YWx1ZSk7XG4gIH0pO1xuXG4gIHRhLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGUgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQoZS5jbGllbnRYLCBlLmNsaWVudFkpO1xuICAgIGNvbnN0IGZvdW5kID0gdG9vbHRpcEhhbmRsZXJzXG4gICAgICAubWFwKGhhbmRsZXIgPT4ge1xuICAgICAgICBjb25zdCBoaXQgPSBlbGVtZW50cy5maW5kKGVsID0+IGVsLmRhdGFzZXQgJiYgZWwuZGF0YXNldFtoYW5kbGVyLmF0dHJdKTtcbiAgICAgICAgcmV0dXJuIGhpdCA/IHsgaGFuZGxlciwgdmFsdWU6IGhpdC5kYXRhc2V0W2hhbmRsZXIuYXR0cl0gfSA6IG51bGw7XG4gICAgICB9KVxuICAgICAgLmZpbmQoQm9vbGVhbik7XG4gICAgaWYgKCFmb3VuZCkge1xuICAgICAgaGlkZVRvb2x0aXAoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdGV4dCA9IGZvdW5kLmhhbmRsZXIucmVzb2x2ZShmb3VuZC52YWx1ZSk7XG4gICAgaWYgKCF0ZXh0KSB7XG4gICAgICBoaWRlVG9vbHRpcCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwb3MgPSBjbGFtcFRvb2x0aXAoZS5jbGllbnRYLCBlLmNsaWVudFkpO1xuICAgIHRpcFRpdGxlLnRleHRDb250ZW50ID0gZm91bmQuaGFuZGxlci50aXRsZShmb3VuZC52YWx1ZSk7XG4gICAgdGlwQm9keS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgdGlwLnN0eWxlLmxlZnQgPSBgJHtwb3MubGVmdH1weGA7XG4gICAgdGlwLnN0eWxlLnRvcCA9IGAke3Bvcy50b3B9cHhgO1xuICAgIHRpcC5oaWRkZW4gPSBmYWxzZTtcbiAgfSk7XG5cbiAgdGEuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGhpZGVUb29sdGlwKTtcblxuICBzeW5jKCk7XG4gIHdyYXAuYXBwZW5kQ2hpbGQocHJlKTtcbiAgd3JhcC5hcHBlbmRDaGlsZCh0YSk7XG4gIHdyYXAuYXBwZW5kQ2hpbGQodGlwKTtcblxuICByZXR1cm4ge1xuICAgIGVsOiB3cmFwLFxuICAgIHRleHRhcmVhOiB0YSxcbiAgICBvbjogKGV2ZW50LCBmbikgPT4gdGEuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZm4pLFxuICAgIGdldFZhbHVlOiAoKSA9PiB0YS52YWx1ZSxcbiAgICBzZXRWYWx1ZTogdmFsdWUgPT4ge1xuICAgICAgdGEudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHN5bmMoKTtcbiAgICAgIGhpZGVUb29sdGlwKCk7XG4gICAgfSxcbiAgICBmb2N1czogKCkgPT4gdGEuZm9jdXMoKSxcbiAgfTtcbn1cbiIsICJmdW5jdGlvbiBjbGFtcCh2YWx1ZSkge1xuICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdmFsdWUpKTtcbn1cblxuZnVuY3Rpb24gc2hvcnROYW1lKG5hbWUpIHtcbiAgY29uc3QgcGFydHMgPSBTdHJpbmcobmFtZSB8fCAnJykuc3BsaXQoL1xccysvKS5maWx0ZXIoQm9vbGVhbik7XG4gIGlmICghcGFydHMubGVuZ3RoKSByZXR1cm4gJ3RyYWNrJztcbiAgcmV0dXJuIHBhcnRzLnNsaWNlKDAsIDIpLmpvaW4oJyAnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1peGVyKHBsYXllciwgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhc2lkZScpO1xuICByb290LmlkID0gJ21peGVyLXBhbmVsJztcbiAgcm9vdC5jbGFzc05hbWUgPSAnY29sbGFwc2VkJztcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ01peGVyJztcblxuICBjb25zdCBzdHJpcHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3RyaXBzLmlkID0gJ21peGVyLXN0cmlwcyc7XG4gIGNvbnN0IHRyYW5zcG9ydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0cmFuc3BvcnQuaWQgPSAnbWl4ZXItdHJhbnNwb3J0JztcblxuICBjb25zdCBmeCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmeC5pZCA9ICdtaXhlci1meCc7XG5cbiAgY29uc3QgaW5pdGlhbFRlbXBvID0gb3B0aW9ucy50ZW1wbyB8fCAxNDY7XG4gIGNvbnN0IGluaXRpYWxCYXJzID0gb3B0aW9ucy5iYXJzIHx8IDg7XG4gIGNvbnN0IGluaXRpYWxUcmFuc3Bvc2UgPSBvcHRpb25zLnRyYW5zcG9zZSB8fCAwO1xuXG4gIGNvbnN0IGJwbVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGJwbVJvdy5jbGFzc05hbWUgPSAndHJhbnNwb3J0LXJvdyc7XG4gIGJwbVJvdy50ZXh0Q29udGVudCA9ICdCUE0nO1xuICBjb25zdCBicG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBicG0udHlwZSA9ICdyYW5nZSc7XG4gIGJwbS5taW4gPSAnNjAnO1xuICBicG0ubWF4ID0gJzIwMCc7XG4gIGJwbS52YWx1ZSA9IFN0cmluZyhpbml0aWFsVGVtcG8pO1xuICBjb25zdCBicG1WYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGJwbVZhbC5jbGFzc05hbWUgPSAndHJhbnNwb3J0LXZhbCc7XG4gIGJwbVZhbC50ZXh0Q29udGVudCA9IFN0cmluZyhpbml0aWFsVGVtcG8pO1xuICBicG0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgYnBtVmFsLnRleHRDb250ZW50ID0gYnBtLnZhbHVlO1xuICAgIGlmIChvcHRpb25zLm9uQ2hhbmdlKSB7XG4gICAgICBvcHRpb25zLm9uQ2hhbmdlKHsgdGVtcG86IHBhcnNlSW50KGJwbS52YWx1ZSwgMTApIH0pO1xuICAgIH1cbiAgfSk7XG4gIGJwbVJvdy5hcHBlbmRDaGlsZChicG0pO1xuICBicG1Sb3cuYXBwZW5kQ2hpbGQoYnBtVmFsKTtcblxuICBjb25zdCBiYXJzUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgYmFyc1Jvdy5jbGFzc05hbWUgPSAndHJhbnNwb3J0LXJvdyc7XG4gIGJhcnNSb3cudGV4dENvbnRlbnQgPSAnQkFSUyc7XG4gIGNvbnN0IGJhcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgWzQsIDgsIDE2LCAzMl0uZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uLnZhbHVlID0gU3RyaW5nKHZhbHVlKTtcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBTdHJpbmcodmFsdWUpO1xuICAgIGlmICh2YWx1ZSA9PT0gaW5pdGlhbEJhcnMpIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgYmFycy5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9KTtcbiAgYmFycy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgaWYgKG9wdGlvbnMub25DaGFuZ2UpIHtcbiAgICAgIG9wdGlvbnMub25DaGFuZ2UoeyBiYXJzOiBwYXJzZUludChiYXJzLnZhbHVlLCAxMCkgfSk7XG4gICAgfVxuICB9KTtcbiAgYmFyc1Jvdy5hcHBlbmRDaGlsZChiYXJzKTtcblxuICBjb25zdCBrZXlSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBrZXlSb3cuY2xhc3NOYW1lID0gJ3RyYW5zcG9ydC1yb3cnO1xuICBrZXlSb3cudGV4dENvbnRlbnQgPSAnS0VZJztcbiAgY29uc3Qga2V5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAga2V5LnR5cGUgPSAncmFuZ2UnO1xuICBrZXkubWluID0gJy0xMic7XG4gIGtleS5tYXggPSAnMTInO1xuICBrZXkudmFsdWUgPSBTdHJpbmcoaW5pdGlhbFRyYW5zcG9zZSk7XG4gIGNvbnN0IGtleVZhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAga2V5VmFsLmNsYXNzTmFtZSA9ICd0cmFuc3BvcnQtdmFsJztcbiAga2V5VmFsLnRleHRDb250ZW50ID0gU3RyaW5nKGluaXRpYWxUcmFuc3Bvc2UgPiAwID8gYCske2luaXRpYWxUcmFuc3Bvc2V9YCA6IGluaXRpYWxUcmFuc3Bvc2UpO1xuICBrZXkuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBwYXJzZUludChrZXkudmFsdWUsIDEwKTtcbiAgICBrZXlWYWwudGV4dENvbnRlbnQgPSB2YWx1ZSA+IDAgPyBgKyR7dmFsdWV9YCA6IFN0cmluZyh2YWx1ZSk7XG4gICAgaWYgKG9wdGlvbnMub25DaGFuZ2UpIHtcbiAgICAgIG9wdGlvbnMub25DaGFuZ2UoeyB0cmFuc3Bvc2U6IHZhbHVlIH0pO1xuICAgIH1cbiAgfSk7XG4gIGtleVJvdy5hcHBlbmRDaGlsZChrZXkpO1xuICBrZXlSb3cuYXBwZW5kQ2hpbGQoa2V5VmFsKTtcblxuICB0cmFuc3BvcnQuYXBwZW5kQ2hpbGQoYnBtUm93KTtcbiAgdHJhbnNwb3J0LmFwcGVuZENoaWxkKGJhcnNSb3cpO1xuICB0cmFuc3BvcnQuYXBwZW5kQ2hpbGQoa2V5Um93KTtcblxuICBjb25zdCBkZWxheUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgZGVsYXlMYWJlbC50ZXh0Q29udGVudCA9ICdEZWxheSBUaW1lJztcbiAgY29uc3QgZGVsYXlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgW1xuICAgIFsnMS80JywgMSAvIDRdLFxuICAgIFsnMy84JywgMyAvIDhdLFxuICAgIFsnMS8yJywgMSAvIDJdLFxuICAgIFsnMy80JywgMyAvIDRdLFxuICBdLmZvckVhY2goKFtsYWJlbCwgdmFsdWVdKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gbGFiZWw7XG4gICAgb3B0aW9uLnZhbHVlID0gU3RyaW5nKHZhbHVlKTtcbiAgICBpZiAodmFsdWUgPT09IHBsYXllci5kZWxheURpdmlzaW9uKSBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIGRlbGF5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIH0pO1xuICBkZWxheVNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgcGxheWVyLnNldERlbGF5VGltZShwYXJzZUZsb2F0KGRlbGF5U2VsZWN0LnZhbHVlKSk7XG4gIH0pO1xuICBkZWxheUxhYmVsLmFwcGVuZENoaWxkKGRlbGF5U2VsZWN0KTtcblxuICBjb25zdCBmZWVkYmFja0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgZmVlZGJhY2tMYWJlbC50ZXh0Q29udGVudCA9ICdGZWVkYmFjayc7XG4gIGNvbnN0IGZlZWRiYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZmVlZGJhY2sudHlwZSA9ICdyYW5nZSc7XG4gIGZlZWRiYWNrLm1pbiA9ICcwJztcbiAgZmVlZGJhY2subWF4ID0gJzc1JztcbiAgZmVlZGJhY2sudmFsdWUgPSAnMzUnO1xuICBmZWVkYmFjay5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICBwbGF5ZXIuc2V0RGVsYXlGZWVkYmFjayhwYXJzZUludChmZWVkYmFjay52YWx1ZSwgMTApIC8gMTAwKTtcbiAgfSk7XG4gIGZlZWRiYWNrTGFiZWwuYXBwZW5kQ2hpbGQoZmVlZGJhY2spO1xuXG4gIGZ4LmFwcGVuZENoaWxkKGRlbGF5TGFiZWwpO1xuICBmeC5hcHBlbmRDaGlsZChmZWVkYmFja0xhYmVsKTtcblxuICByb290LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgcm9vdC5hcHBlbmRDaGlsZCh0cmFuc3BvcnQpO1xuICByb290LmFwcGVuZENoaWxkKHN0cmlwcyk7XG4gIHJvb3QuYXBwZW5kQ2hpbGQoZngpO1xuXG4gIGNvbnN0IHN0cmlwTWFwID0gbmV3IE1hcCgpO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmlwKGtleSwgbGFiZWwpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHBsYXllci5nZXRUcmFja1N0YXRlKGtleSk7XG4gICAgY29uc3Qgc3RyaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdHJpcC5jbGFzc05hbWUgPSAnbS1zdHJpcCc7XG4gICAgc3RyaXAuZGF0YXNldC5rZXkgPSBrZXk7XG5cbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmFtZS5jbGFzc05hbWUgPSAnbS1uYW1lJztcbiAgICBuYW1lLnRleHRDb250ZW50ID0gc2hvcnROYW1lKGxhYmVsKTtcbiAgICBuYW1lLnRpdGxlID0gbGFiZWw7XG5cbiAgICBjb25zdCB2dSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZ1LmNsYXNzTmFtZSA9ICdtLXZ1JztcblxuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvdy5jbGFzc05hbWUgPSAnbS1yb3cnO1xuXG4gICAgY29uc3Qgc29sbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHNvbG8uY2xhc3NOYW1lID0gJ20tYnRuJztcbiAgICBzb2xvLnRleHRDb250ZW50ID0gJ1MnO1xuICAgIGNvbnN0IG11dGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtdXRlLmNsYXNzTmFtZSA9ICdtLWJ0bic7XG4gICAgbXV0ZS50ZXh0Q29udGVudCA9ICdNJztcblxuICAgIGNvbnN0IHZvbHVtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdm9sdW1lLnR5cGUgPSAncmFuZ2UnO1xuICAgIHZvbHVtZS5jbGFzc05hbWUgPSAnbS1zbGlkZXInO1xuICAgIHZvbHVtZS5taW4gPSAnMCc7XG4gICAgdm9sdW1lLm1heCA9ICcxMDAnO1xuICAgIHZvbHVtZS52YWx1ZSA9IFN0cmluZyhNYXRoLnJvdW5kKHN0YXRlLnZvbHVtZSAqIDEwMCkpO1xuXG4gICAgY29uc3QgcmV2ZXJiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICByZXZlcmIudHlwZSA9ICdyYW5nZSc7XG4gICAgcmV2ZXJiLmNsYXNzTmFtZSA9ICdtLXNlbmQnO1xuICAgIHJldmVyYi5taW4gPSAnMCc7XG4gICAgcmV2ZXJiLm1heCA9ICcxMDAnO1xuICAgIHJldmVyYi52YWx1ZSA9IFN0cmluZyhNYXRoLnJvdW5kKHN0YXRlLnJldmVyYlNlbmQgKiAxMDApKTtcblxuICAgIGNvbnN0IGRlbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkZWxheS50eXBlID0gJ3JhbmdlJztcbiAgICBkZWxheS5jbGFzc05hbWUgPSAnbS1zZW5kJztcbiAgICBkZWxheS5taW4gPSAnMCc7XG4gICAgZGVsYXkubWF4ID0gJzEwMCc7XG4gICAgZGVsYXkudmFsdWUgPSBTdHJpbmcoTWF0aC5yb3VuZChzdGF0ZS5kZWxheVNlbmQgKiAxMDApKTtcblxuICAgIGNvbnN0IHNlbmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VuZHMuY2xhc3NOYW1lID0gJ20tc2VuZHMnO1xuICAgIGNvbnN0IHJXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICByV3JhcC50ZXh0Q29udGVudCA9ICdSZXYnO1xuICAgIHJXcmFwLmFwcGVuZENoaWxkKHJldmVyYik7XG4gICAgY29uc3QgZFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRXcmFwLnRleHRDb250ZW50ID0gJ0RseSc7XG4gICAgZFdyYXAuYXBwZW5kQ2hpbGQoZGVsYXkpO1xuICAgIHNlbmRzLmFwcGVuZENoaWxkKHJXcmFwKTtcbiAgICBzZW5kcy5hcHBlbmRDaGlsZChkV3JhcCk7XG5cbiAgICBmdW5jdGlvbiBzeW5jQnV0dG9ucygpIHtcbiAgICAgIGNvbnN0IGN1ciA9IHBsYXllci5nZXRUcmFja1N0YXRlKGtleSk7XG4gICAgICBzb2xvLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIGN1ci5zb2xvKTtcbiAgICAgIG11dGUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJywgY3VyLm11dGVkKTtcbiAgICB9XG5cbiAgICBzb2xvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgY3VyID0gcGxheWVyLmdldFRyYWNrU3RhdGUoa2V5KTtcbiAgICAgIHBsYXllci5zZXRTb2xvKGtleSwgIWN1ci5zb2xvKTtcbiAgICAgIHN5bmNCdXR0b25zKCk7XG4gICAgfSk7XG4gICAgbXV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGN1ciA9IHBsYXllci5nZXRUcmFja1N0YXRlKGtleSk7XG4gICAgICBwbGF5ZXIuc2V0TXV0ZShrZXksICFjdXIubXV0ZWQpO1xuICAgICAgc3luY0J1dHRvbnMoKTtcbiAgICB9KTtcbiAgICB2b2x1bWUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICBwbGF5ZXIuc2V0Vm9sdW1lKGtleSwgY2xhbXAocGFyc2VJbnQodm9sdW1lLnZhbHVlLCAxMCkgLyAxMDApKTtcbiAgICB9KTtcbiAgICByZXZlcmIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICBwbGF5ZXIuc2V0UmV2ZXJiU2VuZChrZXksIGNsYW1wKHBhcnNlSW50KHJldmVyYi52YWx1ZSwgMTApIC8gMTAwKSk7XG4gICAgfSk7XG4gICAgZGVsYXkuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICBwbGF5ZXIuc2V0RGVsYXlTZW5kKGtleSwgY2xhbXAocGFyc2VJbnQoZGVsYXkudmFsdWUsIDEwKSAvIDEwMCkpO1xuICAgIH0pO1xuXG4gICAgcm93LmFwcGVuZENoaWxkKHNvbG8pO1xuICAgIHJvdy5hcHBlbmRDaGlsZChtdXRlKTtcbiAgICByb3cuYXBwZW5kQ2hpbGQodm9sdW1lKTtcblxuICAgIHN0cmlwLmFwcGVuZENoaWxkKG5hbWUpO1xuICAgIHN0cmlwLmFwcGVuZENoaWxkKHZ1KTtcbiAgICBzdHJpcC5hcHBlbmRDaGlsZChyb3cpO1xuICAgIHN0cmlwLmFwcGVuZENoaWxkKHNlbmRzKTtcbiAgICBzdHJpcHMuYXBwZW5kQ2hpbGQoc3RyaXApO1xuXG4gICAgc3luY0J1dHRvbnMoKTtcbiAgICByZXR1cm4geyBlbDogc3RyaXAsIHZ1LCBuYW1lLCBzeW5jQnV0dG9ucyB9O1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlKGRhdGEpIHtcbiAgICBjb25zdCBlbnRyaWVzID0gQXJyYXkuaXNBcnJheShkYXRhKVxuICAgICAgPyBkYXRhLm1hcCh0cmFjayA9PiAoeyBrZXk6IGAke3RyYWNrWzBdfS8ke3RyYWNrWzFdfWAsIG5hbWU6IHRyYWNrWzFdIH0pKVxuICAgICAgOiBbXTtcbiAgICBjb25zdCBuZXh0S2V5cyA9IG5ldyBTZXQoZW50cmllcy5tYXAoaXRlbSA9PiBpdGVtLmtleSkpO1xuXG4gICAgc3RyaXBNYXAuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgaWYgKCFuZXh0S2V5cy5oYXMoa2V5KSkge1xuICAgICAgICB2YWx1ZS5lbC5yZW1vdmUoKTtcbiAgICAgICAgc3RyaXBNYXAuZGVsZXRlKGtleSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBlbnRyaWVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAoIXN0cmlwTWFwLmhhcyhpdGVtLmtleSkpIHtcbiAgICAgICAgc3RyaXBNYXAuc2V0KGl0ZW0ua2V5LCBjcmVhdGVTdHJpcChpdGVtLmtleSwgaXRlbS5uYW1lKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzdHJpcCA9IHN0cmlwTWFwLmdldChpdGVtLmtleSk7XG4gICAgICAgIHN0cmlwLm5hbWUudGV4dENvbnRlbnQgPSBzaG9ydE5hbWUoaXRlbS5uYW1lKTtcbiAgICAgICAgc3RyaXAubmFtZS50aXRsZSA9IGl0ZW0ubmFtZTtcbiAgICAgICAgc3RyaXAuc3luY0J1dHRvbnMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsYXNoVlUoa2V5KSB7XG4gICAgY29uc3Qgc3RyaXAgPSBzdHJpcE1hcC5nZXQoa2V5KTtcbiAgICBpZiAoIXN0cmlwKSByZXR1cm47XG4gICAgc3RyaXAudnUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzdHJpcC52dS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSwgODApO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlKGZvcmNlT3Blbikge1xuICAgIGNvbnN0IG9wZW4gPSB0eXBlb2YgZm9yY2VPcGVuID09PSAnYm9vbGVhbicgPyBmb3JjZU9wZW4gOiByb290LmNsYXNzTGlzdC5jb250YWlucygnY29sbGFwc2VkJyk7XG4gICAgcm9vdC5jbGFzc0xpc3QudG9nZ2xlKCdjb2xsYXBzZWQnLCAhb3Blbik7XG4gICAgcmV0dXJuIG9wZW47XG4gIH1cblxuICBmdW5jdGlvbiBzeW5jVHJhbnNwb3J0KG5leHQgPSB7fSkge1xuICAgIGlmICh0eXBlb2YgbmV4dC50ZW1wbyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGJwbS52YWx1ZSA9IFN0cmluZyhuZXh0LnRlbXBvKTtcbiAgICAgIGJwbVZhbC50ZXh0Q29udGVudCA9IFN0cmluZyhuZXh0LnRlbXBvKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBuZXh0LmJhcnMgPT09ICdudW1iZXInKSB7XG4gICAgICBiYXJzLnZhbHVlID0gU3RyaW5nKG5leHQuYmFycyk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbmV4dC50cmFuc3Bvc2UgPT09ICdudW1iZXInKSB7XG4gICAgICBrZXkudmFsdWUgPSBTdHJpbmcobmV4dC50cmFuc3Bvc2UpO1xuICAgICAga2V5VmFsLnRleHRDb250ZW50ID0gbmV4dC50cmFuc3Bvc2UgPiAwID8gYCske25leHQudHJhbnNwb3NlfWAgOiBTdHJpbmcobmV4dC50cmFuc3Bvc2UpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IGVsOiByb290LCB1cGRhdGUsIGZsYXNoVlUsIHRvZ2dsZSwgc3luY1RyYW5zcG9ydCB9O1xufVxuIiwgImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9jb21wb25lbnRzL3BsYXllci5qcyc7XG5pbXBvcnQgeyBwYXJzZSwgbWVyZ2UgfSBmcm9tICcuL2xpYic7XG5pbXBvcnQgeyByZWR1Y2UgfSBmcm9tICcuL2xpYi9wYXJzZXIuanMnO1xuaW1wb3J0IHsgY3JlYXRlRWRpdG9yIH0gZnJvbSAnLi9jb21wb25lbnRzL2VkaXRvci5qcyc7XG5pbXBvcnQgeyBjcmVhdGVNaXhlciB9IGZyb20gJy4vY29tcG9uZW50cy9taXhlci5qcyc7XG5cbmxldCB0ZW1wbyA9IDE0NjtcbmxldCBiYXJzID0gODtcbmxldCB0cmFuc3Bvc2UgPSAwO1xubGV0IHBsYXlpbmcgPSBmYWxzZTtcbmxldCBkZWJvdW5jZVRpbWVyID0gbnVsbDtcbmxldCBzdGF0dXNSZXNldFRpbWVyID0gbnVsbDtcbmxldCBlZGl0b3JBcGkgPSBudWxsO1xubGV0IG1peGVyQXBpID0gbnVsbDtcbmxldCBsYXN0Q29udGV4dCA9IG51bGw7XG5cbmNvbnN0IHAgPSB3aW5kb3cucCB8fCBuZXcgUGxheWVyKCk7XG53aW5kb3cucCA9IHA7XG5cbmNvbnN0IFNUT1JBR0VfS0VZID0gJ3Njb29wczpkcmFmdCc7XG5cbmNvbnN0IEJJTExZX0pFQU4gPSBgXG4gICVGIGEzfGMjNHxmIzRcbiAgJUcgYjN8ZCM0fGcjNFxuICAlQSBjIzR8ZTR8YTRcbiAgJUUgYjN8ZDR8ZiM0XG4gICVDIGQzfGYjNHxhNCA7IGhvdyB0byBzdW0gbm90ZXMgdG8gY2hvcmRzP1xuICAlQiBjIzR8ZjR8ZyMzfGI0XG5cbiAgIyBzeW50aFxuICAgIEBJTlRST1xuICAgICAgIzUxOCAgICAgIC0tLS0gLS0tLSAtLS0tIC0tLS0gLS0tLSAtLS0tIC0tLS0gLS0tLVxuICAgIEBOIDwgSU5UUk9cbiAgICBAQVxuICAgICAgIzUxOCA3NSAgIHgtLS0gLS14LSAtLS0tIC0tLS0geC0tLSAtLXgtIC0tLS0gLS0tLSAlRiAlRyAlQSAlR1xuICAgIEBCIDwgQVxuICAgICAgIzUxOCAgICAgICVFICUgJSAlXG4gICAgQEMgPCBBXG4gICAgICAjNTE4ICAgICAgJUMgJSAlRiAlXG4gICAgQEQgPCBBXG4gICAgICAjNTE4ICAgICAgJUMgJSAlQiAlXG5cbiAgIyMgYmFzc1xuICAgICVjIGYjMiBjIzIgZTIgZiMyIGUyIGMjMiBiMSBjIzJcbiAgICAlZCBiMiBhMiBiMiBkMyBkMyBiMiBhMiA7IGhvdyB0byB0cmFuc3Bvc2U/XG4gICAgQElOVFJPXG4gICAgICAjMzkzICAgICAgLS0tLSAtLS0tIC0tLS0gLS0tLSAtLS0tIC0tLS0gLS0tLSAtLS0tXG4gICAgQEFcbiAgICAgICMzOTMgIDExMiB4LXgtIHgteC0geC14LSB4LXgtIHgteC0geC14LSB4LXgtIHgteC0gJWMgJVxuICAgIEBOIDwgQVxuICAgIEBCXG4gICAgICAjMzkzICAgICAgeC14LSB4LXgtIC0teC0geC14LSB4LXgtIHgteC0gLS14LSB4LXgtICVkICVcbiAgICBAQyA8IElOVFJPXG4gICAgQEQgPCBJTlRST1xuXG4gICMjIGRydW1zXG4gICAgQElOVFJPXG4gICAgICAjMjEyMyAgICAgLS0tLSAtLS0tIC0tLS0gLS0tLSAtLS0tIC0tLS0gLS0tLSAtLS0tXG4gICAgICAjMjA4MSA1MCAgeC14LSB4LXgtIHgteC0geC14LSB4LXgtIHgteC0geC14LSB4LXgtXG4gICAgICAjMjAyOCAgICAgLS0tLSB4LS0tIC0tLS0geC0tLSAtLS0tIHgtLS0gLS0tLSB4LS0tXG4gICAgICAjMjAwMSAgICAgeC0tLSAtLS0tIHgtLS0gLS0tLSB4LS0tIC0tLS0geC0tLSAtLS0tXG4gICAgQEEgPCBJTlRST1xuICAgICAgIzIxMjMgOTAgIHgtLS0geC0tLSB4LS0tIHgtLS0geC0tLSB4LS0tIHgtLS0geC0tLVxuICAgICAgIzIxMjMgNzAgIC0teC0gLS14LSAtLXgtIC0teC0gLS14LSAtLXgtIC0teC0gLS14LVxuICAgIEBOIDwgQVxuICAgIEBCIDwgQVxuICAgIEBDIDwgQVxuICAgIEBEIDwgQVxuXG4gID4gSU5UUk8gTiAqMiBBICVcbiAgPiBBICUgQiBBIEIgQVxuICA+IEEgJSBCIEEgQyAqMyBEXG4gID4gQSAlIEIgQSBCIEFcbiAgPiBBICUgQiBBIEIgQVxuICA+IEEgJSBCIEEgQyAqMyBEXG4gID4gQSAlIEIgQSBCIEFcbmA7XG5cbmNvbnN0IFRFVFJJUyA9IGBcbiVhIEU0IEIzIEM0IEQ0IEM0IEIzIEEzXG4lYiBBMyBDNCBFNCBENCBDNCBCM1xuJWMgQjMgQzQgRDQgRTQgQzQgQTMgQTNcblxuJWQgRDQgRjQgQTQgRzQgRjQgRTRcbiVlIEU0IEM0IEU0IEQ0IEM0IEIzXG5cbiVmIEU0IEM0IEQ0IEIzIEM0IEEzIEFiMyBCM1xuJWcgRTQgQzQgRDQgQjMgQzQgRTQgQTMgQWIzXG5cbiMgcGlhbm9cbiAgQEFcbiAgICAjMyB4LXh4IHgteHggeC14eCB4LXh4IHgteHggeC14LSB4LXgtIHgtLS0gJWEgJWIgJWNcbiAgQEJcbiAgICAjMyAteC14IHgteHggeC14eCB4LXh4IHgteHggeC14LSB4LXgtIHgtLS0gJWQgJWUgJWNcbiAgQENcbiAgICAjMyB4LS0tIHgtLS0geC0tLSB4LS0tIHgtLS0geC0tLSB4LS0tIHgtLS0gJWZcbiAgQEQgPCBDXG4gICAgIzMgJWdcblxuJXggRTIgRTIgQTIgQTIgQWIyIEUyIEEyXG4leSBEMiBEMiBDMiBDMiBFMiBFMiBBMlxuJXogQTIgQTIgQWIyIEFiMiBBMiBBMiBBYjNcbiV6XyBBMiBBMiBBYjIgQWIyIEEyIEEyIEE0IEFiNFxuXG4jIGJhc3NcbiAgQEFcbiAgICAjMiB4LS0tIHgtLS0geC0tLSB4LS0tIHgtLS0geC0tLSB4LS0tIC0tLS0gJXhcbiAgQEIgPCBBXG4gICAgIzIgJXlcbiAgQEMgPCBBXG4gICAgIzIgJXpcbiAgQERcbiAgICAjMiB4LS0tIHgtLS0geC0tLSB4LS0tIHgtLS0geC14LSB4LS0tIC0tLS0gJXpfXG5cbj4gQSBCIEEgQiBDIERcbmAudHJpbSgpO1xuXG5jb25zdCBQTEFZR1JPVU5EID0gYFxuJWEgQzQgcGhyeWdpYW4uLiArKyBJIEkgSUlJIElWXG5cbiMgc2NhbGVzXG4gIEBBXG4gICAgIzMgMTAwIC14LXggLXgteCAteC14IC14LXggJWEgJWFcblxuIyMgZHJ1bXNcbiAgQEFcbiAgICAjMCAxMjAgW3h4XS1beHhdLSBbeHhdLVt4eF0tIGQjMVxuICAgICMwIDExMCAteC14IC14LXggZDJcbiAgICAjMCAxMDAgW3h4XVt4eF1beHhdW3h4XSBbeHhdW3h4XVt4eF1beHhdIGYjMlxuXG4+IEEgKjRcbmAudHJpbSgpO1xuXG5jb25zdCBMT0NLUyA9IGBcbiVDbSBjNHxlYjR8ZzQgJVxuJUZtIGM0fGY0fGcjNCAlXG5cbiMgZHJ1bXNcbiAgQEFcbiAgICAjMCAxMjcgeHh4eHh4eHh4eHhbeHhdeHh4eCBbeHhdeHh4eHh4eHh4eHh4eHh4IGYjMlxuICAgICMwIDEyNyAtLXgtLS14LS0teC14LXhbeHhdIC0teC0tLXgtLS14LS1bLXhdeC0gYyMyXG4gICAgIzAgOTAgIC0tLS0tLS0tLS0tLS0tLS14X19fLS0tLS0tLS0tLS0tIGEzXG4gICAgIzAgMTIwIC0tW3h4XS0tLVt4eF0tLS1beHhdLS0tW3h4XS0gZCMxXG5cbiMjIHNrYW5raW5nXG4gIEBBXG4gICAgIzEgMTAwIC14LXgteC14LXgteC14LXggJUNtICVGbVxuXG4+IEEgKjRcbmAudHJpbSgpO1xuXG5jb25zdCBQUkVTRVRTID0ge1xuICB0ZXRyaXM6IFRFVFJJUyxcbiAgYmlsbHlfamVhbjogQklMTFlfSkVBTixcbiAgcGxheWdyb3VuZDogUExBWUdST1VORCxcbiAgbG9ja3M6IExPQ0tTLFxufTtcblxuY29uc3QgUFJFU0VUX0xBQkVMUyA9IHtcbiAgdGV0cmlzOiAnVGV0cmlzJyxcbiAgYmlsbHlfamVhbjogJ0JpbGx5IEplYW4nLFxuICBwbGF5Z3JvdW5kOiAnUGxheWdyb3VuZCcsXG4gIGxvY2tzOiAnTG9ja3MnLFxufTtcblxuY29uc3QgU0NBTEVfSU5GTyA9IHtcbiAgbWFqb3I6ICdXIFcgSCBXIFcgVyBIICAtICBkbyByZSBtaSBmYSBzb2wgbGEgdGknLFxuICBtaW5vcjogJ1cgSCBXIFcgSCBXIFcgIC0gIGRvIHJlIG1pYiBmYSBzb2wgbGFiIHNpYicsXG4gIGRvcmlhbjogJ1cgSCBXIFcgVyBIIFcgIC0gIG1pbm9yIHdpdGggcmFpc2VkIDZ0aCcsXG4gIHBocnlnaWFuOiAnSCBXIFcgVyBIIFcgVyAgLSAgbWlub3Igd2l0aCBsb3dlcmVkIDJuZCcsXG4gIGx5ZGlhbjogJ1cgVyBXIEggVyBXIEggIC0gIG1ham9yIHdpdGggcmFpc2VkIDR0aCcsXG4gIG1peG9seWRpYW46ICdXIFcgSCBXIFcgSCBXICAtICBtYWpvciB3aXRoIGxvd2VyZWQgN3RoJyxcbiAgbG9jcmlhbjogJ0ggVyBXIEggVyBXIFcgIC0gIGRpbWluaXNoZWQgZmxhdm9yJyxcbn07XG5cbmZ1bmN0aW9uIGJ1aWxkKG1pZGkpIHtcbiAgY29uc3QgbWl4ID0gW107XG5cbiAgZnVuY3Rpb24gZ2V0KG50aCwgbmFtZSkge1xuICAgIGNvbnN0IGtleSA9IG50aCArIG5hbWU7XG5cbiAgICBpZiAoIWdldFtrZXldKSB7XG4gICAgICBjb25zdCB0cmFjayA9IFtudGgsIG5hbWUsIFtdXTtcbiAgICAgIG1peC5wdXNoKHRyYWNrKTtcbiAgICAgIGdldFtrZXldID0geyB0cmFjayB9O1xuICAgIH1cbiAgICByZXR1cm4gZ2V0W2tleV07XG4gIH1cblxuICBtaWRpLmZvckVhY2goc2VjdGlvbiA9PiB7XG4gICAgc2VjdGlvbi5mb3JFYWNoKHBhcnRzID0+IHtcbiAgICAgIHBhcnRzLmZvckVhY2goZSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdHJhY2sgfSA9IGdldChlWzBdLCBlWzFdKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlWzJdLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgdHJhY2tbMl0ucHVzaChlWzJdW2ldKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gbWl4O1xufVxuXG5mdW5jdGlvbiBnZXREYXRhKGlucHV0KSB7XG4gIHRyeSB7XG4gICAgbGFzdENvbnRleHQgPSBwYXJzZShpbnB1dCk7XG4gICAgcmV0dXJuIGJ1aWxkKG1lcmdlKGxhc3RDb250ZXh0KSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBsYXN0Q29udGV4dCA9IG51bGw7XG4gICAgY29uc29sZS5lcnJvcignUGFyc2UgZXJyb3I6JywgZSk7XG4gICAgc2hvd0Vycm9yKGUubWVzc2FnZSB8fCAnUGFyc2UgZXJyb3InKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVZhclRvb2x0aXAobmFtZSkge1xuICBpZiAoIWxhc3RDb250ZXh0IHx8ICFsYXN0Q29udGV4dC5kYXRhIHx8ICFsYXN0Q29udGV4dC5kYXRhW25hbWVdKSByZXR1cm4gbnVsbDtcbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gcmVkdWNlKGxhc3RDb250ZXh0LmRhdGFbbmFtZV0sIGxhc3RDb250ZXh0LmRhdGEpO1xuICAgIGNvbnN0IG91dCA9IEFycmF5LmlzQXJyYXkoZGF0YSkgPyBkYXRhLmZsYXQoSW5maW5pdHkpIDogW2RhdGFdO1xuICAgIGNvbnN0IHNob3duID0gb3V0LnNsaWNlKDAsIDE2KS5tYXAoaXRlbSA9PiAoXG4gICAgICBBcnJheS5pc0FycmF5KGl0ZW0pID8gaXRlbS5qb2luKCd8JykgOiBTdHJpbmcoaXRlbSlcbiAgICApKTtcbiAgICByZXR1cm4gc2hvd24uam9pbignICAnKSArIChvdXQubGVuZ3RoID4gc2hvd24ubGVuZ3RoID8gJyBcdTIwMjYnIDogJycpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUluc3RydW1lbnRUb29sdGlwKHZhbHVlKSB7XG4gIGNvbnN0IG4gPSBwYXJzZUludCh2YWx1ZSwgMTApO1xuICBpZiAoTnVtYmVyLmlzTmFOKG4pKSByZXR1cm4gbnVsbDtcbiAgdHJ5IHtcbiAgICBjb25zdCBpbmZvID0gbiA+PSAyMDAwXG4gICAgICA/IHAucGxheWVyLmxvYWRlci5kcnVtSW5mbyhuIC0gMjAwMClcbiAgICAgIDogcC5wbGF5ZXIubG9hZGVyLmluc3RydW1lbnRJbmZvKG4pO1xuICAgIHJldHVybiBpbmZvICYmIGluZm8udGl0bGUgPyBpbmZvLnRpdGxlIDogbnVsbDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVNb2RlVG9vbHRpcChuYW1lKSB7XG4gIGlmICghbmFtZSkgcmV0dXJuIG51bGw7XG4gIHJldHVybiBTQ0FMRV9JTkZPW25hbWUudG9Mb3dlckNhc2UoKV0gfHwgbnVsbDtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVNlY3Rpb25Ub29sdGlwKG5hbWUpIHtcbiAgaWYgKCFlZGl0b3JBcGkpIHJldHVybiBudWxsO1xuICBjb25zdCBsaW5lcyA9IGVkaXRvckFwaS5nZXRWYWx1ZSgpLnNwbGl0KCdcXG4nKTtcbiAgY29uc3Qgc2VjdGlvbkhlYWRlciA9IGBAJHtuYW1lfWA7XG4gIGNvbnN0IHN0YXJ0ID0gbGluZXMuZmluZEluZGV4KGxpbmUgPT4gbGluZS50cmltKCkgPT09IHNlY3Rpb25IZWFkZXIpO1xuICBpZiAoc3RhcnQgPCAwKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCBwcmV2aWV3ID0gW107XG4gIGZvciAobGV0IGkgPSBzdGFydCArIDE7IGkgPCBsaW5lcy5sZW5ndGggJiYgcHJldmlldy5sZW5ndGggPCA0OyBpICs9IDEpIHtcbiAgICBjb25zdCBsaW5lID0gbGluZXNbaV07XG4gICAgaWYgKC9eXFxzKkAvLnRlc3QobGluZSkpIGJyZWFrO1xuICAgIGlmIChsaW5lLnRyaW0oKSkgcHJldmlldy5wdXNoKGxpbmUudHJpbSgpKTtcbiAgfVxuICByZXR1cm4gcHJldmlldy5sZW5ndGggPyBwcmV2aWV3LmpvaW4oJyB8ICcpIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gc2hvd0Vycm9yKG1zZykge1xuICBjbGVhclRpbWVvdXQoc3RhdHVzUmVzZXRUaW1lcik7XG4gIGNvbnN0IHN0YXR1c0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXR1cy1tZXNzYWdlJyk7XG4gIGNvbnN0IHN0YXR1c2JhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0dXNiYXInKTtcbiAgaWYgKHN0YXR1c0VsKSB7XG4gICAgc3RhdHVzRWwudGV4dENvbnRlbnQgPSBgRXJyb3I6ICR7bXNnfWA7XG4gIH1cbiAgaWYgKHN0YXR1c2Jhcikge1xuICAgIHN0YXR1c2Jhci5kYXRhc2V0LnN0YXRlID0gJ2Vycm9yJztcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93U3RhdHVzKG1zZywgc3RhdGUgPSAncmVhZHknKSB7XG4gIGNsZWFyVGltZW91dChzdGF0dXNSZXNldFRpbWVyKTtcbiAgY29uc3Qgc3RhdHVzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdHVzLW1lc3NhZ2UnKTtcbiAgY29uc3Qgc3RhdHVzYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXR1c2JhcicpO1xuICBpZiAoc3RhdHVzRWwpIHtcbiAgICBzdGF0dXNFbC50ZXh0Q29udGVudCA9IG1zZztcbiAgfVxuICBpZiAoc3RhdHVzYmFyKSB7XG4gICAgc3RhdHVzYmFyLmRhdGFzZXQuc3RhdGUgPSBzdGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRSZWFkeVN0YXR1cygpIHtcbiAgc2hvd1N0YXR1cygnUmVhZHknLCAncmVhZHknKTtcbn1cblxuZnVuY3Rpb24gbWFya0RpcnR5KCkge1xuICBzaG93U3RhdHVzKCdVbnNhdmVkIGNoYW5nZXMnLCAnd2FybmluZycpO1xufVxuXG5mdW5jdGlvbiBzYXZlU3VjY2VzcygpIHtcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgaGggPSBTdHJpbmcobm93LmdldEhvdXJzKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gIGNvbnN0IG1tID0gU3RyaW5nKG5vdy5nZXRNaW51dGVzKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gIHNob3dTdGF0dXMoYFNhdmVkICR7aGh9OiR7bW19YCwgJ3JlYWR5Jyk7XG59XG5cbmZ1bmN0aW9uIHNldFF1ZXJ5TG9hZChuYW1lKSB7XG4gIGNvbnN0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICBpZiAobmFtZSkge1xuICAgIHVybC5zZWFyY2hQYXJhbXMuc2V0KCdsb2FkJywgbmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgdXJsLnNlYXJjaFBhcmFtcy5kZWxldGUoJ2xvYWQnKTtcbiAgfVxuICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sICcnLCB1cmwudG9TdHJpbmcoKSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVBsYXlCdXR0b24oKSB7XG4gIGNvbnN0IHBsYXlCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheS1idG4nKTtcbiAgaWYgKHBsYXlCdG4pIHBsYXlCdG4udGV4dENvbnRlbnQgPSBwbGF5aW5nID8gJ1x1MjVCNiBQbGF5aW5nLi4uJyA6ICdcdTI1QjYgUGxheSc7XG59XG5cbmZ1bmN0aW9uIGxvYWRQcmVzZXRCeU5hbWUobmFtZSkge1xuICBjb25zdCBwcmVzZXQgPSBQUkVTRVRTW25hbWVdO1xuICBpZiAoIWVkaXRvckFwaSB8fCAhcHJlc2V0KSByZXR1cm47XG5cbiAgZWRpdG9yQXBpLnNldFZhbHVlKHByZXNldC50cmltKCkpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTVE9SQUdFX0tFWSwgZWRpdG9yQXBpLmdldFZhbHVlKCkpO1xuICBzZXRRdWVyeUxvYWQobmFtZSk7XG4gIHNob3dTdGF0dXMoYExvYWRlZCBwcmVzZXQ6ICR7UFJFU0VUX0xBQkVMU1tuYW1lXSB8fCBuYW1lfWAsICdyZWFkeScpO1xuICB1cGRhdGVMb29wKCk7XG4gIGVkaXRvckFwaS5mb2N1cygpO1xufVxuXG5mdW5jdGlvbiBzeW5jTWl4ZXIoZGF0YSkge1xuICBpZiAoIW1peGVyQXBpKSByZXR1cm47XG4gIG1peGVyQXBpLnVwZGF0ZShkYXRhKTtcbn1cblxuZnVuY3Rpb24gYmluZEdsb2JhbFNob3J0Y3V0cygpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IGVkaXRpbmdGaWVsZCA9IHRhcmdldCAmJiAoXG4gICAgICB0YXJnZXQudGFnTmFtZSA9PT0gJ1RFWFRBUkVBJ1xuICAgICAgfHwgdGFyZ2V0LnRhZ05hbWUgPT09ICdJTlBVVCdcbiAgICAgIHx8IHRhcmdldC50YWdOYW1lID09PSAnU0VMRUNUJ1xuICAgICk7XG5cbiAgICBpZiAoZS5jb2RlID09PSAnU3BhY2UnICYmICFlZGl0aW5nRmllbGQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChwbGF5aW5nKSBzdG9wKCk7XG4gICAgICBlbHNlIHBsYXkoKTtcbiAgICB9XG4gICAgaWYgKGUuY29kZSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgIHN0b3AoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVET00oaW5pdGlhbFRleHQsIGluaXRpYWxQcmVzZXQpIHtcbiAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnJztcblxuICBjb25zdCB0b29sYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvb2xiYXIuaWQgPSAndG9vbGJhcic7XG5cbiAgY29uc3QgYWJvdXRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhYm91dExpbmsuaWQgPSAnYWJvdXQtbGluayc7XG4gIGFib3V0TGluay5ocmVmID0gJ2xhbmRpbmcuaHRtbCc7XG4gIGFib3V0TGluay50ZXh0Q29udGVudCA9ICdcdTIxOTAgQWJvdXQnO1xuXG4gIGNvbnN0IHBsYXlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcGxheUJ0bi5pZCA9ICdwbGF5LWJ0bic7XG4gIHBsYXlCdG4udGV4dENvbnRlbnQgPSAnXHUyNUI2IFBsYXknO1xuICBwbGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheSk7XG5cbiAgY29uc3Qgc3RvcEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzdG9wQnRuLmlkID0gJ3N0b3AtYnRuJztcbiAgc3RvcEJ0bi50ZXh0Q29udGVudCA9ICdcdTI1QTAgU3RvcCc7XG4gIHN0b3BCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdG9wKTtcblxuICBjb25zdCBtaXhlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBtaXhlckJ0bi5pZCA9ICdtaXhlci1idG4nO1xuICBtaXhlckJ0bi50ZXh0Q29udGVudCA9ICdcdTIyOUUgTWl4ZXInO1xuICBjb25zdCBtaWRpQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG1pZGlCdG4uaWQgPSAnbWlkaS1idG4nO1xuICBtaWRpQnRuLnRleHRDb250ZW50ID0gJ1x1RDgzQ1x1REY5QiBNSURJJztcbiAgbWlkaUJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gIG1pZGlCdG4udGl0bGUgPSAnTUlESSBzdXBwb3J0IGNvbWVzIG5leHQnO1xuXG4gIGNvbnN0IHByZXNldExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgcHJlc2V0TGFiZWwuY2xhc3NOYW1lID0gJ2ZpZWxkLWdyb3VwJztcbiAgcHJlc2V0TGFiZWwudGV4dENvbnRlbnQgPSAnUHJlc2V0ICc7XG4gIGNvbnN0IHByZXNldFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBwcmVzZXRTZWxlY3QuaWQgPSAncHJlc2V0LXNlbGVjdCc7XG4gIGNvbnN0IGN1c3RvbU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBjdXN0b21PcHRpb24udmFsdWUgPSAnJztcbiAgY3VzdG9tT3B0aW9uLnRleHRDb250ZW50ID0gJ0N1c3RvbSc7XG4gIHByZXNldFNlbGVjdC5hcHBlbmRDaGlsZChjdXN0b21PcHRpb24pO1xuICBPYmplY3Qua2V5cyhQUkVTRVRTKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbi52YWx1ZSA9IG5hbWU7XG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gUFJFU0VUX0xBQkVMU1tuYW1lXSB8fCBuYW1lO1xuICAgIHByZXNldFNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9KTtcbiAgaWYgKGluaXRpYWxQcmVzZXQgJiYgUFJFU0VUU1tpbml0aWFsUHJlc2V0XSkge1xuICAgIHByZXNldFNlbGVjdC52YWx1ZSA9IGluaXRpYWxQcmVzZXQ7XG4gIH1cbiAgcHJlc2V0U2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBpZiAocHJlc2V0U2VsZWN0LnZhbHVlKSB7XG4gICAgICBsb2FkUHJlc2V0QnlOYW1lKHByZXNldFNlbGVjdC52YWx1ZSk7XG4gICAgfVxuICB9KTtcbiAgcHJlc2V0TGFiZWwuYXBwZW5kQ2hpbGQocHJlc2V0U2VsZWN0KTtcblxuICB0b29sYmFyLmFwcGVuZENoaWxkKGFib3V0TGluayk7XG4gIHRvb2xiYXIuYXBwZW5kQ2hpbGQocGxheUJ0bik7XG4gIHRvb2xiYXIuYXBwZW5kQ2hpbGQoc3RvcEJ0bik7XG4gIHRvb2xiYXIuYXBwZW5kQ2hpbGQobWl4ZXJCdG4pO1xuICB0b29sYmFyLmFwcGVuZENoaWxkKG1pZGlCdG4pO1xuICB0b29sYmFyLmFwcGVuZENoaWxkKHByZXNldExhYmVsKTtcblxuICBlZGl0b3JBcGkgPSBjcmVhdGVFZGl0b3IoaW5pdGlhbFRleHQsIHtcbiAgICByZXNvbHZlSW5zdHJ1bWVudDogcmVzb2x2ZUluc3RydW1lbnRUb29sdGlwLFxuICAgIHJlc29sdmVNb2RlOiByZXNvbHZlTW9kZVRvb2x0aXAsXG4gICAgcmVzb2x2ZVNlY3Rpb246IHJlc29sdmVTZWN0aW9uVG9vbHRpcCxcbiAgICByZXNvbHZlVmFyOiByZXNvbHZlVmFyVG9vbHRpcCxcbiAgICBvbklucHV0OiAoKSA9PiB7XG4gICAgICBjb25zdCBwcmVzZXRTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJlc2V0LXNlbGVjdCcpO1xuICAgICAgaWYgKHByZXNldFNlbGVjdCkgcHJlc2V0U2VsZWN0LnZhbHVlID0gJyc7XG4gICAgICBzZXRRdWVyeUxvYWQobnVsbCk7XG4gICAgICBtYXJrRGlydHkoKTtcbiAgICAgIHVwZGF0ZUxvb3AoKTtcbiAgICAgIHNhdmVEcmFmdCgpO1xuICAgIH0sXG4gIH0pO1xuXG4gIGVkaXRvckFwaS5vbigna2V5ZG93bicsIGUgPT4ge1xuICAgIGlmICgoZS5tZXRhS2V5IHx8IGUuY3RybEtleSkgJiYgZS5jb2RlID09PSAnRW50ZXInKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAocGxheWluZykgc3RvcCgpO1xuICAgICAgZWxzZSBwbGF5KCk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBzdGF0dXNiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3RhdHVzYmFyLmlkID0gJ3N0YXR1c2Jhcic7XG4gIHN0YXR1c2Jhci5kYXRhc2V0LnN0YXRlID0gJ3JlYWR5JztcblxuICBjb25zdCBiZWF0RG90cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBiZWF0RG90cy5pZCA9ICdiZWF0LWRvdHMnO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyBpICs9IDEpIHtcbiAgICBjb25zdCBkb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZG90LmNsYXNzTmFtZSA9ICdiZWF0LWRvdCc7XG4gICAgYmVhdERvdHMuYXBwZW5kQ2hpbGQoZG90KTtcbiAgfVxuXG4gIGNvbnN0IHN0YXR1c01lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHN0YXR1c01lc3NhZ2UuaWQgPSAnc3RhdHVzLW1lc3NhZ2UnO1xuICBzdGF0dXNNZXNzYWdlLnRleHRDb250ZW50ID0gJ1JlYWR5JztcblxuICBzdGF0dXNiYXIuYXBwZW5kQ2hpbGQoYmVhdERvdHMpO1xuICBzdGF0dXNiYXIuYXBwZW5kQ2hpbGQoc3RhdHVzTWVzc2FnZSk7XG5cbiAgY29uc3Qgd29ya3NwYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdvcmtzcGFjZS5pZCA9ICd3b3Jrc3BhY2UnO1xuICBtaXhlckFwaSA9IGNyZWF0ZU1peGVyKHAsIHtcbiAgICB0ZW1wbyxcbiAgICBiYXJzLFxuICAgIHRyYW5zcG9zZSxcbiAgICBvbkNoYW5nZShuZXh0KSB7XG4gICAgICBpZiAodHlwZW9mIG5leHQudGVtcG8gPT09ICdudW1iZXInKSB0ZW1wbyA9IG5leHQudGVtcG87XG4gICAgICBpZiAodHlwZW9mIG5leHQuYmFycyA9PT0gJ251bWJlcicpIGJhcnMgPSBuZXh0LmJhcnM7XG4gICAgICBpZiAodHlwZW9mIG5leHQudHJhbnNwb3NlID09PSAnbnVtYmVyJykgdHJhbnNwb3NlID0gbmV4dC50cmFuc3Bvc2U7XG4gICAgICB1cGRhdGVMb29wKCk7XG4gICAgfSxcbiAgfSk7XG4gIG1peGVyQXBpLnRvZ2dsZShmYWxzZSk7XG4gIG1peGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG9wZW4gPSBtaXhlckFwaS50b2dnbGUoKTtcbiAgICB3b3Jrc3BhY2UuY2xhc3NMaXN0LnRvZ2dsZSgnbWl4ZXItb3BlbicsIG9wZW4pO1xuICB9KTtcbiAgcC5vbkJlYXQgPSAoa2V5LCB3aGVuKSA9PiB7XG4gICAgY29uc3Qgd2FpdCA9IE1hdGgubWF4KDAsICh3aGVuIC0gcC5hdWRpb0NvbnRleHQuY3VycmVudFRpbWUpICogMTAwMCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBtaXhlckFwaS5mbGFzaFZVKGtleSksIHdhaXQpO1xuICB9O1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodG9vbGJhcik7XG4gIHdvcmtzcGFjZS5hcHBlbmRDaGlsZChlZGl0b3JBcGkuZWwpO1xuICB3b3Jrc3BhY2UuYXBwZW5kQ2hpbGQobWl4ZXJBcGkuZWwpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHdvcmtzcGFjZSk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3RhdHVzYmFyKTtcblxuICByZXR1cm4gZWRpdG9yQXBpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBsb2FkRXhhbXBsZShuYW1lKSB7XG4gIGlmIChQUkVTRVRTW25hbWVdKSByZXR1cm4gUFJFU0VUU1tuYW1lXTtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBleGFtcGxlcy8ke25hbWV9LmR1YmApO1xuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBpZ25vcmUgYW5kIHVzZSBmYWxsYmFja1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5hc3luYyBmdW5jdGlvbiByZXNvbHZlSW5pdGlhbERyYWZ0KCkge1xuICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICBjb25zdCBsb2FkID0gcGFyYW1zLmdldCgnbG9hZCcpO1xuXG4gIGlmIChsb2FkKSB7XG4gICAgY29uc3QgZHJhZnQgPSBhd2FpdCBsb2FkRXhhbXBsZShsb2FkKTtcbiAgICBpZiAoZHJhZnQpIHJldHVybiBkcmFmdC50cmltKCk7XG4gIH1cblxuICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU1RPUkFHRV9LRVkpIHx8IFRFVFJJUztcbn1cblxuZnVuY3Rpb24gc2F2ZURyYWZ0KCkge1xuICBjbGVhclRpbWVvdXQoZGVib3VuY2VUaW1lcik7XG4gIGRlYm91bmNlVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpZiAoZWRpdG9yQXBpKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTVE9SQUdFX0tFWSwgZWRpdG9yQXBpLmdldFZhbHVlKCkpO1xuICAgICAgc2F2ZVN1Y2Nlc3MoKTtcbiAgICB9XG4gIH0sIDMwMCk7XG59XG5cbmZ1bmN0aW9uIHBsYXkoKSB7XG4gIHN0b3AoKTtcbiAgaWYgKCFlZGl0b3JBcGkpIHJldHVybjtcblxuICBpZiAocC5hdWRpb0NvbnRleHQuc3RhdGUgPT09ICdzdXNwZW5kZWQnKSB7XG4gICAgcC5hdWRpb0NvbnRleHQucmVzdW1lKCk7XG4gIH1cbiAgcGxheWluZyA9IHRydWU7XG4gIGNvbnN0IGRhdGEgPSBnZXREYXRhKGVkaXRvckFwaS5nZXRWYWx1ZSgpKTtcbiAgcC5zZXRMb29wTWFjaGluZShkYXRhLCB0ZW1wbywgYmFycywgdHJhbnNwb3NlKTtcbiAgc3luY01peGVyKGRhdGEpO1xuICBwLnBsYXlMb29wTWFjaGluZSgpO1xuICB1cGRhdGVQbGF5QnV0dG9uKCk7XG4gIHNob3dTdGF0dXMoJ1BsYXlpbmcnLCAncGxheWluZycpO1xufVxuXG5mdW5jdGlvbiBzdG9wKCkge1xuICBpZiAocGxheWluZykge1xuICAgIHBsYXlpbmcgPSBmYWxzZTtcbiAgICBwLnN0b3BMb29wTWFjaGluZSgpO1xuICB9XG4gIHVwZGF0ZVBsYXlCdXR0b24oKTtcbiAgc2V0UmVhZHlTdGF0dXMoKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlTG9vcCgpIHtcbiAgaWYgKCFlZGl0b3JBcGkgfHwgIXApIHJldHVybjtcblxuICBjb25zdCBkYXRhID0gZ2V0RGF0YShlZGl0b3JBcGkuZ2V0VmFsdWUoKSk7XG4gIGNvbnN0IGNoYW5nZWQgPSBwLnNldExvb3BNYWNoaW5lKGRhdGEsIHRlbXBvLCBiYXJzLCB0cmFuc3Bvc2UpO1xuICBzeW5jTWl4ZXIoZGF0YSk7XG4gIGlmIChjaGFuZ2VkICYmIHBsYXlpbmcpIHtcbiAgICBwLnBsYXlMb29wTWFjaGluZShwLmJlYXRJbmRleCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYmVhdEluZGljYXRvcigpIHtcbiAgY29uc3QgZG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iZWF0LWRvdCcpO1xuICBjb25zdCBhY3RpdmVJbmRleCA9IHAubG9vcFN0YXJ0ZWQgPyBwLmJlYXRJbmRleCA6IC0xO1xuICBkb3RzLmZvckVhY2goKGRvdCwgaSkgPT4gZG90LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIGkgPT09IGFjdGl2ZUluZGV4KSk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShiZWF0SW5kaWNhdG9yKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gYm9vdHN0cmFwKCkge1xuICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICBjb25zdCBpbml0aWFsUHJlc2V0ID0gcGFyYW1zLmdldCgnbG9hZCcpO1xuICBjb25zdCBpbml0aWFsRHJhZnQgPSBhd2FpdCByZXNvbHZlSW5pdGlhbERyYWZ0KCk7XG4gIGNvbnN0IGVkaXRvciA9IGNyZWF0ZURPTShpbml0aWFsRHJhZnQsIGluaXRpYWxQcmVzZXQpO1xuICBiaW5kR2xvYmFsU2hvcnRjdXRzKCk7XG4gIGNvbnN0IGRhdGEgPSBnZXREYXRhKGVkaXRvci5nZXRWYWx1ZSgpKTtcbiAgcC5zZXRMb29wTWFjaGluZShkYXRhLCB0ZW1wbywgYmFycywgdHJhbnNwb3NlKTtcbiAgc3luY01peGVyKGRhdGEpO1xuICBzZXRSZWFkeVN0YXR1cygpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYmVhdEluZGljYXRvcik7XG59XG5cbmJvb3RzdHJhcCgpO1xuXG5leHBvcnQgZGVmYXVsdCB7fTtcbiIsICIndXNlIHN0cmljdCdcblxuLy8gdXRpbFxuZnVuY3Rpb24gZmlsbFN0ciAocywgbnVtKSB7IHJldHVybiBBcnJheShudW0gKyAxKS5qb2luKHMpIH1cbmZ1bmN0aW9uIGlzTnVtICh4KSB7IHJldHVybiB0eXBlb2YgeCA9PT0gJ251bWJlcicgfVxuZnVuY3Rpb24gaXNTdHIgKHgpIHsgcmV0dXJuIHR5cGVvZiB4ID09PSAnc3RyaW5nJyB9XG5mdW5jdGlvbiBpc0RlZiAoeCkgeyByZXR1cm4gdHlwZW9mIHggIT09ICd1bmRlZmluZWQnIH1cbmZ1bmN0aW9uIG1pZGlUb0ZyZXEgKG1pZGksIHR1bmluZykge1xuICByZXR1cm4gTWF0aC5wb3coMiwgKG1pZGkgLSA2OSkgLyAxMikgKiAodHVuaW5nIHx8IDQ0MClcbn1cblxudmFyIFJFR0VYID0gL14oW2EtZ0EtR10pKCN7MSx9fGJ7MSx9fHh7MSx9fCkoLT9cXGQqKVxccyooLiopXFxzKiQvXG4vKipcbiAqIEEgcmVnZXggZm9yIG1hdGNoaW5nIG5vdGUgc3RyaW5ncyBpbiBzY2llbnRpZmljIG5vdGF0aW9uLlxuICpcbiAqIEBuYW1lIHJlZ2V4XG4gKiBAZnVuY3Rpb25cbiAqIEByZXR1cm4ge1JlZ0V4cH0gdGhlIHJlZ2V4cCB1c2VkIHRvIHBhcnNlIHRoZSBub3RlIG5hbWVcbiAqXG4gKiBUaGUgbm90ZSBzdHJpbmcgc2hvdWxkIGhhdmUgdGhlIGZvcm0gYGxldHRlclthY2NpZGVudGFsc11bb2N0YXZlXVtlbGVtZW50XWBcbiAqIHdoZXJlOlxuICpcbiAqIC0gbGV0dGVyOiAoUmVxdWlyZWQpIGlzIGEgbGV0dGVyIGZyb20gQSB0byBHIGVpdGhlciB1cHBlciBvciBsb3dlciBjYXNlXG4gKiAtIGFjY2lkZW50YWxzOiAoT3B0aW9uYWwpIGNhbiBiZSBvbmUgb3IgbW9yZSBgYmAgKGZsYXRzKSwgYCNgIChzaGFycHMpIG9yIGB4YCAoZG91YmxlIHNoYXJwcykuXG4gKiBUaGV5IGNhbiBOT1QgYmUgbWl4ZWQuXG4gKiAtIG9jdGF2ZTogKE9wdGlvbmFsKSBhIHBvc2l0aXZlIG9yIG5lZ2F0aXZlIGludGVnZXJcbiAqIC0gZWxlbWVudDogKE9wdGlvbmFsKSBhZGRpdGlvbmFsbHkgYW55dGhpbmcgYWZ0ZXIgdGhlIGR1cmF0aW9uIGlzIGNvbnNpZGVyZWQgdG9cbiAqIGJlIHRoZSBlbGVtZW50IG5hbWUgKGZvciBleGFtcGxlOiAnQzIgZG9yaWFuJylcbiAqXG4gKiBUaGUgZXhlY3V0ZWQgcmVnZXggY29udGFpbnMgKGJ5IGFycmF5IGluZGV4KTpcbiAqXG4gKiAtIDA6IHRoZSBjb21wbGV0ZSBzdHJpbmdcbiAqIC0gMTogdGhlIG5vdGUgbGV0dGVyXG4gKiAtIDI6IHRoZSBvcHRpb25hbCBhY2NpZGVudGFsc1xuICogLSAzOiB0aGUgb3B0aW9uYWwgb2N0YXZlXG4gKiAtIDQ6IHRoZSByZXN0IG9mIHRoZSBzdHJpbmcgKHRyaW1tZWQpXG4gKlxuICogQGV4YW1wbGVcbiAqIHZhciBwYXJzZXIgPSByZXF1aXJlKCdub3RlLXBhcnNlcicpXG4gKiBwYXJzZXIucmVnZXguZXhlYygnYyM0JylcbiAqIC8vID0+IFsnYyM0JywgJ2MnLCAnIycsICc0JywgJyddXG4gKiBwYXJzZXIucmVnZXguZXhlYygnYyM0IG1ham9yJylcbiAqIC8vID0+IFsnYyM0bWFqb3InLCAnYycsICcjJywgJzQnLCAnbWFqb3InXVxuICogcGFyc2VyLnJlZ2V4KCkuZXhlYygnQ01hajcnKVxuICogLy8gPT4gWydDTWFqNycsICdDJywgJycsICcnLCAnTWFqNyddXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdleCAoKSB7IHJldHVybiBSRUdFWCB9XG5cbnZhciBTRU1JVE9ORVMgPSBbMCwgMiwgNCwgNSwgNywgOSwgMTFdXG4vKipcbiAqIFBhcnNlIGEgbm90ZSBuYW1lIGluIHNjaWVudGlmaWMgbm90YXRpb24gYW4gcmV0dXJuIGl0J3MgY29tcG9uZW50cyxcbiAqIGFuZCBzb21lIG51bWVyaWMgcHJvcGVydGllcyBpbmNsdWRpbmcgbWlkaSBudW1iZXIgYW5kIGZyZXF1ZW5jeS5cbiAqXG4gKiBAbmFtZSBwYXJzZVxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbm90ZSAtIHRoZSBub3RlIHN0cmluZyB0byBiZSBwYXJzZWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNUb25pYyAtIHRydWUgdGhlIHN0cmluZ3MgaXQncyBzdXBwb3NlZCB0byBjb250YWluIGEgbm90ZSBudW1iZXJcbiAqIGFuZCBzb21lIGNhdGVnb3J5IChmb3IgZXhhbXBsZSBhbiBzY2FsZTogJ0MjIG1ham9yJykuIEl0J3MgZmFsc2UgYnkgZGVmYXVsdCxcbiAqIGJ1dCB3aGVuIHRydWUsIGVuIGV4dHJhIHRvbmljT2YgcHJvcGVydHkgaXMgcmV0dXJuZWQgd2l0aCB0aGUgY2F0ZWdvcnkgKCdtYWpvcicpXG4gKiBAcGFyYW0ge0Zsb2F0fSB0dW5uaW5nIC0gVGhlIGZyZXF1ZW5jeSBvZiBBNCBub3RlIHRvIGNhbGN1bGF0ZSBmcmVxdWVuY2llcy5cbiAqIEJ5IGRlZmF1bHQgaXQgNDQwLlxuICogQHJldHVybiB7T2JqZWN0fSB0aGUgcGFyc2VkIG5vdGUgbmFtZSBvciBudWxsIGlmIG5vdCBhIHZhbGlkIG5vdGVcbiAqXG4gKiBUaGUgcGFyc2VkIG5vdGUgbmFtZSBvYmplY3Qgd2lsbCBBTFdBWVMgY29udGFpbnM6XG4gKiAtIGxldHRlcjogdGhlIHVwcGVyY2FzZSBsZXR0ZXIgb2YgdGhlIG5vdGVcbiAqIC0gYWNjOiB0aGUgYWNjaWRlbnRhbHMgb2YgdGhlIG5vdGUgKG9ubHkgc2hhcnBzIG9yIGZsYXRzKVxuICogLSBwYzogdGhlIHBpdGNoIGNsYXNzIChsZXR0ZXIgKyBhY2MpXG4gKiAtIHN0ZXA6IHMgYSBudW1lcmljIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBsZXR0ZXIuIEl0J3MgYW4gaW50ZWdlciBmcm9tIDAgdG8gNlxuICogd2hlcmUgMCA9IEMsIDEgPSBEIC4uLiA2ID0gQlxuICogLSBhbHQ6IGEgbnVtZXJpYyByZXByZXNlbnRhdGlvbiBvZiB0aGUgYWNjaWRlbnRhbHMuIDAgbWVhbnMgbm8gYWx0ZXJhdGlvbixcbiAqIHBvc2l0aXZlIG51bWJlcnMgYXJlIGZvciBzaGFycHMgYW5kIG5lZ2F0aXZlIGZvciBmbGF0c1xuICogLSBjaHJvbWE6IGEgbnVtZXJpYyByZXByZXNlbnRhdGlvbiBvZiB0aGUgcGl0Y2ggY2xhc3MuIEl0J3MgbGlrZSBtaWRpIGZvclxuICogcGl0Y2ggY2xhc3Nlcy4gMCA9IEMsIDEgPSBDIywgMiA9IEQgLi4uIDExID0gQi4gQ2FuIGJlIHVzZWQgdG8gZmluZCBlbmhhcm1vbmljc1xuICogc2luY2UsIGZvciBleGFtcGxlLCBjaHJvbWEgb2YgJ0NiJyBhbmQgJ0InIGFyZSBib3RoIDExXG4gKlxuICogSWYgdGhlIG5vdGUgaGFzIG9jdGF2ZSwgdGhlIHBhcnNlciBvYmplY3Qgd2lsbCBjb250YWluOlxuICogLSBvY3Q6IHRoZSBvY3RhdmUgbnVtYmVyIChhcyBpbnRlZ2VyKVxuICogLSBtaWRpOiB0aGUgbWlkaSBudW1iZXJcbiAqIC0gZnJlcTogdGhlIGZyZXF1ZW5jeSAodXNpbmcgdHVuaW5nIHBhcmFtZXRlciBhcyBiYXNlKVxuICpcbiAqIElmIHRoZSBwYXJhbWV0ZXIgYGlzVG9uaWNgIGlzIHNldCB0byB0cnVlLCB0aGUgcGFyc2VkIG9iamVjdCB3aWxsIGNvbnRhaW46XG4gKiAtIHRvbmljT2Y6IHRoZSByZXN0IG9mIHRoZSBzdHJpbmcgdGhhdCBmb2xsb3dzIG5vdGUgbmFtZSAobGVmdCBhbmQgcmlnaHQgdHJpbW1lZClcbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIHBhcnNlID0gcmVxdWlyZSgnbm90ZS1wYXJzZXInKS5wYXJzZVxuICogcGFyc2UoJ0NiNCcpXG4gKiAvLyA9PiB7IGxldHRlcjogJ0MnLCBhY2M6ICdiJywgcGM6ICdDYicsIHN0ZXA6IDAsIGFsdDogLTEsIGNocm9tYTogLTEsXG4gKiAgICAgICAgIG9jdDogNCwgbWlkaTogNTksIGZyZXE6IDI0Ni45NDE2NTA2MjgwNjIwNiB9XG4gKiAvLyBpZiBubyBvY3RhdmUsIG5vIG1pZGksIG5vIGZyZXFcbiAqIHBhcnNlKCdmeCcpXG4gKiAvLyA9PiB7IGxldHRlcjogJ0YnLCBhY2M6ICcjIycsIHBjOiAnRiMjJywgc3RlcDogMywgYWx0OiAyLCBjaHJvbWE6IDcgfSlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlIChzdHIsIGlzVG9uaWMsIHR1bmluZykge1xuICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHJldHVybiBudWxsXG4gIHZhciBtID0gUkVHRVguZXhlYyhzdHIpXG4gIGlmICghbSB8fCAoIWlzVG9uaWMgJiYgbVs0XSkpIHJldHVybiBudWxsXG5cbiAgdmFyIHAgPSB7IGxldHRlcjogbVsxXS50b1VwcGVyQ2FzZSgpLCBhY2M6IG1bMl0ucmVwbGFjZSgveC9nLCAnIyMnKSB9XG4gIHAucGMgPSBwLmxldHRlciArIHAuYWNjXG4gIHAuc3RlcCA9IChwLmxldHRlci5jaGFyQ29kZUF0KDApICsgMykgJSA3XG4gIHAuYWx0ID0gcC5hY2NbMF0gPT09ICdiJyA/IC1wLmFjYy5sZW5ndGggOiBwLmFjYy5sZW5ndGhcbiAgdmFyIHBvcyA9IFNFTUlUT05FU1twLnN0ZXBdICsgcC5hbHRcbiAgcC5jaHJvbWEgPSBwb3MgPCAwID8gMTIgKyBwb3MgOiBwb3MgJSAxMlxuICBpZiAobVszXSkgeyAvLyBoYXMgb2N0YXZlXG4gICAgcC5vY3QgPSArbVszXVxuICAgIHAubWlkaSA9IHBvcyArIDEyICogKHAub2N0ICsgMSlcbiAgICBwLmZyZXEgPSBtaWRpVG9GcmVxKHAubWlkaSwgdHVuaW5nKVxuICB9XG4gIGlmIChpc1RvbmljKSBwLnRvbmljT2YgPSBtWzRdXG4gIHJldHVybiBwXG59XG5cbnZhciBMRVRURVJTID0gJ0NERUZHQUInXG5mdW5jdGlvbiBhY2NTdHIgKG4pIHsgcmV0dXJuICFpc051bShuKSA/ICcnIDogbiA8IDAgPyBmaWxsU3RyKCdiJywgLW4pIDogZmlsbFN0cignIycsIG4pIH1cbmZ1bmN0aW9uIG9jdFN0ciAobikgeyByZXR1cm4gIWlzTnVtKG4pID8gJycgOiAnJyArIG4gfVxuXG4vKipcbiAqIENyZWF0ZSBhIHN0cmluZyBmcm9tIGEgcGFyc2VkIG9iamVjdCBvciBgc3RlcCwgYWx0ZXJhdGlvbiwgb2N0YXZlYCBwYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gdGhlIHBhcnNlZCBkYXRhIG9iamVjdFxuICogQHJldHVybiB7U3RyaW5nfSBhIG5vdGUgc3RyaW5nIG9yIG51bGwgaWYgbm90IHZhbGlkIHBhcmFtZXRlcnNcbiAqIEBzaW5jZSAxLjJcbiAqIEBleGFtcGxlXG4gKiBwYXJzZXIuYnVpbGQocGFyc2VyLnBhcnNlKCdjYjInKSkgLy8gPT4gJ0NiMidcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gaXQgYWNjZXB0cyAoc3RlcCwgYWx0ZXJhdGlvbiwgb2N0YXZlKSBwYXJhbWV0ZXJzOlxuICogcGFyc2VyLmJ1aWxkKDMpIC8vID0+ICdGJ1xuICogcGFyc2VyLmJ1aWxkKDMsIC0xKSAvLyA9PiAnRmInXG4gKiBwYXJzZXIuYnVpbGQoMywgLTEsIDQpIC8vID0+ICdGYjQnXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidWlsZCAocywgYSwgbykge1xuICBpZiAocyA9PT0gbnVsbCB8fCB0eXBlb2YgcyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBudWxsXG4gIGlmIChzLnN0ZXApIHJldHVybiBidWlsZChzLnN0ZXAsIHMuYWx0LCBzLm9jdClcbiAgaWYgKHMgPCAwIHx8IHMgPiA2KSByZXR1cm4gbnVsbFxuICByZXR1cm4gTEVUVEVSUy5jaGFyQXQocykgKyBhY2NTdHIoYSkgKyBvY3RTdHIobylcbn1cblxuLyoqXG4gKiBHZXQgbWlkaSBvZiBhIG5vdGVcbiAqXG4gKiBAbmFtZSBtaWRpXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfEludGVnZXJ9IG5vdGUgLSB0aGUgbm90ZSBuYW1lIG9yIG1pZGkgbnVtYmVyXG4gKiBAcmV0dXJuIHtJbnRlZ2VyfSB0aGUgbWlkaSBudW1iZXIgb2YgdGhlIG5vdGUgb3IgbnVsbCBpZiBub3QgYSB2YWxpZCBub3RlXG4gKiBvciB0aGUgbm90ZSBkb2VzIE5PVCBjb250YWlucyBvY3RhdmVcbiAqIEBleGFtcGxlXG4gKiB2YXIgcGFyc2VyID0gcmVxdWlyZSgnbm90ZS1wYXJzZXInKVxuICogcGFyc2VyLm1pZGkoJ0E0JykgLy8gPT4gNjlcbiAqIHBhcnNlci5taWRpKCdBJykgLy8gPT4gbnVsbFxuICogQGV4YW1wbGVcbiAqIC8vIG1pZGkgbnVtYmVycyBhcmUgYnlwYXNzZWQgKGV2ZW4gYXMgc3RyaW5ncylcbiAqIHBhcnNlci5taWRpKDYwKSAvLyA9PiA2MFxuICogcGFyc2VyLm1pZGkoJzYwJykgLy8gPT4gNjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1pZGkgKG5vdGUpIHtcbiAgaWYgKChpc051bShub3RlKSB8fCBpc1N0cihub3RlKSkgJiYgbm90ZSA+PSAwICYmIG5vdGUgPCAxMjgpIHJldHVybiArbm90ZVxuICB2YXIgcCA9IHBhcnNlKG5vdGUpXG4gIHJldHVybiBwICYmIGlzRGVmKHAubWlkaSkgPyBwLm1pZGkgOiBudWxsXG59XG5cbi8qKlxuICogR2V0IGZyZXEgb2YgYSBub3RlIGluIGhlcnR6cyAoaW4gYSB3ZWxsIHRlbXBlcmVkIDQ0MEh6IEE0KVxuICpcbiAqIEBuYW1lIGZyZXFcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5vdGUgLSB0aGUgbm90ZSBuYW1lIG9yIG5vdGUgbWlkaSBudW1iZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSB0dW5pbmcgLSAoT3B0aW9uYWwpIHRoZSBBNCBmcmVxdWVuY3kgKDQ0MCBieSBkZWZhdWx0KVxuICogQHJldHVybiB7RmxvYXR9IHRoZSBmcmVxIG9mIHRoZSBudW1iZXIgaWYgaGVydHpzIG9yIG51bGwgaWYgbm90IHZhbGlkIG5vdGVcbiAqIEBleGFtcGxlXG4gKiB2YXIgcGFyc2VyID0gcmVxdWlyZSgnbm90ZS1wYXJzZXInKVxuICogcGFyc2VyLmZyZXEoJ0E0JykgLy8gPT4gNDQwXG4gKiBwYXJzZXIuZnJlcSgnQScpIC8vID0+IG51bGxcbiAqIEBleGFtcGxlXG4gKiAvLyBjYW4gY2hhbmdlIHR1bmluZyAoNDQwIGJ5IGRlZmF1bHQpXG4gKiBwYXJzZXIuZnJlcSgnQTQnLCA0NDQpIC8vID0+IDQ0NFxuICogcGFyc2VyLmZyZXEoJ0EzJywgNDQ0KSAvLyA9PiAyMjJcbiAqIEBleGFtcGxlXG4gKiAvLyBpdCBhY2NlcHRzIG1pZGkgbnVtYmVycyAoYXMgbnVtYmVycyBhbmQgYXMgc3RyaW5ncylcbiAqIHBhcnNlci5mcmVxKDY5KSAvLyA9PiA0NDBcbiAqIHBhcnNlci5mcmVxKCc2OScsIDQ0MikgLy8gPT4gNDQyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcmVxIChub3RlLCB0dW5pbmcpIHtcbiAgdmFyIG0gPSBtaWRpKG5vdGUpXG4gIHJldHVybiBtID09PSBudWxsID8gbnVsbCA6IG1pZGlUb0ZyZXEobSwgdHVuaW5nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbGV0dGVyIChzcmMpIHsgcmV0dXJuIChwYXJzZShzcmMpIHx8IHt9KS5sZXR0ZXIgfVxuZXhwb3J0IGZ1bmN0aW9uIGFjYyAoc3JjKSB7IHJldHVybiAocGFyc2Uoc3JjKSB8fCB7fSkuYWNjIH1cbmV4cG9ydCBmdW5jdGlvbiBwYyAoc3JjKSB7IHJldHVybiAocGFyc2Uoc3JjKSB8fCB7fSkucGMgfVxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXAgKHNyYykgeyByZXR1cm4gKHBhcnNlKHNyYykgfHwge30pLnN0ZXAgfVxuZXhwb3J0IGZ1bmN0aW9uIGFsdCAoc3JjKSB7IHJldHVybiAocGFyc2Uoc3JjKSB8fCB7fSkuYWx0IH1cbmV4cG9ydCBmdW5jdGlvbiBjaHJvbWEgKHNyYykgeyByZXR1cm4gKHBhcnNlKHNyYykgfHwge30pLmNocm9tYSB9XG5leHBvcnQgZnVuY3Rpb24gb2N0IChzcmMpIHsgcmV0dXJuIChwYXJzZShzcmMpIHx8IHt9KS5vY3QgfVxuIiwgIi8qKlxuICogQSBtaWRpIG5vdGUgbnVtYmVyIGlzIGEgbnVtYmVyIHJlcHJlc2VudGF0aW9uIG9mIGEgbm90ZSBwaXRjaC4gSXQgY2FuIGJlXG4gKiBpbnRlZ2VycyBzbyBpdCdzIGVxdWFsIHRlbXBlcmVkIHR1bmVkLCBvciBmbG9hdCB0byBpbmRpY2F0ZSBpdCdzIG5vdFxuICogdHVuZWQgaW50byBlcXVhbCB0ZW1lcGVyZWQgc2NhbGUuXG4gKlxuICogVGhpcyBtb2R1bGUgY29udGFpbnMgZnVuY3Rpb25zIHRvIGNvbnZlcnQgdG8gYW5kIGZyb20gbWlkaSBub3Rlcy5cbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIG1pZGkgPSByZXF1aXJlKCd0b25hbC1taWRpJylcbiAqIG1pZGkudG9NaWRpKCdBNCcpIC8vID0+IDY5XG4gKiBtaWRpLm5vdGUoNjkpIC8vID0+ICdBNCdcbiAqIG1pZGkubm90ZSg2MSkgLy8gPT4gJ0RiNCdcbiAqIG1pZGkubm90ZSg2MSwgdHJ1ZSkgLy8gPT4gJ0MjNCdcbiAqXG4gKiBAbW9kdWxlIG1pZGlcbiAqL1xuXG5pbXBvcnQgeyBtaWRpIH0gZnJvbSAnbm90ZS1wYXJzZXInXG5cbi8qKlxuICogQ29udmVydCB0aGUgZ2l2ZW4gbm90ZSB0byBhIG1pZGkgbm90ZSBudW1iZXIuIElmIHlvdSBwYXNzIGEgbWlkaSBudW1iZXIgaXRcbiAqIHdpbGwgcmV0dXJuZWQgYXMgaXMuXG4gKlxuICogQHBhcmFtIHtBcnJheXxTdHJpbmd8TnVtYmVyfSBub3RlIC0gdGhlIG5vdGUgdG8gZ2V0IHRoZSBtaWRpIG51bWJlciBmcm9tXG4gKiBAcmV0dXJuIHtJbnRlZ2VyfSB0aGUgbWlkaSBudW1iZXIgb3IgbnVsbCBpZiBub3QgdmFsaWQgcGl0Y2hcbiAqIEBleGFtcGxlXG4gKiBtaWRpLnRvTWlkaSgnQzQnKSAvLyA9PiA2MFxuICogbWlkaS50b01pZGkoNjApIC8vID0+IDYwXG4gKiBtaWRpLnRvTWlkaSgnNjAnKSAvLyA9PiA2MFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9NaWRpICh2YWwpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSAmJiB2YWwubGVuZ3RoID09PSAyKSByZXR1cm4gdmFsWzBdICogNyArIHZhbFsxXSAqIDEyICsgMTJcbiAgcmV0dXJuIG1pZGkodmFsKVxufVxuXG52YXIgRkxBVFMgPSAnQyBEYiBEIEViIEUgRiBHYiBHIEFiIEEgQmIgQicuc3BsaXQoJyAnKVxudmFyIFNIQVJQUyA9ICdDIEMjIEQgRCMgRSBGIEYjIEcgRyMgQSBBIyBCJy5zcGxpdCgnICcpXG5cbi8qKlxuICogR2l2ZW4gYSBtaWRpIG51bWJlciwgcmV0dXJucyBhIG5vdGUgbmFtZS4gVGhlIGFsdGVyZWQgbm90ZXMgd2lsbCBoYXZlXG4gKiBmbGF0cyB1bmxlc3MgZXhwbGljaXRseSBzZXQgd2l0aCB0aGUgb3B0aW9uYWwgYHVzZVNoYXJwc2AgcGFyYW1ldGVyLlxuICpcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtJbnRlZ2VyfSBtaWRpIC0gdGhlIG1pZGkgbm90ZSBudW1iZXJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlU2hhcnBzIC0gKE9wdGlvbmFsKSBzZXQgdG8gdHJ1ZSB0byB1c2Ugc2hhcnBzIGluc3RlYWQgb2YgZmxhdHNcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIG5vdGUgbmFtZVxuICogQGV4YW1wbGVcbiAqIHZhciBtaWRpID0gcmVxdWlyZSgndG9uYWwtbWlkaScpXG4gKiBtaWRpLm5vdGUoNjEpIC8vID0+ICdEYjQnXG4gKiBtaWRpLm5vdGUoNjEsIHRydWUpIC8vID0+ICdDIzQnXG4gKiAvLyBpdCByb3VuZHMgdG8gbmVhcmVzdCBub3RlXG4gKiBtaWRpLm5vdGUoNjEuNykgLy8gPT4gJ0Q0J1xuICovXG5leHBvcnQgZnVuY3Rpb24gbm90ZSAobnVtLCBzaGFycHMpIHtcbiAgaWYgKG51bSA9PT0gdHJ1ZSB8fCBudW0gPT09IGZhbHNlKSByZXR1cm4gZnVuY3Rpb24gKG0pIHsgcmV0dXJuIG5vdGUobSwgbnVtKSB9XG4gIG51bSA9IE1hdGgucm91bmQobnVtKVxuICB2YXIgcGNzID0gc2hhcnBzID09PSB0cnVlID8gU0hBUlBTIDogRkxBVFNcbiAgdmFyIHBjID0gcGNzW251bSAlIDEyXVxuICB2YXIgbyA9IE1hdGguZmxvb3IobnVtIC8gMTIpIC0gMVxuICByZXR1cm4gcGMgKyBvXG59XG4iLCAie1xuICBcIm5hbWVcIjogXCJtaWRpLXdyaXRlci1qc1wiLFxuICBcInZlcnNpb25cIjogXCIyLjAuMVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQSBsaWJyYXJ5IHByb3ZpZGluZyBhbiBBUEkgZm9yIGdlbmVyYXRpbmcgTUlESSBmaWxlcy5cIixcbiAgXCJtYWluXCI6IFwiYnVpbGQvaW5kZXguanNcIixcbiAgXCJ0eXBlc1wiOiBcInR5cGVzLmQudHNcIixcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwidG9uYWwtbWlkaVwiOiBcIl4wLjY5LjdcIlxuICB9LFxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAYmFiZWwvY29yZVwiOiBcIl43LjkuNlwiLFxuICAgIFwiQGJhYmVsL3BsdWdpbi10cmFuc2Zvcm0tZGVzdHJ1Y3R1cmluZ1wiOiBcIl43LjkuNVwiLFxuICAgIFwiQGJhYmVsL3ByZXNldC1lbnZcIjogXCJeNy45LjZcIixcbiAgICBcIkByb2xsdXAvcGx1Z2luLWJhYmVsXCI6IFwiXjUuMC4wXCIsXG4gICAgXCJlc2xpbnRcIjogXCJeNy4wLjBcIixcbiAgICBcImVzbGludC1jb25maWctc3RhbmRhcmRcIjogXCJeMTIuMC4wXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLWltcG9ydFwiOiBcIl4yLjIwLjJcIixcbiAgICBcImVzbGludC1wbHVnaW4tbm9kZVwiOiBcIl45LjIuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1wcm9taXNlXCI6IFwiXjQuMS4xXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXN0YW5kYXJkXCI6IFwiXjQuMC4xXCIsXG4gICAgXCJqc2RvY1wiOiBcIl4zLjYuNFwiLFxuICAgIFwibWluYW1pXCI6IFwiXjEuMi4zXCIsXG4gICAgXCJtb2NoYVwiOiBcIl45LjAuMVwiLFxuICAgIFwibnljXCI6IFwiXjE1LjAuMVwiLFxuICAgIFwicm9sbHVwXCI6IFwiXjIuOS4wXCIsXG4gICAgXCJ3YXRjaFwiOiBcIl4xLjAuMlwiXG4gIH0sXG4gIFwiZGlyZWN0b3JpZXNcIjoge1xuICAgIFwibGliXCI6IFwic3JjXCIsXG4gICAgXCJleGFtcGxlXCI6IFwiZXhhbXBsZXNcIixcbiAgICBcInRlc3RcIjogXCJ0ZXN0XCJcbiAgfSxcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcImJ1aWxkXCI6IFwibWtkaXIgLXAgYnVpbGQgJiYgcm9sbHVwIC1jICYmIG5wbSBydW4gZG9jc1wiLFxuICAgIFwiZG9jc1wiOiBcIi4vbm9kZV9tb2R1bGVzLy5iaW4vanNkb2MgLXIgc3JjIFJFQURNRS5tZCAtZCAuL2RvY3MgLXQgLi9ub2RlX21vZHVsZXMvbWluYW1pXCIsXG4gICAgXCJsaW50OmpzXCI6IFwiZXNsaW50ICdzcmMvKiovKiouanMnXCIsXG4gICAgXCJwcmVwdWJsaXNoT25seVwiOiBcIm5wbSB0ZXN0XCIsXG4gICAgXCJwcmV0ZXN0XCI6IFwibnBtIHJ1biBidWlsZFwiLFxuICAgIFwidGVzdFwiOiBcIm55YyAtLXJlcG9ydGVyPXRleHQgbW9jaGEgLS1uby1jb25maWcgLS1uby1wYWNrYWdlXCIsXG4gICAgXCJ3YXRjaFwiOiBcIndhdGNoICducG0gcnVuIGJ1aWxkJyBzcmNcIixcbiAgICBcInBvc3RpbnN0YWxsXCI6IFwibm9kZSBwb3N0aW5zdGFsbC5qc1wiXG4gIH0sXG4gIFwicnVua2l0RXhhbXBsZUZpbGVuYW1lXCI6IFwicnVua2l0LmpzXCIsXG4gIFwicmVwb3NpdG9yeVwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiZ2l0XCIsXG4gICAgXCJ1cmxcIjogXCJnaXQraHR0cHM6Ly9naXRodWIuY29tL2dyaW1tZHVkZS9NaWRpV3JpdGVySlMuZ2l0XCJcbiAgfSxcbiAgXCJrZXl3b3Jkc1wiOiBbXG4gICAgXCJtaWRpXCIsXG4gICAgXCJnZW5lcmF0b3JcIixcbiAgICBcIm11c2ljXCJcbiAgXSxcbiAgXCJhdXRob3JcIjogXCJHYXJyZXR0IEdyaW1tXCIsXG4gIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICBcImJ1Z3NcIjoge1xuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2dyaW1tZHVkZS9NaWRpV3JpdGVySlMvaXNzdWVzXCJcbiAgfSxcbiAgXCJob21lcGFnZVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ncmltbWR1ZGUvTWlkaVdyaXRlckpTI3JlYWRtZVwiXG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9uYWxNaWRpID0gcmVxdWlyZSgndG9uYWwtbWlkaScpO1xuXG4vKipcbiAqIE1JREkgZmlsZSBmb3JtYXQgY29uc3RhbnRzLlxuICogQHJldHVybiB7Q29uc3RhbnRzfVxuICovXG52YXIgQ29uc3RhbnRzID0ge1xuICBWRVJTSU9OOiByZXF1aXJlKCcuLi9wYWNrYWdlLmpzb24nKS52ZXJzaW9uLFxuICBIRUFERVJfQ0hVTktfVFlQRTogWzB4NGQsIDB4NTQsIDB4NjgsIDB4NjRdLFxuICAvLyBNdGhkXG4gIEhFQURFUl9DSFVOS19MRU5HVEg6IFsweDAwLCAweDAwLCAweDAwLCAweDA2XSxcbiAgLy8gSGVhZGVyIHNpemUgZm9yIFNNRlxuICBIRUFERVJfQ0hVTktfRk9STUFUMDogWzB4MDAsIDB4MDBdLFxuICAvLyBNaWRpIFR5cGUgMCBpZFxuICBIRUFERVJfQ0hVTktfRk9STUFUMTogWzB4MDAsIDB4MDFdLFxuICAvLyBNaWRpIFR5cGUgMSBpZFxuICBIRUFERVJfQ0hVTktfRElWSVNJT046IFsweDAwLCAweDgwXSxcbiAgLy8gRGVmYXVsdHMgdG8gMTI4IHRpY2tzIHBlciBiZWF0XG4gIFRSQUNLX0NIVU5LX1RZUEU6IFsweDRkLCAweDU0LCAweDcyLCAweDZiXSxcbiAgLy8gTVRyayxcbiAgTUVUQV9FVkVOVF9JRDogMHhGRixcbiAgTUVUQV9URVhUX0lEOiAweDAxLFxuICBNRVRBX0NPUFlSSUdIVF9JRDogMHgwMixcbiAgTUVUQV9UUkFDS19OQU1FX0lEOiAweDAzLFxuICBNRVRBX0lOU1RSVU1FTlRfTkFNRV9JRDogMHgwNCxcbiAgTUVUQV9MWVJJQ19JRDogMHgwNSxcbiAgTUVUQV9NQVJLRVJfSUQ6IDB4MDYsXG4gIE1FVEFfQ1VFX1BPSU5UOiAweDA3LFxuICBNRVRBX1RFTVBPX0lEOiAweDUxLFxuICBNRVRBX1NNVFBFX09GRlNFVDogMHg1NCxcbiAgTUVUQV9USU1FX1NJR05BVFVSRV9JRDogMHg1OCxcbiAgTUVUQV9LRVlfU0lHTkFUVVJFX0lEOiAweDU5LFxuICBNRVRBX0VORF9PRl9UUkFDS19JRDogWzB4MkYsIDB4MDBdLFxuICBDT05UUk9MTEVSX0NIQU5HRV9TVEFUVVM6IDB4QjAsXG4gIC8vIGluY2x1ZGVzIGNoYW5uZWwgbnVtYmVyICgwKVxuICBQUk9HUkFNX0NIQU5HRV9TVEFUVVM6IDB4QzAsXG4gIC8vIGluY2x1ZGVzIGNoYW5uZWwgbnVtYmVyICgwKVxuICBQSVRDSF9CRU5EX1NUQVRVUzogMHhFMCAvLyBpbmNsdWRlcyBjaGFubmVsIG51bWJlciAoMClcblxufTtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxuZnVuY3Rpb24gX3dyYXBSZWdFeHAoKSB7XG4gIF93cmFwUmVnRXhwID0gZnVuY3Rpb24gKHJlLCBncm91cHMpIHtcbiAgICByZXR1cm4gbmV3IEJhYmVsUmVnRXhwKHJlLCB1bmRlZmluZWQsIGdyb3Vwcyk7XG4gIH07XG5cbiAgdmFyIF9zdXBlciA9IFJlZ0V4cC5wcm90b3R5cGU7XG5cbiAgdmFyIF9ncm91cHMgPSBuZXcgV2Vha01hcCgpO1xuXG4gIGZ1bmN0aW9uIEJhYmVsUmVnRXhwKHJlLCBmbGFncywgZ3JvdXBzKSB7XG4gICAgdmFyIF90aGlzID0gbmV3IFJlZ0V4cChyZSwgZmxhZ3MpO1xuXG4gICAgX2dyb3Vwcy5zZXQoX3RoaXMsIGdyb3VwcyB8fCBfZ3JvdXBzLmdldChyZSkpO1xuXG4gICAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihfdGhpcywgQmFiZWxSZWdFeHAucHJvdG90eXBlKTtcbiAgfVxuXG4gIF9pbmhlcml0cyhCYWJlbFJlZ0V4cCwgUmVnRXhwKTtcblxuICBCYWJlbFJlZ0V4cC5wcm90b3R5cGUuZXhlYyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICB2YXIgcmVzdWx0ID0gX3N1cGVyLmV4ZWMuY2FsbCh0aGlzLCBzdHIpO1xuXG4gICAgaWYgKHJlc3VsdCkgcmVzdWx0Lmdyb3VwcyA9IGJ1aWxkR3JvdXBzKHJlc3VsdCwgdGhpcyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBCYWJlbFJlZ0V4cC5wcm90b3R5cGVbU3ltYm9sLnJlcGxhY2VdID0gZnVuY3Rpb24gKHN0ciwgc3Vic3RpdHV0aW9uKSB7XG4gICAgaWYgKHR5cGVvZiBzdWJzdGl0dXRpb24gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHZhciBncm91cHMgPSBfZ3JvdXBzLmdldCh0aGlzKTtcblxuICAgICAgcmV0dXJuIF9zdXBlcltTeW1ib2wucmVwbGFjZV0uY2FsbCh0aGlzLCBzdHIsIHN1YnN0aXR1dGlvbi5yZXBsYWNlKC9cXCQ8KFtePl0rKT4vZywgZnVuY3Rpb24gKF8sIG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIFwiJFwiICsgZ3JvdXBzW25hbWVdO1xuICAgICAgfSkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHN1YnN0aXR1dGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gX3N1cGVyW1N5bWJvbC5yZXBsYWNlXS5jYWxsKHRoaXMsIHN0ciwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcblxuICAgICAgICBpZiAodHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3MpO1xuICAgICAgICAgIGFyZ3MucHVzaChidWlsZEdyb3VwcyhhcmdzLCBfdGhpcykpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1YnN0aXR1dGlvbi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gX3N1cGVyW1N5bWJvbC5yZXBsYWNlXS5jYWxsKHRoaXMsIHN0ciwgc3Vic3RpdHV0aW9uKTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gYnVpbGRHcm91cHMocmVzdWx0LCByZSkge1xuICAgIHZhciBnID0gX2dyb3Vwcy5nZXQocmUpO1xuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGcpLnJlZHVjZShmdW5jdGlvbiAoZ3JvdXBzLCBuYW1lKSB7XG4gICAgICBncm91cHNbbmFtZV0gPSByZXN1bHRbZ1tuYW1lXV07XG4gICAgICByZXR1cm4gZ3JvdXBzO1xuICAgIH0sIE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICB9XG5cbiAgcmV0dXJuIF93cmFwUmVnRXhwLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbi8qKlxuICogU3RhdGljIHV0aWxpdHkgZnVuY3Rpb25zIHVzZWQgdGhyb3VnaG91dCB0aGUgbGlicmFyeS5cbiAqL1xuXG52YXIgVXRpbHMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBVdGlscygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVXRpbHMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFV0aWxzLCBudWxsLCBbe1xuICAgIGtleTogXCJ2ZXJzaW9uXCIsXG4gICAgdmFsdWU6XG4gICAgLyoqXG4gICAgICogR2V0cyBNaWRpV3JpdGVySlMgdmVyc2lvbiBudW1iZXIuXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHZlcnNpb24oKSB7XG4gICAgICByZXR1cm4gQ29uc3RhbnRzLlZFUlNJT047XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnQgYSBzdHJpbmcgdG8gYW4gYXJyYXkgb2YgYnl0ZXNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gICAgICogQHJldHVybiB7YXJyYXl9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzdHJpbmdUb0J5dGVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0cmluZ1RvQnl0ZXMoc3RyaW5nKSB7XG4gICAgICByZXR1cm4gc3RyaW5nLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24gKF9jaGFyKSB7XG4gICAgICAgIHJldHVybiBfY2hhci5jaGFyQ29kZUF0KCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIGFyZ3VtZW50IGlzIGEgdmFsaWQgbnVtYmVyLlxuICAgICAqIEBwYXJhbSB7Kn0gbiAtIFZhbHVlIHRvIGNoZWNrXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImlzTnVtZXJpY1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc051bWVyaWMobikge1xuICAgICAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KG4pKSAmJiBpc0Zpbml0ZShuKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY29ycmVjdCBNSURJIG51bWJlciBmb3IgdGhlIHNwZWNpZmllZCBwaXRjaC5cbiAgICAgKiBVc2VzIFRvbmFsIE1pZGkgLSBodHRwczovL2dpdGh1Yi5jb20vZGFuaWdiL3RvbmFsL3RyZWUvbWFzdGVyL3BhY2thZ2VzL21pZGlcbiAgICAgKiBAcGFyYW0geyhzdHJpbmd8bnVtYmVyKX0gcGl0Y2ggLSAnQyM0JyBvciBtaWRpIG5vdGUgY29kZVxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFBpdGNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFBpdGNoKHBpdGNoKSB7XG4gICAgICByZXR1cm4gdG9uYWxNaWRpLnRvTWlkaShwaXRjaCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRyYW5zbGF0ZXMgbnVtYmVyIG9mIHRpY2tzIHRvIE1JREkgdGltZXN0YW1wIGZvcm1hdCwgcmV0dXJuaW5nIGFuIGFycmF5IG9mXG4gICAgICogaGV4IHN0cmluZ3Mgd2l0aCB0aGUgdGltZSB2YWx1ZXMuIE1pZGkgaGFzIGEgdmVyeSBwYXJ0aWN1bGFyIHRpbWUgdG8gZXhwcmVzcyB0aW1lLFxuICAgICAqIHRha2UgYSBnb29kIGxvb2sgYXQgdGhlIHNwZWMgYmVmb3JlIGV2ZXIgdG91Y2hpbmcgdGhpcyBmdW5jdGlvbi5cbiAgICAgKiBUaGFua3MgdG8gaHR0cHM6Ly9naXRodWIuY29tL3NlcmdpL2pzbWlkaVxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpY2tzIC0gTnVtYmVyIG9mIHRpY2tzIHRvIGJlIHRyYW5zbGF0ZWRcbiAgICAgKiBAcmV0dXJuIHthcnJheX0gLSBCeXRlcyB0aGF0IGZvcm0gdGhlIE1JREkgdGltZSB2YWx1ZVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibnVtYmVyVG9WYXJpYWJsZUxlbmd0aFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBudW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRpY2tzKSB7XG4gICAgICB0aWNrcyA9IE1hdGgucm91bmQodGlja3MpO1xuICAgICAgdmFyIGJ1ZmZlciA9IHRpY2tzICYgMHg3RjtcblxuICAgICAgd2hpbGUgKHRpY2tzID0gdGlja3MgPj4gNykge1xuICAgICAgICBidWZmZXIgPDw9IDg7XG4gICAgICAgIGJ1ZmZlciB8PSB0aWNrcyAmIDB4N0YgfCAweDgwO1xuICAgICAgfVxuXG4gICAgICB2YXIgYkxpc3QgPSBbXTtcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgYkxpc3QucHVzaChidWZmZXIgJiAweGZmKTtcbiAgICAgICAgaWYgKGJ1ZmZlciAmIDB4ODApIGJ1ZmZlciA+Pj0gODtlbHNlIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYkxpc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvdW50cyBudW1iZXIgb2YgYnl0ZXMgaW4gc3RyaW5nXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNcbiAgICAgKiBAcmV0dXJuIHthcnJheX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInN0cmluZ0J5dGVDb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdHJpbmdCeXRlQ291bnQocykge1xuICAgICAgcmV0dXJuIGVuY29kZVVSSShzKS5zcGxpdCgvJS4ufC4vKS5sZW5ndGggLSAxO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgYW4gaW50IGZyb20gYW4gYXJyYXkgb2YgYnl0ZXMuXG4gICAgICogQHBhcmFtIHthcnJheX0gYnl0ZXNcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJudW1iZXJGcm9tQnl0ZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbnVtYmVyRnJvbUJ5dGVzKGJ5dGVzKSB7XG4gICAgICB2YXIgaGV4ID0gJyc7XG4gICAgICB2YXIgc3RyaW5nUmVzdWx0O1xuICAgICAgYnl0ZXMuZm9yRWFjaChmdW5jdGlvbiAoX2J5dGUpIHtcbiAgICAgICAgc3RyaW5nUmVzdWx0ID0gX2J5dGUudG9TdHJpbmcoMTYpOyAvLyBlbnN1cmUgc3RyaW5nIGlzIDIgY2hhcnNcblxuICAgICAgICBpZiAoc3RyaW5nUmVzdWx0Lmxlbmd0aCA9PSAxKSBzdHJpbmdSZXN1bHQgPSBcIjBcIiArIHN0cmluZ1Jlc3VsdDtcbiAgICAgICAgaGV4ICs9IHN0cmluZ1Jlc3VsdDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHBhcnNlSW50KGhleCwgMTYpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUYWtlcyBhIG51bWJlciBhbmQgc3BsaXRzIGl0IHVwIGludG8gYW4gYXJyYXkgb2YgYnl0ZXMuICBDYW4gYmUgcGFkZGVkIGJ5IHBhc3NpbmcgYSBudW1iZXIgdG8gYnl0ZXNOZWVkZWRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGJ5dGVzTmVlZGVkXG4gICAgICogQHJldHVybiB7YXJyYXl9IC0gQXJyYXkgb2YgYnl0ZXNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm51bWJlclRvQnl0ZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbnVtYmVyVG9CeXRlcyhudW1iZXIsIGJ5dGVzTmVlZGVkKSB7XG4gICAgICBieXRlc05lZWRlZCA9IGJ5dGVzTmVlZGVkIHx8IDE7XG4gICAgICB2YXIgaGV4U3RyaW5nID0gbnVtYmVyLnRvU3RyaW5nKDE2KTtcblxuICAgICAgaWYgKGhleFN0cmluZy5sZW5ndGggJiAxKSB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSBoZXggc3RyaW5nIGlzIGV2ZW4gbnVtYmVyIG9mIGNoYXJzXG4gICAgICAgIGhleFN0cmluZyA9ICcwJyArIGhleFN0cmluZztcbiAgICAgIH0gLy8gU3BsaXQgaGV4IHN0cmluZyBpbnRvIGFuIGFycmF5IG9mIHR3byBjaGFyIGVsZW1lbnRzXG5cblxuICAgICAgdmFyIGhleEFycmF5ID0gaGV4U3RyaW5nLm1hdGNoKC8uezJ9L2cpOyAvLyBOb3cgcGFyc2UgdGhlbSBvdXQgYXMgaW50ZWdlcnNcblxuICAgICAgaGV4QXJyYXkgPSBoZXhBcnJheS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGl0ZW0sIDE2KTtcbiAgICAgIH0pOyAvLyBQcmVwZW5kIGVtcHR5IGJ5dGVzIGlmIHdlIGRvbid0IGhhdmUgZW5vdWdoXG5cbiAgICAgIGlmIChoZXhBcnJheS5sZW5ndGggPCBieXRlc05lZWRlZCkge1xuICAgICAgICB3aGlsZSAoYnl0ZXNOZWVkZWQgLSBoZXhBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaGV4QXJyYXkudW5zaGlmdCgwKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaGV4QXJyYXk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIHZhbHVlIHRvIGFycmF5IGlmIG5lZWRlZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHthcnJheX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInRvQXJyYXlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9BcnJheSh2YWx1ZSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgICByZXR1cm4gW3ZhbHVlXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgdmVsb2NpdHkgdG8gdmFsdWUgMC0xMjdcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmVsb2NpdHkgLSBWZWxvY2l0eSB2YWx1ZSAxLTEwMFxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNvbnZlcnRWZWxvY2l0eVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb252ZXJ0VmVsb2NpdHkodmVsb2NpdHkpIHtcbiAgICAgIC8vIE1heCBwYXNzZWQgdmFsdWUgbGltaXRlZCB0byAxMDBcbiAgICAgIHZlbG9jaXR5ID0gdmVsb2NpdHkgPiAxMDAgPyAxMDAgOiB2ZWxvY2l0eTtcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKHZlbG9jaXR5IC8gMTAwICogMTI3KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgdG90YWwgbnVtYmVyIG9mIHRpY2tzIG9mIGEgc3BlY2lmaWVkIGR1cmF0aW9uLlxuICAgICAqIE5vdGU6IHR5cGU9PSdub3RlJyBkZWZhdWx0cyB0byBxdWFydGVyIG5vdGUsIHR5cGU9PT0ncmVzdCcgZGVmYXVsdHMgdG8gMFxuICAgICAqIEBwYXJhbSB7KHN0cmluZ3xhcnJheSl9IGR1cmF0aW9uXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0VGlja0R1cmF0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRpY2tEdXJhdGlvbihkdXJhdGlvbikge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZHVyYXRpb24pKSB7XG4gICAgICAgIC8vIFJlY3Vyc2l2ZWx5IGV4ZWN1dGUgdGhpcyBtZXRob2QgZm9yIGVhY2ggaXRlbSBpbiB0aGUgYXJyYXkgYW5kIHJldHVybiB0aGUgc3VtIG9mIHRpY2sgZHVyYXRpb25zLlxuICAgICAgICByZXR1cm4gZHVyYXRpb24ubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBVdGlscy5nZXRUaWNrRHVyYXRpb24odmFsdWUpO1xuICAgICAgICB9KS5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICByZXR1cm4gYSArIGI7XG4gICAgICAgIH0sIDApO1xuICAgICAgfVxuXG4gICAgICBkdXJhdGlvbiA9IGR1cmF0aW9uLnRvU3RyaW5nKCk7XG5cbiAgICAgIGlmIChkdXJhdGlvbi50b0xvd2VyQ2FzZSgpLmNoYXJBdCgwKSA9PT0gJ3QnKSB7XG4gICAgICAgIC8vIElmIGR1cmF0aW9uIHN0YXJ0cyB3aXRoICd0JyB0aGVuIHRoZSBudW1iZXIgdGhhdCBmb2xsb3dzIGlzIGFuIGV4cGxpY2l0IHRpY2sgY291bnRcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGR1cmF0aW9uLnN1YnN0cmluZygxKSk7XG4gICAgICB9IC8vIE5lZWQgdG8gYXBwbHkgZHVyYXRpb24gaGVyZS4gIFF1YXJ0ZXIgbm90ZSA9PSBDb25zdGFudHMuSEVBREVSX0NIVU5LX0RJVklTSU9OXG5cblxuICAgICAgdmFyIHF1YXJ0ZXJUaWNrcyA9IFV0aWxzLm51bWJlckZyb21CeXRlcyhDb25zdGFudHMuSEVBREVSX0NIVU5LX0RJVklTSU9OKTtcbiAgICAgIHZhciB0aWNrRHVyYXRpb24gPSBxdWFydGVyVGlja3MgKiBVdGlscy5nZXREdXJhdGlvbk11bHRpcGxpZXIoZHVyYXRpb24pO1xuICAgICAgcmV0dXJuIFV0aWxzLmdldFJvdW5kZWRJZkNsb3NlKHRpY2tEdXJhdGlvbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIER1ZSB0byByb3VuZGluZyBlcnJvcnMgaW4gSmF2YVNjcmlwdCBlbmdpbmVzLFxuICAgICAqIGl0J3Mgc2FmZSB0byByb3VuZCB3aGVuIHdlJ3JlIHZlcnkgY2xvc2UgdG8gdGhlIGFjdHVhbCB0aWNrIG51bWJlclxuICAgICAqXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aWNrXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Um91bmRlZElmQ2xvc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Um91bmRlZElmQ2xvc2UodGljaykge1xuICAgICAgdmFyIHJvdW5kZWRUaWNrID0gTWF0aC5yb3VuZCh0aWNrKTtcbiAgICAgIHJldHVybiBNYXRoLmFicyhyb3VuZGVkVGljayAtIHRpY2spIDwgMC4wMDAwMDEgPyByb3VuZGVkVGljayA6IHRpY2s7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIER1ZSB0byBsb3cgcHJlY2lzaW9uIG9mIE1JREksXG4gICAgICogd2UgbmVlZCB0byBrZWVwIHRyYWNrIG9mIHJvdW5kaW5nIGVycm9ycyBpbiBkZWx0YXMuXG4gICAgICogVGhpcyBmdW5jdGlvbiB3aWxsIGNhbGN1bGF0ZSB0aGUgcm91bmRpbmcgZXJyb3IgZm9yIGEgZ2l2ZW4gZHVyYXRpb24uXG4gICAgICpcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpY2tcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRQcmVjaXNpb25Mb3NzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFByZWNpc2lvbkxvc3ModGljaykge1xuICAgICAgdmFyIHJvdW5kZWRUaWNrID0gTWF0aC5yb3VuZCh0aWNrKTtcbiAgICAgIHJldHVybiByb3VuZGVkVGljayAtIHRpY2s7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgd2hhdCB0byBtdWx0aXBsZSB0aWNrcy9xdWFydGVyIG5vdGUgYnkgdG8gZ2V0IHRoZSBzcGVjaWZpZWQgZHVyYXRpb24uXG4gICAgICogTm90ZTogdHlwZT09J25vdGUnIGRlZmF1bHRzIHRvIHF1YXJ0ZXIgbm90ZSwgdHlwZT09PSdyZXN0JyBkZWZhdWx0cyB0byAwXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGR1cmF0aW9uXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0RHVyYXRpb25NdWx0aXBsaWVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldER1cmF0aW9uTXVsdGlwbGllcihkdXJhdGlvbikge1xuICAgICAgLy8gTmVlZCB0byBhcHBseSBkdXJhdGlvbiBoZXJlLlxuICAgICAgLy8gUXVhcnRlciBub3RlID09IENvbnN0YW50cy5IRUFERVJfQ0hVTktfRElWSVNJT04gdGlja3MuXG4gICAgICBpZiAoZHVyYXRpb24gPT09ICcwJykgcmV0dXJuIDA7XG4gICAgICB2YXIgbWF0Y2ggPSBkdXJhdGlvbi5tYXRjaCggLyojX19QVVJFX18qL193cmFwUmVnRXhwKC9eKGQrKT8oWzAtOV0rKSg/OnQoWzAtOV0qKSk/Lywge1xuICAgICAgICBkb3R0ZWQ6IDEsXG4gICAgICAgIGJhc2U6IDIsXG4gICAgICAgIHR1cGxldDogM1xuICAgICAgfSkpO1xuXG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgdmFyIGJhc2UgPSBOdW1iZXIobWF0Y2guZ3JvdXBzLmJhc2UpOyAvLyAxIG9yIGFueSBwb3dlciBvZiB0d286XG5cbiAgICAgICAgdmFyIGlzVmFsaWRCYXNlID0gYmFzZSA9PT0gMSB8fCAoYmFzZSAmIGJhc2UgLSAxKSA9PT0gMDtcblxuICAgICAgICBpZiAoaXNWYWxpZEJhc2UpIHtcbiAgICAgICAgICAvLyBob3cgbXVjaCBmYXN0ZXIgb3Igc2xvd2VyIGlzIHRoaXMgbm90ZSBjb21wYXJlZCB0byBhIHF1YXJ0ZXI/XG4gICAgICAgICAgdmFyIHJhdGlvID0gYmFzZSAvIDQ7XG4gICAgICAgICAgdmFyIGR1cmF0aW9uSW5RdWFydGVycyA9IDEgLyByYXRpbztcbiAgICAgICAgICB2YXIgX21hdGNoJGdyb3VwcyA9IG1hdGNoLmdyb3VwcyxcbiAgICAgICAgICAgICAgZG90dGVkID0gX21hdGNoJGdyb3Vwcy5kb3R0ZWQsXG4gICAgICAgICAgICAgIHR1cGxldCA9IF9tYXRjaCRncm91cHMudHVwbGV0O1xuXG4gICAgICAgICAgaWYgKGRvdHRlZCkge1xuICAgICAgICAgICAgdmFyIHRoaXNNYW55RG90cyA9IGRvdHRlZC5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgZGl2aXNvciA9IE1hdGgucG93KDIsIHRoaXNNYW55RG90cyk7XG4gICAgICAgICAgICBkdXJhdGlvbkluUXVhcnRlcnMgPSBkdXJhdGlvbkluUXVhcnRlcnMgKyBkdXJhdGlvbkluUXVhcnRlcnMgKiAoKGRpdmlzb3IgLSAxKSAvIGRpdmlzb3IpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2YgdHVwbGV0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFyIGZpdEludG8gPSBkdXJhdGlvbkluUXVhcnRlcnMgKiAyOyAvLyBkZWZhdWx0IHRvIHRyaXBsZXQ6XG5cbiAgICAgICAgICAgIHZhciB0aGlzTWFueU5vdGVzID0gTnVtYmVyKHR1cGxldCB8fCAnMycpO1xuICAgICAgICAgICAgZHVyYXRpb25JblF1YXJ0ZXJzID0gZml0SW50byAvIHRoaXNNYW55Tm90ZXM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGR1cmF0aW9uSW5RdWFydGVycztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZHVyYXRpb24gKyAnIGlzIG5vdCBhIHZhbGlkIGR1cmF0aW9uLicpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBVdGlscztcbn0oKTtcblxuLyoqXG4gKiBIb2xkcyBhbGwgZGF0YSBmb3IgYSBcIm5vdGUgb25cIiBNSURJIGV2ZW50XG4gKiBAcGFyYW0ge29iamVjdH0gZmllbGRzIHtkYXRhOiBbXX1cbiAqIEByZXR1cm4ge05vdGVPbkV2ZW50fVxuICovXG5cbnZhciBOb3RlT25FdmVudCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE5vdGVPbkV2ZW50KGZpZWxkcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb3RlT25FdmVudCk7XG5cbiAgICAvLyBTZXQgZGVmYXVsdCBmaWVsZHNcbiAgICBmaWVsZHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNoYW5uZWw6IDEsXG4gICAgICBzdGFydFRpY2s6IG51bGwsXG4gICAgICB2ZWxvY2l0eTogNTAsXG4gICAgICB3YWl0OiAwXG4gICAgfSwgZmllbGRzKTtcbiAgICB0aGlzLnR5cGUgPSAnbm90ZS1vbic7XG4gICAgdGhpcy5jaGFubmVsID0gZmllbGRzLmNoYW5uZWw7XG4gICAgdGhpcy5waXRjaCA9IGZpZWxkcy5waXRjaDtcbiAgICB0aGlzLndhaXQgPSBmaWVsZHMud2FpdDtcbiAgICB0aGlzLnZlbG9jaXR5ID0gZmllbGRzLnZlbG9jaXR5O1xuICAgIHRoaXMuc3RhcnRUaWNrID0gZmllbGRzLnN0YXJ0VGljaztcbiAgICB0aGlzLm1pZGlOdW1iZXIgPSBVdGlscy5nZXRQaXRjaCh0aGlzLnBpdGNoKTtcbiAgICB0aGlzLnRpY2sgPSBudWxsO1xuICAgIHRoaXMuZGVsdGEgPSBudWxsO1xuICAgIHRoaXMuZGF0YSA9IGZpZWxkcy5kYXRhO1xuICB9XG4gIC8qKlxuICAgKiBCdWlsZHMgaW50IGFycmF5IGZvciB0aGlzIGV2ZW50LlxuICAgKiBAcGFyYW0ge1RyYWNrfSB0cmFjayAtIHBhcmVudCB0cmFja1xuICAgKiBAcmV0dXJuIHtOb3RlT25FdmVudH1cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoTm90ZU9uRXZlbnQsIFt7XG4gICAga2V5OiBcImJ1aWxkRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBidWlsZERhdGEodHJhY2ssIHByZWNpc2lvbkRlbHRhKSB7XG4gICAgICB0aGlzLmRhdGEgPSBbXTsgLy8gRXhwbGljaXRseSBkZWZpbmVkIHN0YXJ0VGljayBldmVudFxuXG4gICAgICBpZiAodGhpcy5zdGFydFRpY2spIHtcbiAgICAgICAgdGhpcy50aWNrID0gVXRpbHMuZ2V0Um91bmRlZElmQ2xvc2UodGhpcy5zdGFydFRpY2spOyAvLyBJZiB0aGlzIGlzIHRoZSBmaXJzdCBldmVudCBpbiB0aGUgdHJhY2sgdGhlbiB1c2UgZXZlbnQncyBzdGFydGluZyB0aWNrIGFzIGRlbHRhLlxuXG4gICAgICAgIGlmICh0cmFjay50aWNrUG9pbnRlciA9PSAwKSB7XG4gICAgICAgICAgdGhpcy5kZWx0YSA9IHRoaXMudGljaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kZWx0YSA9IFV0aWxzLmdldFRpY2tEdXJhdGlvbih0aGlzLndhaXQpO1xuICAgICAgICB0aGlzLnRpY2sgPSBVdGlscy5nZXRSb3VuZGVkSWZDbG9zZSh0cmFjay50aWNrUG9pbnRlciArIHRoaXMuZGVsdGEpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRlbHRhV2l0aFByZWNpc2lvbkNvcnJlY3Rpb24gPSBVdGlscy5nZXRSb3VuZGVkSWZDbG9zZSh0aGlzLmRlbHRhIC0gcHJlY2lzaW9uRGVsdGEpO1xuICAgICAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0aGlzLmRlbHRhV2l0aFByZWNpc2lvbkNvcnJlY3Rpb24pLmNvbmNhdCh0aGlzLmdldFN0YXR1c0J5dGUoKSwgdGhpcy5taWRpTnVtYmVyLCBVdGlscy5jb252ZXJ0VmVsb2NpdHkodGhpcy52ZWxvY2l0eSkpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIG5vdGUgb24gc3RhdHVzIGNvZGUgYmFzZWQgb24gdGhlIHNlbGVjdGVkIGNoYW5uZWwuIDB4OXswLUZ9XG4gICAgICogTm90ZSBvbiBhdCBjaGFubmVsIDAgaXMgMHg5MCAoMTQ0KVxuICAgICAqIDAgPSBDaCAxXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U3RhdHVzQnl0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTdGF0dXNCeXRlKCkge1xuICAgICAgcmV0dXJuIDE0NCArIHRoaXMuY2hhbm5lbCAtIDE7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE5vdGVPbkV2ZW50O1xufSgpO1xuXG4vKipcbiAqIEhvbGRzIGFsbCBkYXRhIGZvciBhIFwibm90ZSBvZmZcIiBNSURJIGV2ZW50XG4gKiBAcGFyYW0ge29iamVjdH0gZmllbGRzIHtkYXRhOiBbXX1cbiAqIEByZXR1cm4ge05vdGVPZmZFdmVudH1cbiAqL1xuXG52YXIgTm90ZU9mZkV2ZW50ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTm90ZU9mZkV2ZW50KGZpZWxkcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb3RlT2ZmRXZlbnQpO1xuXG4gICAgLy8gU2V0IGRlZmF1bHQgZmllbGRzXG4gICAgZmllbGRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjaGFubmVsOiAxLFxuICAgICAgdmVsb2NpdHk6IDUwLFxuICAgICAgdGljazogbnVsbFxuICAgIH0sIGZpZWxkcyk7XG4gICAgdGhpcy50eXBlID0gJ25vdGUtb2ZmJztcbiAgICB0aGlzLmNoYW5uZWwgPSBmaWVsZHMuY2hhbm5lbDtcbiAgICB0aGlzLnBpdGNoID0gZmllbGRzLnBpdGNoO1xuICAgIHRoaXMuZHVyYXRpb24gPSBmaWVsZHMuZHVyYXRpb247XG4gICAgdGhpcy52ZWxvY2l0eSA9IGZpZWxkcy52ZWxvY2l0eTtcbiAgICB0aGlzLm1pZGlOdW1iZXIgPSBVdGlscy5nZXRQaXRjaCh0aGlzLnBpdGNoKTtcbiAgICB0aGlzLnRpY2sgPSBmaWVsZHMudGljaztcbiAgICB0aGlzLmRlbHRhID0gVXRpbHMuZ2V0VGlja0R1cmF0aW9uKHRoaXMuZHVyYXRpb24pO1xuICAgIHRoaXMuZGF0YSA9IGZpZWxkcy5kYXRhO1xuICB9XG4gIC8qKlxuICAgKiBCdWlsZHMgaW50IGFycmF5IGZvciB0aGlzIGV2ZW50LlxuICAgKiBAcGFyYW0ge1RyYWNrfSB0cmFjayAtIHBhcmVudCB0cmFja1xuICAgKiBAcmV0dXJuIHtOb3RlT2ZmRXZlbnR9XG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKE5vdGVPZmZFdmVudCwgW3tcbiAgICBrZXk6IFwiYnVpbGREYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJ1aWxkRGF0YSh0cmFjaywgcHJlY2lzaW9uRGVsdGEpIHtcbiAgICAgIGlmICh0aGlzLnRpY2sgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy50aWNrID0gVXRpbHMuZ2V0Um91bmRlZElmQ2xvc2UodGhpcy5kZWx0YSArIHRyYWNrLnRpY2tQb2ludGVyKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kZWx0YVdpdGhQcmVjaXNpb25Db3JyZWN0aW9uID0gVXRpbHMuZ2V0Um91bmRlZElmQ2xvc2UodGhpcy5kZWx0YSAtIHByZWNpc2lvbkRlbHRhKTtcbiAgICAgIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgodGhpcy5kZWx0YVdpdGhQcmVjaXNpb25Db3JyZWN0aW9uKS5jb25jYXQodGhpcy5nZXRTdGF0dXNCeXRlKCksIHRoaXMubWlkaU51bWJlciwgVXRpbHMuY29udmVydFZlbG9jaXR5KHRoaXMudmVsb2NpdHkpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBub3RlIG9mZiBzdGF0dXMgY29kZSBiYXNlZCBvbiB0aGUgc2VsZWN0ZWQgY2hhbm5lbC4gMHg4ezAtRn1cbiAgICAgKiBOb3RlIG9mZiBhdCBjaGFubmVsIDAgaXMgMHg4MCAoMTI4KVxuICAgICAqIDAgPSBDaCAxXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U3RhdHVzQnl0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTdGF0dXNCeXRlKCkge1xuICAgICAgcmV0dXJuIDEyOCArIHRoaXMuY2hhbm5lbCAtIDE7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE5vdGVPZmZFdmVudDtcbn0oKTtcblxuLyoqXG4gKiBXcmFwcGVyIGZvciBub3RlT25FdmVudC9ub3RlT2ZmRXZlbnQgb2JqZWN0cyB0aGF0IGJ1aWxkcyBib3RoIGV2ZW50cy5cbiAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZHMgLSB7cGl0Y2g6ICdbQzRdJywgZHVyYXRpb246ICc0Jywgd2FpdDogJzQnLCB2ZWxvY2l0eTogMS0xMDB9XG4gKiBAcmV0dXJuIHtOb3RlRXZlbnR9XG4gKi9cblxudmFyIE5vdGVFdmVudCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE5vdGVFdmVudChmaWVsZHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTm90ZUV2ZW50KTtcblxuICAgIC8vIFNldCBkZWZhdWx0IGZpZWxkc1xuICAgIGZpZWxkcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2hhbm5lbDogMSxcbiAgICAgIHJlcGVhdDogMSxcbiAgICAgIHNlcXVlbnRpYWw6IGZhbHNlLFxuICAgICAgc3RhcnRUaWNrOiBudWxsLFxuICAgICAgdmVsb2NpdHk6IDUwLFxuICAgICAgd2FpdDogMFxuICAgIH0sIGZpZWxkcyk7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgdGhpcy50eXBlID0gJ25vdGUnO1xuICAgIHRoaXMucGl0Y2ggPSBVdGlscy50b0FycmF5KGZpZWxkcy5waXRjaCk7XG4gICAgdGhpcy5jaGFubmVsID0gZmllbGRzLmNoYW5uZWw7XG4gICAgdGhpcy5kdXJhdGlvbiA9IGZpZWxkcy5kdXJhdGlvbjtcbiAgICB0aGlzLmdyYWNlID0gZmllbGRzLmdyYWNlO1xuICAgIHRoaXMucmVwZWF0ID0gZmllbGRzLnJlcGVhdDtcbiAgICB0aGlzLnNlcXVlbnRpYWwgPSBmaWVsZHMuc2VxdWVudGlhbDtcbiAgICB0aGlzLnN0YXJ0VGljayA9IGZpZWxkcy5zdGFydFRpY2s7XG4gICAgdGhpcy52ZWxvY2l0eSA9IGZpZWxkcy52ZWxvY2l0eTtcbiAgICB0aGlzLndhaXQgPSBmaWVsZHMud2FpdDtcbiAgICB0aGlzLnRpY2tEdXJhdGlvbiA9IFV0aWxzLmdldFRpY2tEdXJhdGlvbih0aGlzLmR1cmF0aW9uKTtcbiAgICB0aGlzLnJlc3REdXJhdGlvbiA9IFV0aWxzLmdldFRpY2tEdXJhdGlvbih0aGlzLndhaXQpO1xuICAgIHRoaXMuZXZlbnRzID0gW107IC8vIEhvbGQgYWN0dWFsIE5vdGVPbi9Ob3RlT2ZmIGV2ZW50c1xuICB9XG4gIC8qKlxuICAgKiBCdWlsZHMgaW50IGFycmF5IGZvciB0aGlzIGV2ZW50LlxuICAgKiBAcmV0dXJuIHtOb3RlRXZlbnR9XG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKE5vdGVFdmVudCwgW3tcbiAgICBrZXk6IFwiYnVpbGREYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJ1aWxkRGF0YSgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIC8vIFJlc2V0IGRhdGEgYXJyYXlcbiAgICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICAgdGhpcy50aWNrRHVyYXRpb247XG4gICAgICB0aGlzLnJlc3REdXJhdGlvbjsgLy8gQXBwbHkgZ3JhY2Ugbm90ZShzKSBhbmQgc3VidHJhY3QgdGlja3MgKGN1cnJlbnRseSAxIHRpY2sgcGVyIGdyYWNlIG5vdGUpIGZyb20gdGlja0R1cmF0aW9uIHNvIG5ldCB2YWx1ZSBpcyB0aGUgc2FtZVxuXG4gICAgICBpZiAodGhpcy5ncmFjZSkge1xuICAgICAgICB2YXIgZ3JhY2VEdXJhdGlvbiA9IDE7XG4gICAgICAgIHRoaXMuZ3JhY2UgPSBVdGlscy50b0FycmF5KHRoaXMuZ3JhY2UpO1xuICAgICAgICB0aGlzLmdyYWNlLmZvckVhY2goZnVuY3Rpb24gKHBpdGNoKSB7XG4gICAgICAgICAgdmFyIG5vdGVFdmVudCA9IG5ldyBOb3RlRXZlbnQoe1xuICAgICAgICAgICAgcGl0Y2g6IF90aGlzLmdyYWNlLFxuICAgICAgICAgICAgZHVyYXRpb246ICdUJyArIGdyYWNlRHVyYXRpb25cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBfdGhpcy5kYXRhID0gX3RoaXMuZGF0YS5jb25jYXQobm90ZUV2ZW50LmRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgIH0gLy8gZmllbGRzLnBpdGNoIGNvdWxkIGJlIGFuIGFycmF5IG9mIHBpdGNoZXMuXG4gICAgICAvLyBJZiB0aGlzLnNlcXVlbnRpYWwgPT09IHRydWUgdGhlbiBpdCdzIGEgc2VxdWVudGlhbCBzdHJpbmcgb2Ygbm90ZXMgdGhhdCByZXF1aXJlcyBzZXBhcmF0ZSBOb3RlT25FdmVudHMuXG5cbiAgICAgIGlmICghdGhpcy5zZXF1ZW50aWFsKSB7XG4gICAgICAgIC8vIEhhbmRsZSByZXBlYXRcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLnJlcGVhdDsgaisrKSB7XG4gICAgICAgICAgLy8gTm90ZSBvblxuICAgICAgICAgIHRoaXMucGl0Y2guZm9yRWFjaChmdW5jdGlvbiAocCwgaSkge1xuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICB2YXIgbm90ZU9uTmV3ID0gbmV3IE5vdGVPbkV2ZW50KHtcbiAgICAgICAgICAgICAgICBjaGFubmVsOiBfdGhpcy5jaGFubmVsLFxuICAgICAgICAgICAgICAgIHdhaXQ6IF90aGlzLndhaXQsXG4gICAgICAgICAgICAgICAgdmVsb2NpdHk6IF90aGlzLnZlbG9jaXR5LFxuICAgICAgICAgICAgICAgIHBpdGNoOiBwLFxuICAgICAgICAgICAgICAgIHN0YXJ0VGljazogX3RoaXMuc3RhcnRUaWNrXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gUnVubmluZyBzdGF0dXMgKGNhbiBvbW1pdCB0aGUgbm90ZSBvbiBzdGF0dXMpXG4gICAgICAgICAgICAgIC8vbm90ZU9uID0gbmV3IE5vdGVPbkV2ZW50KHtkYXRhOiBbMCwgVXRpbHMuZ2V0UGl0Y2gocCksIFV0aWxzLmNvbnZlcnRWZWxvY2l0eSh0aGlzLnZlbG9jaXR5KV19KTtcbiAgICAgICAgICAgICAgdmFyIG5vdGVPbk5ldyA9IG5ldyBOb3RlT25FdmVudCh7XG4gICAgICAgICAgICAgICAgY2hhbm5lbDogX3RoaXMuY2hhbm5lbCxcbiAgICAgICAgICAgICAgICB3YWl0OiAwLFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5OiBfdGhpcy52ZWxvY2l0eSxcbiAgICAgICAgICAgICAgICBwaXRjaDogcCxcbiAgICAgICAgICAgICAgICBzdGFydFRpY2s6IF90aGlzLnN0YXJ0VGlja1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX3RoaXMuZXZlbnRzLnB1c2gobm90ZU9uTmV3KTtcbiAgICAgICAgICB9KTsgLy8gTm90ZSBvZmZcblxuICAgICAgICAgIHRoaXMucGl0Y2guZm9yRWFjaChmdW5jdGlvbiAocCwgaSkge1xuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAvL25vdGVPZmYgPSBuZXcgTm90ZU9mZkV2ZW50KHtkYXRhOiBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRpY2tEdXJhdGlvbikuY29uY2F0KHRoaXMuZ2V0Tm90ZU9mZlN0YXR1cygpLCBVdGlscy5nZXRQaXRjaChwKSwgVXRpbHMuY29udmVydFZlbG9jaXR5KHRoaXMudmVsb2NpdHkpKX0pO1xuICAgICAgICAgICAgICB2YXIgbm90ZU9mZk5ldyA9IG5ldyBOb3RlT2ZmRXZlbnQoe1xuICAgICAgICAgICAgICAgIGNoYW5uZWw6IF90aGlzLmNoYW5uZWwsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IF90aGlzLmR1cmF0aW9uLFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5OiBfdGhpcy52ZWxvY2l0eSxcbiAgICAgICAgICAgICAgICBwaXRjaDogcCxcbiAgICAgICAgICAgICAgICB0aWNrOiBfdGhpcy5zdGFydFRpY2sgIT09IG51bGwgPyBVdGlscy5nZXRUaWNrRHVyYXRpb24oX3RoaXMuZHVyYXRpb24pICsgX3RoaXMuc3RhcnRUaWNrIDogbnVsbFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFJ1bm5pbmcgc3RhdHVzIChjYW4gb21taXQgdGhlIG5vdGUgb2ZmIHN0YXR1cylcbiAgICAgICAgICAgICAgLy9ub3RlT2ZmID0gbmV3IE5vdGVPZmZFdmVudCh7ZGF0YTogWzAsIFV0aWxzLmdldFBpdGNoKHApLCBVdGlscy5jb252ZXJ0VmVsb2NpdHkodGhpcy52ZWxvY2l0eSldfSk7XG4gICAgICAgICAgICAgIHZhciBub3RlT2ZmTmV3ID0gbmV3IE5vdGVPZmZFdmVudCh7XG4gICAgICAgICAgICAgICAgY2hhbm5lbDogX3RoaXMuY2hhbm5lbCxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eTogX3RoaXMudmVsb2NpdHksXG4gICAgICAgICAgICAgICAgcGl0Y2g6IHAsXG4gICAgICAgICAgICAgICAgdGljazogX3RoaXMuc3RhcnRUaWNrICE9PSBudWxsID8gVXRpbHMuZ2V0VGlja0R1cmF0aW9uKF90aGlzLmR1cmF0aW9uKSArIF90aGlzLnN0YXJ0VGljayA6IG51bGxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF90aGlzLmV2ZW50cy5wdXNoKG5vdGVPZmZOZXcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBIYW5kbGUgcmVwZWF0XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5yZXBlYXQ7IGorKykge1xuICAgICAgICAgIHRoaXMucGl0Y2guZm9yRWFjaChmdW5jdGlvbiAocCwgaSkge1xuXG4gICAgICAgICAgICB2YXIgbm90ZU9uTmV3ID0gbmV3IE5vdGVPbkV2ZW50KHtcbiAgICAgICAgICAgICAgY2hhbm5lbDogX3RoaXMuY2hhbm5lbCxcbiAgICAgICAgICAgICAgd2FpdDogaSA+IDAgPyAwIDogX3RoaXMud2FpdCxcbiAgICAgICAgICAgICAgLy8gd2FpdCBvbmx5IGFwcGxpZXMgdG8gZmlyc3Qgbm90ZSBpbiByZXBldGl0aW9uXG4gICAgICAgICAgICAgIHZlbG9jaXR5OiBfdGhpcy52ZWxvY2l0eSxcbiAgICAgICAgICAgICAgcGl0Y2g6IHAsXG4gICAgICAgICAgICAgIHN0YXJ0VGljazogX3RoaXMuc3RhcnRUaWNrXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBub3RlT2ZmTmV3ID0gbmV3IE5vdGVPZmZFdmVudCh7XG4gICAgICAgICAgICAgIGNoYW5uZWw6IF90aGlzLmNoYW5uZWwsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiBfdGhpcy5kdXJhdGlvbixcbiAgICAgICAgICAgICAgdmVsb2NpdHk6IF90aGlzLnZlbG9jaXR5LFxuICAgICAgICAgICAgICBwaXRjaDogcFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIF90aGlzLmV2ZW50cy5wdXNoKG5vdGVPbk5ldywgbm90ZU9mZk5ldyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE5vdGVFdmVudDtcbn0oKTtcblxuLyoqXG4gKiBIb2xkcyBhbGwgZGF0YSBmb3IgYSBcIlBpdGNoIEJlbmRcIiBNSURJIGV2ZW50XG4gKiBbIC0xLjAsIDAsIDEuMCBdIC0+ICBbIDAsIDgxOTIsIDE2MzgzXVxuICogQHBhcmFtIHtvYmplY3R9IGZpZWxkcyB7IGJlbmQgOiBmbG9hdCwgY2hhbm5lbCA6IGludCB9XG4gKiBAcmV0dXJuIHtQaXRjaEJlbmRFdmVudH1cbiAqL1xuXG52YXIgc2NhbGUxNGJpdHMgPSBmdW5jdGlvbiBzY2FsZTE0Yml0cyh6ZXJvT25lKSB7XG4gIGlmICh6ZXJvT25lIDw9IDApIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcigxNjM4NCAqICh6ZXJvT25lICsgMSkgLyAyKTtcbiAgfVxuXG4gIHJldHVybiBNYXRoLmZsb29yKDE2MzgzICogKHplcm9PbmUgKyAxKSAvIDIpO1xufTtcblxudmFyIFBpdGNoQmVuZEV2ZW50ID0gZnVuY3Rpb24gUGl0Y2hCZW5kRXZlbnQoZmllbGRzKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQaXRjaEJlbmRFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ3BpdGNoLWJlbmQnO1xuICB2YXIgYmVuZDE0ID0gc2NhbGUxNGJpdHMoZmllbGRzLmJlbmQpO1xuICB2YXIgY2hhbm5lbCA9IGZpZWxkcy5jaGFubmVsIHx8IDA7XG4gIHZhciBsc2JWYWx1ZSA9IGJlbmQxNCAmIDB4N2Y7XG4gIHZhciBtc2JWYWx1ZSA9IGJlbmQxNCA+PiA3ICYgMHg3ZjtcbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLlBJVENIX0JFTkRfU1RBVFVTIHwgY2hhbm5lbCwgbHNiVmFsdWUsIG1zYlZhbHVlKTtcbn07XG5cbi8qKlxuICogSG9sZHMgYWxsIGRhdGEgZm9yIGEgXCJwcm9ncmFtIGNoYW5nZVwiIE1JREkgZXZlbnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZHMge2luc3RydW1lbnQ6IGludGVnZXJ9XG4gKiBAcmV0dXJuIHtQcm9ncmFtQ2hhbmdlRXZlbnR9XG4gKi9cblxudmFyIFByb2dyYW1DaGFuZ2VFdmVudCA9IGZ1bmN0aW9uIFByb2dyYW1DaGFuZ2VFdmVudChmaWVsZHMpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFByb2dyYW1DaGFuZ2VFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ3Byb2dyYW0nOyAvLyBkZWx0YSB0aW1lIGRlZmF1bHRzIHRvIDAuXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLlBST0dSQU1fQ0hBTkdFX1NUQVRVUywgZmllbGRzLmluc3RydW1lbnQpO1xufTtcblxuLyoqXG4gKiBIb2xkcyBhbGwgZGF0YSBmb3IgYSBcImNvbnRyb2xsZXIgY2hhbmdlXCIgTUlESSBldmVudFxuICogQHBhcmFtIHtvYmplY3R9IGZpZWxkcyB7Y29udHJvbGxlck51bWJlcjogaW50ZWdlciwgY29udHJvbGxlclZhbHVlOiBpbnRlZ2VyfVxuICogQHJldHVybiB7Q29udHJvbGxlckNoYW5nZUV2ZW50fVxuICovXG5cbnZhciBDb250cm9sbGVyQ2hhbmdlRXZlbnQgPSBmdW5jdGlvbiBDb250cm9sbGVyQ2hhbmdlRXZlbnQoZmllbGRzKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb250cm9sbGVyQ2hhbmdlRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdjb250cm9sbGVyJzsgLy8gZGVsdGEgdGltZSBkZWZhdWx0cyB0byAwLlxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5DT05UUk9MTEVSX0NIQU5HRV9TVEFUVVMsIGZpZWxkcy5jb250cm9sbGVyTnVtYmVyLCBmaWVsZHMuY29udHJvbGxlclZhbHVlKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgdGVtcG8gbWV0YSBldmVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gQ29weXJpZ2h0IHRleHRcbiAqIEByZXR1cm4ge0NvcHlyaWdodEV2ZW50fVxuICovXG5cbnZhciBDb3B5cmlnaHRFdmVudCA9IGZ1bmN0aW9uIENvcHlyaWdodEV2ZW50KHRleHQpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvcHlyaWdodEV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAnY29weXJpZ2h0JztcbiAgdmFyIHRleHRCeXRlcyA9IFV0aWxzLnN0cmluZ1RvQnl0ZXModGV4dCk7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX0NPUFlSSUdIVF9JRCwgVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0ZXh0Qnl0ZXMubGVuZ3RoKSwgLy8gU2l6ZVxuICB0ZXh0Qnl0ZXMgLy8gVGV4dFxuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSBjdWUgcG9pbnQgbWV0YSBldmVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gQ3VlIHBvaW50IHRleHRcbiAqIEByZXR1cm4ge0N1ZVBvaW50RXZlbnR9XG4gKi9cblxudmFyIEN1ZVBvaW50RXZlbnQgPSBmdW5jdGlvbiBDdWVQb2ludEV2ZW50KHRleHQpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEN1ZVBvaW50RXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdtYXJrZXInO1xuICB2YXIgdGV4dEJ5dGVzID0gVXRpbHMuc3RyaW5nVG9CeXRlcyh0ZXh0KTsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfQ1VFX1BPSU5ULCBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRleHRCeXRlcy5sZW5ndGgpLCAvLyBTaXplXG4gIHRleHRCeXRlcyAvLyBUZXh0XG4gICk7XG59O1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIGVuZCB0cmFjayBtZXRhIGV2ZW50LlxuICogQHJldHVybiB7RW5kVHJhY2tFdmVudH1cbiAqL1xuXG52YXIgRW5kVHJhY2tFdmVudCA9IGZ1bmN0aW9uIEVuZFRyYWNrRXZlbnQoKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFbmRUcmFja0V2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAnZW5kLXRyYWNrJzsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfRU5EX09GX1RSQUNLX0lEKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGFuIGluc3RydW1lbnQgbmFtZSBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IGJwbSAtIEJlYXRzIHBlciBtaW51dGVcbiAqIEByZXR1cm4ge0luc3RydW1lbnROYW1lRXZlbnR9XG4gKi9cblxudmFyIEluc3RydW1lbnROYW1lRXZlbnQgPSBmdW5jdGlvbiBJbnN0cnVtZW50TmFtZUV2ZW50KHRleHQpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluc3RydW1lbnROYW1lRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdpbnN0cnVtZW50LW5hbWUnO1xuICB2YXIgdGV4dEJ5dGVzID0gVXRpbHMuc3RyaW5nVG9CeXRlcyh0ZXh0KTsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfSU5TVFJVTUVOVF9OQU1FX0lELCBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRleHRCeXRlcy5sZW5ndGgpLCAvLyBTaXplXG4gIHRleHRCeXRlcyAvLyBJbnN0cnVtZW50IG5hbWVcbiAgKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEga2V5IHNpZ25hdHVyZSBtZXRhIGV2ZW50LlxuICogQHJldHVybiB7S2V5U2lnbmF0dXJlRXZlbnR9XG4gKi9cblxudmFyIEtleVNpZ25hdHVyZUV2ZW50ID0gZnVuY3Rpb24gS2V5U2lnbmF0dXJlRXZlbnQoc2YsIG1pKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBLZXlTaWduYXR1cmVFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ2tleS1zaWduYXR1cmUnO1xuICB2YXIgbW9kZSA9IG1pIHx8IDA7XG4gIHNmID0gc2YgfHwgMDsgLy9cdEZ1bmN0aW9uIGNhbGxlZCB3aXRoIHN0cmluZyBub3RhdGlvblxuXG4gIGlmICh0eXBlb2YgbWkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIGZpZnRocyA9IFtbJ0NiJywgJ0diJywgJ0RiJywgJ0FiJywgJ0ViJywgJ0JiJywgJ0YnLCAnQycsICdHJywgJ0QnLCAnQScsICdFJywgJ0InLCAnRiMnLCAnQyMnXSwgWydhYicsICdlYicsICdiYicsICdmJywgJ2MnLCAnZycsICdkJywgJ2EnLCAnZScsICdiJywgJ2YjJywgJ2MjJywgJ2cjJywgJ2QjJywgJ2EjJ11dO1xuICAgIHZhciBfc2ZsZW4gPSBzZi5sZW5ndGg7XG4gICAgdmFyIG5vdGUgPSBzZiB8fCAnQyc7XG4gICAgaWYgKHNmWzBdID09PSBzZlswXS50b0xvd2VyQ2FzZSgpKSBtb2RlID0gMTtcblxuICAgIGlmIChfc2ZsZW4gPiAxKSB7XG4gICAgICBzd2l0Y2ggKHNmLmNoYXJBdChfc2ZsZW4gLSAxKSkge1xuICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICBtb2RlID0gMTtcbiAgICAgICAgICBub3RlID0gc2YuY2hhckF0KDApLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgbm90ZSA9IG5vdGUuY29uY2F0KHNmLnN1YnN0cmluZygxLCBfc2ZsZW4gLSAxKSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgbW9kZSA9IDE7XG4gICAgICAgICAgbm90ZSA9IHNmLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIG5vdGUgPSBub3RlLmNvbmNhdChzZi5zdWJzdHJpbmcoMSwgX3NmbGVuIC0gMSkpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ00nOlxuICAgICAgICAgIG1vZGUgPSAwO1xuICAgICAgICAgIG5vdGUgPSBzZi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICBub3RlID0gbm90ZS5jb25jYXQoc2Yuc3Vic3RyaW5nKDEsIF9zZmxlbiAtIDEpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICBtb2RlID0gMDtcbiAgICAgICAgICBub3RlID0gc2YuY2hhckF0KDApLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgbm90ZSA9IG5vdGUuY29uY2F0KHNmLnN1YnN0cmluZygxLCBfc2ZsZW4gLSAxKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGZpZnRoaW5kZXggPSBmaWZ0aHNbbW9kZV0uaW5kZXhPZihub3RlKTtcbiAgICBzZiA9IGZpZnRoaW5kZXggPT09IC0xID8gMCA6IGZpZnRoaW5kZXggLSA3O1xuICB9IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfS0VZX1NJR05BVFVSRV9JRCwgWzB4MDJdLCAvLyBTaXplXG4gIFV0aWxzLm51bWJlclRvQnl0ZXMoc2YsIDEpLCAvLyBOdW1iZXIgb2Ygc2hhcnAgb3IgZmxhdHMgKCA8IDAgZmxhdDsgPiAwIHNoYXJwKVxuICBVdGlscy5udW1iZXJUb0J5dGVzKG1vZGUsIDEpIC8vIE1vZGU6IDAgbWFqb3IsIDEgbWlub3JcbiAgKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgbHlyaWMgbWV0YSBldmVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gTHlyaWMgdGV4dFxuICogQHJldHVybiB7THlyaWNFdmVudH1cbiAqL1xuXG52YXIgTHlyaWNFdmVudCA9IGZ1bmN0aW9uIEx5cmljRXZlbnQodGV4dCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTHlyaWNFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ21hcmtlcic7XG4gIHZhciB0ZXh0Qnl0ZXMgPSBVdGlscy5zdHJpbmdUb0J5dGVzKHRleHQpOyAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9MWVJJQ19JRCwgVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0ZXh0Qnl0ZXMubGVuZ3RoKSwgLy8gU2l6ZVxuICB0ZXh0Qnl0ZXMgLy8gVGV4dFxuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSBtYXJrZXIgbWV0YSBldmVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gTWFya2VyIHRleHRcbiAqIEByZXR1cm4ge01hcmtlckV2ZW50fVxuICovXG5cbnZhciBNYXJrZXJFdmVudCA9IGZ1bmN0aW9uIE1hcmtlckV2ZW50KHRleHQpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hcmtlckV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAnbWFya2VyJztcbiAgdmFyIHRleHRCeXRlcyA9IFV0aWxzLnN0cmluZ1RvQnl0ZXModGV4dCk7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX01BUktFUl9JRCwgVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0ZXh0Qnl0ZXMubGVuZ3RoKSwgLy8gU2l6ZVxuICB0ZXh0Qnl0ZXMgLy8gVGV4dFxuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSB0ZW1wbyBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IGJwbSAtIEJlYXRzIHBlciBtaW51dGVcbiAqIEByZXR1cm4ge1RlbXBvRXZlbnR9XG4gKi9cblxudmFyIFRlbXBvRXZlbnQgPSBmdW5jdGlvbiBUZW1wb0V2ZW50KGJwbSkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGVtcG9FdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ3RlbXBvJztcbiAgdmFyIHRlbXBvID0gTWF0aC5yb3VuZCg2MDAwMDAwMCAvIGJwbSk7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX1RFTVBPX0lELCBbMHgwM10sIC8vIFNpemVcbiAgVXRpbHMubnVtYmVyVG9CeXRlcyh0ZW1wbywgMykgLy8gVGVtcG8sIDMgYnl0ZXNcbiAgKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgdGVtcG8gbWV0YSBldmVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBicG0gLSBCZWF0cyBwZXIgbWludXRlXG4gKiBAcmV0dXJuIHtUZXh0RXZlbnR9XG4gKi9cblxudmFyIFRleHRFdmVudCA9IGZ1bmN0aW9uIFRleHRFdmVudCh0ZXh0KSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUZXh0RXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICd0ZXh0JztcbiAgdmFyIHRleHRCeXRlcyA9IFV0aWxzLnN0cmluZ1RvQnl0ZXModGV4dCk7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX1RFWFRfSUQsIFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgodGV4dEJ5dGVzLmxlbmd0aCksIC8vIFNpemVcbiAgdGV4dEJ5dGVzIC8vIFRleHRcbiAgKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgdGltZSBzaWduYXR1cmUgbWV0YSBldmVudC5cbiAqIEByZXR1cm4ge1RpbWVTaWduYXR1cmVFdmVudH1cbiAqL1xuXG52YXIgVGltZVNpZ25hdHVyZUV2ZW50ID0gZnVuY3Rpb24gVGltZVNpZ25hdHVyZUV2ZW50KG51bWVyYXRvciwgZGVub21pbmF0b3IsIG1pZGljbG9ja3NwZXJ0aWNrLCBub3Rlc3Blcm1pZGljbG9jaykge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGltZVNpZ25hdHVyZUV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAndGltZS1zaWduYXR1cmUnOyAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9USU1FX1NJR05BVFVSRV9JRCwgWzB4MDRdLCAvLyBTaXplXG4gIFV0aWxzLm51bWJlclRvQnl0ZXMobnVtZXJhdG9yLCAxKSwgLy8gTnVtZXJhdG9yLCAxIGJ5dGVzXG4gIFV0aWxzLm51bWJlclRvQnl0ZXMoTWF0aC5sb2cyKGRlbm9taW5hdG9yKSwgMSksIC8vIERlbm9taW5hdG9yIGlzIGV4cHJlc3NlZCBhcyBwb3cgb2YgMiwgMSBieXRlc1xuICBVdGlscy5udW1iZXJUb0J5dGVzKG1pZGljbG9ja3NwZXJ0aWNrIHx8IDI0LCAxKSwgLy8gTUlESSBDbG9ja3MgcGVyIHRpY2ssIDEgYnl0ZXNcbiAgVXRpbHMubnVtYmVyVG9CeXRlcyhub3Rlc3Blcm1pZGljbG9jayB8fCA4LCAxKSAvLyBOdW1iZXIgb2YgMS8zMiBub3RlcyBwZXIgTUlESSBjbG9ja3MsIDEgYnl0ZXNcbiAgKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgdGVtcG8gbWV0YSBldmVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBicG0gLSBCZWF0cyBwZXIgbWludXRlXG4gKiBAcmV0dXJuIHtUcmFja05hbWVFdmVudH1cbiAqL1xuXG52YXIgVHJhY2tOYW1lRXZlbnQgPSBmdW5jdGlvbiBUcmFja05hbWVFdmVudCh0ZXh0KSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmFja05hbWVFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ3RyYWNrLW5hbWUnO1xuICB2YXIgdGV4dEJ5dGVzID0gVXRpbHMuc3RyaW5nVG9CeXRlcyh0ZXh0KTsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfVFJBQ0tfTkFNRV9JRCwgVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0ZXh0Qnl0ZXMubGVuZ3RoKSwgLy8gU2l6ZVxuICB0ZXh0Qnl0ZXMgLy8gVGV4dFxuICApO1xufTtcblxuLyoqXG4gKiBIb2xkcyBhbGwgZGF0YSBmb3IgYSB0cmFjay5cbiAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZHMge3R5cGU6IG51bWJlciwgZGF0YTogYXJyYXksIHNpemU6IGFycmF5LCBldmVudHM6IGFycmF5fVxuICogQHJldHVybiB7VHJhY2t9XG4gKi9cblxudmFyIFRyYWNrID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVHJhY2soKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRyYWNrKTtcblxuICAgIHRoaXMudHlwZSA9IENvbnN0YW50cy5UUkFDS19DSFVOS19UWVBFO1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIHRoaXMuc2l6ZSA9IFtdO1xuICAgIHRoaXMuZXZlbnRzID0gW107XG4gICAgdGhpcy5leHBsaWNpdFRpY2tFdmVudHMgPSBbXTsgLy8gSWYgdGhlcmUgYXJlIGFueSBldmVudHMgd2l0aCBhbiBleHBsaWNpdCB0aWNrIGRlZmluZWQgdGhlbiB3ZSB3aWxsIGNyZWF0ZSBhIFwic3ViXCIgdHJhY2sgZm9yIHRob3NlXG4gICAgLy8gYW5kIG1lcmdlIHRoZW0gaW4gYW5kIHRoZSBlbmQuXG5cbiAgICB0aGlzLnRpY2tQb2ludGVyID0gMDsgLy8gRWFjaCB0aW1lIGFuIGV2ZW50IGlzIGFkZGVkIHRoaXMgd2lsbCBpbmNyZWFzZVxuICB9XG4gIC8qKlxuICAgKiBBZGRzIGFueSBldmVudCB0eXBlIHRvIHRoZSB0cmFjay5cbiAgICogRXZlbnRzIHdpdGhvdXQgYSBzcGVjaWZpYyBzdGFydFRpY2sgcHJvcGVydHkgYXJlIGFzc3VtZWQgdG8gYmUgYWRkZWQgaW4gb3JkZXIgb2YgaG93IHRoZXkgc2hvdWxkIG91dHB1dC5cbiAgICogRXZlbnRzIHdpdGggYSBzcGVjaWZpYyBzdGFydFRpY2sgcHJvcGVydHkgYXJlIHNldCBhc2lkZSBmb3Igbm93IHdpbGwgYmUgbWVyZ2VkIGluIGR1cmluZyBidWlsZCBwcm9jZXNzLlxuICAgKiBAcGFyYW0geyhOb3RlRXZlbnR8UHJvZ3JhbUNoYW5nZUV2ZW50KX0gZXZlbnRzIC0gRXZlbnQgb2JqZWN0IG9yIGFycmF5IG9mIEV2ZW50IG9iamVjdHMuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IG1hcEZ1bmN0aW9uIC0gQ2FsbGJhY2sgd2hpY2ggY2FuIGJlIHVzZWQgdG8gYXBwbHkgc3BlY2lmaWMgcHJvcGVydGllcyB0byBhbGwgZXZlbnRzLlxuICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoVHJhY2ssIFt7XG4gICAga2V5OiBcImFkZEV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEV2ZW50KGV2ZW50cywgbWFwRnVuY3Rpb24pIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIFV0aWxzLnRvQXJyYXkoZXZlbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCwgaSkge1xuICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOb3RlRXZlbnQpIHtcbiAgICAgICAgICAvLyBIYW5kbGUgbWFwIGZ1bmN0aW9uIGlmIHByb3ZpZGVkXG4gICAgICAgICAgaWYgKHR5cGVvZiBtYXBGdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIHByb3BlcnRpZXMgPSBtYXBGdW5jdGlvbihpLCBldmVudCk7XG5cbiAgICAgICAgICAgIGlmIChfdHlwZW9mKHByb3BlcnRpZXMpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICBmb3IgKHZhciBqIGluIHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGopIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgJ2NoYW5uZWwnOlxuICAgICAgICAgICAgICAgICAgICBldmVudC5jaGFubmVsID0gcHJvcGVydGllc1tqXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgJ2R1cmF0aW9uJzpcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZHVyYXRpb24gPSBwcm9wZXJ0aWVzW2pdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgY2FzZSAnc2VxdWVudGlhbCc6XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnNlcXVlbnRpYWwgPSBwcm9wZXJ0aWVzW2pdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgY2FzZSAndmVsb2NpdHknOlxuICAgICAgICAgICAgICAgICAgICBldmVudC52ZWxvY2l0eSA9IFV0aWxzLmNvbnZlcnRWZWxvY2l0eShwcm9wZXJ0aWVzW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAvLyBJZiB0aGlzIG5vdGUgZXZlbnQgaGFzIGFuIGV4cGxpY2l0IHN0YXJ0VGljayB0aGVuIHdlIG5lZWQgdG8gc2V0IGFzaWRlIGZvciBub3dcblxuXG4gICAgICAgICAgaWYgKGV2ZW50LnN0YXJ0VGljayAhPT0gbnVsbCkge1xuICAgICAgICAgICAgX3RoaXMuZXhwbGljaXRUaWNrRXZlbnRzLnB1c2goZXZlbnQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBQdXNoIGVhY2ggb24vb2ZmIGV2ZW50IHRvIHRyYWNrJ3MgZXZlbnQgc3RhY2tcbiAgICAgICAgICAgIGV2ZW50LmJ1aWxkRGF0YSgpLmV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpcy5ldmVudHMucHVzaChlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpcy5ldmVudHMucHVzaChldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJ1aWxkcyBpbnQgYXJyYXkgb2YgYWxsIGV2ZW50cy5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImJ1aWxkRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBidWlsZERhdGEoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgLy8gUmVtb3ZlIGV4aXN0aW5nIGVuZCB0cmFjayBldmVudCBhbmQgYWRkIG9uZS5cbiAgICAgIC8vIFRoaXMgbWFrZXMgc3VyZSBpdCdzIGF0IHRoZSB2ZXJ5IGVuZCBvZiB0aGUgZXZlbnQgbGlzdC5cbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRzQnlUeXBlKCdlbmQtdHJhY2snKS5hZGRFdmVudChuZXcgRW5kVHJhY2tFdmVudCgpKTsgLy8gUmVzZXRcblxuICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgICB0aGlzLnNpemUgPSBbXTtcbiAgICAgIHRoaXMudGlja1BvaW50ZXIgPSAwO1xuICAgICAgdmFyIHByZWNpc2lvbkxvc3MgPSAwO1xuICAgICAgdGhpcy5ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQsIGV2ZW50SW5kZXgpIHtcbiAgICAgICAgLy8gQnVpbGQgZXZlbnQgJiBhZGQgdG8gdG90YWwgdGljayBkdXJhdGlvblxuICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOb3RlT25FdmVudCB8fCBldmVudCBpbnN0YW5jZW9mIE5vdGVPZmZFdmVudCkge1xuICAgICAgICAgIHZhciBidWlsdCA9IGV2ZW50LmJ1aWxkRGF0YShfdGhpczIsIHByZWNpc2lvbkxvc3MpO1xuICAgICAgICAgIHByZWNpc2lvbkxvc3MgPSBVdGlscy5nZXRQcmVjaXNpb25Mb3NzKGV2ZW50LmRlbHRhV2l0aFByZWNpc2lvbkNvcnJlY3Rpb24gfHwgMCk7XG4gICAgICAgICAgX3RoaXMyLmRhdGEgPSBfdGhpczIuZGF0YS5jb25jYXQoYnVpbHQuZGF0YSk7XG4gICAgICAgICAgX3RoaXMyLnRpY2tQb2ludGVyID0gVXRpbHMuZ2V0Um91bmRlZElmQ2xvc2UoZXZlbnQudGljayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMyLmRhdGEgPSBfdGhpczIuZGF0YS5jb25jYXQoZXZlbnQuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5tZXJnZUV4cGxpY2l0VGlja0V2ZW50cygpO1xuICAgICAgdGhpcy5zaXplID0gVXRpbHMubnVtYmVyVG9CeXRlcyh0aGlzLmRhdGEubGVuZ3RoLCA0KTsgLy8gNCBieXRlcyBsb25nXG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJtZXJnZUV4cGxpY2l0VGlja0V2ZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtZXJnZUV4cGxpY2l0VGlja0V2ZW50cygpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICBpZiAoIXRoaXMuZXhwbGljaXRUaWNrRXZlbnRzLmxlbmd0aCkgcmV0dXJuOyAvLyBGaXJzdCBzb3J0IGFzYyBsaXN0IG9mIGV2ZW50cyBieSBzdGFydFRpY2tcblxuICAgICAgdGhpcy5leHBsaWNpdFRpY2tFdmVudHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYS5zdGFydFRpY2sgLSBiLnN0YXJ0VGljaztcbiAgICAgIH0pOyAvLyBOb3cgdGhpcy5leHBsaWNpdFRpY2tFdmVudHMgaXMgaW4gY29ycmVjdCBvcmRlciwgYW5kIHNvIGlzIHRoaXMuZXZlbnRzIG5hdHVyYWxseS5cbiAgICAgIC8vIEZvciBlYWNoIGV4cGxpY2l0IHRpY2sgZXZlbnQsIHNwbGljZSBpdCBpbnRvIHRoZSBtYWluIGxpc3Qgb2YgZXZlbnRzIGFuZFxuICAgICAgLy8gYWRqdXN0IHRoZSBkZWx0YSBvbiB0aGUgZm9sbG93aW5nIGV2ZW50cyBzbyB0aGV5IHN0aWxsIHBsYXkgbm9ybWFsbHkuXG5cbiAgICAgIHRoaXMuZXhwbGljaXRUaWNrRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKG5vdGVFdmVudCkge1xuICAgICAgICAvLyBDb252ZXJ0IE5vdGVFdmVudCB0byBpdCdzIHJlc3BlY3RpdmUgTm90ZU9uL05vdGVPZmYgZXZlbnRzXG4gICAgICAgIC8vIE5vdGUgdGhhdCBhcyB3ZSBzcGxpY2UgaW4gZXZlbnRzIHRoZSBkZWx0YSBmb3IgdGhlIE5vdGVPZmYgb25lcyB3aWxsXG4gICAgICAgIC8vIE5lZWQgdG8gY2hhbmdlIGJhc2VkIG9uIHdoYXQgY29tZXMgYmVmb3JlIHRoZW0gYWZ0ZXIgdGhlIHNwbGljZS5cbiAgICAgICAgbm90ZUV2ZW50LmJ1aWxkRGF0YSgpLmV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGUuYnVpbGREYXRhKF90aGlzMyk7XG4gICAgICAgIH0pOyAvLyBNZXJnZSBlYWNoIGV2ZW50IGluZGl2dWFsbHkgaW50byB0aGlzIHRyYWNrJ3MgZXZlbnQgbGlzdC5cblxuICAgICAgICBub3RlRXZlbnQuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMy5tZXJnZVNpbmdsZUV2ZW50KGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTsgLy8gSGFja3kgd2F5IHRvIHJlYnVpbGQgdHJhY2sgd2l0aCBuZXdseSBzcGxpY2VkIGV2ZW50cy4gIE5lZWQgYmV0dGVyIHNvbHV0aW9uLlxuXG4gICAgICB0aGlzLmV4cGxpY2l0VGlja0V2ZW50cyA9IFtdO1xuICAgICAgdGhpcy5idWlsZERhdGEoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTWVyZ2VzIGFub3RoZXIgdHJhY2sncyBldmVudHMgd2l0aCB0aGlzIHRyYWNrLlxuICAgICAqIEBwYXJhbSB7VHJhY2t9IHRyYWNrXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJtZXJnZVRyYWNrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1lcmdlVHJhY2sodHJhY2spIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICAvLyBGaXJzdCBidWlsZCB0aGlzIHRyYWNrIHRvIHBvcHVsYXRlIGVhY2ggZXZlbnQncyB0aWNrIHByb3BlcnR5XG4gICAgICB0aGlzLmJ1aWxkRGF0YSgpOyAvLyBUaGVuIGJ1aWxkIHRyYWNrIHRvIGJlIG1lcmdlZCBzbyB0aGF0IHRpY2sgcHJvcGVydHkgaXMgcG9wdWxhdGVkIG9uIGFsbCBldmVudHMgJiBtZXJnZSBlYWNoIGV2ZW50LlxuXG4gICAgICB0cmFjay5idWlsZERhdGEoKS5ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzNC5tZXJnZVNpbmdsZUV2ZW50KGV2ZW50KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNZXJnZXMgYSBzaW5nbGUgZXZlbnQgaW50byB0aGlzIHRyYWNrJ3MgbGlzdCBvZiBldmVudHMgYmFzZWQgb24gZXZlbnQudGljayBwcm9wZXJ0eS5cbiAgICAgKiBAcGFyYW0ge05vdGVPbkV2ZW50fE5vdGVPZmZFdmVudH0gLSBldmVudFxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibWVyZ2VTaW5nbGVFdmVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtZXJnZVNpbmdsZUV2ZW50KGV2ZW50KSB7XG4gICAgICAvLyBGaW5kIGluZGV4IG9mIGV4aXN0aW5nIGV2ZW50IHdlIG5lZWQgdG8gZm9sbG93IHdpdGhcbiAgICAgIHZhciBsYXN0RXZlbnRJbmRleCA9IDA7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2ldLnRpY2sgPiBldmVudC50aWNrKSBicmVhaztcbiAgICAgICAgbGFzdEV2ZW50SW5kZXggPSBpO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3BsaWNlZEV2ZW50SW5kZXggPSBsYXN0RXZlbnRJbmRleCArIDE7IC8vIE5lZWQgdG8gYWRqdXN0IHRoZSBkZWx0YSBvZiB0aGlzIGV2ZW50IHRvIGVuc3VyZSBpdCBmYWxscyBvbiB0aGUgY29ycmVjdCB0aWNrLlxuXG4gICAgICBldmVudC5kZWx0YSA9IGV2ZW50LnRpY2sgLSB0aGlzLmV2ZW50c1tsYXN0RXZlbnRJbmRleF0udGljazsgLy8gU3BsaWNlIHRoaXMgZXZlbnQgYXQgbGFzdEV2ZW50SW5kZXggKyAxXG5cbiAgICAgIHRoaXMuZXZlbnRzLnNwbGljZShzcGxpY2VkRXZlbnRJbmRleCwgMCwgZXZlbnQpOyAvLyBOb3cgYWRqdXN0IGRlbHRhIG9mIGFsbCBmb2xsb3dpbmcgZXZlbnRzXG5cbiAgICAgIGZvciAodmFyIGkgPSBzcGxpY2VkRXZlbnRJbmRleCArIDE7IGkgPCB0aGlzLmV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBTaW5jZSBlYWNoIGV4aXN0aW5nIGV2ZW50IHNob3VsZCBoYXZlIGEgdGljayB2YWx1ZSBhdCB0aGlzIHBvaW50IHdlIGp1c3QgbmVlZCB0b1xuICAgICAgICAvLyBhZGp1c3QgZGVsdGEgdG8gdGhhdCB0aGUgZXZlbnQgc3RpbGwgZmFsbHMgb24gdGhlIGNvcnJlY3QgdGljay5cbiAgICAgICAgdGhpcy5ldmVudHNbaV0uZGVsdGEgPSB0aGlzLmV2ZW50c1tpXS50aWNrIC0gdGhpcy5ldmVudHNbaSAtIDFdLnRpY2s7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIGV2ZW50cyBtYXRjaGluZyBzcGVjaWZpZWQgdHlwZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlIC0gRXZlbnQgdHlwZVxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlRXZlbnRzQnlUeXBlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUV2ZW50c0J5VHlwZShldmVudFR5cGUpIHtcbiAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICB0aGlzLmV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCwgaW5kZXgpIHtcbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IGV2ZW50VHlwZSkge1xuICAgICAgICAgIF90aGlzNS5ldmVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0ZW1wbyBvZiB0aGUgTUlESSBmaWxlLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBicG0gLSBUZW1wbyBpbiBiZWF0cyBwZXIgbWludXRlLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2V0VGVtcG9cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VGVtcG8oYnBtKSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgVGVtcG9FdmVudChicG0pKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aW1lIHNpZ25hdHVyZS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbnVtZXJhdG9yIC0gVG9wIG51bWJlciBvZiB0aGUgdGltZSBzaWduYXR1cmUuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRlbm9taW5hdG9yIC0gQm90dG9tIG51bWJlciBvZiB0aGUgdGltZSBzaWduYXR1cmUuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pZGljbG9ja3NwZXJ0aWNrIC0gRGVmYXVsdHMgdG8gMjQuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5vdGVzcGVybWlkaWNsb2NrIC0gRGVmYXVsdHMgdG8gOC5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNldFRpbWVTaWduYXR1cmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VGltZVNpZ25hdHVyZShudW1lcmF0b3IsIGRlbm9taW5hdG9yLCBtaWRpY2xvY2tzcGVydGljaywgbm90ZXNwZXJtaWRpY2xvY2spIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBUaW1lU2lnbmF0dXJlRXZlbnQobnVtZXJhdG9yLCBkZW5vbWluYXRvciwgbWlkaWNsb2Nrc3BlcnRpY2ssIG5vdGVzcGVybWlkaWNsb2NrKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMga2V5IHNpZ25hdHVyZS5cbiAgICAgKiBAcGFyYW0geyp9IHNmIC1cbiAgICAgKiBAcGFyYW0geyp9IG1pIC1cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNldEtleVNpZ25hdHVyZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRLZXlTaWduYXR1cmUoc2YsIG1pKSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgS2V5U2lnbmF0dXJlRXZlbnQoc2YsIG1pKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgdGV4dCB0byBNSURJIGZpbGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUZXh0IHRvIGFkZC5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFkZFRleHRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkVGV4dCh0ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgVGV4dEV2ZW50KHRleHQpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBjb3B5cmlnaHQgdG8gTUlESSBmaWxlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCBvZiBjb3B5cmlnaHQgbGluZS5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFkZENvcHlyaWdodFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRDb3B5cmlnaHQodGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IENvcHlyaWdodEV2ZW50KHRleHQpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBTZXF1ZW5jZS9UcmFjayBOYW1lLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCBvZiB0cmFjayBuYW1lLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkVHJhY2tOYW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZFRyYWNrTmFtZSh0ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgVHJhY2tOYW1lRXZlbnQodGV4dCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIGluc3RydW1lbnQgbmFtZSBvZiB0cmFjay5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIE5hbWUgb2YgaW5zdHJ1bWVudC5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFkZEluc3RydW1lbnROYW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEluc3RydW1lbnROYW1lKHRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBJbnN0cnVtZW50TmFtZUV2ZW50KHRleHQpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBtYXJrZXIgdG8gTUlESSBmaWxlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gTWFya2VyIHRleHQuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhZGRNYXJrZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkTWFya2VyKHRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBNYXJrZXJFdmVudCh0ZXh0KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgY3VlIHBvaW50IHRvIE1JREkgZmlsZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRleHQgb2YgY3VlIHBvaW50LlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkQ3VlUG9pbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkQ3VlUG9pbnQodGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IEN1ZVBvaW50RXZlbnQodGV4dCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGx5cmljIHRvIE1JREkgZmlsZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIEx5cmljIHRleHQgdG8gYWRkLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkTHlyaWNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkTHlyaWModGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IEx5cmljRXZlbnQodGV4dCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGFubmVsIG1vZGUgbWVzc2FnZXNcbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInBvbHlNb2RlT25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcG9seU1vZGVPbigpIHtcbiAgICAgIHZhciBldmVudCA9IG5ldyBOb3RlT25FdmVudCh7XG4gICAgICAgIGRhdGE6IFsweDAwLCAweEIwLCAweDdFLCAweDAwXVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChldmVudCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgYSBwaXRjaCBiZW5kLlxuICAgICAqIEBwYXJhbSB7ZmxvYXR9IGJlbmQgLSBCZW5kIHZhbHVlIHJhbmdpbmcgWy0xLDFdLCB6ZXJvIG1lYW5pbmcgbm8gYmVuZC5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNldFBpdGNoQmVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQaXRjaEJlbmQoYmVuZCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IFBpdGNoQmVuZEV2ZW50KHtcbiAgICAgICAgYmVuZDogYmVuZFxuICAgICAgfSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgY29udHJvbGxlciBjaGFuZ2UgZXZlbnRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyIC0gQ29udHJvbCBudW1iZXIuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gQ29udHJvbCB2YWx1ZS5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNvbnRyb2xsZXJDaGFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29udHJvbGxlckNoYW5nZShudW1iZXIsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgQ29udHJvbGxlckNoYW5nZUV2ZW50KHtcbiAgICAgICAgY29udHJvbGxlck51bWJlcjogbnVtYmVyLFxuICAgICAgICBjb250cm9sbGVyVmFsdWU6IHZhbHVlXG4gICAgICB9KSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFRyYWNrO1xufSgpO1xuXG52YXIgVmV4RmxvdyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFZleEZsb3coKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFZleEZsb3cpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFZleEZsb3csIFt7XG4gICAga2V5OiBcInRyYWNrRnJvbVZvaWNlXCIsXG4gICAgdmFsdWU6XG4gICAgLyoqXG4gICAgICogU3VwcG9ydCBmb3IgY29udmVydGluZyBWZXhGbG93IHZvaWNlIGludG8gTWlkaVdyaXRlckpTIHRyYWNrXG4gICAgICogQHJldHVybiBNaWRpV3JpdGVyLlRyYWNrIG9iamVjdFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHRyYWNrRnJvbVZvaWNlKHZvaWNlKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge1xuICAgICAgICBhZGRSZW5kZXJlZEFjY2lkZW50YWxzOiBmYWxzZVxuICAgICAgfTtcbiAgICAgIHZhciB0cmFjayA9IG5ldyBUcmFjaygpO1xuICAgICAgdmFyIHdhaXQgPSBbXTtcbiAgICAgIHZvaWNlLnRpY2thYmxlcy5mb3JFYWNoKGZ1bmN0aW9uICh0aWNrYWJsZSkge1xuICAgICAgICBpZiAodGlja2FibGUubm90ZVR5cGUgPT09ICduJykge1xuICAgICAgICAgIHRyYWNrLmFkZEV2ZW50KG5ldyBOb3RlRXZlbnQoe1xuICAgICAgICAgICAgcGl0Y2g6IHRpY2thYmxlLmtleXMubWFwKGZ1bmN0aW9uIChwaXRjaCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmNvbnZlcnRQaXRjaChwaXRjaCwgaW5kZXgsIHRpY2thYmxlLCBvcHRpb25zLmFkZFJlbmRlcmVkQWNjaWRlbnRhbHMpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBkdXJhdGlvbjogX3RoaXMuY29udmVydER1cmF0aW9uKHRpY2thYmxlKSxcbiAgICAgICAgICAgIHdhaXQ6IHdhaXRcbiAgICAgICAgICB9KSk7IC8vIHJlc2V0IHdhaXRcblxuICAgICAgICAgIHdhaXQgPSBbXTtcbiAgICAgICAgfSBlbHNlIGlmICh0aWNrYWJsZS5ub3RlVHlwZSA9PT0gJ3InKSB7XG4gICAgICAgICAgLy8gbW92ZSBvbiB0byB0aGUgbmV4dCB0aWNrYWJsZSBhbmQgYWRkIHRoaXMgdG8gdGhlIHN0YWNrXG4gICAgICAgICAgLy8gb2YgdGhlIGB3YWl0YCBwcm9wZXJ0eSBmb3IgdGhlIG5leHQgbm90ZSBldmVudFxuICAgICAgICAgIHdhaXQucHVzaChfdGhpcy5jb252ZXJ0RHVyYXRpb24odGlja2FibGUpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0pOyAvLyBUaGVyZSBtYXkgYmUgb3V0c3RhbmRpbmcgcmVzdHMgYXQgdGhlIGVuZCBvZiB0aGUgdHJhY2ssXG4gICAgICAvLyBwYWQgd2l0aCBhIGdob3N0IG5vdGUgKHplcm8gZHVyYXRpb24gYW5kIHZlbG9jaXR5KSwganVzdCB0byBjYXB0dXJlIHRoZSB3YWl0LlxuXG4gICAgICBpZiAod2FpdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRyYWNrLmFkZEV2ZW50KG5ldyBOb3RlRXZlbnQoe1xuICAgICAgICAgIHBpdGNoOiAnW2M0XScsXG4gICAgICAgICAgZHVyYXRpb246ICcwJyxcbiAgICAgICAgICB3YWl0OiB3YWl0LFxuICAgICAgICAgIHZlbG9jaXR5OiAnMCdcbiAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJhY2s7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIFZleEZsb3cgcGl0Y2ggc3ludGF4IHRvIE1pZGlXcml0ZXJKUyBzeW50YXhcbiAgICAgKiBAcGFyYW0gcGl0Y2ggc3RyaW5nXG4gICAgICogQHBhcmFtIGluZGV4IHBpdGNoIGluZGV4XG4gICAgICogQHBhcmFtIG5vdGUgc3RydWN0IGZyb20gVmV4Zmxvd1xuICAgICAqIEBwYXJhbSBhZGRSZW5kZXJlZEFjY2lkZW50YWxzIGFkZHMgVmV4ZmxvdyByZW5kZXJlZCBhY2NpZGVudGFsc1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY29udmVydFBpdGNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbnZlcnRQaXRjaChwaXRjaCwgaW5kZXgsIG5vdGUpIHtcbiAgICAgIHZhciBhZGRSZW5kZXJlZEFjY2lkZW50YWxzID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiBmYWxzZTtcbiAgICAgIC8vIFNwbGl0cyBub3RlIG5hbWUgZnJvbSBvY3RhdmVcbiAgICAgIHZhciBwaXRjaFBhcnRzID0gcGl0Y2guc3BsaXQoJy8nKTsgLy8gUmV0cmlldmVzIGFjY2lkZW50YWxzIGZyb20gcGl0Y2hcbiAgICAgIC8vIFJlbW92ZXMgbmF0dXJhbCBhY2NpZGVudGFscyBzaW5jZSB0aGV5IGFyZSBub3QgYWNjZXB0ZWQgaW4gVG9uYWwgTWlkaVxuXG4gICAgICB2YXIgYWNjaWRlbnRhbHMgPSBwaXRjaFBhcnRzWzBdLnN1YnN0cmluZygxKS5yZXBsYWNlKCduJywgJycpO1xuXG4gICAgICBpZiAoYWRkUmVuZGVyZWRBY2NpZGVudGFscykge1xuICAgICAgICB2YXIgX25vdGUkZ2V0QWNjaWRlbnRhbHM7XG5cbiAgICAgICAgKF9ub3RlJGdldEFjY2lkZW50YWxzID0gbm90ZS5nZXRBY2NpZGVudGFscygpKSA9PT0gbnVsbCB8fCBfbm90ZSRnZXRBY2NpZGVudGFscyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX25vdGUkZ2V0QWNjaWRlbnRhbHMuZm9yRWFjaChmdW5jdGlvbiAoYWNjaWRlbnRhbCkge1xuICAgICAgICAgIGlmIChhY2NpZGVudGFsLmluZGV4ID09PSBpbmRleCkge1xuICAgICAgICAgICAgaWYgKGFjY2lkZW50YWwudHlwZSA9PT0gJ24nKSB7XG4gICAgICAgICAgICAgIGFjY2lkZW50YWxzID0gJyc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhY2NpZGVudGFscyArPSBhY2NpZGVudGFsLnR5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBpdGNoUGFydHNbMF1bMF0gKyBhY2NpZGVudGFscyArIHBpdGNoUGFydHNbMV07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIFZleEZsb3cgZHVyYXRpb24gc3ludGF4IHRvIE1pZGlXcml0ZXJKUyBzeW50YXhcbiAgICAgKiBAcGFyYW0gbm90ZSBzdHJ1Y3QgZnJvbSBWZXhGbG93XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjb252ZXJ0RHVyYXRpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29udmVydER1cmF0aW9uKG5vdGUpIHtcbiAgICAgIHJldHVybiAnZCcucmVwZWF0KG5vdGUuZG90cykgKyB0aGlzLmNvbnZlcnRCYXNlRHVyYXRpb24obm90ZS5kdXJhdGlvbikgKyAobm90ZS50dXBsZXQgPyAndCcgKyBub3RlLnR1cGxldC5udW1fbm90ZXMgOiAnJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIFZleEZsb3cgYmFzZSBkdXJhdGlvbiBzeW50YXggdG8gTWlkaVdyaXRlckpTIHN5bnRheFxuICAgICAqIEBwYXJhbSBkdXJhdGlvbiBWZXhmbG93IGR1cmF0aW9uXG4gICAgICogQHJldHVybnMgTWlkaVdyaXRlckpTIGR1cmF0aW9uXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjb252ZXJ0QmFzZUR1cmF0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbnZlcnRCYXNlRHVyYXRpb24oZHVyYXRpb24pIHtcbiAgICAgIHN3aXRjaCAoZHVyYXRpb24pIHtcbiAgICAgICAgY2FzZSAndyc6XG4gICAgICAgICAgcmV0dXJuICcxJztcblxuICAgICAgICBjYXNlICdoJzpcbiAgICAgICAgICByZXR1cm4gJzInO1xuXG4gICAgICAgIGNhc2UgJ3EnOlxuICAgICAgICAgIHJldHVybiAnNCc7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gZHVyYXRpb247XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFZleEZsb3c7XG59KCk7XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgaGVhZGVyIGNodW5rIHNlY3Rpb24gb2YgYSBNSURJIGZpbGUuXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyT2ZUcmFja3MgLSBOdW1iZXIgb2YgdHJhY2tzXG4gKiBAcmV0dXJuIHtIZWFkZXJDaHVua31cbiAqL1xuXG52YXIgSGVhZGVyQ2h1bmsgPSBmdW5jdGlvbiBIZWFkZXJDaHVuayhudW1iZXJPZlRyYWNrcykge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSGVhZGVyQ2h1bmspO1xuXG4gIHRoaXMudHlwZSA9IENvbnN0YW50cy5IRUFERVJfQ0hVTktfVFlQRTtcbiAgdmFyIHRyYWNrVHlwZSA9IG51bWJlck9mVHJhY2tzID4gMSA/IENvbnN0YW50cy5IRUFERVJfQ0hVTktfRk9STUFUMSA6IENvbnN0YW50cy5IRUFERVJfQ0hVTktfRk9STUFUMDtcbiAgdGhpcy5kYXRhID0gdHJhY2tUeXBlLmNvbmNhdChVdGlscy5udW1iZXJUb0J5dGVzKG51bWJlck9mVHJhY2tzLCAyKSwgLy8gdHdvIGJ5dGVzIGxvbmcsXG4gIENvbnN0YW50cy5IRUFERVJfQ0hVTktfRElWSVNJT04pO1xuICB0aGlzLnNpemUgPSBbMCwgMCwgMCwgdGhpcy5kYXRhLmxlbmd0aF07XG59O1xuXG4vKipcbiAqIE9iamVjdCB0aGF0IHB1dHMgdG9nZXRoZXIgdHJhY2tzIGFuZCBwcm92aWRlcyBtZXRob2RzIGZvciBmaWxlIG91dHB1dC5cbiAqIEBwYXJhbSB7YXJyYXl8VHJhY2t9IHRyYWNrcyAtIEEgc2luZ2xlIHtUcmFja30gb2JqZWN0IG9yIGFuIGFycmF5IG9mIHtUcmFja30gb2JqZWN0cy5cbiAqIEByZXR1cm4ge1dyaXRlcn1cbiAqL1xuXG52YXIgV3JpdGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gV3JpdGVyKHRyYWNrcykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV3JpdGVyKTtcblxuICAgIC8vIEVuc3VyZSB0cmFjayBpcyBhbiBhcnJheVxuICAgIHRyYWNrcyA9IFV0aWxzLnRvQXJyYXkodHJhY2tzKTtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICB0aGlzLmRhdGEucHVzaChuZXcgSGVhZGVyQ2h1bmsodHJhY2tzLmxlbmd0aCkpOyAvLyBGb3IgZWFjaCB0cmFjayBhZGQgZmluYWwgZW5kIG9mIHRyYWNrIGV2ZW50IGFuZCBidWlsZCBkYXRhXG5cbiAgICB0cmFja3MuZm9yRWFjaChmdW5jdGlvbiAodHJhY2ssIGkpIHtcbiAgICAgIF90aGlzLmRhdGEucHVzaCh0cmFjay5idWlsZERhdGEoKSk7XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIEJ1aWxkcyB0aGUgZmlsZSBpbnRvIGEgVWludDhBcnJheVxuICAgKiBAcmV0dXJuIHtVaW50OEFycmF5fVxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhXcml0ZXIsIFt7XG4gICAga2V5OiBcImJ1aWxkRmlsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBidWlsZEZpbGUoKSB7XG4gICAgICB2YXIgYnVpbGQgPSBbXTsgLy8gRGF0YSBjb25zaXN0cyBvZiBjaHVua3Mgd2hpY2ggY29uc2lzdHMgb2YgZGF0YVxuXG4gICAgICB0aGlzLmRhdGEuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gYnVpbGQgPSBidWlsZC5jb25jYXQoZC50eXBlLCBkLnNpemUsIGQuZGF0YSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShidWlsZCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnQgZmlsZSBidWZmZXIgdG8gYSBiYXNlNjQgc3RyaW5nLiAgRGlmZmVyZW50IG1ldGhvZHMgZGVwZW5kaW5nIG9uIGlmIGJyb3dzZXIgb3Igbm9kZS5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJiYXNlNjRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmFzZTY0KCkge1xuICAgICAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSByZXR1cm4gYnRvYShTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIHRoaXMuYnVpbGRGaWxlKCkpKTtcbiAgICAgIHJldHVybiBCdWZmZXIuZnJvbSh0aGlzLmJ1aWxkRmlsZSgpKS50b1N0cmluZygnYmFzZTY0Jyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZGF0YSBVUkkuXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZGF0YVVyaVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkYXRhVXJpKCkge1xuICAgICAgcmV0dXJuICdkYXRhOmF1ZGlvL21pZGk7YmFzZTY0LCcgKyB0aGlzLmJhc2U2NCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBPdXRwdXQgdG8gc3Rkb3V0XG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3Rkb3V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0ZG91dCgpIHtcbiAgICAgIHJldHVybiBwcm9jZXNzLnN0ZG91dC53cml0ZShuZXcgQnVmZmVyKHRoaXMuYnVpbGRGaWxlKCkpKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gV3JpdGVyO1xufSgpO1xuXG52YXIgbWFpbiA9IHtcbiAgQ29uc3RhbnRzOiBDb25zdGFudHMsXG4gIE5vdGVPbkV2ZW50OiBOb3RlT25FdmVudCxcbiAgTm90ZU9mZkV2ZW50OiBOb3RlT2ZmRXZlbnQsXG4gIE5vdGVFdmVudDogTm90ZUV2ZW50LFxuICBQaXRjaEJlbmRFdmVudDogUGl0Y2hCZW5kRXZlbnQsXG4gIFByb2dyYW1DaGFuZ2VFdmVudDogUHJvZ3JhbUNoYW5nZUV2ZW50LFxuICBUcmFjazogVHJhY2ssXG4gIFV0aWxzOiBVdGlscyxcbiAgVmV4RmxvdzogVmV4RmxvdyxcbiAgV3JpdGVyOiBXcml0ZXJcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbWFpbjtcbiIsICJ2YXIgTWlkaSA9IHt9O1xuXG4oZnVuY3Rpb24oZXhwb3J0ZWQpIHtcblxuXHR2YXIgREVGQVVMVF9WT0xVTUUgICA9IGV4cG9ydGVkLkRFRkFVTFRfVk9MVU1FICAgPSA5MDtcblx0dmFyIERFRkFVTFRfRFVSQVRJT04gPSBleHBvcnRlZC5ERUZBVUxUX0RVUkFUSU9OID0gMTI4O1xuXHR2YXIgREVGQVVMVF9DSEFOTkVMICA9IGV4cG9ydGVkLkRFRkFVTFRfQ0hBTk5FTCAgPSAwO1xuXG5cdC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXHQgKiBVdGlsaXR5IGZ1bmN0aW9uc1xuXHQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cblx0dmFyIFV0aWwgPSB7XG5cblx0XHRtaWRpX2xldHRlcl9waXRjaGVzOiB7IGE6MjEsIGI6MjMsIGM6MTIsIGQ6MTQsIGU6MTYsIGY6MTcsIGc6MTkgfSxcblxuXHRcdC8qKlxuXHRcdCAqIENvbnZlcnQgYSBzeW1ib2xpYyBub3RlIG5hbWUgKGUuZy4gXCJjNFwiKSB0byBhIG51bWVyaWMgTUlESSBwaXRjaCAoZS5nLlxuXHRcdCAqIDYwLCBtaWRkbGUgQykuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbiAtIFRoZSBzeW1ib2xpYyBub3RlIG5hbWUgdG8gcGFyc2UuXG5cdFx0ICogQHJldHVybnMge251bWJlcn0gVGhlIE1JREkgcGl0Y2ggdGhhdCBjb3JyZXNwb25kcyB0byB0aGUgc3ltYm9saWMgbm90ZVxuXHRcdCAqIG5hbWUuXG5cdFx0ICovXG5cdFx0bWlkaVBpdGNoRnJvbU5vdGU6IGZ1bmN0aW9uKG4pIHtcblx0XHRcdHZhciBtYXRjaGVzID0gLyhbYS1nXSkoIyt8YispPyhbMC05XSspJC9pLmV4ZWMobik7XG5cdFx0XHR2YXIgbm90ZSA9IG1hdGNoZXNbMV0udG9Mb3dlckNhc2UoKSwgYWNjaWRlbnRhbCA9IG1hdGNoZXNbMl0gfHwgJycsIG9jdGF2ZSA9IHBhcnNlSW50KG1hdGNoZXNbM10sIDEwKTtcblx0XHRcdHJldHVybiAoMTIgKiBvY3RhdmUpICsgVXRpbC5taWRpX2xldHRlcl9waXRjaGVzW25vdGVdICsgKGFjY2lkZW50YWwuc3Vic3RyKDAsMSk9PScjJz8xOi0xKSAqIGFjY2lkZW50YWwubGVuZ3RoO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBFbnN1cmUgdGhhdCB0aGUgZ2l2ZW4gYXJndW1lbnQgaXMgY29udmVydGVkIHRvIGEgTUlESSBwaXRjaC4gTm90ZSB0aGF0XG5cdFx0ICogaXQgbWF5IGFscmVhZHkgYmUgb25lIChpbmNsdWRpbmcgYSBwdXJlbHkgbnVtZXJpYyBzdHJpbmcpLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBwIC0gVGhlIHBpdGNoIHRvIGNvbnZlcnQuXG5cdFx0ICogQHJldHVybnMge251bWJlcn0gVGhlIHJlc3VsdGluZyBudW1lcmljIE1JREkgcGl0Y2guXG5cdFx0ICovXG5cdFx0ZW5zdXJlTWlkaVBpdGNoOiBmdW5jdGlvbihwKSB7XG5cdFx0XHRpZiAodHlwZW9mIHAgPT0gJ251bWJlcicgfHwgIS9bXjAtOV0vLnRlc3QocCkpIHtcblx0XHRcdFx0Ly8gbnVtZXJpYyBwaXRjaFxuXHRcdFx0XHRyZXR1cm4gcGFyc2VJbnQocCwgMTApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gYXNzdW1lIGl0J3MgYSBub3RlIG5hbWVcblx0XHRcdFx0cmV0dXJuIFV0aWwubWlkaVBpdGNoRnJvbU5vdGUocCk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdG1pZGlfcGl0Y2hlc19sZXR0ZXI6IHsgJzEyJzonYycsICcxMyc6J2MjJywgJzE0JzonZCcsICcxNSc6J2QjJywgJzE2JzonZScsICcxNyc6J2YnLCAnMTgnOidmIycsICcxOSc6J2cnLCAnMjAnOidnIycsICcyMSc6J2EnLCAnMjInOidhIycsICcyMyc6J2InIH0sXG5cdFx0bWlkaV9mbGF0dGVuZWRfbm90ZXM6IHsgJ2EjJzonYmInLCAnYyMnOidkYicsICdkIyc6J2ViJywgJ2YjJzonZ2InLCAnZyMnOidhYicgfSxcblxuXHRcdC8qKlxuXHRcdCAqIENvbnZlcnQgYSBudW1lcmljIE1JREkgcGl0Y2ggdmFsdWUgKGUuZy4gNjApIHRvIGEgc3ltYm9saWMgbm90ZSBuYW1lXG5cdFx0ICogKGUuZy4gXCJjNFwiKS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBuIC0gVGhlIG51bWVyaWMgTUlESSBwaXRjaCB2YWx1ZSB0byBjb252ZXJ0LlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JldHVybkZsYXR0ZW5lZD1mYWxzZV0gLSBXaGV0aGVyIHRvIHByZWZlciBmbGF0dGVuZWRcblx0XHQgKiBub3RlcyB0byBzaGFycGVuZWQgb25lcy4gT3B0aW9uYWwsIGRlZmF1bHQgZmFsc2UuXG5cdFx0ICogQHJldHVybnMge3N0cmluZ30gVGhlIHJlc3VsdGluZyBzeW1ib2xpYyBub3RlIG5hbWUuXG5cdFx0ICovXG5cdFx0bm90ZUZyb21NaWRpUGl0Y2g6IGZ1bmN0aW9uKG4sIHJldHVybkZsYXR0ZW5lZCkge1xuXHRcdFx0dmFyIG9jdGF2ZSA9IDAsIG5vdGVOdW0gPSBuLCBub3RlTmFtZSwgcmV0dXJuRmxhdHRlbmVkID0gcmV0dXJuRmxhdHRlbmVkIHx8IGZhbHNlO1xuXHRcdFx0aWYgKG4gPiAyMykge1xuXHRcdFx0XHQvLyBub3RlTnVtIGlzIG9uIG9jdGF2ZSAxIG9yIG1vcmVcblx0XHRcdFx0b2N0YXZlID0gTWF0aC5mbG9vcihuLzEyKSAtIDE7XG5cdFx0XHRcdC8vIHN1YnRyYWN0IG51bWJlciBvZiBvY3RhdmVzIGZyb20gbm90ZU51bVxuXHRcdFx0XHRub3RlTnVtID0gbiAtIG9jdGF2ZSAqIDEyO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBnZXQgbm90ZSBuYW1lIChjIywgZCwgZiMgZXRjKVxuXHRcdFx0bm90ZU5hbWUgPSBVdGlsLm1pZGlfcGl0Y2hlc19sZXR0ZXJbbm90ZU51bV07XG5cdFx0XHQvLyBVc2UgZmxhdHRlbmVkIG5vdGVzIGlmIHJlcXVlc3RlZCAoZS5nLiBmIyBzaG91bGQgYmUgb3V0cHV0IGFzIGdiKVxuXHRcdFx0aWYgKHJldHVybkZsYXR0ZW5lZCAmJiBub3RlTmFtZS5pbmRleE9mKCcjJykgPiAwKSB7XG5cdFx0XHRcdG5vdGVOYW1lID0gVXRpbC5taWRpX2ZsYXR0ZW5lZF9ub3Rlc1tub3RlTmFtZV07XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbm90ZU5hbWUgKyBvY3RhdmU7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIENvbnZlcnQgYmVhdHMgcGVyIG1pbnV0ZSAoQlBNKSB0byBtaWNyb3NlY29uZHMgcGVyIHF1YXJ0ZXIgbm90ZSAoTVBRTikuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gYnBtIC0gQSBudW1iZXIgaW4gYmVhdHMgcGVyIG1pbnV0ZS5cblx0XHQgKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIG1pY3Jvc2Vjb25kcyBwZXIgcXVhcnRlciBub3RlLlxuXHRcdCAqL1xuXHRcdG1wcW5Gcm9tQnBtOiBmdW5jdGlvbihicG0pIHtcblx0XHRcdHZhciBtcHFuID0gTWF0aC5mbG9vcig2MDAwMDAwMCAvIGJwbSk7XG5cdFx0XHR2YXIgcmV0PVtdO1xuXHRcdFx0ZG8ge1xuXHRcdFx0XHRyZXQudW5zaGlmdChtcHFuICYgMHhGRik7XG5cdFx0XHRcdG1wcW4gPj49IDg7XG5cdFx0XHR9IHdoaWxlIChtcHFuKTtcblx0XHRcdHdoaWxlIChyZXQubGVuZ3RoIDwgMykge1xuXHRcdFx0XHRyZXQucHVzaCgwKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIENvbnZlcnQgbWljcm9zZWNvbmRzIHBlciBxdWFydGVyIG5vdGUgKE1QUU4pIHRvIGJlYXRzIHBlciBtaW51dGUgKEJQTSkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gbXBxbiAtIFRoZSBudW1iZXIgb2YgbWljcm9zZWNvbmRzIHBlciBxdWFydGVyIG5vdGUuXG5cdFx0ICogQHJldHVybnMge251bWJlcn0gQSBudW1iZXIgaW4gYmVhdHMgcGVyIG1pbnV0ZS5cblx0XHQgKi9cblx0XHRicG1Gcm9tTXBxbjogZnVuY3Rpb24obXBxbikge1xuXHRcdFx0dmFyIG0gPSBtcHFuO1xuXHRcdFx0aWYgKHR5cGVvZiBtcHFuWzBdICE9ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdG0gPSAwO1xuXHRcdFx0XHRmb3IgKHZhciBpPTAsIGw9bXBxbi5sZW5ndGgtMTsgbCA+PSAwOyArK2ksIC0tbCkge1xuXHRcdFx0XHRcdG0gfD0gbXBxbltpXSA8PCBsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gTWF0aC5mbG9vcig2MDAwMDAwMCAvIG1wcW4pO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBDb252ZXJ0cyBhbiBhcnJheSBvZiBieXRlcyB0byBhIHN0cmluZyBvZiBoZXhhZGVjaW1hbCBjaGFyYWN0ZXJzLiBQcmVwYXJlc1xuXHRcdCAqIGl0IHRvIGJlIGNvbnZlcnRlZCBpbnRvIGEgYmFzZTY0IHN0cmluZy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7QXJyYXl9IGJ5dGVBcnJheSAtIEFycmF5IG9mIGJ5dGVzIHRvIGJlIGNvbnZlcnRlZC5cblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfSBIZXhhZGVjaW1hbCBzdHJpbmcsIGUuZy4gXCIwOTdCOEFcIi5cblx0XHQgKi9cblx0XHRjb2RlczJTdHI6IGZ1bmN0aW9uKGJ5dGVBcnJheSkge1xuXHRcdFx0cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgYnl0ZUFycmF5KTtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogQ29udmVydHMgYSBzdHJpbmcgb2YgaGV4YWRlY2ltYWwgdmFsdWVzIHRvIGFuIGFycmF5IG9mIGJ5dGVzLiBJdCBjYW4gYWxzb1xuXHRcdCAqIGFkZCByZW1haW5pbmcgXCIwXCIgbmliYmxlcyBpbiBvcmRlciB0byBoYXZlIGVub3VnaCBieXRlcyBpbiB0aGUgYXJyYXkgYXMgdGhlXG5cdFx0ICogYGZpbmFsQnl0ZXNgIHBhcmFtZXRlci5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBzdHJpbmcgb2YgaGV4YWRlY2ltYWwgdmFsdWVzIGUuZy4gXCIwOTdCOEFcIlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBbZmluYWxCeXRlc10gLSBPcHRpb25hbC4gVGhlIGRlc2lyZWQgbnVtYmVyIG9mIGJ5dGVzXG5cdFx0ICogKG5vdCBuaWJibGVzKSB0aGF0IHRoZSByZXR1cm5lZCBhcnJheSBzaG91bGQgY29udGFpbi5cblx0XHQgKiBAcmV0dXJucyB7QXJyYXl9IEFuIGFycmF5IG9mIG5pYmJsZXMuXG5cdFx0ICovXG5cdFx0c3RyMkJ5dGVzOiBmdW5jdGlvbiAoc3RyLCBmaW5hbEJ5dGVzKSB7XG5cdFx0XHRpZiAoZmluYWxCeXRlcykge1xuXHRcdFx0XHR3aGlsZSAoKHN0ci5sZW5ndGggLyAyKSA8IGZpbmFsQnl0ZXMpIHsgc3RyID0gXCIwXCIgKyBzdHI7IH1cblx0XHRcdH1cblxuXHRcdFx0dmFyIGJ5dGVzID0gW107XG5cdFx0XHRmb3IgKHZhciBpPXN0ci5sZW5ndGgtMTsgaT49MDsgaSA9IGktMikge1xuXHRcdFx0XHR2YXIgY2hhcnMgPSBpID09PSAwID8gc3RyW2ldIDogc3RyW2ktMV0gKyBzdHJbaV07XG5cdFx0XHRcdGJ5dGVzLnVuc2hpZnQocGFyc2VJbnQoY2hhcnMsIDE2KSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBieXRlcztcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogVHJhbnNsYXRlcyBudW1iZXIgb2YgdGlja3MgdG8gTUlESSB0aW1lc3RhbXAgZm9ybWF0LCByZXR1cm5pbmcgYW4gYXJyYXlcblx0XHQgKiBvZiBieXRlcyB3aXRoIHRoZSB0aW1lIHZhbHVlcy4gTUlESSBoYXMgYSB2ZXJ5IHBhcnRpY3VsYXIgd2F5IHRvIGV4cHJlc3Ncblx0XHQgKiB0aW1lOyB0YWtlIGEgZ29vZCBsb29rIGF0IHRoZSBzcGVjIGJlZm9yZSBldmVyIHRvdWNoaW5nIHRoaXMgZnVuY3Rpb24uXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gdGlja3MgLSBOdW1iZXIgb2YgdGlja3MgdG8gYmUgdHJhbnNsYXRlZC5cblx0XHQgKiBAcmV0dXJucyB7bnVtYmVyfSBBcnJheSBvZiBieXRlcyB0aGF0IGZvcm0gdGhlIE1JREkgdGltZSB2YWx1ZS5cblx0XHQgKi9cblx0XHR0cmFuc2xhdGVUaWNrVGltZTogZnVuY3Rpb24odGlja3MpIHtcblx0XHRcdHZhciBidWZmZXIgPSB0aWNrcyAmIDB4N0Y7XG5cblx0XHRcdHdoaWxlICh0aWNrcyA9IHRpY2tzID4+IDcpIHtcblx0XHRcdFx0YnVmZmVyIDw8PSA4O1xuXHRcdFx0XHRidWZmZXIgfD0gKCh0aWNrcyAmIDB4N0YpIHwgMHg4MCk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBiTGlzdCA9IFtdO1xuXHRcdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdFx0Ykxpc3QucHVzaChidWZmZXIgJiAweGZmKTtcblxuXHRcdFx0XHRpZiAoYnVmZmVyICYgMHg4MCkgeyBidWZmZXIgPj49IDg7IH1cblx0XHRcdFx0ZWxzZSB7IGJyZWFrOyB9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gYkxpc3Q7XG5cdFx0fSxcblxuXHR9O1xuXG5cdC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXHQgKiBFdmVudCBjbGFzc1xuXHQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cblx0LyoqXG5cdCAqIENvbnN0cnVjdCBhIE1JREkgZXZlbnQuXG5cdCAqXG5cdCAqIFBhcmFtZXRlcnMgaW5jbHVkZTpcblx0ICogIC0gdGltZSBbb3B0aW9uYWwgbnVtYmVyXSAtIFRpY2tzIHNpbmNlIHByZXZpb3VzIGV2ZW50LlxuXHQgKiAgLSB0eXBlIFtyZXF1aXJlZCBudW1iZXJdIC0gVHlwZSBvZiBldmVudC5cblx0ICogIC0gY2hhbm5lbCBbcmVxdWlyZWQgbnVtYmVyXSAtIENoYW5uZWwgZm9yIHRoZSBldmVudC5cblx0ICogIC0gcGFyYW0xIFtyZXF1aXJlZCBudW1iZXJdIC0gRmlyc3QgZXZlbnQgcGFyYW1ldGVyLlxuXHQgKiAgLSBwYXJhbTIgW29wdGlvbmFsIG51bWJlcl0gLSBTZWNvbmQgZXZlbnQgcGFyYW1ldGVyLlxuXHQgKi9cblx0dmFyIE1pZGlFdmVudCA9IGZ1bmN0aW9uKHBhcmFtcykge1xuXHRcdGlmICghdGhpcykgcmV0dXJuIG5ldyBNaWRpRXZlbnQocGFyYW1zKTtcblx0XHRpZiAocGFyYW1zICYmXG5cdFx0XHRcdChwYXJhbXMudHlwZSAgICAhPT0gbnVsbCB8fCBwYXJhbXMudHlwZSAgICAhPT0gdW5kZWZpbmVkKSAmJlxuXHRcdFx0XHQocGFyYW1zLmNoYW5uZWwgIT09IG51bGwgfHwgcGFyYW1zLmNoYW5uZWwgIT09IHVuZGVmaW5lZCkgJiZcblx0XHRcdFx0KHBhcmFtcy5wYXJhbTEgICE9PSBudWxsIHx8IHBhcmFtcy5wYXJhbTEgICE9PSB1bmRlZmluZWQpKSB7XG5cdFx0XHR0aGlzLnNldFRpbWUocGFyYW1zLnRpbWUpO1xuXHRcdFx0dGhpcy5zZXRUeXBlKHBhcmFtcy50eXBlKTtcblx0XHRcdHRoaXMuc2V0Q2hhbm5lbChwYXJhbXMuY2hhbm5lbCk7XG5cdFx0XHR0aGlzLnNldFBhcmFtMShwYXJhbXMucGFyYW0xKTtcblx0XHRcdHRoaXMuc2V0UGFyYW0yKHBhcmFtcy5wYXJhbTIpO1xuXHRcdH1cblx0fTtcblxuXHQvLyBldmVudCBjb2Rlc1xuXHRNaWRpRXZlbnQuTk9URV9PRkYgICAgICAgICAgID0gMHg4MDtcblx0TWlkaUV2ZW50Lk5PVEVfT04gICAgICAgICAgICA9IDB4OTA7XG5cdE1pZGlFdmVudC5BRlRFUl9UT1VDSCAgICAgICAgPSAweEEwO1xuXHRNaWRpRXZlbnQuQ09OVFJPTExFUiAgICAgICAgID0gMHhCMDtcblx0TWlkaUV2ZW50LlBST0dSQU1fQ0hBTkdFICAgICA9IDB4QzA7XG5cdE1pZGlFdmVudC5DSEFOTkVMX0FGVEVSVE9VQ0ggPSAweEQwO1xuXHRNaWRpRXZlbnQuUElUQ0hfQkVORCAgICAgICAgID0gMHhFMDtcblxuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIHRpbWUgZm9yIHRoZSBldmVudCBpbiB0aWNrcyBzaW5jZSB0aGUgcHJldmlvdXMgZXZlbnQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0aWNrcyAtIFRoZSBudW1iZXIgb2YgdGlja3Mgc2luY2UgdGhlIHByZXZpb3VzIGV2ZW50LiBNYXlcblx0ICogYmUgemVyby5cblx0ICovXG5cdE1pZGlFdmVudC5wcm90b3R5cGUuc2V0VGltZSA9IGZ1bmN0aW9uKHRpY2tzKSB7XG5cdFx0dGhpcy50aW1lID0gVXRpbC50cmFuc2xhdGVUaWNrVGltZSh0aWNrcyB8fCAwKTtcblx0fTtcblxuXHQvKipcblx0ICogU2V0IHRoZSB0eXBlIG9mIHRoZSBldmVudC4gTXVzdCBiZSBvbmUgb2YgdGhlIGV2ZW50IGNvZGVzIG9uIE1pZGlFdmVudC5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHR5cGUgLSBFdmVudCB0eXBlLlxuXHQgKi9cblx0TWlkaUV2ZW50LnByb3RvdHlwZS5zZXRUeXBlID0gZnVuY3Rpb24odHlwZSkge1xuXHRcdGlmICh0eXBlIDwgTWlkaUV2ZW50Lk5PVEVfT0ZGIHx8IHR5cGUgPiBNaWRpRXZlbnQuUElUQ0hfQkVORCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVHJ5aW5nIHRvIHNldCBhbiB1bmtub3duIGV2ZW50OiBcIiArIHR5cGUpO1xuXHRcdH1cblxuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNldCB0aGUgY2hhbm5lbCBmb3IgdGhlIGV2ZW50LiBNdXN0IGJlIGJldHdlZW4gMCBhbmQgMTUsIGluY2x1c2l2ZS5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGNoYW5uZWwgLSBUaGUgZXZlbnQgY2hhbm5lbC5cblx0ICovXG5cdE1pZGlFdmVudC5wcm90b3R5cGUuc2V0Q2hhbm5lbCA9IGZ1bmN0aW9uKGNoYW5uZWwpIHtcblx0XHRpZiAoY2hhbm5lbCA8IDAgfHwgY2hhbm5lbCA+IDE1KSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDaGFubmVsIGlzIG91dCBvZiBib3VuZHMuXCIpO1xuXHRcdH1cblxuXHRcdHRoaXMuY2hhbm5lbCA9IGNoYW5uZWw7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNldCB0aGUgZmlyc3QgcGFyYW1ldGVyIGZvciB0aGUgZXZlbnQuIE11c3QgYmUgYmV0d2VlbiAwIGFuZCAyNTUsXG5cdCAqIGluY2x1c2l2ZS5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHAgLSBUaGUgZmlyc3QgZXZlbnQgcGFyYW1ldGVyIHZhbHVlLlxuXHQgKi9cblx0TWlkaUV2ZW50LnByb3RvdHlwZS5zZXRQYXJhbTEgPSBmdW5jdGlvbihwKSB7XG5cdFx0dGhpcy5wYXJhbTEgPSBwO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIHNlY29uZCBwYXJhbWV0ZXIgZm9yIHRoZSBldmVudC4gTXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDI1NSxcblx0ICogaW5jbHVzaXZlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gcCAtIFRoZSBzZWNvbmQgZXZlbnQgcGFyYW1ldGVyIHZhbHVlLlxuXHQgKi9cblx0TWlkaUV2ZW50LnByb3RvdHlwZS5zZXRQYXJhbTIgPSBmdW5jdGlvbihwKSB7XG5cdFx0dGhpcy5wYXJhbTIgPSBwO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXJpYWxpemUgdGhlIGV2ZW50IHRvIGFuIGFycmF5IG9mIGJ5dGVzLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IFRoZSBhcnJheSBvZiBzZXJpYWxpemVkIGJ5dGVzLlxuXHQgKi9cblx0TWlkaUV2ZW50LnByb3RvdHlwZS50b0J5dGVzID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGJ5dGVBcnJheSA9IFtdO1xuXG5cdFx0dmFyIHR5cGVDaGFubmVsQnl0ZSA9IHRoaXMudHlwZSB8ICh0aGlzLmNoYW5uZWwgJiAweEYpO1xuXG5cdFx0Ynl0ZUFycmF5LnB1c2guYXBwbHkoYnl0ZUFycmF5LCB0aGlzLnRpbWUpO1xuXHRcdGJ5dGVBcnJheS5wdXNoKHR5cGVDaGFubmVsQnl0ZSk7XG5cdFx0Ynl0ZUFycmF5LnB1c2godGhpcy5wYXJhbTEpO1xuXG5cdFx0Ly8gU29tZSBldmVudHMgZG9uJ3QgaGF2ZSBhIHNlY29uZCBwYXJhbWV0ZXJcblx0XHRpZiAodGhpcy5wYXJhbTIgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnBhcmFtMiAhPT0gbnVsbCkge1xuXHRcdFx0Ynl0ZUFycmF5LnB1c2godGhpcy5wYXJhbTIpO1xuXHRcdH1cblx0XHRyZXR1cm4gYnl0ZUFycmF5O1xuXHR9O1xuXG5cdC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXHQgKiBNZXRhRXZlbnQgY2xhc3Ncblx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG5cdC8qKlxuXHQgKiBDb25zdHJ1Y3QgYSBtZXRhIGV2ZW50LlxuXHQgKlxuXHQgKiBQYXJhbWV0ZXJzIGluY2x1ZGU6XG5cdCAqICAtIHRpbWUgW29wdGlvbmFsIG51bWJlcl0gLSBUaWNrcyBzaW5jZSBwcmV2aW91cyBldmVudC5cblx0ICogIC0gdHlwZSBbcmVxdWlyZWQgbnVtYmVyXSAtIFR5cGUgb2YgZXZlbnQuXG5cdCAqICAtIGRhdGEgW29wdGlvbmFsIGFycmF5fHN0cmluZ10gLSBFdmVudCBkYXRhLlxuXHQgKi9cblx0dmFyIE1ldGFFdmVudCA9IGZ1bmN0aW9uKHBhcmFtcykge1xuXHRcdGlmICghdGhpcykgcmV0dXJuIG5ldyBNZXRhRXZlbnQocGFyYW1zKTtcblx0XHR2YXIgcCA9IHBhcmFtcyB8fCB7fTtcblx0XHR0aGlzLnNldFRpbWUocGFyYW1zLnRpbWUpO1xuXHRcdHRoaXMuc2V0VHlwZShwYXJhbXMudHlwZSk7XG5cdFx0dGhpcy5zZXREYXRhKHBhcmFtcy5kYXRhKTtcblx0fTtcblxuXHRNZXRhRXZlbnQuU0VRVUVOQ0UgICA9IDB4MDA7XG5cdE1ldGFFdmVudC5URVhUICAgICAgID0gMHgwMTtcblx0TWV0YUV2ZW50LkNPUFlSSUdIVCAgPSAweDAyO1xuXHRNZXRhRXZlbnQuVFJBQ0tfTkFNRSA9IDB4MDM7XG5cdE1ldGFFdmVudC5JTlNUUlVNRU5UID0gMHgwNDtcblx0TWV0YUV2ZW50LkxZUklDICAgICAgPSAweDA1O1xuXHRNZXRhRXZlbnQuTUFSS0VSICAgICA9IDB4MDY7XG5cdE1ldGFFdmVudC5DVUVfUE9JTlQgID0gMHgwNztcblx0TWV0YUV2ZW50LkNIQU5ORUxfUFJFRklYID0gMHgyMDtcblx0TWV0YUV2ZW50LkVORF9PRl9UUkFDSyAgID0gMHgyZjtcblx0TWV0YUV2ZW50LlRFTVBPICAgICAgPSAweDUxO1xuXHRNZXRhRXZlbnQuU01QVEUgICAgICA9IDB4NTQ7XG5cdE1ldGFFdmVudC5USU1FX1NJRyAgID0gMHg1ODtcblx0TWV0YUV2ZW50LktFWV9TSUcgICAgPSAweDU5O1xuXHRNZXRhRXZlbnQuU0VRX0VWRU5UICA9IDB4N2Y7XG5cblx0LyoqXG5cdCAqIFNldCB0aGUgdGltZSBmb3IgdGhlIGV2ZW50IGluIHRpY2tzIHNpbmNlIHRoZSBwcmV2aW91cyBldmVudC5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHRpY2tzIC0gVGhlIG51bWJlciBvZiB0aWNrcyBzaW5jZSB0aGUgcHJldmlvdXMgZXZlbnQuIE1heVxuXHQgKiBiZSB6ZXJvLlxuXHQgKi9cblx0TWV0YUV2ZW50LnByb3RvdHlwZS5zZXRUaW1lID0gZnVuY3Rpb24odGlja3MpIHtcblx0XHR0aGlzLnRpbWUgPSBVdGlsLnRyYW5zbGF0ZVRpY2tUaW1lKHRpY2tzIHx8IDApO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIHR5cGUgb2YgdGhlIGV2ZW50LiBNdXN0IGJlIG9uZSBvZiB0aGUgZXZlbnQgY29kZXMgb24gTWV0YUV2ZW50LlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gdCAtIEV2ZW50IHR5cGUuXG5cdCAqL1xuXHRNZXRhRXZlbnQucHJvdG90eXBlLnNldFR5cGUgPSBmdW5jdGlvbih0KSB7XG5cdFx0dGhpcy50eXBlID0gdDtcblx0fTtcblxuXHQvKipcblx0ICogU2V0IHRoZSBkYXRhIGFzc29jaWF0ZWQgd2l0aCB0aGUgZXZlbnQuIE1heSBiZSBhIHN0cmluZyBvciBhcnJheSBvZiBieXRlXG5cdCAqIHZhbHVlcy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd8QXJyYXl9IGQgLSBFdmVudCBkYXRhLlxuXHQgKi9cblx0TWV0YUV2ZW50LnByb3RvdHlwZS5zZXREYXRhID0gZnVuY3Rpb24oZCkge1xuXHRcdHRoaXMuZGF0YSA9IGQ7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNlcmlhbGl6ZSB0aGUgZXZlbnQgdG8gYW4gYXJyYXkgb2YgYnl0ZXMuXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gVGhlIGFycmF5IG9mIHNlcmlhbGl6ZWQgYnl0ZXMuXG5cdCAqL1xuXHRNZXRhRXZlbnQucHJvdG90eXBlLnRvQnl0ZXMgPSBmdW5jdGlvbigpIHtcblx0XHRpZiAoIXRoaXMudHlwZSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVHlwZSBmb3IgbWV0YS1ldmVudCBub3Qgc3BlY2lmaWVkLlwiKTtcblx0XHR9XG5cblx0XHR2YXIgYnl0ZUFycmF5ID0gW107XG5cdFx0Ynl0ZUFycmF5LnB1c2guYXBwbHkoYnl0ZUFycmF5LCB0aGlzLnRpbWUpO1xuXHRcdGJ5dGVBcnJheS5wdXNoKDB4RkYsIHRoaXMudHlwZSk7XG5cblx0XHQvLyBJZiBkYXRhIGlzIGFuIGFycmF5LCB3ZSBhc3N1bWUgdGhhdCBpdCBjb250YWlucyBzZXZlcmFsIGJ5dGVzLiBXZVxuXHRcdC8vIGFwZW5kIHRoZW0gdG8gYnl0ZUFycmF5LlxuXHRcdGlmIChBcnJheS5pc0FycmF5KHRoaXMuZGF0YSkpIHtcblx0XHRcdGJ5dGVBcnJheS5wdXNoKHRoaXMuZGF0YS5sZW5ndGgpO1xuXHRcdFx0Ynl0ZUFycmF5LnB1c2guYXBwbHkoYnl0ZUFycmF5LCB0aGlzLmRhdGEpO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIHRoaXMuZGF0YSA9PSAnbnVtYmVyJykge1xuXHRcdFx0Ynl0ZUFycmF5LnB1c2goMSwgdGhpcy5kYXRhKTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuZGF0YSAhPT0gbnVsbCAmJiB0aGlzLmRhdGEgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Ly8gYXNzdW1lIHN0cmluZzsgbWF5IGJlIGEgYmFkIGFzc3VtcHRpb25cblx0XHRcdGJ5dGVBcnJheS5wdXNoKHRoaXMuZGF0YS5sZW5ndGgpO1xuXHRcdFx0dmFyIGRhdGFCeXRlcyA9IHRoaXMuZGF0YS5zcGxpdCgnJykubWFwKGZ1bmN0aW9uKHgpeyByZXR1cm4geC5jaGFyQ29kZUF0KDApIH0pO1xuXHRcdFx0Ynl0ZUFycmF5LnB1c2guYXBwbHkoYnl0ZUFycmF5LCBkYXRhQnl0ZXMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRieXRlQXJyYXkucHVzaCgwKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYnl0ZUFycmF5O1xuXHR9O1xuXG5cdC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXHQgKiBUcmFjayBjbGFzc1xuXHQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cblx0LyoqXG5cdCAqIENvbnN0cnVjdCBhIE1JREkgdHJhY2suXG5cdCAqXG5cdCAqIFBhcmFtZXRlcnMgaW5jbHVkZTpcblx0ICogIC0gZXZlbnRzIFtvcHRpb25hbCBhcnJheV0gLSBBcnJheSBvZiBldmVudHMgZm9yIHRoZSB0cmFjay5cblx0ICovXG5cdHZhciBUcmFjayA9IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdGlmICghdGhpcykgcmV0dXJuIG5ldyBUcmFjayhjb25maWcpO1xuXHRcdHZhciBjID0gY29uZmlnIHx8IHt9O1xuXHRcdHRoaXMuZXZlbnRzID0gYy5ldmVudHMgfHwgW107XG5cdH07XG5cblx0VHJhY2suU1RBUlRfQllURVMgPSBbMHg0ZCwgMHg1NCwgMHg3MiwgMHg2Yl07XG5cdFRyYWNrLkVORF9CWVRFUyAgID0gWzB4MDAsIDB4RkYsIDB4MkYsIDB4MDBdO1xuXG5cdC8qKlxuXHQgKiBBZGQgYW4gZXZlbnQgdG8gdGhlIHRyYWNrLlxuXHQgKlxuXHQgKiBAcGFyYW0ge01pZGlFdmVudHxNZXRhRXZlbnR9IGV2ZW50IC0gVGhlIGV2ZW50IHRvIGFkZC5cblx0ICogQHJldHVybnMge1RyYWNrfSBUaGUgY3VycmVudCB0cmFjay5cblx0ICovXG5cdFRyYWNrLnByb3RvdHlwZS5hZGRFdmVudCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0dGhpcy5ldmVudHMucHVzaChldmVudCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0LyoqXG5cdCAqIEFkZCBhIG5vdGUtb24gZXZlbnQgdG8gdGhlIHRyYWNrLlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gY2hhbm5lbCAtIFRoZSBjaGFubmVsIHRvIGFkZCB0aGUgZXZlbnQgdG8uXG5cdCAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gcGl0Y2ggLSBUaGUgcGl0Y2ggb2YgdGhlIG5vdGUsIGVpdGhlciBudW1lcmljIG9yXG5cdCAqIHN5bWJvbGljLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gW3RpbWU9MF0gLSBUaGUgbnVtYmVyIG9mIHRpY2tzIHNpbmNlIHRoZSBwcmV2aW91cyBldmVudCxcblx0ICogZGVmYXVsdHMgdG8gMC5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFt2ZWxvY2l0eT05MF0gLSBUaGUgdm9sdW1lIGZvciB0aGUgbm90ZSwgZGVmYXVsdHMgdG9cblx0ICogREVGQVVMVF9WT0xVTUUuXG5cdCAqIEByZXR1cm5zIHtUcmFja30gVGhlIGN1cnJlbnQgdHJhY2suXG5cdCAqL1xuXHRUcmFjay5wcm90b3R5cGUuYWRkTm90ZU9uID0gVHJhY2sucHJvdG90eXBlLm5vdGVPbiA9IGZ1bmN0aW9uKGNoYW5uZWwsIHBpdGNoLCB0aW1lLCB2ZWxvY2l0eSkge1xuXHRcdHRoaXMuZXZlbnRzLnB1c2gobmV3IE1pZGlFdmVudCh7XG5cdFx0XHR0eXBlOiBNaWRpRXZlbnQuTk9URV9PTixcblx0XHRcdGNoYW5uZWw6IGNoYW5uZWwsXG5cdFx0XHRwYXJhbTE6IFV0aWwuZW5zdXJlTWlkaVBpdGNoKHBpdGNoKSxcblx0XHRcdHBhcmFtMjogdmVsb2NpdHkgfHwgREVGQVVMVF9WT0xVTUUsXG5cdFx0XHR0aW1lOiB0aW1lIHx8IDAsXG5cdFx0fSkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBBZGQgYSBub3RlLW9mZiBldmVudCB0byB0aGUgdHJhY2suXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBjaGFubmVsIC0gVGhlIGNoYW5uZWwgdG8gYWRkIHRoZSBldmVudCB0by5cblx0ICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBwaXRjaCAtIFRoZSBwaXRjaCBvZiB0aGUgbm90ZSwgZWl0aGVyIG51bWVyaWMgb3Jcblx0ICogc3ltYm9saWMuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbdGltZT0wXSAtIFRoZSBudW1iZXIgb2YgdGlja3Mgc2luY2UgdGhlIHByZXZpb3VzIGV2ZW50LFxuXHQgKiBkZWZhdWx0cyB0byAwLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gW3ZlbG9jaXR5PTkwXSAtIFRoZSB2ZWxvY2l0eSB0aGUgbm90ZSB3YXMgcmVsZWFzZWQsXG5cdCAqIGRlZmF1bHRzIHRvIERFRkFVTFRfVk9MVU1FLlxuXHQgKiBAcmV0dXJucyB7VHJhY2t9IFRoZSBjdXJyZW50IHRyYWNrLlxuXHQgKi9cblx0VHJhY2sucHJvdG90eXBlLmFkZE5vdGVPZmYgPSBUcmFjay5wcm90b3R5cGUubm90ZU9mZiA9IGZ1bmN0aW9uKGNoYW5uZWwsIHBpdGNoLCB0aW1lLCB2ZWxvY2l0eSkge1xuXHRcdHRoaXMuZXZlbnRzLnB1c2gobmV3IE1pZGlFdmVudCh7XG5cdFx0XHR0eXBlOiBNaWRpRXZlbnQuTk9URV9PRkYsXG5cdFx0XHRjaGFubmVsOiBjaGFubmVsLFxuXHRcdFx0cGFyYW0xOiBVdGlsLmVuc3VyZU1pZGlQaXRjaChwaXRjaCksXG5cdFx0XHRwYXJhbTI6IHZlbG9jaXR5IHx8IERFRkFVTFRfVk9MVU1FLFxuXHRcdFx0dGltZTogdGltZSB8fCAwLFxuXHRcdH0pKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHQvKipcblx0ICogQWRkIGEgbm90ZS1vbiBhbmQgLW9mZiBldmVudCB0byB0aGUgdHJhY2suXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBjaGFubmVsIC0gVGhlIGNoYW5uZWwgdG8gYWRkIHRoZSBldmVudCB0by5cblx0ICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBwaXRjaCAtIFRoZSBwaXRjaCBvZiB0aGUgbm90ZSwgZWl0aGVyIG51bWVyaWMgb3Jcblx0ICogc3ltYm9saWMuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBkdXIgLSBUaGUgZHVyYXRpb24gb2YgdGhlIG5vdGUsIGluIHRpY2tzLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gW3RpbWU9MF0gLSBUaGUgbnVtYmVyIG9mIHRpY2tzIHNpbmNlIHRoZSBwcmV2aW91cyBldmVudCxcblx0ICogZGVmYXVsdHMgdG8gMC5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFt2ZWxvY2l0eT05MF0gLSBUaGUgdmVsb2NpdHkgdGhlIG5vdGUgd2FzIHJlbGVhc2VkLFxuXHQgKiBkZWZhdWx0cyB0byBERUZBVUxUX1ZPTFVNRS5cblx0ICogQHJldHVybnMge1RyYWNrfSBUaGUgY3VycmVudCB0cmFjay5cblx0ICovXG5cdFRyYWNrLnByb3RvdHlwZS5hZGROb3RlID0gVHJhY2sucHJvdG90eXBlLm5vdGUgPSBmdW5jdGlvbihjaGFubmVsLCBwaXRjaCwgZHVyLCB0aW1lLCB2ZWxvY2l0eSkge1xuXHRcdHRoaXMubm90ZU9uKGNoYW5uZWwsIHBpdGNoLCB0aW1lLCB2ZWxvY2l0eSk7XG5cdFx0aWYgKGR1cikge1xuXHRcdFx0dGhpcy5ub3RlT2ZmKGNoYW5uZWwsIHBpdGNoLCBkdXIsIHZlbG9jaXR5KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0LyoqXG5cdCAqIEFkZCBhIG5vdGUtb24gYW5kIC1vZmYgZXZlbnQgdG8gdGhlIHRyYWNrIGZvciBlYWNoIHBpdGNoIGluIGFuIGFycmF5IG9mIHBpdGNoZXMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBjaGFubmVsIC0gVGhlIGNoYW5uZWwgdG8gYWRkIHRoZSBldmVudCB0by5cblx0ICogQHBhcmFtIHthcnJheX0gY2hvcmQgLSBBbiBhcnJheSBvZiBwaXRjaGVzLCBlaXRoZXIgbnVtZXJpYyBvclxuXHQgKiBzeW1ib2xpYy5cblx0ICogQHBhcmFtIHtudW1iZXJ9IGR1ciAtIFRoZSBkdXJhdGlvbiBvZiB0aGUgY2hvcmQsIGluIHRpY2tzLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gW3ZlbG9jaXR5PTkwXSAtIFRoZSB2ZWxvY2l0eSBvZiB0aGUgY2hvcmQsXG5cdCAqIGRlZmF1bHRzIHRvIERFRkFVTFRfVk9MVU1FLlxuXHQgKiBAcmV0dXJucyB7VHJhY2t9IFRoZSBjdXJyZW50IHRyYWNrLlxuXHQgKi9cblx0VHJhY2sucHJvdG90eXBlLmFkZENob3JkID0gVHJhY2sucHJvdG90eXBlLmNob3JkID0gZnVuY3Rpb24oY2hhbm5lbCwgY2hvcmQsIGR1ciwgdmVsb2NpdHkpIHtcblx0XHRpZiAoIUFycmF5LmlzQXJyYXkoY2hvcmQpICYmICFjaG9yZC5sZW5ndGgpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignQ2hvcmQgbXVzdCBiZSBhbiBhcnJheSBvZiBwaXRjaGVzJyk7XG5cdFx0fVxuXHRcdGNob3JkLmZvckVhY2goZnVuY3Rpb24obm90ZSkge1xuXHRcdFx0dGhpcy5ub3RlT24oY2hhbm5lbCwgbm90ZSwgMCwgdmVsb2NpdHkpO1xuXHRcdH0sIHRoaXMpO1xuXHRcdGNob3JkLmZvckVhY2goZnVuY3Rpb24obm90ZSwgaW5kZXgpIHtcblx0XHRcdGlmIChpbmRleCA9PT0gMCkge1xuXHRcdFx0XHR0aGlzLm5vdGVPZmYoY2hhbm5lbCwgbm90ZSwgZHVyKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMubm90ZU9mZihjaGFubmVsLCBub3RlKTtcblx0XHRcdH1cblx0XHR9LCB0aGlzKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHQvKipcblx0ICogU2V0IGluc3RydW1lbnQgZm9yIHRoZSB0cmFjay5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGNoYW5uZWwgLSBUaGUgY2hhbm5lbCB0byBzZXQgdGhlIGluc3RydW1lbnQgb24uXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBpbnN0cnVtZW50IC0gVGhlIGluc3RydW1lbnQgdG8gc2V0IGl0IHRvLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gW3RpbWU9MF0gLSBUaGUgbnVtYmVyIG9mIHRpY2tzIHNpbmNlIHRoZSBwcmV2aW91cyBldmVudCxcblx0ICogZGVmYXVsdHMgdG8gMC5cblx0ICogQHJldHVybnMge1RyYWNrfSBUaGUgY3VycmVudCB0cmFjay5cblx0ICovXG5cdFRyYWNrLnByb3RvdHlwZS5zZXRJbnN0cnVtZW50ID0gVHJhY2sucHJvdG90eXBlLmluc3RydW1lbnQgPSBmdW5jdGlvbihjaGFubmVsLCBpbnN0cnVtZW50LCB0aW1lKSB7XG5cdFx0dGhpcy5ldmVudHMucHVzaChuZXcgTWlkaUV2ZW50KHtcblx0XHRcdHR5cGU6IE1pZGlFdmVudC5QUk9HUkFNX0NIQU5HRSxcblx0XHRcdGNoYW5uZWw6IGNoYW5uZWwsXG5cdFx0XHRwYXJhbTE6IGluc3RydW1lbnQsXG5cdFx0XHR0aW1lOiB0aW1lIHx8IDAsXG5cdFx0fSkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIHRlbXBvIGZvciB0aGUgdHJhY2suXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBicG0gLSBUaGUgbmV3IG51bWJlciBvZiBiZWF0cyBwZXIgbWludXRlLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gW3RpbWU9MF0gLSBUaGUgbnVtYmVyIG9mIHRpY2tzIHNpbmNlIHRoZSBwcmV2aW91cyBldmVudCxcblx0ICogZGVmYXVsdHMgdG8gMC5cblx0ICogQHJldHVybnMge1RyYWNrfSBUaGUgY3VycmVudCB0cmFjay5cblx0ICovXG5cdFRyYWNrLnByb3RvdHlwZS5zZXRUZW1wbyA9IFRyYWNrLnByb3RvdHlwZS50ZW1wbyA9IGZ1bmN0aW9uKGJwbSwgdGltZSkge1xuXHRcdHRoaXMuZXZlbnRzLnB1c2gobmV3IE1ldGFFdmVudCh7XG5cdFx0XHR0eXBlOiBNZXRhRXZlbnQuVEVNUE8sXG5cdFx0XHRkYXRhOiBVdGlsLm1wcW5Gcm9tQnBtKGJwbSksXG5cdFx0XHR0aW1lOiB0aW1lIHx8IDAsXG5cdFx0fSkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXJpYWxpemUgdGhlIHRyYWNrIHRvIGFuIGFycmF5IG9mIGJ5dGVzLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IFRoZSBhcnJheSBvZiBzZXJpYWxpemVkIGJ5dGVzLlxuXHQgKi9cblx0VHJhY2sucHJvdG90eXBlLnRvQnl0ZXMgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgdHJhY2tMZW5ndGggPSAwO1xuXHRcdHZhciBldmVudEJ5dGVzID0gW107XG5cdFx0dmFyIHN0YXJ0Qnl0ZXMgPSBUcmFjay5TVEFSVF9CWVRFUztcblx0XHR2YXIgZW5kQnl0ZXMgICA9IFRyYWNrLkVORF9CWVRFUztcblxuXHRcdHZhciBhZGRFdmVudEJ5dGVzID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdHZhciBieXRlcyA9IGV2ZW50LnRvQnl0ZXMoKTtcblx0XHRcdHRyYWNrTGVuZ3RoICs9IGJ5dGVzLmxlbmd0aDtcblx0XHRcdGV2ZW50Qnl0ZXMucHVzaC5hcHBseShldmVudEJ5dGVzLCBieXRlcyk7XG5cdFx0fTtcblxuXHRcdHRoaXMuZXZlbnRzLmZvckVhY2goYWRkRXZlbnRCeXRlcyk7XG5cblx0XHQvLyBBZGQgdGhlIGVuZC1vZi10cmFjayBieXRlcyB0byB0aGUgc3VtIG9mIGJ5dGVzIGZvciB0aGUgdHJhY2ssIHNpbmNlXG5cdFx0Ly8gdGhleSBhcmUgY291bnRlZCAodW5saWtlIHRoZSBzdGFydC1vZi10cmFjayBvbmVzKS5cblx0XHR0cmFja0xlbmd0aCArPSBlbmRCeXRlcy5sZW5ndGg7XG5cblx0XHQvLyBNYWtlcyBzdXJlIHRoYXQgdHJhY2sgbGVuZ3RoIHdpbGwgZmlsbCB1cCA0IGJ5dGVzIHdpdGggMHMgaW4gY2FzZVxuXHRcdC8vIHRoZSBsZW5ndGggaXMgbGVzcyB0aGFuIHRoYXQgKHRoZSB1c3VhbCBjYXNlKS5cblx0XHR2YXIgbGVuZ3RoQnl0ZXMgPSBVdGlsLnN0cjJCeXRlcyh0cmFja0xlbmd0aC50b1N0cmluZygxNiksIDQpO1xuXG5cdFx0cmV0dXJuIHN0YXJ0Qnl0ZXMuY29uY2F0KGxlbmd0aEJ5dGVzLCBldmVudEJ5dGVzLCBlbmRCeXRlcyk7XG5cdH07XG5cblx0LyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdCAqIEZpbGUgY2xhc3Ncblx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG5cdC8qKlxuXHQgKiBDb25zdHJ1Y3QgYSBmaWxlIG9iamVjdC5cblx0ICpcblx0ICogUGFyYW1ldGVycyBpbmNsdWRlOlxuXHQgKiAgLSB0aWNrcyBbb3B0aW9uYWwgbnVtYmVyXSAtIE51bWJlciBvZiB0aWNrcyBwZXIgYmVhdCwgZGVmYXVsdHMgdG8gMTI4LlxuXHQgKiAgICBNdXN0IGJlIDEtMzI3NjcuXG5cdCAqICAtIHRyYWNrcyBbb3B0aW9uYWwgYXJyYXldIC0gVHJhY2sgZGF0YS5cblx0ICovXG5cdHZhciBGaWxlID0gZnVuY3Rpb24oY29uZmlnKXtcblx0XHRpZiAoIXRoaXMpIHJldHVybiBuZXcgRmlsZShjb25maWcpO1xuXG5cdFx0dmFyIGMgPSBjb25maWcgfHwge307XG5cdFx0aWYgKGMudGlja3MpIHtcblx0XHRcdGlmICh0eXBlb2YgYy50aWNrcyAhPT0gJ251bWJlcicpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdUaWNrcyBwZXIgYmVhdCBtdXN0IGJlIGEgbnVtYmVyIScpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoYy50aWNrcyA8PSAwIHx8IGMudGlja3MgPj0gKDEgPDwgMTUpIHx8IGMudGlja3MgJSAxICE9PSAwKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignVGlja3MgcGVyIGJlYXQgbXVzdCBiZSBhbiBpbnRlZ2VyIGJldHdlZW4gMSBhbmQgMzI3NjchJyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLnRpY2tzID0gYy50aWNrcyB8fCAxMjg7XG5cdFx0dGhpcy50cmFja3MgPSBjLnRyYWNrcyB8fCBbXTtcblx0fTtcblxuXHRGaWxlLkhEUl9DSFVOS0lEICAgICA9IFwiTVRoZFwiOyAgICAgICAgICAgICAvLyBGaWxlIG1hZ2ljIGNvb2tpZVxuXHRGaWxlLkhEUl9DSFVOS19TSVpFICA9IFwiXFx4MDBcXHgwMFxceDAwXFx4MDZcIjsgLy8gSGVhZGVyIGxlbmd0aCBmb3IgU01GXG5cdEZpbGUuSERSX1RZUEUwICAgICAgID0gXCJcXHgwMFxceDAwXCI7ICAgICAgICAgLy8gTWlkaSBUeXBlIDAgaWRcblx0RmlsZS5IRFJfVFlQRTEgICAgICAgPSBcIlxceDAwXFx4MDFcIjsgICAgICAgICAvLyBNaWRpIFR5cGUgMSBpZFxuXG5cdC8qKlxuXHQgKiBBZGQgYSB0cmFjayB0byB0aGUgZmlsZS5cblx0ICpcblx0ICogQHBhcmFtIHtUcmFja30gdHJhY2sgLSBUaGUgdHJhY2sgdG8gYWRkLlxuXHQgKi9cblx0RmlsZS5wcm90b3R5cGUuYWRkVHJhY2sgPSBmdW5jdGlvbih0cmFjaykge1xuXHRcdGlmICh0cmFjaykge1xuXHRcdFx0dGhpcy50cmFja3MucHVzaCh0cmFjayk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IGVsc2Uge1xuXHRcdFx0dHJhY2sgPSBuZXcgVHJhY2soKTtcblx0XHRcdHRoaXMudHJhY2tzLnB1c2godHJhY2spO1xuXHRcdFx0cmV0dXJuIHRyYWNrO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogU2VyaWFsaXplIHRoZSBNSURJIGZpbGUgdG8gYW4gYXJyYXkgb2YgYnl0ZXMuXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gVGhlIGFycmF5IG9mIHNlcmlhbGl6ZWQgYnl0ZXMuXG5cdCAqL1xuXHRGaWxlLnByb3RvdHlwZS50b0J5dGVzID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHRyYWNrQ291bnQgPSB0aGlzLnRyYWNrcy5sZW5ndGgudG9TdHJpbmcoMTYpO1xuXG5cdFx0Ly8gcHJlcGFyZSB0aGUgZmlsZSBoZWFkZXJcblx0XHR2YXIgYnl0ZXMgPSBGaWxlLkhEUl9DSFVOS0lEICsgRmlsZS5IRFJfQ0hVTktfU0laRTtcblxuXHRcdC8vIHNldCBNaWRpIHR5cGUgYmFzZWQgb24gbnVtYmVyIG9mIHRyYWNrc1xuXHRcdGlmIChwYXJzZUludCh0cmFja0NvdW50LCAxNikgPiAxKSB7XG5cdFx0XHRieXRlcyArPSBGaWxlLkhEUl9UWVBFMTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ynl0ZXMgKz0gRmlsZS5IRFJfVFlQRTA7XG5cdFx0fVxuXG5cdFx0Ly8gYWRkIHRoZSBudW1iZXIgb2YgdHJhY2tzICgyIGJ5dGVzKVxuXHRcdGJ5dGVzICs9IFV0aWwuY29kZXMyU3RyKFV0aWwuc3RyMkJ5dGVzKHRyYWNrQ291bnQsIDIpKTtcblx0XHQvLyBhZGQgdGhlIG51bWJlciBvZiB0aWNrcyBwZXIgYmVhdCAoY3VycmVudGx5IGhhcmRjb2RlZClcblx0XHRieXRlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCh0aGlzLnRpY2tzLzI1NiksICB0aGlzLnRpY2tzJTI1Nik7O1xuXG5cdFx0Ly8gaXRlcmF0ZSBvdmVyIHRoZSB0cmFja3MsIGNvbnZlcnRpbmcgdG8gYnl0ZXMgdG9vXG5cdFx0dGhpcy50cmFja3MuZm9yRWFjaChmdW5jdGlvbih0cmFjaykge1xuXHRcdFx0Ynl0ZXMgKz0gVXRpbC5jb2RlczJTdHIodHJhY2sudG9CeXRlcygpKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiBieXRlcztcblx0fTtcblxuXHQvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0ICogRXhwb3J0c1xuXHQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cblx0ZXhwb3J0ZWQuVXRpbCA9IFV0aWw7XG5cdGV4cG9ydGVkLkZpbGUgPSBGaWxlO1xuXHRleHBvcnRlZC5UcmFjayA9IFRyYWNrO1xuXHRleHBvcnRlZC5FdmVudCA9IE1pZGlFdmVudDtcblx0ZXhwb3J0ZWQuTWV0YUV2ZW50ID0gTWV0YUV2ZW50O1xuXG59KSggTWlkaSApO1xuXG5pZiAodHlwZW9mIG1vZHVsZSAhPSAndW5kZWZpbmVkJyAmJiBtb2R1bGUgIT09IG51bGwpIHtcblx0bW9kdWxlLmV4cG9ydHMgPSBNaWRpO1xufSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPSAndW5kZWZpbmVkJyAmJiBleHBvcnRzICE9PSBudWxsKSB7XG5cdGV4cG9ydHMgPSBNaWRpO1xufSBlbHNlIHtcblx0dGhpcy5NaWRpID0gTWlkaTtcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gZmxhdHRlbih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUucmVkdWNlKChwcmV2LCBjdXIpID0+IHByZXYuY29uY2F0KGN1ciksIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdCh2YWx1ZSwgdGltZXMpIHtcbiAgY29uc3Qgb3V0ID0gW107XG5cbiAgd2hpbGUgKHRpbWVzKSB7XG4gICAgb3V0LnB1c2godmFsdWUpO1xuICAgIHRpbWVzIC09IDE7XG4gIH1cblxuICByZXR1cm4gb3V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZ2UobWluLCBtYXgsIHN0ZXApIHtcbiAgY29uc3QgYWNjID0gW107XG5cbiAgaWYgKCFzdGVwKSB7XG4gICAgZm9yIChsZXQgaSA9IG1pbjsgaSA8PSBtYXg7IGkgKz0gMSkge1xuICAgICAgYWNjLnB1c2goaSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IGRpZmYgPSAobWF4IC0gbWluKSAvIHN0ZXA7XG5cbiAgICBmb3IgKGxldCBpID0gbWluOyBpIDw9IG1heDsgaSArPSBkaWZmKSB7XG4gICAgICBhY2MucHVzaChpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYWNjO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSByZXR1cm4gdmFsdWU7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkgcmV0dXJuIHZhbHVlLm1hcChjbG9uZSk7XG5cbiAgY29uc3QgY29weSA9IHt9O1xuXG4gIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgY29weVtrZXldID0gY2xvbmUodmFsdWVba2V5XSk7XG4gIH0pO1xuXG4gIHJldHVybiBjb3B5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gemlwKGEsIGIsIGNiKSB7XG4gIGNvbnN0IG1heCA9IE1hdGgubWF4KGEubGVuZ3RoLCBiLmxlbmd0aCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXg7IGkgKz0gMSkge1xuICAgIGlmICh0eXBlb2YgYVtpXSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGJbaV0gIT09ICd1bmRlZmluZWQnKSBjYihhW2ldLCBiW2ldKTtcbiAgfVxufVxuIiwgIigoKT0+e1widXNlIHN0cmljdFwiO3ZhciBuPXs0MTM6bj0+e24uZXhwb3J0cz1KU09OLnBhcnNlKCd7XCI1dGhcIjpcIjEwMDAwMDAxMDAwMFwiLFwiTTcjNXN1czRcIjpcIjEwMDAwMTAwMTAwMVwiLFwiNyM1c3VzNFwiOlwiMTAwMDAxMDAxMDEwXCIsXCJzdXM0XCI6XCIxMDAwMDEwMTAwMDBcIixcIk03c3VzNFwiOlwiMTAwMDAxMDEwMDAxXCIsXCI3c3VzNFwiOlwiMTAwMDAxMDEwMDEwXCIsXCI3bm81XCI6XCIxMDAwMTAwMDAwMTBcIixcImF1Z1wiOlwiMTAwMDEwMDAxMDAwXCIsXCJNN2I2XCI6XCIxMDAwMTAwMDEwMDFcIixcIm1hajcjNVwiOlwiMTAwMDEwMDAxMDAxXCIsXCI3IzVcIjpcIjEwMDAxMDAwMTAxMFwiLFwiN2IxM1wiOlwiMTAwMDEwMDAxMDEwXCIsXCJNXCI6XCIxMDAwMTAwMTAwMDBcIixcIm1hajdcIjpcIjEwMDAxMDAxMDAwMVwiLFwiN3RoXCI6XCIxMDAwMTAwMTAwMTBcIixcIjZ0aFwiOlwiMTAwMDEwMDEwMTAwXCIsXCI3YWRkNlwiOlwiMTAwMDEwMDEwMTEwXCIsXCI3YjZcIjpcIjEwMDAxMDAxMTAxMFwiLFwiTWI1XCI6XCIxMDAwMTAxMDAwMDBcIixcIk03YjVcIjpcIjEwMDAxMDEwMDAwMVwiLFwiN2I1XCI6XCIxMDAwMTAxMDAwMTBcIixcIm1haiM0XCI6XCIxMDAwMTAxMTAwMDFcIixcIjcjMTFcIjpcIjEwMDAxMDExMDAxMFwiLFwiTTYjMTFcIjpcIjEwMDAxMDExMDEwMFwiLFwiNyMxMWIxM1wiOlwiMTAwMDEwMTExMDEwXCIsXCJtIzVcIjpcIjEwMDEwMDAwMTAwMFwiLFwibWI2TTdcIjpcIjEwMDEwMDAwMTAwMVwiLFwibTcjNVwiOlwiMTAwMTAwMDAxMDEwXCIsXCJtXCI6XCIxMDAxMDAwMTAwMDBcIixcIm0vbWE3XCI6XCIxMDAxMDAwMTAwMDFcIixcIm03XCI6XCIxMDAxMDAwMTAwMTBcIixcIm02XCI6XCIxMDAxMDAwMTAxMDBcIixcIm1NYWo3YjZcIjpcIjEwMDEwMDAxMTAwMVwiLFwiZGltXCI6XCIxMDAxMDAxMDAwMDBcIixcIm9NN1wiOlwiMTAwMTAwMTAwMDAxXCIsXCJtN2I1XCI6XCIxMDAxMDAxMDAwMTBcIixcImRpbTdcIjpcIjEwMDEwMDEwMDEwMFwiLFwibzdNN1wiOlwiMTAwMTAwMTAwMTAxXCIsXCI0dGhcIjpcIjEwMDEwMTAwMDAxMFwiLFwibWFkZDRcIjpcIjEwMDEwMTAxMDAwMFwiLFwibTdhZGQxMVwiOlwiMTAwMTAxMDEwMDEwXCIsXCIrYWRkIzlcIjpcIjEwMDExMDAwMTAwMFwiLFwiNyM1IzlcIjpcIjEwMDExMDAwMTAxMFwiLFwiNyM5XCI6XCIxMDAxMTAwMTAwMTBcIixcIjEzIzlcIjpcIjEwMDExMDAxMDExMFwiLFwiNyM5YjEzXCI6XCIxMDAxMTAwMTEwMTBcIixcIm1hajcjOSMxMVwiOlwiMTAwMTEwMTEwMDAxXCIsXCI3IzkjMTFcIjpcIjEwMDExMDExMDAxMFwiLFwiMTMjOSMxMVwiOlwiMTAwMTEwMTEwMTEwXCIsXCI3IzkjMTFiMTNcIjpcIjEwMDExMDExMTAxMFwiLFwic3VzMlwiOlwiMTAxMDAwMDEwMDAwXCIsXCJNOSM1c3VzNFwiOlwiMTAxMDAxMDAxMDAxXCIsXCJzdXMyNFwiOlwiMTAxMDAxMDEwMDAwXCIsXCJNOXN1czRcIjpcIjEwMTAwMTAxMDAwMVwiLFwiMTF0aFwiOlwiMTAxMDAxMDEwMDEwXCIsXCI5c3VzNFwiOlwiMTAxMDAxMDEwMDEwXCIsXCIxM3N1czRcIjpcIjEwMTAwMTAxMDExMFwiLFwiOW5vNVwiOlwiMTAxMDEwMDAwMDEwXCIsXCIxM25vNVwiOlwiMTAxMDEwMDAwMTEwXCIsXCJNIzVhZGQ5XCI6XCIxMDEwMTAwMDEwMDBcIixcIm1hajkjNVwiOlwiMTAxMDEwMDAxMDAxXCIsXCI5IzVcIjpcIjEwMTAxMDAwMTAxMFwiLFwiOWIxM1wiOlwiMTAxMDEwMDAxMDEwXCIsXCJNYWRkOVwiOlwiMTAxMDEwMDEwMDAwXCIsXCJtYWo5XCI6XCIxMDEwMTAwMTAwMDFcIixcIjl0aFwiOlwiMTAxMDEwMDEwMDEwXCIsXCI2LzlcIjpcIjEwMTAxMDAxMDEwMFwiLFwibWFqMTNcIjpcIjEwMTAxMDAxMDEwMVwiLFwiTTdhZGQxM1wiOlwiMTAxMDEwMDEwMTAxXCIsXCIxM3RoXCI6XCIxMDEwMTAwMTAxMTBcIixcIk05YjVcIjpcIjEwMTAxMDEwMDAwMVwiLFwiOWI1XCI6XCIxMDEwMTAxMDAwMTBcIixcIjEzYjVcIjpcIjEwMTAxMDEwMDExMFwiLFwiOSM1IzExXCI6XCIxMDEwMTAxMDEwMTBcIixcIm1hajkjMTFcIjpcIjEwMTAxMDExMDAwMVwiLFwiOSMxMVwiOlwiMTAxMDEwMTEwMDEwXCIsXCI2OSMxMVwiOlwiMTAxMDEwMTEwMTAwXCIsXCJNMTMjMTFcIjpcIjEwMTAxMDExMDEwMVwiLFwiMTMjMTFcIjpcIjEwMTAxMDExMDExMFwiLFwiOSMxMWIxM1wiOlwiMTAxMDEwMTExMDEwXCIsXCJtOSM1XCI6XCIxMDExMDAwMDEwMTBcIixcIm1hZGQ5XCI6XCIxMDExMDAwMTAwMDBcIixcIm1NOVwiOlwiMTAxMTAwMDEwMDAxXCIsXCJtOVwiOlwiMTAxMTAwMDEwMDEwXCIsXCJtNjlcIjpcIjEwMTEwMDAxMDEwMFwiLFwibTEzXCI6XCIxMDExMDAwMTAxMTBcIixcIm1NYWo5YjZcIjpcIjEwMTEwMDAxMTAwMVwiLFwibTliNVwiOlwiMTAxMTAwMTAwMDEwXCIsXCJtMTFBXCI6XCIxMDExMDEwMDEwMTBcIixcIm0xMVwiOlwiMTAxMTAxMDEwMDEwXCIsXCJiOXN1c1wiOlwiMTEwMDAxMDEwMDEwXCIsXCIxMWI5XCI6XCIxMTAwMDEwMTAwMTBcIixcIjdzdXM0YjliMTNcIjpcIjExMDAwMTAxMTAxMFwiLFwiYWx0N1wiOlwiMTEwMDEwMDAwMDEwXCIsXCI3IzViOVwiOlwiMTEwMDEwMDAxMDEwXCIsXCJNYWRkYjlcIjpcIjExMDAxMDAxMDAwMFwiLFwiTTdiOVwiOlwiMTEwMDEwMDEwMDAxXCIsXCI3YjlcIjpcIjExMDAxMDAxMDAxMFwiLFwiMTNiOVwiOlwiMTEwMDEwMDEwMTEwXCIsXCI3YjliMTNcIjpcIjExMDAxMDAxMTAxMFwiLFwiNyM1YjkjMTFcIjpcIjExMDAxMDEwMTAxMFwiLFwiN2I5IzExXCI6XCIxMTAwMTAxMTAwMTBcIixcIjEzYjkjMTFcIjpcIjExMDAxMDExMDExMFwiLFwiN2I5YjEzIzExXCI6XCIxMTAwMTAxMTEwMTBcIixcIm1iNmI5XCI6XCIxMTAxMDAwMDEwMDBcIixcIjdiOSM5XCI6XCIxMTAxMTAwMTAwMTBcIn0nKX0sNzIyOm49PntuLmV4cG9ydHM9SlNPTi5wYXJzZSgne1wibWFqb3IgcGVudGF0b25pY1wiOlwiMTAxMDEwMDEwMTAwXCIsXCJpb25pYW4gcGVudGF0b25pY1wiOlwiMTAwMDExMDEwMDAxXCIsXCJtaXhvbHlkaWFuIHBlbnRhdG9uaWNcIjpcIjEwMDAxMTAxMDAxMFwiLFwicml0dXNlblwiOlwiMTAxMDAxMDEwMTAwXCIsXCJlZ3lwdGlhblwiOlwiMTAxMDAxMDEwMDEwXCIsXCJuZW9wb2xpdGFuIG1ham9yIHBlbnRhdG9uaWNcIjpcIjEwMDAxMTEwMDAxMFwiLFwidmlldG5hbWVzZSAxXCI6XCIxMDAxMDEwMTEwMDBcIixcInBlbG9nXCI6XCIxMTAxMDAwMTEwMDBcIixcImt1bW9pam9zaGlcIjpcIjExMDAwMTAxMTAwMFwiLFwiaGlyYWpvc2hpXCI6XCIxMDExMDAwMTEwMDBcIixcIml3YXRvXCI6XCIxMTAwMDExMDAwMTBcIixcImluLXNlblwiOlwiMTEwMDAxMDEwMDEwXCIsXCJseWRpYW4gcGVudGF0b25pY1wiOlwiMTAwMDEwMTEwMDAxXCIsXCJtYWxrb3MgcmFnYVwiOlwiMTAwMTAxMDAxMDEwXCIsXCJsb2NyaWFuIHBlbnRhdG9uaWNcIjpcIjEwMDEwMTEwMDAxMFwiLFwibWlub3IgcGVudGF0b25pY1wiOlwiMTAwMTAxMDEwMDEwXCIsXCJtaW5vciBzaXggcGVudGF0b25pY1wiOlwiMTAwMTAxMDEwMTAwXCIsXCJmbGF0IHRocmVlIHBlbnRhdG9uaWNcIjpcIjEwMTEwMDAxMDEwMFwiLFwiZmxhdCBzaXggcGVudGF0b25pY1wiOlwiMTAxMDEwMDExMDAwXCIsXCJzY3JpYWJpblwiOlwiMTEwMDEwMDEwMTAwXCIsXCJ3aG9sZSB0b25lIHBlbnRhdG9uaWNcIjpcIjEwMDAxMDEwMTAxMFwiLFwibHlkaWFuICM1UCBwZW50YXRvbmljXCI6XCIxMDAwMTAxMDEwMDFcIixcImx5ZGlhbiBkb21pbmFudCBwZW50YXRvbmljXCI6XCIxMDAwMTAxMTAwMTBcIixcIm1pbm9yICM3TSBwZW50YXRvbmljXCI6XCIxMDAxMDEwMTAwMDFcIixcInN1cGVyIGxvY3JpYW4gcGVudGF0b25pY1wiOlwiMTAwMTEwMTAwMDEwXCIsXCJtaW5vciBoZXhhdG9uaWNcIjpcIjEwMTEwMTAxMDAwMVwiLFwiYXVnbWVudGVkXCI6XCIxMDAxMTAwMTEwMDFcIixcIm1ham9yIGJsdWVzXCI6XCIxMDExMTAwMTAxMDBcIixcInBpb25naW9cIjpcIjEwMTAwMTAxMDExMFwiLFwicHJvbWV0aGV1cyBuZW9wb2xpdGFuXCI6XCIxMTAwMTAxMDAxMTBcIixcInByb21ldGhldXNcIjpcIjEwMTAxMDEwMDExMFwiLFwibXlzdGVyeSAjMVwiOlwiMTEwMDEwMTAxMDEwXCIsXCJzaXggdG9uZSBzeW1tZXRyaWNcIjpcIjExMDAxMTAwMTEwMFwiLFwid2hvbGUgdG9uZVwiOlwiMTAxMDEwMTAxMDEwXCIsXCJtZXNzaWFlblxcJ3MgbW9kZSAjNVwiOlwiMTEwMDAxMTEwMDAxXCIsXCJtaW5vciBibHVlc1wiOlwiMTAwMTAxMTEwMDEwXCIsXCJsb2NyaWFuIG1ham9yXCI6XCIxMDEwMTExMDEwMTBcIixcImRvdWJsZSBoYXJtb25pYyBseWRpYW5cIjpcIjExMDAxMDExMTAwMVwiLFwiaGFybW9uaWMgbWlub3JcIjpcIjEwMTEwMTAxMTAwMVwiLFwiYWx0ZXJlZFwiOlwiMTEwMTEwMTAxMDEwXCIsXCJsb2NyaWFuICMyXCI6XCIxMDExMDExMDEwMTBcIixcIm1peG9seWRpYW4gYjZcIjpcIjEwMTAxMTAxMTAxMFwiLFwibHlkaWFuIGRvbWluYW50XCI6XCIxMDEwMTAxMTAxMTBcIixcImx5ZGlhblwiOlwiMTAxMDEwMTEwMTAxXCIsXCJseWRpYW4gYXVnbWVudGVkXCI6XCIxMDEwMTAxMDExMDFcIixcImRvcmlhbiBiMlwiOlwiMTEwMTAxMDEwMTEwXCIsXCJtZWxvZGljIG1pbm9yXCI6XCIxMDExMDEwMTAxMDFcIixcImxvY3JpYW5cIjpcIjExMDEwMTEwMTAxMFwiLFwidWx0cmFsb2NyaWFuXCI6XCIxMTAxMTAxMDExMDBcIixcImxvY3JpYW4gNlwiOlwiMTEwMTAxMTAwMTEwXCIsXCJhdWdtZW50ZWQgaGVwdGF0b25pY1wiOlwiMTAwMTExMDExMDAxXCIsXCJyb21hbmlhbiBtaW5vclwiOlwiMTAxMTAwMTEwMTEwXCIsXCJkb3JpYW4gIzRcIjpcIjEwMTEwMDExMDExMFwiLFwibHlkaWFuIGRpbWluaXNoZWRcIjpcIjEwMTEwMDExMDEwMVwiLFwicGhyeWdpYW5cIjpcIjExMDEwMTAxMTAxMFwiLFwibGVhZGluZyB3aG9sZSB0b25lXCI6XCIxMDEwMTAxMDEwMTFcIixcImx5ZGlhbiBtaW5vclwiOlwiMTAxMDEwMTExMDEwXCIsXCJwaHJ5Z2lhbiBkb21pbmFudFwiOlwiMTEwMDExMDExMDEwXCIsXCJiYWxpbmVzZVwiOlwiMTEwMTAxMDExMDAxXCIsXCJuZW9wb2xpdGFuIG1ham9yXCI6XCIxMTAxMDEwMTAxMDFcIixcImFlb2xpYW5cIjpcIjEwMTEwMTAxMTAxMFwiLFwiaGFybW9uaWMgbWFqb3JcIjpcIjEwMTAxMTAxMTAwMVwiLFwiZG91YmxlIGhhcm1vbmljIG1ham9yXCI6XCIxMTAwMTEwMTEwMDFcIixcImRvcmlhblwiOlwiMTAxMTAxMDEwMTEwXCIsXCJodW5nYXJpYW4gbWlub3JcIjpcIjEwMTEwMDExMTAwMVwiLFwiaHVuZ2FyaWFuIG1ham9yXCI6XCIxMDAxMTAxMTAxMTBcIixcIm9yaWVudGFsXCI6XCIxMTAwMTExMDAxMTBcIixcImZsYW1lbmNvXCI6XCIxMTAxMTAxMTAwMTBcIixcInRvZGkgcmFnYVwiOlwiMTEwMTAwMTExMDAxXCIsXCJtaXhvbHlkaWFuXCI6XCIxMDEwMTEwMTAxMTBcIixcInBlcnNpYW5cIjpcIjExMDAxMTEwMTAwMVwiLFwibWFqb3JcIjpcIjEwMTAxMTAxMDEwMVwiLFwiZW5pZ21hdGljXCI6XCIxMTAwMTAxMDEwMTFcIixcIm1ham9yIGF1Z21lbnRlZFwiOlwiMTAxMDExMDAxMTAxXCIsXCJseWRpYW4gIzlcIjpcIjEwMDExMDExMDEwMVwiLFwibWVzc2lhZW5cXCdzIG1vZGUgIzRcIjpcIjExMTAwMTExMTAwMVwiLFwicHVydmkgcmFnYVwiOlwiMTEwMDExMTExMDAxXCIsXCJzcGFuaXNoIGhlcHRhdG9uaWNcIjpcIjExMDExMTAxMTAxMFwiLFwiYmVib3BcIjpcIjEwMTAxMTAxMDExMVwiLFwiYmVib3AgbWlub3JcIjpcIjEwMTExMTAxMDExMFwiLFwiYmVib3AgbWFqb3JcIjpcIjEwMTAxMTAxMTEwMVwiLFwiYmVib3AgbG9jcmlhblwiOlwiMTEwMTAxMTExMDEwXCIsXCJtaW5vciBiZWJvcFwiOlwiMTAxMTAxMDExMDExXCIsXCJkaW1pbmlzaGVkXCI6XCIxMDExMDExMDExMDFcIixcImljaGlrb3N1Y2hvXCI6XCIxMDEwMTExMTAxMDFcIixcIm1pbm9yIHNpeCBkaW1pbmlzaGVkXCI6XCIxMDExMDEwMTExMDFcIixcImhhbGYtd2hvbGUgZGltaW5pc2hlZFwiOlwiMTEwMTEwMTEwMTEwXCIsXCJrYWZpIHJhZ2FcIjpcIjEwMDExMTAxMDExMVwiLFwibWVzc2lhZW5cXCdzIG1vZGUgIzZcIjpcIjEwMTAxMTEwMTAxMVwiLFwiY29tcG9zaXRlIGJsdWVzXCI6XCIxMDExMTExMTAxMTBcIixcIm1lc3NpYWVuXFwncyBtb2RlICMzXCI6XCIxMDExMTAxMTEwMTFcIixcIm1lc3NpYWVuXFwncyBtb2RlICM3XCI6XCIxMTExMDExMTExMDFcIixcImNocm9tYXRpY1wiOlwiMTExMTExMTExMTExXCIsXCJpb25pYW5cIjpcIjEwMTAxMTAxMDEwMVwiLFwibWlub3JcIjpcIjEwMTEwMTAxMTAxMFwifScpfX0sZT17fTtmdW5jdGlvbiBvKGEpe3ZhciBpPWVbYV07aWYodm9pZCAwIT09aSlyZXR1cm4gaS5leHBvcnRzO3ZhciByPWVbYV09e2V4cG9ydHM6e319O3JldHVybiBuW2FdKHIsci5leHBvcnRzLG8pLHIuZXhwb3J0c31vLmQ9KG4sZSk9Pntmb3IodmFyIGEgaW4gZSlvLm8oZSxhKSYmIW8ubyhuLGEpJiZPYmplY3QuZGVmaW5lUHJvcGVydHkobixhLHtlbnVtZXJhYmxlOiEwLGdldDplW2FdfSl9LG8ubz0obixlKT0+T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4sZSksby5yPW49PntcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfTt2YXIgYT17fTsoKCk9PntvLnIoYSksby5kKGEse2Nob3JkOigpPT5tLGNob3JkczooKT0+dCxpbmxpbmVDaG9yZDooKT0+cixzY2FsZTooKT0+YyxzY2FsZXM6KCk9PnN9KTt2YXIgbj1vKDcyMiksZT1vKDQxMyksaT1mdW5jdGlvbihvKXt2YXIgYT1vLnNjYWxlLGk9by5jaG9yZCxyPWF8fGksdD1hP1wic2NhbGVcIjpcImNob3JkXCI7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIHIpdGhyb3cgbmV3IEVycm9yKFwiXCIuY29uY2F0KHIsXCIgaXMgbm90IGEgdmFsaWQgaW5wdXQgZm9yIFwiKS5jb25jYXQodCkpO3ZhciBzLG0sYz1yLmluZGV4T2YoXCIgXCIpOy0xPT09Yz8ocz1yLnNsaWNlKDEpLG09clswXSxcImJcIiE9PXJbMV0mJlwiI1wiIT09clsxXXx8KHM9ci5zbGljZSgyKSxtKz1yWzFdKSk6KHM9ci5zbGljZSgtMT09PWM/MTpjKzEpLG09ci5zbGljZSgwLGMpKTt2YXIgZD1mdW5jdGlvbihuKXtyZXR1cm57XCJDI1wiOlwiRGJcIixcIkQjXCI6XCJFYlwiLFwiRiNcIjpcIkdiXCIsXCJHI1wiOlwiQWJcIixcIkEjXCI6XCJCYlwifVtuLnRvVXBwZXJDYXNlKCldfHxuLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK24uc2xpY2UoMSl9KG0ucmVwbGFjZSgvXFxkL2csXCJcIikpLGw9XCJcIiE9PW0ucmVwbGFjZSgvXFxEL2csXCJcIik/K20ucmVwbGFjZSgvXFxEL2csXCJcIik6NDtpZihpc05hTihsKSl0aHJvdyBuZXcgRXJyb3IoXCJcIi5jb25jYXQobVswXSxcIiBkb2VzIG5vdCBoYXZlIGEgdmFsaWQgb2N0YXZlXCIpKTtpZighbltzXSYmIWVbc10pdGhyb3cgbmV3IEVycm9yKFwiXCIuY29uY2F0KHIsXCIgaXMgbm90IGEgdmFsaWQgXCIpLmNvbmNhdCh0KSk7Zm9yKHZhciBiPWZ1bmN0aW9uKG4sZSl7dmFyIG89W1wiQ1wiLFwiRGJcIixcIkRcIixcIkViXCIsXCJFXCIsXCJGXCIsXCJHYlwiLFwiR1wiLFwiQWJcIixcIkFcIixcIkJiXCIsXCJCXCJdLGE9by5tYXAoKGZ1bmN0aW9uKG4pe3JldHVybiBuK2V9KSksaT1vLm1hcCgoZnVuY3Rpb24obil7cmV0dXJuIG4rKGUrMSl9KSkscj1hLmNvbmNhdChpKTtyZXR1cm4gci5zbGljZShyLmluZGV4T2YobitlKSl9KGQsbCksdT1bXSxwPTAsaD0wLGY9YT9uOmU7cDxmW3NdLmxlbmd0aDspXCIxXCI9PT1mW3NdW3BdJiZ1LnB1c2goYltoXSkscCsrLGgrKztyZXR1cm4gdX0scj1mdW5jdGlvbihuKXt2YXIgZSxvLGE9XCJiOXN1c1wiLHI9NDtyZXR1cm4gbi5pbmNsdWRlcyhhKT8obz1hLGU9bi5zbGljZSgwLG4uaW5kZXhPZihhKSkpOihlPW5bMF0sbz1uLnNsaWNlKDEpLFwiYlwiIT09blsxXSYmXCIjXCIhPT1uWzFdfHwoZSs9blsxXSxvPW4uc2xpY2UoMikpKSxuLmluY2x1ZGVzKFwiX1wiKSYmKHI9K24uc3BsaXQoXCJfXCIpWzFdLG89by5zbGljZSgwLG8uaW5kZXhPZihcIl9cIikpKSxpKHtjaG9yZDplK3IrXCIgXCIrb30pfSx0PWZ1bmN0aW9uKCl7cmV0dXJuIE9iamVjdC5rZXlzKGUpfSxzPWZ1bmN0aW9uKCl7cmV0dXJuIE9iamVjdC5rZXlzKG4pfSxtPWZ1bmN0aW9uKG4pe3JldHVybiBpKHtjaG9yZDpufSl9LGM9ZnVuY3Rpb24obil7cmV0dXJuIGkoe3NjYWxlOm59KX19KSgpO3ZhciBpPWV4cG9ydHM7Zm9yKHZhciByIGluIGEpaVtyXT1hW3JdO2EuX19lc01vZHVsZSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGksXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWFpbi5qcy5tYXAiLCAiaW1wb3J0IHsgaW5saW5lQ2hvcmQgfSBmcm9tICdoYXJtb25pY3MnO1xuXG5leHBvcnQgY29uc3QgUkVfU0VQQVJBVE9SID0gL1xcfC87XG5leHBvcnQgY29uc3QgUkVfUEFUVEVSTiA9IC9eKD86W3hfLV18XFxbLis/XFxdKSskLztcbmV4cG9ydCBjb25zdCBSRV9OVU1CRVIgPSAvXig/OlxcLj9cXGQrfFxcZCsoPzpcXC5cXGQrKT8pJC87XG5leHBvcnQgY29uc3QgUkVfQ0hPUkQgPSAvXlthLWdBLUddW14jXFxzXSpcXGQrKD86XFwuXFwuKT8kLztcbmV4cG9ydCBjb25zdCBSRV9OT1RFID0gL15bYS1nQS1HXVsjYl0/XFxkKyQvO1xuZXhwb3J0IGNvbnN0IFJFX01PREUgPSAvXig/IVtpdklWXXsxLDN9KVthLXpdezIsfS87XG5leHBvcnQgY29uc3QgUkVfUFJPRyA9IC9eW2l2SVZdezEsM31cdTAwQjA/JC87XG5leHBvcnQgY29uc3QgUkVfVFJJTSA9IC9cXC4rJC87XG5cbmNvbnN0IENBQ0hFID0ge307XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGxpdCh2YWx1ZSkge1xuICBsZXQgZGF0YSA9IFtdO1xuICB0cnkge1xuICAgIGRhdGEgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZS5zcGxpdCgvKD89W1xcZFtcXF14Xy1dKS8pKTtcbiAgICBkYXRhID0gZGF0YS5yZXBsYWNlKC8sXCJcXFtcIiwvZywgJywgWycpO1xuICAgIGRhdGEgPSBkYXRhLnJlcGxhY2UoL1wiXFxbXCIsL2csICdbJyk7XG4gICAgZGF0YSA9IGRhdGEucmVwbGFjZSgvLFwiXFxdXCIvZywgJ10nKTtcbiAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIGlnbm9yZVxuICB9XG4gIHJldHVybiBkYXRhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGV2ZWwodmFsdWUpIHtcbiAgaWYgKCFDQUNIRVt2YWx1ZV0pIHtcbiAgICBpZiAodmFsdWUuaW5jbHVkZXMoJyUnKSkge1xuICAgICAgQ0FDSEVbdmFsdWVdID0gMTI3ICogcGFyc2VGbG9hdChgLiR7dmFsdWV9YCk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZS5pbmNsdWRlcygnLycpKSB7XG4gICAgICBjb25zdCBbYSwgYl0gPSB2YWx1ZS5zcGxpdCgnLycpO1xuXG4gICAgICBDQUNIRVt2YWx1ZV0gPSBhIC8gYjtcbiAgICB9IGVsc2UgaWYgKHZhbHVlLmluY2x1ZGVzKCcqJykpIHtcbiAgICAgIGNvbnN0IFthLCBiXSA9IHZhbHVlLnNwbGl0KCcqJyk7XG5cbiAgICAgIENBQ0hFW3ZhbHVlXSA9IGEgKiBiO1xuICAgIH0gZWxzZSB7XG4gICAgICBDQUNIRVt2YWx1ZV0gPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIENBQ0hFW3ZhbHVlXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlKHJlLCB2YWx1ZSkge1xuICBpZiAoIUNBQ0hFW3JlLnNvdXJjZSArIHZhbHVlXSkge1xuICAgIENBQ0hFW3JlLnNvdXJjZSArIHZhbHVlXSA9IHJlLnRlc3QodmFsdWUpO1xuICB9XG4gIHJldHVybiBDQUNIRVtyZS5zb3VyY2UgKyB2YWx1ZV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb2dyZXNzaW9uKHZhbHVlKSB7XG4gIHJldHVybiB2YWxpZGF0ZShSRV9QUk9HLCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdHRlcm4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbGlkYXRlKFJFX1BBVFRFUk4sIHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XG4gIHJldHVybiB2YWxpZGF0ZShSRV9OVU1CRVIsIHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ2hvcmQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbGlkYXRlKFJFX0NIT1JELCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05vdGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbGlkYXRlKFJFX05PVEUsIHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTW9kZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsaWRhdGUoUkVfTU9ERSwgdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHlwZSh2YWx1ZSkge1xuICBjb25zdCBrZXkgPSBgVCR7dmFsdWV9YDtcbiAgaWYgKCFDQUNIRVtrZXldKSB7XG4gICAgaWYgKGlzTm90ZSh2YWx1ZSkpIENBQ0hFW2tleV0gPSAnbm90ZSc7XG4gICAgZWxzZSBpZiAoaXNDaG9yZCh2YWx1ZSkpIENBQ0hFW2tleV0gPSAnY2hvcmQnO1xuICAgIGVsc2UgaWYgKGlzUGF0dGVybih2YWx1ZSkpIENBQ0hFW2tleV0gPSAncGF0dGVybic7XG4gICAgZWxzZSBpZiAoaXNNb2RlKHZhbHVlKSkgQ0FDSEVba2V5XSA9ICdtb2RlJztcbiAgICBlbHNlIGlmIChpc051bWJlcih2YWx1ZSkpIENBQ0hFW2tleV0gPSAnbnVtYmVyJztcbiAgICBlbHNlIENBQ0hFW2tleV0gPSAndmFsdWUnO1xuICB9XG4gIHJldHVybiBDQUNIRVtrZXldO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtKGV4cHJlc3Npb24pIHtcbiAgaWYgKCFleHByZXNzaW9uIHx8IHR5cGVvZiBleHByZXNzaW9uICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0aW5nIGEgdmFsaWQgc3RyaW5nLCBnaXZlbiAnJHtleHByZXNzaW9ufSdgKTtcbiAgfVxuXG4gIGlmIChDQUNIRVtgJCR7ZXhwcmVzc2lvbn1gXSkgcmV0dXJuIENBQ0hFW2AkJHtleHByZXNzaW9ufWBdO1xuXG4gIGNvbnN0IHRva2VucyA9IGV4cHJlc3Npb24uc3BsaXQoL1xccysvKTtcblxuICBpZiAoIXRva2Vucy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGluZyBhIHZhbGlkIGV4cHJlc3Npb24sIGdpdmVuICcke2V4cHJlc3Npb259J2ApO1xuICB9XG5cbiAgY29uc3QgYXN0ID0gW107XG4gIGNvbnN0IGNhcnJ5ID0gW107XG5cbiAgZnVuY3Rpb24gYWRkKHR5cGUsIHZhbHVlKSB7XG4gICAgY29uc3QgaXRlbSA9IHsgdHlwZSwgdmFsdWUgfTtcblxuICAgIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpdGVtLnZhbHVlID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IGxldmVsKHZhbHVlKSA6IHZhbHVlO1xuICAgIH1cblxuICAgIGlmICh0eXBlID09PSAnY2hvcmQnICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGl0ZW0udmFsdWUgPSBpbmxpbmVDaG9yZCh2YWx1ZS5yZXBsYWNlKFJFX1RSSU0sICcnKSk7XG5cbiAgICAgIGlmICh2YWx1ZS5pbmNsdWRlcygnLi4nKSkge1xuICAgICAgICBpdGVtLnVuZm9sZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09ICd2YWx1ZScgJiYgdmFsdWUuaW5kZXhPZigneCcpID4gLTEpIHtcbiAgICAgIGNvbnN0IHggPSB2YWx1ZS5zcGxpdCgneCcpO1xuXG4gICAgICBpZiAoIShpc051bWJlcih4WzBdKSAmJiBpc051bWJlcih4WzFdKSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RpbmcgdmFsaWQgbnVtYmVycyBmb3IgJHt0eXBlfSwgZ2l2ZW4gJyR7dmFsdWV9J2ApO1xuICAgICAgfVxuXG4gICAgICBpdGVtLnZhbHVlID0gcGFyc2VJbnQoeFswXSwgMTApO1xuICAgICAgaXRlbS5yZXBlYXQgPSBwYXJzZUludCh4WzFdLCAxMCk7XG4gICAgICBpdGVtLnR5cGUgPSAnbnVtYmVyJztcbiAgICB9XG5cbiAgICBhc3QucHVzaChpdGVtKTtcbiAgfVxuXG4gIHRva2Vucy5yZWR1Y2UoKHByZXYsIGN1ciwgaSkgPT4ge1xuICAgIGxldCB0eXBlO1xuXG4gICAgY29uc3QgbmV4dCA9IHRva2Vuc1tpICsgMV07XG4gICAgY29uc3QgbGFzdCA9IGFzdFthc3QubGVuZ3RoIC0gMV0gfHwge307XG5cbiAgICBpZiAoUkVfU0VQQVJBVE9SLnRlc3QoY3VyKSkge1xuICAgICAgYWRkKCdjaG9yZCcsIGN1ci5zcGxpdChSRV9TRVBBUkFUT1IpKTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY3VyID09PSAnc3RyaW5nJyAmJiAoXG4gICAgICAoY3VyLmluY2x1ZGVzKCcvJykgJiYgY3VyLmluZGV4T2YoJy8nKSA+IDApXG4gICAgICB8fCAoY3VyLmluY2x1ZGVzKCcqJykgJiYgY3VyLmluZGV4T2YoJyonKSA+IDApXG4gICAgICB8fCAoY3VyLmluY2x1ZGVzKCclJykgJiYgY3VyLmluZGV4T2YoJyUnKSA+IDApXG4gICAgKSkge1xuICAgICAgYWRkKCdudW1iZXInLCBsZXZlbChjdXIpKTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmIChjdXIuaW5kZXhPZignJScpID4gLTEpIHtcbiAgICAgIGlmIChjdXIgPT09ICclJykge1xuICAgICAgICBpZiAoIWxhc3QudHlwZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyBleHByZXNzaW9uIHRvIHJlcGVhdCwgZ2l2ZW4gJyR7dG9rZW5zLnNsaWNlKDAsIGkpLmpvaW4oJyAnKX0nYCk7XG4gICAgICAgIH1cblxuICAgICAgICBsYXN0LnJlcGVhdCA9IGxhc3QucmVwZWF0IHx8IDE7XG4gICAgICAgIGxhc3QucmVwZWF0ICs9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGQoJ3BhcmFtJywgY3VyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKGlzUHJvZ3Jlc3Npb24oY3VyKSkge1xuICAgICAgbGFzdC52YWx1ZSArPSBgICR7Y3VyfWA7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAoY3VyLmNoYXJBdCgpID09PSAnIycpIHtcbiAgICAgIGFkZCgnY2hhbm5lbCcsIGN1cik7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAoaXNOb3RlKGN1cikgfHwgaXNDaG9yZChjdXIpIHx8IGlzTW9kZShjdXIpIHx8IGlzTnVtYmVyKGN1cikpIHtcbiAgICAgIGNhcnJ5LnB1c2goY3VyKTtcblxuICAgICAgaWYgKFxuICAgICAgICAhbmV4dFxuICAgICAgICB8fCBjYXJyeS5sZW5ndGggPT09IDNcbiAgICAgICAgfHwgIShpc05vdGUobmV4dCkgfHwgaXNNb2RlKG5leHQpIHx8IGlzTnVtYmVyKG5leHQpKVxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IG9sZCA9IGNhcnJ5LnNwbGljZSgwLCBjYXJyeS5sZW5ndGgpO1xuICAgICAgICBjb25zdCB0ZXN0ID0gb2xkWzBdO1xuXG4gICAgICAgIGxldCBtb2RlID0gb2xkWzFdO1xuICAgICAgICBsZXQgb2N0YXZlID0gb2xkWzJdO1xuXG4gICAgICAgIGlmICghb2N0YXZlICYmIGlzTnVtYmVyKG1vZGUpKSB7XG4gICAgICAgICAgb2N0YXZlID0gbW9kZTtcbiAgICAgICAgICBtb2RlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRlc3QubGVuZ3RoIDwgMlxuICAgICAgICAgICYmIGlzTm90ZSh0ZXN0KVxuICAgICAgICAgICYmIChpc01vZGUobW9kZSkgfHwgaXNOdW1iZXIob2N0YXZlKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgYWRkKCdtb2RlJywgb2xkLmpvaW4oJyAnKSk7XG4gICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgIH1cblxuICAgICAgICBvbGQuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICBhZGQoeC5sZW5ndGggPiAxIHx8ICFpc05vdGUoeCkgPyBnZXRUeXBlKHgpIDogJ21vZGUnLCB4KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGN1ciA9PT0gJ3N0cmluZycgJiYgY3VyLmluZGV4T2YoJy4uJykgPiAtMSkge1xuICAgICAgY29uc3QgcGFydHMgPSBjdXIuc3BsaXQoJy4uJyk7XG4gICAgICBjb25zdCBtaW4gPSBwYXJ0c1swXSB8fCAxO1xuICAgICAgY29uc3QgbWF4ID0gcGFydHNbMV0gfHwgSW5maW5pdHk7XG5cbiAgICAgIHR5cGUgPSAnc2xpY2UnO1xuICAgICAgY3VyID0gW21pbiwgbWF4XTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGN1ciA9PT0gJ3N0cmluZycgJiYgKGN1ci5jaGFyQXQoKSA9PT0gJy8nIHx8IGN1ci5jaGFyQXQoKSA9PT0gJyonKSkge1xuICAgICAgY29uc3Qgb3BlcmF0b3IgPSBjdXIuY2hhckF0KCkgPT09ICcvJyA/ICdkaXZpZGUnIDogJ211bHRpcGx5JztcbiAgICAgIGNvbnN0IG51bWJlciA9IGN1ci5zdWJzdHIoMSk7XG5cbiAgICAgIGlmICghaXNOdW1iZXIobnVtYmVyKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGluZyBhIHZhbGlkIGV4cHJlc3Npb24gdG8gJHtvcGVyYXRvcn0sIGdpdmVuICcke3Rva2Vucy5zbGljZSgwLCBpKS5qb2luKCcgJyl9ICR7Y3VyfSdgKTtcbiAgICAgIH1cblxuICAgICAgYWRkKG9wZXJhdG9yLCBwYXJzZUZsb2F0KG51bWJlcikpO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKCF0eXBlICYmIGdldFR5cGUoY3VyKSA9PT0gJ3ZhbHVlJyAmJiBBcnJheS5pc0FycmF5KGxhc3QudmFsdWUpKSB7XG4gICAgICBsYXN0LnZhbHVlWzFdID0gbGFzdC52YWx1ZVsxXSB8fCAnJztcbiAgICAgIGxhc3QudmFsdWVbMV0gKz0gbGFzdC52YWx1ZVsxXSA/ICcgJyA6ICcnO1xuICAgICAgbGFzdC52YWx1ZVsxXSArPSBjdXI7XG4gICAgICByZXR1cm4gY3VyO1xuICAgIH1cblxuICAgIGFkZCh0eXBlIHx8IGdldFR5cGUoY3VyKSwgdHlwZW9mIGN1ciA9PT0gJ3N0cmluZycgJiYgaXNOdW1iZXIoY3VyKSA/IHBhcnNlSW50KGN1ciwgMTApIDogY3VyKTtcbiAgICByZXR1cm4gY3VyO1xuICB9LCBudWxsKTtcblxuICBDQUNIRVtgJCR7ZXhwcmVzc2lvbn1gXSA9IGFzdDtcbiAgcmV0dXJuIGFzdDtcbn1cbiIsICIvKipcbiAqIFRha2UgYSBzdHJpbmcgaW5wdXQgYW5kIGNoZWNrIGlmIGl0IHMgYSBub3RlIG5hbWUgb3Igbm90XG4gKiBAcGFyYW0gIHtTdHJpbmd9IHN0ciBOb3RlIG5hbWUgZS5nLiBjNFxuICogQHJldHVybiB7Qm9vbGVhbn0gUmV0dXJuIHRydWUgZm9yIGM0IG9yIHJldHVybiBmYWxzZSBmb3Igc29tZXRoaW5nIGxpa2UgQ01cbiAqL1xuZXhwb3J0IGNvbnN0IGlzTm90ZSA9IChzdHI6IHN0cmluZyk6IGJvb2xlYW4gPT5cbiAgL15bYS1nQS1HXSg/OiN8Yik/XFxkJC8udGVzdChzdHIpO1xuXG4vKipcbiAqIFRha2UgYSBTdHJpbmcgaW5wdXQgc3VjaCBhcyB4eHhbeHhbeHhdXVxuICogYW5kIHJldHVybiBhbiBBcnJheSBhcyBbJ3gnLCAneCcsICd4JywgWyd4JywgJ3gnLCBbJ3gnLCAneCddXV1cbiAqIEBwYXJhbSAge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuZXhwb3J0IGNvbnN0IGV4cGFuZFN0ciA9IChzdHI6IHN0cmluZyk6IGFueSA9PiB7XG4gIHN0ciA9IEpTT04uc3RyaW5naWZ5KHN0ci5zcGxpdCgnJykpO1xuICBzdHIgPSBzdHIucmVwbGFjZSgvLFwiXFxbXCIsL2csICcsIFsnKTtcbiAgc3RyID0gc3RyLnJlcGxhY2UoL1wiXFxbXCIsL2csICdbJyk7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKC8sXCJcXF1cIi9nLCAnXScpO1xuICByZXR1cm4gSlNPTi5wYXJzZShzdHIpO1xufTtcblxuLyoqXG4gKiBCYXNpYyBBcnJheSByYW5kb21pemVyXG4gKiBAcGFyYW0gIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0gIHtib29sZWFufSBmdWxsU2h1ZmZsZSBFbnN1cmUgbm8gZWxlbWVudHMgcmVtYWluIGluIG9sZCBwbGFjZVxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbmV4cG9ydCBjb25zdCBzaHVmZmxlID0gKGFycjogYW55W10sIGZ1bGxTaHVmZmxlOiBib29sZWFuID0gdHJ1ZSk6IHN0cmluZ1tdID0+IHtcbiAgY29uc3QgbGFzdEluZGV4OiBudW1iZXIgPSBhcnIubGVuZ3RoIC0gMTtcblxuICAvLyBTaHVmZmxlIGFsZ29yaXRobSBieSBSaWNoYXJkIER1cnN0ZW5mZWxkIChEb25hbGQgRS4gS251dGgpLCBhbHNvIFJvbmFsZCBGaXNoZXIgYW5kIEZyYW5rIFlhdGVzLlxuICAvLyBcIkZ1bGwgU2h1ZmZsZVwiIE1vZGlmaWNhdGlvbiB0byBlbnN1cmUgbm8gZWxlbWVudHMgcmVtYWluIGluIHRoZWlyIG9yaWdpbmFsIHBsYWNlIChieSB0YWtpbmcgZWFjaCBlbGVtZW50IG9uY2VcbiAgLy8gYW5kIHN3YXBwaW5nIHdpdGggYW55IHJlbWFpbmluZyBlbGVtZW50cylcbiAgYXJyLmZvckVhY2goKGVsLCBpZHg6IG51bWJlcikgPT4ge1xuICAgIGlmIChpZHggPj0gbGFzdEluZGV4KSB7XG4gICAgICAvLyBObyBzaHVmZmxpbmcgbGFzdCBlbGVtZW50XG4gICAgICAvLyBPbmUgYmVmb3JlIGxhc3QgaXMgYWx3YXlzIHN3YXBwZWQgd2l0aCBsYXN0IGF0IHRoZSBlbmQgb2YgdGhlIGxvb3BcbiAgICAgIC8vIFNpbmNlIHByZXZpb3VzIHN3YXBzIGNhbiBtb3ZlIGxhc3QgZWxlbWVudCBpbnRvIG90aGVyIHBsYWNlcywgdGhlcmUgaXMgc3RpbGwgYSByYW5kb20gc2h1ZmZsZSBvZiBsYXN0IGVsZW1lbnRcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gU3dhcCBlbCB3aXRoIG9uZSBvZiB0aGUgaGlnaGVyIGVsZW1lbnRzIHJhbmRvbWx5XG4gICAgbGV0IHJuZDtcbiAgICBybmQgPSBmdWxsU2h1ZmZsZVxuICAgICAgPyAvLyBQaWNrIHJhbmRvbSBudW1iZXIgZnJvbSBpZHgrMSB0byBsYXN0SW5kZXggKE1vZGlmaWVkIGFsZ29yaXRobSwgKE4tMSkhIGNvbWJpbmF0aW9ucylcbiAgICAgICAgLy8gTWF0aC5yYW5kb20gLT4gWzAsIDEpIC0+IFswLCBsYXN0SW5kZXgtaWR4ICkgLS1mbG9vci0+IFswLCBsYXN0SW5kZXgtaWR4LTFdXG4gICAgICAgIC8vIHJuZCA9IFswLCBsYXN0SW5kZXgtaWR4LTFdICsgMSArIGlkeCA9IFsxICsgaWR4LCBsYXN0SW5kZXhdXG4gICAgICAgIC8vIChPcmlnaW5hbCBhbGdvcml0aG0gd291bGQgcGljayBybmQgPSBbaWR4LCBsYXN0SW5kZXhdLCB0aHVzIGFueSBlbGVtZW50IGNvdWxkIGFycml2ZSBiYWNrIGludG8gaXRzIHNsb3QpXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChsYXN0SW5kZXggLSBpZHgpKSArIDEgKyBpZHhcbiAgICAgIDogLy8gUGljayByYW5kb20gbnVtYmVyIGZyb20gaWR4IHRvIGxhc3RJbmRleCAoVW5tb2RpZmllZCBSaWNoYXJkIER1cnN0ZW5mZWxkLCBOISBjb21iaW5hdGlvbnMpXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChsYXN0SW5kZXggKyAxIC0gaWR4KSkgKyBpZHg7XG4gICAgYXJyW2lkeF0gPSBhcnJbcm5kXTtcbiAgICBhcnJbcm5kXSA9IGVsO1xuICB9KTtcblxuICByZXR1cm4gYXJyO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gYW4gYXJyYXkgb2YgbnVtYmVycyByZWxhdGl2ZSB0byBtYXhMZXZlbCB8fCAxMjcgb3JkZXJlZCBpbiBhIFNpbmUgd2F2ZSBmb3JtYXRcbiAqIFRoaXMgaXMgdXNlZCBieSB0aGUgYHNpenpsZWAgcGFyYW0gb2YgdGhlIGBjbGlwYCBtZXRob2QgdG8gYWRkIGEgcnVkaW1lbnRhcnkgdmFyaWF0aW9uIHRvIHRoZSBhY2NlbnQgb2YgZWFjaCBub3RlXG4gKiBAcGFyYW0ge051bWJlcn0gbWF4TGV2ZWwgQSBudW1iZXIgYmV0d2VlbiBub3QgbW9yZSB0aGFuIDEyN1xuICogQHJldHVybiB7QXJyYXl9ICBFeGFtcGxlIG91dHB1dCBbNjMsIDkwLCAxMTAsIDEyNywgMTEwLCA5MCwgNjMsIDAsIDYzLCA5MCwgMTEwLCAxMjcsIDExMCwgOTAsIDYzLCAwXVxuICovXG5leHBvcnQgY29uc3Qgc2l6emxlTWFwID0gKG1heExldmVsOiBudW1iZXIgPSAxMjcpOiBudW1iZXJbXSA9PiB7XG4gIGNvbnN0IHBpID0gTWF0aC5QSTtcbiAgY29uc3QgcGlBcnI6IG51bWJlcltdID0gW1xuICAgIHBpIC8gNixcbiAgICBwaSAvIDQsXG4gICAgcGkgLyAzLFxuICAgIHBpIC8gMixcbiAgICAoMiAqIHBpKSAvIDMsXG4gICAgKDMgKiBwaSkgLyA0LFxuICAgICg1ICogcGkpIC8gNixcbiAgICBwaSxcbiAgXTtcbiAgY29uc3QgcGlBcnJSZXY6IG51bWJlcltdID0gW1xuICAgIDAsXG4gICAgcGkgLyA2LFxuICAgIHBpIC8gNCxcbiAgICBwaSAvIDMsXG4gICAgcGkgLyAyLFxuICAgICgyICogcGkpIC8gMyxcbiAgICAoMyAqIHBpKSAvIDQsXG4gICAgKDUgKiBwaSkgLyA2LFxuICBdO1xuICBwaUFyclJldi5yZXZlcnNlKCk7XG4gIGNvbnN0IGFycjogbnVtYmVyW10gPSBwaUFyci5jb25jYXQocGlBcnJSZXYpO1xuICByZXR1cm4gYXJyLm1hcChlbGVtZW50ID0+IE1hdGgucm91bmQoTWF0aC5zaW4oZWxlbWVudCkgKiBtYXhMZXZlbCkpO1xufTtcblxuLyoqXG4gKiBQaWNrIG9uZSBpdGVtIHJhbmRvbWx5IGZyb20gYW4gYXJyYXkgYW5kIHJldHVybiBpdFxuICogQHBhcmFtIGFyclxuICovXG5leHBvcnQgY29uc3QgcGlja09uZSA9IChhcnI6IGFueVtdKSA9PlxuICBhcnIubGVuZ3RoID4gMSA/IGFycltNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXSA6IGFyclswXTtcblxuLyoqXG4gKiBCb29sZWFuIGdlbmVyYXRvclxuICovXG5leHBvcnQgY29uc3QgZGljZSA9ICgpID0+ICEhTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcblxuLyoqXG4gKiBQb2x5ZmlsbCBmb3IgQXJyYXkucHJvdG90eXBlLmZsYXRcbiAqL1xuZXhwb3J0IGNvbnN0IGZsYXQgPSAoYXJyOiBhbnlbXVtdKSA9PlxuICBhcnIucmVkdWNlKChhY2MsIHZhbCkgPT4gYWNjLmNvbmNhdCh2YWwpLCBbXSk7XG4iLCAiaW1wb3J0IHsgc2NhbGUgfSBmcm9tICdoYXJtb25pY3MnO1xuaW1wb3J0IHsgcGlja09uZSwgZGljZSB9IGZyb20gJy4vdXRpbHMnO1xuXG4vKipcbiAqIEdldCB0aGUgY2hvcmRzIHRoYXQgZ28gd2l0aCBhIGdpdmVuIHNjYWxlL21vZGVcbiAqIFRoaXMgaXMgdXNlZnVsIG9ubHkgaW4gY2FzZSB5b3Ugd2FudCB0byBjaGVjayB3aGF0IGNob3JkcyB3b3JrIHdpdGggYSBzY2FsZS9tb2RlXG4gKiBzbyB0aGF0IHlvdSBjYW4gY29tZSB1cCB3aXRoIGNob3JkIHByb2dyZXNzaW9uc1xuICogQHBhcmFtICB7U3RyaW5nfSBtb2RlIGUuZy4gbWFqb3JcbiAqIEByZXR1cm4ge0FycmF5fSBlLmcuWydJJywgJ2lpJywgJ2lpaScsICdJVicsICdWJywgJ3ZpJywgJ3ZpaVx1MDBCMCddXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRDaG9yZERlZ3JlZXMgPSAobW9kZTogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHRoZVJvbWFuczogTlZQPHN0cmluZ1tdPiA9IHtcbiAgICBpb25pYW46IFsnSScsICdpaScsICdpaWknLCAnSVYnLCAnVicsICd2aScsICd2aWlcdTAwQjAnXSxcbiAgICBkb3JpYW46IFsnaScsICdpaScsICdJSUknLCAnSVYnLCAndicsICd2aVx1MDBCMCcsICdWSUknXSxcbiAgICBwaHJ5Z2lhbjogWydpJywgJ0lJJywgJ0lJSScsICdpdicsICd2XHUwMEIwJywgJ1ZJJywgJ3ZpaSddLFxuICAgIGx5ZGlhbjogWydJJywgJ0lJJywgJ2lpaScsICdpdlx1MDBCMCcsICdWJywgJ3ZpJywgJ3ZpaSddLFxuICAgIG1peG9seWRpYW46IFsnSScsICdpaScsICdpaWlcdTAwQjAnLCAnSVYnLCAndicsICd2aScsICdWSUknXSxcbiAgICBhZW9saWFuOiBbJ2knLCAnaWlcdTAwQjAnLCAnSUlJJywgJ2l2JywgJ3YnLCAnVkknLCAnVklJJ10sXG4gICAgbG9jcmlhbjogWydpXHUwMEIwJywgJ0lJJywgJ2lpaScsICdpdicsICdWJywgJ1ZJJywgJ3ZpaSddLFxuICAgICdtZWxvZGljIG1pbm9yJzogWydpJywgJ2lpJywgJ0lJSSsnLCAnSVYnLCAnVicsICd2aVx1MDBCMCcsICd2aWlcdTAwQjAnXSxcbiAgICAnaGFybW9uaWMgbWlub3InOiBbJ2knLCAnaWlcdTAwQjAnLCAnSUlJKycsICdpdicsICdWJywgJ1ZJJywgJ3ZpaVx1MDBCMCddLFxuICB9O1xuICB0aGVSb21hbnMubWFqb3IgPSB0aGVSb21hbnMuaW9uaWFuO1xuICB0aGVSb21hbnMubWlub3IgPSB0aGVSb21hbnMuYWVvbGlhbjtcblxuICByZXR1cm4gdGhlUm9tYW5zW21vZGVdIHx8IFtdO1xufTtcblxuY29uc3QgaWR4QnlEZWdyZWU6IE5WUDxudW1iZXI+ID0ge1xuICBpOiAwLFxuICBpaTogMSxcbiAgaWlpOiAyLFxuICBpdjogMyxcbiAgdjogNCxcbiAgdmk6IDUsXG4gIHZpaTogNixcbn07XG5cbi8qKlxuICogR2V0IGEgY2hvcmQgbmFtZSBmcm9tIGRlZ3JlZVxuICogQHBhcmFtICB7U3RyaW5nfSByb21hbiBlLmcuIGlpIE9SIGlpXHUwMEIwIE9SIFY3XG4gKiBAcmV0dXJuIHtTdHJpbmd9IGUuZy4gbSBPUiBtN2I1IE9SIE1hajdcbiAqL1xuY29uc3QgZ2V0Q2hvcmROYW1lID0gKHJvbWFuOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAvLyByZW1vdmUgYW55IG5vbiBjaGFyYWN0ZXJcbiAgY29uc3Qgc3RyID0gcm9tYW4ucmVwbGFjZSgvXFxXL2csICcnKTtcbiAgbGV0IHByZWZpeCA9ICdNJztcbiAgLy8gY2hlY2sgaWYgaXQgcyBsb3dlcmNhc2VcbiAgaWYgKHN0ci50b0xvd2VyQ2FzZSgpID09PSBzdHIpIHtcbiAgICBwcmVmaXggPSAnbSc7XG4gIH1cbiAgaWYgKHJvbWFuLmluZGV4T2YoJ1x1MDBCMCcpID4gLTEpIHtcbiAgICByZXR1cm4gcHJlZml4ICsgJzdiNSc7XG4gIH1cbiAgaWYgKHJvbWFuLmluZGV4T2YoJysnKSA+IC0xKSB7XG4gICAgcmV0dXJuIHByZWZpeCArICcjNSc7XG4gIH1cblxuICBpZiAocm9tYW4uaW5kZXhPZignNycpID4gLTEpIHtcbiAgICByZXR1cm4gcHJlZml4ID09PSAnTScgPyAnbWFqNycgOiAnbTcnO1xuICB9XG5cbiAgcmV0dXJuIHByZWZpeDtcbn07XG5cbi8qKlxuICogVGFrZSB0aGUgc3BlY2lmaWVkIHNjYWxlIGFuZCBkZWdyZWVzIGFuZCByZXR1cm4gdGhlIGNob3JkIG5hbWVzIGZvciB0aGVtXG4gKiBUaGVzZSBjYW4gYmUgdXNlZCBhcyB0aGUgdmFsdWUgZm9yIHRoZSBgbm90ZXNgIHBhcmFtIG9mIHRoZSBgY2xpcGAgbWV0aG9kXG4gKiBAcGFyYW0ge1N0cmluZ30gbm90ZU9jdGF2ZVNjYWxlIGUuZy4gJ0M0IG1ham9yJ1xuICogQHBhcmFtICB7U3RyaW5nfSBjaG9yZERlZ3Jlc3MgZS5nLiAnSSBJViBWIElWJ1xuICogQHJldHVybiB7U3RyaW5nfSBlLmcuICdDTSBGTSBHTSBGTSdcbiAqL1xuZXhwb3J0IGNvbnN0IGdldENob3Jkc0J5UHJvZ3Jlc3Npb24gPSAoXG4gIG5vdGVPY3RhdmVTY2FsZTogc3RyaW5nLFxuICBjaG9yZERlZ3Jlc3M6IHN0cmluZ1xuKTogc3RyaW5nID0+IHtcbiAgLy8gU2V0IHRoZSBvY3RhdmUgaWYgbWlzc2luZ1xuICAvLyBGb3IgZXhhbXBsZSBpZiB0aGUgbWV0aG9kIHdhcyBjYWxsZWQgd2l0aCBgQyBtYWpvcmAgaW5zdGVhZCBvZiBgQzQgbWFqb3JgLCB0aGVuIGFkZCB0aGUgNFxuICBjb25zdCBub3RlT2N0YXZlU2NhbGVBcnIgPSBub3RlT2N0YXZlU2NhbGUuc3BsaXQoJyAnKTtcbiAgaWYgKCFub3RlT2N0YXZlU2NhbGVBcnJbMF0ubWF0Y2goL1xcZC8pKSB7XG4gICAgbm90ZU9jdGF2ZVNjYWxlQXJyWzBdICs9ICc0JztcbiAgICBub3RlT2N0YXZlU2NhbGUgPSBub3RlT2N0YXZlU2NhbGVBcnIuam9pbignICcpO1xuICB9XG5cbiAgLy8gR2V0IHRoZSBzY2FsZSBmcm9tIHRoZSBnaXZlbiBub3RlIGFuZCBzY2FsZS9tb2RlIGNvbWJpbmF0aW9uXG4gIGNvbnN0IG1vZGUgPSBzY2FsZShub3RlT2N0YXZlU2NhbGUpO1xuICBjb25zdCBjaG9yZERlZ3JlZXNBcnIgPSBjaG9yZERlZ3Jlc3MucmVwbGFjZSgvXFxzKiwrXFxzKi9nLCAnICcpLnNwbGl0KCcgJyk7XG4gIC8vIE5vdyB3ZSBoYXZlIHNvbWV0aGluZyBsaWtlIFsnaScsICdpaScsICdJViddXG4gIC8vIENvbnZlcnQgaXQgdG8gYSBjaG9yZCBmYW1pbHkgc3VjaCBhcyBbJ0NtJywgJ0RtJywgJ0ZNJ11cbiAgY29uc3QgY2hvcmRGYW1pbHkgPSBjaG9yZERlZ3JlZXNBcnIubWFwKChyb21hbiwgaWR4KSA9PiB7XG4gICAgY29uc3QgY2hvcmROYW1lID0gZ2V0Q2hvcmROYW1lKHJvbWFuKTsgLy8gZS5nLiBtXG4gICAgLy8gZ2V0IHRoZSBpbmRleCB0byBiZSB1c2VkIGJ5IHJlbW92aW5nIGFueSBkaWdpdCBvciBub24gYWxwaGFiZXQgY2hhcmFjdGVyXG4gICAgY29uc3Qgc2NhbGVJZCA9IGlkeEJ5RGVncmVlW3JvbWFuLnJlcGxhY2UoL1xcV3xcXGQvZywgJycpLnRvTG93ZXJDYXNlKCldOyAvLyBlLmcuIDBcbiAgICAvLyBnZXQgdGhlIG5vdGUgaXRzZWxmXG4gICAgY29uc3Qgbm90ZSA9IG1vZGVbc2NhbGVJZF07IC8vIGUuZy4gQ1xuICAgIC8vIGdldCB0aGUgb2N0YXZlIG9mIHRoZSBub3RlO1xuICAgIGNvbnN0IG9jdCA9IG5vdGUucmVwbGFjZSgvXFxEKy8sICcnKTsgLy8gZS5nLiA0XG4gICAgLy8gbm93IGdldCB0aGUgY2hvcmRcbiAgICByZXR1cm4gbm90ZS5yZXBsYWNlKC9cXGQvLCAnJykgKyBjaG9yZE5hbWUgKyAnXycgKyBvY3Q7XG4gIH0pO1xuXG4gIHJldHVybiBjaG9yZEZhbWlseS50b1N0cmluZygpLnJlcGxhY2UoLywvZywgJyAnKTtcbn07XG5cbmNvbnN0IGdldFByb2dGYWN0b3J5ID0gKHsgVCwgUCwgRCB9OiBUUEQpID0+IHtcbiAgcmV0dXJuIChjb3VudDogbnVtYmVyID0gNCkgPT4ge1xuICAgIGNvbnN0IGNob3JkcyA9IFtdO1xuXG4gICAgLy8gUHVzaCByb290L3RvbmljXG4gICAgY2hvcmRzLnB1c2gocGlja09uZShUKSk7XG5cbiAgICBsZXQgaSA9IDE7XG5cbiAgICAvLyBQaWNrIGEgcHJlZG9taW5hbnRcbiAgICBpZiAoaSA8IGNvdW50IC0gMSkge1xuICAgICAgY2hvcmRzLnB1c2gocGlja09uZShQKSk7XG4gICAgICBpKys7XG4gICAgfVxuXG4gICAgLy8gVHJ5IGFub3RoZXIgcHJlZG9taW5hbnRcbiAgICBpZiAoaSA8IGNvdW50IC0gMSAmJiBkaWNlKCkpIHtcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoUCkpO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIC8vLy8vLy8vLyA0IG9yIG1vcmUvLy8vLy8vLy8vXG4gICAgaWYgKGkgPCBjb3VudCAtIDEpIHtcbiAgICAgIC8vIFBpY2sgYSBkb21pbmFudFxuICAgICAgY2hvcmRzLnB1c2gocGlja09uZShEKSk7XG4gICAgICBpKys7XG4gICAgfVxuXG4gICAgaWYgKGkgPCBjb3VudCAtIDEpIHtcbiAgICAgIC8vIFBpY2sgYSBwcmVkb21pbmFudFxuICAgICAgY2hvcmRzLnB1c2gocGlja09uZShQKSk7XG4gICAgICBpKys7XG4gICAgfVxuXG4gICAgaWYgKGkgPCBjb3VudCAtIDEpIHtcbiAgICAgIC8vIFBpY2sgYSBkb21pbmFudFxuICAgICAgY2hvcmRzLnB1c2gocGlja09uZShEKSk7XG4gICAgICBpKys7XG4gICAgfVxuXG4gICAgLy8gUGljayBhIHByZWRvbWluYW50IGlmIHBvc3NpYmxlXG4gICAgaWYgKGkgPCBjb3VudCAtIDEgJiYgZGljZSgpKSB7XG4gICAgICBjaG9yZHMucHVzaChwaWNrT25lKFApKTtcbiAgICAgIGkrKztcbiAgICB9XG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgLy8gRmlsbCB0aGUgcmVzdCB3aXRoIGRvbWluYW50XG4gICAgd2hpbGUgKGkgPCBjb3VudCkge1xuICAgICAgY2hvcmRzLnB1c2gocGlja09uZShEKSk7XG4gICAgICBpKys7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNob3JkcztcbiAgfTtcbn07XG5cbmNvbnN0IE0gPSBnZXRQcm9nRmFjdG9yeSh7IFQ6IFsnSScsICd2aSddLCBQOiBbJ2lpJywgJ0lWJ10sIEQ6IFsnViddIH0pO1xuY29uc3QgbSA9IGdldFByb2dGYWN0b3J5KHsgVDogWydpJywgJ1ZJJ10sIFA6IFsnaWknLCAnaXYnXSwgRDogWydWJ10gfSk7XG5cbi8qKlxuICogR2VuZXJhdGUgYSBjaG9yZCBwcm9ncmVzc2lvbiBiYXNlZCBvbiBiYXNpYyBtdXNpYyB0aGVvcnlcbiAqIHdoZXJlIHdlIGZvbGxvdyB0b25pYyB0byBvcHRpb25hbGx5IHByZWRvbWluYW50IGFuZCB0aGVuIGRvbWluYW50XG4gKiBhbmQgdGhlbiByYW5kb21seSB0byBwcmVkb21pbmFudCBhbmQgY29udGludWUgdGhpcyB0aWxsIHdlIHJlYWNoIGBjb3VudGBcbiAqIEBwYXJhbSBzY2FsZVR5cGUgZS5nLiBNIChmb3IgbWFqb3IgY2hvcmQgcHJvZ3Jlc3Npb24pLCBtIChmb3IgbWlub3IgY2hvcmQgcHJvZ3Jlc3Npb24pXG4gKiBAcGFyYW0gY291bnQgZS5nLiA0XG4gKi9cbmV4cG9ydCBjb25zdCBwcm9ncmVzc2lvbiA9IChzY2FsZVR5cGU6IHByb2dyZXNzaW9uU2NhbGUsIGNvdW50OiBudW1iZXIgPSA0KSA9PiB7XG4gIGlmIChzY2FsZVR5cGUgPT09ICdtYWpvcicgfHwgc2NhbGVUeXBlID09PSAnTScpIHtcbiAgICByZXR1cm4gTShjb3VudCk7XG4gIH1cblxuICBpZiAoc2NhbGVUeXBlID09PSAnbWlub3InIHx8IHNjYWxlVHlwZSA9PT0gJ20nKSB7XG4gICAgcmV0dXJuIG0oY291bnQpO1xuICB9XG59O1xuIiwgImltcG9ydCB7IGdldENob3Jkc0J5UHJvZ3Jlc3Npb24gfSBmcm9tICdzY3JpYmJsZXR1bmUvc3JjL3Byb2dyZXNzaW9uJztcbmltcG9ydCB7IHNjYWxlLCBpbmxpbmVDaG9yZCB9IGZyb20gJ2hhcm1vbmljcyc7XG5cbmltcG9ydCB7IGlzUHJvZ3Jlc3Npb24sIHRyYW5zZm9ybSB9IGZyb20gJy4vdG9rZW5pemUnO1xuaW1wb3J0IHsgcmVwZWF0LCBjbG9uZSB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlKGlucHV0LCBjb250ZXh0LCBjYWxsYmFjaykge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoaW5wdXQpKSByZXR1cm4gaW5wdXQ7XG5cbiAgY29uc3QgZm4gPSB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgPyBjYWxsYmFjayA6ICh2ID0+IHYpO1xuXG4gIGxldCBza2lwO1xuICByZXR1cm4gaW5wdXQucmVkdWNlKChwcmV2LCBjdXIsIGkpID0+IHtcbiAgICBjb25zdCBsYXN0ID0gcHJldltwcmV2Lmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IG5leHQgPSBpbnB1dFtpICsgMV0gfHwge307XG4gICAgY29uc3Qgb2xkID0gaW5wdXRbaSAtIDFdIHx8IHt9O1xuXG4gICAgaWYgKHNraXApIHtcbiAgICAgIHNraXAgPSBmYWxzZTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KGN1cikpIHtcbiAgICAgIHByZXYucHVzaCguLi5jdXIpO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKGN1ci50eXBlID09PSAndmFsdWUnICYmIGN1ci52YWx1ZSA9PT0gJy4nKSB7XG4gICAgICBpZiAocHJldi5sZW5ndGggPiAwKSBwcmV2LnB1c2gocHJldlswXSk7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAob2xkLnR5cGUgPT09ICdwYXR0ZXJuJyAmJiBjdXIudHlwZSA9PT0gJ3BhdHRlcm4nKSB7XG4gICAgICBwcmV2W3ByZXYubGVuZ3RoIC0gMV0gKz0gY3VyLnZhbHVlO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgc3dpdGNoIChjdXIudHlwZSkge1xuICAgICAgY2FzZSAncGF0dGVybic6XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnbm90ZSc6XG4gICAgICAgIGlmIChjdXIucmVwZWF0KSBwcmV2LnB1c2goLi4ucmVwZWF0KGN1ci52YWx1ZSwgY3VyLnJlcGVhdCkpO1xuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGN1ci52YWx1ZSkpIHByZXYucHVzaCguLi5jdXIudmFsdWUpO1xuICAgICAgICBlbHNlIHByZXYucHVzaChjdXIudmFsdWUpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnY2hvcmQnOlxuICAgICAgICBpZiAoY3VyLnJlcGVhdCkgcHJldi5wdXNoKC4uLnJlcGVhdChjdXIudmFsdWUsIGN1ci5yZXBlYXQpKTtcbiAgICAgICAgZWxzZSBpZiAoY3VyLnVuZm9sZCkgcHJldi5wdXNoKC4uLmN1ci52YWx1ZSk7XG4gICAgICAgIGVsc2UgcHJldi5wdXNoKGN1ci52YWx1ZSk7XG5cbiAgICAgICAgaWYgKGN1ci50eXBlICE9PSAnY2hvcmQnKSB7XG4gICAgICAgICAgc2tpcCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2RpdmlkZSc6XG4gICAgICAgIHByZXZbcHJldi5sZW5ndGggLSAxXSAvPSBjdXIudmFsdWU7XG4gICAgICAgIHJldHVybiBwcmV2O1xuXG4gICAgICBjYXNlICdtdWx0aXBseSc6XG4gICAgICAgIHByZXYucHVzaCguLi5yZXBlYXQobGFzdCwgY3VyLnZhbHVlIC0gMSkpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnc2xpY2UnOlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShsYXN0KSkge1xuICAgICAgICAgIHByZXZbcHJldi5sZW5ndGggLSAxXSA9IGxhc3Quc2xpY2UoY3VyLnZhbHVlWzBdIC0gMSwgY3VyLnZhbHVlWzFdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmV2LnB1c2goY3VyLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnbW9kZSc6XG4gICAgICAgIHByZXZbcHJldi5sZW5ndGggLSAxXSA9IGAke2xhc3R9ICR7Y3VyLnZhbHVlfWA7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdwYXJhbSc6XG4gICAgICBjYXNlICd2YWx1ZSc6IHtcbiAgICAgICAgbGV0IHZhbHVlID0gbnVsbDtcbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZXh0W2N1ci52YWx1ZV0gIT09ICd1bmRlZmluZWQnKSB2YWx1ZSA9IGNvbnRleHRbY3VyLnZhbHVlXTtcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIGV4cHJlc3Npb24gZm9yICcke2N1ci52YWx1ZX0nYCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWVbMF0gJiYgdmFsdWVbMF0udHlwZSkge1xuICAgICAgICAgIHZhbHVlID0gcmVkdWNlKHZhbHVlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjdXIucmVwZWF0KSB7XG4gICAgICAgICAgICBwcmV2LnB1c2goLi4ucmVwZWF0KHZhbHVlLCBjdXIucmVwZWF0KS5yZWR1Y2UoKF9wcmV2LCBfY3VyKSA9PiB7XG4gICAgICAgICAgICAgIF9wcmV2LnB1c2goLi4uX2N1cik7XG4gICAgICAgICAgICAgIHJldHVybiBfcHJldjtcbiAgICAgICAgICAgIH0sIFtdKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByZXYucHVzaCguLi52YWx1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgIH1cblxuICAgICAgICB2YWx1ZSA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdO1xuICAgICAgICBpZiAoY3VyLnJlcGVhdCkgcHJldi5wdXNoKC4uLnJlcGVhdCh2YWx1ZSwgY3VyLnJlcGVhdCkpO1xuICAgICAgICBlbHNlIHByZXYucHVzaCguLi52YWx1ZSk7XG4gICAgICB9IGJyZWFrO1xuICAgICAgZGVmYXVsdDoge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuaGFuZGxlZCAnJHtjdXIudHlwZX0nYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZXY7XG4gIH0sIFtdKS5yZWR1Y2UoKG1lbW8sIGl0ZW0pID0+IHtcbiAgICBjb25zdCBwcmV2ID0gbWVtb1ttZW1vLmxlbmd0aCAtIDFdO1xuXG4gICAgaWYgKFxuICAgICAgQXJyYXkuaXNBcnJheShwcmV2KVxuICAgICAgJiYgQXJyYXkuaXNBcnJheShpdGVtKVxuICAgICAgJiYgdHlwZW9mIGl0ZW1bMF0gPT09ICdudW1iZXInXG4gICAgICAmJiBpdGVtLmxlbmd0aCA9PT0gMlxuICAgICkge1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gaXRlbVsxXSA9PT0gSW5maW5pdHkgPyBwcmV2Lmxlbmd0aCA6IGl0ZW1bMV07XG4gICAgICBjb25zdCBbYmFzZSwgbGVuZ3RoXSA9IFN0cmluZyhvZmZzZXQpLnNwbGl0KC9cXEQvKTtcblxuICAgICAgbWVtby5wb3AoKTtcbiAgICAgIG1lbW8ucHVzaCguLi5wcmV2LnNsaWNlKGl0ZW1bMF0gLSAxLCBiYXNlKSk7XG5cbiAgICAgIGlmIChTdHJpbmcob2Zmc2V0KS5pbmNsdWRlcygnPicpKSB7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gbWVtby5zbGljZSgtbGVuZ3RoIC0gMSk7XG5cbiAgICAgICAgcGFydHMucG9wKCk7XG4gICAgICAgIHBhcnRzLnJldmVyc2UoKTtcbiAgICAgICAgbWVtby5wdXNoKC4uLnBhcnRzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtZW1vO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycgJiYgaXRlbS5pbmNsdWRlcygnICcpKSB7XG4gICAgICBjb25zdCBjaHVua3MgPSBpdGVtLnNwbGl0KCcgJyk7XG5cbiAgICAgIGlmIChjaHVua3Muc29tZShpc1Byb2dyZXNzaW9uKSkge1xuICAgICAgICBjb25zdCBvZmZzZXQgPSBjaHVua3MuZmluZEluZGV4KGlzUHJvZ3Jlc3Npb24pO1xuICAgICAgICBjb25zdCBbYSwgYl0gPSBbY2h1bmtzLnNsaWNlKDAsIG9mZnNldCksIGNodW5rcy5zbGljZShvZmZzZXQpXTtcblxuICAgICAgICBtZW1vLnB1c2goZ2V0Q2hvcmRzQnlQcm9ncmVzc2lvbihhLmpvaW4oJyAnKSwgYi5qb2luKCcgJykpLnNwbGl0KCcgJykubWFwKHggPT4gZm4oaW5saW5lQ2hvcmQoeCkpKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZW1vLnB1c2goZm4oc2NhbGUoaXRlbSkpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbWVtby5wdXNoKGZuKGl0ZW0pKTtcbiAgICB9XG4gICAgcmV0dXJuIG1lbW87XG4gIH0sIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlKGJ1ZmZlcikge1xuICBjb25zdCB0cmFja3MgPSB7fTtcbiAgY29uc3QgbWFpbiA9IFtdO1xuICBjb25zdCBkYXRhID0ge307XG5cbiAgbGV0IGNoYW5uZWwgPSBudWxsO1xuICBsZXQgcHJlZml4ID0gJyc7XG4gIGxldCB0cmFjaztcbiAgbGV0IGluZm8gPSB7fTtcbiAgYnVmZmVyLnNwbGl0KC9cXHI/XFxuL2cpLmZvckVhY2goKGxpbmUsIG50aCkgPT4ge1xuICAgIGxpbmUgPSBsaW5lLnJlcGxhY2UoLzsuKz8kLywgJycpLnRyaW0oKTtcbiAgICBpZiAoIWxpbmUpIHJldHVybjtcblxuICAgIHRyeSB7XG4gICAgICBpZiAobGluZS5jaGFyQXQoKSA9PT0gJyUnKSB7XG4gICAgICAgIGNvbnN0IFtuYW1lLCAuLi52YWx1ZV0gPSBsaW5lLnNwbGl0KC9cXHMrLyk7XG5cbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBkYXRhW25hbWVdID0gdHJhbnNmb3JtKHZhbHVlLmpvaW4oJyAnKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobGluZS5pbmRleE9mKCcjICcpID49IDApIHtcbiAgICAgICAgaWYgKHRyYWNrKSB7XG4gICAgICAgICAgdHJhY2tzW3RyYWNrXSA9IGluZm87XG4gICAgICAgICAgY2hhbm5lbCA9IG51bGw7XG4gICAgICAgICAgcHJlZml4ID0gJyc7XG4gICAgICAgICAgaW5mbyA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgdHJhY2sgPSBsaW5lLnNwbGl0KC9cXHMrLykuc2xpY2UoMSkuam9pbignICcpO1xuICAgICAgfSBlbHNlIGlmIChsaW5lLmNoYXJBdCgpID09PSAnPicpIHtcbiAgICAgICAgbWFpbi5wdXNoKHRyYW5zZm9ybShsaW5lLnN1YnN0cigxKS50cmltKCkpKTtcbiAgICAgIH0gZWxzZSBpZiAobGluZS5jaGFyQXQoKSA9PT0gJ0AnKSB7XG4gICAgICAgIGNvbnN0IFtuYW1lLCAuLi5leHRlbmRdID0gbGluZS5zdWJzdHIoMSkuc3BsaXQoJyAnKTtcblxuICAgICAgICBpZiAoZXh0ZW5kWzBdID09PSAnPCcpIHtcbiAgICAgICAgICBjb25zdCBrZXkgPSBgJHtleHRlbmRbMV19I2A7XG5cbiAgICAgICAgICBPYmplY3Qua2V5cyhpbmZvKVxuICAgICAgICAgICAgLmZpbHRlcih4ID0+IHguaW5kZXhPZihrZXkpID09PSAwKVxuICAgICAgICAgICAgLmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICAgIGluZm9bYCR7bmFtZX0jJHtrLnNwbGl0KCcjJylbMV19YF0gPSBjbG9uZShpbmZvW2tdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHByZWZpeCA9IG5hbWU7XG4gICAgICB9IGVsc2UgaWYgKGxpbmUuaW5kZXhPZignOicpID4gMCkge1xuICAgICAgICBjb25zdCBbbmFtZSwgLi4udmFsdWVdID0gbGluZS5zcGxpdCgnOicpO1xuXG4gICAgICAgIGRhdGFbbmFtZV0gPSB0cmFuc2Zvcm0odmFsdWUuam9pbignOicpLnRyaW0oKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0aWNrcyA9IHRyYW5zZm9ybShsaW5lKTtcblxuICAgICAgICBpZiAoIXRpY2tzWzBdIHx8IHRpY2tzWzBdLnR5cGUgIT09ICdjaGFubmVsJykge1xuICAgICAgICAgIGlmICghY2hhbm5lbCkgdGhyb3cgbmV3IFR5cGVFcnJvcihgTWlzc2luZyBjaGFubmVsLCBnaXZlbiAnJHtsaW5lfSdgKTtcblxuICAgICAgICAgIGNvbnN0IGVuZCA9IGluZm9bY2hhbm5lbF1baW5mb1tjaGFubmVsXS5sZW5ndGggLSAxXTtcblxuICAgICAgICAgIGlmICghZW5kLnZhbHVlcykgZW5kLnZhbHVlcyA9IFt7IHR5cGU6ICdudW1iZXInLCB2YWx1ZTogMTI3IH1dO1xuICAgICAgICAgIGVuZC52YWx1ZXMucHVzaCguLi50aWNrcyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgbm90ZXMgPSB0aWNrcy5maW5kSW5kZXgoeCA9PiBbJ25vdGUnLCAnY2hvcmQnLCAncGFyYW0nXS5pbmNsdWRlcyh4LnR5cGUpKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aWNrcy5maW5kSW5kZXgoeCA9PiB4LnR5cGUgPT09ICdwYXR0ZXJuJyk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gaW5kZXggPiAwID8gdGlja3Muc2xpY2UoaW5kZXgpIDogdGlja3M7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHZhbHVlLmZpbmRJbmRleCh4ID0+IHgudHlwZSAhPT0gJ3BhdHRlcm4nKTtcbiAgICAgICAgY29uc3QgaW5wdXRzID0gdGlja3Muc2xpY2UoMCwgaW5kZXggPiAwID8gaW5kZXggOiAxKTtcblxuICAgICAgICBjaGFubmVsID0gcHJlZml4ICsgaW5wdXRzWzBdLnZhbHVlO1xuICAgICAgICBpZiAoIWluZm9bY2hhbm5lbF0pIHtcbiAgICAgICAgICBpbmZvW2NoYW5uZWxdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc3BlYztcbiAgICAgICAgaWYgKG5vdGVzID4gMCAmJiBpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zdCBlbmQgPSBpbmZvW2NoYW5uZWxdW2luZm9bY2hhbm5lbF0ubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICBlbmQuZGF0YSA9IHZhbHVlLnNsaWNlKG5vdGVzKTtcbiAgICAgICAgICBzcGVjID0ge1xuICAgICAgICAgICAgaW5wdXQ6IGVuZC5pbnB1dCxcbiAgICAgICAgICAgIHZhbHVlczogdmFsdWUuc2xpY2UoMSwgbm90ZXMpLFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAob2Zmc2V0ID4gMCkge1xuICAgICAgICAgIHNwZWMgPSB7XG4gICAgICAgICAgICBkYXRhOiB2YWx1ZS5zbGljZShvZmZzZXQpLFxuICAgICAgICAgICAgaW5wdXQ6IHZhbHVlLnNsaWNlKDAsIG9mZnNldCksXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChvZmZzZXQgPT09IDApIHtcbiAgICAgICAgICBzcGVjID0geyB2YWx1ZXM6IHZhbHVlLnNsaWNlKDEpIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3BlYyA9IHsgaW5wdXQ6IHZhbHVlIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5wdXRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBzcGVjLnZhbHVlcyA9IGlucHV0cy5zbGljZSgxKTtcbiAgICAgICAgfVxuICAgICAgICBpbmZvW2NoYW5uZWxdLnB1c2goc3BlYyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc3QgbXNnID0gdHlwZW9mIGUgPT09ICdzdHJpbmcnID8gZSA6IGUubWVzc2FnZTtcblxuICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGAke21zZ31cXG4gIGF0IGxpbmUgJHtudGggKyAxfVxcbiR7bGluZX1gKTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmICh0cmFjaykge1xuICAgIHRyYWNrc1t0cmFja10gPSBpbmZvO1xuICB9XG4gIHJldHVybiB7IG1haW4sIGRhdGEsIHRyYWNrcyB9O1xufVxuIiwgImltcG9ydCB7IFV0aWxzIH0gZnJvbSAnbWlkaS13cml0ZXItanMnO1xuaW1wb3J0IHsgRmlsZSwgVHJhY2sgfSBmcm9tICdqc21pZGdlbic7XG5pbXBvcnQgeyB6aXAsIGZsYXR0ZW4gfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IHNwbGl0LCBpc1BhdHRlcm4gfSBmcm9tICcuL3Rva2VuaXplJztcbmltcG9ydCB7IHJlZHVjZSB9IGZyb20gJy4vcGFyc2VyJztcblxuY29uc3QgREVGQVVMVCA9IFN5bWJvbCgnQG1haW4nKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkKG1pZGksIGJwbSA9IDEyMCwgbGVuZ3RoID0gMTYpIHtcbiAgY29uc3QgZmlsZSA9IG5ldyBGaWxlKCk7XG4gIGNvbnN0IHEgPSAxNjtcbiAgY29uc3QgbyA9IHt9O1xuXG4gIGJwbSAqPSBsZW5ndGggLyBxO1xuXG4gIGxldCBjaCA9IDA7XG4gIGZ1bmN0aW9uIGdldChudGgsIG5hbWUpIHtcbiAgICBjb25zdCBrZXkgPSBudGggKyBuYW1lO1xuXG4gICAgaWYgKCFnZXRba2V5XSkge1xuICAgICAgY29uc3QgdHJhY2sgPSBuZXcgVHJhY2soKTtcbiAgICAgIGNvbnN0IGNoYW4gPSBudGggPT09ICcwJyA/IDkgOiBjaDtcblxuICAgICAgZmlsZS5hZGRUcmFjayh0cmFjayk7XG4gICAgICBnZXRba2V5XSA9IHsgY2hhbiwgdHJhY2sgfTtcbiAgICAgIGlmIChudGggIT09ICcwJykgY2ggKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFtrZXldO1xuICB9XG5cbiAgbWlkaS5mb3JFYWNoKHNlY3Rpb24gPT4ge1xuICAgIHNlY3Rpb24uZm9yRWFjaChwYXJ0cyA9PiB7XG4gICAgICBwYXJ0cy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICBjb25zdCB7IGNoYW4sIHRyYWNrIH0gPSBnZXQoZVswXSwgZVsxXSk7XG5cbiAgICAgICAgdHJhY2suc2V0VGVtcG8oYnBtKTtcbiAgICAgICAgaWYgKGNoYW4gIT09IDkpIHtcbiAgICAgICAgICB0cmFjay5pbnN0cnVtZW50KGNoYW4sIGVbMF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlWzJdLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgY29uc3QgdGljayA9IGVbMl1baV07XG5cbiAgICAgICAgICBpZiAodGljay52ID4gMCkge1xuICAgICAgICAgICAgY29uc3Qgbm90ZSA9IHRpY2subiB8fCAnQzMnO1xuXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShub3RlKSkge1xuICAgICAgICAgICAgICB0cmFjay5ub3RlT2ZmKGNoYW4sICcnLCBxKTtcbiAgICAgICAgICAgICAgdHJhY2suYWRkQ2hvcmQoY2hhbiwgbm90ZSwgcSwgdGljay52KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRyYWNrLm5vdGVPbihjaGFuLCBub3RlLCBxLCB0aWNrLnYpO1xuICAgICAgICAgICAgICB0cmFjay5ub3RlT2ZmKGNoYW4sIG5vdGUsIHEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cmFjay5ub3RlT2ZmKGNoYW4sICcnLCBxICogMik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBmaWxlLnRvQnl0ZXMoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhY2sodmFsdWVzLCBub3Rlcykge1xuICBsZXQgb2Zmc2V0O1xuICBmdW5jdGlvbiByZXNvbHZlKHgpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh4KSkge1xuICAgICAgcmV0dXJuIHgubWFwKHJlc29sdmUpO1xuICAgIH1cblxuICAgIGxldCB0b2tlbjtcbiAgICBpZiAoIScteF8nLmluY2x1ZGVzKHgpKSB7XG4gICAgICB0b2tlbiA9IHsgdjogMTI3LCBsOiB4IH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRva2VuID0geyB2OiB4ID09PSAnLScgPyAwIDogMTI3IH07XG4gICAgfVxuXG4gICAgaWYgKHggIT09ICctJykge1xuICAgICAgdG9rZW4udiA9IHR5cGVvZiB2YWx1ZXNbb2Zmc2V0XSAhPT0gJ3VuZGVmaW5lZCcgPyB2YWx1ZXNbb2Zmc2V0XSA6IHRva2VuLnYgfHwgMDtcbiAgICAgIGlmICh0eXBlb2Ygbm90ZXNbb2Zmc2V0XSAhPT0gJ3VuZGVmaW5lZCcpIHRva2VuLm4gPSBub3Rlc1tvZmZzZXRdO1xuICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPT09IDEpIHRva2VuLnYgPSB2YWx1ZXNbMF07XG4gICAgICBpZiAodG9rZW4udiB8fCB0b2tlbi5uKSBvZmZzZXQgKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gdmFsdWU7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmIChpc1BhdHRlcm4odmFsdWUpKSB7XG4gICAgICAgIG9mZnNldCA9IDA7XG4gICAgICAgIHJlc3VsdCA9IHNwbGl0KHZhbHVlKS5tYXAocmVzb2x2ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZShjdHgpIHtcbiAgY29uc3Qgc2NlbmVzID0ge307XG5cbiAgT2JqZWN0LmVudHJpZXMoY3R4LnRyYWNrcykuZm9yRWFjaCgoW25hbWUsIGNoYW5uZWxzXSkgPT4ge1xuICAgIE9iamVjdC5lbnRyaWVzKGNoYW5uZWxzKS5mb3JFYWNoKChbY2gsIGNsaXBzXSkgPT4ge1xuICAgICAgY29uc3QgW3RhZywgbWlkaV0gPSBjaC5zcGxpdCgnIycpO1xuICAgICAgY29uc3Qga2V5ID0gdGFnIHx8IERFRkFVTFQ7XG5cbiAgICAgIGxldCB0aWNrcztcbiAgICAgIGxldCBpbmMgPSAwO1xuICAgICAgY2xpcHMuZm9yRWFjaChjbGlwID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gY2xpcC52YWx1ZXMgPyByZWR1Y2UoY2xpcC52YWx1ZXMsIGN0eC5kYXRhKSA6IFtdO1xuICAgICAgICBjb25zdCBub3RlcyA9IGNsaXAuZGF0YSA/IHJlZHVjZShjbGlwLmRhdGEsIGN0eC5kYXRhKSA6IFtdO1xuXG4gICAgICAgIGlmIChjbGlwLmlucHV0KSB7XG4gICAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPiAxKSB2YWx1ZXMuc2hpZnQoKTtcblxuICAgICAgICAgIGNvbnN0IGlucHV0ID0gZmxhdHRlbihyZWR1Y2UoY2xpcC5pbnB1dCwgY3R4LmRhdGEsIHBhY2sodmFsdWVzLCBub3RlcykpKTtcblxuICAgICAgICAgIGlmICghdGlja3MpIHtcbiAgICAgICAgICAgIHRpY2tzID0gaW5wdXQ7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgemlwKHRpY2tzLCBpbnB1dCwgKGEsIGIpID0+IHtcbiAgICAgICAgICAgIGlmIChiLnYgPiAwKSBhLnYgPSBiLnY7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGlja3MpIHtcbiAgICAgICAgICBjb25zdCBtb2RlID0gY2xpcC52YWx1ZXNcbiAgICAgICAgICAgICYmIGNsaXAudmFsdWVzWzBdXG4gICAgICAgICAgICAmJiBjbGlwLnZhbHVlc1swXS50eXBlID09PSAnbW9kZScgPyBjbGlwLnZhbHVlc1swXS52YWx1ZSA6IG51bGw7XG5cbiAgICAgICAgICB0aWNrcy5mb3JFYWNoKHRpY2sgPT4ge1xuICAgICAgICAgICAgaWYgKHRpY2sudiA+IDApIHtcbiAgICAgICAgICAgICAgaWYgKCF0aWNrLm4gJiYgbm90ZXMubGVuZ3RoID4gMCkgdGljay5uID0gbm90ZXMuc2hpZnQoKTtcbiAgICAgICAgICAgICAgaWYgKG1vZGUgJiYgdmFsdWVzLmxlbmd0aCA+IDApIHRpY2tbbW9kZVswXS50b0xvd2VyQ2FzZSgpXSA9IHZhbHVlcy5zaGlmdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKCFzY2VuZXNba2V5XSkgc2NlbmVzW2tleV0gPSB7IHRyYWNrczogW10gfTtcbiAgICAgIHNjZW5lc1trZXldLnRyYWNrcy5wdXNoKFttaWRpLCBuYW1lLCB0aWNrc10pO1xuICAgIH0pO1xuICB9KTtcblxuICBpZiAoIWN0eC5tYWluLmxlbmd0aCkge1xuICAgIGN0eC5tYWluID0gW1t7IHR5cGU6ICd2YWx1ZScsIHZhbHVlOiBERUZBVUxUIH1dXTtcbiAgfVxuXG4gIHJldHVybiBjdHgubWFpbi5tYXAodHJhY2sgPT4ge1xuICAgIHJldHVybiByZWR1Y2UodHJhY2ssIHNjZW5lcykubWFwKGl0ZW0gPT4ge1xuICAgICAgcmV0dXJuIFtdLmNvbmNhdChpdGVtKS5yZWR1Y2UoKG1lbW8sIHgpID0+IHtcbiAgICAgICAgbWVtby5wdXNoKC4uLngudHJhY2tzKTtcbiAgICAgICAgcmV0dXJuIG1lbW87XG4gICAgICB9LCBbXSk7XG4gICAgfSk7XG4gIH0pO1xufVxuIiwgImV4cG9ydCB7IG1lcmdlIH0gZnJvbSAnLi9taXh1cCc7XG5leHBvcnQgeyBwYXJzZSB9IGZyb20gJy4vcGFyc2VyJztcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMnO1xuZXhwb3J0ICogZnJvbSAnLi9taXh1cCc7XG5leHBvcnQgKiBmcm9tICcuL3BhcnNlcic7XG5leHBvcnQgKiBmcm9tICcuL3Rva2VuaXplJztcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsU0FBUyxNQUFPLEdBQUc7QUFBRSxTQUFPLE9BQU8sTUFBTTtBQUFTO0FBQ2xELFNBQVMsTUFBTyxHQUFHO0FBQUUsU0FBTyxPQUFPLE1BQU07QUFBUztBQUNsRCxTQUFTLE1BQU8sR0FBRztBQUFFLFNBQU8sT0FBTyxNQUFNO0FBQVk7QUFDckQsU0FBUyxXQUFZQSxPQUFNLFFBQVE7QUFDakMsU0FBTyxLQUFLLElBQUksSUFBSUEsUUFBTyxNQUFNLEVBQUUsS0FBSyxVQUFVO0FBQ3BEO0FBbUZPLFNBQVMsTUFBTyxLQUFLLFNBQVMsUUFBUTtBQUMzQyxNQUFJLE9BQU8sUUFBUSxTQUFVLFFBQU87QUFDcEMsTUFBSUMsS0FBSSxNQUFNLEtBQUssR0FBRztBQUN0QixNQUFJLENBQUNBLE1BQU0sQ0FBQyxXQUFXQSxHQUFFLENBQUMsRUFBSSxRQUFPO0FBRXJDLE1BQUlDLEtBQUksRUFBRSxRQUFRRCxHQUFFLENBQUMsRUFBRSxZQUFZLEdBQUcsS0FBS0EsR0FBRSxDQUFDLEVBQUUsUUFBUSxNQUFNLElBQUksRUFBRTtBQUNwRSxFQUFBQyxHQUFFLEtBQUtBLEdBQUUsU0FBU0EsR0FBRTtBQUNwQixFQUFBQSxHQUFFLFFBQVFBLEdBQUUsT0FBTyxXQUFXLENBQUMsSUFBSSxLQUFLO0FBQ3hDLEVBQUFBLEdBQUUsTUFBTUEsR0FBRSxJQUFJLENBQUMsTUFBTSxNQUFNLENBQUNBLEdBQUUsSUFBSSxTQUFTQSxHQUFFLElBQUk7QUFDakQsTUFBSSxNQUFNLFVBQVVBLEdBQUUsSUFBSSxJQUFJQSxHQUFFO0FBQ2hDLEVBQUFBLEdBQUUsU0FBUyxNQUFNLElBQUksS0FBSyxNQUFNLE1BQU07QUFDdEMsTUFBSUQsR0FBRSxDQUFDLEdBQUc7QUFDUixJQUFBQyxHQUFFLE1BQU0sQ0FBQ0QsR0FBRSxDQUFDO0FBQ1osSUFBQUMsR0FBRSxPQUFPLE1BQU0sTUFBTUEsR0FBRSxNQUFNO0FBQzdCLElBQUFBLEdBQUUsT0FBTyxXQUFXQSxHQUFFLE1BQU0sTUFBTTtBQUFBLEVBQ3BDO0FBQ0EsTUFBSSxRQUFTLENBQUFBLEdBQUUsVUFBVUQsR0FBRSxDQUFDO0FBQzVCLFNBQU9DO0FBQ1Q7QUE0Q08sU0FBUyxLQUFNQyxPQUFNO0FBQzFCLE9BQUssTUFBTUEsS0FBSSxLQUFLLE1BQU1BLEtBQUksTUFBTUEsU0FBUSxLQUFLQSxRQUFPLElBQUssUUFBTyxDQUFDQTtBQUNyRSxNQUFJRCxLQUFJLE1BQU1DLEtBQUk7QUFDbEIsU0FBT0QsTUFBSyxNQUFNQSxHQUFFLElBQUksSUFBSUEsR0FBRSxPQUFPO0FBQ3ZDO0FBOUpBLElBV0ksT0FxQ0E7QUFoREo7QUFBQTtBQUFBO0FBV0EsSUFBSSxRQUFRO0FBcUNaLElBQUksWUFBWSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUU7QUFBQTtBQUFBOzs7QUNoRHJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE4Qk8sU0FBUyxPQUFRLEtBQUs7QUFDM0IsTUFBSSxNQUFNLFFBQVEsR0FBRyxLQUFLLElBQUksV0FBVyxFQUFHLFFBQU8sSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLO0FBQzlFLFNBQU8sS0FBSyxHQUFHO0FBQ2pCO0FBb0JPLFNBQVMsS0FBTSxLQUFLLFFBQVE7QUFDakMsTUFBSSxRQUFRLFFBQVEsUUFBUSxNQUFPLFFBQU8sU0FBVUUsSUFBRztBQUFFLFdBQU8sS0FBS0EsSUFBRyxHQUFHO0FBQUEsRUFBRTtBQUM3RSxRQUFNLEtBQUssTUFBTSxHQUFHO0FBQ3BCLE1BQUksTUFBTSxXQUFXLE9BQU8sU0FBUztBQUNyQyxNQUFJLEtBQUssSUFBSSxNQUFNLEVBQUU7QUFDckIsTUFBSSxJQUFJLEtBQUssTUFBTSxNQUFNLEVBQUUsSUFBSTtBQUMvQixTQUFPLEtBQUs7QUFDZDtBQTVEQSxJQW1DSSxPQUNBO0FBcENKO0FBQUE7QUFpQkE7QUFrQkEsSUFBSSxRQUFRLCtCQUErQixNQUFNLEdBQUc7QUFDcEQsSUFBSSxTQUFTLCtCQUErQixNQUFNLEdBQUc7QUFBQTtBQUFBOzs7QUNwQ3JEO0FBQUE7QUFBQTtBQUFBLE1BQ0UsTUFBUTtBQUFBLE1BQ1IsU0FBVztBQUFBLE1BQ1gsYUFBZTtBQUFBLE1BQ2YsTUFBUTtBQUFBLE1BQ1IsT0FBUztBQUFBLE1BQ1QsY0FBZ0I7QUFBQSxRQUNkLGNBQWM7QUFBQSxNQUNoQjtBQUFBLE1BQ0EsaUJBQW1CO0FBQUEsUUFDakIsZUFBZTtBQUFBLFFBQ2YseUNBQXlDO0FBQUEsUUFDekMscUJBQXFCO0FBQUEsUUFDckIsd0JBQXdCO0FBQUEsUUFDeEIsUUFBVTtBQUFBLFFBQ1YsMEJBQTBCO0FBQUEsUUFDMUIsd0JBQXdCO0FBQUEsUUFDeEIsc0JBQXNCO0FBQUEsUUFDdEIseUJBQXlCO0FBQUEsUUFDekIsMEJBQTBCO0FBQUEsUUFDMUIsT0FBUztBQUFBLFFBQ1QsUUFBVTtBQUFBLFFBQ1YsT0FBUztBQUFBLFFBQ1QsS0FBTztBQUFBLFFBQ1AsUUFBVTtBQUFBLFFBQ1YsT0FBUztBQUFBLE1BQ1g7QUFBQSxNQUNBLGFBQWU7QUFBQSxRQUNiLEtBQU87QUFBQSxRQUNQLFNBQVc7QUFBQSxRQUNYLE1BQVE7QUFBQSxNQUNWO0FBQUEsTUFDQSxTQUFXO0FBQUEsUUFDVCxPQUFTO0FBQUEsUUFDVCxNQUFRO0FBQUEsUUFDUixXQUFXO0FBQUEsUUFDWCxnQkFBa0I7QUFBQSxRQUNsQixTQUFXO0FBQUEsUUFDWCxNQUFRO0FBQUEsUUFDUixPQUFTO0FBQUEsUUFDVCxhQUFlO0FBQUEsTUFDakI7QUFBQSxNQUNBLHVCQUF5QjtBQUFBLE1BQ3pCLFlBQWM7QUFBQSxRQUNaLE1BQVE7QUFBQSxRQUNSLEtBQU87QUFBQSxNQUNUO0FBQUEsTUFDQSxVQUFZO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsUUFBVTtBQUFBLE1BQ1YsU0FBVztBQUFBLE1BQ1gsTUFBUTtBQUFBLFFBQ04sS0FBTztBQUFBLE1BQ1Q7QUFBQSxNQUNBLFVBQVk7QUFBQSxJQUNkO0FBQUE7QUFBQTs7O0FDMURBO0FBQUE7QUFBQTtBQUVBLFFBQUksWUFBWTtBQU1oQixRQUFJLFlBQVk7QUFBQSxNQUNkLFNBQVMsa0JBQTJCO0FBQUEsTUFDcEMsbUJBQW1CLENBQUMsSUFBTSxJQUFNLEtBQU0sR0FBSTtBQUFBO0FBQUEsTUFFMUMscUJBQXFCLENBQUMsR0FBTSxHQUFNLEdBQU0sQ0FBSTtBQUFBO0FBQUEsTUFFNUMsc0JBQXNCLENBQUMsR0FBTSxDQUFJO0FBQUE7QUFBQSxNQUVqQyxzQkFBc0IsQ0FBQyxHQUFNLENBQUk7QUFBQTtBQUFBLE1BRWpDLHVCQUF1QixDQUFDLEdBQU0sR0FBSTtBQUFBO0FBQUEsTUFFbEMsa0JBQWtCLENBQUMsSUFBTSxJQUFNLEtBQU0sR0FBSTtBQUFBO0FBQUEsTUFFekMsZUFBZTtBQUFBLE1BQ2YsY0FBYztBQUFBLE1BQ2QsbUJBQW1CO0FBQUEsTUFDbkIsb0JBQW9CO0FBQUEsTUFDcEIseUJBQXlCO0FBQUEsTUFDekIsZUFBZTtBQUFBLE1BQ2YsZ0JBQWdCO0FBQUEsTUFDaEIsZ0JBQWdCO0FBQUEsTUFDaEIsZUFBZTtBQUFBLE1BQ2YsbUJBQW1CO0FBQUEsTUFDbkIsd0JBQXdCO0FBQUEsTUFDeEIsdUJBQXVCO0FBQUEsTUFDdkIsc0JBQXNCLENBQUMsSUFBTSxDQUFJO0FBQUEsTUFDakMsMEJBQTBCO0FBQUE7QUFBQSxNQUUxQix1QkFBdUI7QUFBQTtBQUFBLE1BRXZCLG1CQUFtQjtBQUFBO0FBQUEsSUFFckI7QUFFQSxhQUFTLFFBQVEsS0FBSztBQUNwQjtBQUVBLFVBQUksT0FBTyxXQUFXLGNBQWMsT0FBTyxPQUFPLGFBQWEsVUFBVTtBQUN2RSxrQkFBVSxTQUFVQyxNQUFLO0FBQ3ZCLGlCQUFPLE9BQU9BO0FBQUEsUUFDaEI7QUFBQSxNQUNGLE9BQU87QUFDTCxrQkFBVSxTQUFVQSxNQUFLO0FBQ3ZCLGlCQUFPQSxRQUFPLE9BQU8sV0FBVyxjQUFjQSxLQUFJLGdCQUFnQixVQUFVQSxTQUFRLE9BQU8sWUFBWSxXQUFXLE9BQU9BO0FBQUEsUUFDM0g7QUFBQSxNQUNGO0FBRUEsYUFBTyxRQUFRLEdBQUc7QUFBQSxJQUNwQjtBQUVBLGFBQVMsY0FBYztBQUNyQixvQkFBYyxTQUFVLElBQUksUUFBUTtBQUNsQyxlQUFPLElBQUksWUFBWSxJQUFJLFFBQVcsTUFBTTtBQUFBLE1BQzlDO0FBRUEsVUFBSSxTQUFTLE9BQU87QUFFcEIsVUFBSSxVQUFVLG9CQUFJLFFBQVE7QUFFMUIsZUFBUyxZQUFZLElBQUksT0FBTyxRQUFRO0FBQ3RDLFlBQUksUUFBUSxJQUFJLE9BQU8sSUFBSSxLQUFLO0FBRWhDLGdCQUFRLElBQUksT0FBTyxVQUFVLFFBQVEsSUFBSSxFQUFFLENBQUM7QUFFNUMsZUFBTyxnQkFBZ0IsT0FBTyxZQUFZLFNBQVM7QUFBQSxNQUNyRDtBQUVBLGdCQUFVLGFBQWEsTUFBTTtBQUU3QixrQkFBWSxVQUFVLE9BQU8sU0FBVSxLQUFLO0FBQzFDLFlBQUksU0FBUyxPQUFPLEtBQUssS0FBSyxNQUFNLEdBQUc7QUFFdkMsWUFBSSxPQUFRLFFBQU8sU0FBUyxZQUFZLFFBQVEsSUFBSTtBQUNwRCxlQUFPO0FBQUEsTUFDVDtBQUVBLGtCQUFZLFVBQVUsT0FBTyxPQUFPLElBQUksU0FBVSxLQUFLLGNBQWM7QUFDbkUsWUFBSSxPQUFPLGlCQUFpQixVQUFVO0FBQ3BDLGNBQUksU0FBUyxRQUFRLElBQUksSUFBSTtBQUU3QixpQkFBTyxPQUFPLE9BQU8sT0FBTyxFQUFFLEtBQUssTUFBTSxLQUFLLGFBQWEsUUFBUSxnQkFBZ0IsU0FBVSxHQUFHLE1BQU07QUFDcEcsbUJBQU8sTUFBTSxPQUFPLElBQUk7QUFBQSxVQUMxQixDQUFDLENBQUM7QUFBQSxRQUNKLFdBQVcsT0FBTyxpQkFBaUIsWUFBWTtBQUM3QyxjQUFJLFFBQVE7QUFFWixpQkFBTyxPQUFPLE9BQU8sT0FBTyxFQUFFLEtBQUssTUFBTSxLQUFLLFdBQVk7QUFDeEQsZ0JBQUksT0FBTztBQUVYLGdCQUFJLE9BQU8sS0FBSyxLQUFLLFNBQVMsQ0FBQyxNQUFNLFVBQVU7QUFDN0MscUJBQU8sQ0FBQyxFQUFFLE1BQU0sS0FBSyxJQUFJO0FBQ3pCLG1CQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssQ0FBQztBQUFBLFlBQ3BDO0FBRUEsbUJBQU8sYUFBYSxNQUFNLE1BQU0sSUFBSTtBQUFBLFVBQ3RDLENBQUM7QUFBQSxRQUNILE9BQU87QUFDTCxpQkFBTyxPQUFPLE9BQU8sT0FBTyxFQUFFLEtBQUssTUFBTSxLQUFLLFlBQVk7QUFBQSxRQUM1RDtBQUFBLE1BQ0Y7QUFFQSxlQUFTLFlBQVksUUFBUSxJQUFJO0FBQy9CLFlBQUksSUFBSSxRQUFRLElBQUksRUFBRTtBQUV0QixlQUFPLE9BQU8sS0FBSyxDQUFDLEVBQUUsT0FBTyxTQUFVLFFBQVEsTUFBTTtBQUNuRCxpQkFBTyxJQUFJLElBQUksT0FBTyxFQUFFLElBQUksQ0FBQztBQUM3QixpQkFBTztBQUFBLFFBQ1QsR0FBRyx1QkFBTyxPQUFPLElBQUksQ0FBQztBQUFBLE1BQ3hCO0FBRUEsYUFBTyxZQUFZLE1BQU0sTUFBTSxTQUFTO0FBQUEsSUFDMUM7QUFFQSxhQUFTLGdCQUFnQixVQUFVLGFBQWE7QUFDOUMsVUFBSSxFQUFFLG9CQUFvQixjQUFjO0FBQ3RDLGNBQU0sSUFBSSxVQUFVLG1DQUFtQztBQUFBLE1BQ3pEO0FBQUEsSUFDRjtBQUVBLGFBQVMsa0JBQWtCLFFBQVEsT0FBTztBQUN4QyxlQUFTLElBQUksR0FBRyxJQUFJLE1BQU0sUUFBUSxLQUFLO0FBQ3JDLFlBQUksYUFBYSxNQUFNLENBQUM7QUFDeEIsbUJBQVcsYUFBYSxXQUFXLGNBQWM7QUFDakQsbUJBQVcsZUFBZTtBQUMxQixZQUFJLFdBQVcsV0FBWSxZQUFXLFdBQVc7QUFDakQsZUFBTyxlQUFlLFFBQVEsV0FBVyxLQUFLLFVBQVU7QUFBQSxNQUMxRDtBQUFBLElBQ0Y7QUFFQSxhQUFTLGFBQWEsYUFBYSxZQUFZLGFBQWE7QUFDMUQsVUFBSSxXQUFZLG1CQUFrQixZQUFZLFdBQVcsVUFBVTtBQUNuRSxVQUFJLFlBQWEsbUJBQWtCLGFBQWEsV0FBVztBQUMzRCxhQUFPO0FBQUEsSUFDVDtBQUVBLGFBQVMsVUFBVSxVQUFVLFlBQVk7QUFDdkMsVUFBSSxPQUFPLGVBQWUsY0FBYyxlQUFlLE1BQU07QUFDM0QsY0FBTSxJQUFJLFVBQVUsb0RBQW9EO0FBQUEsTUFDMUU7QUFFQSxlQUFTLFlBQVksT0FBTyxPQUFPLGNBQWMsV0FBVyxXQUFXO0FBQUEsUUFDckUsYUFBYTtBQUFBLFVBQ1gsT0FBTztBQUFBLFVBQ1AsVUFBVTtBQUFBLFVBQ1YsY0FBYztBQUFBLFFBQ2hCO0FBQUEsTUFDRixDQUFDO0FBQ0QsVUFBSSxXQUFZLGlCQUFnQixVQUFVLFVBQVU7QUFBQSxJQUN0RDtBQUVBLGFBQVMsZ0JBQWdCLEdBQUdDLElBQUc7QUFDN0Isd0JBQWtCLE9BQU8sa0JBQWtCLFNBQVNDLGlCQUFnQkMsSUFBR0YsSUFBRztBQUN4RSxRQUFBRSxHQUFFLFlBQVlGO0FBQ2QsZUFBT0U7QUFBQSxNQUNUO0FBRUEsYUFBTyxnQkFBZ0IsR0FBR0YsRUFBQztBQUFBLElBQzdCO0FBTUEsUUFBSSxRQUFxQiw0QkFBWTtBQUNuQyxlQUFTRyxTQUFRO0FBQ2Ysd0JBQWdCLE1BQU1BLE1BQUs7QUFBQSxNQUM3QjtBQUVBLG1CQUFhQSxRQUFPLE1BQU0sQ0FBQztBQUFBLFFBQ3pCLEtBQUs7QUFBQSxRQUNMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUtBLFNBQVMsVUFBVTtBQUNqQixtQkFBTyxVQUFVO0FBQUEsVUFDbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU9GLEdBQUc7QUFBQSxRQUNELEtBQUs7QUFBQSxRQUNMLE9BQU8sU0FBUyxjQUFjLFFBQVE7QUFDcEMsaUJBQU8sT0FBTyxNQUFNLEVBQUUsRUFBRSxJQUFJLFNBQVUsT0FBTztBQUMzQyxtQkFBTyxNQUFNLFdBQVc7QUFBQSxVQUMxQixDQUFDO0FBQUEsUUFDSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU9GLEdBQUc7QUFBQSxRQUNELEtBQUs7QUFBQSxRQUNMLE9BQU8sU0FBUyxVQUFVLEdBQUc7QUFDM0IsaUJBQU8sQ0FBQyxNQUFNLFdBQVcsQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDO0FBQUEsUUFDNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVFGLEdBQUc7QUFBQSxRQUNELEtBQUs7QUFBQSxRQUNMLE9BQU8sU0FBUyxTQUFTLE9BQU87QUFDOUIsaUJBQU8sVUFBVSxPQUFPLEtBQUs7QUFBQSxRQUMvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BV0YsR0FBRztBQUFBLFFBQ0QsS0FBSztBQUFBLFFBQ0wsT0FBTyxTQUFTLHVCQUF1QixPQUFPO0FBQzVDLGtCQUFRLEtBQUssTUFBTSxLQUFLO0FBQ3hCLGNBQUksU0FBUyxRQUFRO0FBRXJCLGlCQUFPLFFBQVEsU0FBUyxHQUFHO0FBQ3pCLHVCQUFXO0FBQ1gsc0JBQVUsUUFBUSxNQUFPO0FBQUEsVUFDM0I7QUFFQSxjQUFJLFFBQVEsQ0FBQztBQUViLGlCQUFPLE1BQU07QUFDWCxrQkFBTSxLQUFLLFNBQVMsR0FBSTtBQUN4QixnQkFBSSxTQUFTLElBQU0sWUFBVztBQUFBLGlCQUFPO0FBQ25DO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFFQSxpQkFBTztBQUFBLFFBQ1Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFPRixHQUFHO0FBQUEsUUFDRCxLQUFLO0FBQUEsUUFDTCxPQUFPLFNBQVMsZ0JBQWdCLEdBQUc7QUFDakMsaUJBQU8sVUFBVSxDQUFDLEVBQUUsTUFBTSxPQUFPLEVBQUUsU0FBUztBQUFBLFFBQzlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BT0YsR0FBRztBQUFBLFFBQ0QsS0FBSztBQUFBLFFBQ0wsT0FBTyxTQUFTLGdCQUFnQixPQUFPO0FBQ3JDLGNBQUksTUFBTTtBQUNWLGNBQUk7QUFDSixnQkFBTSxRQUFRLFNBQVUsT0FBTztBQUM3QiwyQkFBZSxNQUFNLFNBQVMsRUFBRTtBQUVoQyxnQkFBSSxhQUFhLFVBQVUsRUFBRyxnQkFBZSxNQUFNO0FBQ25ELG1CQUFPO0FBQUEsVUFDVCxDQUFDO0FBQ0QsaUJBQU8sU0FBUyxLQUFLLEVBQUU7QUFBQSxRQUN6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUUYsR0FBRztBQUFBLFFBQ0QsS0FBSztBQUFBLFFBQ0wsT0FBTyxTQUFTLGNBQWMsUUFBUSxhQUFhO0FBQ2pELHdCQUFjLGVBQWU7QUFDN0IsY0FBSSxZQUFZLE9BQU8sU0FBUyxFQUFFO0FBRWxDLGNBQUksVUFBVSxTQUFTLEdBQUc7QUFFeEIsd0JBQVksTUFBTTtBQUFBLFVBQ3BCO0FBR0EsY0FBSSxXQUFXLFVBQVUsTUFBTSxPQUFPO0FBRXRDLHFCQUFXLFNBQVMsSUFBSSxTQUFVLE1BQU07QUFDdEMsbUJBQU8sU0FBUyxNQUFNLEVBQUU7QUFBQSxVQUMxQixDQUFDO0FBRUQsY0FBSSxTQUFTLFNBQVMsYUFBYTtBQUNqQyxtQkFBTyxjQUFjLFNBQVMsU0FBUyxHQUFHO0FBQ3hDLHVCQUFTLFFBQVEsQ0FBQztBQUFBLFlBQ3BCO0FBQUEsVUFDRjtBQUVBLGlCQUFPO0FBQUEsUUFDVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU9GLEdBQUc7QUFBQSxRQUNELEtBQUs7QUFBQSxRQUNMLE9BQU8sU0FBUyxRQUFRLE9BQU87QUFDN0IsY0FBSSxNQUFNLFFBQVEsS0FBSyxFQUFHLFFBQU87QUFDakMsaUJBQU8sQ0FBQyxLQUFLO0FBQUEsUUFDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU9GLEdBQUc7QUFBQSxRQUNELEtBQUs7QUFBQSxRQUNMLE9BQU8sU0FBUyxnQkFBZ0IsVUFBVTtBQUV4QyxxQkFBVyxXQUFXLE1BQU0sTUFBTTtBQUNsQyxpQkFBTyxLQUFLLE1BQU0sV0FBVyxNQUFNLEdBQUc7QUFBQSxRQUN4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUUYsR0FBRztBQUFBLFFBQ0QsS0FBSztBQUFBLFFBQ0wsT0FBTyxTQUFTLGdCQUFnQixVQUFVO0FBQ3hDLGNBQUksTUFBTSxRQUFRLFFBQVEsR0FBRztBQUUzQixtQkFBTyxTQUFTLElBQUksU0FBVSxPQUFPO0FBQ25DLHFCQUFPQSxPQUFNLGdCQUFnQixLQUFLO0FBQUEsWUFDcEMsQ0FBQyxFQUFFLE9BQU8sU0FBVSxHQUFHLEdBQUc7QUFDeEIscUJBQU8sSUFBSTtBQUFBLFlBQ2IsR0FBRyxDQUFDO0FBQUEsVUFDTjtBQUVBLHFCQUFXLFNBQVMsU0FBUztBQUU3QixjQUFJLFNBQVMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxNQUFNLEtBQUs7QUFFNUMsbUJBQU8sU0FBUyxTQUFTLFVBQVUsQ0FBQyxDQUFDO0FBQUEsVUFDdkM7QUFHQSxjQUFJLGVBQWVBLE9BQU0sZ0JBQWdCLFVBQVUscUJBQXFCO0FBQ3hFLGNBQUksZUFBZSxlQUFlQSxPQUFNLHNCQUFzQixRQUFRO0FBQ3RFLGlCQUFPQSxPQUFNLGtCQUFrQixZQUFZO0FBQUEsUUFDN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFVRixHQUFHO0FBQUEsUUFDRCxLQUFLO0FBQUEsUUFDTCxPQUFPLFNBQVMsa0JBQWtCLE1BQU07QUFDdEMsY0FBSSxjQUFjLEtBQUssTUFBTSxJQUFJO0FBQ2pDLGlCQUFPLEtBQUssSUFBSSxjQUFjLElBQUksSUFBSSxPQUFXLGNBQWM7QUFBQSxRQUNqRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BV0YsR0FBRztBQUFBLFFBQ0QsS0FBSztBQUFBLFFBQ0wsT0FBTyxTQUFTLGlCQUFpQixNQUFNO0FBQ3JDLGNBQUksY0FBYyxLQUFLLE1BQU0sSUFBSTtBQUNqQyxpQkFBTyxjQUFjO0FBQUEsUUFDdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVFGLEdBQUc7QUFBQSxRQUNELEtBQUs7QUFBQSxRQUNMLE9BQU8sU0FBUyxzQkFBc0IsVUFBVTtBQUc5QyxjQUFJLGFBQWEsSUFBSyxRQUFPO0FBQzdCLGNBQUksUUFBUSxTQUFTLE1BQW9CLDRCQUFZLGdDQUFnQztBQUFBLFlBQ25GLFFBQVE7QUFBQSxZQUNSLE1BQU07QUFBQSxZQUNOLFFBQVE7QUFBQSxVQUNWLENBQUMsQ0FBQztBQUVGLGNBQUksT0FBTztBQUNULGdCQUFJLE9BQU8sT0FBTyxNQUFNLE9BQU8sSUFBSTtBQUVuQyxnQkFBSSxjQUFjLFNBQVMsTUFBTSxPQUFPLE9BQU8sT0FBTztBQUV0RCxnQkFBSSxhQUFhO0FBRWYsa0JBQUksUUFBUSxPQUFPO0FBQ25CLGtCQUFJLHFCQUFxQixJQUFJO0FBQzdCLGtCQUFJLGdCQUFnQixNQUFNLFFBQ3RCLFNBQVMsY0FBYyxRQUN2QixTQUFTLGNBQWM7QUFFM0Isa0JBQUksUUFBUTtBQUNWLG9CQUFJLGVBQWUsT0FBTztBQUMxQixvQkFBSSxVQUFVLEtBQUssSUFBSSxHQUFHLFlBQVk7QUFDdEMscUNBQXFCLHFCQUFxQix1QkFBdUIsVUFBVSxLQUFLO0FBQUEsY0FDbEY7QUFFQSxrQkFBSSxPQUFPLFdBQVcsVUFBVTtBQUM5QixvQkFBSSxVQUFVLHFCQUFxQjtBQUVuQyxvQkFBSSxnQkFBZ0IsT0FBTyxVQUFVLEdBQUc7QUFDeEMscUNBQXFCLFVBQVU7QUFBQSxjQUNqQztBQUVBLHFCQUFPO0FBQUEsWUFDVDtBQUFBLFVBQ0Y7QUFFQSxnQkFBTSxJQUFJLE1BQU0sV0FBVywyQkFBMkI7QUFBQSxRQUN4RDtBQUFBLE1BQ0YsQ0FBQyxDQUFDO0FBRUYsYUFBT0E7QUFBQSxJQUNULEdBQUU7QUFRRixRQUFJLGNBQTJCLDRCQUFZO0FBQ3pDLGVBQVNDLGFBQVksUUFBUTtBQUMzQix3QkFBZ0IsTUFBTUEsWUFBVztBQUdqQyxpQkFBUyxPQUFPLE9BQU87QUFBQSxVQUNyQixTQUFTO0FBQUEsVUFDVCxXQUFXO0FBQUEsVUFDWCxVQUFVO0FBQUEsVUFDVixNQUFNO0FBQUEsUUFDUixHQUFHLE1BQU07QUFDVCxhQUFLLE9BQU87QUFDWixhQUFLLFVBQVUsT0FBTztBQUN0QixhQUFLLFFBQVEsT0FBTztBQUNwQixhQUFLLE9BQU8sT0FBTztBQUNuQixhQUFLLFdBQVcsT0FBTztBQUN2QixhQUFLLFlBQVksT0FBTztBQUN4QixhQUFLLGFBQWEsTUFBTSxTQUFTLEtBQUssS0FBSztBQUMzQyxhQUFLLE9BQU87QUFDWixhQUFLLFFBQVE7QUFDYixhQUFLLE9BQU8sT0FBTztBQUFBLE1BQ3JCO0FBUUEsbUJBQWFBLGNBQWEsQ0FBQztBQUFBLFFBQ3pCLEtBQUs7QUFBQSxRQUNMLE9BQU8sU0FBUyxVQUFVLE9BQU8sZ0JBQWdCO0FBQy9DLGVBQUssT0FBTyxDQUFDO0FBRWIsY0FBSSxLQUFLLFdBQVc7QUFDbEIsaUJBQUssT0FBTyxNQUFNLGtCQUFrQixLQUFLLFNBQVM7QUFFbEQsZ0JBQUksTUFBTSxlQUFlLEdBQUc7QUFDMUIsbUJBQUssUUFBUSxLQUFLO0FBQUEsWUFDcEI7QUFBQSxVQUNGLE9BQU87QUFDTCxpQkFBSyxRQUFRLE1BQU0sZ0JBQWdCLEtBQUssSUFBSTtBQUM1QyxpQkFBSyxPQUFPLE1BQU0sa0JBQWtCLE1BQU0sY0FBYyxLQUFLLEtBQUs7QUFBQSxVQUNwRTtBQUVBLGVBQUssK0JBQStCLE1BQU0sa0JBQWtCLEtBQUssUUFBUSxjQUFjO0FBQ3ZGLGVBQUssT0FBTyxNQUFNLHVCQUF1QixLQUFLLDRCQUE0QixFQUFFLE9BQU8sS0FBSyxjQUFjLEdBQUcsS0FBSyxZQUFZLE1BQU0sZ0JBQWdCLEtBQUssUUFBUSxDQUFDO0FBQzlKLGlCQUFPO0FBQUEsUUFDVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUUYsR0FBRztBQUFBLFFBQ0QsS0FBSztBQUFBLFFBQ0wsT0FBTyxTQUFTLGdCQUFnQjtBQUM5QixpQkFBTyxNQUFNLEtBQUssVUFBVTtBQUFBLFFBQzlCO0FBQUEsTUFDRixDQUFDLENBQUM7QUFFRixhQUFPQTtBQUFBLElBQ1QsR0FBRTtBQVFGLFFBQUksZUFBNEIsNEJBQVk7QUFDMUMsZUFBU0MsY0FBYSxRQUFRO0FBQzVCLHdCQUFnQixNQUFNQSxhQUFZO0FBR2xDLGlCQUFTLE9BQU8sT0FBTztBQUFBLFVBQ3JCLFNBQVM7QUFBQSxVQUNULFVBQVU7QUFBQSxVQUNWLE1BQU07QUFBQSxRQUNSLEdBQUcsTUFBTTtBQUNULGFBQUssT0FBTztBQUNaLGFBQUssVUFBVSxPQUFPO0FBQ3RCLGFBQUssUUFBUSxPQUFPO0FBQ3BCLGFBQUssV0FBVyxPQUFPO0FBQ3ZCLGFBQUssV0FBVyxPQUFPO0FBQ3ZCLGFBQUssYUFBYSxNQUFNLFNBQVMsS0FBSyxLQUFLO0FBQzNDLGFBQUssT0FBTyxPQUFPO0FBQ25CLGFBQUssUUFBUSxNQUFNLGdCQUFnQixLQUFLLFFBQVE7QUFDaEQsYUFBSyxPQUFPLE9BQU87QUFBQSxNQUNyQjtBQVFBLG1CQUFhQSxlQUFjLENBQUM7QUFBQSxRQUMxQixLQUFLO0FBQUEsUUFDTCxPQUFPLFNBQVMsVUFBVSxPQUFPLGdCQUFnQjtBQUMvQyxjQUFJLEtBQUssU0FBUyxNQUFNO0FBQ3RCLGlCQUFLLE9BQU8sTUFBTSxrQkFBa0IsS0FBSyxRQUFRLE1BQU0sV0FBVztBQUFBLFVBQ3BFO0FBRUEsZUFBSywrQkFBK0IsTUFBTSxrQkFBa0IsS0FBSyxRQUFRLGNBQWM7QUFDdkYsZUFBSyxPQUFPLE1BQU0sdUJBQXVCLEtBQUssNEJBQTRCLEVBQUUsT0FBTyxLQUFLLGNBQWMsR0FBRyxLQUFLLFlBQVksTUFBTSxnQkFBZ0IsS0FBSyxRQUFRLENBQUM7QUFDOUosaUJBQU87QUFBQSxRQUNUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFRRixHQUFHO0FBQUEsUUFDRCxLQUFLO0FBQUEsUUFDTCxPQUFPLFNBQVMsZ0JBQWdCO0FBQzlCLGlCQUFPLE1BQU0sS0FBSyxVQUFVO0FBQUEsUUFDOUI7QUFBQSxNQUNGLENBQUMsQ0FBQztBQUVGLGFBQU9BO0FBQUEsSUFDVCxHQUFFO0FBUUYsUUFBSSxZQUF5Qiw0QkFBWTtBQUN2QyxlQUFTQyxXQUFVLFFBQVE7QUFDekIsd0JBQWdCLE1BQU1BLFVBQVM7QUFHL0IsaUJBQVMsT0FBTyxPQUFPO0FBQUEsVUFDckIsU0FBUztBQUFBLFVBQ1QsUUFBUTtBQUFBLFVBQ1IsWUFBWTtBQUFBLFVBQ1osV0FBVztBQUFBLFVBQ1gsVUFBVTtBQUFBLFVBQ1YsTUFBTTtBQUFBLFFBQ1IsR0FBRyxNQUFNO0FBQ1QsYUFBSyxPQUFPLENBQUM7QUFDYixhQUFLLE9BQU87QUFDWixhQUFLLFFBQVEsTUFBTSxRQUFRLE9BQU8sS0FBSztBQUN2QyxhQUFLLFVBQVUsT0FBTztBQUN0QixhQUFLLFdBQVcsT0FBTztBQUN2QixhQUFLLFFBQVEsT0FBTztBQUNwQixhQUFLLFNBQVMsT0FBTztBQUNyQixhQUFLLGFBQWEsT0FBTztBQUN6QixhQUFLLFlBQVksT0FBTztBQUN4QixhQUFLLFdBQVcsT0FBTztBQUN2QixhQUFLLE9BQU8sT0FBTztBQUNuQixhQUFLLGVBQWUsTUFBTSxnQkFBZ0IsS0FBSyxRQUFRO0FBQ3ZELGFBQUssZUFBZSxNQUFNLGdCQUFnQixLQUFLLElBQUk7QUFDbkQsYUFBSyxTQUFTLENBQUM7QUFBQSxNQUNqQjtBQU9BLG1CQUFhQSxZQUFXLENBQUM7QUFBQSxRQUN2QixLQUFLO0FBQUEsUUFDTCxPQUFPLFNBQVMsWUFBWTtBQUMxQixjQUFJLFFBQVE7QUFHWixlQUFLLE9BQU8sQ0FBQztBQUNiLGVBQUs7QUFDTCxlQUFLO0FBRUwsY0FBSSxLQUFLLE9BQU87QUFDZCxnQkFBSSxnQkFBZ0I7QUFDcEIsaUJBQUssUUFBUSxNQUFNLFFBQVEsS0FBSyxLQUFLO0FBQ3JDLGlCQUFLLE1BQU0sUUFBUSxTQUFVLE9BQU87QUFDbEMsa0JBQUksWUFBWSxJQUFJQSxXQUFVO0FBQUEsZ0JBQzVCLE9BQU8sTUFBTTtBQUFBLGdCQUNiLFVBQVUsTUFBTTtBQUFBLGNBQ2xCLENBQUM7QUFDRCxvQkFBTSxPQUFPLE1BQU0sS0FBSyxPQUFPLFVBQVUsSUFBSTtBQUFBLFlBQy9DLENBQUM7QUFBQSxVQUNIO0FBR0EsY0FBSSxDQUFDLEtBQUssWUFBWTtBQUVwQixxQkFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLFFBQVEsS0FBSztBQUVwQyxtQkFBSyxNQUFNLFFBQVEsU0FBVU4sSUFBRyxHQUFHO0FBQ2pDLG9CQUFJLEtBQUssR0FBRztBQUNWLHNCQUFJLFlBQVksSUFBSSxZQUFZO0FBQUEsb0JBQzlCLFNBQVMsTUFBTTtBQUFBLG9CQUNmLE1BQU0sTUFBTTtBQUFBLG9CQUNaLFVBQVUsTUFBTTtBQUFBLG9CQUNoQixPQUFPQTtBQUFBLG9CQUNQLFdBQVcsTUFBTTtBQUFBLGtCQUNuQixDQUFDO0FBQUEsZ0JBQ0gsT0FBTztBQUdMLHNCQUFJLFlBQVksSUFBSSxZQUFZO0FBQUEsb0JBQzlCLFNBQVMsTUFBTTtBQUFBLG9CQUNmLE1BQU07QUFBQSxvQkFDTixVQUFVLE1BQU07QUFBQSxvQkFDaEIsT0FBT0E7QUFBQSxvQkFDUCxXQUFXLE1BQU07QUFBQSxrQkFDbkIsQ0FBQztBQUFBLGdCQUNIO0FBRUEsc0JBQU0sT0FBTyxLQUFLLFNBQVM7QUFBQSxjQUM3QixDQUFDO0FBRUQsbUJBQUssTUFBTSxRQUFRLFNBQVVBLElBQUcsR0FBRztBQUNqQyxvQkFBSSxLQUFLLEdBQUc7QUFFVixzQkFBSSxhQUFhLElBQUksYUFBYTtBQUFBLG9CQUNoQyxTQUFTLE1BQU07QUFBQSxvQkFDZixVQUFVLE1BQU07QUFBQSxvQkFDaEIsVUFBVSxNQUFNO0FBQUEsb0JBQ2hCLE9BQU9BO0FBQUEsb0JBQ1AsTUFBTSxNQUFNLGNBQWMsT0FBTyxNQUFNLGdCQUFnQixNQUFNLFFBQVEsSUFBSSxNQUFNLFlBQVk7QUFBQSxrQkFDN0YsQ0FBQztBQUFBLGdCQUNILE9BQU87QUFHTCxzQkFBSSxhQUFhLElBQUksYUFBYTtBQUFBLG9CQUNoQyxTQUFTLE1BQU07QUFBQSxvQkFDZixVQUFVO0FBQUEsb0JBQ1YsVUFBVSxNQUFNO0FBQUEsb0JBQ2hCLE9BQU9BO0FBQUEsb0JBQ1AsTUFBTSxNQUFNLGNBQWMsT0FBTyxNQUFNLGdCQUFnQixNQUFNLFFBQVEsSUFBSSxNQUFNLFlBQVk7QUFBQSxrQkFDN0YsQ0FBQztBQUFBLGdCQUNIO0FBRUEsc0JBQU0sT0FBTyxLQUFLLFVBQVU7QUFBQSxjQUM5QixDQUFDO0FBQUEsWUFDSDtBQUFBLFVBQ0YsT0FBTztBQUVMLHFCQUFTLElBQUksR0FBRyxJQUFJLEtBQUssUUFBUSxLQUFLO0FBQ3BDLG1CQUFLLE1BQU0sUUFBUSxTQUFVQSxJQUFHLEdBQUc7QUFFakMsb0JBQUksWUFBWSxJQUFJLFlBQVk7QUFBQSxrQkFDOUIsU0FBUyxNQUFNO0FBQUEsa0JBQ2YsTUFBTSxJQUFJLElBQUksSUFBSSxNQUFNO0FBQUE7QUFBQSxrQkFFeEIsVUFBVSxNQUFNO0FBQUEsa0JBQ2hCLE9BQU9BO0FBQUEsa0JBQ1AsV0FBVyxNQUFNO0FBQUEsZ0JBQ25CLENBQUM7QUFDRCxvQkFBSSxhQUFhLElBQUksYUFBYTtBQUFBLGtCQUNoQyxTQUFTLE1BQU07QUFBQSxrQkFDZixVQUFVLE1BQU07QUFBQSxrQkFDaEIsVUFBVSxNQUFNO0FBQUEsa0JBQ2hCLE9BQU9BO0FBQUEsZ0JBQ1QsQ0FBQztBQUVELHNCQUFNLE9BQU8sS0FBSyxXQUFXLFVBQVU7QUFBQSxjQUN6QyxDQUFDO0FBQUEsWUFDSDtBQUFBLFVBQ0Y7QUFFQSxpQkFBTztBQUFBLFFBQ1Q7QUFBQSxNQUNGLENBQUMsQ0FBQztBQUVGLGFBQU9NO0FBQUEsSUFDVCxHQUFFO0FBU0YsUUFBSSxjQUFjLFNBQVNDLGFBQVksU0FBUztBQUM5QyxVQUFJLFdBQVcsR0FBRztBQUNoQixlQUFPLEtBQUssTUFBTSxTQUFTLFVBQVUsS0FBSyxDQUFDO0FBQUEsTUFDN0M7QUFFQSxhQUFPLEtBQUssTUFBTSxTQUFTLFVBQVUsS0FBSyxDQUFDO0FBQUEsSUFDN0M7QUFFQSxRQUFJLGlCQUFpQixTQUFTQyxnQkFBZSxRQUFRO0FBQ25ELHNCQUFnQixNQUFNQSxlQUFjO0FBRXBDLFdBQUssT0FBTztBQUNaLFVBQUksU0FBUyxZQUFZLE9BQU8sSUFBSTtBQUNwQyxVQUFJLFVBQVUsT0FBTyxXQUFXO0FBQ2hDLFVBQUksV0FBVyxTQUFTO0FBQ3hCLFVBQUksV0FBVyxVQUFVLElBQUk7QUFDN0IsV0FBSyxPQUFPLE1BQU0sdUJBQXVCLENBQUksRUFBRSxPQUFPLFVBQVUsb0JBQW9CLFNBQVMsVUFBVSxRQUFRO0FBQUEsSUFDakg7QUFRQSxRQUFJLHFCQUFxQixTQUFTQyxvQkFBbUIsUUFBUTtBQUMzRCxzQkFBZ0IsTUFBTUEsbUJBQWtCO0FBRXhDLFdBQUssT0FBTztBQUVaLFdBQUssT0FBTyxNQUFNLHVCQUF1QixDQUFJLEVBQUUsT0FBTyxVQUFVLHVCQUF1QixPQUFPLFVBQVU7QUFBQSxJQUMxRztBQVFBLFFBQUksd0JBQXdCLFNBQVNDLHVCQUFzQixRQUFRO0FBQ2pFLHNCQUFnQixNQUFNQSxzQkFBcUI7QUFFM0MsV0FBSyxPQUFPO0FBRVosV0FBSyxPQUFPLE1BQU0sdUJBQXVCLENBQUksRUFBRSxPQUFPLFVBQVUsMEJBQTBCLE9BQU8sa0JBQWtCLE9BQU8sZUFBZTtBQUFBLElBQzNJO0FBUUEsUUFBSSxpQkFBaUIsU0FBU0MsZ0JBQWUsTUFBTTtBQUNqRCxzQkFBZ0IsTUFBTUEsZUFBYztBQUVwQyxXQUFLLE9BQU87QUFDWixVQUFJLFlBQVksTUFBTSxjQUFjLElBQUk7QUFFeEMsV0FBSyxPQUFPLE1BQU0sdUJBQXVCLENBQUksRUFBRTtBQUFBLFFBQU8sVUFBVTtBQUFBLFFBQWUsVUFBVTtBQUFBLFFBQW1CLE1BQU0sdUJBQXVCLFVBQVUsTUFBTTtBQUFBO0FBQUEsUUFDeko7QUFBQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBUUEsUUFBSSxnQkFBZ0IsU0FBU0MsZUFBYyxNQUFNO0FBQy9DLHNCQUFnQixNQUFNQSxjQUFhO0FBRW5DLFdBQUssT0FBTztBQUNaLFVBQUksWUFBWSxNQUFNLGNBQWMsSUFBSTtBQUV4QyxXQUFLLE9BQU8sTUFBTSx1QkFBdUIsQ0FBSSxFQUFFO0FBQUEsUUFBTyxVQUFVO0FBQUEsUUFBZSxVQUFVO0FBQUEsUUFBZ0IsTUFBTSx1QkFBdUIsVUFBVSxNQUFNO0FBQUE7QUFBQSxRQUN0SjtBQUFBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFPQSxRQUFJLGdCQUFnQixTQUFTQyxpQkFBZ0I7QUFDM0Msc0JBQWdCLE1BQU1BLGNBQWE7QUFFbkMsV0FBSyxPQUFPO0FBRVosV0FBSyxPQUFPLE1BQU0sdUJBQXVCLENBQUksRUFBRSxPQUFPLFVBQVUsZUFBZSxVQUFVLG9CQUFvQjtBQUFBLElBQy9HO0FBUUEsUUFBSSxzQkFBc0IsU0FBU0MscUJBQW9CLE1BQU07QUFDM0Qsc0JBQWdCLE1BQU1BLG9CQUFtQjtBQUV6QyxXQUFLLE9BQU87QUFDWixVQUFJLFlBQVksTUFBTSxjQUFjLElBQUk7QUFFeEMsV0FBSyxPQUFPLE1BQU0sdUJBQXVCLENBQUksRUFBRTtBQUFBLFFBQU8sVUFBVTtBQUFBLFFBQWUsVUFBVTtBQUFBLFFBQXlCLE1BQU0sdUJBQXVCLFVBQVUsTUFBTTtBQUFBO0FBQUEsUUFDL0o7QUFBQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBT0EsUUFBSSxvQkFBb0IsU0FBU0MsbUJBQWtCLElBQUksSUFBSTtBQUN6RCxzQkFBZ0IsTUFBTUEsa0JBQWlCO0FBRXZDLFdBQUssT0FBTztBQUNaLFVBQUksT0FBTyxNQUFNO0FBQ2pCLFdBQUssTUFBTTtBQUVYLFVBQUksT0FBTyxPQUFPLGFBQWE7QUFDN0IsWUFBSSxTQUFTLENBQUMsQ0FBQyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLE1BQU0sSUFBSSxHQUFHLENBQUMsTUFBTSxNQUFNLE1BQU0sS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxNQUFNLE1BQU0sTUFBTSxNQUFNLElBQUksQ0FBQztBQUN0TCxZQUFJLFNBQVMsR0FBRztBQUNoQixZQUFJQyxRQUFPLE1BQU07QUFDakIsWUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxZQUFZLEVBQUcsUUFBTztBQUUxQyxZQUFJLFNBQVMsR0FBRztBQUNkLGtCQUFRLEdBQUcsT0FBTyxTQUFTLENBQUMsR0FBRztBQUFBLFlBQzdCLEtBQUs7QUFDSCxxQkFBTztBQUNQLGNBQUFBLFFBQU8sR0FBRyxPQUFPLENBQUMsRUFBRSxZQUFZO0FBQ2hDLGNBQUFBLFFBQU9BLE1BQUssT0FBTyxHQUFHLFVBQVUsR0FBRyxTQUFTLENBQUMsQ0FBQztBQUM5QztBQUFBLFlBRUYsS0FBSztBQUNILHFCQUFPO0FBQ1AsY0FBQUEsUUFBTyxHQUFHLE9BQU8sQ0FBQyxFQUFFLFlBQVk7QUFDaEMsY0FBQUEsUUFBT0EsTUFBSyxPQUFPLEdBQUcsVUFBVSxHQUFHLFNBQVMsQ0FBQyxDQUFDO0FBQzlDO0FBQUEsWUFFRixLQUFLO0FBQ0gscUJBQU87QUFDUCxjQUFBQSxRQUFPLEdBQUcsT0FBTyxDQUFDLEVBQUUsWUFBWTtBQUNoQyxjQUFBQSxRQUFPQSxNQUFLLE9BQU8sR0FBRyxVQUFVLEdBQUcsU0FBUyxDQUFDLENBQUM7QUFDOUM7QUFBQSxZQUVGLEtBQUs7QUFDSCxxQkFBTztBQUNQLGNBQUFBLFFBQU8sR0FBRyxPQUFPLENBQUMsRUFBRSxZQUFZO0FBQ2hDLGNBQUFBLFFBQU9BLE1BQUssT0FBTyxHQUFHLFVBQVUsR0FBRyxTQUFTLENBQUMsQ0FBQztBQUM5QztBQUFBLFVBQ0o7QUFBQSxRQUNGO0FBRUEsWUFBSSxhQUFhLE9BQU8sSUFBSSxFQUFFLFFBQVFBLEtBQUk7QUFDMUMsYUFBSyxlQUFlLEtBQUssSUFBSSxhQUFhO0FBQUEsTUFDNUM7QUFHQSxXQUFLLE9BQU8sTUFBTSx1QkFBdUIsQ0FBSSxFQUFFO0FBQUEsUUFBTyxVQUFVO0FBQUEsUUFBZSxVQUFVO0FBQUEsUUFBdUIsQ0FBQyxDQUFJO0FBQUE7QUFBQSxRQUNySCxNQUFNLGNBQWMsSUFBSSxDQUFDO0FBQUE7QUFBQSxRQUN6QixNQUFNLGNBQWMsTUFBTSxDQUFDO0FBQUE7QUFBQSxNQUMzQjtBQUFBLElBQ0Y7QUFRQSxRQUFJLGFBQWEsU0FBU0MsWUFBVyxNQUFNO0FBQ3pDLHNCQUFnQixNQUFNQSxXQUFVO0FBRWhDLFdBQUssT0FBTztBQUNaLFVBQUksWUFBWSxNQUFNLGNBQWMsSUFBSTtBQUV4QyxXQUFLLE9BQU8sTUFBTSx1QkFBdUIsQ0FBSSxFQUFFO0FBQUEsUUFBTyxVQUFVO0FBQUEsUUFBZSxVQUFVO0FBQUEsUUFBZSxNQUFNLHVCQUF1QixVQUFVLE1BQU07QUFBQTtBQUFBLFFBQ3JKO0FBQUE7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQVFBLFFBQUksY0FBYyxTQUFTQyxhQUFZLE1BQU07QUFDM0Msc0JBQWdCLE1BQU1BLFlBQVc7QUFFakMsV0FBSyxPQUFPO0FBQ1osVUFBSSxZQUFZLE1BQU0sY0FBYyxJQUFJO0FBRXhDLFdBQUssT0FBTyxNQUFNLHVCQUF1QixDQUFJLEVBQUU7QUFBQSxRQUFPLFVBQVU7QUFBQSxRQUFlLFVBQVU7QUFBQSxRQUFnQixNQUFNLHVCQUF1QixVQUFVLE1BQU07QUFBQTtBQUFBLFFBQ3RKO0FBQUE7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQVFBLFFBQUksYUFBYSxTQUFTQyxZQUFXLEtBQUs7QUFDeEMsc0JBQWdCLE1BQU1BLFdBQVU7QUFFaEMsV0FBSyxPQUFPO0FBQ1osVUFBSUMsU0FBUSxLQUFLLE1BQU0sTUFBVyxHQUFHO0FBRXJDLFdBQUssT0FBTyxNQUFNLHVCQUF1QixDQUFJLEVBQUU7QUFBQSxRQUFPLFVBQVU7QUFBQSxRQUFlLFVBQVU7QUFBQSxRQUFlLENBQUMsQ0FBSTtBQUFBO0FBQUEsUUFDN0csTUFBTSxjQUFjQSxRQUFPLENBQUM7QUFBQTtBQUFBLE1BQzVCO0FBQUEsSUFDRjtBQVFBLFFBQUksWUFBWSxTQUFTQyxXQUFVLE1BQU07QUFDdkMsc0JBQWdCLE1BQU1BLFVBQVM7QUFFL0IsV0FBSyxPQUFPO0FBQ1osVUFBSSxZQUFZLE1BQU0sY0FBYyxJQUFJO0FBRXhDLFdBQUssT0FBTyxNQUFNLHVCQUF1QixDQUFJLEVBQUU7QUFBQSxRQUFPLFVBQVU7QUFBQSxRQUFlLFVBQVU7QUFBQSxRQUFjLE1BQU0sdUJBQXVCLFVBQVUsTUFBTTtBQUFBO0FBQUEsUUFDcEo7QUFBQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBT0EsUUFBSSxxQkFBcUIsU0FBU0Msb0JBQW1CLFdBQVcsYUFBYSxtQkFBbUIsbUJBQW1CO0FBQ2pILHNCQUFnQixNQUFNQSxtQkFBa0I7QUFFeEMsV0FBSyxPQUFPO0FBRVosV0FBSyxPQUFPLE1BQU0sdUJBQXVCLENBQUksRUFBRTtBQUFBLFFBQU8sVUFBVTtBQUFBLFFBQWUsVUFBVTtBQUFBLFFBQXdCLENBQUMsQ0FBSTtBQUFBO0FBQUEsUUFDdEgsTUFBTSxjQUFjLFdBQVcsQ0FBQztBQUFBO0FBQUEsUUFDaEMsTUFBTSxjQUFjLEtBQUssS0FBSyxXQUFXLEdBQUcsQ0FBQztBQUFBO0FBQUEsUUFDN0MsTUFBTSxjQUFjLHFCQUFxQixJQUFJLENBQUM7QUFBQTtBQUFBLFFBQzlDLE1BQU0sY0FBYyxxQkFBcUIsR0FBRyxDQUFDO0FBQUE7QUFBQSxNQUM3QztBQUFBLElBQ0Y7QUFRQSxRQUFJLGlCQUFpQixTQUFTQyxnQkFBZSxNQUFNO0FBQ2pELHNCQUFnQixNQUFNQSxlQUFjO0FBRXBDLFdBQUssT0FBTztBQUNaLFVBQUksWUFBWSxNQUFNLGNBQWMsSUFBSTtBQUV4QyxXQUFLLE9BQU8sTUFBTSx1QkFBdUIsQ0FBSSxFQUFFO0FBQUEsUUFBTyxVQUFVO0FBQUEsUUFBZSxVQUFVO0FBQUEsUUFBb0IsTUFBTSx1QkFBdUIsVUFBVSxNQUFNO0FBQUE7QUFBQSxRQUMxSjtBQUFBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFRQSxRQUFJLFFBQXFCLDRCQUFZO0FBQ25DLGVBQVNDLFNBQVE7QUFDZix3QkFBZ0IsTUFBTUEsTUFBSztBQUUzQixhQUFLLE9BQU8sVUFBVTtBQUN0QixhQUFLLE9BQU8sQ0FBQztBQUNiLGFBQUssT0FBTyxDQUFDO0FBQ2IsYUFBSyxTQUFTLENBQUM7QUFDZixhQUFLLHFCQUFxQixDQUFDO0FBRzNCLGFBQUssY0FBYztBQUFBLE1BQ3JCO0FBV0EsbUJBQWFBLFFBQU8sQ0FBQztBQUFBLFFBQ25CLEtBQUs7QUFBQSxRQUNMLE9BQU8sU0FBUyxTQUFTLFFBQVEsYUFBYTtBQUM1QyxjQUFJLFFBQVE7QUFFWixnQkFBTSxRQUFRLE1BQU0sRUFBRSxRQUFRLFNBQVUsT0FBTyxHQUFHO0FBQ2hELGdCQUFJLGlCQUFpQixXQUFXO0FBRTlCLGtCQUFJLE9BQU8sZ0JBQWdCLFlBQVk7QUFDckMsb0JBQUksYUFBYSxZQUFZLEdBQUcsS0FBSztBQUVyQyxvQkFBSSxRQUFRLFVBQVUsTUFBTSxVQUFVO0FBQ3BDLDJCQUFTLEtBQUssWUFBWTtBQUN4Qiw0QkFBUSxHQUFHO0FBQUEsc0JBQ1QsS0FBSztBQUNILDhCQUFNLFVBQVUsV0FBVyxDQUFDO0FBQzVCO0FBQUEsc0JBRUYsS0FBSztBQUNILDhCQUFNLFdBQVcsV0FBVyxDQUFDO0FBQzdCO0FBQUEsc0JBRUYsS0FBSztBQUNILDhCQUFNLGFBQWEsV0FBVyxDQUFDO0FBQy9CO0FBQUEsc0JBRUYsS0FBSztBQUNILDhCQUFNLFdBQVcsTUFBTSxnQkFBZ0IsV0FBVyxDQUFDLENBQUM7QUFDcEQ7QUFBQSxvQkFDSjtBQUFBLGtCQUNGO0FBQUEsZ0JBQ0Y7QUFBQSxjQUNGO0FBR0Esa0JBQUksTUFBTSxjQUFjLE1BQU07QUFDNUIsc0JBQU0sbUJBQW1CLEtBQUssS0FBSztBQUFBLGNBQ3JDLE9BQU87QUFFTCxzQkFBTSxVQUFVLEVBQUUsT0FBTyxRQUFRLFNBQVUsR0FBRztBQUM1Qyx5QkFBTyxNQUFNLE9BQU8sS0FBSyxDQUFDO0FBQUEsZ0JBQzVCLENBQUM7QUFBQSxjQUNIO0FBQUEsWUFDRixPQUFPO0FBQ0wsb0JBQU0sT0FBTyxLQUFLLEtBQUs7QUFBQSxZQUN6QjtBQUFBLFVBQ0YsQ0FBQztBQUNELGlCQUFPO0FBQUEsUUFDVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFNRixHQUFHO0FBQUEsUUFDRCxLQUFLO0FBQUEsUUFDTCxPQUFPLFNBQVMsWUFBWTtBQUMxQixjQUFJLFNBQVM7QUFJYixlQUFLLG1CQUFtQixXQUFXLEVBQUUsU0FBUyxJQUFJLGNBQWMsQ0FBQztBQUVqRSxlQUFLLE9BQU8sQ0FBQztBQUNiLGVBQUssT0FBTyxDQUFDO0FBQ2IsZUFBSyxjQUFjO0FBQ25CLGNBQUksZ0JBQWdCO0FBQ3BCLGVBQUssT0FBTyxRQUFRLFNBQVUsT0FBTyxZQUFZO0FBRS9DLGdCQUFJLGlCQUFpQixlQUFlLGlCQUFpQixjQUFjO0FBQ2pFLGtCQUFJLFFBQVEsTUFBTSxVQUFVLFFBQVEsYUFBYTtBQUNqRCw4QkFBZ0IsTUFBTSxpQkFBaUIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RSxxQkFBTyxPQUFPLE9BQU8sS0FBSyxPQUFPLE1BQU0sSUFBSTtBQUMzQyxxQkFBTyxjQUFjLE1BQU0sa0JBQWtCLE1BQU0sSUFBSTtBQUFBLFlBQ3pELE9BQU87QUFDTCxxQkFBTyxPQUFPLE9BQU8sS0FBSyxPQUFPLE1BQU0sSUFBSTtBQUFBLFlBQzdDO0FBQUEsVUFDRixDQUFDO0FBQ0QsZUFBSyx3QkFBd0I7QUFDN0IsZUFBSyxPQUFPLE1BQU0sY0FBYyxLQUFLLEtBQUssUUFBUSxDQUFDO0FBRW5ELGlCQUFPO0FBQUEsUUFDVDtBQUFBLE1BQ0YsR0FBRztBQUFBLFFBQ0QsS0FBSztBQUFBLFFBQ0wsT0FBTyxTQUFTLDBCQUEwQjtBQUN4QyxjQUFJLFNBQVM7QUFFYixjQUFJLENBQUMsS0FBSyxtQkFBbUIsT0FBUTtBQUVyQyxlQUFLLG1CQUFtQixLQUFLLFNBQVUsR0FBRyxHQUFHO0FBQzNDLG1CQUFPLEVBQUUsWUFBWSxFQUFFO0FBQUEsVUFDekIsQ0FBQztBQUlELGVBQUssbUJBQW1CLFFBQVEsU0FBVSxXQUFXO0FBSW5ELHNCQUFVLFVBQVUsRUFBRSxPQUFPLFFBQVEsU0FBVSxHQUFHO0FBQ2hELHFCQUFPLEVBQUUsVUFBVSxNQUFNO0FBQUEsWUFDM0IsQ0FBQztBQUVELHNCQUFVLE9BQU8sUUFBUSxTQUFVLE9BQU87QUFDeEMscUJBQU8sT0FBTyxpQkFBaUIsS0FBSztBQUFBLFlBQ3RDLENBQUM7QUFBQSxVQUNILENBQUM7QUFFRCxlQUFLLHFCQUFxQixDQUFDO0FBQzNCLGVBQUssVUFBVTtBQUFBLFFBQ2pCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BT0YsR0FBRztBQUFBLFFBQ0QsS0FBSztBQUFBLFFBQ0wsT0FBTyxTQUFTLFdBQVcsT0FBTztBQUNoQyxjQUFJLFNBQVM7QUFHYixlQUFLLFVBQVU7QUFFZixnQkFBTSxVQUFVLEVBQUUsT0FBTyxRQUFRLFNBQVUsT0FBTztBQUNoRCxtQkFBTyxPQUFPLGlCQUFpQixLQUFLO0FBQUEsVUFDdEMsQ0FBQztBQUFBLFFBQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFPRixHQUFHO0FBQUEsUUFDRCxLQUFLO0FBQUEsUUFDTCxPQUFPLFNBQVMsaUJBQWlCLE9BQU87QUFFdEMsY0FBSSxpQkFBaUI7QUFFckIsbUJBQVMsSUFBSSxHQUFHLElBQUksS0FBSyxPQUFPLFFBQVEsS0FBSztBQUMzQyxnQkFBSSxLQUFLLE9BQU8sQ0FBQyxFQUFFLE9BQU8sTUFBTSxLQUFNO0FBQ3RDLDZCQUFpQjtBQUFBLFVBQ25CO0FBRUEsY0FBSSxvQkFBb0IsaUJBQWlCO0FBRXpDLGdCQUFNLFFBQVEsTUFBTSxPQUFPLEtBQUssT0FBTyxjQUFjLEVBQUU7QUFFdkQsZUFBSyxPQUFPLE9BQU8sbUJBQW1CLEdBQUcsS0FBSztBQUU5QyxtQkFBUyxJQUFJLG9CQUFvQixHQUFHLElBQUksS0FBSyxPQUFPLFFBQVEsS0FBSztBQUcvRCxpQkFBSyxPQUFPLENBQUMsRUFBRSxRQUFRLEtBQUssT0FBTyxDQUFDLEVBQUUsT0FBTyxLQUFLLE9BQU8sSUFBSSxDQUFDLEVBQUU7QUFBQSxVQUNsRTtBQUFBLFFBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFPRixHQUFHO0FBQUEsUUFDRCxLQUFLO0FBQUEsUUFDTCxPQUFPLFNBQVMsbUJBQW1CLFdBQVc7QUFDNUMsY0FBSSxTQUFTO0FBRWIsZUFBSyxPQUFPLFFBQVEsU0FBVSxPQUFPLE9BQU87QUFDMUMsZ0JBQUksTUFBTSxTQUFTLFdBQVc7QUFDNUIscUJBQU8sT0FBTyxPQUFPLE9BQU8sQ0FBQztBQUFBLFlBQy9CO0FBQUEsVUFDRixDQUFDO0FBQ0QsaUJBQU87QUFBQSxRQUNUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BT0YsR0FBRztBQUFBLFFBQ0QsS0FBSztBQUFBLFFBQ0wsT0FBTyxTQUFTLFNBQVMsS0FBSztBQUM1QixpQkFBTyxLQUFLLFNBQVMsSUFBSSxXQUFXLEdBQUcsQ0FBQztBQUFBLFFBQzFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVUYsR0FBRztBQUFBLFFBQ0QsS0FBSztBQUFBLFFBQ0wsT0FBTyxTQUFTLGlCQUFpQixXQUFXLGFBQWEsbUJBQW1CLG1CQUFtQjtBQUM3RixpQkFBTyxLQUFLLFNBQVMsSUFBSSxtQkFBbUIsV0FBVyxhQUFhLG1CQUFtQixpQkFBaUIsQ0FBQztBQUFBLFFBQzNHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFRRixHQUFHO0FBQUEsUUFDRCxLQUFLO0FBQUEsUUFDTCxPQUFPLFNBQVMsZ0JBQWdCLElBQUksSUFBSTtBQUN0QyxpQkFBTyxLQUFLLFNBQVMsSUFBSSxrQkFBa0IsSUFBSSxFQUFFLENBQUM7QUFBQSxRQUNwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU9GLEdBQUc7QUFBQSxRQUNELEtBQUs7QUFBQSxRQUNMLE9BQU8sU0FBUyxRQUFRLE1BQU07QUFDNUIsaUJBQU8sS0FBSyxTQUFTLElBQUksVUFBVSxJQUFJLENBQUM7QUFBQSxRQUMxQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU9GLEdBQUc7QUFBQSxRQUNELEtBQUs7QUFBQSxRQUNMLE9BQU8sU0FBUyxhQUFhLE1BQU07QUFDakMsaUJBQU8sS0FBSyxTQUFTLElBQUksZUFBZSxJQUFJLENBQUM7QUFBQSxRQUMvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU9GLEdBQUc7QUFBQSxRQUNELEtBQUs7QUFBQSxRQUNMLE9BQU8sU0FBUyxhQUFhLE1BQU07QUFDakMsaUJBQU8sS0FBSyxTQUFTLElBQUksZUFBZSxJQUFJLENBQUM7QUFBQSxRQUMvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU9GLEdBQUc7QUFBQSxRQUNELEtBQUs7QUFBQSxRQUNMLE9BQU8sU0FBUyxrQkFBa0IsTUFBTTtBQUN0QyxpQkFBTyxLQUFLLFNBQVMsSUFBSSxvQkFBb0IsSUFBSSxDQUFDO0FBQUEsUUFDcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFPRixHQUFHO0FBQUEsUUFDRCxLQUFLO0FBQUEsUUFDTCxPQUFPLFNBQVMsVUFBVSxNQUFNO0FBQzlCLGlCQUFPLEtBQUssU0FBUyxJQUFJLFlBQVksSUFBSSxDQUFDO0FBQUEsUUFDNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFPRixHQUFHO0FBQUEsUUFDRCxLQUFLO0FBQUEsUUFDTCxPQUFPLFNBQVMsWUFBWSxNQUFNO0FBQ2hDLGlCQUFPLEtBQUssU0FBUyxJQUFJLGNBQWMsSUFBSSxDQUFDO0FBQUEsUUFDOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFPRixHQUFHO0FBQUEsUUFDRCxLQUFLO0FBQUEsUUFDTCxPQUFPLFNBQVMsU0FBUyxNQUFNO0FBQzdCLGlCQUFPLEtBQUssU0FBUyxJQUFJLFdBQVcsSUFBSSxDQUFDO0FBQUEsUUFDM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTUYsR0FBRztBQUFBLFFBQ0QsS0FBSztBQUFBLFFBQ0wsT0FBTyxTQUFTLGFBQWE7QUFDM0IsY0FBSSxRQUFRLElBQUksWUFBWTtBQUFBLFlBQzFCLE1BQU0sQ0FBQyxHQUFNLEtBQU0sS0FBTSxDQUFJO0FBQUEsVUFDL0IsQ0FBQztBQUNELGlCQUFPLEtBQUssU0FBUyxLQUFLO0FBQUEsUUFDNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFPRixHQUFHO0FBQUEsUUFDRCxLQUFLO0FBQUEsUUFDTCxPQUFPLFNBQVMsYUFBYSxNQUFNO0FBQ2pDLGlCQUFPLEtBQUssU0FBUyxJQUFJLGVBQWU7QUFBQSxZQUN0QztBQUFBLFVBQ0YsQ0FBQyxDQUFDO0FBQUEsUUFDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUUYsR0FBRztBQUFBLFFBQ0QsS0FBSztBQUFBLFFBQ0wsT0FBTyxTQUFTLGlCQUFpQixRQUFRLE9BQU87QUFDOUMsaUJBQU8sS0FBSyxTQUFTLElBQUksc0JBQXNCO0FBQUEsWUFDN0Msa0JBQWtCO0FBQUEsWUFDbEIsaUJBQWlCO0FBQUEsVUFDbkIsQ0FBQyxDQUFDO0FBQUEsUUFDSjtBQUFBLE1BQ0YsQ0FBQyxDQUFDO0FBRUYsYUFBT0E7QUFBQSxJQUNULEdBQUU7QUFFRixRQUFJLFVBQXVCLDRCQUFZO0FBQ3JDLGVBQVNDLFdBQVU7QUFDakIsd0JBQWdCLE1BQU1BLFFBQU87QUFBQSxNQUMvQjtBQUVBLG1CQUFhQSxVQUFTLENBQUM7QUFBQSxRQUNyQixLQUFLO0FBQUEsUUFDTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFLQSxTQUFTLGVBQWUsT0FBTztBQUM3QixnQkFBSSxRQUFRO0FBRVosZ0JBQUksVUFBVSxVQUFVLFNBQVMsS0FBSyxVQUFVLENBQUMsTUFBTSxTQUFZLFVBQVUsQ0FBQyxJQUFJO0FBQUEsY0FDaEYsd0JBQXdCO0FBQUEsWUFDMUI7QUFDQSxnQkFBSSxRQUFRLElBQUksTUFBTTtBQUN0QixnQkFBSSxPQUFPLENBQUM7QUFDWixrQkFBTSxVQUFVLFFBQVEsU0FBVSxVQUFVO0FBQzFDLGtCQUFJLFNBQVMsYUFBYSxLQUFLO0FBQzdCLHNCQUFNLFNBQVMsSUFBSSxVQUFVO0FBQUEsa0JBQzNCLE9BQU8sU0FBUyxLQUFLLElBQUksU0FBVSxPQUFPLE9BQU87QUFDL0MsMkJBQU8sTUFBTSxhQUFhLE9BQU8sT0FBTyxVQUFVLFFBQVEsc0JBQXNCO0FBQUEsa0JBQ2xGLENBQUM7QUFBQSxrQkFDRCxVQUFVLE1BQU0sZ0JBQWdCLFFBQVE7QUFBQSxrQkFDeEM7QUFBQSxnQkFDRixDQUFDLENBQUM7QUFFRix1QkFBTyxDQUFDO0FBQUEsY0FDVixXQUFXLFNBQVMsYUFBYSxLQUFLO0FBR3BDLHFCQUFLLEtBQUssTUFBTSxnQkFBZ0IsUUFBUSxDQUFDO0FBQ3pDO0FBQUEsY0FDRjtBQUFBLFlBQ0YsQ0FBQztBQUdELGdCQUFJLEtBQUssU0FBUyxHQUFHO0FBQ25CLG9CQUFNLFNBQVMsSUFBSSxVQUFVO0FBQUEsZ0JBQzNCLE9BQU87QUFBQSxnQkFDUCxVQUFVO0FBQUEsZ0JBQ1Y7QUFBQSxnQkFDQSxVQUFVO0FBQUEsY0FDWixDQUFDLENBQUM7QUFBQSxZQUNKO0FBRUEsbUJBQU87QUFBQSxVQUNUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BU0YsR0FBRztBQUFBLFFBQ0QsS0FBSztBQUFBLFFBQ0wsT0FBTyxTQUFTLGFBQWEsT0FBTyxPQUFPVCxPQUFNO0FBQy9DLGNBQUkseUJBQXlCLFVBQVUsU0FBUyxLQUFLLFVBQVUsQ0FBQyxNQUFNLFNBQVksVUFBVSxDQUFDLElBQUk7QUFFakcsY0FBSSxhQUFhLE1BQU0sTUFBTSxHQUFHO0FBR2hDLGNBQUksY0FBYyxXQUFXLENBQUMsRUFBRSxVQUFVLENBQUMsRUFBRSxRQUFRLEtBQUssRUFBRTtBQUU1RCxjQUFJLHdCQUF3QjtBQUMxQixnQkFBSTtBQUVKLGFBQUMsdUJBQXVCQSxNQUFLLGVBQWUsT0FBTyxRQUFRLHlCQUF5QixTQUFTLFNBQVMscUJBQXFCLFFBQVEsU0FBVSxZQUFZO0FBQ3ZKLGtCQUFJLFdBQVcsVUFBVSxPQUFPO0FBQzlCLG9CQUFJLFdBQVcsU0FBUyxLQUFLO0FBQzNCLGdDQUFjO0FBQUEsZ0JBQ2hCLE9BQU87QUFDTCxpQ0FBZSxXQUFXO0FBQUEsZ0JBQzVCO0FBQUEsY0FDRjtBQUFBLFlBQ0YsQ0FBQztBQUFBLFVBQ0g7QUFFQSxpQkFBTyxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksY0FBYyxXQUFXLENBQUM7QUFBQSxRQUN0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFNRixHQUFHO0FBQUEsUUFDRCxLQUFLO0FBQUEsUUFDTCxPQUFPLFNBQVMsZ0JBQWdCQSxPQUFNO0FBQ3BDLGlCQUFPLElBQUksT0FBT0EsTUFBSyxJQUFJLElBQUksS0FBSyxvQkFBb0JBLE1BQUssUUFBUSxLQUFLQSxNQUFLLFNBQVMsTUFBTUEsTUFBSyxPQUFPLFlBQVk7QUFBQSxRQUN4SDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU9GLEdBQUc7QUFBQSxRQUNELEtBQUs7QUFBQSxRQUNMLE9BQU8sU0FBUyxvQkFBb0IsVUFBVTtBQUM1QyxrQkFBUSxVQUFVO0FBQUEsWUFDaEIsS0FBSztBQUNILHFCQUFPO0FBQUEsWUFFVCxLQUFLO0FBQ0gscUJBQU87QUFBQSxZQUVULEtBQUs7QUFDSCxxQkFBTztBQUFBLFlBRVQ7QUFDRSxxQkFBTztBQUFBLFVBQ1g7QUFBQSxRQUNGO0FBQUEsTUFDRixDQUFDLENBQUM7QUFFRixhQUFPUztBQUFBLElBQ1QsR0FBRTtBQVFGLFFBQUksY0FBYyxTQUFTQyxhQUFZLGdCQUFnQjtBQUNyRCxzQkFBZ0IsTUFBTUEsWUFBVztBQUVqQyxXQUFLLE9BQU8sVUFBVTtBQUN0QixVQUFJLFlBQVksaUJBQWlCLElBQUksVUFBVSx1QkFBdUIsVUFBVTtBQUNoRixXQUFLLE9BQU8sVUFBVTtBQUFBLFFBQU8sTUFBTSxjQUFjLGdCQUFnQixDQUFDO0FBQUE7QUFBQSxRQUNsRSxVQUFVO0FBQUEsTUFBcUI7QUFDL0IsV0FBSyxPQUFPLENBQUMsR0FBRyxHQUFHLEdBQUcsS0FBSyxLQUFLLE1BQU07QUFBQSxJQUN4QztBQVFBLFFBQUksU0FBc0IsNEJBQVk7QUFDcEMsZUFBU0MsUUFBTyxRQUFRO0FBQ3RCLFlBQUksUUFBUTtBQUVaLHdCQUFnQixNQUFNQSxPQUFNO0FBRzVCLGlCQUFTLE1BQU0sUUFBUSxNQUFNO0FBQzdCLGFBQUssT0FBTyxDQUFDO0FBQ2IsYUFBSyxLQUFLLEtBQUssSUFBSSxZQUFZLE9BQU8sTUFBTSxDQUFDO0FBRTdDLGVBQU8sUUFBUSxTQUFVLE9BQU8sR0FBRztBQUNqQyxnQkFBTSxLQUFLLEtBQUssTUFBTSxVQUFVLENBQUM7QUFBQSxRQUNuQyxDQUFDO0FBQUEsTUFDSDtBQU9BLG1CQUFhQSxTQUFRLENBQUM7QUFBQSxRQUNwQixLQUFLO0FBQUEsUUFDTCxPQUFPLFNBQVMsWUFBWTtBQUMxQixjQUFJQyxTQUFRLENBQUM7QUFFYixlQUFLLEtBQUssUUFBUSxTQUFVLEdBQUc7QUFDN0IsbUJBQU9BLFNBQVFBLE9BQU0sT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSTtBQUFBLFVBQ3BELENBQUM7QUFDRCxpQkFBTyxJQUFJLFdBQVdBLE1BQUs7QUFBQSxRQUM3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFNRixHQUFHO0FBQUEsUUFDRCxLQUFLO0FBQUEsUUFDTCxPQUFPLFNBQVMsU0FBUztBQUN2QixjQUFJLE9BQU8sU0FBUyxXQUFZLFFBQU8sS0FBSyxPQUFPLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxDQUFDLENBQUM7QUFDN0YsaUJBQU8sT0FBTyxLQUFLLEtBQUssVUFBVSxDQUFDLEVBQUUsU0FBUyxRQUFRO0FBQUEsUUFDeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTUYsR0FBRztBQUFBLFFBQ0QsS0FBSztBQUFBLFFBQ0wsT0FBTyxTQUFTLFVBQVU7QUFDeEIsaUJBQU8sNEJBQTRCLEtBQUssT0FBTztBQUFBLFFBQ2pEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU1GLEdBQUc7QUFBQSxRQUNELEtBQUs7QUFBQSxRQUNMLE9BQU8sU0FBUyxTQUFTO0FBQ3ZCLGlCQUFPLFFBQVEsT0FBTyxNQUFNLElBQUksT0FBTyxLQUFLLFVBQVUsQ0FBQyxDQUFDO0FBQUEsUUFDMUQ7QUFBQSxNQUNGLENBQUMsQ0FBQztBQUVGLGFBQU9EO0FBQUEsSUFDVCxHQUFFO0FBRUYsUUFBSSxPQUFPO0FBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFFQSxXQUFPLFVBQVU7QUFBQTtBQUFBOzs7QUMza0RqQjs7UUFBQSxFQUFBLE1BQVMsSUFBQTtBQUVULFFBQU9FLFVBQVAsTUFBNEI7TUFDMUIsY0FBYztBQUNaLGFBQUssT0FBTyxDQUFDO0FBQ2IsYUFBSyxRQUFRLENBQUM7QUFDZCxhQUFLLE9BQU87QUFDWixhQUFLLE1BQU07QUFDWCxhQUFLLE9BQU8sSUFBSSxLQUFLO0FBQ3JCLGFBQUssYUFBYSxvQkFBSSxJQUFJO0FBQzFCLGFBQUssYUFBYSxvQkFBSSxJQUFJO0FBQzFCLGFBQUssZ0JBQWdCLElBQUk7QUFDekIsYUFBSyxTQUFTO0FBQ2QsYUFBSyxVQUFVO01BQ2pCO01BRUEsWUFBWTtBQUNWLGNBQU0sbUJBQW1CLE9BQU8sZ0JBQWdCLE9BQU87QUFFdkQsYUFBSyxlQUFlLElBQUksaUJBQWlCO0FBQ3pDLGFBQUssY0FBYyxLQUFLLGFBQWE7QUFDckMsYUFBSyxTQUFTLElBQUksbUJBQW1CO0FBQ3JDLGFBQUssWUFBWSxLQUFLLE9BQU8sY0FBYyxLQUFLLFlBQVk7QUFDNUQsYUFBSyxhQUFhLEtBQUssYUFBYSxXQUFXO0FBQy9DLGFBQUssT0FBTyxLQUFLLE9BQU8sbUJBQW1CLEtBQUssWUFBWTtBQUM1RCxhQUFLLGFBQWEsS0FBSyxhQUFhLFdBQVc7QUFDL0MsYUFBSyxRQUFRLEtBQUssYUFBYSxZQUFZLENBQUM7QUFDNUMsYUFBSyxnQkFBZ0IsS0FBSyxhQUFhLFdBQVc7QUFDbEQsYUFBSyxXQUFXLEtBQUssYUFBYSxXQUFXO0FBRTdDLGFBQUssV0FBVyxLQUFLLFFBQVE7QUFDN0IsYUFBSyxjQUFjLEtBQUssUUFBUTtBQUNoQyxhQUFLLFNBQVMsS0FBSyxRQUFRO0FBQzNCLGFBQUssV0FBVyxLQUFLLFFBQVE7QUFFN0IsYUFBSyxVQUFVLE9BQU8sUUFBUSxLQUFLLFVBQVU7QUFDN0MsYUFBSyxLQUFLLE9BQU8sUUFBUSxLQUFLLFVBQVU7QUFFeEMsYUFBSyxXQUFXLFFBQVEsS0FBSyxLQUFLO0FBQ2xDLGFBQUssTUFBTSxRQUFRLEtBQUssYUFBYTtBQUNyQyxhQUFLLGNBQWMsUUFBUSxLQUFLLEtBQUs7QUFDckMsYUFBSyxNQUFNLFFBQVEsS0FBSyxRQUFRO0FBQ2hDLGFBQUssU0FBUyxRQUFRLEtBQUssVUFBVTtBQUVyQyxhQUFLLFdBQVcsUUFBUSxLQUFLLFdBQVc7QUFDeEMsYUFBSyxnQkFBZ0I7TUFDdkI7TUFFQSxNQUFNLE9BQU87QUFDWCxlQUFPLE1BQU0sU0FBUyxLQUFLLElBQUksS0FBSztNQUN0QztNQUVBLFFBQVEsTUFBTTtBQUNaLGFBQUssT0FBTyxRQUFRLEtBQUs7QUFFekIsWUFBSSxRQUFRO0FBQ1osYUFBSyxLQUFLLFFBQVEsQ0FBQSxVQUFTO0FBQ3pCLGNBQUksTUFBTSxDQUFDLEVBQUUsU0FBUyxNQUFPLFNBQVEsTUFBTSxDQUFDLEVBQUU7QUFFOUMsZ0JBQU0sT0FBTyxNQUFNLENBQUMsS0FBSyxNQUNyQixLQUFLLE9BQU8sT0FBTyxTQUFTLE1BQU0sQ0FBQyxJQUFJLEdBQUksSUFDM0MsS0FBSyxPQUFPLE9BQU8sZUFBZSxNQUFNLENBQUMsQ0FBQztBQUU5QyxlQUFLLGdCQUFnQixJQUFJO1FBQzNCLENBQUM7QUFFRCxjQUFNLFdBQVcsTUFBTSxnQkFBZ0IsSUFBSSxJQUFJO0FBQy9DLGNBQU0sV0FBVyxvQkFBSSxJQUFJO0FBRXpCLGlCQUFTLElBQUksR0FBRyxJQUFJLE9BQU8sS0FBSyxHQUFHO0FBQ2pDLGdCQUFNLE9BQU8sb0JBQUksSUFBSTtBQUVyQixlQUFLLEtBQUssUUFBUSxDQUFBLFVBQVM7QUFDekIsa0JBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUM7QUFDbkMscUJBQVMsSUFBSSxHQUFHO0FBQ2hCLGdCQUFJLENBQUMsS0FBSyxJQUFJLEdBQUcsRUFBRyxNQUFLLElBQUksS0FBSyxFQUFFLE9BQU8sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUM7QUFDMUQsa0JBQU0sT0FBTyxLQUFLLElBQUksR0FBRztBQUN6QixrQkFBTSxPQUFPLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO0FBRTdCLGdCQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQU07QUFDcEIsbUJBQUssTUFBTSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksS0FBTSxLQUFLLENBQUMsQ0FBQztZQUMzQyxXQUFXLE1BQU0sUUFBUSxLQUFLLENBQUMsR0FBRztBQUNoQyxtQkFBSyxFQUFFLFFBQVEsQ0FBQSxTQUFRO0FBQ3JCLHFCQUFLLE1BQU0sS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssTUFBTSxJQUFJLEdBQUcsVUFBVSxLQUFLLENBQUMsQ0FBQztjQUNoRSxDQUFDO1lBQ0gsV0FBVyxLQUFLLEdBQUc7QUFDakIsbUJBQUssTUFBTSxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxNQUFNLEtBQUssQ0FBQyxHQUFHLFVBQVUsS0FBSyxDQUFDLENBQUM7WUFDbEU7VUFDRixDQUFDO0FBRUQsZUFBSyxNQUFNLENBQUMsSUFBSTtRQUNsQjtBQUVBLGFBQUssV0FBVyxRQUFRLENBQUMsT0FBTyxRQUFRO0FBQ3RDLGNBQUksQ0FBQyxTQUFTLElBQUksR0FBRyxHQUFHO0FBQ3RCLGdCQUFJO0FBQ0Ysb0JBQU0sSUFBSSxXQUFXO0FBQ3JCLG9CQUFNLFdBQVcsV0FBVztBQUM1QixvQkFBTSxVQUFVLFdBQVc7WUFDN0IsU0FBUyxHQUFHO1lBRVo7QUFDQSxpQkFBSyxXQUFXLE9BQU8sR0FBRztVQUM1QjtRQUNGLENBQUM7QUFFRCxpQkFBUyxRQUFRLENBQUEsUUFBTyxLQUFLLGNBQWMsR0FBRyxDQUFDO01BQ2pEO01BRUEsY0FBYztBQUNaLGVBQU8sS0FBSyxhQUFhO01BQzNCO01BRUEsZ0JBQWdCLFVBQVU7QUFDeEIsYUFBSyxjQUFjLEtBQUssT0FBTyxLQUFLLEtBQUssS0FBSyxNQUFNLFFBQVE7TUFDOUQ7TUFFQSxrQkFBa0I7QUFDaEIsYUFBSyxhQUFhO01BQ3BCO01BRUEsZUFBZSxNQUFNQyxRQUFPLFFBQVFDLFlBQVc7QUFDN0MsY0FBTSxVQUFVRCxXQUFVLEtBQUssT0FDMUIsV0FBVyxLQUFLLFFBQ2hCQyxlQUFjLEtBQUs7QUFFeEIsWUFBSSxRQUFTLE1BQUssYUFBYTtBQUUvQixhQUFLLE1BQU0sU0FBUztBQUNwQixhQUFLLE1BQU1ELFVBQVM7QUFDcEIsYUFBSyxPQUFPLFVBQVU7QUFDdEIsYUFBSyxTQUFTQyxjQUFhO0FBQzNCLGFBQUssZ0JBQWdCO0FBQ3JCLGFBQUssUUFBUSxJQUFJO0FBQ2pCLGFBQUssT0FBTyxJQUFJLEtBQUs7QUFFckIsZUFBTztNQUNUO01BRUEsY0FBYyxPQUFPLEtBQUssU0FBUyxVQUFVO0FBQzNDLGFBQUssY0FBYztBQUVuQixjQUFNLG9CQUFxQixJQUFJLEtBQU07QUFFckMsYUFBSyxZQUFZLFdBQVcsTUFBTSxTQUFTLFdBQVc7QUFDdEQsYUFBSyxXQUFXLEtBQUssWUFBWSxHQUFHLE1BQU0sS0FBSyxTQUFTLEdBQUcsR0FBRztBQUU5RCxZQUFJLGVBQWUsS0FBSyxZQUFZLElBQUksVUFBVTtBQUNsRCxhQUFLLGlCQUFpQixZQUFZLE1BQU07QUFDdEMsY0FBSSxLQUFLLFlBQVksSUFBSSxlQUFlLFVBQVUsbUJBQW1CO0FBQ25FLGlCQUFLLGFBQWE7QUFDbEIsZ0JBQUksS0FBSyxhQUFhLE1BQU0sUUFBUTtBQUNsQyxtQkFBSyxZQUFZO1lBQ25CO0FBRUEsaUJBQUssV0FBVyxjQUFjLE1BQU0sS0FBSyxTQUFTLEdBQUcsR0FBRztBQUN4RCw0QkFBZ0IsVUFBVTtVQUM1QjtRQUNGLEdBQUcsRUFBRTtNQUNQO01BRUEsZUFBZTtBQUNiLGFBQUssY0FBYztBQUNuQixzQkFBYyxLQUFLLGNBQWM7QUFDakMsYUFBSyxZQUFZO01BQ25CO01BRUEsY0FBYyxLQUFLO0FBQ2pCLFlBQUksQ0FBQyxLQUFLLFdBQVcsSUFBSSxHQUFHLEdBQUc7QUFDN0IsZUFBSyxXQUFXLElBQUksS0FBSztZQUN2QixPQUFPO1lBQ1AsTUFBTTtZQUNOLFFBQVE7WUFDUixZQUFZO1lBQ1osV0FBVztVQUNiLENBQUM7UUFDSDtBQUNBLGVBQU8sS0FBSyxXQUFXLElBQUksR0FBRztNQUNoQztNQUVBLGdCQUFnQixLQUFLO0FBQ25CLGNBQU0sUUFBUSxLQUFLLGNBQWMsR0FBRztBQUNwQyxjQUFNLFFBQVEsS0FBSyxjQUFjLEdBQUc7QUFDcEMsY0FBTSxRQUFRO0FBQ2QsY0FBTSxJQUFJLEtBQUssUUFBUSxNQUFNLFFBQVEsSUFBSSxNQUFNO0FBQy9DLGNBQU0sV0FBVyxLQUFLLFFBQVEsTUFBTTtBQUNwQyxjQUFNLFVBQVUsS0FBSyxRQUFRLE1BQU07TUFDckM7TUFFQSxjQUFjLEtBQUs7QUFDakIsWUFBSSxLQUFLLFdBQVcsSUFBSSxHQUFHLEdBQUc7QUFDNUIsaUJBQU8sS0FBSyxXQUFXLElBQUksR0FBRztRQUNoQztBQUVBLGNBQU0sTUFBTSxLQUFLLGFBQWEsV0FBVztBQUN6QyxjQUFNLGFBQWEsS0FBSyxhQUFhLFdBQVc7QUFDaEQsY0FBTSxZQUFZLEtBQUssYUFBYSxXQUFXO0FBRS9DLFlBQUksS0FBSyxRQUFRO0FBQ2pCLG1CQUFXLEtBQUssUUFBUTtBQUN4QixrQkFBVSxLQUFLLFFBQVE7QUFFdkIsWUFBSSxRQUFRLEtBQUssVUFBVSxLQUFLO0FBQ2hDLG1CQUFXLFFBQVEsS0FBSyxLQUFLLEtBQUs7QUFDbEMsa0JBQVUsUUFBUSxLQUFLLFVBQVU7QUFFakMsY0FBTSxRQUFRLEVBQUUsS0FBSyxZQUFZLFVBQVU7QUFDM0MsYUFBSyxXQUFXLElBQUksS0FBSyxLQUFLO0FBQzlCLGFBQUssZ0JBQWdCLEdBQUc7QUFDeEIsZUFBTztNQUNUO01BRUEsUUFBUSxLQUFLLE9BQU87QUFDbEIsY0FBTSxRQUFRLEtBQUssY0FBYyxHQUFHO0FBQ3BDLGNBQU0sUUFBUSxRQUFRLEtBQUs7QUFDM0IsYUFBSyxnQkFBZ0IsR0FBRztNQUMxQjtNQUVBLFFBQVEsS0FBSyxPQUFPO0FBQ2xCLGNBQU0sUUFBUSxLQUFLLGNBQWMsR0FBRztBQUNwQyxjQUFNLE9BQU8sUUFBUSxLQUFLO01BQzVCO01BRUEsVUFBVSxLQUFLLE9BQU87QUFDcEIsY0FBTSxRQUFRLEtBQUssY0FBYyxHQUFHO0FBQ3BDLGNBQU0sU0FBUyxLQUFLLElBQUksR0FBRyxLQUFLLElBQUksR0FBRyxLQUFLLENBQUM7QUFDN0MsYUFBSyxnQkFBZ0IsR0FBRztNQUMxQjtNQUVBLGNBQWMsS0FBSyxPQUFPO0FBQ3hCLGNBQU0sUUFBUSxLQUFLLGNBQWMsR0FBRztBQUNwQyxjQUFNLGFBQWEsS0FBSyxJQUFJLEdBQUcsS0FBSyxJQUFJLEdBQUcsS0FBSyxDQUFDO0FBQ2pELGFBQUssZ0JBQWdCLEdBQUc7TUFDMUI7TUFFQSxhQUFhLEtBQUssT0FBTztBQUN2QixjQUFNLFFBQVEsS0FBSyxjQUFjLEdBQUc7QUFDcEMsY0FBTSxZQUFZLEtBQUssSUFBSSxHQUFHLEtBQUssSUFBSSxHQUFHLEtBQUssQ0FBQztBQUNoRCxhQUFLLGdCQUFnQixHQUFHO01BQzFCO01BRUEsaUJBQWlCLE9BQU87QUFDdEIsYUFBSyxjQUFjLEtBQUssUUFBUSxLQUFLLElBQUksR0FBRyxLQUFLLElBQUksTUFBTSxLQUFLLENBQUM7TUFDbkU7TUFFQSxhQUFhLE9BQU87QUFDbEIsYUFBSyxnQkFBZ0IsS0FBSyxJQUFJLE9BQU8sS0FBSyxJQUFJLE1BQU0sS0FBSyxDQUFDO0FBQzFELGFBQUssZ0JBQWdCO01BQ3ZCO01BRUEsa0JBQWtCO0FBQ2hCLGNBQU0sUUFBUyxJQUFJLE1BQU8sS0FBSyxPQUFPO0FBQ3RDLGFBQUssTUFBTSxVQUFVLFFBQVEsUUFBUSxLQUFLO01BQzVDO01BRUEsZUFBZTtBQUNiLGVBQU8sQ0FBQyxHQUFHLEtBQUssV0FBVyxLQUFLLENBQUM7TUFDbkM7TUFFQSxjQUFjO0FBQ1osYUFBSyxPQUFPLFlBQVksS0FBSyxZQUFZO01BQzNDO01BRUEsZ0JBQWdCLE1BQU07QUFDcEIsWUFBSSxRQUFRLENBQUMsT0FBTyxLQUFLLFFBQVEsR0FBRztBQUNsQyxjQUFJLE9BQU8sS0FBSyxXQUFXLEdBQUcsRUFBRztBQUNqQyxpQkFBTyxLQUFLLFdBQVcsR0FBRyxJQUFJO0FBQzlCLGVBQUssT0FBTyxPQUFPLFVBQVUsS0FBSyxjQUFjLEtBQUssS0FBSyxLQUFLLFFBQVE7QUFDdkUsZUFBSyxPQUFPLE9BQU8sU0FBUyxNQUFNO0FBQ2hDLG9CQUFRLElBQUksVUFBVSxLQUFLLEtBQUs7QUFDaEMsbUJBQU8sT0FBTyxLQUFLLFdBQVcsR0FBRztVQUNuQyxDQUFDO1FBQ0g7TUFDRjtNQUVBLFNBQVMsTUFBTSxNQUFNLE9BQU87QUFDMUIsY0FBTSxDQUFDLFlBQVksS0FBSyxJQUFJO0FBQzVCLGNBQU0sT0FBTyxLQUFLLE9BQU8sT0FBTyxTQUFTLFVBQVU7QUFFbkQsWUFBSSxPQUFPLEtBQUssUUFBUSxHQUFHO0FBQ3pCLGdCQUFNLFFBQVEsT0FBTyxLQUFLLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtBQUM3QyxnQkFBTSxPQUFRLElBQUksTUFBTztBQUN6QixjQUFJLFFBQVEsRUFBRyxNQUFLLGtCQUFrQixPQUFPLEtBQUssUUFBUSxHQUFHLE1BQU0sT0FBTyxJQUFJLElBQUksTUFBTSxLQUFLO1FBQy9GLE9BQU87QUFDTCxlQUFLLGdCQUFnQixJQUFJO1FBQzNCO01BQ0Y7TUFFQSxrQkFBa0IsTUFBTSxNQUFNLE9BQU8sVUFBVSxNQUFNLE9BQU87QUFDMUQsYUFBSyxPQUFPLGVBQWUsS0FBSyxjQUFjLE1BQU0sS0FBSyxNQUFNLE1BQU0sT0FBTyxVQUFVLElBQUk7QUFDMUYsWUFBSSxNQUFNLFdBQVcsS0FBSyxRQUFRLEdBQUc7QUFDbkMsZUFBSyxPQUFPLGVBQWUsS0FBSyxjQUFjLE1BQU0sWUFBWSxNQUFNLE1BQU0sT0FBTyxVQUFVLElBQUk7UUFDbkc7QUFDQSxZQUFJLE1BQU0sVUFBVSxLQUFLLFFBQVEsR0FBRztBQUNsQyxlQUFLLE9BQU8sZUFBZSxLQUFLLGNBQWMsTUFBTSxXQUFXLE1BQU0sTUFBTSxPQUFPLFVBQVUsSUFBSTtRQUNsRztNQUNGO01BRUEsV0FBVyxNQUFNLE1BQU0sS0FBSztBQUMxQixZQUFJLENBQUMsS0FBTTtBQUNYLGNBQU0sSUFBSyxJQUFJLEtBQU07QUFDckIsY0FBTSxVQUFVLENBQUMsR0FBRyxLQUFLLFdBQVcsT0FBTyxDQUFDLEVBQUUsS0FBSyxDQUFBLFNBQVEsS0FBSyxJQUFJO0FBRXBFLGFBQUssUUFBUSxDQUFDLE1BQU0sUUFBUTtBQUMxQixnQkFBTSxRQUFRLEtBQUssY0FBYyxHQUFHO0FBQ3BDLGNBQUksTUFBTSxNQUFPO0FBQ2pCLGNBQUksV0FBVyxDQUFDLE1BQU0sS0FBTTtBQUU1QixnQkFBTSxRQUFRLEtBQUssY0FBYyxHQUFHO0FBQ3BDLGNBQUksVUFBVTtBQUVkLG1CQUFTLElBQUksR0FBRyxJQUFJLEtBQUssTUFBTSxRQUFRLEtBQUssR0FBRztBQUM3QyxpQkFBSyxTQUFTLE1BQU0sS0FBSyxNQUFNLENBQUMsR0FBRyxLQUFLO0FBQ3hDLHNCQUFVO1VBQ1o7QUFFQSxlQUFLLE1BQU0sUUFBUSxDQUFBQyxVQUFRO0FBQ3pCLGtCQUFNLENBQUMsWUFBWSxTQUFTLFVBQVUsS0FBSyxJQUFJQTtBQUMvQyxrQkFBTSxPQUFPLEtBQUssT0FBTyxPQUFPLGVBQWUsVUFBVTtBQUN6RCxnQkFBSSxPQUFPLEtBQUssUUFBUSxHQUFHO0FBQ3pCLG1CQUFLLGtCQUFrQixPQUFPLEtBQUssUUFBUSxHQUFHLE1BQU0sU0FBUyxXQUFXLEdBQUksSUFBSSxNQUFPLE9BQU8sS0FBSztBQUNuRyx3QkFBVTtZQUNaLE9BQU87QUFDTCxtQkFBSyxnQkFBZ0IsSUFBSTtZQUMzQjtVQUNGLENBQUM7QUFFRCxjQUFJLFdBQVcsT0FBTyxLQUFLLFdBQVcsWUFBWTtBQUNoRCxpQkFBSyxPQUFPLEtBQUssSUFBSTtVQUN2QjtRQUNGLENBQUM7TUFDSDtJQUNGOzs7Ozs7QUM1VUEsSUFBQUMsZ0JBQUE7QUFBQTtBQUFBLEtBQUMsTUFBSTtBQUFDO0FBQWEsVUFBSSxJQUFFLEVBQUMsS0FBSSxDQUFBQyxPQUFHO0FBQUMsUUFBQUEsR0FBRSxVQUFRLEtBQUssTUFBTSw2MkVBQTYyRTtBQUFBLE1BQUMsR0FBRSxLQUFJLENBQUFBLE9BQUc7QUFBQyxRQUFBQSxHQUFFLFVBQVEsS0FBSyxNQUFNLDg0RkFBbTVGO0FBQUEsTUFBQyxFQUFDLEdBQUUsSUFBRSxDQUFDO0FBQUUsZUFBUyxFQUFFQyxJQUFFO0FBQUMsWUFBSUMsS0FBRSxFQUFFRCxFQUFDO0FBQUUsWUFBRyxXQUFTQyxHQUFFLFFBQU9BLEdBQUU7QUFBUSxZQUFJQyxLQUFFLEVBQUVGLEVBQUMsSUFBRSxFQUFDLFNBQVEsQ0FBQyxFQUFDO0FBQUUsZUFBTyxFQUFFQSxFQUFDLEVBQUVFLElBQUVBLEdBQUUsU0FBUSxDQUFDLEdBQUVBLEdBQUU7QUFBQSxNQUFPO0FBQUMsUUFBRSxJQUFFLENBQUNILElBQUVJLE9BQUk7QUFBQyxpQkFBUUgsTUFBS0csR0FBRSxHQUFFLEVBQUVBLElBQUVILEVBQUMsS0FBRyxDQUFDLEVBQUUsRUFBRUQsSUFBRUMsRUFBQyxLQUFHLE9BQU8sZUFBZUQsSUFBRUMsSUFBRSxFQUFDLFlBQVcsTUFBRyxLQUFJRyxHQUFFSCxFQUFDLEVBQUMsQ0FBQztBQUFBLE1BQUMsR0FBRSxFQUFFLElBQUUsQ0FBQ0QsSUFBRUksT0FBSSxPQUFPLFVBQVUsZUFBZSxLQUFLSixJQUFFSSxFQUFDLEdBQUUsRUFBRSxJQUFFLENBQUFKLE9BQUc7QUFBQyx1QkFBYSxPQUFPLFVBQVEsT0FBTyxlQUFhLE9BQU8sZUFBZUEsSUFBRSxPQUFPLGFBQVksRUFBQyxPQUFNLFNBQVEsQ0FBQyxHQUFFLE9BQU8sZUFBZUEsSUFBRSxjQUFhLEVBQUMsT0FBTSxLQUFFLENBQUM7QUFBQSxNQUFDO0FBQUUsVUFBSSxJQUFFLENBQUM7QUFBRSxPQUFDLE1BQUk7QUFBQyxVQUFFLEVBQUUsQ0FBQyxHQUFFLEVBQUUsRUFBRSxHQUFFLEVBQUMsT0FBTSxNQUFJSyxJQUFFLFFBQU8sTUFBSSxHQUFFLGFBQVksTUFBSUYsSUFBRSxPQUFNLE1BQUksR0FBRSxRQUFPLE1BQUksRUFBQyxDQUFDO0FBQUUsWUFBSUgsS0FBRSxFQUFFLEdBQUcsR0FBRUksS0FBRSxFQUFFLEdBQUcsR0FBRUYsS0FBRSxTQUFTSSxJQUFFO0FBQUMsY0FBSUwsS0FBRUssR0FBRSxPQUFNSixLQUFFSSxHQUFFLE9BQU1ILEtBQUVGLE1BQUdDLElBQUVLLEtBQUVOLEtBQUUsVUFBUTtBQUFRLGNBQUcsWUFBVSxPQUFPRSxHQUFFLE9BQU0sSUFBSSxNQUFNLEdBQUcsT0FBT0EsSUFBRSw0QkFBNEIsRUFBRSxPQUFPSSxFQUFDLENBQUM7QUFBRSxjQUFJQyxJQUFFSCxJQUFFSSxLQUFFTixHQUFFLFFBQVEsR0FBRztBQUFFLGlCQUFLTSxNQUFHRCxLQUFFTCxHQUFFLE1BQU0sQ0FBQyxHQUFFRSxLQUFFRixHQUFFLENBQUMsR0FBRSxRQUFNQSxHQUFFLENBQUMsS0FBRyxRQUFNQSxHQUFFLENBQUMsTUFBSUssS0FBRUwsR0FBRSxNQUFNLENBQUMsR0FBRUUsTUFBR0YsR0FBRSxDQUFDLE9BQUtLLEtBQUVMLEdBQUUsTUFBTSxPQUFLTSxLQUFFLElBQUVBLEtBQUUsQ0FBQyxHQUFFSixLQUFFRixHQUFFLE1BQU0sR0FBRU0sRUFBQztBQUFHLGNBQUksS0FBRSxTQUFTVCxJQUFFO0FBQUMsbUJBQU0sRUFBQyxNQUFLLE1BQUssTUFBSyxNQUFLLE1BQUssTUFBSyxNQUFLLE1BQUssTUFBSyxLQUFJLEVBQUVBLEdBQUUsWUFBWSxDQUFDLEtBQUdBLEdBQUUsT0FBTyxDQUFDLEVBQUUsWUFBWSxJQUFFQSxHQUFFLE1BQU0sQ0FBQztBQUFBLFVBQUMsR0FBRUssR0FBRSxRQUFRLE9BQU0sRUFBRSxDQUFDLEdBQUUsSUFBRSxPQUFLQSxHQUFFLFFBQVEsT0FBTSxFQUFFLElBQUUsQ0FBQ0EsR0FBRSxRQUFRLE9BQU0sRUFBRSxJQUFFO0FBQUUsY0FBRyxNQUFNLENBQUMsRUFBRSxPQUFNLElBQUksTUFBTSxHQUFHLE9BQU9BLEdBQUUsQ0FBQyxHQUFFLCtCQUErQixDQUFDO0FBQUUsY0FBRyxDQUFDTCxHQUFFUSxFQUFDLEtBQUcsQ0FBQ0osR0FBRUksRUFBQyxFQUFFLE9BQU0sSUFBSSxNQUFNLEdBQUcsT0FBT0wsSUFBRSxrQkFBa0IsRUFBRSxPQUFPSSxFQUFDLENBQUM7QUFBRSxtQkFBUSxLQUFFLFNBQVNQLElBQUVJLElBQUU7QUFBQyxnQkFBSUUsS0FBRSxDQUFDLEtBQUksTUFBSyxLQUFJLE1BQUssS0FBSSxLQUFJLE1BQUssS0FBSSxNQUFLLEtBQUksTUFBSyxHQUFHLEdBQUVMLEtBQUVLLEdBQUUsS0FBSyxTQUFTTixJQUFFO0FBQUMscUJBQU9BLEtBQUVJO0FBQUEsWUFBQyxFQUFFLEdBQUVGLEtBQUVJLEdBQUUsS0FBSyxTQUFTTixJQUFFO0FBQUMscUJBQU9BLE1BQUdJLEtBQUU7QUFBQSxZQUFFLEVBQUUsR0FBRUQsS0FBRUYsR0FBRSxPQUFPQyxFQUFDO0FBQUUsbUJBQU9DLEdBQUUsTUFBTUEsR0FBRSxRQUFRSCxLQUFFSSxFQUFDLENBQUM7QUFBQSxVQUFDLEdBQUUsR0FBRSxDQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUVNLEtBQUUsR0FBRSxJQUFFLEdBQUUsSUFBRVQsS0FBRUQsS0FBRUksSUFBRU0sS0FBRSxFQUFFRixFQUFDLEVBQUUsU0FBUSxTQUFNLEVBQUVBLEVBQUMsRUFBRUUsRUFBQyxLQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxHQUFFQSxNQUFJO0FBQUksaUJBQU87QUFBQSxRQUFDLEdBQUVQLEtBQUUsU0FBU0gsSUFBRTtBQUFDLGNBQUlJLElBQUVFLElBQUVMLEtBQUUsU0FBUUUsS0FBRTtBQUFFLGlCQUFPSCxHQUFFLFNBQVNDLEVBQUMsS0FBR0ssS0FBRUwsSUFBRUcsS0FBRUosR0FBRSxNQUFNLEdBQUVBLEdBQUUsUUFBUUMsRUFBQyxDQUFDLE1BQUlHLEtBQUVKLEdBQUUsQ0FBQyxHQUFFTSxLQUFFTixHQUFFLE1BQU0sQ0FBQyxHQUFFLFFBQU1BLEdBQUUsQ0FBQyxLQUFHLFFBQU1BLEdBQUUsQ0FBQyxNQUFJSSxNQUFHSixHQUFFLENBQUMsR0FBRU0sS0FBRU4sR0FBRSxNQUFNLENBQUMsS0FBSUEsR0FBRSxTQUFTLEdBQUcsTUFBSUcsS0FBRSxDQUFDSCxHQUFFLE1BQU0sR0FBRyxFQUFFLENBQUMsR0FBRU0sS0FBRUEsR0FBRSxNQUFNLEdBQUVBLEdBQUUsUUFBUSxHQUFHLENBQUMsSUFBR0osR0FBRSxFQUFDLE9BQU1FLEtBQUVELEtBQUUsTUFBSUcsR0FBQyxDQUFDO0FBQUEsUUFBQyxHQUFFLElBQUUsV0FBVTtBQUFDLGlCQUFPLE9BQU8sS0FBS0YsRUFBQztBQUFBLFFBQUMsR0FBRSxJQUFFLFdBQVU7QUFBQyxpQkFBTyxPQUFPLEtBQUtKLEVBQUM7QUFBQSxRQUFDLEdBQUVLLEtBQUUsU0FBU0wsSUFBRTtBQUFDLGlCQUFPRSxHQUFFLEVBQUMsT0FBTUYsR0FBQyxDQUFDO0FBQUEsUUFBQyxHQUFFLElBQUUsU0FBU0EsSUFBRTtBQUFDLGlCQUFPRSxHQUFFLEVBQUMsT0FBTUYsR0FBQyxDQUFDO0FBQUEsUUFBQztBQUFBLE1BQUMsR0FBRztBQUFFLFVBQUksSUFBRTtBQUFRLGVBQVEsS0FBSyxFQUFFLEdBQUUsQ0FBQyxJQUFFLEVBQUUsQ0FBQztBQUFFLFFBQUUsY0FBWSxPQUFPLGVBQWUsR0FBRSxjQUFhLEVBQUMsT0FBTSxLQUFFLENBQUM7QUFBQSxJQUFDLEdBQUc7QUFBQTtBQUFBOzs7QUNBaHpPLElBK0ZhVyxVQU1BQztBQXJHYixJQUFBQyxjQUFBO0FBQUE7QUErRk8sSUFBTUYsV0FBVSxDQUFDLFFBQ3RCLElBQUksU0FBUyxJQUFJLElBQUksS0FBSyxNQUFNLEtBQUssT0FBTyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUM7QUFLbEQsSUFBTUMsUUFBTyxNQUFNLENBQUMsQ0FBQyxLQUFLLE1BQU0sS0FBSyxPQUFPLENBQUM7QUFBQTtBQUFBOzs7QUNyR3BELElBQUFFLHVCQUFBO0FBQUEsU0FBQUEsc0JBQUE7QUFBQSx5QkFBQUM7QUFBQSxFQUFBLDhCQUFBQztBQUFBLEVBQUEsbUJBQUFDO0FBQUE7QUFBQSxJQUFBQyxtQkFVYUgsa0JBa0JQSSxjQWVBQyxlQTZCT0oseUJBZ0NQSyxpQkF5REFDLElBQ0FDLElBU09OO0FBM0tiLElBQUFPLG9CQUFBO0FBQUE7QUFBQSxJQUFBTixvQkFBc0I7QUFDdEIsSUFBQU87QUFTTyxJQUFNVixtQkFBa0IsQ0FBQyxTQUFpQjtBQUMvQyxZQUFNLFlBQTJCO0FBQUEsUUFDL0IsUUFBUSxDQUFDLEtBQUssTUFBTSxPQUFPLE1BQU0sS0FBSyxNQUFNLFNBQU07QUFBQSxRQUNsRCxRQUFRLENBQUMsS0FBSyxNQUFNLE9BQU8sTUFBTSxLQUFLLFVBQU8sS0FBSztBQUFBLFFBQ2xELFVBQVUsQ0FBQyxLQUFLLE1BQU0sT0FBTyxNQUFNLFNBQU0sTUFBTSxLQUFLO0FBQUEsUUFDcEQsUUFBUSxDQUFDLEtBQUssTUFBTSxPQUFPLFVBQU8sS0FBSyxNQUFNLEtBQUs7QUFBQSxRQUNsRCxZQUFZLENBQUMsS0FBSyxNQUFNLFdBQVEsTUFBTSxLQUFLLE1BQU0sS0FBSztBQUFBLFFBQ3RELFNBQVMsQ0FBQyxLQUFLLFVBQU8sT0FBTyxNQUFNLEtBQUssTUFBTSxLQUFLO0FBQUEsUUFDbkQsU0FBUyxDQUFDLFNBQU0sTUFBTSxPQUFPLE1BQU0sS0FBSyxNQUFNLEtBQUs7QUFBQSxRQUNuRCxpQkFBaUIsQ0FBQyxLQUFLLE1BQU0sUUFBUSxNQUFNLEtBQUssVUFBTyxTQUFNO0FBQUEsUUFDN0Qsa0JBQWtCLENBQUMsS0FBSyxVQUFPLFFBQVEsTUFBTSxLQUFLLE1BQU0sU0FBTTtBQUFBLE1BQ2hFO0FBQ0EsZ0JBQVUsUUFBUSxVQUFVO0FBQzVCLGdCQUFVLFFBQVEsVUFBVTtBQUU1QixhQUFPLFVBQVUsSUFBSSxLQUFLLENBQUM7QUFBQSxJQUM3QjtBQUVBLElBQU1JLGVBQTJCO0FBQUEsTUFDL0IsR0FBRztBQUFBLE1BQ0gsSUFBSTtBQUFBLE1BQ0osS0FBSztBQUFBLE1BQ0wsSUFBSTtBQUFBLE1BQ0osR0FBRztBQUFBLE1BQ0gsSUFBSTtBQUFBLE1BQ0osS0FBSztBQUFBLElBQ1A7QUFPQSxJQUFNQyxnQkFBZSxDQUFDLFVBQTBCO0FBRTlDLFlBQU0sTUFBTSxNQUFNLFFBQVEsT0FBTyxFQUFFO0FBQ25DLFVBQUksU0FBUztBQUViLFVBQUksSUFBSSxZQUFZLE1BQU0sS0FBSztBQUM3QixpQkFBUztBQUFBLE1BQ1g7QUFDQSxVQUFJLE1BQU0sUUFBUSxNQUFHLElBQUksSUFBSTtBQUMzQixlQUFPLFNBQVM7QUFBQSxNQUNsQjtBQUNBLFVBQUksTUFBTSxRQUFRLEdBQUcsSUFBSSxJQUFJO0FBQzNCLGVBQU8sU0FBUztBQUFBLE1BQ2xCO0FBRUEsVUFBSSxNQUFNLFFBQVEsR0FBRyxJQUFJLElBQUk7QUFDM0IsZUFBTyxXQUFXLE1BQU0sU0FBUztBQUFBLE1BQ25DO0FBRUEsYUFBTztBQUFBLElBQ1Q7QUFTTyxJQUFNSiwwQkFBeUIsQ0FDcEMsaUJBQ0EsaUJBQ1c7QUFHWCxZQUFNLHFCQUFxQixnQkFBZ0IsTUFBTSxHQUFHO0FBQ3BELFVBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLE1BQU0sSUFBSSxHQUFHO0FBQ3RDLDJCQUFtQixDQUFDLEtBQUs7QUFDekIsMEJBQWtCLG1CQUFtQixLQUFLLEdBQUc7QUFBQSxNQUMvQztBQUdBLFlBQU0sV0FBTyx5QkFBTSxlQUFlO0FBQ2xDLFlBQU0sa0JBQWtCLGFBQWEsUUFBUSxhQUFhLEdBQUcsRUFBRSxNQUFNLEdBQUc7QUFHeEUsWUFBTSxjQUFjLGdCQUFnQixJQUFJLENBQUMsT0FBTyxRQUFRO0FBQ3RELGNBQU0sWUFBWUksY0FBYSxLQUFLO0FBRXBDLGNBQU0sVUFBVUQsYUFBWSxNQUFNLFFBQVEsVUFBVSxFQUFFLEVBQUUsWUFBWSxDQUFDO0FBRXJFLGNBQU1PLFFBQU8sS0FBSyxPQUFPO0FBRXpCLGNBQU0sTUFBTUEsTUFBSyxRQUFRLE9BQU8sRUFBRTtBQUVsQyxlQUFPQSxNQUFLLFFBQVEsTUFBTSxFQUFFLElBQUksWUFBWSxNQUFNO0FBQUEsTUFDcEQsQ0FBQztBQUVELGFBQU8sWUFBWSxTQUFTLEVBQUUsUUFBUSxNQUFNLEdBQUc7QUFBQSxJQUNqRDtBQUVBLElBQU1MLGtCQUFpQixDQUFDLEVBQUUsR0FBRyxHQUFHLEVBQUUsTUFBVztBQUMzQyxhQUFPLENBQUMsUUFBZ0IsTUFBTTtBQUM1QixjQUFNLFNBQVMsQ0FBQztBQUdoQixlQUFPLEtBQUtNLFNBQVEsQ0FBQyxDQUFDO0FBRXRCLFlBQUksSUFBSTtBQUdSLFlBQUksSUFBSSxRQUFRLEdBQUc7QUFDakIsaUJBQU8sS0FBS0EsU0FBUSxDQUFDLENBQUM7QUFDdEI7QUFBQSxRQUNGO0FBR0EsWUFBSSxJQUFJLFFBQVEsS0FBS0MsTUFBSyxHQUFHO0FBQzNCLGlCQUFPLEtBQUtELFNBQVEsQ0FBQyxDQUFDO0FBQ3RCO0FBQUEsUUFDRjtBQUdBLFlBQUksSUFBSSxRQUFRLEdBQUc7QUFFakIsaUJBQU8sS0FBS0EsU0FBUSxDQUFDLENBQUM7QUFDdEI7QUFBQSxRQUNGO0FBRUEsWUFBSSxJQUFJLFFBQVEsR0FBRztBQUVqQixpQkFBTyxLQUFLQSxTQUFRLENBQUMsQ0FBQztBQUN0QjtBQUFBLFFBQ0Y7QUFFQSxZQUFJLElBQUksUUFBUSxHQUFHO0FBRWpCLGlCQUFPLEtBQUtBLFNBQVEsQ0FBQyxDQUFDO0FBQ3RCO0FBQUEsUUFDRjtBQUdBLFlBQUksSUFBSSxRQUFRLEtBQUtDLE1BQUssR0FBRztBQUMzQixpQkFBTyxLQUFLRCxTQUFRLENBQUMsQ0FBQztBQUN0QjtBQUFBLFFBQ0Y7QUFJQSxlQUFPLElBQUksT0FBTztBQUNoQixpQkFBTyxLQUFLQSxTQUFRLENBQUMsQ0FBQztBQUN0QjtBQUFBLFFBQ0Y7QUFFQSxlQUFPO0FBQUEsTUFDVDtBQUFBLElBQ0Y7QUFFQSxJQUFNTCxLQUFJRCxnQkFBZSxFQUFFLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ3RFLElBQU1FLEtBQUlGLGdCQUFlLEVBQUUsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7QUFTL0QsSUFBTUosZUFBYyxDQUFDLFdBQTZCLFFBQWdCLE1BQU07QUFDN0UsVUFBSSxjQUFjLFdBQVcsY0FBYyxLQUFLO0FBQzlDLGVBQU9LLEdBQUUsS0FBSztBQUFBLE1BQ2hCO0FBRUEsVUFBSSxjQUFjLFdBQVcsY0FBYyxLQUFLO0FBQzlDLGVBQU9DLEdBQUUsS0FBSztBQUFBLE1BQ2hCO0FBQUEsSUFDRjtBQUFBO0FBQUE7OztBQ25MQSxJQUFBTSxvQkFBQTs7UUFBQSxFQUFBLFlBQVMsSUFBQTtBQUVGLFFBQU0sZUFBZTtBQUNyQixRQUFNLGFBQWE7QUFDbkIsUUFBTSxZQUFZO0FBQ2xCLFFBQU0sV0FBVztBQUNqQixRQUFNLFVBQVU7QUFDaEIsUUFBTSxVQUFVO0FBQ2hCLFFBQU0sVUFBVTtBQUNoQixRQUFNLFVBQVU7QUFFdkIsUUFBTSxRQUFRLENBQUM7QUFFUixhQUFTLE1BQU0sT0FBTztBQUMzQixVQUFJLE9BQU8sQ0FBQztBQUNaLFVBQUk7QUFDRixlQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsZUFBTyxLQUFLLFFBQVEsV0FBVyxLQUFLO0FBQ3BDLGVBQU8sS0FBSyxRQUFRLFVBQVUsR0FBRztBQUNqQyxlQUFPLEtBQUssUUFBUSxVQUFVLEdBQUc7QUFDakMsZUFBTyxLQUFLLE1BQU0sSUFBSTtNQUN4QixTQUFTLEdBQUc7TUFFWjtBQUNBLGFBQU87SUFDVDtBQUVPLGFBQVMsTUFBTSxPQUFPO0FBQzNCLFVBQUksQ0FBQyxNQUFNLEtBQUssR0FBRztBQUNqQixZQUFJLE1BQU0sU0FBUyxHQUFHLEdBQUc7QUFDdkIsZ0JBQU0sS0FBSyxJQUFJLE1BQU0sV0FBVyxJQUFJLEtBQUssRUFBRTtRQUM3QyxXQUFXLE1BQU0sU0FBUyxHQUFHLEdBQUc7QUFDOUIsZ0JBQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxNQUFNLE1BQU0sR0FBRztBQUU5QixnQkFBTSxLQUFLLElBQUksSUFBSTtRQUNyQixXQUFXLE1BQU0sU0FBUyxHQUFHLEdBQUc7QUFDOUIsZ0JBQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxNQUFNLE1BQU0sR0FBRztBQUU5QixnQkFBTSxLQUFLLElBQUksSUFBSTtRQUNyQixPQUFPO0FBQ0wsZ0JBQU0sS0FBSyxJQUFJLFdBQVcsS0FBSztRQUNqQztNQUNGO0FBQ0EsYUFBTyxNQUFNLEtBQUs7SUFDcEI7QUFFTyxhQUFTLFNBQVMsSUFBSSxPQUFPO0FBQ2xDLFVBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxLQUFLLEdBQUc7QUFDN0IsY0FBTSxHQUFHLFNBQVMsS0FBSyxJQUFJLEdBQUcsS0FBSyxLQUFLO01BQzFDO0FBQ0EsYUFBTyxNQUFNLEdBQUcsU0FBUyxLQUFLO0lBQ2hDO0FBRU8sYUFBUyxjQUFjLE9BQU87QUFDbkMsYUFBTyxTQUFTLFNBQVMsS0FBSztJQUNoQztBQUVPLGFBQVMsVUFBVSxPQUFPO0FBQy9CLGFBQU8sU0FBUyxZQUFZLEtBQUs7SUFDbkM7QUFFTyxhQUFTLFNBQVMsT0FBTztBQUM5QixhQUFPLFNBQVMsV0FBVyxLQUFLO0lBQ2xDO0FBRU8sYUFBUyxRQUFRLE9BQU87QUFDN0IsYUFBTyxTQUFTLFVBQVUsS0FBSztJQUNqQztBQUVPLGFBQVMsT0FBTyxPQUFPO0FBQzVCLGFBQU8sU0FBUyxTQUFTLEtBQUs7SUFDaEM7QUFFTyxhQUFTLE9BQU8sT0FBTztBQUM1QixhQUFPLFNBQVMsU0FBUyxLQUFLO0lBQ2hDO0FBRU8sYUFBUyxRQUFRLE9BQU87QUFDN0IsWUFBTSxNQUFNLElBQUksS0FBSztBQUNyQixVQUFJLENBQUMsTUFBTSxHQUFHLEdBQUc7QUFDZixZQUFJLE9BQU8sS0FBSyxFQUFHLE9BQU0sR0FBRyxJQUFJO2lCQUN2QixRQUFRLEtBQUssRUFBRyxPQUFNLEdBQUcsSUFBSTtpQkFDN0IsVUFBVSxLQUFLLEVBQUcsT0FBTSxHQUFHLElBQUk7aUJBQy9CLE9BQU8sS0FBSyxFQUFHLE9BQU0sR0FBRyxJQUFJO2lCQUM1QixTQUFTLEtBQUssRUFBRyxPQUFNLEdBQUcsSUFBSTtZQUNsQyxPQUFNLEdBQUcsSUFBSTtNQUNwQjtBQUNBLGFBQU8sTUFBTSxHQUFHO0lBQ2xCO0FBRU8sYUFBUyxVQUFVLFlBQVk7QUFDcEMsVUFBSSxDQUFDLGNBQWMsT0FBTyxlQUFlLFVBQVU7QUFDakQsY0FBTSxJQUFJLE1BQU0sb0NBQW9DLFVBQVUsR0FBRztNQUNuRTtBQUVBLFVBQUksTUFBTSxJQUFJLFVBQVUsRUFBRSxFQUFHLFFBQU8sTUFBTSxJQUFJLFVBQVUsRUFBRTtBQUUxRCxZQUFNLFNBQVMsV0FBVyxNQUFNLEtBQUs7QUFFckMsVUFBSSxDQUFDLE9BQU8sUUFBUTtBQUNsQixjQUFNLElBQUksTUFBTSx3Q0FBd0MsVUFBVSxHQUFHO01BQ3ZFO0FBRUEsWUFBTSxNQUFNLENBQUM7QUFDYixZQUFNLFFBQVEsQ0FBQztBQUVmLGVBQVMsSUFBSSxNQUFNLE9BQU87QUFDeEIsY0FBTSxPQUFPLEVBQUUsTUFBTSxNQUFNO0FBRTNCLFlBQUksU0FBUyxZQUFZLE9BQU8sVUFBVSxVQUFVO0FBQ2xELGVBQUssUUFBUSxPQUFPLFVBQVUsV0FBVyxNQUFNLEtBQUssSUFBSTtRQUMxRDtBQUVBLFlBQUksU0FBUyxXQUFXLE9BQU8sVUFBVSxVQUFVO0FBQ2pELGVBQUssUUFBUSxZQUFZLE1BQU0sUUFBUSxTQUFTLEVBQUUsQ0FBQztBQUVuRCxjQUFJLE1BQU0sU0FBUyxJQUFJLEdBQUc7QUFDeEIsaUJBQUssU0FBUztVQUNoQjtRQUNGO0FBRUEsWUFBSSxTQUFTLFdBQVcsTUFBTSxRQUFRLEdBQUcsSUFBSSxJQUFJO0FBQy9DLGdCQUFNLElBQUksTUFBTSxNQUFNLEdBQUc7QUFFekIsY0FBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsS0FBSyxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUk7QUFDdkMsa0JBQU0sSUFBSSxNQUFNLCtCQUErQixJQUFJLFlBQVksS0FBSyxHQUFHO1VBQ3pFO0FBRUEsZUFBSyxRQUFRLFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBRTtBQUM5QixlQUFLLFNBQVMsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFO0FBQy9CLGVBQUssT0FBTztRQUNkO0FBRUEsWUFBSSxLQUFLLElBQUk7TUFDZjtBQUVBLGFBQU8sT0FBTyxDQUFDLE1BQU0sS0FBSyxNQUFNO0FBQzlCLFlBQUk7QUFFSixjQUFNLE9BQU8sT0FBTyxJQUFJLENBQUM7QUFDekIsY0FBTSxPQUFPLElBQUksSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDO0FBRXJDLFlBQUksYUFBYSxLQUFLLEdBQUcsR0FBRztBQUMxQixjQUFJLFNBQVMsSUFBSSxNQUFNLFlBQVksQ0FBQztBQUNwQyxpQkFBTztRQUNUO0FBRUEsWUFBSSxPQUFPLFFBQVEsYUFDaEIsSUFBSSxTQUFTLEdBQUcsS0FBSyxJQUFJLFFBQVEsR0FBRyxJQUFJLEtBQ3JDLElBQUksU0FBUyxHQUFHLEtBQUssSUFBSSxRQUFRLEdBQUcsSUFBSSxLQUN4QyxJQUFJLFNBQVMsR0FBRyxLQUFLLElBQUksUUFBUSxHQUFHLElBQUksSUFDM0M7QUFDRCxjQUFJLFVBQVUsTUFBTSxHQUFHLENBQUM7QUFDeEIsaUJBQU87UUFDVDtBQUVBLFlBQUksSUFBSSxRQUFRLEdBQUcsSUFBSSxJQUFJO0FBQ3pCLGNBQUksUUFBUSxLQUFLO0FBQ2YsZ0JBQUksQ0FBQyxLQUFLLE1BQU07QUFDZCxvQkFBTSxJQUFJLE1BQU0sd0NBQXdDLE9BQU8sTUFBTSxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxHQUFHO1lBQ3pGO0FBRUEsaUJBQUssU0FBUyxLQUFLLFVBQVU7QUFDN0IsaUJBQUssVUFBVTtVQUNqQixPQUFPO0FBQ0wsZ0JBQUksU0FBUyxHQUFHO1VBQ2xCO0FBRUEsaUJBQU87UUFDVDtBQUVBLFlBQUksY0FBYyxHQUFHLEdBQUc7QUFDdEIsZUFBSyxTQUFTLElBQUksR0FBRztBQUNyQixpQkFBTztRQUNUO0FBRUEsWUFBSSxJQUFJLE9BQU8sTUFBTSxLQUFLO0FBQ3hCLGNBQUksV0FBVyxHQUFHO0FBQ2xCLGlCQUFPO1FBQ1Q7QUFFQSxZQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsR0FBRyxLQUFLLE9BQU8sR0FBRyxLQUFLLFNBQVMsR0FBRyxHQUFHO0FBQy9ELGdCQUFNLEtBQUssR0FBRztBQUVkLGNBQ0UsQ0FBQyxRQUNFLE1BQU0sV0FBVyxLQUNqQixFQUFFLE9BQU8sSUFBSSxLQUFLLE9BQU8sSUFBSSxLQUFLLFNBQVMsSUFBSSxJQUNsRDtBQUNBLGtCQUFNLE1BQU0sTUFBTSxPQUFPLEdBQUcsTUFBTSxNQUFNO0FBQ3hDLGtCQUFNLE9BQU8sSUFBSSxDQUFDO0FBRWxCLGdCQUFJLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLGdCQUFJLFNBQVMsSUFBSSxDQUFDO0FBRWxCLGdCQUFJLENBQUMsVUFBVSxTQUFTLElBQUksR0FBRztBQUM3Qix1QkFBUztBQUNULHFCQUFPO1lBQ1Q7QUFFQSxnQkFDRSxLQUFLLFNBQVMsS0FDWCxPQUFPLElBQUksTUFDVixPQUFPLElBQUksS0FBSyxTQUFTLE1BQU0sSUFDbkM7QUFDQSxrQkFBSSxRQUFRLElBQUksS0FBSyxHQUFHLENBQUM7QUFDekIscUJBQU87WUFDVDtBQUVBLGdCQUFJLFFBQVEsQ0FBQSxNQUFLO0FBQ2Ysa0JBQUksRUFBRSxTQUFTLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxRQUFRLENBQUMsSUFBSSxRQUFRLENBQUM7WUFDekQsQ0FBQztVQUNIO0FBQ0EsaUJBQU87UUFDVDtBQUVBLFlBQUksT0FBTyxRQUFRLFlBQVksSUFBSSxRQUFRLElBQUksSUFBSSxJQUFJO0FBQ3JELGdCQUFNLFFBQVEsSUFBSSxNQUFNLElBQUk7QUFDNUIsZ0JBQU0sTUFBTSxNQUFNLENBQUMsS0FBSztBQUN4QixnQkFBTSxNQUFNLE1BQU0sQ0FBQyxLQUFLO0FBRXhCLGlCQUFPO0FBQ1AsZ0JBQU0sQ0FBQyxLQUFLLEdBQUc7UUFDakI7QUFFQSxZQUFJLE9BQU8sUUFBUSxhQUFhLElBQUksT0FBTyxNQUFNLE9BQU8sSUFBSSxPQUFPLE1BQU0sTUFBTTtBQUM3RSxnQkFBTSxXQUFXLElBQUksT0FBTyxNQUFNLE1BQU0sV0FBVztBQUNuRCxnQkFBTSxTQUFTLElBQUksT0FBTyxDQUFDO0FBRTNCLGNBQUksQ0FBQyxTQUFTLE1BQU0sR0FBRztBQUNyQixrQkFBTSxJQUFJLE1BQU0sbUNBQW1DLFFBQVEsWUFBWSxPQUFPLE1BQU0sR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUc7VUFDL0c7QUFFQSxjQUFJLFVBQVUsV0FBVyxNQUFNLENBQUM7QUFDaEMsaUJBQU87UUFDVDtBQUVBLFlBQUksQ0FBQyxRQUFRLFFBQVEsR0FBRyxNQUFNLFdBQVcsTUFBTSxRQUFRLEtBQUssS0FBSyxHQUFHO0FBQ2xFLGVBQUssTUFBTSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsS0FBSztBQUNqQyxlQUFLLE1BQU0sQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLElBQUksTUFBTTtBQUN2QyxlQUFLLE1BQU0sQ0FBQyxLQUFLO0FBQ2pCLGlCQUFPO1FBQ1Q7QUFFQSxZQUFJLFFBQVEsUUFBUSxHQUFHLEdBQUcsT0FBTyxRQUFRLFlBQVksU0FBUyxHQUFHLElBQUksU0FBUyxLQUFLLEVBQUUsSUFBSSxHQUFHO0FBQzVGLGVBQU87TUFDVCxHQUFHLElBQUk7QUFFUCxZQUFNLElBQUksVUFBVSxFQUFFLElBQUk7QUFDMUIsYUFBTztJQUNUOzs7Ozs7QUMxUE8sSUFBQUMsaUJBQUE7O2FBQVMsUUFBUSxPQUFPO0FBQzdCLGFBQU8sTUFBTSxPQUFPLENBQUMsTUFBTSxRQUFRLEtBQUssT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3pEO0FBRU8sYUFBUyxPQUFPLE9BQU8sT0FBTztBQUNuQyxZQUFNLE1BQU0sQ0FBQztBQUViLGFBQU8sT0FBTztBQUNaLFlBQUksS0FBSyxLQUFLO0FBQ2QsaUJBQVM7TUFDWDtBQUVBLGFBQU87SUFDVDtBQUVPLGFBQVMsTUFBTSxLQUFLLEtBQUssTUFBTTtBQUNwQyxZQUFNLE1BQU0sQ0FBQztBQUViLFVBQUksQ0FBQyxNQUFNO0FBQ1QsaUJBQVMsSUFBSSxLQUFLLEtBQUssS0FBSyxLQUFLLEdBQUc7QUFDbEMsY0FBSSxLQUFLLENBQUM7UUFDWjtNQUNGLE9BQU87QUFDTCxjQUFNLFFBQVEsTUFBTSxPQUFPO0FBRTNCLGlCQUFTLElBQUksS0FBSyxLQUFLLEtBQUssS0FBSyxNQUFNO0FBQ3JDLGNBQUksS0FBSyxDQUFDO1FBQ1o7TUFDRjtBQUVBLGFBQU87SUFDVDtBQUVPLGFBQVMsTUFBTSxPQUFPO0FBQzNCLFVBQUksQ0FBQyxTQUFTLE9BQU8sVUFBVSxTQUFVLFFBQU87QUFDaEQsVUFBSSxNQUFNLFFBQVEsS0FBSyxFQUFHLFFBQU8sTUFBTSxJQUFJLEtBQUs7QUFFaEQsWUFBTSxPQUFPLENBQUM7QUFFZCxhQUFPLEtBQUssS0FBSyxFQUFFLFFBQVEsQ0FBQSxRQUFPO0FBQ2hDLGFBQUssR0FBRyxJQUFJLE1BQU0sTUFBTSxHQUFHLENBQUM7TUFDOUIsQ0FBQztBQUVELGFBQU87SUFDVDtBQUVPLGFBQVMsSUFBSSxHQUFHLEdBQUcsSUFBSTtBQUM1QixZQUFNLE1BQU0sS0FBSyxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU07QUFFdkMsZUFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLEtBQUssR0FBRztBQUMvQixZQUFJLE9BQU8sRUFBRSxDQUFDLE1BQU0sZUFBZSxPQUFPLEVBQUUsQ0FBQyxNQUFNLFlBQWEsSUFBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztNQUMvRTtJQUNGOzs7Ozs7QUNwREEsSUFBQUMsa0JBQUE7O1FBQUEsRUFBQSx3QkFBQUMsd0JBQVMsSUFBQTtBQUNULFFBQUEsRUFBQSxPQUFBQyxRQUFTLFlBQU8sSUFBQTtBQUVoQixRQUFBLEVBQUEsZUFBUyxVQUFlLElBQUE7QUFDeEIsUUFBQSxFQUFBLFFBQVMsTUFBUSxJQUFBO0FBRVYsYUFBU0MsUUFBTyxPQUFPLFNBQVMsVUFBVTtBQUMvQyxVQUFJLENBQUMsTUFBTSxRQUFRLEtBQUssRUFBRyxRQUFPO0FBRWxDLFlBQU0sS0FBSyxPQUFPLGFBQWEsYUFBYSxZQUFZLENBQUEsTUFBSztBQUU3RCxVQUFJO0FBQ0osYUFBTyxNQUFNLE9BQU8sQ0FBQyxNQUFNLEtBQUssTUFBTTtBQUNwQyxjQUFNLE9BQU8sS0FBSyxLQUFLLFNBQVMsQ0FBQztBQUNqQyxjQUFNLE9BQU8sTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQzlCLGNBQU0sTUFBTSxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUM7QUFFN0IsWUFBSSxNQUFNO0FBQ1IsaUJBQU87QUFDUCxpQkFBTztRQUNUO0FBRUEsWUFBSSxNQUFNLFFBQVEsR0FBRyxHQUFHO0FBQ3RCLGVBQUssS0FBSyxHQUFHLEdBQUc7QUFDaEIsaUJBQU87UUFDVDtBQUVBLFlBQUksSUFBSSxTQUFTLFdBQVcsSUFBSSxVQUFVLEtBQUs7QUFDN0MsY0FBSSxLQUFLLFNBQVMsRUFBRyxNQUFLLEtBQUssS0FBSyxDQUFDLENBQUM7QUFDdEMsaUJBQU87UUFDVDtBQUVBLFlBQUksSUFBSSxTQUFTLGFBQWEsSUFBSSxTQUFTLFdBQVc7QUFDcEQsZUFBSyxLQUFLLFNBQVMsQ0FBQyxLQUFLLElBQUk7QUFDN0IsaUJBQU87UUFDVDtBQUVBLGdCQUFRLElBQUksTUFBTTtVQUNoQixLQUFLO1VBQ0wsS0FBSztVQUNMLEtBQUs7QUFDSCxnQkFBSSxJQUFJLE9BQVEsTUFBSyxLQUFLLEdBQUcsT0FBTyxJQUFJLE9BQU8sSUFBSSxNQUFNLENBQUM7cUJBQ2pELE1BQU0sUUFBUSxJQUFJLEtBQUssRUFBRyxNQUFLLEtBQUssR0FBRyxJQUFJLEtBQUs7Z0JBQ3BELE1BQUssS0FBSyxJQUFJLEtBQUs7QUFDeEI7VUFFRixLQUFLO0FBQ0gsZ0JBQUksSUFBSSxPQUFRLE1BQUssS0FBSyxHQUFHLE9BQU8sSUFBSSxPQUFPLElBQUksTUFBTSxDQUFDO3FCQUNqRCxJQUFJLE9BQVEsTUFBSyxLQUFLLEdBQUcsSUFBSSxLQUFLO2dCQUN0QyxNQUFLLEtBQUssSUFBSSxLQUFLO0FBRXhCLGdCQUFJLElBQUksU0FBUyxTQUFTO0FBQ3hCLHFCQUFPO1lBQ1Q7QUFDQTtVQUVGLEtBQUs7QUFDSCxpQkFBSyxLQUFLLFNBQVMsQ0FBQyxLQUFLLElBQUk7QUFDN0IsbUJBQU87VUFFVCxLQUFLO0FBQ0gsaUJBQUssS0FBSyxHQUFHLE9BQU8sTUFBTSxJQUFJLFFBQVEsQ0FBQyxDQUFDO0FBQ3hDO1VBRUYsS0FBSztBQUNILGdCQUFJLE1BQU0sUUFBUSxJQUFJLEdBQUc7QUFDdkIsbUJBQUssS0FBSyxTQUFTLENBQUMsSUFBSSxLQUFLLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksTUFBTSxDQUFDLENBQUM7WUFDbkUsT0FBTztBQUNMLG1CQUFLLEtBQUssSUFBSSxLQUFLO1lBQ3JCO0FBQ0E7VUFFRixLQUFLO0FBQ0gsaUJBQUssS0FBSyxTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEtBQUs7QUFDNUM7VUFFRixLQUFLO1VBQ0wsS0FBSztBQUFTO0FBQ1osa0JBQUksUUFBUTtBQUNaLGtCQUFJLE9BQU8sUUFBUSxJQUFJLEtBQUssTUFBTSxZQUFhLFNBQVEsUUFBUSxJQUFJLEtBQUs7QUFDeEUsa0JBQUksVUFBVSxNQUFNO0FBQ2xCLHNCQUFNLElBQUksTUFBTSwyQkFBMkIsSUFBSSxLQUFLLEdBQUc7Y0FDekQ7QUFFQSxrQkFBSSxNQUFNLENBQUMsS0FBSyxNQUFNLENBQUMsRUFBRSxNQUFNO0FBQzdCLHdCQUFRQSxRQUFPLE9BQU8sT0FBTztBQUU3QixvQkFBSSxJQUFJLFFBQVE7QUFDZCx1QkFBSyxLQUFLLEdBQUcsT0FBTyxPQUFPLElBQUksTUFBTSxFQUFFLE9BQU8sQ0FBQyxPQUFPLFNBQVM7QUFDN0QsMEJBQU0sS0FBSyxHQUFHLElBQUk7QUFDbEIsMkJBQU87a0JBQ1QsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDUixPQUFPO0FBQ0wsdUJBQUssS0FBSyxHQUFHLEtBQUs7Z0JBQ3BCO0FBRUEsdUJBQU87Y0FDVDtBQUVBLHNCQUFRLE1BQU0sUUFBUSxLQUFLLElBQUksUUFBUSxDQUFDLEtBQUs7QUFDN0Msa0JBQUksSUFBSSxPQUFRLE1BQUssS0FBSyxHQUFHLE9BQU8sT0FBTyxJQUFJLE1BQU0sQ0FBQztrQkFDakQsTUFBSyxLQUFLLEdBQUcsS0FBSztZQUN6QjtBQUFFO1VBQ0YsU0FBUztBQUNQLGtCQUFNLElBQUksTUFBTSxjQUFjLElBQUksSUFBSSxHQUFHO1VBQzNDO1FBQ0Y7QUFFQSxlQUFPO01BQ1QsR0FBRyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsTUFBTSxTQUFTO0FBQzVCLGNBQU0sT0FBTyxLQUFLLEtBQUssU0FBUyxDQUFDO0FBRWpDLFlBQ0UsTUFBTSxRQUFRLElBQUksS0FDZixNQUFNLFFBQVEsSUFBSSxLQUNsQixPQUFPLEtBQUssQ0FBQyxNQUFNLFlBQ25CLEtBQUssV0FBVyxHQUNuQjtBQUNBLGdCQUFNLFNBQVMsS0FBSyxDQUFDLE1BQU0sV0FBVyxLQUFLLFNBQVMsS0FBSyxDQUFDO0FBQzFELGdCQUFNLENBQUMsTUFBTSxNQUFNLElBQUksT0FBTyxNQUFNLEVBQUUsTUFBTSxJQUFJO0FBRWhELGVBQUssSUFBSTtBQUNULGVBQUssS0FBSyxHQUFHLEtBQUssTUFBTSxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUUxQyxjQUFJLE9BQU8sTUFBTSxFQUFFLFNBQVMsR0FBRyxHQUFHO0FBQ2hDLGtCQUFNLFFBQVEsS0FBSyxNQUFNLENBQUMsU0FBUyxDQUFDO0FBRXBDLGtCQUFNLElBQUk7QUFDVixrQkFBTSxRQUFRO0FBQ2QsaUJBQUssS0FBSyxHQUFHLEtBQUs7VUFDcEI7QUFDQSxpQkFBTztRQUNUO0FBRUEsWUFBSSxPQUFPLFNBQVMsWUFBWSxLQUFLLFNBQVMsR0FBRyxHQUFHO0FBQ2xELGdCQUFNLFNBQVMsS0FBSyxNQUFNLEdBQUc7QUFFN0IsY0FBSSxPQUFPLEtBQUssYUFBYSxHQUFHO0FBQzlCLGtCQUFNLFNBQVMsT0FBTyxVQUFVLGFBQWE7QUFDN0Msa0JBQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sTUFBTSxHQUFHLE1BQU0sR0FBRyxPQUFPLE1BQU0sTUFBTSxDQUFDO0FBRTdELGlCQUFLLEtBQUtGLHdCQUF1QixFQUFFLEtBQUssR0FBRyxHQUFHLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsRUFBRSxJQUFJLENBQUEsTUFBSyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztVQUNwRyxPQUFPO0FBQ0wsaUJBQUssS0FBSyxHQUFHQyxPQUFNLElBQUksQ0FBQyxDQUFDO1VBQzNCO1FBQ0YsT0FBTztBQUNMLGVBQUssS0FBSyxHQUFHLElBQUksQ0FBQztRQUNwQjtBQUNBLGVBQU87TUFDVCxHQUFHLENBQUMsQ0FBQztJQUNQO0FBRU8sYUFBU0UsT0FBTSxRQUFRO0FBQzVCLFlBQU0sU0FBUyxDQUFDO0FBQ2hCLFlBQU0sT0FBTyxDQUFDO0FBQ2QsWUFBTSxPQUFPLENBQUM7QUFFZCxVQUFJLFVBQVU7QUFDZCxVQUFJLFNBQVM7QUFDYixVQUFJO0FBQ0osVUFBSSxPQUFPLENBQUM7QUFDWixhQUFPLE1BQU0sUUFBUSxFQUFFLFFBQVEsQ0FBQyxNQUFNLFFBQVE7QUFDNUMsZUFBTyxLQUFLLFFBQVEsU0FBUyxFQUFFLEVBQUUsS0FBSztBQUN0QyxZQUFJLENBQUMsS0FBTTtBQUVYLFlBQUk7QUFDRixjQUFJLEtBQUssT0FBTyxNQUFNLEtBQUs7QUFDekIsa0JBQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxJQUFJLEtBQUssTUFBTSxLQUFLO0FBRXpDLGdCQUFJLE1BQU0sU0FBUyxHQUFHO0FBQ3BCLG1CQUFLLElBQUksSUFBSSxVQUFVLE1BQU0sS0FBSyxHQUFHLENBQUM7WUFDeEM7VUFDRixXQUFXLEtBQUssUUFBUSxJQUFJLEtBQUssR0FBRztBQUNsQyxnQkFBSSxPQUFPO0FBQ1QscUJBQU8sS0FBSyxJQUFJO0FBQ2hCLHdCQUFVO0FBQ1YsdUJBQVM7QUFDVCxxQkFBTyxDQUFDO1lBQ1Y7QUFFQSxvQkFBUSxLQUFLLE1BQU0sS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFFLEtBQUssR0FBRztVQUM3QyxXQUFXLEtBQUssT0FBTyxNQUFNLEtBQUs7QUFDaEMsaUJBQUssS0FBSyxVQUFVLEtBQUssT0FBTyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7VUFDNUMsV0FBVyxLQUFLLE9BQU8sTUFBTSxLQUFLO0FBQ2hDLGtCQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sSUFBSSxLQUFLLE9BQU8sQ0FBQyxFQUFFLE1BQU0sR0FBRztBQUVsRCxnQkFBSSxPQUFPLENBQUMsTUFBTSxLQUFLO0FBQ3JCLG9CQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsQ0FBQztBQUV4QixxQkFBTyxLQUFLLElBQUksRUFDYixPQUFPLENBQUEsTUFBSyxFQUFFLFFBQVEsR0FBRyxNQUFNLENBQUMsRUFDaEMsUUFBUSxDQUFBLE1BQUs7QUFDWixxQkFBSyxHQUFHLElBQUksSUFBSSxFQUFFLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksTUFBTSxLQUFLLENBQUMsQ0FBQztjQUNwRCxDQUFDO1lBQ0w7QUFDQSxxQkFBUztVQUNYLFdBQVcsS0FBSyxRQUFRLEdBQUcsSUFBSSxHQUFHO0FBQ2hDLGtCQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssSUFBSSxLQUFLLE1BQU0sR0FBRztBQUV2QyxpQkFBSyxJQUFJLElBQUksVUFBVSxNQUFNLEtBQUssR0FBRyxFQUFFLEtBQUssQ0FBQztVQUMvQyxPQUFPO0FBQ0wsa0JBQU0sUUFBUSxVQUFVLElBQUk7QUFFNUIsZ0JBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxNQUFNLENBQUMsRUFBRSxTQUFTLFdBQVc7QUFDNUMsa0JBQUksQ0FBQyxRQUFTLE9BQU0sSUFBSSxVQUFVLDJCQUEyQixJQUFJLEdBQUc7QUFFcEUsb0JBQU0sTUFBTSxLQUFLLE9BQU8sRUFBRSxLQUFLLE9BQU8sRUFBRSxTQUFTLENBQUM7QUFFbEQsa0JBQUksQ0FBQyxJQUFJLE9BQVEsS0FBSSxTQUFTLENBQUMsRUFBRSxNQUFNLFVBQVUsT0FBTyxJQUFJLENBQUM7QUFDN0Qsa0JBQUksT0FBTyxLQUFLLEdBQUcsS0FBSztBQUN4QjtZQUNGO0FBRUEsa0JBQU0sUUFBUSxNQUFNLFVBQVUsQ0FBQSxNQUFLLENBQUMsUUFBUSxTQUFTLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDO0FBQzlFLGtCQUFNLFFBQVEsTUFBTSxVQUFVLENBQUEsTUFBSyxFQUFFLFNBQVMsU0FBUztBQUN2RCxrQkFBTSxRQUFRLFFBQVEsSUFBSSxNQUFNLE1BQU0sS0FBSyxJQUFJO0FBQy9DLGtCQUFNLFNBQVMsTUFBTSxVQUFVLENBQUEsTUFBSyxFQUFFLFNBQVMsU0FBUztBQUN4RCxrQkFBTSxTQUFTLE1BQU0sTUFBTSxHQUFHLFFBQVEsSUFBSSxRQUFRLENBQUM7QUFFbkQsc0JBQVUsU0FBUyxPQUFPLENBQUMsRUFBRTtBQUM3QixnQkFBSSxDQUFDLEtBQUssT0FBTyxHQUFHO0FBQ2xCLG1CQUFLLE9BQU8sSUFBSSxDQUFDO1lBQ25CO0FBRUEsZ0JBQUk7QUFDSixnQkFBSSxRQUFRLEtBQUssVUFBVSxJQUFJO0FBQzdCLG9CQUFNLE1BQU0sS0FBSyxPQUFPLEVBQUUsS0FBSyxPQUFPLEVBQUUsU0FBUyxDQUFDO0FBRWxELGtCQUFJLE9BQU8sTUFBTSxNQUFNLEtBQUs7QUFDNUIscUJBQU87Z0JBQ0wsT0FBTyxJQUFJO2dCQUNYLFFBQVEsTUFBTSxNQUFNLEdBQUcsS0FBSztjQUM5QjtZQUNGLFdBQVcsU0FBUyxHQUFHO0FBQ3JCLHFCQUFPO2dCQUNMLE1BQU0sTUFBTSxNQUFNLE1BQU07Z0JBQ3hCLE9BQU8sTUFBTSxNQUFNLEdBQUcsTUFBTTtjQUM5QjtZQUNGLFdBQVcsV0FBVyxHQUFHO0FBQ3ZCLHFCQUFPLEVBQUUsUUFBUSxNQUFNLE1BQU0sQ0FBQyxFQUFFO1lBQ2xDLE9BQU87QUFDTCxxQkFBTyxFQUFFLE9BQU8sTUFBTTtZQUN4QjtBQUVBLGdCQUFJLE9BQU8sU0FBUyxHQUFHO0FBQ3JCLG1CQUFLLFNBQVMsT0FBTyxNQUFNLENBQUM7WUFDOUI7QUFDQSxpQkFBSyxPQUFPLEVBQUUsS0FBSyxJQUFJO1VBQ3pCO1FBQ0YsU0FBUyxHQUFHO0FBQ1YsZ0JBQU0sTUFBTSxPQUFPLE1BQU0sV0FBVyxJQUFJLEVBQUU7QUFFMUMsZ0JBQU0sSUFBSSxZQUFZLEdBQUcsR0FBRztZQUFlLE1BQU0sQ0FBQztFQUFLLElBQUksRUFBRTtRQUMvRDtNQUNGLENBQUM7QUFFRCxVQUFJLE9BQU87QUFDVCxlQUFPLEtBQUssSUFBSTtNQUNsQjtBQUNBLGFBQU8sRUFBRSxNQUFNLE1BQU0sT0FBTztJQUM5Qjs7Ozs7O0FDcFFBOzthQUFTLElBQUksT0FBTztBQUNsQixhQUFPLE9BQU8sS0FBSyxFQUNoQixRQUFRLE1BQU0sT0FBTyxFQUNyQixRQUFRLE1BQU0sTUFBTSxFQUNwQixRQUFRLE1BQU0sTUFBTTtJQUN6QjtBQUVBLGFBQVMsS0FBSyxLQUFLLE9BQU8sUUFBUSxDQUFDLEdBQUc7QUFDcEMsWUFBTSxZQUFZLE9BQU8sUUFBUSxLQUFLLEVBQ25DLElBQUksQ0FBQyxDQUFDLEtBQUssU0FBUyxNQUFNLFNBQVMsR0FBRyxLQUFLLElBQUksU0FBUyxDQUFDLEdBQUcsRUFDNUQsS0FBSyxFQUFFO0FBQ1YsYUFBTyxnQkFBZ0IsR0FBRyxJQUFJLFNBQVMsSUFBSSxJQUFJLEtBQUssQ0FBQztJQUN2RDtBQUVBLGFBQVMsU0FBUyxPQUFPO0FBQ3ZCLFVBQUksQ0FBQyxNQUFPLFFBQU87QUFDbkIsVUFBSSxVQUFVLElBQUssUUFBTztBQUMxQixVQUFJLFVBQVUsSUFBSyxRQUFPO0FBQzFCLFVBQUksTUFBTSxPQUFPLENBQUMsTUFBTSxJQUFLLFFBQU87QUFDcEMsVUFBSSxVQUFVLEtBQUssS0FBSyxFQUFHLFFBQU87QUFDbEMsVUFBSSxnQkFBZ0IsS0FBSyxLQUFLLEVBQUcsUUFBTztBQUN4QyxVQUFJLHFCQUFxQixLQUFLLEtBQUssRUFBRyxRQUFPO0FBQzdDLFVBQUksTUFBTSxTQUFTLEdBQUcsRUFBRyxRQUFPO0FBQ2hDLFVBQUksNkRBQTZELEtBQUssS0FBSyxFQUFHLFFBQU87QUFDckYsVUFBSSxvREFBb0QsS0FBSyxLQUFLLEVBQUcsUUFBTztBQUM1RSxVQUFJLDBCQUEwQixLQUFLLEtBQUssRUFBRyxRQUFPO0FBQ2xELFVBQUksU0FBUyxLQUFLLEtBQUssRUFBRyxRQUFPO0FBQ2pDLFVBQUksa0JBQWtCLEtBQUssS0FBSyxFQUFHLFFBQU87QUFDMUMsYUFBTztJQUNUO0FBRUEsYUFBUyxZQUFZLE9BQU87QUFDMUIsWUFBTSxNQUFNLFNBQVMsS0FBSztBQUMxQixVQUFJLENBQUMsSUFBSyxRQUFPLElBQUksS0FBSztBQUMxQixVQUFJLFFBQVEsaUJBQWlCLFVBQVUsSUFBSyxRQUFPLEtBQUssS0FBSyxPQUFPLEVBQUUsS0FBSyxNQUFNLENBQUM7QUFDbEYsVUFBSSxRQUFRLGNBQWUsUUFBTyxLQUFLLEtBQUssT0FBTyxFQUFFLFlBQVksTUFBTSxNQUFNLENBQUMsRUFBRSxDQUFDO0FBQ2pGLFVBQUksUUFBUSxXQUFZLFFBQU8sS0FBSyxLQUFLLE9BQU8sRUFBRSxNQUFNLE1BQU0sWUFBWSxFQUFFLENBQUM7QUFDN0UsVUFBSSxRQUFRLGNBQWUsUUFBTyxLQUFLLEtBQUssT0FBTyxFQUFFLFNBQVMsSUFBSSxDQUFDO0FBQ25FLGFBQU8sS0FBSyxLQUFLLEtBQUs7SUFDeEI7QUFFQSxhQUFTLGFBQWEsTUFBTTtBQUMxQixhQUFPLEtBQ0osTUFBTSxPQUFPLEVBQ2IsSUFBSSxDQUFBLFNBQVMsTUFBTSxLQUFLLElBQUksSUFBSSxPQUFPLFlBQVksSUFBSSxDQUFFLEVBQ3pELEtBQUssRUFBRTtJQUNaO0FBRUEsYUFBUyxhQUFhLE1BQU07QUFDMUIsWUFBTSxNQUFNLEtBQUssUUFBUSxHQUFHO0FBQzVCLFVBQUksTUFBTSxFQUFHLFFBQU8sQ0FBQyxNQUFNLEVBQUU7QUFDN0IsYUFBTyxDQUFDLEtBQUssTUFBTSxHQUFHLEdBQUcsR0FBRyxLQUFLLE1BQU0sR0FBRyxDQUFDO0lBQzdDO0FBRUEsYUFBUyxXQUFXLE1BQU07QUFDeEIsVUFBSSxDQUFDLEtBQUssS0FBSyxFQUFHLFFBQU8sSUFBSSxJQUFJO0FBRWpDLFVBQUksWUFBWSxLQUFLLElBQUksR0FBRztBQUMxQixlQUFPLEtBQUssUUFBUSxvQkFBb0IsQ0FBQyxHQUFHLElBQUksT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLEdBQUcsS0FBSyxnQkFBZ0IsRUFBRSxDQUFDLEVBQUU7TUFDaEc7QUFDQSxVQUFJLFdBQVcsS0FBSyxJQUFJLEdBQUc7QUFDekIsZUFBTyxLQUFLLFFBQVEsbUJBQW1CLENBQUMsR0FBRyxJQUFJLE9BQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEtBQUssYUFBYSxFQUFFLENBQUMsRUFBRTtNQUM1RjtBQUNBLFVBQUksUUFBUSxLQUFLLElBQUksR0FBRztBQUN0QixlQUFPLGFBQWEsS0FBSyxRQUFRLE1BQU0sS0FBSyxDQUFDO01BQy9DO0FBQ0EsVUFBSSxRQUFRLEtBQUssSUFBSSxHQUFHO0FBQ3RCLGNBQU0sU0FBUyxJQUFJLEtBQUssTUFBTSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQ3hDLGNBQU0sT0FBTyxLQUFLLFVBQVUsRUFBRSxNQUFNLENBQUMsRUFBRSxRQUFRLFFBQVEsR0FBRztBQUMxRCxjQUFNLFdBQVcsS0FDZCxNQUFNLE9BQU8sRUFDYixJQUFJLENBQUEsU0FBUTtBQUNYLGNBQUksQ0FBQyxRQUFRLE1BQU0sS0FBSyxJQUFJLEVBQUcsUUFBTztBQUN0QyxjQUFJLG1CQUFtQixLQUFLLElBQUksRUFBRyxRQUFPLEtBQUssZUFBZSxNQUFNLEVBQUUsU0FBUyxLQUFLLENBQUM7QUFDckYsaUJBQU8sWUFBWSxJQUFJO1FBQ3pCLENBQUMsRUFDQSxLQUFLLEVBQUU7QUFDVixlQUFPLEdBQUcsTUFBTSxHQUFHLEtBQUssbUJBQW1CLEdBQUcsQ0FBQyxHQUFHLFFBQVE7TUFDNUQ7QUFDQSxVQUFJLGlCQUFpQixLQUFLLElBQUksR0FBRztBQUMvQixlQUFPLEtBQUssUUFBUSw2QkFBNkIsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLFNBQzVELEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLGVBQWUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLGFBQWEsSUFBSSxDQUFDLEVBQzdFO01BQ0g7QUFDQSxVQUFJLFdBQVcsS0FBSyxJQUFJLEdBQUc7QUFDekIsZUFBTyxhQUFhLElBQUk7TUFDMUI7QUFDQSxhQUFPLGFBQWEsSUFBSTtJQUMxQjtBQUVPLGFBQVMsVUFBVSxPQUFPO0FBQy9CLGFBQU8sT0FBTyxTQUFTLEVBQUUsRUFDdEIsTUFBTSxPQUFPLEVBQ2IsSUFBSSxDQUFBLFNBQVE7QUFDWCxjQUFNLENBQUMsTUFBTSxPQUFPLElBQUksYUFBYSxJQUFJO0FBQ3pDLGNBQU0sV0FBVyxXQUFXLElBQUk7QUFDaEMsWUFBSSxDQUFDLFFBQVMsUUFBTztBQUNyQixlQUFPLEdBQUcsUUFBUSxHQUFHLEtBQUssZUFBZSxPQUFPLENBQUM7TUFDbkQsQ0FBQyxFQUNBLEtBQUssSUFBSTtJQUNkOzs7Ozs7QUNwR0E7O1FBQUEsRUFBQSxVQUFTLElBQUE7QUFFVCxhQUFTLGFBQWEsR0FBRyxHQUFHLFFBQVEsS0FBSztBQUN2QyxZQUFNLE9BQU8sS0FBSyxJQUFJLEdBQUcsT0FBTyxhQUFhLFFBQVEsQ0FBQztBQUN0RCxZQUFNLE9BQU8sS0FBSyxJQUFJLElBQUksSUFBSSxJQUFJO0FBQ2xDLFlBQU0sTUFBTSxLQUFLLElBQUksSUFBSSxJQUFJLE9BQU8sY0FBYyxFQUFFO0FBQ3BELGFBQU8sRUFBRSxNQUFNLElBQUk7SUFDckI7QUFFTyxhQUFTQyxjQUFhLGFBQWEsVUFBVSxDQUFDLEdBQUc7QUFDdEQsWUFBTSxPQUFPLFNBQVMsY0FBYyxLQUFLO0FBQ3pDLFdBQUssS0FBSztBQUVWLFlBQU0sTUFBTSxTQUFTLGNBQWMsS0FBSztBQUN4QyxVQUFJLEtBQUs7QUFDVCxVQUFJLGFBQWEsZUFBZSxNQUFNO0FBRXRDLFlBQU0sS0FBSyxTQUFTLGNBQWMsVUFBVTtBQUM1QyxTQUFHLEtBQUs7QUFDUixTQUFHLGFBQWE7QUFDaEIsU0FBRyxlQUFlO0FBQ2xCLFNBQUcsUUFBUTtBQUVYLFlBQU0sTUFBTSxTQUFTLGNBQWMsS0FBSztBQUN4QyxVQUFJLEtBQUs7QUFDVCxVQUFJLFNBQVM7QUFDYixVQUFJLFlBQVk7QUFDaEIsWUFBTSxXQUFXLElBQUksY0FBYyxRQUFRO0FBQzNDLFlBQU0sVUFBVSxJQUFJLGNBQWMsbUJBQW1CO0FBQ3JELFlBQU0sa0JBQWtCO1FBQ3RCLFFBQVEscUJBQXFCO1VBQzNCLE1BQU07VUFDTixTQUFTLFFBQVE7VUFDakIsT0FBTyxDQUFBLFVBQVMsSUFBSSxLQUFLO1FBQzNCO1FBQ0EsUUFBUSxlQUFlO1VBQ3JCLE1BQU07VUFDTixTQUFTLFFBQVE7VUFDakIsT0FBTyxDQUFBLFVBQVM7UUFDbEI7UUFDQSxRQUFRLGtCQUFrQjtVQUN4QixNQUFNO1VBQ04sU0FBUyxRQUFRO1VBQ2pCLE9BQU8sQ0FBQSxVQUFTLElBQUksS0FBSztRQUMzQjtRQUNBLFFBQVEsY0FBYztVQUNwQixNQUFNO1VBQ04sU0FBUyxRQUFRO1VBQ2pCLE9BQU8sQ0FBQSxVQUFTO1FBQ2xCO1FBQ0E7VUFDRSxNQUFNO1VBQ04sU0FBUyxNQUFNO1VBQ2YsT0FBTyxNQUFNO1FBQ2Y7TUFDRixFQUFFLE9BQU8sT0FBTztBQUVoQixlQUFTLE9BQU87QUFDZCxZQUFJLFlBQVksR0FBRyxVQUFVLEdBQUcsS0FBSyxDQUFDOztNQUN4QztBQUVBLGVBQVMsY0FBYztBQUNyQixZQUFJLFNBQVM7TUFDZjtBQUVBLFNBQUcsaUJBQWlCLFVBQVUsTUFBTTtBQUNsQyxZQUFJLFlBQVksR0FBRztBQUNuQixZQUFJLGFBQWEsR0FBRztNQUN0QixDQUFDO0FBRUQsU0FBRyxpQkFBaUIsU0FBUyxNQUFNO0FBQ2pDLGFBQUs7QUFDTCxvQkFBWTtBQUNaLFlBQUksUUFBUSxRQUFTLFNBQVEsUUFBUSxHQUFHLEtBQUs7TUFDL0MsQ0FBQztBQUVELFNBQUcsaUJBQWlCLGFBQWEsQ0FBQSxNQUFLO0FBQ3BDLGNBQU0sV0FBVyxTQUFTLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxPQUFPO0FBQ2hFLGNBQU0sUUFBUSxnQkFDWCxJQUFJLENBQUEsWUFBVztBQUNkLGdCQUFNLE1BQU0sU0FBUyxLQUFLLENBQUEsT0FBTSxHQUFHLFdBQVcsR0FBRyxRQUFRLFFBQVEsSUFBSSxDQUFDO0FBQ3RFLGlCQUFPLE1BQU0sRUFBRSxTQUFTLE9BQU8sSUFBSSxRQUFRLFFBQVEsSUFBSSxFQUFFLElBQUk7UUFDL0QsQ0FBQyxFQUNBLEtBQUssT0FBTztBQUNmLFlBQUksQ0FBQyxPQUFPO0FBQ1Ysc0JBQVk7QUFDWjtRQUNGO0FBQ0EsY0FBTSxPQUFPLE1BQU0sUUFBUSxRQUFRLE1BQU0sS0FBSztBQUM5QyxZQUFJLENBQUMsTUFBTTtBQUNULHNCQUFZO0FBQ1o7UUFDRjtBQUNBLGNBQU0sTUFBTSxhQUFhLEVBQUUsU0FBUyxFQUFFLE9BQU87QUFDN0MsaUJBQVMsY0FBYyxNQUFNLFFBQVEsTUFBTSxNQUFNLEtBQUs7QUFDdEQsZ0JBQVEsY0FBYztBQUN0QixZQUFJLE1BQU0sT0FBTyxHQUFHLElBQUksSUFBSTtBQUM1QixZQUFJLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRztBQUMxQixZQUFJLFNBQVM7TUFDZixDQUFDO0FBRUQsU0FBRyxpQkFBaUIsY0FBYyxXQUFXO0FBRTdDLFdBQUs7QUFDTCxXQUFLLFlBQVksR0FBRztBQUNwQixXQUFLLFlBQVksRUFBRTtBQUNuQixXQUFLLFlBQVksR0FBRztBQUVwQixhQUFPO1FBQ0wsSUFBSTtRQUNKLFVBQVU7UUFDVixJQUFJLENBQUMsT0FBTyxPQUFPLEdBQUcsaUJBQWlCLE9BQU8sRUFBRTtRQUNoRCxVQUFVLE1BQU0sR0FBRztRQUNuQixVQUFVLENBQUEsVUFBUztBQUNqQixhQUFHLFFBQVE7QUFDWCxlQUFLO0FBQ0wsc0JBQVk7UUFDZDtRQUNBLE9BQU8sTUFBTSxHQUFHLE1BQU07TUFDeEI7SUFDRjs7Ozs7O0FDeEhBOzthQUFTLE1BQU0sT0FBTztBQUNwQixhQUFPLEtBQUssSUFBSSxHQUFHLEtBQUssSUFBSSxHQUFHLEtBQUssQ0FBQztJQUN2QztBQUVBLGFBQVMsVUFBVSxNQUFNO0FBQ3ZCLFlBQU0sUUFBUSxPQUFPLFFBQVEsRUFBRSxFQUFFLE1BQU0sS0FBSyxFQUFFLE9BQU8sT0FBTztBQUM1RCxVQUFJLENBQUMsTUFBTSxPQUFRLFFBQU87QUFDMUIsYUFBTyxNQUFNLE1BQU0sR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHO0lBQ25DO0FBRU8sYUFBU0MsYUFBWSxRQUFRLFVBQVUsQ0FBQyxHQUFHO0FBQ2hELFlBQU0sT0FBTyxTQUFTLGNBQWMsT0FBTztBQUMzQyxXQUFLLEtBQUs7QUFDVixXQUFLLFlBQVk7QUFFakIsWUFBTSxRQUFRLFNBQVMsY0FBYyxJQUFJO0FBQ3pDLFlBQU0sY0FBYztBQUVwQixZQUFNLFNBQVMsU0FBUyxjQUFjLEtBQUs7QUFDM0MsYUFBTyxLQUFLO0FBQ1osWUFBTSxZQUFZLFNBQVMsY0FBYyxLQUFLO0FBQzlDLGdCQUFVLEtBQUs7QUFFZixZQUFNLEtBQUssU0FBUyxjQUFjLEtBQUs7QUFDdkMsU0FBRyxLQUFLO0FBRVIsWUFBTSxlQUFlLFFBQVEsU0FBUztBQUN0QyxZQUFNLGNBQWMsUUFBUSxRQUFRO0FBQ3BDLFlBQU0sbUJBQW1CLFFBQVEsYUFBYTtBQUU5QyxZQUFNLFNBQVMsU0FBUyxjQUFjLE9BQU87QUFDN0MsYUFBTyxZQUFZO0FBQ25CLGFBQU8sY0FBYztBQUNyQixZQUFNLE1BQU0sU0FBUyxjQUFjLE9BQU87QUFDMUMsVUFBSSxPQUFPO0FBQ1gsVUFBSSxNQUFNO0FBQ1YsVUFBSSxNQUFNO0FBQ1YsVUFBSSxRQUFRLE9BQU8sWUFBWTtBQUMvQixZQUFNLFNBQVMsU0FBUyxjQUFjLE1BQU07QUFDNUMsYUFBTyxZQUFZO0FBQ25CLGFBQU8sY0FBYyxPQUFPLFlBQVk7QUFDeEMsVUFBSSxpQkFBaUIsU0FBUyxNQUFNO0FBQ2xDLGVBQU8sY0FBYyxJQUFJO0FBQ3pCLFlBQUksUUFBUSxVQUFVO0FBQ3BCLGtCQUFRLFNBQVMsRUFBRSxPQUFPLFNBQVMsSUFBSSxPQUFPLEVBQUUsRUFBRSxDQUFDO1FBQ3JEO01BQ0YsQ0FBQztBQUNELGFBQU8sWUFBWSxHQUFHO0FBQ3RCLGFBQU8sWUFBWSxNQUFNO0FBRXpCLFlBQU0sVUFBVSxTQUFTLGNBQWMsT0FBTztBQUM5QyxjQUFRLFlBQVk7QUFDcEIsY0FBUSxjQUFjO0FBQ3RCLFlBQU1DLFFBQU8sU0FBUyxjQUFjLFFBQVE7QUFDNUMsT0FBQyxHQUFHLEdBQUcsSUFBSSxFQUFFLEVBQUUsUUFBUSxDQUFBLFVBQVM7QUFDOUIsY0FBTSxTQUFTLFNBQVMsY0FBYyxRQUFRO0FBQzlDLGVBQU8sUUFBUSxPQUFPLEtBQUs7QUFDM0IsZUFBTyxjQUFjLE9BQU8sS0FBSztBQUNqQyxZQUFJLFVBQVUsWUFBYSxRQUFPLFdBQVc7QUFDN0MsUUFBQUEsTUFBSyxZQUFZLE1BQU07TUFDekIsQ0FBQztBQUNELE1BQUFBLE1BQUssaUJBQWlCLFVBQVUsTUFBTTtBQUNwQyxZQUFJLFFBQVEsVUFBVTtBQUNwQixrQkFBUSxTQUFTLEVBQUUsTUFBTSxTQUFTQSxNQUFLLE9BQU8sRUFBRSxFQUFFLENBQUM7UUFDckQ7TUFDRixDQUFDO0FBQ0QsY0FBUSxZQUFZQSxLQUFJO0FBRXhCLFlBQU0sU0FBUyxTQUFTLGNBQWMsT0FBTztBQUM3QyxhQUFPLFlBQVk7QUFDbkIsYUFBTyxjQUFjO0FBQ3JCLFlBQU0sTUFBTSxTQUFTLGNBQWMsT0FBTztBQUMxQyxVQUFJLE9BQU87QUFDWCxVQUFJLE1BQU07QUFDVixVQUFJLE1BQU07QUFDVixVQUFJLFFBQVEsT0FBTyxnQkFBZ0I7QUFDbkMsWUFBTSxTQUFTLFNBQVMsY0FBYyxNQUFNO0FBQzVDLGFBQU8sWUFBWTtBQUNuQixhQUFPLGNBQWMsT0FBTyxtQkFBbUIsSUFBSSxJQUFJLGdCQUFnQixLQUFLLGdCQUFnQjtBQUM1RixVQUFJLGlCQUFpQixTQUFTLE1BQU07QUFDbEMsY0FBTSxRQUFRLFNBQVMsSUFBSSxPQUFPLEVBQUU7QUFDcEMsZUFBTyxjQUFjLFFBQVEsSUFBSSxJQUFJLEtBQUssS0FBSyxPQUFPLEtBQUs7QUFDM0QsWUFBSSxRQUFRLFVBQVU7QUFDcEIsa0JBQVEsU0FBUyxFQUFFLFdBQVcsTUFBTSxDQUFDO1FBQ3ZDO01BQ0YsQ0FBQztBQUNELGFBQU8sWUFBWSxHQUFHO0FBQ3RCLGFBQU8sWUFBWSxNQUFNO0FBRXpCLGdCQUFVLFlBQVksTUFBTTtBQUM1QixnQkFBVSxZQUFZLE9BQU87QUFDN0IsZ0JBQVUsWUFBWSxNQUFNO0FBRTVCLFlBQU0sYUFBYSxTQUFTLGNBQWMsT0FBTztBQUNqRCxpQkFBVyxjQUFjO0FBQ3pCLFlBQU0sY0FBYyxTQUFTLGNBQWMsUUFBUTtBQUNuRDtRQUNFLENBQUMsT0FBTyxJQUFJLENBQUM7UUFDYixDQUFDLE9BQU8sSUFBSSxDQUFDO1FBQ2IsQ0FBQyxPQUFPLElBQUksQ0FBQztRQUNiLENBQUMsT0FBTyxJQUFJLENBQUM7TUFDZixFQUFFLFFBQVEsQ0FBQyxDQUFDLE9BQU8sS0FBSyxNQUFNO0FBQzVCLGNBQU0sU0FBUyxTQUFTLGNBQWMsUUFBUTtBQUM5QyxlQUFPLGNBQWM7QUFDckIsZUFBTyxRQUFRLE9BQU8sS0FBSztBQUMzQixZQUFJLFVBQVUsT0FBTyxjQUFlLFFBQU8sV0FBVztBQUN0RCxvQkFBWSxZQUFZLE1BQU07TUFDaEMsQ0FBQztBQUNELGtCQUFZLGlCQUFpQixVQUFVLE1BQU07QUFDM0MsZUFBTyxhQUFhLFdBQVcsWUFBWSxLQUFLLENBQUM7TUFDbkQsQ0FBQztBQUNELGlCQUFXLFlBQVksV0FBVztBQUVsQyxZQUFNLGdCQUFnQixTQUFTLGNBQWMsT0FBTztBQUNwRCxvQkFBYyxjQUFjO0FBQzVCLFlBQU0sV0FBVyxTQUFTLGNBQWMsT0FBTztBQUMvQyxlQUFTLE9BQU87QUFDaEIsZUFBUyxNQUFNO0FBQ2YsZUFBUyxNQUFNO0FBQ2YsZUFBUyxRQUFRO0FBQ2pCLGVBQVMsaUJBQWlCLFNBQVMsTUFBTTtBQUN2QyxlQUFPLGlCQUFpQixTQUFTLFNBQVMsT0FBTyxFQUFFLElBQUksR0FBRztNQUM1RCxDQUFDO0FBQ0Qsb0JBQWMsWUFBWSxRQUFRO0FBRWxDLFNBQUcsWUFBWSxVQUFVO0FBQ3pCLFNBQUcsWUFBWSxhQUFhO0FBRTVCLFdBQUssWUFBWSxLQUFLO0FBQ3RCLFdBQUssWUFBWSxTQUFTO0FBQzFCLFdBQUssWUFBWSxNQUFNO0FBQ3ZCLFdBQUssWUFBWSxFQUFFO0FBRW5CLFlBQU0sV0FBVyxvQkFBSSxJQUFJO0FBRXpCLGVBQVMsWUFBWUMsTUFBSyxPQUFPO0FBQy9CLGNBQU0sUUFBUSxPQUFPLGNBQWNBLElBQUc7QUFDdEMsY0FBTSxRQUFRLFNBQVMsY0FBYyxLQUFLO0FBQzFDLGNBQU0sWUFBWTtBQUNsQixjQUFNLFFBQVEsTUFBTUE7QUFFcEIsY0FBTSxPQUFPLFNBQVMsY0FBYyxLQUFLO0FBQ3pDLGFBQUssWUFBWTtBQUNqQixhQUFLLGNBQWMsVUFBVSxLQUFLO0FBQ2xDLGFBQUssUUFBUTtBQUViLGNBQU0sS0FBSyxTQUFTLGNBQWMsS0FBSztBQUN2QyxXQUFHLFlBQVk7QUFFZixjQUFNLE1BQU0sU0FBUyxjQUFjLEtBQUs7QUFDeEMsWUFBSSxZQUFZO0FBRWhCLGNBQU0sT0FBTyxTQUFTLGNBQWMsUUFBUTtBQUM1QyxhQUFLLFlBQVk7QUFDakIsYUFBSyxjQUFjO0FBQ25CLGNBQU0sT0FBTyxTQUFTLGNBQWMsUUFBUTtBQUM1QyxhQUFLLFlBQVk7QUFDakIsYUFBSyxjQUFjO0FBRW5CLGNBQU0sU0FBUyxTQUFTLGNBQWMsT0FBTztBQUM3QyxlQUFPLE9BQU87QUFDZCxlQUFPLFlBQVk7QUFDbkIsZUFBTyxNQUFNO0FBQ2IsZUFBTyxNQUFNO0FBQ2IsZUFBTyxRQUFRLE9BQU8sS0FBSyxNQUFNLE1BQU0sU0FBUyxHQUFHLENBQUM7QUFFcEQsY0FBTSxTQUFTLFNBQVMsY0FBYyxPQUFPO0FBQzdDLGVBQU8sT0FBTztBQUNkLGVBQU8sWUFBWTtBQUNuQixlQUFPLE1BQU07QUFDYixlQUFPLE1BQU07QUFDYixlQUFPLFFBQVEsT0FBTyxLQUFLLE1BQU0sTUFBTSxhQUFhLEdBQUcsQ0FBQztBQUV4RCxjQUFNLFFBQVEsU0FBUyxjQUFjLE9BQU87QUFDNUMsY0FBTSxPQUFPO0FBQ2IsY0FBTSxZQUFZO0FBQ2xCLGNBQU0sTUFBTTtBQUNaLGNBQU0sTUFBTTtBQUNaLGNBQU0sUUFBUSxPQUFPLEtBQUssTUFBTSxNQUFNLFlBQVksR0FBRyxDQUFDO0FBRXRELGNBQU0sUUFBUSxTQUFTLGNBQWMsS0FBSztBQUMxQyxjQUFNLFlBQVk7QUFDbEIsY0FBTSxRQUFRLFNBQVMsY0FBYyxPQUFPO0FBQzVDLGNBQU0sY0FBYztBQUNwQixjQUFNLFlBQVksTUFBTTtBQUN4QixjQUFNLFFBQVEsU0FBUyxjQUFjLE9BQU87QUFDNUMsY0FBTSxjQUFjO0FBQ3BCLGNBQU0sWUFBWSxLQUFLO0FBQ3ZCLGNBQU0sWUFBWSxLQUFLO0FBQ3ZCLGNBQU0sWUFBWSxLQUFLO0FBRXZCLGlCQUFTLGNBQWM7QUFDckIsZ0JBQU0sTUFBTSxPQUFPLGNBQWNBLElBQUc7QUFDcEMsZUFBSyxVQUFVLE9BQU8sVUFBVSxJQUFJLElBQUk7QUFDeEMsZUFBSyxVQUFVLE9BQU8sVUFBVSxJQUFJLEtBQUs7UUFDM0M7QUFFQSxhQUFLLGlCQUFpQixTQUFTLE1BQU07QUFDbkMsZ0JBQU0sTUFBTSxPQUFPLGNBQWNBLElBQUc7QUFDcEMsaUJBQU8sUUFBUUEsTUFBSyxDQUFDLElBQUksSUFBSTtBQUM3QixzQkFBWTtRQUNkLENBQUM7QUFDRCxhQUFLLGlCQUFpQixTQUFTLE1BQU07QUFDbkMsZ0JBQU0sTUFBTSxPQUFPLGNBQWNBLElBQUc7QUFDcEMsaUJBQU8sUUFBUUEsTUFBSyxDQUFDLElBQUksS0FBSztBQUM5QixzQkFBWTtRQUNkLENBQUM7QUFDRCxlQUFPLGlCQUFpQixTQUFTLE1BQU07QUFDckMsaUJBQU8sVUFBVUEsTUFBSyxNQUFNLFNBQVMsT0FBTyxPQUFPLEVBQUUsSUFBSSxHQUFHLENBQUM7UUFDL0QsQ0FBQztBQUNELGVBQU8saUJBQWlCLFNBQVMsTUFBTTtBQUNyQyxpQkFBTyxjQUFjQSxNQUFLLE1BQU0sU0FBUyxPQUFPLE9BQU8sRUFBRSxJQUFJLEdBQUcsQ0FBQztRQUNuRSxDQUFDO0FBQ0QsY0FBTSxpQkFBaUIsU0FBUyxNQUFNO0FBQ3BDLGlCQUFPLGFBQWFBLE1BQUssTUFBTSxTQUFTLE1BQU0sT0FBTyxFQUFFLElBQUksR0FBRyxDQUFDO1FBQ2pFLENBQUM7QUFFRCxZQUFJLFlBQVksSUFBSTtBQUNwQixZQUFJLFlBQVksSUFBSTtBQUNwQixZQUFJLFlBQVksTUFBTTtBQUV0QixjQUFNLFlBQVksSUFBSTtBQUN0QixjQUFNLFlBQVksRUFBRTtBQUNwQixjQUFNLFlBQVksR0FBRztBQUNyQixjQUFNLFlBQVksS0FBSztBQUN2QixlQUFPLFlBQVksS0FBSztBQUV4QixvQkFBWTtBQUNaLGVBQU8sRUFBRSxJQUFJLE9BQU8sSUFBSSxNQUFNLFlBQVk7TUFDNUM7QUFFQSxlQUFTLE9BQU8sTUFBTTtBQUNwQixjQUFNLFVBQVUsTUFBTSxRQUFRLElBQUksSUFDOUIsS0FBSyxJQUFJLENBQUEsV0FBVSxFQUFFLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLElBQUksTUFBTSxNQUFNLENBQUMsRUFBRSxFQUFFLElBQ3RFLENBQUM7QUFDTCxjQUFNLFdBQVcsSUFBSSxJQUFJLFFBQVEsSUFBSSxDQUFBLFNBQVEsS0FBSyxHQUFHLENBQUM7QUFFdEQsaUJBQVMsUUFBUSxDQUFDLE9BQU9BLFNBQVE7QUFDL0IsY0FBSSxDQUFDLFNBQVMsSUFBSUEsSUFBRyxHQUFHO0FBQ3RCLGtCQUFNLEdBQUcsT0FBTztBQUNoQixxQkFBUyxPQUFPQSxJQUFHO1VBQ3JCO1FBQ0YsQ0FBQztBQUVELGdCQUFRLFFBQVEsQ0FBQSxTQUFRO0FBQ3RCLGNBQUksQ0FBQyxTQUFTLElBQUksS0FBSyxHQUFHLEdBQUc7QUFDM0IscUJBQVMsSUFBSSxLQUFLLEtBQUssWUFBWSxLQUFLLEtBQUssS0FBSyxJQUFJLENBQUM7VUFDekQsT0FBTztBQUNMLGtCQUFNLFFBQVEsU0FBUyxJQUFJLEtBQUssR0FBRztBQUNuQyxrQkFBTSxLQUFLLGNBQWMsVUFBVSxLQUFLLElBQUk7QUFDNUMsa0JBQU0sS0FBSyxRQUFRLEtBQUs7QUFDeEIsa0JBQU0sWUFBWTtVQUNwQjtRQUNGLENBQUM7TUFDSDtBQUVBLGVBQVMsUUFBUUEsTUFBSztBQUNwQixjQUFNLFFBQVEsU0FBUyxJQUFJQSxJQUFHO0FBQzlCLFlBQUksQ0FBQyxNQUFPO0FBQ1osY0FBTSxHQUFHLFVBQVUsSUFBSSxRQUFRO0FBQy9CLG1CQUFXLE1BQU0sTUFBTSxHQUFHLFVBQVUsT0FBTyxRQUFRLEdBQUcsRUFBRTtNQUMxRDtBQUVBLGVBQVMsT0FBTyxXQUFXO0FBQ3pCLGNBQU0sT0FBTyxPQUFPLGNBQWMsWUFBWSxZQUFZLEtBQUssVUFBVSxTQUFTLFdBQVc7QUFDN0YsYUFBSyxVQUFVLE9BQU8sYUFBYSxDQUFDLElBQUk7QUFDeEMsZUFBTztNQUNUO0FBRUEsZUFBUyxjQUFjLE9BQU8sQ0FBQyxHQUFHO0FBQ2hDLFlBQUksT0FBTyxLQUFLLFVBQVUsVUFBVTtBQUNsQyxjQUFJLFFBQVEsT0FBTyxLQUFLLEtBQUs7QUFDN0IsaUJBQU8sY0FBYyxPQUFPLEtBQUssS0FBSztRQUN4QztBQUNBLFlBQUksT0FBTyxLQUFLLFNBQVMsVUFBVTtBQUNqQyxVQUFBRCxNQUFLLFFBQVEsT0FBTyxLQUFLLElBQUk7UUFDL0I7QUFDQSxZQUFJLE9BQU8sS0FBSyxjQUFjLFVBQVU7QUFDdEMsY0FBSSxRQUFRLE9BQU8sS0FBSyxTQUFTO0FBQ2pDLGlCQUFPLGNBQWMsS0FBSyxZQUFZLElBQUksSUFBSSxLQUFLLFNBQVMsS0FBSyxPQUFPLEtBQUssU0FBUztRQUN4RjtNQUNGO0FBRUEsYUFBTyxFQUFFLElBQUksTUFBTSxRQUFRLFNBQVMsUUFBUSxjQUFjO0lBQzVEOzs7Ozs7QUM1UkEsb0JBQW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSW5CLFNBQVNFLE9BQU8sR0FBRztBQUFFLFNBQU8sT0FBTyxNQUFNO0FBQVM7QUFDbEQsU0FBU0MsT0FBTyxHQUFHO0FBQUUsU0FBTyxPQUFPLE1BQU07QUFBUztBQUNsRCxTQUFTQyxPQUFPLEdBQUc7QUFBRSxTQUFPLE9BQU8sTUFBTTtBQUFZO0FBQ3JELFNBQVNDLFlBQVlDLFFBQU0sUUFBUTtBQUNqQyxTQUFPLEtBQUssSUFBSSxJQUFJQSxTQUFPLE1BQU0sRUFBRSxLQUFLLFVBQVU7QUFDcEQ7QUFtRk8sU0FBU0MsT0FBTyxLQUFLLFNBQVMsUUFBUTtBQUMzQyxNQUFJLE9BQU8sUUFBUSxTQUFVLFFBQU87QUFDcEMsTUFBSUMsTUFBSUMsT0FBTSxLQUFLLEdBQUc7QUFDdEIsTUFBSSxDQUFDRCxPQUFNLENBQUMsV0FBV0EsSUFBRSxDQUFDLEVBQUksUUFBTztBQUVyQyxNQUFJRSxLQUFJLEVBQUUsUUFBUUYsSUFBRSxDQUFDLEVBQUUsWUFBWSxHQUFHLEtBQUtBLElBQUUsQ0FBQyxFQUFFLFFBQVEsTUFBTSxJQUFJLEVBQUU7QUFDcEUsRUFBQUUsR0FBRSxLQUFLQSxHQUFFLFNBQVNBLEdBQUU7QUFDcEIsRUFBQUEsR0FBRSxRQUFRQSxHQUFFLE9BQU8sV0FBVyxDQUFDLElBQUksS0FBSztBQUN4QyxFQUFBQSxHQUFFLE1BQU1BLEdBQUUsSUFBSSxDQUFDLE1BQU0sTUFBTSxDQUFDQSxHQUFFLElBQUksU0FBU0EsR0FBRSxJQUFJO0FBQ2pELE1BQUksTUFBTUMsV0FBVUQsR0FBRSxJQUFJLElBQUlBLEdBQUU7QUFDaEMsRUFBQUEsR0FBRSxTQUFTLE1BQU0sSUFBSSxLQUFLLE1BQU0sTUFBTTtBQUN0QyxNQUFJRixJQUFFLENBQUMsR0FBRztBQUNSLElBQUFFLEdBQUUsTUFBTSxDQUFDRixJQUFFLENBQUM7QUFDWixJQUFBRSxHQUFFLE9BQU8sTUFBTSxNQUFNQSxHQUFFLE1BQU07QUFDN0IsSUFBQUEsR0FBRSxPQUFPTCxZQUFXSyxHQUFFLE1BQU0sTUFBTTtFQUNwQztBQUNBLE1BQUksUUFBUyxDQUFBQSxHQUFFLFVBQVVGLElBQUUsQ0FBQztBQUM1QixTQUFPRTtBQUNUO0FBNENPLFNBQVNKLE1BQU1NLFFBQU07QUFDMUIsT0FBS1YsT0FBTVUsTUFBSSxLQUFLVCxPQUFNUyxNQUFJLE1BQU1BLFVBQVEsS0FBS0EsU0FBTyxJQUFLLFFBQU8sQ0FBQ0E7QUFDckUsTUFBSUYsS0FBSUgsT0FBTUssTUFBSTtBQUNsQixTQUFPRixNQUFLTixPQUFNTSxHQUFFLElBQUksSUFBSUEsR0FBRSxPQUFPO0FBQ3ZDO0FBOUpBLElBV0lEO0FBWEosSUFnRElFO0FBaERKLElBQUFFLG9CQUFBQyxPQUFBO0VBQUEsc0NBQUE7QUFBQTtBQVdJLElBQUFMLFNBQVE7QUFxQ1IsSUFBQUUsYUFBWSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUU7RUFBQTtBQUFBLENBQUE7QUNoRHJDLElBQUFJLHNCQUFBLENBQUE7QUFBQUMsVUFBQUQscUJBQUE7RUFBQSxNQUFBLE1BQUFIO0VBQUEsUUFBQSxNQUFBSztBQUFBLENBQUE7QUE4Qk8sU0FBU0EsUUFBUSxLQUFLO0FBQzNCLE1BQUksTUFBTSxRQUFRLEdBQUcsS0FBSyxJQUFJLFdBQVcsRUFBRyxRQUFPLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksS0FBSztBQUM5RSxTQUFPWCxNQUFLLEdBQUc7QUFDakI7QUFvQk8sU0FBU00sTUFBTSxLQUFLLFFBQVE7QUFDakMsTUFBSSxRQUFRLFFBQVEsUUFBUSxNQUFPLFFBQU8sU0FBVUosS0FBRztBQUFFLFdBQU9JLE1BQUtKLEtBQUcsR0FBRztFQUFFO0FBQzdFLFFBQU0sS0FBSyxNQUFNLEdBQUc7QUFDcEIsTUFBSSxNQUFNLFdBQVcsT0FBT1UsVUFBU0M7QUFDckMsTUFBSSxLQUFLLElBQUksTUFBTSxFQUFFO0FBQ3JCLE1BQUksSUFBSSxLQUFLLE1BQU0sTUFBTSxFQUFFLElBQUk7QUFDL0IsU0FBTyxLQUFLO0FBQ2Q7QUE1REEsSUFtQ0lBO0FBbkNKLElBb0NJRDtBQXBDSixJQUFBRSxtQkFBQU4sT0FBQTtFQUFBLHFDQUFBO0FBaUJBLElBQUFELGtCQUFBO0FBa0JJLElBQUFNLFNBQVEsK0JBQStCLE1BQU0sR0FBRztBQUNoRCxJQUFBRCxVQUFTLCtCQUErQixNQUFNLEdBQUc7RUFBQTtBQUFBLENBQUE7QUNwQ3JELElBQUFHLG1CQUFBQyxZQUFBO0VBQUEsMkNBQUEsU0FBQSxRQUFBO0FBQUEsV0FBQSxVQUFBO01BQ0UsTUFBUTtNQUNSLFNBQVc7TUFDWCxhQUFlO01BQ2YsTUFBUTtNQUNSLE9BQVM7TUFDVCxjQUFnQjtRQUNkLGNBQWM7TUFDaEI7TUFDQSxpQkFBbUI7UUFDakIsZUFBZTtRQUNmLHlDQUF5QztRQUN6QyxxQkFBcUI7UUFDckIsd0JBQXdCO1FBQ3hCLFFBQVU7UUFDViwwQkFBMEI7UUFDMUIsd0JBQXdCO1FBQ3hCLHNCQUFzQjtRQUN0Qix5QkFBeUI7UUFDekIsMEJBQTBCO1FBQzFCLE9BQVM7UUFDVCxRQUFVO1FBQ1YsT0FBUztRQUNULEtBQU87UUFDUCxRQUFVO1FBQ1YsT0FBUztNQUNYO01BQ0EsYUFBZTtRQUNiLEtBQU87UUFDUCxTQUFXO1FBQ1gsTUFBUTtNQUNWO01BQ0EsU0FBVztRQUNULE9BQVM7UUFDVCxNQUFRO1FBQ1IsV0FBVztRQUNYLGdCQUFrQjtRQUNsQixTQUFXO1FBQ1gsTUFBUTtRQUNSLE9BQVM7UUFDVCxhQUFlO01BQ2pCO01BQ0EsdUJBQXlCO01BQ3pCLFlBQWM7UUFDWixNQUFRO1FBQ1IsS0FBTztNQUNUO01BQ0EsVUFBWTtRQUNWO1FBQ0E7UUFDQTtNQUNGO01BQ0EsUUFBVTtNQUNWLFNBQVc7TUFDWCxNQUFRO1FBQ04sS0FBTztNQUNUO01BQ0EsVUFBWTtJQUNkO0VBQUE7QUFBQSxDQUFBO0FDMURBLElBQUFDLGlCQUFBRCxZQUFBO0VBQUEsNkNBQUEsU0FBQSxRQUFBO0FBQUE7QUFFQSxRQUFJLGFBQVlGLGlCQUFBLEdBQUFJLGNBQUFULG1CQUFBO0FBTWhCLFFBQUksWUFBWTtNQUNkLFNBQVNNLGlCQUFBLEVBQTJCO01BQ3BDLG1CQUFtQixDQUFDLElBQU0sSUFBTSxLQUFNLEdBQUk7O01BRTFDLHFCQUFxQixDQUFDLEdBQU0sR0FBTSxHQUFNLENBQUk7O01BRTVDLHNCQUFzQixDQUFDLEdBQU0sQ0FBSTs7TUFFakMsc0JBQXNCLENBQUMsR0FBTSxDQUFJOztNQUVqQyx1QkFBdUIsQ0FBQyxHQUFNLEdBQUk7O01BRWxDLGtCQUFrQixDQUFDLElBQU0sSUFBTSxLQUFNLEdBQUk7O01BRXpDLGVBQWU7TUFDZixjQUFjO01BQ2QsbUJBQW1CO01BQ25CLG9CQUFvQjtNQUNwQix5QkFBeUI7TUFDekIsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixnQkFBZ0I7TUFDaEIsZUFBZTtNQUNmLG1CQUFtQjtNQUNuQix3QkFBd0I7TUFDeEIsdUJBQXVCO01BQ3ZCLHNCQUFzQixDQUFDLElBQU0sQ0FBSTtNQUNqQywwQkFBMEI7O01BRTFCLHVCQUF1Qjs7TUFFdkIsbUJBQW1COztJQUVyQjtBQUVBLGFBQVMsUUFBUSxLQUFLO0FBQ3BCO0FBRUEsVUFBSSxPQUFPLFdBQVcsY0FBYyxPQUFPLE9BQU8sYUFBYSxVQUFVO0FBQ3ZFLGtCQUFVLFNBQVVJLE1BQUs7QUFDdkIsaUJBQU8sT0FBT0E7UUFDaEI7TUFDRixPQUFPO0FBQ0wsa0JBQVUsU0FBVUEsTUFBSztBQUN2QixpQkFBT0EsUUFBTyxPQUFPLFdBQVcsY0FBY0EsS0FBSSxnQkFBZ0IsVUFBVUEsU0FBUSxPQUFPLFlBQVksV0FBVyxPQUFPQTtRQUMzSDtNQUNGO0FBRUEsYUFBTyxRQUFRLEdBQUc7SUFDcEI7QUFFQSxhQUFTLGNBQWM7QUFDckIsb0JBQWMsU0FBVSxJQUFJLFFBQVE7QUFDbEMsZUFBTyxJQUFJLFlBQVksSUFBSSxRQUFXLE1BQU07TUFDOUM7QUFFQSxVQUFJLFNBQVMsT0FBTztBQUVwQixVQUFJLFVBQVUsb0JBQUksUUFBUTtBQUUxQixlQUFTLFlBQVksSUFBSSxPQUFPLFFBQVE7QUFDdEMsWUFBSSxRQUFRLElBQUksT0FBTyxJQUFJLEtBQUs7QUFFaEMsZ0JBQVEsSUFBSSxPQUFPLFVBQVUsUUFBUSxJQUFJLEVBQUUsQ0FBQztBQUU1QyxlQUFPLGdCQUFnQixPQUFPLFlBQVksU0FBUztNQUNyRDtBQUVBLGdCQUFVLGFBQWEsTUFBTTtBQUU3QixrQkFBWSxVQUFVLE9BQU8sU0FBVSxLQUFLO0FBQzFDLFlBQUksU0FBUyxPQUFPLEtBQUssS0FBSyxNQUFNLEdBQUc7QUFFdkMsWUFBSSxPQUFRLFFBQU8sU0FBUyxZQUFZLFFBQVEsSUFBSTtBQUNwRCxlQUFPO01BQ1Q7QUFFQSxrQkFBWSxVQUFVLE9BQU8sT0FBTyxJQUFJLFNBQVUsS0FBSyxjQUFjO0FBQ25FLFlBQUksT0FBTyxpQkFBaUIsVUFBVTtBQUNwQyxjQUFJLFNBQVMsUUFBUSxJQUFJLElBQUk7QUFFN0IsaUJBQU8sT0FBTyxPQUFPLE9BQU8sRUFBRSxLQUFLLE1BQU0sS0FBSyxhQUFhLFFBQVEsZ0JBQWdCLFNBQVUsR0FBRyxNQUFNO0FBQ3BHLG1CQUFPLE1BQU0sT0FBTyxJQUFJO1VBQzFCLENBQUMsQ0FBQztRQUNKLFdBQVcsT0FBTyxpQkFBaUIsWUFBWTtBQUM3QyxjQUFJLFFBQVE7QUFFWixpQkFBTyxPQUFPLE9BQU8sT0FBTyxFQUFFLEtBQUssTUFBTSxLQUFLLFdBQVk7QUFDeEQsZ0JBQUksT0FBTztBQUVYLGdCQUFJLE9BQU8sS0FBSyxLQUFLLFNBQVMsQ0FBQyxNQUFNLFVBQVU7QUFDN0MscUJBQU8sQ0FBQyxFQUFFLE1BQU0sS0FBSyxJQUFJO0FBQ3pCLG1CQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssQ0FBQztZQUNwQztBQUVBLG1CQUFPLGFBQWEsTUFBTSxNQUFNLElBQUk7VUFDdEMsQ0FBQztRQUNILE9BQU87QUFDTCxpQkFBTyxPQUFPLE9BQU8sT0FBTyxFQUFFLEtBQUssTUFBTSxLQUFLLFlBQVk7UUFDNUQ7TUFDRjtBQUVBLGVBQVMsWUFBWSxRQUFRLElBQUk7QUFDL0IsWUFBSSxJQUFJLFFBQVEsSUFBSSxFQUFFO0FBRXRCLGVBQU8sT0FBTyxLQUFLLENBQUMsRUFBRSxPQUFPLFNBQVUsUUFBUSxNQUFNO0FBQ25ELGlCQUFPLElBQUksSUFBSSxPQUFPLEVBQUUsSUFBSSxDQUFDO0FBQzdCLGlCQUFPO1FBQ1QsR0FBRyx1QkFBTyxPQUFPLElBQUksQ0FBQztNQUN4QjtBQUVBLGFBQU8sWUFBWSxNQUFNLE1BQU0sU0FBUztJQUMxQztBQUVBLGFBQVMsZ0JBQWdCLFVBQVUsYUFBYTtBQUM5QyxVQUFJLEVBQUUsb0JBQW9CLGNBQWM7QUFDdEMsY0FBTSxJQUFJLFVBQVUsbUNBQW1DO01BQ3pEO0lBQ0Y7QUFFQSxhQUFTLGtCQUFrQixRQUFRLE9BQU87QUFDeEMsZUFBUyxJQUFJLEdBQUcsSUFBSSxNQUFNLFFBQVEsS0FBSztBQUNyQyxZQUFJLGFBQWEsTUFBTSxDQUFDO0FBQ3hCLG1CQUFXLGFBQWEsV0FBVyxjQUFjO0FBQ2pELG1CQUFXLGVBQWU7QUFDMUIsWUFBSSxXQUFXLFdBQVksWUFBVyxXQUFXO0FBQ2pELGVBQU8sZUFBZSxRQUFRLFdBQVcsS0FBSyxVQUFVO01BQzFEO0lBQ0Y7QUFFQSxhQUFTLGFBQWEsYUFBYSxZQUFZLGFBQWE7QUFDMUQsVUFBSSxXQUFZLG1CQUFrQixZQUFZLFdBQVcsVUFBVTtBQUNuRSxVQUFJLFlBQWEsbUJBQWtCLGFBQWEsV0FBVztBQUMzRCxhQUFPO0lBQ1Q7QUFFQSxhQUFTLFVBQVUsVUFBVSxZQUFZO0FBQ3ZDLFVBQUksT0FBTyxlQUFlLGNBQWMsZUFBZSxNQUFNO0FBQzNELGNBQU0sSUFBSSxVQUFVLG9EQUFvRDtNQUMxRTtBQUVBLGVBQVMsWUFBWSxPQUFPLE9BQU8sY0FBYyxXQUFXLFdBQVc7UUFDckUsYUFBYTtVQUNYLE9BQU87VUFDUCxVQUFVO1VBQ1YsY0FBYztRQUNoQjtNQUNGLENBQUM7QUFDRCxVQUFJLFdBQVksaUJBQWdCLFVBQVUsVUFBVTtJQUN0RDtBQUVBLGFBQVMsZ0JBQWdCLEdBQUdmLElBQUc7QUFDN0Isd0JBQWtCLE9BQU8sa0JBQWtCLFNBQVNnQixpQkFBZ0JDLElBQUdqQixLQUFHO0FBQ3hFaUIsV0FBRSxZQUFZakI7QUFDZCxlQUFPaUI7TUFDVDtBQUVBLGFBQU8sZ0JBQWdCLEdBQUdqQixFQUFDO0lBQzdCO0FBTUEsUUFBSSxRQUFxQiw0QkFBWTtBQUNuQyxlQUFTa0IsU0FBUTtBQUNmLHdCQUFnQixNQUFNQSxNQUFLO01BQzdCO0FBRUEsbUJBQWFBLFFBQU8sTUFBTSxDQUFDO1FBQ3pCLEtBQUs7UUFDTDs7Ozs7V0FLQSxTQUFTLFVBQVU7QUFDakIsbUJBQU8sVUFBVTtVQUNuQjs7Ozs7OztNQU9GLEdBQUc7UUFDRCxLQUFLO1FBQ0wsT0FBTyxTQUFTLGNBQWMsUUFBUTtBQUNwQyxpQkFBTyxPQUFPLE1BQU0sRUFBRSxFQUFFLElBQUksU0FBVSxPQUFPO0FBQzNDLG1CQUFPLE1BQU0sV0FBVztVQUMxQixDQUFDO1FBQ0g7Ozs7OztNQU9GLEdBQUc7UUFDRCxLQUFLO1FBQ0wsT0FBTyxTQUFTLFVBQVUsR0FBRztBQUMzQixpQkFBTyxDQUFDLE1BQU0sV0FBVyxDQUFDLENBQUMsS0FBSyxTQUFTLENBQUM7UUFDNUM7Ozs7Ozs7TUFRRixHQUFHO1FBQ0QsS0FBSztRQUNMLE9BQU8sU0FBUyxTQUFTLE9BQU87QUFDOUIsaUJBQU8sVUFBVSxPQUFPLEtBQUs7UUFDL0I7Ozs7Ozs7Ozs7TUFXRixHQUFHO1FBQ0QsS0FBSztRQUNMLE9BQU8sU0FBUyx1QkFBdUIsT0FBTztBQUM1QyxrQkFBUSxLQUFLLE1BQU0sS0FBSztBQUN4QixjQUFJLFNBQVMsUUFBUTtBQUVyQixpQkFBTyxRQUFRLFNBQVMsR0FBRztBQUN6Qix1QkFBVztBQUNYLHNCQUFVLFFBQVEsTUFBTztVQUMzQjtBQUVBLGNBQUksUUFBUSxDQUFDO0FBRWIsaUJBQU8sTUFBTTtBQUNYLGtCQUFNLEtBQUssU0FBUyxHQUFJO0FBQ3hCLGdCQUFJLFNBQVMsSUFBTSxZQUFXO2lCQUFPO0FBQ25DO1lBQ0Y7VUFDRjtBQUVBLGlCQUFPO1FBQ1Q7Ozs7OztNQU9GLEdBQUc7UUFDRCxLQUFLO1FBQ0wsT0FBTyxTQUFTLGdCQUFnQixHQUFHO0FBQ2pDLGlCQUFPLFVBQVUsQ0FBQyxFQUFFLE1BQU0sT0FBTyxFQUFFLFNBQVM7UUFDOUM7Ozs7OztNQU9GLEdBQUc7UUFDRCxLQUFLO1FBQ0wsT0FBTyxTQUFTLGdCQUFnQixPQUFPO0FBQ3JDLGNBQUksTUFBTTtBQUNWLGNBQUk7QUFDSixnQkFBTSxRQUFRLFNBQVUsT0FBTztBQUM3QiwyQkFBZSxNQUFNLFNBQVMsRUFBRTtBQUVoQyxnQkFBSSxhQUFhLFVBQVUsRUFBRyxnQkFBZSxNQUFNO0FBQ25ELG1CQUFPO1VBQ1QsQ0FBQztBQUNELGlCQUFPLFNBQVMsS0FBSyxFQUFFO1FBQ3pCOzs7Ozs7O01BUUYsR0FBRztRQUNELEtBQUs7UUFDTCxPQUFPLFNBQVMsY0FBYyxRQUFRLGFBQWE7QUFDakQsd0JBQWMsZUFBZTtBQUM3QixjQUFJLFlBQVksT0FBTyxTQUFTLEVBQUU7QUFFbEMsY0FBSSxVQUFVLFNBQVMsR0FBRztBQUV4Qix3QkFBWSxNQUFNO1VBQ3BCO0FBR0EsY0FBSSxXQUFXLFVBQVUsTUFBTSxPQUFPO0FBRXRDLHFCQUFXLFNBQVMsSUFBSSxTQUFVLE1BQU07QUFDdEMsbUJBQU8sU0FBUyxNQUFNLEVBQUU7VUFDMUIsQ0FBQztBQUVELGNBQUksU0FBUyxTQUFTLGFBQWE7QUFDakMsbUJBQU8sY0FBYyxTQUFTLFNBQVMsR0FBRztBQUN4Qyx1QkFBUyxRQUFRLENBQUM7WUFDcEI7VUFDRjtBQUVBLGlCQUFPO1FBQ1Q7Ozs7OztNQU9GLEdBQUc7UUFDRCxLQUFLO1FBQ0wsT0FBTyxTQUFTLFFBQVEsT0FBTztBQUM3QixjQUFJLE1BQU0sUUFBUSxLQUFLLEVBQUcsUUFBTztBQUNqQyxpQkFBTyxDQUFDLEtBQUs7UUFDZjs7Ozs7O01BT0YsR0FBRztRQUNELEtBQUs7UUFDTCxPQUFPLFNBQVMsZ0JBQWdCLFVBQVU7QUFFeEMscUJBQVcsV0FBVyxNQUFNLE1BQU07QUFDbEMsaUJBQU8sS0FBSyxNQUFNLFdBQVcsTUFBTSxHQUFHO1FBQ3hDOzs7Ozs7O01BUUYsR0FBRztRQUNELEtBQUs7UUFDTCxPQUFPLFNBQVMsZ0JBQWdCLFVBQVU7QUFDeEMsY0FBSSxNQUFNLFFBQVEsUUFBUSxHQUFHO0FBRTNCLG1CQUFPLFNBQVMsSUFBSSxTQUFVLE9BQU87QUFDbkMscUJBQU9BLE9BQU0sZ0JBQWdCLEtBQUs7WUFDcEMsQ0FBQyxFQUFFLE9BQU8sU0FBVSxHQUFHLEdBQUc7QUFDeEIscUJBQU8sSUFBSTtZQUNiLEdBQUcsQ0FBQztVQUNOO0FBRUEscUJBQVcsU0FBUyxTQUFTO0FBRTdCLGNBQUksU0FBUyxZQUFZLEVBQUUsT0FBTyxDQUFDLE1BQU0sS0FBSztBQUU1QyxtQkFBTyxTQUFTLFNBQVMsVUFBVSxDQUFDLENBQUM7VUFDdkM7QUFHQSxjQUFJLGVBQWVBLE9BQU0sZ0JBQWdCLFVBQVUscUJBQXFCO0FBQ3hFLGNBQUksZUFBZSxlQUFlQSxPQUFNLHNCQUFzQixRQUFRO0FBQ3RFLGlCQUFPQSxPQUFNLGtCQUFrQixZQUFZO1FBQzdDOzs7Ozs7Ozs7TUFVRixHQUFHO1FBQ0QsS0FBSztRQUNMLE9BQU8sU0FBUyxrQkFBa0IsTUFBTTtBQUN0QyxjQUFJLGNBQWMsS0FBSyxNQUFNLElBQUk7QUFDakMsaUJBQU8sS0FBSyxJQUFJLGNBQWMsSUFBSSxJQUFJLE9BQVcsY0FBYztRQUNqRTs7Ozs7Ozs7OztNQVdGLEdBQUc7UUFDRCxLQUFLO1FBQ0wsT0FBTyxTQUFTLGlCQUFpQixNQUFNO0FBQ3JDLGNBQUksY0FBYyxLQUFLLE1BQU0sSUFBSTtBQUNqQyxpQkFBTyxjQUFjO1FBQ3ZCOzs7Ozs7O01BUUYsR0FBRztRQUNELEtBQUs7UUFDTCxPQUFPLFNBQVMsc0JBQXNCLFVBQVU7QUFHOUMsY0FBSSxhQUFhLElBQUssUUFBTztBQUM3QixjQUFJLFFBQVEsU0FBUyxNQUFvQiw0QkFBWSxnQ0FBZ0M7WUFDbkYsUUFBUTtZQUNSLE1BQU07WUFDTixRQUFRO1VBQ1YsQ0FBQyxDQUFDO0FBRUYsY0FBSSxPQUFPO0FBQ1QsZ0JBQUksT0FBTyxPQUFPLE1BQU0sT0FBTyxJQUFJO0FBRW5DLGdCQUFJLGNBQWMsU0FBUyxNQUFNLE9BQU8sT0FBTyxPQUFPO0FBRXRELGdCQUFJLGFBQWE7QUFFZixrQkFBSSxRQUFRLE9BQU87QUFDbkIsa0JBQUkscUJBQXFCLElBQUk7QUFDN0Isa0JBQUksZ0JBQWdCLE1BQU0sUUFDdEIsU0FBUyxjQUFjLFFBQ3ZCLFNBQVMsY0FBYztBQUUzQixrQkFBSSxRQUFRO0FBQ1Ysb0JBQUksZUFBZSxPQUFPO0FBQzFCLG9CQUFJLFVBQVUsS0FBSyxJQUFJLEdBQUcsWUFBWTtBQUN0QyxxQ0FBcUIscUJBQXFCLHVCQUF1QixVQUFVLEtBQUs7Y0FDbEY7QUFFQSxrQkFBSSxPQUFPLFdBQVcsVUFBVTtBQUM5QixvQkFBSSxVQUFVLHFCQUFxQjtBQUVuQyxvQkFBSSxnQkFBZ0IsT0FBTyxVQUFVLEdBQUc7QUFDeEMscUNBQXFCLFVBQVU7Y0FDakM7QUFFQSxxQkFBTztZQUNUO1VBQ0Y7QUFFQSxnQkFBTSxJQUFJLE1BQU0sV0FBVywyQkFBMkI7UUFDeEQ7TUFDRixDQUFDLENBQUM7QUFFRixhQUFPQTtJQUNULEdBQUU7QUFRRixRQUFJLGNBQTJCLDRCQUFZO0FBQ3pDLGVBQVNDLGFBQVksUUFBUTtBQUMzQix3QkFBZ0IsTUFBTUEsWUFBVztBQUdqQyxpQkFBUyxPQUFPLE9BQU87VUFDckIsU0FBUztVQUNULFdBQVc7VUFDWCxVQUFVO1VBQ1YsTUFBTTtRQUNSLEdBQUcsTUFBTTtBQUNULGFBQUssT0FBTztBQUNaLGFBQUssVUFBVSxPQUFPO0FBQ3RCLGFBQUssUUFBUSxPQUFPO0FBQ3BCLGFBQUssT0FBTyxPQUFPO0FBQ25CLGFBQUssV0FBVyxPQUFPO0FBQ3ZCLGFBQUssWUFBWSxPQUFPO0FBQ3hCLGFBQUssYUFBYSxNQUFNLFNBQVMsS0FBSyxLQUFLO0FBQzNDLGFBQUssT0FBTztBQUNaLGFBQUssUUFBUTtBQUNiLGFBQUssT0FBTyxPQUFPO01BQ3JCO0FBUUEsbUJBQWFBLGNBQWEsQ0FBQztRQUN6QixLQUFLO1FBQ0wsT0FBTyxTQUFTLFVBQVUsT0FBTyxnQkFBZ0I7QUFDL0MsZUFBSyxPQUFPLENBQUM7QUFFYixjQUFJLEtBQUssV0FBVztBQUNsQixpQkFBSyxPQUFPLE1BQU0sa0JBQWtCLEtBQUssU0FBUztBQUVsRCxnQkFBSSxNQUFNLGVBQWUsR0FBRztBQUMxQixtQkFBSyxRQUFRLEtBQUs7WUFDcEI7VUFDRixPQUFPO0FBQ0wsaUJBQUssUUFBUSxNQUFNLGdCQUFnQixLQUFLLElBQUk7QUFDNUMsaUJBQUssT0FBTyxNQUFNLGtCQUFrQixNQUFNLGNBQWMsS0FBSyxLQUFLO1VBQ3BFO0FBRUEsZUFBSywrQkFBK0IsTUFBTSxrQkFBa0IsS0FBSyxRQUFRLGNBQWM7QUFDdkYsZUFBSyxPQUFPLE1BQU0sdUJBQXVCLEtBQUssNEJBQTRCLEVBQUUsT0FBTyxLQUFLLGNBQWMsR0FBRyxLQUFLLFlBQVksTUFBTSxnQkFBZ0IsS0FBSyxRQUFRLENBQUM7QUFDOUosaUJBQU87UUFDVDs7Ozs7OztNQVFGLEdBQUc7UUFDRCxLQUFLO1FBQ0wsT0FBTyxTQUFTLGdCQUFnQjtBQUM5QixpQkFBTyxNQUFNLEtBQUssVUFBVTtRQUM5QjtNQUNGLENBQUMsQ0FBQztBQUVGLGFBQU9BO0lBQ1QsR0FBRTtBQVFGLFFBQUksZUFBNEIsNEJBQVk7QUFDMUMsZUFBU0MsY0FBYSxRQUFRO0FBQzVCLHdCQUFnQixNQUFNQSxhQUFZO0FBR2xDLGlCQUFTLE9BQU8sT0FBTztVQUNyQixTQUFTO1VBQ1QsVUFBVTtVQUNWLE1BQU07UUFDUixHQUFHLE1BQU07QUFDVCxhQUFLLE9BQU87QUFDWixhQUFLLFVBQVUsT0FBTztBQUN0QixhQUFLLFFBQVEsT0FBTztBQUNwQixhQUFLLFdBQVcsT0FBTztBQUN2QixhQUFLLFdBQVcsT0FBTztBQUN2QixhQUFLLGFBQWEsTUFBTSxTQUFTLEtBQUssS0FBSztBQUMzQyxhQUFLLE9BQU8sT0FBTztBQUNuQixhQUFLLFFBQVEsTUFBTSxnQkFBZ0IsS0FBSyxRQUFRO0FBQ2hELGFBQUssT0FBTyxPQUFPO01BQ3JCO0FBUUEsbUJBQWFBLGVBQWMsQ0FBQztRQUMxQixLQUFLO1FBQ0wsT0FBTyxTQUFTLFVBQVUsT0FBTyxnQkFBZ0I7QUFDL0MsY0FBSSxLQUFLLFNBQVMsTUFBTTtBQUN0QixpQkFBSyxPQUFPLE1BQU0sa0JBQWtCLEtBQUssUUFBUSxNQUFNLFdBQVc7VUFDcEU7QUFFQSxlQUFLLCtCQUErQixNQUFNLGtCQUFrQixLQUFLLFFBQVEsY0FBYztBQUN2RixlQUFLLE9BQU8sTUFBTSx1QkFBdUIsS0FBSyw0QkFBNEIsRUFBRSxPQUFPLEtBQUssY0FBYyxHQUFHLEtBQUssWUFBWSxNQUFNLGdCQUFnQixLQUFLLFFBQVEsQ0FBQztBQUM5SixpQkFBTztRQUNUOzs7Ozs7O01BUUYsR0FBRztRQUNELEtBQUs7UUFDTCxPQUFPLFNBQVMsZ0JBQWdCO0FBQzlCLGlCQUFPLE1BQU0sS0FBSyxVQUFVO1FBQzlCO01BQ0YsQ0FBQyxDQUFDO0FBRUYsYUFBT0E7SUFDVCxHQUFFO0FBUUYsUUFBSSxZQUF5Qiw0QkFBWTtBQUN2QyxlQUFTQyxXQUFVLFFBQVE7QUFDekIsd0JBQWdCLE1BQU1BLFVBQVM7QUFHL0IsaUJBQVMsT0FBTyxPQUFPO1VBQ3JCLFNBQVM7VUFDVCxRQUFRO1VBQ1IsWUFBWTtVQUNaLFdBQVc7VUFDWCxVQUFVO1VBQ1YsTUFBTTtRQUNSLEdBQUcsTUFBTTtBQUNULGFBQUssT0FBTyxDQUFDO0FBQ2IsYUFBSyxPQUFPO0FBQ1osYUFBSyxRQUFRLE1BQU0sUUFBUSxPQUFPLEtBQUs7QUFDdkMsYUFBSyxVQUFVLE9BQU87QUFDdEIsYUFBSyxXQUFXLE9BQU87QUFDdkIsYUFBSyxRQUFRLE9BQU87QUFDcEIsYUFBSyxTQUFTLE9BQU87QUFDckIsYUFBSyxhQUFhLE9BQU87QUFDekIsYUFBSyxZQUFZLE9BQU87QUFDeEIsYUFBSyxXQUFXLE9BQU87QUFDdkIsYUFBSyxPQUFPLE9BQU87QUFDbkIsYUFBSyxlQUFlLE1BQU0sZ0JBQWdCLEtBQUssUUFBUTtBQUN2RCxhQUFLLGVBQWUsTUFBTSxnQkFBZ0IsS0FBSyxJQUFJO0FBQ25ELGFBQUssU0FBUyxDQUFDO01BQ2pCO0FBT0EsbUJBQWFBLFlBQVcsQ0FBQztRQUN2QixLQUFLO1FBQ0wsT0FBTyxTQUFTLFlBQVk7QUFDMUIsY0FBSSxRQUFRO0FBR1osZUFBSyxPQUFPLENBQUM7QUFDYixlQUFLO0FBQ0wsZUFBSztBQUVMLGNBQUksS0FBSyxPQUFPO0FBQ2QsZ0JBQUksZ0JBQWdCO0FBQ3BCLGlCQUFLLFFBQVEsTUFBTSxRQUFRLEtBQUssS0FBSztBQUNyQyxpQkFBSyxNQUFNLFFBQVEsU0FBVSxPQUFPO0FBQ2xDLGtCQUFJLFlBQVksSUFBSUEsV0FBVTtnQkFDNUIsT0FBTyxNQUFNO2dCQUNiLFVBQVUsTUFBTTtjQUNsQixDQUFDO0FBQ0Qsb0JBQU0sT0FBTyxNQUFNLEtBQUssT0FBTyxVQUFVLElBQUk7WUFDL0MsQ0FBQztVQUNIO0FBR0EsY0FBSSxDQUFDLEtBQUssWUFBWTtBQUVwQixxQkFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLFFBQVEsS0FBSztBQUVwQyxtQkFBSyxNQUFNLFFBQVEsU0FBVXJCLElBQUcsR0FBRztBQUNqQyxvQkFBSSxLQUFLLEdBQUc7QUFDVixzQkFBSSxZQUFZLElBQUksWUFBWTtvQkFDOUIsU0FBUyxNQUFNO29CQUNmLE1BQU0sTUFBTTtvQkFDWixVQUFVLE1BQU07b0JBQ2hCLE9BQU9BO29CQUNQLFdBQVcsTUFBTTtrQkFDbkIsQ0FBQztnQkFDSCxPQUFPO0FBR0wsc0JBQUksWUFBWSxJQUFJLFlBQVk7b0JBQzlCLFNBQVMsTUFBTTtvQkFDZixNQUFNO29CQUNOLFVBQVUsTUFBTTtvQkFDaEIsT0FBT0E7b0JBQ1AsV0FBVyxNQUFNO2tCQUNuQixDQUFDO2dCQUNIO0FBRUEsc0JBQU0sT0FBTyxLQUFLLFNBQVM7Y0FDN0IsQ0FBQztBQUVELG1CQUFLLE1BQU0sUUFBUSxTQUFVQSxJQUFHLEdBQUc7QUFDakMsb0JBQUksS0FBSyxHQUFHO0FBRVYsc0JBQUksYUFBYSxJQUFJLGFBQWE7b0JBQ2hDLFNBQVMsTUFBTTtvQkFDZixVQUFVLE1BQU07b0JBQ2hCLFVBQVUsTUFBTTtvQkFDaEIsT0FBT0E7b0JBQ1AsTUFBTSxNQUFNLGNBQWMsT0FBTyxNQUFNLGdCQUFnQixNQUFNLFFBQVEsSUFBSSxNQUFNLFlBQVk7a0JBQzdGLENBQUM7Z0JBQ0gsT0FBTztBQUdMLHNCQUFJLGFBQWEsSUFBSSxhQUFhO29CQUNoQyxTQUFTLE1BQU07b0JBQ2YsVUFBVTtvQkFDVixVQUFVLE1BQU07b0JBQ2hCLE9BQU9BO29CQUNQLE1BQU0sTUFBTSxjQUFjLE9BQU8sTUFBTSxnQkFBZ0IsTUFBTSxRQUFRLElBQUksTUFBTSxZQUFZO2tCQUM3RixDQUFDO2dCQUNIO0FBRUEsc0JBQU0sT0FBTyxLQUFLLFVBQVU7Y0FDOUIsQ0FBQztZQUNIO1VBQ0YsT0FBTztBQUVMLHFCQUFTLElBQUksR0FBRyxJQUFJLEtBQUssUUFBUSxLQUFLO0FBQ3BDLG1CQUFLLE1BQU0sUUFBUSxTQUFVQSxJQUFHLEdBQUc7QUFFakMsb0JBQUksWUFBWSxJQUFJLFlBQVk7a0JBQzlCLFNBQVMsTUFBTTtrQkFDZixNQUFNLElBQUksSUFBSSxJQUFJLE1BQU07O2tCQUV4QixVQUFVLE1BQU07a0JBQ2hCLE9BQU9BO2tCQUNQLFdBQVcsTUFBTTtnQkFDbkIsQ0FBQztBQUNELG9CQUFJLGFBQWEsSUFBSSxhQUFhO2tCQUNoQyxTQUFTLE1BQU07a0JBQ2YsVUFBVSxNQUFNO2tCQUNoQixVQUFVLE1BQU07a0JBQ2hCLE9BQU9BO2dCQUNULENBQUM7QUFFRCxzQkFBTSxPQUFPLEtBQUssV0FBVyxVQUFVO2NBQ3pDLENBQUM7WUFDSDtVQUNGO0FBRUEsaUJBQU87UUFDVDtNQUNGLENBQUMsQ0FBQztBQUVGLGFBQU9xQjtJQUNULEdBQUU7QUFTRixRQUFJLGNBQWMsU0FBU0MsYUFBWSxTQUFTO0FBQzlDLFVBQUksV0FBVyxHQUFHO0FBQ2hCLGVBQU8sS0FBSyxNQUFNLFNBQVMsVUFBVSxLQUFLLENBQUM7TUFDN0M7QUFFQSxhQUFPLEtBQUssTUFBTSxTQUFTLFVBQVUsS0FBSyxDQUFDO0lBQzdDO0FBRUEsUUFBSSxpQkFBaUIsU0FBU0MsZ0JBQWUsUUFBUTtBQUNuRCxzQkFBZ0IsTUFBTUEsZUFBYztBQUVwQyxXQUFLLE9BQU87QUFDWixVQUFJLFNBQVMsWUFBWSxPQUFPLElBQUk7QUFDcEMsVUFBSSxVQUFVLE9BQU8sV0FBVztBQUNoQyxVQUFJLFdBQVcsU0FBUztBQUN4QixVQUFJLFdBQVcsVUFBVSxJQUFJO0FBQzdCLFdBQUssT0FBTyxNQUFNLHVCQUF1QixDQUFJLEVBQUUsT0FBTyxVQUFVLG9CQUFvQixTQUFTLFVBQVUsUUFBUTtJQUNqSDtBQVFBLFFBQUkscUJBQXFCLFNBQVNDLG9CQUFtQixRQUFRO0FBQzNELHNCQUFnQixNQUFNQSxtQkFBa0I7QUFFeEMsV0FBSyxPQUFPO0FBRVosV0FBSyxPQUFPLE1BQU0sdUJBQXVCLENBQUksRUFBRSxPQUFPLFVBQVUsdUJBQXVCLE9BQU8sVUFBVTtJQUMxRztBQVFBLFFBQUksd0JBQXdCLFNBQVNDLHVCQUFzQixRQUFRO0FBQ2pFLHNCQUFnQixNQUFNQSxzQkFBcUI7QUFFM0MsV0FBSyxPQUFPO0FBRVosV0FBSyxPQUFPLE1BQU0sdUJBQXVCLENBQUksRUFBRSxPQUFPLFVBQVUsMEJBQTBCLE9BQU8sa0JBQWtCLE9BQU8sZUFBZTtJQUMzSTtBQVFBLFFBQUksaUJBQWlCLFNBQVNDLGdCQUFlLE1BQU07QUFDakQsc0JBQWdCLE1BQU1BLGVBQWM7QUFFcEMsV0FBSyxPQUFPO0FBQ1osVUFBSSxZQUFZLE1BQU0sY0FBYyxJQUFJO0FBRXhDLFdBQUssT0FBTyxNQUFNLHVCQUF1QixDQUFJLEVBQUU7UUFBTyxVQUFVO1FBQWUsVUFBVTtRQUFtQixNQUFNLHVCQUF1QixVQUFVLE1BQU07O1FBQ3pKOztNQUNBO0lBQ0Y7QUFRQSxRQUFJLGdCQUFnQixTQUFTQyxlQUFjLE1BQU07QUFDL0Msc0JBQWdCLE1BQU1BLGNBQWE7QUFFbkMsV0FBSyxPQUFPO0FBQ1osVUFBSSxZQUFZLE1BQU0sY0FBYyxJQUFJO0FBRXhDLFdBQUssT0FBTyxNQUFNLHVCQUF1QixDQUFJLEVBQUU7UUFBTyxVQUFVO1FBQWUsVUFBVTtRQUFnQixNQUFNLHVCQUF1QixVQUFVLE1BQU07O1FBQ3RKOztNQUNBO0lBQ0Y7QUFPQSxRQUFJLGdCQUFnQixTQUFTQyxpQkFBZ0I7QUFDM0Msc0JBQWdCLE1BQU1BLGNBQWE7QUFFbkMsV0FBSyxPQUFPO0FBRVosV0FBSyxPQUFPLE1BQU0sdUJBQXVCLENBQUksRUFBRSxPQUFPLFVBQVUsZUFBZSxVQUFVLG9CQUFvQjtJQUMvRztBQVFBLFFBQUksc0JBQXNCLFNBQVNDLHFCQUFvQixNQUFNO0FBQzNELHNCQUFnQixNQUFNQSxvQkFBbUI7QUFFekMsV0FBSyxPQUFPO0FBQ1osVUFBSSxZQUFZLE1BQU0sY0FBYyxJQUFJO0FBRXhDLFdBQUssT0FBTyxNQUFNLHVCQUF1QixDQUFJLEVBQUU7UUFBTyxVQUFVO1FBQWUsVUFBVTtRQUF5QixNQUFNLHVCQUF1QixVQUFVLE1BQU07O1FBQy9KOztNQUNBO0lBQ0Y7QUFPQSxRQUFJLG9CQUFvQixTQUFTQyxtQkFBa0IsSUFBSSxJQUFJO0FBQ3pELHNCQUFnQixNQUFNQSxrQkFBaUI7QUFFdkMsV0FBSyxPQUFPO0FBQ1osVUFBSSxPQUFPLE1BQU07QUFDakIsV0FBSyxNQUFNO0FBRVgsVUFBSSxPQUFPLE9BQU8sYUFBYTtBQUM3QixZQUFJLFNBQVMsQ0FBQyxDQUFDLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssTUFBTSxJQUFJLEdBQUcsQ0FBQyxNQUFNLE1BQU0sTUFBTSxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLE1BQU0sTUFBTSxNQUFNLE1BQU0sSUFBSSxDQUFDO0FBQ3RMLFlBQUksU0FBUyxHQUFHO0FBQ2hCLFlBQUk1QixTQUFPLE1BQU07QUFDakIsWUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxZQUFZLEVBQUcsUUFBTztBQUUxQyxZQUFJLFNBQVMsR0FBRztBQUNkLGtCQUFRLEdBQUcsT0FBTyxTQUFTLENBQUMsR0FBRztZQUM3QixLQUFLO0FBQ0gscUJBQU87QUFDUEEsY0FBQUEsU0FBTyxHQUFHLE9BQU8sQ0FBQyxFQUFFLFlBQVk7QUFDaENBLGNBQUFBLFNBQU9BLE9BQUssT0FBTyxHQUFHLFVBQVUsR0FBRyxTQUFTLENBQUMsQ0FBQztBQUM5QztZQUVGLEtBQUs7QUFDSCxxQkFBTztBQUNQQSxjQUFBQSxTQUFPLEdBQUcsT0FBTyxDQUFDLEVBQUUsWUFBWTtBQUNoQ0EsY0FBQUEsU0FBT0EsT0FBSyxPQUFPLEdBQUcsVUFBVSxHQUFHLFNBQVMsQ0FBQyxDQUFDO0FBQzlDO1lBRUYsS0FBSztBQUNILHFCQUFPO0FBQ1BBLGNBQUFBLFNBQU8sR0FBRyxPQUFPLENBQUMsRUFBRSxZQUFZO0FBQ2hDQSxjQUFBQSxTQUFPQSxPQUFLLE9BQU8sR0FBRyxVQUFVLEdBQUcsU0FBUyxDQUFDLENBQUM7QUFDOUM7WUFFRixLQUFLO0FBQ0gscUJBQU87QUFDUEEsY0FBQUEsU0FBTyxHQUFHLE9BQU8sQ0FBQyxFQUFFLFlBQVk7QUFDaENBLGNBQUFBLFNBQU9BLE9BQUssT0FBTyxHQUFHLFVBQVUsR0FBRyxTQUFTLENBQUMsQ0FBQztBQUM5QztVQUNKO1FBQ0Y7QUFFQSxZQUFJLGFBQWEsT0FBTyxJQUFJLEVBQUUsUUFBUUEsTUFBSTtBQUMxQyxhQUFLLGVBQWUsS0FBSyxJQUFJLGFBQWE7TUFDNUM7QUFHQSxXQUFLLE9BQU8sTUFBTSx1QkFBdUIsQ0FBSSxFQUFFO1FBQU8sVUFBVTtRQUFlLFVBQVU7UUFBdUIsQ0FBQyxDQUFJOztRQUNySCxNQUFNLGNBQWMsSUFBSSxDQUFDOztRQUN6QixNQUFNLGNBQWMsTUFBTSxDQUFDOztNQUMzQjtJQUNGO0FBUUEsUUFBSSxhQUFhLFNBQVM2QixZQUFXLE1BQU07QUFDekMsc0JBQWdCLE1BQU1BLFdBQVU7QUFFaEMsV0FBSyxPQUFPO0FBQ1osVUFBSSxZQUFZLE1BQU0sY0FBYyxJQUFJO0FBRXhDLFdBQUssT0FBTyxNQUFNLHVCQUF1QixDQUFJLEVBQUU7UUFBTyxVQUFVO1FBQWUsVUFBVTtRQUFlLE1BQU0sdUJBQXVCLFVBQVUsTUFBTTs7UUFDcko7O01BQ0E7SUFDRjtBQVFBLFFBQUksY0FBYyxTQUFTQyxhQUFZLE1BQU07QUFDM0Msc0JBQWdCLE1BQU1BLFlBQVc7QUFFakMsV0FBSyxPQUFPO0FBQ1osVUFBSSxZQUFZLE1BQU0sY0FBYyxJQUFJO0FBRXhDLFdBQUssT0FBTyxNQUFNLHVCQUF1QixDQUFJLEVBQUU7UUFBTyxVQUFVO1FBQWUsVUFBVTtRQUFnQixNQUFNLHVCQUF1QixVQUFVLE1BQU07O1FBQ3RKOztNQUNBO0lBQ0Y7QUFRQSxRQUFJLGFBQWEsU0FBU0MsWUFBVyxLQUFLO0FBQ3hDLHNCQUFnQixNQUFNQSxXQUFVO0FBRWhDLFdBQUssT0FBTztBQUNaLFVBQUlDLFNBQVEsS0FBSyxNQUFNLE1BQVcsR0FBRztBQUVyQyxXQUFLLE9BQU8sTUFBTSx1QkFBdUIsQ0FBSSxFQUFFO1FBQU8sVUFBVTtRQUFlLFVBQVU7UUFBZSxDQUFDLENBQUk7O1FBQzdHLE1BQU0sY0FBY0EsUUFBTyxDQUFDOztNQUM1QjtJQUNGO0FBUUEsUUFBSSxZQUFZLFNBQVNDLFdBQVUsTUFBTTtBQUN2QyxzQkFBZ0IsTUFBTUEsVUFBUztBQUUvQixXQUFLLE9BQU87QUFDWixVQUFJLFlBQVksTUFBTSxjQUFjLElBQUk7QUFFeEMsV0FBSyxPQUFPLE1BQU0sdUJBQXVCLENBQUksRUFBRTtRQUFPLFVBQVU7UUFBZSxVQUFVO1FBQWMsTUFBTSx1QkFBdUIsVUFBVSxNQUFNOztRQUNwSjs7TUFDQTtJQUNGO0FBT0EsUUFBSSxxQkFBcUIsU0FBU0Msb0JBQW1CLFdBQVcsYUFBYSxtQkFBbUIsbUJBQW1CO0FBQ2pILHNCQUFnQixNQUFNQSxtQkFBa0I7QUFFeEMsV0FBSyxPQUFPO0FBRVosV0FBSyxPQUFPLE1BQU0sdUJBQXVCLENBQUksRUFBRTtRQUFPLFVBQVU7UUFBZSxVQUFVO1FBQXdCLENBQUMsQ0FBSTs7UUFDdEgsTUFBTSxjQUFjLFdBQVcsQ0FBQzs7UUFDaEMsTUFBTSxjQUFjLEtBQUssS0FBSyxXQUFXLEdBQUcsQ0FBQzs7UUFDN0MsTUFBTSxjQUFjLHFCQUFxQixJQUFJLENBQUM7O1FBQzlDLE1BQU0sY0FBYyxxQkFBcUIsR0FBRyxDQUFDOztNQUM3QztJQUNGO0FBUUEsUUFBSSxpQkFBaUIsU0FBU0MsZ0JBQWUsTUFBTTtBQUNqRCxzQkFBZ0IsTUFBTUEsZUFBYztBQUVwQyxXQUFLLE9BQU87QUFDWixVQUFJLFlBQVksTUFBTSxjQUFjLElBQUk7QUFFeEMsV0FBSyxPQUFPLE1BQU0sdUJBQXVCLENBQUksRUFBRTtRQUFPLFVBQVU7UUFBZSxVQUFVO1FBQW9CLE1BQU0sdUJBQXVCLFVBQVUsTUFBTTs7UUFDMUo7O01BQ0E7SUFDRjtBQVFBLFFBQUksUUFBcUIsNEJBQVk7QUFDbkMsZUFBU0MsU0FBUTtBQUNmLHdCQUFnQixNQUFNQSxNQUFLO0FBRTNCLGFBQUssT0FBTyxVQUFVO0FBQ3RCLGFBQUssT0FBTyxDQUFDO0FBQ2IsYUFBSyxPQUFPLENBQUM7QUFDYixhQUFLLFNBQVMsQ0FBQztBQUNmLGFBQUsscUJBQXFCLENBQUM7QUFHM0IsYUFBSyxjQUFjO01BQ3JCO0FBV0EsbUJBQWFBLFFBQU8sQ0FBQztRQUNuQixLQUFLO1FBQ0wsT0FBTyxTQUFTLFNBQVMsUUFBUSxhQUFhO0FBQzVDLGNBQUksUUFBUTtBQUVaLGdCQUFNLFFBQVEsTUFBTSxFQUFFLFFBQVEsU0FBVSxPQUFPLEdBQUc7QUFDaEQsZ0JBQUksaUJBQWlCLFdBQVc7QUFFOUIsa0JBQUksT0FBTyxnQkFBZ0IsWUFBWTtBQUNyQyxvQkFBSSxhQUFhLFlBQVksR0FBRyxLQUFLO0FBRXJDLG9CQUFJLFFBQVEsVUFBVSxNQUFNLFVBQVU7QUFDcEMsMkJBQVMsS0FBSyxZQUFZO0FBQ3hCLDRCQUFRLEdBQUc7c0JBQ1QsS0FBSztBQUNILDhCQUFNLFVBQVUsV0FBVyxDQUFDO0FBQzVCO3NCQUVGLEtBQUs7QUFDSCw4QkFBTSxXQUFXLFdBQVcsQ0FBQztBQUM3QjtzQkFFRixLQUFLO0FBQ0gsOEJBQU0sYUFBYSxXQUFXLENBQUM7QUFDL0I7c0JBRUYsS0FBSztBQUNILDhCQUFNLFdBQVcsTUFBTSxnQkFBZ0IsV0FBVyxDQUFDLENBQUM7QUFDcEQ7b0JBQ0o7a0JBQ0Y7Z0JBQ0Y7Y0FDRjtBQUdBLGtCQUFJLE1BQU0sY0FBYyxNQUFNO0FBQzVCLHNCQUFNLG1CQUFtQixLQUFLLEtBQUs7Y0FDckMsT0FBTztBQUVMLHNCQUFNLFVBQVUsRUFBRSxPQUFPLFFBQVEsU0FBVSxHQUFHO0FBQzVDLHlCQUFPLE1BQU0sT0FBTyxLQUFLLENBQUM7Z0JBQzVCLENBQUM7Y0FDSDtZQUNGLE9BQU87QUFDTCxvQkFBTSxPQUFPLEtBQUssS0FBSztZQUN6QjtVQUNGLENBQUM7QUFDRCxpQkFBTztRQUNUOzs7OztNQU1GLEdBQUc7UUFDRCxLQUFLO1FBQ0wsT0FBTyxTQUFTLFlBQVk7QUFDMUIsY0FBSSxTQUFTO0FBSWIsZUFBSyxtQkFBbUIsV0FBVyxFQUFFLFNBQVMsSUFBSSxjQUFjLENBQUM7QUFFakUsZUFBSyxPQUFPLENBQUM7QUFDYixlQUFLLE9BQU8sQ0FBQztBQUNiLGVBQUssY0FBYztBQUNuQixjQUFJLGdCQUFnQjtBQUNwQixlQUFLLE9BQU8sUUFBUSxTQUFVLE9BQU8sWUFBWTtBQUUvQyxnQkFBSSxpQkFBaUIsZUFBZSxpQkFBaUIsY0FBYztBQUNqRSxrQkFBSSxRQUFRLE1BQU0sVUFBVSxRQUFRLGFBQWE7QUFDakQsOEJBQWdCLE1BQU0saUJBQWlCLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUUscUJBQU8sT0FBTyxPQUFPLEtBQUssT0FBTyxNQUFNLElBQUk7QUFDM0MscUJBQU8sY0FBYyxNQUFNLGtCQUFrQixNQUFNLElBQUk7WUFDekQsT0FBTztBQUNMLHFCQUFPLE9BQU8sT0FBTyxLQUFLLE9BQU8sTUFBTSxJQUFJO1lBQzdDO1VBQ0YsQ0FBQztBQUNELGVBQUssd0JBQXdCO0FBQzdCLGVBQUssT0FBTyxNQUFNLGNBQWMsS0FBSyxLQUFLLFFBQVEsQ0FBQztBQUVuRCxpQkFBTztRQUNUO01BQ0YsR0FBRztRQUNELEtBQUs7UUFDTCxPQUFPLFNBQVMsMEJBQTBCO0FBQ3hDLGNBQUksU0FBUztBQUViLGNBQUksQ0FBQyxLQUFLLG1CQUFtQixPQUFRO0FBRXJDLGVBQUssbUJBQW1CLEtBQUssU0FBVSxHQUFHLEdBQUc7QUFDM0MsbUJBQU8sRUFBRSxZQUFZLEVBQUU7VUFDekIsQ0FBQztBQUlELGVBQUssbUJBQW1CLFFBQVEsU0FBVSxXQUFXO0FBSW5ELHNCQUFVLFVBQVUsRUFBRSxPQUFPLFFBQVEsU0FBVSxHQUFHO0FBQ2hELHFCQUFPLEVBQUUsVUFBVSxNQUFNO1lBQzNCLENBQUM7QUFFRCxzQkFBVSxPQUFPLFFBQVEsU0FBVSxPQUFPO0FBQ3hDLHFCQUFPLE9BQU8saUJBQWlCLEtBQUs7WUFDdEMsQ0FBQztVQUNILENBQUM7QUFFRCxlQUFLLHFCQUFxQixDQUFDO0FBQzNCLGVBQUssVUFBVTtRQUNqQjs7Ozs7O01BT0YsR0FBRztRQUNELEtBQUs7UUFDTCxPQUFPLFNBQVMsV0FBVyxPQUFPO0FBQ2hDLGNBQUksU0FBUztBQUdiLGVBQUssVUFBVTtBQUVmLGdCQUFNLFVBQVUsRUFBRSxPQUFPLFFBQVEsU0FBVSxPQUFPO0FBQ2hELG1CQUFPLE9BQU8saUJBQWlCLEtBQUs7VUFDdEMsQ0FBQztRQUNIOzs7Ozs7TUFPRixHQUFHO1FBQ0QsS0FBSztRQUNMLE9BQU8sU0FBUyxpQkFBaUIsT0FBTztBQUV0QyxjQUFJLGlCQUFpQjtBQUVyQixtQkFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLE9BQU8sUUFBUSxLQUFLO0FBQzNDLGdCQUFJLEtBQUssT0FBTyxDQUFDLEVBQUUsT0FBTyxNQUFNLEtBQU07QUFDdEMsNkJBQWlCO1VBQ25CO0FBRUEsY0FBSSxvQkFBb0IsaUJBQWlCO0FBRXpDLGdCQUFNLFFBQVEsTUFBTSxPQUFPLEtBQUssT0FBTyxjQUFjLEVBQUU7QUFFdkQsZUFBSyxPQUFPLE9BQU8sbUJBQW1CLEdBQUcsS0FBSztBQUU5QyxtQkFBUyxJQUFJLG9CQUFvQixHQUFHLElBQUksS0FBSyxPQUFPLFFBQVEsS0FBSztBQUcvRCxpQkFBSyxPQUFPLENBQUMsRUFBRSxRQUFRLEtBQUssT0FBTyxDQUFDLEVBQUUsT0FBTyxLQUFLLE9BQU8sSUFBSSxDQUFDLEVBQUU7VUFDbEU7UUFDRjs7Ozs7O01BT0YsR0FBRztRQUNELEtBQUs7UUFDTCxPQUFPLFNBQVMsbUJBQW1CLFdBQVc7QUFDNUMsY0FBSSxTQUFTO0FBRWIsZUFBSyxPQUFPLFFBQVEsU0FBVSxPQUFPLE9BQU87QUFDMUMsZ0JBQUksTUFBTSxTQUFTLFdBQVc7QUFDNUIscUJBQU8sT0FBTyxPQUFPLE9BQU8sQ0FBQztZQUMvQjtVQUNGLENBQUM7QUFDRCxpQkFBTztRQUNUOzs7Ozs7TUFPRixHQUFHO1FBQ0QsS0FBSztRQUNMLE9BQU8sU0FBUyxTQUFTLEtBQUs7QUFDNUIsaUJBQU8sS0FBSyxTQUFTLElBQUksV0FBVyxHQUFHLENBQUM7UUFDMUM7Ozs7Ozs7OztNQVVGLEdBQUc7UUFDRCxLQUFLO1FBQ0wsT0FBTyxTQUFTLGlCQUFpQixXQUFXLGFBQWEsbUJBQW1CLG1CQUFtQjtBQUM3RixpQkFBTyxLQUFLLFNBQVMsSUFBSSxtQkFBbUIsV0FBVyxhQUFhLG1CQUFtQixpQkFBaUIsQ0FBQztRQUMzRzs7Ozs7OztNQVFGLEdBQUc7UUFDRCxLQUFLO1FBQ0wsT0FBTyxTQUFTLGdCQUFnQixJQUFJLElBQUk7QUFDdEMsaUJBQU8sS0FBSyxTQUFTLElBQUksa0JBQWtCLElBQUksRUFBRSxDQUFDO1FBQ3BEOzs7Ozs7TUFPRixHQUFHO1FBQ0QsS0FBSztRQUNMLE9BQU8sU0FBUyxRQUFRLE1BQU07QUFDNUIsaUJBQU8sS0FBSyxTQUFTLElBQUksVUFBVSxJQUFJLENBQUM7UUFDMUM7Ozs7OztNQU9GLEdBQUc7UUFDRCxLQUFLO1FBQ0wsT0FBTyxTQUFTLGFBQWEsTUFBTTtBQUNqQyxpQkFBTyxLQUFLLFNBQVMsSUFBSSxlQUFlLElBQUksQ0FBQztRQUMvQzs7Ozs7O01BT0YsR0FBRztRQUNELEtBQUs7UUFDTCxPQUFPLFNBQVMsYUFBYSxNQUFNO0FBQ2pDLGlCQUFPLEtBQUssU0FBUyxJQUFJLGVBQWUsSUFBSSxDQUFDO1FBQy9DOzs7Ozs7TUFPRixHQUFHO1FBQ0QsS0FBSztRQUNMLE9BQU8sU0FBUyxrQkFBa0IsTUFBTTtBQUN0QyxpQkFBTyxLQUFLLFNBQVMsSUFBSSxvQkFBb0IsSUFBSSxDQUFDO1FBQ3BEOzs7Ozs7TUFPRixHQUFHO1FBQ0QsS0FBSztRQUNMLE9BQU8sU0FBUyxVQUFVLE1BQU07QUFDOUIsaUJBQU8sS0FBSyxTQUFTLElBQUksWUFBWSxJQUFJLENBQUM7UUFDNUM7Ozs7OztNQU9GLEdBQUc7UUFDRCxLQUFLO1FBQ0wsT0FBTyxTQUFTLFlBQVksTUFBTTtBQUNoQyxpQkFBTyxLQUFLLFNBQVMsSUFBSSxjQUFjLElBQUksQ0FBQztRQUM5Qzs7Ozs7O01BT0YsR0FBRztRQUNELEtBQUs7UUFDTCxPQUFPLFNBQVMsU0FBUyxNQUFNO0FBQzdCLGlCQUFPLEtBQUssU0FBUyxJQUFJLFdBQVcsSUFBSSxDQUFDO1FBQzNDOzs7OztNQU1GLEdBQUc7UUFDRCxLQUFLO1FBQ0wsT0FBTyxTQUFTLGFBQWE7QUFDM0IsY0FBSSxRQUFRLElBQUksWUFBWTtZQUMxQixNQUFNLENBQUMsR0FBTSxLQUFNLEtBQU0sQ0FBSTtVQUMvQixDQUFDO0FBQ0QsaUJBQU8sS0FBSyxTQUFTLEtBQUs7UUFDNUI7Ozs7OztNQU9GLEdBQUc7UUFDRCxLQUFLO1FBQ0wsT0FBTyxTQUFTLGFBQWEsTUFBTTtBQUNqQyxpQkFBTyxLQUFLLFNBQVMsSUFBSSxlQUFlO1lBQ3RDO1VBQ0YsQ0FBQyxDQUFDO1FBQ0o7Ozs7Ozs7TUFRRixHQUFHO1FBQ0QsS0FBSztRQUNMLE9BQU8sU0FBUyxpQkFBaUIsUUFBUSxPQUFPO0FBQzlDLGlCQUFPLEtBQUssU0FBUyxJQUFJLHNCQUFzQjtZQUM3QyxrQkFBa0I7WUFDbEIsaUJBQWlCO1VBQ25CLENBQUMsQ0FBQztRQUNKO01BQ0YsQ0FBQyxDQUFDO0FBRUYsYUFBT0E7SUFDVCxHQUFFO0FBRUYsUUFBSSxVQUF1Qiw0QkFBWTtBQUNyQyxlQUFTQyxXQUFVO0FBQ2pCLHdCQUFnQixNQUFNQSxRQUFPO01BQy9CO0FBRUEsbUJBQWFBLFVBQVMsQ0FBQztRQUNyQixLQUFLO1FBQ0w7Ozs7O1dBS0EsU0FBUyxlQUFlLE9BQU87QUFDN0IsZ0JBQUksUUFBUTtBQUVaLGdCQUFJLFVBQVUsVUFBVSxTQUFTLEtBQUssVUFBVSxDQUFDLE1BQU0sU0FBWSxVQUFVLENBQUMsSUFBSTtjQUNoRix3QkFBd0I7WUFDMUI7QUFDQSxnQkFBSSxRQUFRLElBQUksTUFBTTtBQUN0QixnQkFBSSxPQUFPLENBQUM7QUFDWixrQkFBTSxVQUFVLFFBQVEsU0FBVSxVQUFVO0FBQzFDLGtCQUFJLFNBQVMsYUFBYSxLQUFLO0FBQzdCLHNCQUFNLFNBQVMsSUFBSSxVQUFVO2tCQUMzQixPQUFPLFNBQVMsS0FBSyxJQUFJLFNBQVUsT0FBTyxPQUFPO0FBQy9DLDJCQUFPLE1BQU0sYUFBYSxPQUFPLE9BQU8sVUFBVSxRQUFRLHNCQUFzQjtrQkFDbEYsQ0FBQztrQkFDRCxVQUFVLE1BQU0sZ0JBQWdCLFFBQVE7a0JBQ3hDO2dCQUNGLENBQUMsQ0FBQztBQUVGLHVCQUFPLENBQUM7Y0FDVixXQUFXLFNBQVMsYUFBYSxLQUFLO0FBR3BDLHFCQUFLLEtBQUssTUFBTSxnQkFBZ0IsUUFBUSxDQUFDO0FBQ3pDO2NBQ0Y7WUFDRixDQUFDO0FBR0QsZ0JBQUksS0FBSyxTQUFTLEdBQUc7QUFDbkIsb0JBQU0sU0FBUyxJQUFJLFVBQVU7Z0JBQzNCLE9BQU87Z0JBQ1AsVUFBVTtnQkFDVjtnQkFDQSxVQUFVO2NBQ1osQ0FBQyxDQUFDO1lBQ0o7QUFFQSxtQkFBTztVQUNUOzs7Ozs7Ozs7TUFTRixHQUFHO1FBQ0QsS0FBSztRQUNMLE9BQU8sU0FBUyxhQUFhLE9BQU8sT0FBT3JDLFFBQU07QUFDL0MsY0FBSSx5QkFBeUIsVUFBVSxTQUFTLEtBQUssVUFBVSxDQUFDLE1BQU0sU0FBWSxVQUFVLENBQUMsSUFBSTtBQUVqRyxjQUFJLGFBQWEsTUFBTSxNQUFNLEdBQUc7QUFHaEMsY0FBSSxjQUFjLFdBQVcsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxFQUFFLFFBQVEsS0FBSyxFQUFFO0FBRTVELGNBQUksd0JBQXdCO0FBQzFCLGdCQUFJO0FBRUosYUFBQyx1QkFBdUJBLE9BQUssZUFBZSxPQUFPLFFBQVEseUJBQXlCLFNBQVMsU0FBUyxxQkFBcUIsUUFBUSxTQUFVLFlBQVk7QUFDdkosa0JBQUksV0FBVyxVQUFVLE9BQU87QUFDOUIsb0JBQUksV0FBVyxTQUFTLEtBQUs7QUFDM0IsZ0NBQWM7Z0JBQ2hCLE9BQU87QUFDTCxpQ0FBZSxXQUFXO2dCQUM1QjtjQUNGO1lBQ0YsQ0FBQztVQUNIO0FBRUEsaUJBQU8sV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLGNBQWMsV0FBVyxDQUFDO1FBQ3REOzs7OztNQU1GLEdBQUc7UUFDRCxLQUFLO1FBQ0wsT0FBTyxTQUFTLGdCQUFnQkEsUUFBTTtBQUNwQyxpQkFBTyxJQUFJLE9BQU9BLE9BQUssSUFBSSxJQUFJLEtBQUssb0JBQW9CQSxPQUFLLFFBQVEsS0FBS0EsT0FBSyxTQUFTLE1BQU1BLE9BQUssT0FBTyxZQUFZO1FBQ3hIOzs7Ozs7TUFPRixHQUFHO1FBQ0QsS0FBSztRQUNMLE9BQU8sU0FBUyxvQkFBb0IsVUFBVTtBQUM1QyxrQkFBUSxVQUFVO1lBQ2hCLEtBQUs7QUFDSCxxQkFBTztZQUVULEtBQUs7QUFDSCxxQkFBTztZQUVULEtBQUs7QUFDSCxxQkFBTztZQUVUO0FBQ0UscUJBQU87VUFDWDtRQUNGO01BQ0YsQ0FBQyxDQUFDO0FBRUYsYUFBT3FDO0lBQ1QsR0FBRTtBQVFGLFFBQUksY0FBYyxTQUFTQyxhQUFZLGdCQUFnQjtBQUNyRCxzQkFBZ0IsTUFBTUEsWUFBVztBQUVqQyxXQUFLLE9BQU8sVUFBVTtBQUN0QixVQUFJLFlBQVksaUJBQWlCLElBQUksVUFBVSx1QkFBdUIsVUFBVTtBQUNoRixXQUFLLE9BQU8sVUFBVTtRQUFPLE1BQU0sY0FBYyxnQkFBZ0IsQ0FBQzs7UUFDbEUsVUFBVTtNQUFxQjtBQUMvQixXQUFLLE9BQU8sQ0FBQyxHQUFHLEdBQUcsR0FBRyxLQUFLLEtBQUssTUFBTTtJQUN4QztBQVFBLFFBQUksU0FBc0IsNEJBQVk7QUFDcEMsZUFBU0MsUUFBTyxRQUFRO0FBQ3RCLFlBQUksUUFBUTtBQUVaLHdCQUFnQixNQUFNQSxPQUFNO0FBRzVCLGlCQUFTLE1BQU0sUUFBUSxNQUFNO0FBQzdCLGFBQUssT0FBTyxDQUFDO0FBQ2IsYUFBSyxLQUFLLEtBQUssSUFBSSxZQUFZLE9BQU8sTUFBTSxDQUFDO0FBRTdDLGVBQU8sUUFBUSxTQUFVLE9BQU8sR0FBRztBQUNqQyxnQkFBTSxLQUFLLEtBQUssTUFBTSxVQUFVLENBQUM7UUFDbkMsQ0FBQztNQUNIO0FBT0EsbUJBQWFBLFNBQVEsQ0FBQztRQUNwQixLQUFLO1FBQ0wsT0FBTyxTQUFTLFlBQVk7QUFDMUIsY0FBSUMsU0FBUSxDQUFDO0FBRWIsZUFBSyxLQUFLLFFBQVEsU0FBVSxHQUFHO0FBQzdCLG1CQUFPQSxTQUFRQSxPQUFNLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUk7VUFDcEQsQ0FBQztBQUNELGlCQUFPLElBQUksV0FBV0EsTUFBSztRQUM3Qjs7Ozs7TUFNRixHQUFHO1FBQ0QsS0FBSztRQUNMLE9BQU8sU0FBUyxTQUFTO0FBQ3ZCLGNBQUksT0FBTyxTQUFTLFdBQVksUUFBTyxLQUFLLE9BQU8sYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLENBQUMsQ0FBQztBQUM3RixpQkFBTyxPQUFPLEtBQUssS0FBSyxVQUFVLENBQUMsRUFBRSxTQUFTLFFBQVE7UUFDeEQ7Ozs7O01BTUYsR0FBRztRQUNELEtBQUs7UUFDTCxPQUFPLFNBQVMsVUFBVTtBQUN4QixpQkFBTyw0QkFBNEIsS0FBSyxPQUFPO1FBQ2pEOzs7OztNQU1GLEdBQUc7UUFDRCxLQUFLO1FBQ0wsT0FBTyxTQUFTLFNBQVM7QUFDdkIsaUJBQU8sUUFBUSxPQUFPLE1BQU0sSUFBSSxPQUFPLEtBQUssVUFBVSxDQUFDLENBQUM7UUFDMUQ7TUFDRixDQUFDLENBQUM7QUFFRixhQUFPRDtJQUNULEdBQUU7QUFFRixRQUFJLE9BQU87TUFDVDtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtJQUNGO0FBRUEsV0FBTyxVQUFVO0VBQUE7QUFBQSxDQUFBO0FDM2tEakIsSUFBQSxtQkFBQTdCLFlBQUE7RUFBQSx3Q0FBQSxTQUFBLFFBQUE7QUFBQSxRQUFJLE9BQU8sQ0FBQztBQUVaLEtBQUMsU0FBUyxVQUFVO0FBRW5CLFVBQUksaUJBQW1CLFNBQVMsaUJBQW1CO0FBQ25ELFVBQUksbUJBQW1CLFNBQVMsbUJBQW1CO0FBQ25ELFVBQUksa0JBQW1CLFNBQVMsa0JBQW1CO0FBTW5ELFVBQUksT0FBTztRQUVWLHFCQUFxQixFQUFFLEdBQUUsSUFBSSxHQUFFLElBQUksR0FBRSxJQUFJLEdBQUUsSUFBSSxHQUFFLElBQUksR0FBRSxJQUFJLEdBQUUsR0FBRzs7Ozs7Ozs7O1FBVWhFLG1CQUFtQixTQUFTLEdBQUc7QUFDOUIsY0FBSSxVQUFVLDRCQUE0QixLQUFLLENBQUM7QUFDaEQsY0FBSVYsU0FBTyxRQUFRLENBQUMsRUFBRSxZQUFZLEdBQUcsYUFBYSxRQUFRLENBQUMsS0FBSyxJQUFJLFNBQVMsU0FBUyxRQUFRLENBQUMsR0FBRyxFQUFFO0FBQ3BHLGlCQUFRLEtBQUssU0FBVSxLQUFLLG9CQUFvQkEsTUFBSSxLQUFLLFdBQVcsT0FBTyxHQUFFLENBQUMsS0FBRyxNQUFJLElBQUUsTUFBTSxXQUFXO1FBQ3pHOzs7Ozs7OztRQVNBLGlCQUFpQixTQUFTRixJQUFHO0FBQzVCLGNBQUksT0FBT0EsTUFBSyxZQUFZLENBQUMsU0FBUyxLQUFLQSxFQUFDLEdBQUc7QUFFOUMsbUJBQU8sU0FBU0EsSUFBRyxFQUFFO1VBQ3RCLE9BQU87QUFFTixtQkFBTyxLQUFLLGtCQUFrQkEsRUFBQztVQUNoQztRQUNEO1FBRUEscUJBQXFCLEVBQUUsTUFBSyxLQUFLLE1BQUssTUFBTSxNQUFLLEtBQUssTUFBSyxNQUFNLE1BQUssS0FBSyxNQUFLLEtBQUssTUFBSyxNQUFNLE1BQUssS0FBSyxNQUFLLE1BQU0sTUFBSyxLQUFLLE1BQUssTUFBTSxNQUFLLElBQUk7UUFDbkosc0JBQXNCLEVBQUUsTUFBSyxNQUFNLE1BQUssTUFBTSxNQUFLLE1BQU0sTUFBSyxNQUFNLE1BQUssS0FBSzs7Ozs7Ozs7OztRQVc5RSxtQkFBbUIsU0FBUyxHQUFHLGlCQUFpQjtBQUMvQyxjQUFJLFNBQVMsR0FBRyxVQUFVLEdBQUcsVUFBVSxrQkFBa0IsbUJBQW1CO0FBQzVFLGNBQUksSUFBSSxJQUFJO0FBRVgscUJBQVMsS0FBSyxNQUFNLElBQUUsRUFBRSxJQUFJO0FBRTVCLHNCQUFVLElBQUksU0FBUztVQUN4QjtBQUdBLHFCQUFXLEtBQUssb0JBQW9CLE9BQU87QUFFM0MsY0FBSSxtQkFBbUIsU0FBUyxRQUFRLEdBQUcsSUFBSSxHQUFHO0FBQ2pELHVCQUFXLEtBQUsscUJBQXFCLFFBQVE7VUFDOUM7QUFDQSxpQkFBTyxXQUFXO1FBQ25COzs7Ozs7O1FBUUEsYUFBYSxTQUFTLEtBQUs7QUFDMUIsY0FBSSxPQUFPLEtBQUssTUFBTSxNQUFXLEdBQUc7QUFDcEMsY0FBSSxNQUFJLENBQUM7QUFDVCxhQUFHO0FBQ0YsZ0JBQUksUUFBUSxPQUFPLEdBQUk7QUFDdkIscUJBQVM7VUFDVixTQUFTO0FBQ1QsaUJBQU8sSUFBSSxTQUFTLEdBQUc7QUFDdEIsZ0JBQUksS0FBSyxDQUFDO1VBQ1g7QUFDQSxpQkFBTztRQUNSOzs7Ozs7O1FBUUEsYUFBYSxTQUFTLE1BQU07QUFDM0IsY0FBSUYsTUFBSTtBQUNSLGNBQUksT0FBTyxLQUFLLENBQUMsS0FBSyxhQUFhO0FBQ2xDQSxZQUFBQSxNQUFJO0FBQ0oscUJBQVMsSUFBRSxHQUFHLElBQUUsS0FBSyxTQUFPLEdBQUcsS0FBSyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7QUFDaERBLGNBQUFBLE9BQUssS0FBSyxDQUFDLEtBQUs7WUFDakI7VUFDRDtBQUNBLGlCQUFPLEtBQUssTUFBTSxNQUFXLElBQUk7UUFDbEM7Ozs7Ozs7O1FBU0EsV0FBVyxTQUFTLFdBQVc7QUFDOUIsaUJBQU8sT0FBTyxhQUFhLE1BQU0sTUFBTSxTQUFTO1FBQ2pEOzs7Ozs7Ozs7OztRQVlBLFdBQVcsU0FBVSxLQUFLLFlBQVk7QUFDckMsY0FBSSxZQUFZO0FBQ2YsbUJBQVEsSUFBSSxTQUFTLElBQUssWUFBWTtBQUFFLG9CQUFNLE1BQU07WUFBSztVQUMxRDtBQUVBLGNBQUksUUFBUSxDQUFDO0FBQ2IsbUJBQVMsSUFBRSxJQUFJLFNBQU8sR0FBRyxLQUFHLEdBQUcsSUFBSSxJQUFFLEdBQUc7QUFDdkMsZ0JBQUksUUFBUSxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFFLENBQUMsSUFBSSxJQUFJLENBQUM7QUFDL0Msa0JBQU0sUUFBUSxTQUFTLE9BQU8sRUFBRSxDQUFDO1VBQ2xDO0FBRUEsaUJBQU87UUFDUjs7Ozs7Ozs7O1FBVUEsbUJBQW1CLFNBQVMsT0FBTztBQUNsQyxjQUFJLFNBQVMsUUFBUTtBQUVyQixpQkFBTyxRQUFRLFNBQVMsR0FBRztBQUMxQix1QkFBVztBQUNYLHNCQUFZLFFBQVEsTUFBUTtVQUM3QjtBQUVBLGNBQUksUUFBUSxDQUFDO0FBQ2IsaUJBQU8sTUFBTTtBQUNaLGtCQUFNLEtBQUssU0FBUyxHQUFJO0FBRXhCLGdCQUFJLFNBQVMsS0FBTTtBQUFFLHlCQUFXO1lBQUcsT0FDOUI7QUFBRTtZQUFPO1VBQ2Y7QUFDQSxpQkFBTztRQUNSO01BRUQ7QUFnQkEsVUFBSSxZQUFZLFNBQVMsUUFBUTtBQUNoQyxZQUFJLENBQUMsS0FBTSxRQUFPLElBQUksVUFBVSxNQUFNO0FBQ3RDLFlBQUksV0FDRCxPQUFPLFNBQVksUUFBUSxPQUFPLFNBQVksWUFDOUMsT0FBTyxZQUFZLFFBQVEsT0FBTyxZQUFZLFlBQzlDLE9BQU8sV0FBWSxRQUFRLE9BQU8sV0FBWSxTQUFZO0FBQzVELGVBQUssUUFBUSxPQUFPLElBQUk7QUFDeEIsZUFBSyxRQUFRLE9BQU8sSUFBSTtBQUN4QixlQUFLLFdBQVcsT0FBTyxPQUFPO0FBQzlCLGVBQUssVUFBVSxPQUFPLE1BQU07QUFDNUIsZUFBSyxVQUFVLE9BQU8sTUFBTTtRQUM3QjtNQUNEO0FBR0EsZ0JBQVUsV0FBcUI7QUFDL0IsZ0JBQVUsVUFBcUI7QUFDL0IsZ0JBQVUsY0FBcUI7QUFDL0IsZ0JBQVUsYUFBcUI7QUFDL0IsZ0JBQVUsaUJBQXFCO0FBQy9CLGdCQUFVLHFCQUFxQjtBQUMvQixnQkFBVSxhQUFxQjtBQVMvQixnQkFBVSxVQUFVLFVBQVUsU0FBUyxPQUFPO0FBQzdDLGFBQUssT0FBTyxLQUFLLGtCQUFrQixTQUFTLENBQUM7TUFDOUM7QUFPQSxnQkFBVSxVQUFVLFVBQVUsU0FBUyxNQUFNO0FBQzVDLFlBQUksT0FBTyxVQUFVLFlBQVksT0FBTyxVQUFVLFlBQVk7QUFDN0QsZ0JBQU0sSUFBSSxNQUFNLHFDQUFxQyxJQUFJO1FBQzFEO0FBRUEsYUFBSyxPQUFPO01BQ2I7QUFPQSxnQkFBVSxVQUFVLGFBQWEsU0FBUyxTQUFTO0FBQ2xELFlBQUksVUFBVSxLQUFLLFVBQVUsSUFBSTtBQUNoQyxnQkFBTSxJQUFJLE1BQU0sMkJBQTJCO1FBQzVDO0FBRUEsYUFBSyxVQUFVO01BQ2hCO0FBUUEsZ0JBQVUsVUFBVSxZQUFZLFNBQVNFLElBQUc7QUFDM0MsYUFBSyxTQUFTQTtNQUNmO0FBUUEsZ0JBQVUsVUFBVSxZQUFZLFNBQVNBLElBQUc7QUFDM0MsYUFBSyxTQUFTQTtNQUNmO0FBT0EsZ0JBQVUsVUFBVSxVQUFVLFdBQVc7QUFDeEMsWUFBSSxZQUFZLENBQUM7QUFFakIsWUFBSSxrQkFBa0IsS0FBSyxPQUFRLEtBQUssVUFBVTtBQUVsRCxrQkFBVSxLQUFLLE1BQU0sV0FBVyxLQUFLLElBQUk7QUFDekMsa0JBQVUsS0FBSyxlQUFlO0FBQzlCLGtCQUFVLEtBQUssS0FBSyxNQUFNO0FBRzFCLFlBQUksS0FBSyxXQUFXLFVBQWEsS0FBSyxXQUFXLE1BQU07QUFDdEQsb0JBQVUsS0FBSyxLQUFLLE1BQU07UUFDM0I7QUFDQSxlQUFPO01BQ1I7QUFjQSxVQUFJLFlBQVksU0FBUyxRQUFRO0FBQ2hDLFlBQUksQ0FBQyxLQUFNLFFBQU8sSUFBSSxVQUFVLE1BQU07QUFDdEMsWUFBSUEsS0FBSSxVQUFVLENBQUM7QUFDbkIsYUFBSyxRQUFRLE9BQU8sSUFBSTtBQUN4QixhQUFLLFFBQVEsT0FBTyxJQUFJO0FBQ3hCLGFBQUssUUFBUSxPQUFPLElBQUk7TUFDekI7QUFFQSxnQkFBVSxXQUFhO0FBQ3ZCLGdCQUFVLE9BQWE7QUFDdkIsZ0JBQVUsWUFBYTtBQUN2QixnQkFBVSxhQUFhO0FBQ3ZCLGdCQUFVLGFBQWE7QUFDdkIsZ0JBQVUsUUFBYTtBQUN2QixnQkFBVSxTQUFhO0FBQ3ZCLGdCQUFVLFlBQWE7QUFDdkIsZ0JBQVUsaUJBQWlCO0FBQzNCLGdCQUFVLGVBQWlCO0FBQzNCLGdCQUFVLFFBQWE7QUFDdkIsZ0JBQVUsUUFBYTtBQUN2QixnQkFBVSxXQUFhO0FBQ3ZCLGdCQUFVLFVBQWE7QUFDdkIsZ0JBQVUsWUFBYTtBQVF2QixnQkFBVSxVQUFVLFVBQVUsU0FBUyxPQUFPO0FBQzdDLGFBQUssT0FBTyxLQUFLLGtCQUFrQixTQUFTLENBQUM7TUFDOUM7QUFPQSxnQkFBVSxVQUFVLFVBQVUsU0FBUyxHQUFHO0FBQ3pDLGFBQUssT0FBTztNQUNiO0FBUUEsZ0JBQVUsVUFBVSxVQUFVLFNBQVMsR0FBRztBQUN6QyxhQUFLLE9BQU87TUFDYjtBQU9BLGdCQUFVLFVBQVUsVUFBVSxXQUFXO0FBQ3hDLFlBQUksQ0FBQyxLQUFLLE1BQU07QUFDZixnQkFBTSxJQUFJLE1BQU0sb0NBQW9DO1FBQ3JEO0FBRUEsWUFBSSxZQUFZLENBQUM7QUFDakIsa0JBQVUsS0FBSyxNQUFNLFdBQVcsS0FBSyxJQUFJO0FBQ3pDLGtCQUFVLEtBQUssS0FBTSxLQUFLLElBQUk7QUFJOUIsWUFBSSxNQUFNLFFBQVEsS0FBSyxJQUFJLEdBQUc7QUFDN0Isb0JBQVUsS0FBSyxLQUFLLEtBQUssTUFBTTtBQUMvQixvQkFBVSxLQUFLLE1BQU0sV0FBVyxLQUFLLElBQUk7UUFDMUMsV0FBVyxPQUFPLEtBQUssUUFBUSxVQUFVO0FBQ3hDLG9CQUFVLEtBQUssR0FBRyxLQUFLLElBQUk7UUFDNUIsV0FBVyxLQUFLLFNBQVMsUUFBUSxLQUFLLFNBQVMsUUFBVztBQUV6RCxvQkFBVSxLQUFLLEtBQUssS0FBSyxNQUFNO0FBQy9CLGNBQUksWUFBWSxLQUFLLEtBQUssTUFBTSxFQUFFLEVBQUUsSUFBSSxTQUFTLEdBQUU7QUFBRSxtQkFBTyxFQUFFLFdBQVcsQ0FBQztVQUFFLENBQUM7QUFDN0Usb0JBQVUsS0FBSyxNQUFNLFdBQVcsU0FBUztRQUMxQyxPQUFPO0FBQ04sb0JBQVUsS0FBSyxDQUFDO1FBQ2pCO0FBRUEsZUFBTztNQUNSO0FBWUEsVUFBSSxRQUFRLFNBQVMsUUFBUTtBQUM1QixZQUFJLENBQUMsS0FBTSxRQUFPLElBQUksTUFBTSxNQUFNO0FBQ2xDLFlBQUksSUFBSSxVQUFVLENBQUM7QUFDbkIsYUFBSyxTQUFTLEVBQUUsVUFBVSxDQUFDO01BQzVCO0FBRUEsWUFBTSxjQUFjLENBQUMsSUFBTSxJQUFNLEtBQU0sR0FBSTtBQUMzQyxZQUFNLFlBQWMsQ0FBQyxHQUFNLEtBQU0sSUFBTSxDQUFJO0FBUTNDLFlBQU0sVUFBVSxXQUFXLFNBQVMsT0FBTztBQUMxQyxhQUFLLE9BQU8sS0FBSyxLQUFLO0FBQ3RCLGVBQU87TUFDUjtBQWNBLFlBQU0sVUFBVSxZQUFZLE1BQU0sVUFBVSxTQUFTLFNBQVMsU0FBUyxPQUFPLE1BQU0sVUFBVTtBQUM3RixhQUFLLE9BQU8sS0FBSyxJQUFJLFVBQVU7VUFDOUIsTUFBTSxVQUFVO1VBQ2hCO1VBQ0EsUUFBUSxLQUFLLGdCQUFnQixLQUFLO1VBQ2xDLFFBQVEsWUFBWTtVQUNwQixNQUFNLFFBQVE7UUFDZixDQUFDLENBQUM7QUFDRixlQUFPO01BQ1I7QUFjQSxZQUFNLFVBQVUsYUFBYSxNQUFNLFVBQVUsVUFBVSxTQUFTLFNBQVMsT0FBTyxNQUFNLFVBQVU7QUFDL0YsYUFBSyxPQUFPLEtBQUssSUFBSSxVQUFVO1VBQzlCLE1BQU0sVUFBVTtVQUNoQjtVQUNBLFFBQVEsS0FBSyxnQkFBZ0IsS0FBSztVQUNsQyxRQUFRLFlBQVk7VUFDcEIsTUFBTSxRQUFRO1FBQ2YsQ0FBQyxDQUFDO0FBQ0YsZUFBTztNQUNSO0FBZUEsWUFBTSxVQUFVLFVBQVUsTUFBTSxVQUFVLE9BQU8sU0FBUyxTQUFTLE9BQU8sS0FBSyxNQUFNLFVBQVU7QUFDOUYsYUFBSyxPQUFPLFNBQVMsT0FBTyxNQUFNLFFBQVE7QUFDMUMsWUFBSSxLQUFLO0FBQ1IsZUFBSyxRQUFRLFNBQVMsT0FBTyxLQUFLLFFBQVE7UUFDM0M7QUFDQSxlQUFPO01BQ1I7QUFhQSxZQUFNLFVBQVUsV0FBVyxNQUFNLFVBQVUsUUFBUSxTQUFTLFNBQVMsT0FBTyxLQUFLLFVBQVU7QUFDMUYsWUFBSSxDQUFDLE1BQU0sUUFBUSxLQUFLLEtBQUssQ0FBQyxNQUFNLFFBQVE7QUFDM0MsZ0JBQU0sSUFBSSxNQUFNLG1DQUFtQztRQUNwRDtBQUNBLGNBQU0sUUFBUSxTQUFTRSxRQUFNO0FBQzVCLGVBQUssT0FBTyxTQUFTQSxRQUFNLEdBQUcsUUFBUTtRQUN2QyxHQUFHLElBQUk7QUFDUCxjQUFNLFFBQVEsU0FBU0EsUUFBTSxPQUFPO0FBQ25DLGNBQUksVUFBVSxHQUFHO0FBQ2hCLGlCQUFLLFFBQVEsU0FBU0EsUUFBTSxHQUFHO1VBQ2hDLE9BQU87QUFDTixpQkFBSyxRQUFRLFNBQVNBLE1BQUk7VUFDM0I7UUFDRCxHQUFHLElBQUk7QUFDUCxlQUFPO01BQ1I7QUFXQSxZQUFNLFVBQVUsZ0JBQWdCLE1BQU0sVUFBVSxhQUFhLFNBQVMsU0FBUyxZQUFZLE1BQU07QUFDaEcsYUFBSyxPQUFPLEtBQUssSUFBSSxVQUFVO1VBQzlCLE1BQU0sVUFBVTtVQUNoQjtVQUNBLFFBQVE7VUFDUixNQUFNLFFBQVE7UUFDZixDQUFDLENBQUM7QUFDRixlQUFPO01BQ1I7QUFVQSxZQUFNLFVBQVUsV0FBVyxNQUFNLFVBQVUsUUFBUSxTQUFTLEtBQUssTUFBTTtBQUN0RSxhQUFLLE9BQU8sS0FBSyxJQUFJLFVBQVU7VUFDOUIsTUFBTSxVQUFVO1VBQ2hCLE1BQU0sS0FBSyxZQUFZLEdBQUc7VUFDMUIsTUFBTSxRQUFRO1FBQ2YsQ0FBQyxDQUFDO0FBQ0YsZUFBTztNQUNSO0FBT0EsWUFBTSxVQUFVLFVBQVUsV0FBVztBQUNwQyxZQUFJLGNBQWM7QUFDbEIsWUFBSSxhQUFhLENBQUM7QUFDbEIsWUFBSSxhQUFhLE1BQU07QUFDdkIsWUFBSSxXQUFhLE1BQU07QUFFdkIsWUFBSSxnQkFBZ0IsU0FBUyxPQUFPO0FBQ25DLGNBQUksUUFBUSxNQUFNLFFBQVE7QUFDMUIseUJBQWUsTUFBTTtBQUNyQixxQkFBVyxLQUFLLE1BQU0sWUFBWSxLQUFLO1FBQ3hDO0FBRUEsYUFBSyxPQUFPLFFBQVEsYUFBYTtBQUlqQyx1QkFBZSxTQUFTO0FBSXhCLFlBQUksY0FBYyxLQUFLLFVBQVUsWUFBWSxTQUFTLEVBQUUsR0FBRyxDQUFDO0FBRTVELGVBQU8sV0FBVyxPQUFPLGFBQWEsWUFBWSxRQUFRO01BQzNEO0FBY0EsVUFBSSxPQUFPLFNBQVMsUUFBTztBQUMxQixZQUFJLENBQUMsS0FBTSxRQUFPLElBQUksS0FBSyxNQUFNO0FBRWpDLFlBQUksSUFBSSxVQUFVLENBQUM7QUFDbkIsWUFBSSxFQUFFLE9BQU87QUFDWixjQUFJLE9BQU8sRUFBRSxVQUFVLFVBQVU7QUFDaEMsa0JBQU0sSUFBSSxNQUFNLGtDQUFrQztBQUNsRDtVQUNEO0FBQ0EsY0FBSSxFQUFFLFNBQVMsS0FBSyxFQUFFLFNBQVUsS0FBSyxNQUFPLEVBQUUsUUFBUSxNQUFNLEdBQUc7QUFDOUQsa0JBQU0sSUFBSSxNQUFNLHdEQUF3RDtBQUN4RTtVQUNEO1FBQ0Q7QUFFQSxhQUFLLFFBQVEsRUFBRSxTQUFTO0FBQ3hCLGFBQUssU0FBUyxFQUFFLFVBQVUsQ0FBQztNQUM1QjtBQUVBLFdBQUssY0FBa0I7QUFDdkIsV0FBSyxpQkFBa0I7QUFDdkIsV0FBSyxZQUFrQjtBQUN2QixXQUFLLFlBQWtCO0FBT3ZCLFdBQUssVUFBVSxXQUFXLFNBQVMsT0FBTztBQUN6QyxZQUFJLE9BQU87QUFDVixlQUFLLE9BQU8sS0FBSyxLQUFLO0FBQ3RCLGlCQUFPO1FBQ1IsT0FBTztBQUNOLGtCQUFRLElBQUksTUFBTTtBQUNsQixlQUFLLE9BQU8sS0FBSyxLQUFLO0FBQ3RCLGlCQUFPO1FBQ1I7TUFDRDtBQU9BLFdBQUssVUFBVSxVQUFVLFdBQVc7QUFDbkMsWUFBSSxhQUFhLEtBQUssT0FBTyxPQUFPLFNBQVMsRUFBRTtBQUcvQyxZQUFJLFFBQVEsS0FBSyxjQUFjLEtBQUs7QUFHcEMsWUFBSSxTQUFTLFlBQVksRUFBRSxJQUFJLEdBQUc7QUFDakMsbUJBQVMsS0FBSztRQUNmLE9BQU87QUFDTixtQkFBUyxLQUFLO1FBQ2Y7QUFHQSxpQkFBUyxLQUFLLFVBQVUsS0FBSyxVQUFVLFlBQVksQ0FBQyxDQUFDO0FBRXJELGlCQUFTLE9BQU8sYUFBYyxLQUFLLFFBQU0sS0FBTyxLQUFLLFFBQU0sR0FBRztBQUFFO0FBR2hFLGFBQUssT0FBTyxRQUFRLFNBQVMsT0FBTztBQUNuQyxtQkFBUyxLQUFLLFVBQVUsTUFBTSxRQUFRLENBQUM7UUFDeEMsQ0FBQztBQUVELGVBQU87TUFDUjtBQU1BLGVBQVMsT0FBTztBQUNoQixlQUFTLE9BQU87QUFDaEIsZUFBUyxRQUFRO0FBQ2pCLGVBQVMsUUFBUTtBQUNqQixlQUFTLFlBQVk7SUFFdEIsR0FBSSxJQUFLO0FBRVQsUUFBSSxPQUFPLFVBQVUsZUFBZSxXQUFXLE1BQU07QUFDcEQsYUFBTyxVQUFVO0lBQ2xCLFdBQVcsT0FBTyxXQUFXLGVBQWUsWUFBWSxNQUFNO0FBQzdELGdCQUFVO0lBQ1gsT0FBTztBQUNOLGNBQUssT0FBTztJQUNiO0VBQUE7QUFBQSxDQUFBO0FDenFCTyxJQUFBLGdCQUFBVSxZQUFBOzthQUFTLFFBQVEsT0FBTztBQUM3QixhQUFPLE1BQU0sT0FBTyxDQUFDLE1BQU0sUUFBUSxLQUFLLE9BQU8sR0FBRyxHQUFHLENBQUMsQ0FBQztJQUN6RDtBQUVPLGFBQVMsT0FBTyxPQUFPLE9BQU87QUFDbkMsWUFBTSxNQUFNLENBQUM7QUFFYixhQUFPLE9BQU87QUFDWixZQUFJLEtBQUssS0FBSztBQUNkLGlCQUFTO01BQ1g7QUFFQSxhQUFPO0lBQ1Q7QUFFTyxhQUFTLE1BQU0sS0FBSyxLQUFLLE1BQU07QUFDcEMsWUFBTSxNQUFNLENBQUM7QUFFYixVQUFJLENBQUMsTUFBTTtBQUNULGlCQUFTLElBQUksS0FBSyxLQUFLLEtBQUssS0FBSyxHQUFHO0FBQ2xDLGNBQUksS0FBSyxDQUFDO1FBQ1o7TUFDRixPQUFPO0FBQ0wsY0FBTSxRQUFRLE1BQU0sT0FBTztBQUUzQixpQkFBUyxJQUFJLEtBQUssS0FBSyxLQUFLLEtBQUssTUFBTTtBQUNyQyxjQUFJLEtBQUssQ0FBQztRQUNaO01BQ0Y7QUFFQSxhQUFPO0lBQ1Q7QUFFTyxhQUFTLE1BQU0sT0FBTztBQUMzQixVQUFJLENBQUMsU0FBUyxPQUFPLFVBQVUsU0FBVSxRQUFPO0FBQ2hELFVBQUksTUFBTSxRQUFRLEtBQUssRUFBRyxRQUFPLE1BQU0sSUFBSSxLQUFLO0FBRWhELFlBQU0sT0FBTyxDQUFDO0FBRWQsYUFBTyxLQUFLLEtBQUssRUFBRSxRQUFRLENBQUEsUUFBTztBQUNoQyxhQUFLLEdBQUcsSUFBSSxNQUFNLE1BQU0sR0FBRyxDQUFDO01BQzlCLENBQUM7QUFFRCxhQUFPO0lBQ1Q7QUFFTyxhQUFTLElBQUksR0FBRyxHQUFHLElBQUk7QUFDNUIsWUFBTSxNQUFNLEtBQUssSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNO0FBRXZDLGVBQVMsSUFBSSxHQUFHLElBQUksS0FBSyxLQUFLLEdBQUc7QUFDL0IsWUFBSSxPQUFPLEVBQUUsQ0FBQyxNQUFNLGVBQWUsT0FBTyxFQUFFLENBQUMsTUFBTSxZQUFhLElBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7TUFDL0U7SUFDRjs7OztBQ3BEQSxJQUFBLGVBQUFBLFlBQUE7RUFBQSxpQ0FBQSxTQUFBO0FBQUEsS0FBQyxNQUFJO0FBQUM7QUFBYSxVQUFJLElBQUUsRUFBQyxLQUFJLENBQUErQixPQUFHO0FBQUNBLFdBQUUsVUFBUSxLQUFLLE1BQU0sNjJFQUE2MkU7TUFBQyxHQUFFLEtBQUksQ0FBQUEsT0FBRztBQUFDQSxXQUFFLFVBQVEsS0FBSyxNQUFNLDg0RkFBbTVGO01BQUMsRUFBQyxHQUFFLElBQUUsQ0FBQztBQUFFLGVBQVMsRUFBRUMsSUFBRTtBQUFDLFlBQUlDLEtBQUUsRUFBRUQsRUFBQztBQUFFLFlBQUcsV0FBU0MsR0FBRSxRQUFPQSxHQUFFO0FBQVEsWUFBSUMsS0FBRSxFQUFFRixFQUFDLElBQUUsRUFBQyxTQUFRLENBQUMsRUFBQztBQUFFLGVBQU8sRUFBRUEsRUFBQyxFQUFFRSxJQUFFQSxHQUFFLFNBQVEsQ0FBQyxHQUFFQSxHQUFFO01BQU87QUFBQyxRQUFFLElBQUUsQ0FBQ0gsSUFBRUksT0FBSTtBQUFDLGlCQUFRSCxNQUFLRyxHQUFFLEdBQUUsRUFBRUEsSUFBRUgsRUFBQyxLQUFHLENBQUMsRUFBRSxFQUFFRCxJQUFFQyxFQUFDLEtBQUcsT0FBTyxlQUFlRCxJQUFFQyxJQUFFLEVBQUMsWUFBVyxNQUFHLEtBQUlHLEdBQUVILEVBQUMsRUFBQyxDQUFDO01BQUMsR0FBRSxFQUFFLElBQUUsQ0FBQ0QsSUFBRUksT0FBSSxPQUFPLFVBQVUsZUFBZSxLQUFLSixJQUFFSSxFQUFDLEdBQUUsRUFBRSxJQUFFLENBQUFKLE9BQUc7QUFBQyx1QkFBYSxPQUFPLFVBQVEsT0FBTyxlQUFhLE9BQU8sZUFBZUEsSUFBRSxPQUFPLGFBQVksRUFBQyxPQUFNLFNBQVEsQ0FBQyxHQUFFLE9BQU8sZUFBZUEsSUFBRSxjQUFhLEVBQUMsT0FBTSxLQUFFLENBQUM7TUFBQztBQUFFLFVBQUksSUFBRSxDQUFDO0FBQUUsT0FBQyxNQUFJO0FBQUMsVUFBRSxFQUFFLENBQUMsR0FBRSxFQUFFLEVBQUUsR0FBRSxFQUFDLE9BQU0sTUFBSTdDLEtBQUUsUUFBTyxNQUFJLEdBQUUsYUFBWSxNQUFJZ0QsSUFBRSxPQUFNLE1BQUksR0FBRSxRQUFPLE1BQUksRUFBQyxDQUFDO0FBQUUsWUFBSUgsS0FBRSxFQUFFLEdBQUcsR0FBRUksS0FBRSxFQUFFLEdBQUcsR0FBRUYsS0FBRSxTQUFTNUIsSUFBRTtBQUFDLGNBQUkyQixLQUFFM0IsR0FBRSxPQUFNNEIsS0FBRTVCLEdBQUUsT0FBTTZCLEtBQUVGLE1BQUdDLElBQUVHLEtBQUVKLEtBQUUsVUFBUTtBQUFRLGNBQUcsWUFBVSxPQUFPRSxHQUFFLE9BQU0sSUFBSSxNQUFNLEdBQUcsT0FBT0EsSUFBRSw0QkFBNEIsRUFBRSxPQUFPRSxFQUFDLENBQUM7QUFBRSxjQUFJQyxJQUFFbkQsSUFBRW9ELEtBQUVKLEdBQUUsUUFBUSxHQUFHO0FBQUUsaUJBQUtJLE1BQUdELEtBQUVILEdBQUUsTUFBTSxDQUFDLEdBQUVoRCxLQUFFZ0QsR0FBRSxDQUFDLEdBQUUsUUFBTUEsR0FBRSxDQUFDLEtBQUcsUUFBTUEsR0FBRSxDQUFDLE1BQUlHLEtBQUVILEdBQUUsTUFBTSxDQUFDLEdBQUVoRCxNQUFHZ0QsR0FBRSxDQUFDLE9BQUtHLEtBQUVILEdBQUUsTUFBTSxPQUFLSSxLQUFFLElBQUVBLEtBQUUsQ0FBQyxHQUFFcEQsS0FBRWdELEdBQUUsTUFBTSxHQUFFSSxFQUFDO0FBQUcsY0FBSSxLQUFFLFNBQVNQLElBQUU7QUFBQyxtQkFBTSxFQUFDLE1BQUssTUFBSyxNQUFLLE1BQUssTUFBSyxNQUFLLE1BQUssTUFBSyxNQUFLLEtBQUksRUFBRUEsR0FBRSxZQUFZLENBQUMsS0FBR0EsR0FBRSxPQUFPLENBQUMsRUFBRSxZQUFZLElBQUVBLEdBQUUsTUFBTSxDQUFDO1VBQUMsR0FBRTdDLEdBQUUsUUFBUSxPQUFNLEVBQUUsQ0FBQyxHQUFFLElBQUUsT0FBS0EsR0FBRSxRQUFRLE9BQU0sRUFBRSxJQUFFLENBQUNBLEdBQUUsUUFBUSxPQUFNLEVBQUUsSUFBRTtBQUFFLGNBQUcsTUFBTSxDQUFDLEVBQUUsT0FBTSxJQUFJLE1BQU0sR0FBRyxPQUFPQSxHQUFFLENBQUMsR0FBRSwrQkFBK0IsQ0FBQztBQUFFLGNBQUcsQ0FBQzZDLEdBQUVNLEVBQUMsS0FBRyxDQUFDRixHQUFFRSxFQUFDLEVBQUUsT0FBTSxJQUFJLE1BQU0sR0FBRyxPQUFPSCxJQUFFLGtCQUFrQixFQUFFLE9BQU9FLEVBQUMsQ0FBQztBQUFFLG1CQUFRLEtBQUUsU0FBU0wsSUFBRUksSUFBRTtBQUFDLGdCQUFJOUIsS0FBRSxDQUFDLEtBQUksTUFBSyxLQUFJLE1BQUssS0FBSSxLQUFJLE1BQUssS0FBSSxNQUFLLEtBQUksTUFBSyxHQUFHLEdBQUUyQixLQUFFM0IsR0FBRSxLQUFLLFNBQVMwQixJQUFFO0FBQUMscUJBQU9BLEtBQUVJO1lBQUMsRUFBRSxHQUFFRixLQUFFNUIsR0FBRSxLQUFLLFNBQVMwQixJQUFFO0FBQUMscUJBQU9BLE1BQUdJLEtBQUU7WUFBRSxFQUFFLEdBQUVELEtBQUVGLEdBQUUsT0FBT0MsRUFBQztBQUFFLG1CQUFPQyxHQUFFLE1BQU1BLEdBQUUsUUFBUUgsS0FBRUksRUFBQyxDQUFDO1VBQUMsR0FBRSxHQUFFLENBQUMsR0FBRSxJQUFFLENBQUMsR0FBRS9DLEtBQUUsR0FBRSxJQUFFLEdBQUUsSUFBRTRDLEtBQUVELEtBQUVJLElBQUUvQyxLQUFFLEVBQUVpRCxFQUFDLEVBQUUsU0FBUSxTQUFNLEVBQUVBLEVBQUMsRUFBRWpELEVBQUMsS0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsR0FBRUEsTUFBSTtBQUFJLGlCQUFPO1FBQUMsR0FBRThDLEtBQUUsU0FBU0gsSUFBRTtBQUFDLGNBQUlJLElBQUU5QixJQUFFMkIsS0FBRSxTQUFRRSxLQUFFO0FBQUUsaUJBQU9ILEdBQUUsU0FBU0MsRUFBQyxLQUFHM0IsS0FBRTJCLElBQUVHLEtBQUVKLEdBQUUsTUFBTSxHQUFFQSxHQUFFLFFBQVFDLEVBQUMsQ0FBQyxNQUFJRyxLQUFFSixHQUFFLENBQUMsR0FBRTFCLEtBQUUwQixHQUFFLE1BQU0sQ0FBQyxHQUFFLFFBQU1BLEdBQUUsQ0FBQyxLQUFHLFFBQU1BLEdBQUUsQ0FBQyxNQUFJSSxNQUFHSixHQUFFLENBQUMsR0FBRTFCLEtBQUUwQixHQUFFLE1BQU0sQ0FBQyxLQUFJQSxHQUFFLFNBQVMsR0FBRyxNQUFJRyxLQUFFLENBQUNILEdBQUUsTUFBTSxHQUFHLEVBQUUsQ0FBQyxHQUFFMUIsS0FBRUEsR0FBRSxNQUFNLEdBQUVBLEdBQUUsUUFBUSxHQUFHLENBQUMsSUFBRzRCLEdBQUUsRUFBQyxPQUFNRSxLQUFFRCxLQUFFLE1BQUk3QixHQUFDLENBQUM7UUFBQyxHQUFFLElBQUUsV0FBVTtBQUFDLGlCQUFPLE9BQU8sS0FBSzhCLEVBQUM7UUFBQyxHQUFFLElBQUUsV0FBVTtBQUFDLGlCQUFPLE9BQU8sS0FBS0osRUFBQztRQUFDLEdBQUU3QyxNQUFFLFNBQVM2QyxJQUFFO0FBQUMsaUJBQU9FLEdBQUUsRUFBQyxPQUFNRixHQUFDLENBQUM7UUFBQyxHQUFFLElBQUUsU0FBU0EsSUFBRTtBQUFDLGlCQUFPRSxHQUFFLEVBQUMsT0FBTUYsR0FBQyxDQUFDO1FBQUM7TUFBQyxHQUFHO0FBQUUsVUFBSSxJQUFFO0FBQVEsZUFBUSxLQUFLLEVBQUUsR0FBRSxDQUFDLElBQUUsRUFBRSxDQUFDO0FBQUUsUUFBRSxjQUFZLE9BQU8sZUFBZSxHQUFFLGNBQWEsRUFBQyxPQUFNLEtBQUUsQ0FBQztJQUFDLEdBQUc7RUFBQTtBQUFBLENBQUE7QUNBaHpPLElBQUEsbUJBQUEvQixZQUFBOztRQUFBLEVBQUEsWUFBUyxJQUFBLGFBQUE7QUFFRixRQUFNLGVBQWU7QUFDckIsUUFBTSxhQUFhO0FBQ25CLFFBQU0sWUFBWTtBQUNsQixRQUFNLFdBQVc7QUFDakIsUUFBTSxVQUFVO0FBQ2hCLFFBQU0sVUFBVTtBQUNoQixRQUFNLFVBQVU7QUFDaEIsUUFBTSxVQUFVO0FBRXZCLFFBQU0sUUFBUSxDQUFDO0FBRVIsYUFBUyxNQUFNLE9BQU87QUFDM0IsVUFBSSxPQUFPLENBQUM7QUFDWixVQUFJO0FBQ0YsZUFBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELGVBQU8sS0FBSyxRQUFRLFdBQVcsS0FBSztBQUNwQyxlQUFPLEtBQUssUUFBUSxVQUFVLEdBQUc7QUFDakMsZUFBTyxLQUFLLFFBQVEsVUFBVSxHQUFHO0FBQ2pDLGVBQU8sS0FBSyxNQUFNLElBQUk7TUFDeEIsU0FBUyxHQUFHO01BRVo7QUFDQSxhQUFPO0lBQ1Q7QUFFTyxhQUFTLE1BQU0sT0FBTztBQUMzQixVQUFJLENBQUMsTUFBTSxLQUFLLEdBQUc7QUFDakIsWUFBSSxNQUFNLFNBQVMsR0FBRyxHQUFHO0FBQ3ZCLGdCQUFNLEtBQUssSUFBSSxNQUFNLFdBQVcsSUFBSSxLQUFLLEVBQUU7UUFDN0MsV0FBVyxNQUFNLFNBQVMsR0FBRyxHQUFHO0FBQzlCLGdCQUFNLENBQUMsR0FBRyxDQUFDLElBQUksTUFBTSxNQUFNLEdBQUc7QUFFOUIsZ0JBQU0sS0FBSyxJQUFJLElBQUk7UUFDckIsV0FBVyxNQUFNLFNBQVMsR0FBRyxHQUFHO0FBQzlCLGdCQUFNLENBQUMsR0FBRyxDQUFDLElBQUksTUFBTSxNQUFNLEdBQUc7QUFFOUIsZ0JBQU0sS0FBSyxJQUFJLElBQUk7UUFDckIsT0FBTztBQUNMLGdCQUFNLEtBQUssSUFBSSxXQUFXLEtBQUs7UUFDakM7TUFDRjtBQUNBLGFBQU8sTUFBTSxLQUFLO0lBQ3BCO0FBRU8sYUFBUyxTQUFTLElBQUksT0FBTztBQUNsQyxVQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsS0FBSyxHQUFHO0FBQzdCLGNBQU0sR0FBRyxTQUFTLEtBQUssSUFBSSxHQUFHLEtBQUssS0FBSztNQUMxQztBQUNBLGFBQU8sTUFBTSxHQUFHLFNBQVMsS0FBSztJQUNoQztBQUVPLGFBQVMsY0FBYyxPQUFPO0FBQ25DLGFBQU8sU0FBUyxTQUFTLEtBQUs7SUFDaEM7QUFFTyxhQUFTLFVBQVUsT0FBTztBQUMvQixhQUFPLFNBQVMsWUFBWSxLQUFLO0lBQ25DO0FBRU8sYUFBUyxTQUFTLE9BQU87QUFDOUIsYUFBTyxTQUFTLFdBQVcsS0FBSztJQUNsQztBQUVPLGFBQVMsUUFBUSxPQUFPO0FBQzdCLGFBQU8sU0FBUyxVQUFVLEtBQUs7SUFDakM7QUFFTyxhQUFTLE9BQU8sT0FBTztBQUM1QixhQUFPLFNBQVMsU0FBUyxLQUFLO0lBQ2hDO0FBRU8sYUFBUyxPQUFPLE9BQU87QUFDNUIsYUFBTyxTQUFTLFNBQVMsS0FBSztJQUNoQztBQUVPLGFBQVMsUUFBUSxPQUFPO0FBQzdCLFlBQU0sTUFBTSxJQUFJLEtBQUs7QUFDckIsVUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHO0FBQ2YsWUFBSSxPQUFPLEtBQUssRUFBRyxPQUFNLEdBQUcsSUFBSTtpQkFDdkIsUUFBUSxLQUFLLEVBQUcsT0FBTSxHQUFHLElBQUk7aUJBQzdCLFVBQVUsS0FBSyxFQUFHLE9BQU0sR0FBRyxJQUFJO2lCQUMvQixPQUFPLEtBQUssRUFBRyxPQUFNLEdBQUcsSUFBSTtpQkFDNUIsU0FBUyxLQUFLLEVBQUcsT0FBTSxHQUFHLElBQUk7WUFDbEMsT0FBTSxHQUFHLElBQUk7TUFDcEI7QUFDQSxhQUFPLE1BQU0sR0FBRztJQUNsQjtBQUVPLGFBQVMsVUFBVSxZQUFZO0FBQ3BDLFVBQUksQ0FBQyxjQUFjLE9BQU8sZUFBZSxVQUFVO0FBQ2pELGNBQU0sSUFBSSxNQUFNLG9DQUFvQyxVQUFVLEdBQUc7TUFDbkU7QUFFQSxVQUFJLE1BQU0sSUFBSSxVQUFVLEVBQUUsRUFBRyxRQUFPLE1BQU0sSUFBSSxVQUFVLEVBQUU7QUFFMUQsWUFBTSxTQUFTLFdBQVcsTUFBTSxLQUFLO0FBRXJDLFVBQUksQ0FBQyxPQUFPLFFBQVE7QUFDbEIsY0FBTSxJQUFJLE1BQU0sd0NBQXdDLFVBQVUsR0FBRztNQUN2RTtBQUVBLFlBQU0sTUFBTSxDQUFDO0FBQ2IsWUFBTSxRQUFRLENBQUM7QUFFZixlQUFTLElBQUksTUFBTSxPQUFPO0FBQ3hCLGNBQU0sT0FBTyxFQUFFLE1BQU0sTUFBTTtBQUUzQixZQUFJLFNBQVMsWUFBWSxPQUFPLFVBQVUsVUFBVTtBQUNsRCxlQUFLLFFBQVEsT0FBTyxVQUFVLFdBQVcsTUFBTSxLQUFLLElBQUk7UUFDMUQ7QUFFQSxZQUFJLFNBQVMsV0FBVyxPQUFPLFVBQVUsVUFBVTtBQUNqRCxlQUFLLFFBQVEsWUFBWSxNQUFNLFFBQVEsU0FBUyxFQUFFLENBQUM7QUFFbkQsY0FBSSxNQUFNLFNBQVMsSUFBSSxHQUFHO0FBQ3hCLGlCQUFLLFNBQVM7VUFDaEI7UUFDRjtBQUVBLFlBQUksU0FBUyxXQUFXLE1BQU0sUUFBUSxHQUFHLElBQUksSUFBSTtBQUMvQyxnQkFBTSxJQUFJLE1BQU0sTUFBTSxHQUFHO0FBRXpCLGNBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLEtBQUssU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJO0FBQ3ZDLGtCQUFNLElBQUksTUFBTSwrQkFBK0IsSUFBSSxZQUFZLEtBQUssR0FBRztVQUN6RTtBQUVBLGVBQUssUUFBUSxTQUFTLEVBQUUsQ0FBQyxHQUFHLEVBQUU7QUFDOUIsZUFBSyxTQUFTLFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBRTtBQUMvQixlQUFLLE9BQU87UUFDZDtBQUVBLFlBQUksS0FBSyxJQUFJO01BQ2Y7QUFFQSxhQUFPLE9BQU8sQ0FBQyxNQUFNLEtBQUssTUFBTTtBQUM5QixZQUFJO0FBRUosY0FBTSxPQUFPLE9BQU8sSUFBSSxDQUFDO0FBQ3pCLGNBQU0sT0FBTyxJQUFJLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQztBQUVyQyxZQUFJLGFBQWEsS0FBSyxHQUFHLEdBQUc7QUFDMUIsY0FBSSxTQUFTLElBQUksTUFBTSxZQUFZLENBQUM7QUFDcEMsaUJBQU87UUFDVDtBQUVBLFlBQUksT0FBTyxRQUFRLGFBQ2hCLElBQUksU0FBUyxHQUFHLEtBQUssSUFBSSxRQUFRLEdBQUcsSUFBSSxLQUNyQyxJQUFJLFNBQVMsR0FBRyxLQUFLLElBQUksUUFBUSxHQUFHLElBQUksS0FDeEMsSUFBSSxTQUFTLEdBQUcsS0FBSyxJQUFJLFFBQVEsR0FBRyxJQUFJLElBQzNDO0FBQ0QsY0FBSSxVQUFVLE1BQU0sR0FBRyxDQUFDO0FBQ3hCLGlCQUFPO1FBQ1Q7QUFFQSxZQUFJLElBQUksUUFBUSxHQUFHLElBQUksSUFBSTtBQUN6QixjQUFJLFFBQVEsS0FBSztBQUNmLGdCQUFJLENBQUMsS0FBSyxNQUFNO0FBQ2Qsb0JBQU0sSUFBSSxNQUFNLHdDQUF3QyxPQUFPLE1BQU0sR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsR0FBRztZQUN6RjtBQUVBLGlCQUFLLFNBQVMsS0FBSyxVQUFVO0FBQzdCLGlCQUFLLFVBQVU7VUFDakIsT0FBTztBQUNMLGdCQUFJLFNBQVMsR0FBRztVQUNsQjtBQUVBLGlCQUFPO1FBQ1Q7QUFFQSxZQUFJLGNBQWMsR0FBRyxHQUFHO0FBQ3RCLGVBQUssU0FBUyxJQUFJLEdBQUc7QUFDckIsaUJBQU87UUFDVDtBQUVBLFlBQUksSUFBSSxPQUFPLE1BQU0sS0FBSztBQUN4QixjQUFJLFdBQVcsR0FBRztBQUNsQixpQkFBTztRQUNUO0FBRUEsWUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEdBQUcsS0FBSyxPQUFPLEdBQUcsS0FBSyxTQUFTLEdBQUcsR0FBRztBQUMvRCxnQkFBTSxLQUFLLEdBQUc7QUFFZCxjQUNFLENBQUMsUUFDRSxNQUFNLFdBQVcsS0FDakIsRUFBRSxPQUFPLElBQUksS0FBSyxPQUFPLElBQUksS0FBSyxTQUFTLElBQUksSUFDbEQ7QUFDQSxrQkFBTSxNQUFNLE1BQU0sT0FBTyxHQUFHLE1BQU0sTUFBTTtBQUN4QyxrQkFBTSxPQUFPLElBQUksQ0FBQztBQUVsQixnQkFBSSxPQUFPLElBQUksQ0FBQztBQUNoQixnQkFBSSxTQUFTLElBQUksQ0FBQztBQUVsQixnQkFBSSxDQUFDLFVBQVUsU0FBUyxJQUFJLEdBQUc7QUFDN0IsdUJBQVM7QUFDVCxxQkFBTztZQUNUO0FBRUEsZ0JBQ0UsS0FBSyxTQUFTLEtBQ1gsT0FBTyxJQUFJLE1BQ1YsT0FBTyxJQUFJLEtBQUssU0FBUyxNQUFNLElBQ25DO0FBQ0Esa0JBQUksUUFBUSxJQUFJLEtBQUssR0FBRyxDQUFDO0FBQ3pCLHFCQUFPO1lBQ1Q7QUFFQSxnQkFBSSxRQUFRLENBQUEsTUFBSztBQUNmLGtCQUFJLEVBQUUsU0FBUyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksUUFBUSxDQUFDLElBQUksUUFBUSxDQUFDO1lBQ3pELENBQUM7VUFDSDtBQUNBLGlCQUFPO1FBQ1Q7QUFFQSxZQUFJLE9BQU8sUUFBUSxZQUFZLElBQUksUUFBUSxJQUFJLElBQUksSUFBSTtBQUNyRCxnQkFBTSxRQUFRLElBQUksTUFBTSxJQUFJO0FBQzVCLGdCQUFNLE1BQU0sTUFBTSxDQUFDLEtBQUs7QUFDeEIsZ0JBQU0sTUFBTSxNQUFNLENBQUMsS0FBSztBQUV4QixpQkFBTztBQUNQLGdCQUFNLENBQUMsS0FBSyxHQUFHO1FBQ2pCO0FBRUEsWUFBSSxPQUFPLFFBQVEsYUFBYSxJQUFJLE9BQU8sTUFBTSxPQUFPLElBQUksT0FBTyxNQUFNLE1BQU07QUFDN0UsZ0JBQU0sV0FBVyxJQUFJLE9BQU8sTUFBTSxNQUFNLFdBQVc7QUFDbkQsZ0JBQU0sU0FBUyxJQUFJLE9BQU8sQ0FBQztBQUUzQixjQUFJLENBQUMsU0FBUyxNQUFNLEdBQUc7QUFDckIsa0JBQU0sSUFBSSxNQUFNLG1DQUFtQyxRQUFRLFlBQVksT0FBTyxNQUFNLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHO1VBQy9HO0FBRUEsY0FBSSxVQUFVLFdBQVcsTUFBTSxDQUFDO0FBQ2hDLGlCQUFPO1FBQ1Q7QUFFQSxZQUFJLENBQUMsUUFBUSxRQUFRLEdBQUcsTUFBTSxXQUFXLE1BQU0sUUFBUSxLQUFLLEtBQUssR0FBRztBQUNsRSxlQUFLLE1BQU0sQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDLEtBQUs7QUFDakMsZUFBSyxNQUFNLENBQUMsS0FBSyxLQUFLLE1BQU0sQ0FBQyxJQUFJLE1BQU07QUFDdkMsZUFBSyxNQUFNLENBQUMsS0FBSztBQUNqQixpQkFBTztRQUNUO0FBRUEsWUFBSSxRQUFRLFFBQVEsR0FBRyxHQUFHLE9BQU8sUUFBUSxZQUFZLFNBQVMsR0FBRyxJQUFJLFNBQVMsS0FBSyxFQUFFLElBQUksR0FBRztBQUM1RixlQUFPO01BQ1QsR0FBRyxJQUFJO0FBRVAsWUFBTSxJQUFJLFVBQVUsRUFBRSxJQUFJO0FBQzFCLGFBQU87SUFDVDs7OztBQzFQQSxJQStGYTtBQS9GYixJQXFHYTtBQXJHYixJQUFBLGFBQUFSLE9BQUE7RUFBQSwyQ0FBQTtBQStGYSxjQUFVLENBQUMsUUFDdEIsSUFBSSxTQUFTLElBQUksSUFBSSxLQUFLLE1BQU0sS0FBSyxPQUFPLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQztBQUs1QyxXQUFPLE1BQU0sQ0FBQyxDQUFDLEtBQUssTUFBTSxLQUFLLE9BQU8sQ0FBQztFQUFBO0FBQUEsQ0FBQTtBQ3JHcEQsSUFBQSxzQkFBQSxDQUFBO0FBQUFFLFVBQUEscUJBQUE7RUFBQSxpQkFBQSxNQUFBO0VBQUEsd0JBQUEsTUFBQTtFQUFBLGFBQUEsTUFBQTtBQUFBLENBQUE7QUFBQSxJQUFBO0FBQUEsSUFVYTtBQVZiLElBNEJNO0FBNUJOLElBMkNNO0FBM0NOLElBd0VhO0FBeEViLElBd0dNO0FBeEdOLElBaUtNO0FBaktOLElBa0tNO0FBbEtOLElBMkthO0FBM0tiLElBQUEsbUJBQUFGLE9BQUE7RUFBQSxpREFBQTtBQUFBLHVCQUFzQitDLFNBQUEsYUFBQSxDQUFBO0FBQ3RCLGVBQUE7QUFTYSxzQkFBa0IsQ0FBQyxTQUFpQjtBQUMvQyxZQUFNLFlBQTJCO1FBQy9CLFFBQVEsQ0FBQyxLQUFLLE1BQU0sT0FBTyxNQUFNLEtBQUssTUFBTSxTQUFNO1FBQ2xELFFBQVEsQ0FBQyxLQUFLLE1BQU0sT0FBTyxNQUFNLEtBQUssVUFBTyxLQUFLO1FBQ2xELFVBQVUsQ0FBQyxLQUFLLE1BQU0sT0FBTyxNQUFNLFNBQU0sTUFBTSxLQUFLO1FBQ3BELFFBQVEsQ0FBQyxLQUFLLE1BQU0sT0FBTyxVQUFPLEtBQUssTUFBTSxLQUFLO1FBQ2xELFlBQVksQ0FBQyxLQUFLLE1BQU0sV0FBUSxNQUFNLEtBQUssTUFBTSxLQUFLO1FBQ3RELFNBQVMsQ0FBQyxLQUFLLFVBQU8sT0FBTyxNQUFNLEtBQUssTUFBTSxLQUFLO1FBQ25ELFNBQVMsQ0FBQyxTQUFNLE1BQU0sT0FBTyxNQUFNLEtBQUssTUFBTSxLQUFLO1FBQ25ELGlCQUFpQixDQUFDLEtBQUssTUFBTSxRQUFRLE1BQU0sS0FBSyxVQUFPLFNBQU07UUFDN0Qsa0JBQWtCLENBQUMsS0FBSyxVQUFPLFFBQVEsTUFBTSxLQUFLLE1BQU0sU0FBTTtNQUNoRTtBQUNBLGdCQUFVLFFBQVEsVUFBVTtBQUM1QixnQkFBVSxRQUFRLFVBQVU7QUFFNUIsYUFBTyxVQUFVLElBQUksS0FBSyxDQUFDO0lBQzdCO0FBRU0sa0JBQTJCO01BQy9CLEdBQUc7TUFDSCxJQUFJO01BQ0osS0FBSztNQUNMLElBQUk7TUFDSixHQUFHO01BQ0gsSUFBSTtNQUNKLEtBQUs7SUFDUDtBQU9NLG1CQUFlLENBQUMsVUFBMEI7QUFFOUMsWUFBTSxNQUFNLE1BQU0sUUFBUSxPQUFPLEVBQUU7QUFDbkMsVUFBSSxTQUFTO0FBRWIsVUFBSSxJQUFJLFlBQVksTUFBTSxLQUFLO0FBQzdCLGlCQUFTO01BQ1g7QUFDQSxVQUFJLE1BQU0sUUFBUSxNQUFHLElBQUksSUFBSTtBQUMzQixlQUFPLFNBQVM7TUFDbEI7QUFDQSxVQUFJLE1BQU0sUUFBUSxHQUFHLElBQUksSUFBSTtBQUMzQixlQUFPLFNBQVM7TUFDbEI7QUFFQSxVQUFJLE1BQU0sUUFBUSxHQUFHLElBQUksSUFBSTtBQUMzQixlQUFPLFdBQVcsTUFBTSxTQUFTO01BQ25DO0FBRUEsYUFBTztJQUNUO0FBU2EsNkJBQXlCLENBQ3BDLGlCQUNBLGlCQUNXO0FBR1gsWUFBTSxxQkFBcUIsZ0JBQWdCLE1BQU0sR0FBRztBQUNwRCxVQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBRSxNQUFNLElBQUksR0FBRztBQUN0QywyQkFBbUIsQ0FBQyxLQUFLO0FBQ3pCLDBCQUFrQixtQkFBbUIsS0FBSyxHQUFHO01BQy9DO0FBR0EsWUFBTSxRQUFBLEdBQU8saUJBQUEsT0FBTSxlQUFlO0FBQ2xDLFlBQU0sa0JBQWtCLGFBQWEsUUFBUSxhQUFhLEdBQUcsRUFBRSxNQUFNLEdBQUc7QUFHeEUsWUFBTSxjQUFjLGdCQUFnQixJQUFJLENBQUMsT0FBTyxRQUFRO0FBQ3RELGNBQU0sWUFBWSxhQUFhLEtBQUs7QUFFcEMsY0FBTSxVQUFVLFlBQVksTUFBTSxRQUFRLFVBQVUsRUFBRSxFQUFFLFlBQVksQ0FBQztBQUVyRSxjQUFNakQsU0FBTyxLQUFLLE9BQU87QUFFekIsY0FBTSxNQUFNQSxPQUFLLFFBQVEsT0FBTyxFQUFFO0FBRWxDLGVBQU9BLE9BQUssUUFBUSxNQUFNLEVBQUUsSUFBSSxZQUFZLE1BQU07TUFDcEQsQ0FBQztBQUVELGFBQU8sWUFBWSxTQUFTLEVBQUUsUUFBUSxNQUFNLEdBQUc7SUFDakQ7QUFFTSxxQkFBaUIsQ0FBQyxFQUFFLEdBQUcsR0FBRyxFQUFFLE1BQVc7QUFDM0MsYUFBTyxDQUFDLFFBQWdCLE1BQU07QUFDNUIsY0FBTSxTQUFTLENBQUM7QUFHaEIsZUFBTyxLQUFLLFFBQVEsQ0FBQyxDQUFDO0FBRXRCLFlBQUksSUFBSTtBQUdSLFlBQUksSUFBSSxRQUFRLEdBQUc7QUFDakIsaUJBQU8sS0FBSyxRQUFRLENBQUMsQ0FBQztBQUN0QjtRQUNGO0FBR0EsWUFBSSxJQUFJLFFBQVEsS0FBSyxLQUFLLEdBQUc7QUFDM0IsaUJBQU8sS0FBSyxRQUFRLENBQUMsQ0FBQztBQUN0QjtRQUNGO0FBR0EsWUFBSSxJQUFJLFFBQVEsR0FBRztBQUVqQixpQkFBTyxLQUFLLFFBQVEsQ0FBQyxDQUFDO0FBQ3RCO1FBQ0Y7QUFFQSxZQUFJLElBQUksUUFBUSxHQUFHO0FBRWpCLGlCQUFPLEtBQUssUUFBUSxDQUFDLENBQUM7QUFDdEI7UUFDRjtBQUVBLFlBQUksSUFBSSxRQUFRLEdBQUc7QUFFakIsaUJBQU8sS0FBSyxRQUFRLENBQUMsQ0FBQztBQUN0QjtRQUNGO0FBR0EsWUFBSSxJQUFJLFFBQVEsS0FBSyxLQUFLLEdBQUc7QUFDM0IsaUJBQU8sS0FBSyxRQUFRLENBQUMsQ0FBQztBQUN0QjtRQUNGO0FBSUEsZUFBTyxJQUFJLE9BQU87QUFDaEIsaUJBQU8sS0FBSyxRQUFRLENBQUMsQ0FBQztBQUN0QjtRQUNGO0FBRUEsZUFBTztNQUNUO0lBQ0Y7QUFFTSxRQUFJLGVBQWUsRUFBRSxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNoRSxRQUFJLGVBQWUsRUFBRSxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQVN6RCxrQkFBYyxDQUFDLFdBQTZCLFFBQWdCLE1BQU07QUFDN0UsVUFBSSxjQUFjLFdBQVcsY0FBYyxLQUFLO0FBQzlDLGVBQU8sRUFBRSxLQUFLO01BQ2hCO0FBRUEsVUFBSSxjQUFjLFdBQVcsY0FBYyxLQUFLO0FBQzlDLGVBQU8sRUFBRSxLQUFLO01BQ2hCO0lBQ0Y7RUFBQTtBQUFBLENBQUE7QUNuTEEsSUFBQSxpQkFBQVUsWUFBQTs7UUFBQSxFQUFBLHdCQUFBd0MseUJBQVMsS0FBQSxpQkFBQSxHQUFBdEMsY0FBQSxtQkFBQTtBQUNULFFBQUEsRUFBQSxPQUFBdUMsUUFBUyxZQUFPLElBQUEsYUFBQTtBQUVoQixRQUFBLEVBQUEsZUFBUyxVQUFlLElBQUEsaUJBQUE7QUFDeEIsUUFBQSxFQUFBLFFBQVMsTUFBUSxJQUFBLGNBQUE7QUFFVixhQUFTQyxRQUFPLE9BQU8sU0FBUyxVQUFVO0FBQy9DLFVBQUksQ0FBQyxNQUFNLFFBQVEsS0FBSyxFQUFHLFFBQU87QUFFbEMsWUFBTSxLQUFLLE9BQU8sYUFBYSxhQUFhLFlBQVksQ0FBQSxNQUFLO0FBRTdELFVBQUk7QUFDSixhQUFPLE1BQU0sT0FBTyxDQUFDLE1BQU0sS0FBSyxNQUFNO0FBQ3BDLGNBQU0sT0FBTyxLQUFLLEtBQUssU0FBUyxDQUFDO0FBQ2pDLGNBQU0sT0FBTyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDOUIsY0FBTSxNQUFNLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQztBQUU3QixZQUFJLE1BQU07QUFDUixpQkFBTztBQUNQLGlCQUFPO1FBQ1Q7QUFFQSxZQUFJLE1BQU0sUUFBUSxHQUFHLEdBQUc7QUFDdEIsZUFBSyxLQUFLLEdBQUcsR0FBRztBQUNoQixpQkFBTztRQUNUO0FBRUEsWUFBSSxJQUFJLFNBQVMsV0FBVyxJQUFJLFVBQVUsS0FBSztBQUM3QyxjQUFJLEtBQUssU0FBUyxFQUFHLE1BQUssS0FBSyxLQUFLLENBQUMsQ0FBQztBQUN0QyxpQkFBTztRQUNUO0FBRUEsWUFBSSxJQUFJLFNBQVMsYUFBYSxJQUFJLFNBQVMsV0FBVztBQUNwRCxlQUFLLEtBQUssU0FBUyxDQUFDLEtBQUssSUFBSTtBQUM3QixpQkFBTztRQUNUO0FBRUEsZ0JBQVEsSUFBSSxNQUFNO1VBQ2hCLEtBQUs7VUFDTCxLQUFLO1VBQ0wsS0FBSztBQUNILGdCQUFJLElBQUksT0FBUSxNQUFLLEtBQUssR0FBRyxPQUFPLElBQUksT0FBTyxJQUFJLE1BQU0sQ0FBQztxQkFDakQsTUFBTSxRQUFRLElBQUksS0FBSyxFQUFHLE1BQUssS0FBSyxHQUFHLElBQUksS0FBSztnQkFDcEQsTUFBSyxLQUFLLElBQUksS0FBSztBQUN4QjtVQUVGLEtBQUs7QUFDSCxnQkFBSSxJQUFJLE9BQVEsTUFBSyxLQUFLLEdBQUcsT0FBTyxJQUFJLE9BQU8sSUFBSSxNQUFNLENBQUM7cUJBQ2pELElBQUksT0FBUSxNQUFLLEtBQUssR0FBRyxJQUFJLEtBQUs7Z0JBQ3RDLE1BQUssS0FBSyxJQUFJLEtBQUs7QUFFeEIsZ0JBQUksSUFBSSxTQUFTLFNBQVM7QUFDeEIscUJBQU87WUFDVDtBQUNBO1VBRUYsS0FBSztBQUNILGlCQUFLLEtBQUssU0FBUyxDQUFDLEtBQUssSUFBSTtBQUM3QixtQkFBTztVQUVULEtBQUs7QUFDSCxpQkFBSyxLQUFLLEdBQUcsT0FBTyxNQUFNLElBQUksUUFBUSxDQUFDLENBQUM7QUFDeEM7VUFFRixLQUFLO0FBQ0gsZ0JBQUksTUFBTSxRQUFRLElBQUksR0FBRztBQUN2QixtQkFBSyxLQUFLLFNBQVMsQ0FBQyxJQUFJLEtBQUssTUFBTSxJQUFJLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsQ0FBQztZQUNuRSxPQUFPO0FBQ0wsbUJBQUssS0FBSyxJQUFJLEtBQUs7WUFDckI7QUFDQTtVQUVGLEtBQUs7QUFDSCxpQkFBSyxLQUFLLFNBQVMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksS0FBSztBQUM1QztVQUVGLEtBQUs7VUFDTCxLQUFLO0FBQVM7QUFDWixrQkFBSSxRQUFRO0FBQ1osa0JBQUksT0FBTyxRQUFRLElBQUksS0FBSyxNQUFNLFlBQWEsU0FBUSxRQUFRLElBQUksS0FBSztBQUN4RSxrQkFBSSxVQUFVLE1BQU07QUFDbEIsc0JBQU0sSUFBSSxNQUFNLDJCQUEyQixJQUFJLEtBQUssR0FBRztjQUN6RDtBQUVBLGtCQUFJLE1BQU0sQ0FBQyxLQUFLLE1BQU0sQ0FBQyxFQUFFLE1BQU07QUFDN0Isd0JBQVFBLFFBQU8sT0FBTyxPQUFPO0FBRTdCLG9CQUFJLElBQUksUUFBUTtBQUNkLHVCQUFLLEtBQUssR0FBRyxPQUFPLE9BQU8sSUFBSSxNQUFNLEVBQUUsT0FBTyxDQUFDLE9BQU8sU0FBUztBQUM3RCwwQkFBTSxLQUFLLEdBQUcsSUFBSTtBQUNsQiwyQkFBTztrQkFDVCxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNSLE9BQU87QUFDTCx1QkFBSyxLQUFLLEdBQUcsS0FBSztnQkFDcEI7QUFFQSx1QkFBTztjQUNUO0FBRUEsc0JBQVEsTUFBTSxRQUFRLEtBQUssSUFBSSxRQUFRLENBQUMsS0FBSztBQUM3QyxrQkFBSSxJQUFJLE9BQVEsTUFBSyxLQUFLLEdBQUcsT0FBTyxPQUFPLElBQUksTUFBTSxDQUFDO2tCQUNqRCxNQUFLLEtBQUssR0FBRyxLQUFLO1lBQ3pCO0FBQUU7VUFDRixTQUFTO0FBQ1Asa0JBQU0sSUFBSSxNQUFNLGNBQWMsSUFBSSxJQUFJLEdBQUc7VUFDM0M7UUFDRjtBQUVBLGVBQU87TUFDVCxHQUFHLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxNQUFNLFNBQVM7QUFDNUIsY0FBTSxPQUFPLEtBQUssS0FBSyxTQUFTLENBQUM7QUFFakMsWUFDRSxNQUFNLFFBQVEsSUFBSSxLQUNmLE1BQU0sUUFBUSxJQUFJLEtBQ2xCLE9BQU8sS0FBSyxDQUFDLE1BQU0sWUFDbkIsS0FBSyxXQUFXLEdBQ25CO0FBQ0EsZ0JBQU0sU0FBUyxLQUFLLENBQUMsTUFBTSxXQUFXLEtBQUssU0FBUyxLQUFLLENBQUM7QUFDMUQsZ0JBQU0sQ0FBQyxNQUFNLE1BQU0sSUFBSSxPQUFPLE1BQU0sRUFBRSxNQUFNLElBQUk7QUFFaEQsZUFBSyxJQUFJO0FBQ1QsZUFBSyxLQUFLLEdBQUcsS0FBSyxNQUFNLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBRTFDLGNBQUksT0FBTyxNQUFNLEVBQUUsU0FBUyxHQUFHLEdBQUc7QUFDaEMsa0JBQU0sUUFBUSxLQUFLLE1BQU0sQ0FBQyxTQUFTLENBQUM7QUFFcEMsa0JBQU0sSUFBSTtBQUNWLGtCQUFNLFFBQVE7QUFDZCxpQkFBSyxLQUFLLEdBQUcsS0FBSztVQUNwQjtBQUNBLGlCQUFPO1FBQ1Q7QUFFQSxZQUFJLE9BQU8sU0FBUyxZQUFZLEtBQUssU0FBUyxHQUFHLEdBQUc7QUFDbEQsZ0JBQU0sU0FBUyxLQUFLLE1BQU0sR0FBRztBQUU3QixjQUFJLE9BQU8sS0FBSyxhQUFhLEdBQUc7QUFDOUIsa0JBQU0sU0FBUyxPQUFPLFVBQVUsYUFBYTtBQUM3QyxrQkFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxNQUFNLEdBQUcsTUFBTSxHQUFHLE9BQU8sTUFBTSxNQUFNLENBQUM7QUFFN0QsaUJBQUssS0FBS0YseUJBQXVCLEVBQUUsS0FBSyxHQUFHLEdBQUcsRUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFLE1BQU0sR0FBRyxFQUFFLElBQUksQ0FBQSxNQUFLLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQ3BHLE9BQU87QUFDTCxpQkFBSyxLQUFLLEdBQUdDLE9BQU0sSUFBSSxDQUFDLENBQUM7VUFDM0I7UUFDRixPQUFPO0FBQ0wsZUFBSyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3BCO0FBQ0EsZUFBTztNQUNULEdBQUcsQ0FBQyxDQUFDO0lBQ1A7QUFFTyxhQUFTeEQsT0FBTSxRQUFRO0FBQzVCLFlBQU0sU0FBUyxDQUFDO0FBQ2hCLFlBQU0sT0FBTyxDQUFDO0FBQ2QsWUFBTSxPQUFPLENBQUM7QUFFZCxVQUFJLFVBQVU7QUFDZCxVQUFJLFNBQVM7QUFDYixVQUFJO0FBQ0osVUFBSSxPQUFPLENBQUM7QUFDWixhQUFPLE1BQU0sUUFBUSxFQUFFLFFBQVEsQ0FBQyxNQUFNLFFBQVE7QUFDNUMsZUFBTyxLQUFLLFFBQVEsU0FBUyxFQUFFLEVBQUUsS0FBSztBQUN0QyxZQUFJLENBQUMsS0FBTTtBQUVYLFlBQUk7QUFDRixjQUFJLEtBQUssT0FBTyxNQUFNLEtBQUs7QUFDekIsa0JBQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxJQUFJLEtBQUssTUFBTSxLQUFLO0FBRXpDLGdCQUFJLE1BQU0sU0FBUyxHQUFHO0FBQ3BCLG1CQUFLLElBQUksSUFBSSxVQUFVLE1BQU0sS0FBSyxHQUFHLENBQUM7WUFDeEM7VUFDRixXQUFXLEtBQUssUUFBUSxJQUFJLEtBQUssR0FBRztBQUNsQyxnQkFBSSxPQUFPO0FBQ1QscUJBQU8sS0FBSyxJQUFJO0FBQ2hCLHdCQUFVO0FBQ1YsdUJBQVM7QUFDVCxxQkFBTyxDQUFDO1lBQ1Y7QUFFQSxvQkFBUSxLQUFLLE1BQU0sS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFFLEtBQUssR0FBRztVQUM3QyxXQUFXLEtBQUssT0FBTyxNQUFNLEtBQUs7QUFDaEMsaUJBQUssS0FBSyxVQUFVLEtBQUssT0FBTyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7VUFDNUMsV0FBVyxLQUFLLE9BQU8sTUFBTSxLQUFLO0FBQ2hDLGtCQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sSUFBSSxLQUFLLE9BQU8sQ0FBQyxFQUFFLE1BQU0sR0FBRztBQUVsRCxnQkFBSSxPQUFPLENBQUMsTUFBTSxLQUFLO0FBQ3JCLG9CQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsQ0FBQztBQUV4QixxQkFBTyxLQUFLLElBQUksRUFDYixPQUFPLENBQUEsTUFBSyxFQUFFLFFBQVEsR0FBRyxNQUFNLENBQUMsRUFDaEMsUUFBUSxDQUFBLE1BQUs7QUFDWixxQkFBSyxHQUFHLElBQUksSUFBSSxFQUFFLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksTUFBTSxLQUFLLENBQUMsQ0FBQztjQUNwRCxDQUFDO1lBQ0w7QUFDQSxxQkFBUztVQUNYLFdBQVcsS0FBSyxRQUFRLEdBQUcsSUFBSSxHQUFHO0FBQ2hDLGtCQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssSUFBSSxLQUFLLE1BQU0sR0FBRztBQUV2QyxpQkFBSyxJQUFJLElBQUksVUFBVSxNQUFNLEtBQUssR0FBRyxFQUFFLEtBQUssQ0FBQztVQUMvQyxPQUFPO0FBQ0wsa0JBQU0sUUFBUSxVQUFVLElBQUk7QUFFNUIsZ0JBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxNQUFNLENBQUMsRUFBRSxTQUFTLFdBQVc7QUFDNUMsa0JBQUksQ0FBQyxRQUFTLE9BQU0sSUFBSSxVQUFVLDJCQUEyQixJQUFJLEdBQUc7QUFFcEUsb0JBQU0sTUFBTSxLQUFLLE9BQU8sRUFBRSxLQUFLLE9BQU8sRUFBRSxTQUFTLENBQUM7QUFFbEQsa0JBQUksQ0FBQyxJQUFJLE9BQVEsS0FBSSxTQUFTLENBQUMsRUFBRSxNQUFNLFVBQVUsT0FBTyxJQUFJLENBQUM7QUFDN0Qsa0JBQUksT0FBTyxLQUFLLEdBQUcsS0FBSztBQUN4QjtZQUNGO0FBRUEsa0JBQU0sUUFBUSxNQUFNLFVBQVUsQ0FBQSxNQUFLLENBQUMsUUFBUSxTQUFTLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDO0FBQzlFLGtCQUFNLFFBQVEsTUFBTSxVQUFVLENBQUEsTUFBSyxFQUFFLFNBQVMsU0FBUztBQUN2RCxrQkFBTSxRQUFRLFFBQVEsSUFBSSxNQUFNLE1BQU0sS0FBSyxJQUFJO0FBQy9DLGtCQUFNLFNBQVMsTUFBTSxVQUFVLENBQUEsTUFBSyxFQUFFLFNBQVMsU0FBUztBQUN4RCxrQkFBTSxTQUFTLE1BQU0sTUFBTSxHQUFHLFFBQVEsSUFBSSxRQUFRLENBQUM7QUFFbkQsc0JBQVUsU0FBUyxPQUFPLENBQUMsRUFBRTtBQUM3QixnQkFBSSxDQUFDLEtBQUssT0FBTyxHQUFHO0FBQ2xCLG1CQUFLLE9BQU8sSUFBSSxDQUFDO1lBQ25CO0FBRUEsZ0JBQUk7QUFDSixnQkFBSSxRQUFRLEtBQUssVUFBVSxJQUFJO0FBQzdCLG9CQUFNLE1BQU0sS0FBSyxPQUFPLEVBQUUsS0FBSyxPQUFPLEVBQUUsU0FBUyxDQUFDO0FBRWxELGtCQUFJLE9BQU8sTUFBTSxNQUFNLEtBQUs7QUFDNUIscUJBQU87Z0JBQ0wsT0FBTyxJQUFJO2dCQUNYLFFBQVEsTUFBTSxNQUFNLEdBQUcsS0FBSztjQUM5QjtZQUNGLFdBQVcsU0FBUyxHQUFHO0FBQ3JCLHFCQUFPO2dCQUNMLE1BQU0sTUFBTSxNQUFNLE1BQU07Z0JBQ3hCLE9BQU8sTUFBTSxNQUFNLEdBQUcsTUFBTTtjQUM5QjtZQUNGLFdBQVcsV0FBVyxHQUFHO0FBQ3ZCLHFCQUFPLEVBQUUsUUFBUSxNQUFNLE1BQU0sQ0FBQyxFQUFFO1lBQ2xDLE9BQU87QUFDTCxxQkFBTyxFQUFFLE9BQU8sTUFBTTtZQUN4QjtBQUVBLGdCQUFJLE9BQU8sU0FBUyxHQUFHO0FBQ3JCLG1CQUFLLFNBQVMsT0FBTyxNQUFNLENBQUM7WUFDOUI7QUFDQSxpQkFBSyxPQUFPLEVBQUUsS0FBSyxJQUFJO1VBQ3pCO1FBQ0YsU0FBUyxHQUFHO0FBQ1YsZ0JBQU0sTUFBTSxPQUFPLE1BQU0sV0FBVyxJQUFJLEVBQUU7QUFFMUMsZ0JBQU0sSUFBSSxZQUFZLEdBQUcsR0FBRztZQUFlLE1BQU0sQ0FBQztFQUFLLElBQUksRUFBRTtRQUMvRDtNQUNGLENBQUM7QUFFRCxVQUFJLE9BQU87QUFDVCxlQUFPLEtBQUssSUFBSTtNQUNsQjtBQUNBLGFBQU8sRUFBRSxNQUFNLE1BQU0sT0FBTztJQUM5Qjs7OztBQ3BRQSxJQUFBLGdCQUFBZSxZQUFBOztRQUFBLEVBQUEsTUFBUyxJQUFBQyxlQUFBO0FBQ1QsUUFBQSxFQUFBLE1BQVMsTUFBTSxJQUFBLGlCQUFBO0FBQ2YsUUFBQSxFQUFBLEtBQVMsUUFBSyxJQUFBLGNBQUE7QUFDZCxRQUFBLEVBQUEsT0FBUyxVQUFPLElBQUEsaUJBQUE7QUFDaEIsUUFBQSxFQUFBLFFBQUF5QyxRQUFTLElBQUEsZUFBQTtBQUVULFFBQU0sVUFBVSxPQUFPLE9BQU87QUFFdkIsYUFBU1osT0FBTTlDLFFBQU0sTUFBTSxLQUFLLFNBQVMsSUFBSTtBQUNsRCxZQUFNLE9BQU8sSUFBSSxLQUFLO0FBQ3RCLFlBQU0sSUFBSTtBQUNWLFlBQU0sSUFBSSxDQUFDO0FBRVgsYUFBTyxTQUFTO0FBRWhCLFVBQUksS0FBSztBQUNULGVBQVMsSUFBSSxLQUFLLE1BQU07QUFDdEIsY0FBTSxNQUFNLE1BQU07QUFFbEIsWUFBSSxDQUFDLElBQUksR0FBRyxHQUFHO0FBQ2IsZ0JBQU0sUUFBUSxJQUFJLE1BQU07QUFDeEIsZ0JBQU0sT0FBTyxRQUFRLE1BQU0sSUFBSTtBQUUvQixlQUFLLFNBQVMsS0FBSztBQUNuQixjQUFJLEdBQUcsSUFBSSxFQUFFLE1BQU0sTUFBTTtBQUN6QixjQUFJLFFBQVEsSUFBSyxPQUFNO1FBQ3pCO0FBQ0EsZUFBTyxJQUFJLEdBQUc7TUFDaEI7QUFFQUEsTUFBQUEsT0FBSyxRQUFRLENBQUEsWUFBVztBQUN0QixnQkFBUSxRQUFRLENBQUEsVUFBUztBQUN2QixnQkFBTSxRQUFRLENBQUEsTUFBSztBQUNqQixrQkFBTSxFQUFFLE1BQU0sTUFBTSxJQUFJLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFFdEMsa0JBQU0sU0FBUyxHQUFHO0FBQ2xCLGdCQUFJLFNBQVMsR0FBRztBQUNkLG9CQUFNLFdBQVcsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUM3QjtBQUVBLHFCQUFTLElBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLFFBQVEsS0FBSyxHQUFHO0FBQ3ZDLG9CQUFNLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQztBQUVuQixrQkFBSSxLQUFLLElBQUksR0FBRztBQUNkLHNCQUFNTSxTQUFPLEtBQUssS0FBSztBQUV2QixvQkFBSSxNQUFNLFFBQVFBLE1BQUksR0FBRztBQUN2Qix3QkFBTSxRQUFRLE1BQU0sSUFBSSxDQUFDO0FBQ3pCLHdCQUFNLFNBQVMsTUFBTUEsUUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDdEMsT0FBTztBQUNMLHdCQUFNLE9BQU8sTUFBTUEsUUFBTSxHQUFHLEtBQUssQ0FBQztBQUNsQyx3QkFBTSxRQUFRLE1BQU1BLFFBQU0sQ0FBQztnQkFDN0I7Y0FDRixPQUFPO0FBQ0wsc0JBQU0sUUFBUSxNQUFNLElBQUksSUFBSSxDQUFDO2NBQy9CO1lBQ0Y7VUFDRixDQUFDO1FBQ0gsQ0FBQztNQUNILENBQUM7QUFDRCxhQUFPLEtBQUssUUFBUTtJQUN0QjtBQUVPLGFBQVMsS0FBSyxRQUFRLE9BQU87QUFDbEMsVUFBSTtBQUNKLGVBQVMsUUFBUSxHQUFHO0FBQ2xCLFlBQUksTUFBTSxRQUFRLENBQUMsR0FBRztBQUNwQixpQkFBTyxFQUFFLElBQUksT0FBTztRQUN0QjtBQUVBLFlBQUk7QUFDSixZQUFJLENBQUMsTUFBTSxTQUFTLENBQUMsR0FBRztBQUN0QixrQkFBUSxFQUFFLEdBQUcsS0FBSyxHQUFHLEVBQUU7UUFDekIsT0FBTztBQUNMLGtCQUFRLEVBQUUsR0FBRyxNQUFNLE1BQU0sSUFBSSxJQUFJO1FBQ25DO0FBRUEsWUFBSSxNQUFNLEtBQUs7QUFDYixnQkFBTSxJQUFJLE9BQU8sT0FBTyxNQUFNLE1BQU0sY0FBYyxPQUFPLE1BQU0sSUFBSSxNQUFNLEtBQUs7QUFDOUUsY0FBSSxPQUFPLE1BQU0sTUFBTSxNQUFNLFlBQWEsT0FBTSxJQUFJLE1BQU0sTUFBTTtBQUNoRSxjQUFJLE9BQU8sV0FBVyxFQUFHLE9BQU0sSUFBSSxPQUFPLENBQUM7QUFDM0MsY0FBSSxNQUFNLEtBQUssTUFBTSxFQUFHLFdBQVU7UUFDcEM7QUFDQSxlQUFPO01BQ1Q7QUFFQSxhQUFPLENBQUEsVUFBUztBQUNkLFlBQUksU0FBUztBQUNiLFlBQUksT0FBTyxVQUFVLFVBQVU7QUFDN0IsY0FBSSxVQUFVLEtBQUssR0FBRztBQUNwQixxQkFBUztBQUNULHFCQUFTLE1BQU0sS0FBSyxFQUFFLElBQUksT0FBTztVQUNuQztRQUNGO0FBQ0EsZUFBTztNQUNUO0lBQ0Y7QUFFTyxhQUFTcUQsT0FBTSxLQUFLO0FBQ3pCLFlBQU0sU0FBUyxDQUFDO0FBRWhCLGFBQU8sUUFBUSxJQUFJLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxNQUFNLFFBQVEsTUFBTTtBQUN2RCxlQUFPLFFBQVEsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNO0FBQ2hELGdCQUFNLENBQUMsS0FBSzNELE1BQUksSUFBSSxHQUFHLE1BQU0sR0FBRztBQUNoQyxnQkFBTSxNQUFNLE9BQU87QUFFbkIsY0FBSTtBQUNKLGNBQUksTUFBTTtBQUNWLGdCQUFNLFFBQVEsQ0FBQSxTQUFRO0FBQ3BCLGtCQUFNLFNBQVMsS0FBSyxTQUFTMEQsUUFBTyxLQUFLLFFBQVEsSUFBSSxJQUFJLElBQUksQ0FBQztBQUM5RCxrQkFBTSxRQUFRLEtBQUssT0FBT0EsUUFBTyxLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksQ0FBQztBQUV6RCxnQkFBSSxLQUFLLE9BQU87QUFDZCxrQkFBSSxPQUFPLFNBQVMsRUFBRyxRQUFPLE1BQU07QUFFcEMsb0JBQU0sUUFBUSxRQUFRQSxRQUFPLEtBQUssT0FBTyxJQUFJLE1BQU0sS0FBSyxRQUFRLEtBQUssQ0FBQyxDQUFDO0FBRXZFLGtCQUFJLENBQUMsT0FBTztBQUNWLHdCQUFRO0FBQ1I7Y0FDRjtBQUVBLGtCQUFJLE9BQU8sT0FBTyxDQUFDLEdBQUcsTUFBTTtBQUMxQixvQkFBSSxFQUFFLElBQUksRUFBRyxHQUFFLElBQUksRUFBRTtjQUN2QixDQUFDO1lBQ0g7QUFFQSxnQkFBSSxPQUFPO0FBQ1Qsb0JBQU0sT0FBTyxLQUFLLFVBQ2IsS0FBSyxPQUFPLENBQUMsS0FDYixLQUFLLE9BQU8sQ0FBQyxFQUFFLFNBQVMsU0FBUyxLQUFLLE9BQU8sQ0FBQyxFQUFFLFFBQVE7QUFFN0Qsb0JBQU0sUUFBUSxDQUFBLFNBQVE7QUFDcEIsb0JBQUksS0FBSyxJQUFJLEdBQUc7QUFDZCxzQkFBSSxDQUFDLEtBQUssS0FBSyxNQUFNLFNBQVMsRUFBRyxNQUFLLElBQUksTUFBTSxNQUFNO0FBQ3RELHNCQUFJLFFBQVEsT0FBTyxTQUFTLEVBQUcsTUFBSyxLQUFLLENBQUMsRUFBRSxZQUFZLENBQUMsSUFBSSxPQUFPLE1BQU07Z0JBQzVFO2NBQ0YsQ0FBQztZQUNIO1VBQ0YsQ0FBQztBQUVELGNBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRyxRQUFPLEdBQUcsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFO0FBQzdDLGlCQUFPLEdBQUcsRUFBRSxPQUFPLEtBQUssQ0FBQzFELFFBQU0sTUFBTSxLQUFLLENBQUM7UUFDN0MsQ0FBQztNQUNILENBQUM7QUFFRCxVQUFJLENBQUMsSUFBSSxLQUFLLFFBQVE7QUFDcEIsWUFBSSxPQUFPLENBQUMsQ0FBQyxFQUFFLE1BQU0sU0FBUyxPQUFPLFFBQVEsQ0FBQyxDQUFDO01BQ2pEO0FBRUEsYUFBTyxJQUFJLEtBQUssSUFBSSxDQUFBLFVBQVM7QUFDM0IsZUFBTzBELFFBQU8sT0FBTyxNQUFNLEVBQUUsSUFBSSxDQUFBLFNBQVE7QUFDdkMsaUJBQU8sQ0FBQyxFQUFFLE9BQU8sSUFBSSxFQUFFLE9BQU8sQ0FBQyxNQUFNLE1BQU07QUFDekMsaUJBQUssS0FBSyxHQUFHLEVBQUUsTUFBTTtBQUNyQixtQkFBTztVQUNULEdBQUcsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztNQUNILENBQUM7SUFDSDs7OztBQzlKQSxJQUFBLGNBQUEsQ0FBQTtBQUFBaEQsVUFBQSxhQUFBO0VBQUEsT0FBQSxNQUFBLGFBQUE7RUFBQSxPQUFBLE1BQUEsY0FBQTtBQUFBLENBQUE7QUFBQSxJQUFBLGVBQXNCNkMsU0FBQSxjQUFBLENBQUE7QUFDdEIsSUFBQSxnQkFBc0JBLFNBQUEsZUFBQSxDQUFBO0FBQ3RCLFdBQUEsYUFBY0EsU0FBQSxjQUFBLENBQUEsQ0FBQTtBQUNkLFdBQUEsYUFBY0EsU0FBQSxjQUFBLENBQUEsQ0FBQTtBQUNkLFdBQUEsYUFBY0EsU0FBQSxlQUFBLENBQUEsQ0FBQTtBQUNkLFdBQUEsYUFBY0EsU0FBQSxpQkFBQSxDQUFBLENBQUE7Ozs7O0FiSGQsSUFBQUssaUJBQXVCO0FBQ3ZCLG9CQUE2QjtBQUM3QixtQkFBNEI7QUFFNUIsSUFBSSxRQUFRO0FBQ1osSUFBSSxPQUFPO0FBQ1gsSUFBSSxZQUFZO0FBQ2hCLElBQUksVUFBVTtBQUNkLElBQUksZ0JBQWdCO0FBQ3BCLElBQUksbUJBQW1CO0FBQ3ZCLElBQUksWUFBWTtBQUNoQixJQUFJLFdBQVc7QUFDZixJQUFJLGNBQWM7QUFFbEIsSUFBTSxJQUFJLE9BQU8sS0FBSyxJQUFJLGNBQUFDLFFBQU87QUFDakMsT0FBTyxJQUFJO0FBRVgsSUFBTSxjQUFjO0FBRXBCLElBQU0sYUFBYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBeURuQixJQUFNLFNBQVM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQXFDYixLQUFLO0FBRVAsSUFBTSxhQUFhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQWNqQixLQUFLO0FBRVAsSUFBTSxRQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFnQlosS0FBSztBQUVQLElBQU0sVUFBVTtBQUFBLEVBQ2QsUUFBUTtBQUFBLEVBQ1IsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osT0FBTztBQUNUO0FBRUEsSUFBTSxnQkFBZ0I7QUFBQSxFQUNwQixRQUFRO0FBQUEsRUFDUixZQUFZO0FBQUEsRUFDWixZQUFZO0FBQUEsRUFDWixPQUFPO0FBQ1Q7QUFFQSxJQUFNLGFBQWE7QUFBQSxFQUNqQixPQUFPO0FBQUEsRUFDUCxPQUFPO0FBQUEsRUFDUCxRQUFRO0FBQUEsRUFDUixVQUFVO0FBQUEsRUFDVixRQUFRO0FBQUEsRUFDUixZQUFZO0FBQUEsRUFDWixTQUFTO0FBQ1g7QUFFQSxTQUFTLE1BQU1DLE9BQU07QUFDbkIsUUFBTSxNQUFNLENBQUM7QUFFYixXQUFTLElBQUksS0FBSyxNQUFNO0FBQ3RCLFVBQU0sTUFBTSxNQUFNO0FBRWxCLFFBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRztBQUNiLFlBQU0sUUFBUSxDQUFDLEtBQUssTUFBTSxDQUFDLENBQUM7QUFDNUIsVUFBSSxLQUFLLEtBQUs7QUFDZCxVQUFJLEdBQUcsSUFBSSxFQUFFLE1BQU07QUFBQSxJQUNyQjtBQUNBLFdBQU8sSUFBSSxHQUFHO0FBQUEsRUFDaEI7QUFFQSxFQUFBQSxNQUFLLFFBQVEsYUFBVztBQUN0QixZQUFRLFFBQVEsV0FBUztBQUN2QixZQUFNLFFBQVEsT0FBSztBQUNqQixjQUFNLEVBQUUsTUFBTSxJQUFJLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDaEMsaUJBQVMsSUFBSSxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsUUFBUSxLQUFLLEdBQUc7QUFDdkMsZ0JBQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQUEsUUFDdkI7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNILENBQUM7QUFBQSxFQUNILENBQUM7QUFDRCxTQUFPO0FBQ1Q7QUFFQSxTQUFTLFFBQVEsT0FBTztBQUN0QixNQUFJO0FBQ0Ysa0JBQWMsYUFBTSxLQUFLO0FBQ3pCLFdBQU8sTUFBTSxhQUFNLFdBQVcsQ0FBQztBQUFBLEVBQ2pDLFNBQVMsR0FBRztBQUNWLGtCQUFjO0FBQ2QsWUFBUSxNQUFNLGdCQUFnQixDQUFDO0FBQy9CLGNBQVUsRUFBRSxXQUFXLGFBQWE7QUFDcEMsV0FBTyxDQUFDO0FBQUEsRUFDVjtBQUNGO0FBRUEsU0FBUyxrQkFBa0IsTUFBTTtBQUMvQixNQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksUUFBUSxDQUFDLFlBQVksS0FBSyxJQUFJLEVBQUcsUUFBTztBQUN6RSxNQUFJO0FBQ0YsVUFBTSxXQUFPLHVCQUFPLFlBQVksS0FBSyxJQUFJLEdBQUcsWUFBWSxJQUFJO0FBQzVELFVBQU0sTUFBTSxNQUFNLFFBQVEsSUFBSSxJQUFJLEtBQUssS0FBSyxRQUFRLElBQUksQ0FBQyxJQUFJO0FBQzdELFVBQU0sUUFBUSxJQUFJLE1BQU0sR0FBRyxFQUFFLEVBQUUsSUFBSSxVQUNqQyxNQUFNLFFBQVEsSUFBSSxJQUFJLEtBQUssS0FBSyxHQUFHLElBQUksT0FBTyxJQUFJLENBQ25EO0FBQ0QsV0FBTyxNQUFNLEtBQUssSUFBSSxLQUFLLElBQUksU0FBUyxNQUFNLFNBQVMsWUFBTztBQUFBLEVBQ2hFLFNBQVMsR0FBRztBQUNWLFdBQU87QUFBQSxFQUNUO0FBQ0Y7QUFFQSxTQUFTLHlCQUF5QixPQUFPO0FBQ3ZDLFFBQU0sSUFBSSxTQUFTLE9BQU8sRUFBRTtBQUM1QixNQUFJLE9BQU8sTUFBTSxDQUFDLEVBQUcsUUFBTztBQUM1QixNQUFJO0FBQ0YsVUFBTSxPQUFPLEtBQUssTUFDZCxFQUFFLE9BQU8sT0FBTyxTQUFTLElBQUksR0FBSSxJQUNqQyxFQUFFLE9BQU8sT0FBTyxlQUFlLENBQUM7QUFDcEMsV0FBTyxRQUFRLEtBQUssUUFBUSxLQUFLLFFBQVE7QUFBQSxFQUMzQyxTQUFTLEdBQUc7QUFDVixXQUFPO0FBQUEsRUFDVDtBQUNGO0FBRUEsU0FBUyxtQkFBbUIsTUFBTTtBQUNoQyxNQUFJLENBQUMsS0FBTSxRQUFPO0FBQ2xCLFNBQU8sV0FBVyxLQUFLLFlBQVksQ0FBQyxLQUFLO0FBQzNDO0FBRUEsU0FBUyxzQkFBc0IsTUFBTTtBQUNuQyxNQUFJLENBQUMsVUFBVyxRQUFPO0FBQ3ZCLFFBQU0sUUFBUSxVQUFVLFNBQVMsRUFBRSxNQUFNLElBQUk7QUFDN0MsUUFBTSxnQkFBZ0IsSUFBSSxJQUFJO0FBQzlCLFFBQU0sUUFBUSxNQUFNLFVBQVUsVUFBUSxLQUFLLEtBQUssTUFBTSxhQUFhO0FBQ25FLE1BQUksUUFBUSxFQUFHLFFBQU87QUFFdEIsUUFBTSxVQUFVLENBQUM7QUFDakIsV0FBUyxJQUFJLFFBQVEsR0FBRyxJQUFJLE1BQU0sVUFBVSxRQUFRLFNBQVMsR0FBRyxLQUFLLEdBQUc7QUFDdEUsVUFBTSxPQUFPLE1BQU0sQ0FBQztBQUNwQixRQUFJLFFBQVEsS0FBSyxJQUFJLEVBQUc7QUFDeEIsUUFBSSxLQUFLLEtBQUssRUFBRyxTQUFRLEtBQUssS0FBSyxLQUFLLENBQUM7QUFBQSxFQUMzQztBQUNBLFNBQU8sUUFBUSxTQUFTLFFBQVEsS0FBSyxLQUFLLElBQUk7QUFDaEQ7QUFFQSxTQUFTLFVBQVUsS0FBSztBQUN0QixlQUFhLGdCQUFnQjtBQUM3QixRQUFNLFdBQVcsU0FBUyxlQUFlLGdCQUFnQjtBQUN6RCxRQUFNLFlBQVksU0FBUyxlQUFlLFdBQVc7QUFDckQsTUFBSSxVQUFVO0FBQ1osYUFBUyxjQUFjLFVBQVUsR0FBRztBQUFBLEVBQ3RDO0FBQ0EsTUFBSSxXQUFXO0FBQ2IsY0FBVSxRQUFRLFFBQVE7QUFBQSxFQUM1QjtBQUNGO0FBRUEsU0FBUyxXQUFXLEtBQUssUUFBUSxTQUFTO0FBQ3hDLGVBQWEsZ0JBQWdCO0FBQzdCLFFBQU0sV0FBVyxTQUFTLGVBQWUsZ0JBQWdCO0FBQ3pELFFBQU0sWUFBWSxTQUFTLGVBQWUsV0FBVztBQUNyRCxNQUFJLFVBQVU7QUFDWixhQUFTLGNBQWM7QUFBQSxFQUN6QjtBQUNBLE1BQUksV0FBVztBQUNiLGNBQVUsUUFBUSxRQUFRO0FBQUEsRUFDNUI7QUFDRjtBQUVBLFNBQVMsaUJBQWlCO0FBQ3hCLGFBQVcsU0FBUyxPQUFPO0FBQzdCO0FBRUEsU0FBUyxZQUFZO0FBQ25CLGFBQVcsbUJBQW1CLFNBQVM7QUFDekM7QUFFQSxTQUFTLGNBQWM7QUFDckIsUUFBTSxNQUFNLG9CQUFJLEtBQUs7QUFDckIsUUFBTSxLQUFLLE9BQU8sSUFBSSxTQUFTLENBQUMsRUFBRSxTQUFTLEdBQUcsR0FBRztBQUNqRCxRQUFNLEtBQUssT0FBTyxJQUFJLFdBQVcsQ0FBQyxFQUFFLFNBQVMsR0FBRyxHQUFHO0FBQ25ELGFBQVcsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLE9BQU87QUFDekM7QUFFQSxTQUFTLGFBQWEsTUFBTTtBQUMxQixRQUFNLE1BQU0sSUFBSSxJQUFJLE9BQU8sU0FBUyxJQUFJO0FBQ3hDLE1BQUksTUFBTTtBQUNSLFFBQUksYUFBYSxJQUFJLFFBQVEsSUFBSTtBQUFBLEVBQ25DLE9BQU87QUFDTCxRQUFJLGFBQWEsT0FBTyxNQUFNO0FBQUEsRUFDaEM7QUFDQSxTQUFPLFFBQVEsYUFBYSxDQUFDLEdBQUcsSUFBSSxJQUFJLFNBQVMsQ0FBQztBQUNwRDtBQUVBLFNBQVMsbUJBQW1CO0FBQzFCLFFBQU0sVUFBVSxTQUFTLGVBQWUsVUFBVTtBQUNsRCxNQUFJLFFBQVMsU0FBUSxjQUFjLFVBQVUsc0JBQWlCO0FBQ2hFO0FBRUEsU0FBUyxpQkFBaUIsTUFBTTtBQUM5QixRQUFNLFNBQVMsUUFBUSxJQUFJO0FBQzNCLE1BQUksQ0FBQyxhQUFhLENBQUMsT0FBUTtBQUUzQixZQUFVLFNBQVMsT0FBTyxLQUFLLENBQUM7QUFDaEMsZUFBYSxRQUFRLGFBQWEsVUFBVSxTQUFTLENBQUM7QUFDdEQsZUFBYSxJQUFJO0FBQ2pCLGFBQVcsa0JBQWtCLGNBQWMsSUFBSSxLQUFLLElBQUksSUFBSSxPQUFPO0FBQ25FLGFBQVc7QUFDWCxZQUFVLE1BQU07QUFDbEI7QUFFQSxTQUFTLFVBQVUsTUFBTTtBQUN2QixNQUFJLENBQUMsU0FBVTtBQUNmLFdBQVMsT0FBTyxJQUFJO0FBQ3RCO0FBRUEsU0FBUyxzQkFBc0I7QUFDN0IsV0FBUyxpQkFBaUIsV0FBVyxPQUFLO0FBQ3hDLFVBQU0sU0FBUyxFQUFFO0FBQ2pCLFVBQU0sZUFBZSxXQUNuQixPQUFPLFlBQVksY0FDaEIsT0FBTyxZQUFZLFdBQ25CLE9BQU8sWUFBWTtBQUd4QixRQUFJLEVBQUUsU0FBUyxXQUFXLENBQUMsY0FBYztBQUN2QyxRQUFFLGVBQWU7QUFDakIsVUFBSSxRQUFTLE1BQUs7QUFBQSxVQUNiLE1BQUs7QUFBQSxJQUNaO0FBQ0EsUUFBSSxFQUFFLFNBQVMsVUFBVTtBQUN2QixXQUFLO0FBQUEsSUFDUDtBQUFBLEVBQ0YsQ0FBQztBQUNIO0FBRUEsU0FBUyxVQUFVLGFBQWEsZUFBZTtBQUM3QyxXQUFTLEtBQUssWUFBWTtBQUUxQixRQUFNLFVBQVUsU0FBUyxjQUFjLEtBQUs7QUFDNUMsVUFBUSxLQUFLO0FBRWIsUUFBTSxZQUFZLFNBQVMsY0FBYyxHQUFHO0FBQzVDLFlBQVUsS0FBSztBQUNmLFlBQVUsT0FBTztBQUNqQixZQUFVLGNBQWM7QUFFeEIsUUFBTSxVQUFVLFNBQVMsY0FBYyxRQUFRO0FBQy9DLFVBQVEsS0FBSztBQUNiLFVBQVEsY0FBYztBQUN0QixVQUFRLGlCQUFpQixTQUFTLElBQUk7QUFFdEMsUUFBTSxVQUFVLFNBQVMsY0FBYyxRQUFRO0FBQy9DLFVBQVEsS0FBSztBQUNiLFVBQVEsY0FBYztBQUN0QixVQUFRLGlCQUFpQixTQUFTLElBQUk7QUFFdEMsUUFBTSxXQUFXLFNBQVMsY0FBYyxRQUFRO0FBQ2hELFdBQVMsS0FBSztBQUNkLFdBQVMsY0FBYztBQUN2QixRQUFNLFVBQVUsU0FBUyxjQUFjLFFBQVE7QUFDL0MsVUFBUSxLQUFLO0FBQ2IsVUFBUSxjQUFjO0FBQ3RCLFVBQVEsV0FBVztBQUNuQixVQUFRLFFBQVE7QUFFaEIsUUFBTSxjQUFjLFNBQVMsY0FBYyxPQUFPO0FBQ2xELGNBQVksWUFBWTtBQUN4QixjQUFZLGNBQWM7QUFDMUIsUUFBTSxlQUFlLFNBQVMsY0FBYyxRQUFRO0FBQ3BELGVBQWEsS0FBSztBQUNsQixRQUFNLGVBQWUsU0FBUyxjQUFjLFFBQVE7QUFDcEQsZUFBYSxRQUFRO0FBQ3JCLGVBQWEsY0FBYztBQUMzQixlQUFhLFlBQVksWUFBWTtBQUNyQyxTQUFPLEtBQUssT0FBTyxFQUFFLFFBQVEsVUFBUTtBQUNuQyxVQUFNLFNBQVMsU0FBUyxjQUFjLFFBQVE7QUFDOUMsV0FBTyxRQUFRO0FBQ2YsV0FBTyxjQUFjLGNBQWMsSUFBSSxLQUFLO0FBQzVDLGlCQUFhLFlBQVksTUFBTTtBQUFBLEVBQ2pDLENBQUM7QUFDRCxNQUFJLGlCQUFpQixRQUFRLGFBQWEsR0FBRztBQUMzQyxpQkFBYSxRQUFRO0FBQUEsRUFDdkI7QUFDQSxlQUFhLGlCQUFpQixVQUFVLE1BQU07QUFDNUMsUUFBSSxhQUFhLE9BQU87QUFDdEIsdUJBQWlCLGFBQWEsS0FBSztBQUFBLElBQ3JDO0FBQUEsRUFDRixDQUFDO0FBQ0QsY0FBWSxZQUFZLFlBQVk7QUFFcEMsVUFBUSxZQUFZLFNBQVM7QUFDN0IsVUFBUSxZQUFZLE9BQU87QUFDM0IsVUFBUSxZQUFZLE9BQU87QUFDM0IsVUFBUSxZQUFZLFFBQVE7QUFDNUIsVUFBUSxZQUFZLE9BQU87QUFDM0IsVUFBUSxZQUFZLFdBQVc7QUFFL0Isa0JBQVksNEJBQWEsYUFBYTtBQUFBLElBQ3BDLG1CQUFtQjtBQUFBLElBQ25CLGFBQWE7QUFBQSxJQUNiLGdCQUFnQjtBQUFBLElBQ2hCLFlBQVk7QUFBQSxJQUNaLFNBQVMsTUFBTTtBQUNiLFlBQU1DLGdCQUFlLFNBQVMsZUFBZSxlQUFlO0FBQzVELFVBQUlBLGNBQWMsQ0FBQUEsY0FBYSxRQUFRO0FBQ3ZDLG1CQUFhLElBQUk7QUFDakIsZ0JBQVU7QUFDVixpQkFBVztBQUNYLGdCQUFVO0FBQUEsSUFDWjtBQUFBLEVBQ0YsQ0FBQztBQUVELFlBQVUsR0FBRyxXQUFXLE9BQUs7QUFDM0IsU0FBSyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsU0FBUyxTQUFTO0FBQ2xELFFBQUUsZUFBZTtBQUNqQixVQUFJLFFBQVMsTUFBSztBQUFBLFVBQ2IsTUFBSztBQUFBLElBQ1o7QUFBQSxFQUNGLENBQUM7QUFFRCxRQUFNLFlBQVksU0FBUyxjQUFjLEtBQUs7QUFDOUMsWUFBVSxLQUFLO0FBQ2YsWUFBVSxRQUFRLFFBQVE7QUFFMUIsUUFBTSxXQUFXLFNBQVMsY0FBYyxLQUFLO0FBQzdDLFdBQVMsS0FBSztBQUNkLFdBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLLEdBQUc7QUFDOUIsVUFBTSxNQUFNLFNBQVMsY0FBYyxNQUFNO0FBQ3pDLFFBQUksWUFBWTtBQUNoQixhQUFTLFlBQVksR0FBRztBQUFBLEVBQzFCO0FBRUEsUUFBTSxnQkFBZ0IsU0FBUyxjQUFjLE1BQU07QUFDbkQsZ0JBQWMsS0FBSztBQUNuQixnQkFBYyxjQUFjO0FBRTVCLFlBQVUsWUFBWSxRQUFRO0FBQzlCLFlBQVUsWUFBWSxhQUFhO0FBRW5DLFFBQU0sWUFBWSxTQUFTLGNBQWMsS0FBSztBQUM5QyxZQUFVLEtBQUs7QUFDZixpQkFBVywwQkFBWSxHQUFHO0FBQUEsSUFDeEI7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0EsU0FBUyxNQUFNO0FBQ2IsVUFBSSxPQUFPLEtBQUssVUFBVSxTQUFVLFNBQVEsS0FBSztBQUNqRCxVQUFJLE9BQU8sS0FBSyxTQUFTLFNBQVUsUUFBTyxLQUFLO0FBQy9DLFVBQUksT0FBTyxLQUFLLGNBQWMsU0FBVSxhQUFZLEtBQUs7QUFDekQsaUJBQVc7QUFBQSxJQUNiO0FBQUEsRUFDRixDQUFDO0FBQ0QsV0FBUyxPQUFPLEtBQUs7QUFDckIsV0FBUyxpQkFBaUIsU0FBUyxNQUFNO0FBQ3ZDLFVBQU0sT0FBTyxTQUFTLE9BQU87QUFDN0IsY0FBVSxVQUFVLE9BQU8sY0FBYyxJQUFJO0FBQUEsRUFDL0MsQ0FBQztBQUNELElBQUUsU0FBUyxDQUFDLEtBQUssU0FBUztBQUN4QixVQUFNLE9BQU8sS0FBSyxJQUFJLElBQUksT0FBTyxFQUFFLGFBQWEsZUFBZSxHQUFJO0FBQ25FLGVBQVcsTUFBTSxTQUFTLFFBQVEsR0FBRyxHQUFHLElBQUk7QUFBQSxFQUM5QztBQUVBLFdBQVMsS0FBSyxZQUFZLE9BQU87QUFDakMsWUFBVSxZQUFZLFVBQVUsRUFBRTtBQUNsQyxZQUFVLFlBQVksU0FBUyxFQUFFO0FBQ2pDLFdBQVMsS0FBSyxZQUFZLFNBQVM7QUFDbkMsV0FBUyxLQUFLLFlBQVksU0FBUztBQUVuQyxTQUFPO0FBQ1Q7QUFFQSxlQUFlLFlBQVksTUFBTTtBQUMvQixNQUFJLFFBQVEsSUFBSSxFQUFHLFFBQU8sUUFBUSxJQUFJO0FBQ3RDLE1BQUk7QUFDRixVQUFNLFdBQVcsTUFBTSxNQUFNLFlBQVksSUFBSSxNQUFNO0FBQ25ELFFBQUksU0FBUyxJQUFJO0FBQ2YsYUFBTyxNQUFNLFNBQVMsS0FBSztBQUFBLElBQzdCO0FBQUEsRUFDRixTQUFTLEdBQUc7QUFBQSxFQUVaO0FBQ0EsU0FBTztBQUNUO0FBRUEsZUFBZSxzQkFBc0I7QUFDbkMsUUFBTSxTQUFTLElBQUksZ0JBQWdCLE9BQU8sU0FBUyxNQUFNO0FBQ3pELFFBQU0sT0FBTyxPQUFPLElBQUksTUFBTTtBQUU5QixNQUFJLE1BQU07QUFDUixVQUFNLFFBQVEsTUFBTSxZQUFZLElBQUk7QUFDcEMsUUFBSSxNQUFPLFFBQU8sTUFBTSxLQUFLO0FBQUEsRUFDL0I7QUFFQSxTQUFPLGFBQWEsUUFBUSxXQUFXLEtBQUs7QUFDOUM7QUFFQSxTQUFTLFlBQVk7QUFDbkIsZUFBYSxhQUFhO0FBQzFCLGtCQUFnQixXQUFXLE1BQU07QUFDL0IsUUFBSSxXQUFXO0FBQ2IsbUJBQWEsUUFBUSxhQUFhLFVBQVUsU0FBUyxDQUFDO0FBQ3RELGtCQUFZO0FBQUEsSUFDZDtBQUFBLEVBQ0YsR0FBRyxHQUFHO0FBQ1I7QUFFQSxTQUFTLE9BQU87QUFDZCxPQUFLO0FBQ0wsTUFBSSxDQUFDLFVBQVc7QUFFaEIsTUFBSSxFQUFFLGFBQWEsVUFBVSxhQUFhO0FBQ3hDLE1BQUUsYUFBYSxPQUFPO0FBQUEsRUFDeEI7QUFDQSxZQUFVO0FBQ1YsUUFBTSxPQUFPLFFBQVEsVUFBVSxTQUFTLENBQUM7QUFDekMsSUFBRSxlQUFlLE1BQU0sT0FBTyxNQUFNLFNBQVM7QUFDN0MsWUFBVSxJQUFJO0FBQ2QsSUFBRSxnQkFBZ0I7QUFDbEIsbUJBQWlCO0FBQ2pCLGFBQVcsV0FBVyxTQUFTO0FBQ2pDO0FBRUEsU0FBUyxPQUFPO0FBQ2QsTUFBSSxTQUFTO0FBQ1gsY0FBVTtBQUNWLE1BQUUsZ0JBQWdCO0FBQUEsRUFDcEI7QUFDQSxtQkFBaUI7QUFDakIsaUJBQWU7QUFDakI7QUFFQSxTQUFTLGFBQWE7QUFDcEIsTUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFHO0FBRXRCLFFBQU0sT0FBTyxRQUFRLFVBQVUsU0FBUyxDQUFDO0FBQ3pDLFFBQU0sVUFBVSxFQUFFLGVBQWUsTUFBTSxPQUFPLE1BQU0sU0FBUztBQUM3RCxZQUFVLElBQUk7QUFDZCxNQUFJLFdBQVcsU0FBUztBQUN0QixNQUFFLGdCQUFnQixFQUFFLFNBQVM7QUFBQSxFQUMvQjtBQUNGO0FBRUEsU0FBUyxnQkFBZ0I7QUFDdkIsUUFBTSxPQUFPLFNBQVMsaUJBQWlCLFdBQVc7QUFDbEQsUUFBTSxjQUFjLEVBQUUsY0FBYyxFQUFFLFlBQVk7QUFDbEQsT0FBSyxRQUFRLENBQUMsS0FBSyxNQUFNLElBQUksVUFBVSxPQUFPLFVBQVUsTUFBTSxXQUFXLENBQUM7QUFDMUUsd0JBQXNCLGFBQWE7QUFDckM7QUFFQSxlQUFlLFlBQVk7QUFDekIsUUFBTSxTQUFTLElBQUksZ0JBQWdCLE9BQU8sU0FBUyxNQUFNO0FBQ3pELFFBQU0sZ0JBQWdCLE9BQU8sSUFBSSxNQUFNO0FBQ3ZDLFFBQU0sZUFBZSxNQUFNLG9CQUFvQjtBQUMvQyxRQUFNLFNBQVMsVUFBVSxjQUFjLGFBQWE7QUFDcEQsc0JBQW9CO0FBQ3BCLFFBQU0sT0FBTyxRQUFRLE9BQU8sU0FBUyxDQUFDO0FBQ3RDLElBQUUsZUFBZSxNQUFNLE9BQU8sTUFBTSxTQUFTO0FBQzdDLFlBQVUsSUFBSTtBQUNkLGlCQUFlO0FBQ2Ysd0JBQXNCLGFBQWE7QUFDckM7QUFFQSxVQUFVO0FBRVYsSUFBTyxjQUFRLENBQUM7IiwKICAibmFtZXMiOiBbIm1pZGkiLCAibSIsICJwIiwgIm5vdGUiLCAibSIsICJvYmoiLCAicCIsICJfc2V0UHJvdG90eXBlT2YiLCAibyIsICJVdGlscyIsICJOb3RlT25FdmVudCIsICJOb3RlT2ZmRXZlbnQiLCAiTm90ZUV2ZW50IiwgInNjYWxlMTRiaXRzIiwgIlBpdGNoQmVuZEV2ZW50IiwgIlByb2dyYW1DaGFuZ2VFdmVudCIsICJDb250cm9sbGVyQ2hhbmdlRXZlbnQiLCAiQ29weXJpZ2h0RXZlbnQiLCAiQ3VlUG9pbnRFdmVudCIsICJFbmRUcmFja0V2ZW50IiwgIkluc3RydW1lbnROYW1lRXZlbnQiLCAiS2V5U2lnbmF0dXJlRXZlbnQiLCAibm90ZSIsICJMeXJpY0V2ZW50IiwgIk1hcmtlckV2ZW50IiwgIlRlbXBvRXZlbnQiLCAidGVtcG8iLCAiVGV4dEV2ZW50IiwgIlRpbWVTaWduYXR1cmVFdmVudCIsICJUcmFja05hbWVFdmVudCIsICJUcmFjayIsICJWZXhGbG93IiwgIkhlYWRlckNodW5rIiwgIldyaXRlciIsICJidWlsZCIsICJQbGF5ZXIiLCAidGVtcG8iLCAidHJhbnNwb3NlIiwgIm5vdGUiLCAicmVxdWlyZV9tYWluIiwgIm4iLCAiYSIsICJpIiwgInIiLCAiZSIsICJtIiwgIm8iLCAidCIsICJzIiwgImMiLCAicCIsICJwaWNrT25lIiwgImRpY2UiLCAiaW5pdF91dGlscyIsICJwcm9ncmVzc2lvbl9leHBvcnRzIiwgImdldENob3JkRGVncmVlcyIsICJnZXRDaG9yZHNCeVByb2dyZXNzaW9uIiwgInByb2dyZXNzaW9uIiwgImltcG9ydF9oYXJtb25pY3MiLCAiaWR4QnlEZWdyZWUiLCAiZ2V0Q2hvcmROYW1lIiwgImdldFByb2dGYWN0b3J5IiwgIk0iLCAibSIsICJpbml0X3Byb2dyZXNzaW9uIiwgImluaXRfdXRpbHMiLCAibm90ZSIsICJwaWNrT25lIiwgImRpY2UiLCAicmVxdWlyZV90b2tlbml6ZSIsICJyZXF1aXJlX3V0aWxzIiwgInJlcXVpcmVfcGFyc2VyIiwgImdldENob3Jkc0J5UHJvZ3Jlc3Npb24iLCAic2NhbGUiLCAicmVkdWNlIiwgInBhcnNlIiwgImNyZWF0ZUVkaXRvciIsICJjcmVhdGVNaXhlciIsICJiYXJzIiwgImtleSIsICJpc051bSIsICJpc1N0ciIsICJpc0RlZiIsICJtaWRpVG9GcmVxIiwgIm1pZGkiLCAicGFyc2UiLCAibSIsICJSRUdFWCIsICJwIiwgIlNFTUlUT05FUyIsICJub3RlIiwgImluaXRfbm90ZV9wYXJzZXIiLCAiX19lc20iLCAidG9uYWxfbWlkaV9leHBvcnRzIiwgIl9fZXhwb3J0IiwgInRvTWlkaSIsICJTSEFSUFMiLCAiRkxBVFMiLCAiaW5pdF90b25hbF9taWRpIiwgInJlcXVpcmVfcGFja2FnZSIsICJfX2NvbW1vbkpTIiwgInJlcXVpcmVfYnVpbGQiLCAiX190b0NvbW1vbkpTIiwgIm9iaiIsICJfc2V0UHJvdG90eXBlT2YiLCAibyIsICJVdGlscyIsICJOb3RlT25FdmVudCIsICJOb3RlT2ZmRXZlbnQiLCAiTm90ZUV2ZW50IiwgInNjYWxlMTRiaXRzIiwgIlBpdGNoQmVuZEV2ZW50IiwgIlByb2dyYW1DaGFuZ2VFdmVudCIsICJDb250cm9sbGVyQ2hhbmdlRXZlbnQiLCAiQ29weXJpZ2h0RXZlbnQiLCAiQ3VlUG9pbnRFdmVudCIsICJFbmRUcmFja0V2ZW50IiwgIkluc3RydW1lbnROYW1lRXZlbnQiLCAiS2V5U2lnbmF0dXJlRXZlbnQiLCAiTHlyaWNFdmVudCIsICJNYXJrZXJFdmVudCIsICJUZW1wb0V2ZW50IiwgInRlbXBvIiwgIlRleHRFdmVudCIsICJUaW1lU2lnbmF0dXJlRXZlbnQiLCAiVHJhY2tOYW1lRXZlbnQiLCAiVHJhY2siLCAiVmV4RmxvdyIsICJIZWFkZXJDaHVuayIsICJXcml0ZXIiLCAiYnVpbGQiLCAibiIsICJhIiwgImkiLCAiciIsICJlIiwgInQiLCAicyIsICJjIiwgIl9fdG9FU00iLCAiZ2V0Q2hvcmRzQnlQcm9ncmVzc2lvbiIsICJzY2FsZSIsICJyZWR1Y2UiLCAibWVyZ2UiLCAiaW1wb3J0X3BhcnNlciIsICJQbGF5ZXIiLCAibWlkaSIsICJwcmVzZXRTZWxlY3QiXQp9Cg==
