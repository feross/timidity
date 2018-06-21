#!/bin/sh
set -e

FLAGS="-Oz -s STRICT=1 -s ENVIRONMENT=web" # PRODUCTION
# FLAGS="-g4 -DTIMIDITY_DEBUG" # DEBUG

BUILD_OPTS="-s ALLOW_MEMORY_GROWTH=1 -s MODULARIZE=1 -s EXPORT_NAME=\"'LibTimidity'\""

emcc -o libtimidity.js $FLAGS $BUILD_OPTS libtimidity/src/*.c -s EXPORTED_FUNCTIONS=@exports.json -s EXTRA_EXPORTED_RUNTIME_METHODS="['FS', 'Pointer_stringify']"
