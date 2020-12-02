const fs = require('fs');
const gzipme = require('gzipme');

async function processPatchFolder(srcfolder, dstfolder, usegzip, use_add_gzip, regx, repfunc) {
	let flist = fs.readdirSync(srcfolder,{withFileTypes:true});
	
	flist.forEach(async (file) => { 
		if (file.isFile) {
			let newname = regx ? file.name.replace(regx,repfunc) : file.name;
			let dstname = `${dstfolder}/${newname}`;
			process.stdout.write(`${file.name} -> ${dstname}\n`);
			fs.copyFileSync(`${srcfolder}/${file.name}`,dstname); 
			if (usegzip) {
				let stat1 = fs.statSync(dstname);
				let dstname2 = use_add_gzip ? `${dstname}.gz` : dstname;
				if (use_add_gzip) await gzipme(dstname, {mode:'best', output: `${dstname}.gz`});
				else await gzipme(dstname, {mode:'best', overwrite: true});
				let stat2 = fs.statSync(dstname2);
				let reduction = stat1.size ? Math.round(100*(stat1.size - stat2.size)/stat1.size) : 100;
				process.stdout.write(`gzip ${dstname}\t${reduction}%\n`);
			}
		}
	});
}

module.exports = processPatchFolder;
