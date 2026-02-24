import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { dts } from 'rollup-plugin-dts';

export default [{
    input: 'src/index.js',
    output: [
        {
            file: 'dist/evaldom.esm.js',
            format: 'esm',
            sourcemap: true,
        },
        {
            file: 'dist/evaldom.cjs',
            format: 'cjs',
            sourcemap: true,
            exports: 'named',
        },
        {
            file: 'dist/evaldom.umd.js',
            format: 'umd',
            name: 'DOM',
            sourcemap: true,
            exports: 'named',
        },
    ],
    plugins: [
        resolve(), // Позволяет импортировать модули из node_modules
        commonjs(), // Позволяет импортировать CommonJS модули
    ],
    external: [] // внешние зависимости, которые не нужно бандлить 
}, {
    input: 'src/index.min.js',
    output: [
        {
            file: 'dist/evaldom.esm.min.js',
            format: 'esm',
            sourcemap: true,
        },
        {
            file: 'dist/evaldom.min.cjs',
            format: 'cjs',
            sourcemap: true,
            exports: 'named',
        },
        {
            file: 'dist/evaldom.umd.min.js',
            format: 'umd',
            name: 'DOM',
            sourcemap: true,
            exports: 'named',
        },
    ],
    plugins: [
        resolve(),
        commonjs(),
    ],
    external: []
}, {
    input: 'src/index.d.ts',
    output: [{ file: 'dist/evaldom.d.ts', format: 'es' }],
    plugins: [dts()],
}];