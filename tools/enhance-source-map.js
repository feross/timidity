// emcc -g4 doesn't append sourcesContents, but it is simple enough to do manually.
// Closest issue related to this, but is closed: https://github.com/emscripten-core/emscripten/issues/6535

const fs = require('fs');

const map = JSON.parse(fs.readFileSync('libtimidity.wasm.map', 'utf-8'));
map.sourcesContent = map.sources.map(source => fs.readFileSync(source, 'utf-8'));
fs.writeFileSync('libtimidity.wasm.map', JSON.stringify(map, null, 2));
