// https://gist.github.com/manzt/689e4937f5ae998c56af72efc9217ef0
import esbuild from "esbuild";
import { resolve } from "path";

/**
 * @param {Pick<import('esbuild').BuildOptions, 'minify' | 'format' | 'plugins'>}
 * @return {import('esbuild').Plugin}
 */
const PluginInlineWorker = (opt = {}) => {
	const namespace = 'inline-worker';
	const prefix = `${namespace}:`;
	return {
		name: namespace,
		setup(build) {
			build.onResolve({ filter: new RegExp(`^${prefix}`) }, (args) => {
				return {
					path: resolve(args.resolveDir, args.path.slice(prefix.length)),
					namespace,
				};
			});
			build.onLoad({ filter: /.*/, namespace }, async (args) => {
				const { outputFiles } = await esbuild.build({
					entryPoints: [args.path],
					bundle: true,
					write: false,
					format: opt.format || "iife",
					minify: opt.minify || true,
					target: build.initialOptions.target,
					plugins: [
						...(build.initialOptions.plugins || []),
						...(opt.plugins || []),
					],
				});
				if (outputFiles.length !== 1) {
					throw new Error("Too many files built for worker bundle.");
				}
				const { contents } = outputFiles[0];
				const base64 = Buffer.from(contents).toString("base64");
				return {
					loader: "js",
					contents: `export default "data:application/javascript;base64,${base64}";`,
				};
			});
		},
	};
};

export default PluginInlineWorker;
