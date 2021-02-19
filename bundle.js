(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@babel/runtime/regenerator'), require('@babel/runtime/helpers/asyncToGenerator'), require('@babel/runtime/helpers/createClass'), require('@babel/runtime/helpers/assertThisInitialized'), require('@babel/runtime/helpers/inheritsLoose')) :
  typeof define === 'function' && define.amd ? define(['@babel/runtime/regenerator', '@babel/runtime/helpers/asyncToGenerator', '@babel/runtime/helpers/createClass', '@babel/runtime/helpers/assertThisInitialized', '@babel/runtime/helpers/inheritsLoose'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global._regeneratorRuntime, global._asyncToGenerator, global._createClass, global._assertThisInitialized, global._inheritsLoose));
}(this, (function (_regeneratorRuntime, _asyncToGenerator, _createClass, _assertThisInitialized, _inheritsLoose) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var _regeneratorRuntime__default = /*#__PURE__*/_interopDefaultLegacy(_regeneratorRuntime);
  var _asyncToGenerator__default = /*#__PURE__*/_interopDefaultLegacy(_asyncToGenerator);
  var _createClass__default = /*#__PURE__*/_interopDefaultLegacy(_createClass);
  var _assertThisInitialized__default = /*#__PURE__*/_interopDefaultLegacy(_assertThisInitialized);
  var _inheritsLoose__default = /*#__PURE__*/_interopDefaultLegacy(_inheritsLoose);

  /*! timidity. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
  var Debug = require('debug');

  var EventEmitter = require('events').EventEmitter;

  var LibTimidity = require('./libtimidity');

  var debug = Debug('timidity');
  var debugVerbose = Debug('timidity:verbose'); // Inlined at build time by 'brfs' browserify transform

  var TIMIDITY_CFG = "# Bank name:  GUS Classic Patch Set v1.6b   www.rarek.ceron.pl\n# Date:       Feb 25, 1999\n# Made by:    Converted by ArekR\n# Target:     SBAWE32\n# Copyright:  EYE&I and Advanced Gravis\n# Tools:      Polyphone\n\nbank 0 #N gravis-B0\n\t0 gravis-B0/GrandPiano\n\t1 gravis-B0/BritePiano\n\t2 gravis-B0/SynthPiano1\n\t3 gravis-B0/HonkyTonkPiano\n\t4 gravis-B0/RhodesPiano\n\t5 gravis-B0/ChorusedPiano\n\t6 gravis-B0/Harpsichord\n\t7 gravis-B0/Clavinet\n\t8 gravis-B0/Celeste\n\t9 gravis-B0/Glockenspiel\n\t10 gravis-B0/MusicBox\n\t11 gravis-B0/Vibes\n\t12 gravis-B0/Marimba\n\t13 gravis-B0/Xylophone\n\t14 gravis-B0/TubularBells\n\t15 gravis-B0/Dulcimer\n\t16 gravis-B0/HammondOrgan\n\t17 gravis-B0/PercussiveOrgan\n\t18 gravis-B0/RockOrgan\n\t19 gravis-B0/ChurchOrgan\n\t20 gravis-B0/ReedOrgan\n\t21 gravis-B0/Accordion\n\t22 gravis-B0/Harmonica\n\t23 gravis-B0/Concertina\n\t24 gravis-B0/NylonStringGtr\n\t25 gravis-B0/SteelStringGtr\n\t26 gravis-B0/JazzGuitar\n\t27 gravis-B0/ElecGtrclean\n\t28 gravis-B0/MutedGuitar\n\t29 gravis-B0/OverdriveGuitar\n\t30 gravis-B0/DistortionGtr\n\t31 gravis-B0/GuitarHarmonics\n\t32 gravis-B0/AcousticBass\n\t33 gravis-B0/FingeredBass\n\t34 gravis-B0/PickedBass\n\t35 gravis-B0/FretlessBass\n\t36 gravis-B0/SlapBass1\n\t37 gravis-B0/SlapBass2\n\t38 gravis-B0/SynthBass1\n\t39 gravis-B0/SynthBass2\n\t40 gravis-B0/Violin\n\t41 gravis-B0/Viola\n\t42 gravis-B0/Cello\n\t43 gravis-B0/Contrabass\n\t44 gravis-B0/TremoloStrings\n\t45 gravis-B0/PizzicatoString\n\t46 gravis-B0/OrchestralHarp\n\t47 gravis-B0/Timpani\n\t48 gravis-B0/MarcatoStrings\n\t49 gravis-B0/SlowStrings\n\t50 gravis-B0/SynthStrings1\n\t51 gravis-B0/SynthStrings2\n\t52 gravis-B0/ChoirAahs\n\t53 gravis-B0/VoiceOohs\n\t54 gravis-B0/SynthVoices\n\t55 gravis-B0/OrchestraHit\n\t56 gravis-B0/Trumpet\n\t57 gravis-B0/Trombone\n\t58 gravis-B0/Tuba\n\t59 gravis-B0/MutedTrumpet\n\t60 gravis-B0/FrenchHorn\n\t61 gravis-B0/BrassSection\n\t62 gravis-B0/SynthBrass1\n\t63 gravis-B0/SynthBrass2\n\t64 gravis-B0/SopranoSax\n\t65 gravis-B0/AltoSax\n\t66 gravis-B0/TenorSax\n\t67 gravis-B0/BaritoneSax\n\t68 gravis-B0/Oboe\n\t69 gravis-B0/EnglishHorn\n\t70 gravis-B0/Bassoon\n\t71 gravis-B0/Clarinet\n\t72 gravis-B0/Piccolo\n\t73 gravis-B0/Flute\n\t74 gravis-B0/Recorder\n\t75 gravis-B0/WoodenFlute\n\t76 gravis-B0/Bottle\n\t77 gravis-B0/Shakuhachi\n\t78 gravis-B0/Whistle\n\t79 gravis-B0/Ocarina\n\t80 gravis-B0/SquareWave\n\t81 gravis-B0/SawtoothWave\n\t82 gravis-B0/Calliope\n\t83 gravis-B0/Chifflead\n\t84 gravis-B0/Charang\n\t85 gravis-B0/Voxlead\n\t86 gravis-B0/Fifthslead\n\t87 gravis-B0/BassLead\n\t88 gravis-B0/Fantasia\n\t89 gravis-B0/Warmpad\n\t90 gravis-B0/Polysynth\n\t91 gravis-B0/Ghostie\n\t92 gravis-B0/BowedGlass\n\t93 gravis-B0/Metalpad\n\t94 gravis-B0/Halopad\n\t95 gravis-B0/Sweeper\n\t96 gravis-B0/Aurora\n\t97 gravis-B0/Soundtrack\n\t98 gravis-B0/Crystal\n\t99 gravis-B0/Atmosphere\n\t100 gravis-B0/FreshAir\n\t101 gravis-B0/Unicorn\n\t102 gravis-B0/EchoVox\n\t103 gravis-B0/Startrak\n\t104 gravis-B0/Sitar\n\t105 gravis-B0/Banjo\n\t106 gravis-B0/Shamisen\n\t107 gravis-B0/Koto\n\t108 gravis-B0/Kalimba\n\t109 gravis-B0/Bagpipes\n\t110 gravis-B0/Fiddle\n\t111 gravis-B0/Shannai\n\t112 gravis-B0/Carillon\n\t113 gravis-B0/Agogo\n\t114 gravis-B0/SteelDrums\n\t115 gravis-B0/Woodblock\n\t116 gravis-B0/TaikoDrum\n\t117 gravis-B0/Toms\n\t118 gravis-B0/SynthTom\n\t119 gravis-B0/ReverseCymbal\n\t120 gravis-B0/GtrFretnoise\n\t121 gravis-B0/BreathNoise\n\t122 gravis-B0/Seashore\n\t123 gravis-B0/Junglenoises\n\t124 gravis-B0/Telephone\n\t125 gravis-B0/Helicopter\n\t126 gravis-B0/Applause\n\t127 gravis-B0/Gunshot\n\nbank 1 #N gravis-B1\n\t0 gravis-B1/long\n\ndrumset 0 #N Standard\n\t27 gravis-Standard/HighQ\n\t28 gravis-Standard/Slap\n\t29 gravis-Standard/Scratch1\n\t30 gravis-Standard/Scratch2\n\t31 gravis-Standard/Sticks\n\t32 gravis-Standard/SquareClick\n\t33 gravis-Standard/MetronomeClick\n\t34 gravis-Standard/MetronomeBell\n\t35 gravis-Standard/KickDrum1\n\t36 gravis-Standard/KickDrum2\n\t37 gravis-Standard/RimSideStick\n\t38 gravis-Standard/GatedSnare\n\t39 gravis-Standard/HandClap\n\t40 gravis-Standard/AcousticSnare\n\t41 gravis-Standard/Tomlow2\n\t42 gravis-Standard/ClosedHighHat\n\t43 gravis-Standard/Tomlow1\n\t44 gravis-Standard/PedalHighHat\n\t45 gravis-Standard/Tommid2\n\t46 gravis-Standard/OpenHighHat\n\t47 gravis-Standard/Tommid1\n\t48 gravis-Standard/Tomhigh2\n\t49 gravis-Standard/CrashCymbal1\n\t50 gravis-Standard/Tomhigh1\n\t51 gravis-Standard/RideCymbal1\n\t52 gravis-Standard/Chinesecymbal\n\t53 gravis-Standard/Ridebell\n\t54 gravis-Standard/Tambourine\n\t55 gravis-Standard/SplashCymbal\n\t56 gravis-Standard/Cowbell\n\t57 gravis-Standard/CrashCymbal2\n\t58 gravis-Standard/Vibraslap\n\t59 gravis-Standard/RideCymbal2\n\t60 gravis-Standard/HighBongo\n\t61 gravis-Standard/LowBongo\n\t62 gravis-Standard/MuteHighConga\n\t63 gravis-Standard/OpenHighConga\n\t64 gravis-Standard/LowConga\n\t65 gravis-Standard/HighTimbale\n\t66 gravis-Standard/LowTimbale\n\t67 gravis-Standard/Agogohigh\n\t68 gravis-Standard/Agogolow\n\t69 gravis-Standard/Cabasa\n\t70 gravis-Standard/Maracas\n\t71 gravis-Standard/ShortWhistle\n\t72 gravis-Standard/LongWhistle\n\t73 gravis-Standard/ShortGuiro\n\t74 gravis-Standard/LongGuiro\n\t75 gravis-Standard/Claves\n\t76 gravis-Standard/HighWoodblock\n\t77 gravis-Standard/LowWoodblock\n\t78 gravis-Standard/MuteCuica\n\t79 gravis-Standard/OpenCuica\n\t80 gravis-Standard/MuteTriangle\n\t81 gravis-Standard/OpenTriangle\n\t82 gravis-Standard/Shaker\n\t83 gravis-Standard/JingleBells\n\t84 gravis-Standard/BellTree\n\t85 gravis-Standard/Castinet\n\t86 gravis-Standard/MuteSurdo\n\t87 gravis-Standard/OpenSurdo\n";
  var SAMPLE_RATE = 44100;
  var AUDIO_FORMAT = 0x8010; // format of the rendered audio 's16'

  var NUM_CHANNELS = 2; // stereo (2 channels)

  var BYTES_PER_SAMPLE = 2 * NUM_CHANNELS;
  var BUFFER_SIZE = 16384; // buffer size for each render() call

  var AudioContext = typeof window !== 'undefined' && (window.AudioContext || window.webkitAudioContext);

  var Timidity = /*#__PURE__*/function (_EventEmitter) {
    _inheritsLoose__default['default'](Timidity, _EventEmitter);

    function Timidity(baseUrl) {
      var _this;

      if (baseUrl === void 0) {
        baseUrl = '/';
      }

      _this = _EventEmitter.call(this) || this;
      _this.destroyed = false;
      if (!baseUrl.endsWith('/')) baseUrl += '/';
      _this._baseUrl = new URL(baseUrl, window.location.origin).href;
      _this._ready = false;
      _this._playing = false;
      _this._pendingFetches = {}; // instrument -> fetch

      _this._songPtr = 0;
      _this._bufferPtr = 0;
      _this._array = new Int16Array(BUFFER_SIZE * 2);
      _this._currentUrlOrBuf = null; // currently loading url or buf

      _this._interval = null;
      _this._startInterval = _this._startInterval.bind(_assertThisInitialized__default['default'](_this));
      _this._stopInterval = _this._stopInterval.bind(_assertThisInitialized__default['default'](_this)); // If the Timidity constructor was not invoked inside a user-initiated event
      // handler, then the AudioContext will be suspended. See:
      // https://developers.google.com/web/updates/2017/09/autoplay-policy-changes

      _this._audioContext = new AudioContext(); // Start the 'onaudioprocess' events flowing

      _this._node = _this._audioContext.createScriptProcessor(BUFFER_SIZE, 0, NUM_CHANNELS);
      _this._onAudioProcess = _this._onAudioProcess.bind(_assertThisInitialized__default['default'](_this));

      _this._node.addEventListener('audioprocess', _this._onAudioProcess);

      _this._node.connect(_this._audioContext.destination);

      LibTimidity({
        locateFile: function locateFile(file) {
          return new URL(file, _this._baseUrl).href;
        }
      }).then(function (lib) {
        _this._lib = lib;

        _this._onLibReady();
      });
      return _this;
    }

    var _proto = Timidity.prototype;

    _proto._onLibReady = function _onLibReady() {
      this._lib.FS.writeFile('/timidity.cfg', TIMIDITY_CFG);

      var result = this._lib._mid_init('/timidity.cfg');

      if (result !== 0) {
        return this._destroy(new Error('Failed to initialize libtimidity'));
      }

      this._bufferPtr = this._lib._malloc(BUFFER_SIZE * BYTES_PER_SAMPLE);
      debugVerbose('Initialized libtimidity');
      this._ready = true;
      this.emit('_ready');
    };

    _proto.load = /*#__PURE__*/function () {
      var _load = _asyncToGenerator__default['default']( /*#__PURE__*/_regeneratorRuntime__default['default'].mark(function _callee(urlOrBuf) {
        var _this2 = this;

        var midiBuf, songPtr, missingCount, missingInstruments;
        return _regeneratorRuntime__default['default'].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                debug('load %o', urlOrBuf);

                if (!this.destroyed) {
                  _context.next = 3;
                  break;
                }

                throw new Error('load() called after destroy()');

              case 3:
                // If the Timidity constructor was not invoked inside a user-initiated event
                // handler, then the AudioContext will be suspended. Attempt to resume it.
                this._audioContext.resume(); // If a song already exists, destroy it before starting a new one


                if (this._songPtr) this._destroySong();
                this.emit('unstarted');

                this._stopInterval();

                if (this._ready) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return", this.once('_ready', function () {
                  return _this2.load(urlOrBuf);
                }));

              case 9:
                this.emit('buffering'); // Save the url or buf to load. Allows detection of when a new interleaved
                // load() starts so we can abort this load.

                this._currentUrlOrBuf = urlOrBuf;

                if (!(typeof urlOrBuf === 'string')) {
                  _context.next = 19;
                  break;
                }

                _context.next = 14;
                return this._fetch(new URL(urlOrBuf, this._baseUrl));

              case 14:
                midiBuf = _context.sent;

                if (!(this._currentUrlOrBuf !== urlOrBuf)) {
                  _context.next = 17;
                  break;
                }

                return _context.abrupt("return");

              case 17:
                _context.next = 24;
                break;

              case 19:
                if (!(urlOrBuf instanceof Uint8Array)) {
                  _context.next = 23;
                  break;
                }

                midiBuf = urlOrBuf;
                _context.next = 24;
                break;

              case 23:
                throw new Error('load() expects a `string` or `Uint8Array` argument');

              case 24:
                songPtr = this._loadSong(midiBuf); // Are we missing instrument files?

                missingCount = this._lib._mid_get_load_request_count(songPtr);

                if (!(missingCount > 0)) {
                  _context.next = 37;
                  break;
                }

                missingInstruments = this._getMissingInstruments(songPtr, missingCount);
                debugVerbose('Fetching instruments: %o', missingInstruments); // Wait for all instruments to load

                _context.next = 31;
                return Promise.all(missingInstruments.map(function (instrument) {
                  return _this2._fetchInstrument(instrument);
                }));

              case 31:
                if (!(this._currentUrlOrBuf !== urlOrBuf)) {
                  _context.next = 33;
                  break;
                }

                return _context.abrupt("return");

              case 33:
                // Retry the song load, now that instruments have been loaded
                this._lib._mid_song_free(songPtr);

                songPtr = this._loadSong(midiBuf); // Are we STILL missing instrument files? Then our General MIDI soundset
                // is probably missing instrument files.

                missingCount = this._lib._mid_get_load_request_count(songPtr); // Print out missing instrument names

                if (missingCount > 0) {
                  missingInstruments = this._getMissingInstruments(songPtr, missingCount);
                  debug('Playing with missing instruments: %o', missingInstruments);
                }

              case 37:
                this._songPtr = songPtr;

                this._lib._mid_song_start(this._songPtr);

                debugVerbose('Song and instruments are loaded');

              case 40:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function load(_x) {
        return _load.apply(this, arguments);
      }

      return load;
    }();

    _proto._getMissingInstruments = function _getMissingInstruments(songPtr, missingCount) {
      var missingInstruments = [];

      for (var i = 0; i < missingCount; i++) {
        var instrumentPtr = this._lib._mid_get_load_request(songPtr, i);

        var instrument = this._lib.UTF8ToString(instrumentPtr);

        missingInstruments.push(instrument);
      }

      return missingInstruments;
    };

    _proto._loadSong = function _loadSong(midiBuf) {
      var optsPtr = this._lib._mid_alloc_options(SAMPLE_RATE, AUDIO_FORMAT, NUM_CHANNELS, BUFFER_SIZE); // Copy the MIDI buffer into the heap


      var midiBufPtr = this._lib._malloc(midiBuf.byteLength);

      this._lib.HEAPU8.set(midiBuf, midiBufPtr); // Create a stream


      var iStreamPtr = this._lib._mid_istream_open_mem(midiBufPtr, midiBuf.byteLength); // Load the song


      var songPtr = this._lib._mid_song_load(iStreamPtr, optsPtr); // Free resources no longer needed


      this._lib._mid_istream_close(iStreamPtr);

      this._lib._free(optsPtr);

      this._lib._free(midiBufPtr);

      if (songPtr === 0) {
        return this._destroy(new Error('Failed to load MIDI file'));
      }

      return songPtr;
    };

    _proto._fetchInstrument = /*#__PURE__*/function () {
      var _fetchInstrument2 = _asyncToGenerator__default['default']( /*#__PURE__*/_regeneratorRuntime__default['default'].mark(function _callee2(instrument) {
        var re, url, bufPromise, buf;
        return _regeneratorRuntime__default['default'].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this._pendingFetches[instrument]) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return", this._pendingFetches[instrument]);

              case 2:
                re = /(?:\.([^.]+))?$/; //ensure pat extension

                if (re.exec(instrument) !== 'pat') instrument = instrument + '.pat';
                url = new URL(instrument, this._baseUrl);
                bufPromise = this._fetch(url);
                this._pendingFetches[instrument] = bufPromise;
                _context2.next = 9;
                return bufPromise;

              case 9:
                buf = _context2.sent;

                this._writeInstrumentFile(instrument, buf);

                delete this._pendingFetches[instrument];
                return _context2.abrupt("return", buf);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _fetchInstrument(_x2) {
        return _fetchInstrument2.apply(this, arguments);
      }

      return _fetchInstrument;
    }();

    _proto._writeInstrumentFile = function _writeInstrumentFile(instrument, buf) {
      var folderPath = instrument.split('/').slice(0, -1) // remove basename
      .join('/');

      this._mkdirp(folderPath);

      this._lib.FS.writeFile(instrument, buf, {
        encoding: 'binary'
      });
    };

    _proto._mkdirp = function _mkdirp(folderPath) {
      var pathParts = folderPath.split('/');
      var dirPath = '/';

      for (var i = 0; i < pathParts.length; i++) {
        var curPart = pathParts[i];

        try {
          this._lib.FS.mkdir("" + dirPath + curPart);
        } catch (err) {}

        dirPath += curPart + "/";
      }
    };

    _proto._fetch = /*#__PURE__*/function () {
      var _fetch2 = _asyncToGenerator__default['default']( /*#__PURE__*/_regeneratorRuntime__default['default'].mark(function _callee3(url) {
        var opts, response, arrayBuffer, buf;
        return _regeneratorRuntime__default['default'].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                opts = {
                  mode: 'cors',
                  credentials: 'same-origin'
                };
                _context3.next = 3;
                return window.fetch(url, opts);

              case 3:
                response = _context3.sent;

                if (!(response.status !== 200)) {
                  _context3.next = 6;
                  break;
                }

                throw new Error("Could not load " + url);

              case 6:
                _context3.next = 8;
                return response.arrayBuffer();

              case 8:
                arrayBuffer = _context3.sent;
                buf = new Uint8Array(arrayBuffer);
                return _context3.abrupt("return", buf);

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function _fetch(_x3) {
        return _fetch2.apply(this, arguments);
      }

      return _fetch;
    }();

    _proto.play = function play() {
      debug('play');
      if (this.destroyed) throw new Error('play() called after destroy()'); // If the Timidity constructor was not invoked inside a user-initiated event
      // handler, then the AudioContext will be suspended. Attempt to resume it.

      this._audioContext.resume();

      this._playing = true;

      if (this._ready && !this._currentUrlOrBuf) {
        this.emit('playing');

        this._startInterval();
      }
    };

    _proto._onAudioProcess = function _onAudioProcess(event) {
      var sampleCount = this._songPtr && this._playing ? this._readMidiData() : 0;

      if (sampleCount > 0 && this._currentUrlOrBuf) {
        this._currentUrlOrBuf = null;
        this.emit('playing');

        this._startInterval();
      }

      var output0 = event.outputBuffer.getChannelData(0);
      var output1 = event.outputBuffer.getChannelData(1);

      for (var i = 0; i < sampleCount; i++) {
        output0[i] = this._array[i * 2] / 0x7FFF;
        output1[i] = this._array[i * 2 + 1] / 0x7FFF;
      }

      for (var _i = sampleCount; _i < BUFFER_SIZE; _i++) {
        output0[_i] = 0;
        output1[_i] = 0;
      }

      if (this._songPtr && this._playing && sampleCount === 0) {
        // Reached the end of the file
        this.seek(0);
        this.pause();

        this._lib._mid_song_start(this._songPtr);

        this.emit('ended');
      }
    };

    _proto._readMidiData = function _readMidiData() {
      var byteCount = this._lib._mid_song_read_wave(this._songPtr, this._bufferPtr, BUFFER_SIZE * BYTES_PER_SAMPLE);

      var sampleCount = byteCount / BYTES_PER_SAMPLE; // Was anything output? If not, don't bother copying anything

      if (sampleCount === 0) {
        return 0;
      }

      this._array.set(this._lib.HEAP16.subarray(this._bufferPtr / 2, (this._bufferPtr + byteCount) / 2));

      return sampleCount;
    };

    _proto.pause = function pause() {
      debug('pause');
      if (this.destroyed) throw new Error('pause() called after destroy()');
      this._playing = false;

      this._stopInterval();

      this.emit('paused');
    };

    _proto.seek = function seek(time) {
      debug('seek %d', time);
      if (this.destroyed) throw new Error('seek() called after destroy()');
      if (!this._songPtr) return; // ignore seek if there is no song loaded yet

      var timeMs = Math.floor(time * 1000);

      this._lib._mid_song_seek(this._songPtr, timeMs);

      this._onTimeupdate();
    };

    /**
     * This event fires when the time indicated by the `currentTime` property
     * has been updated.
     */
    _proto._onTimeupdate = function _onTimeupdate() {
      this.emit('timeupdate', this.currentTime);
    };

    _proto._startInterval = function _startInterval() {
      var _this3 = this;

      this._onTimeupdate();

      this._interval = setInterval(function () {
        return _this3._onTimeupdate();
      }, 1000);
    };

    _proto._stopInterval = function _stopInterval() {
      this._onTimeupdate();

      clearInterval(this._interval);
      this._interval = null;
    };

    _proto.destroy = function destroy() {
      debug('destroy');
      if (this.destroyed) throw new Error('destroy() called after destroy()');

      this._destroy();
    };

    _proto._destroy = function _destroy(err) {
      if (this.destroyed) return;
      this.destroyed = true;

      this._stopInterval();

      this._array = null;

      if (this._songPtr) {
        this._destroySong();
      }

      if (this._bufferPtr) {
        this._lib._free(this._bufferPtr);

        this._bufferPtr = 0;
      }

      if (this._node) {
        this._node.disconnect();

        this._node.removeEventListener('audioprocess', this._onAudioProcess);
      }

      if (this._audioContext) {
        this._audioContext.close();
      }

      if (err) this.emit('error', err);
      debug('destroyed (err %o)', err);
    };

    _proto._destroySong = function _destroySong() {
      this._lib._mid_song_free(this._songPtr);

      this._songPtr = 0;
    };

    _createClass__default['default'](Timidity, [{
      key: "currentTime",
      get: function get() {
        if (this.destroyed || !this._songPtr) return 0;
        return this._lib._mid_song_get_time(this._songPtr) / 1000;
      }
    }, {
      key: "duration",
      get: function get() {
        if (this.destroyed || !this._songPtr) return 1;
        return this._lib._mid_song_get_total_time(this._songPtr) / 1000;
      }
    }]);

    return Timidity;
  }(EventEmitter);

  module.exports = Timidity;

})));
