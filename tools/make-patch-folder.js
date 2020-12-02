// run this with `npm run make-patches -- gz` for both deflated and raw pat files
const fs = require('fs');
const processPatchFolder = require('./processPatchFolder');

var argv = require('minimist')(process.argv.slice(2));
let use_gzip = (argv.z == true);
let use_add_gzip = use_gzip && (argv.g == true);
let outFolder = './build/pat';

if (fs.existsSync(outFolder)) {
	fs.rmdirSync(outFolder, { recursive: true });
}
fs.mkdirSync(outFolder);

processPatchFolder('node_modules/freepats/Drum_000',outFolder, use_gzip, use_add_gzip, /^([0-9]+).+/, (m,m1) => `d${m1}.pat`);
processPatchFolder('node_modules/freepats/Tone_000',outFolder, use_gzip, use_add_gzip, /^([0-9]+).+/, (m,m1) => `t${m1}.pat`);
fs.copyFileSync('node_modules/freepats/LICENSE',`${outFolder}/LICENSE`);
fs.copyFileSync('node_modules/freepats/README.md',`${outFolder}/README.md`);
