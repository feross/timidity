#!/bin/sh
# Build the package, exit on error
set -e

# Compile the libtimidity C codebase to JavaScript with emscripten
BUILD_FLAGS="\
-s ALLOW_MEMORY_GROWTH=1 -s MODULARIZE=1 -s EXPORT_NAME=LibTimidity \
-s EXPORTED_FUNCTIONS=@tools/exports.json \
-s EXPORTED_RUNTIME_METHODS=@tools/exports-runtime.json \
-s FORCE_FILESYSTEM=1 -s SINGLE_FILE=1 -s BINARYEN_ASYNC_COMPILATION=0 "

# Maximize optimization options for smallest file size
OPTIMIZE_FLAGS_PROD="-Oz -s ENVIRONMENT=web,worker"
OPTIMIZE_FLAGS_DEBUG="-gsource-map -DTIMIDITY_DEBUG"

emcc -o wasm/libtimidity.js $OPTIMIZE_FLAGS_PROD $BUILD_FLAGS libtimidity/src/*.c
emcc -o wasm/libtimidity.debug.js $OPTIMIZE_FLAGS_DEBUG $BUILD_FLAGS libtimidity/src/*.c

# Include the freepats config in the published package so `brfs` can inline it
# cp node_modules/freepats/freepats.cfg freepats.cfg
# cp patches/gravis.cfg src/gravis.cfg
