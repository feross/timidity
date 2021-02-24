
var LibTimidity = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  
  return (
function(LibTimidity) {
  LibTimidity = LibTimidity || {};



// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = typeof LibTimidity !== 'undefined' ? LibTimidity : {};

// Set up the promise that indicates the Module is initialized
var readyPromiseResolve, readyPromiseReject;
Module['ready'] = new Promise(function(resolve, reject) {
  readyPromiseResolve = resolve;
  readyPromiseReject = reject;
});

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_free')) {
        Object.defineProperty(Module['ready'], '_free', { configurable: true, get: function() { abort('You are getting _free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_free', { configurable: true, set: function() { abort('You are setting _free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_malloc')) {
        Object.defineProperty(Module['ready'], '_malloc', { configurable: true, get: function() { abort('You are getting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_malloc', { configurable: true, set: function() { abort('You are setting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_mid_alloc_options')) {
        Object.defineProperty(Module['ready'], '_mid_alloc_options', { configurable: true, get: function() { abort('You are getting _mid_alloc_options on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_mid_alloc_options', { configurable: true, set: function() { abort('You are setting _mid_alloc_options on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_mid_exit')) {
        Object.defineProperty(Module['ready'], '_mid_exit', { configurable: true, get: function() { abort('You are getting _mid_exit on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_mid_exit', { configurable: true, set: function() { abort('You are setting _mid_exit on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_mid_get_load_request')) {
        Object.defineProperty(Module['ready'], '_mid_get_load_request', { configurable: true, get: function() { abort('You are getting _mid_get_load_request on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_mid_get_load_request', { configurable: true, set: function() { abort('You are setting _mid_get_load_request on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_mid_get_load_request_count')) {
        Object.defineProperty(Module['ready'], '_mid_get_load_request_count', { configurable: true, get: function() { abort('You are getting _mid_get_load_request_count on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_mid_get_load_request_count', { configurable: true, set: function() { abort('You are setting _mid_get_load_request_count on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_mid_init')) {
        Object.defineProperty(Module['ready'], '_mid_init', { configurable: true, get: function() { abort('You are getting _mid_init on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_mid_init', { configurable: true, set: function() { abort('You are setting _mid_init on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_mid_istream_close')) {
        Object.defineProperty(Module['ready'], '_mid_istream_close', { configurable: true, get: function() { abort('You are getting _mid_istream_close on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_mid_istream_close', { configurable: true, set: function() { abort('You are setting _mid_istream_close on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_mid_istream_open_mem')) {
        Object.defineProperty(Module['ready'], '_mid_istream_open_mem', { configurable: true, get: function() { abort('You are getting _mid_istream_open_mem on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_mid_istream_open_mem', { configurable: true, set: function() { abort('You are setting _mid_istream_open_mem on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_mid_song_free')) {
        Object.defineProperty(Module['ready'], '_mid_song_free', { configurable: true, get: function() { abort('You are getting _mid_song_free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_mid_song_free', { configurable: true, set: function() { abort('You are setting _mid_song_free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_mid_song_get_time')) {
        Object.defineProperty(Module['ready'], '_mid_song_get_time', { configurable: true, get: function() { abort('You are getting _mid_song_get_time on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_mid_song_get_time', { configurable: true, set: function() { abort('You are setting _mid_song_get_time on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_mid_song_get_total_time')) {
        Object.defineProperty(Module['ready'], '_mid_song_get_total_time', { configurable: true, get: function() { abort('You are getting _mid_song_get_total_time on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_mid_song_get_total_time', { configurable: true, set: function() { abort('You are setting _mid_song_get_total_time on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_mid_song_load')) {
        Object.defineProperty(Module['ready'], '_mid_song_load', { configurable: true, get: function() { abort('You are getting _mid_song_load on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_mid_song_load', { configurable: true, set: function() { abort('You are setting _mid_song_load on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_mid_song_read_wave')) {
        Object.defineProperty(Module['ready'], '_mid_song_read_wave', { configurable: true, get: function() { abort('You are getting _mid_song_read_wave on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_mid_song_read_wave', { configurable: true, set: function() { abort('You are setting _mid_song_read_wave on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_mid_song_seek')) {
        Object.defineProperty(Module['ready'], '_mid_song_seek', { configurable: true, get: function() { abort('You are getting _mid_song_seek on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_mid_song_seek', { configurable: true, set: function() { abort('You are setting _mid_song_seek on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_mid_song_start')) {
        Object.defineProperty(Module['ready'], '_mid_song_start', { configurable: true, get: function() { abort('You are getting _mid_song_start on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_mid_song_start', { configurable: true, set: function() { abort('You are setting _mid_song_start on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_emscripten_stack_get_end')) {
        Object.defineProperty(Module['ready'], '_emscripten_stack_get_end', { configurable: true, get: function() { abort('You are getting _emscripten_stack_get_end on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_emscripten_stack_get_end', { configurable: true, set: function() { abort('You are setting _emscripten_stack_get_end on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_emscripten_stack_get_free')) {
        Object.defineProperty(Module['ready'], '_emscripten_stack_get_free', { configurable: true, get: function() { abort('You are getting _emscripten_stack_get_free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_emscripten_stack_get_free', { configurable: true, set: function() { abort('You are setting _emscripten_stack_get_free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_emscripten_stack_init')) {
        Object.defineProperty(Module['ready'], '_emscripten_stack_init', { configurable: true, get: function() { abort('You are getting _emscripten_stack_init on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_emscripten_stack_init', { configurable: true, set: function() { abort('You are setting _emscripten_stack_init on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_stackSave')) {
        Object.defineProperty(Module['ready'], '_stackSave', { configurable: true, get: function() { abort('You are getting _stackSave on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_stackSave', { configurable: true, set: function() { abort('You are setting _stackSave on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_stackRestore')) {
        Object.defineProperty(Module['ready'], '_stackRestore', { configurable: true, get: function() { abort('You are getting _stackRestore on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_stackRestore', { configurable: true, set: function() { abort('You are setting _stackRestore on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_stackAlloc')) {
        Object.defineProperty(Module['ready'], '_stackAlloc', { configurable: true, get: function() { abort('You are getting _stackAlloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_stackAlloc', { configurable: true, set: function() { abort('You are setting _stackAlloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '___wasm_call_ctors')) {
        Object.defineProperty(Module['ready'], '___wasm_call_ctors', { configurable: true, get: function() { abort('You are getting ___wasm_call_ctors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '___wasm_call_ctors', { configurable: true, set: function() { abort('You are setting ___wasm_call_ctors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fflush')) {
        Object.defineProperty(Module['ready'], '_fflush', { configurable: true, get: function() { abort('You are getting _fflush on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fflush', { configurable: true, set: function() { abort('You are setting _fflush on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '___errno_location')) {
        Object.defineProperty(Module['ready'], '___errno_location', { configurable: true, get: function() { abort('You are getting ___errno_location on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '___errno_location', { configurable: true, set: function() { abort('You are setting ___errno_location on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], 'onRuntimeInitialized')) {
        Object.defineProperty(Module['ready'], 'onRuntimeInitialized', { configurable: true, get: function() { abort('You are getting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], 'onRuntimeInitialized', { configurable: true, set: function() { abort('You are setting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)
var self = {
    location: {
        href: "https://localhost:8080" // URL where the module was loaded from
    }
}
// https://github.com/jet2jet/fluidsynth-emscripten/blob/master/emscripten/src/pre.js
var document = typeof document !== 'undefined' ? document : {};
var window = typeof window !== 'undefined' ? window : {};



// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = {};
var key;
for (key in Module) {
  if (Module.hasOwnProperty(key)) {
    moduleOverrides[key] = Module[key];
  }
}

var arguments_ = [];
var thisProgram = './this.program';
var quit_ = function(status, toThrow) {
  throw toThrow;
};

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

var ENVIRONMENT_IS_WEB = false;
var ENVIRONMENT_IS_WORKER = false;
var ENVIRONMENT_IS_NODE = false;
var ENVIRONMENT_IS_SHELL = false;
ENVIRONMENT_IS_WEB = typeof window === 'object';
ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
// N.b. Electron.js environment is simultaneously a NODE-environment, but
// also a web environment.
ENVIRONMENT_IS_NODE = typeof process === 'object' && typeof process.versions === 'object' && typeof process.versions.node === 'string';
ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

if (Module['ENVIRONMENT']) {
  throw new Error('Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)');
}

// `/` should be present at the end if `scriptDirectory` is not empty
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}

// Hooks that are implemented differently in different runtime environments.
var read_,
    readAsync,
    readBinary,
    setWindowTitle;

// Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) { // Check worker, not web, since window could be polyfilled
    scriptDirectory = self.location.href;
  } else if (typeof document !== 'undefined' && document.currentScript) { // web
    scriptDirectory = document.currentScript.src;
  }
  // When MODULARIZE, this JS may be executed later, after document.currentScript
  // is gone, so we saved it, and we use it here instead of any other info.
  if (_scriptDir) {
    scriptDirectory = _scriptDir;
  }
  // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
  // otherwise, slice off the final part of the url to find the script directory.
  // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
  // and scriptDirectory will correctly be replaced with an empty string.
  if (scriptDirectory.indexOf('blob:') !== 0) {
    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf('/')+1);
  } else {
    scriptDirectory = '';
  }

  if (!(typeof window === 'object' || typeof importScripts === 'function')) throw new Error('not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)');

  // Differentiate the Web Worker from the Node Worker case, as reading must
  // be done differently.
  {

// include: web_or_worker_shell_read.js


  read_ = function(url) {
    try {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
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
    readBinary = function(url) {
      try {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.responseType = 'arraybuffer';
        xhr.send(null);
        return new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response));
      } catch (err) {
        var data = tryParseAsDataURI(url);
        if (data) {
          return data;
        }
        throw err;
      }
    };
  }

  readAsync = function(url, onload, onerror) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function() {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
        onload(xhr.response);
        return;
      }
      var data = tryParseAsDataURI(url);
      if (data) {
        onload(data.buffer);
        return;
      }
      onerror();
    };
    xhr.onerror = onerror;
    xhr.send(null);
  };

// end include: web_or_worker_shell_read.js
  }

  setWindowTitle = function(title) { document.title = title };
} else
{
  throw new Error('environment detection error');
}

// Set up the out() and err() hooks, which are how we can print to stdout or
// stderr, respectively.
var out = Module['print'] || console.log.bind(console);
var err = Module['printErr'] || console.warn.bind(console);

// Merge back in the overrides
for (key in moduleOverrides) {
  if (moduleOverrides.hasOwnProperty(key)) {
    Module[key] = moduleOverrides[key];
  }
}
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = null;

// Emit code to handle expected values on the Module object. This applies Module.x
// to the proper local x. This has two benefits: first, we only emit it if it is
// expected to arrive, and second, by using a local everywhere else that can be
// minified.
if (Module['arguments']) arguments_ = Module['arguments'];if (!Object.getOwnPropertyDescriptor(Module, 'arguments')) {
  Object.defineProperty(Module, 'arguments', {
    configurable: true,
    get: function() {
      abort('Module.arguments has been replaced with plain arguments_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}
if (Module['thisProgram']) thisProgram = Module['thisProgram'];if (!Object.getOwnPropertyDescriptor(Module, 'thisProgram')) {
  Object.defineProperty(Module, 'thisProgram', {
    configurable: true,
    get: function() {
      abort('Module.thisProgram has been replaced with plain thisProgram (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}
if (Module['quit']) quit_ = Module['quit'];if (!Object.getOwnPropertyDescriptor(Module, 'quit')) {
  Object.defineProperty(Module, 'quit', {
    configurable: true,
    get: function() {
      abort('Module.quit has been replaced with plain quit_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

// perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message
// Assertions on removed incoming Module JS APIs.
assert(typeof Module['memoryInitializerPrefixURL'] === 'undefined', 'Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['pthreadMainPrefixURL'] === 'undefined', 'Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['cdInitializerPrefixURL'] === 'undefined', 'Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['filePackagePrefixURL'] === 'undefined', 'Module.filePackagePrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['read'] === 'undefined', 'Module.read option was removed (modify read_ in JS)');
assert(typeof Module['readAsync'] === 'undefined', 'Module.readAsync option was removed (modify readAsync in JS)');
assert(typeof Module['readBinary'] === 'undefined', 'Module.readBinary option was removed (modify readBinary in JS)');
assert(typeof Module['setWindowTitle'] === 'undefined', 'Module.setWindowTitle option was removed (modify setWindowTitle in JS)');
assert(typeof Module['TOTAL_MEMORY'] === 'undefined', 'Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY');
if (!Object.getOwnPropertyDescriptor(Module, 'read')) {
  Object.defineProperty(Module, 'read', {
    configurable: true,
    get: function() {
      abort('Module.read has been replaced with plain read_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}
if (!Object.getOwnPropertyDescriptor(Module, 'readAsync')) {
  Object.defineProperty(Module, 'readAsync', {
    configurable: true,
    get: function() {
      abort('Module.readAsync has been replaced with plain readAsync (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}
if (!Object.getOwnPropertyDescriptor(Module, 'readBinary')) {
  Object.defineProperty(Module, 'readBinary', {
    configurable: true,
    get: function() {
      abort('Module.readBinary has been replaced with plain readBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}
if (!Object.getOwnPropertyDescriptor(Module, 'setWindowTitle')) {
  Object.defineProperty(Module, 'setWindowTitle', {
    configurable: true,
    get: function() {
      abort('Module.setWindowTitle has been replaced with plain setWindowTitle (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}
var IDBFS = 'IDBFS is no longer included by default; build with -lidbfs.js';
var PROXYFS = 'PROXYFS is no longer included by default; build with -lproxyfs.js';
var WORKERFS = 'WORKERFS is no longer included by default; build with -lworkerfs.js';
var NODEFS = 'NODEFS is no longer included by default; build with -lnodefs.js';




var STACK_ALIGN = 16;

function alignMemory(size, factor) {
  if (!factor) factor = STACK_ALIGN; // stack alignment (16-byte) by default
  return Math.ceil(size / factor) * factor;
}

function getNativeTypeSize(type) {
  switch (type) {
    case 'i1': case 'i8': return 1;
    case 'i16': return 2;
    case 'i32': return 4;
    case 'i64': return 8;
    case 'float': return 4;
    case 'double': return 8;
    default: {
      if (type[type.length-1] === '*') {
        return 4; // A pointer
      } else if (type[0] === 'i') {
        var bits = Number(type.substr(1));
        assert(bits % 8 === 0, 'getNativeTypeSize invalid bits ' + bits + ', type ' + type);
        return bits / 8;
      } else {
        return 0;
      }
    }
  }
}

function warnOnce(text) {
  if (!warnOnce.shown) warnOnce.shown = {};
  if (!warnOnce.shown[text]) {
    warnOnce.shown[text] = 1;
    err(text);
  }
}

// include: runtime_functions.js


// Wraps a JS function as a wasm function with a given signature.
function convertJsFunctionToWasm(func, sig) {

  // If the type reflection proposal is available, use the new
  // "WebAssembly.Function" constructor.
  // Otherwise, construct a minimal wasm module importing the JS function and
  // re-exporting it.
  if (typeof WebAssembly.Function === "function") {
    var typeNames = {
      'i': 'i32',
      'j': 'i64',
      'f': 'f32',
      'd': 'f64'
    };
    var type = {
      parameters: [],
      results: sig[0] == 'v' ? [] : [typeNames[sig[0]]]
    };
    for (var i = 1; i < sig.length; ++i) {
      type.parameters.push(typeNames[sig[i]]);
    }
    return new WebAssembly.Function(type, func);
  }

  // The module is static, with the exception of the type section, which is
  // generated based on the signature passed in.
  var typeSection = [
    0x01, // id: section,
    0x00, // length: 0 (placeholder)
    0x01, // count: 1
    0x60, // form: func
  ];
  var sigRet = sig.slice(0, 1);
  var sigParam = sig.slice(1);
  var typeCodes = {
    'i': 0x7f, // i32
    'j': 0x7e, // i64
    'f': 0x7d, // f32
    'd': 0x7c, // f64
  };

  // Parameters, length + signatures
  typeSection.push(sigParam.length);
  for (var i = 0; i < sigParam.length; ++i) {
    typeSection.push(typeCodes[sigParam[i]]);
  }

  // Return values, length + signatures
  // With no multi-return in MVP, either 0 (void) or 1 (anything else)
  if (sigRet == 'v') {
    typeSection.push(0x00);
  } else {
    typeSection = typeSection.concat([0x01, typeCodes[sigRet]]);
  }

  // Write the overall length of the type section back into the section header
  // (excepting the 2 bytes for the section id and length)
  typeSection[1] = typeSection.length - 2;

  // Rest of the module is static
  var bytes = new Uint8Array([
    0x00, 0x61, 0x73, 0x6d, // magic ("\0asm")
    0x01, 0x00, 0x00, 0x00, // version: 1
  ].concat(typeSection, [
    0x02, 0x07, // import section
      // (import "e" "f" (func 0 (type 0)))
      0x01, 0x01, 0x65, 0x01, 0x66, 0x00, 0x00,
    0x07, 0x05, // export section
      // (export "f" (func 0 (type 0)))
      0x01, 0x01, 0x66, 0x00, 0x00,
  ]));

   // We can compile this wasm module synchronously because it is very small.
  // This accepts an import (at "e.f"), that it reroutes to an export (at "f")
  var module = new WebAssembly.Module(bytes);
  var instance = new WebAssembly.Instance(module, {
    'e': {
      'f': func
    }
  });
  var wrappedFunc = instance.exports['f'];
  return wrappedFunc;
}

var freeTableIndexes = [];

// Weak map of functions in the table to their indexes, created on first use.
var functionsInTableMap;

function getEmptyTableSlot() {
  // Reuse a free index if there is one, otherwise grow.
  if (freeTableIndexes.length) {
    return freeTableIndexes.pop();
  }
  // Grow the table
  try {
    wasmTable.grow(1);
  } catch (err) {
    if (!(err instanceof RangeError)) {
      throw err;
    }
    throw 'Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.';
  }
  return wasmTable.length - 1;
}

// Add a wasm function to the table.
function addFunctionWasm(func, sig) {
  // Check if the function is already in the table, to ensure each function
  // gets a unique index. First, create the map if this is the first use.
  if (!functionsInTableMap) {
    functionsInTableMap = new WeakMap();
    for (var i = 0; i < wasmTable.length; i++) {
      var item = wasmTable.get(i);
      // Ignore null values.
      if (item) {
        functionsInTableMap.set(item, i);
      }
    }
  }
  if (functionsInTableMap.has(func)) {
    return functionsInTableMap.get(func);
  }

  // It's not in the table, add it now.

  var ret = getEmptyTableSlot();

  // Set the new value.
  try {
    // Attempting to call this with JS function will cause of table.set() to fail
    wasmTable.set(ret, func);
  } catch (err) {
    if (!(err instanceof TypeError)) {
      throw err;
    }
    assert(typeof sig !== 'undefined', 'Missing signature argument to addFunction: ' + func);
    var wrapped = convertJsFunctionToWasm(func, sig);
    wasmTable.set(ret, wrapped);
  }

  functionsInTableMap.set(func, ret);

  return ret;
}

function removeFunction(index) {
  functionsInTableMap.delete(wasmTable.get(index));
  freeTableIndexes.push(index);
}

// 'sig' parameter is required for the llvm backend but only when func is not
// already a WebAssembly function.
function addFunction(func, sig) {
  assert(typeof func !== 'undefined');

  return addFunctionWasm(func, sig);
}

// end include: runtime_functions.js
// include: runtime_debug.js


// end include: runtime_debug.js
function makeBigInt(low, high, unsigned) {
  return unsigned ? ((+((low>>>0)))+((+((high>>>0)))*4294967296.0)) : ((+((low>>>0)))+((+((high|0)))*4294967296.0));
}

var tempRet0 = 0;

var setTempRet0 = function(value) {
  tempRet0 = value;
};

var getTempRet0 = function() {
  return tempRet0;
};

function getCompilerSetting(name) {
  throw 'You must build with -s RETAIN_COMPILER_SETTINGS=1 for getCompilerSetting or emscripten_get_compiler_setting to work';
}



// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html

var wasmBinary;if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];if (!Object.getOwnPropertyDescriptor(Module, 'wasmBinary')) {
  Object.defineProperty(Module, 'wasmBinary', {
    configurable: true,
    get: function() {
      abort('Module.wasmBinary has been replaced with plain wasmBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}
var noExitRuntime;if (Module['noExitRuntime']) noExitRuntime = Module['noExitRuntime'];if (!Object.getOwnPropertyDescriptor(Module, 'noExitRuntime')) {
  Object.defineProperty(Module, 'noExitRuntime', {
    configurable: true,
    get: function() {
      abort('Module.noExitRuntime has been replaced with plain noExitRuntime (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

if (typeof WebAssembly !== 'object') {
  abort('no native wasm support detected');
}

// include: runtime_safe_heap.js


// In MINIMAL_RUNTIME, setValue() and getValue() are only available when building with safe heap enabled, for heap safety checking.
// In traditional runtime, setValue() and getValue() are always available (although their use is highly discouraged due to perf penalties)

/** @param {number} ptr
    @param {number} value
    @param {string} type
    @param {number|boolean=} noSafe */
function setValue(ptr, value, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': HEAP8[((ptr)>>0)] = value; break;
      case 'i8': HEAP8[((ptr)>>0)] = value; break;
      case 'i16': HEAP16[((ptr)>>1)] = value; break;
      case 'i32': HEAP32[((ptr)>>2)] = value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)] = tempI64[0],HEAP32[(((ptr)+(4))>>2)] = tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)] = value; break;
      case 'double': HEAPF64[((ptr)>>3)] = value; break;
      default: abort('invalid type for setValue: ' + type);
    }
}

/** @param {number} ptr
    @param {string} type
    @param {number|boolean=} noSafe */
function getValue(ptr, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': return HEAP8[((ptr)>>0)];
      case 'i8': return HEAP8[((ptr)>>0)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP32[((ptr)>>2)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      default: abort('invalid type for getValue: ' + type);
    }
  return null;
}

// end include: runtime_safe_heap.js
// Wasm globals

var wasmMemory;

//========================================
// Runtime essentials
//========================================

// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code code in shell environments
// but only when noExitRuntime is false.
var EXITSTATUS;

/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed: ' + text);
  }
}

// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function getCFunc(ident) {
  var func = Module['_' + ident]; // closure exported function
  assert(func, 'Cannot call unknown function ' + ident + ', make sure it is exported');
  return func;
}

// C calling interface.
/** @param {string|null=} returnType
    @param {Array=} argTypes
    @param {Arguments|Array=} args
    @param {Object=} opts */
function ccall(ident, returnType, argTypes, args, opts) {
  // For fast lookup of conversion functions
  var toC = {
    'string': function(str) {
      var ret = 0;
      if (str !== null && str !== undefined && str !== 0) { // null string
        // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
        var len = (str.length << 2) + 1;
        ret = stackAlloc(len);
        stringToUTF8(str, ret, len);
      }
      return ret;
    },
    'array': function(arr) {
      var ret = stackAlloc(arr.length);
      writeArrayToMemory(arr, ret);
      return ret;
    }
  };

  function convertReturnValue(ret) {
    if (returnType === 'string') return UTF8ToString(ret);
    if (returnType === 'boolean') return Boolean(ret);
    return ret;
  }

  var func = getCFunc(ident);
  var cArgs = [];
  var stack = 0;
  assert(returnType !== 'array', 'Return type should not be "array".');
  if (args) {
    for (var i = 0; i < args.length; i++) {
      var converter = toC[argTypes[i]];
      if (converter) {
        if (stack === 0) stack = stackSave();
        cArgs[i] = converter(args[i]);
      } else {
        cArgs[i] = args[i];
      }
    }
  }
  var ret = func.apply(null, cArgs);

  ret = convertReturnValue(ret);
  if (stack !== 0) stackRestore(stack);
  return ret;
}

/** @param {string=} returnType
    @param {Array=} argTypes
    @param {Object=} opts */
function cwrap(ident, returnType, argTypes, opts) {
  return function() {
    return ccall(ident, returnType, argTypes, arguments, opts);
  }
}

// We used to include malloc/free by default in the past. Show a helpful error in
// builds with assertions.

var ALLOC_NORMAL = 0; // Tries to use _malloc()
var ALLOC_STACK = 1; // Lives for the duration of the current function call

// allocate(): This is for internal use. You can use it yourself as well, but the interface
//             is a little tricky (see docs right below). The reason is that it is optimized
//             for multiple syntaxes to save space in generated code. So you should
//             normally not use allocate(), and instead allocate memory using _malloc(),
//             initialize it with setValue(), and so forth.
// @slab: An array of data.
// @allocator: How to allocate memory, see ALLOC_*
/** @type {function((Uint8Array|Array<number>), number)} */
function allocate(slab, allocator) {
  var ret;
  assert(typeof allocator === 'number', 'allocate no longer takes a type argument')
  assert(typeof slab !== 'number', 'allocate no longer takes a number as arg0')

  if (allocator == ALLOC_STACK) {
    ret = stackAlloc(slab.length);
  } else {
    ret = _malloc(slab.length);
  }

  if (slab.subarray || slab.slice) {
    HEAPU8.set(/** @type {!Uint8Array} */(slab), ret);
  } else {
    HEAPU8.set(new Uint8Array(slab), ret);
  }
  return ret;
}

// include: runtime_strings.js


// runtime_strings.js: Strings related runtime functions that are part of both MINIMAL_RUNTIME and regular runtime.

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
// a copy of that string as a Javascript String object.

var UTF8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : undefined;

/**
 * @param {number} idx
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ArrayToString(heap, idx, maxBytesToRead) {
  var endIdx = idx + maxBytesToRead;
  var endPtr = idx;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  // (As a tiny code save trick, compare endPtr against endIdx using a negation, so that undefined means Infinity)
  while (heap[endPtr] && !(endPtr >= endIdx)) ++endPtr;

  if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
    return UTF8Decoder.decode(heap.subarray(idx, endPtr));
  } else {
    var str = '';
    // If building with TextDecoder, we have already computed the string length above, so test loop end condition against that
    while (idx < endPtr) {
      // For UTF8 byte structure, see:
      // http://en.wikipedia.org/wiki/UTF-8#Description
      // https://www.ietf.org/rfc/rfc2279.txt
      // https://tools.ietf.org/html/rfc3629
      var u0 = heap[idx++];
      if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
      var u1 = heap[idx++] & 63;
      if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
      var u2 = heap[idx++] & 63;
      if ((u0 & 0xF0) == 0xE0) {
        u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
      } else {
        if ((u0 & 0xF8) != 0xF0) warnOnce('Invalid UTF-8 leading byte 0x' + u0.toString(16) + ' encountered when deserializing a UTF-8 string on the asm.js/wasm heap to a JS string!');
        u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heap[idx++] & 63);
      }

      if (u0 < 0x10000) {
        str += String.fromCharCode(u0);
      } else {
        var ch = u0 - 0x10000;
        str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
      }
    }
  }
  return str;
}

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns a
// copy of that string as a Javascript String object.
// maxBytesToRead: an optional length that specifies the maximum number of bytes to read. You can omit
//                 this parameter to scan the string until the first \0 byte. If maxBytesToRead is
//                 passed, and the string at [ptr, ptr+maxBytesToReadr[ contains a null byte in the
//                 middle, then the string will cut short at that byte index (i.e. maxBytesToRead will
//                 not produce a string of exact length [ptr, ptr+maxBytesToRead[)
//                 N.B. mixing frequent uses of UTF8ToString() with and without maxBytesToRead may
//                 throw JS JIT optimizations off, so it is worth to consider consistently using one
//                 style or the other.
/**
 * @param {number} ptr
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ToString(ptr, maxBytesToRead) {
  return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
}

// Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
// encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   heap: the array to copy to. Each index in this array is assumed to be one 8-byte element.
//   outIdx: The starting offset in the array to begin the copying.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array.
//                    This count should include the null terminator,
//                    i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.
//                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
  if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.
    return 0;

  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) {
      var u1 = str.charCodeAt(++i);
      u = 0x10000 + ((u & 0x3FF) << 10) | (u1 & 0x3FF);
    }
    if (u <= 0x7F) {
      if (outIdx >= endIdx) break;
      heap[outIdx++] = u;
    } else if (u <= 0x7FF) {
      if (outIdx + 1 >= endIdx) break;
      heap[outIdx++] = 0xC0 | (u >> 6);
      heap[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0xFFFF) {
      if (outIdx + 2 >= endIdx) break;
      heap[outIdx++] = 0xE0 | (u >> 12);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    } else {
      if (outIdx + 3 >= endIdx) break;
      if (u >= 0x200000) warnOnce('Invalid Unicode code point 0x' + u.toString(16) + ' encountered when serializing a JS string to an UTF-8 string on the asm.js/wasm heap! (Valid unicode code points should be in range 0-0x1FFFFF).');
      heap[outIdx++] = 0xF0 | (u >> 18);
      heap[outIdx++] = 0x80 | ((u >> 12) & 63);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    }
  }
  // Null-terminate the pointer to the buffer.
  heap[outIdx] = 0;
  return outIdx - startIdx;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8(str, outPtr, maxBytesToWrite) {
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.
function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) ++len;
    else if (u <= 0x7FF) len += 2;
    else if (u <= 0xFFFF) len += 3;
    else len += 4;
  }
  return len;
}

// end include: runtime_strings.js
// include: runtime_strings_extra.js


// runtime_strings_extra.js: Strings related runtime functions that are available only in regular runtime.

// Given a pointer 'ptr' to a null-terminated ASCII-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function AsciiToString(ptr) {
  var str = '';
  while (1) {
    var ch = HEAPU8[((ptr++)>>0)];
    if (!ch) return str;
    str += String.fromCharCode(ch);
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in ASCII form. The copy will require at most str.length+1 bytes of space in the HEAP.

function stringToAscii(str, outPtr) {
  return writeAsciiToMemory(str, outPtr, false);
}

// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

var UTF16Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-16le') : undefined;

function UTF16ToString(ptr, maxBytesToRead) {
  assert(ptr % 2 == 0, 'Pointer passed to UTF16ToString must be aligned to two bytes!');
  var endPtr = ptr;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  var idx = endPtr >> 1;
  var maxIdx = idx + maxBytesToRead / 2;
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
  endPtr = idx << 1;

  if (endPtr - ptr > 32 && UTF16Decoder) {
    return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
  } else {
    var str = '';

    // If maxBytesToRead is not passed explicitly, it will be undefined, and the for-loop's condition
    // will always evaluate to true. The loop is then terminated on the first null char.
    for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
      var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
      if (codeUnit == 0) break;
      // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
      str += String.fromCharCode(codeUnit);
    }

    return str;
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16 form. The copy will require at most str.length*4+2 bytes of space in the HEAP.
// Use the function lengthBytesUTF16() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=2, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<2 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF16(str, outPtr, maxBytesToWrite) {
  assert(outPtr % 2 == 0, 'Pointer passed to stringToUTF16 must be aligned to two bytes!');
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 2) return 0;
  maxBytesToWrite -= 2; // Null terminator.
  var startPtr = outPtr;
  var numCharsToWrite = (maxBytesToWrite < str.length*2) ? (maxBytesToWrite / 2) : str.length;
  for (var i = 0; i < numCharsToWrite; ++i) {
    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    HEAP16[((outPtr)>>1)] = codeUnit;
    outPtr += 2;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP16[((outPtr)>>1)] = 0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF16(str) {
  return str.length*2;
}

function UTF32ToString(ptr, maxBytesToRead) {
  assert(ptr % 4 == 0, 'Pointer passed to UTF32ToString must be aligned to four bytes!');
  var i = 0;

  var str = '';
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(i >= maxBytesToRead / 4)) {
    var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
    if (utf32 == 0) break;
    ++i;
    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    if (utf32 >= 0x10000) {
      var ch = utf32 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
  return str;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32 form. The copy will require at most str.length*4+4 bytes of space in the HEAP.
// Use the function lengthBytesUTF32() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=4, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<4 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF32(str, outPtr, maxBytesToWrite) {
  assert(outPtr % 4 == 0, 'Pointer passed to stringToUTF32 must be aligned to four bytes!');
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 4) return 0;
  var startPtr = outPtr;
  var endPtr = startPtr + maxBytesToWrite - 4;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
      var trailSurrogate = str.charCodeAt(++i);
      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
    }
    HEAP32[((outPtr)>>2)] = codeUnit;
    outPtr += 4;
    if (outPtr + 4 > endPtr) break;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP32[((outPtr)>>2)] = 0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF32(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i);
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.
    len += 4;
  }

  return len;
}

// Allocate heap space for a JS string, and write it there.
// It is the responsibility of the caller to free() that memory.
function allocateUTF8(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = _malloc(size);
  if (ret) stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Allocate stack space for a JS string, and write it there.
function allocateUTF8OnStack(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = stackAlloc(size);
  stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Deprecated: This function should not be called because it is unsafe and does not provide
// a maximum length limit of how many bytes it is allowed to write. Prefer calling the
// function stringToUTF8Array() instead, which takes in a maximum length that can be used
// to be secure from out of bounds writes.
/** @deprecated
    @param {boolean=} dontAddNull */
function writeStringToMemory(string, buffer, dontAddNull) {
  warnOnce('writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!');

  var /** @type {number} */ lastChar, /** @type {number} */ end;
  if (dontAddNull) {
    // stringToUTF8Array always appends null. If we don't want to do that, remember the
    // character that existed at the location where the null will be placed, and restore
    // that after the write (below).
    end = buffer + lengthBytesUTF8(string);
    lastChar = HEAP8[end];
  }
  stringToUTF8(string, buffer, Infinity);
  if (dontAddNull) HEAP8[end] = lastChar; // Restore the value under the null character.
}

function writeArrayToMemory(array, buffer) {
  assert(array.length >= 0, 'writeArrayToMemory array must have a length (should be an array or typed array)')
  HEAP8.set(array, buffer);
}

/** @param {boolean=} dontAddNull */
function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; ++i) {
    assert(str.charCodeAt(i) === str.charCodeAt(i)&0xff);
    HEAP8[((buffer++)>>0)] = str.charCodeAt(i);
  }
  // Null-terminate the pointer to the HEAP.
  if (!dontAddNull) HEAP8[((buffer)>>0)] = 0;
}

// end include: runtime_strings_extra.js
// Memory management

function alignUp(x, multiple) {
  if (x % multiple > 0) {
    x += multiple - (x % multiple);
  }
  return x;
}

var HEAP,
/** @type {ArrayBuffer} */
  buffer,
/** @type {Int8Array} */
  HEAP8,
/** @type {Uint8Array} */
  HEAPU8,
/** @type {Int16Array} */
  HEAP16,
/** @type {Uint16Array} */
  HEAPU16,
/** @type {Int32Array} */
  HEAP32,
/** @type {Uint32Array} */
  HEAPU32,
/** @type {Float32Array} */
  HEAPF32,
/** @type {Float64Array} */
  HEAPF64;

function updateGlobalBufferAndViews(buf) {
  buffer = buf;
  Module['HEAP8'] = HEAP8 = new Int8Array(buf);
  Module['HEAP16'] = HEAP16 = new Int16Array(buf);
  Module['HEAP32'] = HEAP32 = new Int32Array(buf);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(buf);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(buf);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(buf);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(buf);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(buf);
}

var TOTAL_STACK = 5242880;
if (Module['TOTAL_STACK']) assert(TOTAL_STACK === Module['TOTAL_STACK'], 'the stack size can no longer be determined at runtime')

var INITIAL_MEMORY = Module['INITIAL_MEMORY'] || 16777216;if (!Object.getOwnPropertyDescriptor(Module, 'INITIAL_MEMORY')) {
  Object.defineProperty(Module, 'INITIAL_MEMORY', {
    configurable: true,
    get: function() {
      abort('Module.INITIAL_MEMORY has been replaced with plain INITIAL_MEMORY (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

assert(INITIAL_MEMORY >= TOTAL_STACK, 'INITIAL_MEMORY should be larger than TOTAL_STACK, was ' + INITIAL_MEMORY + '! (TOTAL_STACK=' + TOTAL_STACK + ')');

// check for full engine support (use string 'subarray' to avoid closure compiler confusion)
assert(typeof Int32Array !== 'undefined' && typeof Float64Array !== 'undefined' && Int32Array.prototype.subarray !== undefined && Int32Array.prototype.set !== undefined,
       'JS engine does not provide full typed array support');

// If memory is defined in wasm, the user can't provide it.
assert(!Module['wasmMemory'], 'Use of `wasmMemory` detected.  Use -s IMPORTED_MEMORY to define wasmMemory externally');
assert(INITIAL_MEMORY == 16777216, 'Detected runtime INITIAL_MEMORY setting.  Use -s IMPORTED_MEMORY to define wasmMemory dynamically');

// include: runtime_init_table.js
// In regular non-RELOCATABLE mode the table is exported
// from the wasm module and this will be assigned once
// the exports are available.
var wasmTable;

// end include: runtime_init_table.js
// include: runtime_stack_check.js


// Initializes the stack cookie. Called at the startup of main and at the startup of each thread in pthreads mode.
function writeStackCookie() {
  var max = _emscripten_stack_get_end();
  assert((max & 3) == 0);
  // The stack grows downwards
  HEAPU32[(max >> 2)+1] = 0x2135467;
  HEAPU32[(max >> 2)+2] = 0x89BACDFE;
  // Also test the global address 0 for integrity.
  HEAP32[0] = 0x63736d65; /* 'emsc' */
}

function checkStackCookie() {
  if (ABORT) return;
  var max = _emscripten_stack_get_end();
  var cookie1 = HEAPU32[(max >> 2)+1];
  var cookie2 = HEAPU32[(max >> 2)+2];
  if (cookie1 != 0x2135467 || cookie2 != 0x89BACDFE) {
    abort('Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x' + cookie2.toString(16) + ' ' + cookie1.toString(16));
  }
  // Also test the global address 0 for integrity.
  if (HEAP32[0] !== 0x63736d65 /* 'emsc' */) abort('Runtime error: The application has corrupted its heap memory area (address zero)!');
}

// end include: runtime_stack_check.js
// include: runtime_assertions.js


// Endianness check (note: assumes compiler arch was little-endian)
(function() {
  var h16 = new Int16Array(1);
  var h8 = new Int8Array(h16.buffer);
  h16[0] = 0x6373;
  if (h8[0] !== 0x73 || h8[1] !== 0x63) throw 'Runtime error: expected the system to be little-endian!';
})();

function abortFnPtrError(ptr, sig) {
	abort("Invalid function pointer " + ptr + " called with signature '" + sig + "'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this). Build with ASSERTIONS=2 for more info.");
}

// end include: runtime_assertions.js
var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATMAIN__    = []; // functions called when main() is to be run
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the main() is called

var runtimeInitialized = false;
var runtimeExited = false;

__ATINIT__.push({ func: function() { ___wasm_call_ctors() } });

function preRun() {

  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
  checkStackCookie();
  assert(!runtimeInitialized);
  runtimeInitialized = true;
  if (!Module["noFSInit"] && !FS.init.initialized) FS.init();
TTY.init();
  callRuntimeCallbacks(__ATINIT__);
}

function preMain() {
  checkStackCookie();
  FS.ignorePermissions = false;
  callRuntimeCallbacks(__ATMAIN__);
}

function exitRuntime() {
  checkStackCookie();
  runtimeExited = true;
}

function postRun() {
  checkStackCookie();

  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}

function addOnPreMain(cb) {
  __ATMAIN__.unshift(cb);
}

function addOnExit(cb) {
}

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}

// include: runtime_math.js


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc

assert(Math.imul, 'This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.fround, 'This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.clz32, 'This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.trunc, 'This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');

// end include: runtime_math.js
// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// Module.preRun (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled
var runDependencyTracking = {};

function getUniqueRunDependency(id) {
  var orig = id;
  while (1) {
    if (!runDependencyTracking[id]) return id;
    id = orig + Math.random();
  }
}

function addRunDependency(id) {
  runDependencies++;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (id) {
    assert(!runDependencyTracking[id]);
    runDependencyTracking[id] = 1;
    if (runDependencyWatcher === null && typeof setInterval !== 'undefined') {
      // Check for missing dependencies every few seconds
      runDependencyWatcher = setInterval(function() {
        if (ABORT) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
          return;
        }
        var shown = false;
        for (var dep in runDependencyTracking) {
          if (!shown) {
            shown = true;
            err('still waiting on run dependencies:');
          }
          err('dependency: ' + dep);
        }
        if (shown) {
          err('(end of list)');
        }
      }, 10000);
    }
  } else {
    err('warning: run dependency added without ID');
  }
}

function removeRunDependency(id) {
  runDependencies--;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (id) {
    assert(runDependencyTracking[id]);
    delete runDependencyTracking[id];
  } else {
    err('warning: run dependency removed without ID');
  }
  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}

Module["preloadedImages"] = {}; // maps url to image data
Module["preloadedAudios"] = {}; // maps url to audio data

/** @param {string|number=} what */
function abort(what) {
  if (Module['onAbort']) {
    Module['onAbort'](what);
  }

  what += '';
  err(what);

  ABORT = true;
  EXITSTATUS = 1;

  var output = 'abort(' + what + ') at ' + stackTrace();
  what = output;

  // Use a wasm runtime error, because a JS error might be seen as a foreign
  // exception, which means we'd run destructors on it. We need the error to
  // simply make the program stop.
  var e = new WebAssembly.RuntimeError(what);

  readyPromiseReject(e);
  // Throw the error whether or not MODULARIZE is set because abort is used
  // in code paths apart from instantiation where an exception is expected
  // to be thrown when abort is called.
  throw e;
}

// {{MEM_INITIALIZER}}

// include: memoryprofiler.js


// end include: memoryprofiler.js
// include: URIUtils.js


function hasPrefix(str, prefix) {
  return String.prototype.startsWith ?
      str.startsWith(prefix) :
      str.indexOf(prefix) === 0;
}

// Prefix of data URIs emitted by SINGLE_FILE and related options.
var dataURIPrefix = 'data:application/octet-stream;base64,';

// Indicates whether filename is a base64 data URI.
function isDataURI(filename) {
  return hasPrefix(filename, dataURIPrefix);
}

var fileURIPrefix = "file://";

// Indicates whether filename is delivered via file protocol (as opposed to http/https)
function isFileURI(filename) {
  return hasPrefix(filename, fileURIPrefix);
}

// end include: URIUtils.js
function createExportWrapper(name, fixedasm) {
  return function() {
    var displayName = name;
    var asm = fixedasm;
    if (!fixedasm) {
      asm = Module['asm'];
    }
    assert(runtimeInitialized, 'native function `' + displayName + '` called before runtime initialization');
    assert(!runtimeExited, 'native function `' + displayName + '` called after runtime exit (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    if (!asm[name]) {
      assert(asm[name], 'exported native function `' + displayName + '` not found');
    }
    return asm[name].apply(null, arguments);
  };
}

var wasmBinaryFile = 'data:application/octet-stream;base64,AGFzbQEAAAABsoGAgAAbYAF/AX9gA39/fwF/YAJ/fwF/YAF/AGACf38AYAN/f38AYAR/f39/AX9gBX9/f39/AGAAAX9gAABgA39+fwF+YAV/f39/fwF/YAR/f39/AGAEf35+fwBgA39+fwF/YAF8AXxgCn9/f39/f39/f38AYAV/fn5+fgBgAn98AGAEf35/fwF/YAJ+fgF/YAJ8fwF/YAR/f35/AX5gAn5+AX1gAnx/AXxgAnx8AXxgA3x8fwF8AomCgIAACgNlbnYKX19zeXNfb3BlbgABFndhc2lfc25hcHNob3RfcHJldmlldzEIZmRfY2xvc2UAAANlbnYNX19zeXNfZmNudGw2NAABA2VudgtfX3N5c19pb2N0bAABFndhc2lfc25hcHNob3RfcHJldmlldzEIZmRfd3JpdGUABhZ3YXNpX3NuYXBzaG90X3ByZXZpZXcxB2ZkX3JlYWQABgNlbnYWZW1zY3JpcHRlbl9yZXNpemVfaGVhcAAAA2VudhVlbXNjcmlwdGVuX21lbWNweV9iaWcAAQNlbnYLc2V0VGVtcFJldDAAAxZ3YXNpX3NuYXBzaG90X3ByZXZpZXcxB2ZkX3NlZWsACwO6gYCAALgBCQAAAgkAARADBQMCAgICAQIABQIEDAcHBwcHBwcHBwICBAUFBQUFBQMDBAMEBAAAAQMDAwMDAwQDAwUEBAUEBAQDDAYBAwYCBQAGAQEBAQEBAQEEAAIGAQAABgEAAgAICAkAAAACAgUDBgACAAEaCxUZDw8CAgIAAQICAQICAgECAgEAAAAIAAIACAkAAgoAAAMABgEODgEAAQAAAwMAEQ0EDRcUEgADABgBAQADAAkICAgDABYLEwSFgICAAAFwAQ8PBYeAgIAAAQGAAoCAAgaTgICAAAN/AUGA1MACC38BQQALfwFBAAsHhISAgAAcBm1lbW9yeQIAEV9fd2FzbV9jYWxsX2N0b3JzAAoGbWFsbG9jALABBGZyZWUAsQEObWlkX3Nvbmdfc3RhcnQAMg1taWRfc29uZ19zZWVrADcXbWlkX3NvbmdfZ2V0X3RvdGFsX3RpbWUAOBFtaWRfc29uZ19nZXRfdGltZQA5Em1pZF9zb25nX3JlYWRfd2F2ZQA6GV9faW5kaXJlY3RfZnVuY3Rpb25fdGFibGUBABRtaWRfaXN0cmVhbV9v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eHENAANAIAAgAjYCACABKAIEIQIgAEEEaiEAIAFBBGohASACQX9zIAJB//37d2pxQYCBgoR4cUUNAAsLIAAgAS0AACICOgAAIAJFDQADQCAAIAEtAAEiAjoAASAAQQFqIQAgAUEBaiEBIAINAAsLIAALLwEBfyABQf8BcSEBA0ACQCACDQBBAA8LIAAgAkF/aiICaiIDLQAAIAFHDQALIAMLjwEBBX8DQCAAIgFBAWohACABLAAAEI8BDQALQQAhAkEAIQNBACEEAkACQAJAIAEsAAAiBUFVag4DAQIAAgtBASEDCyAALAAAIQUgACEBIAMhBAsCQCAFEI4BRQ0AA0AgAkEKbCABLAAAa0EwaiECIAEsAAEhACABQQFqIQEgABCOAQ0ACwsgAkEAIAJrIAQbCwoAIABBUGpBCkkLEAAgAEEgRiAAQXdqQQVJcgsGAEG0zwALHgACQCAAQYFgSQ0AEJABQQAgAGs2AgBBfyEACyAAC3UBA38jAEEQayICJAACQAJAAkBB0MQAIAEsAAAQiAENABCQAUEcNgIADAELIAEQkwEhAyACQbYDNgIAQQAhBCAAIANBgIACciACEAAQkQEiAEEASA0BIAAgARCXASIEDQEgABABGgtBACEECyACQRBqJAAgBAt0AQF/QQIhAQJAIABBKxCIAQ0AIAAtAABB8gBHIQELIAFBgAFyIAEgAEH4ABCIARsiAUGAgCByIAEgAEHlABCIARsiASABQcAAciAALQAAIgBB8gBGGyIBQYAEciABIABB9wBGGyIBQYAIciABIABB4QBGGwsNAEH4zwAQpgFBgNAACwkAQfjPABCnAQsxAQJ/IAAQlAEiASgCADYCOAJAIAEoAgAiAkUNACACIAA2AjQLIAEgADYCABCVASAAC8cCAQJ/IwBBIGsiAiQAAkACQAJAAkBB1MQAIAEsAAAQiAENABCQAUEcNgIADAELQZgJELABIgMNAQtBACEDDAELIANBAEGQARC1ARoCQCABQSsQiAENACADQQhBBCABLQAAQfIARhs2AgALAkACQCABLQAAQeEARg0AIAMoAgAhAQwBCwJAIABBA0EAEAIiAUGACHENACACIAFBgAhyNgIQIABBBCACQRBqEAIaCyADIAMoAgBBgAFyIgE2AgALIANB/wE6AEsgA0GACDYCMCADIAA2AjwgAyAD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CwQAIAALDAAgACgCPBCkARABCwIACwIACxYAAkAgAA0AQQAPCxCQASAANgIAQX8L6wsCBX8PfiMAQeAAayIFJAAgAUIgiCACQiCGhCEKIANCEYggBEIvhoQhCyADQjGIIARC////////P4MiDEIPhoQhDSAEIAKFQoCAgICAgICAgH+DIQ4gAkL///////8/gyIPQiCIIRAgDEIRiCERIARCMIinQf//AXEhBgJAAkACQCACQjCIp0H//wFxIgdBf2pB/f8BSw0AQQAhCCAGQX9qQf7/AUkNAQsCQCABUCACQv///////////wCDIhJCgICAgICAwP//AFQgEkKAgICAgIDA//8AURsNACACQoCAgICAgCCEIQ4MAgsCQCADUCAEQv///////////wCDIgJCgICAgICAwP//AFQgAkKAgICAgIDA//8AURsNACAEQoCAgICAgCCEIQ4gAyEBDAILAkAgASASQoCAgICAgMD//wCFhEIAUg0AAkAgAyAChFBFDQBCgICAgICA4P//ACEOQgAhAQwDCyAOQoCAgICAgMD//wCEIQ5CACEBDAILAkAgAyACQoCAgICAgMD//wCFhEIAUg0AIAEgEoQhAkIAIQECQCACUEUNAEKAgICAgIDg//8AIQ4MAwsgDkKAgICAgIDA//8AhCEODAILAkAgASAShEIAUg0AQgAhAQwCCwJAIAMgAoRCAFINAEIAIQEMAgtBACEIAkAgEkL///////8/Vg0AIAVB0ABqIAEgDyABIA8gD1AiCBt5IAhBBnStfKciCEFxahCsAUEQIAhrIQggBSkDUCIBQiCIIAVB2ABqKQMAIg9CIIaEIQogD0IgiCEQCyACQv///////z9WDQAgBUHAAGogAyAMIAMgDCAMUCIJG3kgCUEGdK18pyIJQXFqEKwBIAggCWtBEGohCCAFKQNAIgNCMYggBUHIAGopAwAiAkIPhoQhDSADQhGIIAJCL4aEIQsgAkIRiCERCyALQv////8PgyICIAFC/////w+DIgR+IhMgA0IPhkKAgP7/D4MiASAKQv////8PgyIDfnwiCkIghiIMIAEgBH58IgsgDFStIAIgA34iFCABIA9C/////w+DIgx+fCISIA1C/////w+DIg8gBH58Ig0gCkIgiCAKIBNUrUIghoR8IhMgAiAMfiIVIAEgEEKAgASEIgp+fCIQIA8gA358IhYgEUL/////B4NCgICAgAiEIgEgBH58IhFCIIZ8Ihd8IQQgByAGaiAIakGBgH9qIQYCQAJAIA8gDH4iGCACIAp+fCICIBhUrSACIAEgA358IgMgAlStfCADIBIgFFStIA0gElStfHwiAiADVK18IAEgCn58IAEgDH4iAyAPIAp+fCIBIANUrUIghiABQiCIhHwgAiABQiCGfCIBIAJUrXwgASARQiCIIBAgFVStIBYgEFStfCARIBZUrXxCIIaEfCIDIAFUrXwgAyATIA1UrSAXIBNUrXx8IgIgA1StfCIBQoCAgICAgMAAg1ANACAGQQFqIQYMAQsgC0I/iCEDIAFCAYYgAkI/iIQhASACQgGGIARCP4iEIQIgC0IBhiELIAMgBEIBhoQhBAsCQCAGQf//AUgNACAOQoCAgICAgMD//wCEIQ5CACEBDAELAkACQCAGQQBKDQACQEEBIAZrIgdBgAFJDQBCACEBDAMLIAVBMGogCyAEIAZB/wBqIgYQrAEgBUEgaiACIAEgBhCsASAFQRBqIAsgBCAHEKoBIAUgAiABIAcQqgEgBSkDICAFKQMQhCAFKQMwIAVBMGpBCGopAwCEQgBSrYQhCyAFQSBqQQhqKQMAIAVBEGpBCGopAwCEIQQgBUEIaikDACEBIAUpAwAhAgwBCyAGrUIwhiABQv///////z+DhCEBCyABIA6EIQ4CQCALUCAEQn9VIARCgICAgICAgICAf1EbDQAgDiACQgF8IgEgAlStfCEODAELAkAgCyAEQoCAgICAgICAgH+FhEIAUQ0AIAIhAQwBCyAOIAIgAkIBg3wiASACVK18IQ4LIAAgATcDACAAIA43AwggBUHgAGokAAtTAQF+AkACQCADQcAAcUUNACACIANBQGqtiCEBQgAhAgwBCyADRQ0AIAJBwAAgA2uthiABIAOtIgSIhCEBIAIgBIghAgsgACABNwMAIAAgAjcDCAtyAgF/An4jAEEQayICJAACQAJAIAENAEIAIQNCACEEDAELIAIgAa1CACABZyIBQdEAahCsASACQQhqKQMAQoCAgICAgMAAhUGegAEgAWutQjCGfCEEIAIpAwAhAwsgACADNwMAIAAgBDcDCCACQRBqJAALUwEBfgJAAkAgA0HAAHFFDQAgASADQUBqrYYhAkIAIQEMAQsgA0UNACABQcAAIANrrYggAiADrSIEhoQhAiABIASGIQELIAAgATcDACAAIAI3AwgLxAMCA38BfiMAQSBrIgIkAAJAAkAgAUL///////////8AgyIFQoCAgICAgMC/QHwgBUKAgICAgIDAwL9/fFoNACABQhmIpyEDAkAgAFAgAUL///8PgyIFQoCAgAhUIAVCgICACFEbDQAgA0GBgICABGohBAwCCyADQYCAgIAEaiEEIAAgBUKAgIAIhYRCAFINASAEIANBAXFqIQQMAQsCQCAAUCAFQoCAgICAgMD//wBUIAVCgICAgICAwP//AFEbDQAgAUIZiKdB////AXFBgICA/gdyIQQMAQtBgICA/AchBCAFQv///////7+/wABWDQBBACEEIAVCMIinIgNBkf4ASQ0AIAJBEGogACABQv///////z+DQoCAgICAgMAAhCIFIANB/4F/ahCsASACIAAgBUGB/wAgA2sQqgEgAkEIaikDACIFQhmIpyEEAkAgAikDACACKQMQIAJBEGpBCGopAwCEQgBSrYQiAFAgBUL///8PgyIFQoCAgAhUIAVCgICACFEbDQAgBEEBaiEEDAELIAAgBUKAgIAIhYRCAFINACAEQQFxIARqIQQLIAJBIGokACAEIAFCIIinQYCAgIB4cXK+C40BAQN/IwBBEGsiAiQAQQAhAwJAIAFCMIinQf//AXEiBEH//wBJDQACQCAEQYGAf2pBIEkNAEH/////B0GAgICAeCABQn9VGyEDDAELIAIgACABQv///////z+DQoCAgICAgMAAhEHvgAEgBGsQqgEgAigCACIDQQAgA2sgAUJ/VRshAwsgAkEQaiQAIAMLjgICAn8DfiMAQRBrIgIkAAJAAkAgAb0iBEL///////////8AgyIFQoCAgICAgIB4fEL/////////7/8AVg0AIAVCPIYhBiAFQgSIQoCAgICAgICAPHwhBQwBCwJAIAVCgICAgICAgPj/AFQNACAEQjyGIQYgBEIEiEKAgICAgIDA//8AhCEFDAELAkAgBVBFDQBCACEGQgAhBQwBCyACIAVCACAEp2dBIGogBUIgiKdnIAVCgICAgBBUGyIDQTFqEKwBIAJBCGopAwBCgICAgICAwACFQYz4ACADa61CMIaEIQUgAikDACEGCyAAIAY3AwAgACAFIARCgICAgICA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DAELIABEAAAAAAAAEACiIQAgAUGGaCABQYZoShtB/A9qIQELIAAgAUH/B2qtQjSGv6ILkQQBA38CQCACQYAESQ0AIAAgASACEAcaIAAPCyAAIAJqIQMCQAJAIAEgAHNBA3ENAAJAAkAgAkEBTg0AIAAhAgwBCwJAIABBA3ENACAAIQIMAQsgACECA0AgAiABLQAAOgAAIAFBAWohASACQQFqIgIgA08NASACQQNxDQALCwJAIANBfHEiBEHAAEkNACACIARBQGoiBUsNAANAIAIgASgCADYCACACIAEoAgQ2AgQgAiABKAIINgIIIAIgASgCDDYCDCACIAEoAhA2AhAgAiABKAIUNgIUIAIgASgCGDYCGCACIAEoAhw2AhwgAiABKAIgNgIgIAIgASgCJDYCJCACIAEoAig2AiggAiABKAIsNgIsIAIgASgCMDYCMCACIAEoAjQ2AjQgAiABKAI4NgI4IAIgASgCPDYCPCABQcAAaiEBIAJBwABqIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQAMAgsACwJAIANBBE8NACAAIQIMAQsCQCADQXxqIgQgAE8NACAAIQIMAQsgACECA0AgAiABLQAAOgAAIAIgAS0AAToAASACIAEtAAI6AAIgAiABLQADOgADIAFBBGohASACQQRqIgIgBE0NAAsLAkAgAiADTw0AA0AgAiABLQAAOgAAIAFBAWohASACQQFqIgIgA0cNAAsLIAAL8wICA38BfgJAIAJFDQAgAiAAaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIFayICQSBJDQAgAa0iBkIghiAGhCEGIAMgBWoh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';
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
  }
  catch (err) {
    abort(err);
  }
}

function getBinaryPromise() {
  // If we don't have the binary yet, try to to load it asynchronously.
  // Fetch has some additional restrictions over XHR, like it can't be used on a file:// url.
  // See https://github.com/github/fetch/pull/92#issuecomment-140665932
  // Cordova or Electron apps are typically loaded from a file:// url.
  // So use fetch if it is available and the url is not a file, otherwise fall back to XHR.
  if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
    if (typeof fetch === 'function'
    ) {
      return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function(response) {
        if (!response['ok']) {
          throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
        }
        return response['arrayBuffer']();
      }).catch(function () {
          return getBinary(wasmBinaryFile);
      });
    }
  }
    
  // Otherwise, getBinary should be able to get it synchronously
  return Promise.resolve().then(function() { return getBinary(wasmBinaryFile); });
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
    err('failed to compile wasm module: ' + str);
    if (str.indexOf('imported Memory') >= 0 ||
        str.indexOf('memory import') >= 0) {
      err('Memory size incompatibility issues may be due to changing INITIAL_MEMORY at runtime to something too large. Use ALLOW_MEMORY_GROWTH to allow any size memory (and also make sure not to set INITIAL_MEMORY at runtime to something smaller than it was at compile time).');
    }
    throw e;
  }
  return [instance, module];
}

// Create the wasm instance.
// Receives the wasm imports, returns the exports.
function createWasm() {
  // prepare imports
  var info = {
    'env': asmLibraryArg,
    'wasi_snapshot_preview1': asmLibraryArg,
  };
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  /** @param {WebAssembly.Module=} module*/
  function receiveInstance(instance, module) {
    var exports = instance.exports;

    Module['asm'] = exports;

    wasmMemory = Module['asm']['memory'];
    assert(wasmMemory, "memory not found in wasm exports");
    // This assertion doesn't hold when emscripten is run in --post-link
    // mode.
    // TODO(sbc): Read INITIAL_MEMORY out of the wasm file in post-link mode.
    //assert(wasmMemory.buffer.byteLength === 16777216);
    updateGlobalBufferAndViews(wasmMemory.buffer);

    wasmTable = Module['asm']['__indirect_function_table'];
    assert(wasmTable, "table not found in wasm exports");

    removeRunDependency('wasm-instantiate');
  }
  // we can't run yet (except in a pthread, where we have a custom sync instantiator)
  addRunDependency('wasm-instantiate');

  // Async compilation can be confusing when an error on the page overwrites Module
  // (for example, if the order of elements is wrong, and the one defining Module is
  // later), so we save Module and check it later.
  var trueModule = Module;
  function receiveInstantiatedSource(output) {
    // 'output' is a WebAssemblyInstantiatedSource object which has both the module and instance.
    // receiveInstance() will swap in the exports (to Module.asm) so they can be called
    assert(Module === trueModule, 'the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?');
    trueModule = null;
    // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
    // When the regression is fixed, can restore the above USE_PTHREADS-enabled path.
    receiveInstance(output['instance']);
  }

  function instantiateArrayBuffer(receiver) {
    return getBinaryPromise().then(function(binary) {
      return WebAssembly.instantiate(binary, info);
    }).then(receiver, function(reason) {
      err('failed to asynchronously prepare wasm: ' + reason);

      // Warn on some common problems.
      if (isFileURI(wasmBinaryFile)) {
        err('warning: Loading from a file URI (' + wasmBinaryFile + ') is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing');
      }
      abort(reason);
    });
  }

  // Prefer streaming instantiation if available.

  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to run the instantiation parallel
  // to any other async startup actions they are performing.
  if (Module['instantiateWasm']) {
    try {
      var exports = Module['instantiateWasm'](info, receiveInstance);
      return exports;
    } catch(e) {
      err('Module.instantiateWasm callback failed with error: ' + e);
      return false;
    }
  }

  var result = instantiateSync(wasmBinaryFile, info);
  receiveInstance(result[0], result[1]);
  return Module['asm']; // exports were assigned here
}

// Globals used by JS i64 conversions (see makeSetValue)
var tempDouble;
var tempI64;

// === Body ===

var ASM_CONSTS = {
  
};






  function abortStackOverflow(allocSize) {
      abort('Stack overflow! Attempted to allocate ' + allocSize + ' bytes on the stack, but stack has only ' + (_emscripten_stack_get_free() + allocSize) + ' bytes available!');
    }

  function callRuntimeCallbacks(callbacks) {
      while(callbacks.length > 0) {
        var callback = callbacks.shift();
        if (typeof callback == 'function') {
          callback(Module); // Pass the module as the first argument.
          continue;
        }
        var func = callback.func;
        if (typeof func === 'number') {
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

  function demangle(func) {
      warnOnce('warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling');
      return func;
    }

  function demangleAll(text) {
      var regex =
        /\b_Z[\w\d_]+/g;
      return text.replace(regex,
        function(x) {
          var y = demangle(x);
          return x === y ? x : (y + ' [' + x + ']');
        });
    }

  function jsStackTrace() {
      var error = new Error();
      if (!error.stack) {
        // IE10+ special cases: It does have callstack info, but it is only populated if an Error object is thrown,
        // so try that as a special-case.
        try {
          throw new Error();
        } catch(e) {
          error = e;
        }
        if (!error.stack) {
          return '(no stack trace available)';
        }
      }
      return error.stack.toString();
    }

  function stackTrace() {
      var js = jsStackTrace();
      if (Module['extraStackTrace']) js += '\n' + Module['extraStackTrace']();
      return demangleAll(js);
    }

  function setErrNo(value) {
      HEAP32[((___errno_location())>>2)] = value;
      return value;
    }
  
  var PATH={splitPath:function(filename) {
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return splitPathRe.exec(filename).slice(1);
      },normalizeArray:function(parts, allowAboveRoot) {
        // if the path tries to go above the root, `up` ends up > 0
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
          var last = parts[i];
          if (last === '.') {
            parts.splice(i, 1);
          } else if (last === '..') {
            parts.splice(i, 1);
            up++;
          } else if (up) {
            parts.splice(i, 1);
            up--;
          }
        }
        // if the path is allowed to go above the root, restore leading ..s
        if (allowAboveRoot) {
          for (; up; up--) {
            parts.unshift('..');
          }
        }
        return parts;
      },normalize:function(path) {
        var isAbsolute = path.charAt(0) === '/',
            trailingSlash = path.substr(-1) === '/';
        // Normalize the path
        path = PATH.normalizeArray(path.split('/').filter(function(p) {
          return !!p;
        }), !isAbsolute).join('/');
        if (!path && !isAbsolute) {
          path = '.';
        }
        if (path && trailingSlash) {
          path += '/';
        }
        return (isAbsolute ? '/' : '') + path;
      },dirname:function(path) {
        var result = PATH.splitPath(path),
            root = result[0],
            dir = result[1];
        if (!root && !dir) {
          // No dirname whatsoever
          return '.';
        }
        if (dir) {
          // It has a dirname, strip trailing slash
          dir = dir.substr(0, dir.length - 1);
        }
        return root + dir;
      },basename:function(path) {
        // EMSCRIPTEN return '/'' for '/', not an empty string
        if (path === '/') return '/';
        path = PATH.normalize(path);
        path = path.replace(/\/$/, "");
        var lastSlash = path.lastIndexOf('/');
        if (lastSlash === -1) return path;
        return path.substr(lastSlash+1);
      },extname:function(path) {
        return PATH.splitPath(path)[3];
      },join:function() {
        var paths = Array.prototype.slice.call(arguments, 0);
        return PATH.normalize(paths.join('/'));
      },join2:function(l, r) {
        return PATH.normalize(l + '/' + r);
      }};
  
  function getRandomDevice() {
      if (typeof crypto === 'object' && typeof crypto['getRandomValues'] === 'function') {
        // for modern web browsers
        var randomBuffer = new Uint8Array(1);
        return function() { crypto.getRandomValues(randomBuffer); return randomBuffer[0]; };
      } else
      // we couldn't find a proper implementation, as Math.random() is not suitable for /dev/random, see emscripten-core/emscripten/pull/7096
      return function() { abort("no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: function(array) { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };"); };
    }
  
  var PATH_FS={resolve:function() {
        var resolvedPath = '',
          resolvedAbsolute = false;
        for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          var path = (i >= 0) ? arguments[i] : FS.cwd();
          // Skip empty and invalid entries
          if (typeof path !== 'string') {
            throw new TypeError('Arguments to path.resolve must be strings');
          } else if (!path) {
            return ''; // an invalid portion invalidates the whole thing
          }
          resolvedPath = path + '/' + resolvedPath;
          resolvedAbsolute = path.charAt(0) === '/';
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        resolvedPath = PATH.normalizeArray(resolvedPath.split('/').filter(function(p) {
          return !!p;
        }), !resolvedAbsolute).join('/');
        return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
      },relative:function(from, to) {
        from = PATH_FS.resolve(from).substr(1);
        to = PATH_FS.resolve(to).substr(1);
        function trim(arr) {
          var start = 0;
          for (; start < arr.length; start++) {
            if (arr[start] !== '') break;
          }
          var end = arr.length - 1;
          for (; end >= 0; end--) {
            if (arr[end] !== '') break;
          }
          if (start > end) return [];
          return arr.slice(start, end - start + 1);
        }
        var fromParts = trim(from.split('/'));
        var toParts = trim(to.split('/'));
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
          outputParts.push('..');
        }
        outputParts = outputParts.concat(toParts.slice(samePartsLength));
        return outputParts.join('/');
      }};
  
  var TTY={ttys:[],init:function () {
        // https://github.com/emscripten-core/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // currently, FS.init does not distinguish if process.stdin is a file or TTY
        //   // device, it always assumes it's a TTY device. because of this, we're forcing
        //   // process.stdin to UTF8 encoding to at least make stdin reading compatible
        //   // with text files until FS.init can be refactored.
        //   process['stdin']['setEncoding']('utf8');
        // }
      },shutdown:function() {
        // https://github.com/emscripten-core/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // inolen: any idea as to why node -e 'process.stdin.read()' wouldn't exit immediately (with process.stdin being a tty)?
        //   // isaacs: because now it's reading from the stream, you've expressed interest in it, so that read() kicks off a _read() which creates a ReadReq operation
        //   // inolen: I thought read() in that case was a synchronous operation that just grabbed some amount of buffered data if it exists?
        //   // isaacs: it is. but it also triggers a _read() call, which calls readStart() on the handle
        //   // isaacs: do process.stdin.pause() and i'd think it'd probably close the pending call
        //   process['stdin']['pause']();
        // }
      },register:function(dev, ops) {
        TTY.ttys[dev] = { input: [], output: [], ops: ops };
        FS.registerDevice(dev, TTY.stream_ops);
      },stream_ops:{open:function(stream) {
          var tty = TTY.ttys[stream.node.rdev];
          if (!tty) {
            throw new FS.ErrnoError(43);
          }
          stream.tty = tty;
          stream.seekable = false;
        },close:function(stream) {
          // flush any pending line data
          stream.tty.ops.flush(stream.tty);
        },flush:function(stream) {
          stream.tty.ops.flush(stream.tty);
        },read:function(stream, buffer, offset, length, pos /* ignored */) {
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
            buffer[offset+i] = result;
          }
          if (bytesRead) {
            stream.node.timestamp = Date.now();
          }
          return bytesRead;
        },write:function(stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.put_char) {
            throw new FS.ErrnoError(60);
          }
          try {
            for (var i = 0; i < length; i++) {
              stream.tty.ops.put_char(stream.tty, buffer[offset+i]);
            }
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
          if (length) {
            stream.node.timestamp = Date.now();
          }
          return i;
        }},default_tty_ops:{get_char:function(tty) {
          if (!tty.input.length) {
            var result = null;
            if (typeof window != 'undefined' &&
              typeof window.prompt == 'function') {
              // Browser.
              result = window.prompt('Input: ');  // returns null on cancel
              if (result !== null) {
                result += '\n';
              }
            } else if (typeof readline == 'function') {
              // Command line.
              result = readline();
              if (result !== null) {
                result += '\n';
              }
            }
            if (!result) {
              return null;
            }
            tty.input = intArrayFromString(result, true);
          }
          return tty.input.shift();
        },put_char:function(tty, val) {
          if (val === null || val === 10) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val); // val == 0 would cut text output off in the middle.
          }
        },flush:function(tty) {
          if (tty.output && tty.output.length > 0) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }},default_tty1_ops:{put_char:function(tty, val) {
          if (val === null || val === 10) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val);
          }
        },flush:function(tty) {
          if (tty.output && tty.output.length > 0) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }}};
  
  function mmapAlloc(size) {
      var alignedSize = alignMemory(size, 16384);
      var ptr = _malloc(alignedSize);
      while (size < alignedSize) HEAP8[ptr + size++] = 0;
      return ptr;
    }
  var MEMFS={ops_table:null,mount:function(mount) {
        return MEMFS.createNode(null, '/', 16384 | 511 /* 0777 */, 0);
      },createNode:function(parent, name, mode, dev) {
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
          // no supported
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
          node.usedBytes = 0; // The actual number of bytes used in the typed array, as opposed to contents.length which gives the whole capacity.
          // When the byte data of the file is populated, this will point to either a typed array, or a normal JS array. Typed arrays are preferred
          // for performance, and used by default. However, typed arrays are not resizable like normal JS arrays are, so there is a small disk size
          // penalty involved for appending file writes that continuously grow a file similar to std::vector capacity vs used -scheme.
          node.contents = null; 
        } else if (FS.isLink(node.mode)) {
          node.node_ops = MEMFS.ops_table.link.node;
          node.stream_ops = MEMFS.ops_table.link.stream;
        } else if (FS.isChrdev(node.mode)) {
          node.node_ops = MEMFS.ops_table.chrdev.node;
          node.stream_ops = MEMFS.ops_table.chrdev.stream;
        }
        node.timestamp = Date.now();
        // add the new node to the parent
        if (parent) {
          parent.contents[name] = node;
          parent.timestamp = node.timestamp;
        }
        return node;
      },getFileDataAsTypedArray:function(node) {
        if (!node.contents) return new Uint8Array(0);
        if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes); // Make sure to not return excess unused bytes.
        return new Uint8Array(node.contents);
      },expandFileStorage:function(node, newCapacity) {
        var prevCapacity = node.contents ? node.contents.length : 0;
        if (prevCapacity >= newCapacity) return; // No need to expand, the storage was already large enough.
        // Don't expand strictly to the given requested limit if it's only a very small increase, but instead geometrically grow capacity.
        // For small filesizes (<1MB), perform size*2 geometric increase, but for large sizes, do a much more conservative size*1.125 increase to
        // avoid overshooting the allocation cap by a very large margin.
        var CAPACITY_DOUBLING_MAX = 1024 * 1024;
        newCapacity = Math.max(newCapacity, (prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2.0 : 1.125)) >>> 0);
        if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256); // At minimum allocate 256b for each file when expanding.
        var oldContents = node.contents;
        node.contents = new Uint8Array(newCapacity); // Allocate new storage.
        if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0); // Copy old data over to the new storage.
      },resizeFileStorage:function(node, newSize) {
        if (node.usedBytes == newSize) return;
        if (newSize == 0) {
          node.contents = null; // Fully decommit when requesting a resize to zero.
          node.usedBytes = 0;
        } else {
          var oldContents = node.contents;
          node.contents = new Uint8Array(newSize); // Allocate new storage.
          if (oldContents) {
            node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes))); // Copy old data over to the new storage.
          }
          node.usedBytes = newSize;
        }
      },node_ops:{getattr:function(node) {
          var attr = {};
          // device numbers reuse inode numbers.
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
          // NOTE: In our implementation, st_blocks = Math.ceil(st_size/st_blksize),
          //       but this is not required by the standard.
          attr.blksize = 4096;
          attr.blocks = Math.ceil(attr.size / attr.blksize);
          return attr;
        },setattr:function(node, attr) {
          if (attr.mode !== undefined) {
            node.mode = attr.mode;
          }
          if (attr.timestamp !== undefined) {
            node.timestamp = attr.timestamp;
          }
          if (attr.size !== undefined) {
            MEMFS.resizeFileStorage(node, attr.size);
          }
        },lookup:function(parent, name) {
          throw FS.genericErrors[44];
        },mknod:function(parent, name, mode, dev) {
          return MEMFS.createNode(parent, name, mode, dev);
        },rename:function(old_node, new_dir, new_name) {
          // if we're overwriting a directory at new_name, make sure it's empty.
          if (FS.isDir(old_node.mode)) {
            var new_node;
            try {
              new_node = FS.lookupNode(new_dir, new_name);
            } catch (e) {
            }
            if (new_node) {
              for (var i in new_node.contents) {
                throw new FS.ErrnoError(55);
              }
            }
          }
          // do the internal rewiring
          delete old_node.parent.contents[old_node.name];
          old_node.parent.timestamp = Date.now()
          old_node.name = new_name;
          new_dir.contents[new_name] = old_node;
          new_dir.timestamp = old_node.parent.timestamp;
          old_node.parent = new_dir;
        },unlink:function(parent, name) {
          delete parent.contents[name];
          parent.timestamp = Date.now();
        },rmdir:function(parent, name) {
          var node = FS.lookupNode(parent, name);
          for (var i in node.contents) {
            throw new FS.ErrnoError(55);
          }
          delete parent.contents[name];
          parent.timestamp = Date.now();
        },readdir:function(node) {
          var entries = ['.', '..'];
          for (var key in node.contents) {
            if (!node.contents.hasOwnProperty(key)) {
              continue;
            }
            entries.push(key);
          }
          return entries;
        },symlink:function(parent, newname, oldpath) {
          var node = MEMFS.createNode(parent, newname, 511 /* 0777 */ | 40960, 0);
          node.link = oldpath;
          return node;
        },readlink:function(node) {
          if (!FS.isLink(node.mode)) {
            throw new FS.ErrnoError(28);
          }
          return node.link;
        }},stream_ops:{read:function(stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= stream.node.usedBytes) return 0;
          var size = Math.min(stream.node.usedBytes - position, length);
          assert(size >= 0);
          if (size > 8 && contents.subarray) { // non-trivial, and typed array
            buffer.set(contents.subarray(position, position + size), offset);
          } else {
            for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i];
          }
          return size;
        },write:function(stream, buffer, offset, length, position, canOwn) {
          // The data buffer should be a typed array view
          assert(!(buffer instanceof ArrayBuffer));
          // If the buffer is located in main memory (HEAP), and if
          // memory can grow, we can't hold on to references of the
          // memory buffer, as they may get invalidated. That means we
          // need to do copy its contents.
          if (buffer.buffer === HEAP8.buffer) {
            canOwn = false;
          }
  
          if (!length) return 0;
          var node = stream.node;
          node.timestamp = Date.now();
  
          if (buffer.subarray && (!node.contents || node.contents.subarray)) { // This write is from a typed array to a typed array?
            if (canOwn) {
              assert(position === 0, 'canOwn must imply no weird position inside the file');
              node.contents = buffer.subarray(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (node.usedBytes === 0 && position === 0) { // If this is a simple first write to an empty file, do a fast set since we don't need to care about old data.
              node.contents = buffer.slice(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (position + length <= node.usedBytes) { // Writing to an already allocated and used subrange of the file?
              node.contents.set(buffer.subarray(offset, offset + length), position);
              return length;
            }
          }
  
          // Appending to an existing file and we need to reallocate, or source data did not come as a typed array.
          MEMFS.expandFileStorage(node, position+length);
          if (node.contents.subarray && buffer.subarray) {
            // Use typed array write which is available.
            node.contents.set(buffer.subarray(offset, offset + length), position);
          } else {
            for (var i = 0; i < length; i++) {
             node.contents[position + i] = buffer[offset + i]; // Or fall back to manual write if not.
            }
          }
          node.usedBytes = Math.max(node.usedBytes, position + length);
          return length;
        },llseek:function(stream, offset, whence) {
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
        },allocate:function(stream, offset, length) {
          MEMFS.expandFileStorage(stream.node, offset + length);
          stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
        },mmap:function(stream, address, length, position, prot, flags) {
          if (address !== 0) {
            // We don't currently support location hints for the address of the mapping
            throw new FS.ErrnoError(28);
          }
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          var ptr;
          var allocated;
          var contents = stream.node.contents;
          // Only make a new copy when MAP_PRIVATE is specified.
          if (!(flags & 2) && contents.buffer === buffer) {
            // We can't emulate MAP_SHARED when the file is not backed by the buffer
            // we're mapping to (e.g. the HEAP buffer).
            allocated = false;
            ptr = contents.byteOffset;
          } else {
            // Try to avoid unnecessary slices.
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
          return { ptr: ptr, allocated: allocated };
        },msync:function(stream, buffer, offset, length, mmapFlags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          if (mmapFlags & 2) {
            // MAP_PRIVATE calls need not to be synced back to underlying fs
            return 0;
          }
  
          var bytesWritten = MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
          // should we check if bytesWritten and length are the same?
          return 0;
        }}};
  
  var ERRNO_MESSAGES={0:"Success",1:"Arg list too long",2:"Permission denied",3:"Address already in use",4:"Address not available",5:"Address family not supported by protocol family",6:"No more processes",7:"Socket already connected",8:"Bad file number",9:"Trying to read unreadable message",10:"Mount device busy",11:"Operation canceled",12:"No children",13:"Connection aborted",14:"Connection refused",15:"Connection reset by peer",16:"File locking deadlock error",17:"Destination address required",18:"Math arg out of domain of func",19:"Quota exceeded",20:"File exists",21:"Bad address",22:"File too large",23:"Host is unreachable",24:"Identifier removed",25:"Illegal byte sequence",26:"Connection already in progress",27:"Interrupted system call",28:"Invalid argument",29:"I/O error",30:"Socket is already connected",31:"Is a directory",32:"Too many symbolic links",33:"Too many open files",34:"Too many links",35:"Message too long",36:"Multihop attempted",37:"File or path name too long",38:"Network interface is not configured",39:"Connection reset by network",40:"Network is unreachable",41:"Too many open files in system",42:"No buffer space available",43:"No such device",44:"No such file or directory",45:"Exec format error",46:"No record locks available",47:"The link has been severed",48:"Not enough core",49:"No message of desired type",50:"Protocol not available",51:"No space left on device",52:"Function not implemented",53:"Socket is not connected",54:"Not a directory",55:"Directory not empty",56:"State not recoverable",57:"Socket operation on non-socket",59:"Not a typewriter",60:"No such device or address",61:"Value too large for defined data type",62:"Previous owner died",63:"Not super-user",64:"Broken pipe",65:"Protocol error",66:"Unknown protocol",67:"Protocol wrong type for socket",68:"Math result not representable",69:"Read only file system",70:"Illegal seek",71:"No such process",72:"Stale file handle",73:"Connection timed out",74:"Text file busy",75:"Cross-device link",100:"Device not a stream",101:"Bad font file fmt",102:"Invalid slot",103:"Invalid request code",104:"No anode",105:"Block device required",106:"Channel number out of range",107:"Level 3 halted",108:"Level 3 reset",109:"Link number out of range",110:"Protocol driver not attached",111:"No CSI structure available",112:"Level 2 halted",113:"Invalid exchange",114:"Invalid request descriptor",115:"Exchange full",116:"No data (for no delay io)",117:"Timer expired",118:"Out of streams resources",119:"Machine is not on the network",120:"Package not installed",121:"The object is remote",122:"Advertise error",123:"Srmount error",124:"Communication error on send",125:"Cross mount point (not really error)",126:"Given log. name not unique",127:"f.d. invalid for this operation",128:"Remote address changed",129:"Can   access a needed shared lib",130:"Accessing a corrupted shared lib",131:".lib section in a.out corrupted",132:"Attempting to link in too many libs",133:"Attempting to exec a shared library",135:"Streams pipe error",136:"Too many users",137:"Socket type not supported",138:"Not supported",139:"Protocol family not supported",140:"Can't send after socket shutdown",141:"Too many references",142:"Host is down",148:"No medium (in tape drive)",156:"Level 2 not synchronized"};
  
  var ERRNO_CODES={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135};
  var FS={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:false,ignorePermissions:true,trackingDelegate:{},tracking:{openFlags:{READ:1,WRITE:2}},ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,lookupPath:function(path, opts) {
        path = PATH_FS.resolve(FS.cwd(), path);
        opts = opts || {};
  
        if (!path) return { path: '', node: null };
  
        var defaults = {
          follow_mount: true,
          recurse_count: 0
        };
        for (var key in defaults) {
          if (opts[key] === undefined) {
            opts[key] = defaults[key];
          }
        }
  
        if (opts.recurse_count > 8) {  // max recursive lookup of 8
          throw new FS.ErrnoError(32);
        }
  
        // split the path
        var parts = PATH.normalizeArray(path.split('/').filter(function(p) {
          return !!p;
        }), false);
  
        // start at the root
        var current = FS.root;
        var current_path = '/';
  
        for (var i = 0; i < parts.length; i++) {
          var islast = (i === parts.length-1);
          if (islast && opts.parent) {
            // stop resolving
            break;
          }
  
          current = FS.lookupNode(current, parts[i]);
          current_path = PATH.join2(current_path, parts[i]);
  
          // jump to the mount's root node if this is a mountpoint
          if (FS.isMountpoint(current)) {
            if (!islast || (islast && opts.follow_mount)) {
              current = current.mounted.root;
            }
          }
  
          // by default, lookupPath will not follow a symlink if it is the final path component.
          // setting opts.follow = true will override this behavior.
          if (!islast || opts.follow) {
            var count = 0;
            while (FS.isLink(current.mode)) {
              var link = FS.readlink(current_path);
              current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
  
              var lookup = FS.lookupPath(current_path, { recurse_count: opts.recurse_count });
              current = lookup.node;
  
              if (count++ > 40) {  // limit max consecutive symlinks to 40 (SYMLOOP_MAX).
                throw new FS.ErrnoError(32);
              }
            }
          }
        }
  
        return { path: current_path, node: current };
      },getPath:function(node) {
        var path;
        while (true) {
          if (FS.isRoot(node)) {
            var mount = node.mount.mountpoint;
            if (!path) return mount;
            return mount[mount.length-1] !== '/' ? mount + '/' + path : mount + path;
          }
          path = path ? node.name + '/' + path : node.name;
          node = node.parent;
        }
      },hashName:function(parentid, name) {
        var hash = 0;
  
        for (var i = 0; i < name.length; i++) {
          hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
        }
        return ((parentid + hash) >>> 0) % FS.nameTable.length;
      },hashAddNode:function(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        node.name_next = FS.nameTable[hash];
        FS.nameTable[hash] = node;
      },hashRemoveNode:function(node) {
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
      },lookupNode:function(parent, name) {
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
        // if we failed to find it in the cache, call into the VFS
        return FS.lookup(parent, name);
      },createNode:function(parent, name, mode, rdev) {
        assert(typeof parent === 'object')
        var node = new FS.FSNode(parent, name, mode, rdev);
  
        FS.hashAddNode(node);
  
        return node;
      },destroyNode:function(node) {
        FS.hashRemoveNode(node);
      },isRoot:function(node) {
        return node === node.parent;
      },isMountpoint:function(node) {
        return !!node.mounted;
      },isFile:function(mode) {
        return (mode & 61440) === 32768;
      },isDir:function(mode) {
        return (mode & 61440) === 16384;
      },isLink:function(mode) {
        return (mode & 61440) === 40960;
      },isChrdev:function(mode) {
        return (mode & 61440) === 8192;
      },isBlkdev:function(mode) {
        return (mode & 61440) === 24576;
      },isFIFO:function(mode) {
        return (mode & 61440) === 4096;
      },isSocket:function(mode) {
        return (mode & 49152) === 49152;
      },flagModes:{"r":0,"r+":2,"w":577,"w+":578,"a":1089,"a+":1090},modeStringToFlags:function(str) {
        var flags = FS.flagModes[str];
        if (typeof flags === 'undefined') {
          throw new Error('Unknown file open mode: ' + str);
        }
        return flags;
      },flagsToPermissionString:function(flag) {
        var perms = ['r', 'w', 'rw'][flag & 3];
        if ((flag & 512)) {
          perms += 'w';
        }
        return perms;
      },nodePermissions:function(node, perms) {
        if (FS.ignorePermissions) {
          return 0;
        }
        // return 0 if any user, group or owner bits are set.
        if (perms.indexOf('r') !== -1 && !(node.mode & 292)) {
          return 2;
        } else if (perms.indexOf('w') !== -1 && !(node.mode & 146)) {
          return 2;
        } else if (perms.indexOf('x') !== -1 && !(node.mode & 73)) {
          return 2;
        }
        return 0;
      },mayLookup:function(dir) {
        var errCode = FS.nodePermissions(dir, 'x');
        if (errCode) return errCode;
        if (!dir.node_ops.lookup) return 2;
        return 0;
      },mayCreate:function(dir, name) {
        try {
          var node = FS.lookupNode(dir, name);
          return 20;
        } catch (e) {
        }
        return FS.nodePermissions(dir, 'wx');
      },mayDelete:function(dir, name, isdir) {
        var node;
        try {
          node = FS.lookupNode(dir, name);
        } catch (e) {
          return e.errno;
        }
        var errCode = FS.nodePermissions(dir, 'wx');
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
      },mayOpen:function(node, flags) {
        if (!node) {
          return 44;
        }
        if (FS.isLink(node.mode)) {
          return 32;
        } else if (FS.isDir(node.mode)) {
          if (FS.flagsToPermissionString(flags) !== 'r' || // opening for write
              (flags & 512)) { // TODO: check for O_SEARCH? (== search for dir only)
            return 31;
          }
        }
        return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
      },MAX_OPEN_FDS:4096,nextfd:function(fd_start, fd_end) {
        fd_start = fd_start || 0;
        fd_end = fd_end || FS.MAX_OPEN_FDS;
        for (var fd = fd_start; fd <= fd_end; fd++) {
          if (!FS.streams[fd]) {
            return fd;
          }
        }
        throw new FS.ErrnoError(33);
      },getStream:function(fd) {
        return FS.streams[fd];
      },createStream:function(stream, fd_start, fd_end) {
        if (!FS.FSStream) {
          FS.FSStream = /** @constructor */ function(){};
          FS.FSStream.prototype = {
            object: {
              get: function() { return this.node; },
              set: function(val) { this.node = val; }
            },
            isRead: {
              get: function() { return (this.flags & 2097155) !== 1; }
            },
            isWrite: {
              get: function() { return (this.flags & 2097155) !== 0; }
            },
            isAppend: {
              get: function() { return (this.flags & 1024); }
            }
          };
        }
        // clone it, so we can return an instance of FSStream
        var newStream = new FS.FSStream();
        for (var p in stream) {
          newStream[p] = stream[p];
        }
        stream = newStream;
        var fd = FS.nextfd(fd_start, fd_end);
        stream.fd = fd;
        FS.streams[fd] = stream;
        return stream;
      },closeStream:function(fd) {
        FS.streams[fd] = null;
      },chrdev_stream_ops:{open:function(stream) {
          var device = FS.getDevice(stream.node.rdev);
          // override node's stream ops with the device's
          stream.stream_ops = device.stream_ops;
          // forward the open call
          if (stream.stream_ops.open) {
            stream.stream_ops.open(stream);
          }
        },llseek:function() {
          throw new FS.ErrnoError(70);
        }},major:function(dev) {
        return ((dev) >> 8);
      },minor:function(dev) {
        return ((dev) & 0xff);
      },makedev:function(ma, mi) {
        return ((ma) << 8 | (mi));
      },registerDevice:function(dev, ops) {
        FS.devices[dev] = { stream_ops: ops };
      },getDevice:function(dev) {
        return FS.devices[dev];
      },getMounts:function(mount) {
        var mounts = [];
        var check = [mount];
  
        while (check.length) {
          var m = check.pop();
  
          mounts.push(m);
  
          check.push.apply(check, m.mounts);
        }
  
        return mounts;
      },syncfs:function(populate, callback) {
        if (typeof(populate) === 'function') {
          callback = populate;
          populate = false;
        }
  
        FS.syncFSRequests++;
  
        if (FS.syncFSRequests > 1) {
          err('warning: ' + FS.syncFSRequests + ' FS.syncfs operations in flight at once, probably just doing extra work');
        }
  
        var mounts = FS.getMounts(FS.root.mount);
        var completed = 0;
  
        function doCallback(errCode) {
          assert(FS.syncFSRequests > 0);
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
        };
  
        // sync all mounts
        mounts.forEach(function (mount) {
          if (!mount.type.syncfs) {
            return done(null);
          }
          mount.type.syncfs(mount, populate, done);
        });
      },mount:function(type, opts, mountpoint) {
        if (typeof type === 'string') {
          // The filesystem was not included, and instead we have an error
          // message stored in the variable.
          throw type;
        }
        var root = mountpoint === '/';
        var pseudo = !mountpoint;
        var node;
  
        if (root && FS.root) {
          throw new FS.ErrnoError(10);
        } else if (!root && !pseudo) {
          var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
          mountpoint = lookup.path;  // use the absolute path
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
  
        // create a root node for the fs
        var mountRoot = type.mount(mount);
        mountRoot.mount = mount;
        mount.root = mountRoot;
  
        if (root) {
          FS.root = mountRoot;
        } else if (node) {
          // set as a mountpoint
          node.mounted = mount;
  
          // add the new mount to the current mount's children
          if (node.mount) {
            node.mount.mounts.push(mount);
          }
        }
  
        return mountRoot;
      },unmount:function (mountpoint) {
        var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
        if (!FS.isMountpoint(lookup.node)) {
          throw new FS.ErrnoError(28);
        }
  
        // destroy the nodes for this mount, and all its child mounts
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
  
        // no longer a mountpoint
        node.mounted = null;
  
        // remove this mount from the child mounts
        var idx = node.mount.mounts.indexOf(mount);
        assert(idx !== -1);
        node.mount.mounts.splice(idx, 1);
      },lookup:function(parent, name) {
        return parent.node_ops.lookup(parent, name);
      },mknod:function(path, mode, dev) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        if (!name || name === '.' || name === '..') {
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
      },create:function(path, mode) {
        mode = mode !== undefined ? mode : 438 /* 0666 */;
        mode &= 4095;
        mode |= 32768;
        return FS.mknod(path, mode, 0);
      },mkdir:function(path, mode) {
        mode = mode !== undefined ? mode : 511 /* 0777 */;
        mode &= 511 | 512;
        mode |= 16384;
        return FS.mknod(path, mode, 0);
      },mkdirTree:function(path, mode) {
        var dirs = path.split('/');
        var d = '';
        for (var i = 0; i < dirs.length; ++i) {
          if (!dirs[i]) continue;
          d += '/' + dirs[i];
          try {
            FS.mkdir(d, mode);
          } catch(e) {
            if (e.errno != 20) throw e;
          }
        }
      },mkdev:function(path, mode, dev) {
        if (typeof(dev) === 'undefined') {
          dev = mode;
          mode = 438 /* 0666 */;
        }
        mode |= 8192;
        return FS.mknod(path, mode, dev);
      },symlink:function(oldpath, newpath) {
        if (!PATH_FS.resolve(oldpath)) {
          throw new FS.ErrnoError(44);
        }
        var lookup = FS.lookupPath(newpath, { parent: true });
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
      },rename:function(old_path, new_path) {
        var old_dirname = PATH.dirname(old_path);
        var new_dirname = PATH.dirname(new_path);
        var old_name = PATH.basename(old_path);
        var new_name = PATH.basename(new_path);
        // parents must exist
        var lookup, old_dir, new_dir;
  
        // let the errors from non existant directories percolate up
        lookup = FS.lookupPath(old_path, { parent: true });
        old_dir = lookup.node;
        lookup = FS.lookupPath(new_path, { parent: true });
        new_dir = lookup.node;
  
        if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
        // need to be part of the same mount
        if (old_dir.mount !== new_dir.mount) {
          throw new FS.ErrnoError(75);
        }
        // source must exist
        var old_node = FS.lookupNode(old_dir, old_name);
        // old path should not be an ancestor of the new path
        var relative = PATH_FS.relative(old_path, new_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(28);
        }
        // new path should not be an ancestor of the old path
        relative = PATH_FS.relative(new_path, old_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(55);
        }
        // see if the new path already exists
        var new_node;
        try {
          new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {
          // not fatal
        }
        // early out if nothing needs to change
        if (old_node === new_node) {
          return;
        }
        // we'll need to delete the old entry
        var isdir = FS.isDir(old_node.mode);
        var errCode = FS.mayDelete(old_dir, old_name, isdir);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        // need delete permissions if we'll be overwriting.
        // need create permissions if new doesn't already exist.
        errCode = new_node ?
          FS.mayDelete(new_dir, new_name, isdir) :
          FS.mayCreate(new_dir, new_name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!old_dir.node_ops.rename) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(old_node) || (new_node && FS.isMountpoint(new_node))) {
          throw new FS.ErrnoError(10);
        }
        // if we are going to change the parent, check write permissions
        if (new_dir !== old_dir) {
          errCode = FS.nodePermissions(old_dir, 'w');
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        try {
          if (FS.trackingDelegate['willMovePath']) {
            FS.trackingDelegate['willMovePath'](old_path, new_path);
          }
        } catch(e) {
          err("FS.trackingDelegate['willMovePath']('"+old_path+"', '"+new_path+"') threw an exception: " + e.message);
        }
        // remove the node from the lookup hash
        FS.hashRemoveNode(old_node);
        // do the underlying fs rename
        try {
          old_dir.node_ops.rename(old_node, new_dir, new_name);
        } catch (e) {
          throw e;
        } finally {
          // add the node back to the hash (in case node_ops.rename
          // changed its name)
          FS.hashAddNode(old_node);
        }
        try {
          if (FS.trackingDelegate['onMovePath']) FS.trackingDelegate['onMovePath'](old_path, new_path);
        } catch(e) {
          err("FS.trackingDelegate['onMovePath']('"+old_path+"', '"+new_path+"') threw an exception: " + e.message);
        }
      },rmdir:function(path) {
        var lookup = FS.lookupPath(path, { parent: true });
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
          if (FS.trackingDelegate['willDeletePath']) {
            FS.trackingDelegate['willDeletePath'](path);
          }
        } catch(e) {
          err("FS.trackingDelegate['willDeletePath']('"+path+"') threw an exception: " + e.message);
        }
        parent.node_ops.rmdir(parent, name);
        FS.destroyNode(node);
        try {
          if (FS.trackingDelegate['onDeletePath']) FS.trackingDelegate['onDeletePath'](path);
        } catch(e) {
          err("FS.trackingDelegate['onDeletePath']('"+path+"') threw an exception: " + e.message);
        }
      },readdir:function(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        if (!node.node_ops.readdir) {
          throw new FS.ErrnoError(54);
        }
        return node.node_ops.readdir(node);
      },unlink:function(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, false);
        if (errCode) {
          // According to POSIX, we should map EISDIR to EPERM, but
          // we instead do what Linux does (and we must, as we use
          // the musl linux libc).
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.unlink) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        try {
          if (FS.trackingDelegate['willDeletePath']) {
            FS.trackingDelegate['willDeletePath'](path);
          }
        } catch(e) {
          err("FS.trackingDelegate['willDeletePath']('"+path+"') threw an exception: " + e.message);
        }
        parent.node_ops.unlink(parent, name);
        FS.destroyNode(node);
        try {
          if (FS.trackingDelegate['onDeletePath']) FS.trackingDelegate['onDeletePath'](path);
        } catch(e) {
          err("FS.trackingDelegate['onDeletePath']('"+path+"') threw an exception: " + e.message);
        }
      },readlink:function(path) {
        var lookup = FS.lookupPath(path);
        var link = lookup.node;
        if (!link) {
          throw new FS.ErrnoError(44);
        }
        if (!link.node_ops.readlink) {
          throw new FS.ErrnoError(28);
        }
        return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
      },stat:function(path, dontFollow) {
        var lookup = FS.lookupPath(path, { follow: !dontFollow });
        var node = lookup.node;
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        if (!node.node_ops.getattr) {
          throw new FS.ErrnoError(63);
        }
        return node.node_ops.getattr(node);
      },lstat:function(path) {
        return FS.stat(path, true);
      },chmod:function(path, mode, dontFollow) {
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, {
          mode: (mode & 4095) | (node.mode & ~4095),
          timestamp: Date.now()
        });
      },lchmod:function(path, mode) {
        FS.chmod(path, mode, true);
      },fchmod:function(fd, mode) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        FS.chmod(stream.node, mode);
      },chown:function(path, uid, gid, dontFollow) {
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, {
          timestamp: Date.now()
          // we ignore the uid / gid for now
        });
      },lchown:function(path, uid, gid) {
        FS.chown(path, uid, gid, true);
      },fchown:function(fd, uid, gid) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        FS.chown(stream.node, uid, gid);
      },truncate:function(path, len) {
        if (len < 0) {
          throw new FS.ErrnoError(28);
        }
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: true });
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
        var errCode = FS.nodePermissions(node, 'w');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        node.node_ops.setattr(node, {
          size: len,
          timestamp: Date.now()
        });
      },ftruncate:function(fd, len) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(28);
        }
        FS.truncate(stream.node, len);
      },utime:function(path, atime, mtime) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        node.node_ops.setattr(node, {
          timestamp: Math.max(atime, mtime)
        });
      },open:function(path, flags, mode, fd_start, fd_end) {
        if (path === "") {
          throw new FS.ErrnoError(44);
        }
        flags = typeof flags === 'string' ? FS.modeStringToFlags(flags) : flags;
        mode = typeof mode === 'undefined' ? 438 /* 0666 */ : mode;
        if ((flags & 64)) {
          mode = (mode & 4095) | 32768;
        } else {
          mode = 0;
        }
        var node;
        if (typeof path === 'object') {
          node = path;
        } else {
          path = PATH.normalize(path);
          try {
            var lookup = FS.lookupPath(path, {
              follow: !(flags & 131072)
            });
            node = lookup.node;
          } catch (e) {
            // ignore
          }
        }
        // perhaps we need to create the node
        var created = false;
        if ((flags & 64)) {
          if (node) {
            // if O_CREAT and O_EXCL are set, error out if the node already exists
            if ((flags & 128)) {
              throw new FS.ErrnoError(20);
            }
          } else {
            // node doesn't exist, try to create it
            node = FS.mknod(path, mode, 0);
            created = true;
          }
        }
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        // can't truncate a device
        if (FS.isChrdev(node.mode)) {
          flags &= ~512;
        }
        // if asked only for a directory, then this must be one
        if ((flags & 65536) && !FS.isDir(node.mode)) {
          throw new FS.ErrnoError(54);
        }
        // check permissions, if this is not a file we just created now (it is ok to
        // create and write to a file with read-only permissions; it is read-only
        // for later use)
        if (!created) {
          var errCode = FS.mayOpen(node, flags);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        // do truncation if necessary
        if ((flags & 512)) {
          FS.truncate(node, 0);
        }
        // we've already handled these, don't pass down to the underlying vfs
        flags &= ~(128 | 512 | 131072);
  
        // register the stream with the filesystem
        var stream = FS.createStream({
          node: node,
          path: FS.getPath(node),  // we want the absolute path to the node
          flags: flags,
          seekable: true,
          position: 0,
          stream_ops: node.stream_ops,
          // used by the file family libc calls (fopen, fwrite, ferror, etc.)
          ungotten: [],
          error: false
        }, fd_start, fd_end);
        // call the new stream's open function
        if (stream.stream_ops.open) {
          stream.stream_ops.open(stream);
        }
        if (Module['logReadFiles'] && !(flags & 1)) {
          if (!FS.readFiles) FS.readFiles = {};
          if (!(path in FS.readFiles)) {
            FS.readFiles[path] = 1;
            err("FS.trackingDelegate error on read file: " + path);
          }
        }
        try {
          if (FS.trackingDelegate['onOpenFile']) {
            var trackingFlags = 0;
            if ((flags & 2097155) !== 1) {
              trackingFlags |= FS.tracking.openFlags.READ;
            }
            if ((flags & 2097155) !== 0) {
              trackingFlags |= FS.tracking.openFlags.WRITE;
            }
            FS.trackingDelegate['onOpenFile'](path, trackingFlags);
          }
        } catch(e) {
          err("FS.trackingDelegate['onOpenFile']('"+path+"', flags) threw an exception: " + e.message);
        }
        return stream;
      },close:function(stream) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (stream.getdents) stream.getdents = null; // free readdir state
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
      },isClosed:function(stream) {
        return stream.fd === null;
      },llseek:function(stream, offset, whence) {
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
      },read:function(stream, buffer, offset, length, position) {
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
        var seeking = typeof position !== 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
        if (!seeking) stream.position += bytesRead;
        return bytesRead;
      },write:function(stream, buffer, offset, length, position, canOwn) {
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
          // seek to the end before writing in append mode
          FS.llseek(stream, 0, 2);
        }
        var seeking = typeof position !== 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
        if (!seeking) stream.position += bytesWritten;
        try {
          if (stream.path && FS.trackingDelegate['onWriteToFile']) FS.trackingDelegate['onWriteToFile'](stream.path);
        } catch(e) {
          err("FS.trackingDelegate['onWriteToFile']('"+stream.path+"') threw an exception: " + e.message);
        }
        return bytesWritten;
      },allocate:function(stream, offset, length) {
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
      },mmap:function(stream, address, length, position, prot, flags) {
        // User requests writing to file (prot & PROT_WRITE != 0).
        // Checking if we have permissions to write to the file unless
        // MAP_PRIVATE flag is set. According to POSIX spec it is possible
        // to write to file opened in read-only mode with MAP_PRIVATE flag,
        // as all modifications will be visible only in the memory of
        // the current process.
        if ((prot & 2) !== 0
            && (flags & 2) === 0
            && (stream.flags & 2097155) !== 2) {
          throw new FS.ErrnoError(2);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(2);
        }
        if (!stream.stream_ops.mmap) {
          throw new FS.ErrnoError(43);
        }
        return stream.stream_ops.mmap(stream, address, length, position, prot, flags);
      },msync:function(stream, buffer, offset, length, mmapFlags) {
        if (!stream || !stream.stream_ops.msync) {
          return 0;
        }
        return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
      },munmap:function(stream) {
        return 0;
      },ioctl:function(stream, cmd, arg) {
        if (!stream.stream_ops.ioctl) {
          throw new FS.ErrnoError(59);
        }
        return stream.stream_ops.ioctl(stream, cmd, arg);
      },readFile:function(path, opts) {
        opts = opts || {};
        opts.flags = opts.flags || 0;
        opts.encoding = opts.encoding || 'binary';
        if (opts.encoding !== 'utf8' && opts.encoding !== 'binary') {
          throw new Error('Invalid encoding type "' + opts.encoding + '"');
        }
        var ret;
        var stream = FS.open(path, opts.flags);
        var stat = FS.stat(path);
        var length = stat.size;
        var buf = new Uint8Array(length);
        FS.read(stream, buf, 0, length, 0);
        if (opts.encoding === 'utf8') {
          ret = UTF8ArrayToString(buf, 0);
        } else if (opts.encoding === 'binary') {
          ret = buf;
        }
        FS.close(stream);
        return ret;
      },writeFile:function(path, data, opts) {
        opts = opts || {};
        opts.flags = opts.flags || 577;
        var stream = FS.open(path, opts.flags, opts.mode);
        if (typeof data === 'string') {
          var buf = new Uint8Array(lengthBytesUTF8(data)+1);
          var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
          FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn);
        } else if (ArrayBuffer.isView(data)) {
          FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
        } else {
          throw new Error('Unsupported data type');
        }
        FS.close(stream);
      },cwd:function() {
        return FS.currentPath;
      },chdir:function(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        if (lookup.node === null) {
          throw new FS.ErrnoError(44);
        }
        if (!FS.isDir(lookup.node.mode)) {
          throw new FS.ErrnoError(54);
        }
        var errCode = FS.nodePermissions(lookup.node, 'x');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        FS.currentPath = lookup.path;
      },createDefaultDirectories:function() {
        FS.mkdir('/tmp');
        FS.mkdir('/home');
        FS.mkdir('/home/web_user');
      },createDefaultDevices:function() {
        // create /dev
        FS.mkdir('/dev');
        // setup /dev/null
        FS.registerDevice(FS.makedev(1, 3), {
          read: function() { return 0; },
          write: function(stream, buffer, offset, length, pos) { return length; }
        });
        FS.mkdev('/dev/null', FS.makedev(1, 3));
        // setup /dev/tty and /dev/tty1
        // stderr needs to print output using err() rather than out()
        // so we register a second tty just for it.
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
        FS.mkdev('/dev/tty', FS.makedev(5, 0));
        FS.mkdev('/dev/tty1', FS.makedev(6, 0));
        // setup /dev/[u]random
        var random_device = getRandomDevice();
        FS.createDevice('/dev', 'random', random_device);
        FS.createDevice('/dev', 'urandom', random_device);
        // we're not going to emulate the actual shm device,
        // just create the tmp dirs that reside in it commonly
        FS.mkdir('/dev/shm');
        FS.mkdir('/dev/shm/tmp');
      },createSpecialDirectories:function() {
        // create /proc/self/fd which allows /proc/self/fd/6 => readlink gives the
        // name of the stream for fd 6 (see test_unistd_ttyname)
        FS.mkdir('/proc');
        var proc_self = FS.mkdir('/proc/self');
        FS.mkdir('/proc/self/fd');
        FS.mount({
          mount: function() {
            var node = FS.createNode(proc_self, 'fd', 16384 | 511 /* 0777 */, 73);
            node.node_ops = {
              lookup: function(parent, name) {
                var fd = +name;
                var stream = FS.getStream(fd);
                if (!stream) throw new FS.ErrnoError(8);
                var ret = {
                  parent: null,
                  mount: { mountpoint: 'fake' },
                  node_ops: { readlink: function() { return stream.path } }
                };
                ret.parent = ret; // make it look like a simple root node
                return ret;
              }
            };
            return node;
          }
        }, {}, '/proc/self/fd');
      },createStandardStreams:function() {
        // TODO deprecate the old functionality of a single
        // input / output callback and that utilizes FS.createDevice
        // and instead require a unique set of stream ops
  
        // by default, we symlink the standard streams to the
        // default tty devices. however, if the standard streams
        // have been overwritten we create a unique device for
        // them instead.
        if (Module['stdin']) {
          FS.createDevice('/dev', 'stdin', Module['stdin']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdin');
        }
        if (Module['stdout']) {
          FS.createDevice('/dev', 'stdout', null, Module['stdout']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdout');
        }
        if (Module['stderr']) {
          FS.createDevice('/dev', 'stderr', null, Module['stderr']);
        } else {
          FS.symlink('/dev/tty1', '/dev/stderr');
        }
  
        // open default streams for the stdin, stdout and stderr devices
        var stdin = FS.open('/dev/stdin', 0);
        var stdout = FS.open('/dev/stdout', 1);
        var stderr = FS.open('/dev/stderr', 1);
        assert(stdin.fd === 0, 'invalid handle for stdin (' + stdin.fd + ')');
        assert(stdout.fd === 1, 'invalid handle for stdout (' + stdout.fd + ')');
        assert(stderr.fd === 2, 'invalid handle for stderr (' + stderr.fd + ')');
      },ensureErrnoError:function() {
        if (FS.ErrnoError) return;
        FS.ErrnoError = /** @this{Object} */ function ErrnoError(errno, node) {
          this.node = node;
          this.setErrno = /** @this{Object} */ function(errno) {
            this.errno = errno;
            for (var key in ERRNO_CODES) {
              if (ERRNO_CODES[key] === errno) {
                this.code = key;
                break;
              }
            }
          };
          this.setErrno(errno);
          this.message = ERRNO_MESSAGES[errno];
  
          // Try to get a maximally helpful stack trace. On Node.js, getting Error.stack
          // now ensures it shows what we want.
          if (this.stack) {
            // Define the stack property for Node.js 4, which otherwise errors on the next line.
            Object.defineProperty(this, "stack", { value: (new Error).stack, writable: true });
            this.stack = demangleAll(this.stack);
          }
        };
        FS.ErrnoError.prototype = new Error();
        FS.ErrnoError.prototype.constructor = FS.ErrnoError;
        // Some errors may happen quite a bit, to avoid overhead we reuse them (and suffer a lack of stack info)
        [44].forEach(function(code) {
          FS.genericErrors[code] = new FS.ErrnoError(code);
          FS.genericErrors[code].stack = '<generic error, no stack>';
        });
      },staticInit:function() {
        FS.ensureErrnoError();
  
        FS.nameTable = new Array(4096);
  
        FS.mount(MEMFS, {}, '/');
  
        FS.createDefaultDirectories();
        FS.createDefaultDevices();
        FS.createSpecialDirectories();
  
        FS.filesystems = {
          'MEMFS': MEMFS,
        };
      },init:function(input, output, error) {
        assert(!FS.init.initialized, 'FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)');
        FS.init.initialized = true;
  
        FS.ensureErrnoError();
  
        // Allow Module.stdin etc. to provide defaults, if none explicitly passed to us here
        Module['stdin'] = input || Module['stdin'];
        Module['stdout'] = output || Module['stdout'];
        Module['stderr'] = error || Module['stderr'];
  
        FS.createStandardStreams();
      },quit:function() {
        FS.init.initialized = false;
        // force-flush all streams, so we get musl std streams printed out
        var fflush = Module['_fflush'];
        if (fflush) fflush(0);
        // close all of our streams
        for (var i = 0; i < FS.streams.length; i++) {
          var stream = FS.streams[i];
          if (!stream) {
            continue;
          }
          FS.close(stream);
        }
      },getMode:function(canRead, canWrite) {
        var mode = 0;
        if (canRead) mode |= 292 | 73;
        if (canWrite) mode |= 146;
        return mode;
      },findObject:function(path, dontResolveLastLink) {
        var ret = FS.analyzePath(path, dontResolveLastLink);
        if (ret.exists) {
          return ret.object;
        } else {
          return null;
        }
      },analyzePath:function(path, dontResolveLastLink) {
        // operate from within the context of the symlink's target
        try {
          var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          path = lookup.path;
        } catch (e) {
        }
        var ret = {
          isRoot: false, exists: false, error: 0, name: null, path: null, object: null,
          parentExists: false, parentPath: null, parentObject: null
        };
        try {
          var lookup = FS.lookupPath(path, { parent: true });
          ret.parentExists = true;
          ret.parentPath = lookup.path;
          ret.parentObject = lookup.node;
          ret.name = PATH.basename(path);
          lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          ret.exists = true;
          ret.path = lookup.path;
          ret.object = lookup.node;
          ret.name = lookup.node.name;
          ret.isRoot = lookup.path === '/';
        } catch (e) {
          ret.error = e.errno;
        };
        return ret;
      },createPath:function(parent, path, canRead, canWrite) {
        parent = typeof parent === 'string' ? parent : FS.getPath(parent);
        var parts = path.split('/').reverse();
        while (parts.length) {
          var part = parts.pop();
          if (!part) continue;
          var current = PATH.join2(parent, part);
          try {
            FS.mkdir(current);
          } catch (e) {
            // ignore EEXIST
          }
          parent = current;
        }
        return current;
      },createFile:function(parent, name, properties, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.create(path, mode);
      },createDataFile:function(parent, name, data, canRead, canWrite, canOwn) {
        var path = name ? PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name) : parent;
        var mode = FS.getMode(canRead, canWrite);
        var node = FS.create(path, mode);
        if (data) {
          if (typeof data === 'string') {
            var arr = new Array(data.length);
            for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
            data = arr;
          }
          // make sure we can write to the file
          FS.chmod(node, mode | 146);
          var stream = FS.open(node, 577);
          FS.write(stream, data, 0, data.length, 0, canOwn);
          FS.close(stream);
          FS.chmod(node, mode);
        }
        return node;
      },createDevice:function(parent, name, input, output) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(!!input, !!output);
        if (!FS.createDevice.major) FS.createDevice.major = 64;
        var dev = FS.makedev(FS.createDevice.major++, 0);
        // Create a fake device that a set of stream ops to emulate
        // the old behavior.
        FS.registerDevice(dev, {
          open: function(stream) {
            stream.seekable = false;
          },
          close: function(stream) {
            // flush any pending line data
            if (output && output.buffer && output.buffer.length) {
              output(10);
            }
          },
          read: function(stream, buffer, offset, length, pos /* ignored */) {
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
              buffer[offset+i] = result;
            }
            if (bytesRead) {
              stream.node.timestamp = Date.now();
            }
            return bytesRead;
          },
          write: function(stream, buffer, offset, length, pos) {
            for (var i = 0; i < length; i++) {
              try {
                output(buffer[offset+i]);
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
      },forceLoadFile:function(obj) {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
        if (typeof XMLHttpRequest !== 'undefined') {
          throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else if (read_) {
          // Command-line.
          try {
            // WARNING: Can't read binary files in V8's d8 or tracemonkey's js, as
            //          read() will try to parse UTF8.
            obj.contents = intArrayFromString(read_(obj.url), true);
            obj.usedBytes = obj.contents.length;
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
        } else {
          throw new Error('Cannot load without read() or XMLHttpRequest.');
        }
      },createLazyFile:function(parent, name, url, canRead, canWrite) {
        // Lazy chunked Uint8Array (implements get and length from Uint8Array). Actual getting is abstracted away for eventual reuse.
        /** @constructor */
        function LazyUint8Array() {
          this.lengthKnown = false;
          this.chunks = []; // Loaded chunks. Index is the chunk number
        }
        LazyUint8Array.prototype.get = /** @this{Object} */ function LazyUint8Array_get(idx) {
          if (idx > this.length-1 || idx < 0) {
            return undefined;
          }
          var chunkOffset = idx % this.chunkSize;
          var chunkNum = (idx / this.chunkSize)|0;
          return this.getter(chunkNum)[chunkOffset];
        };
        LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
          this.getter = getter;
        };
        LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
          // Find length
          var xhr = new XMLHttpRequest();
          xhr.open('HEAD', url, false);
          xhr.send(null);
          if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
          var datalength = Number(xhr.getResponseHeader("Content-length"));
          var header;
          var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
          var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
  
          var chunkSize = 1024*1024; // Chunk size in bytes
  
          if (!hasByteServing) chunkSize = datalength;
  
          // Function to get a range from the remote URL.
          var doXHR = (function(from, to) {
            if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
            if (to > datalength-1) throw new Error("only " + datalength + " bytes available! programmer error!");
  
            // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, false);
            if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
  
            // Some hints to the browser that we want binary data.
            if (typeof Uint8Array != 'undefined') xhr.responseType = 'arraybuffer';
            if (xhr.overrideMimeType) {
              xhr.overrideMimeType('text/plain; charset=x-user-defined');
            }
  
            xhr.send(null);
            if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
            if (xhr.response !== undefined) {
              return new Uint8Array(/** @type{Array<number>} */(xhr.response || []));
            } else {
              return intArrayFromString(xhr.responseText || '', true);
            }
          });
          var lazyArray = this;
          lazyArray.setDataGetter(function(chunkNum) {
            var start = chunkNum * chunkSize;
            var end = (chunkNum+1) * chunkSize - 1; // including this byte
            end = Math.min(end, datalength-1); // if datalength-1 is selected, this is the last block
            if (typeof(lazyArray.chunks[chunkNum]) === "undefined") {
              lazyArray.chunks[chunkNum] = doXHR(start, end);
            }
            if (typeof(lazyArray.chunks[chunkNum]) === "undefined") throw new Error("doXHR failed!");
            return lazyArray.chunks[chunkNum];
          });
  
          if (usesGzip || !datalength) {
            // if the server uses gzip or doesn't supply the length, we have to download the whole file to get the (uncompressed) length
            chunkSize = datalength = 1; // this will force getter(0)/doXHR do download the whole file
            datalength = this.getter(0).length;
            chunkSize = datalength;
            out("LazyFiles on gzip forces download of the whole file when length is accessed");
          }
  
          this._length = datalength;
          this._chunkSize = chunkSize;
          this.lengthKnown = true;
        };
        if (typeof XMLHttpRequest !== 'undefined') {
          if (!ENVIRONMENT_IS_WORKER) throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
          var lazyArray = new LazyUint8Array();
          Object.defineProperties(lazyArray, {
            length: {
              get: /** @this{Object} */ function() {
                if(!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._length;
              }
            },
            chunkSize: {
              get: /** @this{Object} */ function() {
                if(!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._chunkSize;
              }
            }
          });
  
          var properties = { isDevice: false, contents: lazyArray };
        } else {
          var properties = { isDevice: false, url: url };
        }
  
        var node = FS.createFile(parent, name, properties, canRead, canWrite);
        // This is a total hack, but I want to get this lazy file code out of the
        // core of MEMFS. If we want to keep this lazy file concept I feel it should
        // be its own thin LAZYFS proxying calls to MEMFS.
        if (properties.contents) {
          node.contents = properties.contents;
        } else if (properties.url) {
          node.contents = null;
          node.url = properties.url;
        }
        // Add a function that defers querying the file size until it is asked the first time.
        Object.defineProperties(node, {
          usedBytes: {
            get: /** @this {FSNode} */ function() { return this.contents.length; }
          }
        });
        // override each stream op with one that tries to force load the lazy file first
        var stream_ops = {};
        var keys = Object.keys(node.stream_ops);
        keys.forEach(function(key) {
          var fn = node.stream_ops[key];
          stream_ops[key] = function forceLoadLazyFile() {
            FS.forceLoadFile(node);
            return fn.apply(null, arguments);
          };
        });
        // use a custom read function
        stream_ops.read = function stream_ops_read(stream, buffer, offset, length, position) {
          FS.forceLoadFile(node);
          var contents = stream.node.contents;
          if (position >= contents.length)
            return 0;
          var size = Math.min(contents.length - position, length);
          assert(size >= 0);
          if (contents.slice) { // normal array
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents[position + i];
            }
          } else {
            for (var i = 0; i < size; i++) { // LazyUint8Array from sync binary XHR
              buffer[offset + i] = contents.get(position + i);
            }
          }
          return size;
        };
        node.stream_ops = stream_ops;
        return node;
      },createPreloadedFile:function(parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) {
        Browser.init(); // XXX perhaps this method should move onto Browser?
        // TODO we should allow people to just pass in a complete filename instead
        // of parent and name being that we just join them anyways
        var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
        var dep = getUniqueRunDependency('cp ' + fullname); // might have several active requests for the same fullname
        function processData(byteArray) {
          function finish(byteArray) {
            if (preFinish) preFinish();
            if (!dontCreateFile) {
              FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
            }
            if (onload) onload();
            removeRunDependency(dep);
          }
          var handled = false;
          Module['preloadPlugins'].forEach(function(plugin) {
            if (handled) return;
            if (plugin['canHandle'](fullname)) {
              plugin['handle'](byteArray, fullname, finish, function() {
                if (onerror) onerror();
                removeRunDependency(dep);
              });
              handled = true;
            }
          });
          if (!handled) finish(byteArray);
        }
        addRunDependency(dep);
        if (typeof url == 'string') {
          Browser.asyncLoad(url, function(byteArray) {
            processData(byteArray);
          }, onerror);
        } else {
          processData(url);
        }
      },indexedDB:function() {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      },DB_NAME:function() {
        return 'EM_FS_' + window.location.pathname;
      },DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:function(paths, onload, onerror) {
        onload = onload || function(){};
        onerror = onerror || function(){};
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = function openRequest_onupgradeneeded() {
          out('creating db');
          var db = openRequest.result;
          db.createObjectStore(FS.DB_STORE_NAME);
        };
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          var transaction = db.transaction([FS.DB_STORE_NAME], 'readwrite');
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0) onload(); else onerror();
          }
          paths.forEach(function(path) {
            var putRequest = files.put(FS.analyzePath(path).object.contents, path);
            putRequest.onsuccess = function putRequest_onsuccess() { ok++; if (ok + fail == total) finish() };
            putRequest.onerror = function putRequest_onerror() { fail++; if (ok + fail == total) finish() };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      },loadFilesFromDB:function(paths, onload, onerror) {
        onload = onload || function(){};
        onerror = onerror || function(){};
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = onerror; // no database to load from
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          try {
            var transaction = db.transaction([FS.DB_STORE_NAME], 'readonly');
          } catch(e) {
            onerror(e);
            return;
          }
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0) onload(); else onerror();
          }
          paths.forEach(function(path) {
            var getRequest = files.get(path);
            getRequest.onsuccess = function getRequest_onsuccess() {
              if (FS.analyzePath(path).exists) {
                FS.unlink(path);
              }
              FS.createDataFile(PATH.dirname(path), PATH.basename(path), getRequest.result, true, true, true);
              ok++;
              if (ok + fail == total) finish();
            };
            getRequest.onerror = function getRequest_onerror() { fail++; if (ok + fail == total) finish() };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      },absolutePath:function() {
        abort('FS.absolutePath has been removed; use PATH_FS.resolve instead');
      },createFolder:function() {
        abort('FS.createFolder has been removed; use FS.mkdir instead');
      },createLink:function() {
        abort('FS.createLink has been removed; use FS.symlink instead');
      },joinPath:function() {
        abort('FS.joinPath has been removed; use PATH.join instead');
      },mmapAlloc:function() {
        abort('FS.mmapAlloc has been replaced by the top level function mmapAlloc');
      },standardizePath:function() {
        abort('FS.standardizePath has been removed; use PATH.normalize instead');
      }};
  var SYSCALLS={mappings:{},DEFAULT_POLLMASK:5,umask:511,calculateAt:function(dirfd, path, allowEmpty) {
        if (path[0] === '/') {
          return path;
        }
        // relative path
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
            throw new FS.ErrnoError(44);;
          }
          return dir;
        }
        return PATH.join2(dir, path);
      },doStat:function(func, path, buf) {
        try {
          var stat = func(path);
        } catch (e) {
          if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
            // an error occurred while trying to look up the path; we should just report ENOTDIR
            return -54;
          }
          throw e;
        }
        HEAP32[((buf)>>2)] = stat.dev;
        HEAP32[(((buf)+(4))>>2)] = 0;
        HEAP32[(((buf)+(8))>>2)] = stat.ino;
        HEAP32[(((buf)+(12))>>2)] = stat.mode;
        HEAP32[(((buf)+(16))>>2)] = stat.nlink;
        HEAP32[(((buf)+(20))>>2)] = stat.uid;
        HEAP32[(((buf)+(24))>>2)] = stat.gid;
        HEAP32[(((buf)+(28))>>2)] = stat.rdev;
        HEAP32[(((buf)+(32))>>2)] = 0;
        (tempI64 = [stat.size>>>0,(tempDouble=stat.size,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((buf)+(40))>>2)] = tempI64[0],HEAP32[(((buf)+(44))>>2)] = tempI64[1]);
        HEAP32[(((buf)+(48))>>2)] = 4096;
        HEAP32[(((buf)+(52))>>2)] = stat.blocks;
        HEAP32[(((buf)+(56))>>2)] = (stat.atime.getTime() / 1000)|0;
        HEAP32[(((buf)+(60))>>2)] = 0;
        HEAP32[(((buf)+(64))>>2)] = (stat.mtime.getTime() / 1000)|0;
        HEAP32[(((buf)+(68))>>2)] = 0;
        HEAP32[(((buf)+(72))>>2)] = (stat.ctime.getTime() / 1000)|0;
        HEAP32[(((buf)+(76))>>2)] = 0;
        (tempI64 = [stat.ino>>>0,(tempDouble=stat.ino,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((buf)+(80))>>2)] = tempI64[0],HEAP32[(((buf)+(84))>>2)] = tempI64[1]);
        return 0;
      },doMsync:function(addr, stream, len, flags, offset) {
        var buffer = HEAPU8.slice(addr, addr + len);
        FS.msync(stream, buffer, offset, len, flags);
      },doMkdir:function(path, mode) {
        // remove a trailing slash, if one - /a/b/ has basename of '', but
        // we want to create b in the context of this function
        path = PATH.normalize(path);
        if (path[path.length-1] === '/') path = path.substr(0, path.length-1);
        FS.mkdir(path, mode, 0);
        return 0;
      },doMknod:function(path, mode, dev) {
        // we don't want this in the JS API as it uses mknod to create all nodes.
        switch (mode & 61440) {
          case 32768:
          case 8192:
          case 24576:
          case 4096:
          case 49152:
            break;
          default: return -28;
        }
        FS.mknod(path, mode, dev);
        return 0;
      },doReadlink:function(path, buf, bufsize) {
        if (bufsize <= 0) return -28;
        var ret = FS.readlink(path);
  
        var len = Math.min(bufsize, lengthBytesUTF8(ret));
        var endChar = HEAP8[buf+len];
        stringToUTF8(ret, buf, bufsize+1);
        // readlink is one of the rare functions that write out a C string, but does never append a null to the output buffer(!)
        // stringToUTF8() always appends a null byte, so restore the character under the null byte after the write.
        HEAP8[buf+len] = endChar;
  
        return len;
      },doAccess:function(path, amode) {
        if (amode & ~7) {
          // need a valid mode
          return -28;
        }
        var node;
        var lookup = FS.lookupPath(path, { follow: true });
        node = lookup.node;
        if (!node) {
          return -44;
        }
        var perms = '';
        if (amode & 4) perms += 'r';
        if (amode & 2) perms += 'w';
        if (amode & 1) perms += 'x';
        if (perms /* otherwise, they've just passed F_OK */ && FS.nodePermissions(node, perms)) {
          return -2;
        }
        return 0;
      },doDup:function(path, flags, suggestFD) {
        var suggest = FS.getStream(suggestFD);
        if (suggest) FS.close(suggest);
        return FS.open(path, flags, 0, suggestFD, suggestFD).fd;
      },doReadv:function(stream, iov, iovcnt, offset) {
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = HEAP32[(((iov)+(i*8))>>2)];
          var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
          var curr = FS.read(stream, HEAP8,ptr, len, offset);
          if (curr < 0) return -1;
          ret += curr;
          if (curr < len) break; // nothing more to read
        }
        return ret;
      },doWritev:function(stream, iov, iovcnt, offset) {
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = HEAP32[(((iov)+(i*8))>>2)];
          var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
          var curr = FS.write(stream, HEAP8,ptr, len, offset);
          if (curr < 0) return -1;
          ret += curr;
        }
        return ret;
      },varargs:undefined,get:function() {
        assert(SYSCALLS.varargs != undefined);
        SYSCALLS.varargs += 4;
        var ret = HEAP32[(((SYSCALLS.varargs)-(4))>>2)];
        return ret;
      },getStr:function(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      },getStreamFromFD:function(fd) {
        var stream = FS.getStream(fd);
        if (!stream) throw new FS.ErrnoError(8);
        return stream;
      },get64:function(low, high) {
        if (low >= 0) assert(high === 0);
        else assert(high === -1);
        return low;
      }};
  function ___sys_fcntl64(fd, cmd, varargs) {SYSCALLS.varargs = varargs;
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      switch (cmd) {
        case 0: {
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
          return 0;  // FD_CLOEXEC makes no sense for a single process.
        case 3:
          return stream.flags;
        case 4: {
          var arg = SYSCALLS.get();
          stream.flags |= arg;
          return 0;
        }
        case 12:
        /* case 12: Currently in musl F_GETLK64 has same value as F_GETLK, so omitted to avoid duplicate case blocks. If that changes, uncomment this */ {
          
          var arg = SYSCALLS.get();
          var offset = 0;
          // We're always unlocked.
          HEAP16[(((arg)+(offset))>>1)] = 2;
          return 0;
        }
        case 13:
        case 14:
        /* case 13: Currently in musl F_SETLK64 has same value as F_SETLK, so omitted to avoid duplicate case blocks. If that changes, uncomment this */
        /* case 14: Currently in musl F_SETLKW64 has same value as F_SETLKW, so omitted to avoid duplicate case blocks. If that changes, uncomment this */
          
          
          return 0; // Pretend that the locking is successful.
        case 16:
        case 8:
          return -28; // These are for sockets. We don't have them fully implemented yet.
        case 9:
          // musl trusts getown return values, due to a bug where they must be, as they overlap with errors. just return -1 here, so fnctl() returns that, and we set errno ourselves.
          setErrNo(28);
          return -1;
        default: {
          return -28;
        }
      }
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_ioctl(fd, op, varargs) {SYSCALLS.varargs = varargs;
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      switch (op) {
        case 21509:
        case 21505: {
          if (!stream.tty) return -59;
          return 0;
        }
        case 21510:
        case 21511:
        case 21512:
        case 21506:
        case 21507:
        case 21508: {
          if (!stream.tty) return -59;
          return 0; // no-op, not actually adjusting terminal settings
        }
        case 21519: {
          if (!stream.tty) return -59;
          var argp = SYSCALLS.get();
          HEAP32[((argp)>>2)] = 0;
          return 0;
        }
        case 21520: {
          if (!stream.tty) return -59;
          return -28; // not supported
        }
        case 21531: {
          var argp = SYSCALLS.get();
          return FS.ioctl(stream, op, argp);
        }
        case 21523: {
          // TODO: in theory we should write to the winsize struct that gets
          // passed in, but for now musl doesn't read anything on it
          if (!stream.tty) return -59;
          return 0;
        }
        case 21524: {
          // TODO: technically, this ioctl call should change the window size.
          // but, since emscripten doesn't have any concept of a terminal window
          // yet, we'll just silently throw it away as we do TIOCGWINSZ
          if (!stream.tty) return -59;
          return 0;
        }
        default: abort('bad ioctl syscall ' + op);
      }
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_open(path, flags, varargs) {SYSCALLS.varargs = varargs;
  try {
  
      var pathname = SYSCALLS.getStr(path);
      var mode = varargs ? SYSCALLS.get() : 0;
      var stream = FS.open(pathname, flags, mode);
      return stream.fd;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
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
        // round size grow request up to wasm page size (fixed 64KB per spec)
        wasmMemory.grow((size - buffer.byteLength + 65535) >>> 16); // .grow() takes a delta compared to the previous size
        updateGlobalBufferAndViews(wasmMemory.buffer);
        return 1 /*success*/;
      } catch(e) {
        console.error('emscripten_realloc_buffer: Attempted to grow heap from ' + buffer.byteLength  + ' bytes to ' + size + ' bytes, but got error: ' + e);
      }
      // implicit 0 return to save code size (caller will cast "undefined" into 0
      // anyhow)
    }
  function _emscripten_resize_heap(requestedSize) {
      requestedSize = requestedSize >>> 0;
      var oldSize = _emscripten_get_heap_size();
      // With pthreads, races can happen (another thread might increase the size in between), so return a failure, and let the caller retry.
      assert(requestedSize > oldSize);
  
      // Memory resize rules:
      // 1. When resizing, always produce a resized heap that is at least 16MB (to avoid tiny heap sizes receiving lots of repeated resizes at startup)
      // 2. Always increase heap size to at least the requested size, rounded up to next page multiple.
      // 3a. If MEMORY_GROWTH_LINEAR_STEP == -1, excessively resize the heap geometrically: increase the heap size according to 
      //                                         MEMORY_GROWTH_GEOMETRIC_STEP factor (default +20%),
      //                                         At most overreserve by MEMORY_GROWTH_GEOMETRIC_CAP bytes (default 96MB).
      // 3b. If MEMORY_GROWTH_LINEAR_STEP != -1, excessively resize the heap linearly: increase the heap size by at least MEMORY_GROWTH_LINEAR_STEP bytes.
      // 4. Max size for the heap is capped at 2048MB-WASM_PAGE_SIZE, or by MAXIMUM_MEMORY, or by ASAN limit, depending on which is smallest
      // 5. If we were unable to allocate as much memory, it may be due to over-eager decision to excessively reserve due to (3) above.
      //    Hence if an allocation fails, cut down on the amount of excess growth, in an attempt to succeed to perform a smaller allocation.
  
      // A limit was set for how much we can grow. We should not exceed that
      // (the wasm binary specifies it, so if we tried, we'd fail anyhow).
      var maxHeapSize = 2147483648;
      if (requestedSize > maxHeapSize) {
        err('Cannot enlarge memory, asked to go up to ' + requestedSize + ' bytes, but the limit is ' + maxHeapSize + ' bytes!');
        return false;
      }
  
      var minHeapSize = 16777216;
  
      // Loop through potential heap size increases. If we attempt a too eager reservation that fails, cut down on the
      // attempted size and reserve a smaller bump instead. (max 3 times, chosen somewhat arbitrarily)
      for(var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown); // ensure geometric growth
        // but limit overreserving (default to capping at +96MB overgrowth at most)
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296 );
  
        var newSize = Math.min(maxHeapSize, alignUp(Math.max(minHeapSize, requestedSize, overGrownHeapSize), 65536));
  
        var replacement = emscripten_realloc_buffer(newSize);
        if (replacement) {
  
          return true;
        }
      }
      err('Failed to grow the heap from ' + oldSize + ' bytes to ' + newSize + ' bytes, not enough memory!');
      return false;
    }

  function _fd_close(fd) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      FS.close(stream);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _fd_read(fd, iov, iovcnt, pnum) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = SYSCALLS.doReadv(stream, iov, iovcnt);
      HEAP32[((pnum)>>2)] = num
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {try {
  
      
      var stream = SYSCALLS.getStreamFromFD(fd);
      var HIGH_OFFSET = 0x100000000; // 2^32
      // use an unsigned operator on low and shift high by 32-bits
      var offset = offset_high * HIGH_OFFSET + (offset_low >>> 0);
  
      var DOUBLE_LIMIT = 0x20000000000000; // 2^53
      // we also check for equality since DOUBLE_LIMIT + 1 == DOUBLE_LIMIT
      if (offset <= -DOUBLE_LIMIT || offset >= DOUBLE_LIMIT) {
        return -61;
      }
  
      FS.llseek(stream, offset, whence);
      (tempI64 = [stream.position>>>0,(tempDouble=stream.position,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((newOffset)>>2)] = tempI64[0],HEAP32[(((newOffset)+(4))>>2)] = tempI64[1]);
      if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null; // reset readdir state
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _fd_write(fd, iov, iovcnt, pnum) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = SYSCALLS.doWritev(stream, iov, iovcnt);
      HEAP32[((pnum)>>2)] = num
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _setTempRet0($i) {
      setTempRet0(($i) | 0);
    }

var FSNode = /** @constructor */ function(parent, name, mode, rdev) {
    if (!parent) {
      parent = this;  // root node sets parent to itself
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
  var readMode = 292/*292*/ | 73/*73*/;
  var writeMode = 146/*146*/;
  Object.defineProperties(FSNode.prototype, {
   read: {
    get: /** @this{FSNode} */function() {
     return (this.mode & readMode) === readMode;
    },
    set: /** @this{FSNode} */function(val) {
     val ? this.mode |= readMode : this.mode &= ~readMode;
    }
   },
   write: {
    get: /** @this{FSNode} */function() {
     return (this.mode & writeMode) === writeMode;
    },
    set: /** @this{FSNode} */function(val) {
     val ? this.mode |= writeMode : this.mode &= ~writeMode;
    }
   },
   isFolder: {
    get: /** @this{FSNode} */function() {
     return FS.isDir(this.mode);
    }
   },
   isDevice: {
    get: /** @this{FSNode} */function() {
     return FS.isChrdev(this.mode);
    }
   }
  });
  FS.FSNode = FSNode;
  FS.staticInit();Module["FS_createPath"] = FS.createPath;Module["FS_createDataFile"] = FS.createDataFile;Module["FS_createPreloadedFile"] = FS.createPreloadedFile;Module["FS_createLazyFile"] = FS.createLazyFile;Module["FS_createDevice"] = FS.createDevice;Module["FS_unlink"] = FS.unlink;;
var ASSERTIONS = true;



/** @type {function(string, boolean=, number=)} */
function intArrayFromString(stringy, dontAddNull, length) {
  var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
}

function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 0xFF) {
      if (ASSERTIONS) {
        assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
      }
      chr &= 0xFF;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join('');
}


// Copied from https://github.com/strophe/strophejs/blob/e06d027/src/polyfills.js#L149

// This code was written by Tyler Akins and has been placed in the
// public domain.  It would be nice if you left this header intact.
// Base64 code from Tyler Akins -- http://rumkin.com

/**
 * Decodes a base64 string.
 * @param {string} input The string to decode.
 */
var decodeBase64 = typeof atob === 'function' ? atob : function (input) {
  var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

  var output = '';
  var chr1, chr2, chr3;
  var enc1, enc2, enc3, enc4;
  var i = 0;
  // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
  do {
    enc1 = keyStr.indexOf(input.charAt(i++));
    enc2 = keyStr.indexOf(input.charAt(i++));
    enc3 = keyStr.indexOf(input.charAt(i++));
    enc4 = keyStr.indexOf(input.charAt(i++));

    chr1 = (enc1 << 2) | (enc2 >> 4);
    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
    chr3 = ((enc3 & 3) << 6) | enc4;

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

// Converts a string of base64 into a byte array.
// Throws error on invalid input.
function intArrayFromBase64(s) {

  try {
    var decoded = decodeBase64(s);
    var bytes = new Uint8Array(decoded.length);
    for (var i = 0 ; i < decoded.length ; ++i) {
      bytes[i] = decoded.charCodeAt(i);
    }
    return bytes;
  } catch (_) {
    throw new Error('Converting base64 string to bytes failed.');
  }
}

// If filename is a base64 data URI, parses and returns data (Buffer on node,
// Uint8Array otherwise). If filename is not a base64 data URI, returns undefined.
function tryParseAsDataURI(filename) {
  if (!isDataURI(filename)) {
    return;
  }

  return intArrayFromBase64(filename.slice(dataURIPrefix.length));
}


var asmLibraryArg = {
  "__sys_fcntl64": ___sys_fcntl64,
  "__sys_ioctl": ___sys_ioctl,
  "__sys_open": ___sys_open,
  "emscripten_memcpy_big": _emscripten_memcpy_big,
  "emscripten_resize_heap": _emscripten_resize_heap,
  "fd_close": _fd_close,
  "fd_read": _fd_read,
  "fd_seek": _fd_seek,
  "fd_write": _fd_write,
  "setTempRet0": _setTempRet0
};
var asm = createWasm();
/** @type {function(...*):?} */
var ___wasm_call_ctors = Module["___wasm_call_ctors"] = createExportWrapper("__wasm_call_ctors", asm);

/** @type {function(...*):?} */
var _malloc = Module["_malloc"] = createExportWrapper("malloc", asm);

/** @type {function(...*):?} */
var _free = Module["_free"] = createExportWrapper("free", asm);

/** @type {function(...*):?} */
var _mid_song_start = Module["_mid_song_start"] = createExportWrapper("mid_song_start", asm);

/** @type {function(...*):?} */
var _mid_song_seek = Module["_mid_song_seek"] = createExportWrapper("mid_song_seek", asm);

/** @type {function(...*):?} */
var _mid_song_get_total_time = Module["_mid_song_get_total_time"] = createExportWrapper("mid_song_get_total_time", asm);

/** @type {function(...*):?} */
var _mid_song_get_time = Module["_mid_song_get_time"] = createExportWrapper("mid_song_get_time", asm);

/** @type {function(...*):?} */
var _mid_song_read_wave = Module["_mid_song_read_wave"] = createExportWrapper("mid_song_read_wave", asm);

/** @type {function(...*):?} */
var _mid_istream_open_mem = Module["_mid_istream_open_mem"] = createExportWrapper("mid_istream_open_mem", asm);

/** @type {function(...*):?} */
var _mid_istream_close = Module["_mid_istream_close"] = createExportWrapper("mid_istream_close", asm);

/** @type {function(...*):?} */
var _mid_exit = Module["_mid_exit"] = createExportWrapper("mid_exit", asm);

/** @type {function(...*):?} */
var _mid_init = Module["_mid_init"] = createExportWrapper("mid_init", asm);

/** @type {function(...*):?} */
var _mid_song_load = Module["_mid_song_load"] = createExportWrapper("mid_song_load", asm);

/** @type {function(...*):?} */
var _mid_song_free = Module["_mid_song_free"] = createExportWrapper("mid_song_free", asm);

/** @type {function(...*):?} */
var _mid_alloc_options = Module["_mid_alloc_options"] = createExportWrapper("mid_alloc_options", asm);

/** @type {function(...*):?} */
var _mid_get_load_request_count = Module["_mid_get_load_request_count"] = createExportWrapper("mid_get_load_request_count", asm);

/** @type {function(...*):?} */
var _mid_get_load_request = Module["_mid_get_load_request"] = createExportWrapper("mid_get_load_request", asm);

/** @type {function(...*):?} */
var ___errno_location = Module["___errno_location"] = createExportWrapper("__errno_location", asm);

/** @type {function(...*):?} */
var _fflush = Module["_fflush"] = createExportWrapper("fflush", asm);

/** @type {function(...*):?} */
var stackSave = Module["stackSave"] = createExportWrapper("stackSave", asm);

/** @type {function(...*):?} */
var stackRestore = Module["stackRestore"] = createExportWrapper("stackRestore", asm);

/** @type {function(...*):?} */
var stackAlloc = Module["stackAlloc"] = createExportWrapper("stackAlloc", asm);

/** @type {function(...*):?} */
var _emscripten_stack_init = Module["_emscripten_stack_init"] = asm["emscripten_stack_init"]

/** @type {function(...*):?} */
var _emscripten_stack_get_free = Module["_emscripten_stack_get_free"] = asm["emscripten_stack_get_free"]

/** @type {function(...*):?} */
var _emscripten_stack_get_end = Module["_emscripten_stack_get_end"] = asm["emscripten_stack_get_end"]

/** @type {function(...*):?} */
var dynCall_jiji = Module["dynCall_jiji"] = createExportWrapper("dynCall_jiji", asm);





// === Auto-generated postamble setup entry stuff ===

if (!Object.getOwnPropertyDescriptor(Module, "intArrayFromString")) Module["intArrayFromString"] = function() { abort("'intArrayFromString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "intArrayToString")) Module["intArrayToString"] = function() { abort("'intArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ccall")) Module["ccall"] = function() { abort("'ccall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "cwrap")) Module["cwrap"] = function() { abort("'cwrap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setValue")) Module["setValue"] = function() { abort("'setValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getValue")) Module["getValue"] = function() { abort("'getValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "allocate")) Module["allocate"] = function() { abort("'allocate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UTF8ArrayToString")) Module["UTF8ArrayToString"] = function() { abort("'UTF8ArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
Module["UTF8ToString"] = UTF8ToString;
if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF8Array")) Module["stringToUTF8Array"] = function() { abort("'stringToUTF8Array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF8")) Module["stringToUTF8"] = function() { abort("'stringToUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF8")) Module["lengthBytesUTF8"] = function() { abort("'lengthBytesUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackTrace")) Module["stackTrace"] = function() { abort("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnPreRun")) Module["addOnPreRun"] = function() { abort("'addOnPreRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnInit")) Module["addOnInit"] = function() { abort("'addOnInit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnPreMain")) Module["addOnPreMain"] = function() { abort("'addOnPreMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnExit")) Module["addOnExit"] = function() { abort("'addOnExit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnPostRun")) Module["addOnPostRun"] = function() { abort("'addOnPostRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeStringToMemory")) Module["writeStringToMemory"] = function() { abort("'writeStringToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeArrayToMemory")) Module["writeArrayToMemory"] = function() { abort("'writeArrayToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeAsciiToMemory")) Module["writeAsciiToMemory"] = function() { abort("'writeAsciiToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
Module["addRunDependency"] = addRunDependency;
Module["removeRunDependency"] = removeRunDependency;
if (!Object.getOwnPropertyDescriptor(Module, "FS_createFolder")) Module["FS_createFolder"] = function() { abort("'FS_createFolder' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
Module["FS_createPath"] = FS.createPath;
Module["FS_createDataFile"] = FS.createDataFile;
Module["FS_createPreloadedFile"] = FS.createPreloadedFile;
Module["FS_createLazyFile"] = FS.createLazyFile;
if (!Object.getOwnPropertyDescriptor(Module, "FS_createLink")) Module["FS_createLink"] = function() { abort("'FS_createLink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
Module["FS_createDevice"] = FS.createDevice;
Module["FS_unlink"] = FS.unlink;
if (!Object.getOwnPropertyDescriptor(Module, "getLEB")) Module["getLEB"] = function() { abort("'getLEB' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getFunctionTables")) Module["getFunctionTables"] = function() { abort("'getFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "alignFunctionTables")) Module["alignFunctionTables"] = function() { abort("'alignFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerFunctions")) Module["registerFunctions"] = function() { abort("'registerFunctions' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addFunction")) Module["addFunction"] = function() { abort("'addFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "removeFunction")) Module["removeFunction"] = function() { abort("'removeFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getFuncWrapper")) Module["getFuncWrapper"] = function() { abort("'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "prettyPrint")) Module["prettyPrint"] = function() { abort("'prettyPrint' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "makeBigInt")) Module["makeBigInt"] = function() { abort("'makeBigInt' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "dynCall")) Module["dynCall"] = function() { abort("'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getCompilerSetting")) Module["getCompilerSetting"] = function() { abort("'getCompilerSetting' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "print")) Module["print"] = function() { abort("'print' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "printErr")) Module["printErr"] = function() { abort("'printErr' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getTempRet0")) Module["getTempRet0"] = function() { abort("'getTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setTempRet0")) Module["setTempRet0"] = function() { abort("'setTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "callMain")) Module["callMain"] = function() { abort("'callMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "abort")) Module["abort"] = function() { abort("'abort' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToNewUTF8")) Module["stringToNewUTF8"] = function() { abort("'stringToNewUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setFileTime")) Module["setFileTime"] = function() { abort("'setFileTime' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscripten_realloc_buffer")) Module["emscripten_realloc_buffer"] = function() { abort("'emscripten_realloc_buffer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ENV")) Module["ENV"] = function() { abort("'ENV' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_CODES")) Module["ERRNO_CODES"] = function() { abort("'ERRNO_CODES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_MESSAGES")) Module["ERRNO_MESSAGES"] = function() { abort("'ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setErrNo")) Module["setErrNo"] = function() { abort("'setErrNo' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "DNS")) Module["DNS"] = function() { abort("'DNS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getHostByName")) Module["getHostByName"] = function() { abort("'getHostByName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GAI_ERRNO_MESSAGES")) Module["GAI_ERRNO_MESSAGES"] = function() { abort("'GAI_ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "Protocols")) Module["Protocols"] = function() { abort("'Protocols' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "Sockets")) Module["Sockets"] = function() { abort("'Sockets' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getRandomDevice")) Module["getRandomDevice"] = function() { abort("'getRandomDevice' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "traverseStack")) Module["traverseStack"] = function() { abort("'traverseStack' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UNWIND_CACHE")) Module["UNWIND_CACHE"] = function() { abort("'UNWIND_CACHE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "withBuiltinMalloc")) Module["withBuiltinMalloc"] = function() { abort("'withBuiltinMalloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readAsmConstArgsArray")) Module["readAsmConstArgsArray"] = function() { abort("'readAsmConstArgsArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readAsmConstArgs")) Module["readAsmConstArgs"] = function() { abort("'readAsmConstArgs' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "mainThreadEM_ASM")) Module["mainThreadEM_ASM"] = function() { abort("'mainThreadEM_ASM' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "jstoi_q")) Module["jstoi_q"] = function() { abort("'jstoi_q' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "jstoi_s")) Module["jstoi_s"] = function() { abort("'jstoi_s' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getExecutableName")) Module["getExecutableName"] = function() { abort("'getExecutableName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "listenOnce")) Module["listenOnce"] = function() { abort("'listenOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "autoResumeAudioContext")) Module["autoResumeAudioContext"] = function() { abort("'autoResumeAudioContext' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "dynCallLegacy")) Module["dynCallLegacy"] = function() { abort("'dynCallLegacy' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getDynCaller")) Module["getDynCaller"] = function() { abort("'getDynCaller' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "dynCall")) Module["dynCall"] = function() { abort("'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "callRuntimeCallbacks")) Module["callRuntimeCallbacks"] = function() { abort("'callRuntimeCallbacks' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "abortStackOverflow")) Module["abortStackOverflow"] = function() { abort("'abortStackOverflow' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "reallyNegative")) Module["reallyNegative"] = function() { abort("'reallyNegative' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "unSign")) Module["unSign"] = function() { abort("'unSign' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "reSign")) Module["reSign"] = function() { abort("'reSign' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "formatString")) Module["formatString"] = function() { abort("'formatString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "PATH")) Module["PATH"] = function() { abort("'PATH' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "PATH_FS")) Module["PATH_FS"] = function() { abort("'PATH_FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SYSCALLS")) Module["SYSCALLS"] = function() { abort("'SYSCALLS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "syscallMmap2")) Module["syscallMmap2"] = function() { abort("'syscallMmap2' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "syscallMunmap")) Module["syscallMunmap"] = function() { abort("'syscallMunmap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getSocketFromFD")) Module["getSocketFromFD"] = function() { abort("'getSocketFromFD' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getSocketAddress")) Module["getSocketAddress"] = function() { abort("'getSocketAddress' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "JSEvents")) Module["JSEvents"] = function() { abort("'JSEvents' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerKeyEventCallback")) Module["registerKeyEventCallback"] = function() { abort("'registerKeyEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "specialHTMLTargets")) Module["specialHTMLTargets"] = function() { abort("'specialHTMLTargets' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "maybeCStringToJsString")) Module["maybeCStringToJsString"] = function() { abort("'maybeCStringToJsString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "findEventTarget")) Module["findEventTarget"] = function() { abort("'findEventTarget' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "findCanvasEventTarget")) Module["findCanvasEventTarget"] = function() { abort("'findCanvasEventTarget' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getBoundingClientRect")) Module["getBoundingClientRect"] = function() { abort("'getBoundingClientRect' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillMouseEventData")) Module["fillMouseEventData"] = function() { abort("'fillMouseEventData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerMouseEventCallback")) Module["registerMouseEventCallback"] = function() { abort("'registerMouseEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerWheelEventCallback")) Module["registerWheelEventCallback"] = function() { abort("'registerWheelEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerUiEventCallback")) Module["registerUiEventCallback"] = function() { abort("'registerUiEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerFocusEventCallback")) Module["registerFocusEventCallback"] = function() { abort("'registerFocusEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillDeviceOrientationEventData")) Module["fillDeviceOrientationEventData"] = function() { abort("'fillDeviceOrientationEventData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerDeviceOrientationEventCallback")) Module["registerDeviceOrientationEventCallback"] = function() { abort("'registerDeviceOrientationEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillDeviceMotionEventData")) Module["fillDeviceMotionEventData"] = function() { abort("'fillDeviceMotionEventData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerDeviceMotionEventCallback")) Module["registerDeviceMotionEventCallback"] = function() { abort("'registerDeviceMotionEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "screenOrientation")) Module["screenOrientation"] = function() { abort("'screenOrientation' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillOrientationChangeEventData")) Module["fillOrientationChangeEventData"] = function() { abort("'fillOrientationChangeEventData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerOrientationChangeEventCallback")) Module["registerOrientationChangeEventCallback"] = function() { abort("'registerOrientationChangeEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillFullscreenChangeEventData")) Module["fillFullscreenChangeEventData"] = function() { abort("'fillFullscreenChangeEventData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerFullscreenChangeEventCallback")) Module["registerFullscreenChangeEventCallback"] = function() { abort("'registerFullscreenChangeEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerRestoreOldStyle")) Module["registerRestoreOldStyle"] = function() { abort("'registerRestoreOldStyle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "hideEverythingExceptGivenElement")) Module["hideEverythingExceptGivenElement"] = function() { abort("'hideEverythingExceptGivenElement' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "restoreHiddenElements")) Module["restoreHiddenElements"] = function() { abort("'restoreHiddenElements' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setLetterbox")) Module["setLetterbox"] = function() { abort("'setLetterbox' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "currentFullscreenStrategy")) Module["currentFullscreenStrategy"] = function() { abort("'currentFullscreenStrategy' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "restoreOldWindowedStyle")) Module["restoreOldWindowedStyle"] = function() { abort("'restoreOldWindowedStyle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "softFullscreenResizeWebGLRenderTarget")) Module["softFullscreenResizeWebGLRenderTarget"] = function() { abort("'softFullscreenResizeWebGLRenderTarget' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "doRequestFullscreen")) Module["doRequestFullscreen"] = function() { abort("'doRequestFullscreen' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillPointerlockChangeEventData")) Module["fillPointerlockChangeEventData"] = function() { abort("'fillPointerlockChangeEventData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerPointerlockChangeEventCallback")) Module["registerPointerlockChangeEventCallback"] = function() { abort("'registerPointerlockChangeEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerPointerlockErrorEventCallback")) Module["registerPointerlockErrorEventCallback"] = function() { abort("'registerPointerlockErrorEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "requestPointerLock")) Module["requestPointerLock"] = function() { abort("'requestPointerLock' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillVisibilityChangeEventData")) Module["fillVisibilityChangeEventData"] = function() { abort("'fillVisibilityChangeEventData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerVisibilityChangeEventCallback")) Module["registerVisibilityChangeEventCallback"] = function() { abort("'registerVisibilityChangeEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerTouchEventCallback")) Module["registerTouchEventCallback"] = function() { abort("'registerTouchEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillGamepadEventData")) Module["fillGamepadEventData"] = function() { abort("'fillGamepadEventData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerGamepadEventCallback")) Module["registerGamepadEventCallback"] = function() { abort("'registerGamepadEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerBeforeUnloadEventCallback")) Module["registerBeforeUnloadEventCallback"] = function() { abort("'registerBeforeUnloadEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillBatteryEventData")) Module["fillBatteryEventData"] = function() { abort("'fillBatteryEventData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "battery")) Module["battery"] = function() { abort("'battery' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerBatteryEventCallback")) Module["registerBatteryEventCallback"] = function() { abort("'registerBatteryEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setCanvasElementSize")) Module["setCanvasElementSize"] = function() { abort("'setCanvasElementSize' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getCanvasElementSize")) Module["getCanvasElementSize"] = function() { abort("'getCanvasElementSize' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "polyfillSetImmediate")) Module["polyfillSetImmediate"] = function() { abort("'polyfillSetImmediate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "demangle")) Module["demangle"] = function() { abort("'demangle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "demangleAll")) Module["demangleAll"] = function() { abort("'demangleAll' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "jsStackTrace")) Module["jsStackTrace"] = function() { abort("'jsStackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackTrace")) Module["stackTrace"] = function() { abort("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getEnvStrings")) Module["getEnvStrings"] = function() { abort("'getEnvStrings' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "checkWasiClock")) Module["checkWasiClock"] = function() { abort("'checkWasiClock' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64")) Module["writeI53ToI64"] = function() { abort("'writeI53ToI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Clamped")) Module["writeI53ToI64Clamped"] = function() { abort("'writeI53ToI64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Signaling")) Module["writeI53ToI64Signaling"] = function() { abort("'writeI53ToI64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Clamped")) Module["writeI53ToU64Clamped"] = function() { abort("'writeI53ToU64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Signaling")) Module["writeI53ToU64Signaling"] = function() { abort("'writeI53ToU64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readI53FromI64")) Module["readI53FromI64"] = function() { abort("'readI53FromI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readI53FromU64")) Module["readI53FromU64"] = function() { abort("'readI53FromU64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "convertI32PairToI53")) Module["convertI32PairToI53"] = function() { abort("'convertI32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "convertU32PairToI53")) Module["convertU32PairToI53"] = function() { abort("'convertU32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "uncaughtExceptionCount")) Module["uncaughtExceptionCount"] = function() { abort("'uncaughtExceptionCount' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "exceptionLast")) Module["exceptionLast"] = function() { abort("'exceptionLast' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "exceptionCaught")) Module["exceptionCaught"] = function() { abort("'exceptionCaught' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ExceptionInfoAttrs")) Module["ExceptionInfoAttrs"] = function() { abort("'ExceptionInfoAttrs' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ExceptionInfo")) Module["ExceptionInfo"] = function() { abort("'ExceptionInfo' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "CatchInfo")) Module["CatchInfo"] = function() { abort("'CatchInfo' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "exception_addRef")) Module["exception_addRef"] = function() { abort("'exception_addRef' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "exception_decRef")) Module["exception_decRef"] = function() { abort("'exception_decRef' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "Browser")) Module["Browser"] = function() { abort("'Browser' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "funcWrappers")) Module["funcWrappers"] = function() { abort("'funcWrappers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getFuncWrapper")) Module["getFuncWrapper"] = function() { abort("'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setMainLoop")) Module["setMainLoop"] = function() { abort("'setMainLoop' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
Module["FS"] = FS;
if (!Object.getOwnPropertyDescriptor(Module, "mmapAlloc")) Module["mmapAlloc"] = function() { abort("'mmapAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "MEMFS")) Module["MEMFS"] = function() { abort("'MEMFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "TTY")) Module["TTY"] = function() { abort("'TTY' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "PIPEFS")) Module["PIPEFS"] = function() { abort("'PIPEFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SOCKFS")) Module["SOCKFS"] = function() { abort("'SOCKFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "_setNetworkCallback")) Module["_setNetworkCallback"] = function() { abort("'_setNetworkCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "tempFixedLengthArray")) Module["tempFixedLengthArray"] = function() { abort("'tempFixedLengthArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "miniTempWebGLFloatBuffers")) Module["miniTempWebGLFloatBuffers"] = function() { abort("'miniTempWebGLFloatBuffers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "heapObjectForWebGLType")) Module["heapObjectForWebGLType"] = function() { abort("'heapObjectForWebGLType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "heapAccessShiftForWebGLHeap")) Module["heapAccessShiftForWebGLHeap"] = function() { abort("'heapAccessShiftForWebGLHeap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GL")) Module["GL"] = function() { abort("'GL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGet")) Module["emscriptenWebGLGet"] = function() { abort("'emscriptenWebGLGet' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "computeUnpackAlignedImageSize")) Module["computeUnpackAlignedImageSize"] = function() { abort("'computeUnpackAlignedImageSize' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetTexPixelData")) Module["emscriptenWebGLGetTexPixelData"] = function() { abort("'emscriptenWebGLGetTexPixelData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetUniform")) Module["emscriptenWebGLGetUniform"] = function() { abort("'emscriptenWebGLGetUniform' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetVertexAttrib")) Module["emscriptenWebGLGetVertexAttrib"] = function() { abort("'emscriptenWebGLGetVertexAttrib' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeGLArray")) Module["writeGLArray"] = function() { abort("'writeGLArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "AL")) Module["AL"] = function() { abort("'AL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL_unicode")) Module["SDL_unicode"] = function() { abort("'SDL_unicode' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL_ttfContext")) Module["SDL_ttfContext"] = function() { abort("'SDL_ttfContext' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL_audio")) Module["SDL_audio"] = function() { abort("'SDL_audio' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL")) Module["SDL"] = function() { abort("'SDL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL_gfx")) Module["SDL_gfx"] = function() { abort("'SDL_gfx' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GLUT")) Module["GLUT"] = function() { abort("'GLUT' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "EGL")) Module["EGL"] = function() { abort("'EGL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GLFW_Window")) Module["GLFW_Window"] = function() { abort("'GLFW_Window' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GLFW")) Module["GLFW"] = function() { abort("'GLFW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GLEW")) Module["GLEW"] = function() { abort("'GLEW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "IDBStore")) Module["IDBStore"] = function() { abort("'IDBStore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "runAndAbortIfError")) Module["runAndAbortIfError"] = function() { abort("'runAndAbortIfError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "warnOnce")) Module["warnOnce"] = function() { abort("'warnOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackSave")) Module["stackSave"] = function() { abort("'stackSave' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackRestore")) Module["stackRestore"] = function() { abort("'stackRestore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackAlloc")) Module["stackAlloc"] = function() { abort("'stackAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "AsciiToString")) Module["AsciiToString"] = function() { abort("'AsciiToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToAscii")) Module["stringToAscii"] = function() { abort("'stringToAscii' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UTF16ToString")) Module["UTF16ToString"] = function() { abort("'UTF16ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF16")) Module["stringToUTF16"] = function() { abort("'stringToUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF16")) Module["lengthBytesUTF16"] = function() { abort("'lengthBytesUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UTF32ToString")) Module["UTF32ToString"] = function() { abort("'UTF32ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF32")) Module["stringToUTF32"] = function() { abort("'stringToUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF32")) Module["lengthBytesUTF32"] = function() { abort("'lengthBytesUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8")) Module["allocateUTF8"] = function() { abort("'allocateUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8OnStack")) Module["allocateUTF8OnStack"] = function() { abort("'allocateUTF8OnStack' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
Module["writeStackCookie"] = writeStackCookie;
Module["checkStackCookie"] = checkStackCookie;
if (!Object.getOwnPropertyDescriptor(Module, "intArrayFromBase64")) Module["intArrayFromBase64"] = function() { abort("'intArrayFromBase64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "tryParseAsDataURI")) Module["tryParseAsDataURI"] = function() { abort("'tryParseAsDataURI' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_NORMAL")) Object.defineProperty(Module, "ALLOC_NORMAL", { configurable: true, get: function() { abort("'ALLOC_NORMAL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") } });
if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_STACK")) Object.defineProperty(Module, "ALLOC_STACK", { configurable: true, get: function() { abort("'ALLOC_STACK' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") } });

var calledRun;

/**
 * @constructor
 * @this {ExitStatus}
 */
function ExitStatus(status) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + status + ")";
  this.status = status;
}

var calledMain = false;

dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!calledRun) run();
  if (!calledRun) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
};

function stackCheckInit() {
  // This is normally called automatically during __wasm_call_ctors but need to
  // get these values before even running any of the ctors so we call it redundantly
  // here.
  // TODO(sbc): Move writeStackCookie to native to to avoid this.
  _emscripten_stack_init();
  writeStackCookie();
}

/** @type {function(Array=)} */
function run(args) {
  args = args || arguments_;

  if (runDependencies > 0) {
    return;
  }

  stackCheckInit();

  preRun();

  // a preRun added a dependency, run will be called later
  if (runDependencies > 0) {
    return;
  }

  function doRun() {
    // run may have just been called through dependencies being fulfilled just in this very frame,
    // or while the async setStatus time below was happening
    if (calledRun) return;
    calledRun = true;
    Module['calledRun'] = true;

    if (ABORT) return;

    initRuntime();

    preMain();

    readyPromiseResolve(Module);
    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();

    assert(!Module['_main'], 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else
  {
    doRun();
  }
  checkStackCookie();
}
Module['run'] = run;

function checkUnflushedContent() {
  // Compiler settings do not allow exiting the runtime, so flushing
  // the streams is not possible. but in ASSERTIONS mode we check
  // if there was something to flush, and if so tell the user they
  // should request that the runtime be exitable.
  // Normally we would not even include flush() at all, but in ASSERTIONS
  // builds we do so just for this check, and here we see if there is any
  // content to flush, that is, we check if there would have been
  // something a non-ASSERTIONS build would have not seen.
  // How we flush the streams depends on whether we are in SYSCALLS_REQUIRE_FILESYSTEM=0
  // mode (which has its own special function for this; otherwise, all
  // the code is inside libc)
  var oldOut = out;
  var oldErr = err;
  var has = false;
  out = err = function(x) {
    has = true;
  }
  try { // it doesn't matter if it fails
    var flush = Module['_fflush'];
    if (flush) flush(0);
    // also flush in the JS FS layer
    ['stdout', 'stderr'].forEach(function(name) {
      var info = FS.analyzePath('/dev/' + name);
      if (!info) return;
      var stream = info.object;
      var rdev = stream.rdev;
      var tty = TTY.ttys[rdev];
      if (tty && tty.output && tty.output.length) {
        has = true;
      }
    });
  } catch(e) {}
  out = oldOut;
  err = oldErr;
  if (has) {
    warnOnce('stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the FAQ), or make sure to emit a newline when you printf etc.');
  }
}

/** @param {boolean|number=} implicit */
function exit(status, implicit) {
  checkUnflushedContent();

  // if this is just main exit-ing implicitly, and the status is 0, then we
  // don't need to do anything here and can just leave. if the status is
  // non-zero, though, then we need to report it.
  // (we may have warned about this earlier, if a situation justifies doing so)
  if (implicit && noExitRuntime && status === 0) {
    return;
  }

  if (noExitRuntime) {
    // if exit() was called, we may warn the user if the runtime isn't actually being shut down
    if (!implicit) {
      var msg = 'program exited (with status: ' + status + '), but EXIT_RUNTIME is not set, so halting execution but not exiting the runtime or preventing further async execution (build with EXIT_RUNTIME=1, if you want a true shutdown)';
      readyPromiseReject(msg);
      err(msg);
    }
  } else {

    EXITSTATUS = status;

    exitRuntime();

    if (Module['onExit']) Module['onExit'](status);

    ABORT = true;
  }

  quit_(status, new ExitStatus(status));
}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

noExitRuntime = true;

run();







  return LibTimidity
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = LibTimidity;
else if (typeof define === 'function' && define['amd'])
  define([], function() { return LibTimidity; });
else if (typeof exports === 'object')
  exports["LibTimidity"] = LibTimidity;
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime_1 = createCommonjsModule(function (module) {
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
      define = function (obj, key, value) {
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
      reset: function (skipTempReset) {
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
      stop: function () {
        this.done = true;
        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;

        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },
      dispatchException: function (exception) {
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
      abrupt: function (type, arg) {
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
      complete: function (record, afterLoc) {
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
      finish: function (finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },
      "catch": function (tryLoc) {
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
      delegateYield: function (iterable, resultName, nextLoc) {
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
    whitespace = '[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]',
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

    for (key in ignore) delete finaldestination[key];
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
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
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

// import LibTimidity from './libtimidity'
// Inlined at build time by 'brfs' browserify transform

const TIMIDITY_CFG = "# Bank name:  GUS Classic Patch Set v1.6b   www.rarek.ceron.pl\n# Date:       Feb 25, 1999\n# Made by:    Converted by ArekR\n# Target:     SBAWE32\n# Copyright:  EYE&I and Advanced Gravis\n# Tools:      Polyphone\n\nbank 0 #N gravis-B0\n\t0 gravis-B0/GrandPiano\n\t1 gravis-B0/BritePiano\n\t2 gravis-B0/SynthPiano1\n\t3 gravis-B0/HonkyTonkPiano\n\t4 gravis-B0/RhodesPiano\n\t5 gravis-B0/ChorusedPiano\n\t6 gravis-B0/Harpsichord\n\t7 gravis-B0/Clavinet\n\t8 gravis-B0/Celeste\n\t9 gravis-B0/Glockenspiel\n\t10 gravis-B0/MusicBox\n\t11 gravis-B0/Vibes\n\t12 gravis-B0/Marimba\n\t13 gravis-B0/Xylophone\n\t14 gravis-B0/TubularBells\n\t15 gravis-B0/Dulcimer\n\t16 gravis-B0/HammondOrgan\n\t17 gravis-B0/PercussiveOrgan\n\t18 gravis-B0/RockOrgan\n\t19 gravis-B0/ChurchOrgan\n\t20 gravis-B0/ReedOrgan\n\t21 gravis-B0/Accordion\n\t22 gravis-B0/Harmonica\n\t23 gravis-B0/Concertina\n\t24 gravis-B0/NylonStringGtr\n\t25 gravis-B0/SteelStringGtr\n\t26 gravis-B0/JazzGuitar\n\t27 gravis-B0/ElecGtrclean\n\t28 gravis-B0/MutedGuitar\n\t29 gravis-B0/OverdriveGuitar\n\t30 gravis-B0/DistortionGtr\n\t31 gravis-B0/GuitarHarmonics\n\t32 gravis-B0/AcousticBass\n\t33 gravis-B0/FingeredBass\n\t34 gravis-B0/PickedBass\n\t35 gravis-B0/FretlessBass\n\t36 gravis-B0/SlapBass1\n\t37 gravis-B0/SlapBass2\n\t38 gravis-B0/SynthBass1\n\t39 gravis-B0/SynthBass2\n\t40 gravis-B0/Violin\n\t41 gravis-B0/Viola\n\t42 gravis-B0/Cello\n\t43 gravis-B0/Contrabass\n\t44 gravis-B0/TremoloStrings\n\t45 gravis-B0/PizzicatoString\n\t46 gravis-B0/OrchestralHarp\n\t47 gravis-B0/Timpani\n\t48 gravis-B0/MarcatoStrings\n\t49 gravis-B0/SlowStrings\n\t50 gravis-B0/SynthStrings1\n\t51 gravis-B0/SynthStrings2\n\t52 gravis-B0/ChoirAahs\n\t53 gravis-B0/VoiceOohs\n\t54 gravis-B0/SynthVoices\n\t55 gravis-B0/OrchestraHit\n\t56 gravis-B0/Trumpet\n\t57 gravis-B0/Trombone\n\t58 gravis-B0/Tuba\n\t59 gravis-B0/MutedTrumpet\n\t60 gravis-B0/FrenchHorn\n\t61 gravis-B0/BrassSection\n\t62 gravis-B0/SynthBrass1\n\t63 gravis-B0/SynthBrass2\n\t64 gravis-B0/SopranoSax\n\t65 gravis-B0/AltoSax\n\t66 gravis-B0/TenorSax\n\t67 gravis-B0/BaritoneSax\n\t68 gravis-B0/Oboe\n\t69 gravis-B0/EnglishHorn\n\t70 gravis-B0/Bassoon\n\t71 gravis-B0/Clarinet\n\t72 gravis-B0/Piccolo\n\t73 gravis-B0/Flute\n\t74 gravis-B0/Recorder\n\t75 gravis-B0/WoodenFlute\n\t76 gravis-B0/Bottle\n\t77 gravis-B0/Shakuhachi\n\t78 gravis-B0/Whistle\n\t79 gravis-B0/Ocarina\n\t80 gravis-B0/SquareWave\n\t81 gravis-B0/SawtoothWave\n\t82 gravis-B0/Calliope\n\t83 gravis-B0/Chifflead\n\t84 gravis-B0/Charang\n\t85 gravis-B0/Voxlead\n\t86 gravis-B0/Fifthslead\n\t87 gravis-B0/BassLead\n\t88 gravis-B0/Fantasia\n\t89 gravis-B0/Warmpad\n\t90 gravis-B0/Polysynth\n\t91 gravis-B0/Ghostie\n\t92 gravis-B0/BowedGlass\n\t93 gravis-B0/Metalpad\n\t94 gravis-B0/Halopad\n\t95 gravis-B0/Sweeper\n\t96 gravis-B0/Aurora\n\t97 gravis-B0/Soundtrack\n\t98 gravis-B0/Crystal\n\t99 gravis-B0/Atmosphere\n\t100 gravis-B0/FreshAir\n\t101 gravis-B0/Unicorn\n\t102 gravis-B0/EchoVox\n\t103 gravis-B0/Startrak\n\t104 gravis-B0/Sitar\n\t105 gravis-B0/Banjo\n\t106 gravis-B0/Shamisen\n\t107 gravis-B0/Koto\n\t108 gravis-B0/Kalimba\n\t109 gravis-B0/Bagpipes\n\t110 gravis-B0/Fiddle\n\t111 gravis-B0/Shannai\n\t112 gravis-B0/Carillon\n\t113 gravis-B0/Agogo\n\t114 gravis-B0/SteelDrums\n\t115 gravis-B0/Woodblock\n\t116 gravis-B0/TaikoDrum\n\t117 gravis-B0/Toms\n\t118 gravis-B0/SynthTom\n\t119 gravis-B0/ReverseCymbal\n\t120 gravis-B0/GtrFretnoise\n\t121 gravis-B0/BreathNoise\n\t122 gravis-B0/Seashore\n\t123 gravis-B0/Junglenoises\n\t124 gravis-B0/Telephone\n\t125 gravis-B0/Helicopter\n\t126 gravis-B0/Applause\n\t127 gravis-B0/Gunshot\n\nbank 1 #N gravis-B1\n\t0 gravis-B1/long\n\ndrumset 0 #N Standard\n\t27 gravis-Standard/HighQ\n\t28 gravis-Standard/Slap\n\t29 gravis-Standard/Scratch1\n\t30 gravis-Standard/Scratch2\n\t31 gravis-Standard/Sticks\n\t32 gravis-Standard/SquareClick\n\t33 gravis-Standard/MetronomeClick\n\t34 gravis-Standard/MetronomeBell\n\t35 gravis-Standard/KickDrum1\n\t36 gravis-Standard/KickDrum2\n\t37 gravis-Standard/RimSideStick\n\t38 gravis-Standard/GatedSnare\n\t39 gravis-Standard/HandClap\n\t40 gravis-Standard/AcousticSnare\n\t41 gravis-Standard/Tomlow2\n\t42 gravis-Standard/ClosedHighHat\n\t43 gravis-Standard/Tomlow1\n\t44 gravis-Standard/PedalHighHat\n\t45 gravis-Standard/Tommid2\n\t46 gravis-Standard/OpenHighHat\n\t47 gravis-Standard/Tommid1\n\t48 gravis-Standard/Tomhigh2\n\t49 gravis-Standard/CrashCymbal1\n\t50 gravis-Standard/Tomhigh1\n\t51 gravis-Standard/RideCymbal1\n\t52 gravis-Standard/Chinesecymbal\n\t53 gravis-Standard/Ridebell\n\t54 gravis-Standard/Tambourine\n\t55 gravis-Standard/SplashCymbal\n\t56 gravis-Standard/Cowbell\n\t57 gravis-Standard/CrashCymbal2\n\t58 gravis-Standard/Vibraslap\n\t59 gravis-Standard/RideCymbal2\n\t60 gravis-Standard/HighBongo\n\t61 gravis-Standard/LowBongo\n\t62 gravis-Standard/MuteHighConga\n\t63 gravis-Standard/OpenHighConga\n\t64 gravis-Standard/LowConga\n\t65 gravis-Standard/HighTimbale\n\t66 gravis-Standard/LowTimbale\n\t67 gravis-Standard/Agogohigh\n\t68 gravis-Standard/Agogolow\n\t69 gravis-Standard/Cabasa\n\t70 gravis-Standard/Maracas\n\t71 gravis-Standard/ShortWhistle\n\t72 gravis-Standard/LongWhistle\n\t73 gravis-Standard/ShortGuiro\n\t74 gravis-Standard/LongGuiro\n\t75 gravis-Standard/Claves\n\t76 gravis-Standard/HighWoodblock\n\t77 gravis-Standard/LowWoodblock\n\t78 gravis-Standard/MuteCuica\n\t79 gravis-Standard/OpenCuica\n\t80 gravis-Standard/MuteTriangle\n\t81 gravis-Standard/OpenTriangle\n\t82 gravis-Standard/Shaker\n\t83 gravis-Standard/JingleBells\n\t84 gravis-Standard/BellTree\n\t85 gravis-Standard/Castinet\n\t86 gravis-Standard/MuteSurdo\n\t87 gravis-Standard/OpenSurdo\n";
const SAMPLE_RATE = 44100;
const AUDIO_FORMAT = 0x8010; // format of the rendered audio 's16'

const NUM_CHANNELS = 2; // stereo (2 channels)

const BYTES_PER_SAMPLE = 2 * NUM_CHANNELS;
const BUFFER_SIZE = 128; // buffer size for each render() call

registerProcessor('midiplayer', class extends AudioWorkletProcessor {
  constructor(args) {
    super();
    let baseUrl = args.processorOptions.baseURL;
    const midiBuff = args.processorOptions.midiBuff;
    if (!baseUrl.endsWith('/')) baseUrl += '/';
    this._baseUrl = new urlParse(baseUrl).href;
    this._songPtr = 0;
    this._bufferPtr = 0;
    this._array = new Int16Array(BUFFER_SIZE * 2);
    this._currentUrlOrBuf = null; // currently loading url or buf

    this._interval = null;
    this.oncer = true;
    this._lib = LibTimidity({
      locateFile: file => new urlParse(file, this._baseUrl).href
    });

    this._lib.FS.writeFile('/timidity.cfg', TIMIDITY_CFG);

    const result = this._lib._mid_init('/timidity.cfg');

    if (result !== 0) {
      return this._destroy(new Error('Failed to initialize libtimidity'));
    }

    this._bufferPtr = this._lib._malloc(BUFFER_SIZE * BYTES_PER_SAMPLE);
    if (!(midiBuff instanceof Uint8Array)) throw new Error('load() expects a `string` or `Uint8Array` argument');
    this.port.onmessage = this._handleMessage.bind(this);
    this._midiBuf = midiBuff;

    this._loadSong(midiBuff).then(songPtr => {
      this._songPtr = songPtr;

      this._reqInstruments(songPtr, midiBuff); // Now, wait for failure or all the instruments

    });
  }

  async _handleMessage(message) {
    if (message.data.type === 'instPayload') {
      for (let inst of message.data.buffs) {
        this._writeInstrumentFile(inst.instrumentName, inst.instrumentBuff);
      }

      this.port.postMessage(this._lib._mid_get_load_request_count(this._songPtr));

      this._lib._mid_song_free(this._songPtr);

      this._songPtr = await this._loadSong(this._midiBuf);

      this._lib._mid_song_start(this._songPtr);

      this._playing = true;
    }
  }

  _reqInstruments(songPtr, midiBuff) {
    // Are we missing instrument files?
    let missingCount = this._lib._mid_get_load_request_count(songPtr);

    if (missingCount > 0) {
      let missingInstruments = this._getMissingInstruments(songPtr, missingCount); // Request instruments to be fetched from the main thread
      // missingInstruments.map(instrument => this._reqInstrument(instrument))


      this.port.postMessage({
        type: 'missingInstruments',
        instruments: missingInstruments
      });
    }
  }

  _getMissingInstruments(songPtr, missingCount) {
    const missingInstruments = [];

    for (let i = 0; i < missingCount; i++) {
      const instrumentPtr = this._lib._mid_get_load_request(songPtr, i);

      const instrument = this._lib.UTF8ToString(instrumentPtr);

      missingInstruments.push(instrument);
    }

    return missingInstruments;
  }

  async _loadSong(midiBuf) {
    const optsPtr = this._lib._mid_alloc_options(SAMPLE_RATE, AUDIO_FORMAT, NUM_CHANNELS, BUFFER_SIZE); // Copy the MIDI buffer into the heap


    const midiBufPtr = this._lib._malloc(midiBuf.byteLength);

    this._lib.HEAPU8.set(midiBuf, midiBufPtr); // Create a stream


    const iStreamPtr = this._lib._mid_istream_open_mem(midiBufPtr, midiBuf.byteLength); // Load the song


    const songPtr = this._lib._mid_song_load(iStreamPtr, optsPtr); // Free resources no longer needed


    this._lib._mid_istream_close(iStreamPtr);

    this._lib._free(optsPtr);

    this._lib._free(midiBufPtr);

    if (songPtr === 0) {
      return this._destroy(new Error('Failed to load MIDI file'));
    }

    return songPtr;
  }

  _writeInstrumentFile(instrument, buf) {
    const folderPath = instrument.split('/').slice(0, -1) // remove basename
    .join('/');

    this._mkdirp(folderPath);

    this._lib.FS.writeFile(instrument, buf, {
      encoding: 'binary'
    });
  }

  _mkdirp(folderPath) {
    const pathParts = folderPath.split('/');
    let dirPath = '/';

    for (let i = 0; i < pathParts.length; i++) {
      const curPart = pathParts[i];

      try {
        this._lib.FS.mkdir(`${dirPath}${curPart}`);
      } catch (err) {}

      dirPath += `${curPart}/`;
    }
  }

  _onAudioProcess(outputs) {
    const sampleCount = this._songPtr && this._playing ? this._readMidiData() : 0; // if (sampleCount > 0 && this._currentUrlOrBuf) {
    //   this._currentUrlOrBuf = null
    //   this.emit('playing')
    //   this._startInterval()
    // }

    if (this.oncer) {
      this.port.postMessage(sampleCount);
      this.port.postMessage(outputs[0][0].length);
      this.oncer = false;
    }

    const output0 = outputs[0][0];
    const output1 = outputs[0][1];

    for (let i = 0; i < sampleCount; i++) {
      output0[i] = this._array[i * 2] / 0x7FFF;
      output1[i] = this._array[i * 2 + 1] / 0x7FFF;
    }

    for (let i = sampleCount; i < BUFFER_SIZE; i++) {
      output0[i] = 0;
      output1[i] = 0;
    } // if (this._songPtr && this._playing && sampleCount === 0) {
    //   // Reached the end of the file
    //   // this.seek(0)
    //   // this.pause()
    //   this._lib._mid_song_start(this._songPtr)
    //   // this.emit('ended')
    // }


    return outputs;
  }

  _readMidiData() {
    const byteCount = this._lib._mid_song_read_wave(this._songPtr, this._bufferPtr, BUFFER_SIZE * BYTES_PER_SAMPLE);

    const sampleCount = byteCount / BYTES_PER_SAMPLE; // Was anything output? If not, don't bother copying anything

    if (sampleCount === 0) {
      return 0;
    }

    this._array.set(this._lib.HEAP16.subarray(this._bufferPtr / 2, (this._bufferPtr + byteCount) / 2));

    return sampleCount;
  }

  process(inputs, outputs, params) {
    if (this._playing) {
      outputs = this._onAudioProcess(outputs);
    }

    return true;
  } // noiseTest(outputs){
  //   let output = outputs[0];
  //   for (let channel = 0; channel < output.length; ++channel) {
  //     let outputChannel = output[channel];
  //     for (let i = 0; i < outputChannel.length; ++i) {
  //       outputChannel[i] = 2 * (Math.random() - 0.5) * 0.25;
  //     }
  //   }
  // }
  // process(inputs, outputs, parameters) {
  //   this.noiseTest(outputs)
  //   return true;
  // }


});

