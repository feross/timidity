var self = {
    location: {
        href: "https://localhost:8080" // URL where the module was loaded from
    }
}
// https://github.com/jet2jet/fluidsynth-emscripten/blob/master/emscripten/src/pre.js
var document = typeof document !== 'undefined' ? document : {};
var window = typeof window !== 'undefined' ? window : {};
