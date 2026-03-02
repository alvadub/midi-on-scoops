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

// node_modules/harmonics/main.js
var require_main = __commonJS({
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
        this.beatIndex = 0;
        this.loopStarted = false;
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
      updateTracks(data) {
        this.beats.length = 0;
        this.preload(data);
        if (!this.beats.length || typeof this.beatIndex !== "number" || this.beatIndex >= this.beats.length) {
          this.beatIndex = 0;
        }
      }
      startPlayLoop(beats, bpm, density, fromBeat) {
        this.loopStarted = true;
        const wholeNoteDuration = 4 * 60 / bpm;
        this.beatIndex = fromBeat < beats.length ? fromBeat : 0;
        this.playBeatAt(this.contextTime(), beats[this.beatIndex], bpm);
        let nextLoopTime = this.contextTime() + density * wholeNoteDuration;
        this.loopIntervalID = setInterval(() => {
          while (this.contextTime() >= nextLoopTime) {
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
            this.onBeat(key, when, this.beatIndex);
          }
        });
      }
    };
    module.exports = Player2;
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
    import_harmonics2 = __toESM(require_main());
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
    var { scale: scale3, inlineChord } = require_main();
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
            memo.push(fn(scale3(item)));
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

// src/lib/blocks.js
var require_blocks = __commonJS({
  "src/lib/blocks.js"(exports, module) {
    function classifyLine(line) {
      const trimmed = line.trim();
      if (!trimmed) return "blank";
      if (/^%/.test(trimmed)) return "var";
      if (/^@/.test(trimmed)) return "section";
      if (/^#\d+/.test(trimmed)) return "instrument";
      if (/^#{1,2}\s+/.test(trimmed)) return "track";
      return "body";
    }
    function lineIndexAtCursor(text, cursorPos) {
      let line = 0;
      for (let i = 0; i < Math.min(cursorPos, text.length); i += 1) {
        if (text.charAt(i) === "\n") line += 1;
      }
      return line;
    }
    function blockAtCursor2(text, cursorPos) {
      const lines = String(text || "").split("\n");
      if (!lines.length) {
        return { startLine: 0, endLine: 0, type: "track", name: "block", blockText: "" };
      }
      let cursorLine = lineIndexAtCursor(text, cursorPos);
      if (cursorLine >= lines.length) cursorLine = lines.length - 1;
      while (cursorLine > 0 && classifyLine(lines[cursorLine]) === "blank") {
        cursorLine -= 1;
      }
      const currentType = classifyLine(lines[cursorLine]);
      if (currentType === "var") {
        const name2 = lines[cursorLine].trim().split(/\s+/)[0] || "%var";
        return {
          startLine: cursorLine,
          endLine: cursorLine,
          type: "var",
          name: name2,
          blockText: lines[cursorLine]
        };
      }
      const trackHeaderPattern = /^#{1,2}\s+/;
      const sectionPattern = /^@/;
      let sectionStart = -1;
      for (let i = cursorLine; i >= 0; i -= 1) {
        const type = classifyLine(lines[i]);
        if (type === "blank" || type === "track" || type === "var") break;
        if (sectionPattern.test(lines[i].trim())) {
          sectionStart = i;
          break;
        }
      }
      if (sectionStart >= 0 && currentType !== "track") {
        let end2 = sectionStart;
        for (let i = sectionStart + 1; i < lines.length; i += 1) {
          const type = classifyLine(lines[i]);
          if (type === "blank" || type === "track" || type === "var" || type === "section") break;
          end2 = i;
        }
        const name2 = lines[sectionStart].trim().split(/\s+/)[0].slice(1) || "section";
        return {
          startLine: sectionStart,
          endLine: end2,
          type: "section",
          name: name2,
          blockText: lines.slice(sectionStart, end2 + 1).join("\n")
        };
      }
      let start = 0;
      for (let i = cursorLine; i >= 0; i -= 1) {
        if (trackHeaderPattern.test(lines[i].trim())) {
          start = i;
          break;
        }
        if (classifyLine(lines[i]) === "blank") {
          start = i + 1;
          break;
        }
      }
      let end = start;
      for (let i = start + 1; i < lines.length; i += 1) {
        const type = classifyLine(lines[i]);
        if (type === "blank" || type === "track" || type === "var") break;
        end = i;
      }
      const header = lines[start].trim();
      const name = header.replace(/^#{1,2}\s+/, "").trim() || "track";
      return {
        startLine: start,
        endLine: end,
        type: "track",
        name,
        blockText: lines.slice(start, end + 1).join("\n")
      };
    }
    Object.assign(module.exports, { blockAtCursor: blockAtCursor2 });
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
      if (cls === "tok-var-ref" && token === "%") return span(cls, token, { repeatLast: "1" });
      if (cls === "tok-channel") return span(cls, token, { instrument: token.slice(1) });
      if (cls === "tok-mode") return span(cls, token, { mode: token.toLowerCase() });
      if (cls === "tok-pattern") return span(cls, token, { pattern: "1" });
      if (cls === "tok-note") return span(cls, token, { note: token });
      if (cls === "tok-chord") return span(cls, token, { chord: token });
      if (cls === "tok-number") return span(cls, token, { number: token });
      if (cls === "tok-repeat") return span(cls, token, { repeat: token.slice(1) });
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
        let velocityTagged = false;
        return base.split(/(\s+)/).map((part) => {
          if (/^\s*$/.test(part)) return part;
          const cls = classify(part);
          if (cls === "tok-number" && !velocityTagged) {
            velocityTagged = true;
            return span(cls, part, { velocity: part });
          }
          return renderToken(part);
        }).join("");
      }
      return renderTokens(base);
    }
    function highlight(input) {
      return String(input || "").split(/\r?\n/).map((line, lineNumber) => {
        const [base, comment] = splitComment(line);
        const rendered = renderBase(base);
        const content = !comment ? rendered : `${rendered}${span("tok-comment", comment)}`;
        return `<span class="hl-line" data-line="${lineNumber}">${content}</span>`;
      }).join("\n");
    }
    Object.assign(module.exports, { highlight });
  }
});

// src/components/editor.js
var require_editor = __commonJS({
  "src/components/editor.js"(exports, module) {
    var { highlight } = require_highlight();
    var DIATONIC = { c: 0, d: 1, e: 2, f: 3, g: 4, a: 5, b: 6 };
    var E4_DIATONIC = 4 * 7 + 2;
    function normalizeNote2(s) {
      return s.charAt(0).toUpperCase() + s.slice(1);
    }
    function noteToPos(noteStr) {
      const m3 = noteStr.match(/^([a-gA-G])([#b]?)(\d+)$/);
      if (!m3) return null;
      const diatPos = parseInt(m3[3], 10) * 7 + DIATONIC[m3[1].toLowerCase()];
      return diatPos - E4_DIATONIC;
    }
    function posToY(pos) {
      return 60 - pos * 5;
    }
    function buildStaffSVG(notes, mode = "chord") {
      if (!notes || notes.length === 0) return "";
      const sorted = notes.map((n) => ({ note: n, pos: noteToPos(n) })).filter((n) => n.pos !== null).sort((a, b) => a.pos - b.pos);
      if (sorted.length === 0) return "";
      const W = 200;
      const H = 90;
      let svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">`;
      svg += "<style>.staff-line,.ledger{stroke:#fff;stroke-width:1}</style>";
      for (let i = 0; i < 5; i += 1) {
        const y = 20 + i * 10;
        svg += `<line class="staff-line" x1="0" y1="${y}" x2="${W}" y2="${y}"/>`;
      }
      svg += '<text x="8" y="50" fill="#fff" font-size="52" font-family="serif">\u{1D11E}</text>';
      const isScale = mode === "scale";
      const noteCount = sorted.length;
      let noteX;
      if (isScale) {
        const step = noteCount > 1 ? 154 / (noteCount - 1) : 0;
        sorted.forEach((n, i) => {
          n.x = 36 + i * step;
        });
      } else {
        noteX = 90;
        for (let i = 0; i < sorted.length; i += 1) {
          const curr = sorted[i];
          const prev = i > 0 ? sorted[i - 1] : null;
          curr.x = noteX;
          if (prev && Math.abs(curr.pos - prev.pos) === 1) {
            curr.x = prev.x + 11;
          }
        }
      }
      sorted.forEach((n) => {
        const y = posToY(n.pos);
        const m3 = n.note.match(/^([a-gA-G])([#b]?)(\d+)$/);
        const accidental = m3 ? m3[2] : "";
        for (let p2 = -2; p2 >= n.pos; p2 -= 2) {
          const ly = posToY(p2);
          svg += `<line class="ledger" x1="${n.x - 9}" y1="${ly}" x2="${n.x + 9}" y2="${ly}"/>`;
        }
        for (let p2 = 10; p2 <= n.pos; p2 += 2) {
          const ly = posToY(p2);
          svg += `<line class="ledger" x1="${n.x - 9}" y1="${ly}" x2="${n.x + 9}" y2="${ly}"/>`;
        }
        if (isScale) {
          svg += `<ellipse cx="${n.x}" cy="${y}" rx="5" ry="4" fill="none" stroke="#fff" stroke-width="1.2" transform="rotate(-15 ${n.x} ${y})"/>`;
        } else {
          svg += `<ellipse cx="${n.x}" cy="${y}" rx="5" ry="4" fill="#fff" transform="rotate(-15 ${n.x} ${y})"/>`;
        }
        if (accidental === "#") {
          svg += `<text x="${n.x - 14}" y="${y + 4}" fill="#fff" font-size="10">\u266F</text>`;
        } else if (accidental === "b") {
          svg += `<text x="${n.x - 12}" y="${y + 4}" fill="#fff" font-size="11">\u266D</text>`;
        }
      });
      if (!isScale && sorted.length > 0) {
        const lowestPos = sorted[0].pos;
        const highestPos = sorted[sorted.length - 1].pos;
        let stemDir = lowestPos <= 3 ? "up" : "down";
        if (stemDir === "up") {
          const highY = posToY(highestPos);
          const highX = sorted[sorted.length - 1].x;
          svg += `<line x1="${highX + 5}" y1="${highY}" x2="${highX + 5}" y2="${highY - 28}" stroke="#fff" stroke-width="1.2"/>`;
        } else {
          const lowY = posToY(lowestPos);
          const lowX = sorted[0].x;
          svg += `<line x1="${lowX - 5}" y1="${lowY}" x2="${lowX - 5}" y2="${lowY + 28}" stroke="#fff" stroke-width="1.2"/>`;
        }
      }
      svg += "</svg>";
      return svg;
    }
    function clampTooltip(x, y, width = 320) {
      const maxX = Math.max(8, window.innerWidth - width - 8);
      const left = Math.min(x + 12, maxX);
      const top = Math.min(y + 12, window.innerHeight - 170);
      return { left, top };
    }
    function charOffsetOfElement(root, target) {
      if (!root || !target || !root.contains(target)) return -1;
      const lineEl = target.closest("[data-line]");
      const lineNumber = lineEl ? parseInt(lineEl.dataset.line, 10) : 0;
      if (!lineEl || Number.isNaN(lineNumber)) return -1;
      const lineRange = document.createRange();
      lineRange.selectNodeContents(lineEl);
      lineRange.setEndBefore(target);
      const offsetInLine = lineRange.toString().length;
      const allLines = root.querySelectorAll("[data-line]");
      let total = offsetInLine;
      for (let i = 0; i < lineNumber; i++) {
        total += (allLines[i] ? allLines[i].textContent.length : 0) + 1;
      }
      return total;
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
      tip.innerHTML = '<strong></strong><span class="tooltip-resolved"></span><div class="tooltip-staff"></div>';
      const tipTitle = tip.querySelector("strong");
      const tipBody = tip.querySelector(".tooltip-resolved");
      const tipStaff = tip.querySelector(".tooltip-staff");
      const flashTimers = /* @__PURE__ */ new Set();
      let scrubState = null;
      let activeTokens = [];
      const tooltipHandlers = [
        options.resolveNote && {
          attr: "note",
          resolve: options.resolveNote,
          notes: (value) => [value],
          staffMode: "single",
          title: (value) => normalizeNote2(value)
        },
        options.resolveChord && {
          attr: "chord",
          resolve: options.resolveChord,
          notes: (value) => value.split("|").map(normalizeNote2),
          staffMode: "chord",
          title: () => "Chord"
        },
        options.resolveMode && {
          attr: "mode",
          resolve: options.resolveMode,
          notes: options.resolveModeNotes,
          staffMode: "scale",
          title: (value) => value
        },
        options.resolveInstrument && {
          attr: "instrument",
          resolve: options.resolveInstrument,
          title: (value) => `#${value}`
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
          attr: "repeatLast",
          resolve: () => "Repeats the preceding expression once more",
          title: () => "%"
        },
        options.resolveVelocity && {
          attr: "velocity",
          resolve: options.resolveVelocity,
          title: (v) => `Velocity ${v}`
        },
        {
          attr: "repeat",
          resolve: (v) => {
            const n = parseInt(v, 10);
            return `Plays the preceding sequence ${n} time${n !== 1 ? "s" : ""} in a row`;
          },
          title: (v) => `\xD7${v}`
        },
        {
          attr: "number",
          resolve: () => "Numeric value \u2014 used as velocity, octave, or parameter",
          title: (v) => v
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
        tipStaff.innerHTML = "";
        tipStaff.hidden = true;
      }
      function clearScrubCursor() {
        wrap.classList.remove("scrub-hover");
      }
      function clearActiveTokenHighlight() {
        activeTokens.forEach((token) => token.classList.remove("tok-active"));
        activeTokens = [];
      }
      function getScrubTarget(elements) {
        return elements.find((el) => el.dataset && (typeof el.dataset.number !== "undefined" || typeof el.dataset.velocity !== "undefined"));
      }
      function parseScrubRaw(raw) {
        const isFloat = String(raw).includes(".");
        const decimalPlaces = isFloat ? String(raw).split(".")[1].length : 0;
        return {
          value: parseFloat(raw),
          isFloat,
          decimalPlaces
        };
      }
      function beginScrub(e, span) {
        const raw = typeof span.dataset.number !== "undefined" ? span.dataset.number : span.dataset.velocity;
        const parsed = parseScrubRaw(raw);
        if (Number.isNaN(parsed.value)) return;
        const startOffset = charOffsetOfElement(pre, span);
        if (startOffset < 0) return;
        scrubState = {
          startX: e.clientX,
          startValue: parsed.value,
          isFloat: parsed.isFloat,
          decimalPlaces: parsed.decimalPlaces,
          attr: typeof span.dataset.velocity !== "undefined" ? "velocity" : "number",
          startOffset,
          currentLength: span.textContent.length,
          currentText: raw
        };
        wrap.classList.add("scrub-active");
        hideTooltip();
        e.preventDefault();
      }
      function applyScrub(e) {
        if (!scrubState) return;
        const STEP_PX = 4;
        const deltaUnits = Math.round((e.clientX - scrubState.startX) / STEP_PX);
        const baseStep = scrubState.isFloat ? Math.pow(10, -scrubState.decimalPlaces) : 1;
        const modifier = e.shiftKey ? 10 : e.altKey ? 0.1 : 1;
        let nextValue = scrubState.startValue + deltaUnits * baseStep * modifier;
        if (scrubState.attr === "velocity") {
          nextValue = Math.max(1, Math.min(127, Math.round(nextValue)));
        }
        const nextText = scrubState.isFloat && scrubState.attr !== "velocity" ? nextValue.toFixed(scrubState.decimalPlaces) : String(Math.round(nextValue));
        if (nextText === scrubState.currentText) return;
        const start = scrubState.startOffset;
        const end = start + scrubState.currentLength;
        ta.value = ta.value.slice(0, start) + nextText + ta.value.slice(end);
        scrubState.currentLength = nextText.length;
        scrubState.currentText = nextText;
        ta.dispatchEvent(new Event("input", { bubbles: true }));
      }
      function endScrub() {
        if (!scrubState) return;
        scrubState = null;
        wrap.classList.remove("scrub-active");
        document.removeEventListener("mousemove", applyScrub);
        document.removeEventListener("mouseup", endScrub);
      }
      function flashLines(startLine, endLine) {
        const start = Math.max(0, startLine);
        const end = Math.max(start, endLine);
        for (let line = start; line <= end; line += 1) {
          const lineEl = pre.querySelector(`[data-line="${line}"]`);
          if (!lineEl) continue;
          lineEl.classList.add("block-flash");
          const timer = setTimeout(() => {
            lineEl.classList.remove("block-flash");
            flashTimers.delete(timer);
          }, 800);
          flashTimers.add(timer);
        }
      }
      function getPlayableTokenSpans(lineEl) {
        return [...lineEl.querySelectorAll("span")].filter((token) => token.classList.contains("tok-pattern") || token.classList.contains("tok-note") || token.classList.contains("tok-chord") || token.classList.contains("tok-var-ref") || token.classList.contains("tok-mode") || token.classList.contains("tok-progression"));
      }
      function flashActiveTokens(_lineNumbers, _beatIndex) {
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
        if (scrubState) return;
        const elements = document.elementsFromPoint(e.clientX, e.clientY);
        const scrubTarget = getScrubTarget(elements);
        wrap.classList.toggle("scrub-hover", Boolean(scrubTarget));
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
        if (found.handler.notes) {
          const noteArr = found.handler.notes(found.value);
          if (noteArr && noteArr.length) {
            tipStaff.innerHTML = buildStaffSVG(noteArr, found.handler.staffMode);
            tipStaff.hidden = false;
          } else {
            tipStaff.innerHTML = "";
            tipStaff.hidden = true;
          }
        } else {
          tipStaff.innerHTML = "";
          tipStaff.hidden = true;
        }
        tip.style.left = `${pos.left}px`;
        tip.style.top = `${pos.top}px`;
        tip.hidden = false;
      });
      ta.addEventListener("mousedown", (e) => {
        if (e.button !== 0 || scrubState) return;
        const elements = document.elementsFromPoint(e.clientX, e.clientY);
        const target = getScrubTarget(elements);
        if (!target) return;
        beginScrub(e, target);
        document.addEventListener("mousemove", applyScrub);
        document.addEventListener("mouseup", endScrub);
      });
      ta.addEventListener("mouseleave", () => {
        hideTooltip();
        clearScrubCursor();
      });
      sync();
      wrap.appendChild(pre);
      wrap.appendChild(ta);
      wrap.appendChild(tip);
      return {
        el: wrap,
        textarea: ta,
        on: (event, fn) => ta.addEventListener(event, fn),
        getValue: () => ta.value,
        getCursorPosition: () => ta.selectionStart,
        flashLines,
        flashActiveTokens,
        clearActiveTokenHighlight,
        setValue: (value) => {
          ta.value = value;
          sync();
          hideTooltip();
          clearActiveTokenHighlight();
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
var import_harmonics3 = __toESM(require_main());
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
var require_main2 = __commonJS2({
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
    import_harmonics = __toESM2(require_main2());
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
    var { scale: scale22, inlineChord } = require_main2();
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
            memo.push(fn(scale22(item)));
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
var import_blocks = __toESM(require_blocks());
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
var trackLineMap = /* @__PURE__ */ new Map();
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
function buildTrackLineMap(input) {
  const map = /* @__PURE__ */ new Map();
  let currentTrack = null;
  String(input || "").split(/\r?\n/).forEach((rawLine, lineNumber) => {
    const line = rawLine.replace(/;.+?$/, "").trim();
    if (!line) return;
    if (/^#{1,2}\s+/.test(line) && !/^#\d+/.test(line)) {
      currentTrack = line.replace(/^#{1,2}\s+/, "").trim();
      return;
    }
    if (!currentTrack) return;
    const match = line.match(/^#(\d+)\b/);
    if (!match) return;
    const key = `${parseInt(match[1], 10)}/${currentTrack}`;
    const prev = map.get(key) || [];
    if (!prev.includes(lineNumber)) prev.push(lineNumber);
    map.set(key, prev);
  });
  return map;
}
function getData(input) {
  trackLineMap = buildTrackLineMap(input);
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
function evalBlock() {
  if (!editorApi) return;
  const source = editorApi.getValue();
  const cursorPos = editorApi.getCursorPosition();
  const block = (0, import_blocks.blockAtCursor)(source, cursorPos);
  const data = getData(source);
  if (!data.length) return;
  p.updateTracks(data);
  syncMixer(data);
  editorApi.flashLines(block.startLine, block.endLine);
  showStatus(`Block updated: ${block.name}`, playing ? "playing" : "ready");
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
function normalizeNote(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
function resolveNoteTooltip(noteStr) {
  const SEMITONES3 = { c: 0, d: 2, e: 4, f: 5, g: 7, a: 9, b: 11 };
  const m3 = noteStr.match(/^([a-gA-G])([#b]?)(\d+)$/);
  if (!m3) return null;
  const base = SEMITONES3[m3[1].toLowerCase()];
  const alt = m3[2] === "#" ? 1 : m3[2] === "b" ? -1 : 0;
  const oct = parseInt(m3[3], 10);
  const midi3 = (oct + 1) * 12 + base + alt;
  const freq = (440 * Math.pow(2, (midi3 - 69) / 12)).toFixed(1);
  const isMiddleC = midi3 === 60;
  return `MIDI ${midi3} \xB7 ${freq} Hz${isMiddleC ? " \xB7 middle C" : ""}`;
}
function resolveChordTooltip(chordStr) {
  return chordStr.split("|").map(normalizeNote).join("  ");
}
function resolveModeNotes(modeName) {
  try {
    return (0, import_harmonics3.scale)(`C4 ${modeName}`);
  } catch {
    return null;
  }
}
function resolveVelocityTooltip(v) {
  const n = parseInt(v, 10);
  if (Number.isNaN(n) || n < 0 || n > 127) return null;
  const pct = Math.round(n / 127 * 100);
  const db = n > 0 ? (20 * Math.log10(n / 127)).toFixed(1) : "\u2212\u221E";
  const dyn = n === 0 ? "silent (ppp)" : n <= 25 ? "very soft (pp)" : n <= 50 ? "soft (mp)" : n <= 75 ? "medium (mf)" : n <= 100 ? "loud (f)" : n <= 115 ? "very loud (ff)" : "maximum (fff)";
  return `${pct}% of max \xB7 ${db} dB \xB7 ${dyn}`;
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
    resolveNote: resolveNoteTooltip,
    resolveChord: resolveChordTooltip,
    resolveMode: resolveModeTooltip,
    resolveModeNotes,
    resolveVelocity: resolveVelocityTooltip,
    resolveSection: resolveSectionTooltip,
    resolveVar: resolveVarTooltip,
    resolveInstrument: resolveInstrumentTooltip,
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
    if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.code === "Enter") {
      e.preventDefault();
      evalBlock();
      return;
    }
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
  p.onBeat = (key, when, beatIndex) => {
    const wait = Math.max(0, (when - p.audioContext.currentTime) * 1e3);
    setTimeout(() => {
      mixerApi.flashVU(key);
      if (!editorApi) return;
      const lines = trackLineMap.get(key);
      if (!lines || !lines.length) return;
      editorApi.flashActiveTokens(lines, beatIndex);
    }, wait);
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
  if (editorApi) {
    editorApi.clearActiveTokenHighlight();
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL2hhcm1vbmljcy9tYWluLmpzIiwgIm5vZGVfbW9kdWxlcy9ub3RlLXBhcnNlci9pbmRleC5qcyIsICJub2RlX21vZHVsZXMvdG9uYWwtbWlkaS9pbmRleC5qcyIsICJub2RlX21vZHVsZXMvbWlkaS13cml0ZXItanMvcGFja2FnZS5qc29uIiwgIm5vZGVfbW9kdWxlcy9taWRpLXdyaXRlci1qcy9idWlsZC9pbmRleC5qcyIsICJzcmMvY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wbGF5ZXIuanMiLCAibm9kZV9tb2R1bGVzL3NjcmliYmxldHVuZS9zcmMvdXRpbHMudHMiLCAibm9kZV9tb2R1bGVzL3NjcmliYmxldHVuZS9zcmMvcHJvZ3Jlc3Npb24udHMiLCAic3JjL2xpYi9zcmMvbGliL3NyYy9saWIvdG9rZW5pemUuanMiLCAic3JjL2xpYi9zcmMvbGliL3NyYy9saWIvdXRpbHMuanMiLCAic3JjL2xpYi9zcmMvbGliL3NyYy9saWIvcGFyc2VyLmpzIiwgInNyYy9saWIvc3JjL2xpYi9zcmMvbGliL2Jsb2Nrcy5qcyIsICJzcmMvc3JjL3NyYy9oaWdobGlnaHQuanMiLCAic3JjL2NvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvZWRpdG9yLmpzIiwgInNyYy9jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL21peGVyLmpzIiwgInNyYy9zcmMvaW5kZXguanMiLCAic3JjL2xpYi9ub2RlX21vZHVsZXMvbm90ZS1wYXJzZXIvaW5kZXguanMiLCAic3JjL2xpYi9ub2RlX21vZHVsZXMvdG9uYWwtbWlkaS9pbmRleC5qcyIsICJzcmMvbGliL25vZGVfbW9kdWxlcy9taWRpLXdyaXRlci1qcy9wYWNrYWdlLmpzb24iLCAic3JjL2xpYi9ub2RlX21vZHVsZXMvbWlkaS13cml0ZXItanMvYnVpbGQvaW5kZXguanMiLCAic3JjL2xpYi9ub2RlX21vZHVsZXMvanNtaWRnZW4vbGliL2pzbWlkZ2VuLmpzIiwgInNyYy9saWIvc3JjL2xpYi9zcmMvbGliL3NyYy9saWIvdXRpbHMuanMiLCAic3JjL2xpYi9ub2RlX21vZHVsZXMvaGFybW9uaWNzL21haW4uanMiLCAic3JjL2xpYi9zcmMvbGliL3NyYy9saWIvc3JjL2xpYi90b2tlbml6ZS5qcyIsICJzcmMvbGliL25vZGVfbW9kdWxlcy9zY3JpYmJsZXR1bmUvc3JjL3V0aWxzLnRzIiwgInNyYy9saWIvbm9kZV9tb2R1bGVzL3NjcmliYmxldHVuZS9zcmMvcHJvZ3Jlc3Npb24udHMiLCAic3JjL2xpYi9zcmMvbGliL3NyYy9saWIvc3JjL2xpYi9wYXJzZXIuanMiLCAic3JjL2xpYi9zcmMvbGliL3NyYy9saWIvc3JjL2xpYi9taXh1cC5qcyIsICJzcmMvbGliL3NyYy9saWIvc3JjL2xpYi9pbmRleC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiKCgpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ezQxMzpuPT57bi5leHBvcnRzPUpTT04ucGFyc2UoJ3tcIjV0aFwiOlwiMTAwMDAwMDEwMDAwXCIsXCJNNyM1c3VzNFwiOlwiMTAwMDAxMDAxMDAxXCIsXCI3IzVzdXM0XCI6XCIxMDAwMDEwMDEwMTBcIixcInN1czRcIjpcIjEwMDAwMTAxMDAwMFwiLFwiTTdzdXM0XCI6XCIxMDAwMDEwMTAwMDFcIixcIjdzdXM0XCI6XCIxMDAwMDEwMTAwMTBcIixcIjdubzVcIjpcIjEwMDAxMDAwMDAxMFwiLFwiYXVnXCI6XCIxMDAwMTAwMDEwMDBcIixcIk03YjZcIjpcIjEwMDAxMDAwMTAwMVwiLFwibWFqNyM1XCI6XCIxMDAwMTAwMDEwMDFcIixcIjcjNVwiOlwiMTAwMDEwMDAxMDEwXCIsXCI3YjEzXCI6XCIxMDAwMTAwMDEwMTBcIixcIk1cIjpcIjEwMDAxMDAxMDAwMFwiLFwibWFqN1wiOlwiMTAwMDEwMDEwMDAxXCIsXCI3dGhcIjpcIjEwMDAxMDAxMDAxMFwiLFwiNnRoXCI6XCIxMDAwMTAwMTAxMDBcIixcIjdhZGQ2XCI6XCIxMDAwMTAwMTAxMTBcIixcIjdiNlwiOlwiMTAwMDEwMDExMDEwXCIsXCJNYjVcIjpcIjEwMDAxMDEwMDAwMFwiLFwiTTdiNVwiOlwiMTAwMDEwMTAwMDAxXCIsXCI3YjVcIjpcIjEwMDAxMDEwMDAxMFwiLFwibWFqIzRcIjpcIjEwMDAxMDExMDAwMVwiLFwiNyMxMVwiOlwiMTAwMDEwMTEwMDEwXCIsXCJNNiMxMVwiOlwiMTAwMDEwMTEwMTAwXCIsXCI3IzExYjEzXCI6XCIxMDAwMTAxMTEwMTBcIixcIm0jNVwiOlwiMTAwMTAwMDAxMDAwXCIsXCJtYjZNN1wiOlwiMTAwMTAwMDAxMDAxXCIsXCJtNyM1XCI6XCIxMDAxMDAwMDEwMTBcIixcIm1cIjpcIjEwMDEwMDAxMDAwMFwiLFwibS9tYTdcIjpcIjEwMDEwMDAxMDAwMVwiLFwibTdcIjpcIjEwMDEwMDAxMDAxMFwiLFwibTZcIjpcIjEwMDEwMDAxMDEwMFwiLFwibU1hajdiNlwiOlwiMTAwMTAwMDExMDAxXCIsXCJkaW1cIjpcIjEwMDEwMDEwMDAwMFwiLFwib003XCI6XCIxMDAxMDAxMDAwMDFcIixcIm03YjVcIjpcIjEwMDEwMDEwMDAxMFwiLFwiZGltN1wiOlwiMTAwMTAwMTAwMTAwXCIsXCJvN003XCI6XCIxMDAxMDAxMDAxMDFcIixcIjR0aFwiOlwiMTAwMTAxMDAwMDEwXCIsXCJtYWRkNFwiOlwiMTAwMTAxMDEwMDAwXCIsXCJtN2FkZDExXCI6XCIxMDAxMDEwMTAwMTBcIixcIithZGQjOVwiOlwiMTAwMTEwMDAxMDAwXCIsXCI3IzUjOVwiOlwiMTAwMTEwMDAxMDEwXCIsXCI3IzlcIjpcIjEwMDExMDAxMDAxMFwiLFwiMTMjOVwiOlwiMTAwMTEwMDEwMTEwXCIsXCI3IzliMTNcIjpcIjEwMDExMDAxMTAxMFwiLFwibWFqNyM5IzExXCI6XCIxMDAxMTAxMTAwMDFcIixcIjcjOSMxMVwiOlwiMTAwMTEwMTEwMDEwXCIsXCIxMyM5IzExXCI6XCIxMDAxMTAxMTAxMTBcIixcIjcjOSMxMWIxM1wiOlwiMTAwMTEwMTExMDEwXCIsXCJzdXMyXCI6XCIxMDEwMDAwMTAwMDBcIixcIk05IzVzdXM0XCI6XCIxMDEwMDEwMDEwMDFcIixcInN1czI0XCI6XCIxMDEwMDEwMTAwMDBcIixcIk05c3VzNFwiOlwiMTAxMDAxMDEwMDAxXCIsXCIxMXRoXCI6XCIxMDEwMDEwMTAwMTBcIixcIjlzdXM0XCI6XCIxMDEwMDEwMTAwMTBcIixcIjEzc3VzNFwiOlwiMTAxMDAxMDEwMTEwXCIsXCI5bm81XCI6XCIxMDEwMTAwMDAwMTBcIixcIjEzbm81XCI6XCIxMDEwMTAwMDAxMTBcIixcIk0jNWFkZDlcIjpcIjEwMTAxMDAwMTAwMFwiLFwibWFqOSM1XCI6XCIxMDEwMTAwMDEwMDFcIixcIjkjNVwiOlwiMTAxMDEwMDAxMDEwXCIsXCI5YjEzXCI6XCIxMDEwMTAwMDEwMTBcIixcIk1hZGQ5XCI6XCIxMDEwMTAwMTAwMDBcIixcIm1hajlcIjpcIjEwMTAxMDAxMDAwMVwiLFwiOXRoXCI6XCIxMDEwMTAwMTAwMTBcIixcIjYvOVwiOlwiMTAxMDEwMDEwMTAwXCIsXCJtYWoxM1wiOlwiMTAxMDEwMDEwMTAxXCIsXCJNN2FkZDEzXCI6XCIxMDEwMTAwMTAxMDFcIixcIjEzdGhcIjpcIjEwMTAxMDAxMDExMFwiLFwiTTliNVwiOlwiMTAxMDEwMTAwMDAxXCIsXCI5YjVcIjpcIjEwMTAxMDEwMDAxMFwiLFwiMTNiNVwiOlwiMTAxMDEwMTAwMTEwXCIsXCI5IzUjMTFcIjpcIjEwMTAxMDEwMTAxMFwiLFwibWFqOSMxMVwiOlwiMTAxMDEwMTEwMDAxXCIsXCI5IzExXCI6XCIxMDEwMTAxMTAwMTBcIixcIjY5IzExXCI6XCIxMDEwMTAxMTAxMDBcIixcIk0xMyMxMVwiOlwiMTAxMDEwMTEwMTAxXCIsXCIxMyMxMVwiOlwiMTAxMDEwMTEwMTEwXCIsXCI5IzExYjEzXCI6XCIxMDEwMTAxMTEwMTBcIixcIm05IzVcIjpcIjEwMTEwMDAwMTAxMFwiLFwibWFkZDlcIjpcIjEwMTEwMDAxMDAwMFwiLFwibU05XCI6XCIxMDExMDAwMTAwMDFcIixcIm05XCI6XCIxMDExMDAwMTAwMTBcIixcIm02OVwiOlwiMTAxMTAwMDEwMTAwXCIsXCJtMTNcIjpcIjEwMTEwMDAxMDExMFwiLFwibU1hajliNlwiOlwiMTAxMTAwMDExMDAxXCIsXCJtOWI1XCI6XCIxMDExMDAxMDAwMTBcIixcIm0xMUFcIjpcIjEwMTEwMTAwMTAxMFwiLFwibTExXCI6XCIxMDExMDEwMTAwMTBcIixcImI5c3VzXCI6XCIxMTAwMDEwMTAwMTBcIixcIjExYjlcIjpcIjExMDAwMTAxMDAxMFwiLFwiN3N1czRiOWIxM1wiOlwiMTEwMDAxMDExMDEwXCIsXCJhbHQ3XCI6XCIxMTAwMTAwMDAwMTBcIixcIjcjNWI5XCI6XCIxMTAwMTAwMDEwMTBcIixcIk1hZGRiOVwiOlwiMTEwMDEwMDEwMDAwXCIsXCJNN2I5XCI6XCIxMTAwMTAwMTAwMDFcIixcIjdiOVwiOlwiMTEwMDEwMDEwMDEwXCIsXCIxM2I5XCI6XCIxMTAwMTAwMTAxMTBcIixcIjdiOWIxM1wiOlwiMTEwMDEwMDExMDEwXCIsXCI3IzViOSMxMVwiOlwiMTEwMDEwMTAxMDEwXCIsXCI3YjkjMTFcIjpcIjExMDAxMDExMDAxMFwiLFwiMTNiOSMxMVwiOlwiMTEwMDEwMTEwMTEwXCIsXCI3YjliMTMjMTFcIjpcIjExMDAxMDExMTAxMFwiLFwibWI2YjlcIjpcIjExMDEwMDAwMTAwMFwiLFwiN2I5IzlcIjpcIjExMDExMDAxMDAxMFwifScpfSw3MjI6bj0+e24uZXhwb3J0cz1KU09OLnBhcnNlKCd7XCJtYWpvciBwZW50YXRvbmljXCI6XCIxMDEwMTAwMTAxMDBcIixcImlvbmlhbiBwZW50YXRvbmljXCI6XCIxMDAwMTEwMTAwMDFcIixcIm1peG9seWRpYW4gcGVudGF0b25pY1wiOlwiMTAwMDExMDEwMDEwXCIsXCJyaXR1c2VuXCI6XCIxMDEwMDEwMTAxMDBcIixcImVneXB0aWFuXCI6XCIxMDEwMDEwMTAwMTBcIixcIm5lb3BvbGl0YW4gbWFqb3IgcGVudGF0b25pY1wiOlwiMTAwMDExMTAwMDEwXCIsXCJ2aWV0bmFtZXNlIDFcIjpcIjEwMDEwMTAxMTAwMFwiLFwicGVsb2dcIjpcIjExMDEwMDAxMTAwMFwiLFwia3Vtb2lqb3NoaVwiOlwiMTEwMDAxMDExMDAwXCIsXCJoaXJham9zaGlcIjpcIjEwMTEwMDAxMTAwMFwiLFwiaXdhdG9cIjpcIjExMDAwMTEwMDAxMFwiLFwiaW4tc2VuXCI6XCIxMTAwMDEwMTAwMTBcIixcImx5ZGlhbiBwZW50YXRvbmljXCI6XCIxMDAwMTAxMTAwMDFcIixcIm1hbGtvcyByYWdhXCI6XCIxMDAxMDEwMDEwMTBcIixcImxvY3JpYW4gcGVudGF0b25pY1wiOlwiMTAwMTAxMTAwMDEwXCIsXCJtaW5vciBwZW50YXRvbmljXCI6XCIxMDAxMDEwMTAwMTBcIixcIm1pbm9yIHNpeCBwZW50YXRvbmljXCI6XCIxMDAxMDEwMTAxMDBcIixcImZsYXQgdGhyZWUgcGVudGF0b25pY1wiOlwiMTAxMTAwMDEwMTAwXCIsXCJmbGF0IHNpeCBwZW50YXRvbmljXCI6XCIxMDEwMTAwMTEwMDBcIixcInNjcmlhYmluXCI6XCIxMTAwMTAwMTAxMDBcIixcIndob2xlIHRvbmUgcGVudGF0b25pY1wiOlwiMTAwMDEwMTAxMDEwXCIsXCJseWRpYW4gIzVQIHBlbnRhdG9uaWNcIjpcIjEwMDAxMDEwMTAwMVwiLFwibHlkaWFuIGRvbWluYW50IHBlbnRhdG9uaWNcIjpcIjEwMDAxMDExMDAxMFwiLFwibWlub3IgIzdNIHBlbnRhdG9uaWNcIjpcIjEwMDEwMTAxMDAwMVwiLFwic3VwZXIgbG9jcmlhbiBwZW50YXRvbmljXCI6XCIxMDAxMTAxMDAwMTBcIixcIm1pbm9yIGhleGF0b25pY1wiOlwiMTAxMTAxMDEwMDAxXCIsXCJhdWdtZW50ZWRcIjpcIjEwMDExMDAxMTAwMVwiLFwibWFqb3IgYmx1ZXNcIjpcIjEwMTExMDAxMDEwMFwiLFwicGlvbmdpb1wiOlwiMTAxMDAxMDEwMTEwXCIsXCJwcm9tZXRoZXVzIG5lb3BvbGl0YW5cIjpcIjExMDAxMDEwMDExMFwiLFwicHJvbWV0aGV1c1wiOlwiMTAxMDEwMTAwMTEwXCIsXCJteXN0ZXJ5ICMxXCI6XCIxMTAwMTAxMDEwMTBcIixcInNpeCB0b25lIHN5bW1ldHJpY1wiOlwiMTEwMDExMDAxMTAwXCIsXCJ3aG9sZSB0b25lXCI6XCIxMDEwMTAxMDEwMTBcIixcIm1lc3NpYWVuXFwncyBtb2RlICM1XCI6XCIxMTAwMDExMTAwMDFcIixcIm1pbm9yIGJsdWVzXCI6XCIxMDAxMDExMTAwMTBcIixcImxvY3JpYW4gbWFqb3JcIjpcIjEwMTAxMTEwMTAxMFwiLFwiZG91YmxlIGhhcm1vbmljIGx5ZGlhblwiOlwiMTEwMDEwMTExMDAxXCIsXCJoYXJtb25pYyBtaW5vclwiOlwiMTAxMTAxMDExMDAxXCIsXCJhbHRlcmVkXCI6XCIxMTAxMTAxMDEwMTBcIixcImxvY3JpYW4gIzJcIjpcIjEwMTEwMTEwMTAxMFwiLFwibWl4b2x5ZGlhbiBiNlwiOlwiMTAxMDExMDExMDEwXCIsXCJseWRpYW4gZG9taW5hbnRcIjpcIjEwMTAxMDExMDExMFwiLFwibHlkaWFuXCI6XCIxMDEwMTAxMTAxMDFcIixcImx5ZGlhbiBhdWdtZW50ZWRcIjpcIjEwMTAxMDEwMTEwMVwiLFwiZG9yaWFuIGIyXCI6XCIxMTAxMDEwMTAxMTBcIixcIm1lbG9kaWMgbWlub3JcIjpcIjEwMTEwMTAxMDEwMVwiLFwibG9jcmlhblwiOlwiMTEwMTAxMTAxMDEwXCIsXCJ1bHRyYWxvY3JpYW5cIjpcIjExMDExMDEwMTEwMFwiLFwibG9jcmlhbiA2XCI6XCIxMTAxMDExMDAxMTBcIixcImF1Z21lbnRlZCBoZXB0YXRvbmljXCI6XCIxMDAxMTEwMTEwMDFcIixcInJvbWFuaWFuIG1pbm9yXCI6XCIxMDExMDAxMTAxMTBcIixcImRvcmlhbiAjNFwiOlwiMTAxMTAwMTEwMTEwXCIsXCJseWRpYW4gZGltaW5pc2hlZFwiOlwiMTAxMTAwMTEwMTAxXCIsXCJwaHJ5Z2lhblwiOlwiMTEwMTAxMDExMDEwXCIsXCJsZWFkaW5nIHdob2xlIHRvbmVcIjpcIjEwMTAxMDEwMTAxMVwiLFwibHlkaWFuIG1pbm9yXCI6XCIxMDEwMTAxMTEwMTBcIixcInBocnlnaWFuIGRvbWluYW50XCI6XCIxMTAwMTEwMTEwMTBcIixcImJhbGluZXNlXCI6XCIxMTAxMDEwMTEwMDFcIixcIm5lb3BvbGl0YW4gbWFqb3JcIjpcIjExMDEwMTAxMDEwMVwiLFwiYWVvbGlhblwiOlwiMTAxMTAxMDExMDEwXCIsXCJoYXJtb25pYyBtYWpvclwiOlwiMTAxMDExMDExMDAxXCIsXCJkb3VibGUgaGFybW9uaWMgbWFqb3JcIjpcIjExMDAxMTAxMTAwMVwiLFwiZG9yaWFuXCI6XCIxMDExMDEwMTAxMTBcIixcImh1bmdhcmlhbiBtaW5vclwiOlwiMTAxMTAwMTExMDAxXCIsXCJodW5nYXJpYW4gbWFqb3JcIjpcIjEwMDExMDExMDExMFwiLFwib3JpZW50YWxcIjpcIjExMDAxMTEwMDExMFwiLFwiZmxhbWVuY29cIjpcIjExMDExMDExMDAxMFwiLFwidG9kaSByYWdhXCI6XCIxMTAxMDAxMTEwMDFcIixcIm1peG9seWRpYW5cIjpcIjEwMTAxMTAxMDExMFwiLFwicGVyc2lhblwiOlwiMTEwMDExMTAxMDAxXCIsXCJtYWpvclwiOlwiMTAxMDExMDEwMTAxXCIsXCJlbmlnbWF0aWNcIjpcIjExMDAxMDEwMTAxMVwiLFwibWFqb3IgYXVnbWVudGVkXCI6XCIxMDEwMTEwMDExMDFcIixcImx5ZGlhbiAjOVwiOlwiMTAwMTEwMTEwMTAxXCIsXCJtZXNzaWFlblxcJ3MgbW9kZSAjNFwiOlwiMTExMDAxMTExMDAxXCIsXCJwdXJ2aSByYWdhXCI6XCIxMTAwMTExMTEwMDFcIixcInNwYW5pc2ggaGVwdGF0b25pY1wiOlwiMTEwMTExMDExMDEwXCIsXCJiZWJvcFwiOlwiMTAxMDExMDEwMTExXCIsXCJiZWJvcCBtaW5vclwiOlwiMTAxMTExMDEwMTEwXCIsXCJiZWJvcCBtYWpvclwiOlwiMTAxMDExMDExMTAxXCIsXCJiZWJvcCBsb2NyaWFuXCI6XCIxMTAxMDExMTEwMTBcIixcIm1pbm9yIGJlYm9wXCI6XCIxMDExMDEwMTEwMTFcIixcImRpbWluaXNoZWRcIjpcIjEwMTEwMTEwMTEwMVwiLFwiaWNoaWtvc3VjaG9cIjpcIjEwMTAxMTExMDEwMVwiLFwibWlub3Igc2l4IGRpbWluaXNoZWRcIjpcIjEwMTEwMTAxMTEwMVwiLFwiaGFsZi13aG9sZSBkaW1pbmlzaGVkXCI6XCIxMTAxMTAxMTAxMTBcIixcImthZmkgcmFnYVwiOlwiMTAwMTExMDEwMTExXCIsXCJtZXNzaWFlblxcJ3MgbW9kZSAjNlwiOlwiMTAxMDExMTAxMDExXCIsXCJjb21wb3NpdGUgYmx1ZXNcIjpcIjEwMTExMTExMDExMFwiLFwibWVzc2lhZW5cXCdzIG1vZGUgIzNcIjpcIjEwMTExMDExMTAxMVwiLFwibWVzc2lhZW5cXCdzIG1vZGUgIzdcIjpcIjExMTEwMTExMTEwMVwiLFwiY2hyb21hdGljXCI6XCIxMTExMTExMTExMTFcIixcImlvbmlhblwiOlwiMTAxMDExMDEwMTAxXCIsXCJtaW5vclwiOlwiMTAxMTAxMDExMDEwXCJ9Jyl9fSxlPXt9O2Z1bmN0aW9uIG8oYSl7dmFyIGk9ZVthXTtpZih2b2lkIDAhPT1pKXJldHVybiBpLmV4cG9ydHM7dmFyIHI9ZVthXT17ZXhwb3J0czp7fX07cmV0dXJuIG5bYV0ocixyLmV4cG9ydHMsbyksci5leHBvcnRzfW8uZD0obixlKT0+e2Zvcih2YXIgYSBpbiBlKW8ubyhlLGEpJiYhby5vKG4sYSkmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLGEse2VudW1lcmFibGU6ITAsZ2V0OmVbYV19KX0sby5vPShuLGUpPT5PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixlKSxvLnI9bj0+e1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9O3ZhciBhPXt9OygoKT0+e28ucihhKSxvLmQoYSx7Y2hvcmQ6KCk9Pm0sY2hvcmRzOigpPT50LGlubGluZUNob3JkOigpPT5yLHNjYWxlOigpPT5jLHNjYWxlczooKT0+c30pO3ZhciBuPW8oNzIyKSxlPW8oNDEzKSxpPWZ1bmN0aW9uKG8pe3ZhciBhPW8uc2NhbGUsaT1vLmNob3JkLHI9YXx8aSx0PWE/XCJzY2FsZVwiOlwiY2hvcmRcIjtpZihcInN0cmluZ1wiIT10eXBlb2Ygcil0aHJvdyBuZXcgRXJyb3IoXCJcIi5jb25jYXQocixcIiBpcyBub3QgYSB2YWxpZCBpbnB1dCBmb3IgXCIpLmNvbmNhdCh0KSk7dmFyIHMsbSxjPXIuaW5kZXhPZihcIiBcIik7LTE9PT1jPyhzPXIuc2xpY2UoMSksbT1yWzBdLFwiYlwiIT09clsxXSYmXCIjXCIhPT1yWzFdfHwocz1yLnNsaWNlKDIpLG0rPXJbMV0pKToocz1yLnNsaWNlKC0xPT09Yz8xOmMrMSksbT1yLnNsaWNlKDAsYykpO3ZhciBkPWZ1bmN0aW9uKG4pe3JldHVybntcIkMjXCI6XCJEYlwiLFwiRCNcIjpcIkViXCIsXCJGI1wiOlwiR2JcIixcIkcjXCI6XCJBYlwiLFwiQSNcIjpcIkJiXCJ9W24udG9VcHBlckNhc2UoKV18fG4uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrbi5zbGljZSgxKX0obS5yZXBsYWNlKC9cXGQvZyxcIlwiKSksbD1cIlwiIT09bS5yZXBsYWNlKC9cXEQvZyxcIlwiKT8rbS5yZXBsYWNlKC9cXEQvZyxcIlwiKTo0O2lmKGlzTmFOKGwpKXRocm93IG5ldyBFcnJvcihcIlwiLmNvbmNhdChtWzBdLFwiIGRvZXMgbm90IGhhdmUgYSB2YWxpZCBvY3RhdmVcIikpO2lmKCFuW3NdJiYhZVtzXSl0aHJvdyBuZXcgRXJyb3IoXCJcIi5jb25jYXQocixcIiBpcyBub3QgYSB2YWxpZCBcIikuY29uY2F0KHQpKTtmb3IodmFyIGI9ZnVuY3Rpb24obixlKXt2YXIgbz1bXCJDXCIsXCJEYlwiLFwiRFwiLFwiRWJcIixcIkVcIixcIkZcIixcIkdiXCIsXCJHXCIsXCJBYlwiLFwiQVwiLFwiQmJcIixcIkJcIl0sYT1vLm1hcCgoZnVuY3Rpb24obil7cmV0dXJuIG4rZX0pKSxpPW8ubWFwKChmdW5jdGlvbihuKXtyZXR1cm4gbisoZSsxKX0pKSxyPWEuY29uY2F0KGkpO3JldHVybiByLnNsaWNlKHIuaW5kZXhPZihuK2UpKX0oZCxsKSx1PVtdLHA9MCxoPTAsZj1hP246ZTtwPGZbc10ubGVuZ3RoOylcIjFcIj09PWZbc11bcF0mJnUucHVzaChiW2hdKSxwKyssaCsrO3JldHVybiB1fSxyPWZ1bmN0aW9uKG4pe3ZhciBlLG8sYT1cImI5c3VzXCIscj00O3JldHVybiBuLmluY2x1ZGVzKGEpPyhvPWEsZT1uLnNsaWNlKDAsbi5pbmRleE9mKGEpKSk6KGU9blswXSxvPW4uc2xpY2UoMSksXCJiXCIhPT1uWzFdJiZcIiNcIiE9PW5bMV18fChlKz1uWzFdLG89bi5zbGljZSgyKSkpLG4uaW5jbHVkZXMoXCJfXCIpJiYocj0rbi5zcGxpdChcIl9cIilbMV0sbz1vLnNsaWNlKDAsby5pbmRleE9mKFwiX1wiKSkpLGkoe2Nob3JkOmUrcitcIiBcIitvfSl9LHQ9ZnVuY3Rpb24oKXtyZXR1cm4gT2JqZWN0LmtleXMoZSl9LHM9ZnVuY3Rpb24oKXtyZXR1cm4gT2JqZWN0LmtleXMobil9LG09ZnVuY3Rpb24obil7cmV0dXJuIGkoe2Nob3JkOm59KX0sYz1mdW5jdGlvbihuKXtyZXR1cm4gaSh7c2NhbGU6bn0pfX0pKCk7dmFyIGk9ZXhwb3J0cztmb3IodmFyIHIgaW4gYSlpW3JdPWFbcl07YS5fX2VzTW9kdWxlJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoaSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0pKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYWluLmpzLm1hcCIsICIndXNlIHN0cmljdCdcblxuLy8gdXRpbFxuZnVuY3Rpb24gZmlsbFN0ciAocywgbnVtKSB7IHJldHVybiBBcnJheShudW0gKyAxKS5qb2luKHMpIH1cbmZ1bmN0aW9uIGlzTnVtICh4KSB7IHJldHVybiB0eXBlb2YgeCA9PT0gJ251bWJlcicgfVxuZnVuY3Rpb24gaXNTdHIgKHgpIHsgcmV0dXJuIHR5cGVvZiB4ID09PSAnc3RyaW5nJyB9XG5mdW5jdGlvbiBpc0RlZiAoeCkgeyByZXR1cm4gdHlwZW9mIHggIT09ICd1bmRlZmluZWQnIH1cbmZ1bmN0aW9uIG1pZGlUb0ZyZXEgKG1pZGksIHR1bmluZykge1xuICByZXR1cm4gTWF0aC5wb3coMiwgKG1pZGkgLSA2OSkgLyAxMikgKiAodHVuaW5nIHx8IDQ0MClcbn1cblxudmFyIFJFR0VYID0gL14oW2EtZ0EtR10pKCN7MSx9fGJ7MSx9fHh7MSx9fCkoLT9cXGQqKVxccyooLiopXFxzKiQvXG4vKipcbiAqIEEgcmVnZXggZm9yIG1hdGNoaW5nIG5vdGUgc3RyaW5ncyBpbiBzY2llbnRpZmljIG5vdGF0aW9uLlxuICpcbiAqIEBuYW1lIHJlZ2V4XG4gKiBAZnVuY3Rpb25cbiAqIEByZXR1cm4ge1JlZ0V4cH0gdGhlIHJlZ2V4cCB1c2VkIHRvIHBhcnNlIHRoZSBub3RlIG5hbWVcbiAqXG4gKiBUaGUgbm90ZSBzdHJpbmcgc2hvdWxkIGhhdmUgdGhlIGZvcm0gYGxldHRlclthY2NpZGVudGFsc11bb2N0YXZlXVtlbGVtZW50XWBcbiAqIHdoZXJlOlxuICpcbiAqIC0gbGV0dGVyOiAoUmVxdWlyZWQpIGlzIGEgbGV0dGVyIGZyb20gQSB0byBHIGVpdGhlciB1cHBlciBvciBsb3dlciBjYXNlXG4gKiAtIGFjY2lkZW50YWxzOiAoT3B0aW9uYWwpIGNhbiBiZSBvbmUgb3IgbW9yZSBgYmAgKGZsYXRzKSwgYCNgIChzaGFycHMpIG9yIGB4YCAoZG91YmxlIHNoYXJwcykuXG4gKiBUaGV5IGNhbiBOT1QgYmUgbWl4ZWQuXG4gKiAtIG9jdGF2ZTogKE9wdGlvbmFsKSBhIHBvc2l0aXZlIG9yIG5lZ2F0aXZlIGludGVnZXJcbiAqIC0gZWxlbWVudDogKE9wdGlvbmFsKSBhZGRpdGlvbmFsbHkgYW55dGhpbmcgYWZ0ZXIgdGhlIGR1cmF0aW9uIGlzIGNvbnNpZGVyZWQgdG9cbiAqIGJlIHRoZSBlbGVtZW50IG5hbWUgKGZvciBleGFtcGxlOiAnQzIgZG9yaWFuJylcbiAqXG4gKiBUaGUgZXhlY3V0ZWQgcmVnZXggY29udGFpbnMgKGJ5IGFycmF5IGluZGV4KTpcbiAqXG4gKiAtIDA6IHRoZSBjb21wbGV0ZSBzdHJpbmdcbiAqIC0gMTogdGhlIG5vdGUgbGV0dGVyXG4gKiAtIDI6IHRoZSBvcHRpb25hbCBhY2NpZGVudGFsc1xuICogLSAzOiB0aGUgb3B0aW9uYWwgb2N0YXZlXG4gKiAtIDQ6IHRoZSByZXN0IG9mIHRoZSBzdHJpbmcgKHRyaW1tZWQpXG4gKlxuICogQGV4YW1wbGVcbiAqIHZhciBwYXJzZXIgPSByZXF1aXJlKCdub3RlLXBhcnNlcicpXG4gKiBwYXJzZXIucmVnZXguZXhlYygnYyM0JylcbiAqIC8vID0+IFsnYyM0JywgJ2MnLCAnIycsICc0JywgJyddXG4gKiBwYXJzZXIucmVnZXguZXhlYygnYyM0IG1ham9yJylcbiAqIC8vID0+IFsnYyM0bWFqb3InLCAnYycsICcjJywgJzQnLCAnbWFqb3InXVxuICogcGFyc2VyLnJlZ2V4KCkuZXhlYygnQ01hajcnKVxuICogLy8gPT4gWydDTWFqNycsICdDJywgJycsICcnLCAnTWFqNyddXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdleCAoKSB7IHJldHVybiBSRUdFWCB9XG5cbnZhciBTRU1JVE9ORVMgPSBbMCwgMiwgNCwgNSwgNywgOSwgMTFdXG4vKipcbiAqIFBhcnNlIGEgbm90ZSBuYW1lIGluIHNjaWVudGlmaWMgbm90YXRpb24gYW4gcmV0dXJuIGl0J3MgY29tcG9uZW50cyxcbiAqIGFuZCBzb21lIG51bWVyaWMgcHJvcGVydGllcyBpbmNsdWRpbmcgbWlkaSBudW1iZXIgYW5kIGZyZXF1ZW5jeS5cbiAqXG4gKiBAbmFtZSBwYXJzZVxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbm90ZSAtIHRoZSBub3RlIHN0cmluZyB0byBiZSBwYXJzZWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNUb25pYyAtIHRydWUgdGhlIHN0cmluZ3MgaXQncyBzdXBwb3NlZCB0byBjb250YWluIGEgbm90ZSBudW1iZXJcbiAqIGFuZCBzb21lIGNhdGVnb3J5IChmb3IgZXhhbXBsZSBhbiBzY2FsZTogJ0MjIG1ham9yJykuIEl0J3MgZmFsc2UgYnkgZGVmYXVsdCxcbiAqIGJ1dCB3aGVuIHRydWUsIGVuIGV4dHJhIHRvbmljT2YgcHJvcGVydHkgaXMgcmV0dXJuZWQgd2l0aCB0aGUgY2F0ZWdvcnkgKCdtYWpvcicpXG4gKiBAcGFyYW0ge0Zsb2F0fSB0dW5uaW5nIC0gVGhlIGZyZXF1ZW5jeSBvZiBBNCBub3RlIHRvIGNhbGN1bGF0ZSBmcmVxdWVuY2llcy5cbiAqIEJ5IGRlZmF1bHQgaXQgNDQwLlxuICogQHJldHVybiB7T2JqZWN0fSB0aGUgcGFyc2VkIG5vdGUgbmFtZSBvciBudWxsIGlmIG5vdCBhIHZhbGlkIG5vdGVcbiAqXG4gKiBUaGUgcGFyc2VkIG5vdGUgbmFtZSBvYmplY3Qgd2lsbCBBTFdBWVMgY29udGFpbnM6XG4gKiAtIGxldHRlcjogdGhlIHVwcGVyY2FzZSBsZXR0ZXIgb2YgdGhlIG5vdGVcbiAqIC0gYWNjOiB0aGUgYWNjaWRlbnRhbHMgb2YgdGhlIG5vdGUgKG9ubHkgc2hhcnBzIG9yIGZsYXRzKVxuICogLSBwYzogdGhlIHBpdGNoIGNsYXNzIChsZXR0ZXIgKyBhY2MpXG4gKiAtIHN0ZXA6IHMgYSBudW1lcmljIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBsZXR0ZXIuIEl0J3MgYW4gaW50ZWdlciBmcm9tIDAgdG8gNlxuICogd2hlcmUgMCA9IEMsIDEgPSBEIC4uLiA2ID0gQlxuICogLSBhbHQ6IGEgbnVtZXJpYyByZXByZXNlbnRhdGlvbiBvZiB0aGUgYWNjaWRlbnRhbHMuIDAgbWVhbnMgbm8gYWx0ZXJhdGlvbixcbiAqIHBvc2l0aXZlIG51bWJlcnMgYXJlIGZvciBzaGFycHMgYW5kIG5lZ2F0aXZlIGZvciBmbGF0c1xuICogLSBjaHJvbWE6IGEgbnVtZXJpYyByZXByZXNlbnRhdGlvbiBvZiB0aGUgcGl0Y2ggY2xhc3MuIEl0J3MgbGlrZSBtaWRpIGZvclxuICogcGl0Y2ggY2xhc3Nlcy4gMCA9IEMsIDEgPSBDIywgMiA9IEQgLi4uIDExID0gQi4gQ2FuIGJlIHVzZWQgdG8gZmluZCBlbmhhcm1vbmljc1xuICogc2luY2UsIGZvciBleGFtcGxlLCBjaHJvbWEgb2YgJ0NiJyBhbmQgJ0InIGFyZSBib3RoIDExXG4gKlxuICogSWYgdGhlIG5vdGUgaGFzIG9jdGF2ZSwgdGhlIHBhcnNlciBvYmplY3Qgd2lsbCBjb250YWluOlxuICogLSBvY3Q6IHRoZSBvY3RhdmUgbnVtYmVyIChhcyBpbnRlZ2VyKVxuICogLSBtaWRpOiB0aGUgbWlkaSBudW1iZXJcbiAqIC0gZnJlcTogdGhlIGZyZXF1ZW5jeSAodXNpbmcgdHVuaW5nIHBhcmFtZXRlciBhcyBiYXNlKVxuICpcbiAqIElmIHRoZSBwYXJhbWV0ZXIgYGlzVG9uaWNgIGlzIHNldCB0byB0cnVlLCB0aGUgcGFyc2VkIG9iamVjdCB3aWxsIGNvbnRhaW46XG4gKiAtIHRvbmljT2Y6IHRoZSByZXN0IG9mIHRoZSBzdHJpbmcgdGhhdCBmb2xsb3dzIG5vdGUgbmFtZSAobGVmdCBhbmQgcmlnaHQgdHJpbW1lZClcbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIHBhcnNlID0gcmVxdWlyZSgnbm90ZS1wYXJzZXInKS5wYXJzZVxuICogcGFyc2UoJ0NiNCcpXG4gKiAvLyA9PiB7IGxldHRlcjogJ0MnLCBhY2M6ICdiJywgcGM6ICdDYicsIHN0ZXA6IDAsIGFsdDogLTEsIGNocm9tYTogLTEsXG4gKiAgICAgICAgIG9jdDogNCwgbWlkaTogNTksIGZyZXE6IDI0Ni45NDE2NTA2MjgwNjIwNiB9XG4gKiAvLyBpZiBubyBvY3RhdmUsIG5vIG1pZGksIG5vIGZyZXFcbiAqIHBhcnNlKCdmeCcpXG4gKiAvLyA9PiB7IGxldHRlcjogJ0YnLCBhY2M6ICcjIycsIHBjOiAnRiMjJywgc3RlcDogMywgYWx0OiAyLCBjaHJvbWE6IDcgfSlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlIChzdHIsIGlzVG9uaWMsIHR1bmluZykge1xuICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHJldHVybiBudWxsXG4gIHZhciBtID0gUkVHRVguZXhlYyhzdHIpXG4gIGlmICghbSB8fCAoIWlzVG9uaWMgJiYgbVs0XSkpIHJldHVybiBudWxsXG5cbiAgdmFyIHAgPSB7IGxldHRlcjogbVsxXS50b1VwcGVyQ2FzZSgpLCBhY2M6IG1bMl0ucmVwbGFjZSgveC9nLCAnIyMnKSB9XG4gIHAucGMgPSBwLmxldHRlciArIHAuYWNjXG4gIHAuc3RlcCA9IChwLmxldHRlci5jaGFyQ29kZUF0KDApICsgMykgJSA3XG4gIHAuYWx0ID0gcC5hY2NbMF0gPT09ICdiJyA/IC1wLmFjYy5sZW5ndGggOiBwLmFjYy5sZW5ndGhcbiAgdmFyIHBvcyA9IFNFTUlUT05FU1twLnN0ZXBdICsgcC5hbHRcbiAgcC5jaHJvbWEgPSBwb3MgPCAwID8gMTIgKyBwb3MgOiBwb3MgJSAxMlxuICBpZiAobVszXSkgeyAvLyBoYXMgb2N0YXZlXG4gICAgcC5vY3QgPSArbVszXVxuICAgIHAubWlkaSA9IHBvcyArIDEyICogKHAub2N0ICsgMSlcbiAgICBwLmZyZXEgPSBtaWRpVG9GcmVxKHAubWlkaSwgdHVuaW5nKVxuICB9XG4gIGlmIChpc1RvbmljKSBwLnRvbmljT2YgPSBtWzRdXG4gIHJldHVybiBwXG59XG5cbnZhciBMRVRURVJTID0gJ0NERUZHQUInXG5mdW5jdGlvbiBhY2NTdHIgKG4pIHsgcmV0dXJuICFpc051bShuKSA/ICcnIDogbiA8IDAgPyBmaWxsU3RyKCdiJywgLW4pIDogZmlsbFN0cignIycsIG4pIH1cbmZ1bmN0aW9uIG9jdFN0ciAobikgeyByZXR1cm4gIWlzTnVtKG4pID8gJycgOiAnJyArIG4gfVxuXG4vKipcbiAqIENyZWF0ZSBhIHN0cmluZyBmcm9tIGEgcGFyc2VkIG9iamVjdCBvciBgc3RlcCwgYWx0ZXJhdGlvbiwgb2N0YXZlYCBwYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gdGhlIHBhcnNlZCBkYXRhIG9iamVjdFxuICogQHJldHVybiB7U3RyaW5nfSBhIG5vdGUgc3RyaW5nIG9yIG51bGwgaWYgbm90IHZhbGlkIHBhcmFtZXRlcnNcbiAqIEBzaW5jZSAxLjJcbiAqIEBleGFtcGxlXG4gKiBwYXJzZXIuYnVpbGQocGFyc2VyLnBhcnNlKCdjYjInKSkgLy8gPT4gJ0NiMidcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gaXQgYWNjZXB0cyAoc3RlcCwgYWx0ZXJhdGlvbiwgb2N0YXZlKSBwYXJhbWV0ZXJzOlxuICogcGFyc2VyLmJ1aWxkKDMpIC8vID0+ICdGJ1xuICogcGFyc2VyLmJ1aWxkKDMsIC0xKSAvLyA9PiAnRmInXG4gKiBwYXJzZXIuYnVpbGQoMywgLTEsIDQpIC8vID0+ICdGYjQnXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidWlsZCAocywgYSwgbykge1xuICBpZiAocyA9PT0gbnVsbCB8fCB0eXBlb2YgcyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBudWxsXG4gIGlmIChzLnN0ZXApIHJldHVybiBidWlsZChzLnN0ZXAsIHMuYWx0LCBzLm9jdClcbiAgaWYgKHMgPCAwIHx8IHMgPiA2KSByZXR1cm4gbnVsbFxuICByZXR1cm4gTEVUVEVSUy5jaGFyQXQocykgKyBhY2NTdHIoYSkgKyBvY3RTdHIobylcbn1cblxuLyoqXG4gKiBHZXQgbWlkaSBvZiBhIG5vdGVcbiAqXG4gKiBAbmFtZSBtaWRpXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfEludGVnZXJ9IG5vdGUgLSB0aGUgbm90ZSBuYW1lIG9yIG1pZGkgbnVtYmVyXG4gKiBAcmV0dXJuIHtJbnRlZ2VyfSB0aGUgbWlkaSBudW1iZXIgb2YgdGhlIG5vdGUgb3IgbnVsbCBpZiBub3QgYSB2YWxpZCBub3RlXG4gKiBvciB0aGUgbm90ZSBkb2VzIE5PVCBjb250YWlucyBvY3RhdmVcbiAqIEBleGFtcGxlXG4gKiB2YXIgcGFyc2VyID0gcmVxdWlyZSgnbm90ZS1wYXJzZXInKVxuICogcGFyc2VyLm1pZGkoJ0E0JykgLy8gPT4gNjlcbiAqIHBhcnNlci5taWRpKCdBJykgLy8gPT4gbnVsbFxuICogQGV4YW1wbGVcbiAqIC8vIG1pZGkgbnVtYmVycyBhcmUgYnlwYXNzZWQgKGV2ZW4gYXMgc3RyaW5ncylcbiAqIHBhcnNlci5taWRpKDYwKSAvLyA9PiA2MFxuICogcGFyc2VyLm1pZGkoJzYwJykgLy8gPT4gNjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1pZGkgKG5vdGUpIHtcbiAgaWYgKChpc051bShub3RlKSB8fCBpc1N0cihub3RlKSkgJiYgbm90ZSA+PSAwICYmIG5vdGUgPCAxMjgpIHJldHVybiArbm90ZVxuICB2YXIgcCA9IHBhcnNlKG5vdGUpXG4gIHJldHVybiBwICYmIGlzRGVmKHAubWlkaSkgPyBwLm1pZGkgOiBudWxsXG59XG5cbi8qKlxuICogR2V0IGZyZXEgb2YgYSBub3RlIGluIGhlcnR6cyAoaW4gYSB3ZWxsIHRlbXBlcmVkIDQ0MEh6IEE0KVxuICpcbiAqIEBuYW1lIGZyZXFcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5vdGUgLSB0aGUgbm90ZSBuYW1lIG9yIG5vdGUgbWlkaSBudW1iZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSB0dW5pbmcgLSAoT3B0aW9uYWwpIHRoZSBBNCBmcmVxdWVuY3kgKDQ0MCBieSBkZWZhdWx0KVxuICogQHJldHVybiB7RmxvYXR9IHRoZSBmcmVxIG9mIHRoZSBudW1iZXIgaWYgaGVydHpzIG9yIG51bGwgaWYgbm90IHZhbGlkIG5vdGVcbiAqIEBleGFtcGxlXG4gKiB2YXIgcGFyc2VyID0gcmVxdWlyZSgnbm90ZS1wYXJzZXInKVxuICogcGFyc2VyLmZyZXEoJ0E0JykgLy8gPT4gNDQwXG4gKiBwYXJzZXIuZnJlcSgnQScpIC8vID0+IG51bGxcbiAqIEBleGFtcGxlXG4gKiAvLyBjYW4gY2hhbmdlIHR1bmluZyAoNDQwIGJ5IGRlZmF1bHQpXG4gKiBwYXJzZXIuZnJlcSgnQTQnLCA0NDQpIC8vID0+IDQ0NFxuICogcGFyc2VyLmZyZXEoJ0EzJywgNDQ0KSAvLyA9PiAyMjJcbiAqIEBleGFtcGxlXG4gKiAvLyBpdCBhY2NlcHRzIG1pZGkgbnVtYmVycyAoYXMgbnVtYmVycyBhbmQgYXMgc3RyaW5ncylcbiAqIHBhcnNlci5mcmVxKDY5KSAvLyA9PiA0NDBcbiAqIHBhcnNlci5mcmVxKCc2OScsIDQ0MikgLy8gPT4gNDQyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcmVxIChub3RlLCB0dW5pbmcpIHtcbiAgdmFyIG0gPSBtaWRpKG5vdGUpXG4gIHJldHVybiBtID09PSBudWxsID8gbnVsbCA6IG1pZGlUb0ZyZXEobSwgdHVuaW5nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbGV0dGVyIChzcmMpIHsgcmV0dXJuIChwYXJzZShzcmMpIHx8IHt9KS5sZXR0ZXIgfVxuZXhwb3J0IGZ1bmN0aW9uIGFjYyAoc3JjKSB7IHJldHVybiAocGFyc2Uoc3JjKSB8fCB7fSkuYWNjIH1cbmV4cG9ydCBmdW5jdGlvbiBwYyAoc3JjKSB7IHJldHVybiAocGFyc2Uoc3JjKSB8fCB7fSkucGMgfVxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXAgKHNyYykgeyByZXR1cm4gKHBhcnNlKHNyYykgfHwge30pLnN0ZXAgfVxuZXhwb3J0IGZ1bmN0aW9uIGFsdCAoc3JjKSB7IHJldHVybiAocGFyc2Uoc3JjKSB8fCB7fSkuYWx0IH1cbmV4cG9ydCBmdW5jdGlvbiBjaHJvbWEgKHNyYykgeyByZXR1cm4gKHBhcnNlKHNyYykgfHwge30pLmNocm9tYSB9XG5leHBvcnQgZnVuY3Rpb24gb2N0IChzcmMpIHsgcmV0dXJuIChwYXJzZShzcmMpIHx8IHt9KS5vY3QgfVxuIiwgIi8qKlxuICogQSBtaWRpIG5vdGUgbnVtYmVyIGlzIGEgbnVtYmVyIHJlcHJlc2VudGF0aW9uIG9mIGEgbm90ZSBwaXRjaC4gSXQgY2FuIGJlXG4gKiBpbnRlZ2VycyBzbyBpdCdzIGVxdWFsIHRlbXBlcmVkIHR1bmVkLCBvciBmbG9hdCB0byBpbmRpY2F0ZSBpdCdzIG5vdFxuICogdHVuZWQgaW50byBlcXVhbCB0ZW1lcGVyZWQgc2NhbGUuXG4gKlxuICogVGhpcyBtb2R1bGUgY29udGFpbnMgZnVuY3Rpb25zIHRvIGNvbnZlcnQgdG8gYW5kIGZyb20gbWlkaSBub3Rlcy5cbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIG1pZGkgPSByZXF1aXJlKCd0b25hbC1taWRpJylcbiAqIG1pZGkudG9NaWRpKCdBNCcpIC8vID0+IDY5XG4gKiBtaWRpLm5vdGUoNjkpIC8vID0+ICdBNCdcbiAqIG1pZGkubm90ZSg2MSkgLy8gPT4gJ0RiNCdcbiAqIG1pZGkubm90ZSg2MSwgdHJ1ZSkgLy8gPT4gJ0MjNCdcbiAqXG4gKiBAbW9kdWxlIG1pZGlcbiAqL1xuXG5pbXBvcnQgeyBtaWRpIH0gZnJvbSAnbm90ZS1wYXJzZXInXG5cbi8qKlxuICogQ29udmVydCB0aGUgZ2l2ZW4gbm90ZSB0byBhIG1pZGkgbm90ZSBudW1iZXIuIElmIHlvdSBwYXNzIGEgbWlkaSBudW1iZXIgaXRcbiAqIHdpbGwgcmV0dXJuZWQgYXMgaXMuXG4gKlxuICogQHBhcmFtIHtBcnJheXxTdHJpbmd8TnVtYmVyfSBub3RlIC0gdGhlIG5vdGUgdG8gZ2V0IHRoZSBtaWRpIG51bWJlciBmcm9tXG4gKiBAcmV0dXJuIHtJbnRlZ2VyfSB0aGUgbWlkaSBudW1iZXIgb3IgbnVsbCBpZiBub3QgdmFsaWQgcGl0Y2hcbiAqIEBleGFtcGxlXG4gKiBtaWRpLnRvTWlkaSgnQzQnKSAvLyA9PiA2MFxuICogbWlkaS50b01pZGkoNjApIC8vID0+IDYwXG4gKiBtaWRpLnRvTWlkaSgnNjAnKSAvLyA9PiA2MFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9NaWRpICh2YWwpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSAmJiB2YWwubGVuZ3RoID09PSAyKSByZXR1cm4gdmFsWzBdICogNyArIHZhbFsxXSAqIDEyICsgMTJcbiAgcmV0dXJuIG1pZGkodmFsKVxufVxuXG52YXIgRkxBVFMgPSAnQyBEYiBEIEViIEUgRiBHYiBHIEFiIEEgQmIgQicuc3BsaXQoJyAnKVxudmFyIFNIQVJQUyA9ICdDIEMjIEQgRCMgRSBGIEYjIEcgRyMgQSBBIyBCJy5zcGxpdCgnICcpXG5cbi8qKlxuICogR2l2ZW4gYSBtaWRpIG51bWJlciwgcmV0dXJucyBhIG5vdGUgbmFtZS4gVGhlIGFsdGVyZWQgbm90ZXMgd2lsbCBoYXZlXG4gKiBmbGF0cyB1bmxlc3MgZXhwbGljaXRseSBzZXQgd2l0aCB0aGUgb3B0aW9uYWwgYHVzZVNoYXJwc2AgcGFyYW1ldGVyLlxuICpcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtJbnRlZ2VyfSBtaWRpIC0gdGhlIG1pZGkgbm90ZSBudW1iZXJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlU2hhcnBzIC0gKE9wdGlvbmFsKSBzZXQgdG8gdHJ1ZSB0byB1c2Ugc2hhcnBzIGluc3RlYWQgb2YgZmxhdHNcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIG5vdGUgbmFtZVxuICogQGV4YW1wbGVcbiAqIHZhciBtaWRpID0gcmVxdWlyZSgndG9uYWwtbWlkaScpXG4gKiBtaWRpLm5vdGUoNjEpIC8vID0+ICdEYjQnXG4gKiBtaWRpLm5vdGUoNjEsIHRydWUpIC8vID0+ICdDIzQnXG4gKiAvLyBpdCByb3VuZHMgdG8gbmVhcmVzdCBub3RlXG4gKiBtaWRpLm5vdGUoNjEuNykgLy8gPT4gJ0Q0J1xuICovXG5leHBvcnQgZnVuY3Rpb24gbm90ZSAobnVtLCBzaGFycHMpIHtcbiAgaWYgKG51bSA9PT0gdHJ1ZSB8fCBudW0gPT09IGZhbHNlKSByZXR1cm4gZnVuY3Rpb24gKG0pIHsgcmV0dXJuIG5vdGUobSwgbnVtKSB9XG4gIG51bSA9IE1hdGgucm91bmQobnVtKVxuICB2YXIgcGNzID0gc2hhcnBzID09PSB0cnVlID8gU0hBUlBTIDogRkxBVFNcbiAgdmFyIHBjID0gcGNzW251bSAlIDEyXVxuICB2YXIgbyA9IE1hdGguZmxvb3IobnVtIC8gMTIpIC0gMVxuICByZXR1cm4gcGMgKyBvXG59XG4iLCAie1xuICBcIm5hbWVcIjogXCJtaWRpLXdyaXRlci1qc1wiLFxuICBcInZlcnNpb25cIjogXCIyLjAuMVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQSBsaWJyYXJ5IHByb3ZpZGluZyBhbiBBUEkgZm9yIGdlbmVyYXRpbmcgTUlESSBmaWxlcy5cIixcbiAgXCJtYWluXCI6IFwiYnVpbGQvaW5kZXguanNcIixcbiAgXCJ0eXBlc1wiOiBcInR5cGVzLmQudHNcIixcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwidG9uYWwtbWlkaVwiOiBcIl4wLjY5LjdcIlxuICB9LFxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAYmFiZWwvY29yZVwiOiBcIl43LjkuNlwiLFxuICAgIFwiQGJhYmVsL3BsdWdpbi10cmFuc2Zvcm0tZGVzdHJ1Y3R1cmluZ1wiOiBcIl43LjkuNVwiLFxuICAgIFwiQGJhYmVsL3ByZXNldC1lbnZcIjogXCJeNy45LjZcIixcbiAgICBcIkByb2xsdXAvcGx1Z2luLWJhYmVsXCI6IFwiXjUuMC4wXCIsXG4gICAgXCJlc2xpbnRcIjogXCJeNy4wLjBcIixcbiAgICBcImVzbGludC1jb25maWctc3RhbmRhcmRcIjogXCJeMTIuMC4wXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLWltcG9ydFwiOiBcIl4yLjIwLjJcIixcbiAgICBcImVzbGludC1wbHVnaW4tbm9kZVwiOiBcIl45LjIuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1wcm9taXNlXCI6IFwiXjQuMS4xXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXN0YW5kYXJkXCI6IFwiXjQuMC4xXCIsXG4gICAgXCJqc2RvY1wiOiBcIl4zLjYuNFwiLFxuICAgIFwibWluYW1pXCI6IFwiXjEuMi4zXCIsXG4gICAgXCJtb2NoYVwiOiBcIl45LjAuMVwiLFxuICAgIFwibnljXCI6IFwiXjE1LjAuMVwiLFxuICAgIFwicm9sbHVwXCI6IFwiXjIuOS4wXCIsXG4gICAgXCJ3YXRjaFwiOiBcIl4xLjAuMlwiXG4gIH0sXG4gIFwiZGlyZWN0b3JpZXNcIjoge1xuICAgIFwibGliXCI6IFwic3JjXCIsXG4gICAgXCJleGFtcGxlXCI6IFwiZXhhbXBsZXNcIixcbiAgICBcInRlc3RcIjogXCJ0ZXN0XCJcbiAgfSxcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcImJ1aWxkXCI6IFwibWtkaXIgLXAgYnVpbGQgJiYgcm9sbHVwIC1jICYmIG5wbSBydW4gZG9jc1wiLFxuICAgIFwiZG9jc1wiOiBcIi4vbm9kZV9tb2R1bGVzLy5iaW4vanNkb2MgLXIgc3JjIFJFQURNRS5tZCAtZCAuL2RvY3MgLXQgLi9ub2RlX21vZHVsZXMvbWluYW1pXCIsXG4gICAgXCJsaW50OmpzXCI6IFwiZXNsaW50ICdzcmMvKiovKiouanMnXCIsXG4gICAgXCJwcmVwdWJsaXNoT25seVwiOiBcIm5wbSB0ZXN0XCIsXG4gICAgXCJwcmV0ZXN0XCI6IFwibnBtIHJ1biBidWlsZFwiLFxuICAgIFwidGVzdFwiOiBcIm55YyAtLXJlcG9ydGVyPXRleHQgbW9jaGEgLS1uby1jb25maWcgLS1uby1wYWNrYWdlXCIsXG4gICAgXCJ3YXRjaFwiOiBcIndhdGNoICducG0gcnVuIGJ1aWxkJyBzcmNcIixcbiAgICBcInBvc3RpbnN0YWxsXCI6IFwibm9kZSBwb3N0aW5zdGFsbC5qc1wiXG4gIH0sXG4gIFwicnVua2l0RXhhbXBsZUZpbGVuYW1lXCI6IFwicnVua2l0LmpzXCIsXG4gIFwicmVwb3NpdG9yeVwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiZ2l0XCIsXG4gICAgXCJ1cmxcIjogXCJnaXQraHR0cHM6Ly9naXRodWIuY29tL2dyaW1tZHVkZS9NaWRpV3JpdGVySlMuZ2l0XCJcbiAgfSxcbiAgXCJrZXl3b3Jkc1wiOiBbXG4gICAgXCJtaWRpXCIsXG4gICAgXCJnZW5lcmF0b3JcIixcbiAgICBcIm11c2ljXCJcbiAgXSxcbiAgXCJhdXRob3JcIjogXCJHYXJyZXR0IEdyaW1tXCIsXG4gIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICBcImJ1Z3NcIjoge1xuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2dyaW1tZHVkZS9NaWRpV3JpdGVySlMvaXNzdWVzXCJcbiAgfSxcbiAgXCJob21lcGFnZVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ncmltbWR1ZGUvTWlkaVdyaXRlckpTI3JlYWRtZVwiXG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9uYWxNaWRpID0gcmVxdWlyZSgndG9uYWwtbWlkaScpO1xuXG4vKipcbiAqIE1JREkgZmlsZSBmb3JtYXQgY29uc3RhbnRzLlxuICogQHJldHVybiB7Q29uc3RhbnRzfVxuICovXG52YXIgQ29uc3RhbnRzID0ge1xuICBWRVJTSU9OOiByZXF1aXJlKCcuLi9wYWNrYWdlLmpzb24nKS52ZXJzaW9uLFxuICBIRUFERVJfQ0hVTktfVFlQRTogWzB4NGQsIDB4NTQsIDB4NjgsIDB4NjRdLFxuICAvLyBNdGhkXG4gIEhFQURFUl9DSFVOS19MRU5HVEg6IFsweDAwLCAweDAwLCAweDAwLCAweDA2XSxcbiAgLy8gSGVhZGVyIHNpemUgZm9yIFNNRlxuICBIRUFERVJfQ0hVTktfRk9STUFUMDogWzB4MDAsIDB4MDBdLFxuICAvLyBNaWRpIFR5cGUgMCBpZFxuICBIRUFERVJfQ0hVTktfRk9STUFUMTogWzB4MDAsIDB4MDFdLFxuICAvLyBNaWRpIFR5cGUgMSBpZFxuICBIRUFERVJfQ0hVTktfRElWSVNJT046IFsweDAwLCAweDgwXSxcbiAgLy8gRGVmYXVsdHMgdG8gMTI4IHRpY2tzIHBlciBiZWF0XG4gIFRSQUNLX0NIVU5LX1RZUEU6IFsweDRkLCAweDU0LCAweDcyLCAweDZiXSxcbiAgLy8gTVRyayxcbiAgTUVUQV9FVkVOVF9JRDogMHhGRixcbiAgTUVUQV9URVhUX0lEOiAweDAxLFxuICBNRVRBX0NPUFlSSUdIVF9JRDogMHgwMixcbiAgTUVUQV9UUkFDS19OQU1FX0lEOiAweDAzLFxuICBNRVRBX0lOU1RSVU1FTlRfTkFNRV9JRDogMHgwNCxcbiAgTUVUQV9MWVJJQ19JRDogMHgwNSxcbiAgTUVUQV9NQVJLRVJfSUQ6IDB4MDYsXG4gIE1FVEFfQ1VFX1BPSU5UOiAweDA3LFxuICBNRVRBX1RFTVBPX0lEOiAweDUxLFxuICBNRVRBX1NNVFBFX09GRlNFVDogMHg1NCxcbiAgTUVUQV9USU1FX1NJR05BVFVSRV9JRDogMHg1OCxcbiAgTUVUQV9LRVlfU0lHTkFUVVJFX0lEOiAweDU5LFxuICBNRVRBX0VORF9PRl9UUkFDS19JRDogWzB4MkYsIDB4MDBdLFxuICBDT05UUk9MTEVSX0NIQU5HRV9TVEFUVVM6IDB4QjAsXG4gIC8vIGluY2x1ZGVzIGNoYW5uZWwgbnVtYmVyICgwKVxuICBQUk9HUkFNX0NIQU5HRV9TVEFUVVM6IDB4QzAsXG4gIC8vIGluY2x1ZGVzIGNoYW5uZWwgbnVtYmVyICgwKVxuICBQSVRDSF9CRU5EX1NUQVRVUzogMHhFMCAvLyBpbmNsdWRlcyBjaGFubmVsIG51bWJlciAoMClcblxufTtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxuZnVuY3Rpb24gX3dyYXBSZWdFeHAoKSB7XG4gIF93cmFwUmVnRXhwID0gZnVuY3Rpb24gKHJlLCBncm91cHMpIHtcbiAgICByZXR1cm4gbmV3IEJhYmVsUmVnRXhwKHJlLCB1bmRlZmluZWQsIGdyb3Vwcyk7XG4gIH07XG5cbiAgdmFyIF9zdXBlciA9IFJlZ0V4cC5wcm90b3R5cGU7XG5cbiAgdmFyIF9ncm91cHMgPSBuZXcgV2Vha01hcCgpO1xuXG4gIGZ1bmN0aW9uIEJhYmVsUmVnRXhwKHJlLCBmbGFncywgZ3JvdXBzKSB7XG4gICAgdmFyIF90aGlzID0gbmV3IFJlZ0V4cChyZSwgZmxhZ3MpO1xuXG4gICAgX2dyb3Vwcy5zZXQoX3RoaXMsIGdyb3VwcyB8fCBfZ3JvdXBzLmdldChyZSkpO1xuXG4gICAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihfdGhpcywgQmFiZWxSZWdFeHAucHJvdG90eXBlKTtcbiAgfVxuXG4gIF9pbmhlcml0cyhCYWJlbFJlZ0V4cCwgUmVnRXhwKTtcblxuICBCYWJlbFJlZ0V4cC5wcm90b3R5cGUuZXhlYyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICB2YXIgcmVzdWx0ID0gX3N1cGVyLmV4ZWMuY2FsbCh0aGlzLCBzdHIpO1xuXG4gICAgaWYgKHJlc3VsdCkgcmVzdWx0Lmdyb3VwcyA9IGJ1aWxkR3JvdXBzKHJlc3VsdCwgdGhpcyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBCYWJlbFJlZ0V4cC5wcm90b3R5cGVbU3ltYm9sLnJlcGxhY2VdID0gZnVuY3Rpb24gKHN0ciwgc3Vic3RpdHV0aW9uKSB7XG4gICAgaWYgKHR5cGVvZiBzdWJzdGl0dXRpb24gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHZhciBncm91cHMgPSBfZ3JvdXBzLmdldCh0aGlzKTtcblxuICAgICAgcmV0dXJuIF9zdXBlcltTeW1ib2wucmVwbGFjZV0uY2FsbCh0aGlzLCBzdHIsIHN1YnN0aXR1dGlvbi5yZXBsYWNlKC9cXCQ8KFtePl0rKT4vZywgZnVuY3Rpb24gKF8sIG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIFwiJFwiICsgZ3JvdXBzW25hbWVdO1xuICAgICAgfSkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHN1YnN0aXR1dGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gX3N1cGVyW1N5bWJvbC5yZXBsYWNlXS5jYWxsKHRoaXMsIHN0ciwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcblxuICAgICAgICBpZiAodHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3MpO1xuICAgICAgICAgIGFyZ3MucHVzaChidWlsZEdyb3VwcyhhcmdzLCBfdGhpcykpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1YnN0aXR1dGlvbi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gX3N1cGVyW1N5bWJvbC5yZXBsYWNlXS5jYWxsKHRoaXMsIHN0ciwgc3Vic3RpdHV0aW9uKTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gYnVpbGRHcm91cHMocmVzdWx0LCByZSkge1xuICAgIHZhciBnID0gX2dyb3Vwcy5nZXQocmUpO1xuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGcpLnJlZHVjZShmdW5jdGlvbiAoZ3JvdXBzLCBuYW1lKSB7XG4gICAgICBncm91cHNbbmFtZV0gPSByZXN1bHRbZ1tuYW1lXV07XG4gICAgICByZXR1cm4gZ3JvdXBzO1xuICAgIH0sIE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICB9XG5cbiAgcmV0dXJuIF93cmFwUmVnRXhwLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbi8qKlxuICogU3RhdGljIHV0aWxpdHkgZnVuY3Rpb25zIHVzZWQgdGhyb3VnaG91dCB0aGUgbGlicmFyeS5cbiAqL1xuXG52YXIgVXRpbHMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBVdGlscygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVXRpbHMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFV0aWxzLCBudWxsLCBbe1xuICAgIGtleTogXCJ2ZXJzaW9uXCIsXG4gICAgdmFsdWU6XG4gICAgLyoqXG4gICAgICogR2V0cyBNaWRpV3JpdGVySlMgdmVyc2lvbiBudW1iZXIuXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHZlcnNpb24oKSB7XG4gICAgICByZXR1cm4gQ29uc3RhbnRzLlZFUlNJT047XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnQgYSBzdHJpbmcgdG8gYW4gYXJyYXkgb2YgYnl0ZXNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gICAgICogQHJldHVybiB7YXJyYXl9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzdHJpbmdUb0J5dGVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0cmluZ1RvQnl0ZXMoc3RyaW5nKSB7XG4gICAgICByZXR1cm4gc3RyaW5nLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24gKF9jaGFyKSB7XG4gICAgICAgIHJldHVybiBfY2hhci5jaGFyQ29kZUF0KCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIGFyZ3VtZW50IGlzIGEgdmFsaWQgbnVtYmVyLlxuICAgICAqIEBwYXJhbSB7Kn0gbiAtIFZhbHVlIHRvIGNoZWNrXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImlzTnVtZXJpY1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc051bWVyaWMobikge1xuICAgICAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KG4pKSAmJiBpc0Zpbml0ZShuKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY29ycmVjdCBNSURJIG51bWJlciBmb3IgdGhlIHNwZWNpZmllZCBwaXRjaC5cbiAgICAgKiBVc2VzIFRvbmFsIE1pZGkgLSBodHRwczovL2dpdGh1Yi5jb20vZGFuaWdiL3RvbmFsL3RyZWUvbWFzdGVyL3BhY2thZ2VzL21pZGlcbiAgICAgKiBAcGFyYW0geyhzdHJpbmd8bnVtYmVyKX0gcGl0Y2ggLSAnQyM0JyBvciBtaWRpIG5vdGUgY29kZVxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFBpdGNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFBpdGNoKHBpdGNoKSB7XG4gICAgICByZXR1cm4gdG9uYWxNaWRpLnRvTWlkaShwaXRjaCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRyYW5zbGF0ZXMgbnVtYmVyIG9mIHRpY2tzIHRvIE1JREkgdGltZXN0YW1wIGZvcm1hdCwgcmV0dXJuaW5nIGFuIGFycmF5IG9mXG4gICAgICogaGV4IHN0cmluZ3Mgd2l0aCB0aGUgdGltZSB2YWx1ZXMuIE1pZGkgaGFzIGEgdmVyeSBwYXJ0aWN1bGFyIHRpbWUgdG8gZXhwcmVzcyB0aW1lLFxuICAgICAqIHRha2UgYSBnb29kIGxvb2sgYXQgdGhlIHNwZWMgYmVmb3JlIGV2ZXIgdG91Y2hpbmcgdGhpcyBmdW5jdGlvbi5cbiAgICAgKiBUaGFua3MgdG8gaHR0cHM6Ly9naXRodWIuY29tL3NlcmdpL2pzbWlkaVxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpY2tzIC0gTnVtYmVyIG9mIHRpY2tzIHRvIGJlIHRyYW5zbGF0ZWRcbiAgICAgKiBAcmV0dXJuIHthcnJheX0gLSBCeXRlcyB0aGF0IGZvcm0gdGhlIE1JREkgdGltZSB2YWx1ZVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibnVtYmVyVG9WYXJpYWJsZUxlbmd0aFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBudW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRpY2tzKSB7XG4gICAgICB0aWNrcyA9IE1hdGgucm91bmQodGlja3MpO1xuICAgICAgdmFyIGJ1ZmZlciA9IHRpY2tzICYgMHg3RjtcblxuICAgICAgd2hpbGUgKHRpY2tzID0gdGlja3MgPj4gNykge1xuICAgICAgICBidWZmZXIgPDw9IDg7XG4gICAgICAgIGJ1ZmZlciB8PSB0aWNrcyAmIDB4N0YgfCAweDgwO1xuICAgICAgfVxuXG4gICAgICB2YXIgYkxpc3QgPSBbXTtcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgYkxpc3QucHVzaChidWZmZXIgJiAweGZmKTtcbiAgICAgICAgaWYgKGJ1ZmZlciAmIDB4ODApIGJ1ZmZlciA+Pj0gODtlbHNlIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYkxpc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvdW50cyBudW1iZXIgb2YgYnl0ZXMgaW4gc3RyaW5nXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNcbiAgICAgKiBAcmV0dXJuIHthcnJheX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInN0cmluZ0J5dGVDb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdHJpbmdCeXRlQ291bnQocykge1xuICAgICAgcmV0dXJuIGVuY29kZVVSSShzKS5zcGxpdCgvJS4ufC4vKS5sZW5ndGggLSAxO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgYW4gaW50IGZyb20gYW4gYXJyYXkgb2YgYnl0ZXMuXG4gICAgICogQHBhcmFtIHthcnJheX0gYnl0ZXNcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJudW1iZXJGcm9tQnl0ZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbnVtYmVyRnJvbUJ5dGVzKGJ5dGVzKSB7XG4gICAgICB2YXIgaGV4ID0gJyc7XG4gICAgICB2YXIgc3RyaW5nUmVzdWx0O1xuICAgICAgYnl0ZXMuZm9yRWFjaChmdW5jdGlvbiAoX2J5dGUpIHtcbiAgICAgICAgc3RyaW5nUmVzdWx0ID0gX2J5dGUudG9TdHJpbmcoMTYpOyAvLyBlbnN1cmUgc3RyaW5nIGlzIDIgY2hhcnNcblxuICAgICAgICBpZiAoc3RyaW5nUmVzdWx0Lmxlbmd0aCA9PSAxKSBzdHJpbmdSZXN1bHQgPSBcIjBcIiArIHN0cmluZ1Jlc3VsdDtcbiAgICAgICAgaGV4ICs9IHN0cmluZ1Jlc3VsdDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHBhcnNlSW50KGhleCwgMTYpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUYWtlcyBhIG51bWJlciBhbmQgc3BsaXRzIGl0IHVwIGludG8gYW4gYXJyYXkgb2YgYnl0ZXMuICBDYW4gYmUgcGFkZGVkIGJ5IHBhc3NpbmcgYSBudW1iZXIgdG8gYnl0ZXNOZWVkZWRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGJ5dGVzTmVlZGVkXG4gICAgICogQHJldHVybiB7YXJyYXl9IC0gQXJyYXkgb2YgYnl0ZXNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm51bWJlclRvQnl0ZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbnVtYmVyVG9CeXRlcyhudW1iZXIsIGJ5dGVzTmVlZGVkKSB7XG4gICAgICBieXRlc05lZWRlZCA9IGJ5dGVzTmVlZGVkIHx8IDE7XG4gICAgICB2YXIgaGV4U3RyaW5nID0gbnVtYmVyLnRvU3RyaW5nKDE2KTtcblxuICAgICAgaWYgKGhleFN0cmluZy5sZW5ndGggJiAxKSB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSBoZXggc3RyaW5nIGlzIGV2ZW4gbnVtYmVyIG9mIGNoYXJzXG4gICAgICAgIGhleFN0cmluZyA9ICcwJyArIGhleFN0cmluZztcbiAgICAgIH0gLy8gU3BsaXQgaGV4IHN0cmluZyBpbnRvIGFuIGFycmF5IG9mIHR3byBjaGFyIGVsZW1lbnRzXG5cblxuICAgICAgdmFyIGhleEFycmF5ID0gaGV4U3RyaW5nLm1hdGNoKC8uezJ9L2cpOyAvLyBOb3cgcGFyc2UgdGhlbSBvdXQgYXMgaW50ZWdlcnNcblxuICAgICAgaGV4QXJyYXkgPSBoZXhBcnJheS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGl0ZW0sIDE2KTtcbiAgICAgIH0pOyAvLyBQcmVwZW5kIGVtcHR5IGJ5dGVzIGlmIHdlIGRvbid0IGhhdmUgZW5vdWdoXG5cbiAgICAgIGlmIChoZXhBcnJheS5sZW5ndGggPCBieXRlc05lZWRlZCkge1xuICAgICAgICB3aGlsZSAoYnl0ZXNOZWVkZWQgLSBoZXhBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaGV4QXJyYXkudW5zaGlmdCgwKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaGV4QXJyYXk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIHZhbHVlIHRvIGFycmF5IGlmIG5lZWRlZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHthcnJheX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInRvQXJyYXlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9BcnJheSh2YWx1ZSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgICByZXR1cm4gW3ZhbHVlXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgdmVsb2NpdHkgdG8gdmFsdWUgMC0xMjdcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmVsb2NpdHkgLSBWZWxvY2l0eSB2YWx1ZSAxLTEwMFxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNvbnZlcnRWZWxvY2l0eVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb252ZXJ0VmVsb2NpdHkodmVsb2NpdHkpIHtcbiAgICAgIC8vIE1heCBwYXNzZWQgdmFsdWUgbGltaXRlZCB0byAxMDBcbiAgICAgIHZlbG9jaXR5ID0gdmVsb2NpdHkgPiAxMDAgPyAxMDAgOiB2ZWxvY2l0eTtcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKHZlbG9jaXR5IC8gMTAwICogMTI3KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgdG90YWwgbnVtYmVyIG9mIHRpY2tzIG9mIGEgc3BlY2lmaWVkIGR1cmF0aW9uLlxuICAgICAqIE5vdGU6IHR5cGU9PSdub3RlJyBkZWZhdWx0cyB0byBxdWFydGVyIG5vdGUsIHR5cGU9PT0ncmVzdCcgZGVmYXVsdHMgdG8gMFxuICAgICAqIEBwYXJhbSB7KHN0cmluZ3xhcnJheSl9IGR1cmF0aW9uXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0VGlja0R1cmF0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRpY2tEdXJhdGlvbihkdXJhdGlvbikge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZHVyYXRpb24pKSB7XG4gICAgICAgIC8vIFJlY3Vyc2l2ZWx5IGV4ZWN1dGUgdGhpcyBtZXRob2QgZm9yIGVhY2ggaXRlbSBpbiB0aGUgYXJyYXkgYW5kIHJldHVybiB0aGUgc3VtIG9mIHRpY2sgZHVyYXRpb25zLlxuICAgICAgICByZXR1cm4gZHVyYXRpb24ubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBVdGlscy5nZXRUaWNrRHVyYXRpb24odmFsdWUpO1xuICAgICAgICB9KS5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICByZXR1cm4gYSArIGI7XG4gICAgICAgIH0sIDApO1xuICAgICAgfVxuXG4gICAgICBkdXJhdGlvbiA9IGR1cmF0aW9uLnRvU3RyaW5nKCk7XG5cbiAgICAgIGlmIChkdXJhdGlvbi50b0xvd2VyQ2FzZSgpLmNoYXJBdCgwKSA9PT0gJ3QnKSB7XG4gICAgICAgIC8vIElmIGR1cmF0aW9uIHN0YXJ0cyB3aXRoICd0JyB0aGVuIHRoZSBudW1iZXIgdGhhdCBmb2xsb3dzIGlzIGFuIGV4cGxpY2l0IHRpY2sgY291bnRcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGR1cmF0aW9uLnN1YnN0cmluZygxKSk7XG4gICAgICB9IC8vIE5lZWQgdG8gYXBwbHkgZHVyYXRpb24gaGVyZS4gIFF1YXJ0ZXIgbm90ZSA9PSBDb25zdGFudHMuSEVBREVSX0NIVU5LX0RJVklTSU9OXG5cblxuICAgICAgdmFyIHF1YXJ0ZXJUaWNrcyA9IFV0aWxzLm51bWJlckZyb21CeXRlcyhDb25zdGFudHMuSEVBREVSX0NIVU5LX0RJVklTSU9OKTtcbiAgICAgIHZhciB0aWNrRHVyYXRpb24gPSBxdWFydGVyVGlja3MgKiBVdGlscy5nZXREdXJhdGlvbk11bHRpcGxpZXIoZHVyYXRpb24pO1xuICAgICAgcmV0dXJuIFV0aWxzLmdldFJvdW5kZWRJZkNsb3NlKHRpY2tEdXJhdGlvbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIER1ZSB0byByb3VuZGluZyBlcnJvcnMgaW4gSmF2YVNjcmlwdCBlbmdpbmVzLFxuICAgICAqIGl0J3Mgc2FmZSB0byByb3VuZCB3aGVuIHdlJ3JlIHZlcnkgY2xvc2UgdG8gdGhlIGFjdHVhbCB0aWNrIG51bWJlclxuICAgICAqXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aWNrXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Um91bmRlZElmQ2xvc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Um91bmRlZElmQ2xvc2UodGljaykge1xuICAgICAgdmFyIHJvdW5kZWRUaWNrID0gTWF0aC5yb3VuZCh0aWNrKTtcbiAgICAgIHJldHVybiBNYXRoLmFicyhyb3VuZGVkVGljayAtIHRpY2spIDwgMC4wMDAwMDEgPyByb3VuZGVkVGljayA6IHRpY2s7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIER1ZSB0byBsb3cgcHJlY2lzaW9uIG9mIE1JREksXG4gICAgICogd2UgbmVlZCB0byBrZWVwIHRyYWNrIG9mIHJvdW5kaW5nIGVycm9ycyBpbiBkZWx0YXMuXG4gICAgICogVGhpcyBmdW5jdGlvbiB3aWxsIGNhbGN1bGF0ZSB0aGUgcm91bmRpbmcgZXJyb3IgZm9yIGEgZ2l2ZW4gZHVyYXRpb24uXG4gICAgICpcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpY2tcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRQcmVjaXNpb25Mb3NzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFByZWNpc2lvbkxvc3ModGljaykge1xuICAgICAgdmFyIHJvdW5kZWRUaWNrID0gTWF0aC5yb3VuZCh0aWNrKTtcbiAgICAgIHJldHVybiByb3VuZGVkVGljayAtIHRpY2s7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgd2hhdCB0byBtdWx0aXBsZSB0aWNrcy9xdWFydGVyIG5vdGUgYnkgdG8gZ2V0IHRoZSBzcGVjaWZpZWQgZHVyYXRpb24uXG4gICAgICogTm90ZTogdHlwZT09J25vdGUnIGRlZmF1bHRzIHRvIHF1YXJ0ZXIgbm90ZSwgdHlwZT09PSdyZXN0JyBkZWZhdWx0cyB0byAwXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGR1cmF0aW9uXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0RHVyYXRpb25NdWx0aXBsaWVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldER1cmF0aW9uTXVsdGlwbGllcihkdXJhdGlvbikge1xuICAgICAgLy8gTmVlZCB0byBhcHBseSBkdXJhdGlvbiBoZXJlLlxuICAgICAgLy8gUXVhcnRlciBub3RlID09IENvbnN0YW50cy5IRUFERVJfQ0hVTktfRElWSVNJT04gdGlja3MuXG4gICAgICBpZiAoZHVyYXRpb24gPT09ICcwJykgcmV0dXJuIDA7XG4gICAgICB2YXIgbWF0Y2ggPSBkdXJhdGlvbi5tYXRjaCggLyojX19QVVJFX18qL193cmFwUmVnRXhwKC9eKGQrKT8oWzAtOV0rKSg/OnQoWzAtOV0qKSk/Lywge1xuICAgICAgICBkb3R0ZWQ6IDEsXG4gICAgICAgIGJhc2U6IDIsXG4gICAgICAgIHR1cGxldDogM1xuICAgICAgfSkpO1xuXG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgdmFyIGJhc2UgPSBOdW1iZXIobWF0Y2guZ3JvdXBzLmJhc2UpOyAvLyAxIG9yIGFueSBwb3dlciBvZiB0d286XG5cbiAgICAgICAgdmFyIGlzVmFsaWRCYXNlID0gYmFzZSA9PT0gMSB8fCAoYmFzZSAmIGJhc2UgLSAxKSA9PT0gMDtcblxuICAgICAgICBpZiAoaXNWYWxpZEJhc2UpIHtcbiAgICAgICAgICAvLyBob3cgbXVjaCBmYXN0ZXIgb3Igc2xvd2VyIGlzIHRoaXMgbm90ZSBjb21wYXJlZCB0byBhIHF1YXJ0ZXI/XG4gICAgICAgICAgdmFyIHJhdGlvID0gYmFzZSAvIDQ7XG4gICAgICAgICAgdmFyIGR1cmF0aW9uSW5RdWFydGVycyA9IDEgLyByYXRpbztcbiAgICAgICAgICB2YXIgX21hdGNoJGdyb3VwcyA9IG1hdGNoLmdyb3VwcyxcbiAgICAgICAgICAgICAgZG90dGVkID0gX21hdGNoJGdyb3Vwcy5kb3R0ZWQsXG4gICAgICAgICAgICAgIHR1cGxldCA9IF9tYXRjaCRncm91cHMudHVwbGV0O1xuXG4gICAgICAgICAgaWYgKGRvdHRlZCkge1xuICAgICAgICAgICAgdmFyIHRoaXNNYW55RG90cyA9IGRvdHRlZC5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgZGl2aXNvciA9IE1hdGgucG93KDIsIHRoaXNNYW55RG90cyk7XG4gICAgICAgICAgICBkdXJhdGlvbkluUXVhcnRlcnMgPSBkdXJhdGlvbkluUXVhcnRlcnMgKyBkdXJhdGlvbkluUXVhcnRlcnMgKiAoKGRpdmlzb3IgLSAxKSAvIGRpdmlzb3IpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2YgdHVwbGV0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFyIGZpdEludG8gPSBkdXJhdGlvbkluUXVhcnRlcnMgKiAyOyAvLyBkZWZhdWx0IHRvIHRyaXBsZXQ6XG5cbiAgICAgICAgICAgIHZhciB0aGlzTWFueU5vdGVzID0gTnVtYmVyKHR1cGxldCB8fCAnMycpO1xuICAgICAgICAgICAgZHVyYXRpb25JblF1YXJ0ZXJzID0gZml0SW50byAvIHRoaXNNYW55Tm90ZXM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGR1cmF0aW9uSW5RdWFydGVycztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZHVyYXRpb24gKyAnIGlzIG5vdCBhIHZhbGlkIGR1cmF0aW9uLicpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBVdGlscztcbn0oKTtcblxuLyoqXG4gKiBIb2xkcyBhbGwgZGF0YSBmb3IgYSBcIm5vdGUgb25cIiBNSURJIGV2ZW50XG4gKiBAcGFyYW0ge29iamVjdH0gZmllbGRzIHtkYXRhOiBbXX1cbiAqIEByZXR1cm4ge05vdGVPbkV2ZW50fVxuICovXG5cbnZhciBOb3RlT25FdmVudCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE5vdGVPbkV2ZW50KGZpZWxkcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb3RlT25FdmVudCk7XG5cbiAgICAvLyBTZXQgZGVmYXVsdCBmaWVsZHNcbiAgICBmaWVsZHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNoYW5uZWw6IDEsXG4gICAgICBzdGFydFRpY2s6IG51bGwsXG4gICAgICB2ZWxvY2l0eTogNTAsXG4gICAgICB3YWl0OiAwXG4gICAgfSwgZmllbGRzKTtcbiAgICB0aGlzLnR5cGUgPSAnbm90ZS1vbic7XG4gICAgdGhpcy5jaGFubmVsID0gZmllbGRzLmNoYW5uZWw7XG4gICAgdGhpcy5waXRjaCA9IGZpZWxkcy5waXRjaDtcbiAgICB0aGlzLndhaXQgPSBmaWVsZHMud2FpdDtcbiAgICB0aGlzLnZlbG9jaXR5ID0gZmllbGRzLnZlbG9jaXR5O1xuICAgIHRoaXMuc3RhcnRUaWNrID0gZmllbGRzLnN0YXJ0VGljaztcbiAgICB0aGlzLm1pZGlOdW1iZXIgPSBVdGlscy5nZXRQaXRjaCh0aGlzLnBpdGNoKTtcbiAgICB0aGlzLnRpY2sgPSBudWxsO1xuICAgIHRoaXMuZGVsdGEgPSBudWxsO1xuICAgIHRoaXMuZGF0YSA9IGZpZWxkcy5kYXRhO1xuICB9XG4gIC8qKlxuICAgKiBCdWlsZHMgaW50IGFycmF5IGZvciB0aGlzIGV2ZW50LlxuICAgKiBAcGFyYW0ge1RyYWNrfSB0cmFjayAtIHBhcmVudCB0cmFja1xuICAgKiBAcmV0dXJuIHtOb3RlT25FdmVudH1cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoTm90ZU9uRXZlbnQsIFt7XG4gICAga2V5OiBcImJ1aWxkRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBidWlsZERhdGEodHJhY2ssIHByZWNpc2lvbkRlbHRhKSB7XG4gICAgICB0aGlzLmRhdGEgPSBbXTsgLy8gRXhwbGljaXRseSBkZWZpbmVkIHN0YXJ0VGljayBldmVudFxuXG4gICAgICBpZiAodGhpcy5zdGFydFRpY2spIHtcbiAgICAgICAgdGhpcy50aWNrID0gVXRpbHMuZ2V0Um91bmRlZElmQ2xvc2UodGhpcy5zdGFydFRpY2spOyAvLyBJZiB0aGlzIGlzIHRoZSBmaXJzdCBldmVudCBpbiB0aGUgdHJhY2sgdGhlbiB1c2UgZXZlbnQncyBzdGFydGluZyB0aWNrIGFzIGRlbHRhLlxuXG4gICAgICAgIGlmICh0cmFjay50aWNrUG9pbnRlciA9PSAwKSB7XG4gICAgICAgICAgdGhpcy5kZWx0YSA9IHRoaXMudGljaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kZWx0YSA9IFV0aWxzLmdldFRpY2tEdXJhdGlvbih0aGlzLndhaXQpO1xuICAgICAgICB0aGlzLnRpY2sgPSBVdGlscy5nZXRSb3VuZGVkSWZDbG9zZSh0cmFjay50aWNrUG9pbnRlciArIHRoaXMuZGVsdGEpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRlbHRhV2l0aFByZWNpc2lvbkNvcnJlY3Rpb24gPSBVdGlscy5nZXRSb3VuZGVkSWZDbG9zZSh0aGlzLmRlbHRhIC0gcHJlY2lzaW9uRGVsdGEpO1xuICAgICAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0aGlzLmRlbHRhV2l0aFByZWNpc2lvbkNvcnJlY3Rpb24pLmNvbmNhdCh0aGlzLmdldFN0YXR1c0J5dGUoKSwgdGhpcy5taWRpTnVtYmVyLCBVdGlscy5jb252ZXJ0VmVsb2NpdHkodGhpcy52ZWxvY2l0eSkpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIG5vdGUgb24gc3RhdHVzIGNvZGUgYmFzZWQgb24gdGhlIHNlbGVjdGVkIGNoYW5uZWwuIDB4OXswLUZ9XG4gICAgICogTm90ZSBvbiBhdCBjaGFubmVsIDAgaXMgMHg5MCAoMTQ0KVxuICAgICAqIDAgPSBDaCAxXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U3RhdHVzQnl0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTdGF0dXNCeXRlKCkge1xuICAgICAgcmV0dXJuIDE0NCArIHRoaXMuY2hhbm5lbCAtIDE7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE5vdGVPbkV2ZW50O1xufSgpO1xuXG4vKipcbiAqIEhvbGRzIGFsbCBkYXRhIGZvciBhIFwibm90ZSBvZmZcIiBNSURJIGV2ZW50XG4gKiBAcGFyYW0ge29iamVjdH0gZmllbGRzIHtkYXRhOiBbXX1cbiAqIEByZXR1cm4ge05vdGVPZmZFdmVudH1cbiAqL1xuXG52YXIgTm90ZU9mZkV2ZW50ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTm90ZU9mZkV2ZW50KGZpZWxkcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb3RlT2ZmRXZlbnQpO1xuXG4gICAgLy8gU2V0IGRlZmF1bHQgZmllbGRzXG4gICAgZmllbGRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjaGFubmVsOiAxLFxuICAgICAgdmVsb2NpdHk6IDUwLFxuICAgICAgdGljazogbnVsbFxuICAgIH0sIGZpZWxkcyk7XG4gICAgdGhpcy50eXBlID0gJ25vdGUtb2ZmJztcbiAgICB0aGlzLmNoYW5uZWwgPSBmaWVsZHMuY2hhbm5lbDtcbiAgICB0aGlzLnBpdGNoID0gZmllbGRzLnBpdGNoO1xuICAgIHRoaXMuZHVyYXRpb24gPSBmaWVsZHMuZHVyYXRpb247XG4gICAgdGhpcy52ZWxvY2l0eSA9IGZpZWxkcy52ZWxvY2l0eTtcbiAgICB0aGlzLm1pZGlOdW1iZXIgPSBVdGlscy5nZXRQaXRjaCh0aGlzLnBpdGNoKTtcbiAgICB0aGlzLnRpY2sgPSBmaWVsZHMudGljaztcbiAgICB0aGlzLmRlbHRhID0gVXRpbHMuZ2V0VGlja0R1cmF0aW9uKHRoaXMuZHVyYXRpb24pO1xuICAgIHRoaXMuZGF0YSA9IGZpZWxkcy5kYXRhO1xuICB9XG4gIC8qKlxuICAgKiBCdWlsZHMgaW50IGFycmF5IGZvciB0aGlzIGV2ZW50LlxuICAgKiBAcGFyYW0ge1RyYWNrfSB0cmFjayAtIHBhcmVudCB0cmFja1xuICAgKiBAcmV0dXJuIHtOb3RlT2ZmRXZlbnR9XG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKE5vdGVPZmZFdmVudCwgW3tcbiAgICBrZXk6IFwiYnVpbGREYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJ1aWxkRGF0YSh0cmFjaywgcHJlY2lzaW9uRGVsdGEpIHtcbiAgICAgIGlmICh0aGlzLnRpY2sgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy50aWNrID0gVXRpbHMuZ2V0Um91bmRlZElmQ2xvc2UodGhpcy5kZWx0YSArIHRyYWNrLnRpY2tQb2ludGVyKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kZWx0YVdpdGhQcmVjaXNpb25Db3JyZWN0aW9uID0gVXRpbHMuZ2V0Um91bmRlZElmQ2xvc2UodGhpcy5kZWx0YSAtIHByZWNpc2lvbkRlbHRhKTtcbiAgICAgIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgodGhpcy5kZWx0YVdpdGhQcmVjaXNpb25Db3JyZWN0aW9uKS5jb25jYXQodGhpcy5nZXRTdGF0dXNCeXRlKCksIHRoaXMubWlkaU51bWJlciwgVXRpbHMuY29udmVydFZlbG9jaXR5KHRoaXMudmVsb2NpdHkpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBub3RlIG9mZiBzdGF0dXMgY29kZSBiYXNlZCBvbiB0aGUgc2VsZWN0ZWQgY2hhbm5lbC4gMHg4ezAtRn1cbiAgICAgKiBOb3RlIG9mZiBhdCBjaGFubmVsIDAgaXMgMHg4MCAoMTI4KVxuICAgICAqIDAgPSBDaCAxXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U3RhdHVzQnl0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTdGF0dXNCeXRlKCkge1xuICAgICAgcmV0dXJuIDEyOCArIHRoaXMuY2hhbm5lbCAtIDE7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE5vdGVPZmZFdmVudDtcbn0oKTtcblxuLyoqXG4gKiBXcmFwcGVyIGZvciBub3RlT25FdmVudC9ub3RlT2ZmRXZlbnQgb2JqZWN0cyB0aGF0IGJ1aWxkcyBib3RoIGV2ZW50cy5cbiAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZHMgLSB7cGl0Y2g6ICdbQzRdJywgZHVyYXRpb246ICc0Jywgd2FpdDogJzQnLCB2ZWxvY2l0eTogMS0xMDB9XG4gKiBAcmV0dXJuIHtOb3RlRXZlbnR9XG4gKi9cblxudmFyIE5vdGVFdmVudCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE5vdGVFdmVudChmaWVsZHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTm90ZUV2ZW50KTtcblxuICAgIC8vIFNldCBkZWZhdWx0IGZpZWxkc1xuICAgIGZpZWxkcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2hhbm5lbDogMSxcbiAgICAgIHJlcGVhdDogMSxcbiAgICAgIHNlcXVlbnRpYWw6IGZhbHNlLFxuICAgICAgc3RhcnRUaWNrOiBudWxsLFxuICAgICAgdmVsb2NpdHk6IDUwLFxuICAgICAgd2FpdDogMFxuICAgIH0sIGZpZWxkcyk7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgdGhpcy50eXBlID0gJ25vdGUnO1xuICAgIHRoaXMucGl0Y2ggPSBVdGlscy50b0FycmF5KGZpZWxkcy5waXRjaCk7XG4gICAgdGhpcy5jaGFubmVsID0gZmllbGRzLmNoYW5uZWw7XG4gICAgdGhpcy5kdXJhdGlvbiA9IGZpZWxkcy5kdXJhdGlvbjtcbiAgICB0aGlzLmdyYWNlID0gZmllbGRzLmdyYWNlO1xuICAgIHRoaXMucmVwZWF0ID0gZmllbGRzLnJlcGVhdDtcbiAgICB0aGlzLnNlcXVlbnRpYWwgPSBmaWVsZHMuc2VxdWVudGlhbDtcbiAgICB0aGlzLnN0YXJ0VGljayA9IGZpZWxkcy5zdGFydFRpY2s7XG4gICAgdGhpcy52ZWxvY2l0eSA9IGZpZWxkcy52ZWxvY2l0eTtcbiAgICB0aGlzLndhaXQgPSBmaWVsZHMud2FpdDtcbiAgICB0aGlzLnRpY2tEdXJhdGlvbiA9IFV0aWxzLmdldFRpY2tEdXJhdGlvbih0aGlzLmR1cmF0aW9uKTtcbiAgICB0aGlzLnJlc3REdXJhdGlvbiA9IFV0aWxzLmdldFRpY2tEdXJhdGlvbih0aGlzLndhaXQpO1xuICAgIHRoaXMuZXZlbnRzID0gW107IC8vIEhvbGQgYWN0dWFsIE5vdGVPbi9Ob3RlT2ZmIGV2ZW50c1xuICB9XG4gIC8qKlxuICAgKiBCdWlsZHMgaW50IGFycmF5IGZvciB0aGlzIGV2ZW50LlxuICAgKiBAcmV0dXJuIHtOb3RlRXZlbnR9XG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKE5vdGVFdmVudCwgW3tcbiAgICBrZXk6IFwiYnVpbGREYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJ1aWxkRGF0YSgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIC8vIFJlc2V0IGRhdGEgYXJyYXlcbiAgICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICAgdGhpcy50aWNrRHVyYXRpb247XG4gICAgICB0aGlzLnJlc3REdXJhdGlvbjsgLy8gQXBwbHkgZ3JhY2Ugbm90ZShzKSBhbmQgc3VidHJhY3QgdGlja3MgKGN1cnJlbnRseSAxIHRpY2sgcGVyIGdyYWNlIG5vdGUpIGZyb20gdGlja0R1cmF0aW9uIHNvIG5ldCB2YWx1ZSBpcyB0aGUgc2FtZVxuXG4gICAgICBpZiAodGhpcy5ncmFjZSkge1xuICAgICAgICB2YXIgZ3JhY2VEdXJhdGlvbiA9IDE7XG4gICAgICAgIHRoaXMuZ3JhY2UgPSBVdGlscy50b0FycmF5KHRoaXMuZ3JhY2UpO1xuICAgICAgICB0aGlzLmdyYWNlLmZvckVhY2goZnVuY3Rpb24gKHBpdGNoKSB7XG4gICAgICAgICAgdmFyIG5vdGVFdmVudCA9IG5ldyBOb3RlRXZlbnQoe1xuICAgICAgICAgICAgcGl0Y2g6IF90aGlzLmdyYWNlLFxuICAgICAgICAgICAgZHVyYXRpb246ICdUJyArIGdyYWNlRHVyYXRpb25cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBfdGhpcy5kYXRhID0gX3RoaXMuZGF0YS5jb25jYXQobm90ZUV2ZW50LmRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgIH0gLy8gZmllbGRzLnBpdGNoIGNvdWxkIGJlIGFuIGFycmF5IG9mIHBpdGNoZXMuXG4gICAgICAvLyBJZiB0aGlzLnNlcXVlbnRpYWwgPT09IHRydWUgdGhlbiBpdCdzIGEgc2VxdWVudGlhbCBzdHJpbmcgb2Ygbm90ZXMgdGhhdCByZXF1aXJlcyBzZXBhcmF0ZSBOb3RlT25FdmVudHMuXG5cbiAgICAgIGlmICghdGhpcy5zZXF1ZW50aWFsKSB7XG4gICAgICAgIC8vIEhhbmRsZSByZXBlYXRcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLnJlcGVhdDsgaisrKSB7XG4gICAgICAgICAgLy8gTm90ZSBvblxuICAgICAgICAgIHRoaXMucGl0Y2guZm9yRWFjaChmdW5jdGlvbiAocCwgaSkge1xuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICB2YXIgbm90ZU9uTmV3ID0gbmV3IE5vdGVPbkV2ZW50KHtcbiAgICAgICAgICAgICAgICBjaGFubmVsOiBfdGhpcy5jaGFubmVsLFxuICAgICAgICAgICAgICAgIHdhaXQ6IF90aGlzLndhaXQsXG4gICAgICAgICAgICAgICAgdmVsb2NpdHk6IF90aGlzLnZlbG9jaXR5LFxuICAgICAgICAgICAgICAgIHBpdGNoOiBwLFxuICAgICAgICAgICAgICAgIHN0YXJ0VGljazogX3RoaXMuc3RhcnRUaWNrXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gUnVubmluZyBzdGF0dXMgKGNhbiBvbW1pdCB0aGUgbm90ZSBvbiBzdGF0dXMpXG4gICAgICAgICAgICAgIC8vbm90ZU9uID0gbmV3IE5vdGVPbkV2ZW50KHtkYXRhOiBbMCwgVXRpbHMuZ2V0UGl0Y2gocCksIFV0aWxzLmNvbnZlcnRWZWxvY2l0eSh0aGlzLnZlbG9jaXR5KV19KTtcbiAgICAgICAgICAgICAgdmFyIG5vdGVPbk5ldyA9IG5ldyBOb3RlT25FdmVudCh7XG4gICAgICAgICAgICAgICAgY2hhbm5lbDogX3RoaXMuY2hhbm5lbCxcbiAgICAgICAgICAgICAgICB3YWl0OiAwLFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5OiBfdGhpcy52ZWxvY2l0eSxcbiAgICAgICAgICAgICAgICBwaXRjaDogcCxcbiAgICAgICAgICAgICAgICBzdGFydFRpY2s6IF90aGlzLnN0YXJ0VGlja1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX3RoaXMuZXZlbnRzLnB1c2gobm90ZU9uTmV3KTtcbiAgICAgICAgICB9KTsgLy8gTm90ZSBvZmZcblxuICAgICAgICAgIHRoaXMucGl0Y2guZm9yRWFjaChmdW5jdGlvbiAocCwgaSkge1xuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAvL25vdGVPZmYgPSBuZXcgTm90ZU9mZkV2ZW50KHtkYXRhOiBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRpY2tEdXJhdGlvbikuY29uY2F0KHRoaXMuZ2V0Tm90ZU9mZlN0YXR1cygpLCBVdGlscy5nZXRQaXRjaChwKSwgVXRpbHMuY29udmVydFZlbG9jaXR5KHRoaXMudmVsb2NpdHkpKX0pO1xuICAgICAgICAgICAgICB2YXIgbm90ZU9mZk5ldyA9IG5ldyBOb3RlT2ZmRXZlbnQoe1xuICAgICAgICAgICAgICAgIGNoYW5uZWw6IF90aGlzLmNoYW5uZWwsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IF90aGlzLmR1cmF0aW9uLFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5OiBfdGhpcy52ZWxvY2l0eSxcbiAgICAgICAgICAgICAgICBwaXRjaDogcCxcbiAgICAgICAgICAgICAgICB0aWNrOiBfdGhpcy5zdGFydFRpY2sgIT09IG51bGwgPyBVdGlscy5nZXRUaWNrRHVyYXRpb24oX3RoaXMuZHVyYXRpb24pICsgX3RoaXMuc3RhcnRUaWNrIDogbnVsbFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFJ1bm5pbmcgc3RhdHVzIChjYW4gb21taXQgdGhlIG5vdGUgb2ZmIHN0YXR1cylcbiAgICAgICAgICAgICAgLy9ub3RlT2ZmID0gbmV3IE5vdGVPZmZFdmVudCh7ZGF0YTogWzAsIFV0aWxzLmdldFBpdGNoKHApLCBVdGlscy5jb252ZXJ0VmVsb2NpdHkodGhpcy52ZWxvY2l0eSldfSk7XG4gICAgICAgICAgICAgIHZhciBub3RlT2ZmTmV3ID0gbmV3IE5vdGVPZmZFdmVudCh7XG4gICAgICAgICAgICAgICAgY2hhbm5lbDogX3RoaXMuY2hhbm5lbCxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eTogX3RoaXMudmVsb2NpdHksXG4gICAgICAgICAgICAgICAgcGl0Y2g6IHAsXG4gICAgICAgICAgICAgICAgdGljazogX3RoaXMuc3RhcnRUaWNrICE9PSBudWxsID8gVXRpbHMuZ2V0VGlja0R1cmF0aW9uKF90aGlzLmR1cmF0aW9uKSArIF90aGlzLnN0YXJ0VGljayA6IG51bGxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF90aGlzLmV2ZW50cy5wdXNoKG5vdGVPZmZOZXcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBIYW5kbGUgcmVwZWF0XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5yZXBlYXQ7IGorKykge1xuICAgICAgICAgIHRoaXMucGl0Y2guZm9yRWFjaChmdW5jdGlvbiAocCwgaSkge1xuXG4gICAgICAgICAgICB2YXIgbm90ZU9uTmV3ID0gbmV3IE5vdGVPbkV2ZW50KHtcbiAgICAgICAgICAgICAgY2hhbm5lbDogX3RoaXMuY2hhbm5lbCxcbiAgICAgICAgICAgICAgd2FpdDogaSA+IDAgPyAwIDogX3RoaXMud2FpdCxcbiAgICAgICAgICAgICAgLy8gd2FpdCBvbmx5IGFwcGxpZXMgdG8gZmlyc3Qgbm90ZSBpbiByZXBldGl0aW9uXG4gICAgICAgICAgICAgIHZlbG9jaXR5OiBfdGhpcy52ZWxvY2l0eSxcbiAgICAgICAgICAgICAgcGl0Y2g6IHAsXG4gICAgICAgICAgICAgIHN0YXJ0VGljazogX3RoaXMuc3RhcnRUaWNrXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBub3RlT2ZmTmV3ID0gbmV3IE5vdGVPZmZFdmVudCh7XG4gICAgICAgICAgICAgIGNoYW5uZWw6IF90aGlzLmNoYW5uZWwsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiBfdGhpcy5kdXJhdGlvbixcbiAgICAgICAgICAgICAgdmVsb2NpdHk6IF90aGlzLnZlbG9jaXR5LFxuICAgICAgICAgICAgICBwaXRjaDogcFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIF90aGlzLmV2ZW50cy5wdXNoKG5vdGVPbk5ldywgbm90ZU9mZk5ldyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE5vdGVFdmVudDtcbn0oKTtcblxuLyoqXG4gKiBIb2xkcyBhbGwgZGF0YSBmb3IgYSBcIlBpdGNoIEJlbmRcIiBNSURJIGV2ZW50XG4gKiBbIC0xLjAsIDAsIDEuMCBdIC0+ICBbIDAsIDgxOTIsIDE2MzgzXVxuICogQHBhcmFtIHtvYmplY3R9IGZpZWxkcyB7IGJlbmQgOiBmbG9hdCwgY2hhbm5lbCA6IGludCB9XG4gKiBAcmV0dXJuIHtQaXRjaEJlbmRFdmVudH1cbiAqL1xuXG52YXIgc2NhbGUxNGJpdHMgPSBmdW5jdGlvbiBzY2FsZTE0Yml0cyh6ZXJvT25lKSB7XG4gIGlmICh6ZXJvT25lIDw9IDApIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcigxNjM4NCAqICh6ZXJvT25lICsgMSkgLyAyKTtcbiAgfVxuXG4gIHJldHVybiBNYXRoLmZsb29yKDE2MzgzICogKHplcm9PbmUgKyAxKSAvIDIpO1xufTtcblxudmFyIFBpdGNoQmVuZEV2ZW50ID0gZnVuY3Rpb24gUGl0Y2hCZW5kRXZlbnQoZmllbGRzKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQaXRjaEJlbmRFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ3BpdGNoLWJlbmQnO1xuICB2YXIgYmVuZDE0ID0gc2NhbGUxNGJpdHMoZmllbGRzLmJlbmQpO1xuICB2YXIgY2hhbm5lbCA9IGZpZWxkcy5jaGFubmVsIHx8IDA7XG4gIHZhciBsc2JWYWx1ZSA9IGJlbmQxNCAmIDB4N2Y7XG4gIHZhciBtc2JWYWx1ZSA9IGJlbmQxNCA+PiA3ICYgMHg3ZjtcbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLlBJVENIX0JFTkRfU1RBVFVTIHwgY2hhbm5lbCwgbHNiVmFsdWUsIG1zYlZhbHVlKTtcbn07XG5cbi8qKlxuICogSG9sZHMgYWxsIGRhdGEgZm9yIGEgXCJwcm9ncmFtIGNoYW5nZVwiIE1JREkgZXZlbnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZHMge2luc3RydW1lbnQ6IGludGVnZXJ9XG4gKiBAcmV0dXJuIHtQcm9ncmFtQ2hhbmdlRXZlbnR9XG4gKi9cblxudmFyIFByb2dyYW1DaGFuZ2VFdmVudCA9IGZ1bmN0aW9uIFByb2dyYW1DaGFuZ2VFdmVudChmaWVsZHMpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFByb2dyYW1DaGFuZ2VFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ3Byb2dyYW0nOyAvLyBkZWx0YSB0aW1lIGRlZmF1bHRzIHRvIDAuXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLlBST0dSQU1fQ0hBTkdFX1NUQVRVUywgZmllbGRzLmluc3RydW1lbnQpO1xufTtcblxuLyoqXG4gKiBIb2xkcyBhbGwgZGF0YSBmb3IgYSBcImNvbnRyb2xsZXIgY2hhbmdlXCIgTUlESSBldmVudFxuICogQHBhcmFtIHtvYmplY3R9IGZpZWxkcyB7Y29udHJvbGxlck51bWJlcjogaW50ZWdlciwgY29udHJvbGxlclZhbHVlOiBpbnRlZ2VyfVxuICogQHJldHVybiB7Q29udHJvbGxlckNoYW5nZUV2ZW50fVxuICovXG5cbnZhciBDb250cm9sbGVyQ2hhbmdlRXZlbnQgPSBmdW5jdGlvbiBDb250cm9sbGVyQ2hhbmdlRXZlbnQoZmllbGRzKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb250cm9sbGVyQ2hhbmdlRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdjb250cm9sbGVyJzsgLy8gZGVsdGEgdGltZSBkZWZhdWx0cyB0byAwLlxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5DT05UUk9MTEVSX0NIQU5HRV9TVEFUVVMsIGZpZWxkcy5jb250cm9sbGVyTnVtYmVyLCBmaWVsZHMuY29udHJvbGxlclZhbHVlKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgdGVtcG8gbWV0YSBldmVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gQ29weXJpZ2h0IHRleHRcbiAqIEByZXR1cm4ge0NvcHlyaWdodEV2ZW50fVxuICovXG5cbnZhciBDb3B5cmlnaHRFdmVudCA9IGZ1bmN0aW9uIENvcHlyaWdodEV2ZW50KHRleHQpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvcHlyaWdodEV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAnY29weXJpZ2h0JztcbiAgdmFyIHRleHRCeXRlcyA9IFV0aWxzLnN0cmluZ1RvQnl0ZXModGV4dCk7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX0NPUFlSSUdIVF9JRCwgVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0ZXh0Qnl0ZXMubGVuZ3RoKSwgLy8gU2l6ZVxuICB0ZXh0Qnl0ZXMgLy8gVGV4dFxuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSBjdWUgcG9pbnQgbWV0YSBldmVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gQ3VlIHBvaW50IHRleHRcbiAqIEByZXR1cm4ge0N1ZVBvaW50RXZlbnR9XG4gKi9cblxudmFyIEN1ZVBvaW50RXZlbnQgPSBmdW5jdGlvbiBDdWVQb2ludEV2ZW50KHRleHQpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEN1ZVBvaW50RXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdtYXJrZXInO1xuICB2YXIgdGV4dEJ5dGVzID0gVXRpbHMuc3RyaW5nVG9CeXRlcyh0ZXh0KTsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfQ1VFX1BPSU5ULCBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRleHRCeXRlcy5sZW5ndGgpLCAvLyBTaXplXG4gIHRleHRCeXRlcyAvLyBUZXh0XG4gICk7XG59O1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIGVuZCB0cmFjayBtZXRhIGV2ZW50LlxuICogQHJldHVybiB7RW5kVHJhY2tFdmVudH1cbiAqL1xuXG52YXIgRW5kVHJhY2tFdmVudCA9IGZ1bmN0aW9uIEVuZFRyYWNrRXZlbnQoKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFbmRUcmFja0V2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAnZW5kLXRyYWNrJzsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfRU5EX09GX1RSQUNLX0lEKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGFuIGluc3RydW1lbnQgbmFtZSBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IGJwbSAtIEJlYXRzIHBlciBtaW51dGVcbiAqIEByZXR1cm4ge0luc3RydW1lbnROYW1lRXZlbnR9XG4gKi9cblxudmFyIEluc3RydW1lbnROYW1lRXZlbnQgPSBmdW5jdGlvbiBJbnN0cnVtZW50TmFtZUV2ZW50KHRleHQpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluc3RydW1lbnROYW1lRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdpbnN0cnVtZW50LW5hbWUnO1xuICB2YXIgdGV4dEJ5dGVzID0gVXRpbHMuc3RyaW5nVG9CeXRlcyh0ZXh0KTsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfSU5TVFJVTUVOVF9OQU1FX0lELCBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRleHRCeXRlcy5sZW5ndGgpLCAvLyBTaXplXG4gIHRleHRCeXRlcyAvLyBJbnN0cnVtZW50IG5hbWVcbiAgKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEga2V5IHNpZ25hdHVyZSBtZXRhIGV2ZW50LlxuICogQHJldHVybiB7S2V5U2lnbmF0dXJlRXZlbnR9XG4gKi9cblxudmFyIEtleVNpZ25hdHVyZUV2ZW50ID0gZnVuY3Rpb24gS2V5U2lnbmF0dXJlRXZlbnQoc2YsIG1pKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBLZXlTaWduYXR1cmVFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ2tleS1zaWduYXR1cmUnO1xuICB2YXIgbW9kZSA9IG1pIHx8IDA7XG4gIHNmID0gc2YgfHwgMDsgLy9cdEZ1bmN0aW9uIGNhbGxlZCB3aXRoIHN0cmluZyBub3RhdGlvblxuXG4gIGlmICh0eXBlb2YgbWkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIGZpZnRocyA9IFtbJ0NiJywgJ0diJywgJ0RiJywgJ0FiJywgJ0ViJywgJ0JiJywgJ0YnLCAnQycsICdHJywgJ0QnLCAnQScsICdFJywgJ0InLCAnRiMnLCAnQyMnXSwgWydhYicsICdlYicsICdiYicsICdmJywgJ2MnLCAnZycsICdkJywgJ2EnLCAnZScsICdiJywgJ2YjJywgJ2MjJywgJ2cjJywgJ2QjJywgJ2EjJ11dO1xuICAgIHZhciBfc2ZsZW4gPSBzZi5sZW5ndGg7XG4gICAgdmFyIG5vdGUgPSBzZiB8fCAnQyc7XG4gICAgaWYgKHNmWzBdID09PSBzZlswXS50b0xvd2VyQ2FzZSgpKSBtb2RlID0gMTtcblxuICAgIGlmIChfc2ZsZW4gPiAxKSB7XG4gICAgICBzd2l0Y2ggKHNmLmNoYXJBdChfc2ZsZW4gLSAxKSkge1xuICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICBtb2RlID0gMTtcbiAgICAgICAgICBub3RlID0gc2YuY2hhckF0KDApLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgbm90ZSA9IG5vdGUuY29uY2F0KHNmLnN1YnN0cmluZygxLCBfc2ZsZW4gLSAxKSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgbW9kZSA9IDE7XG4gICAgICAgICAgbm90ZSA9IHNmLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIG5vdGUgPSBub3RlLmNvbmNhdChzZi5zdWJzdHJpbmcoMSwgX3NmbGVuIC0gMSkpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ00nOlxuICAgICAgICAgIG1vZGUgPSAwO1xuICAgICAgICAgIG5vdGUgPSBzZi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICBub3RlID0gbm90ZS5jb25jYXQoc2Yuc3Vic3RyaW5nKDEsIF9zZmxlbiAtIDEpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICBtb2RlID0gMDtcbiAgICAgICAgICBub3RlID0gc2YuY2hhckF0KDApLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgbm90ZSA9IG5vdGUuY29uY2F0KHNmLnN1YnN0cmluZygxLCBfc2ZsZW4gLSAxKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGZpZnRoaW5kZXggPSBmaWZ0aHNbbW9kZV0uaW5kZXhPZihub3RlKTtcbiAgICBzZiA9IGZpZnRoaW5kZXggPT09IC0xID8gMCA6IGZpZnRoaW5kZXggLSA3O1xuICB9IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfS0VZX1NJR05BVFVSRV9JRCwgWzB4MDJdLCAvLyBTaXplXG4gIFV0aWxzLm51bWJlclRvQnl0ZXMoc2YsIDEpLCAvLyBOdW1iZXIgb2Ygc2hhcnAgb3IgZmxhdHMgKCA8IDAgZmxhdDsgPiAwIHNoYXJwKVxuICBVdGlscy5udW1iZXJUb0J5dGVzKG1vZGUsIDEpIC8vIE1vZGU6IDAgbWFqb3IsIDEgbWlub3JcbiAgKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgbHlyaWMgbWV0YSBldmVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gTHlyaWMgdGV4dFxuICogQHJldHVybiB7THlyaWNFdmVudH1cbiAqL1xuXG52YXIgTHlyaWNFdmVudCA9IGZ1bmN0aW9uIEx5cmljRXZlbnQodGV4dCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTHlyaWNFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ21hcmtlcic7XG4gIHZhciB0ZXh0Qnl0ZXMgPSBVdGlscy5zdHJpbmdUb0J5dGVzKHRleHQpOyAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9MWVJJQ19JRCwgVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0ZXh0Qnl0ZXMubGVuZ3RoKSwgLy8gU2l6ZVxuICB0ZXh0Qnl0ZXMgLy8gVGV4dFxuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSBtYXJrZXIgbWV0YSBldmVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gTWFya2VyIHRleHRcbiAqIEByZXR1cm4ge01hcmtlckV2ZW50fVxuICovXG5cbnZhciBNYXJrZXJFdmVudCA9IGZ1bmN0aW9uIE1hcmtlckV2ZW50KHRleHQpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hcmtlckV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAnbWFya2VyJztcbiAgdmFyIHRleHRCeXRlcyA9IFV0aWxzLnN0cmluZ1RvQnl0ZXModGV4dCk7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX01BUktFUl9JRCwgVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0ZXh0Qnl0ZXMubGVuZ3RoKSwgLy8gU2l6ZVxuICB0ZXh0Qnl0ZXMgLy8gVGV4dFxuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSB0ZW1wbyBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IGJwbSAtIEJlYXRzIHBlciBtaW51dGVcbiAqIEByZXR1cm4ge1RlbXBvRXZlbnR9XG4gKi9cblxudmFyIFRlbXBvRXZlbnQgPSBmdW5jdGlvbiBUZW1wb0V2ZW50KGJwbSkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGVtcG9FdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ3RlbXBvJztcbiAgdmFyIHRlbXBvID0gTWF0aC5yb3VuZCg2MDAwMDAwMCAvIGJwbSk7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX1RFTVBPX0lELCBbMHgwM10sIC8vIFNpemVcbiAgVXRpbHMubnVtYmVyVG9CeXRlcyh0ZW1wbywgMykgLy8gVGVtcG8sIDMgYnl0ZXNcbiAgKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgdGVtcG8gbWV0YSBldmVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBicG0gLSBCZWF0cyBwZXIgbWludXRlXG4gKiBAcmV0dXJuIHtUZXh0RXZlbnR9XG4gKi9cblxudmFyIFRleHRFdmVudCA9IGZ1bmN0aW9uIFRleHRFdmVudCh0ZXh0KSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUZXh0RXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICd0ZXh0JztcbiAgdmFyIHRleHRCeXRlcyA9IFV0aWxzLnN0cmluZ1RvQnl0ZXModGV4dCk7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX1RFWFRfSUQsIFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgodGV4dEJ5dGVzLmxlbmd0aCksIC8vIFNpemVcbiAgdGV4dEJ5dGVzIC8vIFRleHRcbiAgKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgdGltZSBzaWduYXR1cmUgbWV0YSBldmVudC5cbiAqIEByZXR1cm4ge1RpbWVTaWduYXR1cmVFdmVudH1cbiAqL1xuXG52YXIgVGltZVNpZ25hdHVyZUV2ZW50ID0gZnVuY3Rpb24gVGltZVNpZ25hdHVyZUV2ZW50KG51bWVyYXRvciwgZGVub21pbmF0b3IsIG1pZGljbG9ja3NwZXJ0aWNrLCBub3Rlc3Blcm1pZGljbG9jaykge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGltZVNpZ25hdHVyZUV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAndGltZS1zaWduYXR1cmUnOyAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9USU1FX1NJR05BVFVSRV9JRCwgWzB4MDRdLCAvLyBTaXplXG4gIFV0aWxzLm51bWJlclRvQnl0ZXMobnVtZXJhdG9yLCAxKSwgLy8gTnVtZXJhdG9yLCAxIGJ5dGVzXG4gIFV0aWxzLm51bWJlclRvQnl0ZXMoTWF0aC5sb2cyKGRlbm9taW5hdG9yKSwgMSksIC8vIERlbm9taW5hdG9yIGlzIGV4cHJlc3NlZCBhcyBwb3cgb2YgMiwgMSBieXRlc1xuICBVdGlscy5udW1iZXJUb0J5dGVzKG1pZGljbG9ja3NwZXJ0aWNrIHx8IDI0LCAxKSwgLy8gTUlESSBDbG9ja3MgcGVyIHRpY2ssIDEgYnl0ZXNcbiAgVXRpbHMubnVtYmVyVG9CeXRlcyhub3Rlc3Blcm1pZGljbG9jayB8fCA4LCAxKSAvLyBOdW1iZXIgb2YgMS8zMiBub3RlcyBwZXIgTUlESSBjbG9ja3MsIDEgYnl0ZXNcbiAgKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgdGVtcG8gbWV0YSBldmVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBicG0gLSBCZWF0cyBwZXIgbWludXRlXG4gKiBAcmV0dXJuIHtUcmFja05hbWVFdmVudH1cbiAqL1xuXG52YXIgVHJhY2tOYW1lRXZlbnQgPSBmdW5jdGlvbiBUcmFja05hbWVFdmVudCh0ZXh0KSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmFja05hbWVFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ3RyYWNrLW5hbWUnO1xuICB2YXIgdGV4dEJ5dGVzID0gVXRpbHMuc3RyaW5nVG9CeXRlcyh0ZXh0KTsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfVFJBQ0tfTkFNRV9JRCwgVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0ZXh0Qnl0ZXMubGVuZ3RoKSwgLy8gU2l6ZVxuICB0ZXh0Qnl0ZXMgLy8gVGV4dFxuICApO1xufTtcblxuLyoqXG4gKiBIb2xkcyBhbGwgZGF0YSBmb3IgYSB0cmFjay5cbiAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZHMge3R5cGU6IG51bWJlciwgZGF0YTogYXJyYXksIHNpemU6IGFycmF5LCBldmVudHM6IGFycmF5fVxuICogQHJldHVybiB7VHJhY2t9XG4gKi9cblxudmFyIFRyYWNrID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVHJhY2soKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRyYWNrKTtcblxuICAgIHRoaXMudHlwZSA9IENvbnN0YW50cy5UUkFDS19DSFVOS19UWVBFO1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIHRoaXMuc2l6ZSA9IFtdO1xuICAgIHRoaXMuZXZlbnRzID0gW107XG4gICAgdGhpcy5leHBsaWNpdFRpY2tFdmVudHMgPSBbXTsgLy8gSWYgdGhlcmUgYXJlIGFueSBldmVudHMgd2l0aCBhbiBleHBsaWNpdCB0aWNrIGRlZmluZWQgdGhlbiB3ZSB3aWxsIGNyZWF0ZSBhIFwic3ViXCIgdHJhY2sgZm9yIHRob3NlXG4gICAgLy8gYW5kIG1lcmdlIHRoZW0gaW4gYW5kIHRoZSBlbmQuXG5cbiAgICB0aGlzLnRpY2tQb2ludGVyID0gMDsgLy8gRWFjaCB0aW1lIGFuIGV2ZW50IGlzIGFkZGVkIHRoaXMgd2lsbCBpbmNyZWFzZVxuICB9XG4gIC8qKlxuICAgKiBBZGRzIGFueSBldmVudCB0eXBlIHRvIHRoZSB0cmFjay5cbiAgICogRXZlbnRzIHdpdGhvdXQgYSBzcGVjaWZpYyBzdGFydFRpY2sgcHJvcGVydHkgYXJlIGFzc3VtZWQgdG8gYmUgYWRkZWQgaW4gb3JkZXIgb2YgaG93IHRoZXkgc2hvdWxkIG91dHB1dC5cbiAgICogRXZlbnRzIHdpdGggYSBzcGVjaWZpYyBzdGFydFRpY2sgcHJvcGVydHkgYXJlIHNldCBhc2lkZSBmb3Igbm93IHdpbGwgYmUgbWVyZ2VkIGluIGR1cmluZyBidWlsZCBwcm9jZXNzLlxuICAgKiBAcGFyYW0geyhOb3RlRXZlbnR8UHJvZ3JhbUNoYW5nZUV2ZW50KX0gZXZlbnRzIC0gRXZlbnQgb2JqZWN0IG9yIGFycmF5IG9mIEV2ZW50IG9iamVjdHMuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IG1hcEZ1bmN0aW9uIC0gQ2FsbGJhY2sgd2hpY2ggY2FuIGJlIHVzZWQgdG8gYXBwbHkgc3BlY2lmaWMgcHJvcGVydGllcyB0byBhbGwgZXZlbnRzLlxuICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoVHJhY2ssIFt7XG4gICAga2V5OiBcImFkZEV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEV2ZW50KGV2ZW50cywgbWFwRnVuY3Rpb24pIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIFV0aWxzLnRvQXJyYXkoZXZlbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCwgaSkge1xuICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOb3RlRXZlbnQpIHtcbiAgICAgICAgICAvLyBIYW5kbGUgbWFwIGZ1bmN0aW9uIGlmIHByb3ZpZGVkXG4gICAgICAgICAgaWYgKHR5cGVvZiBtYXBGdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIHByb3BlcnRpZXMgPSBtYXBGdW5jdGlvbihpLCBldmVudCk7XG5cbiAgICAgICAgICAgIGlmIChfdHlwZW9mKHByb3BlcnRpZXMpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICBmb3IgKHZhciBqIGluIHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGopIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgJ2NoYW5uZWwnOlxuICAgICAgICAgICAgICAgICAgICBldmVudC5jaGFubmVsID0gcHJvcGVydGllc1tqXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgJ2R1cmF0aW9uJzpcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZHVyYXRpb24gPSBwcm9wZXJ0aWVzW2pdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgY2FzZSAnc2VxdWVudGlhbCc6XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnNlcXVlbnRpYWwgPSBwcm9wZXJ0aWVzW2pdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgY2FzZSAndmVsb2NpdHknOlxuICAgICAgICAgICAgICAgICAgICBldmVudC52ZWxvY2l0eSA9IFV0aWxzLmNvbnZlcnRWZWxvY2l0eShwcm9wZXJ0aWVzW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAvLyBJZiB0aGlzIG5vdGUgZXZlbnQgaGFzIGFuIGV4cGxpY2l0IHN0YXJ0VGljayB0aGVuIHdlIG5lZWQgdG8gc2V0IGFzaWRlIGZvciBub3dcblxuXG4gICAgICAgICAgaWYgKGV2ZW50LnN0YXJ0VGljayAhPT0gbnVsbCkge1xuICAgICAgICAgICAgX3RoaXMuZXhwbGljaXRUaWNrRXZlbnRzLnB1c2goZXZlbnQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBQdXNoIGVhY2ggb24vb2ZmIGV2ZW50IHRvIHRyYWNrJ3MgZXZlbnQgc3RhY2tcbiAgICAgICAgICAgIGV2ZW50LmJ1aWxkRGF0YSgpLmV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpcy5ldmVudHMucHVzaChlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpcy5ldmVudHMucHVzaChldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJ1aWxkcyBpbnQgYXJyYXkgb2YgYWxsIGV2ZW50cy5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImJ1aWxkRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBidWlsZERhdGEoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgLy8gUmVtb3ZlIGV4aXN0aW5nIGVuZCB0cmFjayBldmVudCBhbmQgYWRkIG9uZS5cbiAgICAgIC8vIFRoaXMgbWFrZXMgc3VyZSBpdCdzIGF0IHRoZSB2ZXJ5IGVuZCBvZiB0aGUgZXZlbnQgbGlzdC5cbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRzQnlUeXBlKCdlbmQtdHJhY2snKS5hZGRFdmVudChuZXcgRW5kVHJhY2tFdmVudCgpKTsgLy8gUmVzZXRcblxuICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgICB0aGlzLnNpemUgPSBbXTtcbiAgICAgIHRoaXMudGlja1BvaW50ZXIgPSAwO1xuICAgICAgdmFyIHByZWNpc2lvbkxvc3MgPSAwO1xuICAgICAgdGhpcy5ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQsIGV2ZW50SW5kZXgpIHtcbiAgICAgICAgLy8gQnVpbGQgZXZlbnQgJiBhZGQgdG8gdG90YWwgdGljayBkdXJhdGlvblxuICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOb3RlT25FdmVudCB8fCBldmVudCBpbnN0YW5jZW9mIE5vdGVPZmZFdmVudCkge1xuICAgICAgICAgIHZhciBidWlsdCA9IGV2ZW50LmJ1aWxkRGF0YShfdGhpczIsIHByZWNpc2lvbkxvc3MpO1xuICAgICAgICAgIHByZWNpc2lvbkxvc3MgPSBVdGlscy5nZXRQcmVjaXNpb25Mb3NzKGV2ZW50LmRlbHRhV2l0aFByZWNpc2lvbkNvcnJlY3Rpb24gfHwgMCk7XG4gICAgICAgICAgX3RoaXMyLmRhdGEgPSBfdGhpczIuZGF0YS5jb25jYXQoYnVpbHQuZGF0YSk7XG4gICAgICAgICAgX3RoaXMyLnRpY2tQb2ludGVyID0gVXRpbHMuZ2V0Um91bmRlZElmQ2xvc2UoZXZlbnQudGljayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMyLmRhdGEgPSBfdGhpczIuZGF0YS5jb25jYXQoZXZlbnQuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5tZXJnZUV4cGxpY2l0VGlja0V2ZW50cygpO1xuICAgICAgdGhpcy5zaXplID0gVXRpbHMubnVtYmVyVG9CeXRlcyh0aGlzLmRhdGEubGVuZ3RoLCA0KTsgLy8gNCBieXRlcyBsb25nXG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJtZXJnZUV4cGxpY2l0VGlja0V2ZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtZXJnZUV4cGxpY2l0VGlja0V2ZW50cygpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICBpZiAoIXRoaXMuZXhwbGljaXRUaWNrRXZlbnRzLmxlbmd0aCkgcmV0dXJuOyAvLyBGaXJzdCBzb3J0IGFzYyBsaXN0IG9mIGV2ZW50cyBieSBzdGFydFRpY2tcblxuICAgICAgdGhpcy5leHBsaWNpdFRpY2tFdmVudHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYS5zdGFydFRpY2sgLSBiLnN0YXJ0VGljaztcbiAgICAgIH0pOyAvLyBOb3cgdGhpcy5leHBsaWNpdFRpY2tFdmVudHMgaXMgaW4gY29ycmVjdCBvcmRlciwgYW5kIHNvIGlzIHRoaXMuZXZlbnRzIG5hdHVyYWxseS5cbiAgICAgIC8vIEZvciBlYWNoIGV4cGxpY2l0IHRpY2sgZXZlbnQsIHNwbGljZSBpdCBpbnRvIHRoZSBtYWluIGxpc3Qgb2YgZXZlbnRzIGFuZFxuICAgICAgLy8gYWRqdXN0IHRoZSBkZWx0YSBvbiB0aGUgZm9sbG93aW5nIGV2ZW50cyBzbyB0aGV5IHN0aWxsIHBsYXkgbm9ybWFsbHkuXG5cbiAgICAgIHRoaXMuZXhwbGljaXRUaWNrRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKG5vdGVFdmVudCkge1xuICAgICAgICAvLyBDb252ZXJ0IE5vdGVFdmVudCB0byBpdCdzIHJlc3BlY3RpdmUgTm90ZU9uL05vdGVPZmYgZXZlbnRzXG4gICAgICAgIC8vIE5vdGUgdGhhdCBhcyB3ZSBzcGxpY2UgaW4gZXZlbnRzIHRoZSBkZWx0YSBmb3IgdGhlIE5vdGVPZmYgb25lcyB3aWxsXG4gICAgICAgIC8vIE5lZWQgdG8gY2hhbmdlIGJhc2VkIG9uIHdoYXQgY29tZXMgYmVmb3JlIHRoZW0gYWZ0ZXIgdGhlIHNwbGljZS5cbiAgICAgICAgbm90ZUV2ZW50LmJ1aWxkRGF0YSgpLmV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGUuYnVpbGREYXRhKF90aGlzMyk7XG4gICAgICAgIH0pOyAvLyBNZXJnZSBlYWNoIGV2ZW50IGluZGl2dWFsbHkgaW50byB0aGlzIHRyYWNrJ3MgZXZlbnQgbGlzdC5cblxuICAgICAgICBub3RlRXZlbnQuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMy5tZXJnZVNpbmdsZUV2ZW50KGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTsgLy8gSGFja3kgd2F5IHRvIHJlYnVpbGQgdHJhY2sgd2l0aCBuZXdseSBzcGxpY2VkIGV2ZW50cy4gIE5lZWQgYmV0dGVyIHNvbHV0aW9uLlxuXG4gICAgICB0aGlzLmV4cGxpY2l0VGlja0V2ZW50cyA9IFtdO1xuICAgICAgdGhpcy5idWlsZERhdGEoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTWVyZ2VzIGFub3RoZXIgdHJhY2sncyBldmVudHMgd2l0aCB0aGlzIHRyYWNrLlxuICAgICAqIEBwYXJhbSB7VHJhY2t9IHRyYWNrXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJtZXJnZVRyYWNrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1lcmdlVHJhY2sodHJhY2spIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICAvLyBGaXJzdCBidWlsZCB0aGlzIHRyYWNrIHRvIHBvcHVsYXRlIGVhY2ggZXZlbnQncyB0aWNrIHByb3BlcnR5XG4gICAgICB0aGlzLmJ1aWxkRGF0YSgpOyAvLyBUaGVuIGJ1aWxkIHRyYWNrIHRvIGJlIG1lcmdlZCBzbyB0aGF0IHRpY2sgcHJvcGVydHkgaXMgcG9wdWxhdGVkIG9uIGFsbCBldmVudHMgJiBtZXJnZSBlYWNoIGV2ZW50LlxuXG4gICAgICB0cmFjay5idWlsZERhdGEoKS5ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzNC5tZXJnZVNpbmdsZUV2ZW50KGV2ZW50KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNZXJnZXMgYSBzaW5nbGUgZXZlbnQgaW50byB0aGlzIHRyYWNrJ3MgbGlzdCBvZiBldmVudHMgYmFzZWQgb24gZXZlbnQudGljayBwcm9wZXJ0eS5cbiAgICAgKiBAcGFyYW0ge05vdGVPbkV2ZW50fE5vdGVPZmZFdmVudH0gLSBldmVudFxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibWVyZ2VTaW5nbGVFdmVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtZXJnZVNpbmdsZUV2ZW50KGV2ZW50KSB7XG4gICAgICAvLyBGaW5kIGluZGV4IG9mIGV4aXN0aW5nIGV2ZW50IHdlIG5lZWQgdG8gZm9sbG93IHdpdGhcbiAgICAgIHZhciBsYXN0RXZlbnRJbmRleCA9IDA7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2ldLnRpY2sgPiBldmVudC50aWNrKSBicmVhaztcbiAgICAgICAgbGFzdEV2ZW50SW5kZXggPSBpO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3BsaWNlZEV2ZW50SW5kZXggPSBsYXN0RXZlbnRJbmRleCArIDE7IC8vIE5lZWQgdG8gYWRqdXN0IHRoZSBkZWx0YSBvZiB0aGlzIGV2ZW50IHRvIGVuc3VyZSBpdCBmYWxscyBvbiB0aGUgY29ycmVjdCB0aWNrLlxuXG4gICAgICBldmVudC5kZWx0YSA9IGV2ZW50LnRpY2sgLSB0aGlzLmV2ZW50c1tsYXN0RXZlbnRJbmRleF0udGljazsgLy8gU3BsaWNlIHRoaXMgZXZlbnQgYXQgbGFzdEV2ZW50SW5kZXggKyAxXG5cbiAgICAgIHRoaXMuZXZlbnRzLnNwbGljZShzcGxpY2VkRXZlbnRJbmRleCwgMCwgZXZlbnQpOyAvLyBOb3cgYWRqdXN0IGRlbHRhIG9mIGFsbCBmb2xsb3dpbmcgZXZlbnRzXG5cbiAgICAgIGZvciAodmFyIGkgPSBzcGxpY2VkRXZlbnRJbmRleCArIDE7IGkgPCB0aGlzLmV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBTaW5jZSBlYWNoIGV4aXN0aW5nIGV2ZW50IHNob3VsZCBoYXZlIGEgdGljayB2YWx1ZSBhdCB0aGlzIHBvaW50IHdlIGp1c3QgbmVlZCB0b1xuICAgICAgICAvLyBhZGp1c3QgZGVsdGEgdG8gdGhhdCB0aGUgZXZlbnQgc3RpbGwgZmFsbHMgb24gdGhlIGNvcnJlY3QgdGljay5cbiAgICAgICAgdGhpcy5ldmVudHNbaV0uZGVsdGEgPSB0aGlzLmV2ZW50c1tpXS50aWNrIC0gdGhpcy5ldmVudHNbaSAtIDFdLnRpY2s7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIGV2ZW50cyBtYXRjaGluZyBzcGVjaWZpZWQgdHlwZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlIC0gRXZlbnQgdHlwZVxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlRXZlbnRzQnlUeXBlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUV2ZW50c0J5VHlwZShldmVudFR5cGUpIHtcbiAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICB0aGlzLmV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCwgaW5kZXgpIHtcbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IGV2ZW50VHlwZSkge1xuICAgICAgICAgIF90aGlzNS5ldmVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0ZW1wbyBvZiB0aGUgTUlESSBmaWxlLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBicG0gLSBUZW1wbyBpbiBiZWF0cyBwZXIgbWludXRlLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2V0VGVtcG9cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VGVtcG8oYnBtKSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgVGVtcG9FdmVudChicG0pKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aW1lIHNpZ25hdHVyZS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbnVtZXJhdG9yIC0gVG9wIG51bWJlciBvZiB0aGUgdGltZSBzaWduYXR1cmUuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRlbm9taW5hdG9yIC0gQm90dG9tIG51bWJlciBvZiB0aGUgdGltZSBzaWduYXR1cmUuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pZGljbG9ja3NwZXJ0aWNrIC0gRGVmYXVsdHMgdG8gMjQuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5vdGVzcGVybWlkaWNsb2NrIC0gRGVmYXVsdHMgdG8gOC5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNldFRpbWVTaWduYXR1cmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VGltZVNpZ25hdHVyZShudW1lcmF0b3IsIGRlbm9taW5hdG9yLCBtaWRpY2xvY2tzcGVydGljaywgbm90ZXNwZXJtaWRpY2xvY2spIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBUaW1lU2lnbmF0dXJlRXZlbnQobnVtZXJhdG9yLCBkZW5vbWluYXRvciwgbWlkaWNsb2Nrc3BlcnRpY2ssIG5vdGVzcGVybWlkaWNsb2NrKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMga2V5IHNpZ25hdHVyZS5cbiAgICAgKiBAcGFyYW0geyp9IHNmIC1cbiAgICAgKiBAcGFyYW0geyp9IG1pIC1cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNldEtleVNpZ25hdHVyZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRLZXlTaWduYXR1cmUoc2YsIG1pKSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgS2V5U2lnbmF0dXJlRXZlbnQoc2YsIG1pKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgdGV4dCB0byBNSURJIGZpbGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUZXh0IHRvIGFkZC5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFkZFRleHRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkVGV4dCh0ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgVGV4dEV2ZW50KHRleHQpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBjb3B5cmlnaHQgdG8gTUlESSBmaWxlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCBvZiBjb3B5cmlnaHQgbGluZS5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFkZENvcHlyaWdodFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRDb3B5cmlnaHQodGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IENvcHlyaWdodEV2ZW50KHRleHQpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBTZXF1ZW5jZS9UcmFjayBOYW1lLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCBvZiB0cmFjayBuYW1lLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkVHJhY2tOYW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZFRyYWNrTmFtZSh0ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgVHJhY2tOYW1lRXZlbnQodGV4dCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIGluc3RydW1lbnQgbmFtZSBvZiB0cmFjay5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIE5hbWUgb2YgaW5zdHJ1bWVudC5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFkZEluc3RydW1lbnROYW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEluc3RydW1lbnROYW1lKHRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBJbnN0cnVtZW50TmFtZUV2ZW50KHRleHQpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBtYXJrZXIgdG8gTUlESSBmaWxlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gTWFya2VyIHRleHQuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhZGRNYXJrZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkTWFya2VyKHRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBNYXJrZXJFdmVudCh0ZXh0KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgY3VlIHBvaW50IHRvIE1JREkgZmlsZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRleHQgb2YgY3VlIHBvaW50LlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkQ3VlUG9pbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkQ3VlUG9pbnQodGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IEN1ZVBvaW50RXZlbnQodGV4dCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGx5cmljIHRvIE1JREkgZmlsZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIEx5cmljIHRleHQgdG8gYWRkLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkTHlyaWNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkTHlyaWModGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IEx5cmljRXZlbnQodGV4dCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGFubmVsIG1vZGUgbWVzc2FnZXNcbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInBvbHlNb2RlT25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcG9seU1vZGVPbigpIHtcbiAgICAgIHZhciBldmVudCA9IG5ldyBOb3RlT25FdmVudCh7XG4gICAgICAgIGRhdGE6IFsweDAwLCAweEIwLCAweDdFLCAweDAwXVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChldmVudCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgYSBwaXRjaCBiZW5kLlxuICAgICAqIEBwYXJhbSB7ZmxvYXR9IGJlbmQgLSBCZW5kIHZhbHVlIHJhbmdpbmcgWy0xLDFdLCB6ZXJvIG1lYW5pbmcgbm8gYmVuZC5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNldFBpdGNoQmVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQaXRjaEJlbmQoYmVuZCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IFBpdGNoQmVuZEV2ZW50KHtcbiAgICAgICAgYmVuZDogYmVuZFxuICAgICAgfSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgY29udHJvbGxlciBjaGFuZ2UgZXZlbnRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyIC0gQ29udHJvbCBudW1iZXIuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gQ29udHJvbCB2YWx1ZS5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNvbnRyb2xsZXJDaGFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29udHJvbGxlckNoYW5nZShudW1iZXIsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgQ29udHJvbGxlckNoYW5nZUV2ZW50KHtcbiAgICAgICAgY29udHJvbGxlck51bWJlcjogbnVtYmVyLFxuICAgICAgICBjb250cm9sbGVyVmFsdWU6IHZhbHVlXG4gICAgICB9KSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFRyYWNrO1xufSgpO1xuXG52YXIgVmV4RmxvdyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFZleEZsb3coKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFZleEZsb3cpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFZleEZsb3csIFt7XG4gICAga2V5OiBcInRyYWNrRnJvbVZvaWNlXCIsXG4gICAgdmFsdWU6XG4gICAgLyoqXG4gICAgICogU3VwcG9ydCBmb3IgY29udmVydGluZyBWZXhGbG93IHZvaWNlIGludG8gTWlkaVdyaXRlckpTIHRyYWNrXG4gICAgICogQHJldHVybiBNaWRpV3JpdGVyLlRyYWNrIG9iamVjdFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHRyYWNrRnJvbVZvaWNlKHZvaWNlKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge1xuICAgICAgICBhZGRSZW5kZXJlZEFjY2lkZW50YWxzOiBmYWxzZVxuICAgICAgfTtcbiAgICAgIHZhciB0cmFjayA9IG5ldyBUcmFjaygpO1xuICAgICAgdmFyIHdhaXQgPSBbXTtcbiAgICAgIHZvaWNlLnRpY2thYmxlcy5mb3JFYWNoKGZ1bmN0aW9uICh0aWNrYWJsZSkge1xuICAgICAgICBpZiAodGlja2FibGUubm90ZVR5cGUgPT09ICduJykge1xuICAgICAgICAgIHRyYWNrLmFkZEV2ZW50KG5ldyBOb3RlRXZlbnQoe1xuICAgICAgICAgICAgcGl0Y2g6IHRpY2thYmxlLmtleXMubWFwKGZ1bmN0aW9uIChwaXRjaCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmNvbnZlcnRQaXRjaChwaXRjaCwgaW5kZXgsIHRpY2thYmxlLCBvcHRpb25zLmFkZFJlbmRlcmVkQWNjaWRlbnRhbHMpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBkdXJhdGlvbjogX3RoaXMuY29udmVydER1cmF0aW9uKHRpY2thYmxlKSxcbiAgICAgICAgICAgIHdhaXQ6IHdhaXRcbiAgICAgICAgICB9KSk7IC8vIHJlc2V0IHdhaXRcblxuICAgICAgICAgIHdhaXQgPSBbXTtcbiAgICAgICAgfSBlbHNlIGlmICh0aWNrYWJsZS5ub3RlVHlwZSA9PT0gJ3InKSB7XG4gICAgICAgICAgLy8gbW92ZSBvbiB0byB0aGUgbmV4dCB0aWNrYWJsZSBhbmQgYWRkIHRoaXMgdG8gdGhlIHN0YWNrXG4gICAgICAgICAgLy8gb2YgdGhlIGB3YWl0YCBwcm9wZXJ0eSBmb3IgdGhlIG5leHQgbm90ZSBldmVudFxuICAgICAgICAgIHdhaXQucHVzaChfdGhpcy5jb252ZXJ0RHVyYXRpb24odGlja2FibGUpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0pOyAvLyBUaGVyZSBtYXkgYmUgb3V0c3RhbmRpbmcgcmVzdHMgYXQgdGhlIGVuZCBvZiB0aGUgdHJhY2ssXG4gICAgICAvLyBwYWQgd2l0aCBhIGdob3N0IG5vdGUgKHplcm8gZHVyYXRpb24gYW5kIHZlbG9jaXR5KSwganVzdCB0byBjYXB0dXJlIHRoZSB3YWl0LlxuXG4gICAgICBpZiAod2FpdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRyYWNrLmFkZEV2ZW50KG5ldyBOb3RlRXZlbnQoe1xuICAgICAgICAgIHBpdGNoOiAnW2M0XScsXG4gICAgICAgICAgZHVyYXRpb246ICcwJyxcbiAgICAgICAgICB3YWl0OiB3YWl0LFxuICAgICAgICAgIHZlbG9jaXR5OiAnMCdcbiAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJhY2s7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIFZleEZsb3cgcGl0Y2ggc3ludGF4IHRvIE1pZGlXcml0ZXJKUyBzeW50YXhcbiAgICAgKiBAcGFyYW0gcGl0Y2ggc3RyaW5nXG4gICAgICogQHBhcmFtIGluZGV4IHBpdGNoIGluZGV4XG4gICAgICogQHBhcmFtIG5vdGUgc3RydWN0IGZyb20gVmV4Zmxvd1xuICAgICAqIEBwYXJhbSBhZGRSZW5kZXJlZEFjY2lkZW50YWxzIGFkZHMgVmV4ZmxvdyByZW5kZXJlZCBhY2NpZGVudGFsc1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY29udmVydFBpdGNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbnZlcnRQaXRjaChwaXRjaCwgaW5kZXgsIG5vdGUpIHtcbiAgICAgIHZhciBhZGRSZW5kZXJlZEFjY2lkZW50YWxzID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiBmYWxzZTtcbiAgICAgIC8vIFNwbGl0cyBub3RlIG5hbWUgZnJvbSBvY3RhdmVcbiAgICAgIHZhciBwaXRjaFBhcnRzID0gcGl0Y2guc3BsaXQoJy8nKTsgLy8gUmV0cmlldmVzIGFjY2lkZW50YWxzIGZyb20gcGl0Y2hcbiAgICAgIC8vIFJlbW92ZXMgbmF0dXJhbCBhY2NpZGVudGFscyBzaW5jZSB0aGV5IGFyZSBub3QgYWNjZXB0ZWQgaW4gVG9uYWwgTWlkaVxuXG4gICAgICB2YXIgYWNjaWRlbnRhbHMgPSBwaXRjaFBhcnRzWzBdLnN1YnN0cmluZygxKS5yZXBsYWNlKCduJywgJycpO1xuXG4gICAgICBpZiAoYWRkUmVuZGVyZWRBY2NpZGVudGFscykge1xuICAgICAgICB2YXIgX25vdGUkZ2V0QWNjaWRlbnRhbHM7XG5cbiAgICAgICAgKF9ub3RlJGdldEFjY2lkZW50YWxzID0gbm90ZS5nZXRBY2NpZGVudGFscygpKSA9PT0gbnVsbCB8fCBfbm90ZSRnZXRBY2NpZGVudGFscyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX25vdGUkZ2V0QWNjaWRlbnRhbHMuZm9yRWFjaChmdW5jdGlvbiAoYWNjaWRlbnRhbCkge1xuICAgICAgICAgIGlmIChhY2NpZGVudGFsLmluZGV4ID09PSBpbmRleCkge1xuICAgICAgICAgICAgaWYgKGFjY2lkZW50YWwudHlwZSA9PT0gJ24nKSB7XG4gICAgICAgICAgICAgIGFjY2lkZW50YWxzID0gJyc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhY2NpZGVudGFscyArPSBhY2NpZGVudGFsLnR5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBpdGNoUGFydHNbMF1bMF0gKyBhY2NpZGVudGFscyArIHBpdGNoUGFydHNbMV07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIFZleEZsb3cgZHVyYXRpb24gc3ludGF4IHRvIE1pZGlXcml0ZXJKUyBzeW50YXhcbiAgICAgKiBAcGFyYW0gbm90ZSBzdHJ1Y3QgZnJvbSBWZXhGbG93XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjb252ZXJ0RHVyYXRpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29udmVydER1cmF0aW9uKG5vdGUpIHtcbiAgICAgIHJldHVybiAnZCcucmVwZWF0KG5vdGUuZG90cykgKyB0aGlzLmNvbnZlcnRCYXNlRHVyYXRpb24obm90ZS5kdXJhdGlvbikgKyAobm90ZS50dXBsZXQgPyAndCcgKyBub3RlLnR1cGxldC5udW1fbm90ZXMgOiAnJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIFZleEZsb3cgYmFzZSBkdXJhdGlvbiBzeW50YXggdG8gTWlkaVdyaXRlckpTIHN5bnRheFxuICAgICAqIEBwYXJhbSBkdXJhdGlvbiBWZXhmbG93IGR1cmF0aW9uXG4gICAgICogQHJldHVybnMgTWlkaVdyaXRlckpTIGR1cmF0aW9uXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjb252ZXJ0QmFzZUR1cmF0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbnZlcnRCYXNlRHVyYXRpb24oZHVyYXRpb24pIHtcbiAgICAgIHN3aXRjaCAoZHVyYXRpb24pIHtcbiAgICAgICAgY2FzZSAndyc6XG4gICAgICAgICAgcmV0dXJuICcxJztcblxuICAgICAgICBjYXNlICdoJzpcbiAgICAgICAgICByZXR1cm4gJzInO1xuXG4gICAgICAgIGNhc2UgJ3EnOlxuICAgICAgICAgIHJldHVybiAnNCc7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gZHVyYXRpb247XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFZleEZsb3c7XG59KCk7XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgaGVhZGVyIGNodW5rIHNlY3Rpb24gb2YgYSBNSURJIGZpbGUuXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyT2ZUcmFja3MgLSBOdW1iZXIgb2YgdHJhY2tzXG4gKiBAcmV0dXJuIHtIZWFkZXJDaHVua31cbiAqL1xuXG52YXIgSGVhZGVyQ2h1bmsgPSBmdW5jdGlvbiBIZWFkZXJDaHVuayhudW1iZXJPZlRyYWNrcykge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSGVhZGVyQ2h1bmspO1xuXG4gIHRoaXMudHlwZSA9IENvbnN0YW50cy5IRUFERVJfQ0hVTktfVFlQRTtcbiAgdmFyIHRyYWNrVHlwZSA9IG51bWJlck9mVHJhY2tzID4gMSA/IENvbnN0YW50cy5IRUFERVJfQ0hVTktfRk9STUFUMSA6IENvbnN0YW50cy5IRUFERVJfQ0hVTktfRk9STUFUMDtcbiAgdGhpcy5kYXRhID0gdHJhY2tUeXBlLmNvbmNhdChVdGlscy5udW1iZXJUb0J5dGVzKG51bWJlck9mVHJhY2tzLCAyKSwgLy8gdHdvIGJ5dGVzIGxvbmcsXG4gIENvbnN0YW50cy5IRUFERVJfQ0hVTktfRElWSVNJT04pO1xuICB0aGlzLnNpemUgPSBbMCwgMCwgMCwgdGhpcy5kYXRhLmxlbmd0aF07XG59O1xuXG4vKipcbiAqIE9iamVjdCB0aGF0IHB1dHMgdG9nZXRoZXIgdHJhY2tzIGFuZCBwcm92aWRlcyBtZXRob2RzIGZvciBmaWxlIG91dHB1dC5cbiAqIEBwYXJhbSB7YXJyYXl8VHJhY2t9IHRyYWNrcyAtIEEgc2luZ2xlIHtUcmFja30gb2JqZWN0IG9yIGFuIGFycmF5IG9mIHtUcmFja30gb2JqZWN0cy5cbiAqIEByZXR1cm4ge1dyaXRlcn1cbiAqL1xuXG52YXIgV3JpdGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gV3JpdGVyKHRyYWNrcykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV3JpdGVyKTtcblxuICAgIC8vIEVuc3VyZSB0cmFjayBpcyBhbiBhcnJheVxuICAgIHRyYWNrcyA9IFV0aWxzLnRvQXJyYXkodHJhY2tzKTtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICB0aGlzLmRhdGEucHVzaChuZXcgSGVhZGVyQ2h1bmsodHJhY2tzLmxlbmd0aCkpOyAvLyBGb3IgZWFjaCB0cmFjayBhZGQgZmluYWwgZW5kIG9mIHRyYWNrIGV2ZW50IGFuZCBidWlsZCBkYXRhXG5cbiAgICB0cmFja3MuZm9yRWFjaChmdW5jdGlvbiAodHJhY2ssIGkpIHtcbiAgICAgIF90aGlzLmRhdGEucHVzaCh0cmFjay5idWlsZERhdGEoKSk7XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIEJ1aWxkcyB0aGUgZmlsZSBpbnRvIGEgVWludDhBcnJheVxuICAgKiBAcmV0dXJuIHtVaW50OEFycmF5fVxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhXcml0ZXIsIFt7XG4gICAga2V5OiBcImJ1aWxkRmlsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBidWlsZEZpbGUoKSB7XG4gICAgICB2YXIgYnVpbGQgPSBbXTsgLy8gRGF0YSBjb25zaXN0cyBvZiBjaHVua3Mgd2hpY2ggY29uc2lzdHMgb2YgZGF0YVxuXG4gICAgICB0aGlzLmRhdGEuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gYnVpbGQgPSBidWlsZC5jb25jYXQoZC50eXBlLCBkLnNpemUsIGQuZGF0YSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShidWlsZCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnQgZmlsZSBidWZmZXIgdG8gYSBiYXNlNjQgc3RyaW5nLiAgRGlmZmVyZW50IG1ldGhvZHMgZGVwZW5kaW5nIG9uIGlmIGJyb3dzZXIgb3Igbm9kZS5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJiYXNlNjRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmFzZTY0KCkge1xuICAgICAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSByZXR1cm4gYnRvYShTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIHRoaXMuYnVpbGRGaWxlKCkpKTtcbiAgICAgIHJldHVybiBCdWZmZXIuZnJvbSh0aGlzLmJ1aWxkRmlsZSgpKS50b1N0cmluZygnYmFzZTY0Jyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZGF0YSBVUkkuXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZGF0YVVyaVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkYXRhVXJpKCkge1xuICAgICAgcmV0dXJuICdkYXRhOmF1ZGlvL21pZGk7YmFzZTY0LCcgKyB0aGlzLmJhc2U2NCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBPdXRwdXQgdG8gc3Rkb3V0XG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3Rkb3V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0ZG91dCgpIHtcbiAgICAgIHJldHVybiBwcm9jZXNzLnN0ZG91dC53cml0ZShuZXcgQnVmZmVyKHRoaXMuYnVpbGRGaWxlKCkpKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gV3JpdGVyO1xufSgpO1xuXG52YXIgbWFpbiA9IHtcbiAgQ29uc3RhbnRzOiBDb25zdGFudHMsXG4gIE5vdGVPbkV2ZW50OiBOb3RlT25FdmVudCxcbiAgTm90ZU9mZkV2ZW50OiBOb3RlT2ZmRXZlbnQsXG4gIE5vdGVFdmVudDogTm90ZUV2ZW50LFxuICBQaXRjaEJlbmRFdmVudDogUGl0Y2hCZW5kRXZlbnQsXG4gIFByb2dyYW1DaGFuZ2VFdmVudDogUHJvZ3JhbUNoYW5nZUV2ZW50LFxuICBUcmFjazogVHJhY2ssXG4gIFV0aWxzOiBVdGlscyxcbiAgVmV4RmxvdzogVmV4RmxvdyxcbiAgV3JpdGVyOiBXcml0ZXJcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbWFpbjtcbiIsICJpbXBvcnQgeyBVdGlscyB9IGZyb20gJ21pZGktd3JpdGVyLWpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgdGhpcy5iZWF0cyA9IFtdO1xuICAgIHRoaXMuYmFycyA9IDg7XG4gICAgdGhpcy5icG0gPSAxMjc7XG4gICAgdGhpcy5mcmFxID0gMSAvIHRoaXMuYmFycztcbiAgICB0aGlzLnRyYWNrTm9kZXMgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy50cmFja1N0YXRlID0gbmV3IE1hcCgpO1xuICAgIHRoaXMuZGVsYXlEaXZpc2lvbiA9IDMgLyA4O1xuICAgIHRoaXMub25CZWF0ID0gbnVsbDtcbiAgICB0aGlzLmJlYXRJbmRleCA9IDA7XG4gICAgdGhpcy5sb29wU3RhcnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuaW5pdEF1ZGlvKCk7XG4gIH1cblxuICBpbml0QXVkaW8oKSB7XG4gICAgY29uc3QgQXVkaW9Db250ZXh0RnVuYyA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dDtcblxuICAgIHRoaXMuYXVkaW9Db250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dEZ1bmMoKTtcbiAgICB0aGlzLmRlc3RpbmF0aW9uID0gdGhpcy5hdWRpb0NvbnRleHQuZGVzdGluYXRpb247XG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgV2ViQXVkaW9Gb250UGxheWVyKCk7XG4gICAgdGhpcy5lcXVhbGl6ZXIgPSB0aGlzLnBsYXllci5jcmVhdGVDaGFubmVsKHRoaXMuYXVkaW9Db250ZXh0KTtcbiAgICB0aGlzLm1hc3RlckdhaW4gPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgdGhpcy5lY2hvID0gdGhpcy5wbGF5ZXIuY3JlYXRlUmV2ZXJiZXJhdG9yKHRoaXMuYXVkaW9Db250ZXh0KTtcbiAgICB0aGlzLmRlbGF5SW5wdXQgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgdGhpcy5kZWxheSA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZURlbGF5KDQpO1xuICAgIHRoaXMuZGVsYXlGZWVkYmFjayA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgICB0aGlzLmRlbGF5V2V0ID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpO1xuXG4gICAgdGhpcy5tYXN0ZXJHYWluLmdhaW4udmFsdWUgPSAxO1xuICAgIHRoaXMuZGVsYXlGZWVkYmFjay5nYWluLnZhbHVlID0gMC4zNTtcbiAgICB0aGlzLmRlbGF5V2V0LmdhaW4udmFsdWUgPSAxO1xuICAgIHRoaXMuZGVsYXlJbnB1dC5nYWluLnZhbHVlID0gMTtcblxuICAgIHRoaXMuZXF1YWxpemVyLm91dHB1dC5jb25uZWN0KHRoaXMubWFzdGVyR2Fpbik7XG4gICAgdGhpcy5lY2hvLm91dHB1dC5jb25uZWN0KHRoaXMubWFzdGVyR2Fpbik7XG5cbiAgICB0aGlzLmRlbGF5SW5wdXQuY29ubmVjdCh0aGlzLmRlbGF5KTtcbiAgICB0aGlzLmRlbGF5LmNvbm5lY3QodGhpcy5kZWxheUZlZWRiYWNrKTtcbiAgICB0aGlzLmRlbGF5RmVlZGJhY2suY29ubmVjdCh0aGlzLmRlbGF5KTtcbiAgICB0aGlzLmRlbGF5LmNvbm5lY3QodGhpcy5kZWxheVdldCk7XG4gICAgdGhpcy5kZWxheVdldC5jb25uZWN0KHRoaXMubWFzdGVyR2Fpbik7XG5cbiAgICB0aGlzLm1hc3RlckdhaW4uY29ubmVjdCh0aGlzLmRlc3RpbmF0aW9uKTtcbiAgICB0aGlzLnVwZGF0ZURlbGF5VGltZSgpO1xuICB9XG5cbiAgcGl0Y2godmFsdWUpIHtcbiAgICByZXR1cm4gVXRpbHMuZ2V0UGl0Y2godmFsdWUpICsgdGhpcy5vZmZzZXQ7XG4gIH1cblxuICBwcmVsb2FkKGRhdGEpIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhIHx8IHRoaXMuZGF0YTtcblxuICAgIGxldCBjb3VudCA9IDA7XG4gICAgdGhpcy5kYXRhLmZvckVhY2godHJhY2sgPT4ge1xuICAgICAgaWYgKHRyYWNrWzJdLmxlbmd0aCA+IGNvdW50KSBjb3VudCA9IHRyYWNrWzJdLmxlbmd0aDtcblxuICAgICAgY29uc3QgaW5mbyA9IHRyYWNrWzBdID49IDIwMDBcbiAgICAgICAgPyB0aGlzLnBsYXllci5sb2FkZXIuZHJ1bUluZm8odHJhY2tbMF0gLSAyMDAwKVxuICAgICAgICA6IHRoaXMucGxheWVyLmxvYWRlci5pbnN0cnVtZW50SW5mbyh0cmFja1swXSk7XG5cbiAgICAgIHRoaXMuY2FjaGVJbnN0cnVtZW50KGluZm8pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZHVyYXRpb24gPSBVdGlscy5nZXRUaWNrRHVyYXRpb24oJzMyJykgLyAyNTY7XG4gICAgY29uc3QgbmV4dEtleXMgPSBuZXcgU2V0KCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGJlYXQgPSBuZXcgTWFwKCk7XG5cbiAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKHRyYWNrID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gYCR7dHJhY2tbMF19LyR7dHJhY2tbMV19YDtcbiAgICAgICAgbmV4dEtleXMuYWRkKGtleSk7XG4gICAgICAgIGlmICghYmVhdC5oYXMoa2V5KSkgYmVhdC5zZXQoa2V5LCB7IGRydW1zOiBbXSwgbm90ZXM6IFtdIH0pO1xuICAgICAgICBjb25zdCBzbG90ID0gYmVhdC5nZXQoa2V5KTtcbiAgICAgICAgY29uc3QgdGljayA9IHRyYWNrWzJdW2ldIHx8IHt9O1xuXG4gICAgICAgIGlmICh0cmFja1swXSA+PSAyMDAwKSB7XG4gICAgICAgICAgc2xvdC5kcnVtcy5wdXNoKFt0cmFja1swXSAtIDIwMDAsIHRpY2sudl0pO1xuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodGljay5uKSkge1xuICAgICAgICAgIHRpY2subi5mb3JFYWNoKHRvbmUgPT4ge1xuICAgICAgICAgICAgc2xvdC5ub3Rlcy5wdXNoKFt0cmFja1swXSwgdGhpcy5waXRjaCh0b25lKSwgZHVyYXRpb24sIHRpY2sudl0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRpY2subikge1xuICAgICAgICAgIHNsb3Qubm90ZXMucHVzaChbdHJhY2tbMF0sIHRoaXMucGl0Y2godGljay5uKSwgZHVyYXRpb24sIHRpY2sudl0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5iZWF0c1tpXSA9IGJlYXQ7XG4gICAgfVxuXG4gICAgdGhpcy50cmFja05vZGVzLmZvckVhY2goKG5vZGVzLCBrZXkpID0+IHtcbiAgICAgIGlmICghbmV4dEtleXMuaGFzKGtleSkpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBub2Rlcy5kcnkuZGlzY29ubmVjdCgpO1xuICAgICAgICAgIG5vZGVzLnJldmVyYlNlbmQuZGlzY29ubmVjdCgpO1xuICAgICAgICAgIG5vZGVzLmRlbGF5U2VuZC5kaXNjb25uZWN0KCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpZ25vcmVcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyYWNrTm9kZXMuZGVsZXRlKGtleSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBuZXh0S2V5cy5mb3JFYWNoKGtleSA9PiB0aGlzLmdldFRyYWNrTm9kZXMoa2V5KSk7XG4gIH1cblxuICBjb250ZXh0VGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hdWRpb0NvbnRleHQuY3VycmVudFRpbWU7XG4gIH1cblxuICBwbGF5TG9vcE1hY2hpbmUoZnJvbUJlYXQpIHtcbiAgICB0aGlzLnN0YXJ0UGxheUxvb3AodGhpcy5iZWF0cywgdGhpcy5icG0sIHRoaXMuZnJhcSwgZnJvbUJlYXQpO1xuICB9XG5cbiAgc3RvcExvb3BNYWNoaW5lKCkge1xuICAgIHRoaXMuc3RvcFBsYXlMb29wKCk7XG4gIH1cblxuICBzZXRMb29wTWFjaGluZShkYXRhLCB0ZW1wbywgbGVuZ3RoLCB0cmFuc3Bvc2UpIHtcbiAgICBjb25zdCBjaGFuZ2VkID0gdGVtcG8gIT09IHRoaXMuYnBtXG4gICAgICB8fCBsZW5ndGggIT09IHRoaXMuYmFyc1xuICAgICAgfHwgdHJhbnNwb3NlICE9PSB0aGlzLm9mZnNldDtcblxuICAgIGlmIChjaGFuZ2VkKSB0aGlzLnN0b3BQbGF5TG9vcCgpO1xuXG4gICAgdGhpcy5iZWF0cy5sZW5ndGggPSAwO1xuICAgIHRoaXMuYnBtID0gdGVtcG8gfHwgMTI3O1xuICAgIHRoaXMuYmFycyA9IGxlbmd0aCB8fCAxNjtcbiAgICB0aGlzLm9mZnNldCA9IHRyYW5zcG9zZSB8fCAwO1xuICAgIHRoaXMudXBkYXRlRGVsYXlUaW1lKCk7XG4gICAgdGhpcy5wcmVsb2FkKGRhdGEpO1xuICAgIHRoaXMuZnJhcSA9IDEgLyB0aGlzLmJhcnM7XG5cbiAgICByZXR1cm4gY2hhbmdlZDtcbiAgfVxuXG4gIHVwZGF0ZVRyYWNrcyhkYXRhKSB7XG4gICAgdGhpcy5iZWF0cy5sZW5ndGggPSAwO1xuICAgIHRoaXMucHJlbG9hZChkYXRhKTtcbiAgICBpZiAoIXRoaXMuYmVhdHMubGVuZ3RoIHx8IHR5cGVvZiB0aGlzLmJlYXRJbmRleCAhPT0gJ251bWJlcicgfHwgdGhpcy5iZWF0SW5kZXggPj0gdGhpcy5iZWF0cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuYmVhdEluZGV4ID0gMDtcbiAgICB9XG4gIH1cblxuICBzdGFydFBsYXlMb29wKGJlYXRzLCBicG0sIGRlbnNpdHksIGZyb21CZWF0KSB7XG4gICAgdGhpcy5sb29wU3RhcnRlZCA9IHRydWU7XG5cbiAgICBjb25zdCB3aG9sZU5vdGVEdXJhdGlvbiA9ICg0ICogNjApIC8gYnBtO1xuXG4gICAgdGhpcy5iZWF0SW5kZXggPSBmcm9tQmVhdCA8IGJlYXRzLmxlbmd0aCA/IGZyb21CZWF0IDogMDtcbiAgICB0aGlzLnBsYXlCZWF0QXQodGhpcy5jb250ZXh0VGltZSgpLCBiZWF0c1t0aGlzLmJlYXRJbmRleF0sIGJwbSk7XG5cbiAgICBsZXQgbmV4dExvb3BUaW1lID0gdGhpcy5jb250ZXh0VGltZSgpICsgZGVuc2l0eSAqIHdob2xlTm90ZUR1cmF0aW9uO1xuICAgIHRoaXMubG9vcEludGVydmFsSUQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB3aGlsZSAodGhpcy5jb250ZXh0VGltZSgpID49IG5leHRMb29wVGltZSkge1xuICAgICAgICB0aGlzLmJlYXRJbmRleCArPSAxO1xuICAgICAgICBpZiAodGhpcy5iZWF0SW5kZXggPj0gYmVhdHMubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5iZWF0SW5kZXggPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wbGF5QmVhdEF0KG5leHRMb29wVGltZSwgYmVhdHNbdGhpcy5iZWF0SW5kZXhdLCBicG0pO1xuICAgICAgICBuZXh0TG9vcFRpbWUgKz0gZGVuc2l0eSAqIHdob2xlTm90ZUR1cmF0aW9uO1xuICAgICAgfVxuICAgIH0sIDIyKTtcbiAgfVxuXG4gIHN0b3BQbGF5TG9vcCgpIHtcbiAgICB0aGlzLmxvb3BTdGFydGVkID0gZmFsc2U7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmxvb3BJbnRlcnZhbElEKTtcbiAgICB0aGlzLmNhbmNlbFF1ZXVlKCk7XG4gIH1cblxuICBnZXRUcmFja1N0YXRlKGtleSkge1xuICAgIGlmICghdGhpcy50cmFja1N0YXRlLmhhcyhrZXkpKSB7XG4gICAgICB0aGlzLnRyYWNrU3RhdGUuc2V0KGtleSwge1xuICAgICAgICBtdXRlZDogZmFsc2UsXG4gICAgICAgIHNvbG86IGZhbHNlLFxuICAgICAgICB2b2x1bWU6IDEsXG4gICAgICAgIHJldmVyYlNlbmQ6IDAsXG4gICAgICAgIGRlbGF5U2VuZDogMCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy50cmFja1N0YXRlLmdldChrZXkpO1xuICB9XG5cbiAgYXBwbHlUcmFja1N0YXRlKGtleSkge1xuICAgIGNvbnN0IG5vZGVzID0gdGhpcy5nZXRUcmFja05vZGVzKGtleSk7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFRyYWNrU3RhdGUoa2V5KTtcbiAgICBub2Rlcy5zdGF0ZSA9IHN0YXRlO1xuICAgIG5vZGVzLmRyeS5nYWluLnZhbHVlID0gc3RhdGUubXV0ZWQgPyAwIDogc3RhdGUudm9sdW1lO1xuICAgIG5vZGVzLnJldmVyYlNlbmQuZ2Fpbi52YWx1ZSA9IHN0YXRlLnJldmVyYlNlbmQ7XG4gICAgbm9kZXMuZGVsYXlTZW5kLmdhaW4udmFsdWUgPSBzdGF0ZS5kZWxheVNlbmQ7XG4gIH1cblxuICBnZXRUcmFja05vZGVzKGtleSkge1xuICAgIGlmICh0aGlzLnRyYWNrTm9kZXMuaGFzKGtleSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnRyYWNrTm9kZXMuZ2V0KGtleSk7XG4gICAgfVxuXG4gICAgY29uc3QgZHJ5ID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgIGNvbnN0IHJldmVyYlNlbmQgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgY29uc3QgZGVsYXlTZW5kID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpO1xuXG4gICAgZHJ5LmdhaW4udmFsdWUgPSAxO1xuICAgIHJldmVyYlNlbmQuZ2Fpbi52YWx1ZSA9IDA7XG4gICAgZGVsYXlTZW5kLmdhaW4udmFsdWUgPSAwO1xuXG4gICAgZHJ5LmNvbm5lY3QodGhpcy5lcXVhbGl6ZXIuaW5wdXQpO1xuICAgIHJldmVyYlNlbmQuY29ubmVjdCh0aGlzLmVjaG8uaW5wdXQpO1xuICAgIGRlbGF5U2VuZC5jb25uZWN0KHRoaXMuZGVsYXlJbnB1dCk7XG5cbiAgICBjb25zdCBub2RlcyA9IHsgZHJ5LCByZXZlcmJTZW5kLCBkZWxheVNlbmQgfTtcbiAgICB0aGlzLnRyYWNrTm9kZXMuc2V0KGtleSwgbm9kZXMpO1xuICAgIHRoaXMuYXBwbHlUcmFja1N0YXRlKGtleSk7XG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc2V0TXV0ZShrZXksIHZhbHVlKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFRyYWNrU3RhdGUoa2V5KTtcbiAgICBzdGF0ZS5tdXRlZCA9IEJvb2xlYW4odmFsdWUpO1xuICAgIHRoaXMuYXBwbHlUcmFja1N0YXRlKGtleSk7XG4gIH1cblxuICBzZXRTb2xvKGtleSwgdmFsdWUpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0VHJhY2tTdGF0ZShrZXkpO1xuICAgIHN0YXRlLnNvbG8gPSBCb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIHNldFZvbHVtZShrZXksIHZhbHVlKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFRyYWNrU3RhdGUoa2V5KTtcbiAgICBzdGF0ZS52b2x1bWUgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB2YWx1ZSkpO1xuICAgIHRoaXMuYXBwbHlUcmFja1N0YXRlKGtleSk7XG4gIH1cblxuICBzZXRSZXZlcmJTZW5kKGtleSwgdmFsdWUpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0VHJhY2tTdGF0ZShrZXkpO1xuICAgIHN0YXRlLnJldmVyYlNlbmQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB2YWx1ZSkpO1xuICAgIHRoaXMuYXBwbHlUcmFja1N0YXRlKGtleSk7XG4gIH1cblxuICBzZXREZWxheVNlbmQoa2V5LCB2YWx1ZSkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRUcmFja1N0YXRlKGtleSk7XG4gICAgc3RhdGUuZGVsYXlTZW5kID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdmFsdWUpKTtcbiAgICB0aGlzLmFwcGx5VHJhY2tTdGF0ZShrZXkpO1xuICB9XG5cbiAgc2V0RGVsYXlGZWVkYmFjayh2YWx1ZSkge1xuICAgIHRoaXMuZGVsYXlGZWVkYmFjay5nYWluLnZhbHVlID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMC43NSwgdmFsdWUpKTtcbiAgfVxuXG4gIHNldERlbGF5VGltZSh2YWx1ZSkge1xuICAgIHRoaXMuZGVsYXlEaXZpc2lvbiA9IE1hdGgubWF4KDAuMTI1LCBNYXRoLm1pbigwLjc1LCB2YWx1ZSkpO1xuICAgIHRoaXMudXBkYXRlRGVsYXlUaW1lKCk7XG4gIH1cblxuICB1cGRhdGVEZWxheVRpbWUoKSB7XG4gICAgY29uc3Qgd2hvbGUgPSAoNCAqIDYwKSAvICh0aGlzLmJwbSB8fCAxMjcpO1xuICAgIHRoaXMuZGVsYXkuZGVsYXlUaW1lLnZhbHVlID0gd2hvbGUgKiB0aGlzLmRlbGF5RGl2aXNpb247XG4gIH1cblxuICBnZXRUcmFja0tleXMoKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLnRyYWNrTm9kZXMua2V5cygpXTtcbiAgfVxuXG4gIGNhbmNlbFF1ZXVlKCkge1xuICAgIHRoaXMucGxheWVyLmNhbmNlbFF1ZXVlKHRoaXMuYXVkaW9Db250ZXh0KTtcbiAgfVxuXG4gIGNhY2hlSW5zdHJ1bWVudChpbmZvKSB7XG4gICAgaWYgKGluZm8gJiYgIXdpbmRvd1tpbmZvLnZhcmlhYmxlXSkge1xuICAgICAgaWYgKHdpbmRvd1tpbmZvLnZhcmlhYmxlICsgMTI3XSkgcmV0dXJuO1xuICAgICAgd2luZG93W2luZm8udmFyaWFibGUgKyAxMjddID0gdHJ1ZTtcbiAgICAgIHRoaXMucGxheWVyLmxvYWRlci5zdGFydExvYWQodGhpcy5hdWRpb0NvbnRleHQsIGluZm8udXJsLCBpbmZvLnZhcmlhYmxlKTtcbiAgICAgIHRoaXMucGxheWVyLmxvYWRlci53YWl0TG9hZCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjYWNoZWQnLCBpbmZvLnRpdGxlKTtcbiAgICAgICAgZGVsZXRlIHdpbmRvd1tpbmZvLnZhcmlhYmxlICsgMTI3XTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHBsYXlEcnVtKHdoZW4sIGRydW0sIG5vZGVzKSB7XG4gICAgY29uc3QgW2luc3RydW1lbnQsIGxldmVsXSA9IGRydW07XG4gICAgY29uc3QgaW5mbyA9IHRoaXMucGxheWVyLmxvYWRlci5kcnVtSW5mbyhpbnN0cnVtZW50KTtcblxuICAgIGlmICh3aW5kb3dbaW5mby52YXJpYWJsZV0pIHtcbiAgICAgIGNvbnN0IHBpdGNoID0gd2luZG93W2luZm8udmFyaWFibGVdLnpvbmVzWzBdLmtleVJhbmdlTG93O1xuICAgICAgY29uc3QgZ2FpbiA9ICgxIC8gMTI3KSAqIGxldmVsO1xuICAgICAgaWYgKGxldmVsID4gMCkgdGhpcy5xdWV1ZVRvVHJhY2tOb2Rlcyh3aW5kb3dbaW5mby52YXJpYWJsZV0sIHdoZW4sIHBpdGNoLCAxIC8gNjQsIGdhaW4sIG5vZGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jYWNoZUluc3RydW1lbnQoaW5mbyk7XG4gICAgfVxuICB9XG5cbiAgcXVldWVUb1RyYWNrTm9kZXMoZm9udCwgd2hlbiwgcGl0Y2gsIGR1cmF0aW9uLCBnYWluLCBub2Rlcykge1xuICAgIHRoaXMucGxheWVyLnF1ZXVlV2F2ZVRhYmxlKHRoaXMuYXVkaW9Db250ZXh0LCBub2Rlcy5kcnksIGZvbnQsIHdoZW4sIHBpdGNoLCBkdXJhdGlvbiwgZ2Fpbik7XG4gICAgaWYgKG5vZGVzLnJldmVyYlNlbmQuZ2Fpbi52YWx1ZSA+IDApIHtcbiAgICAgIHRoaXMucGxheWVyLnF1ZXVlV2F2ZVRhYmxlKHRoaXMuYXVkaW9Db250ZXh0LCBub2Rlcy5yZXZlcmJTZW5kLCBmb250LCB3aGVuLCBwaXRjaCwgZHVyYXRpb24sIGdhaW4pO1xuICAgIH1cbiAgICBpZiAobm9kZXMuZGVsYXlTZW5kLmdhaW4udmFsdWUgPiAwKSB7XG4gICAgICB0aGlzLnBsYXllci5xdWV1ZVdhdmVUYWJsZSh0aGlzLmF1ZGlvQ29udGV4dCwgbm9kZXMuZGVsYXlTZW5kLCBmb250LCB3aGVuLCBwaXRjaCwgZHVyYXRpb24sIGdhaW4pO1xuICAgIH1cbiAgfVxuXG4gIHBsYXlCZWF0QXQod2hlbiwgYmVhdCwgYnBtKSB7XG4gICAgaWYgKCFiZWF0KSByZXR1cm47XG4gICAgY29uc3QgTiA9ICg0ICogNjApIC8gYnBtO1xuICAgIGNvbnN0IGhhc1NvbG8gPSBbLi4udGhpcy50cmFja1N0YXRlLnZhbHVlcygpXS5zb21lKGl0ZW0gPT4gaXRlbS5zb2xvKTtcblxuICAgIGJlYXQuZm9yRWFjaCgoc2xvdCwga2V5KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0VHJhY2tTdGF0ZShrZXkpO1xuICAgICAgaWYgKHN0YXRlLm11dGVkKSByZXR1cm47XG4gICAgICBpZiAoaGFzU29sbyAmJiAhc3RhdGUuc29sbykgcmV0dXJuO1xuXG4gICAgICBjb25zdCBub2RlcyA9IHRoaXMuZ2V0VHJhY2tOb2RlcyhrZXkpO1xuICAgICAgbGV0IHRvdWNoZWQgPSBmYWxzZTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbG90LmRydW1zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHRoaXMucGxheURydW0od2hlbiwgc2xvdC5kcnVtc1tpXSwgbm9kZXMpO1xuICAgICAgICB0b3VjaGVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgc2xvdC5ub3Rlcy5mb3JFYWNoKG5vdGUgPT4ge1xuICAgICAgICBjb25zdCBbaW5zdHJ1bWVudCwgcGl0Y2hlcywgZHVyYXRpb24sIGxldmVsXSA9IG5vdGU7XG4gICAgICAgIGNvbnN0IGluZm8gPSB0aGlzLnBsYXllci5sb2FkZXIuaW5zdHJ1bWVudEluZm8oaW5zdHJ1bWVudCk7XG4gICAgICAgIGlmICh3aW5kb3dbaW5mby52YXJpYWJsZV0pIHtcbiAgICAgICAgICB0aGlzLnF1ZXVlVG9UcmFja05vZGVzKHdpbmRvd1tpbmZvLnZhcmlhYmxlXSwgd2hlbiwgcGl0Y2hlcywgZHVyYXRpb24gKiBOLCAoMSAvIDEyNykgKiBsZXZlbCwgbm9kZXMpO1xuICAgICAgICAgIHRvdWNoZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2FjaGVJbnN0cnVtZW50KGluZm8pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHRvdWNoZWQgJiYgdHlwZW9mIHRoaXMub25CZWF0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMub25CZWF0KGtleSwgd2hlbiwgdGhpcy5iZWF0SW5kZXgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCAiLyoqXG4gKiBUYWtlIGEgc3RyaW5nIGlucHV0IGFuZCBjaGVjayBpZiBpdCBzIGEgbm90ZSBuYW1lIG9yIG5vdFxuICogQHBhcmFtICB7U3RyaW5nfSBzdHIgTm90ZSBuYW1lIGUuZy4gYzRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IFJldHVybiB0cnVlIGZvciBjNCBvciByZXR1cm4gZmFsc2UgZm9yIHNvbWV0aGluZyBsaWtlIENNXG4gKi9cbmV4cG9ydCBjb25zdCBpc05vdGUgPSAoc3RyOiBzdHJpbmcpOiBib29sZWFuID0+XG4gIC9eW2EtZ0EtR10oPzojfGIpP1xcZCQvLnRlc3Qoc3RyKTtcblxuLyoqXG4gKiBUYWtlIGEgU3RyaW5nIGlucHV0IHN1Y2ggYXMgeHh4W3h4W3h4XV1cbiAqIGFuZCByZXR1cm4gYW4gQXJyYXkgYXMgWyd4JywgJ3gnLCAneCcsIFsneCcsICd4JywgWyd4JywgJ3gnXV1dXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbmV4cG9ydCBjb25zdCBleHBhbmRTdHIgPSAoc3RyOiBzdHJpbmcpOiBhbnkgPT4ge1xuICBzdHIgPSBKU09OLnN0cmluZ2lmeShzdHIuc3BsaXQoJycpKTtcbiAgc3RyID0gc3RyLnJlcGxhY2UoLyxcIlxcW1wiLC9nLCAnLCBbJyk7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKC9cIlxcW1wiLC9nLCAnWycpO1xuICBzdHIgPSBzdHIucmVwbGFjZSgvLFwiXFxdXCIvZywgJ10nKTtcbiAgcmV0dXJuIEpTT04ucGFyc2Uoc3RyKTtcbn07XG5cbi8qKlxuICogQmFzaWMgQXJyYXkgcmFuZG9taXplclxuICogQHBhcmFtICB7QXJyYXl9IGFyclxuICogQHBhcmFtICB7Ym9vbGVhbn0gZnVsbFNodWZmbGUgRW5zdXJlIG5vIGVsZW1lbnRzIHJlbWFpbiBpbiBvbGQgcGxhY2VcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5leHBvcnQgY29uc3Qgc2h1ZmZsZSA9IChhcnI6IGFueVtdLCBmdWxsU2h1ZmZsZTogYm9vbGVhbiA9IHRydWUpOiBzdHJpbmdbXSA9PiB7XG4gIGNvbnN0IGxhc3RJbmRleDogbnVtYmVyID0gYXJyLmxlbmd0aCAtIDE7XG5cbiAgLy8gU2h1ZmZsZSBhbGdvcml0aG0gYnkgUmljaGFyZCBEdXJzdGVuZmVsZCAoRG9uYWxkIEUuIEtudXRoKSwgYWxzbyBSb25hbGQgRmlzaGVyIGFuZCBGcmFuayBZYXRlcy5cbiAgLy8gXCJGdWxsIFNodWZmbGVcIiBNb2RpZmljYXRpb24gdG8gZW5zdXJlIG5vIGVsZW1lbnRzIHJlbWFpbiBpbiB0aGVpciBvcmlnaW5hbCBwbGFjZSAoYnkgdGFraW5nIGVhY2ggZWxlbWVudCBvbmNlXG4gIC8vIGFuZCBzd2FwcGluZyB3aXRoIGFueSByZW1haW5pbmcgZWxlbWVudHMpXG4gIGFyci5mb3JFYWNoKChlbCwgaWR4OiBudW1iZXIpID0+IHtcbiAgICBpZiAoaWR4ID49IGxhc3RJbmRleCkge1xuICAgICAgLy8gTm8gc2h1ZmZsaW5nIGxhc3QgZWxlbWVudFxuICAgICAgLy8gT25lIGJlZm9yZSBsYXN0IGlzIGFsd2F5cyBzd2FwcGVkIHdpdGggbGFzdCBhdCB0aGUgZW5kIG9mIHRoZSBsb29wXG4gICAgICAvLyBTaW5jZSBwcmV2aW91cyBzd2FwcyBjYW4gbW92ZSBsYXN0IGVsZW1lbnQgaW50byBvdGhlciBwbGFjZXMsIHRoZXJlIGlzIHN0aWxsIGEgcmFuZG9tIHNodWZmbGUgb2YgbGFzdCBlbGVtZW50XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFN3YXAgZWwgd2l0aCBvbmUgb2YgdGhlIGhpZ2hlciBlbGVtZW50cyByYW5kb21seVxuICAgIGxldCBybmQ7XG4gICAgcm5kID0gZnVsbFNodWZmbGVcbiAgICAgID8gLy8gUGljayByYW5kb20gbnVtYmVyIGZyb20gaWR4KzEgdG8gbGFzdEluZGV4IChNb2RpZmllZCBhbGdvcml0aG0sIChOLTEpISBjb21iaW5hdGlvbnMpXG4gICAgICAgIC8vIE1hdGgucmFuZG9tIC0+IFswLCAxKSAtPiBbMCwgbGFzdEluZGV4LWlkeCApIC0tZmxvb3ItPiBbMCwgbGFzdEluZGV4LWlkeC0xXVxuICAgICAgICAvLyBybmQgPSBbMCwgbGFzdEluZGV4LWlkeC0xXSArIDEgKyBpZHggPSBbMSArIGlkeCwgbGFzdEluZGV4XVxuICAgICAgICAvLyAoT3JpZ2luYWwgYWxnb3JpdGhtIHdvdWxkIHBpY2sgcm5kID0gW2lkeCwgbGFzdEluZGV4XSwgdGh1cyBhbnkgZWxlbWVudCBjb3VsZCBhcnJpdmUgYmFjayBpbnRvIGl0cyBzbG90KVxuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobGFzdEluZGV4IC0gaWR4KSkgKyAxICsgaWR4XG4gICAgICA6IC8vIFBpY2sgcmFuZG9tIG51bWJlciBmcm9tIGlkeCB0byBsYXN0SW5kZXggKFVubW9kaWZpZWQgUmljaGFyZCBEdXJzdGVuZmVsZCwgTiEgY29tYmluYXRpb25zKVxuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobGFzdEluZGV4ICsgMSAtIGlkeCkpICsgaWR4O1xuICAgIGFycltpZHhdID0gYXJyW3JuZF07XG4gICAgYXJyW3JuZF0gPSBlbDtcbiAgfSk7XG5cbiAgcmV0dXJuIGFycjtcbn07XG5cbi8qKlxuICogUmV0dXJuIGFuIGFycmF5IG9mIG51bWJlcnMgcmVsYXRpdmUgdG8gbWF4TGV2ZWwgfHwgMTI3IG9yZGVyZWQgaW4gYSBTaW5lIHdhdmUgZm9ybWF0XG4gKiBUaGlzIGlzIHVzZWQgYnkgdGhlIGBzaXp6bGVgIHBhcmFtIG9mIHRoZSBgY2xpcGAgbWV0aG9kIHRvIGFkZCBhIHJ1ZGltZW50YXJ5IHZhcmlhdGlvbiB0byB0aGUgYWNjZW50IG9mIGVhY2ggbm90ZVxuICogQHBhcmFtIHtOdW1iZXJ9IG1heExldmVsIEEgbnVtYmVyIGJldHdlZW4gbm90IG1vcmUgdGhhbiAxMjdcbiAqIEByZXR1cm4ge0FycmF5fSAgRXhhbXBsZSBvdXRwdXQgWzYzLCA5MCwgMTEwLCAxMjcsIDExMCwgOTAsIDYzLCAwLCA2MywgOTAsIDExMCwgMTI3LCAxMTAsIDkwLCA2MywgMF1cbiAqL1xuZXhwb3J0IGNvbnN0IHNpenpsZU1hcCA9IChtYXhMZXZlbDogbnVtYmVyID0gMTI3KTogbnVtYmVyW10gPT4ge1xuICBjb25zdCBwaSA9IE1hdGguUEk7XG4gIGNvbnN0IHBpQXJyOiBudW1iZXJbXSA9IFtcbiAgICBwaSAvIDYsXG4gICAgcGkgLyA0LFxuICAgIHBpIC8gMyxcbiAgICBwaSAvIDIsXG4gICAgKDIgKiBwaSkgLyAzLFxuICAgICgzICogcGkpIC8gNCxcbiAgICAoNSAqIHBpKSAvIDYsXG4gICAgcGksXG4gIF07XG4gIGNvbnN0IHBpQXJyUmV2OiBudW1iZXJbXSA9IFtcbiAgICAwLFxuICAgIHBpIC8gNixcbiAgICBwaSAvIDQsXG4gICAgcGkgLyAzLFxuICAgIHBpIC8gMixcbiAgICAoMiAqIHBpKSAvIDMsXG4gICAgKDMgKiBwaSkgLyA0LFxuICAgICg1ICogcGkpIC8gNixcbiAgXTtcbiAgcGlBcnJSZXYucmV2ZXJzZSgpO1xuICBjb25zdCBhcnI6IG51bWJlcltdID0gcGlBcnIuY29uY2F0KHBpQXJyUmV2KTtcbiAgcmV0dXJuIGFyci5tYXAoZWxlbWVudCA9PiBNYXRoLnJvdW5kKE1hdGguc2luKGVsZW1lbnQpICogbWF4TGV2ZWwpKTtcbn07XG5cbi8qKlxuICogUGljayBvbmUgaXRlbSByYW5kb21seSBmcm9tIGFuIGFycmF5IGFuZCByZXR1cm4gaXRcbiAqIEBwYXJhbSBhcnJcbiAqL1xuZXhwb3J0IGNvbnN0IHBpY2tPbmUgPSAoYXJyOiBhbnlbXSkgPT5cbiAgYXJyLmxlbmd0aCA+IDEgPyBhcnJbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV0gOiBhcnJbMF07XG5cbi8qKlxuICogQm9vbGVhbiBnZW5lcmF0b3JcbiAqL1xuZXhwb3J0IGNvbnN0IGRpY2UgPSAoKSA9PiAhIU1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG5cbi8qKlxuICogUG9seWZpbGwgZm9yIEFycmF5LnByb3RvdHlwZS5mbGF0XG4gKi9cbmV4cG9ydCBjb25zdCBmbGF0ID0gKGFycjogYW55W11bXSkgPT5cbiAgYXJyLnJlZHVjZSgoYWNjLCB2YWwpID0+IGFjYy5jb25jYXQodmFsKSwgW10pO1xuIiwgImltcG9ydCB7IHNjYWxlIH0gZnJvbSAnaGFybW9uaWNzJztcbmltcG9ydCB7IHBpY2tPbmUsIGRpY2UgfSBmcm9tICcuL3V0aWxzJztcblxuLyoqXG4gKiBHZXQgdGhlIGNob3JkcyB0aGF0IGdvIHdpdGggYSBnaXZlbiBzY2FsZS9tb2RlXG4gKiBUaGlzIGlzIHVzZWZ1bCBvbmx5IGluIGNhc2UgeW91IHdhbnQgdG8gY2hlY2sgd2hhdCBjaG9yZHMgd29yayB3aXRoIGEgc2NhbGUvbW9kZVxuICogc28gdGhhdCB5b3UgY2FuIGNvbWUgdXAgd2l0aCBjaG9yZCBwcm9ncmVzc2lvbnNcbiAqIEBwYXJhbSAge1N0cmluZ30gbW9kZSBlLmcuIG1ham9yXG4gKiBAcmV0dXJuIHtBcnJheX0gZS5nLlsnSScsICdpaScsICdpaWknLCAnSVYnLCAnVicsICd2aScsICd2aWlcdTAwQjAnXVxuICovXG5leHBvcnQgY29uc3QgZ2V0Q2hvcmREZWdyZWVzID0gKG1vZGU6IHN0cmluZykgPT4ge1xuICBjb25zdCB0aGVSb21hbnM6IE5WUDxzdHJpbmdbXT4gPSB7XG4gICAgaW9uaWFuOiBbJ0knLCAnaWknLCAnaWlpJywgJ0lWJywgJ1YnLCAndmknLCAndmlpXHUwMEIwJ10sXG4gICAgZG9yaWFuOiBbJ2knLCAnaWknLCAnSUlJJywgJ0lWJywgJ3YnLCAndmlcdTAwQjAnLCAnVklJJ10sXG4gICAgcGhyeWdpYW46IFsnaScsICdJSScsICdJSUknLCAnaXYnLCAndlx1MDBCMCcsICdWSScsICd2aWknXSxcbiAgICBseWRpYW46IFsnSScsICdJSScsICdpaWknLCAnaXZcdTAwQjAnLCAnVicsICd2aScsICd2aWknXSxcbiAgICBtaXhvbHlkaWFuOiBbJ0knLCAnaWknLCAnaWlpXHUwMEIwJywgJ0lWJywgJ3YnLCAndmknLCAnVklJJ10sXG4gICAgYWVvbGlhbjogWydpJywgJ2lpXHUwMEIwJywgJ0lJSScsICdpdicsICd2JywgJ1ZJJywgJ1ZJSSddLFxuICAgIGxvY3JpYW46IFsnaVx1MDBCMCcsICdJSScsICdpaWknLCAnaXYnLCAnVicsICdWSScsICd2aWknXSxcbiAgICAnbWVsb2RpYyBtaW5vcic6IFsnaScsICdpaScsICdJSUkrJywgJ0lWJywgJ1YnLCAndmlcdTAwQjAnLCAndmlpXHUwMEIwJ10sXG4gICAgJ2hhcm1vbmljIG1pbm9yJzogWydpJywgJ2lpXHUwMEIwJywgJ0lJSSsnLCAnaXYnLCAnVicsICdWSScsICd2aWlcdTAwQjAnXSxcbiAgfTtcbiAgdGhlUm9tYW5zLm1ham9yID0gdGhlUm9tYW5zLmlvbmlhbjtcbiAgdGhlUm9tYW5zLm1pbm9yID0gdGhlUm9tYW5zLmFlb2xpYW47XG5cbiAgcmV0dXJuIHRoZVJvbWFuc1ttb2RlXSB8fCBbXTtcbn07XG5cbmNvbnN0IGlkeEJ5RGVncmVlOiBOVlA8bnVtYmVyPiA9IHtcbiAgaTogMCxcbiAgaWk6IDEsXG4gIGlpaTogMixcbiAgaXY6IDMsXG4gIHY6IDQsXG4gIHZpOiA1LFxuICB2aWk6IDYsXG59O1xuXG4vKipcbiAqIEdldCBhIGNob3JkIG5hbWUgZnJvbSBkZWdyZWVcbiAqIEBwYXJhbSAge1N0cmluZ30gcm9tYW4gZS5nLiBpaSBPUiBpaVx1MDBCMCBPUiBWN1xuICogQHJldHVybiB7U3RyaW5nfSBlLmcuIG0gT1IgbTdiNSBPUiBNYWo3XG4gKi9cbmNvbnN0IGdldENob3JkTmFtZSA9IChyb21hbjogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgLy8gcmVtb3ZlIGFueSBub24gY2hhcmFjdGVyXG4gIGNvbnN0IHN0ciA9IHJvbWFuLnJlcGxhY2UoL1xcVy9nLCAnJyk7XG4gIGxldCBwcmVmaXggPSAnTSc7XG4gIC8vIGNoZWNrIGlmIGl0IHMgbG93ZXJjYXNlXG4gIGlmIChzdHIudG9Mb3dlckNhc2UoKSA9PT0gc3RyKSB7XG4gICAgcHJlZml4ID0gJ20nO1xuICB9XG4gIGlmIChyb21hbi5pbmRleE9mKCdcdTAwQjAnKSA+IC0xKSB7XG4gICAgcmV0dXJuIHByZWZpeCArICc3YjUnO1xuICB9XG4gIGlmIChyb21hbi5pbmRleE9mKCcrJykgPiAtMSkge1xuICAgIHJldHVybiBwcmVmaXggKyAnIzUnO1xuICB9XG5cbiAgaWYgKHJvbWFuLmluZGV4T2YoJzcnKSA+IC0xKSB7XG4gICAgcmV0dXJuIHByZWZpeCA9PT0gJ00nID8gJ21hajcnIDogJ203JztcbiAgfVxuXG4gIHJldHVybiBwcmVmaXg7XG59O1xuXG4vKipcbiAqIFRha2UgdGhlIHNwZWNpZmllZCBzY2FsZSBhbmQgZGVncmVlcyBhbmQgcmV0dXJuIHRoZSBjaG9yZCBuYW1lcyBmb3IgdGhlbVxuICogVGhlc2UgY2FuIGJlIHVzZWQgYXMgdGhlIHZhbHVlIGZvciB0aGUgYG5vdGVzYCBwYXJhbSBvZiB0aGUgYGNsaXBgIG1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IG5vdGVPY3RhdmVTY2FsZSBlLmcuICdDNCBtYWpvcidcbiAqIEBwYXJhbSAge1N0cmluZ30gY2hvcmREZWdyZXNzIGUuZy4gJ0kgSVYgViBJVidcbiAqIEByZXR1cm4ge1N0cmluZ30gZS5nLiAnQ00gRk0gR00gRk0nXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRDaG9yZHNCeVByb2dyZXNzaW9uID0gKFxuICBub3RlT2N0YXZlU2NhbGU6IHN0cmluZyxcbiAgY2hvcmREZWdyZXNzOiBzdHJpbmdcbik6IHN0cmluZyA9PiB7XG4gIC8vIFNldCB0aGUgb2N0YXZlIGlmIG1pc3NpbmdcbiAgLy8gRm9yIGV4YW1wbGUgaWYgdGhlIG1ldGhvZCB3YXMgY2FsbGVkIHdpdGggYEMgbWFqb3JgIGluc3RlYWQgb2YgYEM0IG1ham9yYCwgdGhlbiBhZGQgdGhlIDRcbiAgY29uc3Qgbm90ZU9jdGF2ZVNjYWxlQXJyID0gbm90ZU9jdGF2ZVNjYWxlLnNwbGl0KCcgJyk7XG4gIGlmICghbm90ZU9jdGF2ZVNjYWxlQXJyWzBdLm1hdGNoKC9cXGQvKSkge1xuICAgIG5vdGVPY3RhdmVTY2FsZUFyclswXSArPSAnNCc7XG4gICAgbm90ZU9jdGF2ZVNjYWxlID0gbm90ZU9jdGF2ZVNjYWxlQXJyLmpvaW4oJyAnKTtcbiAgfVxuXG4gIC8vIEdldCB0aGUgc2NhbGUgZnJvbSB0aGUgZ2l2ZW4gbm90ZSBhbmQgc2NhbGUvbW9kZSBjb21iaW5hdGlvblxuICBjb25zdCBtb2RlID0gc2NhbGUobm90ZU9jdGF2ZVNjYWxlKTtcbiAgY29uc3QgY2hvcmREZWdyZWVzQXJyID0gY2hvcmREZWdyZXNzLnJlcGxhY2UoL1xccyosK1xccyovZywgJyAnKS5zcGxpdCgnICcpO1xuICAvLyBOb3cgd2UgaGF2ZSBzb21ldGhpbmcgbGlrZSBbJ2knLCAnaWknLCAnSVYnXVxuICAvLyBDb252ZXJ0IGl0IHRvIGEgY2hvcmQgZmFtaWx5IHN1Y2ggYXMgWydDbScsICdEbScsICdGTSddXG4gIGNvbnN0IGNob3JkRmFtaWx5ID0gY2hvcmREZWdyZWVzQXJyLm1hcCgocm9tYW4sIGlkeCkgPT4ge1xuICAgIGNvbnN0IGNob3JkTmFtZSA9IGdldENob3JkTmFtZShyb21hbik7IC8vIGUuZy4gbVxuICAgIC8vIGdldCB0aGUgaW5kZXggdG8gYmUgdXNlZCBieSByZW1vdmluZyBhbnkgZGlnaXQgb3Igbm9uIGFscGhhYmV0IGNoYXJhY3RlclxuICAgIGNvbnN0IHNjYWxlSWQgPSBpZHhCeURlZ3JlZVtyb21hbi5yZXBsYWNlKC9cXFd8XFxkL2csICcnKS50b0xvd2VyQ2FzZSgpXTsgLy8gZS5nLiAwXG4gICAgLy8gZ2V0IHRoZSBub3RlIGl0c2VsZlxuICAgIGNvbnN0IG5vdGUgPSBtb2RlW3NjYWxlSWRdOyAvLyBlLmcuIENcbiAgICAvLyBnZXQgdGhlIG9jdGF2ZSBvZiB0aGUgbm90ZTtcbiAgICBjb25zdCBvY3QgPSBub3RlLnJlcGxhY2UoL1xcRCsvLCAnJyk7IC8vIGUuZy4gNFxuICAgIC8vIG5vdyBnZXQgdGhlIGNob3JkXG4gICAgcmV0dXJuIG5vdGUucmVwbGFjZSgvXFxkLywgJycpICsgY2hvcmROYW1lICsgJ18nICsgb2N0O1xuICB9KTtcblxuICByZXR1cm4gY2hvcmRGYW1pbHkudG9TdHJpbmcoKS5yZXBsYWNlKC8sL2csICcgJyk7XG59O1xuXG5jb25zdCBnZXRQcm9nRmFjdG9yeSA9ICh7IFQsIFAsIEQgfTogVFBEKSA9PiB7XG4gIHJldHVybiAoY291bnQ6IG51bWJlciA9IDQpID0+IHtcbiAgICBjb25zdCBjaG9yZHMgPSBbXTtcblxuICAgIC8vIFB1c2ggcm9vdC90b25pY1xuICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoVCkpO1xuXG4gICAgbGV0IGkgPSAxO1xuXG4gICAgLy8gUGljayBhIHByZWRvbWluYW50XG4gICAgaWYgKGkgPCBjb3VudCAtIDEpIHtcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoUCkpO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIC8vIFRyeSBhbm90aGVyIHByZWRvbWluYW50XG4gICAgaWYgKGkgPCBjb3VudCAtIDEgJiYgZGljZSgpKSB7XG4gICAgICBjaG9yZHMucHVzaChwaWNrT25lKFApKTtcbiAgICAgIGkrKztcbiAgICB9XG5cbiAgICAvLy8vLy8vLy8gNCBvciBtb3JlLy8vLy8vLy8vL1xuICAgIGlmIChpIDwgY291bnQgLSAxKSB7XG4gICAgICAvLyBQaWNrIGEgZG9taW5hbnRcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoRCkpO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIGlmIChpIDwgY291bnQgLSAxKSB7XG4gICAgICAvLyBQaWNrIGEgcHJlZG9taW5hbnRcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoUCkpO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIGlmIChpIDwgY291bnQgLSAxKSB7XG4gICAgICAvLyBQaWNrIGEgZG9taW5hbnRcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoRCkpO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIC8vIFBpY2sgYSBwcmVkb21pbmFudCBpZiBwb3NzaWJsZVxuICAgIGlmIChpIDwgY291bnQgLSAxICYmIGRpY2UoKSkge1xuICAgICAgY2hvcmRzLnB1c2gocGlja09uZShQKSk7XG4gICAgICBpKys7XG4gICAgfVxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIC8vIEZpbGwgdGhlIHJlc3Qgd2l0aCBkb21pbmFudFxuICAgIHdoaWxlIChpIDwgY291bnQpIHtcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoRCkpO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIHJldHVybiBjaG9yZHM7XG4gIH07XG59O1xuXG5jb25zdCBNID0gZ2V0UHJvZ0ZhY3RvcnkoeyBUOiBbJ0knLCAndmknXSwgUDogWydpaScsICdJViddLCBEOiBbJ1YnXSB9KTtcbmNvbnN0IG0gPSBnZXRQcm9nRmFjdG9yeSh7IFQ6IFsnaScsICdWSSddLCBQOiBbJ2lpJywgJ2l2J10sIEQ6IFsnViddIH0pO1xuXG4vKipcbiAqIEdlbmVyYXRlIGEgY2hvcmQgcHJvZ3Jlc3Npb24gYmFzZWQgb24gYmFzaWMgbXVzaWMgdGhlb3J5XG4gKiB3aGVyZSB3ZSBmb2xsb3cgdG9uaWMgdG8gb3B0aW9uYWxseSBwcmVkb21pbmFudCBhbmQgdGhlbiBkb21pbmFudFxuICogYW5kIHRoZW4gcmFuZG9tbHkgdG8gcHJlZG9taW5hbnQgYW5kIGNvbnRpbnVlIHRoaXMgdGlsbCB3ZSByZWFjaCBgY291bnRgXG4gKiBAcGFyYW0gc2NhbGVUeXBlIGUuZy4gTSAoZm9yIG1ham9yIGNob3JkIHByb2dyZXNzaW9uKSwgbSAoZm9yIG1pbm9yIGNob3JkIHByb2dyZXNzaW9uKVxuICogQHBhcmFtIGNvdW50IGUuZy4gNFxuICovXG5leHBvcnQgY29uc3QgcHJvZ3Jlc3Npb24gPSAoc2NhbGVUeXBlOiBwcm9ncmVzc2lvblNjYWxlLCBjb3VudDogbnVtYmVyID0gNCkgPT4ge1xuICBpZiAoc2NhbGVUeXBlID09PSAnbWFqb3InIHx8IHNjYWxlVHlwZSA9PT0gJ00nKSB7XG4gICAgcmV0dXJuIE0oY291bnQpO1xuICB9XG5cbiAgaWYgKHNjYWxlVHlwZSA9PT0gJ21pbm9yJyB8fCBzY2FsZVR5cGUgPT09ICdtJykge1xuICAgIHJldHVybiBtKGNvdW50KTtcbiAgfVxufTtcbiIsICJpbXBvcnQgeyBpbmxpbmVDaG9yZCB9IGZyb20gJ2hhcm1vbmljcyc7XG5cbmV4cG9ydCBjb25zdCBSRV9TRVBBUkFUT1IgPSAvXFx8LztcbmV4cG9ydCBjb25zdCBSRV9QQVRURVJOID0gL14oPzpbeF8tXXxcXFsuKz9cXF0pKyQvO1xuZXhwb3J0IGNvbnN0IFJFX05VTUJFUiA9IC9eKD86XFwuP1xcZCt8XFxkKyg/OlxcLlxcZCspPykkLztcbmV4cG9ydCBjb25zdCBSRV9DSE9SRCA9IC9eW2EtZ0EtR11bXiNcXHNdKlxcZCsoPzpcXC5cXC4pPyQvO1xuZXhwb3J0IGNvbnN0IFJFX05PVEUgPSAvXlthLWdBLUddWyNiXT9cXGQrJC87XG5leHBvcnQgY29uc3QgUkVfTU9ERSA9IC9eKD8hW2l2SVZdezEsM30pW2Etel17Mix9LztcbmV4cG9ydCBjb25zdCBSRV9QUk9HID0gL15baXZJVl17MSwzfVx1MDBCMD8kLztcbmV4cG9ydCBjb25zdCBSRV9UUklNID0gL1xcLiskLztcblxuY29uc3QgQ0FDSEUgPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0KHZhbHVlKSB7XG4gIGxldCBkYXRhID0gW107XG4gIHRyeSB7XG4gICAgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlLnNwbGl0KC8oPz1bXFxkW1xcXXhfLV0pLykpO1xuICAgIGRhdGEgPSBkYXRhLnJlcGxhY2UoLyxcIlxcW1wiLC9nLCAnLCBbJyk7XG4gICAgZGF0YSA9IGRhdGEucmVwbGFjZSgvXCJcXFtcIiwvZywgJ1snKTtcbiAgICBkYXRhID0gZGF0YS5yZXBsYWNlKC8sXCJcXF1cIi9nLCAnXScpO1xuICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gaWdub3JlXG4gIH1cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZXZlbCh2YWx1ZSkge1xuICBpZiAoIUNBQ0hFW3ZhbHVlXSkge1xuICAgIGlmICh2YWx1ZS5pbmNsdWRlcygnJScpKSB7XG4gICAgICBDQUNIRVt2YWx1ZV0gPSAxMjcgKiBwYXJzZUZsb2F0KGAuJHt2YWx1ZX1gKTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlLmluY2x1ZGVzKCcvJykpIHtcbiAgICAgIGNvbnN0IFthLCBiXSA9IHZhbHVlLnNwbGl0KCcvJyk7XG5cbiAgICAgIENBQ0hFW3ZhbHVlXSA9IGEgLyBiO1xuICAgIH0gZWxzZSBpZiAodmFsdWUuaW5jbHVkZXMoJyonKSkge1xuICAgICAgY29uc3QgW2EsIGJdID0gdmFsdWUuc3BsaXQoJyonKTtcblxuICAgICAgQ0FDSEVbdmFsdWVdID0gYSAqIGI7XG4gICAgfSBlbHNlIHtcbiAgICAgIENBQ0hFW3ZhbHVlXSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gQ0FDSEVbdmFsdWVdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGUocmUsIHZhbHVlKSB7XG4gIGlmICghQ0FDSEVbcmUuc291cmNlICsgdmFsdWVdKSB7XG4gICAgQ0FDSEVbcmUuc291cmNlICsgdmFsdWVdID0gcmUudGVzdCh2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIENBQ0hFW3JlLnNvdXJjZSArIHZhbHVlXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvZ3Jlc3Npb24odmFsdWUpIHtcbiAgcmV0dXJuIHZhbGlkYXRlKFJFX1BST0csIHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGF0dGVybih2YWx1ZSkge1xuICByZXR1cm4gdmFsaWRhdGUoUkVfUEFUVEVSTiwgdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgcmV0dXJuIHZhbGlkYXRlKFJFX05VTUJFUiwgdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDaG9yZCh2YWx1ZSkge1xuICByZXR1cm4gdmFsaWRhdGUoUkVfQ0hPUkQsIHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTm90ZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsaWRhdGUoUkVfTk9URSwgdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNNb2RlKHZhbHVlKSB7XG4gIHJldHVybiB2YWxpZGF0ZShSRV9NT0RFLCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUeXBlKHZhbHVlKSB7XG4gIGNvbnN0IGtleSA9IGBUJHt2YWx1ZX1gO1xuICBpZiAoIUNBQ0hFW2tleV0pIHtcbiAgICBpZiAoaXNOb3RlKHZhbHVlKSkgQ0FDSEVba2V5XSA9ICdub3RlJztcbiAgICBlbHNlIGlmIChpc0Nob3JkKHZhbHVlKSkgQ0FDSEVba2V5XSA9ICdjaG9yZCc7XG4gICAgZWxzZSBpZiAoaXNQYXR0ZXJuKHZhbHVlKSkgQ0FDSEVba2V5XSA9ICdwYXR0ZXJuJztcbiAgICBlbHNlIGlmIChpc01vZGUodmFsdWUpKSBDQUNIRVtrZXldID0gJ21vZGUnO1xuICAgIGVsc2UgaWYgKGlzTnVtYmVyKHZhbHVlKSkgQ0FDSEVba2V5XSA9ICdudW1iZXInO1xuICAgIGVsc2UgQ0FDSEVba2V5XSA9ICd2YWx1ZSc7XG4gIH1cbiAgcmV0dXJuIENBQ0hFW2tleV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm0oZXhwcmVzc2lvbikge1xuICBpZiAoIWV4cHJlc3Npb24gfHwgdHlwZW9mIGV4cHJlc3Npb24gIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RpbmcgYSB2YWxpZCBzdHJpbmcsIGdpdmVuICcke2V4cHJlc3Npb259J2ApO1xuICB9XG5cbiAgaWYgKENBQ0hFW2AkJHtleHByZXNzaW9ufWBdKSByZXR1cm4gQ0FDSEVbYCQke2V4cHJlc3Npb259YF07XG5cbiAgY29uc3QgdG9rZW5zID0gZXhwcmVzc2lvbi5zcGxpdCgvXFxzKy8pO1xuXG4gIGlmICghdG9rZW5zLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0aW5nIGEgdmFsaWQgZXhwcmVzc2lvbiwgZ2l2ZW4gJyR7ZXhwcmVzc2lvbn0nYCk7XG4gIH1cblxuICBjb25zdCBhc3QgPSBbXTtcbiAgY29uc3QgY2FycnkgPSBbXTtcblxuICBmdW5jdGlvbiBhZGQodHlwZSwgdmFsdWUpIHtcbiAgICBjb25zdCBpdGVtID0geyB0eXBlLCB2YWx1ZSB9O1xuXG4gICAgaWYgKHR5cGUgPT09ICdudW1iZXInICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGl0ZW0udmFsdWUgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gbGV2ZWwodmFsdWUpIDogdmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09ICdjaG9yZCcgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgaXRlbS52YWx1ZSA9IGlubGluZUNob3JkKHZhbHVlLnJlcGxhY2UoUkVfVFJJTSwgJycpKTtcblxuICAgICAgaWYgKHZhbHVlLmluY2x1ZGVzKCcuLicpKSB7XG4gICAgICAgIGl0ZW0udW5mb2xkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gJ3ZhbHVlJyAmJiB2YWx1ZS5pbmRleE9mKCd4JykgPiAtMSkge1xuICAgICAgY29uc3QgeCA9IHZhbHVlLnNwbGl0KCd4Jyk7XG5cbiAgICAgIGlmICghKGlzTnVtYmVyKHhbMF0pICYmIGlzTnVtYmVyKHhbMV0pKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGluZyB2YWxpZCBudW1iZXJzIGZvciAke3R5cGV9LCBnaXZlbiAnJHt2YWx1ZX0nYCk7XG4gICAgICB9XG5cbiAgICAgIGl0ZW0udmFsdWUgPSBwYXJzZUludCh4WzBdLCAxMCk7XG4gICAgICBpdGVtLnJlcGVhdCA9IHBhcnNlSW50KHhbMV0sIDEwKTtcbiAgICAgIGl0ZW0udHlwZSA9ICdudW1iZXInO1xuICAgIH1cblxuICAgIGFzdC5wdXNoKGl0ZW0pO1xuICB9XG5cbiAgdG9rZW5zLnJlZHVjZSgocHJldiwgY3VyLCBpKSA9PiB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBjb25zdCBuZXh0ID0gdG9rZW5zW2kgKyAxXTtcbiAgICBjb25zdCBsYXN0ID0gYXN0W2FzdC5sZW5ndGggLSAxXSB8fCB7fTtcblxuICAgIGlmIChSRV9TRVBBUkFUT1IudGVzdChjdXIpKSB7XG4gICAgICBhZGQoJ2Nob3JkJywgY3VyLnNwbGl0KFJFX1NFUEFSQVRPUikpO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjdXIgPT09ICdzdHJpbmcnICYmIChcbiAgICAgIChjdXIuaW5jbHVkZXMoJy8nKSAmJiBjdXIuaW5kZXhPZignLycpID4gMClcbiAgICAgIHx8IChjdXIuaW5jbHVkZXMoJyonKSAmJiBjdXIuaW5kZXhPZignKicpID4gMClcbiAgICAgIHx8IChjdXIuaW5jbHVkZXMoJyUnKSAmJiBjdXIuaW5kZXhPZignJScpID4gMClcbiAgICApKSB7XG4gICAgICBhZGQoJ251bWJlcicsIGxldmVsKGN1cikpO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKGN1ci5pbmRleE9mKCclJykgPiAtMSkge1xuICAgICAgaWYgKGN1ciA9PT0gJyUnKSB7XG4gICAgICAgIGlmICghbGFzdC50eXBlKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIGV4cHJlc3Npb24gdG8gcmVwZWF0LCBnaXZlbiAnJHt0b2tlbnMuc2xpY2UoMCwgaSkuam9pbignICcpfSdgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhc3QucmVwZWF0ID0gbGFzdC5yZXBlYXQgfHwgMTtcbiAgICAgICAgbGFzdC5yZXBlYXQgKz0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZCgncGFyYW0nLCBjdXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAoaXNQcm9ncmVzc2lvbihjdXIpKSB7XG4gICAgICBsYXN0LnZhbHVlICs9IGAgJHtjdXJ9YDtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmIChjdXIuY2hhckF0KCkgPT09ICcjJykge1xuICAgICAgYWRkKCdjaGFubmVsJywgY3VyKTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmIChpc05vdGUoY3VyKSB8fCBpc0Nob3JkKGN1cikgfHwgaXNNb2RlKGN1cikgfHwgaXNOdW1iZXIoY3VyKSkge1xuICAgICAgY2FycnkucHVzaChjdXIpO1xuXG4gICAgICBpZiAoXG4gICAgICAgICFuZXh0XG4gICAgICAgIHx8IGNhcnJ5Lmxlbmd0aCA9PT0gM1xuICAgICAgICB8fCAhKGlzTm90ZShuZXh0KSB8fCBpc01vZGUobmV4dCkgfHwgaXNOdW1iZXIobmV4dCkpXG4gICAgICApIHtcbiAgICAgICAgY29uc3Qgb2xkID0gY2Fycnkuc3BsaWNlKDAsIGNhcnJ5Lmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IHRlc3QgPSBvbGRbMF07XG5cbiAgICAgICAgbGV0IG1vZGUgPSBvbGRbMV07XG4gICAgICAgIGxldCBvY3RhdmUgPSBvbGRbMl07XG5cbiAgICAgICAgaWYgKCFvY3RhdmUgJiYgaXNOdW1iZXIobW9kZSkpIHtcbiAgICAgICAgICBvY3RhdmUgPSBtb2RlO1xuICAgICAgICAgIG1vZGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgdGVzdC5sZW5ndGggPCAyXG4gICAgICAgICAgJiYgaXNOb3RlKHRlc3QpXG4gICAgICAgICAgJiYgKGlzTW9kZShtb2RlKSB8fCBpc051bWJlcihvY3RhdmUpKVxuICAgICAgICApIHtcbiAgICAgICAgICBhZGQoJ21vZGUnLCBvbGQuam9pbignICcpKTtcbiAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgfVxuXG4gICAgICAgIG9sZC5mb3JFYWNoKHggPT4ge1xuICAgICAgICAgIGFkZCh4Lmxlbmd0aCA+IDEgfHwgIWlzTm90ZSh4KSA/IGdldFR5cGUoeCkgOiAnbW9kZScsIHgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY3VyID09PSAnc3RyaW5nJyAmJiBjdXIuaW5kZXhPZignLi4nKSA+IC0xKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IGN1ci5zcGxpdCgnLi4nKTtcbiAgICAgIGNvbnN0IG1pbiA9IHBhcnRzWzBdIHx8IDE7XG4gICAgICBjb25zdCBtYXggPSBwYXJ0c1sxXSB8fCBJbmZpbml0eTtcblxuICAgICAgdHlwZSA9ICdzbGljZSc7XG4gICAgICBjdXIgPSBbbWluLCBtYXhdO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY3VyID09PSAnc3RyaW5nJyAmJiAoY3VyLmNoYXJBdCgpID09PSAnLycgfHwgY3VyLmNoYXJBdCgpID09PSAnKicpKSB7XG4gICAgICBjb25zdCBvcGVyYXRvciA9IGN1ci5jaGFyQXQoKSA9PT0gJy8nID8gJ2RpdmlkZScgOiAnbXVsdGlwbHknO1xuICAgICAgY29uc3QgbnVtYmVyID0gY3VyLnN1YnN0cigxKTtcblxuICAgICAgaWYgKCFpc051bWJlcihudW1iZXIpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0aW5nIGEgdmFsaWQgZXhwcmVzc2lvbiB0byAke29wZXJhdG9yfSwgZ2l2ZW4gJyR7dG9rZW5zLnNsaWNlKDAsIGkpLmpvaW4oJyAnKX0gJHtjdXJ9J2ApO1xuICAgICAgfVxuXG4gICAgICBhZGQob3BlcmF0b3IsIHBhcnNlRmxvYXQobnVtYmVyKSk7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAoIXR5cGUgJiYgZ2V0VHlwZShjdXIpID09PSAndmFsdWUnICYmIEFycmF5LmlzQXJyYXkobGFzdC52YWx1ZSkpIHtcbiAgICAgIGxhc3QudmFsdWVbMV0gPSBsYXN0LnZhbHVlWzFdIHx8ICcnO1xuICAgICAgbGFzdC52YWx1ZVsxXSArPSBsYXN0LnZhbHVlWzFdID8gJyAnIDogJyc7XG4gICAgICBsYXN0LnZhbHVlWzFdICs9IGN1cjtcbiAgICAgIHJldHVybiBjdXI7XG4gICAgfVxuXG4gICAgYWRkKHR5cGUgfHwgZ2V0VHlwZShjdXIpLCB0eXBlb2YgY3VyID09PSAnc3RyaW5nJyAmJiBpc051bWJlcihjdXIpID8gcGFyc2VJbnQoY3VyLCAxMCkgOiBjdXIpO1xuICAgIHJldHVybiBjdXI7XG4gIH0sIG51bGwpO1xuXG4gIENBQ0hFW2AkJHtleHByZXNzaW9ufWBdID0gYXN0O1xuICByZXR1cm4gYXN0O1xufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5yZWR1Y2UoKHByZXYsIGN1cikgPT4gcHJldi5jb25jYXQoY3VyKSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwZWF0KHZhbHVlLCB0aW1lcykge1xuICBjb25zdCBvdXQgPSBbXTtcblxuICB3aGlsZSAodGltZXMpIHtcbiAgICBvdXQucHVzaCh2YWx1ZSk7XG4gICAgdGltZXMgLT0gMTtcbiAgfVxuXG4gIHJldHVybiBvdXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5nZShtaW4sIG1heCwgc3RlcCkge1xuICBjb25zdCBhY2MgPSBbXTtcblxuICBpZiAoIXN0ZXApIHtcbiAgICBmb3IgKGxldCBpID0gbWluOyBpIDw9IG1heDsgaSArPSAxKSB7XG4gICAgICBhY2MucHVzaChpKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZGlmZiA9IChtYXggLSBtaW4pIC8gc3RlcDtcblxuICAgIGZvciAobGV0IGkgPSBtaW47IGkgPD0gbWF4OyBpICs9IGRpZmYpIHtcbiAgICAgIGFjYy5wdXNoKGkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhY2M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZSh2YWx1ZSkge1xuICBpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHJldHVybiB2YWx1ZTtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSByZXR1cm4gdmFsdWUubWFwKGNsb25lKTtcblxuICBjb25zdCBjb3B5ID0ge307XG5cbiAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goa2V5ID0+IHtcbiAgICBjb3B5W2tleV0gPSBjbG9uZSh2YWx1ZVtrZXldKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvcHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB6aXAoYSwgYiwgY2IpIHtcbiAgY29uc3QgbWF4ID0gTWF0aC5tYXgoYS5sZW5ndGgsIGIubGVuZ3RoKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG1heDsgaSArPSAxKSB7XG4gICAgaWYgKHR5cGVvZiBhW2ldICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgYltpXSAhPT0gJ3VuZGVmaW5lZCcpIGNiKGFbaV0sIGJbaV0pO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgZ2V0Q2hvcmRzQnlQcm9ncmVzc2lvbiB9IGZyb20gJ3NjcmliYmxldHVuZS9zcmMvcHJvZ3Jlc3Npb24nO1xuaW1wb3J0IHsgc2NhbGUsIGlubGluZUNob3JkIH0gZnJvbSAnaGFybW9uaWNzJztcblxuaW1wb3J0IHsgaXNQcm9ncmVzc2lvbiwgdHJhbnNmb3JtIH0gZnJvbSAnLi90b2tlbml6ZSc7XG5pbXBvcnQgeyByZXBlYXQsIGNsb25lIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2UoaW5wdXQsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShpbnB1dCkpIHJldHVybiBpbnB1dDtcblxuICBjb25zdCBmbiA9IHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyA/IGNhbGxiYWNrIDogKHYgPT4gdik7XG5cbiAgbGV0IHNraXA7XG4gIHJldHVybiBpbnB1dC5yZWR1Y2UoKHByZXYsIGN1ciwgaSkgPT4ge1xuICAgIGNvbnN0IGxhc3QgPSBwcmV2W3ByZXYubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgbmV4dCA9IGlucHV0W2kgKyAxXSB8fCB7fTtcbiAgICBjb25zdCBvbGQgPSBpbnB1dFtpIC0gMV0gfHwge307XG5cbiAgICBpZiAoc2tpcCkge1xuICAgICAgc2tpcCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY3VyKSkge1xuICAgICAgcHJldi5wdXNoKC4uLmN1cik7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAoY3VyLnR5cGUgPT09ICd2YWx1ZScgJiYgY3VyLnZhbHVlID09PSAnLicpIHtcbiAgICAgIGlmIChwcmV2Lmxlbmd0aCA+IDApIHByZXYucHVzaChwcmV2WzBdKTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmIChvbGQudHlwZSA9PT0gJ3BhdHRlcm4nICYmIGN1ci50eXBlID09PSAncGF0dGVybicpIHtcbiAgICAgIHByZXZbcHJldi5sZW5ndGggLSAxXSArPSBjdXIudmFsdWU7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGN1ci50eXBlKSB7XG4gICAgICBjYXNlICdwYXR0ZXJuJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdub3RlJzpcbiAgICAgICAgaWYgKGN1ci5yZXBlYXQpIHByZXYucHVzaCguLi5yZXBlYXQoY3VyLnZhbHVlLCBjdXIucmVwZWF0KSk7XG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY3VyLnZhbHVlKSkgcHJldi5wdXNoKC4uLmN1ci52YWx1ZSk7XG4gICAgICAgIGVsc2UgcHJldi5wdXNoKGN1ci52YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdjaG9yZCc6XG4gICAgICAgIGlmIChjdXIucmVwZWF0KSBwcmV2LnB1c2goLi4ucmVwZWF0KGN1ci52YWx1ZSwgY3VyLnJlcGVhdCkpO1xuICAgICAgICBlbHNlIGlmIChjdXIudW5mb2xkKSBwcmV2LnB1c2goLi4uY3VyLnZhbHVlKTtcbiAgICAgICAgZWxzZSBwcmV2LnB1c2goY3VyLnZhbHVlKTtcblxuICAgICAgICBpZiAoY3VyLnR5cGUgIT09ICdjaG9yZCcpIHtcbiAgICAgICAgICBza2lwID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZGl2aWRlJzpcbiAgICAgICAgcHJldltwcmV2Lmxlbmd0aCAtIDFdIC89IGN1ci52YWx1ZTtcbiAgICAgICAgcmV0dXJuIHByZXY7XG5cbiAgICAgIGNhc2UgJ211bHRpcGx5JzpcbiAgICAgICAgcHJldi5wdXNoKC4uLnJlcGVhdChsYXN0LCBjdXIudmFsdWUgLSAxKSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdzbGljZSc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGxhc3QpKSB7XG4gICAgICAgICAgcHJldltwcmV2Lmxlbmd0aCAtIDFdID0gbGFzdC5zbGljZShjdXIudmFsdWVbMF0gLSAxLCBjdXIudmFsdWVbMV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByZXYucHVzaChjdXIudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdtb2RlJzpcbiAgICAgICAgcHJldltwcmV2Lmxlbmd0aCAtIDFdID0gYCR7bGFzdH0gJHtjdXIudmFsdWV9YDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3BhcmFtJzpcbiAgICAgIGNhc2UgJ3ZhbHVlJzoge1xuICAgICAgICBsZXQgdmFsdWUgPSBudWxsO1xuICAgICAgICBpZiAodHlwZW9mIGNvbnRleHRbY3VyLnZhbHVlXSAhPT0gJ3VuZGVmaW5lZCcpIHZhbHVlID0gY29udGV4dFtjdXIudmFsdWVdO1xuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgZXhwcmVzc2lvbiBmb3IgJyR7Y3VyLnZhbHVlfSdgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZVswXSAmJiB2YWx1ZVswXS50eXBlKSB7XG4gICAgICAgICAgdmFsdWUgPSByZWR1Y2UodmFsdWUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGN1ci5yZXBlYXQpIHtcbiAgICAgICAgICAgIHByZXYucHVzaCguLi5yZXBlYXQodmFsdWUsIGN1ci5yZXBlYXQpLnJlZHVjZSgoX3ByZXYsIF9jdXIpID0+IHtcbiAgICAgICAgICAgICAgX3ByZXYucHVzaCguLi5fY3VyKTtcbiAgICAgICAgICAgICAgcmV0dXJuIF9wcmV2O1xuICAgICAgICAgICAgfSwgW10pKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJldi5wdXNoKC4uLnZhbHVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbHVlID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV07XG4gICAgICAgIGlmIChjdXIucmVwZWF0KSBwcmV2LnB1c2goLi4ucmVwZWF0KHZhbHVlLCBjdXIucmVwZWF0KSk7XG4gICAgICAgIGVsc2UgcHJldi5wdXNoKC4uLnZhbHVlKTtcbiAgICAgIH0gYnJlYWs7XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5oYW5kbGVkICcke2N1ci50eXBlfSdgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJldjtcbiAgfSwgW10pLnJlZHVjZSgobWVtbywgaXRlbSkgPT4ge1xuICAgIGNvbnN0IHByZXYgPSBtZW1vW21lbW8ubGVuZ3RoIC0gMV07XG5cbiAgICBpZiAoXG4gICAgICBBcnJheS5pc0FycmF5KHByZXYpXG4gICAgICAmJiBBcnJheS5pc0FycmF5KGl0ZW0pXG4gICAgICAmJiB0eXBlb2YgaXRlbVswXSA9PT0gJ251bWJlcidcbiAgICAgICYmIGl0ZW0ubGVuZ3RoID09PSAyXG4gICAgKSB7XG4gICAgICBjb25zdCBvZmZzZXQgPSBpdGVtWzFdID09PSBJbmZpbml0eSA/IHByZXYubGVuZ3RoIDogaXRlbVsxXTtcbiAgICAgIGNvbnN0IFtiYXNlLCBsZW5ndGhdID0gU3RyaW5nKG9mZnNldCkuc3BsaXQoL1xcRC8pO1xuXG4gICAgICBtZW1vLnBvcCgpO1xuICAgICAgbWVtby5wdXNoKC4uLnByZXYuc2xpY2UoaXRlbVswXSAtIDEsIGJhc2UpKTtcblxuICAgICAgaWYgKFN0cmluZyhvZmZzZXQpLmluY2x1ZGVzKCc+JykpIHtcbiAgICAgICAgY29uc3QgcGFydHMgPSBtZW1vLnNsaWNlKC1sZW5ndGggLSAxKTtcblxuICAgICAgICBwYXJ0cy5wb3AoKTtcbiAgICAgICAgcGFydHMucmV2ZXJzZSgpO1xuICAgICAgICBtZW1vLnB1c2goLi4ucGFydHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1lbW87XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJyAmJiBpdGVtLmluY2x1ZGVzKCcgJykpIHtcbiAgICAgIGNvbnN0IGNodW5rcyA9IGl0ZW0uc3BsaXQoJyAnKTtcblxuICAgICAgaWYgKGNodW5rcy5zb21lKGlzUHJvZ3Jlc3Npb24pKSB7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IGNodW5rcy5maW5kSW5kZXgoaXNQcm9ncmVzc2lvbik7XG4gICAgICAgIGNvbnN0IFthLCBiXSA9IFtjaHVua3Muc2xpY2UoMCwgb2Zmc2V0KSwgY2h1bmtzLnNsaWNlKG9mZnNldCldO1xuXG4gICAgICAgIG1lbW8ucHVzaChnZXRDaG9yZHNCeVByb2dyZXNzaW9uKGEuam9pbignICcpLCBiLmpvaW4oJyAnKSkuc3BsaXQoJyAnKS5tYXAoeCA9PiBmbihpbmxpbmVDaG9yZCh4KSkpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lbW8ucHVzaChmbihzY2FsZShpdGVtKSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtZW1vLnB1c2goZm4oaXRlbSkpO1xuICAgIH1cbiAgICByZXR1cm4gbWVtbztcbiAgfSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2UoYnVmZmVyKSB7XG4gIGNvbnN0IHRyYWNrcyA9IHt9O1xuICBjb25zdCBtYWluID0gW107XG4gIGNvbnN0IGRhdGEgPSB7fTtcblxuICBsZXQgY2hhbm5lbCA9IG51bGw7XG4gIGxldCBwcmVmaXggPSAnJztcbiAgbGV0IHRyYWNrO1xuICBsZXQgaW5mbyA9IHt9O1xuICBidWZmZXIuc3BsaXQoL1xccj9cXG4vZykuZm9yRWFjaCgobGluZSwgbnRoKSA9PiB7XG4gICAgbGluZSA9IGxpbmUucmVwbGFjZSgvOy4rPyQvLCAnJykudHJpbSgpO1xuICAgIGlmICghbGluZSkgcmV0dXJuO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlmIChsaW5lLmNoYXJBdCgpID09PSAnJScpIHtcbiAgICAgICAgY29uc3QgW25hbWUsIC4uLnZhbHVlXSA9IGxpbmUuc3BsaXQoL1xccysvKTtcblxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGRhdGFbbmFtZV0gPSB0cmFuc2Zvcm0odmFsdWUuam9pbignICcpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChsaW5lLmluZGV4T2YoJyMgJykgPj0gMCkge1xuICAgICAgICBpZiAodHJhY2spIHtcbiAgICAgICAgICB0cmFja3NbdHJhY2tdID0gaW5mbztcbiAgICAgICAgICBjaGFubmVsID0gbnVsbDtcbiAgICAgICAgICBwcmVmaXggPSAnJztcbiAgICAgICAgICBpbmZvID0ge307XG4gICAgICAgIH1cblxuICAgICAgICB0cmFjayA9IGxpbmUuc3BsaXQoL1xccysvKS5zbGljZSgxKS5qb2luKCcgJyk7XG4gICAgICB9IGVsc2UgaWYgKGxpbmUuY2hhckF0KCkgPT09ICc+Jykge1xuICAgICAgICBtYWluLnB1c2godHJhbnNmb3JtKGxpbmUuc3Vic3RyKDEpLnRyaW0oKSkpO1xuICAgICAgfSBlbHNlIGlmIChsaW5lLmNoYXJBdCgpID09PSAnQCcpIHtcbiAgICAgICAgY29uc3QgW25hbWUsIC4uLmV4dGVuZF0gPSBsaW5lLnN1YnN0cigxKS5zcGxpdCgnICcpO1xuXG4gICAgICAgIGlmIChleHRlbmRbMF0gPT09ICc8Jykge1xuICAgICAgICAgIGNvbnN0IGtleSA9IGAke2V4dGVuZFsxXX0jYDtcblxuICAgICAgICAgIE9iamVjdC5rZXlzKGluZm8pXG4gICAgICAgICAgICAuZmlsdGVyKHggPT4geC5pbmRleE9mKGtleSkgPT09IDApXG4gICAgICAgICAgICAuZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgICAgaW5mb1tgJHtuYW1lfSMke2suc3BsaXQoJyMnKVsxXX1gXSA9IGNsb25lKGluZm9ba10pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJlZml4ID0gbmFtZTtcbiAgICAgIH0gZWxzZSBpZiAobGluZS5pbmRleE9mKCc6JykgPiAwKSB7XG4gICAgICAgIGNvbnN0IFtuYW1lLCAuLi52YWx1ZV0gPSBsaW5lLnNwbGl0KCc6Jyk7XG5cbiAgICAgICAgZGF0YVtuYW1lXSA9IHRyYW5zZm9ybSh2YWx1ZS5qb2luKCc6JykudHJpbSgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRpY2tzID0gdHJhbnNmb3JtKGxpbmUpO1xuXG4gICAgICAgIGlmICghdGlja3NbMF0gfHwgdGlja3NbMF0udHlwZSAhPT0gJ2NoYW5uZWwnKSB7XG4gICAgICAgICAgaWYgKCFjaGFubmVsKSB0aHJvdyBuZXcgVHlwZUVycm9yKGBNaXNzaW5nIGNoYW5uZWwsIGdpdmVuICcke2xpbmV9J2ApO1xuXG4gICAgICAgICAgY29uc3QgZW5kID0gaW5mb1tjaGFubmVsXVtpbmZvW2NoYW5uZWxdLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgICAgaWYgKCFlbmQudmFsdWVzKSBlbmQudmFsdWVzID0gW3sgdHlwZTogJ251bWJlcicsIHZhbHVlOiAxMjcgfV07XG4gICAgICAgICAgZW5kLnZhbHVlcy5wdXNoKC4uLnRpY2tzKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBub3RlcyA9IHRpY2tzLmZpbmRJbmRleCh4ID0+IFsnbm90ZScsICdjaG9yZCcsICdwYXJhbSddLmluY2x1ZGVzKHgudHlwZSkpO1xuICAgICAgICBjb25zdCBpbmRleCA9IHRpY2tzLmZpbmRJbmRleCh4ID0+IHgudHlwZSA9PT0gJ3BhdHRlcm4nKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBpbmRleCA+IDAgPyB0aWNrcy5zbGljZShpbmRleCkgOiB0aWNrcztcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdmFsdWUuZmluZEluZGV4KHggPT4geC50eXBlICE9PSAncGF0dGVybicpO1xuICAgICAgICBjb25zdCBpbnB1dHMgPSB0aWNrcy5zbGljZSgwLCBpbmRleCA+IDAgPyBpbmRleCA6IDEpO1xuXG4gICAgICAgIGNoYW5uZWwgPSBwcmVmaXggKyBpbnB1dHNbMF0udmFsdWU7XG4gICAgICAgIGlmICghaW5mb1tjaGFubmVsXSkge1xuICAgICAgICAgIGluZm9bY2hhbm5lbF0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzcGVjO1xuICAgICAgICBpZiAobm90ZXMgPiAwICYmIGluZGV4ID09PSAtMSkge1xuICAgICAgICAgIGNvbnN0IGVuZCA9IGluZm9bY2hhbm5lbF1baW5mb1tjaGFubmVsXS5sZW5ndGggLSAxXTtcblxuICAgICAgICAgIGVuZC5kYXRhID0gdmFsdWUuc2xpY2Uobm90ZXMpO1xuICAgICAgICAgIHNwZWMgPSB7XG4gICAgICAgICAgICBpbnB1dDogZW5kLmlucHV0LFxuICAgICAgICAgICAgdmFsdWVzOiB2YWx1ZS5zbGljZSgxLCBub3RlcyksXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChvZmZzZXQgPiAwKSB7XG4gICAgICAgICAgc3BlYyA9IHtcbiAgICAgICAgICAgIGRhdGE6IHZhbHVlLnNsaWNlKG9mZnNldCksXG4gICAgICAgICAgICBpbnB1dDogdmFsdWUuc2xpY2UoMCwgb2Zmc2V0KSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKG9mZnNldCA9PT0gMCkge1xuICAgICAgICAgIHNwZWMgPSB7IHZhbHVlczogdmFsdWUuc2xpY2UoMSkgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzcGVjID0geyBpbnB1dDogdmFsdWUgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbnB1dHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHNwZWMudmFsdWVzID0gaW5wdXRzLnNsaWNlKDEpO1xuICAgICAgICB9XG4gICAgICAgIGluZm9bY2hhbm5lbF0ucHVzaChzcGVjKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zdCBtc2cgPSB0eXBlb2YgZSA9PT0gJ3N0cmluZycgPyBlIDogZS5tZXNzYWdlO1xuXG4gICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYCR7bXNnfVxcbiAgYXQgbGluZSAke250aCArIDF9XFxuJHtsaW5lfWApO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHRyYWNrKSB7XG4gICAgdHJhY2tzW3RyYWNrXSA9IGluZm87XG4gIH1cbiAgcmV0dXJuIHsgbWFpbiwgZGF0YSwgdHJhY2tzIH07XG59XG4iLCAiZnVuY3Rpb24gY2xhc3NpZnlMaW5lKGxpbmUpIHtcbiAgY29uc3QgdHJpbW1lZCA9IGxpbmUudHJpbSgpO1xuICBpZiAoIXRyaW1tZWQpIHJldHVybiAnYmxhbmsnO1xuICBpZiAoL14lLy50ZXN0KHRyaW1tZWQpKSByZXR1cm4gJ3Zhcic7XG4gIGlmICgvXkAvLnRlc3QodHJpbW1lZCkpIHJldHVybiAnc2VjdGlvbic7XG4gIGlmICgvXiNcXGQrLy50ZXN0KHRyaW1tZWQpKSByZXR1cm4gJ2luc3RydW1lbnQnO1xuICBpZiAoL14jezEsMn1cXHMrLy50ZXN0KHRyaW1tZWQpKSByZXR1cm4gJ3RyYWNrJztcbiAgcmV0dXJuICdib2R5Jztcbn1cblxuZnVuY3Rpb24gbGluZUluZGV4QXRDdXJzb3IodGV4dCwgY3Vyc29yUG9zKSB7XG4gIGxldCBsaW5lID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLm1pbihjdXJzb3JQb3MsIHRleHQubGVuZ3RoKTsgaSArPSAxKSB7XG4gICAgaWYgKHRleHQuY2hhckF0KGkpID09PSAnXFxuJykgbGluZSArPSAxO1xuICB9XG4gIHJldHVybiBsaW5lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmxvY2tBdEN1cnNvcih0ZXh0LCBjdXJzb3JQb3MpIHtcbiAgY29uc3QgbGluZXMgPSBTdHJpbmcodGV4dCB8fCAnJykuc3BsaXQoJ1xcbicpO1xuICBpZiAoIWxpbmVzLmxlbmd0aCkge1xuICAgIHJldHVybiB7IHN0YXJ0TGluZTogMCwgZW5kTGluZTogMCwgdHlwZTogJ3RyYWNrJywgbmFtZTogJ2Jsb2NrJywgYmxvY2tUZXh0OiAnJyB9O1xuICB9XG5cbiAgbGV0IGN1cnNvckxpbmUgPSBsaW5lSW5kZXhBdEN1cnNvcih0ZXh0LCBjdXJzb3JQb3MpO1xuICBpZiAoY3Vyc29yTGluZSA+PSBsaW5lcy5sZW5ndGgpIGN1cnNvckxpbmUgPSBsaW5lcy5sZW5ndGggLSAxO1xuXG4gIHdoaWxlIChjdXJzb3JMaW5lID4gMCAmJiBjbGFzc2lmeUxpbmUobGluZXNbY3Vyc29yTGluZV0pID09PSAnYmxhbmsnKSB7XG4gICAgY3Vyc29yTGluZSAtPSAxO1xuICB9XG5cbiAgY29uc3QgY3VycmVudFR5cGUgPSBjbGFzc2lmeUxpbmUobGluZXNbY3Vyc29yTGluZV0pO1xuICBpZiAoY3VycmVudFR5cGUgPT09ICd2YXInKSB7XG4gICAgY29uc3QgbmFtZSA9IGxpbmVzW2N1cnNvckxpbmVdLnRyaW0oKS5zcGxpdCgvXFxzKy8pWzBdIHx8ICcldmFyJztcbiAgICByZXR1cm4ge1xuICAgICAgc3RhcnRMaW5lOiBjdXJzb3JMaW5lLFxuICAgICAgZW5kTGluZTogY3Vyc29yTGluZSxcbiAgICAgIHR5cGU6ICd2YXInLFxuICAgICAgbmFtZSxcbiAgICAgIGJsb2NrVGV4dDogbGluZXNbY3Vyc29yTGluZV0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHRyYWNrSGVhZGVyUGF0dGVybiA9IC9eI3sxLDJ9XFxzKy87XG4gIGNvbnN0IHNlY3Rpb25QYXR0ZXJuID0gL15ALztcblxuICBsZXQgc2VjdGlvblN0YXJ0ID0gLTE7XG4gIGZvciAobGV0IGkgPSBjdXJzb3JMaW5lOyBpID49IDA7IGkgLT0gMSkge1xuICAgIGNvbnN0IHR5cGUgPSBjbGFzc2lmeUxpbmUobGluZXNbaV0pO1xuICAgIGlmICh0eXBlID09PSAnYmxhbmsnIHx8IHR5cGUgPT09ICd0cmFjaycgfHwgdHlwZSA9PT0gJ3ZhcicpIGJyZWFrO1xuICAgIGlmIChzZWN0aW9uUGF0dGVybi50ZXN0KGxpbmVzW2ldLnRyaW0oKSkpIHtcbiAgICAgIHNlY3Rpb25TdGFydCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoc2VjdGlvblN0YXJ0ID49IDAgJiYgY3VycmVudFR5cGUgIT09ICd0cmFjaycpIHtcbiAgICBsZXQgZW5kID0gc2VjdGlvblN0YXJ0O1xuICAgIGZvciAobGV0IGkgPSBzZWN0aW9uU3RhcnQgKyAxOyBpIDwgbGluZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBjbGFzc2lmeUxpbmUobGluZXNbaV0pO1xuICAgICAgaWYgKHR5cGUgPT09ICdibGFuaycgfHwgdHlwZSA9PT0gJ3RyYWNrJyB8fCB0eXBlID09PSAndmFyJyB8fCB0eXBlID09PSAnc2VjdGlvbicpIGJyZWFrO1xuICAgICAgZW5kID0gaTtcbiAgICB9XG4gICAgY29uc3QgbmFtZSA9IGxpbmVzW3NlY3Rpb25TdGFydF0udHJpbSgpLnNwbGl0KC9cXHMrLylbMF0uc2xpY2UoMSkgfHwgJ3NlY3Rpb24nO1xuICAgIHJldHVybiB7XG4gICAgICBzdGFydExpbmU6IHNlY3Rpb25TdGFydCxcbiAgICAgIGVuZExpbmU6IGVuZCxcbiAgICAgIHR5cGU6ICdzZWN0aW9uJyxcbiAgICAgIG5hbWUsXG4gICAgICBibG9ja1RleHQ6IGxpbmVzLnNsaWNlKHNlY3Rpb25TdGFydCwgZW5kICsgMSkuam9pbignXFxuJyksXG4gICAgfTtcbiAgfVxuXG4gIGxldCBzdGFydCA9IDA7XG4gIGZvciAobGV0IGkgPSBjdXJzb3JMaW5lOyBpID49IDA7IGkgLT0gMSkge1xuICAgIGlmICh0cmFja0hlYWRlclBhdHRlcm4udGVzdChsaW5lc1tpXS50cmltKCkpKSB7XG4gICAgICBzdGFydCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKGNsYXNzaWZ5TGluZShsaW5lc1tpXSkgPT09ICdibGFuaycpIHtcbiAgICAgIHN0YXJ0ID0gaSArIDE7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBsZXQgZW5kID0gc3RhcnQ7XG4gIGZvciAobGV0IGkgPSBzdGFydCArIDE7IGkgPCBsaW5lcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHR5cGUgPSBjbGFzc2lmeUxpbmUobGluZXNbaV0pO1xuICAgIGlmICh0eXBlID09PSAnYmxhbmsnIHx8IHR5cGUgPT09ICd0cmFjaycgfHwgdHlwZSA9PT0gJ3ZhcicpIGJyZWFrO1xuICAgIGVuZCA9IGk7XG4gIH1cblxuICBjb25zdCBoZWFkZXIgPSBsaW5lc1tzdGFydF0udHJpbSgpO1xuICBjb25zdCBuYW1lID0gaGVhZGVyLnJlcGxhY2UoL14jezEsMn1cXHMrLywgJycpLnRyaW0oKSB8fCAndHJhY2snO1xuICByZXR1cm4ge1xuICAgIHN0YXJ0TGluZTogc3RhcnQsXG4gICAgZW5kTGluZTogZW5kLFxuICAgIHR5cGU6ICd0cmFjaycsXG4gICAgbmFtZSxcbiAgICBibG9ja1RleHQ6IGxpbmVzLnNsaWNlKHN0YXJ0LCBlbmQgKyAxKS5qb2luKCdcXG4nKSxcbiAgfTtcbn1cbiIsICJmdW5jdGlvbiBlc2ModmFsdWUpIHtcbiAgcmV0dXJuIFN0cmluZyh2YWx1ZSlcbiAgICAucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxuICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcbiAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xufVxuXG5mdW5jdGlvbiBzcGFuKGNscywgdmFsdWUsIGF0dHJzID0ge30pIHtcbiAgY29uc3QgZGF0YUF0dHJzID0gT2JqZWN0LmVudHJpZXMoYXR0cnMpXG4gICAgLm1hcCgoW2tleSwgYXR0clZhbHVlXSkgPT4gYCBkYXRhLSR7a2V5fT1cIiR7ZXNjKGF0dHJWYWx1ZSl9XCJgKVxuICAgIC5qb2luKCcnKTtcbiAgcmV0dXJuIGA8c3BhbiBjbGFzcz1cIiR7Y2xzfVwiJHtkYXRhQXR0cnN9PiR7ZXNjKHZhbHVlKX08L3NwYW4+YDtcbn1cblxuZnVuY3Rpb24gY2xhc3NpZnkodG9rZW4pIHtcbiAgaWYgKCF0b2tlbikgcmV0dXJuIG51bGw7XG4gIGlmICh0b2tlbiA9PT0gJzwnKSByZXR1cm4gJ3Rvay1pbmhlcml0JztcbiAgaWYgKHRva2VuID09PSAnJScpIHJldHVybiAndG9rLXZhci1yZWYnO1xuICBpZiAodG9rZW4uY2hhckF0KDApID09PSAnJScpIHJldHVybiAndG9rLXZhci1yZWYnO1xuICBpZiAoL15cXCpcXGQrJC8udGVzdCh0b2tlbikpIHJldHVybiAndG9rLXJlcGVhdCc7XG4gIGlmICgvXlt4X1xcLVxcW1xcXV0rJC8udGVzdCh0b2tlbikpIHJldHVybiAndG9rLXBhdHRlcm4nO1xuICBpZiAoL15bYS1nQS1HXVsjYl0/XFxkKyQvLnRlc3QodG9rZW4pKSByZXR1cm4gJ3Rvay1ub3RlJztcbiAgaWYgKHRva2VuLmluY2x1ZGVzKCd8JykpIHJldHVybiAndG9rLWNob3JkJztcbiAgaWYgKC9eKG1ham9yfG1pbm9yfHBocnlnaWFufGRvcmlhbnxtaXhvbHlkaWFufGxvY3JpYW58bHlkaWFuKSQvaS50ZXN0KHRva2VuKSkgcmV0dXJuICd0b2stbW9kZSc7XG4gIGlmICgvXig/Okl8SUl8SUlJfElWfFZ8Vkl8VklJfGl8aWl8aWlpfGl2fHZ8dml8dmlpKVx1MDBCMD8kLy50ZXN0KHRva2VuKSkgcmV0dXJuICd0b2stcHJvZ3Jlc3Npb24nO1xuICBpZiAoL14oPzpcXCtcXCt8XFwuXFwufD4+fFxcKlxcKikkLy50ZXN0KHRva2VuKSkgcmV0dXJuICd0b2stb3BlcmF0b3InO1xuICBpZiAoL14jXFxkKyQvLnRlc3QodG9rZW4pKSByZXR1cm4gJ3Rvay1jaGFubmVsJztcbiAgaWYgKC9eLT9cXGQrKFxcLlxcZCspPyQvLnRlc3QodG9rZW4pKSByZXR1cm4gJ3Rvay1udW1iZXInO1xuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVG9rZW4odG9rZW4pIHtcbiAgY29uc3QgY2xzID0gY2xhc3NpZnkodG9rZW4pO1xuICBpZiAoIWNscykgcmV0dXJuIGVzYyh0b2tlbik7XG4gIGlmIChjbHMgPT09ICd0b2stdmFyLXJlZicgJiYgdG9rZW4gIT09ICclJykgcmV0dXJuIHNwYW4oY2xzLCB0b2tlbiwgeyB2YXI6IHRva2VuIH0pO1xuICBpZiAoY2xzID09PSAndG9rLXZhci1yZWYnICYmIHRva2VuID09PSAnJScpIHJldHVybiBzcGFuKGNscywgdG9rZW4sIHsgcmVwZWF0TGFzdDogJzEnIH0pO1xuICBpZiAoY2xzID09PSAndG9rLWNoYW5uZWwnKSByZXR1cm4gc3BhbihjbHMsIHRva2VuLCB7IGluc3RydW1lbnQ6IHRva2VuLnNsaWNlKDEpIH0pO1xuICBpZiAoY2xzID09PSAndG9rLW1vZGUnKSByZXR1cm4gc3BhbihjbHMsIHRva2VuLCB7IG1vZGU6IHRva2VuLnRvTG93ZXJDYXNlKCkgfSk7XG4gIGlmIChjbHMgPT09ICd0b2stcGF0dGVybicpIHJldHVybiBzcGFuKGNscywgdG9rZW4sIHsgcGF0dGVybjogJzEnIH0pO1xuICBpZiAoY2xzID09PSAndG9rLW5vdGUnKSByZXR1cm4gc3BhbihjbHMsIHRva2VuLCB7IG5vdGU6IHRva2VuIH0pO1xuICBpZiAoY2xzID09PSAndG9rLWNob3JkJykgcmV0dXJuIHNwYW4oY2xzLCB0b2tlbiwgeyBjaG9yZDogdG9rZW4gfSk7XG4gIGlmIChjbHMgPT09ICd0b2stbnVtYmVyJykgcmV0dXJuIHNwYW4oY2xzLCB0b2tlbiwgeyBudW1iZXI6IHRva2VuIH0pO1xuICBpZiAoY2xzID09PSAndG9rLXJlcGVhdCcpIHJldHVybiBzcGFuKGNscywgdG9rZW4sIHsgcmVwZWF0OiB0b2tlbi5zbGljZSgxKSB9KTtcbiAgcmV0dXJuIHNwYW4oY2xzLCB0b2tlbik7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRva2Vucyh0ZXh0KSB7XG4gIHJldHVybiB0ZXh0XG4gICAgLnNwbGl0KC8oXFxzKykvKVxuICAgIC5tYXAocGFydCA9PiAoL1xccysvLnRlc3QocGFydCkgPyBwYXJ0IDogcmVuZGVyVG9rZW4ocGFydCkpKVxuICAgIC5qb2luKCcnKTtcbn1cblxuZnVuY3Rpb24gc3BsaXRDb21tZW50KGxpbmUpIHtcbiAgY29uc3QgaWR4ID0gbGluZS5pbmRleE9mKCc7Jyk7XG4gIGlmIChpZHggPCAwKSByZXR1cm4gW2xpbmUsICcnXTtcbiAgcmV0dXJuIFtsaW5lLnNsaWNlKDAsIGlkeCksIGxpbmUuc2xpY2UoaWR4KV07XG59XG5cbmZ1bmN0aW9uIHJlbmRlckJhc2UoYmFzZSkge1xuICBpZiAoIWJhc2UudHJpbSgpKSByZXR1cm4gZXNjKGJhc2UpO1xuXG4gIGlmICgvXlxccyojI1xccysvLnRlc3QoYmFzZSkpIHtcbiAgICByZXR1cm4gYmFzZS5yZXBsYWNlKC9eKFxccyojI1xccyspKC4qKSQvLCAoXywgcDEsIHAyKSA9PiBgJHtlc2MocDEpfSR7c3BhbigndG9rLXN1YnRyYWNrJywgcDIpfWApO1xuICB9XG4gIGlmICgvXlxccyojXFxzKy8udGVzdChiYXNlKSkge1xuICAgIHJldHVybiBiYXNlLnJlcGxhY2UoL14oXFxzKiNcXHMrKSguKikkLywgKF8sIHAxLCBwMikgPT4gYCR7ZXNjKHAxKX0ke3NwYW4oJ3Rvay10cmFjaycsIHAyKX1gKTtcbiAgfVxuICBpZiAoL15cXHMqQC8udGVzdChiYXNlKSkge1xuICAgIHJldHVybiByZW5kZXJUb2tlbnMoYmFzZS5yZXBsYWNlKC88L2csICcgPCAnKSk7XG4gIH1cbiAgaWYgKC9eXFxzKj4vLnRlc3QoYmFzZSkpIHtcbiAgICBjb25zdCBpbmRlbnQgPSBlc2MoYmFzZS5tYXRjaCgvXlxccyovKVswXSk7XG4gICAgY29uc3QgYm9keSA9IGJhc2UudHJpbVN0YXJ0KCkuc2xpY2UoMSkucmVwbGFjZSgvXlxccyovLCAnICcpO1xuICAgIGNvbnN0IHJlbmRlcmVkID0gYm9keVxuICAgICAgLnNwbGl0KC8oXFxzKykvKVxuICAgICAgLm1hcChwYXJ0ID0+IHtcbiAgICAgICAgaWYgKCFwYXJ0IHx8IC9cXHMrLy50ZXN0KHBhcnQpKSByZXR1cm4gcGFydDtcbiAgICAgICAgaWYgKC9eW0EtWl1bQS1aMC05XSokLy50ZXN0KHBhcnQpKSByZXR1cm4gc3BhbigndG9rLXNlY3Rpb24nLCBwYXJ0LCB7IHNlY3Rpb246IHBhcnQgfSk7XG4gICAgICAgIHJldHVybiByZW5kZXJUb2tlbihwYXJ0KTtcbiAgICAgIH0pXG4gICAgICAuam9pbignJyk7XG4gICAgcmV0dXJuIGAke2luZGVudH0ke3NwYW4oJ3Rvay1hcnJhbmdlbWVudCcsICc+Jyl9JHtyZW5kZXJlZH1gO1xuICB9XG4gIGlmICgvXlxccyolW15cXHNdK1xccysvLnRlc3QoYmFzZSkpIHtcbiAgICByZXR1cm4gYmFzZS5yZXBsYWNlKC9eKFxccyopKCVbXlxcc10rKShcXHMqKSguKikkLywgKF8sIGksIHYsIHMsIHJlc3QpID0+IChcbiAgICAgIGAke2VzYyhpKX0ke3NwYW4oJ3Rvay12YXItZGVmJywgdiwgeyB2YXI6IHYgfSl9JHtlc2Mocyl9JHtyZW5kZXJUb2tlbnMocmVzdCl9YFxuICAgICkpO1xuICB9XG4gIGlmICgvXlxccyojXFxkKy8udGVzdChiYXNlKSkge1xuICAgIGxldCB2ZWxvY2l0eVRhZ2dlZCA9IGZhbHNlO1xuICAgIHJldHVybiBiYXNlLnNwbGl0KC8oXFxzKykvKS5tYXAocGFydCA9PiB7XG4gICAgICBpZiAoL15cXHMqJC8udGVzdChwYXJ0KSkgcmV0dXJuIHBhcnQ7XG4gICAgICBjb25zdCBjbHMgPSBjbGFzc2lmeShwYXJ0KTtcbiAgICAgIGlmIChjbHMgPT09ICd0b2stbnVtYmVyJyAmJiAhdmVsb2NpdHlUYWdnZWQpIHtcbiAgICAgICAgdmVsb2NpdHlUYWdnZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gc3BhbihjbHMsIHBhcnQsIHsgdmVsb2NpdHk6IHBhcnQgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVuZGVyVG9rZW4ocGFydCk7XG4gICAgfSkuam9pbignJyk7XG4gIH1cbiAgcmV0dXJuIHJlbmRlclRva2VucyhiYXNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZ2hsaWdodChpbnB1dCkge1xuICByZXR1cm4gU3RyaW5nKGlucHV0IHx8ICcnKVxuICAgIC5zcGxpdCgvXFxyP1xcbi8pXG4gICAgLm1hcCgobGluZSwgbGluZU51bWJlcikgPT4ge1xuICAgICAgY29uc3QgW2Jhc2UsIGNvbW1lbnRdID0gc3BsaXRDb21tZW50KGxpbmUpO1xuICAgICAgY29uc3QgcmVuZGVyZWQgPSByZW5kZXJCYXNlKGJhc2UpO1xuICAgICAgY29uc3QgY29udGVudCA9ICFjb21tZW50ID8gcmVuZGVyZWQgOiBgJHtyZW5kZXJlZH0ke3NwYW4oJ3Rvay1jb21tZW50JywgY29tbWVudCl9YDtcbiAgICAgIHJldHVybiBgPHNwYW4gY2xhc3M9XCJobC1saW5lXCIgZGF0YS1saW5lPVwiJHtsaW5lTnVtYmVyfVwiPiR7Y29udGVudH08L3NwYW4+YDtcbiAgICB9KVxuICAgIC5qb2luKCdcXG4nKTtcbn1cbiIsICJpbXBvcnQgeyBoaWdobGlnaHQgfSBmcm9tICcuLi9oaWdobGlnaHQnO1xuXG5jb25zdCBESUFUT05JQyA9IHsgYzogMCwgZDogMSwgZTogMiwgZjogMywgZzogNCwgYTogNSwgYjogNiB9O1xuY29uc3QgRTRfRElBVE9OSUMgPSA0ICogNyArIDI7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZU5vdGUocykge1xuICByZXR1cm4gcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHMuc2xpY2UoMSk7XG59XG5cbmZ1bmN0aW9uIG5vdGVUb1Bvcyhub3RlU3RyKSB7XG4gIGNvbnN0IG0gPSBub3RlU3RyLm1hdGNoKC9eKFthLWdBLUddKShbI2JdPykoXFxkKykkLyk7XG4gIGlmICghbSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGRpYXRQb3MgPSBwYXJzZUludChtWzNdLCAxMCkgKiA3ICsgRElBVE9OSUNbbVsxXS50b0xvd2VyQ2FzZSgpXTtcbiAgcmV0dXJuIGRpYXRQb3MgLSBFNF9ESUFUT05JQztcbn1cblxuZnVuY3Rpb24gcG9zVG9ZKHBvcykge1xuICByZXR1cm4gNjAgLSBwb3MgKiA1O1xufVxuXG5mdW5jdGlvbiBidWlsZFN0YWZmU1ZHKG5vdGVzLCBtb2RlID0gJ2Nob3JkJykge1xuICBpZiAoIW5vdGVzIHx8IG5vdGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuICcnO1xuICBjb25zdCBzb3J0ZWQgPSBub3Rlc1xuICAgIC5tYXAobiA9PiAoeyBub3RlOiBuLCBwb3M6IG5vdGVUb1BvcyhuKSB9KSlcbiAgICAuZmlsdGVyKG4gPT4gbi5wb3MgIT09IG51bGwpXG4gICAgLnNvcnQoKGEsIGIpID0+IGEucG9zIC0gYi5wb3MpO1xuICBpZiAoc29ydGVkLmxlbmd0aCA9PT0gMCkgcmV0dXJuICcnO1xuXG4gIGNvbnN0IFcgPSAyMDA7XG4gIGNvbnN0IEggPSA5MDtcbiAgbGV0IHN2ZyA9IGA8c3ZnIHdpZHRoPVwiJHtXfVwiIGhlaWdodD1cIiR7SH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+YDtcblxuICBzdmcgKz0gJzxzdHlsZT4uc3RhZmYtbGluZSwubGVkZ2Vye3N0cm9rZTojZmZmO3N0cm9rZS13aWR0aDoxfTwvc3R5bGU+JztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpICs9IDEpIHtcbiAgICBjb25zdCB5ID0gMjAgKyBpICogMTA7XG4gICAgc3ZnICs9IGA8bGluZSBjbGFzcz1cInN0YWZmLWxpbmVcIiB4MT1cIjBcIiB5MT1cIiR7eX1cIiB4Mj1cIiR7V31cIiB5Mj1cIiR7eX1cIi8+YDtcbiAgfVxuICBzdmcgKz0gJzx0ZXh0IHg9XCI4XCIgeT1cIjUwXCIgZmlsbD1cIiNmZmZcIiBmb250LXNpemU9XCI1MlwiIGZvbnQtZmFtaWx5PVwic2VyaWZcIj5cdUQ4MzRcdUREMUU8L3RleHQ+JztcblxuICBjb25zdCBpc1NjYWxlID0gbW9kZSA9PT0gJ3NjYWxlJztcbiAgY29uc3Qgbm90ZUNvdW50ID0gc29ydGVkLmxlbmd0aDtcbiAgbGV0IG5vdGVYO1xuICBpZiAoaXNTY2FsZSkge1xuICAgIGNvbnN0IHN0ZXAgPSBub3RlQ291bnQgPiAxID8gMTU0IC8gKG5vdGVDb3VudCAtIDEpIDogMDtcbiAgICBzb3J0ZWQuZm9yRWFjaCgobiwgaSkgPT4ge1xuICAgICAgbi54ID0gMzYgKyBpICogc3RlcDtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBub3RlWCA9IDkwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc29ydGVkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjdXJyID0gc29ydGVkW2ldO1xuICAgICAgY29uc3QgcHJldiA9IGkgPiAwID8gc29ydGVkW2kgLSAxXSA6IG51bGw7XG4gICAgICBjdXJyLnggPSBub3RlWDtcbiAgICAgIGlmIChwcmV2ICYmIE1hdGguYWJzKGN1cnIucG9zIC0gcHJldi5wb3MpID09PSAxKSB7XG4gICAgICAgIGN1cnIueCA9IHByZXYueCArIDExO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNvcnRlZC5mb3JFYWNoKG4gPT4ge1xuICAgIGNvbnN0IHkgPSBwb3NUb1kobi5wb3MpO1xuICAgIGNvbnN0IG0gPSBuLm5vdGUubWF0Y2goL14oW2EtZ0EtR10pKFsjYl0/KShcXGQrKSQvKTtcbiAgICBjb25zdCBhY2NpZGVudGFsID0gbSA/IG1bMl0gOiAnJztcbiAgICBmb3IgKGxldCBwID0gLTI7IHAgPj0gbi5wb3M7IHAgLT0gMikge1xuICAgICAgY29uc3QgbHkgPSBwb3NUb1kocCk7XG4gICAgICBzdmcgKz0gYDxsaW5lIGNsYXNzPVwibGVkZ2VyXCIgeDE9XCIke24ueCAtIDl9XCIgeTE9XCIke2x5fVwiIHgyPVwiJHtuLnggKyA5fVwiIHkyPVwiJHtseX1cIi8+YDtcbiAgICB9XG4gICAgZm9yIChsZXQgcCA9IDEwOyBwIDw9IG4ucG9zOyBwICs9IDIpIHtcbiAgICAgIGNvbnN0IGx5ID0gcG9zVG9ZKHApO1xuICAgICAgc3ZnICs9IGA8bGluZSBjbGFzcz1cImxlZGdlclwiIHgxPVwiJHtuLnggLSA5fVwiIHkxPVwiJHtseX1cIiB4Mj1cIiR7bi54ICsgOX1cIiB5Mj1cIiR7bHl9XCIvPmA7XG4gICAgfVxuICAgIGlmIChpc1NjYWxlKSB7XG4gICAgICBzdmcgKz0gYDxlbGxpcHNlIGN4PVwiJHtuLnh9XCIgY3k9XCIke3l9XCIgcng9XCI1XCIgcnk9XCI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjZmZmXCIgc3Ryb2tlLXdpZHRoPVwiMS4yXCIgdHJhbnNmb3JtPVwicm90YXRlKC0xNSAke24ueH0gJHt5fSlcIi8+YDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3ZnICs9IGA8ZWxsaXBzZSBjeD1cIiR7bi54fVwiIGN5PVwiJHt5fVwiIHJ4PVwiNVwiIHJ5PVwiNFwiIGZpbGw9XCIjZmZmXCIgdHJhbnNmb3JtPVwicm90YXRlKC0xNSAke24ueH0gJHt5fSlcIi8+YDtcbiAgICB9XG4gICAgaWYgKGFjY2lkZW50YWwgPT09ICcjJykge1xuICAgICAgc3ZnICs9IGA8dGV4dCB4PVwiJHtuLnggLSAxNH1cIiB5PVwiJHt5ICsgNH1cIiBmaWxsPVwiI2ZmZlwiIGZvbnQtc2l6ZT1cIjEwXCI+XHUyNjZGPC90ZXh0PmA7XG4gICAgfSBlbHNlIGlmIChhY2NpZGVudGFsID09PSAnYicpIHtcbiAgICAgIHN2ZyArPSBgPHRleHQgeD1cIiR7bi54IC0gMTJ9XCIgeT1cIiR7eSArIDR9XCIgZmlsbD1cIiNmZmZcIiBmb250LXNpemU9XCIxMVwiPlx1MjY2RDwvdGV4dD5gO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKCFpc1NjYWxlICYmIHNvcnRlZC5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgbG93ZXN0UG9zID0gc29ydGVkWzBdLnBvcztcbiAgICBjb25zdCBoaWdoZXN0UG9zID0gc29ydGVkW3NvcnRlZC5sZW5ndGggLSAxXS5wb3M7XG4gICAgbGV0IHN0ZW1EaXIgPSBsb3dlc3RQb3MgPD0gMyA/ICd1cCcgOiAnZG93bic7XG4gICAgaWYgKHN0ZW1EaXIgPT09ICd1cCcpIHtcbiAgICAgIGNvbnN0IGhpZ2hZID0gcG9zVG9ZKGhpZ2hlc3RQb3MpO1xuICAgICAgY29uc3QgaGlnaFggPSBzb3J0ZWRbc29ydGVkLmxlbmd0aCAtIDFdLng7XG4gICAgICBzdmcgKz0gYDxsaW5lIHgxPVwiJHtoaWdoWCArIDV9XCIgeTE9XCIke2hpZ2hZfVwiIHgyPVwiJHtoaWdoWCArIDV9XCIgeTI9XCIke2hpZ2hZIC0gMjh9XCIgc3Ryb2tlPVwiI2ZmZlwiIHN0cm9rZS13aWR0aD1cIjEuMlwiLz5gO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsb3dZID0gcG9zVG9ZKGxvd2VzdFBvcyk7XG4gICAgICBjb25zdCBsb3dYID0gc29ydGVkWzBdLng7XG4gICAgICBzdmcgKz0gYDxsaW5lIHgxPVwiJHtsb3dYIC0gNX1cIiB5MT1cIiR7bG93WX1cIiB4Mj1cIiR7bG93WCAtIDV9XCIgeTI9XCIke2xvd1kgKyAyOH1cIiBzdHJva2U9XCIjZmZmXCIgc3Ryb2tlLXdpZHRoPVwiMS4yXCIvPmA7XG4gICAgfVxuICB9XG5cbiAgc3ZnICs9ICc8L3N2Zz4nO1xuICByZXR1cm4gc3ZnO1xufVxuXG5mdW5jdGlvbiBjbGFtcFRvb2x0aXAoeCwgeSwgd2lkdGggPSAzMjApIHtcbiAgY29uc3QgbWF4WCA9IE1hdGgubWF4KDgsIHdpbmRvdy5pbm5lcldpZHRoIC0gd2lkdGggLSA4KTtcbiAgY29uc3QgbGVmdCA9IE1hdGgubWluKHggKyAxMiwgbWF4WCk7XG4gIGNvbnN0IHRvcCA9IE1hdGgubWluKHkgKyAxMiwgd2luZG93LmlubmVySGVpZ2h0IC0gMTcwKTtcbiAgcmV0dXJuIHsgbGVmdCwgdG9wIH07XG59XG5cbmZ1bmN0aW9uIGNoYXJPZmZzZXRPZkVsZW1lbnQocm9vdCwgdGFyZ2V0KSB7XG4gIGlmICghcm9vdCB8fCAhdGFyZ2V0IHx8ICFyb290LmNvbnRhaW5zKHRhcmdldCkpIHJldHVybiAtMTtcbiAgY29uc3QgbGluZUVsID0gdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWxpbmVdJyk7XG4gIGNvbnN0IGxpbmVOdW1iZXIgPSBsaW5lRWwgPyBwYXJzZUludChsaW5lRWwuZGF0YXNldC5saW5lLCAxMCkgOiAwO1xuICBpZiAoIWxpbmVFbCB8fCBOdW1iZXIuaXNOYU4obGluZU51bWJlcikpIHJldHVybiAtMTtcblxuICAvLyBNZWFzdXJlIG9mZnNldCB3aXRoaW4gdGhpcyBsaW5lIG9ubHkgKGF2b2lkcyBjcm9zcy1ibG9jayByYW5nZS50b1N0cmluZygpIHF1aXJrc1xuICAvLyB3aGVyZSBlbXB0eSBkaXNwbGF5OmJsb2NrIHNwYW5zIGNvbnRyaWJ1dGUgXFxuIGNoYXJhY3RlcnMgdG8gdGhlIHJlc3VsdClcbiAgY29uc3QgbGluZVJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgbGluZVJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhsaW5lRWwpO1xuICBsaW5lUmFuZ2Uuc2V0RW5kQmVmb3JlKHRhcmdldCk7XG4gIGNvbnN0IG9mZnNldEluTGluZSA9IGxpbmVSYW5nZS50b1N0cmluZygpLmxlbmd0aDtcblxuICAvLyBTdW0gY2hhcmFjdGVyIGxlbmd0aHMgb2YgYWxsIHByZWNlZGluZyBsaW5lcyArIDEgbmV3bGluZSBlYWNoXG4gIGNvbnN0IGFsbExpbmVzID0gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1saW5lXScpO1xuICBsZXQgdG90YWwgPSBvZmZzZXRJbkxpbmU7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZU51bWJlcjsgaSsrKSB7XG4gICAgdG90YWwgKz0gKGFsbExpbmVzW2ldID8gYWxsTGluZXNbaV0udGV4dENvbnRlbnQubGVuZ3RoIDogMCkgKyAxO1xuICB9XG4gIHJldHVybiB0b3RhbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVkaXRvcihpbml0aWFsVGV4dCwgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd3JhcC5pZCA9ICdlZGl0b3Itd3JhcCc7XG5cbiAgY29uc3QgcHJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJyk7XG4gIHByZS5pZCA9ICdlZGl0b3ItaGwnO1xuICBwcmUuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cbiAgY29uc3QgdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICB0YS5pZCA9ICdlZGl0b3InO1xuICB0YS5zcGVsbGNoZWNrID0gZmFsc2U7XG4gIHRhLmF1dG9jb21wbGV0ZSA9ICdvZmYnO1xuICB0YS52YWx1ZSA9IGluaXRpYWxUZXh0O1xuXG4gIGNvbnN0IHRpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aXAuaWQgPSAndmFyLXRvb2x0aXAnO1xuICB0aXAuaGlkZGVuID0gdHJ1ZTtcbiAgdGlwLmlubmVySFRNTCA9ICc8c3Ryb25nPjwvc3Ryb25nPjxzcGFuIGNsYXNzPVwidG9vbHRpcC1yZXNvbHZlZFwiPjwvc3Bhbj48ZGl2IGNsYXNzPVwidG9vbHRpcC1zdGFmZlwiPjwvZGl2Pic7XG4gIGNvbnN0IHRpcFRpdGxlID0gdGlwLnF1ZXJ5U2VsZWN0b3IoJ3N0cm9uZycpO1xuICBjb25zdCB0aXBCb2R5ID0gdGlwLnF1ZXJ5U2VsZWN0b3IoJy50b29sdGlwLXJlc29sdmVkJyk7XG4gIGNvbnN0IHRpcFN0YWZmID0gdGlwLnF1ZXJ5U2VsZWN0b3IoJy50b29sdGlwLXN0YWZmJyk7XG4gIGNvbnN0IGZsYXNoVGltZXJzID0gbmV3IFNldCgpO1xuICBsZXQgc2NydWJTdGF0ZSA9IG51bGw7XG4gIGxldCBhY3RpdmVUb2tlbnMgPSBbXTtcblxuICBjb25zdCB0b29sdGlwSGFuZGxlcnMgPSBbXG4gICAgb3B0aW9ucy5yZXNvbHZlTm90ZSAmJiB7XG4gICAgICBhdHRyOiAnbm90ZScsXG4gICAgICByZXNvbHZlOiBvcHRpb25zLnJlc29sdmVOb3RlLFxuICAgICAgbm90ZXM6IHZhbHVlID0+IFt2YWx1ZV0sXG4gICAgICBzdGFmZk1vZGU6ICdzaW5nbGUnLFxuICAgICAgdGl0bGU6IHZhbHVlID0+IG5vcm1hbGl6ZU5vdGUodmFsdWUpLFxuICAgIH0sXG4gICAgb3B0aW9ucy5yZXNvbHZlQ2hvcmQgJiYge1xuICAgICAgYXR0cjogJ2Nob3JkJyxcbiAgICAgIHJlc29sdmU6IG9wdGlvbnMucmVzb2x2ZUNob3JkLFxuICAgICAgbm90ZXM6IHZhbHVlID0+IHZhbHVlLnNwbGl0KCd8JykubWFwKG5vcm1hbGl6ZU5vdGUpLFxuICAgICAgc3RhZmZNb2RlOiAnY2hvcmQnLFxuICAgICAgdGl0bGU6ICgpID0+ICdDaG9yZCcsXG4gICAgfSxcbiAgICBvcHRpb25zLnJlc29sdmVNb2RlICYmIHtcbiAgICAgIGF0dHI6ICdtb2RlJyxcbiAgICAgIHJlc29sdmU6IG9wdGlvbnMucmVzb2x2ZU1vZGUsXG4gICAgICBub3Rlczogb3B0aW9ucy5yZXNvbHZlTW9kZU5vdGVzLFxuICAgICAgc3RhZmZNb2RlOiAnc2NhbGUnLFxuICAgICAgdGl0bGU6IHZhbHVlID0+IHZhbHVlLFxuICAgIH0sXG4gICAgb3B0aW9ucy5yZXNvbHZlSW5zdHJ1bWVudCAmJiB7XG4gICAgICBhdHRyOiAnaW5zdHJ1bWVudCcsXG4gICAgICByZXNvbHZlOiBvcHRpb25zLnJlc29sdmVJbnN0cnVtZW50LFxuICAgICAgdGl0bGU6IHZhbHVlID0+IGAjJHt2YWx1ZX1gLFxuICAgIH0sXG4gICAgb3B0aW9ucy5yZXNvbHZlU2VjdGlvbiAmJiB7XG4gICAgICBhdHRyOiAnc2VjdGlvbicsXG4gICAgICByZXNvbHZlOiBvcHRpb25zLnJlc29sdmVTZWN0aW9uLFxuICAgICAgdGl0bGU6IHZhbHVlID0+IGBAJHt2YWx1ZX1gLFxuICAgIH0sXG4gICAgb3B0aW9ucy5yZXNvbHZlVmFyICYmIHtcbiAgICAgIGF0dHI6ICd2YXInLFxuICAgICAgcmVzb2x2ZTogb3B0aW9ucy5yZXNvbHZlVmFyLFxuICAgICAgdGl0bGU6IHZhbHVlID0+IHZhbHVlLFxuICAgIH0sXG4gICAge1xuICAgICAgYXR0cjogJ3JlcGVhdExhc3QnLFxuICAgICAgcmVzb2x2ZTogKCkgPT4gJ1JlcGVhdHMgdGhlIHByZWNlZGluZyBleHByZXNzaW9uIG9uY2UgbW9yZScsXG4gICAgICB0aXRsZTogKCkgPT4gJyUnLFxuICAgIH0sXG4gICAgb3B0aW9ucy5yZXNvbHZlVmVsb2NpdHkgJiYge1xuICAgICAgYXR0cjogJ3ZlbG9jaXR5JyxcbiAgICAgIHJlc29sdmU6IG9wdGlvbnMucmVzb2x2ZVZlbG9jaXR5LFxuICAgICAgdGl0bGU6IHYgPT4gYFZlbG9jaXR5ICR7dn1gLFxuICAgIH0sXG4gICAge1xuICAgICAgYXR0cjogJ3JlcGVhdCcsXG4gICAgICByZXNvbHZlOiB2ID0+IHtcbiAgICAgICAgY29uc3QgbiA9IHBhcnNlSW50KHYsIDEwKTtcbiAgICAgICAgcmV0dXJuIGBQbGF5cyB0aGUgcHJlY2VkaW5nIHNlcXVlbmNlICR7bn0gdGltZSR7biAhPT0gMSA/ICdzJyA6ICcnfSBpbiBhIHJvd2A7XG4gICAgICB9LFxuICAgICAgdGl0bGU6IHYgPT4gYFx1MDBENyR7dn1gLFxuICAgIH0sXG4gICAge1xuICAgICAgYXR0cjogJ251bWJlcicsXG4gICAgICByZXNvbHZlOiAoKSA9PiAnTnVtZXJpYyB2YWx1ZSBcdTIwMTQgdXNlZCBhcyB2ZWxvY2l0eSwgb2N0YXZlLCBvciBwYXJhbWV0ZXInLFxuICAgICAgdGl0bGU6IHYgPT4gdixcbiAgICB9LFxuICAgIHtcbiAgICAgIGF0dHI6ICdwYXR0ZXJuJyxcbiAgICAgIHJlc29sdmU6ICgpID0+ICd4ID0gaGl0ICB8ICAtID0gaG9sZCAgfCAgXyA9IHJlc3QgIHwgIFsgXSA9IHN1YmRpdmlkZScsXG4gICAgICB0aXRsZTogKCkgPT4gJ1JoeXRobSBwYXR0ZXJuJyxcbiAgICB9LFxuICBdLmZpbHRlcihCb29sZWFuKTtcblxuICBmdW5jdGlvbiBzeW5jKCkge1xuICAgIHByZS5pbm5lckhUTUwgPSBgJHtoaWdobGlnaHQodGEudmFsdWUpfVxcbmA7XG4gIH1cblxuICBmdW5jdGlvbiBoaWRlVG9vbHRpcCgpIHtcbiAgICB0aXAuaGlkZGVuID0gdHJ1ZTtcbiAgICB0aXBTdGFmZi5pbm5lckhUTUwgPSAnJztcbiAgICB0aXBTdGFmZi5oaWRkZW4gPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJTY3J1YkN1cnNvcigpIHtcbiAgICB3cmFwLmNsYXNzTGlzdC5yZW1vdmUoJ3NjcnViLWhvdmVyJyk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhckFjdGl2ZVRva2VuSGlnaGxpZ2h0KCkge1xuICAgIGFjdGl2ZVRva2Vucy5mb3JFYWNoKHRva2VuID0+IHRva2VuLmNsYXNzTGlzdC5yZW1vdmUoJ3Rvay1hY3RpdmUnKSk7XG4gICAgYWN0aXZlVG9rZW5zID0gW107XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTY3J1YlRhcmdldChlbGVtZW50cykge1xuICAgIHJldHVybiBlbGVtZW50cy5maW5kKGVsID0+IChcbiAgICAgIGVsLmRhdGFzZXRcbiAgICAgICYmICh0eXBlb2YgZWwuZGF0YXNldC5udW1iZXIgIT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBlbC5kYXRhc2V0LnZlbG9jaXR5ICE9PSAndW5kZWZpbmVkJylcbiAgICApKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlU2NydWJSYXcocmF3KSB7XG4gICAgY29uc3QgaXNGbG9hdCA9IFN0cmluZyhyYXcpLmluY2x1ZGVzKCcuJyk7XG4gICAgY29uc3QgZGVjaW1hbFBsYWNlcyA9IGlzRmxvYXQgPyBTdHJpbmcocmF3KS5zcGxpdCgnLicpWzFdLmxlbmd0aCA6IDA7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBwYXJzZUZsb2F0KHJhdyksXG4gICAgICBpc0Zsb2F0LFxuICAgICAgZGVjaW1hbFBsYWNlcyxcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gYmVnaW5TY3J1YihlLCBzcGFuKSB7XG4gICAgY29uc3QgcmF3ID0gdHlwZW9mIHNwYW4uZGF0YXNldC5udW1iZXIgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IHNwYW4uZGF0YXNldC5udW1iZXJcbiAgICAgIDogc3Bhbi5kYXRhc2V0LnZlbG9jaXR5O1xuICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlU2NydWJSYXcocmF3KTtcbiAgICBpZiAoTnVtYmVyLmlzTmFOKHBhcnNlZC52YWx1ZSkpIHJldHVybjtcblxuICAgIGNvbnN0IHN0YXJ0T2Zmc2V0ID0gY2hhck9mZnNldE9mRWxlbWVudChwcmUsIHNwYW4pO1xuICAgIGlmIChzdGFydE9mZnNldCA8IDApIHJldHVybjtcblxuICAgIHNjcnViU3RhdGUgPSB7XG4gICAgICBzdGFydFg6IGUuY2xpZW50WCxcbiAgICAgIHN0YXJ0VmFsdWU6IHBhcnNlZC52YWx1ZSxcbiAgICAgIGlzRmxvYXQ6IHBhcnNlZC5pc0Zsb2F0LFxuICAgICAgZGVjaW1hbFBsYWNlczogcGFyc2VkLmRlY2ltYWxQbGFjZXMsXG4gICAgICBhdHRyOiB0eXBlb2Ygc3Bhbi5kYXRhc2V0LnZlbG9jaXR5ICE9PSAndW5kZWZpbmVkJyA/ICd2ZWxvY2l0eScgOiAnbnVtYmVyJyxcbiAgICAgIHN0YXJ0T2Zmc2V0LFxuICAgICAgY3VycmVudExlbmd0aDogc3Bhbi50ZXh0Q29udGVudC5sZW5ndGgsXG4gICAgICBjdXJyZW50VGV4dDogcmF3LFxuICAgIH07XG4gICAgd3JhcC5jbGFzc0xpc3QuYWRkKCdzY3J1Yi1hY3RpdmUnKTtcbiAgICBoaWRlVG9vbHRpcCgpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGx5U2NydWIoZSkge1xuICAgIGlmICghc2NydWJTdGF0ZSkgcmV0dXJuO1xuICAgIGNvbnN0IFNURVBfUFggPSA0O1xuICAgIGNvbnN0IGRlbHRhVW5pdHMgPSBNYXRoLnJvdW5kKChlLmNsaWVudFggLSBzY3J1YlN0YXRlLnN0YXJ0WCkgLyBTVEVQX1BYKTtcbiAgICBjb25zdCBiYXNlU3RlcCA9IHNjcnViU3RhdGUuaXNGbG9hdCA/IE1hdGgucG93KDEwLCAtc2NydWJTdGF0ZS5kZWNpbWFsUGxhY2VzKSA6IDE7XG4gICAgY29uc3QgbW9kaWZpZXIgPSBlLnNoaWZ0S2V5ID8gMTAgOiBlLmFsdEtleSA/IDAuMSA6IDE7XG5cbiAgICBsZXQgbmV4dFZhbHVlID0gc2NydWJTdGF0ZS5zdGFydFZhbHVlICsgZGVsdGFVbml0cyAqIGJhc2VTdGVwICogbW9kaWZpZXI7XG4gICAgaWYgKHNjcnViU3RhdGUuYXR0ciA9PT0gJ3ZlbG9jaXR5Jykge1xuICAgICAgbmV4dFZhbHVlID0gTWF0aC5tYXgoMSwgTWF0aC5taW4oMTI3LCBNYXRoLnJvdW5kKG5leHRWYWx1ZSkpKTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXh0VGV4dCA9IHNjcnViU3RhdGUuaXNGbG9hdCAmJiBzY3J1YlN0YXRlLmF0dHIgIT09ICd2ZWxvY2l0eSdcbiAgICAgID8gbmV4dFZhbHVlLnRvRml4ZWQoc2NydWJTdGF0ZS5kZWNpbWFsUGxhY2VzKVxuICAgICAgOiBTdHJpbmcoTWF0aC5yb3VuZChuZXh0VmFsdWUpKTtcbiAgICBpZiAobmV4dFRleHQgPT09IHNjcnViU3RhdGUuY3VycmVudFRleHQpIHJldHVybjtcblxuICAgIGNvbnN0IHN0YXJ0ID0gc2NydWJTdGF0ZS5zdGFydE9mZnNldDtcbiAgICBjb25zdCBlbmQgPSBzdGFydCArIHNjcnViU3RhdGUuY3VycmVudExlbmd0aDtcbiAgICB0YS52YWx1ZSA9IHRhLnZhbHVlLnNsaWNlKDAsIHN0YXJ0KSArIG5leHRUZXh0ICsgdGEudmFsdWUuc2xpY2UoZW5kKTtcbiAgICBzY3J1YlN0YXRlLmN1cnJlbnRMZW5ndGggPSBuZXh0VGV4dC5sZW5ndGg7XG4gICAgc2NydWJTdGF0ZS5jdXJyZW50VGV4dCA9IG5leHRUZXh0O1xuICAgIHRhLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdpbnB1dCcsIHsgYnViYmxlczogdHJ1ZSB9KSk7XG4gIH1cblxuICBmdW5jdGlvbiBlbmRTY3J1YigpIHtcbiAgICBpZiAoIXNjcnViU3RhdGUpIHJldHVybjtcbiAgICBzY3J1YlN0YXRlID0gbnVsbDtcbiAgICB3cmFwLmNsYXNzTGlzdC5yZW1vdmUoJ3NjcnViLWFjdGl2ZScpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGFwcGx5U2NydWIpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBlbmRTY3J1Yik7XG4gIH1cblxuICBmdW5jdGlvbiBmbGFzaExpbmVzKHN0YXJ0TGluZSwgZW5kTGluZSkge1xuICAgIGNvbnN0IHN0YXJ0ID0gTWF0aC5tYXgoMCwgc3RhcnRMaW5lKTtcbiAgICBjb25zdCBlbmQgPSBNYXRoLm1heChzdGFydCwgZW5kTGluZSk7XG4gICAgZm9yIChsZXQgbGluZSA9IHN0YXJ0OyBsaW5lIDw9IGVuZDsgbGluZSArPSAxKSB7XG4gICAgICBjb25zdCBsaW5lRWwgPSBwcmUucXVlcnlTZWxlY3RvcihgW2RhdGEtbGluZT1cIiR7bGluZX1cIl1gKTtcbiAgICAgIGlmICghbGluZUVsKSBjb250aW51ZTtcbiAgICAgIGxpbmVFbC5jbGFzc0xpc3QuYWRkKCdibG9jay1mbGFzaCcpO1xuICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbGluZUVsLmNsYXNzTGlzdC5yZW1vdmUoJ2Jsb2NrLWZsYXNoJyk7XG4gICAgICAgIGZsYXNoVGltZXJzLmRlbGV0ZSh0aW1lcik7XG4gICAgICB9LCA4MDApO1xuICAgICAgZmxhc2hUaW1lcnMuYWRkKHRpbWVyKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRQbGF5YWJsZVRva2VuU3BhbnMobGluZUVsKSB7XG4gICAgcmV0dXJuIFsuLi5saW5lRWwucXVlcnlTZWxlY3RvckFsbCgnc3BhbicpXVxuICAgICAgLmZpbHRlcih0b2tlbiA9PiB0b2tlbi5jbGFzc0xpc3QuY29udGFpbnMoJ3Rvay1wYXR0ZXJuJylcbiAgICAgICAgfHwgdG9rZW4uY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2stbm90ZScpXG4gICAgICAgIHx8IHRva2VuLmNsYXNzTGlzdC5jb250YWlucygndG9rLWNob3JkJylcbiAgICAgICAgfHwgdG9rZW4uY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2stdmFyLXJlZicpXG4gICAgICAgIHx8IHRva2VuLmNsYXNzTGlzdC5jb250YWlucygndG9rLW1vZGUnKVxuICAgICAgICB8fCB0b2tlbi5jbGFzc0xpc3QuY29udGFpbnMoJ3Rvay1wcm9ncmVzc2lvbicpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsYXNoQWN0aXZlVG9rZW5zKF9saW5lTnVtYmVycywgX2JlYXRJbmRleCkge1xuICAgIC8vIGRpc2FibGVkIFx1MjAxNCBpbnRlcmFjdHMgYmFkbHkgd2l0aCBuZXdsaW5lIGluc2VydGlvblxuICB9XG5cbiAgdGEuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgIHByZS5zY3JvbGxUb3AgPSB0YS5zY3JvbGxUb3A7XG4gICAgcHJlLnNjcm9sbExlZnQgPSB0YS5zY3JvbGxMZWZ0O1xuICB9KTtcblxuICB0YS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICBzeW5jKCk7XG4gICAgaGlkZVRvb2x0aXAoKTtcbiAgICBpZiAob3B0aW9ucy5vbklucHV0KSBvcHRpb25zLm9uSW5wdXQodGEudmFsdWUpO1xuICB9KTtcblxuICB0YS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBlID0+IHtcbiAgICBpZiAoc2NydWJTdGF0ZSkgcmV0dXJuO1xuICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQoZS5jbGllbnRYLCBlLmNsaWVudFkpO1xuICAgIGNvbnN0IHNjcnViVGFyZ2V0ID0gZ2V0U2NydWJUYXJnZXQoZWxlbWVudHMpO1xuICAgIHdyYXAuY2xhc3NMaXN0LnRvZ2dsZSgnc2NydWItaG92ZXInLCBCb29sZWFuKHNjcnViVGFyZ2V0KSk7XG4gICAgY29uc3QgZm91bmQgPSB0b29sdGlwSGFuZGxlcnNcbiAgICAgIC5tYXAoaGFuZGxlciA9PiB7XG4gICAgICAgIGNvbnN0IGhpdCA9IGVsZW1lbnRzLmZpbmQoZWwgPT4gZWwuZGF0YXNldCAmJiBlbC5kYXRhc2V0W2hhbmRsZXIuYXR0cl0pO1xuICAgICAgICByZXR1cm4gaGl0ID8geyBoYW5kbGVyLCB2YWx1ZTogaGl0LmRhdGFzZXRbaGFuZGxlci5hdHRyXSB9IDogbnVsbDtcbiAgICAgIH0pXG4gICAgICAuZmluZChCb29sZWFuKTtcbiAgICBpZiAoIWZvdW5kKSB7XG4gICAgICBoaWRlVG9vbHRpcCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0ZXh0ID0gZm91bmQuaGFuZGxlci5yZXNvbHZlKGZvdW5kLnZhbHVlKTtcbiAgICBpZiAoIXRleHQpIHtcbiAgICAgIGhpZGVUb29sdGlwKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHBvcyA9IGNsYW1wVG9vbHRpcChlLmNsaWVudFgsIGUuY2xpZW50WSk7XG4gICAgdGlwVGl0bGUudGV4dENvbnRlbnQgPSBmb3VuZC5oYW5kbGVyLnRpdGxlKGZvdW5kLnZhbHVlKTtcbiAgICB0aXBCb2R5LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBpZiAoZm91bmQuaGFuZGxlci5ub3Rlcykge1xuICAgICAgY29uc3Qgbm90ZUFyciA9IGZvdW5kLmhhbmRsZXIubm90ZXMoZm91bmQudmFsdWUpO1xuICAgICAgaWYgKG5vdGVBcnIgJiYgbm90ZUFyci5sZW5ndGgpIHtcbiAgICAgICAgdGlwU3RhZmYuaW5uZXJIVE1MID0gYnVpbGRTdGFmZlNWRyhub3RlQXJyLCBmb3VuZC5oYW5kbGVyLnN0YWZmTW9kZSk7XG4gICAgICAgIHRpcFN0YWZmLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGlwU3RhZmYuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRpcFN0YWZmLmhpZGRlbiA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpcFN0YWZmLmlubmVySFRNTCA9ICcnO1xuICAgICAgdGlwU3RhZmYuaGlkZGVuID0gdHJ1ZTtcbiAgICB9XG4gICAgdGlwLnN0eWxlLmxlZnQgPSBgJHtwb3MubGVmdH1weGA7XG4gICAgdGlwLnN0eWxlLnRvcCA9IGAke3Bvcy50b3B9cHhgO1xuICAgIHRpcC5oaWRkZW4gPSBmYWxzZTtcbiAgfSk7XG5cbiAgdGEuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB7XG4gICAgaWYgKGUuYnV0dG9uICE9PSAwIHx8IHNjcnViU3RhdGUpIHJldHVybjtcbiAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KGUuY2xpZW50WCwgZS5jbGllbnRZKTtcbiAgICBjb25zdCB0YXJnZXQgPSBnZXRTY3J1YlRhcmdldChlbGVtZW50cyk7XG4gICAgaWYgKCF0YXJnZXQpIHJldHVybjtcbiAgICBiZWdpblNjcnViKGUsIHRhcmdldCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgYXBwbHlTY3J1Yik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGVuZFNjcnViKTtcbiAgfSk7XG5cbiAgdGEuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICBoaWRlVG9vbHRpcCgpO1xuICAgIGNsZWFyU2NydWJDdXJzb3IoKTtcbiAgfSk7XG5cbiAgc3luYygpO1xuICB3cmFwLmFwcGVuZENoaWxkKHByZSk7XG4gIHdyYXAuYXBwZW5kQ2hpbGQodGEpO1xuICB3cmFwLmFwcGVuZENoaWxkKHRpcCk7XG5cbiAgcmV0dXJuIHtcbiAgICBlbDogd3JhcCxcbiAgICB0ZXh0YXJlYTogdGEsXG4gICAgb246IChldmVudCwgZm4pID0+IHRhLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZuKSxcbiAgICBnZXRWYWx1ZTogKCkgPT4gdGEudmFsdWUsXG4gICAgZ2V0Q3Vyc29yUG9zaXRpb246ICgpID0+IHRhLnNlbGVjdGlvblN0YXJ0LFxuICAgIGZsYXNoTGluZXMsXG4gICAgZmxhc2hBY3RpdmVUb2tlbnMsXG4gICAgY2xlYXJBY3RpdmVUb2tlbkhpZ2hsaWdodCxcbiAgICBzZXRWYWx1ZTogdmFsdWUgPT4ge1xuICAgICAgdGEudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHN5bmMoKTtcbiAgICAgIGhpZGVUb29sdGlwKCk7XG4gICAgICBjbGVhckFjdGl2ZVRva2VuSGlnaGxpZ2h0KCk7XG4gICAgfSxcbiAgICBmb2N1czogKCkgPT4gdGEuZm9jdXMoKSxcbiAgfTtcbn1cbiIsICJmdW5jdGlvbiBjbGFtcCh2YWx1ZSkge1xuICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdmFsdWUpKTtcbn1cblxuZnVuY3Rpb24gc2hvcnROYW1lKG5hbWUpIHtcbiAgY29uc3QgcGFydHMgPSBTdHJpbmcobmFtZSB8fCAnJykuc3BsaXQoL1xccysvKS5maWx0ZXIoQm9vbGVhbik7XG4gIGlmICghcGFydHMubGVuZ3RoKSByZXR1cm4gJ3RyYWNrJztcbiAgcmV0dXJuIHBhcnRzLnNsaWNlKDAsIDIpLmpvaW4oJyAnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1peGVyKHBsYXllciwgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhc2lkZScpO1xuICByb290LmlkID0gJ21peGVyLXBhbmVsJztcbiAgcm9vdC5jbGFzc05hbWUgPSAnY29sbGFwc2VkJztcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ01peGVyJztcblxuICBjb25zdCBzdHJpcHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3RyaXBzLmlkID0gJ21peGVyLXN0cmlwcyc7XG4gIGNvbnN0IHRyYW5zcG9ydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0cmFuc3BvcnQuaWQgPSAnbWl4ZXItdHJhbnNwb3J0JztcblxuICBjb25zdCBmeCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmeC5pZCA9ICdtaXhlci1meCc7XG5cbiAgY29uc3QgaW5pdGlhbFRlbXBvID0gb3B0aW9ucy50ZW1wbyB8fCAxNDY7XG4gIGNvbnN0IGluaXRpYWxCYXJzID0gb3B0aW9ucy5iYXJzIHx8IDg7XG4gIGNvbnN0IGluaXRpYWxUcmFuc3Bvc2UgPSBvcHRpb25zLnRyYW5zcG9zZSB8fCAwO1xuXG4gIGNvbnN0IGJwbVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGJwbVJvdy5jbGFzc05hbWUgPSAndHJhbnNwb3J0LXJvdyc7XG4gIGJwbVJvdy50ZXh0Q29udGVudCA9ICdCUE0nO1xuICBjb25zdCBicG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBicG0udHlwZSA9ICdyYW5nZSc7XG4gIGJwbS5taW4gPSAnNjAnO1xuICBicG0ubWF4ID0gJzIwMCc7XG4gIGJwbS52YWx1ZSA9IFN0cmluZyhpbml0aWFsVGVtcG8pO1xuICBjb25zdCBicG1WYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGJwbVZhbC5jbGFzc05hbWUgPSAndHJhbnNwb3J0LXZhbCc7XG4gIGJwbVZhbC50ZXh0Q29udGVudCA9IFN0cmluZyhpbml0aWFsVGVtcG8pO1xuICBicG0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgYnBtVmFsLnRleHRDb250ZW50ID0gYnBtLnZhbHVlO1xuICAgIGlmIChvcHRpb25zLm9uQ2hhbmdlKSB7XG4gICAgICBvcHRpb25zLm9uQ2hhbmdlKHsgdGVtcG86IHBhcnNlSW50KGJwbS52YWx1ZSwgMTApIH0pO1xuICAgIH1cbiAgfSk7XG4gIGJwbVJvdy5hcHBlbmRDaGlsZChicG0pO1xuICBicG1Sb3cuYXBwZW5kQ2hpbGQoYnBtVmFsKTtcblxuICBjb25zdCBiYXJzUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgYmFyc1Jvdy5jbGFzc05hbWUgPSAndHJhbnNwb3J0LXJvdyc7XG4gIGJhcnNSb3cudGV4dENvbnRlbnQgPSAnQkFSUyc7XG4gIGNvbnN0IGJhcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgWzQsIDgsIDE2LCAzMl0uZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uLnZhbHVlID0gU3RyaW5nKHZhbHVlKTtcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBTdHJpbmcodmFsdWUpO1xuICAgIGlmICh2YWx1ZSA9PT0gaW5pdGlhbEJhcnMpIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgYmFycy5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9KTtcbiAgYmFycy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgaWYgKG9wdGlvbnMub25DaGFuZ2UpIHtcbiAgICAgIG9wdGlvbnMub25DaGFuZ2UoeyBiYXJzOiBwYXJzZUludChiYXJzLnZhbHVlLCAxMCkgfSk7XG4gICAgfVxuICB9KTtcbiAgYmFyc1Jvdy5hcHBlbmRDaGlsZChiYXJzKTtcblxuICBjb25zdCBrZXlSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBrZXlSb3cuY2xhc3NOYW1lID0gJ3RyYW5zcG9ydC1yb3cnO1xuICBrZXlSb3cudGV4dENvbnRlbnQgPSAnS0VZJztcbiAgY29uc3Qga2V5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAga2V5LnR5cGUgPSAncmFuZ2UnO1xuICBrZXkubWluID0gJy0xMic7XG4gIGtleS5tYXggPSAnMTInO1xuICBrZXkudmFsdWUgPSBTdHJpbmcoaW5pdGlhbFRyYW5zcG9zZSk7XG4gIGNvbnN0IGtleVZhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAga2V5VmFsLmNsYXNzTmFtZSA9ICd0cmFuc3BvcnQtdmFsJztcbiAga2V5VmFsLnRleHRDb250ZW50ID0gU3RyaW5nKGluaXRpYWxUcmFuc3Bvc2UgPiAwID8gYCske2luaXRpYWxUcmFuc3Bvc2V9YCA6IGluaXRpYWxUcmFuc3Bvc2UpO1xuICBrZXkuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBwYXJzZUludChrZXkudmFsdWUsIDEwKTtcbiAgICBrZXlWYWwudGV4dENvbnRlbnQgPSB2YWx1ZSA+IDAgPyBgKyR7dmFsdWV9YCA6IFN0cmluZyh2YWx1ZSk7XG4gICAgaWYgKG9wdGlvbnMub25DaGFuZ2UpIHtcbiAgICAgIG9wdGlvbnMub25DaGFuZ2UoeyB0cmFuc3Bvc2U6IHZhbHVlIH0pO1xuICAgIH1cbiAgfSk7XG4gIGtleVJvdy5hcHBlbmRDaGlsZChrZXkpO1xuICBrZXlSb3cuYXBwZW5kQ2hpbGQoa2V5VmFsKTtcblxuICB0cmFuc3BvcnQuYXBwZW5kQ2hpbGQoYnBtUm93KTtcbiAgdHJhbnNwb3J0LmFwcGVuZENoaWxkKGJhcnNSb3cpO1xuICB0cmFuc3BvcnQuYXBwZW5kQ2hpbGQoa2V5Um93KTtcblxuICBjb25zdCBkZWxheUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgZGVsYXlMYWJlbC50ZXh0Q29udGVudCA9ICdEZWxheSBUaW1lJztcbiAgY29uc3QgZGVsYXlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgW1xuICAgIFsnMS80JywgMSAvIDRdLFxuICAgIFsnMy84JywgMyAvIDhdLFxuICAgIFsnMS8yJywgMSAvIDJdLFxuICAgIFsnMy80JywgMyAvIDRdLFxuICBdLmZvckVhY2goKFtsYWJlbCwgdmFsdWVdKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gbGFiZWw7XG4gICAgb3B0aW9uLnZhbHVlID0gU3RyaW5nKHZhbHVlKTtcbiAgICBpZiAodmFsdWUgPT09IHBsYXllci5kZWxheURpdmlzaW9uKSBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIGRlbGF5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIH0pO1xuICBkZWxheVNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgcGxheWVyLnNldERlbGF5VGltZShwYXJzZUZsb2F0KGRlbGF5U2VsZWN0LnZhbHVlKSk7XG4gIH0pO1xuICBkZWxheUxhYmVsLmFwcGVuZENoaWxkKGRlbGF5U2VsZWN0KTtcblxuICBjb25zdCBmZWVkYmFja0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgZmVlZGJhY2tMYWJlbC50ZXh0Q29udGVudCA9ICdGZWVkYmFjayc7XG4gIGNvbnN0IGZlZWRiYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZmVlZGJhY2sudHlwZSA9ICdyYW5nZSc7XG4gIGZlZWRiYWNrLm1pbiA9ICcwJztcbiAgZmVlZGJhY2subWF4ID0gJzc1JztcbiAgZmVlZGJhY2sudmFsdWUgPSAnMzUnO1xuICBmZWVkYmFjay5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICBwbGF5ZXIuc2V0RGVsYXlGZWVkYmFjayhwYXJzZUludChmZWVkYmFjay52YWx1ZSwgMTApIC8gMTAwKTtcbiAgfSk7XG4gIGZlZWRiYWNrTGFiZWwuYXBwZW5kQ2hpbGQoZmVlZGJhY2spO1xuXG4gIGZ4LmFwcGVuZENoaWxkKGRlbGF5TGFiZWwpO1xuICBmeC5hcHBlbmRDaGlsZChmZWVkYmFja0xhYmVsKTtcblxuICByb290LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgcm9vdC5hcHBlbmRDaGlsZCh0cmFuc3BvcnQpO1xuICByb290LmFwcGVuZENoaWxkKHN0cmlwcyk7XG4gIHJvb3QuYXBwZW5kQ2hpbGQoZngpO1xuXG4gIGNvbnN0IHN0cmlwTWFwID0gbmV3IE1hcCgpO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmlwKGtleSwgbGFiZWwpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHBsYXllci5nZXRUcmFja1N0YXRlKGtleSk7XG4gICAgY29uc3Qgc3RyaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdHJpcC5jbGFzc05hbWUgPSAnbS1zdHJpcCc7XG4gICAgc3RyaXAuZGF0YXNldC5rZXkgPSBrZXk7XG5cbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmFtZS5jbGFzc05hbWUgPSAnbS1uYW1lJztcbiAgICBuYW1lLnRleHRDb250ZW50ID0gc2hvcnROYW1lKGxhYmVsKTtcbiAgICBuYW1lLnRpdGxlID0gbGFiZWw7XG5cbiAgICBjb25zdCB2dSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZ1LmNsYXNzTmFtZSA9ICdtLXZ1JztcblxuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvdy5jbGFzc05hbWUgPSAnbS1yb3cnO1xuXG4gICAgY29uc3Qgc29sbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHNvbG8uY2xhc3NOYW1lID0gJ20tYnRuJztcbiAgICBzb2xvLnRleHRDb250ZW50ID0gJ1MnO1xuICAgIGNvbnN0IG11dGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtdXRlLmNsYXNzTmFtZSA9ICdtLWJ0bic7XG4gICAgbXV0ZS50ZXh0Q29udGVudCA9ICdNJztcblxuICAgIGNvbnN0IHZvbHVtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdm9sdW1lLnR5cGUgPSAncmFuZ2UnO1xuICAgIHZvbHVtZS5jbGFzc05hbWUgPSAnbS1zbGlkZXInO1xuICAgIHZvbHVtZS5taW4gPSAnMCc7XG4gICAgdm9sdW1lLm1heCA9ICcxMDAnO1xuICAgIHZvbHVtZS52YWx1ZSA9IFN0cmluZyhNYXRoLnJvdW5kKHN0YXRlLnZvbHVtZSAqIDEwMCkpO1xuXG4gICAgY29uc3QgcmV2ZXJiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICByZXZlcmIudHlwZSA9ICdyYW5nZSc7XG4gICAgcmV2ZXJiLmNsYXNzTmFtZSA9ICdtLXNlbmQnO1xuICAgIHJldmVyYi5taW4gPSAnMCc7XG4gICAgcmV2ZXJiLm1heCA9ICcxMDAnO1xuICAgIHJldmVyYi52YWx1ZSA9IFN0cmluZyhNYXRoLnJvdW5kKHN0YXRlLnJldmVyYlNlbmQgKiAxMDApKTtcblxuICAgIGNvbnN0IGRlbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkZWxheS50eXBlID0gJ3JhbmdlJztcbiAgICBkZWxheS5jbGFzc05hbWUgPSAnbS1zZW5kJztcbiAgICBkZWxheS5taW4gPSAnMCc7XG4gICAgZGVsYXkubWF4ID0gJzEwMCc7XG4gICAgZGVsYXkudmFsdWUgPSBTdHJpbmcoTWF0aC5yb3VuZChzdGF0ZS5kZWxheVNlbmQgKiAxMDApKTtcblxuICAgIGNvbnN0IHNlbmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VuZHMuY2xhc3NOYW1lID0gJ20tc2VuZHMnO1xuICAgIGNvbnN0IHJXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICByV3JhcC50ZXh0Q29udGVudCA9ICdSZXYnO1xuICAgIHJXcmFwLmFwcGVuZENoaWxkKHJldmVyYik7XG4gICAgY29uc3QgZFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRXcmFwLnRleHRDb250ZW50ID0gJ0RseSc7XG4gICAgZFdyYXAuYXBwZW5kQ2hpbGQoZGVsYXkpO1xuICAgIHNlbmRzLmFwcGVuZENoaWxkKHJXcmFwKTtcbiAgICBzZW5kcy5hcHBlbmRDaGlsZChkV3JhcCk7XG5cbiAgICBmdW5jdGlvbiBzeW5jQnV0dG9ucygpIHtcbiAgICAgIGNvbnN0IGN1ciA9IHBsYXllci5nZXRUcmFja1N0YXRlKGtleSk7XG4gICAgICBzb2xvLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIGN1ci5zb2xvKTtcbiAgICAgIG11dGUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJywgY3VyLm11dGVkKTtcbiAgICB9XG5cbiAgICBzb2xvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgY3VyID0gcGxheWVyLmdldFRyYWNrU3RhdGUoa2V5KTtcbiAgICAgIHBsYXllci5zZXRTb2xvKGtleSwgIWN1ci5zb2xvKTtcbiAgICAgIHN5bmNCdXR0b25zKCk7XG4gICAgfSk7XG4gICAgbXV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGN1ciA9IHBsYXllci5nZXRUcmFja1N0YXRlKGtleSk7XG4gICAgICBwbGF5ZXIuc2V0TXV0ZShrZXksICFjdXIubXV0ZWQpO1xuICAgICAgc3luY0J1dHRvbnMoKTtcbiAgICB9KTtcbiAgICB2b2x1bWUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICBwbGF5ZXIuc2V0Vm9sdW1lKGtleSwgY2xhbXAocGFyc2VJbnQodm9sdW1lLnZhbHVlLCAxMCkgLyAxMDApKTtcbiAgICB9KTtcbiAgICByZXZlcmIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICBwbGF5ZXIuc2V0UmV2ZXJiU2VuZChrZXksIGNsYW1wKHBhcnNlSW50KHJldmVyYi52YWx1ZSwgMTApIC8gMTAwKSk7XG4gICAgfSk7XG4gICAgZGVsYXkuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICBwbGF5ZXIuc2V0RGVsYXlTZW5kKGtleSwgY2xhbXAocGFyc2VJbnQoZGVsYXkudmFsdWUsIDEwKSAvIDEwMCkpO1xuICAgIH0pO1xuXG4gICAgcm93LmFwcGVuZENoaWxkKHNvbG8pO1xuICAgIHJvdy5hcHBlbmRDaGlsZChtdXRlKTtcbiAgICByb3cuYXBwZW5kQ2hpbGQodm9sdW1lKTtcblxuICAgIHN0cmlwLmFwcGVuZENoaWxkKG5hbWUpO1xuICAgIHN0cmlwLmFwcGVuZENoaWxkKHZ1KTtcbiAgICBzdHJpcC5hcHBlbmRDaGlsZChyb3cpO1xuICAgIHN0cmlwLmFwcGVuZENoaWxkKHNlbmRzKTtcbiAgICBzdHJpcHMuYXBwZW5kQ2hpbGQoc3RyaXApO1xuXG4gICAgc3luY0J1dHRvbnMoKTtcbiAgICByZXR1cm4geyBlbDogc3RyaXAsIHZ1LCBuYW1lLCBzeW5jQnV0dG9ucyB9O1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlKGRhdGEpIHtcbiAgICBjb25zdCBlbnRyaWVzID0gQXJyYXkuaXNBcnJheShkYXRhKVxuICAgICAgPyBkYXRhLm1hcCh0cmFjayA9PiAoeyBrZXk6IGAke3RyYWNrWzBdfS8ke3RyYWNrWzFdfWAsIG5hbWU6IHRyYWNrWzFdIH0pKVxuICAgICAgOiBbXTtcbiAgICBjb25zdCBuZXh0S2V5cyA9IG5ldyBTZXQoZW50cmllcy5tYXAoaXRlbSA9PiBpdGVtLmtleSkpO1xuXG4gICAgc3RyaXBNYXAuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgaWYgKCFuZXh0S2V5cy5oYXMoa2V5KSkge1xuICAgICAgICB2YWx1ZS5lbC5yZW1vdmUoKTtcbiAgICAgICAgc3RyaXBNYXAuZGVsZXRlKGtleSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBlbnRyaWVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAoIXN0cmlwTWFwLmhhcyhpdGVtLmtleSkpIHtcbiAgICAgICAgc3RyaXBNYXAuc2V0KGl0ZW0ua2V5LCBjcmVhdGVTdHJpcChpdGVtLmtleSwgaXRlbS5uYW1lKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzdHJpcCA9IHN0cmlwTWFwLmdldChpdGVtLmtleSk7XG4gICAgICAgIHN0cmlwLm5hbWUudGV4dENvbnRlbnQgPSBzaG9ydE5hbWUoaXRlbS5uYW1lKTtcbiAgICAgICAgc3RyaXAubmFtZS50aXRsZSA9IGl0ZW0ubmFtZTtcbiAgICAgICAgc3RyaXAuc3luY0J1dHRvbnMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsYXNoVlUoa2V5KSB7XG4gICAgY29uc3Qgc3RyaXAgPSBzdHJpcE1hcC5nZXQoa2V5KTtcbiAgICBpZiAoIXN0cmlwKSByZXR1cm47XG4gICAgc3RyaXAudnUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzdHJpcC52dS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSwgODApO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlKGZvcmNlT3Blbikge1xuICAgIGNvbnN0IG9wZW4gPSB0eXBlb2YgZm9yY2VPcGVuID09PSAnYm9vbGVhbicgPyBmb3JjZU9wZW4gOiByb290LmNsYXNzTGlzdC5jb250YWlucygnY29sbGFwc2VkJyk7XG4gICAgcm9vdC5jbGFzc0xpc3QudG9nZ2xlKCdjb2xsYXBzZWQnLCAhb3Blbik7XG4gICAgcmV0dXJuIG9wZW47XG4gIH1cblxuICBmdW5jdGlvbiBzeW5jVHJhbnNwb3J0KG5leHQgPSB7fSkge1xuICAgIGlmICh0eXBlb2YgbmV4dC50ZW1wbyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGJwbS52YWx1ZSA9IFN0cmluZyhuZXh0LnRlbXBvKTtcbiAgICAgIGJwbVZhbC50ZXh0Q29udGVudCA9IFN0cmluZyhuZXh0LnRlbXBvKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBuZXh0LmJhcnMgPT09ICdudW1iZXInKSB7XG4gICAgICBiYXJzLnZhbHVlID0gU3RyaW5nKG5leHQuYmFycyk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbmV4dC50cmFuc3Bvc2UgPT09ICdudW1iZXInKSB7XG4gICAgICBrZXkudmFsdWUgPSBTdHJpbmcobmV4dC50cmFuc3Bvc2UpO1xuICAgICAga2V5VmFsLnRleHRDb250ZW50ID0gbmV4dC50cmFuc3Bvc2UgPiAwID8gYCske25leHQudHJhbnNwb3NlfWAgOiBTdHJpbmcobmV4dC50cmFuc3Bvc2UpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IGVsOiByb290LCB1cGRhdGUsIGZsYXNoVlUsIHRvZ2dsZSwgc3luY1RyYW5zcG9ydCB9O1xufVxuIiwgImltcG9ydCB7IHNjYWxlIH0gZnJvbSAnaGFybW9uaWNzJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9jb21wb25lbnRzL3BsYXllci5qcyc7XG5pbXBvcnQgeyBwYXJzZSwgbWVyZ2UgfSBmcm9tICcuL2xpYic7XG5pbXBvcnQgeyByZWR1Y2UgfSBmcm9tICcuL2xpYi9wYXJzZXIuanMnO1xuaW1wb3J0IHsgYmxvY2tBdEN1cnNvciB9IGZyb20gJy4vbGliL2Jsb2Nrcy5qcyc7XG5pbXBvcnQgeyBjcmVhdGVFZGl0b3IgfSBmcm9tICcuL2NvbXBvbmVudHMvZWRpdG9yLmpzJztcbmltcG9ydCB7IGNyZWF0ZU1peGVyIH0gZnJvbSAnLi9jb21wb25lbnRzL21peGVyLmpzJztcblxubGV0IHRlbXBvID0gMTQ2O1xubGV0IGJhcnMgPSA4O1xubGV0IHRyYW5zcG9zZSA9IDA7XG5sZXQgcGxheWluZyA9IGZhbHNlO1xubGV0IGRlYm91bmNlVGltZXIgPSBudWxsO1xubGV0IHN0YXR1c1Jlc2V0VGltZXIgPSBudWxsO1xubGV0IGVkaXRvckFwaSA9IG51bGw7XG5sZXQgbWl4ZXJBcGkgPSBudWxsO1xubGV0IGxhc3RDb250ZXh0ID0gbnVsbDtcbmxldCB0cmFja0xpbmVNYXAgPSBuZXcgTWFwKCk7XG5cbmNvbnN0IHAgPSB3aW5kb3cucCB8fCBuZXcgUGxheWVyKCk7XG53aW5kb3cucCA9IHA7XG5cbmNvbnN0IFNUT1JBR0VfS0VZID0gJ3Njb29wczpkcmFmdCc7XG5cbmNvbnN0IEJJTExZX0pFQU4gPSBgXG4gICVGIGEzfGMjNHxmIzRcbiAgJUcgYjN8ZCM0fGcjNFxuICAlQSBjIzR8ZTR8YTRcbiAgJUUgYjN8ZDR8ZiM0XG4gICVDIGQzfGYjNHxhNCA7IGhvdyB0byBzdW0gbm90ZXMgdG8gY2hvcmRzP1xuICAlQiBjIzR8ZjR8ZyMzfGI0XG5cbiAgIyBzeW50aFxuICAgIEBJTlRST1xuICAgICAgIzUxOCAgICAgIC0tLS0gLS0tLSAtLS0tIC0tLS0gLS0tLSAtLS0tIC0tLS0gLS0tLVxuICAgIEBOIDwgSU5UUk9cbiAgICBAQVxuICAgICAgIzUxOCA3NSAgIHgtLS0gLS14LSAtLS0tIC0tLS0geC0tLSAtLXgtIC0tLS0gLS0tLSAlRiAlRyAlQSAlR1xuICAgIEBCIDwgQVxuICAgICAgIzUxOCAgICAgICVFICUgJSAlXG4gICAgQEMgPCBBXG4gICAgICAjNTE4ICAgICAgJUMgJSAlRiAlXG4gICAgQEQgPCBBXG4gICAgICAjNTE4ICAgICAgJUMgJSAlQiAlXG5cbiAgIyMgYmFzc1xuICAgICVjIGYjMiBjIzIgZTIgZiMyIGUyIGMjMiBiMSBjIzJcbiAgICAlZCBiMiBhMiBiMiBkMyBkMyBiMiBhMiA7IGhvdyB0byB0cmFuc3Bvc2U/XG4gICAgQElOVFJPXG4gICAgICAjMzkzICAgICAgLS0tLSAtLS0tIC0tLS0gLS0tLSAtLS0tIC0tLS0gLS0tLSAtLS0tXG4gICAgQEFcbiAgICAgICMzOTMgIDExMiB4LXgtIHgteC0geC14LSB4LXgtIHgteC0geC14LSB4LXgtIHgteC0gJWMgJVxuICAgIEBOIDwgQVxuICAgIEBCXG4gICAgICAjMzkzICAgICAgeC14LSB4LXgtIC0teC0geC14LSB4LXgtIHgteC0gLS14LSB4LXgtICVkICVcbiAgICBAQyA8IElOVFJPXG4gICAgQEQgPCBJTlRST1xuXG4gICMjIGRydW1zXG4gICAgQElOVFJPXG4gICAgICAjMjEyMyAgICAgLS0tLSAtLS0tIC0tLS0gLS0tLSAtLS0tIC0tLS0gLS0tLSAtLS0tXG4gICAgICAjMjA4MSA1MCAgeC14LSB4LXgtIHgteC0geC14LSB4LXgtIHgteC0geC14LSB4LXgtXG4gICAgICAjMjAyOCAgICAgLS0tLSB4LS0tIC0tLS0geC0tLSAtLS0tIHgtLS0gLS0tLSB4LS0tXG4gICAgICAjMjAwMSAgICAgeC0tLSAtLS0tIHgtLS0gLS0tLSB4LS0tIC0tLS0geC0tLSAtLS0tXG4gICAgQEEgPCBJTlRST1xuICAgICAgIzIxMjMgOTAgIHgtLS0geC0tLSB4LS0tIHgtLS0geC0tLSB4LS0tIHgtLS0geC0tLVxuICAgICAgIzIxMjMgNzAgIC0teC0gLS14LSAtLXgtIC0teC0gLS14LSAtLXgtIC0teC0gLS14LVxuICAgIEBOIDwgQVxuICAgIEBCIDwgQVxuICAgIEBDIDwgQVxuICAgIEBEIDwgQVxuXG4gID4gSU5UUk8gTiAqMiBBICVcbiAgPiBBICUgQiBBIEIgQVxuICA+IEEgJSBCIEEgQyAqMyBEXG4gID4gQSAlIEIgQSBCIEFcbiAgPiBBICUgQiBBIEIgQVxuICA+IEEgJSBCIEEgQyAqMyBEXG4gID4gQSAlIEIgQSBCIEFcbmA7XG5cbmNvbnN0IFRFVFJJUyA9IGBcbiVhIEU0IEIzIEM0IEQ0IEM0IEIzIEEzXG4lYiBBMyBDNCBFNCBENCBDNCBCM1xuJWMgQjMgQzQgRDQgRTQgQzQgQTMgQTNcblxuJWQgRDQgRjQgQTQgRzQgRjQgRTRcbiVlIEU0IEM0IEU0IEQ0IEM0IEIzXG5cbiVmIEU0IEM0IEQ0IEIzIEM0IEEzIEFiMyBCM1xuJWcgRTQgQzQgRDQgQjMgQzQgRTQgQTMgQWIzXG5cbiMgcGlhbm9cbiAgQEFcbiAgICAjMyB4LXh4IHgteHggeC14eCB4LXh4IHgteHggeC14LSB4LXgtIHgtLS0gJWEgJWIgJWNcbiAgQEJcbiAgICAjMyAteC14IHgteHggeC14eCB4LXh4IHgteHggeC14LSB4LXgtIHgtLS0gJWQgJWUgJWNcbiAgQENcbiAgICAjMyB4LS0tIHgtLS0geC0tLSB4LS0tIHgtLS0geC0tLSB4LS0tIHgtLS0gJWZcbiAgQEQgPCBDXG4gICAgIzMgJWdcblxuJXggRTIgRTIgQTIgQTIgQWIyIEUyIEEyXG4leSBEMiBEMiBDMiBDMiBFMiBFMiBBMlxuJXogQTIgQTIgQWIyIEFiMiBBMiBBMiBBYjNcbiV6XyBBMiBBMiBBYjIgQWIyIEEyIEEyIEE0IEFiNFxuXG4jIGJhc3NcbiAgQEFcbiAgICAjMiB4LS0tIHgtLS0geC0tLSB4LS0tIHgtLS0geC0tLSB4LS0tIC0tLS0gJXhcbiAgQEIgPCBBXG4gICAgIzIgJXlcbiAgQEMgPCBBXG4gICAgIzIgJXpcbiAgQERcbiAgICAjMiB4LS0tIHgtLS0geC0tLSB4LS0tIHgtLS0geC14LSB4LS0tIC0tLS0gJXpfXG5cbj4gQSBCIEEgQiBDIERcbmAudHJpbSgpO1xuXG5jb25zdCBQTEFZR1JPVU5EID0gYFxuJWEgQzQgcGhyeWdpYW4uLiArKyBJIEkgSUlJIElWXG5cbiMgc2NhbGVzXG4gIEBBXG4gICAgIzMgMTAwIC14LXggLXgteCAteC14IC14LXggJWEgJWFcblxuIyMgZHJ1bXNcbiAgQEFcbiAgICAjMCAxMjAgW3h4XS1beHhdLSBbeHhdLVt4eF0tIGQjMVxuICAgICMwIDExMCAteC14IC14LXggZDJcbiAgICAjMCAxMDAgW3h4XVt4eF1beHhdW3h4XSBbeHhdW3h4XVt4eF1beHhdIGYjMlxuXG4+IEEgKjRcbmAudHJpbSgpO1xuXG5jb25zdCBMT0NLUyA9IGBcbiVDbSBjNHxlYjR8ZzQgJVxuJUZtIGM0fGY0fGcjNCAlXG5cbiMgZHJ1bXNcbiAgQEFcbiAgICAjMCAxMjcgeHh4eHh4eHh4eHhbeHhdeHh4eCBbeHhdeHh4eHh4eHh4eHh4eHh4IGYjMlxuICAgICMwIDEyNyAtLXgtLS14LS0teC14LXhbeHhdIC0teC0tLXgtLS14LS1bLXhdeC0gYyMyXG4gICAgIzAgOTAgIC0tLS0tLS0tLS0tLS0tLS14X19fLS0tLS0tLS0tLS0tIGEzXG4gICAgIzAgMTIwIC0tW3h4XS0tLVt4eF0tLS1beHhdLS0tW3h4XS0gZCMxXG5cbiMjIHNrYW5raW5nXG4gIEBBXG4gICAgIzEgMTAwIC14LXgteC14LXgteC14LXggJUNtICVGbVxuXG4+IEEgKjRcbmAudHJpbSgpO1xuXG5jb25zdCBQUkVTRVRTID0ge1xuICB0ZXRyaXM6IFRFVFJJUyxcbiAgYmlsbHlfamVhbjogQklMTFlfSkVBTixcbiAgcGxheWdyb3VuZDogUExBWUdST1VORCxcbiAgbG9ja3M6IExPQ0tTLFxufTtcblxuY29uc3QgUFJFU0VUX0xBQkVMUyA9IHtcbiAgdGV0cmlzOiAnVGV0cmlzJyxcbiAgYmlsbHlfamVhbjogJ0JpbGx5IEplYW4nLFxuICBwbGF5Z3JvdW5kOiAnUGxheWdyb3VuZCcsXG4gIGxvY2tzOiAnTG9ja3MnLFxufTtcblxuY29uc3QgU0NBTEVfSU5GTyA9IHtcbiAgbWFqb3I6ICdXIFcgSCBXIFcgVyBIICAtICBkbyByZSBtaSBmYSBzb2wgbGEgdGknLFxuICBtaW5vcjogJ1cgSCBXIFcgSCBXIFcgIC0gIGRvIHJlIG1pYiBmYSBzb2wgbGFiIHNpYicsXG4gIGRvcmlhbjogJ1cgSCBXIFcgVyBIIFcgIC0gIG1pbm9yIHdpdGggcmFpc2VkIDZ0aCcsXG4gIHBocnlnaWFuOiAnSCBXIFcgVyBIIFcgVyAgLSAgbWlub3Igd2l0aCBsb3dlcmVkIDJuZCcsXG4gIGx5ZGlhbjogJ1cgVyBXIEggVyBXIEggIC0gIG1ham9yIHdpdGggcmFpc2VkIDR0aCcsXG4gIG1peG9seWRpYW46ICdXIFcgSCBXIFcgSCBXICAtICBtYWpvciB3aXRoIGxvd2VyZWQgN3RoJyxcbiAgbG9jcmlhbjogJ0ggVyBXIEggVyBXIFcgIC0gIGRpbWluaXNoZWQgZmxhdm9yJyxcbn07XG5cbmZ1bmN0aW9uIGJ1aWxkKG1pZGkpIHtcbiAgY29uc3QgbWl4ID0gW107XG5cbiAgZnVuY3Rpb24gZ2V0KG50aCwgbmFtZSkge1xuICAgIGNvbnN0IGtleSA9IG50aCArIG5hbWU7XG5cbiAgICBpZiAoIWdldFtrZXldKSB7XG4gICAgICBjb25zdCB0cmFjayA9IFtudGgsIG5hbWUsIFtdXTtcbiAgICAgIG1peC5wdXNoKHRyYWNrKTtcbiAgICAgIGdldFtrZXldID0geyB0cmFjayB9O1xuICAgIH1cbiAgICByZXR1cm4gZ2V0W2tleV07XG4gIH1cblxuICBtaWRpLmZvckVhY2goc2VjdGlvbiA9PiB7XG4gICAgc2VjdGlvbi5mb3JFYWNoKHBhcnRzID0+IHtcbiAgICAgIHBhcnRzLmZvckVhY2goZSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdHJhY2sgfSA9IGdldChlWzBdLCBlWzFdKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlWzJdLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgdHJhY2tbMl0ucHVzaChlWzJdW2ldKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gbWl4O1xufVxuXG5mdW5jdGlvbiBidWlsZFRyYWNrTGluZU1hcChpbnB1dCkge1xuICBjb25zdCBtYXAgPSBuZXcgTWFwKCk7XG4gIGxldCBjdXJyZW50VHJhY2sgPSBudWxsO1xuICBTdHJpbmcoaW5wdXQgfHwgJycpLnNwbGl0KC9cXHI/XFxuLykuZm9yRWFjaCgocmF3TGluZSwgbGluZU51bWJlcikgPT4ge1xuICAgIGNvbnN0IGxpbmUgPSByYXdMaW5lLnJlcGxhY2UoLzsuKz8kLywgJycpLnRyaW0oKTtcbiAgICBpZiAoIWxpbmUpIHJldHVybjtcblxuICAgIGlmICgvXiN7MSwyfVxccysvLnRlc3QobGluZSkgJiYgIS9eI1xcZCsvLnRlc3QobGluZSkpIHtcbiAgICAgIGN1cnJlbnRUcmFjayA9IGxpbmUucmVwbGFjZSgvXiN7MSwyfVxccysvLCAnJykudHJpbSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghY3VycmVudFRyYWNrKSByZXR1cm47XG4gICAgY29uc3QgbWF0Y2ggPSBsaW5lLm1hdGNoKC9eIyhcXGQrKVxcYi8pO1xuICAgIGlmICghbWF0Y2gpIHJldHVybjtcbiAgICBjb25zdCBrZXkgPSBgJHtwYXJzZUludChtYXRjaFsxXSwgMTApfS8ke2N1cnJlbnRUcmFja31gO1xuICAgIGNvbnN0IHByZXYgPSBtYXAuZ2V0KGtleSkgfHwgW107XG4gICAgaWYgKCFwcmV2LmluY2x1ZGVzKGxpbmVOdW1iZXIpKSBwcmV2LnB1c2gobGluZU51bWJlcik7XG4gICAgbWFwLnNldChrZXksIHByZXYpO1xuICB9KTtcbiAgcmV0dXJuIG1hcDtcbn1cblxuZnVuY3Rpb24gZ2V0RGF0YShpbnB1dCkge1xuICB0cmFja0xpbmVNYXAgPSBidWlsZFRyYWNrTGluZU1hcChpbnB1dCk7XG4gIHRyeSB7XG4gICAgbGFzdENvbnRleHQgPSBwYXJzZShpbnB1dCk7XG4gICAgcmV0dXJuIGJ1aWxkKG1lcmdlKGxhc3RDb250ZXh0KSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBsYXN0Q29udGV4dCA9IG51bGw7XG4gICAgY29uc29sZS5lcnJvcignUGFyc2UgZXJyb3I6JywgZSk7XG4gICAgc2hvd0Vycm9yKGUubWVzc2FnZSB8fCAnUGFyc2UgZXJyb3InKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn1cblxuZnVuY3Rpb24gZXZhbEJsb2NrKCkge1xuICBpZiAoIWVkaXRvckFwaSkgcmV0dXJuO1xuICBjb25zdCBzb3VyY2UgPSBlZGl0b3JBcGkuZ2V0VmFsdWUoKTtcbiAgY29uc3QgY3Vyc29yUG9zID0gZWRpdG9yQXBpLmdldEN1cnNvclBvc2l0aW9uKCk7XG4gIGNvbnN0IGJsb2NrID0gYmxvY2tBdEN1cnNvcihzb3VyY2UsIGN1cnNvclBvcyk7XG4gIGNvbnN0IGRhdGEgPSBnZXREYXRhKHNvdXJjZSk7XG4gIGlmICghZGF0YS5sZW5ndGgpIHJldHVybjtcblxuICBwLnVwZGF0ZVRyYWNrcyhkYXRhKTtcbiAgc3luY01peGVyKGRhdGEpO1xuICBlZGl0b3JBcGkuZmxhc2hMaW5lcyhibG9jay5zdGFydExpbmUsIGJsb2NrLmVuZExpbmUpO1xuICBzaG93U3RhdHVzKGBCbG9jayB1cGRhdGVkOiAke2Jsb2NrLm5hbWV9YCwgcGxheWluZyA/ICdwbGF5aW5nJyA6ICdyZWFkeScpO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlVmFyVG9vbHRpcChuYW1lKSB7XG4gIGlmICghbGFzdENvbnRleHQgfHwgIWxhc3RDb250ZXh0LmRhdGEgfHwgIWxhc3RDb250ZXh0LmRhdGFbbmFtZV0pIHJldHVybiBudWxsO1xuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSByZWR1Y2UobGFzdENvbnRleHQuZGF0YVtuYW1lXSwgbGFzdENvbnRleHQuZGF0YSk7XG4gICAgY29uc3Qgb3V0ID0gQXJyYXkuaXNBcnJheShkYXRhKSA/IGRhdGEuZmxhdChJbmZpbml0eSkgOiBbZGF0YV07XG4gICAgY29uc3Qgc2hvd24gPSBvdXQuc2xpY2UoMCwgMTYpLm1hcChpdGVtID0+IChcbiAgICAgIEFycmF5LmlzQXJyYXkoaXRlbSkgPyBpdGVtLmpvaW4oJ3wnKSA6IFN0cmluZyhpdGVtKVxuICAgICkpO1xuICAgIHJldHVybiBzaG93bi5qb2luKCcgICcpICsgKG91dC5sZW5ndGggPiBzaG93bi5sZW5ndGggPyAnIFx1MjAyNicgOiAnJyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlSW5zdHJ1bWVudFRvb2x0aXAodmFsdWUpIHtcbiAgY29uc3QgbiA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gIGlmIChOdW1iZXIuaXNOYU4obikpIHJldHVybiBudWxsO1xuICB0cnkge1xuICAgIGNvbnN0IGluZm8gPSBuID49IDIwMDBcbiAgICAgID8gcC5wbGF5ZXIubG9hZGVyLmRydW1JbmZvKG4gLSAyMDAwKVxuICAgICAgOiBwLnBsYXllci5sb2FkZXIuaW5zdHJ1bWVudEluZm8obik7XG4gICAgcmV0dXJuIGluZm8gJiYgaW5mby50aXRsZSA/IGluZm8udGl0bGUgOiBudWxsO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZU1vZGVUb29sdGlwKG5hbWUpIHtcbiAgaWYgKCFuYW1lKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIFNDQUxFX0lORk9bbmFtZS50b0xvd2VyQ2FzZSgpXSB8fCBudWxsO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVOb3RlKHMpIHtcbiAgcmV0dXJuIHMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzLnNsaWNlKDEpO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlTm90ZVRvb2x0aXAobm90ZVN0cikge1xuICBjb25zdCBTRU1JVE9ORVMgPSB7IGM6IDAsIGQ6IDIsIGU6IDQsIGY6IDUsIGc6IDcsIGE6IDksIGI6IDExIH07XG4gIGNvbnN0IG0gPSBub3RlU3RyLm1hdGNoKC9eKFthLWdBLUddKShbI2JdPykoXFxkKykkLyk7XG4gIGlmICghbSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGJhc2UgPSBTRU1JVE9ORVNbbVsxXS50b0xvd2VyQ2FzZSgpXTtcbiAgY29uc3QgYWx0ID0gbVsyXSA9PT0gJyMnID8gMSA6IG1bMl0gPT09ICdiJyA/IC0xIDogMDtcbiAgY29uc3Qgb2N0ID0gcGFyc2VJbnQobVszXSwgMTApO1xuICBjb25zdCBtaWRpID0gKG9jdCArIDEpICogMTIgKyBiYXNlICsgYWx0O1xuICBjb25zdCBmcmVxID0gKDQ0MCAqIE1hdGgucG93KDIsIChtaWRpIC0gNjkpIC8gMTIpKS50b0ZpeGVkKDEpO1xuICBjb25zdCBpc01pZGRsZUMgPSBtaWRpID09PSA2MDtcbiAgcmV0dXJuIGBNSURJICR7bWlkaX0gXHUwMEI3ICR7ZnJlcX0gSHoke2lzTWlkZGxlQyA/ICcgXHUwMEI3IG1pZGRsZSBDJyA6ICcnfWA7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVDaG9yZFRvb2x0aXAoY2hvcmRTdHIpIHtcbiAgcmV0dXJuIGNob3JkU3RyLnNwbGl0KCd8JykubWFwKG5vcm1hbGl6ZU5vdGUpLmpvaW4oJyAgJyk7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVNb2RlTm90ZXMobW9kZU5hbWUpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gc2NhbGUoYEM0ICR7bW9kZU5hbWV9YCk7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVWZWxvY2l0eVRvb2x0aXAodikge1xuICBjb25zdCBuID0gcGFyc2VJbnQodiwgMTApO1xuICBpZiAoTnVtYmVyLmlzTmFOKG4pIHx8IG4gPCAwIHx8IG4gPiAxMjcpIHJldHVybiBudWxsO1xuICBjb25zdCBwY3QgPSBNYXRoLnJvdW5kKChuIC8gMTI3KSAqIDEwMCk7XG4gIGNvbnN0IGRiID0gbiA+IDAgPyAoMjAgKiBNYXRoLmxvZzEwKG4gLyAxMjcpKS50b0ZpeGVkKDEpIDogJ1x1MjIxMlx1MjIxRSc7XG4gIGNvbnN0IGR5biA9IG4gPT09IDAgPyAnc2lsZW50IChwcHApJ1xuICAgIDogbiA8PSAyNSA/ICd2ZXJ5IHNvZnQgKHBwKSdcbiAgICA6IG4gPD0gNTAgPyAnc29mdCAobXApJ1xuICAgIDogbiA8PSA3NSA/ICdtZWRpdW0gKG1mKSdcbiAgICA6IG4gPD0gMTAwID8gJ2xvdWQgKGYpJ1xuICAgIDogbiA8PSAxMTUgPyAndmVyeSBsb3VkIChmZiknXG4gICAgOiAnbWF4aW11bSAoZmZmKSc7XG4gIHJldHVybiBgJHtwY3R9JSBvZiBtYXggXHUwMEI3ICR7ZGJ9IGRCIFx1MDBCNyAke2R5bn1gO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlU2VjdGlvblRvb2x0aXAobmFtZSkge1xuICBpZiAoIWVkaXRvckFwaSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGxpbmVzID0gZWRpdG9yQXBpLmdldFZhbHVlKCkuc3BsaXQoJ1xcbicpO1xuICBjb25zdCBzZWN0aW9uSGVhZGVyID0gYEAke25hbWV9YDtcbiAgY29uc3Qgc3RhcnQgPSBsaW5lcy5maW5kSW5kZXgobGluZSA9PiBsaW5lLnRyaW0oKSA9PT0gc2VjdGlvbkhlYWRlcik7XG4gIGlmIChzdGFydCA8IDApIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IHByZXZpZXcgPSBbXTtcbiAgZm9yIChsZXQgaSA9IHN0YXJ0ICsgMTsgaSA8IGxpbmVzLmxlbmd0aCAmJiBwcmV2aWV3Lmxlbmd0aCA8IDQ7IGkgKz0gMSkge1xuICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXTtcbiAgICBpZiAoL15cXHMqQC8udGVzdChsaW5lKSkgYnJlYWs7XG4gICAgaWYgKGxpbmUudHJpbSgpKSBwcmV2aWV3LnB1c2gobGluZS50cmltKCkpO1xuICB9XG4gIHJldHVybiBwcmV2aWV3Lmxlbmd0aCA/IHByZXZpZXcuam9pbignIHwgJykgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBzaG93RXJyb3IobXNnKSB7XG4gIGNsZWFyVGltZW91dChzdGF0dXNSZXNldFRpbWVyKTtcbiAgY29uc3Qgc3RhdHVzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdHVzLW1lc3NhZ2UnKTtcbiAgY29uc3Qgc3RhdHVzYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXR1c2JhcicpO1xuICBpZiAoc3RhdHVzRWwpIHtcbiAgICBzdGF0dXNFbC50ZXh0Q29udGVudCA9IGBFcnJvcjogJHttc2d9YDtcbiAgfVxuICBpZiAoc3RhdHVzYmFyKSB7XG4gICAgc3RhdHVzYmFyLmRhdGFzZXQuc3RhdGUgPSAnZXJyb3InO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dTdGF0dXMobXNnLCBzdGF0ZSA9ICdyZWFkeScpIHtcbiAgY2xlYXJUaW1lb3V0KHN0YXR1c1Jlc2V0VGltZXIpO1xuICBjb25zdCBzdGF0dXNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0dXMtbWVzc2FnZScpO1xuICBjb25zdCBzdGF0dXNiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdHVzYmFyJyk7XG4gIGlmIChzdGF0dXNFbCkge1xuICAgIHN0YXR1c0VsLnRleHRDb250ZW50ID0gbXNnO1xuICB9XG4gIGlmIChzdGF0dXNiYXIpIHtcbiAgICBzdGF0dXNiYXIuZGF0YXNldC5zdGF0ZSA9IHN0YXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldFJlYWR5U3RhdHVzKCkge1xuICBzaG93U3RhdHVzKCdSZWFkeScsICdyZWFkeScpO1xufVxuXG5mdW5jdGlvbiBtYXJrRGlydHkoKSB7XG4gIHNob3dTdGF0dXMoJ1Vuc2F2ZWQgY2hhbmdlcycsICd3YXJuaW5nJyk7XG59XG5cbmZ1bmN0aW9uIHNhdmVTdWNjZXNzKCkge1xuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBoaCA9IFN0cmluZyhub3cuZ2V0SG91cnMoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgY29uc3QgbW0gPSBTdHJpbmcobm93LmdldE1pbnV0ZXMoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgc2hvd1N0YXR1cyhgU2F2ZWQgJHtoaH06JHttbX1gLCAncmVhZHknKTtcbn1cblxuZnVuY3Rpb24gc2V0UXVlcnlMb2FkKG5hbWUpIHtcbiAgY29uc3QgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gIGlmIChuYW1lKSB7XG4gICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ2xvYWQnLCBuYW1lKTtcbiAgfSBlbHNlIHtcbiAgICB1cmwuc2VhcmNoUGFyYW1zLmRlbGV0ZSgnbG9hZCcpO1xuICB9XG4gIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7fSwgJycsIHVybC50b1N0cmluZygpKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUGxheUJ1dHRvbigpIHtcbiAgY29uc3QgcGxheUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5LWJ0bicpO1xuICBpZiAocGxheUJ0bikgcGxheUJ0bi50ZXh0Q29udGVudCA9IHBsYXlpbmcgPyAnXHUyNUI2IFBsYXlpbmcuLi4nIDogJ1x1MjVCNiBQbGF5Jztcbn1cblxuZnVuY3Rpb24gbG9hZFByZXNldEJ5TmFtZShuYW1lKSB7XG4gIGNvbnN0IHByZXNldCA9IFBSRVNFVFNbbmFtZV07XG4gIGlmICghZWRpdG9yQXBpIHx8ICFwcmVzZXQpIHJldHVybjtcblxuICBlZGl0b3JBcGkuc2V0VmFsdWUocHJlc2V0LnRyaW0oKSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFNUT1JBR0VfS0VZLCBlZGl0b3JBcGkuZ2V0VmFsdWUoKSk7XG4gIHNldFF1ZXJ5TG9hZChuYW1lKTtcbiAgc2hvd1N0YXR1cyhgTG9hZGVkIHByZXNldDogJHtQUkVTRVRfTEFCRUxTW25hbWVdIHx8IG5hbWV9YCwgJ3JlYWR5Jyk7XG4gIHVwZGF0ZUxvb3AoKTtcbiAgZWRpdG9yQXBpLmZvY3VzKCk7XG59XG5cbmZ1bmN0aW9uIHN5bmNNaXhlcihkYXRhKSB7XG4gIGlmICghbWl4ZXJBcGkpIHJldHVybjtcbiAgbWl4ZXJBcGkudXBkYXRlKGRhdGEpO1xufVxuXG5mdW5jdGlvbiBiaW5kR2xvYmFsU2hvcnRjdXRzKCkge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgY29uc3QgZWRpdGluZ0ZpZWxkID0gdGFyZ2V0ICYmIChcbiAgICAgIHRhcmdldC50YWdOYW1lID09PSAnVEVYVEFSRUEnXG4gICAgICB8fCB0YXJnZXQudGFnTmFtZSA9PT0gJ0lOUFVUJ1xuICAgICAgfHwgdGFyZ2V0LnRhZ05hbWUgPT09ICdTRUxFQ1QnXG4gICAgKTtcblxuICAgIGlmIChlLmNvZGUgPT09ICdTcGFjZScgJiYgIWVkaXRpbmdGaWVsZCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHBsYXlpbmcpIHN0b3AoKTtcbiAgICAgIGVsc2UgcGxheSgpO1xuICAgIH1cbiAgICBpZiAoZS5jb2RlID09PSAnRXNjYXBlJykge1xuICAgICAgc3RvcCgpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURPTShpbml0aWFsVGV4dCwgaW5pdGlhbFByZXNldCkge1xuICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9ICcnO1xuXG4gIGNvbnN0IHRvb2xiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9vbGJhci5pZCA9ICd0b29sYmFyJztcblxuICBjb25zdCBhYm91dExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGFib3V0TGluay5pZCA9ICdhYm91dC1saW5rJztcbiAgYWJvdXRMaW5rLmhyZWYgPSAnbGFuZGluZy5odG1sJztcbiAgYWJvdXRMaW5rLnRleHRDb250ZW50ID0gJ1x1MjE5MCBBYm91dCc7XG5cbiAgY29uc3QgcGxheUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBwbGF5QnRuLmlkID0gJ3BsYXktYnRuJztcbiAgcGxheUJ0bi50ZXh0Q29udGVudCA9ICdcdTI1QjYgUGxheSc7XG4gIHBsYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGF5KTtcblxuICBjb25zdCBzdG9wQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHN0b3BCdG4uaWQgPSAnc3RvcC1idG4nO1xuICBzdG9wQnRuLnRleHRDb250ZW50ID0gJ1x1MjVBMCBTdG9wJztcbiAgc3RvcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0b3ApO1xuXG4gIGNvbnN0IG1peGVyQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG1peGVyQnRuLmlkID0gJ21peGVyLWJ0bic7XG4gIG1peGVyQnRuLnRleHRDb250ZW50ID0gJ1x1MjI5RSBNaXhlcic7XG4gIGNvbnN0IG1pZGlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbWlkaUJ0bi5pZCA9ICdtaWRpLWJ0bic7XG4gIG1pZGlCdG4udGV4dENvbnRlbnQgPSAnXHVEODNDXHVERjlCIE1JREknO1xuICBtaWRpQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgbWlkaUJ0bi50aXRsZSA9ICdNSURJIHN1cHBvcnQgY29tZXMgbmV4dCc7XG5cbiAgY29uc3QgcHJlc2V0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBwcmVzZXRMYWJlbC5jbGFzc05hbWUgPSAnZmllbGQtZ3JvdXAnO1xuICBwcmVzZXRMYWJlbC50ZXh0Q29udGVudCA9ICdQcmVzZXQgJztcbiAgY29uc3QgcHJlc2V0U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIHByZXNldFNlbGVjdC5pZCA9ICdwcmVzZXQtc2VsZWN0JztcbiAgY29uc3QgY3VzdG9tT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGN1c3RvbU9wdGlvbi52YWx1ZSA9ICcnO1xuICBjdXN0b21PcHRpb24udGV4dENvbnRlbnQgPSAnQ3VzdG9tJztcbiAgcHJlc2V0U2VsZWN0LmFwcGVuZENoaWxkKGN1c3RvbU9wdGlvbik7XG4gIE9iamVjdC5rZXlzKFBSRVNFVFMpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uLnZhbHVlID0gbmFtZTtcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBQUkVTRVRfTEFCRUxTW25hbWVdIHx8IG5hbWU7XG4gICAgcHJlc2V0U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIH0pO1xuICBpZiAoaW5pdGlhbFByZXNldCAmJiBQUkVTRVRTW2luaXRpYWxQcmVzZXRdKSB7XG4gICAgcHJlc2V0U2VsZWN0LnZhbHVlID0gaW5pdGlhbFByZXNldDtcbiAgfVxuICBwcmVzZXRTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIGlmIChwcmVzZXRTZWxlY3QudmFsdWUpIHtcbiAgICAgIGxvYWRQcmVzZXRCeU5hbWUocHJlc2V0U2VsZWN0LnZhbHVlKTtcbiAgICB9XG4gIH0pO1xuICBwcmVzZXRMYWJlbC5hcHBlbmRDaGlsZChwcmVzZXRTZWxlY3QpO1xuXG4gIHRvb2xiYXIuYXBwZW5kQ2hpbGQoYWJvdXRMaW5rKTtcbiAgdG9vbGJhci5hcHBlbmRDaGlsZChwbGF5QnRuKTtcbiAgdG9vbGJhci5hcHBlbmRDaGlsZChzdG9wQnRuKTtcbiAgdG9vbGJhci5hcHBlbmRDaGlsZChtaXhlckJ0bik7XG4gIHRvb2xiYXIuYXBwZW5kQ2hpbGQobWlkaUJ0bik7XG4gIHRvb2xiYXIuYXBwZW5kQ2hpbGQocHJlc2V0TGFiZWwpO1xuXG4gIGVkaXRvckFwaSA9IGNyZWF0ZUVkaXRvcihpbml0aWFsVGV4dCwge1xuICAgIHJlc29sdmVOb3RlOiByZXNvbHZlTm90ZVRvb2x0aXAsXG4gICAgcmVzb2x2ZUNob3JkOiByZXNvbHZlQ2hvcmRUb29sdGlwLFxuICAgIHJlc29sdmVNb2RlOiByZXNvbHZlTW9kZVRvb2x0aXAsXG4gICAgcmVzb2x2ZU1vZGVOb3RlcyxcbiAgICByZXNvbHZlVmVsb2NpdHk6IHJlc29sdmVWZWxvY2l0eVRvb2x0aXAsXG4gICAgcmVzb2x2ZVNlY3Rpb246IHJlc29sdmVTZWN0aW9uVG9vbHRpcCxcbiAgICByZXNvbHZlVmFyOiByZXNvbHZlVmFyVG9vbHRpcCxcbiAgICByZXNvbHZlSW5zdHJ1bWVudDogcmVzb2x2ZUluc3RydW1lbnRUb29sdGlwLFxuICAgIG9uSW5wdXQ6ICgpID0+IHtcbiAgICAgIGNvbnN0IHByZXNldFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmVzZXQtc2VsZWN0Jyk7XG4gICAgICBpZiAocHJlc2V0U2VsZWN0KSBwcmVzZXRTZWxlY3QudmFsdWUgPSAnJztcbiAgICAgIHNldFF1ZXJ5TG9hZChudWxsKTtcbiAgICAgIG1hcmtEaXJ0eSgpO1xuICAgICAgdXBkYXRlTG9vcCgpO1xuICAgICAgc2F2ZURyYWZ0KCk7XG4gICAgfSxcbiAgfSk7XG5cbiAgZWRpdG9yQXBpLm9uKCdrZXlkb3duJywgZSA9PiB7XG4gICAgaWYgKChlLm1ldGFLZXkgfHwgZS5jdHJsS2V5KSAmJiBlLnNoaWZ0S2V5ICYmIGUuY29kZSA9PT0gJ0VudGVyJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZhbEJsb2NrKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICgoZS5tZXRhS2V5IHx8IGUuY3RybEtleSkgJiYgZS5jb2RlID09PSAnRW50ZXInKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAocGxheWluZykgc3RvcCgpO1xuICAgICAgZWxzZSBwbGF5KCk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBzdGF0dXNiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3RhdHVzYmFyLmlkID0gJ3N0YXR1c2Jhcic7XG4gIHN0YXR1c2Jhci5kYXRhc2V0LnN0YXRlID0gJ3JlYWR5JztcblxuICBjb25zdCBiZWF0RG90cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBiZWF0RG90cy5pZCA9ICdiZWF0LWRvdHMnO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyBpICs9IDEpIHtcbiAgICBjb25zdCBkb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZG90LmNsYXNzTmFtZSA9ICdiZWF0LWRvdCc7XG4gICAgYmVhdERvdHMuYXBwZW5kQ2hpbGQoZG90KTtcbiAgfVxuXG4gIGNvbnN0IHN0YXR1c01lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHN0YXR1c01lc3NhZ2UuaWQgPSAnc3RhdHVzLW1lc3NhZ2UnO1xuICBzdGF0dXNNZXNzYWdlLnRleHRDb250ZW50ID0gJ1JlYWR5JztcblxuICBzdGF0dXNiYXIuYXBwZW5kQ2hpbGQoYmVhdERvdHMpO1xuICBzdGF0dXNiYXIuYXBwZW5kQ2hpbGQoc3RhdHVzTWVzc2FnZSk7XG5cbiAgY29uc3Qgd29ya3NwYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdvcmtzcGFjZS5pZCA9ICd3b3Jrc3BhY2UnO1xuICBtaXhlckFwaSA9IGNyZWF0ZU1peGVyKHAsIHtcbiAgICB0ZW1wbyxcbiAgICBiYXJzLFxuICAgIHRyYW5zcG9zZSxcbiAgICBvbkNoYW5nZShuZXh0KSB7XG4gICAgICBpZiAodHlwZW9mIG5leHQudGVtcG8gPT09ICdudW1iZXInKSB0ZW1wbyA9IG5leHQudGVtcG87XG4gICAgICBpZiAodHlwZW9mIG5leHQuYmFycyA9PT0gJ251bWJlcicpIGJhcnMgPSBuZXh0LmJhcnM7XG4gICAgICBpZiAodHlwZW9mIG5leHQudHJhbnNwb3NlID09PSAnbnVtYmVyJykgdHJhbnNwb3NlID0gbmV4dC50cmFuc3Bvc2U7XG4gICAgICB1cGRhdGVMb29wKCk7XG4gICAgfSxcbiAgfSk7XG4gIG1peGVyQXBpLnRvZ2dsZShmYWxzZSk7XG4gIG1peGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG9wZW4gPSBtaXhlckFwaS50b2dnbGUoKTtcbiAgICB3b3Jrc3BhY2UuY2xhc3NMaXN0LnRvZ2dsZSgnbWl4ZXItb3BlbicsIG9wZW4pO1xuICB9KTtcbiAgcC5vbkJlYXQgPSAoa2V5LCB3aGVuLCBiZWF0SW5kZXgpID0+IHtcbiAgICBjb25zdCB3YWl0ID0gTWF0aC5tYXgoMCwgKHdoZW4gLSBwLmF1ZGlvQ29udGV4dC5jdXJyZW50VGltZSkgKiAxMDAwKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIG1peGVyQXBpLmZsYXNoVlUoa2V5KTtcbiAgICAgIGlmICghZWRpdG9yQXBpKSByZXR1cm47XG4gICAgICBjb25zdCBsaW5lcyA9IHRyYWNrTGluZU1hcC5nZXQoa2V5KTtcbiAgICAgIGlmICghbGluZXMgfHwgIWxpbmVzLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgZWRpdG9yQXBpLmZsYXNoQWN0aXZlVG9rZW5zKGxpbmVzLCBiZWF0SW5kZXgpO1xuICAgIH0sIHdhaXQpO1xuICB9O1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodG9vbGJhcik7XG4gIHdvcmtzcGFjZS5hcHBlbmRDaGlsZChlZGl0b3JBcGkuZWwpO1xuICB3b3Jrc3BhY2UuYXBwZW5kQ2hpbGQobWl4ZXJBcGkuZWwpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHdvcmtzcGFjZSk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3RhdHVzYmFyKTtcblxuICByZXR1cm4gZWRpdG9yQXBpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBsb2FkRXhhbXBsZShuYW1lKSB7XG4gIGlmIChQUkVTRVRTW25hbWVdKSByZXR1cm4gUFJFU0VUU1tuYW1lXTtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBleGFtcGxlcy8ke25hbWV9LmR1YmApO1xuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBpZ25vcmUgYW5kIHVzZSBmYWxsYmFja1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5hc3luYyBmdW5jdGlvbiByZXNvbHZlSW5pdGlhbERyYWZ0KCkge1xuICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICBjb25zdCBsb2FkID0gcGFyYW1zLmdldCgnbG9hZCcpO1xuXG4gIGlmIChsb2FkKSB7XG4gICAgY29uc3QgZHJhZnQgPSBhd2FpdCBsb2FkRXhhbXBsZShsb2FkKTtcbiAgICBpZiAoZHJhZnQpIHJldHVybiBkcmFmdC50cmltKCk7XG4gIH1cblxuICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU1RPUkFHRV9LRVkpIHx8IFRFVFJJUztcbn1cblxuZnVuY3Rpb24gc2F2ZURyYWZ0KCkge1xuICBjbGVhclRpbWVvdXQoZGVib3VuY2VUaW1lcik7XG4gIGRlYm91bmNlVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpZiAoZWRpdG9yQXBpKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTVE9SQUdFX0tFWSwgZWRpdG9yQXBpLmdldFZhbHVlKCkpO1xuICAgICAgc2F2ZVN1Y2Nlc3MoKTtcbiAgICB9XG4gIH0sIDMwMCk7XG59XG5cbmZ1bmN0aW9uIHBsYXkoKSB7XG4gIHN0b3AoKTtcbiAgaWYgKCFlZGl0b3JBcGkpIHJldHVybjtcblxuICBpZiAocC5hdWRpb0NvbnRleHQuc3RhdGUgPT09ICdzdXNwZW5kZWQnKSB7XG4gICAgcC5hdWRpb0NvbnRleHQucmVzdW1lKCk7XG4gIH1cbiAgcGxheWluZyA9IHRydWU7XG4gIGNvbnN0IGRhdGEgPSBnZXREYXRhKGVkaXRvckFwaS5nZXRWYWx1ZSgpKTtcbiAgcC5zZXRMb29wTWFjaGluZShkYXRhLCB0ZW1wbywgYmFycywgdHJhbnNwb3NlKTtcbiAgc3luY01peGVyKGRhdGEpO1xuICBwLnBsYXlMb29wTWFjaGluZSgpO1xuICB1cGRhdGVQbGF5QnV0dG9uKCk7XG4gIHNob3dTdGF0dXMoJ1BsYXlpbmcnLCAncGxheWluZycpO1xufVxuXG5mdW5jdGlvbiBzdG9wKCkge1xuICBpZiAocGxheWluZykge1xuICAgIHBsYXlpbmcgPSBmYWxzZTtcbiAgICBwLnN0b3BMb29wTWFjaGluZSgpO1xuICB9XG4gIGlmIChlZGl0b3JBcGkpIHtcbiAgICBlZGl0b3JBcGkuY2xlYXJBY3RpdmVUb2tlbkhpZ2hsaWdodCgpO1xuICB9XG4gIHVwZGF0ZVBsYXlCdXR0b24oKTtcbiAgc2V0UmVhZHlTdGF0dXMoKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlTG9vcCgpIHtcbiAgaWYgKCFlZGl0b3JBcGkgfHwgIXApIHJldHVybjtcblxuICBjb25zdCBkYXRhID0gZ2V0RGF0YShlZGl0b3JBcGkuZ2V0VmFsdWUoKSk7XG4gIGNvbnN0IGNoYW5nZWQgPSBwLnNldExvb3BNYWNoaW5lKGRhdGEsIHRlbXBvLCBiYXJzLCB0cmFuc3Bvc2UpO1xuICBzeW5jTWl4ZXIoZGF0YSk7XG4gIGlmIChjaGFuZ2VkICYmIHBsYXlpbmcpIHtcbiAgICBwLnBsYXlMb29wTWFjaGluZShwLmJlYXRJbmRleCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYmVhdEluZGljYXRvcigpIHtcbiAgY29uc3QgZG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iZWF0LWRvdCcpO1xuICBjb25zdCBhY3RpdmVJbmRleCA9IHAubG9vcFN0YXJ0ZWQgPyBwLmJlYXRJbmRleCA6IC0xO1xuICBkb3RzLmZvckVhY2goKGRvdCwgaSkgPT4gZG90LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIGkgPT09IGFjdGl2ZUluZGV4KSk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShiZWF0SW5kaWNhdG9yKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gYm9vdHN0cmFwKCkge1xuICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICBjb25zdCBpbml0aWFsUHJlc2V0ID0gcGFyYW1zLmdldCgnbG9hZCcpO1xuICBjb25zdCBpbml0aWFsRHJhZnQgPSBhd2FpdCByZXNvbHZlSW5pdGlhbERyYWZ0KCk7XG4gIGNvbnN0IGVkaXRvciA9IGNyZWF0ZURPTShpbml0aWFsRHJhZnQsIGluaXRpYWxQcmVzZXQpO1xuICBiaW5kR2xvYmFsU2hvcnRjdXRzKCk7XG4gIGNvbnN0IGRhdGEgPSBnZXREYXRhKGVkaXRvci5nZXRWYWx1ZSgpKTtcbiAgcC5zZXRMb29wTWFjaGluZShkYXRhLCB0ZW1wbywgYmFycywgdHJhbnNwb3NlKTtcbiAgc3luY01peGVyKGRhdGEpO1xuICBzZXRSZWFkeVN0YXR1cygpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYmVhdEluZGljYXRvcik7XG59XG5cbmJvb3RzdHJhcCgpO1xuXG5leHBvcnQgZGVmYXVsdCB7fTtcbiIsICIndXNlIHN0cmljdCdcblxuLy8gdXRpbFxuZnVuY3Rpb24gZmlsbFN0ciAocywgbnVtKSB7IHJldHVybiBBcnJheShudW0gKyAxKS5qb2luKHMpIH1cbmZ1bmN0aW9uIGlzTnVtICh4KSB7IHJldHVybiB0eXBlb2YgeCA9PT0gJ251bWJlcicgfVxuZnVuY3Rpb24gaXNTdHIgKHgpIHsgcmV0dXJuIHR5cGVvZiB4ID09PSAnc3RyaW5nJyB9XG5mdW5jdGlvbiBpc0RlZiAoeCkgeyByZXR1cm4gdHlwZW9mIHggIT09ICd1bmRlZmluZWQnIH1cbmZ1bmN0aW9uIG1pZGlUb0ZyZXEgKG1pZGksIHR1bmluZykge1xuICByZXR1cm4gTWF0aC5wb3coMiwgKG1pZGkgLSA2OSkgLyAxMikgKiAodHVuaW5nIHx8IDQ0MClcbn1cblxudmFyIFJFR0VYID0gL14oW2EtZ0EtR10pKCN7MSx9fGJ7MSx9fHh7MSx9fCkoLT9cXGQqKVxccyooLiopXFxzKiQvXG4vKipcbiAqIEEgcmVnZXggZm9yIG1hdGNoaW5nIG5vdGUgc3RyaW5ncyBpbiBzY2llbnRpZmljIG5vdGF0aW9uLlxuICpcbiAqIEBuYW1lIHJlZ2V4XG4gKiBAZnVuY3Rpb25cbiAqIEByZXR1cm4ge1JlZ0V4cH0gdGhlIHJlZ2V4cCB1c2VkIHRvIHBhcnNlIHRoZSBub3RlIG5hbWVcbiAqXG4gKiBUaGUgbm90ZSBzdHJpbmcgc2hvdWxkIGhhdmUgdGhlIGZvcm0gYGxldHRlclthY2NpZGVudGFsc11bb2N0YXZlXVtlbGVtZW50XWBcbiAqIHdoZXJlOlxuICpcbiAqIC0gbGV0dGVyOiAoUmVxdWlyZWQpIGlzIGEgbGV0dGVyIGZyb20gQSB0byBHIGVpdGhlciB1cHBlciBvciBsb3dlciBjYXNlXG4gKiAtIGFjY2lkZW50YWxzOiAoT3B0aW9uYWwpIGNhbiBiZSBvbmUgb3IgbW9yZSBgYmAgKGZsYXRzKSwgYCNgIChzaGFycHMpIG9yIGB4YCAoZG91YmxlIHNoYXJwcykuXG4gKiBUaGV5IGNhbiBOT1QgYmUgbWl4ZWQuXG4gKiAtIG9jdGF2ZTogKE9wdGlvbmFsKSBhIHBvc2l0aXZlIG9yIG5lZ2F0aXZlIGludGVnZXJcbiAqIC0gZWxlbWVudDogKE9wdGlvbmFsKSBhZGRpdGlvbmFsbHkgYW55dGhpbmcgYWZ0ZXIgdGhlIGR1cmF0aW9uIGlzIGNvbnNpZGVyZWQgdG9cbiAqIGJlIHRoZSBlbGVtZW50IG5hbWUgKGZvciBleGFtcGxlOiAnQzIgZG9yaWFuJylcbiAqXG4gKiBUaGUgZXhlY3V0ZWQgcmVnZXggY29udGFpbnMgKGJ5IGFycmF5IGluZGV4KTpcbiAqXG4gKiAtIDA6IHRoZSBjb21wbGV0ZSBzdHJpbmdcbiAqIC0gMTogdGhlIG5vdGUgbGV0dGVyXG4gKiAtIDI6IHRoZSBvcHRpb25hbCBhY2NpZGVudGFsc1xuICogLSAzOiB0aGUgb3B0aW9uYWwgb2N0YXZlXG4gKiAtIDQ6IHRoZSByZXN0IG9mIHRoZSBzdHJpbmcgKHRyaW1tZWQpXG4gKlxuICogQGV4YW1wbGVcbiAqIHZhciBwYXJzZXIgPSByZXF1aXJlKCdub3RlLXBhcnNlcicpXG4gKiBwYXJzZXIucmVnZXguZXhlYygnYyM0JylcbiAqIC8vID0+IFsnYyM0JywgJ2MnLCAnIycsICc0JywgJyddXG4gKiBwYXJzZXIucmVnZXguZXhlYygnYyM0IG1ham9yJylcbiAqIC8vID0+IFsnYyM0bWFqb3InLCAnYycsICcjJywgJzQnLCAnbWFqb3InXVxuICogcGFyc2VyLnJlZ2V4KCkuZXhlYygnQ01hajcnKVxuICogLy8gPT4gWydDTWFqNycsICdDJywgJycsICcnLCAnTWFqNyddXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdleCAoKSB7IHJldHVybiBSRUdFWCB9XG5cbnZhciBTRU1JVE9ORVMgPSBbMCwgMiwgNCwgNSwgNywgOSwgMTFdXG4vKipcbiAqIFBhcnNlIGEgbm90ZSBuYW1lIGluIHNjaWVudGlmaWMgbm90YXRpb24gYW4gcmV0dXJuIGl0J3MgY29tcG9uZW50cyxcbiAqIGFuZCBzb21lIG51bWVyaWMgcHJvcGVydGllcyBpbmNsdWRpbmcgbWlkaSBudW1iZXIgYW5kIGZyZXF1ZW5jeS5cbiAqXG4gKiBAbmFtZSBwYXJzZVxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbm90ZSAtIHRoZSBub3RlIHN0cmluZyB0byBiZSBwYXJzZWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNUb25pYyAtIHRydWUgdGhlIHN0cmluZ3MgaXQncyBzdXBwb3NlZCB0byBjb250YWluIGEgbm90ZSBudW1iZXJcbiAqIGFuZCBzb21lIGNhdGVnb3J5IChmb3IgZXhhbXBsZSBhbiBzY2FsZTogJ0MjIG1ham9yJykuIEl0J3MgZmFsc2UgYnkgZGVmYXVsdCxcbiAqIGJ1dCB3aGVuIHRydWUsIGVuIGV4dHJhIHRvbmljT2YgcHJvcGVydHkgaXMgcmV0dXJuZWQgd2l0aCB0aGUgY2F0ZWdvcnkgKCdtYWpvcicpXG4gKiBAcGFyYW0ge0Zsb2F0fSB0dW5uaW5nIC0gVGhlIGZyZXF1ZW5jeSBvZiBBNCBub3RlIHRvIGNhbGN1bGF0ZSBmcmVxdWVuY2llcy5cbiAqIEJ5IGRlZmF1bHQgaXQgNDQwLlxuICogQHJldHVybiB7T2JqZWN0fSB0aGUgcGFyc2VkIG5vdGUgbmFtZSBvciBudWxsIGlmIG5vdCBhIHZhbGlkIG5vdGVcbiAqXG4gKiBUaGUgcGFyc2VkIG5vdGUgbmFtZSBvYmplY3Qgd2lsbCBBTFdBWVMgY29udGFpbnM6XG4gKiAtIGxldHRlcjogdGhlIHVwcGVyY2FzZSBsZXR0ZXIgb2YgdGhlIG5vdGVcbiAqIC0gYWNjOiB0aGUgYWNjaWRlbnRhbHMgb2YgdGhlIG5vdGUgKG9ubHkgc2hhcnBzIG9yIGZsYXRzKVxuICogLSBwYzogdGhlIHBpdGNoIGNsYXNzIChsZXR0ZXIgKyBhY2MpXG4gKiAtIHN0ZXA6IHMgYSBudW1lcmljIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBsZXR0ZXIuIEl0J3MgYW4gaW50ZWdlciBmcm9tIDAgdG8gNlxuICogd2hlcmUgMCA9IEMsIDEgPSBEIC4uLiA2ID0gQlxuICogLSBhbHQ6IGEgbnVtZXJpYyByZXByZXNlbnRhdGlvbiBvZiB0aGUgYWNjaWRlbnRhbHMuIDAgbWVhbnMgbm8gYWx0ZXJhdGlvbixcbiAqIHBvc2l0aXZlIG51bWJlcnMgYXJlIGZvciBzaGFycHMgYW5kIG5lZ2F0aXZlIGZvciBmbGF0c1xuICogLSBjaHJvbWE6IGEgbnVtZXJpYyByZXByZXNlbnRhdGlvbiBvZiB0aGUgcGl0Y2ggY2xhc3MuIEl0J3MgbGlrZSBtaWRpIGZvclxuICogcGl0Y2ggY2xhc3Nlcy4gMCA9IEMsIDEgPSBDIywgMiA9IEQgLi4uIDExID0gQi4gQ2FuIGJlIHVzZWQgdG8gZmluZCBlbmhhcm1vbmljc1xuICogc2luY2UsIGZvciBleGFtcGxlLCBjaHJvbWEgb2YgJ0NiJyBhbmQgJ0InIGFyZSBib3RoIDExXG4gKlxuICogSWYgdGhlIG5vdGUgaGFzIG9jdGF2ZSwgdGhlIHBhcnNlciBvYmplY3Qgd2lsbCBjb250YWluOlxuICogLSBvY3Q6IHRoZSBvY3RhdmUgbnVtYmVyIChhcyBpbnRlZ2VyKVxuICogLSBtaWRpOiB0aGUgbWlkaSBudW1iZXJcbiAqIC0gZnJlcTogdGhlIGZyZXF1ZW5jeSAodXNpbmcgdHVuaW5nIHBhcmFtZXRlciBhcyBiYXNlKVxuICpcbiAqIElmIHRoZSBwYXJhbWV0ZXIgYGlzVG9uaWNgIGlzIHNldCB0byB0cnVlLCB0aGUgcGFyc2VkIG9iamVjdCB3aWxsIGNvbnRhaW46XG4gKiAtIHRvbmljT2Y6IHRoZSByZXN0IG9mIHRoZSBzdHJpbmcgdGhhdCBmb2xsb3dzIG5vdGUgbmFtZSAobGVmdCBhbmQgcmlnaHQgdHJpbW1lZClcbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIHBhcnNlID0gcmVxdWlyZSgnbm90ZS1wYXJzZXInKS5wYXJzZVxuICogcGFyc2UoJ0NiNCcpXG4gKiAvLyA9PiB7IGxldHRlcjogJ0MnLCBhY2M6ICdiJywgcGM6ICdDYicsIHN0ZXA6IDAsIGFsdDogLTEsIGNocm9tYTogLTEsXG4gKiAgICAgICAgIG9jdDogNCwgbWlkaTogNTksIGZyZXE6IDI0Ni45NDE2NTA2MjgwNjIwNiB9XG4gKiAvLyBpZiBubyBvY3RhdmUsIG5vIG1pZGksIG5vIGZyZXFcbiAqIHBhcnNlKCdmeCcpXG4gKiAvLyA9PiB7IGxldHRlcjogJ0YnLCBhY2M6ICcjIycsIHBjOiAnRiMjJywgc3RlcDogMywgYWx0OiAyLCBjaHJvbWE6IDcgfSlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlIChzdHIsIGlzVG9uaWMsIHR1bmluZykge1xuICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHJldHVybiBudWxsXG4gIHZhciBtID0gUkVHRVguZXhlYyhzdHIpXG4gIGlmICghbSB8fCAoIWlzVG9uaWMgJiYgbVs0XSkpIHJldHVybiBudWxsXG5cbiAgdmFyIHAgPSB7IGxldHRlcjogbVsxXS50b1VwcGVyQ2FzZSgpLCBhY2M6IG1bMl0ucmVwbGFjZSgveC9nLCAnIyMnKSB9XG4gIHAucGMgPSBwLmxldHRlciArIHAuYWNjXG4gIHAuc3RlcCA9IChwLmxldHRlci5jaGFyQ29kZUF0KDApICsgMykgJSA3XG4gIHAuYWx0ID0gcC5hY2NbMF0gPT09ICdiJyA/IC1wLmFjYy5sZW5ndGggOiBwLmFjYy5sZW5ndGhcbiAgdmFyIHBvcyA9IFNFTUlUT05FU1twLnN0ZXBdICsgcC5hbHRcbiAgcC5jaHJvbWEgPSBwb3MgPCAwID8gMTIgKyBwb3MgOiBwb3MgJSAxMlxuICBpZiAobVszXSkgeyAvLyBoYXMgb2N0YXZlXG4gICAgcC5vY3QgPSArbVszXVxuICAgIHAubWlkaSA9IHBvcyArIDEyICogKHAub2N0ICsgMSlcbiAgICBwLmZyZXEgPSBtaWRpVG9GcmVxKHAubWlkaSwgdHVuaW5nKVxuICB9XG4gIGlmIChpc1RvbmljKSBwLnRvbmljT2YgPSBtWzRdXG4gIHJldHVybiBwXG59XG5cbnZhciBMRVRURVJTID0gJ0NERUZHQUInXG5mdW5jdGlvbiBhY2NTdHIgKG4pIHsgcmV0dXJuICFpc051bShuKSA/ICcnIDogbiA8IDAgPyBmaWxsU3RyKCdiJywgLW4pIDogZmlsbFN0cignIycsIG4pIH1cbmZ1bmN0aW9uIG9jdFN0ciAobikgeyByZXR1cm4gIWlzTnVtKG4pID8gJycgOiAnJyArIG4gfVxuXG4vKipcbiAqIENyZWF0ZSBhIHN0cmluZyBmcm9tIGEgcGFyc2VkIG9iamVjdCBvciBgc3RlcCwgYWx0ZXJhdGlvbiwgb2N0YXZlYCBwYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gdGhlIHBhcnNlZCBkYXRhIG9iamVjdFxuICogQHJldHVybiB7U3RyaW5nfSBhIG5vdGUgc3RyaW5nIG9yIG51bGwgaWYgbm90IHZhbGlkIHBhcmFtZXRlcnNcbiAqIEBzaW5jZSAxLjJcbiAqIEBleGFtcGxlXG4gKiBwYXJzZXIuYnVpbGQocGFyc2VyLnBhcnNlKCdjYjInKSkgLy8gPT4gJ0NiMidcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gaXQgYWNjZXB0cyAoc3RlcCwgYWx0ZXJhdGlvbiwgb2N0YXZlKSBwYXJhbWV0ZXJzOlxuICogcGFyc2VyLmJ1aWxkKDMpIC8vID0+ICdGJ1xuICogcGFyc2VyLmJ1aWxkKDMsIC0xKSAvLyA9PiAnRmInXG4gKiBwYXJzZXIuYnVpbGQoMywgLTEsIDQpIC8vID0+ICdGYjQnXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidWlsZCAocywgYSwgbykge1xuICBpZiAocyA9PT0gbnVsbCB8fCB0eXBlb2YgcyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBudWxsXG4gIGlmIChzLnN0ZXApIHJldHVybiBidWlsZChzLnN0ZXAsIHMuYWx0LCBzLm9jdClcbiAgaWYgKHMgPCAwIHx8IHMgPiA2KSByZXR1cm4gbnVsbFxuICByZXR1cm4gTEVUVEVSUy5jaGFyQXQocykgKyBhY2NTdHIoYSkgKyBvY3RTdHIobylcbn1cblxuLyoqXG4gKiBHZXQgbWlkaSBvZiBhIG5vdGVcbiAqXG4gKiBAbmFtZSBtaWRpXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfEludGVnZXJ9IG5vdGUgLSB0aGUgbm90ZSBuYW1lIG9yIG1pZGkgbnVtYmVyXG4gKiBAcmV0dXJuIHtJbnRlZ2VyfSB0aGUgbWlkaSBudW1iZXIgb2YgdGhlIG5vdGUgb3IgbnVsbCBpZiBub3QgYSB2YWxpZCBub3RlXG4gKiBvciB0aGUgbm90ZSBkb2VzIE5PVCBjb250YWlucyBvY3RhdmVcbiAqIEBleGFtcGxlXG4gKiB2YXIgcGFyc2VyID0gcmVxdWlyZSgnbm90ZS1wYXJzZXInKVxuICogcGFyc2VyLm1pZGkoJ0E0JykgLy8gPT4gNjlcbiAqIHBhcnNlci5taWRpKCdBJykgLy8gPT4gbnVsbFxuICogQGV4YW1wbGVcbiAqIC8vIG1pZGkgbnVtYmVycyBhcmUgYnlwYXNzZWQgKGV2ZW4gYXMgc3RyaW5ncylcbiAqIHBhcnNlci5taWRpKDYwKSAvLyA9PiA2MFxuICogcGFyc2VyLm1pZGkoJzYwJykgLy8gPT4gNjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1pZGkgKG5vdGUpIHtcbiAgaWYgKChpc051bShub3RlKSB8fCBpc1N0cihub3RlKSkgJiYgbm90ZSA+PSAwICYmIG5vdGUgPCAxMjgpIHJldHVybiArbm90ZVxuICB2YXIgcCA9IHBhcnNlKG5vdGUpXG4gIHJldHVybiBwICYmIGlzRGVmKHAubWlkaSkgPyBwLm1pZGkgOiBudWxsXG59XG5cbi8qKlxuICogR2V0IGZyZXEgb2YgYSBub3RlIGluIGhlcnR6cyAoaW4gYSB3ZWxsIHRlbXBlcmVkIDQ0MEh6IEE0KVxuICpcbiAqIEBuYW1lIGZyZXFcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5vdGUgLSB0aGUgbm90ZSBuYW1lIG9yIG5vdGUgbWlkaSBudW1iZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSB0dW5pbmcgLSAoT3B0aW9uYWwpIHRoZSBBNCBmcmVxdWVuY3kgKDQ0MCBieSBkZWZhdWx0KVxuICogQHJldHVybiB7RmxvYXR9IHRoZSBmcmVxIG9mIHRoZSBudW1iZXIgaWYgaGVydHpzIG9yIG51bGwgaWYgbm90IHZhbGlkIG5vdGVcbiAqIEBleGFtcGxlXG4gKiB2YXIgcGFyc2VyID0gcmVxdWlyZSgnbm90ZS1wYXJzZXInKVxuICogcGFyc2VyLmZyZXEoJ0E0JykgLy8gPT4gNDQwXG4gKiBwYXJzZXIuZnJlcSgnQScpIC8vID0+IG51bGxcbiAqIEBleGFtcGxlXG4gKiAvLyBjYW4gY2hhbmdlIHR1bmluZyAoNDQwIGJ5IGRlZmF1bHQpXG4gKiBwYXJzZXIuZnJlcSgnQTQnLCA0NDQpIC8vID0+IDQ0NFxuICogcGFyc2VyLmZyZXEoJ0EzJywgNDQ0KSAvLyA9PiAyMjJcbiAqIEBleGFtcGxlXG4gKiAvLyBpdCBhY2NlcHRzIG1pZGkgbnVtYmVycyAoYXMgbnVtYmVycyBhbmQgYXMgc3RyaW5ncylcbiAqIHBhcnNlci5mcmVxKDY5KSAvLyA9PiA0NDBcbiAqIHBhcnNlci5mcmVxKCc2OScsIDQ0MikgLy8gPT4gNDQyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcmVxIChub3RlLCB0dW5pbmcpIHtcbiAgdmFyIG0gPSBtaWRpKG5vdGUpXG4gIHJldHVybiBtID09PSBudWxsID8gbnVsbCA6IG1pZGlUb0ZyZXEobSwgdHVuaW5nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbGV0dGVyIChzcmMpIHsgcmV0dXJuIChwYXJzZShzcmMpIHx8IHt9KS5sZXR0ZXIgfVxuZXhwb3J0IGZ1bmN0aW9uIGFjYyAoc3JjKSB7IHJldHVybiAocGFyc2Uoc3JjKSB8fCB7fSkuYWNjIH1cbmV4cG9ydCBmdW5jdGlvbiBwYyAoc3JjKSB7IHJldHVybiAocGFyc2Uoc3JjKSB8fCB7fSkucGMgfVxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXAgKHNyYykgeyByZXR1cm4gKHBhcnNlKHNyYykgfHwge30pLnN0ZXAgfVxuZXhwb3J0IGZ1bmN0aW9uIGFsdCAoc3JjKSB7IHJldHVybiAocGFyc2Uoc3JjKSB8fCB7fSkuYWx0IH1cbmV4cG9ydCBmdW5jdGlvbiBjaHJvbWEgKHNyYykgeyByZXR1cm4gKHBhcnNlKHNyYykgfHwge30pLmNocm9tYSB9XG5leHBvcnQgZnVuY3Rpb24gb2N0IChzcmMpIHsgcmV0dXJuIChwYXJzZShzcmMpIHx8IHt9KS5vY3QgfVxuIiwgIi8qKlxuICogQSBtaWRpIG5vdGUgbnVtYmVyIGlzIGEgbnVtYmVyIHJlcHJlc2VudGF0aW9uIG9mIGEgbm90ZSBwaXRjaC4gSXQgY2FuIGJlXG4gKiBpbnRlZ2VycyBzbyBpdCdzIGVxdWFsIHRlbXBlcmVkIHR1bmVkLCBvciBmbG9hdCB0byBpbmRpY2F0ZSBpdCdzIG5vdFxuICogdHVuZWQgaW50byBlcXVhbCB0ZW1lcGVyZWQgc2NhbGUuXG4gKlxuICogVGhpcyBtb2R1bGUgY29udGFpbnMgZnVuY3Rpb25zIHRvIGNvbnZlcnQgdG8gYW5kIGZyb20gbWlkaSBub3Rlcy5cbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIG1pZGkgPSByZXF1aXJlKCd0b25hbC1taWRpJylcbiAqIG1pZGkudG9NaWRpKCdBNCcpIC8vID0+IDY5XG4gKiBtaWRpLm5vdGUoNjkpIC8vID0+ICdBNCdcbiAqIG1pZGkubm90ZSg2MSkgLy8gPT4gJ0RiNCdcbiAqIG1pZGkubm90ZSg2MSwgdHJ1ZSkgLy8gPT4gJ0MjNCdcbiAqXG4gKiBAbW9kdWxlIG1pZGlcbiAqL1xuXG5pbXBvcnQgeyBtaWRpIH0gZnJvbSAnbm90ZS1wYXJzZXInXG5cbi8qKlxuICogQ29udmVydCB0aGUgZ2l2ZW4gbm90ZSB0byBhIG1pZGkgbm90ZSBudW1iZXIuIElmIHlvdSBwYXNzIGEgbWlkaSBudW1iZXIgaXRcbiAqIHdpbGwgcmV0dXJuZWQgYXMgaXMuXG4gKlxuICogQHBhcmFtIHtBcnJheXxTdHJpbmd8TnVtYmVyfSBub3RlIC0gdGhlIG5vdGUgdG8gZ2V0IHRoZSBtaWRpIG51bWJlciBmcm9tXG4gKiBAcmV0dXJuIHtJbnRlZ2VyfSB0aGUgbWlkaSBudW1iZXIgb3IgbnVsbCBpZiBub3QgdmFsaWQgcGl0Y2hcbiAqIEBleGFtcGxlXG4gKiBtaWRpLnRvTWlkaSgnQzQnKSAvLyA9PiA2MFxuICogbWlkaS50b01pZGkoNjApIC8vID0+IDYwXG4gKiBtaWRpLnRvTWlkaSgnNjAnKSAvLyA9PiA2MFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9NaWRpICh2YWwpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSAmJiB2YWwubGVuZ3RoID09PSAyKSByZXR1cm4gdmFsWzBdICogNyArIHZhbFsxXSAqIDEyICsgMTJcbiAgcmV0dXJuIG1pZGkodmFsKVxufVxuXG52YXIgRkxBVFMgPSAnQyBEYiBEIEViIEUgRiBHYiBHIEFiIEEgQmIgQicuc3BsaXQoJyAnKVxudmFyIFNIQVJQUyA9ICdDIEMjIEQgRCMgRSBGIEYjIEcgRyMgQSBBIyBCJy5zcGxpdCgnICcpXG5cbi8qKlxuICogR2l2ZW4gYSBtaWRpIG51bWJlciwgcmV0dXJucyBhIG5vdGUgbmFtZS4gVGhlIGFsdGVyZWQgbm90ZXMgd2lsbCBoYXZlXG4gKiBmbGF0cyB1bmxlc3MgZXhwbGljaXRseSBzZXQgd2l0aCB0aGUgb3B0aW9uYWwgYHVzZVNoYXJwc2AgcGFyYW1ldGVyLlxuICpcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtJbnRlZ2VyfSBtaWRpIC0gdGhlIG1pZGkgbm90ZSBudW1iZXJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlU2hhcnBzIC0gKE9wdGlvbmFsKSBzZXQgdG8gdHJ1ZSB0byB1c2Ugc2hhcnBzIGluc3RlYWQgb2YgZmxhdHNcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIG5vdGUgbmFtZVxuICogQGV4YW1wbGVcbiAqIHZhciBtaWRpID0gcmVxdWlyZSgndG9uYWwtbWlkaScpXG4gKiBtaWRpLm5vdGUoNjEpIC8vID0+ICdEYjQnXG4gKiBtaWRpLm5vdGUoNjEsIHRydWUpIC8vID0+ICdDIzQnXG4gKiAvLyBpdCByb3VuZHMgdG8gbmVhcmVzdCBub3RlXG4gKiBtaWRpLm5vdGUoNjEuNykgLy8gPT4gJ0Q0J1xuICovXG5leHBvcnQgZnVuY3Rpb24gbm90ZSAobnVtLCBzaGFycHMpIHtcbiAgaWYgKG51bSA9PT0gdHJ1ZSB8fCBudW0gPT09IGZhbHNlKSByZXR1cm4gZnVuY3Rpb24gKG0pIHsgcmV0dXJuIG5vdGUobSwgbnVtKSB9XG4gIG51bSA9IE1hdGgucm91bmQobnVtKVxuICB2YXIgcGNzID0gc2hhcnBzID09PSB0cnVlID8gU0hBUlBTIDogRkxBVFNcbiAgdmFyIHBjID0gcGNzW251bSAlIDEyXVxuICB2YXIgbyA9IE1hdGguZmxvb3IobnVtIC8gMTIpIC0gMVxuICByZXR1cm4gcGMgKyBvXG59XG4iLCAie1xuICBcIm5hbWVcIjogXCJtaWRpLXdyaXRlci1qc1wiLFxuICBcInZlcnNpb25cIjogXCIyLjAuMVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQSBsaWJyYXJ5IHByb3ZpZGluZyBhbiBBUEkgZm9yIGdlbmVyYXRpbmcgTUlESSBmaWxlcy5cIixcbiAgXCJtYWluXCI6IFwiYnVpbGQvaW5kZXguanNcIixcbiAgXCJ0eXBlc1wiOiBcInR5cGVzLmQudHNcIixcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwidG9uYWwtbWlkaVwiOiBcIl4wLjY5LjdcIlxuICB9LFxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAYmFiZWwvY29yZVwiOiBcIl43LjkuNlwiLFxuICAgIFwiQGJhYmVsL3BsdWdpbi10cmFuc2Zvcm0tZGVzdHJ1Y3R1cmluZ1wiOiBcIl43LjkuNVwiLFxuICAgIFwiQGJhYmVsL3ByZXNldC1lbnZcIjogXCJeNy45LjZcIixcbiAgICBcIkByb2xsdXAvcGx1Z2luLWJhYmVsXCI6IFwiXjUuMC4wXCIsXG4gICAgXCJlc2xpbnRcIjogXCJeNy4wLjBcIixcbiAgICBcImVzbGludC1jb25maWctc3RhbmRhcmRcIjogXCJeMTIuMC4wXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLWltcG9ydFwiOiBcIl4yLjIwLjJcIixcbiAgICBcImVzbGludC1wbHVnaW4tbm9kZVwiOiBcIl45LjIuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1wcm9taXNlXCI6IFwiXjQuMS4xXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXN0YW5kYXJkXCI6IFwiXjQuMC4xXCIsXG4gICAgXCJqc2RvY1wiOiBcIl4zLjYuNFwiLFxuICAgIFwibWluYW1pXCI6IFwiXjEuMi4zXCIsXG4gICAgXCJtb2NoYVwiOiBcIl45LjAuMVwiLFxuICAgIFwibnljXCI6IFwiXjE1LjAuMVwiLFxuICAgIFwicm9sbHVwXCI6IFwiXjIuOS4wXCIsXG4gICAgXCJ3YXRjaFwiOiBcIl4xLjAuMlwiXG4gIH0sXG4gIFwiZGlyZWN0b3JpZXNcIjoge1xuICAgIFwibGliXCI6IFwic3JjXCIsXG4gICAgXCJleGFtcGxlXCI6IFwiZXhhbXBsZXNcIixcbiAgICBcInRlc3RcIjogXCJ0ZXN0XCJcbiAgfSxcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcImJ1aWxkXCI6IFwibWtkaXIgLXAgYnVpbGQgJiYgcm9sbHVwIC1jICYmIG5wbSBydW4gZG9jc1wiLFxuICAgIFwiZG9jc1wiOiBcIi4vbm9kZV9tb2R1bGVzLy5iaW4vanNkb2MgLXIgc3JjIFJFQURNRS5tZCAtZCAuL2RvY3MgLXQgLi9ub2RlX21vZHVsZXMvbWluYW1pXCIsXG4gICAgXCJsaW50OmpzXCI6IFwiZXNsaW50ICdzcmMvKiovKiouanMnXCIsXG4gICAgXCJwcmVwdWJsaXNoT25seVwiOiBcIm5wbSB0ZXN0XCIsXG4gICAgXCJwcmV0ZXN0XCI6IFwibnBtIHJ1biBidWlsZFwiLFxuICAgIFwidGVzdFwiOiBcIm55YyAtLXJlcG9ydGVyPXRleHQgbW9jaGEgLS1uby1jb25maWcgLS1uby1wYWNrYWdlXCIsXG4gICAgXCJ3YXRjaFwiOiBcIndhdGNoICducG0gcnVuIGJ1aWxkJyBzcmNcIixcbiAgICBcInBvc3RpbnN0YWxsXCI6IFwibm9kZSBwb3N0aW5zdGFsbC5qc1wiXG4gIH0sXG4gIFwicnVua2l0RXhhbXBsZUZpbGVuYW1lXCI6IFwicnVua2l0LmpzXCIsXG4gIFwicmVwb3NpdG9yeVwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiZ2l0XCIsXG4gICAgXCJ1cmxcIjogXCJnaXQraHR0cHM6Ly9naXRodWIuY29tL2dyaW1tZHVkZS9NaWRpV3JpdGVySlMuZ2l0XCJcbiAgfSxcbiAgXCJrZXl3b3Jkc1wiOiBbXG4gICAgXCJtaWRpXCIsXG4gICAgXCJnZW5lcmF0b3JcIixcbiAgICBcIm11c2ljXCJcbiAgXSxcbiAgXCJhdXRob3JcIjogXCJHYXJyZXR0IEdyaW1tXCIsXG4gIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICBcImJ1Z3NcIjoge1xuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2dyaW1tZHVkZS9NaWRpV3JpdGVySlMvaXNzdWVzXCJcbiAgfSxcbiAgXCJob21lcGFnZVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ncmltbWR1ZGUvTWlkaVdyaXRlckpTI3JlYWRtZVwiXG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9uYWxNaWRpID0gcmVxdWlyZSgndG9uYWwtbWlkaScpO1xuXG4vKipcbiAqIE1JREkgZmlsZSBmb3JtYXQgY29uc3RhbnRzLlxuICogQHJldHVybiB7Q29uc3RhbnRzfVxuICovXG52YXIgQ29uc3RhbnRzID0ge1xuICBWRVJTSU9OOiByZXF1aXJlKCcuLi9wYWNrYWdlLmpzb24nKS52ZXJzaW9uLFxuICBIRUFERVJfQ0hVTktfVFlQRTogWzB4NGQsIDB4NTQsIDB4NjgsIDB4NjRdLFxuICAvLyBNdGhkXG4gIEhFQURFUl9DSFVOS19MRU5HVEg6IFsweDAwLCAweDAwLCAweDAwLCAweDA2XSxcbiAgLy8gSGVhZGVyIHNpemUgZm9yIFNNRlxuICBIRUFERVJfQ0hVTktfRk9STUFUMDogWzB4MDAsIDB4MDBdLFxuICAvLyBNaWRpIFR5cGUgMCBpZFxuICBIRUFERVJfQ0hVTktfRk9STUFUMTogWzB4MDAsIDB4MDFdLFxuICAvLyBNaWRpIFR5cGUgMSBpZFxuICBIRUFERVJfQ0hVTktfRElWSVNJT046IFsweDAwLCAweDgwXSxcbiAgLy8gRGVmYXVsdHMgdG8gMTI4IHRpY2tzIHBlciBiZWF0XG4gIFRSQUNLX0NIVU5LX1RZUEU6IFsweDRkLCAweDU0LCAweDcyLCAweDZiXSxcbiAgLy8gTVRyayxcbiAgTUVUQV9FVkVOVF9JRDogMHhGRixcbiAgTUVUQV9URVhUX0lEOiAweDAxLFxuICBNRVRBX0NPUFlSSUdIVF9JRDogMHgwMixcbiAgTUVUQV9UUkFDS19OQU1FX0lEOiAweDAzLFxuICBNRVRBX0lOU1RSVU1FTlRfTkFNRV9JRDogMHgwNCxcbiAgTUVUQV9MWVJJQ19JRDogMHgwNSxcbiAgTUVUQV9NQVJLRVJfSUQ6IDB4MDYsXG4gIE1FVEFfQ1VFX1BPSU5UOiAweDA3LFxuICBNRVRBX1RFTVBPX0lEOiAweDUxLFxuICBNRVRBX1NNVFBFX09GRlNFVDogMHg1NCxcbiAgTUVUQV9USU1FX1NJR05BVFVSRV9JRDogMHg1OCxcbiAgTUVUQV9LRVlfU0lHTkFUVVJFX0lEOiAweDU5LFxuICBNRVRBX0VORF9PRl9UUkFDS19JRDogWzB4MkYsIDB4MDBdLFxuICBDT05UUk9MTEVSX0NIQU5HRV9TVEFUVVM6IDB4QjAsXG4gIC8vIGluY2x1ZGVzIGNoYW5uZWwgbnVtYmVyICgwKVxuICBQUk9HUkFNX0NIQU5HRV9TVEFUVVM6IDB4QzAsXG4gIC8vIGluY2x1ZGVzIGNoYW5uZWwgbnVtYmVyICgwKVxuICBQSVRDSF9CRU5EX1NUQVRVUzogMHhFMCAvLyBpbmNsdWRlcyBjaGFubmVsIG51bWJlciAoMClcblxufTtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxuZnVuY3Rpb24gX3dyYXBSZWdFeHAoKSB7XG4gIF93cmFwUmVnRXhwID0gZnVuY3Rpb24gKHJlLCBncm91cHMpIHtcbiAgICByZXR1cm4gbmV3IEJhYmVsUmVnRXhwKHJlLCB1bmRlZmluZWQsIGdyb3Vwcyk7XG4gIH07XG5cbiAgdmFyIF9zdXBlciA9IFJlZ0V4cC5wcm90b3R5cGU7XG5cbiAgdmFyIF9ncm91cHMgPSBuZXcgV2Vha01hcCgpO1xuXG4gIGZ1bmN0aW9uIEJhYmVsUmVnRXhwKHJlLCBmbGFncywgZ3JvdXBzKSB7XG4gICAgdmFyIF90aGlzID0gbmV3IFJlZ0V4cChyZSwgZmxhZ3MpO1xuXG4gICAgX2dyb3Vwcy5zZXQoX3RoaXMsIGdyb3VwcyB8fCBfZ3JvdXBzLmdldChyZSkpO1xuXG4gICAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihfdGhpcywgQmFiZWxSZWdFeHAucHJvdG90eXBlKTtcbiAgfVxuXG4gIF9pbmhlcml0cyhCYWJlbFJlZ0V4cCwgUmVnRXhwKTtcblxuICBCYWJlbFJlZ0V4cC5wcm90b3R5cGUuZXhlYyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICB2YXIgcmVzdWx0ID0gX3N1cGVyLmV4ZWMuY2FsbCh0aGlzLCBzdHIpO1xuXG4gICAgaWYgKHJlc3VsdCkgcmVzdWx0Lmdyb3VwcyA9IGJ1aWxkR3JvdXBzKHJlc3VsdCwgdGhpcyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBCYWJlbFJlZ0V4cC5wcm90b3R5cGVbU3ltYm9sLnJlcGxhY2VdID0gZnVuY3Rpb24gKHN0ciwgc3Vic3RpdHV0aW9uKSB7XG4gICAgaWYgKHR5cGVvZiBzdWJzdGl0dXRpb24gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHZhciBncm91cHMgPSBfZ3JvdXBzLmdldCh0aGlzKTtcblxuICAgICAgcmV0dXJuIF9zdXBlcltTeW1ib2wucmVwbGFjZV0uY2FsbCh0aGlzLCBzdHIsIHN1YnN0aXR1dGlvbi5yZXBsYWNlKC9cXCQ8KFtePl0rKT4vZywgZnVuY3Rpb24gKF8sIG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIFwiJFwiICsgZ3JvdXBzW25hbWVdO1xuICAgICAgfSkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHN1YnN0aXR1dGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gX3N1cGVyW1N5bWJvbC5yZXBsYWNlXS5jYWxsKHRoaXMsIHN0ciwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcblxuICAgICAgICBpZiAodHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3MpO1xuICAgICAgICAgIGFyZ3MucHVzaChidWlsZEdyb3VwcyhhcmdzLCBfdGhpcykpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1YnN0aXR1dGlvbi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gX3N1cGVyW1N5bWJvbC5yZXBsYWNlXS5jYWxsKHRoaXMsIHN0ciwgc3Vic3RpdHV0aW9uKTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gYnVpbGRHcm91cHMocmVzdWx0LCByZSkge1xuICAgIHZhciBnID0gX2dyb3Vwcy5nZXQocmUpO1xuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGcpLnJlZHVjZShmdW5jdGlvbiAoZ3JvdXBzLCBuYW1lKSB7XG4gICAgICBncm91cHNbbmFtZV0gPSByZXN1bHRbZ1tuYW1lXV07XG4gICAgICByZXR1cm4gZ3JvdXBzO1xuICAgIH0sIE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICB9XG5cbiAgcmV0dXJuIF93cmFwUmVnRXhwLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbi8qKlxuICogU3RhdGljIHV0aWxpdHkgZnVuY3Rpb25zIHVzZWQgdGhyb3VnaG91dCB0aGUgbGlicmFyeS5cbiAqL1xuXG52YXIgVXRpbHMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBVdGlscygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVXRpbHMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFV0aWxzLCBudWxsLCBbe1xuICAgIGtleTogXCJ2ZXJzaW9uXCIsXG4gICAgdmFsdWU6XG4gICAgLyoqXG4gICAgICogR2V0cyBNaWRpV3JpdGVySlMgdmVyc2lvbiBudW1iZXIuXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHZlcnNpb24oKSB7XG4gICAgICByZXR1cm4gQ29uc3RhbnRzLlZFUlNJT047XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnQgYSBzdHJpbmcgdG8gYW4gYXJyYXkgb2YgYnl0ZXNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gICAgICogQHJldHVybiB7YXJyYXl9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzdHJpbmdUb0J5dGVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0cmluZ1RvQnl0ZXMoc3RyaW5nKSB7XG4gICAgICByZXR1cm4gc3RyaW5nLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24gKF9jaGFyKSB7XG4gICAgICAgIHJldHVybiBfY2hhci5jaGFyQ29kZUF0KCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIGFyZ3VtZW50IGlzIGEgdmFsaWQgbnVtYmVyLlxuICAgICAqIEBwYXJhbSB7Kn0gbiAtIFZhbHVlIHRvIGNoZWNrXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImlzTnVtZXJpY1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc051bWVyaWMobikge1xuICAgICAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KG4pKSAmJiBpc0Zpbml0ZShuKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY29ycmVjdCBNSURJIG51bWJlciBmb3IgdGhlIHNwZWNpZmllZCBwaXRjaC5cbiAgICAgKiBVc2VzIFRvbmFsIE1pZGkgLSBodHRwczovL2dpdGh1Yi5jb20vZGFuaWdiL3RvbmFsL3RyZWUvbWFzdGVyL3BhY2thZ2VzL21pZGlcbiAgICAgKiBAcGFyYW0geyhzdHJpbmd8bnVtYmVyKX0gcGl0Y2ggLSAnQyM0JyBvciBtaWRpIG5vdGUgY29kZVxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFBpdGNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFBpdGNoKHBpdGNoKSB7XG4gICAgICByZXR1cm4gdG9uYWxNaWRpLnRvTWlkaShwaXRjaCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRyYW5zbGF0ZXMgbnVtYmVyIG9mIHRpY2tzIHRvIE1JREkgdGltZXN0YW1wIGZvcm1hdCwgcmV0dXJuaW5nIGFuIGFycmF5IG9mXG4gICAgICogaGV4IHN0cmluZ3Mgd2l0aCB0aGUgdGltZSB2YWx1ZXMuIE1pZGkgaGFzIGEgdmVyeSBwYXJ0aWN1bGFyIHRpbWUgdG8gZXhwcmVzcyB0aW1lLFxuICAgICAqIHRha2UgYSBnb29kIGxvb2sgYXQgdGhlIHNwZWMgYmVmb3JlIGV2ZXIgdG91Y2hpbmcgdGhpcyBmdW5jdGlvbi5cbiAgICAgKiBUaGFua3MgdG8gaHR0cHM6Ly9naXRodWIuY29tL3NlcmdpL2pzbWlkaVxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpY2tzIC0gTnVtYmVyIG9mIHRpY2tzIHRvIGJlIHRyYW5zbGF0ZWRcbiAgICAgKiBAcmV0dXJuIHthcnJheX0gLSBCeXRlcyB0aGF0IGZvcm0gdGhlIE1JREkgdGltZSB2YWx1ZVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibnVtYmVyVG9WYXJpYWJsZUxlbmd0aFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBudW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRpY2tzKSB7XG4gICAgICB0aWNrcyA9IE1hdGgucm91bmQodGlja3MpO1xuICAgICAgdmFyIGJ1ZmZlciA9IHRpY2tzICYgMHg3RjtcblxuICAgICAgd2hpbGUgKHRpY2tzID0gdGlja3MgPj4gNykge1xuICAgICAgICBidWZmZXIgPDw9IDg7XG4gICAgICAgIGJ1ZmZlciB8PSB0aWNrcyAmIDB4N0YgfCAweDgwO1xuICAgICAgfVxuXG4gICAgICB2YXIgYkxpc3QgPSBbXTtcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgYkxpc3QucHVzaChidWZmZXIgJiAweGZmKTtcbiAgICAgICAgaWYgKGJ1ZmZlciAmIDB4ODApIGJ1ZmZlciA+Pj0gODtlbHNlIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYkxpc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvdW50cyBudW1iZXIgb2YgYnl0ZXMgaW4gc3RyaW5nXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNcbiAgICAgKiBAcmV0dXJuIHthcnJheX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInN0cmluZ0J5dGVDb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdHJpbmdCeXRlQ291bnQocykge1xuICAgICAgcmV0dXJuIGVuY29kZVVSSShzKS5zcGxpdCgvJS4ufC4vKS5sZW5ndGggLSAxO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgYW4gaW50IGZyb20gYW4gYXJyYXkgb2YgYnl0ZXMuXG4gICAgICogQHBhcmFtIHthcnJheX0gYnl0ZXNcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJudW1iZXJGcm9tQnl0ZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbnVtYmVyRnJvbUJ5dGVzKGJ5dGVzKSB7XG4gICAgICB2YXIgaGV4ID0gJyc7XG4gICAgICB2YXIgc3RyaW5nUmVzdWx0O1xuICAgICAgYnl0ZXMuZm9yRWFjaChmdW5jdGlvbiAoX2J5dGUpIHtcbiAgICAgICAgc3RyaW5nUmVzdWx0ID0gX2J5dGUudG9TdHJpbmcoMTYpOyAvLyBlbnN1cmUgc3RyaW5nIGlzIDIgY2hhcnNcblxuICAgICAgICBpZiAoc3RyaW5nUmVzdWx0Lmxlbmd0aCA9PSAxKSBzdHJpbmdSZXN1bHQgPSBcIjBcIiArIHN0cmluZ1Jlc3VsdDtcbiAgICAgICAgaGV4ICs9IHN0cmluZ1Jlc3VsdDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHBhcnNlSW50KGhleCwgMTYpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUYWtlcyBhIG51bWJlciBhbmQgc3BsaXRzIGl0IHVwIGludG8gYW4gYXJyYXkgb2YgYnl0ZXMuICBDYW4gYmUgcGFkZGVkIGJ5IHBhc3NpbmcgYSBudW1iZXIgdG8gYnl0ZXNOZWVkZWRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGJ5dGVzTmVlZGVkXG4gICAgICogQHJldHVybiB7YXJyYXl9IC0gQXJyYXkgb2YgYnl0ZXNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm51bWJlclRvQnl0ZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbnVtYmVyVG9CeXRlcyhudW1iZXIsIGJ5dGVzTmVlZGVkKSB7XG4gICAgICBieXRlc05lZWRlZCA9IGJ5dGVzTmVlZGVkIHx8IDE7XG4gICAgICB2YXIgaGV4U3RyaW5nID0gbnVtYmVyLnRvU3RyaW5nKDE2KTtcblxuICAgICAgaWYgKGhleFN0cmluZy5sZW5ndGggJiAxKSB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSBoZXggc3RyaW5nIGlzIGV2ZW4gbnVtYmVyIG9mIGNoYXJzXG4gICAgICAgIGhleFN0cmluZyA9ICcwJyArIGhleFN0cmluZztcbiAgICAgIH0gLy8gU3BsaXQgaGV4IHN0cmluZyBpbnRvIGFuIGFycmF5IG9mIHR3byBjaGFyIGVsZW1lbnRzXG5cblxuICAgICAgdmFyIGhleEFycmF5ID0gaGV4U3RyaW5nLm1hdGNoKC8uezJ9L2cpOyAvLyBOb3cgcGFyc2UgdGhlbSBvdXQgYXMgaW50ZWdlcnNcblxuICAgICAgaGV4QXJyYXkgPSBoZXhBcnJheS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGl0ZW0sIDE2KTtcbiAgICAgIH0pOyAvLyBQcmVwZW5kIGVtcHR5IGJ5dGVzIGlmIHdlIGRvbid0IGhhdmUgZW5vdWdoXG5cbiAgICAgIGlmIChoZXhBcnJheS5sZW5ndGggPCBieXRlc05lZWRlZCkge1xuICAgICAgICB3aGlsZSAoYnl0ZXNOZWVkZWQgLSBoZXhBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaGV4QXJyYXkudW5zaGlmdCgwKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaGV4QXJyYXk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIHZhbHVlIHRvIGFycmF5IGlmIG5lZWRlZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHthcnJheX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInRvQXJyYXlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9BcnJheSh2YWx1ZSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgICByZXR1cm4gW3ZhbHVlXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgdmVsb2NpdHkgdG8gdmFsdWUgMC0xMjdcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmVsb2NpdHkgLSBWZWxvY2l0eSB2YWx1ZSAxLTEwMFxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNvbnZlcnRWZWxvY2l0eVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb252ZXJ0VmVsb2NpdHkodmVsb2NpdHkpIHtcbiAgICAgIC8vIE1heCBwYXNzZWQgdmFsdWUgbGltaXRlZCB0byAxMDBcbiAgICAgIHZlbG9jaXR5ID0gdmVsb2NpdHkgPiAxMDAgPyAxMDAgOiB2ZWxvY2l0eTtcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKHZlbG9jaXR5IC8gMTAwICogMTI3KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgdG90YWwgbnVtYmVyIG9mIHRpY2tzIG9mIGEgc3BlY2lmaWVkIGR1cmF0aW9uLlxuICAgICAqIE5vdGU6IHR5cGU9PSdub3RlJyBkZWZhdWx0cyB0byBxdWFydGVyIG5vdGUsIHR5cGU9PT0ncmVzdCcgZGVmYXVsdHMgdG8gMFxuICAgICAqIEBwYXJhbSB7KHN0cmluZ3xhcnJheSl9IGR1cmF0aW9uXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0VGlja0R1cmF0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRpY2tEdXJhdGlvbihkdXJhdGlvbikge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZHVyYXRpb24pKSB7XG4gICAgICAgIC8vIFJlY3Vyc2l2ZWx5IGV4ZWN1dGUgdGhpcyBtZXRob2QgZm9yIGVhY2ggaXRlbSBpbiB0aGUgYXJyYXkgYW5kIHJldHVybiB0aGUgc3VtIG9mIHRpY2sgZHVyYXRpb25zLlxuICAgICAgICByZXR1cm4gZHVyYXRpb24ubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBVdGlscy5nZXRUaWNrRHVyYXRpb24odmFsdWUpO1xuICAgICAgICB9KS5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICByZXR1cm4gYSArIGI7XG4gICAgICAgIH0sIDApO1xuICAgICAgfVxuXG4gICAgICBkdXJhdGlvbiA9IGR1cmF0aW9uLnRvU3RyaW5nKCk7XG5cbiAgICAgIGlmIChkdXJhdGlvbi50b0xvd2VyQ2FzZSgpLmNoYXJBdCgwKSA9PT0gJ3QnKSB7XG4gICAgICAgIC8vIElmIGR1cmF0aW9uIHN0YXJ0cyB3aXRoICd0JyB0aGVuIHRoZSBudW1iZXIgdGhhdCBmb2xsb3dzIGlzIGFuIGV4cGxpY2l0IHRpY2sgY291bnRcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGR1cmF0aW9uLnN1YnN0cmluZygxKSk7XG4gICAgICB9IC8vIE5lZWQgdG8gYXBwbHkgZHVyYXRpb24gaGVyZS4gIFF1YXJ0ZXIgbm90ZSA9PSBDb25zdGFudHMuSEVBREVSX0NIVU5LX0RJVklTSU9OXG5cblxuICAgICAgdmFyIHF1YXJ0ZXJUaWNrcyA9IFV0aWxzLm51bWJlckZyb21CeXRlcyhDb25zdGFudHMuSEVBREVSX0NIVU5LX0RJVklTSU9OKTtcbiAgICAgIHZhciB0aWNrRHVyYXRpb24gPSBxdWFydGVyVGlja3MgKiBVdGlscy5nZXREdXJhdGlvbk11bHRpcGxpZXIoZHVyYXRpb24pO1xuICAgICAgcmV0dXJuIFV0aWxzLmdldFJvdW5kZWRJZkNsb3NlKHRpY2tEdXJhdGlvbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIER1ZSB0byByb3VuZGluZyBlcnJvcnMgaW4gSmF2YVNjcmlwdCBlbmdpbmVzLFxuICAgICAqIGl0J3Mgc2FmZSB0byByb3VuZCB3aGVuIHdlJ3JlIHZlcnkgY2xvc2UgdG8gdGhlIGFjdHVhbCB0aWNrIG51bWJlclxuICAgICAqXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aWNrXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Um91bmRlZElmQ2xvc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Um91bmRlZElmQ2xvc2UodGljaykge1xuICAgICAgdmFyIHJvdW5kZWRUaWNrID0gTWF0aC5yb3VuZCh0aWNrKTtcbiAgICAgIHJldHVybiBNYXRoLmFicyhyb3VuZGVkVGljayAtIHRpY2spIDwgMC4wMDAwMDEgPyByb3VuZGVkVGljayA6IHRpY2s7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIER1ZSB0byBsb3cgcHJlY2lzaW9uIG9mIE1JREksXG4gICAgICogd2UgbmVlZCB0byBrZWVwIHRyYWNrIG9mIHJvdW5kaW5nIGVycm9ycyBpbiBkZWx0YXMuXG4gICAgICogVGhpcyBmdW5jdGlvbiB3aWxsIGNhbGN1bGF0ZSB0aGUgcm91bmRpbmcgZXJyb3IgZm9yIGEgZ2l2ZW4gZHVyYXRpb24uXG4gICAgICpcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpY2tcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRQcmVjaXNpb25Mb3NzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFByZWNpc2lvbkxvc3ModGljaykge1xuICAgICAgdmFyIHJvdW5kZWRUaWNrID0gTWF0aC5yb3VuZCh0aWNrKTtcbiAgICAgIHJldHVybiByb3VuZGVkVGljayAtIHRpY2s7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgd2hhdCB0byBtdWx0aXBsZSB0aWNrcy9xdWFydGVyIG5vdGUgYnkgdG8gZ2V0IHRoZSBzcGVjaWZpZWQgZHVyYXRpb24uXG4gICAgICogTm90ZTogdHlwZT09J25vdGUnIGRlZmF1bHRzIHRvIHF1YXJ0ZXIgbm90ZSwgdHlwZT09PSdyZXN0JyBkZWZhdWx0cyB0byAwXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGR1cmF0aW9uXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0RHVyYXRpb25NdWx0aXBsaWVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldER1cmF0aW9uTXVsdGlwbGllcihkdXJhdGlvbikge1xuICAgICAgLy8gTmVlZCB0byBhcHBseSBkdXJhdGlvbiBoZXJlLlxuICAgICAgLy8gUXVhcnRlciBub3RlID09IENvbnN0YW50cy5IRUFERVJfQ0hVTktfRElWSVNJT04gdGlja3MuXG4gICAgICBpZiAoZHVyYXRpb24gPT09ICcwJykgcmV0dXJuIDA7XG4gICAgICB2YXIgbWF0Y2ggPSBkdXJhdGlvbi5tYXRjaCggLyojX19QVVJFX18qL193cmFwUmVnRXhwKC9eKGQrKT8oWzAtOV0rKSg/OnQoWzAtOV0qKSk/Lywge1xuICAgICAgICBkb3R0ZWQ6IDEsXG4gICAgICAgIGJhc2U6IDIsXG4gICAgICAgIHR1cGxldDogM1xuICAgICAgfSkpO1xuXG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgdmFyIGJhc2UgPSBOdW1iZXIobWF0Y2guZ3JvdXBzLmJhc2UpOyAvLyAxIG9yIGFueSBwb3dlciBvZiB0d286XG5cbiAgICAgICAgdmFyIGlzVmFsaWRCYXNlID0gYmFzZSA9PT0gMSB8fCAoYmFzZSAmIGJhc2UgLSAxKSA9PT0gMDtcblxuICAgICAgICBpZiAoaXNWYWxpZEJhc2UpIHtcbiAgICAgICAgICAvLyBob3cgbXVjaCBmYXN0ZXIgb3Igc2xvd2VyIGlzIHRoaXMgbm90ZSBjb21wYXJlZCB0byBhIHF1YXJ0ZXI/XG4gICAgICAgICAgdmFyIHJhdGlvID0gYmFzZSAvIDQ7XG4gICAgICAgICAgdmFyIGR1cmF0aW9uSW5RdWFydGVycyA9IDEgLyByYXRpbztcbiAgICAgICAgICB2YXIgX21hdGNoJGdyb3VwcyA9IG1hdGNoLmdyb3VwcyxcbiAgICAgICAgICAgICAgZG90dGVkID0gX21hdGNoJGdyb3Vwcy5kb3R0ZWQsXG4gICAgICAgICAgICAgIHR1cGxldCA9IF9tYXRjaCRncm91cHMudHVwbGV0O1xuXG4gICAgICAgICAgaWYgKGRvdHRlZCkge1xuICAgICAgICAgICAgdmFyIHRoaXNNYW55RG90cyA9IGRvdHRlZC5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgZGl2aXNvciA9IE1hdGgucG93KDIsIHRoaXNNYW55RG90cyk7XG4gICAgICAgICAgICBkdXJhdGlvbkluUXVhcnRlcnMgPSBkdXJhdGlvbkluUXVhcnRlcnMgKyBkdXJhdGlvbkluUXVhcnRlcnMgKiAoKGRpdmlzb3IgLSAxKSAvIGRpdmlzb3IpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2YgdHVwbGV0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFyIGZpdEludG8gPSBkdXJhdGlvbkluUXVhcnRlcnMgKiAyOyAvLyBkZWZhdWx0IHRvIHRyaXBsZXQ6XG5cbiAgICAgICAgICAgIHZhciB0aGlzTWFueU5vdGVzID0gTnVtYmVyKHR1cGxldCB8fCAnMycpO1xuICAgICAgICAgICAgZHVyYXRpb25JblF1YXJ0ZXJzID0gZml0SW50byAvIHRoaXNNYW55Tm90ZXM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGR1cmF0aW9uSW5RdWFydGVycztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZHVyYXRpb24gKyAnIGlzIG5vdCBhIHZhbGlkIGR1cmF0aW9uLicpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBVdGlscztcbn0oKTtcblxuLyoqXG4gKiBIb2xkcyBhbGwgZGF0YSBmb3IgYSBcIm5vdGUgb25cIiBNSURJIGV2ZW50XG4gKiBAcGFyYW0ge29iamVjdH0gZmllbGRzIHtkYXRhOiBbXX1cbiAqIEByZXR1cm4ge05vdGVPbkV2ZW50fVxuICovXG5cbnZhciBOb3RlT25FdmVudCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE5vdGVPbkV2ZW50KGZpZWxkcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb3RlT25FdmVudCk7XG5cbiAgICAvLyBTZXQgZGVmYXVsdCBmaWVsZHNcbiAgICBmaWVsZHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNoYW5uZWw6IDEsXG4gICAgICBzdGFydFRpY2s6IG51bGwsXG4gICAgICB2ZWxvY2l0eTogNTAsXG4gICAgICB3YWl0OiAwXG4gICAgfSwgZmllbGRzKTtcbiAgICB0aGlzLnR5cGUgPSAnbm90ZS1vbic7XG4gICAgdGhpcy5jaGFubmVsID0gZmllbGRzLmNoYW5uZWw7XG4gICAgdGhpcy5waXRjaCA9IGZpZWxkcy5waXRjaDtcbiAgICB0aGlzLndhaXQgPSBmaWVsZHMud2FpdDtcbiAgICB0aGlzLnZlbG9jaXR5ID0gZmllbGRzLnZlbG9jaXR5O1xuICAgIHRoaXMuc3RhcnRUaWNrID0gZmllbGRzLnN0YXJ0VGljaztcbiAgICB0aGlzLm1pZGlOdW1iZXIgPSBVdGlscy5nZXRQaXRjaCh0aGlzLnBpdGNoKTtcbiAgICB0aGlzLnRpY2sgPSBudWxsO1xuICAgIHRoaXMuZGVsdGEgPSBudWxsO1xuICAgIHRoaXMuZGF0YSA9IGZpZWxkcy5kYXRhO1xuICB9XG4gIC8qKlxuICAgKiBCdWlsZHMgaW50IGFycmF5IGZvciB0aGlzIGV2ZW50LlxuICAgKiBAcGFyYW0ge1RyYWNrfSB0cmFjayAtIHBhcmVudCB0cmFja1xuICAgKiBAcmV0dXJuIHtOb3RlT25FdmVudH1cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoTm90ZU9uRXZlbnQsIFt7XG4gICAga2V5OiBcImJ1aWxkRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBidWlsZERhdGEodHJhY2ssIHByZWNpc2lvbkRlbHRhKSB7XG4gICAgICB0aGlzLmRhdGEgPSBbXTsgLy8gRXhwbGljaXRseSBkZWZpbmVkIHN0YXJ0VGljayBldmVudFxuXG4gICAgICBpZiAodGhpcy5zdGFydFRpY2spIHtcbiAgICAgICAgdGhpcy50aWNrID0gVXRpbHMuZ2V0Um91bmRlZElmQ2xvc2UodGhpcy5zdGFydFRpY2spOyAvLyBJZiB0aGlzIGlzIHRoZSBmaXJzdCBldmVudCBpbiB0aGUgdHJhY2sgdGhlbiB1c2UgZXZlbnQncyBzdGFydGluZyB0aWNrIGFzIGRlbHRhLlxuXG4gICAgICAgIGlmICh0cmFjay50aWNrUG9pbnRlciA9PSAwKSB7XG4gICAgICAgICAgdGhpcy5kZWx0YSA9IHRoaXMudGljaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kZWx0YSA9IFV0aWxzLmdldFRpY2tEdXJhdGlvbih0aGlzLndhaXQpO1xuICAgICAgICB0aGlzLnRpY2sgPSBVdGlscy5nZXRSb3VuZGVkSWZDbG9zZSh0cmFjay50aWNrUG9pbnRlciArIHRoaXMuZGVsdGEpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRlbHRhV2l0aFByZWNpc2lvbkNvcnJlY3Rpb24gPSBVdGlscy5nZXRSb3VuZGVkSWZDbG9zZSh0aGlzLmRlbHRhIC0gcHJlY2lzaW9uRGVsdGEpO1xuICAgICAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0aGlzLmRlbHRhV2l0aFByZWNpc2lvbkNvcnJlY3Rpb24pLmNvbmNhdCh0aGlzLmdldFN0YXR1c0J5dGUoKSwgdGhpcy5taWRpTnVtYmVyLCBVdGlscy5jb252ZXJ0VmVsb2NpdHkodGhpcy52ZWxvY2l0eSkpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIG5vdGUgb24gc3RhdHVzIGNvZGUgYmFzZWQgb24gdGhlIHNlbGVjdGVkIGNoYW5uZWwuIDB4OXswLUZ9XG4gICAgICogTm90ZSBvbiBhdCBjaGFubmVsIDAgaXMgMHg5MCAoMTQ0KVxuICAgICAqIDAgPSBDaCAxXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U3RhdHVzQnl0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTdGF0dXNCeXRlKCkge1xuICAgICAgcmV0dXJuIDE0NCArIHRoaXMuY2hhbm5lbCAtIDE7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE5vdGVPbkV2ZW50O1xufSgpO1xuXG4vKipcbiAqIEhvbGRzIGFsbCBkYXRhIGZvciBhIFwibm90ZSBvZmZcIiBNSURJIGV2ZW50XG4gKiBAcGFyYW0ge29iamVjdH0gZmllbGRzIHtkYXRhOiBbXX1cbiAqIEByZXR1cm4ge05vdGVPZmZFdmVudH1cbiAqL1xuXG52YXIgTm90ZU9mZkV2ZW50ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTm90ZU9mZkV2ZW50KGZpZWxkcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb3RlT2ZmRXZlbnQpO1xuXG4gICAgLy8gU2V0IGRlZmF1bHQgZmllbGRzXG4gICAgZmllbGRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjaGFubmVsOiAxLFxuICAgICAgdmVsb2NpdHk6IDUwLFxuICAgICAgdGljazogbnVsbFxuICAgIH0sIGZpZWxkcyk7XG4gICAgdGhpcy50eXBlID0gJ25vdGUtb2ZmJztcbiAgICB0aGlzLmNoYW5uZWwgPSBmaWVsZHMuY2hhbm5lbDtcbiAgICB0aGlzLnBpdGNoID0gZmllbGRzLnBpdGNoO1xuICAgIHRoaXMuZHVyYXRpb24gPSBmaWVsZHMuZHVyYXRpb247XG4gICAgdGhpcy52ZWxvY2l0eSA9IGZpZWxkcy52ZWxvY2l0eTtcbiAgICB0aGlzLm1pZGlOdW1iZXIgPSBVdGlscy5nZXRQaXRjaCh0aGlzLnBpdGNoKTtcbiAgICB0aGlzLnRpY2sgPSBmaWVsZHMudGljaztcbiAgICB0aGlzLmRlbHRhID0gVXRpbHMuZ2V0VGlja0R1cmF0aW9uKHRoaXMuZHVyYXRpb24pO1xuICAgIHRoaXMuZGF0YSA9IGZpZWxkcy5kYXRhO1xuICB9XG4gIC8qKlxuICAgKiBCdWlsZHMgaW50IGFycmF5IGZvciB0aGlzIGV2ZW50LlxuICAgKiBAcGFyYW0ge1RyYWNrfSB0cmFjayAtIHBhcmVudCB0cmFja1xuICAgKiBAcmV0dXJuIHtOb3RlT2ZmRXZlbnR9XG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKE5vdGVPZmZFdmVudCwgW3tcbiAgICBrZXk6IFwiYnVpbGREYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJ1aWxkRGF0YSh0cmFjaywgcHJlY2lzaW9uRGVsdGEpIHtcbiAgICAgIGlmICh0aGlzLnRpY2sgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy50aWNrID0gVXRpbHMuZ2V0Um91bmRlZElmQ2xvc2UodGhpcy5kZWx0YSArIHRyYWNrLnRpY2tQb2ludGVyKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kZWx0YVdpdGhQcmVjaXNpb25Db3JyZWN0aW9uID0gVXRpbHMuZ2V0Um91bmRlZElmQ2xvc2UodGhpcy5kZWx0YSAtIHByZWNpc2lvbkRlbHRhKTtcbiAgICAgIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgodGhpcy5kZWx0YVdpdGhQcmVjaXNpb25Db3JyZWN0aW9uKS5jb25jYXQodGhpcy5nZXRTdGF0dXNCeXRlKCksIHRoaXMubWlkaU51bWJlciwgVXRpbHMuY29udmVydFZlbG9jaXR5KHRoaXMudmVsb2NpdHkpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBub3RlIG9mZiBzdGF0dXMgY29kZSBiYXNlZCBvbiB0aGUgc2VsZWN0ZWQgY2hhbm5lbC4gMHg4ezAtRn1cbiAgICAgKiBOb3RlIG9mZiBhdCBjaGFubmVsIDAgaXMgMHg4MCAoMTI4KVxuICAgICAqIDAgPSBDaCAxXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U3RhdHVzQnl0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTdGF0dXNCeXRlKCkge1xuICAgICAgcmV0dXJuIDEyOCArIHRoaXMuY2hhbm5lbCAtIDE7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE5vdGVPZmZFdmVudDtcbn0oKTtcblxuLyoqXG4gKiBXcmFwcGVyIGZvciBub3RlT25FdmVudC9ub3RlT2ZmRXZlbnQgb2JqZWN0cyB0aGF0IGJ1aWxkcyBib3RoIGV2ZW50cy5cbiAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZHMgLSB7cGl0Y2g6ICdbQzRdJywgZHVyYXRpb246ICc0Jywgd2FpdDogJzQnLCB2ZWxvY2l0eTogMS0xMDB9XG4gKiBAcmV0dXJuIHtOb3RlRXZlbnR9XG4gKi9cblxudmFyIE5vdGVFdmVudCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE5vdGVFdmVudChmaWVsZHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTm90ZUV2ZW50KTtcblxuICAgIC8vIFNldCBkZWZhdWx0IGZpZWxkc1xuICAgIGZpZWxkcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2hhbm5lbDogMSxcbiAgICAgIHJlcGVhdDogMSxcbiAgICAgIHNlcXVlbnRpYWw6IGZhbHNlLFxuICAgICAgc3RhcnRUaWNrOiBudWxsLFxuICAgICAgdmVsb2NpdHk6IDUwLFxuICAgICAgd2FpdDogMFxuICAgIH0sIGZpZWxkcyk7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgdGhpcy50eXBlID0gJ25vdGUnO1xuICAgIHRoaXMucGl0Y2ggPSBVdGlscy50b0FycmF5KGZpZWxkcy5waXRjaCk7XG4gICAgdGhpcy5jaGFubmVsID0gZmllbGRzLmNoYW5uZWw7XG4gICAgdGhpcy5kdXJhdGlvbiA9IGZpZWxkcy5kdXJhdGlvbjtcbiAgICB0aGlzLmdyYWNlID0gZmllbGRzLmdyYWNlO1xuICAgIHRoaXMucmVwZWF0ID0gZmllbGRzLnJlcGVhdDtcbiAgICB0aGlzLnNlcXVlbnRpYWwgPSBmaWVsZHMuc2VxdWVudGlhbDtcbiAgICB0aGlzLnN0YXJ0VGljayA9IGZpZWxkcy5zdGFydFRpY2s7XG4gICAgdGhpcy52ZWxvY2l0eSA9IGZpZWxkcy52ZWxvY2l0eTtcbiAgICB0aGlzLndhaXQgPSBmaWVsZHMud2FpdDtcbiAgICB0aGlzLnRpY2tEdXJhdGlvbiA9IFV0aWxzLmdldFRpY2tEdXJhdGlvbih0aGlzLmR1cmF0aW9uKTtcbiAgICB0aGlzLnJlc3REdXJhdGlvbiA9IFV0aWxzLmdldFRpY2tEdXJhdGlvbih0aGlzLndhaXQpO1xuICAgIHRoaXMuZXZlbnRzID0gW107IC8vIEhvbGQgYWN0dWFsIE5vdGVPbi9Ob3RlT2ZmIGV2ZW50c1xuICB9XG4gIC8qKlxuICAgKiBCdWlsZHMgaW50IGFycmF5IGZvciB0aGlzIGV2ZW50LlxuICAgKiBAcmV0dXJuIHtOb3RlRXZlbnR9XG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKE5vdGVFdmVudCwgW3tcbiAgICBrZXk6IFwiYnVpbGREYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJ1aWxkRGF0YSgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIC8vIFJlc2V0IGRhdGEgYXJyYXlcbiAgICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICAgdGhpcy50aWNrRHVyYXRpb247XG4gICAgICB0aGlzLnJlc3REdXJhdGlvbjsgLy8gQXBwbHkgZ3JhY2Ugbm90ZShzKSBhbmQgc3VidHJhY3QgdGlja3MgKGN1cnJlbnRseSAxIHRpY2sgcGVyIGdyYWNlIG5vdGUpIGZyb20gdGlja0R1cmF0aW9uIHNvIG5ldCB2YWx1ZSBpcyB0aGUgc2FtZVxuXG4gICAgICBpZiAodGhpcy5ncmFjZSkge1xuICAgICAgICB2YXIgZ3JhY2VEdXJhdGlvbiA9IDE7XG4gICAgICAgIHRoaXMuZ3JhY2UgPSBVdGlscy50b0FycmF5KHRoaXMuZ3JhY2UpO1xuICAgICAgICB0aGlzLmdyYWNlLmZvckVhY2goZnVuY3Rpb24gKHBpdGNoKSB7XG4gICAgICAgICAgdmFyIG5vdGVFdmVudCA9IG5ldyBOb3RlRXZlbnQoe1xuICAgICAgICAgICAgcGl0Y2g6IF90aGlzLmdyYWNlLFxuICAgICAgICAgICAgZHVyYXRpb246ICdUJyArIGdyYWNlRHVyYXRpb25cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBfdGhpcy5kYXRhID0gX3RoaXMuZGF0YS5jb25jYXQobm90ZUV2ZW50LmRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgIH0gLy8gZmllbGRzLnBpdGNoIGNvdWxkIGJlIGFuIGFycmF5IG9mIHBpdGNoZXMuXG4gICAgICAvLyBJZiB0aGlzLnNlcXVlbnRpYWwgPT09IHRydWUgdGhlbiBpdCdzIGEgc2VxdWVudGlhbCBzdHJpbmcgb2Ygbm90ZXMgdGhhdCByZXF1aXJlcyBzZXBhcmF0ZSBOb3RlT25FdmVudHMuXG5cbiAgICAgIGlmICghdGhpcy5zZXF1ZW50aWFsKSB7XG4gICAgICAgIC8vIEhhbmRsZSByZXBlYXRcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLnJlcGVhdDsgaisrKSB7XG4gICAgICAgICAgLy8gTm90ZSBvblxuICAgICAgICAgIHRoaXMucGl0Y2guZm9yRWFjaChmdW5jdGlvbiAocCwgaSkge1xuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICB2YXIgbm90ZU9uTmV3ID0gbmV3IE5vdGVPbkV2ZW50KHtcbiAgICAgICAgICAgICAgICBjaGFubmVsOiBfdGhpcy5jaGFubmVsLFxuICAgICAgICAgICAgICAgIHdhaXQ6IF90aGlzLndhaXQsXG4gICAgICAgICAgICAgICAgdmVsb2NpdHk6IF90aGlzLnZlbG9jaXR5LFxuICAgICAgICAgICAgICAgIHBpdGNoOiBwLFxuICAgICAgICAgICAgICAgIHN0YXJ0VGljazogX3RoaXMuc3RhcnRUaWNrXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gUnVubmluZyBzdGF0dXMgKGNhbiBvbW1pdCB0aGUgbm90ZSBvbiBzdGF0dXMpXG4gICAgICAgICAgICAgIC8vbm90ZU9uID0gbmV3IE5vdGVPbkV2ZW50KHtkYXRhOiBbMCwgVXRpbHMuZ2V0UGl0Y2gocCksIFV0aWxzLmNvbnZlcnRWZWxvY2l0eSh0aGlzLnZlbG9jaXR5KV19KTtcbiAgICAgICAgICAgICAgdmFyIG5vdGVPbk5ldyA9IG5ldyBOb3RlT25FdmVudCh7XG4gICAgICAgICAgICAgICAgY2hhbm5lbDogX3RoaXMuY2hhbm5lbCxcbiAgICAgICAgICAgICAgICB3YWl0OiAwLFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5OiBfdGhpcy52ZWxvY2l0eSxcbiAgICAgICAgICAgICAgICBwaXRjaDogcCxcbiAgICAgICAgICAgICAgICBzdGFydFRpY2s6IF90aGlzLnN0YXJ0VGlja1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX3RoaXMuZXZlbnRzLnB1c2gobm90ZU9uTmV3KTtcbiAgICAgICAgICB9KTsgLy8gTm90ZSBvZmZcblxuICAgICAgICAgIHRoaXMucGl0Y2guZm9yRWFjaChmdW5jdGlvbiAocCwgaSkge1xuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAvL25vdGVPZmYgPSBuZXcgTm90ZU9mZkV2ZW50KHtkYXRhOiBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRpY2tEdXJhdGlvbikuY29uY2F0KHRoaXMuZ2V0Tm90ZU9mZlN0YXR1cygpLCBVdGlscy5nZXRQaXRjaChwKSwgVXRpbHMuY29udmVydFZlbG9jaXR5KHRoaXMudmVsb2NpdHkpKX0pO1xuICAgICAgICAgICAgICB2YXIgbm90ZU9mZk5ldyA9IG5ldyBOb3RlT2ZmRXZlbnQoe1xuICAgICAgICAgICAgICAgIGNoYW5uZWw6IF90aGlzLmNoYW5uZWwsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IF90aGlzLmR1cmF0aW9uLFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5OiBfdGhpcy52ZWxvY2l0eSxcbiAgICAgICAgICAgICAgICBwaXRjaDogcCxcbiAgICAgICAgICAgICAgICB0aWNrOiBfdGhpcy5zdGFydFRpY2sgIT09IG51bGwgPyBVdGlscy5nZXRUaWNrRHVyYXRpb24oX3RoaXMuZHVyYXRpb24pICsgX3RoaXMuc3RhcnRUaWNrIDogbnVsbFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFJ1bm5pbmcgc3RhdHVzIChjYW4gb21taXQgdGhlIG5vdGUgb2ZmIHN0YXR1cylcbiAgICAgICAgICAgICAgLy9ub3RlT2ZmID0gbmV3IE5vdGVPZmZFdmVudCh7ZGF0YTogWzAsIFV0aWxzLmdldFBpdGNoKHApLCBVdGlscy5jb252ZXJ0VmVsb2NpdHkodGhpcy52ZWxvY2l0eSldfSk7XG4gICAgICAgICAgICAgIHZhciBub3RlT2ZmTmV3ID0gbmV3IE5vdGVPZmZFdmVudCh7XG4gICAgICAgICAgICAgICAgY2hhbm5lbDogX3RoaXMuY2hhbm5lbCxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eTogX3RoaXMudmVsb2NpdHksXG4gICAgICAgICAgICAgICAgcGl0Y2g6IHAsXG4gICAgICAgICAgICAgICAgdGljazogX3RoaXMuc3RhcnRUaWNrICE9PSBudWxsID8gVXRpbHMuZ2V0VGlja0R1cmF0aW9uKF90aGlzLmR1cmF0aW9uKSArIF90aGlzLnN0YXJ0VGljayA6IG51bGxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF90aGlzLmV2ZW50cy5wdXNoKG5vdGVPZmZOZXcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBIYW5kbGUgcmVwZWF0XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5yZXBlYXQ7IGorKykge1xuICAgICAgICAgIHRoaXMucGl0Y2guZm9yRWFjaChmdW5jdGlvbiAocCwgaSkge1xuXG4gICAgICAgICAgICB2YXIgbm90ZU9uTmV3ID0gbmV3IE5vdGVPbkV2ZW50KHtcbiAgICAgICAgICAgICAgY2hhbm5lbDogX3RoaXMuY2hhbm5lbCxcbiAgICAgICAgICAgICAgd2FpdDogaSA+IDAgPyAwIDogX3RoaXMud2FpdCxcbiAgICAgICAgICAgICAgLy8gd2FpdCBvbmx5IGFwcGxpZXMgdG8gZmlyc3Qgbm90ZSBpbiByZXBldGl0aW9uXG4gICAgICAgICAgICAgIHZlbG9jaXR5OiBfdGhpcy52ZWxvY2l0eSxcbiAgICAgICAgICAgICAgcGl0Y2g6IHAsXG4gICAgICAgICAgICAgIHN0YXJ0VGljazogX3RoaXMuc3RhcnRUaWNrXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBub3RlT2ZmTmV3ID0gbmV3IE5vdGVPZmZFdmVudCh7XG4gICAgICAgICAgICAgIGNoYW5uZWw6IF90aGlzLmNoYW5uZWwsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiBfdGhpcy5kdXJhdGlvbixcbiAgICAgICAgICAgICAgdmVsb2NpdHk6IF90aGlzLnZlbG9jaXR5LFxuICAgICAgICAgICAgICBwaXRjaDogcFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIF90aGlzLmV2ZW50cy5wdXNoKG5vdGVPbk5ldywgbm90ZU9mZk5ldyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE5vdGVFdmVudDtcbn0oKTtcblxuLyoqXG4gKiBIb2xkcyBhbGwgZGF0YSBmb3IgYSBcIlBpdGNoIEJlbmRcIiBNSURJIGV2ZW50XG4gKiBbIC0xLjAsIDAsIDEuMCBdIC0+ICBbIDAsIDgxOTIsIDE2MzgzXVxuICogQHBhcmFtIHtvYmplY3R9IGZpZWxkcyB7IGJlbmQgOiBmbG9hdCwgY2hhbm5lbCA6IGludCB9XG4gKiBAcmV0dXJuIHtQaXRjaEJlbmRFdmVudH1cbiAqL1xuXG52YXIgc2NhbGUxNGJpdHMgPSBmdW5jdGlvbiBzY2FsZTE0Yml0cyh6ZXJvT25lKSB7XG4gIGlmICh6ZXJvT25lIDw9IDApIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcigxNjM4NCAqICh6ZXJvT25lICsgMSkgLyAyKTtcbiAgfVxuXG4gIHJldHVybiBNYXRoLmZsb29yKDE2MzgzICogKHplcm9PbmUgKyAxKSAvIDIpO1xufTtcblxudmFyIFBpdGNoQmVuZEV2ZW50ID0gZnVuY3Rpb24gUGl0Y2hCZW5kRXZlbnQoZmllbGRzKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQaXRjaEJlbmRFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ3BpdGNoLWJlbmQnO1xuICB2YXIgYmVuZDE0ID0gc2NhbGUxNGJpdHMoZmllbGRzLmJlbmQpO1xuICB2YXIgY2hhbm5lbCA9IGZpZWxkcy5jaGFubmVsIHx8IDA7XG4gIHZhciBsc2JWYWx1ZSA9IGJlbmQxNCAmIDB4N2Y7XG4gIHZhciBtc2JWYWx1ZSA9IGJlbmQxNCA+PiA3ICYgMHg3ZjtcbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLlBJVENIX0JFTkRfU1RBVFVTIHwgY2hhbm5lbCwgbHNiVmFsdWUsIG1zYlZhbHVlKTtcbn07XG5cbi8qKlxuICogSG9sZHMgYWxsIGRhdGEgZm9yIGEgXCJwcm9ncmFtIGNoYW5nZVwiIE1JREkgZXZlbnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZHMge2luc3RydW1lbnQ6IGludGVnZXJ9XG4gKiBAcmV0dXJuIHtQcm9ncmFtQ2hhbmdlRXZlbnR9XG4gKi9cblxudmFyIFByb2dyYW1DaGFuZ2VFdmVudCA9IGZ1bmN0aW9uIFByb2dyYW1DaGFuZ2VFdmVudChmaWVsZHMpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFByb2dyYW1DaGFuZ2VFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ3Byb2dyYW0nOyAvLyBkZWx0YSB0aW1lIGRlZmF1bHRzIHRvIDAuXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLlBST0dSQU1fQ0hBTkdFX1NUQVRVUywgZmllbGRzLmluc3RydW1lbnQpO1xufTtcblxuLyoqXG4gKiBIb2xkcyBhbGwgZGF0YSBmb3IgYSBcImNvbnRyb2xsZXIgY2hhbmdlXCIgTUlESSBldmVudFxuICogQHBhcmFtIHtvYmplY3R9IGZpZWxkcyB7Y29udHJvbGxlck51bWJlcjogaW50ZWdlciwgY29udHJvbGxlclZhbHVlOiBpbnRlZ2VyfVxuICogQHJldHVybiB7Q29udHJvbGxlckNoYW5nZUV2ZW50fVxuICovXG5cbnZhciBDb250cm9sbGVyQ2hhbmdlRXZlbnQgPSBmdW5jdGlvbiBDb250cm9sbGVyQ2hhbmdlRXZlbnQoZmllbGRzKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb250cm9sbGVyQ2hhbmdlRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdjb250cm9sbGVyJzsgLy8gZGVsdGEgdGltZSBkZWZhdWx0cyB0byAwLlxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5DT05UUk9MTEVSX0NIQU5HRV9TVEFUVVMsIGZpZWxkcy5jb250cm9sbGVyTnVtYmVyLCBmaWVsZHMuY29udHJvbGxlclZhbHVlKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgdGVtcG8gbWV0YSBldmVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gQ29weXJpZ2h0IHRleHRcbiAqIEByZXR1cm4ge0NvcHlyaWdodEV2ZW50fVxuICovXG5cbnZhciBDb3B5cmlnaHRFdmVudCA9IGZ1bmN0aW9uIENvcHlyaWdodEV2ZW50KHRleHQpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvcHlyaWdodEV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAnY29weXJpZ2h0JztcbiAgdmFyIHRleHRCeXRlcyA9IFV0aWxzLnN0cmluZ1RvQnl0ZXModGV4dCk7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX0NPUFlSSUdIVF9JRCwgVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0ZXh0Qnl0ZXMubGVuZ3RoKSwgLy8gU2l6ZVxuICB0ZXh0Qnl0ZXMgLy8gVGV4dFxuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSBjdWUgcG9pbnQgbWV0YSBldmVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gQ3VlIHBvaW50IHRleHRcbiAqIEByZXR1cm4ge0N1ZVBvaW50RXZlbnR9XG4gKi9cblxudmFyIEN1ZVBvaW50RXZlbnQgPSBmdW5jdGlvbiBDdWVQb2ludEV2ZW50KHRleHQpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEN1ZVBvaW50RXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdtYXJrZXInO1xuICB2YXIgdGV4dEJ5dGVzID0gVXRpbHMuc3RyaW5nVG9CeXRlcyh0ZXh0KTsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfQ1VFX1BPSU5ULCBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRleHRCeXRlcy5sZW5ndGgpLCAvLyBTaXplXG4gIHRleHRCeXRlcyAvLyBUZXh0XG4gICk7XG59O1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIGVuZCB0cmFjayBtZXRhIGV2ZW50LlxuICogQHJldHVybiB7RW5kVHJhY2tFdmVudH1cbiAqL1xuXG52YXIgRW5kVHJhY2tFdmVudCA9IGZ1bmN0aW9uIEVuZFRyYWNrRXZlbnQoKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFbmRUcmFja0V2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAnZW5kLXRyYWNrJzsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfRU5EX09GX1RSQUNLX0lEKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGFuIGluc3RydW1lbnQgbmFtZSBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IGJwbSAtIEJlYXRzIHBlciBtaW51dGVcbiAqIEByZXR1cm4ge0luc3RydW1lbnROYW1lRXZlbnR9XG4gKi9cblxudmFyIEluc3RydW1lbnROYW1lRXZlbnQgPSBmdW5jdGlvbiBJbnN0cnVtZW50TmFtZUV2ZW50KHRleHQpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluc3RydW1lbnROYW1lRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdpbnN0cnVtZW50LW5hbWUnO1xuICB2YXIgdGV4dEJ5dGVzID0gVXRpbHMuc3RyaW5nVG9CeXRlcyh0ZXh0KTsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfSU5TVFJVTUVOVF9OQU1FX0lELCBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRleHRCeXRlcy5sZW5ndGgpLCAvLyBTaXplXG4gIHRleHRCeXRlcyAvLyBJbnN0cnVtZW50IG5hbWVcbiAgKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEga2V5IHNpZ25hdHVyZSBtZXRhIGV2ZW50LlxuICogQHJldHVybiB7S2V5U2lnbmF0dXJlRXZlbnR9XG4gKi9cblxudmFyIEtleVNpZ25hdHVyZUV2ZW50ID0gZnVuY3Rpb24gS2V5U2lnbmF0dXJlRXZlbnQoc2YsIG1pKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBLZXlTaWduYXR1cmVFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ2tleS1zaWduYXR1cmUnO1xuICB2YXIgbW9kZSA9IG1pIHx8IDA7XG4gIHNmID0gc2YgfHwgMDsgLy9cdEZ1bmN0aW9uIGNhbGxlZCB3aXRoIHN0cmluZyBub3RhdGlvblxuXG4gIGlmICh0eXBlb2YgbWkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIGZpZnRocyA9IFtbJ0NiJywgJ0diJywgJ0RiJywgJ0FiJywgJ0ViJywgJ0JiJywgJ0YnLCAnQycsICdHJywgJ0QnLCAnQScsICdFJywgJ0InLCAnRiMnLCAnQyMnXSwgWydhYicsICdlYicsICdiYicsICdmJywgJ2MnLCAnZycsICdkJywgJ2EnLCAnZScsICdiJywgJ2YjJywgJ2MjJywgJ2cjJywgJ2QjJywgJ2EjJ11dO1xuICAgIHZhciBfc2ZsZW4gPSBzZi5sZW5ndGg7XG4gICAgdmFyIG5vdGUgPSBzZiB8fCAnQyc7XG4gICAgaWYgKHNmWzBdID09PSBzZlswXS50b0xvd2VyQ2FzZSgpKSBtb2RlID0gMTtcblxuICAgIGlmIChfc2ZsZW4gPiAxKSB7XG4gICAgICBzd2l0Y2ggKHNmLmNoYXJBdChfc2ZsZW4gLSAxKSkge1xuICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICBtb2RlID0gMTtcbiAgICAgICAgICBub3RlID0gc2YuY2hhckF0KDApLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgbm90ZSA9IG5vdGUuY29uY2F0KHNmLnN1YnN0cmluZygxLCBfc2ZsZW4gLSAxKSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgbW9kZSA9IDE7XG4gICAgICAgICAgbm90ZSA9IHNmLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIG5vdGUgPSBub3RlLmNvbmNhdChzZi5zdWJzdHJpbmcoMSwgX3NmbGVuIC0gMSkpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ00nOlxuICAgICAgICAgIG1vZGUgPSAwO1xuICAgICAgICAgIG5vdGUgPSBzZi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICBub3RlID0gbm90ZS5jb25jYXQoc2Yuc3Vic3RyaW5nKDEsIF9zZmxlbiAtIDEpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICBtb2RlID0gMDtcbiAgICAgICAgICBub3RlID0gc2YuY2hhckF0KDApLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgbm90ZSA9IG5vdGUuY29uY2F0KHNmLnN1YnN0cmluZygxLCBfc2ZsZW4gLSAxKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGZpZnRoaW5kZXggPSBmaWZ0aHNbbW9kZV0uaW5kZXhPZihub3RlKTtcbiAgICBzZiA9IGZpZnRoaW5kZXggPT09IC0xID8gMCA6IGZpZnRoaW5kZXggLSA3O1xuICB9IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfS0VZX1NJR05BVFVSRV9JRCwgWzB4MDJdLCAvLyBTaXplXG4gIFV0aWxzLm51bWJlclRvQnl0ZXMoc2YsIDEpLCAvLyBOdW1iZXIgb2Ygc2hhcnAgb3IgZmxhdHMgKCA8IDAgZmxhdDsgPiAwIHNoYXJwKVxuICBVdGlscy5udW1iZXJUb0J5dGVzKG1vZGUsIDEpIC8vIE1vZGU6IDAgbWFqb3IsIDEgbWlub3JcbiAgKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgbHlyaWMgbWV0YSBldmVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gTHlyaWMgdGV4dFxuICogQHJldHVybiB7THlyaWNFdmVudH1cbiAqL1xuXG52YXIgTHlyaWNFdmVudCA9IGZ1bmN0aW9uIEx5cmljRXZlbnQodGV4dCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTHlyaWNFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ21hcmtlcic7XG4gIHZhciB0ZXh0Qnl0ZXMgPSBVdGlscy5zdHJpbmdUb0J5dGVzKHRleHQpOyAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9MWVJJQ19JRCwgVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0ZXh0Qnl0ZXMubGVuZ3RoKSwgLy8gU2l6ZVxuICB0ZXh0Qnl0ZXMgLy8gVGV4dFxuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSBtYXJrZXIgbWV0YSBldmVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gTWFya2VyIHRleHRcbiAqIEByZXR1cm4ge01hcmtlckV2ZW50fVxuICovXG5cbnZhciBNYXJrZXJFdmVudCA9IGZ1bmN0aW9uIE1hcmtlckV2ZW50KHRleHQpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hcmtlckV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAnbWFya2VyJztcbiAgdmFyIHRleHRCeXRlcyA9IFV0aWxzLnN0cmluZ1RvQnl0ZXModGV4dCk7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX01BUktFUl9JRCwgVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0ZXh0Qnl0ZXMubGVuZ3RoKSwgLy8gU2l6ZVxuICB0ZXh0Qnl0ZXMgLy8gVGV4dFxuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSB0ZW1wbyBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IGJwbSAtIEJlYXRzIHBlciBtaW51dGVcbiAqIEByZXR1cm4ge1RlbXBvRXZlbnR9XG4gKi9cblxudmFyIFRlbXBvRXZlbnQgPSBmdW5jdGlvbiBUZW1wb0V2ZW50KGJwbSkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGVtcG9FdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ3RlbXBvJztcbiAgdmFyIHRlbXBvID0gTWF0aC5yb3VuZCg2MDAwMDAwMCAvIGJwbSk7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX1RFTVBPX0lELCBbMHgwM10sIC8vIFNpemVcbiAgVXRpbHMubnVtYmVyVG9CeXRlcyh0ZW1wbywgMykgLy8gVGVtcG8sIDMgYnl0ZXNcbiAgKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgdGVtcG8gbWV0YSBldmVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBicG0gLSBCZWF0cyBwZXIgbWludXRlXG4gKiBAcmV0dXJuIHtUZXh0RXZlbnR9XG4gKi9cblxudmFyIFRleHRFdmVudCA9IGZ1bmN0aW9uIFRleHRFdmVudCh0ZXh0KSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUZXh0RXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICd0ZXh0JztcbiAgdmFyIHRleHRCeXRlcyA9IFV0aWxzLnN0cmluZ1RvQnl0ZXModGV4dCk7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX1RFWFRfSUQsIFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgodGV4dEJ5dGVzLmxlbmd0aCksIC8vIFNpemVcbiAgdGV4dEJ5dGVzIC8vIFRleHRcbiAgKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgdGltZSBzaWduYXR1cmUgbWV0YSBldmVudC5cbiAqIEByZXR1cm4ge1RpbWVTaWduYXR1cmVFdmVudH1cbiAqL1xuXG52YXIgVGltZVNpZ25hdHVyZUV2ZW50ID0gZnVuY3Rpb24gVGltZVNpZ25hdHVyZUV2ZW50KG51bWVyYXRvciwgZGVub21pbmF0b3IsIG1pZGljbG9ja3NwZXJ0aWNrLCBub3Rlc3Blcm1pZGljbG9jaykge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGltZVNpZ25hdHVyZUV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAndGltZS1zaWduYXR1cmUnOyAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9USU1FX1NJR05BVFVSRV9JRCwgWzB4MDRdLCAvLyBTaXplXG4gIFV0aWxzLm51bWJlclRvQnl0ZXMobnVtZXJhdG9yLCAxKSwgLy8gTnVtZXJhdG9yLCAxIGJ5dGVzXG4gIFV0aWxzLm51bWJlclRvQnl0ZXMoTWF0aC5sb2cyKGRlbm9taW5hdG9yKSwgMSksIC8vIERlbm9taW5hdG9yIGlzIGV4cHJlc3NlZCBhcyBwb3cgb2YgMiwgMSBieXRlc1xuICBVdGlscy5udW1iZXJUb0J5dGVzKG1pZGljbG9ja3NwZXJ0aWNrIHx8IDI0LCAxKSwgLy8gTUlESSBDbG9ja3MgcGVyIHRpY2ssIDEgYnl0ZXNcbiAgVXRpbHMubnVtYmVyVG9CeXRlcyhub3Rlc3Blcm1pZGljbG9jayB8fCA4LCAxKSAvLyBOdW1iZXIgb2YgMS8zMiBub3RlcyBwZXIgTUlESSBjbG9ja3MsIDEgYnl0ZXNcbiAgKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgdGVtcG8gbWV0YSBldmVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBicG0gLSBCZWF0cyBwZXIgbWludXRlXG4gKiBAcmV0dXJuIHtUcmFja05hbWVFdmVudH1cbiAqL1xuXG52YXIgVHJhY2tOYW1lRXZlbnQgPSBmdW5jdGlvbiBUcmFja05hbWVFdmVudCh0ZXh0KSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmFja05hbWVFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ3RyYWNrLW5hbWUnO1xuICB2YXIgdGV4dEJ5dGVzID0gVXRpbHMuc3RyaW5nVG9CeXRlcyh0ZXh0KTsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfVFJBQ0tfTkFNRV9JRCwgVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0ZXh0Qnl0ZXMubGVuZ3RoKSwgLy8gU2l6ZVxuICB0ZXh0Qnl0ZXMgLy8gVGV4dFxuICApO1xufTtcblxuLyoqXG4gKiBIb2xkcyBhbGwgZGF0YSBmb3IgYSB0cmFjay5cbiAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZHMge3R5cGU6IG51bWJlciwgZGF0YTogYXJyYXksIHNpemU6IGFycmF5LCBldmVudHM6IGFycmF5fVxuICogQHJldHVybiB7VHJhY2t9XG4gKi9cblxudmFyIFRyYWNrID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVHJhY2soKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRyYWNrKTtcblxuICAgIHRoaXMudHlwZSA9IENvbnN0YW50cy5UUkFDS19DSFVOS19UWVBFO1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIHRoaXMuc2l6ZSA9IFtdO1xuICAgIHRoaXMuZXZlbnRzID0gW107XG4gICAgdGhpcy5leHBsaWNpdFRpY2tFdmVudHMgPSBbXTsgLy8gSWYgdGhlcmUgYXJlIGFueSBldmVudHMgd2l0aCBhbiBleHBsaWNpdCB0aWNrIGRlZmluZWQgdGhlbiB3ZSB3aWxsIGNyZWF0ZSBhIFwic3ViXCIgdHJhY2sgZm9yIHRob3NlXG4gICAgLy8gYW5kIG1lcmdlIHRoZW0gaW4gYW5kIHRoZSBlbmQuXG5cbiAgICB0aGlzLnRpY2tQb2ludGVyID0gMDsgLy8gRWFjaCB0aW1lIGFuIGV2ZW50IGlzIGFkZGVkIHRoaXMgd2lsbCBpbmNyZWFzZVxuICB9XG4gIC8qKlxuICAgKiBBZGRzIGFueSBldmVudCB0eXBlIHRvIHRoZSB0cmFjay5cbiAgICogRXZlbnRzIHdpdGhvdXQgYSBzcGVjaWZpYyBzdGFydFRpY2sgcHJvcGVydHkgYXJlIGFzc3VtZWQgdG8gYmUgYWRkZWQgaW4gb3JkZXIgb2YgaG93IHRoZXkgc2hvdWxkIG91dHB1dC5cbiAgICogRXZlbnRzIHdpdGggYSBzcGVjaWZpYyBzdGFydFRpY2sgcHJvcGVydHkgYXJlIHNldCBhc2lkZSBmb3Igbm93IHdpbGwgYmUgbWVyZ2VkIGluIGR1cmluZyBidWlsZCBwcm9jZXNzLlxuICAgKiBAcGFyYW0geyhOb3RlRXZlbnR8UHJvZ3JhbUNoYW5nZUV2ZW50KX0gZXZlbnRzIC0gRXZlbnQgb2JqZWN0IG9yIGFycmF5IG9mIEV2ZW50IG9iamVjdHMuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IG1hcEZ1bmN0aW9uIC0gQ2FsbGJhY2sgd2hpY2ggY2FuIGJlIHVzZWQgdG8gYXBwbHkgc3BlY2lmaWMgcHJvcGVydGllcyB0byBhbGwgZXZlbnRzLlxuICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoVHJhY2ssIFt7XG4gICAga2V5OiBcImFkZEV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEV2ZW50KGV2ZW50cywgbWFwRnVuY3Rpb24pIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIFV0aWxzLnRvQXJyYXkoZXZlbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCwgaSkge1xuICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOb3RlRXZlbnQpIHtcbiAgICAgICAgICAvLyBIYW5kbGUgbWFwIGZ1bmN0aW9uIGlmIHByb3ZpZGVkXG4gICAgICAgICAgaWYgKHR5cGVvZiBtYXBGdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIHByb3BlcnRpZXMgPSBtYXBGdW5jdGlvbihpLCBldmVudCk7XG5cbiAgICAgICAgICAgIGlmIChfdHlwZW9mKHByb3BlcnRpZXMpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICBmb3IgKHZhciBqIGluIHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGopIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgJ2NoYW5uZWwnOlxuICAgICAgICAgICAgICAgICAgICBldmVudC5jaGFubmVsID0gcHJvcGVydGllc1tqXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgJ2R1cmF0aW9uJzpcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZHVyYXRpb24gPSBwcm9wZXJ0aWVzW2pdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgY2FzZSAnc2VxdWVudGlhbCc6XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnNlcXVlbnRpYWwgPSBwcm9wZXJ0aWVzW2pdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgY2FzZSAndmVsb2NpdHknOlxuICAgICAgICAgICAgICAgICAgICBldmVudC52ZWxvY2l0eSA9IFV0aWxzLmNvbnZlcnRWZWxvY2l0eShwcm9wZXJ0aWVzW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAvLyBJZiB0aGlzIG5vdGUgZXZlbnQgaGFzIGFuIGV4cGxpY2l0IHN0YXJ0VGljayB0aGVuIHdlIG5lZWQgdG8gc2V0IGFzaWRlIGZvciBub3dcblxuXG4gICAgICAgICAgaWYgKGV2ZW50LnN0YXJ0VGljayAhPT0gbnVsbCkge1xuICAgICAgICAgICAgX3RoaXMuZXhwbGljaXRUaWNrRXZlbnRzLnB1c2goZXZlbnQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBQdXNoIGVhY2ggb24vb2ZmIGV2ZW50IHRvIHRyYWNrJ3MgZXZlbnQgc3RhY2tcbiAgICAgICAgICAgIGV2ZW50LmJ1aWxkRGF0YSgpLmV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpcy5ldmVudHMucHVzaChlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpcy5ldmVudHMucHVzaChldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJ1aWxkcyBpbnQgYXJyYXkgb2YgYWxsIGV2ZW50cy5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImJ1aWxkRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBidWlsZERhdGEoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgLy8gUmVtb3ZlIGV4aXN0aW5nIGVuZCB0cmFjayBldmVudCBhbmQgYWRkIG9uZS5cbiAgICAgIC8vIFRoaXMgbWFrZXMgc3VyZSBpdCdzIGF0IHRoZSB2ZXJ5IGVuZCBvZiB0aGUgZXZlbnQgbGlzdC5cbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRzQnlUeXBlKCdlbmQtdHJhY2snKS5hZGRFdmVudChuZXcgRW5kVHJhY2tFdmVudCgpKTsgLy8gUmVzZXRcblxuICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgICB0aGlzLnNpemUgPSBbXTtcbiAgICAgIHRoaXMudGlja1BvaW50ZXIgPSAwO1xuICAgICAgdmFyIHByZWNpc2lvbkxvc3MgPSAwO1xuICAgICAgdGhpcy5ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQsIGV2ZW50SW5kZXgpIHtcbiAgICAgICAgLy8gQnVpbGQgZXZlbnQgJiBhZGQgdG8gdG90YWwgdGljayBkdXJhdGlvblxuICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOb3RlT25FdmVudCB8fCBldmVudCBpbnN0YW5jZW9mIE5vdGVPZmZFdmVudCkge1xuICAgICAgICAgIHZhciBidWlsdCA9IGV2ZW50LmJ1aWxkRGF0YShfdGhpczIsIHByZWNpc2lvbkxvc3MpO1xuICAgICAgICAgIHByZWNpc2lvbkxvc3MgPSBVdGlscy5nZXRQcmVjaXNpb25Mb3NzKGV2ZW50LmRlbHRhV2l0aFByZWNpc2lvbkNvcnJlY3Rpb24gfHwgMCk7XG4gICAgICAgICAgX3RoaXMyLmRhdGEgPSBfdGhpczIuZGF0YS5jb25jYXQoYnVpbHQuZGF0YSk7XG4gICAgICAgICAgX3RoaXMyLnRpY2tQb2ludGVyID0gVXRpbHMuZ2V0Um91bmRlZElmQ2xvc2UoZXZlbnQudGljayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMyLmRhdGEgPSBfdGhpczIuZGF0YS5jb25jYXQoZXZlbnQuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5tZXJnZUV4cGxpY2l0VGlja0V2ZW50cygpO1xuICAgICAgdGhpcy5zaXplID0gVXRpbHMubnVtYmVyVG9CeXRlcyh0aGlzLmRhdGEubGVuZ3RoLCA0KTsgLy8gNCBieXRlcyBsb25nXG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJtZXJnZUV4cGxpY2l0VGlja0V2ZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtZXJnZUV4cGxpY2l0VGlja0V2ZW50cygpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICBpZiAoIXRoaXMuZXhwbGljaXRUaWNrRXZlbnRzLmxlbmd0aCkgcmV0dXJuOyAvLyBGaXJzdCBzb3J0IGFzYyBsaXN0IG9mIGV2ZW50cyBieSBzdGFydFRpY2tcblxuICAgICAgdGhpcy5leHBsaWNpdFRpY2tFdmVudHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYS5zdGFydFRpY2sgLSBiLnN0YXJ0VGljaztcbiAgICAgIH0pOyAvLyBOb3cgdGhpcy5leHBsaWNpdFRpY2tFdmVudHMgaXMgaW4gY29ycmVjdCBvcmRlciwgYW5kIHNvIGlzIHRoaXMuZXZlbnRzIG5hdHVyYWxseS5cbiAgICAgIC8vIEZvciBlYWNoIGV4cGxpY2l0IHRpY2sgZXZlbnQsIHNwbGljZSBpdCBpbnRvIHRoZSBtYWluIGxpc3Qgb2YgZXZlbnRzIGFuZFxuICAgICAgLy8gYWRqdXN0IHRoZSBkZWx0YSBvbiB0aGUgZm9sbG93aW5nIGV2ZW50cyBzbyB0aGV5IHN0aWxsIHBsYXkgbm9ybWFsbHkuXG5cbiAgICAgIHRoaXMuZXhwbGljaXRUaWNrRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKG5vdGVFdmVudCkge1xuICAgICAgICAvLyBDb252ZXJ0IE5vdGVFdmVudCB0byBpdCdzIHJlc3BlY3RpdmUgTm90ZU9uL05vdGVPZmYgZXZlbnRzXG4gICAgICAgIC8vIE5vdGUgdGhhdCBhcyB3ZSBzcGxpY2UgaW4gZXZlbnRzIHRoZSBkZWx0YSBmb3IgdGhlIE5vdGVPZmYgb25lcyB3aWxsXG4gICAgICAgIC8vIE5lZWQgdG8gY2hhbmdlIGJhc2VkIG9uIHdoYXQgY29tZXMgYmVmb3JlIHRoZW0gYWZ0ZXIgdGhlIHNwbGljZS5cbiAgICAgICAgbm90ZUV2ZW50LmJ1aWxkRGF0YSgpLmV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGUuYnVpbGREYXRhKF90aGlzMyk7XG4gICAgICAgIH0pOyAvLyBNZXJnZSBlYWNoIGV2ZW50IGluZGl2dWFsbHkgaW50byB0aGlzIHRyYWNrJ3MgZXZlbnQgbGlzdC5cblxuICAgICAgICBub3RlRXZlbnQuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMy5tZXJnZVNpbmdsZUV2ZW50KGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTsgLy8gSGFja3kgd2F5IHRvIHJlYnVpbGQgdHJhY2sgd2l0aCBuZXdseSBzcGxpY2VkIGV2ZW50cy4gIE5lZWQgYmV0dGVyIHNvbHV0aW9uLlxuXG4gICAgICB0aGlzLmV4cGxpY2l0VGlja0V2ZW50cyA9IFtdO1xuICAgICAgdGhpcy5idWlsZERhdGEoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTWVyZ2VzIGFub3RoZXIgdHJhY2sncyBldmVudHMgd2l0aCB0aGlzIHRyYWNrLlxuICAgICAqIEBwYXJhbSB7VHJhY2t9IHRyYWNrXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJtZXJnZVRyYWNrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1lcmdlVHJhY2sodHJhY2spIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICAvLyBGaXJzdCBidWlsZCB0aGlzIHRyYWNrIHRvIHBvcHVsYXRlIGVhY2ggZXZlbnQncyB0aWNrIHByb3BlcnR5XG4gICAgICB0aGlzLmJ1aWxkRGF0YSgpOyAvLyBUaGVuIGJ1aWxkIHRyYWNrIHRvIGJlIG1lcmdlZCBzbyB0aGF0IHRpY2sgcHJvcGVydHkgaXMgcG9wdWxhdGVkIG9uIGFsbCBldmVudHMgJiBtZXJnZSBlYWNoIGV2ZW50LlxuXG4gICAgICB0cmFjay5idWlsZERhdGEoKS5ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzNC5tZXJnZVNpbmdsZUV2ZW50KGV2ZW50KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNZXJnZXMgYSBzaW5nbGUgZXZlbnQgaW50byB0aGlzIHRyYWNrJ3MgbGlzdCBvZiBldmVudHMgYmFzZWQgb24gZXZlbnQudGljayBwcm9wZXJ0eS5cbiAgICAgKiBAcGFyYW0ge05vdGVPbkV2ZW50fE5vdGVPZmZFdmVudH0gLSBldmVudFxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibWVyZ2VTaW5nbGVFdmVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtZXJnZVNpbmdsZUV2ZW50KGV2ZW50KSB7XG4gICAgICAvLyBGaW5kIGluZGV4IG9mIGV4aXN0aW5nIGV2ZW50IHdlIG5lZWQgdG8gZm9sbG93IHdpdGhcbiAgICAgIHZhciBsYXN0RXZlbnRJbmRleCA9IDA7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2ldLnRpY2sgPiBldmVudC50aWNrKSBicmVhaztcbiAgICAgICAgbGFzdEV2ZW50SW5kZXggPSBpO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3BsaWNlZEV2ZW50SW5kZXggPSBsYXN0RXZlbnRJbmRleCArIDE7IC8vIE5lZWQgdG8gYWRqdXN0IHRoZSBkZWx0YSBvZiB0aGlzIGV2ZW50IHRvIGVuc3VyZSBpdCBmYWxscyBvbiB0aGUgY29ycmVjdCB0aWNrLlxuXG4gICAgICBldmVudC5kZWx0YSA9IGV2ZW50LnRpY2sgLSB0aGlzLmV2ZW50c1tsYXN0RXZlbnRJbmRleF0udGljazsgLy8gU3BsaWNlIHRoaXMgZXZlbnQgYXQgbGFzdEV2ZW50SW5kZXggKyAxXG5cbiAgICAgIHRoaXMuZXZlbnRzLnNwbGljZShzcGxpY2VkRXZlbnRJbmRleCwgMCwgZXZlbnQpOyAvLyBOb3cgYWRqdXN0IGRlbHRhIG9mIGFsbCBmb2xsb3dpbmcgZXZlbnRzXG5cbiAgICAgIGZvciAodmFyIGkgPSBzcGxpY2VkRXZlbnRJbmRleCArIDE7IGkgPCB0aGlzLmV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBTaW5jZSBlYWNoIGV4aXN0aW5nIGV2ZW50IHNob3VsZCBoYXZlIGEgdGljayB2YWx1ZSBhdCB0aGlzIHBvaW50IHdlIGp1c3QgbmVlZCB0b1xuICAgICAgICAvLyBhZGp1c3QgZGVsdGEgdG8gdGhhdCB0aGUgZXZlbnQgc3RpbGwgZmFsbHMgb24gdGhlIGNvcnJlY3QgdGljay5cbiAgICAgICAgdGhpcy5ldmVudHNbaV0uZGVsdGEgPSB0aGlzLmV2ZW50c1tpXS50aWNrIC0gdGhpcy5ldmVudHNbaSAtIDFdLnRpY2s7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIGV2ZW50cyBtYXRjaGluZyBzcGVjaWZpZWQgdHlwZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlIC0gRXZlbnQgdHlwZVxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlRXZlbnRzQnlUeXBlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUV2ZW50c0J5VHlwZShldmVudFR5cGUpIHtcbiAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICB0aGlzLmV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCwgaW5kZXgpIHtcbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IGV2ZW50VHlwZSkge1xuICAgICAgICAgIF90aGlzNS5ldmVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0ZW1wbyBvZiB0aGUgTUlESSBmaWxlLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBicG0gLSBUZW1wbyBpbiBiZWF0cyBwZXIgbWludXRlLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2V0VGVtcG9cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VGVtcG8oYnBtKSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgVGVtcG9FdmVudChicG0pKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aW1lIHNpZ25hdHVyZS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbnVtZXJhdG9yIC0gVG9wIG51bWJlciBvZiB0aGUgdGltZSBzaWduYXR1cmUuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRlbm9taW5hdG9yIC0gQm90dG9tIG51bWJlciBvZiB0aGUgdGltZSBzaWduYXR1cmUuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pZGljbG9ja3NwZXJ0aWNrIC0gRGVmYXVsdHMgdG8gMjQuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5vdGVzcGVybWlkaWNsb2NrIC0gRGVmYXVsdHMgdG8gOC5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNldFRpbWVTaWduYXR1cmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VGltZVNpZ25hdHVyZShudW1lcmF0b3IsIGRlbm9taW5hdG9yLCBtaWRpY2xvY2tzcGVydGljaywgbm90ZXNwZXJtaWRpY2xvY2spIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBUaW1lU2lnbmF0dXJlRXZlbnQobnVtZXJhdG9yLCBkZW5vbWluYXRvciwgbWlkaWNsb2Nrc3BlcnRpY2ssIG5vdGVzcGVybWlkaWNsb2NrKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMga2V5IHNpZ25hdHVyZS5cbiAgICAgKiBAcGFyYW0geyp9IHNmIC1cbiAgICAgKiBAcGFyYW0geyp9IG1pIC1cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNldEtleVNpZ25hdHVyZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRLZXlTaWduYXR1cmUoc2YsIG1pKSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgS2V5U2lnbmF0dXJlRXZlbnQoc2YsIG1pKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgdGV4dCB0byBNSURJIGZpbGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUZXh0IHRvIGFkZC5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFkZFRleHRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkVGV4dCh0ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgVGV4dEV2ZW50KHRleHQpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBjb3B5cmlnaHQgdG8gTUlESSBmaWxlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCBvZiBjb3B5cmlnaHQgbGluZS5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFkZENvcHlyaWdodFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRDb3B5cmlnaHQodGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IENvcHlyaWdodEV2ZW50KHRleHQpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBTZXF1ZW5jZS9UcmFjayBOYW1lLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCBvZiB0cmFjayBuYW1lLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkVHJhY2tOYW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZFRyYWNrTmFtZSh0ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgVHJhY2tOYW1lRXZlbnQodGV4dCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIGluc3RydW1lbnQgbmFtZSBvZiB0cmFjay5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIE5hbWUgb2YgaW5zdHJ1bWVudC5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFkZEluc3RydW1lbnROYW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEluc3RydW1lbnROYW1lKHRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBJbnN0cnVtZW50TmFtZUV2ZW50KHRleHQpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBtYXJrZXIgdG8gTUlESSBmaWxlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gTWFya2VyIHRleHQuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhZGRNYXJrZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkTWFya2VyKHRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBNYXJrZXJFdmVudCh0ZXh0KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgY3VlIHBvaW50IHRvIE1JREkgZmlsZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRleHQgb2YgY3VlIHBvaW50LlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkQ3VlUG9pbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkQ3VlUG9pbnQodGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IEN1ZVBvaW50RXZlbnQodGV4dCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGx5cmljIHRvIE1JREkgZmlsZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIEx5cmljIHRleHQgdG8gYWRkLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkTHlyaWNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkTHlyaWModGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IEx5cmljRXZlbnQodGV4dCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGFubmVsIG1vZGUgbWVzc2FnZXNcbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInBvbHlNb2RlT25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcG9seU1vZGVPbigpIHtcbiAgICAgIHZhciBldmVudCA9IG5ldyBOb3RlT25FdmVudCh7XG4gICAgICAgIGRhdGE6IFsweDAwLCAweEIwLCAweDdFLCAweDAwXVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChldmVudCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgYSBwaXRjaCBiZW5kLlxuICAgICAqIEBwYXJhbSB7ZmxvYXR9IGJlbmQgLSBCZW5kIHZhbHVlIHJhbmdpbmcgWy0xLDFdLCB6ZXJvIG1lYW5pbmcgbm8gYmVuZC5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNldFBpdGNoQmVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQaXRjaEJlbmQoYmVuZCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IFBpdGNoQmVuZEV2ZW50KHtcbiAgICAgICAgYmVuZDogYmVuZFxuICAgICAgfSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgY29udHJvbGxlciBjaGFuZ2UgZXZlbnRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyIC0gQ29udHJvbCBudW1iZXIuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gQ29udHJvbCB2YWx1ZS5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNvbnRyb2xsZXJDaGFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29udHJvbGxlckNoYW5nZShudW1iZXIsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgQ29udHJvbGxlckNoYW5nZUV2ZW50KHtcbiAgICAgICAgY29udHJvbGxlck51bWJlcjogbnVtYmVyLFxuICAgICAgICBjb250cm9sbGVyVmFsdWU6IHZhbHVlXG4gICAgICB9KSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFRyYWNrO1xufSgpO1xuXG52YXIgVmV4RmxvdyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFZleEZsb3coKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFZleEZsb3cpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFZleEZsb3csIFt7XG4gICAga2V5OiBcInRyYWNrRnJvbVZvaWNlXCIsXG4gICAgdmFsdWU6XG4gICAgLyoqXG4gICAgICogU3VwcG9ydCBmb3IgY29udmVydGluZyBWZXhGbG93IHZvaWNlIGludG8gTWlkaVdyaXRlckpTIHRyYWNrXG4gICAgICogQHJldHVybiBNaWRpV3JpdGVyLlRyYWNrIG9iamVjdFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHRyYWNrRnJvbVZvaWNlKHZvaWNlKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge1xuICAgICAgICBhZGRSZW5kZXJlZEFjY2lkZW50YWxzOiBmYWxzZVxuICAgICAgfTtcbiAgICAgIHZhciB0cmFjayA9IG5ldyBUcmFjaygpO1xuICAgICAgdmFyIHdhaXQgPSBbXTtcbiAgICAgIHZvaWNlLnRpY2thYmxlcy5mb3JFYWNoKGZ1bmN0aW9uICh0aWNrYWJsZSkge1xuICAgICAgICBpZiAodGlja2FibGUubm90ZVR5cGUgPT09ICduJykge1xuICAgICAgICAgIHRyYWNrLmFkZEV2ZW50KG5ldyBOb3RlRXZlbnQoe1xuICAgICAgICAgICAgcGl0Y2g6IHRpY2thYmxlLmtleXMubWFwKGZ1bmN0aW9uIChwaXRjaCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmNvbnZlcnRQaXRjaChwaXRjaCwgaW5kZXgsIHRpY2thYmxlLCBvcHRpb25zLmFkZFJlbmRlcmVkQWNjaWRlbnRhbHMpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBkdXJhdGlvbjogX3RoaXMuY29udmVydER1cmF0aW9uKHRpY2thYmxlKSxcbiAgICAgICAgICAgIHdhaXQ6IHdhaXRcbiAgICAgICAgICB9KSk7IC8vIHJlc2V0IHdhaXRcblxuICAgICAgICAgIHdhaXQgPSBbXTtcbiAgICAgICAgfSBlbHNlIGlmICh0aWNrYWJsZS5ub3RlVHlwZSA9PT0gJ3InKSB7XG4gICAgICAgICAgLy8gbW92ZSBvbiB0byB0aGUgbmV4dCB0aWNrYWJsZSBhbmQgYWRkIHRoaXMgdG8gdGhlIHN0YWNrXG4gICAgICAgICAgLy8gb2YgdGhlIGB3YWl0YCBwcm9wZXJ0eSBmb3IgdGhlIG5leHQgbm90ZSBldmVudFxuICAgICAgICAgIHdhaXQucHVzaChfdGhpcy5jb252ZXJ0RHVyYXRpb24odGlja2FibGUpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0pOyAvLyBUaGVyZSBtYXkgYmUgb3V0c3RhbmRpbmcgcmVzdHMgYXQgdGhlIGVuZCBvZiB0aGUgdHJhY2ssXG4gICAgICAvLyBwYWQgd2l0aCBhIGdob3N0IG5vdGUgKHplcm8gZHVyYXRpb24gYW5kIHZlbG9jaXR5KSwganVzdCB0byBjYXB0dXJlIHRoZSB3YWl0LlxuXG4gICAgICBpZiAod2FpdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRyYWNrLmFkZEV2ZW50KG5ldyBOb3RlRXZlbnQoe1xuICAgICAgICAgIHBpdGNoOiAnW2M0XScsXG4gICAgICAgICAgZHVyYXRpb246ICcwJyxcbiAgICAgICAgICB3YWl0OiB3YWl0LFxuICAgICAgICAgIHZlbG9jaXR5OiAnMCdcbiAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJhY2s7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIFZleEZsb3cgcGl0Y2ggc3ludGF4IHRvIE1pZGlXcml0ZXJKUyBzeW50YXhcbiAgICAgKiBAcGFyYW0gcGl0Y2ggc3RyaW5nXG4gICAgICogQHBhcmFtIGluZGV4IHBpdGNoIGluZGV4XG4gICAgICogQHBhcmFtIG5vdGUgc3RydWN0IGZyb20gVmV4Zmxvd1xuICAgICAqIEBwYXJhbSBhZGRSZW5kZXJlZEFjY2lkZW50YWxzIGFkZHMgVmV4ZmxvdyByZW5kZXJlZCBhY2NpZGVudGFsc1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY29udmVydFBpdGNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbnZlcnRQaXRjaChwaXRjaCwgaW5kZXgsIG5vdGUpIHtcbiAgICAgIHZhciBhZGRSZW5kZXJlZEFjY2lkZW50YWxzID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiBmYWxzZTtcbiAgICAgIC8vIFNwbGl0cyBub3RlIG5hbWUgZnJvbSBvY3RhdmVcbiAgICAgIHZhciBwaXRjaFBhcnRzID0gcGl0Y2guc3BsaXQoJy8nKTsgLy8gUmV0cmlldmVzIGFjY2lkZW50YWxzIGZyb20gcGl0Y2hcbiAgICAgIC8vIFJlbW92ZXMgbmF0dXJhbCBhY2NpZGVudGFscyBzaW5jZSB0aGV5IGFyZSBub3QgYWNjZXB0ZWQgaW4gVG9uYWwgTWlkaVxuXG4gICAgICB2YXIgYWNjaWRlbnRhbHMgPSBwaXRjaFBhcnRzWzBdLnN1YnN0cmluZygxKS5yZXBsYWNlKCduJywgJycpO1xuXG4gICAgICBpZiAoYWRkUmVuZGVyZWRBY2NpZGVudGFscykge1xuICAgICAgICB2YXIgX25vdGUkZ2V0QWNjaWRlbnRhbHM7XG5cbiAgICAgICAgKF9ub3RlJGdldEFjY2lkZW50YWxzID0gbm90ZS5nZXRBY2NpZGVudGFscygpKSA9PT0gbnVsbCB8fCBfbm90ZSRnZXRBY2NpZGVudGFscyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX25vdGUkZ2V0QWNjaWRlbnRhbHMuZm9yRWFjaChmdW5jdGlvbiAoYWNjaWRlbnRhbCkge1xuICAgICAgICAgIGlmIChhY2NpZGVudGFsLmluZGV4ID09PSBpbmRleCkge1xuICAgICAgICAgICAgaWYgKGFjY2lkZW50YWwudHlwZSA9PT0gJ24nKSB7XG4gICAgICAgICAgICAgIGFjY2lkZW50YWxzID0gJyc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhY2NpZGVudGFscyArPSBhY2NpZGVudGFsLnR5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBpdGNoUGFydHNbMF1bMF0gKyBhY2NpZGVudGFscyArIHBpdGNoUGFydHNbMV07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIFZleEZsb3cgZHVyYXRpb24gc3ludGF4IHRvIE1pZGlXcml0ZXJKUyBzeW50YXhcbiAgICAgKiBAcGFyYW0gbm90ZSBzdHJ1Y3QgZnJvbSBWZXhGbG93XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjb252ZXJ0RHVyYXRpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29udmVydER1cmF0aW9uKG5vdGUpIHtcbiAgICAgIHJldHVybiAnZCcucmVwZWF0KG5vdGUuZG90cykgKyB0aGlzLmNvbnZlcnRCYXNlRHVyYXRpb24obm90ZS5kdXJhdGlvbikgKyAobm90ZS50dXBsZXQgPyAndCcgKyBub3RlLnR1cGxldC5udW1fbm90ZXMgOiAnJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIFZleEZsb3cgYmFzZSBkdXJhdGlvbiBzeW50YXggdG8gTWlkaVdyaXRlckpTIHN5bnRheFxuICAgICAqIEBwYXJhbSBkdXJhdGlvbiBWZXhmbG93IGR1cmF0aW9uXG4gICAgICogQHJldHVybnMgTWlkaVdyaXRlckpTIGR1cmF0aW9uXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjb252ZXJ0QmFzZUR1cmF0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbnZlcnRCYXNlRHVyYXRpb24oZHVyYXRpb24pIHtcbiAgICAgIHN3aXRjaCAoZHVyYXRpb24pIHtcbiAgICAgICAgY2FzZSAndyc6XG4gICAgICAgICAgcmV0dXJuICcxJztcblxuICAgICAgICBjYXNlICdoJzpcbiAgICAgICAgICByZXR1cm4gJzInO1xuXG4gICAgICAgIGNhc2UgJ3EnOlxuICAgICAgICAgIHJldHVybiAnNCc7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gZHVyYXRpb247XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFZleEZsb3c7XG59KCk7XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgaGVhZGVyIGNodW5rIHNlY3Rpb24gb2YgYSBNSURJIGZpbGUuXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyT2ZUcmFja3MgLSBOdW1iZXIgb2YgdHJhY2tzXG4gKiBAcmV0dXJuIHtIZWFkZXJDaHVua31cbiAqL1xuXG52YXIgSGVhZGVyQ2h1bmsgPSBmdW5jdGlvbiBIZWFkZXJDaHVuayhudW1iZXJPZlRyYWNrcykge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSGVhZGVyQ2h1bmspO1xuXG4gIHRoaXMudHlwZSA9IENvbnN0YW50cy5IRUFERVJfQ0hVTktfVFlQRTtcbiAgdmFyIHRyYWNrVHlwZSA9IG51bWJlck9mVHJhY2tzID4gMSA/IENvbnN0YW50cy5IRUFERVJfQ0hVTktfRk9STUFUMSA6IENvbnN0YW50cy5IRUFERVJfQ0hVTktfRk9STUFUMDtcbiAgdGhpcy5kYXRhID0gdHJhY2tUeXBlLmNvbmNhdChVdGlscy5udW1iZXJUb0J5dGVzKG51bWJlck9mVHJhY2tzLCAyKSwgLy8gdHdvIGJ5dGVzIGxvbmcsXG4gIENvbnN0YW50cy5IRUFERVJfQ0hVTktfRElWSVNJT04pO1xuICB0aGlzLnNpemUgPSBbMCwgMCwgMCwgdGhpcy5kYXRhLmxlbmd0aF07XG59O1xuXG4vKipcbiAqIE9iamVjdCB0aGF0IHB1dHMgdG9nZXRoZXIgdHJhY2tzIGFuZCBwcm92aWRlcyBtZXRob2RzIGZvciBmaWxlIG91dHB1dC5cbiAqIEBwYXJhbSB7YXJyYXl8VHJhY2t9IHRyYWNrcyAtIEEgc2luZ2xlIHtUcmFja30gb2JqZWN0IG9yIGFuIGFycmF5IG9mIHtUcmFja30gb2JqZWN0cy5cbiAqIEByZXR1cm4ge1dyaXRlcn1cbiAqL1xuXG52YXIgV3JpdGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gV3JpdGVyKHRyYWNrcykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV3JpdGVyKTtcblxuICAgIC8vIEVuc3VyZSB0cmFjayBpcyBhbiBhcnJheVxuICAgIHRyYWNrcyA9IFV0aWxzLnRvQXJyYXkodHJhY2tzKTtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICB0aGlzLmRhdGEucHVzaChuZXcgSGVhZGVyQ2h1bmsodHJhY2tzLmxlbmd0aCkpOyAvLyBGb3IgZWFjaCB0cmFjayBhZGQgZmluYWwgZW5kIG9mIHRyYWNrIGV2ZW50IGFuZCBidWlsZCBkYXRhXG5cbiAgICB0cmFja3MuZm9yRWFjaChmdW5jdGlvbiAodHJhY2ssIGkpIHtcbiAgICAgIF90aGlzLmRhdGEucHVzaCh0cmFjay5idWlsZERhdGEoKSk7XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIEJ1aWxkcyB0aGUgZmlsZSBpbnRvIGEgVWludDhBcnJheVxuICAgKiBAcmV0dXJuIHtVaW50OEFycmF5fVxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhXcml0ZXIsIFt7XG4gICAga2V5OiBcImJ1aWxkRmlsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBidWlsZEZpbGUoKSB7XG4gICAgICB2YXIgYnVpbGQgPSBbXTsgLy8gRGF0YSBjb25zaXN0cyBvZiBjaHVua3Mgd2hpY2ggY29uc2lzdHMgb2YgZGF0YVxuXG4gICAgICB0aGlzLmRhdGEuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gYnVpbGQgPSBidWlsZC5jb25jYXQoZC50eXBlLCBkLnNpemUsIGQuZGF0YSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShidWlsZCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnQgZmlsZSBidWZmZXIgdG8gYSBiYXNlNjQgc3RyaW5nLiAgRGlmZmVyZW50IG1ldGhvZHMgZGVwZW5kaW5nIG9uIGlmIGJyb3dzZXIgb3Igbm9kZS5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJiYXNlNjRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmFzZTY0KCkge1xuICAgICAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSByZXR1cm4gYnRvYShTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIHRoaXMuYnVpbGRGaWxlKCkpKTtcbiAgICAgIHJldHVybiBCdWZmZXIuZnJvbSh0aGlzLmJ1aWxkRmlsZSgpKS50b1N0cmluZygnYmFzZTY0Jyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZGF0YSBVUkkuXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZGF0YVVyaVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkYXRhVXJpKCkge1xuICAgICAgcmV0dXJuICdkYXRhOmF1ZGlvL21pZGk7YmFzZTY0LCcgKyB0aGlzLmJhc2U2NCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBPdXRwdXQgdG8gc3Rkb3V0XG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3Rkb3V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0ZG91dCgpIHtcbiAgICAgIHJldHVybiBwcm9jZXNzLnN0ZG91dC53cml0ZShuZXcgQnVmZmVyKHRoaXMuYnVpbGRGaWxlKCkpKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gV3JpdGVyO1xufSgpO1xuXG52YXIgbWFpbiA9IHtcbiAgQ29uc3RhbnRzOiBDb25zdGFudHMsXG4gIE5vdGVPbkV2ZW50OiBOb3RlT25FdmVudCxcbiAgTm90ZU9mZkV2ZW50OiBOb3RlT2ZmRXZlbnQsXG4gIE5vdGVFdmVudDogTm90ZUV2ZW50LFxuICBQaXRjaEJlbmRFdmVudDogUGl0Y2hCZW5kRXZlbnQsXG4gIFByb2dyYW1DaGFuZ2VFdmVudDogUHJvZ3JhbUNoYW5nZUV2ZW50LFxuICBUcmFjazogVHJhY2ssXG4gIFV0aWxzOiBVdGlscyxcbiAgVmV4RmxvdzogVmV4RmxvdyxcbiAgV3JpdGVyOiBXcml0ZXJcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbWFpbjtcbiIsICJ2YXIgTWlkaSA9IHt9O1xuXG4oZnVuY3Rpb24oZXhwb3J0ZWQpIHtcblxuXHR2YXIgREVGQVVMVF9WT0xVTUUgICA9IGV4cG9ydGVkLkRFRkFVTFRfVk9MVU1FICAgPSA5MDtcblx0dmFyIERFRkFVTFRfRFVSQVRJT04gPSBleHBvcnRlZC5ERUZBVUxUX0RVUkFUSU9OID0gMTI4O1xuXHR2YXIgREVGQVVMVF9DSEFOTkVMICA9IGV4cG9ydGVkLkRFRkFVTFRfQ0hBTk5FTCAgPSAwO1xuXG5cdC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXHQgKiBVdGlsaXR5IGZ1bmN0aW9uc1xuXHQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cblx0dmFyIFV0aWwgPSB7XG5cblx0XHRtaWRpX2xldHRlcl9waXRjaGVzOiB7IGE6MjEsIGI6MjMsIGM6MTIsIGQ6MTQsIGU6MTYsIGY6MTcsIGc6MTkgfSxcblxuXHRcdC8qKlxuXHRcdCAqIENvbnZlcnQgYSBzeW1ib2xpYyBub3RlIG5hbWUgKGUuZy4gXCJjNFwiKSB0byBhIG51bWVyaWMgTUlESSBwaXRjaCAoZS5nLlxuXHRcdCAqIDYwLCBtaWRkbGUgQykuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbiAtIFRoZSBzeW1ib2xpYyBub3RlIG5hbWUgdG8gcGFyc2UuXG5cdFx0ICogQHJldHVybnMge251bWJlcn0gVGhlIE1JREkgcGl0Y2ggdGhhdCBjb3JyZXNwb25kcyB0byB0aGUgc3ltYm9saWMgbm90ZVxuXHRcdCAqIG5hbWUuXG5cdFx0ICovXG5cdFx0bWlkaVBpdGNoRnJvbU5vdGU6IGZ1bmN0aW9uKG4pIHtcblx0XHRcdHZhciBtYXRjaGVzID0gLyhbYS1nXSkoIyt8YispPyhbMC05XSspJC9pLmV4ZWMobik7XG5cdFx0XHR2YXIgbm90ZSA9IG1hdGNoZXNbMV0udG9Mb3dlckNhc2UoKSwgYWNjaWRlbnRhbCA9IG1hdGNoZXNbMl0gfHwgJycsIG9jdGF2ZSA9IHBhcnNlSW50KG1hdGNoZXNbM10sIDEwKTtcblx0XHRcdHJldHVybiAoMTIgKiBvY3RhdmUpICsgVXRpbC5taWRpX2xldHRlcl9waXRjaGVzW25vdGVdICsgKGFjY2lkZW50YWwuc3Vic3RyKDAsMSk9PScjJz8xOi0xKSAqIGFjY2lkZW50YWwubGVuZ3RoO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBFbnN1cmUgdGhhdCB0aGUgZ2l2ZW4gYXJndW1lbnQgaXMgY29udmVydGVkIHRvIGEgTUlESSBwaXRjaC4gTm90ZSB0aGF0XG5cdFx0ICogaXQgbWF5IGFscmVhZHkgYmUgb25lIChpbmNsdWRpbmcgYSBwdXJlbHkgbnVtZXJpYyBzdHJpbmcpLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBwIC0gVGhlIHBpdGNoIHRvIGNvbnZlcnQuXG5cdFx0ICogQHJldHVybnMge251bWJlcn0gVGhlIHJlc3VsdGluZyBudW1lcmljIE1JREkgcGl0Y2guXG5cdFx0ICovXG5cdFx0ZW5zdXJlTWlkaVBpdGNoOiBmdW5jdGlvbihwKSB7XG5cdFx0XHRpZiAodHlwZW9mIHAgPT0gJ251bWJlcicgfHwgIS9bXjAtOV0vLnRlc3QocCkpIHtcblx0XHRcdFx0Ly8gbnVtZXJpYyBwaXRjaFxuXHRcdFx0XHRyZXR1cm4gcGFyc2VJbnQocCwgMTApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gYXNzdW1lIGl0J3MgYSBub3RlIG5hbWVcblx0XHRcdFx0cmV0dXJuIFV0aWwubWlkaVBpdGNoRnJvbU5vdGUocCk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdG1pZGlfcGl0Y2hlc19sZXR0ZXI6IHsgJzEyJzonYycsICcxMyc6J2MjJywgJzE0JzonZCcsICcxNSc6J2QjJywgJzE2JzonZScsICcxNyc6J2YnLCAnMTgnOidmIycsICcxOSc6J2cnLCAnMjAnOidnIycsICcyMSc6J2EnLCAnMjInOidhIycsICcyMyc6J2InIH0sXG5cdFx0bWlkaV9mbGF0dGVuZWRfbm90ZXM6IHsgJ2EjJzonYmInLCAnYyMnOidkYicsICdkIyc6J2ViJywgJ2YjJzonZ2InLCAnZyMnOidhYicgfSxcblxuXHRcdC8qKlxuXHRcdCAqIENvbnZlcnQgYSBudW1lcmljIE1JREkgcGl0Y2ggdmFsdWUgKGUuZy4gNjApIHRvIGEgc3ltYm9saWMgbm90ZSBuYW1lXG5cdFx0ICogKGUuZy4gXCJjNFwiKS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBuIC0gVGhlIG51bWVyaWMgTUlESSBwaXRjaCB2YWx1ZSB0byBjb252ZXJ0LlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JldHVybkZsYXR0ZW5lZD1mYWxzZV0gLSBXaGV0aGVyIHRvIHByZWZlciBmbGF0dGVuZWRcblx0XHQgKiBub3RlcyB0byBzaGFycGVuZWQgb25lcy4gT3B0aW9uYWwsIGRlZmF1bHQgZmFsc2UuXG5cdFx0ICogQHJldHVybnMge3N0cmluZ30gVGhlIHJlc3VsdGluZyBzeW1ib2xpYyBub3RlIG5hbWUuXG5cdFx0ICovXG5cdFx0bm90ZUZyb21NaWRpUGl0Y2g6IGZ1bmN0aW9uKG4sIHJldHVybkZsYXR0ZW5lZCkge1xuXHRcdFx0dmFyIG9jdGF2ZSA9IDAsIG5vdGVOdW0gPSBuLCBub3RlTmFtZSwgcmV0dXJuRmxhdHRlbmVkID0gcmV0dXJuRmxhdHRlbmVkIHx8IGZhbHNlO1xuXHRcdFx0aWYgKG4gPiAyMykge1xuXHRcdFx0XHQvLyBub3RlTnVtIGlzIG9uIG9jdGF2ZSAxIG9yIG1vcmVcblx0XHRcdFx0b2N0YXZlID0gTWF0aC5mbG9vcihuLzEyKSAtIDE7XG5cdFx0XHRcdC8vIHN1YnRyYWN0IG51bWJlciBvZiBvY3RhdmVzIGZyb20gbm90ZU51bVxuXHRcdFx0XHRub3RlTnVtID0gbiAtIG9jdGF2ZSAqIDEyO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBnZXQgbm90ZSBuYW1lIChjIywgZCwgZiMgZXRjKVxuXHRcdFx0bm90ZU5hbWUgPSBVdGlsLm1pZGlfcGl0Y2hlc19sZXR0ZXJbbm90ZU51bV07XG5cdFx0XHQvLyBVc2UgZmxhdHRlbmVkIG5vdGVzIGlmIHJlcXVlc3RlZCAoZS5nLiBmIyBzaG91bGQgYmUgb3V0cHV0IGFzIGdiKVxuXHRcdFx0aWYgKHJldHVybkZsYXR0ZW5lZCAmJiBub3RlTmFtZS5pbmRleE9mKCcjJykgPiAwKSB7XG5cdFx0XHRcdG5vdGVOYW1lID0gVXRpbC5taWRpX2ZsYXR0ZW5lZF9ub3Rlc1tub3RlTmFtZV07XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbm90ZU5hbWUgKyBvY3RhdmU7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIENvbnZlcnQgYmVhdHMgcGVyIG1pbnV0ZSAoQlBNKSB0byBtaWNyb3NlY29uZHMgcGVyIHF1YXJ0ZXIgbm90ZSAoTVBRTikuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gYnBtIC0gQSBudW1iZXIgaW4gYmVhdHMgcGVyIG1pbnV0ZS5cblx0XHQgKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIG1pY3Jvc2Vjb25kcyBwZXIgcXVhcnRlciBub3RlLlxuXHRcdCAqL1xuXHRcdG1wcW5Gcm9tQnBtOiBmdW5jdGlvbihicG0pIHtcblx0XHRcdHZhciBtcHFuID0gTWF0aC5mbG9vcig2MDAwMDAwMCAvIGJwbSk7XG5cdFx0XHR2YXIgcmV0PVtdO1xuXHRcdFx0ZG8ge1xuXHRcdFx0XHRyZXQudW5zaGlmdChtcHFuICYgMHhGRik7XG5cdFx0XHRcdG1wcW4gPj49IDg7XG5cdFx0XHR9IHdoaWxlIChtcHFuKTtcblx0XHRcdHdoaWxlIChyZXQubGVuZ3RoIDwgMykge1xuXHRcdFx0XHRyZXQucHVzaCgwKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIENvbnZlcnQgbWljcm9zZWNvbmRzIHBlciBxdWFydGVyIG5vdGUgKE1QUU4pIHRvIGJlYXRzIHBlciBtaW51dGUgKEJQTSkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gbXBxbiAtIFRoZSBudW1iZXIgb2YgbWljcm9zZWNvbmRzIHBlciBxdWFydGVyIG5vdGUuXG5cdFx0ICogQHJldHVybnMge251bWJlcn0gQSBudW1iZXIgaW4gYmVhdHMgcGVyIG1pbnV0ZS5cblx0XHQgKi9cblx0XHRicG1Gcm9tTXBxbjogZnVuY3Rpb24obXBxbikge1xuXHRcdFx0dmFyIG0gPSBtcHFuO1xuXHRcdFx0aWYgKHR5cGVvZiBtcHFuWzBdICE9ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdG0gPSAwO1xuXHRcdFx0XHRmb3IgKHZhciBpPTAsIGw9bXBxbi5sZW5ndGgtMTsgbCA+PSAwOyArK2ksIC0tbCkge1xuXHRcdFx0XHRcdG0gfD0gbXBxbltpXSA8PCBsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gTWF0aC5mbG9vcig2MDAwMDAwMCAvIG1wcW4pO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBDb252ZXJ0cyBhbiBhcnJheSBvZiBieXRlcyB0byBhIHN0cmluZyBvZiBoZXhhZGVjaW1hbCBjaGFyYWN0ZXJzLiBQcmVwYXJlc1xuXHRcdCAqIGl0IHRvIGJlIGNvbnZlcnRlZCBpbnRvIGEgYmFzZTY0IHN0cmluZy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7QXJyYXl9IGJ5dGVBcnJheSAtIEFycmF5IG9mIGJ5dGVzIHRvIGJlIGNvbnZlcnRlZC5cblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfSBIZXhhZGVjaW1hbCBzdHJpbmcsIGUuZy4gXCIwOTdCOEFcIi5cblx0XHQgKi9cblx0XHRjb2RlczJTdHI6IGZ1bmN0aW9uKGJ5dGVBcnJheSkge1xuXHRcdFx0cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgYnl0ZUFycmF5KTtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogQ29udmVydHMgYSBzdHJpbmcgb2YgaGV4YWRlY2ltYWwgdmFsdWVzIHRvIGFuIGFycmF5IG9mIGJ5dGVzLiBJdCBjYW4gYWxzb1xuXHRcdCAqIGFkZCByZW1haW5pbmcgXCIwXCIgbmliYmxlcyBpbiBvcmRlciB0byBoYXZlIGVub3VnaCBieXRlcyBpbiB0aGUgYXJyYXkgYXMgdGhlXG5cdFx0ICogYGZpbmFsQnl0ZXNgIHBhcmFtZXRlci5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBzdHJpbmcgb2YgaGV4YWRlY2ltYWwgdmFsdWVzIGUuZy4gXCIwOTdCOEFcIlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBbZmluYWxCeXRlc10gLSBPcHRpb25hbC4gVGhlIGRlc2lyZWQgbnVtYmVyIG9mIGJ5dGVzXG5cdFx0ICogKG5vdCBuaWJibGVzKSB0aGF0IHRoZSByZXR1cm5lZCBhcnJheSBzaG91bGQgY29udGFpbi5cblx0XHQgKiBAcmV0dXJucyB7QXJyYXl9IEFuIGFycmF5IG9mIG5pYmJsZXMuXG5cdFx0ICovXG5cdFx0c3RyMkJ5dGVzOiBmdW5jdGlvbiAoc3RyLCBmaW5hbEJ5dGVzKSB7XG5cdFx0XHRpZiAoZmluYWxCeXRlcykge1xuXHRcdFx0XHR3aGlsZSAoKHN0ci5sZW5ndGggLyAyKSA8IGZpbmFsQnl0ZXMpIHsgc3RyID0gXCIwXCIgKyBzdHI7IH1cblx0XHRcdH1cblxuXHRcdFx0dmFyIGJ5dGVzID0gW107XG5cdFx0XHRmb3IgKHZhciBpPXN0ci5sZW5ndGgtMTsgaT49MDsgaSA9IGktMikge1xuXHRcdFx0XHR2YXIgY2hhcnMgPSBpID09PSAwID8gc3RyW2ldIDogc3RyW2ktMV0gKyBzdHJbaV07XG5cdFx0XHRcdGJ5dGVzLnVuc2hpZnQocGFyc2VJbnQoY2hhcnMsIDE2KSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBieXRlcztcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogVHJhbnNsYXRlcyBudW1iZXIgb2YgdGlja3MgdG8gTUlESSB0aW1lc3RhbXAgZm9ybWF0LCByZXR1cm5pbmcgYW4gYXJyYXlcblx0XHQgKiBvZiBieXRlcyB3aXRoIHRoZSB0aW1lIHZhbHVlcy4gTUlESSBoYXMgYSB2ZXJ5IHBhcnRpY3VsYXIgd2F5IHRvIGV4cHJlc3Ncblx0XHQgKiB0aW1lOyB0YWtlIGEgZ29vZCBsb29rIGF0IHRoZSBzcGVjIGJlZm9yZSBldmVyIHRvdWNoaW5nIHRoaXMgZnVuY3Rpb24uXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gdGlja3MgLSBOdW1iZXIgb2YgdGlja3MgdG8gYmUgdHJhbnNsYXRlZC5cblx0XHQgKiBAcmV0dXJucyB7bnVtYmVyfSBBcnJheSBvZiBieXRlcyB0aGF0IGZvcm0gdGhlIE1JREkgdGltZSB2YWx1ZS5cblx0XHQgKi9cblx0XHR0cmFuc2xhdGVUaWNrVGltZTogZnVuY3Rpb24odGlja3MpIHtcblx0XHRcdHZhciBidWZmZXIgPSB0aWNrcyAmIDB4N0Y7XG5cblx0XHRcdHdoaWxlICh0aWNrcyA9IHRpY2tzID4+IDcpIHtcblx0XHRcdFx0YnVmZmVyIDw8PSA4O1xuXHRcdFx0XHRidWZmZXIgfD0gKCh0aWNrcyAmIDB4N0YpIHwgMHg4MCk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBiTGlzdCA9IFtdO1xuXHRcdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdFx0Ykxpc3QucHVzaChidWZmZXIgJiAweGZmKTtcblxuXHRcdFx0XHRpZiAoYnVmZmVyICYgMHg4MCkgeyBidWZmZXIgPj49IDg7IH1cblx0XHRcdFx0ZWxzZSB7IGJyZWFrOyB9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gYkxpc3Q7XG5cdFx0fSxcblxuXHR9O1xuXG5cdC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXHQgKiBFdmVudCBjbGFzc1xuXHQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cblx0LyoqXG5cdCAqIENvbnN0cnVjdCBhIE1JREkgZXZlbnQuXG5cdCAqXG5cdCAqIFBhcmFtZXRlcnMgaW5jbHVkZTpcblx0ICogIC0gdGltZSBbb3B0aW9uYWwgbnVtYmVyXSAtIFRpY2tzIHNpbmNlIHByZXZpb3VzIGV2ZW50LlxuXHQgKiAgLSB0eXBlIFtyZXF1aXJlZCBudW1iZXJdIC0gVHlwZSBvZiBldmVudC5cblx0ICogIC0gY2hhbm5lbCBbcmVxdWlyZWQgbnVtYmVyXSAtIENoYW5uZWwgZm9yIHRoZSBldmVudC5cblx0ICogIC0gcGFyYW0xIFtyZXF1aXJlZCBudW1iZXJdIC0gRmlyc3QgZXZlbnQgcGFyYW1ldGVyLlxuXHQgKiAgLSBwYXJhbTIgW29wdGlvbmFsIG51bWJlcl0gLSBTZWNvbmQgZXZlbnQgcGFyYW1ldGVyLlxuXHQgKi9cblx0dmFyIE1pZGlFdmVudCA9IGZ1bmN0aW9uKHBhcmFtcykge1xuXHRcdGlmICghdGhpcykgcmV0dXJuIG5ldyBNaWRpRXZlbnQocGFyYW1zKTtcblx0XHRpZiAocGFyYW1zICYmXG5cdFx0XHRcdChwYXJhbXMudHlwZSAgICAhPT0gbnVsbCB8fCBwYXJhbXMudHlwZSAgICAhPT0gdW5kZWZpbmVkKSAmJlxuXHRcdFx0XHQocGFyYW1zLmNoYW5uZWwgIT09IG51bGwgfHwgcGFyYW1zLmNoYW5uZWwgIT09IHVuZGVmaW5lZCkgJiZcblx0XHRcdFx0KHBhcmFtcy5wYXJhbTEgICE9PSBudWxsIHx8IHBhcmFtcy5wYXJhbTEgICE9PSB1bmRlZmluZWQpKSB7XG5cdFx0XHR0aGlzLnNldFRpbWUocGFyYW1zLnRpbWUpO1xuXHRcdFx0dGhpcy5zZXRUeXBlKHBhcmFtcy50eXBlKTtcblx0XHRcdHRoaXMuc2V0Q2hhbm5lbChwYXJhbXMuY2hhbm5lbCk7XG5cdFx0XHR0aGlzLnNldFBhcmFtMShwYXJhbXMucGFyYW0xKTtcblx0XHRcdHRoaXMuc2V0UGFyYW0yKHBhcmFtcy5wYXJhbTIpO1xuXHRcdH1cblx0fTtcblxuXHQvLyBldmVudCBjb2Rlc1xuXHRNaWRpRXZlbnQuTk9URV9PRkYgICAgICAgICAgID0gMHg4MDtcblx0TWlkaUV2ZW50Lk5PVEVfT04gICAgICAgICAgICA9IDB4OTA7XG5cdE1pZGlFdmVudC5BRlRFUl9UT1VDSCAgICAgICAgPSAweEEwO1xuXHRNaWRpRXZlbnQuQ09OVFJPTExFUiAgICAgICAgID0gMHhCMDtcblx0TWlkaUV2ZW50LlBST0dSQU1fQ0hBTkdFICAgICA9IDB4QzA7XG5cdE1pZGlFdmVudC5DSEFOTkVMX0FGVEVSVE9VQ0ggPSAweEQwO1xuXHRNaWRpRXZlbnQuUElUQ0hfQkVORCAgICAgICAgID0gMHhFMDtcblxuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIHRpbWUgZm9yIHRoZSBldmVudCBpbiB0aWNrcyBzaW5jZSB0aGUgcHJldmlvdXMgZXZlbnQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0aWNrcyAtIFRoZSBudW1iZXIgb2YgdGlja3Mgc2luY2UgdGhlIHByZXZpb3VzIGV2ZW50LiBNYXlcblx0ICogYmUgemVyby5cblx0ICovXG5cdE1pZGlFdmVudC5wcm90b3R5cGUuc2V0VGltZSA9IGZ1bmN0aW9uKHRpY2tzKSB7XG5cdFx0dGhpcy50aW1lID0gVXRpbC50cmFuc2xhdGVUaWNrVGltZSh0aWNrcyB8fCAwKTtcblx0fTtcblxuXHQvKipcblx0ICogU2V0IHRoZSB0eXBlIG9mIHRoZSBldmVudC4gTXVzdCBiZSBvbmUgb2YgdGhlIGV2ZW50IGNvZGVzIG9uIE1pZGlFdmVudC5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHR5cGUgLSBFdmVudCB0eXBlLlxuXHQgKi9cblx0TWlkaUV2ZW50LnByb3RvdHlwZS5zZXRUeXBlID0gZnVuY3Rpb24odHlwZSkge1xuXHRcdGlmICh0eXBlIDwgTWlkaUV2ZW50Lk5PVEVfT0ZGIHx8IHR5cGUgPiBNaWRpRXZlbnQuUElUQ0hfQkVORCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVHJ5aW5nIHRvIHNldCBhbiB1bmtub3duIGV2ZW50OiBcIiArIHR5cGUpO1xuXHRcdH1cblxuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNldCB0aGUgY2hhbm5lbCBmb3IgdGhlIGV2ZW50LiBNdXN0IGJlIGJldHdlZW4gMCBhbmQgMTUsIGluY2x1c2l2ZS5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGNoYW5uZWwgLSBUaGUgZXZlbnQgY2hhbm5lbC5cblx0ICovXG5cdE1pZGlFdmVudC5wcm90b3R5cGUuc2V0Q2hhbm5lbCA9IGZ1bmN0aW9uKGNoYW5uZWwpIHtcblx0XHRpZiAoY2hhbm5lbCA8IDAgfHwgY2hhbm5lbCA+IDE1KSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDaGFubmVsIGlzIG91dCBvZiBib3VuZHMuXCIpO1xuXHRcdH1cblxuXHRcdHRoaXMuY2hhbm5lbCA9IGNoYW5uZWw7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNldCB0aGUgZmlyc3QgcGFyYW1ldGVyIGZvciB0aGUgZXZlbnQuIE11c3QgYmUgYmV0d2VlbiAwIGFuZCAyNTUsXG5cdCAqIGluY2x1c2l2ZS5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHAgLSBUaGUgZmlyc3QgZXZlbnQgcGFyYW1ldGVyIHZhbHVlLlxuXHQgKi9cblx0TWlkaUV2ZW50LnByb3RvdHlwZS5zZXRQYXJhbTEgPSBmdW5jdGlvbihwKSB7XG5cdFx0dGhpcy5wYXJhbTEgPSBwO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIHNlY29uZCBwYXJhbWV0ZXIgZm9yIHRoZSBldmVudC4gTXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDI1NSxcblx0ICogaW5jbHVzaXZlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gcCAtIFRoZSBzZWNvbmQgZXZlbnQgcGFyYW1ldGVyIHZhbHVlLlxuXHQgKi9cblx0TWlkaUV2ZW50LnByb3RvdHlwZS5zZXRQYXJhbTIgPSBmdW5jdGlvbihwKSB7XG5cdFx0dGhpcy5wYXJhbTIgPSBwO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXJpYWxpemUgdGhlIGV2ZW50IHRvIGFuIGFycmF5IG9mIGJ5dGVzLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IFRoZSBhcnJheSBvZiBzZXJpYWxpemVkIGJ5dGVzLlxuXHQgKi9cblx0TWlkaUV2ZW50LnByb3RvdHlwZS50b0J5dGVzID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGJ5dGVBcnJheSA9IFtdO1xuXG5cdFx0dmFyIHR5cGVDaGFubmVsQnl0ZSA9IHRoaXMudHlwZSB8ICh0aGlzLmNoYW5uZWwgJiAweEYpO1xuXG5cdFx0Ynl0ZUFycmF5LnB1c2guYXBwbHkoYnl0ZUFycmF5LCB0aGlzLnRpbWUpO1xuXHRcdGJ5dGVBcnJheS5wdXNoKHR5cGVDaGFubmVsQnl0ZSk7XG5cdFx0Ynl0ZUFycmF5LnB1c2godGhpcy5wYXJhbTEpO1xuXG5cdFx0Ly8gU29tZSBldmVudHMgZG9uJ3QgaGF2ZSBhIHNlY29uZCBwYXJhbWV0ZXJcblx0XHRpZiAodGhpcy5wYXJhbTIgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnBhcmFtMiAhPT0gbnVsbCkge1xuXHRcdFx0Ynl0ZUFycmF5LnB1c2godGhpcy5wYXJhbTIpO1xuXHRcdH1cblx0XHRyZXR1cm4gYnl0ZUFycmF5O1xuXHR9O1xuXG5cdC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXHQgKiBNZXRhRXZlbnQgY2xhc3Ncblx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG5cdC8qKlxuXHQgKiBDb25zdHJ1Y3QgYSBtZXRhIGV2ZW50LlxuXHQgKlxuXHQgKiBQYXJhbWV0ZXJzIGluY2x1ZGU6XG5cdCAqICAtIHRpbWUgW29wdGlvbmFsIG51bWJlcl0gLSBUaWNrcyBzaW5jZSBwcmV2aW91cyBldmVudC5cblx0ICogIC0gdHlwZSBbcmVxdWlyZWQgbnVtYmVyXSAtIFR5cGUgb2YgZXZlbnQuXG5cdCAqICAtIGRhdGEgW29wdGlvbmFsIGFycmF5fHN0cmluZ10gLSBFdmVudCBkYXRhLlxuXHQgKi9cblx0dmFyIE1ldGFFdmVudCA9IGZ1bmN0aW9uKHBhcmFtcykge1xuXHRcdGlmICghdGhpcykgcmV0dXJuIG5ldyBNZXRhRXZlbnQocGFyYW1zKTtcblx0XHR2YXIgcCA9IHBhcmFtcyB8fCB7fTtcblx0XHR0aGlzLnNldFRpbWUocGFyYW1zLnRpbWUpO1xuXHRcdHRoaXMuc2V0VHlwZShwYXJhbXMudHlwZSk7XG5cdFx0dGhpcy5zZXREYXRhKHBhcmFtcy5kYXRhKTtcblx0fTtcblxuXHRNZXRhRXZlbnQuU0VRVUVOQ0UgICA9IDB4MDA7XG5cdE1ldGFFdmVudC5URVhUICAgICAgID0gMHgwMTtcblx0TWV0YUV2ZW50LkNPUFlSSUdIVCAgPSAweDAyO1xuXHRNZXRhRXZlbnQuVFJBQ0tfTkFNRSA9IDB4MDM7XG5cdE1ldGFFdmVudC5JTlNUUlVNRU5UID0gMHgwNDtcblx0TWV0YUV2ZW50LkxZUklDICAgICAgPSAweDA1O1xuXHRNZXRhRXZlbnQuTUFSS0VSICAgICA9IDB4MDY7XG5cdE1ldGFFdmVudC5DVUVfUE9JTlQgID0gMHgwNztcblx0TWV0YUV2ZW50LkNIQU5ORUxfUFJFRklYID0gMHgyMDtcblx0TWV0YUV2ZW50LkVORF9PRl9UUkFDSyAgID0gMHgyZjtcblx0TWV0YUV2ZW50LlRFTVBPICAgICAgPSAweDUxO1xuXHRNZXRhRXZlbnQuU01QVEUgICAgICA9IDB4NTQ7XG5cdE1ldGFFdmVudC5USU1FX1NJRyAgID0gMHg1ODtcblx0TWV0YUV2ZW50LktFWV9TSUcgICAgPSAweDU5O1xuXHRNZXRhRXZlbnQuU0VRX0VWRU5UICA9IDB4N2Y7XG5cblx0LyoqXG5cdCAqIFNldCB0aGUgdGltZSBmb3IgdGhlIGV2ZW50IGluIHRpY2tzIHNpbmNlIHRoZSBwcmV2aW91cyBldmVudC5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHRpY2tzIC0gVGhlIG51bWJlciBvZiB0aWNrcyBzaW5jZSB0aGUgcHJldmlvdXMgZXZlbnQuIE1heVxuXHQgKiBiZSB6ZXJvLlxuXHQgKi9cblx0TWV0YUV2ZW50LnByb3RvdHlwZS5zZXRUaW1lID0gZnVuY3Rpb24odGlja3MpIHtcblx0XHR0aGlzLnRpbWUgPSBVdGlsLnRyYW5zbGF0ZVRpY2tUaW1lKHRpY2tzIHx8IDApO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIHR5cGUgb2YgdGhlIGV2ZW50LiBNdXN0IGJlIG9uZSBvZiB0aGUgZXZlbnQgY29kZXMgb24gTWV0YUV2ZW50LlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gdCAtIEV2ZW50IHR5cGUuXG5cdCAqL1xuXHRNZXRhRXZlbnQucHJvdG90eXBlLnNldFR5cGUgPSBmdW5jdGlvbih0KSB7XG5cdFx0dGhpcy50eXBlID0gdDtcblx0fTtcblxuXHQvKipcblx0ICogU2V0IHRoZSBkYXRhIGFzc29jaWF0ZWQgd2l0aCB0aGUgZXZlbnQuIE1heSBiZSBhIHN0cmluZyBvciBhcnJheSBvZiBieXRlXG5cdCAqIHZhbHVlcy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd8QXJyYXl9IGQgLSBFdmVudCBkYXRhLlxuXHQgKi9cblx0TWV0YUV2ZW50LnByb3RvdHlwZS5zZXREYXRhID0gZnVuY3Rpb24oZCkge1xuXHRcdHRoaXMuZGF0YSA9IGQ7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNlcmlhbGl6ZSB0aGUgZXZlbnQgdG8gYW4gYXJyYXkgb2YgYnl0ZXMuXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gVGhlIGFycmF5IG9mIHNlcmlhbGl6ZWQgYnl0ZXMuXG5cdCAqL1xuXHRNZXRhRXZlbnQucHJvdG90eXBlLnRvQnl0ZXMgPSBmdW5jdGlvbigpIHtcblx0XHRpZiAoIXRoaXMudHlwZSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVHlwZSBmb3IgbWV0YS1ldmVudCBub3Qgc3BlY2lmaWVkLlwiKTtcblx0XHR9XG5cblx0XHR2YXIgYnl0ZUFycmF5ID0gW107XG5cdFx0Ynl0ZUFycmF5LnB1c2guYXBwbHkoYnl0ZUFycmF5LCB0aGlzLnRpbWUpO1xuXHRcdGJ5dGVBcnJheS5wdXNoKDB4RkYsIHRoaXMudHlwZSk7XG5cblx0XHQvLyBJZiBkYXRhIGlzIGFuIGFycmF5LCB3ZSBhc3N1bWUgdGhhdCBpdCBjb250YWlucyBzZXZlcmFsIGJ5dGVzLiBXZVxuXHRcdC8vIGFwZW5kIHRoZW0gdG8gYnl0ZUFycmF5LlxuXHRcdGlmIChBcnJheS5pc0FycmF5KHRoaXMuZGF0YSkpIHtcblx0XHRcdGJ5dGVBcnJheS5wdXNoKHRoaXMuZGF0YS5sZW5ndGgpO1xuXHRcdFx0Ynl0ZUFycmF5LnB1c2guYXBwbHkoYnl0ZUFycmF5LCB0aGlzLmRhdGEpO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIHRoaXMuZGF0YSA9PSAnbnVtYmVyJykge1xuXHRcdFx0Ynl0ZUFycmF5LnB1c2goMSwgdGhpcy5kYXRhKTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuZGF0YSAhPT0gbnVsbCAmJiB0aGlzLmRhdGEgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Ly8gYXNzdW1lIHN0cmluZzsgbWF5IGJlIGEgYmFkIGFzc3VtcHRpb25cblx0XHRcdGJ5dGVBcnJheS5wdXNoKHRoaXMuZGF0YS5sZW5ndGgpO1xuXHRcdFx0dmFyIGRhdGFCeXRlcyA9IHRoaXMuZGF0YS5zcGxpdCgnJykubWFwKGZ1bmN0aW9uKHgpeyByZXR1cm4geC5jaGFyQ29kZUF0KDApIH0pO1xuXHRcdFx0Ynl0ZUFycmF5LnB1c2guYXBwbHkoYnl0ZUFycmF5LCBkYXRhQnl0ZXMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRieXRlQXJyYXkucHVzaCgwKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYnl0ZUFycmF5O1xuXHR9O1xuXG5cdC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXHQgKiBUcmFjayBjbGFzc1xuXHQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cblx0LyoqXG5cdCAqIENvbnN0cnVjdCBhIE1JREkgdHJhY2suXG5cdCAqXG5cdCAqIFBhcmFtZXRlcnMgaW5jbHVkZTpcblx0ICogIC0gZXZlbnRzIFtvcHRpb25hbCBhcnJheV0gLSBBcnJheSBvZiBldmVudHMgZm9yIHRoZSB0cmFjay5cblx0ICovXG5cdHZhciBUcmFjayA9IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdGlmICghdGhpcykgcmV0dXJuIG5ldyBUcmFjayhjb25maWcpO1xuXHRcdHZhciBjID0gY29uZmlnIHx8IHt9O1xuXHRcdHRoaXMuZXZlbnRzID0gYy5ldmVudHMgfHwgW107XG5cdH07XG5cblx0VHJhY2suU1RBUlRfQllURVMgPSBbMHg0ZCwgMHg1NCwgMHg3MiwgMHg2Yl07XG5cdFRyYWNrLkVORF9CWVRFUyAgID0gWzB4MDAsIDB4RkYsIDB4MkYsIDB4MDBdO1xuXG5cdC8qKlxuXHQgKiBBZGQgYW4gZXZlbnQgdG8gdGhlIHRyYWNrLlxuXHQgKlxuXHQgKiBAcGFyYW0ge01pZGlFdmVudHxNZXRhRXZlbnR9IGV2ZW50IC0gVGhlIGV2ZW50IHRvIGFkZC5cblx0ICogQHJldHVybnMge1RyYWNrfSBUaGUgY3VycmVudCB0cmFjay5cblx0ICovXG5cdFRyYWNrLnByb3RvdHlwZS5hZGRFdmVudCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0dGhpcy5ldmVudHMucHVzaChldmVudCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0LyoqXG5cdCAqIEFkZCBhIG5vdGUtb24gZXZlbnQgdG8gdGhlIHRyYWNrLlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gY2hhbm5lbCAtIFRoZSBjaGFubmVsIHRvIGFkZCB0aGUgZXZlbnQgdG8uXG5cdCAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gcGl0Y2ggLSBUaGUgcGl0Y2ggb2YgdGhlIG5vdGUsIGVpdGhlciBudW1lcmljIG9yXG5cdCAqIHN5bWJvbGljLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gW3RpbWU9MF0gLSBUaGUgbnVtYmVyIG9mIHRpY2tzIHNpbmNlIHRoZSBwcmV2aW91cyBldmVudCxcblx0ICogZGVmYXVsdHMgdG8gMC5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFt2ZWxvY2l0eT05MF0gLSBUaGUgdm9sdW1lIGZvciB0aGUgbm90ZSwgZGVmYXVsdHMgdG9cblx0ICogREVGQVVMVF9WT0xVTUUuXG5cdCAqIEByZXR1cm5zIHtUcmFja30gVGhlIGN1cnJlbnQgdHJhY2suXG5cdCAqL1xuXHRUcmFjay5wcm90b3R5cGUuYWRkTm90ZU9uID0gVHJhY2sucHJvdG90eXBlLm5vdGVPbiA9IGZ1bmN0aW9uKGNoYW5uZWwsIHBpdGNoLCB0aW1lLCB2ZWxvY2l0eSkge1xuXHRcdHRoaXMuZXZlbnRzLnB1c2gobmV3IE1pZGlFdmVudCh7XG5cdFx0XHR0eXBlOiBNaWRpRXZlbnQuTk9URV9PTixcblx0XHRcdGNoYW5uZWw6IGNoYW5uZWwsXG5cdFx0XHRwYXJhbTE6IFV0aWwuZW5zdXJlTWlkaVBpdGNoKHBpdGNoKSxcblx0XHRcdHBhcmFtMjogdmVsb2NpdHkgfHwgREVGQVVMVF9WT0xVTUUsXG5cdFx0XHR0aW1lOiB0aW1lIHx8IDAsXG5cdFx0fSkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBBZGQgYSBub3RlLW9mZiBldmVudCB0byB0aGUgdHJhY2suXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBjaGFubmVsIC0gVGhlIGNoYW5uZWwgdG8gYWRkIHRoZSBldmVudCB0by5cblx0ICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBwaXRjaCAtIFRoZSBwaXRjaCBvZiB0aGUgbm90ZSwgZWl0aGVyIG51bWVyaWMgb3Jcblx0ICogc3ltYm9saWMuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbdGltZT0wXSAtIFRoZSBudW1iZXIgb2YgdGlja3Mgc2luY2UgdGhlIHByZXZpb3VzIGV2ZW50LFxuXHQgKiBkZWZhdWx0cyB0byAwLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gW3ZlbG9jaXR5PTkwXSAtIFRoZSB2ZWxvY2l0eSB0aGUgbm90ZSB3YXMgcmVsZWFzZWQsXG5cdCAqIGRlZmF1bHRzIHRvIERFRkFVTFRfVk9MVU1FLlxuXHQgKiBAcmV0dXJucyB7VHJhY2t9IFRoZSBjdXJyZW50IHRyYWNrLlxuXHQgKi9cblx0VHJhY2sucHJvdG90eXBlLmFkZE5vdGVPZmYgPSBUcmFjay5wcm90b3R5cGUubm90ZU9mZiA9IGZ1bmN0aW9uKGNoYW5uZWwsIHBpdGNoLCB0aW1lLCB2ZWxvY2l0eSkge1xuXHRcdHRoaXMuZXZlbnRzLnB1c2gobmV3IE1pZGlFdmVudCh7XG5cdFx0XHR0eXBlOiBNaWRpRXZlbnQuTk9URV9PRkYsXG5cdFx0XHRjaGFubmVsOiBjaGFubmVsLFxuXHRcdFx0cGFyYW0xOiBVdGlsLmVuc3VyZU1pZGlQaXRjaChwaXRjaCksXG5cdFx0XHRwYXJhbTI6IHZlbG9jaXR5IHx8IERFRkFVTFRfVk9MVU1FLFxuXHRcdFx0dGltZTogdGltZSB8fCAwLFxuXHRcdH0pKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHQvKipcblx0ICogQWRkIGEgbm90ZS1vbiBhbmQgLW9mZiBldmVudCB0byB0aGUgdHJhY2suXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBjaGFubmVsIC0gVGhlIGNoYW5uZWwgdG8gYWRkIHRoZSBldmVudCB0by5cblx0ICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBwaXRjaCAtIFRoZSBwaXRjaCBvZiB0aGUgbm90ZSwgZWl0aGVyIG51bWVyaWMgb3Jcblx0ICogc3ltYm9saWMuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBkdXIgLSBUaGUgZHVyYXRpb24gb2YgdGhlIG5vdGUsIGluIHRpY2tzLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gW3RpbWU9MF0gLSBUaGUgbnVtYmVyIG9mIHRpY2tzIHNpbmNlIHRoZSBwcmV2aW91cyBldmVudCxcblx0ICogZGVmYXVsdHMgdG8gMC5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFt2ZWxvY2l0eT05MF0gLSBUaGUgdmVsb2NpdHkgdGhlIG5vdGUgd2FzIHJlbGVhc2VkLFxuXHQgKiBkZWZhdWx0cyB0byBERUZBVUxUX1ZPTFVNRS5cblx0ICogQHJldHVybnMge1RyYWNrfSBUaGUgY3VycmVudCB0cmFjay5cblx0ICovXG5cdFRyYWNrLnByb3RvdHlwZS5hZGROb3RlID0gVHJhY2sucHJvdG90eXBlLm5vdGUgPSBmdW5jdGlvbihjaGFubmVsLCBwaXRjaCwgZHVyLCB0aW1lLCB2ZWxvY2l0eSkge1xuXHRcdHRoaXMubm90ZU9uKGNoYW5uZWwsIHBpdGNoLCB0aW1lLCB2ZWxvY2l0eSk7XG5cdFx0aWYgKGR1cikge1xuXHRcdFx0dGhpcy5ub3RlT2ZmKGNoYW5uZWwsIHBpdGNoLCBkdXIsIHZlbG9jaXR5KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0LyoqXG5cdCAqIEFkZCBhIG5vdGUtb24gYW5kIC1vZmYgZXZlbnQgdG8gdGhlIHRyYWNrIGZvciBlYWNoIHBpdGNoIGluIGFuIGFycmF5IG9mIHBpdGNoZXMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBjaGFubmVsIC0gVGhlIGNoYW5uZWwgdG8gYWRkIHRoZSBldmVudCB0by5cblx0ICogQHBhcmFtIHthcnJheX0gY2hvcmQgLSBBbiBhcnJheSBvZiBwaXRjaGVzLCBlaXRoZXIgbnVtZXJpYyBvclxuXHQgKiBzeW1ib2xpYy5cblx0ICogQHBhcmFtIHtudW1iZXJ9IGR1ciAtIFRoZSBkdXJhdGlvbiBvZiB0aGUgY2hvcmQsIGluIHRpY2tzLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gW3ZlbG9jaXR5PTkwXSAtIFRoZSB2ZWxvY2l0eSBvZiB0aGUgY2hvcmQsXG5cdCAqIGRlZmF1bHRzIHRvIERFRkFVTFRfVk9MVU1FLlxuXHQgKiBAcmV0dXJucyB7VHJhY2t9IFRoZSBjdXJyZW50IHRyYWNrLlxuXHQgKi9cblx0VHJhY2sucHJvdG90eXBlLmFkZENob3JkID0gVHJhY2sucHJvdG90eXBlLmNob3JkID0gZnVuY3Rpb24oY2hhbm5lbCwgY2hvcmQsIGR1ciwgdmVsb2NpdHkpIHtcblx0XHRpZiAoIUFycmF5LmlzQXJyYXkoY2hvcmQpICYmICFjaG9yZC5sZW5ndGgpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignQ2hvcmQgbXVzdCBiZSBhbiBhcnJheSBvZiBwaXRjaGVzJyk7XG5cdFx0fVxuXHRcdGNob3JkLmZvckVhY2goZnVuY3Rpb24obm90ZSkge1xuXHRcdFx0dGhpcy5ub3RlT24oY2hhbm5lbCwgbm90ZSwgMCwgdmVsb2NpdHkpO1xuXHRcdH0sIHRoaXMpO1xuXHRcdGNob3JkLmZvckVhY2goZnVuY3Rpb24obm90ZSwgaW5kZXgpIHtcblx0XHRcdGlmIChpbmRleCA9PT0gMCkge1xuXHRcdFx0XHR0aGlzLm5vdGVPZmYoY2hhbm5lbCwgbm90ZSwgZHVyKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMubm90ZU9mZihjaGFubmVsLCBub3RlKTtcblx0XHRcdH1cblx0XHR9LCB0aGlzKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHQvKipcblx0ICogU2V0IGluc3RydW1lbnQgZm9yIHRoZSB0cmFjay5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGNoYW5uZWwgLSBUaGUgY2hhbm5lbCB0byBzZXQgdGhlIGluc3RydW1lbnQgb24uXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBpbnN0cnVtZW50IC0gVGhlIGluc3RydW1lbnQgdG8gc2V0IGl0IHRvLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gW3RpbWU9MF0gLSBUaGUgbnVtYmVyIG9mIHRpY2tzIHNpbmNlIHRoZSBwcmV2aW91cyBldmVudCxcblx0ICogZGVmYXVsdHMgdG8gMC5cblx0ICogQHJldHVybnMge1RyYWNrfSBUaGUgY3VycmVudCB0cmFjay5cblx0ICovXG5cdFRyYWNrLnByb3RvdHlwZS5zZXRJbnN0cnVtZW50ID0gVHJhY2sucHJvdG90eXBlLmluc3RydW1lbnQgPSBmdW5jdGlvbihjaGFubmVsLCBpbnN0cnVtZW50LCB0aW1lKSB7XG5cdFx0dGhpcy5ldmVudHMucHVzaChuZXcgTWlkaUV2ZW50KHtcblx0XHRcdHR5cGU6IE1pZGlFdmVudC5QUk9HUkFNX0NIQU5HRSxcblx0XHRcdGNoYW5uZWw6IGNoYW5uZWwsXG5cdFx0XHRwYXJhbTE6IGluc3RydW1lbnQsXG5cdFx0XHR0aW1lOiB0aW1lIHx8IDAsXG5cdFx0fSkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIHRlbXBvIGZvciB0aGUgdHJhY2suXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBicG0gLSBUaGUgbmV3IG51bWJlciBvZiBiZWF0cyBwZXIgbWludXRlLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gW3RpbWU9MF0gLSBUaGUgbnVtYmVyIG9mIHRpY2tzIHNpbmNlIHRoZSBwcmV2aW91cyBldmVudCxcblx0ICogZGVmYXVsdHMgdG8gMC5cblx0ICogQHJldHVybnMge1RyYWNrfSBUaGUgY3VycmVudCB0cmFjay5cblx0ICovXG5cdFRyYWNrLnByb3RvdHlwZS5zZXRUZW1wbyA9IFRyYWNrLnByb3RvdHlwZS50ZW1wbyA9IGZ1bmN0aW9uKGJwbSwgdGltZSkge1xuXHRcdHRoaXMuZXZlbnRzLnB1c2gobmV3IE1ldGFFdmVudCh7XG5cdFx0XHR0eXBlOiBNZXRhRXZlbnQuVEVNUE8sXG5cdFx0XHRkYXRhOiBVdGlsLm1wcW5Gcm9tQnBtKGJwbSksXG5cdFx0XHR0aW1lOiB0aW1lIHx8IDAsXG5cdFx0fSkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXJpYWxpemUgdGhlIHRyYWNrIHRvIGFuIGFycmF5IG9mIGJ5dGVzLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IFRoZSBhcnJheSBvZiBzZXJpYWxpemVkIGJ5dGVzLlxuXHQgKi9cblx0VHJhY2sucHJvdG90eXBlLnRvQnl0ZXMgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgdHJhY2tMZW5ndGggPSAwO1xuXHRcdHZhciBldmVudEJ5dGVzID0gW107XG5cdFx0dmFyIHN0YXJ0Qnl0ZXMgPSBUcmFjay5TVEFSVF9CWVRFUztcblx0XHR2YXIgZW5kQnl0ZXMgICA9IFRyYWNrLkVORF9CWVRFUztcblxuXHRcdHZhciBhZGRFdmVudEJ5dGVzID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdHZhciBieXRlcyA9IGV2ZW50LnRvQnl0ZXMoKTtcblx0XHRcdHRyYWNrTGVuZ3RoICs9IGJ5dGVzLmxlbmd0aDtcblx0XHRcdGV2ZW50Qnl0ZXMucHVzaC5hcHBseShldmVudEJ5dGVzLCBieXRlcyk7XG5cdFx0fTtcblxuXHRcdHRoaXMuZXZlbnRzLmZvckVhY2goYWRkRXZlbnRCeXRlcyk7XG5cblx0XHQvLyBBZGQgdGhlIGVuZC1vZi10cmFjayBieXRlcyB0byB0aGUgc3VtIG9mIGJ5dGVzIGZvciB0aGUgdHJhY2ssIHNpbmNlXG5cdFx0Ly8gdGhleSBhcmUgY291bnRlZCAodW5saWtlIHRoZSBzdGFydC1vZi10cmFjayBvbmVzKS5cblx0XHR0cmFja0xlbmd0aCArPSBlbmRCeXRlcy5sZW5ndGg7XG5cblx0XHQvLyBNYWtlcyBzdXJlIHRoYXQgdHJhY2sgbGVuZ3RoIHdpbGwgZmlsbCB1cCA0IGJ5dGVzIHdpdGggMHMgaW4gY2FzZVxuXHRcdC8vIHRoZSBsZW5ndGggaXMgbGVzcyB0aGFuIHRoYXQgKHRoZSB1c3VhbCBjYXNlKS5cblx0XHR2YXIgbGVuZ3RoQnl0ZXMgPSBVdGlsLnN0cjJCeXRlcyh0cmFja0xlbmd0aC50b1N0cmluZygxNiksIDQpO1xuXG5cdFx0cmV0dXJuIHN0YXJ0Qnl0ZXMuY29uY2F0KGxlbmd0aEJ5dGVzLCBldmVudEJ5dGVzLCBlbmRCeXRlcyk7XG5cdH07XG5cblx0LyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdCAqIEZpbGUgY2xhc3Ncblx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG5cdC8qKlxuXHQgKiBDb25zdHJ1Y3QgYSBmaWxlIG9iamVjdC5cblx0ICpcblx0ICogUGFyYW1ldGVycyBpbmNsdWRlOlxuXHQgKiAgLSB0aWNrcyBbb3B0aW9uYWwgbnVtYmVyXSAtIE51bWJlciBvZiB0aWNrcyBwZXIgYmVhdCwgZGVmYXVsdHMgdG8gMTI4LlxuXHQgKiAgICBNdXN0IGJlIDEtMzI3NjcuXG5cdCAqICAtIHRyYWNrcyBbb3B0aW9uYWwgYXJyYXldIC0gVHJhY2sgZGF0YS5cblx0ICovXG5cdHZhciBGaWxlID0gZnVuY3Rpb24oY29uZmlnKXtcblx0XHRpZiAoIXRoaXMpIHJldHVybiBuZXcgRmlsZShjb25maWcpO1xuXG5cdFx0dmFyIGMgPSBjb25maWcgfHwge307XG5cdFx0aWYgKGMudGlja3MpIHtcblx0XHRcdGlmICh0eXBlb2YgYy50aWNrcyAhPT0gJ251bWJlcicpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdUaWNrcyBwZXIgYmVhdCBtdXN0IGJlIGEgbnVtYmVyIScpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoYy50aWNrcyA8PSAwIHx8IGMudGlja3MgPj0gKDEgPDwgMTUpIHx8IGMudGlja3MgJSAxICE9PSAwKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignVGlja3MgcGVyIGJlYXQgbXVzdCBiZSBhbiBpbnRlZ2VyIGJldHdlZW4gMSBhbmQgMzI3NjchJyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLnRpY2tzID0gYy50aWNrcyB8fCAxMjg7XG5cdFx0dGhpcy50cmFja3MgPSBjLnRyYWNrcyB8fCBbXTtcblx0fTtcblxuXHRGaWxlLkhEUl9DSFVOS0lEICAgICA9IFwiTVRoZFwiOyAgICAgICAgICAgICAvLyBGaWxlIG1hZ2ljIGNvb2tpZVxuXHRGaWxlLkhEUl9DSFVOS19TSVpFICA9IFwiXFx4MDBcXHgwMFxceDAwXFx4MDZcIjsgLy8gSGVhZGVyIGxlbmd0aCBmb3IgU01GXG5cdEZpbGUuSERSX1RZUEUwICAgICAgID0gXCJcXHgwMFxceDAwXCI7ICAgICAgICAgLy8gTWlkaSBUeXBlIDAgaWRcblx0RmlsZS5IRFJfVFlQRTEgICAgICAgPSBcIlxceDAwXFx4MDFcIjsgICAgICAgICAvLyBNaWRpIFR5cGUgMSBpZFxuXG5cdC8qKlxuXHQgKiBBZGQgYSB0cmFjayB0byB0aGUgZmlsZS5cblx0ICpcblx0ICogQHBhcmFtIHtUcmFja30gdHJhY2sgLSBUaGUgdHJhY2sgdG8gYWRkLlxuXHQgKi9cblx0RmlsZS5wcm90b3R5cGUuYWRkVHJhY2sgPSBmdW5jdGlvbih0cmFjaykge1xuXHRcdGlmICh0cmFjaykge1xuXHRcdFx0dGhpcy50cmFja3MucHVzaCh0cmFjayk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IGVsc2Uge1xuXHRcdFx0dHJhY2sgPSBuZXcgVHJhY2soKTtcblx0XHRcdHRoaXMudHJhY2tzLnB1c2godHJhY2spO1xuXHRcdFx0cmV0dXJuIHRyYWNrO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogU2VyaWFsaXplIHRoZSBNSURJIGZpbGUgdG8gYW4gYXJyYXkgb2YgYnl0ZXMuXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gVGhlIGFycmF5IG9mIHNlcmlhbGl6ZWQgYnl0ZXMuXG5cdCAqL1xuXHRGaWxlLnByb3RvdHlwZS50b0J5dGVzID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHRyYWNrQ291bnQgPSB0aGlzLnRyYWNrcy5sZW5ndGgudG9TdHJpbmcoMTYpO1xuXG5cdFx0Ly8gcHJlcGFyZSB0aGUgZmlsZSBoZWFkZXJcblx0XHR2YXIgYnl0ZXMgPSBGaWxlLkhEUl9DSFVOS0lEICsgRmlsZS5IRFJfQ0hVTktfU0laRTtcblxuXHRcdC8vIHNldCBNaWRpIHR5cGUgYmFzZWQgb24gbnVtYmVyIG9mIHRyYWNrc1xuXHRcdGlmIChwYXJzZUludCh0cmFja0NvdW50LCAxNikgPiAxKSB7XG5cdFx0XHRieXRlcyArPSBGaWxlLkhEUl9UWVBFMTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ynl0ZXMgKz0gRmlsZS5IRFJfVFlQRTA7XG5cdFx0fVxuXG5cdFx0Ly8gYWRkIHRoZSBudW1iZXIgb2YgdHJhY2tzICgyIGJ5dGVzKVxuXHRcdGJ5dGVzICs9IFV0aWwuY29kZXMyU3RyKFV0aWwuc3RyMkJ5dGVzKHRyYWNrQ291bnQsIDIpKTtcblx0XHQvLyBhZGQgdGhlIG51bWJlciBvZiB0aWNrcyBwZXIgYmVhdCAoY3VycmVudGx5IGhhcmRjb2RlZClcblx0XHRieXRlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCh0aGlzLnRpY2tzLzI1NiksICB0aGlzLnRpY2tzJTI1Nik7O1xuXG5cdFx0Ly8gaXRlcmF0ZSBvdmVyIHRoZSB0cmFja3MsIGNvbnZlcnRpbmcgdG8gYnl0ZXMgdG9vXG5cdFx0dGhpcy50cmFja3MuZm9yRWFjaChmdW5jdGlvbih0cmFjaykge1xuXHRcdFx0Ynl0ZXMgKz0gVXRpbC5jb2RlczJTdHIodHJhY2sudG9CeXRlcygpKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiBieXRlcztcblx0fTtcblxuXHQvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0ICogRXhwb3J0c1xuXHQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cblx0ZXhwb3J0ZWQuVXRpbCA9IFV0aWw7XG5cdGV4cG9ydGVkLkZpbGUgPSBGaWxlO1xuXHRleHBvcnRlZC5UcmFjayA9IFRyYWNrO1xuXHRleHBvcnRlZC5FdmVudCA9IE1pZGlFdmVudDtcblx0ZXhwb3J0ZWQuTWV0YUV2ZW50ID0gTWV0YUV2ZW50O1xuXG59KSggTWlkaSApO1xuXG5pZiAodHlwZW9mIG1vZHVsZSAhPSAndW5kZWZpbmVkJyAmJiBtb2R1bGUgIT09IG51bGwpIHtcblx0bW9kdWxlLmV4cG9ydHMgPSBNaWRpO1xufSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPSAndW5kZWZpbmVkJyAmJiBleHBvcnRzICE9PSBudWxsKSB7XG5cdGV4cG9ydHMgPSBNaWRpO1xufSBlbHNlIHtcblx0dGhpcy5NaWRpID0gTWlkaTtcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gZmxhdHRlbih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUucmVkdWNlKChwcmV2LCBjdXIpID0+IHByZXYuY29uY2F0KGN1ciksIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdCh2YWx1ZSwgdGltZXMpIHtcbiAgY29uc3Qgb3V0ID0gW107XG5cbiAgd2hpbGUgKHRpbWVzKSB7XG4gICAgb3V0LnB1c2godmFsdWUpO1xuICAgIHRpbWVzIC09IDE7XG4gIH1cblxuICByZXR1cm4gb3V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZ2UobWluLCBtYXgsIHN0ZXApIHtcbiAgY29uc3QgYWNjID0gW107XG5cbiAgaWYgKCFzdGVwKSB7XG4gICAgZm9yIChsZXQgaSA9IG1pbjsgaSA8PSBtYXg7IGkgKz0gMSkge1xuICAgICAgYWNjLnB1c2goaSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IGRpZmYgPSAobWF4IC0gbWluKSAvIHN0ZXA7XG5cbiAgICBmb3IgKGxldCBpID0gbWluOyBpIDw9IG1heDsgaSArPSBkaWZmKSB7XG4gICAgICBhY2MucHVzaChpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYWNjO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSByZXR1cm4gdmFsdWU7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkgcmV0dXJuIHZhbHVlLm1hcChjbG9uZSk7XG5cbiAgY29uc3QgY29weSA9IHt9O1xuXG4gIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgY29weVtrZXldID0gY2xvbmUodmFsdWVba2V5XSk7XG4gIH0pO1xuXG4gIHJldHVybiBjb3B5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gemlwKGEsIGIsIGNiKSB7XG4gIGNvbnN0IG1heCA9IE1hdGgubWF4KGEubGVuZ3RoLCBiLmxlbmd0aCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXg7IGkgKz0gMSkge1xuICAgIGlmICh0eXBlb2YgYVtpXSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGJbaV0gIT09ICd1bmRlZmluZWQnKSBjYihhW2ldLCBiW2ldKTtcbiAgfVxufVxuIiwgIigoKT0+e1widXNlIHN0cmljdFwiO3ZhciBuPXs0MTM6bj0+e24uZXhwb3J0cz1KU09OLnBhcnNlKCd7XCI1dGhcIjpcIjEwMDAwMDAxMDAwMFwiLFwiTTcjNXN1czRcIjpcIjEwMDAwMTAwMTAwMVwiLFwiNyM1c3VzNFwiOlwiMTAwMDAxMDAxMDEwXCIsXCJzdXM0XCI6XCIxMDAwMDEwMTAwMDBcIixcIk03c3VzNFwiOlwiMTAwMDAxMDEwMDAxXCIsXCI3c3VzNFwiOlwiMTAwMDAxMDEwMDEwXCIsXCI3bm81XCI6XCIxMDAwMTAwMDAwMTBcIixcImF1Z1wiOlwiMTAwMDEwMDAxMDAwXCIsXCJNN2I2XCI6XCIxMDAwMTAwMDEwMDFcIixcIm1hajcjNVwiOlwiMTAwMDEwMDAxMDAxXCIsXCI3IzVcIjpcIjEwMDAxMDAwMTAxMFwiLFwiN2IxM1wiOlwiMTAwMDEwMDAxMDEwXCIsXCJNXCI6XCIxMDAwMTAwMTAwMDBcIixcIm1hajdcIjpcIjEwMDAxMDAxMDAwMVwiLFwiN3RoXCI6XCIxMDAwMTAwMTAwMTBcIixcIjZ0aFwiOlwiMTAwMDEwMDEwMTAwXCIsXCI3YWRkNlwiOlwiMTAwMDEwMDEwMTEwXCIsXCI3YjZcIjpcIjEwMDAxMDAxMTAxMFwiLFwiTWI1XCI6XCIxMDAwMTAxMDAwMDBcIixcIk03YjVcIjpcIjEwMDAxMDEwMDAwMVwiLFwiN2I1XCI6XCIxMDAwMTAxMDAwMTBcIixcIm1haiM0XCI6XCIxMDAwMTAxMTAwMDFcIixcIjcjMTFcIjpcIjEwMDAxMDExMDAxMFwiLFwiTTYjMTFcIjpcIjEwMDAxMDExMDEwMFwiLFwiNyMxMWIxM1wiOlwiMTAwMDEwMTExMDEwXCIsXCJtIzVcIjpcIjEwMDEwMDAwMTAwMFwiLFwibWI2TTdcIjpcIjEwMDEwMDAwMTAwMVwiLFwibTcjNVwiOlwiMTAwMTAwMDAxMDEwXCIsXCJtXCI6XCIxMDAxMDAwMTAwMDBcIixcIm0vbWE3XCI6XCIxMDAxMDAwMTAwMDFcIixcIm03XCI6XCIxMDAxMDAwMTAwMTBcIixcIm02XCI6XCIxMDAxMDAwMTAxMDBcIixcIm1NYWo3YjZcIjpcIjEwMDEwMDAxMTAwMVwiLFwiZGltXCI6XCIxMDAxMDAxMDAwMDBcIixcIm9NN1wiOlwiMTAwMTAwMTAwMDAxXCIsXCJtN2I1XCI6XCIxMDAxMDAxMDAwMTBcIixcImRpbTdcIjpcIjEwMDEwMDEwMDEwMFwiLFwibzdNN1wiOlwiMTAwMTAwMTAwMTAxXCIsXCI0dGhcIjpcIjEwMDEwMTAwMDAxMFwiLFwibWFkZDRcIjpcIjEwMDEwMTAxMDAwMFwiLFwibTdhZGQxMVwiOlwiMTAwMTAxMDEwMDEwXCIsXCIrYWRkIzlcIjpcIjEwMDExMDAwMTAwMFwiLFwiNyM1IzlcIjpcIjEwMDExMDAwMTAxMFwiLFwiNyM5XCI6XCIxMDAxMTAwMTAwMTBcIixcIjEzIzlcIjpcIjEwMDExMDAxMDExMFwiLFwiNyM5YjEzXCI6XCIxMDAxMTAwMTEwMTBcIixcIm1hajcjOSMxMVwiOlwiMTAwMTEwMTEwMDAxXCIsXCI3IzkjMTFcIjpcIjEwMDExMDExMDAxMFwiLFwiMTMjOSMxMVwiOlwiMTAwMTEwMTEwMTEwXCIsXCI3IzkjMTFiMTNcIjpcIjEwMDExMDExMTAxMFwiLFwic3VzMlwiOlwiMTAxMDAwMDEwMDAwXCIsXCJNOSM1c3VzNFwiOlwiMTAxMDAxMDAxMDAxXCIsXCJzdXMyNFwiOlwiMTAxMDAxMDEwMDAwXCIsXCJNOXN1czRcIjpcIjEwMTAwMTAxMDAwMVwiLFwiMTF0aFwiOlwiMTAxMDAxMDEwMDEwXCIsXCI5c3VzNFwiOlwiMTAxMDAxMDEwMDEwXCIsXCIxM3N1czRcIjpcIjEwMTAwMTAxMDExMFwiLFwiOW5vNVwiOlwiMTAxMDEwMDAwMDEwXCIsXCIxM25vNVwiOlwiMTAxMDEwMDAwMTEwXCIsXCJNIzVhZGQ5XCI6XCIxMDEwMTAwMDEwMDBcIixcIm1hajkjNVwiOlwiMTAxMDEwMDAxMDAxXCIsXCI5IzVcIjpcIjEwMTAxMDAwMTAxMFwiLFwiOWIxM1wiOlwiMTAxMDEwMDAxMDEwXCIsXCJNYWRkOVwiOlwiMTAxMDEwMDEwMDAwXCIsXCJtYWo5XCI6XCIxMDEwMTAwMTAwMDFcIixcIjl0aFwiOlwiMTAxMDEwMDEwMDEwXCIsXCI2LzlcIjpcIjEwMTAxMDAxMDEwMFwiLFwibWFqMTNcIjpcIjEwMTAxMDAxMDEwMVwiLFwiTTdhZGQxM1wiOlwiMTAxMDEwMDEwMTAxXCIsXCIxM3RoXCI6XCIxMDEwMTAwMTAxMTBcIixcIk05YjVcIjpcIjEwMTAxMDEwMDAwMVwiLFwiOWI1XCI6XCIxMDEwMTAxMDAwMTBcIixcIjEzYjVcIjpcIjEwMTAxMDEwMDExMFwiLFwiOSM1IzExXCI6XCIxMDEwMTAxMDEwMTBcIixcIm1hajkjMTFcIjpcIjEwMTAxMDExMDAwMVwiLFwiOSMxMVwiOlwiMTAxMDEwMTEwMDEwXCIsXCI2OSMxMVwiOlwiMTAxMDEwMTEwMTAwXCIsXCJNMTMjMTFcIjpcIjEwMTAxMDExMDEwMVwiLFwiMTMjMTFcIjpcIjEwMTAxMDExMDExMFwiLFwiOSMxMWIxM1wiOlwiMTAxMDEwMTExMDEwXCIsXCJtOSM1XCI6XCIxMDExMDAwMDEwMTBcIixcIm1hZGQ5XCI6XCIxMDExMDAwMTAwMDBcIixcIm1NOVwiOlwiMTAxMTAwMDEwMDAxXCIsXCJtOVwiOlwiMTAxMTAwMDEwMDEwXCIsXCJtNjlcIjpcIjEwMTEwMDAxMDEwMFwiLFwibTEzXCI6XCIxMDExMDAwMTAxMTBcIixcIm1NYWo5YjZcIjpcIjEwMTEwMDAxMTAwMVwiLFwibTliNVwiOlwiMTAxMTAwMTAwMDEwXCIsXCJtMTFBXCI6XCIxMDExMDEwMDEwMTBcIixcIm0xMVwiOlwiMTAxMTAxMDEwMDEwXCIsXCJiOXN1c1wiOlwiMTEwMDAxMDEwMDEwXCIsXCIxMWI5XCI6XCIxMTAwMDEwMTAwMTBcIixcIjdzdXM0YjliMTNcIjpcIjExMDAwMTAxMTAxMFwiLFwiYWx0N1wiOlwiMTEwMDEwMDAwMDEwXCIsXCI3IzViOVwiOlwiMTEwMDEwMDAxMDEwXCIsXCJNYWRkYjlcIjpcIjExMDAxMDAxMDAwMFwiLFwiTTdiOVwiOlwiMTEwMDEwMDEwMDAxXCIsXCI3YjlcIjpcIjExMDAxMDAxMDAxMFwiLFwiMTNiOVwiOlwiMTEwMDEwMDEwMTEwXCIsXCI3YjliMTNcIjpcIjExMDAxMDAxMTAxMFwiLFwiNyM1YjkjMTFcIjpcIjExMDAxMDEwMTAxMFwiLFwiN2I5IzExXCI6XCIxMTAwMTAxMTAwMTBcIixcIjEzYjkjMTFcIjpcIjExMDAxMDExMDExMFwiLFwiN2I5YjEzIzExXCI6XCIxMTAwMTAxMTEwMTBcIixcIm1iNmI5XCI6XCIxMTAxMDAwMDEwMDBcIixcIjdiOSM5XCI6XCIxMTAxMTAwMTAwMTBcIn0nKX0sNzIyOm49PntuLmV4cG9ydHM9SlNPTi5wYXJzZSgne1wibWFqb3IgcGVudGF0b25pY1wiOlwiMTAxMDEwMDEwMTAwXCIsXCJpb25pYW4gcGVudGF0b25pY1wiOlwiMTAwMDExMDEwMDAxXCIsXCJtaXhvbHlkaWFuIHBlbnRhdG9uaWNcIjpcIjEwMDAxMTAxMDAxMFwiLFwicml0dXNlblwiOlwiMTAxMDAxMDEwMTAwXCIsXCJlZ3lwdGlhblwiOlwiMTAxMDAxMDEwMDEwXCIsXCJuZW9wb2xpdGFuIG1ham9yIHBlbnRhdG9uaWNcIjpcIjEwMDAxMTEwMDAxMFwiLFwidmlldG5hbWVzZSAxXCI6XCIxMDAxMDEwMTEwMDBcIixcInBlbG9nXCI6XCIxMTAxMDAwMTEwMDBcIixcImt1bW9pam9zaGlcIjpcIjExMDAwMTAxMTAwMFwiLFwiaGlyYWpvc2hpXCI6XCIxMDExMDAwMTEwMDBcIixcIml3YXRvXCI6XCIxMTAwMDExMDAwMTBcIixcImluLXNlblwiOlwiMTEwMDAxMDEwMDEwXCIsXCJseWRpYW4gcGVudGF0b25pY1wiOlwiMTAwMDEwMTEwMDAxXCIsXCJtYWxrb3MgcmFnYVwiOlwiMTAwMTAxMDAxMDEwXCIsXCJsb2NyaWFuIHBlbnRhdG9uaWNcIjpcIjEwMDEwMTEwMDAxMFwiLFwibWlub3IgcGVudGF0b25pY1wiOlwiMTAwMTAxMDEwMDEwXCIsXCJtaW5vciBzaXggcGVudGF0b25pY1wiOlwiMTAwMTAxMDEwMTAwXCIsXCJmbGF0IHRocmVlIHBlbnRhdG9uaWNcIjpcIjEwMTEwMDAxMDEwMFwiLFwiZmxhdCBzaXggcGVudGF0b25pY1wiOlwiMTAxMDEwMDExMDAwXCIsXCJzY3JpYWJpblwiOlwiMTEwMDEwMDEwMTAwXCIsXCJ3aG9sZSB0b25lIHBlbnRhdG9uaWNcIjpcIjEwMDAxMDEwMTAxMFwiLFwibHlkaWFuICM1UCBwZW50YXRvbmljXCI6XCIxMDAwMTAxMDEwMDFcIixcImx5ZGlhbiBkb21pbmFudCBwZW50YXRvbmljXCI6XCIxMDAwMTAxMTAwMTBcIixcIm1pbm9yICM3TSBwZW50YXRvbmljXCI6XCIxMDAxMDEwMTAwMDFcIixcInN1cGVyIGxvY3JpYW4gcGVudGF0b25pY1wiOlwiMTAwMTEwMTAwMDEwXCIsXCJtaW5vciBoZXhhdG9uaWNcIjpcIjEwMTEwMTAxMDAwMVwiLFwiYXVnbWVudGVkXCI6XCIxMDAxMTAwMTEwMDFcIixcIm1ham9yIGJsdWVzXCI6XCIxMDExMTAwMTAxMDBcIixcInBpb25naW9cIjpcIjEwMTAwMTAxMDExMFwiLFwicHJvbWV0aGV1cyBuZW9wb2xpdGFuXCI6XCIxMTAwMTAxMDAxMTBcIixcInByb21ldGhldXNcIjpcIjEwMTAxMDEwMDExMFwiLFwibXlzdGVyeSAjMVwiOlwiMTEwMDEwMTAxMDEwXCIsXCJzaXggdG9uZSBzeW1tZXRyaWNcIjpcIjExMDAxMTAwMTEwMFwiLFwid2hvbGUgdG9uZVwiOlwiMTAxMDEwMTAxMDEwXCIsXCJtZXNzaWFlblxcJ3MgbW9kZSAjNVwiOlwiMTEwMDAxMTEwMDAxXCIsXCJtaW5vciBibHVlc1wiOlwiMTAwMTAxMTEwMDEwXCIsXCJsb2NyaWFuIG1ham9yXCI6XCIxMDEwMTExMDEwMTBcIixcImRvdWJsZSBoYXJtb25pYyBseWRpYW5cIjpcIjExMDAxMDExMTAwMVwiLFwiaGFybW9uaWMgbWlub3JcIjpcIjEwMTEwMTAxMTAwMVwiLFwiYWx0ZXJlZFwiOlwiMTEwMTEwMTAxMDEwXCIsXCJsb2NyaWFuICMyXCI6XCIxMDExMDExMDEwMTBcIixcIm1peG9seWRpYW4gYjZcIjpcIjEwMTAxMTAxMTAxMFwiLFwibHlkaWFuIGRvbWluYW50XCI6XCIxMDEwMTAxMTAxMTBcIixcImx5ZGlhblwiOlwiMTAxMDEwMTEwMTAxXCIsXCJseWRpYW4gYXVnbWVudGVkXCI6XCIxMDEwMTAxMDExMDFcIixcImRvcmlhbiBiMlwiOlwiMTEwMTAxMDEwMTEwXCIsXCJtZWxvZGljIG1pbm9yXCI6XCIxMDExMDEwMTAxMDFcIixcImxvY3JpYW5cIjpcIjExMDEwMTEwMTAxMFwiLFwidWx0cmFsb2NyaWFuXCI6XCIxMTAxMTAxMDExMDBcIixcImxvY3JpYW4gNlwiOlwiMTEwMTAxMTAwMTEwXCIsXCJhdWdtZW50ZWQgaGVwdGF0b25pY1wiOlwiMTAwMTExMDExMDAxXCIsXCJyb21hbmlhbiBtaW5vclwiOlwiMTAxMTAwMTEwMTEwXCIsXCJkb3JpYW4gIzRcIjpcIjEwMTEwMDExMDExMFwiLFwibHlkaWFuIGRpbWluaXNoZWRcIjpcIjEwMTEwMDExMDEwMVwiLFwicGhyeWdpYW5cIjpcIjExMDEwMTAxMTAxMFwiLFwibGVhZGluZyB3aG9sZSB0b25lXCI6XCIxMDEwMTAxMDEwMTFcIixcImx5ZGlhbiBtaW5vclwiOlwiMTAxMDEwMTExMDEwXCIsXCJwaHJ5Z2lhbiBkb21pbmFudFwiOlwiMTEwMDExMDExMDEwXCIsXCJiYWxpbmVzZVwiOlwiMTEwMTAxMDExMDAxXCIsXCJuZW9wb2xpdGFuIG1ham9yXCI6XCIxMTAxMDEwMTAxMDFcIixcImFlb2xpYW5cIjpcIjEwMTEwMTAxMTAxMFwiLFwiaGFybW9uaWMgbWFqb3JcIjpcIjEwMTAxMTAxMTAwMVwiLFwiZG91YmxlIGhhcm1vbmljIG1ham9yXCI6XCIxMTAwMTEwMTEwMDFcIixcImRvcmlhblwiOlwiMTAxMTAxMDEwMTEwXCIsXCJodW5nYXJpYW4gbWlub3JcIjpcIjEwMTEwMDExMTAwMVwiLFwiaHVuZ2FyaWFuIG1ham9yXCI6XCIxMDAxMTAxMTAxMTBcIixcIm9yaWVudGFsXCI6XCIxMTAwMTExMDAxMTBcIixcImZsYW1lbmNvXCI6XCIxMTAxMTAxMTAwMTBcIixcInRvZGkgcmFnYVwiOlwiMTEwMTAwMTExMDAxXCIsXCJtaXhvbHlkaWFuXCI6XCIxMDEwMTEwMTAxMTBcIixcInBlcnNpYW5cIjpcIjExMDAxMTEwMTAwMVwiLFwibWFqb3JcIjpcIjEwMTAxMTAxMDEwMVwiLFwiZW5pZ21hdGljXCI6XCIxMTAwMTAxMDEwMTFcIixcIm1ham9yIGF1Z21lbnRlZFwiOlwiMTAxMDExMDAxMTAxXCIsXCJseWRpYW4gIzlcIjpcIjEwMDExMDExMDEwMVwiLFwibWVzc2lhZW5cXCdzIG1vZGUgIzRcIjpcIjExMTAwMTExMTAwMVwiLFwicHVydmkgcmFnYVwiOlwiMTEwMDExMTExMDAxXCIsXCJzcGFuaXNoIGhlcHRhdG9uaWNcIjpcIjExMDExMTAxMTAxMFwiLFwiYmVib3BcIjpcIjEwMTAxMTAxMDExMVwiLFwiYmVib3AgbWlub3JcIjpcIjEwMTExMTAxMDExMFwiLFwiYmVib3AgbWFqb3JcIjpcIjEwMTAxMTAxMTEwMVwiLFwiYmVib3AgbG9jcmlhblwiOlwiMTEwMTAxMTExMDEwXCIsXCJtaW5vciBiZWJvcFwiOlwiMTAxMTAxMDExMDExXCIsXCJkaW1pbmlzaGVkXCI6XCIxMDExMDExMDExMDFcIixcImljaGlrb3N1Y2hvXCI6XCIxMDEwMTExMTAxMDFcIixcIm1pbm9yIHNpeCBkaW1pbmlzaGVkXCI6XCIxMDExMDEwMTExMDFcIixcImhhbGYtd2hvbGUgZGltaW5pc2hlZFwiOlwiMTEwMTEwMTEwMTEwXCIsXCJrYWZpIHJhZ2FcIjpcIjEwMDExMTAxMDExMVwiLFwibWVzc2lhZW5cXCdzIG1vZGUgIzZcIjpcIjEwMTAxMTEwMTAxMVwiLFwiY29tcG9zaXRlIGJsdWVzXCI6XCIxMDExMTExMTAxMTBcIixcIm1lc3NpYWVuXFwncyBtb2RlICMzXCI6XCIxMDExMTAxMTEwMTFcIixcIm1lc3NpYWVuXFwncyBtb2RlICM3XCI6XCIxMTExMDExMTExMDFcIixcImNocm9tYXRpY1wiOlwiMTExMTExMTExMTExXCIsXCJpb25pYW5cIjpcIjEwMTAxMTAxMDEwMVwiLFwibWlub3JcIjpcIjEwMTEwMTAxMTAxMFwifScpfX0sZT17fTtmdW5jdGlvbiBvKGEpe3ZhciBpPWVbYV07aWYodm9pZCAwIT09aSlyZXR1cm4gaS5leHBvcnRzO3ZhciByPWVbYV09e2V4cG9ydHM6e319O3JldHVybiBuW2FdKHIsci5leHBvcnRzLG8pLHIuZXhwb3J0c31vLmQ9KG4sZSk9Pntmb3IodmFyIGEgaW4gZSlvLm8oZSxhKSYmIW8ubyhuLGEpJiZPYmplY3QuZGVmaW5lUHJvcGVydHkobixhLHtlbnVtZXJhYmxlOiEwLGdldDplW2FdfSl9LG8ubz0obixlKT0+T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4sZSksby5yPW49PntcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfTt2YXIgYT17fTsoKCk9PntvLnIoYSksby5kKGEse2Nob3JkOigpPT5tLGNob3JkczooKT0+dCxpbmxpbmVDaG9yZDooKT0+cixzY2FsZTooKT0+YyxzY2FsZXM6KCk9PnN9KTt2YXIgbj1vKDcyMiksZT1vKDQxMyksaT1mdW5jdGlvbihvKXt2YXIgYT1vLnNjYWxlLGk9by5jaG9yZCxyPWF8fGksdD1hP1wic2NhbGVcIjpcImNob3JkXCI7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIHIpdGhyb3cgbmV3IEVycm9yKFwiXCIuY29uY2F0KHIsXCIgaXMgbm90IGEgdmFsaWQgaW5wdXQgZm9yIFwiKS5jb25jYXQodCkpO3ZhciBzLG0sYz1yLmluZGV4T2YoXCIgXCIpOy0xPT09Yz8ocz1yLnNsaWNlKDEpLG09clswXSxcImJcIiE9PXJbMV0mJlwiI1wiIT09clsxXXx8KHM9ci5zbGljZSgyKSxtKz1yWzFdKSk6KHM9ci5zbGljZSgtMT09PWM/MTpjKzEpLG09ci5zbGljZSgwLGMpKTt2YXIgZD1mdW5jdGlvbihuKXtyZXR1cm57XCJDI1wiOlwiRGJcIixcIkQjXCI6XCJFYlwiLFwiRiNcIjpcIkdiXCIsXCJHI1wiOlwiQWJcIixcIkEjXCI6XCJCYlwifVtuLnRvVXBwZXJDYXNlKCldfHxuLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK24uc2xpY2UoMSl9KG0ucmVwbGFjZSgvXFxkL2csXCJcIikpLGw9XCJcIiE9PW0ucmVwbGFjZSgvXFxEL2csXCJcIik/K20ucmVwbGFjZSgvXFxEL2csXCJcIik6NDtpZihpc05hTihsKSl0aHJvdyBuZXcgRXJyb3IoXCJcIi5jb25jYXQobVswXSxcIiBkb2VzIG5vdCBoYXZlIGEgdmFsaWQgb2N0YXZlXCIpKTtpZighbltzXSYmIWVbc10pdGhyb3cgbmV3IEVycm9yKFwiXCIuY29uY2F0KHIsXCIgaXMgbm90IGEgdmFsaWQgXCIpLmNvbmNhdCh0KSk7Zm9yKHZhciBiPWZ1bmN0aW9uKG4sZSl7dmFyIG89W1wiQ1wiLFwiRGJcIixcIkRcIixcIkViXCIsXCJFXCIsXCJGXCIsXCJHYlwiLFwiR1wiLFwiQWJcIixcIkFcIixcIkJiXCIsXCJCXCJdLGE9by5tYXAoKGZ1bmN0aW9uKG4pe3JldHVybiBuK2V9KSksaT1vLm1hcCgoZnVuY3Rpb24obil7cmV0dXJuIG4rKGUrMSl9KSkscj1hLmNvbmNhdChpKTtyZXR1cm4gci5zbGljZShyLmluZGV4T2YobitlKSl9KGQsbCksdT1bXSxwPTAsaD0wLGY9YT9uOmU7cDxmW3NdLmxlbmd0aDspXCIxXCI9PT1mW3NdW3BdJiZ1LnB1c2goYltoXSkscCsrLGgrKztyZXR1cm4gdX0scj1mdW5jdGlvbihuKXt2YXIgZSxvLGE9XCJiOXN1c1wiLHI9NDtyZXR1cm4gbi5pbmNsdWRlcyhhKT8obz1hLGU9bi5zbGljZSgwLG4uaW5kZXhPZihhKSkpOihlPW5bMF0sbz1uLnNsaWNlKDEpLFwiYlwiIT09blsxXSYmXCIjXCIhPT1uWzFdfHwoZSs9blsxXSxvPW4uc2xpY2UoMikpKSxuLmluY2x1ZGVzKFwiX1wiKSYmKHI9K24uc3BsaXQoXCJfXCIpWzFdLG89by5zbGljZSgwLG8uaW5kZXhPZihcIl9cIikpKSxpKHtjaG9yZDplK3IrXCIgXCIrb30pfSx0PWZ1bmN0aW9uKCl7cmV0dXJuIE9iamVjdC5rZXlzKGUpfSxzPWZ1bmN0aW9uKCl7cmV0dXJuIE9iamVjdC5rZXlzKG4pfSxtPWZ1bmN0aW9uKG4pe3JldHVybiBpKHtjaG9yZDpufSl9LGM9ZnVuY3Rpb24obil7cmV0dXJuIGkoe3NjYWxlOm59KX19KSgpO3ZhciBpPWV4cG9ydHM7Zm9yKHZhciByIGluIGEpaVtyXT1hW3JdO2EuX19lc01vZHVsZSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGksXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWFpbi5qcy5tYXAiLCAiaW1wb3J0IHsgaW5saW5lQ2hvcmQgfSBmcm9tICdoYXJtb25pY3MnO1xuXG5leHBvcnQgY29uc3QgUkVfU0VQQVJBVE9SID0gL1xcfC87XG5leHBvcnQgY29uc3QgUkVfUEFUVEVSTiA9IC9eKD86W3hfLV18XFxbLis/XFxdKSskLztcbmV4cG9ydCBjb25zdCBSRV9OVU1CRVIgPSAvXig/OlxcLj9cXGQrfFxcZCsoPzpcXC5cXGQrKT8pJC87XG5leHBvcnQgY29uc3QgUkVfQ0hPUkQgPSAvXlthLWdBLUddW14jXFxzXSpcXGQrKD86XFwuXFwuKT8kLztcbmV4cG9ydCBjb25zdCBSRV9OT1RFID0gL15bYS1nQS1HXVsjYl0/XFxkKyQvO1xuZXhwb3J0IGNvbnN0IFJFX01PREUgPSAvXig/IVtpdklWXXsxLDN9KVthLXpdezIsfS87XG5leHBvcnQgY29uc3QgUkVfUFJPRyA9IC9eW2l2SVZdezEsM31cdTAwQjA/JC87XG5leHBvcnQgY29uc3QgUkVfVFJJTSA9IC9cXC4rJC87XG5cbmNvbnN0IENBQ0hFID0ge307XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGxpdCh2YWx1ZSkge1xuICBsZXQgZGF0YSA9IFtdO1xuICB0cnkge1xuICAgIGRhdGEgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZS5zcGxpdCgvKD89W1xcZFtcXF14Xy1dKS8pKTtcbiAgICBkYXRhID0gZGF0YS5yZXBsYWNlKC8sXCJcXFtcIiwvZywgJywgWycpO1xuICAgIGRhdGEgPSBkYXRhLnJlcGxhY2UoL1wiXFxbXCIsL2csICdbJyk7XG4gICAgZGF0YSA9IGRhdGEucmVwbGFjZSgvLFwiXFxdXCIvZywgJ10nKTtcbiAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIGlnbm9yZVxuICB9XG4gIHJldHVybiBkYXRhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGV2ZWwodmFsdWUpIHtcbiAgaWYgKCFDQUNIRVt2YWx1ZV0pIHtcbiAgICBpZiAodmFsdWUuaW5jbHVkZXMoJyUnKSkge1xuICAgICAgQ0FDSEVbdmFsdWVdID0gMTI3ICogcGFyc2VGbG9hdChgLiR7dmFsdWV9YCk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZS5pbmNsdWRlcygnLycpKSB7XG4gICAgICBjb25zdCBbYSwgYl0gPSB2YWx1ZS5zcGxpdCgnLycpO1xuXG4gICAgICBDQUNIRVt2YWx1ZV0gPSBhIC8gYjtcbiAgICB9IGVsc2UgaWYgKHZhbHVlLmluY2x1ZGVzKCcqJykpIHtcbiAgICAgIGNvbnN0IFthLCBiXSA9IHZhbHVlLnNwbGl0KCcqJyk7XG5cbiAgICAgIENBQ0hFW3ZhbHVlXSA9IGEgKiBiO1xuICAgIH0gZWxzZSB7XG4gICAgICBDQUNIRVt2YWx1ZV0gPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIENBQ0hFW3ZhbHVlXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlKHJlLCB2YWx1ZSkge1xuICBpZiAoIUNBQ0hFW3JlLnNvdXJjZSArIHZhbHVlXSkge1xuICAgIENBQ0hFW3JlLnNvdXJjZSArIHZhbHVlXSA9IHJlLnRlc3QodmFsdWUpO1xuICB9XG4gIHJldHVybiBDQUNIRVtyZS5zb3VyY2UgKyB2YWx1ZV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb2dyZXNzaW9uKHZhbHVlKSB7XG4gIHJldHVybiB2YWxpZGF0ZShSRV9QUk9HLCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdHRlcm4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbGlkYXRlKFJFX1BBVFRFUk4sIHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XG4gIHJldHVybiB2YWxpZGF0ZShSRV9OVU1CRVIsIHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ2hvcmQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbGlkYXRlKFJFX0NIT1JELCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05vdGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbGlkYXRlKFJFX05PVEUsIHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTW9kZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsaWRhdGUoUkVfTU9ERSwgdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHlwZSh2YWx1ZSkge1xuICBjb25zdCBrZXkgPSBgVCR7dmFsdWV9YDtcbiAgaWYgKCFDQUNIRVtrZXldKSB7XG4gICAgaWYgKGlzTm90ZSh2YWx1ZSkpIENBQ0hFW2tleV0gPSAnbm90ZSc7XG4gICAgZWxzZSBpZiAoaXNDaG9yZCh2YWx1ZSkpIENBQ0hFW2tleV0gPSAnY2hvcmQnO1xuICAgIGVsc2UgaWYgKGlzUGF0dGVybih2YWx1ZSkpIENBQ0hFW2tleV0gPSAncGF0dGVybic7XG4gICAgZWxzZSBpZiAoaXNNb2RlKHZhbHVlKSkgQ0FDSEVba2V5XSA9ICdtb2RlJztcbiAgICBlbHNlIGlmIChpc051bWJlcih2YWx1ZSkpIENBQ0hFW2tleV0gPSAnbnVtYmVyJztcbiAgICBlbHNlIENBQ0hFW2tleV0gPSAndmFsdWUnO1xuICB9XG4gIHJldHVybiBDQUNIRVtrZXldO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtKGV4cHJlc3Npb24pIHtcbiAgaWYgKCFleHByZXNzaW9uIHx8IHR5cGVvZiBleHByZXNzaW9uICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0aW5nIGEgdmFsaWQgc3RyaW5nLCBnaXZlbiAnJHtleHByZXNzaW9ufSdgKTtcbiAgfVxuXG4gIGlmIChDQUNIRVtgJCR7ZXhwcmVzc2lvbn1gXSkgcmV0dXJuIENBQ0hFW2AkJHtleHByZXNzaW9ufWBdO1xuXG4gIGNvbnN0IHRva2VucyA9IGV4cHJlc3Npb24uc3BsaXQoL1xccysvKTtcblxuICBpZiAoIXRva2Vucy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGluZyBhIHZhbGlkIGV4cHJlc3Npb24sIGdpdmVuICcke2V4cHJlc3Npb259J2ApO1xuICB9XG5cbiAgY29uc3QgYXN0ID0gW107XG4gIGNvbnN0IGNhcnJ5ID0gW107XG5cbiAgZnVuY3Rpb24gYWRkKHR5cGUsIHZhbHVlKSB7XG4gICAgY29uc3QgaXRlbSA9IHsgdHlwZSwgdmFsdWUgfTtcblxuICAgIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpdGVtLnZhbHVlID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IGxldmVsKHZhbHVlKSA6IHZhbHVlO1xuICAgIH1cblxuICAgIGlmICh0eXBlID09PSAnY2hvcmQnICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGl0ZW0udmFsdWUgPSBpbmxpbmVDaG9yZCh2YWx1ZS5yZXBsYWNlKFJFX1RSSU0sICcnKSk7XG5cbiAgICAgIGlmICh2YWx1ZS5pbmNsdWRlcygnLi4nKSkge1xuICAgICAgICBpdGVtLnVuZm9sZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09ICd2YWx1ZScgJiYgdmFsdWUuaW5kZXhPZigneCcpID4gLTEpIHtcbiAgICAgIGNvbnN0IHggPSB2YWx1ZS5zcGxpdCgneCcpO1xuXG4gICAgICBpZiAoIShpc051bWJlcih4WzBdKSAmJiBpc051bWJlcih4WzFdKSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RpbmcgdmFsaWQgbnVtYmVycyBmb3IgJHt0eXBlfSwgZ2l2ZW4gJyR7dmFsdWV9J2ApO1xuICAgICAgfVxuXG4gICAgICBpdGVtLnZhbHVlID0gcGFyc2VJbnQoeFswXSwgMTApO1xuICAgICAgaXRlbS5yZXBlYXQgPSBwYXJzZUludCh4WzFdLCAxMCk7XG4gICAgICBpdGVtLnR5cGUgPSAnbnVtYmVyJztcbiAgICB9XG5cbiAgICBhc3QucHVzaChpdGVtKTtcbiAgfVxuXG4gIHRva2Vucy5yZWR1Y2UoKHByZXYsIGN1ciwgaSkgPT4ge1xuICAgIGxldCB0eXBlO1xuXG4gICAgY29uc3QgbmV4dCA9IHRva2Vuc1tpICsgMV07XG4gICAgY29uc3QgbGFzdCA9IGFzdFthc3QubGVuZ3RoIC0gMV0gfHwge307XG5cbiAgICBpZiAoUkVfU0VQQVJBVE9SLnRlc3QoY3VyKSkge1xuICAgICAgYWRkKCdjaG9yZCcsIGN1ci5zcGxpdChSRV9TRVBBUkFUT1IpKTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY3VyID09PSAnc3RyaW5nJyAmJiAoXG4gICAgICAoY3VyLmluY2x1ZGVzKCcvJykgJiYgY3VyLmluZGV4T2YoJy8nKSA+IDApXG4gICAgICB8fCAoY3VyLmluY2x1ZGVzKCcqJykgJiYgY3VyLmluZGV4T2YoJyonKSA+IDApXG4gICAgICB8fCAoY3VyLmluY2x1ZGVzKCclJykgJiYgY3VyLmluZGV4T2YoJyUnKSA+IDApXG4gICAgKSkge1xuICAgICAgYWRkKCdudW1iZXInLCBsZXZlbChjdXIpKTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmIChjdXIuaW5kZXhPZignJScpID4gLTEpIHtcbiAgICAgIGlmIChjdXIgPT09ICclJykge1xuICAgICAgICBpZiAoIWxhc3QudHlwZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyBleHByZXNzaW9uIHRvIHJlcGVhdCwgZ2l2ZW4gJyR7dG9rZW5zLnNsaWNlKDAsIGkpLmpvaW4oJyAnKX0nYCk7XG4gICAgICAgIH1cblxuICAgICAgICBsYXN0LnJlcGVhdCA9IGxhc3QucmVwZWF0IHx8IDE7XG4gICAgICAgIGxhc3QucmVwZWF0ICs9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGQoJ3BhcmFtJywgY3VyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKGlzUHJvZ3Jlc3Npb24oY3VyKSkge1xuICAgICAgbGFzdC52YWx1ZSArPSBgICR7Y3VyfWA7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAoY3VyLmNoYXJBdCgpID09PSAnIycpIHtcbiAgICAgIGFkZCgnY2hhbm5lbCcsIGN1cik7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAoaXNOb3RlKGN1cikgfHwgaXNDaG9yZChjdXIpIHx8IGlzTW9kZShjdXIpIHx8IGlzTnVtYmVyKGN1cikpIHtcbiAgICAgIGNhcnJ5LnB1c2goY3VyKTtcblxuICAgICAgaWYgKFxuICAgICAgICAhbmV4dFxuICAgICAgICB8fCBjYXJyeS5sZW5ndGggPT09IDNcbiAgICAgICAgfHwgIShpc05vdGUobmV4dCkgfHwgaXNNb2RlKG5leHQpIHx8IGlzTnVtYmVyKG5leHQpKVxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IG9sZCA9IGNhcnJ5LnNwbGljZSgwLCBjYXJyeS5sZW5ndGgpO1xuICAgICAgICBjb25zdCB0ZXN0ID0gb2xkWzBdO1xuXG4gICAgICAgIGxldCBtb2RlID0gb2xkWzFdO1xuICAgICAgICBsZXQgb2N0YXZlID0gb2xkWzJdO1xuXG4gICAgICAgIGlmICghb2N0YXZlICYmIGlzTnVtYmVyKG1vZGUpKSB7XG4gICAgICAgICAgb2N0YXZlID0gbW9kZTtcbiAgICAgICAgICBtb2RlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRlc3QubGVuZ3RoIDwgMlxuICAgICAgICAgICYmIGlzTm90ZSh0ZXN0KVxuICAgICAgICAgICYmIChpc01vZGUobW9kZSkgfHwgaXNOdW1iZXIob2N0YXZlKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgYWRkKCdtb2RlJywgb2xkLmpvaW4oJyAnKSk7XG4gICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgIH1cblxuICAgICAgICBvbGQuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICBhZGQoeC5sZW5ndGggPiAxIHx8ICFpc05vdGUoeCkgPyBnZXRUeXBlKHgpIDogJ21vZGUnLCB4KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGN1ciA9PT0gJ3N0cmluZycgJiYgY3VyLmluZGV4T2YoJy4uJykgPiAtMSkge1xuICAgICAgY29uc3QgcGFydHMgPSBjdXIuc3BsaXQoJy4uJyk7XG4gICAgICBjb25zdCBtaW4gPSBwYXJ0c1swXSB8fCAxO1xuICAgICAgY29uc3QgbWF4ID0gcGFydHNbMV0gfHwgSW5maW5pdHk7XG5cbiAgICAgIHR5cGUgPSAnc2xpY2UnO1xuICAgICAgY3VyID0gW21pbiwgbWF4XTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGN1ciA9PT0gJ3N0cmluZycgJiYgKGN1ci5jaGFyQXQoKSA9PT0gJy8nIHx8IGN1ci5jaGFyQXQoKSA9PT0gJyonKSkge1xuICAgICAgY29uc3Qgb3BlcmF0b3IgPSBjdXIuY2hhckF0KCkgPT09ICcvJyA/ICdkaXZpZGUnIDogJ211bHRpcGx5JztcbiAgICAgIGNvbnN0IG51bWJlciA9IGN1ci5zdWJzdHIoMSk7XG5cbiAgICAgIGlmICghaXNOdW1iZXIobnVtYmVyKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGluZyBhIHZhbGlkIGV4cHJlc3Npb24gdG8gJHtvcGVyYXRvcn0sIGdpdmVuICcke3Rva2Vucy5zbGljZSgwLCBpKS5qb2luKCcgJyl9ICR7Y3VyfSdgKTtcbiAgICAgIH1cblxuICAgICAgYWRkKG9wZXJhdG9yLCBwYXJzZUZsb2F0KG51bWJlcikpO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKCF0eXBlICYmIGdldFR5cGUoY3VyKSA9PT0gJ3ZhbHVlJyAmJiBBcnJheS5pc0FycmF5KGxhc3QudmFsdWUpKSB7XG4gICAgICBsYXN0LnZhbHVlWzFdID0gbGFzdC52YWx1ZVsxXSB8fCAnJztcbiAgICAgIGxhc3QudmFsdWVbMV0gKz0gbGFzdC52YWx1ZVsxXSA/ICcgJyA6ICcnO1xuICAgICAgbGFzdC52YWx1ZVsxXSArPSBjdXI7XG4gICAgICByZXR1cm4gY3VyO1xuICAgIH1cblxuICAgIGFkZCh0eXBlIHx8IGdldFR5cGUoY3VyKSwgdHlwZW9mIGN1ciA9PT0gJ3N0cmluZycgJiYgaXNOdW1iZXIoY3VyKSA/IHBhcnNlSW50KGN1ciwgMTApIDogY3VyKTtcbiAgICByZXR1cm4gY3VyO1xuICB9LCBudWxsKTtcblxuICBDQUNIRVtgJCR7ZXhwcmVzc2lvbn1gXSA9IGFzdDtcbiAgcmV0dXJuIGFzdDtcbn1cbiIsICIvKipcbiAqIFRha2UgYSBzdHJpbmcgaW5wdXQgYW5kIGNoZWNrIGlmIGl0IHMgYSBub3RlIG5hbWUgb3Igbm90XG4gKiBAcGFyYW0gIHtTdHJpbmd9IHN0ciBOb3RlIG5hbWUgZS5nLiBjNFxuICogQHJldHVybiB7Qm9vbGVhbn0gUmV0dXJuIHRydWUgZm9yIGM0IG9yIHJldHVybiBmYWxzZSBmb3Igc29tZXRoaW5nIGxpa2UgQ01cbiAqL1xuZXhwb3J0IGNvbnN0IGlzTm90ZSA9IChzdHI6IHN0cmluZyk6IGJvb2xlYW4gPT5cbiAgL15bYS1nQS1HXSg/OiN8Yik/XFxkJC8udGVzdChzdHIpO1xuXG4vKipcbiAqIFRha2UgYSBTdHJpbmcgaW5wdXQgc3VjaCBhcyB4eHhbeHhbeHhdXVxuICogYW5kIHJldHVybiBhbiBBcnJheSBhcyBbJ3gnLCAneCcsICd4JywgWyd4JywgJ3gnLCBbJ3gnLCAneCddXV1cbiAqIEBwYXJhbSAge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuZXhwb3J0IGNvbnN0IGV4cGFuZFN0ciA9IChzdHI6IHN0cmluZyk6IGFueSA9PiB7XG4gIHN0ciA9IEpTT04uc3RyaW5naWZ5KHN0ci5zcGxpdCgnJykpO1xuICBzdHIgPSBzdHIucmVwbGFjZSgvLFwiXFxbXCIsL2csICcsIFsnKTtcbiAgc3RyID0gc3RyLnJlcGxhY2UoL1wiXFxbXCIsL2csICdbJyk7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKC8sXCJcXF1cIi9nLCAnXScpO1xuICByZXR1cm4gSlNPTi5wYXJzZShzdHIpO1xufTtcblxuLyoqXG4gKiBCYXNpYyBBcnJheSByYW5kb21pemVyXG4gKiBAcGFyYW0gIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0gIHtib29sZWFufSBmdWxsU2h1ZmZsZSBFbnN1cmUgbm8gZWxlbWVudHMgcmVtYWluIGluIG9sZCBwbGFjZVxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbmV4cG9ydCBjb25zdCBzaHVmZmxlID0gKGFycjogYW55W10sIGZ1bGxTaHVmZmxlOiBib29sZWFuID0gdHJ1ZSk6IHN0cmluZ1tdID0+IHtcbiAgY29uc3QgbGFzdEluZGV4OiBudW1iZXIgPSBhcnIubGVuZ3RoIC0gMTtcblxuICAvLyBTaHVmZmxlIGFsZ29yaXRobSBieSBSaWNoYXJkIER1cnN0ZW5mZWxkIChEb25hbGQgRS4gS251dGgpLCBhbHNvIFJvbmFsZCBGaXNoZXIgYW5kIEZyYW5rIFlhdGVzLlxuICAvLyBcIkZ1bGwgU2h1ZmZsZVwiIE1vZGlmaWNhdGlvbiB0byBlbnN1cmUgbm8gZWxlbWVudHMgcmVtYWluIGluIHRoZWlyIG9yaWdpbmFsIHBsYWNlIChieSB0YWtpbmcgZWFjaCBlbGVtZW50IG9uY2VcbiAgLy8gYW5kIHN3YXBwaW5nIHdpdGggYW55IHJlbWFpbmluZyBlbGVtZW50cylcbiAgYXJyLmZvckVhY2goKGVsLCBpZHg6IG51bWJlcikgPT4ge1xuICAgIGlmIChpZHggPj0gbGFzdEluZGV4KSB7XG4gICAgICAvLyBObyBzaHVmZmxpbmcgbGFzdCBlbGVtZW50XG4gICAgICAvLyBPbmUgYmVmb3JlIGxhc3QgaXMgYWx3YXlzIHN3YXBwZWQgd2l0aCBsYXN0IGF0IHRoZSBlbmQgb2YgdGhlIGxvb3BcbiAgICAgIC8vIFNpbmNlIHByZXZpb3VzIHN3YXBzIGNhbiBtb3ZlIGxhc3QgZWxlbWVudCBpbnRvIG90aGVyIHBsYWNlcywgdGhlcmUgaXMgc3RpbGwgYSByYW5kb20gc2h1ZmZsZSBvZiBsYXN0IGVsZW1lbnRcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gU3dhcCBlbCB3aXRoIG9uZSBvZiB0aGUgaGlnaGVyIGVsZW1lbnRzIHJhbmRvbWx5XG4gICAgbGV0IHJuZDtcbiAgICBybmQgPSBmdWxsU2h1ZmZsZVxuICAgICAgPyAvLyBQaWNrIHJhbmRvbSBudW1iZXIgZnJvbSBpZHgrMSB0byBsYXN0SW5kZXggKE1vZGlmaWVkIGFsZ29yaXRobSwgKE4tMSkhIGNvbWJpbmF0aW9ucylcbiAgICAgICAgLy8gTWF0aC5yYW5kb20gLT4gWzAsIDEpIC0+IFswLCBsYXN0SW5kZXgtaWR4ICkgLS1mbG9vci0+IFswLCBsYXN0SW5kZXgtaWR4LTFdXG4gICAgICAgIC8vIHJuZCA9IFswLCBsYXN0SW5kZXgtaWR4LTFdICsgMSArIGlkeCA9IFsxICsgaWR4LCBsYXN0SW5kZXhdXG4gICAgICAgIC8vIChPcmlnaW5hbCBhbGdvcml0aG0gd291bGQgcGljayBybmQgPSBbaWR4LCBsYXN0SW5kZXhdLCB0aHVzIGFueSBlbGVtZW50IGNvdWxkIGFycml2ZSBiYWNrIGludG8gaXRzIHNsb3QpXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChsYXN0SW5kZXggLSBpZHgpKSArIDEgKyBpZHhcbiAgICAgIDogLy8gUGljayByYW5kb20gbnVtYmVyIGZyb20gaWR4IHRvIGxhc3RJbmRleCAoVW5tb2RpZmllZCBSaWNoYXJkIER1cnN0ZW5mZWxkLCBOISBjb21iaW5hdGlvbnMpXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChsYXN0SW5kZXggKyAxIC0gaWR4KSkgKyBpZHg7XG4gICAgYXJyW2lkeF0gPSBhcnJbcm5kXTtcbiAgICBhcnJbcm5kXSA9IGVsO1xuICB9KTtcblxuICByZXR1cm4gYXJyO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gYW4gYXJyYXkgb2YgbnVtYmVycyByZWxhdGl2ZSB0byBtYXhMZXZlbCB8fCAxMjcgb3JkZXJlZCBpbiBhIFNpbmUgd2F2ZSBmb3JtYXRcbiAqIFRoaXMgaXMgdXNlZCBieSB0aGUgYHNpenpsZWAgcGFyYW0gb2YgdGhlIGBjbGlwYCBtZXRob2QgdG8gYWRkIGEgcnVkaW1lbnRhcnkgdmFyaWF0aW9uIHRvIHRoZSBhY2NlbnQgb2YgZWFjaCBub3RlXG4gKiBAcGFyYW0ge051bWJlcn0gbWF4TGV2ZWwgQSBudW1iZXIgYmV0d2VlbiBub3QgbW9yZSB0aGFuIDEyN1xuICogQHJldHVybiB7QXJyYXl9ICBFeGFtcGxlIG91dHB1dCBbNjMsIDkwLCAxMTAsIDEyNywgMTEwLCA5MCwgNjMsIDAsIDYzLCA5MCwgMTEwLCAxMjcsIDExMCwgOTAsIDYzLCAwXVxuICovXG5leHBvcnQgY29uc3Qgc2l6emxlTWFwID0gKG1heExldmVsOiBudW1iZXIgPSAxMjcpOiBudW1iZXJbXSA9PiB7XG4gIGNvbnN0IHBpID0gTWF0aC5QSTtcbiAgY29uc3QgcGlBcnI6IG51bWJlcltdID0gW1xuICAgIHBpIC8gNixcbiAgICBwaSAvIDQsXG4gICAgcGkgLyAzLFxuICAgIHBpIC8gMixcbiAgICAoMiAqIHBpKSAvIDMsXG4gICAgKDMgKiBwaSkgLyA0LFxuICAgICg1ICogcGkpIC8gNixcbiAgICBwaSxcbiAgXTtcbiAgY29uc3QgcGlBcnJSZXY6IG51bWJlcltdID0gW1xuICAgIDAsXG4gICAgcGkgLyA2LFxuICAgIHBpIC8gNCxcbiAgICBwaSAvIDMsXG4gICAgcGkgLyAyLFxuICAgICgyICogcGkpIC8gMyxcbiAgICAoMyAqIHBpKSAvIDQsXG4gICAgKDUgKiBwaSkgLyA2LFxuICBdO1xuICBwaUFyclJldi5yZXZlcnNlKCk7XG4gIGNvbnN0IGFycjogbnVtYmVyW10gPSBwaUFyci5jb25jYXQocGlBcnJSZXYpO1xuICByZXR1cm4gYXJyLm1hcChlbGVtZW50ID0+IE1hdGgucm91bmQoTWF0aC5zaW4oZWxlbWVudCkgKiBtYXhMZXZlbCkpO1xufTtcblxuLyoqXG4gKiBQaWNrIG9uZSBpdGVtIHJhbmRvbWx5IGZyb20gYW4gYXJyYXkgYW5kIHJldHVybiBpdFxuICogQHBhcmFtIGFyclxuICovXG5leHBvcnQgY29uc3QgcGlja09uZSA9IChhcnI6IGFueVtdKSA9PlxuICBhcnIubGVuZ3RoID4gMSA/IGFycltNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXSA6IGFyclswXTtcblxuLyoqXG4gKiBCb29sZWFuIGdlbmVyYXRvclxuICovXG5leHBvcnQgY29uc3QgZGljZSA9ICgpID0+ICEhTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcblxuLyoqXG4gKiBQb2x5ZmlsbCBmb3IgQXJyYXkucHJvdG90eXBlLmZsYXRcbiAqL1xuZXhwb3J0IGNvbnN0IGZsYXQgPSAoYXJyOiBhbnlbXVtdKSA9PlxuICBhcnIucmVkdWNlKChhY2MsIHZhbCkgPT4gYWNjLmNvbmNhdCh2YWwpLCBbXSk7XG4iLCAiaW1wb3J0IHsgc2NhbGUgfSBmcm9tICdoYXJtb25pY3MnO1xuaW1wb3J0IHsgcGlja09uZSwgZGljZSB9IGZyb20gJy4vdXRpbHMnO1xuXG4vKipcbiAqIEdldCB0aGUgY2hvcmRzIHRoYXQgZ28gd2l0aCBhIGdpdmVuIHNjYWxlL21vZGVcbiAqIFRoaXMgaXMgdXNlZnVsIG9ubHkgaW4gY2FzZSB5b3Ugd2FudCB0byBjaGVjayB3aGF0IGNob3JkcyB3b3JrIHdpdGggYSBzY2FsZS9tb2RlXG4gKiBzbyB0aGF0IHlvdSBjYW4gY29tZSB1cCB3aXRoIGNob3JkIHByb2dyZXNzaW9uc1xuICogQHBhcmFtICB7U3RyaW5nfSBtb2RlIGUuZy4gbWFqb3JcbiAqIEByZXR1cm4ge0FycmF5fSBlLmcuWydJJywgJ2lpJywgJ2lpaScsICdJVicsICdWJywgJ3ZpJywgJ3ZpaVx1MDBCMCddXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRDaG9yZERlZ3JlZXMgPSAobW9kZTogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHRoZVJvbWFuczogTlZQPHN0cmluZ1tdPiA9IHtcbiAgICBpb25pYW46IFsnSScsICdpaScsICdpaWknLCAnSVYnLCAnVicsICd2aScsICd2aWlcdTAwQjAnXSxcbiAgICBkb3JpYW46IFsnaScsICdpaScsICdJSUknLCAnSVYnLCAndicsICd2aVx1MDBCMCcsICdWSUknXSxcbiAgICBwaHJ5Z2lhbjogWydpJywgJ0lJJywgJ0lJSScsICdpdicsICd2XHUwMEIwJywgJ1ZJJywgJ3ZpaSddLFxuICAgIGx5ZGlhbjogWydJJywgJ0lJJywgJ2lpaScsICdpdlx1MDBCMCcsICdWJywgJ3ZpJywgJ3ZpaSddLFxuICAgIG1peG9seWRpYW46IFsnSScsICdpaScsICdpaWlcdTAwQjAnLCAnSVYnLCAndicsICd2aScsICdWSUknXSxcbiAgICBhZW9saWFuOiBbJ2knLCAnaWlcdTAwQjAnLCAnSUlJJywgJ2l2JywgJ3YnLCAnVkknLCAnVklJJ10sXG4gICAgbG9jcmlhbjogWydpXHUwMEIwJywgJ0lJJywgJ2lpaScsICdpdicsICdWJywgJ1ZJJywgJ3ZpaSddLFxuICAgICdtZWxvZGljIG1pbm9yJzogWydpJywgJ2lpJywgJ0lJSSsnLCAnSVYnLCAnVicsICd2aVx1MDBCMCcsICd2aWlcdTAwQjAnXSxcbiAgICAnaGFybW9uaWMgbWlub3InOiBbJ2knLCAnaWlcdTAwQjAnLCAnSUlJKycsICdpdicsICdWJywgJ1ZJJywgJ3ZpaVx1MDBCMCddLFxuICB9O1xuICB0aGVSb21hbnMubWFqb3IgPSB0aGVSb21hbnMuaW9uaWFuO1xuICB0aGVSb21hbnMubWlub3IgPSB0aGVSb21hbnMuYWVvbGlhbjtcblxuICByZXR1cm4gdGhlUm9tYW5zW21vZGVdIHx8IFtdO1xufTtcblxuY29uc3QgaWR4QnlEZWdyZWU6IE5WUDxudW1iZXI+ID0ge1xuICBpOiAwLFxuICBpaTogMSxcbiAgaWlpOiAyLFxuICBpdjogMyxcbiAgdjogNCxcbiAgdmk6IDUsXG4gIHZpaTogNixcbn07XG5cbi8qKlxuICogR2V0IGEgY2hvcmQgbmFtZSBmcm9tIGRlZ3JlZVxuICogQHBhcmFtICB7U3RyaW5nfSByb21hbiBlLmcuIGlpIE9SIGlpXHUwMEIwIE9SIFY3XG4gKiBAcmV0dXJuIHtTdHJpbmd9IGUuZy4gbSBPUiBtN2I1IE9SIE1hajdcbiAqL1xuY29uc3QgZ2V0Q2hvcmROYW1lID0gKHJvbWFuOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAvLyByZW1vdmUgYW55IG5vbiBjaGFyYWN0ZXJcbiAgY29uc3Qgc3RyID0gcm9tYW4ucmVwbGFjZSgvXFxXL2csICcnKTtcbiAgbGV0IHByZWZpeCA9ICdNJztcbiAgLy8gY2hlY2sgaWYgaXQgcyBsb3dlcmNhc2VcbiAgaWYgKHN0ci50b0xvd2VyQ2FzZSgpID09PSBzdHIpIHtcbiAgICBwcmVmaXggPSAnbSc7XG4gIH1cbiAgaWYgKHJvbWFuLmluZGV4T2YoJ1x1MDBCMCcpID4gLTEpIHtcbiAgICByZXR1cm4gcHJlZml4ICsgJzdiNSc7XG4gIH1cbiAgaWYgKHJvbWFuLmluZGV4T2YoJysnKSA+IC0xKSB7XG4gICAgcmV0dXJuIHByZWZpeCArICcjNSc7XG4gIH1cblxuICBpZiAocm9tYW4uaW5kZXhPZignNycpID4gLTEpIHtcbiAgICByZXR1cm4gcHJlZml4ID09PSAnTScgPyAnbWFqNycgOiAnbTcnO1xuICB9XG5cbiAgcmV0dXJuIHByZWZpeDtcbn07XG5cbi8qKlxuICogVGFrZSB0aGUgc3BlY2lmaWVkIHNjYWxlIGFuZCBkZWdyZWVzIGFuZCByZXR1cm4gdGhlIGNob3JkIG5hbWVzIGZvciB0aGVtXG4gKiBUaGVzZSBjYW4gYmUgdXNlZCBhcyB0aGUgdmFsdWUgZm9yIHRoZSBgbm90ZXNgIHBhcmFtIG9mIHRoZSBgY2xpcGAgbWV0aG9kXG4gKiBAcGFyYW0ge1N0cmluZ30gbm90ZU9jdGF2ZVNjYWxlIGUuZy4gJ0M0IG1ham9yJ1xuICogQHBhcmFtICB7U3RyaW5nfSBjaG9yZERlZ3Jlc3MgZS5nLiAnSSBJViBWIElWJ1xuICogQHJldHVybiB7U3RyaW5nfSBlLmcuICdDTSBGTSBHTSBGTSdcbiAqL1xuZXhwb3J0IGNvbnN0IGdldENob3Jkc0J5UHJvZ3Jlc3Npb24gPSAoXG4gIG5vdGVPY3RhdmVTY2FsZTogc3RyaW5nLFxuICBjaG9yZERlZ3Jlc3M6IHN0cmluZ1xuKTogc3RyaW5nID0+IHtcbiAgLy8gU2V0IHRoZSBvY3RhdmUgaWYgbWlzc2luZ1xuICAvLyBGb3IgZXhhbXBsZSBpZiB0aGUgbWV0aG9kIHdhcyBjYWxsZWQgd2l0aCBgQyBtYWpvcmAgaW5zdGVhZCBvZiBgQzQgbWFqb3JgLCB0aGVuIGFkZCB0aGUgNFxuICBjb25zdCBub3RlT2N0YXZlU2NhbGVBcnIgPSBub3RlT2N0YXZlU2NhbGUuc3BsaXQoJyAnKTtcbiAgaWYgKCFub3RlT2N0YXZlU2NhbGVBcnJbMF0ubWF0Y2goL1xcZC8pKSB7XG4gICAgbm90ZU9jdGF2ZVNjYWxlQXJyWzBdICs9ICc0JztcbiAgICBub3RlT2N0YXZlU2NhbGUgPSBub3RlT2N0YXZlU2NhbGVBcnIuam9pbignICcpO1xuICB9XG5cbiAgLy8gR2V0IHRoZSBzY2FsZSBmcm9tIHRoZSBnaXZlbiBub3RlIGFuZCBzY2FsZS9tb2RlIGNvbWJpbmF0aW9uXG4gIGNvbnN0IG1vZGUgPSBzY2FsZShub3RlT2N0YXZlU2NhbGUpO1xuICBjb25zdCBjaG9yZERlZ3JlZXNBcnIgPSBjaG9yZERlZ3Jlc3MucmVwbGFjZSgvXFxzKiwrXFxzKi9nLCAnICcpLnNwbGl0KCcgJyk7XG4gIC8vIE5vdyB3ZSBoYXZlIHNvbWV0aGluZyBsaWtlIFsnaScsICdpaScsICdJViddXG4gIC8vIENvbnZlcnQgaXQgdG8gYSBjaG9yZCBmYW1pbHkgc3VjaCBhcyBbJ0NtJywgJ0RtJywgJ0ZNJ11cbiAgY29uc3QgY2hvcmRGYW1pbHkgPSBjaG9yZERlZ3JlZXNBcnIubWFwKChyb21hbiwgaWR4KSA9PiB7XG4gICAgY29uc3QgY2hvcmROYW1lID0gZ2V0Q2hvcmROYW1lKHJvbWFuKTsgLy8gZS5nLiBtXG4gICAgLy8gZ2V0IHRoZSBpbmRleCB0byBiZSB1c2VkIGJ5IHJlbW92aW5nIGFueSBkaWdpdCBvciBub24gYWxwaGFiZXQgY2hhcmFjdGVyXG4gICAgY29uc3Qgc2NhbGVJZCA9IGlkeEJ5RGVncmVlW3JvbWFuLnJlcGxhY2UoL1xcV3xcXGQvZywgJycpLnRvTG93ZXJDYXNlKCldOyAvLyBlLmcuIDBcbiAgICAvLyBnZXQgdGhlIG5vdGUgaXRzZWxmXG4gICAgY29uc3Qgbm90ZSA9IG1vZGVbc2NhbGVJZF07IC8vIGUuZy4gQ1xuICAgIC8vIGdldCB0aGUgb2N0YXZlIG9mIHRoZSBub3RlO1xuICAgIGNvbnN0IG9jdCA9IG5vdGUucmVwbGFjZSgvXFxEKy8sICcnKTsgLy8gZS5nLiA0XG4gICAgLy8gbm93IGdldCB0aGUgY2hvcmRcbiAgICByZXR1cm4gbm90ZS5yZXBsYWNlKC9cXGQvLCAnJykgKyBjaG9yZE5hbWUgKyAnXycgKyBvY3Q7XG4gIH0pO1xuXG4gIHJldHVybiBjaG9yZEZhbWlseS50b1N0cmluZygpLnJlcGxhY2UoLywvZywgJyAnKTtcbn07XG5cbmNvbnN0IGdldFByb2dGYWN0b3J5ID0gKHsgVCwgUCwgRCB9OiBUUEQpID0+IHtcbiAgcmV0dXJuIChjb3VudDogbnVtYmVyID0gNCkgPT4ge1xuICAgIGNvbnN0IGNob3JkcyA9IFtdO1xuXG4gICAgLy8gUHVzaCByb290L3RvbmljXG4gICAgY2hvcmRzLnB1c2gocGlja09uZShUKSk7XG5cbiAgICBsZXQgaSA9IDE7XG5cbiAgICAvLyBQaWNrIGEgcHJlZG9taW5hbnRcbiAgICBpZiAoaSA8IGNvdW50IC0gMSkge1xuICAgICAgY2hvcmRzLnB1c2gocGlja09uZShQKSk7XG4gICAgICBpKys7XG4gICAgfVxuXG4gICAgLy8gVHJ5IGFub3RoZXIgcHJlZG9taW5hbnRcbiAgICBpZiAoaSA8IGNvdW50IC0gMSAmJiBkaWNlKCkpIHtcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoUCkpO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIC8vLy8vLy8vLyA0IG9yIG1vcmUvLy8vLy8vLy8vXG4gICAgaWYgKGkgPCBjb3VudCAtIDEpIHtcbiAgICAgIC8vIFBpY2sgYSBkb21pbmFudFxuICAgICAgY2hvcmRzLnB1c2gocGlja09uZShEKSk7XG4gICAgICBpKys7XG4gICAgfVxuXG4gICAgaWYgKGkgPCBjb3VudCAtIDEpIHtcbiAgICAgIC8vIFBpY2sgYSBwcmVkb21pbmFudFxuICAgICAgY2hvcmRzLnB1c2gocGlja09uZShQKSk7XG4gICAgICBpKys7XG4gICAgfVxuXG4gICAgaWYgKGkgPCBjb3VudCAtIDEpIHtcbiAgICAgIC8vIFBpY2sgYSBkb21pbmFudFxuICAgICAgY2hvcmRzLnB1c2gocGlja09uZShEKSk7XG4gICAgICBpKys7XG4gICAgfVxuXG4gICAgLy8gUGljayBhIHByZWRvbWluYW50IGlmIHBvc3NpYmxlXG4gICAgaWYgKGkgPCBjb3VudCAtIDEgJiYgZGljZSgpKSB7XG4gICAgICBjaG9yZHMucHVzaChwaWNrT25lKFApKTtcbiAgICAgIGkrKztcbiAgICB9XG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgLy8gRmlsbCB0aGUgcmVzdCB3aXRoIGRvbWluYW50XG4gICAgd2hpbGUgKGkgPCBjb3VudCkge1xuICAgICAgY2hvcmRzLnB1c2gocGlja09uZShEKSk7XG4gICAgICBpKys7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNob3JkcztcbiAgfTtcbn07XG5cbmNvbnN0IE0gPSBnZXRQcm9nRmFjdG9yeSh7IFQ6IFsnSScsICd2aSddLCBQOiBbJ2lpJywgJ0lWJ10sIEQ6IFsnViddIH0pO1xuY29uc3QgbSA9IGdldFByb2dGYWN0b3J5KHsgVDogWydpJywgJ1ZJJ10sIFA6IFsnaWknLCAnaXYnXSwgRDogWydWJ10gfSk7XG5cbi8qKlxuICogR2VuZXJhdGUgYSBjaG9yZCBwcm9ncmVzc2lvbiBiYXNlZCBvbiBiYXNpYyBtdXNpYyB0aGVvcnlcbiAqIHdoZXJlIHdlIGZvbGxvdyB0b25pYyB0byBvcHRpb25hbGx5IHByZWRvbWluYW50IGFuZCB0aGVuIGRvbWluYW50XG4gKiBhbmQgdGhlbiByYW5kb21seSB0byBwcmVkb21pbmFudCBhbmQgY29udGludWUgdGhpcyB0aWxsIHdlIHJlYWNoIGBjb3VudGBcbiAqIEBwYXJhbSBzY2FsZVR5cGUgZS5nLiBNIChmb3IgbWFqb3IgY2hvcmQgcHJvZ3Jlc3Npb24pLCBtIChmb3IgbWlub3IgY2hvcmQgcHJvZ3Jlc3Npb24pXG4gKiBAcGFyYW0gY291bnQgZS5nLiA0XG4gKi9cbmV4cG9ydCBjb25zdCBwcm9ncmVzc2lvbiA9IChzY2FsZVR5cGU6IHByb2dyZXNzaW9uU2NhbGUsIGNvdW50OiBudW1iZXIgPSA0KSA9PiB7XG4gIGlmIChzY2FsZVR5cGUgPT09ICdtYWpvcicgfHwgc2NhbGVUeXBlID09PSAnTScpIHtcbiAgICByZXR1cm4gTShjb3VudCk7XG4gIH1cblxuICBpZiAoc2NhbGVUeXBlID09PSAnbWlub3InIHx8IHNjYWxlVHlwZSA9PT0gJ20nKSB7XG4gICAgcmV0dXJuIG0oY291bnQpO1xuICB9XG59O1xuIiwgImltcG9ydCB7IGdldENob3Jkc0J5UHJvZ3Jlc3Npb24gfSBmcm9tICdzY3JpYmJsZXR1bmUvc3JjL3Byb2dyZXNzaW9uJztcbmltcG9ydCB7IHNjYWxlLCBpbmxpbmVDaG9yZCB9IGZyb20gJ2hhcm1vbmljcyc7XG5cbmltcG9ydCB7IGlzUHJvZ3Jlc3Npb24sIHRyYW5zZm9ybSB9IGZyb20gJy4vdG9rZW5pemUnO1xuaW1wb3J0IHsgcmVwZWF0LCBjbG9uZSB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlKGlucHV0LCBjb250ZXh0LCBjYWxsYmFjaykge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoaW5wdXQpKSByZXR1cm4gaW5wdXQ7XG5cbiAgY29uc3QgZm4gPSB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgPyBjYWxsYmFjayA6ICh2ID0+IHYpO1xuXG4gIGxldCBza2lwO1xuICByZXR1cm4gaW5wdXQucmVkdWNlKChwcmV2LCBjdXIsIGkpID0+IHtcbiAgICBjb25zdCBsYXN0ID0gcHJldltwcmV2Lmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IG5leHQgPSBpbnB1dFtpICsgMV0gfHwge307XG4gICAgY29uc3Qgb2xkID0gaW5wdXRbaSAtIDFdIHx8IHt9O1xuXG4gICAgaWYgKHNraXApIHtcbiAgICAgIHNraXAgPSBmYWxzZTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KGN1cikpIHtcbiAgICAgIHByZXYucHVzaCguLi5jdXIpO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKGN1ci50eXBlID09PSAndmFsdWUnICYmIGN1ci52YWx1ZSA9PT0gJy4nKSB7XG4gICAgICBpZiAocHJldi5sZW5ndGggPiAwKSBwcmV2LnB1c2gocHJldlswXSk7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAob2xkLnR5cGUgPT09ICdwYXR0ZXJuJyAmJiBjdXIudHlwZSA9PT0gJ3BhdHRlcm4nKSB7XG4gICAgICBwcmV2W3ByZXYubGVuZ3RoIC0gMV0gKz0gY3VyLnZhbHVlO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgc3dpdGNoIChjdXIudHlwZSkge1xuICAgICAgY2FzZSAncGF0dGVybic6XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnbm90ZSc6XG4gICAgICAgIGlmIChjdXIucmVwZWF0KSBwcmV2LnB1c2goLi4ucmVwZWF0KGN1ci52YWx1ZSwgY3VyLnJlcGVhdCkpO1xuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGN1ci52YWx1ZSkpIHByZXYucHVzaCguLi5jdXIudmFsdWUpO1xuICAgICAgICBlbHNlIHByZXYucHVzaChjdXIudmFsdWUpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnY2hvcmQnOlxuICAgICAgICBpZiAoY3VyLnJlcGVhdCkgcHJldi5wdXNoKC4uLnJlcGVhdChjdXIudmFsdWUsIGN1ci5yZXBlYXQpKTtcbiAgICAgICAgZWxzZSBpZiAoY3VyLnVuZm9sZCkgcHJldi5wdXNoKC4uLmN1ci52YWx1ZSk7XG4gICAgICAgIGVsc2UgcHJldi5wdXNoKGN1ci52YWx1ZSk7XG5cbiAgICAgICAgaWYgKGN1ci50eXBlICE9PSAnY2hvcmQnKSB7XG4gICAgICAgICAgc2tpcCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2RpdmlkZSc6XG4gICAgICAgIHByZXZbcHJldi5sZW5ndGggLSAxXSAvPSBjdXIudmFsdWU7XG4gICAgICAgIHJldHVybiBwcmV2O1xuXG4gICAgICBjYXNlICdtdWx0aXBseSc6XG4gICAgICAgIHByZXYucHVzaCguLi5yZXBlYXQobGFzdCwgY3VyLnZhbHVlIC0gMSkpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnc2xpY2UnOlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShsYXN0KSkge1xuICAgICAgICAgIHByZXZbcHJldi5sZW5ndGggLSAxXSA9IGxhc3Quc2xpY2UoY3VyLnZhbHVlWzBdIC0gMSwgY3VyLnZhbHVlWzFdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmV2LnB1c2goY3VyLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnbW9kZSc6XG4gICAgICAgIHByZXZbcHJldi5sZW5ndGggLSAxXSA9IGAke2xhc3R9ICR7Y3VyLnZhbHVlfWA7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdwYXJhbSc6XG4gICAgICBjYXNlICd2YWx1ZSc6IHtcbiAgICAgICAgbGV0IHZhbHVlID0gbnVsbDtcbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZXh0W2N1ci52YWx1ZV0gIT09ICd1bmRlZmluZWQnKSB2YWx1ZSA9IGNvbnRleHRbY3VyLnZhbHVlXTtcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIGV4cHJlc3Npb24gZm9yICcke2N1ci52YWx1ZX0nYCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWVbMF0gJiYgdmFsdWVbMF0udHlwZSkge1xuICAgICAgICAgIHZhbHVlID0gcmVkdWNlKHZhbHVlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjdXIucmVwZWF0KSB7XG4gICAgICAgICAgICBwcmV2LnB1c2goLi4ucmVwZWF0KHZhbHVlLCBjdXIucmVwZWF0KS5yZWR1Y2UoKF9wcmV2LCBfY3VyKSA9PiB7XG4gICAgICAgICAgICAgIF9wcmV2LnB1c2goLi4uX2N1cik7XG4gICAgICAgICAgICAgIHJldHVybiBfcHJldjtcbiAgICAgICAgICAgIH0sIFtdKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByZXYucHVzaCguLi52YWx1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgIH1cblxuICAgICAgICB2YWx1ZSA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdO1xuICAgICAgICBpZiAoY3VyLnJlcGVhdCkgcHJldi5wdXNoKC4uLnJlcGVhdCh2YWx1ZSwgY3VyLnJlcGVhdCkpO1xuICAgICAgICBlbHNlIHByZXYucHVzaCguLi52YWx1ZSk7XG4gICAgICB9IGJyZWFrO1xuICAgICAgZGVmYXVsdDoge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuaGFuZGxlZCAnJHtjdXIudHlwZX0nYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZXY7XG4gIH0sIFtdKS5yZWR1Y2UoKG1lbW8sIGl0ZW0pID0+IHtcbiAgICBjb25zdCBwcmV2ID0gbWVtb1ttZW1vLmxlbmd0aCAtIDFdO1xuXG4gICAgaWYgKFxuICAgICAgQXJyYXkuaXNBcnJheShwcmV2KVxuICAgICAgJiYgQXJyYXkuaXNBcnJheShpdGVtKVxuICAgICAgJiYgdHlwZW9mIGl0ZW1bMF0gPT09ICdudW1iZXInXG4gICAgICAmJiBpdGVtLmxlbmd0aCA9PT0gMlxuICAgICkge1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gaXRlbVsxXSA9PT0gSW5maW5pdHkgPyBwcmV2Lmxlbmd0aCA6IGl0ZW1bMV07XG4gICAgICBjb25zdCBbYmFzZSwgbGVuZ3RoXSA9IFN0cmluZyhvZmZzZXQpLnNwbGl0KC9cXEQvKTtcblxuICAgICAgbWVtby5wb3AoKTtcbiAgICAgIG1lbW8ucHVzaCguLi5wcmV2LnNsaWNlKGl0ZW1bMF0gLSAxLCBiYXNlKSk7XG5cbiAgICAgIGlmIChTdHJpbmcob2Zmc2V0KS5pbmNsdWRlcygnPicpKSB7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gbWVtby5zbGljZSgtbGVuZ3RoIC0gMSk7XG5cbiAgICAgICAgcGFydHMucG9wKCk7XG4gICAgICAgIHBhcnRzLnJldmVyc2UoKTtcbiAgICAgICAgbWVtby5wdXNoKC4uLnBhcnRzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtZW1vO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycgJiYgaXRlbS5pbmNsdWRlcygnICcpKSB7XG4gICAgICBjb25zdCBjaHVua3MgPSBpdGVtLnNwbGl0KCcgJyk7XG5cbiAgICAgIGlmIChjaHVua3Muc29tZShpc1Byb2dyZXNzaW9uKSkge1xuICAgICAgICBjb25zdCBvZmZzZXQgPSBjaHVua3MuZmluZEluZGV4KGlzUHJvZ3Jlc3Npb24pO1xuICAgICAgICBjb25zdCBbYSwgYl0gPSBbY2h1bmtzLnNsaWNlKDAsIG9mZnNldCksIGNodW5rcy5zbGljZShvZmZzZXQpXTtcblxuICAgICAgICBtZW1vLnB1c2goZ2V0Q2hvcmRzQnlQcm9ncmVzc2lvbihhLmpvaW4oJyAnKSwgYi5qb2luKCcgJykpLnNwbGl0KCcgJykubWFwKHggPT4gZm4oaW5saW5lQ2hvcmQoeCkpKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZW1vLnB1c2goZm4oc2NhbGUoaXRlbSkpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbWVtby5wdXNoKGZuKGl0ZW0pKTtcbiAgICB9XG4gICAgcmV0dXJuIG1lbW87XG4gIH0sIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlKGJ1ZmZlcikge1xuICBjb25zdCB0cmFja3MgPSB7fTtcbiAgY29uc3QgbWFpbiA9IFtdO1xuICBjb25zdCBkYXRhID0ge307XG5cbiAgbGV0IGNoYW5uZWwgPSBudWxsO1xuICBsZXQgcHJlZml4ID0gJyc7XG4gIGxldCB0cmFjaztcbiAgbGV0IGluZm8gPSB7fTtcbiAgYnVmZmVyLnNwbGl0KC9cXHI/XFxuL2cpLmZvckVhY2goKGxpbmUsIG50aCkgPT4ge1xuICAgIGxpbmUgPSBsaW5lLnJlcGxhY2UoLzsuKz8kLywgJycpLnRyaW0oKTtcbiAgICBpZiAoIWxpbmUpIHJldHVybjtcblxuICAgIHRyeSB7XG4gICAgICBpZiAobGluZS5jaGFyQXQoKSA9PT0gJyUnKSB7XG4gICAgICAgIGNvbnN0IFtuYW1lLCAuLi52YWx1ZV0gPSBsaW5lLnNwbGl0KC9cXHMrLyk7XG5cbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBkYXRhW25hbWVdID0gdHJhbnNmb3JtKHZhbHVlLmpvaW4oJyAnKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobGluZS5pbmRleE9mKCcjICcpID49IDApIHtcbiAgICAgICAgaWYgKHRyYWNrKSB7XG4gICAgICAgICAgdHJhY2tzW3RyYWNrXSA9IGluZm87XG4gICAgICAgICAgY2hhbm5lbCA9IG51bGw7XG4gICAgICAgICAgcHJlZml4ID0gJyc7XG4gICAgICAgICAgaW5mbyA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgdHJhY2sgPSBsaW5lLnNwbGl0KC9cXHMrLykuc2xpY2UoMSkuam9pbignICcpO1xuICAgICAgfSBlbHNlIGlmIChsaW5lLmNoYXJBdCgpID09PSAnPicpIHtcbiAgICAgICAgbWFpbi5wdXNoKHRyYW5zZm9ybShsaW5lLnN1YnN0cigxKS50cmltKCkpKTtcbiAgICAgIH0gZWxzZSBpZiAobGluZS5jaGFyQXQoKSA9PT0gJ0AnKSB7XG4gICAgICAgIGNvbnN0IFtuYW1lLCAuLi5leHRlbmRdID0gbGluZS5zdWJzdHIoMSkuc3BsaXQoJyAnKTtcblxuICAgICAgICBpZiAoZXh0ZW5kWzBdID09PSAnPCcpIHtcbiAgICAgICAgICBjb25zdCBrZXkgPSBgJHtleHRlbmRbMV19I2A7XG5cbiAgICAgICAgICBPYmplY3Qua2V5cyhpbmZvKVxuICAgICAgICAgICAgLmZpbHRlcih4ID0+IHguaW5kZXhPZihrZXkpID09PSAwKVxuICAgICAgICAgICAgLmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICAgIGluZm9bYCR7bmFtZX0jJHtrLnNwbGl0KCcjJylbMV19YF0gPSBjbG9uZShpbmZvW2tdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHByZWZpeCA9IG5hbWU7XG4gICAgICB9IGVsc2UgaWYgKGxpbmUuaW5kZXhPZignOicpID4gMCkge1xuICAgICAgICBjb25zdCBbbmFtZSwgLi4udmFsdWVdID0gbGluZS5zcGxpdCgnOicpO1xuXG4gICAgICAgIGRhdGFbbmFtZV0gPSB0cmFuc2Zvcm0odmFsdWUuam9pbignOicpLnRyaW0oKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0aWNrcyA9IHRyYW5zZm9ybShsaW5lKTtcblxuICAgICAgICBpZiAoIXRpY2tzWzBdIHx8IHRpY2tzWzBdLnR5cGUgIT09ICdjaGFubmVsJykge1xuICAgICAgICAgIGlmICghY2hhbm5lbCkgdGhyb3cgbmV3IFR5cGVFcnJvcihgTWlzc2luZyBjaGFubmVsLCBnaXZlbiAnJHtsaW5lfSdgKTtcblxuICAgICAgICAgIGNvbnN0IGVuZCA9IGluZm9bY2hhbm5lbF1baW5mb1tjaGFubmVsXS5sZW5ndGggLSAxXTtcblxuICAgICAgICAgIGlmICghZW5kLnZhbHVlcykgZW5kLnZhbHVlcyA9IFt7IHR5cGU6ICdudW1iZXInLCB2YWx1ZTogMTI3IH1dO1xuICAgICAgICAgIGVuZC52YWx1ZXMucHVzaCguLi50aWNrcyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgbm90ZXMgPSB0aWNrcy5maW5kSW5kZXgoeCA9PiBbJ25vdGUnLCAnY2hvcmQnLCAncGFyYW0nXS5pbmNsdWRlcyh4LnR5cGUpKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aWNrcy5maW5kSW5kZXgoeCA9PiB4LnR5cGUgPT09ICdwYXR0ZXJuJyk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gaW5kZXggPiAwID8gdGlja3Muc2xpY2UoaW5kZXgpIDogdGlja3M7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHZhbHVlLmZpbmRJbmRleCh4ID0+IHgudHlwZSAhPT0gJ3BhdHRlcm4nKTtcbiAgICAgICAgY29uc3QgaW5wdXRzID0gdGlja3Muc2xpY2UoMCwgaW5kZXggPiAwID8gaW5kZXggOiAxKTtcblxuICAgICAgICBjaGFubmVsID0gcHJlZml4ICsgaW5wdXRzWzBdLnZhbHVlO1xuICAgICAgICBpZiAoIWluZm9bY2hhbm5lbF0pIHtcbiAgICAgICAgICBpbmZvW2NoYW5uZWxdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc3BlYztcbiAgICAgICAgaWYgKG5vdGVzID4gMCAmJiBpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zdCBlbmQgPSBpbmZvW2NoYW5uZWxdW2luZm9bY2hhbm5lbF0ubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICBlbmQuZGF0YSA9IHZhbHVlLnNsaWNlKG5vdGVzKTtcbiAgICAgICAgICBzcGVjID0ge1xuICAgICAgICAgICAgaW5wdXQ6IGVuZC5pbnB1dCxcbiAgICAgICAgICAgIHZhbHVlczogdmFsdWUuc2xpY2UoMSwgbm90ZXMpLFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAob2Zmc2V0ID4gMCkge1xuICAgICAgICAgIHNwZWMgPSB7XG4gICAgICAgICAgICBkYXRhOiB2YWx1ZS5zbGljZShvZmZzZXQpLFxuICAgICAgICAgICAgaW5wdXQ6IHZhbHVlLnNsaWNlKDAsIG9mZnNldCksXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChvZmZzZXQgPT09IDApIHtcbiAgICAgICAgICBzcGVjID0geyB2YWx1ZXM6IHZhbHVlLnNsaWNlKDEpIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3BlYyA9IHsgaW5wdXQ6IHZhbHVlIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5wdXRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBzcGVjLnZhbHVlcyA9IGlucHV0cy5zbGljZSgxKTtcbiAgICAgICAgfVxuICAgICAgICBpbmZvW2NoYW5uZWxdLnB1c2goc3BlYyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc3QgbXNnID0gdHlwZW9mIGUgPT09ICdzdHJpbmcnID8gZSA6IGUubWVzc2FnZTtcblxuICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGAke21zZ31cXG4gIGF0IGxpbmUgJHtudGggKyAxfVxcbiR7bGluZX1gKTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmICh0cmFjaykge1xuICAgIHRyYWNrc1t0cmFja10gPSBpbmZvO1xuICB9XG4gIHJldHVybiB7IG1haW4sIGRhdGEsIHRyYWNrcyB9O1xufVxuIiwgImltcG9ydCB7IFV0aWxzIH0gZnJvbSAnbWlkaS13cml0ZXItanMnO1xuaW1wb3J0IHsgRmlsZSwgVHJhY2sgfSBmcm9tICdqc21pZGdlbic7XG5pbXBvcnQgeyB6aXAsIGZsYXR0ZW4gfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IHNwbGl0LCBpc1BhdHRlcm4gfSBmcm9tICcuL3Rva2VuaXplJztcbmltcG9ydCB7IHJlZHVjZSB9IGZyb20gJy4vcGFyc2VyJztcblxuY29uc3QgREVGQVVMVCA9IFN5bWJvbCgnQG1haW4nKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkKG1pZGksIGJwbSA9IDEyMCwgbGVuZ3RoID0gMTYpIHtcbiAgY29uc3QgZmlsZSA9IG5ldyBGaWxlKCk7XG4gIGNvbnN0IHEgPSAxNjtcbiAgY29uc3QgbyA9IHt9O1xuXG4gIGJwbSAqPSBsZW5ndGggLyBxO1xuXG4gIGxldCBjaCA9IDA7XG4gIGZ1bmN0aW9uIGdldChudGgsIG5hbWUpIHtcbiAgICBjb25zdCBrZXkgPSBudGggKyBuYW1lO1xuXG4gICAgaWYgKCFnZXRba2V5XSkge1xuICAgICAgY29uc3QgdHJhY2sgPSBuZXcgVHJhY2soKTtcbiAgICAgIGNvbnN0IGNoYW4gPSBudGggPT09ICcwJyA/IDkgOiBjaDtcblxuICAgICAgZmlsZS5hZGRUcmFjayh0cmFjayk7XG4gICAgICBnZXRba2V5XSA9IHsgY2hhbiwgdHJhY2sgfTtcbiAgICAgIGlmIChudGggIT09ICcwJykgY2ggKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFtrZXldO1xuICB9XG5cbiAgbWlkaS5mb3JFYWNoKHNlY3Rpb24gPT4ge1xuICAgIHNlY3Rpb24uZm9yRWFjaChwYXJ0cyA9PiB7XG4gICAgICBwYXJ0cy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICBjb25zdCB7IGNoYW4sIHRyYWNrIH0gPSBnZXQoZVswXSwgZVsxXSk7XG5cbiAgICAgICAgdHJhY2suc2V0VGVtcG8oYnBtKTtcbiAgICAgICAgaWYgKGNoYW4gIT09IDkpIHtcbiAgICAgICAgICB0cmFjay5pbnN0cnVtZW50KGNoYW4sIGVbMF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlWzJdLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgY29uc3QgdGljayA9IGVbMl1baV07XG5cbiAgICAgICAgICBpZiAodGljay52ID4gMCkge1xuICAgICAgICAgICAgY29uc3Qgbm90ZSA9IHRpY2subiB8fCAnQzMnO1xuXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShub3RlKSkge1xuICAgICAgICAgICAgICB0cmFjay5ub3RlT2ZmKGNoYW4sICcnLCBxKTtcbiAgICAgICAgICAgICAgdHJhY2suYWRkQ2hvcmQoY2hhbiwgbm90ZSwgcSwgdGljay52KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRyYWNrLm5vdGVPbihjaGFuLCBub3RlLCBxLCB0aWNrLnYpO1xuICAgICAgICAgICAgICB0cmFjay5ub3RlT2ZmKGNoYW4sIG5vdGUsIHEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cmFjay5ub3RlT2ZmKGNoYW4sICcnLCBxICogMik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBmaWxlLnRvQnl0ZXMoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhY2sodmFsdWVzLCBub3Rlcykge1xuICBsZXQgb2Zmc2V0O1xuICBmdW5jdGlvbiByZXNvbHZlKHgpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh4KSkge1xuICAgICAgcmV0dXJuIHgubWFwKHJlc29sdmUpO1xuICAgIH1cblxuICAgIGxldCB0b2tlbjtcbiAgICBpZiAoIScteF8nLmluY2x1ZGVzKHgpKSB7XG4gICAgICB0b2tlbiA9IHsgdjogMTI3LCBsOiB4IH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRva2VuID0geyB2OiB4ID09PSAnLScgPyAwIDogMTI3IH07XG4gICAgfVxuXG4gICAgaWYgKHggIT09ICctJykge1xuICAgICAgdG9rZW4udiA9IHR5cGVvZiB2YWx1ZXNbb2Zmc2V0XSAhPT0gJ3VuZGVmaW5lZCcgPyB2YWx1ZXNbb2Zmc2V0XSA6IHRva2VuLnYgfHwgMDtcbiAgICAgIGlmICh0eXBlb2Ygbm90ZXNbb2Zmc2V0XSAhPT0gJ3VuZGVmaW5lZCcpIHRva2VuLm4gPSBub3Rlc1tvZmZzZXRdO1xuICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPT09IDEpIHRva2VuLnYgPSB2YWx1ZXNbMF07XG4gICAgICBpZiAodG9rZW4udiB8fCB0b2tlbi5uKSBvZmZzZXQgKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gdmFsdWU7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmIChpc1BhdHRlcm4odmFsdWUpKSB7XG4gICAgICAgIG9mZnNldCA9IDA7XG4gICAgICAgIHJlc3VsdCA9IHNwbGl0KHZhbHVlKS5tYXAocmVzb2x2ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZShjdHgpIHtcbiAgY29uc3Qgc2NlbmVzID0ge307XG5cbiAgT2JqZWN0LmVudHJpZXMoY3R4LnRyYWNrcykuZm9yRWFjaCgoW25hbWUsIGNoYW5uZWxzXSkgPT4ge1xuICAgIE9iamVjdC5lbnRyaWVzKGNoYW5uZWxzKS5mb3JFYWNoKChbY2gsIGNsaXBzXSkgPT4ge1xuICAgICAgY29uc3QgW3RhZywgbWlkaV0gPSBjaC5zcGxpdCgnIycpO1xuICAgICAgY29uc3Qga2V5ID0gdGFnIHx8IERFRkFVTFQ7XG5cbiAgICAgIGxldCB0aWNrcztcbiAgICAgIGxldCBpbmMgPSAwO1xuICAgICAgY2xpcHMuZm9yRWFjaChjbGlwID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gY2xpcC52YWx1ZXMgPyByZWR1Y2UoY2xpcC52YWx1ZXMsIGN0eC5kYXRhKSA6IFtdO1xuICAgICAgICBjb25zdCBub3RlcyA9IGNsaXAuZGF0YSA/IHJlZHVjZShjbGlwLmRhdGEsIGN0eC5kYXRhKSA6IFtdO1xuXG4gICAgICAgIGlmIChjbGlwLmlucHV0KSB7XG4gICAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPiAxKSB2YWx1ZXMuc2hpZnQoKTtcblxuICAgICAgICAgIGNvbnN0IGlucHV0ID0gZmxhdHRlbihyZWR1Y2UoY2xpcC5pbnB1dCwgY3R4LmRhdGEsIHBhY2sodmFsdWVzLCBub3RlcykpKTtcblxuICAgICAgICAgIGlmICghdGlja3MpIHtcbiAgICAgICAgICAgIHRpY2tzID0gaW5wdXQ7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgemlwKHRpY2tzLCBpbnB1dCwgKGEsIGIpID0+IHtcbiAgICAgICAgICAgIGlmIChiLnYgPiAwKSBhLnYgPSBiLnY7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGlja3MpIHtcbiAgICAgICAgICBjb25zdCBtb2RlID0gY2xpcC52YWx1ZXNcbiAgICAgICAgICAgICYmIGNsaXAudmFsdWVzWzBdXG4gICAgICAgICAgICAmJiBjbGlwLnZhbHVlc1swXS50eXBlID09PSAnbW9kZScgPyBjbGlwLnZhbHVlc1swXS52YWx1ZSA6IG51bGw7XG5cbiAgICAgICAgICB0aWNrcy5mb3JFYWNoKHRpY2sgPT4ge1xuICAgICAgICAgICAgaWYgKHRpY2sudiA+IDApIHtcbiAgICAgICAgICAgICAgaWYgKCF0aWNrLm4gJiYgbm90ZXMubGVuZ3RoID4gMCkgdGljay5uID0gbm90ZXMuc2hpZnQoKTtcbiAgICAgICAgICAgICAgaWYgKG1vZGUgJiYgdmFsdWVzLmxlbmd0aCA+IDApIHRpY2tbbW9kZVswXS50b0xvd2VyQ2FzZSgpXSA9IHZhbHVlcy5zaGlmdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKCFzY2VuZXNba2V5XSkgc2NlbmVzW2tleV0gPSB7IHRyYWNrczogW10gfTtcbiAgICAgIHNjZW5lc1trZXldLnRyYWNrcy5wdXNoKFttaWRpLCBuYW1lLCB0aWNrc10pO1xuICAgIH0pO1xuICB9KTtcblxuICBpZiAoIWN0eC5tYWluLmxlbmd0aCkge1xuICAgIGN0eC5tYWluID0gW1t7IHR5cGU6ICd2YWx1ZScsIHZhbHVlOiBERUZBVUxUIH1dXTtcbiAgfVxuXG4gIHJldHVybiBjdHgubWFpbi5tYXAodHJhY2sgPT4ge1xuICAgIHJldHVybiByZWR1Y2UodHJhY2ssIHNjZW5lcykubWFwKGl0ZW0gPT4ge1xuICAgICAgcmV0dXJuIFtdLmNvbmNhdChpdGVtKS5yZWR1Y2UoKG1lbW8sIHgpID0+IHtcbiAgICAgICAgbWVtby5wdXNoKC4uLngudHJhY2tzKTtcbiAgICAgICAgcmV0dXJuIG1lbW87XG4gICAgICB9LCBbXSk7XG4gICAgfSk7XG4gIH0pO1xufVxuIiwgImV4cG9ydCB7IG1lcmdlIH0gZnJvbSAnLi9taXh1cCc7XG5leHBvcnQgeyBwYXJzZSB9IGZyb20gJy4vcGFyc2VyJztcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMnO1xuZXhwb3J0ICogZnJvbSAnLi9taXh1cCc7XG5leHBvcnQgKiBmcm9tICcuL3BhcnNlcic7XG5leHBvcnQgKiBmcm9tICcuL3Rva2VuaXplJztcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLEtBQUMsTUFBSTtBQUFDO0FBQWEsVUFBSSxJQUFFLEVBQUMsS0FBSSxDQUFBQSxPQUFHO0FBQUMsUUFBQUEsR0FBRSxVQUFRLEtBQUssTUFBTSw2MkVBQTYyRTtBQUFBLE1BQUMsR0FBRSxLQUFJLENBQUFBLE9BQUc7QUFBQyxRQUFBQSxHQUFFLFVBQVEsS0FBSyxNQUFNLDg0RkFBbTVG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TUFBRSxnQkFBZ0I7QUFBQSxFQUNwQjtBQUNBLE1BQUksV0FBVztBQUNiLGNBQVUsMEJBQTBCO0FBQUEsRUFDdEM7QUFDQSxtQkFBaUI7QUFDakIsaUJBQWU7QUFDakI7QUFFQSxTQUFTLGFBQWE7QUFDcEIsTUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFHO0FBRXRCLFFBQU0sT0FBTyxRQUFRLFVBQVUsU0FBUyxDQUFDO0FBQ3pDLFFBQU0sVUFBVSxFQUFFLGVBQWUsTUFBTSxPQUFPLE1BQU0sU0FBUztBQUM3RCxZQUFVLElBQUk7QUFDZCxNQUFJLFdBQVcsU0FBUztBQUN0QixNQUFFLGdCQUFnQixFQUFFLFNBQVM7QUFBQSxFQUMvQjtBQUNGO0FBRUEsU0FBUyxnQkFBZ0I7QUFDdkIsUUFBTSxPQUFPLFNBQVMsaUJBQWlCLFdBQVc7QUFDbEQsUUFBTSxjQUFjLEVBQUUsY0FBYyxFQUFFLFlBQVk7QUFDbEQsT0FBSyxRQUFRLENBQUMsS0FBSyxNQUFNLElBQUksVUFBVSxPQUFPLFVBQVUsTUFBTSxXQUFXLENBQUM7QUFDMUUsd0JBQXNCLGFBQWE7QUFDckM7QUFFQSxlQUFlLFlBQVk7QUFDekIsUUFBTSxTQUFTLElBQUksZ0JBQWdCLE9BQU8sU0FBUyxNQUFNO0FBQ3pELFFBQU0sZ0JBQWdCLE9BQU8sSUFBSSxNQUFNO0FBQ3ZDLFFBQU0sZUFBZSxNQUFNLG9CQUFvQjtBQUMvQyxRQUFNLFNBQVMsVUFBVSxjQUFjLGFBQWE7QUFDcEQsc0JBQW9CO0FBQ3BCLFFBQU0sT0FBTyxRQUFRLE9BQU8sU0FBUyxDQUFDO0FBQ3RDLElBQUUsZUFBZSxNQUFNLE9BQU8sTUFBTSxTQUFTO0FBQzdDLFlBQVUsSUFBSTtBQUNkLGlCQUFlO0FBQ2Ysd0JBQXNCLGFBQWE7QUFDckM7QUFFQSxVQUFVO0FBRVYsSUFBTyxjQUFRLENBQUM7IiwKICAibmFtZXMiOiBbIm4iLCAiYSIsICJpIiwgInIiLCAiZSIsICJtIiwgIm8iLCAidCIsICJzIiwgImMiLCAicCIsICJtaWRpIiwgIm0iLCAicCIsICJub3RlIiwgIm0iLCAib2JqIiwgInAiLCAiX3NldFByb3RvdHlwZU9mIiwgIm8iLCAiVXRpbHMiLCAiTm90ZU9uRXZlbnQiLCAiTm90ZU9mZkV2ZW50IiwgIk5vdGVFdmVudCIsICJzY2FsZTE0Yml0cyIsICJQaXRjaEJlbmRFdmVudCIsICJQcm9ncmFtQ2hhbmdlRXZlbnQiLCAiQ29udHJvbGxlckNoYW5nZUV2ZW50IiwgIkNvcHlyaWdodEV2ZW50IiwgIkN1ZVBvaW50RXZlbnQiLCAiRW5kVHJhY2tFdmVudCIsICJJbnN0cnVtZW50TmFtZUV2ZW50IiwgIktleVNpZ25hdHVyZUV2ZW50IiwgIm5vdGUiLCAiTHlyaWNFdmVudCIsICJNYXJrZXJFdmVudCIsICJUZW1wb0V2ZW50IiwgInRlbXBvIiwgIlRleHRFdmVudCIsICJUaW1lU2lnbmF0dXJlRXZlbnQiLCAiVHJhY2tOYW1lRXZlbnQiLCAiVHJhY2siLCAiVmV4RmxvdyIsICJIZWFkZXJDaHVuayIsICJXcml0ZXIiLCAiYnVpbGQiLCAiUGxheWVyIiwgInRlbXBvIiwgInRyYW5zcG9zZSIsICJub3RlIiwgInBpY2tPbmUiLCAiZGljZSIsICJpbml0X3V0aWxzIiwgInByb2dyZXNzaW9uX2V4cG9ydHMiLCAiZ2V0Q2hvcmREZWdyZWVzIiwgImdldENob3Jkc0J5UHJvZ3Jlc3Npb24iLCAicHJvZ3Jlc3Npb24iLCAiaW1wb3J0X2hhcm1vbmljcyIsICJpZHhCeURlZ3JlZSIsICJnZXRDaG9yZE5hbWUiLCAiZ2V0UHJvZ0ZhY3RvcnkiLCAiTSIsICJtIiwgImluaXRfcHJvZ3Jlc3Npb24iLCAiaW5pdF91dGlscyIsICJub3RlIiwgInBpY2tPbmUiLCAiZGljZSIsICJyZXF1aXJlX3Rva2VuaXplIiwgInJlcXVpcmVfdXRpbHMiLCAicmVxdWlyZV9wYXJzZXIiLCAiZ2V0Q2hvcmRzQnlQcm9ncmVzc2lvbiIsICJzY2FsZSIsICJyZWR1Y2UiLCAicGFyc2UiLCAiYmxvY2tBdEN1cnNvciIsICJuYW1lIiwgImVuZCIsICJub3JtYWxpemVOb3RlIiwgIm0iLCAicCIsICJjcmVhdGVFZGl0b3IiLCAiY3JlYXRlTWl4ZXIiLCAiYmFycyIsICJrZXkiLCAiaW1wb3J0X2hhcm1vbmljcyIsICJpc051bSIsICJpc1N0ciIsICJpc0RlZiIsICJtaWRpVG9GcmVxIiwgIm1pZGkiLCAicGFyc2UiLCAibSIsICJSRUdFWCIsICJwIiwgIlNFTUlUT05FUyIsICJub3RlIiwgImluaXRfbm90ZV9wYXJzZXIiLCAiX19lc20iLCAidG9uYWxfbWlkaV9leHBvcnRzIiwgIl9fZXhwb3J0IiwgInRvTWlkaSIsICJTSEFSUFMiLCAiRkxBVFMiLCAiaW5pdF90b25hbF9taWRpIiwgInJlcXVpcmVfcGFja2FnZSIsICJfX2NvbW1vbkpTIiwgInJlcXVpcmVfYnVpbGQiLCAiX190b0NvbW1vbkpTIiwgIm9iaiIsICJfc2V0UHJvdG90eXBlT2YiLCAibyIsICJVdGlscyIsICJOb3RlT25FdmVudCIsICJOb3RlT2ZmRXZlbnQiLCAiTm90ZUV2ZW50IiwgInNjYWxlMTRiaXRzIiwgIlBpdGNoQmVuZEV2ZW50IiwgIlByb2dyYW1DaGFuZ2VFdmVudCIsICJDb250cm9sbGVyQ2hhbmdlRXZlbnQiLCAiQ29weXJpZ2h0RXZlbnQiLCAiQ3VlUG9pbnRFdmVudCIsICJFbmRUcmFja0V2ZW50IiwgIkluc3RydW1lbnROYW1lRXZlbnQiLCAiS2V5U2lnbmF0dXJlRXZlbnQiLCAiTHlyaWNFdmVudCIsICJNYXJrZXJFdmVudCIsICJUZW1wb0V2ZW50IiwgInRlbXBvIiwgIlRleHRFdmVudCIsICJUaW1lU2lnbmF0dXJlRXZlbnQiLCAiVHJhY2tOYW1lRXZlbnQiLCAiVHJhY2siLCAiVmV4RmxvdyIsICJIZWFkZXJDaHVuayIsICJXcml0ZXIiLCAiYnVpbGQiLCAicmVxdWlyZV9tYWluIiwgIm4iLCAiYSIsICJpIiwgInIiLCAiZSIsICJ0IiwgInMiLCAiYyIsICJfX3RvRVNNIiwgImdldENob3Jkc0J5UHJvZ3Jlc3Npb24iLCAic2NhbGUiLCAicmVkdWNlIiwgIm1lcmdlIiwgImltcG9ydF9wYXJzZXIiLCAiUGxheWVyIiwgIm1pZGkiLCAiU0VNSVRPTkVTIiwgIm0iLCAicHJlc2V0U2VsZWN0Il0KfQo=
