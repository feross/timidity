// The esbuild define in its current form cannot handle the replacements required by Fengari,
// so we use this custom plugin instead. This converts string matches to a regex that only
// matches the string when surrounded by word boundaries. This should sufficiently emulate
// the webpack.DefinePlugin behaviour.
const fs = require('fs');

function escRegExp(s) {return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");}

module.exports = (options = {}) => {
	const d = options.define;
	let r = [];
	for(const k in d) {
		r.push(new RegExp('\\b'+escRegExp(k)+'\\b','g'),d[k]);
	}

	return {
		name: 'esbuild_replace',
		setup(build) {
			build.onLoad({ filter: options.include }, async (args) => {
				let contents = await fs.promises.readFile(args.path, 'utf8');
				for(let i=0; i < r.length; i+=2) {
					contents = contents.replaceAll(r[i],r[i+1]);
				}
				return { contents, loader: 'default' };				
			});
		}
	}
}
