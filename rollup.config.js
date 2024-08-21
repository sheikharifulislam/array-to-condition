import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

export default {
    input: "src/index.ts",
    output: [
        {
            file: "dist/index.js",
            format: "cjs",
            sourcemap: false,
        },
        {
            file: "dist/index.es.js",
            format: "es",
            sourcemap: false,
        },
    ],
    plugins: [
        typescript({
            sourceMap: false,
            declarationMap: false,
            tsconfig: "./tsconfig.json",
        }),
        terser(),
    ],
    external: (id) => /^node_modules/.test(id),
};
