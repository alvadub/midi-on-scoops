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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL2hhcm1vbmljcy9tYWluLmpzIiwgIm5vZGVfbW9kdWxlcy9ub3RlLXBhcnNlci9pbmRleC5qcyIsICJub2RlX21vZHVsZXMvdG9uYWwtbWlkaS9pbmRleC5qcyIsICJub2RlX21vZHVsZXMvbWlkaS13cml0ZXItanMvcGFja2FnZS5qc29uIiwgIm5vZGVfbW9kdWxlcy9taWRpLXdyaXRlci1qcy9idWlsZC9pbmRleC5qcyIsICJzcmMvY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wbGF5ZXIuanMiLCAibm9kZV9tb2R1bGVzL3NjcmliYmxldHVuZS9zcmMvdXRpbHMudHMiLCAibm9kZV9tb2R1bGVzL3NjcmliYmxldHVuZS9zcmMvcHJvZ3Jlc3Npb24udHMiLCAic3JjL2xpYi9zcmMvbGliL3NyYy9saWIvdG9rZW5pemUuanMiLCAic3JjL2xpYi9zcmMvbGliL3NyYy9saWIvdXRpbHMuanMiLCAic3JjL2xpYi9zcmMvbGliL3NyYy9saWIvcGFyc2VyLmpzIiwgInNyYy9zcmMvc3JjL2hpZ2hsaWdodC5qcyIsICJzcmMvY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9lZGl0b3IuanMiLCAic3JjL2NvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvbWl4ZXIuanMiLCAic3JjL3NyYy9pbmRleC5qcyIsICJzcmMvbGliL25vZGVfbW9kdWxlcy9ub3RlLXBhcnNlci9pbmRleC5qcyIsICJzcmMvbGliL25vZGVfbW9kdWxlcy90b25hbC1taWRpL2luZGV4LmpzIiwgInNyYy9saWIvbm9kZV9tb2R1bGVzL21pZGktd3JpdGVyLWpzL3BhY2thZ2UuanNvbiIsICJzcmMvbGliL25vZGVfbW9kdWxlcy9taWRpLXdyaXRlci1qcy9idWlsZC9pbmRleC5qcyIsICJzcmMvbGliL25vZGVfbW9kdWxlcy9qc21pZGdlbi9saWIvanNtaWRnZW4uanMiLCAic3JjL2xpYi9zcmMvbGliL3NyYy9saWIvc3JjL2xpYi91dGlscy5qcyIsICJzcmMvbGliL25vZGVfbW9kdWxlcy9oYXJtb25pY3MvbWFpbi5qcyIsICJzcmMvbGliL3NyYy9saWIvc3JjL2xpYi9zcmMvbGliL3Rva2VuaXplLmpzIiwgInNyYy9saWIvbm9kZV9tb2R1bGVzL3NjcmliYmxldHVuZS9zcmMvdXRpbHMudHMiLCAic3JjL2xpYi9ub2RlX21vZHVsZXMvc2NyaWJibGV0dW5lL3NyYy9wcm9ncmVzc2lvbi50cyIsICJzcmMvbGliL3NyYy9saWIvc3JjL2xpYi9zcmMvbGliL3BhcnNlci5qcyIsICJzcmMvbGliL3NyYy9saWIvc3JjL2xpYi9zcmMvbGliL21peHVwLmpzIiwgInNyYy9saWIvc3JjL2xpYi9zcmMvbGliL2luZGV4LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIoKCk9PntcInVzZSBzdHJpY3RcIjt2YXIgbj17NDEzOm49PntuLmV4cG9ydHM9SlNPTi5wYXJzZSgne1wiNXRoXCI6XCIxMDAwMDAwMTAwMDBcIixcIk03IzVzdXM0XCI6XCIxMDAwMDEwMDEwMDFcIixcIjcjNXN1czRcIjpcIjEwMDAwMTAwMTAxMFwiLFwic3VzNFwiOlwiMTAwMDAxMDEwMDAwXCIsXCJNN3N1czRcIjpcIjEwMDAwMTAxMDAwMVwiLFwiN3N1czRcIjpcIjEwMDAwMTAxMDAxMFwiLFwiN25vNVwiOlwiMTAwMDEwMDAwMDEwXCIsXCJhdWdcIjpcIjEwMDAxMDAwMTAwMFwiLFwiTTdiNlwiOlwiMTAwMDEwMDAxMDAxXCIsXCJtYWo3IzVcIjpcIjEwMDAxMDAwMTAwMVwiLFwiNyM1XCI6XCIxMDAwMTAwMDEwMTBcIixcIjdiMTNcIjpcIjEwMDAxMDAwMTAxMFwiLFwiTVwiOlwiMTAwMDEwMDEwMDAwXCIsXCJtYWo3XCI6XCIxMDAwMTAwMTAwMDFcIixcIjd0aFwiOlwiMTAwMDEwMDEwMDEwXCIsXCI2dGhcIjpcIjEwMDAxMDAxMDEwMFwiLFwiN2FkZDZcIjpcIjEwMDAxMDAxMDExMFwiLFwiN2I2XCI6XCIxMDAwMTAwMTEwMTBcIixcIk1iNVwiOlwiMTAwMDEwMTAwMDAwXCIsXCJNN2I1XCI6XCIxMDAwMTAxMDAwMDFcIixcIjdiNVwiOlwiMTAwMDEwMTAwMDEwXCIsXCJtYWojNFwiOlwiMTAwMDEwMTEwMDAxXCIsXCI3IzExXCI6XCIxMDAwMTAxMTAwMTBcIixcIk02IzExXCI6XCIxMDAwMTAxMTAxMDBcIixcIjcjMTFiMTNcIjpcIjEwMDAxMDExMTAxMFwiLFwibSM1XCI6XCIxMDAxMDAwMDEwMDBcIixcIm1iNk03XCI6XCIxMDAxMDAwMDEwMDFcIixcIm03IzVcIjpcIjEwMDEwMDAwMTAxMFwiLFwibVwiOlwiMTAwMTAwMDEwMDAwXCIsXCJtL21hN1wiOlwiMTAwMTAwMDEwMDAxXCIsXCJtN1wiOlwiMTAwMTAwMDEwMDEwXCIsXCJtNlwiOlwiMTAwMTAwMDEwMTAwXCIsXCJtTWFqN2I2XCI6XCIxMDAxMDAwMTEwMDFcIixcImRpbVwiOlwiMTAwMTAwMTAwMDAwXCIsXCJvTTdcIjpcIjEwMDEwMDEwMDAwMVwiLFwibTdiNVwiOlwiMTAwMTAwMTAwMDEwXCIsXCJkaW03XCI6XCIxMDAxMDAxMDAxMDBcIixcIm83TTdcIjpcIjEwMDEwMDEwMDEwMVwiLFwiNHRoXCI6XCIxMDAxMDEwMDAwMTBcIixcIm1hZGQ0XCI6XCIxMDAxMDEwMTAwMDBcIixcIm03YWRkMTFcIjpcIjEwMDEwMTAxMDAxMFwiLFwiK2FkZCM5XCI6XCIxMDAxMTAwMDEwMDBcIixcIjcjNSM5XCI6XCIxMDAxMTAwMDEwMTBcIixcIjcjOVwiOlwiMTAwMTEwMDEwMDEwXCIsXCIxMyM5XCI6XCIxMDAxMTAwMTAxMTBcIixcIjcjOWIxM1wiOlwiMTAwMTEwMDExMDEwXCIsXCJtYWo3IzkjMTFcIjpcIjEwMDExMDExMDAwMVwiLFwiNyM5IzExXCI6XCIxMDAxMTAxMTAwMTBcIixcIjEzIzkjMTFcIjpcIjEwMDExMDExMDExMFwiLFwiNyM5IzExYjEzXCI6XCIxMDAxMTAxMTEwMTBcIixcInN1czJcIjpcIjEwMTAwMDAxMDAwMFwiLFwiTTkjNXN1czRcIjpcIjEwMTAwMTAwMTAwMVwiLFwic3VzMjRcIjpcIjEwMTAwMTAxMDAwMFwiLFwiTTlzdXM0XCI6XCIxMDEwMDEwMTAwMDFcIixcIjExdGhcIjpcIjEwMTAwMTAxMDAxMFwiLFwiOXN1czRcIjpcIjEwMTAwMTAxMDAxMFwiLFwiMTNzdXM0XCI6XCIxMDEwMDEwMTAxMTBcIixcIjlubzVcIjpcIjEwMTAxMDAwMDAxMFwiLFwiMTNubzVcIjpcIjEwMTAxMDAwMDExMFwiLFwiTSM1YWRkOVwiOlwiMTAxMDEwMDAxMDAwXCIsXCJtYWo5IzVcIjpcIjEwMTAxMDAwMTAwMVwiLFwiOSM1XCI6XCIxMDEwMTAwMDEwMTBcIixcIjliMTNcIjpcIjEwMTAxMDAwMTAxMFwiLFwiTWFkZDlcIjpcIjEwMTAxMDAxMDAwMFwiLFwibWFqOVwiOlwiMTAxMDEwMDEwMDAxXCIsXCI5dGhcIjpcIjEwMTAxMDAxMDAxMFwiLFwiNi85XCI6XCIxMDEwMTAwMTAxMDBcIixcIm1hajEzXCI6XCIxMDEwMTAwMTAxMDFcIixcIk03YWRkMTNcIjpcIjEwMTAxMDAxMDEwMVwiLFwiMTN0aFwiOlwiMTAxMDEwMDEwMTEwXCIsXCJNOWI1XCI6XCIxMDEwMTAxMDAwMDFcIixcIjliNVwiOlwiMTAxMDEwMTAwMDEwXCIsXCIxM2I1XCI6XCIxMDEwMTAxMDAxMTBcIixcIjkjNSMxMVwiOlwiMTAxMDEwMTAxMDEwXCIsXCJtYWo5IzExXCI6XCIxMDEwMTAxMTAwMDFcIixcIjkjMTFcIjpcIjEwMTAxMDExMDAxMFwiLFwiNjkjMTFcIjpcIjEwMTAxMDExMDEwMFwiLFwiTTEzIzExXCI6XCIxMDEwMTAxMTAxMDFcIixcIjEzIzExXCI6XCIxMDEwMTAxMTAxMTBcIixcIjkjMTFiMTNcIjpcIjEwMTAxMDExMTAxMFwiLFwibTkjNVwiOlwiMTAxMTAwMDAxMDEwXCIsXCJtYWRkOVwiOlwiMTAxMTAwMDEwMDAwXCIsXCJtTTlcIjpcIjEwMTEwMDAxMDAwMVwiLFwibTlcIjpcIjEwMTEwMDAxMDAxMFwiLFwibTY5XCI6XCIxMDExMDAwMTAxMDBcIixcIm0xM1wiOlwiMTAxMTAwMDEwMTEwXCIsXCJtTWFqOWI2XCI6XCIxMDExMDAwMTEwMDFcIixcIm05YjVcIjpcIjEwMTEwMDEwMDAxMFwiLFwibTExQVwiOlwiMTAxMTAxMDAxMDEwXCIsXCJtMTFcIjpcIjEwMTEwMTAxMDAxMFwiLFwiYjlzdXNcIjpcIjExMDAwMTAxMDAxMFwiLFwiMTFiOVwiOlwiMTEwMDAxMDEwMDEwXCIsXCI3c3VzNGI5YjEzXCI6XCIxMTAwMDEwMTEwMTBcIixcImFsdDdcIjpcIjExMDAxMDAwMDAxMFwiLFwiNyM1YjlcIjpcIjExMDAxMDAwMTAxMFwiLFwiTWFkZGI5XCI6XCIxMTAwMTAwMTAwMDBcIixcIk03YjlcIjpcIjExMDAxMDAxMDAwMVwiLFwiN2I5XCI6XCIxMTAwMTAwMTAwMTBcIixcIjEzYjlcIjpcIjExMDAxMDAxMDExMFwiLFwiN2I5YjEzXCI6XCIxMTAwMTAwMTEwMTBcIixcIjcjNWI5IzExXCI6XCIxMTAwMTAxMDEwMTBcIixcIjdiOSMxMVwiOlwiMTEwMDEwMTEwMDEwXCIsXCIxM2I5IzExXCI6XCIxMTAwMTAxMTAxMTBcIixcIjdiOWIxMyMxMVwiOlwiMTEwMDEwMTExMDEwXCIsXCJtYjZiOVwiOlwiMTEwMTAwMDAxMDAwXCIsXCI3YjkjOVwiOlwiMTEwMTEwMDEwMDEwXCJ9Jyl9LDcyMjpuPT57bi5leHBvcnRzPUpTT04ucGFyc2UoJ3tcIm1ham9yIHBlbnRhdG9uaWNcIjpcIjEwMTAxMDAxMDEwMFwiLFwiaW9uaWFuIHBlbnRhdG9uaWNcIjpcIjEwMDAxMTAxMDAwMVwiLFwibWl4b2x5ZGlhbiBwZW50YXRvbmljXCI6XCIxMDAwMTEwMTAwMTBcIixcInJpdHVzZW5cIjpcIjEwMTAwMTAxMDEwMFwiLFwiZWd5cHRpYW5cIjpcIjEwMTAwMTAxMDAxMFwiLFwibmVvcG9saXRhbiBtYWpvciBwZW50YXRvbmljXCI6XCIxMDAwMTExMDAwMTBcIixcInZpZXRuYW1lc2UgMVwiOlwiMTAwMTAxMDExMDAwXCIsXCJwZWxvZ1wiOlwiMTEwMTAwMDExMDAwXCIsXCJrdW1vaWpvc2hpXCI6XCIxMTAwMDEwMTEwMDBcIixcImhpcmFqb3NoaVwiOlwiMTAxMTAwMDExMDAwXCIsXCJpd2F0b1wiOlwiMTEwMDAxMTAwMDEwXCIsXCJpbi1zZW5cIjpcIjExMDAwMTAxMDAxMFwiLFwibHlkaWFuIHBlbnRhdG9uaWNcIjpcIjEwMDAxMDExMDAwMVwiLFwibWFsa29zIHJhZ2FcIjpcIjEwMDEwMTAwMTAxMFwiLFwibG9jcmlhbiBwZW50YXRvbmljXCI6XCIxMDAxMDExMDAwMTBcIixcIm1pbm9yIHBlbnRhdG9uaWNcIjpcIjEwMDEwMTAxMDAxMFwiLFwibWlub3Igc2l4IHBlbnRhdG9uaWNcIjpcIjEwMDEwMTAxMDEwMFwiLFwiZmxhdCB0aHJlZSBwZW50YXRvbmljXCI6XCIxMDExMDAwMTAxMDBcIixcImZsYXQgc2l4IHBlbnRhdG9uaWNcIjpcIjEwMTAxMDAxMTAwMFwiLFwic2NyaWFiaW5cIjpcIjExMDAxMDAxMDEwMFwiLFwid2hvbGUgdG9uZSBwZW50YXRvbmljXCI6XCIxMDAwMTAxMDEwMTBcIixcImx5ZGlhbiAjNVAgcGVudGF0b25pY1wiOlwiMTAwMDEwMTAxMDAxXCIsXCJseWRpYW4gZG9taW5hbnQgcGVudGF0b25pY1wiOlwiMTAwMDEwMTEwMDEwXCIsXCJtaW5vciAjN00gcGVudGF0b25pY1wiOlwiMTAwMTAxMDEwMDAxXCIsXCJzdXBlciBsb2NyaWFuIHBlbnRhdG9uaWNcIjpcIjEwMDExMDEwMDAxMFwiLFwibWlub3IgaGV4YXRvbmljXCI6XCIxMDExMDEwMTAwMDFcIixcImF1Z21lbnRlZFwiOlwiMTAwMTEwMDExMDAxXCIsXCJtYWpvciBibHVlc1wiOlwiMTAxMTEwMDEwMTAwXCIsXCJwaW9uZ2lvXCI6XCIxMDEwMDEwMTAxMTBcIixcInByb21ldGhldXMgbmVvcG9saXRhblwiOlwiMTEwMDEwMTAwMTEwXCIsXCJwcm9tZXRoZXVzXCI6XCIxMDEwMTAxMDAxMTBcIixcIm15c3RlcnkgIzFcIjpcIjExMDAxMDEwMTAxMFwiLFwic2l4IHRvbmUgc3ltbWV0cmljXCI6XCIxMTAwMTEwMDExMDBcIixcIndob2xlIHRvbmVcIjpcIjEwMTAxMDEwMTAxMFwiLFwibWVzc2lhZW5cXCdzIG1vZGUgIzVcIjpcIjExMDAwMTExMDAwMVwiLFwibWlub3IgYmx1ZXNcIjpcIjEwMDEwMTExMDAxMFwiLFwibG9jcmlhbiBtYWpvclwiOlwiMTAxMDExMTAxMDEwXCIsXCJkb3VibGUgaGFybW9uaWMgbHlkaWFuXCI6XCIxMTAwMTAxMTEwMDFcIixcImhhcm1vbmljIG1pbm9yXCI6XCIxMDExMDEwMTEwMDFcIixcImFsdGVyZWRcIjpcIjExMDExMDEwMTAxMFwiLFwibG9jcmlhbiAjMlwiOlwiMTAxMTAxMTAxMDEwXCIsXCJtaXhvbHlkaWFuIGI2XCI6XCIxMDEwMTEwMTEwMTBcIixcImx5ZGlhbiBkb21pbmFudFwiOlwiMTAxMDEwMTEwMTEwXCIsXCJseWRpYW5cIjpcIjEwMTAxMDExMDEwMVwiLFwibHlkaWFuIGF1Z21lbnRlZFwiOlwiMTAxMDEwMTAxMTAxXCIsXCJkb3JpYW4gYjJcIjpcIjExMDEwMTAxMDExMFwiLFwibWVsb2RpYyBtaW5vclwiOlwiMTAxMTAxMDEwMTAxXCIsXCJsb2NyaWFuXCI6XCIxMTAxMDExMDEwMTBcIixcInVsdHJhbG9jcmlhblwiOlwiMTEwMTEwMTAxMTAwXCIsXCJsb2NyaWFuIDZcIjpcIjExMDEwMTEwMDExMFwiLFwiYXVnbWVudGVkIGhlcHRhdG9uaWNcIjpcIjEwMDExMTAxMTAwMVwiLFwicm9tYW5pYW4gbWlub3JcIjpcIjEwMTEwMDExMDExMFwiLFwiZG9yaWFuICM0XCI6XCIxMDExMDAxMTAxMTBcIixcImx5ZGlhbiBkaW1pbmlzaGVkXCI6XCIxMDExMDAxMTAxMDFcIixcInBocnlnaWFuXCI6XCIxMTAxMDEwMTEwMTBcIixcImxlYWRpbmcgd2hvbGUgdG9uZVwiOlwiMTAxMDEwMTAxMDExXCIsXCJseWRpYW4gbWlub3JcIjpcIjEwMTAxMDExMTAxMFwiLFwicGhyeWdpYW4gZG9taW5hbnRcIjpcIjExMDAxMTAxMTAxMFwiLFwiYmFsaW5lc2VcIjpcIjExMDEwMTAxMTAwMVwiLFwibmVvcG9saXRhbiBtYWpvclwiOlwiMTEwMTAxMDEwMTAxXCIsXCJhZW9saWFuXCI6XCIxMDExMDEwMTEwMTBcIixcImhhcm1vbmljIG1ham9yXCI6XCIxMDEwMTEwMTEwMDFcIixcImRvdWJsZSBoYXJtb25pYyBtYWpvclwiOlwiMTEwMDExMDExMDAxXCIsXCJkb3JpYW5cIjpcIjEwMTEwMTAxMDExMFwiLFwiaHVuZ2FyaWFuIG1pbm9yXCI6XCIxMDExMDAxMTEwMDFcIixcImh1bmdhcmlhbiBtYWpvclwiOlwiMTAwMTEwMTEwMTEwXCIsXCJvcmllbnRhbFwiOlwiMTEwMDExMTAwMTEwXCIsXCJmbGFtZW5jb1wiOlwiMTEwMTEwMTEwMDEwXCIsXCJ0b2RpIHJhZ2FcIjpcIjExMDEwMDExMTAwMVwiLFwibWl4b2x5ZGlhblwiOlwiMTAxMDExMDEwMTEwXCIsXCJwZXJzaWFuXCI6XCIxMTAwMTExMDEwMDFcIixcIm1ham9yXCI6XCIxMDEwMTEwMTAxMDFcIixcImVuaWdtYXRpY1wiOlwiMTEwMDEwMTAxMDExXCIsXCJtYWpvciBhdWdtZW50ZWRcIjpcIjEwMTAxMTAwMTEwMVwiLFwibHlkaWFuICM5XCI6XCIxMDAxMTAxMTAxMDFcIixcIm1lc3NpYWVuXFwncyBtb2RlICM0XCI6XCIxMTEwMDExMTEwMDFcIixcInB1cnZpIHJhZ2FcIjpcIjExMDAxMTExMTAwMVwiLFwic3BhbmlzaCBoZXB0YXRvbmljXCI6XCIxMTAxMTEwMTEwMTBcIixcImJlYm9wXCI6XCIxMDEwMTEwMTAxMTFcIixcImJlYm9wIG1pbm9yXCI6XCIxMDExMTEwMTAxMTBcIixcImJlYm9wIG1ham9yXCI6XCIxMDEwMTEwMTExMDFcIixcImJlYm9wIGxvY3JpYW5cIjpcIjExMDEwMTExMTAxMFwiLFwibWlub3IgYmVib3BcIjpcIjEwMTEwMTAxMTAxMVwiLFwiZGltaW5pc2hlZFwiOlwiMTAxMTAxMTAxMTAxXCIsXCJpY2hpa29zdWNob1wiOlwiMTAxMDExMTEwMTAxXCIsXCJtaW5vciBzaXggZGltaW5pc2hlZFwiOlwiMTAxMTAxMDExMTAxXCIsXCJoYWxmLXdob2xlIGRpbWluaXNoZWRcIjpcIjExMDExMDExMDExMFwiLFwia2FmaSByYWdhXCI6XCIxMDAxMTEwMTAxMTFcIixcIm1lc3NpYWVuXFwncyBtb2RlICM2XCI6XCIxMDEwMTExMDEwMTFcIixcImNvbXBvc2l0ZSBibHVlc1wiOlwiMTAxMTExMTEwMTEwXCIsXCJtZXNzaWFlblxcJ3MgbW9kZSAjM1wiOlwiMTAxMTEwMTExMDExXCIsXCJtZXNzaWFlblxcJ3MgbW9kZSAjN1wiOlwiMTExMTAxMTExMTAxXCIsXCJjaHJvbWF0aWNcIjpcIjExMTExMTExMTExMVwiLFwiaW9uaWFuXCI6XCIxMDEwMTEwMTAxMDFcIixcIm1pbm9yXCI6XCIxMDExMDEwMTEwMTBcIn0nKX19LGU9e307ZnVuY3Rpb24gbyhhKXt2YXIgaT1lW2FdO2lmKHZvaWQgMCE9PWkpcmV0dXJuIGkuZXhwb3J0czt2YXIgcj1lW2FdPXtleHBvcnRzOnt9fTtyZXR1cm4gblthXShyLHIuZXhwb3J0cyxvKSxyLmV4cG9ydHN9by5kPShuLGUpPT57Zm9yKHZhciBhIGluIGUpby5vKGUsYSkmJiFvLm8obixhKSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sYSx7ZW51bWVyYWJsZTohMCxnZXQ6ZVthXX0pfSxvLm89KG4sZSk9Pk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLGUpLG8ucj1uPT57XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkobixTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkobixcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX07dmFyIGE9e307KCgpPT57by5yKGEpLG8uZChhLHtjaG9yZDooKT0+bSxjaG9yZHM6KCk9PnQsaW5saW5lQ2hvcmQ6KCk9PnIsc2NhbGU6KCk9PmMsc2NhbGVzOigpPT5zfSk7dmFyIG49byg3MjIpLGU9byg0MTMpLGk9ZnVuY3Rpb24obyl7dmFyIGE9by5zY2FsZSxpPW8uY2hvcmQscj1hfHxpLHQ9YT9cInNjYWxlXCI6XCJjaG9yZFwiO2lmKFwic3RyaW5nXCIhPXR5cGVvZiByKXRocm93IG5ldyBFcnJvcihcIlwiLmNvbmNhdChyLFwiIGlzIG5vdCBhIHZhbGlkIGlucHV0IGZvciBcIikuY29uY2F0KHQpKTt2YXIgcyxtLGM9ci5pbmRleE9mKFwiIFwiKTstMT09PWM/KHM9ci5zbGljZSgxKSxtPXJbMF0sXCJiXCIhPT1yWzFdJiZcIiNcIiE9PXJbMV18fChzPXIuc2xpY2UoMiksbSs9clsxXSkpOihzPXIuc2xpY2UoLTE9PT1jPzE6YysxKSxtPXIuc2xpY2UoMCxjKSk7dmFyIGQ9ZnVuY3Rpb24obil7cmV0dXJue1wiQyNcIjpcIkRiXCIsXCJEI1wiOlwiRWJcIixcIkYjXCI6XCJHYlwiLFwiRyNcIjpcIkFiXCIsXCJBI1wiOlwiQmJcIn1bbi50b1VwcGVyQ2FzZSgpXXx8bi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStuLnNsaWNlKDEpfShtLnJlcGxhY2UoL1xcZC9nLFwiXCIpKSxsPVwiXCIhPT1tLnJlcGxhY2UoL1xcRC9nLFwiXCIpPyttLnJlcGxhY2UoL1xcRC9nLFwiXCIpOjQ7aWYoaXNOYU4obCkpdGhyb3cgbmV3IEVycm9yKFwiXCIuY29uY2F0KG1bMF0sXCIgZG9lcyBub3QgaGF2ZSBhIHZhbGlkIG9jdGF2ZVwiKSk7aWYoIW5bc10mJiFlW3NdKXRocm93IG5ldyBFcnJvcihcIlwiLmNvbmNhdChyLFwiIGlzIG5vdCBhIHZhbGlkIFwiKS5jb25jYXQodCkpO2Zvcih2YXIgYj1mdW5jdGlvbihuLGUpe3ZhciBvPVtcIkNcIixcIkRiXCIsXCJEXCIsXCJFYlwiLFwiRVwiLFwiRlwiLFwiR2JcIixcIkdcIixcIkFiXCIsXCJBXCIsXCJCYlwiLFwiQlwiXSxhPW8ubWFwKChmdW5jdGlvbihuKXtyZXR1cm4gbitlfSkpLGk9by5tYXAoKGZ1bmN0aW9uKG4pe3JldHVybiBuKyhlKzEpfSkpLHI9YS5jb25jYXQoaSk7cmV0dXJuIHIuc2xpY2Uoci5pbmRleE9mKG4rZSkpfShkLGwpLHU9W10scD0wLGg9MCxmPWE/bjplO3A8ZltzXS5sZW5ndGg7KVwiMVwiPT09ZltzXVtwXSYmdS5wdXNoKGJbaF0pLHArKyxoKys7cmV0dXJuIHV9LHI9ZnVuY3Rpb24obil7dmFyIGUsbyxhPVwiYjlzdXNcIixyPTQ7cmV0dXJuIG4uaW5jbHVkZXMoYSk/KG89YSxlPW4uc2xpY2UoMCxuLmluZGV4T2YoYSkpKTooZT1uWzBdLG89bi5zbGljZSgxKSxcImJcIiE9PW5bMV0mJlwiI1wiIT09blsxXXx8KGUrPW5bMV0sbz1uLnNsaWNlKDIpKSksbi5pbmNsdWRlcyhcIl9cIikmJihyPStuLnNwbGl0KFwiX1wiKVsxXSxvPW8uc2xpY2UoMCxvLmluZGV4T2YoXCJfXCIpKSksaSh7Y2hvcmQ6ZStyK1wiIFwiK299KX0sdD1mdW5jdGlvbigpe3JldHVybiBPYmplY3Qua2V5cyhlKX0scz1mdW5jdGlvbigpe3JldHVybiBPYmplY3Qua2V5cyhuKX0sbT1mdW5jdGlvbihuKXtyZXR1cm4gaSh7Y2hvcmQ6bn0pfSxjPWZ1bmN0aW9uKG4pe3JldHVybiBpKHtzY2FsZTpufSl9fSkoKTt2YXIgaT1leHBvcnRzO2Zvcih2YXIgciBpbiBhKWlbcl09YVtyXTthLl9fZXNNb2R1bGUmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShpLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1haW4uanMubWFwIiwgIid1c2Ugc3RyaWN0J1xuXG4vLyB1dGlsXG5mdW5jdGlvbiBmaWxsU3RyIChzLCBudW0pIHsgcmV0dXJuIEFycmF5KG51bSArIDEpLmpvaW4ocykgfVxuZnVuY3Rpb24gaXNOdW0gKHgpIHsgcmV0dXJuIHR5cGVvZiB4ID09PSAnbnVtYmVyJyB9XG5mdW5jdGlvbiBpc1N0ciAoeCkgeyByZXR1cm4gdHlwZW9mIHggPT09ICdzdHJpbmcnIH1cbmZ1bmN0aW9uIGlzRGVmICh4KSB7IHJldHVybiB0eXBlb2YgeCAhPT0gJ3VuZGVmaW5lZCcgfVxuZnVuY3Rpb24gbWlkaVRvRnJlcSAobWlkaSwgdHVuaW5nKSB7XG4gIHJldHVybiBNYXRoLnBvdygyLCAobWlkaSAtIDY5KSAvIDEyKSAqICh0dW5pbmcgfHwgNDQwKVxufVxuXG52YXIgUkVHRVggPSAvXihbYS1nQS1HXSkoI3sxLH18YnsxLH18eHsxLH18KSgtP1xcZCopXFxzKiguKilcXHMqJC9cbi8qKlxuICogQSByZWdleCBmb3IgbWF0Y2hpbmcgbm90ZSBzdHJpbmdzIGluIHNjaWVudGlmaWMgbm90YXRpb24uXG4gKlxuICogQG5hbWUgcmVnZXhcbiAqIEBmdW5jdGlvblxuICogQHJldHVybiB7UmVnRXhwfSB0aGUgcmVnZXhwIHVzZWQgdG8gcGFyc2UgdGhlIG5vdGUgbmFtZVxuICpcbiAqIFRoZSBub3RlIHN0cmluZyBzaG91bGQgaGF2ZSB0aGUgZm9ybSBgbGV0dGVyW2FjY2lkZW50YWxzXVtvY3RhdmVdW2VsZW1lbnRdYFxuICogd2hlcmU6XG4gKlxuICogLSBsZXR0ZXI6IChSZXF1aXJlZCkgaXMgYSBsZXR0ZXIgZnJvbSBBIHRvIEcgZWl0aGVyIHVwcGVyIG9yIGxvd2VyIGNhc2VcbiAqIC0gYWNjaWRlbnRhbHM6IChPcHRpb25hbCkgY2FuIGJlIG9uZSBvciBtb3JlIGBiYCAoZmxhdHMpLCBgI2AgKHNoYXJwcykgb3IgYHhgIChkb3VibGUgc2hhcnBzKS5cbiAqIFRoZXkgY2FuIE5PVCBiZSBtaXhlZC5cbiAqIC0gb2N0YXZlOiAoT3B0aW9uYWwpIGEgcG9zaXRpdmUgb3IgbmVnYXRpdmUgaW50ZWdlclxuICogLSBlbGVtZW50OiAoT3B0aW9uYWwpIGFkZGl0aW9uYWxseSBhbnl0aGluZyBhZnRlciB0aGUgZHVyYXRpb24gaXMgY29uc2lkZXJlZCB0b1xuICogYmUgdGhlIGVsZW1lbnQgbmFtZSAoZm9yIGV4YW1wbGU6ICdDMiBkb3JpYW4nKVxuICpcbiAqIFRoZSBleGVjdXRlZCByZWdleCBjb250YWlucyAoYnkgYXJyYXkgaW5kZXgpOlxuICpcbiAqIC0gMDogdGhlIGNvbXBsZXRlIHN0cmluZ1xuICogLSAxOiB0aGUgbm90ZSBsZXR0ZXJcbiAqIC0gMjogdGhlIG9wdGlvbmFsIGFjY2lkZW50YWxzXG4gKiAtIDM6IHRoZSBvcHRpb25hbCBvY3RhdmVcbiAqIC0gNDogdGhlIHJlc3Qgb2YgdGhlIHN0cmluZyAodHJpbW1lZClcbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIHBhcnNlciA9IHJlcXVpcmUoJ25vdGUtcGFyc2VyJylcbiAqIHBhcnNlci5yZWdleC5leGVjKCdjIzQnKVxuICogLy8gPT4gWydjIzQnLCAnYycsICcjJywgJzQnLCAnJ11cbiAqIHBhcnNlci5yZWdleC5leGVjKCdjIzQgbWFqb3InKVxuICogLy8gPT4gWydjIzRtYWpvcicsICdjJywgJyMnLCAnNCcsICdtYWpvciddXG4gKiBwYXJzZXIucmVnZXgoKS5leGVjKCdDTWFqNycpXG4gKiAvLyA9PiBbJ0NNYWo3JywgJ0MnLCAnJywgJycsICdNYWo3J11cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2V4ICgpIHsgcmV0dXJuIFJFR0VYIH1cblxudmFyIFNFTUlUT05FUyA9IFswLCAyLCA0LCA1LCA3LCA5LCAxMV1cbi8qKlxuICogUGFyc2UgYSBub3RlIG5hbWUgaW4gc2NpZW50aWZpYyBub3RhdGlvbiBhbiByZXR1cm4gaXQncyBjb21wb25lbnRzLFxuICogYW5kIHNvbWUgbnVtZXJpYyBwcm9wZXJ0aWVzIGluY2x1ZGluZyBtaWRpIG51bWJlciBhbmQgZnJlcXVlbmN5LlxuICpcbiAqIEBuYW1lIHBhcnNlXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBub3RlIC0gdGhlIG5vdGUgc3RyaW5nIHRvIGJlIHBhcnNlZFxuICogQHBhcmFtIHtCb29sZWFufSBpc1RvbmljIC0gdHJ1ZSB0aGUgc3RyaW5ncyBpdCdzIHN1cHBvc2VkIHRvIGNvbnRhaW4gYSBub3RlIG51bWJlclxuICogYW5kIHNvbWUgY2F0ZWdvcnkgKGZvciBleGFtcGxlIGFuIHNjYWxlOiAnQyMgbWFqb3InKS4gSXQncyBmYWxzZSBieSBkZWZhdWx0LFxuICogYnV0IHdoZW4gdHJ1ZSwgZW4gZXh0cmEgdG9uaWNPZiBwcm9wZXJ0eSBpcyByZXR1cm5lZCB3aXRoIHRoZSBjYXRlZ29yeSAoJ21ham9yJylcbiAqIEBwYXJhbSB7RmxvYXR9IHR1bm5pbmcgLSBUaGUgZnJlcXVlbmN5IG9mIEE0IG5vdGUgdG8gY2FsY3VsYXRlIGZyZXF1ZW5jaWVzLlxuICogQnkgZGVmYXVsdCBpdCA0NDAuXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBwYXJzZWQgbm90ZSBuYW1lIG9yIG51bGwgaWYgbm90IGEgdmFsaWQgbm90ZVxuICpcbiAqIFRoZSBwYXJzZWQgbm90ZSBuYW1lIG9iamVjdCB3aWxsIEFMV0FZUyBjb250YWluczpcbiAqIC0gbGV0dGVyOiB0aGUgdXBwZXJjYXNlIGxldHRlciBvZiB0aGUgbm90ZVxuICogLSBhY2M6IHRoZSBhY2NpZGVudGFscyBvZiB0aGUgbm90ZSAob25seSBzaGFycHMgb3IgZmxhdHMpXG4gKiAtIHBjOiB0aGUgcGl0Y2ggY2xhc3MgKGxldHRlciArIGFjYylcbiAqIC0gc3RlcDogcyBhIG51bWVyaWMgcmVwcmVzZW50YXRpb24gb2YgdGhlIGxldHRlci4gSXQncyBhbiBpbnRlZ2VyIGZyb20gMCB0byA2XG4gKiB3aGVyZSAwID0gQywgMSA9IEQgLi4uIDYgPSBCXG4gKiAtIGFsdDogYSBudW1lcmljIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBhY2NpZGVudGFscy4gMCBtZWFucyBubyBhbHRlcmF0aW9uLFxuICogcG9zaXRpdmUgbnVtYmVycyBhcmUgZm9yIHNoYXJwcyBhbmQgbmVnYXRpdmUgZm9yIGZsYXRzXG4gKiAtIGNocm9tYTogYSBudW1lcmljIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBwaXRjaCBjbGFzcy4gSXQncyBsaWtlIG1pZGkgZm9yXG4gKiBwaXRjaCBjbGFzc2VzLiAwID0gQywgMSA9IEMjLCAyID0gRCAuLi4gMTEgPSBCLiBDYW4gYmUgdXNlZCB0byBmaW5kIGVuaGFybW9uaWNzXG4gKiBzaW5jZSwgZm9yIGV4YW1wbGUsIGNocm9tYSBvZiAnQ2InIGFuZCAnQicgYXJlIGJvdGggMTFcbiAqXG4gKiBJZiB0aGUgbm90ZSBoYXMgb2N0YXZlLCB0aGUgcGFyc2VyIG9iamVjdCB3aWxsIGNvbnRhaW46XG4gKiAtIG9jdDogdGhlIG9jdGF2ZSBudW1iZXIgKGFzIGludGVnZXIpXG4gKiAtIG1pZGk6IHRoZSBtaWRpIG51bWJlclxuICogLSBmcmVxOiB0aGUgZnJlcXVlbmN5ICh1c2luZyB0dW5pbmcgcGFyYW1ldGVyIGFzIGJhc2UpXG4gKlxuICogSWYgdGhlIHBhcmFtZXRlciBgaXNUb25pY2AgaXMgc2V0IHRvIHRydWUsIHRoZSBwYXJzZWQgb2JqZWN0IHdpbGwgY29udGFpbjpcbiAqIC0gdG9uaWNPZjogdGhlIHJlc3Qgb2YgdGhlIHN0cmluZyB0aGF0IGZvbGxvd3Mgbm90ZSBuYW1lIChsZWZ0IGFuZCByaWdodCB0cmltbWVkKVxuICpcbiAqIEBleGFtcGxlXG4gKiB2YXIgcGFyc2UgPSByZXF1aXJlKCdub3RlLXBhcnNlcicpLnBhcnNlXG4gKiBwYXJzZSgnQ2I0JylcbiAqIC8vID0+IHsgbGV0dGVyOiAnQycsIGFjYzogJ2InLCBwYzogJ0NiJywgc3RlcDogMCwgYWx0OiAtMSwgY2hyb21hOiAtMSxcbiAqICAgICAgICAgb2N0OiA0LCBtaWRpOiA1OSwgZnJlcTogMjQ2Ljk0MTY1MDYyODA2MjA2IH1cbiAqIC8vIGlmIG5vIG9jdGF2ZSwgbm8gbWlkaSwgbm8gZnJlcVxuICogcGFyc2UoJ2Z4JylcbiAqIC8vID0+IHsgbGV0dGVyOiAnRicsIGFjYzogJyMjJywgcGM6ICdGIyMnLCBzdGVwOiAzLCBhbHQ6IDIsIGNocm9tYTogNyB9KVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2UgKHN0ciwgaXNUb25pYywgdHVuaW5nKSB7XG4gIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykgcmV0dXJuIG51bGxcbiAgdmFyIG0gPSBSRUdFWC5leGVjKHN0cilcbiAgaWYgKCFtIHx8ICghaXNUb25pYyAmJiBtWzRdKSkgcmV0dXJuIG51bGxcblxuICB2YXIgcCA9IHsgbGV0dGVyOiBtWzFdLnRvVXBwZXJDYXNlKCksIGFjYzogbVsyXS5yZXBsYWNlKC94L2csICcjIycpIH1cbiAgcC5wYyA9IHAubGV0dGVyICsgcC5hY2NcbiAgcC5zdGVwID0gKHAubGV0dGVyLmNoYXJDb2RlQXQoMCkgKyAzKSAlIDdcbiAgcC5hbHQgPSBwLmFjY1swXSA9PT0gJ2InID8gLXAuYWNjLmxlbmd0aCA6IHAuYWNjLmxlbmd0aFxuICB2YXIgcG9zID0gU0VNSVRPTkVTW3Auc3RlcF0gKyBwLmFsdFxuICBwLmNocm9tYSA9IHBvcyA8IDAgPyAxMiArIHBvcyA6IHBvcyAlIDEyXG4gIGlmIChtWzNdKSB7IC8vIGhhcyBvY3RhdmVcbiAgICBwLm9jdCA9ICttWzNdXG4gICAgcC5taWRpID0gcG9zICsgMTIgKiAocC5vY3QgKyAxKVxuICAgIHAuZnJlcSA9IG1pZGlUb0ZyZXEocC5taWRpLCB0dW5pbmcpXG4gIH1cbiAgaWYgKGlzVG9uaWMpIHAudG9uaWNPZiA9IG1bNF1cbiAgcmV0dXJuIHBcbn1cblxudmFyIExFVFRFUlMgPSAnQ0RFRkdBQidcbmZ1bmN0aW9uIGFjY1N0ciAobikgeyByZXR1cm4gIWlzTnVtKG4pID8gJycgOiBuIDwgMCA/IGZpbGxTdHIoJ2InLCAtbikgOiBmaWxsU3RyKCcjJywgbikgfVxuZnVuY3Rpb24gb2N0U3RyIChuKSB7IHJldHVybiAhaXNOdW0obikgPyAnJyA6ICcnICsgbiB9XG5cbi8qKlxuICogQ3JlYXRlIGEgc3RyaW5nIGZyb20gYSBwYXJzZWQgb2JqZWN0IG9yIGBzdGVwLCBhbHRlcmF0aW9uLCBvY3RhdmVgIHBhcmFtZXRlcnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSB0aGUgcGFyc2VkIGRhdGEgb2JqZWN0XG4gKiBAcmV0dXJuIHtTdHJpbmd9IGEgbm90ZSBzdHJpbmcgb3IgbnVsbCBpZiBub3QgdmFsaWQgcGFyYW1ldGVyc1xuICogQHNpbmNlIDEuMlxuICogQGV4YW1wbGVcbiAqIHBhcnNlci5idWlsZChwYXJzZXIucGFyc2UoJ2NiMicpKSAvLyA9PiAnQ2IyJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBpdCBhY2NlcHRzIChzdGVwLCBhbHRlcmF0aW9uLCBvY3RhdmUpIHBhcmFtZXRlcnM6XG4gKiBwYXJzZXIuYnVpbGQoMykgLy8gPT4gJ0YnXG4gKiBwYXJzZXIuYnVpbGQoMywgLTEpIC8vID0+ICdGYidcbiAqIHBhcnNlci5idWlsZCgzLCAtMSwgNCkgLy8gPT4gJ0ZiNCdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkIChzLCBhLCBvKSB7XG4gIGlmIChzID09PSBudWxsIHx8IHR5cGVvZiBzID09PSAndW5kZWZpbmVkJykgcmV0dXJuIG51bGxcbiAgaWYgKHMuc3RlcCkgcmV0dXJuIGJ1aWxkKHMuc3RlcCwgcy5hbHQsIHMub2N0KVxuICBpZiAocyA8IDAgfHwgcyA+IDYpIHJldHVybiBudWxsXG4gIHJldHVybiBMRVRURVJTLmNoYXJBdChzKSArIGFjY1N0cihhKSArIG9jdFN0cihvKVxufVxuXG4vKipcbiAqIEdldCBtaWRpIG9mIGEgbm90ZVxuICpcbiAqIEBuYW1lIG1pZGlcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtTdHJpbmd8SW50ZWdlcn0gbm90ZSAtIHRoZSBub3RlIG5hbWUgb3IgbWlkaSBudW1iZXJcbiAqIEByZXR1cm4ge0ludGVnZXJ9IHRoZSBtaWRpIG51bWJlciBvZiB0aGUgbm90ZSBvciBudWxsIGlmIG5vdCBhIHZhbGlkIG5vdGVcbiAqIG9yIHRoZSBub3RlIGRvZXMgTk9UIGNvbnRhaW5zIG9jdGF2ZVxuICogQGV4YW1wbGVcbiAqIHZhciBwYXJzZXIgPSByZXF1aXJlKCdub3RlLXBhcnNlcicpXG4gKiBwYXJzZXIubWlkaSgnQTQnKSAvLyA9PiA2OVxuICogcGFyc2VyLm1pZGkoJ0EnKSAvLyA9PiBudWxsXG4gKiBAZXhhbXBsZVxuICogLy8gbWlkaSBudW1iZXJzIGFyZSBieXBhc3NlZCAoZXZlbiBhcyBzdHJpbmdzKVxuICogcGFyc2VyLm1pZGkoNjApIC8vID0+IDYwXG4gKiBwYXJzZXIubWlkaSgnNjAnKSAvLyA9PiA2MFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWlkaSAobm90ZSkge1xuICBpZiAoKGlzTnVtKG5vdGUpIHx8IGlzU3RyKG5vdGUpKSAmJiBub3RlID49IDAgJiYgbm90ZSA8IDEyOCkgcmV0dXJuICtub3RlXG4gIHZhciBwID0gcGFyc2Uobm90ZSlcbiAgcmV0dXJuIHAgJiYgaXNEZWYocC5taWRpKSA/IHAubWlkaSA6IG51bGxcbn1cblxuLyoqXG4gKiBHZXQgZnJlcSBvZiBhIG5vdGUgaW4gaGVydHpzIChpbiBhIHdlbGwgdGVtcGVyZWQgNDQwSHogQTQpXG4gKlxuICogQG5hbWUgZnJlcVxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbm90ZSAtIHRoZSBub3RlIG5hbWUgb3Igbm90ZSBtaWRpIG51bWJlclxuICogQHBhcmFtIHtTdHJpbmd9IHR1bmluZyAtIChPcHRpb25hbCkgdGhlIEE0IGZyZXF1ZW5jeSAoNDQwIGJ5IGRlZmF1bHQpXG4gKiBAcmV0dXJuIHtGbG9hdH0gdGhlIGZyZXEgb2YgdGhlIG51bWJlciBpZiBoZXJ0enMgb3IgbnVsbCBpZiBub3QgdmFsaWQgbm90ZVxuICogQGV4YW1wbGVcbiAqIHZhciBwYXJzZXIgPSByZXF1aXJlKCdub3RlLXBhcnNlcicpXG4gKiBwYXJzZXIuZnJlcSgnQTQnKSAvLyA9PiA0NDBcbiAqIHBhcnNlci5mcmVxKCdBJykgLy8gPT4gbnVsbFxuICogQGV4YW1wbGVcbiAqIC8vIGNhbiBjaGFuZ2UgdHVuaW5nICg0NDAgYnkgZGVmYXVsdClcbiAqIHBhcnNlci5mcmVxKCdBNCcsIDQ0NCkgLy8gPT4gNDQ0XG4gKiBwYXJzZXIuZnJlcSgnQTMnLCA0NDQpIC8vID0+IDIyMlxuICogQGV4YW1wbGVcbiAqIC8vIGl0IGFjY2VwdHMgbWlkaSBudW1iZXJzIChhcyBudW1iZXJzIGFuZCBhcyBzdHJpbmdzKVxuICogcGFyc2VyLmZyZXEoNjkpIC8vID0+IDQ0MFxuICogcGFyc2VyLmZyZXEoJzY5JywgNDQyKSAvLyA9PiA0NDJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyZXEgKG5vdGUsIHR1bmluZykge1xuICB2YXIgbSA9IG1pZGkobm90ZSlcbiAgcmV0dXJuIG0gPT09IG51bGwgPyBudWxsIDogbWlkaVRvRnJlcShtLCB0dW5pbmcpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZXR0ZXIgKHNyYykgeyByZXR1cm4gKHBhcnNlKHNyYykgfHwge30pLmxldHRlciB9XG5leHBvcnQgZnVuY3Rpb24gYWNjIChzcmMpIHsgcmV0dXJuIChwYXJzZShzcmMpIHx8IHt9KS5hY2MgfVxuZXhwb3J0IGZ1bmN0aW9uIHBjIChzcmMpIHsgcmV0dXJuIChwYXJzZShzcmMpIHx8IHt9KS5wYyB9XG5leHBvcnQgZnVuY3Rpb24gc3RlcCAoc3JjKSB7IHJldHVybiAocGFyc2Uoc3JjKSB8fCB7fSkuc3RlcCB9XG5leHBvcnQgZnVuY3Rpb24gYWx0IChzcmMpIHsgcmV0dXJuIChwYXJzZShzcmMpIHx8IHt9KS5hbHQgfVxuZXhwb3J0IGZ1bmN0aW9uIGNocm9tYSAoc3JjKSB7IHJldHVybiAocGFyc2Uoc3JjKSB8fCB7fSkuY2hyb21hIH1cbmV4cG9ydCBmdW5jdGlvbiBvY3QgKHNyYykgeyByZXR1cm4gKHBhcnNlKHNyYykgfHwge30pLm9jdCB9XG4iLCAiLyoqXG4gKiBBIG1pZGkgbm90ZSBudW1iZXIgaXMgYSBudW1iZXIgcmVwcmVzZW50YXRpb24gb2YgYSBub3RlIHBpdGNoLiBJdCBjYW4gYmVcbiAqIGludGVnZXJzIHNvIGl0J3MgZXF1YWwgdGVtcGVyZWQgdHVuZWQsIG9yIGZsb2F0IHRvIGluZGljYXRlIGl0J3Mgbm90XG4gKiB0dW5lZCBpbnRvIGVxdWFsIHRlbWVwZXJlZCBzY2FsZS5cbiAqXG4gKiBUaGlzIG1vZHVsZSBjb250YWlucyBmdW5jdGlvbnMgdG8gY29udmVydCB0byBhbmQgZnJvbSBtaWRpIG5vdGVzLlxuICpcbiAqIEBleGFtcGxlXG4gKiB2YXIgbWlkaSA9IHJlcXVpcmUoJ3RvbmFsLW1pZGknKVxuICogbWlkaS50b01pZGkoJ0E0JykgLy8gPT4gNjlcbiAqIG1pZGkubm90ZSg2OSkgLy8gPT4gJ0E0J1xuICogbWlkaS5ub3RlKDYxKSAvLyA9PiAnRGI0J1xuICogbWlkaS5ub3RlKDYxLCB0cnVlKSAvLyA9PiAnQyM0J1xuICpcbiAqIEBtb2R1bGUgbWlkaVxuICovXG5cbmltcG9ydCB7IG1pZGkgfSBmcm9tICdub3RlLXBhcnNlcidcblxuLyoqXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBub3RlIHRvIGEgbWlkaSBub3RlIG51bWJlci4gSWYgeW91IHBhc3MgYSBtaWRpIG51bWJlciBpdFxuICogd2lsbCByZXR1cm5lZCBhcyBpcy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fFN0cmluZ3xOdW1iZXJ9IG5vdGUgLSB0aGUgbm90ZSB0byBnZXQgdGhlIG1pZGkgbnVtYmVyIGZyb21cbiAqIEByZXR1cm4ge0ludGVnZXJ9IHRoZSBtaWRpIG51bWJlciBvciBudWxsIGlmIG5vdCB2YWxpZCBwaXRjaFxuICogQGV4YW1wbGVcbiAqIG1pZGkudG9NaWRpKCdDNCcpIC8vID0+IDYwXG4gKiBtaWRpLnRvTWlkaSg2MCkgLy8gPT4gNjBcbiAqIG1pZGkudG9NaWRpKCc2MCcpIC8vID0+IDYwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b01pZGkgKHZhbCkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpICYmIHZhbC5sZW5ndGggPT09IDIpIHJldHVybiB2YWxbMF0gKiA3ICsgdmFsWzFdICogMTIgKyAxMlxuICByZXR1cm4gbWlkaSh2YWwpXG59XG5cbnZhciBGTEFUUyA9ICdDIERiIEQgRWIgRSBGIEdiIEcgQWIgQSBCYiBCJy5zcGxpdCgnICcpXG52YXIgU0hBUlBTID0gJ0MgQyMgRCBEIyBFIEYgRiMgRyBHIyBBIEEjIEInLnNwbGl0KCcgJylcblxuLyoqXG4gKiBHaXZlbiBhIG1pZGkgbnVtYmVyLCByZXR1cm5zIGEgbm90ZSBuYW1lLiBUaGUgYWx0ZXJlZCBub3RlcyB3aWxsIGhhdmVcbiAqIGZsYXRzIHVubGVzcyBleHBsaWNpdGx5IHNldCB3aXRoIHRoZSBvcHRpb25hbCBgdXNlU2hhcnBzYCBwYXJhbWV0ZXIuXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0ludGVnZXJ9IG1pZGkgLSB0aGUgbWlkaSBub3RlIG51bWJlclxuICogQHBhcmFtIHtCb29sZWFufSB1c2VTaGFycHMgLSAoT3B0aW9uYWwpIHNldCB0byB0cnVlIHRvIHVzZSBzaGFycHMgaW5zdGVhZCBvZiBmbGF0c1xuICogQHJldHVybiB7U3RyaW5nfSB0aGUgbm90ZSBuYW1lXG4gKiBAZXhhbXBsZVxuICogdmFyIG1pZGkgPSByZXF1aXJlKCd0b25hbC1taWRpJylcbiAqIG1pZGkubm90ZSg2MSkgLy8gPT4gJ0RiNCdcbiAqIG1pZGkubm90ZSg2MSwgdHJ1ZSkgLy8gPT4gJ0MjNCdcbiAqIC8vIGl0IHJvdW5kcyB0byBuZWFyZXN0IG5vdGVcbiAqIG1pZGkubm90ZSg2MS43KSAvLyA9PiAnRDQnXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3RlIChudW0sIHNoYXJwcykge1xuICBpZiAobnVtID09PSB0cnVlIHx8IG51bSA9PT0gZmFsc2UpIHJldHVybiBmdW5jdGlvbiAobSkgeyByZXR1cm4gbm90ZShtLCBudW0pIH1cbiAgbnVtID0gTWF0aC5yb3VuZChudW0pXG4gIHZhciBwY3MgPSBzaGFycHMgPT09IHRydWUgPyBTSEFSUFMgOiBGTEFUU1xuICB2YXIgcGMgPSBwY3NbbnVtICUgMTJdXG4gIHZhciBvID0gTWF0aC5mbG9vcihudW0gLyAxMikgLSAxXG4gIHJldHVybiBwYyArIG9cbn1cbiIsICJ7XG4gIFwibmFtZVwiOiBcIm1pZGktd3JpdGVyLWpzXCIsXG4gIFwidmVyc2lvblwiOiBcIjIuMC4xXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJBIGxpYnJhcnkgcHJvdmlkaW5nIGFuIEFQSSBmb3IgZ2VuZXJhdGluZyBNSURJIGZpbGVzLlwiLFxuICBcIm1haW5cIjogXCJidWlsZC9pbmRleC5qc1wiLFxuICBcInR5cGVzXCI6IFwidHlwZXMuZC50c1wiLFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJ0b25hbC1taWRpXCI6IFwiXjAuNjkuN1wiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBiYWJlbC9jb3JlXCI6IFwiXjcuOS42XCIsXG4gICAgXCJAYmFiZWwvcGx1Z2luLXRyYW5zZm9ybS1kZXN0cnVjdHVyaW5nXCI6IFwiXjcuOS41XCIsXG4gICAgXCJAYmFiZWwvcHJlc2V0LWVudlwiOiBcIl43LjkuNlwiLFxuICAgIFwiQHJvbGx1cC9wbHVnaW4tYmFiZWxcIjogXCJeNS4wLjBcIixcbiAgICBcImVzbGludFwiOiBcIl43LjAuMFwiLFxuICAgIFwiZXNsaW50LWNvbmZpZy1zdGFuZGFyZFwiOiBcIl4xMi4wLjBcIixcbiAgICBcImVzbGludC1wbHVnaW4taW1wb3J0XCI6IFwiXjIuMjAuMlwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1ub2RlXCI6IFwiXjkuMi4wXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXByb21pc2VcIjogXCJeNC4xLjFcIixcbiAgICBcImVzbGludC1wbHVnaW4tc3RhbmRhcmRcIjogXCJeNC4wLjFcIixcbiAgICBcImpzZG9jXCI6IFwiXjMuNi40XCIsXG4gICAgXCJtaW5hbWlcIjogXCJeMS4yLjNcIixcbiAgICBcIm1vY2hhXCI6IFwiXjkuMC4xXCIsXG4gICAgXCJueWNcIjogXCJeMTUuMC4xXCIsXG4gICAgXCJyb2xsdXBcIjogXCJeMi45LjBcIixcbiAgICBcIndhdGNoXCI6IFwiXjEuMC4yXCJcbiAgfSxcbiAgXCJkaXJlY3Rvcmllc1wiOiB7XG4gICAgXCJsaWJcIjogXCJzcmNcIixcbiAgICBcImV4YW1wbGVcIjogXCJleGFtcGxlc1wiLFxuICAgIFwidGVzdFwiOiBcInRlc3RcIlxuICB9LFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwiYnVpbGRcIjogXCJta2RpciAtcCBidWlsZCAmJiByb2xsdXAgLWMgJiYgbnBtIHJ1biBkb2NzXCIsXG4gICAgXCJkb2NzXCI6IFwiLi9ub2RlX21vZHVsZXMvLmJpbi9qc2RvYyAtciBzcmMgUkVBRE1FLm1kIC1kIC4vZG9jcyAtdCAuL25vZGVfbW9kdWxlcy9taW5hbWlcIixcbiAgICBcImxpbnQ6anNcIjogXCJlc2xpbnQgJ3NyYy8qKi8qKi5qcydcIixcbiAgICBcInByZXB1Ymxpc2hPbmx5XCI6IFwibnBtIHRlc3RcIixcbiAgICBcInByZXRlc3RcIjogXCJucG0gcnVuIGJ1aWxkXCIsXG4gICAgXCJ0ZXN0XCI6IFwibnljIC0tcmVwb3J0ZXI9dGV4dCBtb2NoYSAtLW5vLWNvbmZpZyAtLW5vLXBhY2thZ2VcIixcbiAgICBcIndhdGNoXCI6IFwid2F0Y2ggJ25wbSBydW4gYnVpbGQnIHNyY1wiLFxuICAgIFwicG9zdGluc3RhbGxcIjogXCJub2RlIHBvc3RpbnN0YWxsLmpzXCJcbiAgfSxcbiAgXCJydW5raXRFeGFtcGxlRmlsZW5hbWVcIjogXCJydW5raXQuanNcIixcbiAgXCJyZXBvc2l0b3J5XCI6IHtcbiAgICBcInR5cGVcIjogXCJnaXRcIixcbiAgICBcInVybFwiOiBcImdpdCtodHRwczovL2dpdGh1Yi5jb20vZ3JpbW1kdWRlL01pZGlXcml0ZXJKUy5naXRcIlxuICB9LFxuICBcImtleXdvcmRzXCI6IFtcbiAgICBcIm1pZGlcIixcbiAgICBcImdlbmVyYXRvclwiLFxuICAgIFwibXVzaWNcIlxuICBdLFxuICBcImF1dGhvclwiOiBcIkdhcnJldHQgR3JpbW1cIixcbiAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gIFwiYnVnc1wiOiB7XG4gICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZ3JpbW1kdWRlL01pZGlXcml0ZXJKUy9pc3N1ZXNcIlxuICB9LFxuICBcImhvbWVwYWdlXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2dyaW1tZHVkZS9NaWRpV3JpdGVySlMjcmVhZG1lXCJcbn1cbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciB0b25hbE1pZGkgPSByZXF1aXJlKCd0b25hbC1taWRpJyk7XG5cbi8qKlxuICogTUlESSBmaWxlIGZvcm1hdCBjb25zdGFudHMuXG4gKiBAcmV0dXJuIHtDb25zdGFudHN9XG4gKi9cbnZhciBDb25zdGFudHMgPSB7XG4gIFZFUlNJT046IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpLnZlcnNpb24sXG4gIEhFQURFUl9DSFVOS19UWVBFOiBbMHg0ZCwgMHg1NCwgMHg2OCwgMHg2NF0sXG4gIC8vIE10aGRcbiAgSEVBREVSX0NIVU5LX0xFTkdUSDogWzB4MDAsIDB4MDAsIDB4MDAsIDB4MDZdLFxuICAvLyBIZWFkZXIgc2l6ZSBmb3IgU01GXG4gIEhFQURFUl9DSFVOS19GT1JNQVQwOiBbMHgwMCwgMHgwMF0sXG4gIC8vIE1pZGkgVHlwZSAwIGlkXG4gIEhFQURFUl9DSFVOS19GT1JNQVQxOiBbMHgwMCwgMHgwMV0sXG4gIC8vIE1pZGkgVHlwZSAxIGlkXG4gIEhFQURFUl9DSFVOS19ESVZJU0lPTjogWzB4MDAsIDB4ODBdLFxuICAvLyBEZWZhdWx0cyB0byAxMjggdGlja3MgcGVyIGJlYXRcbiAgVFJBQ0tfQ0hVTktfVFlQRTogWzB4NGQsIDB4NTQsIDB4NzIsIDB4NmJdLFxuICAvLyBNVHJrLFxuICBNRVRBX0VWRU5UX0lEOiAweEZGLFxuICBNRVRBX1RFWFRfSUQ6IDB4MDEsXG4gIE1FVEFfQ09QWVJJR0hUX0lEOiAweDAyLFxuICBNRVRBX1RSQUNLX05BTUVfSUQ6IDB4MDMsXG4gIE1FVEFfSU5TVFJVTUVOVF9OQU1FX0lEOiAweDA0LFxuICBNRVRBX0xZUklDX0lEOiAweDA1LFxuICBNRVRBX01BUktFUl9JRDogMHgwNixcbiAgTUVUQV9DVUVfUE9JTlQ6IDB4MDcsXG4gIE1FVEFfVEVNUE9fSUQ6IDB4NTEsXG4gIE1FVEFfU01UUEVfT0ZGU0VUOiAweDU0LFxuICBNRVRBX1RJTUVfU0lHTkFUVVJFX0lEOiAweDU4LFxuICBNRVRBX0tFWV9TSUdOQVRVUkVfSUQ6IDB4NTksXG4gIE1FVEFfRU5EX09GX1RSQUNLX0lEOiBbMHgyRiwgMHgwMF0sXG4gIENPTlRST0xMRVJfQ0hBTkdFX1NUQVRVUzogMHhCMCxcbiAgLy8gaW5jbHVkZXMgY2hhbm5lbCBudW1iZXIgKDApXG4gIFBST0dSQU1fQ0hBTkdFX1NUQVRVUzogMHhDMCxcbiAgLy8gaW5jbHVkZXMgY2hhbm5lbCBudW1iZXIgKDApXG4gIFBJVENIX0JFTkRfU1RBVFVTOiAweEUwIC8vIGluY2x1ZGVzIGNoYW5uZWwgbnVtYmVyICgwKVxuXG59O1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5mdW5jdGlvbiBfd3JhcFJlZ0V4cCgpIHtcbiAgX3dyYXBSZWdFeHAgPSBmdW5jdGlvbiAocmUsIGdyb3Vwcykge1xuICAgIHJldHVybiBuZXcgQmFiZWxSZWdFeHAocmUsIHVuZGVmaW5lZCwgZ3JvdXBzKTtcbiAgfTtcblxuICB2YXIgX3N1cGVyID0gUmVnRXhwLnByb3RvdHlwZTtcblxuICB2YXIgX2dyb3VwcyA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgZnVuY3Rpb24gQmFiZWxSZWdFeHAocmUsIGZsYWdzLCBncm91cHMpIHtcbiAgICB2YXIgX3RoaXMgPSBuZXcgUmVnRXhwKHJlLCBmbGFncyk7XG5cbiAgICBfZ3JvdXBzLnNldChfdGhpcywgZ3JvdXBzIHx8IF9ncm91cHMuZ2V0KHJlKSk7XG5cbiAgICByZXR1cm4gX3NldFByb3RvdHlwZU9mKF90aGlzLCBCYWJlbFJlZ0V4cC5wcm90b3R5cGUpO1xuICB9XG5cbiAgX2luaGVyaXRzKEJhYmVsUmVnRXhwLCBSZWdFeHApO1xuXG4gIEJhYmVsUmVnRXhwLnByb3RvdHlwZS5leGVjID0gZnVuY3Rpb24gKHN0cikge1xuICAgIHZhciByZXN1bHQgPSBfc3VwZXIuZXhlYy5jYWxsKHRoaXMsIHN0cik7XG5cbiAgICBpZiAocmVzdWx0KSByZXN1bHQuZ3JvdXBzID0gYnVpbGRHcm91cHMocmVzdWx0LCB0aGlzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIEJhYmVsUmVnRXhwLnByb3RvdHlwZVtTeW1ib2wucmVwbGFjZV0gPSBmdW5jdGlvbiAoc3RyLCBzdWJzdGl0dXRpb24pIHtcbiAgICBpZiAodHlwZW9mIHN1YnN0aXR1dGlvbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgdmFyIGdyb3VwcyA9IF9ncm91cHMuZ2V0KHRoaXMpO1xuXG4gICAgICByZXR1cm4gX3N1cGVyW1N5bWJvbC5yZXBsYWNlXS5jYWxsKHRoaXMsIHN0ciwgc3Vic3RpdHV0aW9uLnJlcGxhY2UoL1xcJDwoW14+XSspPi9nLCBmdW5jdGlvbiAoXywgbmFtZSkge1xuICAgICAgICByZXR1cm4gXCIkXCIgKyBncm91cHNbbmFtZV07XG4gICAgICB9KSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc3Vic3RpdHV0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBfc3VwZXJbU3ltYm9sLnJlcGxhY2VdLmNhbGwodGhpcywgc3RyLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuXG4gICAgICAgIGlmICh0eXBlb2YgYXJnc1thcmdzLmxlbmd0aCAtIDFdICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJncyk7XG4gICAgICAgICAgYXJncy5wdXNoKGJ1aWxkR3JvdXBzKGFyZ3MsIF90aGlzKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3Vic3RpdHV0aW9uLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBfc3VwZXJbU3ltYm9sLnJlcGxhY2VdLmNhbGwodGhpcywgc3RyLCBzdWJzdGl0dXRpb24pO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBidWlsZEdyb3VwcyhyZXN1bHQsIHJlKSB7XG4gICAgdmFyIGcgPSBfZ3JvdXBzLmdldChyZSk7XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZykucmVkdWNlKGZ1bmN0aW9uIChncm91cHMsIG5hbWUpIHtcbiAgICAgIGdyb3Vwc1tuYW1lXSA9IHJlc3VsdFtnW25hbWVdXTtcbiAgICAgIHJldHVybiBncm91cHM7XG4gICAgfSwgT2JqZWN0LmNyZWF0ZShudWxsKSk7XG4gIH1cblxuICByZXR1cm4gX3dyYXBSZWdFeHAuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxuLyoqXG4gKiBTdGF0aWMgdXRpbGl0eSBmdW5jdGlvbnMgdXNlZCB0aHJvdWdob3V0IHRoZSBsaWJyYXJ5LlxuICovXG5cbnZhciBVdGlscyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFV0aWxzKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBVdGlscyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVXRpbHMsIG51bGwsIFt7XG4gICAga2V5OiBcInZlcnNpb25cIixcbiAgICB2YWx1ZTpcbiAgICAvKipcbiAgICAgKiBHZXRzIE1pZGlXcml0ZXJKUyB2ZXJzaW9uIG51bWJlci5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgZnVuY3Rpb24gdmVyc2lvbigpIHtcbiAgICAgIHJldHVybiBDb25zdGFudHMuVkVSU0lPTjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVydCBhIHN0cmluZyB0byBhbiBhcnJheSBvZiBieXRlc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdcbiAgICAgKiBAcmV0dXJuIHthcnJheX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInN0cmluZ1RvQnl0ZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RyaW5nVG9CeXRlcyhzdHJpbmcpIHtcbiAgICAgIHJldHVybiBzdHJpbmcuc3BsaXQoJycpLm1hcChmdW5jdGlvbiAoX2NoYXIpIHtcbiAgICAgICAgcmV0dXJuIF9jaGFyLmNoYXJDb2RlQXQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgYXJndW1lbnQgaXMgYSB2YWxpZCBudW1iZXIuXG4gICAgICogQHBhcmFtIHsqfSBuIC0gVmFsdWUgdG8gY2hlY2tcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaXNOdW1lcmljXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzTnVtZXJpYyhuKSB7XG4gICAgICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQobikpICYmIGlzRmluaXRlKG4pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjb3JyZWN0IE1JREkgbnVtYmVyIGZvciB0aGUgc3BlY2lmaWVkIHBpdGNoLlxuICAgICAqIFVzZXMgVG9uYWwgTWlkaSAtIGh0dHBzOi8vZ2l0aHViLmNvbS9kYW5pZ2IvdG9uYWwvdHJlZS9tYXN0ZXIvcGFja2FnZXMvbWlkaVxuICAgICAqIEBwYXJhbSB7KHN0cmluZ3xudW1iZXIpfSBwaXRjaCAtICdDIzQnIG9yIG1pZGkgbm90ZSBjb2RlXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0UGl0Y2hcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UGl0Y2gocGl0Y2gpIHtcbiAgICAgIHJldHVybiB0b25hbE1pZGkudG9NaWRpKHBpdGNoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVHJhbnNsYXRlcyBudW1iZXIgb2YgdGlja3MgdG8gTUlESSB0aW1lc3RhbXAgZm9ybWF0LCByZXR1cm5pbmcgYW4gYXJyYXkgb2ZcbiAgICAgKiBoZXggc3RyaW5ncyB3aXRoIHRoZSB0aW1lIHZhbHVlcy4gTWlkaSBoYXMgYSB2ZXJ5IHBhcnRpY3VsYXIgdGltZSB0byBleHByZXNzIHRpbWUsXG4gICAgICogdGFrZSBhIGdvb2QgbG9vayBhdCB0aGUgc3BlYyBiZWZvcmUgZXZlciB0b3VjaGluZyB0aGlzIGZ1bmN0aW9uLlxuICAgICAqIFRoYW5rcyB0byBodHRwczovL2dpdGh1Yi5jb20vc2VyZ2kvanNtaWRpXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGlja3MgLSBOdW1iZXIgb2YgdGlja3MgdG8gYmUgdHJhbnNsYXRlZFxuICAgICAqIEByZXR1cm4ge2FycmF5fSAtIEJ5dGVzIHRoYXQgZm9ybSB0aGUgTUlESSB0aW1lIHZhbHVlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJudW1iZXJUb1ZhcmlhYmxlTGVuZ3RoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG51bWJlclRvVmFyaWFibGVMZW5ndGgodGlja3MpIHtcbiAgICAgIHRpY2tzID0gTWF0aC5yb3VuZCh0aWNrcyk7XG4gICAgICB2YXIgYnVmZmVyID0gdGlja3MgJiAweDdGO1xuXG4gICAgICB3aGlsZSAodGlja3MgPSB0aWNrcyA+PiA3KSB7XG4gICAgICAgIGJ1ZmZlciA8PD0gODtcbiAgICAgICAgYnVmZmVyIHw9IHRpY2tzICYgMHg3RiB8IDB4ODA7XG4gICAgICB9XG5cbiAgICAgIHZhciBiTGlzdCA9IFtdO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBiTGlzdC5wdXNoKGJ1ZmZlciAmIDB4ZmYpO1xuICAgICAgICBpZiAoYnVmZmVyICYgMHg4MCkgYnVmZmVyID4+PSA4O2Vsc2Uge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBiTGlzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ291bnRzIG51bWJlciBvZiBieXRlcyBpbiBzdHJpbmdcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc1xuICAgICAqIEByZXR1cm4ge2FycmF5fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3RyaW5nQnl0ZUNvdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0cmluZ0J5dGVDb3VudChzKSB7XG4gICAgICByZXR1cm4gZW5jb2RlVVJJKHMpLnNwbGl0KC8lLi58Li8pLmxlbmd0aCAtIDE7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBhbiBpbnQgZnJvbSBhbiBhcnJheSBvZiBieXRlcy5cbiAgICAgKiBAcGFyYW0ge2FycmF5fSBieXRlc1xuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm51bWJlckZyb21CeXRlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBudW1iZXJGcm9tQnl0ZXMoYnl0ZXMpIHtcbiAgICAgIHZhciBoZXggPSAnJztcbiAgICAgIHZhciBzdHJpbmdSZXN1bHQ7XG4gICAgICBieXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChfYnl0ZSkge1xuICAgICAgICBzdHJpbmdSZXN1bHQgPSBfYnl0ZS50b1N0cmluZygxNik7IC8vIGVuc3VyZSBzdHJpbmcgaXMgMiBjaGFyc1xuXG4gICAgICAgIGlmIChzdHJpbmdSZXN1bHQubGVuZ3RoID09IDEpIHN0cmluZ1Jlc3VsdCA9IFwiMFwiICsgc3RyaW5nUmVzdWx0O1xuICAgICAgICBoZXggKz0gc3RyaW5nUmVzdWx0O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcGFyc2VJbnQoaGV4LCAxNik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRha2VzIGEgbnVtYmVyIGFuZCBzcGxpdHMgaXQgdXAgaW50byBhbiBhcnJheSBvZiBieXRlcy4gIENhbiBiZSBwYWRkZWQgYnkgcGFzc2luZyBhIG51bWJlciB0byBieXRlc05lZWRlZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYnl0ZXNOZWVkZWRcbiAgICAgKiBAcmV0dXJuIHthcnJheX0gLSBBcnJheSBvZiBieXRlc1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibnVtYmVyVG9CeXRlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBudW1iZXJUb0J5dGVzKG51bWJlciwgYnl0ZXNOZWVkZWQpIHtcbiAgICAgIGJ5dGVzTmVlZGVkID0gYnl0ZXNOZWVkZWQgfHwgMTtcbiAgICAgIHZhciBoZXhTdHJpbmcgPSBudW1iZXIudG9TdHJpbmcoMTYpO1xuXG4gICAgICBpZiAoaGV4U3RyaW5nLmxlbmd0aCAmIDEpIHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIGhleCBzdHJpbmcgaXMgZXZlbiBudW1iZXIgb2YgY2hhcnNcbiAgICAgICAgaGV4U3RyaW5nID0gJzAnICsgaGV4U3RyaW5nO1xuICAgICAgfSAvLyBTcGxpdCBoZXggc3RyaW5nIGludG8gYW4gYXJyYXkgb2YgdHdvIGNoYXIgZWxlbWVudHNcblxuXG4gICAgICB2YXIgaGV4QXJyYXkgPSBoZXhTdHJpbmcubWF0Y2goLy57Mn0vZyk7IC8vIE5vdyBwYXJzZSB0aGVtIG91dCBhcyBpbnRlZ2Vyc1xuXG4gICAgICBoZXhBcnJheSA9IGhleEFycmF5Lm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoaXRlbSwgMTYpO1xuICAgICAgfSk7IC8vIFByZXBlbmQgZW1wdHkgYnl0ZXMgaWYgd2UgZG9uJ3QgaGF2ZSBlbm91Z2hcblxuICAgICAgaWYgKGhleEFycmF5Lmxlbmd0aCA8IGJ5dGVzTmVlZGVkKSB7XG4gICAgICAgIHdoaWxlIChieXRlc05lZWRlZCAtIGhleEFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBoZXhBcnJheS51bnNoaWZ0KDApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoZXhBcnJheTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgdmFsdWUgdG8gYXJyYXkgaWYgbmVlZGVkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgICAqIEByZXR1cm4ge2FycmF5fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidG9BcnJheVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b0FycmF5KHZhbHVlKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICAgIHJldHVybiBbdmFsdWVdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyB2ZWxvY2l0eSB0byB2YWx1ZSAwLTEyN1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2ZWxvY2l0eSAtIFZlbG9jaXR5IHZhbHVlIDEtMTAwXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY29udmVydFZlbG9jaXR5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbnZlcnRWZWxvY2l0eSh2ZWxvY2l0eSkge1xuICAgICAgLy8gTWF4IHBhc3NlZCB2YWx1ZSBsaW1pdGVkIHRvIDEwMFxuICAgICAgdmVsb2NpdHkgPSB2ZWxvY2l0eSA+IDEwMCA/IDEwMCA6IHZlbG9jaXR5O1xuICAgICAgcmV0dXJuIE1hdGgucm91bmQodmVsb2NpdHkgLyAxMDAgKiAxMjcpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSB0b3RhbCBudW1iZXIgb2YgdGlja3Mgb2YgYSBzcGVjaWZpZWQgZHVyYXRpb24uXG4gICAgICogTm90ZTogdHlwZT09J25vdGUnIGRlZmF1bHRzIHRvIHF1YXJ0ZXIgbm90ZSwgdHlwZT09PSdyZXN0JyBkZWZhdWx0cyB0byAwXG4gICAgICogQHBhcmFtIHsoc3RyaW5nfGFycmF5KX0gZHVyYXRpb25cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRUaWNrRHVyYXRpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VGlja0R1cmF0aW9uKGR1cmF0aW9uKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShkdXJhdGlvbikpIHtcbiAgICAgICAgLy8gUmVjdXJzaXZlbHkgZXhlY3V0ZSB0aGlzIG1ldGhvZCBmb3IgZWFjaCBpdGVtIGluIHRoZSBhcnJheSBhbmQgcmV0dXJuIHRoZSBzdW0gb2YgdGljayBkdXJhdGlvbnMuXG4gICAgICAgIHJldHVybiBkdXJhdGlvbi5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIFV0aWxzLmdldFRpY2tEdXJhdGlvbih2YWx1ZSk7XG4gICAgICAgIH0pLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgIHJldHVybiBhICsgYjtcbiAgICAgICAgfSwgMCk7XG4gICAgICB9XG5cbiAgICAgIGR1cmF0aW9uID0gZHVyYXRpb24udG9TdHJpbmcoKTtcblxuICAgICAgaWYgKGR1cmF0aW9uLnRvTG93ZXJDYXNlKCkuY2hhckF0KDApID09PSAndCcpIHtcbiAgICAgICAgLy8gSWYgZHVyYXRpb24gc3RhcnRzIHdpdGggJ3QnIHRoZW4gdGhlIG51bWJlciB0aGF0IGZvbGxvd3MgaXMgYW4gZXhwbGljaXQgdGljayBjb3VudFxuICAgICAgICByZXR1cm4gcGFyc2VJbnQoZHVyYXRpb24uc3Vic3RyaW5nKDEpKTtcbiAgICAgIH0gLy8gTmVlZCB0byBhcHBseSBkdXJhdGlvbiBoZXJlLiAgUXVhcnRlciBub3RlID09IENvbnN0YW50cy5IRUFERVJfQ0hVTktfRElWSVNJT05cblxuXG4gICAgICB2YXIgcXVhcnRlclRpY2tzID0gVXRpbHMubnVtYmVyRnJvbUJ5dGVzKENvbnN0YW50cy5IRUFERVJfQ0hVTktfRElWSVNJT04pO1xuICAgICAgdmFyIHRpY2tEdXJhdGlvbiA9IHF1YXJ0ZXJUaWNrcyAqIFV0aWxzLmdldER1cmF0aW9uTXVsdGlwbGllcihkdXJhdGlvbik7XG4gICAgICByZXR1cm4gVXRpbHMuZ2V0Um91bmRlZElmQ2xvc2UodGlja0R1cmF0aW9uKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRHVlIHRvIHJvdW5kaW5nIGVycm9ycyBpbiBKYXZhU2NyaXB0IGVuZ2luZXMsXG4gICAgICogaXQncyBzYWZlIHRvIHJvdW5kIHdoZW4gd2UncmUgdmVyeSBjbG9zZSB0byB0aGUgYWN0dWFsIHRpY2sgbnVtYmVyXG4gICAgICpcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpY2tcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRSb3VuZGVkSWZDbG9zZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSb3VuZGVkSWZDbG9zZSh0aWNrKSB7XG4gICAgICB2YXIgcm91bmRlZFRpY2sgPSBNYXRoLnJvdW5kKHRpY2spO1xuICAgICAgcmV0dXJuIE1hdGguYWJzKHJvdW5kZWRUaWNrIC0gdGljaykgPCAwLjAwMDAwMSA/IHJvdW5kZWRUaWNrIDogdGljaztcbiAgICB9XG4gICAgLyoqXG4gICAgICogRHVlIHRvIGxvdyBwcmVjaXNpb24gb2YgTUlESSxcbiAgICAgKiB3ZSBuZWVkIHRvIGtlZXAgdHJhY2sgb2Ygcm91bmRpbmcgZXJyb3JzIGluIGRlbHRhcy5cbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHdpbGwgY2FsY3VsYXRlIHRoZSByb3VuZGluZyBlcnJvciBmb3IgYSBnaXZlbiBkdXJhdGlvbi5cbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGlja1xuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFByZWNpc2lvbkxvc3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UHJlY2lzaW9uTG9zcyh0aWNrKSB7XG4gICAgICB2YXIgcm91bmRlZFRpY2sgPSBNYXRoLnJvdW5kKHRpY2spO1xuICAgICAgcmV0dXJuIHJvdW5kZWRUaWNrIC0gdGljaztcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB3aGF0IHRvIG11bHRpcGxlIHRpY2tzL3F1YXJ0ZXIgbm90ZSBieSB0byBnZXQgdGhlIHNwZWNpZmllZCBkdXJhdGlvbi5cbiAgICAgKiBOb3RlOiB0eXBlPT0nbm90ZScgZGVmYXVsdHMgdG8gcXVhcnRlciBub3RlLCB0eXBlPT09J3Jlc3QnIGRlZmF1bHRzIHRvIDBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZHVyYXRpb25cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXREdXJhdGlvbk11bHRpcGxpZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RHVyYXRpb25NdWx0aXBsaWVyKGR1cmF0aW9uKSB7XG4gICAgICAvLyBOZWVkIHRvIGFwcGx5IGR1cmF0aW9uIGhlcmUuXG4gICAgICAvLyBRdWFydGVyIG5vdGUgPT0gQ29uc3RhbnRzLkhFQURFUl9DSFVOS19ESVZJU0lPTiB0aWNrcy5cbiAgICAgIGlmIChkdXJhdGlvbiA9PT0gJzAnKSByZXR1cm4gMDtcbiAgICAgIHZhciBtYXRjaCA9IGR1cmF0aW9uLm1hdGNoKCAvKiNfX1BVUkVfXyovX3dyYXBSZWdFeHAoL14oZCspPyhbMC05XSspKD86dChbMC05XSopKT8vLCB7XG4gICAgICAgIGRvdHRlZDogMSxcbiAgICAgICAgYmFzZTogMixcbiAgICAgICAgdHVwbGV0OiAzXG4gICAgICB9KSk7XG5cbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICB2YXIgYmFzZSA9IE51bWJlcihtYXRjaC5ncm91cHMuYmFzZSk7IC8vIDEgb3IgYW55IHBvd2VyIG9mIHR3bzpcblxuICAgICAgICB2YXIgaXNWYWxpZEJhc2UgPSBiYXNlID09PSAxIHx8IChiYXNlICYgYmFzZSAtIDEpID09PSAwO1xuXG4gICAgICAgIGlmIChpc1ZhbGlkQmFzZSkge1xuICAgICAgICAgIC8vIGhvdyBtdWNoIGZhc3RlciBvciBzbG93ZXIgaXMgdGhpcyBub3RlIGNvbXBhcmVkIHRvIGEgcXVhcnRlcj9cbiAgICAgICAgICB2YXIgcmF0aW8gPSBiYXNlIC8gNDtcbiAgICAgICAgICB2YXIgZHVyYXRpb25JblF1YXJ0ZXJzID0gMSAvIHJhdGlvO1xuICAgICAgICAgIHZhciBfbWF0Y2gkZ3JvdXBzID0gbWF0Y2guZ3JvdXBzLFxuICAgICAgICAgICAgICBkb3R0ZWQgPSBfbWF0Y2gkZ3JvdXBzLmRvdHRlZCxcbiAgICAgICAgICAgICAgdHVwbGV0ID0gX21hdGNoJGdyb3Vwcy50dXBsZXQ7XG5cbiAgICAgICAgICBpZiAoZG90dGVkKSB7XG4gICAgICAgICAgICB2YXIgdGhpc01hbnlEb3RzID0gZG90dGVkLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciBkaXZpc29yID0gTWF0aC5wb3coMiwgdGhpc01hbnlEb3RzKTtcbiAgICAgICAgICAgIGR1cmF0aW9uSW5RdWFydGVycyA9IGR1cmF0aW9uSW5RdWFydGVycyArIGR1cmF0aW9uSW5RdWFydGVycyAqICgoZGl2aXNvciAtIDEpIC8gZGl2aXNvcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0dXBsZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB2YXIgZml0SW50byA9IGR1cmF0aW9uSW5RdWFydGVycyAqIDI7IC8vIGRlZmF1bHQgdG8gdHJpcGxldDpcblxuICAgICAgICAgICAgdmFyIHRoaXNNYW55Tm90ZXMgPSBOdW1iZXIodHVwbGV0IHx8ICczJyk7XG4gICAgICAgICAgICBkdXJhdGlvbkluUXVhcnRlcnMgPSBmaXRJbnRvIC8gdGhpc01hbnlOb3RlcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZHVyYXRpb25JblF1YXJ0ZXJzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihkdXJhdGlvbiArICcgaXMgbm90IGEgdmFsaWQgZHVyYXRpb24uJyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFV0aWxzO1xufSgpO1xuXG4vKipcbiAqIEhvbGRzIGFsbCBkYXRhIGZvciBhIFwibm90ZSBvblwiIE1JREkgZXZlbnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZHMge2RhdGE6IFtdfVxuICogQHJldHVybiB7Tm90ZU9uRXZlbnR9XG4gKi9cblxudmFyIE5vdGVPbkV2ZW50ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTm90ZU9uRXZlbnQoZmllbGRzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5vdGVPbkV2ZW50KTtcblxuICAgIC8vIFNldCBkZWZhdWx0IGZpZWxkc1xuICAgIGZpZWxkcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2hhbm5lbDogMSxcbiAgICAgIHN0YXJ0VGljazogbnVsbCxcbiAgICAgIHZlbG9jaXR5OiA1MCxcbiAgICAgIHdhaXQ6IDBcbiAgICB9LCBmaWVsZHMpO1xuICAgIHRoaXMudHlwZSA9ICdub3RlLW9uJztcbiAgICB0aGlzLmNoYW5uZWwgPSBmaWVsZHMuY2hhbm5lbDtcbiAgICB0aGlzLnBpdGNoID0gZmllbGRzLnBpdGNoO1xuICAgIHRoaXMud2FpdCA9IGZpZWxkcy53YWl0O1xuICAgIHRoaXMudmVsb2NpdHkgPSBmaWVsZHMudmVsb2NpdHk7XG4gICAgdGhpcy5zdGFydFRpY2sgPSBmaWVsZHMuc3RhcnRUaWNrO1xuICAgIHRoaXMubWlkaU51bWJlciA9IFV0aWxzLmdldFBpdGNoKHRoaXMucGl0Y2gpO1xuICAgIHRoaXMudGljayA9IG51bGw7XG4gICAgdGhpcy5kZWx0YSA9IG51bGw7XG4gICAgdGhpcy5kYXRhID0gZmllbGRzLmRhdGE7XG4gIH1cbiAgLyoqXG4gICAqIEJ1aWxkcyBpbnQgYXJyYXkgZm9yIHRoaXMgZXZlbnQuXG4gICAqIEBwYXJhbSB7VHJhY2t9IHRyYWNrIC0gcGFyZW50IHRyYWNrXG4gICAqIEByZXR1cm4ge05vdGVPbkV2ZW50fVxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhOb3RlT25FdmVudCwgW3tcbiAgICBrZXk6IFwiYnVpbGREYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJ1aWxkRGF0YSh0cmFjaywgcHJlY2lzaW9uRGVsdGEpIHtcbiAgICAgIHRoaXMuZGF0YSA9IFtdOyAvLyBFeHBsaWNpdGx5IGRlZmluZWQgc3RhcnRUaWNrIGV2ZW50XG5cbiAgICAgIGlmICh0aGlzLnN0YXJ0VGljaykge1xuICAgICAgICB0aGlzLnRpY2sgPSBVdGlscy5nZXRSb3VuZGVkSWZDbG9zZSh0aGlzLnN0YXJ0VGljayk7IC8vIElmIHRoaXMgaXMgdGhlIGZpcnN0IGV2ZW50IGluIHRoZSB0cmFjayB0aGVuIHVzZSBldmVudCdzIHN0YXJ0aW5nIHRpY2sgYXMgZGVsdGEuXG5cbiAgICAgICAgaWYgKHRyYWNrLnRpY2tQb2ludGVyID09IDApIHtcbiAgICAgICAgICB0aGlzLmRlbHRhID0gdGhpcy50aWNrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRlbHRhID0gVXRpbHMuZ2V0VGlja0R1cmF0aW9uKHRoaXMud2FpdCk7XG4gICAgICAgIHRoaXMudGljayA9IFV0aWxzLmdldFJvdW5kZWRJZkNsb3NlKHRyYWNrLnRpY2tQb2ludGVyICsgdGhpcy5kZWx0YSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGVsdGFXaXRoUHJlY2lzaW9uQ29ycmVjdGlvbiA9IFV0aWxzLmdldFJvdW5kZWRJZkNsb3NlKHRoaXMuZGVsdGEgLSBwcmVjaXNpb25EZWx0YSk7XG4gICAgICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRoaXMuZGVsdGFXaXRoUHJlY2lzaW9uQ29ycmVjdGlvbikuY29uY2F0KHRoaXMuZ2V0U3RhdHVzQnl0ZSgpLCB0aGlzLm1pZGlOdW1iZXIsIFV0aWxzLmNvbnZlcnRWZWxvY2l0eSh0aGlzLnZlbG9jaXR5KSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgbm90ZSBvbiBzdGF0dXMgY29kZSBiYXNlZCBvbiB0aGUgc2VsZWN0ZWQgY2hhbm5lbC4gMHg5ezAtRn1cbiAgICAgKiBOb3RlIG9uIGF0IGNoYW5uZWwgMCBpcyAweDkwICgxNDQpXG4gICAgICogMCA9IENoIDFcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRTdGF0dXNCeXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFN0YXR1c0J5dGUoKSB7XG4gICAgICByZXR1cm4gMTQ0ICsgdGhpcy5jaGFubmVsIC0gMTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTm90ZU9uRXZlbnQ7XG59KCk7XG5cbi8qKlxuICogSG9sZHMgYWxsIGRhdGEgZm9yIGEgXCJub3RlIG9mZlwiIE1JREkgZXZlbnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZHMge2RhdGE6IFtdfVxuICogQHJldHVybiB7Tm90ZU9mZkV2ZW50fVxuICovXG5cbnZhciBOb3RlT2ZmRXZlbnQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBOb3RlT2ZmRXZlbnQoZmllbGRzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5vdGVPZmZFdmVudCk7XG5cbiAgICAvLyBTZXQgZGVmYXVsdCBmaWVsZHNcbiAgICBmaWVsZHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNoYW5uZWw6IDEsXG4gICAgICB2ZWxvY2l0eTogNTAsXG4gICAgICB0aWNrOiBudWxsXG4gICAgfSwgZmllbGRzKTtcbiAgICB0aGlzLnR5cGUgPSAnbm90ZS1vZmYnO1xuICAgIHRoaXMuY2hhbm5lbCA9IGZpZWxkcy5jaGFubmVsO1xuICAgIHRoaXMucGl0Y2ggPSBmaWVsZHMucGl0Y2g7XG4gICAgdGhpcy5kdXJhdGlvbiA9IGZpZWxkcy5kdXJhdGlvbjtcbiAgICB0aGlzLnZlbG9jaXR5ID0gZmllbGRzLnZlbG9jaXR5O1xuICAgIHRoaXMubWlkaU51bWJlciA9IFV0aWxzLmdldFBpdGNoKHRoaXMucGl0Y2gpO1xuICAgIHRoaXMudGljayA9IGZpZWxkcy50aWNrO1xuICAgIHRoaXMuZGVsdGEgPSBVdGlscy5nZXRUaWNrRHVyYXRpb24odGhpcy5kdXJhdGlvbik7XG4gICAgdGhpcy5kYXRhID0gZmllbGRzLmRhdGE7XG4gIH1cbiAgLyoqXG4gICAqIEJ1aWxkcyBpbnQgYXJyYXkgZm9yIHRoaXMgZXZlbnQuXG4gICAqIEBwYXJhbSB7VHJhY2t9IHRyYWNrIC0gcGFyZW50IHRyYWNrXG4gICAqIEByZXR1cm4ge05vdGVPZmZFdmVudH1cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoTm90ZU9mZkV2ZW50LCBbe1xuICAgIGtleTogXCJidWlsZERhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYnVpbGREYXRhKHRyYWNrLCBwcmVjaXNpb25EZWx0YSkge1xuICAgICAgaWYgKHRoaXMudGljayA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLnRpY2sgPSBVdGlscy5nZXRSb3VuZGVkSWZDbG9zZSh0aGlzLmRlbHRhICsgdHJhY2sudGlja1BvaW50ZXIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRlbHRhV2l0aFByZWNpc2lvbkNvcnJlY3Rpb24gPSBVdGlscy5nZXRSb3VuZGVkSWZDbG9zZSh0aGlzLmRlbHRhIC0gcHJlY2lzaW9uRGVsdGEpO1xuICAgICAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0aGlzLmRlbHRhV2l0aFByZWNpc2lvbkNvcnJlY3Rpb24pLmNvbmNhdCh0aGlzLmdldFN0YXR1c0J5dGUoKSwgdGhpcy5taWRpTnVtYmVyLCBVdGlscy5jb252ZXJ0VmVsb2NpdHkodGhpcy52ZWxvY2l0eSkpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIG5vdGUgb2ZmIHN0YXR1cyBjb2RlIGJhc2VkIG9uIHRoZSBzZWxlY3RlZCBjaGFubmVsLiAweDh7MC1GfVxuICAgICAqIE5vdGUgb2ZmIGF0IGNoYW5uZWwgMCBpcyAweDgwICgxMjgpXG4gICAgICogMCA9IENoIDFcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRTdGF0dXNCeXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFN0YXR1c0J5dGUoKSB7XG4gICAgICByZXR1cm4gMTI4ICsgdGhpcy5jaGFubmVsIC0gMTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTm90ZU9mZkV2ZW50O1xufSgpO1xuXG4vKipcbiAqIFdyYXBwZXIgZm9yIG5vdGVPbkV2ZW50L25vdGVPZmZFdmVudCBvYmplY3RzIHRoYXQgYnVpbGRzIGJvdGggZXZlbnRzLlxuICogQHBhcmFtIHtvYmplY3R9IGZpZWxkcyAtIHtwaXRjaDogJ1tDNF0nLCBkdXJhdGlvbjogJzQnLCB3YWl0OiAnNCcsIHZlbG9jaXR5OiAxLTEwMH1cbiAqIEByZXR1cm4ge05vdGVFdmVudH1cbiAqL1xuXG52YXIgTm90ZUV2ZW50ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTm90ZUV2ZW50KGZpZWxkcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb3RlRXZlbnQpO1xuXG4gICAgLy8gU2V0IGRlZmF1bHQgZmllbGRzXG4gICAgZmllbGRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjaGFubmVsOiAxLFxuICAgICAgcmVwZWF0OiAxLFxuICAgICAgc2VxdWVudGlhbDogZmFsc2UsXG4gICAgICBzdGFydFRpY2s6IG51bGwsXG4gICAgICB2ZWxvY2l0eTogNTAsXG4gICAgICB3YWl0OiAwXG4gICAgfSwgZmllbGRzKTtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICB0aGlzLnR5cGUgPSAnbm90ZSc7XG4gICAgdGhpcy5waXRjaCA9IFV0aWxzLnRvQXJyYXkoZmllbGRzLnBpdGNoKTtcbiAgICB0aGlzLmNoYW5uZWwgPSBmaWVsZHMuY2hhbm5lbDtcbiAgICB0aGlzLmR1cmF0aW9uID0gZmllbGRzLmR1cmF0aW9uO1xuICAgIHRoaXMuZ3JhY2UgPSBmaWVsZHMuZ3JhY2U7XG4gICAgdGhpcy5yZXBlYXQgPSBmaWVsZHMucmVwZWF0O1xuICAgIHRoaXMuc2VxdWVudGlhbCA9IGZpZWxkcy5zZXF1ZW50aWFsO1xuICAgIHRoaXMuc3RhcnRUaWNrID0gZmllbGRzLnN0YXJ0VGljaztcbiAgICB0aGlzLnZlbG9jaXR5ID0gZmllbGRzLnZlbG9jaXR5O1xuICAgIHRoaXMud2FpdCA9IGZpZWxkcy53YWl0O1xuICAgIHRoaXMudGlja0R1cmF0aW9uID0gVXRpbHMuZ2V0VGlja0R1cmF0aW9uKHRoaXMuZHVyYXRpb24pO1xuICAgIHRoaXMucmVzdER1cmF0aW9uID0gVXRpbHMuZ2V0VGlja0R1cmF0aW9uKHRoaXMud2FpdCk7XG4gICAgdGhpcy5ldmVudHMgPSBbXTsgLy8gSG9sZCBhY3R1YWwgTm90ZU9uL05vdGVPZmYgZXZlbnRzXG4gIH1cbiAgLyoqXG4gICAqIEJ1aWxkcyBpbnQgYXJyYXkgZm9yIHRoaXMgZXZlbnQuXG4gICAqIEByZXR1cm4ge05vdGVFdmVudH1cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoTm90ZUV2ZW50LCBbe1xuICAgIGtleTogXCJidWlsZERhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYnVpbGREYXRhKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgLy8gUmVzZXQgZGF0YSBhcnJheVxuICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgICB0aGlzLnRpY2tEdXJhdGlvbjtcbiAgICAgIHRoaXMucmVzdER1cmF0aW9uOyAvLyBBcHBseSBncmFjZSBub3RlKHMpIGFuZCBzdWJ0cmFjdCB0aWNrcyAoY3VycmVudGx5IDEgdGljayBwZXIgZ3JhY2Ugbm90ZSkgZnJvbSB0aWNrRHVyYXRpb24gc28gbmV0IHZhbHVlIGlzIHRoZSBzYW1lXG5cbiAgICAgIGlmICh0aGlzLmdyYWNlKSB7XG4gICAgICAgIHZhciBncmFjZUR1cmF0aW9uID0gMTtcbiAgICAgICAgdGhpcy5ncmFjZSA9IFV0aWxzLnRvQXJyYXkodGhpcy5ncmFjZSk7XG4gICAgICAgIHRoaXMuZ3JhY2UuZm9yRWFjaChmdW5jdGlvbiAocGl0Y2gpIHtcbiAgICAgICAgICB2YXIgbm90ZUV2ZW50ID0gbmV3IE5vdGVFdmVudCh7XG4gICAgICAgICAgICBwaXRjaDogX3RoaXMuZ3JhY2UsXG4gICAgICAgICAgICBkdXJhdGlvbjogJ1QnICsgZ3JhY2VEdXJhdGlvblxuICAgICAgICAgIH0pO1xuICAgICAgICAgIF90aGlzLmRhdGEgPSBfdGhpcy5kYXRhLmNvbmNhdChub3RlRXZlbnQuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfSAvLyBmaWVsZHMucGl0Y2ggY291bGQgYmUgYW4gYXJyYXkgb2YgcGl0Y2hlcy5cbiAgICAgIC8vIElmIHRoaXMuc2VxdWVudGlhbCA9PT0gdHJ1ZSB0aGVuIGl0J3MgYSBzZXF1ZW50aWFsIHN0cmluZyBvZiBub3RlcyB0aGF0IHJlcXVpcmVzIHNlcGFyYXRlIE5vdGVPbkV2ZW50cy5cblxuICAgICAgaWYgKCF0aGlzLnNlcXVlbnRpYWwpIHtcbiAgICAgICAgLy8gSGFuZGxlIHJlcGVhdFxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMucmVwZWF0OyBqKyspIHtcbiAgICAgICAgICAvLyBOb3RlIG9uXG4gICAgICAgICAgdGhpcy5waXRjaC5mb3JFYWNoKGZ1bmN0aW9uIChwLCBpKSB7XG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgIHZhciBub3RlT25OZXcgPSBuZXcgTm90ZU9uRXZlbnQoe1xuICAgICAgICAgICAgICAgIGNoYW5uZWw6IF90aGlzLmNoYW5uZWwsXG4gICAgICAgICAgICAgICAgd2FpdDogX3RoaXMud2FpdCxcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eTogX3RoaXMudmVsb2NpdHksXG4gICAgICAgICAgICAgICAgcGl0Y2g6IHAsXG4gICAgICAgICAgICAgICAgc3RhcnRUaWNrOiBfdGhpcy5zdGFydFRpY2tcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBSdW5uaW5nIHN0YXR1cyAoY2FuIG9tbWl0IHRoZSBub3RlIG9uIHN0YXR1cylcbiAgICAgICAgICAgICAgLy9ub3RlT24gPSBuZXcgTm90ZU9uRXZlbnQoe2RhdGE6IFswLCBVdGlscy5nZXRQaXRjaChwKSwgVXRpbHMuY29udmVydFZlbG9jaXR5KHRoaXMudmVsb2NpdHkpXX0pO1xuICAgICAgICAgICAgICB2YXIgbm90ZU9uTmV3ID0gbmV3IE5vdGVPbkV2ZW50KHtcbiAgICAgICAgICAgICAgICBjaGFubmVsOiBfdGhpcy5jaGFubmVsLFxuICAgICAgICAgICAgICAgIHdhaXQ6IDAsXG4gICAgICAgICAgICAgICAgdmVsb2NpdHk6IF90aGlzLnZlbG9jaXR5LFxuICAgICAgICAgICAgICAgIHBpdGNoOiBwLFxuICAgICAgICAgICAgICAgIHN0YXJ0VGljazogX3RoaXMuc3RhcnRUaWNrXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfdGhpcy5ldmVudHMucHVzaChub3RlT25OZXcpO1xuICAgICAgICAgIH0pOyAvLyBOb3RlIG9mZlxuXG4gICAgICAgICAgdGhpcy5waXRjaC5mb3JFYWNoKGZ1bmN0aW9uIChwLCBpKSB7XG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgIC8vbm90ZU9mZiA9IG5ldyBOb3RlT2ZmRXZlbnQoe2RhdGE6IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgodGlja0R1cmF0aW9uKS5jb25jYXQodGhpcy5nZXROb3RlT2ZmU3RhdHVzKCksIFV0aWxzLmdldFBpdGNoKHApLCBVdGlscy5jb252ZXJ0VmVsb2NpdHkodGhpcy52ZWxvY2l0eSkpfSk7XG4gICAgICAgICAgICAgIHZhciBub3RlT2ZmTmV3ID0gbmV3IE5vdGVPZmZFdmVudCh7XG4gICAgICAgICAgICAgICAgY2hhbm5lbDogX3RoaXMuY2hhbm5lbCxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogX3RoaXMuZHVyYXRpb24sXG4gICAgICAgICAgICAgICAgdmVsb2NpdHk6IF90aGlzLnZlbG9jaXR5LFxuICAgICAgICAgICAgICAgIHBpdGNoOiBwLFxuICAgICAgICAgICAgICAgIHRpY2s6IF90aGlzLnN0YXJ0VGljayAhPT0gbnVsbCA/IFV0aWxzLmdldFRpY2tEdXJhdGlvbihfdGhpcy5kdXJhdGlvbikgKyBfdGhpcy5zdGFydFRpY2sgOiBudWxsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gUnVubmluZyBzdGF0dXMgKGNhbiBvbW1pdCB0aGUgbm90ZSBvZmYgc3RhdHVzKVxuICAgICAgICAgICAgICAvL25vdGVPZmYgPSBuZXcgTm90ZU9mZkV2ZW50KHtkYXRhOiBbMCwgVXRpbHMuZ2V0UGl0Y2gocCksIFV0aWxzLmNvbnZlcnRWZWxvY2l0eSh0aGlzLnZlbG9jaXR5KV19KTtcbiAgICAgICAgICAgICAgdmFyIG5vdGVPZmZOZXcgPSBuZXcgTm90ZU9mZkV2ZW50KHtcbiAgICAgICAgICAgICAgICBjaGFubmVsOiBfdGhpcy5jaGFubmVsLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5OiBfdGhpcy52ZWxvY2l0eSxcbiAgICAgICAgICAgICAgICBwaXRjaDogcCxcbiAgICAgICAgICAgICAgICB0aWNrOiBfdGhpcy5zdGFydFRpY2sgIT09IG51bGwgPyBVdGlscy5nZXRUaWNrRHVyYXRpb24oX3RoaXMuZHVyYXRpb24pICsgX3RoaXMuc3RhcnRUaWNrIDogbnVsbFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX3RoaXMuZXZlbnRzLnB1c2gobm90ZU9mZk5ldyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEhhbmRsZSByZXBlYXRcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLnJlcGVhdDsgaisrKSB7XG4gICAgICAgICAgdGhpcy5waXRjaC5mb3JFYWNoKGZ1bmN0aW9uIChwLCBpKSB7XG5cbiAgICAgICAgICAgIHZhciBub3RlT25OZXcgPSBuZXcgTm90ZU9uRXZlbnQoe1xuICAgICAgICAgICAgICBjaGFubmVsOiBfdGhpcy5jaGFubmVsLFxuICAgICAgICAgICAgICB3YWl0OiBpID4gMCA/IDAgOiBfdGhpcy53YWl0LFxuICAgICAgICAgICAgICAvLyB3YWl0IG9ubHkgYXBwbGllcyB0byBmaXJzdCBub3RlIGluIHJlcGV0aXRpb25cbiAgICAgICAgICAgICAgdmVsb2NpdHk6IF90aGlzLnZlbG9jaXR5LFxuICAgICAgICAgICAgICBwaXRjaDogcCxcbiAgICAgICAgICAgICAgc3RhcnRUaWNrOiBfdGhpcy5zdGFydFRpY2tcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIG5vdGVPZmZOZXcgPSBuZXcgTm90ZU9mZkV2ZW50KHtcbiAgICAgICAgICAgICAgY2hhbm5lbDogX3RoaXMuY2hhbm5lbCxcbiAgICAgICAgICAgICAgZHVyYXRpb246IF90aGlzLmR1cmF0aW9uLFxuICAgICAgICAgICAgICB2ZWxvY2l0eTogX3RoaXMudmVsb2NpdHksXG4gICAgICAgICAgICAgIHBpdGNoOiBwXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgX3RoaXMuZXZlbnRzLnB1c2gobm90ZU9uTmV3LCBub3RlT2ZmTmV3KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTm90ZUV2ZW50O1xufSgpO1xuXG4vKipcbiAqIEhvbGRzIGFsbCBkYXRhIGZvciBhIFwiUGl0Y2ggQmVuZFwiIE1JREkgZXZlbnRcbiAqIFsgLTEuMCwgMCwgMS4wIF0gLT4gIFsgMCwgODE5MiwgMTYzODNdXG4gKiBAcGFyYW0ge29iamVjdH0gZmllbGRzIHsgYmVuZCA6IGZsb2F0LCBjaGFubmVsIDogaW50IH1cbiAqIEByZXR1cm4ge1BpdGNoQmVuZEV2ZW50fVxuICovXG5cbnZhciBzY2FsZTE0Yml0cyA9IGZ1bmN0aW9uIHNjYWxlMTRiaXRzKHplcm9PbmUpIHtcbiAgaWYgKHplcm9PbmUgPD0gMCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKDE2Mzg0ICogKHplcm9PbmUgKyAxKSAvIDIpO1xuICB9XG5cbiAgcmV0dXJuIE1hdGguZmxvb3IoMTYzODMgKiAoemVyb09uZSArIDEpIC8gMik7XG59O1xuXG52YXIgUGl0Y2hCZW5kRXZlbnQgPSBmdW5jdGlvbiBQaXRjaEJlbmRFdmVudChmaWVsZHMpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBpdGNoQmVuZEV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAncGl0Y2gtYmVuZCc7XG4gIHZhciBiZW5kMTQgPSBzY2FsZTE0Yml0cyhmaWVsZHMuYmVuZCk7XG4gIHZhciBjaGFubmVsID0gZmllbGRzLmNoYW5uZWwgfHwgMDtcbiAgdmFyIGxzYlZhbHVlID0gYmVuZDE0ICYgMHg3ZjtcbiAgdmFyIG1zYlZhbHVlID0gYmVuZDE0ID4+IDcgJiAweDdmO1xuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuUElUQ0hfQkVORF9TVEFUVVMgfCBjaGFubmVsLCBsc2JWYWx1ZSwgbXNiVmFsdWUpO1xufTtcblxuLyoqXG4gKiBIb2xkcyBhbGwgZGF0YSBmb3IgYSBcInByb2dyYW0gY2hhbmdlXCIgTUlESSBldmVudFxuICogQHBhcmFtIHtvYmplY3R9IGZpZWxkcyB7aW5zdHJ1bWVudDogaW50ZWdlcn1cbiAqIEByZXR1cm4ge1Byb2dyYW1DaGFuZ2VFdmVudH1cbiAqL1xuXG52YXIgUHJvZ3JhbUNoYW5nZUV2ZW50ID0gZnVuY3Rpb24gUHJvZ3JhbUNoYW5nZUV2ZW50KGZpZWxkcykge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHJvZ3JhbUNoYW5nZUV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAncHJvZ3JhbSc7IC8vIGRlbHRhIHRpbWUgZGVmYXVsdHMgdG8gMC5cblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuUFJPR1JBTV9DSEFOR0VfU1RBVFVTLCBmaWVsZHMuaW5zdHJ1bWVudCk7XG59O1xuXG4vKipcbiAqIEhvbGRzIGFsbCBkYXRhIGZvciBhIFwiY29udHJvbGxlciBjaGFuZ2VcIiBNSURJIGV2ZW50XG4gKiBAcGFyYW0ge29iamVjdH0gZmllbGRzIHtjb250cm9sbGVyTnVtYmVyOiBpbnRlZ2VyLCBjb250cm9sbGVyVmFsdWU6IGludGVnZXJ9XG4gKiBAcmV0dXJuIHtDb250cm9sbGVyQ2hhbmdlRXZlbnR9XG4gKi9cblxudmFyIENvbnRyb2xsZXJDaGFuZ2VFdmVudCA9IGZ1bmN0aW9uIENvbnRyb2xsZXJDaGFuZ2VFdmVudChmaWVsZHMpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbnRyb2xsZXJDaGFuZ2VFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ2NvbnRyb2xsZXInOyAvLyBkZWx0YSB0aW1lIGRlZmF1bHRzIHRvIDAuXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLkNPTlRST0xMRVJfQ0hBTkdFX1NUQVRVUywgZmllbGRzLmNvbnRyb2xsZXJOdW1iZXIsIGZpZWxkcy5jb250cm9sbGVyVmFsdWUpO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSB0ZW1wbyBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBDb3B5cmlnaHQgdGV4dFxuICogQHJldHVybiB7Q29weXJpZ2h0RXZlbnR9XG4gKi9cblxudmFyIENvcHlyaWdodEV2ZW50ID0gZnVuY3Rpb24gQ29weXJpZ2h0RXZlbnQodGV4dCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29weXJpZ2h0RXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdjb3B5cmlnaHQnO1xuICB2YXIgdGV4dEJ5dGVzID0gVXRpbHMuc3RyaW5nVG9CeXRlcyh0ZXh0KTsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfQ09QWVJJR0hUX0lELCBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRleHRCeXRlcy5sZW5ndGgpLCAvLyBTaXplXG4gIHRleHRCeXRlcyAvLyBUZXh0XG4gICk7XG59O1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIGN1ZSBwb2ludCBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBDdWUgcG9pbnQgdGV4dFxuICogQHJldHVybiB7Q3VlUG9pbnRFdmVudH1cbiAqL1xuXG52YXIgQ3VlUG9pbnRFdmVudCA9IGZ1bmN0aW9uIEN1ZVBvaW50RXZlbnQodGV4dCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ3VlUG9pbnRFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ21hcmtlcic7XG4gIHZhciB0ZXh0Qnl0ZXMgPSBVdGlscy5zdHJpbmdUb0J5dGVzKHRleHQpOyAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9DVUVfUE9JTlQsIFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgodGV4dEJ5dGVzLmxlbmd0aCksIC8vIFNpemVcbiAgdGV4dEJ5dGVzIC8vIFRleHRcbiAgKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgZW5kIHRyYWNrIG1ldGEgZXZlbnQuXG4gKiBAcmV0dXJuIHtFbmRUcmFja0V2ZW50fVxuICovXG5cbnZhciBFbmRUcmFja0V2ZW50ID0gZnVuY3Rpb24gRW5kVHJhY2tFdmVudCgpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEVuZFRyYWNrRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdlbmQtdHJhY2snOyAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9FTkRfT0ZfVFJBQ0tfSUQpO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYW4gaW5zdHJ1bWVudCBuYW1lIG1ldGEgZXZlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gYnBtIC0gQmVhdHMgcGVyIG1pbnV0ZVxuICogQHJldHVybiB7SW5zdHJ1bWVudE5hbWVFdmVudH1cbiAqL1xuXG52YXIgSW5zdHJ1bWVudE5hbWVFdmVudCA9IGZ1bmN0aW9uIEluc3RydW1lbnROYW1lRXZlbnQodGV4dCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5zdHJ1bWVudE5hbWVFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ2luc3RydW1lbnQtbmFtZSc7XG4gIHZhciB0ZXh0Qnl0ZXMgPSBVdGlscy5zdHJpbmdUb0J5dGVzKHRleHQpOyAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9JTlNUUlVNRU5UX05BTUVfSUQsIFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgodGV4dEJ5dGVzLmxlbmd0aCksIC8vIFNpemVcbiAgdGV4dEJ5dGVzIC8vIEluc3RydW1lbnQgbmFtZVxuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSBrZXkgc2lnbmF0dXJlIG1ldGEgZXZlbnQuXG4gKiBAcmV0dXJuIHtLZXlTaWduYXR1cmVFdmVudH1cbiAqL1xuXG52YXIgS2V5U2lnbmF0dXJlRXZlbnQgPSBmdW5jdGlvbiBLZXlTaWduYXR1cmVFdmVudChzZiwgbWkpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEtleVNpZ25hdHVyZUV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAna2V5LXNpZ25hdHVyZSc7XG4gIHZhciBtb2RlID0gbWkgfHwgMDtcbiAgc2YgPSBzZiB8fCAwOyAvL1x0RnVuY3Rpb24gY2FsbGVkIHdpdGggc3RyaW5nIG5vdGF0aW9uXG5cbiAgaWYgKHR5cGVvZiBtaSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgZmlmdGhzID0gW1snQ2InLCAnR2InLCAnRGInLCAnQWInLCAnRWInLCAnQmInLCAnRicsICdDJywgJ0cnLCAnRCcsICdBJywgJ0UnLCAnQicsICdGIycsICdDIyddLCBbJ2FiJywgJ2ViJywgJ2JiJywgJ2YnLCAnYycsICdnJywgJ2QnLCAnYScsICdlJywgJ2InLCAnZiMnLCAnYyMnLCAnZyMnLCAnZCMnLCAnYSMnXV07XG4gICAgdmFyIF9zZmxlbiA9IHNmLmxlbmd0aDtcbiAgICB2YXIgbm90ZSA9IHNmIHx8ICdDJztcbiAgICBpZiAoc2ZbMF0gPT09IHNmWzBdLnRvTG93ZXJDYXNlKCkpIG1vZGUgPSAxO1xuXG4gICAgaWYgKF9zZmxlbiA+IDEpIHtcbiAgICAgIHN3aXRjaCAoc2YuY2hhckF0KF9zZmxlbiAtIDEpKSB7XG4gICAgICAgIGNhc2UgJ20nOlxuICAgICAgICAgIG1vZGUgPSAxO1xuICAgICAgICAgIG5vdGUgPSBzZi5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICBub3RlID0gbm90ZS5jb25jYXQoc2Yuc3Vic3RyaW5nKDEsIF9zZmxlbiAtIDEpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICBtb2RlID0gMTtcbiAgICAgICAgICBub3RlID0gc2YuY2hhckF0KDApLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgbm90ZSA9IG5vdGUuY29uY2F0KHNmLnN1YnN0cmluZygxLCBfc2ZsZW4gLSAxKSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnTSc6XG4gICAgICAgICAgbW9kZSA9IDA7XG4gICAgICAgICAgbm90ZSA9IHNmLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgIG5vdGUgPSBub3RlLmNvbmNhdChzZi5zdWJzdHJpbmcoMSwgX3NmbGVuIC0gMSkpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgIG1vZGUgPSAwO1xuICAgICAgICAgIG5vdGUgPSBzZi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICBub3RlID0gbm90ZS5jb25jYXQoc2Yuc3Vic3RyaW5nKDEsIF9zZmxlbiAtIDEpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZmlmdGhpbmRleCA9IGZpZnRoc1ttb2RlXS5pbmRleE9mKG5vdGUpO1xuICAgIHNmID0gZmlmdGhpbmRleCA9PT0gLTEgPyAwIDogZmlmdGhpbmRleCAtIDc7XG4gIH0gLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9LRVlfU0lHTkFUVVJFX0lELCBbMHgwMl0sIC8vIFNpemVcbiAgVXRpbHMubnVtYmVyVG9CeXRlcyhzZiwgMSksIC8vIE51bWJlciBvZiBzaGFycCBvciBmbGF0cyAoIDwgMCBmbGF0OyA+IDAgc2hhcnApXG4gIFV0aWxzLm51bWJlclRvQnl0ZXMobW9kZSwgMSkgLy8gTW9kZTogMCBtYWpvciwgMSBtaW5vclxuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSBseXJpYyBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBMeXJpYyB0ZXh0XG4gKiBAcmV0dXJuIHtMeXJpY0V2ZW50fVxuICovXG5cbnZhciBMeXJpY0V2ZW50ID0gZnVuY3Rpb24gTHlyaWNFdmVudCh0ZXh0KSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMeXJpY0V2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAnbWFya2VyJztcbiAgdmFyIHRleHRCeXRlcyA9IFV0aWxzLnN0cmluZ1RvQnl0ZXModGV4dCk7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX0xZUklDX0lELCBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRleHRCeXRlcy5sZW5ndGgpLCAvLyBTaXplXG4gIHRleHRCeXRlcyAvLyBUZXh0XG4gICk7XG59O1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIG1hcmtlciBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBNYXJrZXIgdGV4dFxuICogQHJldHVybiB7TWFya2VyRXZlbnR9XG4gKi9cblxudmFyIE1hcmtlckV2ZW50ID0gZnVuY3Rpb24gTWFya2VyRXZlbnQodGV4dCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFya2VyRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdtYXJrZXInO1xuICB2YXIgdGV4dEJ5dGVzID0gVXRpbHMuc3RyaW5nVG9CeXRlcyh0ZXh0KTsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfTUFSS0VSX0lELCBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRleHRCeXRlcy5sZW5ndGgpLCAvLyBTaXplXG4gIHRleHRCeXRlcyAvLyBUZXh0XG4gICk7XG59O1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIHRlbXBvIG1ldGEgZXZlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gYnBtIC0gQmVhdHMgcGVyIG1pbnV0ZVxuICogQHJldHVybiB7VGVtcG9FdmVudH1cbiAqL1xuXG52YXIgVGVtcG9FdmVudCA9IGZ1bmN0aW9uIFRlbXBvRXZlbnQoYnBtKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUZW1wb0V2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAndGVtcG8nO1xuICB2YXIgdGVtcG8gPSBNYXRoLnJvdW5kKDYwMDAwMDAwIC8gYnBtKTsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfVEVNUE9fSUQsIFsweDAzXSwgLy8gU2l6ZVxuICBVdGlscy5udW1iZXJUb0J5dGVzKHRlbXBvLCAzKSAvLyBUZW1wbywgMyBieXRlc1xuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSB0ZW1wbyBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IGJwbSAtIEJlYXRzIHBlciBtaW51dGVcbiAqIEByZXR1cm4ge1RleHRFdmVudH1cbiAqL1xuXG52YXIgVGV4dEV2ZW50ID0gZnVuY3Rpb24gVGV4dEV2ZW50KHRleHQpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRleHRFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ3RleHQnO1xuICB2YXIgdGV4dEJ5dGVzID0gVXRpbHMuc3RyaW5nVG9CeXRlcyh0ZXh0KTsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfVEVYVF9JRCwgVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0ZXh0Qnl0ZXMubGVuZ3RoKSwgLy8gU2l6ZVxuICB0ZXh0Qnl0ZXMgLy8gVGV4dFxuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSB0aW1lIHNpZ25hdHVyZSBtZXRhIGV2ZW50LlxuICogQHJldHVybiB7VGltZVNpZ25hdHVyZUV2ZW50fVxuICovXG5cbnZhciBUaW1lU2lnbmF0dXJlRXZlbnQgPSBmdW5jdGlvbiBUaW1lU2lnbmF0dXJlRXZlbnQobnVtZXJhdG9yLCBkZW5vbWluYXRvciwgbWlkaWNsb2Nrc3BlcnRpY2ssIG5vdGVzcGVybWlkaWNsb2NrKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUaW1lU2lnbmF0dXJlRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICd0aW1lLXNpZ25hdHVyZSc7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX1RJTUVfU0lHTkFUVVJFX0lELCBbMHgwNF0sIC8vIFNpemVcbiAgVXRpbHMubnVtYmVyVG9CeXRlcyhudW1lcmF0b3IsIDEpLCAvLyBOdW1lcmF0b3IsIDEgYnl0ZXNcbiAgVXRpbHMubnVtYmVyVG9CeXRlcyhNYXRoLmxvZzIoZGVub21pbmF0b3IpLCAxKSwgLy8gRGVub21pbmF0b3IgaXMgZXhwcmVzc2VkIGFzIHBvdyBvZiAyLCAxIGJ5dGVzXG4gIFV0aWxzLm51bWJlclRvQnl0ZXMobWlkaWNsb2Nrc3BlcnRpY2sgfHwgMjQsIDEpLCAvLyBNSURJIENsb2NrcyBwZXIgdGljaywgMSBieXRlc1xuICBVdGlscy5udW1iZXJUb0J5dGVzKG5vdGVzcGVybWlkaWNsb2NrIHx8IDgsIDEpIC8vIE51bWJlciBvZiAxLzMyIG5vdGVzIHBlciBNSURJIGNsb2NrcywgMSBieXRlc1xuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSB0ZW1wbyBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IGJwbSAtIEJlYXRzIHBlciBtaW51dGVcbiAqIEByZXR1cm4ge1RyYWNrTmFtZUV2ZW50fVxuICovXG5cbnZhciBUcmFja05hbWVFdmVudCA9IGZ1bmN0aW9uIFRyYWNrTmFtZUV2ZW50KHRleHQpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRyYWNrTmFtZUV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAndHJhY2stbmFtZSc7XG4gIHZhciB0ZXh0Qnl0ZXMgPSBVdGlscy5zdHJpbmdUb0J5dGVzKHRleHQpOyAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9UUkFDS19OQU1FX0lELCBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRleHRCeXRlcy5sZW5ndGgpLCAvLyBTaXplXG4gIHRleHRCeXRlcyAvLyBUZXh0XG4gICk7XG59O1xuXG4vKipcbiAqIEhvbGRzIGFsbCBkYXRhIGZvciBhIHRyYWNrLlxuICogQHBhcmFtIHtvYmplY3R9IGZpZWxkcyB7dHlwZTogbnVtYmVyLCBkYXRhOiBhcnJheSwgc2l6ZTogYXJyYXksIGV2ZW50czogYXJyYXl9XG4gKiBAcmV0dXJuIHtUcmFja31cbiAqL1xuXG52YXIgVHJhY2sgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBUcmFjaygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJhY2spO1xuXG4gICAgdGhpcy50eXBlID0gQ29uc3RhbnRzLlRSQUNLX0NIVU5LX1RZUEU7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgdGhpcy5zaXplID0gW107XG4gICAgdGhpcy5ldmVudHMgPSBbXTtcbiAgICB0aGlzLmV4cGxpY2l0VGlja0V2ZW50cyA9IFtdOyAvLyBJZiB0aGVyZSBhcmUgYW55IGV2ZW50cyB3aXRoIGFuIGV4cGxpY2l0IHRpY2sgZGVmaW5lZCB0aGVuIHdlIHdpbGwgY3JlYXRlIGEgXCJzdWJcIiB0cmFjayBmb3IgdGhvc2VcbiAgICAvLyBhbmQgbWVyZ2UgdGhlbSBpbiBhbmQgdGhlIGVuZC5cblxuICAgIHRoaXMudGlja1BvaW50ZXIgPSAwOyAvLyBFYWNoIHRpbWUgYW4gZXZlbnQgaXMgYWRkZWQgdGhpcyB3aWxsIGluY3JlYXNlXG4gIH1cbiAgLyoqXG4gICAqIEFkZHMgYW55IGV2ZW50IHR5cGUgdG8gdGhlIHRyYWNrLlxuICAgKiBFdmVudHMgd2l0aG91dCBhIHNwZWNpZmljIHN0YXJ0VGljayBwcm9wZXJ0eSBhcmUgYXNzdW1lZCB0byBiZSBhZGRlZCBpbiBvcmRlciBvZiBob3cgdGhleSBzaG91bGQgb3V0cHV0LlxuICAgKiBFdmVudHMgd2l0aCBhIHNwZWNpZmljIHN0YXJ0VGljayBwcm9wZXJ0eSBhcmUgc2V0IGFzaWRlIGZvciBub3cgd2lsbCBiZSBtZXJnZWQgaW4gZHVyaW5nIGJ1aWxkIHByb2Nlc3MuXG4gICAqIEBwYXJhbSB7KE5vdGVFdmVudHxQcm9ncmFtQ2hhbmdlRXZlbnQpfSBldmVudHMgLSBFdmVudCBvYmplY3Qgb3IgYXJyYXkgb2YgRXZlbnQgb2JqZWN0cy5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gbWFwRnVuY3Rpb24gLSBDYWxsYmFjayB3aGljaCBjYW4gYmUgdXNlZCB0byBhcHBseSBzcGVjaWZpYyBwcm9wZXJ0aWVzIHRvIGFsbCBldmVudHMuXG4gICAqIEByZXR1cm4ge1RyYWNrfVxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhUcmFjaywgW3tcbiAgICBrZXk6IFwiYWRkRXZlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkRXZlbnQoZXZlbnRzLCBtYXBGdW5jdGlvbikge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgVXRpbHMudG9BcnJheShldmVudHMpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50LCBpKSB7XG4gICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5vdGVFdmVudCkge1xuICAgICAgICAgIC8vIEhhbmRsZSBtYXAgZnVuY3Rpb24gaWYgcHJvdmlkZWRcbiAgICAgICAgICBpZiAodHlwZW9mIG1hcEZ1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgcHJvcGVydGllcyA9IG1hcEZ1bmN0aW9uKGksIGV2ZW50KTtcblxuICAgICAgICAgICAgaWYgKF90eXBlb2YocHJvcGVydGllcykgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIGogaW4gcHJvcGVydGllcykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoaikge1xuICAgICAgICAgICAgICAgICAgY2FzZSAnY2hhbm5lbCc6XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmNoYW5uZWwgPSBwcm9wZXJ0aWVzW2pdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgY2FzZSAnZHVyYXRpb24nOlxuICAgICAgICAgICAgICAgICAgICBldmVudC5kdXJhdGlvbiA9IHByb3BlcnRpZXNbal07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlICdzZXF1ZW50aWFsJzpcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc2VxdWVudGlhbCA9IHByb3BlcnRpZXNbal07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlICd2ZWxvY2l0eSc6XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnZlbG9jaXR5ID0gVXRpbHMuY29udmVydFZlbG9jaXR5KHByb3BlcnRpZXNbal0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IC8vIElmIHRoaXMgbm90ZSBldmVudCBoYXMgYW4gZXhwbGljaXQgc3RhcnRUaWNrIHRoZW4gd2UgbmVlZCB0byBzZXQgYXNpZGUgZm9yIG5vd1xuXG5cbiAgICAgICAgICBpZiAoZXZlbnQuc3RhcnRUaWNrICE9PSBudWxsKSB7XG4gICAgICAgICAgICBfdGhpcy5leHBsaWNpdFRpY2tFdmVudHMucHVzaChldmVudCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFB1c2ggZWFjaCBvbi9vZmYgZXZlbnQgdG8gdHJhY2sncyBldmVudCBzdGFja1xuICAgICAgICAgICAgZXZlbnQuYnVpbGREYXRhKCkuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmV2ZW50cy5wdXNoKGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzLmV2ZW50cy5wdXNoKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQnVpbGRzIGludCBhcnJheSBvZiBhbGwgZXZlbnRzLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYnVpbGREYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJ1aWxkRGF0YSgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAvLyBSZW1vdmUgZXhpc3RpbmcgZW5kIHRyYWNrIGV2ZW50IGFuZCBhZGQgb25lLlxuICAgICAgLy8gVGhpcyBtYWtlcyBzdXJlIGl0J3MgYXQgdGhlIHZlcnkgZW5kIG9mIHRoZSBldmVudCBsaXN0LlxuICAgICAgdGhpcy5yZW1vdmVFdmVudHNCeVR5cGUoJ2VuZC10cmFjaycpLmFkZEV2ZW50KG5ldyBFbmRUcmFja0V2ZW50KCkpOyAvLyBSZXNldFxuXG4gICAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICAgIHRoaXMuc2l6ZSA9IFtdO1xuICAgICAgdGhpcy50aWNrUG9pbnRlciA9IDA7XG4gICAgICB2YXIgcHJlY2lzaW9uTG9zcyA9IDA7XG4gICAgICB0aGlzLmV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCwgZXZlbnRJbmRleCkge1xuICAgICAgICAvLyBCdWlsZCBldmVudCAmIGFkZCB0byB0b3RhbCB0aWNrIGR1cmF0aW9uXG4gICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5vdGVPbkV2ZW50IHx8IGV2ZW50IGluc3RhbmNlb2YgTm90ZU9mZkV2ZW50KSB7XG4gICAgICAgICAgdmFyIGJ1aWx0ID0gZXZlbnQuYnVpbGREYXRhKF90aGlzMiwgcHJlY2lzaW9uTG9zcyk7XG4gICAgICAgICAgcHJlY2lzaW9uTG9zcyA9IFV0aWxzLmdldFByZWNpc2lvbkxvc3MoZXZlbnQuZGVsdGFXaXRoUHJlY2lzaW9uQ29ycmVjdGlvbiB8fCAwKTtcbiAgICAgICAgICBfdGhpczIuZGF0YSA9IF90aGlzMi5kYXRhLmNvbmNhdChidWlsdC5kYXRhKTtcbiAgICAgICAgICBfdGhpczIudGlja1BvaW50ZXIgPSBVdGlscy5nZXRSb3VuZGVkSWZDbG9zZShldmVudC50aWNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpczIuZGF0YSA9IF90aGlzMi5kYXRhLmNvbmNhdChldmVudC5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLm1lcmdlRXhwbGljaXRUaWNrRXZlbnRzKCk7XG4gICAgICB0aGlzLnNpemUgPSBVdGlscy5udW1iZXJUb0J5dGVzKHRoaXMuZGF0YS5sZW5ndGgsIDQpOyAvLyA0IGJ5dGVzIGxvbmdcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm1lcmdlRXhwbGljaXRUaWNrRXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1lcmdlRXhwbGljaXRUaWNrRXZlbnRzKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIGlmICghdGhpcy5leHBsaWNpdFRpY2tFdmVudHMubGVuZ3RoKSByZXR1cm47IC8vIEZpcnN0IHNvcnQgYXNjIGxpc3Qgb2YgZXZlbnRzIGJ5IHN0YXJ0VGlja1xuXG4gICAgICB0aGlzLmV4cGxpY2l0VGlja0V2ZW50cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBhLnN0YXJ0VGljayAtIGIuc3RhcnRUaWNrO1xuICAgICAgfSk7IC8vIE5vdyB0aGlzLmV4cGxpY2l0VGlja0V2ZW50cyBpcyBpbiBjb3JyZWN0IG9yZGVyLCBhbmQgc28gaXMgdGhpcy5ldmVudHMgbmF0dXJhbGx5LlxuICAgICAgLy8gRm9yIGVhY2ggZXhwbGljaXQgdGljayBldmVudCwgc3BsaWNlIGl0IGludG8gdGhlIG1haW4gbGlzdCBvZiBldmVudHMgYW5kXG4gICAgICAvLyBhZGp1c3QgdGhlIGRlbHRhIG9uIHRoZSBmb2xsb3dpbmcgZXZlbnRzIHNvIHRoZXkgc3RpbGwgcGxheSBub3JtYWxseS5cblxuICAgICAgdGhpcy5leHBsaWNpdFRpY2tFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAobm90ZUV2ZW50KSB7XG4gICAgICAgIC8vIENvbnZlcnQgTm90ZUV2ZW50IHRvIGl0J3MgcmVzcGVjdGl2ZSBOb3RlT24vTm90ZU9mZiBldmVudHNcbiAgICAgICAgLy8gTm90ZSB0aGF0IGFzIHdlIHNwbGljZSBpbiBldmVudHMgdGhlIGRlbHRhIGZvciB0aGUgTm90ZU9mZiBvbmVzIHdpbGxcbiAgICAgICAgLy8gTmVlZCB0byBjaGFuZ2UgYmFzZWQgb24gd2hhdCBjb21lcyBiZWZvcmUgdGhlbSBhZnRlciB0aGUgc3BsaWNlLlxuICAgICAgICBub3RlRXZlbnQuYnVpbGREYXRhKCkuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gZS5idWlsZERhdGEoX3RoaXMzKTtcbiAgICAgICAgfSk7IC8vIE1lcmdlIGVhY2ggZXZlbnQgaW5kaXZ1YWxseSBpbnRvIHRoaXMgdHJhY2sncyBldmVudCBsaXN0LlxuXG4gICAgICAgIG5vdGVFdmVudC5ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMzLm1lcmdlU2luZ2xlRXZlbnQoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgIH0pOyAvLyBIYWNreSB3YXkgdG8gcmVidWlsZCB0cmFjayB3aXRoIG5ld2x5IHNwbGljZWQgZXZlbnRzLiAgTmVlZCBiZXR0ZXIgc29sdXRpb24uXG5cbiAgICAgIHRoaXMuZXhwbGljaXRUaWNrRXZlbnRzID0gW107XG4gICAgICB0aGlzLmJ1aWxkRGF0YSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNZXJnZXMgYW5vdGhlciB0cmFjaydzIGV2ZW50cyB3aXRoIHRoaXMgdHJhY2suXG4gICAgICogQHBhcmFtIHtUcmFja30gdHJhY2tcbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm1lcmdlVHJhY2tcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWVyZ2VUcmFjayh0cmFjaykge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIC8vIEZpcnN0IGJ1aWxkIHRoaXMgdHJhY2sgdG8gcG9wdWxhdGUgZWFjaCBldmVudCdzIHRpY2sgcHJvcGVydHlcbiAgICAgIHRoaXMuYnVpbGREYXRhKCk7IC8vIFRoZW4gYnVpbGQgdHJhY2sgdG8gYmUgbWVyZ2VkIHNvIHRoYXQgdGljayBwcm9wZXJ0eSBpcyBwb3B1bGF0ZWQgb24gYWxsIGV2ZW50cyAmIG1lcmdlIGVhY2ggZXZlbnQuXG5cbiAgICAgIHRyYWNrLmJ1aWxkRGF0YSgpLmV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICByZXR1cm4gX3RoaXM0Lm1lcmdlU2luZ2xlRXZlbnQoZXZlbnQpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE1lcmdlcyBhIHNpbmdsZSBldmVudCBpbnRvIHRoaXMgdHJhY2sncyBsaXN0IG9mIGV2ZW50cyBiYXNlZCBvbiBldmVudC50aWNrIHByb3BlcnR5LlxuICAgICAqIEBwYXJhbSB7Tm90ZU9uRXZlbnR8Tm90ZU9mZkV2ZW50fSAtIGV2ZW50XG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJtZXJnZVNpbmdsZUV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1lcmdlU2luZ2xlRXZlbnQoZXZlbnQpIHtcbiAgICAgIC8vIEZpbmQgaW5kZXggb2YgZXhpc3RpbmcgZXZlbnQgd2UgbmVlZCB0byBmb2xsb3cgd2l0aFxuICAgICAgdmFyIGxhc3RFdmVudEluZGV4ID0gMDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5ldmVudHNbaV0udGljayA+IGV2ZW50LnRpY2spIGJyZWFrO1xuICAgICAgICBsYXN0RXZlbnRJbmRleCA9IGk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzcGxpY2VkRXZlbnRJbmRleCA9IGxhc3RFdmVudEluZGV4ICsgMTsgLy8gTmVlZCB0byBhZGp1c3QgdGhlIGRlbHRhIG9mIHRoaXMgZXZlbnQgdG8gZW5zdXJlIGl0IGZhbGxzIG9uIHRoZSBjb3JyZWN0IHRpY2suXG5cbiAgICAgIGV2ZW50LmRlbHRhID0gZXZlbnQudGljayAtIHRoaXMuZXZlbnRzW2xhc3RFdmVudEluZGV4XS50aWNrOyAvLyBTcGxpY2UgdGhpcyBldmVudCBhdCBsYXN0RXZlbnRJbmRleCArIDFcblxuICAgICAgdGhpcy5ldmVudHMuc3BsaWNlKHNwbGljZWRFdmVudEluZGV4LCAwLCBldmVudCk7IC8vIE5vdyBhZGp1c3QgZGVsdGEgb2YgYWxsIGZvbGxvd2luZyBldmVudHNcblxuICAgICAgZm9yICh2YXIgaSA9IHNwbGljZWRFdmVudEluZGV4ICsgMTsgaSA8IHRoaXMuZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIFNpbmNlIGVhY2ggZXhpc3RpbmcgZXZlbnQgc2hvdWxkIGhhdmUgYSB0aWNrIHZhbHVlIGF0IHRoaXMgcG9pbnQgd2UganVzdCBuZWVkIHRvXG4gICAgICAgIC8vIGFkanVzdCBkZWx0YSB0byB0aGF0IHRoZSBldmVudCBzdGlsbCBmYWxscyBvbiB0aGUgY29ycmVjdCB0aWNrLlxuICAgICAgICB0aGlzLmV2ZW50c1tpXS5kZWx0YSA9IHRoaXMuZXZlbnRzW2ldLnRpY2sgLSB0aGlzLmV2ZW50c1tpIC0gMV0udGljaztcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwgZXZlbnRzIG1hdGNoaW5nIHNwZWNpZmllZCB0eXBlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFR5cGUgLSBFdmVudCB0eXBlXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVFdmVudHNCeVR5cGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlRXZlbnRzQnlUeXBlKGV2ZW50VHlwZSkge1xuICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgIHRoaXMuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50LCBpbmRleCkge1xuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gZXZlbnRUeXBlKSB7XG4gICAgICAgICAgX3RoaXM1LmV2ZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRlbXBvIG9mIHRoZSBNSURJIGZpbGUuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGJwbSAtIFRlbXBvIGluIGJlYXRzIHBlciBtaW51dGUuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzZXRUZW1wb1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRUZW1wbyhicG0pIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBUZW1wb0V2ZW50KGJwbSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRpbWUgc2lnbmF0dXJlLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBudW1lcmF0b3IgLSBUb3AgbnVtYmVyIG9mIHRoZSB0aW1lIHNpZ25hdHVyZS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGVub21pbmF0b3IgLSBCb3R0b20gbnVtYmVyIG9mIHRoZSB0aW1lIHNpZ25hdHVyZS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWlkaWNsb2Nrc3BlcnRpY2sgLSBEZWZhdWx0cyB0byAyNC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbm90ZXNwZXJtaWRpY2xvY2sgLSBEZWZhdWx0cyB0byA4LlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2V0VGltZVNpZ25hdHVyZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRUaW1lU2lnbmF0dXJlKG51bWVyYXRvciwgZGVub21pbmF0b3IsIG1pZGljbG9ja3NwZXJ0aWNrLCBub3Rlc3Blcm1pZGljbG9jaykge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IFRpbWVTaWduYXR1cmVFdmVudChudW1lcmF0b3IsIGRlbm9taW5hdG9yLCBtaWRpY2xvY2tzcGVydGljaywgbm90ZXNwZXJtaWRpY2xvY2spKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyBrZXkgc2lnbmF0dXJlLlxuICAgICAqIEBwYXJhbSB7Kn0gc2YgLVxuICAgICAqIEBwYXJhbSB7Kn0gbWkgLVxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2V0S2V5U2lnbmF0dXJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEtleVNpZ25hdHVyZShzZiwgbWkpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBLZXlTaWduYXR1cmVFdmVudChzZiwgbWkpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyB0ZXh0IHRvIE1JREkgZmlsZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRleHQgdG8gYWRkLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkVGV4dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRUZXh0KHRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBUZXh0RXZlbnQodGV4dCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGNvcHlyaWdodCB0byBNSURJIGZpbGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUZXh0IG9mIGNvcHlyaWdodCBsaW5lLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkQ29weXJpZ2h0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZENvcHlyaWdodCh0ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgQ29weXJpZ2h0RXZlbnQodGV4dCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIFNlcXVlbmNlL1RyYWNrIE5hbWUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUZXh0IG9mIHRyYWNrIG5hbWUuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhZGRUcmFja05hbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkVHJhY2tOYW1lKHRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBUcmFja05hbWVFdmVudCh0ZXh0KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgaW5zdHJ1bWVudCBuYW1lIG9mIHRyYWNrLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gTmFtZSBvZiBpbnN0cnVtZW50LlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkSW5zdHJ1bWVudE5hbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkSW5zdHJ1bWVudE5hbWUodGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IEluc3RydW1lbnROYW1lRXZlbnQodGV4dCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIG1hcmtlciB0byBNSURJIGZpbGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBNYXJrZXIgdGV4dC5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFkZE1hcmtlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRNYXJrZXIodGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IE1hcmtlckV2ZW50KHRleHQpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBjdWUgcG9pbnQgdG8gTUlESSBmaWxlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCBvZiBjdWUgcG9pbnQuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhZGRDdWVQb2ludFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRDdWVQb2ludCh0ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgQ3VlUG9pbnRFdmVudCh0ZXh0KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgbHlyaWMgdG8gTUlESSBmaWxlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gTHlyaWMgdGV4dCB0byBhZGQuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhZGRMeXJpY1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRMeXJpYyh0ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgTHlyaWNFdmVudCh0ZXh0KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoYW5uZWwgbW9kZSBtZXNzYWdlc1xuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicG9seU1vZGVPblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwb2x5TW9kZU9uKCkge1xuICAgICAgdmFyIGV2ZW50ID0gbmV3IE5vdGVPbkV2ZW50KHtcbiAgICAgICAgZGF0YTogWzB4MDAsIDB4QjAsIDB4N0UsIDB4MDBdXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KGV2ZW50KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyBhIHBpdGNoIGJlbmQuXG4gICAgICogQHBhcmFtIHtmbG9hdH0gYmVuZCAtIEJlbmQgdmFsdWUgcmFuZ2luZyBbLTEsMV0sIHplcm8gbWVhbmluZyBubyBiZW5kLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2V0UGl0Y2hCZW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFBpdGNoQmVuZChiZW5kKSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgUGl0Y2hCZW5kRXZlbnQoe1xuICAgICAgICBiZW5kOiBiZW5kXG4gICAgICB9KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBjb250cm9sbGVyIGNoYW5nZSBldmVudFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIgLSBDb250cm9sIG51bWJlci5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSBDb250cm9sIHZhbHVlLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY29udHJvbGxlckNoYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb250cm9sbGVyQ2hhbmdlKG51bWJlciwgdmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBDb250cm9sbGVyQ2hhbmdlRXZlbnQoe1xuICAgICAgICBjb250cm9sbGVyTnVtYmVyOiBudW1iZXIsXG4gICAgICAgIGNvbnRyb2xsZXJWYWx1ZTogdmFsdWVcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVHJhY2s7XG59KCk7XG5cbnZhciBWZXhGbG93ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVmV4RmxvdygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVmV4Rmxvdyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVmV4RmxvdywgW3tcbiAgICBrZXk6IFwidHJhY2tGcm9tVm9pY2VcIixcbiAgICB2YWx1ZTpcbiAgICAvKipcbiAgICAgKiBTdXBwb3J0IGZvciBjb252ZXJ0aW5nIFZleEZsb3cgdm9pY2UgaW50byBNaWRpV3JpdGVySlMgdHJhY2tcbiAgICAgKiBAcmV0dXJuIE1pZGlXcml0ZXIuVHJhY2sgb2JqZWN0XG4gICAgICovXG4gICAgZnVuY3Rpb24gdHJhY2tGcm9tVm9pY2Uodm9pY2UpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7XG4gICAgICAgIGFkZFJlbmRlcmVkQWNjaWRlbnRhbHM6IGZhbHNlXG4gICAgICB9O1xuICAgICAgdmFyIHRyYWNrID0gbmV3IFRyYWNrKCk7XG4gICAgICB2YXIgd2FpdCA9IFtdO1xuICAgICAgdm9pY2UudGlja2FibGVzLmZvckVhY2goZnVuY3Rpb24gKHRpY2thYmxlKSB7XG4gICAgICAgIGlmICh0aWNrYWJsZS5ub3RlVHlwZSA9PT0gJ24nKSB7XG4gICAgICAgICAgdHJhY2suYWRkRXZlbnQobmV3IE5vdGVFdmVudCh7XG4gICAgICAgICAgICBwaXRjaDogdGlja2FibGUua2V5cy5tYXAoZnVuY3Rpb24gKHBpdGNoLCBpbmRleCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuY29udmVydFBpdGNoKHBpdGNoLCBpbmRleCwgdGlja2FibGUsIG9wdGlvbnMuYWRkUmVuZGVyZWRBY2NpZGVudGFscyk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBfdGhpcy5jb252ZXJ0RHVyYXRpb24odGlja2FibGUpLFxuICAgICAgICAgICAgd2FpdDogd2FpdFxuICAgICAgICAgIH0pKTsgLy8gcmVzZXQgd2FpdFxuXG4gICAgICAgICAgd2FpdCA9IFtdO1xuICAgICAgICB9IGVsc2UgaWYgKHRpY2thYmxlLm5vdGVUeXBlID09PSAncicpIHtcbiAgICAgICAgICAvLyBtb3ZlIG9uIHRvIHRoZSBuZXh0IHRpY2thYmxlIGFuZCBhZGQgdGhpcyB0byB0aGUgc3RhY2tcbiAgICAgICAgICAvLyBvZiB0aGUgYHdhaXRgIHByb3BlcnR5IGZvciB0aGUgbmV4dCBub3RlIGV2ZW50XG4gICAgICAgICAgd2FpdC5wdXNoKF90aGlzLmNvbnZlcnREdXJhdGlvbih0aWNrYWJsZSkpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSk7IC8vIFRoZXJlIG1heSBiZSBvdXRzdGFuZGluZyByZXN0cyBhdCB0aGUgZW5kIG9mIHRoZSB0cmFjayxcbiAgICAgIC8vIHBhZCB3aXRoIGEgZ2hvc3Qgbm90ZSAoemVybyBkdXJhdGlvbiBhbmQgdmVsb2NpdHkpLCBqdXN0IHRvIGNhcHR1cmUgdGhlIHdhaXQuXG5cbiAgICAgIGlmICh3YWl0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgdHJhY2suYWRkRXZlbnQobmV3IE5vdGVFdmVudCh7XG4gICAgICAgICAgcGl0Y2g6ICdbYzRdJyxcbiAgICAgICAgICBkdXJhdGlvbjogJzAnLFxuICAgICAgICAgIHdhaXQ6IHdhaXQsXG4gICAgICAgICAgdmVsb2NpdHk6ICcwJ1xuICAgICAgICB9KSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cmFjaztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgVmV4RmxvdyBwaXRjaCBzeW50YXggdG8gTWlkaVdyaXRlckpTIHN5bnRheFxuICAgICAqIEBwYXJhbSBwaXRjaCBzdHJpbmdcbiAgICAgKiBAcGFyYW0gaW5kZXggcGl0Y2ggaW5kZXhcbiAgICAgKiBAcGFyYW0gbm90ZSBzdHJ1Y3QgZnJvbSBWZXhmbG93XG4gICAgICogQHBhcmFtIGFkZFJlbmRlcmVkQWNjaWRlbnRhbHMgYWRkcyBWZXhmbG93IHJlbmRlcmVkIGFjY2lkZW50YWxzXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjb252ZXJ0UGl0Y2hcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29udmVydFBpdGNoKHBpdGNoLCBpbmRleCwgbm90ZSkge1xuICAgICAgdmFyIGFkZFJlbmRlcmVkQWNjaWRlbnRhbHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IGZhbHNlO1xuICAgICAgLy8gU3BsaXRzIG5vdGUgbmFtZSBmcm9tIG9jdGF2ZVxuICAgICAgdmFyIHBpdGNoUGFydHMgPSBwaXRjaC5zcGxpdCgnLycpOyAvLyBSZXRyaWV2ZXMgYWNjaWRlbnRhbHMgZnJvbSBwaXRjaFxuICAgICAgLy8gUmVtb3ZlcyBuYXR1cmFsIGFjY2lkZW50YWxzIHNpbmNlIHRoZXkgYXJlIG5vdCBhY2NlcHRlZCBpbiBUb25hbCBNaWRpXG5cbiAgICAgIHZhciBhY2NpZGVudGFscyA9IHBpdGNoUGFydHNbMF0uc3Vic3RyaW5nKDEpLnJlcGxhY2UoJ24nLCAnJyk7XG5cbiAgICAgIGlmIChhZGRSZW5kZXJlZEFjY2lkZW50YWxzKSB7XG4gICAgICAgIHZhciBfbm90ZSRnZXRBY2NpZGVudGFscztcblxuICAgICAgICAoX25vdGUkZ2V0QWNjaWRlbnRhbHMgPSBub3RlLmdldEFjY2lkZW50YWxzKCkpID09PSBudWxsIHx8IF9ub3RlJGdldEFjY2lkZW50YWxzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbm90ZSRnZXRBY2NpZGVudGFscy5mb3JFYWNoKGZ1bmN0aW9uIChhY2NpZGVudGFsKSB7XG4gICAgICAgICAgaWYgKGFjY2lkZW50YWwuaW5kZXggPT09IGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoYWNjaWRlbnRhbC50eXBlID09PSAnbicpIHtcbiAgICAgICAgICAgICAgYWNjaWRlbnRhbHMgPSAnJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGFjY2lkZW50YWxzICs9IGFjY2lkZW50YWwudHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGl0Y2hQYXJ0c1swXVswXSArIGFjY2lkZW50YWxzICsgcGl0Y2hQYXJ0c1sxXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgVmV4RmxvdyBkdXJhdGlvbiBzeW50YXggdG8gTWlkaVdyaXRlckpTIHN5bnRheFxuICAgICAqIEBwYXJhbSBub3RlIHN0cnVjdCBmcm9tIFZleEZsb3dcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNvbnZlcnREdXJhdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb252ZXJ0RHVyYXRpb24obm90ZSkge1xuICAgICAgcmV0dXJuICdkJy5yZXBlYXQobm90ZS5kb3RzKSArIHRoaXMuY29udmVydEJhc2VEdXJhdGlvbihub3RlLmR1cmF0aW9uKSArIChub3RlLnR1cGxldCA/ICd0JyArIG5vdGUudHVwbGV0Lm51bV9ub3RlcyA6ICcnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgVmV4RmxvdyBiYXNlIGR1cmF0aW9uIHN5bnRheCB0byBNaWRpV3JpdGVySlMgc3ludGF4XG4gICAgICogQHBhcmFtIGR1cmF0aW9uIFZleGZsb3cgZHVyYXRpb25cbiAgICAgKiBAcmV0dXJucyBNaWRpV3JpdGVySlMgZHVyYXRpb25cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNvbnZlcnRCYXNlRHVyYXRpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29udmVydEJhc2VEdXJhdGlvbihkdXJhdGlvbikge1xuICAgICAgc3dpdGNoIChkdXJhdGlvbikge1xuICAgICAgICBjYXNlICd3JzpcbiAgICAgICAgICByZXR1cm4gJzEnO1xuXG4gICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICAgIHJldHVybiAnMic7XG5cbiAgICAgICAgY2FzZSAncSc6XG4gICAgICAgICAgcmV0dXJuICc0JztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBkdXJhdGlvbjtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVmV4Rmxvdztcbn0oKTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSBoZWFkZXIgY2h1bmsgc2VjdGlvbiBvZiBhIE1JREkgZmlsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXJPZlRyYWNrcyAtIE51bWJlciBvZiB0cmFja3NcbiAqIEByZXR1cm4ge0hlYWRlckNodW5rfVxuICovXG5cbnZhciBIZWFkZXJDaHVuayA9IGZ1bmN0aW9uIEhlYWRlckNodW5rKG51bWJlck9mVHJhY2tzKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIZWFkZXJDaHVuayk7XG5cbiAgdGhpcy50eXBlID0gQ29uc3RhbnRzLkhFQURFUl9DSFVOS19UWVBFO1xuICB2YXIgdHJhY2tUeXBlID0gbnVtYmVyT2ZUcmFja3MgPiAxID8gQ29uc3RhbnRzLkhFQURFUl9DSFVOS19GT1JNQVQxIDogQ29uc3RhbnRzLkhFQURFUl9DSFVOS19GT1JNQVQwO1xuICB0aGlzLmRhdGEgPSB0cmFja1R5cGUuY29uY2F0KFV0aWxzLm51bWJlclRvQnl0ZXMobnVtYmVyT2ZUcmFja3MsIDIpLCAvLyB0d28gYnl0ZXMgbG9uZyxcbiAgQ29uc3RhbnRzLkhFQURFUl9DSFVOS19ESVZJU0lPTik7XG4gIHRoaXMuc2l6ZSA9IFswLCAwLCAwLCB0aGlzLmRhdGEubGVuZ3RoXTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHRoYXQgcHV0cyB0b2dldGhlciB0cmFja3MgYW5kIHByb3ZpZGVzIG1ldGhvZHMgZm9yIGZpbGUgb3V0cHV0LlxuICogQHBhcmFtIHthcnJheXxUcmFja30gdHJhY2tzIC0gQSBzaW5nbGUge1RyYWNrfSBvYmplY3Qgb3IgYW4gYXJyYXkgb2Yge1RyYWNrfSBvYmplY3RzLlxuICogQHJldHVybiB7V3JpdGVyfVxuICovXG5cbnZhciBXcml0ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBXcml0ZXIodHJhY2tzKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBXcml0ZXIpO1xuXG4gICAgLy8gRW5zdXJlIHRyYWNrIGlzIGFuIGFycmF5XG4gICAgdHJhY2tzID0gVXRpbHMudG9BcnJheSh0cmFja3MpO1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIHRoaXMuZGF0YS5wdXNoKG5ldyBIZWFkZXJDaHVuayh0cmFja3MubGVuZ3RoKSk7IC8vIEZvciBlYWNoIHRyYWNrIGFkZCBmaW5hbCBlbmQgb2YgdHJhY2sgZXZlbnQgYW5kIGJ1aWxkIGRhdGFcblxuICAgIHRyYWNrcy5mb3JFYWNoKGZ1bmN0aW9uICh0cmFjaywgaSkge1xuICAgICAgX3RoaXMuZGF0YS5wdXNoKHRyYWNrLmJ1aWxkRGF0YSgpKTtcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogQnVpbGRzIHRoZSBmaWxlIGludG8gYSBVaW50OEFycmF5XG4gICAqIEByZXR1cm4ge1VpbnQ4QXJyYXl9XG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKFdyaXRlciwgW3tcbiAgICBrZXk6IFwiYnVpbGRGaWxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJ1aWxkRmlsZSgpIHtcbiAgICAgIHZhciBidWlsZCA9IFtdOyAvLyBEYXRhIGNvbnNpc3RzIG9mIGNodW5rcyB3aGljaCBjb25zaXN0cyBvZiBkYXRhXG5cbiAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBidWlsZCA9IGJ1aWxkLmNvbmNhdChkLnR5cGUsIGQuc2l6ZSwgZC5kYXRhKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGJ1aWxkKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVydCBmaWxlIGJ1ZmZlciB0byBhIGJhc2U2NCBzdHJpbmcuICBEaWZmZXJlbnQgbWV0aG9kcyBkZXBlbmRpbmcgb24gaWYgYnJvd3NlciBvciBub2RlLlxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImJhc2U2NFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBiYXNlNjQoKSB7XG4gICAgICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHJldHVybiBidG9hKFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgdGhpcy5idWlsZEZpbGUoKSkpO1xuICAgICAgcmV0dXJuIEJ1ZmZlci5mcm9tKHRoaXMuYnVpbGRGaWxlKCkpLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBkYXRhIFVSSS5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkYXRhVXJpXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRhdGFVcmkoKSB7XG4gICAgICByZXR1cm4gJ2RhdGE6YXVkaW8vbWlkaTtiYXNlNjQsJyArIHRoaXMuYmFzZTY0KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE91dHB1dCB0byBzdGRvdXRcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzdGRvdXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3Rkb3V0KCkge1xuICAgICAgcmV0dXJuIHByb2Nlc3Muc3Rkb3V0LndyaXRlKG5ldyBCdWZmZXIodGhpcy5idWlsZEZpbGUoKSkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBXcml0ZXI7XG59KCk7XG5cbnZhciBtYWluID0ge1xuICBDb25zdGFudHM6IENvbnN0YW50cyxcbiAgTm90ZU9uRXZlbnQ6IE5vdGVPbkV2ZW50LFxuICBOb3RlT2ZmRXZlbnQ6IE5vdGVPZmZFdmVudCxcbiAgTm90ZUV2ZW50OiBOb3RlRXZlbnQsXG4gIFBpdGNoQmVuZEV2ZW50OiBQaXRjaEJlbmRFdmVudCxcbiAgUHJvZ3JhbUNoYW5nZUV2ZW50OiBQcm9ncmFtQ2hhbmdlRXZlbnQsXG4gIFRyYWNrOiBUcmFjayxcbiAgVXRpbHM6IFV0aWxzLFxuICBWZXhGbG93OiBWZXhGbG93LFxuICBXcml0ZXI6IFdyaXRlclxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtYWluO1xuIiwgImltcG9ydCB7IFV0aWxzIH0gZnJvbSAnbWlkaS13cml0ZXItanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICB0aGlzLmJlYXRzID0gW107XG4gICAgdGhpcy5iYXJzID0gODtcbiAgICB0aGlzLmJwbSA9IDEyNztcbiAgICB0aGlzLmZyYXEgPSAxIC8gdGhpcy5iYXJzO1xuICAgIHRoaXMudHJhY2tOb2RlcyA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLnRyYWNrU3RhdGUgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy5kZWxheURpdmlzaW9uID0gMyAvIDg7XG4gICAgdGhpcy5vbkJlYXQgPSBudWxsO1xuICAgIHRoaXMuaW5pdEF1ZGlvKCk7XG4gIH1cblxuICBpbml0QXVkaW8oKSB7XG4gICAgY29uc3QgQXVkaW9Db250ZXh0RnVuYyA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dDtcblxuICAgIHRoaXMuYXVkaW9Db250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dEZ1bmMoKTtcbiAgICB0aGlzLmRlc3RpbmF0aW9uID0gdGhpcy5hdWRpb0NvbnRleHQuZGVzdGluYXRpb247XG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgV2ViQXVkaW9Gb250UGxheWVyKCk7XG4gICAgdGhpcy5lcXVhbGl6ZXIgPSB0aGlzLnBsYXllci5jcmVhdGVDaGFubmVsKHRoaXMuYXVkaW9Db250ZXh0KTtcbiAgICB0aGlzLm1hc3RlckdhaW4gPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgdGhpcy5lY2hvID0gdGhpcy5wbGF5ZXIuY3JlYXRlUmV2ZXJiZXJhdG9yKHRoaXMuYXVkaW9Db250ZXh0KTtcbiAgICB0aGlzLmRlbGF5SW5wdXQgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgdGhpcy5kZWxheSA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZURlbGF5KDQpO1xuICAgIHRoaXMuZGVsYXlGZWVkYmFjayA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgICB0aGlzLmRlbGF5V2V0ID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpO1xuXG4gICAgdGhpcy5tYXN0ZXJHYWluLmdhaW4udmFsdWUgPSAxO1xuICAgIHRoaXMuZGVsYXlGZWVkYmFjay5nYWluLnZhbHVlID0gMC4zNTtcbiAgICB0aGlzLmRlbGF5V2V0LmdhaW4udmFsdWUgPSAxO1xuICAgIHRoaXMuZGVsYXlJbnB1dC5nYWluLnZhbHVlID0gMTtcblxuICAgIHRoaXMuZXF1YWxpemVyLm91dHB1dC5jb25uZWN0KHRoaXMubWFzdGVyR2Fpbik7XG4gICAgdGhpcy5lY2hvLm91dHB1dC5jb25uZWN0KHRoaXMubWFzdGVyR2Fpbik7XG5cbiAgICB0aGlzLmRlbGF5SW5wdXQuY29ubmVjdCh0aGlzLmRlbGF5KTtcbiAgICB0aGlzLmRlbGF5LmNvbm5lY3QodGhpcy5kZWxheUZlZWRiYWNrKTtcbiAgICB0aGlzLmRlbGF5RmVlZGJhY2suY29ubmVjdCh0aGlzLmRlbGF5KTtcbiAgICB0aGlzLmRlbGF5LmNvbm5lY3QodGhpcy5kZWxheVdldCk7XG4gICAgdGhpcy5kZWxheVdldC5jb25uZWN0KHRoaXMubWFzdGVyR2Fpbik7XG5cbiAgICB0aGlzLm1hc3RlckdhaW4uY29ubmVjdCh0aGlzLmRlc3RpbmF0aW9uKTtcbiAgICB0aGlzLnVwZGF0ZURlbGF5VGltZSgpO1xuICB9XG5cbiAgcGl0Y2godmFsdWUpIHtcbiAgICByZXR1cm4gVXRpbHMuZ2V0UGl0Y2godmFsdWUpICsgdGhpcy5vZmZzZXQ7XG4gIH1cblxuICBwcmVsb2FkKGRhdGEpIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhIHx8IHRoaXMuZGF0YTtcblxuICAgIGxldCBjb3VudCA9IDA7XG4gICAgdGhpcy5kYXRhLmZvckVhY2godHJhY2sgPT4ge1xuICAgICAgaWYgKHRyYWNrWzJdLmxlbmd0aCA+IGNvdW50KSBjb3VudCA9IHRyYWNrWzJdLmxlbmd0aDtcblxuICAgICAgY29uc3QgaW5mbyA9IHRyYWNrWzBdID49IDIwMDBcbiAgICAgICAgPyB0aGlzLnBsYXllci5sb2FkZXIuZHJ1bUluZm8odHJhY2tbMF0gLSAyMDAwKVxuICAgICAgICA6IHRoaXMucGxheWVyLmxvYWRlci5pbnN0cnVtZW50SW5mbyh0cmFja1swXSk7XG5cbiAgICAgIHRoaXMuY2FjaGVJbnN0cnVtZW50KGluZm8pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZHVyYXRpb24gPSBVdGlscy5nZXRUaWNrRHVyYXRpb24oJzMyJykgLyAyNTY7XG4gICAgY29uc3QgbmV4dEtleXMgPSBuZXcgU2V0KCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGJlYXQgPSBuZXcgTWFwKCk7XG5cbiAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKHRyYWNrID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gYCR7dHJhY2tbMF19LyR7dHJhY2tbMV19YDtcbiAgICAgICAgbmV4dEtleXMuYWRkKGtleSk7XG4gICAgICAgIGlmICghYmVhdC5oYXMoa2V5KSkgYmVhdC5zZXQoa2V5LCB7IGRydW1zOiBbXSwgbm90ZXM6IFtdIH0pO1xuICAgICAgICBjb25zdCBzbG90ID0gYmVhdC5nZXQoa2V5KTtcbiAgICAgICAgY29uc3QgdGljayA9IHRyYWNrWzJdW2ldIHx8IHt9O1xuXG4gICAgICAgIGlmICh0cmFja1swXSA+PSAyMDAwKSB7XG4gICAgICAgICAgc2xvdC5kcnVtcy5wdXNoKFt0cmFja1swXSAtIDIwMDAsIHRpY2sudl0pO1xuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodGljay5uKSkge1xuICAgICAgICAgIHRpY2subi5mb3JFYWNoKHRvbmUgPT4ge1xuICAgICAgICAgICAgc2xvdC5ub3Rlcy5wdXNoKFt0cmFja1swXSwgdGhpcy5waXRjaCh0b25lKSwgZHVyYXRpb24sIHRpY2sudl0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRpY2subikge1xuICAgICAgICAgIHNsb3Qubm90ZXMucHVzaChbdHJhY2tbMF0sIHRoaXMucGl0Y2godGljay5uKSwgZHVyYXRpb24sIHRpY2sudl0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5iZWF0c1tpXSA9IGJlYXQ7XG4gICAgfVxuXG4gICAgdGhpcy50cmFja05vZGVzLmZvckVhY2goKG5vZGVzLCBrZXkpID0+IHtcbiAgICAgIGlmICghbmV4dEtleXMuaGFzKGtleSkpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBub2Rlcy5kcnkuZGlzY29ubmVjdCgpO1xuICAgICAgICAgIG5vZGVzLnJldmVyYlNlbmQuZGlzY29ubmVjdCgpO1xuICAgICAgICAgIG5vZGVzLmRlbGF5U2VuZC5kaXNjb25uZWN0KCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpZ25vcmVcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyYWNrTm9kZXMuZGVsZXRlKGtleSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBuZXh0S2V5cy5mb3JFYWNoKGtleSA9PiB0aGlzLmdldFRyYWNrTm9kZXMoa2V5KSk7XG4gIH1cblxuICBjb250ZXh0VGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hdWRpb0NvbnRleHQuY3VycmVudFRpbWU7XG4gIH1cblxuICBwbGF5TG9vcE1hY2hpbmUoZnJvbUJlYXQpIHtcbiAgICB0aGlzLnN0YXJ0UGxheUxvb3AodGhpcy5iZWF0cywgdGhpcy5icG0sIHRoaXMuZnJhcSwgZnJvbUJlYXQpO1xuICB9XG5cbiAgc3RvcExvb3BNYWNoaW5lKCkge1xuICAgIHRoaXMuc3RvcFBsYXlMb29wKCk7XG4gIH1cblxuICBzZXRMb29wTWFjaGluZShkYXRhLCB0ZW1wbywgbGVuZ3RoLCB0cmFuc3Bvc2UpIHtcbiAgICBjb25zdCBjaGFuZ2VkID0gdGVtcG8gIT09IHRoaXMuYnBtXG4gICAgICB8fCBsZW5ndGggIT09IHRoaXMuYmFyc1xuICAgICAgfHwgdHJhbnNwb3NlICE9PSB0aGlzLm9mZnNldDtcblxuICAgIGlmIChjaGFuZ2VkKSB0aGlzLnN0b3BQbGF5TG9vcCgpO1xuXG4gICAgdGhpcy5iZWF0cy5sZW5ndGggPSAwO1xuICAgIHRoaXMuYnBtID0gdGVtcG8gfHwgMTI3O1xuICAgIHRoaXMuYmFycyA9IGxlbmd0aCB8fCAxNjtcbiAgICB0aGlzLm9mZnNldCA9IHRyYW5zcG9zZSB8fCAwO1xuICAgIHRoaXMudXBkYXRlRGVsYXlUaW1lKCk7XG4gICAgdGhpcy5wcmVsb2FkKGRhdGEpO1xuICAgIHRoaXMuZnJhcSA9IDEgLyB0aGlzLmJhcnM7XG5cbiAgICByZXR1cm4gY2hhbmdlZDtcbiAgfVxuXG4gIHN0YXJ0UGxheUxvb3AoYmVhdHMsIGJwbSwgZGVuc2l0eSwgZnJvbUJlYXQpIHtcbiAgICB0aGlzLmxvb3BTdGFydGVkID0gdHJ1ZTtcblxuICAgIGNvbnN0IHdob2xlTm90ZUR1cmF0aW9uID0gKDQgKiA2MCkgLyBicG07XG5cbiAgICB0aGlzLmJlYXRJbmRleCA9IGZyb21CZWF0IDwgYmVhdHMubGVuZ3RoID8gZnJvbUJlYXQgOiAwO1xuICAgIHRoaXMucGxheUJlYXRBdCh0aGlzLmNvbnRleHRUaW1lKCksIGJlYXRzW3RoaXMuYmVhdEluZGV4XSwgYnBtKTtcblxuICAgIGxldCBuZXh0TG9vcFRpbWUgPSB0aGlzLmNvbnRleHRUaW1lKCkgKyBkZW5zaXR5ICogd2hvbGVOb3RlRHVyYXRpb247XG4gICAgdGhpcy5sb29wSW50ZXJ2YWxJRCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmNvbnRleHRUaW1lKCkgPiBuZXh0TG9vcFRpbWUgLSBkZW5zaXR5ICogd2hvbGVOb3RlRHVyYXRpb24pIHtcbiAgICAgICAgdGhpcy5iZWF0SW5kZXggKz0gMTtcbiAgICAgICAgaWYgKHRoaXMuYmVhdEluZGV4ID49IGJlYXRzLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuYmVhdEluZGV4ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGxheUJlYXRBdChuZXh0TG9vcFRpbWUsIGJlYXRzW3RoaXMuYmVhdEluZGV4XSwgYnBtKTtcbiAgICAgICAgbmV4dExvb3BUaW1lICs9IGRlbnNpdHkgKiB3aG9sZU5vdGVEdXJhdGlvbjtcbiAgICAgIH1cbiAgICB9LCAyMik7XG4gIH1cblxuICBzdG9wUGxheUxvb3AoKSB7XG4gICAgdGhpcy5sb29wU3RhcnRlZCA9IGZhbHNlO1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5sb29wSW50ZXJ2YWxJRCk7XG4gICAgdGhpcy5jYW5jZWxRdWV1ZSgpO1xuICB9XG5cbiAgZ2V0VHJhY2tTdGF0ZShrZXkpIHtcbiAgICBpZiAoIXRoaXMudHJhY2tTdGF0ZS5oYXMoa2V5KSkge1xuICAgICAgdGhpcy50cmFja1N0YXRlLnNldChrZXksIHtcbiAgICAgICAgbXV0ZWQ6IGZhbHNlLFxuICAgICAgICBzb2xvOiBmYWxzZSxcbiAgICAgICAgdm9sdW1lOiAxLFxuICAgICAgICByZXZlcmJTZW5kOiAwLFxuICAgICAgICBkZWxheVNlbmQ6IDAsXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudHJhY2tTdGF0ZS5nZXQoa2V5KTtcbiAgfVxuXG4gIGFwcGx5VHJhY2tTdGF0ZShrZXkpIHtcbiAgICBjb25zdCBub2RlcyA9IHRoaXMuZ2V0VHJhY2tOb2RlcyhrZXkpO1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRUcmFja1N0YXRlKGtleSk7XG4gICAgbm9kZXMuc3RhdGUgPSBzdGF0ZTtcbiAgICBub2Rlcy5kcnkuZ2Fpbi52YWx1ZSA9IHN0YXRlLm11dGVkID8gMCA6IHN0YXRlLnZvbHVtZTtcbiAgICBub2Rlcy5yZXZlcmJTZW5kLmdhaW4udmFsdWUgPSBzdGF0ZS5yZXZlcmJTZW5kO1xuICAgIG5vZGVzLmRlbGF5U2VuZC5nYWluLnZhbHVlID0gc3RhdGUuZGVsYXlTZW5kO1xuICB9XG5cbiAgZ2V0VHJhY2tOb2RlcyhrZXkpIHtcbiAgICBpZiAodGhpcy50cmFja05vZGVzLmhhcyhrZXkpKSB7XG4gICAgICByZXR1cm4gdGhpcy50cmFja05vZGVzLmdldChrZXkpO1xuICAgIH1cblxuICAgIGNvbnN0IGRyeSA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgICBjb25zdCByZXZlcmJTZW5kID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgIGNvbnN0IGRlbGF5U2VuZCA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKTtcblxuICAgIGRyeS5nYWluLnZhbHVlID0gMTtcbiAgICByZXZlcmJTZW5kLmdhaW4udmFsdWUgPSAwO1xuICAgIGRlbGF5U2VuZC5nYWluLnZhbHVlID0gMDtcblxuICAgIGRyeS5jb25uZWN0KHRoaXMuZXF1YWxpemVyLmlucHV0KTtcbiAgICByZXZlcmJTZW5kLmNvbm5lY3QodGhpcy5lY2hvLmlucHV0KTtcbiAgICBkZWxheVNlbmQuY29ubmVjdCh0aGlzLmRlbGF5SW5wdXQpO1xuXG4gICAgY29uc3Qgbm9kZXMgPSB7IGRyeSwgcmV2ZXJiU2VuZCwgZGVsYXlTZW5kIH07XG4gICAgdGhpcy50cmFja05vZGVzLnNldChrZXksIG5vZGVzKTtcbiAgICB0aGlzLmFwcGx5VHJhY2tTdGF0ZShrZXkpO1xuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHNldE11dGUoa2V5LCB2YWx1ZSkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRUcmFja1N0YXRlKGtleSk7XG4gICAgc3RhdGUubXV0ZWQgPSBCb29sZWFuKHZhbHVlKTtcbiAgICB0aGlzLmFwcGx5VHJhY2tTdGF0ZShrZXkpO1xuICB9XG5cbiAgc2V0U29sbyhrZXksIHZhbHVlKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFRyYWNrU3RhdGUoa2V5KTtcbiAgICBzdGF0ZS5zb2xvID0gQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBzZXRWb2x1bWUoa2V5LCB2YWx1ZSkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRUcmFja1N0YXRlKGtleSk7XG4gICAgc3RhdGUudm9sdW1lID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdmFsdWUpKTtcbiAgICB0aGlzLmFwcGx5VHJhY2tTdGF0ZShrZXkpO1xuICB9XG5cbiAgc2V0UmV2ZXJiU2VuZChrZXksIHZhbHVlKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFRyYWNrU3RhdGUoa2V5KTtcbiAgICBzdGF0ZS5yZXZlcmJTZW5kID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdmFsdWUpKTtcbiAgICB0aGlzLmFwcGx5VHJhY2tTdGF0ZShrZXkpO1xuICB9XG5cbiAgc2V0RGVsYXlTZW5kKGtleSwgdmFsdWUpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0VHJhY2tTdGF0ZShrZXkpO1xuICAgIHN0YXRlLmRlbGF5U2VuZCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHZhbHVlKSk7XG4gICAgdGhpcy5hcHBseVRyYWNrU3RhdGUoa2V5KTtcbiAgfVxuXG4gIHNldERlbGF5RmVlZGJhY2sodmFsdWUpIHtcbiAgICB0aGlzLmRlbGF5RmVlZGJhY2suZ2Fpbi52YWx1ZSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDAuNzUsIHZhbHVlKSk7XG4gIH1cblxuICBzZXREZWxheVRpbWUodmFsdWUpIHtcbiAgICB0aGlzLmRlbGF5RGl2aXNpb24gPSBNYXRoLm1heCgwLjEyNSwgTWF0aC5taW4oMC43NSwgdmFsdWUpKTtcbiAgICB0aGlzLnVwZGF0ZURlbGF5VGltZSgpO1xuICB9XG5cbiAgdXBkYXRlRGVsYXlUaW1lKCkge1xuICAgIGNvbnN0IHdob2xlID0gKDQgKiA2MCkgLyAodGhpcy5icG0gfHwgMTI3KTtcbiAgICB0aGlzLmRlbGF5LmRlbGF5VGltZS52YWx1ZSA9IHdob2xlICogdGhpcy5kZWxheURpdmlzaW9uO1xuICB9XG5cbiAgZ2V0VHJhY2tLZXlzKCkge1xuICAgIHJldHVybiBbLi4udGhpcy50cmFja05vZGVzLmtleXMoKV07XG4gIH1cblxuICBjYW5jZWxRdWV1ZSgpIHtcbiAgICB0aGlzLnBsYXllci5jYW5jZWxRdWV1ZSh0aGlzLmF1ZGlvQ29udGV4dCk7XG4gIH1cblxuICBjYWNoZUluc3RydW1lbnQoaW5mbykge1xuICAgIGlmIChpbmZvICYmICF3aW5kb3dbaW5mby52YXJpYWJsZV0pIHtcbiAgICAgIGlmICh3aW5kb3dbaW5mby52YXJpYWJsZSArIDEyN10pIHJldHVybjtcbiAgICAgIHdpbmRvd1tpbmZvLnZhcmlhYmxlICsgMTI3XSA9IHRydWU7XG4gICAgICB0aGlzLnBsYXllci5sb2FkZXIuc3RhcnRMb2FkKHRoaXMuYXVkaW9Db250ZXh0LCBpbmZvLnVybCwgaW5mby52YXJpYWJsZSk7XG4gICAgICB0aGlzLnBsYXllci5sb2FkZXIud2FpdExvYWQoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnY2FjaGVkJywgaW5mby50aXRsZSk7XG4gICAgICAgIGRlbGV0ZSB3aW5kb3dbaW5mby52YXJpYWJsZSArIDEyN107XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwbGF5RHJ1bSh3aGVuLCBkcnVtLCBub2Rlcykge1xuICAgIGNvbnN0IFtpbnN0cnVtZW50LCBsZXZlbF0gPSBkcnVtO1xuICAgIGNvbnN0IGluZm8gPSB0aGlzLnBsYXllci5sb2FkZXIuZHJ1bUluZm8oaW5zdHJ1bWVudCk7XG5cbiAgICBpZiAod2luZG93W2luZm8udmFyaWFibGVdKSB7XG4gICAgICBjb25zdCBwaXRjaCA9IHdpbmRvd1tpbmZvLnZhcmlhYmxlXS56b25lc1swXS5rZXlSYW5nZUxvdztcbiAgICAgIGNvbnN0IGdhaW4gPSAoMSAvIDEyNykgKiBsZXZlbDtcbiAgICAgIGlmIChsZXZlbCA+IDApIHRoaXMucXVldWVUb1RyYWNrTm9kZXMod2luZG93W2luZm8udmFyaWFibGVdLCB3aGVuLCBwaXRjaCwgMSAvIDY0LCBnYWluLCBub2Rlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2FjaGVJbnN0cnVtZW50KGluZm8pO1xuICAgIH1cbiAgfVxuXG4gIHF1ZXVlVG9UcmFja05vZGVzKGZvbnQsIHdoZW4sIHBpdGNoLCBkdXJhdGlvbiwgZ2Fpbiwgbm9kZXMpIHtcbiAgICB0aGlzLnBsYXllci5xdWV1ZVdhdmVUYWJsZSh0aGlzLmF1ZGlvQ29udGV4dCwgbm9kZXMuZHJ5LCBmb250LCB3aGVuLCBwaXRjaCwgZHVyYXRpb24sIGdhaW4pO1xuICAgIGlmIChub2Rlcy5yZXZlcmJTZW5kLmdhaW4udmFsdWUgPiAwKSB7XG4gICAgICB0aGlzLnBsYXllci5xdWV1ZVdhdmVUYWJsZSh0aGlzLmF1ZGlvQ29udGV4dCwgbm9kZXMucmV2ZXJiU2VuZCwgZm9udCwgd2hlbiwgcGl0Y2gsIGR1cmF0aW9uLCBnYWluKTtcbiAgICB9XG4gICAgaWYgKG5vZGVzLmRlbGF5U2VuZC5nYWluLnZhbHVlID4gMCkge1xuICAgICAgdGhpcy5wbGF5ZXIucXVldWVXYXZlVGFibGUodGhpcy5hdWRpb0NvbnRleHQsIG5vZGVzLmRlbGF5U2VuZCwgZm9udCwgd2hlbiwgcGl0Y2gsIGR1cmF0aW9uLCBnYWluKTtcbiAgICB9XG4gIH1cblxuICBwbGF5QmVhdEF0KHdoZW4sIGJlYXQsIGJwbSkge1xuICAgIGlmICghYmVhdCkgcmV0dXJuO1xuICAgIGNvbnN0IE4gPSAoNCAqIDYwKSAvIGJwbTtcbiAgICBjb25zdCBoYXNTb2xvID0gWy4uLnRoaXMudHJhY2tTdGF0ZS52YWx1ZXMoKV0uc29tZShpdGVtID0+IGl0ZW0uc29sbyk7XG5cbiAgICBiZWF0LmZvckVhY2goKHNsb3QsIGtleSkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFRyYWNrU3RhdGUoa2V5KTtcbiAgICAgIGlmIChzdGF0ZS5tdXRlZCkgcmV0dXJuO1xuICAgICAgaWYgKGhhc1NvbG8gJiYgIXN0YXRlLnNvbG8pIHJldHVybjtcblxuICAgICAgY29uc3Qgbm9kZXMgPSB0aGlzLmdldFRyYWNrTm9kZXMoa2V5KTtcbiAgICAgIGxldCB0b3VjaGVkID0gZmFsc2U7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xvdC5kcnVtcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB0aGlzLnBsYXlEcnVtKHdoZW4sIHNsb3QuZHJ1bXNbaV0sIG5vZGVzKTtcbiAgICAgICAgdG91Y2hlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHNsb3Qubm90ZXMuZm9yRWFjaChub3RlID0+IHtcbiAgICAgICAgY29uc3QgW2luc3RydW1lbnQsIHBpdGNoZXMsIGR1cmF0aW9uLCBsZXZlbF0gPSBub3RlO1xuICAgICAgICBjb25zdCBpbmZvID0gdGhpcy5wbGF5ZXIubG9hZGVyLmluc3RydW1lbnRJbmZvKGluc3RydW1lbnQpO1xuICAgICAgICBpZiAod2luZG93W2luZm8udmFyaWFibGVdKSB7XG4gICAgICAgICAgdGhpcy5xdWV1ZVRvVHJhY2tOb2Rlcyh3aW5kb3dbaW5mby52YXJpYWJsZV0sIHdoZW4sIHBpdGNoZXMsIGR1cmF0aW9uICogTiwgKDEgLyAxMjcpICogbGV2ZWwsIG5vZGVzKTtcbiAgICAgICAgICB0b3VjaGVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNhY2hlSW5zdHJ1bWVudChpbmZvKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0b3VjaGVkICYmIHR5cGVvZiB0aGlzLm9uQmVhdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLm9uQmVhdChrZXksIHdoZW4pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCAiLyoqXG4gKiBUYWtlIGEgc3RyaW5nIGlucHV0IGFuZCBjaGVjayBpZiBpdCBzIGEgbm90ZSBuYW1lIG9yIG5vdFxuICogQHBhcmFtICB7U3RyaW5nfSBzdHIgTm90ZSBuYW1lIGUuZy4gYzRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IFJldHVybiB0cnVlIGZvciBjNCBvciByZXR1cm4gZmFsc2UgZm9yIHNvbWV0aGluZyBsaWtlIENNXG4gKi9cbmV4cG9ydCBjb25zdCBpc05vdGUgPSAoc3RyOiBzdHJpbmcpOiBib29sZWFuID0+XG4gIC9eW2EtZ0EtR10oPzojfGIpP1xcZCQvLnRlc3Qoc3RyKTtcblxuLyoqXG4gKiBUYWtlIGEgU3RyaW5nIGlucHV0IHN1Y2ggYXMgeHh4W3h4W3h4XV1cbiAqIGFuZCByZXR1cm4gYW4gQXJyYXkgYXMgWyd4JywgJ3gnLCAneCcsIFsneCcsICd4JywgWyd4JywgJ3gnXV1dXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbmV4cG9ydCBjb25zdCBleHBhbmRTdHIgPSAoc3RyOiBzdHJpbmcpOiBhbnkgPT4ge1xuICBzdHIgPSBKU09OLnN0cmluZ2lmeShzdHIuc3BsaXQoJycpKTtcbiAgc3RyID0gc3RyLnJlcGxhY2UoLyxcIlxcW1wiLC9nLCAnLCBbJyk7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKC9cIlxcW1wiLC9nLCAnWycpO1xuICBzdHIgPSBzdHIucmVwbGFjZSgvLFwiXFxdXCIvZywgJ10nKTtcbiAgcmV0dXJuIEpTT04ucGFyc2Uoc3RyKTtcbn07XG5cbi8qKlxuICogQmFzaWMgQXJyYXkgcmFuZG9taXplclxuICogQHBhcmFtICB7QXJyYXl9IGFyclxuICogQHBhcmFtICB7Ym9vbGVhbn0gZnVsbFNodWZmbGUgRW5zdXJlIG5vIGVsZW1lbnRzIHJlbWFpbiBpbiBvbGQgcGxhY2VcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5leHBvcnQgY29uc3Qgc2h1ZmZsZSA9IChhcnI6IGFueVtdLCBmdWxsU2h1ZmZsZTogYm9vbGVhbiA9IHRydWUpOiBzdHJpbmdbXSA9PiB7XG4gIGNvbnN0IGxhc3RJbmRleDogbnVtYmVyID0gYXJyLmxlbmd0aCAtIDE7XG5cbiAgLy8gU2h1ZmZsZSBhbGdvcml0aG0gYnkgUmljaGFyZCBEdXJzdGVuZmVsZCAoRG9uYWxkIEUuIEtudXRoKSwgYWxzbyBSb25hbGQgRmlzaGVyIGFuZCBGcmFuayBZYXRlcy5cbiAgLy8gXCJGdWxsIFNodWZmbGVcIiBNb2RpZmljYXRpb24gdG8gZW5zdXJlIG5vIGVsZW1lbnRzIHJlbWFpbiBpbiB0aGVpciBvcmlnaW5hbCBwbGFjZSAoYnkgdGFraW5nIGVhY2ggZWxlbWVudCBvbmNlXG4gIC8vIGFuZCBzd2FwcGluZyB3aXRoIGFueSByZW1haW5pbmcgZWxlbWVudHMpXG4gIGFyci5mb3JFYWNoKChlbCwgaWR4OiBudW1iZXIpID0+IHtcbiAgICBpZiAoaWR4ID49IGxhc3RJbmRleCkge1xuICAgICAgLy8gTm8gc2h1ZmZsaW5nIGxhc3QgZWxlbWVudFxuICAgICAgLy8gT25lIGJlZm9yZSBsYXN0IGlzIGFsd2F5cyBzd2FwcGVkIHdpdGggbGFzdCBhdCB0aGUgZW5kIG9mIHRoZSBsb29wXG4gICAgICAvLyBTaW5jZSBwcmV2aW91cyBzd2FwcyBjYW4gbW92ZSBsYXN0IGVsZW1lbnQgaW50byBvdGhlciBwbGFjZXMsIHRoZXJlIGlzIHN0aWxsIGEgcmFuZG9tIHNodWZmbGUgb2YgbGFzdCBlbGVtZW50XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFN3YXAgZWwgd2l0aCBvbmUgb2YgdGhlIGhpZ2hlciBlbGVtZW50cyByYW5kb21seVxuICAgIGxldCBybmQ7XG4gICAgcm5kID0gZnVsbFNodWZmbGVcbiAgICAgID8gLy8gUGljayByYW5kb20gbnVtYmVyIGZyb20gaWR4KzEgdG8gbGFzdEluZGV4IChNb2RpZmllZCBhbGdvcml0aG0sIChOLTEpISBjb21iaW5hdGlvbnMpXG4gICAgICAgIC8vIE1hdGgucmFuZG9tIC0+IFswLCAxKSAtPiBbMCwgbGFzdEluZGV4LWlkeCApIC0tZmxvb3ItPiBbMCwgbGFzdEluZGV4LWlkeC0xXVxuICAgICAgICAvLyBybmQgPSBbMCwgbGFzdEluZGV4LWlkeC0xXSArIDEgKyBpZHggPSBbMSArIGlkeCwgbGFzdEluZGV4XVxuICAgICAgICAvLyAoT3JpZ2luYWwgYWxnb3JpdGhtIHdvdWxkIHBpY2sgcm5kID0gW2lkeCwgbGFzdEluZGV4XSwgdGh1cyBhbnkgZWxlbWVudCBjb3VsZCBhcnJpdmUgYmFjayBpbnRvIGl0cyBzbG90KVxuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobGFzdEluZGV4IC0gaWR4KSkgKyAxICsgaWR4XG4gICAgICA6IC8vIFBpY2sgcmFuZG9tIG51bWJlciBmcm9tIGlkeCB0byBsYXN0SW5kZXggKFVubW9kaWZpZWQgUmljaGFyZCBEdXJzdGVuZmVsZCwgTiEgY29tYmluYXRpb25zKVxuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobGFzdEluZGV4ICsgMSAtIGlkeCkpICsgaWR4O1xuICAgIGFycltpZHhdID0gYXJyW3JuZF07XG4gICAgYXJyW3JuZF0gPSBlbDtcbiAgfSk7XG5cbiAgcmV0dXJuIGFycjtcbn07XG5cbi8qKlxuICogUmV0dXJuIGFuIGFycmF5IG9mIG51bWJlcnMgcmVsYXRpdmUgdG8gbWF4TGV2ZWwgfHwgMTI3IG9yZGVyZWQgaW4gYSBTaW5lIHdhdmUgZm9ybWF0XG4gKiBUaGlzIGlzIHVzZWQgYnkgdGhlIGBzaXp6bGVgIHBhcmFtIG9mIHRoZSBgY2xpcGAgbWV0aG9kIHRvIGFkZCBhIHJ1ZGltZW50YXJ5IHZhcmlhdGlvbiB0byB0aGUgYWNjZW50IG9mIGVhY2ggbm90ZVxuICogQHBhcmFtIHtOdW1iZXJ9IG1heExldmVsIEEgbnVtYmVyIGJldHdlZW4gbm90IG1vcmUgdGhhbiAxMjdcbiAqIEByZXR1cm4ge0FycmF5fSAgRXhhbXBsZSBvdXRwdXQgWzYzLCA5MCwgMTEwLCAxMjcsIDExMCwgOTAsIDYzLCAwLCA2MywgOTAsIDExMCwgMTI3LCAxMTAsIDkwLCA2MywgMF1cbiAqL1xuZXhwb3J0IGNvbnN0IHNpenpsZU1hcCA9IChtYXhMZXZlbDogbnVtYmVyID0gMTI3KTogbnVtYmVyW10gPT4ge1xuICBjb25zdCBwaSA9IE1hdGguUEk7XG4gIGNvbnN0IHBpQXJyOiBudW1iZXJbXSA9IFtcbiAgICBwaSAvIDYsXG4gICAgcGkgLyA0LFxuICAgIHBpIC8gMyxcbiAgICBwaSAvIDIsXG4gICAgKDIgKiBwaSkgLyAzLFxuICAgICgzICogcGkpIC8gNCxcbiAgICAoNSAqIHBpKSAvIDYsXG4gICAgcGksXG4gIF07XG4gIGNvbnN0IHBpQXJyUmV2OiBudW1iZXJbXSA9IFtcbiAgICAwLFxuICAgIHBpIC8gNixcbiAgICBwaSAvIDQsXG4gICAgcGkgLyAzLFxuICAgIHBpIC8gMixcbiAgICAoMiAqIHBpKSAvIDMsXG4gICAgKDMgKiBwaSkgLyA0LFxuICAgICg1ICogcGkpIC8gNixcbiAgXTtcbiAgcGlBcnJSZXYucmV2ZXJzZSgpO1xuICBjb25zdCBhcnI6IG51bWJlcltdID0gcGlBcnIuY29uY2F0KHBpQXJyUmV2KTtcbiAgcmV0dXJuIGFyci5tYXAoZWxlbWVudCA9PiBNYXRoLnJvdW5kKE1hdGguc2luKGVsZW1lbnQpICogbWF4TGV2ZWwpKTtcbn07XG5cbi8qKlxuICogUGljayBvbmUgaXRlbSByYW5kb21seSBmcm9tIGFuIGFycmF5IGFuZCByZXR1cm4gaXRcbiAqIEBwYXJhbSBhcnJcbiAqL1xuZXhwb3J0IGNvbnN0IHBpY2tPbmUgPSAoYXJyOiBhbnlbXSkgPT5cbiAgYXJyLmxlbmd0aCA+IDEgPyBhcnJbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV0gOiBhcnJbMF07XG5cbi8qKlxuICogQm9vbGVhbiBnZW5lcmF0b3JcbiAqL1xuZXhwb3J0IGNvbnN0IGRpY2UgPSAoKSA9PiAhIU1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG5cbi8qKlxuICogUG9seWZpbGwgZm9yIEFycmF5LnByb3RvdHlwZS5mbGF0XG4gKi9cbmV4cG9ydCBjb25zdCBmbGF0ID0gKGFycjogYW55W11bXSkgPT5cbiAgYXJyLnJlZHVjZSgoYWNjLCB2YWwpID0+IGFjYy5jb25jYXQodmFsKSwgW10pO1xuIiwgImltcG9ydCB7IHNjYWxlIH0gZnJvbSAnaGFybW9uaWNzJztcbmltcG9ydCB7IHBpY2tPbmUsIGRpY2UgfSBmcm9tICcuL3V0aWxzJztcblxuLyoqXG4gKiBHZXQgdGhlIGNob3JkcyB0aGF0IGdvIHdpdGggYSBnaXZlbiBzY2FsZS9tb2RlXG4gKiBUaGlzIGlzIHVzZWZ1bCBvbmx5IGluIGNhc2UgeW91IHdhbnQgdG8gY2hlY2sgd2hhdCBjaG9yZHMgd29yayB3aXRoIGEgc2NhbGUvbW9kZVxuICogc28gdGhhdCB5b3UgY2FuIGNvbWUgdXAgd2l0aCBjaG9yZCBwcm9ncmVzc2lvbnNcbiAqIEBwYXJhbSAge1N0cmluZ30gbW9kZSBlLmcuIG1ham9yXG4gKiBAcmV0dXJuIHtBcnJheX0gZS5nLlsnSScsICdpaScsICdpaWknLCAnSVYnLCAnVicsICd2aScsICd2aWlcdTAwQjAnXVxuICovXG5leHBvcnQgY29uc3QgZ2V0Q2hvcmREZWdyZWVzID0gKG1vZGU6IHN0cmluZykgPT4ge1xuICBjb25zdCB0aGVSb21hbnM6IE5WUDxzdHJpbmdbXT4gPSB7XG4gICAgaW9uaWFuOiBbJ0knLCAnaWknLCAnaWlpJywgJ0lWJywgJ1YnLCAndmknLCAndmlpXHUwMEIwJ10sXG4gICAgZG9yaWFuOiBbJ2knLCAnaWknLCAnSUlJJywgJ0lWJywgJ3YnLCAndmlcdTAwQjAnLCAnVklJJ10sXG4gICAgcGhyeWdpYW46IFsnaScsICdJSScsICdJSUknLCAnaXYnLCAndlx1MDBCMCcsICdWSScsICd2aWknXSxcbiAgICBseWRpYW46IFsnSScsICdJSScsICdpaWknLCAnaXZcdTAwQjAnLCAnVicsICd2aScsICd2aWknXSxcbiAgICBtaXhvbHlkaWFuOiBbJ0knLCAnaWknLCAnaWlpXHUwMEIwJywgJ0lWJywgJ3YnLCAndmknLCAnVklJJ10sXG4gICAgYWVvbGlhbjogWydpJywgJ2lpXHUwMEIwJywgJ0lJSScsICdpdicsICd2JywgJ1ZJJywgJ1ZJSSddLFxuICAgIGxvY3JpYW46IFsnaVx1MDBCMCcsICdJSScsICdpaWknLCAnaXYnLCAnVicsICdWSScsICd2aWknXSxcbiAgICAnbWVsb2RpYyBtaW5vcic6IFsnaScsICdpaScsICdJSUkrJywgJ0lWJywgJ1YnLCAndmlcdTAwQjAnLCAndmlpXHUwMEIwJ10sXG4gICAgJ2hhcm1vbmljIG1pbm9yJzogWydpJywgJ2lpXHUwMEIwJywgJ0lJSSsnLCAnaXYnLCAnVicsICdWSScsICd2aWlcdTAwQjAnXSxcbiAgfTtcbiAgdGhlUm9tYW5zLm1ham9yID0gdGhlUm9tYW5zLmlvbmlhbjtcbiAgdGhlUm9tYW5zLm1pbm9yID0gdGhlUm9tYW5zLmFlb2xpYW47XG5cbiAgcmV0dXJuIHRoZVJvbWFuc1ttb2RlXSB8fCBbXTtcbn07XG5cbmNvbnN0IGlkeEJ5RGVncmVlOiBOVlA8bnVtYmVyPiA9IHtcbiAgaTogMCxcbiAgaWk6IDEsXG4gIGlpaTogMixcbiAgaXY6IDMsXG4gIHY6IDQsXG4gIHZpOiA1LFxuICB2aWk6IDYsXG59O1xuXG4vKipcbiAqIEdldCBhIGNob3JkIG5hbWUgZnJvbSBkZWdyZWVcbiAqIEBwYXJhbSAge1N0cmluZ30gcm9tYW4gZS5nLiBpaSBPUiBpaVx1MDBCMCBPUiBWN1xuICogQHJldHVybiB7U3RyaW5nfSBlLmcuIG0gT1IgbTdiNSBPUiBNYWo3XG4gKi9cbmNvbnN0IGdldENob3JkTmFtZSA9IChyb21hbjogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgLy8gcmVtb3ZlIGFueSBub24gY2hhcmFjdGVyXG4gIGNvbnN0IHN0ciA9IHJvbWFuLnJlcGxhY2UoL1xcVy9nLCAnJyk7XG4gIGxldCBwcmVmaXggPSAnTSc7XG4gIC8vIGNoZWNrIGlmIGl0IHMgbG93ZXJjYXNlXG4gIGlmIChzdHIudG9Mb3dlckNhc2UoKSA9PT0gc3RyKSB7XG4gICAgcHJlZml4ID0gJ20nO1xuICB9XG4gIGlmIChyb21hbi5pbmRleE9mKCdcdTAwQjAnKSA+IC0xKSB7XG4gICAgcmV0dXJuIHByZWZpeCArICc3YjUnO1xuICB9XG4gIGlmIChyb21hbi5pbmRleE9mKCcrJykgPiAtMSkge1xuICAgIHJldHVybiBwcmVmaXggKyAnIzUnO1xuICB9XG5cbiAgaWYgKHJvbWFuLmluZGV4T2YoJzcnKSA+IC0xKSB7XG4gICAgcmV0dXJuIHByZWZpeCA9PT0gJ00nID8gJ21hajcnIDogJ203JztcbiAgfVxuXG4gIHJldHVybiBwcmVmaXg7XG59O1xuXG4vKipcbiAqIFRha2UgdGhlIHNwZWNpZmllZCBzY2FsZSBhbmQgZGVncmVlcyBhbmQgcmV0dXJuIHRoZSBjaG9yZCBuYW1lcyBmb3IgdGhlbVxuICogVGhlc2UgY2FuIGJlIHVzZWQgYXMgdGhlIHZhbHVlIGZvciB0aGUgYG5vdGVzYCBwYXJhbSBvZiB0aGUgYGNsaXBgIG1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IG5vdGVPY3RhdmVTY2FsZSBlLmcuICdDNCBtYWpvcidcbiAqIEBwYXJhbSAge1N0cmluZ30gY2hvcmREZWdyZXNzIGUuZy4gJ0kgSVYgViBJVidcbiAqIEByZXR1cm4ge1N0cmluZ30gZS5nLiAnQ00gRk0gR00gRk0nXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRDaG9yZHNCeVByb2dyZXNzaW9uID0gKFxuICBub3RlT2N0YXZlU2NhbGU6IHN0cmluZyxcbiAgY2hvcmREZWdyZXNzOiBzdHJpbmdcbik6IHN0cmluZyA9PiB7XG4gIC8vIFNldCB0aGUgb2N0YXZlIGlmIG1pc3NpbmdcbiAgLy8gRm9yIGV4YW1wbGUgaWYgdGhlIG1ldGhvZCB3YXMgY2FsbGVkIHdpdGggYEMgbWFqb3JgIGluc3RlYWQgb2YgYEM0IG1ham9yYCwgdGhlbiBhZGQgdGhlIDRcbiAgY29uc3Qgbm90ZU9jdGF2ZVNjYWxlQXJyID0gbm90ZU9jdGF2ZVNjYWxlLnNwbGl0KCcgJyk7XG4gIGlmICghbm90ZU9jdGF2ZVNjYWxlQXJyWzBdLm1hdGNoKC9cXGQvKSkge1xuICAgIG5vdGVPY3RhdmVTY2FsZUFyclswXSArPSAnNCc7XG4gICAgbm90ZU9jdGF2ZVNjYWxlID0gbm90ZU9jdGF2ZVNjYWxlQXJyLmpvaW4oJyAnKTtcbiAgfVxuXG4gIC8vIEdldCB0aGUgc2NhbGUgZnJvbSB0aGUgZ2l2ZW4gbm90ZSBhbmQgc2NhbGUvbW9kZSBjb21iaW5hdGlvblxuICBjb25zdCBtb2RlID0gc2NhbGUobm90ZU9jdGF2ZVNjYWxlKTtcbiAgY29uc3QgY2hvcmREZWdyZWVzQXJyID0gY2hvcmREZWdyZXNzLnJlcGxhY2UoL1xccyosK1xccyovZywgJyAnKS5zcGxpdCgnICcpO1xuICAvLyBOb3cgd2UgaGF2ZSBzb21ldGhpbmcgbGlrZSBbJ2knLCAnaWknLCAnSVYnXVxuICAvLyBDb252ZXJ0IGl0IHRvIGEgY2hvcmQgZmFtaWx5IHN1Y2ggYXMgWydDbScsICdEbScsICdGTSddXG4gIGNvbnN0IGNob3JkRmFtaWx5ID0gY2hvcmREZWdyZWVzQXJyLm1hcCgocm9tYW4sIGlkeCkgPT4ge1xuICAgIGNvbnN0IGNob3JkTmFtZSA9IGdldENob3JkTmFtZShyb21hbik7IC8vIGUuZy4gbVxuICAgIC8vIGdldCB0aGUgaW5kZXggdG8gYmUgdXNlZCBieSByZW1vdmluZyBhbnkgZGlnaXQgb3Igbm9uIGFscGhhYmV0IGNoYXJhY3RlclxuICAgIGNvbnN0IHNjYWxlSWQgPSBpZHhCeURlZ3JlZVtyb21hbi5yZXBsYWNlKC9cXFd8XFxkL2csICcnKS50b0xvd2VyQ2FzZSgpXTsgLy8gZS5nLiAwXG4gICAgLy8gZ2V0IHRoZSBub3RlIGl0c2VsZlxuICAgIGNvbnN0IG5vdGUgPSBtb2RlW3NjYWxlSWRdOyAvLyBlLmcuIENcbiAgICAvLyBnZXQgdGhlIG9jdGF2ZSBvZiB0aGUgbm90ZTtcbiAgICBjb25zdCBvY3QgPSBub3RlLnJlcGxhY2UoL1xcRCsvLCAnJyk7IC8vIGUuZy4gNFxuICAgIC8vIG5vdyBnZXQgdGhlIGNob3JkXG4gICAgcmV0dXJuIG5vdGUucmVwbGFjZSgvXFxkLywgJycpICsgY2hvcmROYW1lICsgJ18nICsgb2N0O1xuICB9KTtcblxuICByZXR1cm4gY2hvcmRGYW1pbHkudG9TdHJpbmcoKS5yZXBsYWNlKC8sL2csICcgJyk7XG59O1xuXG5jb25zdCBnZXRQcm9nRmFjdG9yeSA9ICh7IFQsIFAsIEQgfTogVFBEKSA9PiB7XG4gIHJldHVybiAoY291bnQ6IG51bWJlciA9IDQpID0+IHtcbiAgICBjb25zdCBjaG9yZHMgPSBbXTtcblxuICAgIC8vIFB1c2ggcm9vdC90b25pY1xuICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoVCkpO1xuXG4gICAgbGV0IGkgPSAxO1xuXG4gICAgLy8gUGljayBhIHByZWRvbWluYW50XG4gICAgaWYgKGkgPCBjb3VudCAtIDEpIHtcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoUCkpO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIC8vIFRyeSBhbm90aGVyIHByZWRvbWluYW50XG4gICAgaWYgKGkgPCBjb3VudCAtIDEgJiYgZGljZSgpKSB7XG4gICAgICBjaG9yZHMucHVzaChwaWNrT25lKFApKTtcbiAgICAgIGkrKztcbiAgICB9XG5cbiAgICAvLy8vLy8vLy8gNCBvciBtb3JlLy8vLy8vLy8vL1xuICAgIGlmIChpIDwgY291bnQgLSAxKSB7XG4gICAgICAvLyBQaWNrIGEgZG9taW5hbnRcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoRCkpO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIGlmIChpIDwgY291bnQgLSAxKSB7XG4gICAgICAvLyBQaWNrIGEgcHJlZG9taW5hbnRcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoUCkpO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIGlmIChpIDwgY291bnQgLSAxKSB7XG4gICAgICAvLyBQaWNrIGEgZG9taW5hbnRcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoRCkpO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIC8vIFBpY2sgYSBwcmVkb21pbmFudCBpZiBwb3NzaWJsZVxuICAgIGlmIChpIDwgY291bnQgLSAxICYmIGRpY2UoKSkge1xuICAgICAgY2hvcmRzLnB1c2gocGlja09uZShQKSk7XG4gICAgICBpKys7XG4gICAgfVxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIC8vIEZpbGwgdGhlIHJlc3Qgd2l0aCBkb21pbmFudFxuICAgIHdoaWxlIChpIDwgY291bnQpIHtcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoRCkpO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIHJldHVybiBjaG9yZHM7XG4gIH07XG59O1xuXG5jb25zdCBNID0gZ2V0UHJvZ0ZhY3RvcnkoeyBUOiBbJ0knLCAndmknXSwgUDogWydpaScsICdJViddLCBEOiBbJ1YnXSB9KTtcbmNvbnN0IG0gPSBnZXRQcm9nRmFjdG9yeSh7IFQ6IFsnaScsICdWSSddLCBQOiBbJ2lpJywgJ2l2J10sIEQ6IFsnViddIH0pO1xuXG4vKipcbiAqIEdlbmVyYXRlIGEgY2hvcmQgcHJvZ3Jlc3Npb24gYmFzZWQgb24gYmFzaWMgbXVzaWMgdGhlb3J5XG4gKiB3aGVyZSB3ZSBmb2xsb3cgdG9uaWMgdG8gb3B0aW9uYWxseSBwcmVkb21pbmFudCBhbmQgdGhlbiBkb21pbmFudFxuICogYW5kIHRoZW4gcmFuZG9tbHkgdG8gcHJlZG9taW5hbnQgYW5kIGNvbnRpbnVlIHRoaXMgdGlsbCB3ZSByZWFjaCBgY291bnRgXG4gKiBAcGFyYW0gc2NhbGVUeXBlIGUuZy4gTSAoZm9yIG1ham9yIGNob3JkIHByb2dyZXNzaW9uKSwgbSAoZm9yIG1pbm9yIGNob3JkIHByb2dyZXNzaW9uKVxuICogQHBhcmFtIGNvdW50IGUuZy4gNFxuICovXG5leHBvcnQgY29uc3QgcHJvZ3Jlc3Npb24gPSAoc2NhbGVUeXBlOiBwcm9ncmVzc2lvblNjYWxlLCBjb3VudDogbnVtYmVyID0gNCkgPT4ge1xuICBpZiAoc2NhbGVUeXBlID09PSAnbWFqb3InIHx8IHNjYWxlVHlwZSA9PT0gJ00nKSB7XG4gICAgcmV0dXJuIE0oY291bnQpO1xuICB9XG5cbiAgaWYgKHNjYWxlVHlwZSA9PT0gJ21pbm9yJyB8fCBzY2FsZVR5cGUgPT09ICdtJykge1xuICAgIHJldHVybiBtKGNvdW50KTtcbiAgfVxufTtcbiIsICJpbXBvcnQgeyBpbmxpbmVDaG9yZCB9IGZyb20gJ2hhcm1vbmljcyc7XG5cbmV4cG9ydCBjb25zdCBSRV9TRVBBUkFUT1IgPSAvXFx8LztcbmV4cG9ydCBjb25zdCBSRV9QQVRURVJOID0gL14oPzpbeF8tXXxcXFsuKz9cXF0pKyQvO1xuZXhwb3J0IGNvbnN0IFJFX05VTUJFUiA9IC9eKD86XFwuP1xcZCt8XFxkKyg/OlxcLlxcZCspPykkLztcbmV4cG9ydCBjb25zdCBSRV9DSE9SRCA9IC9eW2EtZ0EtR11bXiNcXHNdKlxcZCsoPzpcXC5cXC4pPyQvO1xuZXhwb3J0IGNvbnN0IFJFX05PVEUgPSAvXlthLWdBLUddWyNiXT9cXGQrJC87XG5leHBvcnQgY29uc3QgUkVfTU9ERSA9IC9eKD8hW2l2SVZdezEsM30pW2Etel17Mix9LztcbmV4cG9ydCBjb25zdCBSRV9QUk9HID0gL15baXZJVl17MSwzfVx1MDBCMD8kLztcbmV4cG9ydCBjb25zdCBSRV9UUklNID0gL1xcLiskLztcblxuY29uc3QgQ0FDSEUgPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0KHZhbHVlKSB7XG4gIGxldCBkYXRhID0gW107XG4gIHRyeSB7XG4gICAgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlLnNwbGl0KC8oPz1bXFxkW1xcXXhfLV0pLykpO1xuICAgIGRhdGEgPSBkYXRhLnJlcGxhY2UoLyxcIlxcW1wiLC9nLCAnLCBbJyk7XG4gICAgZGF0YSA9IGRhdGEucmVwbGFjZSgvXCJcXFtcIiwvZywgJ1snKTtcbiAgICBkYXRhID0gZGF0YS5yZXBsYWNlKC8sXCJcXF1cIi9nLCAnXScpO1xuICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gaWdub3JlXG4gIH1cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZXZlbCh2YWx1ZSkge1xuICBpZiAoIUNBQ0hFW3ZhbHVlXSkge1xuICAgIGlmICh2YWx1ZS5pbmNsdWRlcygnJScpKSB7XG4gICAgICBDQUNIRVt2YWx1ZV0gPSAxMjcgKiBwYXJzZUZsb2F0KGAuJHt2YWx1ZX1gKTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlLmluY2x1ZGVzKCcvJykpIHtcbiAgICAgIGNvbnN0IFthLCBiXSA9IHZhbHVlLnNwbGl0KCcvJyk7XG5cbiAgICAgIENBQ0hFW3ZhbHVlXSA9IGEgLyBiO1xuICAgIH0gZWxzZSBpZiAodmFsdWUuaW5jbHVkZXMoJyonKSkge1xuICAgICAgY29uc3QgW2EsIGJdID0gdmFsdWUuc3BsaXQoJyonKTtcblxuICAgICAgQ0FDSEVbdmFsdWVdID0gYSAqIGI7XG4gICAgfSBlbHNlIHtcbiAgICAgIENBQ0hFW3ZhbHVlXSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gQ0FDSEVbdmFsdWVdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGUocmUsIHZhbHVlKSB7XG4gIGlmICghQ0FDSEVbcmUuc291cmNlICsgdmFsdWVdKSB7XG4gICAgQ0FDSEVbcmUuc291cmNlICsgdmFsdWVdID0gcmUudGVzdCh2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIENBQ0hFW3JlLnNvdXJjZSArIHZhbHVlXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvZ3Jlc3Npb24odmFsdWUpIHtcbiAgcmV0dXJuIHZhbGlkYXRlKFJFX1BST0csIHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGF0dGVybih2YWx1ZSkge1xuICByZXR1cm4gdmFsaWRhdGUoUkVfUEFUVEVSTiwgdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgcmV0dXJuIHZhbGlkYXRlKFJFX05VTUJFUiwgdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDaG9yZCh2YWx1ZSkge1xuICByZXR1cm4gdmFsaWRhdGUoUkVfQ0hPUkQsIHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTm90ZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsaWRhdGUoUkVfTk9URSwgdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNNb2RlKHZhbHVlKSB7XG4gIHJldHVybiB2YWxpZGF0ZShSRV9NT0RFLCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUeXBlKHZhbHVlKSB7XG4gIGNvbnN0IGtleSA9IGBUJHt2YWx1ZX1gO1xuICBpZiAoIUNBQ0hFW2tleV0pIHtcbiAgICBpZiAoaXNOb3RlKHZhbHVlKSkgQ0FDSEVba2V5XSA9ICdub3RlJztcbiAgICBlbHNlIGlmIChpc0Nob3JkKHZhbHVlKSkgQ0FDSEVba2V5XSA9ICdjaG9yZCc7XG4gICAgZWxzZSBpZiAoaXNQYXR0ZXJuKHZhbHVlKSkgQ0FDSEVba2V5XSA9ICdwYXR0ZXJuJztcbiAgICBlbHNlIGlmIChpc01vZGUodmFsdWUpKSBDQUNIRVtrZXldID0gJ21vZGUnO1xuICAgIGVsc2UgaWYgKGlzTnVtYmVyKHZhbHVlKSkgQ0FDSEVba2V5XSA9ICdudW1iZXInO1xuICAgIGVsc2UgQ0FDSEVba2V5XSA9ICd2YWx1ZSc7XG4gIH1cbiAgcmV0dXJuIENBQ0hFW2tleV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm0oZXhwcmVzc2lvbikge1xuICBpZiAoIWV4cHJlc3Npb24gfHwgdHlwZW9mIGV4cHJlc3Npb24gIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RpbmcgYSB2YWxpZCBzdHJpbmcsIGdpdmVuICcke2V4cHJlc3Npb259J2ApO1xuICB9XG5cbiAgaWYgKENBQ0hFW2AkJHtleHByZXNzaW9ufWBdKSByZXR1cm4gQ0FDSEVbYCQke2V4cHJlc3Npb259YF07XG5cbiAgY29uc3QgdG9rZW5zID0gZXhwcmVzc2lvbi5zcGxpdCgvXFxzKy8pO1xuXG4gIGlmICghdG9rZW5zLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0aW5nIGEgdmFsaWQgZXhwcmVzc2lvbiwgZ2l2ZW4gJyR7ZXhwcmVzc2lvbn0nYCk7XG4gIH1cblxuICBjb25zdCBhc3QgPSBbXTtcbiAgY29uc3QgY2FycnkgPSBbXTtcblxuICBmdW5jdGlvbiBhZGQodHlwZSwgdmFsdWUpIHtcbiAgICBjb25zdCBpdGVtID0geyB0eXBlLCB2YWx1ZSB9O1xuXG4gICAgaWYgKHR5cGUgPT09ICdudW1iZXInICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGl0ZW0udmFsdWUgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gbGV2ZWwodmFsdWUpIDogdmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09ICdjaG9yZCcgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgaXRlbS52YWx1ZSA9IGlubGluZUNob3JkKHZhbHVlLnJlcGxhY2UoUkVfVFJJTSwgJycpKTtcblxuICAgICAgaWYgKHZhbHVlLmluY2x1ZGVzKCcuLicpKSB7XG4gICAgICAgIGl0ZW0udW5mb2xkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gJ3ZhbHVlJyAmJiB2YWx1ZS5pbmRleE9mKCd4JykgPiAtMSkge1xuICAgICAgY29uc3QgeCA9IHZhbHVlLnNwbGl0KCd4Jyk7XG5cbiAgICAgIGlmICghKGlzTnVtYmVyKHhbMF0pICYmIGlzTnVtYmVyKHhbMV0pKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGluZyB2YWxpZCBudW1iZXJzIGZvciAke3R5cGV9LCBnaXZlbiAnJHt2YWx1ZX0nYCk7XG4gICAgICB9XG5cbiAgICAgIGl0ZW0udmFsdWUgPSBwYXJzZUludCh4WzBdLCAxMCk7XG4gICAgICBpdGVtLnJlcGVhdCA9IHBhcnNlSW50KHhbMV0sIDEwKTtcbiAgICAgIGl0ZW0udHlwZSA9ICdudW1iZXInO1xuICAgIH1cblxuICAgIGFzdC5wdXNoKGl0ZW0pO1xuICB9XG5cbiAgdG9rZW5zLnJlZHVjZSgocHJldiwgY3VyLCBpKSA9PiB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBjb25zdCBuZXh0ID0gdG9rZW5zW2kgKyAxXTtcbiAgICBjb25zdCBsYXN0ID0gYXN0W2FzdC5sZW5ndGggLSAxXSB8fCB7fTtcblxuICAgIGlmIChSRV9TRVBBUkFUT1IudGVzdChjdXIpKSB7XG4gICAgICBhZGQoJ2Nob3JkJywgY3VyLnNwbGl0KFJFX1NFUEFSQVRPUikpO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjdXIgPT09ICdzdHJpbmcnICYmIChcbiAgICAgIChjdXIuaW5jbHVkZXMoJy8nKSAmJiBjdXIuaW5kZXhPZignLycpID4gMClcbiAgICAgIHx8IChjdXIuaW5jbHVkZXMoJyonKSAmJiBjdXIuaW5kZXhPZignKicpID4gMClcbiAgICAgIHx8IChjdXIuaW5jbHVkZXMoJyUnKSAmJiBjdXIuaW5kZXhPZignJScpID4gMClcbiAgICApKSB7XG4gICAgICBhZGQoJ251bWJlcicsIGxldmVsKGN1cikpO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKGN1ci5pbmRleE9mKCclJykgPiAtMSkge1xuICAgICAgaWYgKGN1ciA9PT0gJyUnKSB7XG4gICAgICAgIGlmICghbGFzdC50eXBlKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIGV4cHJlc3Npb24gdG8gcmVwZWF0LCBnaXZlbiAnJHt0b2tlbnMuc2xpY2UoMCwgaSkuam9pbignICcpfSdgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhc3QucmVwZWF0ID0gbGFzdC5yZXBlYXQgfHwgMTtcbiAgICAgICAgbGFzdC5yZXBlYXQgKz0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZCgncGFyYW0nLCBjdXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAoaXNQcm9ncmVzc2lvbihjdXIpKSB7XG4gICAgICBsYXN0LnZhbHVlICs9IGAgJHtjdXJ9YDtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmIChjdXIuY2hhckF0KCkgPT09ICcjJykge1xuICAgICAgYWRkKCdjaGFubmVsJywgY3VyKTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmIChpc05vdGUoY3VyKSB8fCBpc0Nob3JkKGN1cikgfHwgaXNNb2RlKGN1cikgfHwgaXNOdW1iZXIoY3VyKSkge1xuICAgICAgY2FycnkucHVzaChjdXIpO1xuXG4gICAgICBpZiAoXG4gICAgICAgICFuZXh0XG4gICAgICAgIHx8IGNhcnJ5Lmxlbmd0aCA9PT0gM1xuICAgICAgICB8fCAhKGlzTm90ZShuZXh0KSB8fCBpc01vZGUobmV4dCkgfHwgaXNOdW1iZXIobmV4dCkpXG4gICAgICApIHtcbiAgICAgICAgY29uc3Qgb2xkID0gY2Fycnkuc3BsaWNlKDAsIGNhcnJ5Lmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IHRlc3QgPSBvbGRbMF07XG5cbiAgICAgICAgbGV0IG1vZGUgPSBvbGRbMV07XG4gICAgICAgIGxldCBvY3RhdmUgPSBvbGRbMl07XG5cbiAgICAgICAgaWYgKCFvY3RhdmUgJiYgaXNOdW1iZXIobW9kZSkpIHtcbiAgICAgICAgICBvY3RhdmUgPSBtb2RlO1xuICAgICAgICAgIG1vZGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgdGVzdC5sZW5ndGggPCAyXG4gICAgICAgICAgJiYgaXNOb3RlKHRlc3QpXG4gICAgICAgICAgJiYgKGlzTW9kZShtb2RlKSB8fCBpc051bWJlcihvY3RhdmUpKVxuICAgICAgICApIHtcbiAgICAgICAgICBhZGQoJ21vZGUnLCBvbGQuam9pbignICcpKTtcbiAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgfVxuXG4gICAgICAgIG9sZC5mb3JFYWNoKHggPT4ge1xuICAgICAgICAgIGFkZCh4Lmxlbmd0aCA+IDEgfHwgIWlzTm90ZSh4KSA/IGdldFR5cGUoeCkgOiAnbW9kZScsIHgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY3VyID09PSAnc3RyaW5nJyAmJiBjdXIuaW5kZXhPZignLi4nKSA+IC0xKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IGN1ci5zcGxpdCgnLi4nKTtcbiAgICAgIGNvbnN0IG1pbiA9IHBhcnRzWzBdIHx8IDE7XG4gICAgICBjb25zdCBtYXggPSBwYXJ0c1sxXSB8fCBJbmZpbml0eTtcblxuICAgICAgdHlwZSA9ICdzbGljZSc7XG4gICAgICBjdXIgPSBbbWluLCBtYXhdO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY3VyID09PSAnc3RyaW5nJyAmJiAoY3VyLmNoYXJBdCgpID09PSAnLycgfHwgY3VyLmNoYXJBdCgpID09PSAnKicpKSB7XG4gICAgICBjb25zdCBvcGVyYXRvciA9IGN1ci5jaGFyQXQoKSA9PT0gJy8nID8gJ2RpdmlkZScgOiAnbXVsdGlwbHknO1xuICAgICAgY29uc3QgbnVtYmVyID0gY3VyLnN1YnN0cigxKTtcblxuICAgICAgaWYgKCFpc051bWJlcihudW1iZXIpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0aW5nIGEgdmFsaWQgZXhwcmVzc2lvbiB0byAke29wZXJhdG9yfSwgZ2l2ZW4gJyR7dG9rZW5zLnNsaWNlKDAsIGkpLmpvaW4oJyAnKX0gJHtjdXJ9J2ApO1xuICAgICAgfVxuXG4gICAgICBhZGQob3BlcmF0b3IsIHBhcnNlRmxvYXQobnVtYmVyKSk7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAoIXR5cGUgJiYgZ2V0VHlwZShjdXIpID09PSAndmFsdWUnICYmIEFycmF5LmlzQXJyYXkobGFzdC52YWx1ZSkpIHtcbiAgICAgIGxhc3QudmFsdWVbMV0gPSBsYXN0LnZhbHVlWzFdIHx8ICcnO1xuICAgICAgbGFzdC52YWx1ZVsxXSArPSBsYXN0LnZhbHVlWzFdID8gJyAnIDogJyc7XG4gICAgICBsYXN0LnZhbHVlWzFdICs9IGN1cjtcbiAgICAgIHJldHVybiBjdXI7XG4gICAgfVxuXG4gICAgYWRkKHR5cGUgfHwgZ2V0VHlwZShjdXIpLCB0eXBlb2YgY3VyID09PSAnc3RyaW5nJyAmJiBpc051bWJlcihjdXIpID8gcGFyc2VJbnQoY3VyLCAxMCkgOiBjdXIpO1xuICAgIHJldHVybiBjdXI7XG4gIH0sIG51bGwpO1xuXG4gIENBQ0hFW2AkJHtleHByZXNzaW9ufWBdID0gYXN0O1xuICByZXR1cm4gYXN0O1xufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5yZWR1Y2UoKHByZXYsIGN1cikgPT4gcHJldi5jb25jYXQoY3VyKSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwZWF0KHZhbHVlLCB0aW1lcykge1xuICBjb25zdCBvdXQgPSBbXTtcblxuICB3aGlsZSAodGltZXMpIHtcbiAgICBvdXQucHVzaCh2YWx1ZSk7XG4gICAgdGltZXMgLT0gMTtcbiAgfVxuXG4gIHJldHVybiBvdXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5nZShtaW4sIG1heCwgc3RlcCkge1xuICBjb25zdCBhY2MgPSBbXTtcblxuICBpZiAoIXN0ZXApIHtcbiAgICBmb3IgKGxldCBpID0gbWluOyBpIDw9IG1heDsgaSArPSAxKSB7XG4gICAgICBhY2MucHVzaChpKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZGlmZiA9IChtYXggLSBtaW4pIC8gc3RlcDtcblxuICAgIGZvciAobGV0IGkgPSBtaW47IGkgPD0gbWF4OyBpICs9IGRpZmYpIHtcbiAgICAgIGFjYy5wdXNoKGkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhY2M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZSh2YWx1ZSkge1xuICBpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHJldHVybiB2YWx1ZTtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSByZXR1cm4gdmFsdWUubWFwKGNsb25lKTtcblxuICBjb25zdCBjb3B5ID0ge307XG5cbiAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goa2V5ID0+IHtcbiAgICBjb3B5W2tleV0gPSBjbG9uZSh2YWx1ZVtrZXldKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvcHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB6aXAoYSwgYiwgY2IpIHtcbiAgY29uc3QgbWF4ID0gTWF0aC5tYXgoYS5sZW5ndGgsIGIubGVuZ3RoKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG1heDsgaSArPSAxKSB7XG4gICAgaWYgKHR5cGVvZiBhW2ldICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgYltpXSAhPT0gJ3VuZGVmaW5lZCcpIGNiKGFbaV0sIGJbaV0pO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgZ2V0Q2hvcmRzQnlQcm9ncmVzc2lvbiB9IGZyb20gJ3NjcmliYmxldHVuZS9zcmMvcHJvZ3Jlc3Npb24nO1xuaW1wb3J0IHsgc2NhbGUsIGlubGluZUNob3JkIH0gZnJvbSAnaGFybW9uaWNzJztcblxuaW1wb3J0IHsgaXNQcm9ncmVzc2lvbiwgdHJhbnNmb3JtIH0gZnJvbSAnLi90b2tlbml6ZSc7XG5pbXBvcnQgeyByZXBlYXQsIGNsb25lIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2UoaW5wdXQsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShpbnB1dCkpIHJldHVybiBpbnB1dDtcblxuICBjb25zdCBmbiA9IHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyA/IGNhbGxiYWNrIDogKHYgPT4gdik7XG5cbiAgbGV0IHNraXA7XG4gIHJldHVybiBpbnB1dC5yZWR1Y2UoKHByZXYsIGN1ciwgaSkgPT4ge1xuICAgIGNvbnN0IGxhc3QgPSBwcmV2W3ByZXYubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgbmV4dCA9IGlucHV0W2kgKyAxXSB8fCB7fTtcbiAgICBjb25zdCBvbGQgPSBpbnB1dFtpIC0gMV0gfHwge307XG5cbiAgICBpZiAoc2tpcCkge1xuICAgICAgc2tpcCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY3VyKSkge1xuICAgICAgcHJldi5wdXNoKC4uLmN1cik7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAoY3VyLnR5cGUgPT09ICd2YWx1ZScgJiYgY3VyLnZhbHVlID09PSAnLicpIHtcbiAgICAgIGlmIChwcmV2Lmxlbmd0aCA+IDApIHByZXYucHVzaChwcmV2WzBdKTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmIChvbGQudHlwZSA9PT0gJ3BhdHRlcm4nICYmIGN1ci50eXBlID09PSAncGF0dGVybicpIHtcbiAgICAgIHByZXZbcHJldi5sZW5ndGggLSAxXSArPSBjdXIudmFsdWU7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGN1ci50eXBlKSB7XG4gICAgICBjYXNlICdwYXR0ZXJuJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdub3RlJzpcbiAgICAgICAgaWYgKGN1ci5yZXBlYXQpIHByZXYucHVzaCguLi5yZXBlYXQoY3VyLnZhbHVlLCBjdXIucmVwZWF0KSk7XG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY3VyLnZhbHVlKSkgcHJldi5wdXNoKC4uLmN1ci52YWx1ZSk7XG4gICAgICAgIGVsc2UgcHJldi5wdXNoKGN1ci52YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdjaG9yZCc6XG4gICAgICAgIGlmIChjdXIucmVwZWF0KSBwcmV2LnB1c2goLi4ucmVwZWF0KGN1ci52YWx1ZSwgY3VyLnJlcGVhdCkpO1xuICAgICAgICBlbHNlIGlmIChjdXIudW5mb2xkKSBwcmV2LnB1c2goLi4uY3VyLnZhbHVlKTtcbiAgICAgICAgZWxzZSBwcmV2LnB1c2goY3VyLnZhbHVlKTtcblxuICAgICAgICBpZiAoY3VyLnR5cGUgIT09ICdjaG9yZCcpIHtcbiAgICAgICAgICBza2lwID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZGl2aWRlJzpcbiAgICAgICAgcHJldltwcmV2Lmxlbmd0aCAtIDFdIC89IGN1ci52YWx1ZTtcbiAgICAgICAgcmV0dXJuIHByZXY7XG5cbiAgICAgIGNhc2UgJ211bHRpcGx5JzpcbiAgICAgICAgcHJldi5wdXNoKC4uLnJlcGVhdChsYXN0LCBjdXIudmFsdWUgLSAxKSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdzbGljZSc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGxhc3QpKSB7XG4gICAgICAgICAgcHJldltwcmV2Lmxlbmd0aCAtIDFdID0gbGFzdC5zbGljZShjdXIudmFsdWVbMF0gLSAxLCBjdXIudmFsdWVbMV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByZXYucHVzaChjdXIudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdtb2RlJzpcbiAgICAgICAgcHJldltwcmV2Lmxlbmd0aCAtIDFdID0gYCR7bGFzdH0gJHtjdXIudmFsdWV9YDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3BhcmFtJzpcbiAgICAgIGNhc2UgJ3ZhbHVlJzoge1xuICAgICAgICBsZXQgdmFsdWUgPSBudWxsO1xuICAgICAgICBpZiAodHlwZW9mIGNvbnRleHRbY3VyLnZhbHVlXSAhPT0gJ3VuZGVmaW5lZCcpIHZhbHVlID0gY29udGV4dFtjdXIudmFsdWVdO1xuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgZXhwcmVzc2lvbiBmb3IgJyR7Y3VyLnZhbHVlfSdgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZVswXSAmJiB2YWx1ZVswXS50eXBlKSB7XG4gICAgICAgICAgdmFsdWUgPSByZWR1Y2UodmFsdWUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGN1ci5yZXBlYXQpIHtcbiAgICAgICAgICAgIHByZXYucHVzaCguLi5yZXBlYXQodmFsdWUsIGN1ci5yZXBlYXQpLnJlZHVjZSgoX3ByZXYsIF9jdXIpID0+IHtcbiAgICAgICAgICAgICAgX3ByZXYucHVzaCguLi5fY3VyKTtcbiAgICAgICAgICAgICAgcmV0dXJuIF9wcmV2O1xuICAgICAgICAgICAgfSwgW10pKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJldi5wdXNoKC4uLnZhbHVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbHVlID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV07XG4gICAgICAgIGlmIChjdXIucmVwZWF0KSBwcmV2LnB1c2goLi4ucmVwZWF0KHZhbHVlLCBjdXIucmVwZWF0KSk7XG4gICAgICAgIGVsc2UgcHJldi5wdXNoKC4uLnZhbHVlKTtcbiAgICAgIH0gYnJlYWs7XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5oYW5kbGVkICcke2N1ci50eXBlfSdgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJldjtcbiAgfSwgW10pLnJlZHVjZSgobWVtbywgaXRlbSkgPT4ge1xuICAgIGNvbnN0IHByZXYgPSBtZW1vW21lbW8ubGVuZ3RoIC0gMV07XG5cbiAgICBpZiAoXG4gICAgICBBcnJheS5pc0FycmF5KHByZXYpXG4gICAgICAmJiBBcnJheS5pc0FycmF5KGl0ZW0pXG4gICAgICAmJiB0eXBlb2YgaXRlbVswXSA9PT0gJ251bWJlcidcbiAgICAgICYmIGl0ZW0ubGVuZ3RoID09PSAyXG4gICAgKSB7XG4gICAgICBjb25zdCBvZmZzZXQgPSBpdGVtWzFdID09PSBJbmZpbml0eSA/IHByZXYubGVuZ3RoIDogaXRlbVsxXTtcbiAgICAgIGNvbnN0IFtiYXNlLCBsZW5ndGhdID0gU3RyaW5nKG9mZnNldCkuc3BsaXQoL1xcRC8pO1xuXG4gICAgICBtZW1vLnBvcCgpO1xuICAgICAgbWVtby5wdXNoKC4uLnByZXYuc2xpY2UoaXRlbVswXSAtIDEsIGJhc2UpKTtcblxuICAgICAgaWYgKFN0cmluZyhvZmZzZXQpLmluY2x1ZGVzKCc+JykpIHtcbiAgICAgICAgY29uc3QgcGFydHMgPSBtZW1vLnNsaWNlKC1sZW5ndGggLSAxKTtcblxuICAgICAgICBwYXJ0cy5wb3AoKTtcbiAgICAgICAgcGFydHMucmV2ZXJzZSgpO1xuICAgICAgICBtZW1vLnB1c2goLi4ucGFydHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1lbW87XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJyAmJiBpdGVtLmluY2x1ZGVzKCcgJykpIHtcbiAgICAgIGNvbnN0IGNodW5rcyA9IGl0ZW0uc3BsaXQoJyAnKTtcblxuICAgICAgaWYgKGNodW5rcy5zb21lKGlzUHJvZ3Jlc3Npb24pKSB7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IGNodW5rcy5maW5kSW5kZXgoaXNQcm9ncmVzc2lvbik7XG4gICAgICAgIGNvbnN0IFthLCBiXSA9IFtjaHVua3Muc2xpY2UoMCwgb2Zmc2V0KSwgY2h1bmtzLnNsaWNlKG9mZnNldCldO1xuXG4gICAgICAgIG1lbW8ucHVzaChnZXRDaG9yZHNCeVByb2dyZXNzaW9uKGEuam9pbignICcpLCBiLmpvaW4oJyAnKSkuc3BsaXQoJyAnKS5tYXAoeCA9PiBmbihpbmxpbmVDaG9yZCh4KSkpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lbW8ucHVzaChmbihzY2FsZShpdGVtKSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtZW1vLnB1c2goZm4oaXRlbSkpO1xuICAgIH1cbiAgICByZXR1cm4gbWVtbztcbiAgfSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2UoYnVmZmVyKSB7XG4gIGNvbnN0IHRyYWNrcyA9IHt9O1xuICBjb25zdCBtYWluID0gW107XG4gIGNvbnN0IGRhdGEgPSB7fTtcblxuICBsZXQgY2hhbm5lbCA9IG51bGw7XG4gIGxldCBwcmVmaXggPSAnJztcbiAgbGV0IHRyYWNrO1xuICBsZXQgaW5mbyA9IHt9O1xuICBidWZmZXIuc3BsaXQoL1xccj9cXG4vZykuZm9yRWFjaCgobGluZSwgbnRoKSA9PiB7XG4gICAgbGluZSA9IGxpbmUucmVwbGFjZSgvOy4rPyQvLCAnJykudHJpbSgpO1xuICAgIGlmICghbGluZSkgcmV0dXJuO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlmIChsaW5lLmNoYXJBdCgpID09PSAnJScpIHtcbiAgICAgICAgY29uc3QgW25hbWUsIC4uLnZhbHVlXSA9IGxpbmUuc3BsaXQoL1xccysvKTtcblxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGRhdGFbbmFtZV0gPSB0cmFuc2Zvcm0odmFsdWUuam9pbignICcpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChsaW5lLmluZGV4T2YoJyMgJykgPj0gMCkge1xuICAgICAgICBpZiAodHJhY2spIHtcbiAgICAgICAgICB0cmFja3NbdHJhY2tdID0gaW5mbztcbiAgICAgICAgICBjaGFubmVsID0gbnVsbDtcbiAgICAgICAgICBwcmVmaXggPSAnJztcbiAgICAgICAgICBpbmZvID0ge307XG4gICAgICAgIH1cblxuICAgICAgICB0cmFjayA9IGxpbmUuc3BsaXQoL1xccysvKS5zbGljZSgxKS5qb2luKCcgJyk7XG4gICAgICB9IGVsc2UgaWYgKGxpbmUuY2hhckF0KCkgPT09ICc+Jykge1xuICAgICAgICBtYWluLnB1c2godHJhbnNmb3JtKGxpbmUuc3Vic3RyKDEpLnRyaW0oKSkpO1xuICAgICAgfSBlbHNlIGlmIChsaW5lLmNoYXJBdCgpID09PSAnQCcpIHtcbiAgICAgICAgY29uc3QgW25hbWUsIC4uLmV4dGVuZF0gPSBsaW5lLnN1YnN0cigxKS5zcGxpdCgnICcpO1xuXG4gICAgICAgIGlmIChleHRlbmRbMF0gPT09ICc8Jykge1xuICAgICAgICAgIGNvbnN0IGtleSA9IGAke2V4dGVuZFsxXX0jYDtcblxuICAgICAgICAgIE9iamVjdC5rZXlzKGluZm8pXG4gICAgICAgICAgICAuZmlsdGVyKHggPT4geC5pbmRleE9mKGtleSkgPT09IDApXG4gICAgICAgICAgICAuZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgICAgaW5mb1tgJHtuYW1lfSMke2suc3BsaXQoJyMnKVsxXX1gXSA9IGNsb25lKGluZm9ba10pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJlZml4ID0gbmFtZTtcbiAgICAgIH0gZWxzZSBpZiAobGluZS5pbmRleE9mKCc6JykgPiAwKSB7XG4gICAgICAgIGNvbnN0IFtuYW1lLCAuLi52YWx1ZV0gPSBsaW5lLnNwbGl0KCc6Jyk7XG5cbiAgICAgICAgZGF0YVtuYW1lXSA9IHRyYW5zZm9ybSh2YWx1ZS5qb2luKCc6JykudHJpbSgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRpY2tzID0gdHJhbnNmb3JtKGxpbmUpO1xuXG4gICAgICAgIGlmICghdGlja3NbMF0gfHwgdGlja3NbMF0udHlwZSAhPT0gJ2NoYW5uZWwnKSB7XG4gICAgICAgICAgaWYgKCFjaGFubmVsKSB0aHJvdyBuZXcgVHlwZUVycm9yKGBNaXNzaW5nIGNoYW5uZWwsIGdpdmVuICcke2xpbmV9J2ApO1xuXG4gICAgICAgICAgY29uc3QgZW5kID0gaW5mb1tjaGFubmVsXVtpbmZvW2NoYW5uZWxdLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgICAgaWYgKCFlbmQudmFsdWVzKSBlbmQudmFsdWVzID0gW3sgdHlwZTogJ251bWJlcicsIHZhbHVlOiAxMjcgfV07XG4gICAgICAgICAgZW5kLnZhbHVlcy5wdXNoKC4uLnRpY2tzKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBub3RlcyA9IHRpY2tzLmZpbmRJbmRleCh4ID0+IFsnbm90ZScsICdjaG9yZCcsICdwYXJhbSddLmluY2x1ZGVzKHgudHlwZSkpO1xuICAgICAgICBjb25zdCBpbmRleCA9IHRpY2tzLmZpbmRJbmRleCh4ID0+IHgudHlwZSA9PT0gJ3BhdHRlcm4nKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBpbmRleCA+IDAgPyB0aWNrcy5zbGljZShpbmRleCkgOiB0aWNrcztcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdmFsdWUuZmluZEluZGV4KHggPT4geC50eXBlICE9PSAncGF0dGVybicpO1xuICAgICAgICBjb25zdCBpbnB1dHMgPSB0aWNrcy5zbGljZSgwLCBpbmRleCA+IDAgPyBpbmRleCA6IDEpO1xuXG4gICAgICAgIGNoYW5uZWwgPSBwcmVmaXggKyBpbnB1dHNbMF0udmFsdWU7XG4gICAgICAgIGlmICghaW5mb1tjaGFubmVsXSkge1xuICAgICAgICAgIGluZm9bY2hhbm5lbF0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzcGVjO1xuICAgICAgICBpZiAobm90ZXMgPiAwICYmIGluZGV4ID09PSAtMSkge1xuICAgICAgICAgIGNvbnN0IGVuZCA9IGluZm9bY2hhbm5lbF1baW5mb1tjaGFubmVsXS5sZW5ndGggLSAxXTtcblxuICAgICAgICAgIGVuZC5kYXRhID0gdmFsdWUuc2xpY2Uobm90ZXMpO1xuICAgICAgICAgIHNwZWMgPSB7XG4gICAgICAgICAgICBpbnB1dDogZW5kLmlucHV0LFxuICAgICAgICAgICAgdmFsdWVzOiB2YWx1ZS5zbGljZSgxLCBub3RlcyksXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChvZmZzZXQgPiAwKSB7XG4gICAgICAgICAgc3BlYyA9IHtcbiAgICAgICAgICAgIGRhdGE6IHZhbHVlLnNsaWNlKG9mZnNldCksXG4gICAgICAgICAgICBpbnB1dDogdmFsdWUuc2xpY2UoMCwgb2Zmc2V0KSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKG9mZnNldCA9PT0gMCkge1xuICAgICAgICAgIHNwZWMgPSB7IHZhbHVlczogdmFsdWUuc2xpY2UoMSkgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzcGVjID0geyBpbnB1dDogdmFsdWUgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbnB1dHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHNwZWMudmFsdWVzID0gaW5wdXRzLnNsaWNlKDEpO1xuICAgICAgICB9XG4gICAgICAgIGluZm9bY2hhbm5lbF0ucHVzaChzcGVjKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zdCBtc2cgPSB0eXBlb2YgZSA9PT0gJ3N0cmluZycgPyBlIDogZS5tZXNzYWdlO1xuXG4gICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYCR7bXNnfVxcbiAgYXQgbGluZSAke250aCArIDF9XFxuJHtsaW5lfWApO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHRyYWNrKSB7XG4gICAgdHJhY2tzW3RyYWNrXSA9IGluZm87XG4gIH1cbiAgcmV0dXJuIHsgbWFpbiwgZGF0YSwgdHJhY2tzIH07XG59XG4iLCAiZnVuY3Rpb24gZXNjKHZhbHVlKSB7XG4gIHJldHVybiBTdHJpbmcodmFsdWUpXG4gICAgLnJlcGxhY2UoLyYvZywgJyZhbXA7JylcbiAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXG4gICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKTtcbn1cblxuZnVuY3Rpb24gc3BhbihjbHMsIHZhbHVlLCBhdHRycyA9IHt9KSB7XG4gIGNvbnN0IGRhdGFBdHRycyA9IE9iamVjdC5lbnRyaWVzKGF0dHJzKVxuICAgIC5tYXAoKFtrZXksIGF0dHJWYWx1ZV0pID0+IGAgZGF0YS0ke2tleX09XCIke2VzYyhhdHRyVmFsdWUpfVwiYClcbiAgICAuam9pbignJyk7XG4gIHJldHVybiBgPHNwYW4gY2xhc3M9XCIke2Nsc31cIiR7ZGF0YUF0dHJzfT4ke2VzYyh2YWx1ZSl9PC9zcGFuPmA7XG59XG5cbmZ1bmN0aW9uIGNsYXNzaWZ5KHRva2VuKSB7XG4gIGlmICghdG9rZW4pIHJldHVybiBudWxsO1xuICBpZiAodG9rZW4gPT09ICc8JykgcmV0dXJuICd0b2staW5oZXJpdCc7XG4gIGlmICh0b2tlbiA9PT0gJyUnKSByZXR1cm4gJ3Rvay12YXItcmVmJztcbiAgaWYgKHRva2VuLmNoYXJBdCgwKSA9PT0gJyUnKSByZXR1cm4gJ3Rvay12YXItcmVmJztcbiAgaWYgKC9eXFwqXFxkKyQvLnRlc3QodG9rZW4pKSByZXR1cm4gJ3Rvay1yZXBlYXQnO1xuICBpZiAoL15beF9cXC1cXFtcXF1dKyQvLnRlc3QodG9rZW4pKSByZXR1cm4gJ3Rvay1wYXR0ZXJuJztcbiAgaWYgKC9eW2EtZ0EtR11bI2JdP1xcZCskLy50ZXN0KHRva2VuKSkgcmV0dXJuICd0b2stbm90ZSc7XG4gIGlmICh0b2tlbi5pbmNsdWRlcygnfCcpKSByZXR1cm4gJ3Rvay1jaG9yZCc7XG4gIGlmICgvXihtYWpvcnxtaW5vcnxwaHJ5Z2lhbnxkb3JpYW58bWl4b2x5ZGlhbnxsb2NyaWFufGx5ZGlhbikkL2kudGVzdCh0b2tlbikpIHJldHVybiAndG9rLW1vZGUnO1xuICBpZiAoL14oPzpJfElJfElJSXxJVnxWfFZJfFZJSXxpfGlpfGlpaXxpdnx2fHZpfHZpaSlcdTAwQjA/JC8udGVzdCh0b2tlbikpIHJldHVybiAndG9rLXByb2dyZXNzaW9uJztcbiAgaWYgKC9eKD86XFwrXFwrfFxcLlxcLnw+PnxcXCpcXCopJC8udGVzdCh0b2tlbikpIHJldHVybiAndG9rLW9wZXJhdG9yJztcbiAgaWYgKC9eI1xcZCskLy50ZXN0KHRva2VuKSkgcmV0dXJuICd0b2stY2hhbm5lbCc7XG4gIGlmICgvXi0/XFxkKyhcXC5cXGQrKT8kLy50ZXN0KHRva2VuKSkgcmV0dXJuICd0b2stbnVtYmVyJztcbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRva2VuKHRva2VuKSB7XG4gIGNvbnN0IGNscyA9IGNsYXNzaWZ5KHRva2VuKTtcbiAgaWYgKCFjbHMpIHJldHVybiBlc2ModG9rZW4pO1xuICBpZiAoY2xzID09PSAndG9rLXZhci1yZWYnICYmIHRva2VuICE9PSAnJScpIHJldHVybiBzcGFuKGNscywgdG9rZW4sIHsgdmFyOiB0b2tlbiB9KTtcbiAgaWYgKGNscyA9PT0gJ3Rvay12YXItcmVmJyAmJiB0b2tlbiA9PT0gJyUnKSByZXR1cm4gc3BhbihjbHMsIHRva2VuLCB7IHJlcGVhdExhc3Q6ICcxJyB9KTtcbiAgaWYgKGNscyA9PT0gJ3Rvay1jaGFubmVsJykgcmV0dXJuIHNwYW4oY2xzLCB0b2tlbiwgeyBpbnN0cnVtZW50OiB0b2tlbi5zbGljZSgxKSB9KTtcbiAgaWYgKGNscyA9PT0gJ3Rvay1tb2RlJykgcmV0dXJuIHNwYW4oY2xzLCB0b2tlbiwgeyBtb2RlOiB0b2tlbi50b0xvd2VyQ2FzZSgpIH0pO1xuICBpZiAoY2xzID09PSAndG9rLXBhdHRlcm4nKSByZXR1cm4gc3BhbihjbHMsIHRva2VuLCB7IHBhdHRlcm46ICcxJyB9KTtcbiAgaWYgKGNscyA9PT0gJ3Rvay1ub3RlJykgcmV0dXJuIHNwYW4oY2xzLCB0b2tlbiwgeyBub3RlOiB0b2tlbiB9KTtcbiAgaWYgKGNscyA9PT0gJ3Rvay1jaG9yZCcpIHJldHVybiBzcGFuKGNscywgdG9rZW4sIHsgY2hvcmQ6IHRva2VuIH0pO1xuICBpZiAoY2xzID09PSAndG9rLW51bWJlcicpIHJldHVybiBzcGFuKGNscywgdG9rZW4sIHsgbnVtYmVyOiB0b2tlbiB9KTtcbiAgaWYgKGNscyA9PT0gJ3Rvay1yZXBlYXQnKSByZXR1cm4gc3BhbihjbHMsIHRva2VuLCB7IHJlcGVhdDogdG9rZW4uc2xpY2UoMSkgfSk7XG4gIHJldHVybiBzcGFuKGNscywgdG9rZW4pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUb2tlbnModGV4dCkge1xuICByZXR1cm4gdGV4dFxuICAgIC5zcGxpdCgvKFxccyspLylcbiAgICAubWFwKHBhcnQgPT4gKC9cXHMrLy50ZXN0KHBhcnQpID8gcGFydCA6IHJlbmRlclRva2VuKHBhcnQpKSlcbiAgICAuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIHNwbGl0Q29tbWVudChsaW5lKSB7XG4gIGNvbnN0IGlkeCA9IGxpbmUuaW5kZXhPZignOycpO1xuICBpZiAoaWR4IDwgMCkgcmV0dXJuIFtsaW5lLCAnJ107XG4gIHJldHVybiBbbGluZS5zbGljZSgwLCBpZHgpLCBsaW5lLnNsaWNlKGlkeCldO1xufVxuXG5mdW5jdGlvbiByZW5kZXJCYXNlKGJhc2UpIHtcbiAgaWYgKCFiYXNlLnRyaW0oKSkgcmV0dXJuIGVzYyhiYXNlKTtcblxuICBpZiAoL15cXHMqIyNcXHMrLy50ZXN0KGJhc2UpKSB7XG4gICAgcmV0dXJuIGJhc2UucmVwbGFjZSgvXihcXHMqIyNcXHMrKSguKikkLywgKF8sIHAxLCBwMikgPT4gYCR7ZXNjKHAxKX0ke3NwYW4oJ3Rvay1zdWJ0cmFjaycsIHAyKX1gKTtcbiAgfVxuICBpZiAoL15cXHMqI1xccysvLnRlc3QoYmFzZSkpIHtcbiAgICByZXR1cm4gYmFzZS5yZXBsYWNlKC9eKFxccyojXFxzKykoLiopJC8sIChfLCBwMSwgcDIpID0+IGAke2VzYyhwMSl9JHtzcGFuKCd0b2stdHJhY2snLCBwMil9YCk7XG4gIH1cbiAgaWYgKC9eXFxzKkAvLnRlc3QoYmFzZSkpIHtcbiAgICByZXR1cm4gcmVuZGVyVG9rZW5zKGJhc2UucmVwbGFjZSgvPC9nLCAnIDwgJykpO1xuICB9XG4gIGlmICgvXlxccyo+Ly50ZXN0KGJhc2UpKSB7XG4gICAgY29uc3QgaW5kZW50ID0gZXNjKGJhc2UubWF0Y2goL15cXHMqLylbMF0pO1xuICAgIGNvbnN0IGJvZHkgPSBiYXNlLnRyaW1TdGFydCgpLnNsaWNlKDEpLnJlcGxhY2UoL15cXHMqLywgJyAnKTtcbiAgICBjb25zdCByZW5kZXJlZCA9IGJvZHlcbiAgICAgIC5zcGxpdCgvKFxccyspLylcbiAgICAgIC5tYXAocGFydCA9PiB7XG4gICAgICAgIGlmICghcGFydCB8fCAvXFxzKy8udGVzdChwYXJ0KSkgcmV0dXJuIHBhcnQ7XG4gICAgICAgIGlmICgvXltBLVpdW0EtWjAtOV0qJC8udGVzdChwYXJ0KSkgcmV0dXJuIHNwYW4oJ3Rvay1zZWN0aW9uJywgcGFydCwgeyBzZWN0aW9uOiBwYXJ0IH0pO1xuICAgICAgICByZXR1cm4gcmVuZGVyVG9rZW4ocGFydCk7XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpO1xuICAgIHJldHVybiBgJHtpbmRlbnR9JHtzcGFuKCd0b2stYXJyYW5nZW1lbnQnLCAnPicpfSR7cmVuZGVyZWR9YDtcbiAgfVxuICBpZiAoL15cXHMqJVteXFxzXStcXHMrLy50ZXN0KGJhc2UpKSB7XG4gICAgcmV0dXJuIGJhc2UucmVwbGFjZSgvXihcXHMqKSglW15cXHNdKykoXFxzKikoLiopJC8sIChfLCBpLCB2LCBzLCByZXN0KSA9PiAoXG4gICAgICBgJHtlc2MoaSl9JHtzcGFuKCd0b2stdmFyLWRlZicsIHYsIHsgdmFyOiB2IH0pfSR7ZXNjKHMpfSR7cmVuZGVyVG9rZW5zKHJlc3QpfWBcbiAgICApKTtcbiAgfVxuICBpZiAoL15cXHMqI1xcZCsvLnRlc3QoYmFzZSkpIHtcbiAgICBsZXQgdmVsb2NpdHlUYWdnZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gYmFzZS5zcGxpdCgvKFxccyspLykubWFwKHBhcnQgPT4ge1xuICAgICAgaWYgKC9eXFxzKiQvLnRlc3QocGFydCkpIHJldHVybiBwYXJ0O1xuICAgICAgY29uc3QgY2xzID0gY2xhc3NpZnkocGFydCk7XG4gICAgICBpZiAoY2xzID09PSAndG9rLW51bWJlcicgJiYgIXZlbG9jaXR5VGFnZ2VkKSB7XG4gICAgICAgIHZlbG9jaXR5VGFnZ2VkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHNwYW4oY2xzLCBwYXJ0LCB7IHZlbG9jaXR5OiBwYXJ0IH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlbmRlclRva2VuKHBhcnQpO1xuICAgIH0pLmpvaW4oJycpO1xuICB9XG4gIHJldHVybiByZW5kZXJUb2tlbnMoYmFzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWdobGlnaHQoaW5wdXQpIHtcbiAgcmV0dXJuIFN0cmluZyhpbnB1dCB8fCAnJylcbiAgICAuc3BsaXQoL1xccj9cXG4vKVxuICAgIC5tYXAobGluZSA9PiB7XG4gICAgICBjb25zdCBbYmFzZSwgY29tbWVudF0gPSBzcGxpdENvbW1lbnQobGluZSk7XG4gICAgICBjb25zdCByZW5kZXJlZCA9IHJlbmRlckJhc2UoYmFzZSk7XG4gICAgICBpZiAoIWNvbW1lbnQpIHJldHVybiByZW5kZXJlZDtcbiAgICAgIHJldHVybiBgJHtyZW5kZXJlZH0ke3NwYW4oJ3Rvay1jb21tZW50JywgY29tbWVudCl9YDtcbiAgICB9KVxuICAgIC5qb2luKCdcXG4nKTtcbn1cbiIsICJpbXBvcnQgeyBoaWdobGlnaHQgfSBmcm9tICcuLi9oaWdobGlnaHQnO1xuXG5jb25zdCBESUFUT05JQyA9IHsgYzogMCwgZDogMSwgZTogMiwgZjogMywgZzogNCwgYTogNSwgYjogNiB9O1xuY29uc3QgRTRfRElBVE9OSUMgPSA0ICogNyArIDI7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZU5vdGUocykge1xuICByZXR1cm4gcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHMuc2xpY2UoMSk7XG59XG5cbmZ1bmN0aW9uIG5vdGVUb1Bvcyhub3RlU3RyKSB7XG4gIGNvbnN0IG0gPSBub3RlU3RyLm1hdGNoKC9eKFthLWdBLUddKShbI2JdPykoXFxkKykkLyk7XG4gIGlmICghbSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGRpYXRQb3MgPSBwYXJzZUludChtWzNdLCAxMCkgKiA3ICsgRElBVE9OSUNbbVsxXS50b0xvd2VyQ2FzZSgpXTtcbiAgcmV0dXJuIGRpYXRQb3MgLSBFNF9ESUFUT05JQztcbn1cblxuZnVuY3Rpb24gcG9zVG9ZKHBvcykge1xuICByZXR1cm4gNjAgLSBwb3MgKiA1O1xufVxuXG5mdW5jdGlvbiBidWlsZFN0YWZmU1ZHKG5vdGVzLCBtb2RlID0gJ2Nob3JkJykge1xuICBpZiAoIW5vdGVzIHx8IG5vdGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuICcnO1xuICBjb25zdCBzb3J0ZWQgPSBub3Rlc1xuICAgIC5tYXAobiA9PiAoeyBub3RlOiBuLCBwb3M6IG5vdGVUb1BvcyhuKSB9KSlcbiAgICAuZmlsdGVyKG4gPT4gbi5wb3MgIT09IG51bGwpXG4gICAgLnNvcnQoKGEsIGIpID0+IGEucG9zIC0gYi5wb3MpO1xuICBpZiAoc29ydGVkLmxlbmd0aCA9PT0gMCkgcmV0dXJuICcnO1xuXG4gIGNvbnN0IFcgPSAyMDA7XG4gIGNvbnN0IEggPSA5MDtcbiAgbGV0IHN2ZyA9IGA8c3ZnIHdpZHRoPVwiJHtXfVwiIGhlaWdodD1cIiR7SH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+YDtcblxuICBzdmcgKz0gJzxzdHlsZT4uc3RhZmYtbGluZSwubGVkZ2Vye3N0cm9rZTojZmZmO3N0cm9rZS13aWR0aDoxfTwvc3R5bGU+JztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpICs9IDEpIHtcbiAgICBjb25zdCB5ID0gMjAgKyBpICogMTA7XG4gICAgc3ZnICs9IGA8bGluZSBjbGFzcz1cInN0YWZmLWxpbmVcIiB4MT1cIjBcIiB5MT1cIiR7eX1cIiB4Mj1cIiR7V31cIiB5Mj1cIiR7eX1cIi8+YDtcbiAgfVxuICBzdmcgKz0gJzx0ZXh0IHg9XCI4XCIgeT1cIjUwXCIgZmlsbD1cIiNmZmZcIiBmb250LXNpemU9XCI1MlwiIGZvbnQtZmFtaWx5PVwic2VyaWZcIj5cdUQ4MzRcdUREMUU8L3RleHQ+JztcblxuICBjb25zdCBpc1NjYWxlID0gbW9kZSA9PT0gJ3NjYWxlJztcbiAgY29uc3Qgbm90ZUNvdW50ID0gc29ydGVkLmxlbmd0aDtcbiAgbGV0IG5vdGVYO1xuICBpZiAoaXNTY2FsZSkge1xuICAgIGNvbnN0IHN0ZXAgPSBub3RlQ291bnQgPiAxID8gMTU0IC8gKG5vdGVDb3VudCAtIDEpIDogMDtcbiAgICBzb3J0ZWQuZm9yRWFjaCgobiwgaSkgPT4ge1xuICAgICAgbi54ID0gMzYgKyBpICogc3RlcDtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBub3RlWCA9IDkwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc29ydGVkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjdXJyID0gc29ydGVkW2ldO1xuICAgICAgY29uc3QgcHJldiA9IGkgPiAwID8gc29ydGVkW2kgLSAxXSA6IG51bGw7XG4gICAgICBjdXJyLnggPSBub3RlWDtcbiAgICAgIGlmIChwcmV2ICYmIE1hdGguYWJzKGN1cnIucG9zIC0gcHJldi5wb3MpID09PSAxKSB7XG4gICAgICAgIGN1cnIueCA9IHByZXYueCArIDExO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNvcnRlZC5mb3JFYWNoKG4gPT4ge1xuICAgIGNvbnN0IHkgPSBwb3NUb1kobi5wb3MpO1xuICAgIGNvbnN0IG0gPSBuLm5vdGUubWF0Y2goL14oW2EtZ0EtR10pKFsjYl0/KShcXGQrKSQvKTtcbiAgICBjb25zdCBhY2NpZGVudGFsID0gbSA/IG1bMl0gOiAnJztcbiAgICBmb3IgKGxldCBwID0gLTI7IHAgPj0gbi5wb3M7IHAgLT0gMikge1xuICAgICAgY29uc3QgbHkgPSBwb3NUb1kocCk7XG4gICAgICBzdmcgKz0gYDxsaW5lIGNsYXNzPVwibGVkZ2VyXCIgeDE9XCIke24ueCAtIDl9XCIgeTE9XCIke2x5fVwiIHgyPVwiJHtuLnggKyA5fVwiIHkyPVwiJHtseX1cIi8+YDtcbiAgICB9XG4gICAgZm9yIChsZXQgcCA9IDEwOyBwIDw9IG4ucG9zOyBwICs9IDIpIHtcbiAgICAgIGNvbnN0IGx5ID0gcG9zVG9ZKHApO1xuICAgICAgc3ZnICs9IGA8bGluZSBjbGFzcz1cImxlZGdlclwiIHgxPVwiJHtuLnggLSA5fVwiIHkxPVwiJHtseX1cIiB4Mj1cIiR7bi54ICsgOX1cIiB5Mj1cIiR7bHl9XCIvPmA7XG4gICAgfVxuICAgIGlmIChpc1NjYWxlKSB7XG4gICAgICBzdmcgKz0gYDxlbGxpcHNlIGN4PVwiJHtuLnh9XCIgY3k9XCIke3l9XCIgcng9XCI1XCIgcnk9XCI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjZmZmXCIgc3Ryb2tlLXdpZHRoPVwiMS4yXCIgdHJhbnNmb3JtPVwicm90YXRlKC0xNSAke24ueH0gJHt5fSlcIi8+YDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3ZnICs9IGA8ZWxsaXBzZSBjeD1cIiR7bi54fVwiIGN5PVwiJHt5fVwiIHJ4PVwiNVwiIHJ5PVwiNFwiIGZpbGw9XCIjZmZmXCIgdHJhbnNmb3JtPVwicm90YXRlKC0xNSAke24ueH0gJHt5fSlcIi8+YDtcbiAgICB9XG4gICAgaWYgKGFjY2lkZW50YWwgPT09ICcjJykge1xuICAgICAgc3ZnICs9IGA8dGV4dCB4PVwiJHtuLnggLSAxNH1cIiB5PVwiJHt5ICsgNH1cIiBmaWxsPVwiI2ZmZlwiIGZvbnQtc2l6ZT1cIjEwXCI+XHUyNjZGPC90ZXh0PmA7XG4gICAgfSBlbHNlIGlmIChhY2NpZGVudGFsID09PSAnYicpIHtcbiAgICAgIHN2ZyArPSBgPHRleHQgeD1cIiR7bi54IC0gMTJ9XCIgeT1cIiR7eSArIDR9XCIgZmlsbD1cIiNmZmZcIiBmb250LXNpemU9XCIxMVwiPlx1MjY2RDwvdGV4dD5gO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKCFpc1NjYWxlICYmIHNvcnRlZC5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgbG93ZXN0UG9zID0gc29ydGVkWzBdLnBvcztcbiAgICBjb25zdCBoaWdoZXN0UG9zID0gc29ydGVkW3NvcnRlZC5sZW5ndGggLSAxXS5wb3M7XG4gICAgbGV0IHN0ZW1EaXIgPSBsb3dlc3RQb3MgPD0gMyA/ICd1cCcgOiAnZG93bic7XG4gICAgaWYgKHN0ZW1EaXIgPT09ICd1cCcpIHtcbiAgICAgIGNvbnN0IGhpZ2hZID0gcG9zVG9ZKGhpZ2hlc3RQb3MpO1xuICAgICAgY29uc3QgaGlnaFggPSBzb3J0ZWRbc29ydGVkLmxlbmd0aCAtIDFdLng7XG4gICAgICBzdmcgKz0gYDxsaW5lIHgxPVwiJHtoaWdoWCArIDV9XCIgeTE9XCIke2hpZ2hZfVwiIHgyPVwiJHtoaWdoWCArIDV9XCIgeTI9XCIke2hpZ2hZIC0gMjh9XCIgc3Ryb2tlPVwiI2ZmZlwiIHN0cm9rZS13aWR0aD1cIjEuMlwiLz5gO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsb3dZID0gcG9zVG9ZKGxvd2VzdFBvcyk7XG4gICAgICBjb25zdCBsb3dYID0gc29ydGVkWzBdLng7XG4gICAgICBzdmcgKz0gYDxsaW5lIHgxPVwiJHtsb3dYIC0gNX1cIiB5MT1cIiR7bG93WX1cIiB4Mj1cIiR7bG93WCAtIDV9XCIgeTI9XCIke2xvd1kgKyAyOH1cIiBzdHJva2U9XCIjZmZmXCIgc3Ryb2tlLXdpZHRoPVwiMS4yXCIvPmA7XG4gICAgfVxuICB9XG5cbiAgc3ZnICs9ICc8L3N2Zz4nO1xuICByZXR1cm4gc3ZnO1xufVxuXG5mdW5jdGlvbiBjbGFtcFRvb2x0aXAoeCwgeSwgd2lkdGggPSAzMjApIHtcbiAgY29uc3QgbWF4WCA9IE1hdGgubWF4KDgsIHdpbmRvdy5pbm5lcldpZHRoIC0gd2lkdGggLSA4KTtcbiAgY29uc3QgbGVmdCA9IE1hdGgubWluKHggKyAxMiwgbWF4WCk7XG4gIGNvbnN0IHRvcCA9IE1hdGgubWluKHkgKyAxMiwgd2luZG93LmlubmVySGVpZ2h0IC0gMTcwKTtcbiAgcmV0dXJuIHsgbGVmdCwgdG9wIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFZGl0b3IoaW5pdGlhbFRleHQsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB3cmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdyYXAuaWQgPSAnZWRpdG9yLXdyYXAnO1xuXG4gIGNvbnN0IHByZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ByZScpO1xuICBwcmUuaWQgPSAnZWRpdG9yLWhsJztcbiAgcHJlLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gIGNvbnN0IHRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgdGEuaWQgPSAnZWRpdG9yJztcbiAgdGEuc3BlbGxjaGVjayA9IGZhbHNlO1xuICB0YS5hdXRvY29tcGxldGUgPSAnb2ZmJztcbiAgdGEudmFsdWUgPSBpbml0aWFsVGV4dDtcblxuICBjb25zdCB0aXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGlwLmlkID0gJ3Zhci10b29sdGlwJztcbiAgdGlwLmhpZGRlbiA9IHRydWU7XG4gIHRpcC5pbm5lckhUTUwgPSAnPHN0cm9uZz48L3N0cm9uZz48c3BhbiBjbGFzcz1cInRvb2x0aXAtcmVzb2x2ZWRcIj48L3NwYW4+PGRpdiBjbGFzcz1cInRvb2x0aXAtc3RhZmZcIj48L2Rpdj4nO1xuICBjb25zdCB0aXBUaXRsZSA9IHRpcC5xdWVyeVNlbGVjdG9yKCdzdHJvbmcnKTtcbiAgY29uc3QgdGlwQm9keSA9IHRpcC5xdWVyeVNlbGVjdG9yKCcudG9vbHRpcC1yZXNvbHZlZCcpO1xuICBjb25zdCB0aXBTdGFmZiA9IHRpcC5xdWVyeVNlbGVjdG9yKCcudG9vbHRpcC1zdGFmZicpO1xuXG4gIGNvbnN0IHRvb2x0aXBIYW5kbGVycyA9IFtcbiAgICBvcHRpb25zLnJlc29sdmVOb3RlICYmIHtcbiAgICAgIGF0dHI6ICdub3RlJyxcbiAgICAgIHJlc29sdmU6IG9wdGlvbnMucmVzb2x2ZU5vdGUsXG4gICAgICBub3RlczogdmFsdWUgPT4gW3ZhbHVlXSxcbiAgICAgIHN0YWZmTW9kZTogJ3NpbmdsZScsXG4gICAgICB0aXRsZTogdmFsdWUgPT4gbm9ybWFsaXplTm90ZSh2YWx1ZSksXG4gICAgfSxcbiAgICBvcHRpb25zLnJlc29sdmVDaG9yZCAmJiB7XG4gICAgICBhdHRyOiAnY2hvcmQnLFxuICAgICAgcmVzb2x2ZTogb3B0aW9ucy5yZXNvbHZlQ2hvcmQsXG4gICAgICBub3RlczogdmFsdWUgPT4gdmFsdWUuc3BsaXQoJ3wnKS5tYXAobm9ybWFsaXplTm90ZSksXG4gICAgICBzdGFmZk1vZGU6ICdjaG9yZCcsXG4gICAgICB0aXRsZTogKCkgPT4gJ0Nob3JkJyxcbiAgICB9LFxuICAgIG9wdGlvbnMucmVzb2x2ZU1vZGUgJiYge1xuICAgICAgYXR0cjogJ21vZGUnLFxuICAgICAgcmVzb2x2ZTogb3B0aW9ucy5yZXNvbHZlTW9kZSxcbiAgICAgIG5vdGVzOiBvcHRpb25zLnJlc29sdmVNb2RlTm90ZXMsXG4gICAgICBzdGFmZk1vZGU6ICdzY2FsZScsXG4gICAgICB0aXRsZTogdmFsdWUgPT4gdmFsdWUsXG4gICAgfSxcbiAgICBvcHRpb25zLnJlc29sdmVJbnN0cnVtZW50ICYmIHtcbiAgICAgIGF0dHI6ICdpbnN0cnVtZW50JyxcbiAgICAgIHJlc29sdmU6IG9wdGlvbnMucmVzb2x2ZUluc3RydW1lbnQsXG4gICAgICB0aXRsZTogdmFsdWUgPT4gYCMke3ZhbHVlfWAsXG4gICAgfSxcbiAgICBvcHRpb25zLnJlc29sdmVTZWN0aW9uICYmIHtcbiAgICAgIGF0dHI6ICdzZWN0aW9uJyxcbiAgICAgIHJlc29sdmU6IG9wdGlvbnMucmVzb2x2ZVNlY3Rpb24sXG4gICAgICB0aXRsZTogdmFsdWUgPT4gYEAke3ZhbHVlfWAsXG4gICAgfSxcbiAgICBvcHRpb25zLnJlc29sdmVWYXIgJiYge1xuICAgICAgYXR0cjogJ3ZhcicsXG4gICAgICByZXNvbHZlOiBvcHRpb25zLnJlc29sdmVWYXIsXG4gICAgICB0aXRsZTogdmFsdWUgPT4gdmFsdWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBhdHRyOiAncmVwZWF0TGFzdCcsXG4gICAgICByZXNvbHZlOiAoKSA9PiAnUmVwZWF0cyB0aGUgcHJlY2VkaW5nIGV4cHJlc3Npb24gb25jZSBtb3JlJyxcbiAgICAgIHRpdGxlOiAoKSA9PiAnJScsXG4gICAgfSxcbiAgICBvcHRpb25zLnJlc29sdmVWZWxvY2l0eSAmJiB7XG4gICAgICBhdHRyOiAndmVsb2NpdHknLFxuICAgICAgcmVzb2x2ZTogb3B0aW9ucy5yZXNvbHZlVmVsb2NpdHksXG4gICAgICB0aXRsZTogdiA9PiBgVmVsb2NpdHkgJHt2fWAsXG4gICAgfSxcbiAgICB7XG4gICAgICBhdHRyOiAncmVwZWF0JyxcbiAgICAgIHJlc29sdmU6IHYgPT4ge1xuICAgICAgICBjb25zdCBuID0gcGFyc2VJbnQodiwgMTApO1xuICAgICAgICByZXR1cm4gYFBsYXlzIHRoZSBwcmVjZWRpbmcgc2VxdWVuY2UgJHtufSB0aW1lJHtuICE9PSAxID8gJ3MnIDogJyd9IGluIGEgcm93YDtcbiAgICAgIH0sXG4gICAgICB0aXRsZTogdiA9PiBgXHUwMEQ3JHt2fWAsXG4gICAgfSxcbiAgICB7XG4gICAgICBhdHRyOiAnbnVtYmVyJyxcbiAgICAgIHJlc29sdmU6ICgpID0+ICdOdW1lcmljIHZhbHVlIFx1MjAxNCB1c2VkIGFzIHZlbG9jaXR5LCBvY3RhdmUsIG9yIHBhcmFtZXRlcicsXG4gICAgICB0aXRsZTogdiA9PiB2LFxuICAgIH0sXG4gICAge1xuICAgICAgYXR0cjogJ3BhdHRlcm4nLFxuICAgICAgcmVzb2x2ZTogKCkgPT4gJ3ggPSBoaXQgIHwgIC0gPSBob2xkICB8ICBfID0gcmVzdCAgfCAgWyBdID0gc3ViZGl2aWRlJyxcbiAgICAgIHRpdGxlOiAoKSA9PiAnUmh5dGhtIHBhdHRlcm4nLFxuICAgIH0sXG4gIF0uZmlsdGVyKEJvb2xlYW4pO1xuXG4gIGZ1bmN0aW9uIHN5bmMoKSB7XG4gICAgcHJlLmlubmVySFRNTCA9IGAke2hpZ2hsaWdodCh0YS52YWx1ZSl9XFxuYDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVUb29sdGlwKCkge1xuICAgIHRpcC5oaWRkZW4gPSB0cnVlO1xuICAgIHRpcFN0YWZmLmlubmVySFRNTCA9ICcnO1xuICAgIHRpcFN0YWZmLmhpZGRlbiA9IHRydWU7XG4gIH1cblxuICB0YS5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgcHJlLnNjcm9sbFRvcCA9IHRhLnNjcm9sbFRvcDtcbiAgICBwcmUuc2Nyb2xsTGVmdCA9IHRhLnNjcm9sbExlZnQ7XG4gIH0pO1xuXG4gIHRhLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIHN5bmMoKTtcbiAgICBoaWRlVG9vbHRpcCgpO1xuICAgIGlmIChvcHRpb25zLm9uSW5wdXQpIG9wdGlvbnMub25JbnB1dCh0YS52YWx1ZSk7XG4gIH0pO1xuXG4gIHRhLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGUgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQoZS5jbGllbnRYLCBlLmNsaWVudFkpO1xuICAgIGNvbnN0IGZvdW5kID0gdG9vbHRpcEhhbmRsZXJzXG4gICAgICAubWFwKGhhbmRsZXIgPT4ge1xuICAgICAgICBjb25zdCBoaXQgPSBlbGVtZW50cy5maW5kKGVsID0+IGVsLmRhdGFzZXQgJiYgZWwuZGF0YXNldFtoYW5kbGVyLmF0dHJdKTtcbiAgICAgICAgcmV0dXJuIGhpdCA/IHsgaGFuZGxlciwgdmFsdWU6IGhpdC5kYXRhc2V0W2hhbmRsZXIuYXR0cl0gfSA6IG51bGw7XG4gICAgICB9KVxuICAgICAgLmZpbmQoQm9vbGVhbik7XG4gICAgaWYgKCFmb3VuZCkge1xuICAgICAgaGlkZVRvb2x0aXAoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdGV4dCA9IGZvdW5kLmhhbmRsZXIucmVzb2x2ZShmb3VuZC52YWx1ZSk7XG4gICAgaWYgKCF0ZXh0KSB7XG4gICAgICBoaWRlVG9vbHRpcCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwb3MgPSBjbGFtcFRvb2x0aXAoZS5jbGllbnRYLCBlLmNsaWVudFkpO1xuICAgIHRpcFRpdGxlLnRleHRDb250ZW50ID0gZm91bmQuaGFuZGxlci50aXRsZShmb3VuZC52YWx1ZSk7XG4gICAgdGlwQm9keS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgaWYgKGZvdW5kLmhhbmRsZXIubm90ZXMpIHtcbiAgICAgIGNvbnN0IG5vdGVBcnIgPSBmb3VuZC5oYW5kbGVyLm5vdGVzKGZvdW5kLnZhbHVlKTtcbiAgICAgIGlmIChub3RlQXJyICYmIG5vdGVBcnIubGVuZ3RoKSB7XG4gICAgICAgIHRpcFN0YWZmLmlubmVySFRNTCA9IGJ1aWxkU3RhZmZTVkcobm90ZUFyciwgZm91bmQuaGFuZGxlci5zdGFmZk1vZGUpO1xuICAgICAgICB0aXBTdGFmZi5oaWRkZW4gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpcFN0YWZmLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB0aXBTdGFmZi5oaWRkZW4gPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aXBTdGFmZi5pbm5lckhUTUwgPSAnJztcbiAgICAgIHRpcFN0YWZmLmhpZGRlbiA9IHRydWU7XG4gICAgfVxuICAgIHRpcC5zdHlsZS5sZWZ0ID0gYCR7cG9zLmxlZnR9cHhgO1xuICAgIHRpcC5zdHlsZS50b3AgPSBgJHtwb3MudG9wfXB4YDtcbiAgICB0aXAuaGlkZGVuID0gZmFsc2U7XG4gIH0pO1xuXG4gIHRhLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBoaWRlVG9vbHRpcCk7XG5cbiAgc3luYygpO1xuICB3cmFwLmFwcGVuZENoaWxkKHByZSk7XG4gIHdyYXAuYXBwZW5kQ2hpbGQodGEpO1xuICB3cmFwLmFwcGVuZENoaWxkKHRpcCk7XG5cbiAgcmV0dXJuIHtcbiAgICBlbDogd3JhcCxcbiAgICB0ZXh0YXJlYTogdGEsXG4gICAgb246IChldmVudCwgZm4pID0+IHRhLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZuKSxcbiAgICBnZXRWYWx1ZTogKCkgPT4gdGEudmFsdWUsXG4gICAgc2V0VmFsdWU6IHZhbHVlID0+IHtcbiAgICAgIHRhLnZhbHVlID0gdmFsdWU7XG4gICAgICBzeW5jKCk7XG4gICAgICBoaWRlVG9vbHRpcCgpO1xuICAgIH0sXG4gICAgZm9jdXM6ICgpID0+IHRhLmZvY3VzKCksXG4gIH07XG59XG4iLCAiZnVuY3Rpb24gY2xhbXAodmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHZhbHVlKSk7XG59XG5cbmZ1bmN0aW9uIHNob3J0TmFtZShuYW1lKSB7XG4gIGNvbnN0IHBhcnRzID0gU3RyaW5nKG5hbWUgfHwgJycpLnNwbGl0KC9cXHMrLykuZmlsdGVyKEJvb2xlYW4pO1xuICBpZiAoIXBhcnRzLmxlbmd0aCkgcmV0dXJuICd0cmFjayc7XG4gIHJldHVybiBwYXJ0cy5zbGljZSgwLCAyKS5qb2luKCcgJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNaXhlcihwbGF5ZXIsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXNpZGUnKTtcbiAgcm9vdC5pZCA9ICdtaXhlci1wYW5lbCc7XG4gIHJvb3QuY2xhc3NOYW1lID0gJ2NvbGxhcHNlZCc7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9ICdNaXhlcic7XG5cbiAgY29uc3Qgc3RyaXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHN0cmlwcy5pZCA9ICdtaXhlci1zdHJpcHMnO1xuICBjb25zdCB0cmFuc3BvcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdHJhbnNwb3J0LmlkID0gJ21peGVyLXRyYW5zcG9ydCc7XG5cbiAgY29uc3QgZnggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZnguaWQgPSAnbWl4ZXItZngnO1xuXG4gIGNvbnN0IGluaXRpYWxUZW1wbyA9IG9wdGlvbnMudGVtcG8gfHwgMTQ2O1xuICBjb25zdCBpbml0aWFsQmFycyA9IG9wdGlvbnMuYmFycyB8fCA4O1xuICBjb25zdCBpbml0aWFsVHJhbnNwb3NlID0gb3B0aW9ucy50cmFuc3Bvc2UgfHwgMDtcblxuICBjb25zdCBicG1Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBicG1Sb3cuY2xhc3NOYW1lID0gJ3RyYW5zcG9ydC1yb3cnO1xuICBicG1Sb3cudGV4dENvbnRlbnQgPSAnQlBNJztcbiAgY29uc3QgYnBtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgYnBtLnR5cGUgPSAncmFuZ2UnO1xuICBicG0ubWluID0gJzYwJztcbiAgYnBtLm1heCA9ICcyMDAnO1xuICBicG0udmFsdWUgPSBTdHJpbmcoaW5pdGlhbFRlbXBvKTtcbiAgY29uc3QgYnBtVmFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBicG1WYWwuY2xhc3NOYW1lID0gJ3RyYW5zcG9ydC12YWwnO1xuICBicG1WYWwudGV4dENvbnRlbnQgPSBTdHJpbmcoaW5pdGlhbFRlbXBvKTtcbiAgYnBtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIGJwbVZhbC50ZXh0Q29udGVudCA9IGJwbS52YWx1ZTtcbiAgICBpZiAob3B0aW9ucy5vbkNoYW5nZSkge1xuICAgICAgb3B0aW9ucy5vbkNoYW5nZSh7IHRlbXBvOiBwYXJzZUludChicG0udmFsdWUsIDEwKSB9KTtcbiAgICB9XG4gIH0pO1xuICBicG1Sb3cuYXBwZW5kQ2hpbGQoYnBtKTtcbiAgYnBtUm93LmFwcGVuZENoaWxkKGJwbVZhbCk7XG5cbiAgY29uc3QgYmFyc1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGJhcnNSb3cuY2xhc3NOYW1lID0gJ3RyYW5zcG9ydC1yb3cnO1xuICBiYXJzUm93LnRleHRDb250ZW50ID0gJ0JBUlMnO1xuICBjb25zdCBiYXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIFs0LCA4LCAxNiwgMzJdLmZvckVhY2godmFsdWUgPT4ge1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbi52YWx1ZSA9IFN0cmluZyh2YWx1ZSk7XG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gU3RyaW5nKHZhbHVlKTtcbiAgICBpZiAodmFsdWUgPT09IGluaXRpYWxCYXJzKSBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIGJhcnMuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgfSk7XG4gIGJhcnMuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIGlmIChvcHRpb25zLm9uQ2hhbmdlKSB7XG4gICAgICBvcHRpb25zLm9uQ2hhbmdlKHsgYmFyczogcGFyc2VJbnQoYmFycy52YWx1ZSwgMTApIH0pO1xuICAgIH1cbiAgfSk7XG4gIGJhcnNSb3cuYXBwZW5kQ2hpbGQoYmFycyk7XG5cbiAgY29uc3Qga2V5Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAga2V5Um93LmNsYXNzTmFtZSA9ICd0cmFuc3BvcnQtcm93JztcbiAga2V5Um93LnRleHRDb250ZW50ID0gJ0tFWSc7XG4gIGNvbnN0IGtleSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGtleS50eXBlID0gJ3JhbmdlJztcbiAga2V5Lm1pbiA9ICctMTInO1xuICBrZXkubWF4ID0gJzEyJztcbiAga2V5LnZhbHVlID0gU3RyaW5nKGluaXRpYWxUcmFuc3Bvc2UpO1xuICBjb25zdCBrZXlWYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGtleVZhbC5jbGFzc05hbWUgPSAndHJhbnNwb3J0LXZhbCc7XG4gIGtleVZhbC50ZXh0Q29udGVudCA9IFN0cmluZyhpbml0aWFsVHJhbnNwb3NlID4gMCA/IGArJHtpbml0aWFsVHJhbnNwb3NlfWAgOiBpbml0aWFsVHJhbnNwb3NlKTtcbiAga2V5LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQoa2V5LnZhbHVlLCAxMCk7XG4gICAga2V5VmFsLnRleHRDb250ZW50ID0gdmFsdWUgPiAwID8gYCske3ZhbHVlfWAgOiBTdHJpbmcodmFsdWUpO1xuICAgIGlmIChvcHRpb25zLm9uQ2hhbmdlKSB7XG4gICAgICBvcHRpb25zLm9uQ2hhbmdlKHsgdHJhbnNwb3NlOiB2YWx1ZSB9KTtcbiAgICB9XG4gIH0pO1xuICBrZXlSb3cuYXBwZW5kQ2hpbGQoa2V5KTtcbiAga2V5Um93LmFwcGVuZENoaWxkKGtleVZhbCk7XG5cbiAgdHJhbnNwb3J0LmFwcGVuZENoaWxkKGJwbVJvdyk7XG4gIHRyYW5zcG9ydC5hcHBlbmRDaGlsZChiYXJzUm93KTtcbiAgdHJhbnNwb3J0LmFwcGVuZENoaWxkKGtleVJvdyk7XG5cbiAgY29uc3QgZGVsYXlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGRlbGF5TGFiZWwudGV4dENvbnRlbnQgPSAnRGVsYXkgVGltZSc7XG4gIGNvbnN0IGRlbGF5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIFtcbiAgICBbJzEvNCcsIDEgLyA0XSxcbiAgICBbJzMvOCcsIDMgLyA4XSxcbiAgICBbJzEvMicsIDEgLyAyXSxcbiAgICBbJzMvNCcsIDMgLyA0XSxcbiAgXS5mb3JFYWNoKChbbGFiZWwsIHZhbHVlXSkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGxhYmVsO1xuICAgIG9wdGlvbi52YWx1ZSA9IFN0cmluZyh2YWx1ZSk7XG4gICAgaWYgKHZhbHVlID09PSBwbGF5ZXIuZGVsYXlEaXZpc2lvbikgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICBkZWxheVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9KTtcbiAgZGVsYXlTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIHBsYXllci5zZXREZWxheVRpbWUocGFyc2VGbG9hdChkZWxheVNlbGVjdC52YWx1ZSkpO1xuICB9KTtcbiAgZGVsYXlMYWJlbC5hcHBlbmRDaGlsZChkZWxheVNlbGVjdCk7XG5cbiAgY29uc3QgZmVlZGJhY2tMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGZlZWRiYWNrTGFiZWwudGV4dENvbnRlbnQgPSAnRmVlZGJhY2snO1xuICBjb25zdCBmZWVkYmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGZlZWRiYWNrLnR5cGUgPSAncmFuZ2UnO1xuICBmZWVkYmFjay5taW4gPSAnMCc7XG4gIGZlZWRiYWNrLm1heCA9ICc3NSc7XG4gIGZlZWRiYWNrLnZhbHVlID0gJzM1JztcbiAgZmVlZGJhY2suYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgcGxheWVyLnNldERlbGF5RmVlZGJhY2socGFyc2VJbnQoZmVlZGJhY2sudmFsdWUsIDEwKSAvIDEwMCk7XG4gIH0pO1xuICBmZWVkYmFja0xhYmVsLmFwcGVuZENoaWxkKGZlZWRiYWNrKTtcblxuICBmeC5hcHBlbmRDaGlsZChkZWxheUxhYmVsKTtcbiAgZnguYXBwZW5kQ2hpbGQoZmVlZGJhY2tMYWJlbCk7XG5cbiAgcm9vdC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIHJvb3QuYXBwZW5kQ2hpbGQodHJhbnNwb3J0KTtcbiAgcm9vdC5hcHBlbmRDaGlsZChzdHJpcHMpO1xuICByb290LmFwcGVuZENoaWxkKGZ4KTtcblxuICBjb25zdCBzdHJpcE1hcCA9IG5ldyBNYXAoKTtcblxuICBmdW5jdGlvbiBjcmVhdGVTdHJpcChrZXksIGxhYmVsKSB7XG4gICAgY29uc3Qgc3RhdGUgPSBwbGF5ZXIuZ2V0VHJhY2tTdGF0ZShrZXkpO1xuICAgIGNvbnN0IHN0cmlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3RyaXAuY2xhc3NOYW1lID0gJ20tc3RyaXAnO1xuICAgIHN0cmlwLmRhdGFzZXQua2V5ID0ga2V5O1xuXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hbWUuY2xhc3NOYW1lID0gJ20tbmFtZSc7XG4gICAgbmFtZS50ZXh0Q29udGVudCA9IHNob3J0TmFtZShsYWJlbCk7XG4gICAgbmFtZS50aXRsZSA9IGxhYmVsO1xuXG4gICAgY29uc3QgdnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2dS5jbGFzc05hbWUgPSAnbS12dSc7XG5cbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByb3cuY2xhc3NOYW1lID0gJ20tcm93JztcblxuICAgIGNvbnN0IHNvbG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzb2xvLmNsYXNzTmFtZSA9ICdtLWJ0bic7XG4gICAgc29sby50ZXh0Q29udGVudCA9ICdTJztcbiAgICBjb25zdCBtdXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbXV0ZS5jbGFzc05hbWUgPSAnbS1idG4nO1xuICAgIG11dGUudGV4dENvbnRlbnQgPSAnTSc7XG5cbiAgICBjb25zdCB2b2x1bWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHZvbHVtZS50eXBlID0gJ3JhbmdlJztcbiAgICB2b2x1bWUuY2xhc3NOYW1lID0gJ20tc2xpZGVyJztcbiAgICB2b2x1bWUubWluID0gJzAnO1xuICAgIHZvbHVtZS5tYXggPSAnMTAwJztcbiAgICB2b2x1bWUudmFsdWUgPSBTdHJpbmcoTWF0aC5yb3VuZChzdGF0ZS52b2x1bWUgKiAxMDApKTtcblxuICAgIGNvbnN0IHJldmVyYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcmV2ZXJiLnR5cGUgPSAncmFuZ2UnO1xuICAgIHJldmVyYi5jbGFzc05hbWUgPSAnbS1zZW5kJztcbiAgICByZXZlcmIubWluID0gJzAnO1xuICAgIHJldmVyYi5tYXggPSAnMTAwJztcbiAgICByZXZlcmIudmFsdWUgPSBTdHJpbmcoTWF0aC5yb3VuZChzdGF0ZS5yZXZlcmJTZW5kICogMTAwKSk7XG5cbiAgICBjb25zdCBkZWxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGVsYXkudHlwZSA9ICdyYW5nZSc7XG4gICAgZGVsYXkuY2xhc3NOYW1lID0gJ20tc2VuZCc7XG4gICAgZGVsYXkubWluID0gJzAnO1xuICAgIGRlbGF5Lm1heCA9ICcxMDAnO1xuICAgIGRlbGF5LnZhbHVlID0gU3RyaW5nKE1hdGgucm91bmQoc3RhdGUuZGVsYXlTZW5kICogMTAwKSk7XG5cbiAgICBjb25zdCBzZW5kcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlbmRzLmNsYXNzTmFtZSA9ICdtLXNlbmRzJztcbiAgICBjb25zdCByV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcldyYXAudGV4dENvbnRlbnQgPSAnUmV2JztcbiAgICByV3JhcC5hcHBlbmRDaGlsZChyZXZlcmIpO1xuICAgIGNvbnN0IGRXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkV3JhcC50ZXh0Q29udGVudCA9ICdEbHknO1xuICAgIGRXcmFwLmFwcGVuZENoaWxkKGRlbGF5KTtcbiAgICBzZW5kcy5hcHBlbmRDaGlsZChyV3JhcCk7XG4gICAgc2VuZHMuYXBwZW5kQ2hpbGQoZFdyYXApO1xuXG4gICAgZnVuY3Rpb24gc3luY0J1dHRvbnMoKSB7XG4gICAgICBjb25zdCBjdXIgPSBwbGF5ZXIuZ2V0VHJhY2tTdGF0ZShrZXkpO1xuICAgICAgc29sby5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnLCBjdXIuc29sbyk7XG4gICAgICBtdXRlLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIGN1ci5tdXRlZCk7XG4gICAgfVxuXG4gICAgc29sby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGN1ciA9IHBsYXllci5nZXRUcmFja1N0YXRlKGtleSk7XG4gICAgICBwbGF5ZXIuc2V0U29sbyhrZXksICFjdXIuc29sbyk7XG4gICAgICBzeW5jQnV0dG9ucygpO1xuICAgIH0pO1xuICAgIG11dGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBjdXIgPSBwbGF5ZXIuZ2V0VHJhY2tTdGF0ZShrZXkpO1xuICAgICAgcGxheWVyLnNldE11dGUoa2V5LCAhY3VyLm11dGVkKTtcbiAgICAgIHN5bmNCdXR0b25zKCk7XG4gICAgfSk7XG4gICAgdm9sdW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgcGxheWVyLnNldFZvbHVtZShrZXksIGNsYW1wKHBhcnNlSW50KHZvbHVtZS52YWx1ZSwgMTApIC8gMTAwKSk7XG4gICAgfSk7XG4gICAgcmV2ZXJiLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgcGxheWVyLnNldFJldmVyYlNlbmQoa2V5LCBjbGFtcChwYXJzZUludChyZXZlcmIudmFsdWUsIDEwKSAvIDEwMCkpO1xuICAgIH0pO1xuICAgIGRlbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgcGxheWVyLnNldERlbGF5U2VuZChrZXksIGNsYW1wKHBhcnNlSW50KGRlbGF5LnZhbHVlLCAxMCkgLyAxMDApKTtcbiAgICB9KTtcblxuICAgIHJvdy5hcHBlbmRDaGlsZChzb2xvKTtcbiAgICByb3cuYXBwZW5kQ2hpbGQobXV0ZSk7XG4gICAgcm93LmFwcGVuZENoaWxkKHZvbHVtZSk7XG5cbiAgICBzdHJpcC5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICBzdHJpcC5hcHBlbmRDaGlsZCh2dSk7XG4gICAgc3RyaXAuYXBwZW5kQ2hpbGQocm93KTtcbiAgICBzdHJpcC5hcHBlbmRDaGlsZChzZW5kcyk7XG4gICAgc3RyaXBzLmFwcGVuZENoaWxkKHN0cmlwKTtcblxuICAgIHN5bmNCdXR0b25zKCk7XG4gICAgcmV0dXJuIHsgZWw6IHN0cmlwLCB2dSwgbmFtZSwgc3luY0J1dHRvbnMgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZShkYXRhKSB7XG4gICAgY29uc3QgZW50cmllcyA9IEFycmF5LmlzQXJyYXkoZGF0YSlcbiAgICAgID8gZGF0YS5tYXAodHJhY2sgPT4gKHsga2V5OiBgJHt0cmFja1swXX0vJHt0cmFja1sxXX1gLCBuYW1lOiB0cmFja1sxXSB9KSlcbiAgICAgIDogW107XG4gICAgY29uc3QgbmV4dEtleXMgPSBuZXcgU2V0KGVudHJpZXMubWFwKGl0ZW0gPT4gaXRlbS5rZXkpKTtcblxuICAgIHN0cmlwTWFwLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIGlmICghbmV4dEtleXMuaGFzKGtleSkpIHtcbiAgICAgICAgdmFsdWUuZWwucmVtb3ZlKCk7XG4gICAgICAgIHN0cmlwTWFwLmRlbGV0ZShrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZW50cmllcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYgKCFzdHJpcE1hcC5oYXMoaXRlbS5rZXkpKSB7XG4gICAgICAgIHN0cmlwTWFwLnNldChpdGVtLmtleSwgY3JlYXRlU3RyaXAoaXRlbS5rZXksIGl0ZW0ubmFtZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc3RyaXAgPSBzdHJpcE1hcC5nZXQoaXRlbS5rZXkpO1xuICAgICAgICBzdHJpcC5uYW1lLnRleHRDb250ZW50ID0gc2hvcnROYW1lKGl0ZW0ubmFtZSk7XG4gICAgICAgIHN0cmlwLm5hbWUudGl0bGUgPSBpdGVtLm5hbWU7XG4gICAgICAgIHN0cmlwLnN5bmNCdXR0b25zKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBmbGFzaFZVKGtleSkge1xuICAgIGNvbnN0IHN0cmlwID0gc3RyaXBNYXAuZ2V0KGtleSk7XG4gICAgaWYgKCFzdHJpcCkgcmV0dXJuO1xuICAgIHN0cmlwLnZ1LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc3RyaXAudnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyksIDgwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZShmb3JjZU9wZW4pIHtcbiAgICBjb25zdCBvcGVuID0gdHlwZW9mIGZvcmNlT3BlbiA9PT0gJ2Jvb2xlYW4nID8gZm9yY2VPcGVuIDogcm9vdC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbGxhcHNlZCcpO1xuICAgIHJvb3QuY2xhc3NMaXN0LnRvZ2dsZSgnY29sbGFwc2VkJywgIW9wZW4pO1xuICAgIHJldHVybiBvcGVuO1xuICB9XG5cbiAgZnVuY3Rpb24gc3luY1RyYW5zcG9ydChuZXh0ID0ge30pIHtcbiAgICBpZiAodHlwZW9mIG5leHQudGVtcG8gPT09ICdudW1iZXInKSB7XG4gICAgICBicG0udmFsdWUgPSBTdHJpbmcobmV4dC50ZW1wbyk7XG4gICAgICBicG1WYWwudGV4dENvbnRlbnQgPSBTdHJpbmcobmV4dC50ZW1wbyk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbmV4dC5iYXJzID09PSAnbnVtYmVyJykge1xuICAgICAgYmFycy52YWx1ZSA9IFN0cmluZyhuZXh0LmJhcnMpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG5leHQudHJhbnNwb3NlID09PSAnbnVtYmVyJykge1xuICAgICAga2V5LnZhbHVlID0gU3RyaW5nKG5leHQudHJhbnNwb3NlKTtcbiAgICAgIGtleVZhbC50ZXh0Q29udGVudCA9IG5leHQudHJhbnNwb3NlID4gMCA/IGArJHtuZXh0LnRyYW5zcG9zZX1gIDogU3RyaW5nKG5leHQudHJhbnNwb3NlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBlbDogcm9vdCwgdXBkYXRlLCBmbGFzaFZVLCB0b2dnbGUsIHN5bmNUcmFuc3BvcnQgfTtcbn1cbiIsICJpbXBvcnQgeyBzY2FsZSB9IGZyb20gJ2hhcm1vbmljcyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vY29tcG9uZW50cy9wbGF5ZXIuanMnO1xuaW1wb3J0IHsgcGFyc2UsIG1lcmdlIH0gZnJvbSAnLi9saWInO1xuaW1wb3J0IHsgcmVkdWNlIH0gZnJvbSAnLi9saWIvcGFyc2VyLmpzJztcbmltcG9ydCB7IGNyZWF0ZUVkaXRvciB9IGZyb20gJy4vY29tcG9uZW50cy9lZGl0b3IuanMnO1xuaW1wb3J0IHsgY3JlYXRlTWl4ZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvbWl4ZXIuanMnO1xuXG5sZXQgdGVtcG8gPSAxNDY7XG5sZXQgYmFycyA9IDg7XG5sZXQgdHJhbnNwb3NlID0gMDtcbmxldCBwbGF5aW5nID0gZmFsc2U7XG5sZXQgZGVib3VuY2VUaW1lciA9IG51bGw7XG5sZXQgc3RhdHVzUmVzZXRUaW1lciA9IG51bGw7XG5sZXQgZWRpdG9yQXBpID0gbnVsbDtcbmxldCBtaXhlckFwaSA9IG51bGw7XG5sZXQgbGFzdENvbnRleHQgPSBudWxsO1xuXG5jb25zdCBwID0gd2luZG93LnAgfHwgbmV3IFBsYXllcigpO1xud2luZG93LnAgPSBwO1xuXG5jb25zdCBTVE9SQUdFX0tFWSA9ICdzY29vcHM6ZHJhZnQnO1xuXG5jb25zdCBCSUxMWV9KRUFOID0gYFxuICAlRiBhM3xjIzR8ZiM0XG4gICVHIGIzfGQjNHxnIzRcbiAgJUEgYyM0fGU0fGE0XG4gICVFIGIzfGQ0fGYjNFxuICAlQyBkM3xmIzR8YTQgOyBob3cgdG8gc3VtIG5vdGVzIHRvIGNob3Jkcz9cbiAgJUIgYyM0fGY0fGcjM3xiNFxuXG4gICMgc3ludGhcbiAgICBASU5UUk9cbiAgICAgICM1MTggICAgICAtLS0tIC0tLS0gLS0tLSAtLS0tIC0tLS0gLS0tLSAtLS0tIC0tLS1cbiAgICBATiA8IElOVFJPXG4gICAgQEFcbiAgICAgICM1MTggNzUgICB4LS0tIC0teC0gLS0tLSAtLS0tIHgtLS0gLS14LSAtLS0tIC0tLS0gJUYgJUcgJUEgJUdcbiAgICBAQiA8IEFcbiAgICAgICM1MTggICAgICAlRSAlICUgJVxuICAgIEBDIDwgQVxuICAgICAgIzUxOCAgICAgICVDICUgJUYgJVxuICAgIEBEIDwgQVxuICAgICAgIzUxOCAgICAgICVDICUgJUIgJVxuXG4gICMjIGJhc3NcbiAgICAlYyBmIzIgYyMyIGUyIGYjMiBlMiBjIzIgYjEgYyMyXG4gICAgJWQgYjIgYTIgYjIgZDMgZDMgYjIgYTIgOyBob3cgdG8gdHJhbnNwb3NlP1xuICAgIEBJTlRST1xuICAgICAgIzM5MyAgICAgIC0tLS0gLS0tLSAtLS0tIC0tLS0gLS0tLSAtLS0tIC0tLS0gLS0tLVxuICAgIEBBXG4gICAgICAjMzkzICAxMTIgeC14LSB4LXgtIHgteC0geC14LSB4LXgtIHgteC0geC14LSB4LXgtICVjICVcbiAgICBATiA8IEFcbiAgICBAQlxuICAgICAgIzM5MyAgICAgIHgteC0geC14LSAtLXgtIHgteC0geC14LSB4LXgtIC0teC0geC14LSAlZCAlXG4gICAgQEMgPCBJTlRST1xuICAgIEBEIDwgSU5UUk9cblxuICAjIyBkcnVtc1xuICAgIEBJTlRST1xuICAgICAgIzIxMjMgICAgIC0tLS0gLS0tLSAtLS0tIC0tLS0gLS0tLSAtLS0tIC0tLS0gLS0tLVxuICAgICAgIzIwODEgNTAgIHgteC0geC14LSB4LXgtIHgteC0geC14LSB4LXgtIHgteC0geC14LVxuICAgICAgIzIwMjggICAgIC0tLS0geC0tLSAtLS0tIHgtLS0gLS0tLSB4LS0tIC0tLS0geC0tLVxuICAgICAgIzIwMDEgICAgIHgtLS0gLS0tLSB4LS0tIC0tLS0geC0tLSAtLS0tIHgtLS0gLS0tLVxuICAgIEBBIDwgSU5UUk9cbiAgICAgICMyMTIzIDkwICB4LS0tIHgtLS0geC0tLSB4LS0tIHgtLS0geC0tLSB4LS0tIHgtLS1cbiAgICAgICMyMTIzIDcwICAtLXgtIC0teC0gLS14LSAtLXgtIC0teC0gLS14LSAtLXgtIC0teC1cbiAgICBATiA8IEFcbiAgICBAQiA8IEFcbiAgICBAQyA8IEFcbiAgICBARCA8IEFcblxuICA+IElOVFJPIE4gKjIgQSAlXG4gID4gQSAlIEIgQSBCIEFcbiAgPiBBICUgQiBBIEMgKjMgRFxuICA+IEEgJSBCIEEgQiBBXG4gID4gQSAlIEIgQSBCIEFcbiAgPiBBICUgQiBBIEMgKjMgRFxuICA+IEEgJSBCIEEgQiBBXG5gO1xuXG5jb25zdCBURVRSSVMgPSBgXG4lYSBFNCBCMyBDNCBENCBDNCBCMyBBM1xuJWIgQTMgQzQgRTQgRDQgQzQgQjNcbiVjIEIzIEM0IEQ0IEU0IEM0IEEzIEEzXG5cbiVkIEQ0IEY0IEE0IEc0IEY0IEU0XG4lZSBFNCBDNCBFNCBENCBDNCBCM1xuXG4lZiBFNCBDNCBENCBCMyBDNCBBMyBBYjMgQjNcbiVnIEU0IEM0IEQ0IEIzIEM0IEU0IEEzIEFiM1xuXG4jIHBpYW5vXG4gIEBBXG4gICAgIzMgeC14eCB4LXh4IHgteHggeC14eCB4LXh4IHgteC0geC14LSB4LS0tICVhICViICVjXG4gIEBCXG4gICAgIzMgLXgteCB4LXh4IHgteHggeC14eCB4LXh4IHgteC0geC14LSB4LS0tICVkICVlICVjXG4gIEBDXG4gICAgIzMgeC0tLSB4LS0tIHgtLS0geC0tLSB4LS0tIHgtLS0geC0tLSB4LS0tICVmXG4gIEBEIDwgQ1xuICAgICMzICVnXG5cbiV4IEUyIEUyIEEyIEEyIEFiMiBFMiBBMlxuJXkgRDIgRDIgQzIgQzIgRTIgRTIgQTJcbiV6IEEyIEEyIEFiMiBBYjIgQTIgQTIgQWIzXG4lel8gQTIgQTIgQWIyIEFiMiBBMiBBMiBBNCBBYjRcblxuIyBiYXNzXG4gIEBBXG4gICAgIzIgeC0tLSB4LS0tIHgtLS0geC0tLSB4LS0tIHgtLS0geC0tLSAtLS0tICV4XG4gIEBCIDwgQVxuICAgICMyICV5XG4gIEBDIDwgQVxuICAgICMyICV6XG4gIEBEXG4gICAgIzIgeC0tLSB4LS0tIHgtLS0geC0tLSB4LS0tIHgteC0geC0tLSAtLS0tICV6X1xuXG4+IEEgQiBBIEIgQyBEXG5gLnRyaW0oKTtcblxuY29uc3QgUExBWUdST1VORCA9IGBcbiVhIEM0IHBocnlnaWFuLi4gKysgSSBJIElJSSBJVlxuXG4jIHNjYWxlc1xuICBAQVxuICAgICMzIDEwMCAteC14IC14LXggLXgteCAteC14ICVhICVhXG5cbiMjIGRydW1zXG4gIEBBXG4gICAgIzAgMTIwIFt4eF0tW3h4XS0gW3h4XS1beHhdLSBkIzFcbiAgICAjMCAxMTAgLXgteCAteC14IGQyXG4gICAgIzAgMTAwIFt4eF1beHhdW3h4XVt4eF0gW3h4XVt4eF1beHhdW3h4XSBmIzJcblxuPiBBICo0XG5gLnRyaW0oKTtcblxuY29uc3QgTE9DS1MgPSBgXG4lQ20gYzR8ZWI0fGc0ICVcbiVGbSBjNHxmNHxnIzQgJVxuXG4jIGRydW1zXG4gIEBBXG4gICAgIzAgMTI3IHh4eHh4eHh4eHh4W3h4XXh4eHggW3h4XXh4eHh4eHh4eHh4eHh4eCBmIzJcbiAgICAjMCAxMjcgLS14LS0teC0tLXgteC14W3h4XSAtLXgtLS14LS0teC0tWy14XXgtIGMjMlxuICAgICMwIDkwICAtLS0tLS0tLS0tLS0tLS0teF9fXy0tLS0tLS0tLS0tLSBhM1xuICAgICMwIDEyMCAtLVt4eF0tLS1beHhdLS0tW3h4XS0tLVt4eF0tIGQjMVxuXG4jIyBza2Fua2luZ1xuICBAQVxuICAgICMxIDEwMCAteC14LXgteC14LXgteC14ICVDbSAlRm1cblxuPiBBICo0XG5gLnRyaW0oKTtcblxuY29uc3QgUFJFU0VUUyA9IHtcbiAgdGV0cmlzOiBURVRSSVMsXG4gIGJpbGx5X2plYW46IEJJTExZX0pFQU4sXG4gIHBsYXlncm91bmQ6IFBMQVlHUk9VTkQsXG4gIGxvY2tzOiBMT0NLUyxcbn07XG5cbmNvbnN0IFBSRVNFVF9MQUJFTFMgPSB7XG4gIHRldHJpczogJ1RldHJpcycsXG4gIGJpbGx5X2plYW46ICdCaWxseSBKZWFuJyxcbiAgcGxheWdyb3VuZDogJ1BsYXlncm91bmQnLFxuICBsb2NrczogJ0xvY2tzJyxcbn07XG5cbmNvbnN0IFNDQUxFX0lORk8gPSB7XG4gIG1ham9yOiAnVyBXIEggVyBXIFcgSCAgLSAgZG8gcmUgbWkgZmEgc29sIGxhIHRpJyxcbiAgbWlub3I6ICdXIEggVyBXIEggVyBXICAtICBkbyByZSBtaWIgZmEgc29sIGxhYiBzaWInLFxuICBkb3JpYW46ICdXIEggVyBXIFcgSCBXICAtICBtaW5vciB3aXRoIHJhaXNlZCA2dGgnLFxuICBwaHJ5Z2lhbjogJ0ggVyBXIFcgSCBXIFcgIC0gIG1pbm9yIHdpdGggbG93ZXJlZCAybmQnLFxuICBseWRpYW46ICdXIFcgVyBIIFcgVyBIICAtICBtYWpvciB3aXRoIHJhaXNlZCA0dGgnLFxuICBtaXhvbHlkaWFuOiAnVyBXIEggVyBXIEggVyAgLSAgbWFqb3Igd2l0aCBsb3dlcmVkIDd0aCcsXG4gIGxvY3JpYW46ICdIIFcgVyBIIFcgVyBXICAtICBkaW1pbmlzaGVkIGZsYXZvcicsXG59O1xuXG5mdW5jdGlvbiBidWlsZChtaWRpKSB7XG4gIGNvbnN0IG1peCA9IFtdO1xuXG4gIGZ1bmN0aW9uIGdldChudGgsIG5hbWUpIHtcbiAgICBjb25zdCBrZXkgPSBudGggKyBuYW1lO1xuXG4gICAgaWYgKCFnZXRba2V5XSkge1xuICAgICAgY29uc3QgdHJhY2sgPSBbbnRoLCBuYW1lLCBbXV07XG4gICAgICBtaXgucHVzaCh0cmFjayk7XG4gICAgICBnZXRba2V5XSA9IHsgdHJhY2sgfTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFtrZXldO1xuICB9XG5cbiAgbWlkaS5mb3JFYWNoKHNlY3Rpb24gPT4ge1xuICAgIHNlY3Rpb24uZm9yRWFjaChwYXJ0cyA9PiB7XG4gICAgICBwYXJ0cy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICBjb25zdCB7IHRyYWNrIH0gPSBnZXQoZVswXSwgZVsxXSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZVsyXS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIHRyYWNrWzJdLnB1c2goZVsyXVtpXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIG1peDtcbn1cblxuZnVuY3Rpb24gZ2V0RGF0YShpbnB1dCkge1xuICB0cnkge1xuICAgIGxhc3RDb250ZXh0ID0gcGFyc2UoaW5wdXQpO1xuICAgIHJldHVybiBidWlsZChtZXJnZShsYXN0Q29udGV4dCkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgbGFzdENvbnRleHQgPSBudWxsO1xuICAgIGNvbnNvbGUuZXJyb3IoJ1BhcnNlIGVycm9yOicsIGUpO1xuICAgIHNob3dFcnJvcihlLm1lc3NhZ2UgfHwgJ1BhcnNlIGVycm9yJyk7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVWYXJUb29sdGlwKG5hbWUpIHtcbiAgaWYgKCFsYXN0Q29udGV4dCB8fCAhbGFzdENvbnRleHQuZGF0YSB8fCAhbGFzdENvbnRleHQuZGF0YVtuYW1lXSkgcmV0dXJuIG51bGw7XG4gIHRyeSB7XG4gICAgY29uc3QgZGF0YSA9IHJlZHVjZShsYXN0Q29udGV4dC5kYXRhW25hbWVdLCBsYXN0Q29udGV4dC5kYXRhKTtcbiAgICBjb25zdCBvdXQgPSBBcnJheS5pc0FycmF5KGRhdGEpID8gZGF0YS5mbGF0KEluZmluaXR5KSA6IFtkYXRhXTtcbiAgICBjb25zdCBzaG93biA9IG91dC5zbGljZSgwLCAxNikubWFwKGl0ZW0gPT4gKFxuICAgICAgQXJyYXkuaXNBcnJheShpdGVtKSA/IGl0ZW0uam9pbignfCcpIDogU3RyaW5nKGl0ZW0pXG4gICAgKSk7XG4gICAgcmV0dXJuIHNob3duLmpvaW4oJyAgJykgKyAob3V0Lmxlbmd0aCA+IHNob3duLmxlbmd0aCA/ICcgXHUyMDI2JyA6ICcnKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVJbnN0cnVtZW50VG9vbHRpcCh2YWx1ZSkge1xuICBjb25zdCBuID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgaWYgKE51bWJlci5pc05hTihuKSkgcmV0dXJuIG51bGw7XG4gIHRyeSB7XG4gICAgY29uc3QgaW5mbyA9IG4gPj0gMjAwMFxuICAgICAgPyBwLnBsYXllci5sb2FkZXIuZHJ1bUluZm8obiAtIDIwMDApXG4gICAgICA6IHAucGxheWVyLmxvYWRlci5pbnN0cnVtZW50SW5mbyhuKTtcbiAgICByZXR1cm4gaW5mbyAmJiBpbmZvLnRpdGxlID8gaW5mby50aXRsZSA6IG51bGw7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlTW9kZVRvb2x0aXAobmFtZSkge1xuICBpZiAoIW5hbWUpIHJldHVybiBudWxsO1xuICByZXR1cm4gU0NBTEVfSU5GT1tuYW1lLnRvTG93ZXJDYXNlKCldIHx8IG51bGw7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZU5vdGUocykge1xuICByZXR1cm4gcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHMuc2xpY2UoMSk7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVOb3RlVG9vbHRpcChub3RlU3RyKSB7XG4gIGNvbnN0IFNFTUlUT05FUyA9IHsgYzogMCwgZDogMiwgZTogNCwgZjogNSwgZzogNywgYTogOSwgYjogMTEgfTtcbiAgY29uc3QgbSA9IG5vdGVTdHIubWF0Y2goL14oW2EtZ0EtR10pKFsjYl0/KShcXGQrKSQvKTtcbiAgaWYgKCFtKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgYmFzZSA9IFNFTUlUT05FU1ttWzFdLnRvTG93ZXJDYXNlKCldO1xuICBjb25zdCBhbHQgPSBtWzJdID09PSAnIycgPyAxIDogbVsyXSA9PT0gJ2InID8gLTEgOiAwO1xuICBjb25zdCBvY3QgPSBwYXJzZUludChtWzNdLCAxMCk7XG4gIGNvbnN0IG1pZGkgPSAob2N0ICsgMSkgKiAxMiArIGJhc2UgKyBhbHQ7XG4gIGNvbnN0IGZyZXEgPSAoNDQwICogTWF0aC5wb3coMiwgKG1pZGkgLSA2OSkgLyAxMikpLnRvRml4ZWQoMSk7XG4gIGNvbnN0IGlzTWlkZGxlQyA9IG1pZGkgPT09IDYwO1xuICByZXR1cm4gYE1JREkgJHttaWRpfSBcdTAwQjcgJHtmcmVxfSBIeiR7aXNNaWRkbGVDID8gJyBcdTAwQjcgbWlkZGxlIEMnIDogJyd9YDtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUNob3JkVG9vbHRpcChjaG9yZFN0cikge1xuICByZXR1cm4gY2hvcmRTdHIuc3BsaXQoJ3wnKS5tYXAobm9ybWFsaXplTm90ZSkuam9pbignICAnKTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZU1vZGVOb3Rlcyhtb2RlTmFtZSkge1xuICB0cnkge1xuICAgIHJldHVybiBzY2FsZShgQzQgJHttb2RlTmFtZX1gKTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVZlbG9jaXR5VG9vbHRpcCh2KSB7XG4gIGNvbnN0IG4gPSBwYXJzZUludCh2LCAxMCk7XG4gIGlmIChOdW1iZXIuaXNOYU4obikgfHwgbiA8IDAgfHwgbiA+IDEyNykgcmV0dXJuIG51bGw7XG4gIGNvbnN0IHBjdCA9IE1hdGgucm91bmQoKG4gLyAxMjcpICogMTAwKTtcbiAgY29uc3QgZGIgPSBuID4gMCA/ICgyMCAqIE1hdGgubG9nMTAobiAvIDEyNykpLnRvRml4ZWQoMSkgOiAnXHUyMjEyXHUyMjFFJztcbiAgY29uc3QgZHluID0gbiA9PT0gMCA/ICdzaWxlbnQgKHBwcCknXG4gICAgOiBuIDw9IDI1ID8gJ3Zlcnkgc29mdCAocHApJ1xuICAgIDogbiA8PSA1MCA/ICdzb2Z0IChtcCknXG4gICAgOiBuIDw9IDc1ID8gJ21lZGl1bSAobWYpJ1xuICAgIDogbiA8PSAxMDAgPyAnbG91ZCAoZiknXG4gICAgOiBuIDw9IDExNSA/ICd2ZXJ5IGxvdWQgKGZmKSdcbiAgICA6ICdtYXhpbXVtIChmZmYpJztcbiAgcmV0dXJuIGAke3BjdH0lIG9mIG1heCBcdTAwQjcgJHtkYn0gZEIgXHUwMEI3ICR7ZHlufWA7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVTZWN0aW9uVG9vbHRpcChuYW1lKSB7XG4gIGlmICghZWRpdG9yQXBpKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgbGluZXMgPSBlZGl0b3JBcGkuZ2V0VmFsdWUoKS5zcGxpdCgnXFxuJyk7XG4gIGNvbnN0IHNlY3Rpb25IZWFkZXIgPSBgQCR7bmFtZX1gO1xuICBjb25zdCBzdGFydCA9IGxpbmVzLmZpbmRJbmRleChsaW5lID0+IGxpbmUudHJpbSgpID09PSBzZWN0aW9uSGVhZGVyKTtcbiAgaWYgKHN0YXJ0IDwgMCkgcmV0dXJuIG51bGw7XG5cbiAgY29uc3QgcHJldmlldyA9IFtdO1xuICBmb3IgKGxldCBpID0gc3RhcnQgKyAxOyBpIDwgbGluZXMubGVuZ3RoICYmIHByZXZpZXcubGVuZ3RoIDwgNDsgaSArPSAxKSB7XG4gICAgY29uc3QgbGluZSA9IGxpbmVzW2ldO1xuICAgIGlmICgvXlxccypALy50ZXN0KGxpbmUpKSBicmVhaztcbiAgICBpZiAobGluZS50cmltKCkpIHByZXZpZXcucHVzaChsaW5lLnRyaW0oKSk7XG4gIH1cbiAgcmV0dXJuIHByZXZpZXcubGVuZ3RoID8gcHJldmlldy5qb2luKCcgfCAnKSA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIHNob3dFcnJvcihtc2cpIHtcbiAgY2xlYXJUaW1lb3V0KHN0YXR1c1Jlc2V0VGltZXIpO1xuICBjb25zdCBzdGF0dXNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0dXMtbWVzc2FnZScpO1xuICBjb25zdCBzdGF0dXNiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdHVzYmFyJyk7XG4gIGlmIChzdGF0dXNFbCkge1xuICAgIHN0YXR1c0VsLnRleHRDb250ZW50ID0gYEVycm9yOiAke21zZ31gO1xuICB9XG4gIGlmIChzdGF0dXNiYXIpIHtcbiAgICBzdGF0dXNiYXIuZGF0YXNldC5zdGF0ZSA9ICdlcnJvcic7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvd1N0YXR1cyhtc2csIHN0YXRlID0gJ3JlYWR5Jykge1xuICBjbGVhclRpbWVvdXQoc3RhdHVzUmVzZXRUaW1lcik7XG4gIGNvbnN0IHN0YXR1c0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXR1cy1tZXNzYWdlJyk7XG4gIGNvbnN0IHN0YXR1c2JhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0dXNiYXInKTtcbiAgaWYgKHN0YXR1c0VsKSB7XG4gICAgc3RhdHVzRWwudGV4dENvbnRlbnQgPSBtc2c7XG4gIH1cbiAgaWYgKHN0YXR1c2Jhcikge1xuICAgIHN0YXR1c2Jhci5kYXRhc2V0LnN0YXRlID0gc3RhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0UmVhZHlTdGF0dXMoKSB7XG4gIHNob3dTdGF0dXMoJ1JlYWR5JywgJ3JlYWR5Jyk7XG59XG5cbmZ1bmN0aW9uIG1hcmtEaXJ0eSgpIHtcbiAgc2hvd1N0YXR1cygnVW5zYXZlZCBjaGFuZ2VzJywgJ3dhcm5pbmcnKTtcbn1cblxuZnVuY3Rpb24gc2F2ZVN1Y2Nlc3MoKSB7XG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGhoID0gU3RyaW5nKG5vdy5nZXRIb3VycygpKS5wYWRTdGFydCgyLCAnMCcpO1xuICBjb25zdCBtbSA9IFN0cmluZyhub3cuZ2V0TWludXRlcygpKS5wYWRTdGFydCgyLCAnMCcpO1xuICBzaG93U3RhdHVzKGBTYXZlZCAke2hofToke21tfWAsICdyZWFkeScpO1xufVxuXG5mdW5jdGlvbiBzZXRRdWVyeUxvYWQobmFtZSkge1xuICBjb25zdCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgaWYgKG5hbWUpIHtcbiAgICB1cmwuc2VhcmNoUGFyYW1zLnNldCgnbG9hZCcsIG5hbWUpO1xuICB9IGVsc2Uge1xuICAgIHVybC5zZWFyY2hQYXJhbXMuZGVsZXRlKCdsb2FkJyk7XG4gIH1cbiAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHt9LCAnJywgdXJsLnRvU3RyaW5nKCkpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQbGF5QnV0dG9uKCkge1xuICBjb25zdCBwbGF5QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXktYnRuJyk7XG4gIGlmIChwbGF5QnRuKSBwbGF5QnRuLnRleHRDb250ZW50ID0gcGxheWluZyA/ICdcdTI1QjYgUGxheWluZy4uLicgOiAnXHUyNUI2IFBsYXknO1xufVxuXG5mdW5jdGlvbiBsb2FkUHJlc2V0QnlOYW1lKG5hbWUpIHtcbiAgY29uc3QgcHJlc2V0ID0gUFJFU0VUU1tuYW1lXTtcbiAgaWYgKCFlZGl0b3JBcGkgfHwgIXByZXNldCkgcmV0dXJuO1xuXG4gIGVkaXRvckFwaS5zZXRWYWx1ZShwcmVzZXQudHJpbSgpKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU1RPUkFHRV9LRVksIGVkaXRvckFwaS5nZXRWYWx1ZSgpKTtcbiAgc2V0UXVlcnlMb2FkKG5hbWUpO1xuICBzaG93U3RhdHVzKGBMb2FkZWQgcHJlc2V0OiAke1BSRVNFVF9MQUJFTFNbbmFtZV0gfHwgbmFtZX1gLCAncmVhZHknKTtcbiAgdXBkYXRlTG9vcCgpO1xuICBlZGl0b3JBcGkuZm9jdXMoKTtcbn1cblxuZnVuY3Rpb24gc3luY01peGVyKGRhdGEpIHtcbiAgaWYgKCFtaXhlckFwaSkgcmV0dXJuO1xuICBtaXhlckFwaS51cGRhdGUoZGF0YSk7XG59XG5cbmZ1bmN0aW9uIGJpbmRHbG9iYWxTaG9ydGN1dHMoKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICBjb25zdCBlZGl0aW5nRmllbGQgPSB0YXJnZXQgJiYgKFxuICAgICAgdGFyZ2V0LnRhZ05hbWUgPT09ICdURVhUQVJFQSdcbiAgICAgIHx8IHRhcmdldC50YWdOYW1lID09PSAnSU5QVVQnXG4gICAgICB8fCB0YXJnZXQudGFnTmFtZSA9PT0gJ1NFTEVDVCdcbiAgICApO1xuXG4gICAgaWYgKGUuY29kZSA9PT0gJ1NwYWNlJyAmJiAhZWRpdGluZ0ZpZWxkKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAocGxheWluZykgc3RvcCgpO1xuICAgICAgZWxzZSBwbGF5KCk7XG4gICAgfVxuICAgIGlmIChlLmNvZGUgPT09ICdFc2NhcGUnKSB7XG4gICAgICBzdG9wKCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRE9NKGluaXRpYWxUZXh0LCBpbml0aWFsUHJlc2V0KSB7XG4gIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJyc7XG5cbiAgY29uc3QgdG9vbGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b29sYmFyLmlkID0gJ3Rvb2xiYXInO1xuXG4gIGNvbnN0IGFib3V0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgYWJvdXRMaW5rLmlkID0gJ2Fib3V0LWxpbmsnO1xuICBhYm91dExpbmsuaHJlZiA9ICdsYW5kaW5nLmh0bWwnO1xuICBhYm91dExpbmsudGV4dENvbnRlbnQgPSAnXHUyMTkwIEFib3V0JztcblxuICBjb25zdCBwbGF5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHBsYXlCdG4uaWQgPSAncGxheS1idG4nO1xuICBwbGF5QnRuLnRleHRDb250ZW50ID0gJ1x1MjVCNiBQbGF5JztcbiAgcGxheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXkpO1xuXG4gIGNvbnN0IHN0b3BCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc3RvcEJ0bi5pZCA9ICdzdG9wLWJ0bic7XG4gIHN0b3BCdG4udGV4dENvbnRlbnQgPSAnXHUyNUEwIFN0b3AnO1xuICBzdG9wQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RvcCk7XG5cbiAgY29uc3QgbWl4ZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbWl4ZXJCdG4uaWQgPSAnbWl4ZXItYnRuJztcbiAgbWl4ZXJCdG4udGV4dENvbnRlbnQgPSAnXHUyMjlFIE1peGVyJztcbiAgY29uc3QgbWlkaUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBtaWRpQnRuLmlkID0gJ21pZGktYnRuJztcbiAgbWlkaUJ0bi50ZXh0Q29udGVudCA9ICdcdUQ4M0NcdURGOUIgTUlESSc7XG4gIG1pZGlCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICBtaWRpQnRuLnRpdGxlID0gJ01JREkgc3VwcG9ydCBjb21lcyBuZXh0JztcblxuICBjb25zdCBwcmVzZXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIHByZXNldExhYmVsLmNsYXNzTmFtZSA9ICdmaWVsZC1ncm91cCc7XG4gIHByZXNldExhYmVsLnRleHRDb250ZW50ID0gJ1ByZXNldCAnO1xuICBjb25zdCBwcmVzZXRTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgcHJlc2V0U2VsZWN0LmlkID0gJ3ByZXNldC1zZWxlY3QnO1xuICBjb25zdCBjdXN0b21PcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgY3VzdG9tT3B0aW9uLnZhbHVlID0gJyc7XG4gIGN1c3RvbU9wdGlvbi50ZXh0Q29udGVudCA9ICdDdXN0b20nO1xuICBwcmVzZXRTZWxlY3QuYXBwZW5kQ2hpbGQoY3VzdG9tT3B0aW9uKTtcbiAgT2JqZWN0LmtleXMoUFJFU0VUUykuZm9yRWFjaChuYW1lID0+IHtcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb24udmFsdWUgPSBuYW1lO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IFBSRVNFVF9MQUJFTFNbbmFtZV0gfHwgbmFtZTtcbiAgICBwcmVzZXRTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgfSk7XG4gIGlmIChpbml0aWFsUHJlc2V0ICYmIFBSRVNFVFNbaW5pdGlhbFByZXNldF0pIHtcbiAgICBwcmVzZXRTZWxlY3QudmFsdWUgPSBpbml0aWFsUHJlc2V0O1xuICB9XG4gIHByZXNldFNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgaWYgKHByZXNldFNlbGVjdC52YWx1ZSkge1xuICAgICAgbG9hZFByZXNldEJ5TmFtZShwcmVzZXRTZWxlY3QudmFsdWUpO1xuICAgIH1cbiAgfSk7XG4gIHByZXNldExhYmVsLmFwcGVuZENoaWxkKHByZXNldFNlbGVjdCk7XG5cbiAgdG9vbGJhci5hcHBlbmRDaGlsZChhYm91dExpbmspO1xuICB0b29sYmFyLmFwcGVuZENoaWxkKHBsYXlCdG4pO1xuICB0b29sYmFyLmFwcGVuZENoaWxkKHN0b3BCdG4pO1xuICB0b29sYmFyLmFwcGVuZENoaWxkKG1peGVyQnRuKTtcbiAgdG9vbGJhci5hcHBlbmRDaGlsZChtaWRpQnRuKTtcbiAgdG9vbGJhci5hcHBlbmRDaGlsZChwcmVzZXRMYWJlbCk7XG5cbiAgZWRpdG9yQXBpID0gY3JlYXRlRWRpdG9yKGluaXRpYWxUZXh0LCB7XG4gICAgcmVzb2x2ZU5vdGU6IHJlc29sdmVOb3RlVG9vbHRpcCxcbiAgICByZXNvbHZlQ2hvcmQ6IHJlc29sdmVDaG9yZFRvb2x0aXAsXG4gICAgcmVzb2x2ZU1vZGU6IHJlc29sdmVNb2RlVG9vbHRpcCxcbiAgICByZXNvbHZlTW9kZU5vdGVzLFxuICAgIHJlc29sdmVWZWxvY2l0eTogcmVzb2x2ZVZlbG9jaXR5VG9vbHRpcCxcbiAgICByZXNvbHZlU2VjdGlvbjogcmVzb2x2ZVNlY3Rpb25Ub29sdGlwLFxuICAgIHJlc29sdmVWYXI6IHJlc29sdmVWYXJUb29sdGlwLFxuICAgIHJlc29sdmVJbnN0cnVtZW50OiByZXNvbHZlSW5zdHJ1bWVudFRvb2x0aXAsXG4gICAgb25JbnB1dDogKCkgPT4ge1xuICAgICAgY29uc3QgcHJlc2V0U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXNldC1zZWxlY3QnKTtcbiAgICAgIGlmIChwcmVzZXRTZWxlY3QpIHByZXNldFNlbGVjdC52YWx1ZSA9ICcnO1xuICAgICAgc2V0UXVlcnlMb2FkKG51bGwpO1xuICAgICAgbWFya0RpcnR5KCk7XG4gICAgICB1cGRhdGVMb29wKCk7XG4gICAgICBzYXZlRHJhZnQoKTtcbiAgICB9LFxuICB9KTtcblxuICBlZGl0b3JBcGkub24oJ2tleWRvd24nLCBlID0+IHtcbiAgICBpZiAoKGUubWV0YUtleSB8fCBlLmN0cmxLZXkpICYmIGUuY29kZSA9PT0gJ0VudGVyJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHBsYXlpbmcpIHN0b3AoKTtcbiAgICAgIGVsc2UgcGxheSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3Qgc3RhdHVzYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHN0YXR1c2Jhci5pZCA9ICdzdGF0dXNiYXInO1xuICBzdGF0dXNiYXIuZGF0YXNldC5zdGF0ZSA9ICdyZWFkeSc7XG5cbiAgY29uc3QgYmVhdERvdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYmVhdERvdHMuaWQgPSAnYmVhdC1kb3RzJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSArPSAxKSB7XG4gICAgY29uc3QgZG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGRvdC5jbGFzc05hbWUgPSAnYmVhdC1kb3QnO1xuICAgIGJlYXREb3RzLmFwcGVuZENoaWxkKGRvdCk7XG4gIH1cblxuICBjb25zdCBzdGF0dXNNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzdGF0dXNNZXNzYWdlLmlkID0gJ3N0YXR1cy1tZXNzYWdlJztcbiAgc3RhdHVzTWVzc2FnZS50ZXh0Q29udGVudCA9ICdSZWFkeSc7XG5cbiAgc3RhdHVzYmFyLmFwcGVuZENoaWxkKGJlYXREb3RzKTtcbiAgc3RhdHVzYmFyLmFwcGVuZENoaWxkKHN0YXR1c01lc3NhZ2UpO1xuXG4gIGNvbnN0IHdvcmtzcGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3b3Jrc3BhY2UuaWQgPSAnd29ya3NwYWNlJztcbiAgbWl4ZXJBcGkgPSBjcmVhdGVNaXhlcihwLCB7XG4gICAgdGVtcG8sXG4gICAgYmFycyxcbiAgICB0cmFuc3Bvc2UsXG4gICAgb25DaGFuZ2UobmV4dCkge1xuICAgICAgaWYgKHR5cGVvZiBuZXh0LnRlbXBvID09PSAnbnVtYmVyJykgdGVtcG8gPSBuZXh0LnRlbXBvO1xuICAgICAgaWYgKHR5cGVvZiBuZXh0LmJhcnMgPT09ICdudW1iZXInKSBiYXJzID0gbmV4dC5iYXJzO1xuICAgICAgaWYgKHR5cGVvZiBuZXh0LnRyYW5zcG9zZSA9PT0gJ251bWJlcicpIHRyYW5zcG9zZSA9IG5leHQudHJhbnNwb3NlO1xuICAgICAgdXBkYXRlTG9vcCgpO1xuICAgIH0sXG4gIH0pO1xuICBtaXhlckFwaS50b2dnbGUoZmFsc2UpO1xuICBtaXhlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBvcGVuID0gbWl4ZXJBcGkudG9nZ2xlKCk7XG4gICAgd29ya3NwYWNlLmNsYXNzTGlzdC50b2dnbGUoJ21peGVyLW9wZW4nLCBvcGVuKTtcbiAgfSk7XG4gIHAub25CZWF0ID0gKGtleSwgd2hlbikgPT4ge1xuICAgIGNvbnN0IHdhaXQgPSBNYXRoLm1heCgwLCAod2hlbiAtIHAuYXVkaW9Db250ZXh0LmN1cnJlbnRUaW1lKSAqIDEwMDApO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gbWl4ZXJBcGkuZmxhc2hWVShrZXkpLCB3YWl0KTtcbiAgfTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvb2xiYXIpO1xuICB3b3Jrc3BhY2UuYXBwZW5kQ2hpbGQoZWRpdG9yQXBpLmVsKTtcbiAgd29ya3NwYWNlLmFwcGVuZENoaWxkKG1peGVyQXBpLmVsKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh3b3Jrc3BhY2UpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN0YXR1c2Jhcik7XG5cbiAgcmV0dXJuIGVkaXRvckFwaTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9hZEV4YW1wbGUobmFtZSkge1xuICBpZiAoUFJFU0VUU1tuYW1lXSkgcmV0dXJuIFBSRVNFVFNbbmFtZV07XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgZXhhbXBsZXMvJHtuYW1lfS5kdWJgKTtcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gaWdub3JlIGFuZCB1c2UgZmFsbGJhY2tcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVzb2x2ZUluaXRpYWxEcmFmdCgpIHtcbiAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgY29uc3QgbG9hZCA9IHBhcmFtcy5nZXQoJ2xvYWQnKTtcblxuICBpZiAobG9hZCkge1xuICAgIGNvbnN0IGRyYWZ0ID0gYXdhaXQgbG9hZEV4YW1wbGUobG9hZCk7XG4gICAgaWYgKGRyYWZ0KSByZXR1cm4gZHJhZnQudHJpbSgpO1xuICB9XG5cbiAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFNUT1JBR0VfS0VZKSB8fCBURVRSSVM7XG59XG5cbmZ1bmN0aW9uIHNhdmVEcmFmdCgpIHtcbiAgY2xlYXJUaW1lb3V0KGRlYm91bmNlVGltZXIpO1xuICBkZWJvdW5jZVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYgKGVkaXRvckFwaSkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU1RPUkFHRV9LRVksIGVkaXRvckFwaS5nZXRWYWx1ZSgpKTtcbiAgICAgIHNhdmVTdWNjZXNzKCk7XG4gICAgfVxuICB9LCAzMDApO1xufVxuXG5mdW5jdGlvbiBwbGF5KCkge1xuICBzdG9wKCk7XG4gIGlmICghZWRpdG9yQXBpKSByZXR1cm47XG5cbiAgaWYgKHAuYXVkaW9Db250ZXh0LnN0YXRlID09PSAnc3VzcGVuZGVkJykge1xuICAgIHAuYXVkaW9Db250ZXh0LnJlc3VtZSgpO1xuICB9XG4gIHBsYXlpbmcgPSB0cnVlO1xuICBjb25zdCBkYXRhID0gZ2V0RGF0YShlZGl0b3JBcGkuZ2V0VmFsdWUoKSk7XG4gIHAuc2V0TG9vcE1hY2hpbmUoZGF0YSwgdGVtcG8sIGJhcnMsIHRyYW5zcG9zZSk7XG4gIHN5bmNNaXhlcihkYXRhKTtcbiAgcC5wbGF5TG9vcE1hY2hpbmUoKTtcbiAgdXBkYXRlUGxheUJ1dHRvbigpO1xuICBzaG93U3RhdHVzKCdQbGF5aW5nJywgJ3BsYXlpbmcnKTtcbn1cblxuZnVuY3Rpb24gc3RvcCgpIHtcbiAgaWYgKHBsYXlpbmcpIHtcbiAgICBwbGF5aW5nID0gZmFsc2U7XG4gICAgcC5zdG9wTG9vcE1hY2hpbmUoKTtcbiAgfVxuICB1cGRhdGVQbGF5QnV0dG9uKCk7XG4gIHNldFJlYWR5U3RhdHVzKCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxvb3AoKSB7XG4gIGlmICghZWRpdG9yQXBpIHx8ICFwKSByZXR1cm47XG5cbiAgY29uc3QgZGF0YSA9IGdldERhdGEoZWRpdG9yQXBpLmdldFZhbHVlKCkpO1xuICBjb25zdCBjaGFuZ2VkID0gcC5zZXRMb29wTWFjaGluZShkYXRhLCB0ZW1wbywgYmFycywgdHJhbnNwb3NlKTtcbiAgc3luY01peGVyKGRhdGEpO1xuICBpZiAoY2hhbmdlZCAmJiBwbGF5aW5nKSB7XG4gICAgcC5wbGF5TG9vcE1hY2hpbmUocC5iZWF0SW5kZXgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGJlYXRJbmRpY2F0b3IoKSB7XG4gIGNvbnN0IGRvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmVhdC1kb3QnKTtcbiAgY29uc3QgYWN0aXZlSW5kZXggPSBwLmxvb3BTdGFydGVkID8gcC5iZWF0SW5kZXggOiAtMTtcbiAgZG90cy5mb3JFYWNoKChkb3QsIGkpID0+IGRvdC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnLCBpID09PSBhY3RpdmVJbmRleCkpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYmVhdEluZGljYXRvcik7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGJvb3RzdHJhcCgpIHtcbiAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgY29uc3QgaW5pdGlhbFByZXNldCA9IHBhcmFtcy5nZXQoJ2xvYWQnKTtcbiAgY29uc3QgaW5pdGlhbERyYWZ0ID0gYXdhaXQgcmVzb2x2ZUluaXRpYWxEcmFmdCgpO1xuICBjb25zdCBlZGl0b3IgPSBjcmVhdGVET00oaW5pdGlhbERyYWZ0LCBpbml0aWFsUHJlc2V0KTtcbiAgYmluZEdsb2JhbFNob3J0Y3V0cygpO1xuICBjb25zdCBkYXRhID0gZ2V0RGF0YShlZGl0b3IuZ2V0VmFsdWUoKSk7XG4gIHAuc2V0TG9vcE1hY2hpbmUoZGF0YSwgdGVtcG8sIGJhcnMsIHRyYW5zcG9zZSk7XG4gIHN5bmNNaXhlcihkYXRhKTtcbiAgc2V0UmVhZHlTdGF0dXMoKTtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGJlYXRJbmRpY2F0b3IpO1xufVxuXG5ib290c3RyYXAoKTtcblxuZXhwb3J0IGRlZmF1bHQge307XG4iLCAiJ3VzZSBzdHJpY3QnXG5cbi8vIHV0aWxcbmZ1bmN0aW9uIGZpbGxTdHIgKHMsIG51bSkgeyByZXR1cm4gQXJyYXkobnVtICsgMSkuam9pbihzKSB9XG5mdW5jdGlvbiBpc051bSAoeCkgeyByZXR1cm4gdHlwZW9mIHggPT09ICdudW1iZXInIH1cbmZ1bmN0aW9uIGlzU3RyICh4KSB7IHJldHVybiB0eXBlb2YgeCA9PT0gJ3N0cmluZycgfVxuZnVuY3Rpb24gaXNEZWYgKHgpIHsgcmV0dXJuIHR5cGVvZiB4ICE9PSAndW5kZWZpbmVkJyB9XG5mdW5jdGlvbiBtaWRpVG9GcmVxIChtaWRpLCB0dW5pbmcpIHtcbiAgcmV0dXJuIE1hdGgucG93KDIsIChtaWRpIC0gNjkpIC8gMTIpICogKHR1bmluZyB8fCA0NDApXG59XG5cbnZhciBSRUdFWCA9IC9eKFthLWdBLUddKSgjezEsfXxiezEsfXx4ezEsfXwpKC0/XFxkKilcXHMqKC4qKVxccyokL1xuLyoqXG4gKiBBIHJlZ2V4IGZvciBtYXRjaGluZyBub3RlIHN0cmluZ3MgaW4gc2NpZW50aWZpYyBub3RhdGlvbi5cbiAqXG4gKiBAbmFtZSByZWdleFxuICogQGZ1bmN0aW9uXG4gKiBAcmV0dXJuIHtSZWdFeHB9IHRoZSByZWdleHAgdXNlZCB0byBwYXJzZSB0aGUgbm90ZSBuYW1lXG4gKlxuICogVGhlIG5vdGUgc3RyaW5nIHNob3VsZCBoYXZlIHRoZSBmb3JtIGBsZXR0ZXJbYWNjaWRlbnRhbHNdW29jdGF2ZV1bZWxlbWVudF1gXG4gKiB3aGVyZTpcbiAqXG4gKiAtIGxldHRlcjogKFJlcXVpcmVkKSBpcyBhIGxldHRlciBmcm9tIEEgdG8gRyBlaXRoZXIgdXBwZXIgb3IgbG93ZXIgY2FzZVxuICogLSBhY2NpZGVudGFsczogKE9wdGlvbmFsKSBjYW4gYmUgb25lIG9yIG1vcmUgYGJgIChmbGF0cyksIGAjYCAoc2hhcnBzKSBvciBgeGAgKGRvdWJsZSBzaGFycHMpLlxuICogVGhleSBjYW4gTk9UIGJlIG1peGVkLlxuICogLSBvY3RhdmU6IChPcHRpb25hbCkgYSBwb3NpdGl2ZSBvciBuZWdhdGl2ZSBpbnRlZ2VyXG4gKiAtIGVsZW1lbnQ6IChPcHRpb25hbCkgYWRkaXRpb25hbGx5IGFueXRoaW5nIGFmdGVyIHRoZSBkdXJhdGlvbiBpcyBjb25zaWRlcmVkIHRvXG4gKiBiZSB0aGUgZWxlbWVudCBuYW1lIChmb3IgZXhhbXBsZTogJ0MyIGRvcmlhbicpXG4gKlxuICogVGhlIGV4ZWN1dGVkIHJlZ2V4IGNvbnRhaW5zIChieSBhcnJheSBpbmRleCk6XG4gKlxuICogLSAwOiB0aGUgY29tcGxldGUgc3RyaW5nXG4gKiAtIDE6IHRoZSBub3RlIGxldHRlclxuICogLSAyOiB0aGUgb3B0aW9uYWwgYWNjaWRlbnRhbHNcbiAqIC0gMzogdGhlIG9wdGlvbmFsIG9jdGF2ZVxuICogLSA0OiB0aGUgcmVzdCBvZiB0aGUgc3RyaW5nICh0cmltbWVkKVxuICpcbiAqIEBleGFtcGxlXG4gKiB2YXIgcGFyc2VyID0gcmVxdWlyZSgnbm90ZS1wYXJzZXInKVxuICogcGFyc2VyLnJlZ2V4LmV4ZWMoJ2MjNCcpXG4gKiAvLyA9PiBbJ2MjNCcsICdjJywgJyMnLCAnNCcsICcnXVxuICogcGFyc2VyLnJlZ2V4LmV4ZWMoJ2MjNCBtYWpvcicpXG4gKiAvLyA9PiBbJ2MjNG1ham9yJywgJ2MnLCAnIycsICc0JywgJ21ham9yJ11cbiAqIHBhcnNlci5yZWdleCgpLmV4ZWMoJ0NNYWo3JylcbiAqIC8vID0+IFsnQ01hajcnLCAnQycsICcnLCAnJywgJ01hajcnXVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnZXggKCkgeyByZXR1cm4gUkVHRVggfVxuXG52YXIgU0VNSVRPTkVTID0gWzAsIDIsIDQsIDUsIDcsIDksIDExXVxuLyoqXG4gKiBQYXJzZSBhIG5vdGUgbmFtZSBpbiBzY2llbnRpZmljIG5vdGF0aW9uIGFuIHJldHVybiBpdCdzIGNvbXBvbmVudHMsXG4gKiBhbmQgc29tZSBudW1lcmljIHByb3BlcnRpZXMgaW5jbHVkaW5nIG1pZGkgbnVtYmVyIGFuZCBmcmVxdWVuY3kuXG4gKlxuICogQG5hbWUgcGFyc2VcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5vdGUgLSB0aGUgbm90ZSBzdHJpbmcgdG8gYmUgcGFyc2VkXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzVG9uaWMgLSB0cnVlIHRoZSBzdHJpbmdzIGl0J3Mgc3VwcG9zZWQgdG8gY29udGFpbiBhIG5vdGUgbnVtYmVyXG4gKiBhbmQgc29tZSBjYXRlZ29yeSAoZm9yIGV4YW1wbGUgYW4gc2NhbGU6ICdDIyBtYWpvcicpLiBJdCdzIGZhbHNlIGJ5IGRlZmF1bHQsXG4gKiBidXQgd2hlbiB0cnVlLCBlbiBleHRyYSB0b25pY09mIHByb3BlcnR5IGlzIHJldHVybmVkIHdpdGggdGhlIGNhdGVnb3J5ICgnbWFqb3InKVxuICogQHBhcmFtIHtGbG9hdH0gdHVubmluZyAtIFRoZSBmcmVxdWVuY3kgb2YgQTQgbm90ZSB0byBjYWxjdWxhdGUgZnJlcXVlbmNpZXMuXG4gKiBCeSBkZWZhdWx0IGl0IDQ0MC5cbiAqIEByZXR1cm4ge09iamVjdH0gdGhlIHBhcnNlZCBub3RlIG5hbWUgb3IgbnVsbCBpZiBub3QgYSB2YWxpZCBub3RlXG4gKlxuICogVGhlIHBhcnNlZCBub3RlIG5hbWUgb2JqZWN0IHdpbGwgQUxXQVlTIGNvbnRhaW5zOlxuICogLSBsZXR0ZXI6IHRoZSB1cHBlcmNhc2UgbGV0dGVyIG9mIHRoZSBub3RlXG4gKiAtIGFjYzogdGhlIGFjY2lkZW50YWxzIG9mIHRoZSBub3RlIChvbmx5IHNoYXJwcyBvciBmbGF0cylcbiAqIC0gcGM6IHRoZSBwaXRjaCBjbGFzcyAobGV0dGVyICsgYWNjKVxuICogLSBzdGVwOiBzIGEgbnVtZXJpYyByZXByZXNlbnRhdGlvbiBvZiB0aGUgbGV0dGVyLiBJdCdzIGFuIGludGVnZXIgZnJvbSAwIHRvIDZcbiAqIHdoZXJlIDAgPSBDLCAxID0gRCAuLi4gNiA9IEJcbiAqIC0gYWx0OiBhIG51bWVyaWMgcmVwcmVzZW50YXRpb24gb2YgdGhlIGFjY2lkZW50YWxzLiAwIG1lYW5zIG5vIGFsdGVyYXRpb24sXG4gKiBwb3NpdGl2ZSBudW1iZXJzIGFyZSBmb3Igc2hhcnBzIGFuZCBuZWdhdGl2ZSBmb3IgZmxhdHNcbiAqIC0gY2hyb21hOiBhIG51bWVyaWMgcmVwcmVzZW50YXRpb24gb2YgdGhlIHBpdGNoIGNsYXNzLiBJdCdzIGxpa2UgbWlkaSBmb3JcbiAqIHBpdGNoIGNsYXNzZXMuIDAgPSBDLCAxID0gQyMsIDIgPSBEIC4uLiAxMSA9IEIuIENhbiBiZSB1c2VkIHRvIGZpbmQgZW5oYXJtb25pY3NcbiAqIHNpbmNlLCBmb3IgZXhhbXBsZSwgY2hyb21hIG9mICdDYicgYW5kICdCJyBhcmUgYm90aCAxMVxuICpcbiAqIElmIHRoZSBub3RlIGhhcyBvY3RhdmUsIHRoZSBwYXJzZXIgb2JqZWN0IHdpbGwgY29udGFpbjpcbiAqIC0gb2N0OiB0aGUgb2N0YXZlIG51bWJlciAoYXMgaW50ZWdlcilcbiAqIC0gbWlkaTogdGhlIG1pZGkgbnVtYmVyXG4gKiAtIGZyZXE6IHRoZSBmcmVxdWVuY3kgKHVzaW5nIHR1bmluZyBwYXJhbWV0ZXIgYXMgYmFzZSlcbiAqXG4gKiBJZiB0aGUgcGFyYW1ldGVyIGBpc1RvbmljYCBpcyBzZXQgdG8gdHJ1ZSwgdGhlIHBhcnNlZCBvYmplY3Qgd2lsbCBjb250YWluOlxuICogLSB0b25pY09mOiB0aGUgcmVzdCBvZiB0aGUgc3RyaW5nIHRoYXQgZm9sbG93cyBub3RlIG5hbWUgKGxlZnQgYW5kIHJpZ2h0IHRyaW1tZWQpXG4gKlxuICogQGV4YW1wbGVcbiAqIHZhciBwYXJzZSA9IHJlcXVpcmUoJ25vdGUtcGFyc2VyJykucGFyc2VcbiAqIHBhcnNlKCdDYjQnKVxuICogLy8gPT4geyBsZXR0ZXI6ICdDJywgYWNjOiAnYicsIHBjOiAnQ2InLCBzdGVwOiAwLCBhbHQ6IC0xLCBjaHJvbWE6IC0xLFxuICogICAgICAgICBvY3Q6IDQsIG1pZGk6IDU5LCBmcmVxOiAyNDYuOTQxNjUwNjI4MDYyMDYgfVxuICogLy8gaWYgbm8gb2N0YXZlLCBubyBtaWRpLCBubyBmcmVxXG4gKiBwYXJzZSgnZngnKVxuICogLy8gPT4geyBsZXR0ZXI6ICdGJywgYWNjOiAnIyMnLCBwYzogJ0YjIycsIHN0ZXA6IDMsIGFsdDogMiwgY2hyb21hOiA3IH0pXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZSAoc3RyLCBpc1RvbmljLCB0dW5pbmcpIHtcbiAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSByZXR1cm4gbnVsbFxuICB2YXIgbSA9IFJFR0VYLmV4ZWMoc3RyKVxuICBpZiAoIW0gfHwgKCFpc1RvbmljICYmIG1bNF0pKSByZXR1cm4gbnVsbFxuXG4gIHZhciBwID0geyBsZXR0ZXI6IG1bMV0udG9VcHBlckNhc2UoKSwgYWNjOiBtWzJdLnJlcGxhY2UoL3gvZywgJyMjJykgfVxuICBwLnBjID0gcC5sZXR0ZXIgKyBwLmFjY1xuICBwLnN0ZXAgPSAocC5sZXR0ZXIuY2hhckNvZGVBdCgwKSArIDMpICUgN1xuICBwLmFsdCA9IHAuYWNjWzBdID09PSAnYicgPyAtcC5hY2MubGVuZ3RoIDogcC5hY2MubGVuZ3RoXG4gIHZhciBwb3MgPSBTRU1JVE9ORVNbcC5zdGVwXSArIHAuYWx0XG4gIHAuY2hyb21hID0gcG9zIDwgMCA/IDEyICsgcG9zIDogcG9zICUgMTJcbiAgaWYgKG1bM10pIHsgLy8gaGFzIG9jdGF2ZVxuICAgIHAub2N0ID0gK21bM11cbiAgICBwLm1pZGkgPSBwb3MgKyAxMiAqIChwLm9jdCArIDEpXG4gICAgcC5mcmVxID0gbWlkaVRvRnJlcShwLm1pZGksIHR1bmluZylcbiAgfVxuICBpZiAoaXNUb25pYykgcC50b25pY09mID0gbVs0XVxuICByZXR1cm4gcFxufVxuXG52YXIgTEVUVEVSUyA9ICdDREVGR0FCJ1xuZnVuY3Rpb24gYWNjU3RyIChuKSB7IHJldHVybiAhaXNOdW0obikgPyAnJyA6IG4gPCAwID8gZmlsbFN0cignYicsIC1uKSA6IGZpbGxTdHIoJyMnLCBuKSB9XG5mdW5jdGlvbiBvY3RTdHIgKG4pIHsgcmV0dXJuICFpc051bShuKSA/ICcnIDogJycgKyBuIH1cblxuLyoqXG4gKiBDcmVhdGUgYSBzdHJpbmcgZnJvbSBhIHBhcnNlZCBvYmplY3Qgb3IgYHN0ZXAsIGFsdGVyYXRpb24sIG9jdGF2ZWAgcGFyYW1ldGVyc1xuICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIHRoZSBwYXJzZWQgZGF0YSBvYmplY3RcbiAqIEByZXR1cm4ge1N0cmluZ30gYSBub3RlIHN0cmluZyBvciBudWxsIGlmIG5vdCB2YWxpZCBwYXJhbWV0ZXJzXG4gKiBAc2luY2UgMS4yXG4gKiBAZXhhbXBsZVxuICogcGFyc2VyLmJ1aWxkKHBhcnNlci5wYXJzZSgnY2IyJykpIC8vID0+ICdDYjInXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIGl0IGFjY2VwdHMgKHN0ZXAsIGFsdGVyYXRpb24sIG9jdGF2ZSkgcGFyYW1ldGVyczpcbiAqIHBhcnNlci5idWlsZCgzKSAvLyA9PiAnRidcbiAqIHBhcnNlci5idWlsZCgzLCAtMSkgLy8gPT4gJ0ZiJ1xuICogcGFyc2VyLmJ1aWxkKDMsIC0xLCA0KSAvLyA9PiAnRmI0J1xuICovXG5leHBvcnQgZnVuY3Rpb24gYnVpbGQgKHMsIGEsIG8pIHtcbiAgaWYgKHMgPT09IG51bGwgfHwgdHlwZW9mIHMgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gbnVsbFxuICBpZiAocy5zdGVwKSByZXR1cm4gYnVpbGQocy5zdGVwLCBzLmFsdCwgcy5vY3QpXG4gIGlmIChzIDwgMCB8fCBzID4gNikgcmV0dXJuIG51bGxcbiAgcmV0dXJuIExFVFRFUlMuY2hhckF0KHMpICsgYWNjU3RyKGEpICsgb2N0U3RyKG8pXG59XG5cbi8qKlxuICogR2V0IG1pZGkgb2YgYSBub3RlXG4gKlxuICogQG5hbWUgbWlkaVxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ3xJbnRlZ2VyfSBub3RlIC0gdGhlIG5vdGUgbmFtZSBvciBtaWRpIG51bWJlclxuICogQHJldHVybiB7SW50ZWdlcn0gdGhlIG1pZGkgbnVtYmVyIG9mIHRoZSBub3RlIG9yIG51bGwgaWYgbm90IGEgdmFsaWQgbm90ZVxuICogb3IgdGhlIG5vdGUgZG9lcyBOT1QgY29udGFpbnMgb2N0YXZlXG4gKiBAZXhhbXBsZVxuICogdmFyIHBhcnNlciA9IHJlcXVpcmUoJ25vdGUtcGFyc2VyJylcbiAqIHBhcnNlci5taWRpKCdBNCcpIC8vID0+IDY5XG4gKiBwYXJzZXIubWlkaSgnQScpIC8vID0+IG51bGxcbiAqIEBleGFtcGxlXG4gKiAvLyBtaWRpIG51bWJlcnMgYXJlIGJ5cGFzc2VkIChldmVuIGFzIHN0cmluZ3MpXG4gKiBwYXJzZXIubWlkaSg2MCkgLy8gPT4gNjBcbiAqIHBhcnNlci5taWRpKCc2MCcpIC8vID0+IDYwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtaWRpIChub3RlKSB7XG4gIGlmICgoaXNOdW0obm90ZSkgfHwgaXNTdHIobm90ZSkpICYmIG5vdGUgPj0gMCAmJiBub3RlIDwgMTI4KSByZXR1cm4gK25vdGVcbiAgdmFyIHAgPSBwYXJzZShub3RlKVxuICByZXR1cm4gcCAmJiBpc0RlZihwLm1pZGkpID8gcC5taWRpIDogbnVsbFxufVxuXG4vKipcbiAqIEdldCBmcmVxIG9mIGEgbm90ZSBpbiBoZXJ0enMgKGluIGEgd2VsbCB0ZW1wZXJlZCA0NDBIeiBBNClcbiAqXG4gKiBAbmFtZSBmcmVxXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBub3RlIC0gdGhlIG5vdGUgbmFtZSBvciBub3RlIG1pZGkgbnVtYmVyXG4gKiBAcGFyYW0ge1N0cmluZ30gdHVuaW5nIC0gKE9wdGlvbmFsKSB0aGUgQTQgZnJlcXVlbmN5ICg0NDAgYnkgZGVmYXVsdClcbiAqIEByZXR1cm4ge0Zsb2F0fSB0aGUgZnJlcSBvZiB0aGUgbnVtYmVyIGlmIGhlcnR6cyBvciBudWxsIGlmIG5vdCB2YWxpZCBub3RlXG4gKiBAZXhhbXBsZVxuICogdmFyIHBhcnNlciA9IHJlcXVpcmUoJ25vdGUtcGFyc2VyJylcbiAqIHBhcnNlci5mcmVxKCdBNCcpIC8vID0+IDQ0MFxuICogcGFyc2VyLmZyZXEoJ0EnKSAvLyA9PiBudWxsXG4gKiBAZXhhbXBsZVxuICogLy8gY2FuIGNoYW5nZSB0dW5pbmcgKDQ0MCBieSBkZWZhdWx0KVxuICogcGFyc2VyLmZyZXEoJ0E0JywgNDQ0KSAvLyA9PiA0NDRcbiAqIHBhcnNlci5mcmVxKCdBMycsIDQ0NCkgLy8gPT4gMjIyXG4gKiBAZXhhbXBsZVxuICogLy8gaXQgYWNjZXB0cyBtaWRpIG51bWJlcnMgKGFzIG51bWJlcnMgYW5kIGFzIHN0cmluZ3MpXG4gKiBwYXJzZXIuZnJlcSg2OSkgLy8gPT4gNDQwXG4gKiBwYXJzZXIuZnJlcSgnNjknLCA0NDIpIC8vID0+IDQ0MlxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJlcSAobm90ZSwgdHVuaW5nKSB7XG4gIHZhciBtID0gbWlkaShub3RlKVxuICByZXR1cm4gbSA9PT0gbnVsbCA/IG51bGwgOiBtaWRpVG9GcmVxKG0sIHR1bmluZylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxldHRlciAoc3JjKSB7IHJldHVybiAocGFyc2Uoc3JjKSB8fCB7fSkubGV0dGVyIH1cbmV4cG9ydCBmdW5jdGlvbiBhY2MgKHNyYykgeyByZXR1cm4gKHBhcnNlKHNyYykgfHwge30pLmFjYyB9XG5leHBvcnQgZnVuY3Rpb24gcGMgKHNyYykgeyByZXR1cm4gKHBhcnNlKHNyYykgfHwge30pLnBjIH1cbmV4cG9ydCBmdW5jdGlvbiBzdGVwIChzcmMpIHsgcmV0dXJuIChwYXJzZShzcmMpIHx8IHt9KS5zdGVwIH1cbmV4cG9ydCBmdW5jdGlvbiBhbHQgKHNyYykgeyByZXR1cm4gKHBhcnNlKHNyYykgfHwge30pLmFsdCB9XG5leHBvcnQgZnVuY3Rpb24gY2hyb21hIChzcmMpIHsgcmV0dXJuIChwYXJzZShzcmMpIHx8IHt9KS5jaHJvbWEgfVxuZXhwb3J0IGZ1bmN0aW9uIG9jdCAoc3JjKSB7IHJldHVybiAocGFyc2Uoc3JjKSB8fCB7fSkub2N0IH1cbiIsICIvKipcbiAqIEEgbWlkaSBub3RlIG51bWJlciBpcyBhIG51bWJlciByZXByZXNlbnRhdGlvbiBvZiBhIG5vdGUgcGl0Y2guIEl0IGNhbiBiZVxuICogaW50ZWdlcnMgc28gaXQncyBlcXVhbCB0ZW1wZXJlZCB0dW5lZCwgb3IgZmxvYXQgdG8gaW5kaWNhdGUgaXQncyBub3RcbiAqIHR1bmVkIGludG8gZXF1YWwgdGVtZXBlcmVkIHNjYWxlLlxuICpcbiAqIFRoaXMgbW9kdWxlIGNvbnRhaW5zIGZ1bmN0aW9ucyB0byBjb252ZXJ0IHRvIGFuZCBmcm9tIG1pZGkgbm90ZXMuXG4gKlxuICogQGV4YW1wbGVcbiAqIHZhciBtaWRpID0gcmVxdWlyZSgndG9uYWwtbWlkaScpXG4gKiBtaWRpLnRvTWlkaSgnQTQnKSAvLyA9PiA2OVxuICogbWlkaS5ub3RlKDY5KSAvLyA9PiAnQTQnXG4gKiBtaWRpLm5vdGUoNjEpIC8vID0+ICdEYjQnXG4gKiBtaWRpLm5vdGUoNjEsIHRydWUpIC8vID0+ICdDIzQnXG4gKlxuICogQG1vZHVsZSBtaWRpXG4gKi9cblxuaW1wb3J0IHsgbWlkaSB9IGZyb20gJ25vdGUtcGFyc2VyJ1xuXG4vKipcbiAqIENvbnZlcnQgdGhlIGdpdmVuIG5vdGUgdG8gYSBtaWRpIG5vdGUgbnVtYmVyLiBJZiB5b3UgcGFzcyBhIG1pZGkgbnVtYmVyIGl0XG4gKiB3aWxsIHJldHVybmVkIGFzIGlzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfE51bWJlcn0gbm90ZSAtIHRoZSBub3RlIHRvIGdldCB0aGUgbWlkaSBudW1iZXIgZnJvbVxuICogQHJldHVybiB7SW50ZWdlcn0gdGhlIG1pZGkgbnVtYmVyIG9yIG51bGwgaWYgbm90IHZhbGlkIHBpdGNoXG4gKiBAZXhhbXBsZVxuICogbWlkaS50b01pZGkoJ0M0JykgLy8gPT4gNjBcbiAqIG1pZGkudG9NaWRpKDYwKSAvLyA9PiA2MFxuICogbWlkaS50b01pZGkoJzYwJykgLy8gPT4gNjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvTWlkaSAodmFsKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbCkgJiYgdmFsLmxlbmd0aCA9PT0gMikgcmV0dXJuIHZhbFswXSAqIDcgKyB2YWxbMV0gKiAxMiArIDEyXG4gIHJldHVybiBtaWRpKHZhbClcbn1cblxudmFyIEZMQVRTID0gJ0MgRGIgRCBFYiBFIEYgR2IgRyBBYiBBIEJiIEInLnNwbGl0KCcgJylcbnZhciBTSEFSUFMgPSAnQyBDIyBEIEQjIEUgRiBGIyBHIEcjIEEgQSMgQicuc3BsaXQoJyAnKVxuXG4vKipcbiAqIEdpdmVuIGEgbWlkaSBudW1iZXIsIHJldHVybnMgYSBub3RlIG5hbWUuIFRoZSBhbHRlcmVkIG5vdGVzIHdpbGwgaGF2ZVxuICogZmxhdHMgdW5sZXNzIGV4cGxpY2l0bHkgc2V0IHdpdGggdGhlIG9wdGlvbmFsIGB1c2VTaGFycHNgIHBhcmFtZXRlci5cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7SW50ZWdlcn0gbWlkaSAtIHRoZSBtaWRpIG5vdGUgbnVtYmVyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHVzZVNoYXJwcyAtIChPcHRpb25hbCkgc2V0IHRvIHRydWUgdG8gdXNlIHNoYXJwcyBpbnN0ZWFkIG9mIGZsYXRzXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHRoZSBub3RlIG5hbWVcbiAqIEBleGFtcGxlXG4gKiB2YXIgbWlkaSA9IHJlcXVpcmUoJ3RvbmFsLW1pZGknKVxuICogbWlkaS5ub3RlKDYxKSAvLyA9PiAnRGI0J1xuICogbWlkaS5ub3RlKDYxLCB0cnVlKSAvLyA9PiAnQyM0J1xuICogLy8gaXQgcm91bmRzIHRvIG5lYXJlc3Qgbm90ZVxuICogbWlkaS5ub3RlKDYxLjcpIC8vID0+ICdENCdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vdGUgKG51bSwgc2hhcnBzKSB7XG4gIGlmIChudW0gPT09IHRydWUgfHwgbnVtID09PSBmYWxzZSkgcmV0dXJuIGZ1bmN0aW9uIChtKSB7IHJldHVybiBub3RlKG0sIG51bSkgfVxuICBudW0gPSBNYXRoLnJvdW5kKG51bSlcbiAgdmFyIHBjcyA9IHNoYXJwcyA9PT0gdHJ1ZSA/IFNIQVJQUyA6IEZMQVRTXG4gIHZhciBwYyA9IHBjc1tudW0gJSAxMl1cbiAgdmFyIG8gPSBNYXRoLmZsb29yKG51bSAvIDEyKSAtIDFcbiAgcmV0dXJuIHBjICsgb1xufVxuIiwgIntcbiAgXCJuYW1lXCI6IFwibWlkaS13cml0ZXItanNcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMi4wLjFcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkEgbGlicmFyeSBwcm92aWRpbmcgYW4gQVBJIGZvciBnZW5lcmF0aW5nIE1JREkgZmlsZXMuXCIsXG4gIFwibWFpblwiOiBcImJ1aWxkL2luZGV4LmpzXCIsXG4gIFwidHlwZXNcIjogXCJ0eXBlcy5kLnRzXCIsXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcInRvbmFsLW1pZGlcIjogXCJeMC42OS43XCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQGJhYmVsL2NvcmVcIjogXCJeNy45LjZcIixcbiAgICBcIkBiYWJlbC9wbHVnaW4tdHJhbnNmb3JtLWRlc3RydWN0dXJpbmdcIjogXCJeNy45LjVcIixcbiAgICBcIkBiYWJlbC9wcmVzZXQtZW52XCI6IFwiXjcuOS42XCIsXG4gICAgXCJAcm9sbHVwL3BsdWdpbi1iYWJlbFwiOiBcIl41LjAuMFwiLFxuICAgIFwiZXNsaW50XCI6IFwiXjcuMC4wXCIsXG4gICAgXCJlc2xpbnQtY29uZmlnLXN0YW5kYXJkXCI6IFwiXjEyLjAuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1pbXBvcnRcIjogXCJeMi4yMC4yXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLW5vZGVcIjogXCJeOS4yLjBcIixcbiAgICBcImVzbGludC1wbHVnaW4tcHJvbWlzZVwiOiBcIl40LjEuMVwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1zdGFuZGFyZFwiOiBcIl40LjAuMVwiLFxuICAgIFwianNkb2NcIjogXCJeMy42LjRcIixcbiAgICBcIm1pbmFtaVwiOiBcIl4xLjIuM1wiLFxuICAgIFwibW9jaGFcIjogXCJeOS4wLjFcIixcbiAgICBcIm55Y1wiOiBcIl4xNS4wLjFcIixcbiAgICBcInJvbGx1cFwiOiBcIl4yLjkuMFwiLFxuICAgIFwid2F0Y2hcIjogXCJeMS4wLjJcIlxuICB9LFxuICBcImRpcmVjdG9yaWVzXCI6IHtcbiAgICBcImxpYlwiOiBcInNyY1wiLFxuICAgIFwiZXhhbXBsZVwiOiBcImV4YW1wbGVzXCIsXG4gICAgXCJ0ZXN0XCI6IFwidGVzdFwiXG4gIH0sXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJidWlsZFwiOiBcIm1rZGlyIC1wIGJ1aWxkICYmIHJvbGx1cCAtYyAmJiBucG0gcnVuIGRvY3NcIixcbiAgICBcImRvY3NcIjogXCIuL25vZGVfbW9kdWxlcy8uYmluL2pzZG9jIC1yIHNyYyBSRUFETUUubWQgLWQgLi9kb2NzIC10IC4vbm9kZV9tb2R1bGVzL21pbmFtaVwiLFxuICAgIFwibGludDpqc1wiOiBcImVzbGludCAnc3JjLyoqLyoqLmpzJ1wiLFxuICAgIFwicHJlcHVibGlzaE9ubHlcIjogXCJucG0gdGVzdFwiLFxuICAgIFwicHJldGVzdFwiOiBcIm5wbSBydW4gYnVpbGRcIixcbiAgICBcInRlc3RcIjogXCJueWMgLS1yZXBvcnRlcj10ZXh0IG1vY2hhIC0tbm8tY29uZmlnIC0tbm8tcGFja2FnZVwiLFxuICAgIFwid2F0Y2hcIjogXCJ3YXRjaCAnbnBtIHJ1biBidWlsZCcgc3JjXCIsXG4gICAgXCJwb3N0aW5zdGFsbFwiOiBcIm5vZGUgcG9zdGluc3RhbGwuanNcIlxuICB9LFxuICBcInJ1bmtpdEV4YW1wbGVGaWxlbmFtZVwiOiBcInJ1bmtpdC5qc1wiLFxuICBcInJlcG9zaXRvcnlcIjoge1xuICAgIFwidHlwZVwiOiBcImdpdFwiLFxuICAgIFwidXJsXCI6IFwiZ2l0K2h0dHBzOi8vZ2l0aHViLmNvbS9ncmltbWR1ZGUvTWlkaVdyaXRlckpTLmdpdFwiXG4gIH0sXG4gIFwia2V5d29yZHNcIjogW1xuICAgIFwibWlkaVwiLFxuICAgIFwiZ2VuZXJhdG9yXCIsXG4gICAgXCJtdXNpY1wiXG4gIF0sXG4gIFwiYXV0aG9yXCI6IFwiR2FycmV0dCBHcmltbVwiLFxuICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgXCJidWdzXCI6IHtcbiAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ncmltbWR1ZGUvTWlkaVdyaXRlckpTL2lzc3Vlc1wiXG4gIH0sXG4gIFwiaG9tZXBhZ2VcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZ3JpbW1kdWRlL01pZGlXcml0ZXJKUyNyZWFkbWVcIlxufVxuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIHRvbmFsTWlkaSA9IHJlcXVpcmUoJ3RvbmFsLW1pZGknKTtcblxuLyoqXG4gKiBNSURJIGZpbGUgZm9ybWF0IGNvbnN0YW50cy5cbiAqIEByZXR1cm4ge0NvbnN0YW50c31cbiAqL1xudmFyIENvbnN0YW50cyA9IHtcbiAgVkVSU0lPTjogcmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJykudmVyc2lvbixcbiAgSEVBREVSX0NIVU5LX1RZUEU6IFsweDRkLCAweDU0LCAweDY4LCAweDY0XSxcbiAgLy8gTXRoZFxuICBIRUFERVJfQ0hVTktfTEVOR1RIOiBbMHgwMCwgMHgwMCwgMHgwMCwgMHgwNl0sXG4gIC8vIEhlYWRlciBzaXplIGZvciBTTUZcbiAgSEVBREVSX0NIVU5LX0ZPUk1BVDA6IFsweDAwLCAweDAwXSxcbiAgLy8gTWlkaSBUeXBlIDAgaWRcbiAgSEVBREVSX0NIVU5LX0ZPUk1BVDE6IFsweDAwLCAweDAxXSxcbiAgLy8gTWlkaSBUeXBlIDEgaWRcbiAgSEVBREVSX0NIVU5LX0RJVklTSU9OOiBbMHgwMCwgMHg4MF0sXG4gIC8vIERlZmF1bHRzIHRvIDEyOCB0aWNrcyBwZXIgYmVhdFxuICBUUkFDS19DSFVOS19UWVBFOiBbMHg0ZCwgMHg1NCwgMHg3MiwgMHg2Yl0sXG4gIC8vIE1UcmssXG4gIE1FVEFfRVZFTlRfSUQ6IDB4RkYsXG4gIE1FVEFfVEVYVF9JRDogMHgwMSxcbiAgTUVUQV9DT1BZUklHSFRfSUQ6IDB4MDIsXG4gIE1FVEFfVFJBQ0tfTkFNRV9JRDogMHgwMyxcbiAgTUVUQV9JTlNUUlVNRU5UX05BTUVfSUQ6IDB4MDQsXG4gIE1FVEFfTFlSSUNfSUQ6IDB4MDUsXG4gIE1FVEFfTUFSS0VSX0lEOiAweDA2LFxuICBNRVRBX0NVRV9QT0lOVDogMHgwNyxcbiAgTUVUQV9URU1QT19JRDogMHg1MSxcbiAgTUVUQV9TTVRQRV9PRkZTRVQ6IDB4NTQsXG4gIE1FVEFfVElNRV9TSUdOQVRVUkVfSUQ6IDB4NTgsXG4gIE1FVEFfS0VZX1NJR05BVFVSRV9JRDogMHg1OSxcbiAgTUVUQV9FTkRfT0ZfVFJBQ0tfSUQ6IFsweDJGLCAweDAwXSxcbiAgQ09OVFJPTExFUl9DSEFOR0VfU1RBVFVTOiAweEIwLFxuICAvLyBpbmNsdWRlcyBjaGFubmVsIG51bWJlciAoMClcbiAgUFJPR1JBTV9DSEFOR0VfU1RBVFVTOiAweEMwLFxuICAvLyBpbmNsdWRlcyBjaGFubmVsIG51bWJlciAoMClcbiAgUElUQ0hfQkVORF9TVEFUVVM6IDB4RTAgLy8gaW5jbHVkZXMgY2hhbm5lbCBudW1iZXIgKDApXG5cbn07XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbmZ1bmN0aW9uIF93cmFwUmVnRXhwKCkge1xuICBfd3JhcFJlZ0V4cCA9IGZ1bmN0aW9uIChyZSwgZ3JvdXBzKSB7XG4gICAgcmV0dXJuIG5ldyBCYWJlbFJlZ0V4cChyZSwgdW5kZWZpbmVkLCBncm91cHMpO1xuICB9O1xuXG4gIHZhciBfc3VwZXIgPSBSZWdFeHAucHJvdG90eXBlO1xuXG4gIHZhciBfZ3JvdXBzID0gbmV3IFdlYWtNYXAoKTtcblxuICBmdW5jdGlvbiBCYWJlbFJlZ0V4cChyZSwgZmxhZ3MsIGdyb3Vwcykge1xuICAgIHZhciBfdGhpcyA9IG5ldyBSZWdFeHAocmUsIGZsYWdzKTtcblxuICAgIF9ncm91cHMuc2V0KF90aGlzLCBncm91cHMgfHwgX2dyb3Vwcy5nZXQocmUpKTtcblxuICAgIHJldHVybiBfc2V0UHJvdG90eXBlT2YoX3RoaXMsIEJhYmVsUmVnRXhwLnByb3RvdHlwZSk7XG4gIH1cblxuICBfaW5oZXJpdHMoQmFiZWxSZWdFeHAsIFJlZ0V4cCk7XG5cbiAgQmFiZWxSZWdFeHAucHJvdG90eXBlLmV4ZWMgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgdmFyIHJlc3VsdCA9IF9zdXBlci5leGVjLmNhbGwodGhpcywgc3RyKTtcblxuICAgIGlmIChyZXN1bHQpIHJlc3VsdC5ncm91cHMgPSBidWlsZEdyb3VwcyhyZXN1bHQsIHRoaXMpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgQmFiZWxSZWdFeHAucHJvdG90eXBlW1N5bWJvbC5yZXBsYWNlXSA9IGZ1bmN0aW9uIChzdHIsIHN1YnN0aXR1dGlvbikge1xuICAgIGlmICh0eXBlb2Ygc3Vic3RpdHV0aW9uID09PSBcInN0cmluZ1wiKSB7XG4gICAgICB2YXIgZ3JvdXBzID0gX2dyb3Vwcy5nZXQodGhpcyk7XG5cbiAgICAgIHJldHVybiBfc3VwZXJbU3ltYm9sLnJlcGxhY2VdLmNhbGwodGhpcywgc3RyLCBzdWJzdGl0dXRpb24ucmVwbGFjZSgvXFwkPChbXj5dKyk+L2csIGZ1bmN0aW9uIChfLCBuYW1lKSB7XG4gICAgICAgIHJldHVybiBcIiRcIiArIGdyb3Vwc1tuYW1lXTtcbiAgICAgIH0pKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBzdWJzdGl0dXRpb24gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgcmV0dXJuIF9zdXBlcltTeW1ib2wucmVwbGFjZV0uY2FsbCh0aGlzLCBzdHIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICBhcmdzID0gW10uc2xpY2UuY2FsbChhcmdzKTtcbiAgICAgICAgICBhcmdzLnB1c2goYnVpbGRHcm91cHMoYXJncywgX3RoaXMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWJzdGl0dXRpb24uYXBwbHkodGhpcywgYXJncyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIF9zdXBlcltTeW1ib2wucmVwbGFjZV0uY2FsbCh0aGlzLCBzdHIsIHN1YnN0aXR1dGlvbik7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIGJ1aWxkR3JvdXBzKHJlc3VsdCwgcmUpIHtcbiAgICB2YXIgZyA9IF9ncm91cHMuZ2V0KHJlKTtcblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhnKS5yZWR1Y2UoZnVuY3Rpb24gKGdyb3VwcywgbmFtZSkge1xuICAgICAgZ3JvdXBzW25hbWVdID0gcmVzdWx0W2dbbmFtZV1dO1xuICAgICAgcmV0dXJuIGdyb3VwcztcbiAgICB9LCBPYmplY3QuY3JlYXRlKG51bGwpKTtcbiAgfVxuXG4gIHJldHVybiBfd3JhcFJlZ0V4cC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG4vKipcbiAqIFN0YXRpYyB1dGlsaXR5IGZ1bmN0aW9ucyB1c2VkIHRocm91Z2hvdXQgdGhlIGxpYnJhcnkuXG4gKi9cblxudmFyIFV0aWxzID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVXRpbHMoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFV0aWxzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhVdGlscywgbnVsbCwgW3tcbiAgICBrZXk6IFwidmVyc2lvblwiLFxuICAgIHZhbHVlOlxuICAgIC8qKlxuICAgICAqIEdldHMgTWlkaVdyaXRlckpTIHZlcnNpb24gbnVtYmVyLlxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiB2ZXJzaW9uKCkge1xuICAgICAgcmV0dXJuIENvbnN0YW50cy5WRVJTSU9OO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IGEgc3RyaW5nIHRvIGFuIGFycmF5IG9mIGJ5dGVzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuICAgICAqIEByZXR1cm4ge2FycmF5fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3RyaW5nVG9CeXRlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdHJpbmdUb0J5dGVzKHN0cmluZykge1xuICAgICAgcmV0dXJuIHN0cmluZy5zcGxpdCgnJykubWFwKGZ1bmN0aW9uIChfY2hhcikge1xuICAgICAgICByZXR1cm4gX2NoYXIuY2hhckNvZGVBdCgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiBhcmd1bWVudCBpcyBhIHZhbGlkIG51bWJlci5cbiAgICAgKiBAcGFyYW0geyp9IG4gLSBWYWx1ZSB0byBjaGVja1xuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpc051bWVyaWNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNOdW1lcmljKG4pIHtcbiAgICAgIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdChuKSkgJiYgaXNGaW5pdGUobik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNvcnJlY3QgTUlESSBudW1iZXIgZm9yIHRoZSBzcGVjaWZpZWQgcGl0Y2guXG4gICAgICogVXNlcyBUb25hbCBNaWRpIC0gaHR0cHM6Ly9naXRodWIuY29tL2RhbmlnYi90b25hbC90cmVlL21hc3Rlci9wYWNrYWdlcy9taWRpXG4gICAgICogQHBhcmFtIHsoc3RyaW5nfG51bWJlcil9IHBpdGNoIC0gJ0MjNCcgb3IgbWlkaSBub3RlIGNvZGVcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRQaXRjaFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQaXRjaChwaXRjaCkge1xuICAgICAgcmV0dXJuIHRvbmFsTWlkaS50b01pZGkocGl0Y2gpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUcmFuc2xhdGVzIG51bWJlciBvZiB0aWNrcyB0byBNSURJIHRpbWVzdGFtcCBmb3JtYXQsIHJldHVybmluZyBhbiBhcnJheSBvZlxuICAgICAqIGhleCBzdHJpbmdzIHdpdGggdGhlIHRpbWUgdmFsdWVzLiBNaWRpIGhhcyBhIHZlcnkgcGFydGljdWxhciB0aW1lIHRvIGV4cHJlc3MgdGltZSxcbiAgICAgKiB0YWtlIGEgZ29vZCBsb29rIGF0IHRoZSBzcGVjIGJlZm9yZSBldmVyIHRvdWNoaW5nIHRoaXMgZnVuY3Rpb24uXG4gICAgICogVGhhbmtzIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9zZXJnaS9qc21pZGlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aWNrcyAtIE51bWJlciBvZiB0aWNrcyB0byBiZSB0cmFuc2xhdGVkXG4gICAgICogQHJldHVybiB7YXJyYXl9IC0gQnl0ZXMgdGhhdCBmb3JtIHRoZSBNSURJIHRpbWUgdmFsdWVcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm51bWJlclRvVmFyaWFibGVMZW5ndGhcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0aWNrcykge1xuICAgICAgdGlja3MgPSBNYXRoLnJvdW5kKHRpY2tzKTtcbiAgICAgIHZhciBidWZmZXIgPSB0aWNrcyAmIDB4N0Y7XG5cbiAgICAgIHdoaWxlICh0aWNrcyA9IHRpY2tzID4+IDcpIHtcbiAgICAgICAgYnVmZmVyIDw8PSA4O1xuICAgICAgICBidWZmZXIgfD0gdGlja3MgJiAweDdGIHwgMHg4MDtcbiAgICAgIH1cblxuICAgICAgdmFyIGJMaXN0ID0gW107XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGJMaXN0LnB1c2goYnVmZmVyICYgMHhmZik7XG4gICAgICAgIGlmIChidWZmZXIgJiAweDgwKSBidWZmZXIgPj49IDg7ZWxzZSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGJMaXN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb3VudHMgbnVtYmVyIG9mIGJ5dGVzIGluIHN0cmluZ1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzXG4gICAgICogQHJldHVybiB7YXJyYXl9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzdHJpbmdCeXRlQ291bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RyaW5nQnl0ZUNvdW50KHMpIHtcbiAgICAgIHJldHVybiBlbmNvZGVVUkkocykuc3BsaXQoLyUuLnwuLykubGVuZ3RoIC0gMTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IGFuIGludCBmcm9tIGFuIGFycmF5IG9mIGJ5dGVzLlxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGJ5dGVzXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibnVtYmVyRnJvbUJ5dGVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG51bWJlckZyb21CeXRlcyhieXRlcykge1xuICAgICAgdmFyIGhleCA9ICcnO1xuICAgICAgdmFyIHN0cmluZ1Jlc3VsdDtcbiAgICAgIGJ5dGVzLmZvckVhY2goZnVuY3Rpb24gKF9ieXRlKSB7XG4gICAgICAgIHN0cmluZ1Jlc3VsdCA9IF9ieXRlLnRvU3RyaW5nKDE2KTsgLy8gZW5zdXJlIHN0cmluZyBpcyAyIGNoYXJzXG5cbiAgICAgICAgaWYgKHN0cmluZ1Jlc3VsdC5sZW5ndGggPT0gMSkgc3RyaW5nUmVzdWx0ID0gXCIwXCIgKyBzdHJpbmdSZXN1bHQ7XG4gICAgICAgIGhleCArPSBzdHJpbmdSZXN1bHQ7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBwYXJzZUludChoZXgsIDE2KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGFrZXMgYSBudW1iZXIgYW5kIHNwbGl0cyBpdCB1cCBpbnRvIGFuIGFycmF5IG9mIGJ5dGVzLiAgQ2FuIGJlIHBhZGRlZCBieSBwYXNzaW5nIGEgbnVtYmVyIHRvIGJ5dGVzTmVlZGVkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG51bWJlclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBieXRlc05lZWRlZFxuICAgICAqIEByZXR1cm4ge2FycmF5fSAtIEFycmF5IG9mIGJ5dGVzXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJudW1iZXJUb0J5dGVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG51bWJlclRvQnl0ZXMobnVtYmVyLCBieXRlc05lZWRlZCkge1xuICAgICAgYnl0ZXNOZWVkZWQgPSBieXRlc05lZWRlZCB8fCAxO1xuICAgICAgdmFyIGhleFN0cmluZyA9IG51bWJlci50b1N0cmluZygxNik7XG5cbiAgICAgIGlmIChoZXhTdHJpbmcubGVuZ3RoICYgMSkge1xuICAgICAgICAvLyBNYWtlIHN1cmUgaGV4IHN0cmluZyBpcyBldmVuIG51bWJlciBvZiBjaGFyc1xuICAgICAgICBoZXhTdHJpbmcgPSAnMCcgKyBoZXhTdHJpbmc7XG4gICAgICB9IC8vIFNwbGl0IGhleCBzdHJpbmcgaW50byBhbiBhcnJheSBvZiB0d28gY2hhciBlbGVtZW50c1xuXG5cbiAgICAgIHZhciBoZXhBcnJheSA9IGhleFN0cmluZy5tYXRjaCgvLnsyfS9nKTsgLy8gTm93IHBhcnNlIHRoZW0gb3V0IGFzIGludGVnZXJzXG5cbiAgICAgIGhleEFycmF5ID0gaGV4QXJyYXkubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludChpdGVtLCAxNik7XG4gICAgICB9KTsgLy8gUHJlcGVuZCBlbXB0eSBieXRlcyBpZiB3ZSBkb24ndCBoYXZlIGVub3VnaFxuXG4gICAgICBpZiAoaGV4QXJyYXkubGVuZ3RoIDwgYnl0ZXNOZWVkZWQpIHtcbiAgICAgICAgd2hpbGUgKGJ5dGVzTmVlZGVkIC0gaGV4QXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGhleEFycmF5LnVuc2hpZnQoMCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGhleEFycmF5O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyB2YWx1ZSB0byBhcnJheSBpZiBuZWVkZWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAgICogQHJldHVybiB7YXJyYXl9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ0b0FycmF5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvQXJyYXkodmFsdWUpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgICAgcmV0dXJuIFt2YWx1ZV07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIHZlbG9jaXR5IHRvIHZhbHVlIDAtMTI3XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZlbG9jaXR5IC0gVmVsb2NpdHkgdmFsdWUgMS0xMDBcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjb252ZXJ0VmVsb2NpdHlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29udmVydFZlbG9jaXR5KHZlbG9jaXR5KSB7XG4gICAgICAvLyBNYXggcGFzc2VkIHZhbHVlIGxpbWl0ZWQgdG8gMTAwXG4gICAgICB2ZWxvY2l0eSA9IHZlbG9jaXR5ID4gMTAwID8gMTAwIDogdmVsb2NpdHk7XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZCh2ZWxvY2l0eSAvIDEwMCAqIDEyNyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHRvdGFsIG51bWJlciBvZiB0aWNrcyBvZiBhIHNwZWNpZmllZCBkdXJhdGlvbi5cbiAgICAgKiBOb3RlOiB0eXBlPT0nbm90ZScgZGVmYXVsdHMgdG8gcXVhcnRlciBub3RlLCB0eXBlPT09J3Jlc3QnIGRlZmF1bHRzIHRvIDBcbiAgICAgKiBAcGFyYW0geyhzdHJpbmd8YXJyYXkpfSBkdXJhdGlvblxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFRpY2tEdXJhdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUaWNrRHVyYXRpb24oZHVyYXRpb24pIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGR1cmF0aW9uKSkge1xuICAgICAgICAvLyBSZWN1cnNpdmVseSBleGVjdXRlIHRoaXMgbWV0aG9kIGZvciBlYWNoIGl0ZW0gaW4gdGhlIGFycmF5IGFuZCByZXR1cm4gdGhlIHN1bSBvZiB0aWNrIGR1cmF0aW9ucy5cbiAgICAgICAgcmV0dXJuIGR1cmF0aW9uLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gVXRpbHMuZ2V0VGlja0R1cmF0aW9uKHZhbHVlKTtcbiAgICAgICAgfSkucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgcmV0dXJuIGEgKyBiO1xuICAgICAgICB9LCAwKTtcbiAgICAgIH1cblxuICAgICAgZHVyYXRpb24gPSBkdXJhdGlvbi50b1N0cmluZygpO1xuXG4gICAgICBpZiAoZHVyYXRpb24udG9Mb3dlckNhc2UoKS5jaGFyQXQoMCkgPT09ICd0Jykge1xuICAgICAgICAvLyBJZiBkdXJhdGlvbiBzdGFydHMgd2l0aCAndCcgdGhlbiB0aGUgbnVtYmVyIHRoYXQgZm9sbG93cyBpcyBhbiBleHBsaWNpdCB0aWNrIGNvdW50XG4gICAgICAgIHJldHVybiBwYXJzZUludChkdXJhdGlvbi5zdWJzdHJpbmcoMSkpO1xuICAgICAgfSAvLyBOZWVkIHRvIGFwcGx5IGR1cmF0aW9uIGhlcmUuICBRdWFydGVyIG5vdGUgPT0gQ29uc3RhbnRzLkhFQURFUl9DSFVOS19ESVZJU0lPTlxuXG5cbiAgICAgIHZhciBxdWFydGVyVGlja3MgPSBVdGlscy5udW1iZXJGcm9tQnl0ZXMoQ29uc3RhbnRzLkhFQURFUl9DSFVOS19ESVZJU0lPTik7XG4gICAgICB2YXIgdGlja0R1cmF0aW9uID0gcXVhcnRlclRpY2tzICogVXRpbHMuZ2V0RHVyYXRpb25NdWx0aXBsaWVyKGR1cmF0aW9uKTtcbiAgICAgIHJldHVybiBVdGlscy5nZXRSb3VuZGVkSWZDbG9zZSh0aWNrRHVyYXRpb24pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEdWUgdG8gcm91bmRpbmcgZXJyb3JzIGluIEphdmFTY3JpcHQgZW5naW5lcyxcbiAgICAgKiBpdCdzIHNhZmUgdG8gcm91bmQgd2hlbiB3ZSdyZSB2ZXJ5IGNsb3NlIHRvIHRoZSBhY3R1YWwgdGljayBudW1iZXJcbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGlja1xuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFJvdW5kZWRJZkNsb3NlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJvdW5kZWRJZkNsb3NlKHRpY2spIHtcbiAgICAgIHZhciByb3VuZGVkVGljayA9IE1hdGgucm91bmQodGljayk7XG4gICAgICByZXR1cm4gTWF0aC5hYnMocm91bmRlZFRpY2sgLSB0aWNrKSA8IDAuMDAwMDAxID8gcm91bmRlZFRpY2sgOiB0aWNrO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEdWUgdG8gbG93IHByZWNpc2lvbiBvZiBNSURJLFxuICAgICAqIHdlIG5lZWQgdG8ga2VlcCB0cmFjayBvZiByb3VuZGluZyBlcnJvcnMgaW4gZGVsdGFzLlxuICAgICAqIFRoaXMgZnVuY3Rpb24gd2lsbCBjYWxjdWxhdGUgdGhlIHJvdW5kaW5nIGVycm9yIGZvciBhIGdpdmVuIGR1cmF0aW9uLlxuICAgICAqXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aWNrXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0UHJlY2lzaW9uTG9zc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQcmVjaXNpb25Mb3NzKHRpY2spIHtcbiAgICAgIHZhciByb3VuZGVkVGljayA9IE1hdGgucm91bmQodGljayk7XG4gICAgICByZXR1cm4gcm91bmRlZFRpY2sgLSB0aWNrO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHdoYXQgdG8gbXVsdGlwbGUgdGlja3MvcXVhcnRlciBub3RlIGJ5IHRvIGdldCB0aGUgc3BlY2lmaWVkIGR1cmF0aW9uLlxuICAgICAqIE5vdGU6IHR5cGU9PSdub3RlJyBkZWZhdWx0cyB0byBxdWFydGVyIG5vdGUsIHR5cGU9PT0ncmVzdCcgZGVmYXVsdHMgdG8gMFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkdXJhdGlvblxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldER1cmF0aW9uTXVsdGlwbGllclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREdXJhdGlvbk11bHRpcGxpZXIoZHVyYXRpb24pIHtcbiAgICAgIC8vIE5lZWQgdG8gYXBwbHkgZHVyYXRpb24gaGVyZS5cbiAgICAgIC8vIFF1YXJ0ZXIgbm90ZSA9PSBDb25zdGFudHMuSEVBREVSX0NIVU5LX0RJVklTSU9OIHRpY2tzLlxuICAgICAgaWYgKGR1cmF0aW9uID09PSAnMCcpIHJldHVybiAwO1xuICAgICAgdmFyIG1hdGNoID0gZHVyYXRpb24ubWF0Y2goIC8qI19fUFVSRV9fKi9fd3JhcFJlZ0V4cCgvXihkKyk/KFswLTldKykoPzp0KFswLTldKikpPy8sIHtcbiAgICAgICAgZG90dGVkOiAxLFxuICAgICAgICBiYXNlOiAyLFxuICAgICAgICB0dXBsZXQ6IDNcbiAgICAgIH0pKTtcblxuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHZhciBiYXNlID0gTnVtYmVyKG1hdGNoLmdyb3Vwcy5iYXNlKTsgLy8gMSBvciBhbnkgcG93ZXIgb2YgdHdvOlxuXG4gICAgICAgIHZhciBpc1ZhbGlkQmFzZSA9IGJhc2UgPT09IDEgfHwgKGJhc2UgJiBiYXNlIC0gMSkgPT09IDA7XG5cbiAgICAgICAgaWYgKGlzVmFsaWRCYXNlKSB7XG4gICAgICAgICAgLy8gaG93IG11Y2ggZmFzdGVyIG9yIHNsb3dlciBpcyB0aGlzIG5vdGUgY29tcGFyZWQgdG8gYSBxdWFydGVyP1xuICAgICAgICAgIHZhciByYXRpbyA9IGJhc2UgLyA0O1xuICAgICAgICAgIHZhciBkdXJhdGlvbkluUXVhcnRlcnMgPSAxIC8gcmF0aW87XG4gICAgICAgICAgdmFyIF9tYXRjaCRncm91cHMgPSBtYXRjaC5ncm91cHMsXG4gICAgICAgICAgICAgIGRvdHRlZCA9IF9tYXRjaCRncm91cHMuZG90dGVkLFxuICAgICAgICAgICAgICB0dXBsZXQgPSBfbWF0Y2gkZ3JvdXBzLnR1cGxldDtcblxuICAgICAgICAgIGlmIChkb3R0ZWQpIHtcbiAgICAgICAgICAgIHZhciB0aGlzTWFueURvdHMgPSBkb3R0ZWQubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIGRpdmlzb3IgPSBNYXRoLnBvdygyLCB0aGlzTWFueURvdHMpO1xuICAgICAgICAgICAgZHVyYXRpb25JblF1YXJ0ZXJzID0gZHVyYXRpb25JblF1YXJ0ZXJzICsgZHVyYXRpb25JblF1YXJ0ZXJzICogKChkaXZpc29yIC0gMSkgLyBkaXZpc29yKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mIHR1cGxldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHZhciBmaXRJbnRvID0gZHVyYXRpb25JblF1YXJ0ZXJzICogMjsgLy8gZGVmYXVsdCB0byB0cmlwbGV0OlxuXG4gICAgICAgICAgICB2YXIgdGhpc01hbnlOb3RlcyA9IE51bWJlcih0dXBsZXQgfHwgJzMnKTtcbiAgICAgICAgICAgIGR1cmF0aW9uSW5RdWFydGVycyA9IGZpdEludG8gLyB0aGlzTWFueU5vdGVzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBkdXJhdGlvbkluUXVhcnRlcnM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IEVycm9yKGR1cmF0aW9uICsgJyBpcyBub3QgYSB2YWxpZCBkdXJhdGlvbi4nKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVXRpbHM7XG59KCk7XG5cbi8qKlxuICogSG9sZHMgYWxsIGRhdGEgZm9yIGEgXCJub3RlIG9uXCIgTUlESSBldmVudFxuICogQHBhcmFtIHtvYmplY3R9IGZpZWxkcyB7ZGF0YTogW119XG4gKiBAcmV0dXJuIHtOb3RlT25FdmVudH1cbiAqL1xuXG52YXIgTm90ZU9uRXZlbnQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBOb3RlT25FdmVudChmaWVsZHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTm90ZU9uRXZlbnQpO1xuXG4gICAgLy8gU2V0IGRlZmF1bHQgZmllbGRzXG4gICAgZmllbGRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjaGFubmVsOiAxLFxuICAgICAgc3RhcnRUaWNrOiBudWxsLFxuICAgICAgdmVsb2NpdHk6IDUwLFxuICAgICAgd2FpdDogMFxuICAgIH0sIGZpZWxkcyk7XG4gICAgdGhpcy50eXBlID0gJ25vdGUtb24nO1xuICAgIHRoaXMuY2hhbm5lbCA9IGZpZWxkcy5jaGFubmVsO1xuICAgIHRoaXMucGl0Y2ggPSBmaWVsZHMucGl0Y2g7XG4gICAgdGhpcy53YWl0ID0gZmllbGRzLndhaXQ7XG4gICAgdGhpcy52ZWxvY2l0eSA9IGZpZWxkcy52ZWxvY2l0eTtcbiAgICB0aGlzLnN0YXJ0VGljayA9IGZpZWxkcy5zdGFydFRpY2s7XG4gICAgdGhpcy5taWRpTnVtYmVyID0gVXRpbHMuZ2V0UGl0Y2godGhpcy5waXRjaCk7XG4gICAgdGhpcy50aWNrID0gbnVsbDtcbiAgICB0aGlzLmRlbHRhID0gbnVsbDtcbiAgICB0aGlzLmRhdGEgPSBmaWVsZHMuZGF0YTtcbiAgfVxuICAvKipcbiAgICogQnVpbGRzIGludCBhcnJheSBmb3IgdGhpcyBldmVudC5cbiAgICogQHBhcmFtIHtUcmFja30gdHJhY2sgLSBwYXJlbnQgdHJhY2tcbiAgICogQHJldHVybiB7Tm90ZU9uRXZlbnR9XG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKE5vdGVPbkV2ZW50LCBbe1xuICAgIGtleTogXCJidWlsZERhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYnVpbGREYXRhKHRyYWNrLCBwcmVjaXNpb25EZWx0YSkge1xuICAgICAgdGhpcy5kYXRhID0gW107IC8vIEV4cGxpY2l0bHkgZGVmaW5lZCBzdGFydFRpY2sgZXZlbnRcblxuICAgICAgaWYgKHRoaXMuc3RhcnRUaWNrKSB7XG4gICAgICAgIHRoaXMudGljayA9IFV0aWxzLmdldFJvdW5kZWRJZkNsb3NlKHRoaXMuc3RhcnRUaWNrKTsgLy8gSWYgdGhpcyBpcyB0aGUgZmlyc3QgZXZlbnQgaW4gdGhlIHRyYWNrIHRoZW4gdXNlIGV2ZW50J3Mgc3RhcnRpbmcgdGljayBhcyBkZWx0YS5cblxuICAgICAgICBpZiAodHJhY2sudGlja1BvaW50ZXIgPT0gMCkge1xuICAgICAgICAgIHRoaXMuZGVsdGEgPSB0aGlzLnRpY2s7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGVsdGEgPSBVdGlscy5nZXRUaWNrRHVyYXRpb24odGhpcy53YWl0KTtcbiAgICAgICAgdGhpcy50aWNrID0gVXRpbHMuZ2V0Um91bmRlZElmQ2xvc2UodHJhY2sudGlja1BvaW50ZXIgKyB0aGlzLmRlbHRhKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kZWx0YVdpdGhQcmVjaXNpb25Db3JyZWN0aW9uID0gVXRpbHMuZ2V0Um91bmRlZElmQ2xvc2UodGhpcy5kZWx0YSAtIHByZWNpc2lvbkRlbHRhKTtcbiAgICAgIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgodGhpcy5kZWx0YVdpdGhQcmVjaXNpb25Db3JyZWN0aW9uKS5jb25jYXQodGhpcy5nZXRTdGF0dXNCeXRlKCksIHRoaXMubWlkaU51bWJlciwgVXRpbHMuY29udmVydFZlbG9jaXR5KHRoaXMudmVsb2NpdHkpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBub3RlIG9uIHN0YXR1cyBjb2RlIGJhc2VkIG9uIHRoZSBzZWxlY3RlZCBjaGFubmVsLiAweDl7MC1GfVxuICAgICAqIE5vdGUgb24gYXQgY2hhbm5lbCAwIGlzIDB4OTAgKDE0NClcbiAgICAgKiAwID0gQ2ggMVxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFN0YXR1c0J5dGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U3RhdHVzQnl0ZSgpIHtcbiAgICAgIHJldHVybiAxNDQgKyB0aGlzLmNoYW5uZWwgLSAxO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBOb3RlT25FdmVudDtcbn0oKTtcblxuLyoqXG4gKiBIb2xkcyBhbGwgZGF0YSBmb3IgYSBcIm5vdGUgb2ZmXCIgTUlESSBldmVudFxuICogQHBhcmFtIHtvYmplY3R9IGZpZWxkcyB7ZGF0YTogW119XG4gKiBAcmV0dXJuIHtOb3RlT2ZmRXZlbnR9XG4gKi9cblxudmFyIE5vdGVPZmZFdmVudCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE5vdGVPZmZFdmVudChmaWVsZHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTm90ZU9mZkV2ZW50KTtcblxuICAgIC8vIFNldCBkZWZhdWx0IGZpZWxkc1xuICAgIGZpZWxkcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2hhbm5lbDogMSxcbiAgICAgIHZlbG9jaXR5OiA1MCxcbiAgICAgIHRpY2s6IG51bGxcbiAgICB9LCBmaWVsZHMpO1xuICAgIHRoaXMudHlwZSA9ICdub3RlLW9mZic7XG4gICAgdGhpcy5jaGFubmVsID0gZmllbGRzLmNoYW5uZWw7XG4gICAgdGhpcy5waXRjaCA9IGZpZWxkcy5waXRjaDtcbiAgICB0aGlzLmR1cmF0aW9uID0gZmllbGRzLmR1cmF0aW9uO1xuICAgIHRoaXMudmVsb2NpdHkgPSBmaWVsZHMudmVsb2NpdHk7XG4gICAgdGhpcy5taWRpTnVtYmVyID0gVXRpbHMuZ2V0UGl0Y2godGhpcy5waXRjaCk7XG4gICAgdGhpcy50aWNrID0gZmllbGRzLnRpY2s7XG4gICAgdGhpcy5kZWx0YSA9IFV0aWxzLmdldFRpY2tEdXJhdGlvbih0aGlzLmR1cmF0aW9uKTtcbiAgICB0aGlzLmRhdGEgPSBmaWVsZHMuZGF0YTtcbiAgfVxuICAvKipcbiAgICogQnVpbGRzIGludCBhcnJheSBmb3IgdGhpcyBldmVudC5cbiAgICogQHBhcmFtIHtUcmFja30gdHJhY2sgLSBwYXJlbnQgdHJhY2tcbiAgICogQHJldHVybiB7Tm90ZU9mZkV2ZW50fVxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhOb3RlT2ZmRXZlbnQsIFt7XG4gICAga2V5OiBcImJ1aWxkRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBidWlsZERhdGEodHJhY2ssIHByZWNpc2lvbkRlbHRhKSB7XG4gICAgICBpZiAodGhpcy50aWNrID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMudGljayA9IFV0aWxzLmdldFJvdW5kZWRJZkNsb3NlKHRoaXMuZGVsdGEgKyB0cmFjay50aWNrUG9pbnRlcik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGVsdGFXaXRoUHJlY2lzaW9uQ29ycmVjdGlvbiA9IFV0aWxzLmdldFJvdW5kZWRJZkNsb3NlKHRoaXMuZGVsdGEgLSBwcmVjaXNpb25EZWx0YSk7XG4gICAgICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRoaXMuZGVsdGFXaXRoUHJlY2lzaW9uQ29ycmVjdGlvbikuY29uY2F0KHRoaXMuZ2V0U3RhdHVzQnl0ZSgpLCB0aGlzLm1pZGlOdW1iZXIsIFV0aWxzLmNvbnZlcnRWZWxvY2l0eSh0aGlzLnZlbG9jaXR5KSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgbm90ZSBvZmYgc3RhdHVzIGNvZGUgYmFzZWQgb24gdGhlIHNlbGVjdGVkIGNoYW5uZWwuIDB4OHswLUZ9XG4gICAgICogTm90ZSBvZmYgYXQgY2hhbm5lbCAwIGlzIDB4ODAgKDEyOClcbiAgICAgKiAwID0gQ2ggMVxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFN0YXR1c0J5dGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U3RhdHVzQnl0ZSgpIHtcbiAgICAgIHJldHVybiAxMjggKyB0aGlzLmNoYW5uZWwgLSAxO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBOb3RlT2ZmRXZlbnQ7XG59KCk7XG5cbi8qKlxuICogV3JhcHBlciBmb3Igbm90ZU9uRXZlbnQvbm90ZU9mZkV2ZW50IG9iamVjdHMgdGhhdCBidWlsZHMgYm90aCBldmVudHMuXG4gKiBAcGFyYW0ge29iamVjdH0gZmllbGRzIC0ge3BpdGNoOiAnW0M0XScsIGR1cmF0aW9uOiAnNCcsIHdhaXQ6ICc0JywgdmVsb2NpdHk6IDEtMTAwfVxuICogQHJldHVybiB7Tm90ZUV2ZW50fVxuICovXG5cbnZhciBOb3RlRXZlbnQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBOb3RlRXZlbnQoZmllbGRzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5vdGVFdmVudCk7XG5cbiAgICAvLyBTZXQgZGVmYXVsdCBmaWVsZHNcbiAgICBmaWVsZHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNoYW5uZWw6IDEsXG4gICAgICByZXBlYXQ6IDEsXG4gICAgICBzZXF1ZW50aWFsOiBmYWxzZSxcbiAgICAgIHN0YXJ0VGljazogbnVsbCxcbiAgICAgIHZlbG9jaXR5OiA1MCxcbiAgICAgIHdhaXQ6IDBcbiAgICB9LCBmaWVsZHMpO1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIHRoaXMudHlwZSA9ICdub3RlJztcbiAgICB0aGlzLnBpdGNoID0gVXRpbHMudG9BcnJheShmaWVsZHMucGl0Y2gpO1xuICAgIHRoaXMuY2hhbm5lbCA9IGZpZWxkcy5jaGFubmVsO1xuICAgIHRoaXMuZHVyYXRpb24gPSBmaWVsZHMuZHVyYXRpb247XG4gICAgdGhpcy5ncmFjZSA9IGZpZWxkcy5ncmFjZTtcbiAgICB0aGlzLnJlcGVhdCA9IGZpZWxkcy5yZXBlYXQ7XG4gICAgdGhpcy5zZXF1ZW50aWFsID0gZmllbGRzLnNlcXVlbnRpYWw7XG4gICAgdGhpcy5zdGFydFRpY2sgPSBmaWVsZHMuc3RhcnRUaWNrO1xuICAgIHRoaXMudmVsb2NpdHkgPSBmaWVsZHMudmVsb2NpdHk7XG4gICAgdGhpcy53YWl0ID0gZmllbGRzLndhaXQ7XG4gICAgdGhpcy50aWNrRHVyYXRpb24gPSBVdGlscy5nZXRUaWNrRHVyYXRpb24odGhpcy5kdXJhdGlvbik7XG4gICAgdGhpcy5yZXN0RHVyYXRpb24gPSBVdGlscy5nZXRUaWNrRHVyYXRpb24odGhpcy53YWl0KTtcbiAgICB0aGlzLmV2ZW50cyA9IFtdOyAvLyBIb2xkIGFjdHVhbCBOb3RlT24vTm90ZU9mZiBldmVudHNcbiAgfVxuICAvKipcbiAgICogQnVpbGRzIGludCBhcnJheSBmb3IgdGhpcyBldmVudC5cbiAgICogQHJldHVybiB7Tm90ZUV2ZW50fVxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhOb3RlRXZlbnQsIFt7XG4gICAga2V5OiBcImJ1aWxkRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBidWlsZERhdGEoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAvLyBSZXNldCBkYXRhIGFycmF5XG4gICAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICAgIHRoaXMudGlja0R1cmF0aW9uO1xuICAgICAgdGhpcy5yZXN0RHVyYXRpb247IC8vIEFwcGx5IGdyYWNlIG5vdGUocykgYW5kIHN1YnRyYWN0IHRpY2tzIChjdXJyZW50bHkgMSB0aWNrIHBlciBncmFjZSBub3RlKSBmcm9tIHRpY2tEdXJhdGlvbiBzbyBuZXQgdmFsdWUgaXMgdGhlIHNhbWVcblxuICAgICAgaWYgKHRoaXMuZ3JhY2UpIHtcbiAgICAgICAgdmFyIGdyYWNlRHVyYXRpb24gPSAxO1xuICAgICAgICB0aGlzLmdyYWNlID0gVXRpbHMudG9BcnJheSh0aGlzLmdyYWNlKTtcbiAgICAgICAgdGhpcy5ncmFjZS5mb3JFYWNoKGZ1bmN0aW9uIChwaXRjaCkge1xuICAgICAgICAgIHZhciBub3RlRXZlbnQgPSBuZXcgTm90ZUV2ZW50KHtcbiAgICAgICAgICAgIHBpdGNoOiBfdGhpcy5ncmFjZSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAnVCcgKyBncmFjZUR1cmF0aW9uXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgX3RoaXMuZGF0YSA9IF90aGlzLmRhdGEuY29uY2F0KG5vdGVFdmVudC5kYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICB9IC8vIGZpZWxkcy5waXRjaCBjb3VsZCBiZSBhbiBhcnJheSBvZiBwaXRjaGVzLlxuICAgICAgLy8gSWYgdGhpcy5zZXF1ZW50aWFsID09PSB0cnVlIHRoZW4gaXQncyBhIHNlcXVlbnRpYWwgc3RyaW5nIG9mIG5vdGVzIHRoYXQgcmVxdWlyZXMgc2VwYXJhdGUgTm90ZU9uRXZlbnRzLlxuXG4gICAgICBpZiAoIXRoaXMuc2VxdWVudGlhbCkge1xuICAgICAgICAvLyBIYW5kbGUgcmVwZWF0XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5yZXBlYXQ7IGorKykge1xuICAgICAgICAgIC8vIE5vdGUgb25cbiAgICAgICAgICB0aGlzLnBpdGNoLmZvckVhY2goZnVuY3Rpb24gKHAsIGkpIHtcbiAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgdmFyIG5vdGVPbk5ldyA9IG5ldyBOb3RlT25FdmVudCh7XG4gICAgICAgICAgICAgICAgY2hhbm5lbDogX3RoaXMuY2hhbm5lbCxcbiAgICAgICAgICAgICAgICB3YWl0OiBfdGhpcy53YWl0LFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5OiBfdGhpcy52ZWxvY2l0eSxcbiAgICAgICAgICAgICAgICBwaXRjaDogcCxcbiAgICAgICAgICAgICAgICBzdGFydFRpY2s6IF90aGlzLnN0YXJ0VGlja1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFJ1bm5pbmcgc3RhdHVzIChjYW4gb21taXQgdGhlIG5vdGUgb24gc3RhdHVzKVxuICAgICAgICAgICAgICAvL25vdGVPbiA9IG5ldyBOb3RlT25FdmVudCh7ZGF0YTogWzAsIFV0aWxzLmdldFBpdGNoKHApLCBVdGlscy5jb252ZXJ0VmVsb2NpdHkodGhpcy52ZWxvY2l0eSldfSk7XG4gICAgICAgICAgICAgIHZhciBub3RlT25OZXcgPSBuZXcgTm90ZU9uRXZlbnQoe1xuICAgICAgICAgICAgICAgIGNoYW5uZWw6IF90aGlzLmNoYW5uZWwsXG4gICAgICAgICAgICAgICAgd2FpdDogMCxcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eTogX3RoaXMudmVsb2NpdHksXG4gICAgICAgICAgICAgICAgcGl0Y2g6IHAsXG4gICAgICAgICAgICAgICAgc3RhcnRUaWNrOiBfdGhpcy5zdGFydFRpY2tcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF90aGlzLmV2ZW50cy5wdXNoKG5vdGVPbk5ldyk7XG4gICAgICAgICAgfSk7IC8vIE5vdGUgb2ZmXG5cbiAgICAgICAgICB0aGlzLnBpdGNoLmZvckVhY2goZnVuY3Rpb24gKHAsIGkpIHtcbiAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgLy9ub3RlT2ZmID0gbmV3IE5vdGVPZmZFdmVudCh7ZGF0YTogVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0aWNrRHVyYXRpb24pLmNvbmNhdCh0aGlzLmdldE5vdGVPZmZTdGF0dXMoKSwgVXRpbHMuZ2V0UGl0Y2gocCksIFV0aWxzLmNvbnZlcnRWZWxvY2l0eSh0aGlzLnZlbG9jaXR5KSl9KTtcbiAgICAgICAgICAgICAgdmFyIG5vdGVPZmZOZXcgPSBuZXcgTm90ZU9mZkV2ZW50KHtcbiAgICAgICAgICAgICAgICBjaGFubmVsOiBfdGhpcy5jaGFubmVsLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBfdGhpcy5kdXJhdGlvbixcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eTogX3RoaXMudmVsb2NpdHksXG4gICAgICAgICAgICAgICAgcGl0Y2g6IHAsXG4gICAgICAgICAgICAgICAgdGljazogX3RoaXMuc3RhcnRUaWNrICE9PSBudWxsID8gVXRpbHMuZ2V0VGlja0R1cmF0aW9uKF90aGlzLmR1cmF0aW9uKSArIF90aGlzLnN0YXJ0VGljayA6IG51bGxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBSdW5uaW5nIHN0YXR1cyAoY2FuIG9tbWl0IHRoZSBub3RlIG9mZiBzdGF0dXMpXG4gICAgICAgICAgICAgIC8vbm90ZU9mZiA9IG5ldyBOb3RlT2ZmRXZlbnQoe2RhdGE6IFswLCBVdGlscy5nZXRQaXRjaChwKSwgVXRpbHMuY29udmVydFZlbG9jaXR5KHRoaXMudmVsb2NpdHkpXX0pO1xuICAgICAgICAgICAgICB2YXIgbm90ZU9mZk5ldyA9IG5ldyBOb3RlT2ZmRXZlbnQoe1xuICAgICAgICAgICAgICAgIGNoYW5uZWw6IF90aGlzLmNoYW5uZWwsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDAsXG4gICAgICAgICAgICAgICAgdmVsb2NpdHk6IF90aGlzLnZlbG9jaXR5LFxuICAgICAgICAgICAgICAgIHBpdGNoOiBwLFxuICAgICAgICAgICAgICAgIHRpY2s6IF90aGlzLnN0YXJ0VGljayAhPT0gbnVsbCA/IFV0aWxzLmdldFRpY2tEdXJhdGlvbihfdGhpcy5kdXJhdGlvbikgKyBfdGhpcy5zdGFydFRpY2sgOiBudWxsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfdGhpcy5ldmVudHMucHVzaChub3RlT2ZmTmV3KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSGFuZGxlIHJlcGVhdFxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMucmVwZWF0OyBqKyspIHtcbiAgICAgICAgICB0aGlzLnBpdGNoLmZvckVhY2goZnVuY3Rpb24gKHAsIGkpIHtcblxuICAgICAgICAgICAgdmFyIG5vdGVPbk5ldyA9IG5ldyBOb3RlT25FdmVudCh7XG4gICAgICAgICAgICAgIGNoYW5uZWw6IF90aGlzLmNoYW5uZWwsXG4gICAgICAgICAgICAgIHdhaXQ6IGkgPiAwID8gMCA6IF90aGlzLndhaXQsXG4gICAgICAgICAgICAgIC8vIHdhaXQgb25seSBhcHBsaWVzIHRvIGZpcnN0IG5vdGUgaW4gcmVwZXRpdGlvblxuICAgICAgICAgICAgICB2ZWxvY2l0eTogX3RoaXMudmVsb2NpdHksXG4gICAgICAgICAgICAgIHBpdGNoOiBwLFxuICAgICAgICAgICAgICBzdGFydFRpY2s6IF90aGlzLnN0YXJ0VGlja1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgbm90ZU9mZk5ldyA9IG5ldyBOb3RlT2ZmRXZlbnQoe1xuICAgICAgICAgICAgICBjaGFubmVsOiBfdGhpcy5jaGFubmVsLFxuICAgICAgICAgICAgICBkdXJhdGlvbjogX3RoaXMuZHVyYXRpb24sXG4gICAgICAgICAgICAgIHZlbG9jaXR5OiBfdGhpcy52ZWxvY2l0eSxcbiAgICAgICAgICAgICAgcGl0Y2g6IHBcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBfdGhpcy5ldmVudHMucHVzaChub3RlT25OZXcsIG5vdGVPZmZOZXcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBOb3RlRXZlbnQ7XG59KCk7XG5cbi8qKlxuICogSG9sZHMgYWxsIGRhdGEgZm9yIGEgXCJQaXRjaCBCZW5kXCIgTUlESSBldmVudFxuICogWyAtMS4wLCAwLCAxLjAgXSAtPiAgWyAwLCA4MTkyLCAxNjM4M11cbiAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZHMgeyBiZW5kIDogZmxvYXQsIGNoYW5uZWwgOiBpbnQgfVxuICogQHJldHVybiB7UGl0Y2hCZW5kRXZlbnR9XG4gKi9cblxudmFyIHNjYWxlMTRiaXRzID0gZnVuY3Rpb24gc2NhbGUxNGJpdHMoemVyb09uZSkge1xuICBpZiAoemVyb09uZSA8PSAwKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoMTYzODQgKiAoemVyb09uZSArIDEpIC8gMik7XG4gIH1cblxuICByZXR1cm4gTWF0aC5mbG9vcigxNjM4MyAqICh6ZXJvT25lICsgMSkgLyAyKTtcbn07XG5cbnZhciBQaXRjaEJlbmRFdmVudCA9IGZ1bmN0aW9uIFBpdGNoQmVuZEV2ZW50KGZpZWxkcykge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGl0Y2hCZW5kRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdwaXRjaC1iZW5kJztcbiAgdmFyIGJlbmQxNCA9IHNjYWxlMTRiaXRzKGZpZWxkcy5iZW5kKTtcbiAgdmFyIGNoYW5uZWwgPSBmaWVsZHMuY2hhbm5lbCB8fCAwO1xuICB2YXIgbHNiVmFsdWUgPSBiZW5kMTQgJiAweDdmO1xuICB2YXIgbXNiVmFsdWUgPSBiZW5kMTQgPj4gNyAmIDB4N2Y7XG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5QSVRDSF9CRU5EX1NUQVRVUyB8IGNoYW5uZWwsIGxzYlZhbHVlLCBtc2JWYWx1ZSk7XG59O1xuXG4vKipcbiAqIEhvbGRzIGFsbCBkYXRhIGZvciBhIFwicHJvZ3JhbSBjaGFuZ2VcIiBNSURJIGV2ZW50XG4gKiBAcGFyYW0ge29iamVjdH0gZmllbGRzIHtpbnN0cnVtZW50OiBpbnRlZ2VyfVxuICogQHJldHVybiB7UHJvZ3JhbUNoYW5nZUV2ZW50fVxuICovXG5cbnZhciBQcm9ncmFtQ2hhbmdlRXZlbnQgPSBmdW5jdGlvbiBQcm9ncmFtQ2hhbmdlRXZlbnQoZmllbGRzKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQcm9ncmFtQ2hhbmdlRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdwcm9ncmFtJzsgLy8gZGVsdGEgdGltZSBkZWZhdWx0cyB0byAwLlxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5QUk9HUkFNX0NIQU5HRV9TVEFUVVMsIGZpZWxkcy5pbnN0cnVtZW50KTtcbn07XG5cbi8qKlxuICogSG9sZHMgYWxsIGRhdGEgZm9yIGEgXCJjb250cm9sbGVyIGNoYW5nZVwiIE1JREkgZXZlbnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZHMge2NvbnRyb2xsZXJOdW1iZXI6IGludGVnZXIsIGNvbnRyb2xsZXJWYWx1ZTogaW50ZWdlcn1cbiAqIEByZXR1cm4ge0NvbnRyb2xsZXJDaGFuZ2VFdmVudH1cbiAqL1xuXG52YXIgQ29udHJvbGxlckNoYW5nZUV2ZW50ID0gZnVuY3Rpb24gQ29udHJvbGxlckNoYW5nZUV2ZW50KGZpZWxkcykge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29udHJvbGxlckNoYW5nZUV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAnY29udHJvbGxlcic7IC8vIGRlbHRhIHRpbWUgZGVmYXVsdHMgdG8gMC5cblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuQ09OVFJPTExFUl9DSEFOR0VfU1RBVFVTLCBmaWVsZHMuY29udHJvbGxlck51bWJlciwgZmllbGRzLmNvbnRyb2xsZXJWYWx1ZSk7XG59O1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIHRlbXBvIG1ldGEgZXZlbnQuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIENvcHlyaWdodCB0ZXh0XG4gKiBAcmV0dXJuIHtDb3B5cmlnaHRFdmVudH1cbiAqL1xuXG52YXIgQ29weXJpZ2h0RXZlbnQgPSBmdW5jdGlvbiBDb3B5cmlnaHRFdmVudCh0ZXh0KSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb3B5cmlnaHRFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ2NvcHlyaWdodCc7XG4gIHZhciB0ZXh0Qnl0ZXMgPSBVdGlscy5zdHJpbmdUb0J5dGVzKHRleHQpOyAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9DT1BZUklHSFRfSUQsIFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgodGV4dEJ5dGVzLmxlbmd0aCksIC8vIFNpemVcbiAgdGV4dEJ5dGVzIC8vIFRleHRcbiAgKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgY3VlIHBvaW50IG1ldGEgZXZlbnQuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIEN1ZSBwb2ludCB0ZXh0XG4gKiBAcmV0dXJuIHtDdWVQb2ludEV2ZW50fVxuICovXG5cbnZhciBDdWVQb2ludEV2ZW50ID0gZnVuY3Rpb24gQ3VlUG9pbnRFdmVudCh0ZXh0KSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDdWVQb2ludEV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAnbWFya2VyJztcbiAgdmFyIHRleHRCeXRlcyA9IFV0aWxzLnN0cmluZ1RvQnl0ZXModGV4dCk7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX0NVRV9QT0lOVCwgVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0ZXh0Qnl0ZXMubGVuZ3RoKSwgLy8gU2l6ZVxuICB0ZXh0Qnl0ZXMgLy8gVGV4dFxuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSBlbmQgdHJhY2sgbWV0YSBldmVudC5cbiAqIEByZXR1cm4ge0VuZFRyYWNrRXZlbnR9XG4gKi9cblxudmFyIEVuZFRyYWNrRXZlbnQgPSBmdW5jdGlvbiBFbmRUcmFja0V2ZW50KCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRW5kVHJhY2tFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ2VuZC10cmFjayc7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX0VORF9PRl9UUkFDS19JRCk7XG59O1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhbiBpbnN0cnVtZW50IG5hbWUgbWV0YSBldmVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBicG0gLSBCZWF0cyBwZXIgbWludXRlXG4gKiBAcmV0dXJuIHtJbnN0cnVtZW50TmFtZUV2ZW50fVxuICovXG5cbnZhciBJbnN0cnVtZW50TmFtZUV2ZW50ID0gZnVuY3Rpb24gSW5zdHJ1bWVudE5hbWVFdmVudCh0ZXh0KSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbnN0cnVtZW50TmFtZUV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAnaW5zdHJ1bWVudC1uYW1lJztcbiAgdmFyIHRleHRCeXRlcyA9IFV0aWxzLnN0cmluZ1RvQnl0ZXModGV4dCk7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX0lOU1RSVU1FTlRfTkFNRV9JRCwgVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0ZXh0Qnl0ZXMubGVuZ3RoKSwgLy8gU2l6ZVxuICB0ZXh0Qnl0ZXMgLy8gSW5zdHJ1bWVudCBuYW1lXG4gICk7XG59O1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIGtleSBzaWduYXR1cmUgbWV0YSBldmVudC5cbiAqIEByZXR1cm4ge0tleVNpZ25hdHVyZUV2ZW50fVxuICovXG5cbnZhciBLZXlTaWduYXR1cmVFdmVudCA9IGZ1bmN0aW9uIEtleVNpZ25hdHVyZUV2ZW50KHNmLCBtaSkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgS2V5U2lnbmF0dXJlRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdrZXktc2lnbmF0dXJlJztcbiAgdmFyIG1vZGUgPSBtaSB8fCAwO1xuICBzZiA9IHNmIHx8IDA7IC8vXHRGdW5jdGlvbiBjYWxsZWQgd2l0aCBzdHJpbmcgbm90YXRpb25cblxuICBpZiAodHlwZW9mIG1pID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBmaWZ0aHMgPSBbWydDYicsICdHYicsICdEYicsICdBYicsICdFYicsICdCYicsICdGJywgJ0MnLCAnRycsICdEJywgJ0EnLCAnRScsICdCJywgJ0YjJywgJ0MjJ10sIFsnYWInLCAnZWInLCAnYmInLCAnZicsICdjJywgJ2cnLCAnZCcsICdhJywgJ2UnLCAnYicsICdmIycsICdjIycsICdnIycsICdkIycsICdhIyddXTtcbiAgICB2YXIgX3NmbGVuID0gc2YubGVuZ3RoO1xuICAgIHZhciBub3RlID0gc2YgfHwgJ0MnO1xuICAgIGlmIChzZlswXSA9PT0gc2ZbMF0udG9Mb3dlckNhc2UoKSkgbW9kZSA9IDE7XG5cbiAgICBpZiAoX3NmbGVuID4gMSkge1xuICAgICAgc3dpdGNoIChzZi5jaGFyQXQoX3NmbGVuIC0gMSkpIHtcbiAgICAgICAgY2FzZSAnbSc6XG4gICAgICAgICAgbW9kZSA9IDE7XG4gICAgICAgICAgbm90ZSA9IHNmLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIG5vdGUgPSBub3RlLmNvbmNhdChzZi5zdWJzdHJpbmcoMSwgX3NmbGVuIC0gMSkpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgIG1vZGUgPSAxO1xuICAgICAgICAgIG5vdGUgPSBzZi5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICBub3RlID0gbm90ZS5jb25jYXQoc2Yuc3Vic3RyaW5nKDEsIF9zZmxlbiAtIDEpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdNJzpcbiAgICAgICAgICBtb2RlID0gMDtcbiAgICAgICAgICBub3RlID0gc2YuY2hhckF0KDApLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgbm90ZSA9IG5vdGUuY29uY2F0KHNmLnN1YnN0cmluZygxLCBfc2ZsZW4gLSAxKSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgbW9kZSA9IDA7XG4gICAgICAgICAgbm90ZSA9IHNmLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgIG5vdGUgPSBub3RlLmNvbmNhdChzZi5zdWJzdHJpbmcoMSwgX3NmbGVuIC0gMSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBmaWZ0aGluZGV4ID0gZmlmdGhzW21vZGVdLmluZGV4T2Yobm90ZSk7XG4gICAgc2YgPSBmaWZ0aGluZGV4ID09PSAtMSA/IDAgOiBmaWZ0aGluZGV4IC0gNztcbiAgfSAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX0tFWV9TSUdOQVRVUkVfSUQsIFsweDAyXSwgLy8gU2l6ZVxuICBVdGlscy5udW1iZXJUb0J5dGVzKHNmLCAxKSwgLy8gTnVtYmVyIG9mIHNoYXJwIG9yIGZsYXRzICggPCAwIGZsYXQ7ID4gMCBzaGFycClcbiAgVXRpbHMubnVtYmVyVG9CeXRlcyhtb2RlLCAxKSAvLyBNb2RlOiAwIG1ham9yLCAxIG1pbm9yXG4gICk7XG59O1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIGx5cmljIG1ldGEgZXZlbnQuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIEx5cmljIHRleHRcbiAqIEByZXR1cm4ge0x5cmljRXZlbnR9XG4gKi9cblxudmFyIEx5cmljRXZlbnQgPSBmdW5jdGlvbiBMeXJpY0V2ZW50KHRleHQpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEx5cmljRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdtYXJrZXInO1xuICB2YXIgdGV4dEJ5dGVzID0gVXRpbHMuc3RyaW5nVG9CeXRlcyh0ZXh0KTsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfTFlSSUNfSUQsIFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgodGV4dEJ5dGVzLmxlbmd0aCksIC8vIFNpemVcbiAgdGV4dEJ5dGVzIC8vIFRleHRcbiAgKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgbWFya2VyIG1ldGEgZXZlbnQuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIE1hcmtlciB0ZXh0XG4gKiBAcmV0dXJuIHtNYXJrZXJFdmVudH1cbiAqL1xuXG52YXIgTWFya2VyRXZlbnQgPSBmdW5jdGlvbiBNYXJrZXJFdmVudCh0ZXh0KSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXJrZXJFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ21hcmtlcic7XG4gIHZhciB0ZXh0Qnl0ZXMgPSBVdGlscy5zdHJpbmdUb0J5dGVzKHRleHQpOyAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9NQVJLRVJfSUQsIFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgodGV4dEJ5dGVzLmxlbmd0aCksIC8vIFNpemVcbiAgdGV4dEJ5dGVzIC8vIFRleHRcbiAgKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgdGVtcG8gbWV0YSBldmVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBicG0gLSBCZWF0cyBwZXIgbWludXRlXG4gKiBAcmV0dXJuIHtUZW1wb0V2ZW50fVxuICovXG5cbnZhciBUZW1wb0V2ZW50ID0gZnVuY3Rpb24gVGVtcG9FdmVudChicG0pIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRlbXBvRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICd0ZW1wbyc7XG4gIHZhciB0ZW1wbyA9IE1hdGgucm91bmQoNjAwMDAwMDAgLyBicG0pOyAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9URU1QT19JRCwgWzB4MDNdLCAvLyBTaXplXG4gIFV0aWxzLm51bWJlclRvQnl0ZXModGVtcG8sIDMpIC8vIFRlbXBvLCAzIGJ5dGVzXG4gICk7XG59O1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIHRlbXBvIG1ldGEgZXZlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gYnBtIC0gQmVhdHMgcGVyIG1pbnV0ZVxuICogQHJldHVybiB7VGV4dEV2ZW50fVxuICovXG5cbnZhciBUZXh0RXZlbnQgPSBmdW5jdGlvbiBUZXh0RXZlbnQodGV4dCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGV4dEV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAndGV4dCc7XG4gIHZhciB0ZXh0Qnl0ZXMgPSBVdGlscy5zdHJpbmdUb0J5dGVzKHRleHQpOyAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9URVhUX0lELCBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRleHRCeXRlcy5sZW5ndGgpLCAvLyBTaXplXG4gIHRleHRCeXRlcyAvLyBUZXh0XG4gICk7XG59O1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIHRpbWUgc2lnbmF0dXJlIG1ldGEgZXZlbnQuXG4gKiBAcmV0dXJuIHtUaW1lU2lnbmF0dXJlRXZlbnR9XG4gKi9cblxudmFyIFRpbWVTaWduYXR1cmVFdmVudCA9IGZ1bmN0aW9uIFRpbWVTaWduYXR1cmVFdmVudChudW1lcmF0b3IsIGRlbm9taW5hdG9yLCBtaWRpY2xvY2tzcGVydGljaywgbm90ZXNwZXJtaWRpY2xvY2spIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRpbWVTaWduYXR1cmVFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ3RpbWUtc2lnbmF0dXJlJzsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfVElNRV9TSUdOQVRVUkVfSUQsIFsweDA0XSwgLy8gU2l6ZVxuICBVdGlscy5udW1iZXJUb0J5dGVzKG51bWVyYXRvciwgMSksIC8vIE51bWVyYXRvciwgMSBieXRlc1xuICBVdGlscy5udW1iZXJUb0J5dGVzKE1hdGgubG9nMihkZW5vbWluYXRvciksIDEpLCAvLyBEZW5vbWluYXRvciBpcyBleHByZXNzZWQgYXMgcG93IG9mIDIsIDEgYnl0ZXNcbiAgVXRpbHMubnVtYmVyVG9CeXRlcyhtaWRpY2xvY2tzcGVydGljayB8fCAyNCwgMSksIC8vIE1JREkgQ2xvY2tzIHBlciB0aWNrLCAxIGJ5dGVzXG4gIFV0aWxzLm51bWJlclRvQnl0ZXMobm90ZXNwZXJtaWRpY2xvY2sgfHwgOCwgMSkgLy8gTnVtYmVyIG9mIDEvMzIgbm90ZXMgcGVyIE1JREkgY2xvY2tzLCAxIGJ5dGVzXG4gICk7XG59O1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIHRlbXBvIG1ldGEgZXZlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gYnBtIC0gQmVhdHMgcGVyIG1pbnV0ZVxuICogQHJldHVybiB7VHJhY2tOYW1lRXZlbnR9XG4gKi9cblxudmFyIFRyYWNrTmFtZUV2ZW50ID0gZnVuY3Rpb24gVHJhY2tOYW1lRXZlbnQodGV4dCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJhY2tOYW1lRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICd0cmFjay1uYW1lJztcbiAgdmFyIHRleHRCeXRlcyA9IFV0aWxzLnN0cmluZ1RvQnl0ZXModGV4dCk7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX1RSQUNLX05BTUVfSUQsIFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgodGV4dEJ5dGVzLmxlbmd0aCksIC8vIFNpemVcbiAgdGV4dEJ5dGVzIC8vIFRleHRcbiAgKTtcbn07XG5cbi8qKlxuICogSG9sZHMgYWxsIGRhdGEgZm9yIGEgdHJhY2suXG4gKiBAcGFyYW0ge29iamVjdH0gZmllbGRzIHt0eXBlOiBudW1iZXIsIGRhdGE6IGFycmF5LCBzaXplOiBhcnJheSwgZXZlbnRzOiBhcnJheX1cbiAqIEByZXR1cm4ge1RyYWNrfVxuICovXG5cbnZhciBUcmFjayA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFRyYWNrKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmFjayk7XG5cbiAgICB0aGlzLnR5cGUgPSBDb25zdGFudHMuVFJBQ0tfQ0hVTktfVFlQRTtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICB0aGlzLnNpemUgPSBbXTtcbiAgICB0aGlzLmV2ZW50cyA9IFtdO1xuICAgIHRoaXMuZXhwbGljaXRUaWNrRXZlbnRzID0gW107IC8vIElmIHRoZXJlIGFyZSBhbnkgZXZlbnRzIHdpdGggYW4gZXhwbGljaXQgdGljayBkZWZpbmVkIHRoZW4gd2Ugd2lsbCBjcmVhdGUgYSBcInN1YlwiIHRyYWNrIGZvciB0aG9zZVxuICAgIC8vIGFuZCBtZXJnZSB0aGVtIGluIGFuZCB0aGUgZW5kLlxuXG4gICAgdGhpcy50aWNrUG9pbnRlciA9IDA7IC8vIEVhY2ggdGltZSBhbiBldmVudCBpcyBhZGRlZCB0aGlzIHdpbGwgaW5jcmVhc2VcbiAgfVxuICAvKipcbiAgICogQWRkcyBhbnkgZXZlbnQgdHlwZSB0byB0aGUgdHJhY2suXG4gICAqIEV2ZW50cyB3aXRob3V0IGEgc3BlY2lmaWMgc3RhcnRUaWNrIHByb3BlcnR5IGFyZSBhc3N1bWVkIHRvIGJlIGFkZGVkIGluIG9yZGVyIG9mIGhvdyB0aGV5IHNob3VsZCBvdXRwdXQuXG4gICAqIEV2ZW50cyB3aXRoIGEgc3BlY2lmaWMgc3RhcnRUaWNrIHByb3BlcnR5IGFyZSBzZXQgYXNpZGUgZm9yIG5vdyB3aWxsIGJlIG1lcmdlZCBpbiBkdXJpbmcgYnVpbGQgcHJvY2Vzcy5cbiAgICogQHBhcmFtIHsoTm90ZUV2ZW50fFByb2dyYW1DaGFuZ2VFdmVudCl9IGV2ZW50cyAtIEV2ZW50IG9iamVjdCBvciBhcnJheSBvZiBFdmVudCBvYmplY3RzLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBtYXBGdW5jdGlvbiAtIENhbGxiYWNrIHdoaWNoIGNhbiBiZSB1c2VkIHRvIGFwcGx5IHNwZWNpZmljIHByb3BlcnRpZXMgdG8gYWxsIGV2ZW50cy5cbiAgICogQHJldHVybiB7VHJhY2t9XG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKFRyYWNrLCBbe1xuICAgIGtleTogXCJhZGRFdmVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRFdmVudChldmVudHMsIG1hcEZ1bmN0aW9uKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBVdGlscy50b0FycmF5KGV2ZW50cykuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQsIGkpIHtcbiAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTm90ZUV2ZW50KSB7XG4gICAgICAgICAgLy8gSGFuZGxlIG1hcCBmdW5jdGlvbiBpZiBwcm92aWRlZFxuICAgICAgICAgIGlmICh0eXBlb2YgbWFwRnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBwcm9wZXJ0aWVzID0gbWFwRnVuY3Rpb24oaSwgZXZlbnQpO1xuXG4gICAgICAgICAgICBpZiAoX3R5cGVvZihwcm9wZXJ0aWVzKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgaiBpbiBwcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChqKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlICdjaGFubmVsJzpcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuY2hhbm5lbCA9IHByb3BlcnRpZXNbal07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlICdkdXJhdGlvbic6XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmR1cmF0aW9uID0gcHJvcGVydGllc1tqXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgJ3NlcXVlbnRpYWwnOlxuICAgICAgICAgICAgICAgICAgICBldmVudC5zZXF1ZW50aWFsID0gcHJvcGVydGllc1tqXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgJ3ZlbG9jaXR5JzpcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQudmVsb2NpdHkgPSBVdGlscy5jb252ZXJ0VmVsb2NpdHkocHJvcGVydGllc1tqXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gLy8gSWYgdGhpcyBub3RlIGV2ZW50IGhhcyBhbiBleHBsaWNpdCBzdGFydFRpY2sgdGhlbiB3ZSBuZWVkIHRvIHNldCBhc2lkZSBmb3Igbm93XG5cblxuICAgICAgICAgIGlmIChldmVudC5zdGFydFRpY2sgIT09IG51bGwpIHtcbiAgICAgICAgICAgIF90aGlzLmV4cGxpY2l0VGlja0V2ZW50cy5wdXNoKGV2ZW50KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gUHVzaCBlYWNoIG9uL29mZiBldmVudCB0byB0cmFjaydzIGV2ZW50IHN0YWNrXG4gICAgICAgICAgICBldmVudC5idWlsZERhdGEoKS5ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuZXZlbnRzLnB1c2goZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMuZXZlbnRzLnB1c2goZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBCdWlsZHMgaW50IGFycmF5IG9mIGFsbCBldmVudHMuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJidWlsZERhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYnVpbGREYXRhKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIC8vIFJlbW92ZSBleGlzdGluZyBlbmQgdHJhY2sgZXZlbnQgYW5kIGFkZCBvbmUuXG4gICAgICAvLyBUaGlzIG1ha2VzIHN1cmUgaXQncyBhdCB0aGUgdmVyeSBlbmQgb2YgdGhlIGV2ZW50IGxpc3QuXG4gICAgICB0aGlzLnJlbW92ZUV2ZW50c0J5VHlwZSgnZW5kLXRyYWNrJykuYWRkRXZlbnQobmV3IEVuZFRyYWNrRXZlbnQoKSk7IC8vIFJlc2V0XG5cbiAgICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICAgdGhpcy5zaXplID0gW107XG4gICAgICB0aGlzLnRpY2tQb2ludGVyID0gMDtcbiAgICAgIHZhciBwcmVjaXNpb25Mb3NzID0gMDtcbiAgICAgIHRoaXMuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50LCBldmVudEluZGV4KSB7XG4gICAgICAgIC8vIEJ1aWxkIGV2ZW50ICYgYWRkIHRvIHRvdGFsIHRpY2sgZHVyYXRpb25cbiAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTm90ZU9uRXZlbnQgfHwgZXZlbnQgaW5zdGFuY2VvZiBOb3RlT2ZmRXZlbnQpIHtcbiAgICAgICAgICB2YXIgYnVpbHQgPSBldmVudC5idWlsZERhdGEoX3RoaXMyLCBwcmVjaXNpb25Mb3NzKTtcbiAgICAgICAgICBwcmVjaXNpb25Mb3NzID0gVXRpbHMuZ2V0UHJlY2lzaW9uTG9zcyhldmVudC5kZWx0YVdpdGhQcmVjaXNpb25Db3JyZWN0aW9uIHx8IDApO1xuICAgICAgICAgIF90aGlzMi5kYXRhID0gX3RoaXMyLmRhdGEuY29uY2F0KGJ1aWx0LmRhdGEpO1xuICAgICAgICAgIF90aGlzMi50aWNrUG9pbnRlciA9IFV0aWxzLmdldFJvdW5kZWRJZkNsb3NlKGV2ZW50LnRpY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzMi5kYXRhID0gX3RoaXMyLmRhdGEuY29uY2F0KGV2ZW50LmRhdGEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMubWVyZ2VFeHBsaWNpdFRpY2tFdmVudHMoKTtcbiAgICAgIHRoaXMuc2l6ZSA9IFV0aWxzLm51bWJlclRvQnl0ZXModGhpcy5kYXRhLmxlbmd0aCwgNCk7IC8vIDQgYnl0ZXMgbG9uZ1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibWVyZ2VFeHBsaWNpdFRpY2tFdmVudHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWVyZ2VFeHBsaWNpdFRpY2tFdmVudHMoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgaWYgKCF0aGlzLmV4cGxpY2l0VGlja0V2ZW50cy5sZW5ndGgpIHJldHVybjsgLy8gRmlyc3Qgc29ydCBhc2MgbGlzdCBvZiBldmVudHMgYnkgc3RhcnRUaWNrXG5cbiAgICAgIHRoaXMuZXhwbGljaXRUaWNrRXZlbnRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEuc3RhcnRUaWNrIC0gYi5zdGFydFRpY2s7XG4gICAgICB9KTsgLy8gTm93IHRoaXMuZXhwbGljaXRUaWNrRXZlbnRzIGlzIGluIGNvcnJlY3Qgb3JkZXIsIGFuZCBzbyBpcyB0aGlzLmV2ZW50cyBuYXR1cmFsbHkuXG4gICAgICAvLyBGb3IgZWFjaCBleHBsaWNpdCB0aWNrIGV2ZW50LCBzcGxpY2UgaXQgaW50byB0aGUgbWFpbiBsaXN0IG9mIGV2ZW50cyBhbmRcbiAgICAgIC8vIGFkanVzdCB0aGUgZGVsdGEgb24gdGhlIGZvbGxvd2luZyBldmVudHMgc28gdGhleSBzdGlsbCBwbGF5IG5vcm1hbGx5LlxuXG4gICAgICB0aGlzLmV4cGxpY2l0VGlja0V2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChub3RlRXZlbnQpIHtcbiAgICAgICAgLy8gQ29udmVydCBOb3RlRXZlbnQgdG8gaXQncyByZXNwZWN0aXZlIE5vdGVPbi9Ob3RlT2ZmIGV2ZW50c1xuICAgICAgICAvLyBOb3RlIHRoYXQgYXMgd2Ugc3BsaWNlIGluIGV2ZW50cyB0aGUgZGVsdGEgZm9yIHRoZSBOb3RlT2ZmIG9uZXMgd2lsbFxuICAgICAgICAvLyBOZWVkIHRvIGNoYW5nZSBiYXNlZCBvbiB3aGF0IGNvbWVzIGJlZm9yZSB0aGVtIGFmdGVyIHRoZSBzcGxpY2UuXG4gICAgICAgIG5vdGVFdmVudC5idWlsZERhdGEoKS5ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiBlLmJ1aWxkRGF0YShfdGhpczMpO1xuICAgICAgICB9KTsgLy8gTWVyZ2UgZWFjaCBldmVudCBpbmRpdnVhbGx5IGludG8gdGhpcyB0cmFjaydzIGV2ZW50IGxpc3QuXG5cbiAgICAgICAgbm90ZUV2ZW50LmV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczMubWVyZ2VTaW5nbGVFdmVudChldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7IC8vIEhhY2t5IHdheSB0byByZWJ1aWxkIHRyYWNrIHdpdGggbmV3bHkgc3BsaWNlZCBldmVudHMuICBOZWVkIGJldHRlciBzb2x1dGlvbi5cblxuICAgICAgdGhpcy5leHBsaWNpdFRpY2tFdmVudHMgPSBbXTtcbiAgICAgIHRoaXMuYnVpbGREYXRhKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE1lcmdlcyBhbm90aGVyIHRyYWNrJ3MgZXZlbnRzIHdpdGggdGhpcyB0cmFjay5cbiAgICAgKiBAcGFyYW0ge1RyYWNrfSB0cmFja1xuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibWVyZ2VUcmFja1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtZXJnZVRyYWNrKHRyYWNrKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgLy8gRmlyc3QgYnVpbGQgdGhpcyB0cmFjayB0byBwb3B1bGF0ZSBlYWNoIGV2ZW50J3MgdGljayBwcm9wZXJ0eVxuICAgICAgdGhpcy5idWlsZERhdGEoKTsgLy8gVGhlbiBidWlsZCB0cmFjayB0byBiZSBtZXJnZWQgc28gdGhhdCB0aWNrIHByb3BlcnR5IGlzIHBvcHVsYXRlZCBvbiBhbGwgZXZlbnRzICYgbWVyZ2UgZWFjaCBldmVudC5cblxuICAgICAgdHJhY2suYnVpbGREYXRhKCkuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfdGhpczQubWVyZ2VTaW5nbGVFdmVudChldmVudCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTWVyZ2VzIGEgc2luZ2xlIGV2ZW50IGludG8gdGhpcyB0cmFjaydzIGxpc3Qgb2YgZXZlbnRzIGJhc2VkIG9uIGV2ZW50LnRpY2sgcHJvcGVydHkuXG4gICAgICogQHBhcmFtIHtOb3RlT25FdmVudHxOb3RlT2ZmRXZlbnR9IC0gZXZlbnRcbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm1lcmdlU2luZ2xlRXZlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWVyZ2VTaW5nbGVFdmVudChldmVudCkge1xuICAgICAgLy8gRmluZCBpbmRleCBvZiBleGlzdGluZyBldmVudCB3ZSBuZWVkIHRvIGZvbGxvdyB3aXRoXG4gICAgICB2YXIgbGFzdEV2ZW50SW5kZXggPSAwO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmV2ZW50c1tpXS50aWNrID4gZXZlbnQudGljaykgYnJlYWs7XG4gICAgICAgIGxhc3RFdmVudEluZGV4ID0gaTtcbiAgICAgIH1cblxuICAgICAgdmFyIHNwbGljZWRFdmVudEluZGV4ID0gbGFzdEV2ZW50SW5kZXggKyAxOyAvLyBOZWVkIHRvIGFkanVzdCB0aGUgZGVsdGEgb2YgdGhpcyBldmVudCB0byBlbnN1cmUgaXQgZmFsbHMgb24gdGhlIGNvcnJlY3QgdGljay5cblxuICAgICAgZXZlbnQuZGVsdGEgPSBldmVudC50aWNrIC0gdGhpcy5ldmVudHNbbGFzdEV2ZW50SW5kZXhdLnRpY2s7IC8vIFNwbGljZSB0aGlzIGV2ZW50IGF0IGxhc3RFdmVudEluZGV4ICsgMVxuXG4gICAgICB0aGlzLmV2ZW50cy5zcGxpY2Uoc3BsaWNlZEV2ZW50SW5kZXgsIDAsIGV2ZW50KTsgLy8gTm93IGFkanVzdCBkZWx0YSBvZiBhbGwgZm9sbG93aW5nIGV2ZW50c1xuXG4gICAgICBmb3IgKHZhciBpID0gc3BsaWNlZEV2ZW50SW5kZXggKyAxOyBpIDwgdGhpcy5ldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gU2luY2UgZWFjaCBleGlzdGluZyBldmVudCBzaG91bGQgaGF2ZSBhIHRpY2sgdmFsdWUgYXQgdGhpcyBwb2ludCB3ZSBqdXN0IG5lZWQgdG9cbiAgICAgICAgLy8gYWRqdXN0IGRlbHRhIHRvIHRoYXQgdGhlIGV2ZW50IHN0aWxsIGZhbGxzIG9uIHRoZSBjb3JyZWN0IHRpY2suXG4gICAgICAgIHRoaXMuZXZlbnRzW2ldLmRlbHRhID0gdGhpcy5ldmVudHNbaV0udGljayAtIHRoaXMuZXZlbnRzW2kgLSAxXS50aWNrO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCBldmVudHMgbWF0Y2hpbmcgc3BlY2lmaWVkIHR5cGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZSAtIEV2ZW50IHR5cGVcbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZUV2ZW50c0J5VHlwZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVFdmVudHNCeVR5cGUoZXZlbnRUeXBlKSB7XG4gICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgdGhpcy5ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQsIGluZGV4KSB7XG4gICAgICAgIGlmIChldmVudC50eXBlID09PSBldmVudFR5cGUpIHtcbiAgICAgICAgICBfdGhpczUuZXZlbnRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGVtcG8gb2YgdGhlIE1JREkgZmlsZS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYnBtIC0gVGVtcG8gaW4gYmVhdHMgcGVyIG1pbnV0ZS5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNldFRlbXBvXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFRlbXBvKGJwbSkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IFRlbXBvRXZlbnQoYnBtKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGltZSBzaWduYXR1cmUuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG51bWVyYXRvciAtIFRvcCBudW1iZXIgb2YgdGhlIHRpbWUgc2lnbmF0dXJlLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZW5vbWluYXRvciAtIEJvdHRvbSBudW1iZXIgb2YgdGhlIHRpbWUgc2lnbmF0dXJlLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaWRpY2xvY2tzcGVydGljayAtIERlZmF1bHRzIHRvIDI0LlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBub3Rlc3Blcm1pZGljbG9jayAtIERlZmF1bHRzIHRvIDguXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzZXRUaW1lU2lnbmF0dXJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFRpbWVTaWduYXR1cmUobnVtZXJhdG9yLCBkZW5vbWluYXRvciwgbWlkaWNsb2Nrc3BlcnRpY2ssIG5vdGVzcGVybWlkaWNsb2NrKSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgVGltZVNpZ25hdHVyZUV2ZW50KG51bWVyYXRvciwgZGVub21pbmF0b3IsIG1pZGljbG9ja3NwZXJ0aWNrLCBub3Rlc3Blcm1pZGljbG9jaykpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIGtleSBzaWduYXR1cmUuXG4gICAgICogQHBhcmFtIHsqfSBzZiAtXG4gICAgICogQHBhcmFtIHsqfSBtaSAtXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzZXRLZXlTaWduYXR1cmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0S2V5U2lnbmF0dXJlKHNmLCBtaSkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IEtleVNpZ25hdHVyZUV2ZW50KHNmLCBtaSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIHRleHQgdG8gTUlESSBmaWxlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCB0byBhZGQuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhZGRUZXh0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZFRleHQodGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IFRleHRFdmVudCh0ZXh0KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgY29weXJpZ2h0IHRvIE1JREkgZmlsZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRleHQgb2YgY29weXJpZ2h0IGxpbmUuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhZGRDb3B5cmlnaHRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkQ29weXJpZ2h0KHRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBDb3B5cmlnaHRFdmVudCh0ZXh0KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgU2VxdWVuY2UvVHJhY2sgTmFtZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRleHQgb2YgdHJhY2sgbmFtZS5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFkZFRyYWNrTmFtZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRUcmFja05hbWUodGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IFRyYWNrTmFtZUV2ZW50KHRleHQpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyBpbnN0cnVtZW50IG5hbWUgb2YgdHJhY2suXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBOYW1lIG9mIGluc3RydW1lbnQuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhZGRJbnN0cnVtZW50TmFtZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRJbnN0cnVtZW50TmFtZSh0ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgSW5zdHJ1bWVudE5hbWVFdmVudCh0ZXh0KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgbWFya2VyIHRvIE1JREkgZmlsZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIE1hcmtlciB0ZXh0LlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkTWFya2VyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZE1hcmtlcih0ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgTWFya2VyRXZlbnQodGV4dCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGN1ZSBwb2ludCB0byBNSURJIGZpbGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUZXh0IG9mIGN1ZSBwb2ludC5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFkZEN1ZVBvaW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEN1ZVBvaW50KHRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBDdWVQb2ludEV2ZW50KHRleHQpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBseXJpYyB0byBNSURJIGZpbGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBMeXJpYyB0ZXh0IHRvIGFkZC5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFkZEx5cmljXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEx5cmljKHRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBMeXJpY0V2ZW50KHRleHQpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hhbm5lbCBtb2RlIG1lc3NhZ2VzXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJwb2x5TW9kZU9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBvbHlNb2RlT24oKSB7XG4gICAgICB2YXIgZXZlbnQgPSBuZXcgTm90ZU9uRXZlbnQoe1xuICAgICAgICBkYXRhOiBbMHgwMCwgMHhCMCwgMHg3RSwgMHgwMF1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQoZXZlbnQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIGEgcGl0Y2ggYmVuZC5cbiAgICAgKiBAcGFyYW0ge2Zsb2F0fSBiZW5kIC0gQmVuZCB2YWx1ZSByYW5naW5nIFstMSwxXSwgemVybyBtZWFuaW5nIG5vIGJlbmQuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzZXRQaXRjaEJlbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UGl0Y2hCZW5kKGJlbmQpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBQaXRjaEJlbmRFdmVudCh7XG4gICAgICAgIGJlbmQ6IGJlbmRcbiAgICAgIH0pKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIGNvbnRyb2xsZXIgY2hhbmdlIGV2ZW50XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciAtIENvbnRyb2wgbnVtYmVyLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSAtIENvbnRyb2wgdmFsdWUuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjb250cm9sbGVyQ2hhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbnRyb2xsZXJDaGFuZ2UobnVtYmVyLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IENvbnRyb2xsZXJDaGFuZ2VFdmVudCh7XG4gICAgICAgIGNvbnRyb2xsZXJOdW1iZXI6IG51bWJlcixcbiAgICAgICAgY29udHJvbGxlclZhbHVlOiB2YWx1ZVxuICAgICAgfSkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBUcmFjaztcbn0oKTtcblxudmFyIFZleEZsb3cgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBWZXhGbG93KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBWZXhGbG93KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhWZXhGbG93LCBbe1xuICAgIGtleTogXCJ0cmFja0Zyb21Wb2ljZVwiLFxuICAgIHZhbHVlOlxuICAgIC8qKlxuICAgICAqIFN1cHBvcnQgZm9yIGNvbnZlcnRpbmcgVmV4RmxvdyB2b2ljZSBpbnRvIE1pZGlXcml0ZXJKUyB0cmFja1xuICAgICAqIEByZXR1cm4gTWlkaVdyaXRlci5UcmFjayBvYmplY3RcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB0cmFja0Zyb21Wb2ljZSh2b2ljZSkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHtcbiAgICAgICAgYWRkUmVuZGVyZWRBY2NpZGVudGFsczogZmFsc2VcbiAgICAgIH07XG4gICAgICB2YXIgdHJhY2sgPSBuZXcgVHJhY2soKTtcbiAgICAgIHZhciB3YWl0ID0gW107XG4gICAgICB2b2ljZS50aWNrYWJsZXMuZm9yRWFjaChmdW5jdGlvbiAodGlja2FibGUpIHtcbiAgICAgICAgaWYgKHRpY2thYmxlLm5vdGVUeXBlID09PSAnbicpIHtcbiAgICAgICAgICB0cmFjay5hZGRFdmVudChuZXcgTm90ZUV2ZW50KHtcbiAgICAgICAgICAgIHBpdGNoOiB0aWNrYWJsZS5rZXlzLm1hcChmdW5jdGlvbiAocGl0Y2gsIGluZGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpcy5jb252ZXJ0UGl0Y2gocGl0Y2gsIGluZGV4LCB0aWNrYWJsZSwgb3B0aW9ucy5hZGRSZW5kZXJlZEFjY2lkZW50YWxzKTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgZHVyYXRpb246IF90aGlzLmNvbnZlcnREdXJhdGlvbih0aWNrYWJsZSksXG4gICAgICAgICAgICB3YWl0OiB3YWl0XG4gICAgICAgICAgfSkpOyAvLyByZXNldCB3YWl0XG5cbiAgICAgICAgICB3YWl0ID0gW107XG4gICAgICAgIH0gZWxzZSBpZiAodGlja2FibGUubm90ZVR5cGUgPT09ICdyJykge1xuICAgICAgICAgIC8vIG1vdmUgb24gdG8gdGhlIG5leHQgdGlja2FibGUgYW5kIGFkZCB0aGlzIHRvIHRoZSBzdGFja1xuICAgICAgICAgIC8vIG9mIHRoZSBgd2FpdGAgcHJvcGVydHkgZm9yIHRoZSBuZXh0IG5vdGUgZXZlbnRcbiAgICAgICAgICB3YWl0LnB1c2goX3RoaXMuY29udmVydER1cmF0aW9uKHRpY2thYmxlKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9KTsgLy8gVGhlcmUgbWF5IGJlIG91dHN0YW5kaW5nIHJlc3RzIGF0IHRoZSBlbmQgb2YgdGhlIHRyYWNrLFxuICAgICAgLy8gcGFkIHdpdGggYSBnaG9zdCBub3RlICh6ZXJvIGR1cmF0aW9uIGFuZCB2ZWxvY2l0eSksIGp1c3QgdG8gY2FwdHVyZSB0aGUgd2FpdC5cblxuICAgICAgaWYgKHdhaXQubGVuZ3RoID4gMCkge1xuICAgICAgICB0cmFjay5hZGRFdmVudChuZXcgTm90ZUV2ZW50KHtcbiAgICAgICAgICBwaXRjaDogJ1tjNF0nLFxuICAgICAgICAgIGR1cmF0aW9uOiAnMCcsXG4gICAgICAgICAgd2FpdDogd2FpdCxcbiAgICAgICAgICB2ZWxvY2l0eTogJzAnXG4gICAgICAgIH0pKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRyYWNrO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBWZXhGbG93IHBpdGNoIHN5bnRheCB0byBNaWRpV3JpdGVySlMgc3ludGF4XG4gICAgICogQHBhcmFtIHBpdGNoIHN0cmluZ1xuICAgICAqIEBwYXJhbSBpbmRleCBwaXRjaCBpbmRleFxuICAgICAqIEBwYXJhbSBub3RlIHN0cnVjdCBmcm9tIFZleGZsb3dcbiAgICAgKiBAcGFyYW0gYWRkUmVuZGVyZWRBY2NpZGVudGFscyBhZGRzIFZleGZsb3cgcmVuZGVyZWQgYWNjaWRlbnRhbHNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNvbnZlcnRQaXRjaFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb252ZXJ0UGl0Y2gocGl0Y2gsIGluZGV4LCBub3RlKSB7XG4gICAgICB2YXIgYWRkUmVuZGVyZWRBY2NpZGVudGFscyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogZmFsc2U7XG4gICAgICAvLyBTcGxpdHMgbm90ZSBuYW1lIGZyb20gb2N0YXZlXG4gICAgICB2YXIgcGl0Y2hQYXJ0cyA9IHBpdGNoLnNwbGl0KCcvJyk7IC8vIFJldHJpZXZlcyBhY2NpZGVudGFscyBmcm9tIHBpdGNoXG4gICAgICAvLyBSZW1vdmVzIG5hdHVyYWwgYWNjaWRlbnRhbHMgc2luY2UgdGhleSBhcmUgbm90IGFjY2VwdGVkIGluIFRvbmFsIE1pZGlcblxuICAgICAgdmFyIGFjY2lkZW50YWxzID0gcGl0Y2hQYXJ0c1swXS5zdWJzdHJpbmcoMSkucmVwbGFjZSgnbicsICcnKTtcblxuICAgICAgaWYgKGFkZFJlbmRlcmVkQWNjaWRlbnRhbHMpIHtcbiAgICAgICAgdmFyIF9ub3RlJGdldEFjY2lkZW50YWxzO1xuXG4gICAgICAgIChfbm90ZSRnZXRBY2NpZGVudGFscyA9IG5vdGUuZ2V0QWNjaWRlbnRhbHMoKSkgPT09IG51bGwgfHwgX25vdGUkZ2V0QWNjaWRlbnRhbHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9ub3RlJGdldEFjY2lkZW50YWxzLmZvckVhY2goZnVuY3Rpb24gKGFjY2lkZW50YWwpIHtcbiAgICAgICAgICBpZiAoYWNjaWRlbnRhbC5pbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChhY2NpZGVudGFsLnR5cGUgPT09ICduJykge1xuICAgICAgICAgICAgICBhY2NpZGVudGFscyA9ICcnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYWNjaWRlbnRhbHMgKz0gYWNjaWRlbnRhbC50eXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwaXRjaFBhcnRzWzBdWzBdICsgYWNjaWRlbnRhbHMgKyBwaXRjaFBhcnRzWzFdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBWZXhGbG93IGR1cmF0aW9uIHN5bnRheCB0byBNaWRpV3JpdGVySlMgc3ludGF4XG4gICAgICogQHBhcmFtIG5vdGUgc3RydWN0IGZyb20gVmV4Rmxvd1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY29udmVydER1cmF0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbnZlcnREdXJhdGlvbihub3RlKSB7XG4gICAgICByZXR1cm4gJ2QnLnJlcGVhdChub3RlLmRvdHMpICsgdGhpcy5jb252ZXJ0QmFzZUR1cmF0aW9uKG5vdGUuZHVyYXRpb24pICsgKG5vdGUudHVwbGV0ID8gJ3QnICsgbm90ZS50dXBsZXQubnVtX25vdGVzIDogJycpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBWZXhGbG93IGJhc2UgZHVyYXRpb24gc3ludGF4IHRvIE1pZGlXcml0ZXJKUyBzeW50YXhcbiAgICAgKiBAcGFyYW0gZHVyYXRpb24gVmV4ZmxvdyBkdXJhdGlvblxuICAgICAqIEByZXR1cm5zIE1pZGlXcml0ZXJKUyBkdXJhdGlvblxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY29udmVydEJhc2VEdXJhdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb252ZXJ0QmFzZUR1cmF0aW9uKGR1cmF0aW9uKSB7XG4gICAgICBzd2l0Y2ggKGR1cmF0aW9uKSB7XG4gICAgICAgIGNhc2UgJ3cnOlxuICAgICAgICAgIHJldHVybiAnMSc7XG5cbiAgICAgICAgY2FzZSAnaCc6XG4gICAgICAgICAgcmV0dXJuICcyJztcblxuICAgICAgICBjYXNlICdxJzpcbiAgICAgICAgICByZXR1cm4gJzQnO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIGR1cmF0aW9uO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBWZXhGbG93O1xufSgpO1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIGhlYWRlciBjaHVuayBzZWN0aW9uIG9mIGEgTUlESSBmaWxlLlxuICogQHBhcmFtIHtudW1iZXJ9IG51bWJlck9mVHJhY2tzIC0gTnVtYmVyIG9mIHRyYWNrc1xuICogQHJldHVybiB7SGVhZGVyQ2h1bmt9XG4gKi9cblxudmFyIEhlYWRlckNodW5rID0gZnVuY3Rpb24gSGVhZGVyQ2h1bmsobnVtYmVyT2ZUcmFja3MpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhlYWRlckNodW5rKTtcblxuICB0aGlzLnR5cGUgPSBDb25zdGFudHMuSEVBREVSX0NIVU5LX1RZUEU7XG4gIHZhciB0cmFja1R5cGUgPSBudW1iZXJPZlRyYWNrcyA+IDEgPyBDb25zdGFudHMuSEVBREVSX0NIVU5LX0ZPUk1BVDEgOiBDb25zdGFudHMuSEVBREVSX0NIVU5LX0ZPUk1BVDA7XG4gIHRoaXMuZGF0YSA9IHRyYWNrVHlwZS5jb25jYXQoVXRpbHMubnVtYmVyVG9CeXRlcyhudW1iZXJPZlRyYWNrcywgMiksIC8vIHR3byBieXRlcyBsb25nLFxuICBDb25zdGFudHMuSEVBREVSX0NIVU5LX0RJVklTSU9OKTtcbiAgdGhpcy5zaXplID0gWzAsIDAsIDAsIHRoaXMuZGF0YS5sZW5ndGhdO1xufTtcblxuLyoqXG4gKiBPYmplY3QgdGhhdCBwdXRzIHRvZ2V0aGVyIHRyYWNrcyBhbmQgcHJvdmlkZXMgbWV0aG9kcyBmb3IgZmlsZSBvdXRwdXQuXG4gKiBAcGFyYW0ge2FycmF5fFRyYWNrfSB0cmFja3MgLSBBIHNpbmdsZSB7VHJhY2t9IG9iamVjdCBvciBhbiBhcnJheSBvZiB7VHJhY2t9IG9iamVjdHMuXG4gKiBAcmV0dXJuIHtXcml0ZXJ9XG4gKi9cblxudmFyIFdyaXRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFdyaXRlcih0cmFja3MpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFdyaXRlcik7XG5cbiAgICAvLyBFbnN1cmUgdHJhY2sgaXMgYW4gYXJyYXlcbiAgICB0cmFja3MgPSBVdGlscy50b0FycmF5KHRyYWNrcyk7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgdGhpcy5kYXRhLnB1c2gobmV3IEhlYWRlckNodW5rKHRyYWNrcy5sZW5ndGgpKTsgLy8gRm9yIGVhY2ggdHJhY2sgYWRkIGZpbmFsIGVuZCBvZiB0cmFjayBldmVudCBhbmQgYnVpbGQgZGF0YVxuXG4gICAgdHJhY2tzLmZvckVhY2goZnVuY3Rpb24gKHRyYWNrLCBpKSB7XG4gICAgICBfdGhpcy5kYXRhLnB1c2godHJhY2suYnVpbGREYXRhKCkpO1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBCdWlsZHMgdGhlIGZpbGUgaW50byBhIFVpbnQ4QXJyYXlcbiAgICogQHJldHVybiB7VWludDhBcnJheX1cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoV3JpdGVyLCBbe1xuICAgIGtleTogXCJidWlsZEZpbGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYnVpbGRGaWxlKCkge1xuICAgICAgdmFyIGJ1aWxkID0gW107IC8vIERhdGEgY29uc2lzdHMgb2YgY2h1bmtzIHdoaWNoIGNvbnNpc3RzIG9mIGRhdGFcblxuICAgICAgdGhpcy5kYXRhLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGJ1aWxkID0gYnVpbGQuY29uY2F0KGQudHlwZSwgZC5zaXplLCBkLmRhdGEpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYnVpbGQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IGZpbGUgYnVmZmVyIHRvIGEgYmFzZTY0IHN0cmluZy4gIERpZmZlcmVudCBtZXRob2RzIGRlcGVuZGluZyBvbiBpZiBicm93c2VyIG9yIG5vZGUuXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYmFzZTY0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJhc2U2NCgpIHtcbiAgICAgIGlmICh0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGJ0b2EoU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCB0aGlzLmJ1aWxkRmlsZSgpKSk7XG4gICAgICByZXR1cm4gQnVmZmVyLmZyb20odGhpcy5idWlsZEZpbGUoKSkudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGRhdGEgVVJJLlxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRhdGFVcmlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGF0YVVyaSgpIHtcbiAgICAgIHJldHVybiAnZGF0YTphdWRpby9taWRpO2Jhc2U2NCwnICsgdGhpcy5iYXNlNjQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogT3V0cHV0IHRvIHN0ZG91dFxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInN0ZG91dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdGRvdXQoKSB7XG4gICAgICByZXR1cm4gcHJvY2Vzcy5zdGRvdXQud3JpdGUobmV3IEJ1ZmZlcih0aGlzLmJ1aWxkRmlsZSgpKSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFdyaXRlcjtcbn0oKTtcblxudmFyIG1haW4gPSB7XG4gIENvbnN0YW50czogQ29uc3RhbnRzLFxuICBOb3RlT25FdmVudDogTm90ZU9uRXZlbnQsXG4gIE5vdGVPZmZFdmVudDogTm90ZU9mZkV2ZW50LFxuICBOb3RlRXZlbnQ6IE5vdGVFdmVudCxcbiAgUGl0Y2hCZW5kRXZlbnQ6IFBpdGNoQmVuZEV2ZW50LFxuICBQcm9ncmFtQ2hhbmdlRXZlbnQ6IFByb2dyYW1DaGFuZ2VFdmVudCxcbiAgVHJhY2s6IFRyYWNrLFxuICBVdGlsczogVXRpbHMsXG4gIFZleEZsb3c6IFZleEZsb3csXG4gIFdyaXRlcjogV3JpdGVyXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1haW47XG4iLCAidmFyIE1pZGkgPSB7fTtcblxuKGZ1bmN0aW9uKGV4cG9ydGVkKSB7XG5cblx0dmFyIERFRkFVTFRfVk9MVU1FICAgPSBleHBvcnRlZC5ERUZBVUxUX1ZPTFVNRSAgID0gOTA7XG5cdHZhciBERUZBVUxUX0RVUkFUSU9OID0gZXhwb3J0ZWQuREVGQVVMVF9EVVJBVElPTiA9IDEyODtcblx0dmFyIERFRkFVTFRfQ0hBTk5FTCAgPSBleHBvcnRlZC5ERUZBVUxUX0NIQU5ORUwgID0gMDtcblxuXHQvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0ICogVXRpbGl0eSBmdW5jdGlvbnNcblx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG5cdHZhciBVdGlsID0ge1xuXG5cdFx0bWlkaV9sZXR0ZXJfcGl0Y2hlczogeyBhOjIxLCBiOjIzLCBjOjEyLCBkOjE0LCBlOjE2LCBmOjE3LCBnOjE5IH0sXG5cblx0XHQvKipcblx0XHQgKiBDb252ZXJ0IGEgc3ltYm9saWMgbm90ZSBuYW1lIChlLmcuIFwiYzRcIikgdG8gYSBudW1lcmljIE1JREkgcGl0Y2ggKGUuZy5cblx0XHQgKiA2MCwgbWlkZGxlIEMpLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IG4gLSBUaGUgc3ltYm9saWMgbm90ZSBuYW1lIHRvIHBhcnNlLlxuXHRcdCAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBNSURJIHBpdGNoIHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIHN5bWJvbGljIG5vdGVcblx0XHQgKiBuYW1lLlxuXHRcdCAqL1xuXHRcdG1pZGlQaXRjaEZyb21Ob3RlOiBmdW5jdGlvbihuKSB7XG5cdFx0XHR2YXIgbWF0Y2hlcyA9IC8oW2EtZ10pKCMrfGIrKT8oWzAtOV0rKSQvaS5leGVjKG4pO1xuXHRcdFx0dmFyIG5vdGUgPSBtYXRjaGVzWzFdLnRvTG93ZXJDYXNlKCksIGFjY2lkZW50YWwgPSBtYXRjaGVzWzJdIHx8ICcnLCBvY3RhdmUgPSBwYXJzZUludChtYXRjaGVzWzNdLCAxMCk7XG5cdFx0XHRyZXR1cm4gKDEyICogb2N0YXZlKSArIFV0aWwubWlkaV9sZXR0ZXJfcGl0Y2hlc1tub3RlXSArIChhY2NpZGVudGFsLnN1YnN0cigwLDEpPT0nIyc/MTotMSkgKiBhY2NpZGVudGFsLmxlbmd0aDtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogRW5zdXJlIHRoYXQgdGhlIGdpdmVuIGFyZ3VtZW50IGlzIGNvbnZlcnRlZCB0byBhIE1JREkgcGl0Y2guIE5vdGUgdGhhdFxuXHRcdCAqIGl0IG1heSBhbHJlYWR5IGJlIG9uZSAoaW5jbHVkaW5nIGEgcHVyZWx5IG51bWVyaWMgc3RyaW5nKS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gcCAtIFRoZSBwaXRjaCB0byBjb252ZXJ0LlxuXHRcdCAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSByZXN1bHRpbmcgbnVtZXJpYyBNSURJIHBpdGNoLlxuXHRcdCAqL1xuXHRcdGVuc3VyZU1pZGlQaXRjaDogZnVuY3Rpb24ocCkge1xuXHRcdFx0aWYgKHR5cGVvZiBwID09ICdudW1iZXInIHx8ICEvW14wLTldLy50ZXN0KHApKSB7XG5cdFx0XHRcdC8vIG51bWVyaWMgcGl0Y2hcblx0XHRcdFx0cmV0dXJuIHBhcnNlSW50KHAsIDEwKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIGFzc3VtZSBpdCdzIGEgbm90ZSBuYW1lXG5cdFx0XHRcdHJldHVybiBVdGlsLm1pZGlQaXRjaEZyb21Ob3RlKHApO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRtaWRpX3BpdGNoZXNfbGV0dGVyOiB7ICcxMic6J2MnLCAnMTMnOidjIycsICcxNCc6J2QnLCAnMTUnOidkIycsICcxNic6J2UnLCAnMTcnOidmJywgJzE4JzonZiMnLCAnMTknOidnJywgJzIwJzonZyMnLCAnMjEnOidhJywgJzIyJzonYSMnLCAnMjMnOidiJyB9LFxuXHRcdG1pZGlfZmxhdHRlbmVkX25vdGVzOiB7ICdhIyc6J2JiJywgJ2MjJzonZGInLCAnZCMnOidlYicsICdmIyc6J2diJywgJ2cjJzonYWInIH0sXG5cblx0XHQvKipcblx0XHQgKiBDb252ZXJ0IGEgbnVtZXJpYyBNSURJIHBpdGNoIHZhbHVlIChlLmcuIDYwKSB0byBhIHN5bWJvbGljIG5vdGUgbmFtZVxuXHRcdCAqIChlLmcuIFwiYzRcIikuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gbiAtIFRoZSBudW1lcmljIE1JREkgcGl0Y2ggdmFsdWUgdG8gY29udmVydC5cblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXR1cm5GbGF0dGVuZWQ9ZmFsc2VdIC0gV2hldGhlciB0byBwcmVmZXIgZmxhdHRlbmVkXG5cdFx0ICogbm90ZXMgdG8gc2hhcnBlbmVkIG9uZXMuIE9wdGlvbmFsLCBkZWZhdWx0IGZhbHNlLlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSByZXN1bHRpbmcgc3ltYm9saWMgbm90ZSBuYW1lLlxuXHRcdCAqL1xuXHRcdG5vdGVGcm9tTWlkaVBpdGNoOiBmdW5jdGlvbihuLCByZXR1cm5GbGF0dGVuZWQpIHtcblx0XHRcdHZhciBvY3RhdmUgPSAwLCBub3RlTnVtID0gbiwgbm90ZU5hbWUsIHJldHVybkZsYXR0ZW5lZCA9IHJldHVybkZsYXR0ZW5lZCB8fCBmYWxzZTtcblx0XHRcdGlmIChuID4gMjMpIHtcblx0XHRcdFx0Ly8gbm90ZU51bSBpcyBvbiBvY3RhdmUgMSBvciBtb3JlXG5cdFx0XHRcdG9jdGF2ZSA9IE1hdGguZmxvb3Iobi8xMikgLSAxO1xuXHRcdFx0XHQvLyBzdWJ0cmFjdCBudW1iZXIgb2Ygb2N0YXZlcyBmcm9tIG5vdGVOdW1cblx0XHRcdFx0bm90ZU51bSA9IG4gLSBvY3RhdmUgKiAxMjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gZ2V0IG5vdGUgbmFtZSAoYyMsIGQsIGYjIGV0Yylcblx0XHRcdG5vdGVOYW1lID0gVXRpbC5taWRpX3BpdGNoZXNfbGV0dGVyW25vdGVOdW1dO1xuXHRcdFx0Ly8gVXNlIGZsYXR0ZW5lZCBub3RlcyBpZiByZXF1ZXN0ZWQgKGUuZy4gZiMgc2hvdWxkIGJlIG91dHB1dCBhcyBnYilcblx0XHRcdGlmIChyZXR1cm5GbGF0dGVuZWQgJiYgbm90ZU5hbWUuaW5kZXhPZignIycpID4gMCkge1xuXHRcdFx0XHRub3RlTmFtZSA9IFV0aWwubWlkaV9mbGF0dGVuZWRfbm90ZXNbbm90ZU5hbWVdO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG5vdGVOYW1lICsgb2N0YXZlO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBDb252ZXJ0IGJlYXRzIHBlciBtaW51dGUgKEJQTSkgdG8gbWljcm9zZWNvbmRzIHBlciBxdWFydGVyIG5vdGUgKE1QUU4pLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IGJwbSAtIEEgbnVtYmVyIGluIGJlYXRzIHBlciBtaW51dGUuXG5cdFx0ICogQHJldHVybnMge251bWJlcn0gVGhlIG51bWJlciBvZiBtaWNyb3NlY29uZHMgcGVyIHF1YXJ0ZXIgbm90ZS5cblx0XHQgKi9cblx0XHRtcHFuRnJvbUJwbTogZnVuY3Rpb24oYnBtKSB7XG5cdFx0XHR2YXIgbXBxbiA9IE1hdGguZmxvb3IoNjAwMDAwMDAgLyBicG0pO1xuXHRcdFx0dmFyIHJldD1bXTtcblx0XHRcdGRvIHtcblx0XHRcdFx0cmV0LnVuc2hpZnQobXBxbiAmIDB4RkYpO1xuXHRcdFx0XHRtcHFuID4+PSA4O1xuXHRcdFx0fSB3aGlsZSAobXBxbik7XG5cdFx0XHR3aGlsZSAocmV0Lmxlbmd0aCA8IDMpIHtcblx0XHRcdFx0cmV0LnB1c2goMCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBDb252ZXJ0IG1pY3Jvc2Vjb25kcyBwZXIgcXVhcnRlciBub3RlIChNUFFOKSB0byBiZWF0cyBwZXIgbWludXRlIChCUE0pLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IG1wcW4gLSBUaGUgbnVtYmVyIG9mIG1pY3Jvc2Vjb25kcyBwZXIgcXVhcnRlciBub3RlLlxuXHRcdCAqIEByZXR1cm5zIHtudW1iZXJ9IEEgbnVtYmVyIGluIGJlYXRzIHBlciBtaW51dGUuXG5cdFx0ICovXG5cdFx0YnBtRnJvbU1wcW46IGZ1bmN0aW9uKG1wcW4pIHtcblx0XHRcdHZhciBtID0gbXBxbjtcblx0XHRcdGlmICh0eXBlb2YgbXBxblswXSAhPSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRtID0gMDtcblx0XHRcdFx0Zm9yICh2YXIgaT0wLCBsPW1wcW4ubGVuZ3RoLTE7IGwgPj0gMDsgKytpLCAtLWwpIHtcblx0XHRcdFx0XHRtIHw9IG1wcW5baV0gPDwgbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIE1hdGguZmxvb3IoNjAwMDAwMDAgLyBtcHFuKTtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogQ29udmVydHMgYW4gYXJyYXkgb2YgYnl0ZXMgdG8gYSBzdHJpbmcgb2YgaGV4YWRlY2ltYWwgY2hhcmFjdGVycy4gUHJlcGFyZXNcblx0XHQgKiBpdCB0byBiZSBjb252ZXJ0ZWQgaW50byBhIGJhc2U2NCBzdHJpbmcuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0FycmF5fSBieXRlQXJyYXkgLSBBcnJheSBvZiBieXRlcyB0byBiZSBjb252ZXJ0ZWQuXG5cdFx0ICogQHJldHVybnMge3N0cmluZ30gSGV4YWRlY2ltYWwgc3RyaW5nLCBlLmcuIFwiMDk3QjhBXCIuXG5cdFx0ICovXG5cdFx0Y29kZXMyU3RyOiBmdW5jdGlvbihieXRlQXJyYXkpIHtcblx0XHRcdHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIGJ5dGVBcnJheSk7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIENvbnZlcnRzIGEgc3RyaW5nIG9mIGhleGFkZWNpbWFsIHZhbHVlcyB0byBhbiBhcnJheSBvZiBieXRlcy4gSXQgY2FuIGFsc29cblx0XHQgKiBhZGQgcmVtYWluaW5nIFwiMFwiIG5pYmJsZXMgaW4gb3JkZXIgdG8gaGF2ZSBlbm91Z2ggYnl0ZXMgaW4gdGhlIGFycmF5IGFzIHRoZVxuXHRcdCAqIGBmaW5hbEJ5dGVzYCBwYXJhbWV0ZXIuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gc3RyaW5nIG9mIGhleGFkZWNpbWFsIHZhbHVlcyBlLmcuIFwiMDk3QjhBXCJcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gW2ZpbmFsQnl0ZXNdIC0gT3B0aW9uYWwuIFRoZSBkZXNpcmVkIG51bWJlciBvZiBieXRlc1xuXHRcdCAqIChub3QgbmliYmxlcykgdGhhdCB0aGUgcmV0dXJuZWQgYXJyYXkgc2hvdWxkIGNvbnRhaW4uXG5cdFx0ICogQHJldHVybnMge0FycmF5fSBBbiBhcnJheSBvZiBuaWJibGVzLlxuXHRcdCAqL1xuXHRcdHN0cjJCeXRlczogZnVuY3Rpb24gKHN0ciwgZmluYWxCeXRlcykge1xuXHRcdFx0aWYgKGZpbmFsQnl0ZXMpIHtcblx0XHRcdFx0d2hpbGUgKChzdHIubGVuZ3RoIC8gMikgPCBmaW5hbEJ5dGVzKSB7IHN0ciA9IFwiMFwiICsgc3RyOyB9XG5cdFx0XHR9XG5cblx0XHRcdHZhciBieXRlcyA9IFtdO1xuXHRcdFx0Zm9yICh2YXIgaT1zdHIubGVuZ3RoLTE7IGk+PTA7IGkgPSBpLTIpIHtcblx0XHRcdFx0dmFyIGNoYXJzID0gaSA9PT0gMCA/IHN0cltpXSA6IHN0cltpLTFdICsgc3RyW2ldO1xuXHRcdFx0XHRieXRlcy51bnNoaWZ0KHBhcnNlSW50KGNoYXJzLCAxNikpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gYnl0ZXM7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIFRyYW5zbGF0ZXMgbnVtYmVyIG9mIHRpY2tzIHRvIE1JREkgdGltZXN0YW1wIGZvcm1hdCwgcmV0dXJuaW5nIGFuIGFycmF5XG5cdFx0ICogb2YgYnl0ZXMgd2l0aCB0aGUgdGltZSB2YWx1ZXMuIE1JREkgaGFzIGEgdmVyeSBwYXJ0aWN1bGFyIHdheSB0byBleHByZXNzXG5cdFx0ICogdGltZTsgdGFrZSBhIGdvb2QgbG9vayBhdCB0aGUgc3BlYyBiZWZvcmUgZXZlciB0b3VjaGluZyB0aGlzIGZ1bmN0aW9uLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IHRpY2tzIC0gTnVtYmVyIG9mIHRpY2tzIHRvIGJlIHRyYW5zbGF0ZWQuXG5cdFx0ICogQHJldHVybnMge251bWJlcn0gQXJyYXkgb2YgYnl0ZXMgdGhhdCBmb3JtIHRoZSBNSURJIHRpbWUgdmFsdWUuXG5cdFx0ICovXG5cdFx0dHJhbnNsYXRlVGlja1RpbWU6IGZ1bmN0aW9uKHRpY2tzKSB7XG5cdFx0XHR2YXIgYnVmZmVyID0gdGlja3MgJiAweDdGO1xuXG5cdFx0XHR3aGlsZSAodGlja3MgPSB0aWNrcyA+PiA3KSB7XG5cdFx0XHRcdGJ1ZmZlciA8PD0gODtcblx0XHRcdFx0YnVmZmVyIHw9ICgodGlja3MgJiAweDdGKSB8IDB4ODApO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgYkxpc3QgPSBbXTtcblx0XHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRcdGJMaXN0LnB1c2goYnVmZmVyICYgMHhmZik7XG5cblx0XHRcdFx0aWYgKGJ1ZmZlciAmIDB4ODApIHsgYnVmZmVyID4+PSA4OyB9XG5cdFx0XHRcdGVsc2UgeyBicmVhazsgfVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGJMaXN0O1xuXHRcdH0sXG5cblx0fTtcblxuXHQvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0ICogRXZlbnQgY2xhc3Ncblx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG5cdC8qKlxuXHQgKiBDb25zdHJ1Y3QgYSBNSURJIGV2ZW50LlxuXHQgKlxuXHQgKiBQYXJhbWV0ZXJzIGluY2x1ZGU6XG5cdCAqICAtIHRpbWUgW29wdGlvbmFsIG51bWJlcl0gLSBUaWNrcyBzaW5jZSBwcmV2aW91cyBldmVudC5cblx0ICogIC0gdHlwZSBbcmVxdWlyZWQgbnVtYmVyXSAtIFR5cGUgb2YgZXZlbnQuXG5cdCAqICAtIGNoYW5uZWwgW3JlcXVpcmVkIG51bWJlcl0gLSBDaGFubmVsIGZvciB0aGUgZXZlbnQuXG5cdCAqICAtIHBhcmFtMSBbcmVxdWlyZWQgbnVtYmVyXSAtIEZpcnN0IGV2ZW50IHBhcmFtZXRlci5cblx0ICogIC0gcGFyYW0yIFtvcHRpb25hbCBudW1iZXJdIC0gU2Vjb25kIGV2ZW50IHBhcmFtZXRlci5cblx0ICovXG5cdHZhciBNaWRpRXZlbnQgPSBmdW5jdGlvbihwYXJhbXMpIHtcblx0XHRpZiAoIXRoaXMpIHJldHVybiBuZXcgTWlkaUV2ZW50KHBhcmFtcyk7XG5cdFx0aWYgKHBhcmFtcyAmJlxuXHRcdFx0XHQocGFyYW1zLnR5cGUgICAgIT09IG51bGwgfHwgcGFyYW1zLnR5cGUgICAgIT09IHVuZGVmaW5lZCkgJiZcblx0XHRcdFx0KHBhcmFtcy5jaGFubmVsICE9PSBudWxsIHx8IHBhcmFtcy5jaGFubmVsICE9PSB1bmRlZmluZWQpICYmXG5cdFx0XHRcdChwYXJhbXMucGFyYW0xICAhPT0gbnVsbCB8fCBwYXJhbXMucGFyYW0xICAhPT0gdW5kZWZpbmVkKSkge1xuXHRcdFx0dGhpcy5zZXRUaW1lKHBhcmFtcy50aW1lKTtcblx0XHRcdHRoaXMuc2V0VHlwZShwYXJhbXMudHlwZSk7XG5cdFx0XHR0aGlzLnNldENoYW5uZWwocGFyYW1zLmNoYW5uZWwpO1xuXHRcdFx0dGhpcy5zZXRQYXJhbTEocGFyYW1zLnBhcmFtMSk7XG5cdFx0XHR0aGlzLnNldFBhcmFtMihwYXJhbXMucGFyYW0yKTtcblx0XHR9XG5cdH07XG5cblx0Ly8gZXZlbnQgY29kZXNcblx0TWlkaUV2ZW50Lk5PVEVfT0ZGICAgICAgICAgICA9IDB4ODA7XG5cdE1pZGlFdmVudC5OT1RFX09OICAgICAgICAgICAgPSAweDkwO1xuXHRNaWRpRXZlbnQuQUZURVJfVE9VQ0ggICAgICAgID0gMHhBMDtcblx0TWlkaUV2ZW50LkNPTlRST0xMRVIgICAgICAgICA9IDB4QjA7XG5cdE1pZGlFdmVudC5QUk9HUkFNX0NIQU5HRSAgICAgPSAweEMwO1xuXHRNaWRpRXZlbnQuQ0hBTk5FTF9BRlRFUlRPVUNIID0gMHhEMDtcblx0TWlkaUV2ZW50LlBJVENIX0JFTkQgICAgICAgICA9IDB4RTA7XG5cblxuXHQvKipcblx0ICogU2V0IHRoZSB0aW1lIGZvciB0aGUgZXZlbnQgaW4gdGlja3Mgc2luY2UgdGhlIHByZXZpb3VzIGV2ZW50LlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gdGlja3MgLSBUaGUgbnVtYmVyIG9mIHRpY2tzIHNpbmNlIHRoZSBwcmV2aW91cyBldmVudC4gTWF5XG5cdCAqIGJlIHplcm8uXG5cdCAqL1xuXHRNaWRpRXZlbnQucHJvdG90eXBlLnNldFRpbWUgPSBmdW5jdGlvbih0aWNrcykge1xuXHRcdHRoaXMudGltZSA9IFV0aWwudHJhbnNsYXRlVGlja1RpbWUodGlja3MgfHwgMCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNldCB0aGUgdHlwZSBvZiB0aGUgZXZlbnQuIE11c3QgYmUgb25lIG9mIHRoZSBldmVudCBjb2RlcyBvbiBNaWRpRXZlbnQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlIC0gRXZlbnQgdHlwZS5cblx0ICovXG5cdE1pZGlFdmVudC5wcm90b3R5cGUuc2V0VHlwZSA9IGZ1bmN0aW9uKHR5cGUpIHtcblx0XHRpZiAodHlwZSA8IE1pZGlFdmVudC5OT1RFX09GRiB8fCB0eXBlID4gTWlkaUV2ZW50LlBJVENIX0JFTkQpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlRyeWluZyB0byBzZXQgYW4gdW5rbm93biBldmVudDogXCIgKyB0eXBlKTtcblx0XHR9XG5cblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIGNoYW5uZWwgZm9yIHRoZSBldmVudC4gTXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDE1LCBpbmNsdXNpdmUuXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBjaGFubmVsIC0gVGhlIGV2ZW50IGNoYW5uZWwuXG5cdCAqL1xuXHRNaWRpRXZlbnQucHJvdG90eXBlLnNldENoYW5uZWwgPSBmdW5jdGlvbihjaGFubmVsKSB7XG5cdFx0aWYgKGNoYW5uZWwgPCAwIHx8IGNoYW5uZWwgPiAxNSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2hhbm5lbCBpcyBvdXQgb2YgYm91bmRzLlwiKTtcblx0XHR9XG5cblx0XHR0aGlzLmNoYW5uZWwgPSBjaGFubmVsO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIGZpcnN0IHBhcmFtZXRlciBmb3IgdGhlIGV2ZW50LiBNdXN0IGJlIGJldHdlZW4gMCBhbmQgMjU1LFxuXHQgKiBpbmNsdXNpdmUuXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBwIC0gVGhlIGZpcnN0IGV2ZW50IHBhcmFtZXRlciB2YWx1ZS5cblx0ICovXG5cdE1pZGlFdmVudC5wcm90b3R5cGUuc2V0UGFyYW0xID0gZnVuY3Rpb24ocCkge1xuXHRcdHRoaXMucGFyYW0xID0gcDtcblx0fTtcblxuXHQvKipcblx0ICogU2V0IHRoZSBzZWNvbmQgcGFyYW1ldGVyIGZvciB0aGUgZXZlbnQuIE11c3QgYmUgYmV0d2VlbiAwIGFuZCAyNTUsXG5cdCAqIGluY2x1c2l2ZS5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHAgLSBUaGUgc2Vjb25kIGV2ZW50IHBhcmFtZXRlciB2YWx1ZS5cblx0ICovXG5cdE1pZGlFdmVudC5wcm90b3R5cGUuc2V0UGFyYW0yID0gZnVuY3Rpb24ocCkge1xuXHRcdHRoaXMucGFyYW0yID0gcDtcblx0fTtcblxuXHQvKipcblx0ICogU2VyaWFsaXplIHRoZSBldmVudCB0byBhbiBhcnJheSBvZiBieXRlcy5cblx0ICpcblx0ICogQHJldHVybnMge0FycmF5fSBUaGUgYXJyYXkgb2Ygc2VyaWFsaXplZCBieXRlcy5cblx0ICovXG5cdE1pZGlFdmVudC5wcm90b3R5cGUudG9CeXRlcyA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBieXRlQXJyYXkgPSBbXTtcblxuXHRcdHZhciB0eXBlQ2hhbm5lbEJ5dGUgPSB0aGlzLnR5cGUgfCAodGhpcy5jaGFubmVsICYgMHhGKTtcblxuXHRcdGJ5dGVBcnJheS5wdXNoLmFwcGx5KGJ5dGVBcnJheSwgdGhpcy50aW1lKTtcblx0XHRieXRlQXJyYXkucHVzaCh0eXBlQ2hhbm5lbEJ5dGUpO1xuXHRcdGJ5dGVBcnJheS5wdXNoKHRoaXMucGFyYW0xKTtcblxuXHRcdC8vIFNvbWUgZXZlbnRzIGRvbid0IGhhdmUgYSBzZWNvbmQgcGFyYW1ldGVyXG5cdFx0aWYgKHRoaXMucGFyYW0yICE9PSB1bmRlZmluZWQgJiYgdGhpcy5wYXJhbTIgIT09IG51bGwpIHtcblx0XHRcdGJ5dGVBcnJheS5wdXNoKHRoaXMucGFyYW0yKTtcblx0XHR9XG5cdFx0cmV0dXJuIGJ5dGVBcnJheTtcblx0fTtcblxuXHQvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0ICogTWV0YUV2ZW50IGNsYXNzXG5cdCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuXHQvKipcblx0ICogQ29uc3RydWN0IGEgbWV0YSBldmVudC5cblx0ICpcblx0ICogUGFyYW1ldGVycyBpbmNsdWRlOlxuXHQgKiAgLSB0aW1lIFtvcHRpb25hbCBudW1iZXJdIC0gVGlja3Mgc2luY2UgcHJldmlvdXMgZXZlbnQuXG5cdCAqICAtIHR5cGUgW3JlcXVpcmVkIG51bWJlcl0gLSBUeXBlIG9mIGV2ZW50LlxuXHQgKiAgLSBkYXRhIFtvcHRpb25hbCBhcnJheXxzdHJpbmddIC0gRXZlbnQgZGF0YS5cblx0ICovXG5cdHZhciBNZXRhRXZlbnQgPSBmdW5jdGlvbihwYXJhbXMpIHtcblx0XHRpZiAoIXRoaXMpIHJldHVybiBuZXcgTWV0YUV2ZW50KHBhcmFtcyk7XG5cdFx0dmFyIHAgPSBwYXJhbXMgfHwge307XG5cdFx0dGhpcy5zZXRUaW1lKHBhcmFtcy50aW1lKTtcblx0XHR0aGlzLnNldFR5cGUocGFyYW1zLnR5cGUpO1xuXHRcdHRoaXMuc2V0RGF0YShwYXJhbXMuZGF0YSk7XG5cdH07XG5cblx0TWV0YUV2ZW50LlNFUVVFTkNFICAgPSAweDAwO1xuXHRNZXRhRXZlbnQuVEVYVCAgICAgICA9IDB4MDE7XG5cdE1ldGFFdmVudC5DT1BZUklHSFQgID0gMHgwMjtcblx0TWV0YUV2ZW50LlRSQUNLX05BTUUgPSAweDAzO1xuXHRNZXRhRXZlbnQuSU5TVFJVTUVOVCA9IDB4MDQ7XG5cdE1ldGFFdmVudC5MWVJJQyAgICAgID0gMHgwNTtcblx0TWV0YUV2ZW50Lk1BUktFUiAgICAgPSAweDA2O1xuXHRNZXRhRXZlbnQuQ1VFX1BPSU5UICA9IDB4MDc7XG5cdE1ldGFFdmVudC5DSEFOTkVMX1BSRUZJWCA9IDB4MjA7XG5cdE1ldGFFdmVudC5FTkRfT0ZfVFJBQ0sgICA9IDB4MmY7XG5cdE1ldGFFdmVudC5URU1QTyAgICAgID0gMHg1MTtcblx0TWV0YUV2ZW50LlNNUFRFICAgICAgPSAweDU0O1xuXHRNZXRhRXZlbnQuVElNRV9TSUcgICA9IDB4NTg7XG5cdE1ldGFFdmVudC5LRVlfU0lHICAgID0gMHg1OTtcblx0TWV0YUV2ZW50LlNFUV9FVkVOVCAgPSAweDdmO1xuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIHRpbWUgZm9yIHRoZSBldmVudCBpbiB0aWNrcyBzaW5jZSB0aGUgcHJldmlvdXMgZXZlbnQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0aWNrcyAtIFRoZSBudW1iZXIgb2YgdGlja3Mgc2luY2UgdGhlIHByZXZpb3VzIGV2ZW50LiBNYXlcblx0ICogYmUgemVyby5cblx0ICovXG5cdE1ldGFFdmVudC5wcm90b3R5cGUuc2V0VGltZSA9IGZ1bmN0aW9uKHRpY2tzKSB7XG5cdFx0dGhpcy50aW1lID0gVXRpbC50cmFuc2xhdGVUaWNrVGltZSh0aWNrcyB8fCAwKTtcblx0fTtcblxuXHQvKipcblx0ICogU2V0IHRoZSB0eXBlIG9mIHRoZSBldmVudC4gTXVzdCBiZSBvbmUgb2YgdGhlIGV2ZW50IGNvZGVzIG9uIE1ldGFFdmVudC5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHQgLSBFdmVudCB0eXBlLlxuXHQgKi9cblx0TWV0YUV2ZW50LnByb3RvdHlwZS5zZXRUeXBlID0gZnVuY3Rpb24odCkge1xuXHRcdHRoaXMudHlwZSA9IHQ7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNldCB0aGUgZGF0YSBhc3NvY2lhdGVkIHdpdGggdGhlIGV2ZW50LiBNYXkgYmUgYSBzdHJpbmcgb3IgYXJyYXkgb2YgYnl0ZVxuXHQgKiB2YWx1ZXMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfEFycmF5fSBkIC0gRXZlbnQgZGF0YS5cblx0ICovXG5cdE1ldGFFdmVudC5wcm90b3R5cGUuc2V0RGF0YSA9IGZ1bmN0aW9uKGQpIHtcblx0XHR0aGlzLmRhdGEgPSBkO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXJpYWxpemUgdGhlIGV2ZW50IHRvIGFuIGFycmF5IG9mIGJ5dGVzLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IFRoZSBhcnJheSBvZiBzZXJpYWxpemVkIGJ5dGVzLlxuXHQgKi9cblx0TWV0YUV2ZW50LnByb3RvdHlwZS50b0J5dGVzID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCF0aGlzLnR5cGUpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlR5cGUgZm9yIG1ldGEtZXZlbnQgbm90IHNwZWNpZmllZC5cIik7XG5cdFx0fVxuXG5cdFx0dmFyIGJ5dGVBcnJheSA9IFtdO1xuXHRcdGJ5dGVBcnJheS5wdXNoLmFwcGx5KGJ5dGVBcnJheSwgdGhpcy50aW1lKTtcblx0XHRieXRlQXJyYXkucHVzaCgweEZGLCB0aGlzLnR5cGUpO1xuXG5cdFx0Ly8gSWYgZGF0YSBpcyBhbiBhcnJheSwgd2UgYXNzdW1lIHRoYXQgaXQgY29udGFpbnMgc2V2ZXJhbCBieXRlcy4gV2Vcblx0XHQvLyBhcGVuZCB0aGVtIHRvIGJ5dGVBcnJheS5cblx0XHRpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmRhdGEpKSB7XG5cdFx0XHRieXRlQXJyYXkucHVzaCh0aGlzLmRhdGEubGVuZ3RoKTtcblx0XHRcdGJ5dGVBcnJheS5wdXNoLmFwcGx5KGJ5dGVBcnJheSwgdGhpcy5kYXRhKTtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLmRhdGEgPT0gJ251bWJlcicpIHtcblx0XHRcdGJ5dGVBcnJheS5wdXNoKDEsIHRoaXMuZGF0YSk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLmRhdGEgIT09IG51bGwgJiYgdGhpcy5kYXRhICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdC8vIGFzc3VtZSBzdHJpbmc7IG1heSBiZSBhIGJhZCBhc3N1bXB0aW9uXG5cdFx0XHRieXRlQXJyYXkucHVzaCh0aGlzLmRhdGEubGVuZ3RoKTtcblx0XHRcdHZhciBkYXRhQnl0ZXMgPSB0aGlzLmRhdGEuc3BsaXQoJycpLm1hcChmdW5jdGlvbih4KXsgcmV0dXJuIHguY2hhckNvZGVBdCgwKSB9KTtcblx0XHRcdGJ5dGVBcnJheS5wdXNoLmFwcGx5KGJ5dGVBcnJheSwgZGF0YUJ5dGVzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ynl0ZUFycmF5LnB1c2goMCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGJ5dGVBcnJheTtcblx0fTtcblxuXHQvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0ICogVHJhY2sgY2xhc3Ncblx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG5cdC8qKlxuXHQgKiBDb25zdHJ1Y3QgYSBNSURJIHRyYWNrLlxuXHQgKlxuXHQgKiBQYXJhbWV0ZXJzIGluY2x1ZGU6XG5cdCAqICAtIGV2ZW50cyBbb3B0aW9uYWwgYXJyYXldIC0gQXJyYXkgb2YgZXZlbnRzIGZvciB0aGUgdHJhY2suXG5cdCAqL1xuXHR2YXIgVHJhY2sgPSBmdW5jdGlvbihjb25maWcpIHtcblx0XHRpZiAoIXRoaXMpIHJldHVybiBuZXcgVHJhY2soY29uZmlnKTtcblx0XHR2YXIgYyA9IGNvbmZpZyB8fCB7fTtcblx0XHR0aGlzLmV2ZW50cyA9IGMuZXZlbnRzIHx8IFtdO1xuXHR9O1xuXG5cdFRyYWNrLlNUQVJUX0JZVEVTID0gWzB4NGQsIDB4NTQsIDB4NzIsIDB4NmJdO1xuXHRUcmFjay5FTkRfQllURVMgICA9IFsweDAwLCAweEZGLCAweDJGLCAweDAwXTtcblxuXHQvKipcblx0ICogQWRkIGFuIGV2ZW50IHRvIHRoZSB0cmFjay5cblx0ICpcblx0ICogQHBhcmFtIHtNaWRpRXZlbnR8TWV0YUV2ZW50fSBldmVudCAtIFRoZSBldmVudCB0byBhZGQuXG5cdCAqIEByZXR1cm5zIHtUcmFja30gVGhlIGN1cnJlbnQgdHJhY2suXG5cdCAqL1xuXHRUcmFjay5wcm90b3R5cGUuYWRkRXZlbnQgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdHRoaXMuZXZlbnRzLnB1c2goZXZlbnQpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBBZGQgYSBub3RlLW9uIGV2ZW50IHRvIHRoZSB0cmFjay5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGNoYW5uZWwgLSBUaGUgY2hhbm5lbCB0byBhZGQgdGhlIGV2ZW50IHRvLlxuXHQgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IHBpdGNoIC0gVGhlIHBpdGNoIG9mIHRoZSBub3RlLCBlaXRoZXIgbnVtZXJpYyBvclxuXHQgKiBzeW1ib2xpYy5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lPTBdIC0gVGhlIG51bWJlciBvZiB0aWNrcyBzaW5jZSB0aGUgcHJldmlvdXMgZXZlbnQsXG5cdCAqIGRlZmF1bHRzIHRvIDAuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbdmVsb2NpdHk9OTBdIC0gVGhlIHZvbHVtZSBmb3IgdGhlIG5vdGUsIGRlZmF1bHRzIHRvXG5cdCAqIERFRkFVTFRfVk9MVU1FLlxuXHQgKiBAcmV0dXJucyB7VHJhY2t9IFRoZSBjdXJyZW50IHRyYWNrLlxuXHQgKi9cblx0VHJhY2sucHJvdG90eXBlLmFkZE5vdGVPbiA9IFRyYWNrLnByb3RvdHlwZS5ub3RlT24gPSBmdW5jdGlvbihjaGFubmVsLCBwaXRjaCwgdGltZSwgdmVsb2NpdHkpIHtcblx0XHR0aGlzLmV2ZW50cy5wdXNoKG5ldyBNaWRpRXZlbnQoe1xuXHRcdFx0dHlwZTogTWlkaUV2ZW50Lk5PVEVfT04sXG5cdFx0XHRjaGFubmVsOiBjaGFubmVsLFxuXHRcdFx0cGFyYW0xOiBVdGlsLmVuc3VyZU1pZGlQaXRjaChwaXRjaCksXG5cdFx0XHRwYXJhbTI6IHZlbG9jaXR5IHx8IERFRkFVTFRfVk9MVU1FLFxuXHRcdFx0dGltZTogdGltZSB8fCAwLFxuXHRcdH0pKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHQvKipcblx0ICogQWRkIGEgbm90ZS1vZmYgZXZlbnQgdG8gdGhlIHRyYWNrLlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gY2hhbm5lbCAtIFRoZSBjaGFubmVsIHRvIGFkZCB0aGUgZXZlbnQgdG8uXG5cdCAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gcGl0Y2ggLSBUaGUgcGl0Y2ggb2YgdGhlIG5vdGUsIGVpdGhlciBudW1lcmljIG9yXG5cdCAqIHN5bWJvbGljLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gW3RpbWU9MF0gLSBUaGUgbnVtYmVyIG9mIHRpY2tzIHNpbmNlIHRoZSBwcmV2aW91cyBldmVudCxcblx0ICogZGVmYXVsdHMgdG8gMC5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFt2ZWxvY2l0eT05MF0gLSBUaGUgdmVsb2NpdHkgdGhlIG5vdGUgd2FzIHJlbGVhc2VkLFxuXHQgKiBkZWZhdWx0cyB0byBERUZBVUxUX1ZPTFVNRS5cblx0ICogQHJldHVybnMge1RyYWNrfSBUaGUgY3VycmVudCB0cmFjay5cblx0ICovXG5cdFRyYWNrLnByb3RvdHlwZS5hZGROb3RlT2ZmID0gVHJhY2sucHJvdG90eXBlLm5vdGVPZmYgPSBmdW5jdGlvbihjaGFubmVsLCBwaXRjaCwgdGltZSwgdmVsb2NpdHkpIHtcblx0XHR0aGlzLmV2ZW50cy5wdXNoKG5ldyBNaWRpRXZlbnQoe1xuXHRcdFx0dHlwZTogTWlkaUV2ZW50Lk5PVEVfT0ZGLFxuXHRcdFx0Y2hhbm5lbDogY2hhbm5lbCxcblx0XHRcdHBhcmFtMTogVXRpbC5lbnN1cmVNaWRpUGl0Y2gocGl0Y2gpLFxuXHRcdFx0cGFyYW0yOiB2ZWxvY2l0eSB8fCBERUZBVUxUX1ZPTFVNRSxcblx0XHRcdHRpbWU6IHRpbWUgfHwgMCxcblx0XHR9KSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0LyoqXG5cdCAqIEFkZCBhIG5vdGUtb24gYW5kIC1vZmYgZXZlbnQgdG8gdGhlIHRyYWNrLlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gY2hhbm5lbCAtIFRoZSBjaGFubmVsIHRvIGFkZCB0aGUgZXZlbnQgdG8uXG5cdCAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gcGl0Y2ggLSBUaGUgcGl0Y2ggb2YgdGhlIG5vdGUsIGVpdGhlciBudW1lcmljIG9yXG5cdCAqIHN5bWJvbGljLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gZHVyIC0gVGhlIGR1cmF0aW9uIG9mIHRoZSBub3RlLCBpbiB0aWNrcy5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lPTBdIC0gVGhlIG51bWJlciBvZiB0aWNrcyBzaW5jZSB0aGUgcHJldmlvdXMgZXZlbnQsXG5cdCAqIGRlZmF1bHRzIHRvIDAuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbdmVsb2NpdHk9OTBdIC0gVGhlIHZlbG9jaXR5IHRoZSBub3RlIHdhcyByZWxlYXNlZCxcblx0ICogZGVmYXVsdHMgdG8gREVGQVVMVF9WT0xVTUUuXG5cdCAqIEByZXR1cm5zIHtUcmFja30gVGhlIGN1cnJlbnQgdHJhY2suXG5cdCAqL1xuXHRUcmFjay5wcm90b3R5cGUuYWRkTm90ZSA9IFRyYWNrLnByb3RvdHlwZS5ub3RlID0gZnVuY3Rpb24oY2hhbm5lbCwgcGl0Y2gsIGR1ciwgdGltZSwgdmVsb2NpdHkpIHtcblx0XHR0aGlzLm5vdGVPbihjaGFubmVsLCBwaXRjaCwgdGltZSwgdmVsb2NpdHkpO1xuXHRcdGlmIChkdXIpIHtcblx0XHRcdHRoaXMubm90ZU9mZihjaGFubmVsLCBwaXRjaCwgZHVyLCB2ZWxvY2l0eSk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBBZGQgYSBub3RlLW9uIGFuZCAtb2ZmIGV2ZW50IHRvIHRoZSB0cmFjayBmb3IgZWFjaCBwaXRjaCBpbiBhbiBhcnJheSBvZiBwaXRjaGVzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gY2hhbm5lbCAtIFRoZSBjaGFubmVsIHRvIGFkZCB0aGUgZXZlbnQgdG8uXG5cdCAqIEBwYXJhbSB7YXJyYXl9IGNob3JkIC0gQW4gYXJyYXkgb2YgcGl0Y2hlcywgZWl0aGVyIG51bWVyaWMgb3Jcblx0ICogc3ltYm9saWMuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBkdXIgLSBUaGUgZHVyYXRpb24gb2YgdGhlIGNob3JkLCBpbiB0aWNrcy5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFt2ZWxvY2l0eT05MF0gLSBUaGUgdmVsb2NpdHkgb2YgdGhlIGNob3JkLFxuXHQgKiBkZWZhdWx0cyB0byBERUZBVUxUX1ZPTFVNRS5cblx0ICogQHJldHVybnMge1RyYWNrfSBUaGUgY3VycmVudCB0cmFjay5cblx0ICovXG5cdFRyYWNrLnByb3RvdHlwZS5hZGRDaG9yZCA9IFRyYWNrLnByb3RvdHlwZS5jaG9yZCA9IGZ1bmN0aW9uKGNoYW5uZWwsIGNob3JkLCBkdXIsIHZlbG9jaXR5KSB7XG5cdFx0aWYgKCFBcnJheS5pc0FycmF5KGNob3JkKSAmJiAhY2hvcmQubGVuZ3RoKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0Nob3JkIG11c3QgYmUgYW4gYXJyYXkgb2YgcGl0Y2hlcycpO1xuXHRcdH1cblx0XHRjaG9yZC5mb3JFYWNoKGZ1bmN0aW9uKG5vdGUpIHtcblx0XHRcdHRoaXMubm90ZU9uKGNoYW5uZWwsIG5vdGUsIDAsIHZlbG9jaXR5KTtcblx0XHR9LCB0aGlzKTtcblx0XHRjaG9yZC5mb3JFYWNoKGZ1bmN0aW9uKG5vdGUsIGluZGV4KSB7XG5cdFx0XHRpZiAoaW5kZXggPT09IDApIHtcblx0XHRcdFx0dGhpcy5ub3RlT2ZmKGNoYW5uZWwsIG5vdGUsIGR1cik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLm5vdGVPZmYoY2hhbm5lbCwgbm90ZSk7XG5cdFx0XHR9XG5cdFx0fSwgdGhpcyk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNldCBpbnN0cnVtZW50IGZvciB0aGUgdHJhY2suXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBjaGFubmVsIC0gVGhlIGNoYW5uZWwgdG8gc2V0IHRoZSBpbnN0cnVtZW50IG9uLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gaW5zdHJ1bWVudCAtIFRoZSBpbnN0cnVtZW50IHRvIHNldCBpdCB0by5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lPTBdIC0gVGhlIG51bWJlciBvZiB0aWNrcyBzaW5jZSB0aGUgcHJldmlvdXMgZXZlbnQsXG5cdCAqIGRlZmF1bHRzIHRvIDAuXG5cdCAqIEByZXR1cm5zIHtUcmFja30gVGhlIGN1cnJlbnQgdHJhY2suXG5cdCAqL1xuXHRUcmFjay5wcm90b3R5cGUuc2V0SW5zdHJ1bWVudCA9IFRyYWNrLnByb3RvdHlwZS5pbnN0cnVtZW50ID0gZnVuY3Rpb24oY2hhbm5lbCwgaW5zdHJ1bWVudCwgdGltZSkge1xuXHRcdHRoaXMuZXZlbnRzLnB1c2gobmV3IE1pZGlFdmVudCh7XG5cdFx0XHR0eXBlOiBNaWRpRXZlbnQuUFJPR1JBTV9DSEFOR0UsXG5cdFx0XHRjaGFubmVsOiBjaGFubmVsLFxuXHRcdFx0cGFyYW0xOiBpbnN0cnVtZW50LFxuXHRcdFx0dGltZTogdGltZSB8fCAwLFxuXHRcdH0pKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHQvKipcblx0ICogU2V0IHRoZSB0ZW1wbyBmb3IgdGhlIHRyYWNrLlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gYnBtIC0gVGhlIG5ldyBudW1iZXIgb2YgYmVhdHMgcGVyIG1pbnV0ZS5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lPTBdIC0gVGhlIG51bWJlciBvZiB0aWNrcyBzaW5jZSB0aGUgcHJldmlvdXMgZXZlbnQsXG5cdCAqIGRlZmF1bHRzIHRvIDAuXG5cdCAqIEByZXR1cm5zIHtUcmFja30gVGhlIGN1cnJlbnQgdHJhY2suXG5cdCAqL1xuXHRUcmFjay5wcm90b3R5cGUuc2V0VGVtcG8gPSBUcmFjay5wcm90b3R5cGUudGVtcG8gPSBmdW5jdGlvbihicG0sIHRpbWUpIHtcblx0XHR0aGlzLmV2ZW50cy5wdXNoKG5ldyBNZXRhRXZlbnQoe1xuXHRcdFx0dHlwZTogTWV0YUV2ZW50LlRFTVBPLFxuXHRcdFx0ZGF0YTogVXRpbC5tcHFuRnJvbUJwbShicG0pLFxuXHRcdFx0dGltZTogdGltZSB8fCAwLFxuXHRcdH0pKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHQvKipcblx0ICogU2VyaWFsaXplIHRoZSB0cmFjayB0byBhbiBhcnJheSBvZiBieXRlcy5cblx0ICpcblx0ICogQHJldHVybnMge0FycmF5fSBUaGUgYXJyYXkgb2Ygc2VyaWFsaXplZCBieXRlcy5cblx0ICovXG5cdFRyYWNrLnByb3RvdHlwZS50b0J5dGVzID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHRyYWNrTGVuZ3RoID0gMDtcblx0XHR2YXIgZXZlbnRCeXRlcyA9IFtdO1xuXHRcdHZhciBzdGFydEJ5dGVzID0gVHJhY2suU1RBUlRfQllURVM7XG5cdFx0dmFyIGVuZEJ5dGVzICAgPSBUcmFjay5FTkRfQllURVM7XG5cblx0XHR2YXIgYWRkRXZlbnRCeXRlcyA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHR2YXIgYnl0ZXMgPSBldmVudC50b0J5dGVzKCk7XG5cdFx0XHR0cmFja0xlbmd0aCArPSBieXRlcy5sZW5ndGg7XG5cdFx0XHRldmVudEJ5dGVzLnB1c2guYXBwbHkoZXZlbnRCeXRlcywgYnl0ZXMpO1xuXHRcdH07XG5cblx0XHR0aGlzLmV2ZW50cy5mb3JFYWNoKGFkZEV2ZW50Qnl0ZXMpO1xuXG5cdFx0Ly8gQWRkIHRoZSBlbmQtb2YtdHJhY2sgYnl0ZXMgdG8gdGhlIHN1bSBvZiBieXRlcyBmb3IgdGhlIHRyYWNrLCBzaW5jZVxuXHRcdC8vIHRoZXkgYXJlIGNvdW50ZWQgKHVubGlrZSB0aGUgc3RhcnQtb2YtdHJhY2sgb25lcykuXG5cdFx0dHJhY2tMZW5ndGggKz0gZW5kQnl0ZXMubGVuZ3RoO1xuXG5cdFx0Ly8gTWFrZXMgc3VyZSB0aGF0IHRyYWNrIGxlbmd0aCB3aWxsIGZpbGwgdXAgNCBieXRlcyB3aXRoIDBzIGluIGNhc2Vcblx0XHQvLyB0aGUgbGVuZ3RoIGlzIGxlc3MgdGhhbiB0aGF0ICh0aGUgdXN1YWwgY2FzZSkuXG5cdFx0dmFyIGxlbmd0aEJ5dGVzID0gVXRpbC5zdHIyQnl0ZXModHJhY2tMZW5ndGgudG9TdHJpbmcoMTYpLCA0KTtcblxuXHRcdHJldHVybiBzdGFydEJ5dGVzLmNvbmNhdChsZW5ndGhCeXRlcywgZXZlbnRCeXRlcywgZW5kQnl0ZXMpO1xuXHR9O1xuXG5cdC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXHQgKiBGaWxlIGNsYXNzXG5cdCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuXHQvKipcblx0ICogQ29uc3RydWN0IGEgZmlsZSBvYmplY3QuXG5cdCAqXG5cdCAqIFBhcmFtZXRlcnMgaW5jbHVkZTpcblx0ICogIC0gdGlja3MgW29wdGlvbmFsIG51bWJlcl0gLSBOdW1iZXIgb2YgdGlja3MgcGVyIGJlYXQsIGRlZmF1bHRzIHRvIDEyOC5cblx0ICogICAgTXVzdCBiZSAxLTMyNzY3LlxuXHQgKiAgLSB0cmFja3MgW29wdGlvbmFsIGFycmF5XSAtIFRyYWNrIGRhdGEuXG5cdCAqL1xuXHR2YXIgRmlsZSA9IGZ1bmN0aW9uKGNvbmZpZyl7XG5cdFx0aWYgKCF0aGlzKSByZXR1cm4gbmV3IEZpbGUoY29uZmlnKTtcblxuXHRcdHZhciBjID0gY29uZmlnIHx8IHt9O1xuXHRcdGlmIChjLnRpY2tzKSB7XG5cdFx0XHRpZiAodHlwZW9mIGMudGlja3MgIT09ICdudW1iZXInKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignVGlja3MgcGVyIGJlYXQgbXVzdCBiZSBhIG51bWJlciEnKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGMudGlja3MgPD0gMCB8fCBjLnRpY2tzID49ICgxIDw8IDE1KSB8fCBjLnRpY2tzICUgMSAhPT0gMCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RpY2tzIHBlciBiZWF0IG11c3QgYmUgYW4gaW50ZWdlciBiZXR3ZWVuIDEgYW5kIDMyNzY3IScpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy50aWNrcyA9IGMudGlja3MgfHwgMTI4O1xuXHRcdHRoaXMudHJhY2tzID0gYy50cmFja3MgfHwgW107XG5cdH07XG5cblx0RmlsZS5IRFJfQ0hVTktJRCAgICAgPSBcIk1UaGRcIjsgICAgICAgICAgICAgLy8gRmlsZSBtYWdpYyBjb29raWVcblx0RmlsZS5IRFJfQ0hVTktfU0laRSAgPSBcIlxceDAwXFx4MDBcXHgwMFxceDA2XCI7IC8vIEhlYWRlciBsZW5ndGggZm9yIFNNRlxuXHRGaWxlLkhEUl9UWVBFMCAgICAgICA9IFwiXFx4MDBcXHgwMFwiOyAgICAgICAgIC8vIE1pZGkgVHlwZSAwIGlkXG5cdEZpbGUuSERSX1RZUEUxICAgICAgID0gXCJcXHgwMFxceDAxXCI7ICAgICAgICAgLy8gTWlkaSBUeXBlIDEgaWRcblxuXHQvKipcblx0ICogQWRkIGEgdHJhY2sgdG8gdGhlIGZpbGUuXG5cdCAqXG5cdCAqIEBwYXJhbSB7VHJhY2t9IHRyYWNrIC0gVGhlIHRyYWNrIHRvIGFkZC5cblx0ICovXG5cdEZpbGUucHJvdG90eXBlLmFkZFRyYWNrID0gZnVuY3Rpb24odHJhY2spIHtcblx0XHRpZiAodHJhY2spIHtcblx0XHRcdHRoaXMudHJhY2tzLnB1c2godHJhY2spO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRyYWNrID0gbmV3IFRyYWNrKCk7XG5cdFx0XHR0aGlzLnRyYWNrcy5wdXNoKHRyYWNrKTtcblx0XHRcdHJldHVybiB0cmFjaztcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIFNlcmlhbGl6ZSB0aGUgTUlESSBmaWxlIHRvIGFuIGFycmF5IG9mIGJ5dGVzLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IFRoZSBhcnJheSBvZiBzZXJpYWxpemVkIGJ5dGVzLlxuXHQgKi9cblx0RmlsZS5wcm90b3R5cGUudG9CeXRlcyA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciB0cmFja0NvdW50ID0gdGhpcy50cmFja3MubGVuZ3RoLnRvU3RyaW5nKDE2KTtcblxuXHRcdC8vIHByZXBhcmUgdGhlIGZpbGUgaGVhZGVyXG5cdFx0dmFyIGJ5dGVzID0gRmlsZS5IRFJfQ0hVTktJRCArIEZpbGUuSERSX0NIVU5LX1NJWkU7XG5cblx0XHQvLyBzZXQgTWlkaSB0eXBlIGJhc2VkIG9uIG51bWJlciBvZiB0cmFja3Ncblx0XHRpZiAocGFyc2VJbnQodHJhY2tDb3VudCwgMTYpID4gMSkge1xuXHRcdFx0Ynl0ZXMgKz0gRmlsZS5IRFJfVFlQRTE7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGJ5dGVzICs9IEZpbGUuSERSX1RZUEUwO1xuXHRcdH1cblxuXHRcdC8vIGFkZCB0aGUgbnVtYmVyIG9mIHRyYWNrcyAoMiBieXRlcylcblx0XHRieXRlcyArPSBVdGlsLmNvZGVzMlN0cihVdGlsLnN0cjJCeXRlcyh0cmFja0NvdW50LCAyKSk7XG5cdFx0Ly8gYWRkIHRoZSBudW1iZXIgb2YgdGlja3MgcGVyIGJlYXQgKGN1cnJlbnRseSBoYXJkY29kZWQpXG5cdFx0Ynl0ZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgodGhpcy50aWNrcy8yNTYpLCAgdGhpcy50aWNrcyUyNTYpOztcblxuXHRcdC8vIGl0ZXJhdGUgb3ZlciB0aGUgdHJhY2tzLCBjb252ZXJ0aW5nIHRvIGJ5dGVzIHRvb1xuXHRcdHRoaXMudHJhY2tzLmZvckVhY2goZnVuY3Rpb24odHJhY2spIHtcblx0XHRcdGJ5dGVzICs9IFV0aWwuY29kZXMyU3RyKHRyYWNrLnRvQnl0ZXMoKSk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gYnl0ZXM7XG5cdH07XG5cblx0LyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdCAqIEV4cG9ydHNcblx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG5cdGV4cG9ydGVkLlV0aWwgPSBVdGlsO1xuXHRleHBvcnRlZC5GaWxlID0gRmlsZTtcblx0ZXhwb3J0ZWQuVHJhY2sgPSBUcmFjaztcblx0ZXhwb3J0ZWQuRXZlbnQgPSBNaWRpRXZlbnQ7XG5cdGV4cG9ydGVkLk1ldGFFdmVudCA9IE1ldGFFdmVudDtcblxufSkoIE1pZGkgKTtcblxuaWYgKHR5cGVvZiBtb2R1bGUgIT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlICE9PSBudWxsKSB7XG5cdG1vZHVsZS5leHBvcnRzID0gTWlkaTtcbn0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT0gJ3VuZGVmaW5lZCcgJiYgZXhwb3J0cyAhPT0gbnVsbCkge1xuXHRleHBvcnRzID0gTWlkaTtcbn0gZWxzZSB7XG5cdHRoaXMuTWlkaSA9IE1pZGk7XG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLnJlZHVjZSgocHJldiwgY3VyKSA9PiBwcmV2LmNvbmNhdChjdXIpLCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBlYXQodmFsdWUsIHRpbWVzKSB7XG4gIGNvbnN0IG91dCA9IFtdO1xuXG4gIHdoaWxlICh0aW1lcykge1xuICAgIG91dC5wdXNoKHZhbHVlKTtcbiAgICB0aW1lcyAtPSAxO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmdlKG1pbiwgbWF4LCBzdGVwKSB7XG4gIGNvbnN0IGFjYyA9IFtdO1xuXG4gIGlmICghc3RlcCkge1xuICAgIGZvciAobGV0IGkgPSBtaW47IGkgPD0gbWF4OyBpICs9IDEpIHtcbiAgICAgIGFjYy5wdXNoKGkpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBkaWZmID0gKG1heCAtIG1pbikgLyBzdGVwO1xuXG4gICAgZm9yIChsZXQgaSA9IG1pbjsgaSA8PSBtYXg7IGkgKz0gZGlmZikge1xuICAgICAgYWNjLnB1c2goaSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFjYztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKHZhbHVlKSB7XG4gIGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JykgcmV0dXJuIHZhbHVlO1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHJldHVybiB2YWx1ZS5tYXAoY2xvbmUpO1xuXG4gIGNvbnN0IGNvcHkgPSB7fTtcblxuICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaChrZXkgPT4ge1xuICAgIGNvcHlba2V5XSA9IGNsb25lKHZhbHVlW2tleV0pO1xuICB9KTtcblxuICByZXR1cm4gY29weTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHppcChhLCBiLCBjYikge1xuICBjb25zdCBtYXggPSBNYXRoLm1heChhLmxlbmd0aCwgYi5sZW5ndGgpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4OyBpICs9IDEpIHtcbiAgICBpZiAodHlwZW9mIGFbaV0gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBiW2ldICE9PSAndW5kZWZpbmVkJykgY2IoYVtpXSwgYltpXSk7XG4gIH1cbn1cbiIsICIoKCk9PntcInVzZSBzdHJpY3RcIjt2YXIgbj17NDEzOm49PntuLmV4cG9ydHM9SlNPTi5wYXJzZSgne1wiNXRoXCI6XCIxMDAwMDAwMTAwMDBcIixcIk03IzVzdXM0XCI6XCIxMDAwMDEwMDEwMDFcIixcIjcjNXN1czRcIjpcIjEwMDAwMTAwMTAxMFwiLFwic3VzNFwiOlwiMTAwMDAxMDEwMDAwXCIsXCJNN3N1czRcIjpcIjEwMDAwMTAxMDAwMVwiLFwiN3N1czRcIjpcIjEwMDAwMTAxMDAxMFwiLFwiN25vNVwiOlwiMTAwMDEwMDAwMDEwXCIsXCJhdWdcIjpcIjEwMDAxMDAwMTAwMFwiLFwiTTdiNlwiOlwiMTAwMDEwMDAxMDAxXCIsXCJtYWo3IzVcIjpcIjEwMDAxMDAwMTAwMVwiLFwiNyM1XCI6XCIxMDAwMTAwMDEwMTBcIixcIjdiMTNcIjpcIjEwMDAxMDAwMTAxMFwiLFwiTVwiOlwiMTAwMDEwMDEwMDAwXCIsXCJtYWo3XCI6XCIxMDAwMTAwMTAwMDFcIixcIjd0aFwiOlwiMTAwMDEwMDEwMDEwXCIsXCI2dGhcIjpcIjEwMDAxMDAxMDEwMFwiLFwiN2FkZDZcIjpcIjEwMDAxMDAxMDExMFwiLFwiN2I2XCI6XCIxMDAwMTAwMTEwMTBcIixcIk1iNVwiOlwiMTAwMDEwMTAwMDAwXCIsXCJNN2I1XCI6XCIxMDAwMTAxMDAwMDFcIixcIjdiNVwiOlwiMTAwMDEwMTAwMDEwXCIsXCJtYWojNFwiOlwiMTAwMDEwMTEwMDAxXCIsXCI3IzExXCI6XCIxMDAwMTAxMTAwMTBcIixcIk02IzExXCI6XCIxMDAwMTAxMTAxMDBcIixcIjcjMTFiMTNcIjpcIjEwMDAxMDExMTAxMFwiLFwibSM1XCI6XCIxMDAxMDAwMDEwMDBcIixcIm1iNk03XCI6XCIxMDAxMDAwMDEwMDFcIixcIm03IzVcIjpcIjEwMDEwMDAwMTAxMFwiLFwibVwiOlwiMTAwMTAwMDEwMDAwXCIsXCJtL21hN1wiOlwiMTAwMTAwMDEwMDAxXCIsXCJtN1wiOlwiMTAwMTAwMDEwMDEwXCIsXCJtNlwiOlwiMTAwMTAwMDEwMTAwXCIsXCJtTWFqN2I2XCI6XCIxMDAxMDAwMTEwMDFcIixcImRpbVwiOlwiMTAwMTAwMTAwMDAwXCIsXCJvTTdcIjpcIjEwMDEwMDEwMDAwMVwiLFwibTdiNVwiOlwiMTAwMTAwMTAwMDEwXCIsXCJkaW03XCI6XCIxMDAxMDAxMDAxMDBcIixcIm83TTdcIjpcIjEwMDEwMDEwMDEwMVwiLFwiNHRoXCI6XCIxMDAxMDEwMDAwMTBcIixcIm1hZGQ0XCI6XCIxMDAxMDEwMTAwMDBcIixcIm03YWRkMTFcIjpcIjEwMDEwMTAxMDAxMFwiLFwiK2FkZCM5XCI6XCIxMDAxMTAwMDEwMDBcIixcIjcjNSM5XCI6XCIxMDAxMTAwMDEwMTBcIixcIjcjOVwiOlwiMTAwMTEwMDEwMDEwXCIsXCIxMyM5XCI6XCIxMDAxMTAwMTAxMTBcIixcIjcjOWIxM1wiOlwiMTAwMTEwMDExMDEwXCIsXCJtYWo3IzkjMTFcIjpcIjEwMDExMDExMDAwMVwiLFwiNyM5IzExXCI6XCIxMDAxMTAxMTAwMTBcIixcIjEzIzkjMTFcIjpcIjEwMDExMDExMDExMFwiLFwiNyM5IzExYjEzXCI6XCIxMDAxMTAxMTEwMTBcIixcInN1czJcIjpcIjEwMTAwMDAxMDAwMFwiLFwiTTkjNXN1czRcIjpcIjEwMTAwMTAwMTAwMVwiLFwic3VzMjRcIjpcIjEwMTAwMTAxMDAwMFwiLFwiTTlzdXM0XCI6XCIxMDEwMDEwMTAwMDFcIixcIjExdGhcIjpcIjEwMTAwMTAxMDAxMFwiLFwiOXN1czRcIjpcIjEwMTAwMTAxMDAxMFwiLFwiMTNzdXM0XCI6XCIxMDEwMDEwMTAxMTBcIixcIjlubzVcIjpcIjEwMTAxMDAwMDAxMFwiLFwiMTNubzVcIjpcIjEwMTAxMDAwMDExMFwiLFwiTSM1YWRkOVwiOlwiMTAxMDEwMDAxMDAwXCIsXCJtYWo5IzVcIjpcIjEwMTAxMDAwMTAwMVwiLFwiOSM1XCI6XCIxMDEwMTAwMDEwMTBcIixcIjliMTNcIjpcIjEwMTAxMDAwMTAxMFwiLFwiTWFkZDlcIjpcIjEwMTAxMDAxMDAwMFwiLFwibWFqOVwiOlwiMTAxMDEwMDEwMDAxXCIsXCI5dGhcIjpcIjEwMTAxMDAxMDAxMFwiLFwiNi85XCI6XCIxMDEwMTAwMTAxMDBcIixcIm1hajEzXCI6XCIxMDEwMTAwMTAxMDFcIixcIk03YWRkMTNcIjpcIjEwMTAxMDAxMDEwMVwiLFwiMTN0aFwiOlwiMTAxMDEwMDEwMTEwXCIsXCJNOWI1XCI6XCIxMDEwMTAxMDAwMDFcIixcIjliNVwiOlwiMTAxMDEwMTAwMDEwXCIsXCIxM2I1XCI6XCIxMDEwMTAxMDAxMTBcIixcIjkjNSMxMVwiOlwiMTAxMDEwMTAxMDEwXCIsXCJtYWo5IzExXCI6XCIxMDEwMTAxMTAwMDFcIixcIjkjMTFcIjpcIjEwMTAxMDExMDAxMFwiLFwiNjkjMTFcIjpcIjEwMTAxMDExMDEwMFwiLFwiTTEzIzExXCI6XCIxMDEwMTAxMTAxMDFcIixcIjEzIzExXCI6XCIxMDEwMTAxMTAxMTBcIixcIjkjMTFiMTNcIjpcIjEwMTAxMDExMTAxMFwiLFwibTkjNVwiOlwiMTAxMTAwMDAxMDEwXCIsXCJtYWRkOVwiOlwiMTAxMTAwMDEwMDAwXCIsXCJtTTlcIjpcIjEwMTEwMDAxMDAwMVwiLFwibTlcIjpcIjEwMTEwMDAxMDAxMFwiLFwibTY5XCI6XCIxMDExMDAwMTAxMDBcIixcIm0xM1wiOlwiMTAxMTAwMDEwMTEwXCIsXCJtTWFqOWI2XCI6XCIxMDExMDAwMTEwMDFcIixcIm05YjVcIjpcIjEwMTEwMDEwMDAxMFwiLFwibTExQVwiOlwiMTAxMTAxMDAxMDEwXCIsXCJtMTFcIjpcIjEwMTEwMTAxMDAxMFwiLFwiYjlzdXNcIjpcIjExMDAwMTAxMDAxMFwiLFwiMTFiOVwiOlwiMTEwMDAxMDEwMDEwXCIsXCI3c3VzNGI5YjEzXCI6XCIxMTAwMDEwMTEwMTBcIixcImFsdDdcIjpcIjExMDAxMDAwMDAxMFwiLFwiNyM1YjlcIjpcIjExMDAxMDAwMTAxMFwiLFwiTWFkZGI5XCI6XCIxMTAwMTAwMTAwMDBcIixcIk03YjlcIjpcIjExMDAxMDAxMDAwMVwiLFwiN2I5XCI6XCIxMTAwMTAwMTAwMTBcIixcIjEzYjlcIjpcIjExMDAxMDAxMDExMFwiLFwiN2I5YjEzXCI6XCIxMTAwMTAwMTEwMTBcIixcIjcjNWI5IzExXCI6XCIxMTAwMTAxMDEwMTBcIixcIjdiOSMxMVwiOlwiMTEwMDEwMTEwMDEwXCIsXCIxM2I5IzExXCI6XCIxMTAwMTAxMTAxMTBcIixcIjdiOWIxMyMxMVwiOlwiMTEwMDEwMTExMDEwXCIsXCJtYjZiOVwiOlwiMTEwMTAwMDAxMDAwXCIsXCI3YjkjOVwiOlwiMTEwMTEwMDEwMDEwXCJ9Jyl9LDcyMjpuPT57bi5leHBvcnRzPUpTT04ucGFyc2UoJ3tcIm1ham9yIHBlbnRhdG9uaWNcIjpcIjEwMTAxMDAxMDEwMFwiLFwiaW9uaWFuIHBlbnRhdG9uaWNcIjpcIjEwMDAxMTAxMDAwMVwiLFwibWl4b2x5ZGlhbiBwZW50YXRvbmljXCI6XCIxMDAwMTEwMTAwMTBcIixcInJpdHVzZW5cIjpcIjEwMTAwMTAxMDEwMFwiLFwiZWd5cHRpYW5cIjpcIjEwMTAwMTAxMDAxMFwiLFwibmVvcG9saXRhbiBtYWpvciBwZW50YXRvbmljXCI6XCIxMDAwMTExMDAwMTBcIixcInZpZXRuYW1lc2UgMVwiOlwiMTAwMTAxMDExMDAwXCIsXCJwZWxvZ1wiOlwiMTEwMTAwMDExMDAwXCIsXCJrdW1vaWpvc2hpXCI6XCIxMTAwMDEwMTEwMDBcIixcImhpcmFqb3NoaVwiOlwiMTAxMTAwMDExMDAwXCIsXCJpd2F0b1wiOlwiMTEwMDAxMTAwMDEwXCIsXCJpbi1zZW5cIjpcIjExMDAwMTAxMDAxMFwiLFwibHlkaWFuIHBlbnRhdG9uaWNcIjpcIjEwMDAxMDExMDAwMVwiLFwibWFsa29zIHJhZ2FcIjpcIjEwMDEwMTAwMTAxMFwiLFwibG9jcmlhbiBwZW50YXRvbmljXCI6XCIxMDAxMDExMDAwMTBcIixcIm1pbm9yIHBlbnRhdG9uaWNcIjpcIjEwMDEwMTAxMDAxMFwiLFwibWlub3Igc2l4IHBlbnRhdG9uaWNcIjpcIjEwMDEwMTAxMDEwMFwiLFwiZmxhdCB0aHJlZSBwZW50YXRvbmljXCI6XCIxMDExMDAwMTAxMDBcIixcImZsYXQgc2l4IHBlbnRhdG9uaWNcIjpcIjEwMTAxMDAxMTAwMFwiLFwic2NyaWFiaW5cIjpcIjExMDAxMDAxMDEwMFwiLFwid2hvbGUgdG9uZSBwZW50YXRvbmljXCI6XCIxMDAwMTAxMDEwMTBcIixcImx5ZGlhbiAjNVAgcGVudGF0b25pY1wiOlwiMTAwMDEwMTAxMDAxXCIsXCJseWRpYW4gZG9taW5hbnQgcGVudGF0b25pY1wiOlwiMTAwMDEwMTEwMDEwXCIsXCJtaW5vciAjN00gcGVudGF0b25pY1wiOlwiMTAwMTAxMDEwMDAxXCIsXCJzdXBlciBsb2NyaWFuIHBlbnRhdG9uaWNcIjpcIjEwMDExMDEwMDAxMFwiLFwibWlub3IgaGV4YXRvbmljXCI6XCIxMDExMDEwMTAwMDFcIixcImF1Z21lbnRlZFwiOlwiMTAwMTEwMDExMDAxXCIsXCJtYWpvciBibHVlc1wiOlwiMTAxMTEwMDEwMTAwXCIsXCJwaW9uZ2lvXCI6XCIxMDEwMDEwMTAxMTBcIixcInByb21ldGhldXMgbmVvcG9saXRhblwiOlwiMTEwMDEwMTAwMTEwXCIsXCJwcm9tZXRoZXVzXCI6XCIxMDEwMTAxMDAxMTBcIixcIm15c3RlcnkgIzFcIjpcIjExMDAxMDEwMTAxMFwiLFwic2l4IHRvbmUgc3ltbWV0cmljXCI6XCIxMTAwMTEwMDExMDBcIixcIndob2xlIHRvbmVcIjpcIjEwMTAxMDEwMTAxMFwiLFwibWVzc2lhZW5cXCdzIG1vZGUgIzVcIjpcIjExMDAwMTExMDAwMVwiLFwibWlub3IgYmx1ZXNcIjpcIjEwMDEwMTExMDAxMFwiLFwibG9jcmlhbiBtYWpvclwiOlwiMTAxMDExMTAxMDEwXCIsXCJkb3VibGUgaGFybW9uaWMgbHlkaWFuXCI6XCIxMTAwMTAxMTEwMDFcIixcImhhcm1vbmljIG1pbm9yXCI6XCIxMDExMDEwMTEwMDFcIixcImFsdGVyZWRcIjpcIjExMDExMDEwMTAxMFwiLFwibG9jcmlhbiAjMlwiOlwiMTAxMTAxMTAxMDEwXCIsXCJtaXhvbHlkaWFuIGI2XCI6XCIxMDEwMTEwMTEwMTBcIixcImx5ZGlhbiBkb21pbmFudFwiOlwiMTAxMDEwMTEwMTEwXCIsXCJseWRpYW5cIjpcIjEwMTAxMDExMDEwMVwiLFwibHlkaWFuIGF1Z21lbnRlZFwiOlwiMTAxMDEwMTAxMTAxXCIsXCJkb3JpYW4gYjJcIjpcIjExMDEwMTAxMDExMFwiLFwibWVsb2RpYyBtaW5vclwiOlwiMTAxMTAxMDEwMTAxXCIsXCJsb2NyaWFuXCI6XCIxMTAxMDExMDEwMTBcIixcInVsdHJhbG9jcmlhblwiOlwiMTEwMTEwMTAxMTAwXCIsXCJsb2NyaWFuIDZcIjpcIjExMDEwMTEwMDExMFwiLFwiYXVnbWVudGVkIGhlcHRhdG9uaWNcIjpcIjEwMDExMTAxMTAwMVwiLFwicm9tYW5pYW4gbWlub3JcIjpcIjEwMTEwMDExMDExMFwiLFwiZG9yaWFuICM0XCI6XCIxMDExMDAxMTAxMTBcIixcImx5ZGlhbiBkaW1pbmlzaGVkXCI6XCIxMDExMDAxMTAxMDFcIixcInBocnlnaWFuXCI6XCIxMTAxMDEwMTEwMTBcIixcImxlYWRpbmcgd2hvbGUgdG9uZVwiOlwiMTAxMDEwMTAxMDExXCIsXCJseWRpYW4gbWlub3JcIjpcIjEwMTAxMDExMTAxMFwiLFwicGhyeWdpYW4gZG9taW5hbnRcIjpcIjExMDAxMTAxMTAxMFwiLFwiYmFsaW5lc2VcIjpcIjExMDEwMTAxMTAwMVwiLFwibmVvcG9saXRhbiBtYWpvclwiOlwiMTEwMTAxMDEwMTAxXCIsXCJhZW9saWFuXCI6XCIxMDExMDEwMTEwMTBcIixcImhhcm1vbmljIG1ham9yXCI6XCIxMDEwMTEwMTEwMDFcIixcImRvdWJsZSBoYXJtb25pYyBtYWpvclwiOlwiMTEwMDExMDExMDAxXCIsXCJkb3JpYW5cIjpcIjEwMTEwMTAxMDExMFwiLFwiaHVuZ2FyaWFuIG1pbm9yXCI6XCIxMDExMDAxMTEwMDFcIixcImh1bmdhcmlhbiBtYWpvclwiOlwiMTAwMTEwMTEwMTEwXCIsXCJvcmllbnRhbFwiOlwiMTEwMDExMTAwMTEwXCIsXCJmbGFtZW5jb1wiOlwiMTEwMTEwMTEwMDEwXCIsXCJ0b2RpIHJhZ2FcIjpcIjExMDEwMDExMTAwMVwiLFwibWl4b2x5ZGlhblwiOlwiMTAxMDExMDEwMTEwXCIsXCJwZXJzaWFuXCI6XCIxMTAwMTExMDEwMDFcIixcIm1ham9yXCI6XCIxMDEwMTEwMTAxMDFcIixcImVuaWdtYXRpY1wiOlwiMTEwMDEwMTAxMDExXCIsXCJtYWpvciBhdWdtZW50ZWRcIjpcIjEwMTAxMTAwMTEwMVwiLFwibHlkaWFuICM5XCI6XCIxMDAxMTAxMTAxMDFcIixcIm1lc3NpYWVuXFwncyBtb2RlICM0XCI6XCIxMTEwMDExMTEwMDFcIixcInB1cnZpIHJhZ2FcIjpcIjExMDAxMTExMTAwMVwiLFwic3BhbmlzaCBoZXB0YXRvbmljXCI6XCIxMTAxMTEwMTEwMTBcIixcImJlYm9wXCI6XCIxMDEwMTEwMTAxMTFcIixcImJlYm9wIG1pbm9yXCI6XCIxMDExMTEwMTAxMTBcIixcImJlYm9wIG1ham9yXCI6XCIxMDEwMTEwMTExMDFcIixcImJlYm9wIGxvY3JpYW5cIjpcIjExMDEwMTExMTAxMFwiLFwibWlub3IgYmVib3BcIjpcIjEwMTEwMTAxMTAxMVwiLFwiZGltaW5pc2hlZFwiOlwiMTAxMTAxMTAxMTAxXCIsXCJpY2hpa29zdWNob1wiOlwiMTAxMDExMTEwMTAxXCIsXCJtaW5vciBzaXggZGltaW5pc2hlZFwiOlwiMTAxMTAxMDExMTAxXCIsXCJoYWxmLXdob2xlIGRpbWluaXNoZWRcIjpcIjExMDExMDExMDExMFwiLFwia2FmaSByYWdhXCI6XCIxMDAxMTEwMTAxMTFcIixcIm1lc3NpYWVuXFwncyBtb2RlICM2XCI6XCIxMDEwMTExMDEwMTFcIixcImNvbXBvc2l0ZSBibHVlc1wiOlwiMTAxMTExMTEwMTEwXCIsXCJtZXNzaWFlblxcJ3MgbW9kZSAjM1wiOlwiMTAxMTEwMTExMDExXCIsXCJtZXNzaWFlblxcJ3MgbW9kZSAjN1wiOlwiMTExMTAxMTExMTAxXCIsXCJjaHJvbWF0aWNcIjpcIjExMTExMTExMTExMVwiLFwiaW9uaWFuXCI6XCIxMDEwMTEwMTAxMDFcIixcIm1pbm9yXCI6XCIxMDExMDEwMTEwMTBcIn0nKX19LGU9e307ZnVuY3Rpb24gbyhhKXt2YXIgaT1lW2FdO2lmKHZvaWQgMCE9PWkpcmV0dXJuIGkuZXhwb3J0czt2YXIgcj1lW2FdPXtleHBvcnRzOnt9fTtyZXR1cm4gblthXShyLHIuZXhwb3J0cyxvKSxyLmV4cG9ydHN9by5kPShuLGUpPT57Zm9yKHZhciBhIGluIGUpby5vKGUsYSkmJiFvLm8obixhKSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sYSx7ZW51bWVyYWJsZTohMCxnZXQ6ZVthXX0pfSxvLm89KG4sZSk9Pk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLGUpLG8ucj1uPT57XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkobixTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkobixcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX07dmFyIGE9e307KCgpPT57by5yKGEpLG8uZChhLHtjaG9yZDooKT0+bSxjaG9yZHM6KCk9PnQsaW5saW5lQ2hvcmQ6KCk9PnIsc2NhbGU6KCk9PmMsc2NhbGVzOigpPT5zfSk7dmFyIG49byg3MjIpLGU9byg0MTMpLGk9ZnVuY3Rpb24obyl7dmFyIGE9by5zY2FsZSxpPW8uY2hvcmQscj1hfHxpLHQ9YT9cInNjYWxlXCI6XCJjaG9yZFwiO2lmKFwic3RyaW5nXCIhPXR5cGVvZiByKXRocm93IG5ldyBFcnJvcihcIlwiLmNvbmNhdChyLFwiIGlzIG5vdCBhIHZhbGlkIGlucHV0IGZvciBcIikuY29uY2F0KHQpKTt2YXIgcyxtLGM9ci5pbmRleE9mKFwiIFwiKTstMT09PWM/KHM9ci5zbGljZSgxKSxtPXJbMF0sXCJiXCIhPT1yWzFdJiZcIiNcIiE9PXJbMV18fChzPXIuc2xpY2UoMiksbSs9clsxXSkpOihzPXIuc2xpY2UoLTE9PT1jPzE6YysxKSxtPXIuc2xpY2UoMCxjKSk7dmFyIGQ9ZnVuY3Rpb24obil7cmV0dXJue1wiQyNcIjpcIkRiXCIsXCJEI1wiOlwiRWJcIixcIkYjXCI6XCJHYlwiLFwiRyNcIjpcIkFiXCIsXCJBI1wiOlwiQmJcIn1bbi50b1VwcGVyQ2FzZSgpXXx8bi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStuLnNsaWNlKDEpfShtLnJlcGxhY2UoL1xcZC9nLFwiXCIpKSxsPVwiXCIhPT1tLnJlcGxhY2UoL1xcRC9nLFwiXCIpPyttLnJlcGxhY2UoL1xcRC9nLFwiXCIpOjQ7aWYoaXNOYU4obCkpdGhyb3cgbmV3IEVycm9yKFwiXCIuY29uY2F0KG1bMF0sXCIgZG9lcyBub3QgaGF2ZSBhIHZhbGlkIG9jdGF2ZVwiKSk7aWYoIW5bc10mJiFlW3NdKXRocm93IG5ldyBFcnJvcihcIlwiLmNvbmNhdChyLFwiIGlzIG5vdCBhIHZhbGlkIFwiKS5jb25jYXQodCkpO2Zvcih2YXIgYj1mdW5jdGlvbihuLGUpe3ZhciBvPVtcIkNcIixcIkRiXCIsXCJEXCIsXCJFYlwiLFwiRVwiLFwiRlwiLFwiR2JcIixcIkdcIixcIkFiXCIsXCJBXCIsXCJCYlwiLFwiQlwiXSxhPW8ubWFwKChmdW5jdGlvbihuKXtyZXR1cm4gbitlfSkpLGk9by5tYXAoKGZ1bmN0aW9uKG4pe3JldHVybiBuKyhlKzEpfSkpLHI9YS5jb25jYXQoaSk7cmV0dXJuIHIuc2xpY2Uoci5pbmRleE9mKG4rZSkpfShkLGwpLHU9W10scD0wLGg9MCxmPWE/bjplO3A8ZltzXS5sZW5ndGg7KVwiMVwiPT09ZltzXVtwXSYmdS5wdXNoKGJbaF0pLHArKyxoKys7cmV0dXJuIHV9LHI9ZnVuY3Rpb24obil7dmFyIGUsbyxhPVwiYjlzdXNcIixyPTQ7cmV0dXJuIG4uaW5jbHVkZXMoYSk/KG89YSxlPW4uc2xpY2UoMCxuLmluZGV4T2YoYSkpKTooZT1uWzBdLG89bi5zbGljZSgxKSxcImJcIiE9PW5bMV0mJlwiI1wiIT09blsxXXx8KGUrPW5bMV0sbz1uLnNsaWNlKDIpKSksbi5pbmNsdWRlcyhcIl9cIikmJihyPStuLnNwbGl0KFwiX1wiKVsxXSxvPW8uc2xpY2UoMCxvLmluZGV4T2YoXCJfXCIpKSksaSh7Y2hvcmQ6ZStyK1wiIFwiK299KX0sdD1mdW5jdGlvbigpe3JldHVybiBPYmplY3Qua2V5cyhlKX0scz1mdW5jdGlvbigpe3JldHVybiBPYmplY3Qua2V5cyhuKX0sbT1mdW5jdGlvbihuKXtyZXR1cm4gaSh7Y2hvcmQ6bn0pfSxjPWZ1bmN0aW9uKG4pe3JldHVybiBpKHtzY2FsZTpufSl9fSkoKTt2YXIgaT1leHBvcnRzO2Zvcih2YXIgciBpbiBhKWlbcl09YVtyXTthLl9fZXNNb2R1bGUmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShpLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1haW4uanMubWFwIiwgImltcG9ydCB7IGlubGluZUNob3JkIH0gZnJvbSAnaGFybW9uaWNzJztcblxuZXhwb3J0IGNvbnN0IFJFX1NFUEFSQVRPUiA9IC9cXHwvO1xuZXhwb3J0IGNvbnN0IFJFX1BBVFRFUk4gPSAvXig/Olt4Xy1dfFxcWy4rP1xcXSkrJC87XG5leHBvcnQgY29uc3QgUkVfTlVNQkVSID0gL14oPzpcXC4/XFxkK3xcXGQrKD86XFwuXFxkKyk/KSQvO1xuZXhwb3J0IGNvbnN0IFJFX0NIT1JEID0gL15bYS1nQS1HXVteI1xcc10qXFxkKyg/OlxcLlxcLik/JC87XG5leHBvcnQgY29uc3QgUkVfTk9URSA9IC9eW2EtZ0EtR11bI2JdP1xcZCskLztcbmV4cG9ydCBjb25zdCBSRV9NT0RFID0gL14oPyFbaXZJVl17MSwzfSlbYS16XXsyLH0vO1xuZXhwb3J0IGNvbnN0IFJFX1BST0cgPSAvXltpdklWXXsxLDN9XHUwMEIwPyQvO1xuZXhwb3J0IGNvbnN0IFJFX1RSSU0gPSAvXFwuKyQvO1xuXG5jb25zdCBDQUNIRSA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gc3BsaXQodmFsdWUpIHtcbiAgbGV0IGRhdGEgPSBbXTtcbiAgdHJ5IHtcbiAgICBkYXRhID0gSlNPTi5zdHJpbmdpZnkodmFsdWUuc3BsaXQoLyg/PVtcXGRbXFxdeF8tXSkvKSk7XG4gICAgZGF0YSA9IGRhdGEucmVwbGFjZSgvLFwiXFxbXCIsL2csICcsIFsnKTtcbiAgICBkYXRhID0gZGF0YS5yZXBsYWNlKC9cIlxcW1wiLC9nLCAnWycpO1xuICAgIGRhdGEgPSBkYXRhLnJlcGxhY2UoLyxcIlxcXVwiL2csICddJyk7XG4gICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBpZ25vcmVcbiAgfVxuICByZXR1cm4gZGF0YTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxldmVsKHZhbHVlKSB7XG4gIGlmICghQ0FDSEVbdmFsdWVdKSB7XG4gICAgaWYgKHZhbHVlLmluY2x1ZGVzKCclJykpIHtcbiAgICAgIENBQ0hFW3ZhbHVlXSA9IDEyNyAqIHBhcnNlRmxvYXQoYC4ke3ZhbHVlfWApO1xuICAgIH0gZWxzZSBpZiAodmFsdWUuaW5jbHVkZXMoJy8nKSkge1xuICAgICAgY29uc3QgW2EsIGJdID0gdmFsdWUuc3BsaXQoJy8nKTtcblxuICAgICAgQ0FDSEVbdmFsdWVdID0gYSAvIGI7XG4gICAgfSBlbHNlIGlmICh2YWx1ZS5pbmNsdWRlcygnKicpKSB7XG4gICAgICBjb25zdCBbYSwgYl0gPSB2YWx1ZS5zcGxpdCgnKicpO1xuXG4gICAgICBDQUNIRVt2YWx1ZV0gPSBhICogYjtcbiAgICB9IGVsc2Uge1xuICAgICAgQ0FDSEVbdmFsdWVdID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBDQUNIRVt2YWx1ZV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZShyZSwgdmFsdWUpIHtcbiAgaWYgKCFDQUNIRVtyZS5zb3VyY2UgKyB2YWx1ZV0pIHtcbiAgICBDQUNIRVtyZS5zb3VyY2UgKyB2YWx1ZV0gPSByZS50ZXN0KHZhbHVlKTtcbiAgfVxuICByZXR1cm4gQ0FDSEVbcmUuc291cmNlICsgdmFsdWVdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcm9ncmVzc2lvbih2YWx1ZSkge1xuICByZXR1cm4gdmFsaWRhdGUoUkVfUFJPRywgdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXR0ZXJuKHZhbHVlKSB7XG4gIHJldHVybiB2YWxpZGF0ZShSRV9QQVRURVJOLCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICByZXR1cm4gdmFsaWRhdGUoUkVfTlVNQkVSLCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Nob3JkKHZhbHVlKSB7XG4gIHJldHVybiB2YWxpZGF0ZShSRV9DSE9SRCwgdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOb3RlKHZhbHVlKSB7XG4gIHJldHVybiB2YWxpZGF0ZShSRV9OT1RFLCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc01vZGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbGlkYXRlKFJFX01PREUsIHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFR5cGUodmFsdWUpIHtcbiAgY29uc3Qga2V5ID0gYFQke3ZhbHVlfWA7XG4gIGlmICghQ0FDSEVba2V5XSkge1xuICAgIGlmIChpc05vdGUodmFsdWUpKSBDQUNIRVtrZXldID0gJ25vdGUnO1xuICAgIGVsc2UgaWYgKGlzQ2hvcmQodmFsdWUpKSBDQUNIRVtrZXldID0gJ2Nob3JkJztcbiAgICBlbHNlIGlmIChpc1BhdHRlcm4odmFsdWUpKSBDQUNIRVtrZXldID0gJ3BhdHRlcm4nO1xuICAgIGVsc2UgaWYgKGlzTW9kZSh2YWx1ZSkpIENBQ0hFW2tleV0gPSAnbW9kZSc7XG4gICAgZWxzZSBpZiAoaXNOdW1iZXIodmFsdWUpKSBDQUNIRVtrZXldID0gJ251bWJlcic7XG4gICAgZWxzZSBDQUNIRVtrZXldID0gJ3ZhbHVlJztcbiAgfVxuICByZXR1cm4gQ0FDSEVba2V5XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybShleHByZXNzaW9uKSB7XG4gIGlmICghZXhwcmVzc2lvbiB8fCB0eXBlb2YgZXhwcmVzc2lvbiAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGluZyBhIHZhbGlkIHN0cmluZywgZ2l2ZW4gJyR7ZXhwcmVzc2lvbn0nYCk7XG4gIH1cblxuICBpZiAoQ0FDSEVbYCQke2V4cHJlc3Npb259YF0pIHJldHVybiBDQUNIRVtgJCR7ZXhwcmVzc2lvbn1gXTtcblxuICBjb25zdCB0b2tlbnMgPSBleHByZXNzaW9uLnNwbGl0KC9cXHMrLyk7XG5cbiAgaWYgKCF0b2tlbnMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RpbmcgYSB2YWxpZCBleHByZXNzaW9uLCBnaXZlbiAnJHtleHByZXNzaW9ufSdgKTtcbiAgfVxuXG4gIGNvbnN0IGFzdCA9IFtdO1xuICBjb25zdCBjYXJyeSA9IFtdO1xuXG4gIGZ1bmN0aW9uIGFkZCh0eXBlLCB2YWx1ZSkge1xuICAgIGNvbnN0IGl0ZW0gPSB7IHR5cGUsIHZhbHVlIH07XG5cbiAgICBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgaXRlbS52YWx1ZSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBsZXZlbCh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gJ2Nob3JkJyAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpdGVtLnZhbHVlID0gaW5saW5lQ2hvcmQodmFsdWUucmVwbGFjZShSRV9UUklNLCAnJykpO1xuXG4gICAgICBpZiAodmFsdWUuaW5jbHVkZXMoJy4uJykpIHtcbiAgICAgICAgaXRlbS51bmZvbGQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlID09PSAndmFsdWUnICYmIHZhbHVlLmluZGV4T2YoJ3gnKSA+IC0xKSB7XG4gICAgICBjb25zdCB4ID0gdmFsdWUuc3BsaXQoJ3gnKTtcblxuICAgICAgaWYgKCEoaXNOdW1iZXIoeFswXSkgJiYgaXNOdW1iZXIoeFsxXSkpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0aW5nIHZhbGlkIG51bWJlcnMgZm9yICR7dHlwZX0sIGdpdmVuICcke3ZhbHVlfSdgKTtcbiAgICAgIH1cblxuICAgICAgaXRlbS52YWx1ZSA9IHBhcnNlSW50KHhbMF0sIDEwKTtcbiAgICAgIGl0ZW0ucmVwZWF0ID0gcGFyc2VJbnQoeFsxXSwgMTApO1xuICAgICAgaXRlbS50eXBlID0gJ251bWJlcic7XG4gICAgfVxuXG4gICAgYXN0LnB1c2goaXRlbSk7XG4gIH1cblxuICB0b2tlbnMucmVkdWNlKChwcmV2LCBjdXIsIGkpID0+IHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGNvbnN0IG5leHQgPSB0b2tlbnNbaSArIDFdO1xuICAgIGNvbnN0IGxhc3QgPSBhc3RbYXN0Lmxlbmd0aCAtIDFdIHx8IHt9O1xuXG4gICAgaWYgKFJFX1NFUEFSQVRPUi50ZXN0KGN1cikpIHtcbiAgICAgIGFkZCgnY2hvcmQnLCBjdXIuc3BsaXQoUkVfU0VQQVJBVE9SKSk7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGN1ciA9PT0gJ3N0cmluZycgJiYgKFxuICAgICAgKGN1ci5pbmNsdWRlcygnLycpICYmIGN1ci5pbmRleE9mKCcvJykgPiAwKVxuICAgICAgfHwgKGN1ci5pbmNsdWRlcygnKicpICYmIGN1ci5pbmRleE9mKCcqJykgPiAwKVxuICAgICAgfHwgKGN1ci5pbmNsdWRlcygnJScpICYmIGN1ci5pbmRleE9mKCclJykgPiAwKVxuICAgICkpIHtcbiAgICAgIGFkZCgnbnVtYmVyJywgbGV2ZWwoY3VyKSk7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAoY3VyLmluZGV4T2YoJyUnKSA+IC0xKSB7XG4gICAgICBpZiAoY3VyID09PSAnJScpIHtcbiAgICAgICAgaWYgKCFsYXN0LnR5cGUpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgZXhwcmVzc2lvbiB0byByZXBlYXQsIGdpdmVuICcke3Rva2Vucy5zbGljZSgwLCBpKS5qb2luKCcgJyl9J2ApO1xuICAgICAgICB9XG5cbiAgICAgICAgbGFzdC5yZXBlYXQgPSBsYXN0LnJlcGVhdCB8fCAxO1xuICAgICAgICBsYXN0LnJlcGVhdCArPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWRkKCdwYXJhbScsIGN1cik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmIChpc1Byb2dyZXNzaW9uKGN1cikpIHtcbiAgICAgIGxhc3QudmFsdWUgKz0gYCAke2N1cn1gO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKGN1ci5jaGFyQXQoKSA9PT0gJyMnKSB7XG4gICAgICBhZGQoJ2NoYW5uZWwnLCBjdXIpO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKGlzTm90ZShjdXIpIHx8IGlzQ2hvcmQoY3VyKSB8fCBpc01vZGUoY3VyKSB8fCBpc051bWJlcihjdXIpKSB7XG4gICAgICBjYXJyeS5wdXNoKGN1cik7XG5cbiAgICAgIGlmIChcbiAgICAgICAgIW5leHRcbiAgICAgICAgfHwgY2FycnkubGVuZ3RoID09PSAzXG4gICAgICAgIHx8ICEoaXNOb3RlKG5leHQpIHx8IGlzTW9kZShuZXh0KSB8fCBpc051bWJlcihuZXh0KSlcbiAgICAgICkge1xuICAgICAgICBjb25zdCBvbGQgPSBjYXJyeS5zcGxpY2UoMCwgY2FycnkubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgdGVzdCA9IG9sZFswXTtcblxuICAgICAgICBsZXQgbW9kZSA9IG9sZFsxXTtcbiAgICAgICAgbGV0IG9jdGF2ZSA9IG9sZFsyXTtcblxuICAgICAgICBpZiAoIW9jdGF2ZSAmJiBpc051bWJlcihtb2RlKSkge1xuICAgICAgICAgIG9jdGF2ZSA9IG1vZGU7XG4gICAgICAgICAgbW9kZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICB0ZXN0Lmxlbmd0aCA8IDJcbiAgICAgICAgICAmJiBpc05vdGUodGVzdClcbiAgICAgICAgICAmJiAoaXNNb2RlKG1vZGUpIHx8IGlzTnVtYmVyKG9jdGF2ZSkpXG4gICAgICAgICkge1xuICAgICAgICAgIGFkZCgnbW9kZScsIG9sZC5qb2luKCcgJykpO1xuICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICB9XG5cbiAgICAgICAgb2xkLmZvckVhY2goeCA9PiB7XG4gICAgICAgICAgYWRkKHgubGVuZ3RoID4gMSB8fCAhaXNOb3RlKHgpID8gZ2V0VHlwZSh4KSA6ICdtb2RlJywgeCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjdXIgPT09ICdzdHJpbmcnICYmIGN1ci5pbmRleE9mKCcuLicpID4gLTEpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gY3VyLnNwbGl0KCcuLicpO1xuICAgICAgY29uc3QgbWluID0gcGFydHNbMF0gfHwgMTtcbiAgICAgIGNvbnN0IG1heCA9IHBhcnRzWzFdIHx8IEluZmluaXR5O1xuXG4gICAgICB0eXBlID0gJ3NsaWNlJztcbiAgICAgIGN1ciA9IFttaW4sIG1heF07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjdXIgPT09ICdzdHJpbmcnICYmIChjdXIuY2hhckF0KCkgPT09ICcvJyB8fCBjdXIuY2hhckF0KCkgPT09ICcqJykpIHtcbiAgICAgIGNvbnN0IG9wZXJhdG9yID0gY3VyLmNoYXJBdCgpID09PSAnLycgPyAnZGl2aWRlJyA6ICdtdWx0aXBseSc7XG4gICAgICBjb25zdCBudW1iZXIgPSBjdXIuc3Vic3RyKDEpO1xuXG4gICAgICBpZiAoIWlzTnVtYmVyKG51bWJlcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RpbmcgYSB2YWxpZCBleHByZXNzaW9uIHRvICR7b3BlcmF0b3J9LCBnaXZlbiAnJHt0b2tlbnMuc2xpY2UoMCwgaSkuam9pbignICcpfSAke2N1cn0nYCk7XG4gICAgICB9XG5cbiAgICAgIGFkZChvcGVyYXRvciwgcGFyc2VGbG9hdChudW1iZXIpKTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmICghdHlwZSAmJiBnZXRUeXBlKGN1cikgPT09ICd2YWx1ZScgJiYgQXJyYXkuaXNBcnJheShsYXN0LnZhbHVlKSkge1xuICAgICAgbGFzdC52YWx1ZVsxXSA9IGxhc3QudmFsdWVbMV0gfHwgJyc7XG4gICAgICBsYXN0LnZhbHVlWzFdICs9IGxhc3QudmFsdWVbMV0gPyAnICcgOiAnJztcbiAgICAgIGxhc3QudmFsdWVbMV0gKz0gY3VyO1xuICAgICAgcmV0dXJuIGN1cjtcbiAgICB9XG5cbiAgICBhZGQodHlwZSB8fCBnZXRUeXBlKGN1ciksIHR5cGVvZiBjdXIgPT09ICdzdHJpbmcnICYmIGlzTnVtYmVyKGN1cikgPyBwYXJzZUludChjdXIsIDEwKSA6IGN1cik7XG4gICAgcmV0dXJuIGN1cjtcbiAgfSwgbnVsbCk7XG5cbiAgQ0FDSEVbYCQke2V4cHJlc3Npb259YF0gPSBhc3Q7XG4gIHJldHVybiBhc3Q7XG59XG4iLCAiLyoqXG4gKiBUYWtlIGEgc3RyaW5nIGlucHV0IGFuZCBjaGVjayBpZiBpdCBzIGEgbm90ZSBuYW1lIG9yIG5vdFxuICogQHBhcmFtICB7U3RyaW5nfSBzdHIgTm90ZSBuYW1lIGUuZy4gYzRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IFJldHVybiB0cnVlIGZvciBjNCBvciByZXR1cm4gZmFsc2UgZm9yIHNvbWV0aGluZyBsaWtlIENNXG4gKi9cbmV4cG9ydCBjb25zdCBpc05vdGUgPSAoc3RyOiBzdHJpbmcpOiBib29sZWFuID0+XG4gIC9eW2EtZ0EtR10oPzojfGIpP1xcZCQvLnRlc3Qoc3RyKTtcblxuLyoqXG4gKiBUYWtlIGEgU3RyaW5nIGlucHV0IHN1Y2ggYXMgeHh4W3h4W3h4XV1cbiAqIGFuZCByZXR1cm4gYW4gQXJyYXkgYXMgWyd4JywgJ3gnLCAneCcsIFsneCcsICd4JywgWyd4JywgJ3gnXV1dXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbmV4cG9ydCBjb25zdCBleHBhbmRTdHIgPSAoc3RyOiBzdHJpbmcpOiBhbnkgPT4ge1xuICBzdHIgPSBKU09OLnN0cmluZ2lmeShzdHIuc3BsaXQoJycpKTtcbiAgc3RyID0gc3RyLnJlcGxhY2UoLyxcIlxcW1wiLC9nLCAnLCBbJyk7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKC9cIlxcW1wiLC9nLCAnWycpO1xuICBzdHIgPSBzdHIucmVwbGFjZSgvLFwiXFxdXCIvZywgJ10nKTtcbiAgcmV0dXJuIEpTT04ucGFyc2Uoc3RyKTtcbn07XG5cbi8qKlxuICogQmFzaWMgQXJyYXkgcmFuZG9taXplclxuICogQHBhcmFtICB7QXJyYXl9IGFyclxuICogQHBhcmFtICB7Ym9vbGVhbn0gZnVsbFNodWZmbGUgRW5zdXJlIG5vIGVsZW1lbnRzIHJlbWFpbiBpbiBvbGQgcGxhY2VcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5leHBvcnQgY29uc3Qgc2h1ZmZsZSA9IChhcnI6IGFueVtdLCBmdWxsU2h1ZmZsZTogYm9vbGVhbiA9IHRydWUpOiBzdHJpbmdbXSA9PiB7XG4gIGNvbnN0IGxhc3RJbmRleDogbnVtYmVyID0gYXJyLmxlbmd0aCAtIDE7XG5cbiAgLy8gU2h1ZmZsZSBhbGdvcml0aG0gYnkgUmljaGFyZCBEdXJzdGVuZmVsZCAoRG9uYWxkIEUuIEtudXRoKSwgYWxzbyBSb25hbGQgRmlzaGVyIGFuZCBGcmFuayBZYXRlcy5cbiAgLy8gXCJGdWxsIFNodWZmbGVcIiBNb2RpZmljYXRpb24gdG8gZW5zdXJlIG5vIGVsZW1lbnRzIHJlbWFpbiBpbiB0aGVpciBvcmlnaW5hbCBwbGFjZSAoYnkgdGFraW5nIGVhY2ggZWxlbWVudCBvbmNlXG4gIC8vIGFuZCBzd2FwcGluZyB3aXRoIGFueSByZW1haW5pbmcgZWxlbWVudHMpXG4gIGFyci5mb3JFYWNoKChlbCwgaWR4OiBudW1iZXIpID0+IHtcbiAgICBpZiAoaWR4ID49IGxhc3RJbmRleCkge1xuICAgICAgLy8gTm8gc2h1ZmZsaW5nIGxhc3QgZWxlbWVudFxuICAgICAgLy8gT25lIGJlZm9yZSBsYXN0IGlzIGFsd2F5cyBzd2FwcGVkIHdpdGggbGFzdCBhdCB0aGUgZW5kIG9mIHRoZSBsb29wXG4gICAgICAvLyBTaW5jZSBwcmV2aW91cyBzd2FwcyBjYW4gbW92ZSBsYXN0IGVsZW1lbnQgaW50byBvdGhlciBwbGFjZXMsIHRoZXJlIGlzIHN0aWxsIGEgcmFuZG9tIHNodWZmbGUgb2YgbGFzdCBlbGVtZW50XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFN3YXAgZWwgd2l0aCBvbmUgb2YgdGhlIGhpZ2hlciBlbGVtZW50cyByYW5kb21seVxuICAgIGxldCBybmQ7XG4gICAgcm5kID0gZnVsbFNodWZmbGVcbiAgICAgID8gLy8gUGljayByYW5kb20gbnVtYmVyIGZyb20gaWR4KzEgdG8gbGFzdEluZGV4IChNb2RpZmllZCBhbGdvcml0aG0sIChOLTEpISBjb21iaW5hdGlvbnMpXG4gICAgICAgIC8vIE1hdGgucmFuZG9tIC0+IFswLCAxKSAtPiBbMCwgbGFzdEluZGV4LWlkeCApIC0tZmxvb3ItPiBbMCwgbGFzdEluZGV4LWlkeC0xXVxuICAgICAgICAvLyBybmQgPSBbMCwgbGFzdEluZGV4LWlkeC0xXSArIDEgKyBpZHggPSBbMSArIGlkeCwgbGFzdEluZGV4XVxuICAgICAgICAvLyAoT3JpZ2luYWwgYWxnb3JpdGhtIHdvdWxkIHBpY2sgcm5kID0gW2lkeCwgbGFzdEluZGV4XSwgdGh1cyBhbnkgZWxlbWVudCBjb3VsZCBhcnJpdmUgYmFjayBpbnRvIGl0cyBzbG90KVxuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobGFzdEluZGV4IC0gaWR4KSkgKyAxICsgaWR4XG4gICAgICA6IC8vIFBpY2sgcmFuZG9tIG51bWJlciBmcm9tIGlkeCB0byBsYXN0SW5kZXggKFVubW9kaWZpZWQgUmljaGFyZCBEdXJzdGVuZmVsZCwgTiEgY29tYmluYXRpb25zKVxuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobGFzdEluZGV4ICsgMSAtIGlkeCkpICsgaWR4O1xuICAgIGFycltpZHhdID0gYXJyW3JuZF07XG4gICAgYXJyW3JuZF0gPSBlbDtcbiAgfSk7XG5cbiAgcmV0dXJuIGFycjtcbn07XG5cbi8qKlxuICogUmV0dXJuIGFuIGFycmF5IG9mIG51bWJlcnMgcmVsYXRpdmUgdG8gbWF4TGV2ZWwgfHwgMTI3IG9yZGVyZWQgaW4gYSBTaW5lIHdhdmUgZm9ybWF0XG4gKiBUaGlzIGlzIHVzZWQgYnkgdGhlIGBzaXp6bGVgIHBhcmFtIG9mIHRoZSBgY2xpcGAgbWV0aG9kIHRvIGFkZCBhIHJ1ZGltZW50YXJ5IHZhcmlhdGlvbiB0byB0aGUgYWNjZW50IG9mIGVhY2ggbm90ZVxuICogQHBhcmFtIHtOdW1iZXJ9IG1heExldmVsIEEgbnVtYmVyIGJldHdlZW4gbm90IG1vcmUgdGhhbiAxMjdcbiAqIEByZXR1cm4ge0FycmF5fSAgRXhhbXBsZSBvdXRwdXQgWzYzLCA5MCwgMTEwLCAxMjcsIDExMCwgOTAsIDYzLCAwLCA2MywgOTAsIDExMCwgMTI3LCAxMTAsIDkwLCA2MywgMF1cbiAqL1xuZXhwb3J0IGNvbnN0IHNpenpsZU1hcCA9IChtYXhMZXZlbDogbnVtYmVyID0gMTI3KTogbnVtYmVyW10gPT4ge1xuICBjb25zdCBwaSA9IE1hdGguUEk7XG4gIGNvbnN0IHBpQXJyOiBudW1iZXJbXSA9IFtcbiAgICBwaSAvIDYsXG4gICAgcGkgLyA0LFxuICAgIHBpIC8gMyxcbiAgICBwaSAvIDIsXG4gICAgKDIgKiBwaSkgLyAzLFxuICAgICgzICogcGkpIC8gNCxcbiAgICAoNSAqIHBpKSAvIDYsXG4gICAgcGksXG4gIF07XG4gIGNvbnN0IHBpQXJyUmV2OiBudW1iZXJbXSA9IFtcbiAgICAwLFxuICAgIHBpIC8gNixcbiAgICBwaSAvIDQsXG4gICAgcGkgLyAzLFxuICAgIHBpIC8gMixcbiAgICAoMiAqIHBpKSAvIDMsXG4gICAgKDMgKiBwaSkgLyA0LFxuICAgICg1ICogcGkpIC8gNixcbiAgXTtcbiAgcGlBcnJSZXYucmV2ZXJzZSgpO1xuICBjb25zdCBhcnI6IG51bWJlcltdID0gcGlBcnIuY29uY2F0KHBpQXJyUmV2KTtcbiAgcmV0dXJuIGFyci5tYXAoZWxlbWVudCA9PiBNYXRoLnJvdW5kKE1hdGguc2luKGVsZW1lbnQpICogbWF4TGV2ZWwpKTtcbn07XG5cbi8qKlxuICogUGljayBvbmUgaXRlbSByYW5kb21seSBmcm9tIGFuIGFycmF5IGFuZCByZXR1cm4gaXRcbiAqIEBwYXJhbSBhcnJcbiAqL1xuZXhwb3J0IGNvbnN0IHBpY2tPbmUgPSAoYXJyOiBhbnlbXSkgPT5cbiAgYXJyLmxlbmd0aCA+IDEgPyBhcnJbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV0gOiBhcnJbMF07XG5cbi8qKlxuICogQm9vbGVhbiBnZW5lcmF0b3JcbiAqL1xuZXhwb3J0IGNvbnN0IGRpY2UgPSAoKSA9PiAhIU1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG5cbi8qKlxuICogUG9seWZpbGwgZm9yIEFycmF5LnByb3RvdHlwZS5mbGF0XG4gKi9cbmV4cG9ydCBjb25zdCBmbGF0ID0gKGFycjogYW55W11bXSkgPT5cbiAgYXJyLnJlZHVjZSgoYWNjLCB2YWwpID0+IGFjYy5jb25jYXQodmFsKSwgW10pO1xuIiwgImltcG9ydCB7IHNjYWxlIH0gZnJvbSAnaGFybW9uaWNzJztcbmltcG9ydCB7IHBpY2tPbmUsIGRpY2UgfSBmcm9tICcuL3V0aWxzJztcblxuLyoqXG4gKiBHZXQgdGhlIGNob3JkcyB0aGF0IGdvIHdpdGggYSBnaXZlbiBzY2FsZS9tb2RlXG4gKiBUaGlzIGlzIHVzZWZ1bCBvbmx5IGluIGNhc2UgeW91IHdhbnQgdG8gY2hlY2sgd2hhdCBjaG9yZHMgd29yayB3aXRoIGEgc2NhbGUvbW9kZVxuICogc28gdGhhdCB5b3UgY2FuIGNvbWUgdXAgd2l0aCBjaG9yZCBwcm9ncmVzc2lvbnNcbiAqIEBwYXJhbSAge1N0cmluZ30gbW9kZSBlLmcuIG1ham9yXG4gKiBAcmV0dXJuIHtBcnJheX0gZS5nLlsnSScsICdpaScsICdpaWknLCAnSVYnLCAnVicsICd2aScsICd2aWlcdTAwQjAnXVxuICovXG5leHBvcnQgY29uc3QgZ2V0Q2hvcmREZWdyZWVzID0gKG1vZGU6IHN0cmluZykgPT4ge1xuICBjb25zdCB0aGVSb21hbnM6IE5WUDxzdHJpbmdbXT4gPSB7XG4gICAgaW9uaWFuOiBbJ0knLCAnaWknLCAnaWlpJywgJ0lWJywgJ1YnLCAndmknLCAndmlpXHUwMEIwJ10sXG4gICAgZG9yaWFuOiBbJ2knLCAnaWknLCAnSUlJJywgJ0lWJywgJ3YnLCAndmlcdTAwQjAnLCAnVklJJ10sXG4gICAgcGhyeWdpYW46IFsnaScsICdJSScsICdJSUknLCAnaXYnLCAndlx1MDBCMCcsICdWSScsICd2aWknXSxcbiAgICBseWRpYW46IFsnSScsICdJSScsICdpaWknLCAnaXZcdTAwQjAnLCAnVicsICd2aScsICd2aWknXSxcbiAgICBtaXhvbHlkaWFuOiBbJ0knLCAnaWknLCAnaWlpXHUwMEIwJywgJ0lWJywgJ3YnLCAndmknLCAnVklJJ10sXG4gICAgYWVvbGlhbjogWydpJywgJ2lpXHUwMEIwJywgJ0lJSScsICdpdicsICd2JywgJ1ZJJywgJ1ZJSSddLFxuICAgIGxvY3JpYW46IFsnaVx1MDBCMCcsICdJSScsICdpaWknLCAnaXYnLCAnVicsICdWSScsICd2aWknXSxcbiAgICAnbWVsb2RpYyBtaW5vcic6IFsnaScsICdpaScsICdJSUkrJywgJ0lWJywgJ1YnLCAndmlcdTAwQjAnLCAndmlpXHUwMEIwJ10sXG4gICAgJ2hhcm1vbmljIG1pbm9yJzogWydpJywgJ2lpXHUwMEIwJywgJ0lJSSsnLCAnaXYnLCAnVicsICdWSScsICd2aWlcdTAwQjAnXSxcbiAgfTtcbiAgdGhlUm9tYW5zLm1ham9yID0gdGhlUm9tYW5zLmlvbmlhbjtcbiAgdGhlUm9tYW5zLm1pbm9yID0gdGhlUm9tYW5zLmFlb2xpYW47XG5cbiAgcmV0dXJuIHRoZVJvbWFuc1ttb2RlXSB8fCBbXTtcbn07XG5cbmNvbnN0IGlkeEJ5RGVncmVlOiBOVlA8bnVtYmVyPiA9IHtcbiAgaTogMCxcbiAgaWk6IDEsXG4gIGlpaTogMixcbiAgaXY6IDMsXG4gIHY6IDQsXG4gIHZpOiA1LFxuICB2aWk6IDYsXG59O1xuXG4vKipcbiAqIEdldCBhIGNob3JkIG5hbWUgZnJvbSBkZWdyZWVcbiAqIEBwYXJhbSAge1N0cmluZ30gcm9tYW4gZS5nLiBpaSBPUiBpaVx1MDBCMCBPUiBWN1xuICogQHJldHVybiB7U3RyaW5nfSBlLmcuIG0gT1IgbTdiNSBPUiBNYWo3XG4gKi9cbmNvbnN0IGdldENob3JkTmFtZSA9IChyb21hbjogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgLy8gcmVtb3ZlIGFueSBub24gY2hhcmFjdGVyXG4gIGNvbnN0IHN0ciA9IHJvbWFuLnJlcGxhY2UoL1xcVy9nLCAnJyk7XG4gIGxldCBwcmVmaXggPSAnTSc7XG4gIC8vIGNoZWNrIGlmIGl0IHMgbG93ZXJjYXNlXG4gIGlmIChzdHIudG9Mb3dlckNhc2UoKSA9PT0gc3RyKSB7XG4gICAgcHJlZml4ID0gJ20nO1xuICB9XG4gIGlmIChyb21hbi5pbmRleE9mKCdcdTAwQjAnKSA+IC0xKSB7XG4gICAgcmV0dXJuIHByZWZpeCArICc3YjUnO1xuICB9XG4gIGlmIChyb21hbi5pbmRleE9mKCcrJykgPiAtMSkge1xuICAgIHJldHVybiBwcmVmaXggKyAnIzUnO1xuICB9XG5cbiAgaWYgKHJvbWFuLmluZGV4T2YoJzcnKSA+IC0xKSB7XG4gICAgcmV0dXJuIHByZWZpeCA9PT0gJ00nID8gJ21hajcnIDogJ203JztcbiAgfVxuXG4gIHJldHVybiBwcmVmaXg7XG59O1xuXG4vKipcbiAqIFRha2UgdGhlIHNwZWNpZmllZCBzY2FsZSBhbmQgZGVncmVlcyBhbmQgcmV0dXJuIHRoZSBjaG9yZCBuYW1lcyBmb3IgdGhlbVxuICogVGhlc2UgY2FuIGJlIHVzZWQgYXMgdGhlIHZhbHVlIGZvciB0aGUgYG5vdGVzYCBwYXJhbSBvZiB0aGUgYGNsaXBgIG1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IG5vdGVPY3RhdmVTY2FsZSBlLmcuICdDNCBtYWpvcidcbiAqIEBwYXJhbSAge1N0cmluZ30gY2hvcmREZWdyZXNzIGUuZy4gJ0kgSVYgViBJVidcbiAqIEByZXR1cm4ge1N0cmluZ30gZS5nLiAnQ00gRk0gR00gRk0nXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRDaG9yZHNCeVByb2dyZXNzaW9uID0gKFxuICBub3RlT2N0YXZlU2NhbGU6IHN0cmluZyxcbiAgY2hvcmREZWdyZXNzOiBzdHJpbmdcbik6IHN0cmluZyA9PiB7XG4gIC8vIFNldCB0aGUgb2N0YXZlIGlmIG1pc3NpbmdcbiAgLy8gRm9yIGV4YW1wbGUgaWYgdGhlIG1ldGhvZCB3YXMgY2FsbGVkIHdpdGggYEMgbWFqb3JgIGluc3RlYWQgb2YgYEM0IG1ham9yYCwgdGhlbiBhZGQgdGhlIDRcbiAgY29uc3Qgbm90ZU9jdGF2ZVNjYWxlQXJyID0gbm90ZU9jdGF2ZVNjYWxlLnNwbGl0KCcgJyk7XG4gIGlmICghbm90ZU9jdGF2ZVNjYWxlQXJyWzBdLm1hdGNoKC9cXGQvKSkge1xuICAgIG5vdGVPY3RhdmVTY2FsZUFyclswXSArPSAnNCc7XG4gICAgbm90ZU9jdGF2ZVNjYWxlID0gbm90ZU9jdGF2ZVNjYWxlQXJyLmpvaW4oJyAnKTtcbiAgfVxuXG4gIC8vIEdldCB0aGUgc2NhbGUgZnJvbSB0aGUgZ2l2ZW4gbm90ZSBhbmQgc2NhbGUvbW9kZSBjb21iaW5hdGlvblxuICBjb25zdCBtb2RlID0gc2NhbGUobm90ZU9jdGF2ZVNjYWxlKTtcbiAgY29uc3QgY2hvcmREZWdyZWVzQXJyID0gY2hvcmREZWdyZXNzLnJlcGxhY2UoL1xccyosK1xccyovZywgJyAnKS5zcGxpdCgnICcpO1xuICAvLyBOb3cgd2UgaGF2ZSBzb21ldGhpbmcgbGlrZSBbJ2knLCAnaWknLCAnSVYnXVxuICAvLyBDb252ZXJ0IGl0IHRvIGEgY2hvcmQgZmFtaWx5IHN1Y2ggYXMgWydDbScsICdEbScsICdGTSddXG4gIGNvbnN0IGNob3JkRmFtaWx5ID0gY2hvcmREZWdyZWVzQXJyLm1hcCgocm9tYW4sIGlkeCkgPT4ge1xuICAgIGNvbnN0IGNob3JkTmFtZSA9IGdldENob3JkTmFtZShyb21hbik7IC8vIGUuZy4gbVxuICAgIC8vIGdldCB0aGUgaW5kZXggdG8gYmUgdXNlZCBieSByZW1vdmluZyBhbnkgZGlnaXQgb3Igbm9uIGFscGhhYmV0IGNoYXJhY3RlclxuICAgIGNvbnN0IHNjYWxlSWQgPSBpZHhCeURlZ3JlZVtyb21hbi5yZXBsYWNlKC9cXFd8XFxkL2csICcnKS50b0xvd2VyQ2FzZSgpXTsgLy8gZS5nLiAwXG4gICAgLy8gZ2V0IHRoZSBub3RlIGl0c2VsZlxuICAgIGNvbnN0IG5vdGUgPSBtb2RlW3NjYWxlSWRdOyAvLyBlLmcuIENcbiAgICAvLyBnZXQgdGhlIG9jdGF2ZSBvZiB0aGUgbm90ZTtcbiAgICBjb25zdCBvY3QgPSBub3RlLnJlcGxhY2UoL1xcRCsvLCAnJyk7IC8vIGUuZy4gNFxuICAgIC8vIG5vdyBnZXQgdGhlIGNob3JkXG4gICAgcmV0dXJuIG5vdGUucmVwbGFjZSgvXFxkLywgJycpICsgY2hvcmROYW1lICsgJ18nICsgb2N0O1xuICB9KTtcblxuICByZXR1cm4gY2hvcmRGYW1pbHkudG9TdHJpbmcoKS5yZXBsYWNlKC8sL2csICcgJyk7XG59O1xuXG5jb25zdCBnZXRQcm9nRmFjdG9yeSA9ICh7IFQsIFAsIEQgfTogVFBEKSA9PiB7XG4gIHJldHVybiAoY291bnQ6IG51bWJlciA9IDQpID0+IHtcbiAgICBjb25zdCBjaG9yZHMgPSBbXTtcblxuICAgIC8vIFB1c2ggcm9vdC90b25pY1xuICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoVCkpO1xuXG4gICAgbGV0IGkgPSAxO1xuXG4gICAgLy8gUGljayBhIHByZWRvbWluYW50XG4gICAgaWYgKGkgPCBjb3VudCAtIDEpIHtcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoUCkpO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIC8vIFRyeSBhbm90aGVyIHByZWRvbWluYW50XG4gICAgaWYgKGkgPCBjb3VudCAtIDEgJiYgZGljZSgpKSB7XG4gICAgICBjaG9yZHMucHVzaChwaWNrT25lKFApKTtcbiAgICAgIGkrKztcbiAgICB9XG5cbiAgICAvLy8vLy8vLy8gNCBvciBtb3JlLy8vLy8vLy8vL1xuICAgIGlmIChpIDwgY291bnQgLSAxKSB7XG4gICAgICAvLyBQaWNrIGEgZG9taW5hbnRcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoRCkpO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIGlmIChpIDwgY291bnQgLSAxKSB7XG4gICAgICAvLyBQaWNrIGEgcHJlZG9taW5hbnRcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoUCkpO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIGlmIChpIDwgY291bnQgLSAxKSB7XG4gICAgICAvLyBQaWNrIGEgZG9taW5hbnRcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoRCkpO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIC8vIFBpY2sgYSBwcmVkb21pbmFudCBpZiBwb3NzaWJsZVxuICAgIGlmIChpIDwgY291bnQgLSAxICYmIGRpY2UoKSkge1xuICAgICAgY2hvcmRzLnB1c2gocGlja09uZShQKSk7XG4gICAgICBpKys7XG4gICAgfVxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIC8vIEZpbGwgdGhlIHJlc3Qgd2l0aCBkb21pbmFudFxuICAgIHdoaWxlIChpIDwgY291bnQpIHtcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoRCkpO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIHJldHVybiBjaG9yZHM7XG4gIH07XG59O1xuXG5jb25zdCBNID0gZ2V0UHJvZ0ZhY3RvcnkoeyBUOiBbJ0knLCAndmknXSwgUDogWydpaScsICdJViddLCBEOiBbJ1YnXSB9KTtcbmNvbnN0IG0gPSBnZXRQcm9nRmFjdG9yeSh7IFQ6IFsnaScsICdWSSddLCBQOiBbJ2lpJywgJ2l2J10sIEQ6IFsnViddIH0pO1xuXG4vKipcbiAqIEdlbmVyYXRlIGEgY2hvcmQgcHJvZ3Jlc3Npb24gYmFzZWQgb24gYmFzaWMgbXVzaWMgdGhlb3J5XG4gKiB3aGVyZSB3ZSBmb2xsb3cgdG9uaWMgdG8gb3B0aW9uYWxseSBwcmVkb21pbmFudCBhbmQgdGhlbiBkb21pbmFudFxuICogYW5kIHRoZW4gcmFuZG9tbHkgdG8gcHJlZG9taW5hbnQgYW5kIGNvbnRpbnVlIHRoaXMgdGlsbCB3ZSByZWFjaCBgY291bnRgXG4gKiBAcGFyYW0gc2NhbGVUeXBlIGUuZy4gTSAoZm9yIG1ham9yIGNob3JkIHByb2dyZXNzaW9uKSwgbSAoZm9yIG1pbm9yIGNob3JkIHByb2dyZXNzaW9uKVxuICogQHBhcmFtIGNvdW50IGUuZy4gNFxuICovXG5leHBvcnQgY29uc3QgcHJvZ3Jlc3Npb24gPSAoc2NhbGVUeXBlOiBwcm9ncmVzc2lvblNjYWxlLCBjb3VudDogbnVtYmVyID0gNCkgPT4ge1xuICBpZiAoc2NhbGVUeXBlID09PSAnbWFqb3InIHx8IHNjYWxlVHlwZSA9PT0gJ00nKSB7XG4gICAgcmV0dXJuIE0oY291bnQpO1xuICB9XG5cbiAgaWYgKHNjYWxlVHlwZSA9PT0gJ21pbm9yJyB8fCBzY2FsZVR5cGUgPT09ICdtJykge1xuICAgIHJldHVybiBtKGNvdW50KTtcbiAgfVxufTtcbiIsICJpbXBvcnQgeyBnZXRDaG9yZHNCeVByb2dyZXNzaW9uIH0gZnJvbSAnc2NyaWJibGV0dW5lL3NyYy9wcm9ncmVzc2lvbic7XG5pbXBvcnQgeyBzY2FsZSwgaW5saW5lQ2hvcmQgfSBmcm9tICdoYXJtb25pY3MnO1xuXG5pbXBvcnQgeyBpc1Byb2dyZXNzaW9uLCB0cmFuc2Zvcm0gfSBmcm9tICcuL3Rva2VuaXplJztcbmltcG9ydCB7IHJlcGVhdCwgY2xvbmUgfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZShpbnB1dCwgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGlucHV0KSkgcmV0dXJuIGlucHV0O1xuXG4gIGNvbnN0IGZuID0gdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nID8gY2FsbGJhY2sgOiAodiA9PiB2KTtcblxuICBsZXQgc2tpcDtcbiAgcmV0dXJuIGlucHV0LnJlZHVjZSgocHJldiwgY3VyLCBpKSA9PiB7XG4gICAgY29uc3QgbGFzdCA9IHByZXZbcHJldi5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBuZXh0ID0gaW5wdXRbaSArIDFdIHx8IHt9O1xuICAgIGNvbnN0IG9sZCA9IGlucHV0W2kgLSAxXSB8fCB7fTtcblxuICAgIGlmIChza2lwKSB7XG4gICAgICBza2lwID0gZmFsc2U7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShjdXIpKSB7XG4gICAgICBwcmV2LnB1c2goLi4uY3VyKTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmIChjdXIudHlwZSA9PT0gJ3ZhbHVlJyAmJiBjdXIudmFsdWUgPT09ICcuJykge1xuICAgICAgaWYgKHByZXYubGVuZ3RoID4gMCkgcHJldi5wdXNoKHByZXZbMF0pO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKG9sZC50eXBlID09PSAncGF0dGVybicgJiYgY3VyLnR5cGUgPT09ICdwYXR0ZXJuJykge1xuICAgICAgcHJldltwcmV2Lmxlbmd0aCAtIDFdICs9IGN1ci52YWx1ZTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIHN3aXRjaCAoY3VyLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3BhdHRlcm4nOlxuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ25vdGUnOlxuICAgICAgICBpZiAoY3VyLnJlcGVhdCkgcHJldi5wdXNoKC4uLnJlcGVhdChjdXIudmFsdWUsIGN1ci5yZXBlYXQpKTtcbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjdXIudmFsdWUpKSBwcmV2LnB1c2goLi4uY3VyLnZhbHVlKTtcbiAgICAgICAgZWxzZSBwcmV2LnB1c2goY3VyLnZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2Nob3JkJzpcbiAgICAgICAgaWYgKGN1ci5yZXBlYXQpIHByZXYucHVzaCguLi5yZXBlYXQoY3VyLnZhbHVlLCBjdXIucmVwZWF0KSk7XG4gICAgICAgIGVsc2UgaWYgKGN1ci51bmZvbGQpIHByZXYucHVzaCguLi5jdXIudmFsdWUpO1xuICAgICAgICBlbHNlIHByZXYucHVzaChjdXIudmFsdWUpO1xuXG4gICAgICAgIGlmIChjdXIudHlwZSAhPT0gJ2Nob3JkJykge1xuICAgICAgICAgIHNraXAgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdkaXZpZGUnOlxuICAgICAgICBwcmV2W3ByZXYubGVuZ3RoIC0gMV0gLz0gY3VyLnZhbHVlO1xuICAgICAgICByZXR1cm4gcHJldjtcblxuICAgICAgY2FzZSAnbXVsdGlwbHknOlxuICAgICAgICBwcmV2LnB1c2goLi4ucmVwZWF0KGxhc3QsIGN1ci52YWx1ZSAtIDEpKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3NsaWNlJzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobGFzdCkpIHtcbiAgICAgICAgICBwcmV2W3ByZXYubGVuZ3RoIC0gMV0gPSBsYXN0LnNsaWNlKGN1ci52YWx1ZVswXSAtIDEsIGN1ci52YWx1ZVsxXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJldi5wdXNoKGN1ci52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ21vZGUnOlxuICAgICAgICBwcmV2W3ByZXYubGVuZ3RoIC0gMV0gPSBgJHtsYXN0fSAke2N1ci52YWx1ZX1gO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAncGFyYW0nOlxuICAgICAgY2FzZSAndmFsdWUnOiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IG51bGw7XG4gICAgICAgIGlmICh0eXBlb2YgY29udGV4dFtjdXIudmFsdWVdICE9PSAndW5kZWZpbmVkJykgdmFsdWUgPSBjb250ZXh0W2N1ci52YWx1ZV07XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyBleHByZXNzaW9uIGZvciAnJHtjdXIudmFsdWV9J2ApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlWzBdICYmIHZhbHVlWzBdLnR5cGUpIHtcbiAgICAgICAgICB2YWx1ZSA9IHJlZHVjZSh2YWx1ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY3VyLnJlcGVhdCkge1xuICAgICAgICAgICAgcHJldi5wdXNoKC4uLnJlcGVhdCh2YWx1ZSwgY3VyLnJlcGVhdCkucmVkdWNlKChfcHJldiwgX2N1cikgPT4ge1xuICAgICAgICAgICAgICBfcHJldi5wdXNoKC4uLl9jdXIpO1xuICAgICAgICAgICAgICByZXR1cm4gX3ByZXY7XG4gICAgICAgICAgICB9LCBbXSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcmV2LnB1c2goLi4udmFsdWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFsdWUgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXTtcbiAgICAgICAgaWYgKGN1ci5yZXBlYXQpIHByZXYucHVzaCguLi5yZXBlYXQodmFsdWUsIGN1ci5yZXBlYXQpKTtcbiAgICAgICAgZWxzZSBwcmV2LnB1c2goLi4udmFsdWUpO1xuICAgICAgfSBicmVhaztcbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmhhbmRsZWQgJyR7Y3VyLnR5cGV9J2ApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcmV2O1xuICB9LCBbXSkucmVkdWNlKChtZW1vLCBpdGVtKSA9PiB7XG4gICAgY29uc3QgcHJldiA9IG1lbW9bbWVtby5sZW5ndGggLSAxXTtcblxuICAgIGlmIChcbiAgICAgIEFycmF5LmlzQXJyYXkocHJldilcbiAgICAgICYmIEFycmF5LmlzQXJyYXkoaXRlbSlcbiAgICAgICYmIHR5cGVvZiBpdGVtWzBdID09PSAnbnVtYmVyJ1xuICAgICAgJiYgaXRlbS5sZW5ndGggPT09IDJcbiAgICApIHtcbiAgICAgIGNvbnN0IG9mZnNldCA9IGl0ZW1bMV0gPT09IEluZmluaXR5ID8gcHJldi5sZW5ndGggOiBpdGVtWzFdO1xuICAgICAgY29uc3QgW2Jhc2UsIGxlbmd0aF0gPSBTdHJpbmcob2Zmc2V0KS5zcGxpdCgvXFxELyk7XG5cbiAgICAgIG1lbW8ucG9wKCk7XG4gICAgICBtZW1vLnB1c2goLi4ucHJldi5zbGljZShpdGVtWzBdIC0gMSwgYmFzZSkpO1xuXG4gICAgICBpZiAoU3RyaW5nKG9mZnNldCkuaW5jbHVkZXMoJz4nKSkge1xuICAgICAgICBjb25zdCBwYXJ0cyA9IG1lbW8uc2xpY2UoLWxlbmd0aCAtIDEpO1xuXG4gICAgICAgIHBhcnRzLnBvcCgpO1xuICAgICAgICBwYXJ0cy5yZXZlcnNlKCk7XG4gICAgICAgIG1lbW8ucHVzaCguLi5wYXJ0cyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWVtbztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnICYmIGl0ZW0uaW5jbHVkZXMoJyAnKSkge1xuICAgICAgY29uc3QgY2h1bmtzID0gaXRlbS5zcGxpdCgnICcpO1xuXG4gICAgICBpZiAoY2h1bmtzLnNvbWUoaXNQcm9ncmVzc2lvbikpIHtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gY2h1bmtzLmZpbmRJbmRleChpc1Byb2dyZXNzaW9uKTtcbiAgICAgICAgY29uc3QgW2EsIGJdID0gW2NodW5rcy5zbGljZSgwLCBvZmZzZXQpLCBjaHVua3Muc2xpY2Uob2Zmc2V0KV07XG5cbiAgICAgICAgbWVtby5wdXNoKGdldENob3Jkc0J5UHJvZ3Jlc3Npb24oYS5qb2luKCcgJyksIGIuam9pbignICcpKS5zcGxpdCgnICcpLm1hcCh4ID0+IGZuKGlubGluZUNob3JkKHgpKSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVtby5wdXNoKGZuKHNjYWxlKGl0ZW0pKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lbW8ucHVzaChmbihpdGVtKSk7XG4gICAgfVxuICAgIHJldHVybiBtZW1vO1xuICB9LCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZShidWZmZXIpIHtcbiAgY29uc3QgdHJhY2tzID0ge307XG4gIGNvbnN0IG1haW4gPSBbXTtcbiAgY29uc3QgZGF0YSA9IHt9O1xuXG4gIGxldCBjaGFubmVsID0gbnVsbDtcbiAgbGV0IHByZWZpeCA9ICcnO1xuICBsZXQgdHJhY2s7XG4gIGxldCBpbmZvID0ge307XG4gIGJ1ZmZlci5zcGxpdCgvXFxyP1xcbi9nKS5mb3JFYWNoKChsaW5lLCBudGgpID0+IHtcbiAgICBsaW5lID0gbGluZS5yZXBsYWNlKC87Lis/JC8sICcnKS50cmltKCk7XG4gICAgaWYgKCFsaW5lKSByZXR1cm47XG5cbiAgICB0cnkge1xuICAgICAgaWYgKGxpbmUuY2hhckF0KCkgPT09ICclJykge1xuICAgICAgICBjb25zdCBbbmFtZSwgLi4udmFsdWVdID0gbGluZS5zcGxpdCgvXFxzKy8pO1xuXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZGF0YVtuYW1lXSA9IHRyYW5zZm9ybSh2YWx1ZS5qb2luKCcgJykpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGxpbmUuaW5kZXhPZignIyAnKSA+PSAwKSB7XG4gICAgICAgIGlmICh0cmFjaykge1xuICAgICAgICAgIHRyYWNrc1t0cmFja10gPSBpbmZvO1xuICAgICAgICAgIGNoYW5uZWwgPSBudWxsO1xuICAgICAgICAgIHByZWZpeCA9ICcnO1xuICAgICAgICAgIGluZm8gPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyYWNrID0gbGluZS5zcGxpdCgvXFxzKy8pLnNsaWNlKDEpLmpvaW4oJyAnKTtcbiAgICAgIH0gZWxzZSBpZiAobGluZS5jaGFyQXQoKSA9PT0gJz4nKSB7XG4gICAgICAgIG1haW4ucHVzaCh0cmFuc2Zvcm0obGluZS5zdWJzdHIoMSkudHJpbSgpKSk7XG4gICAgICB9IGVsc2UgaWYgKGxpbmUuY2hhckF0KCkgPT09ICdAJykge1xuICAgICAgICBjb25zdCBbbmFtZSwgLi4uZXh0ZW5kXSA9IGxpbmUuc3Vic3RyKDEpLnNwbGl0KCcgJyk7XG5cbiAgICAgICAgaWYgKGV4dGVuZFswXSA9PT0gJzwnKSB7XG4gICAgICAgICAgY29uc3Qga2V5ID0gYCR7ZXh0ZW5kWzFdfSNgO1xuXG4gICAgICAgICAgT2JqZWN0LmtleXMoaW5mbylcbiAgICAgICAgICAgIC5maWx0ZXIoeCA9PiB4LmluZGV4T2Yoa2V5KSA9PT0gMClcbiAgICAgICAgICAgIC5mb3JFYWNoKGsgPT4ge1xuICAgICAgICAgICAgICBpbmZvW2Ake25hbWV9IyR7ay5zcGxpdCgnIycpWzFdfWBdID0gY2xvbmUoaW5mb1trXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBwcmVmaXggPSBuYW1lO1xuICAgICAgfSBlbHNlIGlmIChsaW5lLmluZGV4T2YoJzonKSA+IDApIHtcbiAgICAgICAgY29uc3QgW25hbWUsIC4uLnZhbHVlXSA9IGxpbmUuc3BsaXQoJzonKTtcblxuICAgICAgICBkYXRhW25hbWVdID0gdHJhbnNmb3JtKHZhbHVlLmpvaW4oJzonKS50cmltKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGlja3MgPSB0cmFuc2Zvcm0obGluZSk7XG5cbiAgICAgICAgaWYgKCF0aWNrc1swXSB8fCB0aWNrc1swXS50eXBlICE9PSAnY2hhbm5lbCcpIHtcbiAgICAgICAgICBpZiAoIWNoYW5uZWwpIHRocm93IG5ldyBUeXBlRXJyb3IoYE1pc3NpbmcgY2hhbm5lbCwgZ2l2ZW4gJyR7bGluZX0nYCk7XG5cbiAgICAgICAgICBjb25zdCBlbmQgPSBpbmZvW2NoYW5uZWxdW2luZm9bY2hhbm5lbF0ubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICBpZiAoIWVuZC52YWx1ZXMpIGVuZC52YWx1ZXMgPSBbeyB0eXBlOiAnbnVtYmVyJywgdmFsdWU6IDEyNyB9XTtcbiAgICAgICAgICBlbmQudmFsdWVzLnB1c2goLi4udGlja3MpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5vdGVzID0gdGlja3MuZmluZEluZGV4KHggPT4gWydub3RlJywgJ2Nob3JkJywgJ3BhcmFtJ10uaW5jbHVkZXMoeC50eXBlKSk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGlja3MuZmluZEluZGV4KHggPT4geC50eXBlID09PSAncGF0dGVybicpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGluZGV4ID4gMCA/IHRpY2tzLnNsaWNlKGluZGV4KSA6IHRpY2tzO1xuICAgICAgICBjb25zdCBvZmZzZXQgPSB2YWx1ZS5maW5kSW5kZXgoeCA9PiB4LnR5cGUgIT09ICdwYXR0ZXJuJyk7XG4gICAgICAgIGNvbnN0IGlucHV0cyA9IHRpY2tzLnNsaWNlKDAsIGluZGV4ID4gMCA/IGluZGV4IDogMSk7XG5cbiAgICAgICAgY2hhbm5lbCA9IHByZWZpeCArIGlucHV0c1swXS52YWx1ZTtcbiAgICAgICAgaWYgKCFpbmZvW2NoYW5uZWxdKSB7XG4gICAgICAgICAgaW5mb1tjaGFubmVsXSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNwZWM7XG4gICAgICAgIGlmIChub3RlcyA+IDAgJiYgaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgY29uc3QgZW5kID0gaW5mb1tjaGFubmVsXVtpbmZvW2NoYW5uZWxdLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgICAgZW5kLmRhdGEgPSB2YWx1ZS5zbGljZShub3Rlcyk7XG4gICAgICAgICAgc3BlYyA9IHtcbiAgICAgICAgICAgIGlucHV0OiBlbmQuaW5wdXQsXG4gICAgICAgICAgICB2YWx1ZXM6IHZhbHVlLnNsaWNlKDEsIG5vdGVzKSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKG9mZnNldCA+IDApIHtcbiAgICAgICAgICBzcGVjID0ge1xuICAgICAgICAgICAgZGF0YTogdmFsdWUuc2xpY2Uob2Zmc2V0KSxcbiAgICAgICAgICAgIGlucHV0OiB2YWx1ZS5zbGljZSgwLCBvZmZzZXQpLFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAob2Zmc2V0ID09PSAwKSB7XG4gICAgICAgICAgc3BlYyA9IHsgdmFsdWVzOiB2YWx1ZS5zbGljZSgxKSB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNwZWMgPSB7IGlucHV0OiB2YWx1ZSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlucHV0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgc3BlYy52YWx1ZXMgPSBpbnB1dHMuc2xpY2UoMSk7XG4gICAgICAgIH1cbiAgICAgICAgaW5mb1tjaGFubmVsXS5wdXNoKHNwZWMpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnN0IG1zZyA9IHR5cGVvZiBlID09PSAnc3RyaW5nJyA/IGUgOiBlLm1lc3NhZ2U7XG5cbiAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgJHttc2d9XFxuICBhdCBsaW5lICR7bnRoICsgMX1cXG4ke2xpbmV9YCk7XG4gICAgfVxuICB9KTtcblxuICBpZiAodHJhY2spIHtcbiAgICB0cmFja3NbdHJhY2tdID0gaW5mbztcbiAgfVxuICByZXR1cm4geyBtYWluLCBkYXRhLCB0cmFja3MgfTtcbn1cbiIsICJpbXBvcnQgeyBVdGlscyB9IGZyb20gJ21pZGktd3JpdGVyLWpzJztcbmltcG9ydCB7IEZpbGUsIFRyYWNrIH0gZnJvbSAnanNtaWRnZW4nO1xuaW1wb3J0IHsgemlwLCBmbGF0dGVuIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBzcGxpdCwgaXNQYXR0ZXJuIH0gZnJvbSAnLi90b2tlbml6ZSc7XG5pbXBvcnQgeyByZWR1Y2UgfSBmcm9tICcuL3BhcnNlcic7XG5cbmNvbnN0IERFRkFVTFQgPSBTeW1ib2woJ0BtYWluJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZChtaWRpLCBicG0gPSAxMjAsIGxlbmd0aCA9IDE2KSB7XG4gIGNvbnN0IGZpbGUgPSBuZXcgRmlsZSgpO1xuICBjb25zdCBxID0gMTY7XG4gIGNvbnN0IG8gPSB7fTtcblxuICBicG0gKj0gbGVuZ3RoIC8gcTtcblxuICBsZXQgY2ggPSAwO1xuICBmdW5jdGlvbiBnZXQobnRoLCBuYW1lKSB7XG4gICAgY29uc3Qga2V5ID0gbnRoICsgbmFtZTtcblxuICAgIGlmICghZ2V0W2tleV0pIHtcbiAgICAgIGNvbnN0IHRyYWNrID0gbmV3IFRyYWNrKCk7XG4gICAgICBjb25zdCBjaGFuID0gbnRoID09PSAnMCcgPyA5IDogY2g7XG5cbiAgICAgIGZpbGUuYWRkVHJhY2sodHJhY2spO1xuICAgICAgZ2V0W2tleV0gPSB7IGNoYW4sIHRyYWNrIH07XG4gICAgICBpZiAobnRoICE9PSAnMCcpIGNoICs9IDE7XG4gICAgfVxuICAgIHJldHVybiBnZXRba2V5XTtcbiAgfVxuXG4gIG1pZGkuZm9yRWFjaChzZWN0aW9uID0+IHtcbiAgICBzZWN0aW9uLmZvckVhY2gocGFydHMgPT4ge1xuICAgICAgcGFydHMuZm9yRWFjaChlID0+IHtcbiAgICAgICAgY29uc3QgeyBjaGFuLCB0cmFjayB9ID0gZ2V0KGVbMF0sIGVbMV0pO1xuXG4gICAgICAgIHRyYWNrLnNldFRlbXBvKGJwbSk7XG4gICAgICAgIGlmIChjaGFuICE9PSA5KSB7XG4gICAgICAgICAgdHJhY2suaW5zdHJ1bWVudChjaGFuLCBlWzBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZVsyXS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGNvbnN0IHRpY2sgPSBlWzJdW2ldO1xuXG4gICAgICAgICAgaWYgKHRpY2sudiA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IG5vdGUgPSB0aWNrLm4gfHwgJ0MzJztcblxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobm90ZSkpIHtcbiAgICAgICAgICAgICAgdHJhY2subm90ZU9mZihjaGFuLCAnJywgcSk7XG4gICAgICAgICAgICAgIHRyYWNrLmFkZENob3JkKGNoYW4sIG5vdGUsIHEsIHRpY2sudik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0cmFjay5ub3RlT24oY2hhbiwgbm90ZSwgcSwgdGljay52KTtcbiAgICAgICAgICAgICAgdHJhY2subm90ZU9mZihjaGFuLCBub3RlLCBxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJhY2subm90ZU9mZihjaGFuLCAnJywgcSAqIDIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gZmlsZS50b0J5dGVzKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYWNrKHZhbHVlcywgbm90ZXMpIHtcbiAgbGV0IG9mZnNldDtcbiAgZnVuY3Rpb24gcmVzb2x2ZSh4KSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoeCkpIHtcbiAgICAgIHJldHVybiB4Lm1hcChyZXNvbHZlKTtcbiAgICB9XG5cbiAgICBsZXQgdG9rZW47XG4gICAgaWYgKCEnLXhfJy5pbmNsdWRlcyh4KSkge1xuICAgICAgdG9rZW4gPSB7IHY6IDEyNywgbDogeCB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0b2tlbiA9IHsgdjogeCA9PT0gJy0nID8gMCA6IDEyNyB9O1xuICAgIH1cblxuICAgIGlmICh4ICE9PSAnLScpIHtcbiAgICAgIHRva2VuLnYgPSB0eXBlb2YgdmFsdWVzW29mZnNldF0gIT09ICd1bmRlZmluZWQnID8gdmFsdWVzW29mZnNldF0gOiB0b2tlbi52IHx8IDA7XG4gICAgICBpZiAodHlwZW9mIG5vdGVzW29mZnNldF0gIT09ICd1bmRlZmluZWQnKSB0b2tlbi5uID0gbm90ZXNbb2Zmc2V0XTtcbiAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID09PSAxKSB0b2tlbi52ID0gdmFsdWVzWzBdO1xuICAgICAgaWYgKHRva2VuLnYgfHwgdG9rZW4ubikgb2Zmc2V0ICs9IDE7XG4gICAgfVxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZSA9PiB7XG4gICAgbGV0IHJlc3VsdCA9IHZhbHVlO1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoaXNQYXR0ZXJuKHZhbHVlKSkge1xuICAgICAgICBvZmZzZXQgPSAwO1xuICAgICAgICByZXN1bHQgPSBzcGxpdCh2YWx1ZSkubWFwKHJlc29sdmUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoY3R4KSB7XG4gIGNvbnN0IHNjZW5lcyA9IHt9O1xuXG4gIE9iamVjdC5lbnRyaWVzKGN0eC50cmFja3MpLmZvckVhY2goKFtuYW1lLCBjaGFubmVsc10pID0+IHtcbiAgICBPYmplY3QuZW50cmllcyhjaGFubmVscykuZm9yRWFjaCgoW2NoLCBjbGlwc10pID0+IHtcbiAgICAgIGNvbnN0IFt0YWcsIG1pZGldID0gY2guc3BsaXQoJyMnKTtcbiAgICAgIGNvbnN0IGtleSA9IHRhZyB8fCBERUZBVUxUO1xuXG4gICAgICBsZXQgdGlja3M7XG4gICAgICBsZXQgaW5jID0gMDtcbiAgICAgIGNsaXBzLmZvckVhY2goY2xpcCA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IGNsaXAudmFsdWVzID8gcmVkdWNlKGNsaXAudmFsdWVzLCBjdHguZGF0YSkgOiBbXTtcbiAgICAgICAgY29uc3Qgbm90ZXMgPSBjbGlwLmRhdGEgPyByZWR1Y2UoY2xpcC5kYXRhLCBjdHguZGF0YSkgOiBbXTtcblxuICAgICAgICBpZiAoY2xpcC5pbnB1dCkge1xuICAgICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID4gMSkgdmFsdWVzLnNoaWZ0KCk7XG5cbiAgICAgICAgICBjb25zdCBpbnB1dCA9IGZsYXR0ZW4ocmVkdWNlKGNsaXAuaW5wdXQsIGN0eC5kYXRhLCBwYWNrKHZhbHVlcywgbm90ZXMpKSk7XG5cbiAgICAgICAgICBpZiAoIXRpY2tzKSB7XG4gICAgICAgICAgICB0aWNrcyA9IGlucHV0O1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHppcCh0aWNrcywgaW5wdXQsIChhLCBiKSA9PiB7XG4gICAgICAgICAgICBpZiAoYi52ID4gMCkgYS52ID0gYi52O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRpY2tzKSB7XG4gICAgICAgICAgY29uc3QgbW9kZSA9IGNsaXAudmFsdWVzXG4gICAgICAgICAgICAmJiBjbGlwLnZhbHVlc1swXVxuICAgICAgICAgICAgJiYgY2xpcC52YWx1ZXNbMF0udHlwZSA9PT0gJ21vZGUnID8gY2xpcC52YWx1ZXNbMF0udmFsdWUgOiBudWxsO1xuXG4gICAgICAgICAgdGlja3MuZm9yRWFjaCh0aWNrID0+IHtcbiAgICAgICAgICAgIGlmICh0aWNrLnYgPiAwKSB7XG4gICAgICAgICAgICAgIGlmICghdGljay5uICYmIG5vdGVzLmxlbmd0aCA+IDApIHRpY2subiA9IG5vdGVzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgIGlmIChtb2RlICYmIHZhbHVlcy5sZW5ndGggPiAwKSB0aWNrW21vZGVbMF0udG9Mb3dlckNhc2UoKV0gPSB2YWx1ZXMuc2hpZnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICghc2NlbmVzW2tleV0pIHNjZW5lc1trZXldID0geyB0cmFja3M6IFtdIH07XG4gICAgICBzY2VuZXNba2V5XS50cmFja3MucHVzaChbbWlkaSwgbmFtZSwgdGlja3NdKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgaWYgKCFjdHgubWFpbi5sZW5ndGgpIHtcbiAgICBjdHgubWFpbiA9IFtbeyB0eXBlOiAndmFsdWUnLCB2YWx1ZTogREVGQVVMVCB9XV07XG4gIH1cblxuICByZXR1cm4gY3R4Lm1haW4ubWFwKHRyYWNrID0+IHtcbiAgICByZXR1cm4gcmVkdWNlKHRyYWNrLCBzY2VuZXMpLm1hcChpdGVtID0+IHtcbiAgICAgIHJldHVybiBbXS5jb25jYXQoaXRlbSkucmVkdWNlKChtZW1vLCB4KSA9PiB7XG4gICAgICAgIG1lbW8ucHVzaCguLi54LnRyYWNrcyk7XG4gICAgICAgIHJldHVybiBtZW1vO1xuICAgICAgfSwgW10pO1xuICAgIH0pO1xuICB9KTtcbn1cbiIsICJleHBvcnQgeyBtZXJnZSB9IGZyb20gJy4vbWl4dXAnO1xuZXhwb3J0IHsgcGFyc2UgfSBmcm9tICcuL3BhcnNlcic7XG5leHBvcnQgKiBmcm9tICcuL3V0aWxzJztcbmV4cG9ydCAqIGZyb20gJy4vbWl4dXAnO1xuZXhwb3J0ICogZnJvbSAnLi9wYXJzZXInO1xuZXhwb3J0ICogZnJvbSAnLi90b2tlbml6ZSc7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQSxLQUFDLE1BQUk7QUFBQztBQUFhLFVBQUksSUFBRSxFQUFDLEtBQUksQ0FBQUEsT0FBRztBQUFDLFFBQUFBLEdBQUUsVUFBUSxLQUFLLE1BQU0sNjJFQUE2MkU7QUFBQSxNQUFDLEdBQUUsS0FBSSxDQUFBQSxPQUFHO0FBQUMsUUFBQUEsR0FBRSxVQUFRLEtBQUssTUFBTSw4NEZBQW01RjtBQUFBLE1BQUMsRUFBQyxHQUFFLElBQUUsQ0FBQztBQUFFLGVBQVMsRUFBRUMsSUFBRTtBQUFDLFlBQUlDLEtBQUUsRUFBRUQsRUFBQztBQUFFLFlBQUcsV0FBU0MsR0FBRSxRQUFPQSxHQUFFO0FBQVEsWUFBSUMsS0FBRSxFQUFFRixFQUFDLElBQUUsRUFBQyxTQUFRLENBQUMsRUFBQztBQUFFLGVBQU8sRUFBRUEsRUFBQyxFQUFFRSxJQUFFQSxHQUFFLFNBQVEsQ0FBQyxHQUFFQSxHQUFFO0FBQUEsTUFBTztBQUFDLFFBQUUsSUFBRSxDQUFDSCxJQUFFSSxPQUFJO0FBQUMsaUJBQVFILE1BQUtHLEdBQUUsR0FBRSxFQUFFQSxJQUFFSCxFQUFDLEtBQUcsQ0FBQyxFQUFFLEVBQUVELElBQUVDLEVBQUMsS0FBRyxPQUFPLGVBQWVELElBQUVDLElBQUUsRUFBQyxZQUFXLE1BQUcsS0FBSUcsR0FBRUgsRUFBQyxFQUFDLENBQUM7QUFBQSxNQUFDLEdBQUUsRUFBRSxJQUFFLENBQUNELElBQUVJLE9BQUksT0FBTyxVQUFVLGVBQWUsS0FBS0osSUFBRUksRUFBQyxHQUFFLEVBQUUsSUFBRSxDQUFBSixPQUFHO0FBQUMsdUJBQWEsT0FBTyxVQUFRLE9BQU8sZUFBYSxPQUFPLGVBQWVBLElBQUUsT0FBTyxhQUFZLEVBQUMsT0FBTSxTQUFRLENBQUMsR0FBRSxPQUFPLGVBQWVBLElBQUUsY0FBYSxFQUFDLE9BQU0sS0FBRSxDQUFDO0FBQUEsTUFBQztBQUFFLFVBQUksSUFBRSxDQUFDO0FBQUUsT0FBQyxNQUFJO0FBQUMsVUFBRSxFQUFFLENBQUMsR0FBRSxFQUFFLEVBQUUsR0FBRSxFQUFDLE9BQU0sTUFBSUssSUFBRSxRQUFPLE1BQUksR0FBRSxhQUFZLE1BQUlGLElBQUUsT0FBTSxNQUFJLEdBQUUsUUFBTyxNQUFJLEVBQUMsQ0FBQztBQUFFLFlBQUlILEtBQUUsRUFBRSxHQUFHLEdBQUVJLEtBQUUsRUFBRSxHQUFHLEdBQUVGLEtBQUUsU0FBU0ksSUFBRTtBQUFDLGNBQUlMLEtBQUVLLEdBQUUsT0FBTUosS0FBRUksR0FBRSxPQUFNSCxLQUFFRixNQUFHQyxJQUFFSyxLQUFFTixLQUFFLFVBQVE7QUFBUSxjQUFHLFlBQVUsT0FBT0UsR0FBRSxPQUFNLElBQUksTUFBTSxHQUFHLE9BQU9BLElBQUUsNEJBQTRCLEVBQUUsT0FBT0ksRUFBQyxDQUFDO0FBQUUsY0FBSUMsSUFBRUgsSUFBRUksS0FBRU4sR0FBRSxRQUFRLEdBQUc7QUFBRSxpQkFBS00sTUFBR0QsS0FBRUwsR0FBRSxNQUFNLENBQUMsR0FBRUUsS0FBRUYsR0FBRSxDQUFDLEdBQUUsUUFBTUEsR0FBRSxDQUFDLEtBQUcsUUFBTUEsR0FBRSxDQUFDLE1BQUlLLEtBQUVMLEdBQUUsTUFBTSxDQUFDLEdBQUVFLE1BQUdGLEdBQUUsQ0FBQyxPQUFLSyxLQUFFTCxHQUFFLE1BQU0sT0FBS00sS0FBRSxJQUFFQSxLQUFFLENBQUMsR0FBRUosS0FBRUYsR0FBRSxNQUFNLEdBQUVNLEVBQUM7QUFBRyxjQUFJLEtBQUUsU0FBU1QsSUFBRTtBQUFDLG1CQUFNLEVBQUMsTUFBSyxNQUFLLE1BQUssTUFBSyxNQUFLLE1BQUssTUFBSyxNQUFLLE1BQUssS0FBSSxFQUFFQSxHQUFFLFlBQVksQ0FBQyxLQUFHQSxHQUFFLE9BQU8sQ0FBQyxFQUFFLFlBQVksSUFBRUEsR0FBRSxNQUFNLENBQUM7QUFBQSxVQUFDLEdBQUVLLEdBQUUsUUFBUSxPQUFNLEVBQUUsQ0FBQyxHQUFFLElBQUUsT0FBS0EsR0FBRSxRQUFRLE9BQU0sRUFBRSxJQUFFLENBQUNBLEdBQUUsUUFBUSxPQUFNLEVBQUUsSUFBRTtBQUFFLGNBQUcsTUFBTSxDQUFDLEVBQUUsT0FBTSxJQUFJLE1BQU0sR0FBRyxPQUFPQSxHQUFFLENBQUMsR0FBRSwrQkFBK0IsQ0FBQztBQUFFLGNBQUcsQ0FBQ0wsR0FBRVEsRUFBQyxLQUFHLENBQUNKLEdBQUVJLEVBQUMsRUFBRSxPQUFNLElBQUksTUFBTSxHQUFHLE9BQU9MLElBQUUsa0JBQWtCLEVBQUUsT0FBT0ksRUFBQyxDQUFDO0FBQUUsbUJBQVEsS0FBRSxTQUFTUCxJQUFFSSxJQUFFO0FBQUMsZ0JBQUlFLEtBQUUsQ0FBQyxLQUFJLE1BQUssS0FBSSxNQUFLLEtBQUksS0FBSSxNQUFLLEtBQUksTUFBSyxLQUFJLE1BQUssR0FBRyxHQUFFTCxLQUFFSyxHQUFFLEtBQUssU0FBU04sSUFBRTtBQUFDLHFCQUFPQSxLQUFFSTtBQUFBLFlBQUMsRUFBRSxHQUFFRixLQUFFSSxHQUFFLEtBQUssU0FBU04sSUFBRTtBQUFDLHFCQUFPQSxNQUFHSSxLQUFFO0FBQUEsWUFBRSxFQUFFLEdBQUVELEtBQUVGLEdBQUUsT0FBT0MsRUFBQztBQUFFLG1CQUFPQyxHQUFFLE1BQU1BLEdBQUUsUUFBUUgsS0FBRUksRUFBQyxDQUFDO0FBQUEsVUFBQyxHQUFFLEdBQUUsQ0FBQyxHQUFFLElBQUUsQ0FBQyxHQUFFTSxLQUFFLEdBQUUsSUFBRSxHQUFFLElBQUVULEtBQUVELEtBQUVJLElBQUVNLEtBQUUsRUFBRUYsRUFBQyxFQUFFLFNBQVEsU0FBTSxFQUFFQSxFQUFDLEVBQUVFLEVBQUMsS0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsR0FBRUEsTUFBSTtBQUFJLGlCQUFPO0FBQUEsUUFBQyxHQUFFUCxLQUFFLFNBQVNILElBQUU7QUFBQyxjQUFJSSxJQUFFRSxJQUFFTCxLQUFFLFNBQVFFLEtBQUU7QUFBRSxpQkFBT0gsR0FBRSxTQUFTQyxFQUFDLEtBQUdLLEtBQUVMLElBQUVHLEtBQUVKLEdBQUUsTUFBTSxHQUFFQSxHQUFFLFFBQVFDLEVBQUMsQ0FBQyxNQUFJRyxLQUFFSixHQUFFLENBQUMsR0FBRU0sS0FBRU4sR0FBRSxNQUFNLENBQUMsR0FBRSxRQUFNQSxHQUFFLENBQUMsS0FBRyxRQUFNQSxHQUFFLENBQUMsTUFBSUksTUFBR0osR0FBRSxDQUFDLEdBQUVNLEtBQUVOLEdBQUUsTUFBTSxDQUFDLEtBQUlBLEdBQUUsU0FBUyxHQUFHLE1BQUlHLEtBQUUsQ0FBQ0gsR0FBRSxNQUFNLEdBQUcsRUFBRSxDQUFDLEdBQUVNLEtBQUVBLEdBQUUsTUFBTSxHQUFFQSxHQUFFLFFBQVEsR0FBRyxDQUFDLElBQUdKLEdBQUUsRUFBQyxPQUFNRSxLQUFFRCxLQUFFLE1BQUlHLEdBQUMsQ0FBQztBQUFBLFFBQUMsR0FBRSxJQUFFLFdBQVU7QUFBQyxpQkFBTyxPQUFPLEtBQUtGLEVBQUM7QUFBQSxRQUFDLEdBQUUsSUFBRSxXQUFVO0FBQUMsaUJBQU8sT0FBTyxLQUFLSixFQUFDO0FBQUEsUUFBQyxHQUFFSyxLQUFFLFNBQVNMLElBQUU7QUFBQyxpQkFBT0UsR0FBRSxFQUFDLE9BQU1GLEdBQUMsQ0FBQztBQUFBLFFBQUMsR0FBRSxJQUFFLFNBQVNBLElBQUU7QUFBQyxpQkFBT0UsR0FBRSxFQUFDLE9BQU1GLEdBQUMsQ0FBQztBQUFBLFFBQUM7QUFBQSxNQUFDLEdBQUc7QUFBRSxVQUFJLElBQUU7QUFBUSxlQUFRLEtBQUssRUFBRSxHQUFFLENBQUMsSUFBRSxFQUFFLENBQUM7QUFBRSxRQUFFLGNBQVksT0FBTyxlQUFlLEdBQUUsY0FBYSxFQUFDLE9BQU0sS0FBRSxDQUFDO0FBQUEsSUFBQyxHQUFHO0FBQUE7QUFBQTs7O0FDSWh6TyxTQUFTLE1BQU8sR0FBRztBQUFFLFNBQU8sT0FBTyxNQUFNO0FBQVM7QUFDbEQsU0FBUyxNQUFPLEdBQUc7QUFBRSxTQUFPLE9BQU8sTUFBTTtBQUFTO0FBQ2xELFNBQVMsTUFBTyxHQUFHO0FBQUUsU0FBTyxPQUFPLE1BQU07QUFBWTtBQUNyRCxTQUFTLFdBQVlXLE9BQU0sUUFBUTtBQUNqQyxTQUFPLEtBQUssSUFBSSxJQUFJQSxRQUFPLE1BQU0sRUFBRSxLQUFLLFVBQVU7QUFDcEQ7QUFtRk8sU0FBUyxNQUFPLEtBQUssU0FBUyxRQUFRO0FBQzNDLE1BQUksT0FBTyxRQUFRLFNBQVUsUUFBTztBQUNwQyxNQUFJQyxLQUFJLE1BQU0sS0FBSyxHQUFHO0FBQ3RCLE1BQUksQ0FBQ0EsTUFBTSxDQUFDLFdBQVdBLEdBQUUsQ0FBQyxFQUFJLFFBQU87QUFFckMsTUFBSUMsS0FBSSxFQUFFLFFBQVFELEdBQUUsQ0FBQyxFQUFFLFlBQVksR0FBRyxLQUFLQSxHQUFFLENBQUMsRUFBRSxRQUFRLE1BQU0sSUFBSSxFQUFFO0FBQ3BFLEVBQUFDLEdBQUUsS0FBS0EsR0FBRSxTQUFTQSxHQUFFO0FBQ3BCLEVBQUFBLEdBQUUsUUFBUUEsR0FBRSxPQUFPLFdBQVcsQ0FBQyxJQUFJLEtBQUs7QUFDeEMsRUFBQUEsR0FBRSxNQUFNQSxHQUFFLElBQUksQ0FBQyxNQUFNLE1BQU0sQ0FBQ0EsR0FBRSxJQUFJLFNBQVNBLEdBQUUsSUFBSTtBQUNqRCxNQUFJLE1BQU0sVUFBVUEsR0FBRSxJQUFJLElBQUlBLEdBQUU7QUFDaEMsRUFBQUEsR0FBRSxTQUFTLE1BQU0sSUFBSSxLQUFLLE1BQU0sTUFBTTtBQUN0QyxNQUFJRCxHQUFFLENBQUMsR0FBRztBQUNSLElBQUFDLEdBQUUsTUFBTSxDQUFDRCxHQUFFLENBQUM7QUFDWixJQUFBQyxHQUFFLE9BQU8sTUFBTSxNQUFNQSxHQUFFLE1BQU07QUFDN0IsSUFBQUEsR0FBRSxPQUFPLFdBQVdBLEdBQUUsTUFBTSxNQUFNO0FBQUEsRUFDcEM7QUFDQSxNQUFJLFFBQVMsQ0FBQUEsR0FBRSxVQUFVRCxHQUFFLENBQUM7QUFDNUIsU0FBT0M7QUFDVDtBQTRDTyxTQUFTLEtBQU1DLE9BQU07QUFDMUIsT0FBSyxNQUFNQSxLQUFJLEtBQUssTUFBTUEsS0FBSSxNQUFNQSxTQUFRLEtBQUtBLFFBQU8sSUFBSyxRQUFPLENBQUNBO0FBQ3JFLE1BQUlELEtBQUksTUFBTUMsS0FBSTtBQUNsQixTQUFPRCxNQUFLLE1BQU1BLEdBQUUsSUFBSSxJQUFJQSxHQUFFLE9BQU87QUFDdkM7QUE5SkEsSUFXSSxPQXFDQTtBQWhESjtBQUFBO0FBQUE7QUFXQSxJQUFJLFFBQVE7QUFxQ1osSUFBSSxZQUFZLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRTtBQUFBO0FBQUE7OztBQ2hEckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQThCTyxTQUFTLE9BQVEsS0FBSztBQUMzQixNQUFJLE1BQU0sUUFBUSxHQUFHLEtBQUssSUFBSSxXQUFXLEVBQUcsUUFBTyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUs7QUFDOUUsU0FBTyxLQUFLLEdBQUc7QUFDakI7QUFvQk8sU0FBUyxLQUFNLEtBQUssUUFBUTtBQUNqQyxNQUFJLFFBQVEsUUFBUSxRQUFRLE1BQU8sUUFBTyxTQUFVRSxJQUFHO0FBQUUsV0FBTyxLQUFLQSxJQUFHLEdBQUc7QUFBQSxFQUFFO0FBQzdFLFFBQU0sS0FBSyxNQUFNLEdBQUc7QUFDcEIsTUFBSSxNQUFNLFdBQVcsT0FBTyxTQUFTO0FBQ3JDLE1BQUksS0FBSyxJQUFJLE1BQU0sRUFBRTtBQUNyQixNQUFJLElBQUksS0FBSyxNQUFNLE1BQU0sRUFBRSxJQUFJO0FBQy9CLFNBQU8sS0FBSztBQUNkO0FBNURBLElBbUNJLE9BQ0E7QUFwQ0o7QUFBQTtBQWlCQTtBQWtCQSxJQUFJLFFBQVEsK0JBQStCLE1BQU0sR0FBRztBQUNwRCxJQUFJLFNBQVMsK0JBQStCLE1BQU0sR0FBRztBQUFBO0FBQUE7OztBQ3BDckQ7QUFBQTtBQUFBO0FBQUEsTUFDRSxNQUFRO0FBQUEsTUFDUixTQUFXO0FBQUEsTUFDWCxhQUFlO0FBQUEsTUFDZixNQUFRO0FBQUEsTUFDUixPQUFTO0FBQUEsTUFDVCxjQUFnQjtBQUFBLFFBQ2QsY0FBYztBQUFBLE1BQ2hCO0FBQUEsTUFDQSxpQkFBbUI7QUFBQSxRQUNqQixlQUFlO0FBQUEsUUFDZix5Q0FBeUM7QUFBQSxRQUN6QyxxQkFBcUI7QUFBQSxRQUNyQix3QkFBd0I7QUFBQSxRQUN4QixRQUFVO0FBQUEsUUFDViwwQkFBMEI7QUFBQSxRQUMxQix3QkFBd0I7QUFBQSxRQUN4QixzQkFBc0I7QUFBQSxRQUN0Qix5QkFBeUI7QUFBQSxRQUN6QiwwQkFBMEI7QUFBQSxRQUMxQixPQUFTO0FBQUEsUUFDVCxRQUFVO0FBQUEsUUFDVixPQUFTO0FBQUEsUUFDVCxLQUFPO0FBQUEsUUFDUCxRQUFVO0FBQUEsUUFDVixPQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0EsYUFBZTtBQUFBLFFBQ2IsS0FBTztBQUFBLFFBQ1AsU0FBVztBQUFBLFFBQ1gsTUFBUTtBQUFBLE1BQ1Y7QUFBQSxNQUNBLFNBQVc7QUFBQSxRQUNULE9BQVM7QUFBQSxRQUNULE1BQVE7QUFBQSxRQUNSLFdBQVc7QUFBQSxRQUNYLGdCQUFrQjtBQUFBLFFBQ2xCLFNBQVc7QUFBQSxRQUNYLE1BQVE7QUFBQSxRQUNSLE9BQVM7QUFBQSxRQUNULGFBQWU7QUFBQSxNQUNqQjtBQUFBLE1BQ0EsdUJBQXlCO0FBQUEsTUFDekIsWUFBYztBQUFBLFFBQ1osTUFBUTtBQUFBLFFBQ1IsS0FBTztBQUFBLE1BQ1Q7QUFBQSxNQUNBLFVBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFVO0FBQUEsTUFDVixTQUFXO0FBQUEsTUFDWCxNQUFRO0FBQUEsUUFDTixLQUFPO0FBQUEsTUFDVDtBQUFBLE1BQ0EsVUFBWTtBQUFBLElBQ2Q7QUFBQTtBQUFBOzs7QUMxREE7QUFBQTtBQUFBO0FBRUEsUUFBSSxZQUFZO0FBTWhCLFFBQUksWUFBWTtBQUFBLE1BQ2QsU0FBUyxrQkFBMkI7QUFBQSxNQUNwQyxtQkFBbUIsQ0FBQyxJQUFNLElBQU0sS0FBTSxHQUFJO0FBQUE7QUFBQSxNQUUxQyxxQkFBcUIsQ0FBQyxHQUFNLEdBQU0sR0FBTSxDQUFJO0FBQUE7QUFBQSxNQUU1QyxzQkFBc0IsQ0FBQyxHQUFNLENBQUk7QUFBQTtBQUFBLE1BRWpDLHNCQUFzQixDQUFDLEdBQU0sQ0FBSTtBQUFBO0FBQUEsTUFFakMsdUJBQXVCLENBQUMsR0FBTSxHQUFJO0FBQUE7QUFBQSxNQUVsQyxrQkFBa0IsQ0FBQyxJQUFNLElBQU0sS0FBTSxHQUFJO0FBQUE7QUFBQSxNQUV6QyxlQUFlO0FBQUEsTUFDZixjQUFjO0FBQUEsTUFDZCxtQkFBbUI7QUFBQSxNQUNuQixvQkFBb0I7QUFBQSxNQUNwQix5QkFBeUI7QUFBQSxNQUN6QixlQUFlO0FBQUEsTUFDZixnQkFBZ0I7QUFBQSxNQUNoQixnQkFBZ0I7QUFBQSxNQUNoQixlQUFlO0FBQUEsTUFDZixtQkFBbUI7QUFBQSxNQUNuQix3QkFBd0I7QUFBQSxNQUN4Qix1QkFBdUI7QUFBQSxNQUN2QixzQkFBc0IsQ0FBQyxJQUFNLENBQUk7QUFBQSxNQUNqQywwQkFBMEI7QUFBQTtBQUFBLE1BRTFCLHVCQUF1QjtBQUFBO0FBQUEsTUFFdkIsbUJBQW1CO0FBQUE7QUFBQSxJQUVyQjtBQUVBLGFBQVMsUUFBUSxLQUFLO0FBQ3BCO0FBRUEsVUFBSSxPQUFPLFdBQVcsY0FBYyxPQUFPLE9BQU8sYUFBYSxVQUFVO0FBQ3ZFLGtCQUFVLFNBQVVDLE1BQUs7QUFDdkIsaUJBQU8sT0FBT0E7QUFBQSxRQUNoQjtBQUFBLE1BQ0YsT0FBTztBQUNMLGtCQUFVLFNBQVVBLE1BQUs7QUFDdkIsaUJBQU9BLFFBQU8sT0FBTyxXQUFXLGNBQWNBLEtBQUksZ0JBQWdCLFVBQVVBLFNBQVEsT0FBTyxZQUFZLFdBQVcsT0FBT0E7QUFBQSxRQUMzSDtBQUFBLE1BQ0Y7QUFFQSxhQUFPLFFBQVEsR0FBRztBQUFBLElBQ3BCO0FBRUEsYUFBUyxjQUFjO0FBQ3JCLG9CQUFjLFNBQVUsSUFBSSxRQUFRO0FBQ2xDLGVBQU8sSUFBSSxZQUFZLElBQUksUUFBVyxNQUFNO0FBQUEsTUFDOUM7QUFFQSxVQUFJLFNBQVMsT0FBTztBQUVwQixVQUFJLFVBQVUsb0JBQUksUUFBUTtBQUUxQixlQUFTLFlBQVksSUFBSSxPQUFPLFFBQVE7QUFDdEMsWUFBSSxRQUFRLElBQUksT0FBTyxJQUFJLEtBQUs7QUFFaEMsZ0JBQVEsSUFBSSxPQUFPLFVBQVUsUUFBUSxJQUFJLEVBQUUsQ0FBQztBQUU1QyxlQUFPLGdCQUFnQixPQUFPLFlBQVksU0FBUztBQUFBLE1BQ3JEO0FBRUEsZ0JBQVUsYUFBYSxNQUFNO0FBRTdCLGtCQUFZLFVBQVUsT0FBTyxTQUFVLEtBQUs7QUFDMUMsWUFBSSxTQUFTLE9BQU8sS0FBSyxLQUFLLE1BQU0sR0FBRztBQUV2QyxZQUFJLE9BQVEsUUFBTyxTQUFTLFlBQVksUUFBUSxJQUFJO0FBQ3BELGVBQU87QUFBQSxNQUNUO0FBRUEsa0JBQVksVUFBVSxPQUFPLE9BQU8sSUFBSSxTQUFVLEtBQUssY0FBYztBQUNuRSxZQUFJLE9BQU8saUJBQWlCLFVBQVU7QUFDcEMsY0FBSSxTQUFTLFFBQVEsSUFBSSxJQUFJO0FBRTdCLGlCQUFPLE9BQU8sT0FBTyxPQUFPLEVBQUUsS0FBSyxNQUFNLEtBQUssYUFBYSxRQUFRLGdCQUFnQixTQUFVLEdBQUcsTUFBTTtBQUNwRyxtQkFBTyxNQUFNLE9BQU8sSUFBSTtBQUFBLFVBQzFCLENBQUMsQ0FBQztBQUFBLFFBQ0osV0FBVyxPQUFPLGlCQUFpQixZQUFZO0FBQzdDLGNBQUksUUFBUTtBQUVaLGlCQUFPLE9BQU8sT0FBTyxPQUFPLEVBQUUsS0FBSyxNQUFNLEtBQUssV0FBWTtBQUN4RCxnQkFBSSxPQUFPO0FBRVgsZ0JBQUksT0FBTyxLQUFLLEtBQUssU0FBUyxDQUFDLE1BQU0sVUFBVTtBQUM3QyxxQkFBTyxDQUFDLEVBQUUsTUFBTSxLQUFLLElBQUk7QUFDekIsbUJBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxDQUFDO0FBQUEsWUFDcEM7QUFFQSxtQkFBTyxhQUFhLE1BQU0sTUFBTSxJQUFJO0FBQUEsVUFDdEMsQ0FBQztBQUFBLFFBQ0gsT0FBTztBQUNMLGlCQUFPLE9BQU8sT0FBTyxPQUFPLEVBQUUsS0FBSyxNQUFNLEtBQUssWUFBWTtBQUFBLFFBQzVEO0FBQUEsTUFDRjtBQUVBLGVBQVMsWUFBWSxRQUFRLElBQUk7QUFDL0IsWUFBSSxJQUFJLFFBQVEsSUFBSSxFQUFFO0FBRXRCLGVBQU8sT0FBTyxLQUFLLENBQUMsRUFBRSxPQUFPLFNBQVUsUUFBUSxNQUFNO0FBQ25ELGlCQUFPLElBQUksSUFBSSxPQUFPLEVBQUUsSUFBSSxDQUFDO0FBQzdCLGlCQUFPO0FBQUEsUUFDVCxHQUFHLHVCQUFPLE9BQU8sSUFBSSxDQUFDO0FBQUEsTUFDeEI7QUFFQSxhQUFPLFlBQVksTUFBTSxNQUFNLFNBQVM7QUFBQSxJQUMxQztBQUVBLGFBQVMsZ0JBQWdCLFVBQVUsYUFBYTtBQUM5QyxVQUFJLEVBQUUsb0JBQW9CLGNBQWM7QUFDdEMsY0FBTSxJQUFJLFVBQVUsbUNBQW1DO0FBQUEsTUFDekQ7QUFBQSxJQUNGO0FBRUEsYUFBUyxrQkFBa0IsUUFBUSxPQUFPO0FBQ3hDLGVBQVMsSUFBSSxHQUFHLElBQUksTUFBTSxRQUFRLEtBQUs7QUFDckMsWUFBSSxhQUFhLE1BQU0sQ0FBQztBQUN4QixtQkFBVyxhQUFhLFdBQVcsY0FBYztBQUNqRCxtQkFBVyxlQUFlO0FBQzFCLFlBQUksV0FBVyxXQUFZLFlBQVcsV0FBVztBQUNqRCxlQUFPLGVBQWUsUUFBUSxXQUFXLEtBQUssVUFBVTtBQUFBLE1BQzFEO0FBQUEsSUFDRjtBQUVBLGFBQVMsYUFBYSxhQUFhLFlBQVksYUFBYTtBQUMxRCxVQUFJLFdBQVksbUJBQWtCLFlBQVksV0FBVyxVQUFVO0FBQ25FLFVBQUksWUFBYSxtQkFBa0IsYUFBYSxXQUFXO0FBQzNELGFBQU87QUFBQSxJQUNUO0FBRUEsYUFBUyxVQUFVLFVBQVUsWUFBWTtBQUN2QyxVQUFJLE9BQU8sZUFBZSxjQUFjLGVBQWUsTUFBTTtBQUMzRCxjQUFNLElBQUksVUFBVSxvREFBb0Q7QUFBQSxNQUMxRTtBQUVBLGVBQVMsWUFBWSxPQUFPLE9BQU8sY0FBYyxXQUFXLFdBQVc7QUFBQSxRQUNyRSxhQUFhO0FBQUEsVUFDWCxPQUFPO0FBQUEsVUFDUCxVQUFVO0FBQUEsVUFDVixjQUFjO0FBQUEsUUFDaEI7QUFBQSxNQUNGLENBQUM7QUFDRCxVQUFJLFdBQVksaUJBQWdCLFVBQVUsVUFBVTtBQUFBLElBQ3REO0FBRUEsYUFBUyxnQkFBZ0IsR0FBR0MsSUFBRztBQUM3Qix3QkFBa0IsT0FBTyxrQkFBa0IsU0FBU0MsaUJBQWdCQyxJQUFHRixJQUFHO0FBQ3hFLFFBQUFFLEdBQUUsWUFBWUY7QUFDZCxlQUFPRTtBQUFBLE1BQ1Q7QUFFQSxhQUFPLGdCQUFnQixHQUFHRixFQUFDO0FBQUEsSUFDN0I7QUFNQSxRQUFJLFFBQXFCLDRCQUFZO0FBQ25DLGVBQVNHLFNBQVE7QUFDZix3QkFBZ0IsTUFBTUEsTUFBSztBQUFBLE1BQzdCO0FBRUEsbUJBQWFBLFFBQU8sTUFBTSxDQUFDO0FBQUEsUUFDekIsS0FBSztBQUFBLFFBQ0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBS0EsU0FBUyxVQUFVO0FBQ2pCLG1CQUFPLFVBQVU7QUFBQSxVQUNuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BT0YsR0FBRztBQUFBLFFBQ0QsS0FBSztBQUFBLFFBQ0wsT0FBTyxTQUFTLGNBQWMsUUFBUTtBQUNwQyxpQkFBTyxPQUFPLE1BQU0sRUFBRSxFQUFFLElBQUksU0FBVSxPQUFPO0FBQzNDLG1CQUFPLE1BQU0sV0FBVztBQUFBLFVBQzFCLENBQUM7QUFBQSxRQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BT0YsR0FBRztBQUFBLFFBQ0QsS0FBSztBQUFBLFFBQ0wsT0FBTyxTQUFTLFVBQVUsR0FBRztBQUMzQixpQkFBTyxDQUFDLE1BQU0sV0FBVyxDQUFDLENBQUMsS0FBSyxTQUFTLENBQUM7QUFBQSxRQUM1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUUYsR0FBRztBQUFBLFFBQ0QsS0FBSztBQUFBLFFBQ0wsT0FBTyxTQUFTLFNBQVMsT0FBTztBQUM5QixpQkFBTyxVQUFVLE9BQU8sS0FBSztBQUFBLFFBQy9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFXRixHQUFHO0FBQUEsUUFDRCxLQUFLO0FBQUEsUUFDTCxPQUFPLFNBQVMsdUJBQXVCLE9BQU87QUFDNUMsa0JBQVEsS0FBSyxNQUFNLEtBQUs7QUFDeEIsY0FBSSxTQUFTLFFBQVE7QUFFckIsaUJBQU8sUUFBUSxTQUFTLEdBQUc7QUFDekIsdUJBQVc7QUFDWCxzQkFBVSxRQUFRLE1BQU87QUFBQSxVQUMzQjtBQUVBLGNBQUksUUFBUSxDQUFDO0FBRWIsaUJBQU8sTUFBTTtBQUNYLGtCQUFNLEtBQUssU0FBUyxHQUFJO0FBQ3hCLGdCQUFJLFNBQVMsSUFBTSxZQUFXO0FBQUEsaUJBQU87QUFDbkM7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUVBLGlCQUFPO0FBQUEsUUFDVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU9GLEdBQUc7QUFBQSxRQUNELEtBQUs7QUFBQSxRQUNMLE9BQU8sU0FBUyxnQkFBZ0IsR0FBRztBQUNqQyxpQkFBTyxVQUFVLENBQUMsRUFBRSxNQUFNLE9BQU8sRUFBRSxTQUFTO0FBQUEsUUFDOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFPRixHQUFHO0FBQUEsUUFDRCxLQUFLO0FBQUEsUUFDTCxPQUFPLFNBQVMsZ0JBQWdCLE9BQU87QUFDckMsY0FBSSxNQUFNO0FBQ1YsY0FBSTtBQUNKLGdCQUFNLFFBQVEsU0FBVSxPQUFPO0FBQzdCLDJCQUFlLE1BQU0sU0FBUyxFQUFFO0FBRWhDLGdCQUFJLGFBQWEsVUFBVSxFQUFHLGdCQUFlLE1BQU07QUFDbkQsbUJBQU87QUFBQSxVQUNULENBQUM7QUFDRCxpQkFBTyxTQUFTLEtBQUssRUFBRTtBQUFBLFFBQ3pCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFRRixHQUFHO0FBQUEsUUFDRCxLQUFLO0FBQUEsUUFDTCxPQUFPLFNBQVMsY0FBYyxRQUFRLGFBQWE7QUFDakQsd0JBQWMsZUFBZTtBQUM3QixjQUFJLFlBQVksT0FBTyxTQUFTLEVBQUU7QUFFbEMsY0FBSSxVQUFVLFNBQVMsR0FBRztBQUV4Qix3QkFBWSxNQUFNO0FBQUEsVUFDcEI7QUFHQSxjQUFJLFdBQVcsVUFBVSxNQUFNLE9BQU87QUFFdEMscUJBQVcsU0FBUyxJQUFJLFNBQVUsTUFBTTtBQUN0QyxtQkFBTyxTQUFTLE1BQU0sRUFBRTtBQUFBLFVBQzFCLENBQUM7QUFFRCxjQUFJLFNBQVMsU0FBUyxhQUFhO0FBQ2pDLG1CQUFPLGNBQWMsU0FBUyxTQUFTLEdBQUc7QUFDeEMsdUJBQVMsUUFBUSxDQUFDO0FBQUEsWUFDcEI7QUFBQSxVQUNGO0FBRUEsaUJBQU87QUFBQSxRQUNUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BT0YsR0FBRztBQUFBLFFBQ0QsS0FBSztBQUFBLFFBQ0wsT0FBTyxTQUFTLFFBQVEsT0FBTztBQUM3QixjQUFJLE1BQU0sUUFBUSxLQUFLLEVBQUcsUUFBTztBQUNqQyxpQkFBTyxDQUFDLEtBQUs7QUFBQSxRQUNmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BT0YsR0FBRztBQUFBLFFBQ0QsS0FBSztBQUFBLFFBQ0wsT0FBTyxTQUFTLGdCQUFnQixVQUFVO0FBRXhDLHFCQUFXLFdBQVcsTUFBTSxNQUFNO0FBQ2xDLGlCQUFPLEtBQUssTUFBTSxXQUFXLE1BQU0sR0FBRztBQUFBLFFBQ3hDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFRRixHQUFHO0FBQUEsUUFDRCxLQUFLO0FBQUEsUUFDTCxPQUFPLFNBQVMsZ0JBQWdCLFVBQVU7QUFDeEMsY0FBSSxNQUFNLFFBQVEsUUFBUSxHQUFHO0FBRTNCLG1CQUFPLFNBQVMsSUFBSSxTQUFVLE9BQU87QUFDbkMscUJBQU9BLE9BQU0sZ0JBQWdCLEtBQUs7QUFBQSxZQUNwQyxDQUFDLEVBQUUsT0FBTyxTQUFVLEdBQUcsR0FBRztBQUN4QixxQkFBTyxJQUFJO0FBQUEsWUFDYixHQUFHLENBQUM7QUFBQSxVQUNOO0FBRUEscUJBQVcsU0FBUyxTQUFTO0FBRTdCLGNBQUksU0FBUyxZQUFZLEVBQUUsT0FBTyxDQUFDLE1BQU0sS0FBSztBQUU1QyxtQkFBTyxTQUFTLFNBQVMsVUFBVSxDQUFDLENBQUM7QUFBQSxVQUN2QztBQUdBLGNBQUksZUFBZUEsT0FBTSxnQkFBZ0IsVUFBVSxxQkFBcUI7QUFDeEUsY0FBSSxlQUFlLGVBQWVBLE9BQU0sc0JBQXNCLFFBQVE7QUFDdEUsaUJBQU9BLE9BQU0sa0JBQWtCLFlBQVk7QUFBQSxRQUM3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVVGLEdBQUc7QUFBQSxRQUNELEtBQUs7QUFBQSxRQUNMLE9BQU8sU0FBUyxrQkFBa0IsTUFBTTtBQUN0QyxjQUFJLGNBQWMsS0FBSyxNQUFNLElBQUk7QUFDakMsaUJBQU8sS0FBSyxJQUFJLGNBQWMsSUFBSSxJQUFJLE9BQVcsY0FBYztBQUFBLFFBQ2pFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFXRixHQUFHO0FBQUEsUUFDRCxLQUFLO0FBQUEsUUFDTCxPQUFPLFNBQVMsaUJBQWlCLE1BQU07QUFDckMsY0FBSSxjQUFjLEtBQUssTUFBTSxJQUFJO0FBQ2pDLGlCQUFPLGNBQWM7QUFBQSxRQUN2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUUYsR0FBRztBQUFBLFFBQ0QsS0FBSztBQUFBLFFBQ0wsT0FBTyxTQUFTLHNCQUFzQixVQUFVO0FBRzlDLGNBQUksYUFBYSxJQUFLLFFBQU87QUFDN0IsY0FBSSxRQUFRLFNBQVMsTUFBb0IsNEJBQVksZ0NBQWdDO0FBQUEsWUFDbkYsUUFBUTtBQUFBLFlBQ1IsTUFBTTtBQUFBLFlBQ04sUUFBUTtBQUFBLFVBQ1YsQ0FBQyxDQUFDO0FBRUYsY0FBSSxPQUFPO0FBQ1QsZ0JBQUksT0FBTyxPQUFPLE1BQU0sT0FBTyxJQUFJO0FBRW5DLGdCQUFJLGNBQWMsU0FBUyxNQUFNLE9BQU8sT0FBTyxPQUFPO0FBRXRELGdCQUFJLGFBQWE7QUFFZixrQkFBSSxRQUFRLE9BQU87QUFDbkIsa0JBQUkscUJBQXFCLElBQUk7QUFDN0Isa0JBQUksZ0JBQWdCLE1BQU0sUUFDdEIsU0FBUyxjQUFjLFFBQ3ZCLFNBQVMsY0FBYztBQUUzQixrQkFBSSxRQUFRO0FBQ1Ysb0JBQUksZUFBZSxPQUFPO0FBQzFCLG9CQUFJLFVBQVUsS0FBSyxJQUFJLEdBQUcsWUFBWTtBQUN0QyxxQ0FBcUIscUJBQXFCLHVCQUF1QixVQUFVLEtBQUs7QUFBQSxjQUNsRjtBQUVBLGtCQUFJLE9BQU8sV0FBVyxVQUFVO0FBQzlCLG9CQUFJLFVBQVUscUJBQXFCO0FBRW5DLG9CQUFJLGdCQUFnQixPQUFPLFVBQVUsR0FBRztBQUN4QyxxQ0FBcUIsVUFBVTtBQUFBLGNBQ2pDO0FBRUEscUJBQU87QUFBQSxZQUNUO0FBQUEsVUFDRjtBQUVBLGdCQUFNLElBQUksTUFBTSxXQUFXLDJCQUEyQjtBQUFBLFFBQ3hEO0FBQUEsTUFDRixDQUFDLENBQUM7QUFFRixhQUFPQTtBQUFBLElBQ1QsR0FBRTtBQVFGLFFBQUksY0FBMkIsNEJBQVk7QUFDekMsZUFBU0MsYUFBWSxRQUFRO0FBQzNCLHdCQUFnQixNQUFNQSxZQUFXO0FBR2pDLGlCQUFTLE9BQU8sT0FBTztBQUFBLFVBQ3JCLFNBQVM7QUFBQSxVQUNULFdBQVc7QUFBQSxVQUNYLFVBQVU7QUFBQSxVQUNWLE1BQU07QUFBQSxRQUNSLEdBQUcsTUFBTTtBQUNULGFBQUssT0FBTztBQUNaLGFBQUssVUFBVSxPQUFPO0FBQ3RCLGFBQUssUUFBUSxPQUFPO0FBQ3BCLGFBQUssT0FBTyxPQUFPO0FBQ25CLGFBQUssV0FBVyxPQUFPO0FBQ3ZCLGFBQUssWUFBWSxPQUFPO0FBQ3hCLGFBQUssYUFBYSxNQUFNLFNBQVMsS0FBSyxLQUFLO0FBQzNDLGFBQUssT0FBTztBQUNaLGFBQUssUUFBUTtBQUNiLGFBQUssT0FBTyxPQUFPO0FBQUEsTUFDckI7QUFRQSxtQkFBYUEsY0FBYSxDQUFDO0FBQUEsUUFDekIsS0FBSztBQUFBLFFBQ0wsT0FBTyxTQUFTLFVBQVUsT0FBTyxnQkFBZ0I7QUFDL0MsZUFBSyxPQUFPLENBQUM7QUFFYixjQUFJLEtBQUssV0FBVztBQUNsQixpQkFBSyxPQUFPLE1BQU0sa0JBQWtCLEtBQUssU0FBUztBQUVsRCxnQkFBSSxNQUFNLGVBQWUsR0FBRztBQUMxQixtQkFBSyxRQUFRLEtBQUs7QUFBQSxZQUNwQjtBQUFBLFVBQ0YsT0FBTztBQUNMLGlCQUFLLFFBQVEsTUFBTSxnQkFBZ0IsS0FBSyxJQUFJO0FBQzVDLGlCQUFLLE9BQU8sTUFBTSxrQkFBa0IsTUFBTSxjQUFjLEtBQUssS0FBSztBQUFBLFVBQ3BFO0FBRUEsZUFBSywrQkFBK0IsTUFBTSxrQkFBa0IsS0FBSyxRQUFRLGNBQWM7QUFDdkYsZUFBSyxPQUFPLE1BQU0sdUJBQXVCLEtBQUssNEJBQTRCLEVBQUUsT0FBTyxLQUFLLGNBQWMsR0FBRyxLQUFLLFlBQVksTUFBTSxnQkFBZ0IsS0FBSyxRQUFRLENBQUM7QUFDOUosaUJBQU87QUFBQSxRQUNUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFRRixHQUFHO0FBQUEsUUFDRCxLQUFLO0FBQUEsUUFDTCxPQUFPLFNBQVMsZ0JBQWdCO0FBQzlCLGlCQUFPLE1BQU0sS0FBSyxVQUFVO0FBQUEsUUFDOUI7QUFBQSxNQUNGLENBQUMsQ0FBQztBQUVGLGFBQU9BO0FBQUEsSUFDVCxHQUFFO0FBUUYsUUFBSSxlQUE0Qiw0QkFBWTtBQUMxQyxlQUFTQyxjQUFhLFFBQVE7QUFDNUIsd0JBQWdCLE1BQU1BLGFBQVk7QUFHbEMsaUJBQVMsT0FBTyxPQUFPO0FBQUEsVUFDckIsU0FBUztBQUFBLFVBQ1QsVUFBVTtBQUFBLFVBQ1YsTUFBTTtBQUFBLFFBQ1IsR0FBRyxNQUFNO0FBQ1QsYUFBSyxPQUFPO0FBQ1osYUFBSyxVQUFVLE9BQU87QUFDdEIsYUFBSyxRQUFRLE9BQU87QUFDcEIsYUFBSyxXQUFXLE9BQU87QUFDdkIsYUFBSyxXQUFXLE9BQU87QUFDdkIsYUFBSyxhQUFhLE1BQU0sU0FBUyxLQUFLLEtBQUs7QUFDM0MsYUFBSyxPQUFPLE9BQU87QUFDbkIsYUFBSyxRQUFRLE1BQU0sZ0JBQWdCLEtBQUssUUFBUTtBQUNoRCxhQUFLLE9BQU8sT0FBTztBQUFBLE1BQ3JCO0FBUUEsbUJBQWFBLGVBQWMsQ0FBQztBQUFBLFFBQzFCLEtBQUs7QUFBQSxRQUNMLE9BQU8sU0FBUyxVQUFVLE9BQU8sZ0JBQWdCO0FBQy9DLGNBQUksS0FBSyxTQUFTLE1BQU07QUFDdEIsaUJBQUssT0FBTyxNQUFNLGtCQUFrQixLQUFLLFFBQVEsTUFBTSxXQUFXO0FBQUEsVUFDcEU7QUFFQSxlQUFLLCtCQUErQixNQUFNLGtCQUFrQixLQUFLLFFBQVEsY0FBYztBQUN2RixlQUFLLE9BQU8sTUFBTSx1QkFBdUIsS0FBSyw0QkFBNEIsRUFBRSxPQUFPLEtBQUssY0FBYyxHQUFHLEtBQUssWUFBWSxNQUFNLGdCQUFnQixLQUFLLFFBQVEsQ0FBQztBQUM5SixpQkFBTztBQUFBLFFBQ1Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVFGLEdBQUc7QUFBQSxRQUNELEtBQUs7QUFBQSxRQUNMLE9BQU8sU0FBUyxnQkFBZ0I7QUFDOUIsaUJBQU8sTUFBTSxLQUFLLFVBQVU7QUFBQSxRQUM5QjtBQUFBLE1BQ0YsQ0FBQyxDQUFDO0FBRUYsYUFBT0E7QUFBQSxJQUNULEdBQUU7QUFRRixRQUFJLFlBQXlCLDRCQUFZO0FBQ3ZDLGVBQVNDLFdBQVUsUUFBUTtBQUN6Qix3QkFBZ0IsTUFBTUEsVUFBUztBQUcvQixpQkFBUyxPQUFPLE9BQU87QUFBQSxVQUNyQixTQUFTO0FBQUEsVUFDVCxRQUFRO0FBQUEsVUFDUixZQUFZO0FBQUEsVUFDWixXQUFXO0FBQUEsVUFDWCxVQUFVO0FBQUEsVUFDVixNQUFNO0FBQUEsUUFDUixHQUFHLE1BQU07QUFDVCxhQUFLLE9BQU8sQ0FBQztBQUNiLGFBQUssT0FBTztBQUNaLGFBQUssUUFBUSxNQUFNLFFBQVEsT0FBTyxLQUFLO0FBQ3ZDLGFBQUssVUFBVSxPQUFPO0FBQ3RCLGFBQUssV0FBVyxPQUFPO0FBQ3ZCLGFBQUssUUFBUSxPQUFPO0FBQ3BCLGFBQUssU0FBUyxPQUFPO0FBQ3JCLGFBQUssYUFBYSxPQUFPO0FBQ3pCLGFBQUssWUFBWSxPQUFPO0FBQ3hCLGFBQUssV0FBVyxPQUFPO0FBQ3ZCLGFBQUssT0FBTyxPQUFPO0FBQ25CLGFBQUssZUFBZSxNQUFNLGdCQUFnQixLQUFLLFFBQVE7QUFDdkQsYUFBSyxlQUFlLE1BQU0sZ0JBQWdCLEtBQUssSUFBSTtBQUNuRCxhQUFLLFNBQVMsQ0FBQztBQUFBLE1BQ2pCO0FBT0EsbUJBQWFBLFlBQVcsQ0FBQztBQUFBLFFBQ3ZCLEtBQUs7QUFBQSxRQUNMLE9BQU8sU0FBUyxZQUFZO0FBQzFCLGNBQUksUUFBUTtBQUdaLGVBQUssT0FBTyxDQUFDO0FBQ2IsZUFBSztBQUNMLGVBQUs7QUFFTCxjQUFJLEtBQUssT0FBTztBQUNkLGdCQUFJLGdCQUFnQjtBQUNwQixpQkFBSyxRQUFRLE1BQU0sUUFBUSxLQUFLLEtBQUs7QUFDckMsaUJBQUssTUFBTSxRQUFRLFNBQVUsT0FBTztBQUNsQyxrQkFBSSxZQUFZLElBQUlBLFdBQVU7QUFBQSxnQkFDNUIsT0FBTyxNQUFNO0FBQUEsZ0JBQ2IsVUFBVSxNQUFNO0FBQUEsY0FDbEIsQ0FBQztBQUNELG9CQUFNLE9BQU8sTUFBTSxLQUFLLE9BQU8sVUFBVSxJQUFJO0FBQUEsWUFDL0MsQ0FBQztBQUFBLFVBQ0g7QUFHQSxjQUFJLENBQUMsS0FBSyxZQUFZO0FBRXBCLHFCQUFTLElBQUksR0FBRyxJQUFJLEtBQUssUUFBUSxLQUFLO0FBRXBDLG1CQUFLLE1BQU0sUUFBUSxTQUFVTixJQUFHLEdBQUc7QUFDakMsb0JBQUksS0FBSyxHQUFHO0FBQ1Ysc0JBQUksWUFBWSxJQUFJLFlBQVk7QUFBQSxvQkFDOUIsU0FBUyxNQUFNO0FBQUEsb0JBQ2YsTUFBTSxNQUFNO0FBQUEsb0JBQ1osVUFBVSxNQUFNO0FBQUEsb0JBQ2hCLE9BQU9BO0FBQUEsb0JBQ1AsV0FBVyxNQUFNO0FBQUEsa0JBQ25CLENBQUM7QUFBQSxnQkFDSCxPQUFPO0FBR0wsc0JBQUksWUFBWSxJQUFJLFlBQVk7QUFBQSxvQkFDOUIsU0FBUyxNQUFNO0FBQUEsb0JBQ2YsTUFBTTtBQUFBLG9CQUNOLFVBQVUsTUFBTTtBQUFBLG9CQUNoQixPQUFPQTtBQUFBLG9CQUNQLFdBQVcsTUFBTTtBQUFBLGtCQUNuQixDQUFDO0FBQUEsZ0JBQ0g7QUFFQSxzQkFBTSxPQUFPLEtBQUssU0FBUztBQUFBLGNBQzdCLENBQUM7QUFFRCxtQkFBSyxNQUFNLFFBQVEsU0FBVUEsSUFBRyxHQUFHO0FBQ2pDLG9CQUFJLEtBQUssR0FBRztBQUVWLHNCQUFJLGFBQWEsSUFBSSxhQUFhO0FBQUEsb0JBQ2hDLFNBQVMsTUFBTTtBQUFBLG9CQUNmLFVBQVUsTUFBTTtBQUFBLG9CQUNoQixVQUFVLE1BQU07QUFBQSxvQkFDaEIsT0FBT0E7QUFBQSxvQkFDUCxNQUFNLE1BQU0sY0FBYyxPQUFPLE1BQU0sZ0JBQWdCLE1BQU0sUUFBUSxJQUFJLE1BQU0sWUFBWTtBQUFBLGtCQUM3RixDQUFDO0FBQUEsZ0JBQ0gsT0FBTztBQUdMLHNCQUFJLGFBQWEsSUFBSSxhQUFhO0FBQUEsb0JBQ2hDLFNBQVMsTUFBTTtBQUFBLG9CQUNmLFVBQVU7QUFBQSxvQkFDVixVQUFVLE1BQU07QUFBQSxvQkFDaEIsT0FBT0E7QUFBQSxvQkFDUCxNQUFNLE1BQU0sY0FBYyxPQUFPLE1BQU0sZ0JBQWdCLE1BQU0sUUFBUSxJQUFJLE1BQU0sWUFBWTtBQUFBLGtCQUM3RixDQUFDO0FBQUEsZ0JBQ0g7QUFFQSxzQkFBTSxPQUFPLEtBQUssVUFBVTtBQUFBLGNBQzlCLENBQUM7QUFBQSxZQUNIO0FBQUEsVUFDRixPQUFPO0FBRUwscUJBQVMsSUFBSSxHQUFHLElBQUksS0FBSyxRQUFRLEtBQUs7QUFDcEMsbUJBQUssTUFBTSxRQUFRLFNBQVVBLElBQUcsR0FBRztBQUVqQyxvQkFBSSxZQUFZLElBQUksWUFBWTtBQUFBLGtCQUM5QixTQUFTLE1BQU07QUFBQSxrQkFDZixNQUFNLElBQUksSUFBSSxJQUFJLE1BQU07QUFBQTtBQUFBLGtCQUV4QixVQUFVLE1BQU07QUFBQSxrQkFDaEIsT0FBT0E7QUFBQSxrQkFDUCxXQUFXLE1BQU07QUFBQSxnQkFDbkIsQ0FBQztBQUNELG9CQUFJLGFBQWEsSUFBSSxhQUFhO0FBQUEsa0JBQ2hDLFNBQVMsTUFBTTtBQUFBLGtCQUNmLFVBQVUsTUFBTTtBQUFBLGtCQUNoQixVQUFVLE1BQU07QUFBQSxrQkFDaEIsT0FBT0E7QUFBQSxnQkFDVCxDQUFDO0FBRUQsc0JBQU0sT0FBTyxLQUFLLFdBQVcsVUFBVTtBQUFBLGNBQ3pDLENBQUM7QUFBQSxZQUNIO0FBQUEsVUFDRjtBQUVBLGlCQUFPO0FBQUEsUUFDVDtBQUFBLE1BQ0YsQ0FBQyxDQUFDO0FBRUYsYUFBT007QUFBQSxJQUNULEdBQUU7QUFTRixRQUFJLGNBQWMsU0FBU0MsYUFBWSxTQUFTO0FBQzlDLFVBQUksV0FBVyxHQUFHO0FBQ2hCLGVBQU8sS0FBSyxNQUFNLFNBQVMsVUFBVSxLQUFLLENBQUM7QUFBQSxNQUM3QztBQUVBLGFBQU8sS0FBSyxNQUFNLFNBQVMsVUFBVSxLQUFLLENBQUM7QUFBQSxJQUM3QztBQUVBLFFBQUksaUJBQWlCLFNBQVNDLGdCQUFlLFFBQVE7QUFDbkQsc0JBQWdCLE1BQU1BLGVBQWM7QUFFcEMsV0FBSyxPQUFPO0FBQ1osVUFBSSxTQUFTLFlBQVksT0FBTyxJQUFJO0FBQ3BDLFVBQUksVUFBVSxPQUFPLFdBQVc7QUFDaEMsVUFBSSxXQUFXLFNBQVM7QUFDeEIsVUFBSSxXQUFXLFVBQVUsSUFBSTtBQUM3QixXQUFLLE9BQU8sTUFBTSx1QkFBdUIsQ0FBSSxFQUFFLE9BQU8sVUFBVSxvQkFBb0IsU0FBUyxVQUFVLFFBQVE7QUFBQSxJQUNqSDtBQVFBLFFBQUkscUJBQXFCLFNBQVNDLG9CQUFtQixRQUFRO0FBQzNELHNCQUFnQixNQUFNQSxtQkFBa0I7QUFFeEMsV0FBSyxPQUFPO0FBRVosV0FBSyxPQUFPLE1BQU0sdUJBQXVCLENBQUksRUFBRSxPQUFPLFVBQVUsdUJBQXVCLE9BQU8sVUFBVTtBQUFBLElBQzFHO0FBUUEsUUFBSSx3QkFBd0IsU0FBU0MsdUJBQXNCLFFBQVE7QUFDakUsc0JBQWdCLE1BQU1BLHNCQUFxQjtBQUUzQyxXQUFLLE9BQU87QUFFWixXQUFLLE9BQU8sTUFBTSx1QkFBdUIsQ0FBSSxFQUFFLE9BQU8sVUFBVSwwQkFBMEIsT0FBTyxrQkFBa0IsT0FBTyxlQUFlO0FBQUEsSUFDM0k7QUFRQSxRQUFJLGlCQUFpQixTQUFTQyxnQkFBZSxNQUFNO0FBQ2pELHNCQUFnQixNQUFNQSxlQUFjO0FBRXBDLFdBQUssT0FBTztBQUNaLFVBQUksWUFBWSxNQUFNLGNBQWMsSUFBSTtBQUV4QyxXQUFLLE9BQU8sTUFBTSx1QkFBdUIsQ0FBSSxFQUFFO0FBQUEsUUFBTyxVQUFVO0FBQUEsUUFBZSxVQUFVO0FBQUEsUUFBbUIsTUFBTSx1QkFBdUIsVUFBVSxNQUFNO0FBQUE7QUFBQSxRQUN6SjtBQUFBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFRQSxRQUFJLGdCQUFnQixTQUFTQyxlQUFjLE1BQU07QUFDL0Msc0JBQWdCLE1BQU1BLGNBQWE7QUFFbkMsV0FBSyxPQUFPO0FBQ1osVUFBSSxZQUFZLE1BQU0sY0FBYyxJQUFJO0FBRXhDLFdBQUssT0FBTyxNQUFNLHVCQUF1QixDQUFJLEVBQUU7QUFBQSxRQUFPLFVBQVU7QUFBQSxRQUFlLFVBQVU7QUFBQSxRQUFnQixNQUFNLHVCQUF1QixVQUFVLE1BQU07QUFBQTtBQUFBLFFBQ3RKO0FBQUE7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQU9BLFFBQUksZ0JBQWdCLFNBQVNDLGlCQUFnQjtBQUMzQyxzQkFBZ0IsTUFBTUEsY0FBYTtBQUVuQyxXQUFLLE9BQU87QUFFWixXQUFLLE9BQU8sTUFBTSx1QkFBdUIsQ0FBSSxFQUFFLE9BQU8sVUFBVSxlQUFlLFVBQVUsb0JBQW9CO0FBQUEsSUFDL0c7QUFRQSxRQUFJLHNCQUFzQixTQUFTQyxxQkFBb0IsTUFBTTtBQUMzRCxzQkFBZ0IsTUFBTUEsb0JBQW1CO0FBRXpDLFdBQUssT0FBTztBQUNaLFVBQUksWUFBWSxNQUFNLGNBQWMsSUFBSTtBQUV4QyxXQUFLLE9BQU8sTUFBTSx1QkFBdUIsQ0FBSSxFQUFFO0FBQUEsUUFBTyxVQUFVO0FBQUEsUUFBZSxVQUFVO0FBQUEsUUFBeUIsTUFBTSx1QkFBdUIsVUFBVSxNQUFNO0FBQUE7QUFBQSxRQUMvSjtBQUFBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFPQSxRQUFJLG9CQUFvQixTQUFTQyxtQkFBa0IsSUFBSSxJQUFJO0FBQ3pELHNCQUFnQixNQUFNQSxrQkFBaUI7QUFFdkMsV0FBSyxPQUFPO0FBQ1osVUFBSSxPQUFPLE1BQU07QUFDakIsV0FBSyxNQUFNO0FBRVgsVUFBSSxPQUFPLE9BQU8sYUFBYTtBQUM3QixZQUFJLFNBQVMsQ0FBQyxDQUFDLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssTUFBTSxJQUFJLEdBQUcsQ0FBQyxNQUFNLE1BQU0sTUFBTSxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLE1BQU0sTUFBTSxNQUFNLE1BQU0sSUFBSSxDQUFDO0FBQ3RMLFlBQUksU0FBUyxHQUFHO0FBQ2hCLFlBQUlDLFFBQU8sTUFBTTtBQUNqQixZQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLFlBQVksRUFBRyxRQUFPO0FBRTFDLFlBQUksU0FBUyxHQUFHO0FBQ2Qsa0JBQVEsR0FBRyxPQUFPLFNBQVMsQ0FBQyxHQUFHO0FBQUEsWUFDN0IsS0FBSztBQUNILHFCQUFPO0FBQ1AsY0FBQUEsUUFBTyxHQUFHLE9BQU8sQ0FBQyxFQUFFLFlBQVk7QUFDaEMsY0FBQUEsUUFBT0EsTUFBSyxPQUFPLEdBQUcsVUFBVSxHQUFHLFNBQVMsQ0FBQyxDQUFDO0FBQzlDO0FBQUEsWUFFRixLQUFLO0FBQ0gscUJBQU87QUFDUCxjQUFBQSxRQUFPLEdBQUcsT0FBTyxDQUFDLEVBQUUsWUFBWTtBQUNoQyxjQUFBQSxRQUFPQSxNQUFLLE9BQU8sR0FBRyxVQUFVLEdBQUcsU0FBUyxDQUFDLENBQUM7QUFDOUM7QUFBQSxZQUVGLEtBQUs7QUFDSCxxQkFBTztBQUNQLGNBQUFBLFFBQU8sR0FBRyxPQUFPLENBQUMsRUFBRSxZQUFZO0FBQ2hDLGNBQUFBLFFBQU9BLE1BQUssT0FBTyxHQUFHLFVBQVUsR0FBRyxTQUFTLENBQUMsQ0FBQztBQUM5QztBQUFBLFlBRUYsS0FBSztBQUNILHFCQUFPO0FBQ1AsY0FBQUEsUUFBTyxHQUFHLE9BQU8sQ0FBQyxFQUFFLFlBQVk7QUFDaEMsY0FBQUEsUUFBT0EsTUFBSyxPQUFPLEdBQUcsVUFBVSxHQUFHLFNBQVMsQ0FBQyxDQUFDO0FBQzlDO0FBQUEsVUFDSjtBQUFBLFFBQ0Y7QUFFQSxZQUFJLGFBQWEsT0FBTyxJQUFJLEVBQUUsUUFBUUEsS0FBSTtBQUMxQyxhQUFLLGVBQWUsS0FBSyxJQUFJLGFBQWE7QUFBQSxNQUM1QztBQUdBLFdBQUssT0FBTyxNQUFNLHVCQUF1QixDQUFJLEVBQUU7QUFBQSxRQUFPLFVBQVU7QUFBQSxRQUFlLFVBQVU7QUFBQSxRQUF1QixDQUFDLENBQUk7QUFBQTtBQUFBLFFBQ3JILE1BQU0sY0FBYyxJQUFJLENBQUM7QUFBQTtBQUFBLFFBQ3pCLE1BQU0sY0FBYyxNQUFNLENBQUM7QUFBQTtBQUFBLE1BQzNCO0FBQUEsSUFDRjtBQVFBLFFBQUksYUFBYSxTQUFTQyxZQUFXLE1BQU07QUFDekMsc0JBQWdCLE1BQU1BLFdBQVU7QUFFaEMsV0FBSyxPQUFPO0FBQ1osVUFBSSxZQUFZLE1BQU0sY0FBYyxJQUFJO0FBRXhDLFdBQUssT0FBTyxNQUFNLHVCQUF1QixDQUFJLEVBQUU7QUFBQSxRQUFPLFVBQVU7QUFBQSxRQUFlLFVBQVU7QUFBQSxRQUFlLE1BQU0sdUJBQXVCLFVBQVUsTUFBTTtBQUFBO0FBQUEsUUFDcko7QUFBQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBUUEsUUFBSSxjQUFjLFNBQVNDLGFBQVksTUFBTTtBQUMzQyxzQkFBZ0IsTUFBTUEsWUFBVztBQUVqQyxXQUFLLE9BQU87QUFDWixVQUFJLFlBQVksTUFBTSxjQUFjLElBQUk7QUFFeEMsV0FBSyxPQUFPLE1BQU0sdUJBQXVCLENBQUksRUFBRTtBQUFBLFFBQU8sVUFBVTtBQUFBLFFBQWUsVUFBVTtBQUFBLFFBQWdCLE1BQU0sdUJBQXVCLFVBQVUsTUFBTTtBQUFBO0FBQUEsUUFDdEo7QUFBQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBUUEsUUFBSSxhQUFhLFNBQVNDLFlBQVcsS0FBSztBQUN4QyxzQkFBZ0IsTUFBTUEsV0FBVTtBQUVoQyxXQUFLLE9BQU87QUFDWixVQUFJQyxTQUFRLEtBQUssTUFBTSxNQUFXLEdBQUc7QUFFckMsV0FBSyxPQUFPLE1BQU0sdUJBQXVCLENBQUksRUFBRTtBQUFBLFFBQU8sVUFBVTtBQUFBLFFBQWUsVUFBVTtBQUFBLFFBQWUsQ0FBQyxDQUFJO0FBQUE7QUFBQSxRQUM3RyxNQUFNLGNBQWNBLFFBQU8sQ0FBQztBQUFBO0FBQUEsTUFDNUI7QUFBQSxJQUNGO0FBUUEsUUFBSSxZQUFZLFNBQVNDLFdBQVUsTUFBTTtBQUN2QyxzQkFBZ0IsTUFBTUEsVUFBUztBQUUvQixXQUFLLE9BQU87QUFDWixVQUFJLFlBQVksTUFBTSxjQUFjLElBQUk7QUFFeEMsV0FBSyxPQUFPLE1BQU0sdUJBQXVCLENBQUksRUFBRTtBQUFBLFFBQU8sVUFBVTtBQUFBLFFBQWUsVUFBVTtBQUFBLFFBQWMsTUFBTSx1QkFBdUIsVUFBVSxNQUFNO0FBQUE7QUFBQSxRQUNwSjtBQUFBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFPQSxRQUFJLHFCQUFxQixTQUFTQyxvQkFBbUIsV0FBVyxhQUFhLG1CQUFtQixtQkFBbUI7QUFDakgsc0JBQWdCLE1BQU1BLG1CQUFrQjtBQUV4QyxXQUFLLE9BQU87QUFFWixXQUFLLE9BQU8sTUFBTSx1QkFBdUIsQ0FBSSxFQUFFO0FBQUEsUUFBTyxVQUFVO0FBQUEsUUFBZSxVQUFVO0FBQUEsUUFBd0IsQ0FBQyxDQUFJO0FBQUE7QUFBQSxRQUN0SCxNQUFNLGNBQWMsV0FBVyxDQUFDO0FBQUE7QUFBQSxRQUNoQyxNQUFNLGNBQWMsS0FBSyxLQUFLLFdBQVcsR0FBRyxDQUFDO0FBQUE7QUFBQSxRQUM3QyxNQUFNLGNBQWMscUJBQXFCLElBQUksQ0FBQztBQUFBO0FBQUEsUUFDOUMsTUFBTSxjQUFjLHFCQUFxQixHQUFHLENBQUM7QUFBQTtBQUFBLE1BQzdDO0FBQUEsSUFDRjtBQVFBLFFBQUksaUJBQWlCLFNBQVNDLGdCQUFlLE1BQU07QUFDakQsc0JBQWdCLE1BQU1BLGVBQWM7QUFFcEMsV0FBSyxPQUFPO0FBQ1osVUFBSSxZQUFZLE1BQU0sY0FBYyxJQUFJO0FBRXhDLFdBQUssT0FBTyxNQUFNLHVCQUF1QixDQUFJLEVBQUU7QUFBQSxRQUFPLFVBQVU7QUFBQSxRQUFlLFVBQVU7QUFBQSxRQUFvQixNQUFNLHVCQUF1QixVQUFVLE1BQU07QUFBQTtBQUFBLFFBQzFKO0FBQUE7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQVFBLFFBQUksUUFBcUIsNEJBQVk7QUFDbkMsZUFBU0MsU0FBUTtBQUNmLHdCQUFnQixNQUFNQSxNQUFLO0FBRTNCLGFBQUssT0FBTyxVQUFVO0FBQ3RCLGFBQUssT0FBTyxDQUFDO0FBQ2IsYUFBSyxPQUFPLENBQUM7QUFDYixhQUFLLFNBQVMsQ0FBQztBQUNmLGFBQUsscUJBQXFCLENBQUM7QUFHM0IsYUFBSyxjQUFjO0FBQUEsTUFDckI7QUFXQSxtQkFBYUEsUUFBTyxDQUFDO0FBQUEsUUFDbkIsS0FBSztBQUFBLFFBQ0wsT0FBTyxTQUFTLFNBQVMsUUFBUSxhQUFhO0FBQzVDLGNBQUksUUFBUTtBQUVaLGdCQUFNLFFBQVEsTUFBTSxFQUFFLFFBQVEsU0FBVSxPQUFPLEdBQUc7QUFDaEQsZ0JBQUksaUJBQWlCLFdBQVc7QUFFOUIsa0JBQUksT0FBTyxnQkFBZ0IsWUFBWTtBQUNyQyxvQkFBSSxhQUFhLFlBQVksR0FBRyxLQUFLO0FBRXJDLG9CQUFJLFFBQVEsVUFBVSxNQUFNLFVBQVU7QUFDcEMsMkJBQVMsS0FBSyxZQUFZO0FBQ3hCLDRCQUFRLEdBQUc7QUFBQSxzQkFDVCxLQUFLO0FBQ0gsOEJBQU0sVUFBVSxXQUFXLENBQUM7QUFDNUI7QUFBQSxzQkFFRixLQUFLO0FBQ0gsOEJBQU0sV0FBVyxXQUFXLENBQUM7QUFDN0I7QUFBQSxzQkFFRixLQUFLO0FBQ0gsOEJBQU0sYUFBYSxXQUFXLENBQUM7QUFDL0I7QUFBQSxzQkFFRixLQUFLO0FBQ0gsOEJBQU0sV0FBVyxNQUFNLGdCQUFnQixXQUFXLENBQUMsQ0FBQztBQUNwRDtBQUFBLG9CQUNKO0FBQUEsa0JBQ0Y7QUFBQSxnQkFDRjtBQUFBLGNBQ0Y7QUFHQSxrQkFBSSxNQUFNLGNBQWMsTUFBTTtBQUM1QixzQkFBTSxtQkFBbUIsS0FBSyxLQUFLO0FBQUEsY0FDckMsT0FBTztBQUVMLHNCQUFNLFVBQVUsRUFBRSxPQUFPLFFBQVEsU0FBVSxHQUFHO0FBQzVDLHlCQUFPLE1BQU0sT0FBTyxLQUFLLENBQUM7QUFBQSxnQkFDNUIsQ0FBQztBQUFBLGNBQ0g7QUFBQSxZQUNGLE9BQU87QUFDTCxvQkFBTSxPQUFPLEtBQUssS0FBSztBQUFBLFlBQ3pCO0FBQUEsVUFDRixDQUFDO0FBQ0QsaUJBQU87QUFBQSxRQUNUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU1GLEdBQUc7QUFBQSxRQUNELEtBQUs7QUFBQSxRQUNMLE9BQU8sU0FBUyxZQUFZO0FBQzFCLGNBQUksU0FBUztBQUliLGVBQUssbUJBQW1CLFdBQVcsRUFBRSxTQUFTLElBQUksY0FBYyxDQUFDO0FBRWpFLGVBQUssT0FBTyxDQUFDO0FBQ2IsZUFBSyxPQUFPLENBQUM7QUFDYixlQUFLLGNBQWM7QUFDbkIsY0FBSSxnQkFBZ0I7QUFDcEIsZUFBSyxPQUFPLFFBQVEsU0FBVSxPQUFPLFlBQVk7QUFFL0MsZ0JBQUksaUJBQWlCLGVBQWUsaUJBQWlCLGNBQWM7QUFDakUsa0JBQUksUUFBUSxNQUFNLFVBQVUsUUFBUSxhQUFhO0FBQ2pELDhCQUFnQixNQUFNLGlCQUFpQixNQUFNLGdDQUFnQyxDQUFDO0FBQzlFLHFCQUFPLE9BQU8sT0FBTyxLQUFLLE9BQU8sTUFBTSxJQUFJO0FBQzNDLHFCQUFPLGNBQWMsTUFBTSxrQkFBa0IsTUFBTSxJQUFJO0FBQUEsWUFDekQsT0FBTztBQUNMLHFCQUFPLE9BQU8sT0FBTyxLQUFLLE9BQU8sTUFBTSxJQUFJO0FBQUEsWUFDN0M7QUFBQSxVQUNGLENBQUM7QUFDRCxlQUFLLHdCQUF3QjtBQUM3QixlQUFLLE9BQU8sTUFBTSxjQUFjLEtBQUssS0FBSyxRQUFRLENBQUM7QUFFbkQsaUJBQU87QUFBQSxRQUNUO0FBQUEsTUFDRixHQUFHO0FBQUEsUUFDRCxLQUFLO0FBQUEsUUFDTCxPQUFPLFNBQVMsMEJBQTBCO0FBQ3hDLGNBQUksU0FBUztBQUViLGNBQUksQ0FBQyxLQUFLLG1CQUFtQixPQUFRO0FBRXJDLGVBQUssbUJBQW1CLEtBQUssU0FBVSxHQUFHLEdBQUc7QUFDM0MsbUJBQU8sRUFBRSxZQUFZLEVBQUU7QUFBQSxVQUN6QixDQUFDO0FBSUQsZUFBSyxtQkFBbUIsUUFBUSxTQUFVLFdBQVc7QUFJbkQsc0JBQVUsVUFBVSxFQUFFLE9BQU8sUUFBUSxTQUFVLEdBQUc7QUFDaEQscUJBQU8sRUFBRSxVQUFVLE1BQU07QUFBQSxZQUMzQixDQUFDO0FBRUQsc0JBQVUsT0FBTyxRQUFRLFNBQVUsT0FBTztBQUN4QyxxQkFBTyxPQUFPLGlCQUFpQixLQUFLO0FBQUEsWUFDdEMsQ0FBQztBQUFBLFVBQ0gsQ0FBQztBQUVELGVBQUsscUJBQXFCLENBQUM7QUFDM0IsZUFBSyxVQUFVO0FBQUEsUUFDakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFPRixHQUFHO0FBQUEsUUFDRCxLQUFLO0FBQUEsUUFDTCxPQUFPLFNBQVMsV0FBVyxPQUFPO0FBQ2hDLGNBQUksU0FBUztBQUdiLGVBQUssVUFBVTtBQUVmLGdCQUFNLFVBQVUsRUFBRSxPQUFPLFFBQVEsU0FBVSxPQUFPO0FBQ2hELG1CQUFPLE9BQU8saUJBQWlCLEtBQUs7QUFBQSxVQUN0QyxDQUFDO0FBQUEsUUFDSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU9GLEdBQUc7QUFBQSxRQUNELEtBQUs7QUFBQSxRQUNMLE9BQU8sU0FBUyxpQkFBaUIsT0FBTztBQUV0QyxjQUFJLGlCQUFpQjtBQUVyQixtQkFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLE9BQU8sUUFBUSxLQUFLO0FBQzNDLGdCQUFJLEtBQUssT0FBTyxDQUFDLEVBQUUsT0FBTyxNQUFNLEtBQU07QUFDdEMsNkJBQWlCO0FBQUEsVUFDbkI7QUFFQSxjQUFJLG9CQUFvQixpQkFBaUI7QUFFekMsZ0JBQU0sUUFBUSxNQUFNLE9BQU8sS0FBSyxPQUFPLGNBQWMsRUFBRTtBQUV2RCxlQUFLLE9BQU8sT0FBTyxtQkFBbUIsR0FBRyxLQUFLO0FBRTlDLG1CQUFTLElBQUksb0JBQW9CLEdBQUcsSUFBSSxLQUFLLE9BQU8sUUFBUSxLQUFLO0FBRy9ELGlCQUFLLE9BQU8sQ0FBQyxFQUFFLFFBQVEsS0FBSyxPQUFPLENBQUMsRUFBRSxPQUFPLEtBQUssT0FBTyxJQUFJLENBQUMsRUFBRTtBQUFBLFVBQ2xFO0FBQUEsUUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU9GLEdBQUc7QUFBQSxRQUNELEtBQUs7QUFBQSxRQUNMLE9BQU8sU0FBUyxtQkFBbUIsV0FBVztBQUM1QyxjQUFJLFNBQVM7QUFFYixlQUFLLE9BQU8sUUFBUSxTQUFVLE9BQU8sT0FBTztBQUMxQyxnQkFBSSxNQUFNLFNBQVMsV0FBVztBQUM1QixxQkFBTyxPQUFPLE9BQU8sT0FBTyxDQUFDO0FBQUEsWUFDL0I7QUFBQSxVQUNGLENBQUM7QUFDRCxpQkFBTztBQUFBLFFBQ1Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFPRixHQUFHO0FBQUEsUUFDRCxLQUFLO0FBQUEsUUFDTCxPQUFPLFNBQVMsU0FBUyxLQUFLO0FBQzVCLGlCQUFPLEtBQUssU0FBUyxJQUFJLFdBQVcsR0FBRyxDQUFDO0FBQUEsUUFDMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFVRixHQUFHO0FBQUEsUUFDRCxLQUFLO0FBQUEsUUFDTCxPQUFPLFNBQVMsaUJBQWlCLFdBQVcsYUFBYSxtQkFBbUIsbUJBQW1CO0FBQzdGLGlCQUFPLEtBQUssU0FBUyxJQUFJLG1CQUFtQixXQUFXLGFBQWEsbUJBQW1CLGlCQUFpQixDQUFDO0FBQUEsUUFDM0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVFGLEdBQUc7QUFBQSxRQUNELEtBQUs7QUFBQSxRQUNMLE9BQU8sU0FBUyxnQkFBZ0IsSUFBSSxJQUFJO0FBQ3RDLGlCQUFPLEtBQUssU0FBUyxJQUFJLGtCQUFrQixJQUFJLEVBQUUsQ0FBQztBQUFBLFFBQ3BEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BT0YsR0FBRztBQUFBLFFBQ0QsS0FBSztBQUFBLFFBQ0wsT0FBTyxTQUFTLFFBQVEsTUFBTTtBQUM1QixpQkFBTyxLQUFLLFNBQVMsSUFBSSxVQUFVLElBQUksQ0FBQztBQUFBLFFBQzFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BT0YsR0FBRztBQUFBLFFBQ0QsS0FBSztBQUFBLFFBQ0wsT0FBTyxTQUFTLGFBQWEsTUFBTTtBQUNqQyxpQkFBTyxLQUFLLFNBQVMsSUFBSSxlQUFlLElBQUksQ0FBQztBQUFBLFFBQy9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BT0YsR0FBRztBQUFBLFFBQ0QsS0FBSztBQUFBLFFBQ0wsT0FBTyxTQUFTLGFBQWEsTUFBTTtBQUNqQyxpQkFBTyxLQUFLLFNBQVMsSUFBSSxlQUFlLElBQUksQ0FBQztBQUFBLFFBQy9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BT0YsR0FBRztBQUFBLFFBQ0QsS0FBSztBQUFBLFFBQ0wsT0FBTyxTQUFTLGtCQUFrQixNQUFNO0FBQ3RDLGlCQUFPLEtBQUssU0FBUyxJQUFJLG9CQUFvQixJQUFJLENBQUM7QUFBQSxRQUNwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU9GLEdBQUc7QUFBQSxRQUNELEtBQUs7QUFBQSxRQUNMLE9BQU8sU0FBUyxVQUFVLE1BQU07QUFDOUIsaUJBQU8sS0FBSyxTQUFTLElBQUksWUFBWSxJQUFJLENBQUM7QUFBQSxRQUM1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU9GLEdBQUc7QUFBQSxRQUNELEtBQUs7QUFBQSxRQUNMLE9BQU8sU0FBUyxZQUFZLE1BQU07QUFDaEMsaUJBQU8sS0FBSyxTQUFTLElBQUksY0FBYyxJQUFJLENBQUM7QUFBQSxRQUM5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU9GLEdBQUc7QUFBQSxRQUNELEtBQUs7QUFBQSxRQUNMLE9BQU8sU0FBUyxTQUFTLE1BQU07QUFDN0IsaUJBQU8sS0FBSyxTQUFTLElBQUksV0FBVyxJQUFJLENBQUM7QUFBQSxRQUMzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFNRixHQUFHO0FBQUEsUUFDRCxLQUFLO0FBQUEsUUFDTCxPQUFPLFNBQVMsYUFBYTtBQUMzQixjQUFJLFFBQVEsSUFBSSxZQUFZO0FBQUEsWUFDMUIsTUFBTSxDQUFDLEdBQU0sS0FBTSxLQUFNLENBQUk7QUFBQSxVQUMvQixDQUFDO0FBQ0QsaUJBQU8sS0FBSyxTQUFTLEtBQUs7QUFBQSxRQUM1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU9GLEdBQUc7QUFBQSxRQUNELEtBQUs7QUFBQSxRQUNMLE9BQU8sU0FBUyxhQUFhLE1BQU07QUFDakMsaUJBQU8sS0FBSyxTQUFTLElBQUksZUFBZTtBQUFBLFlBQ3RDO0FBQUEsVUFDRixDQUFDLENBQUM7QUFBQSxRQUNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFRRixHQUFHO0FBQUEsUUFDRCxLQUFLO0FBQUEsUUFDTCxPQUFPLFNBQVMsaUJBQWlCLFFBQVEsT0FBTztBQUM5QyxpQkFBTyxLQUFLLFNBQVMsSUFBSSxzQkFBc0I7QUFBQSxZQUM3QyxrQkFBa0I7QUFBQSxZQUNsQixpQkFBaUI7QUFBQSxVQUNuQixDQUFDLENBQUM7QUFBQSxRQUNKO0FBQUEsTUFDRixDQUFDLENBQUM7QUFFRixhQUFPQTtBQUFBLElBQ1QsR0FBRTtBQUVGLFFBQUksVUFBdUIsNEJBQVk7QUFDckMsZUFBU0MsV0FBVTtBQUNqQix3QkFBZ0IsTUFBTUEsUUFBTztBQUFBLE1BQy9CO0FBRUEsbUJBQWFBLFVBQVMsQ0FBQztBQUFBLFFBQ3JCLEtBQUs7QUFBQSxRQUNMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUtBLFNBQVMsZUFBZSxPQUFPO0FBQzdCLGdCQUFJLFFBQVE7QUFFWixnQkFBSSxVQUFVLFVBQVUsU0FBUyxLQUFLLFVBQVUsQ0FBQyxNQUFNLFNBQVksVUFBVSxDQUFDLElBQUk7QUFBQSxjQUNoRix3QkFBd0I7QUFBQSxZQUMxQjtBQUNBLGdCQUFJLFFBQVEsSUFBSSxNQUFNO0FBQ3RCLGdCQUFJLE9BQU8sQ0FBQztBQUNaLGtCQUFNLFVBQVUsUUFBUSxTQUFVLFVBQVU7QUFDMUMsa0JBQUksU0FBUyxhQUFhLEtBQUs7QUFDN0Isc0JBQU0sU0FBUyxJQUFJLFVBQVU7QUFBQSxrQkFDM0IsT0FBTyxTQUFTLEtBQUssSUFBSSxTQUFVLE9BQU8sT0FBTztBQUMvQywyQkFBTyxNQUFNLGFBQWEsT0FBTyxPQUFPLFVBQVUsUUFBUSxzQkFBc0I7QUFBQSxrQkFDbEYsQ0FBQztBQUFBLGtCQUNELFVBQVUsTUFBTSxnQkFBZ0IsUUFBUTtBQUFBLGtCQUN4QztBQUFBLGdCQUNGLENBQUMsQ0FBQztBQUVGLHVCQUFPLENBQUM7QUFBQSxjQUNWLFdBQVcsU0FBUyxhQUFhLEtBQUs7QUFHcEMscUJBQUssS0FBSyxNQUFNLGdCQUFnQixRQUFRLENBQUM7QUFDekM7QUFBQSxjQUNGO0FBQUEsWUFDRixDQUFDO0FBR0QsZ0JBQUksS0FBSyxTQUFTLEdBQUc7QUFDbkIsb0JBQU0sU0FBUyxJQUFJLFVBQVU7QUFBQSxnQkFDM0IsT0FBTztBQUFBLGdCQUNQLFVBQVU7QUFBQSxnQkFDVjtBQUFBLGdCQUNBLFVBQVU7QUFBQSxjQUNaLENBQUMsQ0FBQztBQUFBLFlBQ0o7QUFFQSxtQkFBTztBQUFBLFVBQ1Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFTRixHQUFHO0FBQUEsUUFDRCxLQUFLO0FBQUEsUUFDTCxPQUFPLFNBQVMsYUFBYSxPQUFPLE9BQU9ULE9BQU07QUFDL0MsY0FBSSx5QkFBeUIsVUFBVSxTQUFTLEtBQUssVUFBVSxDQUFDLE1BQU0sU0FBWSxVQUFVLENBQUMsSUFBSTtBQUVqRyxjQUFJLGFBQWEsTUFBTSxNQUFNLEdBQUc7QUFHaEMsY0FBSSxjQUFjLFdBQVcsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxFQUFFLFFBQVEsS0FBSyxFQUFFO0FBRTVELGNBQUksd0JBQXdCO0FBQzFCLGdCQUFJO0FBRUosYUFBQyx1QkFBdUJBLE1BQUssZUFBZSxPQUFPLFFBQVEseUJBQXlCLFNBQVMsU0FBUyxxQkFBcUIsUUFBUSxTQUFVLFlBQVk7QUFDdkosa0JBQUksV0FBVyxVQUFVLE9BQU87QUFDOUIsb0JBQUksV0FBVyxTQUFTLEtBQUs7QUFDM0IsZ0NBQWM7QUFBQSxnQkFDaEIsT0FBTztBQUNMLGlDQUFlLFdBQVc7QUFBQSxnQkFDNUI7QUFBQSxjQUNGO0FBQUEsWUFDRixDQUFDO0FBQUEsVUFDSDtBQUVBLGlCQUFPLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxjQUFjLFdBQVcsQ0FBQztBQUFBLFFBQ3REO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU1GLEdBQUc7QUFBQSxRQUNELEtBQUs7QUFBQSxRQUNMLE9BQU8sU0FBUyxnQkFBZ0JBLE9BQU07QUFDcEMsaUJBQU8sSUFBSSxPQUFPQSxNQUFLLElBQUksSUFBSSxLQUFLLG9CQUFvQkEsTUFBSyxRQUFRLEtBQUtBLE1BQUssU0FBUyxNQUFNQSxNQUFLLE9BQU8sWUFBWTtBQUFBLFFBQ3hIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BT0YsR0FBRztBQUFBLFFBQ0QsS0FBSztBQUFBLFFBQ0wsT0FBTyxTQUFTLG9CQUFvQixVQUFVO0FBQzVDLGtCQUFRLFVBQVU7QUFBQSxZQUNoQixLQUFLO0FBQ0gscUJBQU87QUFBQSxZQUVULEtBQUs7QUFDSCxxQkFBTztBQUFBLFlBRVQsS0FBSztBQUNILHFCQUFPO0FBQUEsWUFFVDtBQUNFLHFCQUFPO0FBQUEsVUFDWDtBQUFBLFFBQ0Y7QUFBQSxNQUNGLENBQUMsQ0FBQztBQUVGLGFBQU9TO0FBQUEsSUFDVCxHQUFFO0FBUUYsUUFBSSxjQUFjLFNBQVNDLGFBQVksZ0JBQWdCO0FBQ3JELHNCQUFnQixNQUFNQSxZQUFXO0FBRWpDLFdBQUssT0FBTyxVQUFVO0FBQ3RCLFVBQUksWUFBWSxpQkFBaUIsSUFBSSxVQUFVLHVCQUF1QixVQUFVO0FBQ2hGLFdBQUssT0FBTyxVQUFVO0FBQUEsUUFBTyxNQUFNLGNBQWMsZ0JBQWdCLENBQUM7QUFBQTtBQUFBLFFBQ2xFLFVBQVU7QUFBQSxNQUFxQjtBQUMvQixXQUFLLE9BQU8sQ0FBQyxHQUFHLEdBQUcsR0FBRyxLQUFLLEtBQUssTUFBTTtBQUFBLElBQ3hDO0FBUUEsUUFBSSxTQUFzQiw0QkFBWTtBQUNwQyxlQUFTQyxRQUFPLFFBQVE7QUFDdEIsWUFBSSxRQUFRO0FBRVosd0JBQWdCLE1BQU1BLE9BQU07QUFHNUIsaUJBQVMsTUFBTSxRQUFRLE1BQU07QUFDN0IsYUFBSyxPQUFPLENBQUM7QUFDYixhQUFLLEtBQUssS0FBSyxJQUFJLFlBQVksT0FBTyxNQUFNLENBQUM7QUFFN0MsZUFBTyxRQUFRLFNBQVUsT0FBTyxHQUFHO0FBQ2pDLGdCQUFNLEtBQUssS0FBSyxNQUFNLFVBQVUsQ0FBQztBQUFBLFFBQ25DLENBQUM7QUFBQSxNQUNIO0FBT0EsbUJBQWFBLFNBQVEsQ0FBQztBQUFBLFFBQ3BCLEtBQUs7QUFBQSxRQUNMLE9BQU8sU0FBUyxZQUFZO0FBQzFCLGNBQUlDLFNBQVEsQ0FBQztBQUViLGVBQUssS0FBSyxRQUFRLFNBQVUsR0FBRztBQUM3QixtQkFBT0EsU0FBUUEsT0FBTSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJO0FBQUEsVUFDcEQsQ0FBQztBQUNELGlCQUFPLElBQUksV0FBV0EsTUFBSztBQUFBLFFBQzdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU1GLEdBQUc7QUFBQSxRQUNELEtBQUs7QUFBQSxRQUNMLE9BQU8sU0FBUyxTQUFTO0FBQ3ZCLGNBQUksT0FBTyxTQUFTLFdBQVksUUFBTyxLQUFLLE9BQU8sYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLENBQUMsQ0FBQztBQUM3RixpQkFBTyxPQUFPLEtBQUssS0FBSyxVQUFVLENBQUMsRUFBRSxTQUFTLFFBQVE7QUFBQSxRQUN4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFNRixHQUFHO0FBQUEsUUFDRCxLQUFLO0FBQUEsUUFDTCxPQUFPLFNBQVMsVUFBVTtBQUN4QixpQkFBTyw0QkFBNEIsS0FBSyxPQUFPO0FBQUEsUUFDakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTUYsR0FBRztBQUFBLFFBQ0QsS0FBSztBQUFBLFFBQ0wsT0FBTyxTQUFTLFNBQVM7QUFDdkIsaUJBQU8sUUFBUSxPQUFPLE1BQU0sSUFBSSxPQUFPLEtBQUssVUFBVSxDQUFDLENBQUM7QUFBQSxRQUMxRDtBQUFBLE1BQ0YsQ0FBQyxDQUFDO0FBRUYsYUFBT0Q7QUFBQSxJQUNULEdBQUU7QUFFRixRQUFJLE9BQU87QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUVBLFdBQU8sVUFBVTtBQUFBO0FBQUE7OztBQzNrRGpCOztRQUFBLEVBQUEsTUFBUyxJQUFBO0FBRVQsUUFBT0UsVUFBUCxNQUE0QjtNQUMxQixjQUFjO0FBQ1osYUFBSyxPQUFPLENBQUM7QUFDYixhQUFLLFFBQVEsQ0FBQztBQUNkLGFBQUssT0FBTztBQUNaLGFBQUssTUFBTTtBQUNYLGFBQUssT0FBTyxJQUFJLEtBQUs7QUFDckIsYUFBSyxhQUFhLG9CQUFJLElBQUk7QUFDMUIsYUFBSyxhQUFhLG9CQUFJLElBQUk7QUFDMUIsYUFBSyxnQkFBZ0IsSUFBSTtBQUN6QixhQUFLLFNBQVM7QUFDZCxhQUFLLFVBQVU7TUFDakI7TUFFQSxZQUFZO0FBQ1YsY0FBTSxtQkFBbUIsT0FBTyxnQkFBZ0IsT0FBTztBQUV2RCxhQUFLLGVBQWUsSUFBSSxpQkFBaUI7QUFDekMsYUFBSyxjQUFjLEtBQUssYUFBYTtBQUNyQyxhQUFLLFNBQVMsSUFBSSxtQkFBbUI7QUFDckMsYUFBSyxZQUFZLEtBQUssT0FBTyxjQUFjLEtBQUssWUFBWTtBQUM1RCxhQUFLLGFBQWEsS0FBSyxhQUFhLFdBQVc7QUFDL0MsYUFBSyxPQUFPLEtBQUssT0FBTyxtQkFBbUIsS0FBSyxZQUFZO0FBQzVELGFBQUssYUFBYSxLQUFLLGFBQWEsV0FBVztBQUMvQyxhQUFLLFFBQVEsS0FBSyxhQUFhLFlBQVksQ0FBQztBQUM1QyxhQUFLLGdCQUFnQixLQUFLLGFBQWEsV0FBVztBQUNsRCxhQUFLLFdBQVcsS0FBSyxhQUFhLFdBQVc7QUFFN0MsYUFBSyxXQUFXLEtBQUssUUFBUTtBQUM3QixhQUFLLGNBQWMsS0FBSyxRQUFRO0FBQ2hDLGFBQUssU0FBUyxLQUFLLFFBQVE7QUFDM0IsYUFBSyxXQUFXLEtBQUssUUFBUTtBQUU3QixhQUFLLFVBQVUsT0FBTyxRQUFRLEtBQUssVUFBVTtBQUM3QyxhQUFLLEtBQUssT0FBTyxRQUFRLEtBQUssVUFBVTtBQUV4QyxhQUFLLFdBQVcsUUFBUSxLQUFLLEtBQUs7QUFDbEMsYUFBSyxNQUFNLFFBQVEsS0FBSyxhQUFhO0FBQ3JDLGFBQUssY0FBYyxRQUFRLEtBQUssS0FBSztBQUNyQyxhQUFLLE1BQU0sUUFBUSxLQUFLLFFBQVE7QUFDaEMsYUFBSyxTQUFTLFFBQVEsS0FBSyxVQUFVO0FBRXJDLGFBQUssV0FBVyxRQUFRLEtBQUssV0FBVztBQUN4QyxhQUFLLGdCQUFnQjtNQUN2QjtNQUVBLE1BQU0sT0FBTztBQUNYLGVBQU8sTUFBTSxTQUFTLEtBQUssSUFBSSxLQUFLO01BQ3RDO01BRUEsUUFBUSxNQUFNO0FBQ1osYUFBSyxPQUFPLFFBQVEsS0FBSztBQUV6QixZQUFJLFFBQVE7QUFDWixhQUFLLEtBQUssUUFBUSxDQUFBLFVBQVM7QUFDekIsY0FBSSxNQUFNLENBQUMsRUFBRSxTQUFTLE1BQU8sU0FBUSxNQUFNLENBQUMsRUFBRTtBQUU5QyxnQkFBTSxPQUFPLE1BQU0sQ0FBQyxLQUFLLE1BQ3JCLEtBQUssT0FBTyxPQUFPLFNBQVMsTUFBTSxDQUFDLElBQUksR0FBSSxJQUMzQyxLQUFLLE9BQU8sT0FBTyxlQUFlLE1BQU0sQ0FBQyxDQUFDO0FBRTlDLGVBQUssZ0JBQWdCLElBQUk7UUFDM0IsQ0FBQztBQUVELGNBQU0sV0FBVyxNQUFNLGdCQUFnQixJQUFJLElBQUk7QUFDL0MsY0FBTSxXQUFXLG9CQUFJLElBQUk7QUFFekIsaUJBQVMsSUFBSSxHQUFHLElBQUksT0FBTyxLQUFLLEdBQUc7QUFDakMsZ0JBQU0sT0FBTyxvQkFBSSxJQUFJO0FBRXJCLGVBQUssS0FBSyxRQUFRLENBQUEsVUFBUztBQUN6QixrQkFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQztBQUNuQyxxQkFBUyxJQUFJLEdBQUc7QUFDaEIsZ0JBQUksQ0FBQyxLQUFLLElBQUksR0FBRyxFQUFHLE1BQUssSUFBSSxLQUFLLEVBQUUsT0FBTyxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQztBQUMxRCxrQkFBTSxPQUFPLEtBQUssSUFBSSxHQUFHO0FBQ3pCLGtCQUFNLE9BQU8sTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7QUFFN0IsZ0JBQUksTUFBTSxDQUFDLEtBQUssS0FBTTtBQUNwQixtQkFBSyxNQUFNLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFNLEtBQUssQ0FBQyxDQUFDO1lBQzNDLFdBQVcsTUFBTSxRQUFRLEtBQUssQ0FBQyxHQUFHO0FBQ2hDLG1CQUFLLEVBQUUsUUFBUSxDQUFBLFNBQVE7QUFDckIscUJBQUssTUFBTSxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxNQUFNLElBQUksR0FBRyxVQUFVLEtBQUssQ0FBQyxDQUFDO2NBQ2hFLENBQUM7WUFDSCxXQUFXLEtBQUssR0FBRztBQUNqQixtQkFBSyxNQUFNLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLE1BQU0sS0FBSyxDQUFDLEdBQUcsVUFBVSxLQUFLLENBQUMsQ0FBQztZQUNsRTtVQUNGLENBQUM7QUFFRCxlQUFLLE1BQU0sQ0FBQyxJQUFJO1FBQ2xCO0FBRUEsYUFBSyxXQUFXLFFBQVEsQ0FBQyxPQUFPLFFBQVE7QUFDdEMsY0FBSSxDQUFDLFNBQVMsSUFBSSxHQUFHLEdBQUc7QUFDdEIsZ0JBQUk7QUFDRixvQkFBTSxJQUFJLFdBQVc7QUFDckIsb0JBQU0sV0FBVyxXQUFXO0FBQzVCLG9CQUFNLFVBQVUsV0FBVztZQUM3QixTQUFTLEdBQUc7WUFFWjtBQUNBLGlCQUFLLFdBQVcsT0FBTyxHQUFHO1VBQzVCO1FBQ0YsQ0FBQztBQUVELGlCQUFTLFFBQVEsQ0FBQSxRQUFPLEtBQUssY0FBYyxHQUFHLENBQUM7TUFDakQ7TUFFQSxjQUFjO0FBQ1osZUFBTyxLQUFLLGFBQWE7TUFDM0I7TUFFQSxnQkFBZ0IsVUFBVTtBQUN4QixhQUFLLGNBQWMsS0FBSyxPQUFPLEtBQUssS0FBSyxLQUFLLE1BQU0sUUFBUTtNQUM5RDtNQUVBLGtCQUFrQjtBQUNoQixhQUFLLGFBQWE7TUFDcEI7TUFFQSxlQUFlLE1BQU1DLFFBQU8sUUFBUUMsWUFBVztBQUM3QyxjQUFNLFVBQVVELFdBQVUsS0FBSyxPQUMxQixXQUFXLEtBQUssUUFDaEJDLGVBQWMsS0FBSztBQUV4QixZQUFJLFFBQVMsTUFBSyxhQUFhO0FBRS9CLGFBQUssTUFBTSxTQUFTO0FBQ3BCLGFBQUssTUFBTUQsVUFBUztBQUNwQixhQUFLLE9BQU8sVUFBVTtBQUN0QixhQUFLLFNBQVNDLGNBQWE7QUFDM0IsYUFBSyxnQkFBZ0I7QUFDckIsYUFBSyxRQUFRLElBQUk7QUFDakIsYUFBSyxPQUFPLElBQUksS0FBSztBQUVyQixlQUFPO01BQ1Q7TUFFQSxjQUFjLE9BQU8sS0FBSyxTQUFTLFVBQVU7QUFDM0MsYUFBSyxjQUFjO0FBRW5CLGNBQU0sb0JBQXFCLElBQUksS0FBTTtBQUVyQyxhQUFLLFlBQVksV0FBVyxNQUFNLFNBQVMsV0FBVztBQUN0RCxhQUFLLFdBQVcsS0FBSyxZQUFZLEdBQUcsTUFBTSxLQUFLLFNBQVMsR0FBRyxHQUFHO0FBRTlELFlBQUksZUFBZSxLQUFLLFlBQVksSUFBSSxVQUFVO0FBQ2xELGFBQUssaUJBQWlCLFlBQVksTUFBTTtBQUN0QyxjQUFJLEtBQUssWUFBWSxJQUFJLGVBQWUsVUFBVSxtQkFBbUI7QUFDbkUsaUJBQUssYUFBYTtBQUNsQixnQkFBSSxLQUFLLGFBQWEsTUFBTSxRQUFRO0FBQ2xDLG1CQUFLLFlBQVk7WUFDbkI7QUFFQSxpQkFBSyxXQUFXLGNBQWMsTUFBTSxLQUFLLFNBQVMsR0FBRyxHQUFHO0FBQ3hELDRCQUFnQixVQUFVO1VBQzVCO1FBQ0YsR0FBRyxFQUFFO01BQ1A7TUFFQSxlQUFlO0FBQ2IsYUFBSyxjQUFjO0FBQ25CLHNCQUFjLEtBQUssY0FBYztBQUNqQyxhQUFLLFlBQVk7TUFDbkI7TUFFQSxjQUFjLEtBQUs7QUFDakIsWUFBSSxDQUFDLEtBQUssV0FBVyxJQUFJLEdBQUcsR0FBRztBQUM3QixlQUFLLFdBQVcsSUFBSSxLQUFLO1lBQ3ZCLE9BQU87WUFDUCxNQUFNO1lBQ04sUUFBUTtZQUNSLFlBQVk7WUFDWixXQUFXO1VBQ2IsQ0FBQztRQUNIO0FBQ0EsZUFBTyxLQUFLLFdBQVcsSUFBSSxHQUFHO01BQ2hDO01BRUEsZ0JBQWdCLEtBQUs7QUFDbkIsY0FBTSxRQUFRLEtBQUssY0FBYyxHQUFHO0FBQ3BDLGNBQU0sUUFBUSxLQUFLLGNBQWMsR0FBRztBQUNwQyxjQUFNLFFBQVE7QUFDZCxjQUFNLElBQUksS0FBSyxRQUFRLE1BQU0sUUFBUSxJQUFJLE1BQU07QUFDL0MsY0FBTSxXQUFXLEtBQUssUUFBUSxNQUFNO0FBQ3BDLGNBQU0sVUFBVSxLQUFLLFFBQVEsTUFBTTtNQUNyQztNQUVBLGNBQWMsS0FBSztBQUNqQixZQUFJLEtBQUssV0FBVyxJQUFJLEdBQUcsR0FBRztBQUM1QixpQkFBTyxLQUFLLFdBQVcsSUFBSSxHQUFHO1FBQ2hDO0FBRUEsY0FBTSxNQUFNLEtBQUssYUFBYSxXQUFXO0FBQ3pDLGNBQU0sYUFBYSxLQUFLLGFBQWEsV0FBVztBQUNoRCxjQUFNLFlBQVksS0FBSyxhQUFhLFdBQVc7QUFFL0MsWUFBSSxLQUFLLFFBQVE7QUFDakIsbUJBQVcsS0FBSyxRQUFRO0FBQ3hCLGtCQUFVLEtBQUssUUFBUTtBQUV2QixZQUFJLFFBQVEsS0FBSyxVQUFVLEtBQUs7QUFDaEMsbUJBQVcsUUFBUSxLQUFLLEtBQUssS0FBSztBQUNsQyxrQkFBVSxRQUFRLEtBQUssVUFBVTtBQUVqQyxjQUFNLFFBQVEsRUFBRSxLQUFLLFlBQVksVUFBVTtBQUMzQyxhQUFLLFdBQVcsSUFBSSxLQUFLLEtBQUs7QUFDOUIsYUFBSyxnQkFBZ0IsR0FBRztBQUN4QixlQUFPO01BQ1Q7TUFFQSxRQUFRLEtBQUssT0FBTztBQUNsQixjQUFNLFFBQVEsS0FBSyxjQUFjLEdBQUc7QUFDcEMsY0FBTSxRQUFRLFFBQVEsS0FBSztBQUMzQixhQUFLLGdCQUFnQixHQUFHO01BQzFCO01BRUEsUUFBUSxLQUFLLE9BQU87QUFDbEIsY0FBTSxRQUFRLEtBQUssY0FBYyxHQUFHO0FBQ3BDLGNBQU0sT0FBTyxRQUFRLEtBQUs7TUFDNUI7TUFFQSxVQUFVLEtBQUssT0FBTztBQUNwQixjQUFNLFFBQVEsS0FBSyxjQUFjLEdBQUc7QUFDcEMsY0FBTSxTQUFTLEtBQUssSUFBSSxHQUFHLEtBQUssSUFBSSxHQUFHLEtBQUssQ0FBQztBQUM3QyxhQUFLLGdCQUFnQixHQUFHO01BQzFCO01BRUEsY0FBYyxLQUFLLE9BQU87QUFDeEIsY0FBTSxRQUFRLEtBQUssY0FBYyxHQUFHO0FBQ3BDLGNBQU0sYUFBYSxLQUFLLElBQUksR0FBRyxLQUFLLElBQUksR0FBRyxLQUFLLENBQUM7QUFDakQsYUFBSyxnQkFBZ0IsR0FBRztNQUMxQjtNQUVBLGFBQWEsS0FBSyxPQUFPO0FBQ3ZCLGNBQU0sUUFBUSxLQUFLLGNBQWMsR0FBRztBQUNwQyxjQUFNLFlBQVksS0FBSyxJQUFJLEdBQUcsS0FBSyxJQUFJLEdBQUcsS0FBSyxDQUFDO0FBQ2hELGFBQUssZ0JBQWdCLEdBQUc7TUFDMUI7TUFFQSxpQkFBaUIsT0FBTztBQUN0QixhQUFLLGNBQWMsS0FBSyxRQUFRLEtBQUssSUFBSSxHQUFHLEtBQUssSUFBSSxNQUFNLEtBQUssQ0FBQztNQUNuRTtNQUVBLGFBQWEsT0FBTztBQUNsQixhQUFLLGdCQUFnQixLQUFLLElBQUksT0FBTyxLQUFLLElBQUksTUFBTSxLQUFLLENBQUM7QUFDMUQsYUFBSyxnQkFBZ0I7TUFDdkI7TUFFQSxrQkFBa0I7QUFDaEIsY0FBTSxRQUFTLElBQUksTUFBTyxLQUFLLE9BQU87QUFDdEMsYUFBSyxNQUFNLFVBQVUsUUFBUSxRQUFRLEtBQUs7TUFDNUM7TUFFQSxlQUFlO0FBQ2IsZUFBTyxDQUFDLEdBQUcsS0FBSyxXQUFXLEtBQUssQ0FBQztNQUNuQztNQUVBLGNBQWM7QUFDWixhQUFLLE9BQU8sWUFBWSxLQUFLLFlBQVk7TUFDM0M7TUFFQSxnQkFBZ0IsTUFBTTtBQUNwQixZQUFJLFFBQVEsQ0FBQyxPQUFPLEtBQUssUUFBUSxHQUFHO0FBQ2xDLGNBQUksT0FBTyxLQUFLLFdBQVcsR0FBRyxFQUFHO0FBQ2pDLGlCQUFPLEtBQUssV0FBVyxHQUFHLElBQUk7QUFDOUIsZUFBSyxPQUFPLE9BQU8sVUFBVSxLQUFLLGNBQWMsS0FBSyxLQUFLLEtBQUssUUFBUTtBQUN2RSxlQUFLLE9BQU8sT0FBTyxTQUFTLE1BQU07QUFDaEMsb0JBQVEsSUFBSSxVQUFVLEtBQUssS0FBSztBQUNoQyxtQkFBTyxPQUFPLEtBQUssV0FBVyxHQUFHO1VBQ25DLENBQUM7UUFDSDtNQUNGO01BRUEsU0FBUyxNQUFNLE1BQU0sT0FBTztBQUMxQixjQUFNLENBQUMsWUFBWSxLQUFLLElBQUk7QUFDNUIsY0FBTSxPQUFPLEtBQUssT0FBTyxPQUFPLFNBQVMsVUFBVTtBQUVuRCxZQUFJLE9BQU8sS0FBSyxRQUFRLEdBQUc7QUFDekIsZ0JBQU0sUUFBUSxPQUFPLEtBQUssUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO0FBQzdDLGdCQUFNLE9BQVEsSUFBSSxNQUFPO0FBQ3pCLGNBQUksUUFBUSxFQUFHLE1BQUssa0JBQWtCLE9BQU8sS0FBSyxRQUFRLEdBQUcsTUFBTSxPQUFPLElBQUksSUFBSSxNQUFNLEtBQUs7UUFDL0YsT0FBTztBQUNMLGVBQUssZ0JBQWdCLElBQUk7UUFDM0I7TUFDRjtNQUVBLGtCQUFrQixNQUFNLE1BQU0sT0FBTyxVQUFVLE1BQU0sT0FBTztBQUMxRCxhQUFLLE9BQU8sZUFBZSxLQUFLLGNBQWMsTUFBTSxLQUFLLE1BQU0sTUFBTSxPQUFPLFVBQVUsSUFBSTtBQUMxRixZQUFJLE1BQU0sV0FBVyxLQUFLLFFBQVEsR0FBRztBQUNuQyxlQUFLLE9BQU8sZUFBZSxLQUFLLGNBQWMsTUFBTSxZQUFZLE1BQU0sTUFBTSxPQUFPLFVBQVUsSUFBSTtRQUNuRztBQUNBLFlBQUksTUFBTSxVQUFVLEtBQUssUUFBUSxHQUFHO0FBQ2xDLGVBQUssT0FBTyxlQUFlLEtBQUssY0FBYyxNQUFNLFdBQVcsTUFBTSxNQUFNLE9BQU8sVUFBVSxJQUFJO1FBQ2xHO01BQ0Y7TUFFQSxXQUFXLE1BQU0sTUFBTSxLQUFLO0FBQzFCLFlBQUksQ0FBQyxLQUFNO0FBQ1gsY0FBTSxJQUFLLElBQUksS0FBTTtBQUNyQixjQUFNLFVBQVUsQ0FBQyxHQUFHLEtBQUssV0FBVyxPQUFPLENBQUMsRUFBRSxLQUFLLENBQUEsU0FBUSxLQUFLLElBQUk7QUFFcEUsYUFBSyxRQUFRLENBQUMsTUFBTSxRQUFRO0FBQzFCLGdCQUFNLFFBQVEsS0FBSyxjQUFjLEdBQUc7QUFDcEMsY0FBSSxNQUFNLE1BQU87QUFDakIsY0FBSSxXQUFXLENBQUMsTUFBTSxLQUFNO0FBRTVCLGdCQUFNLFFBQVEsS0FBSyxjQUFjLEdBQUc7QUFDcEMsY0FBSSxVQUFVO0FBRWQsbUJBQVMsSUFBSSxHQUFHLElBQUksS0FBSyxNQUFNLFFBQVEsS0FBSyxHQUFHO0FBQzdDLGlCQUFLLFNBQVMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxHQUFHLEtBQUs7QUFDeEMsc0JBQVU7VUFDWjtBQUVBLGVBQUssTUFBTSxRQUFRLENBQUFDLFVBQVE7QUFDekIsa0JBQU0sQ0FBQyxZQUFZLFNBQVMsVUFBVSxLQUFLLElBQUlBO0FBQy9DLGtCQUFNLE9BQU8sS0FBSyxPQUFPLE9BQU8sZUFBZSxVQUFVO0FBQ3pELGdCQUFJLE9BQU8sS0FBSyxRQUFRLEdBQUc7QUFDekIsbUJBQUssa0JBQWtCLE9BQU8sS0FBSyxRQUFRLEdBQUcsTUFBTSxTQUFTLFdBQVcsR0FBSSxJQUFJLE1BQU8sT0FBTyxLQUFLO0FBQ25HLHdCQUFVO1lBQ1osT0FBTztBQUNMLG1CQUFLLGdCQUFnQixJQUFJO1lBQzNCO1VBQ0YsQ0FBQztBQUVELGNBQUksV0FBVyxPQUFPLEtBQUssV0FBVyxZQUFZO0FBQ2hELGlCQUFLLE9BQU8sS0FBSyxJQUFJO1VBQ3ZCO1FBQ0YsQ0FBQztNQUNIO0lBQ0Y7Ozs7OztBQzVVQSxJQStGYUMsVUFNQUM7QUFyR2IsSUFBQUMsY0FBQTtBQUFBO0FBK0ZPLElBQU1GLFdBQVUsQ0FBQyxRQUN0QixJQUFJLFNBQVMsSUFBSSxJQUFJLEtBQUssTUFBTSxLQUFLLE9BQU8sQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDO0FBS2xELElBQU1DLFFBQU8sTUFBTSxDQUFDLENBQUMsS0FBSyxNQUFNLEtBQUssT0FBTyxDQUFDO0FBQUE7QUFBQTs7O0FDckdwRCxJQUFBRSx1QkFBQTtBQUFBLFNBQUFBLHNCQUFBO0FBQUEseUJBQUFDO0FBQUEsRUFBQSw4QkFBQUM7QUFBQSxFQUFBLG1CQUFBQztBQUFBO0FBQUEsSUFBQUMsbUJBVWFILGtCQWtCUEksY0FlQUMsZUE2Qk9KLHlCQWdDUEssaUJBeURBQyxJQUNBQyxJQVNPTjtBQTNLYixJQUFBTyxvQkFBQTtBQUFBO0FBQUEsSUFBQU4sb0JBQXNCO0FBQ3RCLElBQUFPO0FBU08sSUFBTVYsbUJBQWtCLENBQUMsU0FBaUI7QUFDL0MsWUFBTSxZQUEyQjtBQUFBLFFBQy9CLFFBQVEsQ0FBQyxLQUFLLE1BQU0sT0FBTyxNQUFNLEtBQUssTUFBTSxTQUFNO0FBQUEsUUFDbEQsUUFBUSxDQUFDLEtBQUssTUFBTSxPQUFPLE1BQU0sS0FBSyxVQUFPLEtBQUs7QUFBQSxRQUNsRCxVQUFVLENBQUMsS0FBSyxNQUFNLE9BQU8sTUFBTSxTQUFNLE1BQU0sS0FBSztBQUFBLFFBQ3BELFFBQVEsQ0FBQyxLQUFLLE1BQU0sT0FBTyxVQUFPLEtBQUssTUFBTSxLQUFLO0FBQUEsUUFDbEQsWUFBWSxDQUFDLEtBQUssTUFBTSxXQUFRLE1BQU0sS0FBSyxNQUFNLEtBQUs7QUFBQSxRQUN0RCxTQUFTLENBQUMsS0FBSyxVQUFPLE9BQU8sTUFBTSxLQUFLLE1BQU0sS0FBSztBQUFBLFFBQ25ELFNBQVMsQ0FBQyxTQUFNLE1BQU0sT0FBTyxNQUFNLEtBQUssTUFBTSxLQUFLO0FBQUEsUUFDbkQsaUJBQWlCLENBQUMsS0FBSyxNQUFNLFFBQVEsTUFBTSxLQUFLLFVBQU8sU0FBTTtBQUFBLFFBQzdELGtCQUFrQixDQUFDLEtBQUssVUFBTyxRQUFRLE1BQU0sS0FBSyxNQUFNLFNBQU07QUFBQSxNQUNoRTtBQUNBLGdCQUFVLFFBQVEsVUFBVTtBQUM1QixnQkFBVSxRQUFRLFVBQVU7QUFFNUIsYUFBTyxVQUFVLElBQUksS0FBSyxDQUFDO0FBQUEsSUFDN0I7QUFFQSxJQUFNSSxlQUEyQjtBQUFBLE1BQy9CLEdBQUc7QUFBQSxNQUNILElBQUk7QUFBQSxNQUNKLEtBQUs7QUFBQSxNQUNMLElBQUk7QUFBQSxNQUNKLEdBQUc7QUFBQSxNQUNILElBQUk7QUFBQSxNQUNKLEtBQUs7QUFBQSxJQUNQO0FBT0EsSUFBTUMsZ0JBQWUsQ0FBQyxVQUEwQjtBQUU5QyxZQUFNLE1BQU0sTUFBTSxRQUFRLE9BQU8sRUFBRTtBQUNuQyxVQUFJLFNBQVM7QUFFYixVQUFJLElBQUksWUFBWSxNQUFNLEtBQUs7QUFDN0IsaUJBQVM7QUFBQSxNQUNYO0FBQ0EsVUFBSSxNQUFNLFFBQVEsTUFBRyxJQUFJLElBQUk7QUFDM0IsZUFBTyxTQUFTO0FBQUEsTUFDbEI7QUFDQSxVQUFJLE1BQU0sUUFBUSxHQUFHLElBQUksSUFBSTtBQUMzQixlQUFPLFNBQVM7QUFBQSxNQUNsQjtBQUVBLFVBQUksTUFBTSxRQUFRLEdBQUcsSUFBSSxJQUFJO0FBQzNCLGVBQU8sV0FBVyxNQUFNLFNBQVM7QUFBQSxNQUNuQztBQUVBLGFBQU87QUFBQSxJQUNUO0FBU08sSUFBTUosMEJBQXlCLENBQ3BDLGlCQUNBLGlCQUNXO0FBR1gsWUFBTSxxQkFBcUIsZ0JBQWdCLE1BQU0sR0FBRztBQUNwRCxVQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBRSxNQUFNLElBQUksR0FBRztBQUN0QywyQkFBbUIsQ0FBQyxLQUFLO0FBQ3pCLDBCQUFrQixtQkFBbUIsS0FBSyxHQUFHO0FBQUEsTUFDL0M7QUFHQSxZQUFNLFdBQU8seUJBQU0sZUFBZTtBQUNsQyxZQUFNLGtCQUFrQixhQUFhLFFBQVEsYUFBYSxHQUFHLEVBQUUsTUFBTSxHQUFHO0FBR3hFLFlBQU0sY0FBYyxnQkFBZ0IsSUFBSSxDQUFDLE9BQU8sUUFBUTtBQUN0RCxjQUFNLFlBQVlJLGNBQWEsS0FBSztBQUVwQyxjQUFNLFVBQVVELGFBQVksTUFBTSxRQUFRLFVBQVUsRUFBRSxFQUFFLFlBQVksQ0FBQztBQUVyRSxjQUFNTyxRQUFPLEtBQUssT0FBTztBQUV6QixjQUFNLE1BQU1BLE1BQUssUUFBUSxPQUFPLEVBQUU7QUFFbEMsZUFBT0EsTUFBSyxRQUFRLE1BQU0sRUFBRSxJQUFJLFlBQVksTUFBTTtBQUFBLE1BQ3BELENBQUM7QUFFRCxhQUFPLFlBQVksU0FBUyxFQUFFLFFBQVEsTUFBTSxHQUFHO0FBQUEsSUFDakQ7QUFFQSxJQUFNTCxrQkFBaUIsQ0FBQyxFQUFFLEdBQUcsR0FBRyxFQUFFLE1BQVc7QUFDM0MsYUFBTyxDQUFDLFFBQWdCLE1BQU07QUFDNUIsY0FBTSxTQUFTLENBQUM7QUFHaEIsZUFBTyxLQUFLTSxTQUFRLENBQUMsQ0FBQztBQUV0QixZQUFJLElBQUk7QUFHUixZQUFJLElBQUksUUFBUSxHQUFHO0FBQ2pCLGlCQUFPLEtBQUtBLFNBQVEsQ0FBQyxDQUFDO0FBQ3RCO0FBQUEsUUFDRjtBQUdBLFlBQUksSUFBSSxRQUFRLEtBQUtDLE1BQUssR0FBRztBQUMzQixpQkFBTyxLQUFLRCxTQUFRLENBQUMsQ0FBQztBQUN0QjtBQUFBLFFBQ0Y7QUFHQSxZQUFJLElBQUksUUFBUSxHQUFHO0FBRWpCLGlCQUFPLEtBQUtBLFNBQVEsQ0FBQyxDQUFDO0FBQ3RCO0FBQUEsUUFDRjtBQUVBLFlBQUksSUFBSSxRQUFRLEdBQUc7QUFFakIsaUJBQU8sS0FBS0EsU0FBUSxDQUFDLENBQUM7QUFDdEI7QUFBQSxRQUNGO0FBRUEsWUFBSSxJQUFJLFFBQVEsR0FBRztBQUVqQixpQkFBTyxLQUFLQSxTQUFRLENBQUMsQ0FBQztBQUN0QjtBQUFBLFFBQ0Y7QUFHQSxZQUFJLElBQUksUUFBUSxLQUFLQyxNQUFLLEdBQUc7QUFDM0IsaUJBQU8sS0FBS0QsU0FBUSxDQUFDLENBQUM7QUFDdEI7QUFBQSxRQUNGO0FBSUEsZUFBTyxJQUFJLE9BQU87QUFDaEIsaUJBQU8sS0FBS0EsU0FBUSxDQUFDLENBQUM7QUFDdEI7QUFBQSxRQUNGO0FBRUEsZUFBTztBQUFBLE1BQ1Q7QUFBQSxJQUNGO0FBRUEsSUFBTUwsS0FBSUQsZ0JBQWUsRUFBRSxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUN0RSxJQUFNRSxLQUFJRixnQkFBZSxFQUFFLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBUy9ELElBQU1KLGVBQWMsQ0FBQyxXQUE2QixRQUFnQixNQUFNO0FBQzdFLFVBQUksY0FBYyxXQUFXLGNBQWMsS0FBSztBQUM5QyxlQUFPSyxHQUFFLEtBQUs7QUFBQSxNQUNoQjtBQUVBLFVBQUksY0FBYyxXQUFXLGNBQWMsS0FBSztBQUM5QyxlQUFPQyxHQUFFLEtBQUs7QUFBQSxNQUNoQjtBQUFBLElBQ0Y7QUFBQTtBQUFBOzs7QUNuTEEsSUFBQU0sb0JBQUE7O1FBQUEsRUFBQSxZQUFTLElBQUE7QUFFRixRQUFNLGVBQWU7QUFDckIsUUFBTSxhQUFhO0FBQ25CLFFBQU0sWUFBWTtBQUNsQixRQUFNLFdBQVc7QUFDakIsUUFBTSxVQUFVO0FBQ2hCLFFBQU0sVUFBVTtBQUNoQixRQUFNLFVBQVU7QUFDaEIsUUFBTSxVQUFVO0FBRXZCLFFBQU0sUUFBUSxDQUFDO0FBRVIsYUFBUyxNQUFNLE9BQU87QUFDM0IsVUFBSSxPQUFPLENBQUM7QUFDWixVQUFJO0FBQ0YsZUFBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELGVBQU8sS0FBSyxRQUFRLFdBQVcsS0FBSztBQUNwQyxlQUFPLEtBQUssUUFBUSxVQUFVLEdBQUc7QUFDakMsZUFBTyxLQUFLLFFBQVEsVUFBVSxHQUFHO0FBQ2pDLGVBQU8sS0FBSyxNQUFNLElBQUk7TUFDeEIsU0FBUyxHQUFHO01BRVo7QUFDQSxhQUFPO0lBQ1Q7QUFFTyxhQUFTLE1BQU0sT0FBTztBQUMzQixVQUFJLENBQUMsTUFBTSxLQUFLLEdBQUc7QUFDakIsWUFBSSxNQUFNLFNBQVMsR0FBRyxHQUFHO0FBQ3ZCLGdCQUFNLEtBQUssSUFBSSxNQUFNLFdBQVcsSUFBSSxLQUFLLEVBQUU7UUFDN0MsV0FBVyxNQUFNLFNBQVMsR0FBRyxHQUFHO0FBQzlCLGdCQUFNLENBQUMsR0FBRyxDQUFDLElBQUksTUFBTSxNQUFNLEdBQUc7QUFFOUIsZ0JBQU0sS0FBSyxJQUFJLElBQUk7UUFDckIsV0FBVyxNQUFNLFNBQVMsR0FBRyxHQUFHO0FBQzlCLGdCQUFNLENBQUMsR0FBRyxDQUFDLElBQUksTUFBTSxNQUFNLEdBQUc7QUFFOUIsZ0JBQU0sS0FBSyxJQUFJLElBQUk7UUFDckIsT0FBTztBQUNMLGdCQUFNLEtBQUssSUFBSSxXQUFXLEtBQUs7UUFDakM7TUFDRjtBQUNBLGFBQU8sTUFBTSxLQUFLO0lBQ3BCO0FBRU8sYUFBUyxTQUFTLElBQUksT0FBTztBQUNsQyxVQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsS0FBSyxHQUFHO0FBQzdCLGNBQU0sR0FBRyxTQUFTLEtBQUssSUFBSSxHQUFHLEtBQUssS0FBSztNQUMxQztBQUNBLGFBQU8sTUFBTSxHQUFHLFNBQVMsS0FBSztJQUNoQztBQUVPLGFBQVMsY0FBYyxPQUFPO0FBQ25DLGFBQU8sU0FBUyxTQUFTLEtBQUs7SUFDaEM7QUFFTyxhQUFTLFVBQVUsT0FBTztBQUMvQixhQUFPLFNBQVMsWUFBWSxLQUFLO0lBQ25DO0FBRU8sYUFBUyxTQUFTLE9BQU87QUFDOUIsYUFBTyxTQUFTLFdBQVcsS0FBSztJQUNsQztBQUVPLGFBQVMsUUFBUSxPQUFPO0FBQzdCLGFBQU8sU0FBUyxVQUFVLEtBQUs7SUFDakM7QUFFTyxhQUFTLE9BQU8sT0FBTztBQUM1QixhQUFPLFNBQVMsU0FBUyxLQUFLO0lBQ2hDO0FBRU8sYUFBUyxPQUFPLE9BQU87QUFDNUIsYUFBTyxTQUFTLFNBQVMsS0FBSztJQUNoQztBQUVPLGFBQVMsUUFBUSxPQUFPO0FBQzdCLFlBQU0sTUFBTSxJQUFJLEtBQUs7QUFDckIsVUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHO0FBQ2YsWUFBSSxPQUFPLEtBQUssRUFBRyxPQUFNLEdBQUcsSUFBSTtpQkFDdkIsUUFBUSxLQUFLLEVBQUcsT0FBTSxHQUFHLElBQUk7aUJBQzdCLFVBQVUsS0FBSyxFQUFHLE9BQU0sR0FBRyxJQUFJO2lCQUMvQixPQUFPLEtBQUssRUFBRyxPQUFNLEdBQUcsSUFBSTtpQkFDNUIsU0FBUyxLQUFLLEVBQUcsT0FBTSxHQUFHLElBQUk7WUFDbEMsT0FBTSxHQUFHLElBQUk7TUFDcEI7QUFDQSxhQUFPLE1BQU0sR0FBRztJQUNsQjtBQUVPLGFBQVMsVUFBVSxZQUFZO0FBQ3BDLFVBQUksQ0FBQyxjQUFjLE9BQU8sZUFBZSxVQUFVO0FBQ2pELGNBQU0sSUFBSSxNQUFNLG9DQUFvQyxVQUFVLEdBQUc7TUFDbkU7QUFFQSxVQUFJLE1BQU0sSUFBSSxVQUFVLEVBQUUsRUFBRyxRQUFPLE1BQU0sSUFBSSxVQUFVLEVBQUU7QUFFMUQsWUFBTSxTQUFTLFdBQVcsTUFBTSxLQUFLO0FBRXJDLFVBQUksQ0FBQyxPQUFPLFFBQVE7QUFDbEIsY0FBTSxJQUFJLE1BQU0sd0NBQXdDLFVBQVUsR0FBRztNQUN2RTtBQUVBLFlBQU0sTUFBTSxDQUFDO0FBQ2IsWUFBTSxRQUFRLENBQUM7QUFFZixlQUFTLElBQUksTUFBTSxPQUFPO0FBQ3hCLGNBQU0sT0FBTyxFQUFFLE1BQU0sTUFBTTtBQUUzQixZQUFJLFNBQVMsWUFBWSxPQUFPLFVBQVUsVUFBVTtBQUNsRCxlQUFLLFFBQVEsT0FBTyxVQUFVLFdBQVcsTUFBTSxLQUFLLElBQUk7UUFDMUQ7QUFFQSxZQUFJLFNBQVMsV0FBVyxPQUFPLFVBQVUsVUFBVTtBQUNqRCxlQUFLLFFBQVEsWUFBWSxNQUFNLFFBQVEsU0FBUyxFQUFFLENBQUM7QUFFbkQsY0FBSSxNQUFNLFNBQVMsSUFBSSxHQUFHO0FBQ3hCLGlCQUFLLFNBQVM7VUFDaEI7UUFDRjtBQUVBLFlBQUksU0FBUyxXQUFXLE1BQU0sUUFBUSxHQUFHLElBQUksSUFBSTtBQUMvQyxnQkFBTSxJQUFJLE1BQU0sTUFBTSxHQUFHO0FBRXpCLGNBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLEtBQUssU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJO0FBQ3ZDLGtCQUFNLElBQUksTUFBTSwrQkFBK0IsSUFBSSxZQUFZLEtBQUssR0FBRztVQUN6RTtBQUVBLGVBQUssUUFBUSxTQUFTLEVBQUUsQ0FBQyxHQUFHLEVBQUU7QUFDOUIsZUFBSyxTQUFTLFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBRTtBQUMvQixlQUFLLE9BQU87UUFDZDtBQUVBLFlBQUksS0FBSyxJQUFJO01BQ2Y7QUFFQSxhQUFPLE9BQU8sQ0FBQyxNQUFNLEtBQUssTUFBTTtBQUM5QixZQUFJO0FBRUosY0FBTSxPQUFPLE9BQU8sSUFBSSxDQUFDO0FBQ3pCLGNBQU0sT0FBTyxJQUFJLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQztBQUVyQyxZQUFJLGFBQWEsS0FBSyxHQUFHLEdBQUc7QUFDMUIsY0FBSSxTQUFTLElBQUksTUFBTSxZQUFZLENBQUM7QUFDcEMsaUJBQU87UUFDVDtBQUVBLFlBQUksT0FBTyxRQUFRLGFBQ2hCLElBQUksU0FBUyxHQUFHLEtBQUssSUFBSSxRQUFRLEdBQUcsSUFBSSxLQUNyQyxJQUFJLFNBQVMsR0FBRyxLQUFLLElBQUksUUFBUSxHQUFHLElBQUksS0FDeEMsSUFBSSxTQUFTLEdBQUcsS0FBSyxJQUFJLFFBQVEsR0FBRyxJQUFJLElBQzNDO0FBQ0QsY0FBSSxVQUFVLE1BQU0sR0FBRyxDQUFDO0FBQ3hCLGlCQUFPO1FBQ1Q7QUFFQSxZQUFJLElBQUksUUFBUSxHQUFHLElBQUksSUFBSTtBQUN6QixjQUFJLFFBQVEsS0FBSztBQUNmLGdCQUFJLENBQUMsS0FBSyxNQUFNO0FBQ2Qsb0JBQU0sSUFBSSxNQUFNLHdDQUF3QyxPQUFPLE1BQU0sR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsR0FBRztZQUN6RjtBQUVBLGlCQUFLLFNBQVMsS0FBSyxVQUFVO0FBQzdCLGlCQUFLLFVBQVU7VUFDakIsT0FBTztBQUNMLGdCQUFJLFNBQVMsR0FBRztVQUNsQjtBQUVBLGlCQUFPO1FBQ1Q7QUFFQSxZQUFJLGNBQWMsR0FBRyxHQUFHO0FBQ3RCLGVBQUssU0FBUyxJQUFJLEdBQUc7QUFDckIsaUJBQU87UUFDVDtBQUVBLFlBQUksSUFBSSxPQUFPLE1BQU0sS0FBSztBQUN4QixjQUFJLFdBQVcsR0FBRztBQUNsQixpQkFBTztRQUNUO0FBRUEsWUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEdBQUcsS0FBSyxPQUFPLEdBQUcsS0FBSyxTQUFTLEdBQUcsR0FBRztBQUMvRCxnQkFBTSxLQUFLLEdBQUc7QUFFZCxjQUNFLENBQUMsUUFDRSxNQUFNLFdBQVcsS0FDakIsRUFBRSxPQUFPLElBQUksS0FBSyxPQUFPLElBQUksS0FBSyxTQUFTLElBQUksSUFDbEQ7QUFDQSxrQkFBTSxNQUFNLE1BQU0sT0FBTyxHQUFHLE1BQU0sTUFBTTtBQUN4QyxrQkFBTSxPQUFPLElBQUksQ0FBQztBQUVsQixnQkFBSSxPQUFPLElBQUksQ0FBQztBQUNoQixnQkFBSSxTQUFTLElBQUksQ0FBQztBQUVsQixnQkFBSSxDQUFDLFVBQVUsU0FBUyxJQUFJLEdBQUc7QUFDN0IsdUJBQVM7QUFDVCxxQkFBTztZQUNUO0FBRUEsZ0JBQ0UsS0FBSyxTQUFTLEtBQ1gsT0FBTyxJQUFJLE1BQ1YsT0FBTyxJQUFJLEtBQUssU0FBUyxNQUFNLElBQ25DO0FBQ0Esa0JBQUksUUFBUSxJQUFJLEtBQUssR0FBRyxDQUFDO0FBQ3pCLHFCQUFPO1lBQ1Q7QUFFQSxnQkFBSSxRQUFRLENBQUEsTUFBSztBQUNmLGtCQUFJLEVBQUUsU0FBUyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksUUFBUSxDQUFDLElBQUksUUFBUSxDQUFDO1lBQ3pELENBQUM7VUFDSDtBQUNBLGlCQUFPO1FBQ1Q7QUFFQSxZQUFJLE9BQU8sUUFBUSxZQUFZLElBQUksUUFBUSxJQUFJLElBQUksSUFBSTtBQUNyRCxnQkFBTSxRQUFRLElBQUksTUFBTSxJQUFJO0FBQzVCLGdCQUFNLE1BQU0sTUFBTSxDQUFDLEtBQUs7QUFDeEIsZ0JBQU0sTUFBTSxNQUFNLENBQUMsS0FBSztBQUV4QixpQkFBTztBQUNQLGdCQUFNLENBQUMsS0FBSyxHQUFHO1FBQ2pCO0FBRUEsWUFBSSxPQUFPLFFBQVEsYUFBYSxJQUFJLE9BQU8sTUFBTSxPQUFPLElBQUksT0FBTyxNQUFNLE1BQU07QUFDN0UsZ0JBQU0sV0FBVyxJQUFJLE9BQU8sTUFBTSxNQUFNLFdBQVc7QUFDbkQsZ0JBQU0sU0FBUyxJQUFJLE9BQU8sQ0FBQztBQUUzQixjQUFJLENBQUMsU0FBUyxNQUFNLEdBQUc7QUFDckIsa0JBQU0sSUFBSSxNQUFNLG1DQUFtQyxRQUFRLFlBQVksT0FBTyxNQUFNLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHO1VBQy9HO0FBRUEsY0FBSSxVQUFVLFdBQVcsTUFBTSxDQUFDO0FBQ2hDLGlCQUFPO1FBQ1Q7QUFFQSxZQUFJLENBQUMsUUFBUSxRQUFRLEdBQUcsTUFBTSxXQUFXLE1BQU0sUUFBUSxLQUFLLEtBQUssR0FBRztBQUNsRSxlQUFLLE1BQU0sQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDLEtBQUs7QUFDakMsZUFBSyxNQUFNLENBQUMsS0FBSyxLQUFLLE1BQU0sQ0FBQyxJQUFJLE1BQU07QUFDdkMsZUFBSyxNQUFNLENBQUMsS0FBSztBQUNqQixpQkFBTztRQUNUO0FBRUEsWUFBSSxRQUFRLFFBQVEsR0FBRyxHQUFHLE9BQU8sUUFBUSxZQUFZLFNBQVMsR0FBRyxJQUFJLFNBQVMsS0FBSyxFQUFFLElBQUksR0FBRztBQUM1RixlQUFPO01BQ1QsR0FBRyxJQUFJO0FBRVAsWUFBTSxJQUFJLFVBQVUsRUFBRSxJQUFJO0FBQzFCLGFBQU87SUFDVDs7Ozs7O0FDMVBPLElBQUFDLGlCQUFBOzthQUFTLFFBQVEsT0FBTztBQUM3QixhQUFPLE1BQU0sT0FBTyxDQUFDLE1BQU0sUUFBUSxLQUFLLE9BQU8sR0FBRyxHQUFHLENBQUMsQ0FBQztJQUN6RDtBQUVPLGFBQVMsT0FBTyxPQUFPLE9BQU87QUFDbkMsWUFBTSxNQUFNLENBQUM7QUFFYixhQUFPLE9BQU87QUFDWixZQUFJLEtBQUssS0FBSztBQUNkLGlCQUFTO01BQ1g7QUFFQSxhQUFPO0lBQ1Q7QUFFTyxhQUFTLE1BQU0sS0FBSyxLQUFLLE1BQU07QUFDcEMsWUFBTSxNQUFNLENBQUM7QUFFYixVQUFJLENBQUMsTUFBTTtBQUNULGlCQUFTLElBQUksS0FBSyxLQUFLLEtBQUssS0FBSyxHQUFHO0FBQ2xDLGNBQUksS0FBSyxDQUFDO1FBQ1o7TUFDRixPQUFPO0FBQ0wsY0FBTSxRQUFRLE1BQU0sT0FBTztBQUUzQixpQkFBUyxJQUFJLEtBQUssS0FBSyxLQUFLLEtBQUssTUFBTTtBQUNyQyxjQUFJLEtBQUssQ0FBQztRQUNaO01BQ0Y7QUFFQSxhQUFPO0lBQ1Q7QUFFTyxhQUFTLE1BQU0sT0FBTztBQUMzQixVQUFJLENBQUMsU0FBUyxPQUFPLFVBQVUsU0FBVSxRQUFPO0FBQ2hELFVBQUksTUFBTSxRQUFRLEtBQUssRUFBRyxRQUFPLE1BQU0sSUFBSSxLQUFLO0FBRWhELFlBQU0sT0FBTyxDQUFDO0FBRWQsYUFBTyxLQUFLLEtBQUssRUFBRSxRQUFRLENBQUEsUUFBTztBQUNoQyxhQUFLLEdBQUcsSUFBSSxNQUFNLE1BQU0sR0FBRyxDQUFDO01BQzlCLENBQUM7QUFFRCxhQUFPO0lBQ1Q7QUFFTyxhQUFTLElBQUksR0FBRyxHQUFHLElBQUk7QUFDNUIsWUFBTSxNQUFNLEtBQUssSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNO0FBRXZDLGVBQVMsSUFBSSxHQUFHLElBQUksS0FBSyxLQUFLLEdBQUc7QUFDL0IsWUFBSSxPQUFPLEVBQUUsQ0FBQyxNQUFNLGVBQWUsT0FBTyxFQUFFLENBQUMsTUFBTSxZQUFhLElBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7TUFDL0U7SUFDRjs7Ozs7O0FDcERBLElBQUFDLGtCQUFBOztRQUFBLEVBQUEsd0JBQUFDLHdCQUFTLElBQUE7QUFDVCxRQUFBLEVBQUEsT0FBQUMsUUFBUyxZQUFPLElBQUE7QUFFaEIsUUFBQSxFQUFBLGVBQVMsVUFBZSxJQUFBO0FBQ3hCLFFBQUEsRUFBQSxRQUFTLE1BQVEsSUFBQTtBQUVWLGFBQVNDLFFBQU8sT0FBTyxTQUFTLFVBQVU7QUFDL0MsVUFBSSxDQUFDLE1BQU0sUUFBUSxLQUFLLEVBQUcsUUFBTztBQUVsQyxZQUFNLEtBQUssT0FBTyxhQUFhLGFBQWEsWUFBWSxDQUFBLE1BQUs7QUFFN0QsVUFBSTtBQUNKLGFBQU8sTUFBTSxPQUFPLENBQUMsTUFBTSxLQUFLLE1BQU07QUFDcEMsY0FBTSxPQUFPLEtBQUssS0FBSyxTQUFTLENBQUM7QUFDakMsY0FBTSxPQUFPLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQztBQUM5QixjQUFNLE1BQU0sTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDO0FBRTdCLFlBQUksTUFBTTtBQUNSLGlCQUFPO0FBQ1AsaUJBQU87UUFDVDtBQUVBLFlBQUksTUFBTSxRQUFRLEdBQUcsR0FBRztBQUN0QixlQUFLLEtBQUssR0FBRyxHQUFHO0FBQ2hCLGlCQUFPO1FBQ1Q7QUFFQSxZQUFJLElBQUksU0FBUyxXQUFXLElBQUksVUFBVSxLQUFLO0FBQzdDLGNBQUksS0FBSyxTQUFTLEVBQUcsTUFBSyxLQUFLLEtBQUssQ0FBQyxDQUFDO0FBQ3RDLGlCQUFPO1FBQ1Q7QUFFQSxZQUFJLElBQUksU0FBUyxhQUFhLElBQUksU0FBUyxXQUFXO0FBQ3BELGVBQUssS0FBSyxTQUFTLENBQUMsS0FBSyxJQUFJO0FBQzdCLGlCQUFPO1FBQ1Q7QUFFQSxnQkFBUSxJQUFJLE1BQU07VUFDaEIsS0FBSztVQUNMLEtBQUs7VUFDTCxLQUFLO0FBQ0gsZ0JBQUksSUFBSSxPQUFRLE1BQUssS0FBSyxHQUFHLE9BQU8sSUFBSSxPQUFPLElBQUksTUFBTSxDQUFDO3FCQUNqRCxNQUFNLFFBQVEsSUFBSSxLQUFLLEVBQUcsTUFBSyxLQUFLLEdBQUcsSUFBSSxLQUFLO2dCQUNwRCxNQUFLLEtBQUssSUFBSSxLQUFLO0FBQ3hCO1VBRUYsS0FBSztBQUNILGdCQUFJLElBQUksT0FBUSxNQUFLLEtBQUssR0FBRyxPQUFPLElBQUksT0FBTyxJQUFJLE1BQU0sQ0FBQztxQkFDakQsSUFBSSxPQUFRLE1BQUssS0FBSyxHQUFHLElBQUksS0FBSztnQkFDdEMsTUFBSyxLQUFLLElBQUksS0FBSztBQUV4QixnQkFBSSxJQUFJLFNBQVMsU0FBUztBQUN4QixxQkFBTztZQUNUO0FBQ0E7VUFFRixLQUFLO0FBQ0gsaUJBQUssS0FBSyxTQUFTLENBQUMsS0FBSyxJQUFJO0FBQzdCLG1CQUFPO1VBRVQsS0FBSztBQUNILGlCQUFLLEtBQUssR0FBRyxPQUFPLE1BQU0sSUFBSSxRQUFRLENBQUMsQ0FBQztBQUN4QztVQUVGLEtBQUs7QUFDSCxnQkFBSSxNQUFNLFFBQVEsSUFBSSxHQUFHO0FBQ3ZCLG1CQUFLLEtBQUssU0FBUyxDQUFDLElBQUksS0FBSyxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxDQUFDO1lBQ25FLE9BQU87QUFDTCxtQkFBSyxLQUFLLElBQUksS0FBSztZQUNyQjtBQUNBO1VBRUYsS0FBSztBQUNILGlCQUFLLEtBQUssU0FBUyxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxLQUFLO0FBQzVDO1VBRUYsS0FBSztVQUNMLEtBQUs7QUFBUztBQUNaLGtCQUFJLFFBQVE7QUFDWixrQkFBSSxPQUFPLFFBQVEsSUFBSSxLQUFLLE1BQU0sWUFBYSxTQUFRLFFBQVEsSUFBSSxLQUFLO0FBQ3hFLGtCQUFJLFVBQVUsTUFBTTtBQUNsQixzQkFBTSxJQUFJLE1BQU0sMkJBQTJCLElBQUksS0FBSyxHQUFHO2NBQ3pEO0FBRUEsa0JBQUksTUFBTSxDQUFDLEtBQUssTUFBTSxDQUFDLEVBQUUsTUFBTTtBQUM3Qix3QkFBUUEsUUFBTyxPQUFPLE9BQU87QUFFN0Isb0JBQUksSUFBSSxRQUFRO0FBQ2QsdUJBQUssS0FBSyxHQUFHLE9BQU8sT0FBTyxJQUFJLE1BQU0sRUFBRSxPQUFPLENBQUMsT0FBTyxTQUFTO0FBQzdELDBCQUFNLEtBQUssR0FBRyxJQUFJO0FBQ2xCLDJCQUFPO2tCQUNULEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ1IsT0FBTztBQUNMLHVCQUFLLEtBQUssR0FBRyxLQUFLO2dCQUNwQjtBQUVBLHVCQUFPO2NBQ1Q7QUFFQSxzQkFBUSxNQUFNLFFBQVEsS0FBSyxJQUFJLFFBQVEsQ0FBQyxLQUFLO0FBQzdDLGtCQUFJLElBQUksT0FBUSxNQUFLLEtBQUssR0FBRyxPQUFPLE9BQU8sSUFBSSxNQUFNLENBQUM7a0JBQ2pELE1BQUssS0FBSyxHQUFHLEtBQUs7WUFDekI7QUFBRTtVQUNGLFNBQVM7QUFDUCxrQkFBTSxJQUFJLE1BQU0sY0FBYyxJQUFJLElBQUksR0FBRztVQUMzQztRQUNGO0FBRUEsZUFBTztNQUNULEdBQUcsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLE1BQU0sU0FBUztBQUM1QixjQUFNLE9BQU8sS0FBSyxLQUFLLFNBQVMsQ0FBQztBQUVqQyxZQUNFLE1BQU0sUUFBUSxJQUFJLEtBQ2YsTUFBTSxRQUFRLElBQUksS0FDbEIsT0FBTyxLQUFLLENBQUMsTUFBTSxZQUNuQixLQUFLLFdBQVcsR0FDbkI7QUFDQSxnQkFBTSxTQUFTLEtBQUssQ0FBQyxNQUFNLFdBQVcsS0FBSyxTQUFTLEtBQUssQ0FBQztBQUMxRCxnQkFBTSxDQUFDLE1BQU0sTUFBTSxJQUFJLE9BQU8sTUFBTSxFQUFFLE1BQU0sSUFBSTtBQUVoRCxlQUFLLElBQUk7QUFDVCxlQUFLLEtBQUssR0FBRyxLQUFLLE1BQU0sS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFFMUMsY0FBSSxPQUFPLE1BQU0sRUFBRSxTQUFTLEdBQUcsR0FBRztBQUNoQyxrQkFBTSxRQUFRLEtBQUssTUFBTSxDQUFDLFNBQVMsQ0FBQztBQUVwQyxrQkFBTSxJQUFJO0FBQ1Ysa0JBQU0sUUFBUTtBQUNkLGlCQUFLLEtBQUssR0FBRyxLQUFLO1VBQ3BCO0FBQ0EsaUJBQU87UUFDVDtBQUVBLFlBQUksT0FBTyxTQUFTLFlBQVksS0FBSyxTQUFTLEdBQUcsR0FBRztBQUNsRCxnQkFBTSxTQUFTLEtBQUssTUFBTSxHQUFHO0FBRTdCLGNBQUksT0FBTyxLQUFLLGFBQWEsR0FBRztBQUM5QixrQkFBTSxTQUFTLE9BQU8sVUFBVSxhQUFhO0FBQzdDLGtCQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLE1BQU0sR0FBRyxNQUFNLEdBQUcsT0FBTyxNQUFNLE1BQU0sQ0FBQztBQUU3RCxpQkFBSyxLQUFLRix3QkFBdUIsRUFBRSxLQUFLLEdBQUcsR0FBRyxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLEVBQUUsSUFBSSxDQUFBLE1BQUssR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDcEcsT0FBTztBQUNMLGlCQUFLLEtBQUssR0FBR0MsT0FBTSxJQUFJLENBQUMsQ0FBQztVQUMzQjtRQUNGLE9BQU87QUFDTCxlQUFLLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDcEI7QUFDQSxlQUFPO01BQ1QsR0FBRyxDQUFDLENBQUM7SUFDUDtBQUVPLGFBQVNFLE9BQU0sUUFBUTtBQUM1QixZQUFNLFNBQVMsQ0FBQztBQUNoQixZQUFNLE9BQU8sQ0FBQztBQUNkLFlBQU0sT0FBTyxDQUFDO0FBRWQsVUFBSSxVQUFVO0FBQ2QsVUFBSSxTQUFTO0FBQ2IsVUFBSTtBQUNKLFVBQUksT0FBTyxDQUFDO0FBQ1osYUFBTyxNQUFNLFFBQVEsRUFBRSxRQUFRLENBQUMsTUFBTSxRQUFRO0FBQzVDLGVBQU8sS0FBSyxRQUFRLFNBQVMsRUFBRSxFQUFFLEtBQUs7QUFDdEMsWUFBSSxDQUFDLEtBQU07QUFFWCxZQUFJO0FBQ0YsY0FBSSxLQUFLLE9BQU8sTUFBTSxLQUFLO0FBQ3pCLGtCQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssSUFBSSxLQUFLLE1BQU0sS0FBSztBQUV6QyxnQkFBSSxNQUFNLFNBQVMsR0FBRztBQUNwQixtQkFBSyxJQUFJLElBQUksVUFBVSxNQUFNLEtBQUssR0FBRyxDQUFDO1lBQ3hDO1VBQ0YsV0FBVyxLQUFLLFFBQVEsSUFBSSxLQUFLLEdBQUc7QUFDbEMsZ0JBQUksT0FBTztBQUNULHFCQUFPLEtBQUssSUFBSTtBQUNoQix3QkFBVTtBQUNWLHVCQUFTO0FBQ1QscUJBQU8sQ0FBQztZQUNWO0FBRUEsb0JBQVEsS0FBSyxNQUFNLEtBQUssRUFBRSxNQUFNLENBQUMsRUFBRSxLQUFLLEdBQUc7VUFDN0MsV0FBVyxLQUFLLE9BQU8sTUFBTSxLQUFLO0FBQ2hDLGlCQUFLLEtBQUssVUFBVSxLQUFLLE9BQU8sQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1VBQzVDLFdBQVcsS0FBSyxPQUFPLE1BQU0sS0FBSztBQUNoQyxrQkFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLElBQUksS0FBSyxPQUFPLENBQUMsRUFBRSxNQUFNLEdBQUc7QUFFbEQsZ0JBQUksT0FBTyxDQUFDLE1BQU0sS0FBSztBQUNyQixvQkFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLENBQUM7QUFFeEIscUJBQU8sS0FBSyxJQUFJLEVBQ2IsT0FBTyxDQUFBLE1BQUssRUFBRSxRQUFRLEdBQUcsTUFBTSxDQUFDLEVBQ2hDLFFBQVEsQ0FBQSxNQUFLO0FBQ1oscUJBQUssR0FBRyxJQUFJLElBQUksRUFBRSxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLE1BQU0sS0FBSyxDQUFDLENBQUM7Y0FDcEQsQ0FBQztZQUNMO0FBQ0EscUJBQVM7VUFDWCxXQUFXLEtBQUssUUFBUSxHQUFHLElBQUksR0FBRztBQUNoQyxrQkFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLElBQUksS0FBSyxNQUFNLEdBQUc7QUFFdkMsaUJBQUssSUFBSSxJQUFJLFVBQVUsTUFBTSxLQUFLLEdBQUcsRUFBRSxLQUFLLENBQUM7VUFDL0MsT0FBTztBQUNMLGtCQUFNLFFBQVEsVUFBVSxJQUFJO0FBRTVCLGdCQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssTUFBTSxDQUFDLEVBQUUsU0FBUyxXQUFXO0FBQzVDLGtCQUFJLENBQUMsUUFBUyxPQUFNLElBQUksVUFBVSwyQkFBMkIsSUFBSSxHQUFHO0FBRXBFLG9CQUFNLE1BQU0sS0FBSyxPQUFPLEVBQUUsS0FBSyxPQUFPLEVBQUUsU0FBUyxDQUFDO0FBRWxELGtCQUFJLENBQUMsSUFBSSxPQUFRLEtBQUksU0FBUyxDQUFDLEVBQUUsTUFBTSxVQUFVLE9BQU8sSUFBSSxDQUFDO0FBQzdELGtCQUFJLE9BQU8sS0FBSyxHQUFHLEtBQUs7QUFDeEI7WUFDRjtBQUVBLGtCQUFNLFFBQVEsTUFBTSxVQUFVLENBQUEsTUFBSyxDQUFDLFFBQVEsU0FBUyxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQztBQUM5RSxrQkFBTSxRQUFRLE1BQU0sVUFBVSxDQUFBLE1BQUssRUFBRSxTQUFTLFNBQVM7QUFDdkQsa0JBQU0sUUFBUSxRQUFRLElBQUksTUFBTSxNQUFNLEtBQUssSUFBSTtBQUMvQyxrQkFBTSxTQUFTLE1BQU0sVUFBVSxDQUFBLE1BQUssRUFBRSxTQUFTLFNBQVM7QUFDeEQsa0JBQU0sU0FBUyxNQUFNLE1BQU0sR0FBRyxRQUFRLElBQUksUUFBUSxDQUFDO0FBRW5ELHNCQUFVLFNBQVMsT0FBTyxDQUFDLEVBQUU7QUFDN0IsZ0JBQUksQ0FBQyxLQUFLLE9BQU8sR0FBRztBQUNsQixtQkFBSyxPQUFPLElBQUksQ0FBQztZQUNuQjtBQUVBLGdCQUFJO0FBQ0osZ0JBQUksUUFBUSxLQUFLLFVBQVUsSUFBSTtBQUM3QixvQkFBTSxNQUFNLEtBQUssT0FBTyxFQUFFLEtBQUssT0FBTyxFQUFFLFNBQVMsQ0FBQztBQUVsRCxrQkFBSSxPQUFPLE1BQU0sTUFBTSxLQUFLO0FBQzVCLHFCQUFPO2dCQUNMLE9BQU8sSUFBSTtnQkFDWCxRQUFRLE1BQU0sTUFBTSxHQUFHLEtBQUs7Y0FDOUI7WUFDRixXQUFXLFNBQVMsR0FBRztBQUNyQixxQkFBTztnQkFDTCxNQUFNLE1BQU0sTUFBTSxNQUFNO2dCQUN4QixPQUFPLE1BQU0sTUFBTSxHQUFHLE1BQU07Y0FDOUI7WUFDRixXQUFXLFdBQVcsR0FBRztBQUN2QixxQkFBTyxFQUFFLFFBQVEsTUFBTSxNQUFNLENBQUMsRUFBRTtZQUNsQyxPQUFPO0FBQ0wscUJBQU8sRUFBRSxPQUFPLE1BQU07WUFDeEI7QUFFQSxnQkFBSSxPQUFPLFNBQVMsR0FBRztBQUNyQixtQkFBSyxTQUFTLE9BQU8sTUFBTSxDQUFDO1lBQzlCO0FBQ0EsaUJBQUssT0FBTyxFQUFFLEtBQUssSUFBSTtVQUN6QjtRQUNGLFNBQVMsR0FBRztBQUNWLGdCQUFNLE1BQU0sT0FBTyxNQUFNLFdBQVcsSUFBSSxFQUFFO0FBRTFDLGdCQUFNLElBQUksWUFBWSxHQUFHLEdBQUc7WUFBZSxNQUFNLENBQUM7RUFBSyxJQUFJLEVBQUU7UUFDL0Q7TUFDRixDQUFDO0FBRUQsVUFBSSxPQUFPO0FBQ1QsZUFBTyxLQUFLLElBQUk7TUFDbEI7QUFDQSxhQUFPLEVBQUUsTUFBTSxNQUFNLE9BQU87SUFDOUI7Ozs7OztBQ3BRQTs7YUFBUyxJQUFJLE9BQU87QUFDbEIsYUFBTyxPQUFPLEtBQUssRUFDaEIsUUFBUSxNQUFNLE9BQU8sRUFDckIsUUFBUSxNQUFNLE1BQU0sRUFDcEIsUUFBUSxNQUFNLE1BQU07SUFDekI7QUFFQSxhQUFTLEtBQUssS0FBSyxPQUFPLFFBQVEsQ0FBQyxHQUFHO0FBQ3BDLFlBQU0sWUFBWSxPQUFPLFFBQVEsS0FBSyxFQUNuQyxJQUFJLENBQUMsQ0FBQyxLQUFLLFNBQVMsTUFBTSxTQUFTLEdBQUcsS0FBSyxJQUFJLFNBQVMsQ0FBQyxHQUFHLEVBQzVELEtBQUssRUFBRTtBQUNWLGFBQU8sZ0JBQWdCLEdBQUcsSUFBSSxTQUFTLElBQUksSUFBSSxLQUFLLENBQUM7SUFDdkQ7QUFFQSxhQUFTLFNBQVMsT0FBTztBQUN2QixVQUFJLENBQUMsTUFBTyxRQUFPO0FBQ25CLFVBQUksVUFBVSxJQUFLLFFBQU87QUFDMUIsVUFBSSxVQUFVLElBQUssUUFBTztBQUMxQixVQUFJLE1BQU0sT0FBTyxDQUFDLE1BQU0sSUFBSyxRQUFPO0FBQ3BDLFVBQUksVUFBVSxLQUFLLEtBQUssRUFBRyxRQUFPO0FBQ2xDLFVBQUksZ0JBQWdCLEtBQUssS0FBSyxFQUFHLFFBQU87QUFDeEMsVUFBSSxxQkFBcUIsS0FBSyxLQUFLLEVBQUcsUUFBTztBQUM3QyxVQUFJLE1BQU0sU0FBUyxHQUFHLEVBQUcsUUFBTztBQUNoQyxVQUFJLDZEQUE2RCxLQUFLLEtBQUssRUFBRyxRQUFPO0FBQ3JGLFVBQUksb0RBQW9ELEtBQUssS0FBSyxFQUFHLFFBQU87QUFDNUUsVUFBSSwwQkFBMEIsS0FBSyxLQUFLLEVBQUcsUUFBTztBQUNsRCxVQUFJLFNBQVMsS0FBSyxLQUFLLEVBQUcsUUFBTztBQUNqQyxVQUFJLGtCQUFrQixLQUFLLEtBQUssRUFBRyxRQUFPO0FBQzFDLGFBQU87SUFDVDtBQUVBLGFBQVMsWUFBWSxPQUFPO0FBQzFCLFlBQU0sTUFBTSxTQUFTLEtBQUs7QUFDMUIsVUFBSSxDQUFDLElBQUssUUFBTyxJQUFJLEtBQUs7QUFDMUIsVUFBSSxRQUFRLGlCQUFpQixVQUFVLElBQUssUUFBTyxLQUFLLEtBQUssT0FBTyxFQUFFLEtBQUssTUFBTSxDQUFDO0FBQ2xGLFVBQUksUUFBUSxpQkFBaUIsVUFBVSxJQUFLLFFBQU8sS0FBSyxLQUFLLE9BQU8sRUFBRSxZQUFZLElBQUksQ0FBQztBQUN2RixVQUFJLFFBQVEsY0FBZSxRQUFPLEtBQUssS0FBSyxPQUFPLEVBQUUsWUFBWSxNQUFNLE1BQU0sQ0FBQyxFQUFFLENBQUM7QUFDakYsVUFBSSxRQUFRLFdBQVksUUFBTyxLQUFLLEtBQUssT0FBTyxFQUFFLE1BQU0sTUFBTSxZQUFZLEVBQUUsQ0FBQztBQUM3RSxVQUFJLFFBQVEsY0FBZSxRQUFPLEtBQUssS0FBSyxPQUFPLEVBQUUsU0FBUyxJQUFJLENBQUM7QUFDbkUsVUFBSSxRQUFRLFdBQVksUUFBTyxLQUFLLEtBQUssT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9ELFVBQUksUUFBUSxZQUFhLFFBQU8sS0FBSyxLQUFLLE9BQU8sRUFBRSxPQUFPLE1BQU0sQ0FBQztBQUNqRSxVQUFJLFFBQVEsYUFBYyxRQUFPLEtBQUssS0FBSyxPQUFPLEVBQUUsUUFBUSxNQUFNLENBQUM7QUFDbkUsVUFBSSxRQUFRLGFBQWMsUUFBTyxLQUFLLEtBQUssT0FBTyxFQUFFLFFBQVEsTUFBTSxNQUFNLENBQUMsRUFBRSxDQUFDO0FBQzVFLGFBQU8sS0FBSyxLQUFLLEtBQUs7SUFDeEI7QUFFQSxhQUFTLGFBQWEsTUFBTTtBQUMxQixhQUFPLEtBQ0osTUFBTSxPQUFPLEVBQ2IsSUFBSSxDQUFBLFNBQVMsTUFBTSxLQUFLLElBQUksSUFBSSxPQUFPLFlBQVksSUFBSSxDQUFFLEVBQ3pELEtBQUssRUFBRTtJQUNaO0FBRUEsYUFBUyxhQUFhLE1BQU07QUFDMUIsWUFBTSxNQUFNLEtBQUssUUFBUSxHQUFHO0FBQzVCLFVBQUksTUFBTSxFQUFHLFFBQU8sQ0FBQyxNQUFNLEVBQUU7QUFDN0IsYUFBTyxDQUFDLEtBQUssTUFBTSxHQUFHLEdBQUcsR0FBRyxLQUFLLE1BQU0sR0FBRyxDQUFDO0lBQzdDO0FBRUEsYUFBUyxXQUFXLE1BQU07QUFDeEIsVUFBSSxDQUFDLEtBQUssS0FBSyxFQUFHLFFBQU8sSUFBSSxJQUFJO0FBRWpDLFVBQUksWUFBWSxLQUFLLElBQUksR0FBRztBQUMxQixlQUFPLEtBQUssUUFBUSxvQkFBb0IsQ0FBQyxHQUFHLElBQUksT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLEdBQUcsS0FBSyxnQkFBZ0IsRUFBRSxDQUFDLEVBQUU7TUFDaEc7QUFDQSxVQUFJLFdBQVcsS0FBSyxJQUFJLEdBQUc7QUFDekIsZUFBTyxLQUFLLFFBQVEsbUJBQW1CLENBQUMsR0FBRyxJQUFJLE9BQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEtBQUssYUFBYSxFQUFFLENBQUMsRUFBRTtNQUM1RjtBQUNBLFVBQUksUUFBUSxLQUFLLElBQUksR0FBRztBQUN0QixlQUFPLGFBQWEsS0FBSyxRQUFRLE1BQU0sS0FBSyxDQUFDO01BQy9DO0FBQ0EsVUFBSSxRQUFRLEtBQUssSUFBSSxHQUFHO0FBQ3RCLGNBQU0sU0FBUyxJQUFJLEtBQUssTUFBTSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQ3hDLGNBQU0sT0FBTyxLQUFLLFVBQVUsRUFBRSxNQUFNLENBQUMsRUFBRSxRQUFRLFFBQVEsR0FBRztBQUMxRCxjQUFNLFdBQVcsS0FDZCxNQUFNLE9BQU8sRUFDYixJQUFJLENBQUEsU0FBUTtBQUNYLGNBQUksQ0FBQyxRQUFRLE1BQU0sS0FBSyxJQUFJLEVBQUcsUUFBTztBQUN0QyxjQUFJLG1CQUFtQixLQUFLLElBQUksRUFBRyxRQUFPLEtBQUssZUFBZSxNQUFNLEVBQUUsU0FBUyxLQUFLLENBQUM7QUFDckYsaUJBQU8sWUFBWSxJQUFJO1FBQ3pCLENBQUMsRUFDQSxLQUFLLEVBQUU7QUFDVixlQUFPLEdBQUcsTUFBTSxHQUFHLEtBQUssbUJBQW1CLEdBQUcsQ0FBQyxHQUFHLFFBQVE7TUFDNUQ7QUFDQSxVQUFJLGlCQUFpQixLQUFLLElBQUksR0FBRztBQUMvQixlQUFPLEtBQUssUUFBUSw2QkFBNkIsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLFNBQzVELEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLGVBQWUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLGFBQWEsSUFBSSxDQUFDLEVBQzdFO01BQ0g7QUFDQSxVQUFJLFdBQVcsS0FBSyxJQUFJLEdBQUc7QUFDekIsWUFBSSxpQkFBaUI7QUFDckIsZUFBTyxLQUFLLE1BQU0sT0FBTyxFQUFFLElBQUksQ0FBQSxTQUFRO0FBQ3JDLGNBQUksUUFBUSxLQUFLLElBQUksRUFBRyxRQUFPO0FBQy9CLGdCQUFNLE1BQU0sU0FBUyxJQUFJO0FBQ3pCLGNBQUksUUFBUSxnQkFBZ0IsQ0FBQyxnQkFBZ0I7QUFDM0MsNkJBQWlCO0FBQ2pCLG1CQUFPLEtBQUssS0FBSyxNQUFNLEVBQUUsVUFBVSxLQUFLLENBQUM7VUFDM0M7QUFDQSxpQkFBTyxZQUFZLElBQUk7UUFDekIsQ0FBQyxFQUFFLEtBQUssRUFBRTtNQUNaO0FBQ0EsYUFBTyxhQUFhLElBQUk7SUFDMUI7QUFFTyxhQUFTLFVBQVUsT0FBTztBQUMvQixhQUFPLE9BQU8sU0FBUyxFQUFFLEVBQ3RCLE1BQU0sT0FBTyxFQUNiLElBQUksQ0FBQSxTQUFRO0FBQ1gsY0FBTSxDQUFDLE1BQU0sT0FBTyxJQUFJLGFBQWEsSUFBSTtBQUN6QyxjQUFNLFdBQVcsV0FBVyxJQUFJO0FBQ2hDLFlBQUksQ0FBQyxRQUFTLFFBQU87QUFDckIsZUFBTyxHQUFHLFFBQVEsR0FBRyxLQUFLLGVBQWUsT0FBTyxDQUFDO01BQ25ELENBQUMsRUFDQSxLQUFLLElBQUk7SUFDZDs7Ozs7O0FDbEhBOztRQUFBLEVBQUEsVUFBUyxJQUFBO0FBRVQsUUFBTSxXQUFXLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFO0FBQzVELFFBQU0sY0FBYyxJQUFJLElBQUk7QUFFNUIsYUFBU0MsZUFBYyxHQUFHO0FBQ3hCLGFBQU8sRUFBRSxPQUFPLENBQUMsRUFBRSxZQUFZLElBQUksRUFBRSxNQUFNLENBQUM7SUFDOUM7QUFFQSxhQUFTLFVBQVUsU0FBUztBQUMxQixZQUFNQyxLQUFJLFFBQVEsTUFBTSwwQkFBMEI7QUFDbEQsVUFBSSxDQUFDQSxHQUFHLFFBQU87QUFDZixZQUFNLFVBQVUsU0FBU0EsR0FBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLElBQUksU0FBU0EsR0FBRSxDQUFDLEVBQUUsWUFBWSxDQUFDO0FBQ3BFLGFBQU8sVUFBVTtJQUNuQjtBQUVBLGFBQVMsT0FBTyxLQUFLO0FBQ25CLGFBQU8sS0FBSyxNQUFNO0lBQ3BCO0FBRUEsYUFBUyxjQUFjLE9BQU8sT0FBTyxTQUFTO0FBQzVDLFVBQUksQ0FBQyxTQUFTLE1BQU0sV0FBVyxFQUFHLFFBQU87QUFDekMsWUFBTSxTQUFTLE1BQ1osSUFBSSxDQUFBLE9BQU0sRUFBRSxNQUFNLEdBQUcsS0FBSyxVQUFVLENBQUMsRUFBRSxFQUFFLEVBQ3pDLE9BQU8sQ0FBQSxNQUFLLEVBQUUsUUFBUSxJQUFJLEVBQzFCLEtBQUssQ0FBQyxHQUFHLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRztBQUMvQixVQUFJLE9BQU8sV0FBVyxFQUFHLFFBQU87QUFFaEMsWUFBTSxJQUFJO0FBQ1YsWUFBTSxJQUFJO0FBQ1YsVUFBSSxNQUFNLGVBQWUsQ0FBQyxhQUFhLENBQUM7QUFFeEMsYUFBTztBQUNQLGVBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLLEdBQUc7QUFDN0IsY0FBTSxJQUFJLEtBQUssSUFBSTtBQUNuQixlQUFPLHVDQUF1QyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7TUFDckU7QUFDQSxhQUFPO0FBRVAsWUFBTSxVQUFVLFNBQVM7QUFDekIsWUFBTSxZQUFZLE9BQU87QUFDekIsVUFBSTtBQUNKLFVBQUksU0FBUztBQUNYLGNBQU0sT0FBTyxZQUFZLElBQUksT0FBTyxZQUFZLEtBQUs7QUFDckQsZUFBTyxRQUFRLENBQUMsR0FBRyxNQUFNO0FBQ3ZCLFlBQUUsSUFBSSxLQUFLLElBQUk7UUFDakIsQ0FBQztNQUNILE9BQU87QUFDTCxnQkFBUTtBQUNSLGlCQUFTLElBQUksR0FBRyxJQUFJLE9BQU8sUUFBUSxLQUFLLEdBQUc7QUFDekMsZ0JBQU0sT0FBTyxPQUFPLENBQUM7QUFDckIsZ0JBQU0sT0FBTyxJQUFJLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSTtBQUNyQyxlQUFLLElBQUk7QUFDVCxjQUFJLFFBQVEsS0FBSyxJQUFJLEtBQUssTUFBTSxLQUFLLEdBQUcsTUFBTSxHQUFHO0FBQy9DLGlCQUFLLElBQUksS0FBSyxJQUFJO1VBQ3BCO1FBQ0Y7TUFDRjtBQUVBLGFBQU8sUUFBUSxDQUFBLE1BQUs7QUFDbEIsY0FBTSxJQUFJLE9BQU8sRUFBRSxHQUFHO0FBQ3RCLGNBQU1BLEtBQUksRUFBRSxLQUFLLE1BQU0sMEJBQTBCO0FBQ2pELGNBQU0sYUFBYUEsS0FBSUEsR0FBRSxDQUFDLElBQUk7QUFDOUIsaUJBQVNDLEtBQUksSUFBSUEsTUFBSyxFQUFFLEtBQUtBLE1BQUssR0FBRztBQUNuQyxnQkFBTSxLQUFLLE9BQU9BLEVBQUM7QUFDbkIsaUJBQU8sNEJBQTRCLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUNsRjtBQUNBLGlCQUFTQSxLQUFJLElBQUlBLE1BQUssRUFBRSxLQUFLQSxNQUFLLEdBQUc7QUFDbkMsZ0JBQU0sS0FBSyxPQUFPQSxFQUFDO0FBQ25CLGlCQUFPLDRCQUE0QixFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUU7UUFDbEY7QUFDQSxZQUFJLFNBQVM7QUFDWCxpQkFBTyxnQkFBZ0IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxzRkFBc0YsRUFBRSxDQUFDLElBQUksQ0FBQztRQUNwSSxPQUFPO0FBQ0wsaUJBQU8sZ0JBQWdCLEVBQUUsQ0FBQyxTQUFTLENBQUMscURBQXFELEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDbkc7QUFDQSxZQUFJLGVBQWUsS0FBSztBQUN0QixpQkFBTyxZQUFZLEVBQUUsSUFBSSxFQUFFLFFBQVEsSUFBSSxDQUFDO1FBQzFDLFdBQVcsZUFBZSxLQUFLO0FBQzdCLGlCQUFPLFlBQVksRUFBRSxJQUFJLEVBQUUsUUFBUSxJQUFJLENBQUM7UUFDMUM7TUFDRixDQUFDO0FBRUQsVUFBSSxDQUFDLFdBQVcsT0FBTyxTQUFTLEdBQUc7QUFDakMsY0FBTSxZQUFZLE9BQU8sQ0FBQyxFQUFFO0FBQzVCLGNBQU0sYUFBYSxPQUFPLE9BQU8sU0FBUyxDQUFDLEVBQUU7QUFDN0MsWUFBSSxVQUFVLGFBQWEsSUFBSSxPQUFPO0FBQ3RDLFlBQUksWUFBWSxNQUFNO0FBQ3BCLGdCQUFNLFFBQVEsT0FBTyxVQUFVO0FBQy9CLGdCQUFNLFFBQVEsT0FBTyxPQUFPLFNBQVMsQ0FBQyxFQUFFO0FBQ3hDLGlCQUFPLGFBQWEsUUFBUSxDQUFDLFNBQVMsS0FBSyxTQUFTLFFBQVEsQ0FBQyxTQUFTLFFBQVEsRUFBRTtRQUNsRixPQUFPO0FBQ0wsZ0JBQU0sT0FBTyxPQUFPLFNBQVM7QUFDN0IsZ0JBQU0sT0FBTyxPQUFPLENBQUMsRUFBRTtBQUN2QixpQkFBTyxhQUFhLE9BQU8sQ0FBQyxTQUFTLElBQUksU0FBUyxPQUFPLENBQUMsU0FBUyxPQUFPLEVBQUU7UUFDOUU7TUFDRjtBQUVBLGFBQU87QUFDUCxhQUFPO0lBQ1Q7QUFFQSxhQUFTLGFBQWEsR0FBRyxHQUFHLFFBQVEsS0FBSztBQUN2QyxZQUFNLE9BQU8sS0FBSyxJQUFJLEdBQUcsT0FBTyxhQUFhLFFBQVEsQ0FBQztBQUN0RCxZQUFNLE9BQU8sS0FBSyxJQUFJLElBQUksSUFBSSxJQUFJO0FBQ2xDLFlBQU0sTUFBTSxLQUFLLElBQUksSUFBSSxJQUFJLE9BQU8sY0FBYyxHQUFHO0FBQ3JELGFBQU8sRUFBRSxNQUFNLElBQUk7SUFDckI7QUFFTyxhQUFTQyxjQUFhLGFBQWEsVUFBVSxDQUFDLEdBQUc7QUFDdEQsWUFBTSxPQUFPLFNBQVMsY0FBYyxLQUFLO0FBQ3pDLFdBQUssS0FBSztBQUVWLFlBQU0sTUFBTSxTQUFTLGNBQWMsS0FBSztBQUN4QyxVQUFJLEtBQUs7QUFDVCxVQUFJLGFBQWEsZUFBZSxNQUFNO0FBRXRDLFlBQU0sS0FBSyxTQUFTLGNBQWMsVUFBVTtBQUM1QyxTQUFHLEtBQUs7QUFDUixTQUFHLGFBQWE7QUFDaEIsU0FBRyxlQUFlO0FBQ2xCLFNBQUcsUUFBUTtBQUVYLFlBQU0sTUFBTSxTQUFTLGNBQWMsS0FBSztBQUN4QyxVQUFJLEtBQUs7QUFDVCxVQUFJLFNBQVM7QUFDYixVQUFJLFlBQVk7QUFDaEIsWUFBTSxXQUFXLElBQUksY0FBYyxRQUFRO0FBQzNDLFlBQU0sVUFBVSxJQUFJLGNBQWMsbUJBQW1CO0FBQ3JELFlBQU0sV0FBVyxJQUFJLGNBQWMsZ0JBQWdCO0FBRW5ELFlBQU0sa0JBQWtCO1FBQ3RCLFFBQVEsZUFBZTtVQUNyQixNQUFNO1VBQ04sU0FBUyxRQUFRO1VBQ2pCLE9BQU8sQ0FBQSxVQUFTLENBQUMsS0FBSztVQUN0QixXQUFXO1VBQ1gsT0FBTyxDQUFBLFVBQVNILGVBQWMsS0FBSztRQUNyQztRQUNBLFFBQVEsZ0JBQWdCO1VBQ3RCLE1BQU07VUFDTixTQUFTLFFBQVE7VUFDakIsT0FBTyxDQUFBLFVBQVMsTUFBTSxNQUFNLEdBQUcsRUFBRSxJQUFJQSxjQUFhO1VBQ2xELFdBQVc7VUFDWCxPQUFPLE1BQU07UUFDZjtRQUNBLFFBQVEsZUFBZTtVQUNyQixNQUFNO1VBQ04sU0FBUyxRQUFRO1VBQ2pCLE9BQU8sUUFBUTtVQUNmLFdBQVc7VUFDWCxPQUFPLENBQUEsVUFBUztRQUNsQjtRQUNBLFFBQVEscUJBQXFCO1VBQzNCLE1BQU07VUFDTixTQUFTLFFBQVE7VUFDakIsT0FBTyxDQUFBLFVBQVMsSUFBSSxLQUFLO1FBQzNCO1FBQ0EsUUFBUSxrQkFBa0I7VUFDeEIsTUFBTTtVQUNOLFNBQVMsUUFBUTtVQUNqQixPQUFPLENBQUEsVUFBUyxJQUFJLEtBQUs7UUFDM0I7UUFDQSxRQUFRLGNBQWM7VUFDcEIsTUFBTTtVQUNOLFNBQVMsUUFBUTtVQUNqQixPQUFPLENBQUEsVUFBUztRQUNsQjtRQUNBO1VBQ0UsTUFBTTtVQUNOLFNBQVMsTUFBTTtVQUNmLE9BQU8sTUFBTTtRQUNmO1FBQ0EsUUFBUSxtQkFBbUI7VUFDekIsTUFBTTtVQUNOLFNBQVMsUUFBUTtVQUNqQixPQUFPLENBQUEsTUFBSyxZQUFZLENBQUM7UUFDM0I7UUFDQTtVQUNFLE1BQU07VUFDTixTQUFTLENBQUEsTUFBSztBQUNaLGtCQUFNLElBQUksU0FBUyxHQUFHLEVBQUU7QUFDeEIsbUJBQU8sZ0NBQWdDLENBQUMsUUFBUSxNQUFNLElBQUksTUFBTSxFQUFFO1VBQ3BFO1VBQ0EsT0FBTyxDQUFBLE1BQUssT0FBSSxDQUFDO1FBQ25CO1FBQ0E7VUFDRSxNQUFNO1VBQ04sU0FBUyxNQUFNO1VBQ2YsT0FBTyxDQUFBLE1BQUs7UUFDZDtRQUNBO1VBQ0UsTUFBTTtVQUNOLFNBQVMsTUFBTTtVQUNmLE9BQU8sTUFBTTtRQUNmO01BQ0YsRUFBRSxPQUFPLE9BQU87QUFFaEIsZUFBUyxPQUFPO0FBQ2QsWUFBSSxZQUFZLEdBQUcsVUFBVSxHQUFHLEtBQUssQ0FBQzs7TUFDeEM7QUFFQSxlQUFTLGNBQWM7QUFDckIsWUFBSSxTQUFTO0FBQ2IsaUJBQVMsWUFBWTtBQUNyQixpQkFBUyxTQUFTO01BQ3BCO0FBRUEsU0FBRyxpQkFBaUIsVUFBVSxNQUFNO0FBQ2xDLFlBQUksWUFBWSxHQUFHO0FBQ25CLFlBQUksYUFBYSxHQUFHO01BQ3RCLENBQUM7QUFFRCxTQUFHLGlCQUFpQixTQUFTLE1BQU07QUFDakMsYUFBSztBQUNMLG9CQUFZO0FBQ1osWUFBSSxRQUFRLFFBQVMsU0FBUSxRQUFRLEdBQUcsS0FBSztNQUMvQyxDQUFDO0FBRUQsU0FBRyxpQkFBaUIsYUFBYSxDQUFBLE1BQUs7QUFDcEMsY0FBTSxXQUFXLFNBQVMsa0JBQWtCLEVBQUUsU0FBUyxFQUFFLE9BQU87QUFDaEUsY0FBTSxRQUFRLGdCQUNYLElBQUksQ0FBQSxZQUFXO0FBQ2QsZ0JBQU0sTUFBTSxTQUFTLEtBQUssQ0FBQSxPQUFNLEdBQUcsV0FBVyxHQUFHLFFBQVEsUUFBUSxJQUFJLENBQUM7QUFDdEUsaUJBQU8sTUFBTSxFQUFFLFNBQVMsT0FBTyxJQUFJLFFBQVEsUUFBUSxJQUFJLEVBQUUsSUFBSTtRQUMvRCxDQUFDLEVBQ0EsS0FBSyxPQUFPO0FBQ2YsWUFBSSxDQUFDLE9BQU87QUFDVixzQkFBWTtBQUNaO1FBQ0Y7QUFDQSxjQUFNLE9BQU8sTUFBTSxRQUFRLFFBQVEsTUFBTSxLQUFLO0FBQzlDLFlBQUksQ0FBQyxNQUFNO0FBQ1Qsc0JBQVk7QUFDWjtRQUNGO0FBQ0EsY0FBTSxNQUFNLGFBQWEsRUFBRSxTQUFTLEVBQUUsT0FBTztBQUM3QyxpQkFBUyxjQUFjLE1BQU0sUUFBUSxNQUFNLE1BQU0sS0FBSztBQUN0RCxnQkFBUSxjQUFjO0FBQ3RCLFlBQUksTUFBTSxRQUFRLE9BQU87QUFDdkIsZ0JBQU0sVUFBVSxNQUFNLFFBQVEsTUFBTSxNQUFNLEtBQUs7QUFDL0MsY0FBSSxXQUFXLFFBQVEsUUFBUTtBQUM3QixxQkFBUyxZQUFZLGNBQWMsU0FBUyxNQUFNLFFBQVEsU0FBUztBQUNuRSxxQkFBUyxTQUFTO1VBQ3BCLE9BQU87QUFDTCxxQkFBUyxZQUFZO0FBQ3JCLHFCQUFTLFNBQVM7VUFDcEI7UUFDRixPQUFPO0FBQ0wsbUJBQVMsWUFBWTtBQUNyQixtQkFBUyxTQUFTO1FBQ3BCO0FBQ0EsWUFBSSxNQUFNLE9BQU8sR0FBRyxJQUFJLElBQUk7QUFDNUIsWUFBSSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUc7QUFDMUIsWUFBSSxTQUFTO01BQ2YsQ0FBQztBQUVELFNBQUcsaUJBQWlCLGNBQWMsV0FBVztBQUU3QyxXQUFLO0FBQ0wsV0FBSyxZQUFZLEdBQUc7QUFDcEIsV0FBSyxZQUFZLEVBQUU7QUFDbkIsV0FBSyxZQUFZLEdBQUc7QUFFcEIsYUFBTztRQUNMLElBQUk7UUFDSixVQUFVO1FBQ1YsSUFBSSxDQUFDLE9BQU8sT0FBTyxHQUFHLGlCQUFpQixPQUFPLEVBQUU7UUFDaEQsVUFBVSxNQUFNLEdBQUc7UUFDbkIsVUFBVSxDQUFBLFVBQVM7QUFDakIsYUFBRyxRQUFRO0FBQ1gsZUFBSztBQUNMLHNCQUFZO1FBQ2Q7UUFDQSxPQUFPLE1BQU0sR0FBRyxNQUFNO01BQ3hCO0lBQ0Y7Ozs7OztBQ3BSQTs7YUFBUyxNQUFNLE9BQU87QUFDcEIsYUFBTyxLQUFLLElBQUksR0FBRyxLQUFLLElBQUksR0FBRyxLQUFLLENBQUM7SUFDdkM7QUFFQSxhQUFTLFVBQVUsTUFBTTtBQUN2QixZQUFNLFFBQVEsT0FBTyxRQUFRLEVBQUUsRUFBRSxNQUFNLEtBQUssRUFBRSxPQUFPLE9BQU87QUFDNUQsVUFBSSxDQUFDLE1BQU0sT0FBUSxRQUFPO0FBQzFCLGFBQU8sTUFBTSxNQUFNLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRztJQUNuQztBQUVPLGFBQVNJLGFBQVksUUFBUSxVQUFVLENBQUMsR0FBRztBQUNoRCxZQUFNLE9BQU8sU0FBUyxjQUFjLE9BQU87QUFDM0MsV0FBSyxLQUFLO0FBQ1YsV0FBSyxZQUFZO0FBRWpCLFlBQU0sUUFBUSxTQUFTLGNBQWMsSUFBSTtBQUN6QyxZQUFNLGNBQWM7QUFFcEIsWUFBTSxTQUFTLFNBQVMsY0FBYyxLQUFLO0FBQzNDLGFBQU8sS0FBSztBQUNaLFlBQU0sWUFBWSxTQUFTLGNBQWMsS0FBSztBQUM5QyxnQkFBVSxLQUFLO0FBRWYsWUFBTSxLQUFLLFNBQVMsY0FBYyxLQUFLO0FBQ3ZDLFNBQUcsS0FBSztBQUVSLFlBQU0sZUFBZSxRQUFRLFNBQVM7QUFDdEMsWUFBTSxjQUFjLFFBQVEsUUFBUTtBQUNwQyxZQUFNLG1CQUFtQixRQUFRLGFBQWE7QUFFOUMsWUFBTSxTQUFTLFNBQVMsY0FBYyxPQUFPO0FBQzdDLGFBQU8sWUFBWTtBQUNuQixhQUFPLGNBQWM7QUFDckIsWUFBTSxNQUFNLFNBQVMsY0FBYyxPQUFPO0FBQzFDLFVBQUksT0FBTztBQUNYLFVBQUksTUFBTTtBQUNWLFVBQUksTUFBTTtBQUNWLFVBQUksUUFBUSxPQUFPLFlBQVk7QUFDL0IsWUFBTSxTQUFTLFNBQVMsY0FBYyxNQUFNO0FBQzVDLGFBQU8sWUFBWTtBQUNuQixhQUFPLGNBQWMsT0FBTyxZQUFZO0FBQ3hDLFVBQUksaUJBQWlCLFNBQVMsTUFBTTtBQUNsQyxlQUFPLGNBQWMsSUFBSTtBQUN6QixZQUFJLFFBQVEsVUFBVTtBQUNwQixrQkFBUSxTQUFTLEVBQUUsT0FBTyxTQUFTLElBQUksT0FBTyxFQUFFLEVBQUUsQ0FBQztRQUNyRDtNQUNGLENBQUM7QUFDRCxhQUFPLFlBQVksR0FBRztBQUN0QixhQUFPLFlBQVksTUFBTTtBQUV6QixZQUFNLFVBQVUsU0FBUyxjQUFjLE9BQU87QUFDOUMsY0FBUSxZQUFZO0FBQ3BCLGNBQVEsY0FBYztBQUN0QixZQUFNQyxRQUFPLFNBQVMsY0FBYyxRQUFRO0FBQzVDLE9BQUMsR0FBRyxHQUFHLElBQUksRUFBRSxFQUFFLFFBQVEsQ0FBQSxVQUFTO0FBQzlCLGNBQU0sU0FBUyxTQUFTLGNBQWMsUUFBUTtBQUM5QyxlQUFPLFFBQVEsT0FBTyxLQUFLO0FBQzNCLGVBQU8sY0FBYyxPQUFPLEtBQUs7QUFDakMsWUFBSSxVQUFVLFlBQWEsUUFBTyxXQUFXO0FBQzdDLFFBQUFBLE1BQUssWUFBWSxNQUFNO01BQ3pCLENBQUM7QUFDRCxNQUFBQSxNQUFLLGlCQUFpQixVQUFVLE1BQU07QUFDcEMsWUFBSSxRQUFRLFVBQVU7QUFDcEIsa0JBQVEsU0FBUyxFQUFFLE1BQU0sU0FBU0EsTUFBSyxPQUFPLEVBQUUsRUFBRSxDQUFDO1FBQ3JEO01BQ0YsQ0FBQztBQUNELGNBQVEsWUFBWUEsS0FBSTtBQUV4QixZQUFNLFNBQVMsU0FBUyxjQUFjLE9BQU87QUFDN0MsYUFBTyxZQUFZO0FBQ25CLGFBQU8sY0FBYztBQUNyQixZQUFNLE1BQU0sU0FBUyxjQUFjLE9BQU87QUFDMUMsVUFBSSxPQUFPO0FBQ1gsVUFBSSxNQUFNO0FBQ1YsVUFBSSxNQUFNO0FBQ1YsVUFBSSxRQUFRLE9BQU8sZ0JBQWdCO0FBQ25DLFlBQU0sU0FBUyxTQUFTLGNBQWMsTUFBTTtBQUM1QyxhQUFPLFlBQVk7QUFDbkIsYUFBTyxjQUFjLE9BQU8sbUJBQW1CLElBQUksSUFBSSxnQkFBZ0IsS0FBSyxnQkFBZ0I7QUFDNUYsVUFBSSxpQkFBaUIsU0FBUyxNQUFNO0FBQ2xDLGNBQU0sUUFBUSxTQUFTLElBQUksT0FBTyxFQUFFO0FBQ3BDLGVBQU8sY0FBYyxRQUFRLElBQUksSUFBSSxLQUFLLEtBQUssT0FBTyxLQUFLO0FBQzNELFlBQUksUUFBUSxVQUFVO0FBQ3BCLGtCQUFRLFNBQVMsRUFBRSxXQUFXLE1BQU0sQ0FBQztRQUN2QztNQUNGLENBQUM7QUFDRCxhQUFPLFlBQVksR0FBRztBQUN0QixhQUFPLFlBQVksTUFBTTtBQUV6QixnQkFBVSxZQUFZLE1BQU07QUFDNUIsZ0JBQVUsWUFBWSxPQUFPO0FBQzdCLGdCQUFVLFlBQVksTUFBTTtBQUU1QixZQUFNLGFBQWEsU0FBUyxjQUFjLE9BQU87QUFDakQsaUJBQVcsY0FBYztBQUN6QixZQUFNLGNBQWMsU0FBUyxjQUFjLFFBQVE7QUFDbkQ7UUFDRSxDQUFDLE9BQU8sSUFBSSxDQUFDO1FBQ2IsQ0FBQyxPQUFPLElBQUksQ0FBQztRQUNiLENBQUMsT0FBTyxJQUFJLENBQUM7UUFDYixDQUFDLE9BQU8sSUFBSSxDQUFDO01BQ2YsRUFBRSxRQUFRLENBQUMsQ0FBQyxPQUFPLEtBQUssTUFBTTtBQUM1QixjQUFNLFNBQVMsU0FBUyxjQUFjLFFBQVE7QUFDOUMsZUFBTyxjQUFjO0FBQ3JCLGVBQU8sUUFBUSxPQUFPLEtBQUs7QUFDM0IsWUFBSSxVQUFVLE9BQU8sY0FBZSxRQUFPLFdBQVc7QUFDdEQsb0JBQVksWUFBWSxNQUFNO01BQ2hDLENBQUM7QUFDRCxrQkFBWSxpQkFBaUIsVUFBVSxNQUFNO0FBQzNDLGVBQU8sYUFBYSxXQUFXLFlBQVksS0FBSyxDQUFDO01BQ25ELENBQUM7QUFDRCxpQkFBVyxZQUFZLFdBQVc7QUFFbEMsWUFBTSxnQkFBZ0IsU0FBUyxjQUFjLE9BQU87QUFDcEQsb0JBQWMsY0FBYztBQUM1QixZQUFNLFdBQVcsU0FBUyxjQUFjLE9BQU87QUFDL0MsZUFBUyxPQUFPO0FBQ2hCLGVBQVMsTUFBTTtBQUNmLGVBQVMsTUFBTTtBQUNmLGVBQVMsUUFBUTtBQUNqQixlQUFTLGlCQUFpQixTQUFTLE1BQU07QUFDdkMsZUFBTyxpQkFBaUIsU0FBUyxTQUFTLE9BQU8sRUFBRSxJQUFJLEdBQUc7TUFDNUQsQ0FBQztBQUNELG9CQUFjLFlBQVksUUFBUTtBQUVsQyxTQUFHLFlBQVksVUFBVTtBQUN6QixTQUFHLFlBQVksYUFBYTtBQUU1QixXQUFLLFlBQVksS0FBSztBQUN0QixXQUFLLFlBQVksU0FBUztBQUMxQixXQUFLLFlBQVksTUFBTTtBQUN2QixXQUFLLFlBQVksRUFBRTtBQUVuQixZQUFNLFdBQVcsb0JBQUksSUFBSTtBQUV6QixlQUFTLFlBQVlDLE1BQUssT0FBTztBQUMvQixjQUFNLFFBQVEsT0FBTyxjQUFjQSxJQUFHO0FBQ3RDLGNBQU0sUUFBUSxTQUFTLGNBQWMsS0FBSztBQUMxQyxjQUFNLFlBQVk7QUFDbEIsY0FBTSxRQUFRLE1BQU1BO0FBRXBCLGNBQU0sT0FBTyxTQUFTLGNBQWMsS0FBSztBQUN6QyxhQUFLLFlBQVk7QUFDakIsYUFBSyxjQUFjLFVBQVUsS0FBSztBQUNsQyxhQUFLLFFBQVE7QUFFYixjQUFNLEtBQUssU0FBUyxjQUFjLEtBQUs7QUFDdkMsV0FBRyxZQUFZO0FBRWYsY0FBTSxNQUFNLFNBQVMsY0FBYyxLQUFLO0FBQ3hDLFlBQUksWUFBWTtBQUVoQixjQUFNLE9BQU8sU0FBUyxjQUFjLFFBQVE7QUFDNUMsYUFBSyxZQUFZO0FBQ2pCLGFBQUssY0FBYztBQUNuQixjQUFNLE9BQU8sU0FBUyxjQUFjLFFBQVE7QUFDNUMsYUFBSyxZQUFZO0FBQ2pCLGFBQUssY0FBYztBQUVuQixjQUFNLFNBQVMsU0FBUyxjQUFjLE9BQU87QUFDN0MsZUFBTyxPQUFPO0FBQ2QsZUFBTyxZQUFZO0FBQ25CLGVBQU8sTUFBTTtBQUNiLGVBQU8sTUFBTTtBQUNiLGVBQU8sUUFBUSxPQUFPLEtBQUssTUFBTSxNQUFNLFNBQVMsR0FBRyxDQUFDO0FBRXBELGNBQU0sU0FBUyxTQUFTLGNBQWMsT0FBTztBQUM3QyxlQUFPLE9BQU87QUFDZCxlQUFPLFlBQVk7QUFDbkIsZUFBTyxNQUFNO0FBQ2IsZUFBTyxNQUFNO0FBQ2IsZUFBTyxRQUFRLE9BQU8sS0FBSyxNQUFNLE1BQU0sYUFBYSxHQUFHLENBQUM7QUFFeEQsY0FBTSxRQUFRLFNBQVMsY0FBYyxPQUFPO0FBQzVDLGNBQU0sT0FBTztBQUNiLGNBQU0sWUFBWTtBQUNsQixjQUFNLE1BQU07QUFDWixjQUFNLE1BQU07QUFDWixjQUFNLFFBQVEsT0FBTyxLQUFLLE1BQU0sTUFBTSxZQUFZLEdBQUcsQ0FBQztBQUV0RCxjQUFNLFFBQVEsU0FBUyxjQUFjLEtBQUs7QUFDMUMsY0FBTSxZQUFZO0FBQ2xCLGNBQU0sUUFBUSxTQUFTLGNBQWMsT0FBTztBQUM1QyxjQUFNLGNBQWM7QUFDcEIsY0FBTSxZQUFZLE1BQU07QUFDeEIsY0FBTSxRQUFRLFNBQVMsY0FBYyxPQUFPO0FBQzVDLGNBQU0sY0FBYztBQUNwQixjQUFNLFlBQVksS0FBSztBQUN2QixjQUFNLFlBQVksS0FBSztBQUN2QixjQUFNLFlBQVksS0FBSztBQUV2QixpQkFBUyxjQUFjO0FBQ3JCLGdCQUFNLE1BQU0sT0FBTyxjQUFjQSxJQUFHO0FBQ3BDLGVBQUssVUFBVSxPQUFPLFVBQVUsSUFBSSxJQUFJO0FBQ3hDLGVBQUssVUFBVSxPQUFPLFVBQVUsSUFBSSxLQUFLO1FBQzNDO0FBRUEsYUFBSyxpQkFBaUIsU0FBUyxNQUFNO0FBQ25DLGdCQUFNLE1BQU0sT0FBTyxjQUFjQSxJQUFHO0FBQ3BDLGlCQUFPLFFBQVFBLE1BQUssQ0FBQyxJQUFJLElBQUk7QUFDN0Isc0JBQVk7UUFDZCxDQUFDO0FBQ0QsYUFBSyxpQkFBaUIsU0FBUyxNQUFNO0FBQ25DLGdCQUFNLE1BQU0sT0FBTyxjQUFjQSxJQUFHO0FBQ3BDLGlCQUFPLFFBQVFBLE1BQUssQ0FBQyxJQUFJLEtBQUs7QUFDOUIsc0JBQVk7UUFDZCxDQUFDO0FBQ0QsZUFBTyxpQkFBaUIsU0FBUyxNQUFNO0FBQ3JDLGlCQUFPLFVBQVVBLE1BQUssTUFBTSxTQUFTLE9BQU8sT0FBTyxFQUFFLElBQUksR0FBRyxDQUFDO1FBQy9ELENBQUM7QUFDRCxlQUFPLGlCQUFpQixTQUFTLE1BQU07QUFDckMsaUJBQU8sY0FBY0EsTUFBSyxNQUFNLFNBQVMsT0FBTyxPQUFPLEVBQUUsSUFBSSxHQUFHLENBQUM7UUFDbkUsQ0FBQztBQUNELGNBQU0saUJBQWlCLFNBQVMsTUFBTTtBQUNwQyxpQkFBTyxhQUFhQSxNQUFLLE1BQU0sU0FBUyxNQUFNLE9BQU8sRUFBRSxJQUFJLEdBQUcsQ0FBQztRQUNqRSxDQUFDO0FBRUQsWUFBSSxZQUFZLElBQUk7QUFDcEIsWUFBSSxZQUFZLElBQUk7QUFDcEIsWUFBSSxZQUFZLE1BQU07QUFFdEIsY0FBTSxZQUFZLElBQUk7QUFDdEIsY0FBTSxZQUFZLEVBQUU7QUFDcEIsY0FBTSxZQUFZLEdBQUc7QUFDckIsY0FBTSxZQUFZLEtBQUs7QUFDdkIsZUFBTyxZQUFZLEtBQUs7QUFFeEIsb0JBQVk7QUFDWixlQUFPLEVBQUUsSUFBSSxPQUFPLElBQUksTUFBTSxZQUFZO01BQzVDO0FBRUEsZUFBUyxPQUFPLE1BQU07QUFDcEIsY0FBTSxVQUFVLE1BQU0sUUFBUSxJQUFJLElBQzlCLEtBQUssSUFBSSxDQUFBLFdBQVUsRUFBRSxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxJQUFJLE1BQU0sTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUN0RSxDQUFDO0FBQ0wsY0FBTSxXQUFXLElBQUksSUFBSSxRQUFRLElBQUksQ0FBQSxTQUFRLEtBQUssR0FBRyxDQUFDO0FBRXRELGlCQUFTLFFBQVEsQ0FBQyxPQUFPQSxTQUFRO0FBQy9CLGNBQUksQ0FBQyxTQUFTLElBQUlBLElBQUcsR0FBRztBQUN0QixrQkFBTSxHQUFHLE9BQU87QUFDaEIscUJBQVMsT0FBT0EsSUFBRztVQUNyQjtRQUNGLENBQUM7QUFFRCxnQkFBUSxRQUFRLENBQUEsU0FBUTtBQUN0QixjQUFJLENBQUMsU0FBUyxJQUFJLEtBQUssR0FBRyxHQUFHO0FBQzNCLHFCQUFTLElBQUksS0FBSyxLQUFLLFlBQVksS0FBSyxLQUFLLEtBQUssSUFBSSxDQUFDO1VBQ3pELE9BQU87QUFDTCxrQkFBTSxRQUFRLFNBQVMsSUFBSSxLQUFLLEdBQUc7QUFDbkMsa0JBQU0sS0FBSyxjQUFjLFVBQVUsS0FBSyxJQUFJO0FBQzVDLGtCQUFNLEtBQUssUUFBUSxLQUFLO0FBQ3hCLGtCQUFNLFlBQVk7VUFDcEI7UUFDRixDQUFDO01BQ0g7QUFFQSxlQUFTLFFBQVFBLE1BQUs7QUFDcEIsY0FBTSxRQUFRLFNBQVMsSUFBSUEsSUFBRztBQUM5QixZQUFJLENBQUMsTUFBTztBQUNaLGNBQU0sR0FBRyxVQUFVLElBQUksUUFBUTtBQUMvQixtQkFBVyxNQUFNLE1BQU0sR0FBRyxVQUFVLE9BQU8sUUFBUSxHQUFHLEVBQUU7TUFDMUQ7QUFFQSxlQUFTLE9BQU8sV0FBVztBQUN6QixjQUFNLE9BQU8sT0FBTyxjQUFjLFlBQVksWUFBWSxLQUFLLFVBQVUsU0FBUyxXQUFXO0FBQzdGLGFBQUssVUFBVSxPQUFPLGFBQWEsQ0FBQyxJQUFJO0FBQ3hDLGVBQU87TUFDVDtBQUVBLGVBQVMsY0FBYyxPQUFPLENBQUMsR0FBRztBQUNoQyxZQUFJLE9BQU8sS0FBSyxVQUFVLFVBQVU7QUFDbEMsY0FBSSxRQUFRLE9BQU8sS0FBSyxLQUFLO0FBQzdCLGlCQUFPLGNBQWMsT0FBTyxLQUFLLEtBQUs7UUFDeEM7QUFDQSxZQUFJLE9BQU8sS0FBSyxTQUFTLFVBQVU7QUFDakMsVUFBQUQsTUFBSyxRQUFRLE9BQU8sS0FBSyxJQUFJO1FBQy9CO0FBQ0EsWUFBSSxPQUFPLEtBQUssY0FBYyxVQUFVO0FBQ3RDLGNBQUksUUFBUSxPQUFPLEtBQUssU0FBUztBQUNqQyxpQkFBTyxjQUFjLEtBQUssWUFBWSxJQUFJLElBQUksS0FBSyxTQUFTLEtBQUssT0FBTyxLQUFLLFNBQVM7UUFDeEY7TUFDRjtBQUVBLGFBQU8sRUFBRSxJQUFJLE1BQU0sUUFBUSxTQUFTLFFBQVEsY0FBYztJQUM1RDs7Ozs7O0FDNVJBLElBQUFFLG9CQUFzQjtBQUN0QixvQkFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNHbkIsU0FBU0MsT0FBTyxHQUFHO0FBQUUsU0FBTyxPQUFPLE1BQU07QUFBUztBQUNsRCxTQUFTQyxPQUFPLEdBQUc7QUFBRSxTQUFPLE9BQU8sTUFBTTtBQUFTO0FBQ2xELFNBQVNDLE9BQU8sR0FBRztBQUFFLFNBQU8sT0FBTyxNQUFNO0FBQVk7QUFDckQsU0FBU0MsWUFBWUMsUUFBTSxRQUFRO0FBQ2pDLFNBQU8sS0FBSyxJQUFJLElBQUlBLFNBQU8sTUFBTSxFQUFFLEtBQUssVUFBVTtBQUNwRDtBQW1GTyxTQUFTQyxPQUFPLEtBQUssU0FBUyxRQUFRO0FBQzNDLE1BQUksT0FBTyxRQUFRLFNBQVUsUUFBTztBQUNwQyxNQUFJQyxNQUFJQyxPQUFNLEtBQUssR0FBRztBQUN0QixNQUFJLENBQUNELE9BQU0sQ0FBQyxXQUFXQSxJQUFFLENBQUMsRUFBSSxRQUFPO0FBRXJDLE1BQUlFLEtBQUksRUFBRSxRQUFRRixJQUFFLENBQUMsRUFBRSxZQUFZLEdBQUcsS0FBS0EsSUFBRSxDQUFDLEVBQUUsUUFBUSxNQUFNLElBQUksRUFBRTtBQUNwRSxFQUFBRSxHQUFFLEtBQUtBLEdBQUUsU0FBU0EsR0FBRTtBQUNwQixFQUFBQSxHQUFFLFFBQVFBLEdBQUUsT0FBTyxXQUFXLENBQUMsSUFBSSxLQUFLO0FBQ3hDLEVBQUFBLEdBQUUsTUFBTUEsR0FBRSxJQUFJLENBQUMsTUFBTSxNQUFNLENBQUNBLEdBQUUsSUFBSSxTQUFTQSxHQUFFLElBQUk7QUFDakQsTUFBSSxNQUFNQyxXQUFVRCxHQUFFLElBQUksSUFBSUEsR0FBRTtBQUNoQyxFQUFBQSxHQUFFLFNBQVMsTUFBTSxJQUFJLEtBQUssTUFBTSxNQUFNO0FBQ3RDLE1BQUlGLElBQUUsQ0FBQyxHQUFHO0FBQ1IsSUFBQUUsR0FBRSxNQUFNLENBQUNGLElBQUUsQ0FBQztBQUNaLElBQUFFLEdBQUUsT0FBTyxNQUFNLE1BQU1BLEdBQUUsTUFBTTtBQUM3QixJQUFBQSxHQUFFLE9BQU9MLFlBQVdLLEdBQUUsTUFBTSxNQUFNO0VBQ3BDO0FBQ0EsTUFBSSxRQUFTLENBQUFBLEdBQUUsVUFBVUYsSUFBRSxDQUFDO0FBQzVCLFNBQU9FO0FBQ1Q7QUE0Q08sU0FBU0osTUFBTU0sUUFBTTtBQUMxQixPQUFLVixPQUFNVSxNQUFJLEtBQUtULE9BQU1TLE1BQUksTUFBTUEsVUFBUSxLQUFLQSxTQUFPLElBQUssUUFBTyxDQUFDQTtBQUNyRSxNQUFJRixLQUFJSCxPQUFNSyxNQUFJO0FBQ2xCLFNBQU9GLE1BQUtOLE9BQU1NLEdBQUUsSUFBSSxJQUFJQSxHQUFFLE9BQU87QUFDdkM7QUE5SkEsSUFXSUQ7QUFYSixJQWdESUU7QUFoREosSUFBQUUsb0JBQUFDLE9BQUE7RUFBQSxzQ0FBQTtBQUFBO0FBV0ksSUFBQUwsU0FBUTtBQXFDUixJQUFBRSxhQUFZLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRTtFQUFBO0FBQUEsQ0FBQTtBQ2hEckMsSUFBQUksc0JBQUEsQ0FBQTtBQUFBQyxVQUFBRCxxQkFBQTtFQUFBLE1BQUEsTUFBQUg7RUFBQSxRQUFBLE1BQUFLO0FBQUEsQ0FBQTtBQThCTyxTQUFTQSxRQUFRLEtBQUs7QUFDM0IsTUFBSSxNQUFNLFFBQVEsR0FBRyxLQUFLLElBQUksV0FBVyxFQUFHLFFBQU8sSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLO0FBQzlFLFNBQU9YLE1BQUssR0FBRztBQUNqQjtBQW9CTyxTQUFTTSxNQUFNLEtBQUssUUFBUTtBQUNqQyxNQUFJLFFBQVEsUUFBUSxRQUFRLE1BQU8sUUFBTyxTQUFVSixLQUFHO0FBQUUsV0FBT0ksTUFBS0osS0FBRyxHQUFHO0VBQUU7QUFDN0UsUUFBTSxLQUFLLE1BQU0sR0FBRztBQUNwQixNQUFJLE1BQU0sV0FBVyxPQUFPVSxVQUFTQztBQUNyQyxNQUFJLEtBQUssSUFBSSxNQUFNLEVBQUU7QUFDckIsTUFBSSxJQUFJLEtBQUssTUFBTSxNQUFNLEVBQUUsSUFBSTtBQUMvQixTQUFPLEtBQUs7QUFDZDtBQTVEQSxJQW1DSUE7QUFuQ0osSUFvQ0lEO0FBcENKLElBQUFFLG1CQUFBTixPQUFBO0VBQUEscUNBQUE7QUFpQkEsSUFBQUQsa0JBQUE7QUFrQkksSUFBQU0sU0FBUSwrQkFBK0IsTUFBTSxHQUFHO0FBQ2hELElBQUFELFVBQVMsK0JBQStCLE1BQU0sR0FBRztFQUFBO0FBQUEsQ0FBQTtBQ3BDckQsSUFBQUcsbUJBQUFDLFlBQUE7RUFBQSwyQ0FBQSxTQUFBLFFBQUE7QUFBQSxXQUFBLFVBQUE7TUFDRSxNQUFRO01BQ1IsU0FBVztNQUNYLGFBQWU7TUFDZixNQUFRO01BQ1IsT0FBUztNQUNULGNBQWdCO1FBQ2QsY0FBYztNQUNoQjtNQUNBLGlCQUFtQjtRQUNqQixlQUFlO1FBQ2YseUNBQXlDO1FBQ3pDLHFCQUFxQjtRQUNyQix3QkFBd0I7UUFDeEIsUUFBVTtRQUNWLDBCQUEwQjtRQUMxQix3QkFBd0I7UUFDeEIsc0JBQXNCO1FBQ3RCLHlCQUF5QjtRQUN6QiwwQkFBMEI7UUFDMUIsT0FBUztRQUNULFFBQVU7UUFDVixPQUFTO1FBQ1QsS0FBTztRQUNQLFFBQVU7UUFDVixPQUFTO01BQ1g7TUFDQSxhQUFlO1FBQ2IsS0FBTztRQUNQLFNBQVc7UUFDWCxNQUFRO01BQ1Y7TUFDQSxTQUFXO1FBQ1QsT0FBUztRQUNULE1BQVE7UUFDUixXQUFXO1FBQ1gsZ0JBQWtCO1FBQ2xCLFNBQVc7UUFDWCxNQUFRO1FBQ1IsT0FBUztRQUNULGFBQWU7TUFDakI7TUFDQSx1QkFBeUI7TUFDekIsWUFBYztRQUNaLE1BQVE7UUFDUixLQUFPO01BQ1Q7TUFDQSxVQUFZO1FBQ1Y7UUFDQTtRQUNBO01BQ0Y7TUFDQSxRQUFVO01BQ1YsU0FBVztNQUNYLE1BQVE7UUFDTixLQUFPO01BQ1Q7TUFDQSxVQUFZO0lBQ2Q7RUFBQTtBQUFBLENBQUE7QUMxREEsSUFBQUMsaUJBQUFELFlBQUE7RUFBQSw2Q0FBQSxTQUFBLFFBQUE7QUFBQTtBQUVBLFFBQUksYUFBWUYsaUJBQUEsR0FBQUksY0FBQVQsbUJBQUE7QUFNaEIsUUFBSSxZQUFZO01BQ2QsU0FBU00saUJBQUEsRUFBMkI7TUFDcEMsbUJBQW1CLENBQUMsSUFBTSxJQUFNLEtBQU0sR0FBSTs7TUFFMUMscUJBQXFCLENBQUMsR0FBTSxHQUFNLEdBQU0sQ0FBSTs7TUFFNUMsc0JBQXNCLENBQUMsR0FBTSxDQUFJOztNQUVqQyxzQkFBc0IsQ0FBQyxHQUFNLENBQUk7O01BRWpDLHVCQUF1QixDQUFDLEdBQU0sR0FBSTs7TUFFbEMsa0JBQWtCLENBQUMsSUFBTSxJQUFNLEtBQU0sR0FBSTs7TUFFekMsZUFBZTtNQUNmLGNBQWM7TUFDZCxtQkFBbUI7TUFDbkIsb0JBQW9CO01BQ3BCLHlCQUF5QjtNQUN6QixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGdCQUFnQjtNQUNoQixlQUFlO01BQ2YsbUJBQW1CO01BQ25CLHdCQUF3QjtNQUN4Qix1QkFBdUI7TUFDdkIsc0JBQXNCLENBQUMsSUFBTSxDQUFJO01BQ2pDLDBCQUEwQjs7TUFFMUIsdUJBQXVCOztNQUV2QixtQkFBbUI7O0lBRXJCO0FBRUEsYUFBUyxRQUFRLEtBQUs7QUFDcEI7QUFFQSxVQUFJLE9BQU8sV0FBVyxjQUFjLE9BQU8sT0FBTyxhQUFhLFVBQVU7QUFDdkUsa0JBQVUsU0FBVUksTUFBSztBQUN2QixpQkFBTyxPQUFPQTtRQUNoQjtNQUNGLE9BQU87QUFDTCxrQkFBVSxTQUFVQSxNQUFLO0FBQ3ZCLGlCQUFPQSxRQUFPLE9BQU8sV0FBVyxjQUFjQSxLQUFJLGdCQUFnQixVQUFVQSxTQUFRLE9BQU8sWUFBWSxXQUFXLE9BQU9BO1FBQzNIO01BQ0Y7QUFFQSxhQUFPLFFBQVEsR0FBRztJQUNwQjtBQUVBLGFBQVMsY0FBYztBQUNyQixvQkFBYyxTQUFVLElBQUksUUFBUTtBQUNsQyxlQUFPLElBQUksWUFBWSxJQUFJLFFBQVcsTUFBTTtNQUM5QztBQUVBLFVBQUksU0FBUyxPQUFPO0FBRXBCLFVBQUksVUFBVSxvQkFBSSxRQUFRO0FBRTFCLGVBQVMsWUFBWSxJQUFJLE9BQU8sUUFBUTtBQUN0QyxZQUFJLFFBQVEsSUFBSSxPQUFPLElBQUksS0FBSztBQUVoQyxnQkFBUSxJQUFJLE9BQU8sVUFBVSxRQUFRLElBQUksRUFBRSxDQUFDO0FBRTVDLGVBQU8sZ0JBQWdCLE9BQU8sWUFBWSxTQUFTO01BQ3JEO0FBRUEsZ0JBQVUsYUFBYSxNQUFNO0FBRTdCLGtCQUFZLFVBQVUsT0FBTyxTQUFVLEtBQUs7QUFDMUMsWUFBSSxTQUFTLE9BQU8sS0FBSyxLQUFLLE1BQU0sR0FBRztBQUV2QyxZQUFJLE9BQVEsUUFBTyxTQUFTLFlBQVksUUFBUSxJQUFJO0FBQ3BELGVBQU87TUFDVDtBQUVBLGtCQUFZLFVBQVUsT0FBTyxPQUFPLElBQUksU0FBVSxLQUFLLGNBQWM7QUFDbkUsWUFBSSxPQUFPLGlCQUFpQixVQUFVO0FBQ3BDLGNBQUksU0FBUyxRQUFRLElBQUksSUFBSTtBQUU3QixpQkFBTyxPQUFPLE9BQU8sT0FBTyxFQUFFLEtBQUssTUFBTSxLQUFLLGFBQWEsUUFBUSxnQkFBZ0IsU0FBVSxHQUFHLE1BQU07QUFDcEcsbUJBQU8sTUFBTSxPQUFPLElBQUk7VUFDMUIsQ0FBQyxDQUFDO1FBQ0osV0FBVyxPQUFPLGlCQUFpQixZQUFZO0FBQzdDLGNBQUksUUFBUTtBQUVaLGlCQUFPLE9BQU8sT0FBTyxPQUFPLEVBQUUsS0FBSyxNQUFNLEtBQUssV0FBWTtBQUN4RCxnQkFBSSxPQUFPO0FBRVgsZ0JBQUksT0FBTyxLQUFLLEtBQUssU0FBUyxDQUFDLE1BQU0sVUFBVTtBQUM3QyxxQkFBTyxDQUFDLEVBQUUsTUFBTSxLQUFLLElBQUk7QUFDekIsbUJBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxDQUFDO1lBQ3BDO0FBRUEsbUJBQU8sYUFBYSxNQUFNLE1BQU0sSUFBSTtVQUN0QyxDQUFDO1FBQ0gsT0FBTztBQUNMLGlCQUFPLE9BQU8sT0FBTyxPQUFPLEVBQUUsS0FBSyxNQUFNLEtBQUssWUFBWTtRQUM1RDtNQUNGO0FBRUEsZUFBUyxZQUFZLFFBQVEsSUFBSTtBQUMvQixZQUFJLElBQUksUUFBUSxJQUFJLEVBQUU7QUFFdEIsZUFBTyxPQUFPLEtBQUssQ0FBQyxFQUFFLE9BQU8sU0FBVSxRQUFRLE1BQU07QUFDbkQsaUJBQU8sSUFBSSxJQUFJLE9BQU8sRUFBRSxJQUFJLENBQUM7QUFDN0IsaUJBQU87UUFDVCxHQUFHLHVCQUFPLE9BQU8sSUFBSSxDQUFDO01BQ3hCO0FBRUEsYUFBTyxZQUFZLE1BQU0sTUFBTSxTQUFTO0lBQzFDO0FBRUEsYUFBUyxnQkFBZ0IsVUFBVSxhQUFhO0FBQzlDLFVBQUksRUFBRSxvQkFBb0IsY0FBYztBQUN0QyxjQUFNLElBQUksVUFBVSxtQ0FBbUM7TUFDekQ7SUFDRjtBQUVBLGFBQVMsa0JBQWtCLFFBQVEsT0FBTztBQUN4QyxlQUFTLElBQUksR0FBRyxJQUFJLE1BQU0sUUFBUSxLQUFLO0FBQ3JDLFlBQUksYUFBYSxNQUFNLENBQUM7QUFDeEIsbUJBQVcsYUFBYSxXQUFXLGNBQWM7QUFDakQsbUJBQVcsZUFBZTtBQUMxQixZQUFJLFdBQVcsV0FBWSxZQUFXLFdBQVc7QUFDakQsZUFBTyxlQUFlLFFBQVEsV0FBVyxLQUFLLFVBQVU7TUFDMUQ7SUFDRjtBQUVBLGFBQVMsYUFBYSxhQUFhLFlBQVksYUFBYTtBQUMxRCxVQUFJLFdBQVksbUJBQWtCLFlBQVksV0FBVyxVQUFVO0FBQ25FLFVBQUksWUFBYSxtQkFBa0IsYUFBYSxXQUFXO0FBQzNELGFBQU87SUFDVDtBQUVBLGFBQVMsVUFBVSxVQUFVLFlBQVk7QUFDdkMsVUFBSSxPQUFPLGVBQWUsY0FBYyxlQUFlLE1BQU07QUFDM0QsY0FBTSxJQUFJLFVBQVUsb0RBQW9EO01BQzFFO0FBRUEsZUFBUyxZQUFZLE9BQU8sT0FBTyxjQUFjLFdBQVcsV0FBVztRQUNyRSxhQUFhO1VBQ1gsT0FBTztVQUNQLFVBQVU7VUFDVixjQUFjO1FBQ2hCO01BQ0YsQ0FBQztBQUNELFVBQUksV0FBWSxpQkFBZ0IsVUFBVSxVQUFVO0lBQ3REO0FBRUEsYUFBUyxnQkFBZ0IsR0FBR2YsSUFBRztBQUM3Qix3QkFBa0IsT0FBTyxrQkFBa0IsU0FBU2dCLGlCQUFnQkMsSUFBR2pCLEtBQUc7QUFDeEVpQixXQUFFLFlBQVlqQjtBQUNkLGVBQU9pQjtNQUNUO0FBRUEsYUFBTyxnQkFBZ0IsR0FBR2pCLEVBQUM7SUFDN0I7QUFNQSxRQUFJLFFBQXFCLDRCQUFZO0FBQ25DLGVBQVNrQixTQUFRO0FBQ2Ysd0JBQWdCLE1BQU1BLE1BQUs7TUFDN0I7QUFFQSxtQkFBYUEsUUFBTyxNQUFNLENBQUM7UUFDekIsS0FBSztRQUNMOzs7OztXQUtBLFNBQVMsVUFBVTtBQUNqQixtQkFBTyxVQUFVO1VBQ25COzs7Ozs7O01BT0YsR0FBRztRQUNELEtBQUs7UUFDTCxPQUFPLFNBQVMsY0FBYyxRQUFRO0FBQ3BDLGlCQUFPLE9BQU8sTUFBTSxFQUFFLEVBQUUsSUFBSSxTQUFVLE9BQU87QUFDM0MsbUJBQU8sTUFBTSxXQUFXO1VBQzFCLENBQUM7UUFDSDs7Ozs7O01BT0YsR0FBRztRQUNELEtBQUs7UUFDTCxPQUFPLFNBQVMsVUFBVSxHQUFHO0FBQzNCLGlCQUFPLENBQUMsTUFBTSxXQUFXLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQztRQUM1Qzs7Ozs7OztNQVFGLEdBQUc7UUFDRCxLQUFLO1FBQ0wsT0FBTyxTQUFTLFNBQVMsT0FBTztBQUM5QixpQkFBTyxVQUFVLE9BQU8sS0FBSztRQUMvQjs7Ozs7Ozs7OztNQVdGLEdBQUc7UUFDRCxLQUFLO1FBQ0wsT0FBTyxTQUFTLHVCQUF1QixPQUFPO0FBQzVDLGtCQUFRLEtBQUssTUFBTSxLQUFLO0FBQ3hCLGNBQUksU0FBUyxRQUFRO0FBRXJCLGlCQUFPLFFBQVEsU0FBUyxHQUFHO0FBQ3pCLHVCQUFXO0FBQ1gsc0JBQVUsUUFBUSxNQUFPO1VBQzNCO0FBRUEsY0FBSSxRQUFRLENBQUM7QUFFYixpQkFBTyxNQUFNO0FBQ1gsa0JBQU0sS0FBSyxTQUFTLEdBQUk7QUFDeEIsZ0JBQUksU0FBUyxJQUFNLFlBQVc7aUJBQU87QUFDbkM7WUFDRjtVQUNGO0FBRUEsaUJBQU87UUFDVDs7Ozs7O01BT0YsR0FBRztRQUNELEtBQUs7UUFDTCxPQUFPLFNBQVMsZ0JBQWdCLEdBQUc7QUFDakMsaUJBQU8sVUFBVSxDQUFDLEVBQUUsTUFBTSxPQUFPLEVBQUUsU0FBUztRQUM5Qzs7Ozs7O01BT0YsR0FBRztRQUNELEtBQUs7UUFDTCxPQUFPLFNBQVMsZ0JBQWdCLE9BQU87QUFDckMsY0FBSSxNQUFNO0FBQ1YsY0FBSTtBQUNKLGdCQUFNLFFBQVEsU0FBVSxPQUFPO0FBQzdCLDJCQUFlLE1BQU0sU0FBUyxFQUFFO0FBRWhDLGdCQUFJLGFBQWEsVUFBVSxFQUFHLGdCQUFlLE1BQU07QUFDbkQsbUJBQU87VUFDVCxDQUFDO0FBQ0QsaUJBQU8sU0FBUyxLQUFLLEVBQUU7UUFDekI7Ozs7Ozs7TUFRRixHQUFHO1FBQ0QsS0FBSztRQUNMLE9BQU8sU0FBUyxjQUFjLFFBQVEsYUFBYTtBQUNqRCx3QkFBYyxlQUFlO0FBQzdCLGNBQUksWUFBWSxPQUFPLFNBQVMsRUFBRTtBQUVsQyxjQUFJLFVBQVUsU0FBUyxHQUFHO0FBRXhCLHdCQUFZLE1BQU07VUFDcEI7QUFHQSxjQUFJLFdBQVcsVUFBVSxNQUFNLE9BQU87QUFFdEMscUJBQVcsU0FBUyxJQUFJLFNBQVUsTUFBTTtBQUN0QyxtQkFBTyxTQUFTLE1BQU0sRUFBRTtVQUMxQixDQUFDO0FBRUQsY0FBSSxTQUFTLFNBQVMsYUFBYTtBQUNqQyxtQkFBTyxjQUFjLFNBQVMsU0FBUyxHQUFHO0FBQ3hDLHVCQUFTLFFBQVEsQ0FBQztZQUNwQjtVQUNGO0FBRUEsaUJBQU87UUFDVDs7Ozs7O01BT0YsR0FBRztRQUNELEtBQUs7UUFDTCxPQUFPLFNBQVMsUUFBUSxPQUFPO0FBQzdCLGNBQUksTUFBTSxRQUFRLEtBQUssRUFBRyxRQUFPO0FBQ2pDLGlCQUFPLENBQUMsS0FBSztRQUNmOzs7Ozs7TUFPRixHQUFHO1FBQ0QsS0FBSztRQUNMLE9BQU8sU0FBUyxnQkFBZ0IsVUFBVTtBQUV4QyxxQkFBVyxXQUFXLE1BQU0sTUFBTTtBQUNsQyxpQkFBTyxLQUFLLE1BQU0sV0FBVyxNQUFNLEdBQUc7UUFDeEM7Ozs7Ozs7TUFRRixHQUFHO1FBQ0QsS0FBSztRQUNMLE9BQU8sU0FBUyxnQkFBZ0IsVUFBVTtBQUN4QyxjQUFJLE1BQU0sUUFBUSxRQUFRLEdBQUc7QUFFM0IsbUJBQU8sU0FBUyxJQUFJLFNBQVUsT0FBTztBQUNuQyxxQkFBT0EsT0FBTSxnQkFBZ0IsS0FBSztZQUNwQyxDQUFDLEVBQUUsT0FBTyxTQUFVLEdBQUcsR0FBRztBQUN4QixxQkFBTyxJQUFJO1lBQ2IsR0FBRyxDQUFDO1VBQ047QUFFQSxxQkFBVyxTQUFTLFNBQVM7QUFFN0IsY0FBSSxTQUFTLFlBQVksRUFBRSxPQUFPLENBQUMsTUFBTSxLQUFLO0FBRTVDLG1CQUFPLFNBQVMsU0FBUyxVQUFVLENBQUMsQ0FBQztVQUN2QztBQUdBLGNBQUksZUFBZUEsT0FBTSxnQkFBZ0IsVUFBVSxxQkFBcUI7QUFDeEUsY0FBSSxlQUFlLGVBQWVBLE9BQU0sc0JBQXNCLFFBQVE7QUFDdEUsaUJBQU9BLE9BQU0sa0JBQWtCLFlBQVk7UUFDN0M7Ozs7Ozs7OztNQVVGLEdBQUc7UUFDRCxLQUFLO1FBQ0wsT0FBTyxTQUFTLGtCQUFrQixNQUFNO0FBQ3RDLGNBQUksY0FBYyxLQUFLLE1BQU0sSUFBSTtBQUNqQyxpQkFBTyxLQUFLLElBQUksY0FBYyxJQUFJLElBQUksT0FBVyxjQUFjO1FBQ2pFOzs7Ozs7Ozs7O01BV0YsR0FBRztRQUNELEtBQUs7UUFDTCxPQUFPLFNBQVMsaUJBQWlCLE1BQU07QUFDckMsY0FBSSxjQUFjLEtBQUssTUFBTSxJQUFJO0FBQ2pDLGlCQUFPLGNBQWM7UUFDdkI7Ozs7Ozs7TUFRRixHQUFHO1FBQ0QsS0FBSztRQUNMLE9BQU8sU0FBUyxzQkFBc0IsVUFBVTtBQUc5QyxjQUFJLGFBQWEsSUFBSyxRQUFPO0FBQzdCLGNBQUksUUFBUSxTQUFTLE1BQW9CLDRCQUFZLGdDQUFnQztZQUNuRixRQUFRO1lBQ1IsTUFBTTtZQUNOLFFBQVE7VUFDVixDQUFDLENBQUM7QUFFRixjQUFJLE9BQU87QUFDVCxnQkFBSSxPQUFPLE9BQU8sTUFBTSxPQUFPLElBQUk7QUFFbkMsZ0JBQUksY0FBYyxTQUFTLE1BQU0sT0FBTyxPQUFPLE9BQU87QUFFdEQsZ0JBQUksYUFBYTtBQUVmLGtCQUFJLFFBQVEsT0FBTztBQUNuQixrQkFBSSxxQkFBcUIsSUFBSTtBQUM3QixrQkFBSSxnQkFBZ0IsTUFBTSxRQUN0QixTQUFTLGNBQWMsUUFDdkIsU0FBUyxjQUFjO0FBRTNCLGtCQUFJLFFBQVE7QUFDVixvQkFBSSxlQUFlLE9BQU87QUFDMUIsb0JBQUksVUFBVSxLQUFLLElBQUksR0FBRyxZQUFZO0FBQ3RDLHFDQUFxQixxQkFBcUIsdUJBQXVCLFVBQVUsS0FBSztjQUNsRjtBQUVBLGtCQUFJLE9BQU8sV0FBVyxVQUFVO0FBQzlCLG9CQUFJLFVBQVUscUJBQXFCO0FBRW5DLG9CQUFJLGdCQUFnQixPQUFPLFVBQVUsR0FBRztBQUN4QyxxQ0FBcUIsVUFBVTtjQUNqQztBQUVBLHFCQUFPO1lBQ1Q7VUFDRjtBQUVBLGdCQUFNLElBQUksTUFBTSxXQUFXLDJCQUEyQjtRQUN4RDtNQUNGLENBQUMsQ0FBQztBQUVGLGFBQU9BO0lBQ1QsR0FBRTtBQVFGLFFBQUksY0FBMkIsNEJBQVk7QUFDekMsZUFBU0MsYUFBWSxRQUFRO0FBQzNCLHdCQUFnQixNQUFNQSxZQUFXO0FBR2pDLGlCQUFTLE9BQU8sT0FBTztVQUNyQixTQUFTO1VBQ1QsV0FBVztVQUNYLFVBQVU7VUFDVixNQUFNO1FBQ1IsR0FBRyxNQUFNO0FBQ1QsYUFBSyxPQUFPO0FBQ1osYUFBSyxVQUFVLE9BQU87QUFDdEIsYUFBSyxRQUFRLE9BQU87QUFDcEIsYUFBSyxPQUFPLE9BQU87QUFDbkIsYUFBSyxXQUFXLE9BQU87QUFDdkIsYUFBSyxZQUFZLE9BQU87QUFDeEIsYUFBSyxhQUFhLE1BQU0sU0FBUyxLQUFLLEtBQUs7QUFDM0MsYUFBSyxPQUFPO0FBQ1osYUFBSyxRQUFRO0FBQ2IsYUFBSyxPQUFPLE9BQU87TUFDckI7QUFRQSxtQkFBYUEsY0FBYSxDQUFDO1FBQ3pCLEtBQUs7UUFDTCxPQUFPLFNBQVMsVUFBVSxPQUFPLGdCQUFnQjtBQUMvQyxlQUFLLE9BQU8sQ0FBQztBQUViLGNBQUksS0FBSyxXQUFXO0FBQ2xCLGlCQUFLLE9BQU8sTUFBTSxrQkFBa0IsS0FBSyxTQUFTO0FBRWxELGdCQUFJLE1BQU0sZUFBZSxHQUFHO0FBQzFCLG1CQUFLLFFBQVEsS0FBSztZQUNwQjtVQUNGLE9BQU87QUFDTCxpQkFBSyxRQUFRLE1BQU0sZ0JBQWdCLEtBQUssSUFBSTtBQUM1QyxpQkFBSyxPQUFPLE1BQU0sa0JBQWtCLE1BQU0sY0FBYyxLQUFLLEtBQUs7VUFDcEU7QUFFQSxlQUFLLCtCQUErQixNQUFNLGtCQUFrQixLQUFLLFFBQVEsY0FBYztBQUN2RixlQUFLLE9BQU8sTUFBTSx1QkFBdUIsS0FBSyw0QkFBNEIsRUFBRSxPQUFPLEtBQUssY0FBYyxHQUFHLEtBQUssWUFBWSxNQUFNLGdCQUFnQixLQUFLLFFBQVEsQ0FBQztBQUM5SixpQkFBTztRQUNUOzs7Ozs7O01BUUYsR0FBRztRQUNELEtBQUs7UUFDTCxPQUFPLFNBQVMsZ0JBQWdCO0FBQzlCLGlCQUFPLE1BQU0sS0FBSyxVQUFVO1FBQzlCO01BQ0YsQ0FBQyxDQUFDO0FBRUYsYUFBT0E7SUFDVCxHQUFFO0FBUUYsUUFBSSxlQUE0Qiw0QkFBWTtBQUMxQyxlQUFTQyxjQUFhLFFBQVE7QUFDNUIsd0JBQWdCLE1BQU1BLGFBQVk7QUFHbEMsaUJBQVMsT0FBTyxPQUFPO1VBQ3JCLFNBQVM7VUFDVCxVQUFVO1VBQ1YsTUFBTTtRQUNSLEdBQUcsTUFBTTtBQUNULGFBQUssT0FBTztBQUNaLGFBQUssVUFBVSxPQUFPO0FBQ3RCLGFBQUssUUFBUSxPQUFPO0FBQ3BCLGFBQUssV0FBVyxPQUFPO0FBQ3ZCLGFBQUssV0FBVyxPQUFPO0FBQ3ZCLGFBQUssYUFBYSxNQUFNLFNBQVMsS0FBSyxLQUFLO0FBQzNDLGFBQUssT0FBTyxPQUFPO0FBQ25CLGFBQUssUUFBUSxNQUFNLGdCQUFnQixLQUFLLFFBQVE7QUFDaEQsYUFBSyxPQUFPLE9BQU87TUFDckI7QUFRQSxtQkFBYUEsZUFBYyxDQUFDO1FBQzFCLEtBQUs7UUFDTCxPQUFPLFNBQVMsVUFBVSxPQUFPLGdCQUFnQjtBQUMvQyxjQUFJLEtBQUssU0FBUyxNQUFNO0FBQ3RCLGlCQUFLLE9BQU8sTUFBTSxrQkFBa0IsS0FBSyxRQUFRLE1BQU0sV0FBVztVQUNwRTtBQUVBLGVBQUssK0JBQStCLE1BQU0sa0JBQWtCLEtBQUssUUFBUSxjQUFjO0FBQ3ZGLGVBQUssT0FBTyxNQUFNLHVCQUF1QixLQUFLLDRCQUE0QixFQUFFLE9BQU8sS0FBSyxjQUFjLEdBQUcsS0FBSyxZQUFZLE1BQU0sZ0JBQWdCLEtBQUssUUFBUSxDQUFDO0FBQzlKLGlCQUFPO1FBQ1Q7Ozs7Ozs7TUFRRixHQUFHO1FBQ0QsS0FBSztRQUNMLE9BQU8sU0FBUyxnQkFBZ0I7QUFDOUIsaUJBQU8sTUFBTSxLQUFLLFVBQVU7UUFDOUI7TUFDRixDQUFDLENBQUM7QUFFRixhQUFPQTtJQUNULEdBQUU7QUFRRixRQUFJLFlBQXlCLDRCQUFZO0FBQ3ZDLGVBQVNDLFdBQVUsUUFBUTtBQUN6Qix3QkFBZ0IsTUFBTUEsVUFBUztBQUcvQixpQkFBUyxPQUFPLE9BQU87VUFDckIsU0FBUztVQUNULFFBQVE7VUFDUixZQUFZO1VBQ1osV0FBVztVQUNYLFVBQVU7VUFDVixNQUFNO1FBQ1IsR0FBRyxNQUFNO0FBQ1QsYUFBSyxPQUFPLENBQUM7QUFDYixhQUFLLE9BQU87QUFDWixhQUFLLFFBQVEsTUFBTSxRQUFRLE9BQU8sS0FBSztBQUN2QyxhQUFLLFVBQVUsT0FBTztBQUN0QixhQUFLLFdBQVcsT0FBTztBQUN2QixhQUFLLFFBQVEsT0FBTztBQUNwQixhQUFLLFNBQVMsT0FBTztBQUNyQixhQUFLLGFBQWEsT0FBTztBQUN6QixhQUFLLFlBQVksT0FBTztBQUN4QixhQUFLLFdBQVcsT0FBTztBQUN2QixhQUFLLE9BQU8sT0FBTztBQUNuQixhQUFLLGVBQWUsTUFBTSxnQkFBZ0IsS0FBSyxRQUFRO0FBQ3ZELGFBQUssZUFBZSxNQUFNLGdCQUFnQixLQUFLLElBQUk7QUFDbkQsYUFBSyxTQUFTLENBQUM7TUFDakI7QUFPQSxtQkFBYUEsWUFBVyxDQUFDO1FBQ3ZCLEtBQUs7UUFDTCxPQUFPLFNBQVMsWUFBWTtBQUMxQixjQUFJLFFBQVE7QUFHWixlQUFLLE9BQU8sQ0FBQztBQUNiLGVBQUs7QUFDTCxlQUFLO0FBRUwsY0FBSSxLQUFLLE9BQU87QUFDZCxnQkFBSSxnQkFBZ0I7QUFDcEIsaUJBQUssUUFBUSxNQUFNLFFBQVEsS0FBSyxLQUFLO0FBQ3JDLGlCQUFLLE1BQU0sUUFBUSxTQUFVLE9BQU87QUFDbEMsa0JBQUksWUFBWSxJQUFJQSxXQUFVO2dCQUM1QixPQUFPLE1BQU07Z0JBQ2IsVUFBVSxNQUFNO2NBQ2xCLENBQUM7QUFDRCxvQkFBTSxPQUFPLE1BQU0sS0FBSyxPQUFPLFVBQVUsSUFBSTtZQUMvQyxDQUFDO1VBQ0g7QUFHQSxjQUFJLENBQUMsS0FBSyxZQUFZO0FBRXBCLHFCQUFTLElBQUksR0FBRyxJQUFJLEtBQUssUUFBUSxLQUFLO0FBRXBDLG1CQUFLLE1BQU0sUUFBUSxTQUFVckIsSUFBRyxHQUFHO0FBQ2pDLG9CQUFJLEtBQUssR0FBRztBQUNWLHNCQUFJLFlBQVksSUFBSSxZQUFZO29CQUM5QixTQUFTLE1BQU07b0JBQ2YsTUFBTSxNQUFNO29CQUNaLFVBQVUsTUFBTTtvQkFDaEIsT0FBT0E7b0JBQ1AsV0FBVyxNQUFNO2tCQUNuQixDQUFDO2dCQUNILE9BQU87QUFHTCxzQkFBSSxZQUFZLElBQUksWUFBWTtvQkFDOUIsU0FBUyxNQUFNO29CQUNmLE1BQU07b0JBQ04sVUFBVSxNQUFNO29CQUNoQixPQUFPQTtvQkFDUCxXQUFXLE1BQU07a0JBQ25CLENBQUM7Z0JBQ0g7QUFFQSxzQkFBTSxPQUFPLEtBQUssU0FBUztjQUM3QixDQUFDO0FBRUQsbUJBQUssTUFBTSxRQUFRLFNBQVVBLElBQUcsR0FBRztBQUNqQyxvQkFBSSxLQUFLLEdBQUc7QUFFVixzQkFBSSxhQUFhLElBQUksYUFBYTtvQkFDaEMsU0FBUyxNQUFNO29CQUNmLFVBQVUsTUFBTTtvQkFDaEIsVUFBVSxNQUFNO29CQUNoQixPQUFPQTtvQkFDUCxNQUFNLE1BQU0sY0FBYyxPQUFPLE1BQU0sZ0JBQWdCLE1BQU0sUUFBUSxJQUFJLE1BQU0sWUFBWTtrQkFDN0YsQ0FBQztnQkFDSCxPQUFPO0FBR0wsc0JBQUksYUFBYSxJQUFJLGFBQWE7b0JBQ2hDLFNBQVMsTUFBTTtvQkFDZixVQUFVO29CQUNWLFVBQVUsTUFBTTtvQkFDaEIsT0FBT0E7b0JBQ1AsTUFBTSxNQUFNLGNBQWMsT0FBTyxNQUFNLGdCQUFnQixNQUFNLFFBQVEsSUFBSSxNQUFNLFlBQVk7a0JBQzdGLENBQUM7Z0JBQ0g7QUFFQSxzQkFBTSxPQUFPLEtBQUssVUFBVTtjQUM5QixDQUFDO1lBQ0g7VUFDRixPQUFPO0FBRUwscUJBQVMsSUFBSSxHQUFHLElBQUksS0FBSyxRQUFRLEtBQUs7QUFDcEMsbUJBQUssTUFBTSxRQUFRLFNBQVVBLElBQUcsR0FBRztBQUVqQyxvQkFBSSxZQUFZLElBQUksWUFBWTtrQkFDOUIsU0FBUyxNQUFNO2tCQUNmLE1BQU0sSUFBSSxJQUFJLElBQUksTUFBTTs7a0JBRXhCLFVBQVUsTUFBTTtrQkFDaEIsT0FBT0E7a0JBQ1AsV0FBVyxNQUFNO2dCQUNuQixDQUFDO0FBQ0Qsb0JBQUksYUFBYSxJQUFJLGFBQWE7a0JBQ2hDLFNBQVMsTUFBTTtrQkFDZixVQUFVLE1BQU07a0JBQ2hCLFVBQVUsTUFBTTtrQkFDaEIsT0FBT0E7Z0JBQ1QsQ0FBQztBQUVELHNCQUFNLE9BQU8sS0FBSyxXQUFXLFVBQVU7Y0FDekMsQ0FBQztZQUNIO1VBQ0Y7QUFFQSxpQkFBTztRQUNUO01BQ0YsQ0FBQyxDQUFDO0FBRUYsYUFBT3FCO0lBQ1QsR0FBRTtBQVNGLFFBQUksY0FBYyxTQUFTQyxhQUFZLFNBQVM7QUFDOUMsVUFBSSxXQUFXLEdBQUc7QUFDaEIsZUFBTyxLQUFLLE1BQU0sU0FBUyxVQUFVLEtBQUssQ0FBQztNQUM3QztBQUVBLGFBQU8sS0FBSyxNQUFNLFNBQVMsVUFBVSxLQUFLLENBQUM7SUFDN0M7QUFFQSxRQUFJLGlCQUFpQixTQUFTQyxnQkFBZSxRQUFRO0FBQ25ELHNCQUFnQixNQUFNQSxlQUFjO0FBRXBDLFdBQUssT0FBTztBQUNaLFVBQUksU0FBUyxZQUFZLE9BQU8sSUFBSTtBQUNwQyxVQUFJLFVBQVUsT0FBTyxXQUFXO0FBQ2hDLFVBQUksV0FBVyxTQUFTO0FBQ3hCLFVBQUksV0FBVyxVQUFVLElBQUk7QUFDN0IsV0FBSyxPQUFPLE1BQU0sdUJBQXVCLENBQUksRUFBRSxPQUFPLFVBQVUsb0JBQW9CLFNBQVMsVUFBVSxRQUFRO0lBQ2pIO0FBUUEsUUFBSSxxQkFBcUIsU0FBU0Msb0JBQW1CLFFBQVE7QUFDM0Qsc0JBQWdCLE1BQU1BLG1CQUFrQjtBQUV4QyxXQUFLLE9BQU87QUFFWixXQUFLLE9BQU8sTUFBTSx1QkFBdUIsQ0FBSSxFQUFFLE9BQU8sVUFBVSx1QkFBdUIsT0FBTyxVQUFVO0lBQzFHO0FBUUEsUUFBSSx3QkFBd0IsU0FBU0MsdUJBQXNCLFFBQVE7QUFDakUsc0JBQWdCLE1BQU1BLHNCQUFxQjtBQUUzQyxXQUFLLE9BQU87QUFFWixXQUFLLE9BQU8sTUFBTSx1QkFBdUIsQ0FBSSxFQUFFLE9BQU8sVUFBVSwwQkFBMEIsT0FBTyxrQkFBa0IsT0FBTyxlQUFlO0lBQzNJO0FBUUEsUUFBSSxpQkFBaUIsU0FBU0MsZ0JBQWUsTUFBTTtBQUNqRCxzQkFBZ0IsTUFBTUEsZUFBYztBQUVwQyxXQUFLLE9BQU87QUFDWixVQUFJLFlBQVksTUFBTSxjQUFjLElBQUk7QUFFeEMsV0FBSyxPQUFPLE1BQU0sdUJBQXVCLENBQUksRUFBRTtRQUFPLFVBQVU7UUFBZSxVQUFVO1FBQW1CLE1BQU0sdUJBQXVCLFVBQVUsTUFBTTs7UUFDeko7O01BQ0E7SUFDRjtBQVFBLFFBQUksZ0JBQWdCLFNBQVNDLGVBQWMsTUFBTTtBQUMvQyxzQkFBZ0IsTUFBTUEsY0FBYTtBQUVuQyxXQUFLLE9BQU87QUFDWixVQUFJLFlBQVksTUFBTSxjQUFjLElBQUk7QUFFeEMsV0FBSyxPQUFPLE1BQU0sdUJBQXVCLENBQUksRUFBRTtRQUFPLFVBQVU7UUFBZSxVQUFVO1FBQWdCLE1BQU0sdUJBQXVCLFVBQVUsTUFBTTs7UUFDdEo7O01BQ0E7SUFDRjtBQU9BLFFBQUksZ0JBQWdCLFNBQVNDLGlCQUFnQjtBQUMzQyxzQkFBZ0IsTUFBTUEsY0FBYTtBQUVuQyxXQUFLLE9BQU87QUFFWixXQUFLLE9BQU8sTUFBTSx1QkFBdUIsQ0FBSSxFQUFFLE9BQU8sVUFBVSxlQUFlLFVBQVUsb0JBQW9CO0lBQy9HO0FBUUEsUUFBSSxzQkFBc0IsU0FBU0MscUJBQW9CLE1BQU07QUFDM0Qsc0JBQWdCLE1BQU1BLG9CQUFtQjtBQUV6QyxXQUFLLE9BQU87QUFDWixVQUFJLFlBQVksTUFBTSxjQUFjLElBQUk7QUFFeEMsV0FBSyxPQUFPLE1BQU0sdUJBQXVCLENBQUksRUFBRTtRQUFPLFVBQVU7UUFBZSxVQUFVO1FBQXlCLE1BQU0sdUJBQXVCLFVBQVUsTUFBTTs7UUFDL0o7O01BQ0E7SUFDRjtBQU9BLFFBQUksb0JBQW9CLFNBQVNDLG1CQUFrQixJQUFJLElBQUk7QUFDekQsc0JBQWdCLE1BQU1BLGtCQUFpQjtBQUV2QyxXQUFLLE9BQU87QUFDWixVQUFJLE9BQU8sTUFBTTtBQUNqQixXQUFLLE1BQU07QUFFWCxVQUFJLE9BQU8sT0FBTyxhQUFhO0FBQzdCLFlBQUksU0FBUyxDQUFDLENBQUMsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxNQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sTUFBTSxNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLE1BQU0sTUFBTSxJQUFJLENBQUM7QUFDdEwsWUFBSSxTQUFTLEdBQUc7QUFDaEIsWUFBSTVCLFNBQU8sTUFBTTtBQUNqQixZQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLFlBQVksRUFBRyxRQUFPO0FBRTFDLFlBQUksU0FBUyxHQUFHO0FBQ2Qsa0JBQVEsR0FBRyxPQUFPLFNBQVMsQ0FBQyxHQUFHO1lBQzdCLEtBQUs7QUFDSCxxQkFBTztBQUNQQSxjQUFBQSxTQUFPLEdBQUcsT0FBTyxDQUFDLEVBQUUsWUFBWTtBQUNoQ0EsY0FBQUEsU0FBT0EsT0FBSyxPQUFPLEdBQUcsVUFBVSxHQUFHLFNBQVMsQ0FBQyxDQUFDO0FBQzlDO1lBRUYsS0FBSztBQUNILHFCQUFPO0FBQ1BBLGNBQUFBLFNBQU8sR0FBRyxPQUFPLENBQUMsRUFBRSxZQUFZO0FBQ2hDQSxjQUFBQSxTQUFPQSxPQUFLLE9BQU8sR0FBRyxVQUFVLEdBQUcsU0FBUyxDQUFDLENBQUM7QUFDOUM7WUFFRixLQUFLO0FBQ0gscUJBQU87QUFDUEEsY0FBQUEsU0FBTyxHQUFHLE9BQU8sQ0FBQyxFQUFFLFlBQVk7QUFDaENBLGNBQUFBLFNBQU9BLE9BQUssT0FBTyxHQUFHLFVBQVUsR0FBRyxTQUFTLENBQUMsQ0FBQztBQUM5QztZQUVGLEtBQUs7QUFDSCxxQkFBTztBQUNQQSxjQUFBQSxTQUFPLEdBQUcsT0FBTyxDQUFDLEVBQUUsWUFBWTtBQUNoQ0EsY0FBQUEsU0FBT0EsT0FBSyxPQUFPLEdBQUcsVUFBVSxHQUFHLFNBQVMsQ0FBQyxDQUFDO0FBQzlDO1VBQ0o7UUFDRjtBQUVBLFlBQUksYUFBYSxPQUFPLElBQUksRUFBRSxRQUFRQSxNQUFJO0FBQzFDLGFBQUssZUFBZSxLQUFLLElBQUksYUFBYTtNQUM1QztBQUdBLFdBQUssT0FBTyxNQUFNLHVCQUF1QixDQUFJLEVBQUU7UUFBTyxVQUFVO1FBQWUsVUFBVTtRQUF1QixDQUFDLENBQUk7O1FBQ3JILE1BQU0sY0FBYyxJQUFJLENBQUM7O1FBQ3pCLE1BQU0sY0FBYyxNQUFNLENBQUM7O01BQzNCO0lBQ0Y7QUFRQSxRQUFJLGFBQWEsU0FBUzZCLFlBQVcsTUFBTTtBQUN6QyxzQkFBZ0IsTUFBTUEsV0FBVTtBQUVoQyxXQUFLLE9BQU87QUFDWixVQUFJLFlBQVksTUFBTSxjQUFjLElBQUk7QUFFeEMsV0FBSyxPQUFPLE1BQU0sdUJBQXVCLENBQUksRUFBRTtRQUFPLFVBQVU7UUFBZSxVQUFVO1FBQWUsTUFBTSx1QkFBdUIsVUFBVSxNQUFNOztRQUNySjs7TUFDQTtJQUNGO0FBUUEsUUFBSSxjQUFjLFNBQVNDLGFBQVksTUFBTTtBQUMzQyxzQkFBZ0IsTUFBTUEsWUFBVztBQUVqQyxXQUFLLE9BQU87QUFDWixVQUFJLFlBQVksTUFBTSxjQUFjLElBQUk7QUFFeEMsV0FBSyxPQUFPLE1BQU0sdUJBQXVCLENBQUksRUFBRTtRQUFPLFVBQVU7UUFBZSxVQUFVO1FBQWdCLE1BQU0sdUJBQXVCLFVBQVUsTUFBTTs7UUFDdEo7O01BQ0E7SUFDRjtBQVFBLFFBQUksYUFBYSxTQUFTQyxZQUFXLEtBQUs7QUFDeEMsc0JBQWdCLE1BQU1BLFdBQVU7QUFFaEMsV0FBSyxPQUFPO0FBQ1osVUFBSUMsU0FBUSxLQUFLLE1BQU0sTUFBVyxHQUFHO0FBRXJDLFdBQUssT0FBTyxNQUFNLHVCQUF1QixDQUFJLEVBQUU7UUFBTyxVQUFVO1FBQWUsVUFBVTtRQUFlLENBQUMsQ0FBSTs7UUFDN0csTUFBTSxjQUFjQSxRQUFPLENBQUM7O01BQzVCO0lBQ0Y7QUFRQSxRQUFJLFlBQVksU0FBU0MsV0FBVSxNQUFNO0FBQ3ZDLHNCQUFnQixNQUFNQSxVQUFTO0FBRS9CLFdBQUssT0FBTztBQUNaLFVBQUksWUFBWSxNQUFNLGNBQWMsSUFBSTtBQUV4QyxXQUFLLE9BQU8sTUFBTSx1QkFBdUIsQ0FBSSxFQUFFO1FBQU8sVUFBVTtRQUFlLFVBQVU7UUFBYyxNQUFNLHVCQUF1QixVQUFVLE1BQU07O1FBQ3BKOztNQUNBO0lBQ0Y7QUFPQSxRQUFJLHFCQUFxQixTQUFTQyxvQkFBbUIsV0FBVyxhQUFhLG1CQUFtQixtQkFBbUI7QUFDakgsc0JBQWdCLE1BQU1BLG1CQUFrQjtBQUV4QyxXQUFLLE9BQU87QUFFWixXQUFLLE9BQU8sTUFBTSx1QkFBdUIsQ0FBSSxFQUFFO1FBQU8sVUFBVTtRQUFlLFVBQVU7UUFBd0IsQ0FBQyxDQUFJOztRQUN0SCxNQUFNLGNBQWMsV0FBVyxDQUFDOztRQUNoQyxNQUFNLGNBQWMsS0FBSyxLQUFLLFdBQVcsR0FBRyxDQUFDOztRQUM3QyxNQUFNLGNBQWMscUJBQXFCLElBQUksQ0FBQzs7UUFDOUMsTUFBTSxjQUFjLHFCQUFxQixHQUFHLENBQUM7O01BQzdDO0lBQ0Y7QUFRQSxRQUFJLGlCQUFpQixTQUFTQyxnQkFBZSxNQUFNO0FBQ2pELHNCQUFnQixNQUFNQSxlQUFjO0FBRXBDLFdBQUssT0FBTztBQUNaLFVBQUksWUFBWSxNQUFNLGNBQWMsSUFBSTtBQUV4QyxXQUFLLE9BQU8sTUFBTSx1QkFBdUIsQ0FBSSxFQUFFO1FBQU8sVUFBVTtRQUFlLFVBQVU7UUFBb0IsTUFBTSx1QkFBdUIsVUFBVSxNQUFNOztRQUMxSjs7TUFDQTtJQUNGO0FBUUEsUUFBSSxRQUFxQiw0QkFBWTtBQUNuQyxlQUFTQyxTQUFRO0FBQ2Ysd0JBQWdCLE1BQU1BLE1BQUs7QUFFM0IsYUFBSyxPQUFPLFVBQVU7QUFDdEIsYUFBSyxPQUFPLENBQUM7QUFDYixhQUFLLE9BQU8sQ0FBQztBQUNiLGFBQUssU0FBUyxDQUFDO0FBQ2YsYUFBSyxxQkFBcUIsQ0FBQztBQUczQixhQUFLLGNBQWM7TUFDckI7QUFXQSxtQkFBYUEsUUFBTyxDQUFDO1FBQ25CLEtBQUs7UUFDTCxPQUFPLFNBQVMsU0FBUyxRQUFRLGFBQWE7QUFDNUMsY0FBSSxRQUFRO0FBRVosZ0JBQU0sUUFBUSxNQUFNLEVBQUUsUUFBUSxTQUFVLE9BQU8sR0FBRztBQUNoRCxnQkFBSSxpQkFBaUIsV0FBVztBQUU5QixrQkFBSSxPQUFPLGdCQUFnQixZQUFZO0FBQ3JDLG9CQUFJLGFBQWEsWUFBWSxHQUFHLEtBQUs7QUFFckMsb0JBQUksUUFBUSxVQUFVLE1BQU0sVUFBVTtBQUNwQywyQkFBUyxLQUFLLFlBQVk7QUFDeEIsNEJBQVEsR0FBRztzQkFDVCxLQUFLO0FBQ0gsOEJBQU0sVUFBVSxXQUFXLENBQUM7QUFDNUI7c0JBRUYsS0FBSztBQUNILDhCQUFNLFdBQVcsV0FBVyxDQUFDO0FBQzdCO3NCQUVGLEtBQUs7QUFDSCw4QkFBTSxhQUFhLFdBQVcsQ0FBQztBQUMvQjtzQkFFRixLQUFLO0FBQ0gsOEJBQU0sV0FBVyxNQUFNLGdCQUFnQixXQUFXLENBQUMsQ0FBQztBQUNwRDtvQkFDSjtrQkFDRjtnQkFDRjtjQUNGO0FBR0Esa0JBQUksTUFBTSxjQUFjLE1BQU07QUFDNUIsc0JBQU0sbUJBQW1CLEtBQUssS0FBSztjQUNyQyxPQUFPO0FBRUwsc0JBQU0sVUFBVSxFQUFFLE9BQU8sUUFBUSxTQUFVLEdBQUc7QUFDNUMseUJBQU8sTUFBTSxPQUFPLEtBQUssQ0FBQztnQkFDNUIsQ0FBQztjQUNIO1lBQ0YsT0FBTztBQUNMLG9CQUFNLE9BQU8sS0FBSyxLQUFLO1lBQ3pCO1VBQ0YsQ0FBQztBQUNELGlCQUFPO1FBQ1Q7Ozs7O01BTUYsR0FBRztRQUNELEtBQUs7UUFDTCxPQUFPLFNBQVMsWUFBWTtBQUMxQixjQUFJLFNBQVM7QUFJYixlQUFLLG1CQUFtQixXQUFXLEVBQUUsU0FBUyxJQUFJLGNBQWMsQ0FBQztBQUVqRSxlQUFLLE9BQU8sQ0FBQztBQUNiLGVBQUssT0FBTyxDQUFDO0FBQ2IsZUFBSyxjQUFjO0FBQ25CLGNBQUksZ0JBQWdCO0FBQ3BCLGVBQUssT0FBTyxRQUFRLFNBQVUsT0FBTyxZQUFZO0FBRS9DLGdCQUFJLGlCQUFpQixlQUFlLGlCQUFpQixjQUFjO0FBQ2pFLGtCQUFJLFFBQVEsTUFBTSxVQUFVLFFBQVEsYUFBYTtBQUNqRCw4QkFBZ0IsTUFBTSxpQkFBaUIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RSxxQkFBTyxPQUFPLE9BQU8sS0FBSyxPQUFPLE1BQU0sSUFBSTtBQUMzQyxxQkFBTyxjQUFjLE1BQU0sa0JBQWtCLE1BQU0sSUFBSTtZQUN6RCxPQUFPO0FBQ0wscUJBQU8sT0FBTyxPQUFPLEtBQUssT0FBTyxNQUFNLElBQUk7WUFDN0M7VUFDRixDQUFDO0FBQ0QsZUFBSyx3QkFBd0I7QUFDN0IsZUFBSyxPQUFPLE1BQU0sY0FBYyxLQUFLLEtBQUssUUFBUSxDQUFDO0FBRW5ELGlCQUFPO1FBQ1Q7TUFDRixHQUFHO1FBQ0QsS0FBSztRQUNMLE9BQU8sU0FBUywwQkFBMEI7QUFDeEMsY0FBSSxTQUFTO0FBRWIsY0FBSSxDQUFDLEtBQUssbUJBQW1CLE9BQVE7QUFFckMsZUFBSyxtQkFBbUIsS0FBSyxTQUFVLEdBQUcsR0FBRztBQUMzQyxtQkFBTyxFQUFFLFlBQVksRUFBRTtVQUN6QixDQUFDO0FBSUQsZUFBSyxtQkFBbUIsUUFBUSxTQUFVLFdBQVc7QUFJbkQsc0JBQVUsVUFBVSxFQUFFLE9BQU8sUUFBUSxTQUFVLEdBQUc7QUFDaEQscUJBQU8sRUFBRSxVQUFVLE1BQU07WUFDM0IsQ0FBQztBQUVELHNCQUFVLE9BQU8sUUFBUSxTQUFVLE9BQU87QUFDeEMscUJBQU8sT0FBTyxpQkFBaUIsS0FBSztZQUN0QyxDQUFDO1VBQ0gsQ0FBQztBQUVELGVBQUsscUJBQXFCLENBQUM7QUFDM0IsZUFBSyxVQUFVO1FBQ2pCOzs7Ozs7TUFPRixHQUFHO1FBQ0QsS0FBSztRQUNMLE9BQU8sU0FBUyxXQUFXLE9BQU87QUFDaEMsY0FBSSxTQUFTO0FBR2IsZUFBSyxVQUFVO0FBRWYsZ0JBQU0sVUFBVSxFQUFFLE9BQU8sUUFBUSxTQUFVLE9BQU87QUFDaEQsbUJBQU8sT0FBTyxpQkFBaUIsS0FBSztVQUN0QyxDQUFDO1FBQ0g7Ozs7OztNQU9GLEdBQUc7UUFDRCxLQUFLO1FBQ0wsT0FBTyxTQUFTLGlCQUFpQixPQUFPO0FBRXRDLGNBQUksaUJBQWlCO0FBRXJCLG1CQUFTLElBQUksR0FBRyxJQUFJLEtBQUssT0FBTyxRQUFRLEtBQUs7QUFDM0MsZ0JBQUksS0FBSyxPQUFPLENBQUMsRUFBRSxPQUFPLE1BQU0sS0FBTTtBQUN0Qyw2QkFBaUI7VUFDbkI7QUFFQSxjQUFJLG9CQUFvQixpQkFBaUI7QUFFekMsZ0JBQU0sUUFBUSxNQUFNLE9BQU8sS0FBSyxPQUFPLGNBQWMsRUFBRTtBQUV2RCxlQUFLLE9BQU8sT0FBTyxtQkFBbUIsR0FBRyxLQUFLO0FBRTlDLG1CQUFTLElBQUksb0JBQW9CLEdBQUcsSUFBSSxLQUFLLE9BQU8sUUFBUSxLQUFLO0FBRy9ELGlCQUFLLE9BQU8sQ0FBQyxFQUFFLFFBQVEsS0FBSyxPQUFPLENBQUMsRUFBRSxPQUFPLEtBQUssT0FBTyxJQUFJLENBQUMsRUFBRTtVQUNsRTtRQUNGOzs7Ozs7TUFPRixHQUFHO1FBQ0QsS0FBSztRQUNMLE9BQU8sU0FBUyxtQkFBbUIsV0FBVztBQUM1QyxjQUFJLFNBQVM7QUFFYixlQUFLLE9BQU8sUUFBUSxTQUFVLE9BQU8sT0FBTztBQUMxQyxnQkFBSSxNQUFNLFNBQVMsV0FBVztBQUM1QixxQkFBTyxPQUFPLE9BQU8sT0FBTyxDQUFDO1lBQy9CO1VBQ0YsQ0FBQztBQUNELGlCQUFPO1FBQ1Q7Ozs7OztNQU9GLEdBQUc7UUFDRCxLQUFLO1FBQ0wsT0FBTyxTQUFTLFNBQVMsS0FBSztBQUM1QixpQkFBTyxLQUFLLFNBQVMsSUFBSSxXQUFXLEdBQUcsQ0FBQztRQUMxQzs7Ozs7Ozs7O01BVUYsR0FBRztRQUNELEtBQUs7UUFDTCxPQUFPLFNBQVMsaUJBQWlCLFdBQVcsYUFBYSxtQkFBbUIsbUJBQW1CO0FBQzdGLGlCQUFPLEtBQUssU0FBUyxJQUFJLG1CQUFtQixXQUFXLGFBQWEsbUJBQW1CLGlCQUFpQixDQUFDO1FBQzNHOzs7Ozs7O01BUUYsR0FBRztRQUNELEtBQUs7UUFDTCxPQUFPLFNBQVMsZ0JBQWdCLElBQUksSUFBSTtBQUN0QyxpQkFBTyxLQUFLLFNBQVMsSUFBSSxrQkFBa0IsSUFBSSxFQUFFLENBQUM7UUFDcEQ7Ozs7OztNQU9GLEdBQUc7UUFDRCxLQUFLO1FBQ0wsT0FBTyxTQUFTLFFBQVEsTUFBTTtBQUM1QixpQkFBTyxLQUFLLFNBQVMsSUFBSSxVQUFVLElBQUksQ0FBQztRQUMxQzs7Ozs7O01BT0YsR0FBRztRQUNELEtBQUs7UUFDTCxPQUFPLFNBQVMsYUFBYSxNQUFNO0FBQ2pDLGlCQUFPLEtBQUssU0FBUyxJQUFJLGVBQWUsSUFBSSxDQUFDO1FBQy9DOzs7Ozs7TUFPRixHQUFHO1FBQ0QsS0FBSztRQUNMLE9BQU8sU0FBUyxhQUFhLE1BQU07QUFDakMsaUJBQU8sS0FBSyxTQUFTLElBQUksZUFBZSxJQUFJLENBQUM7UUFDL0M7Ozs7OztNQU9GLEdBQUc7UUFDRCxLQUFLO1FBQ0wsT0FBTyxTQUFTLGtCQUFrQixNQUFNO0FBQ3RDLGlCQUFPLEtBQUssU0FBUyxJQUFJLG9CQUFvQixJQUFJLENBQUM7UUFDcEQ7Ozs7OztNQU9GLEdBQUc7UUFDRCxLQUFLO1FBQ0wsT0FBTyxTQUFTLFVBQVUsTUFBTTtBQUM5QixpQkFBTyxLQUFLLFNBQVMsSUFBSSxZQUFZLElBQUksQ0FBQztRQUM1Qzs7Ozs7O01BT0YsR0FBRztRQUNELEtBQUs7UUFDTCxPQUFPLFNBQVMsWUFBWSxNQUFNO0FBQ2hDLGlCQUFPLEtBQUssU0FBUyxJQUFJLGNBQWMsSUFBSSxDQUFDO1FBQzlDOzs7Ozs7TUFPRixHQUFHO1FBQ0QsS0FBSztRQUNMLE9BQU8sU0FBUyxTQUFTLE1BQU07QUFDN0IsaUJBQU8sS0FBSyxTQUFTLElBQUksV0FBVyxJQUFJLENBQUM7UUFDM0M7Ozs7O01BTUYsR0FBRztRQUNELEtBQUs7UUFDTCxPQUFPLFNBQVMsYUFBYTtBQUMzQixjQUFJLFFBQVEsSUFBSSxZQUFZO1lBQzFCLE1BQU0sQ0FBQyxHQUFNLEtBQU0sS0FBTSxDQUFJO1VBQy9CLENBQUM7QUFDRCxpQkFBTyxLQUFLLFNBQVMsS0FBSztRQUM1Qjs7Ozs7O01BT0YsR0FBRztRQUNELEtBQUs7UUFDTCxPQUFPLFNBQVMsYUFBYSxNQUFNO0FBQ2pDLGlCQUFPLEtBQUssU0FBUyxJQUFJLGVBQWU7WUFDdEM7VUFDRixDQUFDLENBQUM7UUFDSjs7Ozs7OztNQVFGLEdBQUc7UUFDRCxLQUFLO1FBQ0wsT0FBTyxTQUFTLGlCQUFpQixRQUFRLE9BQU87QUFDOUMsaUJBQU8sS0FBSyxTQUFTLElBQUksc0JBQXNCO1lBQzdDLGtCQUFrQjtZQUNsQixpQkFBaUI7VUFDbkIsQ0FBQyxDQUFDO1FBQ0o7TUFDRixDQUFDLENBQUM7QUFFRixhQUFPQTtJQUNULEdBQUU7QUFFRixRQUFJLFVBQXVCLDRCQUFZO0FBQ3JDLGVBQVNDLFdBQVU7QUFDakIsd0JBQWdCLE1BQU1BLFFBQU87TUFDL0I7QUFFQSxtQkFBYUEsVUFBUyxDQUFDO1FBQ3JCLEtBQUs7UUFDTDs7Ozs7V0FLQSxTQUFTLGVBQWUsT0FBTztBQUM3QixnQkFBSSxRQUFRO0FBRVosZ0JBQUksVUFBVSxVQUFVLFNBQVMsS0FBSyxVQUFVLENBQUMsTUFBTSxTQUFZLFVBQVUsQ0FBQyxJQUFJO2NBQ2hGLHdCQUF3QjtZQUMxQjtBQUNBLGdCQUFJLFFBQVEsSUFBSSxNQUFNO0FBQ3RCLGdCQUFJLE9BQU8sQ0FBQztBQUNaLGtCQUFNLFVBQVUsUUFBUSxTQUFVLFVBQVU7QUFDMUMsa0JBQUksU0FBUyxhQUFhLEtBQUs7QUFDN0Isc0JBQU0sU0FBUyxJQUFJLFVBQVU7a0JBQzNCLE9BQU8sU0FBUyxLQUFLLElBQUksU0FBVSxPQUFPLE9BQU87QUFDL0MsMkJBQU8sTUFBTSxhQUFhLE9BQU8sT0FBTyxVQUFVLFFBQVEsc0JBQXNCO2tCQUNsRixDQUFDO2tCQUNELFVBQVUsTUFBTSxnQkFBZ0IsUUFBUTtrQkFDeEM7Z0JBQ0YsQ0FBQyxDQUFDO0FBRUYsdUJBQU8sQ0FBQztjQUNWLFdBQVcsU0FBUyxhQUFhLEtBQUs7QUFHcEMscUJBQUssS0FBSyxNQUFNLGdCQUFnQixRQUFRLENBQUM7QUFDekM7Y0FDRjtZQUNGLENBQUM7QUFHRCxnQkFBSSxLQUFLLFNBQVMsR0FBRztBQUNuQixvQkFBTSxTQUFTLElBQUksVUFBVTtnQkFDM0IsT0FBTztnQkFDUCxVQUFVO2dCQUNWO2dCQUNBLFVBQVU7Y0FDWixDQUFDLENBQUM7WUFDSjtBQUVBLG1CQUFPO1VBQ1Q7Ozs7Ozs7OztNQVNGLEdBQUc7UUFDRCxLQUFLO1FBQ0wsT0FBTyxTQUFTLGFBQWEsT0FBTyxPQUFPckMsUUFBTTtBQUMvQyxjQUFJLHlCQUF5QixVQUFVLFNBQVMsS0FBSyxVQUFVLENBQUMsTUFBTSxTQUFZLFVBQVUsQ0FBQyxJQUFJO0FBRWpHLGNBQUksYUFBYSxNQUFNLE1BQU0sR0FBRztBQUdoQyxjQUFJLGNBQWMsV0FBVyxDQUFDLEVBQUUsVUFBVSxDQUFDLEVBQUUsUUFBUSxLQUFLLEVBQUU7QUFFNUQsY0FBSSx3QkFBd0I7QUFDMUIsZ0JBQUk7QUFFSixhQUFDLHVCQUF1QkEsT0FBSyxlQUFlLE9BQU8sUUFBUSx5QkFBeUIsU0FBUyxTQUFTLHFCQUFxQixRQUFRLFNBQVUsWUFBWTtBQUN2SixrQkFBSSxXQUFXLFVBQVUsT0FBTztBQUM5QixvQkFBSSxXQUFXLFNBQVMsS0FBSztBQUMzQixnQ0FBYztnQkFDaEIsT0FBTztBQUNMLGlDQUFlLFdBQVc7Z0JBQzVCO2NBQ0Y7WUFDRixDQUFDO1VBQ0g7QUFFQSxpQkFBTyxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksY0FBYyxXQUFXLENBQUM7UUFDdEQ7Ozs7O01BTUYsR0FBRztRQUNELEtBQUs7UUFDTCxPQUFPLFNBQVMsZ0JBQWdCQSxRQUFNO0FBQ3BDLGlCQUFPLElBQUksT0FBT0EsT0FBSyxJQUFJLElBQUksS0FBSyxvQkFBb0JBLE9BQUssUUFBUSxLQUFLQSxPQUFLLFNBQVMsTUFBTUEsT0FBSyxPQUFPLFlBQVk7UUFDeEg7Ozs7OztNQU9GLEdBQUc7UUFDRCxLQUFLO1FBQ0wsT0FBTyxTQUFTLG9CQUFvQixVQUFVO0FBQzVDLGtCQUFRLFVBQVU7WUFDaEIsS0FBSztBQUNILHFCQUFPO1lBRVQsS0FBSztBQUNILHFCQUFPO1lBRVQsS0FBSztBQUNILHFCQUFPO1lBRVQ7QUFDRSxxQkFBTztVQUNYO1FBQ0Y7TUFDRixDQUFDLENBQUM7QUFFRixhQUFPcUM7SUFDVCxHQUFFO0FBUUYsUUFBSSxjQUFjLFNBQVNDLGFBQVksZ0JBQWdCO0FBQ3JELHNCQUFnQixNQUFNQSxZQUFXO0FBRWpDLFdBQUssT0FBTyxVQUFVO0FBQ3RCLFVBQUksWUFBWSxpQkFBaUIsSUFBSSxVQUFVLHVCQUF1QixVQUFVO0FBQ2hGLFdBQUssT0FBTyxVQUFVO1FBQU8sTUFBTSxjQUFjLGdCQUFnQixDQUFDOztRQUNsRSxVQUFVO01BQXFCO0FBQy9CLFdBQUssT0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFHLEtBQUssS0FBSyxNQUFNO0lBQ3hDO0FBUUEsUUFBSSxTQUFzQiw0QkFBWTtBQUNwQyxlQUFTQyxRQUFPLFFBQVE7QUFDdEIsWUFBSSxRQUFRO0FBRVosd0JBQWdCLE1BQU1BLE9BQU07QUFHNUIsaUJBQVMsTUFBTSxRQUFRLE1BQU07QUFDN0IsYUFBSyxPQUFPLENBQUM7QUFDYixhQUFLLEtBQUssS0FBSyxJQUFJLFlBQVksT0FBTyxNQUFNLENBQUM7QUFFN0MsZUFBTyxRQUFRLFNBQVUsT0FBTyxHQUFHO0FBQ2pDLGdCQUFNLEtBQUssS0FBSyxNQUFNLFVBQVUsQ0FBQztRQUNuQyxDQUFDO01BQ0g7QUFPQSxtQkFBYUEsU0FBUSxDQUFDO1FBQ3BCLEtBQUs7UUFDTCxPQUFPLFNBQVMsWUFBWTtBQUMxQixjQUFJQyxTQUFRLENBQUM7QUFFYixlQUFLLEtBQUssUUFBUSxTQUFVLEdBQUc7QUFDN0IsbUJBQU9BLFNBQVFBLE9BQU0sT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSTtVQUNwRCxDQUFDO0FBQ0QsaUJBQU8sSUFBSSxXQUFXQSxNQUFLO1FBQzdCOzs7OztNQU1GLEdBQUc7UUFDRCxLQUFLO1FBQ0wsT0FBTyxTQUFTLFNBQVM7QUFDdkIsY0FBSSxPQUFPLFNBQVMsV0FBWSxRQUFPLEtBQUssT0FBTyxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsQ0FBQyxDQUFDO0FBQzdGLGlCQUFPLE9BQU8sS0FBSyxLQUFLLFVBQVUsQ0FBQyxFQUFFLFNBQVMsUUFBUTtRQUN4RDs7Ozs7TUFNRixHQUFHO1FBQ0QsS0FBSztRQUNMLE9BQU8sU0FBUyxVQUFVO0FBQ3hCLGlCQUFPLDRCQUE0QixLQUFLLE9BQU87UUFDakQ7Ozs7O01BTUYsR0FBRztRQUNELEtBQUs7UUFDTCxPQUFPLFNBQVMsU0FBUztBQUN2QixpQkFBTyxRQUFRLE9BQU8sTUFBTSxJQUFJLE9BQU8sS0FBSyxVQUFVLENBQUMsQ0FBQztRQUMxRDtNQUNGLENBQUMsQ0FBQztBQUVGLGFBQU9EO0lBQ1QsR0FBRTtBQUVGLFFBQUksT0FBTztNQUNUO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7QUFFQSxXQUFPLFVBQVU7RUFBQTtBQUFBLENBQUE7QUMza0RqQixJQUFBLG1CQUFBN0IsWUFBQTtFQUFBLHdDQUFBLFNBQUEsUUFBQTtBQUFBLFFBQUksT0FBTyxDQUFDO0FBRVosS0FBQyxTQUFTLFVBQVU7QUFFbkIsVUFBSSxpQkFBbUIsU0FBUyxpQkFBbUI7QUFDbkQsVUFBSSxtQkFBbUIsU0FBUyxtQkFBbUI7QUFDbkQsVUFBSSxrQkFBbUIsU0FBUyxrQkFBbUI7QUFNbkQsVUFBSSxPQUFPO1FBRVYscUJBQXFCLEVBQUUsR0FBRSxJQUFJLEdBQUUsSUFBSSxHQUFFLElBQUksR0FBRSxJQUFJLEdBQUUsSUFBSSxHQUFFLElBQUksR0FBRSxHQUFHOzs7Ozs7Ozs7UUFVaEUsbUJBQW1CLFNBQVMsR0FBRztBQUM5QixjQUFJLFVBQVUsNEJBQTRCLEtBQUssQ0FBQztBQUNoRCxjQUFJVixTQUFPLFFBQVEsQ0FBQyxFQUFFLFlBQVksR0FBRyxhQUFhLFFBQVEsQ0FBQyxLQUFLLElBQUksU0FBUyxTQUFTLFFBQVEsQ0FBQyxHQUFHLEVBQUU7QUFDcEcsaUJBQVEsS0FBSyxTQUFVLEtBQUssb0JBQW9CQSxNQUFJLEtBQUssV0FBVyxPQUFPLEdBQUUsQ0FBQyxLQUFHLE1BQUksSUFBRSxNQUFNLFdBQVc7UUFDekc7Ozs7Ozs7O1FBU0EsaUJBQWlCLFNBQVNGLElBQUc7QUFDNUIsY0FBSSxPQUFPQSxNQUFLLFlBQVksQ0FBQyxTQUFTLEtBQUtBLEVBQUMsR0FBRztBQUU5QyxtQkFBTyxTQUFTQSxJQUFHLEVBQUU7VUFDdEIsT0FBTztBQUVOLG1CQUFPLEtBQUssa0JBQWtCQSxFQUFDO1VBQ2hDO1FBQ0Q7UUFFQSxxQkFBcUIsRUFBRSxNQUFLLEtBQUssTUFBSyxNQUFNLE1BQUssS0FBSyxNQUFLLE1BQU0sTUFBSyxLQUFLLE1BQUssS0FBSyxNQUFLLE1BQU0sTUFBSyxLQUFLLE1BQUssTUFBTSxNQUFLLEtBQUssTUFBSyxNQUFNLE1BQUssSUFBSTtRQUNuSixzQkFBc0IsRUFBRSxNQUFLLE1BQU0sTUFBSyxNQUFNLE1BQUssTUFBTSxNQUFLLE1BQU0sTUFBSyxLQUFLOzs7Ozs7Ozs7O1FBVzlFLG1CQUFtQixTQUFTLEdBQUcsaUJBQWlCO0FBQy9DLGNBQUksU0FBUyxHQUFHLFVBQVUsR0FBRyxVQUFVLGtCQUFrQixtQkFBbUI7QUFDNUUsY0FBSSxJQUFJLElBQUk7QUFFWCxxQkFBUyxLQUFLLE1BQU0sSUFBRSxFQUFFLElBQUk7QUFFNUIsc0JBQVUsSUFBSSxTQUFTO1VBQ3hCO0FBR0EscUJBQVcsS0FBSyxvQkFBb0IsT0FBTztBQUUzQyxjQUFJLG1CQUFtQixTQUFTLFFBQVEsR0FBRyxJQUFJLEdBQUc7QUFDakQsdUJBQVcsS0FBSyxxQkFBcUIsUUFBUTtVQUM5QztBQUNBLGlCQUFPLFdBQVc7UUFDbkI7Ozs7Ozs7UUFRQSxhQUFhLFNBQVMsS0FBSztBQUMxQixjQUFJLE9BQU8sS0FBSyxNQUFNLE1BQVcsR0FBRztBQUNwQyxjQUFJLE1BQUksQ0FBQztBQUNULGFBQUc7QUFDRixnQkFBSSxRQUFRLE9BQU8sR0FBSTtBQUN2QixxQkFBUztVQUNWLFNBQVM7QUFDVCxpQkFBTyxJQUFJLFNBQVMsR0FBRztBQUN0QixnQkFBSSxLQUFLLENBQUM7VUFDWDtBQUNBLGlCQUFPO1FBQ1I7Ozs7Ozs7UUFRQSxhQUFhLFNBQVMsTUFBTTtBQUMzQixjQUFJRixNQUFJO0FBQ1IsY0FBSSxPQUFPLEtBQUssQ0FBQyxLQUFLLGFBQWE7QUFDbENBLFlBQUFBLE1BQUk7QUFDSixxQkFBUyxJQUFFLEdBQUcsSUFBRSxLQUFLLFNBQU8sR0FBRyxLQUFLLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztBQUNoREEsY0FBQUEsT0FBSyxLQUFLLENBQUMsS0FBSztZQUNqQjtVQUNEO0FBQ0EsaUJBQU8sS0FBSyxNQUFNLE1BQVcsSUFBSTtRQUNsQzs7Ozs7Ozs7UUFTQSxXQUFXLFNBQVMsV0FBVztBQUM5QixpQkFBTyxPQUFPLGFBQWEsTUFBTSxNQUFNLFNBQVM7UUFDakQ7Ozs7Ozs7Ozs7O1FBWUEsV0FBVyxTQUFVLEtBQUssWUFBWTtBQUNyQyxjQUFJLFlBQVk7QUFDZixtQkFBUSxJQUFJLFNBQVMsSUFBSyxZQUFZO0FBQUUsb0JBQU0sTUFBTTtZQUFLO1VBQzFEO0FBRUEsY0FBSSxRQUFRLENBQUM7QUFDYixtQkFBUyxJQUFFLElBQUksU0FBTyxHQUFHLEtBQUcsR0FBRyxJQUFJLElBQUUsR0FBRztBQUN2QyxnQkFBSSxRQUFRLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQztBQUMvQyxrQkFBTSxRQUFRLFNBQVMsT0FBTyxFQUFFLENBQUM7VUFDbEM7QUFFQSxpQkFBTztRQUNSOzs7Ozs7Ozs7UUFVQSxtQkFBbUIsU0FBUyxPQUFPO0FBQ2xDLGNBQUksU0FBUyxRQUFRO0FBRXJCLGlCQUFPLFFBQVEsU0FBUyxHQUFHO0FBQzFCLHVCQUFXO0FBQ1gsc0JBQVksUUFBUSxNQUFRO1VBQzdCO0FBRUEsY0FBSSxRQUFRLENBQUM7QUFDYixpQkFBTyxNQUFNO0FBQ1osa0JBQU0sS0FBSyxTQUFTLEdBQUk7QUFFeEIsZ0JBQUksU0FBUyxLQUFNO0FBQUUseUJBQVc7WUFBRyxPQUM5QjtBQUFFO1lBQU87VUFDZjtBQUNBLGlCQUFPO1FBQ1I7TUFFRDtBQWdCQSxVQUFJLFlBQVksU0FBUyxRQUFRO0FBQ2hDLFlBQUksQ0FBQyxLQUFNLFFBQU8sSUFBSSxVQUFVLE1BQU07QUFDdEMsWUFBSSxXQUNELE9BQU8sU0FBWSxRQUFRLE9BQU8sU0FBWSxZQUM5QyxPQUFPLFlBQVksUUFBUSxPQUFPLFlBQVksWUFDOUMsT0FBTyxXQUFZLFFBQVEsT0FBTyxXQUFZLFNBQVk7QUFDNUQsZUFBSyxRQUFRLE9BQU8sSUFBSTtBQUN4QixlQUFLLFFBQVEsT0FBTyxJQUFJO0FBQ3hCLGVBQUssV0FBVyxPQUFPLE9BQU87QUFDOUIsZUFBSyxVQUFVLE9BQU8sTUFBTTtBQUM1QixlQUFLLFVBQVUsT0FBTyxNQUFNO1FBQzdCO01BQ0Q7QUFHQSxnQkFBVSxXQUFxQjtBQUMvQixnQkFBVSxVQUFxQjtBQUMvQixnQkFBVSxjQUFxQjtBQUMvQixnQkFBVSxhQUFxQjtBQUMvQixnQkFBVSxpQkFBcUI7QUFDL0IsZ0JBQVUscUJBQXFCO0FBQy9CLGdCQUFVLGFBQXFCO0FBUy9CLGdCQUFVLFVBQVUsVUFBVSxTQUFTLE9BQU87QUFDN0MsYUFBSyxPQUFPLEtBQUssa0JBQWtCLFNBQVMsQ0FBQztNQUM5QztBQU9BLGdCQUFVLFVBQVUsVUFBVSxTQUFTLE1BQU07QUFDNUMsWUFBSSxPQUFPLFVBQVUsWUFBWSxPQUFPLFVBQVUsWUFBWTtBQUM3RCxnQkFBTSxJQUFJLE1BQU0scUNBQXFDLElBQUk7UUFDMUQ7QUFFQSxhQUFLLE9BQU87TUFDYjtBQU9BLGdCQUFVLFVBQVUsYUFBYSxTQUFTLFNBQVM7QUFDbEQsWUFBSSxVQUFVLEtBQUssVUFBVSxJQUFJO0FBQ2hDLGdCQUFNLElBQUksTUFBTSwyQkFBMkI7UUFDNUM7QUFFQSxhQUFLLFVBQVU7TUFDaEI7QUFRQSxnQkFBVSxVQUFVLFlBQVksU0FBU0UsSUFBRztBQUMzQyxhQUFLLFNBQVNBO01BQ2Y7QUFRQSxnQkFBVSxVQUFVLFlBQVksU0FBU0EsSUFBRztBQUMzQyxhQUFLLFNBQVNBO01BQ2Y7QUFPQSxnQkFBVSxVQUFVLFVBQVUsV0FBVztBQUN4QyxZQUFJLFlBQVksQ0FBQztBQUVqQixZQUFJLGtCQUFrQixLQUFLLE9BQVEsS0FBSyxVQUFVO0FBRWxELGtCQUFVLEtBQUssTUFBTSxXQUFXLEtBQUssSUFBSTtBQUN6QyxrQkFBVSxLQUFLLGVBQWU7QUFDOUIsa0JBQVUsS0FBSyxLQUFLLE1BQU07QUFHMUIsWUFBSSxLQUFLLFdBQVcsVUFBYSxLQUFLLFdBQVcsTUFBTTtBQUN0RCxvQkFBVSxLQUFLLEtBQUssTUFBTTtRQUMzQjtBQUNBLGVBQU87TUFDUjtBQWNBLFVBQUksWUFBWSxTQUFTLFFBQVE7QUFDaEMsWUFBSSxDQUFDLEtBQU0sUUFBTyxJQUFJLFVBQVUsTUFBTTtBQUN0QyxZQUFJQSxLQUFJLFVBQVUsQ0FBQztBQUNuQixhQUFLLFFBQVEsT0FBTyxJQUFJO0FBQ3hCLGFBQUssUUFBUSxPQUFPLElBQUk7QUFDeEIsYUFBSyxRQUFRLE9BQU8sSUFBSTtNQUN6QjtBQUVBLGdCQUFVLFdBQWE7QUFDdkIsZ0JBQVUsT0FBYTtBQUN2QixnQkFBVSxZQUFhO0FBQ3ZCLGdCQUFVLGFBQWE7QUFDdkIsZ0JBQVUsYUFBYTtBQUN2QixnQkFBVSxRQUFhO0FBQ3ZCLGdCQUFVLFNBQWE7QUFDdkIsZ0JBQVUsWUFBYTtBQUN2QixnQkFBVSxpQkFBaUI7QUFDM0IsZ0JBQVUsZUFBaUI7QUFDM0IsZ0JBQVUsUUFBYTtBQUN2QixnQkFBVSxRQUFhO0FBQ3ZCLGdCQUFVLFdBQWE7QUFDdkIsZ0JBQVUsVUFBYTtBQUN2QixnQkFBVSxZQUFhO0FBUXZCLGdCQUFVLFVBQVUsVUFBVSxTQUFTLE9BQU87QUFDN0MsYUFBSyxPQUFPLEtBQUssa0JBQWtCLFNBQVMsQ0FBQztNQUM5QztBQU9BLGdCQUFVLFVBQVUsVUFBVSxTQUFTLEdBQUc7QUFDekMsYUFBSyxPQUFPO01BQ2I7QUFRQSxnQkFBVSxVQUFVLFVBQVUsU0FBUyxHQUFHO0FBQ3pDLGFBQUssT0FBTztNQUNiO0FBT0EsZ0JBQVUsVUFBVSxVQUFVLFdBQVc7QUFDeEMsWUFBSSxDQUFDLEtBQUssTUFBTTtBQUNmLGdCQUFNLElBQUksTUFBTSxvQ0FBb0M7UUFDckQ7QUFFQSxZQUFJLFlBQVksQ0FBQztBQUNqQixrQkFBVSxLQUFLLE1BQU0sV0FBVyxLQUFLLElBQUk7QUFDekMsa0JBQVUsS0FBSyxLQUFNLEtBQUssSUFBSTtBQUk5QixZQUFJLE1BQU0sUUFBUSxLQUFLLElBQUksR0FBRztBQUM3QixvQkFBVSxLQUFLLEtBQUssS0FBSyxNQUFNO0FBQy9CLG9CQUFVLEtBQUssTUFBTSxXQUFXLEtBQUssSUFBSTtRQUMxQyxXQUFXLE9BQU8sS0FBSyxRQUFRLFVBQVU7QUFDeEMsb0JBQVUsS0FBSyxHQUFHLEtBQUssSUFBSTtRQUM1QixXQUFXLEtBQUssU0FBUyxRQUFRLEtBQUssU0FBUyxRQUFXO0FBRXpELG9CQUFVLEtBQUssS0FBSyxLQUFLLE1BQU07QUFDL0IsY0FBSSxZQUFZLEtBQUssS0FBSyxNQUFNLEVBQUUsRUFBRSxJQUFJLFNBQVMsR0FBRTtBQUFFLG1CQUFPLEVBQUUsV0FBVyxDQUFDO1VBQUUsQ0FBQztBQUM3RSxvQkFBVSxLQUFLLE1BQU0sV0FBVyxTQUFTO1FBQzFDLE9BQU87QUFDTixvQkFBVSxLQUFLLENBQUM7UUFDakI7QUFFQSxlQUFPO01BQ1I7QUFZQSxVQUFJLFFBQVEsU0FBUyxRQUFRO0FBQzVCLFlBQUksQ0FBQyxLQUFNLFFBQU8sSUFBSSxNQUFNLE1BQU07QUFDbEMsWUFBSSxJQUFJLFVBQVUsQ0FBQztBQUNuQixhQUFLLFNBQVMsRUFBRSxVQUFVLENBQUM7TUFDNUI7QUFFQSxZQUFNLGNBQWMsQ0FBQyxJQUFNLElBQU0sS0FBTSxHQUFJO0FBQzNDLFlBQU0sWUFBYyxDQUFDLEdBQU0sS0FBTSxJQUFNLENBQUk7QUFRM0MsWUFBTSxVQUFVLFdBQVcsU0FBUyxPQUFPO0FBQzFDLGFBQUssT0FBTyxLQUFLLEtBQUs7QUFDdEIsZUFBTztNQUNSO0FBY0EsWUFBTSxVQUFVLFlBQVksTUFBTSxVQUFVLFNBQVMsU0FBUyxTQUFTLE9BQU8sTUFBTSxVQUFVO0FBQzdGLGFBQUssT0FBTyxLQUFLLElBQUksVUFBVTtVQUM5QixNQUFNLFVBQVU7VUFDaEI7VUFDQSxRQUFRLEtBQUssZ0JBQWdCLEtBQUs7VUFDbEMsUUFBUSxZQUFZO1VBQ3BCLE1BQU0sUUFBUTtRQUNmLENBQUMsQ0FBQztBQUNGLGVBQU87TUFDUjtBQWNBLFlBQU0sVUFBVSxhQUFhLE1BQU0sVUFBVSxVQUFVLFNBQVMsU0FBUyxPQUFPLE1BQU0sVUFBVTtBQUMvRixhQUFLLE9BQU8sS0FBSyxJQUFJLFVBQVU7VUFDOUIsTUFBTSxVQUFVO1VBQ2hCO1VBQ0EsUUFBUSxLQUFLLGdCQUFnQixLQUFLO1VBQ2xDLFFBQVEsWUFBWTtVQUNwQixNQUFNLFFBQVE7UUFDZixDQUFDLENBQUM7QUFDRixlQUFPO01BQ1I7QUFlQSxZQUFNLFVBQVUsVUFBVSxNQUFNLFVBQVUsT0FBTyxTQUFTLFNBQVMsT0FBTyxLQUFLLE1BQU0sVUFBVTtBQUM5RixhQUFLLE9BQU8sU0FBUyxPQUFPLE1BQU0sUUFBUTtBQUMxQyxZQUFJLEtBQUs7QUFDUixlQUFLLFFBQVEsU0FBUyxPQUFPLEtBQUssUUFBUTtRQUMzQztBQUNBLGVBQU87TUFDUjtBQWFBLFlBQU0sVUFBVSxXQUFXLE1BQU0sVUFBVSxRQUFRLFNBQVMsU0FBUyxPQUFPLEtBQUssVUFBVTtBQUMxRixZQUFJLENBQUMsTUFBTSxRQUFRLEtBQUssS0FBSyxDQUFDLE1BQU0sUUFBUTtBQUMzQyxnQkFBTSxJQUFJLE1BQU0sbUNBQW1DO1FBQ3BEO0FBQ0EsY0FBTSxRQUFRLFNBQVNFLFFBQU07QUFDNUIsZUFBSyxPQUFPLFNBQVNBLFFBQU0sR0FBRyxRQUFRO1FBQ3ZDLEdBQUcsSUFBSTtBQUNQLGNBQU0sUUFBUSxTQUFTQSxRQUFNLE9BQU87QUFDbkMsY0FBSSxVQUFVLEdBQUc7QUFDaEIsaUJBQUssUUFBUSxTQUFTQSxRQUFNLEdBQUc7VUFDaEMsT0FBTztBQUNOLGlCQUFLLFFBQVEsU0FBU0EsTUFBSTtVQUMzQjtRQUNELEdBQUcsSUFBSTtBQUNQLGVBQU87TUFDUjtBQVdBLFlBQU0sVUFBVSxnQkFBZ0IsTUFBTSxVQUFVLGFBQWEsU0FBUyxTQUFTLFlBQVksTUFBTTtBQUNoRyxhQUFLLE9BQU8sS0FBSyxJQUFJLFVBQVU7VUFDOUIsTUFBTSxVQUFVO1VBQ2hCO1VBQ0EsUUFBUTtVQUNSLE1BQU0sUUFBUTtRQUNmLENBQUMsQ0FBQztBQUNGLGVBQU87TUFDUjtBQVVBLFlBQU0sVUFBVSxXQUFXLE1BQU0sVUFBVSxRQUFRLFNBQVMsS0FBSyxNQUFNO0FBQ3RFLGFBQUssT0FBTyxLQUFLLElBQUksVUFBVTtVQUM5QixNQUFNLFVBQVU7VUFDaEIsTUFBTSxLQUFLLFlBQVksR0FBRztVQUMxQixNQUFNLFFBQVE7UUFDZixDQUFDLENBQUM7QUFDRixlQUFPO01BQ1I7QUFPQSxZQUFNLFVBQVUsVUFBVSxXQUFXO0FBQ3BDLFlBQUksY0FBYztBQUNsQixZQUFJLGFBQWEsQ0FBQztBQUNsQixZQUFJLGFBQWEsTUFBTTtBQUN2QixZQUFJLFdBQWEsTUFBTTtBQUV2QixZQUFJLGdCQUFnQixTQUFTLE9BQU87QUFDbkMsY0FBSSxRQUFRLE1BQU0sUUFBUTtBQUMxQix5QkFBZSxNQUFNO0FBQ3JCLHFCQUFXLEtBQUssTUFBTSxZQUFZLEtBQUs7UUFDeEM7QUFFQSxhQUFLLE9BQU8sUUFBUSxhQUFhO0FBSWpDLHVCQUFlLFNBQVM7QUFJeEIsWUFBSSxjQUFjLEtBQUssVUFBVSxZQUFZLFNBQVMsRUFBRSxHQUFHLENBQUM7QUFFNUQsZUFBTyxXQUFXLE9BQU8sYUFBYSxZQUFZLFFBQVE7TUFDM0Q7QUFjQSxVQUFJLE9BQU8sU0FBUyxRQUFPO0FBQzFCLFlBQUksQ0FBQyxLQUFNLFFBQU8sSUFBSSxLQUFLLE1BQU07QUFFakMsWUFBSSxJQUFJLFVBQVUsQ0FBQztBQUNuQixZQUFJLEVBQUUsT0FBTztBQUNaLGNBQUksT0FBTyxFQUFFLFVBQVUsVUFBVTtBQUNoQyxrQkFBTSxJQUFJLE1BQU0sa0NBQWtDO0FBQ2xEO1VBQ0Q7QUFDQSxjQUFJLEVBQUUsU0FBUyxLQUFLLEVBQUUsU0FBVSxLQUFLLE1BQU8sRUFBRSxRQUFRLE1BQU0sR0FBRztBQUM5RCxrQkFBTSxJQUFJLE1BQU0sd0RBQXdEO0FBQ3hFO1VBQ0Q7UUFDRDtBQUVBLGFBQUssUUFBUSxFQUFFLFNBQVM7QUFDeEIsYUFBSyxTQUFTLEVBQUUsVUFBVSxDQUFDO01BQzVCO0FBRUEsV0FBSyxjQUFrQjtBQUN2QixXQUFLLGlCQUFrQjtBQUN2QixXQUFLLFlBQWtCO0FBQ3ZCLFdBQUssWUFBa0I7QUFPdkIsV0FBSyxVQUFVLFdBQVcsU0FBUyxPQUFPO0FBQ3pDLFlBQUksT0FBTztBQUNWLGVBQUssT0FBTyxLQUFLLEtBQUs7QUFDdEIsaUJBQU87UUFDUixPQUFPO0FBQ04sa0JBQVEsSUFBSSxNQUFNO0FBQ2xCLGVBQUssT0FBTyxLQUFLLEtBQUs7QUFDdEIsaUJBQU87UUFDUjtNQUNEO0FBT0EsV0FBSyxVQUFVLFVBQVUsV0FBVztBQUNuQyxZQUFJLGFBQWEsS0FBSyxPQUFPLE9BQU8sU0FBUyxFQUFFO0FBRy9DLFlBQUksUUFBUSxLQUFLLGNBQWMsS0FBSztBQUdwQyxZQUFJLFNBQVMsWUFBWSxFQUFFLElBQUksR0FBRztBQUNqQyxtQkFBUyxLQUFLO1FBQ2YsT0FBTztBQUNOLG1CQUFTLEtBQUs7UUFDZjtBQUdBLGlCQUFTLEtBQUssVUFBVSxLQUFLLFVBQVUsWUFBWSxDQUFDLENBQUM7QUFFckQsaUJBQVMsT0FBTyxhQUFjLEtBQUssUUFBTSxLQUFPLEtBQUssUUFBTSxHQUFHO0FBQUU7QUFHaEUsYUFBSyxPQUFPLFFBQVEsU0FBUyxPQUFPO0FBQ25DLG1CQUFTLEtBQUssVUFBVSxNQUFNLFFBQVEsQ0FBQztRQUN4QyxDQUFDO0FBRUQsZUFBTztNQUNSO0FBTUEsZUFBUyxPQUFPO0FBQ2hCLGVBQVMsT0FBTztBQUNoQixlQUFTLFFBQVE7QUFDakIsZUFBUyxRQUFRO0FBQ2pCLGVBQVMsWUFBWTtJQUV0QixHQUFJLElBQUs7QUFFVCxRQUFJLE9BQU8sVUFBVSxlQUFlLFdBQVcsTUFBTTtBQUNwRCxhQUFPLFVBQVU7SUFDbEIsV0FBVyxPQUFPLFdBQVcsZUFBZSxZQUFZLE1BQU07QUFDN0QsZ0JBQVU7SUFDWCxPQUFPO0FBQ04sY0FBSyxPQUFPO0lBQ2I7RUFBQTtBQUFBLENBQUE7QUN6cUJPLElBQUEsZ0JBQUFVLFlBQUE7O2FBQVMsUUFBUSxPQUFPO0FBQzdCLGFBQU8sTUFBTSxPQUFPLENBQUMsTUFBTSxRQUFRLEtBQUssT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3pEO0FBRU8sYUFBUyxPQUFPLE9BQU8sT0FBTztBQUNuQyxZQUFNLE1BQU0sQ0FBQztBQUViLGFBQU8sT0FBTztBQUNaLFlBQUksS0FBSyxLQUFLO0FBQ2QsaUJBQVM7TUFDWDtBQUVBLGFBQU87SUFDVDtBQUVPLGFBQVMsTUFBTSxLQUFLLEtBQUssTUFBTTtBQUNwQyxZQUFNLE1BQU0sQ0FBQztBQUViLFVBQUksQ0FBQyxNQUFNO0FBQ1QsaUJBQVMsSUFBSSxLQUFLLEtBQUssS0FBSyxLQUFLLEdBQUc7QUFDbEMsY0FBSSxLQUFLLENBQUM7UUFDWjtNQUNGLE9BQU87QUFDTCxjQUFNLFFBQVEsTUFBTSxPQUFPO0FBRTNCLGlCQUFTLElBQUksS0FBSyxLQUFLLEtBQUssS0FBSyxNQUFNO0FBQ3JDLGNBQUksS0FBSyxDQUFDO1FBQ1o7TUFDRjtBQUVBLGFBQU87SUFDVDtBQUVPLGFBQVMsTUFBTSxPQUFPO0FBQzNCLFVBQUksQ0FBQyxTQUFTLE9BQU8sVUFBVSxTQUFVLFFBQU87QUFDaEQsVUFBSSxNQUFNLFFBQVEsS0FBSyxFQUFHLFFBQU8sTUFBTSxJQUFJLEtBQUs7QUFFaEQsWUFBTSxPQUFPLENBQUM7QUFFZCxhQUFPLEtBQUssS0FBSyxFQUFFLFFBQVEsQ0FBQSxRQUFPO0FBQ2hDLGFBQUssR0FBRyxJQUFJLE1BQU0sTUFBTSxHQUFHLENBQUM7TUFDOUIsQ0FBQztBQUVELGFBQU87SUFDVDtBQUVPLGFBQVMsSUFBSSxHQUFHLEdBQUcsSUFBSTtBQUM1QixZQUFNLE1BQU0sS0FBSyxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU07QUFFdkMsZUFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLEtBQUssR0FBRztBQUMvQixZQUFJLE9BQU8sRUFBRSxDQUFDLE1BQU0sZUFBZSxPQUFPLEVBQUUsQ0FBQyxNQUFNLFlBQWEsSUFBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztNQUMvRTtJQUNGOzs7O0FDcERBLElBQUErQixnQkFBQS9CLFlBQUE7RUFBQSxpQ0FBQSxTQUFBO0FBQUEsS0FBQyxNQUFJO0FBQUM7QUFBYSxVQUFJLElBQUUsRUFBQyxLQUFJLENBQUFnQyxPQUFHO0FBQUNBLFdBQUUsVUFBUSxLQUFLLE1BQU0sNjJFQUE2MkU7TUFBQyxHQUFFLEtBQUksQ0FBQUEsT0FBRztBQUFDQSxXQUFFLFVBQVEsS0FBSyxNQUFNLDg0RkFBbTVGO01BQUMsRUFBQyxHQUFFLElBQUUsQ0FBQztBQUFFLGVBQVMsRUFBRUMsSUFBRTtBQUFDLFlBQUlDLEtBQUUsRUFBRUQsRUFBQztBQUFFLFlBQUcsV0FBU0MsR0FBRSxRQUFPQSxHQUFFO0FBQVEsWUFBSUMsS0FBRSxFQUFFRixFQUFDLElBQUUsRUFBQyxTQUFRLENBQUMsRUFBQztBQUFFLGVBQU8sRUFBRUEsRUFBQyxFQUFFRSxJQUFFQSxHQUFFLFNBQVEsQ0FBQyxHQUFFQSxHQUFFO01BQU87QUFBQyxRQUFFLElBQUUsQ0FBQ0gsSUFBRUksT0FBSTtBQUFDLGlCQUFRSCxNQUFLRyxHQUFFLEdBQUUsRUFBRUEsSUFBRUgsRUFBQyxLQUFHLENBQUMsRUFBRSxFQUFFRCxJQUFFQyxFQUFDLEtBQUcsT0FBTyxlQUFlRCxJQUFFQyxJQUFFLEVBQUMsWUFBVyxNQUFHLEtBQUlHLEdBQUVILEVBQUMsRUFBQyxDQUFDO01BQUMsR0FBRSxFQUFFLElBQUUsQ0FBQ0QsSUFBRUksT0FBSSxPQUFPLFVBQVUsZUFBZSxLQUFLSixJQUFFSSxFQUFDLEdBQUUsRUFBRSxJQUFFLENBQUFKLE9BQUc7QUFBQyx1QkFBYSxPQUFPLFVBQVEsT0FBTyxlQUFhLE9BQU8sZUFBZUEsSUFBRSxPQUFPLGFBQVksRUFBQyxPQUFNLFNBQVEsQ0FBQyxHQUFFLE9BQU8sZUFBZUEsSUFBRSxjQUFhLEVBQUMsT0FBTSxLQUFFLENBQUM7TUFBQztBQUFFLFVBQUksSUFBRSxDQUFDO0FBQUUsT0FBQyxNQUFJO0FBQUMsVUFBRSxFQUFFLENBQUMsR0FBRSxFQUFFLEVBQUUsR0FBRSxFQUFDLE9BQU0sTUFBSTlDLEtBQUUsUUFBTyxNQUFJLEdBQUUsYUFBWSxNQUFJaUQsSUFBRSxPQUFNLE1BQUksR0FBRSxRQUFPLE1BQUksRUFBQyxDQUFDO0FBQUUsWUFBSUgsS0FBRSxFQUFFLEdBQUcsR0FBRUksS0FBRSxFQUFFLEdBQUcsR0FBRUYsS0FBRSxTQUFTN0IsSUFBRTtBQUFDLGNBQUk0QixLQUFFNUIsR0FBRSxPQUFNNkIsS0FBRTdCLEdBQUUsT0FBTThCLEtBQUVGLE1BQUdDLElBQUVHLEtBQUVKLEtBQUUsVUFBUTtBQUFRLGNBQUcsWUFBVSxPQUFPRSxHQUFFLE9BQU0sSUFBSSxNQUFNLEdBQUcsT0FBT0EsSUFBRSw0QkFBNEIsRUFBRSxPQUFPRSxFQUFDLENBQUM7QUFBRSxjQUFJQyxJQUFFcEQsSUFBRXFELEtBQUVKLEdBQUUsUUFBUSxHQUFHO0FBQUUsaUJBQUtJLE1BQUdELEtBQUVILEdBQUUsTUFBTSxDQUFDLEdBQUVqRCxLQUFFaUQsR0FBRSxDQUFDLEdBQUUsUUFBTUEsR0FBRSxDQUFDLEtBQUcsUUFBTUEsR0FBRSxDQUFDLE1BQUlHLEtBQUVILEdBQUUsTUFBTSxDQUFDLEdBQUVqRCxNQUFHaUQsR0FBRSxDQUFDLE9BQUtHLEtBQUVILEdBQUUsTUFBTSxPQUFLSSxLQUFFLElBQUVBLEtBQUUsQ0FBQyxHQUFFckQsS0FBRWlELEdBQUUsTUFBTSxHQUFFSSxFQUFDO0FBQUcsY0FBSSxLQUFFLFNBQVNQLElBQUU7QUFBQyxtQkFBTSxFQUFDLE1BQUssTUFBSyxNQUFLLE1BQUssTUFBSyxNQUFLLE1BQUssTUFBSyxNQUFLLEtBQUksRUFBRUEsR0FBRSxZQUFZLENBQUMsS0FBR0EsR0FBRSxPQUFPLENBQUMsRUFBRSxZQUFZLElBQUVBLEdBQUUsTUFBTSxDQUFDO1VBQUMsR0FBRTlDLEdBQUUsUUFBUSxPQUFNLEVBQUUsQ0FBQyxHQUFFLElBQUUsT0FBS0EsR0FBRSxRQUFRLE9BQU0sRUFBRSxJQUFFLENBQUNBLEdBQUUsUUFBUSxPQUFNLEVBQUUsSUFBRTtBQUFFLGNBQUcsTUFBTSxDQUFDLEVBQUUsT0FBTSxJQUFJLE1BQU0sR0FBRyxPQUFPQSxHQUFFLENBQUMsR0FBRSwrQkFBK0IsQ0FBQztBQUFFLGNBQUcsQ0FBQzhDLEdBQUVNLEVBQUMsS0FBRyxDQUFDRixHQUFFRSxFQUFDLEVBQUUsT0FBTSxJQUFJLE1BQU0sR0FBRyxPQUFPSCxJQUFFLGtCQUFrQixFQUFFLE9BQU9FLEVBQUMsQ0FBQztBQUFFLG1CQUFRLEtBQUUsU0FBU0wsSUFBRUksSUFBRTtBQUFDLGdCQUFJL0IsS0FBRSxDQUFDLEtBQUksTUFBSyxLQUFJLE1BQUssS0FBSSxLQUFJLE1BQUssS0FBSSxNQUFLLEtBQUksTUFBSyxHQUFHLEdBQUU0QixLQUFFNUIsR0FBRSxLQUFLLFNBQVMyQixJQUFFO0FBQUMscUJBQU9BLEtBQUVJO1lBQUMsRUFBRSxHQUFFRixLQUFFN0IsR0FBRSxLQUFLLFNBQVMyQixJQUFFO0FBQUMscUJBQU9BLE1BQUdJLEtBQUU7WUFBRSxFQUFFLEdBQUVELEtBQUVGLEdBQUUsT0FBT0MsRUFBQztBQUFFLG1CQUFPQyxHQUFFLE1BQU1BLEdBQUUsUUFBUUgsS0FBRUksRUFBQyxDQUFDO1VBQUMsR0FBRSxHQUFFLENBQUMsR0FBRSxJQUFFLENBQUMsR0FBRWhELEtBQUUsR0FBRSxJQUFFLEdBQUUsSUFBRTZDLEtBQUVELEtBQUVJLElBQUVoRCxLQUFFLEVBQUVrRCxFQUFDLEVBQUUsU0FBUSxTQUFNLEVBQUVBLEVBQUMsRUFBRWxELEVBQUMsS0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsR0FBRUEsTUFBSTtBQUFJLGlCQUFPO1FBQUMsR0FBRStDLEtBQUUsU0FBU0gsSUFBRTtBQUFDLGNBQUlJLElBQUUvQixJQUFFNEIsS0FBRSxTQUFRRSxLQUFFO0FBQUUsaUJBQU9ILEdBQUUsU0FBU0MsRUFBQyxLQUFHNUIsS0FBRTRCLElBQUVHLEtBQUVKLEdBQUUsTUFBTSxHQUFFQSxHQUFFLFFBQVFDLEVBQUMsQ0FBQyxNQUFJRyxLQUFFSixHQUFFLENBQUMsR0FBRTNCLEtBQUUyQixHQUFFLE1BQU0sQ0FBQyxHQUFFLFFBQU1BLEdBQUUsQ0FBQyxLQUFHLFFBQU1BLEdBQUUsQ0FBQyxNQUFJSSxNQUFHSixHQUFFLENBQUMsR0FBRTNCLEtBQUUyQixHQUFFLE1BQU0sQ0FBQyxLQUFJQSxHQUFFLFNBQVMsR0FBRyxNQUFJRyxLQUFFLENBQUNILEdBQUUsTUFBTSxHQUFHLEVBQUUsQ0FBQyxHQUFFM0IsS0FBRUEsR0FBRSxNQUFNLEdBQUVBLEdBQUUsUUFBUSxHQUFHLENBQUMsSUFBRzZCLEdBQUUsRUFBQyxPQUFNRSxLQUFFRCxLQUFFLE1BQUk5QixHQUFDLENBQUM7UUFBQyxHQUFFLElBQUUsV0FBVTtBQUFDLGlCQUFPLE9BQU8sS0FBSytCLEVBQUM7UUFBQyxHQUFFLElBQUUsV0FBVTtBQUFDLGlCQUFPLE9BQU8sS0FBS0osRUFBQztRQUFDLEdBQUU5QyxNQUFFLFNBQVM4QyxJQUFFO0FBQUMsaUJBQU9FLEdBQUUsRUFBQyxPQUFNRixHQUFDLENBQUM7UUFBQyxHQUFFLElBQUUsU0FBU0EsSUFBRTtBQUFDLGlCQUFPRSxHQUFFLEVBQUMsT0FBTUYsR0FBQyxDQUFDO1FBQUM7TUFBQyxHQUFHO0FBQUUsVUFBSSxJQUFFO0FBQVEsZUFBUSxLQUFLLEVBQUUsR0FBRSxDQUFDLElBQUUsRUFBRSxDQUFDO0FBQUUsUUFBRSxjQUFZLE9BQU8sZUFBZSxHQUFFLGNBQWEsRUFBQyxPQUFNLEtBQUUsQ0FBQztJQUFDLEdBQUc7RUFBQTtBQUFBLENBQUE7QUNBaHpPLElBQUEsbUJBQUFoQyxZQUFBOztRQUFBLEVBQUEsWUFBUyxJQUFBK0IsY0FBQTtBQUVGLFFBQU0sZUFBZTtBQUNyQixRQUFNLGFBQWE7QUFDbkIsUUFBTSxZQUFZO0FBQ2xCLFFBQU0sV0FBVztBQUNqQixRQUFNLFVBQVU7QUFDaEIsUUFBTSxVQUFVO0FBQ2hCLFFBQU0sVUFBVTtBQUNoQixRQUFNLFVBQVU7QUFFdkIsUUFBTSxRQUFRLENBQUM7QUFFUixhQUFTLE1BQU0sT0FBTztBQUMzQixVQUFJLE9BQU8sQ0FBQztBQUNaLFVBQUk7QUFDRixlQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsZUFBTyxLQUFLLFFBQVEsV0FBVyxLQUFLO0FBQ3BDLGVBQU8sS0FBSyxRQUFRLFVBQVUsR0FBRztBQUNqQyxlQUFPLEtBQUssUUFBUSxVQUFVLEdBQUc7QUFDakMsZUFBTyxLQUFLLE1BQU0sSUFBSTtNQUN4QixTQUFTLEdBQUc7TUFFWjtBQUNBLGFBQU87SUFDVDtBQUVPLGFBQVMsTUFBTSxPQUFPO0FBQzNCLFVBQUksQ0FBQyxNQUFNLEtBQUssR0FBRztBQUNqQixZQUFJLE1BQU0sU0FBUyxHQUFHLEdBQUc7QUFDdkIsZ0JBQU0sS0FBSyxJQUFJLE1BQU0sV0FBVyxJQUFJLEtBQUssRUFBRTtRQUM3QyxXQUFXLE1BQU0sU0FBUyxHQUFHLEdBQUc7QUFDOUIsZ0JBQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxNQUFNLE1BQU0sR0FBRztBQUU5QixnQkFBTSxLQUFLLElBQUksSUFBSTtRQUNyQixXQUFXLE1BQU0sU0FBUyxHQUFHLEdBQUc7QUFDOUIsZ0JBQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxNQUFNLE1BQU0sR0FBRztBQUU5QixnQkFBTSxLQUFLLElBQUksSUFBSTtRQUNyQixPQUFPO0FBQ0wsZ0JBQU0sS0FBSyxJQUFJLFdBQVcsS0FBSztRQUNqQztNQUNGO0FBQ0EsYUFBTyxNQUFNLEtBQUs7SUFDcEI7QUFFTyxhQUFTLFNBQVMsSUFBSSxPQUFPO0FBQ2xDLFVBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxLQUFLLEdBQUc7QUFDN0IsY0FBTSxHQUFHLFNBQVMsS0FBSyxJQUFJLEdBQUcsS0FBSyxLQUFLO01BQzFDO0FBQ0EsYUFBTyxNQUFNLEdBQUcsU0FBUyxLQUFLO0lBQ2hDO0FBRU8sYUFBUyxjQUFjLE9BQU87QUFDbkMsYUFBTyxTQUFTLFNBQVMsS0FBSztJQUNoQztBQUVPLGFBQVMsVUFBVSxPQUFPO0FBQy9CLGFBQU8sU0FBUyxZQUFZLEtBQUs7SUFDbkM7QUFFTyxhQUFTLFNBQVMsT0FBTztBQUM5QixhQUFPLFNBQVMsV0FBVyxLQUFLO0lBQ2xDO0FBRU8sYUFBUyxRQUFRLE9BQU87QUFDN0IsYUFBTyxTQUFTLFVBQVUsS0FBSztJQUNqQztBQUVPLGFBQVMsT0FBTyxPQUFPO0FBQzVCLGFBQU8sU0FBUyxTQUFTLEtBQUs7SUFDaEM7QUFFTyxhQUFTLE9BQU8sT0FBTztBQUM1QixhQUFPLFNBQVMsU0FBUyxLQUFLO0lBQ2hDO0FBRU8sYUFBUyxRQUFRLE9BQU87QUFDN0IsWUFBTSxNQUFNLElBQUksS0FBSztBQUNyQixVQUFJLENBQUMsTUFBTSxHQUFHLEdBQUc7QUFDZixZQUFJLE9BQU8sS0FBSyxFQUFHLE9BQU0sR0FBRyxJQUFJO2lCQUN2QixRQUFRLEtBQUssRUFBRyxPQUFNLEdBQUcsSUFBSTtpQkFDN0IsVUFBVSxLQUFLLEVBQUcsT0FBTSxHQUFHLElBQUk7aUJBQy9CLE9BQU8sS0FBSyxFQUFHLE9BQU0sR0FBRyxJQUFJO2lCQUM1QixTQUFTLEtBQUssRUFBRyxPQUFNLEdBQUcsSUFBSTtZQUNsQyxPQUFNLEdBQUcsSUFBSTtNQUNwQjtBQUNBLGFBQU8sTUFBTSxHQUFHO0lBQ2xCO0FBRU8sYUFBUyxVQUFVLFlBQVk7QUFDcEMsVUFBSSxDQUFDLGNBQWMsT0FBTyxlQUFlLFVBQVU7QUFDakQsY0FBTSxJQUFJLE1BQU0sb0NBQW9DLFVBQVUsR0FBRztNQUNuRTtBQUVBLFVBQUksTUFBTSxJQUFJLFVBQVUsRUFBRSxFQUFHLFFBQU8sTUFBTSxJQUFJLFVBQVUsRUFBRTtBQUUxRCxZQUFNLFNBQVMsV0FBVyxNQUFNLEtBQUs7QUFFckMsVUFBSSxDQUFDLE9BQU8sUUFBUTtBQUNsQixjQUFNLElBQUksTUFBTSx3Q0FBd0MsVUFBVSxHQUFHO01BQ3ZFO0FBRUEsWUFBTSxNQUFNLENBQUM7QUFDYixZQUFNLFFBQVEsQ0FBQztBQUVmLGVBQVMsSUFBSSxNQUFNLE9BQU87QUFDeEIsY0FBTSxPQUFPLEVBQUUsTUFBTSxNQUFNO0FBRTNCLFlBQUksU0FBUyxZQUFZLE9BQU8sVUFBVSxVQUFVO0FBQ2xELGVBQUssUUFBUSxPQUFPLFVBQVUsV0FBVyxNQUFNLEtBQUssSUFBSTtRQUMxRDtBQUVBLFlBQUksU0FBUyxXQUFXLE9BQU8sVUFBVSxVQUFVO0FBQ2pELGVBQUssUUFBUSxZQUFZLE1BQU0sUUFBUSxTQUFTLEVBQUUsQ0FBQztBQUVuRCxjQUFJLE1BQU0sU0FBUyxJQUFJLEdBQUc7QUFDeEIsaUJBQUssU0FBUztVQUNoQjtRQUNGO0FBRUEsWUFBSSxTQUFTLFdBQVcsTUFBTSxRQUFRLEdBQUcsSUFBSSxJQUFJO0FBQy9DLGdCQUFNLElBQUksTUFBTSxNQUFNLEdBQUc7QUFFekIsY0FBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsS0FBSyxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUk7QUFDdkMsa0JBQU0sSUFBSSxNQUFNLCtCQUErQixJQUFJLFlBQVksS0FBSyxHQUFHO1VBQ3pFO0FBRUEsZUFBSyxRQUFRLFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBRTtBQUM5QixlQUFLLFNBQVMsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFO0FBQy9CLGVBQUssT0FBTztRQUNkO0FBRUEsWUFBSSxLQUFLLElBQUk7TUFDZjtBQUVBLGFBQU8sT0FBTyxDQUFDLE1BQU0sS0FBSyxNQUFNO0FBQzlCLFlBQUk7QUFFSixjQUFNLE9BQU8sT0FBTyxJQUFJLENBQUM7QUFDekIsY0FBTSxPQUFPLElBQUksSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDO0FBRXJDLFlBQUksYUFBYSxLQUFLLEdBQUcsR0FBRztBQUMxQixjQUFJLFNBQVMsSUFBSSxNQUFNLFlBQVksQ0FBQztBQUNwQyxpQkFBTztRQUNUO0FBRUEsWUFBSSxPQUFPLFFBQVEsYUFDaEIsSUFBSSxTQUFTLEdBQUcsS0FBSyxJQUFJLFFBQVEsR0FBRyxJQUFJLEtBQ3JDLElBQUksU0FBUyxHQUFHLEtBQUssSUFBSSxRQUFRLEdBQUcsSUFBSSxLQUN4QyxJQUFJLFNBQVMsR0FBRyxLQUFLLElBQUksUUFBUSxHQUFHLElBQUksSUFDM0M7QUFDRCxjQUFJLFVBQVUsTUFBTSxHQUFHLENBQUM7QUFDeEIsaUJBQU87UUFDVDtBQUVBLFlBQUksSUFBSSxRQUFRLEdBQUcsSUFBSSxJQUFJO0FBQ3pCLGNBQUksUUFBUSxLQUFLO0FBQ2YsZ0JBQUksQ0FBQyxLQUFLLE1BQU07QUFDZCxvQkFBTSxJQUFJLE1BQU0sd0NBQXdDLE9BQU8sTUFBTSxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxHQUFHO1lBQ3pGO0FBRUEsaUJBQUssU0FBUyxLQUFLLFVBQVU7QUFDN0IsaUJBQUssVUFBVTtVQUNqQixPQUFPO0FBQ0wsZ0JBQUksU0FBUyxHQUFHO1VBQ2xCO0FBRUEsaUJBQU87UUFDVDtBQUVBLFlBQUksY0FBYyxHQUFHLEdBQUc7QUFDdEIsZUFBSyxTQUFTLElBQUksR0FBRztBQUNyQixpQkFBTztRQUNUO0FBRUEsWUFBSSxJQUFJLE9BQU8sTUFBTSxLQUFLO0FBQ3hCLGNBQUksV0FBVyxHQUFHO0FBQ2xCLGlCQUFPO1FBQ1Q7QUFFQSxZQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsR0FBRyxLQUFLLE9BQU8sR0FBRyxLQUFLLFNBQVMsR0FBRyxHQUFHO0FBQy9ELGdCQUFNLEtBQUssR0FBRztBQUVkLGNBQ0UsQ0FBQyxRQUNFLE1BQU0sV0FBVyxLQUNqQixFQUFFLE9BQU8sSUFBSSxLQUFLLE9BQU8sSUFBSSxLQUFLLFNBQVMsSUFBSSxJQUNsRDtBQUNBLGtCQUFNLE1BQU0sTUFBTSxPQUFPLEdBQUcsTUFBTSxNQUFNO0FBQ3hDLGtCQUFNLE9BQU8sSUFBSSxDQUFDO0FBRWxCLGdCQUFJLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLGdCQUFJLFNBQVMsSUFBSSxDQUFDO0FBRWxCLGdCQUFJLENBQUMsVUFBVSxTQUFTLElBQUksR0FBRztBQUM3Qix1QkFBUztBQUNULHFCQUFPO1lBQ1Q7QUFFQSxnQkFDRSxLQUFLLFNBQVMsS0FDWCxPQUFPLElBQUksTUFDVixPQUFPLElBQUksS0FBSyxTQUFTLE1BQU0sSUFDbkM7QUFDQSxrQkFBSSxRQUFRLElBQUksS0FBSyxHQUFHLENBQUM7QUFDekIscUJBQU87WUFDVDtBQUVBLGdCQUFJLFFBQVEsQ0FBQSxNQUFLO0FBQ2Ysa0JBQUksRUFBRSxTQUFTLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxRQUFRLENBQUMsSUFBSSxRQUFRLENBQUM7WUFDekQsQ0FBQztVQUNIO0FBQ0EsaUJBQU87UUFDVDtBQUVBLFlBQUksT0FBTyxRQUFRLFlBQVksSUFBSSxRQUFRLElBQUksSUFBSSxJQUFJO0FBQ3JELGdCQUFNLFFBQVEsSUFBSSxNQUFNLElBQUk7QUFDNUIsZ0JBQU0sTUFBTSxNQUFNLENBQUMsS0FBSztBQUN4QixnQkFBTSxNQUFNLE1BQU0sQ0FBQyxLQUFLO0FBRXhCLGlCQUFPO0FBQ1AsZ0JBQU0sQ0FBQyxLQUFLLEdBQUc7UUFDakI7QUFFQSxZQUFJLE9BQU8sUUFBUSxhQUFhLElBQUksT0FBTyxNQUFNLE9BQU8sSUFBSSxPQUFPLE1BQU0sTUFBTTtBQUM3RSxnQkFBTSxXQUFXLElBQUksT0FBTyxNQUFNLE1BQU0sV0FBVztBQUNuRCxnQkFBTSxTQUFTLElBQUksT0FBTyxDQUFDO0FBRTNCLGNBQUksQ0FBQyxTQUFTLE1BQU0sR0FBRztBQUNyQixrQkFBTSxJQUFJLE1BQU0sbUNBQW1DLFFBQVEsWUFBWSxPQUFPLE1BQU0sR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUc7VUFDL0c7QUFFQSxjQUFJLFVBQVUsV0FBVyxNQUFNLENBQUM7QUFDaEMsaUJBQU87UUFDVDtBQUVBLFlBQUksQ0FBQyxRQUFRLFFBQVEsR0FBRyxNQUFNLFdBQVcsTUFBTSxRQUFRLEtBQUssS0FBSyxHQUFHO0FBQ2xFLGVBQUssTUFBTSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsS0FBSztBQUNqQyxlQUFLLE1BQU0sQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLElBQUksTUFBTTtBQUN2QyxlQUFLLE1BQU0sQ0FBQyxLQUFLO0FBQ2pCLGlCQUFPO1FBQ1Q7QUFFQSxZQUFJLFFBQVEsUUFBUSxHQUFHLEdBQUcsT0FBTyxRQUFRLFlBQVksU0FBUyxHQUFHLElBQUksU0FBUyxLQUFLLEVBQUUsSUFBSSxHQUFHO0FBQzVGLGVBQU87TUFDVCxHQUFHLElBQUk7QUFFUCxZQUFNLElBQUksVUFBVSxFQUFFLElBQUk7QUFDMUIsYUFBTztJQUNUOzs7O0FDMVBBLElBK0ZhO0FBL0ZiLElBcUdhO0FBckdiLElBQUEsYUFBQXZDLE9BQUE7RUFBQSwyQ0FBQTtBQStGYSxjQUFVLENBQUMsUUFDdEIsSUFBSSxTQUFTLElBQUksSUFBSSxLQUFLLE1BQU0sS0FBSyxPQUFPLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQztBQUs1QyxXQUFPLE1BQU0sQ0FBQyxDQUFDLEtBQUssTUFBTSxLQUFLLE9BQU8sQ0FBQztFQUFBO0FBQUEsQ0FBQTtBQ3JHcEQsSUFBQSxzQkFBQSxDQUFBO0FBQUFFLFVBQUEscUJBQUE7RUFBQSxpQkFBQSxNQUFBO0VBQUEsd0JBQUEsTUFBQTtFQUFBLGFBQUEsTUFBQTtBQUFBLENBQUE7QUFBQSxJQUFBO0FBQUEsSUFVYTtBQVZiLElBNEJNO0FBNUJOLElBMkNNO0FBM0NOLElBd0VhO0FBeEViLElBd0dNO0FBeEdOLElBaUtNO0FBaktOLElBa0tNO0FBbEtOLElBMkthO0FBM0tiLElBQUEsbUJBQUFGLE9BQUE7RUFBQSxpREFBQTtBQUFBLHVCQUFzQmdELFNBQUFULGNBQUEsQ0FBQTtBQUN0QixlQUFBO0FBU2Esc0JBQWtCLENBQUMsU0FBaUI7QUFDL0MsWUFBTSxZQUEyQjtRQUMvQixRQUFRLENBQUMsS0FBSyxNQUFNLE9BQU8sTUFBTSxLQUFLLE1BQU0sU0FBTTtRQUNsRCxRQUFRLENBQUMsS0FBSyxNQUFNLE9BQU8sTUFBTSxLQUFLLFVBQU8sS0FBSztRQUNsRCxVQUFVLENBQUMsS0FBSyxNQUFNLE9BQU8sTUFBTSxTQUFNLE1BQU0sS0FBSztRQUNwRCxRQUFRLENBQUMsS0FBSyxNQUFNLE9BQU8sVUFBTyxLQUFLLE1BQU0sS0FBSztRQUNsRCxZQUFZLENBQUMsS0FBSyxNQUFNLFdBQVEsTUFBTSxLQUFLLE1BQU0sS0FBSztRQUN0RCxTQUFTLENBQUMsS0FBSyxVQUFPLE9BQU8sTUFBTSxLQUFLLE1BQU0sS0FBSztRQUNuRCxTQUFTLENBQUMsU0FBTSxNQUFNLE9BQU8sTUFBTSxLQUFLLE1BQU0sS0FBSztRQUNuRCxpQkFBaUIsQ0FBQyxLQUFLLE1BQU0sUUFBUSxNQUFNLEtBQUssVUFBTyxTQUFNO1FBQzdELGtCQUFrQixDQUFDLEtBQUssVUFBTyxRQUFRLE1BQU0sS0FBSyxNQUFNLFNBQU07TUFDaEU7QUFDQSxnQkFBVSxRQUFRLFVBQVU7QUFDNUIsZ0JBQVUsUUFBUSxVQUFVO0FBRTVCLGFBQU8sVUFBVSxJQUFJLEtBQUssQ0FBQztJQUM3QjtBQUVNLGtCQUEyQjtNQUMvQixHQUFHO01BQ0gsSUFBSTtNQUNKLEtBQUs7TUFDTCxJQUFJO01BQ0osR0FBRztNQUNILElBQUk7TUFDSixLQUFLO0lBQ1A7QUFPTSxtQkFBZSxDQUFDLFVBQTBCO0FBRTlDLFlBQU0sTUFBTSxNQUFNLFFBQVEsT0FBTyxFQUFFO0FBQ25DLFVBQUksU0FBUztBQUViLFVBQUksSUFBSSxZQUFZLE1BQU0sS0FBSztBQUM3QixpQkFBUztNQUNYO0FBQ0EsVUFBSSxNQUFNLFFBQVEsTUFBRyxJQUFJLElBQUk7QUFDM0IsZUFBTyxTQUFTO01BQ2xCO0FBQ0EsVUFBSSxNQUFNLFFBQVEsR0FBRyxJQUFJLElBQUk7QUFDM0IsZUFBTyxTQUFTO01BQ2xCO0FBRUEsVUFBSSxNQUFNLFFBQVEsR0FBRyxJQUFJLElBQUk7QUFDM0IsZUFBTyxXQUFXLE1BQU0sU0FBUztNQUNuQztBQUVBLGFBQU87SUFDVDtBQVNhLDZCQUF5QixDQUNwQyxpQkFDQSxpQkFDVztBQUdYLFlBQU0scUJBQXFCLGdCQUFnQixNQUFNLEdBQUc7QUFDcEQsVUFBSSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsTUFBTSxJQUFJLEdBQUc7QUFDdEMsMkJBQW1CLENBQUMsS0FBSztBQUN6QiwwQkFBa0IsbUJBQW1CLEtBQUssR0FBRztNQUMvQztBQUdBLFlBQU0sUUFBQSxHQUFPLGlCQUFBLE9BQU0sZUFBZTtBQUNsQyxZQUFNLGtCQUFrQixhQUFhLFFBQVEsYUFBYSxHQUFHLEVBQUUsTUFBTSxHQUFHO0FBR3hFLFlBQU0sY0FBYyxnQkFBZ0IsSUFBSSxDQUFDLE9BQU8sUUFBUTtBQUN0RCxjQUFNLFlBQVksYUFBYSxLQUFLO0FBRXBDLGNBQU0sVUFBVSxZQUFZLE1BQU0sUUFBUSxVQUFVLEVBQUUsRUFBRSxZQUFZLENBQUM7QUFFckUsY0FBTXpDLFNBQU8sS0FBSyxPQUFPO0FBRXpCLGNBQU0sTUFBTUEsT0FBSyxRQUFRLE9BQU8sRUFBRTtBQUVsQyxlQUFPQSxPQUFLLFFBQVEsTUFBTSxFQUFFLElBQUksWUFBWSxNQUFNO01BQ3BELENBQUM7QUFFRCxhQUFPLFlBQVksU0FBUyxFQUFFLFFBQVEsTUFBTSxHQUFHO0lBQ2pEO0FBRU0scUJBQWlCLENBQUMsRUFBRSxHQUFHLEdBQUcsRUFBRSxNQUFXO0FBQzNDLGFBQU8sQ0FBQyxRQUFnQixNQUFNO0FBQzVCLGNBQU0sU0FBUyxDQUFDO0FBR2hCLGVBQU8sS0FBSyxRQUFRLENBQUMsQ0FBQztBQUV0QixZQUFJLElBQUk7QUFHUixZQUFJLElBQUksUUFBUSxHQUFHO0FBQ2pCLGlCQUFPLEtBQUssUUFBUSxDQUFDLENBQUM7QUFDdEI7UUFDRjtBQUdBLFlBQUksSUFBSSxRQUFRLEtBQUssS0FBSyxHQUFHO0FBQzNCLGlCQUFPLEtBQUssUUFBUSxDQUFDLENBQUM7QUFDdEI7UUFDRjtBQUdBLFlBQUksSUFBSSxRQUFRLEdBQUc7QUFFakIsaUJBQU8sS0FBSyxRQUFRLENBQUMsQ0FBQztBQUN0QjtRQUNGO0FBRUEsWUFBSSxJQUFJLFFBQVEsR0FBRztBQUVqQixpQkFBTyxLQUFLLFFBQVEsQ0FBQyxDQUFDO0FBQ3RCO1FBQ0Y7QUFFQSxZQUFJLElBQUksUUFBUSxHQUFHO0FBRWpCLGlCQUFPLEtBQUssUUFBUSxDQUFDLENBQUM7QUFDdEI7UUFDRjtBQUdBLFlBQUksSUFBSSxRQUFRLEtBQUssS0FBSyxHQUFHO0FBQzNCLGlCQUFPLEtBQUssUUFBUSxDQUFDLENBQUM7QUFDdEI7UUFDRjtBQUlBLGVBQU8sSUFBSSxPQUFPO0FBQ2hCLGlCQUFPLEtBQUssUUFBUSxDQUFDLENBQUM7QUFDdEI7UUFDRjtBQUVBLGVBQU87TUFDVDtJQUNGO0FBRU0sUUFBSSxlQUFlLEVBQUUsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDaEUsUUFBSSxlQUFlLEVBQUUsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7QUFTekQsa0JBQWMsQ0FBQyxXQUE2QixRQUFnQixNQUFNO0FBQzdFLFVBQUksY0FBYyxXQUFXLGNBQWMsS0FBSztBQUM5QyxlQUFPLEVBQUUsS0FBSztNQUNoQjtBQUVBLFVBQUksY0FBYyxXQUFXLGNBQWMsS0FBSztBQUM5QyxlQUFPLEVBQUUsS0FBSztNQUNoQjtJQUNGO0VBQUE7QUFBQSxDQUFBO0FDbkxBLElBQUEsaUJBQUFVLFlBQUE7O1FBQUEsRUFBQSx3QkFBQXlDLHlCQUFTLEtBQUEsaUJBQUEsR0FBQXZDLGNBQUEsbUJBQUE7QUFDVCxRQUFBLEVBQUEsT0FBQXdDLFNBQVMsWUFBTyxJQUFBWCxjQUFBO0FBRWhCLFFBQUEsRUFBQSxlQUFTLFVBQWUsSUFBQSxpQkFBQTtBQUN4QixRQUFBLEVBQUEsUUFBUyxNQUFRLElBQUEsY0FBQTtBQUVWLGFBQVNZLFFBQU8sT0FBTyxTQUFTLFVBQVU7QUFDL0MsVUFBSSxDQUFDLE1BQU0sUUFBUSxLQUFLLEVBQUcsUUFBTztBQUVsQyxZQUFNLEtBQUssT0FBTyxhQUFhLGFBQWEsWUFBWSxDQUFBLE1BQUs7QUFFN0QsVUFBSTtBQUNKLGFBQU8sTUFBTSxPQUFPLENBQUMsTUFBTSxLQUFLLE1BQU07QUFDcEMsY0FBTSxPQUFPLEtBQUssS0FBSyxTQUFTLENBQUM7QUFDakMsY0FBTSxPQUFPLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQztBQUM5QixjQUFNLE1BQU0sTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDO0FBRTdCLFlBQUksTUFBTTtBQUNSLGlCQUFPO0FBQ1AsaUJBQU87UUFDVDtBQUVBLFlBQUksTUFBTSxRQUFRLEdBQUcsR0FBRztBQUN0QixlQUFLLEtBQUssR0FBRyxHQUFHO0FBQ2hCLGlCQUFPO1FBQ1Q7QUFFQSxZQUFJLElBQUksU0FBUyxXQUFXLElBQUksVUFBVSxLQUFLO0FBQzdDLGNBQUksS0FBSyxTQUFTLEVBQUcsTUFBSyxLQUFLLEtBQUssQ0FBQyxDQUFDO0FBQ3RDLGlCQUFPO1FBQ1Q7QUFFQSxZQUFJLElBQUksU0FBUyxhQUFhLElBQUksU0FBUyxXQUFXO0FBQ3BELGVBQUssS0FBSyxTQUFTLENBQUMsS0FBSyxJQUFJO0FBQzdCLGlCQUFPO1FBQ1Q7QUFFQSxnQkFBUSxJQUFJLE1BQU07VUFDaEIsS0FBSztVQUNMLEtBQUs7VUFDTCxLQUFLO0FBQ0gsZ0JBQUksSUFBSSxPQUFRLE1BQUssS0FBSyxHQUFHLE9BQU8sSUFBSSxPQUFPLElBQUksTUFBTSxDQUFDO3FCQUNqRCxNQUFNLFFBQVEsSUFBSSxLQUFLLEVBQUcsTUFBSyxLQUFLLEdBQUcsSUFBSSxLQUFLO2dCQUNwRCxNQUFLLEtBQUssSUFBSSxLQUFLO0FBQ3hCO1VBRUYsS0FBSztBQUNILGdCQUFJLElBQUksT0FBUSxNQUFLLEtBQUssR0FBRyxPQUFPLElBQUksT0FBTyxJQUFJLE1BQU0sQ0FBQztxQkFDakQsSUFBSSxPQUFRLE1BQUssS0FBSyxHQUFHLElBQUksS0FBSztnQkFDdEMsTUFBSyxLQUFLLElBQUksS0FBSztBQUV4QixnQkFBSSxJQUFJLFNBQVMsU0FBUztBQUN4QixxQkFBTztZQUNUO0FBQ0E7VUFFRixLQUFLO0FBQ0gsaUJBQUssS0FBSyxTQUFTLENBQUMsS0FBSyxJQUFJO0FBQzdCLG1CQUFPO1VBRVQsS0FBSztBQUNILGlCQUFLLEtBQUssR0FBRyxPQUFPLE1BQU0sSUFBSSxRQUFRLENBQUMsQ0FBQztBQUN4QztVQUVGLEtBQUs7QUFDSCxnQkFBSSxNQUFNLFFBQVEsSUFBSSxHQUFHO0FBQ3ZCLG1CQUFLLEtBQUssU0FBUyxDQUFDLElBQUksS0FBSyxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxDQUFDO1lBQ25FLE9BQU87QUFDTCxtQkFBSyxLQUFLLElBQUksS0FBSztZQUNyQjtBQUNBO1VBRUYsS0FBSztBQUNILGlCQUFLLEtBQUssU0FBUyxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxLQUFLO0FBQzVDO1VBRUYsS0FBSztVQUNMLEtBQUs7QUFBUztBQUNaLGtCQUFJLFFBQVE7QUFDWixrQkFBSSxPQUFPLFFBQVEsSUFBSSxLQUFLLE1BQU0sWUFBYSxTQUFRLFFBQVEsSUFBSSxLQUFLO0FBQ3hFLGtCQUFJLFVBQVUsTUFBTTtBQUNsQixzQkFBTSxJQUFJLE1BQU0sMkJBQTJCLElBQUksS0FBSyxHQUFHO2NBQ3pEO0FBRUEsa0JBQUksTUFBTSxDQUFDLEtBQUssTUFBTSxDQUFDLEVBQUUsTUFBTTtBQUM3Qix3QkFBUUEsUUFBTyxPQUFPLE9BQU87QUFFN0Isb0JBQUksSUFBSSxRQUFRO0FBQ2QsdUJBQUssS0FBSyxHQUFHLE9BQU8sT0FBTyxJQUFJLE1BQU0sRUFBRSxPQUFPLENBQUMsT0FBTyxTQUFTO0FBQzdELDBCQUFNLEtBQUssR0FBRyxJQUFJO0FBQ2xCLDJCQUFPO2tCQUNULEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ1IsT0FBTztBQUNMLHVCQUFLLEtBQUssR0FBRyxLQUFLO2dCQUNwQjtBQUVBLHVCQUFPO2NBQ1Q7QUFFQSxzQkFBUSxNQUFNLFFBQVEsS0FBSyxJQUFJLFFBQVEsQ0FBQyxLQUFLO0FBQzdDLGtCQUFJLElBQUksT0FBUSxNQUFLLEtBQUssR0FBRyxPQUFPLE9BQU8sSUFBSSxNQUFNLENBQUM7a0JBQ2pELE1BQUssS0FBSyxHQUFHLEtBQUs7WUFDekI7QUFBRTtVQUNGLFNBQVM7QUFDUCxrQkFBTSxJQUFJLE1BQU0sY0FBYyxJQUFJLElBQUksR0FBRztVQUMzQztRQUNGO0FBRUEsZUFBTztNQUNULEdBQUcsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLE1BQU0sU0FBUztBQUM1QixjQUFNLE9BQU8sS0FBSyxLQUFLLFNBQVMsQ0FBQztBQUVqQyxZQUNFLE1BQU0sUUFBUSxJQUFJLEtBQ2YsTUFBTSxRQUFRLElBQUksS0FDbEIsT0FBTyxLQUFLLENBQUMsTUFBTSxZQUNuQixLQUFLLFdBQVcsR0FDbkI7QUFDQSxnQkFBTSxTQUFTLEtBQUssQ0FBQyxNQUFNLFdBQVcsS0FBSyxTQUFTLEtBQUssQ0FBQztBQUMxRCxnQkFBTSxDQUFDLE1BQU0sTUFBTSxJQUFJLE9BQU8sTUFBTSxFQUFFLE1BQU0sSUFBSTtBQUVoRCxlQUFLLElBQUk7QUFDVCxlQUFLLEtBQUssR0FBRyxLQUFLLE1BQU0sS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFFMUMsY0FBSSxPQUFPLE1BQU0sRUFBRSxTQUFTLEdBQUcsR0FBRztBQUNoQyxrQkFBTSxRQUFRLEtBQUssTUFBTSxDQUFDLFNBQVMsQ0FBQztBQUVwQyxrQkFBTSxJQUFJO0FBQ1Ysa0JBQU0sUUFBUTtBQUNkLGlCQUFLLEtBQUssR0FBRyxLQUFLO1VBQ3BCO0FBQ0EsaUJBQU87UUFDVDtBQUVBLFlBQUksT0FBTyxTQUFTLFlBQVksS0FBSyxTQUFTLEdBQUcsR0FBRztBQUNsRCxnQkFBTSxTQUFTLEtBQUssTUFBTSxHQUFHO0FBRTdCLGNBQUksT0FBTyxLQUFLLGFBQWEsR0FBRztBQUM5QixrQkFBTSxTQUFTLE9BQU8sVUFBVSxhQUFhO0FBQzdDLGtCQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLE1BQU0sR0FBRyxNQUFNLEdBQUcsT0FBTyxNQUFNLE1BQU0sQ0FBQztBQUU3RCxpQkFBSyxLQUFLRix5QkFBdUIsRUFBRSxLQUFLLEdBQUcsR0FBRyxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLEVBQUUsSUFBSSxDQUFBLE1BQUssR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDcEcsT0FBTztBQUNMLGlCQUFLLEtBQUssR0FBR0MsUUFBTSxJQUFJLENBQUMsQ0FBQztVQUMzQjtRQUNGLE9BQU87QUFDTCxlQUFLLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDcEI7QUFDQSxlQUFPO01BQ1QsR0FBRyxDQUFDLENBQUM7SUFDUDtBQUVPLGFBQVN6RCxPQUFNLFFBQVE7QUFDNUIsWUFBTSxTQUFTLENBQUM7QUFDaEIsWUFBTSxPQUFPLENBQUM7QUFDZCxZQUFNLE9BQU8sQ0FBQztBQUVkLFVBQUksVUFBVTtBQUNkLFVBQUksU0FBUztBQUNiLFVBQUk7QUFDSixVQUFJLE9BQU8sQ0FBQztBQUNaLGFBQU8sTUFBTSxRQUFRLEVBQUUsUUFBUSxDQUFDLE1BQU0sUUFBUTtBQUM1QyxlQUFPLEtBQUssUUFBUSxTQUFTLEVBQUUsRUFBRSxLQUFLO0FBQ3RDLFlBQUksQ0FBQyxLQUFNO0FBRVgsWUFBSTtBQUNGLGNBQUksS0FBSyxPQUFPLE1BQU0sS0FBSztBQUN6QixrQkFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLElBQUksS0FBSyxNQUFNLEtBQUs7QUFFekMsZ0JBQUksTUFBTSxTQUFTLEdBQUc7QUFDcEIsbUJBQUssSUFBSSxJQUFJLFVBQVUsTUFBTSxLQUFLLEdBQUcsQ0FBQztZQUN4QztVQUNGLFdBQVcsS0FBSyxRQUFRLElBQUksS0FBSyxHQUFHO0FBQ2xDLGdCQUFJLE9BQU87QUFDVCxxQkFBTyxLQUFLLElBQUk7QUFDaEIsd0JBQVU7QUFDVix1QkFBUztBQUNULHFCQUFPLENBQUM7WUFDVjtBQUVBLG9CQUFRLEtBQUssTUFBTSxLQUFLLEVBQUUsTUFBTSxDQUFDLEVBQUUsS0FBSyxHQUFHO1VBQzdDLFdBQVcsS0FBSyxPQUFPLE1BQU0sS0FBSztBQUNoQyxpQkFBSyxLQUFLLFVBQVUsS0FBSyxPQUFPLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztVQUM1QyxXQUFXLEtBQUssT0FBTyxNQUFNLEtBQUs7QUFDaEMsa0JBQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxJQUFJLEtBQUssT0FBTyxDQUFDLEVBQUUsTUFBTSxHQUFHO0FBRWxELGdCQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUs7QUFDckIsb0JBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDO0FBRXhCLHFCQUFPLEtBQUssSUFBSSxFQUNiLE9BQU8sQ0FBQSxNQUFLLEVBQUUsUUFBUSxHQUFHLE1BQU0sQ0FBQyxFQUNoQyxRQUFRLENBQUEsTUFBSztBQUNaLHFCQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxNQUFNLEtBQUssQ0FBQyxDQUFDO2NBQ3BELENBQUM7WUFDTDtBQUNBLHFCQUFTO1VBQ1gsV0FBVyxLQUFLLFFBQVEsR0FBRyxJQUFJLEdBQUc7QUFDaEMsa0JBQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxJQUFJLEtBQUssTUFBTSxHQUFHO0FBRXZDLGlCQUFLLElBQUksSUFBSSxVQUFVLE1BQU0sS0FBSyxHQUFHLEVBQUUsS0FBSyxDQUFDO1VBQy9DLE9BQU87QUFDTCxrQkFBTSxRQUFRLFVBQVUsSUFBSTtBQUU1QixnQkFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLE1BQU0sQ0FBQyxFQUFFLFNBQVMsV0FBVztBQUM1QyxrQkFBSSxDQUFDLFFBQVMsT0FBTSxJQUFJLFVBQVUsMkJBQTJCLElBQUksR0FBRztBQUVwRSxvQkFBTSxNQUFNLEtBQUssT0FBTyxFQUFFLEtBQUssT0FBTyxFQUFFLFNBQVMsQ0FBQztBQUVsRCxrQkFBSSxDQUFDLElBQUksT0FBUSxLQUFJLFNBQVMsQ0FBQyxFQUFFLE1BQU0sVUFBVSxPQUFPLElBQUksQ0FBQztBQUM3RCxrQkFBSSxPQUFPLEtBQUssR0FBRyxLQUFLO0FBQ3hCO1lBQ0Y7QUFFQSxrQkFBTSxRQUFRLE1BQU0sVUFBVSxDQUFBLE1BQUssQ0FBQyxRQUFRLFNBQVMsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUM7QUFDOUUsa0JBQU0sUUFBUSxNQUFNLFVBQVUsQ0FBQSxNQUFLLEVBQUUsU0FBUyxTQUFTO0FBQ3ZELGtCQUFNLFFBQVEsUUFBUSxJQUFJLE1BQU0sTUFBTSxLQUFLLElBQUk7QUFDL0Msa0JBQU0sU0FBUyxNQUFNLFVBQVUsQ0FBQSxNQUFLLEVBQUUsU0FBUyxTQUFTO0FBQ3hELGtCQUFNLFNBQVMsTUFBTSxNQUFNLEdBQUcsUUFBUSxJQUFJLFFBQVEsQ0FBQztBQUVuRCxzQkFBVSxTQUFTLE9BQU8sQ0FBQyxFQUFFO0FBQzdCLGdCQUFJLENBQUMsS0FBSyxPQUFPLEdBQUc7QUFDbEIsbUJBQUssT0FBTyxJQUFJLENBQUM7WUFDbkI7QUFFQSxnQkFBSTtBQUNKLGdCQUFJLFFBQVEsS0FBSyxVQUFVLElBQUk7QUFDN0Isb0JBQU0sTUFBTSxLQUFLLE9BQU8sRUFBRSxLQUFLLE9BQU8sRUFBRSxTQUFTLENBQUM7QUFFbEQsa0JBQUksT0FBTyxNQUFNLE1BQU0sS0FBSztBQUM1QixxQkFBTztnQkFDTCxPQUFPLElBQUk7Z0JBQ1gsUUFBUSxNQUFNLE1BQU0sR0FBRyxLQUFLO2NBQzlCO1lBQ0YsV0FBVyxTQUFTLEdBQUc7QUFDckIscUJBQU87Z0JBQ0wsTUFBTSxNQUFNLE1BQU0sTUFBTTtnQkFDeEIsT0FBTyxNQUFNLE1BQU0sR0FBRyxNQUFNO2NBQzlCO1lBQ0YsV0FBVyxXQUFXLEdBQUc7QUFDdkIscUJBQU8sRUFBRSxRQUFRLE1BQU0sTUFBTSxDQUFDLEVBQUU7WUFDbEMsT0FBTztBQUNMLHFCQUFPLEVBQUUsT0FBTyxNQUFNO1lBQ3hCO0FBRUEsZ0JBQUksT0FBTyxTQUFTLEdBQUc7QUFDckIsbUJBQUssU0FBUyxPQUFPLE1BQU0sQ0FBQztZQUM5QjtBQUNBLGlCQUFLLE9BQU8sRUFBRSxLQUFLLElBQUk7VUFDekI7UUFDRixTQUFTLEdBQUc7QUFDVixnQkFBTSxNQUFNLE9BQU8sTUFBTSxXQUFXLElBQUksRUFBRTtBQUUxQyxnQkFBTSxJQUFJLFlBQVksR0FBRyxHQUFHO1lBQWUsTUFBTSxDQUFDO0VBQUssSUFBSSxFQUFFO1FBQy9EO01BQ0YsQ0FBQztBQUVELFVBQUksT0FBTztBQUNULGVBQU8sS0FBSyxJQUFJO01BQ2xCO0FBQ0EsYUFBTyxFQUFFLE1BQU0sTUFBTSxPQUFPO0lBQzlCOzs7O0FDcFFBLElBQUEsZ0JBQUFlLFlBQUE7O1FBQUEsRUFBQSxNQUFTLElBQUFDLGVBQUE7QUFDVCxRQUFBLEVBQUEsTUFBUyxNQUFNLElBQUEsaUJBQUE7QUFDZixRQUFBLEVBQUEsS0FBUyxRQUFLLElBQUEsY0FBQTtBQUNkLFFBQUEsRUFBQSxPQUFTLFVBQU8sSUFBQSxpQkFBQTtBQUNoQixRQUFBLEVBQUEsUUFBQTBDLFFBQVMsSUFBQSxlQUFBO0FBRVQsUUFBTSxVQUFVLE9BQU8sT0FBTztBQUV2QixhQUFTYixPQUFNOUMsUUFBTSxNQUFNLEtBQUssU0FBUyxJQUFJO0FBQ2xELFlBQU0sT0FBTyxJQUFJLEtBQUs7QUFDdEIsWUFBTSxJQUFJO0FBQ1YsWUFBTSxJQUFJLENBQUM7QUFFWCxhQUFPLFNBQVM7QUFFaEIsVUFBSSxLQUFLO0FBQ1QsZUFBUyxJQUFJLEtBQUssTUFBTTtBQUN0QixjQUFNLE1BQU0sTUFBTTtBQUVsQixZQUFJLENBQUMsSUFBSSxHQUFHLEdBQUc7QUFDYixnQkFBTSxRQUFRLElBQUksTUFBTTtBQUN4QixnQkFBTSxPQUFPLFFBQVEsTUFBTSxJQUFJO0FBRS9CLGVBQUssU0FBUyxLQUFLO0FBQ25CLGNBQUksR0FBRyxJQUFJLEVBQUUsTUFBTSxNQUFNO0FBQ3pCLGNBQUksUUFBUSxJQUFLLE9BQU07UUFDekI7QUFDQSxlQUFPLElBQUksR0FBRztNQUNoQjtBQUVBQSxNQUFBQSxPQUFLLFFBQVEsQ0FBQSxZQUFXO0FBQ3RCLGdCQUFRLFFBQVEsQ0FBQSxVQUFTO0FBQ3ZCLGdCQUFNLFFBQVEsQ0FBQSxNQUFLO0FBQ2pCLGtCQUFNLEVBQUUsTUFBTSxNQUFNLElBQUksSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUV0QyxrQkFBTSxTQUFTLEdBQUc7QUFDbEIsZ0JBQUksU0FBUyxHQUFHO0FBQ2Qsb0JBQU0sV0FBVyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBQzdCO0FBRUEscUJBQVMsSUFBSSxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsUUFBUSxLQUFLLEdBQUc7QUFDdkMsb0JBQU0sT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDO0FBRW5CLGtCQUFJLEtBQUssSUFBSSxHQUFHO0FBQ2Qsc0JBQU1NLFNBQU8sS0FBSyxLQUFLO0FBRXZCLG9CQUFJLE1BQU0sUUFBUUEsTUFBSSxHQUFHO0FBQ3ZCLHdCQUFNLFFBQVEsTUFBTSxJQUFJLENBQUM7QUFDekIsd0JBQU0sU0FBUyxNQUFNQSxRQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUN0QyxPQUFPO0FBQ0wsd0JBQU0sT0FBTyxNQUFNQSxRQUFNLEdBQUcsS0FBSyxDQUFDO0FBQ2xDLHdCQUFNLFFBQVEsTUFBTUEsUUFBTSxDQUFDO2dCQUM3QjtjQUNGLE9BQU87QUFDTCxzQkFBTSxRQUFRLE1BQU0sSUFBSSxJQUFJLENBQUM7Y0FDL0I7WUFDRjtVQUNGLENBQUM7UUFDSCxDQUFDO01BQ0gsQ0FBQztBQUNELGFBQU8sS0FBSyxRQUFRO0lBQ3RCO0FBRU8sYUFBUyxLQUFLLFFBQVEsT0FBTztBQUNsQyxVQUFJO0FBQ0osZUFBUyxRQUFRLEdBQUc7QUFDbEIsWUFBSSxNQUFNLFFBQVEsQ0FBQyxHQUFHO0FBQ3BCLGlCQUFPLEVBQUUsSUFBSSxPQUFPO1FBQ3RCO0FBRUEsWUFBSTtBQUNKLFlBQUksQ0FBQyxNQUFNLFNBQVMsQ0FBQyxHQUFHO0FBQ3RCLGtCQUFRLEVBQUUsR0FBRyxLQUFLLEdBQUcsRUFBRTtRQUN6QixPQUFPO0FBQ0wsa0JBQVEsRUFBRSxHQUFHLE1BQU0sTUFBTSxJQUFJLElBQUk7UUFDbkM7QUFFQSxZQUFJLE1BQU0sS0FBSztBQUNiLGdCQUFNLElBQUksT0FBTyxPQUFPLE1BQU0sTUFBTSxjQUFjLE9BQU8sTUFBTSxJQUFJLE1BQU0sS0FBSztBQUM5RSxjQUFJLE9BQU8sTUFBTSxNQUFNLE1BQU0sWUFBYSxPQUFNLElBQUksTUFBTSxNQUFNO0FBQ2hFLGNBQUksT0FBTyxXQUFXLEVBQUcsT0FBTSxJQUFJLE9BQU8sQ0FBQztBQUMzQyxjQUFJLE1BQU0sS0FBSyxNQUFNLEVBQUcsV0FBVTtRQUNwQztBQUNBLGVBQU87TUFDVDtBQUVBLGFBQU8sQ0FBQSxVQUFTO0FBQ2QsWUFBSSxTQUFTO0FBQ2IsWUFBSSxPQUFPLFVBQVUsVUFBVTtBQUM3QixjQUFJLFVBQVUsS0FBSyxHQUFHO0FBQ3BCLHFCQUFTO0FBQ1QscUJBQVMsTUFBTSxLQUFLLEVBQUUsSUFBSSxPQUFPO1VBQ25DO1FBQ0Y7QUFDQSxlQUFPO01BQ1Q7SUFDRjtBQUVPLGFBQVNzRCxPQUFNLEtBQUs7QUFDekIsWUFBTSxTQUFTLENBQUM7QUFFaEIsYUFBTyxRQUFRLElBQUksTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLE1BQU0sUUFBUSxNQUFNO0FBQ3ZELGVBQU8sUUFBUSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU07QUFDaEQsZ0JBQU0sQ0FBQyxLQUFLNUQsTUFBSSxJQUFJLEdBQUcsTUFBTSxHQUFHO0FBQ2hDLGdCQUFNLE1BQU0sT0FBTztBQUVuQixjQUFJO0FBQ0osY0FBSSxNQUFNO0FBQ1YsZ0JBQU0sUUFBUSxDQUFBLFNBQVE7QUFDcEIsa0JBQU0sU0FBUyxLQUFLLFNBQVMyRCxRQUFPLEtBQUssUUFBUSxJQUFJLElBQUksSUFBSSxDQUFDO0FBQzlELGtCQUFNLFFBQVEsS0FBSyxPQUFPQSxRQUFPLEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxDQUFDO0FBRXpELGdCQUFJLEtBQUssT0FBTztBQUNkLGtCQUFJLE9BQU8sU0FBUyxFQUFHLFFBQU8sTUFBTTtBQUVwQyxvQkFBTSxRQUFRLFFBQVFBLFFBQU8sS0FBSyxPQUFPLElBQUksTUFBTSxLQUFLLFFBQVEsS0FBSyxDQUFDLENBQUM7QUFFdkUsa0JBQUksQ0FBQyxPQUFPO0FBQ1Ysd0JBQVE7QUFDUjtjQUNGO0FBRUEsa0JBQUksT0FBTyxPQUFPLENBQUMsR0FBRyxNQUFNO0FBQzFCLG9CQUFJLEVBQUUsSUFBSSxFQUFHLEdBQUUsSUFBSSxFQUFFO2NBQ3ZCLENBQUM7WUFDSDtBQUVBLGdCQUFJLE9BQU87QUFDVCxvQkFBTSxPQUFPLEtBQUssVUFDYixLQUFLLE9BQU8sQ0FBQyxLQUNiLEtBQUssT0FBTyxDQUFDLEVBQUUsU0FBUyxTQUFTLEtBQUssT0FBTyxDQUFDLEVBQUUsUUFBUTtBQUU3RCxvQkFBTSxRQUFRLENBQUEsU0FBUTtBQUNwQixvQkFBSSxLQUFLLElBQUksR0FBRztBQUNkLHNCQUFJLENBQUMsS0FBSyxLQUFLLE1BQU0sU0FBUyxFQUFHLE1BQUssSUFBSSxNQUFNLE1BQU07QUFDdEQsc0JBQUksUUFBUSxPQUFPLFNBQVMsRUFBRyxNQUFLLEtBQUssQ0FBQyxFQUFFLFlBQVksQ0FBQyxJQUFJLE9BQU8sTUFBTTtnQkFDNUU7Y0FDRixDQUFDO1lBQ0g7VUFDRixDQUFDO0FBRUQsY0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFHLFFBQU8sR0FBRyxJQUFJLEVBQUUsUUFBUSxDQUFDLEVBQUU7QUFDN0MsaUJBQU8sR0FBRyxFQUFFLE9BQU8sS0FBSyxDQUFDM0QsUUFBTSxNQUFNLEtBQUssQ0FBQztRQUM3QyxDQUFDO01BQ0gsQ0FBQztBQUVELFVBQUksQ0FBQyxJQUFJLEtBQUssUUFBUTtBQUNwQixZQUFJLE9BQU8sQ0FBQyxDQUFDLEVBQUUsTUFBTSxTQUFTLE9BQU8sUUFBUSxDQUFDLENBQUM7TUFDakQ7QUFFQSxhQUFPLElBQUksS0FBSyxJQUFJLENBQUEsVUFBUztBQUMzQixlQUFPMkQsUUFBTyxPQUFPLE1BQU0sRUFBRSxJQUFJLENBQUEsU0FBUTtBQUN2QyxpQkFBTyxDQUFDLEVBQUUsT0FBTyxJQUFJLEVBQUUsT0FBTyxDQUFDLE1BQU0sTUFBTTtBQUN6QyxpQkFBSyxLQUFLLEdBQUcsRUFBRSxNQUFNO0FBQ3JCLG1CQUFPO1VBQ1QsR0FBRyxDQUFDLENBQUM7UUFDUCxDQUFDO01BQ0gsQ0FBQztJQUNIOzs7O0FDOUpBLElBQUEsY0FBQSxDQUFBO0FBQUFqRCxVQUFBLGFBQUE7RUFBQSxPQUFBLE1BQUEsYUFBQTtFQUFBLE9BQUEsTUFBQSxjQUFBO0FBQUEsQ0FBQTtBQUFBLElBQUEsZUFBc0I4QyxTQUFBLGNBQUEsQ0FBQTtBQUN0QixJQUFBLGdCQUFzQkEsU0FBQSxlQUFBLENBQUE7QUFDdEIsV0FBQSxhQUFjQSxTQUFBLGNBQUEsQ0FBQSxDQUFBO0FBQ2QsV0FBQSxhQUFjQSxTQUFBLGNBQUEsQ0FBQSxDQUFBO0FBQ2QsV0FBQSxhQUFjQSxTQUFBLGVBQUEsQ0FBQSxDQUFBO0FBQ2QsV0FBQSxhQUFjQSxTQUFBLGlCQUFBLENBQUEsQ0FBQTs7Ozs7QWJGZCxJQUFBSyxpQkFBdUI7QUFDdkIsb0JBQTZCO0FBQzdCLG1CQUE0QjtBQUU1QixJQUFJLFFBQVE7QUFDWixJQUFJLE9BQU87QUFDWCxJQUFJLFlBQVk7QUFDaEIsSUFBSSxVQUFVO0FBQ2QsSUFBSSxnQkFBZ0I7QUFDcEIsSUFBSSxtQkFBbUI7QUFDdkIsSUFBSSxZQUFZO0FBQ2hCLElBQUksV0FBVztBQUNmLElBQUksY0FBYztBQUVsQixJQUFNLElBQUksT0FBTyxLQUFLLElBQUksY0FBQUMsUUFBTztBQUNqQyxPQUFPLElBQUk7QUFFWCxJQUFNLGNBQWM7QUFFcEIsSUFBTSxhQUFhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF5RG5CLElBQU0sU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBcUNiLEtBQUs7QUFFUCxJQUFNLGFBQWE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBY2pCLEtBQUs7QUFFUCxJQUFNLFFBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQWdCWixLQUFLO0FBRVAsSUFBTSxVQUFVO0FBQUEsRUFDZCxRQUFRO0FBQUEsRUFDUixZQUFZO0FBQUEsRUFDWixZQUFZO0FBQUEsRUFDWixPQUFPO0FBQ1Q7QUFFQSxJQUFNLGdCQUFnQjtBQUFBLEVBQ3BCLFFBQVE7QUFBQSxFQUNSLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLE9BQU87QUFDVDtBQUVBLElBQU0sYUFBYTtBQUFBLEVBQ2pCLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLFFBQVE7QUFBQSxFQUNSLFVBQVU7QUFBQSxFQUNWLFFBQVE7QUFBQSxFQUNSLFlBQVk7QUFBQSxFQUNaLFNBQVM7QUFDWDtBQUVBLFNBQVMsTUFBTUMsT0FBTTtBQUNuQixRQUFNLE1BQU0sQ0FBQztBQUViLFdBQVMsSUFBSSxLQUFLLE1BQU07QUFDdEIsVUFBTSxNQUFNLE1BQU07QUFFbEIsUUFBSSxDQUFDLElBQUksR0FBRyxHQUFHO0FBQ2IsWUFBTSxRQUFRLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQztBQUM1QixVQUFJLEtBQUssS0FBSztBQUNkLFVBQUksR0FBRyxJQUFJLEVBQUUsTUFBTTtBQUFBLElBQ3JCO0FBQ0EsV0FBTyxJQUFJLEdBQUc7QUFBQSxFQUNoQjtBQUVBLEVBQUFBLE1BQUssUUFBUSxhQUFXO0FBQ3RCLFlBQVEsUUFBUSxXQUFTO0FBQ3ZCLFlBQU0sUUFBUSxPQUFLO0FBQ2pCLGNBQU0sRUFBRSxNQUFNLElBQUksSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUNoQyxpQkFBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxRQUFRLEtBQUssR0FBRztBQUN2QyxnQkFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFBQSxRQUN2QjtBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0gsQ0FBQztBQUFBLEVBQ0gsQ0FBQztBQUNELFNBQU87QUFDVDtBQUVBLFNBQVMsUUFBUSxPQUFPO0FBQ3RCLE1BQUk7QUFDRixrQkFBYyxhQUFNLEtBQUs7QUFDekIsV0FBTyxNQUFNLGFBQU0sV0FBVyxDQUFDO0FBQUEsRUFDakMsU0FBUyxHQUFHO0FBQ1Ysa0JBQWM7QUFDZCxZQUFRLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0IsY0FBVSxFQUFFLFdBQVcsYUFBYTtBQUNwQyxXQUFPLENBQUM7QUFBQSxFQUNWO0FBQ0Y7QUFFQSxTQUFTLGtCQUFrQixNQUFNO0FBQy9CLE1BQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxRQUFRLENBQUMsWUFBWSxLQUFLLElBQUksRUFBRyxRQUFPO0FBQ3pFLE1BQUk7QUFDRixVQUFNLFdBQU8sdUJBQU8sWUFBWSxLQUFLLElBQUksR0FBRyxZQUFZLElBQUk7QUFDNUQsVUFBTSxNQUFNLE1BQU0sUUFBUSxJQUFJLElBQUksS0FBSyxLQUFLLFFBQVEsSUFBSSxDQUFDLElBQUk7QUFDN0QsVUFBTSxRQUFRLElBQUksTUFBTSxHQUFHLEVBQUUsRUFBRSxJQUFJLFVBQ2pDLE1BQU0sUUFBUSxJQUFJLElBQUksS0FBSyxLQUFLLEdBQUcsSUFBSSxPQUFPLElBQUksQ0FDbkQ7QUFDRCxXQUFPLE1BQU0sS0FBSyxJQUFJLEtBQUssSUFBSSxTQUFTLE1BQU0sU0FBUyxZQUFPO0FBQUEsRUFDaEUsU0FBUyxHQUFHO0FBQ1YsV0FBTztBQUFBLEVBQ1Q7QUFDRjtBQUVBLFNBQVMseUJBQXlCLE9BQU87QUFDdkMsUUFBTSxJQUFJLFNBQVMsT0FBTyxFQUFFO0FBQzVCLE1BQUksT0FBTyxNQUFNLENBQUMsRUFBRyxRQUFPO0FBQzVCLE1BQUk7QUFDRixVQUFNLE9BQU8sS0FBSyxNQUNkLEVBQUUsT0FBTyxPQUFPLFNBQVMsSUFBSSxHQUFJLElBQ2pDLEVBQUUsT0FBTyxPQUFPLGVBQWUsQ0FBQztBQUNwQyxXQUFPLFFBQVEsS0FBSyxRQUFRLEtBQUssUUFBUTtBQUFBLEVBQzNDLFNBQVMsR0FBRztBQUNWLFdBQU87QUFBQSxFQUNUO0FBQ0Y7QUFFQSxTQUFTLG1CQUFtQixNQUFNO0FBQ2hDLE1BQUksQ0FBQyxLQUFNLFFBQU87QUFDbEIsU0FBTyxXQUFXLEtBQUssWUFBWSxDQUFDLEtBQUs7QUFDM0M7QUFFQSxTQUFTLGNBQWMsR0FBRztBQUN4QixTQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsWUFBWSxJQUFJLEVBQUUsTUFBTSxDQUFDO0FBQzlDO0FBRUEsU0FBUyxtQkFBbUIsU0FBUztBQUNuQyxRQUFNQyxhQUFZLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQzlELFFBQU1DLEtBQUksUUFBUSxNQUFNLDBCQUEwQjtBQUNsRCxNQUFJLENBQUNBLEdBQUcsUUFBTztBQUNmLFFBQU0sT0FBT0QsV0FBVUMsR0FBRSxDQUFDLEVBQUUsWUFBWSxDQUFDO0FBQ3pDLFFBQU0sTUFBTUEsR0FBRSxDQUFDLE1BQU0sTUFBTSxJQUFJQSxHQUFFLENBQUMsTUFBTSxNQUFNLEtBQUs7QUFDbkQsUUFBTSxNQUFNLFNBQVNBLEdBQUUsQ0FBQyxHQUFHLEVBQUU7QUFDN0IsUUFBTUYsU0FBUSxNQUFNLEtBQUssS0FBSyxPQUFPO0FBQ3JDLFFBQU0sUUFBUSxNQUFNLEtBQUssSUFBSSxJQUFJQSxRQUFPLE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQztBQUM1RCxRQUFNLFlBQVlBLFVBQVM7QUFDM0IsU0FBTyxRQUFRQSxLQUFJLFNBQU0sSUFBSSxNQUFNLFlBQVksbUJBQWdCLEVBQUU7QUFDbkU7QUFFQSxTQUFTLG9CQUFvQixVQUFVO0FBQ3JDLFNBQU8sU0FBUyxNQUFNLEdBQUcsRUFBRSxJQUFJLGFBQWEsRUFBRSxLQUFLLElBQUk7QUFDekQ7QUFFQSxTQUFTLGlCQUFpQixVQUFVO0FBQ2xDLE1BQUk7QUFDRixlQUFPLHlCQUFNLE1BQU0sUUFBUSxFQUFFO0FBQUEsRUFDL0IsUUFBUTtBQUNOLFdBQU87QUFBQSxFQUNUO0FBQ0Y7QUFFQSxTQUFTLHVCQUF1QixHQUFHO0FBQ2pDLFFBQU0sSUFBSSxTQUFTLEdBQUcsRUFBRTtBQUN4QixNQUFJLE9BQU8sTUFBTSxDQUFDLEtBQUssSUFBSSxLQUFLLElBQUksSUFBSyxRQUFPO0FBQ2hELFFBQU0sTUFBTSxLQUFLLE1BQU8sSUFBSSxNQUFPLEdBQUc7QUFDdEMsUUFBTSxLQUFLLElBQUksS0FBSyxLQUFLLEtBQUssTUFBTSxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsSUFBSTtBQUMzRCxRQUFNLE1BQU0sTUFBTSxJQUFJLGlCQUNsQixLQUFLLEtBQUssbUJBQ1YsS0FBSyxLQUFLLGNBQ1YsS0FBSyxLQUFLLGdCQUNWLEtBQUssTUFBTSxhQUNYLEtBQUssTUFBTSxtQkFDWDtBQUNKLFNBQU8sR0FBRyxHQUFHLGlCQUFjLEVBQUUsWUFBUyxHQUFHO0FBQzNDO0FBRUEsU0FBUyxzQkFBc0IsTUFBTTtBQUNuQyxNQUFJLENBQUMsVUFBVyxRQUFPO0FBQ3ZCLFFBQU0sUUFBUSxVQUFVLFNBQVMsRUFBRSxNQUFNLElBQUk7QUFDN0MsUUFBTSxnQkFBZ0IsSUFBSSxJQUFJO0FBQzlCLFFBQU0sUUFBUSxNQUFNLFVBQVUsVUFBUSxLQUFLLEtBQUssTUFBTSxhQUFhO0FBQ25FLE1BQUksUUFBUSxFQUFHLFFBQU87QUFFdEIsUUFBTSxVQUFVLENBQUM7QUFDakIsV0FBUyxJQUFJLFFBQVEsR0FBRyxJQUFJLE1BQU0sVUFBVSxRQUFRLFNBQVMsR0FBRyxLQUFLLEdBQUc7QUFDdEUsVUFBTSxPQUFPLE1BQU0sQ0FBQztBQUNwQixRQUFJLFFBQVEsS0FBSyxJQUFJLEVBQUc7QUFDeEIsUUFBSSxLQUFLLEtBQUssRUFBRyxTQUFRLEtBQUssS0FBSyxLQUFLLENBQUM7QUFBQSxFQUMzQztBQUNBLFNBQU8sUUFBUSxTQUFTLFFBQVEsS0FBSyxLQUFLLElBQUk7QUFDaEQ7QUFFQSxTQUFTLFVBQVUsS0FBSztBQUN0QixlQUFhLGdCQUFnQjtBQUM3QixRQUFNLFdBQVcsU0FBUyxlQUFlLGdCQUFnQjtBQUN6RCxRQUFNLFlBQVksU0FBUyxlQUFlLFdBQVc7QUFDckQsTUFBSSxVQUFVO0FBQ1osYUFBUyxjQUFjLFVBQVUsR0FBRztBQUFBLEVBQ3RDO0FBQ0EsTUFBSSxXQUFXO0FBQ2IsY0FBVSxRQUFRLFFBQVE7QUFBQSxFQUM1QjtBQUNGO0FBRUEsU0FBUyxXQUFXLEtBQUssUUFBUSxTQUFTO0FBQ3hDLGVBQWEsZ0JBQWdCO0FBQzdCLFFBQU0sV0FBVyxTQUFTLGVBQWUsZ0JBQWdCO0FBQ3pELFFBQU0sWUFBWSxTQUFTLGVBQWUsV0FBVztBQUNyRCxNQUFJLFVBQVU7QUFDWixhQUFTLGNBQWM7QUFBQSxFQUN6QjtBQUNBLE1BQUksV0FBVztBQUNiLGNBQVUsUUFBUSxRQUFRO0FBQUEsRUFDNUI7QUFDRjtBQUVBLFNBQVMsaUJBQWlCO0FBQ3hCLGFBQVcsU0FBUyxPQUFPO0FBQzdCO0FBRUEsU0FBUyxZQUFZO0FBQ25CLGFBQVcsbUJBQW1CLFNBQVM7QUFDekM7QUFFQSxTQUFTLGNBQWM7QUFDckIsUUFBTSxNQUFNLG9CQUFJLEtBQUs7QUFDckIsUUFBTSxLQUFLLE9BQU8sSUFBSSxTQUFTLENBQUMsRUFBRSxTQUFTLEdBQUcsR0FBRztBQUNqRCxRQUFNLEtBQUssT0FBTyxJQUFJLFdBQVcsQ0FBQyxFQUFFLFNBQVMsR0FBRyxHQUFHO0FBQ25ELGFBQVcsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLE9BQU87QUFDekM7QUFFQSxTQUFTLGFBQWEsTUFBTTtBQUMxQixRQUFNLE1BQU0sSUFBSSxJQUFJLE9BQU8sU0FBUyxJQUFJO0FBQ3hDLE1BQUksTUFBTTtBQUNSLFFBQUksYUFBYSxJQUFJLFFBQVEsSUFBSTtBQUFBLEVBQ25DLE9BQU87QUFDTCxRQUFJLGFBQWEsT0FBTyxNQUFNO0FBQUEsRUFDaEM7QUFDQSxTQUFPLFFBQVEsYUFBYSxDQUFDLEdBQUcsSUFBSSxJQUFJLFNBQVMsQ0FBQztBQUNwRDtBQUVBLFNBQVMsbUJBQW1CO0FBQzFCLFFBQU0sVUFBVSxTQUFTLGVBQWUsVUFBVTtBQUNsRCxNQUFJLFFBQVMsU0FBUSxjQUFjLFVBQVUsc0JBQWlCO0FBQ2hFO0FBRUEsU0FBUyxpQkFBaUIsTUFBTTtBQUM5QixRQUFNLFNBQVMsUUFBUSxJQUFJO0FBQzNCLE1BQUksQ0FBQyxhQUFhLENBQUMsT0FBUTtBQUUzQixZQUFVLFNBQVMsT0FBTyxLQUFLLENBQUM7QUFDaEMsZUFBYSxRQUFRLGFBQWEsVUFBVSxTQUFTLENBQUM7QUFDdEQsZUFBYSxJQUFJO0FBQ2pCLGFBQVcsa0JBQWtCLGNBQWMsSUFBSSxLQUFLLElBQUksSUFBSSxPQUFPO0FBQ25FLGFBQVc7QUFDWCxZQUFVLE1BQU07QUFDbEI7QUFFQSxTQUFTLFVBQVUsTUFBTTtBQUN2QixNQUFJLENBQUMsU0FBVTtBQUNmLFdBQVMsT0FBTyxJQUFJO0FBQ3RCO0FBRUEsU0FBUyxzQkFBc0I7QUFDN0IsV0FBUyxpQkFBaUIsV0FBVyxPQUFLO0FBQ3hDLFVBQU0sU0FBUyxFQUFFO0FBQ2pCLFVBQU0sZUFBZSxXQUNuQixPQUFPLFlBQVksY0FDaEIsT0FBTyxZQUFZLFdBQ25CLE9BQU8sWUFBWTtBQUd4QixRQUFJLEVBQUUsU0FBUyxXQUFXLENBQUMsY0FBYztBQUN2QyxRQUFFLGVBQWU7QUFDakIsVUFBSSxRQUFTLE1BQUs7QUFBQSxVQUNiLE1BQUs7QUFBQSxJQUNaO0FBQ0EsUUFBSSxFQUFFLFNBQVMsVUFBVTtBQUN2QixXQUFLO0FBQUEsSUFDUDtBQUFBLEVBQ0YsQ0FBQztBQUNIO0FBRUEsU0FBUyxVQUFVLGFBQWEsZUFBZTtBQUM3QyxXQUFTLEtBQUssWUFBWTtBQUUxQixRQUFNLFVBQVUsU0FBUyxjQUFjLEtBQUs7QUFDNUMsVUFBUSxLQUFLO0FBRWIsUUFBTSxZQUFZLFNBQVMsY0FBYyxHQUFHO0FBQzVDLFlBQVUsS0FBSztBQUNmLFlBQVUsT0FBTztBQUNqQixZQUFVLGNBQWM7QUFFeEIsUUFBTSxVQUFVLFNBQVMsY0FBYyxRQUFRO0FBQy9DLFVBQVEsS0FBSztBQUNiLFVBQVEsY0FBYztBQUN0QixVQUFRLGlCQUFpQixTQUFTLElBQUk7QUFFdEMsUUFBTSxVQUFVLFNBQVMsY0FBYyxRQUFRO0FBQy9DLFVBQVEsS0FBSztBQUNiLFVBQVEsY0FBYztBQUN0QixVQUFRLGlCQUFpQixTQUFTLElBQUk7QUFFdEMsUUFBTSxXQUFXLFNBQVMsY0FBYyxRQUFRO0FBQ2hELFdBQVMsS0FBSztBQUNkLFdBQVMsY0FBYztBQUN2QixRQUFNLFVBQVUsU0FBUyxjQUFjLFFBQVE7QUFDL0MsVUFBUSxLQUFLO0FBQ2IsVUFBUSxjQUFjO0FBQ3RCLFVBQVEsV0FBVztBQUNuQixVQUFRLFFBQVE7QUFFaEIsUUFBTSxjQUFjLFNBQVMsY0FBYyxPQUFPO0FBQ2xELGNBQVksWUFBWTtBQUN4QixjQUFZLGNBQWM7QUFDMUIsUUFBTSxlQUFlLFNBQVMsY0FBYyxRQUFRO0FBQ3BELGVBQWEsS0FBSztBQUNsQixRQUFNLGVBQWUsU0FBUyxjQUFjLFFBQVE7QUFDcEQsZUFBYSxRQUFRO0FBQ3JCLGVBQWEsY0FBYztBQUMzQixlQUFhLFlBQVksWUFBWTtBQUNyQyxTQUFPLEtBQUssT0FBTyxFQUFFLFFBQVEsVUFBUTtBQUNuQyxVQUFNLFNBQVMsU0FBUyxjQUFjLFFBQVE7QUFDOUMsV0FBTyxRQUFRO0FBQ2YsV0FBTyxjQUFjLGNBQWMsSUFBSSxLQUFLO0FBQzVDLGlCQUFhLFlBQVksTUFBTTtBQUFBLEVBQ2pDLENBQUM7QUFDRCxNQUFJLGlCQUFpQixRQUFRLGFBQWEsR0FBRztBQUMzQyxpQkFBYSxRQUFRO0FBQUEsRUFDdkI7QUFDQSxlQUFhLGlCQUFpQixVQUFVLE1BQU07QUFDNUMsUUFBSSxhQUFhLE9BQU87QUFDdEIsdUJBQWlCLGFBQWEsS0FBSztBQUFBLElBQ3JDO0FBQUEsRUFDRixDQUFDO0FBQ0QsY0FBWSxZQUFZLFlBQVk7QUFFcEMsVUFBUSxZQUFZLFNBQVM7QUFDN0IsVUFBUSxZQUFZLE9BQU87QUFDM0IsVUFBUSxZQUFZLE9BQU87QUFDM0IsVUFBUSxZQUFZLFFBQVE7QUFDNUIsVUFBUSxZQUFZLE9BQU87QUFDM0IsVUFBUSxZQUFZLFdBQVc7QUFFL0Isa0JBQVksNEJBQWEsYUFBYTtBQUFBLElBQ3BDLGFBQWE7QUFBQSxJQUNiLGNBQWM7QUFBQSxJQUNkLGFBQWE7QUFBQSxJQUNiO0FBQUEsSUFDQSxpQkFBaUI7QUFBQSxJQUNqQixnQkFBZ0I7QUFBQSxJQUNoQixZQUFZO0FBQUEsSUFDWixtQkFBbUI7QUFBQSxJQUNuQixTQUFTLE1BQU07QUFDYixZQUFNRyxnQkFBZSxTQUFTLGVBQWUsZUFBZTtBQUM1RCxVQUFJQSxjQUFjLENBQUFBLGNBQWEsUUFBUTtBQUN2QyxtQkFBYSxJQUFJO0FBQ2pCLGdCQUFVO0FBQ1YsaUJBQVc7QUFDWCxnQkFBVTtBQUFBLElBQ1o7QUFBQSxFQUNGLENBQUM7QUFFRCxZQUFVLEdBQUcsV0FBVyxPQUFLO0FBQzNCLFNBQUssRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFNBQVMsU0FBUztBQUNsRCxRQUFFLGVBQWU7QUFDakIsVUFBSSxRQUFTLE1BQUs7QUFBQSxVQUNiLE1BQUs7QUFBQSxJQUNaO0FBQUEsRUFDRixDQUFDO0FBRUQsUUFBTSxZQUFZLFNBQVMsY0FBYyxLQUFLO0FBQzlDLFlBQVUsS0FBSztBQUNmLFlBQVUsUUFBUSxRQUFRO0FBRTFCLFFBQU0sV0FBVyxTQUFTLGNBQWMsS0FBSztBQUM3QyxXQUFTLEtBQUs7QUFDZCxXQUFTLElBQUksR0FBRyxJQUFJLElBQUksS0FBSyxHQUFHO0FBQzlCLFVBQU0sTUFBTSxTQUFTLGNBQWMsTUFBTTtBQUN6QyxRQUFJLFlBQVk7QUFDaEIsYUFBUyxZQUFZLEdBQUc7QUFBQSxFQUMxQjtBQUVBLFFBQU0sZ0JBQWdCLFNBQVMsY0FBYyxNQUFNO0FBQ25ELGdCQUFjLEtBQUs7QUFDbkIsZ0JBQWMsY0FBYztBQUU1QixZQUFVLFlBQVksUUFBUTtBQUM5QixZQUFVLFlBQVksYUFBYTtBQUVuQyxRQUFNLFlBQVksU0FBUyxjQUFjLEtBQUs7QUFDOUMsWUFBVSxLQUFLO0FBQ2YsaUJBQVcsMEJBQVksR0FBRztBQUFBLElBQ3hCO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBLFNBQVMsTUFBTTtBQUNiLFVBQUksT0FBTyxLQUFLLFVBQVUsU0FBVSxTQUFRLEtBQUs7QUFDakQsVUFBSSxPQUFPLEtBQUssU0FBUyxTQUFVLFFBQU8sS0FBSztBQUMvQyxVQUFJLE9BQU8sS0FBSyxjQUFjLFNBQVUsYUFBWSxLQUFLO0FBQ3pELGlCQUFXO0FBQUEsSUFDYjtBQUFBLEVBQ0YsQ0FBQztBQUNELFdBQVMsT0FBTyxLQUFLO0FBQ3JCLFdBQVMsaUJBQWlCLFNBQVMsTUFBTTtBQUN2QyxVQUFNLE9BQU8sU0FBUyxPQUFPO0FBQzdCLGNBQVUsVUFBVSxPQUFPLGNBQWMsSUFBSTtBQUFBLEVBQy9DLENBQUM7QUFDRCxJQUFFLFNBQVMsQ0FBQyxLQUFLLFNBQVM7QUFDeEIsVUFBTSxPQUFPLEtBQUssSUFBSSxJQUFJLE9BQU8sRUFBRSxhQUFhLGVBQWUsR0FBSTtBQUNuRSxlQUFXLE1BQU0sU0FBUyxRQUFRLEdBQUcsR0FBRyxJQUFJO0FBQUEsRUFDOUM7QUFFQSxXQUFTLEtBQUssWUFBWSxPQUFPO0FBQ2pDLFlBQVUsWUFBWSxVQUFVLEVBQUU7QUFDbEMsWUFBVSxZQUFZLFNBQVMsRUFBRTtBQUNqQyxXQUFTLEtBQUssWUFBWSxTQUFTO0FBQ25DLFdBQVMsS0FBSyxZQUFZLFNBQVM7QUFFbkMsU0FBTztBQUNUO0FBRUEsZUFBZSxZQUFZLE1BQU07QUFDL0IsTUFBSSxRQUFRLElBQUksRUFBRyxRQUFPLFFBQVEsSUFBSTtBQUN0QyxNQUFJO0FBQ0YsVUFBTSxXQUFXLE1BQU0sTUFBTSxZQUFZLElBQUksTUFBTTtBQUNuRCxRQUFJLFNBQVMsSUFBSTtBQUNmLGFBQU8sTUFBTSxTQUFTLEtBQUs7QUFBQSxJQUM3QjtBQUFBLEVBQ0YsU0FBUyxHQUFHO0FBQUEsRUFFWjtBQUNBLFNBQU87QUFDVDtBQUVBLGVBQWUsc0JBQXNCO0FBQ25DLFFBQU0sU0FBUyxJQUFJLGdCQUFnQixPQUFPLFNBQVMsTUFBTTtBQUN6RCxRQUFNLE9BQU8sT0FBTyxJQUFJLE1BQU07QUFFOUIsTUFBSSxNQUFNO0FBQ1IsVUFBTSxRQUFRLE1BQU0sWUFBWSxJQUFJO0FBQ3BDLFFBQUksTUFBTyxRQUFPLE1BQU0sS0FBSztBQUFBLEVBQy9CO0FBRUEsU0FBTyxhQUFhLFFBQVEsV0FBVyxLQUFLO0FBQzlDO0FBRUEsU0FBUyxZQUFZO0FBQ25CLGVBQWEsYUFBYTtBQUMxQixrQkFBZ0IsV0FBVyxNQUFNO0FBQy9CLFFBQUksV0FBVztBQUNiLG1CQUFhLFFBQVEsYUFBYSxVQUFVLFNBQVMsQ0FBQztBQUN0RCxrQkFBWTtBQUFBLElBQ2Q7QUFBQSxFQUNGLEdBQUcsR0FBRztBQUNSO0FBRUEsU0FBUyxPQUFPO0FBQ2QsT0FBSztBQUNMLE1BQUksQ0FBQyxVQUFXO0FBRWhCLE1BQUksRUFBRSxhQUFhLFVBQVUsYUFBYTtBQUN4QyxNQUFFLGFBQWEsT0FBTztBQUFBLEVBQ3hCO0FBQ0EsWUFBVTtBQUNWLFFBQU0sT0FBTyxRQUFRLFVBQVUsU0FBUyxDQUFDO0FBQ3pDLElBQUUsZUFBZSxNQUFNLE9BQU8sTUFBTSxTQUFTO0FBQzdDLFlBQVUsSUFBSTtBQUNkLElBQUUsZ0JBQWdCO0FBQ2xCLG1CQUFpQjtBQUNqQixhQUFXLFdBQVcsU0FBUztBQUNqQztBQUVBLFNBQVMsT0FBTztBQUNkLE1BQUksU0FBUztBQUNYLGNBQVU7QUFDVixNQUFFLGdCQUFnQjtBQUFBLEVBQ3BCO0FBQ0EsbUJBQWlCO0FBQ2pCLGlCQUFlO0FBQ2pCO0FBRUEsU0FBUyxhQUFhO0FBQ3BCLE1BQUksQ0FBQyxhQUFhLENBQUMsRUFBRztBQUV0QixRQUFNLE9BQU8sUUFBUSxVQUFVLFNBQVMsQ0FBQztBQUN6QyxRQUFNLFVBQVUsRUFBRSxlQUFlLE1BQU0sT0FBTyxNQUFNLFNBQVM7QUFDN0QsWUFBVSxJQUFJO0FBQ2QsTUFBSSxXQUFXLFNBQVM7QUFDdEIsTUFBRSxnQkFBZ0IsRUFBRSxTQUFTO0FBQUEsRUFDL0I7QUFDRjtBQUVBLFNBQVMsZ0JBQWdCO0FBQ3ZCLFFBQU0sT0FBTyxTQUFTLGlCQUFpQixXQUFXO0FBQ2xELFFBQU0sY0FBYyxFQUFFLGNBQWMsRUFBRSxZQUFZO0FBQ2xELE9BQUssUUFBUSxDQUFDLEtBQUssTUFBTSxJQUFJLFVBQVUsT0FBTyxVQUFVLE1BQU0sV0FBVyxDQUFDO0FBQzFFLHdCQUFzQixhQUFhO0FBQ3JDO0FBRUEsZUFBZSxZQUFZO0FBQ3pCLFFBQU0sU0FBUyxJQUFJLGdCQUFnQixPQUFPLFNBQVMsTUFBTTtBQUN6RCxRQUFNLGdCQUFnQixPQUFPLElBQUksTUFBTTtBQUN2QyxRQUFNLGVBQWUsTUFBTSxvQkFBb0I7QUFDL0MsUUFBTSxTQUFTLFVBQVUsY0FBYyxhQUFhO0FBQ3BELHNCQUFvQjtBQUNwQixRQUFNLE9BQU8sUUFBUSxPQUFPLFNBQVMsQ0FBQztBQUN0QyxJQUFFLGVBQWUsTUFBTSxPQUFPLE1BQU0sU0FBUztBQUM3QyxZQUFVLElBQUk7QUFDZCxpQkFBZTtBQUNmLHdCQUFzQixhQUFhO0FBQ3JDO0FBRUEsVUFBVTtBQUVWLElBQU8sY0FBUSxDQUFDOyIsCiAgIm5hbWVzIjogWyJuIiwgImEiLCAiaSIsICJyIiwgImUiLCAibSIsICJvIiwgInQiLCAicyIsICJjIiwgInAiLCAibWlkaSIsICJtIiwgInAiLCAibm90ZSIsICJtIiwgIm9iaiIsICJwIiwgIl9zZXRQcm90b3R5cGVPZiIsICJvIiwgIlV0aWxzIiwgIk5vdGVPbkV2ZW50IiwgIk5vdGVPZmZFdmVudCIsICJOb3RlRXZlbnQiLCAic2NhbGUxNGJpdHMiLCAiUGl0Y2hCZW5kRXZlbnQiLCAiUHJvZ3JhbUNoYW5nZUV2ZW50IiwgIkNvbnRyb2xsZXJDaGFuZ2VFdmVudCIsICJDb3B5cmlnaHRFdmVudCIsICJDdWVQb2ludEV2ZW50IiwgIkVuZFRyYWNrRXZlbnQiLCAiSW5zdHJ1bWVudE5hbWVFdmVudCIsICJLZXlTaWduYXR1cmVFdmVudCIsICJub3RlIiwgIkx5cmljRXZlbnQiLCAiTWFya2VyRXZlbnQiLCAiVGVtcG9FdmVudCIsICJ0ZW1wbyIsICJUZXh0RXZlbnQiLCAiVGltZVNpZ25hdHVyZUV2ZW50IiwgIlRyYWNrTmFtZUV2ZW50IiwgIlRyYWNrIiwgIlZleEZsb3ciLCAiSGVhZGVyQ2h1bmsiLCAiV3JpdGVyIiwgImJ1aWxkIiwgIlBsYXllciIsICJ0ZW1wbyIsICJ0cmFuc3Bvc2UiLCAibm90ZSIsICJwaWNrT25lIiwgImRpY2UiLCAiaW5pdF91dGlscyIsICJwcm9ncmVzc2lvbl9leHBvcnRzIiwgImdldENob3JkRGVncmVlcyIsICJnZXRDaG9yZHNCeVByb2dyZXNzaW9uIiwgInByb2dyZXNzaW9uIiwgImltcG9ydF9oYXJtb25pY3MiLCAiaWR4QnlEZWdyZWUiLCAiZ2V0Q2hvcmROYW1lIiwgImdldFByb2dGYWN0b3J5IiwgIk0iLCAibSIsICJpbml0X3Byb2dyZXNzaW9uIiwgImluaXRfdXRpbHMiLCAibm90ZSIsICJwaWNrT25lIiwgImRpY2UiLCAicmVxdWlyZV90b2tlbml6ZSIsICJyZXF1aXJlX3V0aWxzIiwgInJlcXVpcmVfcGFyc2VyIiwgImdldENob3Jkc0J5UHJvZ3Jlc3Npb24iLCAic2NhbGUiLCAicmVkdWNlIiwgInBhcnNlIiwgIm5vcm1hbGl6ZU5vdGUiLCAibSIsICJwIiwgImNyZWF0ZUVkaXRvciIsICJjcmVhdGVNaXhlciIsICJiYXJzIiwgImtleSIsICJpbXBvcnRfaGFybW9uaWNzIiwgImlzTnVtIiwgImlzU3RyIiwgImlzRGVmIiwgIm1pZGlUb0ZyZXEiLCAibWlkaSIsICJwYXJzZSIsICJtIiwgIlJFR0VYIiwgInAiLCAiU0VNSVRPTkVTIiwgIm5vdGUiLCAiaW5pdF9ub3RlX3BhcnNlciIsICJfX2VzbSIsICJ0b25hbF9taWRpX2V4cG9ydHMiLCAiX19leHBvcnQiLCAidG9NaWRpIiwgIlNIQVJQUyIsICJGTEFUUyIsICJpbml0X3RvbmFsX21pZGkiLCAicmVxdWlyZV9wYWNrYWdlIiwgIl9fY29tbW9uSlMiLCAicmVxdWlyZV9idWlsZCIsICJfX3RvQ29tbW9uSlMiLCAib2JqIiwgIl9zZXRQcm90b3R5cGVPZiIsICJvIiwgIlV0aWxzIiwgIk5vdGVPbkV2ZW50IiwgIk5vdGVPZmZFdmVudCIsICJOb3RlRXZlbnQiLCAic2NhbGUxNGJpdHMiLCAiUGl0Y2hCZW5kRXZlbnQiLCAiUHJvZ3JhbUNoYW5nZUV2ZW50IiwgIkNvbnRyb2xsZXJDaGFuZ2VFdmVudCIsICJDb3B5cmlnaHRFdmVudCIsICJDdWVQb2ludEV2ZW50IiwgIkVuZFRyYWNrRXZlbnQiLCAiSW5zdHJ1bWVudE5hbWVFdmVudCIsICJLZXlTaWduYXR1cmVFdmVudCIsICJMeXJpY0V2ZW50IiwgIk1hcmtlckV2ZW50IiwgIlRlbXBvRXZlbnQiLCAidGVtcG8iLCAiVGV4dEV2ZW50IiwgIlRpbWVTaWduYXR1cmVFdmVudCIsICJUcmFja05hbWVFdmVudCIsICJUcmFjayIsICJWZXhGbG93IiwgIkhlYWRlckNodW5rIiwgIldyaXRlciIsICJidWlsZCIsICJyZXF1aXJlX21haW4iLCAibiIsICJhIiwgImkiLCAiciIsICJlIiwgInQiLCAicyIsICJjIiwgIl9fdG9FU00iLCAiZ2V0Q2hvcmRzQnlQcm9ncmVzc2lvbiIsICJzY2FsZSIsICJyZWR1Y2UiLCAibWVyZ2UiLCAiaW1wb3J0X3BhcnNlciIsICJQbGF5ZXIiLCAibWlkaSIsICJTRU1JVE9ORVMiLCAibSIsICJwcmVzZXRTZWxlY3QiXQp9Cg==
