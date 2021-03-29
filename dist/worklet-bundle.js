function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _readOnlyError(name) {
  throw new TypeError("\"" + name + "\" is read-only");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

var libtimidity = createCommonjsModule(function (module, exports) {
  var LibTimidity = function () {
    var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;

    return function (LibTimidity) {
      LibTimidity = LibTimidity || {};
      var Module = typeof LibTimidity !== "undefined" ? LibTimidity : {};
      var readyPromiseResolve, readyPromiseReject;
      Module["ready"] = new Promise(function (resolve, reject) {
        readyPromiseResolve = resolve;
        readyPromiseReject = reject;
      });
      var moduleOverrides = {};
      var key;

      for (key in Module) {
        if (Module.hasOwnProperty(key)) {
          moduleOverrides[key] = Module[key];
        }
      }

      var ENVIRONMENT_IS_WEB = false;
      var ENVIRONMENT_IS_WORKER = false;
      ENVIRONMENT_IS_WEB = typeof window === "object";
      ENVIRONMENT_IS_WORKER = typeof importScripts === "function";
      typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string";
      var scriptDirectory = "";

      function locateFile(path) {
        if (Module["locateFile"]) {
          return Module["locateFile"](path, scriptDirectory);
        }

        return scriptDirectory + path;
      }

      var read_, readBinary;

      if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
        if (ENVIRONMENT_IS_WORKER) {
          scriptDirectory = self.location.href;
        } else if (typeof document !== "undefined" && document.currentScript) {
          scriptDirectory = document.currentScript.src;
        }

        if (_scriptDir) {
          scriptDirectory = _scriptDir;
        }

        if (scriptDirectory.indexOf("blob:") !== 0) {
          scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf("/") + 1);
        } else {
          scriptDirectory = "";
        }

        {
          read_ = function read_(url) {
            try {
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url, false);
              xhr.send(null);
              return xhr.responseText;
            } catch (err) {
              var data = tryParseAsDataURI(url);

              if (data) {
                return intArrayToString(data);
              }

              throw err;
            }
          };

          if (ENVIRONMENT_IS_WORKER) {
            readBinary = function readBinary(url) {
              try {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", url, false);
                xhr.responseType = "arraybuffer";
                xhr.send(null);
                return new Uint8Array(xhr.response);
              } catch (err) {
                var data = tryParseAsDataURI(url);

                if (data) {
                  return data;
                }

                throw err;
              }
            };
          }
        }
      }

      var out = Module["print"] || console.log.bind(console);
      var err = Module["printErr"] || console.warn.bind(console);

      for (key in moduleOverrides) {
        if (moduleOverrides.hasOwnProperty(key)) {
          Module[key] = moduleOverrides[key];
        }
      }

      moduleOverrides = null;
      if (Module["arguments"]) Module["arguments"];
      if (Module["thisProgram"]) Module["thisProgram"];
      if (Module["quit"]) Module["quit"];
      var STACK_ALIGN = 16;

      function alignMemory(size, factor) {
        if (!factor) factor = STACK_ALIGN;
        return Math.ceil(size / factor) * factor;
      }

      var wasmBinary;
      if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
      if (Module["noExitRuntime"]) Module["noExitRuntime"];

      if (typeof WebAssembly !== "object") {
        abort("no native wasm support detected");
      }

      var wasmMemory;
      var ABORT = false;

      var UTF8Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : undefined;

      function UTF8ArrayToString(heap, idx, maxBytesToRead) {
        var endIdx = idx + maxBytesToRead;
        var endPtr = idx;

        while (heap[endPtr] && !(endPtr >= endIdx)) {
          ++endPtr;
        }

        if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
          return UTF8Decoder.decode(heap.subarray(idx, endPtr));
        } else {
          var str = "";

          while (idx < endPtr) {
            var u0 = heap[idx++];

            if (!(u0 & 128)) {
              str += String.fromCharCode(u0);
              continue;
            }

            var u1 = heap[idx++] & 63;

            if ((u0 & 224) == 192) {
              str += String.fromCharCode((u0 & 31) << 6 | u1);
              continue;
            }

            var u2 = heap[idx++] & 63;

            if ((u0 & 240) == 224) {
              u0 = (u0 & 15) << 12 | u1 << 6 | u2;
            } else {
              u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heap[idx++] & 63;
            }

            if (u0 < 65536) {
              str += String.fromCharCode(u0);
            } else {
              var ch = u0 - 65536;
              str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
            }
          }
        }

        return str;
      }

      function UTF8ToString(ptr, maxBytesToRead) {
        return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
      }

      function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
        if (!(maxBytesToWrite > 0)) return 0;
        var startIdx = outIdx;
        var endIdx = outIdx + maxBytesToWrite - 1;

        for (var i = 0; i < str.length; ++i) {
          var u = str.charCodeAt(i);

          if (u >= 55296 && u <= 57343) {
            var u1 = str.charCodeAt(++i);
            u = 65536 + ((u & 1023) << 10) | u1 & 1023;
          }

          if (u <= 127) {
            if (outIdx >= endIdx) break;
            heap[outIdx++] = u;
          } else if (u <= 2047) {
            if (outIdx + 1 >= endIdx) break;
            heap[outIdx++] = 192 | u >> 6;
            heap[outIdx++] = 128 | u & 63;
          } else if (u <= 65535) {
            if (outIdx + 2 >= endIdx) break;
            heap[outIdx++] = 224 | u >> 12;
            heap[outIdx++] = 128 | u >> 6 & 63;
            heap[outIdx++] = 128 | u & 63;
          } else {
            if (outIdx + 3 >= endIdx) break;
            heap[outIdx++] = 240 | u >> 18;
            heap[outIdx++] = 128 | u >> 12 & 63;
            heap[outIdx++] = 128 | u >> 6 & 63;
            heap[outIdx++] = 128 | u & 63;
          }
        }

        heap[outIdx] = 0;
        return outIdx - startIdx;
      }

      function stringToUTF8(str, outPtr, maxBytesToWrite) {
        return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
      }

      function lengthBytesUTF8(str) {
        var len = 0;

        for (var i = 0; i < str.length; ++i) {
          var u = str.charCodeAt(i);
          if (u >= 55296 && u <= 57343) u = 65536 + ((u & 1023) << 10) | str.charCodeAt(++i) & 1023;
          if (u <= 127) ++len;else if (u <= 2047) len += 2;else if (u <= 65535) len += 3;else len += 4;
        }

        return len;
      }

      function alignUp(x, multiple) {
        if (x % multiple > 0) {
          x += multiple - x % multiple;
        }

        return x;
      }

      var buffer, HEAP8, HEAPU8, HEAP16, HEAP32;

      function updateGlobalBufferAndViews(buf) {
        buffer = buf;
        Module["HEAP8"] = HEAP8 = new Int8Array(buf);
        Module["HEAP16"] = HEAP16 = new Int16Array(buf);
        Module["HEAP32"] = HEAP32 = new Int32Array(buf);
        Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
        Module["HEAPU16"] = new Uint16Array(buf);
        Module["HEAPU32"] = new Uint32Array(buf);
        Module["HEAPF32"] = new Float32Array(buf);
        Module["HEAPF64"] = new Float64Array(buf);
      }

      Module["INITIAL_MEMORY"] || 16777216;
      var wasmTable;
      var __ATPRERUN__ = [];
      var __ATINIT__ = [];
      var __ATMAIN__ = [];
      var __ATPOSTRUN__ = [];

      __ATINIT__.push({
        func: function func() {
          ___wasm_call_ctors();
        }
      });

      function preRun() {
        if (Module["preRun"]) {
          if (typeof Module["preRun"] == "function") Module["preRun"] = [Module["preRun"]];

          while (Module["preRun"].length) {
            addOnPreRun(Module["preRun"].shift());
          }
        }

        callRuntimeCallbacks(__ATPRERUN__);
      }

      function initRuntime() {
        if (!Module["noFSInit"] && !FS.init.initialized) FS.init();
        TTY.init();
        callRuntimeCallbacks(__ATINIT__);
      }

      function preMain() {
        FS.ignorePermissions = false;
        callRuntimeCallbacks(__ATMAIN__);
      }

      function postRun() {
        if (Module["postRun"]) {
          if (typeof Module["postRun"] == "function") Module["postRun"] = [Module["postRun"]];

          while (Module["postRun"].length) {
            addOnPostRun(Module["postRun"].shift());
          }
        }

        callRuntimeCallbacks(__ATPOSTRUN__);
      }

      function addOnPreRun(cb) {
        __ATPRERUN__.unshift(cb);
      }

      function addOnPostRun(cb) {
        __ATPOSTRUN__.unshift(cb);
      }

      var runDependencies = 0;
      var dependenciesFulfilled = null;

      function addRunDependency(id) {
        runDependencies++;

        if (Module["monitorRunDependencies"]) {
          Module["monitorRunDependencies"](runDependencies);
        }
      }

      function removeRunDependency(id) {
        runDependencies--;

        if (Module["monitorRunDependencies"]) {
          Module["monitorRunDependencies"](runDependencies);
        }

        if (runDependencies == 0) {

          if (dependenciesFulfilled) {
            var callback = dependenciesFulfilled;
            dependenciesFulfilled = null;
            callback();
          }
        }
      }

      Module["preloadedImages"] = {};
      Module["preloadedAudios"] = {};

      function abort(what) {
        if (Module["onAbort"]) {
          Module["onAbort"](what);
        }

        what += "";
        err(what);
        ABORT = true;
        what = "abort(" + what + "). Build with -s ASSERTIONS=1 for more info.";
        var e = new WebAssembly.RuntimeError(what);
        readyPromiseReject(e);
        throw e;
      }

      function hasPrefix(str, prefix) {
        return String.prototype.startsWith ? str.startsWith(prefix) : str.indexOf(prefix) === 0;
      }

      var dataURIPrefix = "data:application/octet-stream;base64,";

      function isDataURI(filename) {
        return hasPrefix(filename, dataURIPrefix);
      }

      var wasmBinaryFile = "data:application/octet-stream;base64,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QZH+AEkNACADQRBqIAAgAUL///////8/g0KAgICAgIDAAIQiBSAEQYH+AGsQEyADIAAgBUGB/wAgBGsQKSADKQMIIgBCGYinIQIgAykDACADKQMQIAMpAxiEQgBSrYQiBVAgAEL///8PgyIAQoCAgAhUIABCgICACFEbRQRAIAJBAWohAgwBCyAFIABCgICACIWEQgBSDQAgAkEBcSACaiECCyADQSBqJAAgAiABQiCIp0GAgICAeHFyvgtQAQF+AkAgA0HAAHEEQCABIANBQGqthiECQgAhAQwBCyADRQ0AIAIgA60iBIYgAUHAACADa62IhCECIAEgBIYhAQsgACABNwMAIAAgAjcDCAuCCwIFfxB+IwBB4ABrIgQkACACQiCGIAFCIIiEIQ8gA0IvhiEMIANC////////P4MiDkIPhiEQIAIgA4VCgICAgICAgICAf4MhCSACQv///////z+DIgpCIIghESAOQhGIIRIgA0IwiKdB//8BcSEGAkACfyACQjCIp0H//wFxIghBAWtB/f8BTQRAQQAgBkEBa0H+/wFJDQEaCyABUCACQv///////////wCDIgtCgICAgICAwP//AFQgC0KAgICAgIDA//8AURtFBEAgAkKAgICAgIAghCEJDAILQQEgA0L///////////8AgyICQoCAgICAgMD//wBUIAJCgICAgICAwP//AFEbRQRAIANCgICAgICAIIQhCUIAIQEMAgsgASALQoCAgICAgMD//wCFhFAEQCACUARAQoCAgICAgOD//wAhCUIAIQEMAwsgCUKAgICAgIDA//8AhCEJQgAhAQwCCyACQoCAgICAgMD//wCFUARAIAEgC4QhAkIAIQEgAlAEQEKAgICAgIDg//8AIQkMAwsgCUKAgICAgIDA//8AhCEJDAILIAEgC4RQBEBCACEBDAILIAJQBEBCACEBDAILIAtC////////P1gEQCAEQdAAaiABIAogASAKIApQIgUbeSAFQQZ0rXynIgVBD2sQEyAEKQNYIgpCIIYgBCkDUCIBQiCIhCEPIApCIIghEUEQIAVrIQULIAUgAkL///////8/Vg0AGiAEQUBrQgAgDkIAIA4gDlAiBxt5IAdBBnStfKciB0EPaxATIAQpA0giAkIPhiAEKQNAIg1CMYiEIRAgAkIvhiANQhGIhCEMIAJCEYghEiAFIAdrQRBqCyEFIAxC/////w+DIgIgAUL/////D4MiAX4iEyANQg+GQoCA/v8PgyIDIA9C/////w+DIgt+fCINQiCGIg4gASADfnwiDCAOVK0gAiALfiIWIAMgCkL/////D4MiCn58IhQgEEL/////D4MiDiABfnwiECANIBNUrUIghiANQiCIhHwiEyACIAp+IhcgAyARQoCABIQiDX58IhEgCyAOfnwiFSABIBJC/////weDQoCAgIAIhCIPfnwiAUIghnwiEnwhAyAGIAhqIAVqQf//AGshBQJAIAogDn4iGCACIA1+fCICIBhUrSACIAIgCyAPfnwiC1atfCALIAsgFCAWVK0gECAUVK18fCICVq18IA0gD358IAogD34iCyANIA5+fCIKIAtUrUIghiAKQiCIhHwgAiACIApCIIZ8IgJWrXwgAiACIAEgFVStIBEgF1StIBEgFVatfHxCIIYgAUIgiIR8IgFWrXwgASAQIBNWrSASIBNUrXx8IgIgAVStfCIBQoCAgICAgMAAg1BFBEAgBUEBaiEFDAELIAxCP4ghCiABQgGGIAJCP4iEIQEgAkIBhiADQj+IhCECIAxCAYYhDCAKIANCAYaEIQMLIAVB//8BTgRAIAlCgICAgICAwP//AIQhCUIAIQEMAQsCfiAFQQBMBEBBASAFayIGQYABTwRAQgAhAQwDCyAEQTBqIAwgAyAFQf8AaiIFEBMgBEEgaiACIAEgBRATIARBEGogDCADIAYQKSAEIAIgASAGECkgBCkDMCAEKQM4hEIAUq0gBCkDICAEKQMQhIQhDCAEKQMoIAQpAxiEIQMgBCkDACECIAQpAwgMAQsgAUL///////8/gyAFrUIwhoQLIAmEIQkgDFAgA0J/VSADQoCAgICAgICAgH9RG0UEQCAJIAJCAXwiASACVK18IQkMAQsgDCADQoCAgICAgICAgH+FhFBFBEAgAiEBDAELIAkgAiACQgGDfCIBIAJUrXwhCQsgACABNwMAIAAgCTcDCCAEQeAAaiQACxkAIAAgARBFIgBBACAALQAAIAFB/wFxRhsL+QECAn8DfiMAQRBrIgIkAAJ+IAG9IgVC////////////AIMiBEKAgICAgICACH1C/////////+//AFgEQCAEQjyGIQYgBEIEiEKAgICAgICAgDx8DAELIARCgICA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NgIAIAJBEGogBLcgAUHADWooAgAqAky7oiAAKgIUu6IQFiACIAIpAxAgAikDGEKAgICAgICA9T8QFCABQYAOaiACKQMAIAIpAwgQEjgCAAwCCyADQQRMBEAgACABQewBbGoiAUGkD2pBATYCACACQTBqIAS3IAFBwA1qKAIAKgJMu6IgACoCFLuiEBYgAkEgaiACKQMwIAIpAzhCgICAgICAwPU/EBQgAUGADmogAikDICACKQMoEBI4AgAMAgsgACABQewBbGoiAUGkD2ohBSADQfwATgRAIAVBAjYCACACQdAAaiAEtyABQcANaigCACoCTLuiIAAqAhS7ohAWIAJBQGsgAikDUCACKQNYQoCAgICAgMD1PxAUIAFBgA5qIAIpA0AgAikDSBASOAIADAILIAVBADYCACACQfAAaiAEtyABQcANaigCACoCTLuiIAAqAhS7ohAWIAJB4ABqIAIpA3AgAikDeEKAgICAgICA8j8QFCABQYQOaiADsiACKQNgIAIpA2gQEiIGlDgCACABQYAOaiAGQf8AIANrspQ4AgAMAQsgA0GkD2pBAzYCACACQZABaiAEtyADQcANaigCACoCTLuiIAAqAhS7ohAWIAJBgAFqIAIpA5ABIAIpA5gBQoCAgICAgID1PxAUIANBgA5qIAIpA4ABIAIpA4gBEBI4AgALIAJBoAFqJAALTwECfyAAIAFB7AFsaiICQbwNaiEDIAJBwA1qKAIALQBmQcAAcQRAIAJBmA9qQQM2AgAgA0EDOgAAIAAgARAoGiAAIAEQGQ8LIANBAzoAAAsxACAAIAFBKGxqIgBBxAhqQtoANwIAIABB4AhqQQA2AgAgAEHQCGpCgMCAgPAPNwIAC4IEAQN/IAJBgARPBEAgACABIAIQBBogAA8LIAAgAmohAwJAIAAgAXNBA3FFBEACQCACQQFIBEAgACECDAELIABBA3FFBEAgACECDAELIAAhAgNAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIANPDQEgAkEDcQ0ACwsCQCADQXxxIgRBwABJDQAgAiAEQUBqIgVLDQADQCACIAEoAgA2AgAgAiABKAIENgIEIAIgASgCCDYCCCACIAEoAgw2AgwgAiABKAIQNgIQIAIgASgCFDYCFCACIAEoAhg2AhggAiABKAIcNgIcIAIgASgCIDYCICAC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NgIADAULIAAgAi0ABEEobGpB1AhqIAItAAY2AgAMBAsgAi0ABiEDIAAoAoBmIAItAAQiBHZBAXEEQCAAIARBKGxqQbwIaiADNgIADAQLIAAgBEEobGpBwAhqIAM2AgAMAwsgACACLQAEQShsakHICGogAi0ABjYCAAwCCyAAIAItAAQQJiAAKAKYZiECDAELIAAgAi0ABEEobGpBvAhqIAItAAY2AgALIAAgAkEIaiICNgKYZgwBCwsgACgClGYgAkcEQCAAIAJBCGs2AphmCyABIQMLIAAgAzYCoGYLXwEDfwNAIAFBEEZFBEAgACABECYgACgCoAghAyAAIAFBKGxqIgJB3AhqQQI2AgAgAkHMCGpBfzYCACACQcAIaiADNgIAIAJBvAhqQQA2AgAgAUEBaiEBDAELCyAAEDkLIAAgAEEBNgIEIAAgACgCGLJDAADIQpU4AhQgAEEAED8LYwEBfwNAIAIEQCAAQX9BACABKAIAIgNBDXZBgIACcyADQYCAgIB/SBsgA0H/////AEobIgNBGHQgA0EIdEGAgPwHcXJBEHY7AQAgAEECaiEAIAFBBGohASACQQFrIQIMAQsLC2IBAX8DQCACBEAgAEH//wFBgIB+IAEoAgAiA0ENdiADQYCAgIB/SBsgA0H/////AEobIgNBGHQgA0EIdEGAgPwHcXJBEHY7AQAgAEECaiEAIAFBBGohASACQQFrIQIMAQsLC08BAX8DQCACBEAgAEF/QQAgASgCACIDQQ12QYCAAnMgA0GAgICAf0gbIANB/////wBKGzsBACAAQQJqIQAgAUEEaiEBIAJBAWshAgwBCwsLTgEBfwNAIAIEQCAAQf//AUGAgH4gASgCACIDQQ12IANBgICAgH9IGyADQf////8AShs7AQAgAEECaiEAIAFBBGohASACQQFrIQIMAQsLC04BAX8DQCACBEAgAEF/QQAgASgCACIDQRV2QYABcyADQYCAgIB/SBsgA0H/////AEobOgAAIABBAWohACABQQRqIQEgAkEBayECDAELCwtMAQF/A0AgAgRAIABB/wBBgH8gASgCACIDQRV2IANBgICAgH9IGyADQf////8AShs6AAAgAEEBaiEAIAFBBGohASACQQFrIQIMAQsLC+oBAQR/IwBBIGsiAyQAIAAgAUHsAWxqIgBBwA1qKAIALQBk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";

      if (!isDataURI(wasmBinaryFile)) {
        wasmBinaryFile = locateFile(wasmBinaryFile);
      }

      function getBinary(file) {
        try {
          if (file == wasmBinaryFile && wasmBinary) {
            return new Uint8Array(wasmBinary);
          }

          var binary = tryParseAsDataURI(file);

          if (binary) {
            return binary;
          }

          if (readBinary) {
            return readBinary(file);
          } else {
            throw "sync fetching of the wasm failed: you can preload it to Module['wasmBinary'] manually, or emcc.py will do that for you when generating HTML (but not JS)";
          }
        } catch (err) {
          abort(err);
        }
      }

      function instantiateSync(file, info) {
        var instance;
        var module;
        var binary;

        try {
          binary = getBinary(file);
          module = new WebAssembly.Module(binary);
          instance = new WebAssembly.Instance(module, info);
        } catch (e) {
          var str = e.toString();
          err("failed to compile wasm module: " + str);

          if (str.indexOf("imported Memory") >= 0 || str.indexOf("memory import") >= 0) {
            err("Memory size incompatibility issues may be due to changing INITIAL_MEMORY at runtime to something too large. Use ALLOW_MEMORY_GROWTH to allow any size memory (and also make sure not to set INITIAL_MEMORY at runtime to something smaller than it was at compile time).");
          }

          throw e;
        }

        return [instance, module];
      }

      function createWasm() {
        var info = {
          "a": asmLibraryArg
        };

        function receiveInstance(instance, module) {
          var exports = instance.exports;
          Module["asm"] = exports;
          wasmMemory = Module["asm"]["j"];
          updateGlobalBufferAndViews(wasmMemory.buffer);
          wasmTable = Module["asm"]["s"];
          removeRunDependency();
        }

        addRunDependency();

        if (Module["instantiateWasm"]) {
          try {
            var exports = Module["instantiateWasm"](info, receiveInstance);
            return exports;
          } catch (e) {
            err("Module.instantiateWasm callback failed with error: " + e);
            return false;
          }
        }

        var result = instantiateSync(wasmBinaryFile, info);
        receiveInstance(result[0]);
        return Module["asm"];
      }

      var tempDouble;
      var tempI64;

      function callRuntimeCallbacks(callbacks) {
        while (callbacks.length > 0) {
          var callback = callbacks.shift();

          if (typeof callback == "function") {
            callback(Module);
            continue;
          }

          var func = callback.func;

          if (typeof func === "number") {
            if (callback.arg === undefined) {
              wasmTable.get(func)();
            } else {
              wasmTable.get(func)(callback.arg);
            }
          } else {
            func(callback.arg === undefined ? null : callback.arg);
          }
        }
      }

      function setErrNo(value) {
        HEAP32[___errno_location() >> 2] = value;
        return value;
      }

      var PATH = {
        splitPath: function splitPath(filename) {
          var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
          return splitPathRe.exec(filename).slice(1);
        },
        normalizeArray: function normalizeArray(parts, allowAboveRoot) {
          var up = 0;

          for (var i = parts.length - 1; i >= 0; i--) {
            var last = parts[i];

            if (last === ".") {
              parts.splice(i, 1);
            } else if (last === "..") {
              parts.splice(i, 1);
              up++;
            } else if (up) {
              parts.splice(i, 1);
              up--;
            }
          }

          if (allowAboveRoot) {
            for (; up; up--) {
              parts.unshift("..");
            }
          }

          return parts;
        },
        normalize: function normalize(path) {
          var isAbsolute = path.charAt(0) === "/",
              trailingSlash = path.substr(-1) === "/";
          path = PATH.normalizeArray(path.split("/").filter(function (p) {
            return !!p;
          }), !isAbsolute).join("/");

          if (!path && !isAbsolute) {
            path = ".";
          }

          if (path && trailingSlash) {
            path += "/";
          }

          return (isAbsolute ? "/" : "") + path;
        },
        dirname: function dirname(path) {
          var result = PATH.splitPath(path),
              root = result[0],
              dir = result[1];

          if (!root && !dir) {
            return ".";
          }

          if (dir) {
            dir = dir.substr(0, dir.length - 1);
          }

          return root + dir;
        },
        basename: function basename(path) {
          if (path === "/") return "/";
          path = PATH.normalize(path);
          path = path.replace(/\/$/, "");
          var lastSlash = path.lastIndexOf("/");
          if (lastSlash === -1) return path;
          return path.substr(lastSlash + 1);
        },
        extname: function extname(path) {
          return PATH.splitPath(path)[3];
        },
        join: function join() {
          var paths = Array.prototype.slice.call(arguments, 0);
          return PATH.normalize(paths.join("/"));
        },
        join2: function join2(l, r) {
          return PATH.normalize(l + "/" + r);
        }
      };

      function getRandomDevice() {
        if (typeof crypto === "object" && typeof crypto["getRandomValues"] === "function") {
          var randomBuffer = new Uint8Array(1);
          return function () {
            crypto.getRandomValues(randomBuffer);
            return randomBuffer[0];
          };
        } else return function () {
          abort("randomDevice");
        };
      }

      var PATH_FS = {
        resolve: function resolve() {
          var resolvedPath = "",
              resolvedAbsolute = false;

          for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
            var path = i >= 0 ? arguments[i] : FS.cwd();

            if (typeof path !== "string") {
              throw new TypeError("Arguments to path.resolve must be strings");
            } else if (!path) {
              return "";
            }

            resolvedPath = path + "/" + resolvedPath;
            resolvedAbsolute = path.charAt(0) === "/";
          }

          resolvedPath = PATH.normalizeArray(resolvedPath.split("/").filter(function (p) {
            return !!p;
          }), !resolvedAbsolute).join("/");
          return (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
        },
        relative: function relative(from, to) {
          from = PATH_FS.resolve(from).substr(1);
          to = PATH_FS.resolve(to).substr(1);

          function trim(arr) {
            var start = 0;

            for (; start < arr.length; start++) {
              if (arr[start] !== "") break;
            }

            var end = arr.length - 1;

            for (; end >= 0; end--) {
              if (arr[end] !== "") break;
            }

            if (start > end) return [];
            return arr.slice(start, end - start + 1);
          }

          var fromParts = trim(from.split("/"));
          var toParts = trim(to.split("/"));
          var length = Math.min(fromParts.length, toParts.length);
          var samePartsLength = length;

          for (var i = 0; i < length; i++) {
            if (fromParts[i] !== toParts[i]) {
              samePartsLength = i;
              break;
            }
          }

          var outputParts = [];

          for (var i = samePartsLength; i < fromParts.length; i++) {
            outputParts.push("..");
          }

          outputParts = outputParts.concat(toParts.slice(samePartsLength));
          return outputParts.join("/");
        }
      };
      var TTY = {
        ttys: [],
        init: function init() {},
        shutdown: function shutdown() {},
        register: function register(dev, ops) {
          TTY.ttys[dev] = {
            input: [],
            output: [],
            ops: ops
          };
          FS.registerDevice(dev, TTY.stream_ops);
        },
        stream_ops: {
          open: function open(stream) {
            var tty = TTY.ttys[stream.node.rdev];

            if (!tty) {
              throw new FS.ErrnoError(43);
            }

            stream.tty = tty;
            stream.seekable = false;
          },
          close: function close(stream) {
            stream.tty.ops.flush(stream.tty);
          },
          flush: function flush(stream) {
            stream.tty.ops.flush(stream.tty);
          },
          read: function read(stream, buffer, offset, length, pos) {
            if (!stream.tty || !stream.tty.ops.get_char) {
              throw new FS.ErrnoError(60);
            }

            var bytesRead = 0;

            for (var i = 0; i < length; i++) {
              var result;

              try {
                result = stream.tty.ops.get_char(stream.tty);
              } catch (e) {
                throw new FS.ErrnoError(29);
              }

              if (result === undefined && bytesRead === 0) {
                throw new FS.ErrnoError(6);
              }

              if (result === null || result === undefined) break;
              bytesRead++;
              buffer[offset + i] = result;
            }

            if (bytesRead) {
              stream.node.timestamp = Date.now();
            }

            return bytesRead;
          },
          write: function write(stream, buffer, offset, length, pos) {
            if (!stream.tty || !stream.tty.ops.put_char) {
              throw new FS.ErrnoError(60);
            }

            try {
              for (var i = 0; i < length; i++) {
                stream.tty.ops.put_char(stream.tty, buffer[offset + i]);
              }
            } catch (e) {
              throw new FS.ErrnoError(29);
            }

            if (length) {
              stream.node.timestamp = Date.now();
            }

            return i;
          }
        },
        default_tty_ops: {
          get_char: function get_char(tty) {
            if (!tty.input.length) {
              var result = null;

              if (typeof window != "undefined" && typeof window.prompt == "function") {
                result = window.prompt("Input: ");

                if (result !== null) {
                  result += "\n";
                }
              } else if (typeof readline == "function") {
                result = readline();

                if (result !== null) {
                  result += "\n";
                }
              }

              if (!result) {
                return null;
              }

              tty.input = intArrayFromString(result, true);
            }

            return tty.input.shift();
          },
          put_char: function put_char(tty, val) {
            if (val === null || val === 10) {
              out(UTF8ArrayToString(tty.output, 0));
              tty.output = [];
            } else {
              if (val != 0) tty.output.push(val);
            }
          },
          flush: function flush(tty) {
            if (tty.output && tty.output.length > 0) {
              out(UTF8ArrayToString(tty.output, 0));
              tty.output = [];
            }
          }
        },
        default_tty1_ops: {
          put_char: function put_char(tty, val) {
            if (val === null || val === 10) {
              err(UTF8ArrayToString(tty.output, 0));
              tty.output = [];
            } else {
              if (val != 0) tty.output.push(val);
            }
          },
          flush: function flush(tty) {
            if (tty.output && tty.output.length > 0) {
              err(UTF8ArrayToString(tty.output, 0));
              tty.output = [];
            }
          }
        }
      };

      function mmapAlloc(size) {
        var alignedSize = alignMemory(size, 16384);

        var ptr = _malloc(alignedSize);

        while (size < alignedSize) {
          HEAP8[ptr + size++] = 0;
        }

        return ptr;
      }

      var MEMFS = {
        ops_table: null,
        mount: function mount(_mount) {
          return MEMFS.createNode(null, "/", 16384 | 511, 0);
        },
        createNode: function createNode(parent, name, mode, dev) {
          if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
            throw new FS.ErrnoError(63);
          }

          if (!MEMFS.ops_table) {
            MEMFS.ops_table = {
              dir: {
                node: {
                  getattr: MEMFS.node_ops.getattr,
                  setattr: MEMFS.node_ops.setattr,
                  lookup: MEMFS.node_ops.lookup,
                  mknod: MEMFS.node_ops.mknod,
                  rename: MEMFS.node_ops.rename,
                  unlink: MEMFS.node_ops.unlink,
                  rmdir: MEMFS.node_ops.rmdir,
                  readdir: MEMFS.node_ops.readdir,
                  symlink: MEMFS.node_ops.symlink
                },
                stream: {
                  llseek: MEMFS.stream_ops.llseek
                }
              },
              file: {
                node: {
                  getattr: MEMFS.node_ops.getattr,
                  setattr: MEMFS.node_ops.setattr
                },
                stream: {
                  llseek: MEMFS.stream_ops.llseek,
                  read: MEMFS.stream_ops.read,
                  write: MEMFS.stream_ops.write,
                  allocate: MEMFS.stream_ops.allocate,
                  mmap: MEMFS.stream_ops.mmap,
                  msync: MEMFS.stream_ops.msync
                }
              },
              link: {
                node: {
                  getattr: MEMFS.node_ops.getattr,
                  setattr: MEMFS.node_ops.setattr,
                  readlink: MEMFS.node_ops.readlink
                },
                stream: {}
              },
              chrdev: {
                node: {
                  getattr: MEMFS.node_ops.getattr,
                  setattr: MEMFS.node_ops.setattr
                },
                stream: FS.chrdev_stream_ops
              }
            };
          }

          var node = FS.createNode(parent, name, mode, dev);

          if (FS.isDir(node.mode)) {
            node.node_ops = MEMFS.ops_table.dir.node;
            node.stream_ops = MEMFS.ops_table.dir.stream;
            node.contents = {};
          } else if (FS.isFile(node.mode)) {
            node.node_ops = MEMFS.ops_table.file.node;
            node.stream_ops = MEMFS.ops_table.file.stream;
            node.usedBytes = 0;
            node.contents = null;
          } else if (FS.isLink(node.mode)) {
            node.node_ops = MEMFS.ops_table.link.node;
            node.stream_ops = MEMFS.ops_table.link.stream;
          } else if (FS.isChrdev(node.mode)) {
            node.node_ops = MEMFS.ops_table.chrdev.node;
            node.stream_ops = MEMFS.ops_table.chrdev.stream;
          }

          node.timestamp = Date.now();

          if (parent) {
            parent.contents[name] = node;
            parent.timestamp = node.timestamp;
          }

          return node;
        },
        getFileDataAsTypedArray: function getFileDataAsTypedArray(node) {
          if (!node.contents) return new Uint8Array(0);
          if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes);
          return new Uint8Array(node.contents);
        },
        expandFileStorage: function expandFileStorage(node, newCapacity) {
          var prevCapacity = node.contents ? node.contents.length : 0;
          if (prevCapacity >= newCapacity) return;
          var CAPACITY_DOUBLING_MAX = 1024 * 1024;
          newCapacity = Math.max(newCapacity, prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125) >>> 0);
          if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256);
          var oldContents = node.contents;
          node.contents = new Uint8Array(newCapacity);
          if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0);
        },
        resizeFileStorage: function resizeFileStorage(node, newSize) {
          if (node.usedBytes == newSize) return;

          if (newSize == 0) {
            node.contents = null;
            node.usedBytes = 0;
          } else {
            var oldContents = node.contents;
            node.contents = new Uint8Array(newSize);

            if (oldContents) {
              node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes)));
            }

            node.usedBytes = newSize;
          }
        },
        node_ops: {
          getattr: function getattr(node) {
            var attr = {};
            attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
            attr.ino = node.id;
            attr.mode = node.mode;
            attr.nlink = 1;
            attr.uid = 0;
            attr.gid = 0;
            attr.rdev = node.rdev;

            if (FS.isDir(node.mode)) {
              attr.size = 4096;
            } else if (FS.isFile(node.mode)) {
              attr.size = node.usedBytes;
            } else if (FS.isLink(node.mode)) {
              attr.size = node.link.length;
            } else {
              attr.size = 0;
            }

            attr.atime = new Date(node.timestamp);
            attr.mtime = new Date(node.timestamp);
            attr.ctime = new Date(node.timestamp);
            attr.blksize = 4096;
            attr.blocks = Math.ceil(attr.size / attr.blksize);
            return attr;
          },
          setattr: function setattr(node, attr) {
            if (attr.mode !== undefined) {
              node.mode = attr.mode;
            }

            if (attr.timestamp !== undefined) {
              node.timestamp = attr.timestamp;
            }

            if (attr.size !== undefined) {
              MEMFS.resizeFileStorage(node, attr.size);
            }
          },
          lookup: function lookup(parent, name) {
            throw FS.genericErrors[44];
          },
          mknod: function mknod(parent, name, mode, dev) {
            return MEMFS.createNode(parent, name, mode, dev);
          },
          rename: function rename(old_node, new_dir, new_name) {
            if (FS.isDir(old_node.mode)) {
              var new_node;

              try {
                new_node = FS.lookupNode(new_dir, new_name);
              } catch (e) {}

              if (new_node) {
                for (var i in new_node.contents) {
                  throw new FS.ErrnoError(55);
                }
              }
            }

            delete old_node.parent.contents[old_node.name];
            old_node.parent.timestamp = Date.now();
            old_node.name = new_name;
            new_dir.contents[new_name] = old_node;
            new_dir.timestamp = old_node.parent.timestamp;
            old_node.parent = new_dir;
          },
          unlink: function unlink(parent, name) {
            delete parent.contents[name];
            parent.timestamp = Date.now();
          },
          rmdir: function rmdir(parent, name) {
            var node = FS.lookupNode(parent, name);

            for (var i in node.contents) {
              throw new FS.ErrnoError(55);
            }

            delete parent.contents[name];
            parent.timestamp = Date.now();
          },
          readdir: function readdir(node) {
            var entries = [".", ".."];

            for (var key in node.contents) {
              if (!node.contents.hasOwnProperty(key)) {
                continue;
              }

              entries.push(key);
            }

            return entries;
          },
          symlink: function symlink(parent, newname, oldpath) {
            var node = MEMFS.createNode(parent, newname, 511 | 40960, 0);
            node.link = oldpath;
            return node;
          },
          readlink: function readlink(node) {
            if (!FS.isLink(node.mode)) {
              throw new FS.ErrnoError(28);
            }

            return node.link;
          }
        },
        stream_ops: {
          read: function read(stream, buffer, offset, length, position) {
            var contents = stream.node.contents;
            if (position >= stream.node.usedBytes) return 0;
            var size = Math.min(stream.node.usedBytes - position, length);

            if (size > 8 && contents.subarray) {
              buffer.set(contents.subarray(position, position + size), offset);
            } else {
              for (var i = 0; i < size; i++) {
                buffer[offset + i] = contents[position + i];
              }
            }

            return size;
          },
          write: function write(stream, buffer, offset, length, position, canOwn) {
            if (buffer.buffer === HEAP8.buffer) {
              canOwn = false;
            }

            if (!length) return 0;
            var node = stream.node;
            node.timestamp = Date.now();

            if (buffer.subarray && (!node.contents || node.contents.subarray)) {
              if (canOwn) {
                node.contents = buffer.subarray(offset, offset + length);
                node.usedBytes = length;
                return length;
              } else if (node.usedBytes === 0 && position === 0) {
                node.contents = buffer.slice(offset, offset + length);
                node.usedBytes = length;
                return length;
              } else if (position + length <= node.usedBytes) {
                node.contents.set(buffer.subarray(offset, offset + length), position);
                return length;
              }
            }

            MEMFS.expandFileStorage(node, position + length);

            if (node.contents.subarray && buffer.subarray) {
              node.contents.set(buffer.subarray(offset, offset + length), position);
            } else {
              for (var i = 0; i < length; i++) {
                node.contents[position + i] = buffer[offset + i];
              }
            }

            node.usedBytes = Math.max(node.usedBytes, position + length);
            return length;
          },
          llseek: function llseek(stream, offset, whence) {
            var position = offset;

            if (whence === 1) {
              position += stream.position;
            } else if (whence === 2) {
              if (FS.isFile(stream.node.mode)) {
                position += stream.node.usedBytes;
              }
            }

            if (position < 0) {
              throw new FS.ErrnoError(28);
            }

            return position;
          },
          allocate: function allocate(stream, offset, length) {
            MEMFS.expandFileStorage(stream.node, offset + length);
            stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
          },
          mmap: function mmap(stream, address, length, position, prot, flags) {
            if (address !== 0) {
              throw new FS.ErrnoError(28);
            }

            if (!FS.isFile(stream.node.mode)) {
              throw new FS.ErrnoError(43);
            }

            var ptr;
            var allocated;
            var contents = stream.node.contents;

            if (!(flags & 2) && contents.buffer === buffer) {
              allocated = false;
              ptr = contents.byteOffset;
            } else {
              if (position > 0 || position + length < contents.length) {
                if (contents.subarray) {
                  contents = contents.subarray(position, position + length);
                } else {
                  contents = Array.prototype.slice.call(contents, position, position + length);
                }
              }

              allocated = true;
              ptr = mmapAlloc(length);

              if (!ptr) {
                throw new FS.ErrnoError(48);
              }

              HEAP8.set(contents, ptr);
            }

            return {
              ptr: ptr,
              allocated: allocated
            };
          },
          msync: function msync(stream, buffer, offset, length, mmapFlags) {
            if (!FS.isFile(stream.node.mode)) {
              throw new FS.ErrnoError(43);
            }

            if (mmapFlags & 2) {
              return 0;
            }

            MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
            return 0;
          }
        }
      };
      var FS = {
        root: null,
        mounts: [],
        devices: {},
        streams: [],
        nextInode: 1,
        nameTable: null,
        currentPath: "/",
        initialized: false,
        ignorePermissions: true,
        trackingDelegate: {},
        tracking: {
          openFlags: {
            READ: 1,
            WRITE: 2
          }
        },
        ErrnoError: null,
        genericErrors: {},
        filesystems: null,
        syncFSRequests: 0,
        lookupPath: function lookupPath(path, opts) {
          path = PATH_FS.resolve(FS.cwd(), path);
          opts = opts || {};
          if (!path) return {
            path: "",
            node: null
          };
          var defaults = {
            follow_mount: true,
            recurse_count: 0
          };

          for (var key in defaults) {
            if (opts[key] === undefined) {
              opts[key] = defaults[key];
            }
          }

          if (opts.recurse_count > 8) {
            throw new FS.ErrnoError(32);
          }

          var parts = PATH.normalizeArray(path.split("/").filter(function (p) {
            return !!p;
          }), false);
          var current = FS.root;
          var current_path = "/";

          for (var i = 0; i < parts.length; i++) {
            var islast = i === parts.length - 1;

            if (islast && opts.parent) {
              break;
            }

            current = FS.lookupNode(current, parts[i]);
            current_path = PATH.join2(current_path, parts[i]);

            if (FS.isMountpoint(current)) {
              if (!islast || islast && opts.follow_mount) {
                current = current.mounted.root;
              }
            }

            if (!islast || opts.follow) {
              var count = 0;

              while (FS.isLink(current.mode)) {
                var link = FS.readlink(current_path);
                current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
                var lookup = FS.lookupPath(current_path, {
                  recurse_count: opts.recurse_count
                });
                current = lookup.node;

                if (count++ > 40) {
                  throw new FS.ErrnoError(32);
                }
              }
            }
          }

          return {
            path: current_path,
            node: current
          };
        },
        getPath: function getPath(node) {
          var path;

          while (true) {
            if (FS.isRoot(node)) {
              var mount = node.mount.mountpoint;
              if (!path) return mount;
              return mount[mount.length - 1] !== "/" ? mount + "/" + path : mount + path;
            }

            path = path ? node.name + "/" + path : node.name;
            node = node.parent;
          }
        },
        hashName: function hashName(parentid, name) {
          var hash = 0;

          for (var i = 0; i < name.length; i++) {
            hash = (hash << 5) - hash + name.charCodeAt(i) | 0;
          }

          return (parentid + hash >>> 0) % FS.nameTable.length;
        },
        hashAddNode: function hashAddNode(node) {
          var hash = FS.hashName(node.parent.id, node.name);
          node.name_next = FS.nameTable[hash];
          FS.nameTable[hash] = node;
        },
        hashRemoveNode: function hashRemoveNode(node) {
          var hash = FS.hashName(node.parent.id, node.name);

          if (FS.nameTable[hash] === node) {
            FS.nameTable[hash] = node.name_next;
          } else {
            var current = FS.nameTable[hash];

            while (current) {
              if (current.name_next === node) {
                current.name_next = node.name_next;
                break;
              }

              current = current.name_next;
            }
          }
        },
        lookupNode: function lookupNode(parent, name) {
          var errCode = FS.mayLookup(parent);

          if (errCode) {
            throw new FS.ErrnoError(errCode, parent);
          }

          var hash = FS.hashName(parent.id, name);

          for (var node = FS.nameTable[hash]; node; node = node.name_next) {
            var nodeName = node.name;

            if (node.parent.id === parent.id && nodeName === name) {
              return node;
            }
          }

          return FS.lookup(parent, name);
        },
        createNode: function createNode(parent, name, mode, rdev) {
          var node = new FS.FSNode(parent, name, mode, rdev);
          FS.hashAddNode(node);
          return node;
        },
        destroyNode: function destroyNode(node) {
          FS.hashRemoveNode(node);
        },
        isRoot: function isRoot(node) {
          return node === node.parent;
        },
        isMountpoint: function isMountpoint(node) {
          return !!node.mounted;
        },
        isFile: function isFile(mode) {
          return (mode & 61440) === 32768;
        },
        isDir: function isDir(mode) {
          return (mode & 61440) === 16384;
        },
        isLink: function isLink(mode) {
          return (mode & 61440) === 40960;
        },
        isChrdev: function isChrdev(mode) {
          return (mode & 61440) === 8192;
        },
        isBlkdev: function isBlkdev(mode) {
          return (mode & 61440) === 24576;
        },
        isFIFO: function isFIFO(mode) {
          return (mode & 61440) === 4096;
        },
        isSocket: function isSocket(mode) {
          return (mode & 49152) === 49152;
        },
        flagModes: {
          "r": 0,
          "r+": 2,
          "w": 577,
          "w+": 578,
          "a": 1089,
          "a+": 1090
        },
        modeStringToFlags: function modeStringToFlags(str) {
          var flags = FS.flagModes[str];

          if (typeof flags === "undefined") {
            throw new Error("Unknown file open mode: " + str);
          }

          return flags;
        },
        flagsToPermissionString: function flagsToPermissionString(flag) {
          var perms = ["r", "w", "rw"][flag & 3];

          if (flag & 512) {
            perms += "w";
          }

          return perms;
        },
        nodePermissions: function nodePermissions(node, perms) {
          if (FS.ignorePermissions) {
            return 0;
          }

          if (perms.indexOf("r") !== -1 && !(node.mode & 292)) {
            return 2;
          } else if (perms.indexOf("w") !== -1 && !(node.mode & 146)) {
            return 2;
          } else if (perms.indexOf("x") !== -1 && !(node.mode & 73)) {
            return 2;
          }

          return 0;
        },
        mayLookup: function mayLookup(dir) {
          var errCode = FS.nodePermissions(dir, "x");
          if (errCode) return errCode;
          if (!dir.node_ops.lookup) return 2;
          return 0;
        },
        mayCreate: function mayCreate(dir, name) {
          try {
            var node = FS.lookupNode(dir, name);
            return 20;
          } catch (e) {}

          return FS.nodePermissions(dir, "wx");
        },
        mayDelete: function mayDelete(dir, name, isdir) {
          var node;

          try {
            node = FS.lookupNode(dir, name);
          } catch (e) {
            return e.errno;
          }

          var errCode = FS.nodePermissions(dir, "wx");

          if (errCode) {
            return errCode;
          }

          if (isdir) {
            if (!FS.isDir(node.mode)) {
              return 54;
            }

            if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
              return 10;
            }
          } else {
            if (FS.isDir(node.mode)) {
              return 31;
            }
          }

          return 0;
        },
        mayOpen: function mayOpen(node, flags) {
          if (!node) {
            return 44;
          }

          if (FS.isLink(node.mode)) {
            return 32;
          } else if (FS.isDir(node.mode)) {
            if (FS.flagsToPermissionString(flags) !== "r" || flags & 512) {
              return 31;
            }
          }

          return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
        },
        MAX_OPEN_FDS: 4096,
        nextfd: function nextfd(fd_start, fd_end) {
          fd_start = fd_start || 0;
          fd_end = fd_end || FS.MAX_OPEN_FDS;

          for (var fd = fd_start; fd <= fd_end; fd++) {
            if (!FS.streams[fd]) {
              return fd;
            }
          }

          throw new FS.ErrnoError(33);
        },
        getStream: function getStream(fd) {
          return FS.streams[fd];
        },
        createStream: function createStream(stream, fd_start, fd_end) {
          if (!FS.FSStream) {
            FS.FSStream = function () {};

            FS.FSStream.prototype = {
              object: {
                get: function get() {
                  return this.node;
                },
                set: function set(val) {
                  this.node = val;
                }
              },
              isRead: {
                get: function get() {
                  return (this.flags & 2097155) !== 1;
                }
              },
              isWrite: {
                get: function get() {
                  return (this.flags & 2097155) !== 0;
                }
              },
              isAppend: {
                get: function get() {
                  return this.flags & 1024;
                }
              }
            };
          }

          var newStream = new FS.FSStream();

          for (var p in stream) {
            newStream[p] = stream[p];
          }

          stream = newStream;
          var fd = FS.nextfd(fd_start, fd_end);
          stream.fd = fd;
          FS.streams[fd] = stream;
          return stream;
        },
        closeStream: function closeStream(fd) {
          FS.streams[fd] = null;
        },
        chrdev_stream_ops: {
          open: function open(stream) {
            var device = FS.getDevice(stream.node.rdev);
            stream.stream_ops = device.stream_ops;

            if (stream.stream_ops.open) {
              stream.stream_ops.open(stream);
            }
          },
          llseek: function llseek() {
            throw new FS.ErrnoError(70);
          }
        },
        major: function major(dev) {
          return dev >> 8;
        },
        minor: function minor(dev) {
          return dev & 255;
        },
        makedev: function makedev(ma, mi) {
          return ma << 8 | mi;
        },
        registerDevice: function registerDevice(dev, ops) {
          FS.devices[dev] = {
            stream_ops: ops
          };
        },
        getDevice: function getDevice(dev) {
          return FS.devices[dev];
        },
        getMounts: function getMounts(mount) {
          var mounts = [];
          var check = [mount];

          while (check.length) {
            var m = check.pop();
            mounts.push(m);
            check.push.apply(check, m.mounts);
          }

          return mounts;
        },
        syncfs: function syncfs(populate, callback) {
          if (typeof populate === "function") {
            callback = populate;
            populate = false;
          }

          FS.syncFSRequests++;

          if (FS.syncFSRequests > 1) {
            err("warning: " + FS.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
          }

          var mounts = FS.getMounts(FS.root.mount);
          var completed = 0;

          function doCallback(errCode) {
            FS.syncFSRequests--;
            return callback(errCode);
          }

          function done(errCode) {
            if (errCode) {
              if (!done.errored) {
                done.errored = true;
                return doCallback(errCode);
              }

              return;
            }

            if (++completed >= mounts.length) {
              doCallback(null);
            }
          }

          mounts.forEach(function (mount) {
            if (!mount.type.syncfs) {
              return done(null);
            }

            mount.type.syncfs(mount, populate, done);
          });
        },
        mount: function mount(type, opts, mountpoint) {
          var root = mountpoint === "/";
          var pseudo = !mountpoint;
          var node;

          if (root && FS.root) {
            throw new FS.ErrnoError(10);
          } else if (!root && !pseudo) {
            var lookup = FS.lookupPath(mountpoint, {
              follow_mount: false
            });
            mountpoint = lookup.path;
            node = lookup.node;

            if (FS.isMountpoint(node)) {
              throw new FS.ErrnoError(10);
            }

            if (!FS.isDir(node.mode)) {
              throw new FS.ErrnoError(54);
            }
          }

          var mount = {
            type: type,
            opts: opts,
            mountpoint: mountpoint,
            mounts: []
          };
          var mountRoot = type.mount(mount);
          mountRoot.mount = mount;
          mount.root = mountRoot;

          if (root) {
            FS.root = mountRoot;
          } else if (node) {
            node.mounted = mount;

            if (node.mount) {
              node.mount.mounts.push(mount);
            }
          }

          return mountRoot;
        },
        unmount: function unmount(mountpoint) {
          var lookup = FS.lookupPath(mountpoint, {
            follow_mount: false
          });

          if (!FS.isMountpoint(lookup.node)) {
            throw new FS.ErrnoError(28);
          }

          var node = lookup.node;
          var mount = node.mounted;
          var mounts = FS.getMounts(mount);
          Object.keys(FS.nameTable).forEach(function (hash) {
            var current = FS.nameTable[hash];

            while (current) {
              var next = current.name_next;

              if (mounts.indexOf(current.mount) !== -1) {
                FS.destroyNode(current);
              }

              current = next;
            }
          });
          node.mounted = null;
          var idx = node.mount.mounts.indexOf(mount);
          node.mount.mounts.splice(idx, 1);
        },
        lookup: function lookup(parent, name) {
          return parent.node_ops.lookup(parent, name);
        },
        mknod: function mknod(path, mode, dev) {
          var lookup = FS.lookupPath(path, {
            parent: true
          });
          var parent = lookup.node;
          var name = PATH.basename(path);

          if (!name || name === "." || name === "..") {
            throw new FS.ErrnoError(28);
          }

          var errCode = FS.mayCreate(parent, name);

          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }

          if (!parent.node_ops.mknod) {
            throw new FS.ErrnoError(63);
          }

          return parent.node_ops.mknod(parent, name, mode, dev);
        },
        create: function create(path, mode) {
          mode = mode !== undefined ? mode : 438;
          mode &= 4095;
          mode |= 32768;
          return FS.mknod(path, mode, 0);
        },
        mkdir: function mkdir(path, mode) {
          mode = mode !== undefined ? mode : 511;
          mode &= 511 | 512;
          mode |= 16384;
          return FS.mknod(path, mode, 0);
        },
        mkdirTree: function mkdirTree(path, mode) {
          var dirs = path.split("/");
          var d = "";

          for (var i = 0; i < dirs.length; ++i) {
            if (!dirs[i]) continue;
            d += "/" + dirs[i];

            try {
              FS.mkdir(d, mode);
            } catch (e) {
              if (e.errno != 20) throw e;
            }
          }
        },
        mkdev: function mkdev(path, mode, dev) {
          if (typeof dev === "undefined") {
            dev = mode;
            mode = 438;
          }

          mode |= 8192;
          return FS.mknod(path, mode, dev);
        },
        symlink: function symlink(oldpath, newpath) {
          if (!PATH_FS.resolve(oldpath)) {
            throw new FS.ErrnoError(44);
          }

          var lookup = FS.lookupPath(newpath, {
            parent: true
          });
          var parent = lookup.node;

          if (!parent) {
            throw new FS.ErrnoError(44);
          }

          var newname = PATH.basename(newpath);
          var errCode = FS.mayCreate(parent, newname);

          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }

          if (!parent.node_ops.symlink) {
            throw new FS.ErrnoError(63);
          }

          return parent.node_ops.symlink(parent, newname, oldpath);
        },
        rename: function rename(old_path, new_path) {
          var old_dirname = PATH.dirname(old_path);
          var new_dirname = PATH.dirname(new_path);
          var old_name = PATH.basename(old_path);
          var new_name = PATH.basename(new_path);
          var lookup, old_dir, new_dir;
          lookup = FS.lookupPath(old_path, {
            parent: true
          });
          old_dir = lookup.node;
          lookup = FS.lookupPath(new_path, {
            parent: true
          });
          new_dir = lookup.node;
          if (!old_dir || !new_dir) throw new FS.ErrnoError(44);

          if (old_dir.mount !== new_dir.mount) {
            throw new FS.ErrnoError(75);
          }

          var old_node = FS.lookupNode(old_dir, old_name);
          var relative = PATH_FS.relative(old_path, new_dirname);

          if (relative.charAt(0) !== ".") {
            throw new FS.ErrnoError(28);
          }

          relative = PATH_FS.relative(new_path, old_dirname);

          if (relative.charAt(0) !== ".") {
            throw new FS.ErrnoError(55);
          }

          var new_node;

          try {
            new_node = FS.lookupNode(new_dir, new_name);
          } catch (e) {}

          if (old_node === new_node) {
            return;
          }

          var isdir = FS.isDir(old_node.mode);
          var errCode = FS.mayDelete(old_dir, old_name, isdir);

          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }

          errCode = new_node ? FS.mayDelete(new_dir, new_name, isdir) : FS.mayCreate(new_dir, new_name);

          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }

          if (!old_dir.node_ops.rename) {
            throw new FS.ErrnoError(63);
          }

          if (FS.isMountpoint(old_node) || new_node && FS.isMountpoint(new_node)) {
            throw new FS.ErrnoError(10);
          }

          if (new_dir !== old_dir) {
            errCode = FS.nodePermissions(old_dir, "w");

            if (errCode) {
              throw new FS.ErrnoError(errCode);
            }
          }

          try {
            if (FS.trackingDelegate["willMovePath"]) {
              FS.trackingDelegate["willMovePath"](old_path, new_path);
            }
          } catch (e) {
            err("FS.trackingDelegate['willMovePath']('" + old_path + "', '" + new_path + "') threw an exception: " + e.message);
          }

          FS.hashRemoveNode(old_node);

          try {
            old_dir.node_ops.rename(old_node, new_dir, new_name);
          } catch (e) {
            throw e;
          } finally {
            FS.hashAddNode(old_node);
          }

          try {
            if (FS.trackingDelegate["onMovePath"]) FS.trackingDelegate["onMovePath"](old_path, new_path);
          } catch (e) {
            err("FS.trackingDelegate['onMovePath']('" + old_path + "', '" + new_path + "') threw an exception: " + e.message);
          }
        },
        rmdir: function rmdir(path) {
          var lookup = FS.lookupPath(path, {
            parent: true
          });
          var parent = lookup.node;
          var name = PATH.basename(path);
          var node = FS.lookupNode(parent, name);
          var errCode = FS.mayDelete(parent, name, true);

          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }

          if (!parent.node_ops.rmdir) {
            throw new FS.ErrnoError(63);
          }

          if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10);
          }

          try {
            if (FS.trackingDelegate["willDeletePath"]) {
              FS.trackingDelegate["willDeletePath"](path);
            }
          } catch (e) {
            err("FS.trackingDelegate['willDeletePath']('" + path + "') threw an exception: " + e.message);
          }

          parent.node_ops.rmdir(parent, name);
          FS.destroyNode(node);

          try {
            if (FS.trackingDelegate["onDeletePath"]) FS.trackingDelegate["onDeletePath"](path);
          } catch (e) {
            err("FS.trackingDelegate['onDeletePath']('" + path + "') threw an exception: " + e.message);
          }
        },
        readdir: function readdir(path) {
          var lookup = FS.lookupPath(path, {
            follow: true
          });
          var node = lookup.node;

          if (!node.node_ops.readdir) {
            throw new FS.ErrnoError(54);
          }

          return node.node_ops.readdir(node);
        },
        unlink: function unlink(path) {
          var lookup = FS.lookupPath(path, {
            parent: true
          });
          var parent = lookup.node;
          var name = PATH.basename(path);
          var node = FS.lookupNode(parent, name);
          var errCode = FS.mayDelete(parent, name, false);

          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }

          if (!parent.node_ops.unlink) {
            throw new FS.ErrnoError(63);
          }

          if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10);
          }

          try {
            if (FS.trackingDelegate["willDeletePath"]) {
              FS.trackingDelegate["willDeletePath"](path);
            }
          } catch (e) {
            err("FS.trackingDelegate['willDeletePath']('" + path + "') threw an exception: " + e.message);
          }

          parent.node_ops.unlink(parent, name);
          FS.destroyNode(node);

          try {
            if (FS.trackingDelegate["onDeletePath"]) FS.trackingDelegate["onDeletePath"](path);
          } catch (e) {
            err("FS.trackingDelegate['onDeletePath']('" + path + "') threw an exception: " + e.message);
          }
        },
        readlink: function readlink(path) {
          var lookup = FS.lookupPath(path);
          var link = lookup.node;

          if (!link) {
            throw new FS.ErrnoError(44);
          }

          if (!link.node_ops.readlink) {
            throw new FS.ErrnoError(28);
          }

          return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
        },
        stat: function stat(path, dontFollow) {
          var lookup = FS.lookupPath(path, {
            follow: !dontFollow
          });
          var node = lookup.node;

          if (!node) {
            throw new FS.ErrnoError(44);
          }

          if (!node.node_ops.getattr) {
            throw new FS.ErrnoError(63);
          }

          return node.node_ops.getattr(node);
        },
        lstat: function lstat(path) {
          return FS.stat(path, true);
        },
        chmod: function chmod(path, mode, dontFollow) {
          var node;

          if (typeof path === "string") {
            var lookup = FS.lookupPath(path, {
              follow: !dontFollow
            });
            node = lookup.node;
          } else {
            node = path;
          }

          if (!node.node_ops.setattr) {
            throw new FS.ErrnoError(63);
          }

          node.node_ops.setattr(node, {
            mode: mode & 4095 | node.mode & ~4095,
            timestamp: Date.now()
          });
        },
        lchmod: function lchmod(path, mode) {
          FS.chmod(path, mode, true);
        },
        fchmod: function fchmod(fd, mode) {
          var stream = FS.getStream(fd);

          if (!stream) {
            throw new FS.ErrnoError(8);
          }

          FS.chmod(stream.node, mode);
        },
        chown: function chown(path, uid, gid, dontFollow) {
          var node;

          if (typeof path === "string") {
            var lookup = FS.lookupPath(path, {
              follow: !dontFollow
            });
            node = lookup.node;
          } else {
            node = path;
          }

          if (!node.node_ops.setattr) {
            throw new FS.ErrnoError(63);
          }

          node.node_ops.setattr(node, {
            timestamp: Date.now()
          });
        },
        lchown: function lchown(path, uid, gid) {
          FS.chown(path, uid, gid, true);
        },
        fchown: function fchown(fd, uid, gid) {
          var stream = FS.getStream(fd);

          if (!stream) {
            throw new FS.ErrnoError(8);
          }

          FS.chown(stream.node, uid, gid);
        },
        truncate: function truncate(path, len) {
          if (len < 0) {
            throw new FS.ErrnoError(28);
          }

          var node;

          if (typeof path === "string") {
            var lookup = FS.lookupPath(path, {
              follow: true
            });
            node = lookup.node;
          } else {
            node = path;
          }

          if (!node.node_ops.setattr) {
            throw new FS.ErrnoError(63);
          }

          if (FS.isDir(node.mode)) {
            throw new FS.ErrnoError(31);
          }

          if (!FS.isFile(node.mode)) {
            throw new FS.ErrnoError(28);
          }

          var errCode = FS.nodePermissions(node, "w");

          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }

          node.node_ops.setattr(node, {
            size: len,
            timestamp: Date.now()
          });
        },
        ftruncate: function ftruncate(fd, len) {
          var stream = FS.getStream(fd);

          if (!stream) {
            throw new FS.ErrnoError(8);
          }

          if ((stream.flags & 2097155) === 0) {
            throw new FS.ErrnoError(28);
          }

          FS.truncate(stream.node, len);
        },
        utime: function utime(path, atime, mtime) {
          var lookup = FS.lookupPath(path, {
            follow: true
          });
          var node = lookup.node;
          node.node_ops.setattr(node, {
            timestamp: Math.max(atime, mtime)
          });
        },
        open: function open(path, flags, mode, fd_start, fd_end) {
          if (path === "") {
            throw new FS.ErrnoError(44);
          }

          flags = typeof flags === "string" ? FS.modeStringToFlags(flags) : flags;
          mode = typeof mode === "undefined" ? 438 : mode;

          if (flags & 64) {
            mode = mode & 4095 | 32768;
          } else {
            mode = 0;
          }

          var node;

          if (typeof path === "object") {
            node = path;
          } else {
            path = PATH.normalize(path);

            try {
              var lookup = FS.lookupPath(path, {
                follow: !(flags & 131072)
              });
              node = lookup.node;
            } catch (e) {}
          }

          var created = false;

          if (flags & 64) {
            if (node) {
              if (flags & 128) {
                throw new FS.ErrnoError(20);
              }
            } else {
              node = FS.mknod(path, mode, 0);
              created = true;
            }
          }

          if (!node) {
            throw new FS.ErrnoError(44);
          }

          if (FS.isChrdev(node.mode)) {
            flags &= ~512;
          }

          if (flags & 65536 && !FS.isDir(node.mode)) {
            throw new FS.ErrnoError(54);
          }

          if (!created) {
            var errCode = FS.mayOpen(node, flags);

            if (errCode) {
              throw new FS.ErrnoError(errCode);
            }
          }

          if (flags & 512) {
            FS.truncate(node, 0);
          }

          flags &= ~(128 | 512 | 131072);
          var stream = FS.createStream({
            node: node,
            path: FS.getPath(node),
            flags: flags,
            seekable: true,
            position: 0,
            stream_ops: node.stream_ops,
            ungotten: [],
            error: false
          }, fd_start, fd_end);

          if (stream.stream_ops.open) {
            stream.stream_ops.open(stream);
          }

          if (Module["logReadFiles"] && !(flags & 1)) {
            if (!FS.readFiles) FS.readFiles = {};

            if (!(path in FS.readFiles)) {
              FS.readFiles[path] = 1;
              err("FS.trackingDelegate error on read file: " + path);
            }
          }

          try {
            if (FS.trackingDelegate["onOpenFile"]) {
              var trackingFlags = 0;

              if ((flags & 2097155) !== 1) {
                trackingFlags |= FS.tracking.openFlags.READ;
              }

              if ((flags & 2097155) !== 0) {
                trackingFlags |= FS.tracking.openFlags.WRITE;
              }

              FS.trackingDelegate["onOpenFile"](path, trackingFlags);
            }
          } catch (e) {
            err("FS.trackingDelegate['onOpenFile']('" + path + "', flags) threw an exception: " + e.message);
          }

          return stream;
        },
        close: function close(stream) {
          if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8);
          }

          if (stream.getdents) stream.getdents = null;

          try {
            if (stream.stream_ops.close) {
              stream.stream_ops.close(stream);
            }
          } catch (e) {
            throw e;
          } finally {
            FS.closeStream(stream.fd);
          }

          stream.fd = null;
        },
        isClosed: function isClosed(stream) {
          return stream.fd === null;
        },
        llseek: function llseek(stream, offset, whence) {
          if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8);
          }

          if (!stream.seekable || !stream.stream_ops.llseek) {
            throw new FS.ErrnoError(70);
          }

          if (whence != 0 && whence != 1 && whence != 2) {
            throw new FS.ErrnoError(28);
          }

          stream.position = stream.stream_ops.llseek(stream, offset, whence);
          stream.ungotten = [];
          return stream.position;
        },
        read: function read(stream, buffer, offset, length, position) {
          if (length < 0 || position < 0) {
            throw new FS.ErrnoError(28);
          }

          if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8);
          }

          if ((stream.flags & 2097155) === 1) {
            throw new FS.ErrnoError(8);
          }

          if (FS.isDir(stream.node.mode)) {
            throw new FS.ErrnoError(31);
          }

          if (!stream.stream_ops.read) {
            throw new FS.ErrnoError(28);
          }

          var seeking = typeof position !== "undefined";

          if (!seeking) {
            position = stream.position;
          } else if (!stream.seekable) {
            throw new FS.ErrnoError(70);
          }

          var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
          if (!seeking) stream.position += bytesRead;
          return bytesRead;
        },
        write: function write(stream, buffer, offset, length, position, canOwn) {
          if (length < 0 || position < 0) {
            throw new FS.ErrnoError(28);
          }

          if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8);
          }

          if ((stream.flags & 2097155) === 0) {
            throw new FS.ErrnoError(8);
          }

          if (FS.isDir(stream.node.mode)) {
            throw new FS.ErrnoError(31);
          }

          if (!stream.stream_ops.write) {
            throw new FS.ErrnoError(28);
          }

          if (stream.seekable && stream.flags & 1024) {
            FS.llseek(stream, 0, 2);
          }

          var seeking = typeof position !== "undefined";

          if (!seeking) {
            position = stream.position;
          } else if (!stream.seekable) {
            throw new FS.ErrnoError(70);
          }

          var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
          if (!seeking) stream.position += bytesWritten;

          try {
            if (stream.path && FS.trackingDelegate["onWriteToFile"]) FS.trackingDelegate["onWriteToFile"](stream.path);
          } catch (e) {
            err("FS.trackingDelegate['onWriteToFile']('" + stream.path + "') threw an exception: " + e.message);
          }

          return bytesWritten;
        },
        allocate: function allocate(stream, offset, length) {
          if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8);
          }

          if (offset < 0 || length <= 0) {
            throw new FS.ErrnoError(28);
          }

          if ((stream.flags & 2097155) === 0) {
            throw new FS.ErrnoError(8);
          }

          if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }

          if (!stream.stream_ops.allocate) {
            throw new FS.ErrnoError(138);
          }

          stream.stream_ops.allocate(stream, offset, length);
        },
        mmap: function mmap(stream, address, length, position, prot, flags) {
          if ((prot & 2) !== 0 && (flags & 2) === 0 && (stream.flags & 2097155) !== 2) {
            throw new FS.ErrnoError(2);
          }

          if ((stream.flags & 2097155) === 1) {
            throw new FS.ErrnoError(2);
          }

          if (!stream.stream_ops.mmap) {
            throw new FS.ErrnoError(43);
          }

          return stream.stream_ops.mmap(stream, address, length, position, prot, flags);
        },
        msync: function msync(stream, buffer, offset, length, mmapFlags) {
          if (!stream || !stream.stream_ops.msync) {
            return 0;
          }

          return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
        },
        munmap: function munmap(stream) {
          return 0;
        },
        ioctl: function ioctl(stream, cmd, arg) {
          if (!stream.stream_ops.ioctl) {
            throw new FS.ErrnoError(59);
          }

          return stream.stream_ops.ioctl(stream, cmd, arg);
        },
        readFile: function readFile(path, opts) {
          opts = opts || {};
          opts.flags = opts.flags || 0;
          opts.encoding = opts.encoding || "binary";

          if (opts.encoding !== "utf8" && opts.encoding !== "binary") {
            throw new Error('Invalid encoding type "' + opts.encoding + '"');
          }

          var ret;
          var stream = FS.open(path, opts.flags);
          var stat = FS.stat(path);
          var length = stat.size;
          var buf = new Uint8Array(length);
          FS.read(stream, buf, 0, length, 0);

          if (opts.encoding === "utf8") {
            ret = UTF8ArrayToString(buf, 0);
          } else if (opts.encoding === "binary") {
            ret = buf;
          }

          FS.close(stream);
          return ret;
        },
        writeFile: function writeFile(path, data, opts) {
          opts = opts || {};
          opts.flags = opts.flags || 577;
          var stream = FS.open(path, opts.flags, opts.mode);

          if (typeof data === "string") {
            var buf = new Uint8Array(lengthBytesUTF8(data) + 1);
            var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
            FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn);
          } else if (ArrayBuffer.isView(data)) {
            FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
          } else {
            throw new Error("Unsupported data type");
          }

          FS.close(stream);
        },
        cwd: function cwd() {
          return FS.currentPath;
        },
        chdir: function chdir(path) {
          var lookup = FS.lookupPath(path, {
            follow: true
          });

          if (lookup.node === null) {
            throw new FS.ErrnoError(44);
          }

          if (!FS.isDir(lookup.node.mode)) {
            throw new FS.ErrnoError(54);
          }

          var errCode = FS.nodePermissions(lookup.node, "x");

          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }

          FS.currentPath = lookup.path;
        },
        createDefaultDirectories: function createDefaultDirectories() {
          FS.mkdir("/tmp");
          FS.mkdir("/home");
          FS.mkdir("/home/web_user");
        },
        createDefaultDevices: function createDefaultDevices() {
          FS.mkdir("/dev");
          FS.registerDevice(FS.makedev(1, 3), {
            read: function read() {
              return 0;
            },
            write: function write(stream, buffer, offset, length, pos) {
              return length;
            }
          });
          FS.mkdev("/dev/null", FS.makedev(1, 3));
          TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
          TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
          FS.mkdev("/dev/tty", FS.makedev(5, 0));
          FS.mkdev("/dev/tty1", FS.makedev(6, 0));
          var random_device = getRandomDevice();
          FS.createDevice("/dev", "random", random_device);
          FS.createDevice("/dev", "urandom", random_device);
          FS.mkdir("/dev/shm");
          FS.mkdir("/dev/shm/tmp");
        },
        createSpecialDirectories: function createSpecialDirectories() {
          FS.mkdir("/proc");
          var proc_self = FS.mkdir("/proc/self");
          FS.mkdir("/proc/self/fd");
          FS.mount({
            mount: function mount() {
              var node = FS.createNode(proc_self, "fd", 16384 | 511, 73);
              node.node_ops = {
                lookup: function lookup(parent, name) {
                  var fd = +name;
                  var stream = FS.getStream(fd);
                  if (!stream) throw new FS.ErrnoError(8);
                  var ret = {
                    parent: null,
                    mount: {
                      mountpoint: "fake"
                    },
                    node_ops: {
                      readlink: function readlink() {
                        return stream.path;
                      }
                    }
                  };
                  ret.parent = ret;
                  return ret;
                }
              };
              return node;
            }
          }, {}, "/proc/self/fd");
        },
        createStandardStreams: function createStandardStreams() {
          if (Module["stdin"]) {
            FS.createDevice("/dev", "stdin", Module["stdin"]);
          } else {
            FS.symlink("/dev/tty", "/dev/stdin");
          }

          if (Module["stdout"]) {
            FS.createDevice("/dev", "stdout", null, Module["stdout"]);
          } else {
            FS.symlink("/dev/tty", "/dev/stdout");
          }

          if (Module["stderr"]) {
            FS.createDevice("/dev", "stderr", null, Module["stderr"]);
          } else {
            FS.symlink("/dev/tty1", "/dev/stderr");
          }

          FS.open("/dev/stdin", 0);
          FS.open("/dev/stdout", 1);
          FS.open("/dev/stderr", 1);
        },
        ensureErrnoError: function ensureErrnoError() {
          if (FS.ErrnoError) return;

          FS.ErrnoError = function ErrnoError(errno, node) {
            this.node = node;

            this.setErrno = function (errno) {
              this.errno = errno;
            };

            this.setErrno(errno);
            this.message = "FS error";
          };

          FS.ErrnoError.prototype = new Error();
          FS.ErrnoError.prototype.constructor = FS.ErrnoError;
          [44].forEach(function (code) {
            FS.genericErrors[code] = new FS.ErrnoError(code);
            FS.genericErrors[code].stack = "<generic error, no stack>";
          });
        },
        staticInit: function staticInit() {
          FS.ensureErrnoError();
          FS.nameTable = new Array(4096);
          FS.mount(MEMFS, {}, "/");
          FS.createDefaultDirectories();
          FS.createDefaultDevices();
          FS.createSpecialDirectories();
          FS.filesystems = {
            "MEMFS": MEMFS
          };
        },
        init: function init(input, output, error) {
          FS.init.initialized = true;
          FS.ensureErrnoError();
          Module["stdin"] = input || Module["stdin"];
          Module["stdout"] = output || Module["stdout"];
          Module["stderr"] = error || Module["stderr"];
          FS.createStandardStreams();
        },
        quit: function quit() {
          FS.init.initialized = false;
          var fflush = Module["_fflush"];
          if (fflush) fflush(0);

          for (var i = 0; i < FS.streams.length; i++) {
            var stream = FS.streams[i];

            if (!stream) {
              continue;
            }

            FS.close(stream);
          }
        },
        getMode: function getMode(canRead, canWrite) {
          var mode = 0;
          if (canRead) mode |= 292 | 73;
          if (canWrite) mode |= 146;
          return mode;
        },
        findObject: function findObject(path, dontResolveLastLink) {
          var ret = FS.analyzePath(path, dontResolveLastLink);

          if (ret.exists) {
            return ret.object;
          } else {
            return null;
          }
        },
        analyzePath: function analyzePath(path, dontResolveLastLink) {
          try {
            var lookup = FS.lookupPath(path, {
              follow: !dontResolveLastLink
            });
            path = lookup.path;
          } catch (e) {}

          var ret = {
            isRoot: false,
            exists: false,
            error: 0,
            name: null,
            path: null,
            object: null,
            parentExists: false,
            parentPath: null,
            parentObject: null
          };

          try {
            var lookup = FS.lookupPath(path, {
              parent: true
            });
            ret.parentExists = true;
            ret.parentPath = lookup.path;
            ret.parentObject = lookup.node;
            ret.name = PATH.basename(path);
            lookup = FS.lookupPath(path, {
              follow: !dontResolveLastLink
            });
            ret.exists = true;
            ret.path = lookup.path;
            ret.object = lookup.node;
            ret.name = lookup.node.name;
            ret.isRoot = lookup.path === "/";
          } catch (e) {
            ret.error = e.errno;
          }

          return ret;
        },
        createPath: function createPath(parent, path, canRead, canWrite) {
          parent = typeof parent === "string" ? parent : FS.getPath(parent);
          var parts = path.split("/").reverse();

          while (parts.length) {
            var part = parts.pop();
            if (!part) continue;
            var current = PATH.join2(parent, part);

            try {
              FS.mkdir(current);
            } catch (e) {}

            parent = current;
          }

          return current;
        },
        createFile: function createFile(parent, name, properties, canRead, canWrite) {
          var path = PATH.join2(typeof parent === "string" ? parent : FS.getPath(parent), name);
          var mode = FS.getMode(canRead, canWrite);
          return FS.create(path, mode);
        },
        createDataFile: function createDataFile(parent, name, data, canRead, canWrite, canOwn) {
          var path = name ? PATH.join2(typeof parent === "string" ? parent : FS.getPath(parent), name) : parent;
          var mode = FS.getMode(canRead, canWrite);
          var node = FS.create(path, mode);

          if (data) {
            if (typeof data === "string") {
              var arr = new Array(data.length);

              for (var i = 0, len = data.length; i < len; ++i) {
                arr[i] = data.charCodeAt(i);
              }

              data = arr;
            }

            FS.chmod(node, mode | 146);
            var stream = FS.open(node, 577);
            FS.write(stream, data, 0, data.length, 0, canOwn);
            FS.close(stream);
            FS.chmod(node, mode);
          }

          return node;
        },
        createDevice: function createDevice(parent, name, input, output) {
          var path = PATH.join2(typeof parent === "string" ? parent : FS.getPath(parent), name);
          var mode = FS.getMode(!!input, !!output);
          if (!FS.createDevice.major) FS.createDevice.major = 64;
          var dev = FS.makedev(FS.createDevice.major++, 0);
          FS.registerDevice(dev, {
            open: function open(stream) {
              stream.seekable = false;
            },
            close: function close(stream) {
              if (output && output.buffer && output.buffer.length) {
                output(10);
              }
            },
            read: function read(stream, buffer, offset, length, pos) {
              var bytesRead = 0;

              for (var i = 0; i < length; i++) {
                var result;

                try {
                  result = input();
                } catch (e) {
                  throw new FS.ErrnoError(29);
                }

                if (result === undefined && bytesRead === 0) {
                  throw new FS.ErrnoError(6);
                }

                if (result === null || result === undefined) break;
                bytesRead++;
                buffer[offset + i] = result;
              }

              if (bytesRead) {
                stream.node.timestamp = Date.now();
              }

              return bytesRead;
            },
            write: function write(stream, buffer, offset, length, pos) {
              for (var i = 0; i < length; i++) {
                try {
                  output(buffer[offset + i]);
                } catch (e) {
                  throw new FS.ErrnoError(29);
                }
              }

              if (length) {
                stream.node.timestamp = Date.now();
              }

              return i;
            }
          });
          return FS.mkdev(path, mode, dev);
        },
        forceLoadFile: function forceLoadFile(obj) {
          if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;

          if (typeof XMLHttpRequest !== "undefined") {
            throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
          } else if (read_) {
            try {
              obj.contents = intArrayFromString(read_(obj.url), true);
              obj.usedBytes = obj.contents.length;
            } catch (e) {
              throw new FS.ErrnoError(29);
            }
          } else {
            throw new Error("Cannot load without read() or XMLHttpRequest.");
          }
        },
        createLazyFile: function createLazyFile(parent, name, url, canRead, canWrite) {
          function LazyUint8Array() {
            this.lengthKnown = false;
            this.chunks = [];
          }

          LazyUint8Array.prototype.get = function LazyUint8Array_get(idx) {
            if (idx > this.length - 1 || idx < 0) {
              return undefined;
            }

            var chunkOffset = idx % this.chunkSize;
            var chunkNum = idx / this.chunkSize | 0;
            return this.getter(chunkNum)[chunkOffset];
          };

          LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
            this.getter = getter;
          };

          LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
            var xhr = new XMLHttpRequest();
            xhr.open("HEAD", url, false);
            xhr.send(null);
            if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
            var datalength = Number(xhr.getResponseHeader("Content-length"));
            var header;
            var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
            var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
            var chunkSize = 1024 * 1024;
            if (!hasByteServing) chunkSize = datalength;

            var doXHR = function doXHR(from, to) {
              if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
              if (to > datalength - 1) throw new Error("only " + datalength + " bytes available! programmer error!");
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url, false);
              if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
              if (typeof Uint8Array != "undefined") xhr.responseType = "arraybuffer";

              if (xhr.overrideMimeType) {
                xhr.overrideMimeType("text/plain; charset=x-user-defined");
              }

              xhr.send(null);
              if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);

              if (xhr.response !== undefined) {
                return new Uint8Array(xhr.response || []);
              } else {
                return intArrayFromString(xhr.responseText || "", true);
              }
            };

            var lazyArray = this;
            lazyArray.setDataGetter(function (chunkNum) {
              var start = chunkNum * chunkSize;
              var end = (chunkNum + 1) * chunkSize - 1;
              end = Math.min(end, datalength - 1);

              if (typeof lazyArray.chunks[chunkNum] === "undefined") {
                lazyArray.chunks[chunkNum] = doXHR(start, end);
              }

              if (typeof lazyArray.chunks[chunkNum] === "undefined") throw new Error("doXHR failed!");
              return lazyArray.chunks[chunkNum];
            });

            if (usesGzip || !datalength) {
              chunkSize = datalength = 1;
              datalength = this.getter(0).length;
              chunkSize = datalength;
              out("LazyFiles on gzip forces download of the whole file when length is accessed");
            }

            this._length = datalength;
            this._chunkSize = chunkSize;
            this.lengthKnown = true;
          };

          if (typeof XMLHttpRequest !== "undefined") {
            if (!ENVIRONMENT_IS_WORKER) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
            var lazyArray = new LazyUint8Array();
            Object.defineProperties(lazyArray, {
              length: {
                get: function get() {
                  if (!this.lengthKnown) {
                    this.cacheLength();
                  }

                  return this._length;
                }
              },
              chunkSize: {
                get: function get() {
                  if (!this.lengthKnown) {
                    this.cacheLength();
                  }

                  return this._chunkSize;
                }
              }
            });
            var properties = {
              isDevice: false,
              contents: lazyArray
            };
          } else {
            var properties = {
              isDevice: false,
              url: url
            };
          }

          var node = FS.createFile(parent, name, properties, canRead, canWrite);

          if (properties.contents) {
            node.contents = properties.contents;
          } else if (properties.url) {
            node.contents = null;
            node.url = properties.url;
          }

          Object.defineProperties(node, {
            usedBytes: {
              get: function get() {
                return this.contents.length;
              }
            }
          });
          var stream_ops = {};
          var keys = Object.keys(node.stream_ops);
          keys.forEach(function (key) {
            var fn = node.stream_ops[key];

            stream_ops[key] = function forceLoadLazyFile() {
              FS.forceLoadFile(node);
              return fn.apply(null, arguments);
            };
          });

          stream_ops.read = function stream_ops_read(stream, buffer, offset, length, position) {
            FS.forceLoadFile(node);
            var contents = stream.node.contents;
            if (position >= contents.length) return 0;
            var size = Math.min(contents.length - position, length);

            if (contents.slice) {
              for (var i = 0; i < size; i++) {
                buffer[offset + i] = contents[position + i];
              }
            } else {
              for (var i = 0; i < size; i++) {
                buffer[offset + i] = contents.get(position + i);
              }
            }

            return size;
          };

          node.stream_ops = stream_ops;
          return node;
        },
        createPreloadedFile: function createPreloadedFile(parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) {
          Browser.init();
          var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;

          function processData(byteArray) {
            function finish(byteArray) {
              if (preFinish) preFinish();

              if (!dontCreateFile) {
                FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
              }

              if (onload) onload();
              removeRunDependency();
            }

            var handled = false;
            Module["preloadPlugins"].forEach(function (plugin) {
              if (handled) return;

              if (plugin["canHandle"](fullname)) {
                plugin["handle"](byteArray, fullname, finish, function () {
                  if (onerror) onerror();
                  removeRunDependency();
                });
                handled = true;
              }
            });
            if (!handled) finish(byteArray);
          }

          addRunDependency();

          if (typeof url == "string") {
            Browser.asyncLoad(url, function (byteArray) {
              processData(byteArray);
            }, onerror);
          } else {
            processData(url);
          }
        },
        indexedDB: function indexedDB() {
          return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        },
        DB_NAME: function DB_NAME() {
          return "EM_FS_" + window.location.pathname;
        },
        DB_VERSION: 20,
        DB_STORE_NAME: "FILE_DATA",
        saveFilesToDB: function saveFilesToDB(paths, onload, onerror) {
          onload = onload || function () {};

          onerror = onerror || function () {};

          var indexedDB = FS.indexedDB();

          try {
            var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
          } catch (e) {
            return onerror(e);
          }

          openRequest.onupgradeneeded = function openRequest_onupgradeneeded() {
            out("creating db");
            var db = openRequest.result;
            db.createObjectStore(FS.DB_STORE_NAME);
          };

          openRequest.onsuccess = function openRequest_onsuccess() {
            var db = openRequest.result;
            var transaction = db.transaction([FS.DB_STORE_NAME], "readwrite");
            var files = transaction.objectStore(FS.DB_STORE_NAME);
            var ok = 0,
                fail = 0,
                total = paths.length;

            function finish() {
              if (fail == 0) onload();else onerror();
            }

            paths.forEach(function (path) {
              var putRequest = files.put(FS.analyzePath(path).object.contents, path);

              putRequest.onsuccess = function putRequest_onsuccess() {
                ok++;
                if (ok + fail == total) finish();
              };

              putRequest.onerror = function putRequest_onerror() {
                fail++;
                if (ok + fail == total) finish();
              };
            });
            transaction.onerror = onerror;
          };

          openRequest.onerror = onerror;
        },
        loadFilesFromDB: function loadFilesFromDB(paths, onload, onerror) {
          onload = onload || function () {};

          onerror = onerror || function () {};

          var indexedDB = FS.indexedDB();

          try {
            var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
          } catch (e) {
            return onerror(e);
          }

          openRequest.onupgradeneeded = onerror;

          openRequest.onsuccess = function openRequest_onsuccess() {
            var db = openRequest.result;

            try {
              var transaction = db.transaction([FS.DB_STORE_NAME], "readonly");
            } catch (e) {
              onerror(e);
              return;
            }

            var files = transaction.objectStore(FS.DB_STORE_NAME);
            var ok = 0,
                fail = 0,
                total = paths.length;

            function finish() {
              if (fail == 0) onload();else onerror();
            }

            paths.forEach(function (path) {
              var getRequest = files.get(path);

              getRequest.onsuccess = function getRequest_onsuccess() {
                if (FS.analyzePath(path).exists) {
                  FS.unlink(path);
                }

                FS.createDataFile(PATH.dirname(path), PATH.basename(path), getRequest.result, true, true, true);
                ok++;
                if (ok + fail == total) finish();
              };

              getRequest.onerror = function getRequest_onerror() {
                fail++;
                if (ok + fail == total) finish();
              };
            });
            transaction.onerror = onerror;
          };

          openRequest.onerror = onerror;
        }
      };
      var SYSCALLS = {
        mappings: {},
        DEFAULT_POLLMASK: 5,
        umask: 511,
        calculateAt: function calculateAt(dirfd, path, allowEmpty) {
          if (path[0] === "/") {
            return path;
          }

          var dir;

          if (dirfd === -100) {
            dir = FS.cwd();
          } else {
            var dirstream = FS.getStream(dirfd);
            if (!dirstream) throw new FS.ErrnoError(8);
            dir = dirstream.path;
          }

          if (path.length == 0) {
            if (!allowEmpty) {
              throw new FS.ErrnoError(44);
            }

            return dir;
          }

          return PATH.join2(dir, path);
        },
        doStat: function doStat(func, path, buf) {
          try {
            var stat = func(path);
          } catch (e) {
            if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
              return -54;
            }

            throw e;
          }

          HEAP32[buf >> 2] = stat.dev;
          HEAP32[buf + 4 >> 2] = 0;
          HEAP32[buf + 8 >> 2] = stat.ino;
          HEAP32[buf + 12 >> 2] = stat.mode;
          HEAP32[buf + 16 >> 2] = stat.nlink;
          HEAP32[buf + 20 >> 2] = stat.uid;
          HEAP32[buf + 24 >> 2] = stat.gid;
          HEAP32[buf + 28 >> 2] = stat.rdev;
          HEAP32[buf + 32 >> 2] = 0;
          tempI64 = [stat.size >>> 0, (tempDouble = stat.size, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 40 >> 2] = tempI64[0], HEAP32[buf + 44 >> 2] = tempI64[1];
          HEAP32[buf + 48 >> 2] = 4096;
          HEAP32[buf + 52 >> 2] = stat.blocks;
          HEAP32[buf + 56 >> 2] = stat.atime.getTime() / 1e3 | 0;
          HEAP32[buf + 60 >> 2] = 0;
          HEAP32[buf + 64 >> 2] = stat.mtime.getTime() / 1e3 | 0;
          HEAP32[buf + 68 >> 2] = 0;
          HEAP32[buf + 72 >> 2] = stat.ctime.getTime() / 1e3 | 0;
          HEAP32[buf + 76 >> 2] = 0;
          tempI64 = [stat.ino >>> 0, (tempDouble = stat.ino, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 80 >> 2] = tempI64[0], HEAP32[buf + 84 >> 2] = tempI64[1];
          return 0;
        },
        doMsync: function doMsync(addr, stream, len, flags, offset) {
          var buffer = HEAPU8.slice(addr, addr + len);
          FS.msync(stream, buffer, offset, len, flags);
        },
        doMkdir: function doMkdir(path, mode) {
          path = PATH.normalize(path);
          if (path[path.length - 1] === "/") path = path.substr(0, path.length - 1);
          FS.mkdir(path, mode, 0);
          return 0;
        },
        doMknod: function doMknod(path, mode, dev) {
          switch (mode & 61440) {
            case 32768:
            case 8192:
            case 24576:
            case 4096:
            case 49152:
              break;

            default:
              return -28;
          }

          FS.mknod(path, mode, dev);
          return 0;
        },
        doReadlink: function doReadlink(path, buf, bufsize) {
          if (bufsize <= 0) return -28;
          var ret = FS.readlink(path);
          var len = Math.min(bufsize, lengthBytesUTF8(ret));
          var endChar = HEAP8[buf + len];
          stringToUTF8(ret, buf, bufsize + 1);
          HEAP8[buf + len] = endChar;
          return len;
        },
        doAccess: function doAccess(path, amode) {
          if (amode & ~7) {
            return -28;
          }

          var node;
          var lookup = FS.lookupPath(path, {
            follow: true
          });
          node = lookup.node;

          if (!node) {
            return -44;
          }

          var perms = "";
          if (amode & 4) perms += "r";
          if (amode & 2) perms += "w";
          if (amode & 1) perms += "x";

          if (perms && FS.nodePermissions(node, perms)) {
            return -2;
          }

          return 0;
        },
        doDup: function doDup(path, flags, suggestFD) {
          var suggest = FS.getStream(suggestFD);
          if (suggest) FS.close(suggest);
          return FS.open(path, flags, 0, suggestFD, suggestFD).fd;
        },
        doReadv: function doReadv(stream, iov, iovcnt, offset) {
          var ret = 0;

          for (var i = 0; i < iovcnt; i++) {
            var ptr = HEAP32[iov + i * 8 >> 2];
            var len = HEAP32[iov + (i * 8 + 4) >> 2];
            var curr = FS.read(stream, HEAP8, ptr, len, offset);
            if (curr < 0) return -1;
            ret += curr;
            if (curr < len) break;
          }

          return ret;
        },
        doWritev: function doWritev(stream, iov, iovcnt, offset) {
          var ret = 0;

          for (var i = 0; i < iovcnt; i++) {
            var ptr = HEAP32[iov + i * 8 >> 2];
            var len = HEAP32[iov + (i * 8 + 4) >> 2];
            var curr = FS.write(stream, HEAP8, ptr, len, offset);
            if (curr < 0) return -1;
            ret += curr;
          }

          return ret;
        },
        varargs: undefined,
        get: function get() {
          SYSCALLS.varargs += 4;
          var ret = HEAP32[SYSCALLS.varargs - 4 >> 2];
          return ret;
        },
        getStr: function getStr(ptr) {
          var ret = UTF8ToString(ptr);
          return ret;
        },
        getStreamFromFD: function getStreamFromFD(fd) {
          var stream = FS.getStream(fd);
          if (!stream) throw new FS.ErrnoError(8);
          return stream;
        },
        get64: function get64(low, high) {
          return low;
        }
      };

      function ___sys_fcntl64(fd, cmd, varargs) {
        SYSCALLS.varargs = varargs;

        try {
          var stream = SYSCALLS.getStreamFromFD(fd);

          switch (cmd) {
            case 0:
              {
                var arg = SYSCALLS.get();

                if (arg < 0) {
                  return -28;
                }

                var newStream;
                newStream = FS.open(stream.path, stream.flags, 0, arg);
                return newStream.fd;
              }

            case 1:
            case 2:
              return 0;

            case 3:
              return stream.flags;

            case 4:
              {
                var arg = SYSCALLS.get();
                stream.flags |= arg;
                return 0;
              }

            case 12:
              {
                var arg = SYSCALLS.get();
                var offset = 0;
                HEAP16[arg + offset >> 1] = 2;
                return 0;
              }

            case 13:
            case 14:
              return 0;

            case 16:
            case 8:
              return -28;

            case 9:
              setErrNo(28);
              return -1;

            default:
              {
                return -28;
              }
          }
        } catch (e) {
          if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
          return -e.errno;
        }
      }

      function ___sys_ioctl(fd, op, varargs) {
        SYSCALLS.varargs = varargs;

        try {
          var stream = SYSCALLS.getStreamFromFD(fd);

          switch (op) {
            case 21509:
            case 21505:
              {
                if (!stream.tty) return -59;
                return 0;
              }

            case 21510:
            case 21511:
            case 21512:
            case 21506:
            case 21507:
            case 21508:
              {
                if (!stream.tty) return -59;
                return 0;
              }

            case 21519:
              {
                if (!stream.tty) return -59;
                var argp = SYSCALLS.get();
                HEAP32[argp >> 2] = 0;
                return 0;
              }

            case 21520:
              {
                if (!stream.tty) return -59;
                return -28;
              }

            case 21531:
              {
                var argp = SYSCALLS.get();
                return FS.ioctl(stream, op, argp);
              }

            case 21523:
              {
                if (!stream.tty) return -59;
                return 0;
              }

            case 21524:
              {
                if (!stream.tty) return -59;
                return 0;
              }

            default:
              abort("bad ioctl syscall " + op);
          }
        } catch (e) {
          if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
          return -e.errno;
        }
      }

      function ___sys_open(path, flags, varargs) {
        SYSCALLS.varargs = varargs;

        try {
          var pathname = SYSCALLS.getStr(path);
          var mode = varargs ? SYSCALLS.get() : 0;
          var stream = FS.open(pathname, flags, mode);
          return stream.fd;
        } catch (e) {
          if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
          return -e.errno;
        }
      }

      function _emscripten_memcpy_big(dest, src, num) {
        HEAPU8.copyWithin(dest, src, src + num);
      }

      function _emscripten_get_heap_size() {
        return HEAPU8.length;
      }

      function emscripten_realloc_buffer(size) {
        try {
          wasmMemory.grow(size - buffer.byteLength + 65535 >>> 16);
          updateGlobalBufferAndViews(wasmMemory.buffer);
          return 1;
        } catch (e) {}
      }

      function _emscripten_resize_heap(requestedSize) {
        requestedSize = requestedSize >>> 0;

        var oldSize = _emscripten_get_heap_size();

        var maxHeapSize = 2147483648;

        if (requestedSize > maxHeapSize) {
          return false;
        }

        var minHeapSize = 16777216;

        for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
          var overGrownHeapSize = oldSize * (1 + .2 / cutDown);
          overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
          var newSize = Math.min(maxHeapSize, alignUp(Math.max(minHeapSize, requestedSize, overGrownHeapSize), 65536));
          var replacement = emscripten_realloc_buffer(newSize);

          if (replacement) {
            return true;
          }
        }

        return false;
      }

      function _fd_close(fd) {
        try {
          var stream = SYSCALLS.getStreamFromFD(fd);
          FS.close(stream);
          return 0;
        } catch (e) {
          if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
          return e.errno;
        }
      }

      function _fd_read(fd, iov, iovcnt, pnum) {
        try {
          var stream = SYSCALLS.getStreamFromFD(fd);
          var num = SYSCALLS.doReadv(stream, iov, iovcnt);
          HEAP32[pnum >> 2] = num;
          return 0;
        } catch (e) {
          if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
          return e.errno;
        }
      }

      function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
        try {
          var stream = SYSCALLS.getStreamFromFD(fd);
          var HIGH_OFFSET = 4294967296;
          var offset = offset_high * HIGH_OFFSET + (offset_low >>> 0);
          var DOUBLE_LIMIT = 9007199254740992;

          if (offset <= -DOUBLE_LIMIT || offset >= DOUBLE_LIMIT) {
            return -61;
          }

          FS.llseek(stream, offset, whence);
          tempI64 = [stream.position >>> 0, (tempDouble = stream.position, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[newOffset >> 2] = tempI64[0], HEAP32[newOffset + 4 >> 2] = tempI64[1];
          if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null;
          return 0;
        } catch (e) {
          if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
          return e.errno;
        }
      }

      function _fd_write(fd, iov, iovcnt, pnum) {
        try {
          var stream = SYSCALLS.getStreamFromFD(fd);
          var num = SYSCALLS.doWritev(stream, iov, iovcnt);
          HEAP32[pnum >> 2] = num;
          return 0;
        } catch (e) {
          if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
          return e.errno;
        }
      }

      var FSNode = function FSNode(parent, name, mode, rdev) {
        if (!parent) {
          parent = this;
        }

        this.parent = parent;
        this.mount = parent.mount;
        this.mounted = null;
        this.id = FS.nextInode++;
        this.name = name;
        this.mode = mode;
        this.node_ops = {};
        this.stream_ops = {};
        this.rdev = rdev;
      };

      var readMode = 292 | 73;
      var writeMode = 146;
      Object.defineProperties(FSNode.prototype, {
        read: {
          get: function get() {
            return (this.mode & readMode) === readMode;
          },
          set: function set(val) {
            val ? this.mode |= readMode : this.mode &= ~readMode;
          }
        },
        write: {
          get: function get() {
            return (this.mode & writeMode) === writeMode;
          },
          set: function set(val) {
            val ? this.mode |= writeMode : this.mode &= ~writeMode;
          }
        },
        isFolder: {
          get: function get() {
            return FS.isDir(this.mode);
          }
        },
        isDevice: {
          get: function get() {
            return FS.isChrdev(this.mode);
          }
        }
      });
      FS.FSNode = FSNode;
      FS.staticInit();
      Module["FS_createPath"] = FS.createPath;
      Module["FS_createDataFile"] = FS.createDataFile;
      Module["FS_createPreloadedFile"] = FS.createPreloadedFile;
      Module["FS_createLazyFile"] = FS.createLazyFile;
      Module["FS_createDevice"] = FS.createDevice;
      Module["FS_unlink"] = FS.unlink;

      function intArrayFromString(stringy, dontAddNull, length) {
        var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
        var u8array = new Array(len);
        var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
        if (dontAddNull) u8array.length = numBytesWritten;
        return u8array;
      }

      function intArrayToString(array) {
        var ret = [];

        for (var i = 0; i < array.length; i++) {
          var chr = array[i];

          if (chr > 255) {

            chr &= 255;
          }

          ret.push(String.fromCharCode(chr));
        }

        return ret.join("");
      }

      var decodeBase64 = typeof atob === "function" ? atob : function (input) {
        var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

        do {
          enc1 = keyStr.indexOf(input.charAt(i++));
          enc2 = keyStr.indexOf(input.charAt(i++));
          enc3 = keyStr.indexOf(input.charAt(i++));
          enc4 = keyStr.indexOf(input.charAt(i++));
          chr1 = enc1 << 2 | enc2 >> 4;
          chr2 = (enc2 & 15) << 4 | enc3 >> 2;
          chr3 = (enc3 & 3) << 6 | enc4;
          output = output + String.fromCharCode(chr1);

          if (enc3 !== 64) {
            output = output + String.fromCharCode(chr2);
          }

          if (enc4 !== 64) {
            output = output + String.fromCharCode(chr3);
          }
        } while (i < input.length);

        return output;
      };

      function intArrayFromBase64(s) {
        try {
          var decoded = decodeBase64(s);
          var bytes = new Uint8Array(decoded.length);

          for (var i = 0; i < decoded.length; ++i) {
            bytes[i] = decoded.charCodeAt(i);
          }

          return bytes;
        } catch (_) {
          throw new Error("Converting base64 string to bytes failed.");
        }
      }

      function tryParseAsDataURI(filename) {
        if (!isDataURI(filename)) {
          return;
        }

        return intArrayFromBase64(filename.slice(dataURIPrefix.length));
      }

      var asmLibraryArg = {
        "b": ___sys_fcntl64,
        "h": ___sys_ioctl,
        "i": ___sys_open,
        "e": _emscripten_memcpy_big,
        "f": _emscripten_resize_heap,
        "c": _fd_close,
        "g": _fd_read,
        "d": _fd_seek,
        "a": _fd_write
      };
      var asm = createWasm();

      var ___wasm_call_ctors = Module["___wasm_call_ctors"] = asm["k"];

      var _malloc = Module["_malloc"] = asm["l"];

      Module["_free"] = asm["m"];

      Module["_mid_song_start"] = asm["n"];

      Module["_mid_song_seek"] = asm["o"];

      Module["_mid_song_get_total_time"] = asm["p"];

      Module["_mid_song_get_time"] = asm["q"];

      Module["_mid_song_read_wave"] = asm["r"];

      Module["_mid_istream_open_mem"] = asm["t"];

      Module["_mid_istream_close"] = asm["u"];

      Module["_mid_exit"] = asm["v"];

      Module["_mid_init"] = asm["w"];

      Module["_mid_song_load"] = asm["x"];

      Module["_mid_song_free"] = asm["y"];

      Module["_mid_alloc_options"] = asm["z"];

      Module["_mid_get_load_request_count"] = asm["A"];

      Module["_mid_get_load_request"] = asm["B"];

      var ___errno_location = Module["___errno_location"] = asm["C"];

      Module["UTF8ToString"] = UTF8ToString;
      Module["addRunDependency"] = addRunDependency;
      Module["removeRunDependency"] = removeRunDependency;
      Module["FS_createPath"] = FS.createPath;
      Module["FS_createDataFile"] = FS.createDataFile;
      Module["FS_createPreloadedFile"] = FS.createPreloadedFile;
      Module["FS_createLazyFile"] = FS.createLazyFile;
      Module["FS_createDevice"] = FS.createDevice;
      Module["FS_unlink"] = FS.unlink;
      Module["FS"] = FS;
      var calledRun;

      dependenciesFulfilled = function runCaller() {
        if (!calledRun) run();
        if (!calledRun) dependenciesFulfilled = runCaller;
      };

      function run(args) {

        if (runDependencies > 0) {
          return;
        }

        preRun();

        if (runDependencies > 0) {
          return;
        }

        function doRun() {
          if (calledRun) return;
          calledRun = true;
          Module["calledRun"] = true;
          if (ABORT) return;
          initRuntime();
          preMain();
          readyPromiseResolve(Module);
          if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
          postRun();
        }

        if (Module["setStatus"]) {
          Module["setStatus"]("Running...");
          setTimeout(function () {
            setTimeout(function () {
              Module["setStatus"]("");
            }, 1);
            doRun();
          }, 1);
        } else {
          doRun();
        }
      }

      Module["run"] = run;

      if (Module["preInit"]) {
        if (typeof Module["preInit"] == "function") Module["preInit"] = [Module["preInit"]];

        while (Module["preInit"].length > 0) {
          Module["preInit"].pop()();
        }
      }
      run();
      return LibTimidity;
    };
  }();

  module.exports = LibTimidity;
});

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
createCommonjsModule(function (module) {
  var runtime = function (exports) {

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1; // More compressible than void 0.

    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function define(obj, key, value) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
      return obj[key];
    }

    try {
      // IE 8 has a broken Object.defineProperty that only works on DOM objects.
      define({}, "");
    } catch (err) {
      define = function define(obj, key, value) {
        return obj[key] = value;
      };
    }

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.

      generator._invoke = makeInvokeMethod(innerFn, self, context);
      return generator;
    }

    exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.

    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.

    var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.

    function Generator() {}

    function GeneratorFunction() {}

    function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.


    var IteratorPrototype = {};

    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.

    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }

    exports.isGeneratorFunction = function (genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
      // do is to check its .name property.
      (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };

    exports.mark = function (genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        define(genFun, toStringTagSymbol, "GeneratorFunction");
      }

      genFun.prototype = Object.create(Gp);
      return genFun;
    }; // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.


    exports.awrap = function (arg) {
      return {
        __await: arg
      };
    };

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);

        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;

          if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function (value) {
              invoke("next", value, resolve, reject);
            }, function (err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return PromiseImpl.resolve(value).then(function (unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function (error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise = // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
        // invocations of the iterator.
        callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      } // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).


      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);

    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };

    exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.

    exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0) PromiseImpl = Promise;
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;
      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          } // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;
          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);
          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;
          var record = tryCatch(innerFn, self, context);

          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };
          } else if (record.type === "throw") {
            state = GenStateCompleted; // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.

            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    } // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.


    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];

      if (method === undefined$1) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (!info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

        context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.

        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }
      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      } // The delegate iterator is finished, so forget it and continue with
      // the outer generator.


      context.delegate = null;
      return ContinueSentinel;
    } // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.


    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.

    Gp[iteratorSymbol] = function () {
      return this;
    };

    Gp.toString = function () {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{
        tryLoc: "root"
      }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function (object) {
      var keys = [];

      for (var key in object) {
        keys.push(key);
      }

      keys.reverse(); // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.

      return function next() {
        while (keys.length) {
          var key = keys.pop();

          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        } // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.


        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];

        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1,
              next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined$1;
            next.done = true;
            return next;
          };

          return next.next = next;
        }
      } // Return an iterator with no values.


      return {
        next: doneResult
      };
    }

    exports.values = values;

    function doneResult() {
      return {
        value: undefined$1,
        done: true
      };
    }

    Context.prototype = {
      constructor: Context,
      reset: function reset(skipTempReset) {
        this.prev = 0;
        this.next = 0; // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.

        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = undefined$1;
        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },
      stop: function stop() {
        this.done = true;
        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;

        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },
      dispatchException: function dispatchException(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;

        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined$1;
          }

          return !!caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },
      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },
      complete: function complete(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" || record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },
      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },
      "catch": function _catch(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;

            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }

            return thrown;
          }
        } // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.


        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined$1;
        }

        return ContinueSentinel;
      }
    }; // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.

    return exports;
  }( // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  module.exports );

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function("r", "regeneratorRuntime = r")(runtime);
  }
});

/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */

var requiresPort = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;
  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
      return port !== 80;

    case 'https':
    case 'wss':
      return port !== 443;

    case 'ftp':
      return port !== 21;

    case 'gopher':
      return port !== 70;

    case 'file':
      return false;
  }

  return port !== 0;
};

var has = Object.prototype.hasOwnProperty,
    undef;
/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String|Null} The decoded string.
 * @api private
 */

function decode(input) {
  try {
    return decodeURIComponent(input.replace(/\+/g, ' '));
  } catch (e) {
    return null;
  }
}
/**
 * Attempts to encode a given input.
 *
 * @param {String} input The string that needs to be encoded.
 * @returns {String|Null} The encoded string.
 * @api private
 */


function encode(input) {
  try {
    return encodeURIComponent(input);
  } catch (e) {
    return null;
  }
}
/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */


function querystring(query) {
  var parser = /([^=?#&]+)=?([^&]*)/g,
      result = {},
      part;

  while (part = parser.exec(query)) {
    var key = decode(part[1]),
        value = decode(part[2]); //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    // In the case if failed decoding, we want to omit the key/value pairs
    // from the result.
    //

    if (key === null || value === null || key in result) continue;
    result[key] = value;
  }

  return result;
}
/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */


function querystringify(obj, prefix) {
  prefix = prefix || '';
  var pairs = [],
      value,
      key; //
  // Optionally prefix with a '?' if needed
  //

  if ('string' !== typeof prefix) prefix = '?';

  for (key in obj) {
    if (has.call(obj, key)) {
      value = obj[key]; //
      // Edge cases where we actually want to encode the value to an empty
      // string instead of the stringified value.
      //

      if (!value && (value === null || value === undef || isNaN(value))) {
        value = '';
      }

      key = encode(key);
      value = encode(value); //
      // If we failed to encode the strings, we should bail out as we don't
      // want to add invalid strings to the query.
      //

      if (key === null || value === null) continue;
      pairs.push(key + '=' + value);
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
} //
// Expose the module.
//


var stringify = querystringify;
var parse = querystring;
var querystringify_1 = {
  stringify: stringify,
  parse: parse
};

var slashes = /^[A-Za-z][A-Za-z0-9+-.]*:[\\/]+/,
    protocolre = /^([a-z][a-z0-9.+-]*:)?([\\/]{1,})?([\S\s]*)/i,
    whitespace = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",
    left = new RegExp('^' + whitespace + '+');
/**
 * Trim a given string.
 *
 * @param {String} str String to trim.
 * @public
 */

function trimLeft(str) {
  return (str ? str : '').toString().replace(left, '');
}
/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */


var rules = [['#', 'hash'], // Extract from the back.
['?', 'query'], // Extract from the back.
function sanitize(address) {
  // Sanitize what is left of the address
  return address.replace('\\', '/');
}, ['/', 'pathname'], // Extract from the back.
['@', 'auth', 1], // Extract from the front.
[NaN, 'host', undefined, 1, 1], // Set left over value.
[/:(\d+)$/, 'port', undefined, 1], // RegExp the back.
[NaN, 'hostname', undefined, 1, 1] // Set left over.
];
/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */

var ignore = {
  hash: 1,
  query: 1
};
/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */

function lolcation(loc) {
  var globalVar;
  if (typeof window !== 'undefined') globalVar = window;else if (typeof commonjsGlobal !== 'undefined') globalVar = commonjsGlobal;else if (typeof self !== 'undefined') globalVar = self;else globalVar = {};
  var location = globalVar.location || {};
  loc = loc || location;
  var finaldestination = {},
      type = typeof loc,
      key;

  if ('blob:' === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new Url(loc, {});

    for (key in ignore) {
      delete finaldestination[key];
    }
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}
/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @private
 */


function extractProtocol(address) {
  address = trimLeft(address);
  var match = protocolre.exec(address),
      protocol = match[1] ? match[1].toLowerCase() : '',
      slashes = !!(match[2] && match[2].length >= 2),
      rest = match[2] && match[2].length === 1 ? '/' + match[3] : match[3];
  return {
    protocol: protocol,
    slashes: slashes,
    rest: rest
  };
}
/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */


function resolve(relative, base) {
  if (relative === '') return base;
  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/')),
      i = path.length,
      last = path[i - 1],
      unshift = false,
      up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');
  return path.join('/');
}
/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} [location] Location defaults for relative paths.
 * @param {Boolean|Function} [parser] Parser for the query string.
 * @private
 */


function Url(address, location, parser) {
  address = trimLeft(address);

  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }

  var relative,
      extracted,
      parse,
      instruction,
      index,
      key,
      instructions = rules.slice(),
      type = typeof location,
      url = this,
      i = 0; //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //

  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = querystringify_1.parse;
  location = lolcation(location); //
  // Extract protocol information before running the instructions.
  //

  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest; //
  // When the authority component is absent the URL starts with a path
  // component.
  //

  if (!extracted.slashes) instructions[3] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];

    if (typeof instruction === 'function') {
      address = instruction(address);
      continue;
    }

    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if (index = parse.exec(address)) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (relative && instruction[3] ? location[key] || '' : ''); //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //

    if (instruction[4]) url[key] = url[key].toLowerCase();
  } //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //


  if (parser) url.query = parser(url.query); //
  // If the URL is relative, resolve the pathname against the base URL.
  //

  if (relative && location.slashes && url.pathname.charAt(0) !== '/' && (url.pathname !== '' || location.pathname !== '')) {
    url.pathname = resolve(url.pathname, location.pathname);
  } //
  // Default to a / for pathname if none exists. This normalizes the URL
  // to always have a /
  //


  if (url.pathname.charAt(0) !== '/' && url.hostname) {
    url.pathname = '/' + url.pathname;
  } //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //


  if (!requiresPort(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  } //
  // Parse down the `auth` for the username and password.
  //


  url.username = url.password = '';

  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:' ? url.protocol + '//' + url.host : 'null'; //
  // The href is just the compiled result.
  //

  url.href = url.toString();
}
/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */


function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || querystringify_1.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!requiresPort(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname + ':' + value;
      }

      break;

    case 'hostname':
      url[part] = value;
      if (url.port) value += ':' + url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var _char = part === 'pathname' ? '/' : '#';

        url[part] = value.charAt(0) !== _char ? _char + value : value;
      } else {
        url[part] = value;
      }

      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];
    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:' ? url.protocol + '//' + url.host : 'null';
  url.href = url.toString();
  return url;
}
/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */


function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = querystringify_1.stringify;
  var query,
      url = this,
      protocol = url.protocol;
  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';
  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':' + url.password;
    result += '@';
  }

  result += url.host + url.pathname;
  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?' + query : query;
  if (url.hash) result += url.hash;
  return result;
}

Url.prototype = {
  set: set,
  toString: toString
}; //
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//

Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.trimLeft = trimLeft;
Url.qs = querystringify_1;
var urlParse = Url;

var AUDIO_FORMAT = 0x8010; // format of the rendered audio 's16'

var NUM_CHANNELS = 2; // stereo (2 channels)

var BYTES_PER_SAMPLE = 2 * NUM_CHANNELS;
var BUFFER_SIZE = 128; // buffer size for each render() call, limited by AudioWorkletProcessor to 128 frames

registerProcessor('midiplayer', /*#__PURE__*/function (_AudioWorkletProcesso) {
  _inheritsLoose(_class, _AudioWorkletProcesso);

  function _class(args) {
    var _this;

    _this = _AudioWorkletProcesso.call(this) || this;
    var baseUrl = args.processorOptions.baseURL;
    var timidityCfg = args.processorOptions.timidityCfg;
    if (!baseUrl.endsWith('/')) baseUrl += (_readOnlyError("baseUrl"), '/');
    _this._baseUrl = new urlParse(baseUrl).href;
    _this._songPtr = 0;
    _this._bufferPtr = 0;
    _this._array = new Int16Array(BUFFER_SIZE * 2);
    _this._lib = libtimidity({
      locateFile: function locateFile(file) {
        return new urlParse(file, _this._baseUrl).href;
      }
    });

    _this._lib.FS.writeFile('/timidity.cfg', timidityCfg);

    var result = _this._lib._mid_init('/timidity.cfg');

    if (result !== 0) {
      return _this._destroy(new Error('Failed to initialize libtimidity')) || _assertThisInitialized(_this);
    }

    _this._bufferPtr = _this._lib._malloc(BUFFER_SIZE * BYTES_PER_SAMPLE);
    _this.port.onmessage = _this._handleMessage.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = _class.prototype;

  _proto._handleMessage = /*#__PURE__*/function () {
    var _handleMessage2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(message) {
      var _this2 = this;

      var _iterator, _step, inst;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(message.data.type === 'instPayload')) {
                _context.next = 10;
                break;
              }

              for (_iterator = _createForOfIteratorHelperLoose(message.data.buffs); !(_step = _iterator()).done;) {
                inst = _step.value;

                this._writeInstrumentFile(inst.instrumentName, inst.instrumentBuff);
              }

              this.port.postMessage(this._lib._mid_get_load_request_count(this._songPtr));

              this._lib._mid_song_free(this._songPtr);

              _context.next = 6;
              return this._loadSong(this._midiBuf);

            case 6:
              this._songPtr = _context.sent;

              this._lib._mid_song_start(this._songPtr);

              _context.next = 19;
              break;

            case 10:
              if (!(message.data.type === 'loadMIDI')) {
                _context.next = 18;
                break;
              }

              // If a song already exists, destroy it before starting a new one
              if (this._songPtr) this._destroySong();
              this._midiBuf = message.data.midiBuff; // this.port.postMessage(message.data)

              if (this._midiBuf instanceof Uint8Array) {
                _context.next = 15;
                break;
              }

              throw new Error('load() expects a `Uint8Array` argument');

            case 15:
              this._loadSong(this._midiBuf).then(function (songPtr) {
                _this2._songPtr = songPtr;

                _this2._reqInstruments(songPtr, _this2._midiBuf); // Now, wait for failure or all the instruments or something in between

              });

              _context.next = 19;
              break;

            case 18:
              if (message.data === 'play') {
                this._playing = true;
                this.port.postMessage("we are playing from timisity now!");
              } else if (message.data.type === 'seek') {
                this.seek(message.data.sec);
              } else if (message.data === 'pause') {
                this.pause();
              }

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function _handleMessage(_x) {
      return _handleMessage2.apply(this, arguments);
    }

    return _handleMessage;
  }();

  _proto._reqInstruments = function _reqInstruments(songPtr) {
    // Are we missing instrument files?
    var missingCount = this._lib._mid_get_load_request_count(songPtr);

    if (missingCount > 0) {
      var missingInstruments = [];

      for (var i = 0; i < missingCount; i++) {
        var instrumentPtr = this._lib._mid_get_load_request(songPtr, i);

        var instrument = this._lib.UTF8ToString(instrumentPtr);

        missingInstruments.push(instrument);
      } // Request instruments to be fetched from the main thread
      // missingInstruments.map(instrument => this._reqInstrument(instrument))


      this.port.postMessage({
        type: 'missingInstruments',
        instruments: missingInstruments
      });
    }
  };

  _proto._loadSong = /*#__PURE__*/function () {
    var _loadSong2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(midiBuf) {
      var optsPtr, midiBufPtr, iStreamPtr, songPtr;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              optsPtr = this._lib._mid_alloc_options( // sampleRate from AudioWorkletGlobalScope
              sampleRate, AUDIO_FORMAT, NUM_CHANNELS, BUFFER_SIZE); // Copy the MIDI buffer into the heap

              midiBufPtr = this._lib._malloc(midiBuf.byteLength);

              this._lib.HEAPU8.set(midiBuf, midiBufPtr); // Create a stream


              iStreamPtr = this._lib._mid_istream_open_mem(midiBufPtr, midiBuf.byteLength); // Load the song

              songPtr = this._lib._mid_song_load(iStreamPtr, optsPtr); // Free resources no longer needed

              this._lib._mid_istream_close(iStreamPtr);

              this._lib._free(optsPtr);

              this._lib._free(midiBufPtr);

              if (!(songPtr === 0)) {
                _context2.next = 10;
                break;
              }

              return _context2.abrupt("return", this._destroy(new Error('Failed to load MIDI file')));

            case 10:
              return _context2.abrupt("return", songPtr);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function _loadSong(_x2) {
      return _loadSong2.apply(this, arguments);
    }

    return _loadSong;
  }();

  _proto._writeInstrumentFile = function _writeInstrumentFile(instrument, buf) {
    var folderPath = instrument.split('/').slice(0, -1) // remove basename
    .join('/');

    this._mkdirp(folderPath);

    this.port.postMessage(folderPath);

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

  _proto._onAudioProcess = function _onAudioProcess(outputs) {
    var sampleCount = this._songPtr && this._playing ? this._readMidiData() : 0;
    var output0 = outputs[0][0];
    var output1 = outputs[0][1];

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

      this.port.postMessage('ended');
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

  _proto.process = function process(_inputs, outputs, _params) {
    if (this._playing) {
      outputs = this._onAudioProcess(outputs);
    }

    return !this.destroyed;
  };

  _proto.pause = function pause() {
    if (this.destroyed) throw new Error('pause() called after destroy()');
    this._playing = false;
  };

  _proto.seek = function seek(time) {
    if (!this._songPtr) return; // ignore seek if there is no song loaded yet

    var timeMs = Math.floor(time * 1000);

    this._lib._mid_song_seek(this._songPtr, timeMs);
  };

  _proto.destroy = function destroy() {
    if (this.destroyed) throw new Error('destroy() called after destroy()');

    this._destroy();
  };

  _proto._destroy = function _destroy(err) {
    if (this.destroyed) return;
    this.destroyed = true;
    this._array = null;

    if (this._songPtr) {
      this._destroySong();
    }

    if (this._bufferPtr) {
      this._lib._free(this._bufferPtr);

      this._bufferPtr = 0;
    }

    if (err) throw new Error('error', err);
  };

  _proto._destroySong = function _destroySong() {
    this._lib._mid_song_free(this._songPtr);

    this._songPtr = 0;
  };

  return _class;
}( /*#__PURE__*/_wrapNativeSuper(AudioWorkletProcessor)));
