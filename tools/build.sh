#!/bin/sh
# Build the package, exit on error
set -e

# Compile the libtimidity C codebase to JavaScript with emscripten
# inspired by https://github.com/GoogleChromeLabs/web-audio-samples/blob/main/src/audio-worklet/design-pattern/wasm-supersaw/Makefile
BUILD_FLAGS="\
-s ALLOW_MEMORY_GROWTH=1 \
-s MODULARIZE=1 \
-s EXPORT_NAME=LibTimidity \
-s EXPORTED_FUNCTIONS=@tools/exports.json \
-s EXPORTED_RUNTIME_METHODS=@tools/exports-runtime.json \
-s ENVIRONMENT=shell \
-s SINGLE_FILE=1 \
-s WASM=1 \
-s WASM_ASYNC_COMPILATION=0 \
"

emcc -o wasm/libtimidity.wasm.js $BUILD_FLAGS libtimidity/src/*.c

# fixup the atob polyfill
patch wasm/libtimidity.wasm.js src/wasm.diff

# Include the freepats config in the published package so `brfs` can inline it
# cp node_modules/freepats/freepats.cfg freepats.cfg
# cp patches/gravis.cfg src/gravis.cfg
