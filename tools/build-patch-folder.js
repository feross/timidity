const fs = require('fs');
const path = require('path');
const process = require('process');
const gzipme = require('gzipme');

fs.mkdirSync('freepats');
fs.mkdirSync('freepats/d0');
fs.mkdirSync('freepats/t0');

let folder = path.resolve('node_modules/freepats/Drum_000');

let flist = fs.readdirSync(folder,{withFileTypes:true});

flist.forEach((file) => { 
	if (file.isFile) {
		let newname = file.name.replace(/^([0-9]+).+/, (m,m1) => `d${m1}.pat`);
		process.stdout.write(`${file.name} -> ${newname}\n`);
		fs.copyFileSync(`${folder}/${file.name}`,`freepats/d0/${newname}`); 
		gzipme(`${folder}/${file.name}`, {mode:'best', output:`freepats/d0/${newname}.gz`}); 
	}
});

folder = path.resolve('node_modules/freepats/Tone_000');
flist = fs.readdirSync(folder,{withFileTypes:true});

flist.forEach((file) => { 
	if (file.isFile) {
		let newname = file.name.replace(/^([0-9]+).+/, (m,m1) => `t${m1}.pat`);
		process.stdout.write(`${file.name} -> ${newname}\n`);
		fs.copyFileSync(`${folder}/${file.name}`,`freepats/t0/${newname}`); 
		gzipme(`${folder}/${file.name}`, {mode:'best', output:`freepats/t0/${newname}.gz`}); 
	}
});
