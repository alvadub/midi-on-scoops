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
          if (this.contextTime() >= nextLoopTime) {
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL2hhcm1vbmljcy9tYWluLmpzIiwgIm5vZGVfbW9kdWxlcy9ub3RlLXBhcnNlci9pbmRleC5qcyIsICJub2RlX21vZHVsZXMvdG9uYWwtbWlkaS9pbmRleC5qcyIsICJub2RlX21vZHVsZXMvbWlkaS13cml0ZXItanMvcGFja2FnZS5qc29uIiwgIm5vZGVfbW9kdWxlcy9taWRpLXdyaXRlci1qcy9idWlsZC9pbmRleC5qcyIsICJzcmMvY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wbGF5ZXIuanMiLCAibm9kZV9tb2R1bGVzL3NjcmliYmxldHVuZS9zcmMvdXRpbHMudHMiLCAibm9kZV9tb2R1bGVzL3NjcmliYmxldHVuZS9zcmMvcHJvZ3Jlc3Npb24udHMiLCAic3JjL2xpYi9zcmMvbGliL3NyYy9saWIvdG9rZW5pemUuanMiLCAic3JjL2xpYi9zcmMvbGliL3NyYy9saWIvdXRpbHMuanMiLCAic3JjL2xpYi9zcmMvbGliL3NyYy9saWIvcGFyc2VyLmpzIiwgInNyYy9saWIvc3JjL2xpYi9zcmMvbGliL2Jsb2Nrcy5qcyIsICJzcmMvc3JjL3NyYy9oaWdobGlnaHQuanMiLCAic3JjL2NvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvZWRpdG9yLmpzIiwgInNyYy9jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL21peGVyLmpzIiwgInNyYy9zcmMvaW5kZXguanMiLCAic3JjL2xpYi9ub2RlX21vZHVsZXMvbm90ZS1wYXJzZXIvaW5kZXguanMiLCAic3JjL2xpYi9ub2RlX21vZHVsZXMvdG9uYWwtbWlkaS9pbmRleC5qcyIsICJzcmMvbGliL25vZGVfbW9kdWxlcy9taWRpLXdyaXRlci1qcy9wYWNrYWdlLmpzb24iLCAic3JjL2xpYi9ub2RlX21vZHVsZXMvbWlkaS13cml0ZXItanMvYnVpbGQvaW5kZXguanMiLCAic3JjL2xpYi9ub2RlX21vZHVsZXMvanNtaWRnZW4vbGliL2pzbWlkZ2VuLmpzIiwgInNyYy9saWIvc3JjL2xpYi9zcmMvbGliL3NyYy9saWIvdXRpbHMuanMiLCAic3JjL2xpYi9ub2RlX21vZHVsZXMvaGFybW9uaWNzL21haW4uanMiLCAic3JjL2xpYi9zcmMvbGliL3NyYy9saWIvc3JjL2xpYi90b2tlbml6ZS5qcyIsICJzcmMvbGliL25vZGVfbW9kdWxlcy9zY3JpYmJsZXR1bmUvc3JjL3V0aWxzLnRzIiwgInNyYy9saWIvbm9kZV9tb2R1bGVzL3NjcmliYmxldHVuZS9zcmMvcHJvZ3Jlc3Npb24udHMiLCAic3JjL2xpYi9zcmMvbGliL3NyYy9saWIvc3JjL2xpYi9wYXJzZXIuanMiLCAic3JjL2xpYi9zcmMvbGliL3NyYy9saWIvc3JjL2xpYi9taXh1cC5qcyIsICJzcmMvbGliL3NyYy9saWIvc3JjL2xpYi9pbmRleC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiKCgpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ezQxMzpuPT57bi5leHBvcnRzPUpTT04ucGFyc2UoJ3tcIjV0aFwiOlwiMTAwMDAwMDEwMDAwXCIsXCJNNyM1c3VzNFwiOlwiMTAwMDAxMDAxMDAxXCIsXCI3IzVzdXM0XCI6XCIxMDAwMDEwMDEwMTBcIixcInN1czRcIjpcIjEwMDAwMTAxMDAwMFwiLFwiTTdzdXM0XCI6XCIxMDAwMDEwMTAwMDFcIixcIjdzdXM0XCI6XCIxMDAwMDEwMTAwMTBcIixcIjdubzVcIjpcIjEwMDAxMDAwMDAxMFwiLFwiYXVnXCI6XCIxMDAwMTAwMDEwMDBcIixcIk03YjZcIjpcIjEwMDAxMDAwMTAwMVwiLFwibWFqNyM1XCI6XCIxMDAwMTAwMDEwMDFcIixcIjcjNVwiOlwiMTAwMDEwMDAxMDEwXCIsXCI3YjEzXCI6XCIxMDAwMTAwMDEwMTBcIixcIk1cIjpcIjEwMDAxMDAxMDAwMFwiLFwibWFqN1wiOlwiMTAwMDEwMDEwMDAxXCIsXCI3dGhcIjpcIjEwMDAxMDAxMDAxMFwiLFwiNnRoXCI6XCIxMDAwMTAwMTAxMDBcIixcIjdhZGQ2XCI6XCIxMDAwMTAwMTAxMTBcIixcIjdiNlwiOlwiMTAwMDEwMDExMDEwXCIsXCJNYjVcIjpcIjEwMDAxMDEwMDAwMFwiLFwiTTdiNVwiOlwiMTAwMDEwMTAwMDAxXCIsXCI3YjVcIjpcIjEwMDAxMDEwMDAxMFwiLFwibWFqIzRcIjpcIjEwMDAxMDExMDAwMVwiLFwiNyMxMVwiOlwiMTAwMDEwMTEwMDEwXCIsXCJNNiMxMVwiOlwiMTAwMDEwMTEwMTAwXCIsXCI3IzExYjEzXCI6XCIxMDAwMTAxMTEwMTBcIixcIm0jNVwiOlwiMTAwMTAwMDAxMDAwXCIsXCJtYjZNN1wiOlwiMTAwMTAwMDAxMDAxXCIsXCJtNyM1XCI6XCIxMDAxMDAwMDEwMTBcIixcIm1cIjpcIjEwMDEwMDAxMDAwMFwiLFwibS9tYTdcIjpcIjEwMDEwMDAxMDAwMVwiLFwibTdcIjpcIjEwMDEwMDAxMDAxMFwiLFwibTZcIjpcIjEwMDEwMDAxMDEwMFwiLFwibU1hajdiNlwiOlwiMTAwMTAwMDExMDAxXCIsXCJkaW1cIjpcIjEwMDEwMDEwMDAwMFwiLFwib003XCI6XCIxMDAxMDAxMDAwMDFcIixcIm03YjVcIjpcIjEwMDEwMDEwMDAxMFwiLFwiZGltN1wiOlwiMTAwMTAwMTAwMTAwXCIsXCJvN003XCI6XCIxMDAxMDAxMDAxMDFcIixcIjR0aFwiOlwiMTAwMTAxMDAwMDEwXCIsXCJtYWRkNFwiOlwiMTAwMTAxMDEwMDAwXCIsXCJtN2FkZDExXCI6XCIxMDAxMDEwMTAwMTBcIixcIithZGQjOVwiOlwiMTAwMTEwMDAxMDAwXCIsXCI3IzUjOVwiOlwiMTAwMTEwMDAxMDEwXCIsXCI3IzlcIjpcIjEwMDExMDAxMDAxMFwiLFwiMTMjOVwiOlwiMTAwMTEwMDEwMTEwXCIsXCI3IzliMTNcIjpcIjEwMDExMDAxMTAxMFwiLFwibWFqNyM5IzExXCI6XCIxMDAxMTAxMTAwMDFcIixcIjcjOSMxMVwiOlwiMTAwMTEwMTEwMDEwXCIsXCIxMyM5IzExXCI6XCIxMDAxMTAxMTAxMTBcIixcIjcjOSMxMWIxM1wiOlwiMTAwMTEwMTExMDEwXCIsXCJzdXMyXCI6XCIxMDEwMDAwMTAwMDBcIixcIk05IzVzdXM0XCI6XCIxMDEwMDEwMDEwMDFcIixcInN1czI0XCI6XCIxMDEwMDEwMTAwMDBcIixcIk05c3VzNFwiOlwiMTAxMDAxMDEwMDAxXCIsXCIxMXRoXCI6XCIxMDEwMDEwMTAwMTBcIixcIjlzdXM0XCI6XCIxMDEwMDEwMTAwMTBcIixcIjEzc3VzNFwiOlwiMTAxMDAxMDEwMTEwXCIsXCI5bm81XCI6XCIxMDEwMTAwMDAwMTBcIixcIjEzbm81XCI6XCIxMDEwMTAwMDAxMTBcIixcIk0jNWFkZDlcIjpcIjEwMTAxMDAwMTAwMFwiLFwibWFqOSM1XCI6XCIxMDEwMTAwMDEwMDFcIixcIjkjNVwiOlwiMTAxMDEwMDAxMDEwXCIsXCI5YjEzXCI6XCIxMDEwMTAwMDEwMTBcIixcIk1hZGQ5XCI6XCIxMDEwMTAwMTAwMDBcIixcIm1hajlcIjpcIjEwMTAxMDAxMDAwMVwiLFwiOXRoXCI6XCIxMDEwMTAwMTAwMTBcIixcIjYvOVwiOlwiMTAxMDEwMDEwMTAwXCIsXCJtYWoxM1wiOlwiMTAxMDEwMDEwMTAxXCIsXCJNN2FkZDEzXCI6XCIxMDEwMTAwMTAxMDFcIixcIjEzdGhcIjpcIjEwMTAxMDAxMDExMFwiLFwiTTliNVwiOlwiMTAxMDEwMTAwMDAxXCIsXCI5YjVcIjpcIjEwMTAxMDEwMDAxMFwiLFwiMTNiNVwiOlwiMTAxMDEwMTAwMTEwXCIsXCI5IzUjMTFcIjpcIjEwMTAxMDEwMTAxMFwiLFwibWFqOSMxMVwiOlwiMTAxMDEwMTEwMDAxXCIsXCI5IzExXCI6XCIxMDEwMTAxMTAwMTBcIixcIjY5IzExXCI6XCIxMDEwMTAxMTAxMDBcIixcIk0xMyMxMVwiOlwiMTAxMDEwMTEwMTAxXCIsXCIxMyMxMVwiOlwiMTAxMDEwMTEwMTEwXCIsXCI5IzExYjEzXCI6XCIxMDEwMTAxMTEwMTBcIixcIm05IzVcIjpcIjEwMTEwMDAwMTAxMFwiLFwibWFkZDlcIjpcIjEwMTEwMDAxMDAwMFwiLFwibU05XCI6XCIxMDExMDAwMTAwMDFcIixcIm05XCI6XCIxMDExMDAwMTAwMTBcIixcIm02OVwiOlwiMTAxMTAwMDEwMTAwXCIsXCJtMTNcIjpcIjEwMTEwMDAxMDExMFwiLFwibU1hajliNlwiOlwiMTAxMTAwMDExMDAxXCIsXCJtOWI1XCI6XCIxMDExMDAxMDAwMTBcIixcIm0xMUFcIjpcIjEwMTEwMTAwMTAxMFwiLFwibTExXCI6XCIxMDExMDEwMTAwMTBcIixcImI5c3VzXCI6XCIxMTAwMDEwMTAwMTBcIixcIjExYjlcIjpcIjExMDAwMTAxMDAxMFwiLFwiN3N1czRiOWIxM1wiOlwiMTEwMDAxMDExMDEwXCIsXCJhbHQ3XCI6XCIxMTAwMTAwMDAwMTBcIixcIjcjNWI5XCI6XCIxMTAwMTAwMDEwMTBcIixcIk1hZGRiOVwiOlwiMTEwMDEwMDEwMDAwXCIsXCJNN2I5XCI6XCIxMTAwMTAwMTAwMDFcIixcIjdiOVwiOlwiMTEwMDEwMDEwMDEwXCIsXCIxM2I5XCI6XCIxMTAwMTAwMTAxMTBcIixcIjdiOWIxM1wiOlwiMTEwMDEwMDExMDEwXCIsXCI3IzViOSMxMVwiOlwiMTEwMDEwMTAxMDEwXCIsXCI3YjkjMTFcIjpcIjExMDAxMDExMDAxMFwiLFwiMTNiOSMxMVwiOlwiMTEwMDEwMTEwMTEwXCIsXCI3YjliMTMjMTFcIjpcIjExMDAxMDExMTAxMFwiLFwibWI2YjlcIjpcIjExMDEwMDAwMTAwMFwiLFwiN2I5IzlcIjpcIjExMDExMDAxMDAxMFwifScpfSw3MjI6bj0+e24uZXhwb3J0cz1KU09OLnBhcnNlKCd7XCJtYWpvciBwZW50YXRvbmljXCI6XCIxMDEwMTAwMTAxMDBcIixcImlvbmlhbiBwZW50YXRvbmljXCI6XCIxMDAwMTEwMTAwMDFcIixcIm1peG9seWRpYW4gcGVudGF0b25pY1wiOlwiMTAwMDExMDEwMDEwXCIsXCJyaXR1c2VuXCI6XCIxMDEwMDEwMTAxMDBcIixcImVneXB0aWFuXCI6XCIxMDEwMDEwMTAwMTBcIixcIm5lb3BvbGl0YW4gbWFqb3IgcGVudGF0b25pY1wiOlwiMTAwMDExMTAwMDEwXCIsXCJ2aWV0bmFtZXNlIDFcIjpcIjEwMDEwMTAxMTAwMFwiLFwicGVsb2dcIjpcIjExMDEwMDAxMTAwMFwiLFwia3Vtb2lqb3NoaVwiOlwiMTEwMDAxMDExMDAwXCIsXCJoaXJham9zaGlcIjpcIjEwMTEwMDAxMTAwMFwiLFwiaXdhdG9cIjpcIjExMDAwMTEwMDAxMFwiLFwiaW4tc2VuXCI6XCIxMTAwMDEwMTAwMTBcIixcImx5ZGlhbiBwZW50YXRvbmljXCI6XCIxMDAwMTAxMTAwMDFcIixcIm1hbGtvcyByYWdhXCI6XCIxMDAxMDEwMDEwMTBcIixcImxvY3JpYW4gcGVudGF0b25pY1wiOlwiMTAwMTAxMTAwMDEwXCIsXCJtaW5vciBwZW50YXRvbmljXCI6XCIxMDAxMDEwMTAwMTBcIixcIm1pbm9yIHNpeCBwZW50YXRvbmljXCI6XCIxMDAxMDEwMTAxMDBcIixcImZsYXQgdGhyZWUgcGVudGF0b25pY1wiOlwiMTAxMTAwMDEwMTAwXCIsXCJmbGF0IHNpeCBwZW50YXRvbmljXCI6XCIxMDEwMTAwMTEwMDBcIixcInNjcmlhYmluXCI6XCIxMTAwMTAwMTAxMDBcIixcIndob2xlIHRvbmUgcGVudGF0b25pY1wiOlwiMTAwMDEwMTAxMDEwXCIsXCJseWRpYW4gIzVQIHBlbnRhdG9uaWNcIjpcIjEwMDAxMDEwMTAwMVwiLFwibHlkaWFuIGRvbWluYW50IHBlbnRhdG9uaWNcIjpcIjEwMDAxMDExMDAxMFwiLFwibWlub3IgIzdNIHBlbnRhdG9uaWNcIjpcIjEwMDEwMTAxMDAwMVwiLFwic3VwZXIgbG9jcmlhbiBwZW50YXRvbmljXCI6XCIxMDAxMTAxMDAwMTBcIixcIm1pbm9yIGhleGF0b25pY1wiOlwiMTAxMTAxMDEwMDAxXCIsXCJhdWdtZW50ZWRcIjpcIjEwMDExMDAxMTAwMVwiLFwibWFqb3IgYmx1ZXNcIjpcIjEwMTExMDAxMDEwMFwiLFwicGlvbmdpb1wiOlwiMTAxMDAxMDEwMTEwXCIsXCJwcm9tZXRoZXVzIG5lb3BvbGl0YW5cIjpcIjExMDAxMDEwMDExMFwiLFwicHJvbWV0aGV1c1wiOlwiMTAxMDEwMTAwMTEwXCIsXCJteXN0ZXJ5ICMxXCI6XCIxMTAwMTAxMDEwMTBcIixcInNpeCB0b25lIHN5bW1ldHJpY1wiOlwiMTEwMDExMDAxMTAwXCIsXCJ3aG9sZSB0b25lXCI6XCIxMDEwMTAxMDEwMTBcIixcIm1lc3NpYWVuXFwncyBtb2RlICM1XCI6XCIxMTAwMDExMTAwMDFcIixcIm1pbm9yIGJsdWVzXCI6XCIxMDAxMDExMTAwMTBcIixcImxvY3JpYW4gbWFqb3JcIjpcIjEwMTAxMTEwMTAxMFwiLFwiZG91YmxlIGhhcm1vbmljIGx5ZGlhblwiOlwiMTEwMDEwMTExMDAxXCIsXCJoYXJtb25pYyBtaW5vclwiOlwiMTAxMTAxMDExMDAxXCIsXCJhbHRlcmVkXCI6XCIxMTAxMTAxMDEwMTBcIixcImxvY3JpYW4gIzJcIjpcIjEwMTEwMTEwMTAxMFwiLFwibWl4b2x5ZGlhbiBiNlwiOlwiMTAxMDExMDExMDEwXCIsXCJseWRpYW4gZG9taW5hbnRcIjpcIjEwMTAxMDExMDExMFwiLFwibHlkaWFuXCI6XCIxMDEwMTAxMTAxMDFcIixcImx5ZGlhbiBhdWdtZW50ZWRcIjpcIjEwMTAxMDEwMTEwMVwiLFwiZG9yaWFuIGIyXCI6XCIxMTAxMDEwMTAxMTBcIixcIm1lbG9kaWMgbWlub3JcIjpcIjEwMTEwMTAxMDEwMVwiLFwibG9jcmlhblwiOlwiMTEwMTAxMTAxMDEwXCIsXCJ1bHRyYWxvY3JpYW5cIjpcIjExMDExMDEwMTEwMFwiLFwibG9jcmlhbiA2XCI6XCIxMTAxMDExMDAxMTBcIixcImF1Z21lbnRlZCBoZXB0YXRvbmljXCI6XCIxMDAxMTEwMTEwMDFcIixcInJvbWFuaWFuIG1pbm9yXCI6XCIxMDExMDAxMTAxMTBcIixcImRvcmlhbiAjNFwiOlwiMTAxMTAwMTEwMTEwXCIsXCJseWRpYW4gZGltaW5pc2hlZFwiOlwiMTAxMTAwMTEwMTAxXCIsXCJwaHJ5Z2lhblwiOlwiMTEwMTAxMDExMDEwXCIsXCJsZWFkaW5nIHdob2xlIHRvbmVcIjpcIjEwMTAxMDEwMTAxMVwiLFwibHlkaWFuIG1pbm9yXCI6XCIxMDEwMTAxMTEwMTBcIixcInBocnlnaWFuIGRvbWluYW50XCI6XCIxMTAwMTEwMTEwMTBcIixcImJhbGluZXNlXCI6XCIxMTAxMDEwMTEwMDFcIixcIm5lb3BvbGl0YW4gbWFqb3JcIjpcIjExMDEwMTAxMDEwMVwiLFwiYWVvbGlhblwiOlwiMTAxMTAxMDExMDEwXCIsXCJoYXJtb25pYyBtYWpvclwiOlwiMTAxMDExMDExMDAxXCIsXCJkb3VibGUgaGFybW9uaWMgbWFqb3JcIjpcIjExMDAxMTAxMTAwMVwiLFwiZG9yaWFuXCI6XCIxMDExMDEwMTAxMTBcIixcImh1bmdhcmlhbiBtaW5vclwiOlwiMTAxMTAwMTExMDAxXCIsXCJodW5nYXJpYW4gbWFqb3JcIjpcIjEwMDExMDExMDExMFwiLFwib3JpZW50YWxcIjpcIjExMDAxMTEwMDExMFwiLFwiZmxhbWVuY29cIjpcIjExMDExMDExMDAxMFwiLFwidG9kaSByYWdhXCI6XCIxMTAxMDAxMTEwMDFcIixcIm1peG9seWRpYW5cIjpcIjEwMTAxMTAxMDExMFwiLFwicGVyc2lhblwiOlwiMTEwMDExMTAxMDAxXCIsXCJtYWpvclwiOlwiMTAxMDExMDEwMTAxXCIsXCJlbmlnbWF0aWNcIjpcIjExMDAxMDEwMTAxMVwiLFwibWFqb3IgYXVnbWVudGVkXCI6XCIxMDEwMTEwMDExMDFcIixcImx5ZGlhbiAjOVwiOlwiMTAwMTEwMTEwMTAxXCIsXCJtZXNzaWFlblxcJ3MgbW9kZSAjNFwiOlwiMTExMDAxMTExMDAxXCIsXCJwdXJ2aSByYWdhXCI6XCIxMTAwMTExMTEwMDFcIixcInNwYW5pc2ggaGVwdGF0b25pY1wiOlwiMTEwMTExMDExMDEwXCIsXCJiZWJvcFwiOlwiMTAxMDExMDEwMTExXCIsXCJiZWJvcCBtaW5vclwiOlwiMTAxMTExMDEwMTEwXCIsXCJiZWJvcCBtYWpvclwiOlwiMTAxMDExMDExMTAxXCIsXCJiZWJvcCBsb2NyaWFuXCI6XCIxMTAxMDExMTEwMTBcIixcIm1pbm9yIGJlYm9wXCI6XCIxMDExMDEwMTEwMTFcIixcImRpbWluaXNoZWRcIjpcIjEwMTEwMTEwMTEwMVwiLFwiaWNoaWtvc3VjaG9cIjpcIjEwMTAxMTExMDEwMVwiLFwibWlub3Igc2l4IGRpbWluaXNoZWRcIjpcIjEwMTEwMTAxMTEwMVwiLFwiaGFsZi13aG9sZSBkaW1pbmlzaGVkXCI6XCIxMTAxMTAxMTAxMTBcIixcImthZmkgcmFnYVwiOlwiMTAwMTExMDEwMTExXCIsXCJtZXNzaWFlblxcJ3MgbW9kZSAjNlwiOlwiMTAxMDExMTAxMDExXCIsXCJjb21wb3NpdGUgYmx1ZXNcIjpcIjEwMTExMTExMDExMFwiLFwibWVzc2lhZW5cXCdzIG1vZGUgIzNcIjpcIjEwMTExMDExMTAxMVwiLFwibWVzc2lhZW5cXCdzIG1vZGUgIzdcIjpcIjExMTEwMTExMTEwMVwiLFwiY2hyb21hdGljXCI6XCIxMTExMTExMTExMTFcIixcImlvbmlhblwiOlwiMTAxMDExMDEwMTAxXCIsXCJtaW5vclwiOlwiMTAxMTAxMDExMDEwXCJ9Jyl9fSxlPXt9O2Z1bmN0aW9uIG8oYSl7dmFyIGk9ZVthXTtpZih2b2lkIDAhPT1pKXJldHVybiBpLmV4cG9ydHM7dmFyIHI9ZVthXT17ZXhwb3J0czp7fX07cmV0dXJuIG5bYV0ocixyLmV4cG9ydHMsbyksci5leHBvcnRzfW8uZD0obixlKT0+e2Zvcih2YXIgYSBpbiBlKW8ubyhlLGEpJiYhby5vKG4sYSkmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLGEse2VudW1lcmFibGU6ITAsZ2V0OmVbYV19KX0sby5vPShuLGUpPT5PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixlKSxvLnI9bj0+e1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9O3ZhciBhPXt9OygoKT0+e28ucihhKSxvLmQoYSx7Y2hvcmQ6KCk9Pm0sY2hvcmRzOigpPT50LGlubGluZUNob3JkOigpPT5yLHNjYWxlOigpPT5jLHNjYWxlczooKT0+c30pO3ZhciBuPW8oNzIyKSxlPW8oNDEzKSxpPWZ1bmN0aW9uKG8pe3ZhciBhPW8uc2NhbGUsaT1vLmNob3JkLHI9YXx8aSx0PWE/XCJzY2FsZVwiOlwiY2hvcmRcIjtpZihcInN0cmluZ1wiIT10eXBlb2Ygcil0aHJvdyBuZXcgRXJyb3IoXCJcIi5jb25jYXQocixcIiBpcyBub3QgYSB2YWxpZCBpbnB1dCBmb3IgXCIpLmNvbmNhdCh0KSk7dmFyIHMsbSxjPXIuaW5kZXhPZihcIiBcIik7LTE9PT1jPyhzPXIuc2xpY2UoMSksbT1yWzBdLFwiYlwiIT09clsxXSYmXCIjXCIhPT1yWzFdfHwocz1yLnNsaWNlKDIpLG0rPXJbMV0pKToocz1yLnNsaWNlKC0xPT09Yz8xOmMrMSksbT1yLnNsaWNlKDAsYykpO3ZhciBkPWZ1bmN0aW9uKG4pe3JldHVybntcIkMjXCI6XCJEYlwiLFwiRCNcIjpcIkViXCIsXCJGI1wiOlwiR2JcIixcIkcjXCI6XCJBYlwiLFwiQSNcIjpcIkJiXCJ9W24udG9VcHBlckNhc2UoKV18fG4uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrbi5zbGljZSgxKX0obS5yZXBsYWNlKC9cXGQvZyxcIlwiKSksbD1cIlwiIT09bS5yZXBsYWNlKC9cXEQvZyxcIlwiKT8rbS5yZXBsYWNlKC9cXEQvZyxcIlwiKTo0O2lmKGlzTmFOKGwpKXRocm93IG5ldyBFcnJvcihcIlwiLmNvbmNhdChtWzBdLFwiIGRvZXMgbm90IGhhdmUgYSB2YWxpZCBvY3RhdmVcIikpO2lmKCFuW3NdJiYhZVtzXSl0aHJvdyBuZXcgRXJyb3IoXCJcIi5jb25jYXQocixcIiBpcyBub3QgYSB2YWxpZCBcIikuY29uY2F0KHQpKTtmb3IodmFyIGI9ZnVuY3Rpb24obixlKXt2YXIgbz1bXCJDXCIsXCJEYlwiLFwiRFwiLFwiRWJcIixcIkVcIixcIkZcIixcIkdiXCIsXCJHXCIsXCJBYlwiLFwiQVwiLFwiQmJcIixcIkJcIl0sYT1vLm1hcCgoZnVuY3Rpb24obil7cmV0dXJuIG4rZX0pKSxpPW8ubWFwKChmdW5jdGlvbihuKXtyZXR1cm4gbisoZSsxKX0pKSxyPWEuY29uY2F0KGkpO3JldHVybiByLnNsaWNlKHIuaW5kZXhPZihuK2UpKX0oZCxsKSx1PVtdLHA9MCxoPTAsZj1hP246ZTtwPGZbc10ubGVuZ3RoOylcIjFcIj09PWZbc11bcF0mJnUucHVzaChiW2hdKSxwKyssaCsrO3JldHVybiB1fSxyPWZ1bmN0aW9uKG4pe3ZhciBlLG8sYT1cImI5c3VzXCIscj00O3JldHVybiBuLmluY2x1ZGVzKGEpPyhvPWEsZT1uLnNsaWNlKDAsbi5pbmRleE9mKGEpKSk6KGU9blswXSxvPW4uc2xpY2UoMSksXCJiXCIhPT1uWzFdJiZcIiNcIiE9PW5bMV18fChlKz1uWzFdLG89bi5zbGljZSgyKSkpLG4uaW5jbHVkZXMoXCJfXCIpJiYocj0rbi5zcGxpdChcIl9cIilbMV0sbz1vLnNsaWNlKDAsby5pbmRleE9mKFwiX1wiKSkpLGkoe2Nob3JkOmUrcitcIiBcIitvfSl9LHQ9ZnVuY3Rpb24oKXtyZXR1cm4gT2JqZWN0LmtleXMoZSl9LHM9ZnVuY3Rpb24oKXtyZXR1cm4gT2JqZWN0LmtleXMobil9LG09ZnVuY3Rpb24obil7cmV0dXJuIGkoe2Nob3JkOm59KX0sYz1mdW5jdGlvbihuKXtyZXR1cm4gaSh7c2NhbGU6bn0pfX0pKCk7dmFyIGk9ZXhwb3J0cztmb3IodmFyIHIgaW4gYSlpW3JdPWFbcl07YS5fX2VzTW9kdWxlJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoaSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0pKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYWluLmpzLm1hcCIsICIndXNlIHN0cmljdCdcblxuLy8gdXRpbFxuZnVuY3Rpb24gZmlsbFN0ciAocywgbnVtKSB7IHJldHVybiBBcnJheShudW0gKyAxKS5qb2luKHMpIH1cbmZ1bmN0aW9uIGlzTnVtICh4KSB7IHJldHVybiB0eXBlb2YgeCA9PT0gJ251bWJlcicgfVxuZnVuY3Rpb24gaXNTdHIgKHgpIHsgcmV0dXJuIHR5cGVvZiB4ID09PSAnc3RyaW5nJyB9XG5mdW5jdGlvbiBpc0RlZiAoeCkgeyByZXR1cm4gdHlwZW9mIHggIT09ICd1bmRlZmluZWQnIH1cbmZ1bmN0aW9uIG1pZGlUb0ZyZXEgKG1pZGksIHR1bmluZykge1xuICByZXR1cm4gTWF0aC5wb3coMiwgKG1pZGkgLSA2OSkgLyAxMikgKiAodHVuaW5nIHx8IDQ0MClcbn1cblxudmFyIFJFR0VYID0gL14oW2EtZ0EtR10pKCN7MSx9fGJ7MSx9fHh7MSx9fCkoLT9cXGQqKVxccyooLiopXFxzKiQvXG4vKipcbiAqIEEgcmVnZXggZm9yIG1hdGNoaW5nIG5vdGUgc3RyaW5ncyBpbiBzY2llbnRpZmljIG5vdGF0aW9uLlxuICpcbiAqIEBuYW1lIHJlZ2V4XG4gKiBAZnVuY3Rpb25cbiAqIEByZXR1cm4ge1JlZ0V4cH0gdGhlIHJlZ2V4cCB1c2VkIHRvIHBhcnNlIHRoZSBub3RlIG5hbWVcbiAqXG4gKiBUaGUgbm90ZSBzdHJpbmcgc2hvdWxkIGhhdmUgdGhlIGZvcm0gYGxldHRlclthY2NpZGVudGFsc11bb2N0YXZlXVtlbGVtZW50XWBcbiAqIHdoZXJlOlxuICpcbiAqIC0gbGV0dGVyOiAoUmVxdWlyZWQpIGlzIGEgbGV0dGVyIGZyb20gQSB0byBHIGVpdGhlciB1cHBlciBvciBsb3dlciBjYXNlXG4gKiAtIGFjY2lkZW50YWxzOiAoT3B0aW9uYWwpIGNhbiBiZSBvbmUgb3IgbW9yZSBgYmAgKGZsYXRzKSwgYCNgIChzaGFycHMpIG9yIGB4YCAoZG91YmxlIHNoYXJwcykuXG4gKiBUaGV5IGNhbiBOT1QgYmUgbWl4ZWQuXG4gKiAtIG9jdGF2ZTogKE9wdGlvbmFsKSBhIHBvc2l0aXZlIG9yIG5lZ2F0aXZlIGludGVnZXJcbiAqIC0gZWxlbWVudDogKE9wdGlvbmFsKSBhZGRpdGlvbmFsbHkgYW55dGhpbmcgYWZ0ZXIgdGhlIGR1cmF0aW9uIGlzIGNvbnNpZGVyZWQgdG9cbiAqIGJlIHRoZSBlbGVtZW50IG5hbWUgKGZvciBleGFtcGxlOiAnQzIgZG9yaWFuJylcbiAqXG4gKiBUaGUgZXhlY3V0ZWQgcmVnZXggY29udGFpbnMgKGJ5IGFycmF5IGluZGV4KTpcbiAqXG4gKiAtIDA6IHRoZSBjb21wbGV0ZSBzdHJpbmdcbiAqIC0gMTogdGhlIG5vdGUgbGV0dGVyXG4gKiAtIDI6IHRoZSBvcHRpb25hbCBhY2NpZGVudGFsc1xuICogLSAzOiB0aGUgb3B0aW9uYWwgb2N0YXZlXG4gKiAtIDQ6IHRoZSByZXN0IG9mIHRoZSBzdHJpbmcgKHRyaW1tZWQpXG4gKlxuICogQGV4YW1wbGVcbiAqIHZhciBwYXJzZXIgPSByZXF1aXJlKCdub3RlLXBhcnNlcicpXG4gKiBwYXJzZXIucmVnZXguZXhlYygnYyM0JylcbiAqIC8vID0+IFsnYyM0JywgJ2MnLCAnIycsICc0JywgJyddXG4gKiBwYXJzZXIucmVnZXguZXhlYygnYyM0IG1ham9yJylcbiAqIC8vID0+IFsnYyM0bWFqb3InLCAnYycsICcjJywgJzQnLCAnbWFqb3InXVxuICogcGFyc2VyLnJlZ2V4KCkuZXhlYygnQ01hajcnKVxuICogLy8gPT4gWydDTWFqNycsICdDJywgJycsICcnLCAnTWFqNyddXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdleCAoKSB7IHJldHVybiBSRUdFWCB9XG5cbnZhciBTRU1JVE9ORVMgPSBbMCwgMiwgNCwgNSwgNywgOSwgMTFdXG4vKipcbiAqIFBhcnNlIGEgbm90ZSBuYW1lIGluIHNjaWVudGlmaWMgbm90YXRpb24gYW4gcmV0dXJuIGl0J3MgY29tcG9uZW50cyxcbiAqIGFuZCBzb21lIG51bWVyaWMgcHJvcGVydGllcyBpbmNsdWRpbmcgbWlkaSBudW1iZXIgYW5kIGZyZXF1ZW5jeS5cbiAqXG4gKiBAbmFtZSBwYXJzZVxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbm90ZSAtIHRoZSBub3RlIHN0cmluZyB0byBiZSBwYXJzZWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNUb25pYyAtIHRydWUgdGhlIHN0cmluZ3MgaXQncyBzdXBwb3NlZCB0byBjb250YWluIGEgbm90ZSBudW1iZXJcbiAqIGFuZCBzb21lIGNhdGVnb3J5IChmb3IgZXhhbXBsZSBhbiBzY2FsZTogJ0MjIG1ham9yJykuIEl0J3MgZmFsc2UgYnkgZGVmYXVsdCxcbiAqIGJ1dCB3aGVuIHRydWUsIGVuIGV4dHJhIHRvbmljT2YgcHJvcGVydHkgaXMgcmV0dXJuZWQgd2l0aCB0aGUgY2F0ZWdvcnkgKCdtYWpvcicpXG4gKiBAcGFyYW0ge0Zsb2F0fSB0dW5uaW5nIC0gVGhlIGZyZXF1ZW5jeSBvZiBBNCBub3RlIHRvIGNhbGN1bGF0ZSBmcmVxdWVuY2llcy5cbiAqIEJ5IGRlZmF1bHQgaXQgNDQwLlxuICogQHJldHVybiB7T2JqZWN0fSB0aGUgcGFyc2VkIG5vdGUgbmFtZSBvciBudWxsIGlmIG5vdCBhIHZhbGlkIG5vdGVcbiAqXG4gKiBUaGUgcGFyc2VkIG5vdGUgbmFtZSBvYmplY3Qgd2lsbCBBTFdBWVMgY29udGFpbnM6XG4gKiAtIGxldHRlcjogdGhlIHVwcGVyY2FzZSBsZXR0ZXIgb2YgdGhlIG5vdGVcbiAqIC0gYWNjOiB0aGUgYWNjaWRlbnRhbHMgb2YgdGhlIG5vdGUgKG9ubHkgc2hhcnBzIG9yIGZsYXRzKVxuICogLSBwYzogdGhlIHBpdGNoIGNsYXNzIChsZXR0ZXIgKyBhY2MpXG4gKiAtIHN0ZXA6IHMgYSBudW1lcmljIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBsZXR0ZXIuIEl0J3MgYW4gaW50ZWdlciBmcm9tIDAgdG8gNlxuICogd2hlcmUgMCA9IEMsIDEgPSBEIC4uLiA2ID0gQlxuICogLSBhbHQ6IGEgbnVtZXJpYyByZXByZXNlbnRhdGlvbiBvZiB0aGUgYWNjaWRlbnRhbHMuIDAgbWVhbnMgbm8gYWx0ZXJhdGlvbixcbiAqIHBvc2l0aXZlIG51bWJlcnMgYXJlIGZvciBzaGFycHMgYW5kIG5lZ2F0aXZlIGZvciBmbGF0c1xuICogLSBjaHJvbWE6IGEgbnVtZXJpYyByZXByZXNlbnRhdGlvbiBvZiB0aGUgcGl0Y2ggY2xhc3MuIEl0J3MgbGlrZSBtaWRpIGZvclxuICogcGl0Y2ggY2xhc3Nlcy4gMCA9IEMsIDEgPSBDIywgMiA9IEQgLi4uIDExID0gQi4gQ2FuIGJlIHVzZWQgdG8gZmluZCBlbmhhcm1vbmljc1xuICogc2luY2UsIGZvciBleGFtcGxlLCBjaHJvbWEgb2YgJ0NiJyBhbmQgJ0InIGFyZSBib3RoIDExXG4gKlxuICogSWYgdGhlIG5vdGUgaGFzIG9jdGF2ZSwgdGhlIHBhcnNlciBvYmplY3Qgd2lsbCBjb250YWluOlxuICogLSBvY3Q6IHRoZSBvY3RhdmUgbnVtYmVyIChhcyBpbnRlZ2VyKVxuICogLSBtaWRpOiB0aGUgbWlkaSBudW1iZXJcbiAqIC0gZnJlcTogdGhlIGZyZXF1ZW5jeSAodXNpbmcgdHVuaW5nIHBhcmFtZXRlciBhcyBiYXNlKVxuICpcbiAqIElmIHRoZSBwYXJhbWV0ZXIgYGlzVG9uaWNgIGlzIHNldCB0byB0cnVlLCB0aGUgcGFyc2VkIG9iamVjdCB3aWxsIGNvbnRhaW46XG4gKiAtIHRvbmljT2Y6IHRoZSByZXN0IG9mIHRoZSBzdHJpbmcgdGhhdCBmb2xsb3dzIG5vdGUgbmFtZSAobGVmdCBhbmQgcmlnaHQgdHJpbW1lZClcbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIHBhcnNlID0gcmVxdWlyZSgnbm90ZS1wYXJzZXInKS5wYXJzZVxuICogcGFyc2UoJ0NiNCcpXG4gKiAvLyA9PiB7IGxldHRlcjogJ0MnLCBhY2M6ICdiJywgcGM6ICdDYicsIHN0ZXA6IDAsIGFsdDogLTEsIGNocm9tYTogLTEsXG4gKiAgICAgICAgIG9jdDogNCwgbWlkaTogNTksIGZyZXE6IDI0Ni45NDE2NTA2MjgwNjIwNiB9XG4gKiAvLyBpZiBubyBvY3RhdmUsIG5vIG1pZGksIG5vIGZyZXFcbiAqIHBhcnNlKCdmeCcpXG4gKiAvLyA9PiB7IGxldHRlcjogJ0YnLCBhY2M6ICcjIycsIHBjOiAnRiMjJywgc3RlcDogMywgYWx0OiAyLCBjaHJvbWE6IDcgfSlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlIChzdHIsIGlzVG9uaWMsIHR1bmluZykge1xuICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHJldHVybiBudWxsXG4gIHZhciBtID0gUkVHRVguZXhlYyhzdHIpXG4gIGlmICghbSB8fCAoIWlzVG9uaWMgJiYgbVs0XSkpIHJldHVybiBudWxsXG5cbiAgdmFyIHAgPSB7IGxldHRlcjogbVsxXS50b1VwcGVyQ2FzZSgpLCBhY2M6IG1bMl0ucmVwbGFjZSgveC9nLCAnIyMnKSB9XG4gIHAucGMgPSBwLmxldHRlciArIHAuYWNjXG4gIHAuc3RlcCA9IChwLmxldHRlci5jaGFyQ29kZUF0KDApICsgMykgJSA3XG4gIHAuYWx0ID0gcC5hY2NbMF0gPT09ICdiJyA/IC1wLmFjYy5sZW5ndGggOiBwLmFjYy5sZW5ndGhcbiAgdmFyIHBvcyA9IFNFTUlUT05FU1twLnN0ZXBdICsgcC5hbHRcbiAgcC5jaHJvbWEgPSBwb3MgPCAwID8gMTIgKyBwb3MgOiBwb3MgJSAxMlxuICBpZiAobVszXSkgeyAvLyBoYXMgb2N0YXZlXG4gICAgcC5vY3QgPSArbVszXVxuICAgIHAubWlkaSA9IHBvcyArIDEyICogKHAub2N0ICsgMSlcbiAgICBwLmZyZXEgPSBtaWRpVG9GcmVxKHAubWlkaSwgdHVuaW5nKVxuICB9XG4gIGlmIChpc1RvbmljKSBwLnRvbmljT2YgPSBtWzRdXG4gIHJldHVybiBwXG59XG5cbnZhciBMRVRURVJTID0gJ0NERUZHQUInXG5mdW5jdGlvbiBhY2NTdHIgKG4pIHsgcmV0dXJuICFpc051bShuKSA/ICcnIDogbiA8IDAgPyBmaWxsU3RyKCdiJywgLW4pIDogZmlsbFN0cignIycsIG4pIH1cbmZ1bmN0aW9uIG9jdFN0ciAobikgeyByZXR1cm4gIWlzTnVtKG4pID8gJycgOiAnJyArIG4gfVxuXG4vKipcbiAqIENyZWF0ZSBhIHN0cmluZyBmcm9tIGEgcGFyc2VkIG9iamVjdCBvciBgc3RlcCwgYWx0ZXJhdGlvbiwgb2N0YXZlYCBwYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gdGhlIHBhcnNlZCBkYXRhIG9iamVjdFxuICogQHJldHVybiB7U3RyaW5nfSBhIG5vdGUgc3RyaW5nIG9yIG51bGwgaWYgbm90IHZhbGlkIHBhcmFtZXRlcnNcbiAqIEBzaW5jZSAxLjJcbiAqIEBleGFtcGxlXG4gKiBwYXJzZXIuYnVpbGQocGFyc2VyLnBhcnNlKCdjYjInKSkgLy8gPT4gJ0NiMidcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gaXQgYWNjZXB0cyAoc3RlcCwgYWx0ZXJhdGlvbiwgb2N0YXZlKSBwYXJhbWV0ZXJzOlxuICogcGFyc2VyLmJ1aWxkKDMpIC8vID0+ICdGJ1xuICogcGFyc2VyLmJ1aWxkKDMsIC0xKSAvLyA9PiAnRmInXG4gKiBwYXJzZXIuYnVpbGQoMywgLTEsIDQpIC8vID0+ICdGYjQnXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidWlsZCAocywgYSwgbykge1xuICBpZiAocyA9PT0gbnVsbCB8fCB0eXBlb2YgcyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBudWxsXG4gIGlmIChzLnN0ZXApIHJldHVybiBidWlsZChzLnN0ZXAsIHMuYWx0LCBzLm9jdClcbiAgaWYgKHMgPCAwIHx8IHMgPiA2KSByZXR1cm4gbnVsbFxuICByZXR1cm4gTEVUVEVSUy5jaGFyQXQocykgKyBhY2NTdHIoYSkgKyBvY3RTdHIobylcbn1cblxuLyoqXG4gKiBHZXQgbWlkaSBvZiBhIG5vdGVcbiAqXG4gKiBAbmFtZSBtaWRpXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfEludGVnZXJ9IG5vdGUgLSB0aGUgbm90ZSBuYW1lIG9yIG1pZGkgbnVtYmVyXG4gKiBAcmV0dXJuIHtJbnRlZ2VyfSB0aGUgbWlkaSBudW1iZXIgb2YgdGhlIG5vdGUgb3IgbnVsbCBpZiBub3QgYSB2YWxpZCBub3RlXG4gKiBvciB0aGUgbm90ZSBkb2VzIE5PVCBjb250YWlucyBvY3RhdmVcbiAqIEBleGFtcGxlXG4gKiB2YXIgcGFyc2VyID0gcmVxdWlyZSgnbm90ZS1wYXJzZXInKVxuICogcGFyc2VyLm1pZGkoJ0E0JykgLy8gPT4gNjlcbiAqIHBhcnNlci5taWRpKCdBJykgLy8gPT4gbnVsbFxuICogQGV4YW1wbGVcbiAqIC8vIG1pZGkgbnVtYmVycyBhcmUgYnlwYXNzZWQgKGV2ZW4gYXMgc3RyaW5ncylcbiAqIHBhcnNlci5taWRpKDYwKSAvLyA9PiA2MFxuICogcGFyc2VyLm1pZGkoJzYwJykgLy8gPT4gNjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1pZGkgKG5vdGUpIHtcbiAgaWYgKChpc051bShub3RlKSB8fCBpc1N0cihub3RlKSkgJiYgbm90ZSA+PSAwICYmIG5vdGUgPCAxMjgpIHJldHVybiArbm90ZVxuICB2YXIgcCA9IHBhcnNlKG5vdGUpXG4gIHJldHVybiBwICYmIGlzRGVmKHAubWlkaSkgPyBwLm1pZGkgOiBudWxsXG59XG5cbi8qKlxuICogR2V0IGZyZXEgb2YgYSBub3RlIGluIGhlcnR6cyAoaW4gYSB3ZWxsIHRlbXBlcmVkIDQ0MEh6IEE0KVxuICpcbiAqIEBuYW1lIGZyZXFcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5vdGUgLSB0aGUgbm90ZSBuYW1lIG9yIG5vdGUgbWlkaSBudW1iZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSB0dW5pbmcgLSAoT3B0aW9uYWwpIHRoZSBBNCBmcmVxdWVuY3kgKDQ0MCBieSBkZWZhdWx0KVxuICogQHJldHVybiB7RmxvYXR9IHRoZSBmcmVxIG9mIHRoZSBudW1iZXIgaWYgaGVydHpzIG9yIG51bGwgaWYgbm90IHZhbGlkIG5vdGVcbiAqIEBleGFtcGxlXG4gKiB2YXIgcGFyc2VyID0gcmVxdWlyZSgnbm90ZS1wYXJzZXInKVxuICogcGFyc2VyLmZyZXEoJ0E0JykgLy8gPT4gNDQwXG4gKiBwYXJzZXIuZnJlcSgnQScpIC8vID0+IG51bGxcbiAqIEBleGFtcGxlXG4gKiAvLyBjYW4gY2hhbmdlIHR1bmluZyAoNDQwIGJ5IGRlZmF1bHQpXG4gKiBwYXJzZXIuZnJlcSgnQTQnLCA0NDQpIC8vID0+IDQ0NFxuICogcGFyc2VyLmZyZXEoJ0EzJywgNDQ0KSAvLyA9PiAyMjJcbiAqIEBleGFtcGxlXG4gKiAvLyBpdCBhY2NlcHRzIG1pZGkgbnVtYmVycyAoYXMgbnVtYmVycyBhbmQgYXMgc3RyaW5ncylcbiAqIHBhcnNlci5mcmVxKDY5KSAvLyA9PiA0NDBcbiAqIHBhcnNlci5mcmVxKCc2OScsIDQ0MikgLy8gPT4gNDQyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcmVxIChub3RlLCB0dW5pbmcpIHtcbiAgdmFyIG0gPSBtaWRpKG5vdGUpXG4gIHJldHVybiBtID09PSBudWxsID8gbnVsbCA6IG1pZGlUb0ZyZXEobSwgdHVuaW5nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbGV0dGVyIChzcmMpIHsgcmV0dXJuIChwYXJzZShzcmMpIHx8IHt9KS5sZXR0ZXIgfVxuZXhwb3J0IGZ1bmN0aW9uIGFjYyAoc3JjKSB7IHJldHVybiAocGFyc2Uoc3JjKSB8fCB7fSkuYWNjIH1cbmV4cG9ydCBmdW5jdGlvbiBwYyAoc3JjKSB7IHJldHVybiAocGFyc2Uoc3JjKSB8fCB7fSkucGMgfVxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXAgKHNyYykgeyByZXR1cm4gKHBhcnNlKHNyYykgfHwge30pLnN0ZXAgfVxuZXhwb3J0IGZ1bmN0aW9uIGFsdCAoc3JjKSB7IHJldHVybiAocGFyc2Uoc3JjKSB8fCB7fSkuYWx0IH1cbmV4cG9ydCBmdW5jdGlvbiBjaHJvbWEgKHNyYykgeyByZXR1cm4gKHBhcnNlKHNyYykgfHwge30pLmNocm9tYSB9XG5leHBvcnQgZnVuY3Rpb24gb2N0IChzcmMpIHsgcmV0dXJuIChwYXJzZShzcmMpIHx8IHt9KS5vY3QgfVxuIiwgIi8qKlxuICogQSBtaWRpIG5vdGUgbnVtYmVyIGlzIGEgbnVtYmVyIHJlcHJlc2VudGF0aW9uIG9mIGEgbm90ZSBwaXRjaC4gSXQgY2FuIGJlXG4gKiBpbnRlZ2VycyBzbyBpdCdzIGVxdWFsIHRlbXBlcmVkIHR1bmVkLCBvciBmbG9hdCB0byBpbmRpY2F0ZSBpdCdzIG5vdFxuICogdHVuZWQgaW50byBlcXVhbCB0ZW1lcGVyZWQgc2NhbGUuXG4gKlxuICogVGhpcyBtb2R1bGUgY29udGFpbnMgZnVuY3Rpb25zIHRvIGNvbnZlcnQgdG8gYW5kIGZyb20gbWlkaSBub3Rlcy5cbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIG1pZGkgPSByZXF1aXJlKCd0b25hbC1taWRpJylcbiAqIG1pZGkudG9NaWRpKCdBNCcpIC8vID0+IDY5XG4gKiBtaWRpLm5vdGUoNjkpIC8vID0+ICdBNCdcbiAqIG1pZGkubm90ZSg2MSkgLy8gPT4gJ0RiNCdcbiAqIG1pZGkubm90ZSg2MSwgdHJ1ZSkgLy8gPT4gJ0MjNCdcbiAqXG4gKiBAbW9kdWxlIG1pZGlcbiAqL1xuXG5pbXBvcnQgeyBtaWRpIH0gZnJvbSAnbm90ZS1wYXJzZXInXG5cbi8qKlxuICogQ29udmVydCB0aGUgZ2l2ZW4gbm90ZSB0byBhIG1pZGkgbm90ZSBudW1iZXIuIElmIHlvdSBwYXNzIGEgbWlkaSBudW1iZXIgaXRcbiAqIHdpbGwgcmV0dXJuZWQgYXMgaXMuXG4gKlxuICogQHBhcmFtIHtBcnJheXxTdHJpbmd8TnVtYmVyfSBub3RlIC0gdGhlIG5vdGUgdG8gZ2V0IHRoZSBtaWRpIG51bWJlciBmcm9tXG4gKiBAcmV0dXJuIHtJbnRlZ2VyfSB0aGUgbWlkaSBudW1iZXIgb3IgbnVsbCBpZiBub3QgdmFsaWQgcGl0Y2hcbiAqIEBleGFtcGxlXG4gKiBtaWRpLnRvTWlkaSgnQzQnKSAvLyA9PiA2MFxuICogbWlkaS50b01pZGkoNjApIC8vID0+IDYwXG4gKiBtaWRpLnRvTWlkaSgnNjAnKSAvLyA9PiA2MFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9NaWRpICh2YWwpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSAmJiB2YWwubGVuZ3RoID09PSAyKSByZXR1cm4gdmFsWzBdICogNyArIHZhbFsxXSAqIDEyICsgMTJcbiAgcmV0dXJuIG1pZGkodmFsKVxufVxuXG52YXIgRkxBVFMgPSAnQyBEYiBEIEViIEUgRiBHYiBHIEFiIEEgQmIgQicuc3BsaXQoJyAnKVxudmFyIFNIQVJQUyA9ICdDIEMjIEQgRCMgRSBGIEYjIEcgRyMgQSBBIyBCJy5zcGxpdCgnICcpXG5cbi8qKlxuICogR2l2ZW4gYSBtaWRpIG51bWJlciwgcmV0dXJucyBhIG5vdGUgbmFtZS4gVGhlIGFsdGVyZWQgbm90ZXMgd2lsbCBoYXZlXG4gKiBmbGF0cyB1bmxlc3MgZXhwbGljaXRseSBzZXQgd2l0aCB0aGUgb3B0aW9uYWwgYHVzZVNoYXJwc2AgcGFyYW1ldGVyLlxuICpcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtJbnRlZ2VyfSBtaWRpIC0gdGhlIG1pZGkgbm90ZSBudW1iZXJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlU2hhcnBzIC0gKE9wdGlvbmFsKSBzZXQgdG8gdHJ1ZSB0byB1c2Ugc2hhcnBzIGluc3RlYWQgb2YgZmxhdHNcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIG5vdGUgbmFtZVxuICogQGV4YW1wbGVcbiAqIHZhciBtaWRpID0gcmVxdWlyZSgndG9uYWwtbWlkaScpXG4gKiBtaWRpLm5vdGUoNjEpIC8vID0+ICdEYjQnXG4gKiBtaWRpLm5vdGUoNjEsIHRydWUpIC8vID0+ICdDIzQnXG4gKiAvLyBpdCByb3VuZHMgdG8gbmVhcmVzdCBub3RlXG4gKiBtaWRpLm5vdGUoNjEuNykgLy8gPT4gJ0Q0J1xuICovXG5leHBvcnQgZnVuY3Rpb24gbm90ZSAobnVtLCBzaGFycHMpIHtcbiAgaWYgKG51bSA9PT0gdHJ1ZSB8fCBudW0gPT09IGZhbHNlKSByZXR1cm4gZnVuY3Rpb24gKG0pIHsgcmV0dXJuIG5vdGUobSwgbnVtKSB9XG4gIG51bSA9IE1hdGgucm91bmQobnVtKVxuICB2YXIgcGNzID0gc2hhcnBzID09PSB0cnVlID8gU0hBUlBTIDogRkxBVFNcbiAgdmFyIHBjID0gcGNzW251bSAlIDEyXVxuICB2YXIgbyA9IE1hdGguZmxvb3IobnVtIC8gMTIpIC0gMVxuICByZXR1cm4gcGMgKyBvXG59XG4iLCAie1xuICBcIm5hbWVcIjogXCJtaWRpLXdyaXRlci1qc1wiLFxuICBcInZlcnNpb25cIjogXCIyLjAuMVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQSBsaWJyYXJ5IHByb3ZpZGluZyBhbiBBUEkgZm9yIGdlbmVyYXRpbmcgTUlESSBmaWxlcy5cIixcbiAgXCJtYWluXCI6IFwiYnVpbGQvaW5kZXguanNcIixcbiAgXCJ0eXBlc1wiOiBcInR5cGVzLmQudHNcIixcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwidG9uYWwtbWlkaVwiOiBcIl4wLjY5LjdcIlxuICB9LFxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAYmFiZWwvY29yZVwiOiBcIl43LjkuNlwiLFxuICAgIFwiQGJhYmVsL3BsdWdpbi10cmFuc2Zvcm0tZGVzdHJ1Y3R1cmluZ1wiOiBcIl43LjkuNVwiLFxuICAgIFwiQGJhYmVsL3ByZXNldC1lbnZcIjogXCJeNy45LjZcIixcbiAgICBcIkByb2xsdXAvcGx1Z2luLWJhYmVsXCI6IFwiXjUuMC4wXCIsXG4gICAgXCJlc2xpbnRcIjogXCJeNy4wLjBcIixcbiAgICBcImVzbGludC1jb25maWctc3RhbmRhcmRcIjogXCJeMTIuMC4wXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLWltcG9ydFwiOiBcIl4yLjIwLjJcIixcbiAgICBcImVzbGludC1wbHVnaW4tbm9kZVwiOiBcIl45LjIuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1wcm9taXNlXCI6IFwiXjQuMS4xXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXN0YW5kYXJkXCI6IFwiXjQuMC4xXCIsXG4gICAgXCJqc2RvY1wiOiBcIl4zLjYuNFwiLFxuICAgIFwibWluYW1pXCI6IFwiXjEuMi4zXCIsXG4gICAgXCJtb2NoYVwiOiBcIl45LjAuMVwiLFxuICAgIFwibnljXCI6IFwiXjE1LjAuMVwiLFxuICAgIFwicm9sbHVwXCI6IFwiXjIuOS4wXCIsXG4gICAgXCJ3YXRjaFwiOiBcIl4xLjAuMlwiXG4gIH0sXG4gIFwiZGlyZWN0b3JpZXNcIjoge1xuICAgIFwibGliXCI6IFwic3JjXCIsXG4gICAgXCJleGFtcGxlXCI6IFwiZXhhbXBsZXNcIixcbiAgICBcInRlc3RcIjogXCJ0ZXN0XCJcbiAgfSxcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcImJ1aWxkXCI6IFwibWtkaXIgLXAgYnVpbGQgJiYgcm9sbHVwIC1jICYmIG5wbSBydW4gZG9jc1wiLFxuICAgIFwiZG9jc1wiOiBcIi4vbm9kZV9tb2R1bGVzLy5iaW4vanNkb2MgLXIgc3JjIFJFQURNRS5tZCAtZCAuL2RvY3MgLXQgLi9ub2RlX21vZHVsZXMvbWluYW1pXCIsXG4gICAgXCJsaW50OmpzXCI6IFwiZXNsaW50ICdzcmMvKiovKiouanMnXCIsXG4gICAgXCJwcmVwdWJsaXNoT25seVwiOiBcIm5wbSB0ZXN0XCIsXG4gICAgXCJwcmV0ZXN0XCI6IFwibnBtIHJ1biBidWlsZFwiLFxuICAgIFwidGVzdFwiOiBcIm55YyAtLXJlcG9ydGVyPXRleHQgbW9jaGEgLS1uby1jb25maWcgLS1uby1wYWNrYWdlXCIsXG4gICAgXCJ3YXRjaFwiOiBcIndhdGNoICducG0gcnVuIGJ1aWxkJyBzcmNcIixcbiAgICBcInBvc3RpbnN0YWxsXCI6IFwibm9kZSBwb3N0aW5zdGFsbC5qc1wiXG4gIH0sXG4gIFwicnVua2l0RXhhbXBsZUZpbGVuYW1lXCI6IFwicnVua2l0LmpzXCIsXG4gIFwicmVwb3NpdG9yeVwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiZ2l0XCIsXG4gICAgXCJ1cmxcIjogXCJnaXQraHR0cHM6Ly9naXRodWIuY29tL2dyaW1tZHVkZS9NaWRpV3JpdGVySlMuZ2l0XCJcbiAgfSxcbiAgXCJrZXl3b3Jkc1wiOiBbXG4gICAgXCJtaWRpXCIsXG4gICAgXCJnZW5lcmF0b3JcIixcbiAgICBcIm11c2ljXCJcbiAgXSxcbiAgXCJhdXRob3JcIjogXCJHYXJyZXR0IEdyaW1tXCIsXG4gIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICBcImJ1Z3NcIjoge1xuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2dyaW1tZHVkZS9NaWRpV3JpdGVySlMvaXNzdWVzXCJcbiAgfSxcbiAgXCJob21lcGFnZVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ncmltbWR1ZGUvTWlkaVdyaXRlckpTI3JlYWRtZVwiXG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9uYWxNaWRpID0gcmVxdWlyZSgndG9uYWwtbWlkaScpO1xuXG4vKipcbiAqIE1JREkgZmlsZSBmb3JtYXQgY29uc3RhbnRzLlxuICogQHJldHVybiB7Q29uc3RhbnRzfVxuICovXG52YXIgQ29uc3RhbnRzID0ge1xuICBWRVJTSU9OOiByZXF1aXJlKCcuLi9wYWNrYWdlLmpzb24nKS52ZXJzaW9uLFxuICBIRUFERVJfQ0hVTktfVFlQRTogWzB4NGQsIDB4NTQsIDB4NjgsIDB4NjRdLFxuICAvLyBNdGhkXG4gIEhFQURFUl9DSFVOS19MRU5HVEg6IFsweDAwLCAweDAwLCAweDAwLCAweDA2XSxcbiAgLy8gSGVhZGVyIHNpemUgZm9yIFNNRlxuICBIRUFERVJfQ0hVTktfRk9STUFUMDogWzB4MDAsIDB4MDBdLFxuICAvLyBNaWRpIFR5cGUgMCBpZFxuICBIRUFERVJfQ0hVTktfRk9STUFUMTogWzB4MDAsIDB4MDFdLFxuICAvLyBNaWRpIFR5cGUgMSBpZFxuICBIRUFERVJfQ0hVTktfRElWSVNJT046IFsweDAwLCAweDgwXSxcbiAgLy8gRGVmYXVsdHMgdG8gMTI4IHRpY2tzIHBlciBiZWF0XG4gIFRSQUNLX0NIVU5LX1RZUEU6IFsweDRkLCAweDU0LCAweDcyLCAweDZiXSxcbiAgLy8gTVRyayxcbiAgTUVUQV9FVkVOVF9JRDogMHhGRixcbiAgTUVUQV9URVhUX0lEOiAweDAxLFxuICBNRVRBX0NPUFlSSUdIVF9JRDogMHgwMixcbiAgTUVUQV9UUkFDS19OQU1FX0lEOiAweDAzLFxuICBNRVRBX0lOU1RSVU1FTlRfTkFNRV9JRDogMHgwNCxcbiAgTUVUQV9MWVJJQ19JRDogMHgwNSxcbiAgTUVUQV9NQVJLRVJfSUQ6IDB4MDYsXG4gIE1FVEFfQ1VFX1BPSU5UOiAweDA3LFxuICBNRVRBX1RFTVBPX0lEOiAweDUxLFxuICBNRVRBX1NNVFBFX09GRlNFVDogMHg1NCxcbiAgTUVUQV9USU1FX1NJR05BVFVSRV9JRDogMHg1OCxcbiAgTUVUQV9LRVlfU0lHTkFUVVJFX0lEOiAweDU5LFxuICBNRVRBX0VORF9PRl9UUkFDS19JRDogWzB4MkYsIDB4MDBdLFxuICBDT05UUk9MTEVSX0NIQU5HRV9TVEFUVVM6IDB4QjAsXG4gIC8vIGluY2x1ZGVzIGNoYW5uZWwgbnVtYmVyICgwKVxuICBQUk9HUkFNX0NIQU5HRV9TVEFUVVM6IDB4QzAsXG4gIC8vIGluY2x1ZGVzIGNoYW5uZWwgbnVtYmVyICgwKVxuICBQSVRDSF9CRU5EX1NUQVRVUzogMHhFMCAvLyBpbmNsdWRlcyBjaGFubmVsIG51bWJlciAoMClcblxufTtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxuZnVuY3Rpb24gX3dyYXBSZWdFeHAoKSB7XG4gIF93cmFwUmVnRXhwID0gZnVuY3Rpb24gKHJlLCBncm91cHMpIHtcbiAgICByZXR1cm4gbmV3IEJhYmVsUmVnRXhwKHJlLCB1bmRlZmluZWQsIGdyb3Vwcyk7XG4gIH07XG5cbiAgdmFyIF9zdXBlciA9IFJlZ0V4cC5wcm90b3R5cGU7XG5cbiAgdmFyIF9ncm91cHMgPSBuZXcgV2Vha01hcCgpO1xuXG4gIGZ1bmN0aW9uIEJhYmVsUmVnRXhwKHJlLCBmbGFncywgZ3JvdXBzKSB7XG4gICAgdmFyIF90aGlzID0gbmV3IFJlZ0V4cChyZSwgZmxhZ3MpO1xuXG4gICAgX2dyb3Vwcy5zZXQoX3RoaXMsIGdyb3VwcyB8fCBfZ3JvdXBzLmdldChyZSkpO1xuXG4gICAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihfdGhpcywgQmFiZWxSZWdFeHAucHJvdG90eXBlKTtcbiAgfVxuXG4gIF9pbmhlcml0cyhCYWJlbFJlZ0V4cCwgUmVnRXhwKTtcblxuICBCYWJlbFJlZ0V4cC5wcm90b3R5cGUuZXhlYyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICB2YXIgcmVzdWx0ID0gX3N1cGVyLmV4ZWMuY2FsbCh0aGlzLCBzdHIpO1xuXG4gICAgaWYgKHJlc3VsdCkgcmVzdWx0Lmdyb3VwcyA9IGJ1aWxkR3JvdXBzKHJlc3VsdCwgdGhpcyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBCYWJlbFJlZ0V4cC5wcm90b3R5cGVbU3ltYm9sLnJlcGxhY2VdID0gZnVuY3Rpb24gKHN0ciwgc3Vic3RpdHV0aW9uKSB7XG4gICAgaWYgKHR5cGVvZiBzdWJzdGl0dXRpb24gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHZhciBncm91cHMgPSBfZ3JvdXBzLmdldCh0aGlzKTtcblxuICAgICAgcmV0dXJuIF9zdXBlcltTeW1ib2wucmVwbGFjZV0uY2FsbCh0aGlzLCBzdHIsIHN1YnN0aXR1dGlvbi5yZXBsYWNlKC9cXCQ8KFtePl0rKT4vZywgZnVuY3Rpb24gKF8sIG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIFwiJFwiICsgZ3JvdXBzW25hbWVdO1xuICAgICAgfSkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHN1YnN0aXR1dGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gX3N1cGVyW1N5bWJvbC5yZXBsYWNlXS5jYWxsKHRoaXMsIHN0ciwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcblxuICAgICAgICBpZiAodHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3MpO1xuICAgICAgICAgIGFyZ3MucHVzaChidWlsZEdyb3VwcyhhcmdzLCBfdGhpcykpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1YnN0aXR1dGlvbi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gX3N1cGVyW1N5bWJvbC5yZXBsYWNlXS5jYWxsKHRoaXMsIHN0ciwgc3Vic3RpdHV0aW9uKTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gYnVpbGRHcm91cHMocmVzdWx0LCByZSkge1xuICAgIHZhciBnID0gX2dyb3Vwcy5nZXQocmUpO1xuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGcpLnJlZHVjZShmdW5jdGlvbiAoZ3JvdXBzLCBuYW1lKSB7XG4gICAgICBncm91cHNbbmFtZV0gPSByZXN1bHRbZ1tuYW1lXV07XG4gICAgICByZXR1cm4gZ3JvdXBzO1xuICAgIH0sIE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICB9XG5cbiAgcmV0dXJuIF93cmFwUmVnRXhwLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbi8qKlxuICogU3RhdGljIHV0aWxpdHkgZnVuY3Rpb25zIHVzZWQgdGhyb3VnaG91dCB0aGUgbGlicmFyeS5cbiAqL1xuXG52YXIgVXRpbHMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBVdGlscygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVXRpbHMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFV0aWxzLCBudWxsLCBbe1xuICAgIGtleTogXCJ2ZXJzaW9uXCIsXG4gICAgdmFsdWU6XG4gICAgLyoqXG4gICAgICogR2V0cyBNaWRpV3JpdGVySlMgdmVyc2lvbiBudW1iZXIuXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHZlcnNpb24oKSB7XG4gICAgICByZXR1cm4gQ29uc3RhbnRzLlZFUlNJT047XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnQgYSBzdHJpbmcgdG8gYW4gYXJyYXkgb2YgYnl0ZXNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gICAgICogQHJldHVybiB7YXJyYXl9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzdHJpbmdUb0J5dGVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0cmluZ1RvQnl0ZXMoc3RyaW5nKSB7XG4gICAgICByZXR1cm4gc3RyaW5nLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24gKF9jaGFyKSB7XG4gICAgICAgIHJldHVybiBfY2hhci5jaGFyQ29kZUF0KCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIGFyZ3VtZW50IGlzIGEgdmFsaWQgbnVtYmVyLlxuICAgICAqIEBwYXJhbSB7Kn0gbiAtIFZhbHVlIHRvIGNoZWNrXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImlzTnVtZXJpY1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc051bWVyaWMobikge1xuICAgICAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KG4pKSAmJiBpc0Zpbml0ZShuKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY29ycmVjdCBNSURJIG51bWJlciBmb3IgdGhlIHNwZWNpZmllZCBwaXRjaC5cbiAgICAgKiBVc2VzIFRvbmFsIE1pZGkgLSBodHRwczovL2dpdGh1Yi5jb20vZGFuaWdiL3RvbmFsL3RyZWUvbWFzdGVyL3BhY2thZ2VzL21pZGlcbiAgICAgKiBAcGFyYW0geyhzdHJpbmd8bnVtYmVyKX0gcGl0Y2ggLSAnQyM0JyBvciBtaWRpIG5vdGUgY29kZVxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFBpdGNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFBpdGNoKHBpdGNoKSB7XG4gICAgICByZXR1cm4gdG9uYWxNaWRpLnRvTWlkaShwaXRjaCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRyYW5zbGF0ZXMgbnVtYmVyIG9mIHRpY2tzIHRvIE1JREkgdGltZXN0YW1wIGZvcm1hdCwgcmV0dXJuaW5nIGFuIGFycmF5IG9mXG4gICAgICogaGV4IHN0cmluZ3Mgd2l0aCB0aGUgdGltZSB2YWx1ZXMuIE1pZGkgaGFzIGEgdmVyeSBwYXJ0aWN1bGFyIHRpbWUgdG8gZXhwcmVzcyB0aW1lLFxuICAgICAqIHRha2UgYSBnb29kIGxvb2sgYXQgdGhlIHNwZWMgYmVmb3JlIGV2ZXIgdG91Y2hpbmcgdGhpcyBmdW5jdGlvbi5cbiAgICAgKiBUaGFua3MgdG8gaHR0cHM6Ly9naXRodWIuY29tL3NlcmdpL2pzbWlkaVxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpY2tzIC0gTnVtYmVyIG9mIHRpY2tzIHRvIGJlIHRyYW5zbGF0ZWRcbiAgICAgKiBAcmV0dXJuIHthcnJheX0gLSBCeXRlcyB0aGF0IGZvcm0gdGhlIE1JREkgdGltZSB2YWx1ZVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibnVtYmVyVG9WYXJpYWJsZUxlbmd0aFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBudW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRpY2tzKSB7XG4gICAgICB0aWNrcyA9IE1hdGgucm91bmQodGlja3MpO1xuICAgICAgdmFyIGJ1ZmZlciA9IHRpY2tzICYgMHg3RjtcblxuICAgICAgd2hpbGUgKHRpY2tzID0gdGlja3MgPj4gNykge1xuICAgICAgICBidWZmZXIgPDw9IDg7XG4gICAgICAgIGJ1ZmZlciB8PSB0aWNrcyAmIDB4N0YgfCAweDgwO1xuICAgICAgfVxuXG4gICAgICB2YXIgYkxpc3QgPSBbXTtcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgYkxpc3QucHVzaChidWZmZXIgJiAweGZmKTtcbiAgICAgICAgaWYgKGJ1ZmZlciAmIDB4ODApIGJ1ZmZlciA+Pj0gODtlbHNlIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYkxpc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvdW50cyBudW1iZXIgb2YgYnl0ZXMgaW4gc3RyaW5nXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNcbiAgICAgKiBAcmV0dXJuIHthcnJheX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInN0cmluZ0J5dGVDb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdHJpbmdCeXRlQ291bnQocykge1xuICAgICAgcmV0dXJuIGVuY29kZVVSSShzKS5zcGxpdCgvJS4ufC4vKS5sZW5ndGggLSAxO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgYW4gaW50IGZyb20gYW4gYXJyYXkgb2YgYnl0ZXMuXG4gICAgICogQHBhcmFtIHthcnJheX0gYnl0ZXNcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJudW1iZXJGcm9tQnl0ZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbnVtYmVyRnJvbUJ5dGVzKGJ5dGVzKSB7XG4gICAgICB2YXIgaGV4ID0gJyc7XG4gICAgICB2YXIgc3RyaW5nUmVzdWx0O1xuICAgICAgYnl0ZXMuZm9yRWFjaChmdW5jdGlvbiAoX2J5dGUpIHtcbiAgICAgICAgc3RyaW5nUmVzdWx0ID0gX2J5dGUudG9TdHJpbmcoMTYpOyAvLyBlbnN1cmUgc3RyaW5nIGlzIDIgY2hhcnNcblxuICAgICAgICBpZiAoc3RyaW5nUmVzdWx0Lmxlbmd0aCA9PSAxKSBzdHJpbmdSZXN1bHQgPSBcIjBcIiArIHN0cmluZ1Jlc3VsdDtcbiAgICAgICAgaGV4ICs9IHN0cmluZ1Jlc3VsdDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHBhcnNlSW50KGhleCwgMTYpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUYWtlcyBhIG51bWJlciBhbmQgc3BsaXRzIGl0IHVwIGludG8gYW4gYXJyYXkgb2YgYnl0ZXMuICBDYW4gYmUgcGFkZGVkIGJ5IHBhc3NpbmcgYSBudW1iZXIgdG8gYnl0ZXNOZWVkZWRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGJ5dGVzTmVlZGVkXG4gICAgICogQHJldHVybiB7YXJyYXl9IC0gQXJyYXkgb2YgYnl0ZXNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm51bWJlclRvQnl0ZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbnVtYmVyVG9CeXRlcyhudW1iZXIsIGJ5dGVzTmVlZGVkKSB7XG4gICAgICBieXRlc05lZWRlZCA9IGJ5dGVzTmVlZGVkIHx8IDE7XG4gICAgICB2YXIgaGV4U3RyaW5nID0gbnVtYmVyLnRvU3RyaW5nKDE2KTtcblxuICAgICAgaWYgKGhleFN0cmluZy5sZW5ndGggJiAxKSB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSBoZXggc3RyaW5nIGlzIGV2ZW4gbnVtYmVyIG9mIGNoYXJzXG4gICAgICAgIGhleFN0cmluZyA9ICcwJyArIGhleFN0cmluZztcbiAgICAgIH0gLy8gU3BsaXQgaGV4IHN0cmluZyBpbnRvIGFuIGFycmF5IG9mIHR3byBjaGFyIGVsZW1lbnRzXG5cblxuICAgICAgdmFyIGhleEFycmF5ID0gaGV4U3RyaW5nLm1hdGNoKC8uezJ9L2cpOyAvLyBOb3cgcGFyc2UgdGhlbSBvdXQgYXMgaW50ZWdlcnNcblxuICAgICAgaGV4QXJyYXkgPSBoZXhBcnJheS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGl0ZW0sIDE2KTtcbiAgICAgIH0pOyAvLyBQcmVwZW5kIGVtcHR5IGJ5dGVzIGlmIHdlIGRvbid0IGhhdmUgZW5vdWdoXG5cbiAgICAgIGlmIChoZXhBcnJheS5sZW5ndGggPCBieXRlc05lZWRlZCkge1xuICAgICAgICB3aGlsZSAoYnl0ZXNOZWVkZWQgLSBoZXhBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaGV4QXJyYXkudW5zaGlmdCgwKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaGV4QXJyYXk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIHZhbHVlIHRvIGFycmF5IGlmIG5lZWRlZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHthcnJheX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInRvQXJyYXlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9BcnJheSh2YWx1ZSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgICByZXR1cm4gW3ZhbHVlXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgdmVsb2NpdHkgdG8gdmFsdWUgMC0xMjdcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmVsb2NpdHkgLSBWZWxvY2l0eSB2YWx1ZSAxLTEwMFxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNvbnZlcnRWZWxvY2l0eVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb252ZXJ0VmVsb2NpdHkodmVsb2NpdHkpIHtcbiAgICAgIC8vIE1heCBwYXNzZWQgdmFsdWUgbGltaXRlZCB0byAxMDBcbiAgICAgIHZlbG9jaXR5ID0gdmVsb2NpdHkgPiAxMDAgPyAxMDAgOiB2ZWxvY2l0eTtcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKHZlbG9jaXR5IC8gMTAwICogMTI3KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgdG90YWwgbnVtYmVyIG9mIHRpY2tzIG9mIGEgc3BlY2lmaWVkIGR1cmF0aW9uLlxuICAgICAqIE5vdGU6IHR5cGU9PSdub3RlJyBkZWZhdWx0cyB0byBxdWFydGVyIG5vdGUsIHR5cGU9PT0ncmVzdCcgZGVmYXVsdHMgdG8gMFxuICAgICAqIEBwYXJhbSB7KHN0cmluZ3xhcnJheSl9IGR1cmF0aW9uXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0VGlja0R1cmF0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRpY2tEdXJhdGlvbihkdXJhdGlvbikge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZHVyYXRpb24pKSB7XG4gICAgICAgIC8vIFJlY3Vyc2l2ZWx5IGV4ZWN1dGUgdGhpcyBtZXRob2QgZm9yIGVhY2ggaXRlbSBpbiB0aGUgYXJyYXkgYW5kIHJldHVybiB0aGUgc3VtIG9mIHRpY2sgZHVyYXRpb25zLlxuICAgICAgICByZXR1cm4gZHVyYXRpb24ubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBVdGlscy5nZXRUaWNrRHVyYXRpb24odmFsdWUpO1xuICAgICAgICB9KS5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICByZXR1cm4gYSArIGI7XG4gICAgICAgIH0sIDApO1xuICAgICAgfVxuXG4gICAgICBkdXJhdGlvbiA9IGR1cmF0aW9uLnRvU3RyaW5nKCk7XG5cbiAgICAgIGlmIChkdXJhdGlvbi50b0xvd2VyQ2FzZSgpLmNoYXJBdCgwKSA9PT0gJ3QnKSB7XG4gICAgICAgIC8vIElmIGR1cmF0aW9uIHN0YXJ0cyB3aXRoICd0JyB0aGVuIHRoZSBudW1iZXIgdGhhdCBmb2xsb3dzIGlzIGFuIGV4cGxpY2l0IHRpY2sgY291bnRcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGR1cmF0aW9uLnN1YnN0cmluZygxKSk7XG4gICAgICB9IC8vIE5lZWQgdG8gYXBwbHkgZHVyYXRpb24gaGVyZS4gIFF1YXJ0ZXIgbm90ZSA9PSBDb25zdGFudHMuSEVBREVSX0NIVU5LX0RJVklTSU9OXG5cblxuICAgICAgdmFyIHF1YXJ0ZXJUaWNrcyA9IFV0aWxzLm51bWJlckZyb21CeXRlcyhDb25zdGFudHMuSEVBREVSX0NIVU5LX0RJVklTSU9OKTtcbiAgICAgIHZhciB0aWNrRHVyYXRpb24gPSBxdWFydGVyVGlja3MgKiBVdGlscy5nZXREdXJhdGlvbk11bHRpcGxpZXIoZHVyYXRpb24pO1xuICAgICAgcmV0dXJuIFV0aWxzLmdldFJvdW5kZWRJZkNsb3NlKHRpY2tEdXJhdGlvbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIER1ZSB0byByb3VuZGluZyBlcnJvcnMgaW4gSmF2YVNjcmlwdCBlbmdpbmVzLFxuICAgICAqIGl0J3Mgc2FmZSB0byByb3VuZCB3aGVuIHdlJ3JlIHZlcnkgY2xvc2UgdG8gdGhlIGFjdHVhbCB0aWNrIG51bWJlclxuICAgICAqXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aWNrXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Um91bmRlZElmQ2xvc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Um91bmRlZElmQ2xvc2UodGljaykge1xuICAgICAgdmFyIHJvdW5kZWRUaWNrID0gTWF0aC5yb3VuZCh0aWNrKTtcbiAgICAgIHJldHVybiBNYXRoLmFicyhyb3VuZGVkVGljayAtIHRpY2spIDwgMC4wMDAwMDEgPyByb3VuZGVkVGljayA6IHRpY2s7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIER1ZSB0byBsb3cgcHJlY2lzaW9uIG9mIE1JREksXG4gICAgICogd2UgbmVlZCB0byBrZWVwIHRyYWNrIG9mIHJvdW5kaW5nIGVycm9ycyBpbiBkZWx0YXMuXG4gICAgICogVGhpcyBmdW5jdGlvbiB3aWxsIGNhbGN1bGF0ZSB0aGUgcm91bmRpbmcgZXJyb3IgZm9yIGEgZ2l2ZW4gZHVyYXRpb24uXG4gICAgICpcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpY2tcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRQcmVjaXNpb25Mb3NzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFByZWNpc2lvbkxvc3ModGljaykge1xuICAgICAgdmFyIHJvdW5kZWRUaWNrID0gTWF0aC5yb3VuZCh0aWNrKTtcbiAgICAgIHJldHVybiByb3VuZGVkVGljayAtIHRpY2s7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgd2hhdCB0byBtdWx0aXBsZSB0aWNrcy9xdWFydGVyIG5vdGUgYnkgdG8gZ2V0IHRoZSBzcGVjaWZpZWQgZHVyYXRpb24uXG4gICAgICogTm90ZTogdHlwZT09J25vdGUnIGRlZmF1bHRzIHRvIHF1YXJ0ZXIgbm90ZSwgdHlwZT09PSdyZXN0JyBkZWZhdWx0cyB0byAwXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGR1cmF0aW9uXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0RHVyYXRpb25NdWx0aXBsaWVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldER1cmF0aW9uTXVsdGlwbGllcihkdXJhdGlvbikge1xuICAgICAgLy8gTmVlZCB0byBhcHBseSBkdXJhdGlvbiBoZXJlLlxuICAgICAgLy8gUXVhcnRlciBub3RlID09IENvbnN0YW50cy5IRUFERVJfQ0hVTktfRElWSVNJT04gdGlja3MuXG4gICAgICBpZiAoZHVyYXRpb24gPT09ICcwJykgcmV0dXJuIDA7XG4gICAgICB2YXIgbWF0Y2ggPSBkdXJhdGlvbi5tYXRjaCggLyojX19QVVJFX18qL193cmFwUmVnRXhwKC9eKGQrKT8oWzAtOV0rKSg/OnQoWzAtOV0qKSk/Lywge1xuICAgICAgICBkb3R0ZWQ6IDEsXG4gICAgICAgIGJhc2U6IDIsXG4gICAgICAgIHR1cGxldDogM1xuICAgICAgfSkpO1xuXG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgdmFyIGJhc2UgPSBOdW1iZXIobWF0Y2guZ3JvdXBzLmJhc2UpOyAvLyAxIG9yIGFueSBwb3dlciBvZiB0d286XG5cbiAgICAgICAgdmFyIGlzVmFsaWRCYXNlID0gYmFzZSA9PT0gMSB8fCAoYmFzZSAmIGJhc2UgLSAxKSA9PT0gMDtcblxuICAgICAgICBpZiAoaXNWYWxpZEJhc2UpIHtcbiAgICAgICAgICAvLyBob3cgbXVjaCBmYXN0ZXIgb3Igc2xvd2VyIGlzIHRoaXMgbm90ZSBjb21wYXJlZCB0byBhIHF1YXJ0ZXI/XG4gICAgICAgICAgdmFyIHJhdGlvID0gYmFzZSAvIDQ7XG4gICAgICAgICAgdmFyIGR1cmF0aW9uSW5RdWFydGVycyA9IDEgLyByYXRpbztcbiAgICAgICAgICB2YXIgX21hdGNoJGdyb3VwcyA9IG1hdGNoLmdyb3VwcyxcbiAgICAgICAgICAgICAgZG90dGVkID0gX21hdGNoJGdyb3Vwcy5kb3R0ZWQsXG4gICAgICAgICAgICAgIHR1cGxldCA9IF9tYXRjaCRncm91cHMudHVwbGV0O1xuXG4gICAgICAgICAgaWYgKGRvdHRlZCkge1xuICAgICAgICAgICAgdmFyIHRoaXNNYW55RG90cyA9IGRvdHRlZC5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgZGl2aXNvciA9IE1hdGgucG93KDIsIHRoaXNNYW55RG90cyk7XG4gICAgICAgICAgICBkdXJhdGlvbkluUXVhcnRlcnMgPSBkdXJhdGlvbkluUXVhcnRlcnMgKyBkdXJhdGlvbkluUXVhcnRlcnMgKiAoKGRpdmlzb3IgLSAxKSAvIGRpdmlzb3IpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2YgdHVwbGV0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFyIGZpdEludG8gPSBkdXJhdGlvbkluUXVhcnRlcnMgKiAyOyAvLyBkZWZhdWx0IHRvIHRyaXBsZXQ6XG5cbiAgICAgICAgICAgIHZhciB0aGlzTWFueU5vdGVzID0gTnVtYmVyKHR1cGxldCB8fCAnMycpO1xuICAgICAgICAgICAgZHVyYXRpb25JblF1YXJ0ZXJzID0gZml0SW50byAvIHRoaXNNYW55Tm90ZXM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGR1cmF0aW9uSW5RdWFydGVycztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZHVyYXRpb24gKyAnIGlzIG5vdCBhIHZhbGlkIGR1cmF0aW9uLicpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBVdGlscztcbn0oKTtcblxuLyoqXG4gKiBIb2xkcyBhbGwgZGF0YSBmb3IgYSBcIm5vdGUgb25cIiBNSURJIGV2ZW50XG4gKiBAcGFyYW0ge29iamVjdH0gZmllbGRzIHtkYXRhOiBbXX1cbiAqIEByZXR1cm4ge05vdGVPbkV2ZW50fVxuICovXG5cbnZhciBOb3RlT25FdmVudCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE5vdGVPbkV2ZW50KGZpZWxkcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb3RlT25FdmVudCk7XG5cbiAgICAvLyBTZXQgZGVmYXVsdCBmaWVsZHNcbiAgICBmaWVsZHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNoYW5uZWw6IDEsXG4gICAgICBzdGFydFRpY2s6IG51bGwsXG4gICAgICB2ZWxvY2l0eTogNTAsXG4gICAgICB3YWl0OiAwXG4gICAgfSwgZmllbGRzKTtcbiAgICB0aGlzLnR5cGUgPSAnbm90ZS1vbic7XG4gICAgdGhpcy5jaGFubmVsID0gZmllbGRzLmNoYW5uZWw7XG4gICAgdGhpcy5waXRjaCA9IGZpZWxkcy5waXRjaDtcbiAgICB0aGlzLndhaXQgPSBmaWVsZHMud2FpdDtcbiAgICB0aGlzLnZlbG9jaXR5ID0gZmllbGRzLnZlbG9jaXR5O1xuICAgIHRoaXMuc3RhcnRUaWNrID0gZmllbGRzLnN0YXJ0VGljaztcbiAgICB0aGlzLm1pZGlOdW1iZXIgPSBVdGlscy5nZXRQaXRjaCh0aGlzLnBpdGNoKTtcbiAgICB0aGlzLnRpY2sgPSBudWxsO1xuICAgIHRoaXMuZGVsdGEgPSBudWxsO1xuICAgIHRoaXMuZGF0YSA9IGZpZWxkcy5kYXRhO1xuICB9XG4gIC8qKlxuICAgKiBCdWlsZHMgaW50IGFycmF5IGZvciB0aGlzIGV2ZW50LlxuICAgKiBAcGFyYW0ge1RyYWNrfSB0cmFjayAtIHBhcmVudCB0cmFja1xuICAgKiBAcmV0dXJuIHtOb3RlT25FdmVudH1cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoTm90ZU9uRXZlbnQsIFt7XG4gICAga2V5OiBcImJ1aWxkRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBidWlsZERhdGEodHJhY2ssIHByZWNpc2lvbkRlbHRhKSB7XG4gICAgICB0aGlzLmRhdGEgPSBbXTsgLy8gRXhwbGljaXRseSBkZWZpbmVkIHN0YXJ0VGljayBldmVudFxuXG4gICAgICBpZiAodGhpcy5zdGFydFRpY2spIHtcbiAgICAgICAgdGhpcy50aWNrID0gVXRpbHMuZ2V0Um91bmRlZElmQ2xvc2UodGhpcy5zdGFydFRpY2spOyAvLyBJZiB0aGlzIGlzIHRoZSBmaXJzdCBldmVudCBpbiB0aGUgdHJhY2sgdGhlbiB1c2UgZXZlbnQncyBzdGFydGluZyB0aWNrIGFzIGRlbHRhLlxuXG4gICAgICAgIGlmICh0cmFjay50aWNrUG9pbnRlciA9PSAwKSB7XG4gICAgICAgICAgdGhpcy5kZWx0YSA9IHRoaXMudGljaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kZWx0YSA9IFV0aWxzLmdldFRpY2tEdXJhdGlvbih0aGlzLndhaXQpO1xuICAgICAgICB0aGlzLnRpY2sgPSBVdGlscy5nZXRSb3VuZGVkSWZDbG9zZSh0cmFjay50aWNrUG9pbnRlciArIHRoaXMuZGVsdGEpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRlbHRhV2l0aFByZWNpc2lvbkNvcnJlY3Rpb24gPSBVdGlscy5nZXRSb3VuZGVkSWZDbG9zZSh0aGlzLmRlbHRhIC0gcHJlY2lzaW9uRGVsdGEpO1xuICAgICAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0aGlzLmRlbHRhV2l0aFByZWNpc2lvbkNvcnJlY3Rpb24pLmNvbmNhdCh0aGlzLmdldFN0YXR1c0J5dGUoKSwgdGhpcy5taWRpTnVtYmVyLCBVdGlscy5jb252ZXJ0VmVsb2NpdHkodGhpcy52ZWxvY2l0eSkpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIG5vdGUgb24gc3RhdHVzIGNvZGUgYmFzZWQgb24gdGhlIHNlbGVjdGVkIGNoYW5uZWwuIDB4OXswLUZ9XG4gICAgICogTm90ZSBvbiBhdCBjaGFubmVsIDAgaXMgMHg5MCAoMTQ0KVxuICAgICAqIDAgPSBDaCAxXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U3RhdHVzQnl0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTdGF0dXNCeXRlKCkge1xuICAgICAgcmV0dXJuIDE0NCArIHRoaXMuY2hhbm5lbCAtIDE7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE5vdGVPbkV2ZW50O1xufSgpO1xuXG4vKipcbiAqIEhvbGRzIGFsbCBkYXRhIGZvciBhIFwibm90ZSBvZmZcIiBNSURJIGV2ZW50XG4gKiBAcGFyYW0ge29iamVjdH0gZmllbGRzIHtkYXRhOiBbXX1cbiAqIEByZXR1cm4ge05vdGVPZmZFdmVudH1cbiAqL1xuXG52YXIgTm90ZU9mZkV2ZW50ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTm90ZU9mZkV2ZW50KGZpZWxkcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb3RlT2ZmRXZlbnQpO1xuXG4gICAgLy8gU2V0IGRlZmF1bHQgZmllbGRzXG4gICAgZmllbGRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjaGFubmVsOiAxLFxuICAgICAgdmVsb2NpdHk6IDUwLFxuICAgICAgdGljazogbnVsbFxuICAgIH0sIGZpZWxkcyk7XG4gICAgdGhpcy50eXBlID0gJ25vdGUtb2ZmJztcbiAgICB0aGlzLmNoYW5uZWwgPSBmaWVsZHMuY2hhbm5lbDtcbiAgICB0aGlzLnBpdGNoID0gZmllbGRzLnBpdGNoO1xuICAgIHRoaXMuZHVyYXRpb24gPSBmaWVsZHMuZHVyYXRpb247XG4gICAgdGhpcy52ZWxvY2l0eSA9IGZpZWxkcy52ZWxvY2l0eTtcbiAgICB0aGlzLm1pZGlOdW1iZXIgPSBVdGlscy5nZXRQaXRjaCh0aGlzLnBpdGNoKTtcbiAgICB0aGlzLnRpY2sgPSBmaWVsZHMudGljaztcbiAgICB0aGlzLmRlbHRhID0gVXRpbHMuZ2V0VGlja0R1cmF0aW9uKHRoaXMuZHVyYXRpb24pO1xuICAgIHRoaXMuZGF0YSA9IGZpZWxkcy5kYXRhO1xuICB9XG4gIC8qKlxuICAgKiBCdWlsZHMgaW50IGFycmF5IGZvciB0aGlzIGV2ZW50LlxuICAgKiBAcGFyYW0ge1RyYWNrfSB0cmFjayAtIHBhcmVudCB0cmFja1xuICAgKiBAcmV0dXJuIHtOb3RlT2ZmRXZlbnR9XG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKE5vdGVPZmZFdmVudCwgW3tcbiAgICBrZXk6IFwiYnVpbGREYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJ1aWxkRGF0YSh0cmFjaywgcHJlY2lzaW9uRGVsdGEpIHtcbiAgICAgIGlmICh0aGlzLnRpY2sgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy50aWNrID0gVXRpbHMuZ2V0Um91bmRlZElmQ2xvc2UodGhpcy5kZWx0YSArIHRyYWNrLnRpY2tQb2ludGVyKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kZWx0YVdpdGhQcmVjaXNpb25Db3JyZWN0aW9uID0gVXRpbHMuZ2V0Um91bmRlZElmQ2xvc2UodGhpcy5kZWx0YSAtIHByZWNpc2lvbkRlbHRhKTtcbiAgICAgIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgodGhpcy5kZWx0YVdpdGhQcmVjaXNpb25Db3JyZWN0aW9uKS5jb25jYXQodGhpcy5nZXRTdGF0dXNCeXRlKCksIHRoaXMubWlkaU51bWJlciwgVXRpbHMuY29udmVydFZlbG9jaXR5KHRoaXMudmVsb2NpdHkpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBub3RlIG9mZiBzdGF0dXMgY29kZSBiYXNlZCBvbiB0aGUgc2VsZWN0ZWQgY2hhbm5lbC4gMHg4ezAtRn1cbiAgICAgKiBOb3RlIG9mZiBhdCBjaGFubmVsIDAgaXMgMHg4MCAoMTI4KVxuICAgICAqIDAgPSBDaCAxXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U3RhdHVzQnl0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTdGF0dXNCeXRlKCkge1xuICAgICAgcmV0dXJuIDEyOCArIHRoaXMuY2hhbm5lbCAtIDE7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE5vdGVPZmZFdmVudDtcbn0oKTtcblxuLyoqXG4gKiBXcmFwcGVyIGZvciBub3RlT25FdmVudC9ub3RlT2ZmRXZlbnQgb2JqZWN0cyB0aGF0IGJ1aWxkcyBib3RoIGV2ZW50cy5cbiAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZHMgLSB7cGl0Y2g6ICdbQzRdJywgZHVyYXRpb246ICc0Jywgd2FpdDogJzQnLCB2ZWxvY2l0eTogMS0xMDB9XG4gKiBAcmV0dXJuIHtOb3RlRXZlbnR9XG4gKi9cblxudmFyIE5vdGVFdmVudCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE5vdGVFdmVudChmaWVsZHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTm90ZUV2ZW50KTtcblxuICAgIC8vIFNldCBkZWZhdWx0IGZpZWxkc1xuICAgIGZpZWxkcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2hhbm5lbDogMSxcbiAgICAgIHJlcGVhdDogMSxcbiAgICAgIHNlcXVlbnRpYWw6IGZhbHNlLFxuICAgICAgc3RhcnRUaWNrOiBudWxsLFxuICAgICAgdmVsb2NpdHk6IDUwLFxuICAgICAgd2FpdDogMFxuICAgIH0sIGZpZWxkcyk7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgdGhpcy50eXBlID0gJ25vdGUnO1xuICAgIHRoaXMucGl0Y2ggPSBVdGlscy50b0FycmF5KGZpZWxkcy5waXRjaCk7XG4gICAgdGhpcy5jaGFubmVsID0gZmllbGRzLmNoYW5uZWw7XG4gICAgdGhpcy5kdXJhdGlvbiA9IGZpZWxkcy5kdXJhdGlvbjtcbiAgICB0aGlzLmdyYWNlID0gZmllbGRzLmdyYWNlO1xuICAgIHRoaXMucmVwZWF0ID0gZmllbGRzLnJlcGVhdDtcbiAgICB0aGlzLnNlcXVlbnRpYWwgPSBmaWVsZHMuc2VxdWVudGlhbDtcbiAgICB0aGlzLnN0YXJ0VGljayA9IGZpZWxkcy5zdGFydFRpY2s7XG4gICAgdGhpcy52ZWxvY2l0eSA9IGZpZWxkcy52ZWxvY2l0eTtcbiAgICB0aGlzLndhaXQgPSBmaWVsZHMud2FpdDtcbiAgICB0aGlzLnRpY2tEdXJhdGlvbiA9IFV0aWxzLmdldFRpY2tEdXJhdGlvbih0aGlzLmR1cmF0aW9uKTtcbiAgICB0aGlzLnJlc3REdXJhdGlvbiA9IFV0aWxzLmdldFRpY2tEdXJhdGlvbih0aGlzLndhaXQpO1xuICAgIHRoaXMuZXZlbnRzID0gW107IC8vIEhvbGQgYWN0dWFsIE5vdGVPbi9Ob3RlT2ZmIGV2ZW50c1xuICB9XG4gIC8qKlxuICAgKiBCdWlsZHMgaW50IGFycmF5IGZvciB0aGlzIGV2ZW50LlxuICAgKiBAcmV0dXJuIHtOb3RlRXZlbnR9XG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKE5vdGVFdmVudCwgW3tcbiAgICBrZXk6IFwiYnVpbGREYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJ1aWxkRGF0YSgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIC8vIFJlc2V0IGRhdGEgYXJyYXlcbiAgICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICAgdGhpcy50aWNrRHVyYXRpb247XG4gICAgICB0aGlzLnJlc3REdXJhdGlvbjsgLy8gQXBwbHkgZ3JhY2Ugbm90ZShzKSBhbmQgc3VidHJhY3QgdGlja3MgKGN1cnJlbnRseSAxIHRpY2sgcGVyIGdyYWNlIG5vdGUpIGZyb20gdGlja0R1cmF0aW9uIHNvIG5ldCB2YWx1ZSBpcyB0aGUgc2FtZVxuXG4gICAgICBpZiAodGhpcy5ncmFjZSkge1xuICAgICAgICB2YXIgZ3JhY2VEdXJhdGlvbiA9IDE7XG4gICAgICAgIHRoaXMuZ3JhY2UgPSBVdGlscy50b0FycmF5KHRoaXMuZ3JhY2UpO1xuICAgICAgICB0aGlzLmdyYWNlLmZvckVhY2goZnVuY3Rpb24gKHBpdGNoKSB7XG4gICAgICAgICAgdmFyIG5vdGVFdmVudCA9IG5ldyBOb3RlRXZlbnQoe1xuICAgICAgICAgICAgcGl0Y2g6IF90aGlzLmdyYWNlLFxuICAgICAgICAgICAgZHVyYXRpb246ICdUJyArIGdyYWNlRHVyYXRpb25cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBfdGhpcy5kYXRhID0gX3RoaXMuZGF0YS5jb25jYXQobm90ZUV2ZW50LmRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgIH0gLy8gZmllbGRzLnBpdGNoIGNvdWxkIGJlIGFuIGFycmF5IG9mIHBpdGNoZXMuXG4gICAgICAvLyBJZiB0aGlzLnNlcXVlbnRpYWwgPT09IHRydWUgdGhlbiBpdCdzIGEgc2VxdWVudGlhbCBzdHJpbmcgb2Ygbm90ZXMgdGhhdCByZXF1aXJlcyBzZXBhcmF0ZSBOb3RlT25FdmVudHMuXG5cbiAgICAgIGlmICghdGhpcy5zZXF1ZW50aWFsKSB7XG4gICAgICAgIC8vIEhhbmRsZSByZXBlYXRcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLnJlcGVhdDsgaisrKSB7XG4gICAgICAgICAgLy8gTm90ZSBvblxuICAgICAgICAgIHRoaXMucGl0Y2guZm9yRWFjaChmdW5jdGlvbiAocCwgaSkge1xuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICB2YXIgbm90ZU9uTmV3ID0gbmV3IE5vdGVPbkV2ZW50KHtcbiAgICAgICAgICAgICAgICBjaGFubmVsOiBfdGhpcy5jaGFubmVsLFxuICAgICAgICAgICAgICAgIHdhaXQ6IF90aGlzLndhaXQsXG4gICAgICAgICAgICAgICAgdmVsb2NpdHk6IF90aGlzLnZlbG9jaXR5LFxuICAgICAgICAgICAgICAgIHBpdGNoOiBwLFxuICAgICAgICAgICAgICAgIHN0YXJ0VGljazogX3RoaXMuc3RhcnRUaWNrXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gUnVubmluZyBzdGF0dXMgKGNhbiBvbW1pdCB0aGUgbm90ZSBvbiBzdGF0dXMpXG4gICAgICAgICAgICAgIC8vbm90ZU9uID0gbmV3IE5vdGVPbkV2ZW50KHtkYXRhOiBbMCwgVXRpbHMuZ2V0UGl0Y2gocCksIFV0aWxzLmNvbnZlcnRWZWxvY2l0eSh0aGlzLnZlbG9jaXR5KV19KTtcbiAgICAgICAgICAgICAgdmFyIG5vdGVPbk5ldyA9IG5ldyBOb3RlT25FdmVudCh7XG4gICAgICAgICAgICAgICAgY2hhbm5lbDogX3RoaXMuY2hhbm5lbCxcbiAgICAgICAgICAgICAgICB3YWl0OiAwLFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5OiBfdGhpcy52ZWxvY2l0eSxcbiAgICAgICAgICAgICAgICBwaXRjaDogcCxcbiAgICAgICAgICAgICAgICBzdGFydFRpY2s6IF90aGlzLnN0YXJ0VGlja1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX3RoaXMuZXZlbnRzLnB1c2gobm90ZU9uTmV3KTtcbiAgICAgICAgICB9KTsgLy8gTm90ZSBvZmZcblxuICAgICAgICAgIHRoaXMucGl0Y2guZm9yRWFjaChmdW5jdGlvbiAocCwgaSkge1xuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAvL25vdGVPZmYgPSBuZXcgTm90ZU9mZkV2ZW50KHtkYXRhOiBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRpY2tEdXJhdGlvbikuY29uY2F0KHRoaXMuZ2V0Tm90ZU9mZlN0YXR1cygpLCBVdGlscy5nZXRQaXRjaChwKSwgVXRpbHMuY29udmVydFZlbG9jaXR5KHRoaXMudmVsb2NpdHkpKX0pO1xuICAgICAgICAgICAgICB2YXIgbm90ZU9mZk5ldyA9IG5ldyBOb3RlT2ZmRXZlbnQoe1xuICAgICAgICAgICAgICAgIGNoYW5uZWw6IF90aGlzLmNoYW5uZWwsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IF90aGlzLmR1cmF0aW9uLFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5OiBfdGhpcy52ZWxvY2l0eSxcbiAgICAgICAgICAgICAgICBwaXRjaDogcCxcbiAgICAgICAgICAgICAgICB0aWNrOiBfdGhpcy5zdGFydFRpY2sgIT09IG51bGwgPyBVdGlscy5nZXRUaWNrRHVyYXRpb24oX3RoaXMuZHVyYXRpb24pICsgX3RoaXMuc3RhcnRUaWNrIDogbnVsbFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFJ1bm5pbmcgc3RhdHVzIChjYW4gb21taXQgdGhlIG5vdGUgb2ZmIHN0YXR1cylcbiAgICAgICAgICAgICAgLy9ub3RlT2ZmID0gbmV3IE5vdGVPZmZFdmVudCh7ZGF0YTogWzAsIFV0aWxzLmdldFBpdGNoKHApLCBVdGlscy5jb252ZXJ0VmVsb2NpdHkodGhpcy52ZWxvY2l0eSldfSk7XG4gICAgICAgICAgICAgIHZhciBub3RlT2ZmTmV3ID0gbmV3IE5vdGVPZmZFdmVudCh7XG4gICAgICAgICAgICAgICAgY2hhbm5lbDogX3RoaXMuY2hhbm5lbCxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eTogX3RoaXMudmVsb2NpdHksXG4gICAgICAgICAgICAgICAgcGl0Y2g6IHAsXG4gICAgICAgICAgICAgICAgdGljazogX3RoaXMuc3RhcnRUaWNrICE9PSBudWxsID8gVXRpbHMuZ2V0VGlja0R1cmF0aW9uKF90aGlzLmR1cmF0aW9uKSArIF90aGlzLnN0YXJ0VGljayA6IG51bGxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF90aGlzLmV2ZW50cy5wdXNoKG5vdGVPZmZOZXcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBIYW5kbGUgcmVwZWF0XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5yZXBlYXQ7IGorKykge1xuICAgICAgICAgIHRoaXMucGl0Y2guZm9yRWFjaChmdW5jdGlvbiAocCwgaSkge1xuXG4gICAgICAgICAgICB2YXIgbm90ZU9uTmV3ID0gbmV3IE5vdGVPbkV2ZW50KHtcbiAgICAgICAgICAgICAgY2hhbm5lbDogX3RoaXMuY2hhbm5lbCxcbiAgICAgICAgICAgICAgd2FpdDogaSA+IDAgPyAwIDogX3RoaXMud2FpdCxcbiAgICAgICAgICAgICAgLy8gd2FpdCBvbmx5IGFwcGxpZXMgdG8gZmlyc3Qgbm90ZSBpbiByZXBldGl0aW9uXG4gICAgICAgICAgICAgIHZlbG9jaXR5OiBfdGhpcy52ZWxvY2l0eSxcbiAgICAgICAgICAgICAgcGl0Y2g6IHAsXG4gICAgICAgICAgICAgIHN0YXJ0VGljazogX3RoaXMuc3RhcnRUaWNrXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBub3RlT2ZmTmV3ID0gbmV3IE5vdGVPZmZFdmVudCh7XG4gICAgICAgICAgICAgIGNoYW5uZWw6IF90aGlzLmNoYW5uZWwsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiBfdGhpcy5kdXJhdGlvbixcbiAgICAgICAgICAgICAgdmVsb2NpdHk6IF90aGlzLnZlbG9jaXR5LFxuICAgICAgICAgICAgICBwaXRjaDogcFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIF90aGlzLmV2ZW50cy5wdXNoKG5vdGVPbk5ldywgbm90ZU9mZk5ldyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE5vdGVFdmVudDtcbn0oKTtcblxuLyoqXG4gKiBIb2xkcyBhbGwgZGF0YSBmb3IgYSBcIlBpdGNoIEJlbmRcIiBNSURJIGV2ZW50XG4gKiBbIC0xLjAsIDAsIDEuMCBdIC0+ICBbIDAsIDgxOTIsIDE2MzgzXVxuICogQHBhcmFtIHtvYmplY3R9IGZpZWxkcyB7IGJlbmQgOiBmbG9hdCwgY2hhbm5lbCA6IGludCB9XG4gKiBAcmV0dXJuIHtQaXRjaEJlbmRFdmVudH1cbiAqL1xuXG52YXIgc2NhbGUxNGJpdHMgPSBmdW5jdGlvbiBzY2FsZTE0Yml0cyh6ZXJvT25lKSB7XG4gIGlmICh6ZXJvT25lIDw9IDApIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcigxNjM4NCAqICh6ZXJvT25lICsgMSkgLyAyKTtcbiAgfVxuXG4gIHJldHVybiBNYXRoLmZsb29yKDE2MzgzICogKHplcm9PbmUgKyAxKSAvIDIpO1xufTtcblxudmFyIFBpdGNoQmVuZEV2ZW50ID0gZnVuY3Rpb24gUGl0Y2hCZW5kRXZlbnQoZmllbGRzKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQaXRjaEJlbmRFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ3BpdGNoLWJlbmQnO1xuICB2YXIgYmVuZDE0ID0gc2NhbGUxNGJpdHMoZmllbGRzLmJlbmQpO1xuICB2YXIgY2hhbm5lbCA9IGZpZWxkcy5jaGFubmVsIHx8IDA7XG4gIHZhciBsc2JWYWx1ZSA9IGJlbmQxNCAmIDB4N2Y7XG4gIHZhciBtc2JWYWx1ZSA9IGJlbmQxNCA+PiA3ICYgMHg3ZjtcbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLlBJVENIX0JFTkRfU1RBVFVTIHwgY2hhbm5lbCwgbHNiVmFsdWUsIG1zYlZhbHVlKTtcbn07XG5cbi8qKlxuICogSG9sZHMgYWxsIGRhdGEgZm9yIGEgXCJwcm9ncmFtIGNoYW5nZVwiIE1JREkgZXZlbnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZHMge2luc3RydW1lbnQ6IGludGVnZXJ9XG4gKiBAcmV0dXJuIHtQcm9ncmFtQ2hhbmdlRXZlbnR9XG4gKi9cblxudmFyIFByb2dyYW1DaGFuZ2VFdmVudCA9IGZ1bmN0aW9uIFByb2dyYW1DaGFuZ2VFdmVudChmaWVsZHMpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFByb2dyYW1DaGFuZ2VFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ3Byb2dyYW0nOyAvLyBkZWx0YSB0aW1lIGRlZmF1bHRzIHRvIDAuXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLlBST0dSQU1fQ0hBTkdFX1NUQVRVUywgZmllbGRzLmluc3RydW1lbnQpO1xufTtcblxuLyoqXG4gKiBIb2xkcyBhbGwgZGF0YSBmb3IgYSBcImNvbnRyb2xsZXIgY2hhbmdlXCIgTUlESSBldmVudFxuICogQHBhcmFtIHtvYmplY3R9IGZpZWxkcyB7Y29udHJvbGxlck51bWJlcjogaW50ZWdlciwgY29udHJvbGxlclZhbHVlOiBpbnRlZ2VyfVxuICogQHJldHVybiB7Q29udHJvbGxlckNoYW5nZUV2ZW50fVxuICovXG5cbnZhciBDb250cm9sbGVyQ2hhbmdlRXZlbnQgPSBmdW5jdGlvbiBDb250cm9sbGVyQ2hhbmdlRXZlbnQoZmllbGRzKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb250cm9sbGVyQ2hhbmdlRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdjb250cm9sbGVyJzsgLy8gZGVsdGEgdGltZSBkZWZhdWx0cyB0byAwLlxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5DT05UUk9MTEVSX0NIQU5HRV9TVEFUVVMsIGZpZWxkcy5jb250cm9sbGVyTnVtYmVyLCBmaWVsZHMuY29udHJvbGxlclZhbHVlKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgdGVtcG8gbWV0YSBldmVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gQ29weXJpZ2h0IHRleHRcbiAqIEByZXR1cm4ge0NvcHlyaWdodEV2ZW50fVxuICovXG5cbnZhciBDb3B5cmlnaHRFdmVudCA9IGZ1bmN0aW9uIENvcHlyaWdodEV2ZW50KHRleHQpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvcHlyaWdodEV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAnY29weXJpZ2h0JztcbiAgdmFyIHRleHRCeXRlcyA9IFV0aWxzLnN0cmluZ1RvQnl0ZXModGV4dCk7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX0NPUFlSSUdIVF9JRCwgVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0ZXh0Qnl0ZXMubGVuZ3RoKSwgLy8gU2l6ZVxuICB0ZXh0Qnl0ZXMgLy8gVGV4dFxuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSBjdWUgcG9pbnQgbWV0YSBldmVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gQ3VlIHBvaW50IHRleHRcbiAqIEByZXR1cm4ge0N1ZVBvaW50RXZlbnR9XG4gKi9cblxudmFyIEN1ZVBvaW50RXZlbnQgPSBmdW5jdGlvbiBDdWVQb2ludEV2ZW50KHRleHQpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEN1ZVBvaW50RXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdtYXJrZXInO1xuICB2YXIgdGV4dEJ5dGVzID0gVXRpbHMuc3RyaW5nVG9CeXRlcyh0ZXh0KTsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfQ1VFX1BPSU5ULCBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRleHRCeXRlcy5sZW5ndGgpLCAvLyBTaXplXG4gIHRleHRCeXRlcyAvLyBUZXh0XG4gICk7XG59O1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIGVuZCB0cmFjayBtZXRhIGV2ZW50LlxuICogQHJldHVybiB7RW5kVHJhY2tFdmVudH1cbiAqL1xuXG52YXIgRW5kVHJhY2tFdmVudCA9IGZ1bmN0aW9uIEVuZFRyYWNrRXZlbnQoKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFbmRUcmFja0V2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAnZW5kLXRyYWNrJzsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfRU5EX09GX1RSQUNLX0lEKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGFuIGluc3RydW1lbnQgbmFtZSBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IGJwbSAtIEJlYXRzIHBlciBtaW51dGVcbiAqIEByZXR1cm4ge0luc3RydW1lbnROYW1lRXZlbnR9XG4gKi9cblxudmFyIEluc3RydW1lbnROYW1lRXZlbnQgPSBmdW5jdGlvbiBJbnN0cnVtZW50TmFtZUV2ZW50KHRleHQpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluc3RydW1lbnROYW1lRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdpbnN0cnVtZW50LW5hbWUnO1xuICB2YXIgdGV4dEJ5dGVzID0gVXRpbHMuc3RyaW5nVG9CeXRlcyh0ZXh0KTsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfSU5TVFJVTUVOVF9OQU1FX0lELCBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRleHRCeXRlcy5sZW5ndGgpLCAvLyBTaXplXG4gIHRleHRCeXRlcyAvLyBJbnN0cnVtZW50IG5hbWVcbiAgKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEga2V5IHNpZ25hdHVyZSBtZXRhIGV2ZW50LlxuICogQHJldHVybiB7S2V5U2lnbmF0dXJlRXZlbnR9XG4gKi9cblxudmFyIEtleVNpZ25hdHVyZUV2ZW50ID0gZnVuY3Rpb24gS2V5U2lnbmF0dXJlRXZlbnQoc2YsIG1pKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBLZXlTaWduYXR1cmVFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ2tleS1zaWduYXR1cmUnO1xuICB2YXIgbW9kZSA9IG1pIHx8IDA7XG4gIHNmID0gc2YgfHwgMDsgLy9cdEZ1bmN0aW9uIGNhbGxlZCB3aXRoIHN0cmluZyBub3RhdGlvblxuXG4gIGlmICh0eXBlb2YgbWkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIGZpZnRocyA9IFtbJ0NiJywgJ0diJywgJ0RiJywgJ0FiJywgJ0ViJywgJ0JiJywgJ0YnLCAnQycsICdHJywgJ0QnLCAnQScsICdFJywgJ0InLCAnRiMnLCAnQyMnXSwgWydhYicsICdlYicsICdiYicsICdmJywgJ2MnLCAnZycsICdkJywgJ2EnLCAnZScsICdiJywgJ2YjJywgJ2MjJywgJ2cjJywgJ2QjJywgJ2EjJ11dO1xuICAgIHZhciBfc2ZsZW4gPSBzZi5sZW5ndGg7XG4gICAgdmFyIG5vdGUgPSBzZiB8fCAnQyc7XG4gICAgaWYgKHNmWzBdID09PSBzZlswXS50b0xvd2VyQ2FzZSgpKSBtb2RlID0gMTtcblxuICAgIGlmIChfc2ZsZW4gPiAxKSB7XG4gICAgICBzd2l0Y2ggKHNmLmNoYXJBdChfc2ZsZW4gLSAxKSkge1xuICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICBtb2RlID0gMTtcbiAgICAgICAgICBub3RlID0gc2YuY2hhckF0KDApLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgbm90ZSA9IG5vdGUuY29uY2F0KHNmLnN1YnN0cmluZygxLCBfc2ZsZW4gLSAxKSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgbW9kZSA9IDE7XG4gICAgICAgICAgbm90ZSA9IHNmLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIG5vdGUgPSBub3RlLmNvbmNhdChzZi5zdWJzdHJpbmcoMSwgX3NmbGVuIC0gMSkpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ00nOlxuICAgICAgICAgIG1vZGUgPSAwO1xuICAgICAgICAgIG5vdGUgPSBzZi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICBub3RlID0gbm90ZS5jb25jYXQoc2Yuc3Vic3RyaW5nKDEsIF9zZmxlbiAtIDEpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICBtb2RlID0gMDtcbiAgICAgICAgICBub3RlID0gc2YuY2hhckF0KDApLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgbm90ZSA9IG5vdGUuY29uY2F0KHNmLnN1YnN0cmluZygxLCBfc2ZsZW4gLSAxKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGZpZnRoaW5kZXggPSBmaWZ0aHNbbW9kZV0uaW5kZXhPZihub3RlKTtcbiAgICBzZiA9IGZpZnRoaW5kZXggPT09IC0xID8gMCA6IGZpZnRoaW5kZXggLSA3O1xuICB9IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfS0VZX1NJR05BVFVSRV9JRCwgWzB4MDJdLCAvLyBTaXplXG4gIFV0aWxzLm51bWJlclRvQnl0ZXMoc2YsIDEpLCAvLyBOdW1iZXIgb2Ygc2hhcnAgb3IgZmxhdHMgKCA8IDAgZmxhdDsgPiAwIHNoYXJwKVxuICBVdGlscy5udW1iZXJUb0J5dGVzKG1vZGUsIDEpIC8vIE1vZGU6IDAgbWFqb3IsIDEgbWlub3JcbiAgKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgbHlyaWMgbWV0YSBldmVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gTHlyaWMgdGV4dFxuICogQHJldHVybiB7THlyaWNFdmVudH1cbiAqL1xuXG52YXIgTHlyaWNFdmVudCA9IGZ1bmN0aW9uIEx5cmljRXZlbnQodGV4dCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTHlyaWNFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ21hcmtlcic7XG4gIHZhciB0ZXh0Qnl0ZXMgPSBVdGlscy5zdHJpbmdUb0J5dGVzKHRleHQpOyAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9MWVJJQ19JRCwgVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0ZXh0Qnl0ZXMubGVuZ3RoKSwgLy8gU2l6ZVxuICB0ZXh0Qnl0ZXMgLy8gVGV4dFxuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSBtYXJrZXIgbWV0YSBldmVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gTWFya2VyIHRleHRcbiAqIEByZXR1cm4ge01hcmtlckV2ZW50fVxuICovXG5cbnZhciBNYXJrZXJFdmVudCA9IGZ1bmN0aW9uIE1hcmtlckV2ZW50KHRleHQpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hcmtlckV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAnbWFya2VyJztcbiAgdmFyIHRleHRCeXRlcyA9IFV0aWxzLnN0cmluZ1RvQnl0ZXModGV4dCk7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX01BUktFUl9JRCwgVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0ZXh0Qnl0ZXMubGVuZ3RoKSwgLy8gU2l6ZVxuICB0ZXh0Qnl0ZXMgLy8gVGV4dFxuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSB0ZW1wbyBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IGJwbSAtIEJlYXRzIHBlciBtaW51dGVcbiAqIEByZXR1cm4ge1RlbXBvRXZlbnR9XG4gKi9cblxudmFyIFRlbXBvRXZlbnQgPSBmdW5jdGlvbiBUZW1wb0V2ZW50KGJwbSkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGVtcG9FdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ3RlbXBvJztcbiAgdmFyIHRlbXBvID0gTWF0aC5yb3VuZCg2MDAwMDAwMCAvIGJwbSk7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX1RFTVBPX0lELCBbMHgwM10sIC8vIFNpemVcbiAgVXRpbHMubnVtYmVyVG9CeXRlcyh0ZW1wbywgMykgLy8gVGVtcG8sIDMgYnl0ZXNcbiAgKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgdGVtcG8gbWV0YSBldmVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBicG0gLSBCZWF0cyBwZXIgbWludXRlXG4gKiBAcmV0dXJuIHtUZXh0RXZlbnR9XG4gKi9cblxudmFyIFRleHRFdmVudCA9IGZ1bmN0aW9uIFRleHRFdmVudCh0ZXh0KSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUZXh0RXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICd0ZXh0JztcbiAgdmFyIHRleHRCeXRlcyA9IFV0aWxzLnN0cmluZ1RvQnl0ZXModGV4dCk7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX1RFWFRfSUQsIFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgodGV4dEJ5dGVzLmxlbmd0aCksIC8vIFNpemVcbiAgdGV4dEJ5dGVzIC8vIFRleHRcbiAgKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgdGltZSBzaWduYXR1cmUgbWV0YSBldmVudC5cbiAqIEByZXR1cm4ge1RpbWVTaWduYXR1cmVFdmVudH1cbiAqL1xuXG52YXIgVGltZVNpZ25hdHVyZUV2ZW50ID0gZnVuY3Rpb24gVGltZVNpZ25hdHVyZUV2ZW50KG51bWVyYXRvciwgZGVub21pbmF0b3IsIG1pZGljbG9ja3NwZXJ0aWNrLCBub3Rlc3Blcm1pZGljbG9jaykge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGltZVNpZ25hdHVyZUV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAndGltZS1zaWduYXR1cmUnOyAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9USU1FX1NJR05BVFVSRV9JRCwgWzB4MDRdLCAvLyBTaXplXG4gIFV0aWxzLm51bWJlclRvQnl0ZXMobnVtZXJhdG9yLCAxKSwgLy8gTnVtZXJhdG9yLCAxIGJ5dGVzXG4gIFV0aWxzLm51bWJlclRvQnl0ZXMoTWF0aC5sb2cyKGRlbm9taW5hdG9yKSwgMSksIC8vIERlbm9taW5hdG9yIGlzIGV4cHJlc3NlZCBhcyBwb3cgb2YgMiwgMSBieXRlc1xuICBVdGlscy5udW1iZXJUb0J5dGVzKG1pZGljbG9ja3NwZXJ0aWNrIHx8IDI0LCAxKSwgLy8gTUlESSBDbG9ja3MgcGVyIHRpY2ssIDEgYnl0ZXNcbiAgVXRpbHMubnVtYmVyVG9CeXRlcyhub3Rlc3Blcm1pZGljbG9jayB8fCA4LCAxKSAvLyBOdW1iZXIgb2YgMS8zMiBub3RlcyBwZXIgTUlESSBjbG9ja3MsIDEgYnl0ZXNcbiAgKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgdGVtcG8gbWV0YSBldmVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBicG0gLSBCZWF0cyBwZXIgbWludXRlXG4gKiBAcmV0dXJuIHtUcmFja05hbWVFdmVudH1cbiAqL1xuXG52YXIgVHJhY2tOYW1lRXZlbnQgPSBmdW5jdGlvbiBUcmFja05hbWVFdmVudCh0ZXh0KSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmFja05hbWVFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ3RyYWNrLW5hbWUnO1xuICB2YXIgdGV4dEJ5dGVzID0gVXRpbHMuc3RyaW5nVG9CeXRlcyh0ZXh0KTsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfVFJBQ0tfTkFNRV9JRCwgVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0ZXh0Qnl0ZXMubGVuZ3RoKSwgLy8gU2l6ZVxuICB0ZXh0Qnl0ZXMgLy8gVGV4dFxuICApO1xufTtcblxuLyoqXG4gKiBIb2xkcyBhbGwgZGF0YSBmb3IgYSB0cmFjay5cbiAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZHMge3R5cGU6IG51bWJlciwgZGF0YTogYXJyYXksIHNpemU6IGFycmF5LCBldmVudHM6IGFycmF5fVxuICogQHJldHVybiB7VHJhY2t9XG4gKi9cblxudmFyIFRyYWNrID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVHJhY2soKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRyYWNrKTtcblxuICAgIHRoaXMudHlwZSA9IENvbnN0YW50cy5UUkFDS19DSFVOS19UWVBFO1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIHRoaXMuc2l6ZSA9IFtdO1xuICAgIHRoaXMuZXZlbnRzID0gW107XG4gICAgdGhpcy5leHBsaWNpdFRpY2tFdmVudHMgPSBbXTsgLy8gSWYgdGhlcmUgYXJlIGFueSBldmVudHMgd2l0aCBhbiBleHBsaWNpdCB0aWNrIGRlZmluZWQgdGhlbiB3ZSB3aWxsIGNyZWF0ZSBhIFwic3ViXCIgdHJhY2sgZm9yIHRob3NlXG4gICAgLy8gYW5kIG1lcmdlIHRoZW0gaW4gYW5kIHRoZSBlbmQuXG5cbiAgICB0aGlzLnRpY2tQb2ludGVyID0gMDsgLy8gRWFjaCB0aW1lIGFuIGV2ZW50IGlzIGFkZGVkIHRoaXMgd2lsbCBpbmNyZWFzZVxuICB9XG4gIC8qKlxuICAgKiBBZGRzIGFueSBldmVudCB0eXBlIHRvIHRoZSB0cmFjay5cbiAgICogRXZlbnRzIHdpdGhvdXQgYSBzcGVjaWZpYyBzdGFydFRpY2sgcHJvcGVydHkgYXJlIGFzc3VtZWQgdG8gYmUgYWRkZWQgaW4gb3JkZXIgb2YgaG93IHRoZXkgc2hvdWxkIG91dHB1dC5cbiAgICogRXZlbnRzIHdpdGggYSBzcGVjaWZpYyBzdGFydFRpY2sgcHJvcGVydHkgYXJlIHNldCBhc2lkZSBmb3Igbm93IHdpbGwgYmUgbWVyZ2VkIGluIGR1cmluZyBidWlsZCBwcm9jZXNzLlxuICAgKiBAcGFyYW0geyhOb3RlRXZlbnR8UHJvZ3JhbUNoYW5nZUV2ZW50KX0gZXZlbnRzIC0gRXZlbnQgb2JqZWN0IG9yIGFycmF5IG9mIEV2ZW50IG9iamVjdHMuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IG1hcEZ1bmN0aW9uIC0gQ2FsbGJhY2sgd2hpY2ggY2FuIGJlIHVzZWQgdG8gYXBwbHkgc3BlY2lmaWMgcHJvcGVydGllcyB0byBhbGwgZXZlbnRzLlxuICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoVHJhY2ssIFt7XG4gICAga2V5OiBcImFkZEV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEV2ZW50KGV2ZW50cywgbWFwRnVuY3Rpb24pIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIFV0aWxzLnRvQXJyYXkoZXZlbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCwgaSkge1xuICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOb3RlRXZlbnQpIHtcbiAgICAgICAgICAvLyBIYW5kbGUgbWFwIGZ1bmN0aW9uIGlmIHByb3ZpZGVkXG4gICAgICAgICAgaWYgKHR5cGVvZiBtYXBGdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIHByb3BlcnRpZXMgPSBtYXBGdW5jdGlvbihpLCBldmVudCk7XG5cbiAgICAgICAgICAgIGlmIChfdHlwZW9mKHByb3BlcnRpZXMpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICBmb3IgKHZhciBqIGluIHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGopIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgJ2NoYW5uZWwnOlxuICAgICAgICAgICAgICAgICAgICBldmVudC5jaGFubmVsID0gcHJvcGVydGllc1tqXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgJ2R1cmF0aW9uJzpcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZHVyYXRpb24gPSBwcm9wZXJ0aWVzW2pdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgY2FzZSAnc2VxdWVudGlhbCc6XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnNlcXVlbnRpYWwgPSBwcm9wZXJ0aWVzW2pdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgY2FzZSAndmVsb2NpdHknOlxuICAgICAgICAgICAgICAgICAgICBldmVudC52ZWxvY2l0eSA9IFV0aWxzLmNvbnZlcnRWZWxvY2l0eShwcm9wZXJ0aWVzW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAvLyBJZiB0aGlzIG5vdGUgZXZlbnQgaGFzIGFuIGV4cGxpY2l0IHN0YXJ0VGljayB0aGVuIHdlIG5lZWQgdG8gc2V0IGFzaWRlIGZvciBub3dcblxuXG4gICAgICAgICAgaWYgKGV2ZW50LnN0YXJ0VGljayAhPT0gbnVsbCkge1xuICAgICAgICAgICAgX3RoaXMuZXhwbGljaXRUaWNrRXZlbnRzLnB1c2goZXZlbnQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBQdXNoIGVhY2ggb24vb2ZmIGV2ZW50IHRvIHRyYWNrJ3MgZXZlbnQgc3RhY2tcbiAgICAgICAgICAgIGV2ZW50LmJ1aWxkRGF0YSgpLmV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpcy5ldmVudHMucHVzaChlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpcy5ldmVudHMucHVzaChldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJ1aWxkcyBpbnQgYXJyYXkgb2YgYWxsIGV2ZW50cy5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImJ1aWxkRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBidWlsZERhdGEoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgLy8gUmVtb3ZlIGV4aXN0aW5nIGVuZCB0cmFjayBldmVudCBhbmQgYWRkIG9uZS5cbiAgICAgIC8vIFRoaXMgbWFrZXMgc3VyZSBpdCdzIGF0IHRoZSB2ZXJ5IGVuZCBvZiB0aGUgZXZlbnQgbGlzdC5cbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRzQnlUeXBlKCdlbmQtdHJhY2snKS5hZGRFdmVudChuZXcgRW5kVHJhY2tFdmVudCgpKTsgLy8gUmVzZXRcblxuICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgICB0aGlzLnNpemUgPSBbXTtcbiAgICAgIHRoaXMudGlja1BvaW50ZXIgPSAwO1xuICAgICAgdmFyIHByZWNpc2lvbkxvc3MgPSAwO1xuICAgICAgdGhpcy5ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQsIGV2ZW50SW5kZXgpIHtcbiAgICAgICAgLy8gQnVpbGQgZXZlbnQgJiBhZGQgdG8gdG90YWwgdGljayBkdXJhdGlvblxuICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOb3RlT25FdmVudCB8fCBldmVudCBpbnN0YW5jZW9mIE5vdGVPZmZFdmVudCkge1xuICAgICAgICAgIHZhciBidWlsdCA9IGV2ZW50LmJ1aWxkRGF0YShfdGhpczIsIHByZWNpc2lvbkxvc3MpO1xuICAgICAgICAgIHByZWNpc2lvbkxvc3MgPSBVdGlscy5nZXRQcmVjaXNpb25Mb3NzKGV2ZW50LmRlbHRhV2l0aFByZWNpc2lvbkNvcnJlY3Rpb24gfHwgMCk7XG4gICAgICAgICAgX3RoaXMyLmRhdGEgPSBfdGhpczIuZGF0YS5jb25jYXQoYnVpbHQuZGF0YSk7XG4gICAgICAgICAgX3RoaXMyLnRpY2tQb2ludGVyID0gVXRpbHMuZ2V0Um91bmRlZElmQ2xvc2UoZXZlbnQudGljayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMyLmRhdGEgPSBfdGhpczIuZGF0YS5jb25jYXQoZXZlbnQuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5tZXJnZUV4cGxpY2l0VGlja0V2ZW50cygpO1xuICAgICAgdGhpcy5zaXplID0gVXRpbHMubnVtYmVyVG9CeXRlcyh0aGlzLmRhdGEubGVuZ3RoLCA0KTsgLy8gNCBieXRlcyBsb25nXG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJtZXJnZUV4cGxpY2l0VGlja0V2ZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtZXJnZUV4cGxpY2l0VGlja0V2ZW50cygpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICBpZiAoIXRoaXMuZXhwbGljaXRUaWNrRXZlbnRzLmxlbmd0aCkgcmV0dXJuOyAvLyBGaXJzdCBzb3J0IGFzYyBsaXN0IG9mIGV2ZW50cyBieSBzdGFydFRpY2tcblxuICAgICAgdGhpcy5leHBsaWNpdFRpY2tFdmVudHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYS5zdGFydFRpY2sgLSBiLnN0YXJ0VGljaztcbiAgICAgIH0pOyAvLyBOb3cgdGhpcy5leHBsaWNpdFRpY2tFdmVudHMgaXMgaW4gY29ycmVjdCBvcmRlciwgYW5kIHNvIGlzIHRoaXMuZXZlbnRzIG5hdHVyYWxseS5cbiAgICAgIC8vIEZvciBlYWNoIGV4cGxpY2l0IHRpY2sgZXZlbnQsIHNwbGljZSBpdCBpbnRvIHRoZSBtYWluIGxpc3Qgb2YgZXZlbnRzIGFuZFxuICAgICAgLy8gYWRqdXN0IHRoZSBkZWx0YSBvbiB0aGUgZm9sbG93aW5nIGV2ZW50cyBzbyB0aGV5IHN0aWxsIHBsYXkgbm9ybWFsbHkuXG5cbiAgICAgIHRoaXMuZXhwbGljaXRUaWNrRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKG5vdGVFdmVudCkge1xuICAgICAgICAvLyBDb252ZXJ0IE5vdGVFdmVudCB0byBpdCdzIHJlc3BlY3RpdmUgTm90ZU9uL05vdGVPZmYgZXZlbnRzXG4gICAgICAgIC8vIE5vdGUgdGhhdCBhcyB3ZSBzcGxpY2UgaW4gZXZlbnRzIHRoZSBkZWx0YSBmb3IgdGhlIE5vdGVPZmYgb25lcyB3aWxsXG4gICAgICAgIC8vIE5lZWQgdG8gY2hhbmdlIGJhc2VkIG9uIHdoYXQgY29tZXMgYmVmb3JlIHRoZW0gYWZ0ZXIgdGhlIHNwbGljZS5cbiAgICAgICAgbm90ZUV2ZW50LmJ1aWxkRGF0YSgpLmV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGUuYnVpbGREYXRhKF90aGlzMyk7XG4gICAgICAgIH0pOyAvLyBNZXJnZSBlYWNoIGV2ZW50IGluZGl2dWFsbHkgaW50byB0aGlzIHRyYWNrJ3MgZXZlbnQgbGlzdC5cblxuICAgICAgICBub3RlRXZlbnQuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMy5tZXJnZVNpbmdsZUV2ZW50KGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTsgLy8gSGFja3kgd2F5IHRvIHJlYnVpbGQgdHJhY2sgd2l0aCBuZXdseSBzcGxpY2VkIGV2ZW50cy4gIE5lZWQgYmV0dGVyIHNvbHV0aW9uLlxuXG4gICAgICB0aGlzLmV4cGxpY2l0VGlja0V2ZW50cyA9IFtdO1xuICAgICAgdGhpcy5idWlsZERhdGEoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTWVyZ2VzIGFub3RoZXIgdHJhY2sncyBldmVudHMgd2l0aCB0aGlzIHRyYWNrLlxuICAgICAqIEBwYXJhbSB7VHJhY2t9IHRyYWNrXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJtZXJnZVRyYWNrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1lcmdlVHJhY2sodHJhY2spIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICAvLyBGaXJzdCBidWlsZCB0aGlzIHRyYWNrIHRvIHBvcHVsYXRlIGVhY2ggZXZlbnQncyB0aWNrIHByb3BlcnR5XG4gICAgICB0aGlzLmJ1aWxkRGF0YSgpOyAvLyBUaGVuIGJ1aWxkIHRyYWNrIHRvIGJlIG1lcmdlZCBzbyB0aGF0IHRpY2sgcHJvcGVydHkgaXMgcG9wdWxhdGVkIG9uIGFsbCBldmVudHMgJiBtZXJnZSBlYWNoIGV2ZW50LlxuXG4gICAgICB0cmFjay5idWlsZERhdGEoKS5ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzNC5tZXJnZVNpbmdsZUV2ZW50KGV2ZW50KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNZXJnZXMgYSBzaW5nbGUgZXZlbnQgaW50byB0aGlzIHRyYWNrJ3MgbGlzdCBvZiBldmVudHMgYmFzZWQgb24gZXZlbnQudGljayBwcm9wZXJ0eS5cbiAgICAgKiBAcGFyYW0ge05vdGVPbkV2ZW50fE5vdGVPZmZFdmVudH0gLSBldmVudFxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibWVyZ2VTaW5nbGVFdmVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtZXJnZVNpbmdsZUV2ZW50KGV2ZW50KSB7XG4gICAgICAvLyBGaW5kIGluZGV4IG9mIGV4aXN0aW5nIGV2ZW50IHdlIG5lZWQgdG8gZm9sbG93IHdpdGhcbiAgICAgIHZhciBsYXN0RXZlbnRJbmRleCA9IDA7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2ldLnRpY2sgPiBldmVudC50aWNrKSBicmVhaztcbiAgICAgICAgbGFzdEV2ZW50SW5kZXggPSBpO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3BsaWNlZEV2ZW50SW5kZXggPSBsYXN0RXZlbnRJbmRleCArIDE7IC8vIE5lZWQgdG8gYWRqdXN0IHRoZSBkZWx0YSBvZiB0aGlzIGV2ZW50IHRvIGVuc3VyZSBpdCBmYWxscyBvbiB0aGUgY29ycmVjdCB0aWNrLlxuXG4gICAgICBldmVudC5kZWx0YSA9IGV2ZW50LnRpY2sgLSB0aGlzLmV2ZW50c1tsYXN0RXZlbnRJbmRleF0udGljazsgLy8gU3BsaWNlIHRoaXMgZXZlbnQgYXQgbGFzdEV2ZW50SW5kZXggKyAxXG5cbiAgICAgIHRoaXMuZXZlbnRzLnNwbGljZShzcGxpY2VkRXZlbnRJbmRleCwgMCwgZXZlbnQpOyAvLyBOb3cgYWRqdXN0IGRlbHRhIG9mIGFsbCBmb2xsb3dpbmcgZXZlbnRzXG5cbiAgICAgIGZvciAodmFyIGkgPSBzcGxpY2VkRXZlbnRJbmRleCArIDE7IGkgPCB0aGlzLmV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBTaW5jZSBlYWNoIGV4aXN0aW5nIGV2ZW50IHNob3VsZCBoYXZlIGEgdGljayB2YWx1ZSBhdCB0aGlzIHBvaW50IHdlIGp1c3QgbmVlZCB0b1xuICAgICAgICAvLyBhZGp1c3QgZGVsdGEgdG8gdGhhdCB0aGUgZXZlbnQgc3RpbGwgZmFsbHMgb24gdGhlIGNvcnJlY3QgdGljay5cbiAgICAgICAgdGhpcy5ldmVudHNbaV0uZGVsdGEgPSB0aGlzLmV2ZW50c1tpXS50aWNrIC0gdGhpcy5ldmVudHNbaSAtIDFdLnRpY2s7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIGV2ZW50cyBtYXRjaGluZyBzcGVjaWZpZWQgdHlwZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlIC0gRXZlbnQgdHlwZVxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlRXZlbnRzQnlUeXBlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUV2ZW50c0J5VHlwZShldmVudFR5cGUpIHtcbiAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICB0aGlzLmV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCwgaW5kZXgpIHtcbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IGV2ZW50VHlwZSkge1xuICAgICAgICAgIF90aGlzNS5ldmVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0ZW1wbyBvZiB0aGUgTUlESSBmaWxlLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBicG0gLSBUZW1wbyBpbiBiZWF0cyBwZXIgbWludXRlLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2V0VGVtcG9cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VGVtcG8oYnBtKSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgVGVtcG9FdmVudChicG0pKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aW1lIHNpZ25hdHVyZS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbnVtZXJhdG9yIC0gVG9wIG51bWJlciBvZiB0aGUgdGltZSBzaWduYXR1cmUuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRlbm9taW5hdG9yIC0gQm90dG9tIG51bWJlciBvZiB0aGUgdGltZSBzaWduYXR1cmUuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pZGljbG9ja3NwZXJ0aWNrIC0gRGVmYXVsdHMgdG8gMjQuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5vdGVzcGVybWlkaWNsb2NrIC0gRGVmYXVsdHMgdG8gOC5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNldFRpbWVTaWduYXR1cmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VGltZVNpZ25hdHVyZShudW1lcmF0b3IsIGRlbm9taW5hdG9yLCBtaWRpY2xvY2tzcGVydGljaywgbm90ZXNwZXJtaWRpY2xvY2spIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBUaW1lU2lnbmF0dXJlRXZlbnQobnVtZXJhdG9yLCBkZW5vbWluYXRvciwgbWlkaWNsb2Nrc3BlcnRpY2ssIG5vdGVzcGVybWlkaWNsb2NrKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMga2V5IHNpZ25hdHVyZS5cbiAgICAgKiBAcGFyYW0geyp9IHNmIC1cbiAgICAgKiBAcGFyYW0geyp9IG1pIC1cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNldEtleVNpZ25hdHVyZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRLZXlTaWduYXR1cmUoc2YsIG1pKSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgS2V5U2lnbmF0dXJlRXZlbnQoc2YsIG1pKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgdGV4dCB0byBNSURJIGZpbGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUZXh0IHRvIGFkZC5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFkZFRleHRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkVGV4dCh0ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgVGV4dEV2ZW50KHRleHQpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBjb3B5cmlnaHQgdG8gTUlESSBmaWxlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCBvZiBjb3B5cmlnaHQgbGluZS5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFkZENvcHlyaWdodFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRDb3B5cmlnaHQodGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IENvcHlyaWdodEV2ZW50KHRleHQpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBTZXF1ZW5jZS9UcmFjayBOYW1lLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCBvZiB0cmFjayBuYW1lLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkVHJhY2tOYW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZFRyYWNrTmFtZSh0ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgVHJhY2tOYW1lRXZlbnQodGV4dCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIGluc3RydW1lbnQgbmFtZSBvZiB0cmFjay5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIE5hbWUgb2YgaW5zdHJ1bWVudC5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFkZEluc3RydW1lbnROYW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEluc3RydW1lbnROYW1lKHRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBJbnN0cnVtZW50TmFtZUV2ZW50KHRleHQpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBtYXJrZXIgdG8gTUlESSBmaWxlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gTWFya2VyIHRleHQuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhZGRNYXJrZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkTWFya2VyKHRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBNYXJrZXJFdmVudCh0ZXh0KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgY3VlIHBvaW50IHRvIE1JREkgZmlsZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRleHQgb2YgY3VlIHBvaW50LlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkQ3VlUG9pbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkQ3VlUG9pbnQodGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IEN1ZVBvaW50RXZlbnQodGV4dCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGx5cmljIHRvIE1JREkgZmlsZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIEx5cmljIHRleHQgdG8gYWRkLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkTHlyaWNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkTHlyaWModGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IEx5cmljRXZlbnQodGV4dCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGFubmVsIG1vZGUgbWVzc2FnZXNcbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInBvbHlNb2RlT25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcG9seU1vZGVPbigpIHtcbiAgICAgIHZhciBldmVudCA9IG5ldyBOb3RlT25FdmVudCh7XG4gICAgICAgIGRhdGE6IFsweDAwLCAweEIwLCAweDdFLCAweDAwXVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChldmVudCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgYSBwaXRjaCBiZW5kLlxuICAgICAqIEBwYXJhbSB7ZmxvYXR9IGJlbmQgLSBCZW5kIHZhbHVlIHJhbmdpbmcgWy0xLDFdLCB6ZXJvIG1lYW5pbmcgbm8gYmVuZC5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNldFBpdGNoQmVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQaXRjaEJlbmQoYmVuZCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IFBpdGNoQmVuZEV2ZW50KHtcbiAgICAgICAgYmVuZDogYmVuZFxuICAgICAgfSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgY29udHJvbGxlciBjaGFuZ2UgZXZlbnRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyIC0gQ29udHJvbCBudW1iZXIuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gQ29udHJvbCB2YWx1ZS5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNvbnRyb2xsZXJDaGFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29udHJvbGxlckNoYW5nZShudW1iZXIsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgQ29udHJvbGxlckNoYW5nZUV2ZW50KHtcbiAgICAgICAgY29udHJvbGxlck51bWJlcjogbnVtYmVyLFxuICAgICAgICBjb250cm9sbGVyVmFsdWU6IHZhbHVlXG4gICAgICB9KSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFRyYWNrO1xufSgpO1xuXG52YXIgVmV4RmxvdyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFZleEZsb3coKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFZleEZsb3cpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFZleEZsb3csIFt7XG4gICAga2V5OiBcInRyYWNrRnJvbVZvaWNlXCIsXG4gICAgdmFsdWU6XG4gICAgLyoqXG4gICAgICogU3VwcG9ydCBmb3IgY29udmVydGluZyBWZXhGbG93IHZvaWNlIGludG8gTWlkaVdyaXRlckpTIHRyYWNrXG4gICAgICogQHJldHVybiBNaWRpV3JpdGVyLlRyYWNrIG9iamVjdFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHRyYWNrRnJvbVZvaWNlKHZvaWNlKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge1xuICAgICAgICBhZGRSZW5kZXJlZEFjY2lkZW50YWxzOiBmYWxzZVxuICAgICAgfTtcbiAgICAgIHZhciB0cmFjayA9IG5ldyBUcmFjaygpO1xuICAgICAgdmFyIHdhaXQgPSBbXTtcbiAgICAgIHZvaWNlLnRpY2thYmxlcy5mb3JFYWNoKGZ1bmN0aW9uICh0aWNrYWJsZSkge1xuICAgICAgICBpZiAodGlja2FibGUubm90ZVR5cGUgPT09ICduJykge1xuICAgICAgICAgIHRyYWNrLmFkZEV2ZW50KG5ldyBOb3RlRXZlbnQoe1xuICAgICAgICAgICAgcGl0Y2g6IHRpY2thYmxlLmtleXMubWFwKGZ1bmN0aW9uIChwaXRjaCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmNvbnZlcnRQaXRjaChwaXRjaCwgaW5kZXgsIHRpY2thYmxlLCBvcHRpb25zLmFkZFJlbmRlcmVkQWNjaWRlbnRhbHMpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBkdXJhdGlvbjogX3RoaXMuY29udmVydER1cmF0aW9uKHRpY2thYmxlKSxcbiAgICAgICAgICAgIHdhaXQ6IHdhaXRcbiAgICAgICAgICB9KSk7IC8vIHJlc2V0IHdhaXRcblxuICAgICAgICAgIHdhaXQgPSBbXTtcbiAgICAgICAgfSBlbHNlIGlmICh0aWNrYWJsZS5ub3RlVHlwZSA9PT0gJ3InKSB7XG4gICAgICAgICAgLy8gbW92ZSBvbiB0byB0aGUgbmV4dCB0aWNrYWJsZSBhbmQgYWRkIHRoaXMgdG8gdGhlIHN0YWNrXG4gICAgICAgICAgLy8gb2YgdGhlIGB3YWl0YCBwcm9wZXJ0eSBmb3IgdGhlIG5leHQgbm90ZSBldmVudFxuICAgICAgICAgIHdhaXQucHVzaChfdGhpcy5jb252ZXJ0RHVyYXRpb24odGlja2FibGUpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0pOyAvLyBUaGVyZSBtYXkgYmUgb3V0c3RhbmRpbmcgcmVzdHMgYXQgdGhlIGVuZCBvZiB0aGUgdHJhY2ssXG4gICAgICAvLyBwYWQgd2l0aCBhIGdob3N0IG5vdGUgKHplcm8gZHVyYXRpb24gYW5kIHZlbG9jaXR5KSwganVzdCB0byBjYXB0dXJlIHRoZSB3YWl0LlxuXG4gICAgICBpZiAod2FpdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRyYWNrLmFkZEV2ZW50KG5ldyBOb3RlRXZlbnQoe1xuICAgICAgICAgIHBpdGNoOiAnW2M0XScsXG4gICAgICAgICAgZHVyYXRpb246ICcwJyxcbiAgICAgICAgICB3YWl0OiB3YWl0LFxuICAgICAgICAgIHZlbG9jaXR5OiAnMCdcbiAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJhY2s7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIFZleEZsb3cgcGl0Y2ggc3ludGF4IHRvIE1pZGlXcml0ZXJKUyBzeW50YXhcbiAgICAgKiBAcGFyYW0gcGl0Y2ggc3RyaW5nXG4gICAgICogQHBhcmFtIGluZGV4IHBpdGNoIGluZGV4XG4gICAgICogQHBhcmFtIG5vdGUgc3RydWN0IGZyb20gVmV4Zmxvd1xuICAgICAqIEBwYXJhbSBhZGRSZW5kZXJlZEFjY2lkZW50YWxzIGFkZHMgVmV4ZmxvdyByZW5kZXJlZCBhY2NpZGVudGFsc1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY29udmVydFBpdGNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbnZlcnRQaXRjaChwaXRjaCwgaW5kZXgsIG5vdGUpIHtcbiAgICAgIHZhciBhZGRSZW5kZXJlZEFjY2lkZW50YWxzID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiBmYWxzZTtcbiAgICAgIC8vIFNwbGl0cyBub3RlIG5hbWUgZnJvbSBvY3RhdmVcbiAgICAgIHZhciBwaXRjaFBhcnRzID0gcGl0Y2guc3BsaXQoJy8nKTsgLy8gUmV0cmlldmVzIGFjY2lkZW50YWxzIGZyb20gcGl0Y2hcbiAgICAgIC8vIFJlbW92ZXMgbmF0dXJhbCBhY2NpZGVudGFscyBzaW5jZSB0aGV5IGFyZSBub3QgYWNjZXB0ZWQgaW4gVG9uYWwgTWlkaVxuXG4gICAgICB2YXIgYWNjaWRlbnRhbHMgPSBwaXRjaFBhcnRzWzBdLnN1YnN0cmluZygxKS5yZXBsYWNlKCduJywgJycpO1xuXG4gICAgICBpZiAoYWRkUmVuZGVyZWRBY2NpZGVudGFscykge1xuICAgICAgICB2YXIgX25vdGUkZ2V0QWNjaWRlbnRhbHM7XG5cbiAgICAgICAgKF9ub3RlJGdldEFjY2lkZW50YWxzID0gbm90ZS5nZXRBY2NpZGVudGFscygpKSA9PT0gbnVsbCB8fCBfbm90ZSRnZXRBY2NpZGVudGFscyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX25vdGUkZ2V0QWNjaWRlbnRhbHMuZm9yRWFjaChmdW5jdGlvbiAoYWNjaWRlbnRhbCkge1xuICAgICAgICAgIGlmIChhY2NpZGVudGFsLmluZGV4ID09PSBpbmRleCkge1xuICAgICAgICAgICAgaWYgKGFjY2lkZW50YWwudHlwZSA9PT0gJ24nKSB7XG4gICAgICAgICAgICAgIGFjY2lkZW50YWxzID0gJyc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhY2NpZGVudGFscyArPSBhY2NpZGVudGFsLnR5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBpdGNoUGFydHNbMF1bMF0gKyBhY2NpZGVudGFscyArIHBpdGNoUGFydHNbMV07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIFZleEZsb3cgZHVyYXRpb24gc3ludGF4IHRvIE1pZGlXcml0ZXJKUyBzeW50YXhcbiAgICAgKiBAcGFyYW0gbm90ZSBzdHJ1Y3QgZnJvbSBWZXhGbG93XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjb252ZXJ0RHVyYXRpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29udmVydER1cmF0aW9uKG5vdGUpIHtcbiAgICAgIHJldHVybiAnZCcucmVwZWF0KG5vdGUuZG90cykgKyB0aGlzLmNvbnZlcnRCYXNlRHVyYXRpb24obm90ZS5kdXJhdGlvbikgKyAobm90ZS50dXBsZXQgPyAndCcgKyBub3RlLnR1cGxldC5udW1fbm90ZXMgOiAnJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIFZleEZsb3cgYmFzZSBkdXJhdGlvbiBzeW50YXggdG8gTWlkaVdyaXRlckpTIHN5bnRheFxuICAgICAqIEBwYXJhbSBkdXJhdGlvbiBWZXhmbG93IGR1cmF0aW9uXG4gICAgICogQHJldHVybnMgTWlkaVdyaXRlckpTIGR1cmF0aW9uXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjb252ZXJ0QmFzZUR1cmF0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbnZlcnRCYXNlRHVyYXRpb24oZHVyYXRpb24pIHtcbiAgICAgIHN3aXRjaCAoZHVyYXRpb24pIHtcbiAgICAgICAgY2FzZSAndyc6XG4gICAgICAgICAgcmV0dXJuICcxJztcblxuICAgICAgICBjYXNlICdoJzpcbiAgICAgICAgICByZXR1cm4gJzInO1xuXG4gICAgICAgIGNhc2UgJ3EnOlxuICAgICAgICAgIHJldHVybiAnNCc7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gZHVyYXRpb247XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFZleEZsb3c7XG59KCk7XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgaGVhZGVyIGNodW5rIHNlY3Rpb24gb2YgYSBNSURJIGZpbGUuXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyT2ZUcmFja3MgLSBOdW1iZXIgb2YgdHJhY2tzXG4gKiBAcmV0dXJuIHtIZWFkZXJDaHVua31cbiAqL1xuXG52YXIgSGVhZGVyQ2h1bmsgPSBmdW5jdGlvbiBIZWFkZXJDaHVuayhudW1iZXJPZlRyYWNrcykge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSGVhZGVyQ2h1bmspO1xuXG4gIHRoaXMudHlwZSA9IENvbnN0YW50cy5IRUFERVJfQ0hVTktfVFlQRTtcbiAgdmFyIHRyYWNrVHlwZSA9IG51bWJlck9mVHJhY2tzID4gMSA/IENvbnN0YW50cy5IRUFERVJfQ0hVTktfRk9STUFUMSA6IENvbnN0YW50cy5IRUFERVJfQ0hVTktfRk9STUFUMDtcbiAgdGhpcy5kYXRhID0gdHJhY2tUeXBlLmNvbmNhdChVdGlscy5udW1iZXJUb0J5dGVzKG51bWJlck9mVHJhY2tzLCAyKSwgLy8gdHdvIGJ5dGVzIGxvbmcsXG4gIENvbnN0YW50cy5IRUFERVJfQ0hVTktfRElWSVNJT04pO1xuICB0aGlzLnNpemUgPSBbMCwgMCwgMCwgdGhpcy5kYXRhLmxlbmd0aF07XG59O1xuXG4vKipcbiAqIE9iamVjdCB0aGF0IHB1dHMgdG9nZXRoZXIgdHJhY2tzIGFuZCBwcm92aWRlcyBtZXRob2RzIGZvciBmaWxlIG91dHB1dC5cbiAqIEBwYXJhbSB7YXJyYXl8VHJhY2t9IHRyYWNrcyAtIEEgc2luZ2xlIHtUcmFja30gb2JqZWN0IG9yIGFuIGFycmF5IG9mIHtUcmFja30gb2JqZWN0cy5cbiAqIEByZXR1cm4ge1dyaXRlcn1cbiAqL1xuXG52YXIgV3JpdGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gV3JpdGVyKHRyYWNrcykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV3JpdGVyKTtcblxuICAgIC8vIEVuc3VyZSB0cmFjayBpcyBhbiBhcnJheVxuICAgIHRyYWNrcyA9IFV0aWxzLnRvQXJyYXkodHJhY2tzKTtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICB0aGlzLmRhdGEucHVzaChuZXcgSGVhZGVyQ2h1bmsodHJhY2tzLmxlbmd0aCkpOyAvLyBGb3IgZWFjaCB0cmFjayBhZGQgZmluYWwgZW5kIG9mIHRyYWNrIGV2ZW50IGFuZCBidWlsZCBkYXRhXG5cbiAgICB0cmFja3MuZm9yRWFjaChmdW5jdGlvbiAodHJhY2ssIGkpIHtcbiAgICAgIF90aGlzLmRhdGEucHVzaCh0cmFjay5idWlsZERhdGEoKSk7XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIEJ1aWxkcyB0aGUgZmlsZSBpbnRvIGEgVWludDhBcnJheVxuICAgKiBAcmV0dXJuIHtVaW50OEFycmF5fVxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhXcml0ZXIsIFt7XG4gICAga2V5OiBcImJ1aWxkRmlsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBidWlsZEZpbGUoKSB7XG4gICAgICB2YXIgYnVpbGQgPSBbXTsgLy8gRGF0YSBjb25zaXN0cyBvZiBjaHVua3Mgd2hpY2ggY29uc2lzdHMgb2YgZGF0YVxuXG4gICAgICB0aGlzLmRhdGEuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gYnVpbGQgPSBidWlsZC5jb25jYXQoZC50eXBlLCBkLnNpemUsIGQuZGF0YSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShidWlsZCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnQgZmlsZSBidWZmZXIgdG8gYSBiYXNlNjQgc3RyaW5nLiAgRGlmZmVyZW50IG1ldGhvZHMgZGVwZW5kaW5nIG9uIGlmIGJyb3dzZXIgb3Igbm9kZS5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJiYXNlNjRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmFzZTY0KCkge1xuICAgICAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSByZXR1cm4gYnRvYShTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIHRoaXMuYnVpbGRGaWxlKCkpKTtcbiAgICAgIHJldHVybiBCdWZmZXIuZnJvbSh0aGlzLmJ1aWxkRmlsZSgpKS50b1N0cmluZygnYmFzZTY0Jyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZGF0YSBVUkkuXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZGF0YVVyaVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkYXRhVXJpKCkge1xuICAgICAgcmV0dXJuICdkYXRhOmF1ZGlvL21pZGk7YmFzZTY0LCcgKyB0aGlzLmJhc2U2NCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBPdXRwdXQgdG8gc3Rkb3V0XG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3Rkb3V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0ZG91dCgpIHtcbiAgICAgIHJldHVybiBwcm9jZXNzLnN0ZG91dC53cml0ZShuZXcgQnVmZmVyKHRoaXMuYnVpbGRGaWxlKCkpKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gV3JpdGVyO1xufSgpO1xuXG52YXIgbWFpbiA9IHtcbiAgQ29uc3RhbnRzOiBDb25zdGFudHMsXG4gIE5vdGVPbkV2ZW50OiBOb3RlT25FdmVudCxcbiAgTm90ZU9mZkV2ZW50OiBOb3RlT2ZmRXZlbnQsXG4gIE5vdGVFdmVudDogTm90ZUV2ZW50LFxuICBQaXRjaEJlbmRFdmVudDogUGl0Y2hCZW5kRXZlbnQsXG4gIFByb2dyYW1DaGFuZ2VFdmVudDogUHJvZ3JhbUNoYW5nZUV2ZW50LFxuICBUcmFjazogVHJhY2ssXG4gIFV0aWxzOiBVdGlscyxcbiAgVmV4RmxvdzogVmV4RmxvdyxcbiAgV3JpdGVyOiBXcml0ZXJcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbWFpbjtcbiIsICJpbXBvcnQgeyBVdGlscyB9IGZyb20gJ21pZGktd3JpdGVyLWpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgdGhpcy5iZWF0cyA9IFtdO1xuICAgIHRoaXMuYmFycyA9IDg7XG4gICAgdGhpcy5icG0gPSAxMjc7XG4gICAgdGhpcy5mcmFxID0gMSAvIHRoaXMuYmFycztcbiAgICB0aGlzLnRyYWNrTm9kZXMgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy50cmFja1N0YXRlID0gbmV3IE1hcCgpO1xuICAgIHRoaXMuZGVsYXlEaXZpc2lvbiA9IDMgLyA4O1xuICAgIHRoaXMub25CZWF0ID0gbnVsbDtcbiAgICB0aGlzLmluaXRBdWRpbygpO1xuICB9XG5cbiAgaW5pdEF1ZGlvKCkge1xuICAgIGNvbnN0IEF1ZGlvQ29udGV4dEZ1bmMgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQ7XG5cbiAgICB0aGlzLmF1ZGlvQ29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHRGdW5jKCk7XG4gICAgdGhpcy5kZXN0aW5hdGlvbiA9IHRoaXMuYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uO1xuICAgIHRoaXMucGxheWVyID0gbmV3IFdlYkF1ZGlvRm9udFBsYXllcigpO1xuICAgIHRoaXMuZXF1YWxpemVyID0gdGhpcy5wbGF5ZXIuY3JlYXRlQ2hhbm5lbCh0aGlzLmF1ZGlvQ29udGV4dCk7XG4gICAgdGhpcy5tYXN0ZXJHYWluID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgIHRoaXMuZWNobyA9IHRoaXMucGxheWVyLmNyZWF0ZVJldmVyYmVyYXRvcih0aGlzLmF1ZGlvQ29udGV4dCk7XG4gICAgdGhpcy5kZWxheUlucHV0ID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgIHRoaXMuZGVsYXkgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVEZWxheSg0KTtcbiAgICB0aGlzLmRlbGF5RmVlZGJhY2sgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgdGhpcy5kZWxheVdldCA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKTtcblxuICAgIHRoaXMubWFzdGVyR2Fpbi5nYWluLnZhbHVlID0gMTtcbiAgICB0aGlzLmRlbGF5RmVlZGJhY2suZ2Fpbi52YWx1ZSA9IDAuMzU7XG4gICAgdGhpcy5kZWxheVdldC5nYWluLnZhbHVlID0gMTtcbiAgICB0aGlzLmRlbGF5SW5wdXQuZ2Fpbi52YWx1ZSA9IDE7XG5cbiAgICB0aGlzLmVxdWFsaXplci5vdXRwdXQuY29ubmVjdCh0aGlzLm1hc3RlckdhaW4pO1xuICAgIHRoaXMuZWNoby5vdXRwdXQuY29ubmVjdCh0aGlzLm1hc3RlckdhaW4pO1xuXG4gICAgdGhpcy5kZWxheUlucHV0LmNvbm5lY3QodGhpcy5kZWxheSk7XG4gICAgdGhpcy5kZWxheS5jb25uZWN0KHRoaXMuZGVsYXlGZWVkYmFjayk7XG4gICAgdGhpcy5kZWxheUZlZWRiYWNrLmNvbm5lY3QodGhpcy5kZWxheSk7XG4gICAgdGhpcy5kZWxheS5jb25uZWN0KHRoaXMuZGVsYXlXZXQpO1xuICAgIHRoaXMuZGVsYXlXZXQuY29ubmVjdCh0aGlzLm1hc3RlckdhaW4pO1xuXG4gICAgdGhpcy5tYXN0ZXJHYWluLmNvbm5lY3QodGhpcy5kZXN0aW5hdGlvbik7XG4gICAgdGhpcy51cGRhdGVEZWxheVRpbWUoKTtcbiAgfVxuXG4gIHBpdGNoKHZhbHVlKSB7XG4gICAgcmV0dXJuIFV0aWxzLmdldFBpdGNoKHZhbHVlKSArIHRoaXMub2Zmc2V0O1xuICB9XG5cbiAgcHJlbG9hZChkYXRhKSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YSB8fCB0aGlzLmRhdGE7XG5cbiAgICBsZXQgY291bnQgPSAwO1xuICAgIHRoaXMuZGF0YS5mb3JFYWNoKHRyYWNrID0+IHtcbiAgICAgIGlmICh0cmFja1syXS5sZW5ndGggPiBjb3VudCkgY291bnQgPSB0cmFja1syXS5sZW5ndGg7XG5cbiAgICAgIGNvbnN0IGluZm8gPSB0cmFja1swXSA+PSAyMDAwXG4gICAgICAgID8gdGhpcy5wbGF5ZXIubG9hZGVyLmRydW1JbmZvKHRyYWNrWzBdIC0gMjAwMClcbiAgICAgICAgOiB0aGlzLnBsYXllci5sb2FkZXIuaW5zdHJ1bWVudEluZm8odHJhY2tbMF0pO1xuXG4gICAgICB0aGlzLmNhY2hlSW5zdHJ1bWVudChpbmZvKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGR1cmF0aW9uID0gVXRpbHMuZ2V0VGlja0R1cmF0aW9uKCczMicpIC8gMjU2O1xuICAgIGNvbnN0IG5leHRLZXlzID0gbmV3IFNldCgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBiZWF0ID0gbmV3IE1hcCgpO1xuXG4gICAgICB0aGlzLmRhdGEuZm9yRWFjaCh0cmFjayA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IGAke3RyYWNrWzBdfS8ke3RyYWNrWzFdfWA7XG4gICAgICAgIG5leHRLZXlzLmFkZChrZXkpO1xuICAgICAgICBpZiAoIWJlYXQuaGFzKGtleSkpIGJlYXQuc2V0KGtleSwgeyBkcnVtczogW10sIG5vdGVzOiBbXSB9KTtcbiAgICAgICAgY29uc3Qgc2xvdCA9IGJlYXQuZ2V0KGtleSk7XG4gICAgICAgIGNvbnN0IHRpY2sgPSB0cmFja1syXVtpXSB8fCB7fTtcblxuICAgICAgICBpZiAodHJhY2tbMF0gPj0gMjAwMCkge1xuICAgICAgICAgIHNsb3QuZHJ1bXMucHVzaChbdHJhY2tbMF0gLSAyMDAwLCB0aWNrLnZdKTtcbiAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHRpY2subikpIHtcbiAgICAgICAgICB0aWNrLm4uZm9yRWFjaCh0b25lID0+IHtcbiAgICAgICAgICAgIHNsb3Qubm90ZXMucHVzaChbdHJhY2tbMF0sIHRoaXMucGl0Y2godG9uZSksIGR1cmF0aW9uLCB0aWNrLnZdKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aWNrLm4pIHtcbiAgICAgICAgICBzbG90Lm5vdGVzLnB1c2goW3RyYWNrWzBdLCB0aGlzLnBpdGNoKHRpY2subiksIGR1cmF0aW9uLCB0aWNrLnZdKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuYmVhdHNbaV0gPSBiZWF0O1xuICAgIH1cblxuICAgIHRoaXMudHJhY2tOb2Rlcy5mb3JFYWNoKChub2Rlcywga2V5KSA9PiB7XG4gICAgICBpZiAoIW5leHRLZXlzLmhhcyhrZXkpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbm9kZXMuZHJ5LmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICBub2Rlcy5yZXZlcmJTZW5kLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICBub2Rlcy5kZWxheVNlbmQuZGlzY29ubmVjdCgpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaWdub3JlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmFja05vZGVzLmRlbGV0ZShrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbmV4dEtleXMuZm9yRWFjaChrZXkgPT4gdGhpcy5nZXRUcmFja05vZGVzKGtleSkpO1xuICB9XG5cbiAgY29udGV4dFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXVkaW9Db250ZXh0LmN1cnJlbnRUaW1lO1xuICB9XG5cbiAgcGxheUxvb3BNYWNoaW5lKGZyb21CZWF0KSB7XG4gICAgdGhpcy5zdGFydFBsYXlMb29wKHRoaXMuYmVhdHMsIHRoaXMuYnBtLCB0aGlzLmZyYXEsIGZyb21CZWF0KTtcbiAgfVxuXG4gIHN0b3BMb29wTWFjaGluZSgpIHtcbiAgICB0aGlzLnN0b3BQbGF5TG9vcCgpO1xuICB9XG5cbiAgc2V0TG9vcE1hY2hpbmUoZGF0YSwgdGVtcG8sIGxlbmd0aCwgdHJhbnNwb3NlKSB7XG4gICAgY29uc3QgY2hhbmdlZCA9IHRlbXBvICE9PSB0aGlzLmJwbVxuICAgICAgfHwgbGVuZ3RoICE9PSB0aGlzLmJhcnNcbiAgICAgIHx8IHRyYW5zcG9zZSAhPT0gdGhpcy5vZmZzZXQ7XG5cbiAgICBpZiAoY2hhbmdlZCkgdGhpcy5zdG9wUGxheUxvb3AoKTtcblxuICAgIHRoaXMuYmVhdHMubGVuZ3RoID0gMDtcbiAgICB0aGlzLmJwbSA9IHRlbXBvIHx8IDEyNztcbiAgICB0aGlzLmJhcnMgPSBsZW5ndGggfHwgMTY7XG4gICAgdGhpcy5vZmZzZXQgPSB0cmFuc3Bvc2UgfHwgMDtcbiAgICB0aGlzLnVwZGF0ZURlbGF5VGltZSgpO1xuICAgIHRoaXMucHJlbG9hZChkYXRhKTtcbiAgICB0aGlzLmZyYXEgPSAxIC8gdGhpcy5iYXJzO1xuXG4gICAgcmV0dXJuIGNoYW5nZWQ7XG4gIH1cblxuICB1cGRhdGVUcmFja3MoZGF0YSkge1xuICAgIHRoaXMuYmVhdHMubGVuZ3RoID0gMDtcbiAgICB0aGlzLnByZWxvYWQoZGF0YSk7XG4gICAgaWYgKCF0aGlzLmJlYXRzLmxlbmd0aCB8fCB0eXBlb2YgdGhpcy5iZWF0SW5kZXggIT09ICdudW1iZXInIHx8IHRoaXMuYmVhdEluZGV4ID49IHRoaXMuYmVhdHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmJlYXRJbmRleCA9IDA7XG4gICAgfVxuICB9XG5cbiAgc3RhcnRQbGF5TG9vcChiZWF0cywgYnBtLCBkZW5zaXR5LCBmcm9tQmVhdCkge1xuICAgIHRoaXMubG9vcFN0YXJ0ZWQgPSB0cnVlO1xuXG4gICAgY29uc3Qgd2hvbGVOb3RlRHVyYXRpb24gPSAoNCAqIDYwKSAvIGJwbTtcblxuICAgIHRoaXMuYmVhdEluZGV4ID0gZnJvbUJlYXQgPCBiZWF0cy5sZW5ndGggPyBmcm9tQmVhdCA6IDA7XG4gICAgdGhpcy5wbGF5QmVhdEF0KHRoaXMuY29udGV4dFRpbWUoKSwgYmVhdHNbdGhpcy5iZWF0SW5kZXhdLCBicG0pO1xuXG4gICAgbGV0IG5leHRMb29wVGltZSA9IHRoaXMuY29udGV4dFRpbWUoKSArIGRlbnNpdHkgKiB3aG9sZU5vdGVEdXJhdGlvbjtcbiAgICB0aGlzLmxvb3BJbnRlcnZhbElEID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuY29udGV4dFRpbWUoKSA+PSBuZXh0TG9vcFRpbWUpIHtcbiAgICAgICAgdGhpcy5iZWF0SW5kZXggKz0gMTtcbiAgICAgICAgaWYgKHRoaXMuYmVhdEluZGV4ID49IGJlYXRzLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuYmVhdEluZGV4ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGxheUJlYXRBdChuZXh0TG9vcFRpbWUsIGJlYXRzW3RoaXMuYmVhdEluZGV4XSwgYnBtKTtcbiAgICAgICAgbmV4dExvb3BUaW1lICs9IGRlbnNpdHkgKiB3aG9sZU5vdGVEdXJhdGlvbjtcbiAgICAgIH1cbiAgICB9LCAyMik7XG4gIH1cblxuICBzdG9wUGxheUxvb3AoKSB7XG4gICAgdGhpcy5sb29wU3RhcnRlZCA9IGZhbHNlO1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5sb29wSW50ZXJ2YWxJRCk7XG4gICAgdGhpcy5jYW5jZWxRdWV1ZSgpO1xuICB9XG5cbiAgZ2V0VHJhY2tTdGF0ZShrZXkpIHtcbiAgICBpZiAoIXRoaXMudHJhY2tTdGF0ZS5oYXMoa2V5KSkge1xuICAgICAgdGhpcy50cmFja1N0YXRlLnNldChrZXksIHtcbiAgICAgICAgbXV0ZWQ6IGZhbHNlLFxuICAgICAgICBzb2xvOiBmYWxzZSxcbiAgICAgICAgdm9sdW1lOiAxLFxuICAgICAgICByZXZlcmJTZW5kOiAwLFxuICAgICAgICBkZWxheVNlbmQ6IDAsXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudHJhY2tTdGF0ZS5nZXQoa2V5KTtcbiAgfVxuXG4gIGFwcGx5VHJhY2tTdGF0ZShrZXkpIHtcbiAgICBjb25zdCBub2RlcyA9IHRoaXMuZ2V0VHJhY2tOb2RlcyhrZXkpO1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRUcmFja1N0YXRlKGtleSk7XG4gICAgbm9kZXMuc3RhdGUgPSBzdGF0ZTtcbiAgICBub2Rlcy5kcnkuZ2Fpbi52YWx1ZSA9IHN0YXRlLm11dGVkID8gMCA6IHN0YXRlLnZvbHVtZTtcbiAgICBub2Rlcy5yZXZlcmJTZW5kLmdhaW4udmFsdWUgPSBzdGF0ZS5yZXZlcmJTZW5kO1xuICAgIG5vZGVzLmRlbGF5U2VuZC5nYWluLnZhbHVlID0gc3RhdGUuZGVsYXlTZW5kO1xuICB9XG5cbiAgZ2V0VHJhY2tOb2RlcyhrZXkpIHtcbiAgICBpZiAodGhpcy50cmFja05vZGVzLmhhcyhrZXkpKSB7XG4gICAgICByZXR1cm4gdGhpcy50cmFja05vZGVzLmdldChrZXkpO1xuICAgIH1cblxuICAgIGNvbnN0IGRyeSA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgICBjb25zdCByZXZlcmJTZW5kID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgIGNvbnN0IGRlbGF5U2VuZCA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKTtcblxuICAgIGRyeS5nYWluLnZhbHVlID0gMTtcbiAgICByZXZlcmJTZW5kLmdhaW4udmFsdWUgPSAwO1xuICAgIGRlbGF5U2VuZC5nYWluLnZhbHVlID0gMDtcblxuICAgIGRyeS5jb25uZWN0KHRoaXMuZXF1YWxpemVyLmlucHV0KTtcbiAgICByZXZlcmJTZW5kLmNvbm5lY3QodGhpcy5lY2hvLmlucHV0KTtcbiAgICBkZWxheVNlbmQuY29ubmVjdCh0aGlzLmRlbGF5SW5wdXQpO1xuXG4gICAgY29uc3Qgbm9kZXMgPSB7IGRyeSwgcmV2ZXJiU2VuZCwgZGVsYXlTZW5kIH07XG4gICAgdGhpcy50cmFja05vZGVzLnNldChrZXksIG5vZGVzKTtcbiAgICB0aGlzLmFwcGx5VHJhY2tTdGF0ZShrZXkpO1xuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHNldE11dGUoa2V5LCB2YWx1ZSkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRUcmFja1N0YXRlKGtleSk7XG4gICAgc3RhdGUubXV0ZWQgPSBCb29sZWFuKHZhbHVlKTtcbiAgICB0aGlzLmFwcGx5VHJhY2tTdGF0ZShrZXkpO1xuICB9XG5cbiAgc2V0U29sbyhrZXksIHZhbHVlKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFRyYWNrU3RhdGUoa2V5KTtcbiAgICBzdGF0ZS5zb2xvID0gQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBzZXRWb2x1bWUoa2V5LCB2YWx1ZSkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRUcmFja1N0YXRlKGtleSk7XG4gICAgc3RhdGUudm9sdW1lID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdmFsdWUpKTtcbiAgICB0aGlzLmFwcGx5VHJhY2tTdGF0ZShrZXkpO1xuICB9XG5cbiAgc2V0UmV2ZXJiU2VuZChrZXksIHZhbHVlKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFRyYWNrU3RhdGUoa2V5KTtcbiAgICBzdGF0ZS5yZXZlcmJTZW5kID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdmFsdWUpKTtcbiAgICB0aGlzLmFwcGx5VHJhY2tTdGF0ZShrZXkpO1xuICB9XG5cbiAgc2V0RGVsYXlTZW5kKGtleSwgdmFsdWUpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0VHJhY2tTdGF0ZShrZXkpO1xuICAgIHN0YXRlLmRlbGF5U2VuZCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHZhbHVlKSk7XG4gICAgdGhpcy5hcHBseVRyYWNrU3RhdGUoa2V5KTtcbiAgfVxuXG4gIHNldERlbGF5RmVlZGJhY2sodmFsdWUpIHtcbiAgICB0aGlzLmRlbGF5RmVlZGJhY2suZ2Fpbi52YWx1ZSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDAuNzUsIHZhbHVlKSk7XG4gIH1cblxuICBzZXREZWxheVRpbWUodmFsdWUpIHtcbiAgICB0aGlzLmRlbGF5RGl2aXNpb24gPSBNYXRoLm1heCgwLjEyNSwgTWF0aC5taW4oMC43NSwgdmFsdWUpKTtcbiAgICB0aGlzLnVwZGF0ZURlbGF5VGltZSgpO1xuICB9XG5cbiAgdXBkYXRlRGVsYXlUaW1lKCkge1xuICAgIGNvbnN0IHdob2xlID0gKDQgKiA2MCkgLyAodGhpcy5icG0gfHwgMTI3KTtcbiAgICB0aGlzLmRlbGF5LmRlbGF5VGltZS52YWx1ZSA9IHdob2xlICogdGhpcy5kZWxheURpdmlzaW9uO1xuICB9XG5cbiAgZ2V0VHJhY2tLZXlzKCkge1xuICAgIHJldHVybiBbLi4udGhpcy50cmFja05vZGVzLmtleXMoKV07XG4gIH1cblxuICBjYW5jZWxRdWV1ZSgpIHtcbiAgICB0aGlzLnBsYXllci5jYW5jZWxRdWV1ZSh0aGlzLmF1ZGlvQ29udGV4dCk7XG4gIH1cblxuICBjYWNoZUluc3RydW1lbnQoaW5mbykge1xuICAgIGlmIChpbmZvICYmICF3aW5kb3dbaW5mby52YXJpYWJsZV0pIHtcbiAgICAgIGlmICh3aW5kb3dbaW5mby52YXJpYWJsZSArIDEyN10pIHJldHVybjtcbiAgICAgIHdpbmRvd1tpbmZvLnZhcmlhYmxlICsgMTI3XSA9IHRydWU7XG4gICAgICB0aGlzLnBsYXllci5sb2FkZXIuc3RhcnRMb2FkKHRoaXMuYXVkaW9Db250ZXh0LCBpbmZvLnVybCwgaW5mby52YXJpYWJsZSk7XG4gICAgICB0aGlzLnBsYXllci5sb2FkZXIud2FpdExvYWQoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnY2FjaGVkJywgaW5mby50aXRsZSk7XG4gICAgICAgIGRlbGV0ZSB3aW5kb3dbaW5mby52YXJpYWJsZSArIDEyN107XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwbGF5RHJ1bSh3aGVuLCBkcnVtLCBub2Rlcykge1xuICAgIGNvbnN0IFtpbnN0cnVtZW50LCBsZXZlbF0gPSBkcnVtO1xuICAgIGNvbnN0IGluZm8gPSB0aGlzLnBsYXllci5sb2FkZXIuZHJ1bUluZm8oaW5zdHJ1bWVudCk7XG5cbiAgICBpZiAod2luZG93W2luZm8udmFyaWFibGVdKSB7XG4gICAgICBjb25zdCBwaXRjaCA9IHdpbmRvd1tpbmZvLnZhcmlhYmxlXS56b25lc1swXS5rZXlSYW5nZUxvdztcbiAgICAgIGNvbnN0IGdhaW4gPSAoMSAvIDEyNykgKiBsZXZlbDtcbiAgICAgIGlmIChsZXZlbCA+IDApIHRoaXMucXVldWVUb1RyYWNrTm9kZXMod2luZG93W2luZm8udmFyaWFibGVdLCB3aGVuLCBwaXRjaCwgMSAvIDY0LCBnYWluLCBub2Rlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2FjaGVJbnN0cnVtZW50KGluZm8pO1xuICAgIH1cbiAgfVxuXG4gIHF1ZXVlVG9UcmFja05vZGVzKGZvbnQsIHdoZW4sIHBpdGNoLCBkdXJhdGlvbiwgZ2Fpbiwgbm9kZXMpIHtcbiAgICB0aGlzLnBsYXllci5xdWV1ZVdhdmVUYWJsZSh0aGlzLmF1ZGlvQ29udGV4dCwgbm9kZXMuZHJ5LCBmb250LCB3aGVuLCBwaXRjaCwgZHVyYXRpb24sIGdhaW4pO1xuICAgIGlmIChub2Rlcy5yZXZlcmJTZW5kLmdhaW4udmFsdWUgPiAwKSB7XG4gICAgICB0aGlzLnBsYXllci5xdWV1ZVdhdmVUYWJsZSh0aGlzLmF1ZGlvQ29udGV4dCwgbm9kZXMucmV2ZXJiU2VuZCwgZm9udCwgd2hlbiwgcGl0Y2gsIGR1cmF0aW9uLCBnYWluKTtcbiAgICB9XG4gICAgaWYgKG5vZGVzLmRlbGF5U2VuZC5nYWluLnZhbHVlID4gMCkge1xuICAgICAgdGhpcy5wbGF5ZXIucXVldWVXYXZlVGFibGUodGhpcy5hdWRpb0NvbnRleHQsIG5vZGVzLmRlbGF5U2VuZCwgZm9udCwgd2hlbiwgcGl0Y2gsIGR1cmF0aW9uLCBnYWluKTtcbiAgICB9XG4gIH1cblxuICBwbGF5QmVhdEF0KHdoZW4sIGJlYXQsIGJwbSkge1xuICAgIGlmICghYmVhdCkgcmV0dXJuO1xuICAgIGNvbnN0IE4gPSAoNCAqIDYwKSAvIGJwbTtcbiAgICBjb25zdCBoYXNTb2xvID0gWy4uLnRoaXMudHJhY2tTdGF0ZS52YWx1ZXMoKV0uc29tZShpdGVtID0+IGl0ZW0uc29sbyk7XG5cbiAgICBiZWF0LmZvckVhY2goKHNsb3QsIGtleSkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFRyYWNrU3RhdGUoa2V5KTtcbiAgICAgIGlmIChzdGF0ZS5tdXRlZCkgcmV0dXJuO1xuICAgICAgaWYgKGhhc1NvbG8gJiYgIXN0YXRlLnNvbG8pIHJldHVybjtcblxuICAgICAgY29uc3Qgbm9kZXMgPSB0aGlzLmdldFRyYWNrTm9kZXMoa2V5KTtcbiAgICAgIGxldCB0b3VjaGVkID0gZmFsc2U7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xvdC5kcnVtcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB0aGlzLnBsYXlEcnVtKHdoZW4sIHNsb3QuZHJ1bXNbaV0sIG5vZGVzKTtcbiAgICAgICAgdG91Y2hlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHNsb3Qubm90ZXMuZm9yRWFjaChub3RlID0+IHtcbiAgICAgICAgY29uc3QgW2luc3RydW1lbnQsIHBpdGNoZXMsIGR1cmF0aW9uLCBsZXZlbF0gPSBub3RlO1xuICAgICAgICBjb25zdCBpbmZvID0gdGhpcy5wbGF5ZXIubG9hZGVyLmluc3RydW1lbnRJbmZvKGluc3RydW1lbnQpO1xuICAgICAgICBpZiAod2luZG93W2luZm8udmFyaWFibGVdKSB7XG4gICAgICAgICAgdGhpcy5xdWV1ZVRvVHJhY2tOb2Rlcyh3aW5kb3dbaW5mby52YXJpYWJsZV0sIHdoZW4sIHBpdGNoZXMsIGR1cmF0aW9uICogTiwgKDEgLyAxMjcpICogbGV2ZWwsIG5vZGVzKTtcbiAgICAgICAgICB0b3VjaGVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNhY2hlSW5zdHJ1bWVudChpbmZvKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0b3VjaGVkICYmIHR5cGVvZiB0aGlzLm9uQmVhdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLm9uQmVhdChrZXksIHdoZW4sIHRoaXMuYmVhdEluZGV4KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwgIi8qKlxuICogVGFrZSBhIHN0cmluZyBpbnB1dCBhbmQgY2hlY2sgaWYgaXQgcyBhIG5vdGUgbmFtZSBvciBub3RcbiAqIEBwYXJhbSAge1N0cmluZ30gc3RyIE5vdGUgbmFtZSBlLmcuIGM0XG4gKiBAcmV0dXJuIHtCb29sZWFufSBSZXR1cm4gdHJ1ZSBmb3IgYzQgb3IgcmV0dXJuIGZhbHNlIGZvciBzb21ldGhpbmcgbGlrZSBDTVxuICovXG5leHBvcnQgY29uc3QgaXNOb3RlID0gKHN0cjogc3RyaW5nKTogYm9vbGVhbiA9PlxuICAvXlthLWdBLUddKD86I3xiKT9cXGQkLy50ZXN0KHN0cik7XG5cbi8qKlxuICogVGFrZSBhIFN0cmluZyBpbnB1dCBzdWNoIGFzIHh4eFt4eFt4eF1dXG4gKiBhbmQgcmV0dXJuIGFuIEFycmF5IGFzIFsneCcsICd4JywgJ3gnLCBbJ3gnLCAneCcsIFsneCcsICd4J11dXVxuICogQHBhcmFtICB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5leHBvcnQgY29uc3QgZXhwYW5kU3RyID0gKHN0cjogc3RyaW5nKTogYW55ID0+IHtcbiAgc3RyID0gSlNPTi5zdHJpbmdpZnkoc3RyLnNwbGl0KCcnKSk7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKC8sXCJcXFtcIiwvZywgJywgWycpO1xuICBzdHIgPSBzdHIucmVwbGFjZSgvXCJcXFtcIiwvZywgJ1snKTtcbiAgc3RyID0gc3RyLnJlcGxhY2UoLyxcIlxcXVwiL2csICddJyk7XG4gIHJldHVybiBKU09OLnBhcnNlKHN0cik7XG59O1xuXG4vKipcbiAqIEJhc2ljIEFycmF5IHJhbmRvbWl6ZXJcbiAqIEBwYXJhbSAge0FycmF5fSBhcnJcbiAqIEBwYXJhbSAge2Jvb2xlYW59IGZ1bGxTaHVmZmxlIEVuc3VyZSBubyBlbGVtZW50cyByZW1haW4gaW4gb2xkIHBsYWNlXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuZXhwb3J0IGNvbnN0IHNodWZmbGUgPSAoYXJyOiBhbnlbXSwgZnVsbFNodWZmbGU6IGJvb2xlYW4gPSB0cnVlKTogc3RyaW5nW10gPT4ge1xuICBjb25zdCBsYXN0SW5kZXg6IG51bWJlciA9IGFyci5sZW5ndGggLSAxO1xuXG4gIC8vIFNodWZmbGUgYWxnb3JpdGhtIGJ5IFJpY2hhcmQgRHVyc3RlbmZlbGQgKERvbmFsZCBFLiBLbnV0aCksIGFsc28gUm9uYWxkIEZpc2hlciBhbmQgRnJhbmsgWWF0ZXMuXG4gIC8vIFwiRnVsbCBTaHVmZmxlXCIgTW9kaWZpY2F0aW9uIHRvIGVuc3VyZSBubyBlbGVtZW50cyByZW1haW4gaW4gdGhlaXIgb3JpZ2luYWwgcGxhY2UgKGJ5IHRha2luZyBlYWNoIGVsZW1lbnQgb25jZVxuICAvLyBhbmQgc3dhcHBpbmcgd2l0aCBhbnkgcmVtYWluaW5nIGVsZW1lbnRzKVxuICBhcnIuZm9yRWFjaCgoZWwsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgaWYgKGlkeCA+PSBsYXN0SW5kZXgpIHtcbiAgICAgIC8vIE5vIHNodWZmbGluZyBsYXN0IGVsZW1lbnRcbiAgICAgIC8vIE9uZSBiZWZvcmUgbGFzdCBpcyBhbHdheXMgc3dhcHBlZCB3aXRoIGxhc3QgYXQgdGhlIGVuZCBvZiB0aGUgbG9vcFxuICAgICAgLy8gU2luY2UgcHJldmlvdXMgc3dhcHMgY2FuIG1vdmUgbGFzdCBlbGVtZW50IGludG8gb3RoZXIgcGxhY2VzLCB0aGVyZSBpcyBzdGlsbCBhIHJhbmRvbSBzaHVmZmxlIG9mIGxhc3QgZWxlbWVudFxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBTd2FwIGVsIHdpdGggb25lIG9mIHRoZSBoaWdoZXIgZWxlbWVudHMgcmFuZG9tbHlcbiAgICBsZXQgcm5kO1xuICAgIHJuZCA9IGZ1bGxTaHVmZmxlXG4gICAgICA/IC8vIFBpY2sgcmFuZG9tIG51bWJlciBmcm9tIGlkeCsxIHRvIGxhc3RJbmRleCAoTW9kaWZpZWQgYWxnb3JpdGhtLCAoTi0xKSEgY29tYmluYXRpb25zKVxuICAgICAgICAvLyBNYXRoLnJhbmRvbSAtPiBbMCwgMSkgLT4gWzAsIGxhc3RJbmRleC1pZHggKSAtLWZsb29yLT4gWzAsIGxhc3RJbmRleC1pZHgtMV1cbiAgICAgICAgLy8gcm5kID0gWzAsIGxhc3RJbmRleC1pZHgtMV0gKyAxICsgaWR4ID0gWzEgKyBpZHgsIGxhc3RJbmRleF1cbiAgICAgICAgLy8gKE9yaWdpbmFsIGFsZ29yaXRobSB3b3VsZCBwaWNrIHJuZCA9IFtpZHgsIGxhc3RJbmRleF0sIHRodXMgYW55IGVsZW1lbnQgY291bGQgYXJyaXZlIGJhY2sgaW50byBpdHMgc2xvdClcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGxhc3RJbmRleCAtIGlkeCkpICsgMSArIGlkeFxuICAgICAgOiAvLyBQaWNrIHJhbmRvbSBudW1iZXIgZnJvbSBpZHggdG8gbGFzdEluZGV4IChVbm1vZGlmaWVkIFJpY2hhcmQgRHVyc3RlbmZlbGQsIE4hIGNvbWJpbmF0aW9ucylcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGxhc3RJbmRleCArIDEgLSBpZHgpKSArIGlkeDtcbiAgICBhcnJbaWR4XSA9IGFycltybmRdO1xuICAgIGFycltybmRdID0gZWw7XG4gIH0pO1xuXG4gIHJldHVybiBhcnI7XG59O1xuXG4vKipcbiAqIFJldHVybiBhbiBhcnJheSBvZiBudW1iZXJzIHJlbGF0aXZlIHRvIG1heExldmVsIHx8IDEyNyBvcmRlcmVkIGluIGEgU2luZSB3YXZlIGZvcm1hdFxuICogVGhpcyBpcyB1c2VkIGJ5IHRoZSBgc2l6emxlYCBwYXJhbSBvZiB0aGUgYGNsaXBgIG1ldGhvZCB0byBhZGQgYSBydWRpbWVudGFyeSB2YXJpYXRpb24gdG8gdGhlIGFjY2VudCBvZiBlYWNoIG5vdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBtYXhMZXZlbCBBIG51bWJlciBiZXR3ZWVuIG5vdCBtb3JlIHRoYW4gMTI3XG4gKiBAcmV0dXJuIHtBcnJheX0gIEV4YW1wbGUgb3V0cHV0IFs2MywgOTAsIDExMCwgMTI3LCAxMTAsIDkwLCA2MywgMCwgNjMsIDkwLCAxMTAsIDEyNywgMTEwLCA5MCwgNjMsIDBdXG4gKi9cbmV4cG9ydCBjb25zdCBzaXp6bGVNYXAgPSAobWF4TGV2ZWw6IG51bWJlciA9IDEyNyk6IG51bWJlcltdID0+IHtcbiAgY29uc3QgcGkgPSBNYXRoLlBJO1xuICBjb25zdCBwaUFycjogbnVtYmVyW10gPSBbXG4gICAgcGkgLyA2LFxuICAgIHBpIC8gNCxcbiAgICBwaSAvIDMsXG4gICAgcGkgLyAyLFxuICAgICgyICogcGkpIC8gMyxcbiAgICAoMyAqIHBpKSAvIDQsXG4gICAgKDUgKiBwaSkgLyA2LFxuICAgIHBpLFxuICBdO1xuICBjb25zdCBwaUFyclJldjogbnVtYmVyW10gPSBbXG4gICAgMCxcbiAgICBwaSAvIDYsXG4gICAgcGkgLyA0LFxuICAgIHBpIC8gMyxcbiAgICBwaSAvIDIsXG4gICAgKDIgKiBwaSkgLyAzLFxuICAgICgzICogcGkpIC8gNCxcbiAgICAoNSAqIHBpKSAvIDYsXG4gIF07XG4gIHBpQXJyUmV2LnJldmVyc2UoKTtcbiAgY29uc3QgYXJyOiBudW1iZXJbXSA9IHBpQXJyLmNvbmNhdChwaUFyclJldik7XG4gIHJldHVybiBhcnIubWFwKGVsZW1lbnQgPT4gTWF0aC5yb3VuZChNYXRoLnNpbihlbGVtZW50KSAqIG1heExldmVsKSk7XG59O1xuXG4vKipcbiAqIFBpY2sgb25lIGl0ZW0gcmFuZG9tbHkgZnJvbSBhbiBhcnJheSBhbmQgcmV0dXJuIGl0XG4gKiBAcGFyYW0gYXJyXG4gKi9cbmV4cG9ydCBjb25zdCBwaWNrT25lID0gKGFycjogYW55W10pID0+XG4gIGFyci5sZW5ndGggPiAxID8gYXJyW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSldIDogYXJyWzBdO1xuXG4vKipcbiAqIEJvb2xlYW4gZ2VuZXJhdG9yXG4gKi9cbmV4cG9ydCBjb25zdCBkaWNlID0gKCkgPT4gISFNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuXG4vKipcbiAqIFBvbHlmaWxsIGZvciBBcnJheS5wcm90b3R5cGUuZmxhdFxuICovXG5leHBvcnQgY29uc3QgZmxhdCA9IChhcnI6IGFueVtdW10pID0+XG4gIGFyci5yZWR1Y2UoKGFjYywgdmFsKSA9PiBhY2MuY29uY2F0KHZhbCksIFtdKTtcbiIsICJpbXBvcnQgeyBzY2FsZSB9IGZyb20gJ2hhcm1vbmljcyc7XG5pbXBvcnQgeyBwaWNrT25lLCBkaWNlIH0gZnJvbSAnLi91dGlscyc7XG5cbi8qKlxuICogR2V0IHRoZSBjaG9yZHMgdGhhdCBnbyB3aXRoIGEgZ2l2ZW4gc2NhbGUvbW9kZVxuICogVGhpcyBpcyB1c2VmdWwgb25seSBpbiBjYXNlIHlvdSB3YW50IHRvIGNoZWNrIHdoYXQgY2hvcmRzIHdvcmsgd2l0aCBhIHNjYWxlL21vZGVcbiAqIHNvIHRoYXQgeW91IGNhbiBjb21lIHVwIHdpdGggY2hvcmQgcHJvZ3Jlc3Npb25zXG4gKiBAcGFyYW0gIHtTdHJpbmd9IG1vZGUgZS5nLiBtYWpvclxuICogQHJldHVybiB7QXJyYXl9IGUuZy5bJ0knLCAnaWknLCAnaWlpJywgJ0lWJywgJ1YnLCAndmknLCAndmlpXHUwMEIwJ11cbiAqL1xuZXhwb3J0IGNvbnN0IGdldENob3JkRGVncmVlcyA9IChtb2RlOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgdGhlUm9tYW5zOiBOVlA8c3RyaW5nW10+ID0ge1xuICAgIGlvbmlhbjogWydJJywgJ2lpJywgJ2lpaScsICdJVicsICdWJywgJ3ZpJywgJ3ZpaVx1MDBCMCddLFxuICAgIGRvcmlhbjogWydpJywgJ2lpJywgJ0lJSScsICdJVicsICd2JywgJ3ZpXHUwMEIwJywgJ1ZJSSddLFxuICAgIHBocnlnaWFuOiBbJ2knLCAnSUknLCAnSUlJJywgJ2l2JywgJ3ZcdTAwQjAnLCAnVkknLCAndmlpJ10sXG4gICAgbHlkaWFuOiBbJ0knLCAnSUknLCAnaWlpJywgJ2l2XHUwMEIwJywgJ1YnLCAndmknLCAndmlpJ10sXG4gICAgbWl4b2x5ZGlhbjogWydJJywgJ2lpJywgJ2lpaVx1MDBCMCcsICdJVicsICd2JywgJ3ZpJywgJ1ZJSSddLFxuICAgIGFlb2xpYW46IFsnaScsICdpaVx1MDBCMCcsICdJSUknLCAnaXYnLCAndicsICdWSScsICdWSUknXSxcbiAgICBsb2NyaWFuOiBbJ2lcdTAwQjAnLCAnSUknLCAnaWlpJywgJ2l2JywgJ1YnLCAnVkknLCAndmlpJ10sXG4gICAgJ21lbG9kaWMgbWlub3InOiBbJ2knLCAnaWknLCAnSUlJKycsICdJVicsICdWJywgJ3ZpXHUwMEIwJywgJ3ZpaVx1MDBCMCddLFxuICAgICdoYXJtb25pYyBtaW5vcic6IFsnaScsICdpaVx1MDBCMCcsICdJSUkrJywgJ2l2JywgJ1YnLCAnVkknLCAndmlpXHUwMEIwJ10sXG4gIH07XG4gIHRoZVJvbWFucy5tYWpvciA9IHRoZVJvbWFucy5pb25pYW47XG4gIHRoZVJvbWFucy5taW5vciA9IHRoZVJvbWFucy5hZW9saWFuO1xuXG4gIHJldHVybiB0aGVSb21hbnNbbW9kZV0gfHwgW107XG59O1xuXG5jb25zdCBpZHhCeURlZ3JlZTogTlZQPG51bWJlcj4gPSB7XG4gIGk6IDAsXG4gIGlpOiAxLFxuICBpaWk6IDIsXG4gIGl2OiAzLFxuICB2OiA0LFxuICB2aTogNSxcbiAgdmlpOiA2LFxufTtcblxuLyoqXG4gKiBHZXQgYSBjaG9yZCBuYW1lIGZyb20gZGVncmVlXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHJvbWFuIGUuZy4gaWkgT1IgaWlcdTAwQjAgT1IgVjdcbiAqIEByZXR1cm4ge1N0cmluZ30gZS5nLiBtIE9SIG03YjUgT1IgTWFqN1xuICovXG5jb25zdCBnZXRDaG9yZE5hbWUgPSAocm9tYW46IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIC8vIHJlbW92ZSBhbnkgbm9uIGNoYXJhY3RlclxuICBjb25zdCBzdHIgPSByb21hbi5yZXBsYWNlKC9cXFcvZywgJycpO1xuICBsZXQgcHJlZml4ID0gJ00nO1xuICAvLyBjaGVjayBpZiBpdCBzIGxvd2VyY2FzZVxuICBpZiAoc3RyLnRvTG93ZXJDYXNlKCkgPT09IHN0cikge1xuICAgIHByZWZpeCA9ICdtJztcbiAgfVxuICBpZiAocm9tYW4uaW5kZXhPZignXHUwMEIwJykgPiAtMSkge1xuICAgIHJldHVybiBwcmVmaXggKyAnN2I1JztcbiAgfVxuICBpZiAocm9tYW4uaW5kZXhPZignKycpID4gLTEpIHtcbiAgICByZXR1cm4gcHJlZml4ICsgJyM1JztcbiAgfVxuXG4gIGlmIChyb21hbi5pbmRleE9mKCc3JykgPiAtMSkge1xuICAgIHJldHVybiBwcmVmaXggPT09ICdNJyA/ICdtYWo3JyA6ICdtNyc7XG4gIH1cblxuICByZXR1cm4gcHJlZml4O1xufTtcblxuLyoqXG4gKiBUYWtlIHRoZSBzcGVjaWZpZWQgc2NhbGUgYW5kIGRlZ3JlZXMgYW5kIHJldHVybiB0aGUgY2hvcmQgbmFtZXMgZm9yIHRoZW1cbiAqIFRoZXNlIGNhbiBiZSB1c2VkIGFzIHRoZSB2YWx1ZSBmb3IgdGhlIGBub3Rlc2AgcGFyYW0gb2YgdGhlIGBjbGlwYCBtZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfSBub3RlT2N0YXZlU2NhbGUgZS5nLiAnQzQgbWFqb3InXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGNob3JkRGVncmVzcyBlLmcuICdJIElWIFYgSVYnXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGUuZy4gJ0NNIEZNIEdNIEZNJ1xuICovXG5leHBvcnQgY29uc3QgZ2V0Q2hvcmRzQnlQcm9ncmVzc2lvbiA9IChcbiAgbm90ZU9jdGF2ZVNjYWxlOiBzdHJpbmcsXG4gIGNob3JkRGVncmVzczogc3RyaW5nXG4pOiBzdHJpbmcgPT4ge1xuICAvLyBTZXQgdGhlIG9jdGF2ZSBpZiBtaXNzaW5nXG4gIC8vIEZvciBleGFtcGxlIGlmIHRoZSBtZXRob2Qgd2FzIGNhbGxlZCB3aXRoIGBDIG1ham9yYCBpbnN0ZWFkIG9mIGBDNCBtYWpvcmAsIHRoZW4gYWRkIHRoZSA0XG4gIGNvbnN0IG5vdGVPY3RhdmVTY2FsZUFyciA9IG5vdGVPY3RhdmVTY2FsZS5zcGxpdCgnICcpO1xuICBpZiAoIW5vdGVPY3RhdmVTY2FsZUFyclswXS5tYXRjaCgvXFxkLykpIHtcbiAgICBub3RlT2N0YXZlU2NhbGVBcnJbMF0gKz0gJzQnO1xuICAgIG5vdGVPY3RhdmVTY2FsZSA9IG5vdGVPY3RhdmVTY2FsZUFyci5qb2luKCcgJyk7XG4gIH1cblxuICAvLyBHZXQgdGhlIHNjYWxlIGZyb20gdGhlIGdpdmVuIG5vdGUgYW5kIHNjYWxlL21vZGUgY29tYmluYXRpb25cbiAgY29uc3QgbW9kZSA9IHNjYWxlKG5vdGVPY3RhdmVTY2FsZSk7XG4gIGNvbnN0IGNob3JkRGVncmVlc0FyciA9IGNob3JkRGVncmVzcy5yZXBsYWNlKC9cXHMqLCtcXHMqL2csICcgJykuc3BsaXQoJyAnKTtcbiAgLy8gTm93IHdlIGhhdmUgc29tZXRoaW5nIGxpa2UgWydpJywgJ2lpJywgJ0lWJ11cbiAgLy8gQ29udmVydCBpdCB0byBhIGNob3JkIGZhbWlseSBzdWNoIGFzIFsnQ20nLCAnRG0nLCAnRk0nXVxuICBjb25zdCBjaG9yZEZhbWlseSA9IGNob3JkRGVncmVlc0Fyci5tYXAoKHJvbWFuLCBpZHgpID0+IHtcbiAgICBjb25zdCBjaG9yZE5hbWUgPSBnZXRDaG9yZE5hbWUocm9tYW4pOyAvLyBlLmcuIG1cbiAgICAvLyBnZXQgdGhlIGluZGV4IHRvIGJlIHVzZWQgYnkgcmVtb3ZpbmcgYW55IGRpZ2l0IG9yIG5vbiBhbHBoYWJldCBjaGFyYWN0ZXJcbiAgICBjb25zdCBzY2FsZUlkID0gaWR4QnlEZWdyZWVbcm9tYW4ucmVwbGFjZSgvXFxXfFxcZC9nLCAnJykudG9Mb3dlckNhc2UoKV07IC8vIGUuZy4gMFxuICAgIC8vIGdldCB0aGUgbm90ZSBpdHNlbGZcbiAgICBjb25zdCBub3RlID0gbW9kZVtzY2FsZUlkXTsgLy8gZS5nLiBDXG4gICAgLy8gZ2V0IHRoZSBvY3RhdmUgb2YgdGhlIG5vdGU7XG4gICAgY29uc3Qgb2N0ID0gbm90ZS5yZXBsYWNlKC9cXEQrLywgJycpOyAvLyBlLmcuIDRcbiAgICAvLyBub3cgZ2V0IHRoZSBjaG9yZFxuICAgIHJldHVybiBub3RlLnJlcGxhY2UoL1xcZC8sICcnKSArIGNob3JkTmFtZSArICdfJyArIG9jdDtcbiAgfSk7XG5cbiAgcmV0dXJuIGNob3JkRmFtaWx5LnRvU3RyaW5nKCkucmVwbGFjZSgvLC9nLCAnICcpO1xufTtcblxuY29uc3QgZ2V0UHJvZ0ZhY3RvcnkgPSAoeyBULCBQLCBEIH06IFRQRCkgPT4ge1xuICByZXR1cm4gKGNvdW50OiBudW1iZXIgPSA0KSA9PiB7XG4gICAgY29uc3QgY2hvcmRzID0gW107XG5cbiAgICAvLyBQdXNoIHJvb3QvdG9uaWNcbiAgICBjaG9yZHMucHVzaChwaWNrT25lKFQpKTtcblxuICAgIGxldCBpID0gMTtcblxuICAgIC8vIFBpY2sgYSBwcmVkb21pbmFudFxuICAgIGlmIChpIDwgY291bnQgLSAxKSB7XG4gICAgICBjaG9yZHMucHVzaChwaWNrT25lKFApKTtcbiAgICAgIGkrKztcbiAgICB9XG5cbiAgICAvLyBUcnkgYW5vdGhlciBwcmVkb21pbmFudFxuICAgIGlmIChpIDwgY291bnQgLSAxICYmIGRpY2UoKSkge1xuICAgICAgY2hvcmRzLnB1c2gocGlja09uZShQKSk7XG4gICAgICBpKys7XG4gICAgfVxuXG4gICAgLy8vLy8vLy8vIDQgb3IgbW9yZS8vLy8vLy8vLy9cbiAgICBpZiAoaSA8IGNvdW50IC0gMSkge1xuICAgICAgLy8gUGljayBhIGRvbWluYW50XG4gICAgICBjaG9yZHMucHVzaChwaWNrT25lKEQpKTtcbiAgICAgIGkrKztcbiAgICB9XG5cbiAgICBpZiAoaSA8IGNvdW50IC0gMSkge1xuICAgICAgLy8gUGljayBhIHByZWRvbWluYW50XG4gICAgICBjaG9yZHMucHVzaChwaWNrT25lKFApKTtcbiAgICAgIGkrKztcbiAgICB9XG5cbiAgICBpZiAoaSA8IGNvdW50IC0gMSkge1xuICAgICAgLy8gUGljayBhIGRvbWluYW50XG4gICAgICBjaG9yZHMucHVzaChwaWNrT25lKEQpKTtcbiAgICAgIGkrKztcbiAgICB9XG5cbiAgICAvLyBQaWNrIGEgcHJlZG9taW5hbnQgaWYgcG9zc2libGVcbiAgICBpZiAoaSA8IGNvdW50IC0gMSAmJiBkaWNlKCkpIHtcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoUCkpO1xuICAgICAgaSsrO1xuICAgIH1cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICAvLyBGaWxsIHRoZSByZXN0IHdpdGggZG9taW5hbnRcbiAgICB3aGlsZSAoaSA8IGNvdW50KSB7XG4gICAgICBjaG9yZHMucHVzaChwaWNrT25lKEQpKTtcbiAgICAgIGkrKztcbiAgICB9XG5cbiAgICByZXR1cm4gY2hvcmRzO1xuICB9O1xufTtcblxuY29uc3QgTSA9IGdldFByb2dGYWN0b3J5KHsgVDogWydJJywgJ3ZpJ10sIFA6IFsnaWknLCAnSVYnXSwgRDogWydWJ10gfSk7XG5jb25zdCBtID0gZ2V0UHJvZ0ZhY3RvcnkoeyBUOiBbJ2knLCAnVkknXSwgUDogWydpaScsICdpdiddLCBEOiBbJ1YnXSB9KTtcblxuLyoqXG4gKiBHZW5lcmF0ZSBhIGNob3JkIHByb2dyZXNzaW9uIGJhc2VkIG9uIGJhc2ljIG11c2ljIHRoZW9yeVxuICogd2hlcmUgd2UgZm9sbG93IHRvbmljIHRvIG9wdGlvbmFsbHkgcHJlZG9taW5hbnQgYW5kIHRoZW4gZG9taW5hbnRcbiAqIGFuZCB0aGVuIHJhbmRvbWx5IHRvIHByZWRvbWluYW50IGFuZCBjb250aW51ZSB0aGlzIHRpbGwgd2UgcmVhY2ggYGNvdW50YFxuICogQHBhcmFtIHNjYWxlVHlwZSBlLmcuIE0gKGZvciBtYWpvciBjaG9yZCBwcm9ncmVzc2lvbiksIG0gKGZvciBtaW5vciBjaG9yZCBwcm9ncmVzc2lvbilcbiAqIEBwYXJhbSBjb3VudCBlLmcuIDRcbiAqL1xuZXhwb3J0IGNvbnN0IHByb2dyZXNzaW9uID0gKHNjYWxlVHlwZTogcHJvZ3Jlc3Npb25TY2FsZSwgY291bnQ6IG51bWJlciA9IDQpID0+IHtcbiAgaWYgKHNjYWxlVHlwZSA9PT0gJ21ham9yJyB8fCBzY2FsZVR5cGUgPT09ICdNJykge1xuICAgIHJldHVybiBNKGNvdW50KTtcbiAgfVxuXG4gIGlmIChzY2FsZVR5cGUgPT09ICdtaW5vcicgfHwgc2NhbGVUeXBlID09PSAnbScpIHtcbiAgICByZXR1cm4gbShjb3VudCk7XG4gIH1cbn07XG4iLCAiaW1wb3J0IHsgaW5saW5lQ2hvcmQgfSBmcm9tICdoYXJtb25pY3MnO1xuXG5leHBvcnQgY29uc3QgUkVfU0VQQVJBVE9SID0gL1xcfC87XG5leHBvcnQgY29uc3QgUkVfUEFUVEVSTiA9IC9eKD86W3hfLV18XFxbLis/XFxdKSskLztcbmV4cG9ydCBjb25zdCBSRV9OVU1CRVIgPSAvXig/OlxcLj9cXGQrfFxcZCsoPzpcXC5cXGQrKT8pJC87XG5leHBvcnQgY29uc3QgUkVfQ0hPUkQgPSAvXlthLWdBLUddW14jXFxzXSpcXGQrKD86XFwuXFwuKT8kLztcbmV4cG9ydCBjb25zdCBSRV9OT1RFID0gL15bYS1nQS1HXVsjYl0/XFxkKyQvO1xuZXhwb3J0IGNvbnN0IFJFX01PREUgPSAvXig/IVtpdklWXXsxLDN9KVthLXpdezIsfS87XG5leHBvcnQgY29uc3QgUkVfUFJPRyA9IC9eW2l2SVZdezEsM31cdTAwQjA/JC87XG5leHBvcnQgY29uc3QgUkVfVFJJTSA9IC9cXC4rJC87XG5cbmNvbnN0IENBQ0hFID0ge307XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGxpdCh2YWx1ZSkge1xuICBsZXQgZGF0YSA9IFtdO1xuICB0cnkge1xuICAgIGRhdGEgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZS5zcGxpdCgvKD89W1xcZFtcXF14Xy1dKS8pKTtcbiAgICBkYXRhID0gZGF0YS5yZXBsYWNlKC8sXCJcXFtcIiwvZywgJywgWycpO1xuICAgIGRhdGEgPSBkYXRhLnJlcGxhY2UoL1wiXFxbXCIsL2csICdbJyk7XG4gICAgZGF0YSA9IGRhdGEucmVwbGFjZSgvLFwiXFxdXCIvZywgJ10nKTtcbiAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIGlnbm9yZVxuICB9XG4gIHJldHVybiBkYXRhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGV2ZWwodmFsdWUpIHtcbiAgaWYgKCFDQUNIRVt2YWx1ZV0pIHtcbiAgICBpZiAodmFsdWUuaW5jbHVkZXMoJyUnKSkge1xuICAgICAgQ0FDSEVbdmFsdWVdID0gMTI3ICogcGFyc2VGbG9hdChgLiR7dmFsdWV9YCk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZS5pbmNsdWRlcygnLycpKSB7XG4gICAgICBjb25zdCBbYSwgYl0gPSB2YWx1ZS5zcGxpdCgnLycpO1xuXG4gICAgICBDQUNIRVt2YWx1ZV0gPSBhIC8gYjtcbiAgICB9IGVsc2UgaWYgKHZhbHVlLmluY2x1ZGVzKCcqJykpIHtcbiAgICAgIGNvbnN0IFthLCBiXSA9IHZhbHVlLnNwbGl0KCcqJyk7XG5cbiAgICAgIENBQ0hFW3ZhbHVlXSA9IGEgKiBiO1xuICAgIH0gZWxzZSB7XG4gICAgICBDQUNIRVt2YWx1ZV0gPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIENBQ0hFW3ZhbHVlXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlKHJlLCB2YWx1ZSkge1xuICBpZiAoIUNBQ0hFW3JlLnNvdXJjZSArIHZhbHVlXSkge1xuICAgIENBQ0hFW3JlLnNvdXJjZSArIHZhbHVlXSA9IHJlLnRlc3QodmFsdWUpO1xuICB9XG4gIHJldHVybiBDQUNIRVtyZS5zb3VyY2UgKyB2YWx1ZV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb2dyZXNzaW9uKHZhbHVlKSB7XG4gIHJldHVybiB2YWxpZGF0ZShSRV9QUk9HLCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdHRlcm4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbGlkYXRlKFJFX1BBVFRFUk4sIHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XG4gIHJldHVybiB2YWxpZGF0ZShSRV9OVU1CRVIsIHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ2hvcmQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbGlkYXRlKFJFX0NIT1JELCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05vdGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbGlkYXRlKFJFX05PVEUsIHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTW9kZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsaWRhdGUoUkVfTU9ERSwgdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHlwZSh2YWx1ZSkge1xuICBjb25zdCBrZXkgPSBgVCR7dmFsdWV9YDtcbiAgaWYgKCFDQUNIRVtrZXldKSB7XG4gICAgaWYgKGlzTm90ZSh2YWx1ZSkpIENBQ0hFW2tleV0gPSAnbm90ZSc7XG4gICAgZWxzZSBpZiAoaXNDaG9yZCh2YWx1ZSkpIENBQ0hFW2tleV0gPSAnY2hvcmQnO1xuICAgIGVsc2UgaWYgKGlzUGF0dGVybih2YWx1ZSkpIENBQ0hFW2tleV0gPSAncGF0dGVybic7XG4gICAgZWxzZSBpZiAoaXNNb2RlKHZhbHVlKSkgQ0FDSEVba2V5XSA9ICdtb2RlJztcbiAgICBlbHNlIGlmIChpc051bWJlcih2YWx1ZSkpIENBQ0hFW2tleV0gPSAnbnVtYmVyJztcbiAgICBlbHNlIENBQ0hFW2tleV0gPSAndmFsdWUnO1xuICB9XG4gIHJldHVybiBDQUNIRVtrZXldO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtKGV4cHJlc3Npb24pIHtcbiAgaWYgKCFleHByZXNzaW9uIHx8IHR5cGVvZiBleHByZXNzaW9uICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0aW5nIGEgdmFsaWQgc3RyaW5nLCBnaXZlbiAnJHtleHByZXNzaW9ufSdgKTtcbiAgfVxuXG4gIGlmIChDQUNIRVtgJCR7ZXhwcmVzc2lvbn1gXSkgcmV0dXJuIENBQ0hFW2AkJHtleHByZXNzaW9ufWBdO1xuXG4gIGNvbnN0IHRva2VucyA9IGV4cHJlc3Npb24uc3BsaXQoL1xccysvKTtcblxuICBpZiAoIXRva2Vucy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGluZyBhIHZhbGlkIGV4cHJlc3Npb24sIGdpdmVuICcke2V4cHJlc3Npb259J2ApO1xuICB9XG5cbiAgY29uc3QgYXN0ID0gW107XG4gIGNvbnN0IGNhcnJ5ID0gW107XG5cbiAgZnVuY3Rpb24gYWRkKHR5cGUsIHZhbHVlKSB7XG4gICAgY29uc3QgaXRlbSA9IHsgdHlwZSwgdmFsdWUgfTtcblxuICAgIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpdGVtLnZhbHVlID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IGxldmVsKHZhbHVlKSA6IHZhbHVlO1xuICAgIH1cblxuICAgIGlmICh0eXBlID09PSAnY2hvcmQnICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGl0ZW0udmFsdWUgPSBpbmxpbmVDaG9yZCh2YWx1ZS5yZXBsYWNlKFJFX1RSSU0sICcnKSk7XG5cbiAgICAgIGlmICh2YWx1ZS5pbmNsdWRlcygnLi4nKSkge1xuICAgICAgICBpdGVtLnVuZm9sZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09ICd2YWx1ZScgJiYgdmFsdWUuaW5kZXhPZigneCcpID4gLTEpIHtcbiAgICAgIGNvbnN0IHggPSB2YWx1ZS5zcGxpdCgneCcpO1xuXG4gICAgICBpZiAoIShpc051bWJlcih4WzBdKSAmJiBpc051bWJlcih4WzFdKSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RpbmcgdmFsaWQgbnVtYmVycyBmb3IgJHt0eXBlfSwgZ2l2ZW4gJyR7dmFsdWV9J2ApO1xuICAgICAgfVxuXG4gICAgICBpdGVtLnZhbHVlID0gcGFyc2VJbnQoeFswXSwgMTApO1xuICAgICAgaXRlbS5yZXBlYXQgPSBwYXJzZUludCh4WzFdLCAxMCk7XG4gICAgICBpdGVtLnR5cGUgPSAnbnVtYmVyJztcbiAgICB9XG5cbiAgICBhc3QucHVzaChpdGVtKTtcbiAgfVxuXG4gIHRva2Vucy5yZWR1Y2UoKHByZXYsIGN1ciwgaSkgPT4ge1xuICAgIGxldCB0eXBlO1xuXG4gICAgY29uc3QgbmV4dCA9IHRva2Vuc1tpICsgMV07XG4gICAgY29uc3QgbGFzdCA9IGFzdFthc3QubGVuZ3RoIC0gMV0gfHwge307XG5cbiAgICBpZiAoUkVfU0VQQVJBVE9SLnRlc3QoY3VyKSkge1xuICAgICAgYWRkKCdjaG9yZCcsIGN1ci5zcGxpdChSRV9TRVBBUkFUT1IpKTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY3VyID09PSAnc3RyaW5nJyAmJiAoXG4gICAgICAoY3VyLmluY2x1ZGVzKCcvJykgJiYgY3VyLmluZGV4T2YoJy8nKSA+IDApXG4gICAgICB8fCAoY3VyLmluY2x1ZGVzKCcqJykgJiYgY3VyLmluZGV4T2YoJyonKSA+IDApXG4gICAgICB8fCAoY3VyLmluY2x1ZGVzKCclJykgJiYgY3VyLmluZGV4T2YoJyUnKSA+IDApXG4gICAgKSkge1xuICAgICAgYWRkKCdudW1iZXInLCBsZXZlbChjdXIpKTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmIChjdXIuaW5kZXhPZignJScpID4gLTEpIHtcbiAgICAgIGlmIChjdXIgPT09ICclJykge1xuICAgICAgICBpZiAoIWxhc3QudHlwZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyBleHByZXNzaW9uIHRvIHJlcGVhdCwgZ2l2ZW4gJyR7dG9rZW5zLnNsaWNlKDAsIGkpLmpvaW4oJyAnKX0nYCk7XG4gICAgICAgIH1cblxuICAgICAgICBsYXN0LnJlcGVhdCA9IGxhc3QucmVwZWF0IHx8IDE7XG4gICAgICAgIGxhc3QucmVwZWF0ICs9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGQoJ3BhcmFtJywgY3VyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKGlzUHJvZ3Jlc3Npb24oY3VyKSkge1xuICAgICAgbGFzdC52YWx1ZSArPSBgICR7Y3VyfWA7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAoY3VyLmNoYXJBdCgpID09PSAnIycpIHtcbiAgICAgIGFkZCgnY2hhbm5lbCcsIGN1cik7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAoaXNOb3RlKGN1cikgfHwgaXNDaG9yZChjdXIpIHx8IGlzTW9kZShjdXIpIHx8IGlzTnVtYmVyKGN1cikpIHtcbiAgICAgIGNhcnJ5LnB1c2goY3VyKTtcblxuICAgICAgaWYgKFxuICAgICAgICAhbmV4dFxuICAgICAgICB8fCBjYXJyeS5sZW5ndGggPT09IDNcbiAgICAgICAgfHwgIShpc05vdGUobmV4dCkgfHwgaXNNb2RlKG5leHQpIHx8IGlzTnVtYmVyKG5leHQpKVxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IG9sZCA9IGNhcnJ5LnNwbGljZSgwLCBjYXJyeS5sZW5ndGgpO1xuICAgICAgICBjb25zdCB0ZXN0ID0gb2xkWzBdO1xuXG4gICAgICAgIGxldCBtb2RlID0gb2xkWzFdO1xuICAgICAgICBsZXQgb2N0YXZlID0gb2xkWzJdO1xuXG4gICAgICAgIGlmICghb2N0YXZlICYmIGlzTnVtYmVyKG1vZGUpKSB7XG4gICAgICAgICAgb2N0YXZlID0gbW9kZTtcbiAgICAgICAgICBtb2RlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRlc3QubGVuZ3RoIDwgMlxuICAgICAgICAgICYmIGlzTm90ZSh0ZXN0KVxuICAgICAgICAgICYmIChpc01vZGUobW9kZSkgfHwgaXNOdW1iZXIob2N0YXZlKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgYWRkKCdtb2RlJywgb2xkLmpvaW4oJyAnKSk7XG4gICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgIH1cblxuICAgICAgICBvbGQuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICBhZGQoeC5sZW5ndGggPiAxIHx8ICFpc05vdGUoeCkgPyBnZXRUeXBlKHgpIDogJ21vZGUnLCB4KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGN1ciA9PT0gJ3N0cmluZycgJiYgY3VyLmluZGV4T2YoJy4uJykgPiAtMSkge1xuICAgICAgY29uc3QgcGFydHMgPSBjdXIuc3BsaXQoJy4uJyk7XG4gICAgICBjb25zdCBtaW4gPSBwYXJ0c1swXSB8fCAxO1xuICAgICAgY29uc3QgbWF4ID0gcGFydHNbMV0gfHwgSW5maW5pdHk7XG5cbiAgICAgIHR5cGUgPSAnc2xpY2UnO1xuICAgICAgY3VyID0gW21pbiwgbWF4XTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGN1ciA9PT0gJ3N0cmluZycgJiYgKGN1ci5jaGFyQXQoKSA9PT0gJy8nIHx8IGN1ci5jaGFyQXQoKSA9PT0gJyonKSkge1xuICAgICAgY29uc3Qgb3BlcmF0b3IgPSBjdXIuY2hhckF0KCkgPT09ICcvJyA/ICdkaXZpZGUnIDogJ211bHRpcGx5JztcbiAgICAgIGNvbnN0IG51bWJlciA9IGN1ci5zdWJzdHIoMSk7XG5cbiAgICAgIGlmICghaXNOdW1iZXIobnVtYmVyKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGluZyBhIHZhbGlkIGV4cHJlc3Npb24gdG8gJHtvcGVyYXRvcn0sIGdpdmVuICcke3Rva2Vucy5zbGljZSgwLCBpKS5qb2luKCcgJyl9ICR7Y3VyfSdgKTtcbiAgICAgIH1cblxuICAgICAgYWRkKG9wZXJhdG9yLCBwYXJzZUZsb2F0KG51bWJlcikpO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKCF0eXBlICYmIGdldFR5cGUoY3VyKSA9PT0gJ3ZhbHVlJyAmJiBBcnJheS5pc0FycmF5KGxhc3QudmFsdWUpKSB7XG4gICAgICBsYXN0LnZhbHVlWzFdID0gbGFzdC52YWx1ZVsxXSB8fCAnJztcbiAgICAgIGxhc3QudmFsdWVbMV0gKz0gbGFzdC52YWx1ZVsxXSA/ICcgJyA6ICcnO1xuICAgICAgbGFzdC52YWx1ZVsxXSArPSBjdXI7XG4gICAgICByZXR1cm4gY3VyO1xuICAgIH1cblxuICAgIGFkZCh0eXBlIHx8IGdldFR5cGUoY3VyKSwgdHlwZW9mIGN1ciA9PT0gJ3N0cmluZycgJiYgaXNOdW1iZXIoY3VyKSA/IHBhcnNlSW50KGN1ciwgMTApIDogY3VyKTtcbiAgICByZXR1cm4gY3VyO1xuICB9LCBudWxsKTtcblxuICBDQUNIRVtgJCR7ZXhwcmVzc2lvbn1gXSA9IGFzdDtcbiAgcmV0dXJuIGFzdDtcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gZmxhdHRlbih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUucmVkdWNlKChwcmV2LCBjdXIpID0+IHByZXYuY29uY2F0KGN1ciksIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdCh2YWx1ZSwgdGltZXMpIHtcbiAgY29uc3Qgb3V0ID0gW107XG5cbiAgd2hpbGUgKHRpbWVzKSB7XG4gICAgb3V0LnB1c2godmFsdWUpO1xuICAgIHRpbWVzIC09IDE7XG4gIH1cblxuICByZXR1cm4gb3V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZ2UobWluLCBtYXgsIHN0ZXApIHtcbiAgY29uc3QgYWNjID0gW107XG5cbiAgaWYgKCFzdGVwKSB7XG4gICAgZm9yIChsZXQgaSA9IG1pbjsgaSA8PSBtYXg7IGkgKz0gMSkge1xuICAgICAgYWNjLnB1c2goaSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IGRpZmYgPSAobWF4IC0gbWluKSAvIHN0ZXA7XG5cbiAgICBmb3IgKGxldCBpID0gbWluOyBpIDw9IG1heDsgaSArPSBkaWZmKSB7XG4gICAgICBhY2MucHVzaChpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYWNjO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSByZXR1cm4gdmFsdWU7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkgcmV0dXJuIHZhbHVlLm1hcChjbG9uZSk7XG5cbiAgY29uc3QgY29weSA9IHt9O1xuXG4gIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgY29weVtrZXldID0gY2xvbmUodmFsdWVba2V5XSk7XG4gIH0pO1xuXG4gIHJldHVybiBjb3B5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gemlwKGEsIGIsIGNiKSB7XG4gIGNvbnN0IG1heCA9IE1hdGgubWF4KGEubGVuZ3RoLCBiLmxlbmd0aCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXg7IGkgKz0gMSkge1xuICAgIGlmICh0eXBlb2YgYVtpXSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGJbaV0gIT09ICd1bmRlZmluZWQnKSBjYihhW2ldLCBiW2ldKTtcbiAgfVxufVxuIiwgImltcG9ydCB7IGdldENob3Jkc0J5UHJvZ3Jlc3Npb24gfSBmcm9tICdzY3JpYmJsZXR1bmUvc3JjL3Byb2dyZXNzaW9uJztcbmltcG9ydCB7IHNjYWxlLCBpbmxpbmVDaG9yZCB9IGZyb20gJ2hhcm1vbmljcyc7XG5cbmltcG9ydCB7IGlzUHJvZ3Jlc3Npb24sIHRyYW5zZm9ybSB9IGZyb20gJy4vdG9rZW5pemUnO1xuaW1wb3J0IHsgcmVwZWF0LCBjbG9uZSB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlKGlucHV0LCBjb250ZXh0LCBjYWxsYmFjaykge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoaW5wdXQpKSByZXR1cm4gaW5wdXQ7XG5cbiAgY29uc3QgZm4gPSB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgPyBjYWxsYmFjayA6ICh2ID0+IHYpO1xuXG4gIGxldCBza2lwO1xuICByZXR1cm4gaW5wdXQucmVkdWNlKChwcmV2LCBjdXIsIGkpID0+IHtcbiAgICBjb25zdCBsYXN0ID0gcHJldltwcmV2Lmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IG5leHQgPSBpbnB1dFtpICsgMV0gfHwge307XG4gICAgY29uc3Qgb2xkID0gaW5wdXRbaSAtIDFdIHx8IHt9O1xuXG4gICAgaWYgKHNraXApIHtcbiAgICAgIHNraXAgPSBmYWxzZTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KGN1cikpIHtcbiAgICAgIHByZXYucHVzaCguLi5jdXIpO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKGN1ci50eXBlID09PSAndmFsdWUnICYmIGN1ci52YWx1ZSA9PT0gJy4nKSB7XG4gICAgICBpZiAocHJldi5sZW5ndGggPiAwKSBwcmV2LnB1c2gocHJldlswXSk7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAob2xkLnR5cGUgPT09ICdwYXR0ZXJuJyAmJiBjdXIudHlwZSA9PT0gJ3BhdHRlcm4nKSB7XG4gICAgICBwcmV2W3ByZXYubGVuZ3RoIC0gMV0gKz0gY3VyLnZhbHVlO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgc3dpdGNoIChjdXIudHlwZSkge1xuICAgICAgY2FzZSAncGF0dGVybic6XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnbm90ZSc6XG4gICAgICAgIGlmIChjdXIucmVwZWF0KSBwcmV2LnB1c2goLi4ucmVwZWF0KGN1ci52YWx1ZSwgY3VyLnJlcGVhdCkpO1xuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGN1ci52YWx1ZSkpIHByZXYucHVzaCguLi5jdXIudmFsdWUpO1xuICAgICAgICBlbHNlIHByZXYucHVzaChjdXIudmFsdWUpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnY2hvcmQnOlxuICAgICAgICBpZiAoY3VyLnJlcGVhdCkgcHJldi5wdXNoKC4uLnJlcGVhdChjdXIudmFsdWUsIGN1ci5yZXBlYXQpKTtcbiAgICAgICAgZWxzZSBpZiAoY3VyLnVuZm9sZCkgcHJldi5wdXNoKC4uLmN1ci52YWx1ZSk7XG4gICAgICAgIGVsc2UgcHJldi5wdXNoKGN1ci52YWx1ZSk7XG5cbiAgICAgICAgaWYgKGN1ci50eXBlICE9PSAnY2hvcmQnKSB7XG4gICAgICAgICAgc2tpcCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2RpdmlkZSc6XG4gICAgICAgIHByZXZbcHJldi5sZW5ndGggLSAxXSAvPSBjdXIudmFsdWU7XG4gICAgICAgIHJldHVybiBwcmV2O1xuXG4gICAgICBjYXNlICdtdWx0aXBseSc6XG4gICAgICAgIHByZXYucHVzaCguLi5yZXBlYXQobGFzdCwgY3VyLnZhbHVlIC0gMSkpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnc2xpY2UnOlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShsYXN0KSkge1xuICAgICAgICAgIHByZXZbcHJldi5sZW5ndGggLSAxXSA9IGxhc3Quc2xpY2UoY3VyLnZhbHVlWzBdIC0gMSwgY3VyLnZhbHVlWzFdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmV2LnB1c2goY3VyLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnbW9kZSc6XG4gICAgICAgIHByZXZbcHJldi5sZW5ndGggLSAxXSA9IGAke2xhc3R9ICR7Y3VyLnZhbHVlfWA7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdwYXJhbSc6XG4gICAgICBjYXNlICd2YWx1ZSc6IHtcbiAgICAgICAgbGV0IHZhbHVlID0gbnVsbDtcbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZXh0W2N1ci52YWx1ZV0gIT09ICd1bmRlZmluZWQnKSB2YWx1ZSA9IGNvbnRleHRbY3VyLnZhbHVlXTtcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIGV4cHJlc3Npb24gZm9yICcke2N1ci52YWx1ZX0nYCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWVbMF0gJiYgdmFsdWVbMF0udHlwZSkge1xuICAgICAgICAgIHZhbHVlID0gcmVkdWNlKHZhbHVlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjdXIucmVwZWF0KSB7XG4gICAgICAgICAgICBwcmV2LnB1c2goLi4ucmVwZWF0KHZhbHVlLCBjdXIucmVwZWF0KS5yZWR1Y2UoKF9wcmV2LCBfY3VyKSA9PiB7XG4gICAgICAgICAgICAgIF9wcmV2LnB1c2goLi4uX2N1cik7XG4gICAgICAgICAgICAgIHJldHVybiBfcHJldjtcbiAgICAgICAgICAgIH0sIFtdKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByZXYucHVzaCguLi52YWx1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgIH1cblxuICAgICAgICB2YWx1ZSA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdO1xuICAgICAgICBpZiAoY3VyLnJlcGVhdCkgcHJldi5wdXNoKC4uLnJlcGVhdCh2YWx1ZSwgY3VyLnJlcGVhdCkpO1xuICAgICAgICBlbHNlIHByZXYucHVzaCguLi52YWx1ZSk7XG4gICAgICB9IGJyZWFrO1xuICAgICAgZGVmYXVsdDoge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuaGFuZGxlZCAnJHtjdXIudHlwZX0nYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZXY7XG4gIH0sIFtdKS5yZWR1Y2UoKG1lbW8sIGl0ZW0pID0+IHtcbiAgICBjb25zdCBwcmV2ID0gbWVtb1ttZW1vLmxlbmd0aCAtIDFdO1xuXG4gICAgaWYgKFxuICAgICAgQXJyYXkuaXNBcnJheShwcmV2KVxuICAgICAgJiYgQXJyYXkuaXNBcnJheShpdGVtKVxuICAgICAgJiYgdHlwZW9mIGl0ZW1bMF0gPT09ICdudW1iZXInXG4gICAgICAmJiBpdGVtLmxlbmd0aCA9PT0gMlxuICAgICkge1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gaXRlbVsxXSA9PT0gSW5maW5pdHkgPyBwcmV2Lmxlbmd0aCA6IGl0ZW1bMV07XG4gICAgICBjb25zdCBbYmFzZSwgbGVuZ3RoXSA9IFN0cmluZyhvZmZzZXQpLnNwbGl0KC9cXEQvKTtcblxuICAgICAgbWVtby5wb3AoKTtcbiAgICAgIG1lbW8ucHVzaCguLi5wcmV2LnNsaWNlKGl0ZW1bMF0gLSAxLCBiYXNlKSk7XG5cbiAgICAgIGlmIChTdHJpbmcob2Zmc2V0KS5pbmNsdWRlcygnPicpKSB7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gbWVtby5zbGljZSgtbGVuZ3RoIC0gMSk7XG5cbiAgICAgICAgcGFydHMucG9wKCk7XG4gICAgICAgIHBhcnRzLnJldmVyc2UoKTtcbiAgICAgICAgbWVtby5wdXNoKC4uLnBhcnRzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtZW1vO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycgJiYgaXRlbS5pbmNsdWRlcygnICcpKSB7XG4gICAgICBjb25zdCBjaHVua3MgPSBpdGVtLnNwbGl0KCcgJyk7XG5cbiAgICAgIGlmIChjaHVua3Muc29tZShpc1Byb2dyZXNzaW9uKSkge1xuICAgICAgICBjb25zdCBvZmZzZXQgPSBjaHVua3MuZmluZEluZGV4KGlzUHJvZ3Jlc3Npb24pO1xuICAgICAgICBjb25zdCBbYSwgYl0gPSBbY2h1bmtzLnNsaWNlKDAsIG9mZnNldCksIGNodW5rcy5zbGljZShvZmZzZXQpXTtcblxuICAgICAgICBtZW1vLnB1c2goZ2V0Q2hvcmRzQnlQcm9ncmVzc2lvbihhLmpvaW4oJyAnKSwgYi5qb2luKCcgJykpLnNwbGl0KCcgJykubWFwKHggPT4gZm4oaW5saW5lQ2hvcmQoeCkpKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZW1vLnB1c2goZm4oc2NhbGUoaXRlbSkpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbWVtby5wdXNoKGZuKGl0ZW0pKTtcbiAgICB9XG4gICAgcmV0dXJuIG1lbW87XG4gIH0sIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlKGJ1ZmZlcikge1xuICBjb25zdCB0cmFja3MgPSB7fTtcbiAgY29uc3QgbWFpbiA9IFtdO1xuICBjb25zdCBkYXRhID0ge307XG5cbiAgbGV0IGNoYW5uZWwgPSBudWxsO1xuICBsZXQgcHJlZml4ID0gJyc7XG4gIGxldCB0cmFjaztcbiAgbGV0IGluZm8gPSB7fTtcbiAgYnVmZmVyLnNwbGl0KC9cXHI/XFxuL2cpLmZvckVhY2goKGxpbmUsIG50aCkgPT4ge1xuICAgIGxpbmUgPSBsaW5lLnJlcGxhY2UoLzsuKz8kLywgJycpLnRyaW0oKTtcbiAgICBpZiAoIWxpbmUpIHJldHVybjtcblxuICAgIHRyeSB7XG4gICAgICBpZiAobGluZS5jaGFyQXQoKSA9PT0gJyUnKSB7XG4gICAgICAgIGNvbnN0IFtuYW1lLCAuLi52YWx1ZV0gPSBsaW5lLnNwbGl0KC9cXHMrLyk7XG5cbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBkYXRhW25hbWVdID0gdHJhbnNmb3JtKHZhbHVlLmpvaW4oJyAnKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobGluZS5pbmRleE9mKCcjICcpID49IDApIHtcbiAgICAgICAgaWYgKHRyYWNrKSB7XG4gICAgICAgICAgdHJhY2tzW3RyYWNrXSA9IGluZm87XG4gICAgICAgICAgY2hhbm5lbCA9IG51bGw7XG4gICAgICAgICAgcHJlZml4ID0gJyc7XG4gICAgICAgICAgaW5mbyA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgdHJhY2sgPSBsaW5lLnNwbGl0KC9cXHMrLykuc2xpY2UoMSkuam9pbignICcpO1xuICAgICAgfSBlbHNlIGlmIChsaW5lLmNoYXJBdCgpID09PSAnPicpIHtcbiAgICAgICAgbWFpbi5wdXNoKHRyYW5zZm9ybShsaW5lLnN1YnN0cigxKS50cmltKCkpKTtcbiAgICAgIH0gZWxzZSBpZiAobGluZS5jaGFyQXQoKSA9PT0gJ0AnKSB7XG4gICAgICAgIGNvbnN0IFtuYW1lLCAuLi5leHRlbmRdID0gbGluZS5zdWJzdHIoMSkuc3BsaXQoJyAnKTtcblxuICAgICAgICBpZiAoZXh0ZW5kWzBdID09PSAnPCcpIHtcbiAgICAgICAgICBjb25zdCBrZXkgPSBgJHtleHRlbmRbMV19I2A7XG5cbiAgICAgICAgICBPYmplY3Qua2V5cyhpbmZvKVxuICAgICAgICAgICAgLmZpbHRlcih4ID0+IHguaW5kZXhPZihrZXkpID09PSAwKVxuICAgICAgICAgICAgLmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICAgIGluZm9bYCR7bmFtZX0jJHtrLnNwbGl0KCcjJylbMV19YF0gPSBjbG9uZShpbmZvW2tdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHByZWZpeCA9IG5hbWU7XG4gICAgICB9IGVsc2UgaWYgKGxpbmUuaW5kZXhPZignOicpID4gMCkge1xuICAgICAgICBjb25zdCBbbmFtZSwgLi4udmFsdWVdID0gbGluZS5zcGxpdCgnOicpO1xuXG4gICAgICAgIGRhdGFbbmFtZV0gPSB0cmFuc2Zvcm0odmFsdWUuam9pbignOicpLnRyaW0oKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0aWNrcyA9IHRyYW5zZm9ybShsaW5lKTtcblxuICAgICAgICBpZiAoIXRpY2tzWzBdIHx8IHRpY2tzWzBdLnR5cGUgIT09ICdjaGFubmVsJykge1xuICAgICAgICAgIGlmICghY2hhbm5lbCkgdGhyb3cgbmV3IFR5cGVFcnJvcihgTWlzc2luZyBjaGFubmVsLCBnaXZlbiAnJHtsaW5lfSdgKTtcblxuICAgICAgICAgIGNvbnN0IGVuZCA9IGluZm9bY2hhbm5lbF1baW5mb1tjaGFubmVsXS5sZW5ndGggLSAxXTtcblxuICAgICAgICAgIGlmICghZW5kLnZhbHVlcykgZW5kLnZhbHVlcyA9IFt7IHR5cGU6ICdudW1iZXInLCB2YWx1ZTogMTI3IH1dO1xuICAgICAgICAgIGVuZC52YWx1ZXMucHVzaCguLi50aWNrcyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgbm90ZXMgPSB0aWNrcy5maW5kSW5kZXgoeCA9PiBbJ25vdGUnLCAnY2hvcmQnLCAncGFyYW0nXS5pbmNsdWRlcyh4LnR5cGUpKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aWNrcy5maW5kSW5kZXgoeCA9PiB4LnR5cGUgPT09ICdwYXR0ZXJuJyk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gaW5kZXggPiAwID8gdGlja3Muc2xpY2UoaW5kZXgpIDogdGlja3M7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHZhbHVlLmZpbmRJbmRleCh4ID0+IHgudHlwZSAhPT0gJ3BhdHRlcm4nKTtcbiAgICAgICAgY29uc3QgaW5wdXRzID0gdGlja3Muc2xpY2UoMCwgaW5kZXggPiAwID8gaW5kZXggOiAxKTtcblxuICAgICAgICBjaGFubmVsID0gcHJlZml4ICsgaW5wdXRzWzBdLnZhbHVlO1xuICAgICAgICBpZiAoIWluZm9bY2hhbm5lbF0pIHtcbiAgICAgICAgICBpbmZvW2NoYW5uZWxdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc3BlYztcbiAgICAgICAgaWYgKG5vdGVzID4gMCAmJiBpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zdCBlbmQgPSBpbmZvW2NoYW5uZWxdW2luZm9bY2hhbm5lbF0ubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICBlbmQuZGF0YSA9IHZhbHVlLnNsaWNlKG5vdGVzKTtcbiAgICAgICAgICBzcGVjID0ge1xuICAgICAgICAgICAgaW5wdXQ6IGVuZC5pbnB1dCxcbiAgICAgICAgICAgIHZhbHVlczogdmFsdWUuc2xpY2UoMSwgbm90ZXMpLFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAob2Zmc2V0ID4gMCkge1xuICAgICAgICAgIHNwZWMgPSB7XG4gICAgICAgICAgICBkYXRhOiB2YWx1ZS5zbGljZShvZmZzZXQpLFxuICAgICAgICAgICAgaW5wdXQ6IHZhbHVlLnNsaWNlKDAsIG9mZnNldCksXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChvZmZzZXQgPT09IDApIHtcbiAgICAgICAgICBzcGVjID0geyB2YWx1ZXM6IHZhbHVlLnNsaWNlKDEpIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3BlYyA9IHsgaW5wdXQ6IHZhbHVlIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5wdXRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBzcGVjLnZhbHVlcyA9IGlucHV0cy5zbGljZSgxKTtcbiAgICAgICAgfVxuICAgICAgICBpbmZvW2NoYW5uZWxdLnB1c2goc3BlYyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc3QgbXNnID0gdHlwZW9mIGUgPT09ICdzdHJpbmcnID8gZSA6IGUubWVzc2FnZTtcblxuICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGAke21zZ31cXG4gIGF0IGxpbmUgJHtudGggKyAxfVxcbiR7bGluZX1gKTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmICh0cmFjaykge1xuICAgIHRyYWNrc1t0cmFja10gPSBpbmZvO1xuICB9XG4gIHJldHVybiB7IG1haW4sIGRhdGEsIHRyYWNrcyB9O1xufVxuIiwgImZ1bmN0aW9uIGNsYXNzaWZ5TGluZShsaW5lKSB7XG4gIGNvbnN0IHRyaW1tZWQgPSBsaW5lLnRyaW0oKTtcbiAgaWYgKCF0cmltbWVkKSByZXR1cm4gJ2JsYW5rJztcbiAgaWYgKC9eJS8udGVzdCh0cmltbWVkKSkgcmV0dXJuICd2YXInO1xuICBpZiAoL15ALy50ZXN0KHRyaW1tZWQpKSByZXR1cm4gJ3NlY3Rpb24nO1xuICBpZiAoL14jXFxkKy8udGVzdCh0cmltbWVkKSkgcmV0dXJuICdpbnN0cnVtZW50JztcbiAgaWYgKC9eI3sxLDJ9XFxzKy8udGVzdCh0cmltbWVkKSkgcmV0dXJuICd0cmFjayc7XG4gIHJldHVybiAnYm9keSc7XG59XG5cbmZ1bmN0aW9uIGxpbmVJbmRleEF0Q3Vyc29yKHRleHQsIGN1cnNvclBvcykge1xuICBsZXQgbGluZSA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgTWF0aC5taW4oY3Vyc29yUG9zLCB0ZXh0Lmxlbmd0aCk7IGkgKz0gMSkge1xuICAgIGlmICh0ZXh0LmNoYXJBdChpKSA9PT0gJ1xcbicpIGxpbmUgKz0gMTtcbiAgfVxuICByZXR1cm4gbGluZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJsb2NrQXRDdXJzb3IodGV4dCwgY3Vyc29yUG9zKSB7XG4gIGNvbnN0IGxpbmVzID0gU3RyaW5nKHRleHQgfHwgJycpLnNwbGl0KCdcXG4nKTtcbiAgaWYgKCFsaW5lcy5sZW5ndGgpIHtcbiAgICByZXR1cm4geyBzdGFydExpbmU6IDAsIGVuZExpbmU6IDAsIHR5cGU6ICd0cmFjaycsIG5hbWU6ICdibG9jaycsIGJsb2NrVGV4dDogJycgfTtcbiAgfVxuXG4gIGxldCBjdXJzb3JMaW5lID0gbGluZUluZGV4QXRDdXJzb3IodGV4dCwgY3Vyc29yUG9zKTtcbiAgaWYgKGN1cnNvckxpbmUgPj0gbGluZXMubGVuZ3RoKSBjdXJzb3JMaW5lID0gbGluZXMubGVuZ3RoIC0gMTtcblxuICB3aGlsZSAoY3Vyc29yTGluZSA+IDAgJiYgY2xhc3NpZnlMaW5lKGxpbmVzW2N1cnNvckxpbmVdKSA9PT0gJ2JsYW5rJykge1xuICAgIGN1cnNvckxpbmUgLT0gMTtcbiAgfVxuXG4gIGNvbnN0IGN1cnJlbnRUeXBlID0gY2xhc3NpZnlMaW5lKGxpbmVzW2N1cnNvckxpbmVdKTtcbiAgaWYgKGN1cnJlbnRUeXBlID09PSAndmFyJykge1xuICAgIGNvbnN0IG5hbWUgPSBsaW5lc1tjdXJzb3JMaW5lXS50cmltKCkuc3BsaXQoL1xccysvKVswXSB8fCAnJXZhcic7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXJ0TGluZTogY3Vyc29yTGluZSxcbiAgICAgIGVuZExpbmU6IGN1cnNvckxpbmUsXG4gICAgICB0eXBlOiAndmFyJyxcbiAgICAgIG5hbWUsXG4gICAgICBibG9ja1RleHQ6IGxpbmVzW2N1cnNvckxpbmVdLFxuICAgIH07XG4gIH1cblxuICBjb25zdCB0cmFja0hlYWRlclBhdHRlcm4gPSAvXiN7MSwyfVxccysvO1xuICBjb25zdCBzZWN0aW9uUGF0dGVybiA9IC9eQC87XG5cbiAgbGV0IHNlY3Rpb25TdGFydCA9IC0xO1xuICBmb3IgKGxldCBpID0gY3Vyc29yTGluZTsgaSA+PSAwOyBpIC09IDEpIHtcbiAgICBjb25zdCB0eXBlID0gY2xhc3NpZnlMaW5lKGxpbmVzW2ldKTtcbiAgICBpZiAodHlwZSA9PT0gJ2JsYW5rJyB8fCB0eXBlID09PSAndHJhY2snIHx8IHR5cGUgPT09ICd2YXInKSBicmVhaztcbiAgICBpZiAoc2VjdGlvblBhdHRlcm4udGVzdChsaW5lc1tpXS50cmltKCkpKSB7XG4gICAgICBzZWN0aW9uU3RhcnQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKHNlY3Rpb25TdGFydCA+PSAwICYmIGN1cnJlbnRUeXBlICE9PSAndHJhY2snKSB7XG4gICAgbGV0IGVuZCA9IHNlY3Rpb25TdGFydDtcbiAgICBmb3IgKGxldCBpID0gc2VjdGlvblN0YXJ0ICsgMTsgaSA8IGxpbmVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCB0eXBlID0gY2xhc3NpZnlMaW5lKGxpbmVzW2ldKTtcbiAgICAgIGlmICh0eXBlID09PSAnYmxhbmsnIHx8IHR5cGUgPT09ICd0cmFjaycgfHwgdHlwZSA9PT0gJ3ZhcicgfHwgdHlwZSA9PT0gJ3NlY3Rpb24nKSBicmVhaztcbiAgICAgIGVuZCA9IGk7XG4gICAgfVxuICAgIGNvbnN0IG5hbWUgPSBsaW5lc1tzZWN0aW9uU3RhcnRdLnRyaW0oKS5zcGxpdCgvXFxzKy8pWzBdLnNsaWNlKDEpIHx8ICdzZWN0aW9uJztcbiAgICByZXR1cm4ge1xuICAgICAgc3RhcnRMaW5lOiBzZWN0aW9uU3RhcnQsXG4gICAgICBlbmRMaW5lOiBlbmQsXG4gICAgICB0eXBlOiAnc2VjdGlvbicsXG4gICAgICBuYW1lLFxuICAgICAgYmxvY2tUZXh0OiBsaW5lcy5zbGljZShzZWN0aW9uU3RhcnQsIGVuZCArIDEpLmpvaW4oJ1xcbicpLFxuICAgIH07XG4gIH1cblxuICBsZXQgc3RhcnQgPSAwO1xuICBmb3IgKGxldCBpID0gY3Vyc29yTGluZTsgaSA+PSAwOyBpIC09IDEpIHtcbiAgICBpZiAodHJhY2tIZWFkZXJQYXR0ZXJuLnRlc3QobGluZXNbaV0udHJpbSgpKSkge1xuICAgICAgc3RhcnQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChjbGFzc2lmeUxpbmUobGluZXNbaV0pID09PSAnYmxhbmsnKSB7XG4gICAgICBzdGFydCA9IGkgKyAxO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgbGV0IGVuZCA9IHN0YXJ0O1xuICBmb3IgKGxldCBpID0gc3RhcnQgKyAxOyBpIDwgbGluZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCB0eXBlID0gY2xhc3NpZnlMaW5lKGxpbmVzW2ldKTtcbiAgICBpZiAodHlwZSA9PT0gJ2JsYW5rJyB8fCB0eXBlID09PSAndHJhY2snIHx8IHR5cGUgPT09ICd2YXInKSBicmVhaztcbiAgICBlbmQgPSBpO1xuICB9XG5cbiAgY29uc3QgaGVhZGVyID0gbGluZXNbc3RhcnRdLnRyaW0oKTtcbiAgY29uc3QgbmFtZSA9IGhlYWRlci5yZXBsYWNlKC9eI3sxLDJ9XFxzKy8sICcnKS50cmltKCkgfHwgJ3RyYWNrJztcbiAgcmV0dXJuIHtcbiAgICBzdGFydExpbmU6IHN0YXJ0LFxuICAgIGVuZExpbmU6IGVuZCxcbiAgICB0eXBlOiAndHJhY2snLFxuICAgIG5hbWUsXG4gICAgYmxvY2tUZXh0OiBsaW5lcy5zbGljZShzdGFydCwgZW5kICsgMSkuam9pbignXFxuJyksXG4gIH07XG59XG4iLCAiZnVuY3Rpb24gZXNjKHZhbHVlKSB7XG4gIHJldHVybiBTdHJpbmcodmFsdWUpXG4gICAgLnJlcGxhY2UoLyYvZywgJyZhbXA7JylcbiAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXG4gICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKTtcbn1cblxuZnVuY3Rpb24gc3BhbihjbHMsIHZhbHVlLCBhdHRycyA9IHt9KSB7XG4gIGNvbnN0IGRhdGFBdHRycyA9IE9iamVjdC5lbnRyaWVzKGF0dHJzKVxuICAgIC5tYXAoKFtrZXksIGF0dHJWYWx1ZV0pID0+IGAgZGF0YS0ke2tleX09XCIke2VzYyhhdHRyVmFsdWUpfVwiYClcbiAgICAuam9pbignJyk7XG4gIHJldHVybiBgPHNwYW4gY2xhc3M9XCIke2Nsc31cIiR7ZGF0YUF0dHJzfT4ke2VzYyh2YWx1ZSl9PC9zcGFuPmA7XG59XG5cbmZ1bmN0aW9uIGNsYXNzaWZ5KHRva2VuKSB7XG4gIGlmICghdG9rZW4pIHJldHVybiBudWxsO1xuICBpZiAodG9rZW4gPT09ICc8JykgcmV0dXJuICd0b2staW5oZXJpdCc7XG4gIGlmICh0b2tlbiA9PT0gJyUnKSByZXR1cm4gJ3Rvay12YXItcmVmJztcbiAgaWYgKHRva2VuLmNoYXJBdCgwKSA9PT0gJyUnKSByZXR1cm4gJ3Rvay12YXItcmVmJztcbiAgaWYgKC9eXFwqXFxkKyQvLnRlc3QodG9rZW4pKSByZXR1cm4gJ3Rvay1yZXBlYXQnO1xuICBpZiAoL15beF9cXC1cXFtcXF1dKyQvLnRlc3QodG9rZW4pKSByZXR1cm4gJ3Rvay1wYXR0ZXJuJztcbiAgaWYgKC9eW2EtZ0EtR11bI2JdP1xcZCskLy50ZXN0KHRva2VuKSkgcmV0dXJuICd0b2stbm90ZSc7XG4gIGlmICh0b2tlbi5pbmNsdWRlcygnfCcpKSByZXR1cm4gJ3Rvay1jaG9yZCc7XG4gIGlmICgvXihtYWpvcnxtaW5vcnxwaHJ5Z2lhbnxkb3JpYW58bWl4b2x5ZGlhbnxsb2NyaWFufGx5ZGlhbikkL2kudGVzdCh0b2tlbikpIHJldHVybiAndG9rLW1vZGUnO1xuICBpZiAoL14oPzpJfElJfElJSXxJVnxWfFZJfFZJSXxpfGlpfGlpaXxpdnx2fHZpfHZpaSlcdTAwQjA/JC8udGVzdCh0b2tlbikpIHJldHVybiAndG9rLXByb2dyZXNzaW9uJztcbiAgaWYgKC9eKD86XFwrXFwrfFxcLlxcLnw+PnxcXCpcXCopJC8udGVzdCh0b2tlbikpIHJldHVybiAndG9rLW9wZXJhdG9yJztcbiAgaWYgKC9eI1xcZCskLy50ZXN0KHRva2VuKSkgcmV0dXJuICd0b2stY2hhbm5lbCc7XG4gIGlmICgvXi0/XFxkKyhcXC5cXGQrKT8kLy50ZXN0KHRva2VuKSkgcmV0dXJuICd0b2stbnVtYmVyJztcbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRva2VuKHRva2VuKSB7XG4gIGNvbnN0IGNscyA9IGNsYXNzaWZ5KHRva2VuKTtcbiAgaWYgKCFjbHMpIHJldHVybiBlc2ModG9rZW4pO1xuICBpZiAoY2xzID09PSAndG9rLXZhci1yZWYnICYmIHRva2VuICE9PSAnJScpIHJldHVybiBzcGFuKGNscywgdG9rZW4sIHsgdmFyOiB0b2tlbiB9KTtcbiAgaWYgKGNscyA9PT0gJ3Rvay12YXItcmVmJyAmJiB0b2tlbiA9PT0gJyUnKSByZXR1cm4gc3BhbihjbHMsIHRva2VuLCB7IHJlcGVhdExhc3Q6ICcxJyB9KTtcbiAgaWYgKGNscyA9PT0gJ3Rvay1jaGFubmVsJykgcmV0dXJuIHNwYW4oY2xzLCB0b2tlbiwgeyBpbnN0cnVtZW50OiB0b2tlbi5zbGljZSgxKSB9KTtcbiAgaWYgKGNscyA9PT0gJ3Rvay1tb2RlJykgcmV0dXJuIHNwYW4oY2xzLCB0b2tlbiwgeyBtb2RlOiB0b2tlbi50b0xvd2VyQ2FzZSgpIH0pO1xuICBpZiAoY2xzID09PSAndG9rLXBhdHRlcm4nKSByZXR1cm4gc3BhbihjbHMsIHRva2VuLCB7IHBhdHRlcm46ICcxJyB9KTtcbiAgaWYgKGNscyA9PT0gJ3Rvay1ub3RlJykgcmV0dXJuIHNwYW4oY2xzLCB0b2tlbiwgeyBub3RlOiB0b2tlbiB9KTtcbiAgaWYgKGNscyA9PT0gJ3Rvay1jaG9yZCcpIHJldHVybiBzcGFuKGNscywgdG9rZW4sIHsgY2hvcmQ6IHRva2VuIH0pO1xuICBpZiAoY2xzID09PSAndG9rLW51bWJlcicpIHJldHVybiBzcGFuKGNscywgdG9rZW4sIHsgbnVtYmVyOiB0b2tlbiB9KTtcbiAgaWYgKGNscyA9PT0gJ3Rvay1yZXBlYXQnKSByZXR1cm4gc3BhbihjbHMsIHRva2VuLCB7IHJlcGVhdDogdG9rZW4uc2xpY2UoMSkgfSk7XG4gIHJldHVybiBzcGFuKGNscywgdG9rZW4pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUb2tlbnModGV4dCkge1xuICByZXR1cm4gdGV4dFxuICAgIC5zcGxpdCgvKFxccyspLylcbiAgICAubWFwKHBhcnQgPT4gKC9cXHMrLy50ZXN0KHBhcnQpID8gcGFydCA6IHJlbmRlclRva2VuKHBhcnQpKSlcbiAgICAuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIHNwbGl0Q29tbWVudChsaW5lKSB7XG4gIGNvbnN0IGlkeCA9IGxpbmUuaW5kZXhPZignOycpO1xuICBpZiAoaWR4IDwgMCkgcmV0dXJuIFtsaW5lLCAnJ107XG4gIHJldHVybiBbbGluZS5zbGljZSgwLCBpZHgpLCBsaW5lLnNsaWNlKGlkeCldO1xufVxuXG5mdW5jdGlvbiByZW5kZXJCYXNlKGJhc2UpIHtcbiAgaWYgKCFiYXNlLnRyaW0oKSkgcmV0dXJuIGVzYyhiYXNlKTtcblxuICBpZiAoL15cXHMqIyNcXHMrLy50ZXN0KGJhc2UpKSB7XG4gICAgcmV0dXJuIGJhc2UucmVwbGFjZSgvXihcXHMqIyNcXHMrKSguKikkLywgKF8sIHAxLCBwMikgPT4gYCR7ZXNjKHAxKX0ke3NwYW4oJ3Rvay1zdWJ0cmFjaycsIHAyKX1gKTtcbiAgfVxuICBpZiAoL15cXHMqI1xccysvLnRlc3QoYmFzZSkpIHtcbiAgICByZXR1cm4gYmFzZS5yZXBsYWNlKC9eKFxccyojXFxzKykoLiopJC8sIChfLCBwMSwgcDIpID0+IGAke2VzYyhwMSl9JHtzcGFuKCd0b2stdHJhY2snLCBwMil9YCk7XG4gIH1cbiAgaWYgKC9eXFxzKkAvLnRlc3QoYmFzZSkpIHtcbiAgICByZXR1cm4gcmVuZGVyVG9rZW5zKGJhc2UucmVwbGFjZSgvPC9nLCAnIDwgJykpO1xuICB9XG4gIGlmICgvXlxccyo+Ly50ZXN0KGJhc2UpKSB7XG4gICAgY29uc3QgaW5kZW50ID0gZXNjKGJhc2UubWF0Y2goL15cXHMqLylbMF0pO1xuICAgIGNvbnN0IGJvZHkgPSBiYXNlLnRyaW1TdGFydCgpLnNsaWNlKDEpLnJlcGxhY2UoL15cXHMqLywgJyAnKTtcbiAgICBjb25zdCByZW5kZXJlZCA9IGJvZHlcbiAgICAgIC5zcGxpdCgvKFxccyspLylcbiAgICAgIC5tYXAocGFydCA9PiB7XG4gICAgICAgIGlmICghcGFydCB8fCAvXFxzKy8udGVzdChwYXJ0KSkgcmV0dXJuIHBhcnQ7XG4gICAgICAgIGlmICgvXltBLVpdW0EtWjAtOV0qJC8udGVzdChwYXJ0KSkgcmV0dXJuIHNwYW4oJ3Rvay1zZWN0aW9uJywgcGFydCwgeyBzZWN0aW9uOiBwYXJ0IH0pO1xuICAgICAgICByZXR1cm4gcmVuZGVyVG9rZW4ocGFydCk7XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpO1xuICAgIHJldHVybiBgJHtpbmRlbnR9JHtzcGFuKCd0b2stYXJyYW5nZW1lbnQnLCAnPicpfSR7cmVuZGVyZWR9YDtcbiAgfVxuICBpZiAoL15cXHMqJVteXFxzXStcXHMrLy50ZXN0KGJhc2UpKSB7XG4gICAgcmV0dXJuIGJhc2UucmVwbGFjZSgvXihcXHMqKSglW15cXHNdKykoXFxzKikoLiopJC8sIChfLCBpLCB2LCBzLCByZXN0KSA9PiAoXG4gICAgICBgJHtlc2MoaSl9JHtzcGFuKCd0b2stdmFyLWRlZicsIHYsIHsgdmFyOiB2IH0pfSR7ZXNjKHMpfSR7cmVuZGVyVG9rZW5zKHJlc3QpfWBcbiAgICApKTtcbiAgfVxuICBpZiAoL15cXHMqI1xcZCsvLnRlc3QoYmFzZSkpIHtcbiAgICBsZXQgdmVsb2NpdHlUYWdnZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gYmFzZS5zcGxpdCgvKFxccyspLykubWFwKHBhcnQgPT4ge1xuICAgICAgaWYgKC9eXFxzKiQvLnRlc3QocGFydCkpIHJldHVybiBwYXJ0O1xuICAgICAgY29uc3QgY2xzID0gY2xhc3NpZnkocGFydCk7XG4gICAgICBpZiAoY2xzID09PSAndG9rLW51bWJlcicgJiYgIXZlbG9jaXR5VGFnZ2VkKSB7XG4gICAgICAgIHZlbG9jaXR5VGFnZ2VkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHNwYW4oY2xzLCBwYXJ0LCB7IHZlbG9jaXR5OiBwYXJ0IH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlbmRlclRva2VuKHBhcnQpO1xuICAgIH0pLmpvaW4oJycpO1xuICB9XG4gIHJldHVybiByZW5kZXJUb2tlbnMoYmFzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWdobGlnaHQoaW5wdXQpIHtcbiAgcmV0dXJuIFN0cmluZyhpbnB1dCB8fCAnJylcbiAgICAuc3BsaXQoL1xccj9cXG4vKVxuICAgIC5tYXAoKGxpbmUsIGxpbmVOdW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IFtiYXNlLCBjb21tZW50XSA9IHNwbGl0Q29tbWVudChsaW5lKTtcbiAgICAgIGNvbnN0IHJlbmRlcmVkID0gcmVuZGVyQmFzZShiYXNlKTtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSAhY29tbWVudCA/IHJlbmRlcmVkIDogYCR7cmVuZGVyZWR9JHtzcGFuKCd0b2stY29tbWVudCcsIGNvbW1lbnQpfWA7XG4gICAgICByZXR1cm4gYDxzcGFuIGNsYXNzPVwiaGwtbGluZVwiIGRhdGEtbGluZT1cIiR7bGluZU51bWJlcn1cIj4ke2NvbnRlbnR9PC9zcGFuPmA7XG4gICAgfSlcbiAgICAuam9pbignXFxuJyk7XG59XG4iLCAiaW1wb3J0IHsgaGlnaGxpZ2h0IH0gZnJvbSAnLi4vaGlnaGxpZ2h0JztcblxuY29uc3QgRElBVE9OSUMgPSB7IGM6IDAsIGQ6IDEsIGU6IDIsIGY6IDMsIGc6IDQsIGE6IDUsIGI6IDYgfTtcbmNvbnN0IEU0X0RJQVRPTklDID0gNCAqIDcgKyAyO1xuXG5mdW5jdGlvbiBub3JtYWxpemVOb3RlKHMpIHtcbiAgcmV0dXJuIHMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzLnNsaWNlKDEpO1xufVxuXG5mdW5jdGlvbiBub3RlVG9Qb3Mobm90ZVN0cikge1xuICBjb25zdCBtID0gbm90ZVN0ci5tYXRjaCgvXihbYS1nQS1HXSkoWyNiXT8pKFxcZCspJC8pO1xuICBpZiAoIW0pIHJldHVybiBudWxsO1xuICBjb25zdCBkaWF0UG9zID0gcGFyc2VJbnQobVszXSwgMTApICogNyArIERJQVRPTklDW21bMV0udG9Mb3dlckNhc2UoKV07XG4gIHJldHVybiBkaWF0UG9zIC0gRTRfRElBVE9OSUM7XG59XG5cbmZ1bmN0aW9uIHBvc1RvWShwb3MpIHtcbiAgcmV0dXJuIDYwIC0gcG9zICogNTtcbn1cblxuZnVuY3Rpb24gYnVpbGRTdGFmZlNWRyhub3RlcywgbW9kZSA9ICdjaG9yZCcpIHtcbiAgaWYgKCFub3RlcyB8fCBub3Rlcy5sZW5ndGggPT09IDApIHJldHVybiAnJztcbiAgY29uc3Qgc29ydGVkID0gbm90ZXNcbiAgICAubWFwKG4gPT4gKHsgbm90ZTogbiwgcG9zOiBub3RlVG9Qb3MobikgfSkpXG4gICAgLmZpbHRlcihuID0+IG4ucG9zICE9PSBudWxsKVxuICAgIC5zb3J0KChhLCBiKSA9PiBhLnBvcyAtIGIucG9zKTtcbiAgaWYgKHNvcnRlZC5sZW5ndGggPT09IDApIHJldHVybiAnJztcblxuICBjb25zdCBXID0gMjAwO1xuICBjb25zdCBIID0gOTA7XG4gIGxldCBzdmcgPSBgPHN2ZyB3aWR0aD1cIiR7V31cIiBoZWlnaHQ9XCIke0h9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPmA7XG5cbiAgc3ZnICs9ICc8c3R5bGU+LnN0YWZmLWxpbmUsLmxlZGdlcntzdHJva2U6I2ZmZjtzdHJva2Utd2lkdGg6MX08L3N0eWxlPic7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSArPSAxKSB7XG4gICAgY29uc3QgeSA9IDIwICsgaSAqIDEwO1xuICAgIHN2ZyArPSBgPGxpbmUgY2xhc3M9XCJzdGFmZi1saW5lXCIgeDE9XCIwXCIgeTE9XCIke3l9XCIgeDI9XCIke1d9XCIgeTI9XCIke3l9XCIvPmA7XG4gIH1cbiAgc3ZnICs9ICc8dGV4dCB4PVwiOFwiIHk9XCI1MFwiIGZpbGw9XCIjZmZmXCIgZm9udC1zaXplPVwiNTJcIiBmb250LWZhbWlseT1cInNlcmlmXCI+XHVEODM0XHVERDFFPC90ZXh0Pic7XG5cbiAgY29uc3QgaXNTY2FsZSA9IG1vZGUgPT09ICdzY2FsZSc7XG4gIGNvbnN0IG5vdGVDb3VudCA9IHNvcnRlZC5sZW5ndGg7XG4gIGxldCBub3RlWDtcbiAgaWYgKGlzU2NhbGUpIHtcbiAgICBjb25zdCBzdGVwID0gbm90ZUNvdW50ID4gMSA/IDE1NCAvIChub3RlQ291bnQgLSAxKSA6IDA7XG4gICAgc29ydGVkLmZvckVhY2goKG4sIGkpID0+IHtcbiAgICAgIG4ueCA9IDM2ICsgaSAqIHN0ZXA7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgbm90ZVggPSA5MDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNvcnRlZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY3VyciA9IHNvcnRlZFtpXTtcbiAgICAgIGNvbnN0IHByZXYgPSBpID4gMCA/IHNvcnRlZFtpIC0gMV0gOiBudWxsO1xuICAgICAgY3Vyci54ID0gbm90ZVg7XG4gICAgICBpZiAocHJldiAmJiBNYXRoLmFicyhjdXJyLnBvcyAtIHByZXYucG9zKSA9PT0gMSkge1xuICAgICAgICBjdXJyLnggPSBwcmV2LnggKyAxMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzb3J0ZWQuZm9yRWFjaChuID0+IHtcbiAgICBjb25zdCB5ID0gcG9zVG9ZKG4ucG9zKTtcbiAgICBjb25zdCBtID0gbi5ub3RlLm1hdGNoKC9eKFthLWdBLUddKShbI2JdPykoXFxkKykkLyk7XG4gICAgY29uc3QgYWNjaWRlbnRhbCA9IG0gPyBtWzJdIDogJyc7XG4gICAgZm9yIChsZXQgcCA9IC0yOyBwID49IG4ucG9zOyBwIC09IDIpIHtcbiAgICAgIGNvbnN0IGx5ID0gcG9zVG9ZKHApO1xuICAgICAgc3ZnICs9IGA8bGluZSBjbGFzcz1cImxlZGdlclwiIHgxPVwiJHtuLnggLSA5fVwiIHkxPVwiJHtseX1cIiB4Mj1cIiR7bi54ICsgOX1cIiB5Mj1cIiR7bHl9XCIvPmA7XG4gICAgfVxuICAgIGZvciAobGV0IHAgPSAxMDsgcCA8PSBuLnBvczsgcCArPSAyKSB7XG4gICAgICBjb25zdCBseSA9IHBvc1RvWShwKTtcbiAgICAgIHN2ZyArPSBgPGxpbmUgY2xhc3M9XCJsZWRnZXJcIiB4MT1cIiR7bi54IC0gOX1cIiB5MT1cIiR7bHl9XCIgeDI9XCIke24ueCArIDl9XCIgeTI9XCIke2x5fVwiLz5gO1xuICAgIH1cbiAgICBpZiAoaXNTY2FsZSkge1xuICAgICAgc3ZnICs9IGA8ZWxsaXBzZSBjeD1cIiR7bi54fVwiIGN5PVwiJHt5fVwiIHJ4PVwiNVwiIHJ5PVwiNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI2ZmZlwiIHN0cm9rZS13aWR0aD1cIjEuMlwiIHRyYW5zZm9ybT1cInJvdGF0ZSgtMTUgJHtuLnh9ICR7eX0pXCIvPmA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN2ZyArPSBgPGVsbGlwc2UgY3g9XCIke24ueH1cIiBjeT1cIiR7eX1cIiByeD1cIjVcIiByeT1cIjRcIiBmaWxsPVwiI2ZmZlwiIHRyYW5zZm9ybT1cInJvdGF0ZSgtMTUgJHtuLnh9ICR7eX0pXCIvPmA7XG4gICAgfVxuICAgIGlmIChhY2NpZGVudGFsID09PSAnIycpIHtcbiAgICAgIHN2ZyArPSBgPHRleHQgeD1cIiR7bi54IC0gMTR9XCIgeT1cIiR7eSArIDR9XCIgZmlsbD1cIiNmZmZcIiBmb250LXNpemU9XCIxMFwiPlx1MjY2RjwvdGV4dD5gO1xuICAgIH0gZWxzZSBpZiAoYWNjaWRlbnRhbCA9PT0gJ2InKSB7XG4gICAgICBzdmcgKz0gYDx0ZXh0IHg9XCIke24ueCAtIDEyfVwiIHk9XCIke3kgKyA0fVwiIGZpbGw9XCIjZmZmXCIgZm9udC1zaXplPVwiMTFcIj5cdTI2NkQ8L3RleHQ+YDtcbiAgICB9XG4gIH0pO1xuXG4gIGlmICghaXNTY2FsZSAmJiBzb3J0ZWQubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IGxvd2VzdFBvcyA9IHNvcnRlZFswXS5wb3M7XG4gICAgY29uc3QgaGlnaGVzdFBvcyA9IHNvcnRlZFtzb3J0ZWQubGVuZ3RoIC0gMV0ucG9zO1xuICAgIGxldCBzdGVtRGlyID0gbG93ZXN0UG9zIDw9IDMgPyAndXAnIDogJ2Rvd24nO1xuICAgIGlmIChzdGVtRGlyID09PSAndXAnKSB7XG4gICAgICBjb25zdCBoaWdoWSA9IHBvc1RvWShoaWdoZXN0UG9zKTtcbiAgICAgIGNvbnN0IGhpZ2hYID0gc29ydGVkW3NvcnRlZC5sZW5ndGggLSAxXS54O1xuICAgICAgc3ZnICs9IGA8bGluZSB4MT1cIiR7aGlnaFggKyA1fVwiIHkxPVwiJHtoaWdoWX1cIiB4Mj1cIiR7aGlnaFggKyA1fVwiIHkyPVwiJHtoaWdoWSAtIDI4fVwiIHN0cm9rZT1cIiNmZmZcIiBzdHJva2Utd2lkdGg9XCIxLjJcIi8+YDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbG93WSA9IHBvc1RvWShsb3dlc3RQb3MpO1xuICAgICAgY29uc3QgbG93WCA9IHNvcnRlZFswXS54O1xuICAgICAgc3ZnICs9IGA8bGluZSB4MT1cIiR7bG93WCAtIDV9XCIgeTE9XCIke2xvd1l9XCIgeDI9XCIke2xvd1ggLSA1fVwiIHkyPVwiJHtsb3dZICsgMjh9XCIgc3Ryb2tlPVwiI2ZmZlwiIHN0cm9rZS13aWR0aD1cIjEuMlwiLz5gO1xuICAgIH1cbiAgfVxuXG4gIHN2ZyArPSAnPC9zdmc+JztcbiAgcmV0dXJuIHN2Zztcbn1cblxuZnVuY3Rpb24gY2xhbXBUb29sdGlwKHgsIHksIHdpZHRoID0gMzIwKSB7XG4gIGNvbnN0IG1heFggPSBNYXRoLm1heCg4LCB3aW5kb3cuaW5uZXJXaWR0aCAtIHdpZHRoIC0gOCk7XG4gIGNvbnN0IGxlZnQgPSBNYXRoLm1pbih4ICsgMTIsIG1heFgpO1xuICBjb25zdCB0b3AgPSBNYXRoLm1pbih5ICsgMTIsIHdpbmRvdy5pbm5lckhlaWdodCAtIDE3MCk7XG4gIHJldHVybiB7IGxlZnQsIHRvcCB9O1xufVxuXG5mdW5jdGlvbiBjaGFyT2Zmc2V0T2ZFbGVtZW50KHJvb3QsIHRhcmdldCkge1xuICBpZiAoIXJvb3QgfHwgIXRhcmdldCB8fCAhcm9vdC5jb250YWlucyh0YXJnZXQpKSByZXR1cm4gLTE7XG4gIGNvbnN0IGxpbmVFbCA9IHRhcmdldC5jbG9zZXN0KCdbZGF0YS1saW5lXScpO1xuICBjb25zdCBsaW5lTnVtYmVyID0gbGluZUVsID8gcGFyc2VJbnQobGluZUVsLmRhdGFzZXQubGluZSwgMTApIDogMDtcbiAgaWYgKCFsaW5lRWwgfHwgTnVtYmVyLmlzTmFOKGxpbmVOdW1iZXIpKSByZXR1cm4gLTE7XG5cbiAgLy8gTWVhc3VyZSBvZmZzZXQgd2l0aGluIHRoaXMgbGluZSBvbmx5IChhdm9pZHMgY3Jvc3MtYmxvY2sgcmFuZ2UudG9TdHJpbmcoKSBxdWlya3NcbiAgLy8gd2hlcmUgZW1wdHkgZGlzcGxheTpibG9jayBzcGFucyBjb250cmlidXRlIFxcbiBjaGFyYWN0ZXJzIHRvIHRoZSByZXN1bHQpXG4gIGNvbnN0IGxpbmVSYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gIGxpbmVSYW5nZS5zZWxlY3ROb2RlQ29udGVudHMobGluZUVsKTtcbiAgbGluZVJhbmdlLnNldEVuZEJlZm9yZSh0YXJnZXQpO1xuICBjb25zdCBvZmZzZXRJbkxpbmUgPSBsaW5lUmFuZ2UudG9TdHJpbmcoKS5sZW5ndGg7XG5cbiAgLy8gU3VtIGNoYXJhY3RlciBsZW5ndGhzIG9mIGFsbCBwcmVjZWRpbmcgbGluZXMgKyAxIG5ld2xpbmUgZWFjaFxuICBjb25zdCBhbGxMaW5lcyA9IHJvb3QucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbGluZV0nKTtcbiAgbGV0IHRvdGFsID0gb2Zmc2V0SW5MaW5lO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVOdW1iZXI7IGkrKykge1xuICAgIHRvdGFsICs9IChhbGxMaW5lc1tpXSA/IGFsbExpbmVzW2ldLnRleHRDb250ZW50Lmxlbmd0aCA6IDApICsgMTtcbiAgfVxuICByZXR1cm4gdG90YWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFZGl0b3IoaW5pdGlhbFRleHQsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB3cmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdyYXAuaWQgPSAnZWRpdG9yLXdyYXAnO1xuXG4gIGNvbnN0IHByZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ByZScpO1xuICBwcmUuaWQgPSAnZWRpdG9yLWhsJztcbiAgcHJlLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gIGNvbnN0IHRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgdGEuaWQgPSAnZWRpdG9yJztcbiAgdGEuc3BlbGxjaGVjayA9IGZhbHNlO1xuICB0YS5hdXRvY29tcGxldGUgPSAnb2ZmJztcbiAgdGEudmFsdWUgPSBpbml0aWFsVGV4dDtcblxuICBjb25zdCB0aXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGlwLmlkID0gJ3Zhci10b29sdGlwJztcbiAgdGlwLmhpZGRlbiA9IHRydWU7XG4gIHRpcC5pbm5lckhUTUwgPSAnPHN0cm9uZz48L3N0cm9uZz48c3BhbiBjbGFzcz1cInRvb2x0aXAtcmVzb2x2ZWRcIj48L3NwYW4+PGRpdiBjbGFzcz1cInRvb2x0aXAtc3RhZmZcIj48L2Rpdj4nO1xuICBjb25zdCB0aXBUaXRsZSA9IHRpcC5xdWVyeVNlbGVjdG9yKCdzdHJvbmcnKTtcbiAgY29uc3QgdGlwQm9keSA9IHRpcC5xdWVyeVNlbGVjdG9yKCcudG9vbHRpcC1yZXNvbHZlZCcpO1xuICBjb25zdCB0aXBTdGFmZiA9IHRpcC5xdWVyeVNlbGVjdG9yKCcudG9vbHRpcC1zdGFmZicpO1xuICBjb25zdCBmbGFzaFRpbWVycyA9IG5ldyBTZXQoKTtcbiAgbGV0IHNjcnViU3RhdGUgPSBudWxsO1xuICBsZXQgYWN0aXZlVG9rZW5zID0gW107XG5cbiAgY29uc3QgdG9vbHRpcEhhbmRsZXJzID0gW1xuICAgIG9wdGlvbnMucmVzb2x2ZU5vdGUgJiYge1xuICAgICAgYXR0cjogJ25vdGUnLFxuICAgICAgcmVzb2x2ZTogb3B0aW9ucy5yZXNvbHZlTm90ZSxcbiAgICAgIG5vdGVzOiB2YWx1ZSA9PiBbdmFsdWVdLFxuICAgICAgc3RhZmZNb2RlOiAnc2luZ2xlJyxcbiAgICAgIHRpdGxlOiB2YWx1ZSA9PiBub3JtYWxpemVOb3RlKHZhbHVlKSxcbiAgICB9LFxuICAgIG9wdGlvbnMucmVzb2x2ZUNob3JkICYmIHtcbiAgICAgIGF0dHI6ICdjaG9yZCcsXG4gICAgICByZXNvbHZlOiBvcHRpb25zLnJlc29sdmVDaG9yZCxcbiAgICAgIG5vdGVzOiB2YWx1ZSA9PiB2YWx1ZS5zcGxpdCgnfCcpLm1hcChub3JtYWxpemVOb3RlKSxcbiAgICAgIHN0YWZmTW9kZTogJ2Nob3JkJyxcbiAgICAgIHRpdGxlOiAoKSA9PiAnQ2hvcmQnLFxuICAgIH0sXG4gICAgb3B0aW9ucy5yZXNvbHZlTW9kZSAmJiB7XG4gICAgICBhdHRyOiAnbW9kZScsXG4gICAgICByZXNvbHZlOiBvcHRpb25zLnJlc29sdmVNb2RlLFxuICAgICAgbm90ZXM6IG9wdGlvbnMucmVzb2x2ZU1vZGVOb3RlcyxcbiAgICAgIHN0YWZmTW9kZTogJ3NjYWxlJyxcbiAgICAgIHRpdGxlOiB2YWx1ZSA9PiB2YWx1ZSxcbiAgICB9LFxuICAgIG9wdGlvbnMucmVzb2x2ZUluc3RydW1lbnQgJiYge1xuICAgICAgYXR0cjogJ2luc3RydW1lbnQnLFxuICAgICAgcmVzb2x2ZTogb3B0aW9ucy5yZXNvbHZlSW5zdHJ1bWVudCxcbiAgICAgIHRpdGxlOiB2YWx1ZSA9PiBgIyR7dmFsdWV9YCxcbiAgICB9LFxuICAgIG9wdGlvbnMucmVzb2x2ZVNlY3Rpb24gJiYge1xuICAgICAgYXR0cjogJ3NlY3Rpb24nLFxuICAgICAgcmVzb2x2ZTogb3B0aW9ucy5yZXNvbHZlU2VjdGlvbixcbiAgICAgIHRpdGxlOiB2YWx1ZSA9PiBgQCR7dmFsdWV9YCxcbiAgICB9LFxuICAgIG9wdGlvbnMucmVzb2x2ZVZhciAmJiB7XG4gICAgICBhdHRyOiAndmFyJyxcbiAgICAgIHJlc29sdmU6IG9wdGlvbnMucmVzb2x2ZVZhcixcbiAgICAgIHRpdGxlOiB2YWx1ZSA9PiB2YWx1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGF0dHI6ICdyZXBlYXRMYXN0JyxcbiAgICAgIHJlc29sdmU6ICgpID0+ICdSZXBlYXRzIHRoZSBwcmVjZWRpbmcgZXhwcmVzc2lvbiBvbmNlIG1vcmUnLFxuICAgICAgdGl0bGU6ICgpID0+ICclJyxcbiAgICB9LFxuICAgIG9wdGlvbnMucmVzb2x2ZVZlbG9jaXR5ICYmIHtcbiAgICAgIGF0dHI6ICd2ZWxvY2l0eScsXG4gICAgICByZXNvbHZlOiBvcHRpb25zLnJlc29sdmVWZWxvY2l0eSxcbiAgICAgIHRpdGxlOiB2ID0+IGBWZWxvY2l0eSAke3Z9YCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGF0dHI6ICdyZXBlYXQnLFxuICAgICAgcmVzb2x2ZTogdiA9PiB7XG4gICAgICAgIGNvbnN0IG4gPSBwYXJzZUludCh2LCAxMCk7XG4gICAgICAgIHJldHVybiBgUGxheXMgdGhlIHByZWNlZGluZyBzZXF1ZW5jZSAke259IHRpbWUke24gIT09IDEgPyAncycgOiAnJ30gaW4gYSByb3dgO1xuICAgICAgfSxcbiAgICAgIHRpdGxlOiB2ID0+IGBcdTAwRDcke3Z9YCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGF0dHI6ICdudW1iZXInLFxuICAgICAgcmVzb2x2ZTogKCkgPT4gJ051bWVyaWMgdmFsdWUgXHUyMDE0IHVzZWQgYXMgdmVsb2NpdHksIG9jdGF2ZSwgb3IgcGFyYW1ldGVyJyxcbiAgICAgIHRpdGxlOiB2ID0+IHYsXG4gICAgfSxcbiAgICB7XG4gICAgICBhdHRyOiAncGF0dGVybicsXG4gICAgICByZXNvbHZlOiAoKSA9PiAneCA9IGhpdCAgfCAgLSA9IGhvbGQgIHwgIF8gPSByZXN0ICB8ICBbIF0gPSBzdWJkaXZpZGUnLFxuICAgICAgdGl0bGU6ICgpID0+ICdSaHl0aG0gcGF0dGVybicsXG4gICAgfSxcbiAgXS5maWx0ZXIoQm9vbGVhbik7XG5cbiAgZnVuY3Rpb24gc3luYygpIHtcbiAgICBwcmUuaW5uZXJIVE1MID0gYCR7aGlnaGxpZ2h0KHRhLnZhbHVlKX1cXG5gO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZVRvb2x0aXAoKSB7XG4gICAgdGlwLmhpZGRlbiA9IHRydWU7XG4gICAgdGlwU3RhZmYuaW5uZXJIVE1MID0gJyc7XG4gICAgdGlwU3RhZmYuaGlkZGVuID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyU2NydWJDdXJzb3IoKSB7XG4gICAgd3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdzY3J1Yi1ob3ZlcicpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJBY3RpdmVUb2tlbkhpZ2hsaWdodCgpIHtcbiAgICBhY3RpdmVUb2tlbnMuZm9yRWFjaCh0b2tlbiA9PiB0b2tlbi5jbGFzc0xpc3QucmVtb3ZlKCd0b2stYWN0aXZlJykpO1xuICAgIGFjdGl2ZVRva2VucyA9IFtdO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2NydWJUYXJnZXQoZWxlbWVudHMpIHtcbiAgICByZXR1cm4gZWxlbWVudHMuZmluZChlbCA9PiAoXG4gICAgICBlbC5kYXRhc2V0XG4gICAgICAmJiAodHlwZW9mIGVsLmRhdGFzZXQubnVtYmVyICE9PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZWwuZGF0YXNldC52ZWxvY2l0eSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgKSk7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZVNjcnViUmF3KHJhdykge1xuICAgIGNvbnN0IGlzRmxvYXQgPSBTdHJpbmcocmF3KS5pbmNsdWRlcygnLicpO1xuICAgIGNvbnN0IGRlY2ltYWxQbGFjZXMgPSBpc0Zsb2F0ID8gU3RyaW5nKHJhdykuc3BsaXQoJy4nKVsxXS5sZW5ndGggOiAwO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogcGFyc2VGbG9hdChyYXcpLFxuICAgICAgaXNGbG9hdCxcbiAgICAgIGRlY2ltYWxQbGFjZXMsXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJlZ2luU2NydWIoZSwgc3Bhbikge1xuICAgIGNvbnN0IHJhdyA9IHR5cGVvZiBzcGFuLmRhdGFzZXQubnVtYmVyICE9PSAndW5kZWZpbmVkJ1xuICAgICAgPyBzcGFuLmRhdGFzZXQubnVtYmVyXG4gICAgICA6IHNwYW4uZGF0YXNldC52ZWxvY2l0eTtcbiAgICBjb25zdCBwYXJzZWQgPSBwYXJzZVNjcnViUmF3KHJhdyk7XG4gICAgaWYgKE51bWJlci5pc05hTihwYXJzZWQudmFsdWUpKSByZXR1cm47XG5cbiAgICBjb25zdCBzdGFydE9mZnNldCA9IGNoYXJPZmZzZXRPZkVsZW1lbnQocHJlLCBzcGFuKTtcbiAgICBpZiAoc3RhcnRPZmZzZXQgPCAwKSByZXR1cm47XG5cbiAgICBzY3J1YlN0YXRlID0ge1xuICAgICAgc3RhcnRYOiBlLmNsaWVudFgsXG4gICAgICBzdGFydFZhbHVlOiBwYXJzZWQudmFsdWUsXG4gICAgICBpc0Zsb2F0OiBwYXJzZWQuaXNGbG9hdCxcbiAgICAgIGRlY2ltYWxQbGFjZXM6IHBhcnNlZC5kZWNpbWFsUGxhY2VzLFxuICAgICAgYXR0cjogdHlwZW9mIHNwYW4uZGF0YXNldC52ZWxvY2l0eSAhPT0gJ3VuZGVmaW5lZCcgPyAndmVsb2NpdHknIDogJ251bWJlcicsXG4gICAgICBzdGFydE9mZnNldCxcbiAgICAgIGN1cnJlbnRMZW5ndGg6IHNwYW4udGV4dENvbnRlbnQubGVuZ3RoLFxuICAgICAgY3VycmVudFRleHQ6IHJhdyxcbiAgICB9O1xuICAgIHdyYXAuY2xhc3NMaXN0LmFkZCgnc2NydWItYWN0aXZlJyk7XG4gICAgaGlkZVRvb2x0aXAoKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBhcHBseVNjcnViKGUpIHtcbiAgICBpZiAoIXNjcnViU3RhdGUpIHJldHVybjtcbiAgICBjb25zdCBTVEVQX1BYID0gNDtcbiAgICBjb25zdCBkZWx0YVVuaXRzID0gTWF0aC5yb3VuZCgoZS5jbGllbnRYIC0gc2NydWJTdGF0ZS5zdGFydFgpIC8gU1RFUF9QWCk7XG4gICAgY29uc3QgYmFzZVN0ZXAgPSBzY3J1YlN0YXRlLmlzRmxvYXQgPyBNYXRoLnBvdygxMCwgLXNjcnViU3RhdGUuZGVjaW1hbFBsYWNlcykgOiAxO1xuICAgIGNvbnN0IG1vZGlmaWVyID0gZS5zaGlmdEtleSA/IDEwIDogZS5hbHRLZXkgPyAwLjEgOiAxO1xuXG4gICAgbGV0IG5leHRWYWx1ZSA9IHNjcnViU3RhdGUuc3RhcnRWYWx1ZSArIGRlbHRhVW5pdHMgKiBiYXNlU3RlcCAqIG1vZGlmaWVyO1xuICAgIGlmIChzY3J1YlN0YXRlLmF0dHIgPT09ICd2ZWxvY2l0eScpIHtcbiAgICAgIG5leHRWYWx1ZSA9IE1hdGgubWF4KDEsIE1hdGgubWluKDEyNywgTWF0aC5yb3VuZChuZXh0VmFsdWUpKSk7XG4gICAgfVxuXG4gICAgY29uc3QgbmV4dFRleHQgPSBzY3J1YlN0YXRlLmlzRmxvYXQgJiYgc2NydWJTdGF0ZS5hdHRyICE9PSAndmVsb2NpdHknXG4gICAgICA/IG5leHRWYWx1ZS50b0ZpeGVkKHNjcnViU3RhdGUuZGVjaW1hbFBsYWNlcylcbiAgICAgIDogU3RyaW5nKE1hdGgucm91bmQobmV4dFZhbHVlKSk7XG4gICAgaWYgKG5leHRUZXh0ID09PSBzY3J1YlN0YXRlLmN1cnJlbnRUZXh0KSByZXR1cm47XG5cbiAgICBjb25zdCBzdGFydCA9IHNjcnViU3RhdGUuc3RhcnRPZmZzZXQ7XG4gICAgY29uc3QgZW5kID0gc3RhcnQgKyBzY3J1YlN0YXRlLmN1cnJlbnRMZW5ndGg7XG4gICAgdGEudmFsdWUgPSB0YS52YWx1ZS5zbGljZSgwLCBzdGFydCkgKyBuZXh0VGV4dCArIHRhLnZhbHVlLnNsaWNlKGVuZCk7XG4gICAgc2NydWJTdGF0ZS5jdXJyZW50TGVuZ3RoID0gbmV4dFRleHQubGVuZ3RoO1xuICAgIHNjcnViU3RhdGUuY3VycmVudFRleHQgPSBuZXh0VGV4dDtcbiAgICB0YS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnaW5wdXQnLCB7IGJ1YmJsZXM6IHRydWUgfSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZW5kU2NydWIoKSB7XG4gICAgaWYgKCFzY3J1YlN0YXRlKSByZXR1cm47XG4gICAgc2NydWJTdGF0ZSA9IG51bGw7XG4gICAgd3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdzY3J1Yi1hY3RpdmUnKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBhcHBseVNjcnViKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZW5kU2NydWIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZmxhc2hMaW5lcyhzdGFydExpbmUsIGVuZExpbmUpIHtcbiAgICBjb25zdCBzdGFydCA9IE1hdGgubWF4KDAsIHN0YXJ0TGluZSk7XG4gICAgY29uc3QgZW5kID0gTWF0aC5tYXgoc3RhcnQsIGVuZExpbmUpO1xuICAgIGZvciAobGV0IGxpbmUgPSBzdGFydDsgbGluZSA8PSBlbmQ7IGxpbmUgKz0gMSkge1xuICAgICAgY29uc3QgbGluZUVsID0gcHJlLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWxpbmU9XCIke2xpbmV9XCJdYCk7XG4gICAgICBpZiAoIWxpbmVFbCkgY29udGludWU7XG4gICAgICBsaW5lRWwuY2xhc3NMaXN0LmFkZCgnYmxvY2stZmxhc2gnKTtcbiAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxpbmVFbC5jbGFzc0xpc3QucmVtb3ZlKCdibG9jay1mbGFzaCcpO1xuICAgICAgICBmbGFzaFRpbWVycy5kZWxldGUodGltZXIpO1xuICAgICAgfSwgODAwKTtcbiAgICAgIGZsYXNoVGltZXJzLmFkZCh0aW1lcik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UGxheWFibGVUb2tlblNwYW5zKGxpbmVFbCkge1xuICAgIHJldHVybiBbLi4ubGluZUVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW4nKV1cbiAgICAgIC5maWx0ZXIodG9rZW4gPT4gdG9rZW4uY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2stcGF0dGVybicpXG4gICAgICAgIHx8IHRva2VuLmNsYXNzTGlzdC5jb250YWlucygndG9rLW5vdGUnKVxuICAgICAgICB8fCB0b2tlbi5jbGFzc0xpc3QuY29udGFpbnMoJ3Rvay1jaG9yZCcpXG4gICAgICAgIHx8IHRva2VuLmNsYXNzTGlzdC5jb250YWlucygndG9rLXZhci1yZWYnKVxuICAgICAgICB8fCB0b2tlbi5jbGFzc0xpc3QuY29udGFpbnMoJ3Rvay1tb2RlJylcbiAgICAgICAgfHwgdG9rZW4uY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2stcHJvZ3Jlc3Npb24nKSk7XG4gIH1cblxuICBmdW5jdGlvbiBmbGFzaEFjdGl2ZVRva2VucyhfbGluZU51bWJlcnMsIF9iZWF0SW5kZXgpIHtcbiAgICAvLyBkaXNhYmxlZCBcdTIwMTQgaW50ZXJhY3RzIGJhZGx5IHdpdGggbmV3bGluZSBpbnNlcnRpb25cbiAgfVxuXG4gIHRhLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICBwcmUuc2Nyb2xsVG9wID0gdGEuc2Nyb2xsVG9wO1xuICAgIHByZS5zY3JvbGxMZWZ0ID0gdGEuc2Nyb2xsTGVmdDtcbiAgfSk7XG5cbiAgdGEuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgc3luYygpO1xuICAgIGhpZGVUb29sdGlwKCk7XG4gICAgaWYgKG9wdGlvbnMub25JbnB1dCkgb3B0aW9ucy5vbklucHV0KHRhLnZhbHVlKTtcbiAgfSk7XG5cbiAgdGEuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZSA9PiB7XG4gICAgaWYgKHNjcnViU3RhdGUpIHJldHVybjtcbiAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KGUuY2xpZW50WCwgZS5jbGllbnRZKTtcbiAgICBjb25zdCBzY3J1YlRhcmdldCA9IGdldFNjcnViVGFyZ2V0KGVsZW1lbnRzKTtcbiAgICB3cmFwLmNsYXNzTGlzdC50b2dnbGUoJ3NjcnViLWhvdmVyJywgQm9vbGVhbihzY3J1YlRhcmdldCkpO1xuICAgIGNvbnN0IGZvdW5kID0gdG9vbHRpcEhhbmRsZXJzXG4gICAgICAubWFwKGhhbmRsZXIgPT4ge1xuICAgICAgICBjb25zdCBoaXQgPSBlbGVtZW50cy5maW5kKGVsID0+IGVsLmRhdGFzZXQgJiYgZWwuZGF0YXNldFtoYW5kbGVyLmF0dHJdKTtcbiAgICAgICAgcmV0dXJuIGhpdCA/IHsgaGFuZGxlciwgdmFsdWU6IGhpdC5kYXRhc2V0W2hhbmRsZXIuYXR0cl0gfSA6IG51bGw7XG4gICAgICB9KVxuICAgICAgLmZpbmQoQm9vbGVhbik7XG4gICAgaWYgKCFmb3VuZCkge1xuICAgICAgaGlkZVRvb2x0aXAoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdGV4dCA9IGZvdW5kLmhhbmRsZXIucmVzb2x2ZShmb3VuZC52YWx1ZSk7XG4gICAgaWYgKCF0ZXh0KSB7XG4gICAgICBoaWRlVG9vbHRpcCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwb3MgPSBjbGFtcFRvb2x0aXAoZS5jbGllbnRYLCBlLmNsaWVudFkpO1xuICAgIHRpcFRpdGxlLnRleHRDb250ZW50ID0gZm91bmQuaGFuZGxlci50aXRsZShmb3VuZC52YWx1ZSk7XG4gICAgdGlwQm9keS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgaWYgKGZvdW5kLmhhbmRsZXIubm90ZXMpIHtcbiAgICAgIGNvbnN0IG5vdGVBcnIgPSBmb3VuZC5oYW5kbGVyLm5vdGVzKGZvdW5kLnZhbHVlKTtcbiAgICAgIGlmIChub3RlQXJyICYmIG5vdGVBcnIubGVuZ3RoKSB7XG4gICAgICAgIHRpcFN0YWZmLmlubmVySFRNTCA9IGJ1aWxkU3RhZmZTVkcobm90ZUFyciwgZm91bmQuaGFuZGxlci5zdGFmZk1vZGUpO1xuICAgICAgICB0aXBTdGFmZi5oaWRkZW4gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpcFN0YWZmLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB0aXBTdGFmZi5oaWRkZW4gPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aXBTdGFmZi5pbm5lckhUTUwgPSAnJztcbiAgICAgIHRpcFN0YWZmLmhpZGRlbiA9IHRydWU7XG4gICAgfVxuICAgIHRpcC5zdHlsZS5sZWZ0ID0gYCR7cG9zLmxlZnR9cHhgO1xuICAgIHRpcC5zdHlsZS50b3AgPSBgJHtwb3MudG9wfXB4YDtcbiAgICB0aXAuaGlkZGVuID0gZmFsc2U7XG4gIH0pO1xuXG4gIHRhLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4ge1xuICAgIGlmIChlLmJ1dHRvbiAhPT0gMCB8fCBzY3J1YlN0YXRlKSByZXR1cm47XG4gICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChlLmNsaWVudFgsIGUuY2xpZW50WSk7XG4gICAgY29uc3QgdGFyZ2V0ID0gZ2V0U2NydWJUYXJnZXQoZWxlbWVudHMpO1xuICAgIGlmICghdGFyZ2V0KSByZXR1cm47XG4gICAgYmVnaW5TY3J1YihlLCB0YXJnZXQpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGFwcGx5U2NydWIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBlbmRTY3J1Yik7XG4gIH0pO1xuXG4gIHRhLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgaGlkZVRvb2x0aXAoKTtcbiAgICBjbGVhclNjcnViQ3Vyc29yKCk7XG4gIH0pO1xuXG4gIHN5bmMoKTtcbiAgd3JhcC5hcHBlbmRDaGlsZChwcmUpO1xuICB3cmFwLmFwcGVuZENoaWxkKHRhKTtcbiAgd3JhcC5hcHBlbmRDaGlsZCh0aXApO1xuXG4gIHJldHVybiB7XG4gICAgZWw6IHdyYXAsXG4gICAgdGV4dGFyZWE6IHRhLFxuICAgIG9uOiAoZXZlbnQsIGZuKSA9PiB0YS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmbiksXG4gICAgZ2V0VmFsdWU6ICgpID0+IHRhLnZhbHVlLFxuICAgIGdldEN1cnNvclBvc2l0aW9uOiAoKSA9PiB0YS5zZWxlY3Rpb25TdGFydCxcbiAgICBmbGFzaExpbmVzLFxuICAgIGZsYXNoQWN0aXZlVG9rZW5zLFxuICAgIGNsZWFyQWN0aXZlVG9rZW5IaWdobGlnaHQsXG4gICAgc2V0VmFsdWU6IHZhbHVlID0+IHtcbiAgICAgIHRhLnZhbHVlID0gdmFsdWU7XG4gICAgICBzeW5jKCk7XG4gICAgICBoaWRlVG9vbHRpcCgpO1xuICAgICAgY2xlYXJBY3RpdmVUb2tlbkhpZ2hsaWdodCgpO1xuICAgIH0sXG4gICAgZm9jdXM6ICgpID0+IHRhLmZvY3VzKCksXG4gIH07XG59XG4iLCAiZnVuY3Rpb24gY2xhbXAodmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHZhbHVlKSk7XG59XG5cbmZ1bmN0aW9uIHNob3J0TmFtZShuYW1lKSB7XG4gIGNvbnN0IHBhcnRzID0gU3RyaW5nKG5hbWUgfHwgJycpLnNwbGl0KC9cXHMrLykuZmlsdGVyKEJvb2xlYW4pO1xuICBpZiAoIXBhcnRzLmxlbmd0aCkgcmV0dXJuICd0cmFjayc7XG4gIHJldHVybiBwYXJ0cy5zbGljZSgwLCAyKS5qb2luKCcgJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNaXhlcihwbGF5ZXIsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXNpZGUnKTtcbiAgcm9vdC5pZCA9ICdtaXhlci1wYW5lbCc7XG4gIHJvb3QuY2xhc3NOYW1lID0gJ2NvbGxhcHNlZCc7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9ICdNaXhlcic7XG5cbiAgY29uc3Qgc3RyaXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHN0cmlwcy5pZCA9ICdtaXhlci1zdHJpcHMnO1xuICBjb25zdCB0cmFuc3BvcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdHJhbnNwb3J0LmlkID0gJ21peGVyLXRyYW5zcG9ydCc7XG5cbiAgY29uc3QgZnggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZnguaWQgPSAnbWl4ZXItZngnO1xuXG4gIGNvbnN0IGluaXRpYWxUZW1wbyA9IG9wdGlvbnMudGVtcG8gfHwgMTQ2O1xuICBjb25zdCBpbml0aWFsQmFycyA9IG9wdGlvbnMuYmFycyB8fCA4O1xuICBjb25zdCBpbml0aWFsVHJhbnNwb3NlID0gb3B0aW9ucy50cmFuc3Bvc2UgfHwgMDtcblxuICBjb25zdCBicG1Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBicG1Sb3cuY2xhc3NOYW1lID0gJ3RyYW5zcG9ydC1yb3cnO1xuICBicG1Sb3cudGV4dENvbnRlbnQgPSAnQlBNJztcbiAgY29uc3QgYnBtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgYnBtLnR5cGUgPSAncmFuZ2UnO1xuICBicG0ubWluID0gJzYwJztcbiAgYnBtLm1heCA9ICcyMDAnO1xuICBicG0udmFsdWUgPSBTdHJpbmcoaW5pdGlhbFRlbXBvKTtcbiAgY29uc3QgYnBtVmFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBicG1WYWwuY2xhc3NOYW1lID0gJ3RyYW5zcG9ydC12YWwnO1xuICBicG1WYWwudGV4dENvbnRlbnQgPSBTdHJpbmcoaW5pdGlhbFRlbXBvKTtcbiAgYnBtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIGJwbVZhbC50ZXh0Q29udGVudCA9IGJwbS52YWx1ZTtcbiAgICBpZiAob3B0aW9ucy5vbkNoYW5nZSkge1xuICAgICAgb3B0aW9ucy5vbkNoYW5nZSh7IHRlbXBvOiBwYXJzZUludChicG0udmFsdWUsIDEwKSB9KTtcbiAgICB9XG4gIH0pO1xuICBicG1Sb3cuYXBwZW5kQ2hpbGQoYnBtKTtcbiAgYnBtUm93LmFwcGVuZENoaWxkKGJwbVZhbCk7XG5cbiAgY29uc3QgYmFyc1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGJhcnNSb3cuY2xhc3NOYW1lID0gJ3RyYW5zcG9ydC1yb3cnO1xuICBiYXJzUm93LnRleHRDb250ZW50ID0gJ0JBUlMnO1xuICBjb25zdCBiYXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIFs0LCA4LCAxNiwgMzJdLmZvckVhY2godmFsdWUgPT4ge1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbi52YWx1ZSA9IFN0cmluZyh2YWx1ZSk7XG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gU3RyaW5nKHZhbHVlKTtcbiAgICBpZiAodmFsdWUgPT09IGluaXRpYWxCYXJzKSBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIGJhcnMuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgfSk7XG4gIGJhcnMuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIGlmIChvcHRpb25zLm9uQ2hhbmdlKSB7XG4gICAgICBvcHRpb25zLm9uQ2hhbmdlKHsgYmFyczogcGFyc2VJbnQoYmFycy52YWx1ZSwgMTApIH0pO1xuICAgIH1cbiAgfSk7XG4gIGJhcnNSb3cuYXBwZW5kQ2hpbGQoYmFycyk7XG5cbiAgY29uc3Qga2V5Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAga2V5Um93LmNsYXNzTmFtZSA9ICd0cmFuc3BvcnQtcm93JztcbiAga2V5Um93LnRleHRDb250ZW50ID0gJ0tFWSc7XG4gIGNvbnN0IGtleSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGtleS50eXBlID0gJ3JhbmdlJztcbiAga2V5Lm1pbiA9ICctMTInO1xuICBrZXkubWF4ID0gJzEyJztcbiAga2V5LnZhbHVlID0gU3RyaW5nKGluaXRpYWxUcmFuc3Bvc2UpO1xuICBjb25zdCBrZXlWYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGtleVZhbC5jbGFzc05hbWUgPSAndHJhbnNwb3J0LXZhbCc7XG4gIGtleVZhbC50ZXh0Q29udGVudCA9IFN0cmluZyhpbml0aWFsVHJhbnNwb3NlID4gMCA/IGArJHtpbml0aWFsVHJhbnNwb3NlfWAgOiBpbml0aWFsVHJhbnNwb3NlKTtcbiAga2V5LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQoa2V5LnZhbHVlLCAxMCk7XG4gICAga2V5VmFsLnRleHRDb250ZW50ID0gdmFsdWUgPiAwID8gYCske3ZhbHVlfWAgOiBTdHJpbmcodmFsdWUpO1xuICAgIGlmIChvcHRpb25zLm9uQ2hhbmdlKSB7XG4gICAgICBvcHRpb25zLm9uQ2hhbmdlKHsgdHJhbnNwb3NlOiB2YWx1ZSB9KTtcbiAgICB9XG4gIH0pO1xuICBrZXlSb3cuYXBwZW5kQ2hpbGQoa2V5KTtcbiAga2V5Um93LmFwcGVuZENoaWxkKGtleVZhbCk7XG5cbiAgdHJhbnNwb3J0LmFwcGVuZENoaWxkKGJwbVJvdyk7XG4gIHRyYW5zcG9ydC5hcHBlbmRDaGlsZChiYXJzUm93KTtcbiAgdHJhbnNwb3J0LmFwcGVuZENoaWxkKGtleVJvdyk7XG5cbiAgY29uc3QgZGVsYXlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGRlbGF5TGFiZWwudGV4dENvbnRlbnQgPSAnRGVsYXkgVGltZSc7XG4gIGNvbnN0IGRlbGF5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIFtcbiAgICBbJzEvNCcsIDEgLyA0XSxcbiAgICBbJzMvOCcsIDMgLyA4XSxcbiAgICBbJzEvMicsIDEgLyAyXSxcbiAgICBbJzMvNCcsIDMgLyA0XSxcbiAgXS5mb3JFYWNoKChbbGFiZWwsIHZhbHVlXSkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGxhYmVsO1xuICAgIG9wdGlvbi52YWx1ZSA9IFN0cmluZyh2YWx1ZSk7XG4gICAgaWYgKHZhbHVlID09PSBwbGF5ZXIuZGVsYXlEaXZpc2lvbikgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICBkZWxheVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9KTtcbiAgZGVsYXlTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIHBsYXllci5zZXREZWxheVRpbWUocGFyc2VGbG9hdChkZWxheVNlbGVjdC52YWx1ZSkpO1xuICB9KTtcbiAgZGVsYXlMYWJlbC5hcHBlbmRDaGlsZChkZWxheVNlbGVjdCk7XG5cbiAgY29uc3QgZmVlZGJhY2tMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGZlZWRiYWNrTGFiZWwudGV4dENvbnRlbnQgPSAnRmVlZGJhY2snO1xuICBjb25zdCBmZWVkYmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGZlZWRiYWNrLnR5cGUgPSAncmFuZ2UnO1xuICBmZWVkYmFjay5taW4gPSAnMCc7XG4gIGZlZWRiYWNrLm1heCA9ICc3NSc7XG4gIGZlZWRiYWNrLnZhbHVlID0gJzM1JztcbiAgZmVlZGJhY2suYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgcGxheWVyLnNldERlbGF5RmVlZGJhY2socGFyc2VJbnQoZmVlZGJhY2sudmFsdWUsIDEwKSAvIDEwMCk7XG4gIH0pO1xuICBmZWVkYmFja0xhYmVsLmFwcGVuZENoaWxkKGZlZWRiYWNrKTtcblxuICBmeC5hcHBlbmRDaGlsZChkZWxheUxhYmVsKTtcbiAgZnguYXBwZW5kQ2hpbGQoZmVlZGJhY2tMYWJlbCk7XG5cbiAgcm9vdC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIHJvb3QuYXBwZW5kQ2hpbGQodHJhbnNwb3J0KTtcbiAgcm9vdC5hcHBlbmRDaGlsZChzdHJpcHMpO1xuICByb290LmFwcGVuZENoaWxkKGZ4KTtcblxuICBjb25zdCBzdHJpcE1hcCA9IG5ldyBNYXAoKTtcblxuICBmdW5jdGlvbiBjcmVhdGVTdHJpcChrZXksIGxhYmVsKSB7XG4gICAgY29uc3Qgc3RhdGUgPSBwbGF5ZXIuZ2V0VHJhY2tTdGF0ZShrZXkpO1xuICAgIGNvbnN0IHN0cmlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3RyaXAuY2xhc3NOYW1lID0gJ20tc3RyaXAnO1xuICAgIHN0cmlwLmRhdGFzZXQua2V5ID0ga2V5O1xuXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hbWUuY2xhc3NOYW1lID0gJ20tbmFtZSc7XG4gICAgbmFtZS50ZXh0Q29udGVudCA9IHNob3J0TmFtZShsYWJlbCk7XG4gICAgbmFtZS50aXRsZSA9IGxhYmVsO1xuXG4gICAgY29uc3QgdnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2dS5jbGFzc05hbWUgPSAnbS12dSc7XG5cbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByb3cuY2xhc3NOYW1lID0gJ20tcm93JztcblxuICAgIGNvbnN0IHNvbG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzb2xvLmNsYXNzTmFtZSA9ICdtLWJ0bic7XG4gICAgc29sby50ZXh0Q29udGVudCA9ICdTJztcbiAgICBjb25zdCBtdXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbXV0ZS5jbGFzc05hbWUgPSAnbS1idG4nO1xuICAgIG11dGUudGV4dENvbnRlbnQgPSAnTSc7XG5cbiAgICBjb25zdCB2b2x1bWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHZvbHVtZS50eXBlID0gJ3JhbmdlJztcbiAgICB2b2x1bWUuY2xhc3NOYW1lID0gJ20tc2xpZGVyJztcbiAgICB2b2x1bWUubWluID0gJzAnO1xuICAgIHZvbHVtZS5tYXggPSAnMTAwJztcbiAgICB2b2x1bWUudmFsdWUgPSBTdHJpbmcoTWF0aC5yb3VuZChzdGF0ZS52b2x1bWUgKiAxMDApKTtcblxuICAgIGNvbnN0IHJldmVyYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcmV2ZXJiLnR5cGUgPSAncmFuZ2UnO1xuICAgIHJldmVyYi5jbGFzc05hbWUgPSAnbS1zZW5kJztcbiAgICByZXZlcmIubWluID0gJzAnO1xuICAgIHJldmVyYi5tYXggPSAnMTAwJztcbiAgICByZXZlcmIudmFsdWUgPSBTdHJpbmcoTWF0aC5yb3VuZChzdGF0ZS5yZXZlcmJTZW5kICogMTAwKSk7XG5cbiAgICBjb25zdCBkZWxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGVsYXkudHlwZSA9ICdyYW5nZSc7XG4gICAgZGVsYXkuY2xhc3NOYW1lID0gJ20tc2VuZCc7XG4gICAgZGVsYXkubWluID0gJzAnO1xuICAgIGRlbGF5Lm1heCA9ICcxMDAnO1xuICAgIGRlbGF5LnZhbHVlID0gU3RyaW5nKE1hdGgucm91bmQoc3RhdGUuZGVsYXlTZW5kICogMTAwKSk7XG5cbiAgICBjb25zdCBzZW5kcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlbmRzLmNsYXNzTmFtZSA9ICdtLXNlbmRzJztcbiAgICBjb25zdCByV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcldyYXAudGV4dENvbnRlbnQgPSAnUmV2JztcbiAgICByV3JhcC5hcHBlbmRDaGlsZChyZXZlcmIpO1xuICAgIGNvbnN0IGRXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkV3JhcC50ZXh0Q29udGVudCA9ICdEbHknO1xuICAgIGRXcmFwLmFwcGVuZENoaWxkKGRlbGF5KTtcbiAgICBzZW5kcy5hcHBlbmRDaGlsZChyV3JhcCk7XG4gICAgc2VuZHMuYXBwZW5kQ2hpbGQoZFdyYXApO1xuXG4gICAgZnVuY3Rpb24gc3luY0J1dHRvbnMoKSB7XG4gICAgICBjb25zdCBjdXIgPSBwbGF5ZXIuZ2V0VHJhY2tTdGF0ZShrZXkpO1xuICAgICAgc29sby5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnLCBjdXIuc29sbyk7XG4gICAgICBtdXRlLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIGN1ci5tdXRlZCk7XG4gICAgfVxuXG4gICAgc29sby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGN1ciA9IHBsYXllci5nZXRUcmFja1N0YXRlKGtleSk7XG4gICAgICBwbGF5ZXIuc2V0U29sbyhrZXksICFjdXIuc29sbyk7XG4gICAgICBzeW5jQnV0dG9ucygpO1xuICAgIH0pO1xuICAgIG11dGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBjdXIgPSBwbGF5ZXIuZ2V0VHJhY2tTdGF0ZShrZXkpO1xuICAgICAgcGxheWVyLnNldE11dGUoa2V5LCAhY3VyLm11dGVkKTtcbiAgICAgIHN5bmNCdXR0b25zKCk7XG4gICAgfSk7XG4gICAgdm9sdW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgcGxheWVyLnNldFZvbHVtZShrZXksIGNsYW1wKHBhcnNlSW50KHZvbHVtZS52YWx1ZSwgMTApIC8gMTAwKSk7XG4gICAgfSk7XG4gICAgcmV2ZXJiLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgcGxheWVyLnNldFJldmVyYlNlbmQoa2V5LCBjbGFtcChwYXJzZUludChyZXZlcmIudmFsdWUsIDEwKSAvIDEwMCkpO1xuICAgIH0pO1xuICAgIGRlbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgcGxheWVyLnNldERlbGF5U2VuZChrZXksIGNsYW1wKHBhcnNlSW50KGRlbGF5LnZhbHVlLCAxMCkgLyAxMDApKTtcbiAgICB9KTtcblxuICAgIHJvdy5hcHBlbmRDaGlsZChzb2xvKTtcbiAgICByb3cuYXBwZW5kQ2hpbGQobXV0ZSk7XG4gICAgcm93LmFwcGVuZENoaWxkKHZvbHVtZSk7XG5cbiAgICBzdHJpcC5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICBzdHJpcC5hcHBlbmRDaGlsZCh2dSk7XG4gICAgc3RyaXAuYXBwZW5kQ2hpbGQocm93KTtcbiAgICBzdHJpcC5hcHBlbmRDaGlsZChzZW5kcyk7XG4gICAgc3RyaXBzLmFwcGVuZENoaWxkKHN0cmlwKTtcblxuICAgIHN5bmNCdXR0b25zKCk7XG4gICAgcmV0dXJuIHsgZWw6IHN0cmlwLCB2dSwgbmFtZSwgc3luY0J1dHRvbnMgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZShkYXRhKSB7XG4gICAgY29uc3QgZW50cmllcyA9IEFycmF5LmlzQXJyYXkoZGF0YSlcbiAgICAgID8gZGF0YS5tYXAodHJhY2sgPT4gKHsga2V5OiBgJHt0cmFja1swXX0vJHt0cmFja1sxXX1gLCBuYW1lOiB0cmFja1sxXSB9KSlcbiAgICAgIDogW107XG4gICAgY29uc3QgbmV4dEtleXMgPSBuZXcgU2V0KGVudHJpZXMubWFwKGl0ZW0gPT4gaXRlbS5rZXkpKTtcblxuICAgIHN0cmlwTWFwLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIGlmICghbmV4dEtleXMuaGFzKGtleSkpIHtcbiAgICAgICAgdmFsdWUuZWwucmVtb3ZlKCk7XG4gICAgICAgIHN0cmlwTWFwLmRlbGV0ZShrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZW50cmllcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYgKCFzdHJpcE1hcC5oYXMoaXRlbS5rZXkpKSB7XG4gICAgICAgIHN0cmlwTWFwLnNldChpdGVtLmtleSwgY3JlYXRlU3RyaXAoaXRlbS5rZXksIGl0ZW0ubmFtZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc3RyaXAgPSBzdHJpcE1hcC5nZXQoaXRlbS5rZXkpO1xuICAgICAgICBzdHJpcC5uYW1lLnRleHRDb250ZW50ID0gc2hvcnROYW1lKGl0ZW0ubmFtZSk7XG4gICAgICAgIHN0cmlwLm5hbWUudGl0bGUgPSBpdGVtLm5hbWU7XG4gICAgICAgIHN0cmlwLnN5bmNCdXR0b25zKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBmbGFzaFZVKGtleSkge1xuICAgIGNvbnN0IHN0cmlwID0gc3RyaXBNYXAuZ2V0KGtleSk7XG4gICAgaWYgKCFzdHJpcCkgcmV0dXJuO1xuICAgIHN0cmlwLnZ1LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc3RyaXAudnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyksIDgwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZShmb3JjZU9wZW4pIHtcbiAgICBjb25zdCBvcGVuID0gdHlwZW9mIGZvcmNlT3BlbiA9PT0gJ2Jvb2xlYW4nID8gZm9yY2VPcGVuIDogcm9vdC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbGxhcHNlZCcpO1xuICAgIHJvb3QuY2xhc3NMaXN0LnRvZ2dsZSgnY29sbGFwc2VkJywgIW9wZW4pO1xuICAgIHJldHVybiBvcGVuO1xuICB9XG5cbiAgZnVuY3Rpb24gc3luY1RyYW5zcG9ydChuZXh0ID0ge30pIHtcbiAgICBpZiAodHlwZW9mIG5leHQudGVtcG8gPT09ICdudW1iZXInKSB7XG4gICAgICBicG0udmFsdWUgPSBTdHJpbmcobmV4dC50ZW1wbyk7XG4gICAgICBicG1WYWwudGV4dENvbnRlbnQgPSBTdHJpbmcobmV4dC50ZW1wbyk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbmV4dC5iYXJzID09PSAnbnVtYmVyJykge1xuICAgICAgYmFycy52YWx1ZSA9IFN0cmluZyhuZXh0LmJhcnMpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG5leHQudHJhbnNwb3NlID09PSAnbnVtYmVyJykge1xuICAgICAga2V5LnZhbHVlID0gU3RyaW5nKG5leHQudHJhbnNwb3NlKTtcbiAgICAgIGtleVZhbC50ZXh0Q29udGVudCA9IG5leHQudHJhbnNwb3NlID4gMCA/IGArJHtuZXh0LnRyYW5zcG9zZX1gIDogU3RyaW5nKG5leHQudHJhbnNwb3NlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBlbDogcm9vdCwgdXBkYXRlLCBmbGFzaFZVLCB0b2dnbGUsIHN5bmNUcmFuc3BvcnQgfTtcbn1cbiIsICJpbXBvcnQgeyBzY2FsZSB9IGZyb20gJ2hhcm1vbmljcyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vY29tcG9uZW50cy9wbGF5ZXIuanMnO1xuaW1wb3J0IHsgcGFyc2UsIG1lcmdlIH0gZnJvbSAnLi9saWInO1xuaW1wb3J0IHsgcmVkdWNlIH0gZnJvbSAnLi9saWIvcGFyc2VyLmpzJztcbmltcG9ydCB7IGJsb2NrQXRDdXJzb3IgfSBmcm9tICcuL2xpYi9ibG9ja3MuanMnO1xuaW1wb3J0IHsgY3JlYXRlRWRpdG9yIH0gZnJvbSAnLi9jb21wb25lbnRzL2VkaXRvci5qcyc7XG5pbXBvcnQgeyBjcmVhdGVNaXhlciB9IGZyb20gJy4vY29tcG9uZW50cy9taXhlci5qcyc7XG5cbmxldCB0ZW1wbyA9IDE0NjtcbmxldCBiYXJzID0gODtcbmxldCB0cmFuc3Bvc2UgPSAwO1xubGV0IHBsYXlpbmcgPSBmYWxzZTtcbmxldCBkZWJvdW5jZVRpbWVyID0gbnVsbDtcbmxldCBzdGF0dXNSZXNldFRpbWVyID0gbnVsbDtcbmxldCBlZGl0b3JBcGkgPSBudWxsO1xubGV0IG1peGVyQXBpID0gbnVsbDtcbmxldCBsYXN0Q29udGV4dCA9IG51bGw7XG5sZXQgdHJhY2tMaW5lTWFwID0gbmV3IE1hcCgpO1xuXG5jb25zdCBwID0gd2luZG93LnAgfHwgbmV3IFBsYXllcigpO1xud2luZG93LnAgPSBwO1xuXG5jb25zdCBTVE9SQUdFX0tFWSA9ICdzY29vcHM6ZHJhZnQnO1xuXG5jb25zdCBCSUxMWV9KRUFOID0gYFxuICAlRiBhM3xjIzR8ZiM0XG4gICVHIGIzfGQjNHxnIzRcbiAgJUEgYyM0fGU0fGE0XG4gICVFIGIzfGQ0fGYjNFxuICAlQyBkM3xmIzR8YTQgOyBob3cgdG8gc3VtIG5vdGVzIHRvIGNob3Jkcz9cbiAgJUIgYyM0fGY0fGcjM3xiNFxuXG4gICMgc3ludGhcbiAgICBASU5UUk9cbiAgICAgICM1MTggICAgICAtLS0tIC0tLS0gLS0tLSAtLS0tIC0tLS0gLS0tLSAtLS0tIC0tLS1cbiAgICBATiA8IElOVFJPXG4gICAgQEFcbiAgICAgICM1MTggNzUgICB4LS0tIC0teC0gLS0tLSAtLS0tIHgtLS0gLS14LSAtLS0tIC0tLS0gJUYgJUcgJUEgJUdcbiAgICBAQiA8IEFcbiAgICAgICM1MTggICAgICAlRSAlICUgJVxuICAgIEBDIDwgQVxuICAgICAgIzUxOCAgICAgICVDICUgJUYgJVxuICAgIEBEIDwgQVxuICAgICAgIzUxOCAgICAgICVDICUgJUIgJVxuXG4gICMjIGJhc3NcbiAgICAlYyBmIzIgYyMyIGUyIGYjMiBlMiBjIzIgYjEgYyMyXG4gICAgJWQgYjIgYTIgYjIgZDMgZDMgYjIgYTIgOyBob3cgdG8gdHJhbnNwb3NlP1xuICAgIEBJTlRST1xuICAgICAgIzM5MyAgICAgIC0tLS0gLS0tLSAtLS0tIC0tLS0gLS0tLSAtLS0tIC0tLS0gLS0tLVxuICAgIEBBXG4gICAgICAjMzkzICAxMTIgeC14LSB4LXgtIHgteC0geC14LSB4LXgtIHgteC0geC14LSB4LXgtICVjICVcbiAgICBATiA8IEFcbiAgICBAQlxuICAgICAgIzM5MyAgICAgIHgteC0geC14LSAtLXgtIHgteC0geC14LSB4LXgtIC0teC0geC14LSAlZCAlXG4gICAgQEMgPCBJTlRST1xuICAgIEBEIDwgSU5UUk9cblxuICAjIyBkcnVtc1xuICAgIEBJTlRST1xuICAgICAgIzIxMjMgICAgIC0tLS0gLS0tLSAtLS0tIC0tLS0gLS0tLSAtLS0tIC0tLS0gLS0tLVxuICAgICAgIzIwODEgNTAgIHgteC0geC14LSB4LXgtIHgteC0geC14LSB4LXgtIHgteC0geC14LVxuICAgICAgIzIwMjggICAgIC0tLS0geC0tLSAtLS0tIHgtLS0gLS0tLSB4LS0tIC0tLS0geC0tLVxuICAgICAgIzIwMDEgICAgIHgtLS0gLS0tLSB4LS0tIC0tLS0geC0tLSAtLS0tIHgtLS0gLS0tLVxuICAgIEBBIDwgSU5UUk9cbiAgICAgICMyMTIzIDkwICB4LS0tIHgtLS0geC0tLSB4LS0tIHgtLS0geC0tLSB4LS0tIHgtLS1cbiAgICAgICMyMTIzIDcwICAtLXgtIC0teC0gLS14LSAtLXgtIC0teC0gLS14LSAtLXgtIC0teC1cbiAgICBATiA8IEFcbiAgICBAQiA8IEFcbiAgICBAQyA8IEFcbiAgICBARCA8IEFcblxuICA+IElOVFJPIE4gKjIgQSAlXG4gID4gQSAlIEIgQSBCIEFcbiAgPiBBICUgQiBBIEMgKjMgRFxuICA+IEEgJSBCIEEgQiBBXG4gID4gQSAlIEIgQSBCIEFcbiAgPiBBICUgQiBBIEMgKjMgRFxuICA+IEEgJSBCIEEgQiBBXG5gO1xuXG5jb25zdCBURVRSSVMgPSBgXG4lYSBFNCBCMyBDNCBENCBDNCBCMyBBM1xuJWIgQTMgQzQgRTQgRDQgQzQgQjNcbiVjIEIzIEM0IEQ0IEU0IEM0IEEzIEEzXG5cbiVkIEQ0IEY0IEE0IEc0IEY0IEU0XG4lZSBFNCBDNCBFNCBENCBDNCBCM1xuXG4lZiBFNCBDNCBENCBCMyBDNCBBMyBBYjMgQjNcbiVnIEU0IEM0IEQ0IEIzIEM0IEU0IEEzIEFiM1xuXG4jIHBpYW5vXG4gIEBBXG4gICAgIzMgeC14eCB4LXh4IHgteHggeC14eCB4LXh4IHgteC0geC14LSB4LS0tICVhICViICVjXG4gIEBCXG4gICAgIzMgLXgteCB4LXh4IHgteHggeC14eCB4LXh4IHgteC0geC14LSB4LS0tICVkICVlICVjXG4gIEBDXG4gICAgIzMgeC0tLSB4LS0tIHgtLS0geC0tLSB4LS0tIHgtLS0geC0tLSB4LS0tICVmXG4gIEBEIDwgQ1xuICAgICMzICVnXG5cbiV4IEUyIEUyIEEyIEEyIEFiMiBFMiBBMlxuJXkgRDIgRDIgQzIgQzIgRTIgRTIgQTJcbiV6IEEyIEEyIEFiMiBBYjIgQTIgQTIgQWIzXG4lel8gQTIgQTIgQWIyIEFiMiBBMiBBMiBBNCBBYjRcblxuIyBiYXNzXG4gIEBBXG4gICAgIzIgeC0tLSB4LS0tIHgtLS0geC0tLSB4LS0tIHgtLS0geC0tLSAtLS0tICV4XG4gIEBCIDwgQVxuICAgICMyICV5XG4gIEBDIDwgQVxuICAgICMyICV6XG4gIEBEXG4gICAgIzIgeC0tLSB4LS0tIHgtLS0geC0tLSB4LS0tIHgteC0geC0tLSAtLS0tICV6X1xuXG4+IEEgQiBBIEIgQyBEXG5gLnRyaW0oKTtcblxuY29uc3QgUExBWUdST1VORCA9IGBcbiVhIEM0IHBocnlnaWFuLi4gKysgSSBJIElJSSBJVlxuXG4jIHNjYWxlc1xuICBAQVxuICAgICMzIDEwMCAteC14IC14LXggLXgteCAteC14ICVhICVhXG5cbiMjIGRydW1zXG4gIEBBXG4gICAgIzAgMTIwIFt4eF0tW3h4XS0gW3h4XS1beHhdLSBkIzFcbiAgICAjMCAxMTAgLXgteCAteC14IGQyXG4gICAgIzAgMTAwIFt4eF1beHhdW3h4XVt4eF0gW3h4XVt4eF1beHhdW3h4XSBmIzJcblxuPiBBICo0XG5gLnRyaW0oKTtcblxuY29uc3QgTE9DS1MgPSBgXG4lQ20gYzR8ZWI0fGc0ICVcbiVGbSBjNHxmNHxnIzQgJVxuXG4jIGRydW1zXG4gIEBBXG4gICAgIzAgMTI3IHh4eHh4eHh4eHh4W3h4XXh4eHggW3h4XXh4eHh4eHh4eHh4eHh4eCBmIzJcbiAgICAjMCAxMjcgLS14LS0teC0tLXgteC14W3h4XSAtLXgtLS14LS0teC0tWy14XXgtIGMjMlxuICAgICMwIDkwICAtLS0tLS0tLS0tLS0tLS0teF9fXy0tLS0tLS0tLS0tLSBhM1xuICAgICMwIDEyMCAtLVt4eF0tLS1beHhdLS0tW3h4XS0tLVt4eF0tIGQjMVxuXG4jIyBza2Fua2luZ1xuICBAQVxuICAgICMxIDEwMCAteC14LXgteC14LXgteC14ICVDbSAlRm1cblxuPiBBICo0XG5gLnRyaW0oKTtcblxuY29uc3QgUFJFU0VUUyA9IHtcbiAgdGV0cmlzOiBURVRSSVMsXG4gIGJpbGx5X2plYW46IEJJTExZX0pFQU4sXG4gIHBsYXlncm91bmQ6IFBMQVlHUk9VTkQsXG4gIGxvY2tzOiBMT0NLUyxcbn07XG5cbmNvbnN0IFBSRVNFVF9MQUJFTFMgPSB7XG4gIHRldHJpczogJ1RldHJpcycsXG4gIGJpbGx5X2plYW46ICdCaWxseSBKZWFuJyxcbiAgcGxheWdyb3VuZDogJ1BsYXlncm91bmQnLFxuICBsb2NrczogJ0xvY2tzJyxcbn07XG5cbmNvbnN0IFNDQUxFX0lORk8gPSB7XG4gIG1ham9yOiAnVyBXIEggVyBXIFcgSCAgLSAgZG8gcmUgbWkgZmEgc29sIGxhIHRpJyxcbiAgbWlub3I6ICdXIEggVyBXIEggVyBXICAtICBkbyByZSBtaWIgZmEgc29sIGxhYiBzaWInLFxuICBkb3JpYW46ICdXIEggVyBXIFcgSCBXICAtICBtaW5vciB3aXRoIHJhaXNlZCA2dGgnLFxuICBwaHJ5Z2lhbjogJ0ggVyBXIFcgSCBXIFcgIC0gIG1pbm9yIHdpdGggbG93ZXJlZCAybmQnLFxuICBseWRpYW46ICdXIFcgVyBIIFcgVyBIICAtICBtYWpvciB3aXRoIHJhaXNlZCA0dGgnLFxuICBtaXhvbHlkaWFuOiAnVyBXIEggVyBXIEggVyAgLSAgbWFqb3Igd2l0aCBsb3dlcmVkIDd0aCcsXG4gIGxvY3JpYW46ICdIIFcgVyBIIFcgVyBXICAtICBkaW1pbmlzaGVkIGZsYXZvcicsXG59O1xuXG5mdW5jdGlvbiBidWlsZChtaWRpKSB7XG4gIGNvbnN0IG1peCA9IFtdO1xuXG4gIGZ1bmN0aW9uIGdldChudGgsIG5hbWUpIHtcbiAgICBjb25zdCBrZXkgPSBudGggKyBuYW1lO1xuXG4gICAgaWYgKCFnZXRba2V5XSkge1xuICAgICAgY29uc3QgdHJhY2sgPSBbbnRoLCBuYW1lLCBbXV07XG4gICAgICBtaXgucHVzaCh0cmFjayk7XG4gICAgICBnZXRba2V5XSA9IHsgdHJhY2sgfTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFtrZXldO1xuICB9XG5cbiAgbWlkaS5mb3JFYWNoKHNlY3Rpb24gPT4ge1xuICAgIHNlY3Rpb24uZm9yRWFjaChwYXJ0cyA9PiB7XG4gICAgICBwYXJ0cy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICBjb25zdCB7IHRyYWNrIH0gPSBnZXQoZVswXSwgZVsxXSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZVsyXS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIHRyYWNrWzJdLnB1c2goZVsyXVtpXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIG1peDtcbn1cblxuZnVuY3Rpb24gYnVpbGRUcmFja0xpbmVNYXAoaW5wdXQpIHtcbiAgY29uc3QgbWFwID0gbmV3IE1hcCgpO1xuICBsZXQgY3VycmVudFRyYWNrID0gbnVsbDtcbiAgU3RyaW5nKGlucHV0IHx8ICcnKS5zcGxpdCgvXFxyP1xcbi8pLmZvckVhY2goKHJhd0xpbmUsIGxpbmVOdW1iZXIpID0+IHtcbiAgICBjb25zdCBsaW5lID0gcmF3TGluZS5yZXBsYWNlKC87Lis/JC8sICcnKS50cmltKCk7XG4gICAgaWYgKCFsaW5lKSByZXR1cm47XG5cbiAgICBpZiAoL14jezEsMn1cXHMrLy50ZXN0KGxpbmUpICYmICEvXiNcXGQrLy50ZXN0KGxpbmUpKSB7XG4gICAgICBjdXJyZW50VHJhY2sgPSBsaW5lLnJlcGxhY2UoL14jezEsMn1cXHMrLywgJycpLnRyaW0oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWN1cnJlbnRUcmFjaykgcmV0dXJuO1xuICAgIGNvbnN0IG1hdGNoID0gbGluZS5tYXRjaCgvXiMoXFxkKylcXGIvKTtcbiAgICBpZiAoIW1hdGNoKSByZXR1cm47XG4gICAgY29uc3Qga2V5ID0gYCR7cGFyc2VJbnQobWF0Y2hbMV0sIDEwKX0vJHtjdXJyZW50VHJhY2t9YDtcbiAgICBjb25zdCBwcmV2ID0gbWFwLmdldChrZXkpIHx8IFtdO1xuICAgIGlmICghcHJldi5pbmNsdWRlcyhsaW5lTnVtYmVyKSkgcHJldi5wdXNoKGxpbmVOdW1iZXIpO1xuICAgIG1hcC5zZXQoa2V5LCBwcmV2KTtcbiAgfSk7XG4gIHJldHVybiBtYXA7XG59XG5cbmZ1bmN0aW9uIGdldERhdGEoaW5wdXQpIHtcbiAgdHJhY2tMaW5lTWFwID0gYnVpbGRUcmFja0xpbmVNYXAoaW5wdXQpO1xuICB0cnkge1xuICAgIGxhc3RDb250ZXh0ID0gcGFyc2UoaW5wdXQpO1xuICAgIHJldHVybiBidWlsZChtZXJnZShsYXN0Q29udGV4dCkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgbGFzdENvbnRleHQgPSBudWxsO1xuICAgIGNvbnNvbGUuZXJyb3IoJ1BhcnNlIGVycm9yOicsIGUpO1xuICAgIHNob3dFcnJvcihlLm1lc3NhZ2UgfHwgJ1BhcnNlIGVycm9yJyk7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGV2YWxCbG9jaygpIHtcbiAgaWYgKCFlZGl0b3JBcGkpIHJldHVybjtcbiAgY29uc3Qgc291cmNlID0gZWRpdG9yQXBpLmdldFZhbHVlKCk7XG4gIGNvbnN0IGN1cnNvclBvcyA9IGVkaXRvckFwaS5nZXRDdXJzb3JQb3NpdGlvbigpO1xuICBjb25zdCBibG9jayA9IGJsb2NrQXRDdXJzb3Ioc291cmNlLCBjdXJzb3JQb3MpO1xuICBjb25zdCBkYXRhID0gZ2V0RGF0YShzb3VyY2UpO1xuICBpZiAoIWRhdGEubGVuZ3RoKSByZXR1cm47XG5cbiAgcC51cGRhdGVUcmFja3MoZGF0YSk7XG4gIHN5bmNNaXhlcihkYXRhKTtcbiAgZWRpdG9yQXBpLmZsYXNoTGluZXMoYmxvY2suc3RhcnRMaW5lLCBibG9jay5lbmRMaW5lKTtcbiAgc2hvd1N0YXR1cyhgQmxvY2sgdXBkYXRlZDogJHtibG9jay5uYW1lfWAsIHBsYXlpbmcgPyAncGxheWluZycgOiAncmVhZHknKTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVZhclRvb2x0aXAobmFtZSkge1xuICBpZiAoIWxhc3RDb250ZXh0IHx8ICFsYXN0Q29udGV4dC5kYXRhIHx8ICFsYXN0Q29udGV4dC5kYXRhW25hbWVdKSByZXR1cm4gbnVsbDtcbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gcmVkdWNlKGxhc3RDb250ZXh0LmRhdGFbbmFtZV0sIGxhc3RDb250ZXh0LmRhdGEpO1xuICAgIGNvbnN0IG91dCA9IEFycmF5LmlzQXJyYXkoZGF0YSkgPyBkYXRhLmZsYXQoSW5maW5pdHkpIDogW2RhdGFdO1xuICAgIGNvbnN0IHNob3duID0gb3V0LnNsaWNlKDAsIDE2KS5tYXAoaXRlbSA9PiAoXG4gICAgICBBcnJheS5pc0FycmF5KGl0ZW0pID8gaXRlbS5qb2luKCd8JykgOiBTdHJpbmcoaXRlbSlcbiAgICApKTtcbiAgICByZXR1cm4gc2hvd24uam9pbignICAnKSArIChvdXQubGVuZ3RoID4gc2hvd24ubGVuZ3RoID8gJyBcdTIwMjYnIDogJycpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUluc3RydW1lbnRUb29sdGlwKHZhbHVlKSB7XG4gIGNvbnN0IG4gPSBwYXJzZUludCh2YWx1ZSwgMTApO1xuICBpZiAoTnVtYmVyLmlzTmFOKG4pKSByZXR1cm4gbnVsbDtcbiAgdHJ5IHtcbiAgICBjb25zdCBpbmZvID0gbiA+PSAyMDAwXG4gICAgICA/IHAucGxheWVyLmxvYWRlci5kcnVtSW5mbyhuIC0gMjAwMClcbiAgICAgIDogcC5wbGF5ZXIubG9hZGVyLmluc3RydW1lbnRJbmZvKG4pO1xuICAgIHJldHVybiBpbmZvICYmIGluZm8udGl0bGUgPyBpbmZvLnRpdGxlIDogbnVsbDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVNb2RlVG9vbHRpcChuYW1lKSB7XG4gIGlmICghbmFtZSkgcmV0dXJuIG51bGw7XG4gIHJldHVybiBTQ0FMRV9JTkZPW25hbWUudG9Mb3dlckNhc2UoKV0gfHwgbnVsbDtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplTm90ZShzKSB7XG4gIHJldHVybiBzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcy5zbGljZSgxKTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZU5vdGVUb29sdGlwKG5vdGVTdHIpIHtcbiAgY29uc3QgU0VNSVRPTkVTID0geyBjOiAwLCBkOiAyLCBlOiA0LCBmOiA1LCBnOiA3LCBhOiA5LCBiOiAxMSB9O1xuICBjb25zdCBtID0gbm90ZVN0ci5tYXRjaCgvXihbYS1nQS1HXSkoWyNiXT8pKFxcZCspJC8pO1xuICBpZiAoIW0pIHJldHVybiBudWxsO1xuICBjb25zdCBiYXNlID0gU0VNSVRPTkVTW21bMV0udG9Mb3dlckNhc2UoKV07XG4gIGNvbnN0IGFsdCA9IG1bMl0gPT09ICcjJyA/IDEgOiBtWzJdID09PSAnYicgPyAtMSA6IDA7XG4gIGNvbnN0IG9jdCA9IHBhcnNlSW50KG1bM10sIDEwKTtcbiAgY29uc3QgbWlkaSA9IChvY3QgKyAxKSAqIDEyICsgYmFzZSArIGFsdDtcbiAgY29uc3QgZnJlcSA9ICg0NDAgKiBNYXRoLnBvdygyLCAobWlkaSAtIDY5KSAvIDEyKSkudG9GaXhlZCgxKTtcbiAgY29uc3QgaXNNaWRkbGVDID0gbWlkaSA9PT0gNjA7XG4gIHJldHVybiBgTUlESSAke21pZGl9IFx1MDBCNyAke2ZyZXF9IEh6JHtpc01pZGRsZUMgPyAnIFx1MDBCNyBtaWRkbGUgQycgOiAnJ31gO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlQ2hvcmRUb29sdGlwKGNob3JkU3RyKSB7XG4gIHJldHVybiBjaG9yZFN0ci5zcGxpdCgnfCcpLm1hcChub3JtYWxpemVOb3RlKS5qb2luKCcgICcpO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlTW9kZU5vdGVzKG1vZGVOYW1lKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHNjYWxlKGBDNCAke21vZGVOYW1lfWApO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlVmVsb2NpdHlUb29sdGlwKHYpIHtcbiAgY29uc3QgbiA9IHBhcnNlSW50KHYsIDEwKTtcbiAgaWYgKE51bWJlci5pc05hTihuKSB8fCBuIDwgMCB8fCBuID4gMTI3KSByZXR1cm4gbnVsbDtcbiAgY29uc3QgcGN0ID0gTWF0aC5yb3VuZCgobiAvIDEyNykgKiAxMDApO1xuICBjb25zdCBkYiA9IG4gPiAwID8gKDIwICogTWF0aC5sb2cxMChuIC8gMTI3KSkudG9GaXhlZCgxKSA6ICdcdTIyMTJcdTIyMUUnO1xuICBjb25zdCBkeW4gPSBuID09PSAwID8gJ3NpbGVudCAocHBwKSdcbiAgICA6IG4gPD0gMjUgPyAndmVyeSBzb2Z0IChwcCknXG4gICAgOiBuIDw9IDUwID8gJ3NvZnQgKG1wKSdcbiAgICA6IG4gPD0gNzUgPyAnbWVkaXVtIChtZiknXG4gICAgOiBuIDw9IDEwMCA/ICdsb3VkIChmKSdcbiAgICA6IG4gPD0gMTE1ID8gJ3ZlcnkgbG91ZCAoZmYpJ1xuICAgIDogJ21heGltdW0gKGZmZiknO1xuICByZXR1cm4gYCR7cGN0fSUgb2YgbWF4IFx1MDBCNyAke2RifSBkQiBcdTAwQjcgJHtkeW59YDtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVNlY3Rpb25Ub29sdGlwKG5hbWUpIHtcbiAgaWYgKCFlZGl0b3JBcGkpIHJldHVybiBudWxsO1xuICBjb25zdCBsaW5lcyA9IGVkaXRvckFwaS5nZXRWYWx1ZSgpLnNwbGl0KCdcXG4nKTtcbiAgY29uc3Qgc2VjdGlvbkhlYWRlciA9IGBAJHtuYW1lfWA7XG4gIGNvbnN0IHN0YXJ0ID0gbGluZXMuZmluZEluZGV4KGxpbmUgPT4gbGluZS50cmltKCkgPT09IHNlY3Rpb25IZWFkZXIpO1xuICBpZiAoc3RhcnQgPCAwKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCBwcmV2aWV3ID0gW107XG4gIGZvciAobGV0IGkgPSBzdGFydCArIDE7IGkgPCBsaW5lcy5sZW5ndGggJiYgcHJldmlldy5sZW5ndGggPCA0OyBpICs9IDEpIHtcbiAgICBjb25zdCBsaW5lID0gbGluZXNbaV07XG4gICAgaWYgKC9eXFxzKkAvLnRlc3QobGluZSkpIGJyZWFrO1xuICAgIGlmIChsaW5lLnRyaW0oKSkgcHJldmlldy5wdXNoKGxpbmUudHJpbSgpKTtcbiAgfVxuICByZXR1cm4gcHJldmlldy5sZW5ndGggPyBwcmV2aWV3LmpvaW4oJyB8ICcpIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gc2hvd0Vycm9yKG1zZykge1xuICBjbGVhclRpbWVvdXQoc3RhdHVzUmVzZXRUaW1lcik7XG4gIGNvbnN0IHN0YXR1c0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXR1cy1tZXNzYWdlJyk7XG4gIGNvbnN0IHN0YXR1c2JhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0dXNiYXInKTtcbiAgaWYgKHN0YXR1c0VsKSB7XG4gICAgc3RhdHVzRWwudGV4dENvbnRlbnQgPSBgRXJyb3I6ICR7bXNnfWA7XG4gIH1cbiAgaWYgKHN0YXR1c2Jhcikge1xuICAgIHN0YXR1c2Jhci5kYXRhc2V0LnN0YXRlID0gJ2Vycm9yJztcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93U3RhdHVzKG1zZywgc3RhdGUgPSAncmVhZHknKSB7XG4gIGNsZWFyVGltZW91dChzdGF0dXNSZXNldFRpbWVyKTtcbiAgY29uc3Qgc3RhdHVzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdHVzLW1lc3NhZ2UnKTtcbiAgY29uc3Qgc3RhdHVzYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXR1c2JhcicpO1xuICBpZiAoc3RhdHVzRWwpIHtcbiAgICBzdGF0dXNFbC50ZXh0Q29udGVudCA9IG1zZztcbiAgfVxuICBpZiAoc3RhdHVzYmFyKSB7XG4gICAgc3RhdHVzYmFyLmRhdGFzZXQuc3RhdGUgPSBzdGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRSZWFkeVN0YXR1cygpIHtcbiAgc2hvd1N0YXR1cygnUmVhZHknLCAncmVhZHknKTtcbn1cblxuZnVuY3Rpb24gbWFya0RpcnR5KCkge1xuICBzaG93U3RhdHVzKCdVbnNhdmVkIGNoYW5nZXMnLCAnd2FybmluZycpO1xufVxuXG5mdW5jdGlvbiBzYXZlU3VjY2VzcygpIHtcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgaGggPSBTdHJpbmcobm93LmdldEhvdXJzKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gIGNvbnN0IG1tID0gU3RyaW5nKG5vdy5nZXRNaW51dGVzKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gIHNob3dTdGF0dXMoYFNhdmVkICR7aGh9OiR7bW19YCwgJ3JlYWR5Jyk7XG59XG5cbmZ1bmN0aW9uIHNldFF1ZXJ5TG9hZChuYW1lKSB7XG4gIGNvbnN0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICBpZiAobmFtZSkge1xuICAgIHVybC5zZWFyY2hQYXJhbXMuc2V0KCdsb2FkJywgbmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgdXJsLnNlYXJjaFBhcmFtcy5kZWxldGUoJ2xvYWQnKTtcbiAgfVxuICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sICcnLCB1cmwudG9TdHJpbmcoKSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVBsYXlCdXR0b24oKSB7XG4gIGNvbnN0IHBsYXlCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheS1idG4nKTtcbiAgaWYgKHBsYXlCdG4pIHBsYXlCdG4udGV4dENvbnRlbnQgPSBwbGF5aW5nID8gJ1x1MjVCNiBQbGF5aW5nLi4uJyA6ICdcdTI1QjYgUGxheSc7XG59XG5cbmZ1bmN0aW9uIGxvYWRQcmVzZXRCeU5hbWUobmFtZSkge1xuICBjb25zdCBwcmVzZXQgPSBQUkVTRVRTW25hbWVdO1xuICBpZiAoIWVkaXRvckFwaSB8fCAhcHJlc2V0KSByZXR1cm47XG5cbiAgZWRpdG9yQXBpLnNldFZhbHVlKHByZXNldC50cmltKCkpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTVE9SQUdFX0tFWSwgZWRpdG9yQXBpLmdldFZhbHVlKCkpO1xuICBzZXRRdWVyeUxvYWQobmFtZSk7XG4gIHNob3dTdGF0dXMoYExvYWRlZCBwcmVzZXQ6ICR7UFJFU0VUX0xBQkVMU1tuYW1lXSB8fCBuYW1lfWAsICdyZWFkeScpO1xuICB1cGRhdGVMb29wKCk7XG4gIGVkaXRvckFwaS5mb2N1cygpO1xufVxuXG5mdW5jdGlvbiBzeW5jTWl4ZXIoZGF0YSkge1xuICBpZiAoIW1peGVyQXBpKSByZXR1cm47XG4gIG1peGVyQXBpLnVwZGF0ZShkYXRhKTtcbn1cblxuZnVuY3Rpb24gYmluZEdsb2JhbFNob3J0Y3V0cygpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IGVkaXRpbmdGaWVsZCA9IHRhcmdldCAmJiAoXG4gICAgICB0YXJnZXQudGFnTmFtZSA9PT0gJ1RFWFRBUkVBJ1xuICAgICAgfHwgdGFyZ2V0LnRhZ05hbWUgPT09ICdJTlBVVCdcbiAgICAgIHx8IHRhcmdldC50YWdOYW1lID09PSAnU0VMRUNUJ1xuICAgICk7XG5cbiAgICBpZiAoZS5jb2RlID09PSAnU3BhY2UnICYmICFlZGl0aW5nRmllbGQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChwbGF5aW5nKSBzdG9wKCk7XG4gICAgICBlbHNlIHBsYXkoKTtcbiAgICB9XG4gICAgaWYgKGUuY29kZSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgIHN0b3AoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVET00oaW5pdGlhbFRleHQsIGluaXRpYWxQcmVzZXQpIHtcbiAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnJztcblxuICBjb25zdCB0b29sYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvb2xiYXIuaWQgPSAndG9vbGJhcic7XG5cbiAgY29uc3QgYWJvdXRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhYm91dExpbmsuaWQgPSAnYWJvdXQtbGluayc7XG4gIGFib3V0TGluay5ocmVmID0gJ2xhbmRpbmcuaHRtbCc7XG4gIGFib3V0TGluay50ZXh0Q29udGVudCA9ICdcdTIxOTAgQWJvdXQnO1xuXG4gIGNvbnN0IHBsYXlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcGxheUJ0bi5pZCA9ICdwbGF5LWJ0bic7XG4gIHBsYXlCdG4udGV4dENvbnRlbnQgPSAnXHUyNUI2IFBsYXknO1xuICBwbGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheSk7XG5cbiAgY29uc3Qgc3RvcEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzdG9wQnRuLmlkID0gJ3N0b3AtYnRuJztcbiAgc3RvcEJ0bi50ZXh0Q29udGVudCA9ICdcdTI1QTAgU3RvcCc7XG4gIHN0b3BCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdG9wKTtcblxuICBjb25zdCBtaXhlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBtaXhlckJ0bi5pZCA9ICdtaXhlci1idG4nO1xuICBtaXhlckJ0bi50ZXh0Q29udGVudCA9ICdcdTIyOUUgTWl4ZXInO1xuICBjb25zdCBtaWRpQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG1pZGlCdG4uaWQgPSAnbWlkaS1idG4nO1xuICBtaWRpQnRuLnRleHRDb250ZW50ID0gJ1x1RDgzQ1x1REY5QiBNSURJJztcbiAgbWlkaUJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gIG1pZGlCdG4udGl0bGUgPSAnTUlESSBzdXBwb3J0IGNvbWVzIG5leHQnO1xuXG4gIGNvbnN0IHByZXNldExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgcHJlc2V0TGFiZWwuY2xhc3NOYW1lID0gJ2ZpZWxkLWdyb3VwJztcbiAgcHJlc2V0TGFiZWwudGV4dENvbnRlbnQgPSAnUHJlc2V0ICc7XG4gIGNvbnN0IHByZXNldFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBwcmVzZXRTZWxlY3QuaWQgPSAncHJlc2V0LXNlbGVjdCc7XG4gIGNvbnN0IGN1c3RvbU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBjdXN0b21PcHRpb24udmFsdWUgPSAnJztcbiAgY3VzdG9tT3B0aW9uLnRleHRDb250ZW50ID0gJ0N1c3RvbSc7XG4gIHByZXNldFNlbGVjdC5hcHBlbmRDaGlsZChjdXN0b21PcHRpb24pO1xuICBPYmplY3Qua2V5cyhQUkVTRVRTKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbi52YWx1ZSA9IG5hbWU7XG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gUFJFU0VUX0xBQkVMU1tuYW1lXSB8fCBuYW1lO1xuICAgIHByZXNldFNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9KTtcbiAgaWYgKGluaXRpYWxQcmVzZXQgJiYgUFJFU0VUU1tpbml0aWFsUHJlc2V0XSkge1xuICAgIHByZXNldFNlbGVjdC52YWx1ZSA9IGluaXRpYWxQcmVzZXQ7XG4gIH1cbiAgcHJlc2V0U2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBpZiAocHJlc2V0U2VsZWN0LnZhbHVlKSB7XG4gICAgICBsb2FkUHJlc2V0QnlOYW1lKHByZXNldFNlbGVjdC52YWx1ZSk7XG4gICAgfVxuICB9KTtcbiAgcHJlc2V0TGFiZWwuYXBwZW5kQ2hpbGQocHJlc2V0U2VsZWN0KTtcblxuICB0b29sYmFyLmFwcGVuZENoaWxkKGFib3V0TGluayk7XG4gIHRvb2xiYXIuYXBwZW5kQ2hpbGQocGxheUJ0bik7XG4gIHRvb2xiYXIuYXBwZW5kQ2hpbGQoc3RvcEJ0bik7XG4gIHRvb2xiYXIuYXBwZW5kQ2hpbGQobWl4ZXJCdG4pO1xuICB0b29sYmFyLmFwcGVuZENoaWxkKG1pZGlCdG4pO1xuICB0b29sYmFyLmFwcGVuZENoaWxkKHByZXNldExhYmVsKTtcblxuICBlZGl0b3JBcGkgPSBjcmVhdGVFZGl0b3IoaW5pdGlhbFRleHQsIHtcbiAgICByZXNvbHZlTm90ZTogcmVzb2x2ZU5vdGVUb29sdGlwLFxuICAgIHJlc29sdmVDaG9yZDogcmVzb2x2ZUNob3JkVG9vbHRpcCxcbiAgICByZXNvbHZlTW9kZTogcmVzb2x2ZU1vZGVUb29sdGlwLFxuICAgIHJlc29sdmVNb2RlTm90ZXMsXG4gICAgcmVzb2x2ZVZlbG9jaXR5OiByZXNvbHZlVmVsb2NpdHlUb29sdGlwLFxuICAgIHJlc29sdmVTZWN0aW9uOiByZXNvbHZlU2VjdGlvblRvb2x0aXAsXG4gICAgcmVzb2x2ZVZhcjogcmVzb2x2ZVZhclRvb2x0aXAsXG4gICAgcmVzb2x2ZUluc3RydW1lbnQ6IHJlc29sdmVJbnN0cnVtZW50VG9vbHRpcCxcbiAgICBvbklucHV0OiAoKSA9PiB7XG4gICAgICBjb25zdCBwcmVzZXRTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJlc2V0LXNlbGVjdCcpO1xuICAgICAgaWYgKHByZXNldFNlbGVjdCkgcHJlc2V0U2VsZWN0LnZhbHVlID0gJyc7XG4gICAgICBzZXRRdWVyeUxvYWQobnVsbCk7XG4gICAgICBtYXJrRGlydHkoKTtcbiAgICAgIHVwZGF0ZUxvb3AoKTtcbiAgICAgIHNhdmVEcmFmdCgpO1xuICAgIH0sXG4gIH0pO1xuXG4gIGVkaXRvckFwaS5vbigna2V5ZG93bicsIGUgPT4ge1xuICAgIGlmICgoZS5tZXRhS2V5IHx8IGUuY3RybEtleSkgJiYgZS5zaGlmdEtleSAmJiBlLmNvZGUgPT09ICdFbnRlcicpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2YWxCbG9jaygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoKGUubWV0YUtleSB8fCBlLmN0cmxLZXkpICYmIGUuY29kZSA9PT0gJ0VudGVyJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHBsYXlpbmcpIHN0b3AoKTtcbiAgICAgIGVsc2UgcGxheSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3Qgc3RhdHVzYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHN0YXR1c2Jhci5pZCA9ICdzdGF0dXNiYXInO1xuICBzdGF0dXNiYXIuZGF0YXNldC5zdGF0ZSA9ICdyZWFkeSc7XG5cbiAgY29uc3QgYmVhdERvdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYmVhdERvdHMuaWQgPSAnYmVhdC1kb3RzJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSArPSAxKSB7XG4gICAgY29uc3QgZG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGRvdC5jbGFzc05hbWUgPSAnYmVhdC1kb3QnO1xuICAgIGJlYXREb3RzLmFwcGVuZENoaWxkKGRvdCk7XG4gIH1cblxuICBjb25zdCBzdGF0dXNNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzdGF0dXNNZXNzYWdlLmlkID0gJ3N0YXR1cy1tZXNzYWdlJztcbiAgc3RhdHVzTWVzc2FnZS50ZXh0Q29udGVudCA9ICdSZWFkeSc7XG5cbiAgc3RhdHVzYmFyLmFwcGVuZENoaWxkKGJlYXREb3RzKTtcbiAgc3RhdHVzYmFyLmFwcGVuZENoaWxkKHN0YXR1c01lc3NhZ2UpO1xuXG4gIGNvbnN0IHdvcmtzcGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3b3Jrc3BhY2UuaWQgPSAnd29ya3NwYWNlJztcbiAgbWl4ZXJBcGkgPSBjcmVhdGVNaXhlcihwLCB7XG4gICAgdGVtcG8sXG4gICAgYmFycyxcbiAgICB0cmFuc3Bvc2UsXG4gICAgb25DaGFuZ2UobmV4dCkge1xuICAgICAgaWYgKHR5cGVvZiBuZXh0LnRlbXBvID09PSAnbnVtYmVyJykgdGVtcG8gPSBuZXh0LnRlbXBvO1xuICAgICAgaWYgKHR5cGVvZiBuZXh0LmJhcnMgPT09ICdudW1iZXInKSBiYXJzID0gbmV4dC5iYXJzO1xuICAgICAgaWYgKHR5cGVvZiBuZXh0LnRyYW5zcG9zZSA9PT0gJ251bWJlcicpIHRyYW5zcG9zZSA9IG5leHQudHJhbnNwb3NlO1xuICAgICAgdXBkYXRlTG9vcCgpO1xuICAgIH0sXG4gIH0pO1xuICBtaXhlckFwaS50b2dnbGUoZmFsc2UpO1xuICBtaXhlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBvcGVuID0gbWl4ZXJBcGkudG9nZ2xlKCk7XG4gICAgd29ya3NwYWNlLmNsYXNzTGlzdC50b2dnbGUoJ21peGVyLW9wZW4nLCBvcGVuKTtcbiAgfSk7XG4gIHAub25CZWF0ID0gKGtleSwgd2hlbiwgYmVhdEluZGV4KSA9PiB7XG4gICAgY29uc3Qgd2FpdCA9IE1hdGgubWF4KDAsICh3aGVuIC0gcC5hdWRpb0NvbnRleHQuY3VycmVudFRpbWUpICogMTAwMCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBtaXhlckFwaS5mbGFzaFZVKGtleSk7XG4gICAgICBpZiAoIWVkaXRvckFwaSkgcmV0dXJuO1xuICAgICAgY29uc3QgbGluZXMgPSB0cmFja0xpbmVNYXAuZ2V0KGtleSk7XG4gICAgICBpZiAoIWxpbmVzIHx8ICFsaW5lcy5sZW5ndGgpIHJldHVybjtcbiAgICAgIGVkaXRvckFwaS5mbGFzaEFjdGl2ZVRva2VucyhsaW5lcywgYmVhdEluZGV4KTtcbiAgICB9LCB3YWl0KTtcbiAgfTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvb2xiYXIpO1xuICB3b3Jrc3BhY2UuYXBwZW5kQ2hpbGQoZWRpdG9yQXBpLmVsKTtcbiAgd29ya3NwYWNlLmFwcGVuZENoaWxkKG1peGVyQXBpLmVsKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh3b3Jrc3BhY2UpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN0YXR1c2Jhcik7XG5cbiAgcmV0dXJuIGVkaXRvckFwaTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9hZEV4YW1wbGUobmFtZSkge1xuICBpZiAoUFJFU0VUU1tuYW1lXSkgcmV0dXJuIFBSRVNFVFNbbmFtZV07XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgZXhhbXBsZXMvJHtuYW1lfS5kdWJgKTtcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gaWdub3JlIGFuZCB1c2UgZmFsbGJhY2tcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVzb2x2ZUluaXRpYWxEcmFmdCgpIHtcbiAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgY29uc3QgbG9hZCA9IHBhcmFtcy5nZXQoJ2xvYWQnKTtcblxuICBpZiAobG9hZCkge1xuICAgIGNvbnN0IGRyYWZ0ID0gYXdhaXQgbG9hZEV4YW1wbGUobG9hZCk7XG4gICAgaWYgKGRyYWZ0KSByZXR1cm4gZHJhZnQudHJpbSgpO1xuICB9XG5cbiAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFNUT1JBR0VfS0VZKSB8fCBURVRSSVM7XG59XG5cbmZ1bmN0aW9uIHNhdmVEcmFmdCgpIHtcbiAgY2xlYXJUaW1lb3V0KGRlYm91bmNlVGltZXIpO1xuICBkZWJvdW5jZVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYgKGVkaXRvckFwaSkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU1RPUkFHRV9LRVksIGVkaXRvckFwaS5nZXRWYWx1ZSgpKTtcbiAgICAgIHNhdmVTdWNjZXNzKCk7XG4gICAgfVxuICB9LCAzMDApO1xufVxuXG5mdW5jdGlvbiBwbGF5KCkge1xuICBzdG9wKCk7XG4gIGlmICghZWRpdG9yQXBpKSByZXR1cm47XG5cbiAgaWYgKHAuYXVkaW9Db250ZXh0LnN0YXRlID09PSAnc3VzcGVuZGVkJykge1xuICAgIHAuYXVkaW9Db250ZXh0LnJlc3VtZSgpO1xuICB9XG4gIHBsYXlpbmcgPSB0cnVlO1xuICBjb25zdCBkYXRhID0gZ2V0RGF0YShlZGl0b3JBcGkuZ2V0VmFsdWUoKSk7XG4gIHAuc2V0TG9vcE1hY2hpbmUoZGF0YSwgdGVtcG8sIGJhcnMsIHRyYW5zcG9zZSk7XG4gIHN5bmNNaXhlcihkYXRhKTtcbiAgcC5wbGF5TG9vcE1hY2hpbmUoKTtcbiAgdXBkYXRlUGxheUJ1dHRvbigpO1xuICBzaG93U3RhdHVzKCdQbGF5aW5nJywgJ3BsYXlpbmcnKTtcbn1cblxuZnVuY3Rpb24gc3RvcCgpIHtcbiAgaWYgKHBsYXlpbmcpIHtcbiAgICBwbGF5aW5nID0gZmFsc2U7XG4gICAgcC5zdG9wTG9vcE1hY2hpbmUoKTtcbiAgfVxuICBpZiAoZWRpdG9yQXBpKSB7XG4gICAgZWRpdG9yQXBpLmNsZWFyQWN0aXZlVG9rZW5IaWdobGlnaHQoKTtcbiAgfVxuICB1cGRhdGVQbGF5QnV0dG9uKCk7XG4gIHNldFJlYWR5U3RhdHVzKCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxvb3AoKSB7XG4gIGlmICghZWRpdG9yQXBpIHx8ICFwKSByZXR1cm47XG5cbiAgY29uc3QgZGF0YSA9IGdldERhdGEoZWRpdG9yQXBpLmdldFZhbHVlKCkpO1xuICBjb25zdCBjaGFuZ2VkID0gcC5zZXRMb29wTWFjaGluZShkYXRhLCB0ZW1wbywgYmFycywgdHJhbnNwb3NlKTtcbiAgc3luY01peGVyKGRhdGEpO1xuICBpZiAoY2hhbmdlZCAmJiBwbGF5aW5nKSB7XG4gICAgcC5wbGF5TG9vcE1hY2hpbmUocC5iZWF0SW5kZXgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGJlYXRJbmRpY2F0b3IoKSB7XG4gIGNvbnN0IGRvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmVhdC1kb3QnKTtcbiAgY29uc3QgYWN0aXZlSW5kZXggPSBwLmxvb3BTdGFydGVkID8gcC5iZWF0SW5kZXggOiAtMTtcbiAgZG90cy5mb3JFYWNoKChkb3QsIGkpID0+IGRvdC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnLCBpID09PSBhY3RpdmVJbmRleCkpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYmVhdEluZGljYXRvcik7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGJvb3RzdHJhcCgpIHtcbiAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgY29uc3QgaW5pdGlhbFByZXNldCA9IHBhcmFtcy5nZXQoJ2xvYWQnKTtcbiAgY29uc3QgaW5pdGlhbERyYWZ0ID0gYXdhaXQgcmVzb2x2ZUluaXRpYWxEcmFmdCgpO1xuICBjb25zdCBlZGl0b3IgPSBjcmVhdGVET00oaW5pdGlhbERyYWZ0LCBpbml0aWFsUHJlc2V0KTtcbiAgYmluZEdsb2JhbFNob3J0Y3V0cygpO1xuICBjb25zdCBkYXRhID0gZ2V0RGF0YShlZGl0b3IuZ2V0VmFsdWUoKSk7XG4gIHAuc2V0TG9vcE1hY2hpbmUoZGF0YSwgdGVtcG8sIGJhcnMsIHRyYW5zcG9zZSk7XG4gIHN5bmNNaXhlcihkYXRhKTtcbiAgc2V0UmVhZHlTdGF0dXMoKTtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGJlYXRJbmRpY2F0b3IpO1xufVxuXG5ib290c3RyYXAoKTtcblxuZXhwb3J0IGRlZmF1bHQge307XG4iLCAiJ3VzZSBzdHJpY3QnXG5cbi8vIHV0aWxcbmZ1bmN0aW9uIGZpbGxTdHIgKHMsIG51bSkgeyByZXR1cm4gQXJyYXkobnVtICsgMSkuam9pbihzKSB9XG5mdW5jdGlvbiBpc051bSAoeCkgeyByZXR1cm4gdHlwZW9mIHggPT09ICdudW1iZXInIH1cbmZ1bmN0aW9uIGlzU3RyICh4KSB7IHJldHVybiB0eXBlb2YgeCA9PT0gJ3N0cmluZycgfVxuZnVuY3Rpb24gaXNEZWYgKHgpIHsgcmV0dXJuIHR5cGVvZiB4ICE9PSAndW5kZWZpbmVkJyB9XG5mdW5jdGlvbiBtaWRpVG9GcmVxIChtaWRpLCB0dW5pbmcpIHtcbiAgcmV0dXJuIE1hdGgucG93KDIsIChtaWRpIC0gNjkpIC8gMTIpICogKHR1bmluZyB8fCA0NDApXG59XG5cbnZhciBSRUdFWCA9IC9eKFthLWdBLUddKSgjezEsfXxiezEsfXx4ezEsfXwpKC0/XFxkKilcXHMqKC4qKVxccyokL1xuLyoqXG4gKiBBIHJlZ2V4IGZvciBtYXRjaGluZyBub3RlIHN0cmluZ3MgaW4gc2NpZW50aWZpYyBub3RhdGlvbi5cbiAqXG4gKiBAbmFtZSByZWdleFxuICogQGZ1bmN0aW9uXG4gKiBAcmV0dXJuIHtSZWdFeHB9IHRoZSByZWdleHAgdXNlZCB0byBwYXJzZSB0aGUgbm90ZSBuYW1lXG4gKlxuICogVGhlIG5vdGUgc3RyaW5nIHNob3VsZCBoYXZlIHRoZSBmb3JtIGBsZXR0ZXJbYWNjaWRlbnRhbHNdW29jdGF2ZV1bZWxlbWVudF1gXG4gKiB3aGVyZTpcbiAqXG4gKiAtIGxldHRlcjogKFJlcXVpcmVkKSBpcyBhIGxldHRlciBmcm9tIEEgdG8gRyBlaXRoZXIgdXBwZXIgb3IgbG93ZXIgY2FzZVxuICogLSBhY2NpZGVudGFsczogKE9wdGlvbmFsKSBjYW4gYmUgb25lIG9yIG1vcmUgYGJgIChmbGF0cyksIGAjYCAoc2hhcnBzKSBvciBgeGAgKGRvdWJsZSBzaGFycHMpLlxuICogVGhleSBjYW4gTk9UIGJlIG1peGVkLlxuICogLSBvY3RhdmU6IChPcHRpb25hbCkgYSBwb3NpdGl2ZSBvciBuZWdhdGl2ZSBpbnRlZ2VyXG4gKiAtIGVsZW1lbnQ6IChPcHRpb25hbCkgYWRkaXRpb25hbGx5IGFueXRoaW5nIGFmdGVyIHRoZSBkdXJhdGlvbiBpcyBjb25zaWRlcmVkIHRvXG4gKiBiZSB0aGUgZWxlbWVudCBuYW1lIChmb3IgZXhhbXBsZTogJ0MyIGRvcmlhbicpXG4gKlxuICogVGhlIGV4ZWN1dGVkIHJlZ2V4IGNvbnRhaW5zIChieSBhcnJheSBpbmRleCk6XG4gKlxuICogLSAwOiB0aGUgY29tcGxldGUgc3RyaW5nXG4gKiAtIDE6IHRoZSBub3RlIGxldHRlclxuICogLSAyOiB0aGUgb3B0aW9uYWwgYWNjaWRlbnRhbHNcbiAqIC0gMzogdGhlIG9wdGlvbmFsIG9jdGF2ZVxuICogLSA0OiB0aGUgcmVzdCBvZiB0aGUgc3RyaW5nICh0cmltbWVkKVxuICpcbiAqIEBleGFtcGxlXG4gKiB2YXIgcGFyc2VyID0gcmVxdWlyZSgnbm90ZS1wYXJzZXInKVxuICogcGFyc2VyLnJlZ2V4LmV4ZWMoJ2MjNCcpXG4gKiAvLyA9PiBbJ2MjNCcsICdjJywgJyMnLCAnNCcsICcnXVxuICogcGFyc2VyLnJlZ2V4LmV4ZWMoJ2MjNCBtYWpvcicpXG4gKiAvLyA9PiBbJ2MjNG1ham9yJywgJ2MnLCAnIycsICc0JywgJ21ham9yJ11cbiAqIHBhcnNlci5yZWdleCgpLmV4ZWMoJ0NNYWo3JylcbiAqIC8vID0+IFsnQ01hajcnLCAnQycsICcnLCAnJywgJ01hajcnXVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnZXggKCkgeyByZXR1cm4gUkVHRVggfVxuXG52YXIgU0VNSVRPTkVTID0gWzAsIDIsIDQsIDUsIDcsIDksIDExXVxuLyoqXG4gKiBQYXJzZSBhIG5vdGUgbmFtZSBpbiBzY2llbnRpZmljIG5vdGF0aW9uIGFuIHJldHVybiBpdCdzIGNvbXBvbmVudHMsXG4gKiBhbmQgc29tZSBudW1lcmljIHByb3BlcnRpZXMgaW5jbHVkaW5nIG1pZGkgbnVtYmVyIGFuZCBmcmVxdWVuY3kuXG4gKlxuICogQG5hbWUgcGFyc2VcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5vdGUgLSB0aGUgbm90ZSBzdHJpbmcgdG8gYmUgcGFyc2VkXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzVG9uaWMgLSB0cnVlIHRoZSBzdHJpbmdzIGl0J3Mgc3VwcG9zZWQgdG8gY29udGFpbiBhIG5vdGUgbnVtYmVyXG4gKiBhbmQgc29tZSBjYXRlZ29yeSAoZm9yIGV4YW1wbGUgYW4gc2NhbGU6ICdDIyBtYWpvcicpLiBJdCdzIGZhbHNlIGJ5IGRlZmF1bHQsXG4gKiBidXQgd2hlbiB0cnVlLCBlbiBleHRyYSB0b25pY09mIHByb3BlcnR5IGlzIHJldHVybmVkIHdpdGggdGhlIGNhdGVnb3J5ICgnbWFqb3InKVxuICogQHBhcmFtIHtGbG9hdH0gdHVubmluZyAtIFRoZSBmcmVxdWVuY3kgb2YgQTQgbm90ZSB0byBjYWxjdWxhdGUgZnJlcXVlbmNpZXMuXG4gKiBCeSBkZWZhdWx0IGl0IDQ0MC5cbiAqIEByZXR1cm4ge09iamVjdH0gdGhlIHBhcnNlZCBub3RlIG5hbWUgb3IgbnVsbCBpZiBub3QgYSB2YWxpZCBub3RlXG4gKlxuICogVGhlIHBhcnNlZCBub3RlIG5hbWUgb2JqZWN0IHdpbGwgQUxXQVlTIGNvbnRhaW5zOlxuICogLSBsZXR0ZXI6IHRoZSB1cHBlcmNhc2UgbGV0dGVyIG9mIHRoZSBub3RlXG4gKiAtIGFjYzogdGhlIGFjY2lkZW50YWxzIG9mIHRoZSBub3RlIChvbmx5IHNoYXJwcyBvciBmbGF0cylcbiAqIC0gcGM6IHRoZSBwaXRjaCBjbGFzcyAobGV0dGVyICsgYWNjKVxuICogLSBzdGVwOiBzIGEgbnVtZXJpYyByZXByZXNlbnRhdGlvbiBvZiB0aGUgbGV0dGVyLiBJdCdzIGFuIGludGVnZXIgZnJvbSAwIHRvIDZcbiAqIHdoZXJlIDAgPSBDLCAxID0gRCAuLi4gNiA9IEJcbiAqIC0gYWx0OiBhIG51bWVyaWMgcmVwcmVzZW50YXRpb24gb2YgdGhlIGFjY2lkZW50YWxzLiAwIG1lYW5zIG5vIGFsdGVyYXRpb24sXG4gKiBwb3NpdGl2ZSBudW1iZXJzIGFyZSBmb3Igc2hhcnBzIGFuZCBuZWdhdGl2ZSBmb3IgZmxhdHNcbiAqIC0gY2hyb21hOiBhIG51bWVyaWMgcmVwcmVzZW50YXRpb24gb2YgdGhlIHBpdGNoIGNsYXNzLiBJdCdzIGxpa2UgbWlkaSBmb3JcbiAqIHBpdGNoIGNsYXNzZXMuIDAgPSBDLCAxID0gQyMsIDIgPSBEIC4uLiAxMSA9IEIuIENhbiBiZSB1c2VkIHRvIGZpbmQgZW5oYXJtb25pY3NcbiAqIHNpbmNlLCBmb3IgZXhhbXBsZSwgY2hyb21hIG9mICdDYicgYW5kICdCJyBhcmUgYm90aCAxMVxuICpcbiAqIElmIHRoZSBub3RlIGhhcyBvY3RhdmUsIHRoZSBwYXJzZXIgb2JqZWN0IHdpbGwgY29udGFpbjpcbiAqIC0gb2N0OiB0aGUgb2N0YXZlIG51bWJlciAoYXMgaW50ZWdlcilcbiAqIC0gbWlkaTogdGhlIG1pZGkgbnVtYmVyXG4gKiAtIGZyZXE6IHRoZSBmcmVxdWVuY3kgKHVzaW5nIHR1bmluZyBwYXJhbWV0ZXIgYXMgYmFzZSlcbiAqXG4gKiBJZiB0aGUgcGFyYW1ldGVyIGBpc1RvbmljYCBpcyBzZXQgdG8gdHJ1ZSwgdGhlIHBhcnNlZCBvYmplY3Qgd2lsbCBjb250YWluOlxuICogLSB0b25pY09mOiB0aGUgcmVzdCBvZiB0aGUgc3RyaW5nIHRoYXQgZm9sbG93cyBub3RlIG5hbWUgKGxlZnQgYW5kIHJpZ2h0IHRyaW1tZWQpXG4gKlxuICogQGV4YW1wbGVcbiAqIHZhciBwYXJzZSA9IHJlcXVpcmUoJ25vdGUtcGFyc2VyJykucGFyc2VcbiAqIHBhcnNlKCdDYjQnKVxuICogLy8gPT4geyBsZXR0ZXI6ICdDJywgYWNjOiAnYicsIHBjOiAnQ2InLCBzdGVwOiAwLCBhbHQ6IC0xLCBjaHJvbWE6IC0xLFxuICogICAgICAgICBvY3Q6IDQsIG1pZGk6IDU5LCBmcmVxOiAyNDYuOTQxNjUwNjI4MDYyMDYgfVxuICogLy8gaWYgbm8gb2N0YXZlLCBubyBtaWRpLCBubyBmcmVxXG4gKiBwYXJzZSgnZngnKVxuICogLy8gPT4geyBsZXR0ZXI6ICdGJywgYWNjOiAnIyMnLCBwYzogJ0YjIycsIHN0ZXA6IDMsIGFsdDogMiwgY2hyb21hOiA3IH0pXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZSAoc3RyLCBpc1RvbmljLCB0dW5pbmcpIHtcbiAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSByZXR1cm4gbnVsbFxuICB2YXIgbSA9IFJFR0VYLmV4ZWMoc3RyKVxuICBpZiAoIW0gfHwgKCFpc1RvbmljICYmIG1bNF0pKSByZXR1cm4gbnVsbFxuXG4gIHZhciBwID0geyBsZXR0ZXI6IG1bMV0udG9VcHBlckNhc2UoKSwgYWNjOiBtWzJdLnJlcGxhY2UoL3gvZywgJyMjJykgfVxuICBwLnBjID0gcC5sZXR0ZXIgKyBwLmFjY1xuICBwLnN0ZXAgPSAocC5sZXR0ZXIuY2hhckNvZGVBdCgwKSArIDMpICUgN1xuICBwLmFsdCA9IHAuYWNjWzBdID09PSAnYicgPyAtcC5hY2MubGVuZ3RoIDogcC5hY2MubGVuZ3RoXG4gIHZhciBwb3MgPSBTRU1JVE9ORVNbcC5zdGVwXSArIHAuYWx0XG4gIHAuY2hyb21hID0gcG9zIDwgMCA/IDEyICsgcG9zIDogcG9zICUgMTJcbiAgaWYgKG1bM10pIHsgLy8gaGFzIG9jdGF2ZVxuICAgIHAub2N0ID0gK21bM11cbiAgICBwLm1pZGkgPSBwb3MgKyAxMiAqIChwLm9jdCArIDEpXG4gICAgcC5mcmVxID0gbWlkaVRvRnJlcShwLm1pZGksIHR1bmluZylcbiAgfVxuICBpZiAoaXNUb25pYykgcC50b25pY09mID0gbVs0XVxuICByZXR1cm4gcFxufVxuXG52YXIgTEVUVEVSUyA9ICdDREVGR0FCJ1xuZnVuY3Rpb24gYWNjU3RyIChuKSB7IHJldHVybiAhaXNOdW0obikgPyAnJyA6IG4gPCAwID8gZmlsbFN0cignYicsIC1uKSA6IGZpbGxTdHIoJyMnLCBuKSB9XG5mdW5jdGlvbiBvY3RTdHIgKG4pIHsgcmV0dXJuICFpc051bShuKSA/ICcnIDogJycgKyBuIH1cblxuLyoqXG4gKiBDcmVhdGUgYSBzdHJpbmcgZnJvbSBhIHBhcnNlZCBvYmplY3Qgb3IgYHN0ZXAsIGFsdGVyYXRpb24sIG9jdGF2ZWAgcGFyYW1ldGVyc1xuICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIHRoZSBwYXJzZWQgZGF0YSBvYmplY3RcbiAqIEByZXR1cm4ge1N0cmluZ30gYSBub3RlIHN0cmluZyBvciBudWxsIGlmIG5vdCB2YWxpZCBwYXJhbWV0ZXJzXG4gKiBAc2luY2UgMS4yXG4gKiBAZXhhbXBsZVxuICogcGFyc2VyLmJ1aWxkKHBhcnNlci5wYXJzZSgnY2IyJykpIC8vID0+ICdDYjInXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIGl0IGFjY2VwdHMgKHN0ZXAsIGFsdGVyYXRpb24sIG9jdGF2ZSkgcGFyYW1ldGVyczpcbiAqIHBhcnNlci5idWlsZCgzKSAvLyA9PiAnRidcbiAqIHBhcnNlci5idWlsZCgzLCAtMSkgLy8gPT4gJ0ZiJ1xuICogcGFyc2VyLmJ1aWxkKDMsIC0xLCA0KSAvLyA9PiAnRmI0J1xuICovXG5leHBvcnQgZnVuY3Rpb24gYnVpbGQgKHMsIGEsIG8pIHtcbiAgaWYgKHMgPT09IG51bGwgfHwgdHlwZW9mIHMgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gbnVsbFxuICBpZiAocy5zdGVwKSByZXR1cm4gYnVpbGQocy5zdGVwLCBzLmFsdCwgcy5vY3QpXG4gIGlmIChzIDwgMCB8fCBzID4gNikgcmV0dXJuIG51bGxcbiAgcmV0dXJuIExFVFRFUlMuY2hhckF0KHMpICsgYWNjU3RyKGEpICsgb2N0U3RyKG8pXG59XG5cbi8qKlxuICogR2V0IG1pZGkgb2YgYSBub3RlXG4gKlxuICogQG5hbWUgbWlkaVxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ3xJbnRlZ2VyfSBub3RlIC0gdGhlIG5vdGUgbmFtZSBvciBtaWRpIG51bWJlclxuICogQHJldHVybiB7SW50ZWdlcn0gdGhlIG1pZGkgbnVtYmVyIG9mIHRoZSBub3RlIG9yIG51bGwgaWYgbm90IGEgdmFsaWQgbm90ZVxuICogb3IgdGhlIG5vdGUgZG9lcyBOT1QgY29udGFpbnMgb2N0YXZlXG4gKiBAZXhhbXBsZVxuICogdmFyIHBhcnNlciA9IHJlcXVpcmUoJ25vdGUtcGFyc2VyJylcbiAqIHBhcnNlci5taWRpKCdBNCcpIC8vID0+IDY5XG4gKiBwYXJzZXIubWlkaSgnQScpIC8vID0+IG51bGxcbiAqIEBleGFtcGxlXG4gKiAvLyBtaWRpIG51bWJlcnMgYXJlIGJ5cGFzc2VkIChldmVuIGFzIHN0cmluZ3MpXG4gKiBwYXJzZXIubWlkaSg2MCkgLy8gPT4gNjBcbiAqIHBhcnNlci5taWRpKCc2MCcpIC8vID0+IDYwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtaWRpIChub3RlKSB7XG4gIGlmICgoaXNOdW0obm90ZSkgfHwgaXNTdHIobm90ZSkpICYmIG5vdGUgPj0gMCAmJiBub3RlIDwgMTI4KSByZXR1cm4gK25vdGVcbiAgdmFyIHAgPSBwYXJzZShub3RlKVxuICByZXR1cm4gcCAmJiBpc0RlZihwLm1pZGkpID8gcC5taWRpIDogbnVsbFxufVxuXG4vKipcbiAqIEdldCBmcmVxIG9mIGEgbm90ZSBpbiBoZXJ0enMgKGluIGEgd2VsbCB0ZW1wZXJlZCA0NDBIeiBBNClcbiAqXG4gKiBAbmFtZSBmcmVxXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBub3RlIC0gdGhlIG5vdGUgbmFtZSBvciBub3RlIG1pZGkgbnVtYmVyXG4gKiBAcGFyYW0ge1N0cmluZ30gdHVuaW5nIC0gKE9wdGlvbmFsKSB0aGUgQTQgZnJlcXVlbmN5ICg0NDAgYnkgZGVmYXVsdClcbiAqIEByZXR1cm4ge0Zsb2F0fSB0aGUgZnJlcSBvZiB0aGUgbnVtYmVyIGlmIGhlcnR6cyBvciBudWxsIGlmIG5vdCB2YWxpZCBub3RlXG4gKiBAZXhhbXBsZVxuICogdmFyIHBhcnNlciA9IHJlcXVpcmUoJ25vdGUtcGFyc2VyJylcbiAqIHBhcnNlci5mcmVxKCdBNCcpIC8vID0+IDQ0MFxuICogcGFyc2VyLmZyZXEoJ0EnKSAvLyA9PiBudWxsXG4gKiBAZXhhbXBsZVxuICogLy8gY2FuIGNoYW5nZSB0dW5pbmcgKDQ0MCBieSBkZWZhdWx0KVxuICogcGFyc2VyLmZyZXEoJ0E0JywgNDQ0KSAvLyA9PiA0NDRcbiAqIHBhcnNlci5mcmVxKCdBMycsIDQ0NCkgLy8gPT4gMjIyXG4gKiBAZXhhbXBsZVxuICogLy8gaXQgYWNjZXB0cyBtaWRpIG51bWJlcnMgKGFzIG51bWJlcnMgYW5kIGFzIHN0cmluZ3MpXG4gKiBwYXJzZXIuZnJlcSg2OSkgLy8gPT4gNDQwXG4gKiBwYXJzZXIuZnJlcSgnNjknLCA0NDIpIC8vID0+IDQ0MlxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJlcSAobm90ZSwgdHVuaW5nKSB7XG4gIHZhciBtID0gbWlkaShub3RlKVxuICByZXR1cm4gbSA9PT0gbnVsbCA/IG51bGwgOiBtaWRpVG9GcmVxKG0sIHR1bmluZylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxldHRlciAoc3JjKSB7IHJldHVybiAocGFyc2Uoc3JjKSB8fCB7fSkubGV0dGVyIH1cbmV4cG9ydCBmdW5jdGlvbiBhY2MgKHNyYykgeyByZXR1cm4gKHBhcnNlKHNyYykgfHwge30pLmFjYyB9XG5leHBvcnQgZnVuY3Rpb24gcGMgKHNyYykgeyByZXR1cm4gKHBhcnNlKHNyYykgfHwge30pLnBjIH1cbmV4cG9ydCBmdW5jdGlvbiBzdGVwIChzcmMpIHsgcmV0dXJuIChwYXJzZShzcmMpIHx8IHt9KS5zdGVwIH1cbmV4cG9ydCBmdW5jdGlvbiBhbHQgKHNyYykgeyByZXR1cm4gKHBhcnNlKHNyYykgfHwge30pLmFsdCB9XG5leHBvcnQgZnVuY3Rpb24gY2hyb21hIChzcmMpIHsgcmV0dXJuIChwYXJzZShzcmMpIHx8IHt9KS5jaHJvbWEgfVxuZXhwb3J0IGZ1bmN0aW9uIG9jdCAoc3JjKSB7IHJldHVybiAocGFyc2Uoc3JjKSB8fCB7fSkub2N0IH1cbiIsICIvKipcbiAqIEEgbWlkaSBub3RlIG51bWJlciBpcyBhIG51bWJlciByZXByZXNlbnRhdGlvbiBvZiBhIG5vdGUgcGl0Y2guIEl0IGNhbiBiZVxuICogaW50ZWdlcnMgc28gaXQncyBlcXVhbCB0ZW1wZXJlZCB0dW5lZCwgb3IgZmxvYXQgdG8gaW5kaWNhdGUgaXQncyBub3RcbiAqIHR1bmVkIGludG8gZXF1YWwgdGVtZXBlcmVkIHNjYWxlLlxuICpcbiAqIFRoaXMgbW9kdWxlIGNvbnRhaW5zIGZ1bmN0aW9ucyB0byBjb252ZXJ0IHRvIGFuZCBmcm9tIG1pZGkgbm90ZXMuXG4gKlxuICogQGV4YW1wbGVcbiAqIHZhciBtaWRpID0gcmVxdWlyZSgndG9uYWwtbWlkaScpXG4gKiBtaWRpLnRvTWlkaSgnQTQnKSAvLyA9PiA2OVxuICogbWlkaS5ub3RlKDY5KSAvLyA9PiAnQTQnXG4gKiBtaWRpLm5vdGUoNjEpIC8vID0+ICdEYjQnXG4gKiBtaWRpLm5vdGUoNjEsIHRydWUpIC8vID0+ICdDIzQnXG4gKlxuICogQG1vZHVsZSBtaWRpXG4gKi9cblxuaW1wb3J0IHsgbWlkaSB9IGZyb20gJ25vdGUtcGFyc2VyJ1xuXG4vKipcbiAqIENvbnZlcnQgdGhlIGdpdmVuIG5vdGUgdG8gYSBtaWRpIG5vdGUgbnVtYmVyLiBJZiB5b3UgcGFzcyBhIG1pZGkgbnVtYmVyIGl0XG4gKiB3aWxsIHJldHVybmVkIGFzIGlzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfE51bWJlcn0gbm90ZSAtIHRoZSBub3RlIHRvIGdldCB0aGUgbWlkaSBudW1iZXIgZnJvbVxuICogQHJldHVybiB7SW50ZWdlcn0gdGhlIG1pZGkgbnVtYmVyIG9yIG51bGwgaWYgbm90IHZhbGlkIHBpdGNoXG4gKiBAZXhhbXBsZVxuICogbWlkaS50b01pZGkoJ0M0JykgLy8gPT4gNjBcbiAqIG1pZGkudG9NaWRpKDYwKSAvLyA9PiA2MFxuICogbWlkaS50b01pZGkoJzYwJykgLy8gPT4gNjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvTWlkaSAodmFsKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbCkgJiYgdmFsLmxlbmd0aCA9PT0gMikgcmV0dXJuIHZhbFswXSAqIDcgKyB2YWxbMV0gKiAxMiArIDEyXG4gIHJldHVybiBtaWRpKHZhbClcbn1cblxudmFyIEZMQVRTID0gJ0MgRGIgRCBFYiBFIEYgR2IgRyBBYiBBIEJiIEInLnNwbGl0KCcgJylcbnZhciBTSEFSUFMgPSAnQyBDIyBEIEQjIEUgRiBGIyBHIEcjIEEgQSMgQicuc3BsaXQoJyAnKVxuXG4vKipcbiAqIEdpdmVuIGEgbWlkaSBudW1iZXIsIHJldHVybnMgYSBub3RlIG5hbWUuIFRoZSBhbHRlcmVkIG5vdGVzIHdpbGwgaGF2ZVxuICogZmxhdHMgdW5sZXNzIGV4cGxpY2l0bHkgc2V0IHdpdGggdGhlIG9wdGlvbmFsIGB1c2VTaGFycHNgIHBhcmFtZXRlci5cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7SW50ZWdlcn0gbWlkaSAtIHRoZSBtaWRpIG5vdGUgbnVtYmVyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHVzZVNoYXJwcyAtIChPcHRpb25hbCkgc2V0IHRvIHRydWUgdG8gdXNlIHNoYXJwcyBpbnN0ZWFkIG9mIGZsYXRzXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHRoZSBub3RlIG5hbWVcbiAqIEBleGFtcGxlXG4gKiB2YXIgbWlkaSA9IHJlcXVpcmUoJ3RvbmFsLW1pZGknKVxuICogbWlkaS5ub3RlKDYxKSAvLyA9PiAnRGI0J1xuICogbWlkaS5ub3RlKDYxLCB0cnVlKSAvLyA9PiAnQyM0J1xuICogLy8gaXQgcm91bmRzIHRvIG5lYXJlc3Qgbm90ZVxuICogbWlkaS5ub3RlKDYxLjcpIC8vID0+ICdENCdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vdGUgKG51bSwgc2hhcnBzKSB7XG4gIGlmIChudW0gPT09IHRydWUgfHwgbnVtID09PSBmYWxzZSkgcmV0dXJuIGZ1bmN0aW9uIChtKSB7IHJldHVybiBub3RlKG0sIG51bSkgfVxuICBudW0gPSBNYXRoLnJvdW5kKG51bSlcbiAgdmFyIHBjcyA9IHNoYXJwcyA9PT0gdHJ1ZSA/IFNIQVJQUyA6IEZMQVRTXG4gIHZhciBwYyA9IHBjc1tudW0gJSAxMl1cbiAgdmFyIG8gPSBNYXRoLmZsb29yKG51bSAvIDEyKSAtIDFcbiAgcmV0dXJuIHBjICsgb1xufVxuIiwgIntcbiAgXCJuYW1lXCI6IFwibWlkaS13cml0ZXItanNcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMi4wLjFcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkEgbGlicmFyeSBwcm92aWRpbmcgYW4gQVBJIGZvciBnZW5lcmF0aW5nIE1JREkgZmlsZXMuXCIsXG4gIFwibWFpblwiOiBcImJ1aWxkL2luZGV4LmpzXCIsXG4gIFwidHlwZXNcIjogXCJ0eXBlcy5kLnRzXCIsXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcInRvbmFsLW1pZGlcIjogXCJeMC42OS43XCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQGJhYmVsL2NvcmVcIjogXCJeNy45LjZcIixcbiAgICBcIkBiYWJlbC9wbHVnaW4tdHJhbnNmb3JtLWRlc3RydWN0dXJpbmdcIjogXCJeNy45LjVcIixcbiAgICBcIkBiYWJlbC9wcmVzZXQtZW52XCI6IFwiXjcuOS42XCIsXG4gICAgXCJAcm9sbHVwL3BsdWdpbi1iYWJlbFwiOiBcIl41LjAuMFwiLFxuICAgIFwiZXNsaW50XCI6IFwiXjcuMC4wXCIsXG4gICAgXCJlc2xpbnQtY29uZmlnLXN0YW5kYXJkXCI6IFwiXjEyLjAuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1pbXBvcnRcIjogXCJeMi4yMC4yXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLW5vZGVcIjogXCJeOS4yLjBcIixcbiAgICBcImVzbGludC1wbHVnaW4tcHJvbWlzZVwiOiBcIl40LjEuMVwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1zdGFuZGFyZFwiOiBcIl40LjAuMVwiLFxuICAgIFwianNkb2NcIjogXCJeMy42LjRcIixcbiAgICBcIm1pbmFtaVwiOiBcIl4xLjIuM1wiLFxuICAgIFwibW9jaGFcIjogXCJeOS4wLjFcIixcbiAgICBcIm55Y1wiOiBcIl4xNS4wLjFcIixcbiAgICBcInJvbGx1cFwiOiBcIl4yLjkuMFwiLFxuICAgIFwid2F0Y2hcIjogXCJeMS4wLjJcIlxuICB9LFxuICBcImRpcmVjdG9yaWVzXCI6IHtcbiAgICBcImxpYlwiOiBcInNyY1wiLFxuICAgIFwiZXhhbXBsZVwiOiBcImV4YW1wbGVzXCIsXG4gICAgXCJ0ZXN0XCI6IFwidGVzdFwiXG4gIH0sXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJidWlsZFwiOiBcIm1rZGlyIC1wIGJ1aWxkICYmIHJvbGx1cCAtYyAmJiBucG0gcnVuIGRvY3NcIixcbiAgICBcImRvY3NcIjogXCIuL25vZGVfbW9kdWxlcy8uYmluL2pzZG9jIC1yIHNyYyBSRUFETUUubWQgLWQgLi9kb2NzIC10IC4vbm9kZV9tb2R1bGVzL21pbmFtaVwiLFxuICAgIFwibGludDpqc1wiOiBcImVzbGludCAnc3JjLyoqLyoqLmpzJ1wiLFxuICAgIFwicHJlcHVibGlzaE9ubHlcIjogXCJucG0gdGVzdFwiLFxuICAgIFwicHJldGVzdFwiOiBcIm5wbSBydW4gYnVpbGRcIixcbiAgICBcInRlc3RcIjogXCJueWMgLS1yZXBvcnRlcj10ZXh0IG1vY2hhIC0tbm8tY29uZmlnIC0tbm8tcGFja2FnZVwiLFxuICAgIFwid2F0Y2hcIjogXCJ3YXRjaCAnbnBtIHJ1biBidWlsZCcgc3JjXCIsXG4gICAgXCJwb3N0aW5zdGFsbFwiOiBcIm5vZGUgcG9zdGluc3RhbGwuanNcIlxuICB9LFxuICBcInJ1bmtpdEV4YW1wbGVGaWxlbmFtZVwiOiBcInJ1bmtpdC5qc1wiLFxuICBcInJlcG9zaXRvcnlcIjoge1xuICAgIFwidHlwZVwiOiBcImdpdFwiLFxuICAgIFwidXJsXCI6IFwiZ2l0K2h0dHBzOi8vZ2l0aHViLmNvbS9ncmltbWR1ZGUvTWlkaVdyaXRlckpTLmdpdFwiXG4gIH0sXG4gIFwia2V5d29yZHNcIjogW1xuICAgIFwibWlkaVwiLFxuICAgIFwiZ2VuZXJhdG9yXCIsXG4gICAgXCJtdXNpY1wiXG4gIF0sXG4gIFwiYXV0aG9yXCI6IFwiR2FycmV0dCBHcmltbVwiLFxuICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgXCJidWdzXCI6IHtcbiAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ncmltbWR1ZGUvTWlkaVdyaXRlckpTL2lzc3Vlc1wiXG4gIH0sXG4gIFwiaG9tZXBhZ2VcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZ3JpbW1kdWRlL01pZGlXcml0ZXJKUyNyZWFkbWVcIlxufVxuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIHRvbmFsTWlkaSA9IHJlcXVpcmUoJ3RvbmFsLW1pZGknKTtcblxuLyoqXG4gKiBNSURJIGZpbGUgZm9ybWF0IGNvbnN0YW50cy5cbiAqIEByZXR1cm4ge0NvbnN0YW50c31cbiAqL1xudmFyIENvbnN0YW50cyA9IHtcbiAgVkVSU0lPTjogcmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJykudmVyc2lvbixcbiAgSEVBREVSX0NIVU5LX1RZUEU6IFsweDRkLCAweDU0LCAweDY4LCAweDY0XSxcbiAgLy8gTXRoZFxuICBIRUFERVJfQ0hVTktfTEVOR1RIOiBbMHgwMCwgMHgwMCwgMHgwMCwgMHgwNl0sXG4gIC8vIEhlYWRlciBzaXplIGZvciBTTUZcbiAgSEVBREVSX0NIVU5LX0ZPUk1BVDA6IFsweDAwLCAweDAwXSxcbiAgLy8gTWlkaSBUeXBlIDAgaWRcbiAgSEVBREVSX0NIVU5LX0ZPUk1BVDE6IFsweDAwLCAweDAxXSxcbiAgLy8gTWlkaSBUeXBlIDEgaWRcbiAgSEVBREVSX0NIVU5LX0RJVklTSU9OOiBbMHgwMCwgMHg4MF0sXG4gIC8vIERlZmF1bHRzIHRvIDEyOCB0aWNrcyBwZXIgYmVhdFxuICBUUkFDS19DSFVOS19UWVBFOiBbMHg0ZCwgMHg1NCwgMHg3MiwgMHg2Yl0sXG4gIC8vIE1UcmssXG4gIE1FVEFfRVZFTlRfSUQ6IDB4RkYsXG4gIE1FVEFfVEVYVF9JRDogMHgwMSxcbiAgTUVUQV9DT1BZUklHSFRfSUQ6IDB4MDIsXG4gIE1FVEFfVFJBQ0tfTkFNRV9JRDogMHgwMyxcbiAgTUVUQV9JTlNUUlVNRU5UX05BTUVfSUQ6IDB4MDQsXG4gIE1FVEFfTFlSSUNfSUQ6IDB4MDUsXG4gIE1FVEFfTUFSS0VSX0lEOiAweDA2LFxuICBNRVRBX0NVRV9QT0lOVDogMHgwNyxcbiAgTUVUQV9URU1QT19JRDogMHg1MSxcbiAgTUVUQV9TTVRQRV9PRkZTRVQ6IDB4NTQsXG4gIE1FVEFfVElNRV9TSUdOQVRVUkVfSUQ6IDB4NTgsXG4gIE1FVEFfS0VZX1NJR05BVFVSRV9JRDogMHg1OSxcbiAgTUVUQV9FTkRfT0ZfVFJBQ0tfSUQ6IFsweDJGLCAweDAwXSxcbiAgQ09OVFJPTExFUl9DSEFOR0VfU1RBVFVTOiAweEIwLFxuICAvLyBpbmNsdWRlcyBjaGFubmVsIG51bWJlciAoMClcbiAgUFJPR1JBTV9DSEFOR0VfU1RBVFVTOiAweEMwLFxuICAvLyBpbmNsdWRlcyBjaGFubmVsIG51bWJlciAoMClcbiAgUElUQ0hfQkVORF9TVEFUVVM6IDB4RTAgLy8gaW5jbHVkZXMgY2hhbm5lbCBudW1iZXIgKDApXG5cbn07XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbmZ1bmN0aW9uIF93cmFwUmVnRXhwKCkge1xuICBfd3JhcFJlZ0V4cCA9IGZ1bmN0aW9uIChyZSwgZ3JvdXBzKSB7XG4gICAgcmV0dXJuIG5ldyBCYWJlbFJlZ0V4cChyZSwgdW5kZWZpbmVkLCBncm91cHMpO1xuICB9O1xuXG4gIHZhciBfc3VwZXIgPSBSZWdFeHAucHJvdG90eXBlO1xuXG4gIHZhciBfZ3JvdXBzID0gbmV3IFdlYWtNYXAoKTtcblxuICBmdW5jdGlvbiBCYWJlbFJlZ0V4cChyZSwgZmxhZ3MsIGdyb3Vwcykge1xuICAgIHZhciBfdGhpcyA9IG5ldyBSZWdFeHAocmUsIGZsYWdzKTtcblxuICAgIF9ncm91cHMuc2V0KF90aGlzLCBncm91cHMgfHwgX2dyb3Vwcy5nZXQocmUpKTtcblxuICAgIHJldHVybiBfc2V0UHJvdG90eXBlT2YoX3RoaXMsIEJhYmVsUmVnRXhwLnByb3RvdHlwZSk7XG4gIH1cblxuICBfaW5oZXJpdHMoQmFiZWxSZWdFeHAsIFJlZ0V4cCk7XG5cbiAgQmFiZWxSZWdFeHAucHJvdG90eXBlLmV4ZWMgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgdmFyIHJlc3VsdCA9IF9zdXBlci5leGVjLmNhbGwodGhpcywgc3RyKTtcblxuICAgIGlmIChyZXN1bHQpIHJlc3VsdC5ncm91cHMgPSBidWlsZEdyb3VwcyhyZXN1bHQsIHRoaXMpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgQmFiZWxSZWdFeHAucHJvdG90eXBlW1N5bWJvbC5yZXBsYWNlXSA9IGZ1bmN0aW9uIChzdHIsIHN1YnN0aXR1dGlvbikge1xuICAgIGlmICh0eXBlb2Ygc3Vic3RpdHV0aW9uID09PSBcInN0cmluZ1wiKSB7XG4gICAgICB2YXIgZ3JvdXBzID0gX2dyb3Vwcy5nZXQodGhpcyk7XG5cbiAgICAgIHJldHVybiBfc3VwZXJbU3ltYm9sLnJlcGxhY2VdLmNhbGwodGhpcywgc3RyLCBzdWJzdGl0dXRpb24ucmVwbGFjZSgvXFwkPChbXj5dKyk+L2csIGZ1bmN0aW9uIChfLCBuYW1lKSB7XG4gICAgICAgIHJldHVybiBcIiRcIiArIGdyb3Vwc1tuYW1lXTtcbiAgICAgIH0pKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBzdWJzdGl0dXRpb24gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgcmV0dXJuIF9zdXBlcltTeW1ib2wucmVwbGFjZV0uY2FsbCh0aGlzLCBzdHIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICBhcmdzID0gW10uc2xpY2UuY2FsbChhcmdzKTtcbiAgICAgICAgICBhcmdzLnB1c2goYnVpbGRHcm91cHMoYXJncywgX3RoaXMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWJzdGl0dXRpb24uYXBwbHkodGhpcywgYXJncyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIF9zdXBlcltTeW1ib2wucmVwbGFjZV0uY2FsbCh0aGlzLCBzdHIsIHN1YnN0aXR1dGlvbik7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIGJ1aWxkR3JvdXBzKHJlc3VsdCwgcmUpIHtcbiAgICB2YXIgZyA9IF9ncm91cHMuZ2V0KHJlKTtcblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhnKS5yZWR1Y2UoZnVuY3Rpb24gKGdyb3VwcywgbmFtZSkge1xuICAgICAgZ3JvdXBzW25hbWVdID0gcmVzdWx0W2dbbmFtZV1dO1xuICAgICAgcmV0dXJuIGdyb3VwcztcbiAgICB9LCBPYmplY3QuY3JlYXRlKG51bGwpKTtcbiAgfVxuXG4gIHJldHVybiBfd3JhcFJlZ0V4cC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG4vKipcbiAqIFN0YXRpYyB1dGlsaXR5IGZ1bmN0aW9ucyB1c2VkIHRocm91Z2hvdXQgdGhlIGxpYnJhcnkuXG4gKi9cblxudmFyIFV0aWxzID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVXRpbHMoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFV0aWxzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhVdGlscywgbnVsbCwgW3tcbiAgICBrZXk6IFwidmVyc2lvblwiLFxuICAgIHZhbHVlOlxuICAgIC8qKlxuICAgICAqIEdldHMgTWlkaVdyaXRlckpTIHZlcnNpb24gbnVtYmVyLlxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiB2ZXJzaW9uKCkge1xuICAgICAgcmV0dXJuIENvbnN0YW50cy5WRVJTSU9OO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IGEgc3RyaW5nIHRvIGFuIGFycmF5IG9mIGJ5dGVzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuICAgICAqIEByZXR1cm4ge2FycmF5fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3RyaW5nVG9CeXRlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdHJpbmdUb0J5dGVzKHN0cmluZykge1xuICAgICAgcmV0dXJuIHN0cmluZy5zcGxpdCgnJykubWFwKGZ1bmN0aW9uIChfY2hhcikge1xuICAgICAgICByZXR1cm4gX2NoYXIuY2hhckNvZGVBdCgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiBhcmd1bWVudCBpcyBhIHZhbGlkIG51bWJlci5cbiAgICAgKiBAcGFyYW0geyp9IG4gLSBWYWx1ZSB0byBjaGVja1xuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpc051bWVyaWNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNOdW1lcmljKG4pIHtcbiAgICAgIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdChuKSkgJiYgaXNGaW5pdGUobik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNvcnJlY3QgTUlESSBudW1iZXIgZm9yIHRoZSBzcGVjaWZpZWQgcGl0Y2guXG4gICAgICogVXNlcyBUb25hbCBNaWRpIC0gaHR0cHM6Ly9naXRodWIuY29tL2RhbmlnYi90b25hbC90cmVlL21hc3Rlci9wYWNrYWdlcy9taWRpXG4gICAgICogQHBhcmFtIHsoc3RyaW5nfG51bWJlcil9IHBpdGNoIC0gJ0MjNCcgb3IgbWlkaSBub3RlIGNvZGVcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRQaXRjaFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQaXRjaChwaXRjaCkge1xuICAgICAgcmV0dXJuIHRvbmFsTWlkaS50b01pZGkocGl0Y2gpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUcmFuc2xhdGVzIG51bWJlciBvZiB0aWNrcyB0byBNSURJIHRpbWVzdGFtcCBmb3JtYXQsIHJldHVybmluZyBhbiBhcnJheSBvZlxuICAgICAqIGhleCBzdHJpbmdzIHdpdGggdGhlIHRpbWUgdmFsdWVzLiBNaWRpIGhhcyBhIHZlcnkgcGFydGljdWxhciB0aW1lIHRvIGV4cHJlc3MgdGltZSxcbiAgICAgKiB0YWtlIGEgZ29vZCBsb29rIGF0IHRoZSBzcGVjIGJlZm9yZSBldmVyIHRvdWNoaW5nIHRoaXMgZnVuY3Rpb24uXG4gICAgICogVGhhbmtzIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9zZXJnaS9qc21pZGlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aWNrcyAtIE51bWJlciBvZiB0aWNrcyB0byBiZSB0cmFuc2xhdGVkXG4gICAgICogQHJldHVybiB7YXJyYXl9IC0gQnl0ZXMgdGhhdCBmb3JtIHRoZSBNSURJIHRpbWUgdmFsdWVcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm51bWJlclRvVmFyaWFibGVMZW5ndGhcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0aWNrcykge1xuICAgICAgdGlja3MgPSBNYXRoLnJvdW5kKHRpY2tzKTtcbiAgICAgIHZhciBidWZmZXIgPSB0aWNrcyAmIDB4N0Y7XG5cbiAgICAgIHdoaWxlICh0aWNrcyA9IHRpY2tzID4+IDcpIHtcbiAgICAgICAgYnVmZmVyIDw8PSA4O1xuICAgICAgICBidWZmZXIgfD0gdGlja3MgJiAweDdGIHwgMHg4MDtcbiAgICAgIH1cblxuICAgICAgdmFyIGJMaXN0ID0gW107XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGJMaXN0LnB1c2goYnVmZmVyICYgMHhmZik7XG4gICAgICAgIGlmIChidWZmZXIgJiAweDgwKSBidWZmZXIgPj49IDg7ZWxzZSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGJMaXN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb3VudHMgbnVtYmVyIG9mIGJ5dGVzIGluIHN0cmluZ1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzXG4gICAgICogQHJldHVybiB7YXJyYXl9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzdHJpbmdCeXRlQ291bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RyaW5nQnl0ZUNvdW50KHMpIHtcbiAgICAgIHJldHVybiBlbmNvZGVVUkkocykuc3BsaXQoLyUuLnwuLykubGVuZ3RoIC0gMTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IGFuIGludCBmcm9tIGFuIGFycmF5IG9mIGJ5dGVzLlxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGJ5dGVzXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibnVtYmVyRnJvbUJ5dGVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG51bWJlckZyb21CeXRlcyhieXRlcykge1xuICAgICAgdmFyIGhleCA9ICcnO1xuICAgICAgdmFyIHN0cmluZ1Jlc3VsdDtcbiAgICAgIGJ5dGVzLmZvckVhY2goZnVuY3Rpb24gKF9ieXRlKSB7XG4gICAgICAgIHN0cmluZ1Jlc3VsdCA9IF9ieXRlLnRvU3RyaW5nKDE2KTsgLy8gZW5zdXJlIHN0cmluZyBpcyAyIGNoYXJzXG5cbiAgICAgICAgaWYgKHN0cmluZ1Jlc3VsdC5sZW5ndGggPT0gMSkgc3RyaW5nUmVzdWx0ID0gXCIwXCIgKyBzdHJpbmdSZXN1bHQ7XG4gICAgICAgIGhleCArPSBzdHJpbmdSZXN1bHQ7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBwYXJzZUludChoZXgsIDE2KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGFrZXMgYSBudW1iZXIgYW5kIHNwbGl0cyBpdCB1cCBpbnRvIGFuIGFycmF5IG9mIGJ5dGVzLiAgQ2FuIGJlIHBhZGRlZCBieSBwYXNzaW5nIGEgbnVtYmVyIHRvIGJ5dGVzTmVlZGVkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG51bWJlclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBieXRlc05lZWRlZFxuICAgICAqIEByZXR1cm4ge2FycmF5fSAtIEFycmF5IG9mIGJ5dGVzXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJudW1iZXJUb0J5dGVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG51bWJlclRvQnl0ZXMobnVtYmVyLCBieXRlc05lZWRlZCkge1xuICAgICAgYnl0ZXNOZWVkZWQgPSBieXRlc05lZWRlZCB8fCAxO1xuICAgICAgdmFyIGhleFN0cmluZyA9IG51bWJlci50b1N0cmluZygxNik7XG5cbiAgICAgIGlmIChoZXhTdHJpbmcubGVuZ3RoICYgMSkge1xuICAgICAgICAvLyBNYWtlIHN1cmUgaGV4IHN0cmluZyBpcyBldmVuIG51bWJlciBvZiBjaGFyc1xuICAgICAgICBoZXhTdHJpbmcgPSAnMCcgKyBoZXhTdHJpbmc7XG4gICAgICB9IC8vIFNwbGl0IGhleCBzdHJpbmcgaW50byBhbiBhcnJheSBvZiB0d28gY2hhciBlbGVtZW50c1xuXG5cbiAgICAgIHZhciBoZXhBcnJheSA9IGhleFN0cmluZy5tYXRjaCgvLnsyfS9nKTsgLy8gTm93IHBhcnNlIHRoZW0gb3V0IGFzIGludGVnZXJzXG5cbiAgICAgIGhleEFycmF5ID0gaGV4QXJyYXkubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludChpdGVtLCAxNik7XG4gICAgICB9KTsgLy8gUHJlcGVuZCBlbXB0eSBieXRlcyBpZiB3ZSBkb24ndCBoYXZlIGVub3VnaFxuXG4gICAgICBpZiAoaGV4QXJyYXkubGVuZ3RoIDwgYnl0ZXNOZWVkZWQpIHtcbiAgICAgICAgd2hpbGUgKGJ5dGVzTmVlZGVkIC0gaGV4QXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGhleEFycmF5LnVuc2hpZnQoMCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGhleEFycmF5O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyB2YWx1ZSB0byBhcnJheSBpZiBuZWVkZWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAgICogQHJldHVybiB7YXJyYXl9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ0b0FycmF5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvQXJyYXkodmFsdWUpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgICAgcmV0dXJuIFt2YWx1ZV07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIHZlbG9jaXR5IHRvIHZhbHVlIDAtMTI3XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZlbG9jaXR5IC0gVmVsb2NpdHkgdmFsdWUgMS0xMDBcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjb252ZXJ0VmVsb2NpdHlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29udmVydFZlbG9jaXR5KHZlbG9jaXR5KSB7XG4gICAgICAvLyBNYXggcGFzc2VkIHZhbHVlIGxpbWl0ZWQgdG8gMTAwXG4gICAgICB2ZWxvY2l0eSA9IHZlbG9jaXR5ID4gMTAwID8gMTAwIDogdmVsb2NpdHk7XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZCh2ZWxvY2l0eSAvIDEwMCAqIDEyNyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHRvdGFsIG51bWJlciBvZiB0aWNrcyBvZiBhIHNwZWNpZmllZCBkdXJhdGlvbi5cbiAgICAgKiBOb3RlOiB0eXBlPT0nbm90ZScgZGVmYXVsdHMgdG8gcXVhcnRlciBub3RlLCB0eXBlPT09J3Jlc3QnIGRlZmF1bHRzIHRvIDBcbiAgICAgKiBAcGFyYW0geyhzdHJpbmd8YXJyYXkpfSBkdXJhdGlvblxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFRpY2tEdXJhdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUaWNrRHVyYXRpb24oZHVyYXRpb24pIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGR1cmF0aW9uKSkge1xuICAgICAgICAvLyBSZWN1cnNpdmVseSBleGVjdXRlIHRoaXMgbWV0aG9kIGZvciBlYWNoIGl0ZW0gaW4gdGhlIGFycmF5IGFuZCByZXR1cm4gdGhlIHN1bSBvZiB0aWNrIGR1cmF0aW9ucy5cbiAgICAgICAgcmV0dXJuIGR1cmF0aW9uLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gVXRpbHMuZ2V0VGlja0R1cmF0aW9uKHZhbHVlKTtcbiAgICAgICAgfSkucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgcmV0dXJuIGEgKyBiO1xuICAgICAgICB9LCAwKTtcbiAgICAgIH1cblxuICAgICAgZHVyYXRpb24gPSBkdXJhdGlvbi50b1N0cmluZygpO1xuXG4gICAgICBpZiAoZHVyYXRpb24udG9Mb3dlckNhc2UoKS5jaGFyQXQoMCkgPT09ICd0Jykge1xuICAgICAgICAvLyBJZiBkdXJhdGlvbiBzdGFydHMgd2l0aCAndCcgdGhlbiB0aGUgbnVtYmVyIHRoYXQgZm9sbG93cyBpcyBhbiBleHBsaWNpdCB0aWNrIGNvdW50XG4gICAgICAgIHJldHVybiBwYXJzZUludChkdXJhdGlvbi5zdWJzdHJpbmcoMSkpO1xuICAgICAgfSAvLyBOZWVkIHRvIGFwcGx5IGR1cmF0aW9uIGhlcmUuICBRdWFydGVyIG5vdGUgPT0gQ29uc3RhbnRzLkhFQURFUl9DSFVOS19ESVZJU0lPTlxuXG5cbiAgICAgIHZhciBxdWFydGVyVGlja3MgPSBVdGlscy5udW1iZXJGcm9tQnl0ZXMoQ29uc3RhbnRzLkhFQURFUl9DSFVOS19ESVZJU0lPTik7XG4gICAgICB2YXIgdGlja0R1cmF0aW9uID0gcXVhcnRlclRpY2tzICogVXRpbHMuZ2V0RHVyYXRpb25NdWx0aXBsaWVyKGR1cmF0aW9uKTtcbiAgICAgIHJldHVybiBVdGlscy5nZXRSb3VuZGVkSWZDbG9zZSh0aWNrRHVyYXRpb24pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEdWUgdG8gcm91bmRpbmcgZXJyb3JzIGluIEphdmFTY3JpcHQgZW5naW5lcyxcbiAgICAgKiBpdCdzIHNhZmUgdG8gcm91bmQgd2hlbiB3ZSdyZSB2ZXJ5IGNsb3NlIHRvIHRoZSBhY3R1YWwgdGljayBudW1iZXJcbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGlja1xuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFJvdW5kZWRJZkNsb3NlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJvdW5kZWRJZkNsb3NlKHRpY2spIHtcbiAgICAgIHZhciByb3VuZGVkVGljayA9IE1hdGgucm91bmQodGljayk7XG4gICAgICByZXR1cm4gTWF0aC5hYnMocm91bmRlZFRpY2sgLSB0aWNrKSA8IDAuMDAwMDAxID8gcm91bmRlZFRpY2sgOiB0aWNrO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEdWUgdG8gbG93IHByZWNpc2lvbiBvZiBNSURJLFxuICAgICAqIHdlIG5lZWQgdG8ga2VlcCB0cmFjayBvZiByb3VuZGluZyBlcnJvcnMgaW4gZGVsdGFzLlxuICAgICAqIFRoaXMgZnVuY3Rpb24gd2lsbCBjYWxjdWxhdGUgdGhlIHJvdW5kaW5nIGVycm9yIGZvciBhIGdpdmVuIGR1cmF0aW9uLlxuICAgICAqXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aWNrXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0UHJlY2lzaW9uTG9zc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQcmVjaXNpb25Mb3NzKHRpY2spIHtcbiAgICAgIHZhciByb3VuZGVkVGljayA9IE1hdGgucm91bmQodGljayk7XG4gICAgICByZXR1cm4gcm91bmRlZFRpY2sgLSB0aWNrO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHdoYXQgdG8gbXVsdGlwbGUgdGlja3MvcXVhcnRlciBub3RlIGJ5IHRvIGdldCB0aGUgc3BlY2lmaWVkIGR1cmF0aW9uLlxuICAgICAqIE5vdGU6IHR5cGU9PSdub3RlJyBkZWZhdWx0cyB0byBxdWFydGVyIG5vdGUsIHR5cGU9PT0ncmVzdCcgZGVmYXVsdHMgdG8gMFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkdXJhdGlvblxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldER1cmF0aW9uTXVsdGlwbGllclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREdXJhdGlvbk11bHRpcGxpZXIoZHVyYXRpb24pIHtcbiAgICAgIC8vIE5lZWQgdG8gYXBwbHkgZHVyYXRpb24gaGVyZS5cbiAgICAgIC8vIFF1YXJ0ZXIgbm90ZSA9PSBDb25zdGFudHMuSEVBREVSX0NIVU5LX0RJVklTSU9OIHRpY2tzLlxuICAgICAgaWYgKGR1cmF0aW9uID09PSAnMCcpIHJldHVybiAwO1xuICAgICAgdmFyIG1hdGNoID0gZHVyYXRpb24ubWF0Y2goIC8qI19fUFVSRV9fKi9fd3JhcFJlZ0V4cCgvXihkKyk/KFswLTldKykoPzp0KFswLTldKikpPy8sIHtcbiAgICAgICAgZG90dGVkOiAxLFxuICAgICAgICBiYXNlOiAyLFxuICAgICAgICB0dXBsZXQ6IDNcbiAgICAgIH0pKTtcblxuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHZhciBiYXNlID0gTnVtYmVyKG1hdGNoLmdyb3Vwcy5iYXNlKTsgLy8gMSBvciBhbnkgcG93ZXIgb2YgdHdvOlxuXG4gICAgICAgIHZhciBpc1ZhbGlkQmFzZSA9IGJhc2UgPT09IDEgfHwgKGJhc2UgJiBiYXNlIC0gMSkgPT09IDA7XG5cbiAgICAgICAgaWYgKGlzVmFsaWRCYXNlKSB7XG4gICAgICAgICAgLy8gaG93IG11Y2ggZmFzdGVyIG9yIHNsb3dlciBpcyB0aGlzIG5vdGUgY29tcGFyZWQgdG8gYSBxdWFydGVyP1xuICAgICAgICAgIHZhciByYXRpbyA9IGJhc2UgLyA0O1xuICAgICAgICAgIHZhciBkdXJhdGlvbkluUXVhcnRlcnMgPSAxIC8gcmF0aW87XG4gICAgICAgICAgdmFyIF9tYXRjaCRncm91cHMgPSBtYXRjaC5ncm91cHMsXG4gICAgICAgICAgICAgIGRvdHRlZCA9IF9tYXRjaCRncm91cHMuZG90dGVkLFxuICAgICAgICAgICAgICB0dXBsZXQgPSBfbWF0Y2gkZ3JvdXBzLnR1cGxldDtcblxuICAgICAgICAgIGlmIChkb3R0ZWQpIHtcbiAgICAgICAgICAgIHZhciB0aGlzTWFueURvdHMgPSBkb3R0ZWQubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIGRpdmlzb3IgPSBNYXRoLnBvdygyLCB0aGlzTWFueURvdHMpO1xuICAgICAgICAgICAgZHVyYXRpb25JblF1YXJ0ZXJzID0gZHVyYXRpb25JblF1YXJ0ZXJzICsgZHVyYXRpb25JblF1YXJ0ZXJzICogKChkaXZpc29yIC0gMSkgLyBkaXZpc29yKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mIHR1cGxldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHZhciBmaXRJbnRvID0gZHVyYXRpb25JblF1YXJ0ZXJzICogMjsgLy8gZGVmYXVsdCB0byB0cmlwbGV0OlxuXG4gICAgICAgICAgICB2YXIgdGhpc01hbnlOb3RlcyA9IE51bWJlcih0dXBsZXQgfHwgJzMnKTtcbiAgICAgICAgICAgIGR1cmF0aW9uSW5RdWFydGVycyA9IGZpdEludG8gLyB0aGlzTWFueU5vdGVzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBkdXJhdGlvbkluUXVhcnRlcnM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IEVycm9yKGR1cmF0aW9uICsgJyBpcyBub3QgYSB2YWxpZCBkdXJhdGlvbi4nKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVXRpbHM7XG59KCk7XG5cbi8qKlxuICogSG9sZHMgYWxsIGRhdGEgZm9yIGEgXCJub3RlIG9uXCIgTUlESSBldmVudFxuICogQHBhcmFtIHtvYmplY3R9IGZpZWxkcyB7ZGF0YTogW119XG4gKiBAcmV0dXJuIHtOb3RlT25FdmVudH1cbiAqL1xuXG52YXIgTm90ZU9uRXZlbnQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBOb3RlT25FdmVudChmaWVsZHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTm90ZU9uRXZlbnQpO1xuXG4gICAgLy8gU2V0IGRlZmF1bHQgZmllbGRzXG4gICAgZmllbGRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjaGFubmVsOiAxLFxuICAgICAgc3RhcnRUaWNrOiBudWxsLFxuICAgICAgdmVsb2NpdHk6IDUwLFxuICAgICAgd2FpdDogMFxuICAgIH0sIGZpZWxkcyk7XG4gICAgdGhpcy50eXBlID0gJ25vdGUtb24nO1xuICAgIHRoaXMuY2hhbm5lbCA9IGZpZWxkcy5jaGFubmVsO1xuICAgIHRoaXMucGl0Y2ggPSBmaWVsZHMucGl0Y2g7XG4gICAgdGhpcy53YWl0ID0gZmllbGRzLndhaXQ7XG4gICAgdGhpcy52ZWxvY2l0eSA9IGZpZWxkcy52ZWxvY2l0eTtcbiAgICB0aGlzLnN0YXJ0VGljayA9IGZpZWxkcy5zdGFydFRpY2s7XG4gICAgdGhpcy5taWRpTnVtYmVyID0gVXRpbHMuZ2V0UGl0Y2godGhpcy5waXRjaCk7XG4gICAgdGhpcy50aWNrID0gbnVsbDtcbiAgICB0aGlzLmRlbHRhID0gbnVsbDtcbiAgICB0aGlzLmRhdGEgPSBmaWVsZHMuZGF0YTtcbiAgfVxuICAvKipcbiAgICogQnVpbGRzIGludCBhcnJheSBmb3IgdGhpcyBldmVudC5cbiAgICogQHBhcmFtIHtUcmFja30gdHJhY2sgLSBwYXJlbnQgdHJhY2tcbiAgICogQHJldHVybiB7Tm90ZU9uRXZlbnR9XG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKE5vdGVPbkV2ZW50LCBbe1xuICAgIGtleTogXCJidWlsZERhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYnVpbGREYXRhKHRyYWNrLCBwcmVjaXNpb25EZWx0YSkge1xuICAgICAgdGhpcy5kYXRhID0gW107IC8vIEV4cGxpY2l0bHkgZGVmaW5lZCBzdGFydFRpY2sgZXZlbnRcblxuICAgICAgaWYgKHRoaXMuc3RhcnRUaWNrKSB7XG4gICAgICAgIHRoaXMudGljayA9IFV0aWxzLmdldFJvdW5kZWRJZkNsb3NlKHRoaXMuc3RhcnRUaWNrKTsgLy8gSWYgdGhpcyBpcyB0aGUgZmlyc3QgZXZlbnQgaW4gdGhlIHRyYWNrIHRoZW4gdXNlIGV2ZW50J3Mgc3RhcnRpbmcgdGljayBhcyBkZWx0YS5cblxuICAgICAgICBpZiAodHJhY2sudGlja1BvaW50ZXIgPT0gMCkge1xuICAgICAgICAgIHRoaXMuZGVsdGEgPSB0aGlzLnRpY2s7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGVsdGEgPSBVdGlscy5nZXRUaWNrRHVyYXRpb24odGhpcy53YWl0KTtcbiAgICAgICAgdGhpcy50aWNrID0gVXRpbHMuZ2V0Um91bmRlZElmQ2xvc2UodHJhY2sudGlja1BvaW50ZXIgKyB0aGlzLmRlbHRhKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kZWx0YVdpdGhQcmVjaXNpb25Db3JyZWN0aW9uID0gVXRpbHMuZ2V0Um91bmRlZElmQ2xvc2UodGhpcy5kZWx0YSAtIHByZWNpc2lvbkRlbHRhKTtcbiAgICAgIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgodGhpcy5kZWx0YVdpdGhQcmVjaXNpb25Db3JyZWN0aW9uKS5jb25jYXQodGhpcy5nZXRTdGF0dXNCeXRlKCksIHRoaXMubWlkaU51bWJlciwgVXRpbHMuY29udmVydFZlbG9jaXR5KHRoaXMudmVsb2NpdHkpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBub3RlIG9uIHN0YXR1cyBjb2RlIGJhc2VkIG9uIHRoZSBzZWxlY3RlZCBjaGFubmVsLiAweDl7MC1GfVxuICAgICAqIE5vdGUgb24gYXQgY2hhbm5lbCAwIGlzIDB4OTAgKDE0NClcbiAgICAgKiAwID0gQ2ggMVxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFN0YXR1c0J5dGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U3RhdHVzQnl0ZSgpIHtcbiAgICAgIHJldHVybiAxNDQgKyB0aGlzLmNoYW5uZWwgLSAxO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBOb3RlT25FdmVudDtcbn0oKTtcblxuLyoqXG4gKiBIb2xkcyBhbGwgZGF0YSBmb3IgYSBcIm5vdGUgb2ZmXCIgTUlESSBldmVudFxuICogQHBhcmFtIHtvYmplY3R9IGZpZWxkcyB7ZGF0YTogW119XG4gKiBAcmV0dXJuIHtOb3RlT2ZmRXZlbnR9XG4gKi9cblxudmFyIE5vdGVPZmZFdmVudCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE5vdGVPZmZFdmVudChmaWVsZHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTm90ZU9mZkV2ZW50KTtcblxuICAgIC8vIFNldCBkZWZhdWx0IGZpZWxkc1xuICAgIGZpZWxkcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2hhbm5lbDogMSxcbiAgICAgIHZlbG9jaXR5OiA1MCxcbiAgICAgIHRpY2s6IG51bGxcbiAgICB9LCBmaWVsZHMpO1xuICAgIHRoaXMudHlwZSA9ICdub3RlLW9mZic7XG4gICAgdGhpcy5jaGFubmVsID0gZmllbGRzLmNoYW5uZWw7XG4gICAgdGhpcy5waXRjaCA9IGZpZWxkcy5waXRjaDtcbiAgICB0aGlzLmR1cmF0aW9uID0gZmllbGRzLmR1cmF0aW9uO1xuICAgIHRoaXMudmVsb2NpdHkgPSBmaWVsZHMudmVsb2NpdHk7XG4gICAgdGhpcy5taWRpTnVtYmVyID0gVXRpbHMuZ2V0UGl0Y2godGhpcy5waXRjaCk7XG4gICAgdGhpcy50aWNrID0gZmllbGRzLnRpY2s7XG4gICAgdGhpcy5kZWx0YSA9IFV0aWxzLmdldFRpY2tEdXJhdGlvbih0aGlzLmR1cmF0aW9uKTtcbiAgICB0aGlzLmRhdGEgPSBmaWVsZHMuZGF0YTtcbiAgfVxuICAvKipcbiAgICogQnVpbGRzIGludCBhcnJheSBmb3IgdGhpcyBldmVudC5cbiAgICogQHBhcmFtIHtUcmFja30gdHJhY2sgLSBwYXJlbnQgdHJhY2tcbiAgICogQHJldHVybiB7Tm90ZU9mZkV2ZW50fVxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhOb3RlT2ZmRXZlbnQsIFt7XG4gICAga2V5OiBcImJ1aWxkRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBidWlsZERhdGEodHJhY2ssIHByZWNpc2lvbkRlbHRhKSB7XG4gICAgICBpZiAodGhpcy50aWNrID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMudGljayA9IFV0aWxzLmdldFJvdW5kZWRJZkNsb3NlKHRoaXMuZGVsdGEgKyB0cmFjay50aWNrUG9pbnRlcik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGVsdGFXaXRoUHJlY2lzaW9uQ29ycmVjdGlvbiA9IFV0aWxzLmdldFJvdW5kZWRJZkNsb3NlKHRoaXMuZGVsdGEgLSBwcmVjaXNpb25EZWx0YSk7XG4gICAgICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRoaXMuZGVsdGFXaXRoUHJlY2lzaW9uQ29ycmVjdGlvbikuY29uY2F0KHRoaXMuZ2V0U3RhdHVzQnl0ZSgpLCB0aGlzLm1pZGlOdW1iZXIsIFV0aWxzLmNvbnZlcnRWZWxvY2l0eSh0aGlzLnZlbG9jaXR5KSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgbm90ZSBvZmYgc3RhdHVzIGNvZGUgYmFzZWQgb24gdGhlIHNlbGVjdGVkIGNoYW5uZWwuIDB4OHswLUZ9XG4gICAgICogTm90ZSBvZmYgYXQgY2hhbm5lbCAwIGlzIDB4ODAgKDEyOClcbiAgICAgKiAwID0gQ2ggMVxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFN0YXR1c0J5dGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U3RhdHVzQnl0ZSgpIHtcbiAgICAgIHJldHVybiAxMjggKyB0aGlzLmNoYW5uZWwgLSAxO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBOb3RlT2ZmRXZlbnQ7XG59KCk7XG5cbi8qKlxuICogV3JhcHBlciBmb3Igbm90ZU9uRXZlbnQvbm90ZU9mZkV2ZW50IG9iamVjdHMgdGhhdCBidWlsZHMgYm90aCBldmVudHMuXG4gKiBAcGFyYW0ge29iamVjdH0gZmllbGRzIC0ge3BpdGNoOiAnW0M0XScsIGR1cmF0aW9uOiAnNCcsIHdhaXQ6ICc0JywgdmVsb2NpdHk6IDEtMTAwfVxuICogQHJldHVybiB7Tm90ZUV2ZW50fVxuICovXG5cbnZhciBOb3RlRXZlbnQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBOb3RlRXZlbnQoZmllbGRzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5vdGVFdmVudCk7XG5cbiAgICAvLyBTZXQgZGVmYXVsdCBmaWVsZHNcbiAgICBmaWVsZHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNoYW5uZWw6IDEsXG4gICAgICByZXBlYXQ6IDEsXG4gICAgICBzZXF1ZW50aWFsOiBmYWxzZSxcbiAgICAgIHN0YXJ0VGljazogbnVsbCxcbiAgICAgIHZlbG9jaXR5OiA1MCxcbiAgICAgIHdhaXQ6IDBcbiAgICB9LCBmaWVsZHMpO1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIHRoaXMudHlwZSA9ICdub3RlJztcbiAgICB0aGlzLnBpdGNoID0gVXRpbHMudG9BcnJheShmaWVsZHMucGl0Y2gpO1xuICAgIHRoaXMuY2hhbm5lbCA9IGZpZWxkcy5jaGFubmVsO1xuICAgIHRoaXMuZHVyYXRpb24gPSBmaWVsZHMuZHVyYXRpb247XG4gICAgdGhpcy5ncmFjZSA9IGZpZWxkcy5ncmFjZTtcbiAgICB0aGlzLnJlcGVhdCA9IGZpZWxkcy5yZXBlYXQ7XG4gICAgdGhpcy5zZXF1ZW50aWFsID0gZmllbGRzLnNlcXVlbnRpYWw7XG4gICAgdGhpcy5zdGFydFRpY2sgPSBmaWVsZHMuc3RhcnRUaWNrO1xuICAgIHRoaXMudmVsb2NpdHkgPSBmaWVsZHMudmVsb2NpdHk7XG4gICAgdGhpcy53YWl0ID0gZmllbGRzLndhaXQ7XG4gICAgdGhpcy50aWNrRHVyYXRpb24gPSBVdGlscy5nZXRUaWNrRHVyYXRpb24odGhpcy5kdXJhdGlvbik7XG4gICAgdGhpcy5yZXN0RHVyYXRpb24gPSBVdGlscy5nZXRUaWNrRHVyYXRpb24odGhpcy53YWl0KTtcbiAgICB0aGlzLmV2ZW50cyA9IFtdOyAvLyBIb2xkIGFjdHVhbCBOb3RlT24vTm90ZU9mZiBldmVudHNcbiAgfVxuICAvKipcbiAgICogQnVpbGRzIGludCBhcnJheSBmb3IgdGhpcyBldmVudC5cbiAgICogQHJldHVybiB7Tm90ZUV2ZW50fVxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhOb3RlRXZlbnQsIFt7XG4gICAga2V5OiBcImJ1aWxkRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBidWlsZERhdGEoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAvLyBSZXNldCBkYXRhIGFycmF5XG4gICAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICAgIHRoaXMudGlja0R1cmF0aW9uO1xuICAgICAgdGhpcy5yZXN0RHVyYXRpb247IC8vIEFwcGx5IGdyYWNlIG5vdGUocykgYW5kIHN1YnRyYWN0IHRpY2tzIChjdXJyZW50bHkgMSB0aWNrIHBlciBncmFjZSBub3RlKSBmcm9tIHRpY2tEdXJhdGlvbiBzbyBuZXQgdmFsdWUgaXMgdGhlIHNhbWVcblxuICAgICAgaWYgKHRoaXMuZ3JhY2UpIHtcbiAgICAgICAgdmFyIGdyYWNlRHVyYXRpb24gPSAxO1xuICAgICAgICB0aGlzLmdyYWNlID0gVXRpbHMudG9BcnJheSh0aGlzLmdyYWNlKTtcbiAgICAgICAgdGhpcy5ncmFjZS5mb3JFYWNoKGZ1bmN0aW9uIChwaXRjaCkge1xuICAgICAgICAgIHZhciBub3RlRXZlbnQgPSBuZXcgTm90ZUV2ZW50KHtcbiAgICAgICAgICAgIHBpdGNoOiBfdGhpcy5ncmFjZSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAnVCcgKyBncmFjZUR1cmF0aW9uXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgX3RoaXMuZGF0YSA9IF90aGlzLmRhdGEuY29uY2F0KG5vdGVFdmVudC5kYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICB9IC8vIGZpZWxkcy5waXRjaCBjb3VsZCBiZSBhbiBhcnJheSBvZiBwaXRjaGVzLlxuICAgICAgLy8gSWYgdGhpcy5zZXF1ZW50aWFsID09PSB0cnVlIHRoZW4gaXQncyBhIHNlcXVlbnRpYWwgc3RyaW5nIG9mIG5vdGVzIHRoYXQgcmVxdWlyZXMgc2VwYXJhdGUgTm90ZU9uRXZlbnRzLlxuXG4gICAgICBpZiAoIXRoaXMuc2VxdWVudGlhbCkge1xuICAgICAgICAvLyBIYW5kbGUgcmVwZWF0XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5yZXBlYXQ7IGorKykge1xuICAgICAgICAgIC8vIE5vdGUgb25cbiAgICAgICAgICB0aGlzLnBpdGNoLmZvckVhY2goZnVuY3Rpb24gKHAsIGkpIHtcbiAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgdmFyIG5vdGVPbk5ldyA9IG5ldyBOb3RlT25FdmVudCh7XG4gICAgICAgICAgICAgICAgY2hhbm5lbDogX3RoaXMuY2hhbm5lbCxcbiAgICAgICAgICAgICAgICB3YWl0OiBfdGhpcy53YWl0LFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5OiBfdGhpcy52ZWxvY2l0eSxcbiAgICAgICAgICAgICAgICBwaXRjaDogcCxcbiAgICAgICAgICAgICAgICBzdGFydFRpY2s6IF90aGlzLnN0YXJ0VGlja1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFJ1bm5pbmcgc3RhdHVzIChjYW4gb21taXQgdGhlIG5vdGUgb24gc3RhdHVzKVxuICAgICAgICAgICAgICAvL25vdGVPbiA9IG5ldyBOb3RlT25FdmVudCh7ZGF0YTogWzAsIFV0aWxzLmdldFBpdGNoKHApLCBVdGlscy5jb252ZXJ0VmVsb2NpdHkodGhpcy52ZWxvY2l0eSldfSk7XG4gICAgICAgICAgICAgIHZhciBub3RlT25OZXcgPSBuZXcgTm90ZU9uRXZlbnQoe1xuICAgICAgICAgICAgICAgIGNoYW5uZWw6IF90aGlzLmNoYW5uZWwsXG4gICAgICAgICAgICAgICAgd2FpdDogMCxcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eTogX3RoaXMudmVsb2NpdHksXG4gICAgICAgICAgICAgICAgcGl0Y2g6IHAsXG4gICAgICAgICAgICAgICAgc3RhcnRUaWNrOiBfdGhpcy5zdGFydFRpY2tcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF90aGlzLmV2ZW50cy5wdXNoKG5vdGVPbk5ldyk7XG4gICAgICAgICAgfSk7IC8vIE5vdGUgb2ZmXG5cbiAgICAgICAgICB0aGlzLnBpdGNoLmZvckVhY2goZnVuY3Rpb24gKHAsIGkpIHtcbiAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgLy9ub3RlT2ZmID0gbmV3IE5vdGVPZmZFdmVudCh7ZGF0YTogVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0aWNrRHVyYXRpb24pLmNvbmNhdCh0aGlzLmdldE5vdGVPZmZTdGF0dXMoKSwgVXRpbHMuZ2V0UGl0Y2gocCksIFV0aWxzLmNvbnZlcnRWZWxvY2l0eSh0aGlzLnZlbG9jaXR5KSl9KTtcbiAgICAgICAgICAgICAgdmFyIG5vdGVPZmZOZXcgPSBuZXcgTm90ZU9mZkV2ZW50KHtcbiAgICAgICAgICAgICAgICBjaGFubmVsOiBfdGhpcy5jaGFubmVsLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBfdGhpcy5kdXJhdGlvbixcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eTogX3RoaXMudmVsb2NpdHksXG4gICAgICAgICAgICAgICAgcGl0Y2g6IHAsXG4gICAgICAgICAgICAgICAgdGljazogX3RoaXMuc3RhcnRUaWNrICE9PSBudWxsID8gVXRpbHMuZ2V0VGlja0R1cmF0aW9uKF90aGlzLmR1cmF0aW9uKSArIF90aGlzLnN0YXJ0VGljayA6IG51bGxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBSdW5uaW5nIHN0YXR1cyAoY2FuIG9tbWl0IHRoZSBub3RlIG9mZiBzdGF0dXMpXG4gICAgICAgICAgICAgIC8vbm90ZU9mZiA9IG5ldyBOb3RlT2ZmRXZlbnQoe2RhdGE6IFswLCBVdGlscy5nZXRQaXRjaChwKSwgVXRpbHMuY29udmVydFZlbG9jaXR5KHRoaXMudmVsb2NpdHkpXX0pO1xuICAgICAgICAgICAgICB2YXIgbm90ZU9mZk5ldyA9IG5ldyBOb3RlT2ZmRXZlbnQoe1xuICAgICAgICAgICAgICAgIGNoYW5uZWw6IF90aGlzLmNoYW5uZWwsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDAsXG4gICAgICAgICAgICAgICAgdmVsb2NpdHk6IF90aGlzLnZlbG9jaXR5LFxuICAgICAgICAgICAgICAgIHBpdGNoOiBwLFxuICAgICAgICAgICAgICAgIHRpY2s6IF90aGlzLnN0YXJ0VGljayAhPT0gbnVsbCA/IFV0aWxzLmdldFRpY2tEdXJhdGlvbihfdGhpcy5kdXJhdGlvbikgKyBfdGhpcy5zdGFydFRpY2sgOiBudWxsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfdGhpcy5ldmVudHMucHVzaChub3RlT2ZmTmV3KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSGFuZGxlIHJlcGVhdFxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMucmVwZWF0OyBqKyspIHtcbiAgICAgICAgICB0aGlzLnBpdGNoLmZvckVhY2goZnVuY3Rpb24gKHAsIGkpIHtcblxuICAgICAgICAgICAgdmFyIG5vdGVPbk5ldyA9IG5ldyBOb3RlT25FdmVudCh7XG4gICAgICAgICAgICAgIGNoYW5uZWw6IF90aGlzLmNoYW5uZWwsXG4gICAgICAgICAgICAgIHdhaXQ6IGkgPiAwID8gMCA6IF90aGlzLndhaXQsXG4gICAgICAgICAgICAgIC8vIHdhaXQgb25seSBhcHBsaWVzIHRvIGZpcnN0IG5vdGUgaW4gcmVwZXRpdGlvblxuICAgICAgICAgICAgICB2ZWxvY2l0eTogX3RoaXMudmVsb2NpdHksXG4gICAgICAgICAgICAgIHBpdGNoOiBwLFxuICAgICAgICAgICAgICBzdGFydFRpY2s6IF90aGlzLnN0YXJ0VGlja1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgbm90ZU9mZk5ldyA9IG5ldyBOb3RlT2ZmRXZlbnQoe1xuICAgICAgICAgICAgICBjaGFubmVsOiBfdGhpcy5jaGFubmVsLFxuICAgICAgICAgICAgICBkdXJhdGlvbjogX3RoaXMuZHVyYXRpb24sXG4gICAgICAgICAgICAgIHZlbG9jaXR5OiBfdGhpcy52ZWxvY2l0eSxcbiAgICAgICAgICAgICAgcGl0Y2g6IHBcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBfdGhpcy5ldmVudHMucHVzaChub3RlT25OZXcsIG5vdGVPZmZOZXcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBOb3RlRXZlbnQ7XG59KCk7XG5cbi8qKlxuICogSG9sZHMgYWxsIGRhdGEgZm9yIGEgXCJQaXRjaCBCZW5kXCIgTUlESSBldmVudFxuICogWyAtMS4wLCAwLCAxLjAgXSAtPiAgWyAwLCA4MTkyLCAxNjM4M11cbiAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZHMgeyBiZW5kIDogZmxvYXQsIGNoYW5uZWwgOiBpbnQgfVxuICogQHJldHVybiB7UGl0Y2hCZW5kRXZlbnR9XG4gKi9cblxudmFyIHNjYWxlMTRiaXRzID0gZnVuY3Rpb24gc2NhbGUxNGJpdHMoemVyb09uZSkge1xuICBpZiAoemVyb09uZSA8PSAwKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoMTYzODQgKiAoemVyb09uZSArIDEpIC8gMik7XG4gIH1cblxuICByZXR1cm4gTWF0aC5mbG9vcigxNjM4MyAqICh6ZXJvT25lICsgMSkgLyAyKTtcbn07XG5cbnZhciBQaXRjaEJlbmRFdmVudCA9IGZ1bmN0aW9uIFBpdGNoQmVuZEV2ZW50KGZpZWxkcykge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGl0Y2hCZW5kRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdwaXRjaC1iZW5kJztcbiAgdmFyIGJlbmQxNCA9IHNjYWxlMTRiaXRzKGZpZWxkcy5iZW5kKTtcbiAgdmFyIGNoYW5uZWwgPSBmaWVsZHMuY2hhbm5lbCB8fCAwO1xuICB2YXIgbHNiVmFsdWUgPSBiZW5kMTQgJiAweDdmO1xuICB2YXIgbXNiVmFsdWUgPSBiZW5kMTQgPj4gNyAmIDB4N2Y7XG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5QSVRDSF9CRU5EX1NUQVRVUyB8IGNoYW5uZWwsIGxzYlZhbHVlLCBtc2JWYWx1ZSk7XG59O1xuXG4vKipcbiAqIEhvbGRzIGFsbCBkYXRhIGZvciBhIFwicHJvZ3JhbSBjaGFuZ2VcIiBNSURJIGV2ZW50XG4gKiBAcGFyYW0ge29iamVjdH0gZmllbGRzIHtpbnN0cnVtZW50OiBpbnRlZ2VyfVxuICogQHJldHVybiB7UHJvZ3JhbUNoYW5nZUV2ZW50fVxuICovXG5cbnZhciBQcm9ncmFtQ2hhbmdlRXZlbnQgPSBmdW5jdGlvbiBQcm9ncmFtQ2hhbmdlRXZlbnQoZmllbGRzKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQcm9ncmFtQ2hhbmdlRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdwcm9ncmFtJzsgLy8gZGVsdGEgdGltZSBkZWZhdWx0cyB0byAwLlxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5QUk9HUkFNX0NIQU5HRV9TVEFUVVMsIGZpZWxkcy5pbnN0cnVtZW50KTtcbn07XG5cbi8qKlxuICogSG9sZHMgYWxsIGRhdGEgZm9yIGEgXCJjb250cm9sbGVyIGNoYW5nZVwiIE1JREkgZXZlbnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZHMge2NvbnRyb2xsZXJOdW1iZXI6IGludGVnZXIsIGNvbnRyb2xsZXJWYWx1ZTogaW50ZWdlcn1cbiAqIEByZXR1cm4ge0NvbnRyb2xsZXJDaGFuZ2VFdmVudH1cbiAqL1xuXG52YXIgQ29udHJvbGxlckNoYW5nZUV2ZW50ID0gZnVuY3Rpb24gQ29udHJvbGxlckNoYW5nZUV2ZW50KGZpZWxkcykge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29udHJvbGxlckNoYW5nZUV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAnY29udHJvbGxlcic7IC8vIGRlbHRhIHRpbWUgZGVmYXVsdHMgdG8gMC5cblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuQ09OVFJPTExFUl9DSEFOR0VfU1RBVFVTLCBmaWVsZHMuY29udHJvbGxlck51bWJlciwgZmllbGRzLmNvbnRyb2xsZXJWYWx1ZSk7XG59O1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIHRlbXBvIG1ldGEgZXZlbnQuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIENvcHlyaWdodCB0ZXh0XG4gKiBAcmV0dXJuIHtDb3B5cmlnaHRFdmVudH1cbiAqL1xuXG52YXIgQ29weXJpZ2h0RXZlbnQgPSBmdW5jdGlvbiBDb3B5cmlnaHRFdmVudCh0ZXh0KSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb3B5cmlnaHRFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ2NvcHlyaWdodCc7XG4gIHZhciB0ZXh0Qnl0ZXMgPSBVdGlscy5zdHJpbmdUb0J5dGVzKHRleHQpOyAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9DT1BZUklHSFRfSUQsIFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgodGV4dEJ5dGVzLmxlbmd0aCksIC8vIFNpemVcbiAgdGV4dEJ5dGVzIC8vIFRleHRcbiAgKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgY3VlIHBvaW50IG1ldGEgZXZlbnQuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIEN1ZSBwb2ludCB0ZXh0XG4gKiBAcmV0dXJuIHtDdWVQb2ludEV2ZW50fVxuICovXG5cbnZhciBDdWVQb2ludEV2ZW50ID0gZnVuY3Rpb24gQ3VlUG9pbnRFdmVudCh0ZXh0KSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDdWVQb2ludEV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAnbWFya2VyJztcbiAgdmFyIHRleHRCeXRlcyA9IFV0aWxzLnN0cmluZ1RvQnl0ZXModGV4dCk7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX0NVRV9QT0lOVCwgVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0ZXh0Qnl0ZXMubGVuZ3RoKSwgLy8gU2l6ZVxuICB0ZXh0Qnl0ZXMgLy8gVGV4dFxuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSBlbmQgdHJhY2sgbWV0YSBldmVudC5cbiAqIEByZXR1cm4ge0VuZFRyYWNrRXZlbnR9XG4gKi9cblxudmFyIEVuZFRyYWNrRXZlbnQgPSBmdW5jdGlvbiBFbmRUcmFja0V2ZW50KCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRW5kVHJhY2tFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ2VuZC10cmFjayc7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX0VORF9PRl9UUkFDS19JRCk7XG59O1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhbiBpbnN0cnVtZW50IG5hbWUgbWV0YSBldmVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBicG0gLSBCZWF0cyBwZXIgbWludXRlXG4gKiBAcmV0dXJuIHtJbnN0cnVtZW50TmFtZUV2ZW50fVxuICovXG5cbnZhciBJbnN0cnVtZW50TmFtZUV2ZW50ID0gZnVuY3Rpb24gSW5zdHJ1bWVudE5hbWVFdmVudCh0ZXh0KSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbnN0cnVtZW50TmFtZUV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAnaW5zdHJ1bWVudC1uYW1lJztcbiAgdmFyIHRleHRCeXRlcyA9IFV0aWxzLnN0cmluZ1RvQnl0ZXModGV4dCk7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX0lOU1RSVU1FTlRfTkFNRV9JRCwgVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0ZXh0Qnl0ZXMubGVuZ3RoKSwgLy8gU2l6ZVxuICB0ZXh0Qnl0ZXMgLy8gSW5zdHJ1bWVudCBuYW1lXG4gICk7XG59O1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIGtleSBzaWduYXR1cmUgbWV0YSBldmVudC5cbiAqIEByZXR1cm4ge0tleVNpZ25hdHVyZUV2ZW50fVxuICovXG5cbnZhciBLZXlTaWduYXR1cmVFdmVudCA9IGZ1bmN0aW9uIEtleVNpZ25hdHVyZUV2ZW50KHNmLCBtaSkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgS2V5U2lnbmF0dXJlRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdrZXktc2lnbmF0dXJlJztcbiAgdmFyIG1vZGUgPSBtaSB8fCAwO1xuICBzZiA9IHNmIHx8IDA7IC8vXHRGdW5jdGlvbiBjYWxsZWQgd2l0aCBzdHJpbmcgbm90YXRpb25cblxuICBpZiAodHlwZW9mIG1pID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBmaWZ0aHMgPSBbWydDYicsICdHYicsICdEYicsICdBYicsICdFYicsICdCYicsICdGJywgJ0MnLCAnRycsICdEJywgJ0EnLCAnRScsICdCJywgJ0YjJywgJ0MjJ10sIFsnYWInLCAnZWInLCAnYmInLCAnZicsICdjJywgJ2cnLCAnZCcsICdhJywgJ2UnLCAnYicsICdmIycsICdjIycsICdnIycsICdkIycsICdhIyddXTtcbiAgICB2YXIgX3NmbGVuID0gc2YubGVuZ3RoO1xuICAgIHZhciBub3RlID0gc2YgfHwgJ0MnO1xuICAgIGlmIChzZlswXSA9PT0gc2ZbMF0udG9Mb3dlckNhc2UoKSkgbW9kZSA9IDE7XG5cbiAgICBpZiAoX3NmbGVuID4gMSkge1xuICAgICAgc3dpdGNoIChzZi5jaGFyQXQoX3NmbGVuIC0gMSkpIHtcbiAgICAgICAgY2FzZSAnbSc6XG4gICAgICAgICAgbW9kZSA9IDE7XG4gICAgICAgICAgbm90ZSA9IHNmLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIG5vdGUgPSBub3RlLmNvbmNhdChzZi5zdWJzdHJpbmcoMSwgX3NmbGVuIC0gMSkpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgIG1vZGUgPSAxO1xuICAgICAgICAgIG5vdGUgPSBzZi5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICBub3RlID0gbm90ZS5jb25jYXQoc2Yuc3Vic3RyaW5nKDEsIF9zZmxlbiAtIDEpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdNJzpcbiAgICAgICAgICBtb2RlID0gMDtcbiAgICAgICAgICBub3RlID0gc2YuY2hhckF0KDApLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgbm90ZSA9IG5vdGUuY29uY2F0KHNmLnN1YnN0cmluZygxLCBfc2ZsZW4gLSAxKSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgbW9kZSA9IDA7XG4gICAgICAgICAgbm90ZSA9IHNmLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgIG5vdGUgPSBub3RlLmNvbmNhdChzZi5zdWJzdHJpbmcoMSwgX3NmbGVuIC0gMSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBmaWZ0aGluZGV4ID0gZmlmdGhzW21vZGVdLmluZGV4T2Yobm90ZSk7XG4gICAgc2YgPSBmaWZ0aGluZGV4ID09PSAtMSA/IDAgOiBmaWZ0aGluZGV4IC0gNztcbiAgfSAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX0tFWV9TSUdOQVRVUkVfSUQsIFsweDAyXSwgLy8gU2l6ZVxuICBVdGlscy5udW1iZXJUb0J5dGVzKHNmLCAxKSwgLy8gTnVtYmVyIG9mIHNoYXJwIG9yIGZsYXRzICggPCAwIGZsYXQ7ID4gMCBzaGFycClcbiAgVXRpbHMubnVtYmVyVG9CeXRlcyhtb2RlLCAxKSAvLyBNb2RlOiAwIG1ham9yLCAxIG1pbm9yXG4gICk7XG59O1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIGx5cmljIG1ldGEgZXZlbnQuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIEx5cmljIHRleHRcbiAqIEByZXR1cm4ge0x5cmljRXZlbnR9XG4gKi9cblxudmFyIEx5cmljRXZlbnQgPSBmdW5jdGlvbiBMeXJpY0V2ZW50KHRleHQpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEx5cmljRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdtYXJrZXInO1xuICB2YXIgdGV4dEJ5dGVzID0gVXRpbHMuc3RyaW5nVG9CeXRlcyh0ZXh0KTsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfTFlSSUNfSUQsIFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgodGV4dEJ5dGVzLmxlbmd0aCksIC8vIFNpemVcbiAgdGV4dEJ5dGVzIC8vIFRleHRcbiAgKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgbWFya2VyIG1ldGEgZXZlbnQuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIE1hcmtlciB0ZXh0XG4gKiBAcmV0dXJuIHtNYXJrZXJFdmVudH1cbiAqL1xuXG52YXIgTWFya2VyRXZlbnQgPSBmdW5jdGlvbiBNYXJrZXJFdmVudCh0ZXh0KSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXJrZXJFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ21hcmtlcic7XG4gIHZhciB0ZXh0Qnl0ZXMgPSBVdGlscy5zdHJpbmdUb0J5dGVzKHRleHQpOyAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9NQVJLRVJfSUQsIFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgodGV4dEJ5dGVzLmxlbmd0aCksIC8vIFNpemVcbiAgdGV4dEJ5dGVzIC8vIFRleHRcbiAgKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgdGVtcG8gbWV0YSBldmVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBicG0gLSBCZWF0cyBwZXIgbWludXRlXG4gKiBAcmV0dXJuIHtUZW1wb0V2ZW50fVxuICovXG5cbnZhciBUZW1wb0V2ZW50ID0gZnVuY3Rpb24gVGVtcG9FdmVudChicG0pIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRlbXBvRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICd0ZW1wbyc7XG4gIHZhciB0ZW1wbyA9IE1hdGgucm91bmQoNjAwMDAwMDAgLyBicG0pOyAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9URU1QT19JRCwgWzB4MDNdLCAvLyBTaXplXG4gIFV0aWxzLm51bWJlclRvQnl0ZXModGVtcG8sIDMpIC8vIFRlbXBvLCAzIGJ5dGVzXG4gICk7XG59O1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIHRlbXBvIG1ldGEgZXZlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gYnBtIC0gQmVhdHMgcGVyIG1pbnV0ZVxuICogQHJldHVybiB7VGV4dEV2ZW50fVxuICovXG5cbnZhciBUZXh0RXZlbnQgPSBmdW5jdGlvbiBUZXh0RXZlbnQodGV4dCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGV4dEV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAndGV4dCc7XG4gIHZhciB0ZXh0Qnl0ZXMgPSBVdGlscy5zdHJpbmdUb0J5dGVzKHRleHQpOyAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9URVhUX0lELCBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRleHRCeXRlcy5sZW5ndGgpLCAvLyBTaXplXG4gIHRleHRCeXRlcyAvLyBUZXh0XG4gICk7XG59O1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIHRpbWUgc2lnbmF0dXJlIG1ldGEgZXZlbnQuXG4gKiBAcmV0dXJuIHtUaW1lU2lnbmF0dXJlRXZlbnR9XG4gKi9cblxudmFyIFRpbWVTaWduYXR1cmVFdmVudCA9IGZ1bmN0aW9uIFRpbWVTaWduYXR1cmVFdmVudChudW1lcmF0b3IsIGRlbm9taW5hdG9yLCBtaWRpY2xvY2tzcGVydGljaywgbm90ZXNwZXJtaWRpY2xvY2spIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRpbWVTaWduYXR1cmVFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ3RpbWUtc2lnbmF0dXJlJzsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfVElNRV9TSUdOQVRVUkVfSUQsIFsweDA0XSwgLy8gU2l6ZVxuICBVdGlscy5udW1iZXJUb0J5dGVzKG51bWVyYXRvciwgMSksIC8vIE51bWVyYXRvciwgMSBieXRlc1xuICBVdGlscy5udW1iZXJUb0J5dGVzKE1hdGgubG9nMihkZW5vbWluYXRvciksIDEpLCAvLyBEZW5vbWluYXRvciBpcyBleHByZXNzZWQgYXMgcG93IG9mIDIsIDEgYnl0ZXNcbiAgVXRpbHMubnVtYmVyVG9CeXRlcyhtaWRpY2xvY2tzcGVydGljayB8fCAyNCwgMSksIC8vIE1JREkgQ2xvY2tzIHBlciB0aWNrLCAxIGJ5dGVzXG4gIFV0aWxzLm51bWJlclRvQnl0ZXMobm90ZXNwZXJtaWRpY2xvY2sgfHwgOCwgMSkgLy8gTnVtYmVyIG9mIDEvMzIgbm90ZXMgcGVyIE1JREkgY2xvY2tzLCAxIGJ5dGVzXG4gICk7XG59O1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIHRlbXBvIG1ldGEgZXZlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gYnBtIC0gQmVhdHMgcGVyIG1pbnV0ZVxuICogQHJldHVybiB7VHJhY2tOYW1lRXZlbnR9XG4gKi9cblxudmFyIFRyYWNrTmFtZUV2ZW50ID0gZnVuY3Rpb24gVHJhY2tOYW1lRXZlbnQodGV4dCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJhY2tOYW1lRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICd0cmFjay1uYW1lJztcbiAgdmFyIHRleHRCeXRlcyA9IFV0aWxzLnN0cmluZ1RvQnl0ZXModGV4dCk7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX1RSQUNLX05BTUVfSUQsIFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgodGV4dEJ5dGVzLmxlbmd0aCksIC8vIFNpemVcbiAgdGV4dEJ5dGVzIC8vIFRleHRcbiAgKTtcbn07XG5cbi8qKlxuICogSG9sZHMgYWxsIGRhdGEgZm9yIGEgdHJhY2suXG4gKiBAcGFyYW0ge29iamVjdH0gZmllbGRzIHt0eXBlOiBudW1iZXIsIGRhdGE6IGFycmF5LCBzaXplOiBhcnJheSwgZXZlbnRzOiBhcnJheX1cbiAqIEByZXR1cm4ge1RyYWNrfVxuICovXG5cbnZhciBUcmFjayA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFRyYWNrKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmFjayk7XG5cbiAgICB0aGlzLnR5cGUgPSBDb25zdGFudHMuVFJBQ0tfQ0hVTktfVFlQRTtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICB0aGlzLnNpemUgPSBbXTtcbiAgICB0aGlzLmV2ZW50cyA9IFtdO1xuICAgIHRoaXMuZXhwbGljaXRUaWNrRXZlbnRzID0gW107IC8vIElmIHRoZXJlIGFyZSBhbnkgZXZlbnRzIHdpdGggYW4gZXhwbGljaXQgdGljayBkZWZpbmVkIHRoZW4gd2Ugd2lsbCBjcmVhdGUgYSBcInN1YlwiIHRyYWNrIGZvciB0aG9zZVxuICAgIC8vIGFuZCBtZXJnZSB0aGVtIGluIGFuZCB0aGUgZW5kLlxuXG4gICAgdGhpcy50aWNrUG9pbnRlciA9IDA7IC8vIEVhY2ggdGltZSBhbiBldmVudCBpcyBhZGRlZCB0aGlzIHdpbGwgaW5jcmVhc2VcbiAgfVxuICAvKipcbiAgICogQWRkcyBhbnkgZXZlbnQgdHlwZSB0byB0aGUgdHJhY2suXG4gICAqIEV2ZW50cyB3aXRob3V0IGEgc3BlY2lmaWMgc3RhcnRUaWNrIHByb3BlcnR5IGFyZSBhc3N1bWVkIHRvIGJlIGFkZGVkIGluIG9yZGVyIG9mIGhvdyB0aGV5IHNob3VsZCBvdXRwdXQuXG4gICAqIEV2ZW50cyB3aXRoIGEgc3BlY2lmaWMgc3RhcnRUaWNrIHByb3BlcnR5IGFyZSBzZXQgYXNpZGUgZm9yIG5vdyB3aWxsIGJlIG1lcmdlZCBpbiBkdXJpbmcgYnVpbGQgcHJvY2Vzcy5cbiAgICogQHBhcmFtIHsoTm90ZUV2ZW50fFByb2dyYW1DaGFuZ2VFdmVudCl9IGV2ZW50cyAtIEV2ZW50IG9iamVjdCBvciBhcnJheSBvZiBFdmVudCBvYmplY3RzLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBtYXBGdW5jdGlvbiAtIENhbGxiYWNrIHdoaWNoIGNhbiBiZSB1c2VkIHRvIGFwcGx5IHNwZWNpZmljIHByb3BlcnRpZXMgdG8gYWxsIGV2ZW50cy5cbiAgICogQHJldHVybiB7VHJhY2t9XG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKFRyYWNrLCBbe1xuICAgIGtleTogXCJhZGRFdmVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRFdmVudChldmVudHMsIG1hcEZ1bmN0aW9uKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBVdGlscy50b0FycmF5KGV2ZW50cykuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQsIGkpIHtcbiAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTm90ZUV2ZW50KSB7XG4gICAgICAgICAgLy8gSGFuZGxlIG1hcCBmdW5jdGlvbiBpZiBwcm92aWRlZFxuICAgICAgICAgIGlmICh0eXBlb2YgbWFwRnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBwcm9wZXJ0aWVzID0gbWFwRnVuY3Rpb24oaSwgZXZlbnQpO1xuXG4gICAgICAgICAgICBpZiAoX3R5cGVvZihwcm9wZXJ0aWVzKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgaiBpbiBwcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChqKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlICdjaGFubmVsJzpcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuY2hhbm5lbCA9IHByb3BlcnRpZXNbal07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlICdkdXJhdGlvbic6XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmR1cmF0aW9uID0gcHJvcGVydGllc1tqXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgJ3NlcXVlbnRpYWwnOlxuICAgICAgICAgICAgICAgICAgICBldmVudC5zZXF1ZW50aWFsID0gcHJvcGVydGllc1tqXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgJ3ZlbG9jaXR5JzpcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQudmVsb2NpdHkgPSBVdGlscy5jb252ZXJ0VmVsb2NpdHkocHJvcGVydGllc1tqXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gLy8gSWYgdGhpcyBub3RlIGV2ZW50IGhhcyBhbiBleHBsaWNpdCBzdGFydFRpY2sgdGhlbiB3ZSBuZWVkIHRvIHNldCBhc2lkZSBmb3Igbm93XG5cblxuICAgICAgICAgIGlmIChldmVudC5zdGFydFRpY2sgIT09IG51bGwpIHtcbiAgICAgICAgICAgIF90aGlzLmV4cGxpY2l0VGlja0V2ZW50cy5wdXNoKGV2ZW50KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gUHVzaCBlYWNoIG9uL29mZiBldmVudCB0byB0cmFjaydzIGV2ZW50IHN0YWNrXG4gICAgICAgICAgICBldmVudC5idWlsZERhdGEoKS5ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuZXZlbnRzLnB1c2goZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMuZXZlbnRzLnB1c2goZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBCdWlsZHMgaW50IGFycmF5IG9mIGFsbCBldmVudHMuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJidWlsZERhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYnVpbGREYXRhKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIC8vIFJlbW92ZSBleGlzdGluZyBlbmQgdHJhY2sgZXZlbnQgYW5kIGFkZCBvbmUuXG4gICAgICAvLyBUaGlzIG1ha2VzIHN1cmUgaXQncyBhdCB0aGUgdmVyeSBlbmQgb2YgdGhlIGV2ZW50IGxpc3QuXG4gICAgICB0aGlzLnJlbW92ZUV2ZW50c0J5VHlwZSgnZW5kLXRyYWNrJykuYWRkRXZlbnQobmV3IEVuZFRyYWNrRXZlbnQoKSk7IC8vIFJlc2V0XG5cbiAgICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICAgdGhpcy5zaXplID0gW107XG4gICAgICB0aGlzLnRpY2tQb2ludGVyID0gMDtcbiAgICAgIHZhciBwcmVjaXNpb25Mb3NzID0gMDtcbiAgICAgIHRoaXMuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50LCBldmVudEluZGV4KSB7XG4gICAgICAgIC8vIEJ1aWxkIGV2ZW50ICYgYWRkIHRvIHRvdGFsIHRpY2sgZHVyYXRpb25cbiAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTm90ZU9uRXZlbnQgfHwgZXZlbnQgaW5zdGFuY2VvZiBOb3RlT2ZmRXZlbnQpIHtcbiAgICAgICAgICB2YXIgYnVpbHQgPSBldmVudC5idWlsZERhdGEoX3RoaXMyLCBwcmVjaXNpb25Mb3NzKTtcbiAgICAgICAgICBwcmVjaXNpb25Mb3NzID0gVXRpbHMuZ2V0UHJlY2lzaW9uTG9zcyhldmVudC5kZWx0YVdpdGhQcmVjaXNpb25Db3JyZWN0aW9uIHx8IDApO1xuICAgICAgICAgIF90aGlzMi5kYXRhID0gX3RoaXMyLmRhdGEuY29uY2F0KGJ1aWx0LmRhdGEpO1xuICAgICAgICAgIF90aGlzMi50aWNrUG9pbnRlciA9IFV0aWxzLmdldFJvdW5kZWRJZkNsb3NlKGV2ZW50LnRpY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzMi5kYXRhID0gX3RoaXMyLmRhdGEuY29uY2F0KGV2ZW50LmRhdGEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMubWVyZ2VFeHBsaWNpdFRpY2tFdmVudHMoKTtcbiAgICAgIHRoaXMuc2l6ZSA9IFV0aWxzLm51bWJlclRvQnl0ZXModGhpcy5kYXRhLmxlbmd0aCwgNCk7IC8vIDQgYnl0ZXMgbG9uZ1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibWVyZ2VFeHBsaWNpdFRpY2tFdmVudHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWVyZ2VFeHBsaWNpdFRpY2tFdmVudHMoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgaWYgKCF0aGlzLmV4cGxpY2l0VGlja0V2ZW50cy5sZW5ndGgpIHJldHVybjsgLy8gRmlyc3Qgc29ydCBhc2MgbGlzdCBvZiBldmVudHMgYnkgc3RhcnRUaWNrXG5cbiAgICAgIHRoaXMuZXhwbGljaXRUaWNrRXZlbnRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEuc3RhcnRUaWNrIC0gYi5zdGFydFRpY2s7XG4gICAgICB9KTsgLy8gTm93IHRoaXMuZXhwbGljaXRUaWNrRXZlbnRzIGlzIGluIGNvcnJlY3Qgb3JkZXIsIGFuZCBzbyBpcyB0aGlzLmV2ZW50cyBuYXR1cmFsbHkuXG4gICAgICAvLyBGb3IgZWFjaCBleHBsaWNpdCB0aWNrIGV2ZW50LCBzcGxpY2UgaXQgaW50byB0aGUgbWFpbiBsaXN0IG9mIGV2ZW50cyBhbmRcbiAgICAgIC8vIGFkanVzdCB0aGUgZGVsdGEgb24gdGhlIGZvbGxvd2luZyBldmVudHMgc28gdGhleSBzdGlsbCBwbGF5IG5vcm1hbGx5LlxuXG4gICAgICB0aGlzLmV4cGxpY2l0VGlja0V2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChub3RlRXZlbnQpIHtcbiAgICAgICAgLy8gQ29udmVydCBOb3RlRXZlbnQgdG8gaXQncyByZXNwZWN0aXZlIE5vdGVPbi9Ob3RlT2ZmIGV2ZW50c1xuICAgICAgICAvLyBOb3RlIHRoYXQgYXMgd2Ugc3BsaWNlIGluIGV2ZW50cyB0aGUgZGVsdGEgZm9yIHRoZSBOb3RlT2ZmIG9uZXMgd2lsbFxuICAgICAgICAvLyBOZWVkIHRvIGNoYW5nZSBiYXNlZCBvbiB3aGF0IGNvbWVzIGJlZm9yZSB0aGVtIGFmdGVyIHRoZSBzcGxpY2UuXG4gICAgICAgIG5vdGVFdmVudC5idWlsZERhdGEoKS5ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiBlLmJ1aWxkRGF0YShfdGhpczMpO1xuICAgICAgICB9KTsgLy8gTWVyZ2UgZWFjaCBldmVudCBpbmRpdnVhbGx5IGludG8gdGhpcyB0cmFjaydzIGV2ZW50IGxpc3QuXG5cbiAgICAgICAgbm90ZUV2ZW50LmV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczMubWVyZ2VTaW5nbGVFdmVudChldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7IC8vIEhhY2t5IHdheSB0byByZWJ1aWxkIHRyYWNrIHdpdGggbmV3bHkgc3BsaWNlZCBldmVudHMuICBOZWVkIGJldHRlciBzb2x1dGlvbi5cblxuICAgICAgdGhpcy5leHBsaWNpdFRpY2tFdmVudHMgPSBbXTtcbiAgICAgIHRoaXMuYnVpbGREYXRhKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE1lcmdlcyBhbm90aGVyIHRyYWNrJ3MgZXZlbnRzIHdpdGggdGhpcyB0cmFjay5cbiAgICAgKiBAcGFyYW0ge1RyYWNrfSB0cmFja1xuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibWVyZ2VUcmFja1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtZXJnZVRyYWNrKHRyYWNrKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgLy8gRmlyc3QgYnVpbGQgdGhpcyB0cmFjayB0byBwb3B1bGF0ZSBlYWNoIGV2ZW50J3MgdGljayBwcm9wZXJ0eVxuICAgICAgdGhpcy5idWlsZERhdGEoKTsgLy8gVGhlbiBidWlsZCB0cmFjayB0byBiZSBtZXJnZWQgc28gdGhhdCB0aWNrIHByb3BlcnR5IGlzIHBvcHVsYXRlZCBvbiBhbGwgZXZlbnRzICYgbWVyZ2UgZWFjaCBldmVudC5cblxuICAgICAgdHJhY2suYnVpbGREYXRhKCkuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfdGhpczQubWVyZ2VTaW5nbGVFdmVudChldmVudCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTWVyZ2VzIGEgc2luZ2xlIGV2ZW50IGludG8gdGhpcyB0cmFjaydzIGxpc3Qgb2YgZXZlbnRzIGJhc2VkIG9uIGV2ZW50LnRpY2sgcHJvcGVydHkuXG4gICAgICogQHBhcmFtIHtOb3RlT25FdmVudHxOb3RlT2ZmRXZlbnR9IC0gZXZlbnRcbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm1lcmdlU2luZ2xlRXZlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWVyZ2VTaW5nbGVFdmVudChldmVudCkge1xuICAgICAgLy8gRmluZCBpbmRleCBvZiBleGlzdGluZyBldmVudCB3ZSBuZWVkIHRvIGZvbGxvdyB3aXRoXG4gICAgICB2YXIgbGFzdEV2ZW50SW5kZXggPSAwO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmV2ZW50c1tpXS50aWNrID4gZXZlbnQudGljaykgYnJlYWs7XG4gICAgICAgIGxhc3RFdmVudEluZGV4ID0gaTtcbiAgICAgIH1cblxuICAgICAgdmFyIHNwbGljZWRFdmVudEluZGV4ID0gbGFzdEV2ZW50SW5kZXggKyAxOyAvLyBOZWVkIHRvIGFkanVzdCB0aGUgZGVsdGEgb2YgdGhpcyBldmVudCB0byBlbnN1cmUgaXQgZmFsbHMgb24gdGhlIGNvcnJlY3QgdGljay5cblxuICAgICAgZXZlbnQuZGVsdGEgPSBldmVudC50aWNrIC0gdGhpcy5ldmVudHNbbGFzdEV2ZW50SW5kZXhdLnRpY2s7IC8vIFNwbGljZSB0aGlzIGV2ZW50IGF0IGxhc3RFdmVudEluZGV4ICsgMVxuXG4gICAgICB0aGlzLmV2ZW50cy5zcGxpY2Uoc3BsaWNlZEV2ZW50SW5kZXgsIDAsIGV2ZW50KTsgLy8gTm93IGFkanVzdCBkZWx0YSBvZiBhbGwgZm9sbG93aW5nIGV2ZW50c1xuXG4gICAgICBmb3IgKHZhciBpID0gc3BsaWNlZEV2ZW50SW5kZXggKyAxOyBpIDwgdGhpcy5ldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gU2luY2UgZWFjaCBleGlzdGluZyBldmVudCBzaG91bGQgaGF2ZSBhIHRpY2sgdmFsdWUgYXQgdGhpcyBwb2ludCB3ZSBqdXN0IG5lZWQgdG9cbiAgICAgICAgLy8gYWRqdXN0IGRlbHRhIHRvIHRoYXQgdGhlIGV2ZW50IHN0aWxsIGZhbGxzIG9uIHRoZSBjb3JyZWN0IHRpY2suXG4gICAgICAgIHRoaXMuZXZlbnRzW2ldLmRlbHRhID0gdGhpcy5ldmVudHNbaV0udGljayAtIHRoaXMuZXZlbnRzW2kgLSAxXS50aWNrO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCBldmVudHMgbWF0Y2hpbmcgc3BlY2lmaWVkIHR5cGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZSAtIEV2ZW50IHR5cGVcbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZUV2ZW50c0J5VHlwZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVFdmVudHNCeVR5cGUoZXZlbnRUeXBlKSB7XG4gICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgdGhpcy5ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQsIGluZGV4KSB7XG4gICAgICAgIGlmIChldmVudC50eXBlID09PSBldmVudFR5cGUpIHtcbiAgICAgICAgICBfdGhpczUuZXZlbnRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGVtcG8gb2YgdGhlIE1JREkgZmlsZS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYnBtIC0gVGVtcG8gaW4gYmVhdHMgcGVyIG1pbnV0ZS5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNldFRlbXBvXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFRlbXBvKGJwbSkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IFRlbXBvRXZlbnQoYnBtKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGltZSBzaWduYXR1cmUuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG51bWVyYXRvciAtIFRvcCBudW1iZXIgb2YgdGhlIHRpbWUgc2lnbmF0dXJlLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZW5vbWluYXRvciAtIEJvdHRvbSBudW1iZXIgb2YgdGhlIHRpbWUgc2lnbmF0dXJlLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaWRpY2xvY2tzcGVydGljayAtIERlZmF1bHRzIHRvIDI0LlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBub3Rlc3Blcm1pZGljbG9jayAtIERlZmF1bHRzIHRvIDguXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzZXRUaW1lU2lnbmF0dXJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFRpbWVTaWduYXR1cmUobnVtZXJhdG9yLCBkZW5vbWluYXRvciwgbWlkaWNsb2Nrc3BlcnRpY2ssIG5vdGVzcGVybWlkaWNsb2NrKSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgVGltZVNpZ25hdHVyZUV2ZW50KG51bWVyYXRvciwgZGVub21pbmF0b3IsIG1pZGljbG9ja3NwZXJ0aWNrLCBub3Rlc3Blcm1pZGljbG9jaykpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIGtleSBzaWduYXR1cmUuXG4gICAgICogQHBhcmFtIHsqfSBzZiAtXG4gICAgICogQHBhcmFtIHsqfSBtaSAtXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzZXRLZXlTaWduYXR1cmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0S2V5U2lnbmF0dXJlKHNmLCBtaSkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IEtleVNpZ25hdHVyZUV2ZW50KHNmLCBtaSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIHRleHQgdG8gTUlESSBmaWxlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCB0byBhZGQuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhZGRUZXh0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZFRleHQodGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IFRleHRFdmVudCh0ZXh0KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgY29weXJpZ2h0IHRvIE1JREkgZmlsZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRleHQgb2YgY29weXJpZ2h0IGxpbmUuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhZGRDb3B5cmlnaHRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkQ29weXJpZ2h0KHRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBDb3B5cmlnaHRFdmVudCh0ZXh0KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgU2VxdWVuY2UvVHJhY2sgTmFtZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRleHQgb2YgdHJhY2sgbmFtZS5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFkZFRyYWNrTmFtZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRUcmFja05hbWUodGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IFRyYWNrTmFtZUV2ZW50KHRleHQpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyBpbnN0cnVtZW50IG5hbWUgb2YgdHJhY2suXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBOYW1lIG9mIGluc3RydW1lbnQuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhZGRJbnN0cnVtZW50TmFtZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRJbnN0cnVtZW50TmFtZSh0ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgSW5zdHJ1bWVudE5hbWVFdmVudCh0ZXh0KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgbWFya2VyIHRvIE1JREkgZmlsZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIE1hcmtlciB0ZXh0LlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkTWFya2VyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZE1hcmtlcih0ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgTWFya2VyRXZlbnQodGV4dCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGN1ZSBwb2ludCB0byBNSURJIGZpbGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUZXh0IG9mIGN1ZSBwb2ludC5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFkZEN1ZVBvaW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEN1ZVBvaW50KHRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBDdWVQb2ludEV2ZW50KHRleHQpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBseXJpYyB0byBNSURJIGZpbGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBMeXJpYyB0ZXh0IHRvIGFkZC5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFkZEx5cmljXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEx5cmljKHRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBMeXJpY0V2ZW50KHRleHQpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hhbm5lbCBtb2RlIG1lc3NhZ2VzXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJwb2x5TW9kZU9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBvbHlNb2RlT24oKSB7XG4gICAgICB2YXIgZXZlbnQgPSBuZXcgTm90ZU9uRXZlbnQoe1xuICAgICAgICBkYXRhOiBbMHgwMCwgMHhCMCwgMHg3RSwgMHgwMF1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQoZXZlbnQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIGEgcGl0Y2ggYmVuZC5cbiAgICAgKiBAcGFyYW0ge2Zsb2F0fSBiZW5kIC0gQmVuZCB2YWx1ZSByYW5naW5nIFstMSwxXSwgemVybyBtZWFuaW5nIG5vIGJlbmQuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzZXRQaXRjaEJlbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UGl0Y2hCZW5kKGJlbmQpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBQaXRjaEJlbmRFdmVudCh7XG4gICAgICAgIGJlbmQ6IGJlbmRcbiAgICAgIH0pKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIGNvbnRyb2xsZXIgY2hhbmdlIGV2ZW50XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciAtIENvbnRyb2wgbnVtYmVyLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSAtIENvbnRyb2wgdmFsdWUuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjb250cm9sbGVyQ2hhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbnRyb2xsZXJDaGFuZ2UobnVtYmVyLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IENvbnRyb2xsZXJDaGFuZ2VFdmVudCh7XG4gICAgICAgIGNvbnRyb2xsZXJOdW1iZXI6IG51bWJlcixcbiAgICAgICAgY29udHJvbGxlclZhbHVlOiB2YWx1ZVxuICAgICAgfSkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBUcmFjaztcbn0oKTtcblxudmFyIFZleEZsb3cgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBWZXhGbG93KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBWZXhGbG93KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhWZXhGbG93LCBbe1xuICAgIGtleTogXCJ0cmFja0Zyb21Wb2ljZVwiLFxuICAgIHZhbHVlOlxuICAgIC8qKlxuICAgICAqIFN1cHBvcnQgZm9yIGNvbnZlcnRpbmcgVmV4RmxvdyB2b2ljZSBpbnRvIE1pZGlXcml0ZXJKUyB0cmFja1xuICAgICAqIEByZXR1cm4gTWlkaVdyaXRlci5UcmFjayBvYmplY3RcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB0cmFja0Zyb21Wb2ljZSh2b2ljZSkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHtcbiAgICAgICAgYWRkUmVuZGVyZWRBY2NpZGVudGFsczogZmFsc2VcbiAgICAgIH07XG4gICAgICB2YXIgdHJhY2sgPSBuZXcgVHJhY2soKTtcbiAgICAgIHZhciB3YWl0ID0gW107XG4gICAgICB2b2ljZS50aWNrYWJsZXMuZm9yRWFjaChmdW5jdGlvbiAodGlja2FibGUpIHtcbiAgICAgICAgaWYgKHRpY2thYmxlLm5vdGVUeXBlID09PSAnbicpIHtcbiAgICAgICAgICB0cmFjay5hZGRFdmVudChuZXcgTm90ZUV2ZW50KHtcbiAgICAgICAgICAgIHBpdGNoOiB0aWNrYWJsZS5rZXlzLm1hcChmdW5jdGlvbiAocGl0Y2gsIGluZGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpcy5jb252ZXJ0UGl0Y2gocGl0Y2gsIGluZGV4LCB0aWNrYWJsZSwgb3B0aW9ucy5hZGRSZW5kZXJlZEFjY2lkZW50YWxzKTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgZHVyYXRpb246IF90aGlzLmNvbnZlcnREdXJhdGlvbih0aWNrYWJsZSksXG4gICAgICAgICAgICB3YWl0OiB3YWl0XG4gICAgICAgICAgfSkpOyAvLyByZXNldCB3YWl0XG5cbiAgICAgICAgICB3YWl0ID0gW107XG4gICAgICAgIH0gZWxzZSBpZiAodGlja2FibGUubm90ZVR5cGUgPT09ICdyJykge1xuICAgICAgICAgIC8vIG1vdmUgb24gdG8gdGhlIG5leHQgdGlja2FibGUgYW5kIGFkZCB0aGlzIHRvIHRoZSBzdGFja1xuICAgICAgICAgIC8vIG9mIHRoZSBgd2FpdGAgcHJvcGVydHkgZm9yIHRoZSBuZXh0IG5vdGUgZXZlbnRcbiAgICAgICAgICB3YWl0LnB1c2goX3RoaXMuY29udmVydER1cmF0aW9uKHRpY2thYmxlKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9KTsgLy8gVGhlcmUgbWF5IGJlIG91dHN0YW5kaW5nIHJlc3RzIGF0IHRoZSBlbmQgb2YgdGhlIHRyYWNrLFxuICAgICAgLy8gcGFkIHdpdGggYSBnaG9zdCBub3RlICh6ZXJvIGR1cmF0aW9uIGFuZCB2ZWxvY2l0eSksIGp1c3QgdG8gY2FwdHVyZSB0aGUgd2FpdC5cblxuICAgICAgaWYgKHdhaXQubGVuZ3RoID4gMCkge1xuICAgICAgICB0cmFjay5hZGRFdmVudChuZXcgTm90ZUV2ZW50KHtcbiAgICAgICAgICBwaXRjaDogJ1tjNF0nLFxuICAgICAgICAgIGR1cmF0aW9uOiAnMCcsXG4gICAgICAgICAgd2FpdDogd2FpdCxcbiAgICAgICAgICB2ZWxvY2l0eTogJzAnXG4gICAgICAgIH0pKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRyYWNrO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBWZXhGbG93IHBpdGNoIHN5bnRheCB0byBNaWRpV3JpdGVySlMgc3ludGF4XG4gICAgICogQHBhcmFtIHBpdGNoIHN0cmluZ1xuICAgICAqIEBwYXJhbSBpbmRleCBwaXRjaCBpbmRleFxuICAgICAqIEBwYXJhbSBub3RlIHN0cnVjdCBmcm9tIFZleGZsb3dcbiAgICAgKiBAcGFyYW0gYWRkUmVuZGVyZWRBY2NpZGVudGFscyBhZGRzIFZleGZsb3cgcmVuZGVyZWQgYWNjaWRlbnRhbHNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNvbnZlcnRQaXRjaFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb252ZXJ0UGl0Y2gocGl0Y2gsIGluZGV4LCBub3RlKSB7XG4gICAgICB2YXIgYWRkUmVuZGVyZWRBY2NpZGVudGFscyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogZmFsc2U7XG4gICAgICAvLyBTcGxpdHMgbm90ZSBuYW1lIGZyb20gb2N0YXZlXG4gICAgICB2YXIgcGl0Y2hQYXJ0cyA9IHBpdGNoLnNwbGl0KCcvJyk7IC8vIFJldHJpZXZlcyBhY2NpZGVudGFscyBmcm9tIHBpdGNoXG4gICAgICAvLyBSZW1vdmVzIG5hdHVyYWwgYWNjaWRlbnRhbHMgc2luY2UgdGhleSBhcmUgbm90IGFjY2VwdGVkIGluIFRvbmFsIE1pZGlcblxuICAgICAgdmFyIGFjY2lkZW50YWxzID0gcGl0Y2hQYXJ0c1swXS5zdWJzdHJpbmcoMSkucmVwbGFjZSgnbicsICcnKTtcblxuICAgICAgaWYgKGFkZFJlbmRlcmVkQWNjaWRlbnRhbHMpIHtcbiAgICAgICAgdmFyIF9ub3RlJGdldEFjY2lkZW50YWxzO1xuXG4gICAgICAgIChfbm90ZSRnZXRBY2NpZGVudGFscyA9IG5vdGUuZ2V0QWNjaWRlbnRhbHMoKSkgPT09IG51bGwgfHwgX25vdGUkZ2V0QWNjaWRlbnRhbHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9ub3RlJGdldEFjY2lkZW50YWxzLmZvckVhY2goZnVuY3Rpb24gKGFjY2lkZW50YWwpIHtcbiAgICAgICAgICBpZiAoYWNjaWRlbnRhbC5pbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChhY2NpZGVudGFsLnR5cGUgPT09ICduJykge1xuICAgICAgICAgICAgICBhY2NpZGVudGFscyA9ICcnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYWNjaWRlbnRhbHMgKz0gYWNjaWRlbnRhbC50eXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwaXRjaFBhcnRzWzBdWzBdICsgYWNjaWRlbnRhbHMgKyBwaXRjaFBhcnRzWzFdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBWZXhGbG93IGR1cmF0aW9uIHN5bnRheCB0byBNaWRpV3JpdGVySlMgc3ludGF4XG4gICAgICogQHBhcmFtIG5vdGUgc3RydWN0IGZyb20gVmV4Rmxvd1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY29udmVydER1cmF0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbnZlcnREdXJhdGlvbihub3RlKSB7XG4gICAgICByZXR1cm4gJ2QnLnJlcGVhdChub3RlLmRvdHMpICsgdGhpcy5jb252ZXJ0QmFzZUR1cmF0aW9uKG5vdGUuZHVyYXRpb24pICsgKG5vdGUudHVwbGV0ID8gJ3QnICsgbm90ZS50dXBsZXQubnVtX25vdGVzIDogJycpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBWZXhGbG93IGJhc2UgZHVyYXRpb24gc3ludGF4IHRvIE1pZGlXcml0ZXJKUyBzeW50YXhcbiAgICAgKiBAcGFyYW0gZHVyYXRpb24gVmV4ZmxvdyBkdXJhdGlvblxuICAgICAqIEByZXR1cm5zIE1pZGlXcml0ZXJKUyBkdXJhdGlvblxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY29udmVydEJhc2VEdXJhdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb252ZXJ0QmFzZUR1cmF0aW9uKGR1cmF0aW9uKSB7XG4gICAgICBzd2l0Y2ggKGR1cmF0aW9uKSB7XG4gICAgICAgIGNhc2UgJ3cnOlxuICAgICAgICAgIHJldHVybiAnMSc7XG5cbiAgICAgICAgY2FzZSAnaCc6XG4gICAgICAgICAgcmV0dXJuICcyJztcblxuICAgICAgICBjYXNlICdxJzpcbiAgICAgICAgICByZXR1cm4gJzQnO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIGR1cmF0aW9uO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBWZXhGbG93O1xufSgpO1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIGhlYWRlciBjaHVuayBzZWN0aW9uIG9mIGEgTUlESSBmaWxlLlxuICogQHBhcmFtIHtudW1iZXJ9IG51bWJlck9mVHJhY2tzIC0gTnVtYmVyIG9mIHRyYWNrc1xuICogQHJldHVybiB7SGVhZGVyQ2h1bmt9XG4gKi9cblxudmFyIEhlYWRlckNodW5rID0gZnVuY3Rpb24gSGVhZGVyQ2h1bmsobnVtYmVyT2ZUcmFja3MpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhlYWRlckNodW5rKTtcblxuICB0aGlzLnR5cGUgPSBDb25zdGFudHMuSEVBREVSX0NIVU5LX1RZUEU7XG4gIHZhciB0cmFja1R5cGUgPSBudW1iZXJPZlRyYWNrcyA+IDEgPyBDb25zdGFudHMuSEVBREVSX0NIVU5LX0ZPUk1BVDEgOiBDb25zdGFudHMuSEVBREVSX0NIVU5LX0ZPUk1BVDA7XG4gIHRoaXMuZGF0YSA9IHRyYWNrVHlwZS5jb25jYXQoVXRpbHMubnVtYmVyVG9CeXRlcyhudW1iZXJPZlRyYWNrcywgMiksIC8vIHR3byBieXRlcyBsb25nLFxuICBDb25zdGFudHMuSEVBREVSX0NIVU5LX0RJVklTSU9OKTtcbiAgdGhpcy5zaXplID0gWzAsIDAsIDAsIHRoaXMuZGF0YS5sZW5ndGhdO1xufTtcblxuLyoqXG4gKiBPYmplY3QgdGhhdCBwdXRzIHRvZ2V0aGVyIHRyYWNrcyBhbmQgcHJvdmlkZXMgbWV0aG9kcyBmb3IgZmlsZSBvdXRwdXQuXG4gKiBAcGFyYW0ge2FycmF5fFRyYWNrfSB0cmFja3MgLSBBIHNpbmdsZSB7VHJhY2t9IG9iamVjdCBvciBhbiBhcnJheSBvZiB7VHJhY2t9IG9iamVjdHMuXG4gKiBAcmV0dXJuIHtXcml0ZXJ9XG4gKi9cblxudmFyIFdyaXRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFdyaXRlcih0cmFja3MpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFdyaXRlcik7XG5cbiAgICAvLyBFbnN1cmUgdHJhY2sgaXMgYW4gYXJyYXlcbiAgICB0cmFja3MgPSBVdGlscy50b0FycmF5KHRyYWNrcyk7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgdGhpcy5kYXRhLnB1c2gobmV3IEhlYWRlckNodW5rKHRyYWNrcy5sZW5ndGgpKTsgLy8gRm9yIGVhY2ggdHJhY2sgYWRkIGZpbmFsIGVuZCBvZiB0cmFjayBldmVudCBhbmQgYnVpbGQgZGF0YVxuXG4gICAgdHJhY2tzLmZvckVhY2goZnVuY3Rpb24gKHRyYWNrLCBpKSB7XG4gICAgICBfdGhpcy5kYXRhLnB1c2godHJhY2suYnVpbGREYXRhKCkpO1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBCdWlsZHMgdGhlIGZpbGUgaW50byBhIFVpbnQ4QXJyYXlcbiAgICogQHJldHVybiB7VWludDhBcnJheX1cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoV3JpdGVyLCBbe1xuICAgIGtleTogXCJidWlsZEZpbGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYnVpbGRGaWxlKCkge1xuICAgICAgdmFyIGJ1aWxkID0gW107IC8vIERhdGEgY29uc2lzdHMgb2YgY2h1bmtzIHdoaWNoIGNvbnNpc3RzIG9mIGRhdGFcblxuICAgICAgdGhpcy5kYXRhLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGJ1aWxkID0gYnVpbGQuY29uY2F0KGQudHlwZSwgZC5zaXplLCBkLmRhdGEpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYnVpbGQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IGZpbGUgYnVmZmVyIHRvIGEgYmFzZTY0IHN0cmluZy4gIERpZmZlcmVudCBtZXRob2RzIGRlcGVuZGluZyBvbiBpZiBicm93c2VyIG9yIG5vZGUuXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYmFzZTY0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJhc2U2NCgpIHtcbiAgICAgIGlmICh0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGJ0b2EoU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCB0aGlzLmJ1aWxkRmlsZSgpKSk7XG4gICAgICByZXR1cm4gQnVmZmVyLmZyb20odGhpcy5idWlsZEZpbGUoKSkudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGRhdGEgVVJJLlxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRhdGFVcmlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGF0YVVyaSgpIHtcbiAgICAgIHJldHVybiAnZGF0YTphdWRpby9taWRpO2Jhc2U2NCwnICsgdGhpcy5iYXNlNjQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogT3V0cHV0IHRvIHN0ZG91dFxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInN0ZG91dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdGRvdXQoKSB7XG4gICAgICByZXR1cm4gcHJvY2Vzcy5zdGRvdXQud3JpdGUobmV3IEJ1ZmZlcih0aGlzLmJ1aWxkRmlsZSgpKSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFdyaXRlcjtcbn0oKTtcblxudmFyIG1haW4gPSB7XG4gIENvbnN0YW50czogQ29uc3RhbnRzLFxuICBOb3RlT25FdmVudDogTm90ZU9uRXZlbnQsXG4gIE5vdGVPZmZFdmVudDogTm90ZU9mZkV2ZW50LFxuICBOb3RlRXZlbnQ6IE5vdGVFdmVudCxcbiAgUGl0Y2hCZW5kRXZlbnQ6IFBpdGNoQmVuZEV2ZW50LFxuICBQcm9ncmFtQ2hhbmdlRXZlbnQ6IFByb2dyYW1DaGFuZ2VFdmVudCxcbiAgVHJhY2s6IFRyYWNrLFxuICBVdGlsczogVXRpbHMsXG4gIFZleEZsb3c6IFZleEZsb3csXG4gIFdyaXRlcjogV3JpdGVyXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1haW47XG4iLCAidmFyIE1pZGkgPSB7fTtcblxuKGZ1bmN0aW9uKGV4cG9ydGVkKSB7XG5cblx0dmFyIERFRkFVTFRfVk9MVU1FICAgPSBleHBvcnRlZC5ERUZBVUxUX1ZPTFVNRSAgID0gOTA7XG5cdHZhciBERUZBVUxUX0RVUkFUSU9OID0gZXhwb3J0ZWQuREVGQVVMVF9EVVJBVElPTiA9IDEyODtcblx0dmFyIERFRkFVTFRfQ0hBTk5FTCAgPSBleHBvcnRlZC5ERUZBVUxUX0NIQU5ORUwgID0gMDtcblxuXHQvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0ICogVXRpbGl0eSBmdW5jdGlvbnNcblx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG5cdHZhciBVdGlsID0ge1xuXG5cdFx0bWlkaV9sZXR0ZXJfcGl0Y2hlczogeyBhOjIxLCBiOjIzLCBjOjEyLCBkOjE0LCBlOjE2LCBmOjE3LCBnOjE5IH0sXG5cblx0XHQvKipcblx0XHQgKiBDb252ZXJ0IGEgc3ltYm9saWMgbm90ZSBuYW1lIChlLmcuIFwiYzRcIikgdG8gYSBudW1lcmljIE1JREkgcGl0Y2ggKGUuZy5cblx0XHQgKiA2MCwgbWlkZGxlIEMpLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IG4gLSBUaGUgc3ltYm9saWMgbm90ZSBuYW1lIHRvIHBhcnNlLlxuXHRcdCAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBNSURJIHBpdGNoIHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIHN5bWJvbGljIG5vdGVcblx0XHQgKiBuYW1lLlxuXHRcdCAqL1xuXHRcdG1pZGlQaXRjaEZyb21Ob3RlOiBmdW5jdGlvbihuKSB7XG5cdFx0XHR2YXIgbWF0Y2hlcyA9IC8oW2EtZ10pKCMrfGIrKT8oWzAtOV0rKSQvaS5leGVjKG4pO1xuXHRcdFx0dmFyIG5vdGUgPSBtYXRjaGVzWzFdLnRvTG93ZXJDYXNlKCksIGFjY2lkZW50YWwgPSBtYXRjaGVzWzJdIHx8ICcnLCBvY3RhdmUgPSBwYXJzZUludChtYXRjaGVzWzNdLCAxMCk7XG5cdFx0XHRyZXR1cm4gKDEyICogb2N0YXZlKSArIFV0aWwubWlkaV9sZXR0ZXJfcGl0Y2hlc1tub3RlXSArIChhY2NpZGVudGFsLnN1YnN0cigwLDEpPT0nIyc/MTotMSkgKiBhY2NpZGVudGFsLmxlbmd0aDtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogRW5zdXJlIHRoYXQgdGhlIGdpdmVuIGFyZ3VtZW50IGlzIGNvbnZlcnRlZCB0byBhIE1JREkgcGl0Y2guIE5vdGUgdGhhdFxuXHRcdCAqIGl0IG1heSBhbHJlYWR5IGJlIG9uZSAoaW5jbHVkaW5nIGEgcHVyZWx5IG51bWVyaWMgc3RyaW5nKS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gcCAtIFRoZSBwaXRjaCB0byBjb252ZXJ0LlxuXHRcdCAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSByZXN1bHRpbmcgbnVtZXJpYyBNSURJIHBpdGNoLlxuXHRcdCAqL1xuXHRcdGVuc3VyZU1pZGlQaXRjaDogZnVuY3Rpb24ocCkge1xuXHRcdFx0aWYgKHR5cGVvZiBwID09ICdudW1iZXInIHx8ICEvW14wLTldLy50ZXN0KHApKSB7XG5cdFx0XHRcdC8vIG51bWVyaWMgcGl0Y2hcblx0XHRcdFx0cmV0dXJuIHBhcnNlSW50KHAsIDEwKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIGFzc3VtZSBpdCdzIGEgbm90ZSBuYW1lXG5cdFx0XHRcdHJldHVybiBVdGlsLm1pZGlQaXRjaEZyb21Ob3RlKHApO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRtaWRpX3BpdGNoZXNfbGV0dGVyOiB7ICcxMic6J2MnLCAnMTMnOidjIycsICcxNCc6J2QnLCAnMTUnOidkIycsICcxNic6J2UnLCAnMTcnOidmJywgJzE4JzonZiMnLCAnMTknOidnJywgJzIwJzonZyMnLCAnMjEnOidhJywgJzIyJzonYSMnLCAnMjMnOidiJyB9LFxuXHRcdG1pZGlfZmxhdHRlbmVkX25vdGVzOiB7ICdhIyc6J2JiJywgJ2MjJzonZGInLCAnZCMnOidlYicsICdmIyc6J2diJywgJ2cjJzonYWInIH0sXG5cblx0XHQvKipcblx0XHQgKiBDb252ZXJ0IGEgbnVtZXJpYyBNSURJIHBpdGNoIHZhbHVlIChlLmcuIDYwKSB0byBhIHN5bWJvbGljIG5vdGUgbmFtZVxuXHRcdCAqIChlLmcuIFwiYzRcIikuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gbiAtIFRoZSBudW1lcmljIE1JREkgcGl0Y2ggdmFsdWUgdG8gY29udmVydC5cblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXR1cm5GbGF0dGVuZWQ9ZmFsc2VdIC0gV2hldGhlciB0byBwcmVmZXIgZmxhdHRlbmVkXG5cdFx0ICogbm90ZXMgdG8gc2hhcnBlbmVkIG9uZXMuIE9wdGlvbmFsLCBkZWZhdWx0IGZhbHNlLlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSByZXN1bHRpbmcgc3ltYm9saWMgbm90ZSBuYW1lLlxuXHRcdCAqL1xuXHRcdG5vdGVGcm9tTWlkaVBpdGNoOiBmdW5jdGlvbihuLCByZXR1cm5GbGF0dGVuZWQpIHtcblx0XHRcdHZhciBvY3RhdmUgPSAwLCBub3RlTnVtID0gbiwgbm90ZU5hbWUsIHJldHVybkZsYXR0ZW5lZCA9IHJldHVybkZsYXR0ZW5lZCB8fCBmYWxzZTtcblx0XHRcdGlmIChuID4gMjMpIHtcblx0XHRcdFx0Ly8gbm90ZU51bSBpcyBvbiBvY3RhdmUgMSBvciBtb3JlXG5cdFx0XHRcdG9jdGF2ZSA9IE1hdGguZmxvb3Iobi8xMikgLSAxO1xuXHRcdFx0XHQvLyBzdWJ0cmFjdCBudW1iZXIgb2Ygb2N0YXZlcyBmcm9tIG5vdGVOdW1cblx0XHRcdFx0bm90ZU51bSA9IG4gLSBvY3RhdmUgKiAxMjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gZ2V0IG5vdGUgbmFtZSAoYyMsIGQsIGYjIGV0Yylcblx0XHRcdG5vdGVOYW1lID0gVXRpbC5taWRpX3BpdGNoZXNfbGV0dGVyW25vdGVOdW1dO1xuXHRcdFx0Ly8gVXNlIGZsYXR0ZW5lZCBub3RlcyBpZiByZXF1ZXN0ZWQgKGUuZy4gZiMgc2hvdWxkIGJlIG91dHB1dCBhcyBnYilcblx0XHRcdGlmIChyZXR1cm5GbGF0dGVuZWQgJiYgbm90ZU5hbWUuaW5kZXhPZignIycpID4gMCkge1xuXHRcdFx0XHRub3RlTmFtZSA9IFV0aWwubWlkaV9mbGF0dGVuZWRfbm90ZXNbbm90ZU5hbWVdO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG5vdGVOYW1lICsgb2N0YXZlO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBDb252ZXJ0IGJlYXRzIHBlciBtaW51dGUgKEJQTSkgdG8gbWljcm9zZWNvbmRzIHBlciBxdWFydGVyIG5vdGUgKE1QUU4pLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IGJwbSAtIEEgbnVtYmVyIGluIGJlYXRzIHBlciBtaW51dGUuXG5cdFx0ICogQHJldHVybnMge251bWJlcn0gVGhlIG51bWJlciBvZiBtaWNyb3NlY29uZHMgcGVyIHF1YXJ0ZXIgbm90ZS5cblx0XHQgKi9cblx0XHRtcHFuRnJvbUJwbTogZnVuY3Rpb24oYnBtKSB7XG5cdFx0XHR2YXIgbXBxbiA9IE1hdGguZmxvb3IoNjAwMDAwMDAgLyBicG0pO1xuXHRcdFx0dmFyIHJldD1bXTtcblx0XHRcdGRvIHtcblx0XHRcdFx0cmV0LnVuc2hpZnQobXBxbiAmIDB4RkYpO1xuXHRcdFx0XHRtcHFuID4+PSA4O1xuXHRcdFx0fSB3aGlsZSAobXBxbik7XG5cdFx0XHR3aGlsZSAocmV0Lmxlbmd0aCA8IDMpIHtcblx0XHRcdFx0cmV0LnB1c2goMCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBDb252ZXJ0IG1pY3Jvc2Vjb25kcyBwZXIgcXVhcnRlciBub3RlIChNUFFOKSB0byBiZWF0cyBwZXIgbWludXRlIChCUE0pLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IG1wcW4gLSBUaGUgbnVtYmVyIG9mIG1pY3Jvc2Vjb25kcyBwZXIgcXVhcnRlciBub3RlLlxuXHRcdCAqIEByZXR1cm5zIHtudW1iZXJ9IEEgbnVtYmVyIGluIGJlYXRzIHBlciBtaW51dGUuXG5cdFx0ICovXG5cdFx0YnBtRnJvbU1wcW46IGZ1bmN0aW9uKG1wcW4pIHtcblx0XHRcdHZhciBtID0gbXBxbjtcblx0XHRcdGlmICh0eXBlb2YgbXBxblswXSAhPSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRtID0gMDtcblx0XHRcdFx0Zm9yICh2YXIgaT0wLCBsPW1wcW4ubGVuZ3RoLTE7IGwgPj0gMDsgKytpLCAtLWwpIHtcblx0XHRcdFx0XHRtIHw9IG1wcW5baV0gPDwgbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIE1hdGguZmxvb3IoNjAwMDAwMDAgLyBtcHFuKTtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogQ29udmVydHMgYW4gYXJyYXkgb2YgYnl0ZXMgdG8gYSBzdHJpbmcgb2YgaGV4YWRlY2ltYWwgY2hhcmFjdGVycy4gUHJlcGFyZXNcblx0XHQgKiBpdCB0byBiZSBjb252ZXJ0ZWQgaW50byBhIGJhc2U2NCBzdHJpbmcuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0FycmF5fSBieXRlQXJyYXkgLSBBcnJheSBvZiBieXRlcyB0byBiZSBjb252ZXJ0ZWQuXG5cdFx0ICogQHJldHVybnMge3N0cmluZ30gSGV4YWRlY2ltYWwgc3RyaW5nLCBlLmcuIFwiMDk3QjhBXCIuXG5cdFx0ICovXG5cdFx0Y29kZXMyU3RyOiBmdW5jdGlvbihieXRlQXJyYXkpIHtcblx0XHRcdHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIGJ5dGVBcnJheSk7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIENvbnZlcnRzIGEgc3RyaW5nIG9mIGhleGFkZWNpbWFsIHZhbHVlcyB0byBhbiBhcnJheSBvZiBieXRlcy4gSXQgY2FuIGFsc29cblx0XHQgKiBhZGQgcmVtYWluaW5nIFwiMFwiIG5pYmJsZXMgaW4gb3JkZXIgdG8gaGF2ZSBlbm91Z2ggYnl0ZXMgaW4gdGhlIGFycmF5IGFzIHRoZVxuXHRcdCAqIGBmaW5hbEJ5dGVzYCBwYXJhbWV0ZXIuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gc3RyaW5nIG9mIGhleGFkZWNpbWFsIHZhbHVlcyBlLmcuIFwiMDk3QjhBXCJcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gW2ZpbmFsQnl0ZXNdIC0gT3B0aW9uYWwuIFRoZSBkZXNpcmVkIG51bWJlciBvZiBieXRlc1xuXHRcdCAqIChub3QgbmliYmxlcykgdGhhdCB0aGUgcmV0dXJuZWQgYXJyYXkgc2hvdWxkIGNvbnRhaW4uXG5cdFx0ICogQHJldHVybnMge0FycmF5fSBBbiBhcnJheSBvZiBuaWJibGVzLlxuXHRcdCAqL1xuXHRcdHN0cjJCeXRlczogZnVuY3Rpb24gKHN0ciwgZmluYWxCeXRlcykge1xuXHRcdFx0aWYgKGZpbmFsQnl0ZXMpIHtcblx0XHRcdFx0d2hpbGUgKChzdHIubGVuZ3RoIC8gMikgPCBmaW5hbEJ5dGVzKSB7IHN0ciA9IFwiMFwiICsgc3RyOyB9XG5cdFx0XHR9XG5cblx0XHRcdHZhciBieXRlcyA9IFtdO1xuXHRcdFx0Zm9yICh2YXIgaT1zdHIubGVuZ3RoLTE7IGk+PTA7IGkgPSBpLTIpIHtcblx0XHRcdFx0dmFyIGNoYXJzID0gaSA9PT0gMCA/IHN0cltpXSA6IHN0cltpLTFdICsgc3RyW2ldO1xuXHRcdFx0XHRieXRlcy51bnNoaWZ0KHBhcnNlSW50KGNoYXJzLCAxNikpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gYnl0ZXM7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIFRyYW5zbGF0ZXMgbnVtYmVyIG9mIHRpY2tzIHRvIE1JREkgdGltZXN0YW1wIGZvcm1hdCwgcmV0dXJuaW5nIGFuIGFycmF5XG5cdFx0ICogb2YgYnl0ZXMgd2l0aCB0aGUgdGltZSB2YWx1ZXMuIE1JREkgaGFzIGEgdmVyeSBwYXJ0aWN1bGFyIHdheSB0byBleHByZXNzXG5cdFx0ICogdGltZTsgdGFrZSBhIGdvb2QgbG9vayBhdCB0aGUgc3BlYyBiZWZvcmUgZXZlciB0b3VjaGluZyB0aGlzIGZ1bmN0aW9uLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IHRpY2tzIC0gTnVtYmVyIG9mIHRpY2tzIHRvIGJlIHRyYW5zbGF0ZWQuXG5cdFx0ICogQHJldHVybnMge251bWJlcn0gQXJyYXkgb2YgYnl0ZXMgdGhhdCBmb3JtIHRoZSBNSURJIHRpbWUgdmFsdWUuXG5cdFx0ICovXG5cdFx0dHJhbnNsYXRlVGlja1RpbWU6IGZ1bmN0aW9uKHRpY2tzKSB7XG5cdFx0XHR2YXIgYnVmZmVyID0gdGlja3MgJiAweDdGO1xuXG5cdFx0XHR3aGlsZSAodGlja3MgPSB0aWNrcyA+PiA3KSB7XG5cdFx0XHRcdGJ1ZmZlciA8PD0gODtcblx0XHRcdFx0YnVmZmVyIHw9ICgodGlja3MgJiAweDdGKSB8IDB4ODApO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgYkxpc3QgPSBbXTtcblx0XHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRcdGJMaXN0LnB1c2goYnVmZmVyICYgMHhmZik7XG5cblx0XHRcdFx0aWYgKGJ1ZmZlciAmIDB4ODApIHsgYnVmZmVyID4+PSA4OyB9XG5cdFx0XHRcdGVsc2UgeyBicmVhazsgfVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGJMaXN0O1xuXHRcdH0sXG5cblx0fTtcblxuXHQvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0ICogRXZlbnQgY2xhc3Ncblx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG5cdC8qKlxuXHQgKiBDb25zdHJ1Y3QgYSBNSURJIGV2ZW50LlxuXHQgKlxuXHQgKiBQYXJhbWV0ZXJzIGluY2x1ZGU6XG5cdCAqICAtIHRpbWUgW29wdGlvbmFsIG51bWJlcl0gLSBUaWNrcyBzaW5jZSBwcmV2aW91cyBldmVudC5cblx0ICogIC0gdHlwZSBbcmVxdWlyZWQgbnVtYmVyXSAtIFR5cGUgb2YgZXZlbnQuXG5cdCAqICAtIGNoYW5uZWwgW3JlcXVpcmVkIG51bWJlcl0gLSBDaGFubmVsIGZvciB0aGUgZXZlbnQuXG5cdCAqICAtIHBhcmFtMSBbcmVxdWlyZWQgbnVtYmVyXSAtIEZpcnN0IGV2ZW50IHBhcmFtZXRlci5cblx0ICogIC0gcGFyYW0yIFtvcHRpb25hbCBudW1iZXJdIC0gU2Vjb25kIGV2ZW50IHBhcmFtZXRlci5cblx0ICovXG5cdHZhciBNaWRpRXZlbnQgPSBmdW5jdGlvbihwYXJhbXMpIHtcblx0XHRpZiAoIXRoaXMpIHJldHVybiBuZXcgTWlkaUV2ZW50KHBhcmFtcyk7XG5cdFx0aWYgKHBhcmFtcyAmJlxuXHRcdFx0XHQocGFyYW1zLnR5cGUgICAgIT09IG51bGwgfHwgcGFyYW1zLnR5cGUgICAgIT09IHVuZGVmaW5lZCkgJiZcblx0XHRcdFx0KHBhcmFtcy5jaGFubmVsICE9PSBudWxsIHx8IHBhcmFtcy5jaGFubmVsICE9PSB1bmRlZmluZWQpICYmXG5cdFx0XHRcdChwYXJhbXMucGFyYW0xICAhPT0gbnVsbCB8fCBwYXJhbXMucGFyYW0xICAhPT0gdW5kZWZpbmVkKSkge1xuXHRcdFx0dGhpcy5zZXRUaW1lKHBhcmFtcy50aW1lKTtcblx0XHRcdHRoaXMuc2V0VHlwZShwYXJhbXMudHlwZSk7XG5cdFx0XHR0aGlzLnNldENoYW5uZWwocGFyYW1zLmNoYW5uZWwpO1xuXHRcdFx0dGhpcy5zZXRQYXJhbTEocGFyYW1zLnBhcmFtMSk7XG5cdFx0XHR0aGlzLnNldFBhcmFtMihwYXJhbXMucGFyYW0yKTtcblx0XHR9XG5cdH07XG5cblx0Ly8gZXZlbnQgY29kZXNcblx0TWlkaUV2ZW50Lk5PVEVfT0ZGICAgICAgICAgICA9IDB4ODA7XG5cdE1pZGlFdmVudC5OT1RFX09OICAgICAgICAgICAgPSAweDkwO1xuXHRNaWRpRXZlbnQuQUZURVJfVE9VQ0ggICAgICAgID0gMHhBMDtcblx0TWlkaUV2ZW50LkNPTlRST0xMRVIgICAgICAgICA9IDB4QjA7XG5cdE1pZGlFdmVudC5QUk9HUkFNX0NIQU5HRSAgICAgPSAweEMwO1xuXHRNaWRpRXZlbnQuQ0hBTk5FTF9BRlRFUlRPVUNIID0gMHhEMDtcblx0TWlkaUV2ZW50LlBJVENIX0JFTkQgICAgICAgICA9IDB4RTA7XG5cblxuXHQvKipcblx0ICogU2V0IHRoZSB0aW1lIGZvciB0aGUgZXZlbnQgaW4gdGlja3Mgc2luY2UgdGhlIHByZXZpb3VzIGV2ZW50LlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gdGlja3MgLSBUaGUgbnVtYmVyIG9mIHRpY2tzIHNpbmNlIHRoZSBwcmV2aW91cyBldmVudC4gTWF5XG5cdCAqIGJlIHplcm8uXG5cdCAqL1xuXHRNaWRpRXZlbnQucHJvdG90eXBlLnNldFRpbWUgPSBmdW5jdGlvbih0aWNrcykge1xuXHRcdHRoaXMudGltZSA9IFV0aWwudHJhbnNsYXRlVGlja1RpbWUodGlja3MgfHwgMCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNldCB0aGUgdHlwZSBvZiB0aGUgZXZlbnQuIE11c3QgYmUgb25lIG9mIHRoZSBldmVudCBjb2RlcyBvbiBNaWRpRXZlbnQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlIC0gRXZlbnQgdHlwZS5cblx0ICovXG5cdE1pZGlFdmVudC5wcm90b3R5cGUuc2V0VHlwZSA9IGZ1bmN0aW9uKHR5cGUpIHtcblx0XHRpZiAodHlwZSA8IE1pZGlFdmVudC5OT1RFX09GRiB8fCB0eXBlID4gTWlkaUV2ZW50LlBJVENIX0JFTkQpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlRyeWluZyB0byBzZXQgYW4gdW5rbm93biBldmVudDogXCIgKyB0eXBlKTtcblx0XHR9XG5cblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIGNoYW5uZWwgZm9yIHRoZSBldmVudC4gTXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDE1LCBpbmNsdXNpdmUuXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBjaGFubmVsIC0gVGhlIGV2ZW50IGNoYW5uZWwuXG5cdCAqL1xuXHRNaWRpRXZlbnQucHJvdG90eXBlLnNldENoYW5uZWwgPSBmdW5jdGlvbihjaGFubmVsKSB7XG5cdFx0aWYgKGNoYW5uZWwgPCAwIHx8IGNoYW5uZWwgPiAxNSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2hhbm5lbCBpcyBvdXQgb2YgYm91bmRzLlwiKTtcblx0XHR9XG5cblx0XHR0aGlzLmNoYW5uZWwgPSBjaGFubmVsO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIGZpcnN0IHBhcmFtZXRlciBmb3IgdGhlIGV2ZW50LiBNdXN0IGJlIGJldHdlZW4gMCBhbmQgMjU1LFxuXHQgKiBpbmNsdXNpdmUuXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBwIC0gVGhlIGZpcnN0IGV2ZW50IHBhcmFtZXRlciB2YWx1ZS5cblx0ICovXG5cdE1pZGlFdmVudC5wcm90b3R5cGUuc2V0UGFyYW0xID0gZnVuY3Rpb24ocCkge1xuXHRcdHRoaXMucGFyYW0xID0gcDtcblx0fTtcblxuXHQvKipcblx0ICogU2V0IHRoZSBzZWNvbmQgcGFyYW1ldGVyIGZvciB0aGUgZXZlbnQuIE11c3QgYmUgYmV0d2VlbiAwIGFuZCAyNTUsXG5cdCAqIGluY2x1c2l2ZS5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHAgLSBUaGUgc2Vjb25kIGV2ZW50IHBhcmFtZXRlciB2YWx1ZS5cblx0ICovXG5cdE1pZGlFdmVudC5wcm90b3R5cGUuc2V0UGFyYW0yID0gZnVuY3Rpb24ocCkge1xuXHRcdHRoaXMucGFyYW0yID0gcDtcblx0fTtcblxuXHQvKipcblx0ICogU2VyaWFsaXplIHRoZSBldmVudCB0byBhbiBhcnJheSBvZiBieXRlcy5cblx0ICpcblx0ICogQHJldHVybnMge0FycmF5fSBUaGUgYXJyYXkgb2Ygc2VyaWFsaXplZCBieXRlcy5cblx0ICovXG5cdE1pZGlFdmVudC5wcm90b3R5cGUudG9CeXRlcyA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBieXRlQXJyYXkgPSBbXTtcblxuXHRcdHZhciB0eXBlQ2hhbm5lbEJ5dGUgPSB0aGlzLnR5cGUgfCAodGhpcy5jaGFubmVsICYgMHhGKTtcblxuXHRcdGJ5dGVBcnJheS5wdXNoLmFwcGx5KGJ5dGVBcnJheSwgdGhpcy50aW1lKTtcblx0XHRieXRlQXJyYXkucHVzaCh0eXBlQ2hhbm5lbEJ5dGUpO1xuXHRcdGJ5dGVBcnJheS5wdXNoKHRoaXMucGFyYW0xKTtcblxuXHRcdC8vIFNvbWUgZXZlbnRzIGRvbid0IGhhdmUgYSBzZWNvbmQgcGFyYW1ldGVyXG5cdFx0aWYgKHRoaXMucGFyYW0yICE9PSB1bmRlZmluZWQgJiYgdGhpcy5wYXJhbTIgIT09IG51bGwpIHtcblx0XHRcdGJ5dGVBcnJheS5wdXNoKHRoaXMucGFyYW0yKTtcblx0XHR9XG5cdFx0cmV0dXJuIGJ5dGVBcnJheTtcblx0fTtcblxuXHQvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0ICogTWV0YUV2ZW50IGNsYXNzXG5cdCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuXHQvKipcblx0ICogQ29uc3RydWN0IGEgbWV0YSBldmVudC5cblx0ICpcblx0ICogUGFyYW1ldGVycyBpbmNsdWRlOlxuXHQgKiAgLSB0aW1lIFtvcHRpb25hbCBudW1iZXJdIC0gVGlja3Mgc2luY2UgcHJldmlvdXMgZXZlbnQuXG5cdCAqICAtIHR5cGUgW3JlcXVpcmVkIG51bWJlcl0gLSBUeXBlIG9mIGV2ZW50LlxuXHQgKiAgLSBkYXRhIFtvcHRpb25hbCBhcnJheXxzdHJpbmddIC0gRXZlbnQgZGF0YS5cblx0ICovXG5cdHZhciBNZXRhRXZlbnQgPSBmdW5jdGlvbihwYXJhbXMpIHtcblx0XHRpZiAoIXRoaXMpIHJldHVybiBuZXcgTWV0YUV2ZW50KHBhcmFtcyk7XG5cdFx0dmFyIHAgPSBwYXJhbXMgfHwge307XG5cdFx0dGhpcy5zZXRUaW1lKHBhcmFtcy50aW1lKTtcblx0XHR0aGlzLnNldFR5cGUocGFyYW1zLnR5cGUpO1xuXHRcdHRoaXMuc2V0RGF0YShwYXJhbXMuZGF0YSk7XG5cdH07XG5cblx0TWV0YUV2ZW50LlNFUVVFTkNFICAgPSAweDAwO1xuXHRNZXRhRXZlbnQuVEVYVCAgICAgICA9IDB4MDE7XG5cdE1ldGFFdmVudC5DT1BZUklHSFQgID0gMHgwMjtcblx0TWV0YUV2ZW50LlRSQUNLX05BTUUgPSAweDAzO1xuXHRNZXRhRXZlbnQuSU5TVFJVTUVOVCA9IDB4MDQ7XG5cdE1ldGFFdmVudC5MWVJJQyAgICAgID0gMHgwNTtcblx0TWV0YUV2ZW50Lk1BUktFUiAgICAgPSAweDA2O1xuXHRNZXRhRXZlbnQuQ1VFX1BPSU5UICA9IDB4MDc7XG5cdE1ldGFFdmVudC5DSEFOTkVMX1BSRUZJWCA9IDB4MjA7XG5cdE1ldGFFdmVudC5FTkRfT0ZfVFJBQ0sgICA9IDB4MmY7XG5cdE1ldGFFdmVudC5URU1QTyAgICAgID0gMHg1MTtcblx0TWV0YUV2ZW50LlNNUFRFICAgICAgPSAweDU0O1xuXHRNZXRhRXZlbnQuVElNRV9TSUcgICA9IDB4NTg7XG5cdE1ldGFFdmVudC5LRVlfU0lHICAgID0gMHg1OTtcblx0TWV0YUV2ZW50LlNFUV9FVkVOVCAgPSAweDdmO1xuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIHRpbWUgZm9yIHRoZSBldmVudCBpbiB0aWNrcyBzaW5jZSB0aGUgcHJldmlvdXMgZXZlbnQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0aWNrcyAtIFRoZSBudW1iZXIgb2YgdGlja3Mgc2luY2UgdGhlIHByZXZpb3VzIGV2ZW50LiBNYXlcblx0ICogYmUgemVyby5cblx0ICovXG5cdE1ldGFFdmVudC5wcm90b3R5cGUuc2V0VGltZSA9IGZ1bmN0aW9uKHRpY2tzKSB7XG5cdFx0dGhpcy50aW1lID0gVXRpbC50cmFuc2xhdGVUaWNrVGltZSh0aWNrcyB8fCAwKTtcblx0fTtcblxuXHQvKipcblx0ICogU2V0IHRoZSB0eXBlIG9mIHRoZSBldmVudC4gTXVzdCBiZSBvbmUgb2YgdGhlIGV2ZW50IGNvZGVzIG9uIE1ldGFFdmVudC5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHQgLSBFdmVudCB0eXBlLlxuXHQgKi9cblx0TWV0YUV2ZW50LnByb3RvdHlwZS5zZXRUeXBlID0gZnVuY3Rpb24odCkge1xuXHRcdHRoaXMudHlwZSA9IHQ7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNldCB0aGUgZGF0YSBhc3NvY2lhdGVkIHdpdGggdGhlIGV2ZW50LiBNYXkgYmUgYSBzdHJpbmcgb3IgYXJyYXkgb2YgYnl0ZVxuXHQgKiB2YWx1ZXMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfEFycmF5fSBkIC0gRXZlbnQgZGF0YS5cblx0ICovXG5cdE1ldGFFdmVudC5wcm90b3R5cGUuc2V0RGF0YSA9IGZ1bmN0aW9uKGQpIHtcblx0XHR0aGlzLmRhdGEgPSBkO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXJpYWxpemUgdGhlIGV2ZW50IHRvIGFuIGFycmF5IG9mIGJ5dGVzLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IFRoZSBhcnJheSBvZiBzZXJpYWxpemVkIGJ5dGVzLlxuXHQgKi9cblx0TWV0YUV2ZW50LnByb3RvdHlwZS50b0J5dGVzID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCF0aGlzLnR5cGUpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlR5cGUgZm9yIG1ldGEtZXZlbnQgbm90IHNwZWNpZmllZC5cIik7XG5cdFx0fVxuXG5cdFx0dmFyIGJ5dGVBcnJheSA9IFtdO1xuXHRcdGJ5dGVBcnJheS5wdXNoLmFwcGx5KGJ5dGVBcnJheSwgdGhpcy50aW1lKTtcblx0XHRieXRlQXJyYXkucHVzaCgweEZGLCB0aGlzLnR5cGUpO1xuXG5cdFx0Ly8gSWYgZGF0YSBpcyBhbiBhcnJheSwgd2UgYXNzdW1lIHRoYXQgaXQgY29udGFpbnMgc2V2ZXJhbCBieXRlcy4gV2Vcblx0XHQvLyBhcGVuZCB0aGVtIHRvIGJ5dGVBcnJheS5cblx0XHRpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmRhdGEpKSB7XG5cdFx0XHRieXRlQXJyYXkucHVzaCh0aGlzLmRhdGEubGVuZ3RoKTtcblx0XHRcdGJ5dGVBcnJheS5wdXNoLmFwcGx5KGJ5dGVBcnJheSwgdGhpcy5kYXRhKTtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLmRhdGEgPT0gJ251bWJlcicpIHtcblx0XHRcdGJ5dGVBcnJheS5wdXNoKDEsIHRoaXMuZGF0YSk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLmRhdGEgIT09IG51bGwgJiYgdGhpcy5kYXRhICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdC8vIGFzc3VtZSBzdHJpbmc7IG1heSBiZSBhIGJhZCBhc3N1bXB0aW9uXG5cdFx0XHRieXRlQXJyYXkucHVzaCh0aGlzLmRhdGEubGVuZ3RoKTtcblx0XHRcdHZhciBkYXRhQnl0ZXMgPSB0aGlzLmRhdGEuc3BsaXQoJycpLm1hcChmdW5jdGlvbih4KXsgcmV0dXJuIHguY2hhckNvZGVBdCgwKSB9KTtcblx0XHRcdGJ5dGVBcnJheS5wdXNoLmFwcGx5KGJ5dGVBcnJheSwgZGF0YUJ5dGVzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ynl0ZUFycmF5LnB1c2goMCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGJ5dGVBcnJheTtcblx0fTtcblxuXHQvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0ICogVHJhY2sgY2xhc3Ncblx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG5cdC8qKlxuXHQgKiBDb25zdHJ1Y3QgYSBNSURJIHRyYWNrLlxuXHQgKlxuXHQgKiBQYXJhbWV0ZXJzIGluY2x1ZGU6XG5cdCAqICAtIGV2ZW50cyBbb3B0aW9uYWwgYXJyYXldIC0gQXJyYXkgb2YgZXZlbnRzIGZvciB0aGUgdHJhY2suXG5cdCAqL1xuXHR2YXIgVHJhY2sgPSBmdW5jdGlvbihjb25maWcpIHtcblx0XHRpZiAoIXRoaXMpIHJldHVybiBuZXcgVHJhY2soY29uZmlnKTtcblx0XHR2YXIgYyA9IGNvbmZpZyB8fCB7fTtcblx0XHR0aGlzLmV2ZW50cyA9IGMuZXZlbnRzIHx8IFtdO1xuXHR9O1xuXG5cdFRyYWNrLlNUQVJUX0JZVEVTID0gWzB4NGQsIDB4NTQsIDB4NzIsIDB4NmJdO1xuXHRUcmFjay5FTkRfQllURVMgICA9IFsweDAwLCAweEZGLCAweDJGLCAweDAwXTtcblxuXHQvKipcblx0ICogQWRkIGFuIGV2ZW50IHRvIHRoZSB0cmFjay5cblx0ICpcblx0ICogQHBhcmFtIHtNaWRpRXZlbnR8TWV0YUV2ZW50fSBldmVudCAtIFRoZSBldmVudCB0byBhZGQuXG5cdCAqIEByZXR1cm5zIHtUcmFja30gVGhlIGN1cnJlbnQgdHJhY2suXG5cdCAqL1xuXHRUcmFjay5wcm90b3R5cGUuYWRkRXZlbnQgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdHRoaXMuZXZlbnRzLnB1c2goZXZlbnQpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBBZGQgYSBub3RlLW9uIGV2ZW50IHRvIHRoZSB0cmFjay5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGNoYW5uZWwgLSBUaGUgY2hhbm5lbCB0byBhZGQgdGhlIGV2ZW50IHRvLlxuXHQgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IHBpdGNoIC0gVGhlIHBpdGNoIG9mIHRoZSBub3RlLCBlaXRoZXIgbnVtZXJpYyBvclxuXHQgKiBzeW1ib2xpYy5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lPTBdIC0gVGhlIG51bWJlciBvZiB0aWNrcyBzaW5jZSB0aGUgcHJldmlvdXMgZXZlbnQsXG5cdCAqIGRlZmF1bHRzIHRvIDAuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbdmVsb2NpdHk9OTBdIC0gVGhlIHZvbHVtZSBmb3IgdGhlIG5vdGUsIGRlZmF1bHRzIHRvXG5cdCAqIERFRkFVTFRfVk9MVU1FLlxuXHQgKiBAcmV0dXJucyB7VHJhY2t9IFRoZSBjdXJyZW50IHRyYWNrLlxuXHQgKi9cblx0VHJhY2sucHJvdG90eXBlLmFkZE5vdGVPbiA9IFRyYWNrLnByb3RvdHlwZS5ub3RlT24gPSBmdW5jdGlvbihjaGFubmVsLCBwaXRjaCwgdGltZSwgdmVsb2NpdHkpIHtcblx0XHR0aGlzLmV2ZW50cy5wdXNoKG5ldyBNaWRpRXZlbnQoe1xuXHRcdFx0dHlwZTogTWlkaUV2ZW50Lk5PVEVfT04sXG5cdFx0XHRjaGFubmVsOiBjaGFubmVsLFxuXHRcdFx0cGFyYW0xOiBVdGlsLmVuc3VyZU1pZGlQaXRjaChwaXRjaCksXG5cdFx0XHRwYXJhbTI6IHZlbG9jaXR5IHx8IERFRkFVTFRfVk9MVU1FLFxuXHRcdFx0dGltZTogdGltZSB8fCAwLFxuXHRcdH0pKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHQvKipcblx0ICogQWRkIGEgbm90ZS1vZmYgZXZlbnQgdG8gdGhlIHRyYWNrLlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gY2hhbm5lbCAtIFRoZSBjaGFubmVsIHRvIGFkZCB0aGUgZXZlbnQgdG8uXG5cdCAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gcGl0Y2ggLSBUaGUgcGl0Y2ggb2YgdGhlIG5vdGUsIGVpdGhlciBudW1lcmljIG9yXG5cdCAqIHN5bWJvbGljLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gW3RpbWU9MF0gLSBUaGUgbnVtYmVyIG9mIHRpY2tzIHNpbmNlIHRoZSBwcmV2aW91cyBldmVudCxcblx0ICogZGVmYXVsdHMgdG8gMC5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFt2ZWxvY2l0eT05MF0gLSBUaGUgdmVsb2NpdHkgdGhlIG5vdGUgd2FzIHJlbGVhc2VkLFxuXHQgKiBkZWZhdWx0cyB0byBERUZBVUxUX1ZPTFVNRS5cblx0ICogQHJldHVybnMge1RyYWNrfSBUaGUgY3VycmVudCB0cmFjay5cblx0ICovXG5cdFRyYWNrLnByb3RvdHlwZS5hZGROb3RlT2ZmID0gVHJhY2sucHJvdG90eXBlLm5vdGVPZmYgPSBmdW5jdGlvbihjaGFubmVsLCBwaXRjaCwgdGltZSwgdmVsb2NpdHkpIHtcblx0XHR0aGlzLmV2ZW50cy5wdXNoKG5ldyBNaWRpRXZlbnQoe1xuXHRcdFx0dHlwZTogTWlkaUV2ZW50Lk5PVEVfT0ZGLFxuXHRcdFx0Y2hhbm5lbDogY2hhbm5lbCxcblx0XHRcdHBhcmFtMTogVXRpbC5lbnN1cmVNaWRpUGl0Y2gocGl0Y2gpLFxuXHRcdFx0cGFyYW0yOiB2ZWxvY2l0eSB8fCBERUZBVUxUX1ZPTFVNRSxcblx0XHRcdHRpbWU6IHRpbWUgfHwgMCxcblx0XHR9KSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0LyoqXG5cdCAqIEFkZCBhIG5vdGUtb24gYW5kIC1vZmYgZXZlbnQgdG8gdGhlIHRyYWNrLlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gY2hhbm5lbCAtIFRoZSBjaGFubmVsIHRvIGFkZCB0aGUgZXZlbnQgdG8uXG5cdCAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gcGl0Y2ggLSBUaGUgcGl0Y2ggb2YgdGhlIG5vdGUsIGVpdGhlciBudW1lcmljIG9yXG5cdCAqIHN5bWJvbGljLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gZHVyIC0gVGhlIGR1cmF0aW9uIG9mIHRoZSBub3RlLCBpbiB0aWNrcy5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lPTBdIC0gVGhlIG51bWJlciBvZiB0aWNrcyBzaW5jZSB0aGUgcHJldmlvdXMgZXZlbnQsXG5cdCAqIGRlZmF1bHRzIHRvIDAuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbdmVsb2NpdHk9OTBdIC0gVGhlIHZlbG9jaXR5IHRoZSBub3RlIHdhcyByZWxlYXNlZCxcblx0ICogZGVmYXVsdHMgdG8gREVGQVVMVF9WT0xVTUUuXG5cdCAqIEByZXR1cm5zIHtUcmFja30gVGhlIGN1cnJlbnQgdHJhY2suXG5cdCAqL1xuXHRUcmFjay5wcm90b3R5cGUuYWRkTm90ZSA9IFRyYWNrLnByb3RvdHlwZS5ub3RlID0gZnVuY3Rpb24oY2hhbm5lbCwgcGl0Y2gsIGR1ciwgdGltZSwgdmVsb2NpdHkpIHtcblx0XHR0aGlzLm5vdGVPbihjaGFubmVsLCBwaXRjaCwgdGltZSwgdmVsb2NpdHkpO1xuXHRcdGlmIChkdXIpIHtcblx0XHRcdHRoaXMubm90ZU9mZihjaGFubmVsLCBwaXRjaCwgZHVyLCB2ZWxvY2l0eSk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBBZGQgYSBub3RlLW9uIGFuZCAtb2ZmIGV2ZW50IHRvIHRoZSB0cmFjayBmb3IgZWFjaCBwaXRjaCBpbiBhbiBhcnJheSBvZiBwaXRjaGVzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gY2hhbm5lbCAtIFRoZSBjaGFubmVsIHRvIGFkZCB0aGUgZXZlbnQgdG8uXG5cdCAqIEBwYXJhbSB7YXJyYXl9IGNob3JkIC0gQW4gYXJyYXkgb2YgcGl0Y2hlcywgZWl0aGVyIG51bWVyaWMgb3Jcblx0ICogc3ltYm9saWMuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBkdXIgLSBUaGUgZHVyYXRpb24gb2YgdGhlIGNob3JkLCBpbiB0aWNrcy5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFt2ZWxvY2l0eT05MF0gLSBUaGUgdmVsb2NpdHkgb2YgdGhlIGNob3JkLFxuXHQgKiBkZWZhdWx0cyB0byBERUZBVUxUX1ZPTFVNRS5cblx0ICogQHJldHVybnMge1RyYWNrfSBUaGUgY3VycmVudCB0cmFjay5cblx0ICovXG5cdFRyYWNrLnByb3RvdHlwZS5hZGRDaG9yZCA9IFRyYWNrLnByb3RvdHlwZS5jaG9yZCA9IGZ1bmN0aW9uKGNoYW5uZWwsIGNob3JkLCBkdXIsIHZlbG9jaXR5KSB7XG5cdFx0aWYgKCFBcnJheS5pc0FycmF5KGNob3JkKSAmJiAhY2hvcmQubGVuZ3RoKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0Nob3JkIG11c3QgYmUgYW4gYXJyYXkgb2YgcGl0Y2hlcycpO1xuXHRcdH1cblx0XHRjaG9yZC5mb3JFYWNoKGZ1bmN0aW9uKG5vdGUpIHtcblx0XHRcdHRoaXMubm90ZU9uKGNoYW5uZWwsIG5vdGUsIDAsIHZlbG9jaXR5KTtcblx0XHR9LCB0aGlzKTtcblx0XHRjaG9yZC5mb3JFYWNoKGZ1bmN0aW9uKG5vdGUsIGluZGV4KSB7XG5cdFx0XHRpZiAoaW5kZXggPT09IDApIHtcblx0XHRcdFx0dGhpcy5ub3RlT2ZmKGNoYW5uZWwsIG5vdGUsIGR1cik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLm5vdGVPZmYoY2hhbm5lbCwgbm90ZSk7XG5cdFx0XHR9XG5cdFx0fSwgdGhpcyk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNldCBpbnN0cnVtZW50IGZvciB0aGUgdHJhY2suXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBjaGFubmVsIC0gVGhlIGNoYW5uZWwgdG8gc2V0IHRoZSBpbnN0cnVtZW50IG9uLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gaW5zdHJ1bWVudCAtIFRoZSBpbnN0cnVtZW50IHRvIHNldCBpdCB0by5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lPTBdIC0gVGhlIG51bWJlciBvZiB0aWNrcyBzaW5jZSB0aGUgcHJldmlvdXMgZXZlbnQsXG5cdCAqIGRlZmF1bHRzIHRvIDAuXG5cdCAqIEByZXR1cm5zIHtUcmFja30gVGhlIGN1cnJlbnQgdHJhY2suXG5cdCAqL1xuXHRUcmFjay5wcm90b3R5cGUuc2V0SW5zdHJ1bWVudCA9IFRyYWNrLnByb3RvdHlwZS5pbnN0cnVtZW50ID0gZnVuY3Rpb24oY2hhbm5lbCwgaW5zdHJ1bWVudCwgdGltZSkge1xuXHRcdHRoaXMuZXZlbnRzLnB1c2gobmV3IE1pZGlFdmVudCh7XG5cdFx0XHR0eXBlOiBNaWRpRXZlbnQuUFJPR1JBTV9DSEFOR0UsXG5cdFx0XHRjaGFubmVsOiBjaGFubmVsLFxuXHRcdFx0cGFyYW0xOiBpbnN0cnVtZW50LFxuXHRcdFx0dGltZTogdGltZSB8fCAwLFxuXHRcdH0pKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHQvKipcblx0ICogU2V0IHRoZSB0ZW1wbyBmb3IgdGhlIHRyYWNrLlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gYnBtIC0gVGhlIG5ldyBudW1iZXIgb2YgYmVhdHMgcGVyIG1pbnV0ZS5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lPTBdIC0gVGhlIG51bWJlciBvZiB0aWNrcyBzaW5jZSB0aGUgcHJldmlvdXMgZXZlbnQsXG5cdCAqIGRlZmF1bHRzIHRvIDAuXG5cdCAqIEByZXR1cm5zIHtUcmFja30gVGhlIGN1cnJlbnQgdHJhY2suXG5cdCAqL1xuXHRUcmFjay5wcm90b3R5cGUuc2V0VGVtcG8gPSBUcmFjay5wcm90b3R5cGUudGVtcG8gPSBmdW5jdGlvbihicG0sIHRpbWUpIHtcblx0XHR0aGlzLmV2ZW50cy5wdXNoKG5ldyBNZXRhRXZlbnQoe1xuXHRcdFx0dHlwZTogTWV0YUV2ZW50LlRFTVBPLFxuXHRcdFx0ZGF0YTogVXRpbC5tcHFuRnJvbUJwbShicG0pLFxuXHRcdFx0dGltZTogdGltZSB8fCAwLFxuXHRcdH0pKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHQvKipcblx0ICogU2VyaWFsaXplIHRoZSB0cmFjayB0byBhbiBhcnJheSBvZiBieXRlcy5cblx0ICpcblx0ICogQHJldHVybnMge0FycmF5fSBUaGUgYXJyYXkgb2Ygc2VyaWFsaXplZCBieXRlcy5cblx0ICovXG5cdFRyYWNrLnByb3RvdHlwZS50b0J5dGVzID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHRyYWNrTGVuZ3RoID0gMDtcblx0XHR2YXIgZXZlbnRCeXRlcyA9IFtdO1xuXHRcdHZhciBzdGFydEJ5dGVzID0gVHJhY2suU1RBUlRfQllURVM7XG5cdFx0dmFyIGVuZEJ5dGVzICAgPSBUcmFjay5FTkRfQllURVM7XG5cblx0XHR2YXIgYWRkRXZlbnRCeXRlcyA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHR2YXIgYnl0ZXMgPSBldmVudC50b0J5dGVzKCk7XG5cdFx0XHR0cmFja0xlbmd0aCArPSBieXRlcy5sZW5ndGg7XG5cdFx0XHRldmVudEJ5dGVzLnB1c2guYXBwbHkoZXZlbnRCeXRlcywgYnl0ZXMpO1xuXHRcdH07XG5cblx0XHR0aGlzLmV2ZW50cy5mb3JFYWNoKGFkZEV2ZW50Qnl0ZXMpO1xuXG5cdFx0Ly8gQWRkIHRoZSBlbmQtb2YtdHJhY2sgYnl0ZXMgdG8gdGhlIHN1bSBvZiBieXRlcyBmb3IgdGhlIHRyYWNrLCBzaW5jZVxuXHRcdC8vIHRoZXkgYXJlIGNvdW50ZWQgKHVubGlrZSB0aGUgc3RhcnQtb2YtdHJhY2sgb25lcykuXG5cdFx0dHJhY2tMZW5ndGggKz0gZW5kQnl0ZXMubGVuZ3RoO1xuXG5cdFx0Ly8gTWFrZXMgc3VyZSB0aGF0IHRyYWNrIGxlbmd0aCB3aWxsIGZpbGwgdXAgNCBieXRlcyB3aXRoIDBzIGluIGNhc2Vcblx0XHQvLyB0aGUgbGVuZ3RoIGlzIGxlc3MgdGhhbiB0aGF0ICh0aGUgdXN1YWwgY2FzZSkuXG5cdFx0dmFyIGxlbmd0aEJ5dGVzID0gVXRpbC5zdHIyQnl0ZXModHJhY2tMZW5ndGgudG9TdHJpbmcoMTYpLCA0KTtcblxuXHRcdHJldHVybiBzdGFydEJ5dGVzLmNvbmNhdChsZW5ndGhCeXRlcywgZXZlbnRCeXRlcywgZW5kQnl0ZXMpO1xuXHR9O1xuXG5cdC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXHQgKiBGaWxlIGNsYXNzXG5cdCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuXHQvKipcblx0ICogQ29uc3RydWN0IGEgZmlsZSBvYmplY3QuXG5cdCAqXG5cdCAqIFBhcmFtZXRlcnMgaW5jbHVkZTpcblx0ICogIC0gdGlja3MgW29wdGlvbmFsIG51bWJlcl0gLSBOdW1iZXIgb2YgdGlja3MgcGVyIGJlYXQsIGRlZmF1bHRzIHRvIDEyOC5cblx0ICogICAgTXVzdCBiZSAxLTMyNzY3LlxuXHQgKiAgLSB0cmFja3MgW29wdGlvbmFsIGFycmF5XSAtIFRyYWNrIGRhdGEuXG5cdCAqL1xuXHR2YXIgRmlsZSA9IGZ1bmN0aW9uKGNvbmZpZyl7XG5cdFx0aWYgKCF0aGlzKSByZXR1cm4gbmV3IEZpbGUoY29uZmlnKTtcblxuXHRcdHZhciBjID0gY29uZmlnIHx8IHt9O1xuXHRcdGlmIChjLnRpY2tzKSB7XG5cdFx0XHRpZiAodHlwZW9mIGMudGlja3MgIT09ICdudW1iZXInKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignVGlja3MgcGVyIGJlYXQgbXVzdCBiZSBhIG51bWJlciEnKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGMudGlja3MgPD0gMCB8fCBjLnRpY2tzID49ICgxIDw8IDE1KSB8fCBjLnRpY2tzICUgMSAhPT0gMCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RpY2tzIHBlciBiZWF0IG11c3QgYmUgYW4gaW50ZWdlciBiZXR3ZWVuIDEgYW5kIDMyNzY3IScpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy50aWNrcyA9IGMudGlja3MgfHwgMTI4O1xuXHRcdHRoaXMudHJhY2tzID0gYy50cmFja3MgfHwgW107XG5cdH07XG5cblx0RmlsZS5IRFJfQ0hVTktJRCAgICAgPSBcIk1UaGRcIjsgICAgICAgICAgICAgLy8gRmlsZSBtYWdpYyBjb29raWVcblx0RmlsZS5IRFJfQ0hVTktfU0laRSAgPSBcIlxceDAwXFx4MDBcXHgwMFxceDA2XCI7IC8vIEhlYWRlciBsZW5ndGggZm9yIFNNRlxuXHRGaWxlLkhEUl9UWVBFMCAgICAgICA9IFwiXFx4MDBcXHgwMFwiOyAgICAgICAgIC8vIE1pZGkgVHlwZSAwIGlkXG5cdEZpbGUuSERSX1RZUEUxICAgICAgID0gXCJcXHgwMFxceDAxXCI7ICAgICAgICAgLy8gTWlkaSBUeXBlIDEgaWRcblxuXHQvKipcblx0ICogQWRkIGEgdHJhY2sgdG8gdGhlIGZpbGUuXG5cdCAqXG5cdCAqIEBwYXJhbSB7VHJhY2t9IHRyYWNrIC0gVGhlIHRyYWNrIHRvIGFkZC5cblx0ICovXG5cdEZpbGUucHJvdG90eXBlLmFkZFRyYWNrID0gZnVuY3Rpb24odHJhY2spIHtcblx0XHRpZiAodHJhY2spIHtcblx0XHRcdHRoaXMudHJhY2tzLnB1c2godHJhY2spO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRyYWNrID0gbmV3IFRyYWNrKCk7XG5cdFx0XHR0aGlzLnRyYWNrcy5wdXNoKHRyYWNrKTtcblx0XHRcdHJldHVybiB0cmFjaztcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIFNlcmlhbGl6ZSB0aGUgTUlESSBmaWxlIHRvIGFuIGFycmF5IG9mIGJ5dGVzLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IFRoZSBhcnJheSBvZiBzZXJpYWxpemVkIGJ5dGVzLlxuXHQgKi9cblx0RmlsZS5wcm90b3R5cGUudG9CeXRlcyA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciB0cmFja0NvdW50ID0gdGhpcy50cmFja3MubGVuZ3RoLnRvU3RyaW5nKDE2KTtcblxuXHRcdC8vIHByZXBhcmUgdGhlIGZpbGUgaGVhZGVyXG5cdFx0dmFyIGJ5dGVzID0gRmlsZS5IRFJfQ0hVTktJRCArIEZpbGUuSERSX0NIVU5LX1NJWkU7XG5cblx0XHQvLyBzZXQgTWlkaSB0eXBlIGJhc2VkIG9uIG51bWJlciBvZiB0cmFja3Ncblx0XHRpZiAocGFyc2VJbnQodHJhY2tDb3VudCwgMTYpID4gMSkge1xuXHRcdFx0Ynl0ZXMgKz0gRmlsZS5IRFJfVFlQRTE7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGJ5dGVzICs9IEZpbGUuSERSX1RZUEUwO1xuXHRcdH1cblxuXHRcdC8vIGFkZCB0aGUgbnVtYmVyIG9mIHRyYWNrcyAoMiBieXRlcylcblx0XHRieXRlcyArPSBVdGlsLmNvZGVzMlN0cihVdGlsLnN0cjJCeXRlcyh0cmFja0NvdW50LCAyKSk7XG5cdFx0Ly8gYWRkIHRoZSBudW1iZXIgb2YgdGlja3MgcGVyIGJlYXQgKGN1cnJlbnRseSBoYXJkY29kZWQpXG5cdFx0Ynl0ZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgodGhpcy50aWNrcy8yNTYpLCAgdGhpcy50aWNrcyUyNTYpOztcblxuXHRcdC8vIGl0ZXJhdGUgb3ZlciB0aGUgdHJhY2tzLCBjb252ZXJ0aW5nIHRvIGJ5dGVzIHRvb1xuXHRcdHRoaXMudHJhY2tzLmZvckVhY2goZnVuY3Rpb24odHJhY2spIHtcblx0XHRcdGJ5dGVzICs9IFV0aWwuY29kZXMyU3RyKHRyYWNrLnRvQnl0ZXMoKSk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gYnl0ZXM7XG5cdH07XG5cblx0LyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdCAqIEV4cG9ydHNcblx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG5cdGV4cG9ydGVkLlV0aWwgPSBVdGlsO1xuXHRleHBvcnRlZC5GaWxlID0gRmlsZTtcblx0ZXhwb3J0ZWQuVHJhY2sgPSBUcmFjaztcblx0ZXhwb3J0ZWQuRXZlbnQgPSBNaWRpRXZlbnQ7XG5cdGV4cG9ydGVkLk1ldGFFdmVudCA9IE1ldGFFdmVudDtcblxufSkoIE1pZGkgKTtcblxuaWYgKHR5cGVvZiBtb2R1bGUgIT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlICE9PSBudWxsKSB7XG5cdG1vZHVsZS5leHBvcnRzID0gTWlkaTtcbn0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT0gJ3VuZGVmaW5lZCcgJiYgZXhwb3J0cyAhPT0gbnVsbCkge1xuXHRleHBvcnRzID0gTWlkaTtcbn0gZWxzZSB7XG5cdHRoaXMuTWlkaSA9IE1pZGk7XG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLnJlZHVjZSgocHJldiwgY3VyKSA9PiBwcmV2LmNvbmNhdChjdXIpLCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBlYXQodmFsdWUsIHRpbWVzKSB7XG4gIGNvbnN0IG91dCA9IFtdO1xuXG4gIHdoaWxlICh0aW1lcykge1xuICAgIG91dC5wdXNoKHZhbHVlKTtcbiAgICB0aW1lcyAtPSAxO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmdlKG1pbiwgbWF4LCBzdGVwKSB7XG4gIGNvbnN0IGFjYyA9IFtdO1xuXG4gIGlmICghc3RlcCkge1xuICAgIGZvciAobGV0IGkgPSBtaW47IGkgPD0gbWF4OyBpICs9IDEpIHtcbiAgICAgIGFjYy5wdXNoKGkpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBkaWZmID0gKG1heCAtIG1pbikgLyBzdGVwO1xuXG4gICAgZm9yIChsZXQgaSA9IG1pbjsgaSA8PSBtYXg7IGkgKz0gZGlmZikge1xuICAgICAgYWNjLnB1c2goaSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFjYztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKHZhbHVlKSB7XG4gIGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JykgcmV0dXJuIHZhbHVlO1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHJldHVybiB2YWx1ZS5tYXAoY2xvbmUpO1xuXG4gIGNvbnN0IGNvcHkgPSB7fTtcblxuICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaChrZXkgPT4ge1xuICAgIGNvcHlba2V5XSA9IGNsb25lKHZhbHVlW2tleV0pO1xuICB9KTtcblxuICByZXR1cm4gY29weTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHppcChhLCBiLCBjYikge1xuICBjb25zdCBtYXggPSBNYXRoLm1heChhLmxlbmd0aCwgYi5sZW5ndGgpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4OyBpICs9IDEpIHtcbiAgICBpZiAodHlwZW9mIGFbaV0gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBiW2ldICE9PSAndW5kZWZpbmVkJykgY2IoYVtpXSwgYltpXSk7XG4gIH1cbn1cbiIsICIoKCk9PntcInVzZSBzdHJpY3RcIjt2YXIgbj17NDEzOm49PntuLmV4cG9ydHM9SlNPTi5wYXJzZSgne1wiNXRoXCI6XCIxMDAwMDAwMTAwMDBcIixcIk03IzVzdXM0XCI6XCIxMDAwMDEwMDEwMDFcIixcIjcjNXN1czRcIjpcIjEwMDAwMTAwMTAxMFwiLFwic3VzNFwiOlwiMTAwMDAxMDEwMDAwXCIsXCJNN3N1czRcIjpcIjEwMDAwMTAxMDAwMVwiLFwiN3N1czRcIjpcIjEwMDAwMTAxMDAxMFwiLFwiN25vNVwiOlwiMTAwMDEwMDAwMDEwXCIsXCJhdWdcIjpcIjEwMDAxMDAwMTAwMFwiLFwiTTdiNlwiOlwiMTAwMDEwMDAxMDAxXCIsXCJtYWo3IzVcIjpcIjEwMDAxMDAwMTAwMVwiLFwiNyM1XCI6XCIxMDAwMTAwMDEwMTBcIixcIjdiMTNcIjpcIjEwMDAxMDAwMTAxMFwiLFwiTVwiOlwiMTAwMDEwMDEwMDAwXCIsXCJtYWo3XCI6XCIxMDAwMTAwMTAwMDFcIixcIjd0aFwiOlwiMTAwMDEwMDEwMDEwXCIsXCI2dGhcIjpcIjEwMDAxMDAxMDEwMFwiLFwiN2FkZDZcIjpcIjEwMDAxMDAxMDExMFwiLFwiN2I2XCI6XCIxMDAwMTAwMTEwMTBcIixcIk1iNVwiOlwiMTAwMDEwMTAwMDAwXCIsXCJNN2I1XCI6XCIxMDAwMTAxMDAwMDFcIixcIjdiNVwiOlwiMTAwMDEwMTAwMDEwXCIsXCJtYWojNFwiOlwiMTAwMDEwMTEwMDAxXCIsXCI3IzExXCI6XCIxMDAwMTAxMTAwMTBcIixcIk02IzExXCI6XCIxMDAwMTAxMTAxMDBcIixcIjcjMTFiMTNcIjpcIjEwMDAxMDExMTAxMFwiLFwibSM1XCI6XCIxMDAxMDAwMDEwMDBcIixcIm1iNk03XCI6XCIxMDAxMDAwMDEwMDFcIixcIm03IzVcIjpcIjEwMDEwMDAwMTAxMFwiLFwibVwiOlwiMTAwMTAwMDEwMDAwXCIsXCJtL21hN1wiOlwiMTAwMTAwMDEwMDAxXCIsXCJtN1wiOlwiMTAwMTAwMDEwMDEwXCIsXCJtNlwiOlwiMTAwMTAwMDEwMTAwXCIsXCJtTWFqN2I2XCI6XCIxMDAxMDAwMTEwMDFcIixcImRpbVwiOlwiMTAwMTAwMTAwMDAwXCIsXCJvTTdcIjpcIjEwMDEwMDEwMDAwMVwiLFwibTdiNVwiOlwiMTAwMTAwMTAwMDEwXCIsXCJkaW03XCI6XCIxMDAxMDAxMDAxMDBcIixcIm83TTdcIjpcIjEwMDEwMDEwMDEwMVwiLFwiNHRoXCI6XCIxMDAxMDEwMDAwMTBcIixcIm1hZGQ0XCI6XCIxMDAxMDEwMTAwMDBcIixcIm03YWRkMTFcIjpcIjEwMDEwMTAxMDAxMFwiLFwiK2FkZCM5XCI6XCIxMDAxMTAwMDEwMDBcIixcIjcjNSM5XCI6XCIxMDAxMTAwMDEwMTBcIixcIjcjOVwiOlwiMTAwMTEwMDEwMDEwXCIsXCIxMyM5XCI6XCIxMDAxMTAwMTAxMTBcIixcIjcjOWIxM1wiOlwiMTAwMTEwMDExMDEwXCIsXCJtYWo3IzkjMTFcIjpcIjEwMDExMDExMDAwMVwiLFwiNyM5IzExXCI6XCIxMDAxMTAxMTAwMTBcIixcIjEzIzkjMTFcIjpcIjEwMDExMDExMDExMFwiLFwiNyM5IzExYjEzXCI6XCIxMDAxMTAxMTEwMTBcIixcInN1czJcIjpcIjEwMTAwMDAxMDAwMFwiLFwiTTkjNXN1czRcIjpcIjEwMTAwMTAwMTAwMVwiLFwic3VzMjRcIjpcIjEwMTAwMTAxMDAwMFwiLFwiTTlzdXM0XCI6XCIxMDEwMDEwMTAwMDFcIixcIjExdGhcIjpcIjEwMTAwMTAxMDAxMFwiLFwiOXN1czRcIjpcIjEwMTAwMTAxMDAxMFwiLFwiMTNzdXM0XCI6XCIxMDEwMDEwMTAxMTBcIixcIjlubzVcIjpcIjEwMTAxMDAwMDAxMFwiLFwiMTNubzVcIjpcIjEwMTAxMDAwMDExMFwiLFwiTSM1YWRkOVwiOlwiMTAxMDEwMDAxMDAwXCIsXCJtYWo5IzVcIjpcIjEwMTAxMDAwMTAwMVwiLFwiOSM1XCI6XCIxMDEwMTAwMDEwMTBcIixcIjliMTNcIjpcIjEwMTAxMDAwMTAxMFwiLFwiTWFkZDlcIjpcIjEwMTAxMDAxMDAwMFwiLFwibWFqOVwiOlwiMTAxMDEwMDEwMDAxXCIsXCI5dGhcIjpcIjEwMTAxMDAxMDAxMFwiLFwiNi85XCI6XCIxMDEwMTAwMTAxMDBcIixcIm1hajEzXCI6XCIxMDEwMTAwMTAxMDFcIixcIk03YWRkMTNcIjpcIjEwMTAxMDAxMDEwMVwiLFwiMTN0aFwiOlwiMTAxMDEwMDEwMTEwXCIsXCJNOWI1XCI6XCIxMDEwMTAxMDAwMDFcIixcIjliNVwiOlwiMTAxMDEwMTAwMDEwXCIsXCIxM2I1XCI6XCIxMDEwMTAxMDAxMTBcIixcIjkjNSMxMVwiOlwiMTAxMDEwMTAxMDEwXCIsXCJtYWo5IzExXCI6XCIxMDEwMTAxMTAwMDFcIixcIjkjMTFcIjpcIjEwMTAxMDExMDAxMFwiLFwiNjkjMTFcIjpcIjEwMTAxMDExMDEwMFwiLFwiTTEzIzExXCI6XCIxMDEwMTAxMTAxMDFcIixcIjEzIzExXCI6XCIxMDEwMTAxMTAxMTBcIixcIjkjMTFiMTNcIjpcIjEwMTAxMDExMTAxMFwiLFwibTkjNVwiOlwiMTAxMTAwMDAxMDEwXCIsXCJtYWRkOVwiOlwiMTAxMTAwMDEwMDAwXCIsXCJtTTlcIjpcIjEwMTEwMDAxMDAwMVwiLFwibTlcIjpcIjEwMTEwMDAxMDAxMFwiLFwibTY5XCI6XCIxMDExMDAwMTAxMDBcIixcIm0xM1wiOlwiMTAxMTAwMDEwMTEwXCIsXCJtTWFqOWI2XCI6XCIxMDExMDAwMTEwMDFcIixcIm05YjVcIjpcIjEwMTEwMDEwMDAxMFwiLFwibTExQVwiOlwiMTAxMTAxMDAxMDEwXCIsXCJtMTFcIjpcIjEwMTEwMTAxMDAxMFwiLFwiYjlzdXNcIjpcIjExMDAwMTAxMDAxMFwiLFwiMTFiOVwiOlwiMTEwMDAxMDEwMDEwXCIsXCI3c3VzNGI5YjEzXCI6XCIxMTAwMDEwMTEwMTBcIixcImFsdDdcIjpcIjExMDAxMDAwMDAxMFwiLFwiNyM1YjlcIjpcIjExMDAxMDAwMTAxMFwiLFwiTWFkZGI5XCI6XCIxMTAwMTAwMTAwMDBcIixcIk03YjlcIjpcIjExMDAxMDAxMDAwMVwiLFwiN2I5XCI6XCIxMTAwMTAwMTAwMTBcIixcIjEzYjlcIjpcIjExMDAxMDAxMDExMFwiLFwiN2I5YjEzXCI6XCIxMTAwMTAwMTEwMTBcIixcIjcjNWI5IzExXCI6XCIxMTAwMTAxMDEwMTBcIixcIjdiOSMxMVwiOlwiMTEwMDEwMTEwMDEwXCIsXCIxM2I5IzExXCI6XCIxMTAwMTAxMTAxMTBcIixcIjdiOWIxMyMxMVwiOlwiMTEwMDEwMTExMDEwXCIsXCJtYjZiOVwiOlwiMTEwMTAwMDAxMDAwXCIsXCI3YjkjOVwiOlwiMTEwMTEwMDEwMDEwXCJ9Jyl9LDcyMjpuPT57bi5leHBvcnRzPUpTT04ucGFyc2UoJ3tcIm1ham9yIHBlbnRhdG9uaWNcIjpcIjEwMTAxMDAxMDEwMFwiLFwiaW9uaWFuIHBlbnRhdG9uaWNcIjpcIjEwMDAxMTAxMDAwMVwiLFwibWl4b2x5ZGlhbiBwZW50YXRvbmljXCI6XCIxMDAwMTEwMTAwMTBcIixcInJpdHVzZW5cIjpcIjEwMTAwMTAxMDEwMFwiLFwiZWd5cHRpYW5cIjpcIjEwMTAwMTAxMDAxMFwiLFwibmVvcG9saXRhbiBtYWpvciBwZW50YXRvbmljXCI6XCIxMDAwMTExMDAwMTBcIixcInZpZXRuYW1lc2UgMVwiOlwiMTAwMTAxMDExMDAwXCIsXCJwZWxvZ1wiOlwiMTEwMTAwMDExMDAwXCIsXCJrdW1vaWpvc2hpXCI6XCIxMTAwMDEwMTEwMDBcIixcImhpcmFqb3NoaVwiOlwiMTAxMTAwMDExMDAwXCIsXCJpd2F0b1wiOlwiMTEwMDAxMTAwMDEwXCIsXCJpbi1zZW5cIjpcIjExMDAwMTAxMDAxMFwiLFwibHlkaWFuIHBlbnRhdG9uaWNcIjpcIjEwMDAxMDExMDAwMVwiLFwibWFsa29zIHJhZ2FcIjpcIjEwMDEwMTAwMTAxMFwiLFwibG9jcmlhbiBwZW50YXRvbmljXCI6XCIxMDAxMDExMDAwMTBcIixcIm1pbm9yIHBlbnRhdG9uaWNcIjpcIjEwMDEwMTAxMDAxMFwiLFwibWlub3Igc2l4IHBlbnRhdG9uaWNcIjpcIjEwMDEwMTAxMDEwMFwiLFwiZmxhdCB0aHJlZSBwZW50YXRvbmljXCI6XCIxMDExMDAwMTAxMDBcIixcImZsYXQgc2l4IHBlbnRhdG9uaWNcIjpcIjEwMTAxMDAxMTAwMFwiLFwic2NyaWFiaW5cIjpcIjExMDAxMDAxMDEwMFwiLFwid2hvbGUgdG9uZSBwZW50YXRvbmljXCI6XCIxMDAwMTAxMDEwMTBcIixcImx5ZGlhbiAjNVAgcGVudGF0b25pY1wiOlwiMTAwMDEwMTAxMDAxXCIsXCJseWRpYW4gZG9taW5hbnQgcGVudGF0b25pY1wiOlwiMTAwMDEwMTEwMDEwXCIsXCJtaW5vciAjN00gcGVudGF0b25pY1wiOlwiMTAwMTAxMDEwMDAxXCIsXCJzdXBlciBsb2NyaWFuIHBlbnRhdG9uaWNcIjpcIjEwMDExMDEwMDAxMFwiLFwibWlub3IgaGV4YXRvbmljXCI6XCIxMDExMDEwMTAwMDFcIixcImF1Z21lbnRlZFwiOlwiMTAwMTEwMDExMDAxXCIsXCJtYWpvciBibHVlc1wiOlwiMTAxMTEwMDEwMTAwXCIsXCJwaW9uZ2lvXCI6XCIxMDEwMDEwMTAxMTBcIixcInByb21ldGhldXMgbmVvcG9saXRhblwiOlwiMTEwMDEwMTAwMTEwXCIsXCJwcm9tZXRoZXVzXCI6XCIxMDEwMTAxMDAxMTBcIixcIm15c3RlcnkgIzFcIjpcIjExMDAxMDEwMTAxMFwiLFwic2l4IHRvbmUgc3ltbWV0cmljXCI6XCIxMTAwMTEwMDExMDBcIixcIndob2xlIHRvbmVcIjpcIjEwMTAxMDEwMTAxMFwiLFwibWVzc2lhZW5cXCdzIG1vZGUgIzVcIjpcIjExMDAwMTExMDAwMVwiLFwibWlub3IgYmx1ZXNcIjpcIjEwMDEwMTExMDAxMFwiLFwibG9jcmlhbiBtYWpvclwiOlwiMTAxMDExMTAxMDEwXCIsXCJkb3VibGUgaGFybW9uaWMgbHlkaWFuXCI6XCIxMTAwMTAxMTEwMDFcIixcImhhcm1vbmljIG1pbm9yXCI6XCIxMDExMDEwMTEwMDFcIixcImFsdGVyZWRcIjpcIjExMDExMDEwMTAxMFwiLFwibG9jcmlhbiAjMlwiOlwiMTAxMTAxMTAxMDEwXCIsXCJtaXhvbHlkaWFuIGI2XCI6XCIxMDEwMTEwMTEwMTBcIixcImx5ZGlhbiBkb21pbmFudFwiOlwiMTAxMDEwMTEwMTEwXCIsXCJseWRpYW5cIjpcIjEwMTAxMDExMDEwMVwiLFwibHlkaWFuIGF1Z21lbnRlZFwiOlwiMTAxMDEwMTAxMTAxXCIsXCJkb3JpYW4gYjJcIjpcIjExMDEwMTAxMDExMFwiLFwibWVsb2RpYyBtaW5vclwiOlwiMTAxMTAxMDEwMTAxXCIsXCJsb2NyaWFuXCI6XCIxMTAxMDExMDEwMTBcIixcInVsdHJhbG9jcmlhblwiOlwiMTEwMTEwMTAxMTAwXCIsXCJsb2NyaWFuIDZcIjpcIjExMDEwMTEwMDExMFwiLFwiYXVnbWVudGVkIGhlcHRhdG9uaWNcIjpcIjEwMDExMTAxMTAwMVwiLFwicm9tYW5pYW4gbWlub3JcIjpcIjEwMTEwMDExMDExMFwiLFwiZG9yaWFuICM0XCI6XCIxMDExMDAxMTAxMTBcIixcImx5ZGlhbiBkaW1pbmlzaGVkXCI6XCIxMDExMDAxMTAxMDFcIixcInBocnlnaWFuXCI6XCIxMTAxMDEwMTEwMTBcIixcImxlYWRpbmcgd2hvbGUgdG9uZVwiOlwiMTAxMDEwMTAxMDExXCIsXCJseWRpYW4gbWlub3JcIjpcIjEwMTAxMDExMTAxMFwiLFwicGhyeWdpYW4gZG9taW5hbnRcIjpcIjExMDAxMTAxMTAxMFwiLFwiYmFsaW5lc2VcIjpcIjExMDEwMTAxMTAwMVwiLFwibmVvcG9saXRhbiBtYWpvclwiOlwiMTEwMTAxMDEwMTAxXCIsXCJhZW9saWFuXCI6XCIxMDExMDEwMTEwMTBcIixcImhhcm1vbmljIG1ham9yXCI6XCIxMDEwMTEwMTEwMDFcIixcImRvdWJsZSBoYXJtb25pYyBtYWpvclwiOlwiMTEwMDExMDExMDAxXCIsXCJkb3JpYW5cIjpcIjEwMTEwMTAxMDExMFwiLFwiaHVuZ2FyaWFuIG1pbm9yXCI6XCIxMDExMDAxMTEwMDFcIixcImh1bmdhcmlhbiBtYWpvclwiOlwiMTAwMTEwMTEwMTEwXCIsXCJvcmllbnRhbFwiOlwiMTEwMDExMTAwMTEwXCIsXCJmbGFtZW5jb1wiOlwiMTEwMTEwMTEwMDEwXCIsXCJ0b2RpIHJhZ2FcIjpcIjExMDEwMDExMTAwMVwiLFwibWl4b2x5ZGlhblwiOlwiMTAxMDExMDEwMTEwXCIsXCJwZXJzaWFuXCI6XCIxMTAwMTExMDEwMDFcIixcIm1ham9yXCI6XCIxMDEwMTEwMTAxMDFcIixcImVuaWdtYXRpY1wiOlwiMTEwMDEwMTAxMDExXCIsXCJtYWpvciBhdWdtZW50ZWRcIjpcIjEwMTAxMTAwMTEwMVwiLFwibHlkaWFuICM5XCI6XCIxMDAxMTAxMTAxMDFcIixcIm1lc3NpYWVuXFwncyBtb2RlICM0XCI6XCIxMTEwMDExMTEwMDFcIixcInB1cnZpIHJhZ2FcIjpcIjExMDAxMTExMTAwMVwiLFwic3BhbmlzaCBoZXB0YXRvbmljXCI6XCIxMTAxMTEwMTEwMTBcIixcImJlYm9wXCI6XCIxMDEwMTEwMTAxMTFcIixcImJlYm9wIG1pbm9yXCI6XCIxMDExMTEwMTAxMTBcIixcImJlYm9wIG1ham9yXCI6XCIxMDEwMTEwMTExMDFcIixcImJlYm9wIGxvY3JpYW5cIjpcIjExMDEwMTExMTAxMFwiLFwibWlub3IgYmVib3BcIjpcIjEwMTEwMTAxMTAxMVwiLFwiZGltaW5pc2hlZFwiOlwiMTAxMTAxMTAxMTAxXCIsXCJpY2hpa29zdWNob1wiOlwiMTAxMDExMTEwMTAxXCIsXCJtaW5vciBzaXggZGltaW5pc2hlZFwiOlwiMTAxMTAxMDExMTAxXCIsXCJoYWxmLXdob2xlIGRpbWluaXNoZWRcIjpcIjExMDExMDExMDExMFwiLFwia2FmaSByYWdhXCI6XCIxMDAxMTEwMTAxMTFcIixcIm1lc3NpYWVuXFwncyBtb2RlICM2XCI6XCIxMDEwMTExMDEwMTFcIixcImNvbXBvc2l0ZSBibHVlc1wiOlwiMTAxMTExMTEwMTEwXCIsXCJtZXNzaWFlblxcJ3MgbW9kZSAjM1wiOlwiMTAxMTEwMTExMDExXCIsXCJtZXNzaWFlblxcJ3MgbW9kZSAjN1wiOlwiMTExMTAxMTExMTAxXCIsXCJjaHJvbWF0aWNcIjpcIjExMTExMTExMTExMVwiLFwiaW9uaWFuXCI6XCIxMDEwMTEwMTAxMDFcIixcIm1pbm9yXCI6XCIxMDExMDEwMTEwMTBcIn0nKX19LGU9e307ZnVuY3Rpb24gbyhhKXt2YXIgaT1lW2FdO2lmKHZvaWQgMCE9PWkpcmV0dXJuIGkuZXhwb3J0czt2YXIgcj1lW2FdPXtleHBvcnRzOnt9fTtyZXR1cm4gblthXShyLHIuZXhwb3J0cyxvKSxyLmV4cG9ydHN9by5kPShuLGUpPT57Zm9yKHZhciBhIGluIGUpby5vKGUsYSkmJiFvLm8obixhKSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sYSx7ZW51bWVyYWJsZTohMCxnZXQ6ZVthXX0pfSxvLm89KG4sZSk9Pk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLGUpLG8ucj1uPT57XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkobixTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkobixcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX07dmFyIGE9e307KCgpPT57by5yKGEpLG8uZChhLHtjaG9yZDooKT0+bSxjaG9yZHM6KCk9PnQsaW5saW5lQ2hvcmQ6KCk9PnIsc2NhbGU6KCk9PmMsc2NhbGVzOigpPT5zfSk7dmFyIG49byg3MjIpLGU9byg0MTMpLGk9ZnVuY3Rpb24obyl7dmFyIGE9by5zY2FsZSxpPW8uY2hvcmQscj1hfHxpLHQ9YT9cInNjYWxlXCI6XCJjaG9yZFwiO2lmKFwic3RyaW5nXCIhPXR5cGVvZiByKXRocm93IG5ldyBFcnJvcihcIlwiLmNvbmNhdChyLFwiIGlzIG5vdCBhIHZhbGlkIGlucHV0IGZvciBcIikuY29uY2F0KHQpKTt2YXIgcyxtLGM9ci5pbmRleE9mKFwiIFwiKTstMT09PWM/KHM9ci5zbGljZSgxKSxtPXJbMF0sXCJiXCIhPT1yWzFdJiZcIiNcIiE9PXJbMV18fChzPXIuc2xpY2UoMiksbSs9clsxXSkpOihzPXIuc2xpY2UoLTE9PT1jPzE6YysxKSxtPXIuc2xpY2UoMCxjKSk7dmFyIGQ9ZnVuY3Rpb24obil7cmV0dXJue1wiQyNcIjpcIkRiXCIsXCJEI1wiOlwiRWJcIixcIkYjXCI6XCJHYlwiLFwiRyNcIjpcIkFiXCIsXCJBI1wiOlwiQmJcIn1bbi50b1VwcGVyQ2FzZSgpXXx8bi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStuLnNsaWNlKDEpfShtLnJlcGxhY2UoL1xcZC9nLFwiXCIpKSxsPVwiXCIhPT1tLnJlcGxhY2UoL1xcRC9nLFwiXCIpPyttLnJlcGxhY2UoL1xcRC9nLFwiXCIpOjQ7aWYoaXNOYU4obCkpdGhyb3cgbmV3IEVycm9yKFwiXCIuY29uY2F0KG1bMF0sXCIgZG9lcyBub3QgaGF2ZSBhIHZhbGlkIG9jdGF2ZVwiKSk7aWYoIW5bc10mJiFlW3NdKXRocm93IG5ldyBFcnJvcihcIlwiLmNvbmNhdChyLFwiIGlzIG5vdCBhIHZhbGlkIFwiKS5jb25jYXQodCkpO2Zvcih2YXIgYj1mdW5jdGlvbihuLGUpe3ZhciBvPVtcIkNcIixcIkRiXCIsXCJEXCIsXCJFYlwiLFwiRVwiLFwiRlwiLFwiR2JcIixcIkdcIixcIkFiXCIsXCJBXCIsXCJCYlwiLFwiQlwiXSxhPW8ubWFwKChmdW5jdGlvbihuKXtyZXR1cm4gbitlfSkpLGk9by5tYXAoKGZ1bmN0aW9uKG4pe3JldHVybiBuKyhlKzEpfSkpLHI9YS5jb25jYXQoaSk7cmV0dXJuIHIuc2xpY2Uoci5pbmRleE9mKG4rZSkpfShkLGwpLHU9W10scD0wLGg9MCxmPWE/bjplO3A8ZltzXS5sZW5ndGg7KVwiMVwiPT09ZltzXVtwXSYmdS5wdXNoKGJbaF0pLHArKyxoKys7cmV0dXJuIHV9LHI9ZnVuY3Rpb24obil7dmFyIGUsbyxhPVwiYjlzdXNcIixyPTQ7cmV0dXJuIG4uaW5jbHVkZXMoYSk/KG89YSxlPW4uc2xpY2UoMCxuLmluZGV4T2YoYSkpKTooZT1uWzBdLG89bi5zbGljZSgxKSxcImJcIiE9PW5bMV0mJlwiI1wiIT09blsxXXx8KGUrPW5bMV0sbz1uLnNsaWNlKDIpKSksbi5pbmNsdWRlcyhcIl9cIikmJihyPStuLnNwbGl0KFwiX1wiKVsxXSxvPW8uc2xpY2UoMCxvLmluZGV4T2YoXCJfXCIpKSksaSh7Y2hvcmQ6ZStyK1wiIFwiK299KX0sdD1mdW5jdGlvbigpe3JldHVybiBPYmplY3Qua2V5cyhlKX0scz1mdW5jdGlvbigpe3JldHVybiBPYmplY3Qua2V5cyhuKX0sbT1mdW5jdGlvbihuKXtyZXR1cm4gaSh7Y2hvcmQ6bn0pfSxjPWZ1bmN0aW9uKG4pe3JldHVybiBpKHtzY2FsZTpufSl9fSkoKTt2YXIgaT1leHBvcnRzO2Zvcih2YXIgciBpbiBhKWlbcl09YVtyXTthLl9fZXNNb2R1bGUmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShpLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1haW4uanMubWFwIiwgImltcG9ydCB7IGlubGluZUNob3JkIH0gZnJvbSAnaGFybW9uaWNzJztcblxuZXhwb3J0IGNvbnN0IFJFX1NFUEFSQVRPUiA9IC9cXHwvO1xuZXhwb3J0IGNvbnN0IFJFX1BBVFRFUk4gPSAvXig/Olt4Xy1dfFxcWy4rP1xcXSkrJC87XG5leHBvcnQgY29uc3QgUkVfTlVNQkVSID0gL14oPzpcXC4/XFxkK3xcXGQrKD86XFwuXFxkKyk/KSQvO1xuZXhwb3J0IGNvbnN0IFJFX0NIT1JEID0gL15bYS1nQS1HXVteI1xcc10qXFxkKyg/OlxcLlxcLik/JC87XG5leHBvcnQgY29uc3QgUkVfTk9URSA9IC9eW2EtZ0EtR11bI2JdP1xcZCskLztcbmV4cG9ydCBjb25zdCBSRV9NT0RFID0gL14oPyFbaXZJVl17MSwzfSlbYS16XXsyLH0vO1xuZXhwb3J0IGNvbnN0IFJFX1BST0cgPSAvXltpdklWXXsxLDN9XHUwMEIwPyQvO1xuZXhwb3J0IGNvbnN0IFJFX1RSSU0gPSAvXFwuKyQvO1xuXG5jb25zdCBDQUNIRSA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gc3BsaXQodmFsdWUpIHtcbiAgbGV0IGRhdGEgPSBbXTtcbiAgdHJ5IHtcbiAgICBkYXRhID0gSlNPTi5zdHJpbmdpZnkodmFsdWUuc3BsaXQoLyg/PVtcXGRbXFxdeF8tXSkvKSk7XG4gICAgZGF0YSA9IGRhdGEucmVwbGFjZSgvLFwiXFxbXCIsL2csICcsIFsnKTtcbiAgICBkYXRhID0gZGF0YS5yZXBsYWNlKC9cIlxcW1wiLC9nLCAnWycpO1xuICAgIGRhdGEgPSBkYXRhLnJlcGxhY2UoLyxcIlxcXVwiL2csICddJyk7XG4gICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBpZ25vcmVcbiAgfVxuICByZXR1cm4gZGF0YTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxldmVsKHZhbHVlKSB7XG4gIGlmICghQ0FDSEVbdmFsdWVdKSB7XG4gICAgaWYgKHZhbHVlLmluY2x1ZGVzKCclJykpIHtcbiAgICAgIENBQ0hFW3ZhbHVlXSA9IDEyNyAqIHBhcnNlRmxvYXQoYC4ke3ZhbHVlfWApO1xuICAgIH0gZWxzZSBpZiAodmFsdWUuaW5jbHVkZXMoJy8nKSkge1xuICAgICAgY29uc3QgW2EsIGJdID0gdmFsdWUuc3BsaXQoJy8nKTtcblxuICAgICAgQ0FDSEVbdmFsdWVdID0gYSAvIGI7XG4gICAgfSBlbHNlIGlmICh2YWx1ZS5pbmNsdWRlcygnKicpKSB7XG4gICAgICBjb25zdCBbYSwgYl0gPSB2YWx1ZS5zcGxpdCgnKicpO1xuXG4gICAgICBDQUNIRVt2YWx1ZV0gPSBhICogYjtcbiAgICB9IGVsc2Uge1xuICAgICAgQ0FDSEVbdmFsdWVdID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBDQUNIRVt2YWx1ZV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZShyZSwgdmFsdWUpIHtcbiAgaWYgKCFDQUNIRVtyZS5zb3VyY2UgKyB2YWx1ZV0pIHtcbiAgICBDQUNIRVtyZS5zb3VyY2UgKyB2YWx1ZV0gPSByZS50ZXN0KHZhbHVlKTtcbiAgfVxuICByZXR1cm4gQ0FDSEVbcmUuc291cmNlICsgdmFsdWVdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcm9ncmVzc2lvbih2YWx1ZSkge1xuICByZXR1cm4gdmFsaWRhdGUoUkVfUFJPRywgdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXR0ZXJuKHZhbHVlKSB7XG4gIHJldHVybiB2YWxpZGF0ZShSRV9QQVRURVJOLCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICByZXR1cm4gdmFsaWRhdGUoUkVfTlVNQkVSLCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Nob3JkKHZhbHVlKSB7XG4gIHJldHVybiB2YWxpZGF0ZShSRV9DSE9SRCwgdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOb3RlKHZhbHVlKSB7XG4gIHJldHVybiB2YWxpZGF0ZShSRV9OT1RFLCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc01vZGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbGlkYXRlKFJFX01PREUsIHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFR5cGUodmFsdWUpIHtcbiAgY29uc3Qga2V5ID0gYFQke3ZhbHVlfWA7XG4gIGlmICghQ0FDSEVba2V5XSkge1xuICAgIGlmIChpc05vdGUodmFsdWUpKSBDQUNIRVtrZXldID0gJ25vdGUnO1xuICAgIGVsc2UgaWYgKGlzQ2hvcmQodmFsdWUpKSBDQUNIRVtrZXldID0gJ2Nob3JkJztcbiAgICBlbHNlIGlmIChpc1BhdHRlcm4odmFsdWUpKSBDQUNIRVtrZXldID0gJ3BhdHRlcm4nO1xuICAgIGVsc2UgaWYgKGlzTW9kZSh2YWx1ZSkpIENBQ0hFW2tleV0gPSAnbW9kZSc7XG4gICAgZWxzZSBpZiAoaXNOdW1iZXIodmFsdWUpKSBDQUNIRVtrZXldID0gJ251bWJlcic7XG4gICAgZWxzZSBDQUNIRVtrZXldID0gJ3ZhbHVlJztcbiAgfVxuICByZXR1cm4gQ0FDSEVba2V5XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybShleHByZXNzaW9uKSB7XG4gIGlmICghZXhwcmVzc2lvbiB8fCB0eXBlb2YgZXhwcmVzc2lvbiAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGluZyBhIHZhbGlkIHN0cmluZywgZ2l2ZW4gJyR7ZXhwcmVzc2lvbn0nYCk7XG4gIH1cblxuICBpZiAoQ0FDSEVbYCQke2V4cHJlc3Npb259YF0pIHJldHVybiBDQUNIRVtgJCR7ZXhwcmVzc2lvbn1gXTtcblxuICBjb25zdCB0b2tlbnMgPSBleHByZXNzaW9uLnNwbGl0KC9cXHMrLyk7XG5cbiAgaWYgKCF0b2tlbnMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RpbmcgYSB2YWxpZCBleHByZXNzaW9uLCBnaXZlbiAnJHtleHByZXNzaW9ufSdgKTtcbiAgfVxuXG4gIGNvbnN0IGFzdCA9IFtdO1xuICBjb25zdCBjYXJyeSA9IFtdO1xuXG4gIGZ1bmN0aW9uIGFkZCh0eXBlLCB2YWx1ZSkge1xuICAgIGNvbnN0IGl0ZW0gPSB7IHR5cGUsIHZhbHVlIH07XG5cbiAgICBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgaXRlbS52YWx1ZSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBsZXZlbCh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gJ2Nob3JkJyAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpdGVtLnZhbHVlID0gaW5saW5lQ2hvcmQodmFsdWUucmVwbGFjZShSRV9UUklNLCAnJykpO1xuXG4gICAgICBpZiAodmFsdWUuaW5jbHVkZXMoJy4uJykpIHtcbiAgICAgICAgaXRlbS51bmZvbGQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlID09PSAndmFsdWUnICYmIHZhbHVlLmluZGV4T2YoJ3gnKSA+IC0xKSB7XG4gICAgICBjb25zdCB4ID0gdmFsdWUuc3BsaXQoJ3gnKTtcblxuICAgICAgaWYgKCEoaXNOdW1iZXIoeFswXSkgJiYgaXNOdW1iZXIoeFsxXSkpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0aW5nIHZhbGlkIG51bWJlcnMgZm9yICR7dHlwZX0sIGdpdmVuICcke3ZhbHVlfSdgKTtcbiAgICAgIH1cblxuICAgICAgaXRlbS52YWx1ZSA9IHBhcnNlSW50KHhbMF0sIDEwKTtcbiAgICAgIGl0ZW0ucmVwZWF0ID0gcGFyc2VJbnQoeFsxXSwgMTApO1xuICAgICAgaXRlbS50eXBlID0gJ251bWJlcic7XG4gICAgfVxuXG4gICAgYXN0LnB1c2goaXRlbSk7XG4gIH1cblxuICB0b2tlbnMucmVkdWNlKChwcmV2LCBjdXIsIGkpID0+IHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGNvbnN0IG5leHQgPSB0b2tlbnNbaSArIDFdO1xuICAgIGNvbnN0IGxhc3QgPSBhc3RbYXN0Lmxlbmd0aCAtIDFdIHx8IHt9O1xuXG4gICAgaWYgKFJFX1NFUEFSQVRPUi50ZXN0KGN1cikpIHtcbiAgICAgIGFkZCgnY2hvcmQnLCBjdXIuc3BsaXQoUkVfU0VQQVJBVE9SKSk7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGN1ciA9PT0gJ3N0cmluZycgJiYgKFxuICAgICAgKGN1ci5pbmNsdWRlcygnLycpICYmIGN1ci5pbmRleE9mKCcvJykgPiAwKVxuICAgICAgfHwgKGN1ci5pbmNsdWRlcygnKicpICYmIGN1ci5pbmRleE9mKCcqJykgPiAwKVxuICAgICAgfHwgKGN1ci5pbmNsdWRlcygnJScpICYmIGN1ci5pbmRleE9mKCclJykgPiAwKVxuICAgICkpIHtcbiAgICAgIGFkZCgnbnVtYmVyJywgbGV2ZWwoY3VyKSk7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAoY3VyLmluZGV4T2YoJyUnKSA+IC0xKSB7XG4gICAgICBpZiAoY3VyID09PSAnJScpIHtcbiAgICAgICAgaWYgKCFsYXN0LnR5cGUpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgZXhwcmVzc2lvbiB0byByZXBlYXQsIGdpdmVuICcke3Rva2Vucy5zbGljZSgwLCBpKS5qb2luKCcgJyl9J2ApO1xuICAgICAgICB9XG5cbiAgICAgICAgbGFzdC5yZXBlYXQgPSBsYXN0LnJlcGVhdCB8fCAxO1xuICAgICAgICBsYXN0LnJlcGVhdCArPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWRkKCdwYXJhbScsIGN1cik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmIChpc1Byb2dyZXNzaW9uKGN1cikpIHtcbiAgICAgIGxhc3QudmFsdWUgKz0gYCAke2N1cn1gO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKGN1ci5jaGFyQXQoKSA9PT0gJyMnKSB7XG4gICAgICBhZGQoJ2NoYW5uZWwnLCBjdXIpO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKGlzTm90ZShjdXIpIHx8IGlzQ2hvcmQoY3VyKSB8fCBpc01vZGUoY3VyKSB8fCBpc051bWJlcihjdXIpKSB7XG4gICAgICBjYXJyeS5wdXNoKGN1cik7XG5cbiAgICAgIGlmIChcbiAgICAgICAgIW5leHRcbiAgICAgICAgfHwgY2FycnkubGVuZ3RoID09PSAzXG4gICAgICAgIHx8ICEoaXNOb3RlKG5leHQpIHx8IGlzTW9kZShuZXh0KSB8fCBpc051bWJlcihuZXh0KSlcbiAgICAgICkge1xuICAgICAgICBjb25zdCBvbGQgPSBjYXJyeS5zcGxpY2UoMCwgY2FycnkubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgdGVzdCA9IG9sZFswXTtcblxuICAgICAgICBsZXQgbW9kZSA9IG9sZFsxXTtcbiAgICAgICAgbGV0IG9jdGF2ZSA9IG9sZFsyXTtcblxuICAgICAgICBpZiAoIW9jdGF2ZSAmJiBpc051bWJlcihtb2RlKSkge1xuICAgICAgICAgIG9jdGF2ZSA9IG1vZGU7XG4gICAgICAgICAgbW9kZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICB0ZXN0Lmxlbmd0aCA8IDJcbiAgICAgICAgICAmJiBpc05vdGUodGVzdClcbiAgICAgICAgICAmJiAoaXNNb2RlKG1vZGUpIHx8IGlzTnVtYmVyKG9jdGF2ZSkpXG4gICAgICAgICkge1xuICAgICAgICAgIGFkZCgnbW9kZScsIG9sZC5qb2luKCcgJykpO1xuICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICB9XG5cbiAgICAgICAgb2xkLmZvckVhY2goeCA9PiB7XG4gICAgICAgICAgYWRkKHgubGVuZ3RoID4gMSB8fCAhaXNOb3RlKHgpID8gZ2V0VHlwZSh4KSA6ICdtb2RlJywgeCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjdXIgPT09ICdzdHJpbmcnICYmIGN1ci5pbmRleE9mKCcuLicpID4gLTEpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gY3VyLnNwbGl0KCcuLicpO1xuICAgICAgY29uc3QgbWluID0gcGFydHNbMF0gfHwgMTtcbiAgICAgIGNvbnN0IG1heCA9IHBhcnRzWzFdIHx8IEluZmluaXR5O1xuXG4gICAgICB0eXBlID0gJ3NsaWNlJztcbiAgICAgIGN1ciA9IFttaW4sIG1heF07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjdXIgPT09ICdzdHJpbmcnICYmIChjdXIuY2hhckF0KCkgPT09ICcvJyB8fCBjdXIuY2hhckF0KCkgPT09ICcqJykpIHtcbiAgICAgIGNvbnN0IG9wZXJhdG9yID0gY3VyLmNoYXJBdCgpID09PSAnLycgPyAnZGl2aWRlJyA6ICdtdWx0aXBseSc7XG4gICAgICBjb25zdCBudW1iZXIgPSBjdXIuc3Vic3RyKDEpO1xuXG4gICAgICBpZiAoIWlzTnVtYmVyKG51bWJlcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RpbmcgYSB2YWxpZCBleHByZXNzaW9uIHRvICR7b3BlcmF0b3J9LCBnaXZlbiAnJHt0b2tlbnMuc2xpY2UoMCwgaSkuam9pbignICcpfSAke2N1cn0nYCk7XG4gICAgICB9XG5cbiAgICAgIGFkZChvcGVyYXRvciwgcGFyc2VGbG9hdChudW1iZXIpKTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmICghdHlwZSAmJiBnZXRUeXBlKGN1cikgPT09ICd2YWx1ZScgJiYgQXJyYXkuaXNBcnJheShsYXN0LnZhbHVlKSkge1xuICAgICAgbGFzdC52YWx1ZVsxXSA9IGxhc3QudmFsdWVbMV0gfHwgJyc7XG4gICAgICBsYXN0LnZhbHVlWzFdICs9IGxhc3QudmFsdWVbMV0gPyAnICcgOiAnJztcbiAgICAgIGxhc3QudmFsdWVbMV0gKz0gY3VyO1xuICAgICAgcmV0dXJuIGN1cjtcbiAgICB9XG5cbiAgICBhZGQodHlwZSB8fCBnZXRUeXBlKGN1ciksIHR5cGVvZiBjdXIgPT09ICdzdHJpbmcnICYmIGlzTnVtYmVyKGN1cikgPyBwYXJzZUludChjdXIsIDEwKSA6IGN1cik7XG4gICAgcmV0dXJuIGN1cjtcbiAgfSwgbnVsbCk7XG5cbiAgQ0FDSEVbYCQke2V4cHJlc3Npb259YF0gPSBhc3Q7XG4gIHJldHVybiBhc3Q7XG59XG4iLCAiLyoqXG4gKiBUYWtlIGEgc3RyaW5nIGlucHV0IGFuZCBjaGVjayBpZiBpdCBzIGEgbm90ZSBuYW1lIG9yIG5vdFxuICogQHBhcmFtICB7U3RyaW5nfSBzdHIgTm90ZSBuYW1lIGUuZy4gYzRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IFJldHVybiB0cnVlIGZvciBjNCBvciByZXR1cm4gZmFsc2UgZm9yIHNvbWV0aGluZyBsaWtlIENNXG4gKi9cbmV4cG9ydCBjb25zdCBpc05vdGUgPSAoc3RyOiBzdHJpbmcpOiBib29sZWFuID0+XG4gIC9eW2EtZ0EtR10oPzojfGIpP1xcZCQvLnRlc3Qoc3RyKTtcblxuLyoqXG4gKiBUYWtlIGEgU3RyaW5nIGlucHV0IHN1Y2ggYXMgeHh4W3h4W3h4XV1cbiAqIGFuZCByZXR1cm4gYW4gQXJyYXkgYXMgWyd4JywgJ3gnLCAneCcsIFsneCcsICd4JywgWyd4JywgJ3gnXV1dXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbmV4cG9ydCBjb25zdCBleHBhbmRTdHIgPSAoc3RyOiBzdHJpbmcpOiBhbnkgPT4ge1xuICBzdHIgPSBKU09OLnN0cmluZ2lmeShzdHIuc3BsaXQoJycpKTtcbiAgc3RyID0gc3RyLnJlcGxhY2UoLyxcIlxcW1wiLC9nLCAnLCBbJyk7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKC9cIlxcW1wiLC9nLCAnWycpO1xuICBzdHIgPSBzdHIucmVwbGFjZSgvLFwiXFxdXCIvZywgJ10nKTtcbiAgcmV0dXJuIEpTT04ucGFyc2Uoc3RyKTtcbn07XG5cbi8qKlxuICogQmFzaWMgQXJyYXkgcmFuZG9taXplclxuICogQHBhcmFtICB7QXJyYXl9IGFyclxuICogQHBhcmFtICB7Ym9vbGVhbn0gZnVsbFNodWZmbGUgRW5zdXJlIG5vIGVsZW1lbnRzIHJlbWFpbiBpbiBvbGQgcGxhY2VcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5leHBvcnQgY29uc3Qgc2h1ZmZsZSA9IChhcnI6IGFueVtdLCBmdWxsU2h1ZmZsZTogYm9vbGVhbiA9IHRydWUpOiBzdHJpbmdbXSA9PiB7XG4gIGNvbnN0IGxhc3RJbmRleDogbnVtYmVyID0gYXJyLmxlbmd0aCAtIDE7XG5cbiAgLy8gU2h1ZmZsZSBhbGdvcml0aG0gYnkgUmljaGFyZCBEdXJzdGVuZmVsZCAoRG9uYWxkIEUuIEtudXRoKSwgYWxzbyBSb25hbGQgRmlzaGVyIGFuZCBGcmFuayBZYXRlcy5cbiAgLy8gXCJGdWxsIFNodWZmbGVcIiBNb2RpZmljYXRpb24gdG8gZW5zdXJlIG5vIGVsZW1lbnRzIHJlbWFpbiBpbiB0aGVpciBvcmlnaW5hbCBwbGFjZSAoYnkgdGFraW5nIGVhY2ggZWxlbWVudCBvbmNlXG4gIC8vIGFuZCBzd2FwcGluZyB3aXRoIGFueSByZW1haW5pbmcgZWxlbWVudHMpXG4gIGFyci5mb3JFYWNoKChlbCwgaWR4OiBudW1iZXIpID0+IHtcbiAgICBpZiAoaWR4ID49IGxhc3RJbmRleCkge1xuICAgICAgLy8gTm8gc2h1ZmZsaW5nIGxhc3QgZWxlbWVudFxuICAgICAgLy8gT25lIGJlZm9yZSBsYXN0IGlzIGFsd2F5cyBzd2FwcGVkIHdpdGggbGFzdCBhdCB0aGUgZW5kIG9mIHRoZSBsb29wXG4gICAgICAvLyBTaW5jZSBwcmV2aW91cyBzd2FwcyBjYW4gbW92ZSBsYXN0IGVsZW1lbnQgaW50byBvdGhlciBwbGFjZXMsIHRoZXJlIGlzIHN0aWxsIGEgcmFuZG9tIHNodWZmbGUgb2YgbGFzdCBlbGVtZW50XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFN3YXAgZWwgd2l0aCBvbmUgb2YgdGhlIGhpZ2hlciBlbGVtZW50cyByYW5kb21seVxuICAgIGxldCBybmQ7XG4gICAgcm5kID0gZnVsbFNodWZmbGVcbiAgICAgID8gLy8gUGljayByYW5kb20gbnVtYmVyIGZyb20gaWR4KzEgdG8gbGFzdEluZGV4IChNb2RpZmllZCBhbGdvcml0aG0sIChOLTEpISBjb21iaW5hdGlvbnMpXG4gICAgICAgIC8vIE1hdGgucmFuZG9tIC0+IFswLCAxKSAtPiBbMCwgbGFzdEluZGV4LWlkeCApIC0tZmxvb3ItPiBbMCwgbGFzdEluZGV4LWlkeC0xXVxuICAgICAgICAvLyBybmQgPSBbMCwgbGFzdEluZGV4LWlkeC0xXSArIDEgKyBpZHggPSBbMSArIGlkeCwgbGFzdEluZGV4XVxuICAgICAgICAvLyAoT3JpZ2luYWwgYWxnb3JpdGhtIHdvdWxkIHBpY2sgcm5kID0gW2lkeCwgbGFzdEluZGV4XSwgdGh1cyBhbnkgZWxlbWVudCBjb3VsZCBhcnJpdmUgYmFjayBpbnRvIGl0cyBzbG90KVxuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobGFzdEluZGV4IC0gaWR4KSkgKyAxICsgaWR4XG4gICAgICA6IC8vIFBpY2sgcmFuZG9tIG51bWJlciBmcm9tIGlkeCB0byBsYXN0SW5kZXggKFVubW9kaWZpZWQgUmljaGFyZCBEdXJzdGVuZmVsZCwgTiEgY29tYmluYXRpb25zKVxuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobGFzdEluZGV4ICsgMSAtIGlkeCkpICsgaWR4O1xuICAgIGFycltpZHhdID0gYXJyW3JuZF07XG4gICAgYXJyW3JuZF0gPSBlbDtcbiAgfSk7XG5cbiAgcmV0dXJuIGFycjtcbn07XG5cbi8qKlxuICogUmV0dXJuIGFuIGFycmF5IG9mIG51bWJlcnMgcmVsYXRpdmUgdG8gbWF4TGV2ZWwgfHwgMTI3IG9yZGVyZWQgaW4gYSBTaW5lIHdhdmUgZm9ybWF0XG4gKiBUaGlzIGlzIHVzZWQgYnkgdGhlIGBzaXp6bGVgIHBhcmFtIG9mIHRoZSBgY2xpcGAgbWV0aG9kIHRvIGFkZCBhIHJ1ZGltZW50YXJ5IHZhcmlhdGlvbiB0byB0aGUgYWNjZW50IG9mIGVhY2ggbm90ZVxuICogQHBhcmFtIHtOdW1iZXJ9IG1heExldmVsIEEgbnVtYmVyIGJldHdlZW4gbm90IG1vcmUgdGhhbiAxMjdcbiAqIEByZXR1cm4ge0FycmF5fSAgRXhhbXBsZSBvdXRwdXQgWzYzLCA5MCwgMTEwLCAxMjcsIDExMCwgOTAsIDYzLCAwLCA2MywgOTAsIDExMCwgMTI3LCAxMTAsIDkwLCA2MywgMF1cbiAqL1xuZXhwb3J0IGNvbnN0IHNpenpsZU1hcCA9IChtYXhMZXZlbDogbnVtYmVyID0gMTI3KTogbnVtYmVyW10gPT4ge1xuICBjb25zdCBwaSA9IE1hdGguUEk7XG4gIGNvbnN0IHBpQXJyOiBudW1iZXJbXSA9IFtcbiAgICBwaSAvIDYsXG4gICAgcGkgLyA0LFxuICAgIHBpIC8gMyxcbiAgICBwaSAvIDIsXG4gICAgKDIgKiBwaSkgLyAzLFxuICAgICgzICogcGkpIC8gNCxcbiAgICAoNSAqIHBpKSAvIDYsXG4gICAgcGksXG4gIF07XG4gIGNvbnN0IHBpQXJyUmV2OiBudW1iZXJbXSA9IFtcbiAgICAwLFxuICAgIHBpIC8gNixcbiAgICBwaSAvIDQsXG4gICAgcGkgLyAzLFxuICAgIHBpIC8gMixcbiAgICAoMiAqIHBpKSAvIDMsXG4gICAgKDMgKiBwaSkgLyA0LFxuICAgICg1ICogcGkpIC8gNixcbiAgXTtcbiAgcGlBcnJSZXYucmV2ZXJzZSgpO1xuICBjb25zdCBhcnI6IG51bWJlcltdID0gcGlBcnIuY29uY2F0KHBpQXJyUmV2KTtcbiAgcmV0dXJuIGFyci5tYXAoZWxlbWVudCA9PiBNYXRoLnJvdW5kKE1hdGguc2luKGVsZW1lbnQpICogbWF4TGV2ZWwpKTtcbn07XG5cbi8qKlxuICogUGljayBvbmUgaXRlbSByYW5kb21seSBmcm9tIGFuIGFycmF5IGFuZCByZXR1cm4gaXRcbiAqIEBwYXJhbSBhcnJcbiAqL1xuZXhwb3J0IGNvbnN0IHBpY2tPbmUgPSAoYXJyOiBhbnlbXSkgPT5cbiAgYXJyLmxlbmd0aCA+IDEgPyBhcnJbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV0gOiBhcnJbMF07XG5cbi8qKlxuICogQm9vbGVhbiBnZW5lcmF0b3JcbiAqL1xuZXhwb3J0IGNvbnN0IGRpY2UgPSAoKSA9PiAhIU1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG5cbi8qKlxuICogUG9seWZpbGwgZm9yIEFycmF5LnByb3RvdHlwZS5mbGF0XG4gKi9cbmV4cG9ydCBjb25zdCBmbGF0ID0gKGFycjogYW55W11bXSkgPT5cbiAgYXJyLnJlZHVjZSgoYWNjLCB2YWwpID0+IGFjYy5jb25jYXQodmFsKSwgW10pO1xuIiwgImltcG9ydCB7IHNjYWxlIH0gZnJvbSAnaGFybW9uaWNzJztcbmltcG9ydCB7IHBpY2tPbmUsIGRpY2UgfSBmcm9tICcuL3V0aWxzJztcblxuLyoqXG4gKiBHZXQgdGhlIGNob3JkcyB0aGF0IGdvIHdpdGggYSBnaXZlbiBzY2FsZS9tb2RlXG4gKiBUaGlzIGlzIHVzZWZ1bCBvbmx5IGluIGNhc2UgeW91IHdhbnQgdG8gY2hlY2sgd2hhdCBjaG9yZHMgd29yayB3aXRoIGEgc2NhbGUvbW9kZVxuICogc28gdGhhdCB5b3UgY2FuIGNvbWUgdXAgd2l0aCBjaG9yZCBwcm9ncmVzc2lvbnNcbiAqIEBwYXJhbSAge1N0cmluZ30gbW9kZSBlLmcuIG1ham9yXG4gKiBAcmV0dXJuIHtBcnJheX0gZS5nLlsnSScsICdpaScsICdpaWknLCAnSVYnLCAnVicsICd2aScsICd2aWlcdTAwQjAnXVxuICovXG5leHBvcnQgY29uc3QgZ2V0Q2hvcmREZWdyZWVzID0gKG1vZGU6IHN0cmluZykgPT4ge1xuICBjb25zdCB0aGVSb21hbnM6IE5WUDxzdHJpbmdbXT4gPSB7XG4gICAgaW9uaWFuOiBbJ0knLCAnaWknLCAnaWlpJywgJ0lWJywgJ1YnLCAndmknLCAndmlpXHUwMEIwJ10sXG4gICAgZG9yaWFuOiBbJ2knLCAnaWknLCAnSUlJJywgJ0lWJywgJ3YnLCAndmlcdTAwQjAnLCAnVklJJ10sXG4gICAgcGhyeWdpYW46IFsnaScsICdJSScsICdJSUknLCAnaXYnLCAndlx1MDBCMCcsICdWSScsICd2aWknXSxcbiAgICBseWRpYW46IFsnSScsICdJSScsICdpaWknLCAnaXZcdTAwQjAnLCAnVicsICd2aScsICd2aWknXSxcbiAgICBtaXhvbHlkaWFuOiBbJ0knLCAnaWknLCAnaWlpXHUwMEIwJywgJ0lWJywgJ3YnLCAndmknLCAnVklJJ10sXG4gICAgYWVvbGlhbjogWydpJywgJ2lpXHUwMEIwJywgJ0lJSScsICdpdicsICd2JywgJ1ZJJywgJ1ZJSSddLFxuICAgIGxvY3JpYW46IFsnaVx1MDBCMCcsICdJSScsICdpaWknLCAnaXYnLCAnVicsICdWSScsICd2aWknXSxcbiAgICAnbWVsb2RpYyBtaW5vcic6IFsnaScsICdpaScsICdJSUkrJywgJ0lWJywgJ1YnLCAndmlcdTAwQjAnLCAndmlpXHUwMEIwJ10sXG4gICAgJ2hhcm1vbmljIG1pbm9yJzogWydpJywgJ2lpXHUwMEIwJywgJ0lJSSsnLCAnaXYnLCAnVicsICdWSScsICd2aWlcdTAwQjAnXSxcbiAgfTtcbiAgdGhlUm9tYW5zLm1ham9yID0gdGhlUm9tYW5zLmlvbmlhbjtcbiAgdGhlUm9tYW5zLm1pbm9yID0gdGhlUm9tYW5zLmFlb2xpYW47XG5cbiAgcmV0dXJuIHRoZVJvbWFuc1ttb2RlXSB8fCBbXTtcbn07XG5cbmNvbnN0IGlkeEJ5RGVncmVlOiBOVlA8bnVtYmVyPiA9IHtcbiAgaTogMCxcbiAgaWk6IDEsXG4gIGlpaTogMixcbiAgaXY6IDMsXG4gIHY6IDQsXG4gIHZpOiA1LFxuICB2aWk6IDYsXG59O1xuXG4vKipcbiAqIEdldCBhIGNob3JkIG5hbWUgZnJvbSBkZWdyZWVcbiAqIEBwYXJhbSAge1N0cmluZ30gcm9tYW4gZS5nLiBpaSBPUiBpaVx1MDBCMCBPUiBWN1xuICogQHJldHVybiB7U3RyaW5nfSBlLmcuIG0gT1IgbTdiNSBPUiBNYWo3XG4gKi9cbmNvbnN0IGdldENob3JkTmFtZSA9IChyb21hbjogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgLy8gcmVtb3ZlIGFueSBub24gY2hhcmFjdGVyXG4gIGNvbnN0IHN0ciA9IHJvbWFuLnJlcGxhY2UoL1xcVy9nLCAnJyk7XG4gIGxldCBwcmVmaXggPSAnTSc7XG4gIC8vIGNoZWNrIGlmIGl0IHMgbG93ZXJjYXNlXG4gIGlmIChzdHIudG9Mb3dlckNhc2UoKSA9PT0gc3RyKSB7XG4gICAgcHJlZml4ID0gJ20nO1xuICB9XG4gIGlmIChyb21hbi5pbmRleE9mKCdcdTAwQjAnKSA+IC0xKSB7XG4gICAgcmV0dXJuIHByZWZpeCArICc3YjUnO1xuICB9XG4gIGlmIChyb21hbi5pbmRleE9mKCcrJykgPiAtMSkge1xuICAgIHJldHVybiBwcmVmaXggKyAnIzUnO1xuICB9XG5cbiAgaWYgKHJvbWFuLmluZGV4T2YoJzcnKSA+IC0xKSB7XG4gICAgcmV0dXJuIHByZWZpeCA9PT0gJ00nID8gJ21hajcnIDogJ203JztcbiAgfVxuXG4gIHJldHVybiBwcmVmaXg7XG59O1xuXG4vKipcbiAqIFRha2UgdGhlIHNwZWNpZmllZCBzY2FsZSBhbmQgZGVncmVlcyBhbmQgcmV0dXJuIHRoZSBjaG9yZCBuYW1lcyBmb3IgdGhlbVxuICogVGhlc2UgY2FuIGJlIHVzZWQgYXMgdGhlIHZhbHVlIGZvciB0aGUgYG5vdGVzYCBwYXJhbSBvZiB0aGUgYGNsaXBgIG1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IG5vdGVPY3RhdmVTY2FsZSBlLmcuICdDNCBtYWpvcidcbiAqIEBwYXJhbSAge1N0cmluZ30gY2hvcmREZWdyZXNzIGUuZy4gJ0kgSVYgViBJVidcbiAqIEByZXR1cm4ge1N0cmluZ30gZS5nLiAnQ00gRk0gR00gRk0nXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRDaG9yZHNCeVByb2dyZXNzaW9uID0gKFxuICBub3RlT2N0YXZlU2NhbGU6IHN0cmluZyxcbiAgY2hvcmREZWdyZXNzOiBzdHJpbmdcbik6IHN0cmluZyA9PiB7XG4gIC8vIFNldCB0aGUgb2N0YXZlIGlmIG1pc3NpbmdcbiAgLy8gRm9yIGV4YW1wbGUgaWYgdGhlIG1ldGhvZCB3YXMgY2FsbGVkIHdpdGggYEMgbWFqb3JgIGluc3RlYWQgb2YgYEM0IG1ham9yYCwgdGhlbiBhZGQgdGhlIDRcbiAgY29uc3Qgbm90ZU9jdGF2ZVNjYWxlQXJyID0gbm90ZU9jdGF2ZVNjYWxlLnNwbGl0KCcgJyk7XG4gIGlmICghbm90ZU9jdGF2ZVNjYWxlQXJyWzBdLm1hdGNoKC9cXGQvKSkge1xuICAgIG5vdGVPY3RhdmVTY2FsZUFyclswXSArPSAnNCc7XG4gICAgbm90ZU9jdGF2ZVNjYWxlID0gbm90ZU9jdGF2ZVNjYWxlQXJyLmpvaW4oJyAnKTtcbiAgfVxuXG4gIC8vIEdldCB0aGUgc2NhbGUgZnJvbSB0aGUgZ2l2ZW4gbm90ZSBhbmQgc2NhbGUvbW9kZSBjb21iaW5hdGlvblxuICBjb25zdCBtb2RlID0gc2NhbGUobm90ZU9jdGF2ZVNjYWxlKTtcbiAgY29uc3QgY2hvcmREZWdyZWVzQXJyID0gY2hvcmREZWdyZXNzLnJlcGxhY2UoL1xccyosK1xccyovZywgJyAnKS5zcGxpdCgnICcpO1xuICAvLyBOb3cgd2UgaGF2ZSBzb21ldGhpbmcgbGlrZSBbJ2knLCAnaWknLCAnSVYnXVxuICAvLyBDb252ZXJ0IGl0IHRvIGEgY2hvcmQgZmFtaWx5IHN1Y2ggYXMgWydDbScsICdEbScsICdGTSddXG4gIGNvbnN0IGNob3JkRmFtaWx5ID0gY2hvcmREZWdyZWVzQXJyLm1hcCgocm9tYW4sIGlkeCkgPT4ge1xuICAgIGNvbnN0IGNob3JkTmFtZSA9IGdldENob3JkTmFtZShyb21hbik7IC8vIGUuZy4gbVxuICAgIC8vIGdldCB0aGUgaW5kZXggdG8gYmUgdXNlZCBieSByZW1vdmluZyBhbnkgZGlnaXQgb3Igbm9uIGFscGhhYmV0IGNoYXJhY3RlclxuICAgIGNvbnN0IHNjYWxlSWQgPSBpZHhCeURlZ3JlZVtyb21hbi5yZXBsYWNlKC9cXFd8XFxkL2csICcnKS50b0xvd2VyQ2FzZSgpXTsgLy8gZS5nLiAwXG4gICAgLy8gZ2V0IHRoZSBub3RlIGl0c2VsZlxuICAgIGNvbnN0IG5vdGUgPSBtb2RlW3NjYWxlSWRdOyAvLyBlLmcuIENcbiAgICAvLyBnZXQgdGhlIG9jdGF2ZSBvZiB0aGUgbm90ZTtcbiAgICBjb25zdCBvY3QgPSBub3RlLnJlcGxhY2UoL1xcRCsvLCAnJyk7IC8vIGUuZy4gNFxuICAgIC8vIG5vdyBnZXQgdGhlIGNob3JkXG4gICAgcmV0dXJuIG5vdGUucmVwbGFjZSgvXFxkLywgJycpICsgY2hvcmROYW1lICsgJ18nICsgb2N0O1xuICB9KTtcblxuICByZXR1cm4gY2hvcmRGYW1pbHkudG9TdHJpbmcoKS5yZXBsYWNlKC8sL2csICcgJyk7XG59O1xuXG5jb25zdCBnZXRQcm9nRmFjdG9yeSA9ICh7IFQsIFAsIEQgfTogVFBEKSA9PiB7XG4gIHJldHVybiAoY291bnQ6IG51bWJlciA9IDQpID0+IHtcbiAgICBjb25zdCBjaG9yZHMgPSBbXTtcblxuICAgIC8vIFB1c2ggcm9vdC90b25pY1xuICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoVCkpO1xuXG4gICAgbGV0IGkgPSAxO1xuXG4gICAgLy8gUGljayBhIHByZWRvbWluYW50XG4gICAgaWYgKGkgPCBjb3VudCAtIDEpIHtcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoUCkpO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIC8vIFRyeSBhbm90aGVyIHByZWRvbWluYW50XG4gICAgaWYgKGkgPCBjb3VudCAtIDEgJiYgZGljZSgpKSB7XG4gICAgICBjaG9yZHMucHVzaChwaWNrT25lKFApKTtcbiAgICAgIGkrKztcbiAgICB9XG5cbiAgICAvLy8vLy8vLy8gNCBvciBtb3JlLy8vLy8vLy8vL1xuICAgIGlmIChpIDwgY291bnQgLSAxKSB7XG4gICAgICAvLyBQaWNrIGEgZG9taW5hbnRcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoRCkpO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIGlmIChpIDwgY291bnQgLSAxKSB7XG4gICAgICAvLyBQaWNrIGEgcHJlZG9taW5hbnRcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoUCkpO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIGlmIChpIDwgY291bnQgLSAxKSB7XG4gICAgICAvLyBQaWNrIGEgZG9taW5hbnRcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoRCkpO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIC8vIFBpY2sgYSBwcmVkb21pbmFudCBpZiBwb3NzaWJsZVxuICAgIGlmIChpIDwgY291bnQgLSAxICYmIGRpY2UoKSkge1xuICAgICAgY2hvcmRzLnB1c2gocGlja09uZShQKSk7XG4gICAgICBpKys7XG4gICAgfVxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIC8vIEZpbGwgdGhlIHJlc3Qgd2l0aCBkb21pbmFudFxuICAgIHdoaWxlIChpIDwgY291bnQpIHtcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoRCkpO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIHJldHVybiBjaG9yZHM7XG4gIH07XG59O1xuXG5jb25zdCBNID0gZ2V0UHJvZ0ZhY3RvcnkoeyBUOiBbJ0knLCAndmknXSwgUDogWydpaScsICdJViddLCBEOiBbJ1YnXSB9KTtcbmNvbnN0IG0gPSBnZXRQcm9nRmFjdG9yeSh7IFQ6IFsnaScsICdWSSddLCBQOiBbJ2lpJywgJ2l2J10sIEQ6IFsnViddIH0pO1xuXG4vKipcbiAqIEdlbmVyYXRlIGEgY2hvcmQgcHJvZ3Jlc3Npb24gYmFzZWQgb24gYmFzaWMgbXVzaWMgdGhlb3J5XG4gKiB3aGVyZSB3ZSBmb2xsb3cgdG9uaWMgdG8gb3B0aW9uYWxseSBwcmVkb21pbmFudCBhbmQgdGhlbiBkb21pbmFudFxuICogYW5kIHRoZW4gcmFuZG9tbHkgdG8gcHJlZG9taW5hbnQgYW5kIGNvbnRpbnVlIHRoaXMgdGlsbCB3ZSByZWFjaCBgY291bnRgXG4gKiBAcGFyYW0gc2NhbGVUeXBlIGUuZy4gTSAoZm9yIG1ham9yIGNob3JkIHByb2dyZXNzaW9uKSwgbSAoZm9yIG1pbm9yIGNob3JkIHByb2dyZXNzaW9uKVxuICogQHBhcmFtIGNvdW50IGUuZy4gNFxuICovXG5leHBvcnQgY29uc3QgcHJvZ3Jlc3Npb24gPSAoc2NhbGVUeXBlOiBwcm9ncmVzc2lvblNjYWxlLCBjb3VudDogbnVtYmVyID0gNCkgPT4ge1xuICBpZiAoc2NhbGVUeXBlID09PSAnbWFqb3InIHx8IHNjYWxlVHlwZSA9PT0gJ00nKSB7XG4gICAgcmV0dXJuIE0oY291bnQpO1xuICB9XG5cbiAgaWYgKHNjYWxlVHlwZSA9PT0gJ21pbm9yJyB8fCBzY2FsZVR5cGUgPT09ICdtJykge1xuICAgIHJldHVybiBtKGNvdW50KTtcbiAgfVxufTtcbiIsICJpbXBvcnQgeyBnZXRDaG9yZHNCeVByb2dyZXNzaW9uIH0gZnJvbSAnc2NyaWJibGV0dW5lL3NyYy9wcm9ncmVzc2lvbic7XG5pbXBvcnQgeyBzY2FsZSwgaW5saW5lQ2hvcmQgfSBmcm9tICdoYXJtb25pY3MnO1xuXG5pbXBvcnQgeyBpc1Byb2dyZXNzaW9uLCB0cmFuc2Zvcm0gfSBmcm9tICcuL3Rva2VuaXplJztcbmltcG9ydCB7IHJlcGVhdCwgY2xvbmUgfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZShpbnB1dCwgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGlucHV0KSkgcmV0dXJuIGlucHV0O1xuXG4gIGNvbnN0IGZuID0gdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nID8gY2FsbGJhY2sgOiAodiA9PiB2KTtcblxuICBsZXQgc2tpcDtcbiAgcmV0dXJuIGlucHV0LnJlZHVjZSgocHJldiwgY3VyLCBpKSA9PiB7XG4gICAgY29uc3QgbGFzdCA9IHByZXZbcHJldi5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBuZXh0ID0gaW5wdXRbaSArIDFdIHx8IHt9O1xuICAgIGNvbnN0IG9sZCA9IGlucHV0W2kgLSAxXSB8fCB7fTtcblxuICAgIGlmIChza2lwKSB7XG4gICAgICBza2lwID0gZmFsc2U7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShjdXIpKSB7XG4gICAgICBwcmV2LnB1c2goLi4uY3VyKTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmIChjdXIudHlwZSA9PT0gJ3ZhbHVlJyAmJiBjdXIudmFsdWUgPT09ICcuJykge1xuICAgICAgaWYgKHByZXYubGVuZ3RoID4gMCkgcHJldi5wdXNoKHByZXZbMF0pO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKG9sZC50eXBlID09PSAncGF0dGVybicgJiYgY3VyLnR5cGUgPT09ICdwYXR0ZXJuJykge1xuICAgICAgcHJldltwcmV2Lmxlbmd0aCAtIDFdICs9IGN1ci52YWx1ZTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIHN3aXRjaCAoY3VyLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3BhdHRlcm4nOlxuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ25vdGUnOlxuICAgICAgICBpZiAoY3VyLnJlcGVhdCkgcHJldi5wdXNoKC4uLnJlcGVhdChjdXIudmFsdWUsIGN1ci5yZXBlYXQpKTtcbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjdXIudmFsdWUpKSBwcmV2LnB1c2goLi4uY3VyLnZhbHVlKTtcbiAgICAgICAgZWxzZSBwcmV2LnB1c2goY3VyLnZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2Nob3JkJzpcbiAgICAgICAgaWYgKGN1ci5yZXBlYXQpIHByZXYucHVzaCguLi5yZXBlYXQoY3VyLnZhbHVlLCBjdXIucmVwZWF0KSk7XG4gICAgICAgIGVsc2UgaWYgKGN1ci51bmZvbGQpIHByZXYucHVzaCguLi5jdXIudmFsdWUpO1xuICAgICAgICBlbHNlIHByZXYucHVzaChjdXIudmFsdWUpO1xuXG4gICAgICAgIGlmIChjdXIudHlwZSAhPT0gJ2Nob3JkJykge1xuICAgICAgICAgIHNraXAgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdkaXZpZGUnOlxuICAgICAgICBwcmV2W3ByZXYubGVuZ3RoIC0gMV0gLz0gY3VyLnZhbHVlO1xuICAgICAgICByZXR1cm4gcHJldjtcblxuICAgICAgY2FzZSAnbXVsdGlwbHknOlxuICAgICAgICBwcmV2LnB1c2goLi4ucmVwZWF0KGxhc3QsIGN1ci52YWx1ZSAtIDEpKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3NsaWNlJzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobGFzdCkpIHtcbiAgICAgICAgICBwcmV2W3ByZXYubGVuZ3RoIC0gMV0gPSBsYXN0LnNsaWNlKGN1ci52YWx1ZVswXSAtIDEsIGN1ci52YWx1ZVsxXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJldi5wdXNoKGN1ci52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ21vZGUnOlxuICAgICAgICBwcmV2W3ByZXYubGVuZ3RoIC0gMV0gPSBgJHtsYXN0fSAke2N1ci52YWx1ZX1gO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAncGFyYW0nOlxuICAgICAgY2FzZSAndmFsdWUnOiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IG51bGw7XG4gICAgICAgIGlmICh0eXBlb2YgY29udGV4dFtjdXIudmFsdWVdICE9PSAndW5kZWZpbmVkJykgdmFsdWUgPSBjb250ZXh0W2N1ci52YWx1ZV07XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyBleHByZXNzaW9uIGZvciAnJHtjdXIudmFsdWV9J2ApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlWzBdICYmIHZhbHVlWzBdLnR5cGUpIHtcbiAgICAgICAgICB2YWx1ZSA9IHJlZHVjZSh2YWx1ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY3VyLnJlcGVhdCkge1xuICAgICAgICAgICAgcHJldi5wdXNoKC4uLnJlcGVhdCh2YWx1ZSwgY3VyLnJlcGVhdCkucmVkdWNlKChfcHJldiwgX2N1cikgPT4ge1xuICAgICAgICAgICAgICBfcHJldi5wdXNoKC4uLl9jdXIpO1xuICAgICAgICAgICAgICByZXR1cm4gX3ByZXY7XG4gICAgICAgICAgICB9LCBbXSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcmV2LnB1c2goLi4udmFsdWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFsdWUgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXTtcbiAgICAgICAgaWYgKGN1ci5yZXBlYXQpIHByZXYucHVzaCguLi5yZXBlYXQodmFsdWUsIGN1ci5yZXBlYXQpKTtcbiAgICAgICAgZWxzZSBwcmV2LnB1c2goLi4udmFsdWUpO1xuICAgICAgfSBicmVhaztcbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmhhbmRsZWQgJyR7Y3VyLnR5cGV9J2ApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcmV2O1xuICB9LCBbXSkucmVkdWNlKChtZW1vLCBpdGVtKSA9PiB7XG4gICAgY29uc3QgcHJldiA9IG1lbW9bbWVtby5sZW5ndGggLSAxXTtcblxuICAgIGlmIChcbiAgICAgIEFycmF5LmlzQXJyYXkocHJldilcbiAgICAgICYmIEFycmF5LmlzQXJyYXkoaXRlbSlcbiAgICAgICYmIHR5cGVvZiBpdGVtWzBdID09PSAnbnVtYmVyJ1xuICAgICAgJiYgaXRlbS5sZW5ndGggPT09IDJcbiAgICApIHtcbiAgICAgIGNvbnN0IG9mZnNldCA9IGl0ZW1bMV0gPT09IEluZmluaXR5ID8gcHJldi5sZW5ndGggOiBpdGVtWzFdO1xuICAgICAgY29uc3QgW2Jhc2UsIGxlbmd0aF0gPSBTdHJpbmcob2Zmc2V0KS5zcGxpdCgvXFxELyk7XG5cbiAgICAgIG1lbW8ucG9wKCk7XG4gICAgICBtZW1vLnB1c2goLi4ucHJldi5zbGljZShpdGVtWzBdIC0gMSwgYmFzZSkpO1xuXG4gICAgICBpZiAoU3RyaW5nKG9mZnNldCkuaW5jbHVkZXMoJz4nKSkge1xuICAgICAgICBjb25zdCBwYXJ0cyA9IG1lbW8uc2xpY2UoLWxlbmd0aCAtIDEpO1xuXG4gICAgICAgIHBhcnRzLnBvcCgpO1xuICAgICAgICBwYXJ0cy5yZXZlcnNlKCk7XG4gICAgICAgIG1lbW8ucHVzaCguLi5wYXJ0cyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWVtbztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnICYmIGl0ZW0uaW5jbHVkZXMoJyAnKSkge1xuICAgICAgY29uc3QgY2h1bmtzID0gaXRlbS5zcGxpdCgnICcpO1xuXG4gICAgICBpZiAoY2h1bmtzLnNvbWUoaXNQcm9ncmVzc2lvbikpIHtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gY2h1bmtzLmZpbmRJbmRleChpc1Byb2dyZXNzaW9uKTtcbiAgICAgICAgY29uc3QgW2EsIGJdID0gW2NodW5rcy5zbGljZSgwLCBvZmZzZXQpLCBjaHVua3Muc2xpY2Uob2Zmc2V0KV07XG5cbiAgICAgICAgbWVtby5wdXNoKGdldENob3Jkc0J5UHJvZ3Jlc3Npb24oYS5qb2luKCcgJyksIGIuam9pbignICcpKS5zcGxpdCgnICcpLm1hcCh4ID0+IGZuKGlubGluZUNob3JkKHgpKSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVtby5wdXNoKGZuKHNjYWxlKGl0ZW0pKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lbW8ucHVzaChmbihpdGVtKSk7XG4gICAgfVxuICAgIHJldHVybiBtZW1vO1xuICB9LCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZShidWZmZXIpIHtcbiAgY29uc3QgdHJhY2tzID0ge307XG4gIGNvbnN0IG1haW4gPSBbXTtcbiAgY29uc3QgZGF0YSA9IHt9O1xuXG4gIGxldCBjaGFubmVsID0gbnVsbDtcbiAgbGV0IHByZWZpeCA9ICcnO1xuICBsZXQgdHJhY2s7XG4gIGxldCBpbmZvID0ge307XG4gIGJ1ZmZlci5zcGxpdCgvXFxyP1xcbi9nKS5mb3JFYWNoKChsaW5lLCBudGgpID0+IHtcbiAgICBsaW5lID0gbGluZS5yZXBsYWNlKC87Lis/JC8sICcnKS50cmltKCk7XG4gICAgaWYgKCFsaW5lKSByZXR1cm47XG5cbiAgICB0cnkge1xuICAgICAgaWYgKGxpbmUuY2hhckF0KCkgPT09ICclJykge1xuICAgICAgICBjb25zdCBbbmFtZSwgLi4udmFsdWVdID0gbGluZS5zcGxpdCgvXFxzKy8pO1xuXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZGF0YVtuYW1lXSA9IHRyYW5zZm9ybSh2YWx1ZS5qb2luKCcgJykpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGxpbmUuaW5kZXhPZignIyAnKSA+PSAwKSB7XG4gICAgICAgIGlmICh0cmFjaykge1xuICAgICAgICAgIHRyYWNrc1t0cmFja10gPSBpbmZvO1xuICAgICAgICAgIGNoYW5uZWwgPSBudWxsO1xuICAgICAgICAgIHByZWZpeCA9ICcnO1xuICAgICAgICAgIGluZm8gPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyYWNrID0gbGluZS5zcGxpdCgvXFxzKy8pLnNsaWNlKDEpLmpvaW4oJyAnKTtcbiAgICAgIH0gZWxzZSBpZiAobGluZS5jaGFyQXQoKSA9PT0gJz4nKSB7XG4gICAgICAgIG1haW4ucHVzaCh0cmFuc2Zvcm0obGluZS5zdWJzdHIoMSkudHJpbSgpKSk7XG4gICAgICB9IGVsc2UgaWYgKGxpbmUuY2hhckF0KCkgPT09ICdAJykge1xuICAgICAgICBjb25zdCBbbmFtZSwgLi4uZXh0ZW5kXSA9IGxpbmUuc3Vic3RyKDEpLnNwbGl0KCcgJyk7XG5cbiAgICAgICAgaWYgKGV4dGVuZFswXSA9PT0gJzwnKSB7XG4gICAgICAgICAgY29uc3Qga2V5ID0gYCR7ZXh0ZW5kWzFdfSNgO1xuXG4gICAgICAgICAgT2JqZWN0LmtleXMoaW5mbylcbiAgICAgICAgICAgIC5maWx0ZXIoeCA9PiB4LmluZGV4T2Yoa2V5KSA9PT0gMClcbiAgICAgICAgICAgIC5mb3JFYWNoKGsgPT4ge1xuICAgICAgICAgICAgICBpbmZvW2Ake25hbWV9IyR7ay5zcGxpdCgnIycpWzFdfWBdID0gY2xvbmUoaW5mb1trXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBwcmVmaXggPSBuYW1lO1xuICAgICAgfSBlbHNlIGlmIChsaW5lLmluZGV4T2YoJzonKSA+IDApIHtcbiAgICAgICAgY29uc3QgW25hbWUsIC4uLnZhbHVlXSA9IGxpbmUuc3BsaXQoJzonKTtcblxuICAgICAgICBkYXRhW25hbWVdID0gdHJhbnNmb3JtKHZhbHVlLmpvaW4oJzonKS50cmltKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGlja3MgPSB0cmFuc2Zvcm0obGluZSk7XG5cbiAgICAgICAgaWYgKCF0aWNrc1swXSB8fCB0aWNrc1swXS50eXBlICE9PSAnY2hhbm5lbCcpIHtcbiAgICAgICAgICBpZiAoIWNoYW5uZWwpIHRocm93IG5ldyBUeXBlRXJyb3IoYE1pc3NpbmcgY2hhbm5lbCwgZ2l2ZW4gJyR7bGluZX0nYCk7XG5cbiAgICAgICAgICBjb25zdCBlbmQgPSBpbmZvW2NoYW5uZWxdW2luZm9bY2hhbm5lbF0ubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICBpZiAoIWVuZC52YWx1ZXMpIGVuZC52YWx1ZXMgPSBbeyB0eXBlOiAnbnVtYmVyJywgdmFsdWU6IDEyNyB9XTtcbiAgICAgICAgICBlbmQudmFsdWVzLnB1c2goLi4udGlja3MpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5vdGVzID0gdGlja3MuZmluZEluZGV4KHggPT4gWydub3RlJywgJ2Nob3JkJywgJ3BhcmFtJ10uaW5jbHVkZXMoeC50eXBlKSk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGlja3MuZmluZEluZGV4KHggPT4geC50eXBlID09PSAncGF0dGVybicpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGluZGV4ID4gMCA/IHRpY2tzLnNsaWNlKGluZGV4KSA6IHRpY2tzO1xuICAgICAgICBjb25zdCBvZmZzZXQgPSB2YWx1ZS5maW5kSW5kZXgoeCA9PiB4LnR5cGUgIT09ICdwYXR0ZXJuJyk7XG4gICAgICAgIGNvbnN0IGlucHV0cyA9IHRpY2tzLnNsaWNlKDAsIGluZGV4ID4gMCA/IGluZGV4IDogMSk7XG5cbiAgICAgICAgY2hhbm5lbCA9IHByZWZpeCArIGlucHV0c1swXS52YWx1ZTtcbiAgICAgICAgaWYgKCFpbmZvW2NoYW5uZWxdKSB7XG4gICAgICAgICAgaW5mb1tjaGFubmVsXSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNwZWM7XG4gICAgICAgIGlmIChub3RlcyA+IDAgJiYgaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgY29uc3QgZW5kID0gaW5mb1tjaGFubmVsXVtpbmZvW2NoYW5uZWxdLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgICAgZW5kLmRhdGEgPSB2YWx1ZS5zbGljZShub3Rlcyk7XG4gICAgICAgICAgc3BlYyA9IHtcbiAgICAgICAgICAgIGlucHV0OiBlbmQuaW5wdXQsXG4gICAgICAgICAgICB2YWx1ZXM6IHZhbHVlLnNsaWNlKDEsIG5vdGVzKSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKG9mZnNldCA+IDApIHtcbiAgICAgICAgICBzcGVjID0ge1xuICAgICAgICAgICAgZGF0YTogdmFsdWUuc2xpY2Uob2Zmc2V0KSxcbiAgICAgICAgICAgIGlucHV0OiB2YWx1ZS5zbGljZSgwLCBvZmZzZXQpLFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAob2Zmc2V0ID09PSAwKSB7XG4gICAgICAgICAgc3BlYyA9IHsgdmFsdWVzOiB2YWx1ZS5zbGljZSgxKSB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNwZWMgPSB7IGlucHV0OiB2YWx1ZSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlucHV0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgc3BlYy52YWx1ZXMgPSBpbnB1dHMuc2xpY2UoMSk7XG4gICAgICAgIH1cbiAgICAgICAgaW5mb1tjaGFubmVsXS5wdXNoKHNwZWMpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnN0IG1zZyA9IHR5cGVvZiBlID09PSAnc3RyaW5nJyA/IGUgOiBlLm1lc3NhZ2U7XG5cbiAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgJHttc2d9XFxuICBhdCBsaW5lICR7bnRoICsgMX1cXG4ke2xpbmV9YCk7XG4gICAgfVxuICB9KTtcblxuICBpZiAodHJhY2spIHtcbiAgICB0cmFja3NbdHJhY2tdID0gaW5mbztcbiAgfVxuICByZXR1cm4geyBtYWluLCBkYXRhLCB0cmFja3MgfTtcbn1cbiIsICJpbXBvcnQgeyBVdGlscyB9IGZyb20gJ21pZGktd3JpdGVyLWpzJztcbmltcG9ydCB7IEZpbGUsIFRyYWNrIH0gZnJvbSAnanNtaWRnZW4nO1xuaW1wb3J0IHsgemlwLCBmbGF0dGVuIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBzcGxpdCwgaXNQYXR0ZXJuIH0gZnJvbSAnLi90b2tlbml6ZSc7XG5pbXBvcnQgeyByZWR1Y2UgfSBmcm9tICcuL3BhcnNlcic7XG5cbmNvbnN0IERFRkFVTFQgPSBTeW1ib2woJ0BtYWluJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZChtaWRpLCBicG0gPSAxMjAsIGxlbmd0aCA9IDE2KSB7XG4gIGNvbnN0IGZpbGUgPSBuZXcgRmlsZSgpO1xuICBjb25zdCBxID0gMTY7XG4gIGNvbnN0IG8gPSB7fTtcblxuICBicG0gKj0gbGVuZ3RoIC8gcTtcblxuICBsZXQgY2ggPSAwO1xuICBmdW5jdGlvbiBnZXQobnRoLCBuYW1lKSB7XG4gICAgY29uc3Qga2V5ID0gbnRoICsgbmFtZTtcblxuICAgIGlmICghZ2V0W2tleV0pIHtcbiAgICAgIGNvbnN0IHRyYWNrID0gbmV3IFRyYWNrKCk7XG4gICAgICBjb25zdCBjaGFuID0gbnRoID09PSAnMCcgPyA5IDogY2g7XG5cbiAgICAgIGZpbGUuYWRkVHJhY2sodHJhY2spO1xuICAgICAgZ2V0W2tleV0gPSB7IGNoYW4sIHRyYWNrIH07XG4gICAgICBpZiAobnRoICE9PSAnMCcpIGNoICs9IDE7XG4gICAgfVxuICAgIHJldHVybiBnZXRba2V5XTtcbiAgfVxuXG4gIG1pZGkuZm9yRWFjaChzZWN0aW9uID0+IHtcbiAgICBzZWN0aW9uLmZvckVhY2gocGFydHMgPT4ge1xuICAgICAgcGFydHMuZm9yRWFjaChlID0+IHtcbiAgICAgICAgY29uc3QgeyBjaGFuLCB0cmFjayB9ID0gZ2V0KGVbMF0sIGVbMV0pO1xuXG4gICAgICAgIHRyYWNrLnNldFRlbXBvKGJwbSk7XG4gICAgICAgIGlmIChjaGFuICE9PSA5KSB7XG4gICAgICAgICAgdHJhY2suaW5zdHJ1bWVudChjaGFuLCBlWzBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZVsyXS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGNvbnN0IHRpY2sgPSBlWzJdW2ldO1xuXG4gICAgICAgICAgaWYgKHRpY2sudiA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IG5vdGUgPSB0aWNrLm4gfHwgJ0MzJztcblxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobm90ZSkpIHtcbiAgICAgICAgICAgICAgdHJhY2subm90ZU9mZihjaGFuLCAnJywgcSk7XG4gICAgICAgICAgICAgIHRyYWNrLmFkZENob3JkKGNoYW4sIG5vdGUsIHEsIHRpY2sudik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0cmFjay5ub3RlT24oY2hhbiwgbm90ZSwgcSwgdGljay52KTtcbiAgICAgICAgICAgICAgdHJhY2subm90ZU9mZihjaGFuLCBub3RlLCBxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJhY2subm90ZU9mZihjaGFuLCAnJywgcSAqIDIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gZmlsZS50b0J5dGVzKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYWNrKHZhbHVlcywgbm90ZXMpIHtcbiAgbGV0IG9mZnNldDtcbiAgZnVuY3Rpb24gcmVzb2x2ZSh4KSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoeCkpIHtcbiAgICAgIHJldHVybiB4Lm1hcChyZXNvbHZlKTtcbiAgICB9XG5cbiAgICBsZXQgdG9rZW47XG4gICAgaWYgKCEnLXhfJy5pbmNsdWRlcyh4KSkge1xuICAgICAgdG9rZW4gPSB7IHY6IDEyNywgbDogeCB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0b2tlbiA9IHsgdjogeCA9PT0gJy0nID8gMCA6IDEyNyB9O1xuICAgIH1cblxuICAgIGlmICh4ICE9PSAnLScpIHtcbiAgICAgIHRva2VuLnYgPSB0eXBlb2YgdmFsdWVzW29mZnNldF0gIT09ICd1bmRlZmluZWQnID8gdmFsdWVzW29mZnNldF0gOiB0b2tlbi52IHx8IDA7XG4gICAgICBpZiAodHlwZW9mIG5vdGVzW29mZnNldF0gIT09ICd1bmRlZmluZWQnKSB0b2tlbi5uID0gbm90ZXNbb2Zmc2V0XTtcbiAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID09PSAxKSB0b2tlbi52ID0gdmFsdWVzWzBdO1xuICAgICAgaWYgKHRva2VuLnYgfHwgdG9rZW4ubikgb2Zmc2V0ICs9IDE7XG4gICAgfVxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZSA9PiB7XG4gICAgbGV0IHJlc3VsdCA9IHZhbHVlO1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoaXNQYXR0ZXJuKHZhbHVlKSkge1xuICAgICAgICBvZmZzZXQgPSAwO1xuICAgICAgICByZXN1bHQgPSBzcGxpdCh2YWx1ZSkubWFwKHJlc29sdmUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoY3R4KSB7XG4gIGNvbnN0IHNjZW5lcyA9IHt9O1xuXG4gIE9iamVjdC5lbnRyaWVzKGN0eC50cmFja3MpLmZvckVhY2goKFtuYW1lLCBjaGFubmVsc10pID0+IHtcbiAgICBPYmplY3QuZW50cmllcyhjaGFubmVscykuZm9yRWFjaCgoW2NoLCBjbGlwc10pID0+IHtcbiAgICAgIGNvbnN0IFt0YWcsIG1pZGldID0gY2guc3BsaXQoJyMnKTtcbiAgICAgIGNvbnN0IGtleSA9IHRhZyB8fCBERUZBVUxUO1xuXG4gICAgICBsZXQgdGlja3M7XG4gICAgICBsZXQgaW5jID0gMDtcbiAgICAgIGNsaXBzLmZvckVhY2goY2xpcCA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IGNsaXAudmFsdWVzID8gcmVkdWNlKGNsaXAudmFsdWVzLCBjdHguZGF0YSkgOiBbXTtcbiAgICAgICAgY29uc3Qgbm90ZXMgPSBjbGlwLmRhdGEgPyByZWR1Y2UoY2xpcC5kYXRhLCBjdHguZGF0YSkgOiBbXTtcblxuICAgICAgICBpZiAoY2xpcC5pbnB1dCkge1xuICAgICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID4gMSkgdmFsdWVzLnNoaWZ0KCk7XG5cbiAgICAgICAgICBjb25zdCBpbnB1dCA9IGZsYXR0ZW4ocmVkdWNlKGNsaXAuaW5wdXQsIGN0eC5kYXRhLCBwYWNrKHZhbHVlcywgbm90ZXMpKSk7XG5cbiAgICAgICAgICBpZiAoIXRpY2tzKSB7XG4gICAgICAgICAgICB0aWNrcyA9IGlucHV0O1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHppcCh0aWNrcywgaW5wdXQsIChhLCBiKSA9PiB7XG4gICAgICAgICAgICBpZiAoYi52ID4gMCkgYS52ID0gYi52O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRpY2tzKSB7XG4gICAgICAgICAgY29uc3QgbW9kZSA9IGNsaXAudmFsdWVzXG4gICAgICAgICAgICAmJiBjbGlwLnZhbHVlc1swXVxuICAgICAgICAgICAgJiYgY2xpcC52YWx1ZXNbMF0udHlwZSA9PT0gJ21vZGUnID8gY2xpcC52YWx1ZXNbMF0udmFsdWUgOiBudWxsO1xuXG4gICAgICAgICAgdGlja3MuZm9yRWFjaCh0aWNrID0+IHtcbiAgICAgICAgICAgIGlmICh0aWNrLnYgPiAwKSB7XG4gICAgICAgICAgICAgIGlmICghdGljay5uICYmIG5vdGVzLmxlbmd0aCA+IDApIHRpY2subiA9IG5vdGVzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgIGlmIChtb2RlICYmIHZhbHVlcy5sZW5ndGggPiAwKSB0aWNrW21vZGVbMF0udG9Mb3dlckNhc2UoKV0gPSB2YWx1ZXMuc2hpZnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICghc2NlbmVzW2tleV0pIHNjZW5lc1trZXldID0geyB0cmFja3M6IFtdIH07XG4gICAgICBzY2VuZXNba2V5XS50cmFja3MucHVzaChbbWlkaSwgbmFtZSwgdGlja3NdKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgaWYgKCFjdHgubWFpbi5sZW5ndGgpIHtcbiAgICBjdHgubWFpbiA9IFtbeyB0eXBlOiAndmFsdWUnLCB2YWx1ZTogREVGQVVMVCB9XV07XG4gIH1cblxuICByZXR1cm4gY3R4Lm1haW4ubWFwKHRyYWNrID0+IHtcbiAgICByZXR1cm4gcmVkdWNlKHRyYWNrLCBzY2VuZXMpLm1hcChpdGVtID0+IHtcbiAgICAgIHJldHVybiBbXS5jb25jYXQoaXRlbSkucmVkdWNlKChtZW1vLCB4KSA9PiB7XG4gICAgICAgIG1lbW8ucHVzaCguLi54LnRyYWNrcyk7XG4gICAgICAgIHJldHVybiBtZW1vO1xuICAgICAgfSwgW10pO1xuICAgIH0pO1xuICB9KTtcbn1cbiIsICJleHBvcnQgeyBtZXJnZSB9IGZyb20gJy4vbWl4dXAnO1xuZXhwb3J0IHsgcGFyc2UgfSBmcm9tICcuL3BhcnNlcic7XG5leHBvcnQgKiBmcm9tICcuL3V0aWxzJztcbmV4cG9ydCAqIGZyb20gJy4vbWl4dXAnO1xuZXhwb3J0ICogZnJvbSAnLi9wYXJzZXInO1xuZXhwb3J0ICogZnJvbSAnLi90b2tlbml6ZSc7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQSxLQUFDLE1BQUk7QUFBQztBQUFhLFVBQUksSUFBRSxFQUFDLEtBQUksQ0FBQUEsT0FBRztBQUFDLFFBQUFBLEdBQUUsVUFBUSxLQUFLLE1BQU0sNjJFQUE2MkU7QUFBQSxNQUFDLEdBQUUsS0FBSSxDQUFBQSxPQUFHO0FBQUMsUUFBQUEsR0FBRSxVQUFRLEtBQUssTUFBTSw4NEZBQW01RjtBQUFBLE1BQUMsRUFBQyxHQUFFLElBQUUsQ0FBQztBQUFFLGVBQVMsRUFBRUMsSUFBRTtBQUFDLFlB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Q2pCO0FBRUEsU0FBUyxhQUFhO0FBQ3BCLE1BQUksQ0FBQyxhQUFhLENBQUMsRUFBRztBQUV0QixRQUFNLE9BQU8sUUFBUSxVQUFVLFNBQVMsQ0FBQztBQUN6QyxRQUFNLFVBQVUsRUFBRSxlQUFlLE1BQU0sT0FBTyxNQUFNLFNBQVM7QUFDN0QsWUFBVSxJQUFJO0FBQ2QsTUFBSSxXQUFXLFNBQVM7QUFDdEIsTUFBRSxnQkFBZ0IsRUFBRSxTQUFTO0FBQUEsRUFDL0I7QUFDRjtBQUVBLFNBQVMsZ0JBQWdCO0FBQ3ZCLFFBQU0sT0FBTyxTQUFTLGlCQUFpQixXQUFXO0FBQ2xELFFBQU0sY0FBYyxFQUFFLGNBQWMsRUFBRSxZQUFZO0FBQ2xELE9BQUssUUFBUSxDQUFDLEtBQUssTUFBTSxJQUFJLFVBQVUsT0FBTyxVQUFVLE1BQU0sV0FBVyxDQUFDO0FBQzFFLHdCQUFzQixhQUFhO0FBQ3JDO0FBRUEsZUFBZSxZQUFZO0FBQ3pCLFFBQU0sU0FBUyxJQUFJLGdCQUFnQixPQUFPLFNBQVMsTUFBTTtBQUN6RCxRQUFNLGdCQUFnQixPQUFPLElBQUksTUFBTTtBQUN2QyxRQUFNLGVBQWUsTUFBTSxvQkFBb0I7QUFDL0MsUUFBTSxTQUFTLFVBQVUsY0FBYyxhQUFhO0FBQ3BELHNCQUFvQjtBQUNwQixRQUFNLE9BQU8sUUFBUSxPQUFPLFNBQVMsQ0FBQztBQUN0QyxJQUFFLGVBQWUsTUFBTSxPQUFPLE1BQU0sU0FBUztBQUM3QyxZQUFVLElBQUk7QUFDZCxpQkFBZTtBQUNmLHdCQUFzQixhQUFhO0FBQ3JDO0FBRUEsVUFBVTtBQUVWLElBQU8sY0FBUSxDQUFDOyIsCiAgIm5hbWVzIjogWyJuIiwgImEiLCAiaSIsICJyIiwgImUiLCAibSIsICJvIiwgInQiLCAicyIsICJjIiwgInAiLCAibWlkaSIsICJtIiwgInAiLCAibm90ZSIsICJtIiwgIm9iaiIsICJwIiwgIl9zZXRQcm90b3R5cGVPZiIsICJvIiwgIlV0aWxzIiwgIk5vdGVPbkV2ZW50IiwgIk5vdGVPZmZFdmVudCIsICJOb3RlRXZlbnQiLCAic2NhbGUxNGJpdHMiLCAiUGl0Y2hCZW5kRXZlbnQiLCAiUHJvZ3JhbUNoYW5nZUV2ZW50IiwgIkNvbnRyb2xsZXJDaGFuZ2VFdmVudCIsICJDb3B5cmlnaHRFdmVudCIsICJDdWVQb2ludEV2ZW50IiwgIkVuZFRyYWNrRXZlbnQiLCAiSW5zdHJ1bWVudE5hbWVFdmVudCIsICJLZXlTaWduYXR1cmVFdmVudCIsICJub3RlIiwgIkx5cmljRXZlbnQiLCAiTWFya2VyRXZlbnQiLCAiVGVtcG9FdmVudCIsICJ0ZW1wbyIsICJUZXh0RXZlbnQiLCAiVGltZVNpZ25hdHVyZUV2ZW50IiwgIlRyYWNrTmFtZUV2ZW50IiwgIlRyYWNrIiwgIlZleEZsb3ciLCAiSGVhZGVyQ2h1bmsiLCAiV3JpdGVyIiwgImJ1aWxkIiwgIlBsYXllciIsICJ0ZW1wbyIsICJ0cmFuc3Bvc2UiLCAibm90ZSIsICJwaWNrT25lIiwgImRpY2UiLCAiaW5pdF91dGlscyIsICJwcm9ncmVzc2lvbl9leHBvcnRzIiwgImdldENob3JkRGVncmVlcyIsICJnZXRDaG9yZHNCeVByb2dyZXNzaW9uIiwgInByb2dyZXNzaW9uIiwgImltcG9ydF9oYXJtb25pY3MiLCAiaWR4QnlEZWdyZWUiLCAiZ2V0Q2hvcmROYW1lIiwgImdldFByb2dGYWN0b3J5IiwgIk0iLCAibSIsICJpbml0X3Byb2dyZXNzaW9uIiwgImluaXRfdXRpbHMiLCAibm90ZSIsICJwaWNrT25lIiwgImRpY2UiLCAicmVxdWlyZV90b2tlbml6ZSIsICJyZXF1aXJlX3V0aWxzIiwgInJlcXVpcmVfcGFyc2VyIiwgImdldENob3Jkc0J5UHJvZ3Jlc3Npb24iLCAic2NhbGUiLCAicmVkdWNlIiwgInBhcnNlIiwgImJsb2NrQXRDdXJzb3IiLCAibmFtZSIsICJlbmQiLCAibm9ybWFsaXplTm90ZSIsICJtIiwgInAiLCAiY3JlYXRlRWRpdG9yIiwgImNyZWF0ZU1peGVyIiwgImJhcnMiLCAia2V5IiwgImltcG9ydF9oYXJtb25pY3MiLCAiaXNOdW0iLCAiaXNTdHIiLCAiaXNEZWYiLCAibWlkaVRvRnJlcSIsICJtaWRpIiwgInBhcnNlIiwgIm0iLCAiUkVHRVgiLCAicCIsICJTRU1JVE9ORVMiLCAibm90ZSIsICJpbml0X25vdGVfcGFyc2VyIiwgIl9fZXNtIiwgInRvbmFsX21pZGlfZXhwb3J0cyIsICJfX2V4cG9ydCIsICJ0b01pZGkiLCAiU0hBUlBTIiwgIkZMQVRTIiwgImluaXRfdG9uYWxfbWlkaSIsICJyZXF1aXJlX3BhY2thZ2UiLCAiX19jb21tb25KUyIsICJyZXF1aXJlX2J1aWxkIiwgIl9fdG9Db21tb25KUyIsICJvYmoiLCAiX3NldFByb3RvdHlwZU9mIiwgIm8iLCAiVXRpbHMiLCAiTm90ZU9uRXZlbnQiLCAiTm90ZU9mZkV2ZW50IiwgIk5vdGVFdmVudCIsICJzY2FsZTE0Yml0cyIsICJQaXRjaEJlbmRFdmVudCIsICJQcm9ncmFtQ2hhbmdlRXZlbnQiLCAiQ29udHJvbGxlckNoYW5nZUV2ZW50IiwgIkNvcHlyaWdodEV2ZW50IiwgIkN1ZVBvaW50RXZlbnQiLCAiRW5kVHJhY2tFdmVudCIsICJJbnN0cnVtZW50TmFtZUV2ZW50IiwgIktleVNpZ25hdHVyZUV2ZW50IiwgIkx5cmljRXZlbnQiLCAiTWFya2VyRXZlbnQiLCAiVGVtcG9FdmVudCIsICJ0ZW1wbyIsICJUZXh0RXZlbnQiLCAiVGltZVNpZ25hdHVyZUV2ZW50IiwgIlRyYWNrTmFtZUV2ZW50IiwgIlRyYWNrIiwgIlZleEZsb3ciLCAiSGVhZGVyQ2h1bmsiLCAiV3JpdGVyIiwgImJ1aWxkIiwgInJlcXVpcmVfbWFpbiIsICJuIiwgImEiLCAiaSIsICJyIiwgImUiLCAidCIsICJzIiwgImMiLCAiX190b0VTTSIsICJnZXRDaG9yZHNCeVByb2dyZXNzaW9uIiwgInNjYWxlIiwgInJlZHVjZSIsICJtZXJnZSIsICJpbXBvcnRfcGFyc2VyIiwgIlBsYXllciIsICJtaWRpIiwgIlNFTUlUT05FUyIsICJtIiwgInByZXNldFNlbGVjdCJdCn0K
