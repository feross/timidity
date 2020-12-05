// This node script is used to build the library for upload to the
// org CDN at https://cdn.noteworthycomposer.org/timidity/.
// This CDN is setup to provide only the gzip version of all
// files.
const fs = require('fs');
const browserify = require('browserify');
const gzipme = require('gzipme');

let outFolder = './build';
let b = browserify('index.js');
let outFN = `${outFolder}/timidity.js`;
let outFile = fs.createWriteStream(outFN);

outFile.on('finish',() => gzipme(outFN, {mode:'best', overwrite: true}));

b.transform("uglifyify", {global:true});
b.bundle().pipe(outFile);

gzipme('./libtimidity.wasm',{mode:'best',output: `${outFolder}/libtimidity.wasm`});
