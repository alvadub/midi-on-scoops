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
      if (cls === "tok-channel") return span(cls, token, { instrument: token.slice(1) });
      if (cls === "tok-mode") return span(cls, token, { mode: token.toLowerCase() });
      if (cls === "tok-pattern") return span(cls, token, { pattern: "1" });
      if (cls === "tok-note") return span(cls, token, { note: token });
      if (cls === "tok-chord") return span(cls, token, { chord: token });
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL2hhcm1vbmljcy9tYWluLmpzIiwgIm5vZGVfbW9kdWxlcy9ub3RlLXBhcnNlci9pbmRleC5qcyIsICJub2RlX21vZHVsZXMvdG9uYWwtbWlkaS9pbmRleC5qcyIsICJub2RlX21vZHVsZXMvbWlkaS13cml0ZXItanMvcGFja2FnZS5qc29uIiwgIm5vZGVfbW9kdWxlcy9taWRpLXdyaXRlci1qcy9idWlsZC9pbmRleC5qcyIsICJzcmMvY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wbGF5ZXIuanMiLCAibm9kZV9tb2R1bGVzL3NjcmliYmxldHVuZS9zcmMvdXRpbHMudHMiLCAibm9kZV9tb2R1bGVzL3NjcmliYmxldHVuZS9zcmMvcHJvZ3Jlc3Npb24udHMiLCAic3JjL2xpYi9zcmMvbGliL3NyYy9saWIvdG9rZW5pemUuanMiLCAic3JjL2xpYi9zcmMvbGliL3NyYy9saWIvdXRpbHMuanMiLCAic3JjL2xpYi9zcmMvbGliL3NyYy9saWIvcGFyc2VyLmpzIiwgInNyYy9zcmMvc3JjL2hpZ2hsaWdodC5qcyIsICJzcmMvY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9lZGl0b3IuanMiLCAic3JjL2NvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvbWl4ZXIuanMiLCAic3JjL3NyYy9pbmRleC5qcyIsICJzcmMvbGliL25vZGVfbW9kdWxlcy9ub3RlLXBhcnNlci9pbmRleC5qcyIsICJzcmMvbGliL25vZGVfbW9kdWxlcy90b25hbC1taWRpL2luZGV4LmpzIiwgInNyYy9saWIvbm9kZV9tb2R1bGVzL21pZGktd3JpdGVyLWpzL3BhY2thZ2UuanNvbiIsICJzcmMvbGliL25vZGVfbW9kdWxlcy9taWRpLXdyaXRlci1qcy9idWlsZC9pbmRleC5qcyIsICJzcmMvbGliL25vZGVfbW9kdWxlcy9qc21pZGdlbi9saWIvanNtaWRnZW4uanMiLCAic3JjL2xpYi9zcmMvbGliL3NyYy9saWIvc3JjL2xpYi91dGlscy5qcyIsICJzcmMvbGliL25vZGVfbW9kdWxlcy9oYXJtb25pY3MvbWFpbi5qcyIsICJzcmMvbGliL3NyYy9saWIvc3JjL2xpYi9zcmMvbGliL3Rva2VuaXplLmpzIiwgInNyYy9saWIvbm9kZV9tb2R1bGVzL3NjcmliYmxldHVuZS9zcmMvdXRpbHMudHMiLCAic3JjL2xpYi9ub2RlX21vZHVsZXMvc2NyaWJibGV0dW5lL3NyYy9wcm9ncmVzc2lvbi50cyIsICJzcmMvbGliL3NyYy9saWIvc3JjL2xpYi9zcmMvbGliL3BhcnNlci5qcyIsICJzcmMvbGliL3NyYy9saWIvc3JjL2xpYi9zcmMvbGliL21peHVwLmpzIiwgInNyYy9saWIvc3JjL2xpYi9zcmMvbGliL2luZGV4LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIoKCk9PntcInVzZSBzdHJpY3RcIjt2YXIgbj17NDEzOm49PntuLmV4cG9ydHM9SlNPTi5wYXJzZSgne1wiNXRoXCI6XCIxMDAwMDAwMTAwMDBcIixcIk03IzVzdXM0XCI6XCIxMDAwMDEwMDEwMDFcIixcIjcjNXN1czRcIjpcIjEwMDAwMTAwMTAxMFwiLFwic3VzNFwiOlwiMTAwMDAxMDEwMDAwXCIsXCJNN3N1czRcIjpcIjEwMDAwMTAxMDAwMVwiLFwiN3N1czRcIjpcIjEwMDAwMTAxMDAxMFwiLFwiN25vNVwiOlwiMTAwMDEwMDAwMDEwXCIsXCJhdWdcIjpcIjEwMDAxMDAwMTAwMFwiLFwiTTdiNlwiOlwiMTAwMDEwMDAxMDAxXCIsXCJtYWo3IzVcIjpcIjEwMDAxMDAwMTAwMVwiLFwiNyM1XCI6XCIxMDAwMTAwMDEwMTBcIixcIjdiMTNcIjpcIjEwMDAxMDAwMTAxMFwiLFwiTVwiOlwiMTAwMDEwMDEwMDAwXCIsXCJtYWo3XCI6XCIxMDAwMTAwMTAwMDFcIixcIjd0aFwiOlwiMTAwMDEwMDEwMDEwXCIsXCI2dGhcIjpcIjEwMDAxMDAxMDEwMFwiLFwiN2FkZDZcIjpcIjEwMDAxMDAxMDExMFwiLFwiN2I2XCI6XCIxMDAwMTAwMTEwMTBcIixcIk1iNVwiOlwiMTAwMDEwMTAwMDAwXCIsXCJNN2I1XCI6XCIxMDAwMTAxMDAwMDFcIixcIjdiNVwiOlwiMTAwMDEwMTAwMDEwXCIsXCJtYWojNFwiOlwiMTAwMDEwMTEwMDAxXCIsXCI3IzExXCI6XCIxMDAwMTAxMTAwMTBcIixcIk02IzExXCI6XCIxMDAwMTAxMTAxMDBcIixcIjcjMTFiMTNcIjpcIjEwMDAxMDExMTAxMFwiLFwibSM1XCI6XCIxMDAxMDAwMDEwMDBcIixcIm1iNk03XCI6XCIxMDAxMDAwMDEwMDFcIixcIm03IzVcIjpcIjEwMDEwMDAwMTAxMFwiLFwibVwiOlwiMTAwMTAwMDEwMDAwXCIsXCJtL21hN1wiOlwiMTAwMTAwMDEwMDAxXCIsXCJtN1wiOlwiMTAwMTAwMDEwMDEwXCIsXCJtNlwiOlwiMTAwMTAwMDEwMTAwXCIsXCJtTWFqN2I2XCI6XCIxMDAxMDAwMTEwMDFcIixcImRpbVwiOlwiMTAwMTAwMTAwMDAwXCIsXCJvTTdcIjpcIjEwMDEwMDEwMDAwMVwiLFwibTdiNVwiOlwiMTAwMTAwMTAwMDEwXCIsXCJkaW03XCI6XCIxMDAxMDAxMDAxMDBcIixcIm83TTdcIjpcIjEwMDEwMDEwMDEwMVwiLFwiNHRoXCI6XCIxMDAxMDEwMDAwMTBcIixcIm1hZGQ0XCI6XCIxMDAxMDEwMTAwMDBcIixcIm03YWRkMTFcIjpcIjEwMDEwMTAxMDAxMFwiLFwiK2FkZCM5XCI6XCIxMDAxMTAwMDEwMDBcIixcIjcjNSM5XCI6XCIxMDAxMTAwMDEwMTBcIixcIjcjOVwiOlwiMTAwMTEwMDEwMDEwXCIsXCIxMyM5XCI6XCIxMDAxMTAwMTAxMTBcIixcIjcjOWIxM1wiOlwiMTAwMTEwMDExMDEwXCIsXCJtYWo3IzkjMTFcIjpcIjEwMDExMDExMDAwMVwiLFwiNyM5IzExXCI6XCIxMDAxMTAxMTAwMTBcIixcIjEzIzkjMTFcIjpcIjEwMDExMDExMDExMFwiLFwiNyM5IzExYjEzXCI6XCIxMDAxMTAxMTEwMTBcIixcInN1czJcIjpcIjEwMTAwMDAxMDAwMFwiLFwiTTkjNXN1czRcIjpcIjEwMTAwMTAwMTAwMVwiLFwic3VzMjRcIjpcIjEwMTAwMTAxMDAwMFwiLFwiTTlzdXM0XCI6XCIxMDEwMDEwMTAwMDFcIixcIjExdGhcIjpcIjEwMTAwMTAxMDAxMFwiLFwiOXN1czRcIjpcIjEwMTAwMTAxMDAxMFwiLFwiMTNzdXM0XCI6XCIxMDEwMDEwMTAxMTBcIixcIjlubzVcIjpcIjEwMTAxMDAwMDAxMFwiLFwiMTNubzVcIjpcIjEwMTAxMDAwMDExMFwiLFwiTSM1YWRkOVwiOlwiMTAxMDEwMDAxMDAwXCIsXCJtYWo5IzVcIjpcIjEwMTAxMDAwMTAwMVwiLFwiOSM1XCI6XCIxMDEwMTAwMDEwMTBcIixcIjliMTNcIjpcIjEwMTAxMDAwMTAxMFwiLFwiTWFkZDlcIjpcIjEwMTAxMDAxMDAwMFwiLFwibWFqOVwiOlwiMTAxMDEwMDEwMDAxXCIsXCI5dGhcIjpcIjEwMTAxMDAxMDAxMFwiLFwiNi85XCI6XCIxMDEwMTAwMTAxMDBcIixcIm1hajEzXCI6XCIxMDEwMTAwMTAxMDFcIixcIk03YWRkMTNcIjpcIjEwMTAxMDAxMDEwMVwiLFwiMTN0aFwiOlwiMTAxMDEwMDEwMTEwXCIsXCJNOWI1XCI6XCIxMDEwMTAxMDAwMDFcIixcIjliNVwiOlwiMTAxMDEwMTAwMDEwXCIsXCIxM2I1XCI6XCIxMDEwMTAxMDAxMTBcIixcIjkjNSMxMVwiOlwiMTAxMDEwMTAxMDEwXCIsXCJtYWo5IzExXCI6XCIxMDEwMTAxMTAwMDFcIixcIjkjMTFcIjpcIjEwMTAxMDExMDAxMFwiLFwiNjkjMTFcIjpcIjEwMTAxMDExMDEwMFwiLFwiTTEzIzExXCI6XCIxMDEwMTAxMTAxMDFcIixcIjEzIzExXCI6XCIxMDEwMTAxMTAxMTBcIixcIjkjMTFiMTNcIjpcIjEwMTAxMDExMTAxMFwiLFwibTkjNVwiOlwiMTAxMTAwMDAxMDEwXCIsXCJtYWRkOVwiOlwiMTAxMTAwMDEwMDAwXCIsXCJtTTlcIjpcIjEwMTEwMDAxMDAwMVwiLFwibTlcIjpcIjEwMTEwMDAxMDAxMFwiLFwibTY5XCI6XCIxMDExMDAwMTAxMDBcIixcIm0xM1wiOlwiMTAxMTAwMDEwMTEwXCIsXCJtTWFqOWI2XCI6XCIxMDExMDAwMTEwMDFcIixcIm05YjVcIjpcIjEwMTEwMDEwMDAxMFwiLFwibTExQVwiOlwiMTAxMTAxMDAxMDEwXCIsXCJtMTFcIjpcIjEwMTEwMTAxMDAxMFwiLFwiYjlzdXNcIjpcIjExMDAwMTAxMDAxMFwiLFwiMTFiOVwiOlwiMTEwMDAxMDEwMDEwXCIsXCI3c3VzNGI5YjEzXCI6XCIxMTAwMDEwMTEwMTBcIixcImFsdDdcIjpcIjExMDAxMDAwMDAxMFwiLFwiNyM1YjlcIjpcIjExMDAxMDAwMTAxMFwiLFwiTWFkZGI5XCI6XCIxMTAwMTAwMTAwMDBcIixcIk03YjlcIjpcIjExMDAxMDAxMDAwMVwiLFwiN2I5XCI6XCIxMTAwMTAwMTAwMTBcIixcIjEzYjlcIjpcIjExMDAxMDAxMDExMFwiLFwiN2I5YjEzXCI6XCIxMTAwMTAwMTEwMTBcIixcIjcjNWI5IzExXCI6XCIxMTAwMTAxMDEwMTBcIixcIjdiOSMxMVwiOlwiMTEwMDEwMTEwMDEwXCIsXCIxM2I5IzExXCI6XCIxMTAwMTAxMTAxMTBcIixcIjdiOWIxMyMxMVwiOlwiMTEwMDEwMTExMDEwXCIsXCJtYjZiOVwiOlwiMTEwMTAwMDAxMDAwXCIsXCI3YjkjOVwiOlwiMTEwMTEwMDEwMDEwXCJ9Jyl9LDcyMjpuPT57bi5leHBvcnRzPUpTT04ucGFyc2UoJ3tcIm1ham9yIHBlbnRhdG9uaWNcIjpcIjEwMTAxMDAxMDEwMFwiLFwiaW9uaWFuIHBlbnRhdG9uaWNcIjpcIjEwMDAxMTAxMDAwMVwiLFwibWl4b2x5ZGlhbiBwZW50YXRvbmljXCI6XCIxMDAwMTEwMTAwMTBcIixcInJpdHVzZW5cIjpcIjEwMTAwMTAxMDEwMFwiLFwiZWd5cHRpYW5cIjpcIjEwMTAwMTAxMDAxMFwiLFwibmVvcG9saXRhbiBtYWpvciBwZW50YXRvbmljXCI6XCIxMDAwMTExMDAwMTBcIixcInZpZXRuYW1lc2UgMVwiOlwiMTAwMTAxMDExMDAwXCIsXCJwZWxvZ1wiOlwiMTEwMTAwMDExMDAwXCIsXCJrdW1vaWpvc2hpXCI6XCIxMTAwMDEwMTEwMDBcIixcImhpcmFqb3NoaVwiOlwiMTAxMTAwMDExMDAwXCIsXCJpd2F0b1wiOlwiMTEwMDAxMTAwMDEwXCIsXCJpbi1zZW5cIjpcIjExMDAwMTAxMDAxMFwiLFwibHlkaWFuIHBlbnRhdG9uaWNcIjpcIjEwMDAxMDExMDAwMVwiLFwibWFsa29zIHJhZ2FcIjpcIjEwMDEwMTAwMTAxMFwiLFwibG9jcmlhbiBwZW50YXRvbmljXCI6XCIxMDAxMDExMDAwMTBcIixcIm1pbm9yIHBlbnRhdG9uaWNcIjpcIjEwMDEwMTAxMDAxMFwiLFwibWlub3Igc2l4IHBlbnRhdG9uaWNcIjpcIjEwMDEwMTAxMDEwMFwiLFwiZmxhdCB0aHJlZSBwZW50YXRvbmljXCI6XCIxMDExMDAwMTAxMDBcIixcImZsYXQgc2l4IHBlbnRhdG9uaWNcIjpcIjEwMTAxMDAxMTAwMFwiLFwic2NyaWFiaW5cIjpcIjExMDAxMDAxMDEwMFwiLFwid2hvbGUgdG9uZSBwZW50YXRvbmljXCI6XCIxMDAwMTAxMDEwMTBcIixcImx5ZGlhbiAjNVAgcGVudGF0b25pY1wiOlwiMTAwMDEwMTAxMDAxXCIsXCJseWRpYW4gZG9taW5hbnQgcGVudGF0b25pY1wiOlwiMTAwMDEwMTEwMDEwXCIsXCJtaW5vciAjN00gcGVudGF0b25pY1wiOlwiMTAwMTAxMDEwMDAxXCIsXCJzdXBlciBsb2NyaWFuIHBlbnRhdG9uaWNcIjpcIjEwMDExMDEwMDAxMFwiLFwibWlub3IgaGV4YXRvbmljXCI6XCIxMDExMDEwMTAwMDFcIixcImF1Z21lbnRlZFwiOlwiMTAwMTEwMDExMDAxXCIsXCJtYWpvciBibHVlc1wiOlwiMTAxMTEwMDEwMTAwXCIsXCJwaW9uZ2lvXCI6XCIxMDEwMDEwMTAxMTBcIixcInByb21ldGhldXMgbmVvcG9saXRhblwiOlwiMTEwMDEwMTAwMTEwXCIsXCJwcm9tZXRoZXVzXCI6XCIxMDEwMTAxMDAxMTBcIixcIm15c3RlcnkgIzFcIjpcIjExMDAxMDEwMTAxMFwiLFwic2l4IHRvbmUgc3ltbWV0cmljXCI6XCIxMTAwMTEwMDExMDBcIixcIndob2xlIHRvbmVcIjpcIjEwMTAxMDEwMTAxMFwiLFwibWVzc2lhZW5cXCdzIG1vZGUgIzVcIjpcIjExMDAwMTExMDAwMVwiLFwibWlub3IgYmx1ZXNcIjpcIjEwMDEwMTExMDAxMFwiLFwibG9jcmlhbiBtYWpvclwiOlwiMTAxMDExMTAxMDEwXCIsXCJkb3VibGUgaGFybW9uaWMgbHlkaWFuXCI6XCIxMTAwMTAxMTEwMDFcIixcImhhcm1vbmljIG1pbm9yXCI6XCIxMDExMDEwMTEwMDFcIixcImFsdGVyZWRcIjpcIjExMDExMDEwMTAxMFwiLFwibG9jcmlhbiAjMlwiOlwiMTAxMTAxMTAxMDEwXCIsXCJtaXhvbHlkaWFuIGI2XCI6XCIxMDEwMTEwMTEwMTBcIixcImx5ZGlhbiBkb21pbmFudFwiOlwiMTAxMDEwMTEwMTEwXCIsXCJseWRpYW5cIjpcIjEwMTAxMDExMDEwMVwiLFwibHlkaWFuIGF1Z21lbnRlZFwiOlwiMTAxMDEwMTAxMTAxXCIsXCJkb3JpYW4gYjJcIjpcIjExMDEwMTAxMDExMFwiLFwibWVsb2RpYyBtaW5vclwiOlwiMTAxMTAxMDEwMTAxXCIsXCJsb2NyaWFuXCI6XCIxMTAxMDExMDEwMTBcIixcInVsdHJhbG9jcmlhblwiOlwiMTEwMTEwMTAxMTAwXCIsXCJsb2NyaWFuIDZcIjpcIjExMDEwMTEwMDExMFwiLFwiYXVnbWVudGVkIGhlcHRhdG9uaWNcIjpcIjEwMDExMTAxMTAwMVwiLFwicm9tYW5pYW4gbWlub3JcIjpcIjEwMTEwMDExMDExMFwiLFwiZG9yaWFuICM0XCI6XCIxMDExMDAxMTAxMTBcIixcImx5ZGlhbiBkaW1pbmlzaGVkXCI6XCIxMDExMDAxMTAxMDFcIixcInBocnlnaWFuXCI6XCIxMTAxMDEwMTEwMTBcIixcImxlYWRpbmcgd2hvbGUgdG9uZVwiOlwiMTAxMDEwMTAxMDExXCIsXCJseWRpYW4gbWlub3JcIjpcIjEwMTAxMDExMTAxMFwiLFwicGhyeWdpYW4gZG9taW5hbnRcIjpcIjExMDAxMTAxMTAxMFwiLFwiYmFsaW5lc2VcIjpcIjExMDEwMTAxMTAwMVwiLFwibmVvcG9saXRhbiBtYWpvclwiOlwiMTEwMTAxMDEwMTAxXCIsXCJhZW9saWFuXCI6XCIxMDExMDEwMTEwMTBcIixcImhhcm1vbmljIG1ham9yXCI6XCIxMDEwMTEwMTEwMDFcIixcImRvdWJsZSBoYXJtb25pYyBtYWpvclwiOlwiMTEwMDExMDExMDAxXCIsXCJkb3JpYW5cIjpcIjEwMTEwMTAxMDExMFwiLFwiaHVuZ2FyaWFuIG1pbm9yXCI6XCIxMDExMDAxMTEwMDFcIixcImh1bmdhcmlhbiBtYWpvclwiOlwiMTAwMTEwMTEwMTEwXCIsXCJvcmllbnRhbFwiOlwiMTEwMDExMTAwMTEwXCIsXCJmbGFtZW5jb1wiOlwiMTEwMTEwMTEwMDEwXCIsXCJ0b2RpIHJhZ2FcIjpcIjExMDEwMDExMTAwMVwiLFwibWl4b2x5ZGlhblwiOlwiMTAxMDExMDEwMTEwXCIsXCJwZXJzaWFuXCI6XCIxMTAwMTExMDEwMDFcIixcIm1ham9yXCI6XCIxMDEwMTEwMTAxMDFcIixcImVuaWdtYXRpY1wiOlwiMTEwMDEwMTAxMDExXCIsXCJtYWpvciBhdWdtZW50ZWRcIjpcIjEwMTAxMTAwMTEwMVwiLFwibHlkaWFuICM5XCI6XCIxMDAxMTAxMTAxMDFcIixcIm1lc3NpYWVuXFwncyBtb2RlICM0XCI6XCIxMTEwMDExMTEwMDFcIixcInB1cnZpIHJhZ2FcIjpcIjExMDAxMTExMTAwMVwiLFwic3BhbmlzaCBoZXB0YXRvbmljXCI6XCIxMTAxMTEwMTEwMTBcIixcImJlYm9wXCI6XCIxMDEwMTEwMTAxMTFcIixcImJlYm9wIG1pbm9yXCI6XCIxMDExMTEwMTAxMTBcIixcImJlYm9wIG1ham9yXCI6XCIxMDEwMTEwMTExMDFcIixcImJlYm9wIGxvY3JpYW5cIjpcIjExMDEwMTExMTAxMFwiLFwibWlub3IgYmVib3BcIjpcIjEwMTEwMTAxMTAxMVwiLFwiZGltaW5pc2hlZFwiOlwiMTAxMTAxMTAxMTAxXCIsXCJpY2hpa29zdWNob1wiOlwiMTAxMDExMTEwMTAxXCIsXCJtaW5vciBzaXggZGltaW5pc2hlZFwiOlwiMTAxMTAxMDExMTAxXCIsXCJoYWxmLXdob2xlIGRpbWluaXNoZWRcIjpcIjExMDExMDExMDExMFwiLFwia2FmaSByYWdhXCI6XCIxMDAxMTEwMTAxMTFcIixcIm1lc3NpYWVuXFwncyBtb2RlICM2XCI6XCIxMDEwMTExMDEwMTFcIixcImNvbXBvc2l0ZSBibHVlc1wiOlwiMTAxMTExMTEwMTEwXCIsXCJtZXNzaWFlblxcJ3MgbW9kZSAjM1wiOlwiMTAxMTEwMTExMDExXCIsXCJtZXNzaWFlblxcJ3MgbW9kZSAjN1wiOlwiMTExMTAxMTExMTAxXCIsXCJjaHJvbWF0aWNcIjpcIjExMTExMTExMTExMVwiLFwiaW9uaWFuXCI6XCIxMDEwMTEwMTAxMDFcIixcIm1pbm9yXCI6XCIxMDExMDEwMTEwMTBcIn0nKX19LGU9e307ZnVuY3Rpb24gbyhhKXt2YXIgaT1lW2FdO2lmKHZvaWQgMCE9PWkpcmV0dXJuIGkuZXhwb3J0czt2YXIgcj1lW2FdPXtleHBvcnRzOnt9fTtyZXR1cm4gblthXShyLHIuZXhwb3J0cyxvKSxyLmV4cG9ydHN9by5kPShuLGUpPT57Zm9yKHZhciBhIGluIGUpby5vKGUsYSkmJiFvLm8obixhKSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sYSx7ZW51bWVyYWJsZTohMCxnZXQ6ZVthXX0pfSxvLm89KG4sZSk9Pk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLGUpLG8ucj1uPT57XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkobixTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkobixcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX07dmFyIGE9e307KCgpPT57by5yKGEpLG8uZChhLHtjaG9yZDooKT0+bSxjaG9yZHM6KCk9PnQsaW5saW5lQ2hvcmQ6KCk9PnIsc2NhbGU6KCk9PmMsc2NhbGVzOigpPT5zfSk7dmFyIG49byg3MjIpLGU9byg0MTMpLGk9ZnVuY3Rpb24obyl7dmFyIGE9by5zY2FsZSxpPW8uY2hvcmQscj1hfHxpLHQ9YT9cInNjYWxlXCI6XCJjaG9yZFwiO2lmKFwic3RyaW5nXCIhPXR5cGVvZiByKXRocm93IG5ldyBFcnJvcihcIlwiLmNvbmNhdChyLFwiIGlzIG5vdCBhIHZhbGlkIGlucHV0IGZvciBcIikuY29uY2F0KHQpKTt2YXIgcyxtLGM9ci5pbmRleE9mKFwiIFwiKTstMT09PWM/KHM9ci5zbGljZSgxKSxtPXJbMF0sXCJiXCIhPT1yWzFdJiZcIiNcIiE9PXJbMV18fChzPXIuc2xpY2UoMiksbSs9clsxXSkpOihzPXIuc2xpY2UoLTE9PT1jPzE6YysxKSxtPXIuc2xpY2UoMCxjKSk7dmFyIGQ9ZnVuY3Rpb24obil7cmV0dXJue1wiQyNcIjpcIkRiXCIsXCJEI1wiOlwiRWJcIixcIkYjXCI6XCJHYlwiLFwiRyNcIjpcIkFiXCIsXCJBI1wiOlwiQmJcIn1bbi50b1VwcGVyQ2FzZSgpXXx8bi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStuLnNsaWNlKDEpfShtLnJlcGxhY2UoL1xcZC9nLFwiXCIpKSxsPVwiXCIhPT1tLnJlcGxhY2UoL1xcRC9nLFwiXCIpPyttLnJlcGxhY2UoL1xcRC9nLFwiXCIpOjQ7aWYoaXNOYU4obCkpdGhyb3cgbmV3IEVycm9yKFwiXCIuY29uY2F0KG1bMF0sXCIgZG9lcyBub3QgaGF2ZSBhIHZhbGlkIG9jdGF2ZVwiKSk7aWYoIW5bc10mJiFlW3NdKXRocm93IG5ldyBFcnJvcihcIlwiLmNvbmNhdChyLFwiIGlzIG5vdCBhIHZhbGlkIFwiKS5jb25jYXQodCkpO2Zvcih2YXIgYj1mdW5jdGlvbihuLGUpe3ZhciBvPVtcIkNcIixcIkRiXCIsXCJEXCIsXCJFYlwiLFwiRVwiLFwiRlwiLFwiR2JcIixcIkdcIixcIkFiXCIsXCJBXCIsXCJCYlwiLFwiQlwiXSxhPW8ubWFwKChmdW5jdGlvbihuKXtyZXR1cm4gbitlfSkpLGk9by5tYXAoKGZ1bmN0aW9uKG4pe3JldHVybiBuKyhlKzEpfSkpLHI9YS5jb25jYXQoaSk7cmV0dXJuIHIuc2xpY2Uoci5pbmRleE9mKG4rZSkpfShkLGwpLHU9W10scD0wLGg9MCxmPWE/bjplO3A8ZltzXS5sZW5ndGg7KVwiMVwiPT09ZltzXVtwXSYmdS5wdXNoKGJbaF0pLHArKyxoKys7cmV0dXJuIHV9LHI9ZnVuY3Rpb24obil7dmFyIGUsbyxhPVwiYjlzdXNcIixyPTQ7cmV0dXJuIG4uaW5jbHVkZXMoYSk/KG89YSxlPW4uc2xpY2UoMCxuLmluZGV4T2YoYSkpKTooZT1uWzBdLG89bi5zbGljZSgxKSxcImJcIiE9PW5bMV0mJlwiI1wiIT09blsxXXx8KGUrPW5bMV0sbz1uLnNsaWNlKDIpKSksbi5pbmNsdWRlcyhcIl9cIikmJihyPStuLnNwbGl0KFwiX1wiKVsxXSxvPW8uc2xpY2UoMCxvLmluZGV4T2YoXCJfXCIpKSksaSh7Y2hvcmQ6ZStyK1wiIFwiK299KX0sdD1mdW5jdGlvbigpe3JldHVybiBPYmplY3Qua2V5cyhlKX0scz1mdW5jdGlvbigpe3JldHVybiBPYmplY3Qua2V5cyhuKX0sbT1mdW5jdGlvbihuKXtyZXR1cm4gaSh7Y2hvcmQ6bn0pfSxjPWZ1bmN0aW9uKG4pe3JldHVybiBpKHtzY2FsZTpufSl9fSkoKTt2YXIgaT1leHBvcnRzO2Zvcih2YXIgciBpbiBhKWlbcl09YVtyXTthLl9fZXNNb2R1bGUmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShpLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1haW4uanMubWFwIiwgIid1c2Ugc3RyaWN0J1xuXG4vLyB1dGlsXG5mdW5jdGlvbiBmaWxsU3RyIChzLCBudW0pIHsgcmV0dXJuIEFycmF5KG51bSArIDEpLmpvaW4ocykgfVxuZnVuY3Rpb24gaXNOdW0gKHgpIHsgcmV0dXJuIHR5cGVvZiB4ID09PSAnbnVtYmVyJyB9XG5mdW5jdGlvbiBpc1N0ciAoeCkgeyByZXR1cm4gdHlwZW9mIHggPT09ICdzdHJpbmcnIH1cbmZ1bmN0aW9uIGlzRGVmICh4KSB7IHJldHVybiB0eXBlb2YgeCAhPT0gJ3VuZGVmaW5lZCcgfVxuZnVuY3Rpb24gbWlkaVRvRnJlcSAobWlkaSwgdHVuaW5nKSB7XG4gIHJldHVybiBNYXRoLnBvdygyLCAobWlkaSAtIDY5KSAvIDEyKSAqICh0dW5pbmcgfHwgNDQwKVxufVxuXG52YXIgUkVHRVggPSAvXihbYS1nQS1HXSkoI3sxLH18YnsxLH18eHsxLH18KSgtP1xcZCopXFxzKiguKilcXHMqJC9cbi8qKlxuICogQSByZWdleCBmb3IgbWF0Y2hpbmcgbm90ZSBzdHJpbmdzIGluIHNjaWVudGlmaWMgbm90YXRpb24uXG4gKlxuICogQG5hbWUgcmVnZXhcbiAqIEBmdW5jdGlvblxuICogQHJldHVybiB7UmVnRXhwfSB0aGUgcmVnZXhwIHVzZWQgdG8gcGFyc2UgdGhlIG5vdGUgbmFtZVxuICpcbiAqIFRoZSBub3RlIHN0cmluZyBzaG91bGQgaGF2ZSB0aGUgZm9ybSBgbGV0dGVyW2FjY2lkZW50YWxzXVtvY3RhdmVdW2VsZW1lbnRdYFxuICogd2hlcmU6XG4gKlxuICogLSBsZXR0ZXI6IChSZXF1aXJlZCkgaXMgYSBsZXR0ZXIgZnJvbSBBIHRvIEcgZWl0aGVyIHVwcGVyIG9yIGxvd2VyIGNhc2VcbiAqIC0gYWNjaWRlbnRhbHM6IChPcHRpb25hbCkgY2FuIGJlIG9uZSBvciBtb3JlIGBiYCAoZmxhdHMpLCBgI2AgKHNoYXJwcykgb3IgYHhgIChkb3VibGUgc2hhcnBzKS5cbiAqIFRoZXkgY2FuIE5PVCBiZSBtaXhlZC5cbiAqIC0gb2N0YXZlOiAoT3B0aW9uYWwpIGEgcG9zaXRpdmUgb3IgbmVnYXRpdmUgaW50ZWdlclxuICogLSBlbGVtZW50OiAoT3B0aW9uYWwpIGFkZGl0aW9uYWxseSBhbnl0aGluZyBhZnRlciB0aGUgZHVyYXRpb24gaXMgY29uc2lkZXJlZCB0b1xuICogYmUgdGhlIGVsZW1lbnQgbmFtZSAoZm9yIGV4YW1wbGU6ICdDMiBkb3JpYW4nKVxuICpcbiAqIFRoZSBleGVjdXRlZCByZWdleCBjb250YWlucyAoYnkgYXJyYXkgaW5kZXgpOlxuICpcbiAqIC0gMDogdGhlIGNvbXBsZXRlIHN0cmluZ1xuICogLSAxOiB0aGUgbm90ZSBsZXR0ZXJcbiAqIC0gMjogdGhlIG9wdGlvbmFsIGFjY2lkZW50YWxzXG4gKiAtIDM6IHRoZSBvcHRpb25hbCBvY3RhdmVcbiAqIC0gNDogdGhlIHJlc3Qgb2YgdGhlIHN0cmluZyAodHJpbW1lZClcbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIHBhcnNlciA9IHJlcXVpcmUoJ25vdGUtcGFyc2VyJylcbiAqIHBhcnNlci5yZWdleC5leGVjKCdjIzQnKVxuICogLy8gPT4gWydjIzQnLCAnYycsICcjJywgJzQnLCAnJ11cbiAqIHBhcnNlci5yZWdleC5leGVjKCdjIzQgbWFqb3InKVxuICogLy8gPT4gWydjIzRtYWpvcicsICdjJywgJyMnLCAnNCcsICdtYWpvciddXG4gKiBwYXJzZXIucmVnZXgoKS5leGVjKCdDTWFqNycpXG4gKiAvLyA9PiBbJ0NNYWo3JywgJ0MnLCAnJywgJycsICdNYWo3J11cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2V4ICgpIHsgcmV0dXJuIFJFR0VYIH1cblxudmFyIFNFTUlUT05FUyA9IFswLCAyLCA0LCA1LCA3LCA5LCAxMV1cbi8qKlxuICogUGFyc2UgYSBub3RlIG5hbWUgaW4gc2NpZW50aWZpYyBub3RhdGlvbiBhbiByZXR1cm4gaXQncyBjb21wb25lbnRzLFxuICogYW5kIHNvbWUgbnVtZXJpYyBwcm9wZXJ0aWVzIGluY2x1ZGluZyBtaWRpIG51bWJlciBhbmQgZnJlcXVlbmN5LlxuICpcbiAqIEBuYW1lIHBhcnNlXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBub3RlIC0gdGhlIG5vdGUgc3RyaW5nIHRvIGJlIHBhcnNlZFxuICogQHBhcmFtIHtCb29sZWFufSBpc1RvbmljIC0gdHJ1ZSB0aGUgc3RyaW5ncyBpdCdzIHN1cHBvc2VkIHRvIGNvbnRhaW4gYSBub3RlIG51bWJlclxuICogYW5kIHNvbWUgY2F0ZWdvcnkgKGZvciBleGFtcGxlIGFuIHNjYWxlOiAnQyMgbWFqb3InKS4gSXQncyBmYWxzZSBieSBkZWZhdWx0LFxuICogYnV0IHdoZW4gdHJ1ZSwgZW4gZXh0cmEgdG9uaWNPZiBwcm9wZXJ0eSBpcyByZXR1cm5lZCB3aXRoIHRoZSBjYXRlZ29yeSAoJ21ham9yJylcbiAqIEBwYXJhbSB7RmxvYXR9IHR1bm5pbmcgLSBUaGUgZnJlcXVlbmN5IG9mIEE0IG5vdGUgdG8gY2FsY3VsYXRlIGZyZXF1ZW5jaWVzLlxuICogQnkgZGVmYXVsdCBpdCA0NDAuXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBwYXJzZWQgbm90ZSBuYW1lIG9yIG51bGwgaWYgbm90IGEgdmFsaWQgbm90ZVxuICpcbiAqIFRoZSBwYXJzZWQgbm90ZSBuYW1lIG9iamVjdCB3aWxsIEFMV0FZUyBjb250YWluczpcbiAqIC0gbGV0dGVyOiB0aGUgdXBwZXJjYXNlIGxldHRlciBvZiB0aGUgbm90ZVxuICogLSBhY2M6IHRoZSBhY2NpZGVudGFscyBvZiB0aGUgbm90ZSAob25seSBzaGFycHMgb3IgZmxhdHMpXG4gKiAtIHBjOiB0aGUgcGl0Y2ggY2xhc3MgKGxldHRlciArIGFjYylcbiAqIC0gc3RlcDogcyBhIG51bWVyaWMgcmVwcmVzZW50YXRpb24gb2YgdGhlIGxldHRlci4gSXQncyBhbiBpbnRlZ2VyIGZyb20gMCB0byA2XG4gKiB3aGVyZSAwID0gQywgMSA9IEQgLi4uIDYgPSBCXG4gKiAtIGFsdDogYSBudW1lcmljIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBhY2NpZGVudGFscy4gMCBtZWFucyBubyBhbHRlcmF0aW9uLFxuICogcG9zaXRpdmUgbnVtYmVycyBhcmUgZm9yIHNoYXJwcyBhbmQgbmVnYXRpdmUgZm9yIGZsYXRzXG4gKiAtIGNocm9tYTogYSBudW1lcmljIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBwaXRjaCBjbGFzcy4gSXQncyBsaWtlIG1pZGkgZm9yXG4gKiBwaXRjaCBjbGFzc2VzLiAwID0gQywgMSA9IEMjLCAyID0gRCAuLi4gMTEgPSBCLiBDYW4gYmUgdXNlZCB0byBmaW5kIGVuaGFybW9uaWNzXG4gKiBzaW5jZSwgZm9yIGV4YW1wbGUsIGNocm9tYSBvZiAnQ2InIGFuZCAnQicgYXJlIGJvdGggMTFcbiAqXG4gKiBJZiB0aGUgbm90ZSBoYXMgb2N0YXZlLCB0aGUgcGFyc2VyIG9iamVjdCB3aWxsIGNvbnRhaW46XG4gKiAtIG9jdDogdGhlIG9jdGF2ZSBudW1iZXIgKGFzIGludGVnZXIpXG4gKiAtIG1pZGk6IHRoZSBtaWRpIG51bWJlclxuICogLSBmcmVxOiB0aGUgZnJlcXVlbmN5ICh1c2luZyB0dW5pbmcgcGFyYW1ldGVyIGFzIGJhc2UpXG4gKlxuICogSWYgdGhlIHBhcmFtZXRlciBgaXNUb25pY2AgaXMgc2V0IHRvIHRydWUsIHRoZSBwYXJzZWQgb2JqZWN0IHdpbGwgY29udGFpbjpcbiAqIC0gdG9uaWNPZjogdGhlIHJlc3Qgb2YgdGhlIHN0cmluZyB0aGF0IGZvbGxvd3Mgbm90ZSBuYW1lIChsZWZ0IGFuZCByaWdodCB0cmltbWVkKVxuICpcbiAqIEBleGFtcGxlXG4gKiB2YXIgcGFyc2UgPSByZXF1aXJlKCdub3RlLXBhcnNlcicpLnBhcnNlXG4gKiBwYXJzZSgnQ2I0JylcbiAqIC8vID0+IHsgbGV0dGVyOiAnQycsIGFjYzogJ2InLCBwYzogJ0NiJywgc3RlcDogMCwgYWx0OiAtMSwgY2hyb21hOiAtMSxcbiAqICAgICAgICAgb2N0OiA0LCBtaWRpOiA1OSwgZnJlcTogMjQ2Ljk0MTY1MDYyODA2MjA2IH1cbiAqIC8vIGlmIG5vIG9jdGF2ZSwgbm8gbWlkaSwgbm8gZnJlcVxuICogcGFyc2UoJ2Z4JylcbiAqIC8vID0+IHsgbGV0dGVyOiAnRicsIGFjYzogJyMjJywgcGM6ICdGIyMnLCBzdGVwOiAzLCBhbHQ6IDIsIGNocm9tYTogNyB9KVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2UgKHN0ciwgaXNUb25pYywgdHVuaW5nKSB7XG4gIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykgcmV0dXJuIG51bGxcbiAgdmFyIG0gPSBSRUdFWC5leGVjKHN0cilcbiAgaWYgKCFtIHx8ICghaXNUb25pYyAmJiBtWzRdKSkgcmV0dXJuIG51bGxcblxuICB2YXIgcCA9IHsgbGV0dGVyOiBtWzFdLnRvVXBwZXJDYXNlKCksIGFjYzogbVsyXS5yZXBsYWNlKC94L2csICcjIycpIH1cbiAgcC5wYyA9IHAubGV0dGVyICsgcC5hY2NcbiAgcC5zdGVwID0gKHAubGV0dGVyLmNoYXJDb2RlQXQoMCkgKyAzKSAlIDdcbiAgcC5hbHQgPSBwLmFjY1swXSA9PT0gJ2InID8gLXAuYWNjLmxlbmd0aCA6IHAuYWNjLmxlbmd0aFxuICB2YXIgcG9zID0gU0VNSVRPTkVTW3Auc3RlcF0gKyBwLmFsdFxuICBwLmNocm9tYSA9IHBvcyA8IDAgPyAxMiArIHBvcyA6IHBvcyAlIDEyXG4gIGlmIChtWzNdKSB7IC8vIGhhcyBvY3RhdmVcbiAgICBwLm9jdCA9ICttWzNdXG4gICAgcC5taWRpID0gcG9zICsgMTIgKiAocC5vY3QgKyAxKVxuICAgIHAuZnJlcSA9IG1pZGlUb0ZyZXEocC5taWRpLCB0dW5pbmcpXG4gIH1cbiAgaWYgKGlzVG9uaWMpIHAudG9uaWNPZiA9IG1bNF1cbiAgcmV0dXJuIHBcbn1cblxudmFyIExFVFRFUlMgPSAnQ0RFRkdBQidcbmZ1bmN0aW9uIGFjY1N0ciAobikgeyByZXR1cm4gIWlzTnVtKG4pID8gJycgOiBuIDwgMCA/IGZpbGxTdHIoJ2InLCAtbikgOiBmaWxsU3RyKCcjJywgbikgfVxuZnVuY3Rpb24gb2N0U3RyIChuKSB7IHJldHVybiAhaXNOdW0obikgPyAnJyA6ICcnICsgbiB9XG5cbi8qKlxuICogQ3JlYXRlIGEgc3RyaW5nIGZyb20gYSBwYXJzZWQgb2JqZWN0IG9yIGBzdGVwLCBhbHRlcmF0aW9uLCBvY3RhdmVgIHBhcmFtZXRlcnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSB0aGUgcGFyc2VkIGRhdGEgb2JqZWN0XG4gKiBAcmV0dXJuIHtTdHJpbmd9IGEgbm90ZSBzdHJpbmcgb3IgbnVsbCBpZiBub3QgdmFsaWQgcGFyYW1ldGVyc1xuICogQHNpbmNlIDEuMlxuICogQGV4YW1wbGVcbiAqIHBhcnNlci5idWlsZChwYXJzZXIucGFyc2UoJ2NiMicpKSAvLyA9PiAnQ2IyJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBpdCBhY2NlcHRzIChzdGVwLCBhbHRlcmF0aW9uLCBvY3RhdmUpIHBhcmFtZXRlcnM6XG4gKiBwYXJzZXIuYnVpbGQoMykgLy8gPT4gJ0YnXG4gKiBwYXJzZXIuYnVpbGQoMywgLTEpIC8vID0+ICdGYidcbiAqIHBhcnNlci5idWlsZCgzLCAtMSwgNCkgLy8gPT4gJ0ZiNCdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkIChzLCBhLCBvKSB7XG4gIGlmIChzID09PSBudWxsIHx8IHR5cGVvZiBzID09PSAndW5kZWZpbmVkJykgcmV0dXJuIG51bGxcbiAgaWYgKHMuc3RlcCkgcmV0dXJuIGJ1aWxkKHMuc3RlcCwgcy5hbHQsIHMub2N0KVxuICBpZiAocyA8IDAgfHwgcyA+IDYpIHJldHVybiBudWxsXG4gIHJldHVybiBMRVRURVJTLmNoYXJBdChzKSArIGFjY1N0cihhKSArIG9jdFN0cihvKVxufVxuXG4vKipcbiAqIEdldCBtaWRpIG9mIGEgbm90ZVxuICpcbiAqIEBuYW1lIG1pZGlcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtTdHJpbmd8SW50ZWdlcn0gbm90ZSAtIHRoZSBub3RlIG5hbWUgb3IgbWlkaSBudW1iZXJcbiAqIEByZXR1cm4ge0ludGVnZXJ9IHRoZSBtaWRpIG51bWJlciBvZiB0aGUgbm90ZSBvciBudWxsIGlmIG5vdCBhIHZhbGlkIG5vdGVcbiAqIG9yIHRoZSBub3RlIGRvZXMgTk9UIGNvbnRhaW5zIG9jdGF2ZVxuICogQGV4YW1wbGVcbiAqIHZhciBwYXJzZXIgPSByZXF1aXJlKCdub3RlLXBhcnNlcicpXG4gKiBwYXJzZXIubWlkaSgnQTQnKSAvLyA9PiA2OVxuICogcGFyc2VyLm1pZGkoJ0EnKSAvLyA9PiBudWxsXG4gKiBAZXhhbXBsZVxuICogLy8gbWlkaSBudW1iZXJzIGFyZSBieXBhc3NlZCAoZXZlbiBhcyBzdHJpbmdzKVxuICogcGFyc2VyLm1pZGkoNjApIC8vID0+IDYwXG4gKiBwYXJzZXIubWlkaSgnNjAnKSAvLyA9PiA2MFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWlkaSAobm90ZSkge1xuICBpZiAoKGlzTnVtKG5vdGUpIHx8IGlzU3RyKG5vdGUpKSAmJiBub3RlID49IDAgJiYgbm90ZSA8IDEyOCkgcmV0dXJuICtub3RlXG4gIHZhciBwID0gcGFyc2Uobm90ZSlcbiAgcmV0dXJuIHAgJiYgaXNEZWYocC5taWRpKSA/IHAubWlkaSA6IG51bGxcbn1cblxuLyoqXG4gKiBHZXQgZnJlcSBvZiBhIG5vdGUgaW4gaGVydHpzIChpbiBhIHdlbGwgdGVtcGVyZWQgNDQwSHogQTQpXG4gKlxuICogQG5hbWUgZnJlcVxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbm90ZSAtIHRoZSBub3RlIG5hbWUgb3Igbm90ZSBtaWRpIG51bWJlclxuICogQHBhcmFtIHtTdHJpbmd9IHR1bmluZyAtIChPcHRpb25hbCkgdGhlIEE0IGZyZXF1ZW5jeSAoNDQwIGJ5IGRlZmF1bHQpXG4gKiBAcmV0dXJuIHtGbG9hdH0gdGhlIGZyZXEgb2YgdGhlIG51bWJlciBpZiBoZXJ0enMgb3IgbnVsbCBpZiBub3QgdmFsaWQgbm90ZVxuICogQGV4YW1wbGVcbiAqIHZhciBwYXJzZXIgPSByZXF1aXJlKCdub3RlLXBhcnNlcicpXG4gKiBwYXJzZXIuZnJlcSgnQTQnKSAvLyA9PiA0NDBcbiAqIHBhcnNlci5mcmVxKCdBJykgLy8gPT4gbnVsbFxuICogQGV4YW1wbGVcbiAqIC8vIGNhbiBjaGFuZ2UgdHVuaW5nICg0NDAgYnkgZGVmYXVsdClcbiAqIHBhcnNlci5mcmVxKCdBNCcsIDQ0NCkgLy8gPT4gNDQ0XG4gKiBwYXJzZXIuZnJlcSgnQTMnLCA0NDQpIC8vID0+IDIyMlxuICogQGV4YW1wbGVcbiAqIC8vIGl0IGFjY2VwdHMgbWlkaSBudW1iZXJzIChhcyBudW1iZXJzIGFuZCBhcyBzdHJpbmdzKVxuICogcGFyc2VyLmZyZXEoNjkpIC8vID0+IDQ0MFxuICogcGFyc2VyLmZyZXEoJzY5JywgNDQyKSAvLyA9PiA0NDJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyZXEgKG5vdGUsIHR1bmluZykge1xuICB2YXIgbSA9IG1pZGkobm90ZSlcbiAgcmV0dXJuIG0gPT09IG51bGwgPyBudWxsIDogbWlkaVRvRnJlcShtLCB0dW5pbmcpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZXR0ZXIgKHNyYykgeyByZXR1cm4gKHBhcnNlKHNyYykgfHwge30pLmxldHRlciB9XG5leHBvcnQgZnVuY3Rpb24gYWNjIChzcmMpIHsgcmV0dXJuIChwYXJzZShzcmMpIHx8IHt9KS5hY2MgfVxuZXhwb3J0IGZ1bmN0aW9uIHBjIChzcmMpIHsgcmV0dXJuIChwYXJzZShzcmMpIHx8IHt9KS5wYyB9XG5leHBvcnQgZnVuY3Rpb24gc3RlcCAoc3JjKSB7IHJldHVybiAocGFyc2Uoc3JjKSB8fCB7fSkuc3RlcCB9XG5leHBvcnQgZnVuY3Rpb24gYWx0IChzcmMpIHsgcmV0dXJuIChwYXJzZShzcmMpIHx8IHt9KS5hbHQgfVxuZXhwb3J0IGZ1bmN0aW9uIGNocm9tYSAoc3JjKSB7IHJldHVybiAocGFyc2Uoc3JjKSB8fCB7fSkuY2hyb21hIH1cbmV4cG9ydCBmdW5jdGlvbiBvY3QgKHNyYykgeyByZXR1cm4gKHBhcnNlKHNyYykgfHwge30pLm9jdCB9XG4iLCAiLyoqXG4gKiBBIG1pZGkgbm90ZSBudW1iZXIgaXMgYSBudW1iZXIgcmVwcmVzZW50YXRpb24gb2YgYSBub3RlIHBpdGNoLiBJdCBjYW4gYmVcbiAqIGludGVnZXJzIHNvIGl0J3MgZXF1YWwgdGVtcGVyZWQgdHVuZWQsIG9yIGZsb2F0IHRvIGluZGljYXRlIGl0J3Mgbm90XG4gKiB0dW5lZCBpbnRvIGVxdWFsIHRlbWVwZXJlZCBzY2FsZS5cbiAqXG4gKiBUaGlzIG1vZHVsZSBjb250YWlucyBmdW5jdGlvbnMgdG8gY29udmVydCB0byBhbmQgZnJvbSBtaWRpIG5vdGVzLlxuICpcbiAqIEBleGFtcGxlXG4gKiB2YXIgbWlkaSA9IHJlcXVpcmUoJ3RvbmFsLW1pZGknKVxuICogbWlkaS50b01pZGkoJ0E0JykgLy8gPT4gNjlcbiAqIG1pZGkubm90ZSg2OSkgLy8gPT4gJ0E0J1xuICogbWlkaS5ub3RlKDYxKSAvLyA9PiAnRGI0J1xuICogbWlkaS5ub3RlKDYxLCB0cnVlKSAvLyA9PiAnQyM0J1xuICpcbiAqIEBtb2R1bGUgbWlkaVxuICovXG5cbmltcG9ydCB7IG1pZGkgfSBmcm9tICdub3RlLXBhcnNlcidcblxuLyoqXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBub3RlIHRvIGEgbWlkaSBub3RlIG51bWJlci4gSWYgeW91IHBhc3MgYSBtaWRpIG51bWJlciBpdFxuICogd2lsbCByZXR1cm5lZCBhcyBpcy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fFN0cmluZ3xOdW1iZXJ9IG5vdGUgLSB0aGUgbm90ZSB0byBnZXQgdGhlIG1pZGkgbnVtYmVyIGZyb21cbiAqIEByZXR1cm4ge0ludGVnZXJ9IHRoZSBtaWRpIG51bWJlciBvciBudWxsIGlmIG5vdCB2YWxpZCBwaXRjaFxuICogQGV4YW1wbGVcbiAqIG1pZGkudG9NaWRpKCdDNCcpIC8vID0+IDYwXG4gKiBtaWRpLnRvTWlkaSg2MCkgLy8gPT4gNjBcbiAqIG1pZGkudG9NaWRpKCc2MCcpIC8vID0+IDYwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b01pZGkgKHZhbCkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpICYmIHZhbC5sZW5ndGggPT09IDIpIHJldHVybiB2YWxbMF0gKiA3ICsgdmFsWzFdICogMTIgKyAxMlxuICByZXR1cm4gbWlkaSh2YWwpXG59XG5cbnZhciBGTEFUUyA9ICdDIERiIEQgRWIgRSBGIEdiIEcgQWIgQSBCYiBCJy5zcGxpdCgnICcpXG52YXIgU0hBUlBTID0gJ0MgQyMgRCBEIyBFIEYgRiMgRyBHIyBBIEEjIEInLnNwbGl0KCcgJylcblxuLyoqXG4gKiBHaXZlbiBhIG1pZGkgbnVtYmVyLCByZXR1cm5zIGEgbm90ZSBuYW1lLiBUaGUgYWx0ZXJlZCBub3RlcyB3aWxsIGhhdmVcbiAqIGZsYXRzIHVubGVzcyBleHBsaWNpdGx5IHNldCB3aXRoIHRoZSBvcHRpb25hbCBgdXNlU2hhcnBzYCBwYXJhbWV0ZXIuXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0ludGVnZXJ9IG1pZGkgLSB0aGUgbWlkaSBub3RlIG51bWJlclxuICogQHBhcmFtIHtCb29sZWFufSB1c2VTaGFycHMgLSAoT3B0aW9uYWwpIHNldCB0byB0cnVlIHRvIHVzZSBzaGFycHMgaW5zdGVhZCBvZiBmbGF0c1xuICogQHJldHVybiB7U3RyaW5nfSB0aGUgbm90ZSBuYW1lXG4gKiBAZXhhbXBsZVxuICogdmFyIG1pZGkgPSByZXF1aXJlKCd0b25hbC1taWRpJylcbiAqIG1pZGkubm90ZSg2MSkgLy8gPT4gJ0RiNCdcbiAqIG1pZGkubm90ZSg2MSwgdHJ1ZSkgLy8gPT4gJ0MjNCdcbiAqIC8vIGl0IHJvdW5kcyB0byBuZWFyZXN0IG5vdGVcbiAqIG1pZGkubm90ZSg2MS43KSAvLyA9PiAnRDQnXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3RlIChudW0sIHNoYXJwcykge1xuICBpZiAobnVtID09PSB0cnVlIHx8IG51bSA9PT0gZmFsc2UpIHJldHVybiBmdW5jdGlvbiAobSkgeyByZXR1cm4gbm90ZShtLCBudW0pIH1cbiAgbnVtID0gTWF0aC5yb3VuZChudW0pXG4gIHZhciBwY3MgPSBzaGFycHMgPT09IHRydWUgPyBTSEFSUFMgOiBGTEFUU1xuICB2YXIgcGMgPSBwY3NbbnVtICUgMTJdXG4gIHZhciBvID0gTWF0aC5mbG9vcihudW0gLyAxMikgLSAxXG4gIHJldHVybiBwYyArIG9cbn1cbiIsICJ7XG4gIFwibmFtZVwiOiBcIm1pZGktd3JpdGVyLWpzXCIsXG4gIFwidmVyc2lvblwiOiBcIjIuMC4xXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJBIGxpYnJhcnkgcHJvdmlkaW5nIGFuIEFQSSBmb3IgZ2VuZXJhdGluZyBNSURJIGZpbGVzLlwiLFxuICBcIm1haW5cIjogXCJidWlsZC9pbmRleC5qc1wiLFxuICBcInR5cGVzXCI6IFwidHlwZXMuZC50c1wiLFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJ0b25hbC1taWRpXCI6IFwiXjAuNjkuN1wiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBiYWJlbC9jb3JlXCI6IFwiXjcuOS42XCIsXG4gICAgXCJAYmFiZWwvcGx1Z2luLXRyYW5zZm9ybS1kZXN0cnVjdHVyaW5nXCI6IFwiXjcuOS41XCIsXG4gICAgXCJAYmFiZWwvcHJlc2V0LWVudlwiOiBcIl43LjkuNlwiLFxuICAgIFwiQHJvbGx1cC9wbHVnaW4tYmFiZWxcIjogXCJeNS4wLjBcIixcbiAgICBcImVzbGludFwiOiBcIl43LjAuMFwiLFxuICAgIFwiZXNsaW50LWNvbmZpZy1zdGFuZGFyZFwiOiBcIl4xMi4wLjBcIixcbiAgICBcImVzbGludC1wbHVnaW4taW1wb3J0XCI6IFwiXjIuMjAuMlwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1ub2RlXCI6IFwiXjkuMi4wXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXByb21pc2VcIjogXCJeNC4xLjFcIixcbiAgICBcImVzbGludC1wbHVnaW4tc3RhbmRhcmRcIjogXCJeNC4wLjFcIixcbiAgICBcImpzZG9jXCI6IFwiXjMuNi40XCIsXG4gICAgXCJtaW5hbWlcIjogXCJeMS4yLjNcIixcbiAgICBcIm1vY2hhXCI6IFwiXjkuMC4xXCIsXG4gICAgXCJueWNcIjogXCJeMTUuMC4xXCIsXG4gICAgXCJyb2xsdXBcIjogXCJeMi45LjBcIixcbiAgICBcIndhdGNoXCI6IFwiXjEuMC4yXCJcbiAgfSxcbiAgXCJkaXJlY3Rvcmllc1wiOiB7XG4gICAgXCJsaWJcIjogXCJzcmNcIixcbiAgICBcImV4YW1wbGVcIjogXCJleGFtcGxlc1wiLFxuICAgIFwidGVzdFwiOiBcInRlc3RcIlxuICB9LFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwiYnVpbGRcIjogXCJta2RpciAtcCBidWlsZCAmJiByb2xsdXAgLWMgJiYgbnBtIHJ1biBkb2NzXCIsXG4gICAgXCJkb2NzXCI6IFwiLi9ub2RlX21vZHVsZXMvLmJpbi9qc2RvYyAtciBzcmMgUkVBRE1FLm1kIC1kIC4vZG9jcyAtdCAuL25vZGVfbW9kdWxlcy9taW5hbWlcIixcbiAgICBcImxpbnQ6anNcIjogXCJlc2xpbnQgJ3NyYy8qKi8qKi5qcydcIixcbiAgICBcInByZXB1Ymxpc2hPbmx5XCI6IFwibnBtIHRlc3RcIixcbiAgICBcInByZXRlc3RcIjogXCJucG0gcnVuIGJ1aWxkXCIsXG4gICAgXCJ0ZXN0XCI6IFwibnljIC0tcmVwb3J0ZXI9dGV4dCBtb2NoYSAtLW5vLWNvbmZpZyAtLW5vLXBhY2thZ2VcIixcbiAgICBcIndhdGNoXCI6IFwid2F0Y2ggJ25wbSBydW4gYnVpbGQnIHNyY1wiLFxuICAgIFwicG9zdGluc3RhbGxcIjogXCJub2RlIHBvc3RpbnN0YWxsLmpzXCJcbiAgfSxcbiAgXCJydW5raXRFeGFtcGxlRmlsZW5hbWVcIjogXCJydW5raXQuanNcIixcbiAgXCJyZXBvc2l0b3J5XCI6IHtcbiAgICBcInR5cGVcIjogXCJnaXRcIixcbiAgICBcInVybFwiOiBcImdpdCtodHRwczovL2dpdGh1Yi5jb20vZ3JpbW1kdWRlL01pZGlXcml0ZXJKUy5naXRcIlxuICB9LFxuICBcImtleXdvcmRzXCI6IFtcbiAgICBcIm1pZGlcIixcbiAgICBcImdlbmVyYXRvclwiLFxuICAgIFwibXVzaWNcIlxuICBdLFxuICBcImF1dGhvclwiOiBcIkdhcnJldHQgR3JpbW1cIixcbiAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gIFwiYnVnc1wiOiB7XG4gICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZ3JpbW1kdWRlL01pZGlXcml0ZXJKUy9pc3N1ZXNcIlxuICB9LFxuICBcImhvbWVwYWdlXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2dyaW1tZHVkZS9NaWRpV3JpdGVySlMjcmVhZG1lXCJcbn1cbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciB0b25hbE1pZGkgPSByZXF1aXJlKCd0b25hbC1taWRpJyk7XG5cbi8qKlxuICogTUlESSBmaWxlIGZvcm1hdCBjb25zdGFudHMuXG4gKiBAcmV0dXJuIHtDb25zdGFudHN9XG4gKi9cbnZhciBDb25zdGFudHMgPSB7XG4gIFZFUlNJT046IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpLnZlcnNpb24sXG4gIEhFQURFUl9DSFVOS19UWVBFOiBbMHg0ZCwgMHg1NCwgMHg2OCwgMHg2NF0sXG4gIC8vIE10aGRcbiAgSEVBREVSX0NIVU5LX0xFTkdUSDogWzB4MDAsIDB4MDAsIDB4MDAsIDB4MDZdLFxuICAvLyBIZWFkZXIgc2l6ZSBmb3IgU01GXG4gIEhFQURFUl9DSFVOS19GT1JNQVQwOiBbMHgwMCwgMHgwMF0sXG4gIC8vIE1pZGkgVHlwZSAwIGlkXG4gIEhFQURFUl9DSFVOS19GT1JNQVQxOiBbMHgwMCwgMHgwMV0sXG4gIC8vIE1pZGkgVHlwZSAxIGlkXG4gIEhFQURFUl9DSFVOS19ESVZJU0lPTjogWzB4MDAsIDB4ODBdLFxuICAvLyBEZWZhdWx0cyB0byAxMjggdGlja3MgcGVyIGJlYXRcbiAgVFJBQ0tfQ0hVTktfVFlQRTogWzB4NGQsIDB4NTQsIDB4NzIsIDB4NmJdLFxuICAvLyBNVHJrLFxuICBNRVRBX0VWRU5UX0lEOiAweEZGLFxuICBNRVRBX1RFWFRfSUQ6IDB4MDEsXG4gIE1FVEFfQ09QWVJJR0hUX0lEOiAweDAyLFxuICBNRVRBX1RSQUNLX05BTUVfSUQ6IDB4MDMsXG4gIE1FVEFfSU5TVFJVTUVOVF9OQU1FX0lEOiAweDA0LFxuICBNRVRBX0xZUklDX0lEOiAweDA1LFxuICBNRVRBX01BUktFUl9JRDogMHgwNixcbiAgTUVUQV9DVUVfUE9JTlQ6IDB4MDcsXG4gIE1FVEFfVEVNUE9fSUQ6IDB4NTEsXG4gIE1FVEFfU01UUEVfT0ZGU0VUOiAweDU0LFxuICBNRVRBX1RJTUVfU0lHTkFUVVJFX0lEOiAweDU4LFxuICBNRVRBX0tFWV9TSUdOQVRVUkVfSUQ6IDB4NTksXG4gIE1FVEFfRU5EX09GX1RSQUNLX0lEOiBbMHgyRiwgMHgwMF0sXG4gIENPTlRST0xMRVJfQ0hBTkdFX1NUQVRVUzogMHhCMCxcbiAgLy8gaW5jbHVkZXMgY2hhbm5lbCBudW1iZXIgKDApXG4gIFBST0dSQU1fQ0hBTkdFX1NUQVRVUzogMHhDMCxcbiAgLy8gaW5jbHVkZXMgY2hhbm5lbCBudW1iZXIgKDApXG4gIFBJVENIX0JFTkRfU1RBVFVTOiAweEUwIC8vIGluY2x1ZGVzIGNoYW5uZWwgbnVtYmVyICgwKVxuXG59O1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5mdW5jdGlvbiBfd3JhcFJlZ0V4cCgpIHtcbiAgX3dyYXBSZWdFeHAgPSBmdW5jdGlvbiAocmUsIGdyb3Vwcykge1xuICAgIHJldHVybiBuZXcgQmFiZWxSZWdFeHAocmUsIHVuZGVmaW5lZCwgZ3JvdXBzKTtcbiAgfTtcblxuICB2YXIgX3N1cGVyID0gUmVnRXhwLnByb3RvdHlwZTtcblxuICB2YXIgX2dyb3VwcyA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgZnVuY3Rpb24gQmFiZWxSZWdFeHAocmUsIGZsYWdzLCBncm91cHMpIHtcbiAgICB2YXIgX3RoaXMgPSBuZXcgUmVnRXhwKHJlLCBmbGFncyk7XG5cbiAgICBfZ3JvdXBzLnNldChfdGhpcywgZ3JvdXBzIHx8IF9ncm91cHMuZ2V0KHJlKSk7XG5cbiAgICByZXR1cm4gX3NldFByb3RvdHlwZU9mKF90aGlzLCBCYWJlbFJlZ0V4cC5wcm90b3R5cGUpO1xuICB9XG5cbiAgX2luaGVyaXRzKEJhYmVsUmVnRXhwLCBSZWdFeHApO1xuXG4gIEJhYmVsUmVnRXhwLnByb3RvdHlwZS5leGVjID0gZnVuY3Rpb24gKHN0cikge1xuICAgIHZhciByZXN1bHQgPSBfc3VwZXIuZXhlYy5jYWxsKHRoaXMsIHN0cik7XG5cbiAgICBpZiAocmVzdWx0KSByZXN1bHQuZ3JvdXBzID0gYnVpbGRHcm91cHMocmVzdWx0LCB0aGlzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIEJhYmVsUmVnRXhwLnByb3RvdHlwZVtTeW1ib2wucmVwbGFjZV0gPSBmdW5jdGlvbiAoc3RyLCBzdWJzdGl0dXRpb24pIHtcbiAgICBpZiAodHlwZW9mIHN1YnN0aXR1dGlvbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgdmFyIGdyb3VwcyA9IF9ncm91cHMuZ2V0KHRoaXMpO1xuXG4gICAgICByZXR1cm4gX3N1cGVyW1N5bWJvbC5yZXBsYWNlXS5jYWxsKHRoaXMsIHN0ciwgc3Vic3RpdHV0aW9uLnJlcGxhY2UoL1xcJDwoW14+XSspPi9nLCBmdW5jdGlvbiAoXywgbmFtZSkge1xuICAgICAgICByZXR1cm4gXCIkXCIgKyBncm91cHNbbmFtZV07XG4gICAgICB9KSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc3Vic3RpdHV0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBfc3VwZXJbU3ltYm9sLnJlcGxhY2VdLmNhbGwodGhpcywgc3RyLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuXG4gICAgICAgIGlmICh0eXBlb2YgYXJnc1thcmdzLmxlbmd0aCAtIDFdICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJncyk7XG4gICAgICAgICAgYXJncy5wdXNoKGJ1aWxkR3JvdXBzKGFyZ3MsIF90aGlzKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3Vic3RpdHV0aW9uLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBfc3VwZXJbU3ltYm9sLnJlcGxhY2VdLmNhbGwodGhpcywgc3RyLCBzdWJzdGl0dXRpb24pO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBidWlsZEdyb3VwcyhyZXN1bHQsIHJlKSB7XG4gICAgdmFyIGcgPSBfZ3JvdXBzLmdldChyZSk7XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZykucmVkdWNlKGZ1bmN0aW9uIChncm91cHMsIG5hbWUpIHtcbiAgICAgIGdyb3Vwc1tuYW1lXSA9IHJlc3VsdFtnW25hbWVdXTtcbiAgICAgIHJldHVybiBncm91cHM7XG4gICAgfSwgT2JqZWN0LmNyZWF0ZShudWxsKSk7XG4gIH1cblxuICByZXR1cm4gX3dyYXBSZWdFeHAuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxuLyoqXG4gKiBTdGF0aWMgdXRpbGl0eSBmdW5jdGlvbnMgdXNlZCB0aHJvdWdob3V0IHRoZSBsaWJyYXJ5LlxuICovXG5cbnZhciBVdGlscyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFV0aWxzKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBVdGlscyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVXRpbHMsIG51bGwsIFt7XG4gICAga2V5OiBcInZlcnNpb25cIixcbiAgICB2YWx1ZTpcbiAgICAvKipcbiAgICAgKiBHZXRzIE1pZGlXcml0ZXJKUyB2ZXJzaW9uIG51bWJlci5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgZnVuY3Rpb24gdmVyc2lvbigpIHtcbiAgICAgIHJldHVybiBDb25zdGFudHMuVkVSU0lPTjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVydCBhIHN0cmluZyB0byBhbiBhcnJheSBvZiBieXRlc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdcbiAgICAgKiBAcmV0dXJuIHthcnJheX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInN0cmluZ1RvQnl0ZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RyaW5nVG9CeXRlcyhzdHJpbmcpIHtcbiAgICAgIHJldHVybiBzdHJpbmcuc3BsaXQoJycpLm1hcChmdW5jdGlvbiAoX2NoYXIpIHtcbiAgICAgICAgcmV0dXJuIF9jaGFyLmNoYXJDb2RlQXQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgYXJndW1lbnQgaXMgYSB2YWxpZCBudW1iZXIuXG4gICAgICogQHBhcmFtIHsqfSBuIC0gVmFsdWUgdG8gY2hlY2tcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaXNOdW1lcmljXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzTnVtZXJpYyhuKSB7XG4gICAgICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQobikpICYmIGlzRmluaXRlKG4pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjb3JyZWN0IE1JREkgbnVtYmVyIGZvciB0aGUgc3BlY2lmaWVkIHBpdGNoLlxuICAgICAqIFVzZXMgVG9uYWwgTWlkaSAtIGh0dHBzOi8vZ2l0aHViLmNvbS9kYW5pZ2IvdG9uYWwvdHJlZS9tYXN0ZXIvcGFja2FnZXMvbWlkaVxuICAgICAqIEBwYXJhbSB7KHN0cmluZ3xudW1iZXIpfSBwaXRjaCAtICdDIzQnIG9yIG1pZGkgbm90ZSBjb2RlXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0UGl0Y2hcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UGl0Y2gocGl0Y2gpIHtcbiAgICAgIHJldHVybiB0b25hbE1pZGkudG9NaWRpKHBpdGNoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVHJhbnNsYXRlcyBudW1iZXIgb2YgdGlja3MgdG8gTUlESSB0aW1lc3RhbXAgZm9ybWF0LCByZXR1cm5pbmcgYW4gYXJyYXkgb2ZcbiAgICAgKiBoZXggc3RyaW5ncyB3aXRoIHRoZSB0aW1lIHZhbHVlcy4gTWlkaSBoYXMgYSB2ZXJ5IHBhcnRpY3VsYXIgdGltZSB0byBleHByZXNzIHRpbWUsXG4gICAgICogdGFrZSBhIGdvb2QgbG9vayBhdCB0aGUgc3BlYyBiZWZvcmUgZXZlciB0b3VjaGluZyB0aGlzIGZ1bmN0aW9uLlxuICAgICAqIFRoYW5rcyB0byBodHRwczovL2dpdGh1Yi5jb20vc2VyZ2kvanNtaWRpXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGlja3MgLSBOdW1iZXIgb2YgdGlja3MgdG8gYmUgdHJhbnNsYXRlZFxuICAgICAqIEByZXR1cm4ge2FycmF5fSAtIEJ5dGVzIHRoYXQgZm9ybSB0aGUgTUlESSB0aW1lIHZhbHVlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJudW1iZXJUb1ZhcmlhYmxlTGVuZ3RoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG51bWJlclRvVmFyaWFibGVMZW5ndGgodGlja3MpIHtcbiAgICAgIHRpY2tzID0gTWF0aC5yb3VuZCh0aWNrcyk7XG4gICAgICB2YXIgYnVmZmVyID0gdGlja3MgJiAweDdGO1xuXG4gICAgICB3aGlsZSAodGlja3MgPSB0aWNrcyA+PiA3KSB7XG4gICAgICAgIGJ1ZmZlciA8PD0gODtcbiAgICAgICAgYnVmZmVyIHw9IHRpY2tzICYgMHg3RiB8IDB4ODA7XG4gICAgICB9XG5cbiAgICAgIHZhciBiTGlzdCA9IFtdO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBiTGlzdC5wdXNoKGJ1ZmZlciAmIDB4ZmYpO1xuICAgICAgICBpZiAoYnVmZmVyICYgMHg4MCkgYnVmZmVyID4+PSA4O2Vsc2Uge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBiTGlzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ291bnRzIG51bWJlciBvZiBieXRlcyBpbiBzdHJpbmdcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc1xuICAgICAqIEByZXR1cm4ge2FycmF5fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3RyaW5nQnl0ZUNvdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0cmluZ0J5dGVDb3VudChzKSB7XG4gICAgICByZXR1cm4gZW5jb2RlVVJJKHMpLnNwbGl0KC8lLi58Li8pLmxlbmd0aCAtIDE7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBhbiBpbnQgZnJvbSBhbiBhcnJheSBvZiBieXRlcy5cbiAgICAgKiBAcGFyYW0ge2FycmF5fSBieXRlc1xuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm51bWJlckZyb21CeXRlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBudW1iZXJGcm9tQnl0ZXMoYnl0ZXMpIHtcbiAgICAgIHZhciBoZXggPSAnJztcbiAgICAgIHZhciBzdHJpbmdSZXN1bHQ7XG4gICAgICBieXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChfYnl0ZSkge1xuICAgICAgICBzdHJpbmdSZXN1bHQgPSBfYnl0ZS50b1N0cmluZygxNik7IC8vIGVuc3VyZSBzdHJpbmcgaXMgMiBjaGFyc1xuXG4gICAgICAgIGlmIChzdHJpbmdSZXN1bHQubGVuZ3RoID09IDEpIHN0cmluZ1Jlc3VsdCA9IFwiMFwiICsgc3RyaW5nUmVzdWx0O1xuICAgICAgICBoZXggKz0gc3RyaW5nUmVzdWx0O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcGFyc2VJbnQoaGV4LCAxNik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRha2VzIGEgbnVtYmVyIGFuZCBzcGxpdHMgaXQgdXAgaW50byBhbiBhcnJheSBvZiBieXRlcy4gIENhbiBiZSBwYWRkZWQgYnkgcGFzc2luZyBhIG51bWJlciB0byBieXRlc05lZWRlZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYnl0ZXNOZWVkZWRcbiAgICAgKiBAcmV0dXJuIHthcnJheX0gLSBBcnJheSBvZiBieXRlc1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibnVtYmVyVG9CeXRlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBudW1iZXJUb0J5dGVzKG51bWJlciwgYnl0ZXNOZWVkZWQpIHtcbiAgICAgIGJ5dGVzTmVlZGVkID0gYnl0ZXNOZWVkZWQgfHwgMTtcbiAgICAgIHZhciBoZXhTdHJpbmcgPSBudW1iZXIudG9TdHJpbmcoMTYpO1xuXG4gICAgICBpZiAoaGV4U3RyaW5nLmxlbmd0aCAmIDEpIHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIGhleCBzdHJpbmcgaXMgZXZlbiBudW1iZXIgb2YgY2hhcnNcbiAgICAgICAgaGV4U3RyaW5nID0gJzAnICsgaGV4U3RyaW5nO1xuICAgICAgfSAvLyBTcGxpdCBoZXggc3RyaW5nIGludG8gYW4gYXJyYXkgb2YgdHdvIGNoYXIgZWxlbWVudHNcblxuXG4gICAgICB2YXIgaGV4QXJyYXkgPSBoZXhTdHJpbmcubWF0Y2goLy57Mn0vZyk7IC8vIE5vdyBwYXJzZSB0aGVtIG91dCBhcyBpbnRlZ2Vyc1xuXG4gICAgICBoZXhBcnJheSA9IGhleEFycmF5Lm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoaXRlbSwgMTYpO1xuICAgICAgfSk7IC8vIFByZXBlbmQgZW1wdHkgYnl0ZXMgaWYgd2UgZG9uJ3QgaGF2ZSBlbm91Z2hcblxuICAgICAgaWYgKGhleEFycmF5Lmxlbmd0aCA8IGJ5dGVzTmVlZGVkKSB7XG4gICAgICAgIHdoaWxlIChieXRlc05lZWRlZCAtIGhleEFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBoZXhBcnJheS51bnNoaWZ0KDApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoZXhBcnJheTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgdmFsdWUgdG8gYXJyYXkgaWYgbmVlZGVkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgICAqIEByZXR1cm4ge2FycmF5fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidG9BcnJheVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b0FycmF5KHZhbHVlKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICAgIHJldHVybiBbdmFsdWVdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyB2ZWxvY2l0eSB0byB2YWx1ZSAwLTEyN1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2ZWxvY2l0eSAtIFZlbG9jaXR5IHZhbHVlIDEtMTAwXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY29udmVydFZlbG9jaXR5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbnZlcnRWZWxvY2l0eSh2ZWxvY2l0eSkge1xuICAgICAgLy8gTWF4IHBhc3NlZCB2YWx1ZSBsaW1pdGVkIHRvIDEwMFxuICAgICAgdmVsb2NpdHkgPSB2ZWxvY2l0eSA+IDEwMCA/IDEwMCA6IHZlbG9jaXR5O1xuICAgICAgcmV0dXJuIE1hdGgucm91bmQodmVsb2NpdHkgLyAxMDAgKiAxMjcpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSB0b3RhbCBudW1iZXIgb2YgdGlja3Mgb2YgYSBzcGVjaWZpZWQgZHVyYXRpb24uXG4gICAgICogTm90ZTogdHlwZT09J25vdGUnIGRlZmF1bHRzIHRvIHF1YXJ0ZXIgbm90ZSwgdHlwZT09PSdyZXN0JyBkZWZhdWx0cyB0byAwXG4gICAgICogQHBhcmFtIHsoc3RyaW5nfGFycmF5KX0gZHVyYXRpb25cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRUaWNrRHVyYXRpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VGlja0R1cmF0aW9uKGR1cmF0aW9uKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShkdXJhdGlvbikpIHtcbiAgICAgICAgLy8gUmVjdXJzaXZlbHkgZXhlY3V0ZSB0aGlzIG1ldGhvZCBmb3IgZWFjaCBpdGVtIGluIHRoZSBhcnJheSBhbmQgcmV0dXJuIHRoZSBzdW0gb2YgdGljayBkdXJhdGlvbnMuXG4gICAgICAgIHJldHVybiBkdXJhdGlvbi5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIFV0aWxzLmdldFRpY2tEdXJhdGlvbih2YWx1ZSk7XG4gICAgICAgIH0pLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgIHJldHVybiBhICsgYjtcbiAgICAgICAgfSwgMCk7XG4gICAgICB9XG5cbiAgICAgIGR1cmF0aW9uID0gZHVyYXRpb24udG9TdHJpbmcoKTtcblxuICAgICAgaWYgKGR1cmF0aW9uLnRvTG93ZXJDYXNlKCkuY2hhckF0KDApID09PSAndCcpIHtcbiAgICAgICAgLy8gSWYgZHVyYXRpb24gc3RhcnRzIHdpdGggJ3QnIHRoZW4gdGhlIG51bWJlciB0aGF0IGZvbGxvd3MgaXMgYW4gZXhwbGljaXQgdGljayBjb3VudFxuICAgICAgICByZXR1cm4gcGFyc2VJbnQoZHVyYXRpb24uc3Vic3RyaW5nKDEpKTtcbiAgICAgIH0gLy8gTmVlZCB0byBhcHBseSBkdXJhdGlvbiBoZXJlLiAgUXVhcnRlciBub3RlID09IENvbnN0YW50cy5IRUFERVJfQ0hVTktfRElWSVNJT05cblxuXG4gICAgICB2YXIgcXVhcnRlclRpY2tzID0gVXRpbHMubnVtYmVyRnJvbUJ5dGVzKENvbnN0YW50cy5IRUFERVJfQ0hVTktfRElWSVNJT04pO1xuICAgICAgdmFyIHRpY2tEdXJhdGlvbiA9IHF1YXJ0ZXJUaWNrcyAqIFV0aWxzLmdldER1cmF0aW9uTXVsdGlwbGllcihkdXJhdGlvbik7XG4gICAgICByZXR1cm4gVXRpbHMuZ2V0Um91bmRlZElmQ2xvc2UodGlja0R1cmF0aW9uKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRHVlIHRvIHJvdW5kaW5nIGVycm9ycyBpbiBKYXZhU2NyaXB0IGVuZ2luZXMsXG4gICAgICogaXQncyBzYWZlIHRvIHJvdW5kIHdoZW4gd2UncmUgdmVyeSBjbG9zZSB0byB0aGUgYWN0dWFsIHRpY2sgbnVtYmVyXG4gICAgICpcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpY2tcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRSb3VuZGVkSWZDbG9zZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSb3VuZGVkSWZDbG9zZSh0aWNrKSB7XG4gICAgICB2YXIgcm91bmRlZFRpY2sgPSBNYXRoLnJvdW5kKHRpY2spO1xuICAgICAgcmV0dXJuIE1hdGguYWJzKHJvdW5kZWRUaWNrIC0gdGljaykgPCAwLjAwMDAwMSA/IHJvdW5kZWRUaWNrIDogdGljaztcbiAgICB9XG4gICAgLyoqXG4gICAgICogRHVlIHRvIGxvdyBwcmVjaXNpb24gb2YgTUlESSxcbiAgICAgKiB3ZSBuZWVkIHRvIGtlZXAgdHJhY2sgb2Ygcm91bmRpbmcgZXJyb3JzIGluIGRlbHRhcy5cbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHdpbGwgY2FsY3VsYXRlIHRoZSByb3VuZGluZyBlcnJvciBmb3IgYSBnaXZlbiBkdXJhdGlvbi5cbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGlja1xuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFByZWNpc2lvbkxvc3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UHJlY2lzaW9uTG9zcyh0aWNrKSB7XG4gICAgICB2YXIgcm91bmRlZFRpY2sgPSBNYXRoLnJvdW5kKHRpY2spO1xuICAgICAgcmV0dXJuIHJvdW5kZWRUaWNrIC0gdGljaztcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB3aGF0IHRvIG11bHRpcGxlIHRpY2tzL3F1YXJ0ZXIgbm90ZSBieSB0byBnZXQgdGhlIHNwZWNpZmllZCBkdXJhdGlvbi5cbiAgICAgKiBOb3RlOiB0eXBlPT0nbm90ZScgZGVmYXVsdHMgdG8gcXVhcnRlciBub3RlLCB0eXBlPT09J3Jlc3QnIGRlZmF1bHRzIHRvIDBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZHVyYXRpb25cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXREdXJhdGlvbk11bHRpcGxpZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RHVyYXRpb25NdWx0aXBsaWVyKGR1cmF0aW9uKSB7XG4gICAgICAvLyBOZWVkIHRvIGFwcGx5IGR1cmF0aW9uIGhlcmUuXG4gICAgICAvLyBRdWFydGVyIG5vdGUgPT0gQ29uc3RhbnRzLkhFQURFUl9DSFVOS19ESVZJU0lPTiB0aWNrcy5cbiAgICAgIGlmIChkdXJhdGlvbiA9PT0gJzAnKSByZXR1cm4gMDtcbiAgICAgIHZhciBtYXRjaCA9IGR1cmF0aW9uLm1hdGNoKCAvKiNfX1BVUkVfXyovX3dyYXBSZWdFeHAoL14oZCspPyhbMC05XSspKD86dChbMC05XSopKT8vLCB7XG4gICAgICAgIGRvdHRlZDogMSxcbiAgICAgICAgYmFzZTogMixcbiAgICAgICAgdHVwbGV0OiAzXG4gICAgICB9KSk7XG5cbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICB2YXIgYmFzZSA9IE51bWJlcihtYXRjaC5ncm91cHMuYmFzZSk7IC8vIDEgb3IgYW55IHBvd2VyIG9mIHR3bzpcblxuICAgICAgICB2YXIgaXNWYWxpZEJhc2UgPSBiYXNlID09PSAxIHx8IChiYXNlICYgYmFzZSAtIDEpID09PSAwO1xuXG4gICAgICAgIGlmIChpc1ZhbGlkQmFzZSkge1xuICAgICAgICAgIC8vIGhvdyBtdWNoIGZhc3RlciBvciBzbG93ZXIgaXMgdGhpcyBub3RlIGNvbXBhcmVkIHRvIGEgcXVhcnRlcj9cbiAgICAgICAgICB2YXIgcmF0aW8gPSBiYXNlIC8gNDtcbiAgICAgICAgICB2YXIgZHVyYXRpb25JblF1YXJ0ZXJzID0gMSAvIHJhdGlvO1xuICAgICAgICAgIHZhciBfbWF0Y2gkZ3JvdXBzID0gbWF0Y2guZ3JvdXBzLFxuICAgICAgICAgICAgICBkb3R0ZWQgPSBfbWF0Y2gkZ3JvdXBzLmRvdHRlZCxcbiAgICAgICAgICAgICAgdHVwbGV0ID0gX21hdGNoJGdyb3Vwcy50dXBsZXQ7XG5cbiAgICAgICAgICBpZiAoZG90dGVkKSB7XG4gICAgICAgICAgICB2YXIgdGhpc01hbnlEb3RzID0gZG90dGVkLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciBkaXZpc29yID0gTWF0aC5wb3coMiwgdGhpc01hbnlEb3RzKTtcbiAgICAgICAgICAgIGR1cmF0aW9uSW5RdWFydGVycyA9IGR1cmF0aW9uSW5RdWFydGVycyArIGR1cmF0aW9uSW5RdWFydGVycyAqICgoZGl2aXNvciAtIDEpIC8gZGl2aXNvcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0dXBsZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB2YXIgZml0SW50byA9IGR1cmF0aW9uSW5RdWFydGVycyAqIDI7IC8vIGRlZmF1bHQgdG8gdHJpcGxldDpcblxuICAgICAgICAgICAgdmFyIHRoaXNNYW55Tm90ZXMgPSBOdW1iZXIodHVwbGV0IHx8ICczJyk7XG4gICAgICAgICAgICBkdXJhdGlvbkluUXVhcnRlcnMgPSBmaXRJbnRvIC8gdGhpc01hbnlOb3RlcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZHVyYXRpb25JblF1YXJ0ZXJzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihkdXJhdGlvbiArICcgaXMgbm90IGEgdmFsaWQgZHVyYXRpb24uJyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFV0aWxzO1xufSgpO1xuXG4vKipcbiAqIEhvbGRzIGFsbCBkYXRhIGZvciBhIFwibm90ZSBvblwiIE1JREkgZXZlbnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZHMge2RhdGE6IFtdfVxuICogQHJldHVybiB7Tm90ZU9uRXZlbnR9XG4gKi9cblxudmFyIE5vdGVPbkV2ZW50ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTm90ZU9uRXZlbnQoZmllbGRzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5vdGVPbkV2ZW50KTtcblxuICAgIC8vIFNldCBkZWZhdWx0IGZpZWxkc1xuICAgIGZpZWxkcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2hhbm5lbDogMSxcbiAgICAgIHN0YXJ0VGljazogbnVsbCxcbiAgICAgIHZlbG9jaXR5OiA1MCxcbiAgICAgIHdhaXQ6IDBcbiAgICB9LCBmaWVsZHMpO1xuICAgIHRoaXMudHlwZSA9ICdub3RlLW9uJztcbiAgICB0aGlzLmNoYW5uZWwgPSBmaWVsZHMuY2hhbm5lbDtcbiAgICB0aGlzLnBpdGNoID0gZmllbGRzLnBpdGNoO1xuICAgIHRoaXMud2FpdCA9IGZpZWxkcy53YWl0O1xuICAgIHRoaXMudmVsb2NpdHkgPSBmaWVsZHMudmVsb2NpdHk7XG4gICAgdGhpcy5zdGFydFRpY2sgPSBmaWVsZHMuc3RhcnRUaWNrO1xuICAgIHRoaXMubWlkaU51bWJlciA9IFV0aWxzLmdldFBpdGNoKHRoaXMucGl0Y2gpO1xuICAgIHRoaXMudGljayA9IG51bGw7XG4gICAgdGhpcy5kZWx0YSA9IG51bGw7XG4gICAgdGhpcy5kYXRhID0gZmllbGRzLmRhdGE7XG4gIH1cbiAgLyoqXG4gICAqIEJ1aWxkcyBpbnQgYXJyYXkgZm9yIHRoaXMgZXZlbnQuXG4gICAqIEBwYXJhbSB7VHJhY2t9IHRyYWNrIC0gcGFyZW50IHRyYWNrXG4gICAqIEByZXR1cm4ge05vdGVPbkV2ZW50fVxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhOb3RlT25FdmVudCwgW3tcbiAgICBrZXk6IFwiYnVpbGREYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJ1aWxkRGF0YSh0cmFjaywgcHJlY2lzaW9uRGVsdGEpIHtcbiAgICAgIHRoaXMuZGF0YSA9IFtdOyAvLyBFeHBsaWNpdGx5IGRlZmluZWQgc3RhcnRUaWNrIGV2ZW50XG5cbiAgICAgIGlmICh0aGlzLnN0YXJ0VGljaykge1xuICAgICAgICB0aGlzLnRpY2sgPSBVdGlscy5nZXRSb3VuZGVkSWZDbG9zZSh0aGlzLnN0YXJ0VGljayk7IC8vIElmIHRoaXMgaXMgdGhlIGZpcnN0IGV2ZW50IGluIHRoZSB0cmFjayB0aGVuIHVzZSBldmVudCdzIHN0YXJ0aW5nIHRpY2sgYXMgZGVsdGEuXG5cbiAgICAgICAgaWYgKHRyYWNrLnRpY2tQb2ludGVyID09IDApIHtcbiAgICAgICAgICB0aGlzLmRlbHRhID0gdGhpcy50aWNrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRlbHRhID0gVXRpbHMuZ2V0VGlja0R1cmF0aW9uKHRoaXMud2FpdCk7XG4gICAgICAgIHRoaXMudGljayA9IFV0aWxzLmdldFJvdW5kZWRJZkNsb3NlKHRyYWNrLnRpY2tQb2ludGVyICsgdGhpcy5kZWx0YSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGVsdGFXaXRoUHJlY2lzaW9uQ29ycmVjdGlvbiA9IFV0aWxzLmdldFJvdW5kZWRJZkNsb3NlKHRoaXMuZGVsdGEgLSBwcmVjaXNpb25EZWx0YSk7XG4gICAgICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRoaXMuZGVsdGFXaXRoUHJlY2lzaW9uQ29ycmVjdGlvbikuY29uY2F0KHRoaXMuZ2V0U3RhdHVzQnl0ZSgpLCB0aGlzLm1pZGlOdW1iZXIsIFV0aWxzLmNvbnZlcnRWZWxvY2l0eSh0aGlzLnZlbG9jaXR5KSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgbm90ZSBvbiBzdGF0dXMgY29kZSBiYXNlZCBvbiB0aGUgc2VsZWN0ZWQgY2hhbm5lbC4gMHg5ezAtRn1cbiAgICAgKiBOb3RlIG9uIGF0IGNoYW5uZWwgMCBpcyAweDkwICgxNDQpXG4gICAgICogMCA9IENoIDFcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRTdGF0dXNCeXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFN0YXR1c0J5dGUoKSB7XG4gICAgICByZXR1cm4gMTQ0ICsgdGhpcy5jaGFubmVsIC0gMTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTm90ZU9uRXZlbnQ7XG59KCk7XG5cbi8qKlxuICogSG9sZHMgYWxsIGRhdGEgZm9yIGEgXCJub3RlIG9mZlwiIE1JREkgZXZlbnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZHMge2RhdGE6IFtdfVxuICogQHJldHVybiB7Tm90ZU9mZkV2ZW50fVxuICovXG5cbnZhciBOb3RlT2ZmRXZlbnQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBOb3RlT2ZmRXZlbnQoZmllbGRzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5vdGVPZmZFdmVudCk7XG5cbiAgICAvLyBTZXQgZGVmYXVsdCBmaWVsZHNcbiAgICBmaWVsZHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNoYW5uZWw6IDEsXG4gICAgICB2ZWxvY2l0eTogNTAsXG4gICAgICB0aWNrOiBudWxsXG4gICAgfSwgZmllbGRzKTtcbiAgICB0aGlzLnR5cGUgPSAnbm90ZS1vZmYnO1xuICAgIHRoaXMuY2hhbm5lbCA9IGZpZWxkcy5jaGFubmVsO1xuICAgIHRoaXMucGl0Y2ggPSBmaWVsZHMucGl0Y2g7XG4gICAgdGhpcy5kdXJhdGlvbiA9IGZpZWxkcy5kdXJhdGlvbjtcbiAgICB0aGlzLnZlbG9jaXR5ID0gZmllbGRzLnZlbG9jaXR5O1xuICAgIHRoaXMubWlkaU51bWJlciA9IFV0aWxzLmdldFBpdGNoKHRoaXMucGl0Y2gpO1xuICAgIHRoaXMudGljayA9IGZpZWxkcy50aWNrO1xuICAgIHRoaXMuZGVsdGEgPSBVdGlscy5nZXRUaWNrRHVyYXRpb24odGhpcy5kdXJhdGlvbik7XG4gICAgdGhpcy5kYXRhID0gZmllbGRzLmRhdGE7XG4gIH1cbiAgLyoqXG4gICAqIEJ1aWxkcyBpbnQgYXJyYXkgZm9yIHRoaXMgZXZlbnQuXG4gICAqIEBwYXJhbSB7VHJhY2t9IHRyYWNrIC0gcGFyZW50IHRyYWNrXG4gICAqIEByZXR1cm4ge05vdGVPZmZFdmVudH1cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoTm90ZU9mZkV2ZW50LCBbe1xuICAgIGtleTogXCJidWlsZERhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYnVpbGREYXRhKHRyYWNrLCBwcmVjaXNpb25EZWx0YSkge1xuICAgICAgaWYgKHRoaXMudGljayA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLnRpY2sgPSBVdGlscy5nZXRSb3VuZGVkSWZDbG9zZSh0aGlzLmRlbHRhICsgdHJhY2sudGlja1BvaW50ZXIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRlbHRhV2l0aFByZWNpc2lvbkNvcnJlY3Rpb24gPSBVdGlscy5nZXRSb3VuZGVkSWZDbG9zZSh0aGlzLmRlbHRhIC0gcHJlY2lzaW9uRGVsdGEpO1xuICAgICAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0aGlzLmRlbHRhV2l0aFByZWNpc2lvbkNvcnJlY3Rpb24pLmNvbmNhdCh0aGlzLmdldFN0YXR1c0J5dGUoKSwgdGhpcy5taWRpTnVtYmVyLCBVdGlscy5jb252ZXJ0VmVsb2NpdHkodGhpcy52ZWxvY2l0eSkpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIG5vdGUgb2ZmIHN0YXR1cyBjb2RlIGJhc2VkIG9uIHRoZSBzZWxlY3RlZCBjaGFubmVsLiAweDh7MC1GfVxuICAgICAqIE5vdGUgb2ZmIGF0IGNoYW5uZWwgMCBpcyAweDgwICgxMjgpXG4gICAgICogMCA9IENoIDFcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRTdGF0dXNCeXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFN0YXR1c0J5dGUoKSB7XG4gICAgICByZXR1cm4gMTI4ICsgdGhpcy5jaGFubmVsIC0gMTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTm90ZU9mZkV2ZW50O1xufSgpO1xuXG4vKipcbiAqIFdyYXBwZXIgZm9yIG5vdGVPbkV2ZW50L25vdGVPZmZFdmVudCBvYmplY3RzIHRoYXQgYnVpbGRzIGJvdGggZXZlbnRzLlxuICogQHBhcmFtIHtvYmplY3R9IGZpZWxkcyAtIHtwaXRjaDogJ1tDNF0nLCBkdXJhdGlvbjogJzQnLCB3YWl0OiAnNCcsIHZlbG9jaXR5OiAxLTEwMH1cbiAqIEByZXR1cm4ge05vdGVFdmVudH1cbiAqL1xuXG52YXIgTm90ZUV2ZW50ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTm90ZUV2ZW50KGZpZWxkcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb3RlRXZlbnQpO1xuXG4gICAgLy8gU2V0IGRlZmF1bHQgZmllbGRzXG4gICAgZmllbGRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjaGFubmVsOiAxLFxuICAgICAgcmVwZWF0OiAxLFxuICAgICAgc2VxdWVudGlhbDogZmFsc2UsXG4gICAgICBzdGFydFRpY2s6IG51bGwsXG4gICAgICB2ZWxvY2l0eTogNTAsXG4gICAgICB3YWl0OiAwXG4gICAgfSwgZmllbGRzKTtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICB0aGlzLnR5cGUgPSAnbm90ZSc7XG4gICAgdGhpcy5waXRjaCA9IFV0aWxzLnRvQXJyYXkoZmllbGRzLnBpdGNoKTtcbiAgICB0aGlzLmNoYW5uZWwgPSBmaWVsZHMuY2hhbm5lbDtcbiAgICB0aGlzLmR1cmF0aW9uID0gZmllbGRzLmR1cmF0aW9uO1xuICAgIHRoaXMuZ3JhY2UgPSBmaWVsZHMuZ3JhY2U7XG4gICAgdGhpcy5yZXBlYXQgPSBmaWVsZHMucmVwZWF0O1xuICAgIHRoaXMuc2VxdWVudGlhbCA9IGZpZWxkcy5zZXF1ZW50aWFsO1xuICAgIHRoaXMuc3RhcnRUaWNrID0gZmllbGRzLnN0YXJ0VGljaztcbiAgICB0aGlzLnZlbG9jaXR5ID0gZmllbGRzLnZlbG9jaXR5O1xuICAgIHRoaXMud2FpdCA9IGZpZWxkcy53YWl0O1xuICAgIHRoaXMudGlja0R1cmF0aW9uID0gVXRpbHMuZ2V0VGlja0R1cmF0aW9uKHRoaXMuZHVyYXRpb24pO1xuICAgIHRoaXMucmVzdER1cmF0aW9uID0gVXRpbHMuZ2V0VGlja0R1cmF0aW9uKHRoaXMud2FpdCk7XG4gICAgdGhpcy5ldmVudHMgPSBbXTsgLy8gSG9sZCBhY3R1YWwgTm90ZU9uL05vdGVPZmYgZXZlbnRzXG4gIH1cbiAgLyoqXG4gICAqIEJ1aWxkcyBpbnQgYXJyYXkgZm9yIHRoaXMgZXZlbnQuXG4gICAqIEByZXR1cm4ge05vdGVFdmVudH1cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoTm90ZUV2ZW50LCBbe1xuICAgIGtleTogXCJidWlsZERhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYnVpbGREYXRhKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgLy8gUmVzZXQgZGF0YSBhcnJheVxuICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgICB0aGlzLnRpY2tEdXJhdGlvbjtcbiAgICAgIHRoaXMucmVzdER1cmF0aW9uOyAvLyBBcHBseSBncmFjZSBub3RlKHMpIGFuZCBzdWJ0cmFjdCB0aWNrcyAoY3VycmVudGx5IDEgdGljayBwZXIgZ3JhY2Ugbm90ZSkgZnJvbSB0aWNrRHVyYXRpb24gc28gbmV0IHZhbHVlIGlzIHRoZSBzYW1lXG5cbiAgICAgIGlmICh0aGlzLmdyYWNlKSB7XG4gICAgICAgIHZhciBncmFjZUR1cmF0aW9uID0gMTtcbiAgICAgICAgdGhpcy5ncmFjZSA9IFV0aWxzLnRvQXJyYXkodGhpcy5ncmFjZSk7XG4gICAgICAgIHRoaXMuZ3JhY2UuZm9yRWFjaChmdW5jdGlvbiAocGl0Y2gpIHtcbiAgICAgICAgICB2YXIgbm90ZUV2ZW50ID0gbmV3IE5vdGVFdmVudCh7XG4gICAgICAgICAgICBwaXRjaDogX3RoaXMuZ3JhY2UsXG4gICAgICAgICAgICBkdXJhdGlvbjogJ1QnICsgZ3JhY2VEdXJhdGlvblxuICAgICAgICAgIH0pO1xuICAgICAgICAgIF90aGlzLmRhdGEgPSBfdGhpcy5kYXRhLmNvbmNhdChub3RlRXZlbnQuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfSAvLyBmaWVsZHMucGl0Y2ggY291bGQgYmUgYW4gYXJyYXkgb2YgcGl0Y2hlcy5cbiAgICAgIC8vIElmIHRoaXMuc2VxdWVudGlhbCA9PT0gdHJ1ZSB0aGVuIGl0J3MgYSBzZXF1ZW50aWFsIHN0cmluZyBvZiBub3RlcyB0aGF0IHJlcXVpcmVzIHNlcGFyYXRlIE5vdGVPbkV2ZW50cy5cblxuICAgICAgaWYgKCF0aGlzLnNlcXVlbnRpYWwpIHtcbiAgICAgICAgLy8gSGFuZGxlIHJlcGVhdFxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMucmVwZWF0OyBqKyspIHtcbiAgICAgICAgICAvLyBOb3RlIG9uXG4gICAgICAgICAgdGhpcy5waXRjaC5mb3JFYWNoKGZ1bmN0aW9uIChwLCBpKSB7XG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgIHZhciBub3RlT25OZXcgPSBuZXcgTm90ZU9uRXZlbnQoe1xuICAgICAgICAgICAgICAgIGNoYW5uZWw6IF90aGlzLmNoYW5uZWwsXG4gICAgICAgICAgICAgICAgd2FpdDogX3RoaXMud2FpdCxcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eTogX3RoaXMudmVsb2NpdHksXG4gICAgICAgICAgICAgICAgcGl0Y2g6IHAsXG4gICAgICAgICAgICAgICAgc3RhcnRUaWNrOiBfdGhpcy5zdGFydFRpY2tcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBSdW5uaW5nIHN0YXR1cyAoY2FuIG9tbWl0IHRoZSBub3RlIG9uIHN0YXR1cylcbiAgICAgICAgICAgICAgLy9ub3RlT24gPSBuZXcgTm90ZU9uRXZlbnQoe2RhdGE6IFswLCBVdGlscy5nZXRQaXRjaChwKSwgVXRpbHMuY29udmVydFZlbG9jaXR5KHRoaXMudmVsb2NpdHkpXX0pO1xuICAgICAgICAgICAgICB2YXIgbm90ZU9uTmV3ID0gbmV3IE5vdGVPbkV2ZW50KHtcbiAgICAgICAgICAgICAgICBjaGFubmVsOiBfdGhpcy5jaGFubmVsLFxuICAgICAgICAgICAgICAgIHdhaXQ6IDAsXG4gICAgICAgICAgICAgICAgdmVsb2NpdHk6IF90aGlzLnZlbG9jaXR5LFxuICAgICAgICAgICAgICAgIHBpdGNoOiBwLFxuICAgICAgICAgICAgICAgIHN0YXJ0VGljazogX3RoaXMuc3RhcnRUaWNrXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfdGhpcy5ldmVudHMucHVzaChub3RlT25OZXcpO1xuICAgICAgICAgIH0pOyAvLyBOb3RlIG9mZlxuXG4gICAgICAgICAgdGhpcy5waXRjaC5mb3JFYWNoKGZ1bmN0aW9uIChwLCBpKSB7XG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgIC8vbm90ZU9mZiA9IG5ldyBOb3RlT2ZmRXZlbnQoe2RhdGE6IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgodGlja0R1cmF0aW9uKS5jb25jYXQodGhpcy5nZXROb3RlT2ZmU3RhdHVzKCksIFV0aWxzLmdldFBpdGNoKHApLCBVdGlscy5jb252ZXJ0VmVsb2NpdHkodGhpcy52ZWxvY2l0eSkpfSk7XG4gICAgICAgICAgICAgIHZhciBub3RlT2ZmTmV3ID0gbmV3IE5vdGVPZmZFdmVudCh7XG4gICAgICAgICAgICAgICAgY2hhbm5lbDogX3RoaXMuY2hhbm5lbCxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogX3RoaXMuZHVyYXRpb24sXG4gICAgICAgICAgICAgICAgdmVsb2NpdHk6IF90aGlzLnZlbG9jaXR5LFxuICAgICAgICAgICAgICAgIHBpdGNoOiBwLFxuICAgICAgICAgICAgICAgIHRpY2s6IF90aGlzLnN0YXJ0VGljayAhPT0gbnVsbCA/IFV0aWxzLmdldFRpY2tEdXJhdGlvbihfdGhpcy5kdXJhdGlvbikgKyBfdGhpcy5zdGFydFRpY2sgOiBudWxsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gUnVubmluZyBzdGF0dXMgKGNhbiBvbW1pdCB0aGUgbm90ZSBvZmYgc3RhdHVzKVxuICAgICAgICAgICAgICAvL25vdGVPZmYgPSBuZXcgTm90ZU9mZkV2ZW50KHtkYXRhOiBbMCwgVXRpbHMuZ2V0UGl0Y2gocCksIFV0aWxzLmNvbnZlcnRWZWxvY2l0eSh0aGlzLnZlbG9jaXR5KV19KTtcbiAgICAgICAgICAgICAgdmFyIG5vdGVPZmZOZXcgPSBuZXcgTm90ZU9mZkV2ZW50KHtcbiAgICAgICAgICAgICAgICBjaGFubmVsOiBfdGhpcy5jaGFubmVsLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5OiBfdGhpcy52ZWxvY2l0eSxcbiAgICAgICAgICAgICAgICBwaXRjaDogcCxcbiAgICAgICAgICAgICAgICB0aWNrOiBfdGhpcy5zdGFydFRpY2sgIT09IG51bGwgPyBVdGlscy5nZXRUaWNrRHVyYXRpb24oX3RoaXMuZHVyYXRpb24pICsgX3RoaXMuc3RhcnRUaWNrIDogbnVsbFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX3RoaXMuZXZlbnRzLnB1c2gobm90ZU9mZk5ldyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEhhbmRsZSByZXBlYXRcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLnJlcGVhdDsgaisrKSB7XG4gICAgICAgICAgdGhpcy5waXRjaC5mb3JFYWNoKGZ1bmN0aW9uIChwLCBpKSB7XG5cbiAgICAgICAgICAgIHZhciBub3RlT25OZXcgPSBuZXcgTm90ZU9uRXZlbnQoe1xuICAgICAgICAgICAgICBjaGFubmVsOiBfdGhpcy5jaGFubmVsLFxuICAgICAgICAgICAgICB3YWl0OiBpID4gMCA/IDAgOiBfdGhpcy53YWl0LFxuICAgICAgICAgICAgICAvLyB3YWl0IG9ubHkgYXBwbGllcyB0byBmaXJzdCBub3RlIGluIHJlcGV0aXRpb25cbiAgICAgICAgICAgICAgdmVsb2NpdHk6IF90aGlzLnZlbG9jaXR5LFxuICAgICAgICAgICAgICBwaXRjaDogcCxcbiAgICAgICAgICAgICAgc3RhcnRUaWNrOiBfdGhpcy5zdGFydFRpY2tcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIG5vdGVPZmZOZXcgPSBuZXcgTm90ZU9mZkV2ZW50KHtcbiAgICAgICAgICAgICAgY2hhbm5lbDogX3RoaXMuY2hhbm5lbCxcbiAgICAgICAgICAgICAgZHVyYXRpb246IF90aGlzLmR1cmF0aW9uLFxuICAgICAgICAgICAgICB2ZWxvY2l0eTogX3RoaXMudmVsb2NpdHksXG4gICAgICAgICAgICAgIHBpdGNoOiBwXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgX3RoaXMuZXZlbnRzLnB1c2gobm90ZU9uTmV3LCBub3RlT2ZmTmV3KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTm90ZUV2ZW50O1xufSgpO1xuXG4vKipcbiAqIEhvbGRzIGFsbCBkYXRhIGZvciBhIFwiUGl0Y2ggQmVuZFwiIE1JREkgZXZlbnRcbiAqIFsgLTEuMCwgMCwgMS4wIF0gLT4gIFsgMCwgODE5MiwgMTYzODNdXG4gKiBAcGFyYW0ge29iamVjdH0gZmllbGRzIHsgYmVuZCA6IGZsb2F0LCBjaGFubmVsIDogaW50IH1cbiAqIEByZXR1cm4ge1BpdGNoQmVuZEV2ZW50fVxuICovXG5cbnZhciBzY2FsZTE0Yml0cyA9IGZ1bmN0aW9uIHNjYWxlMTRiaXRzKHplcm9PbmUpIHtcbiAgaWYgKHplcm9PbmUgPD0gMCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKDE2Mzg0ICogKHplcm9PbmUgKyAxKSAvIDIpO1xuICB9XG5cbiAgcmV0dXJuIE1hdGguZmxvb3IoMTYzODMgKiAoemVyb09uZSArIDEpIC8gMik7XG59O1xuXG52YXIgUGl0Y2hCZW5kRXZlbnQgPSBmdW5jdGlvbiBQaXRjaEJlbmRFdmVudChmaWVsZHMpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBpdGNoQmVuZEV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAncGl0Y2gtYmVuZCc7XG4gIHZhciBiZW5kMTQgPSBzY2FsZTE0Yml0cyhmaWVsZHMuYmVuZCk7XG4gIHZhciBjaGFubmVsID0gZmllbGRzLmNoYW5uZWwgfHwgMDtcbiAgdmFyIGxzYlZhbHVlID0gYmVuZDE0ICYgMHg3ZjtcbiAgdmFyIG1zYlZhbHVlID0gYmVuZDE0ID4+IDcgJiAweDdmO1xuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuUElUQ0hfQkVORF9TVEFUVVMgfCBjaGFubmVsLCBsc2JWYWx1ZSwgbXNiVmFsdWUpO1xufTtcblxuLyoqXG4gKiBIb2xkcyBhbGwgZGF0YSBmb3IgYSBcInByb2dyYW0gY2hhbmdlXCIgTUlESSBldmVudFxuICogQHBhcmFtIHtvYmplY3R9IGZpZWxkcyB7aW5zdHJ1bWVudDogaW50ZWdlcn1cbiAqIEByZXR1cm4ge1Byb2dyYW1DaGFuZ2VFdmVudH1cbiAqL1xuXG52YXIgUHJvZ3JhbUNoYW5nZUV2ZW50ID0gZnVuY3Rpb24gUHJvZ3JhbUNoYW5nZUV2ZW50KGZpZWxkcykge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHJvZ3JhbUNoYW5nZUV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAncHJvZ3JhbSc7IC8vIGRlbHRhIHRpbWUgZGVmYXVsdHMgdG8gMC5cblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuUFJPR1JBTV9DSEFOR0VfU1RBVFVTLCBmaWVsZHMuaW5zdHJ1bWVudCk7XG59O1xuXG4vKipcbiAqIEhvbGRzIGFsbCBkYXRhIGZvciBhIFwiY29udHJvbGxlciBjaGFuZ2VcIiBNSURJIGV2ZW50XG4gKiBAcGFyYW0ge29iamVjdH0gZmllbGRzIHtjb250cm9sbGVyTnVtYmVyOiBpbnRlZ2VyLCBjb250cm9sbGVyVmFsdWU6IGludGVnZXJ9XG4gKiBAcmV0dXJuIHtDb250cm9sbGVyQ2hhbmdlRXZlbnR9XG4gKi9cblxudmFyIENvbnRyb2xsZXJDaGFuZ2VFdmVudCA9IGZ1bmN0aW9uIENvbnRyb2xsZXJDaGFuZ2VFdmVudChmaWVsZHMpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbnRyb2xsZXJDaGFuZ2VFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ2NvbnRyb2xsZXInOyAvLyBkZWx0YSB0aW1lIGRlZmF1bHRzIHRvIDAuXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLkNPTlRST0xMRVJfQ0hBTkdFX1NUQVRVUywgZmllbGRzLmNvbnRyb2xsZXJOdW1iZXIsIGZpZWxkcy5jb250cm9sbGVyVmFsdWUpO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSB0ZW1wbyBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBDb3B5cmlnaHQgdGV4dFxuICogQHJldHVybiB7Q29weXJpZ2h0RXZlbnR9XG4gKi9cblxudmFyIENvcHlyaWdodEV2ZW50ID0gZnVuY3Rpb24gQ29weXJpZ2h0RXZlbnQodGV4dCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29weXJpZ2h0RXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdjb3B5cmlnaHQnO1xuICB2YXIgdGV4dEJ5dGVzID0gVXRpbHMuc3RyaW5nVG9CeXRlcyh0ZXh0KTsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfQ09QWVJJR0hUX0lELCBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRleHRCeXRlcy5sZW5ndGgpLCAvLyBTaXplXG4gIHRleHRCeXRlcyAvLyBUZXh0XG4gICk7XG59O1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIGN1ZSBwb2ludCBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBDdWUgcG9pbnQgdGV4dFxuICogQHJldHVybiB7Q3VlUG9pbnRFdmVudH1cbiAqL1xuXG52YXIgQ3VlUG9pbnRFdmVudCA9IGZ1bmN0aW9uIEN1ZVBvaW50RXZlbnQodGV4dCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ3VlUG9pbnRFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ21hcmtlcic7XG4gIHZhciB0ZXh0Qnl0ZXMgPSBVdGlscy5zdHJpbmdUb0J5dGVzKHRleHQpOyAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9DVUVfUE9JTlQsIFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgodGV4dEJ5dGVzLmxlbmd0aCksIC8vIFNpemVcbiAgdGV4dEJ5dGVzIC8vIFRleHRcbiAgKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgZW5kIHRyYWNrIG1ldGEgZXZlbnQuXG4gKiBAcmV0dXJuIHtFbmRUcmFja0V2ZW50fVxuICovXG5cbnZhciBFbmRUcmFja0V2ZW50ID0gZnVuY3Rpb24gRW5kVHJhY2tFdmVudCgpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEVuZFRyYWNrRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdlbmQtdHJhY2snOyAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9FTkRfT0ZfVFJBQ0tfSUQpO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYW4gaW5zdHJ1bWVudCBuYW1lIG1ldGEgZXZlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gYnBtIC0gQmVhdHMgcGVyIG1pbnV0ZVxuICogQHJldHVybiB7SW5zdHJ1bWVudE5hbWVFdmVudH1cbiAqL1xuXG52YXIgSW5zdHJ1bWVudE5hbWVFdmVudCA9IGZ1bmN0aW9uIEluc3RydW1lbnROYW1lRXZlbnQodGV4dCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5zdHJ1bWVudE5hbWVFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ2luc3RydW1lbnQtbmFtZSc7XG4gIHZhciB0ZXh0Qnl0ZXMgPSBVdGlscy5zdHJpbmdUb0J5dGVzKHRleHQpOyAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9JTlNUUlVNRU5UX05BTUVfSUQsIFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgodGV4dEJ5dGVzLmxlbmd0aCksIC8vIFNpemVcbiAgdGV4dEJ5dGVzIC8vIEluc3RydW1lbnQgbmFtZVxuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSBrZXkgc2lnbmF0dXJlIG1ldGEgZXZlbnQuXG4gKiBAcmV0dXJuIHtLZXlTaWduYXR1cmVFdmVudH1cbiAqL1xuXG52YXIgS2V5U2lnbmF0dXJlRXZlbnQgPSBmdW5jdGlvbiBLZXlTaWduYXR1cmVFdmVudChzZiwgbWkpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEtleVNpZ25hdHVyZUV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAna2V5LXNpZ25hdHVyZSc7XG4gIHZhciBtb2RlID0gbWkgfHwgMDtcbiAgc2YgPSBzZiB8fCAwOyAvL1x0RnVuY3Rpb24gY2FsbGVkIHdpdGggc3RyaW5nIG5vdGF0aW9uXG5cbiAgaWYgKHR5cGVvZiBtaSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgZmlmdGhzID0gW1snQ2InLCAnR2InLCAnRGInLCAnQWInLCAnRWInLCAnQmInLCAnRicsICdDJywgJ0cnLCAnRCcsICdBJywgJ0UnLCAnQicsICdGIycsICdDIyddLCBbJ2FiJywgJ2ViJywgJ2JiJywgJ2YnLCAnYycsICdnJywgJ2QnLCAnYScsICdlJywgJ2InLCAnZiMnLCAnYyMnLCAnZyMnLCAnZCMnLCAnYSMnXV07XG4gICAgdmFyIF9zZmxlbiA9IHNmLmxlbmd0aDtcbiAgICB2YXIgbm90ZSA9IHNmIHx8ICdDJztcbiAgICBpZiAoc2ZbMF0gPT09IHNmWzBdLnRvTG93ZXJDYXNlKCkpIG1vZGUgPSAxO1xuXG4gICAgaWYgKF9zZmxlbiA+IDEpIHtcbiAgICAgIHN3aXRjaCAoc2YuY2hhckF0KF9zZmxlbiAtIDEpKSB7XG4gICAgICAgIGNhc2UgJ20nOlxuICAgICAgICAgIG1vZGUgPSAxO1xuICAgICAgICAgIG5vdGUgPSBzZi5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICBub3RlID0gbm90ZS5jb25jYXQoc2Yuc3Vic3RyaW5nKDEsIF9zZmxlbiAtIDEpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICBtb2RlID0gMTtcbiAgICAgICAgICBub3RlID0gc2YuY2hhckF0KDApLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgbm90ZSA9IG5vdGUuY29uY2F0KHNmLnN1YnN0cmluZygxLCBfc2ZsZW4gLSAxKSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnTSc6XG4gICAgICAgICAgbW9kZSA9IDA7XG4gICAgICAgICAgbm90ZSA9IHNmLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgIG5vdGUgPSBub3RlLmNvbmNhdChzZi5zdWJzdHJpbmcoMSwgX3NmbGVuIC0gMSkpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgIG1vZGUgPSAwO1xuICAgICAgICAgIG5vdGUgPSBzZi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICBub3RlID0gbm90ZS5jb25jYXQoc2Yuc3Vic3RyaW5nKDEsIF9zZmxlbiAtIDEpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZmlmdGhpbmRleCA9IGZpZnRoc1ttb2RlXS5pbmRleE9mKG5vdGUpO1xuICAgIHNmID0gZmlmdGhpbmRleCA9PT0gLTEgPyAwIDogZmlmdGhpbmRleCAtIDc7XG4gIH0gLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9LRVlfU0lHTkFUVVJFX0lELCBbMHgwMl0sIC8vIFNpemVcbiAgVXRpbHMubnVtYmVyVG9CeXRlcyhzZiwgMSksIC8vIE51bWJlciBvZiBzaGFycCBvciBmbGF0cyAoIDwgMCBmbGF0OyA+IDAgc2hhcnApXG4gIFV0aWxzLm51bWJlclRvQnl0ZXMobW9kZSwgMSkgLy8gTW9kZTogMCBtYWpvciwgMSBtaW5vclxuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSBseXJpYyBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBMeXJpYyB0ZXh0XG4gKiBAcmV0dXJuIHtMeXJpY0V2ZW50fVxuICovXG5cbnZhciBMeXJpY0V2ZW50ID0gZnVuY3Rpb24gTHlyaWNFdmVudCh0ZXh0KSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMeXJpY0V2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAnbWFya2VyJztcbiAgdmFyIHRleHRCeXRlcyA9IFV0aWxzLnN0cmluZ1RvQnl0ZXModGV4dCk7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX0xZUklDX0lELCBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRleHRCeXRlcy5sZW5ndGgpLCAvLyBTaXplXG4gIHRleHRCeXRlcyAvLyBUZXh0XG4gICk7XG59O1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIG1hcmtlciBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBNYXJrZXIgdGV4dFxuICogQHJldHVybiB7TWFya2VyRXZlbnR9XG4gKi9cblxudmFyIE1hcmtlckV2ZW50ID0gZnVuY3Rpb24gTWFya2VyRXZlbnQodGV4dCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFya2VyRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdtYXJrZXInO1xuICB2YXIgdGV4dEJ5dGVzID0gVXRpbHMuc3RyaW5nVG9CeXRlcyh0ZXh0KTsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfTUFSS0VSX0lELCBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRleHRCeXRlcy5sZW5ndGgpLCAvLyBTaXplXG4gIHRleHRCeXRlcyAvLyBUZXh0XG4gICk7XG59O1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIHRlbXBvIG1ldGEgZXZlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gYnBtIC0gQmVhdHMgcGVyIG1pbnV0ZVxuICogQHJldHVybiB7VGVtcG9FdmVudH1cbiAqL1xuXG52YXIgVGVtcG9FdmVudCA9IGZ1bmN0aW9uIFRlbXBvRXZlbnQoYnBtKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUZW1wb0V2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAndGVtcG8nO1xuICB2YXIgdGVtcG8gPSBNYXRoLnJvdW5kKDYwMDAwMDAwIC8gYnBtKTsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfVEVNUE9fSUQsIFsweDAzXSwgLy8gU2l6ZVxuICBVdGlscy5udW1iZXJUb0J5dGVzKHRlbXBvLCAzKSAvLyBUZW1wbywgMyBieXRlc1xuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSB0ZW1wbyBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IGJwbSAtIEJlYXRzIHBlciBtaW51dGVcbiAqIEByZXR1cm4ge1RleHRFdmVudH1cbiAqL1xuXG52YXIgVGV4dEV2ZW50ID0gZnVuY3Rpb24gVGV4dEV2ZW50KHRleHQpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRleHRFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ3RleHQnO1xuICB2YXIgdGV4dEJ5dGVzID0gVXRpbHMuc3RyaW5nVG9CeXRlcyh0ZXh0KTsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfVEVYVF9JRCwgVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0ZXh0Qnl0ZXMubGVuZ3RoKSwgLy8gU2l6ZVxuICB0ZXh0Qnl0ZXMgLy8gVGV4dFxuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSB0aW1lIHNpZ25hdHVyZSBtZXRhIGV2ZW50LlxuICogQHJldHVybiB7VGltZVNpZ25hdHVyZUV2ZW50fVxuICovXG5cbnZhciBUaW1lU2lnbmF0dXJlRXZlbnQgPSBmdW5jdGlvbiBUaW1lU2lnbmF0dXJlRXZlbnQobnVtZXJhdG9yLCBkZW5vbWluYXRvciwgbWlkaWNsb2Nrc3BlcnRpY2ssIG5vdGVzcGVybWlkaWNsb2NrKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUaW1lU2lnbmF0dXJlRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICd0aW1lLXNpZ25hdHVyZSc7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX1RJTUVfU0lHTkFUVVJFX0lELCBbMHgwNF0sIC8vIFNpemVcbiAgVXRpbHMubnVtYmVyVG9CeXRlcyhudW1lcmF0b3IsIDEpLCAvLyBOdW1lcmF0b3IsIDEgYnl0ZXNcbiAgVXRpbHMubnVtYmVyVG9CeXRlcyhNYXRoLmxvZzIoZGVub21pbmF0b3IpLCAxKSwgLy8gRGVub21pbmF0b3IgaXMgZXhwcmVzc2VkIGFzIHBvdyBvZiAyLCAxIGJ5dGVzXG4gIFV0aWxzLm51bWJlclRvQnl0ZXMobWlkaWNsb2Nrc3BlcnRpY2sgfHwgMjQsIDEpLCAvLyBNSURJIENsb2NrcyBwZXIgdGljaywgMSBieXRlc1xuICBVdGlscy5udW1iZXJUb0J5dGVzKG5vdGVzcGVybWlkaWNsb2NrIHx8IDgsIDEpIC8vIE51bWJlciBvZiAxLzMyIG5vdGVzIHBlciBNSURJIGNsb2NrcywgMSBieXRlc1xuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSB0ZW1wbyBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IGJwbSAtIEJlYXRzIHBlciBtaW51dGVcbiAqIEByZXR1cm4ge1RyYWNrTmFtZUV2ZW50fVxuICovXG5cbnZhciBUcmFja05hbWVFdmVudCA9IGZ1bmN0aW9uIFRyYWNrTmFtZUV2ZW50KHRleHQpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRyYWNrTmFtZUV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAndHJhY2stbmFtZSc7XG4gIHZhciB0ZXh0Qnl0ZXMgPSBVdGlscy5zdHJpbmdUb0J5dGVzKHRleHQpOyAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9UUkFDS19OQU1FX0lELCBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRleHRCeXRlcy5sZW5ndGgpLCAvLyBTaXplXG4gIHRleHRCeXRlcyAvLyBUZXh0XG4gICk7XG59O1xuXG4vKipcbiAqIEhvbGRzIGFsbCBkYXRhIGZvciBhIHRyYWNrLlxuICogQHBhcmFtIHtvYmplY3R9IGZpZWxkcyB7dHlwZTogbnVtYmVyLCBkYXRhOiBhcnJheSwgc2l6ZTogYXJyYXksIGV2ZW50czogYXJyYXl9XG4gKiBAcmV0dXJuIHtUcmFja31cbiAqL1xuXG52YXIgVHJhY2sgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBUcmFjaygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJhY2spO1xuXG4gICAgdGhpcy50eXBlID0gQ29uc3RhbnRzLlRSQUNLX0NIVU5LX1RZUEU7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgdGhpcy5zaXplID0gW107XG4gICAgdGhpcy5ldmVudHMgPSBbXTtcbiAgICB0aGlzLmV4cGxpY2l0VGlja0V2ZW50cyA9IFtdOyAvLyBJZiB0aGVyZSBhcmUgYW55IGV2ZW50cyB3aXRoIGFuIGV4cGxpY2l0IHRpY2sgZGVmaW5lZCB0aGVuIHdlIHdpbGwgY3JlYXRlIGEgXCJzdWJcIiB0cmFjayBmb3IgdGhvc2VcbiAgICAvLyBhbmQgbWVyZ2UgdGhlbSBpbiBhbmQgdGhlIGVuZC5cblxuICAgIHRoaXMudGlja1BvaW50ZXIgPSAwOyAvLyBFYWNoIHRpbWUgYW4gZXZlbnQgaXMgYWRkZWQgdGhpcyB3aWxsIGluY3JlYXNlXG4gIH1cbiAgLyoqXG4gICAqIEFkZHMgYW55IGV2ZW50IHR5cGUgdG8gdGhlIHRyYWNrLlxuICAgKiBFdmVudHMgd2l0aG91dCBhIHNwZWNpZmljIHN0YXJ0VGljayBwcm9wZXJ0eSBhcmUgYXNzdW1lZCB0byBiZSBhZGRlZCBpbiBvcmRlciBvZiBob3cgdGhleSBzaG91bGQgb3V0cHV0LlxuICAgKiBFdmVudHMgd2l0aCBhIHNwZWNpZmljIHN0YXJ0VGljayBwcm9wZXJ0eSBhcmUgc2V0IGFzaWRlIGZvciBub3cgd2lsbCBiZSBtZXJnZWQgaW4gZHVyaW5nIGJ1aWxkIHByb2Nlc3MuXG4gICAqIEBwYXJhbSB7KE5vdGVFdmVudHxQcm9ncmFtQ2hhbmdlRXZlbnQpfSBldmVudHMgLSBFdmVudCBvYmplY3Qgb3IgYXJyYXkgb2YgRXZlbnQgb2JqZWN0cy5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gbWFwRnVuY3Rpb24gLSBDYWxsYmFjayB3aGljaCBjYW4gYmUgdXNlZCB0byBhcHBseSBzcGVjaWZpYyBwcm9wZXJ0aWVzIHRvIGFsbCBldmVudHMuXG4gICAqIEByZXR1cm4ge1RyYWNrfVxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhUcmFjaywgW3tcbiAgICBrZXk6IFwiYWRkRXZlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkRXZlbnQoZXZlbnRzLCBtYXBGdW5jdGlvbikge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgVXRpbHMudG9BcnJheShldmVudHMpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50LCBpKSB7XG4gICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5vdGVFdmVudCkge1xuICAgICAgICAgIC8vIEhhbmRsZSBtYXAgZnVuY3Rpb24gaWYgcHJvdmlkZWRcbiAgICAgICAgICBpZiAodHlwZW9mIG1hcEZ1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgcHJvcGVydGllcyA9IG1hcEZ1bmN0aW9uKGksIGV2ZW50KTtcblxuICAgICAgICAgICAgaWYgKF90eXBlb2YocHJvcGVydGllcykgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIGogaW4gcHJvcGVydGllcykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoaikge1xuICAgICAgICAgICAgICAgICAgY2FzZSAnY2hhbm5lbCc6XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmNoYW5uZWwgPSBwcm9wZXJ0aWVzW2pdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgY2FzZSAnZHVyYXRpb24nOlxuICAgICAgICAgICAgICAgICAgICBldmVudC5kdXJhdGlvbiA9IHByb3BlcnRpZXNbal07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlICdzZXF1ZW50aWFsJzpcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc2VxdWVudGlhbCA9IHByb3BlcnRpZXNbal07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlICd2ZWxvY2l0eSc6XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnZlbG9jaXR5ID0gVXRpbHMuY29udmVydFZlbG9jaXR5KHByb3BlcnRpZXNbal0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IC8vIElmIHRoaXMgbm90ZSBldmVudCBoYXMgYW4gZXhwbGljaXQgc3RhcnRUaWNrIHRoZW4gd2UgbmVlZCB0byBzZXQgYXNpZGUgZm9yIG5vd1xuXG5cbiAgICAgICAgICBpZiAoZXZlbnQuc3RhcnRUaWNrICE9PSBudWxsKSB7XG4gICAgICAgICAgICBfdGhpcy5leHBsaWNpdFRpY2tFdmVudHMucHVzaChldmVudCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFB1c2ggZWFjaCBvbi9vZmYgZXZlbnQgdG8gdHJhY2sncyBldmVudCBzdGFja1xuICAgICAgICAgICAgZXZlbnQuYnVpbGREYXRhKCkuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmV2ZW50cy5wdXNoKGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzLmV2ZW50cy5wdXNoKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQnVpbGRzIGludCBhcnJheSBvZiBhbGwgZXZlbnRzLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYnVpbGREYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJ1aWxkRGF0YSgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAvLyBSZW1vdmUgZXhpc3RpbmcgZW5kIHRyYWNrIGV2ZW50IGFuZCBhZGQgb25lLlxuICAgICAgLy8gVGhpcyBtYWtlcyBzdXJlIGl0J3MgYXQgdGhlIHZlcnkgZW5kIG9mIHRoZSBldmVudCBsaXN0LlxuICAgICAgdGhpcy5yZW1vdmVFdmVudHNCeVR5cGUoJ2VuZC10cmFjaycpLmFkZEV2ZW50KG5ldyBFbmRUcmFja0V2ZW50KCkpOyAvLyBSZXNldFxuXG4gICAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICAgIHRoaXMuc2l6ZSA9IFtdO1xuICAgICAgdGhpcy50aWNrUG9pbnRlciA9IDA7XG4gICAgICB2YXIgcHJlY2lzaW9uTG9zcyA9IDA7XG4gICAgICB0aGlzLmV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCwgZXZlbnRJbmRleCkge1xuICAgICAgICAvLyBCdWlsZCBldmVudCAmIGFkZCB0byB0b3RhbCB0aWNrIGR1cmF0aW9uXG4gICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5vdGVPbkV2ZW50IHx8IGV2ZW50IGluc3RhbmNlb2YgTm90ZU9mZkV2ZW50KSB7XG4gICAgICAgICAgdmFyIGJ1aWx0ID0gZXZlbnQuYnVpbGREYXRhKF90aGlzMiwgcHJlY2lzaW9uTG9zcyk7XG4gICAgICAgICAgcHJlY2lzaW9uTG9zcyA9IFV0aWxzLmdldFByZWNpc2lvbkxvc3MoZXZlbnQuZGVsdGFXaXRoUHJlY2lzaW9uQ29ycmVjdGlvbiB8fCAwKTtcbiAgICAgICAgICBfdGhpczIuZGF0YSA9IF90aGlzMi5kYXRhLmNvbmNhdChidWlsdC5kYXRhKTtcbiAgICAgICAgICBfdGhpczIudGlja1BvaW50ZXIgPSBVdGlscy5nZXRSb3VuZGVkSWZDbG9zZShldmVudC50aWNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpczIuZGF0YSA9IF90aGlzMi5kYXRhLmNvbmNhdChldmVudC5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLm1lcmdlRXhwbGljaXRUaWNrRXZlbnRzKCk7XG4gICAgICB0aGlzLnNpemUgPSBVdGlscy5udW1iZXJUb0J5dGVzKHRoaXMuZGF0YS5sZW5ndGgsIDQpOyAvLyA0IGJ5dGVzIGxvbmdcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm1lcmdlRXhwbGljaXRUaWNrRXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1lcmdlRXhwbGljaXRUaWNrRXZlbnRzKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIGlmICghdGhpcy5leHBsaWNpdFRpY2tFdmVudHMubGVuZ3RoKSByZXR1cm47IC8vIEZpcnN0IHNvcnQgYXNjIGxpc3Qgb2YgZXZlbnRzIGJ5IHN0YXJ0VGlja1xuXG4gICAgICB0aGlzLmV4cGxpY2l0VGlja0V2ZW50cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBhLnN0YXJ0VGljayAtIGIuc3RhcnRUaWNrO1xuICAgICAgfSk7IC8vIE5vdyB0aGlzLmV4cGxpY2l0VGlja0V2ZW50cyBpcyBpbiBjb3JyZWN0IG9yZGVyLCBhbmQgc28gaXMgdGhpcy5ldmVudHMgbmF0dXJhbGx5LlxuICAgICAgLy8gRm9yIGVhY2ggZXhwbGljaXQgdGljayBldmVudCwgc3BsaWNlIGl0IGludG8gdGhlIG1haW4gbGlzdCBvZiBldmVudHMgYW5kXG4gICAgICAvLyBhZGp1c3QgdGhlIGRlbHRhIG9uIHRoZSBmb2xsb3dpbmcgZXZlbnRzIHNvIHRoZXkgc3RpbGwgcGxheSBub3JtYWxseS5cblxuICAgICAgdGhpcy5leHBsaWNpdFRpY2tFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAobm90ZUV2ZW50KSB7XG4gICAgICAgIC8vIENvbnZlcnQgTm90ZUV2ZW50IHRvIGl0J3MgcmVzcGVjdGl2ZSBOb3RlT24vTm90ZU9mZiBldmVudHNcbiAgICAgICAgLy8gTm90ZSB0aGF0IGFzIHdlIHNwbGljZSBpbiBldmVudHMgdGhlIGRlbHRhIGZvciB0aGUgTm90ZU9mZiBvbmVzIHdpbGxcbiAgICAgICAgLy8gTmVlZCB0byBjaGFuZ2UgYmFzZWQgb24gd2hhdCBjb21lcyBiZWZvcmUgdGhlbSBhZnRlciB0aGUgc3BsaWNlLlxuICAgICAgICBub3RlRXZlbnQuYnVpbGREYXRhKCkuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gZS5idWlsZERhdGEoX3RoaXMzKTtcbiAgICAgICAgfSk7IC8vIE1lcmdlIGVhY2ggZXZlbnQgaW5kaXZ1YWxseSBpbnRvIHRoaXMgdHJhY2sncyBldmVudCBsaXN0LlxuXG4gICAgICAgIG5vdGVFdmVudC5ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMzLm1lcmdlU2luZ2xlRXZlbnQoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgIH0pOyAvLyBIYWNreSB3YXkgdG8gcmVidWlsZCB0cmFjayB3aXRoIG5ld2x5IHNwbGljZWQgZXZlbnRzLiAgTmVlZCBiZXR0ZXIgc29sdXRpb24uXG5cbiAgICAgIHRoaXMuZXhwbGljaXRUaWNrRXZlbnRzID0gW107XG4gICAgICB0aGlzLmJ1aWxkRGF0YSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNZXJnZXMgYW5vdGhlciB0cmFjaydzIGV2ZW50cyB3aXRoIHRoaXMgdHJhY2suXG4gICAgICogQHBhcmFtIHtUcmFja30gdHJhY2tcbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm1lcmdlVHJhY2tcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWVyZ2VUcmFjayh0cmFjaykge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIC8vIEZpcnN0IGJ1aWxkIHRoaXMgdHJhY2sgdG8gcG9wdWxhdGUgZWFjaCBldmVudCdzIHRpY2sgcHJvcGVydHlcbiAgICAgIHRoaXMuYnVpbGREYXRhKCk7IC8vIFRoZW4gYnVpbGQgdHJhY2sgdG8gYmUgbWVyZ2VkIHNvIHRoYXQgdGljayBwcm9wZXJ0eSBpcyBwb3B1bGF0ZWQgb24gYWxsIGV2ZW50cyAmIG1lcmdlIGVhY2ggZXZlbnQuXG5cbiAgICAgIHRyYWNrLmJ1aWxkRGF0YSgpLmV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICByZXR1cm4gX3RoaXM0Lm1lcmdlU2luZ2xlRXZlbnQoZXZlbnQpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE1lcmdlcyBhIHNpbmdsZSBldmVudCBpbnRvIHRoaXMgdHJhY2sncyBsaXN0IG9mIGV2ZW50cyBiYXNlZCBvbiBldmVudC50aWNrIHByb3BlcnR5LlxuICAgICAqIEBwYXJhbSB7Tm90ZU9uRXZlbnR8Tm90ZU9mZkV2ZW50fSAtIGV2ZW50XG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJtZXJnZVNpbmdsZUV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1lcmdlU2luZ2xlRXZlbnQoZXZlbnQpIHtcbiAgICAgIC8vIEZpbmQgaW5kZXggb2YgZXhpc3RpbmcgZXZlbnQgd2UgbmVlZCB0byBmb2xsb3cgd2l0aFxuICAgICAgdmFyIGxhc3RFdmVudEluZGV4ID0gMDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5ldmVudHNbaV0udGljayA+IGV2ZW50LnRpY2spIGJyZWFrO1xuICAgICAgICBsYXN0RXZlbnRJbmRleCA9IGk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzcGxpY2VkRXZlbnRJbmRleCA9IGxhc3RFdmVudEluZGV4ICsgMTsgLy8gTmVlZCB0byBhZGp1c3QgdGhlIGRlbHRhIG9mIHRoaXMgZXZlbnQgdG8gZW5zdXJlIGl0IGZhbGxzIG9uIHRoZSBjb3JyZWN0IHRpY2suXG5cbiAgICAgIGV2ZW50LmRlbHRhID0gZXZlbnQudGljayAtIHRoaXMuZXZlbnRzW2xhc3RFdmVudEluZGV4XS50aWNrOyAvLyBTcGxpY2UgdGhpcyBldmVudCBhdCBsYXN0RXZlbnRJbmRleCArIDFcblxuICAgICAgdGhpcy5ldmVudHMuc3BsaWNlKHNwbGljZWRFdmVudEluZGV4LCAwLCBldmVudCk7IC8vIE5vdyBhZGp1c3QgZGVsdGEgb2YgYWxsIGZvbGxvd2luZyBldmVudHNcblxuICAgICAgZm9yICh2YXIgaSA9IHNwbGljZWRFdmVudEluZGV4ICsgMTsgaSA8IHRoaXMuZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIFNpbmNlIGVhY2ggZXhpc3RpbmcgZXZlbnQgc2hvdWxkIGhhdmUgYSB0aWNrIHZhbHVlIGF0IHRoaXMgcG9pbnQgd2UganVzdCBuZWVkIHRvXG4gICAgICAgIC8vIGFkanVzdCBkZWx0YSB0byB0aGF0IHRoZSBldmVudCBzdGlsbCBmYWxscyBvbiB0aGUgY29ycmVjdCB0aWNrLlxuICAgICAgICB0aGlzLmV2ZW50c1tpXS5kZWx0YSA9IHRoaXMuZXZlbnRzW2ldLnRpY2sgLSB0aGlzLmV2ZW50c1tpIC0gMV0udGljaztcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwgZXZlbnRzIG1hdGNoaW5nIHNwZWNpZmllZCB0eXBlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFR5cGUgLSBFdmVudCB0eXBlXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVFdmVudHNCeVR5cGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlRXZlbnRzQnlUeXBlKGV2ZW50VHlwZSkge1xuICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgIHRoaXMuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50LCBpbmRleCkge1xuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gZXZlbnRUeXBlKSB7XG4gICAgICAgICAgX3RoaXM1LmV2ZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRlbXBvIG9mIHRoZSBNSURJIGZpbGUuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGJwbSAtIFRlbXBvIGluIGJlYXRzIHBlciBtaW51dGUuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzZXRUZW1wb1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRUZW1wbyhicG0pIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBUZW1wb0V2ZW50KGJwbSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRpbWUgc2lnbmF0dXJlLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBudW1lcmF0b3IgLSBUb3AgbnVtYmVyIG9mIHRoZSB0aW1lIHNpZ25hdHVyZS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGVub21pbmF0b3IgLSBCb3R0b20gbnVtYmVyIG9mIHRoZSB0aW1lIHNpZ25hdHVyZS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWlkaWNsb2Nrc3BlcnRpY2sgLSBEZWZhdWx0cyB0byAyNC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbm90ZXNwZXJtaWRpY2xvY2sgLSBEZWZhdWx0cyB0byA4LlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2V0VGltZVNpZ25hdHVyZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRUaW1lU2lnbmF0dXJlKG51bWVyYXRvciwgZGVub21pbmF0b3IsIG1pZGljbG9ja3NwZXJ0aWNrLCBub3Rlc3Blcm1pZGljbG9jaykge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IFRpbWVTaWduYXR1cmVFdmVudChudW1lcmF0b3IsIGRlbm9taW5hdG9yLCBtaWRpY2xvY2tzcGVydGljaywgbm90ZXNwZXJtaWRpY2xvY2spKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyBrZXkgc2lnbmF0dXJlLlxuICAgICAqIEBwYXJhbSB7Kn0gc2YgLVxuICAgICAqIEBwYXJhbSB7Kn0gbWkgLVxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2V0S2V5U2lnbmF0dXJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEtleVNpZ25hdHVyZShzZiwgbWkpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBLZXlTaWduYXR1cmVFdmVudChzZiwgbWkpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyB0ZXh0IHRvIE1JREkgZmlsZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRleHQgdG8gYWRkLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkVGV4dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRUZXh0KHRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBUZXh0RXZlbnQodGV4dCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGNvcHlyaWdodCB0byBNSURJIGZpbGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUZXh0IG9mIGNvcHlyaWdodCBsaW5lLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkQ29weXJpZ2h0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZENvcHlyaWdodCh0ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgQ29weXJpZ2h0RXZlbnQodGV4dCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIFNlcXVlbmNlL1RyYWNrIE5hbWUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUZXh0IG9mIHRyYWNrIG5hbWUuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhZGRUcmFja05hbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkVHJhY2tOYW1lKHRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBUcmFja05hbWVFdmVudCh0ZXh0KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgaW5zdHJ1bWVudCBuYW1lIG9mIHRyYWNrLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gTmFtZSBvZiBpbnN0cnVtZW50LlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkSW5zdHJ1bWVudE5hbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkSW5zdHJ1bWVudE5hbWUodGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IEluc3RydW1lbnROYW1lRXZlbnQodGV4dCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIG1hcmtlciB0byBNSURJIGZpbGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBNYXJrZXIgdGV4dC5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFkZE1hcmtlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRNYXJrZXIodGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IE1hcmtlckV2ZW50KHRleHQpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBjdWUgcG9pbnQgdG8gTUlESSBmaWxlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCBvZiBjdWUgcG9pbnQuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhZGRDdWVQb2ludFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRDdWVQb2ludCh0ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgQ3VlUG9pbnRFdmVudCh0ZXh0KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgbHlyaWMgdG8gTUlESSBmaWxlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gTHlyaWMgdGV4dCB0byBhZGQuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhZGRMeXJpY1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRMeXJpYyh0ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgTHlyaWNFdmVudCh0ZXh0KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoYW5uZWwgbW9kZSBtZXNzYWdlc1xuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicG9seU1vZGVPblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwb2x5TW9kZU9uKCkge1xuICAgICAgdmFyIGV2ZW50ID0gbmV3IE5vdGVPbkV2ZW50KHtcbiAgICAgICAgZGF0YTogWzB4MDAsIDB4QjAsIDB4N0UsIDB4MDBdXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KGV2ZW50KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyBhIHBpdGNoIGJlbmQuXG4gICAgICogQHBhcmFtIHtmbG9hdH0gYmVuZCAtIEJlbmQgdmFsdWUgcmFuZ2luZyBbLTEsMV0sIHplcm8gbWVhbmluZyBubyBiZW5kLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2V0UGl0Y2hCZW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFBpdGNoQmVuZChiZW5kKSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgUGl0Y2hCZW5kRXZlbnQoe1xuICAgICAgICBiZW5kOiBiZW5kXG4gICAgICB9KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBjb250cm9sbGVyIGNoYW5nZSBldmVudFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIgLSBDb250cm9sIG51bWJlci5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSBDb250cm9sIHZhbHVlLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY29udHJvbGxlckNoYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb250cm9sbGVyQ2hhbmdlKG51bWJlciwgdmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBDb250cm9sbGVyQ2hhbmdlRXZlbnQoe1xuICAgICAgICBjb250cm9sbGVyTnVtYmVyOiBudW1iZXIsXG4gICAgICAgIGNvbnRyb2xsZXJWYWx1ZTogdmFsdWVcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVHJhY2s7XG59KCk7XG5cbnZhciBWZXhGbG93ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVmV4RmxvdygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVmV4Rmxvdyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVmV4RmxvdywgW3tcbiAgICBrZXk6IFwidHJhY2tGcm9tVm9pY2VcIixcbiAgICB2YWx1ZTpcbiAgICAvKipcbiAgICAgKiBTdXBwb3J0IGZvciBjb252ZXJ0aW5nIFZleEZsb3cgdm9pY2UgaW50byBNaWRpV3JpdGVySlMgdHJhY2tcbiAgICAgKiBAcmV0dXJuIE1pZGlXcml0ZXIuVHJhY2sgb2JqZWN0XG4gICAgICovXG4gICAgZnVuY3Rpb24gdHJhY2tGcm9tVm9pY2Uodm9pY2UpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7XG4gICAgICAgIGFkZFJlbmRlcmVkQWNjaWRlbnRhbHM6IGZhbHNlXG4gICAgICB9O1xuICAgICAgdmFyIHRyYWNrID0gbmV3IFRyYWNrKCk7XG4gICAgICB2YXIgd2FpdCA9IFtdO1xuICAgICAgdm9pY2UudGlja2FibGVzLmZvckVhY2goZnVuY3Rpb24gKHRpY2thYmxlKSB7XG4gICAgICAgIGlmICh0aWNrYWJsZS5ub3RlVHlwZSA9PT0gJ24nKSB7XG4gICAgICAgICAgdHJhY2suYWRkRXZlbnQobmV3IE5vdGVFdmVudCh7XG4gICAgICAgICAgICBwaXRjaDogdGlja2FibGUua2V5cy5tYXAoZnVuY3Rpb24gKHBpdGNoLCBpbmRleCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuY29udmVydFBpdGNoKHBpdGNoLCBpbmRleCwgdGlja2FibGUsIG9wdGlvbnMuYWRkUmVuZGVyZWRBY2NpZGVudGFscyk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBfdGhpcy5jb252ZXJ0RHVyYXRpb24odGlja2FibGUpLFxuICAgICAgICAgICAgd2FpdDogd2FpdFxuICAgICAgICAgIH0pKTsgLy8gcmVzZXQgd2FpdFxuXG4gICAgICAgICAgd2FpdCA9IFtdO1xuICAgICAgICB9IGVsc2UgaWYgKHRpY2thYmxlLm5vdGVUeXBlID09PSAncicpIHtcbiAgICAgICAgICAvLyBtb3ZlIG9uIHRvIHRoZSBuZXh0IHRpY2thYmxlIGFuZCBhZGQgdGhpcyB0byB0aGUgc3RhY2tcbiAgICAgICAgICAvLyBvZiB0aGUgYHdhaXRgIHByb3BlcnR5IGZvciB0aGUgbmV4dCBub3RlIGV2ZW50XG4gICAgICAgICAgd2FpdC5wdXNoKF90aGlzLmNvbnZlcnREdXJhdGlvbih0aWNrYWJsZSkpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSk7IC8vIFRoZXJlIG1heSBiZSBvdXRzdGFuZGluZyByZXN0cyBhdCB0aGUgZW5kIG9mIHRoZSB0cmFjayxcbiAgICAgIC8vIHBhZCB3aXRoIGEgZ2hvc3Qgbm90ZSAoemVybyBkdXJhdGlvbiBhbmQgdmVsb2NpdHkpLCBqdXN0IHRvIGNhcHR1cmUgdGhlIHdhaXQuXG5cbiAgICAgIGlmICh3YWl0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgdHJhY2suYWRkRXZlbnQobmV3IE5vdGVFdmVudCh7XG4gICAgICAgICAgcGl0Y2g6ICdbYzRdJyxcbiAgICAgICAgICBkdXJhdGlvbjogJzAnLFxuICAgICAgICAgIHdhaXQ6IHdhaXQsXG4gICAgICAgICAgdmVsb2NpdHk6ICcwJ1xuICAgICAgICB9KSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cmFjaztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgVmV4RmxvdyBwaXRjaCBzeW50YXggdG8gTWlkaVdyaXRlckpTIHN5bnRheFxuICAgICAqIEBwYXJhbSBwaXRjaCBzdHJpbmdcbiAgICAgKiBAcGFyYW0gaW5kZXggcGl0Y2ggaW5kZXhcbiAgICAgKiBAcGFyYW0gbm90ZSBzdHJ1Y3QgZnJvbSBWZXhmbG93XG4gICAgICogQHBhcmFtIGFkZFJlbmRlcmVkQWNjaWRlbnRhbHMgYWRkcyBWZXhmbG93IHJlbmRlcmVkIGFjY2lkZW50YWxzXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjb252ZXJ0UGl0Y2hcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29udmVydFBpdGNoKHBpdGNoLCBpbmRleCwgbm90ZSkge1xuICAgICAgdmFyIGFkZFJlbmRlcmVkQWNjaWRlbnRhbHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IGZhbHNlO1xuICAgICAgLy8gU3BsaXRzIG5vdGUgbmFtZSBmcm9tIG9jdGF2ZVxuICAgICAgdmFyIHBpdGNoUGFydHMgPSBwaXRjaC5zcGxpdCgnLycpOyAvLyBSZXRyaWV2ZXMgYWNjaWRlbnRhbHMgZnJvbSBwaXRjaFxuICAgICAgLy8gUmVtb3ZlcyBuYXR1cmFsIGFjY2lkZW50YWxzIHNpbmNlIHRoZXkgYXJlIG5vdCBhY2NlcHRlZCBpbiBUb25hbCBNaWRpXG5cbiAgICAgIHZhciBhY2NpZGVudGFscyA9IHBpdGNoUGFydHNbMF0uc3Vic3RyaW5nKDEpLnJlcGxhY2UoJ24nLCAnJyk7XG5cbiAgICAgIGlmIChhZGRSZW5kZXJlZEFjY2lkZW50YWxzKSB7XG4gICAgICAgIHZhciBfbm90ZSRnZXRBY2NpZGVudGFscztcblxuICAgICAgICAoX25vdGUkZ2V0QWNjaWRlbnRhbHMgPSBub3RlLmdldEFjY2lkZW50YWxzKCkpID09PSBudWxsIHx8IF9ub3RlJGdldEFjY2lkZW50YWxzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbm90ZSRnZXRBY2NpZGVudGFscy5mb3JFYWNoKGZ1bmN0aW9uIChhY2NpZGVudGFsKSB7XG4gICAgICAgICAgaWYgKGFjY2lkZW50YWwuaW5kZXggPT09IGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoYWNjaWRlbnRhbC50eXBlID09PSAnbicpIHtcbiAgICAgICAgICAgICAgYWNjaWRlbnRhbHMgPSAnJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGFjY2lkZW50YWxzICs9IGFjY2lkZW50YWwudHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGl0Y2hQYXJ0c1swXVswXSArIGFjY2lkZW50YWxzICsgcGl0Y2hQYXJ0c1sxXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgVmV4RmxvdyBkdXJhdGlvbiBzeW50YXggdG8gTWlkaVdyaXRlckpTIHN5bnRheFxuICAgICAqIEBwYXJhbSBub3RlIHN0cnVjdCBmcm9tIFZleEZsb3dcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNvbnZlcnREdXJhdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb252ZXJ0RHVyYXRpb24obm90ZSkge1xuICAgICAgcmV0dXJuICdkJy5yZXBlYXQobm90ZS5kb3RzKSArIHRoaXMuY29udmVydEJhc2VEdXJhdGlvbihub3RlLmR1cmF0aW9uKSArIChub3RlLnR1cGxldCA/ICd0JyArIG5vdGUudHVwbGV0Lm51bV9ub3RlcyA6ICcnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgVmV4RmxvdyBiYXNlIGR1cmF0aW9uIHN5bnRheCB0byBNaWRpV3JpdGVySlMgc3ludGF4XG4gICAgICogQHBhcmFtIGR1cmF0aW9uIFZleGZsb3cgZHVyYXRpb25cbiAgICAgKiBAcmV0dXJucyBNaWRpV3JpdGVySlMgZHVyYXRpb25cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNvbnZlcnRCYXNlRHVyYXRpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29udmVydEJhc2VEdXJhdGlvbihkdXJhdGlvbikge1xuICAgICAgc3dpdGNoIChkdXJhdGlvbikge1xuICAgICAgICBjYXNlICd3JzpcbiAgICAgICAgICByZXR1cm4gJzEnO1xuXG4gICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICAgIHJldHVybiAnMic7XG5cbiAgICAgICAgY2FzZSAncSc6XG4gICAgICAgICAgcmV0dXJuICc0JztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBkdXJhdGlvbjtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVmV4Rmxvdztcbn0oKTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSBoZWFkZXIgY2h1bmsgc2VjdGlvbiBvZiBhIE1JREkgZmlsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXJPZlRyYWNrcyAtIE51bWJlciBvZiB0cmFja3NcbiAqIEByZXR1cm4ge0hlYWRlckNodW5rfVxuICovXG5cbnZhciBIZWFkZXJDaHVuayA9IGZ1bmN0aW9uIEhlYWRlckNodW5rKG51bWJlck9mVHJhY2tzKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIZWFkZXJDaHVuayk7XG5cbiAgdGhpcy50eXBlID0gQ29uc3RhbnRzLkhFQURFUl9DSFVOS19UWVBFO1xuICB2YXIgdHJhY2tUeXBlID0gbnVtYmVyT2ZUcmFja3MgPiAxID8gQ29uc3RhbnRzLkhFQURFUl9DSFVOS19GT1JNQVQxIDogQ29uc3RhbnRzLkhFQURFUl9DSFVOS19GT1JNQVQwO1xuICB0aGlzLmRhdGEgPSB0cmFja1R5cGUuY29uY2F0KFV0aWxzLm51bWJlclRvQnl0ZXMobnVtYmVyT2ZUcmFja3MsIDIpLCAvLyB0d28gYnl0ZXMgbG9uZyxcbiAgQ29uc3RhbnRzLkhFQURFUl9DSFVOS19ESVZJU0lPTik7XG4gIHRoaXMuc2l6ZSA9IFswLCAwLCAwLCB0aGlzLmRhdGEubGVuZ3RoXTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHRoYXQgcHV0cyB0b2dldGhlciB0cmFja3MgYW5kIHByb3ZpZGVzIG1ldGhvZHMgZm9yIGZpbGUgb3V0cHV0LlxuICogQHBhcmFtIHthcnJheXxUcmFja30gdHJhY2tzIC0gQSBzaW5nbGUge1RyYWNrfSBvYmplY3Qgb3IgYW4gYXJyYXkgb2Yge1RyYWNrfSBvYmplY3RzLlxuICogQHJldHVybiB7V3JpdGVyfVxuICovXG5cbnZhciBXcml0ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBXcml0ZXIodHJhY2tzKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBXcml0ZXIpO1xuXG4gICAgLy8gRW5zdXJlIHRyYWNrIGlzIGFuIGFycmF5XG4gICAgdHJhY2tzID0gVXRpbHMudG9BcnJheSh0cmFja3MpO1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIHRoaXMuZGF0YS5wdXNoKG5ldyBIZWFkZXJDaHVuayh0cmFja3MubGVuZ3RoKSk7IC8vIEZvciBlYWNoIHRyYWNrIGFkZCBmaW5hbCBlbmQgb2YgdHJhY2sgZXZlbnQgYW5kIGJ1aWxkIGRhdGFcblxuICAgIHRyYWNrcy5mb3JFYWNoKGZ1bmN0aW9uICh0cmFjaywgaSkge1xuICAgICAgX3RoaXMuZGF0YS5wdXNoKHRyYWNrLmJ1aWxkRGF0YSgpKTtcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogQnVpbGRzIHRoZSBmaWxlIGludG8gYSBVaW50OEFycmF5XG4gICAqIEByZXR1cm4ge1VpbnQ4QXJyYXl9XG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKFdyaXRlciwgW3tcbiAgICBrZXk6IFwiYnVpbGRGaWxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJ1aWxkRmlsZSgpIHtcbiAgICAgIHZhciBidWlsZCA9IFtdOyAvLyBEYXRhIGNvbnNpc3RzIG9mIGNodW5rcyB3aGljaCBjb25zaXN0cyBvZiBkYXRhXG5cbiAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBidWlsZCA9IGJ1aWxkLmNvbmNhdChkLnR5cGUsIGQuc2l6ZSwgZC5kYXRhKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGJ1aWxkKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVydCBmaWxlIGJ1ZmZlciB0byBhIGJhc2U2NCBzdHJpbmcuICBEaWZmZXJlbnQgbWV0aG9kcyBkZXBlbmRpbmcgb24gaWYgYnJvd3NlciBvciBub2RlLlxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImJhc2U2NFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBiYXNlNjQoKSB7XG4gICAgICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHJldHVybiBidG9hKFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgdGhpcy5idWlsZEZpbGUoKSkpO1xuICAgICAgcmV0dXJuIEJ1ZmZlci5mcm9tKHRoaXMuYnVpbGRGaWxlKCkpLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBkYXRhIFVSSS5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkYXRhVXJpXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRhdGFVcmkoKSB7XG4gICAgICByZXR1cm4gJ2RhdGE6YXVkaW8vbWlkaTtiYXNlNjQsJyArIHRoaXMuYmFzZTY0KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE91dHB1dCB0byBzdGRvdXRcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzdGRvdXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3Rkb3V0KCkge1xuICAgICAgcmV0dXJuIHByb2Nlc3Muc3Rkb3V0LndyaXRlKG5ldyBCdWZmZXIodGhpcy5idWlsZEZpbGUoKSkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBXcml0ZXI7XG59KCk7XG5cbnZhciBtYWluID0ge1xuICBDb25zdGFudHM6IENvbnN0YW50cyxcbiAgTm90ZU9uRXZlbnQ6IE5vdGVPbkV2ZW50LFxuICBOb3RlT2ZmRXZlbnQ6IE5vdGVPZmZFdmVudCxcbiAgTm90ZUV2ZW50OiBOb3RlRXZlbnQsXG4gIFBpdGNoQmVuZEV2ZW50OiBQaXRjaEJlbmRFdmVudCxcbiAgUHJvZ3JhbUNoYW5nZUV2ZW50OiBQcm9ncmFtQ2hhbmdlRXZlbnQsXG4gIFRyYWNrOiBUcmFjayxcbiAgVXRpbHM6IFV0aWxzLFxuICBWZXhGbG93OiBWZXhGbG93LFxuICBXcml0ZXI6IFdyaXRlclxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtYWluO1xuIiwgImltcG9ydCB7IFV0aWxzIH0gZnJvbSAnbWlkaS13cml0ZXItanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICB0aGlzLmJlYXRzID0gW107XG4gICAgdGhpcy5iYXJzID0gODtcbiAgICB0aGlzLmJwbSA9IDEyNztcbiAgICB0aGlzLmZyYXEgPSAxIC8gdGhpcy5iYXJzO1xuICAgIHRoaXMudHJhY2tOb2RlcyA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLnRyYWNrU3RhdGUgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy5kZWxheURpdmlzaW9uID0gMyAvIDg7XG4gICAgdGhpcy5vbkJlYXQgPSBudWxsO1xuICAgIHRoaXMuaW5pdEF1ZGlvKCk7XG4gIH1cblxuICBpbml0QXVkaW8oKSB7XG4gICAgY29uc3QgQXVkaW9Db250ZXh0RnVuYyA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dDtcblxuICAgIHRoaXMuYXVkaW9Db250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dEZ1bmMoKTtcbiAgICB0aGlzLmRlc3RpbmF0aW9uID0gdGhpcy5hdWRpb0NvbnRleHQuZGVzdGluYXRpb247XG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgV2ViQXVkaW9Gb250UGxheWVyKCk7XG4gICAgdGhpcy5lcXVhbGl6ZXIgPSB0aGlzLnBsYXllci5jcmVhdGVDaGFubmVsKHRoaXMuYXVkaW9Db250ZXh0KTtcbiAgICB0aGlzLm1hc3RlckdhaW4gPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgdGhpcy5lY2hvID0gdGhpcy5wbGF5ZXIuY3JlYXRlUmV2ZXJiZXJhdG9yKHRoaXMuYXVkaW9Db250ZXh0KTtcbiAgICB0aGlzLmRlbGF5SW5wdXQgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgdGhpcy5kZWxheSA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZURlbGF5KDQpO1xuICAgIHRoaXMuZGVsYXlGZWVkYmFjayA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgICB0aGlzLmRlbGF5V2V0ID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpO1xuXG4gICAgdGhpcy5tYXN0ZXJHYWluLmdhaW4udmFsdWUgPSAxO1xuICAgIHRoaXMuZGVsYXlGZWVkYmFjay5nYWluLnZhbHVlID0gMC4zNTtcbiAgICB0aGlzLmRlbGF5V2V0LmdhaW4udmFsdWUgPSAxO1xuICAgIHRoaXMuZGVsYXlJbnB1dC5nYWluLnZhbHVlID0gMTtcblxuICAgIHRoaXMuZXF1YWxpemVyLm91dHB1dC5jb25uZWN0KHRoaXMubWFzdGVyR2Fpbik7XG4gICAgdGhpcy5lY2hvLm91dHB1dC5jb25uZWN0KHRoaXMubWFzdGVyR2Fpbik7XG5cbiAgICB0aGlzLmRlbGF5SW5wdXQuY29ubmVjdCh0aGlzLmRlbGF5KTtcbiAgICB0aGlzLmRlbGF5LmNvbm5lY3QodGhpcy5kZWxheUZlZWRiYWNrKTtcbiAgICB0aGlzLmRlbGF5RmVlZGJhY2suY29ubmVjdCh0aGlzLmRlbGF5KTtcbiAgICB0aGlzLmRlbGF5LmNvbm5lY3QodGhpcy5kZWxheVdldCk7XG4gICAgdGhpcy5kZWxheVdldC5jb25uZWN0KHRoaXMubWFzdGVyR2Fpbik7XG5cbiAgICB0aGlzLm1hc3RlckdhaW4uY29ubmVjdCh0aGlzLmRlc3RpbmF0aW9uKTtcbiAgICB0aGlzLnVwZGF0ZURlbGF5VGltZSgpO1xuICB9XG5cbiAgcGl0Y2godmFsdWUpIHtcbiAgICByZXR1cm4gVXRpbHMuZ2V0UGl0Y2godmFsdWUpICsgdGhpcy5vZmZzZXQ7XG4gIH1cblxuICBwcmVsb2FkKGRhdGEpIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhIHx8IHRoaXMuZGF0YTtcblxuICAgIGxldCBjb3VudCA9IDA7XG4gICAgdGhpcy5kYXRhLmZvckVhY2godHJhY2sgPT4ge1xuICAgICAgaWYgKHRyYWNrWzJdLmxlbmd0aCA+IGNvdW50KSBjb3VudCA9IHRyYWNrWzJdLmxlbmd0aDtcblxuICAgICAgY29uc3QgaW5mbyA9IHRyYWNrWzBdID49IDIwMDBcbiAgICAgICAgPyB0aGlzLnBsYXllci5sb2FkZXIuZHJ1bUluZm8odHJhY2tbMF0gLSAyMDAwKVxuICAgICAgICA6IHRoaXMucGxheWVyLmxvYWRlci5pbnN0cnVtZW50SW5mbyh0cmFja1swXSk7XG5cbiAgICAgIHRoaXMuY2FjaGVJbnN0cnVtZW50KGluZm8pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZHVyYXRpb24gPSBVdGlscy5nZXRUaWNrRHVyYXRpb24oJzMyJykgLyAyNTY7XG4gICAgY29uc3QgbmV4dEtleXMgPSBuZXcgU2V0KCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGJlYXQgPSBuZXcgTWFwKCk7XG5cbiAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKHRyYWNrID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gYCR7dHJhY2tbMF19LyR7dHJhY2tbMV19YDtcbiAgICAgICAgbmV4dEtleXMuYWRkKGtleSk7XG4gICAgICAgIGlmICghYmVhdC5oYXMoa2V5KSkgYmVhdC5zZXQoa2V5LCB7IGRydW1zOiBbXSwgbm90ZXM6IFtdIH0pO1xuICAgICAgICBjb25zdCBzbG90ID0gYmVhdC5nZXQoa2V5KTtcbiAgICAgICAgY29uc3QgdGljayA9IHRyYWNrWzJdW2ldIHx8IHt9O1xuXG4gICAgICAgIGlmICh0cmFja1swXSA+PSAyMDAwKSB7XG4gICAgICAgICAgc2xvdC5kcnVtcy5wdXNoKFt0cmFja1swXSAtIDIwMDAsIHRpY2sudl0pO1xuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodGljay5uKSkge1xuICAgICAgICAgIHRpY2subi5mb3JFYWNoKHRvbmUgPT4ge1xuICAgICAgICAgICAgc2xvdC5ub3Rlcy5wdXNoKFt0cmFja1swXSwgdGhpcy5waXRjaCh0b25lKSwgZHVyYXRpb24sIHRpY2sudl0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRpY2subikge1xuICAgICAgICAgIHNsb3Qubm90ZXMucHVzaChbdHJhY2tbMF0sIHRoaXMucGl0Y2godGljay5uKSwgZHVyYXRpb24sIHRpY2sudl0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5iZWF0c1tpXSA9IGJlYXQ7XG4gICAgfVxuXG4gICAgdGhpcy50cmFja05vZGVzLmZvckVhY2goKG5vZGVzLCBrZXkpID0+IHtcbiAgICAgIGlmICghbmV4dEtleXMuaGFzKGtleSkpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBub2Rlcy5kcnkuZGlzY29ubmVjdCgpO1xuICAgICAgICAgIG5vZGVzLnJldmVyYlNlbmQuZGlzY29ubmVjdCgpO1xuICAgICAgICAgIG5vZGVzLmRlbGF5U2VuZC5kaXNjb25uZWN0KCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpZ25vcmVcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyYWNrTm9kZXMuZGVsZXRlKGtleSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBuZXh0S2V5cy5mb3JFYWNoKGtleSA9PiB0aGlzLmdldFRyYWNrTm9kZXMoa2V5KSk7XG4gIH1cblxuICBjb250ZXh0VGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hdWRpb0NvbnRleHQuY3VycmVudFRpbWU7XG4gIH1cblxuICBwbGF5TG9vcE1hY2hpbmUoZnJvbUJlYXQpIHtcbiAgICB0aGlzLnN0YXJ0UGxheUxvb3AodGhpcy5iZWF0cywgdGhpcy5icG0sIHRoaXMuZnJhcSwgZnJvbUJlYXQpO1xuICB9XG5cbiAgc3RvcExvb3BNYWNoaW5lKCkge1xuICAgIHRoaXMuc3RvcFBsYXlMb29wKCk7XG4gIH1cblxuICBzZXRMb29wTWFjaGluZShkYXRhLCB0ZW1wbywgbGVuZ3RoLCB0cmFuc3Bvc2UpIHtcbiAgICBjb25zdCBjaGFuZ2VkID0gdGVtcG8gIT09IHRoaXMuYnBtXG4gICAgICB8fCBsZW5ndGggIT09IHRoaXMuYmFyc1xuICAgICAgfHwgdHJhbnNwb3NlICE9PSB0aGlzLm9mZnNldDtcblxuICAgIGlmIChjaGFuZ2VkKSB0aGlzLnN0b3BQbGF5TG9vcCgpO1xuXG4gICAgdGhpcy5iZWF0cy5sZW5ndGggPSAwO1xuICAgIHRoaXMuYnBtID0gdGVtcG8gfHwgMTI3O1xuICAgIHRoaXMuYmFycyA9IGxlbmd0aCB8fCAxNjtcbiAgICB0aGlzLm9mZnNldCA9IHRyYW5zcG9zZSB8fCAwO1xuICAgIHRoaXMudXBkYXRlRGVsYXlUaW1lKCk7XG4gICAgdGhpcy5wcmVsb2FkKGRhdGEpO1xuICAgIHRoaXMuZnJhcSA9IDEgLyB0aGlzLmJhcnM7XG5cbiAgICByZXR1cm4gY2hhbmdlZDtcbiAgfVxuXG4gIHN0YXJ0UGxheUxvb3AoYmVhdHMsIGJwbSwgZGVuc2l0eSwgZnJvbUJlYXQpIHtcbiAgICB0aGlzLmxvb3BTdGFydGVkID0gdHJ1ZTtcblxuICAgIGNvbnN0IHdob2xlTm90ZUR1cmF0aW9uID0gKDQgKiA2MCkgLyBicG07XG5cbiAgICB0aGlzLmJlYXRJbmRleCA9IGZyb21CZWF0IDwgYmVhdHMubGVuZ3RoID8gZnJvbUJlYXQgOiAwO1xuICAgIHRoaXMucGxheUJlYXRBdCh0aGlzLmNvbnRleHRUaW1lKCksIGJlYXRzW3RoaXMuYmVhdEluZGV4XSwgYnBtKTtcblxuICAgIGxldCBuZXh0TG9vcFRpbWUgPSB0aGlzLmNvbnRleHRUaW1lKCkgKyBkZW5zaXR5ICogd2hvbGVOb3RlRHVyYXRpb247XG4gICAgdGhpcy5sb29wSW50ZXJ2YWxJRCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmNvbnRleHRUaW1lKCkgPiBuZXh0TG9vcFRpbWUgLSBkZW5zaXR5ICogd2hvbGVOb3RlRHVyYXRpb24pIHtcbiAgICAgICAgdGhpcy5iZWF0SW5kZXggKz0gMTtcbiAgICAgICAgaWYgKHRoaXMuYmVhdEluZGV4ID49IGJlYXRzLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuYmVhdEluZGV4ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGxheUJlYXRBdChuZXh0TG9vcFRpbWUsIGJlYXRzW3RoaXMuYmVhdEluZGV4XSwgYnBtKTtcbiAgICAgICAgbmV4dExvb3BUaW1lICs9IGRlbnNpdHkgKiB3aG9sZU5vdGVEdXJhdGlvbjtcbiAgICAgIH1cbiAgICB9LCAyMik7XG4gIH1cblxuICBzdG9wUGxheUxvb3AoKSB7XG4gICAgdGhpcy5sb29wU3RhcnRlZCA9IGZhbHNlO1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5sb29wSW50ZXJ2YWxJRCk7XG4gICAgdGhpcy5jYW5jZWxRdWV1ZSgpO1xuICB9XG5cbiAgZ2V0VHJhY2tTdGF0ZShrZXkpIHtcbiAgICBpZiAoIXRoaXMudHJhY2tTdGF0ZS5oYXMoa2V5KSkge1xuICAgICAgdGhpcy50cmFja1N0YXRlLnNldChrZXksIHtcbiAgICAgICAgbXV0ZWQ6IGZhbHNlLFxuICAgICAgICBzb2xvOiBmYWxzZSxcbiAgICAgICAgdm9sdW1lOiAxLFxuICAgICAgICByZXZlcmJTZW5kOiAwLFxuICAgICAgICBkZWxheVNlbmQ6IDAsXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudHJhY2tTdGF0ZS5nZXQoa2V5KTtcbiAgfVxuXG4gIGFwcGx5VHJhY2tTdGF0ZShrZXkpIHtcbiAgICBjb25zdCBub2RlcyA9IHRoaXMuZ2V0VHJhY2tOb2RlcyhrZXkpO1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRUcmFja1N0YXRlKGtleSk7XG4gICAgbm9kZXMuc3RhdGUgPSBzdGF0ZTtcbiAgICBub2Rlcy5kcnkuZ2Fpbi52YWx1ZSA9IHN0YXRlLm11dGVkID8gMCA6IHN0YXRlLnZvbHVtZTtcbiAgICBub2Rlcy5yZXZlcmJTZW5kLmdhaW4udmFsdWUgPSBzdGF0ZS5yZXZlcmJTZW5kO1xuICAgIG5vZGVzLmRlbGF5U2VuZC5nYWluLnZhbHVlID0gc3RhdGUuZGVsYXlTZW5kO1xuICB9XG5cbiAgZ2V0VHJhY2tOb2RlcyhrZXkpIHtcbiAgICBpZiAodGhpcy50cmFja05vZGVzLmhhcyhrZXkpKSB7XG4gICAgICByZXR1cm4gdGhpcy50cmFja05vZGVzLmdldChrZXkpO1xuICAgIH1cblxuICAgIGNvbnN0IGRyeSA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgICBjb25zdCByZXZlcmJTZW5kID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgIGNvbnN0IGRlbGF5U2VuZCA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKTtcblxuICAgIGRyeS5nYWluLnZhbHVlID0gMTtcbiAgICByZXZlcmJTZW5kLmdhaW4udmFsdWUgPSAwO1xuICAgIGRlbGF5U2VuZC5nYWluLnZhbHVlID0gMDtcblxuICAgIGRyeS5jb25uZWN0KHRoaXMuZXF1YWxpemVyLmlucHV0KTtcbiAgICByZXZlcmJTZW5kLmNvbm5lY3QodGhpcy5lY2hvLmlucHV0KTtcbiAgICBkZWxheVNlbmQuY29ubmVjdCh0aGlzLmRlbGF5SW5wdXQpO1xuXG4gICAgY29uc3Qgbm9kZXMgPSB7IGRyeSwgcmV2ZXJiU2VuZCwgZGVsYXlTZW5kIH07XG4gICAgdGhpcy50cmFja05vZGVzLnNldChrZXksIG5vZGVzKTtcbiAgICB0aGlzLmFwcGx5VHJhY2tTdGF0ZShrZXkpO1xuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHNldE11dGUoa2V5LCB2YWx1ZSkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRUcmFja1N0YXRlKGtleSk7XG4gICAgc3RhdGUubXV0ZWQgPSBCb29sZWFuKHZhbHVlKTtcbiAgICB0aGlzLmFwcGx5VHJhY2tTdGF0ZShrZXkpO1xuICB9XG5cbiAgc2V0U29sbyhrZXksIHZhbHVlKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFRyYWNrU3RhdGUoa2V5KTtcbiAgICBzdGF0ZS5zb2xvID0gQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBzZXRWb2x1bWUoa2V5LCB2YWx1ZSkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRUcmFja1N0YXRlKGtleSk7XG4gICAgc3RhdGUudm9sdW1lID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdmFsdWUpKTtcbiAgICB0aGlzLmFwcGx5VHJhY2tTdGF0ZShrZXkpO1xuICB9XG5cbiAgc2V0UmV2ZXJiU2VuZChrZXksIHZhbHVlKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFRyYWNrU3RhdGUoa2V5KTtcbiAgICBzdGF0ZS5yZXZlcmJTZW5kID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdmFsdWUpKTtcbiAgICB0aGlzLmFwcGx5VHJhY2tTdGF0ZShrZXkpO1xuICB9XG5cbiAgc2V0RGVsYXlTZW5kKGtleSwgdmFsdWUpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0VHJhY2tTdGF0ZShrZXkpO1xuICAgIHN0YXRlLmRlbGF5U2VuZCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHZhbHVlKSk7XG4gICAgdGhpcy5hcHBseVRyYWNrU3RhdGUoa2V5KTtcbiAgfVxuXG4gIHNldERlbGF5RmVlZGJhY2sodmFsdWUpIHtcbiAgICB0aGlzLmRlbGF5RmVlZGJhY2suZ2Fpbi52YWx1ZSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDAuNzUsIHZhbHVlKSk7XG4gIH1cblxuICBzZXREZWxheVRpbWUodmFsdWUpIHtcbiAgICB0aGlzLmRlbGF5RGl2aXNpb24gPSBNYXRoLm1heCgwLjEyNSwgTWF0aC5taW4oMC43NSwgdmFsdWUpKTtcbiAgICB0aGlzLnVwZGF0ZURlbGF5VGltZSgpO1xuICB9XG5cbiAgdXBkYXRlRGVsYXlUaW1lKCkge1xuICAgIGNvbnN0IHdob2xlID0gKDQgKiA2MCkgLyAodGhpcy5icG0gfHwgMTI3KTtcbiAgICB0aGlzLmRlbGF5LmRlbGF5VGltZS52YWx1ZSA9IHdob2xlICogdGhpcy5kZWxheURpdmlzaW9uO1xuICB9XG5cbiAgZ2V0VHJhY2tLZXlzKCkge1xuICAgIHJldHVybiBbLi4udGhpcy50cmFja05vZGVzLmtleXMoKV07XG4gIH1cblxuICBjYW5jZWxRdWV1ZSgpIHtcbiAgICB0aGlzLnBsYXllci5jYW5jZWxRdWV1ZSh0aGlzLmF1ZGlvQ29udGV4dCk7XG4gIH1cblxuICBjYWNoZUluc3RydW1lbnQoaW5mbykge1xuICAgIGlmIChpbmZvICYmICF3aW5kb3dbaW5mby52YXJpYWJsZV0pIHtcbiAgICAgIGlmICh3aW5kb3dbaW5mby52YXJpYWJsZSArIDEyN10pIHJldHVybjtcbiAgICAgIHdpbmRvd1tpbmZvLnZhcmlhYmxlICsgMTI3XSA9IHRydWU7XG4gICAgICB0aGlzLnBsYXllci5sb2FkZXIuc3RhcnRMb2FkKHRoaXMuYXVkaW9Db250ZXh0LCBpbmZvLnVybCwgaW5mby52YXJpYWJsZSk7XG4gICAgICB0aGlzLnBsYXllci5sb2FkZXIud2FpdExvYWQoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnY2FjaGVkJywgaW5mby50aXRsZSk7XG4gICAgICAgIGRlbGV0ZSB3aW5kb3dbaW5mby52YXJpYWJsZSArIDEyN107XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwbGF5RHJ1bSh3aGVuLCBkcnVtLCBub2Rlcykge1xuICAgIGNvbnN0IFtpbnN0cnVtZW50LCBsZXZlbF0gPSBkcnVtO1xuICAgIGNvbnN0IGluZm8gPSB0aGlzLnBsYXllci5sb2FkZXIuZHJ1bUluZm8oaW5zdHJ1bWVudCk7XG5cbiAgICBpZiAod2luZG93W2luZm8udmFyaWFibGVdKSB7XG4gICAgICBjb25zdCBwaXRjaCA9IHdpbmRvd1tpbmZvLnZhcmlhYmxlXS56b25lc1swXS5rZXlSYW5nZUxvdztcbiAgICAgIGNvbnN0IGdhaW4gPSAoMSAvIDEyNykgKiBsZXZlbDtcbiAgICAgIGlmIChsZXZlbCA+IDApIHRoaXMucXVldWVUb1RyYWNrTm9kZXMod2luZG93W2luZm8udmFyaWFibGVdLCB3aGVuLCBwaXRjaCwgMSAvIDY0LCBnYWluLCBub2Rlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2FjaGVJbnN0cnVtZW50KGluZm8pO1xuICAgIH1cbiAgfVxuXG4gIHF1ZXVlVG9UcmFja05vZGVzKGZvbnQsIHdoZW4sIHBpdGNoLCBkdXJhdGlvbiwgZ2Fpbiwgbm9kZXMpIHtcbiAgICB0aGlzLnBsYXllci5xdWV1ZVdhdmVUYWJsZSh0aGlzLmF1ZGlvQ29udGV4dCwgbm9kZXMuZHJ5LCBmb250LCB3aGVuLCBwaXRjaCwgZHVyYXRpb24sIGdhaW4pO1xuICAgIGlmIChub2Rlcy5yZXZlcmJTZW5kLmdhaW4udmFsdWUgPiAwKSB7XG4gICAgICB0aGlzLnBsYXllci5xdWV1ZVdhdmVUYWJsZSh0aGlzLmF1ZGlvQ29udGV4dCwgbm9kZXMucmV2ZXJiU2VuZCwgZm9udCwgd2hlbiwgcGl0Y2gsIGR1cmF0aW9uLCBnYWluKTtcbiAgICB9XG4gICAgaWYgKG5vZGVzLmRlbGF5U2VuZC5nYWluLnZhbHVlID4gMCkge1xuICAgICAgdGhpcy5wbGF5ZXIucXVldWVXYXZlVGFibGUodGhpcy5hdWRpb0NvbnRleHQsIG5vZGVzLmRlbGF5U2VuZCwgZm9udCwgd2hlbiwgcGl0Y2gsIGR1cmF0aW9uLCBnYWluKTtcbiAgICB9XG4gIH1cblxuICBwbGF5QmVhdEF0KHdoZW4sIGJlYXQsIGJwbSkge1xuICAgIGlmICghYmVhdCkgcmV0dXJuO1xuICAgIGNvbnN0IE4gPSAoNCAqIDYwKSAvIGJwbTtcbiAgICBjb25zdCBoYXNTb2xvID0gWy4uLnRoaXMudHJhY2tTdGF0ZS52YWx1ZXMoKV0uc29tZShpdGVtID0+IGl0ZW0uc29sbyk7XG5cbiAgICBiZWF0LmZvckVhY2goKHNsb3QsIGtleSkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFRyYWNrU3RhdGUoa2V5KTtcbiAgICAgIGlmIChzdGF0ZS5tdXRlZCkgcmV0dXJuO1xuICAgICAgaWYgKGhhc1NvbG8gJiYgIXN0YXRlLnNvbG8pIHJldHVybjtcblxuICAgICAgY29uc3Qgbm9kZXMgPSB0aGlzLmdldFRyYWNrTm9kZXMoa2V5KTtcbiAgICAgIGxldCB0b3VjaGVkID0gZmFsc2U7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xvdC5kcnVtcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB0aGlzLnBsYXlEcnVtKHdoZW4sIHNsb3QuZHJ1bXNbaV0sIG5vZGVzKTtcbiAgICAgICAgdG91Y2hlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHNsb3Qubm90ZXMuZm9yRWFjaChub3RlID0+IHtcbiAgICAgICAgY29uc3QgW2luc3RydW1lbnQsIHBpdGNoZXMsIGR1cmF0aW9uLCBsZXZlbF0gPSBub3RlO1xuICAgICAgICBjb25zdCBpbmZvID0gdGhpcy5wbGF5ZXIubG9hZGVyLmluc3RydW1lbnRJbmZvKGluc3RydW1lbnQpO1xuICAgICAgICBpZiAod2luZG93W2luZm8udmFyaWFibGVdKSB7XG4gICAgICAgICAgdGhpcy5xdWV1ZVRvVHJhY2tOb2Rlcyh3aW5kb3dbaW5mby52YXJpYWJsZV0sIHdoZW4sIHBpdGNoZXMsIGR1cmF0aW9uICogTiwgKDEgLyAxMjcpICogbGV2ZWwsIG5vZGVzKTtcbiAgICAgICAgICB0b3VjaGVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNhY2hlSW5zdHJ1bWVudChpbmZvKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0b3VjaGVkICYmIHR5cGVvZiB0aGlzLm9uQmVhdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLm9uQmVhdChrZXksIHdoZW4pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCAiLyoqXG4gKiBUYWtlIGEgc3RyaW5nIGlucHV0IGFuZCBjaGVjayBpZiBpdCBzIGEgbm90ZSBuYW1lIG9yIG5vdFxuICogQHBhcmFtICB7U3RyaW5nfSBzdHIgTm90ZSBuYW1lIGUuZy4gYzRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IFJldHVybiB0cnVlIGZvciBjNCBvciByZXR1cm4gZmFsc2UgZm9yIHNvbWV0aGluZyBsaWtlIENNXG4gKi9cbmV4cG9ydCBjb25zdCBpc05vdGUgPSAoc3RyOiBzdHJpbmcpOiBib29sZWFuID0+XG4gIC9eW2EtZ0EtR10oPzojfGIpP1xcZCQvLnRlc3Qoc3RyKTtcblxuLyoqXG4gKiBUYWtlIGEgU3RyaW5nIGlucHV0IHN1Y2ggYXMgeHh4W3h4W3h4XV1cbiAqIGFuZCByZXR1cm4gYW4gQXJyYXkgYXMgWyd4JywgJ3gnLCAneCcsIFsneCcsICd4JywgWyd4JywgJ3gnXV1dXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbmV4cG9ydCBjb25zdCBleHBhbmRTdHIgPSAoc3RyOiBzdHJpbmcpOiBhbnkgPT4ge1xuICBzdHIgPSBKU09OLnN0cmluZ2lmeShzdHIuc3BsaXQoJycpKTtcbiAgc3RyID0gc3RyLnJlcGxhY2UoLyxcIlxcW1wiLC9nLCAnLCBbJyk7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKC9cIlxcW1wiLC9nLCAnWycpO1xuICBzdHIgPSBzdHIucmVwbGFjZSgvLFwiXFxdXCIvZywgJ10nKTtcbiAgcmV0dXJuIEpTT04ucGFyc2Uoc3RyKTtcbn07XG5cbi8qKlxuICogQmFzaWMgQXJyYXkgcmFuZG9taXplclxuICogQHBhcmFtICB7QXJyYXl9IGFyclxuICogQHBhcmFtICB7Ym9vbGVhbn0gZnVsbFNodWZmbGUgRW5zdXJlIG5vIGVsZW1lbnRzIHJlbWFpbiBpbiBvbGQgcGxhY2VcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5leHBvcnQgY29uc3Qgc2h1ZmZsZSA9IChhcnI6IGFueVtdLCBmdWxsU2h1ZmZsZTogYm9vbGVhbiA9IHRydWUpOiBzdHJpbmdbXSA9PiB7XG4gIGNvbnN0IGxhc3RJbmRleDogbnVtYmVyID0gYXJyLmxlbmd0aCAtIDE7XG5cbiAgLy8gU2h1ZmZsZSBhbGdvcml0aG0gYnkgUmljaGFyZCBEdXJzdGVuZmVsZCAoRG9uYWxkIEUuIEtudXRoKSwgYWxzbyBSb25hbGQgRmlzaGVyIGFuZCBGcmFuayBZYXRlcy5cbiAgLy8gXCJGdWxsIFNodWZmbGVcIiBNb2RpZmljYXRpb24gdG8gZW5zdXJlIG5vIGVsZW1lbnRzIHJlbWFpbiBpbiB0aGVpciBvcmlnaW5hbCBwbGFjZSAoYnkgdGFraW5nIGVhY2ggZWxlbWVudCBvbmNlXG4gIC8vIGFuZCBzd2FwcGluZyB3aXRoIGFueSByZW1haW5pbmcgZWxlbWVudHMpXG4gIGFyci5mb3JFYWNoKChlbCwgaWR4OiBudW1iZXIpID0+IHtcbiAgICBpZiAoaWR4ID49IGxhc3RJbmRleCkge1xuICAgICAgLy8gTm8gc2h1ZmZsaW5nIGxhc3QgZWxlbWVudFxuICAgICAgLy8gT25lIGJlZm9yZSBsYXN0IGlzIGFsd2F5cyBzd2FwcGVkIHdpdGggbGFzdCBhdCB0aGUgZW5kIG9mIHRoZSBsb29wXG4gICAgICAvLyBTaW5jZSBwcmV2aW91cyBzd2FwcyBjYW4gbW92ZSBsYXN0IGVsZW1lbnQgaW50byBvdGhlciBwbGFjZXMsIHRoZXJlIGlzIHN0aWxsIGEgcmFuZG9tIHNodWZmbGUgb2YgbGFzdCBlbGVtZW50XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFN3YXAgZWwgd2l0aCBvbmUgb2YgdGhlIGhpZ2hlciBlbGVtZW50cyByYW5kb21seVxuICAgIGxldCBybmQ7XG4gICAgcm5kID0gZnVsbFNodWZmbGVcbiAgICAgID8gLy8gUGljayByYW5kb20gbnVtYmVyIGZyb20gaWR4KzEgdG8gbGFzdEluZGV4IChNb2RpZmllZCBhbGdvcml0aG0sIChOLTEpISBjb21iaW5hdGlvbnMpXG4gICAgICAgIC8vIE1hdGgucmFuZG9tIC0+IFswLCAxKSAtPiBbMCwgbGFzdEluZGV4LWlkeCApIC0tZmxvb3ItPiBbMCwgbGFzdEluZGV4LWlkeC0xXVxuICAgICAgICAvLyBybmQgPSBbMCwgbGFzdEluZGV4LWlkeC0xXSArIDEgKyBpZHggPSBbMSArIGlkeCwgbGFzdEluZGV4XVxuICAgICAgICAvLyAoT3JpZ2luYWwgYWxnb3JpdGhtIHdvdWxkIHBpY2sgcm5kID0gW2lkeCwgbGFzdEluZGV4XSwgdGh1cyBhbnkgZWxlbWVudCBjb3VsZCBhcnJpdmUgYmFjayBpbnRvIGl0cyBzbG90KVxuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobGFzdEluZGV4IC0gaWR4KSkgKyAxICsgaWR4XG4gICAgICA6IC8vIFBpY2sgcmFuZG9tIG51bWJlciBmcm9tIGlkeCB0byBsYXN0SW5kZXggKFVubW9kaWZpZWQgUmljaGFyZCBEdXJzdGVuZmVsZCwgTiEgY29tYmluYXRpb25zKVxuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobGFzdEluZGV4ICsgMSAtIGlkeCkpICsgaWR4O1xuICAgIGFycltpZHhdID0gYXJyW3JuZF07XG4gICAgYXJyW3JuZF0gPSBlbDtcbiAgfSk7XG5cbiAgcmV0dXJuIGFycjtcbn07XG5cbi8qKlxuICogUmV0dXJuIGFuIGFycmF5IG9mIG51bWJlcnMgcmVsYXRpdmUgdG8gbWF4TGV2ZWwgfHwgMTI3IG9yZGVyZWQgaW4gYSBTaW5lIHdhdmUgZm9ybWF0XG4gKiBUaGlzIGlzIHVzZWQgYnkgdGhlIGBzaXp6bGVgIHBhcmFtIG9mIHRoZSBgY2xpcGAgbWV0aG9kIHRvIGFkZCBhIHJ1ZGltZW50YXJ5IHZhcmlhdGlvbiB0byB0aGUgYWNjZW50IG9mIGVhY2ggbm90ZVxuICogQHBhcmFtIHtOdW1iZXJ9IG1heExldmVsIEEgbnVtYmVyIGJldHdlZW4gbm90IG1vcmUgdGhhbiAxMjdcbiAqIEByZXR1cm4ge0FycmF5fSAgRXhhbXBsZSBvdXRwdXQgWzYzLCA5MCwgMTEwLCAxMjcsIDExMCwgOTAsIDYzLCAwLCA2MywgOTAsIDExMCwgMTI3LCAxMTAsIDkwLCA2MywgMF1cbiAqL1xuZXhwb3J0IGNvbnN0IHNpenpsZU1hcCA9IChtYXhMZXZlbDogbnVtYmVyID0gMTI3KTogbnVtYmVyW10gPT4ge1xuICBjb25zdCBwaSA9IE1hdGguUEk7XG4gIGNvbnN0IHBpQXJyOiBudW1iZXJbXSA9IFtcbiAgICBwaSAvIDYsXG4gICAgcGkgLyA0LFxuICAgIHBpIC8gMyxcbiAgICBwaSAvIDIsXG4gICAgKDIgKiBwaSkgLyAzLFxuICAgICgzICogcGkpIC8gNCxcbiAgICAoNSAqIHBpKSAvIDYsXG4gICAgcGksXG4gIF07XG4gIGNvbnN0IHBpQXJyUmV2OiBudW1iZXJbXSA9IFtcbiAgICAwLFxuICAgIHBpIC8gNixcbiAgICBwaSAvIDQsXG4gICAgcGkgLyAzLFxuICAgIHBpIC8gMixcbiAgICAoMiAqIHBpKSAvIDMsXG4gICAgKDMgKiBwaSkgLyA0LFxuICAgICg1ICogcGkpIC8gNixcbiAgXTtcbiAgcGlBcnJSZXYucmV2ZXJzZSgpO1xuICBjb25zdCBhcnI6IG51bWJlcltdID0gcGlBcnIuY29uY2F0KHBpQXJyUmV2KTtcbiAgcmV0dXJuIGFyci5tYXAoZWxlbWVudCA9PiBNYXRoLnJvdW5kKE1hdGguc2luKGVsZW1lbnQpICogbWF4TGV2ZWwpKTtcbn07XG5cbi8qKlxuICogUGljayBvbmUgaXRlbSByYW5kb21seSBmcm9tIGFuIGFycmF5IGFuZCByZXR1cm4gaXRcbiAqIEBwYXJhbSBhcnJcbiAqL1xuZXhwb3J0IGNvbnN0IHBpY2tPbmUgPSAoYXJyOiBhbnlbXSkgPT5cbiAgYXJyLmxlbmd0aCA+IDEgPyBhcnJbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV0gOiBhcnJbMF07XG5cbi8qKlxuICogQm9vbGVhbiBnZW5lcmF0b3JcbiAqL1xuZXhwb3J0IGNvbnN0IGRpY2UgPSAoKSA9PiAhIU1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG5cbi8qKlxuICogUG9seWZpbGwgZm9yIEFycmF5LnByb3RvdHlwZS5mbGF0XG4gKi9cbmV4cG9ydCBjb25zdCBmbGF0ID0gKGFycjogYW55W11bXSkgPT5cbiAgYXJyLnJlZHVjZSgoYWNjLCB2YWwpID0+IGFjYy5jb25jYXQodmFsKSwgW10pO1xuIiwgImltcG9ydCB7IHNjYWxlIH0gZnJvbSAnaGFybW9uaWNzJztcbmltcG9ydCB7IHBpY2tPbmUsIGRpY2UgfSBmcm9tICcuL3V0aWxzJztcblxuLyoqXG4gKiBHZXQgdGhlIGNob3JkcyB0aGF0IGdvIHdpdGggYSBnaXZlbiBzY2FsZS9tb2RlXG4gKiBUaGlzIGlzIHVzZWZ1bCBvbmx5IGluIGNhc2UgeW91IHdhbnQgdG8gY2hlY2sgd2hhdCBjaG9yZHMgd29yayB3aXRoIGEgc2NhbGUvbW9kZVxuICogc28gdGhhdCB5b3UgY2FuIGNvbWUgdXAgd2l0aCBjaG9yZCBwcm9ncmVzc2lvbnNcbiAqIEBwYXJhbSAge1N0cmluZ30gbW9kZSBlLmcuIG1ham9yXG4gKiBAcmV0dXJuIHtBcnJheX0gZS5nLlsnSScsICdpaScsICdpaWknLCAnSVYnLCAnVicsICd2aScsICd2aWlcdTAwQjAnXVxuICovXG5leHBvcnQgY29uc3QgZ2V0Q2hvcmREZWdyZWVzID0gKG1vZGU6IHN0cmluZykgPT4ge1xuICBjb25zdCB0aGVSb21hbnM6IE5WUDxzdHJpbmdbXT4gPSB7XG4gICAgaW9uaWFuOiBbJ0knLCAnaWknLCAnaWlpJywgJ0lWJywgJ1YnLCAndmknLCAndmlpXHUwMEIwJ10sXG4gICAgZG9yaWFuOiBbJ2knLCAnaWknLCAnSUlJJywgJ0lWJywgJ3YnLCAndmlcdTAwQjAnLCAnVklJJ10sXG4gICAgcGhyeWdpYW46IFsnaScsICdJSScsICdJSUknLCAnaXYnLCAndlx1MDBCMCcsICdWSScsICd2aWknXSxcbiAgICBseWRpYW46IFsnSScsICdJSScsICdpaWknLCAnaXZcdTAwQjAnLCAnVicsICd2aScsICd2aWknXSxcbiAgICBtaXhvbHlkaWFuOiBbJ0knLCAnaWknLCAnaWlpXHUwMEIwJywgJ0lWJywgJ3YnLCAndmknLCAnVklJJ10sXG4gICAgYWVvbGlhbjogWydpJywgJ2lpXHUwMEIwJywgJ0lJSScsICdpdicsICd2JywgJ1ZJJywgJ1ZJSSddLFxuICAgIGxvY3JpYW46IFsnaVx1MDBCMCcsICdJSScsICdpaWknLCAnaXYnLCAnVicsICdWSScsICd2aWknXSxcbiAgICAnbWVsb2RpYyBtaW5vcic6IFsnaScsICdpaScsICdJSUkrJywgJ0lWJywgJ1YnLCAndmlcdTAwQjAnLCAndmlpXHUwMEIwJ10sXG4gICAgJ2hhcm1vbmljIG1pbm9yJzogWydpJywgJ2lpXHUwMEIwJywgJ0lJSSsnLCAnaXYnLCAnVicsICdWSScsICd2aWlcdTAwQjAnXSxcbiAgfTtcbiAgdGhlUm9tYW5zLm1ham9yID0gdGhlUm9tYW5zLmlvbmlhbjtcbiAgdGhlUm9tYW5zLm1pbm9yID0gdGhlUm9tYW5zLmFlb2xpYW47XG5cbiAgcmV0dXJuIHRoZVJvbWFuc1ttb2RlXSB8fCBbXTtcbn07XG5cbmNvbnN0IGlkeEJ5RGVncmVlOiBOVlA8bnVtYmVyPiA9IHtcbiAgaTogMCxcbiAgaWk6IDEsXG4gIGlpaTogMixcbiAgaXY6IDMsXG4gIHY6IDQsXG4gIHZpOiA1LFxuICB2aWk6IDYsXG59O1xuXG4vKipcbiAqIEdldCBhIGNob3JkIG5hbWUgZnJvbSBkZWdyZWVcbiAqIEBwYXJhbSAge1N0cmluZ30gcm9tYW4gZS5nLiBpaSBPUiBpaVx1MDBCMCBPUiBWN1xuICogQHJldHVybiB7U3RyaW5nfSBlLmcuIG0gT1IgbTdiNSBPUiBNYWo3XG4gKi9cbmNvbnN0IGdldENob3JkTmFtZSA9IChyb21hbjogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgLy8gcmVtb3ZlIGFueSBub24gY2hhcmFjdGVyXG4gIGNvbnN0IHN0ciA9IHJvbWFuLnJlcGxhY2UoL1xcVy9nLCAnJyk7XG4gIGxldCBwcmVmaXggPSAnTSc7XG4gIC8vIGNoZWNrIGlmIGl0IHMgbG93ZXJjYXNlXG4gIGlmIChzdHIudG9Mb3dlckNhc2UoKSA9PT0gc3RyKSB7XG4gICAgcHJlZml4ID0gJ20nO1xuICB9XG4gIGlmIChyb21hbi5pbmRleE9mKCdcdTAwQjAnKSA+IC0xKSB7XG4gICAgcmV0dXJuIHByZWZpeCArICc3YjUnO1xuICB9XG4gIGlmIChyb21hbi5pbmRleE9mKCcrJykgPiAtMSkge1xuICAgIHJldHVybiBwcmVmaXggKyAnIzUnO1xuICB9XG5cbiAgaWYgKHJvbWFuLmluZGV4T2YoJzcnKSA+IC0xKSB7XG4gICAgcmV0dXJuIHByZWZpeCA9PT0gJ00nID8gJ21hajcnIDogJ203JztcbiAgfVxuXG4gIHJldHVybiBwcmVmaXg7XG59O1xuXG4vKipcbiAqIFRha2UgdGhlIHNwZWNpZmllZCBzY2FsZSBhbmQgZGVncmVlcyBhbmQgcmV0dXJuIHRoZSBjaG9yZCBuYW1lcyBmb3IgdGhlbVxuICogVGhlc2UgY2FuIGJlIHVzZWQgYXMgdGhlIHZhbHVlIGZvciB0aGUgYG5vdGVzYCBwYXJhbSBvZiB0aGUgYGNsaXBgIG1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IG5vdGVPY3RhdmVTY2FsZSBlLmcuICdDNCBtYWpvcidcbiAqIEBwYXJhbSAge1N0cmluZ30gY2hvcmREZWdyZXNzIGUuZy4gJ0kgSVYgViBJVidcbiAqIEByZXR1cm4ge1N0cmluZ30gZS5nLiAnQ00gRk0gR00gRk0nXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRDaG9yZHNCeVByb2dyZXNzaW9uID0gKFxuICBub3RlT2N0YXZlU2NhbGU6IHN0cmluZyxcbiAgY2hvcmREZWdyZXNzOiBzdHJpbmdcbik6IHN0cmluZyA9PiB7XG4gIC8vIFNldCB0aGUgb2N0YXZlIGlmIG1pc3NpbmdcbiAgLy8gRm9yIGV4YW1wbGUgaWYgdGhlIG1ldGhvZCB3YXMgY2FsbGVkIHdpdGggYEMgbWFqb3JgIGluc3RlYWQgb2YgYEM0IG1ham9yYCwgdGhlbiBhZGQgdGhlIDRcbiAgY29uc3Qgbm90ZU9jdGF2ZVNjYWxlQXJyID0gbm90ZU9jdGF2ZVNjYWxlLnNwbGl0KCcgJyk7XG4gIGlmICghbm90ZU9jdGF2ZVNjYWxlQXJyWzBdLm1hdGNoKC9cXGQvKSkge1xuICAgIG5vdGVPY3RhdmVTY2FsZUFyclswXSArPSAnNCc7XG4gICAgbm90ZU9jdGF2ZVNjYWxlID0gbm90ZU9jdGF2ZVNjYWxlQXJyLmpvaW4oJyAnKTtcbiAgfVxuXG4gIC8vIEdldCB0aGUgc2NhbGUgZnJvbSB0aGUgZ2l2ZW4gbm90ZSBhbmQgc2NhbGUvbW9kZSBjb21iaW5hdGlvblxuICBjb25zdCBtb2RlID0gc2NhbGUobm90ZU9jdGF2ZVNjYWxlKTtcbiAgY29uc3QgY2hvcmREZWdyZWVzQXJyID0gY2hvcmREZWdyZXNzLnJlcGxhY2UoL1xccyosK1xccyovZywgJyAnKS5zcGxpdCgnICcpO1xuICAvLyBOb3cgd2UgaGF2ZSBzb21ldGhpbmcgbGlrZSBbJ2knLCAnaWknLCAnSVYnXVxuICAvLyBDb252ZXJ0IGl0IHRvIGEgY2hvcmQgZmFtaWx5IHN1Y2ggYXMgWydDbScsICdEbScsICdGTSddXG4gIGNvbnN0IGNob3JkRmFtaWx5ID0gY2hvcmREZWdyZWVzQXJyLm1hcCgocm9tYW4sIGlkeCkgPT4ge1xuICAgIGNvbnN0IGNob3JkTmFtZSA9IGdldENob3JkTmFtZShyb21hbik7IC8vIGUuZy4gbVxuICAgIC8vIGdldCB0aGUgaW5kZXggdG8gYmUgdXNlZCBieSByZW1vdmluZyBhbnkgZGlnaXQgb3Igbm9uIGFscGhhYmV0IGNoYXJhY3RlclxuICAgIGNvbnN0IHNjYWxlSWQgPSBpZHhCeURlZ3JlZVtyb21hbi5yZXBsYWNlKC9cXFd8XFxkL2csICcnKS50b0xvd2VyQ2FzZSgpXTsgLy8gZS5nLiAwXG4gICAgLy8gZ2V0IHRoZSBub3RlIGl0c2VsZlxuICAgIGNvbnN0IG5vdGUgPSBtb2RlW3NjYWxlSWRdOyAvLyBlLmcuIENcbiAgICAvLyBnZXQgdGhlIG9jdGF2ZSBvZiB0aGUgbm90ZTtcbiAgICBjb25zdCBvY3QgPSBub3RlLnJlcGxhY2UoL1xcRCsvLCAnJyk7IC8vIGUuZy4gNFxuICAgIC8vIG5vdyBnZXQgdGhlIGNob3JkXG4gICAgcmV0dXJuIG5vdGUucmVwbGFjZSgvXFxkLywgJycpICsgY2hvcmROYW1lICsgJ18nICsgb2N0O1xuICB9KTtcblxuICByZXR1cm4gY2hvcmRGYW1pbHkudG9TdHJpbmcoKS5yZXBsYWNlKC8sL2csICcgJyk7XG59O1xuXG5jb25zdCBnZXRQcm9nRmFjdG9yeSA9ICh7IFQsIFAsIEQgfTogVFBEKSA9PiB7XG4gIHJldHVybiAoY291bnQ6IG51bWJlciA9IDQpID0+IHtcbiAgICBjb25zdCBjaG9yZHMgPSBbXTtcblxuICAgIC8vIFB1c2ggcm9vdC90b25pY1xuICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoVCkpO1xuXG4gICAgbGV0IGkgPSAxO1xuXG4gICAgLy8gUGljayBhIHByZWRvbWluYW50XG4gICAgaWYgKGkgPCBjb3VudCAtIDEpIHtcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoUCkpO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIC8vIFRyeSBhbm90aGVyIHByZWRvbWluYW50XG4gICAgaWYgKGkgPCBjb3VudCAtIDEgJiYgZGljZSgpKSB7XG4gICAgICBjaG9yZHMucHVzaChwaWNrT25lKFApKTtcbiAgICAgIGkrKztcbiAgICB9XG5cbiAgICAvLy8vLy8vLy8gNCBvciBtb3JlLy8vLy8vLy8vL1xuICAgIGlmIChpIDwgY291bnQgLSAxKSB7XG4gICAgICAvLyBQaWNrIGEgZG9taW5hbnRcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoRCkpO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIGlmIChpIDwgY291bnQgLSAxKSB7XG4gICAgICAvLyBQaWNrIGEgcHJlZG9taW5hbnRcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoUCkpO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIGlmIChpIDwgY291bnQgLSAxKSB7XG4gICAgICAvLyBQaWNrIGEgZG9taW5hbnRcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoRCkpO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIC8vIFBpY2sgYSBwcmVkb21pbmFudCBpZiBwb3NzaWJsZVxuICAgIGlmIChpIDwgY291bnQgLSAxICYmIGRpY2UoKSkge1xuICAgICAgY2hvcmRzLnB1c2gocGlja09uZShQKSk7XG4gICAgICBpKys7XG4gICAgfVxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIC8vIEZpbGwgdGhlIHJlc3Qgd2l0aCBkb21pbmFudFxuICAgIHdoaWxlIChpIDwgY291bnQpIHtcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoRCkpO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIHJldHVybiBjaG9yZHM7XG4gIH07XG59O1xuXG5jb25zdCBNID0gZ2V0UHJvZ0ZhY3RvcnkoeyBUOiBbJ0knLCAndmknXSwgUDogWydpaScsICdJViddLCBEOiBbJ1YnXSB9KTtcbmNvbnN0IG0gPSBnZXRQcm9nRmFjdG9yeSh7IFQ6IFsnaScsICdWSSddLCBQOiBbJ2lpJywgJ2l2J10sIEQ6IFsnViddIH0pO1xuXG4vKipcbiAqIEdlbmVyYXRlIGEgY2hvcmQgcHJvZ3Jlc3Npb24gYmFzZWQgb24gYmFzaWMgbXVzaWMgdGhlb3J5XG4gKiB3aGVyZSB3ZSBmb2xsb3cgdG9uaWMgdG8gb3B0aW9uYWxseSBwcmVkb21pbmFudCBhbmQgdGhlbiBkb21pbmFudFxuICogYW5kIHRoZW4gcmFuZG9tbHkgdG8gcHJlZG9taW5hbnQgYW5kIGNvbnRpbnVlIHRoaXMgdGlsbCB3ZSByZWFjaCBgY291bnRgXG4gKiBAcGFyYW0gc2NhbGVUeXBlIGUuZy4gTSAoZm9yIG1ham9yIGNob3JkIHByb2dyZXNzaW9uKSwgbSAoZm9yIG1pbm9yIGNob3JkIHByb2dyZXNzaW9uKVxuICogQHBhcmFtIGNvdW50IGUuZy4gNFxuICovXG5leHBvcnQgY29uc3QgcHJvZ3Jlc3Npb24gPSAoc2NhbGVUeXBlOiBwcm9ncmVzc2lvblNjYWxlLCBjb3VudDogbnVtYmVyID0gNCkgPT4ge1xuICBpZiAoc2NhbGVUeXBlID09PSAnbWFqb3InIHx8IHNjYWxlVHlwZSA9PT0gJ00nKSB7XG4gICAgcmV0dXJuIE0oY291bnQpO1xuICB9XG5cbiAgaWYgKHNjYWxlVHlwZSA9PT0gJ21pbm9yJyB8fCBzY2FsZVR5cGUgPT09ICdtJykge1xuICAgIHJldHVybiBtKGNvdW50KTtcbiAgfVxufTtcbiIsICJpbXBvcnQgeyBpbmxpbmVDaG9yZCB9IGZyb20gJ2hhcm1vbmljcyc7XG5cbmV4cG9ydCBjb25zdCBSRV9TRVBBUkFUT1IgPSAvXFx8LztcbmV4cG9ydCBjb25zdCBSRV9QQVRURVJOID0gL14oPzpbeF8tXXxcXFsuKz9cXF0pKyQvO1xuZXhwb3J0IGNvbnN0IFJFX05VTUJFUiA9IC9eKD86XFwuP1xcZCt8XFxkKyg/OlxcLlxcZCspPykkLztcbmV4cG9ydCBjb25zdCBSRV9DSE9SRCA9IC9eW2EtZ0EtR11bXiNcXHNdKlxcZCsoPzpcXC5cXC4pPyQvO1xuZXhwb3J0IGNvbnN0IFJFX05PVEUgPSAvXlthLWdBLUddWyNiXT9cXGQrJC87XG5leHBvcnQgY29uc3QgUkVfTU9ERSA9IC9eKD8hW2l2SVZdezEsM30pW2Etel17Mix9LztcbmV4cG9ydCBjb25zdCBSRV9QUk9HID0gL15baXZJVl17MSwzfVx1MDBCMD8kLztcbmV4cG9ydCBjb25zdCBSRV9UUklNID0gL1xcLiskLztcblxuY29uc3QgQ0FDSEUgPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0KHZhbHVlKSB7XG4gIGxldCBkYXRhID0gW107XG4gIHRyeSB7XG4gICAgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlLnNwbGl0KC8oPz1bXFxkW1xcXXhfLV0pLykpO1xuICAgIGRhdGEgPSBkYXRhLnJlcGxhY2UoLyxcIlxcW1wiLC9nLCAnLCBbJyk7XG4gICAgZGF0YSA9IGRhdGEucmVwbGFjZSgvXCJcXFtcIiwvZywgJ1snKTtcbiAgICBkYXRhID0gZGF0YS5yZXBsYWNlKC8sXCJcXF1cIi9nLCAnXScpO1xuICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gaWdub3JlXG4gIH1cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZXZlbCh2YWx1ZSkge1xuICBpZiAoIUNBQ0hFW3ZhbHVlXSkge1xuICAgIGlmICh2YWx1ZS5pbmNsdWRlcygnJScpKSB7XG4gICAgICBDQUNIRVt2YWx1ZV0gPSAxMjcgKiBwYXJzZUZsb2F0KGAuJHt2YWx1ZX1gKTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlLmluY2x1ZGVzKCcvJykpIHtcbiAgICAgIGNvbnN0IFthLCBiXSA9IHZhbHVlLnNwbGl0KCcvJyk7XG5cbiAgICAgIENBQ0hFW3ZhbHVlXSA9IGEgLyBiO1xuICAgIH0gZWxzZSBpZiAodmFsdWUuaW5jbHVkZXMoJyonKSkge1xuICAgICAgY29uc3QgW2EsIGJdID0gdmFsdWUuc3BsaXQoJyonKTtcblxuICAgICAgQ0FDSEVbdmFsdWVdID0gYSAqIGI7XG4gICAgfSBlbHNlIHtcbiAgICAgIENBQ0hFW3ZhbHVlXSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gQ0FDSEVbdmFsdWVdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGUocmUsIHZhbHVlKSB7XG4gIGlmICghQ0FDSEVbcmUuc291cmNlICsgdmFsdWVdKSB7XG4gICAgQ0FDSEVbcmUuc291cmNlICsgdmFsdWVdID0gcmUudGVzdCh2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIENBQ0hFW3JlLnNvdXJjZSArIHZhbHVlXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvZ3Jlc3Npb24odmFsdWUpIHtcbiAgcmV0dXJuIHZhbGlkYXRlKFJFX1BST0csIHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGF0dGVybih2YWx1ZSkge1xuICByZXR1cm4gdmFsaWRhdGUoUkVfUEFUVEVSTiwgdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgcmV0dXJuIHZhbGlkYXRlKFJFX05VTUJFUiwgdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDaG9yZCh2YWx1ZSkge1xuICByZXR1cm4gdmFsaWRhdGUoUkVfQ0hPUkQsIHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTm90ZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsaWRhdGUoUkVfTk9URSwgdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNNb2RlKHZhbHVlKSB7XG4gIHJldHVybiB2YWxpZGF0ZShSRV9NT0RFLCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUeXBlKHZhbHVlKSB7XG4gIGNvbnN0IGtleSA9IGBUJHt2YWx1ZX1gO1xuICBpZiAoIUNBQ0hFW2tleV0pIHtcbiAgICBpZiAoaXNOb3RlKHZhbHVlKSkgQ0FDSEVba2V5XSA9ICdub3RlJztcbiAgICBlbHNlIGlmIChpc0Nob3JkKHZhbHVlKSkgQ0FDSEVba2V5XSA9ICdjaG9yZCc7XG4gICAgZWxzZSBpZiAoaXNQYXR0ZXJuKHZhbHVlKSkgQ0FDSEVba2V5XSA9ICdwYXR0ZXJuJztcbiAgICBlbHNlIGlmIChpc01vZGUodmFsdWUpKSBDQUNIRVtrZXldID0gJ21vZGUnO1xuICAgIGVsc2UgaWYgKGlzTnVtYmVyKHZhbHVlKSkgQ0FDSEVba2V5XSA9ICdudW1iZXInO1xuICAgIGVsc2UgQ0FDSEVba2V5XSA9ICd2YWx1ZSc7XG4gIH1cbiAgcmV0dXJuIENBQ0hFW2tleV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm0oZXhwcmVzc2lvbikge1xuICBpZiAoIWV4cHJlc3Npb24gfHwgdHlwZW9mIGV4cHJlc3Npb24gIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RpbmcgYSB2YWxpZCBzdHJpbmcsIGdpdmVuICcke2V4cHJlc3Npb259J2ApO1xuICB9XG5cbiAgaWYgKENBQ0hFW2AkJHtleHByZXNzaW9ufWBdKSByZXR1cm4gQ0FDSEVbYCQke2V4cHJlc3Npb259YF07XG5cbiAgY29uc3QgdG9rZW5zID0gZXhwcmVzc2lvbi5zcGxpdCgvXFxzKy8pO1xuXG4gIGlmICghdG9rZW5zLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0aW5nIGEgdmFsaWQgZXhwcmVzc2lvbiwgZ2l2ZW4gJyR7ZXhwcmVzc2lvbn0nYCk7XG4gIH1cblxuICBjb25zdCBhc3QgPSBbXTtcbiAgY29uc3QgY2FycnkgPSBbXTtcblxuICBmdW5jdGlvbiBhZGQodHlwZSwgdmFsdWUpIHtcbiAgICBjb25zdCBpdGVtID0geyB0eXBlLCB2YWx1ZSB9O1xuXG4gICAgaWYgKHR5cGUgPT09ICdudW1iZXInICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGl0ZW0udmFsdWUgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gbGV2ZWwodmFsdWUpIDogdmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09ICdjaG9yZCcgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgaXRlbS52YWx1ZSA9IGlubGluZUNob3JkKHZhbHVlLnJlcGxhY2UoUkVfVFJJTSwgJycpKTtcblxuICAgICAgaWYgKHZhbHVlLmluY2x1ZGVzKCcuLicpKSB7XG4gICAgICAgIGl0ZW0udW5mb2xkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gJ3ZhbHVlJyAmJiB2YWx1ZS5pbmRleE9mKCd4JykgPiAtMSkge1xuICAgICAgY29uc3QgeCA9IHZhbHVlLnNwbGl0KCd4Jyk7XG5cbiAgICAgIGlmICghKGlzTnVtYmVyKHhbMF0pICYmIGlzTnVtYmVyKHhbMV0pKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGluZyB2YWxpZCBudW1iZXJzIGZvciAke3R5cGV9LCBnaXZlbiAnJHt2YWx1ZX0nYCk7XG4gICAgICB9XG5cbiAgICAgIGl0ZW0udmFsdWUgPSBwYXJzZUludCh4WzBdLCAxMCk7XG4gICAgICBpdGVtLnJlcGVhdCA9IHBhcnNlSW50KHhbMV0sIDEwKTtcbiAgICAgIGl0ZW0udHlwZSA9ICdudW1iZXInO1xuICAgIH1cblxuICAgIGFzdC5wdXNoKGl0ZW0pO1xuICB9XG5cbiAgdG9rZW5zLnJlZHVjZSgocHJldiwgY3VyLCBpKSA9PiB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBjb25zdCBuZXh0ID0gdG9rZW5zW2kgKyAxXTtcbiAgICBjb25zdCBsYXN0ID0gYXN0W2FzdC5sZW5ndGggLSAxXSB8fCB7fTtcblxuICAgIGlmIChSRV9TRVBBUkFUT1IudGVzdChjdXIpKSB7XG4gICAgICBhZGQoJ2Nob3JkJywgY3VyLnNwbGl0KFJFX1NFUEFSQVRPUikpO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjdXIgPT09ICdzdHJpbmcnICYmIChcbiAgICAgIChjdXIuaW5jbHVkZXMoJy8nKSAmJiBjdXIuaW5kZXhPZignLycpID4gMClcbiAgICAgIHx8IChjdXIuaW5jbHVkZXMoJyonKSAmJiBjdXIuaW5kZXhPZignKicpID4gMClcbiAgICAgIHx8IChjdXIuaW5jbHVkZXMoJyUnKSAmJiBjdXIuaW5kZXhPZignJScpID4gMClcbiAgICApKSB7XG4gICAgICBhZGQoJ251bWJlcicsIGxldmVsKGN1cikpO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKGN1ci5pbmRleE9mKCclJykgPiAtMSkge1xuICAgICAgaWYgKGN1ciA9PT0gJyUnKSB7XG4gICAgICAgIGlmICghbGFzdC50eXBlKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIGV4cHJlc3Npb24gdG8gcmVwZWF0LCBnaXZlbiAnJHt0b2tlbnMuc2xpY2UoMCwgaSkuam9pbignICcpfSdgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhc3QucmVwZWF0ID0gbGFzdC5yZXBlYXQgfHwgMTtcbiAgICAgICAgbGFzdC5yZXBlYXQgKz0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZCgncGFyYW0nLCBjdXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAoaXNQcm9ncmVzc2lvbihjdXIpKSB7XG4gICAgICBsYXN0LnZhbHVlICs9IGAgJHtjdXJ9YDtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmIChjdXIuY2hhckF0KCkgPT09ICcjJykge1xuICAgICAgYWRkKCdjaGFubmVsJywgY3VyKTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmIChpc05vdGUoY3VyKSB8fCBpc0Nob3JkKGN1cikgfHwgaXNNb2RlKGN1cikgfHwgaXNOdW1iZXIoY3VyKSkge1xuICAgICAgY2FycnkucHVzaChjdXIpO1xuXG4gICAgICBpZiAoXG4gICAgICAgICFuZXh0XG4gICAgICAgIHx8IGNhcnJ5Lmxlbmd0aCA9PT0gM1xuICAgICAgICB8fCAhKGlzTm90ZShuZXh0KSB8fCBpc01vZGUobmV4dCkgfHwgaXNOdW1iZXIobmV4dCkpXG4gICAgICApIHtcbiAgICAgICAgY29uc3Qgb2xkID0gY2Fycnkuc3BsaWNlKDAsIGNhcnJ5Lmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IHRlc3QgPSBvbGRbMF07XG5cbiAgICAgICAgbGV0IG1vZGUgPSBvbGRbMV07XG4gICAgICAgIGxldCBvY3RhdmUgPSBvbGRbMl07XG5cbiAgICAgICAgaWYgKCFvY3RhdmUgJiYgaXNOdW1iZXIobW9kZSkpIHtcbiAgICAgICAgICBvY3RhdmUgPSBtb2RlO1xuICAgICAgICAgIG1vZGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgdGVzdC5sZW5ndGggPCAyXG4gICAgICAgICAgJiYgaXNOb3RlKHRlc3QpXG4gICAgICAgICAgJiYgKGlzTW9kZShtb2RlKSB8fCBpc051bWJlcihvY3RhdmUpKVxuICAgICAgICApIHtcbiAgICAgICAgICBhZGQoJ21vZGUnLCBvbGQuam9pbignICcpKTtcbiAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgfVxuXG4gICAgICAgIG9sZC5mb3JFYWNoKHggPT4ge1xuICAgICAgICAgIGFkZCh4Lmxlbmd0aCA+IDEgfHwgIWlzTm90ZSh4KSA/IGdldFR5cGUoeCkgOiAnbW9kZScsIHgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY3VyID09PSAnc3RyaW5nJyAmJiBjdXIuaW5kZXhPZignLi4nKSA+IC0xKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IGN1ci5zcGxpdCgnLi4nKTtcbiAgICAgIGNvbnN0IG1pbiA9IHBhcnRzWzBdIHx8IDE7XG4gICAgICBjb25zdCBtYXggPSBwYXJ0c1sxXSB8fCBJbmZpbml0eTtcblxuICAgICAgdHlwZSA9ICdzbGljZSc7XG4gICAgICBjdXIgPSBbbWluLCBtYXhdO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY3VyID09PSAnc3RyaW5nJyAmJiAoY3VyLmNoYXJBdCgpID09PSAnLycgfHwgY3VyLmNoYXJBdCgpID09PSAnKicpKSB7XG4gICAgICBjb25zdCBvcGVyYXRvciA9IGN1ci5jaGFyQXQoKSA9PT0gJy8nID8gJ2RpdmlkZScgOiAnbXVsdGlwbHknO1xuICAgICAgY29uc3QgbnVtYmVyID0gY3VyLnN1YnN0cigxKTtcblxuICAgICAgaWYgKCFpc051bWJlcihudW1iZXIpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0aW5nIGEgdmFsaWQgZXhwcmVzc2lvbiB0byAke29wZXJhdG9yfSwgZ2l2ZW4gJyR7dG9rZW5zLnNsaWNlKDAsIGkpLmpvaW4oJyAnKX0gJHtjdXJ9J2ApO1xuICAgICAgfVxuXG4gICAgICBhZGQob3BlcmF0b3IsIHBhcnNlRmxvYXQobnVtYmVyKSk7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAoIXR5cGUgJiYgZ2V0VHlwZShjdXIpID09PSAndmFsdWUnICYmIEFycmF5LmlzQXJyYXkobGFzdC52YWx1ZSkpIHtcbiAgICAgIGxhc3QudmFsdWVbMV0gPSBsYXN0LnZhbHVlWzFdIHx8ICcnO1xuICAgICAgbGFzdC52YWx1ZVsxXSArPSBsYXN0LnZhbHVlWzFdID8gJyAnIDogJyc7XG4gICAgICBsYXN0LnZhbHVlWzFdICs9IGN1cjtcbiAgICAgIHJldHVybiBjdXI7XG4gICAgfVxuXG4gICAgYWRkKHR5cGUgfHwgZ2V0VHlwZShjdXIpLCB0eXBlb2YgY3VyID09PSAnc3RyaW5nJyAmJiBpc051bWJlcihjdXIpID8gcGFyc2VJbnQoY3VyLCAxMCkgOiBjdXIpO1xuICAgIHJldHVybiBjdXI7XG4gIH0sIG51bGwpO1xuXG4gIENBQ0hFW2AkJHtleHByZXNzaW9ufWBdID0gYXN0O1xuICByZXR1cm4gYXN0O1xufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5yZWR1Y2UoKHByZXYsIGN1cikgPT4gcHJldi5jb25jYXQoY3VyKSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwZWF0KHZhbHVlLCB0aW1lcykge1xuICBjb25zdCBvdXQgPSBbXTtcblxuICB3aGlsZSAodGltZXMpIHtcbiAgICBvdXQucHVzaCh2YWx1ZSk7XG4gICAgdGltZXMgLT0gMTtcbiAgfVxuXG4gIHJldHVybiBvdXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5nZShtaW4sIG1heCwgc3RlcCkge1xuICBjb25zdCBhY2MgPSBbXTtcblxuICBpZiAoIXN0ZXApIHtcbiAgICBmb3IgKGxldCBpID0gbWluOyBpIDw9IG1heDsgaSArPSAxKSB7XG4gICAgICBhY2MucHVzaChpKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZGlmZiA9IChtYXggLSBtaW4pIC8gc3RlcDtcblxuICAgIGZvciAobGV0IGkgPSBtaW47IGkgPD0gbWF4OyBpICs9IGRpZmYpIHtcbiAgICAgIGFjYy5wdXNoKGkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhY2M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZSh2YWx1ZSkge1xuICBpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHJldHVybiB2YWx1ZTtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSByZXR1cm4gdmFsdWUubWFwKGNsb25lKTtcblxuICBjb25zdCBjb3B5ID0ge307XG5cbiAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goa2V5ID0+IHtcbiAgICBjb3B5W2tleV0gPSBjbG9uZSh2YWx1ZVtrZXldKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvcHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB6aXAoYSwgYiwgY2IpIHtcbiAgY29uc3QgbWF4ID0gTWF0aC5tYXgoYS5sZW5ndGgsIGIubGVuZ3RoKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG1heDsgaSArPSAxKSB7XG4gICAgaWYgKHR5cGVvZiBhW2ldICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgYltpXSAhPT0gJ3VuZGVmaW5lZCcpIGNiKGFbaV0sIGJbaV0pO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgZ2V0Q2hvcmRzQnlQcm9ncmVzc2lvbiB9IGZyb20gJ3NjcmliYmxldHVuZS9zcmMvcHJvZ3Jlc3Npb24nO1xuaW1wb3J0IHsgc2NhbGUsIGlubGluZUNob3JkIH0gZnJvbSAnaGFybW9uaWNzJztcblxuaW1wb3J0IHsgaXNQcm9ncmVzc2lvbiwgdHJhbnNmb3JtIH0gZnJvbSAnLi90b2tlbml6ZSc7XG5pbXBvcnQgeyByZXBlYXQsIGNsb25lIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2UoaW5wdXQsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShpbnB1dCkpIHJldHVybiBpbnB1dDtcblxuICBjb25zdCBmbiA9IHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyA/IGNhbGxiYWNrIDogKHYgPT4gdik7XG5cbiAgbGV0IHNraXA7XG4gIHJldHVybiBpbnB1dC5yZWR1Y2UoKHByZXYsIGN1ciwgaSkgPT4ge1xuICAgIGNvbnN0IGxhc3QgPSBwcmV2W3ByZXYubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgbmV4dCA9IGlucHV0W2kgKyAxXSB8fCB7fTtcbiAgICBjb25zdCBvbGQgPSBpbnB1dFtpIC0gMV0gfHwge307XG5cbiAgICBpZiAoc2tpcCkge1xuICAgICAgc2tpcCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY3VyKSkge1xuICAgICAgcHJldi5wdXNoKC4uLmN1cik7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAoY3VyLnR5cGUgPT09ICd2YWx1ZScgJiYgY3VyLnZhbHVlID09PSAnLicpIHtcbiAgICAgIGlmIChwcmV2Lmxlbmd0aCA+IDApIHByZXYucHVzaChwcmV2WzBdKTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmIChvbGQudHlwZSA9PT0gJ3BhdHRlcm4nICYmIGN1ci50eXBlID09PSAncGF0dGVybicpIHtcbiAgICAgIHByZXZbcHJldi5sZW5ndGggLSAxXSArPSBjdXIudmFsdWU7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGN1ci50eXBlKSB7XG4gICAgICBjYXNlICdwYXR0ZXJuJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdub3RlJzpcbiAgICAgICAgaWYgKGN1ci5yZXBlYXQpIHByZXYucHVzaCguLi5yZXBlYXQoY3VyLnZhbHVlLCBjdXIucmVwZWF0KSk7XG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY3VyLnZhbHVlKSkgcHJldi5wdXNoKC4uLmN1ci52YWx1ZSk7XG4gICAgICAgIGVsc2UgcHJldi5wdXNoKGN1ci52YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdjaG9yZCc6XG4gICAgICAgIGlmIChjdXIucmVwZWF0KSBwcmV2LnB1c2goLi4ucmVwZWF0KGN1ci52YWx1ZSwgY3VyLnJlcGVhdCkpO1xuICAgICAgICBlbHNlIGlmIChjdXIudW5mb2xkKSBwcmV2LnB1c2goLi4uY3VyLnZhbHVlKTtcbiAgICAgICAgZWxzZSBwcmV2LnB1c2goY3VyLnZhbHVlKTtcblxuICAgICAgICBpZiAoY3VyLnR5cGUgIT09ICdjaG9yZCcpIHtcbiAgICAgICAgICBza2lwID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZGl2aWRlJzpcbiAgICAgICAgcHJldltwcmV2Lmxlbmd0aCAtIDFdIC89IGN1ci52YWx1ZTtcbiAgICAgICAgcmV0dXJuIHByZXY7XG5cbiAgICAgIGNhc2UgJ211bHRpcGx5JzpcbiAgICAgICAgcHJldi5wdXNoKC4uLnJlcGVhdChsYXN0LCBjdXIudmFsdWUgLSAxKSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdzbGljZSc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGxhc3QpKSB7XG4gICAgICAgICAgcHJldltwcmV2Lmxlbmd0aCAtIDFdID0gbGFzdC5zbGljZShjdXIudmFsdWVbMF0gLSAxLCBjdXIudmFsdWVbMV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByZXYucHVzaChjdXIudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdtb2RlJzpcbiAgICAgICAgcHJldltwcmV2Lmxlbmd0aCAtIDFdID0gYCR7bGFzdH0gJHtjdXIudmFsdWV9YDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3BhcmFtJzpcbiAgICAgIGNhc2UgJ3ZhbHVlJzoge1xuICAgICAgICBsZXQgdmFsdWUgPSBudWxsO1xuICAgICAgICBpZiAodHlwZW9mIGNvbnRleHRbY3VyLnZhbHVlXSAhPT0gJ3VuZGVmaW5lZCcpIHZhbHVlID0gY29udGV4dFtjdXIudmFsdWVdO1xuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgZXhwcmVzc2lvbiBmb3IgJyR7Y3VyLnZhbHVlfSdgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZVswXSAmJiB2YWx1ZVswXS50eXBlKSB7XG4gICAgICAgICAgdmFsdWUgPSByZWR1Y2UodmFsdWUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGN1ci5yZXBlYXQpIHtcbiAgICAgICAgICAgIHByZXYucHVzaCguLi5yZXBlYXQodmFsdWUsIGN1ci5yZXBlYXQpLnJlZHVjZSgoX3ByZXYsIF9jdXIpID0+IHtcbiAgICAgICAgICAgICAgX3ByZXYucHVzaCguLi5fY3VyKTtcbiAgICAgICAgICAgICAgcmV0dXJuIF9wcmV2O1xuICAgICAgICAgICAgfSwgW10pKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJldi5wdXNoKC4uLnZhbHVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbHVlID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV07XG4gICAgICAgIGlmIChjdXIucmVwZWF0KSBwcmV2LnB1c2goLi4ucmVwZWF0KHZhbHVlLCBjdXIucmVwZWF0KSk7XG4gICAgICAgIGVsc2UgcHJldi5wdXNoKC4uLnZhbHVlKTtcbiAgICAgIH0gYnJlYWs7XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5oYW5kbGVkICcke2N1ci50eXBlfSdgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJldjtcbiAgfSwgW10pLnJlZHVjZSgobWVtbywgaXRlbSkgPT4ge1xuICAgIGNvbnN0IHByZXYgPSBtZW1vW21lbW8ubGVuZ3RoIC0gMV07XG5cbiAgICBpZiAoXG4gICAgICBBcnJheS5pc0FycmF5KHByZXYpXG4gICAgICAmJiBBcnJheS5pc0FycmF5KGl0ZW0pXG4gICAgICAmJiB0eXBlb2YgaXRlbVswXSA9PT0gJ251bWJlcidcbiAgICAgICYmIGl0ZW0ubGVuZ3RoID09PSAyXG4gICAgKSB7XG4gICAgICBjb25zdCBvZmZzZXQgPSBpdGVtWzFdID09PSBJbmZpbml0eSA/IHByZXYubGVuZ3RoIDogaXRlbVsxXTtcbiAgICAgIGNvbnN0IFtiYXNlLCBsZW5ndGhdID0gU3RyaW5nKG9mZnNldCkuc3BsaXQoL1xcRC8pO1xuXG4gICAgICBtZW1vLnBvcCgpO1xuICAgICAgbWVtby5wdXNoKC4uLnByZXYuc2xpY2UoaXRlbVswXSAtIDEsIGJhc2UpKTtcblxuICAgICAgaWYgKFN0cmluZyhvZmZzZXQpLmluY2x1ZGVzKCc+JykpIHtcbiAgICAgICAgY29uc3QgcGFydHMgPSBtZW1vLnNsaWNlKC1sZW5ndGggLSAxKTtcblxuICAgICAgICBwYXJ0cy5wb3AoKTtcbiAgICAgICAgcGFydHMucmV2ZXJzZSgpO1xuICAgICAgICBtZW1vLnB1c2goLi4ucGFydHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1lbW87XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJyAmJiBpdGVtLmluY2x1ZGVzKCcgJykpIHtcbiAgICAgIGNvbnN0IGNodW5rcyA9IGl0ZW0uc3BsaXQoJyAnKTtcblxuICAgICAgaWYgKGNodW5rcy5zb21lKGlzUHJvZ3Jlc3Npb24pKSB7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IGNodW5rcy5maW5kSW5kZXgoaXNQcm9ncmVzc2lvbik7XG4gICAgICAgIGNvbnN0IFthLCBiXSA9IFtjaHVua3Muc2xpY2UoMCwgb2Zmc2V0KSwgY2h1bmtzLnNsaWNlKG9mZnNldCldO1xuXG4gICAgICAgIG1lbW8ucHVzaChnZXRDaG9yZHNCeVByb2dyZXNzaW9uKGEuam9pbignICcpLCBiLmpvaW4oJyAnKSkuc3BsaXQoJyAnKS5tYXAoeCA9PiBmbihpbmxpbmVDaG9yZCh4KSkpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lbW8ucHVzaChmbihzY2FsZShpdGVtKSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtZW1vLnB1c2goZm4oaXRlbSkpO1xuICAgIH1cbiAgICByZXR1cm4gbWVtbztcbiAgfSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2UoYnVmZmVyKSB7XG4gIGNvbnN0IHRyYWNrcyA9IHt9O1xuICBjb25zdCBtYWluID0gW107XG4gIGNvbnN0IGRhdGEgPSB7fTtcblxuICBsZXQgY2hhbm5lbCA9IG51bGw7XG4gIGxldCBwcmVmaXggPSAnJztcbiAgbGV0IHRyYWNrO1xuICBsZXQgaW5mbyA9IHt9O1xuICBidWZmZXIuc3BsaXQoL1xccj9cXG4vZykuZm9yRWFjaCgobGluZSwgbnRoKSA9PiB7XG4gICAgbGluZSA9IGxpbmUucmVwbGFjZSgvOy4rPyQvLCAnJykudHJpbSgpO1xuICAgIGlmICghbGluZSkgcmV0dXJuO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlmIChsaW5lLmNoYXJBdCgpID09PSAnJScpIHtcbiAgICAgICAgY29uc3QgW25hbWUsIC4uLnZhbHVlXSA9IGxpbmUuc3BsaXQoL1xccysvKTtcblxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGRhdGFbbmFtZV0gPSB0cmFuc2Zvcm0odmFsdWUuam9pbignICcpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChsaW5lLmluZGV4T2YoJyMgJykgPj0gMCkge1xuICAgICAgICBpZiAodHJhY2spIHtcbiAgICAgICAgICB0cmFja3NbdHJhY2tdID0gaW5mbztcbiAgICAgICAgICBjaGFubmVsID0gbnVsbDtcbiAgICAgICAgICBwcmVmaXggPSAnJztcbiAgICAgICAgICBpbmZvID0ge307XG4gICAgICAgIH1cblxuICAgICAgICB0cmFjayA9IGxpbmUuc3BsaXQoL1xccysvKS5zbGljZSgxKS5qb2luKCcgJyk7XG4gICAgICB9IGVsc2UgaWYgKGxpbmUuY2hhckF0KCkgPT09ICc+Jykge1xuICAgICAgICBtYWluLnB1c2godHJhbnNmb3JtKGxpbmUuc3Vic3RyKDEpLnRyaW0oKSkpO1xuICAgICAgfSBlbHNlIGlmIChsaW5lLmNoYXJBdCgpID09PSAnQCcpIHtcbiAgICAgICAgY29uc3QgW25hbWUsIC4uLmV4dGVuZF0gPSBsaW5lLnN1YnN0cigxKS5zcGxpdCgnICcpO1xuXG4gICAgICAgIGlmIChleHRlbmRbMF0gPT09ICc8Jykge1xuICAgICAgICAgIGNvbnN0IGtleSA9IGAke2V4dGVuZFsxXX0jYDtcblxuICAgICAgICAgIE9iamVjdC5rZXlzKGluZm8pXG4gICAgICAgICAgICAuZmlsdGVyKHggPT4geC5pbmRleE9mKGtleSkgPT09IDApXG4gICAgICAgICAgICAuZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgICAgaW5mb1tgJHtuYW1lfSMke2suc3BsaXQoJyMnKVsxXX1gXSA9IGNsb25lKGluZm9ba10pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJlZml4ID0gbmFtZTtcbiAgICAgIH0gZWxzZSBpZiAobGluZS5pbmRleE9mKCc6JykgPiAwKSB7XG4gICAgICAgIGNvbnN0IFtuYW1lLCAuLi52YWx1ZV0gPSBsaW5lLnNwbGl0KCc6Jyk7XG5cbiAgICAgICAgZGF0YVtuYW1lXSA9IHRyYW5zZm9ybSh2YWx1ZS5qb2luKCc6JykudHJpbSgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRpY2tzID0gdHJhbnNmb3JtKGxpbmUpO1xuXG4gICAgICAgIGlmICghdGlja3NbMF0gfHwgdGlja3NbMF0udHlwZSAhPT0gJ2NoYW5uZWwnKSB7XG4gICAgICAgICAgaWYgKCFjaGFubmVsKSB0aHJvdyBuZXcgVHlwZUVycm9yKGBNaXNzaW5nIGNoYW5uZWwsIGdpdmVuICcke2xpbmV9J2ApO1xuXG4gICAgICAgICAgY29uc3QgZW5kID0gaW5mb1tjaGFubmVsXVtpbmZvW2NoYW5uZWxdLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgICAgaWYgKCFlbmQudmFsdWVzKSBlbmQudmFsdWVzID0gW3sgdHlwZTogJ251bWJlcicsIHZhbHVlOiAxMjcgfV07XG4gICAgICAgICAgZW5kLnZhbHVlcy5wdXNoKC4uLnRpY2tzKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBub3RlcyA9IHRpY2tzLmZpbmRJbmRleCh4ID0+IFsnbm90ZScsICdjaG9yZCcsICdwYXJhbSddLmluY2x1ZGVzKHgudHlwZSkpO1xuICAgICAgICBjb25zdCBpbmRleCA9IHRpY2tzLmZpbmRJbmRleCh4ID0+IHgudHlwZSA9PT0gJ3BhdHRlcm4nKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBpbmRleCA+IDAgPyB0aWNrcy5zbGljZShpbmRleCkgOiB0aWNrcztcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdmFsdWUuZmluZEluZGV4KHggPT4geC50eXBlICE9PSAncGF0dGVybicpO1xuICAgICAgICBjb25zdCBpbnB1dHMgPSB0aWNrcy5zbGljZSgwLCBpbmRleCA+IDAgPyBpbmRleCA6IDEpO1xuXG4gICAgICAgIGNoYW5uZWwgPSBwcmVmaXggKyBpbnB1dHNbMF0udmFsdWU7XG4gICAgICAgIGlmICghaW5mb1tjaGFubmVsXSkge1xuICAgICAgICAgIGluZm9bY2hhbm5lbF0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzcGVjO1xuICAgICAgICBpZiAobm90ZXMgPiAwICYmIGluZGV4ID09PSAtMSkge1xuICAgICAgICAgIGNvbnN0IGVuZCA9IGluZm9bY2hhbm5lbF1baW5mb1tjaGFubmVsXS5sZW5ndGggLSAxXTtcblxuICAgICAgICAgIGVuZC5kYXRhID0gdmFsdWUuc2xpY2Uobm90ZXMpO1xuICAgICAgICAgIHNwZWMgPSB7XG4gICAgICAgICAgICBpbnB1dDogZW5kLmlucHV0LFxuICAgICAgICAgICAgdmFsdWVzOiB2YWx1ZS5zbGljZSgxLCBub3RlcyksXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChvZmZzZXQgPiAwKSB7XG4gICAgICAgICAgc3BlYyA9IHtcbiAgICAgICAgICAgIGRhdGE6IHZhbHVlLnNsaWNlKG9mZnNldCksXG4gICAgICAgICAgICBpbnB1dDogdmFsdWUuc2xpY2UoMCwgb2Zmc2V0KSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKG9mZnNldCA9PT0gMCkge1xuICAgICAgICAgIHNwZWMgPSB7IHZhbHVlczogdmFsdWUuc2xpY2UoMSkgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzcGVjID0geyBpbnB1dDogdmFsdWUgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbnB1dHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHNwZWMudmFsdWVzID0gaW5wdXRzLnNsaWNlKDEpO1xuICAgICAgICB9XG4gICAgICAgIGluZm9bY2hhbm5lbF0ucHVzaChzcGVjKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zdCBtc2cgPSB0eXBlb2YgZSA9PT0gJ3N0cmluZycgPyBlIDogZS5tZXNzYWdlO1xuXG4gICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYCR7bXNnfVxcbiAgYXQgbGluZSAke250aCArIDF9XFxuJHtsaW5lfWApO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHRyYWNrKSB7XG4gICAgdHJhY2tzW3RyYWNrXSA9IGluZm87XG4gIH1cbiAgcmV0dXJuIHsgbWFpbiwgZGF0YSwgdHJhY2tzIH07XG59XG4iLCAiZnVuY3Rpb24gZXNjKHZhbHVlKSB7XG4gIHJldHVybiBTdHJpbmcodmFsdWUpXG4gICAgLnJlcGxhY2UoLyYvZywgJyZhbXA7JylcbiAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXG4gICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKTtcbn1cblxuZnVuY3Rpb24gc3BhbihjbHMsIHZhbHVlLCBhdHRycyA9IHt9KSB7XG4gIGNvbnN0IGRhdGFBdHRycyA9IE9iamVjdC5lbnRyaWVzKGF0dHJzKVxuICAgIC5tYXAoKFtrZXksIGF0dHJWYWx1ZV0pID0+IGAgZGF0YS0ke2tleX09XCIke2VzYyhhdHRyVmFsdWUpfVwiYClcbiAgICAuam9pbignJyk7XG4gIHJldHVybiBgPHNwYW4gY2xhc3M9XCIke2Nsc31cIiR7ZGF0YUF0dHJzfT4ke2VzYyh2YWx1ZSl9PC9zcGFuPmA7XG59XG5cbmZ1bmN0aW9uIGNsYXNzaWZ5KHRva2VuKSB7XG4gIGlmICghdG9rZW4pIHJldHVybiBudWxsO1xuICBpZiAodG9rZW4gPT09ICc8JykgcmV0dXJuICd0b2staW5oZXJpdCc7XG4gIGlmICh0b2tlbiA9PT0gJyUnKSByZXR1cm4gJ3Rvay12YXItcmVmJztcbiAgaWYgKHRva2VuLmNoYXJBdCgwKSA9PT0gJyUnKSByZXR1cm4gJ3Rvay12YXItcmVmJztcbiAgaWYgKC9eXFwqXFxkKyQvLnRlc3QodG9rZW4pKSByZXR1cm4gJ3Rvay1yZXBlYXQnO1xuICBpZiAoL15beF9cXC1cXFtcXF1dKyQvLnRlc3QodG9rZW4pKSByZXR1cm4gJ3Rvay1wYXR0ZXJuJztcbiAgaWYgKC9eW2EtZ0EtR11bI2JdP1xcZCskLy50ZXN0KHRva2VuKSkgcmV0dXJuICd0b2stbm90ZSc7XG4gIGlmICh0b2tlbi5pbmNsdWRlcygnfCcpKSByZXR1cm4gJ3Rvay1jaG9yZCc7XG4gIGlmICgvXihtYWpvcnxtaW5vcnxwaHJ5Z2lhbnxkb3JpYW58bWl4b2x5ZGlhbnxsb2NyaWFufGx5ZGlhbikkL2kudGVzdCh0b2tlbikpIHJldHVybiAndG9rLW1vZGUnO1xuICBpZiAoL14oPzpJfElJfElJSXxJVnxWfFZJfFZJSXxpfGlpfGlpaXxpdnx2fHZpfHZpaSlcdTAwQjA/JC8udGVzdCh0b2tlbikpIHJldHVybiAndG9rLXByb2dyZXNzaW9uJztcbiAgaWYgKC9eKD86XFwrXFwrfFxcLlxcLnw+PnxcXCpcXCopJC8udGVzdCh0b2tlbikpIHJldHVybiAndG9rLW9wZXJhdG9yJztcbiAgaWYgKC9eI1xcZCskLy50ZXN0KHRva2VuKSkgcmV0dXJuICd0b2stY2hhbm5lbCc7XG4gIGlmICgvXi0/XFxkKyhcXC5cXGQrKT8kLy50ZXN0KHRva2VuKSkgcmV0dXJuICd0b2stbnVtYmVyJztcbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRva2VuKHRva2VuKSB7XG4gIGNvbnN0IGNscyA9IGNsYXNzaWZ5KHRva2VuKTtcbiAgaWYgKCFjbHMpIHJldHVybiBlc2ModG9rZW4pO1xuICBpZiAoY2xzID09PSAndG9rLXZhci1yZWYnICYmIHRva2VuICE9PSAnJScpIHJldHVybiBzcGFuKGNscywgdG9rZW4sIHsgdmFyOiB0b2tlbiB9KTtcbiAgaWYgKGNscyA9PT0gJ3Rvay1jaGFubmVsJykgcmV0dXJuIHNwYW4oY2xzLCB0b2tlbiwgeyBpbnN0cnVtZW50OiB0b2tlbi5zbGljZSgxKSB9KTtcbiAgaWYgKGNscyA9PT0gJ3Rvay1tb2RlJykgcmV0dXJuIHNwYW4oY2xzLCB0b2tlbiwgeyBtb2RlOiB0b2tlbi50b0xvd2VyQ2FzZSgpIH0pO1xuICBpZiAoY2xzID09PSAndG9rLXBhdHRlcm4nKSByZXR1cm4gc3BhbihjbHMsIHRva2VuLCB7IHBhdHRlcm46ICcxJyB9KTtcbiAgaWYgKGNscyA9PT0gJ3Rvay1ub3RlJykgcmV0dXJuIHNwYW4oY2xzLCB0b2tlbiwgeyBub3RlOiB0b2tlbiB9KTtcbiAgaWYgKGNscyA9PT0gJ3Rvay1jaG9yZCcpIHJldHVybiBzcGFuKGNscywgdG9rZW4sIHsgY2hvcmQ6IHRva2VuIH0pO1xuICByZXR1cm4gc3BhbihjbHMsIHRva2VuKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVG9rZW5zKHRleHQpIHtcbiAgcmV0dXJuIHRleHRcbiAgICAuc3BsaXQoLyhcXHMrKS8pXG4gICAgLm1hcChwYXJ0ID0+ICgvXFxzKy8udGVzdChwYXJ0KSA/IHBhcnQgOiByZW5kZXJUb2tlbihwYXJ0KSkpXG4gICAgLmpvaW4oJycpO1xufVxuXG5mdW5jdGlvbiBzcGxpdENvbW1lbnQobGluZSkge1xuICBjb25zdCBpZHggPSBsaW5lLmluZGV4T2YoJzsnKTtcbiAgaWYgKGlkeCA8IDApIHJldHVybiBbbGluZSwgJyddO1xuICByZXR1cm4gW2xpbmUuc2xpY2UoMCwgaWR4KSwgbGluZS5zbGljZShpZHgpXTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQmFzZShiYXNlKSB7XG4gIGlmICghYmFzZS50cmltKCkpIHJldHVybiBlc2MoYmFzZSk7XG5cbiAgaWYgKC9eXFxzKiMjXFxzKy8udGVzdChiYXNlKSkge1xuICAgIHJldHVybiBiYXNlLnJlcGxhY2UoL14oXFxzKiMjXFxzKykoLiopJC8sIChfLCBwMSwgcDIpID0+IGAke2VzYyhwMSl9JHtzcGFuKCd0b2stc3VidHJhY2snLCBwMil9YCk7XG4gIH1cbiAgaWYgKC9eXFxzKiNcXHMrLy50ZXN0KGJhc2UpKSB7XG4gICAgcmV0dXJuIGJhc2UucmVwbGFjZSgvXihcXHMqI1xccyspKC4qKSQvLCAoXywgcDEsIHAyKSA9PiBgJHtlc2MocDEpfSR7c3BhbigndG9rLXRyYWNrJywgcDIpfWApO1xuICB9XG4gIGlmICgvXlxccypALy50ZXN0KGJhc2UpKSB7XG4gICAgcmV0dXJuIHJlbmRlclRva2VucyhiYXNlLnJlcGxhY2UoLzwvZywgJyA8ICcpKTtcbiAgfVxuICBpZiAoL15cXHMqPi8udGVzdChiYXNlKSkge1xuICAgIGNvbnN0IGluZGVudCA9IGVzYyhiYXNlLm1hdGNoKC9eXFxzKi8pWzBdKTtcbiAgICBjb25zdCBib2R5ID0gYmFzZS50cmltU3RhcnQoKS5zbGljZSgxKS5yZXBsYWNlKC9eXFxzKi8sICcgJyk7XG4gICAgY29uc3QgcmVuZGVyZWQgPSBib2R5XG4gICAgICAuc3BsaXQoLyhcXHMrKS8pXG4gICAgICAubWFwKHBhcnQgPT4ge1xuICAgICAgICBpZiAoIXBhcnQgfHwgL1xccysvLnRlc3QocGFydCkpIHJldHVybiBwYXJ0O1xuICAgICAgICBpZiAoL15bQS1aXVtBLVowLTldKiQvLnRlc3QocGFydCkpIHJldHVybiBzcGFuKCd0b2stc2VjdGlvbicsIHBhcnQsIHsgc2VjdGlvbjogcGFydCB9KTtcbiAgICAgICAgcmV0dXJuIHJlbmRlclRva2VuKHBhcnQpO1xuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKTtcbiAgICByZXR1cm4gYCR7aW5kZW50fSR7c3BhbigndG9rLWFycmFuZ2VtZW50JywgJz4nKX0ke3JlbmRlcmVkfWA7XG4gIH1cbiAgaWYgKC9eXFxzKiVbXlxcc10rXFxzKy8udGVzdChiYXNlKSkge1xuICAgIHJldHVybiBiYXNlLnJlcGxhY2UoL14oXFxzKikoJVteXFxzXSspKFxccyopKC4qKSQvLCAoXywgaSwgdiwgcywgcmVzdCkgPT4gKFxuICAgICAgYCR7ZXNjKGkpfSR7c3BhbigndG9rLXZhci1kZWYnLCB2LCB7IHZhcjogdiB9KX0ke2VzYyhzKX0ke3JlbmRlclRva2VucyhyZXN0KX1gXG4gICAgKSk7XG4gIH1cbiAgaWYgKC9eXFxzKiNcXGQrLy50ZXN0KGJhc2UpKSB7XG4gICAgcmV0dXJuIHJlbmRlclRva2VucyhiYXNlKTtcbiAgfVxuICByZXR1cm4gcmVuZGVyVG9rZW5zKGJhc2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlnaGxpZ2h0KGlucHV0KSB7XG4gIHJldHVybiBTdHJpbmcoaW5wdXQgfHwgJycpXG4gICAgLnNwbGl0KC9cXHI/XFxuLylcbiAgICAubWFwKGxpbmUgPT4ge1xuICAgICAgY29uc3QgW2Jhc2UsIGNvbW1lbnRdID0gc3BsaXRDb21tZW50KGxpbmUpO1xuICAgICAgY29uc3QgcmVuZGVyZWQgPSByZW5kZXJCYXNlKGJhc2UpO1xuICAgICAgaWYgKCFjb21tZW50KSByZXR1cm4gcmVuZGVyZWQ7XG4gICAgICByZXR1cm4gYCR7cmVuZGVyZWR9JHtzcGFuKCd0b2stY29tbWVudCcsIGNvbW1lbnQpfWA7XG4gICAgfSlcbiAgICAuam9pbignXFxuJyk7XG59XG4iLCAiaW1wb3J0IHsgaGlnaGxpZ2h0IH0gZnJvbSAnLi4vaGlnaGxpZ2h0JztcblxuY29uc3QgRElBVE9OSUMgPSB7IGM6IDAsIGQ6IDEsIGU6IDIsIGY6IDMsIGc6IDQsIGE6IDUsIGI6IDYgfTtcbmNvbnN0IEU0X0RJQVRPTklDID0gNCAqIDcgKyAyO1xuXG5mdW5jdGlvbiBub3JtYWxpemVOb3RlKHMpIHtcbiAgcmV0dXJuIHMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzLnNsaWNlKDEpO1xufVxuXG5mdW5jdGlvbiBub3RlVG9Qb3Mobm90ZVN0cikge1xuICBjb25zdCBtID0gbm90ZVN0ci5tYXRjaCgvXihbYS1nQS1HXSkoWyNiXT8pKFxcZCspJC8pO1xuICBpZiAoIW0pIHJldHVybiBudWxsO1xuICBjb25zdCBkaWF0UG9zID0gcGFyc2VJbnQobVszXSwgMTApICogNyArIERJQVRPTklDW21bMV0udG9Mb3dlckNhc2UoKV07XG4gIHJldHVybiBkaWF0UG9zIC0gRTRfRElBVE9OSUM7XG59XG5cbmZ1bmN0aW9uIHBvc1RvWShwb3MpIHtcbiAgcmV0dXJuIDYwIC0gcG9zICogNTtcbn1cblxuZnVuY3Rpb24gYnVpbGRTdGFmZlNWRyhub3RlcywgbW9kZSA9ICdjaG9yZCcpIHtcbiAgaWYgKCFub3RlcyB8fCBub3Rlcy5sZW5ndGggPT09IDApIHJldHVybiAnJztcbiAgY29uc3Qgc29ydGVkID0gbm90ZXNcbiAgICAubWFwKG4gPT4gKHsgbm90ZTogbiwgcG9zOiBub3RlVG9Qb3MobikgfSkpXG4gICAgLmZpbHRlcihuID0+IG4ucG9zICE9PSBudWxsKVxuICAgIC5zb3J0KChhLCBiKSA9PiBhLnBvcyAtIGIucG9zKTtcbiAgaWYgKHNvcnRlZC5sZW5ndGggPT09IDApIHJldHVybiAnJztcblxuICBjb25zdCBXID0gMjAwO1xuICBjb25zdCBIID0gOTA7XG4gIGxldCBzdmcgPSBgPHN2ZyB3aWR0aD1cIiR7V31cIiBoZWlnaHQ9XCIke0h9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPmA7XG5cbiAgc3ZnICs9ICc8c3R5bGU+LnN0YWZmLWxpbmUsLmxlZGdlcntzdHJva2U6I2ZmZjtzdHJva2Utd2lkdGg6MX08L3N0eWxlPic7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSArPSAxKSB7XG4gICAgY29uc3QgeSA9IDIwICsgaSAqIDEwO1xuICAgIHN2ZyArPSBgPGxpbmUgY2xhc3M9XCJzdGFmZi1saW5lXCIgeDE9XCIwXCIgeTE9XCIke3l9XCIgeDI9XCIke1d9XCIgeTI9XCIke3l9XCIvPmA7XG4gIH1cbiAgc3ZnICs9ICc8dGV4dCB4PVwiOFwiIHk9XCI1MFwiIGZpbGw9XCIjZmZmXCIgZm9udC1zaXplPVwiNTJcIiBmb250LWZhbWlseT1cInNlcmlmXCI+XHVEODM0XHVERDFFPC90ZXh0Pic7XG5cbiAgY29uc3QgaXNTY2FsZSA9IG1vZGUgPT09ICdzY2FsZSc7XG4gIGNvbnN0IG5vdGVDb3VudCA9IHNvcnRlZC5sZW5ndGg7XG4gIGxldCBub3RlWDtcbiAgaWYgKGlzU2NhbGUpIHtcbiAgICBjb25zdCBzdGVwID0gbm90ZUNvdW50ID4gMSA/IDE1NCAvIChub3RlQ291bnQgLSAxKSA6IDA7XG4gICAgc29ydGVkLmZvckVhY2goKG4sIGkpID0+IHtcbiAgICAgIG4ueCA9IDM2ICsgaSAqIHN0ZXA7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgbm90ZVggPSA5MDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNvcnRlZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY3VyciA9IHNvcnRlZFtpXTtcbiAgICAgIGNvbnN0IHByZXYgPSBpID4gMCA/IHNvcnRlZFtpIC0gMV0gOiBudWxsO1xuICAgICAgY3Vyci54ID0gbm90ZVg7XG4gICAgICBpZiAocHJldiAmJiBNYXRoLmFicyhjdXJyLnBvcyAtIHByZXYucG9zKSA9PT0gMSkge1xuICAgICAgICBjdXJyLnggPSBwcmV2LnggKyAxMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzb3J0ZWQuZm9yRWFjaChuID0+IHtcbiAgICBjb25zdCB5ID0gcG9zVG9ZKG4ucG9zKTtcbiAgICBjb25zdCBtID0gbi5ub3RlLm1hdGNoKC9eKFthLWdBLUddKShbI2JdPykoXFxkKykkLyk7XG4gICAgY29uc3QgYWNjaWRlbnRhbCA9IG0gPyBtWzJdIDogJyc7XG4gICAgZm9yIChsZXQgcCA9IC0yOyBwID49IG4ucG9zOyBwIC09IDIpIHtcbiAgICAgIGNvbnN0IGx5ID0gcG9zVG9ZKHApO1xuICAgICAgc3ZnICs9IGA8bGluZSBjbGFzcz1cImxlZGdlclwiIHgxPVwiJHtuLnggLSA5fVwiIHkxPVwiJHtseX1cIiB4Mj1cIiR7bi54ICsgOX1cIiB5Mj1cIiR7bHl9XCIvPmA7XG4gICAgfVxuICAgIGZvciAobGV0IHAgPSAxMDsgcCA8PSBuLnBvczsgcCArPSAyKSB7XG4gICAgICBjb25zdCBseSA9IHBvc1RvWShwKTtcbiAgICAgIHN2ZyArPSBgPGxpbmUgY2xhc3M9XCJsZWRnZXJcIiB4MT1cIiR7bi54IC0gOX1cIiB5MT1cIiR7bHl9XCIgeDI9XCIke24ueCArIDl9XCIgeTI9XCIke2x5fVwiLz5gO1xuICAgIH1cbiAgICBpZiAoaXNTY2FsZSkge1xuICAgICAgc3ZnICs9IGA8ZWxsaXBzZSBjeD1cIiR7bi54fVwiIGN5PVwiJHt5fVwiIHJ4PVwiNVwiIHJ5PVwiNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI2ZmZlwiIHN0cm9rZS13aWR0aD1cIjEuMlwiIHRyYW5zZm9ybT1cInJvdGF0ZSgtMTUgJHtuLnh9ICR7eX0pXCIvPmA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN2ZyArPSBgPGVsbGlwc2UgY3g9XCIke24ueH1cIiBjeT1cIiR7eX1cIiByeD1cIjVcIiByeT1cIjRcIiBmaWxsPVwiI2ZmZlwiIHRyYW5zZm9ybT1cInJvdGF0ZSgtMTUgJHtuLnh9ICR7eX0pXCIvPmA7XG4gICAgfVxuICAgIGlmIChhY2NpZGVudGFsID09PSAnIycpIHtcbiAgICAgIHN2ZyArPSBgPHRleHQgeD1cIiR7bi54IC0gMTR9XCIgeT1cIiR7eSArIDR9XCIgZmlsbD1cIiNmZmZcIiBmb250LXNpemU9XCIxMFwiPlx1MjY2RjwvdGV4dD5gO1xuICAgIH0gZWxzZSBpZiAoYWNjaWRlbnRhbCA9PT0gJ2InKSB7XG4gICAgICBzdmcgKz0gYDx0ZXh0IHg9XCIke24ueCAtIDEyfVwiIHk9XCIke3kgKyA0fVwiIGZpbGw9XCIjZmZmXCIgZm9udC1zaXplPVwiMTFcIj5cdTI2NkQ8L3RleHQ+YDtcbiAgICB9XG4gIH0pO1xuXG4gIGlmICghaXNTY2FsZSAmJiBzb3J0ZWQubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IGxvd2VzdFBvcyA9IHNvcnRlZFswXS5wb3M7XG4gICAgY29uc3QgaGlnaGVzdFBvcyA9IHNvcnRlZFtzb3J0ZWQubGVuZ3RoIC0gMV0ucG9zO1xuICAgIGxldCBzdGVtRGlyID0gbG93ZXN0UG9zIDw9IDMgPyAndXAnIDogJ2Rvd24nO1xuICAgIGlmIChzdGVtRGlyID09PSAndXAnKSB7XG4gICAgICBjb25zdCBoaWdoWSA9IHBvc1RvWShoaWdoZXN0UG9zKTtcbiAgICAgIGNvbnN0IGhpZ2hYID0gc29ydGVkW3NvcnRlZC5sZW5ndGggLSAxXS54O1xuICAgICAgc3ZnICs9IGA8bGluZSB4MT1cIiR7aGlnaFggKyA1fVwiIHkxPVwiJHtoaWdoWX1cIiB4Mj1cIiR7aGlnaFggKyA1fVwiIHkyPVwiJHtoaWdoWSAtIDI4fVwiIHN0cm9rZT1cIiNmZmZcIiBzdHJva2Utd2lkdGg9XCIxLjJcIi8+YDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbG93WSA9IHBvc1RvWShsb3dlc3RQb3MpO1xuICAgICAgY29uc3QgbG93WCA9IHNvcnRlZFswXS54O1xuICAgICAgc3ZnICs9IGA8bGluZSB4MT1cIiR7bG93WCAtIDV9XCIgeTE9XCIke2xvd1l9XCIgeDI9XCIke2xvd1ggLSA1fVwiIHkyPVwiJHtsb3dZICsgMjh9XCIgc3Ryb2tlPVwiI2ZmZlwiIHN0cm9rZS13aWR0aD1cIjEuMlwiLz5gO1xuICAgIH1cbiAgfVxuXG4gIHN2ZyArPSAnPC9zdmc+JztcbiAgcmV0dXJuIHN2Zztcbn1cblxuZnVuY3Rpb24gY2xhbXBUb29sdGlwKHgsIHksIHdpZHRoID0gMzIwKSB7XG4gIGNvbnN0IG1heFggPSBNYXRoLm1heCg4LCB3aW5kb3cuaW5uZXJXaWR0aCAtIHdpZHRoIC0gOCk7XG4gIGNvbnN0IGxlZnQgPSBNYXRoLm1pbih4ICsgMTIsIG1heFgpO1xuICBjb25zdCB0b3AgPSBNYXRoLm1pbih5ICsgMTIsIHdpbmRvdy5pbm5lckhlaWdodCAtIDE3MCk7XG4gIHJldHVybiB7IGxlZnQsIHRvcCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWRpdG9yKGluaXRpYWxUZXh0LCBvcHRpb25zID0ge30pIHtcbiAgY29uc3Qgd3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3cmFwLmlkID0gJ2VkaXRvci13cmFwJztcblxuICBjb25zdCBwcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcmUnKTtcbiAgcHJlLmlkID0gJ2VkaXRvci1obCc7XG4gIHByZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblxuICBjb25zdCB0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIHRhLmlkID0gJ2VkaXRvcic7XG4gIHRhLnNwZWxsY2hlY2sgPSBmYWxzZTtcbiAgdGEuYXV0b2NvbXBsZXRlID0gJ29mZic7XG4gIHRhLnZhbHVlID0gaW5pdGlhbFRleHQ7XG5cbiAgY29uc3QgdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpcC5pZCA9ICd2YXItdG9vbHRpcCc7XG4gIHRpcC5oaWRkZW4gPSB0cnVlO1xuICB0aXAuaW5uZXJIVE1MID0gJzxzdHJvbmc+PC9zdHJvbmc+PHNwYW4gY2xhc3M9XCJ0b29sdGlwLXJlc29sdmVkXCI+PC9zcGFuPjxkaXYgY2xhc3M9XCJ0b29sdGlwLXN0YWZmXCI+PC9kaXY+JztcbiAgY29uc3QgdGlwVGl0bGUgPSB0aXAucXVlcnlTZWxlY3Rvcignc3Ryb25nJyk7XG4gIGNvbnN0IHRpcEJvZHkgPSB0aXAucXVlcnlTZWxlY3RvcignLnRvb2x0aXAtcmVzb2x2ZWQnKTtcbiAgY29uc3QgdGlwU3RhZmYgPSB0aXAucXVlcnlTZWxlY3RvcignLnRvb2x0aXAtc3RhZmYnKTtcblxuICBjb25zdCB0b29sdGlwSGFuZGxlcnMgPSBbXG4gICAgb3B0aW9ucy5yZXNvbHZlTm90ZSAmJiB7XG4gICAgICBhdHRyOiAnbm90ZScsXG4gICAgICByZXNvbHZlOiBvcHRpb25zLnJlc29sdmVOb3RlLFxuICAgICAgbm90ZXM6IHZhbHVlID0+IFt2YWx1ZV0sXG4gICAgICBzdGFmZk1vZGU6ICdzaW5nbGUnLFxuICAgICAgdGl0bGU6IHZhbHVlID0+IG5vcm1hbGl6ZU5vdGUodmFsdWUpLFxuICAgIH0sXG4gICAgb3B0aW9ucy5yZXNvbHZlQ2hvcmQgJiYge1xuICAgICAgYXR0cjogJ2Nob3JkJyxcbiAgICAgIHJlc29sdmU6IG9wdGlvbnMucmVzb2x2ZUNob3JkLFxuICAgICAgbm90ZXM6IHZhbHVlID0+IHZhbHVlLnNwbGl0KCd8JykubWFwKG5vcm1hbGl6ZU5vdGUpLFxuICAgICAgc3RhZmZNb2RlOiAnY2hvcmQnLFxuICAgICAgdGl0bGU6ICgpID0+ICdDaG9yZCcsXG4gICAgfSxcbiAgICBvcHRpb25zLnJlc29sdmVNb2RlICYmIHtcbiAgICAgIGF0dHI6ICdtb2RlJyxcbiAgICAgIHJlc29sdmU6IG9wdGlvbnMucmVzb2x2ZU1vZGUsXG4gICAgICBub3Rlczogb3B0aW9ucy5yZXNvbHZlTW9kZU5vdGVzLFxuICAgICAgc3RhZmZNb2RlOiAnc2NhbGUnLFxuICAgICAgdGl0bGU6IHZhbHVlID0+IHZhbHVlLFxuICAgIH0sXG4gICAgb3B0aW9ucy5yZXNvbHZlSW5zdHJ1bWVudCAmJiB7XG4gICAgICBhdHRyOiAnaW5zdHJ1bWVudCcsXG4gICAgICByZXNvbHZlOiBvcHRpb25zLnJlc29sdmVJbnN0cnVtZW50LFxuICAgICAgdGl0bGU6IHZhbHVlID0+IGAjJHt2YWx1ZX1gLFxuICAgIH0sXG4gICAgb3B0aW9ucy5yZXNvbHZlU2VjdGlvbiAmJiB7XG4gICAgICBhdHRyOiAnc2VjdGlvbicsXG4gICAgICByZXNvbHZlOiBvcHRpb25zLnJlc29sdmVTZWN0aW9uLFxuICAgICAgdGl0bGU6IHZhbHVlID0+IGBAJHt2YWx1ZX1gLFxuICAgIH0sXG4gICAgb3B0aW9ucy5yZXNvbHZlVmFyICYmIHtcbiAgICAgIGF0dHI6ICd2YXInLFxuICAgICAgcmVzb2x2ZTogb3B0aW9ucy5yZXNvbHZlVmFyLFxuICAgICAgdGl0bGU6IHZhbHVlID0+IHZhbHVlLFxuICAgIH0sXG4gICAge1xuICAgICAgYXR0cjogJ3BhdHRlcm4nLFxuICAgICAgcmVzb2x2ZTogKCkgPT4gJ3ggPSBoaXQgIHwgIC0gPSBob2xkICB8ICBfID0gcmVzdCAgfCAgWyBdID0gc3ViZGl2aWRlJyxcbiAgICAgIHRpdGxlOiAoKSA9PiAnUmh5dGhtIHBhdHRlcm4nLFxuICAgIH0sXG4gIF0uZmlsdGVyKEJvb2xlYW4pO1xuXG4gIGZ1bmN0aW9uIHN5bmMoKSB7XG4gICAgcHJlLmlubmVySFRNTCA9IGAke2hpZ2hsaWdodCh0YS52YWx1ZSl9XFxuYDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVUb29sdGlwKCkge1xuICAgIHRpcC5oaWRkZW4gPSB0cnVlO1xuICAgIHRpcFN0YWZmLmlubmVySFRNTCA9ICcnO1xuICAgIHRpcFN0YWZmLmhpZGRlbiA9IHRydWU7XG4gIH1cblxuICB0YS5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgcHJlLnNjcm9sbFRvcCA9IHRhLnNjcm9sbFRvcDtcbiAgICBwcmUuc2Nyb2xsTGVmdCA9IHRhLnNjcm9sbExlZnQ7XG4gIH0pO1xuXG4gIHRhLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIHN5bmMoKTtcbiAgICBoaWRlVG9vbHRpcCgpO1xuICAgIGlmIChvcHRpb25zLm9uSW5wdXQpIG9wdGlvbnMub25JbnB1dCh0YS52YWx1ZSk7XG4gIH0pO1xuXG4gIHRhLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGUgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQoZS5jbGllbnRYLCBlLmNsaWVudFkpO1xuICAgIGNvbnN0IGZvdW5kID0gdG9vbHRpcEhhbmRsZXJzXG4gICAgICAubWFwKGhhbmRsZXIgPT4ge1xuICAgICAgICBjb25zdCBoaXQgPSBlbGVtZW50cy5maW5kKGVsID0+IGVsLmRhdGFzZXQgJiYgZWwuZGF0YXNldFtoYW5kbGVyLmF0dHJdKTtcbiAgICAgICAgcmV0dXJuIGhpdCA/IHsgaGFuZGxlciwgdmFsdWU6IGhpdC5kYXRhc2V0W2hhbmRsZXIuYXR0cl0gfSA6IG51bGw7XG4gICAgICB9KVxuICAgICAgLmZpbmQoQm9vbGVhbik7XG4gICAgaWYgKCFmb3VuZCkge1xuICAgICAgaGlkZVRvb2x0aXAoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdGV4dCA9IGZvdW5kLmhhbmRsZXIucmVzb2x2ZShmb3VuZC52YWx1ZSk7XG4gICAgaWYgKCF0ZXh0KSB7XG4gICAgICBoaWRlVG9vbHRpcCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwb3MgPSBjbGFtcFRvb2x0aXAoZS5jbGllbnRYLCBlLmNsaWVudFkpO1xuICAgIHRpcFRpdGxlLnRleHRDb250ZW50ID0gZm91bmQuaGFuZGxlci50aXRsZShmb3VuZC52YWx1ZSk7XG4gICAgdGlwQm9keS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgaWYgKGZvdW5kLmhhbmRsZXIubm90ZXMpIHtcbiAgICAgIGNvbnN0IG5vdGVBcnIgPSBmb3VuZC5oYW5kbGVyLm5vdGVzKGZvdW5kLnZhbHVlKTtcbiAgICAgIGlmIChub3RlQXJyICYmIG5vdGVBcnIubGVuZ3RoKSB7XG4gICAgICAgIHRpcFN0YWZmLmlubmVySFRNTCA9IGJ1aWxkU3RhZmZTVkcobm90ZUFyciwgZm91bmQuaGFuZGxlci5zdGFmZk1vZGUpO1xuICAgICAgICB0aXBTdGFmZi5oaWRkZW4gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpcFN0YWZmLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB0aXBTdGFmZi5oaWRkZW4gPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aXBTdGFmZi5pbm5lckhUTUwgPSAnJztcbiAgICAgIHRpcFN0YWZmLmhpZGRlbiA9IHRydWU7XG4gICAgfVxuICAgIHRpcC5zdHlsZS5sZWZ0ID0gYCR7cG9zLmxlZnR9cHhgO1xuICAgIHRpcC5zdHlsZS50b3AgPSBgJHtwb3MudG9wfXB4YDtcbiAgICB0aXAuaGlkZGVuID0gZmFsc2U7XG4gIH0pO1xuXG4gIHRhLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBoaWRlVG9vbHRpcCk7XG5cbiAgc3luYygpO1xuICB3cmFwLmFwcGVuZENoaWxkKHByZSk7XG4gIHdyYXAuYXBwZW5kQ2hpbGQodGEpO1xuICB3cmFwLmFwcGVuZENoaWxkKHRpcCk7XG5cbiAgcmV0dXJuIHtcbiAgICBlbDogd3JhcCxcbiAgICB0ZXh0YXJlYTogdGEsXG4gICAgb246IChldmVudCwgZm4pID0+IHRhLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZuKSxcbiAgICBnZXRWYWx1ZTogKCkgPT4gdGEudmFsdWUsXG4gICAgc2V0VmFsdWU6IHZhbHVlID0+IHtcbiAgICAgIHRhLnZhbHVlID0gdmFsdWU7XG4gICAgICBzeW5jKCk7XG4gICAgICBoaWRlVG9vbHRpcCgpO1xuICAgIH0sXG4gICAgZm9jdXM6ICgpID0+IHRhLmZvY3VzKCksXG4gIH07XG59XG4iLCAiZnVuY3Rpb24gY2xhbXAodmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHZhbHVlKSk7XG59XG5cbmZ1bmN0aW9uIHNob3J0TmFtZShuYW1lKSB7XG4gIGNvbnN0IHBhcnRzID0gU3RyaW5nKG5hbWUgfHwgJycpLnNwbGl0KC9cXHMrLykuZmlsdGVyKEJvb2xlYW4pO1xuICBpZiAoIXBhcnRzLmxlbmd0aCkgcmV0dXJuICd0cmFjayc7XG4gIHJldHVybiBwYXJ0cy5zbGljZSgwLCAyKS5qb2luKCcgJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNaXhlcihwbGF5ZXIsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXNpZGUnKTtcbiAgcm9vdC5pZCA9ICdtaXhlci1wYW5lbCc7XG4gIHJvb3QuY2xhc3NOYW1lID0gJ2NvbGxhcHNlZCc7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9ICdNaXhlcic7XG5cbiAgY29uc3Qgc3RyaXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHN0cmlwcy5pZCA9ICdtaXhlci1zdHJpcHMnO1xuICBjb25zdCB0cmFuc3BvcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdHJhbnNwb3J0LmlkID0gJ21peGVyLXRyYW5zcG9ydCc7XG5cbiAgY29uc3QgZnggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZnguaWQgPSAnbWl4ZXItZngnO1xuXG4gIGNvbnN0IGluaXRpYWxUZW1wbyA9IG9wdGlvbnMudGVtcG8gfHwgMTQ2O1xuICBjb25zdCBpbml0aWFsQmFycyA9IG9wdGlvbnMuYmFycyB8fCA4O1xuICBjb25zdCBpbml0aWFsVHJhbnNwb3NlID0gb3B0aW9ucy50cmFuc3Bvc2UgfHwgMDtcblxuICBjb25zdCBicG1Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBicG1Sb3cuY2xhc3NOYW1lID0gJ3RyYW5zcG9ydC1yb3cnO1xuICBicG1Sb3cudGV4dENvbnRlbnQgPSAnQlBNJztcbiAgY29uc3QgYnBtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgYnBtLnR5cGUgPSAncmFuZ2UnO1xuICBicG0ubWluID0gJzYwJztcbiAgYnBtLm1heCA9ICcyMDAnO1xuICBicG0udmFsdWUgPSBTdHJpbmcoaW5pdGlhbFRlbXBvKTtcbiAgY29uc3QgYnBtVmFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBicG1WYWwuY2xhc3NOYW1lID0gJ3RyYW5zcG9ydC12YWwnO1xuICBicG1WYWwudGV4dENvbnRlbnQgPSBTdHJpbmcoaW5pdGlhbFRlbXBvKTtcbiAgYnBtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIGJwbVZhbC50ZXh0Q29udGVudCA9IGJwbS52YWx1ZTtcbiAgICBpZiAob3B0aW9ucy5vbkNoYW5nZSkge1xuICAgICAgb3B0aW9ucy5vbkNoYW5nZSh7IHRlbXBvOiBwYXJzZUludChicG0udmFsdWUsIDEwKSB9KTtcbiAgICB9XG4gIH0pO1xuICBicG1Sb3cuYXBwZW5kQ2hpbGQoYnBtKTtcbiAgYnBtUm93LmFwcGVuZENoaWxkKGJwbVZhbCk7XG5cbiAgY29uc3QgYmFyc1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGJhcnNSb3cuY2xhc3NOYW1lID0gJ3RyYW5zcG9ydC1yb3cnO1xuICBiYXJzUm93LnRleHRDb250ZW50ID0gJ0JBUlMnO1xuICBjb25zdCBiYXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIFs0LCA4LCAxNiwgMzJdLmZvckVhY2godmFsdWUgPT4ge1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbi52YWx1ZSA9IFN0cmluZyh2YWx1ZSk7XG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gU3RyaW5nKHZhbHVlKTtcbiAgICBpZiAodmFsdWUgPT09IGluaXRpYWxCYXJzKSBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIGJhcnMuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgfSk7XG4gIGJhcnMuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIGlmIChvcHRpb25zLm9uQ2hhbmdlKSB7XG4gICAgICBvcHRpb25zLm9uQ2hhbmdlKHsgYmFyczogcGFyc2VJbnQoYmFycy52YWx1ZSwgMTApIH0pO1xuICAgIH1cbiAgfSk7XG4gIGJhcnNSb3cuYXBwZW5kQ2hpbGQoYmFycyk7XG5cbiAgY29uc3Qga2V5Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAga2V5Um93LmNsYXNzTmFtZSA9ICd0cmFuc3BvcnQtcm93JztcbiAga2V5Um93LnRleHRDb250ZW50ID0gJ0tFWSc7XG4gIGNvbnN0IGtleSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGtleS50eXBlID0gJ3JhbmdlJztcbiAga2V5Lm1pbiA9ICctMTInO1xuICBrZXkubWF4ID0gJzEyJztcbiAga2V5LnZhbHVlID0gU3RyaW5nKGluaXRpYWxUcmFuc3Bvc2UpO1xuICBjb25zdCBrZXlWYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGtleVZhbC5jbGFzc05hbWUgPSAndHJhbnNwb3J0LXZhbCc7XG4gIGtleVZhbC50ZXh0Q29udGVudCA9IFN0cmluZyhpbml0aWFsVHJhbnNwb3NlID4gMCA/IGArJHtpbml0aWFsVHJhbnNwb3NlfWAgOiBpbml0aWFsVHJhbnNwb3NlKTtcbiAga2V5LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQoa2V5LnZhbHVlLCAxMCk7XG4gICAga2V5VmFsLnRleHRDb250ZW50ID0gdmFsdWUgPiAwID8gYCske3ZhbHVlfWAgOiBTdHJpbmcodmFsdWUpO1xuICAgIGlmIChvcHRpb25zLm9uQ2hhbmdlKSB7XG4gICAgICBvcHRpb25zLm9uQ2hhbmdlKHsgdHJhbnNwb3NlOiB2YWx1ZSB9KTtcbiAgICB9XG4gIH0pO1xuICBrZXlSb3cuYXBwZW5kQ2hpbGQoa2V5KTtcbiAga2V5Um93LmFwcGVuZENoaWxkKGtleVZhbCk7XG5cbiAgdHJhbnNwb3J0LmFwcGVuZENoaWxkKGJwbVJvdyk7XG4gIHRyYW5zcG9ydC5hcHBlbmRDaGlsZChiYXJzUm93KTtcbiAgdHJhbnNwb3J0LmFwcGVuZENoaWxkKGtleVJvdyk7XG5cbiAgY29uc3QgZGVsYXlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGRlbGF5TGFiZWwudGV4dENvbnRlbnQgPSAnRGVsYXkgVGltZSc7XG4gIGNvbnN0IGRlbGF5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIFtcbiAgICBbJzEvNCcsIDEgLyA0XSxcbiAgICBbJzMvOCcsIDMgLyA4XSxcbiAgICBbJzEvMicsIDEgLyAyXSxcbiAgICBbJzMvNCcsIDMgLyA0XSxcbiAgXS5mb3JFYWNoKChbbGFiZWwsIHZhbHVlXSkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGxhYmVsO1xuICAgIG9wdGlvbi52YWx1ZSA9IFN0cmluZyh2YWx1ZSk7XG4gICAgaWYgKHZhbHVlID09PSBwbGF5ZXIuZGVsYXlEaXZpc2lvbikgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICBkZWxheVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9KTtcbiAgZGVsYXlTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIHBsYXllci5zZXREZWxheVRpbWUocGFyc2VGbG9hdChkZWxheVNlbGVjdC52YWx1ZSkpO1xuICB9KTtcbiAgZGVsYXlMYWJlbC5hcHBlbmRDaGlsZChkZWxheVNlbGVjdCk7XG5cbiAgY29uc3QgZmVlZGJhY2tMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGZlZWRiYWNrTGFiZWwudGV4dENvbnRlbnQgPSAnRmVlZGJhY2snO1xuICBjb25zdCBmZWVkYmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGZlZWRiYWNrLnR5cGUgPSAncmFuZ2UnO1xuICBmZWVkYmFjay5taW4gPSAnMCc7XG4gIGZlZWRiYWNrLm1heCA9ICc3NSc7XG4gIGZlZWRiYWNrLnZhbHVlID0gJzM1JztcbiAgZmVlZGJhY2suYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgcGxheWVyLnNldERlbGF5RmVlZGJhY2socGFyc2VJbnQoZmVlZGJhY2sudmFsdWUsIDEwKSAvIDEwMCk7XG4gIH0pO1xuICBmZWVkYmFja0xhYmVsLmFwcGVuZENoaWxkKGZlZWRiYWNrKTtcblxuICBmeC5hcHBlbmRDaGlsZChkZWxheUxhYmVsKTtcbiAgZnguYXBwZW5kQ2hpbGQoZmVlZGJhY2tMYWJlbCk7XG5cbiAgcm9vdC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIHJvb3QuYXBwZW5kQ2hpbGQodHJhbnNwb3J0KTtcbiAgcm9vdC5hcHBlbmRDaGlsZChzdHJpcHMpO1xuICByb290LmFwcGVuZENoaWxkKGZ4KTtcblxuICBjb25zdCBzdHJpcE1hcCA9IG5ldyBNYXAoKTtcblxuICBmdW5jdGlvbiBjcmVhdGVTdHJpcChrZXksIGxhYmVsKSB7XG4gICAgY29uc3Qgc3RhdGUgPSBwbGF5ZXIuZ2V0VHJhY2tTdGF0ZShrZXkpO1xuICAgIGNvbnN0IHN0cmlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3RyaXAuY2xhc3NOYW1lID0gJ20tc3RyaXAnO1xuICAgIHN0cmlwLmRhdGFzZXQua2V5ID0ga2V5O1xuXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hbWUuY2xhc3NOYW1lID0gJ20tbmFtZSc7XG4gICAgbmFtZS50ZXh0Q29udGVudCA9IHNob3J0TmFtZShsYWJlbCk7XG4gICAgbmFtZS50aXRsZSA9IGxhYmVsO1xuXG4gICAgY29uc3QgdnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2dS5jbGFzc05hbWUgPSAnbS12dSc7XG5cbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByb3cuY2xhc3NOYW1lID0gJ20tcm93JztcblxuICAgIGNvbnN0IHNvbG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzb2xvLmNsYXNzTmFtZSA9ICdtLWJ0bic7XG4gICAgc29sby50ZXh0Q29udGVudCA9ICdTJztcbiAgICBjb25zdCBtdXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbXV0ZS5jbGFzc05hbWUgPSAnbS1idG4nO1xuICAgIG11dGUudGV4dENvbnRlbnQgPSAnTSc7XG5cbiAgICBjb25zdCB2b2x1bWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHZvbHVtZS50eXBlID0gJ3JhbmdlJztcbiAgICB2b2x1bWUuY2xhc3NOYW1lID0gJ20tc2xpZGVyJztcbiAgICB2b2x1bWUubWluID0gJzAnO1xuICAgIHZvbHVtZS5tYXggPSAnMTAwJztcbiAgICB2b2x1bWUudmFsdWUgPSBTdHJpbmcoTWF0aC5yb3VuZChzdGF0ZS52b2x1bWUgKiAxMDApKTtcblxuICAgIGNvbnN0IHJldmVyYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcmV2ZXJiLnR5cGUgPSAncmFuZ2UnO1xuICAgIHJldmVyYi5jbGFzc05hbWUgPSAnbS1zZW5kJztcbiAgICByZXZlcmIubWluID0gJzAnO1xuICAgIHJldmVyYi5tYXggPSAnMTAwJztcbiAgICByZXZlcmIudmFsdWUgPSBTdHJpbmcoTWF0aC5yb3VuZChzdGF0ZS5yZXZlcmJTZW5kICogMTAwKSk7XG5cbiAgICBjb25zdCBkZWxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGVsYXkudHlwZSA9ICdyYW5nZSc7XG4gICAgZGVsYXkuY2xhc3NOYW1lID0gJ20tc2VuZCc7XG4gICAgZGVsYXkubWluID0gJzAnO1xuICAgIGRlbGF5Lm1heCA9ICcxMDAnO1xuICAgIGRlbGF5LnZhbHVlID0gU3RyaW5nKE1hdGgucm91bmQoc3RhdGUuZGVsYXlTZW5kICogMTAwKSk7XG5cbiAgICBjb25zdCBzZW5kcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlbmRzLmNsYXNzTmFtZSA9ICdtLXNlbmRzJztcbiAgICBjb25zdCByV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcldyYXAudGV4dENvbnRlbnQgPSAnUmV2JztcbiAgICByV3JhcC5hcHBlbmRDaGlsZChyZXZlcmIpO1xuICAgIGNvbnN0IGRXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkV3JhcC50ZXh0Q29udGVudCA9ICdEbHknO1xuICAgIGRXcmFwLmFwcGVuZENoaWxkKGRlbGF5KTtcbiAgICBzZW5kcy5hcHBlbmRDaGlsZChyV3JhcCk7XG4gICAgc2VuZHMuYXBwZW5kQ2hpbGQoZFdyYXApO1xuXG4gICAgZnVuY3Rpb24gc3luY0J1dHRvbnMoKSB7XG4gICAgICBjb25zdCBjdXIgPSBwbGF5ZXIuZ2V0VHJhY2tTdGF0ZShrZXkpO1xuICAgICAgc29sby5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnLCBjdXIuc29sbyk7XG4gICAgICBtdXRlLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIGN1ci5tdXRlZCk7XG4gICAgfVxuXG4gICAgc29sby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGN1ciA9IHBsYXllci5nZXRUcmFja1N0YXRlKGtleSk7XG4gICAgICBwbGF5ZXIuc2V0U29sbyhrZXksICFjdXIuc29sbyk7XG4gICAgICBzeW5jQnV0dG9ucygpO1xuICAgIH0pO1xuICAgIG11dGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBjdXIgPSBwbGF5ZXIuZ2V0VHJhY2tTdGF0ZShrZXkpO1xuICAgICAgcGxheWVyLnNldE11dGUoa2V5LCAhY3VyLm11dGVkKTtcbiAgICAgIHN5bmNCdXR0b25zKCk7XG4gICAgfSk7XG4gICAgdm9sdW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgcGxheWVyLnNldFZvbHVtZShrZXksIGNsYW1wKHBhcnNlSW50KHZvbHVtZS52YWx1ZSwgMTApIC8gMTAwKSk7XG4gICAgfSk7XG4gICAgcmV2ZXJiLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgcGxheWVyLnNldFJldmVyYlNlbmQoa2V5LCBjbGFtcChwYXJzZUludChyZXZlcmIudmFsdWUsIDEwKSAvIDEwMCkpO1xuICAgIH0pO1xuICAgIGRlbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgcGxheWVyLnNldERlbGF5U2VuZChrZXksIGNsYW1wKHBhcnNlSW50KGRlbGF5LnZhbHVlLCAxMCkgLyAxMDApKTtcbiAgICB9KTtcblxuICAgIHJvdy5hcHBlbmRDaGlsZChzb2xvKTtcbiAgICByb3cuYXBwZW5kQ2hpbGQobXV0ZSk7XG4gICAgcm93LmFwcGVuZENoaWxkKHZvbHVtZSk7XG5cbiAgICBzdHJpcC5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICBzdHJpcC5hcHBlbmRDaGlsZCh2dSk7XG4gICAgc3RyaXAuYXBwZW5kQ2hpbGQocm93KTtcbiAgICBzdHJpcC5hcHBlbmRDaGlsZChzZW5kcyk7XG4gICAgc3RyaXBzLmFwcGVuZENoaWxkKHN0cmlwKTtcblxuICAgIHN5bmNCdXR0b25zKCk7XG4gICAgcmV0dXJuIHsgZWw6IHN0cmlwLCB2dSwgbmFtZSwgc3luY0J1dHRvbnMgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZShkYXRhKSB7XG4gICAgY29uc3QgZW50cmllcyA9IEFycmF5LmlzQXJyYXkoZGF0YSlcbiAgICAgID8gZGF0YS5tYXAodHJhY2sgPT4gKHsga2V5OiBgJHt0cmFja1swXX0vJHt0cmFja1sxXX1gLCBuYW1lOiB0cmFja1sxXSB9KSlcbiAgICAgIDogW107XG4gICAgY29uc3QgbmV4dEtleXMgPSBuZXcgU2V0KGVudHJpZXMubWFwKGl0ZW0gPT4gaXRlbS5rZXkpKTtcblxuICAgIHN0cmlwTWFwLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIGlmICghbmV4dEtleXMuaGFzKGtleSkpIHtcbiAgICAgICAgdmFsdWUuZWwucmVtb3ZlKCk7XG4gICAgICAgIHN0cmlwTWFwLmRlbGV0ZShrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZW50cmllcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYgKCFzdHJpcE1hcC5oYXMoaXRlbS5rZXkpKSB7XG4gICAgICAgIHN0cmlwTWFwLnNldChpdGVtLmtleSwgY3JlYXRlU3RyaXAoaXRlbS5rZXksIGl0ZW0ubmFtZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc3RyaXAgPSBzdHJpcE1hcC5nZXQoaXRlbS5rZXkpO1xuICAgICAgICBzdHJpcC5uYW1lLnRleHRDb250ZW50ID0gc2hvcnROYW1lKGl0ZW0ubmFtZSk7XG4gICAgICAgIHN0cmlwLm5hbWUudGl0bGUgPSBpdGVtLm5hbWU7XG4gICAgICAgIHN0cmlwLnN5bmNCdXR0b25zKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBmbGFzaFZVKGtleSkge1xuICAgIGNvbnN0IHN0cmlwID0gc3RyaXBNYXAuZ2V0KGtleSk7XG4gICAgaWYgKCFzdHJpcCkgcmV0dXJuO1xuICAgIHN0cmlwLnZ1LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc3RyaXAudnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyksIDgwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZShmb3JjZU9wZW4pIHtcbiAgICBjb25zdCBvcGVuID0gdHlwZW9mIGZvcmNlT3BlbiA9PT0gJ2Jvb2xlYW4nID8gZm9yY2VPcGVuIDogcm9vdC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbGxhcHNlZCcpO1xuICAgIHJvb3QuY2xhc3NMaXN0LnRvZ2dsZSgnY29sbGFwc2VkJywgIW9wZW4pO1xuICAgIHJldHVybiBvcGVuO1xuICB9XG5cbiAgZnVuY3Rpb24gc3luY1RyYW5zcG9ydChuZXh0ID0ge30pIHtcbiAgICBpZiAodHlwZW9mIG5leHQudGVtcG8gPT09ICdudW1iZXInKSB7XG4gICAgICBicG0udmFsdWUgPSBTdHJpbmcobmV4dC50ZW1wbyk7XG4gICAgICBicG1WYWwudGV4dENvbnRlbnQgPSBTdHJpbmcobmV4dC50ZW1wbyk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbmV4dC5iYXJzID09PSAnbnVtYmVyJykge1xuICAgICAgYmFycy52YWx1ZSA9IFN0cmluZyhuZXh0LmJhcnMpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG5leHQudHJhbnNwb3NlID09PSAnbnVtYmVyJykge1xuICAgICAga2V5LnZhbHVlID0gU3RyaW5nKG5leHQudHJhbnNwb3NlKTtcbiAgICAgIGtleVZhbC50ZXh0Q29udGVudCA9IG5leHQudHJhbnNwb3NlID4gMCA/IGArJHtuZXh0LnRyYW5zcG9zZX1gIDogU3RyaW5nKG5leHQudHJhbnNwb3NlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBlbDogcm9vdCwgdXBkYXRlLCBmbGFzaFZVLCB0b2dnbGUsIHN5bmNUcmFuc3BvcnQgfTtcbn1cbiIsICJpbXBvcnQgeyBzY2FsZSB9IGZyb20gJ2hhcm1vbmljcyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vY29tcG9uZW50cy9wbGF5ZXIuanMnO1xuaW1wb3J0IHsgcGFyc2UsIG1lcmdlIH0gZnJvbSAnLi9saWInO1xuaW1wb3J0IHsgcmVkdWNlIH0gZnJvbSAnLi9saWIvcGFyc2VyLmpzJztcbmltcG9ydCB7IGNyZWF0ZUVkaXRvciB9IGZyb20gJy4vY29tcG9uZW50cy9lZGl0b3IuanMnO1xuaW1wb3J0IHsgY3JlYXRlTWl4ZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvbWl4ZXIuanMnO1xuXG5sZXQgdGVtcG8gPSAxNDY7XG5sZXQgYmFycyA9IDg7XG5sZXQgdHJhbnNwb3NlID0gMDtcbmxldCBwbGF5aW5nID0gZmFsc2U7XG5sZXQgZGVib3VuY2VUaW1lciA9IG51bGw7XG5sZXQgc3RhdHVzUmVzZXRUaW1lciA9IG51bGw7XG5sZXQgZWRpdG9yQXBpID0gbnVsbDtcbmxldCBtaXhlckFwaSA9IG51bGw7XG5sZXQgbGFzdENvbnRleHQgPSBudWxsO1xuXG5jb25zdCBwID0gd2luZG93LnAgfHwgbmV3IFBsYXllcigpO1xud2luZG93LnAgPSBwO1xuXG5jb25zdCBTVE9SQUdFX0tFWSA9ICdzY29vcHM6ZHJhZnQnO1xuXG5jb25zdCBCSUxMWV9KRUFOID0gYFxuICAlRiBhM3xjIzR8ZiM0XG4gICVHIGIzfGQjNHxnIzRcbiAgJUEgYyM0fGU0fGE0XG4gICVFIGIzfGQ0fGYjNFxuICAlQyBkM3xmIzR8YTQgOyBob3cgdG8gc3VtIG5vdGVzIHRvIGNob3Jkcz9cbiAgJUIgYyM0fGY0fGcjM3xiNFxuXG4gICMgc3ludGhcbiAgICBASU5UUk9cbiAgICAgICM1MTggICAgICAtLS0tIC0tLS0gLS0tLSAtLS0tIC0tLS0gLS0tLSAtLS0tIC0tLS1cbiAgICBATiA8IElOVFJPXG4gICAgQEFcbiAgICAgICM1MTggNzUgICB4LS0tIC0teC0gLS0tLSAtLS0tIHgtLS0gLS14LSAtLS0tIC0tLS0gJUYgJUcgJUEgJUdcbiAgICBAQiA8IEFcbiAgICAgICM1MTggICAgICAlRSAlICUgJVxuICAgIEBDIDwgQVxuICAgICAgIzUxOCAgICAgICVDICUgJUYgJVxuICAgIEBEIDwgQVxuICAgICAgIzUxOCAgICAgICVDICUgJUIgJVxuXG4gICMjIGJhc3NcbiAgICAlYyBmIzIgYyMyIGUyIGYjMiBlMiBjIzIgYjEgYyMyXG4gICAgJWQgYjIgYTIgYjIgZDMgZDMgYjIgYTIgOyBob3cgdG8gdHJhbnNwb3NlP1xuICAgIEBJTlRST1xuICAgICAgIzM5MyAgICAgIC0tLS0gLS0tLSAtLS0tIC0tLS0gLS0tLSAtLS0tIC0tLS0gLS0tLVxuICAgIEBBXG4gICAgICAjMzkzICAxMTIgeC14LSB4LXgtIHgteC0geC14LSB4LXgtIHgteC0geC14LSB4LXgtICVjICVcbiAgICBATiA8IEFcbiAgICBAQlxuICAgICAgIzM5MyAgICAgIHgteC0geC14LSAtLXgtIHgteC0geC14LSB4LXgtIC0teC0geC14LSAlZCAlXG4gICAgQEMgPCBJTlRST1xuICAgIEBEIDwgSU5UUk9cblxuICAjIyBkcnVtc1xuICAgIEBJTlRST1xuICAgICAgIzIxMjMgICAgIC0tLS0gLS0tLSAtLS0tIC0tLS0gLS0tLSAtLS0tIC0tLS0gLS0tLVxuICAgICAgIzIwODEgNTAgIHgteC0geC14LSB4LXgtIHgteC0geC14LSB4LXgtIHgteC0geC14LVxuICAgICAgIzIwMjggICAgIC0tLS0geC0tLSAtLS0tIHgtLS0gLS0tLSB4LS0tIC0tLS0geC0tLVxuICAgICAgIzIwMDEgICAgIHgtLS0gLS0tLSB4LS0tIC0tLS0geC0tLSAtLS0tIHgtLS0gLS0tLVxuICAgIEBBIDwgSU5UUk9cbiAgICAgICMyMTIzIDkwICB4LS0tIHgtLS0geC0tLSB4LS0tIHgtLS0geC0tLSB4LS0tIHgtLS1cbiAgICAgICMyMTIzIDcwICAtLXgtIC0teC0gLS14LSAtLXgtIC0teC0gLS14LSAtLXgtIC0teC1cbiAgICBATiA8IEFcbiAgICBAQiA8IEFcbiAgICBAQyA8IEFcbiAgICBARCA8IEFcblxuICA+IElOVFJPIE4gKjIgQSAlXG4gID4gQSAlIEIgQSBCIEFcbiAgPiBBICUgQiBBIEMgKjMgRFxuICA+IEEgJSBCIEEgQiBBXG4gID4gQSAlIEIgQSBCIEFcbiAgPiBBICUgQiBBIEMgKjMgRFxuICA+IEEgJSBCIEEgQiBBXG5gO1xuXG5jb25zdCBURVRSSVMgPSBgXG4lYSBFNCBCMyBDNCBENCBDNCBCMyBBM1xuJWIgQTMgQzQgRTQgRDQgQzQgQjNcbiVjIEIzIEM0IEQ0IEU0IEM0IEEzIEEzXG5cbiVkIEQ0IEY0IEE0IEc0IEY0IEU0XG4lZSBFNCBDNCBFNCBENCBDNCBCM1xuXG4lZiBFNCBDNCBENCBCMyBDNCBBMyBBYjMgQjNcbiVnIEU0IEM0IEQ0IEIzIEM0IEU0IEEzIEFiM1xuXG4jIHBpYW5vXG4gIEBBXG4gICAgIzMgeC14eCB4LXh4IHgteHggeC14eCB4LXh4IHgteC0geC14LSB4LS0tICVhICViICVjXG4gIEBCXG4gICAgIzMgLXgteCB4LXh4IHgteHggeC14eCB4LXh4IHgteC0geC14LSB4LS0tICVkICVlICVjXG4gIEBDXG4gICAgIzMgeC0tLSB4LS0tIHgtLS0geC0tLSB4LS0tIHgtLS0geC0tLSB4LS0tICVmXG4gIEBEIDwgQ1xuICAgICMzICVnXG5cbiV4IEUyIEUyIEEyIEEyIEFiMiBFMiBBMlxuJXkgRDIgRDIgQzIgQzIgRTIgRTIgQTJcbiV6IEEyIEEyIEFiMiBBYjIgQTIgQTIgQWIzXG4lel8gQTIgQTIgQWIyIEFiMiBBMiBBMiBBNCBBYjRcblxuIyBiYXNzXG4gIEBBXG4gICAgIzIgeC0tLSB4LS0tIHgtLS0geC0tLSB4LS0tIHgtLS0geC0tLSAtLS0tICV4XG4gIEBCIDwgQVxuICAgICMyICV5XG4gIEBDIDwgQVxuICAgICMyICV6XG4gIEBEXG4gICAgIzIgeC0tLSB4LS0tIHgtLS0geC0tLSB4LS0tIHgteC0geC0tLSAtLS0tICV6X1xuXG4+IEEgQiBBIEIgQyBEXG5gLnRyaW0oKTtcblxuY29uc3QgUExBWUdST1VORCA9IGBcbiVhIEM0IHBocnlnaWFuLi4gKysgSSBJIElJSSBJVlxuXG4jIHNjYWxlc1xuICBAQVxuICAgICMzIDEwMCAteC14IC14LXggLXgteCAteC14ICVhICVhXG5cbiMjIGRydW1zXG4gIEBBXG4gICAgIzAgMTIwIFt4eF0tW3h4XS0gW3h4XS1beHhdLSBkIzFcbiAgICAjMCAxMTAgLXgteCAteC14IGQyXG4gICAgIzAgMTAwIFt4eF1beHhdW3h4XVt4eF0gW3h4XVt4eF1beHhdW3h4XSBmIzJcblxuPiBBICo0XG5gLnRyaW0oKTtcblxuY29uc3QgTE9DS1MgPSBgXG4lQ20gYzR8ZWI0fGc0ICVcbiVGbSBjNHxmNHxnIzQgJVxuXG4jIGRydW1zXG4gIEBBXG4gICAgIzAgMTI3IHh4eHh4eHh4eHh4W3h4XXh4eHggW3h4XXh4eHh4eHh4eHh4eHh4eCBmIzJcbiAgICAjMCAxMjcgLS14LS0teC0tLXgteC14W3h4XSAtLXgtLS14LS0teC0tWy14XXgtIGMjMlxuICAgICMwIDkwICAtLS0tLS0tLS0tLS0tLS0teF9fXy0tLS0tLS0tLS0tLSBhM1xuICAgICMwIDEyMCAtLVt4eF0tLS1beHhdLS0tW3h4XS0tLVt4eF0tIGQjMVxuXG4jIyBza2Fua2luZ1xuICBAQVxuICAgICMxIDEwMCAteC14LXgteC14LXgteC14ICVDbSAlRm1cblxuPiBBICo0XG5gLnRyaW0oKTtcblxuY29uc3QgUFJFU0VUUyA9IHtcbiAgdGV0cmlzOiBURVRSSVMsXG4gIGJpbGx5X2plYW46IEJJTExZX0pFQU4sXG4gIHBsYXlncm91bmQ6IFBMQVlHUk9VTkQsXG4gIGxvY2tzOiBMT0NLUyxcbn07XG5cbmNvbnN0IFBSRVNFVF9MQUJFTFMgPSB7XG4gIHRldHJpczogJ1RldHJpcycsXG4gIGJpbGx5X2plYW46ICdCaWxseSBKZWFuJyxcbiAgcGxheWdyb3VuZDogJ1BsYXlncm91bmQnLFxuICBsb2NrczogJ0xvY2tzJyxcbn07XG5cbmNvbnN0IFNDQUxFX0lORk8gPSB7XG4gIG1ham9yOiAnVyBXIEggVyBXIFcgSCAgLSAgZG8gcmUgbWkgZmEgc29sIGxhIHRpJyxcbiAgbWlub3I6ICdXIEggVyBXIEggVyBXICAtICBkbyByZSBtaWIgZmEgc29sIGxhYiBzaWInLFxuICBkb3JpYW46ICdXIEggVyBXIFcgSCBXICAtICBtaW5vciB3aXRoIHJhaXNlZCA2dGgnLFxuICBwaHJ5Z2lhbjogJ0ggVyBXIFcgSCBXIFcgIC0gIG1pbm9yIHdpdGggbG93ZXJlZCAybmQnLFxuICBseWRpYW46ICdXIFcgVyBIIFcgVyBIICAtICBtYWpvciB3aXRoIHJhaXNlZCA0dGgnLFxuICBtaXhvbHlkaWFuOiAnVyBXIEggVyBXIEggVyAgLSAgbWFqb3Igd2l0aCBsb3dlcmVkIDd0aCcsXG4gIGxvY3JpYW46ICdIIFcgVyBIIFcgVyBXICAtICBkaW1pbmlzaGVkIGZsYXZvcicsXG59O1xuXG5mdW5jdGlvbiBidWlsZChtaWRpKSB7XG4gIGNvbnN0IG1peCA9IFtdO1xuXG4gIGZ1bmN0aW9uIGdldChudGgsIG5hbWUpIHtcbiAgICBjb25zdCBrZXkgPSBudGggKyBuYW1lO1xuXG4gICAgaWYgKCFnZXRba2V5XSkge1xuICAgICAgY29uc3QgdHJhY2sgPSBbbnRoLCBuYW1lLCBbXV07XG4gICAgICBtaXgucHVzaCh0cmFjayk7XG4gICAgICBnZXRba2V5XSA9IHsgdHJhY2sgfTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFtrZXldO1xuICB9XG5cbiAgbWlkaS5mb3JFYWNoKHNlY3Rpb24gPT4ge1xuICAgIHNlY3Rpb24uZm9yRWFjaChwYXJ0cyA9PiB7XG4gICAgICBwYXJ0cy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICBjb25zdCB7IHRyYWNrIH0gPSBnZXQoZVswXSwgZVsxXSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZVsyXS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIHRyYWNrWzJdLnB1c2goZVsyXVtpXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIG1peDtcbn1cblxuZnVuY3Rpb24gZ2V0RGF0YShpbnB1dCkge1xuICB0cnkge1xuICAgIGxhc3RDb250ZXh0ID0gcGFyc2UoaW5wdXQpO1xuICAgIHJldHVybiBidWlsZChtZXJnZShsYXN0Q29udGV4dCkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgbGFzdENvbnRleHQgPSBudWxsO1xuICAgIGNvbnNvbGUuZXJyb3IoJ1BhcnNlIGVycm9yOicsIGUpO1xuICAgIHNob3dFcnJvcihlLm1lc3NhZ2UgfHwgJ1BhcnNlIGVycm9yJyk7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVWYXJUb29sdGlwKG5hbWUpIHtcbiAgaWYgKCFsYXN0Q29udGV4dCB8fCAhbGFzdENvbnRleHQuZGF0YSB8fCAhbGFzdENvbnRleHQuZGF0YVtuYW1lXSkgcmV0dXJuIG51bGw7XG4gIHRyeSB7XG4gICAgY29uc3QgZGF0YSA9IHJlZHVjZShsYXN0Q29udGV4dC5kYXRhW25hbWVdLCBsYXN0Q29udGV4dC5kYXRhKTtcbiAgICBjb25zdCBvdXQgPSBBcnJheS5pc0FycmF5KGRhdGEpID8gZGF0YS5mbGF0KEluZmluaXR5KSA6IFtkYXRhXTtcbiAgICBjb25zdCBzaG93biA9IG91dC5zbGljZSgwLCAxNikubWFwKGl0ZW0gPT4gKFxuICAgICAgQXJyYXkuaXNBcnJheShpdGVtKSA/IGl0ZW0uam9pbignfCcpIDogU3RyaW5nKGl0ZW0pXG4gICAgKSk7XG4gICAgcmV0dXJuIHNob3duLmpvaW4oJyAgJykgKyAob3V0Lmxlbmd0aCA+IHNob3duLmxlbmd0aCA/ICcgXHUyMDI2JyA6ICcnKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVJbnN0cnVtZW50VG9vbHRpcCh2YWx1ZSkge1xuICBjb25zdCBuID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgaWYgKE51bWJlci5pc05hTihuKSkgcmV0dXJuIG51bGw7XG4gIHRyeSB7XG4gICAgY29uc3QgaW5mbyA9IG4gPj0gMjAwMFxuICAgICAgPyBwLnBsYXllci5sb2FkZXIuZHJ1bUluZm8obiAtIDIwMDApXG4gICAgICA6IHAucGxheWVyLmxvYWRlci5pbnN0cnVtZW50SW5mbyhuKTtcbiAgICByZXR1cm4gaW5mbyAmJiBpbmZvLnRpdGxlID8gaW5mby50aXRsZSA6IG51bGw7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlTW9kZVRvb2x0aXAobmFtZSkge1xuICBpZiAoIW5hbWUpIHJldHVybiBudWxsO1xuICByZXR1cm4gU0NBTEVfSU5GT1tuYW1lLnRvTG93ZXJDYXNlKCldIHx8IG51bGw7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZU5vdGUocykge1xuICByZXR1cm4gcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHMuc2xpY2UoMSk7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVOb3RlVG9vbHRpcChub3RlU3RyKSB7XG4gIGNvbnN0IFNFTUlUT05FUyA9IHsgYzogMCwgZDogMiwgZTogNCwgZjogNSwgZzogNywgYTogOSwgYjogMTEgfTtcbiAgY29uc3QgbSA9IG5vdGVTdHIubWF0Y2goL14oW2EtZ0EtR10pKFsjYl0/KShcXGQrKSQvKTtcbiAgaWYgKCFtKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgYmFzZSA9IFNFTUlUT05FU1ttWzFdLnRvTG93ZXJDYXNlKCldO1xuICBjb25zdCBhbHQgPSBtWzJdID09PSAnIycgPyAxIDogbVsyXSA9PT0gJ2InID8gLTEgOiAwO1xuICBjb25zdCBvY3QgPSBwYXJzZUludChtWzNdLCAxMCk7XG4gIGNvbnN0IG1pZGkgPSAob2N0ICsgMSkgKiAxMiArIGJhc2UgKyBhbHQ7XG4gIGNvbnN0IGZyZXEgPSAoNDQwICogTWF0aC5wb3coMiwgKG1pZGkgLSA2OSkgLyAxMikpLnRvRml4ZWQoMSk7XG4gIGNvbnN0IGlzTWlkZGxlQyA9IG1pZGkgPT09IDYwO1xuICByZXR1cm4gYE1JREkgJHttaWRpfSBcdTAwQjcgJHtmcmVxfSBIeiR7aXNNaWRkbGVDID8gJyBcdTAwQjcgbWlkZGxlIEMnIDogJyd9YDtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUNob3JkVG9vbHRpcChjaG9yZFN0cikge1xuICByZXR1cm4gY2hvcmRTdHIuc3BsaXQoJ3wnKS5tYXAobm9ybWFsaXplTm90ZSkuam9pbignICAnKTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZU1vZGVOb3Rlcyhtb2RlTmFtZSkge1xuICB0cnkge1xuICAgIHJldHVybiBzY2FsZShgQzQgJHttb2RlTmFtZX1gKTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVNlY3Rpb25Ub29sdGlwKG5hbWUpIHtcbiAgaWYgKCFlZGl0b3JBcGkpIHJldHVybiBudWxsO1xuICBjb25zdCBsaW5lcyA9IGVkaXRvckFwaS5nZXRWYWx1ZSgpLnNwbGl0KCdcXG4nKTtcbiAgY29uc3Qgc2VjdGlvbkhlYWRlciA9IGBAJHtuYW1lfWA7XG4gIGNvbnN0IHN0YXJ0ID0gbGluZXMuZmluZEluZGV4KGxpbmUgPT4gbGluZS50cmltKCkgPT09IHNlY3Rpb25IZWFkZXIpO1xuICBpZiAoc3RhcnQgPCAwKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCBwcmV2aWV3ID0gW107XG4gIGZvciAobGV0IGkgPSBzdGFydCArIDE7IGkgPCBsaW5lcy5sZW5ndGggJiYgcHJldmlldy5sZW5ndGggPCA0OyBpICs9IDEpIHtcbiAgICBjb25zdCBsaW5lID0gbGluZXNbaV07XG4gICAgaWYgKC9eXFxzKkAvLnRlc3QobGluZSkpIGJyZWFrO1xuICAgIGlmIChsaW5lLnRyaW0oKSkgcHJldmlldy5wdXNoKGxpbmUudHJpbSgpKTtcbiAgfVxuICByZXR1cm4gcHJldmlldy5sZW5ndGggPyBwcmV2aWV3LmpvaW4oJyB8ICcpIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gc2hvd0Vycm9yKG1zZykge1xuICBjbGVhclRpbWVvdXQoc3RhdHVzUmVzZXRUaW1lcik7XG4gIGNvbnN0IHN0YXR1c0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXR1cy1tZXNzYWdlJyk7XG4gIGNvbnN0IHN0YXR1c2JhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0dXNiYXInKTtcbiAgaWYgKHN0YXR1c0VsKSB7XG4gICAgc3RhdHVzRWwudGV4dENvbnRlbnQgPSBgRXJyb3I6ICR7bXNnfWA7XG4gIH1cbiAgaWYgKHN0YXR1c2Jhcikge1xuICAgIHN0YXR1c2Jhci5kYXRhc2V0LnN0YXRlID0gJ2Vycm9yJztcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93U3RhdHVzKG1zZywgc3RhdGUgPSAncmVhZHknKSB7XG4gIGNsZWFyVGltZW91dChzdGF0dXNSZXNldFRpbWVyKTtcbiAgY29uc3Qgc3RhdHVzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdHVzLW1lc3NhZ2UnKTtcbiAgY29uc3Qgc3RhdHVzYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXR1c2JhcicpO1xuICBpZiAoc3RhdHVzRWwpIHtcbiAgICBzdGF0dXNFbC50ZXh0Q29udGVudCA9IG1zZztcbiAgfVxuICBpZiAoc3RhdHVzYmFyKSB7XG4gICAgc3RhdHVzYmFyLmRhdGFzZXQuc3RhdGUgPSBzdGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRSZWFkeVN0YXR1cygpIHtcbiAgc2hvd1N0YXR1cygnUmVhZHknLCAncmVhZHknKTtcbn1cblxuZnVuY3Rpb24gbWFya0RpcnR5KCkge1xuICBzaG93U3RhdHVzKCdVbnNhdmVkIGNoYW5nZXMnLCAnd2FybmluZycpO1xufVxuXG5mdW5jdGlvbiBzYXZlU3VjY2VzcygpIHtcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgaGggPSBTdHJpbmcobm93LmdldEhvdXJzKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gIGNvbnN0IG1tID0gU3RyaW5nKG5vdy5nZXRNaW51dGVzKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gIHNob3dTdGF0dXMoYFNhdmVkICR7aGh9OiR7bW19YCwgJ3JlYWR5Jyk7XG59XG5cbmZ1bmN0aW9uIHNldFF1ZXJ5TG9hZChuYW1lKSB7XG4gIGNvbnN0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICBpZiAobmFtZSkge1xuICAgIHVybC5zZWFyY2hQYXJhbXMuc2V0KCdsb2FkJywgbmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgdXJsLnNlYXJjaFBhcmFtcy5kZWxldGUoJ2xvYWQnKTtcbiAgfVxuICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sICcnLCB1cmwudG9TdHJpbmcoKSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVBsYXlCdXR0b24oKSB7XG4gIGNvbnN0IHBsYXlCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheS1idG4nKTtcbiAgaWYgKHBsYXlCdG4pIHBsYXlCdG4udGV4dENvbnRlbnQgPSBwbGF5aW5nID8gJ1x1MjVCNiBQbGF5aW5nLi4uJyA6ICdcdTI1QjYgUGxheSc7XG59XG5cbmZ1bmN0aW9uIGxvYWRQcmVzZXRCeU5hbWUobmFtZSkge1xuICBjb25zdCBwcmVzZXQgPSBQUkVTRVRTW25hbWVdO1xuICBpZiAoIWVkaXRvckFwaSB8fCAhcHJlc2V0KSByZXR1cm47XG5cbiAgZWRpdG9yQXBpLnNldFZhbHVlKHByZXNldC50cmltKCkpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTVE9SQUdFX0tFWSwgZWRpdG9yQXBpLmdldFZhbHVlKCkpO1xuICBzZXRRdWVyeUxvYWQobmFtZSk7XG4gIHNob3dTdGF0dXMoYExvYWRlZCBwcmVzZXQ6ICR7UFJFU0VUX0xBQkVMU1tuYW1lXSB8fCBuYW1lfWAsICdyZWFkeScpO1xuICB1cGRhdGVMb29wKCk7XG4gIGVkaXRvckFwaS5mb2N1cygpO1xufVxuXG5mdW5jdGlvbiBzeW5jTWl4ZXIoZGF0YSkge1xuICBpZiAoIW1peGVyQXBpKSByZXR1cm47XG4gIG1peGVyQXBpLnVwZGF0ZShkYXRhKTtcbn1cblxuZnVuY3Rpb24gYmluZEdsb2JhbFNob3J0Y3V0cygpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IGVkaXRpbmdGaWVsZCA9IHRhcmdldCAmJiAoXG4gICAgICB0YXJnZXQudGFnTmFtZSA9PT0gJ1RFWFRBUkVBJ1xuICAgICAgfHwgdGFyZ2V0LnRhZ05hbWUgPT09ICdJTlBVVCdcbiAgICAgIHx8IHRhcmdldC50YWdOYW1lID09PSAnU0VMRUNUJ1xuICAgICk7XG5cbiAgICBpZiAoZS5jb2RlID09PSAnU3BhY2UnICYmICFlZGl0aW5nRmllbGQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChwbGF5aW5nKSBzdG9wKCk7XG4gICAgICBlbHNlIHBsYXkoKTtcbiAgICB9XG4gICAgaWYgKGUuY29kZSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgIHN0b3AoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVET00oaW5pdGlhbFRleHQsIGluaXRpYWxQcmVzZXQpIHtcbiAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnJztcblxuICBjb25zdCB0b29sYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvb2xiYXIuaWQgPSAndG9vbGJhcic7XG5cbiAgY29uc3QgYWJvdXRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhYm91dExpbmsuaWQgPSAnYWJvdXQtbGluayc7XG4gIGFib3V0TGluay5ocmVmID0gJ2xhbmRpbmcuaHRtbCc7XG4gIGFib3V0TGluay50ZXh0Q29udGVudCA9ICdcdTIxOTAgQWJvdXQnO1xuXG4gIGNvbnN0IHBsYXlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcGxheUJ0bi5pZCA9ICdwbGF5LWJ0bic7XG4gIHBsYXlCdG4udGV4dENvbnRlbnQgPSAnXHUyNUI2IFBsYXknO1xuICBwbGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheSk7XG5cbiAgY29uc3Qgc3RvcEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzdG9wQnRuLmlkID0gJ3N0b3AtYnRuJztcbiAgc3RvcEJ0bi50ZXh0Q29udGVudCA9ICdcdTI1QTAgU3RvcCc7XG4gIHN0b3BCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdG9wKTtcblxuICBjb25zdCBtaXhlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBtaXhlckJ0bi5pZCA9ICdtaXhlci1idG4nO1xuICBtaXhlckJ0bi50ZXh0Q29udGVudCA9ICdcdTIyOUUgTWl4ZXInO1xuICBjb25zdCBtaWRpQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG1pZGlCdG4uaWQgPSAnbWlkaS1idG4nO1xuICBtaWRpQnRuLnRleHRDb250ZW50ID0gJ1x1RDgzQ1x1REY5QiBNSURJJztcbiAgbWlkaUJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gIG1pZGlCdG4udGl0bGUgPSAnTUlESSBzdXBwb3J0IGNvbWVzIG5leHQnO1xuXG4gIGNvbnN0IHByZXNldExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgcHJlc2V0TGFiZWwuY2xhc3NOYW1lID0gJ2ZpZWxkLWdyb3VwJztcbiAgcHJlc2V0TGFiZWwudGV4dENvbnRlbnQgPSAnUHJlc2V0ICc7XG4gIGNvbnN0IHByZXNldFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBwcmVzZXRTZWxlY3QuaWQgPSAncHJlc2V0LXNlbGVjdCc7XG4gIGNvbnN0IGN1c3RvbU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBjdXN0b21PcHRpb24udmFsdWUgPSAnJztcbiAgY3VzdG9tT3B0aW9uLnRleHRDb250ZW50ID0gJ0N1c3RvbSc7XG4gIHByZXNldFNlbGVjdC5hcHBlbmRDaGlsZChjdXN0b21PcHRpb24pO1xuICBPYmplY3Qua2V5cyhQUkVTRVRTKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbi52YWx1ZSA9IG5hbWU7XG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gUFJFU0VUX0xBQkVMU1tuYW1lXSB8fCBuYW1lO1xuICAgIHByZXNldFNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9KTtcbiAgaWYgKGluaXRpYWxQcmVzZXQgJiYgUFJFU0VUU1tpbml0aWFsUHJlc2V0XSkge1xuICAgIHByZXNldFNlbGVjdC52YWx1ZSA9IGluaXRpYWxQcmVzZXQ7XG4gIH1cbiAgcHJlc2V0U2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBpZiAocHJlc2V0U2VsZWN0LnZhbHVlKSB7XG4gICAgICBsb2FkUHJlc2V0QnlOYW1lKHByZXNldFNlbGVjdC52YWx1ZSk7XG4gICAgfVxuICB9KTtcbiAgcHJlc2V0TGFiZWwuYXBwZW5kQ2hpbGQocHJlc2V0U2VsZWN0KTtcblxuICB0b29sYmFyLmFwcGVuZENoaWxkKGFib3V0TGluayk7XG4gIHRvb2xiYXIuYXBwZW5kQ2hpbGQocGxheUJ0bik7XG4gIHRvb2xiYXIuYXBwZW5kQ2hpbGQoc3RvcEJ0bik7XG4gIHRvb2xiYXIuYXBwZW5kQ2hpbGQobWl4ZXJCdG4pO1xuICB0b29sYmFyLmFwcGVuZENoaWxkKG1pZGlCdG4pO1xuICB0b29sYmFyLmFwcGVuZENoaWxkKHByZXNldExhYmVsKTtcblxuICBlZGl0b3JBcGkgPSBjcmVhdGVFZGl0b3IoaW5pdGlhbFRleHQsIHtcbiAgICByZXNvbHZlTm90ZTogcmVzb2x2ZU5vdGVUb29sdGlwLFxuICAgIHJlc29sdmVDaG9yZDogcmVzb2x2ZUNob3JkVG9vbHRpcCxcbiAgICByZXNvbHZlTW9kZTogcmVzb2x2ZU1vZGVUb29sdGlwLFxuICAgIHJlc29sdmVNb2RlTm90ZXMsXG4gICAgcmVzb2x2ZVNlY3Rpb246IHJlc29sdmVTZWN0aW9uVG9vbHRpcCxcbiAgICByZXNvbHZlVmFyOiByZXNvbHZlVmFyVG9vbHRpcCxcbiAgICByZXNvbHZlSW5zdHJ1bWVudDogcmVzb2x2ZUluc3RydW1lbnRUb29sdGlwLFxuICAgIG9uSW5wdXQ6ICgpID0+IHtcbiAgICAgIGNvbnN0IHByZXNldFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmVzZXQtc2VsZWN0Jyk7XG4gICAgICBpZiAocHJlc2V0U2VsZWN0KSBwcmVzZXRTZWxlY3QudmFsdWUgPSAnJztcbiAgICAgIHNldFF1ZXJ5TG9hZChudWxsKTtcbiAgICAgIG1hcmtEaXJ0eSgpO1xuICAgICAgdXBkYXRlTG9vcCgpO1xuICAgICAgc2F2ZURyYWZ0KCk7XG4gICAgfSxcbiAgfSk7XG5cbiAgZWRpdG9yQXBpLm9uKCdrZXlkb3duJywgZSA9PiB7XG4gICAgaWYgKChlLm1ldGFLZXkgfHwgZS5jdHJsS2V5KSAmJiBlLmNvZGUgPT09ICdFbnRlcicpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChwbGF5aW5nKSBzdG9wKCk7XG4gICAgICBlbHNlIHBsYXkoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHN0YXR1c2JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzdGF0dXNiYXIuaWQgPSAnc3RhdHVzYmFyJztcbiAgc3RhdHVzYmFyLmRhdGFzZXQuc3RhdGUgPSAncmVhZHknO1xuXG4gIGNvbnN0IGJlYXREb3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJlYXREb3RzLmlkID0gJ2JlYXQtZG90cyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkgKz0gMSkge1xuICAgIGNvbnN0IGRvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBkb3QuY2xhc3NOYW1lID0gJ2JlYXQtZG90JztcbiAgICBiZWF0RG90cy5hcHBlbmRDaGlsZChkb3QpO1xuICB9XG5cbiAgY29uc3Qgc3RhdHVzTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgc3RhdHVzTWVzc2FnZS5pZCA9ICdzdGF0dXMtbWVzc2FnZSc7XG4gIHN0YXR1c01lc3NhZ2UudGV4dENvbnRlbnQgPSAnUmVhZHknO1xuXG4gIHN0YXR1c2Jhci5hcHBlbmRDaGlsZChiZWF0RG90cyk7XG4gIHN0YXR1c2Jhci5hcHBlbmRDaGlsZChzdGF0dXNNZXNzYWdlKTtcblxuICBjb25zdCB3b3Jrc3BhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd29ya3NwYWNlLmlkID0gJ3dvcmtzcGFjZSc7XG4gIG1peGVyQXBpID0gY3JlYXRlTWl4ZXIocCwge1xuICAgIHRlbXBvLFxuICAgIGJhcnMsXG4gICAgdHJhbnNwb3NlLFxuICAgIG9uQ2hhbmdlKG5leHQpIHtcbiAgICAgIGlmICh0eXBlb2YgbmV4dC50ZW1wbyA9PT0gJ251bWJlcicpIHRlbXBvID0gbmV4dC50ZW1wbztcbiAgICAgIGlmICh0eXBlb2YgbmV4dC5iYXJzID09PSAnbnVtYmVyJykgYmFycyA9IG5leHQuYmFycztcbiAgICAgIGlmICh0eXBlb2YgbmV4dC50cmFuc3Bvc2UgPT09ICdudW1iZXInKSB0cmFuc3Bvc2UgPSBuZXh0LnRyYW5zcG9zZTtcbiAgICAgIHVwZGF0ZUxvb3AoKTtcbiAgICB9LFxuICB9KTtcbiAgbWl4ZXJBcGkudG9nZ2xlKGZhbHNlKTtcbiAgbWl4ZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3Qgb3BlbiA9IG1peGVyQXBpLnRvZ2dsZSgpO1xuICAgIHdvcmtzcGFjZS5jbGFzc0xpc3QudG9nZ2xlKCdtaXhlci1vcGVuJywgb3Blbik7XG4gIH0pO1xuICBwLm9uQmVhdCA9IChrZXksIHdoZW4pID0+IHtcbiAgICBjb25zdCB3YWl0ID0gTWF0aC5tYXgoMCwgKHdoZW4gLSBwLmF1ZGlvQ29udGV4dC5jdXJyZW50VGltZSkgKiAxMDAwKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IG1peGVyQXBpLmZsYXNoVlUoa2V5KSwgd2FpdCk7XG4gIH07XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0b29sYmFyKTtcbiAgd29ya3NwYWNlLmFwcGVuZENoaWxkKGVkaXRvckFwaS5lbCk7XG4gIHdvcmtzcGFjZS5hcHBlbmRDaGlsZChtaXhlckFwaS5lbCk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQod29ya3NwYWNlKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdGF0dXNiYXIpO1xuXG4gIHJldHVybiBlZGl0b3JBcGk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRFeGFtcGxlKG5hbWUpIHtcbiAgaWYgKFBSRVNFVFNbbmFtZV0pIHJldHVybiBQUkVTRVRTW25hbWVdO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGV4YW1wbGVzLyR7bmFtZX0uZHViYCk7XG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIGlnbm9yZSBhbmQgdXNlIGZhbGxiYWNrXG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlc29sdmVJbml0aWFsRHJhZnQoKSB7XG4gIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gIGNvbnN0IGxvYWQgPSBwYXJhbXMuZ2V0KCdsb2FkJyk7XG5cbiAgaWYgKGxvYWQpIHtcbiAgICBjb25zdCBkcmFmdCA9IGF3YWl0IGxvYWRFeGFtcGxlKGxvYWQpO1xuICAgIGlmIChkcmFmdCkgcmV0dXJuIGRyYWZ0LnRyaW0oKTtcbiAgfVxuXG4gIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTVE9SQUdFX0tFWSkgfHwgVEVUUklTO1xufVxuXG5mdW5jdGlvbiBzYXZlRHJhZnQoKSB7XG4gIGNsZWFyVGltZW91dChkZWJvdW5jZVRpbWVyKTtcbiAgZGVib3VuY2VUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmIChlZGl0b3JBcGkpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFNUT1JBR0VfS0VZLCBlZGl0b3JBcGkuZ2V0VmFsdWUoKSk7XG4gICAgICBzYXZlU3VjY2VzcygpO1xuICAgIH1cbiAgfSwgMzAwKTtcbn1cblxuZnVuY3Rpb24gcGxheSgpIHtcbiAgc3RvcCgpO1xuICBpZiAoIWVkaXRvckFwaSkgcmV0dXJuO1xuXG4gIGlmIChwLmF1ZGlvQ29udGV4dC5zdGF0ZSA9PT0gJ3N1c3BlbmRlZCcpIHtcbiAgICBwLmF1ZGlvQ29udGV4dC5yZXN1bWUoKTtcbiAgfVxuICBwbGF5aW5nID0gdHJ1ZTtcbiAgY29uc3QgZGF0YSA9IGdldERhdGEoZWRpdG9yQXBpLmdldFZhbHVlKCkpO1xuICBwLnNldExvb3BNYWNoaW5lKGRhdGEsIHRlbXBvLCBiYXJzLCB0cmFuc3Bvc2UpO1xuICBzeW5jTWl4ZXIoZGF0YSk7XG4gIHAucGxheUxvb3BNYWNoaW5lKCk7XG4gIHVwZGF0ZVBsYXlCdXR0b24oKTtcbiAgc2hvd1N0YXR1cygnUGxheWluZycsICdwbGF5aW5nJyk7XG59XG5cbmZ1bmN0aW9uIHN0b3AoKSB7XG4gIGlmIChwbGF5aW5nKSB7XG4gICAgcGxheWluZyA9IGZhbHNlO1xuICAgIHAuc3RvcExvb3BNYWNoaW5lKCk7XG4gIH1cbiAgdXBkYXRlUGxheUJ1dHRvbigpO1xuICBzZXRSZWFkeVN0YXR1cygpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVMb29wKCkge1xuICBpZiAoIWVkaXRvckFwaSB8fCAhcCkgcmV0dXJuO1xuXG4gIGNvbnN0IGRhdGEgPSBnZXREYXRhKGVkaXRvckFwaS5nZXRWYWx1ZSgpKTtcbiAgY29uc3QgY2hhbmdlZCA9IHAuc2V0TG9vcE1hY2hpbmUoZGF0YSwgdGVtcG8sIGJhcnMsIHRyYW5zcG9zZSk7XG4gIHN5bmNNaXhlcihkYXRhKTtcbiAgaWYgKGNoYW5nZWQgJiYgcGxheWluZykge1xuICAgIHAucGxheUxvb3BNYWNoaW5lKHAuYmVhdEluZGV4KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBiZWF0SW5kaWNhdG9yKCkge1xuICBjb25zdCBkb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJlYXQtZG90Jyk7XG4gIGNvbnN0IGFjdGl2ZUluZGV4ID0gcC5sb29wU3RhcnRlZCA/IHAuYmVhdEluZGV4IDogLTE7XG4gIGRvdHMuZm9yRWFjaCgoZG90LCBpKSA9PiBkb3QuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJywgaSA9PT0gYWN0aXZlSW5kZXgpKTtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGJlYXRJbmRpY2F0b3IpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBib290c3RyYXAoKSB7XG4gIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gIGNvbnN0IGluaXRpYWxQcmVzZXQgPSBwYXJhbXMuZ2V0KCdsb2FkJyk7XG4gIGNvbnN0IGluaXRpYWxEcmFmdCA9IGF3YWl0IHJlc29sdmVJbml0aWFsRHJhZnQoKTtcbiAgY29uc3QgZWRpdG9yID0gY3JlYXRlRE9NKGluaXRpYWxEcmFmdCwgaW5pdGlhbFByZXNldCk7XG4gIGJpbmRHbG9iYWxTaG9ydGN1dHMoKTtcbiAgY29uc3QgZGF0YSA9IGdldERhdGEoZWRpdG9yLmdldFZhbHVlKCkpO1xuICBwLnNldExvb3BNYWNoaW5lKGRhdGEsIHRlbXBvLCBiYXJzLCB0cmFuc3Bvc2UpO1xuICBzeW5jTWl4ZXIoZGF0YSk7XG4gIHNldFJlYWR5U3RhdHVzKCk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShiZWF0SW5kaWNhdG9yKTtcbn1cblxuYm9vdHN0cmFwKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHt9O1xuIiwgIid1c2Ugc3RyaWN0J1xuXG4vLyB1dGlsXG5mdW5jdGlvbiBmaWxsU3RyIChzLCBudW0pIHsgcmV0dXJuIEFycmF5KG51bSArIDEpLmpvaW4ocykgfVxuZnVuY3Rpb24gaXNOdW0gKHgpIHsgcmV0dXJuIHR5cGVvZiB4ID09PSAnbnVtYmVyJyB9XG5mdW5jdGlvbiBpc1N0ciAoeCkgeyByZXR1cm4gdHlwZW9mIHggPT09ICdzdHJpbmcnIH1cbmZ1bmN0aW9uIGlzRGVmICh4KSB7IHJldHVybiB0eXBlb2YgeCAhPT0gJ3VuZGVmaW5lZCcgfVxuZnVuY3Rpb24gbWlkaVRvRnJlcSAobWlkaSwgdHVuaW5nKSB7XG4gIHJldHVybiBNYXRoLnBvdygyLCAobWlkaSAtIDY5KSAvIDEyKSAqICh0dW5pbmcgfHwgNDQwKVxufVxuXG52YXIgUkVHRVggPSAvXihbYS1nQS1HXSkoI3sxLH18YnsxLH18eHsxLH18KSgtP1xcZCopXFxzKiguKilcXHMqJC9cbi8qKlxuICogQSByZWdleCBmb3IgbWF0Y2hpbmcgbm90ZSBzdHJpbmdzIGluIHNjaWVudGlmaWMgbm90YXRpb24uXG4gKlxuICogQG5hbWUgcmVnZXhcbiAqIEBmdW5jdGlvblxuICogQHJldHVybiB7UmVnRXhwfSB0aGUgcmVnZXhwIHVzZWQgdG8gcGFyc2UgdGhlIG5vdGUgbmFtZVxuICpcbiAqIFRoZSBub3RlIHN0cmluZyBzaG91bGQgaGF2ZSB0aGUgZm9ybSBgbGV0dGVyW2FjY2lkZW50YWxzXVtvY3RhdmVdW2VsZW1lbnRdYFxuICogd2hlcmU6XG4gKlxuICogLSBsZXR0ZXI6IChSZXF1aXJlZCkgaXMgYSBsZXR0ZXIgZnJvbSBBIHRvIEcgZWl0aGVyIHVwcGVyIG9yIGxvd2VyIGNhc2VcbiAqIC0gYWNjaWRlbnRhbHM6IChPcHRpb25hbCkgY2FuIGJlIG9uZSBvciBtb3JlIGBiYCAoZmxhdHMpLCBgI2AgKHNoYXJwcykgb3IgYHhgIChkb3VibGUgc2hhcnBzKS5cbiAqIFRoZXkgY2FuIE5PVCBiZSBtaXhlZC5cbiAqIC0gb2N0YXZlOiAoT3B0aW9uYWwpIGEgcG9zaXRpdmUgb3IgbmVnYXRpdmUgaW50ZWdlclxuICogLSBlbGVtZW50OiAoT3B0aW9uYWwpIGFkZGl0aW9uYWxseSBhbnl0aGluZyBhZnRlciB0aGUgZHVyYXRpb24gaXMgY29uc2lkZXJlZCB0b1xuICogYmUgdGhlIGVsZW1lbnQgbmFtZSAoZm9yIGV4YW1wbGU6ICdDMiBkb3JpYW4nKVxuICpcbiAqIFRoZSBleGVjdXRlZCByZWdleCBjb250YWlucyAoYnkgYXJyYXkgaW5kZXgpOlxuICpcbiAqIC0gMDogdGhlIGNvbXBsZXRlIHN0cmluZ1xuICogLSAxOiB0aGUgbm90ZSBsZXR0ZXJcbiAqIC0gMjogdGhlIG9wdGlvbmFsIGFjY2lkZW50YWxzXG4gKiAtIDM6IHRoZSBvcHRpb25hbCBvY3RhdmVcbiAqIC0gNDogdGhlIHJlc3Qgb2YgdGhlIHN0cmluZyAodHJpbW1lZClcbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIHBhcnNlciA9IHJlcXVpcmUoJ25vdGUtcGFyc2VyJylcbiAqIHBhcnNlci5yZWdleC5leGVjKCdjIzQnKVxuICogLy8gPT4gWydjIzQnLCAnYycsICcjJywgJzQnLCAnJ11cbiAqIHBhcnNlci5yZWdleC5leGVjKCdjIzQgbWFqb3InKVxuICogLy8gPT4gWydjIzRtYWpvcicsICdjJywgJyMnLCAnNCcsICdtYWpvciddXG4gKiBwYXJzZXIucmVnZXgoKS5leGVjKCdDTWFqNycpXG4gKiAvLyA9PiBbJ0NNYWo3JywgJ0MnLCAnJywgJycsICdNYWo3J11cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2V4ICgpIHsgcmV0dXJuIFJFR0VYIH1cblxudmFyIFNFTUlUT05FUyA9IFswLCAyLCA0LCA1LCA3LCA5LCAxMV1cbi8qKlxuICogUGFyc2UgYSBub3RlIG5hbWUgaW4gc2NpZW50aWZpYyBub3RhdGlvbiBhbiByZXR1cm4gaXQncyBjb21wb25lbnRzLFxuICogYW5kIHNvbWUgbnVtZXJpYyBwcm9wZXJ0aWVzIGluY2x1ZGluZyBtaWRpIG51bWJlciBhbmQgZnJlcXVlbmN5LlxuICpcbiAqIEBuYW1lIHBhcnNlXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBub3RlIC0gdGhlIG5vdGUgc3RyaW5nIHRvIGJlIHBhcnNlZFxuICogQHBhcmFtIHtCb29sZWFufSBpc1RvbmljIC0gdHJ1ZSB0aGUgc3RyaW5ncyBpdCdzIHN1cHBvc2VkIHRvIGNvbnRhaW4gYSBub3RlIG51bWJlclxuICogYW5kIHNvbWUgY2F0ZWdvcnkgKGZvciBleGFtcGxlIGFuIHNjYWxlOiAnQyMgbWFqb3InKS4gSXQncyBmYWxzZSBieSBkZWZhdWx0LFxuICogYnV0IHdoZW4gdHJ1ZSwgZW4gZXh0cmEgdG9uaWNPZiBwcm9wZXJ0eSBpcyByZXR1cm5lZCB3aXRoIHRoZSBjYXRlZ29yeSAoJ21ham9yJylcbiAqIEBwYXJhbSB7RmxvYXR9IHR1bm5pbmcgLSBUaGUgZnJlcXVlbmN5IG9mIEE0IG5vdGUgdG8gY2FsY3VsYXRlIGZyZXF1ZW5jaWVzLlxuICogQnkgZGVmYXVsdCBpdCA0NDAuXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBwYXJzZWQgbm90ZSBuYW1lIG9yIG51bGwgaWYgbm90IGEgdmFsaWQgbm90ZVxuICpcbiAqIFRoZSBwYXJzZWQgbm90ZSBuYW1lIG9iamVjdCB3aWxsIEFMV0FZUyBjb250YWluczpcbiAqIC0gbGV0dGVyOiB0aGUgdXBwZXJjYXNlIGxldHRlciBvZiB0aGUgbm90ZVxuICogLSBhY2M6IHRoZSBhY2NpZGVudGFscyBvZiB0aGUgbm90ZSAob25seSBzaGFycHMgb3IgZmxhdHMpXG4gKiAtIHBjOiB0aGUgcGl0Y2ggY2xhc3MgKGxldHRlciArIGFjYylcbiAqIC0gc3RlcDogcyBhIG51bWVyaWMgcmVwcmVzZW50YXRpb24gb2YgdGhlIGxldHRlci4gSXQncyBhbiBpbnRlZ2VyIGZyb20gMCB0byA2XG4gKiB3aGVyZSAwID0gQywgMSA9IEQgLi4uIDYgPSBCXG4gKiAtIGFsdDogYSBudW1lcmljIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBhY2NpZGVudGFscy4gMCBtZWFucyBubyBhbHRlcmF0aW9uLFxuICogcG9zaXRpdmUgbnVtYmVycyBhcmUgZm9yIHNoYXJwcyBhbmQgbmVnYXRpdmUgZm9yIGZsYXRzXG4gKiAtIGNocm9tYTogYSBudW1lcmljIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBwaXRjaCBjbGFzcy4gSXQncyBsaWtlIG1pZGkgZm9yXG4gKiBwaXRjaCBjbGFzc2VzLiAwID0gQywgMSA9IEMjLCAyID0gRCAuLi4gMTEgPSBCLiBDYW4gYmUgdXNlZCB0byBmaW5kIGVuaGFybW9uaWNzXG4gKiBzaW5jZSwgZm9yIGV4YW1wbGUsIGNocm9tYSBvZiAnQ2InIGFuZCAnQicgYXJlIGJvdGggMTFcbiAqXG4gKiBJZiB0aGUgbm90ZSBoYXMgb2N0YXZlLCB0aGUgcGFyc2VyIG9iamVjdCB3aWxsIGNvbnRhaW46XG4gKiAtIG9jdDogdGhlIG9jdGF2ZSBudW1iZXIgKGFzIGludGVnZXIpXG4gKiAtIG1pZGk6IHRoZSBtaWRpIG51bWJlclxuICogLSBmcmVxOiB0aGUgZnJlcXVlbmN5ICh1c2luZyB0dW5pbmcgcGFyYW1ldGVyIGFzIGJhc2UpXG4gKlxuICogSWYgdGhlIHBhcmFtZXRlciBgaXNUb25pY2AgaXMgc2V0IHRvIHRydWUsIHRoZSBwYXJzZWQgb2JqZWN0IHdpbGwgY29udGFpbjpcbiAqIC0gdG9uaWNPZjogdGhlIHJlc3Qgb2YgdGhlIHN0cmluZyB0aGF0IGZvbGxvd3Mgbm90ZSBuYW1lIChsZWZ0IGFuZCByaWdodCB0cmltbWVkKVxuICpcbiAqIEBleGFtcGxlXG4gKiB2YXIgcGFyc2UgPSByZXF1aXJlKCdub3RlLXBhcnNlcicpLnBhcnNlXG4gKiBwYXJzZSgnQ2I0JylcbiAqIC8vID0+IHsgbGV0dGVyOiAnQycsIGFjYzogJ2InLCBwYzogJ0NiJywgc3RlcDogMCwgYWx0OiAtMSwgY2hyb21hOiAtMSxcbiAqICAgICAgICAgb2N0OiA0LCBtaWRpOiA1OSwgZnJlcTogMjQ2Ljk0MTY1MDYyODA2MjA2IH1cbiAqIC8vIGlmIG5vIG9jdGF2ZSwgbm8gbWlkaSwgbm8gZnJlcVxuICogcGFyc2UoJ2Z4JylcbiAqIC8vID0+IHsgbGV0dGVyOiAnRicsIGFjYzogJyMjJywgcGM6ICdGIyMnLCBzdGVwOiAzLCBhbHQ6IDIsIGNocm9tYTogNyB9KVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2UgKHN0ciwgaXNUb25pYywgdHVuaW5nKSB7XG4gIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykgcmV0dXJuIG51bGxcbiAgdmFyIG0gPSBSRUdFWC5leGVjKHN0cilcbiAgaWYgKCFtIHx8ICghaXNUb25pYyAmJiBtWzRdKSkgcmV0dXJuIG51bGxcblxuICB2YXIgcCA9IHsgbGV0dGVyOiBtWzFdLnRvVXBwZXJDYXNlKCksIGFjYzogbVsyXS5yZXBsYWNlKC94L2csICcjIycpIH1cbiAgcC5wYyA9IHAubGV0dGVyICsgcC5hY2NcbiAgcC5zdGVwID0gKHAubGV0dGVyLmNoYXJDb2RlQXQoMCkgKyAzKSAlIDdcbiAgcC5hbHQgPSBwLmFjY1swXSA9PT0gJ2InID8gLXAuYWNjLmxlbmd0aCA6IHAuYWNjLmxlbmd0aFxuICB2YXIgcG9zID0gU0VNSVRPTkVTW3Auc3RlcF0gKyBwLmFsdFxuICBwLmNocm9tYSA9IHBvcyA8IDAgPyAxMiArIHBvcyA6IHBvcyAlIDEyXG4gIGlmIChtWzNdKSB7IC8vIGhhcyBvY3RhdmVcbiAgICBwLm9jdCA9ICttWzNdXG4gICAgcC5taWRpID0gcG9zICsgMTIgKiAocC5vY3QgKyAxKVxuICAgIHAuZnJlcSA9IG1pZGlUb0ZyZXEocC5taWRpLCB0dW5pbmcpXG4gIH1cbiAgaWYgKGlzVG9uaWMpIHAudG9uaWNPZiA9IG1bNF1cbiAgcmV0dXJuIHBcbn1cblxudmFyIExFVFRFUlMgPSAnQ0RFRkdBQidcbmZ1bmN0aW9uIGFjY1N0ciAobikgeyByZXR1cm4gIWlzTnVtKG4pID8gJycgOiBuIDwgMCA/IGZpbGxTdHIoJ2InLCAtbikgOiBmaWxsU3RyKCcjJywgbikgfVxuZnVuY3Rpb24gb2N0U3RyIChuKSB7IHJldHVybiAhaXNOdW0obikgPyAnJyA6ICcnICsgbiB9XG5cbi8qKlxuICogQ3JlYXRlIGEgc3RyaW5nIGZyb20gYSBwYXJzZWQgb2JqZWN0IG9yIGBzdGVwLCBhbHRlcmF0aW9uLCBvY3RhdmVgIHBhcmFtZXRlcnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSB0aGUgcGFyc2VkIGRhdGEgb2JqZWN0XG4gKiBAcmV0dXJuIHtTdHJpbmd9IGEgbm90ZSBzdHJpbmcgb3IgbnVsbCBpZiBub3QgdmFsaWQgcGFyYW1ldGVyc1xuICogQHNpbmNlIDEuMlxuICogQGV4YW1wbGVcbiAqIHBhcnNlci5idWlsZChwYXJzZXIucGFyc2UoJ2NiMicpKSAvLyA9PiAnQ2IyJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBpdCBhY2NlcHRzIChzdGVwLCBhbHRlcmF0aW9uLCBvY3RhdmUpIHBhcmFtZXRlcnM6XG4gKiBwYXJzZXIuYnVpbGQoMykgLy8gPT4gJ0YnXG4gKiBwYXJzZXIuYnVpbGQoMywgLTEpIC8vID0+ICdGYidcbiAqIHBhcnNlci5idWlsZCgzLCAtMSwgNCkgLy8gPT4gJ0ZiNCdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkIChzLCBhLCBvKSB7XG4gIGlmIChzID09PSBudWxsIHx8IHR5cGVvZiBzID09PSAndW5kZWZpbmVkJykgcmV0dXJuIG51bGxcbiAgaWYgKHMuc3RlcCkgcmV0dXJuIGJ1aWxkKHMuc3RlcCwgcy5hbHQsIHMub2N0KVxuICBpZiAocyA8IDAgfHwgcyA+IDYpIHJldHVybiBudWxsXG4gIHJldHVybiBMRVRURVJTLmNoYXJBdChzKSArIGFjY1N0cihhKSArIG9jdFN0cihvKVxufVxuXG4vKipcbiAqIEdldCBtaWRpIG9mIGEgbm90ZVxuICpcbiAqIEBuYW1lIG1pZGlcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtTdHJpbmd8SW50ZWdlcn0gbm90ZSAtIHRoZSBub3RlIG5hbWUgb3IgbWlkaSBudW1iZXJcbiAqIEByZXR1cm4ge0ludGVnZXJ9IHRoZSBtaWRpIG51bWJlciBvZiB0aGUgbm90ZSBvciBudWxsIGlmIG5vdCBhIHZhbGlkIG5vdGVcbiAqIG9yIHRoZSBub3RlIGRvZXMgTk9UIGNvbnRhaW5zIG9jdGF2ZVxuICogQGV4YW1wbGVcbiAqIHZhciBwYXJzZXIgPSByZXF1aXJlKCdub3RlLXBhcnNlcicpXG4gKiBwYXJzZXIubWlkaSgnQTQnKSAvLyA9PiA2OVxuICogcGFyc2VyLm1pZGkoJ0EnKSAvLyA9PiBudWxsXG4gKiBAZXhhbXBsZVxuICogLy8gbWlkaSBudW1iZXJzIGFyZSBieXBhc3NlZCAoZXZlbiBhcyBzdHJpbmdzKVxuICogcGFyc2VyLm1pZGkoNjApIC8vID0+IDYwXG4gKiBwYXJzZXIubWlkaSgnNjAnKSAvLyA9PiA2MFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWlkaSAobm90ZSkge1xuICBpZiAoKGlzTnVtKG5vdGUpIHx8IGlzU3RyKG5vdGUpKSAmJiBub3RlID49IDAgJiYgbm90ZSA8IDEyOCkgcmV0dXJuICtub3RlXG4gIHZhciBwID0gcGFyc2Uobm90ZSlcbiAgcmV0dXJuIHAgJiYgaXNEZWYocC5taWRpKSA/IHAubWlkaSA6IG51bGxcbn1cblxuLyoqXG4gKiBHZXQgZnJlcSBvZiBhIG5vdGUgaW4gaGVydHpzIChpbiBhIHdlbGwgdGVtcGVyZWQgNDQwSHogQTQpXG4gKlxuICogQG5hbWUgZnJlcVxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbm90ZSAtIHRoZSBub3RlIG5hbWUgb3Igbm90ZSBtaWRpIG51bWJlclxuICogQHBhcmFtIHtTdHJpbmd9IHR1bmluZyAtIChPcHRpb25hbCkgdGhlIEE0IGZyZXF1ZW5jeSAoNDQwIGJ5IGRlZmF1bHQpXG4gKiBAcmV0dXJuIHtGbG9hdH0gdGhlIGZyZXEgb2YgdGhlIG51bWJlciBpZiBoZXJ0enMgb3IgbnVsbCBpZiBub3QgdmFsaWQgbm90ZVxuICogQGV4YW1wbGVcbiAqIHZhciBwYXJzZXIgPSByZXF1aXJlKCdub3RlLXBhcnNlcicpXG4gKiBwYXJzZXIuZnJlcSgnQTQnKSAvLyA9PiA0NDBcbiAqIHBhcnNlci5mcmVxKCdBJykgLy8gPT4gbnVsbFxuICogQGV4YW1wbGVcbiAqIC8vIGNhbiBjaGFuZ2UgdHVuaW5nICg0NDAgYnkgZGVmYXVsdClcbiAqIHBhcnNlci5mcmVxKCdBNCcsIDQ0NCkgLy8gPT4gNDQ0XG4gKiBwYXJzZXIuZnJlcSgnQTMnLCA0NDQpIC8vID0+IDIyMlxuICogQGV4YW1wbGVcbiAqIC8vIGl0IGFjY2VwdHMgbWlkaSBudW1iZXJzIChhcyBudW1iZXJzIGFuZCBhcyBzdHJpbmdzKVxuICogcGFyc2VyLmZyZXEoNjkpIC8vID0+IDQ0MFxuICogcGFyc2VyLmZyZXEoJzY5JywgNDQyKSAvLyA9PiA0NDJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyZXEgKG5vdGUsIHR1bmluZykge1xuICB2YXIgbSA9IG1pZGkobm90ZSlcbiAgcmV0dXJuIG0gPT09IG51bGwgPyBudWxsIDogbWlkaVRvRnJlcShtLCB0dW5pbmcpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZXR0ZXIgKHNyYykgeyByZXR1cm4gKHBhcnNlKHNyYykgfHwge30pLmxldHRlciB9XG5leHBvcnQgZnVuY3Rpb24gYWNjIChzcmMpIHsgcmV0dXJuIChwYXJzZShzcmMpIHx8IHt9KS5hY2MgfVxuZXhwb3J0IGZ1bmN0aW9uIHBjIChzcmMpIHsgcmV0dXJuIChwYXJzZShzcmMpIHx8IHt9KS5wYyB9XG5leHBvcnQgZnVuY3Rpb24gc3RlcCAoc3JjKSB7IHJldHVybiAocGFyc2Uoc3JjKSB8fCB7fSkuc3RlcCB9XG5leHBvcnQgZnVuY3Rpb24gYWx0IChzcmMpIHsgcmV0dXJuIChwYXJzZShzcmMpIHx8IHt9KS5hbHQgfVxuZXhwb3J0IGZ1bmN0aW9uIGNocm9tYSAoc3JjKSB7IHJldHVybiAocGFyc2Uoc3JjKSB8fCB7fSkuY2hyb21hIH1cbmV4cG9ydCBmdW5jdGlvbiBvY3QgKHNyYykgeyByZXR1cm4gKHBhcnNlKHNyYykgfHwge30pLm9jdCB9XG4iLCAiLyoqXG4gKiBBIG1pZGkgbm90ZSBudW1iZXIgaXMgYSBudW1iZXIgcmVwcmVzZW50YXRpb24gb2YgYSBub3RlIHBpdGNoLiBJdCBjYW4gYmVcbiAqIGludGVnZXJzIHNvIGl0J3MgZXF1YWwgdGVtcGVyZWQgdHVuZWQsIG9yIGZsb2F0IHRvIGluZGljYXRlIGl0J3Mgbm90XG4gKiB0dW5lZCBpbnRvIGVxdWFsIHRlbWVwZXJlZCBzY2FsZS5cbiAqXG4gKiBUaGlzIG1vZHVsZSBjb250YWlucyBmdW5jdGlvbnMgdG8gY29udmVydCB0byBhbmQgZnJvbSBtaWRpIG5vdGVzLlxuICpcbiAqIEBleGFtcGxlXG4gKiB2YXIgbWlkaSA9IHJlcXVpcmUoJ3RvbmFsLW1pZGknKVxuICogbWlkaS50b01pZGkoJ0E0JykgLy8gPT4gNjlcbiAqIG1pZGkubm90ZSg2OSkgLy8gPT4gJ0E0J1xuICogbWlkaS5ub3RlKDYxKSAvLyA9PiAnRGI0J1xuICogbWlkaS5ub3RlKDYxLCB0cnVlKSAvLyA9PiAnQyM0J1xuICpcbiAqIEBtb2R1bGUgbWlkaVxuICovXG5cbmltcG9ydCB7IG1pZGkgfSBmcm9tICdub3RlLXBhcnNlcidcblxuLyoqXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBub3RlIHRvIGEgbWlkaSBub3RlIG51bWJlci4gSWYgeW91IHBhc3MgYSBtaWRpIG51bWJlciBpdFxuICogd2lsbCByZXR1cm5lZCBhcyBpcy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fFN0cmluZ3xOdW1iZXJ9IG5vdGUgLSB0aGUgbm90ZSB0byBnZXQgdGhlIG1pZGkgbnVtYmVyIGZyb21cbiAqIEByZXR1cm4ge0ludGVnZXJ9IHRoZSBtaWRpIG51bWJlciBvciBudWxsIGlmIG5vdCB2YWxpZCBwaXRjaFxuICogQGV4YW1wbGVcbiAqIG1pZGkudG9NaWRpKCdDNCcpIC8vID0+IDYwXG4gKiBtaWRpLnRvTWlkaSg2MCkgLy8gPT4gNjBcbiAqIG1pZGkudG9NaWRpKCc2MCcpIC8vID0+IDYwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b01pZGkgKHZhbCkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpICYmIHZhbC5sZW5ndGggPT09IDIpIHJldHVybiB2YWxbMF0gKiA3ICsgdmFsWzFdICogMTIgKyAxMlxuICByZXR1cm4gbWlkaSh2YWwpXG59XG5cbnZhciBGTEFUUyA9ICdDIERiIEQgRWIgRSBGIEdiIEcgQWIgQSBCYiBCJy5zcGxpdCgnICcpXG52YXIgU0hBUlBTID0gJ0MgQyMgRCBEIyBFIEYgRiMgRyBHIyBBIEEjIEInLnNwbGl0KCcgJylcblxuLyoqXG4gKiBHaXZlbiBhIG1pZGkgbnVtYmVyLCByZXR1cm5zIGEgbm90ZSBuYW1lLiBUaGUgYWx0ZXJlZCBub3RlcyB3aWxsIGhhdmVcbiAqIGZsYXRzIHVubGVzcyBleHBsaWNpdGx5IHNldCB3aXRoIHRoZSBvcHRpb25hbCBgdXNlU2hhcnBzYCBwYXJhbWV0ZXIuXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0ludGVnZXJ9IG1pZGkgLSB0aGUgbWlkaSBub3RlIG51bWJlclxuICogQHBhcmFtIHtCb29sZWFufSB1c2VTaGFycHMgLSAoT3B0aW9uYWwpIHNldCB0byB0cnVlIHRvIHVzZSBzaGFycHMgaW5zdGVhZCBvZiBmbGF0c1xuICogQHJldHVybiB7U3RyaW5nfSB0aGUgbm90ZSBuYW1lXG4gKiBAZXhhbXBsZVxuICogdmFyIG1pZGkgPSByZXF1aXJlKCd0b25hbC1taWRpJylcbiAqIG1pZGkubm90ZSg2MSkgLy8gPT4gJ0RiNCdcbiAqIG1pZGkubm90ZSg2MSwgdHJ1ZSkgLy8gPT4gJ0MjNCdcbiAqIC8vIGl0IHJvdW5kcyB0byBuZWFyZXN0IG5vdGVcbiAqIG1pZGkubm90ZSg2MS43KSAvLyA9PiAnRDQnXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3RlIChudW0sIHNoYXJwcykge1xuICBpZiAobnVtID09PSB0cnVlIHx8IG51bSA9PT0gZmFsc2UpIHJldHVybiBmdW5jdGlvbiAobSkgeyByZXR1cm4gbm90ZShtLCBudW0pIH1cbiAgbnVtID0gTWF0aC5yb3VuZChudW0pXG4gIHZhciBwY3MgPSBzaGFycHMgPT09IHRydWUgPyBTSEFSUFMgOiBGTEFUU1xuICB2YXIgcGMgPSBwY3NbbnVtICUgMTJdXG4gIHZhciBvID0gTWF0aC5mbG9vcihudW0gLyAxMikgLSAxXG4gIHJldHVybiBwYyArIG9cbn1cbiIsICJ7XG4gIFwibmFtZVwiOiBcIm1pZGktd3JpdGVyLWpzXCIsXG4gIFwidmVyc2lvblwiOiBcIjIuMC4xXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJBIGxpYnJhcnkgcHJvdmlkaW5nIGFuIEFQSSBmb3IgZ2VuZXJhdGluZyBNSURJIGZpbGVzLlwiLFxuICBcIm1haW5cIjogXCJidWlsZC9pbmRleC5qc1wiLFxuICBcInR5cGVzXCI6IFwidHlwZXMuZC50c1wiLFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJ0b25hbC1taWRpXCI6IFwiXjAuNjkuN1wiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBiYWJlbC9jb3JlXCI6IFwiXjcuOS42XCIsXG4gICAgXCJAYmFiZWwvcGx1Z2luLXRyYW5zZm9ybS1kZXN0cnVjdHVyaW5nXCI6IFwiXjcuOS41XCIsXG4gICAgXCJAYmFiZWwvcHJlc2V0LWVudlwiOiBcIl43LjkuNlwiLFxuICAgIFwiQHJvbGx1cC9wbHVnaW4tYmFiZWxcIjogXCJeNS4wLjBcIixcbiAgICBcImVzbGludFwiOiBcIl43LjAuMFwiLFxuICAgIFwiZXNsaW50LWNvbmZpZy1zdGFuZGFyZFwiOiBcIl4xMi4wLjBcIixcbiAgICBcImVzbGludC1wbHVnaW4taW1wb3J0XCI6IFwiXjIuMjAuMlwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1ub2RlXCI6IFwiXjkuMi4wXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXByb21pc2VcIjogXCJeNC4xLjFcIixcbiAgICBcImVzbGludC1wbHVnaW4tc3RhbmRhcmRcIjogXCJeNC4wLjFcIixcbiAgICBcImpzZG9jXCI6IFwiXjMuNi40XCIsXG4gICAgXCJtaW5hbWlcIjogXCJeMS4yLjNcIixcbiAgICBcIm1vY2hhXCI6IFwiXjkuMC4xXCIsXG4gICAgXCJueWNcIjogXCJeMTUuMC4xXCIsXG4gICAgXCJyb2xsdXBcIjogXCJeMi45LjBcIixcbiAgICBcIndhdGNoXCI6IFwiXjEuMC4yXCJcbiAgfSxcbiAgXCJkaXJlY3Rvcmllc1wiOiB7XG4gICAgXCJsaWJcIjogXCJzcmNcIixcbiAgICBcImV4YW1wbGVcIjogXCJleGFtcGxlc1wiLFxuICAgIFwidGVzdFwiOiBcInRlc3RcIlxuICB9LFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwiYnVpbGRcIjogXCJta2RpciAtcCBidWlsZCAmJiByb2xsdXAgLWMgJiYgbnBtIHJ1biBkb2NzXCIsXG4gICAgXCJkb2NzXCI6IFwiLi9ub2RlX21vZHVsZXMvLmJpbi9qc2RvYyAtciBzcmMgUkVBRE1FLm1kIC1kIC4vZG9jcyAtdCAuL25vZGVfbW9kdWxlcy9taW5hbWlcIixcbiAgICBcImxpbnQ6anNcIjogXCJlc2xpbnQgJ3NyYy8qKi8qKi5qcydcIixcbiAgICBcInByZXB1Ymxpc2hPbmx5XCI6IFwibnBtIHRlc3RcIixcbiAgICBcInByZXRlc3RcIjogXCJucG0gcnVuIGJ1aWxkXCIsXG4gICAgXCJ0ZXN0XCI6IFwibnljIC0tcmVwb3J0ZXI9dGV4dCBtb2NoYSAtLW5vLWNvbmZpZyAtLW5vLXBhY2thZ2VcIixcbiAgICBcIndhdGNoXCI6IFwid2F0Y2ggJ25wbSBydW4gYnVpbGQnIHNyY1wiLFxuICAgIFwicG9zdGluc3RhbGxcIjogXCJub2RlIHBvc3RpbnN0YWxsLmpzXCJcbiAgfSxcbiAgXCJydW5raXRFeGFtcGxlRmlsZW5hbWVcIjogXCJydW5raXQuanNcIixcbiAgXCJyZXBvc2l0b3J5XCI6IHtcbiAgICBcInR5cGVcIjogXCJnaXRcIixcbiAgICBcInVybFwiOiBcImdpdCtodHRwczovL2dpdGh1Yi5jb20vZ3JpbW1kdWRlL01pZGlXcml0ZXJKUy5naXRcIlxuICB9LFxuICBcImtleXdvcmRzXCI6IFtcbiAgICBcIm1pZGlcIixcbiAgICBcImdlbmVyYXRvclwiLFxuICAgIFwibXVzaWNcIlxuICBdLFxuICBcImF1dGhvclwiOiBcIkdhcnJldHQgR3JpbW1cIixcbiAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gIFwiYnVnc1wiOiB7XG4gICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZ3JpbW1kdWRlL01pZGlXcml0ZXJKUy9pc3N1ZXNcIlxuICB9LFxuICBcImhvbWVwYWdlXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2dyaW1tZHVkZS9NaWRpV3JpdGVySlMjcmVhZG1lXCJcbn1cbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciB0b25hbE1pZGkgPSByZXF1aXJlKCd0b25hbC1taWRpJyk7XG5cbi8qKlxuICogTUlESSBmaWxlIGZvcm1hdCBjb25zdGFudHMuXG4gKiBAcmV0dXJuIHtDb25zdGFudHN9XG4gKi9cbnZhciBDb25zdGFudHMgPSB7XG4gIFZFUlNJT046IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpLnZlcnNpb24sXG4gIEhFQURFUl9DSFVOS19UWVBFOiBbMHg0ZCwgMHg1NCwgMHg2OCwgMHg2NF0sXG4gIC8vIE10aGRcbiAgSEVBREVSX0NIVU5LX0xFTkdUSDogWzB4MDAsIDB4MDAsIDB4MDAsIDB4MDZdLFxuICAvLyBIZWFkZXIgc2l6ZSBmb3IgU01GXG4gIEhFQURFUl9DSFVOS19GT1JNQVQwOiBbMHgwMCwgMHgwMF0sXG4gIC8vIE1pZGkgVHlwZSAwIGlkXG4gIEhFQURFUl9DSFVOS19GT1JNQVQxOiBbMHgwMCwgMHgwMV0sXG4gIC8vIE1pZGkgVHlwZSAxIGlkXG4gIEhFQURFUl9DSFVOS19ESVZJU0lPTjogWzB4MDAsIDB4ODBdLFxuICAvLyBEZWZhdWx0cyB0byAxMjggdGlja3MgcGVyIGJlYXRcbiAgVFJBQ0tfQ0hVTktfVFlQRTogWzB4NGQsIDB4NTQsIDB4NzIsIDB4NmJdLFxuICAvLyBNVHJrLFxuICBNRVRBX0VWRU5UX0lEOiAweEZGLFxuICBNRVRBX1RFWFRfSUQ6IDB4MDEsXG4gIE1FVEFfQ09QWVJJR0hUX0lEOiAweDAyLFxuICBNRVRBX1RSQUNLX05BTUVfSUQ6IDB4MDMsXG4gIE1FVEFfSU5TVFJVTUVOVF9OQU1FX0lEOiAweDA0LFxuICBNRVRBX0xZUklDX0lEOiAweDA1LFxuICBNRVRBX01BUktFUl9JRDogMHgwNixcbiAgTUVUQV9DVUVfUE9JTlQ6IDB4MDcsXG4gIE1FVEFfVEVNUE9fSUQ6IDB4NTEsXG4gIE1FVEFfU01UUEVfT0ZGU0VUOiAweDU0LFxuICBNRVRBX1RJTUVfU0lHTkFUVVJFX0lEOiAweDU4LFxuICBNRVRBX0tFWV9TSUdOQVRVUkVfSUQ6IDB4NTksXG4gIE1FVEFfRU5EX09GX1RSQUNLX0lEOiBbMHgyRiwgMHgwMF0sXG4gIENPTlRST0xMRVJfQ0hBTkdFX1NUQVRVUzogMHhCMCxcbiAgLy8gaW5jbHVkZXMgY2hhbm5lbCBudW1iZXIgKDApXG4gIFBST0dSQU1fQ0hBTkdFX1NUQVRVUzogMHhDMCxcbiAgLy8gaW5jbHVkZXMgY2hhbm5lbCBudW1iZXIgKDApXG4gIFBJVENIX0JFTkRfU1RBVFVTOiAweEUwIC8vIGluY2x1ZGVzIGNoYW5uZWwgbnVtYmVyICgwKVxuXG59O1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5mdW5jdGlvbiBfd3JhcFJlZ0V4cCgpIHtcbiAgX3dyYXBSZWdFeHAgPSBmdW5jdGlvbiAocmUsIGdyb3Vwcykge1xuICAgIHJldHVybiBuZXcgQmFiZWxSZWdFeHAocmUsIHVuZGVmaW5lZCwgZ3JvdXBzKTtcbiAgfTtcblxuICB2YXIgX3N1cGVyID0gUmVnRXhwLnByb3RvdHlwZTtcblxuICB2YXIgX2dyb3VwcyA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgZnVuY3Rpb24gQmFiZWxSZWdFeHAocmUsIGZsYWdzLCBncm91cHMpIHtcbiAgICB2YXIgX3RoaXMgPSBuZXcgUmVnRXhwKHJlLCBmbGFncyk7XG5cbiAgICBfZ3JvdXBzLnNldChfdGhpcywgZ3JvdXBzIHx8IF9ncm91cHMuZ2V0KHJlKSk7XG5cbiAgICByZXR1cm4gX3NldFByb3RvdHlwZU9mKF90aGlzLCBCYWJlbFJlZ0V4cC5wcm90b3R5cGUpO1xuICB9XG5cbiAgX2luaGVyaXRzKEJhYmVsUmVnRXhwLCBSZWdFeHApO1xuXG4gIEJhYmVsUmVnRXhwLnByb3RvdHlwZS5leGVjID0gZnVuY3Rpb24gKHN0cikge1xuICAgIHZhciByZXN1bHQgPSBfc3VwZXIuZXhlYy5jYWxsKHRoaXMsIHN0cik7XG5cbiAgICBpZiAocmVzdWx0KSByZXN1bHQuZ3JvdXBzID0gYnVpbGRHcm91cHMocmVzdWx0LCB0aGlzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIEJhYmVsUmVnRXhwLnByb3RvdHlwZVtTeW1ib2wucmVwbGFjZV0gPSBmdW5jdGlvbiAoc3RyLCBzdWJzdGl0dXRpb24pIHtcbiAgICBpZiAodHlwZW9mIHN1YnN0aXR1dGlvbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgdmFyIGdyb3VwcyA9IF9ncm91cHMuZ2V0KHRoaXMpO1xuXG4gICAgICByZXR1cm4gX3N1cGVyW1N5bWJvbC5yZXBsYWNlXS5jYWxsKHRoaXMsIHN0ciwgc3Vic3RpdHV0aW9uLnJlcGxhY2UoL1xcJDwoW14+XSspPi9nLCBmdW5jdGlvbiAoXywgbmFtZSkge1xuICAgICAgICByZXR1cm4gXCIkXCIgKyBncm91cHNbbmFtZV07XG4gICAgICB9KSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc3Vic3RpdHV0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBfc3VwZXJbU3ltYm9sLnJlcGxhY2VdLmNhbGwodGhpcywgc3RyLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuXG4gICAgICAgIGlmICh0eXBlb2YgYXJnc1thcmdzLmxlbmd0aCAtIDFdICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJncyk7XG4gICAgICAgICAgYXJncy5wdXNoKGJ1aWxkR3JvdXBzKGFyZ3MsIF90aGlzKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3Vic3RpdHV0aW9uLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBfc3VwZXJbU3ltYm9sLnJlcGxhY2VdLmNhbGwodGhpcywgc3RyLCBzdWJzdGl0dXRpb24pO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBidWlsZEdyb3VwcyhyZXN1bHQsIHJlKSB7XG4gICAgdmFyIGcgPSBfZ3JvdXBzLmdldChyZSk7XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZykucmVkdWNlKGZ1bmN0aW9uIChncm91cHMsIG5hbWUpIHtcbiAgICAgIGdyb3Vwc1tuYW1lXSA9IHJlc3VsdFtnW25hbWVdXTtcbiAgICAgIHJldHVybiBncm91cHM7XG4gICAgfSwgT2JqZWN0LmNyZWF0ZShudWxsKSk7XG4gIH1cblxuICByZXR1cm4gX3dyYXBSZWdFeHAuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxuLyoqXG4gKiBTdGF0aWMgdXRpbGl0eSBmdW5jdGlvbnMgdXNlZCB0aHJvdWdob3V0IHRoZSBsaWJyYXJ5LlxuICovXG5cbnZhciBVdGlscyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFV0aWxzKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBVdGlscyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVXRpbHMsIG51bGwsIFt7XG4gICAga2V5OiBcInZlcnNpb25cIixcbiAgICB2YWx1ZTpcbiAgICAvKipcbiAgICAgKiBHZXRzIE1pZGlXcml0ZXJKUyB2ZXJzaW9uIG51bWJlci5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgZnVuY3Rpb24gdmVyc2lvbigpIHtcbiAgICAgIHJldHVybiBDb25zdGFudHMuVkVSU0lPTjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVydCBhIHN0cmluZyB0byBhbiBhcnJheSBvZiBieXRlc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdcbiAgICAgKiBAcmV0dXJuIHthcnJheX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInN0cmluZ1RvQnl0ZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RyaW5nVG9CeXRlcyhzdHJpbmcpIHtcbiAgICAgIHJldHVybiBzdHJpbmcuc3BsaXQoJycpLm1hcChmdW5jdGlvbiAoX2NoYXIpIHtcbiAgICAgICAgcmV0dXJuIF9jaGFyLmNoYXJDb2RlQXQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgYXJndW1lbnQgaXMgYSB2YWxpZCBudW1iZXIuXG4gICAgICogQHBhcmFtIHsqfSBuIC0gVmFsdWUgdG8gY2hlY2tcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaXNOdW1lcmljXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzTnVtZXJpYyhuKSB7XG4gICAgICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQobikpICYmIGlzRmluaXRlKG4pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjb3JyZWN0IE1JREkgbnVtYmVyIGZvciB0aGUgc3BlY2lmaWVkIHBpdGNoLlxuICAgICAqIFVzZXMgVG9uYWwgTWlkaSAtIGh0dHBzOi8vZ2l0aHViLmNvbS9kYW5pZ2IvdG9uYWwvdHJlZS9tYXN0ZXIvcGFja2FnZXMvbWlkaVxuICAgICAqIEBwYXJhbSB7KHN0cmluZ3xudW1iZXIpfSBwaXRjaCAtICdDIzQnIG9yIG1pZGkgbm90ZSBjb2RlXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0UGl0Y2hcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UGl0Y2gocGl0Y2gpIHtcbiAgICAgIHJldHVybiB0b25hbE1pZGkudG9NaWRpKHBpdGNoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVHJhbnNsYXRlcyBudW1iZXIgb2YgdGlja3MgdG8gTUlESSB0aW1lc3RhbXAgZm9ybWF0LCByZXR1cm5pbmcgYW4gYXJyYXkgb2ZcbiAgICAgKiBoZXggc3RyaW5ncyB3aXRoIHRoZSB0aW1lIHZhbHVlcy4gTWlkaSBoYXMgYSB2ZXJ5IHBhcnRpY3VsYXIgdGltZSB0byBleHByZXNzIHRpbWUsXG4gICAgICogdGFrZSBhIGdvb2QgbG9vayBhdCB0aGUgc3BlYyBiZWZvcmUgZXZlciB0b3VjaGluZyB0aGlzIGZ1bmN0aW9uLlxuICAgICAqIFRoYW5rcyB0byBodHRwczovL2dpdGh1Yi5jb20vc2VyZ2kvanNtaWRpXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGlja3MgLSBOdW1iZXIgb2YgdGlja3MgdG8gYmUgdHJhbnNsYXRlZFxuICAgICAqIEByZXR1cm4ge2FycmF5fSAtIEJ5dGVzIHRoYXQgZm9ybSB0aGUgTUlESSB0aW1lIHZhbHVlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJudW1iZXJUb1ZhcmlhYmxlTGVuZ3RoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG51bWJlclRvVmFyaWFibGVMZW5ndGgodGlja3MpIHtcbiAgICAgIHRpY2tzID0gTWF0aC5yb3VuZCh0aWNrcyk7XG4gICAgICB2YXIgYnVmZmVyID0gdGlja3MgJiAweDdGO1xuXG4gICAgICB3aGlsZSAodGlja3MgPSB0aWNrcyA+PiA3KSB7XG4gICAgICAgIGJ1ZmZlciA8PD0gODtcbiAgICAgICAgYnVmZmVyIHw9IHRpY2tzICYgMHg3RiB8IDB4ODA7XG4gICAgICB9XG5cbiAgICAgIHZhciBiTGlzdCA9IFtdO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBiTGlzdC5wdXNoKGJ1ZmZlciAmIDB4ZmYpO1xuICAgICAgICBpZiAoYnVmZmVyICYgMHg4MCkgYnVmZmVyID4+PSA4O2Vsc2Uge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBiTGlzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ291bnRzIG51bWJlciBvZiBieXRlcyBpbiBzdHJpbmdcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc1xuICAgICAqIEByZXR1cm4ge2FycmF5fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3RyaW5nQnl0ZUNvdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0cmluZ0J5dGVDb3VudChzKSB7XG4gICAgICByZXR1cm4gZW5jb2RlVVJJKHMpLnNwbGl0KC8lLi58Li8pLmxlbmd0aCAtIDE7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBhbiBpbnQgZnJvbSBhbiBhcnJheSBvZiBieXRlcy5cbiAgICAgKiBAcGFyYW0ge2FycmF5fSBieXRlc1xuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm51bWJlckZyb21CeXRlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBudW1iZXJGcm9tQnl0ZXMoYnl0ZXMpIHtcbiAgICAgIHZhciBoZXggPSAnJztcbiAgICAgIHZhciBzdHJpbmdSZXN1bHQ7XG4gICAgICBieXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChfYnl0ZSkge1xuICAgICAgICBzdHJpbmdSZXN1bHQgPSBfYnl0ZS50b1N0cmluZygxNik7IC8vIGVuc3VyZSBzdHJpbmcgaXMgMiBjaGFyc1xuXG4gICAgICAgIGlmIChzdHJpbmdSZXN1bHQubGVuZ3RoID09IDEpIHN0cmluZ1Jlc3VsdCA9IFwiMFwiICsgc3RyaW5nUmVzdWx0O1xuICAgICAgICBoZXggKz0gc3RyaW5nUmVzdWx0O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcGFyc2VJbnQoaGV4LCAxNik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRha2VzIGEgbnVtYmVyIGFuZCBzcGxpdHMgaXQgdXAgaW50byBhbiBhcnJheSBvZiBieXRlcy4gIENhbiBiZSBwYWRkZWQgYnkgcGFzc2luZyBhIG51bWJlciB0byBieXRlc05lZWRlZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYnl0ZXNOZWVkZWRcbiAgICAgKiBAcmV0dXJuIHthcnJheX0gLSBBcnJheSBvZiBieXRlc1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibnVtYmVyVG9CeXRlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBudW1iZXJUb0J5dGVzKG51bWJlciwgYnl0ZXNOZWVkZWQpIHtcbiAgICAgIGJ5dGVzTmVlZGVkID0gYnl0ZXNOZWVkZWQgfHwgMTtcbiAgICAgIHZhciBoZXhTdHJpbmcgPSBudW1iZXIudG9TdHJpbmcoMTYpO1xuXG4gICAgICBpZiAoaGV4U3RyaW5nLmxlbmd0aCAmIDEpIHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIGhleCBzdHJpbmcgaXMgZXZlbiBudW1iZXIgb2YgY2hhcnNcbiAgICAgICAgaGV4U3RyaW5nID0gJzAnICsgaGV4U3RyaW5nO1xuICAgICAgfSAvLyBTcGxpdCBoZXggc3RyaW5nIGludG8gYW4gYXJyYXkgb2YgdHdvIGNoYXIgZWxlbWVudHNcblxuXG4gICAgICB2YXIgaGV4QXJyYXkgPSBoZXhTdHJpbmcubWF0Y2goLy57Mn0vZyk7IC8vIE5vdyBwYXJzZSB0aGVtIG91dCBhcyBpbnRlZ2Vyc1xuXG4gICAgICBoZXhBcnJheSA9IGhleEFycmF5Lm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoaXRlbSwgMTYpO1xuICAgICAgfSk7IC8vIFByZXBlbmQgZW1wdHkgYnl0ZXMgaWYgd2UgZG9uJ3QgaGF2ZSBlbm91Z2hcblxuICAgICAgaWYgKGhleEFycmF5Lmxlbmd0aCA8IGJ5dGVzTmVlZGVkKSB7XG4gICAgICAgIHdoaWxlIChieXRlc05lZWRlZCAtIGhleEFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBoZXhBcnJheS51bnNoaWZ0KDApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoZXhBcnJheTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgdmFsdWUgdG8gYXJyYXkgaWYgbmVlZGVkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgICAqIEByZXR1cm4ge2FycmF5fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidG9BcnJheVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b0FycmF5KHZhbHVlKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICAgIHJldHVybiBbdmFsdWVdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyB2ZWxvY2l0eSB0byB2YWx1ZSAwLTEyN1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2ZWxvY2l0eSAtIFZlbG9jaXR5IHZhbHVlIDEtMTAwXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY29udmVydFZlbG9jaXR5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbnZlcnRWZWxvY2l0eSh2ZWxvY2l0eSkge1xuICAgICAgLy8gTWF4IHBhc3NlZCB2YWx1ZSBsaW1pdGVkIHRvIDEwMFxuICAgICAgdmVsb2NpdHkgPSB2ZWxvY2l0eSA+IDEwMCA/IDEwMCA6IHZlbG9jaXR5O1xuICAgICAgcmV0dXJuIE1hdGgucm91bmQodmVsb2NpdHkgLyAxMDAgKiAxMjcpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSB0b3RhbCBudW1iZXIgb2YgdGlja3Mgb2YgYSBzcGVjaWZpZWQgZHVyYXRpb24uXG4gICAgICogTm90ZTogdHlwZT09J25vdGUnIGRlZmF1bHRzIHRvIHF1YXJ0ZXIgbm90ZSwgdHlwZT09PSdyZXN0JyBkZWZhdWx0cyB0byAwXG4gICAgICogQHBhcmFtIHsoc3RyaW5nfGFycmF5KX0gZHVyYXRpb25cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRUaWNrRHVyYXRpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VGlja0R1cmF0aW9uKGR1cmF0aW9uKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShkdXJhdGlvbikpIHtcbiAgICAgICAgLy8gUmVjdXJzaXZlbHkgZXhlY3V0ZSB0aGlzIG1ldGhvZCBmb3IgZWFjaCBpdGVtIGluIHRoZSBhcnJheSBhbmQgcmV0dXJuIHRoZSBzdW0gb2YgdGljayBkdXJhdGlvbnMuXG4gICAgICAgIHJldHVybiBkdXJhdGlvbi5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIFV0aWxzLmdldFRpY2tEdXJhdGlvbih2YWx1ZSk7XG4gICAgICAgIH0pLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgIHJldHVybiBhICsgYjtcbiAgICAgICAgfSwgMCk7XG4gICAgICB9XG5cbiAgICAgIGR1cmF0aW9uID0gZHVyYXRpb24udG9TdHJpbmcoKTtcblxuICAgICAgaWYgKGR1cmF0aW9uLnRvTG93ZXJDYXNlKCkuY2hhckF0KDApID09PSAndCcpIHtcbiAgICAgICAgLy8gSWYgZHVyYXRpb24gc3RhcnRzIHdpdGggJ3QnIHRoZW4gdGhlIG51bWJlciB0aGF0IGZvbGxvd3MgaXMgYW4gZXhwbGljaXQgdGljayBjb3VudFxuICAgICAgICByZXR1cm4gcGFyc2VJbnQoZHVyYXRpb24uc3Vic3RyaW5nKDEpKTtcbiAgICAgIH0gLy8gTmVlZCB0byBhcHBseSBkdXJhdGlvbiBoZXJlLiAgUXVhcnRlciBub3RlID09IENvbnN0YW50cy5IRUFERVJfQ0hVTktfRElWSVNJT05cblxuXG4gICAgICB2YXIgcXVhcnRlclRpY2tzID0gVXRpbHMubnVtYmVyRnJvbUJ5dGVzKENvbnN0YW50cy5IRUFERVJfQ0hVTktfRElWSVNJT04pO1xuICAgICAgdmFyIHRpY2tEdXJhdGlvbiA9IHF1YXJ0ZXJUaWNrcyAqIFV0aWxzLmdldER1cmF0aW9uTXVsdGlwbGllcihkdXJhdGlvbik7XG4gICAgICByZXR1cm4gVXRpbHMuZ2V0Um91bmRlZElmQ2xvc2UodGlja0R1cmF0aW9uKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRHVlIHRvIHJvdW5kaW5nIGVycm9ycyBpbiBKYXZhU2NyaXB0IGVuZ2luZXMsXG4gICAgICogaXQncyBzYWZlIHRvIHJvdW5kIHdoZW4gd2UncmUgdmVyeSBjbG9zZSB0byB0aGUgYWN0dWFsIHRpY2sgbnVtYmVyXG4gICAgICpcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpY2tcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRSb3VuZGVkSWZDbG9zZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSb3VuZGVkSWZDbG9zZSh0aWNrKSB7XG4gICAgICB2YXIgcm91bmRlZFRpY2sgPSBNYXRoLnJvdW5kKHRpY2spO1xuICAgICAgcmV0dXJuIE1hdGguYWJzKHJvdW5kZWRUaWNrIC0gdGljaykgPCAwLjAwMDAwMSA/IHJvdW5kZWRUaWNrIDogdGljaztcbiAgICB9XG4gICAgLyoqXG4gICAgICogRHVlIHRvIGxvdyBwcmVjaXNpb24gb2YgTUlESSxcbiAgICAgKiB3ZSBuZWVkIHRvIGtlZXAgdHJhY2sgb2Ygcm91bmRpbmcgZXJyb3JzIGluIGRlbHRhcy5cbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHdpbGwgY2FsY3VsYXRlIHRoZSByb3VuZGluZyBlcnJvciBmb3IgYSBnaXZlbiBkdXJhdGlvbi5cbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGlja1xuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFByZWNpc2lvbkxvc3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UHJlY2lzaW9uTG9zcyh0aWNrKSB7XG4gICAgICB2YXIgcm91bmRlZFRpY2sgPSBNYXRoLnJvdW5kKHRpY2spO1xuICAgICAgcmV0dXJuIHJvdW5kZWRUaWNrIC0gdGljaztcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB3aGF0IHRvIG11bHRpcGxlIHRpY2tzL3F1YXJ0ZXIgbm90ZSBieSB0byBnZXQgdGhlIHNwZWNpZmllZCBkdXJhdGlvbi5cbiAgICAgKiBOb3RlOiB0eXBlPT0nbm90ZScgZGVmYXVsdHMgdG8gcXVhcnRlciBub3RlLCB0eXBlPT09J3Jlc3QnIGRlZmF1bHRzIHRvIDBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZHVyYXRpb25cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXREdXJhdGlvbk11bHRpcGxpZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RHVyYXRpb25NdWx0aXBsaWVyKGR1cmF0aW9uKSB7XG4gICAgICAvLyBOZWVkIHRvIGFwcGx5IGR1cmF0aW9uIGhlcmUuXG4gICAgICAvLyBRdWFydGVyIG5vdGUgPT0gQ29uc3RhbnRzLkhFQURFUl9DSFVOS19ESVZJU0lPTiB0aWNrcy5cbiAgICAgIGlmIChkdXJhdGlvbiA9PT0gJzAnKSByZXR1cm4gMDtcbiAgICAgIHZhciBtYXRjaCA9IGR1cmF0aW9uLm1hdGNoKCAvKiNfX1BVUkVfXyovX3dyYXBSZWdFeHAoL14oZCspPyhbMC05XSspKD86dChbMC05XSopKT8vLCB7XG4gICAgICAgIGRvdHRlZDogMSxcbiAgICAgICAgYmFzZTogMixcbiAgICAgICAgdHVwbGV0OiAzXG4gICAgICB9KSk7XG5cbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICB2YXIgYmFzZSA9IE51bWJlcihtYXRjaC5ncm91cHMuYmFzZSk7IC8vIDEgb3IgYW55IHBvd2VyIG9mIHR3bzpcblxuICAgICAgICB2YXIgaXNWYWxpZEJhc2UgPSBiYXNlID09PSAxIHx8IChiYXNlICYgYmFzZSAtIDEpID09PSAwO1xuXG4gICAgICAgIGlmIChpc1ZhbGlkQmFzZSkge1xuICAgICAgICAgIC8vIGhvdyBtdWNoIGZhc3RlciBvciBzbG93ZXIgaXMgdGhpcyBub3RlIGNvbXBhcmVkIHRvIGEgcXVhcnRlcj9cbiAgICAgICAgICB2YXIgcmF0aW8gPSBiYXNlIC8gNDtcbiAgICAgICAgICB2YXIgZHVyYXRpb25JblF1YXJ0ZXJzID0gMSAvIHJhdGlvO1xuICAgICAgICAgIHZhciBfbWF0Y2gkZ3JvdXBzID0gbWF0Y2guZ3JvdXBzLFxuICAgICAgICAgICAgICBkb3R0ZWQgPSBfbWF0Y2gkZ3JvdXBzLmRvdHRlZCxcbiAgICAgICAgICAgICAgdHVwbGV0ID0gX21hdGNoJGdyb3Vwcy50dXBsZXQ7XG5cbiAgICAgICAgICBpZiAoZG90dGVkKSB7XG4gICAgICAgICAgICB2YXIgdGhpc01hbnlEb3RzID0gZG90dGVkLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciBkaXZpc29yID0gTWF0aC5wb3coMiwgdGhpc01hbnlEb3RzKTtcbiAgICAgICAgICAgIGR1cmF0aW9uSW5RdWFydGVycyA9IGR1cmF0aW9uSW5RdWFydGVycyArIGR1cmF0aW9uSW5RdWFydGVycyAqICgoZGl2aXNvciAtIDEpIC8gZGl2aXNvcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0dXBsZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB2YXIgZml0SW50byA9IGR1cmF0aW9uSW5RdWFydGVycyAqIDI7IC8vIGRlZmF1bHQgdG8gdHJpcGxldDpcblxuICAgICAgICAgICAgdmFyIHRoaXNNYW55Tm90ZXMgPSBOdW1iZXIodHVwbGV0IHx8ICczJyk7XG4gICAgICAgICAgICBkdXJhdGlvbkluUXVhcnRlcnMgPSBmaXRJbnRvIC8gdGhpc01hbnlOb3RlcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZHVyYXRpb25JblF1YXJ0ZXJzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihkdXJhdGlvbiArICcgaXMgbm90IGEgdmFsaWQgZHVyYXRpb24uJyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFV0aWxzO1xufSgpO1xuXG4vKipcbiAqIEhvbGRzIGFsbCBkYXRhIGZvciBhIFwibm90ZSBvblwiIE1JREkgZXZlbnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZHMge2RhdGE6IFtdfVxuICogQHJldHVybiB7Tm90ZU9uRXZlbnR9XG4gKi9cblxudmFyIE5vdGVPbkV2ZW50ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTm90ZU9uRXZlbnQoZmllbGRzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5vdGVPbkV2ZW50KTtcblxuICAgIC8vIFNldCBkZWZhdWx0IGZpZWxkc1xuICAgIGZpZWxkcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2hhbm5lbDogMSxcbiAgICAgIHN0YXJ0VGljazogbnVsbCxcbiAgICAgIHZlbG9jaXR5OiA1MCxcbiAgICAgIHdhaXQ6IDBcbiAgICB9LCBmaWVsZHMpO1xuICAgIHRoaXMudHlwZSA9ICdub3RlLW9uJztcbiAgICB0aGlzLmNoYW5uZWwgPSBmaWVsZHMuY2hhbm5lbDtcbiAgICB0aGlzLnBpdGNoID0gZmllbGRzLnBpdGNoO1xuICAgIHRoaXMud2FpdCA9IGZpZWxkcy53YWl0O1xuICAgIHRoaXMudmVsb2NpdHkgPSBmaWVsZHMudmVsb2NpdHk7XG4gICAgdGhpcy5zdGFydFRpY2sgPSBmaWVsZHMuc3RhcnRUaWNrO1xuICAgIHRoaXMubWlkaU51bWJlciA9IFV0aWxzLmdldFBpdGNoKHRoaXMucGl0Y2gpO1xuICAgIHRoaXMudGljayA9IG51bGw7XG4gICAgdGhpcy5kZWx0YSA9IG51bGw7XG4gICAgdGhpcy5kYXRhID0gZmllbGRzLmRhdGE7XG4gIH1cbiAgLyoqXG4gICAqIEJ1aWxkcyBpbnQgYXJyYXkgZm9yIHRoaXMgZXZlbnQuXG4gICAqIEBwYXJhbSB7VHJhY2t9IHRyYWNrIC0gcGFyZW50IHRyYWNrXG4gICAqIEByZXR1cm4ge05vdGVPbkV2ZW50fVxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhOb3RlT25FdmVudCwgW3tcbiAgICBrZXk6IFwiYnVpbGREYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJ1aWxkRGF0YSh0cmFjaywgcHJlY2lzaW9uRGVsdGEpIHtcbiAgICAgIHRoaXMuZGF0YSA9IFtdOyAvLyBFeHBsaWNpdGx5IGRlZmluZWQgc3RhcnRUaWNrIGV2ZW50XG5cbiAgICAgIGlmICh0aGlzLnN0YXJ0VGljaykge1xuICAgICAgICB0aGlzLnRpY2sgPSBVdGlscy5nZXRSb3VuZGVkSWZDbG9zZSh0aGlzLnN0YXJ0VGljayk7IC8vIElmIHRoaXMgaXMgdGhlIGZpcnN0IGV2ZW50IGluIHRoZSB0cmFjayB0aGVuIHVzZSBldmVudCdzIHN0YXJ0aW5nIHRpY2sgYXMgZGVsdGEuXG5cbiAgICAgICAgaWYgKHRyYWNrLnRpY2tQb2ludGVyID09IDApIHtcbiAgICAgICAgICB0aGlzLmRlbHRhID0gdGhpcy50aWNrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRlbHRhID0gVXRpbHMuZ2V0VGlja0R1cmF0aW9uKHRoaXMud2FpdCk7XG4gICAgICAgIHRoaXMudGljayA9IFV0aWxzLmdldFJvdW5kZWRJZkNsb3NlKHRyYWNrLnRpY2tQb2ludGVyICsgdGhpcy5kZWx0YSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGVsdGFXaXRoUHJlY2lzaW9uQ29ycmVjdGlvbiA9IFV0aWxzLmdldFJvdW5kZWRJZkNsb3NlKHRoaXMuZGVsdGEgLSBwcmVjaXNpb25EZWx0YSk7XG4gICAgICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRoaXMuZGVsdGFXaXRoUHJlY2lzaW9uQ29ycmVjdGlvbikuY29uY2F0KHRoaXMuZ2V0U3RhdHVzQnl0ZSgpLCB0aGlzLm1pZGlOdW1iZXIsIFV0aWxzLmNvbnZlcnRWZWxvY2l0eSh0aGlzLnZlbG9jaXR5KSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgbm90ZSBvbiBzdGF0dXMgY29kZSBiYXNlZCBvbiB0aGUgc2VsZWN0ZWQgY2hhbm5lbC4gMHg5ezAtRn1cbiAgICAgKiBOb3RlIG9uIGF0IGNoYW5uZWwgMCBpcyAweDkwICgxNDQpXG4gICAgICogMCA9IENoIDFcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRTdGF0dXNCeXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFN0YXR1c0J5dGUoKSB7XG4gICAgICByZXR1cm4gMTQ0ICsgdGhpcy5jaGFubmVsIC0gMTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTm90ZU9uRXZlbnQ7XG59KCk7XG5cbi8qKlxuICogSG9sZHMgYWxsIGRhdGEgZm9yIGEgXCJub3RlIG9mZlwiIE1JREkgZXZlbnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZHMge2RhdGE6IFtdfVxuICogQHJldHVybiB7Tm90ZU9mZkV2ZW50fVxuICovXG5cbnZhciBOb3RlT2ZmRXZlbnQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBOb3RlT2ZmRXZlbnQoZmllbGRzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5vdGVPZmZFdmVudCk7XG5cbiAgICAvLyBTZXQgZGVmYXVsdCBmaWVsZHNcbiAgICBmaWVsZHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNoYW5uZWw6IDEsXG4gICAgICB2ZWxvY2l0eTogNTAsXG4gICAgICB0aWNrOiBudWxsXG4gICAgfSwgZmllbGRzKTtcbiAgICB0aGlzLnR5cGUgPSAnbm90ZS1vZmYnO1xuICAgIHRoaXMuY2hhbm5lbCA9IGZpZWxkcy5jaGFubmVsO1xuICAgIHRoaXMucGl0Y2ggPSBmaWVsZHMucGl0Y2g7XG4gICAgdGhpcy5kdXJhdGlvbiA9IGZpZWxkcy5kdXJhdGlvbjtcbiAgICB0aGlzLnZlbG9jaXR5ID0gZmllbGRzLnZlbG9jaXR5O1xuICAgIHRoaXMubWlkaU51bWJlciA9IFV0aWxzLmdldFBpdGNoKHRoaXMucGl0Y2gpO1xuICAgIHRoaXMudGljayA9IGZpZWxkcy50aWNrO1xuICAgIHRoaXMuZGVsdGEgPSBVdGlscy5nZXRUaWNrRHVyYXRpb24odGhpcy5kdXJhdGlvbik7XG4gICAgdGhpcy5kYXRhID0gZmllbGRzLmRhdGE7XG4gIH1cbiAgLyoqXG4gICAqIEJ1aWxkcyBpbnQgYXJyYXkgZm9yIHRoaXMgZXZlbnQuXG4gICAqIEBwYXJhbSB7VHJhY2t9IHRyYWNrIC0gcGFyZW50IHRyYWNrXG4gICAqIEByZXR1cm4ge05vdGVPZmZFdmVudH1cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoTm90ZU9mZkV2ZW50LCBbe1xuICAgIGtleTogXCJidWlsZERhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYnVpbGREYXRhKHRyYWNrLCBwcmVjaXNpb25EZWx0YSkge1xuICAgICAgaWYgKHRoaXMudGljayA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLnRpY2sgPSBVdGlscy5nZXRSb3VuZGVkSWZDbG9zZSh0aGlzLmRlbHRhICsgdHJhY2sudGlja1BvaW50ZXIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRlbHRhV2l0aFByZWNpc2lvbkNvcnJlY3Rpb24gPSBVdGlscy5nZXRSb3VuZGVkSWZDbG9zZSh0aGlzLmRlbHRhIC0gcHJlY2lzaW9uRGVsdGEpO1xuICAgICAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0aGlzLmRlbHRhV2l0aFByZWNpc2lvbkNvcnJlY3Rpb24pLmNvbmNhdCh0aGlzLmdldFN0YXR1c0J5dGUoKSwgdGhpcy5taWRpTnVtYmVyLCBVdGlscy5jb252ZXJ0VmVsb2NpdHkodGhpcy52ZWxvY2l0eSkpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIG5vdGUgb2ZmIHN0YXR1cyBjb2RlIGJhc2VkIG9uIHRoZSBzZWxlY3RlZCBjaGFubmVsLiAweDh7MC1GfVxuICAgICAqIE5vdGUgb2ZmIGF0IGNoYW5uZWwgMCBpcyAweDgwICgxMjgpXG4gICAgICogMCA9IENoIDFcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRTdGF0dXNCeXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFN0YXR1c0J5dGUoKSB7XG4gICAgICByZXR1cm4gMTI4ICsgdGhpcy5jaGFubmVsIC0gMTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTm90ZU9mZkV2ZW50O1xufSgpO1xuXG4vKipcbiAqIFdyYXBwZXIgZm9yIG5vdGVPbkV2ZW50L25vdGVPZmZFdmVudCBvYmplY3RzIHRoYXQgYnVpbGRzIGJvdGggZXZlbnRzLlxuICogQHBhcmFtIHtvYmplY3R9IGZpZWxkcyAtIHtwaXRjaDogJ1tDNF0nLCBkdXJhdGlvbjogJzQnLCB3YWl0OiAnNCcsIHZlbG9jaXR5OiAxLTEwMH1cbiAqIEByZXR1cm4ge05vdGVFdmVudH1cbiAqL1xuXG52YXIgTm90ZUV2ZW50ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTm90ZUV2ZW50KGZpZWxkcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb3RlRXZlbnQpO1xuXG4gICAgLy8gU2V0IGRlZmF1bHQgZmllbGRzXG4gICAgZmllbGRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjaGFubmVsOiAxLFxuICAgICAgcmVwZWF0OiAxLFxuICAgICAgc2VxdWVudGlhbDogZmFsc2UsXG4gICAgICBzdGFydFRpY2s6IG51bGwsXG4gICAgICB2ZWxvY2l0eTogNTAsXG4gICAgICB3YWl0OiAwXG4gICAgfSwgZmllbGRzKTtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICB0aGlzLnR5cGUgPSAnbm90ZSc7XG4gICAgdGhpcy5waXRjaCA9IFV0aWxzLnRvQXJyYXkoZmllbGRzLnBpdGNoKTtcbiAgICB0aGlzLmNoYW5uZWwgPSBmaWVsZHMuY2hhbm5lbDtcbiAgICB0aGlzLmR1cmF0aW9uID0gZmllbGRzLmR1cmF0aW9uO1xuICAgIHRoaXMuZ3JhY2UgPSBmaWVsZHMuZ3JhY2U7XG4gICAgdGhpcy5yZXBlYXQgPSBmaWVsZHMucmVwZWF0O1xuICAgIHRoaXMuc2VxdWVudGlhbCA9IGZpZWxkcy5zZXF1ZW50aWFsO1xuICAgIHRoaXMuc3RhcnRUaWNrID0gZmllbGRzLnN0YXJ0VGljaztcbiAgICB0aGlzLnZlbG9jaXR5ID0gZmllbGRzLnZlbG9jaXR5O1xuICAgIHRoaXMud2FpdCA9IGZpZWxkcy53YWl0O1xuICAgIHRoaXMudGlja0R1cmF0aW9uID0gVXRpbHMuZ2V0VGlja0R1cmF0aW9uKHRoaXMuZHVyYXRpb24pO1xuICAgIHRoaXMucmVzdER1cmF0aW9uID0gVXRpbHMuZ2V0VGlja0R1cmF0aW9uKHRoaXMud2FpdCk7XG4gICAgdGhpcy5ldmVudHMgPSBbXTsgLy8gSG9sZCBhY3R1YWwgTm90ZU9uL05vdGVPZmYgZXZlbnRzXG4gIH1cbiAgLyoqXG4gICAqIEJ1aWxkcyBpbnQgYXJyYXkgZm9yIHRoaXMgZXZlbnQuXG4gICAqIEByZXR1cm4ge05vdGVFdmVudH1cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoTm90ZUV2ZW50LCBbe1xuICAgIGtleTogXCJidWlsZERhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYnVpbGREYXRhKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgLy8gUmVzZXQgZGF0YSBhcnJheVxuICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgICB0aGlzLnRpY2tEdXJhdGlvbjtcbiAgICAgIHRoaXMucmVzdER1cmF0aW9uOyAvLyBBcHBseSBncmFjZSBub3RlKHMpIGFuZCBzdWJ0cmFjdCB0aWNrcyAoY3VycmVudGx5IDEgdGljayBwZXIgZ3JhY2Ugbm90ZSkgZnJvbSB0aWNrRHVyYXRpb24gc28gbmV0IHZhbHVlIGlzIHRoZSBzYW1lXG5cbiAgICAgIGlmICh0aGlzLmdyYWNlKSB7XG4gICAgICAgIHZhciBncmFjZUR1cmF0aW9uID0gMTtcbiAgICAgICAgdGhpcy5ncmFjZSA9IFV0aWxzLnRvQXJyYXkodGhpcy5ncmFjZSk7XG4gICAgICAgIHRoaXMuZ3JhY2UuZm9yRWFjaChmdW5jdGlvbiAocGl0Y2gpIHtcbiAgICAgICAgICB2YXIgbm90ZUV2ZW50ID0gbmV3IE5vdGVFdmVudCh7XG4gICAgICAgICAgICBwaXRjaDogX3RoaXMuZ3JhY2UsXG4gICAgICAgICAgICBkdXJhdGlvbjogJ1QnICsgZ3JhY2VEdXJhdGlvblxuICAgICAgICAgIH0pO1xuICAgICAgICAgIF90aGlzLmRhdGEgPSBfdGhpcy5kYXRhLmNvbmNhdChub3RlRXZlbnQuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfSAvLyBmaWVsZHMucGl0Y2ggY291bGQgYmUgYW4gYXJyYXkgb2YgcGl0Y2hlcy5cbiAgICAgIC8vIElmIHRoaXMuc2VxdWVudGlhbCA9PT0gdHJ1ZSB0aGVuIGl0J3MgYSBzZXF1ZW50aWFsIHN0cmluZyBvZiBub3RlcyB0aGF0IHJlcXVpcmVzIHNlcGFyYXRlIE5vdGVPbkV2ZW50cy5cblxuICAgICAgaWYgKCF0aGlzLnNlcXVlbnRpYWwpIHtcbiAgICAgICAgLy8gSGFuZGxlIHJlcGVhdFxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMucmVwZWF0OyBqKyspIHtcbiAgICAgICAgICAvLyBOb3RlIG9uXG4gICAgICAgICAgdGhpcy5waXRjaC5mb3JFYWNoKGZ1bmN0aW9uIChwLCBpKSB7XG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgIHZhciBub3RlT25OZXcgPSBuZXcgTm90ZU9uRXZlbnQoe1xuICAgICAgICAgICAgICAgIGNoYW5uZWw6IF90aGlzLmNoYW5uZWwsXG4gICAgICAgICAgICAgICAgd2FpdDogX3RoaXMud2FpdCxcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eTogX3RoaXMudmVsb2NpdHksXG4gICAgICAgICAgICAgICAgcGl0Y2g6IHAsXG4gICAgICAgICAgICAgICAgc3RhcnRUaWNrOiBfdGhpcy5zdGFydFRpY2tcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBSdW5uaW5nIHN0YXR1cyAoY2FuIG9tbWl0IHRoZSBub3RlIG9uIHN0YXR1cylcbiAgICAgICAgICAgICAgLy9ub3RlT24gPSBuZXcgTm90ZU9uRXZlbnQoe2RhdGE6IFswLCBVdGlscy5nZXRQaXRjaChwKSwgVXRpbHMuY29udmVydFZlbG9jaXR5KHRoaXMudmVsb2NpdHkpXX0pO1xuICAgICAgICAgICAgICB2YXIgbm90ZU9uTmV3ID0gbmV3IE5vdGVPbkV2ZW50KHtcbiAgICAgICAgICAgICAgICBjaGFubmVsOiBfdGhpcy5jaGFubmVsLFxuICAgICAgICAgICAgICAgIHdhaXQ6IDAsXG4gICAgICAgICAgICAgICAgdmVsb2NpdHk6IF90aGlzLnZlbG9jaXR5LFxuICAgICAgICAgICAgICAgIHBpdGNoOiBwLFxuICAgICAgICAgICAgICAgIHN0YXJ0VGljazogX3RoaXMuc3RhcnRUaWNrXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfdGhpcy5ldmVudHMucHVzaChub3RlT25OZXcpO1xuICAgICAgICAgIH0pOyAvLyBOb3RlIG9mZlxuXG4gICAgICAgICAgdGhpcy5waXRjaC5mb3JFYWNoKGZ1bmN0aW9uIChwLCBpKSB7XG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgIC8vbm90ZU9mZiA9IG5ldyBOb3RlT2ZmRXZlbnQoe2RhdGE6IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgodGlja0R1cmF0aW9uKS5jb25jYXQodGhpcy5nZXROb3RlT2ZmU3RhdHVzKCksIFV0aWxzLmdldFBpdGNoKHApLCBVdGlscy5jb252ZXJ0VmVsb2NpdHkodGhpcy52ZWxvY2l0eSkpfSk7XG4gICAgICAgICAgICAgIHZhciBub3RlT2ZmTmV3ID0gbmV3IE5vdGVPZmZFdmVudCh7XG4gICAgICAgICAgICAgICAgY2hhbm5lbDogX3RoaXMuY2hhbm5lbCxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogX3RoaXMuZHVyYXRpb24sXG4gICAgICAgICAgICAgICAgdmVsb2NpdHk6IF90aGlzLnZlbG9jaXR5LFxuICAgICAgICAgICAgICAgIHBpdGNoOiBwLFxuICAgICAgICAgICAgICAgIHRpY2s6IF90aGlzLnN0YXJ0VGljayAhPT0gbnVsbCA/IFV0aWxzLmdldFRpY2tEdXJhdGlvbihfdGhpcy5kdXJhdGlvbikgKyBfdGhpcy5zdGFydFRpY2sgOiBudWxsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gUnVubmluZyBzdGF0dXMgKGNhbiBvbW1pdCB0aGUgbm90ZSBvZmYgc3RhdHVzKVxuICAgICAgICAgICAgICAvL25vdGVPZmYgPSBuZXcgTm90ZU9mZkV2ZW50KHtkYXRhOiBbMCwgVXRpbHMuZ2V0UGl0Y2gocCksIFV0aWxzLmNvbnZlcnRWZWxvY2l0eSh0aGlzLnZlbG9jaXR5KV19KTtcbiAgICAgICAgICAgICAgdmFyIG5vdGVPZmZOZXcgPSBuZXcgTm90ZU9mZkV2ZW50KHtcbiAgICAgICAgICAgICAgICBjaGFubmVsOiBfdGhpcy5jaGFubmVsLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5OiBfdGhpcy52ZWxvY2l0eSxcbiAgICAgICAgICAgICAgICBwaXRjaDogcCxcbiAgICAgICAgICAgICAgICB0aWNrOiBfdGhpcy5zdGFydFRpY2sgIT09IG51bGwgPyBVdGlscy5nZXRUaWNrRHVyYXRpb24oX3RoaXMuZHVyYXRpb24pICsgX3RoaXMuc3RhcnRUaWNrIDogbnVsbFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX3RoaXMuZXZlbnRzLnB1c2gobm90ZU9mZk5ldyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEhhbmRsZSByZXBlYXRcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLnJlcGVhdDsgaisrKSB7XG4gICAgICAgICAgdGhpcy5waXRjaC5mb3JFYWNoKGZ1bmN0aW9uIChwLCBpKSB7XG5cbiAgICAgICAgICAgIHZhciBub3RlT25OZXcgPSBuZXcgTm90ZU9uRXZlbnQoe1xuICAgICAgICAgICAgICBjaGFubmVsOiBfdGhpcy5jaGFubmVsLFxuICAgICAgICAgICAgICB3YWl0OiBpID4gMCA/IDAgOiBfdGhpcy53YWl0LFxuICAgICAgICAgICAgICAvLyB3YWl0IG9ubHkgYXBwbGllcyB0byBmaXJzdCBub3RlIGluIHJlcGV0aXRpb25cbiAgICAgICAgICAgICAgdmVsb2NpdHk6IF90aGlzLnZlbG9jaXR5LFxuICAgICAgICAgICAgICBwaXRjaDogcCxcbiAgICAgICAgICAgICAgc3RhcnRUaWNrOiBfdGhpcy5zdGFydFRpY2tcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIG5vdGVPZmZOZXcgPSBuZXcgTm90ZU9mZkV2ZW50KHtcbiAgICAgICAgICAgICAgY2hhbm5lbDogX3RoaXMuY2hhbm5lbCxcbiAgICAgICAgICAgICAgZHVyYXRpb246IF90aGlzLmR1cmF0aW9uLFxuICAgICAgICAgICAgICB2ZWxvY2l0eTogX3RoaXMudmVsb2NpdHksXG4gICAgICAgICAgICAgIHBpdGNoOiBwXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgX3RoaXMuZXZlbnRzLnB1c2gobm90ZU9uTmV3LCBub3RlT2ZmTmV3KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTm90ZUV2ZW50O1xufSgpO1xuXG4vKipcbiAqIEhvbGRzIGFsbCBkYXRhIGZvciBhIFwiUGl0Y2ggQmVuZFwiIE1JREkgZXZlbnRcbiAqIFsgLTEuMCwgMCwgMS4wIF0gLT4gIFsgMCwgODE5MiwgMTYzODNdXG4gKiBAcGFyYW0ge29iamVjdH0gZmllbGRzIHsgYmVuZCA6IGZsb2F0LCBjaGFubmVsIDogaW50IH1cbiAqIEByZXR1cm4ge1BpdGNoQmVuZEV2ZW50fVxuICovXG5cbnZhciBzY2FsZTE0Yml0cyA9IGZ1bmN0aW9uIHNjYWxlMTRiaXRzKHplcm9PbmUpIHtcbiAgaWYgKHplcm9PbmUgPD0gMCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKDE2Mzg0ICogKHplcm9PbmUgKyAxKSAvIDIpO1xuICB9XG5cbiAgcmV0dXJuIE1hdGguZmxvb3IoMTYzODMgKiAoemVyb09uZSArIDEpIC8gMik7XG59O1xuXG52YXIgUGl0Y2hCZW5kRXZlbnQgPSBmdW5jdGlvbiBQaXRjaEJlbmRFdmVudChmaWVsZHMpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBpdGNoQmVuZEV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAncGl0Y2gtYmVuZCc7XG4gIHZhciBiZW5kMTQgPSBzY2FsZTE0Yml0cyhmaWVsZHMuYmVuZCk7XG4gIHZhciBjaGFubmVsID0gZmllbGRzLmNoYW5uZWwgfHwgMDtcbiAgdmFyIGxzYlZhbHVlID0gYmVuZDE0ICYgMHg3ZjtcbiAgdmFyIG1zYlZhbHVlID0gYmVuZDE0ID4+IDcgJiAweDdmO1xuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuUElUQ0hfQkVORF9TVEFUVVMgfCBjaGFubmVsLCBsc2JWYWx1ZSwgbXNiVmFsdWUpO1xufTtcblxuLyoqXG4gKiBIb2xkcyBhbGwgZGF0YSBmb3IgYSBcInByb2dyYW0gY2hhbmdlXCIgTUlESSBldmVudFxuICogQHBhcmFtIHtvYmplY3R9IGZpZWxkcyB7aW5zdHJ1bWVudDogaW50ZWdlcn1cbiAqIEByZXR1cm4ge1Byb2dyYW1DaGFuZ2VFdmVudH1cbiAqL1xuXG52YXIgUHJvZ3JhbUNoYW5nZUV2ZW50ID0gZnVuY3Rpb24gUHJvZ3JhbUNoYW5nZUV2ZW50KGZpZWxkcykge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHJvZ3JhbUNoYW5nZUV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAncHJvZ3JhbSc7IC8vIGRlbHRhIHRpbWUgZGVmYXVsdHMgdG8gMC5cblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuUFJPR1JBTV9DSEFOR0VfU1RBVFVTLCBmaWVsZHMuaW5zdHJ1bWVudCk7XG59O1xuXG4vKipcbiAqIEhvbGRzIGFsbCBkYXRhIGZvciBhIFwiY29udHJvbGxlciBjaGFuZ2VcIiBNSURJIGV2ZW50XG4gKiBAcGFyYW0ge29iamVjdH0gZmllbGRzIHtjb250cm9sbGVyTnVtYmVyOiBpbnRlZ2VyLCBjb250cm9sbGVyVmFsdWU6IGludGVnZXJ9XG4gKiBAcmV0dXJuIHtDb250cm9sbGVyQ2hhbmdlRXZlbnR9XG4gKi9cblxudmFyIENvbnRyb2xsZXJDaGFuZ2VFdmVudCA9IGZ1bmN0aW9uIENvbnRyb2xsZXJDaGFuZ2VFdmVudChmaWVsZHMpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbnRyb2xsZXJDaGFuZ2VFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ2NvbnRyb2xsZXInOyAvLyBkZWx0YSB0aW1lIGRlZmF1bHRzIHRvIDAuXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLkNPTlRST0xMRVJfQ0hBTkdFX1NUQVRVUywgZmllbGRzLmNvbnRyb2xsZXJOdW1iZXIsIGZpZWxkcy5jb250cm9sbGVyVmFsdWUpO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSB0ZW1wbyBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBDb3B5cmlnaHQgdGV4dFxuICogQHJldHVybiB7Q29weXJpZ2h0RXZlbnR9XG4gKi9cblxudmFyIENvcHlyaWdodEV2ZW50ID0gZnVuY3Rpb24gQ29weXJpZ2h0RXZlbnQodGV4dCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29weXJpZ2h0RXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdjb3B5cmlnaHQnO1xuICB2YXIgdGV4dEJ5dGVzID0gVXRpbHMuc3RyaW5nVG9CeXRlcyh0ZXh0KTsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfQ09QWVJJR0hUX0lELCBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRleHRCeXRlcy5sZW5ndGgpLCAvLyBTaXplXG4gIHRleHRCeXRlcyAvLyBUZXh0XG4gICk7XG59O1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIGN1ZSBwb2ludCBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBDdWUgcG9pbnQgdGV4dFxuICogQHJldHVybiB7Q3VlUG9pbnRFdmVudH1cbiAqL1xuXG52YXIgQ3VlUG9pbnRFdmVudCA9IGZ1bmN0aW9uIEN1ZVBvaW50RXZlbnQodGV4dCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ3VlUG9pbnRFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ21hcmtlcic7XG4gIHZhciB0ZXh0Qnl0ZXMgPSBVdGlscy5zdHJpbmdUb0J5dGVzKHRleHQpOyAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9DVUVfUE9JTlQsIFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgodGV4dEJ5dGVzLmxlbmd0aCksIC8vIFNpemVcbiAgdGV4dEJ5dGVzIC8vIFRleHRcbiAgKTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgZW5kIHRyYWNrIG1ldGEgZXZlbnQuXG4gKiBAcmV0dXJuIHtFbmRUcmFja0V2ZW50fVxuICovXG5cbnZhciBFbmRUcmFja0V2ZW50ID0gZnVuY3Rpb24gRW5kVHJhY2tFdmVudCgpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEVuZFRyYWNrRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdlbmQtdHJhY2snOyAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9FTkRfT0ZfVFJBQ0tfSUQpO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYW4gaW5zdHJ1bWVudCBuYW1lIG1ldGEgZXZlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gYnBtIC0gQmVhdHMgcGVyIG1pbnV0ZVxuICogQHJldHVybiB7SW5zdHJ1bWVudE5hbWVFdmVudH1cbiAqL1xuXG52YXIgSW5zdHJ1bWVudE5hbWVFdmVudCA9IGZ1bmN0aW9uIEluc3RydW1lbnROYW1lRXZlbnQodGV4dCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5zdHJ1bWVudE5hbWVFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ2luc3RydW1lbnQtbmFtZSc7XG4gIHZhciB0ZXh0Qnl0ZXMgPSBVdGlscy5zdHJpbmdUb0J5dGVzKHRleHQpOyAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9JTlNUUlVNRU5UX05BTUVfSUQsIFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgodGV4dEJ5dGVzLmxlbmd0aCksIC8vIFNpemVcbiAgdGV4dEJ5dGVzIC8vIEluc3RydW1lbnQgbmFtZVxuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSBrZXkgc2lnbmF0dXJlIG1ldGEgZXZlbnQuXG4gKiBAcmV0dXJuIHtLZXlTaWduYXR1cmVFdmVudH1cbiAqL1xuXG52YXIgS2V5U2lnbmF0dXJlRXZlbnQgPSBmdW5jdGlvbiBLZXlTaWduYXR1cmVFdmVudChzZiwgbWkpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEtleVNpZ25hdHVyZUV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAna2V5LXNpZ25hdHVyZSc7XG4gIHZhciBtb2RlID0gbWkgfHwgMDtcbiAgc2YgPSBzZiB8fCAwOyAvL1x0RnVuY3Rpb24gY2FsbGVkIHdpdGggc3RyaW5nIG5vdGF0aW9uXG5cbiAgaWYgKHR5cGVvZiBtaSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgZmlmdGhzID0gW1snQ2InLCAnR2InLCAnRGInLCAnQWInLCAnRWInLCAnQmInLCAnRicsICdDJywgJ0cnLCAnRCcsICdBJywgJ0UnLCAnQicsICdGIycsICdDIyddLCBbJ2FiJywgJ2ViJywgJ2JiJywgJ2YnLCAnYycsICdnJywgJ2QnLCAnYScsICdlJywgJ2InLCAnZiMnLCAnYyMnLCAnZyMnLCAnZCMnLCAnYSMnXV07XG4gICAgdmFyIF9zZmxlbiA9IHNmLmxlbmd0aDtcbiAgICB2YXIgbm90ZSA9IHNmIHx8ICdDJztcbiAgICBpZiAoc2ZbMF0gPT09IHNmWzBdLnRvTG93ZXJDYXNlKCkpIG1vZGUgPSAxO1xuXG4gICAgaWYgKF9zZmxlbiA+IDEpIHtcbiAgICAgIHN3aXRjaCAoc2YuY2hhckF0KF9zZmxlbiAtIDEpKSB7XG4gICAgICAgIGNhc2UgJ20nOlxuICAgICAgICAgIG1vZGUgPSAxO1xuICAgICAgICAgIG5vdGUgPSBzZi5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICBub3RlID0gbm90ZS5jb25jYXQoc2Yuc3Vic3RyaW5nKDEsIF9zZmxlbiAtIDEpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICBtb2RlID0gMTtcbiAgICAgICAgICBub3RlID0gc2YuY2hhckF0KDApLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgbm90ZSA9IG5vdGUuY29uY2F0KHNmLnN1YnN0cmluZygxLCBfc2ZsZW4gLSAxKSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnTSc6XG4gICAgICAgICAgbW9kZSA9IDA7XG4gICAgICAgICAgbm90ZSA9IHNmLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgIG5vdGUgPSBub3RlLmNvbmNhdChzZi5zdWJzdHJpbmcoMSwgX3NmbGVuIC0gMSkpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgIG1vZGUgPSAwO1xuICAgICAgICAgIG5vdGUgPSBzZi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICBub3RlID0gbm90ZS5jb25jYXQoc2Yuc3Vic3RyaW5nKDEsIF9zZmxlbiAtIDEpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZmlmdGhpbmRleCA9IGZpZnRoc1ttb2RlXS5pbmRleE9mKG5vdGUpO1xuICAgIHNmID0gZmlmdGhpbmRleCA9PT0gLTEgPyAwIDogZmlmdGhpbmRleCAtIDc7XG4gIH0gLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9LRVlfU0lHTkFUVVJFX0lELCBbMHgwMl0sIC8vIFNpemVcbiAgVXRpbHMubnVtYmVyVG9CeXRlcyhzZiwgMSksIC8vIE51bWJlciBvZiBzaGFycCBvciBmbGF0cyAoIDwgMCBmbGF0OyA+IDAgc2hhcnApXG4gIFV0aWxzLm51bWJlclRvQnl0ZXMobW9kZSwgMSkgLy8gTW9kZTogMCBtYWpvciwgMSBtaW5vclxuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSBseXJpYyBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBMeXJpYyB0ZXh0XG4gKiBAcmV0dXJuIHtMeXJpY0V2ZW50fVxuICovXG5cbnZhciBMeXJpY0V2ZW50ID0gZnVuY3Rpb24gTHlyaWNFdmVudCh0ZXh0KSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMeXJpY0V2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAnbWFya2VyJztcbiAgdmFyIHRleHRCeXRlcyA9IFV0aWxzLnN0cmluZ1RvQnl0ZXModGV4dCk7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX0xZUklDX0lELCBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRleHRCeXRlcy5sZW5ndGgpLCAvLyBTaXplXG4gIHRleHRCeXRlcyAvLyBUZXh0XG4gICk7XG59O1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIG1hcmtlciBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBNYXJrZXIgdGV4dFxuICogQHJldHVybiB7TWFya2VyRXZlbnR9XG4gKi9cblxudmFyIE1hcmtlckV2ZW50ID0gZnVuY3Rpb24gTWFya2VyRXZlbnQodGV4dCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFya2VyRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICdtYXJrZXInO1xuICB2YXIgdGV4dEJ5dGVzID0gVXRpbHMuc3RyaW5nVG9CeXRlcyh0ZXh0KTsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfTUFSS0VSX0lELCBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRleHRCeXRlcy5sZW5ndGgpLCAvLyBTaXplXG4gIHRleHRCeXRlcyAvLyBUZXh0XG4gICk7XG59O1xuXG4vKipcbiAqIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIHRlbXBvIG1ldGEgZXZlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gYnBtIC0gQmVhdHMgcGVyIG1pbnV0ZVxuICogQHJldHVybiB7VGVtcG9FdmVudH1cbiAqL1xuXG52YXIgVGVtcG9FdmVudCA9IGZ1bmN0aW9uIFRlbXBvRXZlbnQoYnBtKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUZW1wb0V2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAndGVtcG8nO1xuICB2YXIgdGVtcG8gPSBNYXRoLnJvdW5kKDYwMDAwMDAwIC8gYnBtKTsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfVEVNUE9fSUQsIFsweDAzXSwgLy8gU2l6ZVxuICBVdGlscy5udW1iZXJUb0J5dGVzKHRlbXBvLCAzKSAvLyBUZW1wbywgMyBieXRlc1xuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSB0ZW1wbyBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IGJwbSAtIEJlYXRzIHBlciBtaW51dGVcbiAqIEByZXR1cm4ge1RleHRFdmVudH1cbiAqL1xuXG52YXIgVGV4dEV2ZW50ID0gZnVuY3Rpb24gVGV4dEV2ZW50KHRleHQpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRleHRFdmVudCk7XG5cbiAgdGhpcy50eXBlID0gJ3RleHQnO1xuICB2YXIgdGV4dEJ5dGVzID0gVXRpbHMuc3RyaW5nVG9CeXRlcyh0ZXh0KTsgLy8gU3RhcnQgd2l0aCB6ZXJvIHRpbWUgZGVsdGFcblxuICB0aGlzLmRhdGEgPSBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKDB4MDApLmNvbmNhdChDb25zdGFudHMuTUVUQV9FVkVOVF9JRCwgQ29uc3RhbnRzLk1FVEFfVEVYVF9JRCwgVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCh0ZXh0Qnl0ZXMubGVuZ3RoKSwgLy8gU2l6ZVxuICB0ZXh0Qnl0ZXMgLy8gVGV4dFxuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSB0aW1lIHNpZ25hdHVyZSBtZXRhIGV2ZW50LlxuICogQHJldHVybiB7VGltZVNpZ25hdHVyZUV2ZW50fVxuICovXG5cbnZhciBUaW1lU2lnbmF0dXJlRXZlbnQgPSBmdW5jdGlvbiBUaW1lU2lnbmF0dXJlRXZlbnQobnVtZXJhdG9yLCBkZW5vbWluYXRvciwgbWlkaWNsb2Nrc3BlcnRpY2ssIG5vdGVzcGVybWlkaWNsb2NrKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUaW1lU2lnbmF0dXJlRXZlbnQpO1xuXG4gIHRoaXMudHlwZSA9ICd0aW1lLXNpZ25hdHVyZSc7IC8vIFN0YXJ0IHdpdGggemVybyB0aW1lIGRlbHRhXG5cbiAgdGhpcy5kYXRhID0gVXRpbHMubnVtYmVyVG9WYXJpYWJsZUxlbmd0aCgweDAwKS5jb25jYXQoQ29uc3RhbnRzLk1FVEFfRVZFTlRfSUQsIENvbnN0YW50cy5NRVRBX1RJTUVfU0lHTkFUVVJFX0lELCBbMHgwNF0sIC8vIFNpemVcbiAgVXRpbHMubnVtYmVyVG9CeXRlcyhudW1lcmF0b3IsIDEpLCAvLyBOdW1lcmF0b3IsIDEgYnl0ZXNcbiAgVXRpbHMubnVtYmVyVG9CeXRlcyhNYXRoLmxvZzIoZGVub21pbmF0b3IpLCAxKSwgLy8gRGVub21pbmF0b3IgaXMgZXhwcmVzc2VkIGFzIHBvdyBvZiAyLCAxIGJ5dGVzXG4gIFV0aWxzLm51bWJlclRvQnl0ZXMobWlkaWNsb2Nrc3BlcnRpY2sgfHwgMjQsIDEpLCAvLyBNSURJIENsb2NrcyBwZXIgdGljaywgMSBieXRlc1xuICBVdGlscy5udW1iZXJUb0J5dGVzKG5vdGVzcGVybWlkaWNsb2NrIHx8IDgsIDEpIC8vIE51bWJlciBvZiAxLzMyIG5vdGVzIHBlciBNSURJIGNsb2NrcywgMSBieXRlc1xuICApO1xufTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSB0ZW1wbyBtZXRhIGV2ZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IGJwbSAtIEJlYXRzIHBlciBtaW51dGVcbiAqIEByZXR1cm4ge1RyYWNrTmFtZUV2ZW50fVxuICovXG5cbnZhciBUcmFja05hbWVFdmVudCA9IGZ1bmN0aW9uIFRyYWNrTmFtZUV2ZW50KHRleHQpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRyYWNrTmFtZUV2ZW50KTtcblxuICB0aGlzLnR5cGUgPSAndHJhY2stbmFtZSc7XG4gIHZhciB0ZXh0Qnl0ZXMgPSBVdGlscy5zdHJpbmdUb0J5dGVzKHRleHQpOyAvLyBTdGFydCB3aXRoIHplcm8gdGltZSBkZWx0YVxuXG4gIHRoaXMuZGF0YSA9IFV0aWxzLm51bWJlclRvVmFyaWFibGVMZW5ndGgoMHgwMCkuY29uY2F0KENvbnN0YW50cy5NRVRBX0VWRU5UX0lELCBDb25zdGFudHMuTUVUQV9UUkFDS19OQU1FX0lELCBVdGlscy5udW1iZXJUb1ZhcmlhYmxlTGVuZ3RoKHRleHRCeXRlcy5sZW5ndGgpLCAvLyBTaXplXG4gIHRleHRCeXRlcyAvLyBUZXh0XG4gICk7XG59O1xuXG4vKipcbiAqIEhvbGRzIGFsbCBkYXRhIGZvciBhIHRyYWNrLlxuICogQHBhcmFtIHtvYmplY3R9IGZpZWxkcyB7dHlwZTogbnVtYmVyLCBkYXRhOiBhcnJheSwgc2l6ZTogYXJyYXksIGV2ZW50czogYXJyYXl9XG4gKiBAcmV0dXJuIHtUcmFja31cbiAqL1xuXG52YXIgVHJhY2sgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBUcmFjaygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJhY2spO1xuXG4gICAgdGhpcy50eXBlID0gQ29uc3RhbnRzLlRSQUNLX0NIVU5LX1RZUEU7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgdGhpcy5zaXplID0gW107XG4gICAgdGhpcy5ldmVudHMgPSBbXTtcbiAgICB0aGlzLmV4cGxpY2l0VGlja0V2ZW50cyA9IFtdOyAvLyBJZiB0aGVyZSBhcmUgYW55IGV2ZW50cyB3aXRoIGFuIGV4cGxpY2l0IHRpY2sgZGVmaW5lZCB0aGVuIHdlIHdpbGwgY3JlYXRlIGEgXCJzdWJcIiB0cmFjayBmb3IgdGhvc2VcbiAgICAvLyBhbmQgbWVyZ2UgdGhlbSBpbiBhbmQgdGhlIGVuZC5cblxuICAgIHRoaXMudGlja1BvaW50ZXIgPSAwOyAvLyBFYWNoIHRpbWUgYW4gZXZlbnQgaXMgYWRkZWQgdGhpcyB3aWxsIGluY3JlYXNlXG4gIH1cbiAgLyoqXG4gICAqIEFkZHMgYW55IGV2ZW50IHR5cGUgdG8gdGhlIHRyYWNrLlxuICAgKiBFdmVudHMgd2l0aG91dCBhIHNwZWNpZmljIHN0YXJ0VGljayBwcm9wZXJ0eSBhcmUgYXNzdW1lZCB0byBiZSBhZGRlZCBpbiBvcmRlciBvZiBob3cgdGhleSBzaG91bGQgb3V0cHV0LlxuICAgKiBFdmVudHMgd2l0aCBhIHNwZWNpZmljIHN0YXJ0VGljayBwcm9wZXJ0eSBhcmUgc2V0IGFzaWRlIGZvciBub3cgd2lsbCBiZSBtZXJnZWQgaW4gZHVyaW5nIGJ1aWxkIHByb2Nlc3MuXG4gICAqIEBwYXJhbSB7KE5vdGVFdmVudHxQcm9ncmFtQ2hhbmdlRXZlbnQpfSBldmVudHMgLSBFdmVudCBvYmplY3Qgb3IgYXJyYXkgb2YgRXZlbnQgb2JqZWN0cy5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gbWFwRnVuY3Rpb24gLSBDYWxsYmFjayB3aGljaCBjYW4gYmUgdXNlZCB0byBhcHBseSBzcGVjaWZpYyBwcm9wZXJ0aWVzIHRvIGFsbCBldmVudHMuXG4gICAqIEByZXR1cm4ge1RyYWNrfVxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhUcmFjaywgW3tcbiAgICBrZXk6IFwiYWRkRXZlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkRXZlbnQoZXZlbnRzLCBtYXBGdW5jdGlvbikge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgVXRpbHMudG9BcnJheShldmVudHMpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50LCBpKSB7XG4gICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5vdGVFdmVudCkge1xuICAgICAgICAgIC8vIEhhbmRsZSBtYXAgZnVuY3Rpb24gaWYgcHJvdmlkZWRcbiAgICAgICAgICBpZiAodHlwZW9mIG1hcEZ1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgcHJvcGVydGllcyA9IG1hcEZ1bmN0aW9uKGksIGV2ZW50KTtcblxuICAgICAgICAgICAgaWYgKF90eXBlb2YocHJvcGVydGllcykgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIGogaW4gcHJvcGVydGllcykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoaikge1xuICAgICAgICAgICAgICAgICAgY2FzZSAnY2hhbm5lbCc6XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmNoYW5uZWwgPSBwcm9wZXJ0aWVzW2pdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgY2FzZSAnZHVyYXRpb24nOlxuICAgICAgICAgICAgICAgICAgICBldmVudC5kdXJhdGlvbiA9IHByb3BlcnRpZXNbal07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlICdzZXF1ZW50aWFsJzpcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc2VxdWVudGlhbCA9IHByb3BlcnRpZXNbal07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlICd2ZWxvY2l0eSc6XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnZlbG9jaXR5ID0gVXRpbHMuY29udmVydFZlbG9jaXR5KHByb3BlcnRpZXNbal0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IC8vIElmIHRoaXMgbm90ZSBldmVudCBoYXMgYW4gZXhwbGljaXQgc3RhcnRUaWNrIHRoZW4gd2UgbmVlZCB0byBzZXQgYXNpZGUgZm9yIG5vd1xuXG5cbiAgICAgICAgICBpZiAoZXZlbnQuc3RhcnRUaWNrICE9PSBudWxsKSB7XG4gICAgICAgICAgICBfdGhpcy5leHBsaWNpdFRpY2tFdmVudHMucHVzaChldmVudCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFB1c2ggZWFjaCBvbi9vZmYgZXZlbnQgdG8gdHJhY2sncyBldmVudCBzdGFja1xuICAgICAgICAgICAgZXZlbnQuYnVpbGREYXRhKCkuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmV2ZW50cy5wdXNoKGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzLmV2ZW50cy5wdXNoKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQnVpbGRzIGludCBhcnJheSBvZiBhbGwgZXZlbnRzLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYnVpbGREYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJ1aWxkRGF0YSgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAvLyBSZW1vdmUgZXhpc3RpbmcgZW5kIHRyYWNrIGV2ZW50IGFuZCBhZGQgb25lLlxuICAgICAgLy8gVGhpcyBtYWtlcyBzdXJlIGl0J3MgYXQgdGhlIHZlcnkgZW5kIG9mIHRoZSBldmVudCBsaXN0LlxuICAgICAgdGhpcy5yZW1vdmVFdmVudHNCeVR5cGUoJ2VuZC10cmFjaycpLmFkZEV2ZW50KG5ldyBFbmRUcmFja0V2ZW50KCkpOyAvLyBSZXNldFxuXG4gICAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICAgIHRoaXMuc2l6ZSA9IFtdO1xuICAgICAgdGhpcy50aWNrUG9pbnRlciA9IDA7XG4gICAgICB2YXIgcHJlY2lzaW9uTG9zcyA9IDA7XG4gICAgICB0aGlzLmV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCwgZXZlbnRJbmRleCkge1xuICAgICAgICAvLyBCdWlsZCBldmVudCAmIGFkZCB0byB0b3RhbCB0aWNrIGR1cmF0aW9uXG4gICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5vdGVPbkV2ZW50IHx8IGV2ZW50IGluc3RhbmNlb2YgTm90ZU9mZkV2ZW50KSB7XG4gICAgICAgICAgdmFyIGJ1aWx0ID0gZXZlbnQuYnVpbGREYXRhKF90aGlzMiwgcHJlY2lzaW9uTG9zcyk7XG4gICAgICAgICAgcHJlY2lzaW9uTG9zcyA9IFV0aWxzLmdldFByZWNpc2lvbkxvc3MoZXZlbnQuZGVsdGFXaXRoUHJlY2lzaW9uQ29ycmVjdGlvbiB8fCAwKTtcbiAgICAgICAgICBfdGhpczIuZGF0YSA9IF90aGlzMi5kYXRhLmNvbmNhdChidWlsdC5kYXRhKTtcbiAgICAgICAgICBfdGhpczIudGlja1BvaW50ZXIgPSBVdGlscy5nZXRSb3VuZGVkSWZDbG9zZShldmVudC50aWNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpczIuZGF0YSA9IF90aGlzMi5kYXRhLmNvbmNhdChldmVudC5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLm1lcmdlRXhwbGljaXRUaWNrRXZlbnRzKCk7XG4gICAgICB0aGlzLnNpemUgPSBVdGlscy5udW1iZXJUb0J5dGVzKHRoaXMuZGF0YS5sZW5ndGgsIDQpOyAvLyA0IGJ5dGVzIGxvbmdcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm1lcmdlRXhwbGljaXRUaWNrRXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1lcmdlRXhwbGljaXRUaWNrRXZlbnRzKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIGlmICghdGhpcy5leHBsaWNpdFRpY2tFdmVudHMubGVuZ3RoKSByZXR1cm47IC8vIEZpcnN0IHNvcnQgYXNjIGxpc3Qgb2YgZXZlbnRzIGJ5IHN0YXJ0VGlja1xuXG4gICAgICB0aGlzLmV4cGxpY2l0VGlja0V2ZW50cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBhLnN0YXJ0VGljayAtIGIuc3RhcnRUaWNrO1xuICAgICAgfSk7IC8vIE5vdyB0aGlzLmV4cGxpY2l0VGlja0V2ZW50cyBpcyBpbiBjb3JyZWN0IG9yZGVyLCBhbmQgc28gaXMgdGhpcy5ldmVudHMgbmF0dXJhbGx5LlxuICAgICAgLy8gRm9yIGVhY2ggZXhwbGljaXQgdGljayBldmVudCwgc3BsaWNlIGl0IGludG8gdGhlIG1haW4gbGlzdCBvZiBldmVudHMgYW5kXG4gICAgICAvLyBhZGp1c3QgdGhlIGRlbHRhIG9uIHRoZSBmb2xsb3dpbmcgZXZlbnRzIHNvIHRoZXkgc3RpbGwgcGxheSBub3JtYWxseS5cblxuICAgICAgdGhpcy5leHBsaWNpdFRpY2tFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAobm90ZUV2ZW50KSB7XG4gICAgICAgIC8vIENvbnZlcnQgTm90ZUV2ZW50IHRvIGl0J3MgcmVzcGVjdGl2ZSBOb3RlT24vTm90ZU9mZiBldmVudHNcbiAgICAgICAgLy8gTm90ZSB0aGF0IGFzIHdlIHNwbGljZSBpbiBldmVudHMgdGhlIGRlbHRhIGZvciB0aGUgTm90ZU9mZiBvbmVzIHdpbGxcbiAgICAgICAgLy8gTmVlZCB0byBjaGFuZ2UgYmFzZWQgb24gd2hhdCBjb21lcyBiZWZvcmUgdGhlbSBhZnRlciB0aGUgc3BsaWNlLlxuICAgICAgICBub3RlRXZlbnQuYnVpbGREYXRhKCkuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gZS5idWlsZERhdGEoX3RoaXMzKTtcbiAgICAgICAgfSk7IC8vIE1lcmdlIGVhY2ggZXZlbnQgaW5kaXZ1YWxseSBpbnRvIHRoaXMgdHJhY2sncyBldmVudCBsaXN0LlxuXG4gICAgICAgIG5vdGVFdmVudC5ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMzLm1lcmdlU2luZ2xlRXZlbnQoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgIH0pOyAvLyBIYWNreSB3YXkgdG8gcmVidWlsZCB0cmFjayB3aXRoIG5ld2x5IHNwbGljZWQgZXZlbnRzLiAgTmVlZCBiZXR0ZXIgc29sdXRpb24uXG5cbiAgICAgIHRoaXMuZXhwbGljaXRUaWNrRXZlbnRzID0gW107XG4gICAgICB0aGlzLmJ1aWxkRGF0YSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNZXJnZXMgYW5vdGhlciB0cmFjaydzIGV2ZW50cyB3aXRoIHRoaXMgdHJhY2suXG4gICAgICogQHBhcmFtIHtUcmFja30gdHJhY2tcbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm1lcmdlVHJhY2tcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWVyZ2VUcmFjayh0cmFjaykge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIC8vIEZpcnN0IGJ1aWxkIHRoaXMgdHJhY2sgdG8gcG9wdWxhdGUgZWFjaCBldmVudCdzIHRpY2sgcHJvcGVydHlcbiAgICAgIHRoaXMuYnVpbGREYXRhKCk7IC8vIFRoZW4gYnVpbGQgdHJhY2sgdG8gYmUgbWVyZ2VkIHNvIHRoYXQgdGljayBwcm9wZXJ0eSBpcyBwb3B1bGF0ZWQgb24gYWxsIGV2ZW50cyAmIG1lcmdlIGVhY2ggZXZlbnQuXG5cbiAgICAgIHRyYWNrLmJ1aWxkRGF0YSgpLmV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICByZXR1cm4gX3RoaXM0Lm1lcmdlU2luZ2xlRXZlbnQoZXZlbnQpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE1lcmdlcyBhIHNpbmdsZSBldmVudCBpbnRvIHRoaXMgdHJhY2sncyBsaXN0IG9mIGV2ZW50cyBiYXNlZCBvbiBldmVudC50aWNrIHByb3BlcnR5LlxuICAgICAqIEBwYXJhbSB7Tm90ZU9uRXZlbnR8Tm90ZU9mZkV2ZW50fSAtIGV2ZW50XG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJtZXJnZVNpbmdsZUV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1lcmdlU2luZ2xlRXZlbnQoZXZlbnQpIHtcbiAgICAgIC8vIEZpbmQgaW5kZXggb2YgZXhpc3RpbmcgZXZlbnQgd2UgbmVlZCB0byBmb2xsb3cgd2l0aFxuICAgICAgdmFyIGxhc3RFdmVudEluZGV4ID0gMDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5ldmVudHNbaV0udGljayA+IGV2ZW50LnRpY2spIGJyZWFrO1xuICAgICAgICBsYXN0RXZlbnRJbmRleCA9IGk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzcGxpY2VkRXZlbnRJbmRleCA9IGxhc3RFdmVudEluZGV4ICsgMTsgLy8gTmVlZCB0byBhZGp1c3QgdGhlIGRlbHRhIG9mIHRoaXMgZXZlbnQgdG8gZW5zdXJlIGl0IGZhbGxzIG9uIHRoZSBjb3JyZWN0IHRpY2suXG5cbiAgICAgIGV2ZW50LmRlbHRhID0gZXZlbnQudGljayAtIHRoaXMuZXZlbnRzW2xhc3RFdmVudEluZGV4XS50aWNrOyAvLyBTcGxpY2UgdGhpcyBldmVudCBhdCBsYXN0RXZlbnRJbmRleCArIDFcblxuICAgICAgdGhpcy5ldmVudHMuc3BsaWNlKHNwbGljZWRFdmVudEluZGV4LCAwLCBldmVudCk7IC8vIE5vdyBhZGp1c3QgZGVsdGEgb2YgYWxsIGZvbGxvd2luZyBldmVudHNcblxuICAgICAgZm9yICh2YXIgaSA9IHNwbGljZWRFdmVudEluZGV4ICsgMTsgaSA8IHRoaXMuZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIFNpbmNlIGVhY2ggZXhpc3RpbmcgZXZlbnQgc2hvdWxkIGhhdmUgYSB0aWNrIHZhbHVlIGF0IHRoaXMgcG9pbnQgd2UganVzdCBuZWVkIHRvXG4gICAgICAgIC8vIGFkanVzdCBkZWx0YSB0byB0aGF0IHRoZSBldmVudCBzdGlsbCBmYWxscyBvbiB0aGUgY29ycmVjdCB0aWNrLlxuICAgICAgICB0aGlzLmV2ZW50c1tpXS5kZWx0YSA9IHRoaXMuZXZlbnRzW2ldLnRpY2sgLSB0aGlzLmV2ZW50c1tpIC0gMV0udGljaztcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwgZXZlbnRzIG1hdGNoaW5nIHNwZWNpZmllZCB0eXBlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFR5cGUgLSBFdmVudCB0eXBlXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVFdmVudHNCeVR5cGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlRXZlbnRzQnlUeXBlKGV2ZW50VHlwZSkge1xuICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgIHRoaXMuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50LCBpbmRleCkge1xuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gZXZlbnRUeXBlKSB7XG4gICAgICAgICAgX3RoaXM1LmV2ZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRlbXBvIG9mIHRoZSBNSURJIGZpbGUuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGJwbSAtIFRlbXBvIGluIGJlYXRzIHBlciBtaW51dGUuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzZXRUZW1wb1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRUZW1wbyhicG0pIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBUZW1wb0V2ZW50KGJwbSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRpbWUgc2lnbmF0dXJlLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBudW1lcmF0b3IgLSBUb3AgbnVtYmVyIG9mIHRoZSB0aW1lIHNpZ25hdHVyZS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGVub21pbmF0b3IgLSBCb3R0b20gbnVtYmVyIG9mIHRoZSB0aW1lIHNpZ25hdHVyZS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWlkaWNsb2Nrc3BlcnRpY2sgLSBEZWZhdWx0cyB0byAyNC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbm90ZXNwZXJtaWRpY2xvY2sgLSBEZWZhdWx0cyB0byA4LlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2V0VGltZVNpZ25hdHVyZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRUaW1lU2lnbmF0dXJlKG51bWVyYXRvciwgZGVub21pbmF0b3IsIG1pZGljbG9ja3NwZXJ0aWNrLCBub3Rlc3Blcm1pZGljbG9jaykge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IFRpbWVTaWduYXR1cmVFdmVudChudW1lcmF0b3IsIGRlbm9taW5hdG9yLCBtaWRpY2xvY2tzcGVydGljaywgbm90ZXNwZXJtaWRpY2xvY2spKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyBrZXkgc2lnbmF0dXJlLlxuICAgICAqIEBwYXJhbSB7Kn0gc2YgLVxuICAgICAqIEBwYXJhbSB7Kn0gbWkgLVxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2V0S2V5U2lnbmF0dXJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEtleVNpZ25hdHVyZShzZiwgbWkpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBLZXlTaWduYXR1cmVFdmVudChzZiwgbWkpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyB0ZXh0IHRvIE1JREkgZmlsZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRleHQgdG8gYWRkLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkVGV4dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRUZXh0KHRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBUZXh0RXZlbnQodGV4dCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGNvcHlyaWdodCB0byBNSURJIGZpbGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUZXh0IG9mIGNvcHlyaWdodCBsaW5lLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkQ29weXJpZ2h0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZENvcHlyaWdodCh0ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgQ29weXJpZ2h0RXZlbnQodGV4dCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIFNlcXVlbmNlL1RyYWNrIE5hbWUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUZXh0IG9mIHRyYWNrIG5hbWUuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhZGRUcmFja05hbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkVHJhY2tOYW1lKHRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBUcmFja05hbWVFdmVudCh0ZXh0KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgaW5zdHJ1bWVudCBuYW1lIG9mIHRyYWNrLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gTmFtZSBvZiBpbnN0cnVtZW50LlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkSW5zdHJ1bWVudE5hbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkSW5zdHJ1bWVudE5hbWUodGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IEluc3RydW1lbnROYW1lRXZlbnQodGV4dCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIG1hcmtlciB0byBNSURJIGZpbGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBNYXJrZXIgdGV4dC5cbiAgICAgKiBAcmV0dXJuIHtUcmFja31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFkZE1hcmtlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRNYXJrZXIodGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnQobmV3IE1hcmtlckV2ZW50KHRleHQpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBjdWUgcG9pbnQgdG8gTUlESSBmaWxlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCBvZiBjdWUgcG9pbnQuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhZGRDdWVQb2ludFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRDdWVQb2ludCh0ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgQ3VlUG9pbnRFdmVudCh0ZXh0KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgbHlyaWMgdG8gTUlESSBmaWxlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gTHlyaWMgdGV4dCB0byBhZGQuXG4gICAgICogQHJldHVybiB7VHJhY2t9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhZGRMeXJpY1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRMeXJpYyh0ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgTHlyaWNFdmVudCh0ZXh0KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoYW5uZWwgbW9kZSBtZXNzYWdlc1xuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicG9seU1vZGVPblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwb2x5TW9kZU9uKCkge1xuICAgICAgdmFyIGV2ZW50ID0gbmV3IE5vdGVPbkV2ZW50KHtcbiAgICAgICAgZGF0YTogWzB4MDAsIDB4QjAsIDB4N0UsIDB4MDBdXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KGV2ZW50KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyBhIHBpdGNoIGJlbmQuXG4gICAgICogQHBhcmFtIHtmbG9hdH0gYmVuZCAtIEJlbmQgdmFsdWUgcmFuZ2luZyBbLTEsMV0sIHplcm8gbWVhbmluZyBubyBiZW5kLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2V0UGl0Y2hCZW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFBpdGNoQmVuZChiZW5kKSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRFdmVudChuZXcgUGl0Y2hCZW5kRXZlbnQoe1xuICAgICAgICBiZW5kOiBiZW5kXG4gICAgICB9KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBjb250cm9sbGVyIGNoYW5nZSBldmVudFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIgLSBDb250cm9sIG51bWJlci5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSBDb250cm9sIHZhbHVlLlxuICAgICAqIEByZXR1cm4ge1RyYWNrfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY29udHJvbGxlckNoYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb250cm9sbGVyQ2hhbmdlKG51bWJlciwgdmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50KG5ldyBDb250cm9sbGVyQ2hhbmdlRXZlbnQoe1xuICAgICAgICBjb250cm9sbGVyTnVtYmVyOiBudW1iZXIsXG4gICAgICAgIGNvbnRyb2xsZXJWYWx1ZTogdmFsdWVcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVHJhY2s7XG59KCk7XG5cbnZhciBWZXhGbG93ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVmV4RmxvdygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVmV4Rmxvdyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVmV4RmxvdywgW3tcbiAgICBrZXk6IFwidHJhY2tGcm9tVm9pY2VcIixcbiAgICB2YWx1ZTpcbiAgICAvKipcbiAgICAgKiBTdXBwb3J0IGZvciBjb252ZXJ0aW5nIFZleEZsb3cgdm9pY2UgaW50byBNaWRpV3JpdGVySlMgdHJhY2tcbiAgICAgKiBAcmV0dXJuIE1pZGlXcml0ZXIuVHJhY2sgb2JqZWN0XG4gICAgICovXG4gICAgZnVuY3Rpb24gdHJhY2tGcm9tVm9pY2Uodm9pY2UpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7XG4gICAgICAgIGFkZFJlbmRlcmVkQWNjaWRlbnRhbHM6IGZhbHNlXG4gICAgICB9O1xuICAgICAgdmFyIHRyYWNrID0gbmV3IFRyYWNrKCk7XG4gICAgICB2YXIgd2FpdCA9IFtdO1xuICAgICAgdm9pY2UudGlja2FibGVzLmZvckVhY2goZnVuY3Rpb24gKHRpY2thYmxlKSB7XG4gICAgICAgIGlmICh0aWNrYWJsZS5ub3RlVHlwZSA9PT0gJ24nKSB7XG4gICAgICAgICAgdHJhY2suYWRkRXZlbnQobmV3IE5vdGVFdmVudCh7XG4gICAgICAgICAgICBwaXRjaDogdGlja2FibGUua2V5cy5tYXAoZnVuY3Rpb24gKHBpdGNoLCBpbmRleCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuY29udmVydFBpdGNoKHBpdGNoLCBpbmRleCwgdGlja2FibGUsIG9wdGlvbnMuYWRkUmVuZGVyZWRBY2NpZGVudGFscyk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBfdGhpcy5jb252ZXJ0RHVyYXRpb24odGlja2FibGUpLFxuICAgICAgICAgICAgd2FpdDogd2FpdFxuICAgICAgICAgIH0pKTsgLy8gcmVzZXQgd2FpdFxuXG4gICAgICAgICAgd2FpdCA9IFtdO1xuICAgICAgICB9IGVsc2UgaWYgKHRpY2thYmxlLm5vdGVUeXBlID09PSAncicpIHtcbiAgICAgICAgICAvLyBtb3ZlIG9uIHRvIHRoZSBuZXh0IHRpY2thYmxlIGFuZCBhZGQgdGhpcyB0byB0aGUgc3RhY2tcbiAgICAgICAgICAvLyBvZiB0aGUgYHdhaXRgIHByb3BlcnR5IGZvciB0aGUgbmV4dCBub3RlIGV2ZW50XG4gICAgICAgICAgd2FpdC5wdXNoKF90aGlzLmNvbnZlcnREdXJhdGlvbih0aWNrYWJsZSkpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSk7IC8vIFRoZXJlIG1heSBiZSBvdXRzdGFuZGluZyByZXN0cyBhdCB0aGUgZW5kIG9mIHRoZSB0cmFjayxcbiAgICAgIC8vIHBhZCB3aXRoIGEgZ2hvc3Qgbm90ZSAoemVybyBkdXJhdGlvbiBhbmQgdmVsb2NpdHkpLCBqdXN0IHRvIGNhcHR1cmUgdGhlIHdhaXQuXG5cbiAgICAgIGlmICh3YWl0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgdHJhY2suYWRkRXZlbnQobmV3IE5vdGVFdmVudCh7XG4gICAgICAgICAgcGl0Y2g6ICdbYzRdJyxcbiAgICAgICAgICBkdXJhdGlvbjogJzAnLFxuICAgICAgICAgIHdhaXQ6IHdhaXQsXG4gICAgICAgICAgdmVsb2NpdHk6ICcwJ1xuICAgICAgICB9KSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cmFjaztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgVmV4RmxvdyBwaXRjaCBzeW50YXggdG8gTWlkaVdyaXRlckpTIHN5bnRheFxuICAgICAqIEBwYXJhbSBwaXRjaCBzdHJpbmdcbiAgICAgKiBAcGFyYW0gaW5kZXggcGl0Y2ggaW5kZXhcbiAgICAgKiBAcGFyYW0gbm90ZSBzdHJ1Y3QgZnJvbSBWZXhmbG93XG4gICAgICogQHBhcmFtIGFkZFJlbmRlcmVkQWNjaWRlbnRhbHMgYWRkcyBWZXhmbG93IHJlbmRlcmVkIGFjY2lkZW50YWxzXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjb252ZXJ0UGl0Y2hcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29udmVydFBpdGNoKHBpdGNoLCBpbmRleCwgbm90ZSkge1xuICAgICAgdmFyIGFkZFJlbmRlcmVkQWNjaWRlbnRhbHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IGZhbHNlO1xuICAgICAgLy8gU3BsaXRzIG5vdGUgbmFtZSBmcm9tIG9jdGF2ZVxuICAgICAgdmFyIHBpdGNoUGFydHMgPSBwaXRjaC5zcGxpdCgnLycpOyAvLyBSZXRyaWV2ZXMgYWNjaWRlbnRhbHMgZnJvbSBwaXRjaFxuICAgICAgLy8gUmVtb3ZlcyBuYXR1cmFsIGFjY2lkZW50YWxzIHNpbmNlIHRoZXkgYXJlIG5vdCBhY2NlcHRlZCBpbiBUb25hbCBNaWRpXG5cbiAgICAgIHZhciBhY2NpZGVudGFscyA9IHBpdGNoUGFydHNbMF0uc3Vic3RyaW5nKDEpLnJlcGxhY2UoJ24nLCAnJyk7XG5cbiAgICAgIGlmIChhZGRSZW5kZXJlZEFjY2lkZW50YWxzKSB7XG4gICAgICAgIHZhciBfbm90ZSRnZXRBY2NpZGVudGFscztcblxuICAgICAgICAoX25vdGUkZ2V0QWNjaWRlbnRhbHMgPSBub3RlLmdldEFjY2lkZW50YWxzKCkpID09PSBudWxsIHx8IF9ub3RlJGdldEFjY2lkZW50YWxzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbm90ZSRnZXRBY2NpZGVudGFscy5mb3JFYWNoKGZ1bmN0aW9uIChhY2NpZGVudGFsKSB7XG4gICAgICAgICAgaWYgKGFjY2lkZW50YWwuaW5kZXggPT09IGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoYWNjaWRlbnRhbC50eXBlID09PSAnbicpIHtcbiAgICAgICAgICAgICAgYWNjaWRlbnRhbHMgPSAnJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGFjY2lkZW50YWxzICs9IGFjY2lkZW50YWwudHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGl0Y2hQYXJ0c1swXVswXSArIGFjY2lkZW50YWxzICsgcGl0Y2hQYXJ0c1sxXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgVmV4RmxvdyBkdXJhdGlvbiBzeW50YXggdG8gTWlkaVdyaXRlckpTIHN5bnRheFxuICAgICAqIEBwYXJhbSBub3RlIHN0cnVjdCBmcm9tIFZleEZsb3dcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNvbnZlcnREdXJhdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb252ZXJ0RHVyYXRpb24obm90ZSkge1xuICAgICAgcmV0dXJuICdkJy5yZXBlYXQobm90ZS5kb3RzKSArIHRoaXMuY29udmVydEJhc2VEdXJhdGlvbihub3RlLmR1cmF0aW9uKSArIChub3RlLnR1cGxldCA/ICd0JyArIG5vdGUudHVwbGV0Lm51bV9ub3RlcyA6ICcnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgVmV4RmxvdyBiYXNlIGR1cmF0aW9uIHN5bnRheCB0byBNaWRpV3JpdGVySlMgc3ludGF4XG4gICAgICogQHBhcmFtIGR1cmF0aW9uIFZleGZsb3cgZHVyYXRpb25cbiAgICAgKiBAcmV0dXJucyBNaWRpV3JpdGVySlMgZHVyYXRpb25cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNvbnZlcnRCYXNlRHVyYXRpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29udmVydEJhc2VEdXJhdGlvbihkdXJhdGlvbikge1xuICAgICAgc3dpdGNoIChkdXJhdGlvbikge1xuICAgICAgICBjYXNlICd3JzpcbiAgICAgICAgICByZXR1cm4gJzEnO1xuXG4gICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICAgIHJldHVybiAnMic7XG5cbiAgICAgICAgY2FzZSAncSc6XG4gICAgICAgICAgcmV0dXJuICc0JztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBkdXJhdGlvbjtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVmV4Rmxvdztcbn0oKTtcblxuLyoqXG4gKiBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgYSBoZWFkZXIgY2h1bmsgc2VjdGlvbiBvZiBhIE1JREkgZmlsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXJPZlRyYWNrcyAtIE51bWJlciBvZiB0cmFja3NcbiAqIEByZXR1cm4ge0hlYWRlckNodW5rfVxuICovXG5cbnZhciBIZWFkZXJDaHVuayA9IGZ1bmN0aW9uIEhlYWRlckNodW5rKG51bWJlck9mVHJhY2tzKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIZWFkZXJDaHVuayk7XG5cbiAgdGhpcy50eXBlID0gQ29uc3RhbnRzLkhFQURFUl9DSFVOS19UWVBFO1xuICB2YXIgdHJhY2tUeXBlID0gbnVtYmVyT2ZUcmFja3MgPiAxID8gQ29uc3RhbnRzLkhFQURFUl9DSFVOS19GT1JNQVQxIDogQ29uc3RhbnRzLkhFQURFUl9DSFVOS19GT1JNQVQwO1xuICB0aGlzLmRhdGEgPSB0cmFja1R5cGUuY29uY2F0KFV0aWxzLm51bWJlclRvQnl0ZXMobnVtYmVyT2ZUcmFja3MsIDIpLCAvLyB0d28gYnl0ZXMgbG9uZyxcbiAgQ29uc3RhbnRzLkhFQURFUl9DSFVOS19ESVZJU0lPTik7XG4gIHRoaXMuc2l6ZSA9IFswLCAwLCAwLCB0aGlzLmRhdGEubGVuZ3RoXTtcbn07XG5cbi8qKlxuICogT2JqZWN0IHRoYXQgcHV0cyB0b2dldGhlciB0cmFja3MgYW5kIHByb3ZpZGVzIG1ldGhvZHMgZm9yIGZpbGUgb3V0cHV0LlxuICogQHBhcmFtIHthcnJheXxUcmFja30gdHJhY2tzIC0gQSBzaW5nbGUge1RyYWNrfSBvYmplY3Qgb3IgYW4gYXJyYXkgb2Yge1RyYWNrfSBvYmplY3RzLlxuICogQHJldHVybiB7V3JpdGVyfVxuICovXG5cbnZhciBXcml0ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBXcml0ZXIodHJhY2tzKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBXcml0ZXIpO1xuXG4gICAgLy8gRW5zdXJlIHRyYWNrIGlzIGFuIGFycmF5XG4gICAgdHJhY2tzID0gVXRpbHMudG9BcnJheSh0cmFja3MpO1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIHRoaXMuZGF0YS5wdXNoKG5ldyBIZWFkZXJDaHVuayh0cmFja3MubGVuZ3RoKSk7IC8vIEZvciBlYWNoIHRyYWNrIGFkZCBmaW5hbCBlbmQgb2YgdHJhY2sgZXZlbnQgYW5kIGJ1aWxkIGRhdGFcblxuICAgIHRyYWNrcy5mb3JFYWNoKGZ1bmN0aW9uICh0cmFjaywgaSkge1xuICAgICAgX3RoaXMuZGF0YS5wdXNoKHRyYWNrLmJ1aWxkRGF0YSgpKTtcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogQnVpbGRzIHRoZSBmaWxlIGludG8gYSBVaW50OEFycmF5XG4gICAqIEByZXR1cm4ge1VpbnQ4QXJyYXl9XG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKFdyaXRlciwgW3tcbiAgICBrZXk6IFwiYnVpbGRGaWxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJ1aWxkRmlsZSgpIHtcbiAgICAgIHZhciBidWlsZCA9IFtdOyAvLyBEYXRhIGNvbnNpc3RzIG9mIGNodW5rcyB3aGljaCBjb25zaXN0cyBvZiBkYXRhXG5cbiAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBidWlsZCA9IGJ1aWxkLmNvbmNhdChkLnR5cGUsIGQuc2l6ZSwgZC5kYXRhKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGJ1aWxkKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVydCBmaWxlIGJ1ZmZlciB0byBhIGJhc2U2NCBzdHJpbmcuICBEaWZmZXJlbnQgbWV0aG9kcyBkZXBlbmRpbmcgb24gaWYgYnJvd3NlciBvciBub2RlLlxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImJhc2U2NFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBiYXNlNjQoKSB7XG4gICAgICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHJldHVybiBidG9hKFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgdGhpcy5idWlsZEZpbGUoKSkpO1xuICAgICAgcmV0dXJuIEJ1ZmZlci5mcm9tKHRoaXMuYnVpbGRGaWxlKCkpLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBkYXRhIFVSSS5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkYXRhVXJpXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRhdGFVcmkoKSB7XG4gICAgICByZXR1cm4gJ2RhdGE6YXVkaW8vbWlkaTtiYXNlNjQsJyArIHRoaXMuYmFzZTY0KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE91dHB1dCB0byBzdGRvdXRcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzdGRvdXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3Rkb3V0KCkge1xuICAgICAgcmV0dXJuIHByb2Nlc3Muc3Rkb3V0LndyaXRlKG5ldyBCdWZmZXIodGhpcy5idWlsZEZpbGUoKSkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBXcml0ZXI7XG59KCk7XG5cbnZhciBtYWluID0ge1xuICBDb25zdGFudHM6IENvbnN0YW50cyxcbiAgTm90ZU9uRXZlbnQ6IE5vdGVPbkV2ZW50LFxuICBOb3RlT2ZmRXZlbnQ6IE5vdGVPZmZFdmVudCxcbiAgTm90ZUV2ZW50OiBOb3RlRXZlbnQsXG4gIFBpdGNoQmVuZEV2ZW50OiBQaXRjaEJlbmRFdmVudCxcbiAgUHJvZ3JhbUNoYW5nZUV2ZW50OiBQcm9ncmFtQ2hhbmdlRXZlbnQsXG4gIFRyYWNrOiBUcmFjayxcbiAgVXRpbHM6IFV0aWxzLFxuICBWZXhGbG93OiBWZXhGbG93LFxuICBXcml0ZXI6IFdyaXRlclxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtYWluO1xuIiwgInZhciBNaWRpID0ge307XG5cbihmdW5jdGlvbihleHBvcnRlZCkge1xuXG5cdHZhciBERUZBVUxUX1ZPTFVNRSAgID0gZXhwb3J0ZWQuREVGQVVMVF9WT0xVTUUgICA9IDkwO1xuXHR2YXIgREVGQVVMVF9EVVJBVElPTiA9IGV4cG9ydGVkLkRFRkFVTFRfRFVSQVRJT04gPSAxMjg7XG5cdHZhciBERUZBVUxUX0NIQU5ORUwgID0gZXhwb3J0ZWQuREVGQVVMVF9DSEFOTkVMICA9IDA7XG5cblx0LyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdCAqIFV0aWxpdHkgZnVuY3Rpb25zXG5cdCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuXHR2YXIgVXRpbCA9IHtcblxuXHRcdG1pZGlfbGV0dGVyX3BpdGNoZXM6IHsgYToyMSwgYjoyMywgYzoxMiwgZDoxNCwgZToxNiwgZjoxNywgZzoxOSB9LFxuXG5cdFx0LyoqXG5cdFx0ICogQ29udmVydCBhIHN5bWJvbGljIG5vdGUgbmFtZSAoZS5nLiBcImM0XCIpIHRvIGEgbnVtZXJpYyBNSURJIHBpdGNoIChlLmcuXG5cdFx0ICogNjAsIG1pZGRsZSBDKS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBuIC0gVGhlIHN5bWJvbGljIG5vdGUgbmFtZSB0byBwYXJzZS5cblx0XHQgKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgTUlESSBwaXRjaCB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSBzeW1ib2xpYyBub3RlXG5cdFx0ICogbmFtZS5cblx0XHQgKi9cblx0XHRtaWRpUGl0Y2hGcm9tTm90ZTogZnVuY3Rpb24obikge1xuXHRcdFx0dmFyIG1hdGNoZXMgPSAvKFthLWddKSgjK3xiKyk/KFswLTldKykkL2kuZXhlYyhuKTtcblx0XHRcdHZhciBub3RlID0gbWF0Y2hlc1sxXS50b0xvd2VyQ2FzZSgpLCBhY2NpZGVudGFsID0gbWF0Y2hlc1syXSB8fCAnJywgb2N0YXZlID0gcGFyc2VJbnQobWF0Y2hlc1szXSwgMTApO1xuXHRcdFx0cmV0dXJuICgxMiAqIG9jdGF2ZSkgKyBVdGlsLm1pZGlfbGV0dGVyX3BpdGNoZXNbbm90ZV0gKyAoYWNjaWRlbnRhbC5zdWJzdHIoMCwxKT09JyMnPzE6LTEpICogYWNjaWRlbnRhbC5sZW5ndGg7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIEVuc3VyZSB0aGF0IHRoZSBnaXZlbiBhcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gYSBNSURJIHBpdGNoLiBOb3RlIHRoYXRcblx0XHQgKiBpdCBtYXkgYWxyZWFkeSBiZSBvbmUgKGluY2x1ZGluZyBhIHB1cmVseSBudW1lcmljIHN0cmluZykuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IHAgLSBUaGUgcGl0Y2ggdG8gY29udmVydC5cblx0XHQgKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgcmVzdWx0aW5nIG51bWVyaWMgTUlESSBwaXRjaC5cblx0XHQgKi9cblx0XHRlbnN1cmVNaWRpUGl0Y2g6IGZ1bmN0aW9uKHApIHtcblx0XHRcdGlmICh0eXBlb2YgcCA9PSAnbnVtYmVyJyB8fCAhL1teMC05XS8udGVzdChwKSkge1xuXHRcdFx0XHQvLyBudW1lcmljIHBpdGNoXG5cdFx0XHRcdHJldHVybiBwYXJzZUludChwLCAxMCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBhc3N1bWUgaXQncyBhIG5vdGUgbmFtZVxuXHRcdFx0XHRyZXR1cm4gVXRpbC5taWRpUGl0Y2hGcm9tTm90ZShwKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0bWlkaV9waXRjaGVzX2xldHRlcjogeyAnMTInOidjJywgJzEzJzonYyMnLCAnMTQnOidkJywgJzE1JzonZCMnLCAnMTYnOidlJywgJzE3JzonZicsICcxOCc6J2YjJywgJzE5JzonZycsICcyMCc6J2cjJywgJzIxJzonYScsICcyMic6J2EjJywgJzIzJzonYicgfSxcblx0XHRtaWRpX2ZsYXR0ZW5lZF9ub3RlczogeyAnYSMnOidiYicsICdjIyc6J2RiJywgJ2QjJzonZWInLCAnZiMnOidnYicsICdnIyc6J2FiJyB9LFxuXG5cdFx0LyoqXG5cdFx0ICogQ29udmVydCBhIG51bWVyaWMgTUlESSBwaXRjaCB2YWx1ZSAoZS5nLiA2MCkgdG8gYSBzeW1ib2xpYyBub3RlIG5hbWVcblx0XHQgKiAoZS5nLiBcImM0XCIpLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IG4gLSBUaGUgbnVtZXJpYyBNSURJIHBpdGNoIHZhbHVlIHRvIGNvbnZlcnQuXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbcmV0dXJuRmxhdHRlbmVkPWZhbHNlXSAtIFdoZXRoZXIgdG8gcHJlZmVyIGZsYXR0ZW5lZFxuXHRcdCAqIG5vdGVzIHRvIHNoYXJwZW5lZCBvbmVzLiBPcHRpb25hbCwgZGVmYXVsdCBmYWxzZS5cblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcmVzdWx0aW5nIHN5bWJvbGljIG5vdGUgbmFtZS5cblx0XHQgKi9cblx0XHRub3RlRnJvbU1pZGlQaXRjaDogZnVuY3Rpb24obiwgcmV0dXJuRmxhdHRlbmVkKSB7XG5cdFx0XHR2YXIgb2N0YXZlID0gMCwgbm90ZU51bSA9IG4sIG5vdGVOYW1lLCByZXR1cm5GbGF0dGVuZWQgPSByZXR1cm5GbGF0dGVuZWQgfHwgZmFsc2U7XG5cdFx0XHRpZiAobiA+IDIzKSB7XG5cdFx0XHRcdC8vIG5vdGVOdW0gaXMgb24gb2N0YXZlIDEgb3IgbW9yZVxuXHRcdFx0XHRvY3RhdmUgPSBNYXRoLmZsb29yKG4vMTIpIC0gMTtcblx0XHRcdFx0Ly8gc3VidHJhY3QgbnVtYmVyIG9mIG9jdGF2ZXMgZnJvbSBub3RlTnVtXG5cdFx0XHRcdG5vdGVOdW0gPSBuIC0gb2N0YXZlICogMTI7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGdldCBub3RlIG5hbWUgKGMjLCBkLCBmIyBldGMpXG5cdFx0XHRub3RlTmFtZSA9IFV0aWwubWlkaV9waXRjaGVzX2xldHRlcltub3RlTnVtXTtcblx0XHRcdC8vIFVzZSBmbGF0dGVuZWQgbm90ZXMgaWYgcmVxdWVzdGVkIChlLmcuIGYjIHNob3VsZCBiZSBvdXRwdXQgYXMgZ2IpXG5cdFx0XHRpZiAocmV0dXJuRmxhdHRlbmVkICYmIG5vdGVOYW1lLmluZGV4T2YoJyMnKSA+IDApIHtcblx0XHRcdFx0bm90ZU5hbWUgPSBVdGlsLm1pZGlfZmxhdHRlbmVkX25vdGVzW25vdGVOYW1lXTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBub3RlTmFtZSArIG9jdGF2ZTtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogQ29udmVydCBiZWF0cyBwZXIgbWludXRlIChCUE0pIHRvIG1pY3Jvc2Vjb25kcyBwZXIgcXVhcnRlciBub3RlIChNUFFOKS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBicG0gLSBBIG51bWJlciBpbiBiZWF0cyBwZXIgbWludXRlLlxuXHRcdCAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgbWljcm9zZWNvbmRzIHBlciBxdWFydGVyIG5vdGUuXG5cdFx0ICovXG5cdFx0bXBxbkZyb21CcG06IGZ1bmN0aW9uKGJwbSkge1xuXHRcdFx0dmFyIG1wcW4gPSBNYXRoLmZsb29yKDYwMDAwMDAwIC8gYnBtKTtcblx0XHRcdHZhciByZXQ9W107XG5cdFx0XHRkbyB7XG5cdFx0XHRcdHJldC51bnNoaWZ0KG1wcW4gJiAweEZGKTtcblx0XHRcdFx0bXBxbiA+Pj0gODtcblx0XHRcdH0gd2hpbGUgKG1wcW4pO1xuXHRcdFx0d2hpbGUgKHJldC5sZW5ndGggPCAzKSB7XG5cdFx0XHRcdHJldC5wdXNoKDApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJldDtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogQ29udmVydCBtaWNyb3NlY29uZHMgcGVyIHF1YXJ0ZXIgbm90ZSAoTVBRTikgdG8gYmVhdHMgcGVyIG1pbnV0ZSAoQlBNKS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBtcHFuIC0gVGhlIG51bWJlciBvZiBtaWNyb3NlY29uZHMgcGVyIHF1YXJ0ZXIgbm90ZS5cblx0XHQgKiBAcmV0dXJucyB7bnVtYmVyfSBBIG51bWJlciBpbiBiZWF0cyBwZXIgbWludXRlLlxuXHRcdCAqL1xuXHRcdGJwbUZyb21NcHFuOiBmdW5jdGlvbihtcHFuKSB7XG5cdFx0XHR2YXIgbSA9IG1wcW47XG5cdFx0XHRpZiAodHlwZW9mIG1wcW5bMF0gIT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0bSA9IDA7XG5cdFx0XHRcdGZvciAodmFyIGk9MCwgbD1tcHFuLmxlbmd0aC0xOyBsID49IDA7ICsraSwgLS1sKSB7XG5cdFx0XHRcdFx0bSB8PSBtcHFuW2ldIDw8IGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBNYXRoLmZsb29yKDYwMDAwMDAwIC8gbXBxbik7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIENvbnZlcnRzIGFuIGFycmF5IG9mIGJ5dGVzIHRvIGEgc3RyaW5nIG9mIGhleGFkZWNpbWFsIGNoYXJhY3RlcnMuIFByZXBhcmVzXG5cdFx0ICogaXQgdG8gYmUgY29udmVydGVkIGludG8gYSBiYXNlNjQgc3RyaW5nLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtBcnJheX0gYnl0ZUFycmF5IC0gQXJyYXkgb2YgYnl0ZXMgdG8gYmUgY29udmVydGVkLlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9IEhleGFkZWNpbWFsIHN0cmluZywgZS5nLiBcIjA5N0I4QVwiLlxuXHRcdCAqL1xuXHRcdGNvZGVzMlN0cjogZnVuY3Rpb24oYnl0ZUFycmF5KSB7XG5cdFx0XHRyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBieXRlQXJyYXkpO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBDb252ZXJ0cyBhIHN0cmluZyBvZiBoZXhhZGVjaW1hbCB2YWx1ZXMgdG8gYW4gYXJyYXkgb2YgYnl0ZXMuIEl0IGNhbiBhbHNvXG5cdFx0ICogYWRkIHJlbWFpbmluZyBcIjBcIiBuaWJibGVzIGluIG9yZGVyIHRvIGhhdmUgZW5vdWdoIGJ5dGVzIGluIHRoZSBhcnJheSBhcyB0aGVcblx0XHQgKiBgZmluYWxCeXRlc2AgcGFyYW1ldGVyLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIHN0cmluZyBvZiBoZXhhZGVjaW1hbCB2YWx1ZXMgZS5nLiBcIjA5N0I4QVwiXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IFtmaW5hbEJ5dGVzXSAtIE9wdGlvbmFsLiBUaGUgZGVzaXJlZCBudW1iZXIgb2YgYnl0ZXNcblx0XHQgKiAobm90IG5pYmJsZXMpIHRoYXQgdGhlIHJldHVybmVkIGFycmF5IHNob3VsZCBjb250YWluLlxuXHRcdCAqIEByZXR1cm5zIHtBcnJheX0gQW4gYXJyYXkgb2YgbmliYmxlcy5cblx0XHQgKi9cblx0XHRzdHIyQnl0ZXM6IGZ1bmN0aW9uIChzdHIsIGZpbmFsQnl0ZXMpIHtcblx0XHRcdGlmIChmaW5hbEJ5dGVzKSB7XG5cdFx0XHRcdHdoaWxlICgoc3RyLmxlbmd0aCAvIDIpIDwgZmluYWxCeXRlcykgeyBzdHIgPSBcIjBcIiArIHN0cjsgfVxuXHRcdFx0fVxuXG5cdFx0XHR2YXIgYnl0ZXMgPSBbXTtcblx0XHRcdGZvciAodmFyIGk9c3RyLmxlbmd0aC0xOyBpPj0wOyBpID0gaS0yKSB7XG5cdFx0XHRcdHZhciBjaGFycyA9IGkgPT09IDAgPyBzdHJbaV0gOiBzdHJbaS0xXSArIHN0cltpXTtcblx0XHRcdFx0Ynl0ZXMudW5zaGlmdChwYXJzZUludChjaGFycywgMTYpKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGJ5dGVzO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBUcmFuc2xhdGVzIG51bWJlciBvZiB0aWNrcyB0byBNSURJIHRpbWVzdGFtcCBmb3JtYXQsIHJldHVybmluZyBhbiBhcnJheVxuXHRcdCAqIG9mIGJ5dGVzIHdpdGggdGhlIHRpbWUgdmFsdWVzLiBNSURJIGhhcyBhIHZlcnkgcGFydGljdWxhciB3YXkgdG8gZXhwcmVzc1xuXHRcdCAqIHRpbWU7IHRha2UgYSBnb29kIGxvb2sgYXQgdGhlIHNwZWMgYmVmb3JlIGV2ZXIgdG91Y2hpbmcgdGhpcyBmdW5jdGlvbi5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSB0aWNrcyAtIE51bWJlciBvZiB0aWNrcyB0byBiZSB0cmFuc2xhdGVkLlxuXHRcdCAqIEByZXR1cm5zIHtudW1iZXJ9IEFycmF5IG9mIGJ5dGVzIHRoYXQgZm9ybSB0aGUgTUlESSB0aW1lIHZhbHVlLlxuXHRcdCAqL1xuXHRcdHRyYW5zbGF0ZVRpY2tUaW1lOiBmdW5jdGlvbih0aWNrcykge1xuXHRcdFx0dmFyIGJ1ZmZlciA9IHRpY2tzICYgMHg3RjtcblxuXHRcdFx0d2hpbGUgKHRpY2tzID0gdGlja3MgPj4gNykge1xuXHRcdFx0XHRidWZmZXIgPDw9IDg7XG5cdFx0XHRcdGJ1ZmZlciB8PSAoKHRpY2tzICYgMHg3RikgfCAweDgwKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGJMaXN0ID0gW107XG5cdFx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0XHRiTGlzdC5wdXNoKGJ1ZmZlciAmIDB4ZmYpO1xuXG5cdFx0XHRcdGlmIChidWZmZXIgJiAweDgwKSB7IGJ1ZmZlciA+Pj0gODsgfVxuXHRcdFx0XHRlbHNlIHsgYnJlYWs7IH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBiTGlzdDtcblx0XHR9LFxuXG5cdH07XG5cblx0LyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdCAqIEV2ZW50IGNsYXNzXG5cdCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuXHQvKipcblx0ICogQ29uc3RydWN0IGEgTUlESSBldmVudC5cblx0ICpcblx0ICogUGFyYW1ldGVycyBpbmNsdWRlOlxuXHQgKiAgLSB0aW1lIFtvcHRpb25hbCBudW1iZXJdIC0gVGlja3Mgc2luY2UgcHJldmlvdXMgZXZlbnQuXG5cdCAqICAtIHR5cGUgW3JlcXVpcmVkIG51bWJlcl0gLSBUeXBlIG9mIGV2ZW50LlxuXHQgKiAgLSBjaGFubmVsIFtyZXF1aXJlZCBudW1iZXJdIC0gQ2hhbm5lbCBmb3IgdGhlIGV2ZW50LlxuXHQgKiAgLSBwYXJhbTEgW3JlcXVpcmVkIG51bWJlcl0gLSBGaXJzdCBldmVudCBwYXJhbWV0ZXIuXG5cdCAqICAtIHBhcmFtMiBbb3B0aW9uYWwgbnVtYmVyXSAtIFNlY29uZCBldmVudCBwYXJhbWV0ZXIuXG5cdCAqL1xuXHR2YXIgTWlkaUV2ZW50ID0gZnVuY3Rpb24ocGFyYW1zKSB7XG5cdFx0aWYgKCF0aGlzKSByZXR1cm4gbmV3IE1pZGlFdmVudChwYXJhbXMpO1xuXHRcdGlmIChwYXJhbXMgJiZcblx0XHRcdFx0KHBhcmFtcy50eXBlICAgICE9PSBudWxsIHx8IHBhcmFtcy50eXBlICAgICE9PSB1bmRlZmluZWQpICYmXG5cdFx0XHRcdChwYXJhbXMuY2hhbm5lbCAhPT0gbnVsbCB8fCBwYXJhbXMuY2hhbm5lbCAhPT0gdW5kZWZpbmVkKSAmJlxuXHRcdFx0XHQocGFyYW1zLnBhcmFtMSAgIT09IG51bGwgfHwgcGFyYW1zLnBhcmFtMSAgIT09IHVuZGVmaW5lZCkpIHtcblx0XHRcdHRoaXMuc2V0VGltZShwYXJhbXMudGltZSk7XG5cdFx0XHR0aGlzLnNldFR5cGUocGFyYW1zLnR5cGUpO1xuXHRcdFx0dGhpcy5zZXRDaGFubmVsKHBhcmFtcy5jaGFubmVsKTtcblx0XHRcdHRoaXMuc2V0UGFyYW0xKHBhcmFtcy5wYXJhbTEpO1xuXHRcdFx0dGhpcy5zZXRQYXJhbTIocGFyYW1zLnBhcmFtMik7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIGV2ZW50IGNvZGVzXG5cdE1pZGlFdmVudC5OT1RFX09GRiAgICAgICAgICAgPSAweDgwO1xuXHRNaWRpRXZlbnQuTk9URV9PTiAgICAgICAgICAgID0gMHg5MDtcblx0TWlkaUV2ZW50LkFGVEVSX1RPVUNIICAgICAgICA9IDB4QTA7XG5cdE1pZGlFdmVudC5DT05UUk9MTEVSICAgICAgICAgPSAweEIwO1xuXHRNaWRpRXZlbnQuUFJPR1JBTV9DSEFOR0UgICAgID0gMHhDMDtcblx0TWlkaUV2ZW50LkNIQU5ORUxfQUZURVJUT1VDSCA9IDB4RDA7XG5cdE1pZGlFdmVudC5QSVRDSF9CRU5EICAgICAgICAgPSAweEUwO1xuXG5cblx0LyoqXG5cdCAqIFNldCB0aGUgdGltZSBmb3IgdGhlIGV2ZW50IGluIHRpY2tzIHNpbmNlIHRoZSBwcmV2aW91cyBldmVudC5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IHRpY2tzIC0gVGhlIG51bWJlciBvZiB0aWNrcyBzaW5jZSB0aGUgcHJldmlvdXMgZXZlbnQuIE1heVxuXHQgKiBiZSB6ZXJvLlxuXHQgKi9cblx0TWlkaUV2ZW50LnByb3RvdHlwZS5zZXRUaW1lID0gZnVuY3Rpb24odGlja3MpIHtcblx0XHR0aGlzLnRpbWUgPSBVdGlsLnRyYW5zbGF0ZVRpY2tUaW1lKHRpY2tzIHx8IDApO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIHR5cGUgb2YgdGhlIGV2ZW50LiBNdXN0IGJlIG9uZSBvZiB0aGUgZXZlbnQgY29kZXMgb24gTWlkaUV2ZW50LlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gdHlwZSAtIEV2ZW50IHR5cGUuXG5cdCAqL1xuXHRNaWRpRXZlbnQucHJvdG90eXBlLnNldFR5cGUgPSBmdW5jdGlvbih0eXBlKSB7XG5cdFx0aWYgKHR5cGUgPCBNaWRpRXZlbnQuTk9URV9PRkYgfHwgdHlwZSA+IE1pZGlFdmVudC5QSVRDSF9CRU5EKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUcnlpbmcgdG8gc2V0IGFuIHVua25vd24gZXZlbnQ6IFwiICsgdHlwZSk7XG5cdFx0fVxuXG5cdFx0dGhpcy50eXBlID0gdHlwZTtcblx0fTtcblxuXHQvKipcblx0ICogU2V0IHRoZSBjaGFubmVsIGZvciB0aGUgZXZlbnQuIE11c3QgYmUgYmV0d2VlbiAwIGFuZCAxNSwgaW5jbHVzaXZlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gY2hhbm5lbCAtIFRoZSBldmVudCBjaGFubmVsLlxuXHQgKi9cblx0TWlkaUV2ZW50LnByb3RvdHlwZS5zZXRDaGFubmVsID0gZnVuY3Rpb24oY2hhbm5lbCkge1xuXHRcdGlmIChjaGFubmVsIDwgMCB8fCBjaGFubmVsID4gMTUpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkNoYW5uZWwgaXMgb3V0IG9mIGJvdW5kcy5cIik7XG5cdFx0fVxuXG5cdFx0dGhpcy5jaGFubmVsID0gY2hhbm5lbDtcblx0fTtcblxuXHQvKipcblx0ICogU2V0IHRoZSBmaXJzdCBwYXJhbWV0ZXIgZm9yIHRoZSBldmVudC4gTXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDI1NSxcblx0ICogaW5jbHVzaXZlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gcCAtIFRoZSBmaXJzdCBldmVudCBwYXJhbWV0ZXIgdmFsdWUuXG5cdCAqL1xuXHRNaWRpRXZlbnQucHJvdG90eXBlLnNldFBhcmFtMSA9IGZ1bmN0aW9uKHApIHtcblx0XHR0aGlzLnBhcmFtMSA9IHA7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNldCB0aGUgc2Vjb25kIHBhcmFtZXRlciBmb3IgdGhlIGV2ZW50LiBNdXN0IGJlIGJldHdlZW4gMCBhbmQgMjU1LFxuXHQgKiBpbmNsdXNpdmUuXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBwIC0gVGhlIHNlY29uZCBldmVudCBwYXJhbWV0ZXIgdmFsdWUuXG5cdCAqL1xuXHRNaWRpRXZlbnQucHJvdG90eXBlLnNldFBhcmFtMiA9IGZ1bmN0aW9uKHApIHtcblx0XHR0aGlzLnBhcmFtMiA9IHA7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNlcmlhbGl6ZSB0aGUgZXZlbnQgdG8gYW4gYXJyYXkgb2YgYnl0ZXMuXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gVGhlIGFycmF5IG9mIHNlcmlhbGl6ZWQgYnl0ZXMuXG5cdCAqL1xuXHRNaWRpRXZlbnQucHJvdG90eXBlLnRvQnl0ZXMgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgYnl0ZUFycmF5ID0gW107XG5cblx0XHR2YXIgdHlwZUNoYW5uZWxCeXRlID0gdGhpcy50eXBlIHwgKHRoaXMuY2hhbm5lbCAmIDB4Rik7XG5cblx0XHRieXRlQXJyYXkucHVzaC5hcHBseShieXRlQXJyYXksIHRoaXMudGltZSk7XG5cdFx0Ynl0ZUFycmF5LnB1c2godHlwZUNoYW5uZWxCeXRlKTtcblx0XHRieXRlQXJyYXkucHVzaCh0aGlzLnBhcmFtMSk7XG5cblx0XHQvLyBTb21lIGV2ZW50cyBkb24ndCBoYXZlIGEgc2Vjb25kIHBhcmFtZXRlclxuXHRcdGlmICh0aGlzLnBhcmFtMiAhPT0gdW5kZWZpbmVkICYmIHRoaXMucGFyYW0yICE9PSBudWxsKSB7XG5cdFx0XHRieXRlQXJyYXkucHVzaCh0aGlzLnBhcmFtMik7XG5cdFx0fVxuXHRcdHJldHVybiBieXRlQXJyYXk7XG5cdH07XG5cblx0LyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdCAqIE1ldGFFdmVudCBjbGFzc1xuXHQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cblx0LyoqXG5cdCAqIENvbnN0cnVjdCBhIG1ldGEgZXZlbnQuXG5cdCAqXG5cdCAqIFBhcmFtZXRlcnMgaW5jbHVkZTpcblx0ICogIC0gdGltZSBbb3B0aW9uYWwgbnVtYmVyXSAtIFRpY2tzIHNpbmNlIHByZXZpb3VzIGV2ZW50LlxuXHQgKiAgLSB0eXBlIFtyZXF1aXJlZCBudW1iZXJdIC0gVHlwZSBvZiBldmVudC5cblx0ICogIC0gZGF0YSBbb3B0aW9uYWwgYXJyYXl8c3RyaW5nXSAtIEV2ZW50IGRhdGEuXG5cdCAqL1xuXHR2YXIgTWV0YUV2ZW50ID0gZnVuY3Rpb24ocGFyYW1zKSB7XG5cdFx0aWYgKCF0aGlzKSByZXR1cm4gbmV3IE1ldGFFdmVudChwYXJhbXMpO1xuXHRcdHZhciBwID0gcGFyYW1zIHx8IHt9O1xuXHRcdHRoaXMuc2V0VGltZShwYXJhbXMudGltZSk7XG5cdFx0dGhpcy5zZXRUeXBlKHBhcmFtcy50eXBlKTtcblx0XHR0aGlzLnNldERhdGEocGFyYW1zLmRhdGEpO1xuXHR9O1xuXG5cdE1ldGFFdmVudC5TRVFVRU5DRSAgID0gMHgwMDtcblx0TWV0YUV2ZW50LlRFWFQgICAgICAgPSAweDAxO1xuXHRNZXRhRXZlbnQuQ09QWVJJR0hUICA9IDB4MDI7XG5cdE1ldGFFdmVudC5UUkFDS19OQU1FID0gMHgwMztcblx0TWV0YUV2ZW50LklOU1RSVU1FTlQgPSAweDA0O1xuXHRNZXRhRXZlbnQuTFlSSUMgICAgICA9IDB4MDU7XG5cdE1ldGFFdmVudC5NQVJLRVIgICAgID0gMHgwNjtcblx0TWV0YUV2ZW50LkNVRV9QT0lOVCAgPSAweDA3O1xuXHRNZXRhRXZlbnQuQ0hBTk5FTF9QUkVGSVggPSAweDIwO1xuXHRNZXRhRXZlbnQuRU5EX09GX1RSQUNLICAgPSAweDJmO1xuXHRNZXRhRXZlbnQuVEVNUE8gICAgICA9IDB4NTE7XG5cdE1ldGFFdmVudC5TTVBURSAgICAgID0gMHg1NDtcblx0TWV0YUV2ZW50LlRJTUVfU0lHICAgPSAweDU4O1xuXHRNZXRhRXZlbnQuS0VZX1NJRyAgICA9IDB4NTk7XG5cdE1ldGFFdmVudC5TRVFfRVZFTlQgID0gMHg3ZjtcblxuXHQvKipcblx0ICogU2V0IHRoZSB0aW1lIGZvciB0aGUgZXZlbnQgaW4gdGlja3Mgc2luY2UgdGhlIHByZXZpb3VzIGV2ZW50LlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gdGlja3MgLSBUaGUgbnVtYmVyIG9mIHRpY2tzIHNpbmNlIHRoZSBwcmV2aW91cyBldmVudC4gTWF5XG5cdCAqIGJlIHplcm8uXG5cdCAqL1xuXHRNZXRhRXZlbnQucHJvdG90eXBlLnNldFRpbWUgPSBmdW5jdGlvbih0aWNrcykge1xuXHRcdHRoaXMudGltZSA9IFV0aWwudHJhbnNsYXRlVGlja1RpbWUodGlja3MgfHwgMCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNldCB0aGUgdHlwZSBvZiB0aGUgZXZlbnQuIE11c3QgYmUgb25lIG9mIHRoZSBldmVudCBjb2RlcyBvbiBNZXRhRXZlbnQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0IC0gRXZlbnQgdHlwZS5cblx0ICovXG5cdE1ldGFFdmVudC5wcm90b3R5cGUuc2V0VHlwZSA9IGZ1bmN0aW9uKHQpIHtcblx0XHR0aGlzLnR5cGUgPSB0O1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIGRhdGEgYXNzb2NpYXRlZCB3aXRoIHRoZSBldmVudC4gTWF5IGJlIGEgc3RyaW5nIG9yIGFycmF5IG9mIGJ5dGVcblx0ICogdmFsdWVzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ3xBcnJheX0gZCAtIEV2ZW50IGRhdGEuXG5cdCAqL1xuXHRNZXRhRXZlbnQucHJvdG90eXBlLnNldERhdGEgPSBmdW5jdGlvbihkKSB7XG5cdFx0dGhpcy5kYXRhID0gZDtcblx0fTtcblxuXHQvKipcblx0ICogU2VyaWFsaXplIHRoZSBldmVudCB0byBhbiBhcnJheSBvZiBieXRlcy5cblx0ICpcblx0ICogQHJldHVybnMge0FycmF5fSBUaGUgYXJyYXkgb2Ygc2VyaWFsaXplZCBieXRlcy5cblx0ICovXG5cdE1ldGFFdmVudC5wcm90b3R5cGUudG9CeXRlcyA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICghdGhpcy50eXBlKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUeXBlIGZvciBtZXRhLWV2ZW50IG5vdCBzcGVjaWZpZWQuXCIpO1xuXHRcdH1cblxuXHRcdHZhciBieXRlQXJyYXkgPSBbXTtcblx0XHRieXRlQXJyYXkucHVzaC5hcHBseShieXRlQXJyYXksIHRoaXMudGltZSk7XG5cdFx0Ynl0ZUFycmF5LnB1c2goMHhGRiwgdGhpcy50eXBlKTtcblxuXHRcdC8vIElmIGRhdGEgaXMgYW4gYXJyYXksIHdlIGFzc3VtZSB0aGF0IGl0IGNvbnRhaW5zIHNldmVyYWwgYnl0ZXMuIFdlXG5cdFx0Ly8gYXBlbmQgdGhlbSB0byBieXRlQXJyYXkuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkodGhpcy5kYXRhKSkge1xuXHRcdFx0Ynl0ZUFycmF5LnB1c2godGhpcy5kYXRhLmxlbmd0aCk7XG5cdFx0XHRieXRlQXJyYXkucHVzaC5hcHBseShieXRlQXJyYXksIHRoaXMuZGF0YSk7XG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgdGhpcy5kYXRhID09ICdudW1iZXInKSB7XG5cdFx0XHRieXRlQXJyYXkucHVzaCgxLCB0aGlzLmRhdGEpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5kYXRhICE9PSBudWxsICYmIHRoaXMuZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHQvLyBhc3N1bWUgc3RyaW5nOyBtYXkgYmUgYSBiYWQgYXNzdW1wdGlvblxuXHRcdFx0Ynl0ZUFycmF5LnB1c2godGhpcy5kYXRhLmxlbmd0aCk7XG5cdFx0XHR2YXIgZGF0YUJ5dGVzID0gdGhpcy5kYXRhLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24oeCl7IHJldHVybiB4LmNoYXJDb2RlQXQoMCkgfSk7XG5cdFx0XHRieXRlQXJyYXkucHVzaC5hcHBseShieXRlQXJyYXksIGRhdGFCeXRlcyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGJ5dGVBcnJheS5wdXNoKDApO1xuXHRcdH1cblxuXHRcdHJldHVybiBieXRlQXJyYXk7XG5cdH07XG5cblx0LyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdCAqIFRyYWNrIGNsYXNzXG5cdCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuXHQvKipcblx0ICogQ29uc3RydWN0IGEgTUlESSB0cmFjay5cblx0ICpcblx0ICogUGFyYW1ldGVycyBpbmNsdWRlOlxuXHQgKiAgLSBldmVudHMgW29wdGlvbmFsIGFycmF5XSAtIEFycmF5IG9mIGV2ZW50cyBmb3IgdGhlIHRyYWNrLlxuXHQgKi9cblx0dmFyIFRyYWNrID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0aWYgKCF0aGlzKSByZXR1cm4gbmV3IFRyYWNrKGNvbmZpZyk7XG5cdFx0dmFyIGMgPSBjb25maWcgfHwge307XG5cdFx0dGhpcy5ldmVudHMgPSBjLmV2ZW50cyB8fCBbXTtcblx0fTtcblxuXHRUcmFjay5TVEFSVF9CWVRFUyA9IFsweDRkLCAweDU0LCAweDcyLCAweDZiXTtcblx0VHJhY2suRU5EX0JZVEVTICAgPSBbMHgwMCwgMHhGRiwgMHgyRiwgMHgwMF07XG5cblx0LyoqXG5cdCAqIEFkZCBhbiBldmVudCB0byB0aGUgdHJhY2suXG5cdCAqXG5cdCAqIEBwYXJhbSB7TWlkaUV2ZW50fE1ldGFFdmVudH0gZXZlbnQgLSBUaGUgZXZlbnQgdG8gYWRkLlxuXHQgKiBAcmV0dXJucyB7VHJhY2t9IFRoZSBjdXJyZW50IHRyYWNrLlxuXHQgKi9cblx0VHJhY2sucHJvdG90eXBlLmFkZEV2ZW50ID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHR0aGlzLmV2ZW50cy5wdXNoKGV2ZW50KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHQvKipcblx0ICogQWRkIGEgbm90ZS1vbiBldmVudCB0byB0aGUgdHJhY2suXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBjaGFubmVsIC0gVGhlIGNoYW5uZWwgdG8gYWRkIHRoZSBldmVudCB0by5cblx0ICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBwaXRjaCAtIFRoZSBwaXRjaCBvZiB0aGUgbm90ZSwgZWl0aGVyIG51bWVyaWMgb3Jcblx0ICogc3ltYm9saWMuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbdGltZT0wXSAtIFRoZSBudW1iZXIgb2YgdGlja3Mgc2luY2UgdGhlIHByZXZpb3VzIGV2ZW50LFxuXHQgKiBkZWZhdWx0cyB0byAwLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gW3ZlbG9jaXR5PTkwXSAtIFRoZSB2b2x1bWUgZm9yIHRoZSBub3RlLCBkZWZhdWx0cyB0b1xuXHQgKiBERUZBVUxUX1ZPTFVNRS5cblx0ICogQHJldHVybnMge1RyYWNrfSBUaGUgY3VycmVudCB0cmFjay5cblx0ICovXG5cdFRyYWNrLnByb3RvdHlwZS5hZGROb3RlT24gPSBUcmFjay5wcm90b3R5cGUubm90ZU9uID0gZnVuY3Rpb24oY2hhbm5lbCwgcGl0Y2gsIHRpbWUsIHZlbG9jaXR5KSB7XG5cdFx0dGhpcy5ldmVudHMucHVzaChuZXcgTWlkaUV2ZW50KHtcblx0XHRcdHR5cGU6IE1pZGlFdmVudC5OT1RFX09OLFxuXHRcdFx0Y2hhbm5lbDogY2hhbm5lbCxcblx0XHRcdHBhcmFtMTogVXRpbC5lbnN1cmVNaWRpUGl0Y2gocGl0Y2gpLFxuXHRcdFx0cGFyYW0yOiB2ZWxvY2l0eSB8fCBERUZBVUxUX1ZPTFVNRSxcblx0XHRcdHRpbWU6IHRpbWUgfHwgMCxcblx0XHR9KSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0LyoqXG5cdCAqIEFkZCBhIG5vdGUtb2ZmIGV2ZW50IHRvIHRoZSB0cmFjay5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGNoYW5uZWwgLSBUaGUgY2hhbm5lbCB0byBhZGQgdGhlIGV2ZW50IHRvLlxuXHQgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IHBpdGNoIC0gVGhlIHBpdGNoIG9mIHRoZSBub3RlLCBlaXRoZXIgbnVtZXJpYyBvclxuXHQgKiBzeW1ib2xpYy5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lPTBdIC0gVGhlIG51bWJlciBvZiB0aWNrcyBzaW5jZSB0aGUgcHJldmlvdXMgZXZlbnQsXG5cdCAqIGRlZmF1bHRzIHRvIDAuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbdmVsb2NpdHk9OTBdIC0gVGhlIHZlbG9jaXR5IHRoZSBub3RlIHdhcyByZWxlYXNlZCxcblx0ICogZGVmYXVsdHMgdG8gREVGQVVMVF9WT0xVTUUuXG5cdCAqIEByZXR1cm5zIHtUcmFja30gVGhlIGN1cnJlbnQgdHJhY2suXG5cdCAqL1xuXHRUcmFjay5wcm90b3R5cGUuYWRkTm90ZU9mZiA9IFRyYWNrLnByb3RvdHlwZS5ub3RlT2ZmID0gZnVuY3Rpb24oY2hhbm5lbCwgcGl0Y2gsIHRpbWUsIHZlbG9jaXR5KSB7XG5cdFx0dGhpcy5ldmVudHMucHVzaChuZXcgTWlkaUV2ZW50KHtcblx0XHRcdHR5cGU6IE1pZGlFdmVudC5OT1RFX09GRixcblx0XHRcdGNoYW5uZWw6IGNoYW5uZWwsXG5cdFx0XHRwYXJhbTE6IFV0aWwuZW5zdXJlTWlkaVBpdGNoKHBpdGNoKSxcblx0XHRcdHBhcmFtMjogdmVsb2NpdHkgfHwgREVGQVVMVF9WT0xVTUUsXG5cdFx0XHR0aW1lOiB0aW1lIHx8IDAsXG5cdFx0fSkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBBZGQgYSBub3RlLW9uIGFuZCAtb2ZmIGV2ZW50IHRvIHRoZSB0cmFjay5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGNoYW5uZWwgLSBUaGUgY2hhbm5lbCB0byBhZGQgdGhlIGV2ZW50IHRvLlxuXHQgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IHBpdGNoIC0gVGhlIHBpdGNoIG9mIHRoZSBub3RlLCBlaXRoZXIgbnVtZXJpYyBvclxuXHQgKiBzeW1ib2xpYy5cblx0ICogQHBhcmFtIHtudW1iZXJ9IGR1ciAtIFRoZSBkdXJhdGlvbiBvZiB0aGUgbm90ZSwgaW4gdGlja3MuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbdGltZT0wXSAtIFRoZSBudW1iZXIgb2YgdGlja3Mgc2luY2UgdGhlIHByZXZpb3VzIGV2ZW50LFxuXHQgKiBkZWZhdWx0cyB0byAwLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gW3ZlbG9jaXR5PTkwXSAtIFRoZSB2ZWxvY2l0eSB0aGUgbm90ZSB3YXMgcmVsZWFzZWQsXG5cdCAqIGRlZmF1bHRzIHRvIERFRkFVTFRfVk9MVU1FLlxuXHQgKiBAcmV0dXJucyB7VHJhY2t9IFRoZSBjdXJyZW50IHRyYWNrLlxuXHQgKi9cblx0VHJhY2sucHJvdG90eXBlLmFkZE5vdGUgPSBUcmFjay5wcm90b3R5cGUubm90ZSA9IGZ1bmN0aW9uKGNoYW5uZWwsIHBpdGNoLCBkdXIsIHRpbWUsIHZlbG9jaXR5KSB7XG5cdFx0dGhpcy5ub3RlT24oY2hhbm5lbCwgcGl0Y2gsIHRpbWUsIHZlbG9jaXR5KTtcblx0XHRpZiAoZHVyKSB7XG5cdFx0XHR0aGlzLm5vdGVPZmYoY2hhbm5lbCwgcGl0Y2gsIGR1ciwgdmVsb2NpdHkpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHQvKipcblx0ICogQWRkIGEgbm90ZS1vbiBhbmQgLW9mZiBldmVudCB0byB0aGUgdHJhY2sgZm9yIGVhY2ggcGl0Y2ggaW4gYW4gYXJyYXkgb2YgcGl0Y2hlcy5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGNoYW5uZWwgLSBUaGUgY2hhbm5lbCB0byBhZGQgdGhlIGV2ZW50IHRvLlxuXHQgKiBAcGFyYW0ge2FycmF5fSBjaG9yZCAtIEFuIGFycmF5IG9mIHBpdGNoZXMsIGVpdGhlciBudW1lcmljIG9yXG5cdCAqIHN5bWJvbGljLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gZHVyIC0gVGhlIGR1cmF0aW9uIG9mIHRoZSBjaG9yZCwgaW4gdGlja3MuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbdmVsb2NpdHk9OTBdIC0gVGhlIHZlbG9jaXR5IG9mIHRoZSBjaG9yZCxcblx0ICogZGVmYXVsdHMgdG8gREVGQVVMVF9WT0xVTUUuXG5cdCAqIEByZXR1cm5zIHtUcmFja30gVGhlIGN1cnJlbnQgdHJhY2suXG5cdCAqL1xuXHRUcmFjay5wcm90b3R5cGUuYWRkQ2hvcmQgPSBUcmFjay5wcm90b3R5cGUuY2hvcmQgPSBmdW5jdGlvbihjaGFubmVsLCBjaG9yZCwgZHVyLCB2ZWxvY2l0eSkge1xuXHRcdGlmICghQXJyYXkuaXNBcnJheShjaG9yZCkgJiYgIWNob3JkLmxlbmd0aCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdDaG9yZCBtdXN0IGJlIGFuIGFycmF5IG9mIHBpdGNoZXMnKTtcblx0XHR9XG5cdFx0Y2hvcmQuZm9yRWFjaChmdW5jdGlvbihub3RlKSB7XG5cdFx0XHR0aGlzLm5vdGVPbihjaGFubmVsLCBub3RlLCAwLCB2ZWxvY2l0eSk7XG5cdFx0fSwgdGhpcyk7XG5cdFx0Y2hvcmQuZm9yRWFjaChmdW5jdGlvbihub3RlLCBpbmRleCkge1xuXHRcdFx0aWYgKGluZGV4ID09PSAwKSB7XG5cdFx0XHRcdHRoaXMubm90ZU9mZihjaGFubmVsLCBub3RlLCBkdXIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5ub3RlT2ZmKGNoYW5uZWwsIG5vdGUpO1xuXHRcdFx0fVxuXHRcdH0sIHRoaXMpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXQgaW5zdHJ1bWVudCBmb3IgdGhlIHRyYWNrLlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gY2hhbm5lbCAtIFRoZSBjaGFubmVsIHRvIHNldCB0aGUgaW5zdHJ1bWVudCBvbi5cblx0ICogQHBhcmFtIHtudW1iZXJ9IGluc3RydW1lbnQgLSBUaGUgaW5zdHJ1bWVudCB0byBzZXQgaXQgdG8uXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbdGltZT0wXSAtIFRoZSBudW1iZXIgb2YgdGlja3Mgc2luY2UgdGhlIHByZXZpb3VzIGV2ZW50LFxuXHQgKiBkZWZhdWx0cyB0byAwLlxuXHQgKiBAcmV0dXJucyB7VHJhY2t9IFRoZSBjdXJyZW50IHRyYWNrLlxuXHQgKi9cblx0VHJhY2sucHJvdG90eXBlLnNldEluc3RydW1lbnQgPSBUcmFjay5wcm90b3R5cGUuaW5zdHJ1bWVudCA9IGZ1bmN0aW9uKGNoYW5uZWwsIGluc3RydW1lbnQsIHRpbWUpIHtcblx0XHR0aGlzLmV2ZW50cy5wdXNoKG5ldyBNaWRpRXZlbnQoe1xuXHRcdFx0dHlwZTogTWlkaUV2ZW50LlBST0dSQU1fQ0hBTkdFLFxuXHRcdFx0Y2hhbm5lbDogY2hhbm5lbCxcblx0XHRcdHBhcmFtMTogaW5zdHJ1bWVudCxcblx0XHRcdHRpbWU6IHRpbWUgfHwgMCxcblx0XHR9KSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNldCB0aGUgdGVtcG8gZm9yIHRoZSB0cmFjay5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGJwbSAtIFRoZSBuZXcgbnVtYmVyIG9mIGJlYXRzIHBlciBtaW51dGUuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbdGltZT0wXSAtIFRoZSBudW1iZXIgb2YgdGlja3Mgc2luY2UgdGhlIHByZXZpb3VzIGV2ZW50LFxuXHQgKiBkZWZhdWx0cyB0byAwLlxuXHQgKiBAcmV0dXJucyB7VHJhY2t9IFRoZSBjdXJyZW50IHRyYWNrLlxuXHQgKi9cblx0VHJhY2sucHJvdG90eXBlLnNldFRlbXBvID0gVHJhY2sucHJvdG90eXBlLnRlbXBvID0gZnVuY3Rpb24oYnBtLCB0aW1lKSB7XG5cdFx0dGhpcy5ldmVudHMucHVzaChuZXcgTWV0YUV2ZW50KHtcblx0XHRcdHR5cGU6IE1ldGFFdmVudC5URU1QTyxcblx0XHRcdGRhdGE6IFV0aWwubXBxbkZyb21CcG0oYnBtKSxcblx0XHRcdHRpbWU6IHRpbWUgfHwgMCxcblx0XHR9KSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNlcmlhbGl6ZSB0aGUgdHJhY2sgdG8gYW4gYXJyYXkgb2YgYnl0ZXMuXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gVGhlIGFycmF5IG9mIHNlcmlhbGl6ZWQgYnl0ZXMuXG5cdCAqL1xuXHRUcmFjay5wcm90b3R5cGUudG9CeXRlcyA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciB0cmFja0xlbmd0aCA9IDA7XG5cdFx0dmFyIGV2ZW50Qnl0ZXMgPSBbXTtcblx0XHR2YXIgc3RhcnRCeXRlcyA9IFRyYWNrLlNUQVJUX0JZVEVTO1xuXHRcdHZhciBlbmRCeXRlcyAgID0gVHJhY2suRU5EX0JZVEVTO1xuXG5cdFx0dmFyIGFkZEV2ZW50Qnl0ZXMgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdFx0dmFyIGJ5dGVzID0gZXZlbnQudG9CeXRlcygpO1xuXHRcdFx0dHJhY2tMZW5ndGggKz0gYnl0ZXMubGVuZ3RoO1xuXHRcdFx0ZXZlbnRCeXRlcy5wdXNoLmFwcGx5KGV2ZW50Qnl0ZXMsIGJ5dGVzKTtcblx0XHR9O1xuXG5cdFx0dGhpcy5ldmVudHMuZm9yRWFjaChhZGRFdmVudEJ5dGVzKTtcblxuXHRcdC8vIEFkZCB0aGUgZW5kLW9mLXRyYWNrIGJ5dGVzIHRvIHRoZSBzdW0gb2YgYnl0ZXMgZm9yIHRoZSB0cmFjaywgc2luY2Vcblx0XHQvLyB0aGV5IGFyZSBjb3VudGVkICh1bmxpa2UgdGhlIHN0YXJ0LW9mLXRyYWNrIG9uZXMpLlxuXHRcdHRyYWNrTGVuZ3RoICs9IGVuZEJ5dGVzLmxlbmd0aDtcblxuXHRcdC8vIE1ha2VzIHN1cmUgdGhhdCB0cmFjayBsZW5ndGggd2lsbCBmaWxsIHVwIDQgYnl0ZXMgd2l0aCAwcyBpbiBjYXNlXG5cdFx0Ly8gdGhlIGxlbmd0aCBpcyBsZXNzIHRoYW4gdGhhdCAodGhlIHVzdWFsIGNhc2UpLlxuXHRcdHZhciBsZW5ndGhCeXRlcyA9IFV0aWwuc3RyMkJ5dGVzKHRyYWNrTGVuZ3RoLnRvU3RyaW5nKDE2KSwgNCk7XG5cblx0XHRyZXR1cm4gc3RhcnRCeXRlcy5jb25jYXQobGVuZ3RoQnl0ZXMsIGV2ZW50Qnl0ZXMsIGVuZEJ5dGVzKTtcblx0fTtcblxuXHQvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0ICogRmlsZSBjbGFzc1xuXHQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cblx0LyoqXG5cdCAqIENvbnN0cnVjdCBhIGZpbGUgb2JqZWN0LlxuXHQgKlxuXHQgKiBQYXJhbWV0ZXJzIGluY2x1ZGU6XG5cdCAqICAtIHRpY2tzIFtvcHRpb25hbCBudW1iZXJdIC0gTnVtYmVyIG9mIHRpY2tzIHBlciBiZWF0LCBkZWZhdWx0cyB0byAxMjguXG5cdCAqICAgIE11c3QgYmUgMS0zMjc2Ny5cblx0ICogIC0gdHJhY2tzIFtvcHRpb25hbCBhcnJheV0gLSBUcmFjayBkYXRhLlxuXHQgKi9cblx0dmFyIEZpbGUgPSBmdW5jdGlvbihjb25maWcpe1xuXHRcdGlmICghdGhpcykgcmV0dXJuIG5ldyBGaWxlKGNvbmZpZyk7XG5cblx0XHR2YXIgYyA9IGNvbmZpZyB8fCB7fTtcblx0XHRpZiAoYy50aWNrcykge1xuXHRcdFx0aWYgKHR5cGVvZiBjLnRpY2tzICE9PSAnbnVtYmVyJykge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RpY2tzIHBlciBiZWF0IG11c3QgYmUgYSBudW1iZXIhJyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmIChjLnRpY2tzIDw9IDAgfHwgYy50aWNrcyA+PSAoMSA8PCAxNSkgfHwgYy50aWNrcyAlIDEgIT09IDApIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdUaWNrcyBwZXIgYmVhdCBtdXN0IGJlIGFuIGludGVnZXIgYmV0d2VlbiAxIGFuZCAzMjc2NyEnKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMudGlja3MgPSBjLnRpY2tzIHx8IDEyODtcblx0XHR0aGlzLnRyYWNrcyA9IGMudHJhY2tzIHx8IFtdO1xuXHR9O1xuXG5cdEZpbGUuSERSX0NIVU5LSUQgICAgID0gXCJNVGhkXCI7ICAgICAgICAgICAgIC8vIEZpbGUgbWFnaWMgY29va2llXG5cdEZpbGUuSERSX0NIVU5LX1NJWkUgID0gXCJcXHgwMFxceDAwXFx4MDBcXHgwNlwiOyAvLyBIZWFkZXIgbGVuZ3RoIGZvciBTTUZcblx0RmlsZS5IRFJfVFlQRTAgICAgICAgPSBcIlxceDAwXFx4MDBcIjsgICAgICAgICAvLyBNaWRpIFR5cGUgMCBpZFxuXHRGaWxlLkhEUl9UWVBFMSAgICAgICA9IFwiXFx4MDBcXHgwMVwiOyAgICAgICAgIC8vIE1pZGkgVHlwZSAxIGlkXG5cblx0LyoqXG5cdCAqIEFkZCBhIHRyYWNrIHRvIHRoZSBmaWxlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge1RyYWNrfSB0cmFjayAtIFRoZSB0cmFjayB0byBhZGQuXG5cdCAqL1xuXHRGaWxlLnByb3RvdHlwZS5hZGRUcmFjayA9IGZ1bmN0aW9uKHRyYWNrKSB7XG5cdFx0aWYgKHRyYWNrKSB7XG5cdFx0XHR0aGlzLnRyYWNrcy5wdXNoKHRyYWNrKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0cmFjayA9IG5ldyBUcmFjaygpO1xuXHRcdFx0dGhpcy50cmFja3MucHVzaCh0cmFjayk7XG5cdFx0XHRyZXR1cm4gdHJhY2s7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXJpYWxpemUgdGhlIE1JREkgZmlsZSB0byBhbiBhcnJheSBvZiBieXRlcy5cblx0ICpcblx0ICogQHJldHVybnMge0FycmF5fSBUaGUgYXJyYXkgb2Ygc2VyaWFsaXplZCBieXRlcy5cblx0ICovXG5cdEZpbGUucHJvdG90eXBlLnRvQnl0ZXMgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgdHJhY2tDb3VudCA9IHRoaXMudHJhY2tzLmxlbmd0aC50b1N0cmluZygxNik7XG5cblx0XHQvLyBwcmVwYXJlIHRoZSBmaWxlIGhlYWRlclxuXHRcdHZhciBieXRlcyA9IEZpbGUuSERSX0NIVU5LSUQgKyBGaWxlLkhEUl9DSFVOS19TSVpFO1xuXG5cdFx0Ly8gc2V0IE1pZGkgdHlwZSBiYXNlZCBvbiBudW1iZXIgb2YgdHJhY2tzXG5cdFx0aWYgKHBhcnNlSW50KHRyYWNrQ291bnQsIDE2KSA+IDEpIHtcblx0XHRcdGJ5dGVzICs9IEZpbGUuSERSX1RZUEUxO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRieXRlcyArPSBGaWxlLkhEUl9UWVBFMDtcblx0XHR9XG5cblx0XHQvLyBhZGQgdGhlIG51bWJlciBvZiB0cmFja3MgKDIgYnl0ZXMpXG5cdFx0Ynl0ZXMgKz0gVXRpbC5jb2RlczJTdHIoVXRpbC5zdHIyQnl0ZXModHJhY2tDb3VudCwgMikpO1xuXHRcdC8vIGFkZCB0aGUgbnVtYmVyIG9mIHRpY2tzIHBlciBiZWF0IChjdXJyZW50bHkgaGFyZGNvZGVkKVxuXHRcdGJ5dGVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKHRoaXMudGlja3MvMjU2KSwgIHRoaXMudGlja3MlMjU2KTs7XG5cblx0XHQvLyBpdGVyYXRlIG92ZXIgdGhlIHRyYWNrcywgY29udmVydGluZyB0byBieXRlcyB0b29cblx0XHR0aGlzLnRyYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKHRyYWNrKSB7XG5cdFx0XHRieXRlcyArPSBVdGlsLmNvZGVzMlN0cih0cmFjay50b0J5dGVzKCkpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGJ5dGVzO1xuXHR9O1xuXG5cdC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXHQgKiBFeHBvcnRzXG5cdCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuXHRleHBvcnRlZC5VdGlsID0gVXRpbDtcblx0ZXhwb3J0ZWQuRmlsZSA9IEZpbGU7XG5cdGV4cG9ydGVkLlRyYWNrID0gVHJhY2s7XG5cdGV4cG9ydGVkLkV2ZW50ID0gTWlkaUV2ZW50O1xuXHRleHBvcnRlZC5NZXRhRXZlbnQgPSBNZXRhRXZlbnQ7XG5cbn0pKCBNaWRpICk7XG5cbmlmICh0eXBlb2YgbW9kdWxlICE9ICd1bmRlZmluZWQnICYmIG1vZHVsZSAhPT0gbnVsbCkge1xuXHRtb2R1bGUuZXhwb3J0cyA9IE1pZGk7XG59IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9ICd1bmRlZmluZWQnICYmIGV4cG9ydHMgIT09IG51bGwpIHtcblx0ZXhwb3J0cyA9IE1pZGk7XG59IGVsc2Uge1xuXHR0aGlzLk1pZGkgPSBNaWRpO1xufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5yZWR1Y2UoKHByZXYsIGN1cikgPT4gcHJldi5jb25jYXQoY3VyKSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwZWF0KHZhbHVlLCB0aW1lcykge1xuICBjb25zdCBvdXQgPSBbXTtcblxuICB3aGlsZSAodGltZXMpIHtcbiAgICBvdXQucHVzaCh2YWx1ZSk7XG4gICAgdGltZXMgLT0gMTtcbiAgfVxuXG4gIHJldHVybiBvdXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5nZShtaW4sIG1heCwgc3RlcCkge1xuICBjb25zdCBhY2MgPSBbXTtcblxuICBpZiAoIXN0ZXApIHtcbiAgICBmb3IgKGxldCBpID0gbWluOyBpIDw9IG1heDsgaSArPSAxKSB7XG4gICAgICBhY2MucHVzaChpKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZGlmZiA9IChtYXggLSBtaW4pIC8gc3RlcDtcblxuICAgIGZvciAobGV0IGkgPSBtaW47IGkgPD0gbWF4OyBpICs9IGRpZmYpIHtcbiAgICAgIGFjYy5wdXNoKGkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhY2M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZSh2YWx1ZSkge1xuICBpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHJldHVybiB2YWx1ZTtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSByZXR1cm4gdmFsdWUubWFwKGNsb25lKTtcblxuICBjb25zdCBjb3B5ID0ge307XG5cbiAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goa2V5ID0+IHtcbiAgICBjb3B5W2tleV0gPSBjbG9uZSh2YWx1ZVtrZXldKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvcHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB6aXAoYSwgYiwgY2IpIHtcbiAgY29uc3QgbWF4ID0gTWF0aC5tYXgoYS5sZW5ndGgsIGIubGVuZ3RoKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG1heDsgaSArPSAxKSB7XG4gICAgaWYgKHR5cGVvZiBhW2ldICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgYltpXSAhPT0gJ3VuZGVmaW5lZCcpIGNiKGFbaV0sIGJbaV0pO1xuICB9XG59XG4iLCAiKCgpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ezQxMzpuPT57bi5leHBvcnRzPUpTT04ucGFyc2UoJ3tcIjV0aFwiOlwiMTAwMDAwMDEwMDAwXCIsXCJNNyM1c3VzNFwiOlwiMTAwMDAxMDAxMDAxXCIsXCI3IzVzdXM0XCI6XCIxMDAwMDEwMDEwMTBcIixcInN1czRcIjpcIjEwMDAwMTAxMDAwMFwiLFwiTTdzdXM0XCI6XCIxMDAwMDEwMTAwMDFcIixcIjdzdXM0XCI6XCIxMDAwMDEwMTAwMTBcIixcIjdubzVcIjpcIjEwMDAxMDAwMDAxMFwiLFwiYXVnXCI6XCIxMDAwMTAwMDEwMDBcIixcIk03YjZcIjpcIjEwMDAxMDAwMTAwMVwiLFwibWFqNyM1XCI6XCIxMDAwMTAwMDEwMDFcIixcIjcjNVwiOlwiMTAwMDEwMDAxMDEwXCIsXCI3YjEzXCI6XCIxMDAwMTAwMDEwMTBcIixcIk1cIjpcIjEwMDAxMDAxMDAwMFwiLFwibWFqN1wiOlwiMTAwMDEwMDEwMDAxXCIsXCI3dGhcIjpcIjEwMDAxMDAxMDAxMFwiLFwiNnRoXCI6XCIxMDAwMTAwMTAxMDBcIixcIjdhZGQ2XCI6XCIxMDAwMTAwMTAxMTBcIixcIjdiNlwiOlwiMTAwMDEwMDExMDEwXCIsXCJNYjVcIjpcIjEwMDAxMDEwMDAwMFwiLFwiTTdiNVwiOlwiMTAwMDEwMTAwMDAxXCIsXCI3YjVcIjpcIjEwMDAxMDEwMDAxMFwiLFwibWFqIzRcIjpcIjEwMDAxMDExMDAwMVwiLFwiNyMxMVwiOlwiMTAwMDEwMTEwMDEwXCIsXCJNNiMxMVwiOlwiMTAwMDEwMTEwMTAwXCIsXCI3IzExYjEzXCI6XCIxMDAwMTAxMTEwMTBcIixcIm0jNVwiOlwiMTAwMTAwMDAxMDAwXCIsXCJtYjZNN1wiOlwiMTAwMTAwMDAxMDAxXCIsXCJtNyM1XCI6XCIxMDAxMDAwMDEwMTBcIixcIm1cIjpcIjEwMDEwMDAxMDAwMFwiLFwibS9tYTdcIjpcIjEwMDEwMDAxMDAwMVwiLFwibTdcIjpcIjEwMDEwMDAxMDAxMFwiLFwibTZcIjpcIjEwMDEwMDAxMDEwMFwiLFwibU1hajdiNlwiOlwiMTAwMTAwMDExMDAxXCIsXCJkaW1cIjpcIjEwMDEwMDEwMDAwMFwiLFwib003XCI6XCIxMDAxMDAxMDAwMDFcIixcIm03YjVcIjpcIjEwMDEwMDEwMDAxMFwiLFwiZGltN1wiOlwiMTAwMTAwMTAwMTAwXCIsXCJvN003XCI6XCIxMDAxMDAxMDAxMDFcIixcIjR0aFwiOlwiMTAwMTAxMDAwMDEwXCIsXCJtYWRkNFwiOlwiMTAwMTAxMDEwMDAwXCIsXCJtN2FkZDExXCI6XCIxMDAxMDEwMTAwMTBcIixcIithZGQjOVwiOlwiMTAwMTEwMDAxMDAwXCIsXCI3IzUjOVwiOlwiMTAwMTEwMDAxMDEwXCIsXCI3IzlcIjpcIjEwMDExMDAxMDAxMFwiLFwiMTMjOVwiOlwiMTAwMTEwMDEwMTEwXCIsXCI3IzliMTNcIjpcIjEwMDExMDAxMTAxMFwiLFwibWFqNyM5IzExXCI6XCIxMDAxMTAxMTAwMDFcIixcIjcjOSMxMVwiOlwiMTAwMTEwMTEwMDEwXCIsXCIxMyM5IzExXCI6XCIxMDAxMTAxMTAxMTBcIixcIjcjOSMxMWIxM1wiOlwiMTAwMTEwMTExMDEwXCIsXCJzdXMyXCI6XCIxMDEwMDAwMTAwMDBcIixcIk05IzVzdXM0XCI6XCIxMDEwMDEwMDEwMDFcIixcInN1czI0XCI6XCIxMDEwMDEwMTAwMDBcIixcIk05c3VzNFwiOlwiMTAxMDAxMDEwMDAxXCIsXCIxMXRoXCI6XCIxMDEwMDEwMTAwMTBcIixcIjlzdXM0XCI6XCIxMDEwMDEwMTAwMTBcIixcIjEzc3VzNFwiOlwiMTAxMDAxMDEwMTEwXCIsXCI5bm81XCI6XCIxMDEwMTAwMDAwMTBcIixcIjEzbm81XCI6XCIxMDEwMTAwMDAxMTBcIixcIk0jNWFkZDlcIjpcIjEwMTAxMDAwMTAwMFwiLFwibWFqOSM1XCI6XCIxMDEwMTAwMDEwMDFcIixcIjkjNVwiOlwiMTAxMDEwMDAxMDEwXCIsXCI5YjEzXCI6XCIxMDEwMTAwMDEwMTBcIixcIk1hZGQ5XCI6XCIxMDEwMTAwMTAwMDBcIixcIm1hajlcIjpcIjEwMTAxMDAxMDAwMVwiLFwiOXRoXCI6XCIxMDEwMTAwMTAwMTBcIixcIjYvOVwiOlwiMTAxMDEwMDEwMTAwXCIsXCJtYWoxM1wiOlwiMTAxMDEwMDEwMTAxXCIsXCJNN2FkZDEzXCI6XCIxMDEwMTAwMTAxMDFcIixcIjEzdGhcIjpcIjEwMTAxMDAxMDExMFwiLFwiTTliNVwiOlwiMTAxMDEwMTAwMDAxXCIsXCI5YjVcIjpcIjEwMTAxMDEwMDAxMFwiLFwiMTNiNVwiOlwiMTAxMDEwMTAwMTEwXCIsXCI5IzUjMTFcIjpcIjEwMTAxMDEwMTAxMFwiLFwibWFqOSMxMVwiOlwiMTAxMDEwMTEwMDAxXCIsXCI5IzExXCI6XCIxMDEwMTAxMTAwMTBcIixcIjY5IzExXCI6XCIxMDEwMTAxMTAxMDBcIixcIk0xMyMxMVwiOlwiMTAxMDEwMTEwMTAxXCIsXCIxMyMxMVwiOlwiMTAxMDEwMTEwMTEwXCIsXCI5IzExYjEzXCI6XCIxMDEwMTAxMTEwMTBcIixcIm05IzVcIjpcIjEwMTEwMDAwMTAxMFwiLFwibWFkZDlcIjpcIjEwMTEwMDAxMDAwMFwiLFwibU05XCI6XCIxMDExMDAwMTAwMDFcIixcIm05XCI6XCIxMDExMDAwMTAwMTBcIixcIm02OVwiOlwiMTAxMTAwMDEwMTAwXCIsXCJtMTNcIjpcIjEwMTEwMDAxMDExMFwiLFwibU1hajliNlwiOlwiMTAxMTAwMDExMDAxXCIsXCJtOWI1XCI6XCIxMDExMDAxMDAwMTBcIixcIm0xMUFcIjpcIjEwMTEwMTAwMTAxMFwiLFwibTExXCI6XCIxMDExMDEwMTAwMTBcIixcImI5c3VzXCI6XCIxMTAwMDEwMTAwMTBcIixcIjExYjlcIjpcIjExMDAwMTAxMDAxMFwiLFwiN3N1czRiOWIxM1wiOlwiMTEwMDAxMDExMDEwXCIsXCJhbHQ3XCI6XCIxMTAwMTAwMDAwMTBcIixcIjcjNWI5XCI6XCIxMTAwMTAwMDEwMTBcIixcIk1hZGRiOVwiOlwiMTEwMDEwMDEwMDAwXCIsXCJNN2I5XCI6XCIxMTAwMTAwMTAwMDFcIixcIjdiOVwiOlwiMTEwMDEwMDEwMDEwXCIsXCIxM2I5XCI6XCIxMTAwMTAwMTAxMTBcIixcIjdiOWIxM1wiOlwiMTEwMDEwMDExMDEwXCIsXCI3IzViOSMxMVwiOlwiMTEwMDEwMTAxMDEwXCIsXCI3YjkjMTFcIjpcIjExMDAxMDExMDAxMFwiLFwiMTNiOSMxMVwiOlwiMTEwMDEwMTEwMTEwXCIsXCI3YjliMTMjMTFcIjpcIjExMDAxMDExMTAxMFwiLFwibWI2YjlcIjpcIjExMDEwMDAwMTAwMFwiLFwiN2I5IzlcIjpcIjExMDExMDAxMDAxMFwifScpfSw3MjI6bj0+e24uZXhwb3J0cz1KU09OLnBhcnNlKCd7XCJtYWpvciBwZW50YXRvbmljXCI6XCIxMDEwMTAwMTAxMDBcIixcImlvbmlhbiBwZW50YXRvbmljXCI6XCIxMDAwMTEwMTAwMDFcIixcIm1peG9seWRpYW4gcGVudGF0b25pY1wiOlwiMTAwMDExMDEwMDEwXCIsXCJyaXR1c2VuXCI6XCIxMDEwMDEwMTAxMDBcIixcImVneXB0aWFuXCI6XCIxMDEwMDEwMTAwMTBcIixcIm5lb3BvbGl0YW4gbWFqb3IgcGVudGF0b25pY1wiOlwiMTAwMDExMTAwMDEwXCIsXCJ2aWV0bmFtZXNlIDFcIjpcIjEwMDEwMTAxMTAwMFwiLFwicGVsb2dcIjpcIjExMDEwMDAxMTAwMFwiLFwia3Vtb2lqb3NoaVwiOlwiMTEwMDAxMDExMDAwXCIsXCJoaXJham9zaGlcIjpcIjEwMTEwMDAxMTAwMFwiLFwiaXdhdG9cIjpcIjExMDAwMTEwMDAxMFwiLFwiaW4tc2VuXCI6XCIxMTAwMDEwMTAwMTBcIixcImx5ZGlhbiBwZW50YXRvbmljXCI6XCIxMDAwMTAxMTAwMDFcIixcIm1hbGtvcyByYWdhXCI6XCIxMDAxMDEwMDEwMTBcIixcImxvY3JpYW4gcGVudGF0b25pY1wiOlwiMTAwMTAxMTAwMDEwXCIsXCJtaW5vciBwZW50YXRvbmljXCI6XCIxMDAxMDEwMTAwMTBcIixcIm1pbm9yIHNpeCBwZW50YXRvbmljXCI6XCIxMDAxMDEwMTAxMDBcIixcImZsYXQgdGhyZWUgcGVudGF0b25pY1wiOlwiMTAxMTAwMDEwMTAwXCIsXCJmbGF0IHNpeCBwZW50YXRvbmljXCI6XCIxMDEwMTAwMTEwMDBcIixcInNjcmlhYmluXCI6XCIxMTAwMTAwMTAxMDBcIixcIndob2xlIHRvbmUgcGVudGF0b25pY1wiOlwiMTAwMDEwMTAxMDEwXCIsXCJseWRpYW4gIzVQIHBlbnRhdG9uaWNcIjpcIjEwMDAxMDEwMTAwMVwiLFwibHlkaWFuIGRvbWluYW50IHBlbnRhdG9uaWNcIjpcIjEwMDAxMDExMDAxMFwiLFwibWlub3IgIzdNIHBlbnRhdG9uaWNcIjpcIjEwMDEwMTAxMDAwMVwiLFwic3VwZXIgbG9jcmlhbiBwZW50YXRvbmljXCI6XCIxMDAxMTAxMDAwMTBcIixcIm1pbm9yIGhleGF0b25pY1wiOlwiMTAxMTAxMDEwMDAxXCIsXCJhdWdtZW50ZWRcIjpcIjEwMDExMDAxMTAwMVwiLFwibWFqb3IgYmx1ZXNcIjpcIjEwMTExMDAxMDEwMFwiLFwicGlvbmdpb1wiOlwiMTAxMDAxMDEwMTEwXCIsXCJwcm9tZXRoZXVzIG5lb3BvbGl0YW5cIjpcIjExMDAxMDEwMDExMFwiLFwicHJvbWV0aGV1c1wiOlwiMTAxMDEwMTAwMTEwXCIsXCJteXN0ZXJ5ICMxXCI6XCIxMTAwMTAxMDEwMTBcIixcInNpeCB0b25lIHN5bW1ldHJpY1wiOlwiMTEwMDExMDAxMTAwXCIsXCJ3aG9sZSB0b25lXCI6XCIxMDEwMTAxMDEwMTBcIixcIm1lc3NpYWVuXFwncyBtb2RlICM1XCI6XCIxMTAwMDExMTAwMDFcIixcIm1pbm9yIGJsdWVzXCI6XCIxMDAxMDExMTAwMTBcIixcImxvY3JpYW4gbWFqb3JcIjpcIjEwMTAxMTEwMTAxMFwiLFwiZG91YmxlIGhhcm1vbmljIGx5ZGlhblwiOlwiMTEwMDEwMTExMDAxXCIsXCJoYXJtb25pYyBtaW5vclwiOlwiMTAxMTAxMDExMDAxXCIsXCJhbHRlcmVkXCI6XCIxMTAxMTAxMDEwMTBcIixcImxvY3JpYW4gIzJcIjpcIjEwMTEwMTEwMTAxMFwiLFwibWl4b2x5ZGlhbiBiNlwiOlwiMTAxMDExMDExMDEwXCIsXCJseWRpYW4gZG9taW5hbnRcIjpcIjEwMTAxMDExMDExMFwiLFwibHlkaWFuXCI6XCIxMDEwMTAxMTAxMDFcIixcImx5ZGlhbiBhdWdtZW50ZWRcIjpcIjEwMTAxMDEwMTEwMVwiLFwiZG9yaWFuIGIyXCI6XCIxMTAxMDEwMTAxMTBcIixcIm1lbG9kaWMgbWlub3JcIjpcIjEwMTEwMTAxMDEwMVwiLFwibG9jcmlhblwiOlwiMTEwMTAxMTAxMDEwXCIsXCJ1bHRyYWxvY3JpYW5cIjpcIjExMDExMDEwMTEwMFwiLFwibG9jcmlhbiA2XCI6XCIxMTAxMDExMDAxMTBcIixcImF1Z21lbnRlZCBoZXB0YXRvbmljXCI6XCIxMDAxMTEwMTEwMDFcIixcInJvbWFuaWFuIG1pbm9yXCI6XCIxMDExMDAxMTAxMTBcIixcImRvcmlhbiAjNFwiOlwiMTAxMTAwMTEwMTEwXCIsXCJseWRpYW4gZGltaW5pc2hlZFwiOlwiMTAxMTAwMTEwMTAxXCIsXCJwaHJ5Z2lhblwiOlwiMTEwMTAxMDExMDEwXCIsXCJsZWFkaW5nIHdob2xlIHRvbmVcIjpcIjEwMTAxMDEwMTAxMVwiLFwibHlkaWFuIG1pbm9yXCI6XCIxMDEwMTAxMTEwMTBcIixcInBocnlnaWFuIGRvbWluYW50XCI6XCIxMTAwMTEwMTEwMTBcIixcImJhbGluZXNlXCI6XCIxMTAxMDEwMTEwMDFcIixcIm5lb3BvbGl0YW4gbWFqb3JcIjpcIjExMDEwMTAxMDEwMVwiLFwiYWVvbGlhblwiOlwiMTAxMTAxMDExMDEwXCIsXCJoYXJtb25pYyBtYWpvclwiOlwiMTAxMDExMDExMDAxXCIsXCJkb3VibGUgaGFybW9uaWMgbWFqb3JcIjpcIjExMDAxMTAxMTAwMVwiLFwiZG9yaWFuXCI6XCIxMDExMDEwMTAxMTBcIixcImh1bmdhcmlhbiBtaW5vclwiOlwiMTAxMTAwMTExMDAxXCIsXCJodW5nYXJpYW4gbWFqb3JcIjpcIjEwMDExMDExMDExMFwiLFwib3JpZW50YWxcIjpcIjExMDAxMTEwMDExMFwiLFwiZmxhbWVuY29cIjpcIjExMDExMDExMDAxMFwiLFwidG9kaSByYWdhXCI6XCIxMTAxMDAxMTEwMDFcIixcIm1peG9seWRpYW5cIjpcIjEwMTAxMTAxMDExMFwiLFwicGVyc2lhblwiOlwiMTEwMDExMTAxMDAxXCIsXCJtYWpvclwiOlwiMTAxMDExMDEwMTAxXCIsXCJlbmlnbWF0aWNcIjpcIjExMDAxMDEwMTAxMVwiLFwibWFqb3IgYXVnbWVudGVkXCI6XCIxMDEwMTEwMDExMDFcIixcImx5ZGlhbiAjOVwiOlwiMTAwMTEwMTEwMTAxXCIsXCJtZXNzaWFlblxcJ3MgbW9kZSAjNFwiOlwiMTExMDAxMTExMDAxXCIsXCJwdXJ2aSByYWdhXCI6XCIxMTAwMTExMTEwMDFcIixcInNwYW5pc2ggaGVwdGF0b25pY1wiOlwiMTEwMTExMDExMDEwXCIsXCJiZWJvcFwiOlwiMTAxMDExMDEwMTExXCIsXCJiZWJvcCBtaW5vclwiOlwiMTAxMTExMDEwMTEwXCIsXCJiZWJvcCBtYWpvclwiOlwiMTAxMDExMDExMTAxXCIsXCJiZWJvcCBsb2NyaWFuXCI6XCIxMTAxMDExMTEwMTBcIixcIm1pbm9yIGJlYm9wXCI6XCIxMDExMDEwMTEwMTFcIixcImRpbWluaXNoZWRcIjpcIjEwMTEwMTEwMTEwMVwiLFwiaWNoaWtvc3VjaG9cIjpcIjEwMTAxMTExMDEwMVwiLFwibWlub3Igc2l4IGRpbWluaXNoZWRcIjpcIjEwMTEwMTAxMTEwMVwiLFwiaGFsZi13aG9sZSBkaW1pbmlzaGVkXCI6XCIxMTAxMTAxMTAxMTBcIixcImthZmkgcmFnYVwiOlwiMTAwMTExMDEwMTExXCIsXCJtZXNzaWFlblxcJ3MgbW9kZSAjNlwiOlwiMTAxMDExMTAxMDExXCIsXCJjb21wb3NpdGUgYmx1ZXNcIjpcIjEwMTExMTExMDExMFwiLFwibWVzc2lhZW5cXCdzIG1vZGUgIzNcIjpcIjEwMTExMDExMTAxMVwiLFwibWVzc2lhZW5cXCdzIG1vZGUgIzdcIjpcIjExMTEwMTExMTEwMVwiLFwiY2hyb21hdGljXCI6XCIxMTExMTExMTExMTFcIixcImlvbmlhblwiOlwiMTAxMDExMDEwMTAxXCIsXCJtaW5vclwiOlwiMTAxMTAxMDExMDEwXCJ9Jyl9fSxlPXt9O2Z1bmN0aW9uIG8oYSl7dmFyIGk9ZVthXTtpZih2b2lkIDAhPT1pKXJldHVybiBpLmV4cG9ydHM7dmFyIHI9ZVthXT17ZXhwb3J0czp7fX07cmV0dXJuIG5bYV0ocixyLmV4cG9ydHMsbyksci5leHBvcnRzfW8uZD0obixlKT0+e2Zvcih2YXIgYSBpbiBlKW8ubyhlLGEpJiYhby5vKG4sYSkmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLGEse2VudW1lcmFibGU6ITAsZ2V0OmVbYV19KX0sby5vPShuLGUpPT5PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixlKSxvLnI9bj0+e1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9O3ZhciBhPXt9OygoKT0+e28ucihhKSxvLmQoYSx7Y2hvcmQ6KCk9Pm0sY2hvcmRzOigpPT50LGlubGluZUNob3JkOigpPT5yLHNjYWxlOigpPT5jLHNjYWxlczooKT0+c30pO3ZhciBuPW8oNzIyKSxlPW8oNDEzKSxpPWZ1bmN0aW9uKG8pe3ZhciBhPW8uc2NhbGUsaT1vLmNob3JkLHI9YXx8aSx0PWE/XCJzY2FsZVwiOlwiY2hvcmRcIjtpZihcInN0cmluZ1wiIT10eXBlb2Ygcil0aHJvdyBuZXcgRXJyb3IoXCJcIi5jb25jYXQocixcIiBpcyBub3QgYSB2YWxpZCBpbnB1dCBmb3IgXCIpLmNvbmNhdCh0KSk7dmFyIHMsbSxjPXIuaW5kZXhPZihcIiBcIik7LTE9PT1jPyhzPXIuc2xpY2UoMSksbT1yWzBdLFwiYlwiIT09clsxXSYmXCIjXCIhPT1yWzFdfHwocz1yLnNsaWNlKDIpLG0rPXJbMV0pKToocz1yLnNsaWNlKC0xPT09Yz8xOmMrMSksbT1yLnNsaWNlKDAsYykpO3ZhciBkPWZ1bmN0aW9uKG4pe3JldHVybntcIkMjXCI6XCJEYlwiLFwiRCNcIjpcIkViXCIsXCJGI1wiOlwiR2JcIixcIkcjXCI6XCJBYlwiLFwiQSNcIjpcIkJiXCJ9W24udG9VcHBlckNhc2UoKV18fG4uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrbi5zbGljZSgxKX0obS5yZXBsYWNlKC9cXGQvZyxcIlwiKSksbD1cIlwiIT09bS5yZXBsYWNlKC9cXEQvZyxcIlwiKT8rbS5yZXBsYWNlKC9cXEQvZyxcIlwiKTo0O2lmKGlzTmFOKGwpKXRocm93IG5ldyBFcnJvcihcIlwiLmNvbmNhdChtWzBdLFwiIGRvZXMgbm90IGhhdmUgYSB2YWxpZCBvY3RhdmVcIikpO2lmKCFuW3NdJiYhZVtzXSl0aHJvdyBuZXcgRXJyb3IoXCJcIi5jb25jYXQocixcIiBpcyBub3QgYSB2YWxpZCBcIikuY29uY2F0KHQpKTtmb3IodmFyIGI9ZnVuY3Rpb24obixlKXt2YXIgbz1bXCJDXCIsXCJEYlwiLFwiRFwiLFwiRWJcIixcIkVcIixcIkZcIixcIkdiXCIsXCJHXCIsXCJBYlwiLFwiQVwiLFwiQmJcIixcIkJcIl0sYT1vLm1hcCgoZnVuY3Rpb24obil7cmV0dXJuIG4rZX0pKSxpPW8ubWFwKChmdW5jdGlvbihuKXtyZXR1cm4gbisoZSsxKX0pKSxyPWEuY29uY2F0KGkpO3JldHVybiByLnNsaWNlKHIuaW5kZXhPZihuK2UpKX0oZCxsKSx1PVtdLHA9MCxoPTAsZj1hP246ZTtwPGZbc10ubGVuZ3RoOylcIjFcIj09PWZbc11bcF0mJnUucHVzaChiW2hdKSxwKyssaCsrO3JldHVybiB1fSxyPWZ1bmN0aW9uKG4pe3ZhciBlLG8sYT1cImI5c3VzXCIscj00O3JldHVybiBuLmluY2x1ZGVzKGEpPyhvPWEsZT1uLnNsaWNlKDAsbi5pbmRleE9mKGEpKSk6KGU9blswXSxvPW4uc2xpY2UoMSksXCJiXCIhPT1uWzFdJiZcIiNcIiE9PW5bMV18fChlKz1uWzFdLG89bi5zbGljZSgyKSkpLG4uaW5jbHVkZXMoXCJfXCIpJiYocj0rbi5zcGxpdChcIl9cIilbMV0sbz1vLnNsaWNlKDAsby5pbmRleE9mKFwiX1wiKSkpLGkoe2Nob3JkOmUrcitcIiBcIitvfSl9LHQ9ZnVuY3Rpb24oKXtyZXR1cm4gT2JqZWN0LmtleXMoZSl9LHM9ZnVuY3Rpb24oKXtyZXR1cm4gT2JqZWN0LmtleXMobil9LG09ZnVuY3Rpb24obil7cmV0dXJuIGkoe2Nob3JkOm59KX0sYz1mdW5jdGlvbihuKXtyZXR1cm4gaSh7c2NhbGU6bn0pfX0pKCk7dmFyIGk9ZXhwb3J0cztmb3IodmFyIHIgaW4gYSlpW3JdPWFbcl07YS5fX2VzTW9kdWxlJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoaSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0pKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYWluLmpzLm1hcCIsICJpbXBvcnQgeyBpbmxpbmVDaG9yZCB9IGZyb20gJ2hhcm1vbmljcyc7XG5cbmV4cG9ydCBjb25zdCBSRV9TRVBBUkFUT1IgPSAvXFx8LztcbmV4cG9ydCBjb25zdCBSRV9QQVRURVJOID0gL14oPzpbeF8tXXxcXFsuKz9cXF0pKyQvO1xuZXhwb3J0IGNvbnN0IFJFX05VTUJFUiA9IC9eKD86XFwuP1xcZCt8XFxkKyg/OlxcLlxcZCspPykkLztcbmV4cG9ydCBjb25zdCBSRV9DSE9SRCA9IC9eW2EtZ0EtR11bXiNcXHNdKlxcZCsoPzpcXC5cXC4pPyQvO1xuZXhwb3J0IGNvbnN0IFJFX05PVEUgPSAvXlthLWdBLUddWyNiXT9cXGQrJC87XG5leHBvcnQgY29uc3QgUkVfTU9ERSA9IC9eKD8hW2l2SVZdezEsM30pW2Etel17Mix9LztcbmV4cG9ydCBjb25zdCBSRV9QUk9HID0gL15baXZJVl17MSwzfVx1MDBCMD8kLztcbmV4cG9ydCBjb25zdCBSRV9UUklNID0gL1xcLiskLztcblxuY29uc3QgQ0FDSEUgPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0KHZhbHVlKSB7XG4gIGxldCBkYXRhID0gW107XG4gIHRyeSB7XG4gICAgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlLnNwbGl0KC8oPz1bXFxkW1xcXXhfLV0pLykpO1xuICAgIGRhdGEgPSBkYXRhLnJlcGxhY2UoLyxcIlxcW1wiLC9nLCAnLCBbJyk7XG4gICAgZGF0YSA9IGRhdGEucmVwbGFjZSgvXCJcXFtcIiwvZywgJ1snKTtcbiAgICBkYXRhID0gZGF0YS5yZXBsYWNlKC8sXCJcXF1cIi9nLCAnXScpO1xuICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gaWdub3JlXG4gIH1cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZXZlbCh2YWx1ZSkge1xuICBpZiAoIUNBQ0hFW3ZhbHVlXSkge1xuICAgIGlmICh2YWx1ZS5pbmNsdWRlcygnJScpKSB7XG4gICAgICBDQUNIRVt2YWx1ZV0gPSAxMjcgKiBwYXJzZUZsb2F0KGAuJHt2YWx1ZX1gKTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlLmluY2x1ZGVzKCcvJykpIHtcbiAgICAgIGNvbnN0IFthLCBiXSA9IHZhbHVlLnNwbGl0KCcvJyk7XG5cbiAgICAgIENBQ0hFW3ZhbHVlXSA9IGEgLyBiO1xuICAgIH0gZWxzZSBpZiAodmFsdWUuaW5jbHVkZXMoJyonKSkge1xuICAgICAgY29uc3QgW2EsIGJdID0gdmFsdWUuc3BsaXQoJyonKTtcblxuICAgICAgQ0FDSEVbdmFsdWVdID0gYSAqIGI7XG4gICAgfSBlbHNlIHtcbiAgICAgIENBQ0hFW3ZhbHVlXSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gQ0FDSEVbdmFsdWVdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGUocmUsIHZhbHVlKSB7XG4gIGlmICghQ0FDSEVbcmUuc291cmNlICsgdmFsdWVdKSB7XG4gICAgQ0FDSEVbcmUuc291cmNlICsgdmFsdWVdID0gcmUudGVzdCh2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIENBQ0hFW3JlLnNvdXJjZSArIHZhbHVlXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvZ3Jlc3Npb24odmFsdWUpIHtcbiAgcmV0dXJuIHZhbGlkYXRlKFJFX1BST0csIHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGF0dGVybih2YWx1ZSkge1xuICByZXR1cm4gdmFsaWRhdGUoUkVfUEFUVEVSTiwgdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgcmV0dXJuIHZhbGlkYXRlKFJFX05VTUJFUiwgdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDaG9yZCh2YWx1ZSkge1xuICByZXR1cm4gdmFsaWRhdGUoUkVfQ0hPUkQsIHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTm90ZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsaWRhdGUoUkVfTk9URSwgdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNNb2RlKHZhbHVlKSB7XG4gIHJldHVybiB2YWxpZGF0ZShSRV9NT0RFLCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUeXBlKHZhbHVlKSB7XG4gIGNvbnN0IGtleSA9IGBUJHt2YWx1ZX1gO1xuICBpZiAoIUNBQ0hFW2tleV0pIHtcbiAgICBpZiAoaXNOb3RlKHZhbHVlKSkgQ0FDSEVba2V5XSA9ICdub3RlJztcbiAgICBlbHNlIGlmIChpc0Nob3JkKHZhbHVlKSkgQ0FDSEVba2V5XSA9ICdjaG9yZCc7XG4gICAgZWxzZSBpZiAoaXNQYXR0ZXJuKHZhbHVlKSkgQ0FDSEVba2V5XSA9ICdwYXR0ZXJuJztcbiAgICBlbHNlIGlmIChpc01vZGUodmFsdWUpKSBDQUNIRVtrZXldID0gJ21vZGUnO1xuICAgIGVsc2UgaWYgKGlzTnVtYmVyKHZhbHVlKSkgQ0FDSEVba2V5XSA9ICdudW1iZXInO1xuICAgIGVsc2UgQ0FDSEVba2V5XSA9ICd2YWx1ZSc7XG4gIH1cbiAgcmV0dXJuIENBQ0hFW2tleV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm0oZXhwcmVzc2lvbikge1xuICBpZiAoIWV4cHJlc3Npb24gfHwgdHlwZW9mIGV4cHJlc3Npb24gIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RpbmcgYSB2YWxpZCBzdHJpbmcsIGdpdmVuICcke2V4cHJlc3Npb259J2ApO1xuICB9XG5cbiAgaWYgKENBQ0hFW2AkJHtleHByZXNzaW9ufWBdKSByZXR1cm4gQ0FDSEVbYCQke2V4cHJlc3Npb259YF07XG5cbiAgY29uc3QgdG9rZW5zID0gZXhwcmVzc2lvbi5zcGxpdCgvXFxzKy8pO1xuXG4gIGlmICghdG9rZW5zLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0aW5nIGEgdmFsaWQgZXhwcmVzc2lvbiwgZ2l2ZW4gJyR7ZXhwcmVzc2lvbn0nYCk7XG4gIH1cblxuICBjb25zdCBhc3QgPSBbXTtcbiAgY29uc3QgY2FycnkgPSBbXTtcblxuICBmdW5jdGlvbiBhZGQodHlwZSwgdmFsdWUpIHtcbiAgICBjb25zdCBpdGVtID0geyB0eXBlLCB2YWx1ZSB9O1xuXG4gICAgaWYgKHR5cGUgPT09ICdudW1iZXInICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGl0ZW0udmFsdWUgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gbGV2ZWwodmFsdWUpIDogdmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09ICdjaG9yZCcgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgaXRlbS52YWx1ZSA9IGlubGluZUNob3JkKHZhbHVlLnJlcGxhY2UoUkVfVFJJTSwgJycpKTtcblxuICAgICAgaWYgKHZhbHVlLmluY2x1ZGVzKCcuLicpKSB7XG4gICAgICAgIGl0ZW0udW5mb2xkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gJ3ZhbHVlJyAmJiB2YWx1ZS5pbmRleE9mKCd4JykgPiAtMSkge1xuICAgICAgY29uc3QgeCA9IHZhbHVlLnNwbGl0KCd4Jyk7XG5cbiAgICAgIGlmICghKGlzTnVtYmVyKHhbMF0pICYmIGlzTnVtYmVyKHhbMV0pKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGluZyB2YWxpZCBudW1iZXJzIGZvciAke3R5cGV9LCBnaXZlbiAnJHt2YWx1ZX0nYCk7XG4gICAgICB9XG5cbiAgICAgIGl0ZW0udmFsdWUgPSBwYXJzZUludCh4WzBdLCAxMCk7XG4gICAgICBpdGVtLnJlcGVhdCA9IHBhcnNlSW50KHhbMV0sIDEwKTtcbiAgICAgIGl0ZW0udHlwZSA9ICdudW1iZXInO1xuICAgIH1cblxuICAgIGFzdC5wdXNoKGl0ZW0pO1xuICB9XG5cbiAgdG9rZW5zLnJlZHVjZSgocHJldiwgY3VyLCBpKSA9PiB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBjb25zdCBuZXh0ID0gdG9rZW5zW2kgKyAxXTtcbiAgICBjb25zdCBsYXN0ID0gYXN0W2FzdC5sZW5ndGggLSAxXSB8fCB7fTtcblxuICAgIGlmIChSRV9TRVBBUkFUT1IudGVzdChjdXIpKSB7XG4gICAgICBhZGQoJ2Nob3JkJywgY3VyLnNwbGl0KFJFX1NFUEFSQVRPUikpO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjdXIgPT09ICdzdHJpbmcnICYmIChcbiAgICAgIChjdXIuaW5jbHVkZXMoJy8nKSAmJiBjdXIuaW5kZXhPZignLycpID4gMClcbiAgICAgIHx8IChjdXIuaW5jbHVkZXMoJyonKSAmJiBjdXIuaW5kZXhPZignKicpID4gMClcbiAgICAgIHx8IChjdXIuaW5jbHVkZXMoJyUnKSAmJiBjdXIuaW5kZXhPZignJScpID4gMClcbiAgICApKSB7XG4gICAgICBhZGQoJ251bWJlcicsIGxldmVsKGN1cikpO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKGN1ci5pbmRleE9mKCclJykgPiAtMSkge1xuICAgICAgaWYgKGN1ciA9PT0gJyUnKSB7XG4gICAgICAgIGlmICghbGFzdC50eXBlKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIGV4cHJlc3Npb24gdG8gcmVwZWF0LCBnaXZlbiAnJHt0b2tlbnMuc2xpY2UoMCwgaSkuam9pbignICcpfSdgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhc3QucmVwZWF0ID0gbGFzdC5yZXBlYXQgfHwgMTtcbiAgICAgICAgbGFzdC5yZXBlYXQgKz0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZCgncGFyYW0nLCBjdXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAoaXNQcm9ncmVzc2lvbihjdXIpKSB7XG4gICAgICBsYXN0LnZhbHVlICs9IGAgJHtjdXJ9YDtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmIChjdXIuY2hhckF0KCkgPT09ICcjJykge1xuICAgICAgYWRkKCdjaGFubmVsJywgY3VyKTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmIChpc05vdGUoY3VyKSB8fCBpc0Nob3JkKGN1cikgfHwgaXNNb2RlKGN1cikgfHwgaXNOdW1iZXIoY3VyKSkge1xuICAgICAgY2FycnkucHVzaChjdXIpO1xuXG4gICAgICBpZiAoXG4gICAgICAgICFuZXh0XG4gICAgICAgIHx8IGNhcnJ5Lmxlbmd0aCA9PT0gM1xuICAgICAgICB8fCAhKGlzTm90ZShuZXh0KSB8fCBpc01vZGUobmV4dCkgfHwgaXNOdW1iZXIobmV4dCkpXG4gICAgICApIHtcbiAgICAgICAgY29uc3Qgb2xkID0gY2Fycnkuc3BsaWNlKDAsIGNhcnJ5Lmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IHRlc3QgPSBvbGRbMF07XG5cbiAgICAgICAgbGV0IG1vZGUgPSBvbGRbMV07XG4gICAgICAgIGxldCBvY3RhdmUgPSBvbGRbMl07XG5cbiAgICAgICAgaWYgKCFvY3RhdmUgJiYgaXNOdW1iZXIobW9kZSkpIHtcbiAgICAgICAgICBvY3RhdmUgPSBtb2RlO1xuICAgICAgICAgIG1vZGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgdGVzdC5sZW5ndGggPCAyXG4gICAgICAgICAgJiYgaXNOb3RlKHRlc3QpXG4gICAgICAgICAgJiYgKGlzTW9kZShtb2RlKSB8fCBpc051bWJlcihvY3RhdmUpKVxuICAgICAgICApIHtcbiAgICAgICAgICBhZGQoJ21vZGUnLCBvbGQuam9pbignICcpKTtcbiAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgfVxuXG4gICAgICAgIG9sZC5mb3JFYWNoKHggPT4ge1xuICAgICAgICAgIGFkZCh4Lmxlbmd0aCA+IDEgfHwgIWlzTm90ZSh4KSA/IGdldFR5cGUoeCkgOiAnbW9kZScsIHgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY3VyID09PSAnc3RyaW5nJyAmJiBjdXIuaW5kZXhPZignLi4nKSA+IC0xKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IGN1ci5zcGxpdCgnLi4nKTtcbiAgICAgIGNvbnN0IG1pbiA9IHBhcnRzWzBdIHx8IDE7XG4gICAgICBjb25zdCBtYXggPSBwYXJ0c1sxXSB8fCBJbmZpbml0eTtcblxuICAgICAgdHlwZSA9ICdzbGljZSc7XG4gICAgICBjdXIgPSBbbWluLCBtYXhdO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY3VyID09PSAnc3RyaW5nJyAmJiAoY3VyLmNoYXJBdCgpID09PSAnLycgfHwgY3VyLmNoYXJBdCgpID09PSAnKicpKSB7XG4gICAgICBjb25zdCBvcGVyYXRvciA9IGN1ci5jaGFyQXQoKSA9PT0gJy8nID8gJ2RpdmlkZScgOiAnbXVsdGlwbHknO1xuICAgICAgY29uc3QgbnVtYmVyID0gY3VyLnN1YnN0cigxKTtcblxuICAgICAgaWYgKCFpc051bWJlcihudW1iZXIpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0aW5nIGEgdmFsaWQgZXhwcmVzc2lvbiB0byAke29wZXJhdG9yfSwgZ2l2ZW4gJyR7dG9rZW5zLnNsaWNlKDAsIGkpLmpvaW4oJyAnKX0gJHtjdXJ9J2ApO1xuICAgICAgfVxuXG4gICAgICBhZGQob3BlcmF0b3IsIHBhcnNlRmxvYXQobnVtYmVyKSk7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAoIXR5cGUgJiYgZ2V0VHlwZShjdXIpID09PSAndmFsdWUnICYmIEFycmF5LmlzQXJyYXkobGFzdC52YWx1ZSkpIHtcbiAgICAgIGxhc3QudmFsdWVbMV0gPSBsYXN0LnZhbHVlWzFdIHx8ICcnO1xuICAgICAgbGFzdC52YWx1ZVsxXSArPSBsYXN0LnZhbHVlWzFdID8gJyAnIDogJyc7XG4gICAgICBsYXN0LnZhbHVlWzFdICs9IGN1cjtcbiAgICAgIHJldHVybiBjdXI7XG4gICAgfVxuXG4gICAgYWRkKHR5cGUgfHwgZ2V0VHlwZShjdXIpLCB0eXBlb2YgY3VyID09PSAnc3RyaW5nJyAmJiBpc051bWJlcihjdXIpID8gcGFyc2VJbnQoY3VyLCAxMCkgOiBjdXIpO1xuICAgIHJldHVybiBjdXI7XG4gIH0sIG51bGwpO1xuXG4gIENBQ0hFW2AkJHtleHByZXNzaW9ufWBdID0gYXN0O1xuICByZXR1cm4gYXN0O1xufVxuIiwgIi8qKlxuICogVGFrZSBhIHN0cmluZyBpbnB1dCBhbmQgY2hlY2sgaWYgaXQgcyBhIG5vdGUgbmFtZSBvciBub3RcbiAqIEBwYXJhbSAge1N0cmluZ30gc3RyIE5vdGUgbmFtZSBlLmcuIGM0XG4gKiBAcmV0dXJuIHtCb29sZWFufSBSZXR1cm4gdHJ1ZSBmb3IgYzQgb3IgcmV0dXJuIGZhbHNlIGZvciBzb21ldGhpbmcgbGlrZSBDTVxuICovXG5leHBvcnQgY29uc3QgaXNOb3RlID0gKHN0cjogc3RyaW5nKTogYm9vbGVhbiA9PlxuICAvXlthLWdBLUddKD86I3xiKT9cXGQkLy50ZXN0KHN0cik7XG5cbi8qKlxuICogVGFrZSBhIFN0cmluZyBpbnB1dCBzdWNoIGFzIHh4eFt4eFt4eF1dXG4gKiBhbmQgcmV0dXJuIGFuIEFycmF5IGFzIFsneCcsICd4JywgJ3gnLCBbJ3gnLCAneCcsIFsneCcsICd4J11dXVxuICogQHBhcmFtICB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5leHBvcnQgY29uc3QgZXhwYW5kU3RyID0gKHN0cjogc3RyaW5nKTogYW55ID0+IHtcbiAgc3RyID0gSlNPTi5zdHJpbmdpZnkoc3RyLnNwbGl0KCcnKSk7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKC8sXCJcXFtcIiwvZywgJywgWycpO1xuICBzdHIgPSBzdHIucmVwbGFjZSgvXCJcXFtcIiwvZywgJ1snKTtcbiAgc3RyID0gc3RyLnJlcGxhY2UoLyxcIlxcXVwiL2csICddJyk7XG4gIHJldHVybiBKU09OLnBhcnNlKHN0cik7XG59O1xuXG4vKipcbiAqIEJhc2ljIEFycmF5IHJhbmRvbWl6ZXJcbiAqIEBwYXJhbSAge0FycmF5fSBhcnJcbiAqIEBwYXJhbSAge2Jvb2xlYW59IGZ1bGxTaHVmZmxlIEVuc3VyZSBubyBlbGVtZW50cyByZW1haW4gaW4gb2xkIHBsYWNlXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuZXhwb3J0IGNvbnN0IHNodWZmbGUgPSAoYXJyOiBhbnlbXSwgZnVsbFNodWZmbGU6IGJvb2xlYW4gPSB0cnVlKTogc3RyaW5nW10gPT4ge1xuICBjb25zdCBsYXN0SW5kZXg6IG51bWJlciA9IGFyci5sZW5ndGggLSAxO1xuXG4gIC8vIFNodWZmbGUgYWxnb3JpdGhtIGJ5IFJpY2hhcmQgRHVyc3RlbmZlbGQgKERvbmFsZCBFLiBLbnV0aCksIGFsc28gUm9uYWxkIEZpc2hlciBhbmQgRnJhbmsgWWF0ZXMuXG4gIC8vIFwiRnVsbCBTaHVmZmxlXCIgTW9kaWZpY2F0aW9uIHRvIGVuc3VyZSBubyBlbGVtZW50cyByZW1haW4gaW4gdGhlaXIgb3JpZ2luYWwgcGxhY2UgKGJ5IHRha2luZyBlYWNoIGVsZW1lbnQgb25jZVxuICAvLyBhbmQgc3dhcHBpbmcgd2l0aCBhbnkgcmVtYWluaW5nIGVsZW1lbnRzKVxuICBhcnIuZm9yRWFjaCgoZWwsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgaWYgKGlkeCA+PSBsYXN0SW5kZXgpIHtcbiAgICAgIC8vIE5vIHNodWZmbGluZyBsYXN0IGVsZW1lbnRcbiAgICAgIC8vIE9uZSBiZWZvcmUgbGFzdCBpcyBhbHdheXMgc3dhcHBlZCB3aXRoIGxhc3QgYXQgdGhlIGVuZCBvZiB0aGUgbG9vcFxuICAgICAgLy8gU2luY2UgcHJldmlvdXMgc3dhcHMgY2FuIG1vdmUgbGFzdCBlbGVtZW50IGludG8gb3RoZXIgcGxhY2VzLCB0aGVyZSBpcyBzdGlsbCBhIHJhbmRvbSBzaHVmZmxlIG9mIGxhc3QgZWxlbWVudFxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBTd2FwIGVsIHdpdGggb25lIG9mIHRoZSBoaWdoZXIgZWxlbWVudHMgcmFuZG9tbHlcbiAgICBsZXQgcm5kO1xuICAgIHJuZCA9IGZ1bGxTaHVmZmxlXG4gICAgICA/IC8vIFBpY2sgcmFuZG9tIG51bWJlciBmcm9tIGlkeCsxIHRvIGxhc3RJbmRleCAoTW9kaWZpZWQgYWxnb3JpdGhtLCAoTi0xKSEgY29tYmluYXRpb25zKVxuICAgICAgICAvLyBNYXRoLnJhbmRvbSAtPiBbMCwgMSkgLT4gWzAsIGxhc3RJbmRleC1pZHggKSAtLWZsb29yLT4gWzAsIGxhc3RJbmRleC1pZHgtMV1cbiAgICAgICAgLy8gcm5kID0gWzAsIGxhc3RJbmRleC1pZHgtMV0gKyAxICsgaWR4ID0gWzEgKyBpZHgsIGxhc3RJbmRleF1cbiAgICAgICAgLy8gKE9yaWdpbmFsIGFsZ29yaXRobSB3b3VsZCBwaWNrIHJuZCA9IFtpZHgsIGxhc3RJbmRleF0sIHRodXMgYW55IGVsZW1lbnQgY291bGQgYXJyaXZlIGJhY2sgaW50byBpdHMgc2xvdClcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGxhc3RJbmRleCAtIGlkeCkpICsgMSArIGlkeFxuICAgICAgOiAvLyBQaWNrIHJhbmRvbSBudW1iZXIgZnJvbSBpZHggdG8gbGFzdEluZGV4IChVbm1vZGlmaWVkIFJpY2hhcmQgRHVyc3RlbmZlbGQsIE4hIGNvbWJpbmF0aW9ucylcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGxhc3RJbmRleCArIDEgLSBpZHgpKSArIGlkeDtcbiAgICBhcnJbaWR4XSA9IGFycltybmRdO1xuICAgIGFycltybmRdID0gZWw7XG4gIH0pO1xuXG4gIHJldHVybiBhcnI7XG59O1xuXG4vKipcbiAqIFJldHVybiBhbiBhcnJheSBvZiBudW1iZXJzIHJlbGF0aXZlIHRvIG1heExldmVsIHx8IDEyNyBvcmRlcmVkIGluIGEgU2luZSB3YXZlIGZvcm1hdFxuICogVGhpcyBpcyB1c2VkIGJ5IHRoZSBgc2l6emxlYCBwYXJhbSBvZiB0aGUgYGNsaXBgIG1ldGhvZCB0byBhZGQgYSBydWRpbWVudGFyeSB2YXJpYXRpb24gdG8gdGhlIGFjY2VudCBvZiBlYWNoIG5vdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBtYXhMZXZlbCBBIG51bWJlciBiZXR3ZWVuIG5vdCBtb3JlIHRoYW4gMTI3XG4gKiBAcmV0dXJuIHtBcnJheX0gIEV4YW1wbGUgb3V0cHV0IFs2MywgOTAsIDExMCwgMTI3LCAxMTAsIDkwLCA2MywgMCwgNjMsIDkwLCAxMTAsIDEyNywgMTEwLCA5MCwgNjMsIDBdXG4gKi9cbmV4cG9ydCBjb25zdCBzaXp6bGVNYXAgPSAobWF4TGV2ZWw6IG51bWJlciA9IDEyNyk6IG51bWJlcltdID0+IHtcbiAgY29uc3QgcGkgPSBNYXRoLlBJO1xuICBjb25zdCBwaUFycjogbnVtYmVyW10gPSBbXG4gICAgcGkgLyA2LFxuICAgIHBpIC8gNCxcbiAgICBwaSAvIDMsXG4gICAgcGkgLyAyLFxuICAgICgyICogcGkpIC8gMyxcbiAgICAoMyAqIHBpKSAvIDQsXG4gICAgKDUgKiBwaSkgLyA2LFxuICAgIHBpLFxuICBdO1xuICBjb25zdCBwaUFyclJldjogbnVtYmVyW10gPSBbXG4gICAgMCxcbiAgICBwaSAvIDYsXG4gICAgcGkgLyA0LFxuICAgIHBpIC8gMyxcbiAgICBwaSAvIDIsXG4gICAgKDIgKiBwaSkgLyAzLFxuICAgICgzICogcGkpIC8gNCxcbiAgICAoNSAqIHBpKSAvIDYsXG4gIF07XG4gIHBpQXJyUmV2LnJldmVyc2UoKTtcbiAgY29uc3QgYXJyOiBudW1iZXJbXSA9IHBpQXJyLmNvbmNhdChwaUFyclJldik7XG4gIHJldHVybiBhcnIubWFwKGVsZW1lbnQgPT4gTWF0aC5yb3VuZChNYXRoLnNpbihlbGVtZW50KSAqIG1heExldmVsKSk7XG59O1xuXG4vKipcbiAqIFBpY2sgb25lIGl0ZW0gcmFuZG9tbHkgZnJvbSBhbiBhcnJheSBhbmQgcmV0dXJuIGl0XG4gKiBAcGFyYW0gYXJyXG4gKi9cbmV4cG9ydCBjb25zdCBwaWNrT25lID0gKGFycjogYW55W10pID0+XG4gIGFyci5sZW5ndGggPiAxID8gYXJyW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSldIDogYXJyWzBdO1xuXG4vKipcbiAqIEJvb2xlYW4gZ2VuZXJhdG9yXG4gKi9cbmV4cG9ydCBjb25zdCBkaWNlID0gKCkgPT4gISFNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuXG4vKipcbiAqIFBvbHlmaWxsIGZvciBBcnJheS5wcm90b3R5cGUuZmxhdFxuICovXG5leHBvcnQgY29uc3QgZmxhdCA9IChhcnI6IGFueVtdW10pID0+XG4gIGFyci5yZWR1Y2UoKGFjYywgdmFsKSA9PiBhY2MuY29uY2F0KHZhbCksIFtdKTtcbiIsICJpbXBvcnQgeyBzY2FsZSB9IGZyb20gJ2hhcm1vbmljcyc7XG5pbXBvcnQgeyBwaWNrT25lLCBkaWNlIH0gZnJvbSAnLi91dGlscyc7XG5cbi8qKlxuICogR2V0IHRoZSBjaG9yZHMgdGhhdCBnbyB3aXRoIGEgZ2l2ZW4gc2NhbGUvbW9kZVxuICogVGhpcyBpcyB1c2VmdWwgb25seSBpbiBjYXNlIHlvdSB3YW50IHRvIGNoZWNrIHdoYXQgY2hvcmRzIHdvcmsgd2l0aCBhIHNjYWxlL21vZGVcbiAqIHNvIHRoYXQgeW91IGNhbiBjb21lIHVwIHdpdGggY2hvcmQgcHJvZ3Jlc3Npb25zXG4gKiBAcGFyYW0gIHtTdHJpbmd9IG1vZGUgZS5nLiBtYWpvclxuICogQHJldHVybiB7QXJyYXl9IGUuZy5bJ0knLCAnaWknLCAnaWlpJywgJ0lWJywgJ1YnLCAndmknLCAndmlpXHUwMEIwJ11cbiAqL1xuZXhwb3J0IGNvbnN0IGdldENob3JkRGVncmVlcyA9IChtb2RlOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgdGhlUm9tYW5zOiBOVlA8c3RyaW5nW10+ID0ge1xuICAgIGlvbmlhbjogWydJJywgJ2lpJywgJ2lpaScsICdJVicsICdWJywgJ3ZpJywgJ3ZpaVx1MDBCMCddLFxuICAgIGRvcmlhbjogWydpJywgJ2lpJywgJ0lJSScsICdJVicsICd2JywgJ3ZpXHUwMEIwJywgJ1ZJSSddLFxuICAgIHBocnlnaWFuOiBbJ2knLCAnSUknLCAnSUlJJywgJ2l2JywgJ3ZcdTAwQjAnLCAnVkknLCAndmlpJ10sXG4gICAgbHlkaWFuOiBbJ0knLCAnSUknLCAnaWlpJywgJ2l2XHUwMEIwJywgJ1YnLCAndmknLCAndmlpJ10sXG4gICAgbWl4b2x5ZGlhbjogWydJJywgJ2lpJywgJ2lpaVx1MDBCMCcsICdJVicsICd2JywgJ3ZpJywgJ1ZJSSddLFxuICAgIGFlb2xpYW46IFsnaScsICdpaVx1MDBCMCcsICdJSUknLCAnaXYnLCAndicsICdWSScsICdWSUknXSxcbiAgICBsb2NyaWFuOiBbJ2lcdTAwQjAnLCAnSUknLCAnaWlpJywgJ2l2JywgJ1YnLCAnVkknLCAndmlpJ10sXG4gICAgJ21lbG9kaWMgbWlub3InOiBbJ2knLCAnaWknLCAnSUlJKycsICdJVicsICdWJywgJ3ZpXHUwMEIwJywgJ3ZpaVx1MDBCMCddLFxuICAgICdoYXJtb25pYyBtaW5vcic6IFsnaScsICdpaVx1MDBCMCcsICdJSUkrJywgJ2l2JywgJ1YnLCAnVkknLCAndmlpXHUwMEIwJ10sXG4gIH07XG4gIHRoZVJvbWFucy5tYWpvciA9IHRoZVJvbWFucy5pb25pYW47XG4gIHRoZVJvbWFucy5taW5vciA9IHRoZVJvbWFucy5hZW9saWFuO1xuXG4gIHJldHVybiB0aGVSb21hbnNbbW9kZV0gfHwgW107XG59O1xuXG5jb25zdCBpZHhCeURlZ3JlZTogTlZQPG51bWJlcj4gPSB7XG4gIGk6IDAsXG4gIGlpOiAxLFxuICBpaWk6IDIsXG4gIGl2OiAzLFxuICB2OiA0LFxuICB2aTogNSxcbiAgdmlpOiA2LFxufTtcblxuLyoqXG4gKiBHZXQgYSBjaG9yZCBuYW1lIGZyb20gZGVncmVlXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHJvbWFuIGUuZy4gaWkgT1IgaWlcdTAwQjAgT1IgVjdcbiAqIEByZXR1cm4ge1N0cmluZ30gZS5nLiBtIE9SIG03YjUgT1IgTWFqN1xuICovXG5jb25zdCBnZXRDaG9yZE5hbWUgPSAocm9tYW46IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIC8vIHJlbW92ZSBhbnkgbm9uIGNoYXJhY3RlclxuICBjb25zdCBzdHIgPSByb21hbi5yZXBsYWNlKC9cXFcvZywgJycpO1xuICBsZXQgcHJlZml4ID0gJ00nO1xuICAvLyBjaGVjayBpZiBpdCBzIGxvd2VyY2FzZVxuICBpZiAoc3RyLnRvTG93ZXJDYXNlKCkgPT09IHN0cikge1xuICAgIHByZWZpeCA9ICdtJztcbiAgfVxuICBpZiAocm9tYW4uaW5kZXhPZignXHUwMEIwJykgPiAtMSkge1xuICAgIHJldHVybiBwcmVmaXggKyAnN2I1JztcbiAgfVxuICBpZiAocm9tYW4uaW5kZXhPZignKycpID4gLTEpIHtcbiAgICByZXR1cm4gcHJlZml4ICsgJyM1JztcbiAgfVxuXG4gIGlmIChyb21hbi5pbmRleE9mKCc3JykgPiAtMSkge1xuICAgIHJldHVybiBwcmVmaXggPT09ICdNJyA/ICdtYWo3JyA6ICdtNyc7XG4gIH1cblxuICByZXR1cm4gcHJlZml4O1xufTtcblxuLyoqXG4gKiBUYWtlIHRoZSBzcGVjaWZpZWQgc2NhbGUgYW5kIGRlZ3JlZXMgYW5kIHJldHVybiB0aGUgY2hvcmQgbmFtZXMgZm9yIHRoZW1cbiAqIFRoZXNlIGNhbiBiZSB1c2VkIGFzIHRoZSB2YWx1ZSBmb3IgdGhlIGBub3Rlc2AgcGFyYW0gb2YgdGhlIGBjbGlwYCBtZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfSBub3RlT2N0YXZlU2NhbGUgZS5nLiAnQzQgbWFqb3InXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGNob3JkRGVncmVzcyBlLmcuICdJIElWIFYgSVYnXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGUuZy4gJ0NNIEZNIEdNIEZNJ1xuICovXG5leHBvcnQgY29uc3QgZ2V0Q2hvcmRzQnlQcm9ncmVzc2lvbiA9IChcbiAgbm90ZU9jdGF2ZVNjYWxlOiBzdHJpbmcsXG4gIGNob3JkRGVncmVzczogc3RyaW5nXG4pOiBzdHJpbmcgPT4ge1xuICAvLyBTZXQgdGhlIG9jdGF2ZSBpZiBtaXNzaW5nXG4gIC8vIEZvciBleGFtcGxlIGlmIHRoZSBtZXRob2Qgd2FzIGNhbGxlZCB3aXRoIGBDIG1ham9yYCBpbnN0ZWFkIG9mIGBDNCBtYWpvcmAsIHRoZW4gYWRkIHRoZSA0XG4gIGNvbnN0IG5vdGVPY3RhdmVTY2FsZUFyciA9IG5vdGVPY3RhdmVTY2FsZS5zcGxpdCgnICcpO1xuICBpZiAoIW5vdGVPY3RhdmVTY2FsZUFyclswXS5tYXRjaCgvXFxkLykpIHtcbiAgICBub3RlT2N0YXZlU2NhbGVBcnJbMF0gKz0gJzQnO1xuICAgIG5vdGVPY3RhdmVTY2FsZSA9IG5vdGVPY3RhdmVTY2FsZUFyci5qb2luKCcgJyk7XG4gIH1cblxuICAvLyBHZXQgdGhlIHNjYWxlIGZyb20gdGhlIGdpdmVuIG5vdGUgYW5kIHNjYWxlL21vZGUgY29tYmluYXRpb25cbiAgY29uc3QgbW9kZSA9IHNjYWxlKG5vdGVPY3RhdmVTY2FsZSk7XG4gIGNvbnN0IGNob3JkRGVncmVlc0FyciA9IGNob3JkRGVncmVzcy5yZXBsYWNlKC9cXHMqLCtcXHMqL2csICcgJykuc3BsaXQoJyAnKTtcbiAgLy8gTm93IHdlIGhhdmUgc29tZXRoaW5nIGxpa2UgWydpJywgJ2lpJywgJ0lWJ11cbiAgLy8gQ29udmVydCBpdCB0byBhIGNob3JkIGZhbWlseSBzdWNoIGFzIFsnQ20nLCAnRG0nLCAnRk0nXVxuICBjb25zdCBjaG9yZEZhbWlseSA9IGNob3JkRGVncmVlc0Fyci5tYXAoKHJvbWFuLCBpZHgpID0+IHtcbiAgICBjb25zdCBjaG9yZE5hbWUgPSBnZXRDaG9yZE5hbWUocm9tYW4pOyAvLyBlLmcuIG1cbiAgICAvLyBnZXQgdGhlIGluZGV4IHRvIGJlIHVzZWQgYnkgcmVtb3ZpbmcgYW55IGRpZ2l0IG9yIG5vbiBhbHBoYWJldCBjaGFyYWN0ZXJcbiAgICBjb25zdCBzY2FsZUlkID0gaWR4QnlEZWdyZWVbcm9tYW4ucmVwbGFjZSgvXFxXfFxcZC9nLCAnJykudG9Mb3dlckNhc2UoKV07IC8vIGUuZy4gMFxuICAgIC8vIGdldCB0aGUgbm90ZSBpdHNlbGZcbiAgICBjb25zdCBub3RlID0gbW9kZVtzY2FsZUlkXTsgLy8gZS5nLiBDXG4gICAgLy8gZ2V0IHRoZSBvY3RhdmUgb2YgdGhlIG5vdGU7XG4gICAgY29uc3Qgb2N0ID0gbm90ZS5yZXBsYWNlKC9cXEQrLywgJycpOyAvLyBlLmcuIDRcbiAgICAvLyBub3cgZ2V0IHRoZSBjaG9yZFxuICAgIHJldHVybiBub3RlLnJlcGxhY2UoL1xcZC8sICcnKSArIGNob3JkTmFtZSArICdfJyArIG9jdDtcbiAgfSk7XG5cbiAgcmV0dXJuIGNob3JkRmFtaWx5LnRvU3RyaW5nKCkucmVwbGFjZSgvLC9nLCAnICcpO1xufTtcblxuY29uc3QgZ2V0UHJvZ0ZhY3RvcnkgPSAoeyBULCBQLCBEIH06IFRQRCkgPT4ge1xuICByZXR1cm4gKGNvdW50OiBudW1iZXIgPSA0KSA9PiB7XG4gICAgY29uc3QgY2hvcmRzID0gW107XG5cbiAgICAvLyBQdXNoIHJvb3QvdG9uaWNcbiAgICBjaG9yZHMucHVzaChwaWNrT25lKFQpKTtcblxuICAgIGxldCBpID0gMTtcblxuICAgIC8vIFBpY2sgYSBwcmVkb21pbmFudFxuICAgIGlmIChpIDwgY291bnQgLSAxKSB7XG4gICAgICBjaG9yZHMucHVzaChwaWNrT25lKFApKTtcbiAgICAgIGkrKztcbiAgICB9XG5cbiAgICAvLyBUcnkgYW5vdGhlciBwcmVkb21pbmFudFxuICAgIGlmIChpIDwgY291bnQgLSAxICYmIGRpY2UoKSkge1xuICAgICAgY2hvcmRzLnB1c2gocGlja09uZShQKSk7XG4gICAgICBpKys7XG4gICAgfVxuXG4gICAgLy8vLy8vLy8vIDQgb3IgbW9yZS8vLy8vLy8vLy9cbiAgICBpZiAoaSA8IGNvdW50IC0gMSkge1xuICAgICAgLy8gUGljayBhIGRvbWluYW50XG4gICAgICBjaG9yZHMucHVzaChwaWNrT25lKEQpKTtcbiAgICAgIGkrKztcbiAgICB9XG5cbiAgICBpZiAoaSA8IGNvdW50IC0gMSkge1xuICAgICAgLy8gUGljayBhIHByZWRvbWluYW50XG4gICAgICBjaG9yZHMucHVzaChwaWNrT25lKFApKTtcbiAgICAgIGkrKztcbiAgICB9XG5cbiAgICBpZiAoaSA8IGNvdW50IC0gMSkge1xuICAgICAgLy8gUGljayBhIGRvbWluYW50XG4gICAgICBjaG9yZHMucHVzaChwaWNrT25lKEQpKTtcbiAgICAgIGkrKztcbiAgICB9XG5cbiAgICAvLyBQaWNrIGEgcHJlZG9taW5hbnQgaWYgcG9zc2libGVcbiAgICBpZiAoaSA8IGNvdW50IC0gMSAmJiBkaWNlKCkpIHtcbiAgICAgIGNob3Jkcy5wdXNoKHBpY2tPbmUoUCkpO1xuICAgICAgaSsrO1xuICAgIH1cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICAvLyBGaWxsIHRoZSByZXN0IHdpdGggZG9taW5hbnRcbiAgICB3aGlsZSAoaSA8IGNvdW50KSB7XG4gICAgICBjaG9yZHMucHVzaChwaWNrT25lKEQpKTtcbiAgICAgIGkrKztcbiAgICB9XG5cbiAgICByZXR1cm4gY2hvcmRzO1xuICB9O1xufTtcblxuY29uc3QgTSA9IGdldFByb2dGYWN0b3J5KHsgVDogWydJJywgJ3ZpJ10sIFA6IFsnaWknLCAnSVYnXSwgRDogWydWJ10gfSk7XG5jb25zdCBtID0gZ2V0UHJvZ0ZhY3RvcnkoeyBUOiBbJ2knLCAnVkknXSwgUDogWydpaScsICdpdiddLCBEOiBbJ1YnXSB9KTtcblxuLyoqXG4gKiBHZW5lcmF0ZSBhIGNob3JkIHByb2dyZXNzaW9uIGJhc2VkIG9uIGJhc2ljIG11c2ljIHRoZW9yeVxuICogd2hlcmUgd2UgZm9sbG93IHRvbmljIHRvIG9wdGlvbmFsbHkgcHJlZG9taW5hbnQgYW5kIHRoZW4gZG9taW5hbnRcbiAqIGFuZCB0aGVuIHJhbmRvbWx5IHRvIHByZWRvbWluYW50IGFuZCBjb250aW51ZSB0aGlzIHRpbGwgd2UgcmVhY2ggYGNvdW50YFxuICogQHBhcmFtIHNjYWxlVHlwZSBlLmcuIE0gKGZvciBtYWpvciBjaG9yZCBwcm9ncmVzc2lvbiksIG0gKGZvciBtaW5vciBjaG9yZCBwcm9ncmVzc2lvbilcbiAqIEBwYXJhbSBjb3VudCBlLmcuIDRcbiAqL1xuZXhwb3J0IGNvbnN0IHByb2dyZXNzaW9uID0gKHNjYWxlVHlwZTogcHJvZ3Jlc3Npb25TY2FsZSwgY291bnQ6IG51bWJlciA9IDQpID0+IHtcbiAgaWYgKHNjYWxlVHlwZSA9PT0gJ21ham9yJyB8fCBzY2FsZVR5cGUgPT09ICdNJykge1xuICAgIHJldHVybiBNKGNvdW50KTtcbiAgfVxuXG4gIGlmIChzY2FsZVR5cGUgPT09ICdtaW5vcicgfHwgc2NhbGVUeXBlID09PSAnbScpIHtcbiAgICByZXR1cm4gbShjb3VudCk7XG4gIH1cbn07XG4iLCAiaW1wb3J0IHsgZ2V0Q2hvcmRzQnlQcm9ncmVzc2lvbiB9IGZyb20gJ3NjcmliYmxldHVuZS9zcmMvcHJvZ3Jlc3Npb24nO1xuaW1wb3J0IHsgc2NhbGUsIGlubGluZUNob3JkIH0gZnJvbSAnaGFybW9uaWNzJztcblxuaW1wb3J0IHsgaXNQcm9ncmVzc2lvbiwgdHJhbnNmb3JtIH0gZnJvbSAnLi90b2tlbml6ZSc7XG5pbXBvcnQgeyByZXBlYXQsIGNsb25lIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2UoaW5wdXQsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShpbnB1dCkpIHJldHVybiBpbnB1dDtcblxuICBjb25zdCBmbiA9IHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyA/IGNhbGxiYWNrIDogKHYgPT4gdik7XG5cbiAgbGV0IHNraXA7XG4gIHJldHVybiBpbnB1dC5yZWR1Y2UoKHByZXYsIGN1ciwgaSkgPT4ge1xuICAgIGNvbnN0IGxhc3QgPSBwcmV2W3ByZXYubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgbmV4dCA9IGlucHV0W2kgKyAxXSB8fCB7fTtcbiAgICBjb25zdCBvbGQgPSBpbnB1dFtpIC0gMV0gfHwge307XG5cbiAgICBpZiAoc2tpcCkge1xuICAgICAgc2tpcCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY3VyKSkge1xuICAgICAgcHJldi5wdXNoKC4uLmN1cik7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBpZiAoY3VyLnR5cGUgPT09ICd2YWx1ZScgJiYgY3VyLnZhbHVlID09PSAnLicpIHtcbiAgICAgIGlmIChwcmV2Lmxlbmd0aCA+IDApIHByZXYucHVzaChwcmV2WzBdKTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIGlmIChvbGQudHlwZSA9PT0gJ3BhdHRlcm4nICYmIGN1ci50eXBlID09PSAncGF0dGVybicpIHtcbiAgICAgIHByZXZbcHJldi5sZW5ndGggLSAxXSArPSBjdXIudmFsdWU7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGN1ci50eXBlKSB7XG4gICAgICBjYXNlICdwYXR0ZXJuJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdub3RlJzpcbiAgICAgICAgaWYgKGN1ci5yZXBlYXQpIHByZXYucHVzaCguLi5yZXBlYXQoY3VyLnZhbHVlLCBjdXIucmVwZWF0KSk7XG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY3VyLnZhbHVlKSkgcHJldi5wdXNoKC4uLmN1ci52YWx1ZSk7XG4gICAgICAgIGVsc2UgcHJldi5wdXNoKGN1ci52YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdjaG9yZCc6XG4gICAgICAgIGlmIChjdXIucmVwZWF0KSBwcmV2LnB1c2goLi4ucmVwZWF0KGN1ci52YWx1ZSwgY3VyLnJlcGVhdCkpO1xuICAgICAgICBlbHNlIGlmIChjdXIudW5mb2xkKSBwcmV2LnB1c2goLi4uY3VyLnZhbHVlKTtcbiAgICAgICAgZWxzZSBwcmV2LnB1c2goY3VyLnZhbHVlKTtcblxuICAgICAgICBpZiAoY3VyLnR5cGUgIT09ICdjaG9yZCcpIHtcbiAgICAgICAgICBza2lwID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZGl2aWRlJzpcbiAgICAgICAgcHJldltwcmV2Lmxlbmd0aCAtIDFdIC89IGN1ci52YWx1ZTtcbiAgICAgICAgcmV0dXJuIHByZXY7XG5cbiAgICAgIGNhc2UgJ211bHRpcGx5JzpcbiAgICAgICAgcHJldi5wdXNoKC4uLnJlcGVhdChsYXN0LCBjdXIudmFsdWUgLSAxKSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdzbGljZSc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGxhc3QpKSB7XG4gICAgICAgICAgcHJldltwcmV2Lmxlbmd0aCAtIDFdID0gbGFzdC5zbGljZShjdXIudmFsdWVbMF0gLSAxLCBjdXIudmFsdWVbMV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByZXYucHVzaChjdXIudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdtb2RlJzpcbiAgICAgICAgcHJldltwcmV2Lmxlbmd0aCAtIDFdID0gYCR7bGFzdH0gJHtjdXIudmFsdWV9YDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3BhcmFtJzpcbiAgICAgIGNhc2UgJ3ZhbHVlJzoge1xuICAgICAgICBsZXQgdmFsdWUgPSBudWxsO1xuICAgICAgICBpZiAodHlwZW9mIGNvbnRleHRbY3VyLnZhbHVlXSAhPT0gJ3VuZGVmaW5lZCcpIHZhbHVlID0gY29udGV4dFtjdXIudmFsdWVdO1xuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgZXhwcmVzc2lvbiBmb3IgJyR7Y3VyLnZhbHVlfSdgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZVswXSAmJiB2YWx1ZVswXS50eXBlKSB7XG4gICAgICAgICAgdmFsdWUgPSByZWR1Y2UodmFsdWUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGN1ci5yZXBlYXQpIHtcbiAgICAgICAgICAgIHByZXYucHVzaCguLi5yZXBlYXQodmFsdWUsIGN1ci5yZXBlYXQpLnJlZHVjZSgoX3ByZXYsIF9jdXIpID0+IHtcbiAgICAgICAgICAgICAgX3ByZXYucHVzaCguLi5fY3VyKTtcbiAgICAgICAgICAgICAgcmV0dXJuIF9wcmV2O1xuICAgICAgICAgICAgfSwgW10pKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJldi5wdXNoKC4uLnZhbHVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbHVlID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV07XG4gICAgICAgIGlmIChjdXIucmVwZWF0KSBwcmV2LnB1c2goLi4ucmVwZWF0KHZhbHVlLCBjdXIucmVwZWF0KSk7XG4gICAgICAgIGVsc2UgcHJldi5wdXNoKC4uLnZhbHVlKTtcbiAgICAgIH0gYnJlYWs7XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5oYW5kbGVkICcke2N1ci50eXBlfSdgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJldjtcbiAgfSwgW10pLnJlZHVjZSgobWVtbywgaXRlbSkgPT4ge1xuICAgIGNvbnN0IHByZXYgPSBtZW1vW21lbW8ubGVuZ3RoIC0gMV07XG5cbiAgICBpZiAoXG4gICAgICBBcnJheS5pc0FycmF5KHByZXYpXG4gICAgICAmJiBBcnJheS5pc0FycmF5KGl0ZW0pXG4gICAgICAmJiB0eXBlb2YgaXRlbVswXSA9PT0gJ251bWJlcidcbiAgICAgICYmIGl0ZW0ubGVuZ3RoID09PSAyXG4gICAgKSB7XG4gICAgICBjb25zdCBvZmZzZXQgPSBpdGVtWzFdID09PSBJbmZpbml0eSA/IHByZXYubGVuZ3RoIDogaXRlbVsxXTtcbiAgICAgIGNvbnN0IFtiYXNlLCBsZW5ndGhdID0gU3RyaW5nKG9mZnNldCkuc3BsaXQoL1xcRC8pO1xuXG4gICAgICBtZW1vLnBvcCgpO1xuICAgICAgbWVtby5wdXNoKC4uLnByZXYuc2xpY2UoaXRlbVswXSAtIDEsIGJhc2UpKTtcblxuICAgICAgaWYgKFN0cmluZyhvZmZzZXQpLmluY2x1ZGVzKCc+JykpIHtcbiAgICAgICAgY29uc3QgcGFydHMgPSBtZW1vLnNsaWNlKC1sZW5ndGggLSAxKTtcblxuICAgICAgICBwYXJ0cy5wb3AoKTtcbiAgICAgICAgcGFydHMucmV2ZXJzZSgpO1xuICAgICAgICBtZW1vLnB1c2goLi4ucGFydHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1lbW87XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJyAmJiBpdGVtLmluY2x1ZGVzKCcgJykpIHtcbiAgICAgIGNvbnN0IGNodW5rcyA9IGl0ZW0uc3BsaXQoJyAnKTtcblxuICAgICAgaWYgKGNodW5rcy5zb21lKGlzUHJvZ3Jlc3Npb24pKSB7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IGNodW5rcy5maW5kSW5kZXgoaXNQcm9ncmVzc2lvbik7XG4gICAgICAgIGNvbnN0IFthLCBiXSA9IFtjaHVua3Muc2xpY2UoMCwgb2Zmc2V0KSwgY2h1bmtzLnNsaWNlKG9mZnNldCldO1xuXG4gICAgICAgIG1lbW8ucHVzaChnZXRDaG9yZHNCeVByb2dyZXNzaW9uKGEuam9pbignICcpLCBiLmpvaW4oJyAnKSkuc3BsaXQoJyAnKS5tYXAoeCA9PiBmbihpbmxpbmVDaG9yZCh4KSkpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lbW8ucHVzaChmbihzY2FsZShpdGVtKSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtZW1vLnB1c2goZm4oaXRlbSkpO1xuICAgIH1cbiAgICByZXR1cm4gbWVtbztcbiAgfSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2UoYnVmZmVyKSB7XG4gIGNvbnN0IHRyYWNrcyA9IHt9O1xuICBjb25zdCBtYWluID0gW107XG4gIGNvbnN0IGRhdGEgPSB7fTtcblxuICBsZXQgY2hhbm5lbCA9IG51bGw7XG4gIGxldCBwcmVmaXggPSAnJztcbiAgbGV0IHRyYWNrO1xuICBsZXQgaW5mbyA9IHt9O1xuICBidWZmZXIuc3BsaXQoL1xccj9cXG4vZykuZm9yRWFjaCgobGluZSwgbnRoKSA9PiB7XG4gICAgbGluZSA9IGxpbmUucmVwbGFjZSgvOy4rPyQvLCAnJykudHJpbSgpO1xuICAgIGlmICghbGluZSkgcmV0dXJuO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlmIChsaW5lLmNoYXJBdCgpID09PSAnJScpIHtcbiAgICAgICAgY29uc3QgW25hbWUsIC4uLnZhbHVlXSA9IGxpbmUuc3BsaXQoL1xccysvKTtcblxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGRhdGFbbmFtZV0gPSB0cmFuc2Zvcm0odmFsdWUuam9pbignICcpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChsaW5lLmluZGV4T2YoJyMgJykgPj0gMCkge1xuICAgICAgICBpZiAodHJhY2spIHtcbiAgICAgICAgICB0cmFja3NbdHJhY2tdID0gaW5mbztcbiAgICAgICAgICBjaGFubmVsID0gbnVsbDtcbiAgICAgICAgICBwcmVmaXggPSAnJztcbiAgICAgICAgICBpbmZvID0ge307XG4gICAgICAgIH1cblxuICAgICAgICB0cmFjayA9IGxpbmUuc3BsaXQoL1xccysvKS5zbGljZSgxKS5qb2luKCcgJyk7XG4gICAgICB9IGVsc2UgaWYgKGxpbmUuY2hhckF0KCkgPT09ICc+Jykge1xuICAgICAgICBtYWluLnB1c2godHJhbnNmb3JtKGxpbmUuc3Vic3RyKDEpLnRyaW0oKSkpO1xuICAgICAgfSBlbHNlIGlmIChsaW5lLmNoYXJBdCgpID09PSAnQCcpIHtcbiAgICAgICAgY29uc3QgW25hbWUsIC4uLmV4dGVuZF0gPSBsaW5lLnN1YnN0cigxKS5zcGxpdCgnICcpO1xuXG4gICAgICAgIGlmIChleHRlbmRbMF0gPT09ICc8Jykge1xuICAgICAgICAgIGNvbnN0IGtleSA9IGAke2V4dGVuZFsxXX0jYDtcblxuICAgICAgICAgIE9iamVjdC5rZXlzKGluZm8pXG4gICAgICAgICAgICAuZmlsdGVyKHggPT4geC5pbmRleE9mKGtleSkgPT09IDApXG4gICAgICAgICAgICAuZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgICAgaW5mb1tgJHtuYW1lfSMke2suc3BsaXQoJyMnKVsxXX1gXSA9IGNsb25lKGluZm9ba10pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJlZml4ID0gbmFtZTtcbiAgICAgIH0gZWxzZSBpZiAobGluZS5pbmRleE9mKCc6JykgPiAwKSB7XG4gICAgICAgIGNvbnN0IFtuYW1lLCAuLi52YWx1ZV0gPSBsaW5lLnNwbGl0KCc6Jyk7XG5cbiAgICAgICAgZGF0YVtuYW1lXSA9IHRyYW5zZm9ybSh2YWx1ZS5qb2luKCc6JykudHJpbSgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRpY2tzID0gdHJhbnNmb3JtKGxpbmUpO1xuXG4gICAgICAgIGlmICghdGlja3NbMF0gfHwgdGlja3NbMF0udHlwZSAhPT0gJ2NoYW5uZWwnKSB7XG4gICAgICAgICAgaWYgKCFjaGFubmVsKSB0aHJvdyBuZXcgVHlwZUVycm9yKGBNaXNzaW5nIGNoYW5uZWwsIGdpdmVuICcke2xpbmV9J2ApO1xuXG4gICAgICAgICAgY29uc3QgZW5kID0gaW5mb1tjaGFubmVsXVtpbmZvW2NoYW5uZWxdLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgICAgaWYgKCFlbmQudmFsdWVzKSBlbmQudmFsdWVzID0gW3sgdHlwZTogJ251bWJlcicsIHZhbHVlOiAxMjcgfV07XG4gICAgICAgICAgZW5kLnZhbHVlcy5wdXNoKC4uLnRpY2tzKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBub3RlcyA9IHRpY2tzLmZpbmRJbmRleCh4ID0+IFsnbm90ZScsICdjaG9yZCcsICdwYXJhbSddLmluY2x1ZGVzKHgudHlwZSkpO1xuICAgICAgICBjb25zdCBpbmRleCA9IHRpY2tzLmZpbmRJbmRleCh4ID0+IHgudHlwZSA9PT0gJ3BhdHRlcm4nKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBpbmRleCA+IDAgPyB0aWNrcy5zbGljZShpbmRleCkgOiB0aWNrcztcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdmFsdWUuZmluZEluZGV4KHggPT4geC50eXBlICE9PSAncGF0dGVybicpO1xuICAgICAgICBjb25zdCBpbnB1dHMgPSB0aWNrcy5zbGljZSgwLCBpbmRleCA+IDAgPyBpbmRleCA6IDEpO1xuXG4gICAgICAgIGNoYW5uZWwgPSBwcmVmaXggKyBpbnB1dHNbMF0udmFsdWU7XG4gICAgICAgIGlmICghaW5mb1tjaGFubmVsXSkge1xuICAgICAgICAgIGluZm9bY2hhbm5lbF0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzcGVjO1xuICAgICAgICBpZiAobm90ZXMgPiAwICYmIGluZGV4ID09PSAtMSkge1xuICAgICAgICAgIGNvbnN0IGVuZCA9IGluZm9bY2hhbm5lbF1baW5mb1tjaGFubmVsXS5sZW5ndGggLSAxXTtcblxuICAgICAgICAgIGVuZC5kYXRhID0gdmFsdWUuc2xpY2Uobm90ZXMpO1xuICAgICAgICAgIHNwZWMgPSB7XG4gICAgICAgICAgICBpbnB1dDogZW5kLmlucHV0LFxuICAgICAgICAgICAgdmFsdWVzOiB2YWx1ZS5zbGljZSgxLCBub3RlcyksXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChvZmZzZXQgPiAwKSB7XG4gICAgICAgICAgc3BlYyA9IHtcbiAgICAgICAgICAgIGRhdGE6IHZhbHVlLnNsaWNlKG9mZnNldCksXG4gICAgICAgICAgICBpbnB1dDogdmFsdWUuc2xpY2UoMCwgb2Zmc2V0KSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKG9mZnNldCA9PT0gMCkge1xuICAgICAgICAgIHNwZWMgPSB7IHZhbHVlczogdmFsdWUuc2xpY2UoMSkgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzcGVjID0geyBpbnB1dDogdmFsdWUgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbnB1dHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHNwZWMudmFsdWVzID0gaW5wdXRzLnNsaWNlKDEpO1xuICAgICAgICB9XG4gICAgICAgIGluZm9bY2hhbm5lbF0ucHVzaChzcGVjKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zdCBtc2cgPSB0eXBlb2YgZSA9PT0gJ3N0cmluZycgPyBlIDogZS5tZXNzYWdlO1xuXG4gICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYCR7bXNnfVxcbiAgYXQgbGluZSAke250aCArIDF9XFxuJHtsaW5lfWApO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHRyYWNrKSB7XG4gICAgdHJhY2tzW3RyYWNrXSA9IGluZm87XG4gIH1cbiAgcmV0dXJuIHsgbWFpbiwgZGF0YSwgdHJhY2tzIH07XG59XG4iLCAiaW1wb3J0IHsgVXRpbHMgfSBmcm9tICdtaWRpLXdyaXRlci1qcyc7XG5pbXBvcnQgeyBGaWxlLCBUcmFjayB9IGZyb20gJ2pzbWlkZ2VuJztcbmltcG9ydCB7IHppcCwgZmxhdHRlbiB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgc3BsaXQsIGlzUGF0dGVybiB9IGZyb20gJy4vdG9rZW5pemUnO1xuaW1wb3J0IHsgcmVkdWNlIH0gZnJvbSAnLi9wYXJzZXInO1xuXG5jb25zdCBERUZBVUxUID0gU3ltYm9sKCdAbWFpbicpO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGQobWlkaSwgYnBtID0gMTIwLCBsZW5ndGggPSAxNikge1xuICBjb25zdCBmaWxlID0gbmV3IEZpbGUoKTtcbiAgY29uc3QgcSA9IDE2O1xuICBjb25zdCBvID0ge307XG5cbiAgYnBtICo9IGxlbmd0aCAvIHE7XG5cbiAgbGV0IGNoID0gMDtcbiAgZnVuY3Rpb24gZ2V0KG50aCwgbmFtZSkge1xuICAgIGNvbnN0IGtleSA9IG50aCArIG5hbWU7XG5cbiAgICBpZiAoIWdldFtrZXldKSB7XG4gICAgICBjb25zdCB0cmFjayA9IG5ldyBUcmFjaygpO1xuICAgICAgY29uc3QgY2hhbiA9IG50aCA9PT0gJzAnID8gOSA6IGNoO1xuXG4gICAgICBmaWxlLmFkZFRyYWNrKHRyYWNrKTtcbiAgICAgIGdldFtrZXldID0geyBjaGFuLCB0cmFjayB9O1xuICAgICAgaWYgKG50aCAhPT0gJzAnKSBjaCArPSAxO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0W2tleV07XG4gIH1cblxuICBtaWRpLmZvckVhY2goc2VjdGlvbiA9PiB7XG4gICAgc2VjdGlvbi5mb3JFYWNoKHBhcnRzID0+IHtcbiAgICAgIHBhcnRzLmZvckVhY2goZSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY2hhbiwgdHJhY2sgfSA9IGdldChlWzBdLCBlWzFdKTtcblxuICAgICAgICB0cmFjay5zZXRUZW1wbyhicG0pO1xuICAgICAgICBpZiAoY2hhbiAhPT0gOSkge1xuICAgICAgICAgIHRyYWNrLmluc3RydW1lbnQoY2hhbiwgZVswXSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVbMl0ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBjb25zdCB0aWNrID0gZVsyXVtpXTtcblxuICAgICAgICAgIGlmICh0aWNrLnYgPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBub3RlID0gdGljay5uIHx8ICdDMyc7XG5cbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG5vdGUpKSB7XG4gICAgICAgICAgICAgIHRyYWNrLm5vdGVPZmYoY2hhbiwgJycsIHEpO1xuICAgICAgICAgICAgICB0cmFjay5hZGRDaG9yZChjaGFuLCBub3RlLCBxLCB0aWNrLnYpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdHJhY2subm90ZU9uKGNoYW4sIG5vdGUsIHEsIHRpY2sudik7XG4gICAgICAgICAgICAgIHRyYWNrLm5vdGVPZmYoY2hhbiwgbm90ZSwgcSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyYWNrLm5vdGVPZmYoY2hhbiwgJycsIHEgKiAyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIGZpbGUudG9CeXRlcygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFjayh2YWx1ZXMsIG5vdGVzKSB7XG4gIGxldCBvZmZzZXQ7XG4gIGZ1bmN0aW9uIHJlc29sdmUoeCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHgpKSB7XG4gICAgICByZXR1cm4geC5tYXAocmVzb2x2ZSk7XG4gICAgfVxuXG4gICAgbGV0IHRva2VuO1xuICAgIGlmICghJy14XycuaW5jbHVkZXMoeCkpIHtcbiAgICAgIHRva2VuID0geyB2OiAxMjcsIGw6IHggfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9rZW4gPSB7IHY6IHggPT09ICctJyA/IDAgOiAxMjcgfTtcbiAgICB9XG5cbiAgICBpZiAoeCAhPT0gJy0nKSB7XG4gICAgICB0b2tlbi52ID0gdHlwZW9mIHZhbHVlc1tvZmZzZXRdICE9PSAndW5kZWZpbmVkJyA/IHZhbHVlc1tvZmZzZXRdIDogdG9rZW4udiB8fCAwO1xuICAgICAgaWYgKHR5cGVvZiBub3Rlc1tvZmZzZXRdICE9PSAndW5kZWZpbmVkJykgdG9rZW4ubiA9IG5vdGVzW29mZnNldF07XG4gICAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMSkgdG9rZW4udiA9IHZhbHVlc1swXTtcbiAgICAgIGlmICh0b2tlbi52IHx8IHRva2VuLm4pIG9mZnNldCArPSAxO1xuICAgIH1cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICByZXR1cm4gdmFsdWUgPT4ge1xuICAgIGxldCByZXN1bHQgPSB2YWx1ZTtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKGlzUGF0dGVybih2YWx1ZSkpIHtcbiAgICAgICAgb2Zmc2V0ID0gMDtcbiAgICAgICAgcmVzdWx0ID0gc3BsaXQodmFsdWUpLm1hcChyZXNvbHZlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlKGN0eCkge1xuICBjb25zdCBzY2VuZXMgPSB7fTtcblxuICBPYmplY3QuZW50cmllcyhjdHgudHJhY2tzKS5mb3JFYWNoKChbbmFtZSwgY2hhbm5lbHNdKSA9PiB7XG4gICAgT2JqZWN0LmVudHJpZXMoY2hhbm5lbHMpLmZvckVhY2goKFtjaCwgY2xpcHNdKSA9PiB7XG4gICAgICBjb25zdCBbdGFnLCBtaWRpXSA9IGNoLnNwbGl0KCcjJyk7XG4gICAgICBjb25zdCBrZXkgPSB0YWcgfHwgREVGQVVMVDtcblxuICAgICAgbGV0IHRpY2tzO1xuICAgICAgbGV0IGluYyA9IDA7XG4gICAgICBjbGlwcy5mb3JFYWNoKGNsaXAgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBjbGlwLnZhbHVlcyA/IHJlZHVjZShjbGlwLnZhbHVlcywgY3R4LmRhdGEpIDogW107XG4gICAgICAgIGNvbnN0IG5vdGVzID0gY2xpcC5kYXRhID8gcmVkdWNlKGNsaXAuZGF0YSwgY3R4LmRhdGEpIDogW107XG5cbiAgICAgICAgaWYgKGNsaXAuaW5wdXQpIHtcbiAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA+IDEpIHZhbHVlcy5zaGlmdCgpO1xuXG4gICAgICAgICAgY29uc3QgaW5wdXQgPSBmbGF0dGVuKHJlZHVjZShjbGlwLmlucHV0LCBjdHguZGF0YSwgcGFjayh2YWx1ZXMsIG5vdGVzKSkpO1xuXG4gICAgICAgICAgaWYgKCF0aWNrcykge1xuICAgICAgICAgICAgdGlja3MgPSBpbnB1dDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB6aXAodGlja3MsIGlucHV0LCAoYSwgYikgPT4ge1xuICAgICAgICAgICAgaWYgKGIudiA+IDApIGEudiA9IGIudjtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aWNrcykge1xuICAgICAgICAgIGNvbnN0IG1vZGUgPSBjbGlwLnZhbHVlc1xuICAgICAgICAgICAgJiYgY2xpcC52YWx1ZXNbMF1cbiAgICAgICAgICAgICYmIGNsaXAudmFsdWVzWzBdLnR5cGUgPT09ICdtb2RlJyA/IGNsaXAudmFsdWVzWzBdLnZhbHVlIDogbnVsbDtcblxuICAgICAgICAgIHRpY2tzLmZvckVhY2godGljayA9PiB7XG4gICAgICAgICAgICBpZiAodGljay52ID4gMCkge1xuICAgICAgICAgICAgICBpZiAoIXRpY2subiAmJiBub3Rlcy5sZW5ndGggPiAwKSB0aWNrLm4gPSBub3Rlcy5zaGlmdCgpO1xuICAgICAgICAgICAgICBpZiAobW9kZSAmJiB2YWx1ZXMubGVuZ3RoID4gMCkgdGlja1ttb2RlWzBdLnRvTG93ZXJDYXNlKCldID0gdmFsdWVzLnNoaWZ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXNjZW5lc1trZXldKSBzY2VuZXNba2V5XSA9IHsgdHJhY2tzOiBbXSB9O1xuICAgICAgc2NlbmVzW2tleV0udHJhY2tzLnB1c2goW21pZGksIG5hbWUsIHRpY2tzXSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGlmICghY3R4Lm1haW4ubGVuZ3RoKSB7XG4gICAgY3R4Lm1haW4gPSBbW3sgdHlwZTogJ3ZhbHVlJywgdmFsdWU6IERFRkFVTFQgfV1dO1xuICB9XG5cbiAgcmV0dXJuIGN0eC5tYWluLm1hcCh0cmFjayA9PiB7XG4gICAgcmV0dXJuIHJlZHVjZSh0cmFjaywgc2NlbmVzKS5tYXAoaXRlbSA9PiB7XG4gICAgICByZXR1cm4gW10uY29uY2F0KGl0ZW0pLnJlZHVjZSgobWVtbywgeCkgPT4ge1xuICAgICAgICBtZW1vLnB1c2goLi4ueC50cmFja3MpO1xuICAgICAgICByZXR1cm4gbWVtbztcbiAgICAgIH0sIFtdKTtcbiAgICB9KTtcbiAgfSk7XG59XG4iLCAiZXhwb3J0IHsgbWVyZ2UgfSBmcm9tICcuL21peHVwJztcbmV4cG9ydCB7IHBhcnNlIH0gZnJvbSAnLi9wYXJzZXInO1xuZXhwb3J0ICogZnJvbSAnLi91dGlscyc7XG5leHBvcnQgKiBmcm9tICcuL21peHVwJztcbmV4cG9ydCAqIGZyb20gJy4vcGFyc2VyJztcbmV4cG9ydCAqIGZyb20gJy4vdG9rZW5pemUnO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Q3RDLElBQUUsZUFBZSxNQUFNLE9BQU8sTUFBTSxTQUFTO0FBQzdDLFlBQVUsSUFBSTtBQUNkLGlCQUFlO0FBQ2Ysd0JBQXNCLGFBQWE7QUFDckM7QUFFQSxVQUFVO0FBRVYsSUFBTyxjQUFRLENBQUM7IiwKICAibmFtZXMiOiBbIm4iLCAiYSIsICJpIiwgInIiLCAiZSIsICJtIiwgIm8iLCAidCIsICJzIiwgImMiLCAicCIsICJtaWRpIiwgIm0iLCAicCIsICJub3RlIiwgIm0iLCAib2JqIiwgInAiLCAiX3NldFByb3RvdHlwZU9mIiwgIm8iLCAiVXRpbHMiLCAiTm90ZU9uRXZlbnQiLCAiTm90ZU9mZkV2ZW50IiwgIk5vdGVFdmVudCIsICJzY2FsZTE0Yml0cyIsICJQaXRjaEJlbmRFdmVudCIsICJQcm9ncmFtQ2hhbmdlRXZlbnQiLCAiQ29udHJvbGxlckNoYW5nZUV2ZW50IiwgIkNvcHlyaWdodEV2ZW50IiwgIkN1ZVBvaW50RXZlbnQiLCAiRW5kVHJhY2tFdmVudCIsICJJbnN0cnVtZW50TmFtZUV2ZW50IiwgIktleVNpZ25hdHVyZUV2ZW50IiwgIm5vdGUiLCAiTHlyaWNFdmVudCIsICJNYXJrZXJFdmVudCIsICJUZW1wb0V2ZW50IiwgInRlbXBvIiwgIlRleHRFdmVudCIsICJUaW1lU2lnbmF0dXJlRXZlbnQiLCAiVHJhY2tOYW1lRXZlbnQiLCAiVHJhY2siLCAiVmV4RmxvdyIsICJIZWFkZXJDaHVuayIsICJXcml0ZXIiLCAiYnVpbGQiLCAiUGxheWVyIiwgInRlbXBvIiwgInRyYW5zcG9zZSIsICJub3RlIiwgInBpY2tPbmUiLCAiZGljZSIsICJpbml0X3V0aWxzIiwgInByb2dyZXNzaW9uX2V4cG9ydHMiLCAiZ2V0Q2hvcmREZWdyZWVzIiwgImdldENob3Jkc0J5UHJvZ3Jlc3Npb24iLCAicHJvZ3Jlc3Npb24iLCAiaW1wb3J0X2hhcm1vbmljcyIsICJpZHhCeURlZ3JlZSIsICJnZXRDaG9yZE5hbWUiLCAiZ2V0UHJvZ0ZhY3RvcnkiLCAiTSIsICJtIiwgImluaXRfcHJvZ3Jlc3Npb24iLCAiaW5pdF91dGlscyIsICJub3RlIiwgInBpY2tPbmUiLCAiZGljZSIsICJyZXF1aXJlX3Rva2VuaXplIiwgInJlcXVpcmVfdXRpbHMiLCAicmVxdWlyZV9wYXJzZXIiLCAiZ2V0Q2hvcmRzQnlQcm9ncmVzc2lvbiIsICJzY2FsZSIsICJyZWR1Y2UiLCAicGFyc2UiLCAibm9ybWFsaXplTm90ZSIsICJtIiwgInAiLCAiY3JlYXRlRWRpdG9yIiwgImNyZWF0ZU1peGVyIiwgImJhcnMiLCAia2V5IiwgImltcG9ydF9oYXJtb25pY3MiLCAiaXNOdW0iLCAiaXNTdHIiLCAiaXNEZWYiLCAibWlkaVRvRnJlcSIsICJtaWRpIiwgInBhcnNlIiwgIm0iLCAiUkVHRVgiLCAicCIsICJTRU1JVE9ORVMiLCAibm90ZSIsICJpbml0X25vdGVfcGFyc2VyIiwgIl9fZXNtIiwgInRvbmFsX21pZGlfZXhwb3J0cyIsICJfX2V4cG9ydCIsICJ0b01pZGkiLCAiU0hBUlBTIiwgIkZMQVRTIiwgImluaXRfdG9uYWxfbWlkaSIsICJyZXF1aXJlX3BhY2thZ2UiLCAiX19jb21tb25KUyIsICJyZXF1aXJlX2J1aWxkIiwgIl9fdG9Db21tb25KUyIsICJvYmoiLCAiX3NldFByb3RvdHlwZU9mIiwgIm8iLCAiVXRpbHMiLCAiTm90ZU9uRXZlbnQiLCAiTm90ZU9mZkV2ZW50IiwgIk5vdGVFdmVudCIsICJzY2FsZTE0Yml0cyIsICJQaXRjaEJlbmRFdmVudCIsICJQcm9ncmFtQ2hhbmdlRXZlbnQiLCAiQ29udHJvbGxlckNoYW5nZUV2ZW50IiwgIkNvcHlyaWdodEV2ZW50IiwgIkN1ZVBvaW50RXZlbnQiLCAiRW5kVHJhY2tFdmVudCIsICJJbnN0cnVtZW50TmFtZUV2ZW50IiwgIktleVNpZ25hdHVyZUV2ZW50IiwgIkx5cmljRXZlbnQiLCAiTWFya2VyRXZlbnQiLCAiVGVtcG9FdmVudCIsICJ0ZW1wbyIsICJUZXh0RXZlbnQiLCAiVGltZVNpZ25hdHVyZUV2ZW50IiwgIlRyYWNrTmFtZUV2ZW50IiwgIlRyYWNrIiwgIlZleEZsb3ciLCAiSGVhZGVyQ2h1bmsiLCAiV3JpdGVyIiwgImJ1aWxkIiwgInJlcXVpcmVfbWFpbiIsICJuIiwgImEiLCAiaSIsICJyIiwgImUiLCAidCIsICJzIiwgImMiLCAiX190b0VTTSIsICJnZXRDaG9yZHNCeVByb2dyZXNzaW9uIiwgInNjYWxlIiwgInJlZHVjZSIsICJtZXJnZSIsICJpbXBvcnRfcGFyc2VyIiwgIlBsYXllciIsICJtaWRpIiwgIlNFTUlUT05FUyIsICJtIiwgInByZXNldFNlbGVjdCJdCn0K
