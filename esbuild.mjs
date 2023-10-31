import {unlink} from 'fs';
import esbuild from 'esbuild';
import esbuild_replace from './tools/esbuild_replace.js';
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const pkg_json = require('./package.json')

const bldo = {
	entryPoints: ['src/TimidityWorkletProcessor.js','src/MIDIPlayer.js'],
	format: 'esm',
	bundle: true,
	treeShaking: false, // essential to get wasm to work
	minify: false,
	sourcemap: true,
	target: 'es2022',
	outdir: 'public',
	loader: {
		'.cfg': 'text'
	},
	plugins: [
		esbuild_replace({
			include: /\bsrc[\/\\].+\.js$/,
			define: {
				'PKG_VERSION': JSON.stringify(pkg_json.version)
			}
		}),
	],
}

if (process.argv[2] == '--serve') {
	console.log('serve mode: http://127.0.0.1:8000/');
	let ctx = await esbuild.context(bldo);
	await ctx.serve({
		servedir: 'public',
		host: '127.0.0.1',
		port: 8000,
		onRequest: (args) => console.log(`[${args.status}] ${args.method}: ${args.path}`)
	});
} else {
	console.log('build mode');
	await esbuild.build(bldo);
}
