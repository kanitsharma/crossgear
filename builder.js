/* eslint-disable */
const { rollup } = require('rollup');
const babel = require('rollup-plugin-babel');
const nodeResolve = require('rollup-plugin-node-resolve');
const uglify = require('rollup-plugin-uglify');
const bundleSize = require('rollup-plugin-bundle-size');
const commonjs = require('rollup-plugin-commonjs');

const name = `crossgear`;

const plugins = [
  babel(),
  nodeResolve({
    module: true,
    jsnext: true
  }),
  commonjs({
    include: `node_modules/**`
  }),
  bundleSize()
];

const isProd = process.env.NODE_ENV === `production`;
// if (isProd) plugins.push(uglify());

rollup({
  entry: `src/index.js`,
  plugins,
}).then(bundle => Promise.all([
  bundle.write({
    dest: `dist/${name}${isProd ? `.min` : ``}.js`,
    moduleName: name,
    format: `umd`
  }),
  bundle.write({
    dest: 'es/index.js',
    format: 'es',
    moduleName: name,
  }),
  bundle.write({
    dest: 'cjs/index.js',
    format: 'cjs',
    moduleName: name,
  })
])).catch(error => console.log(error));
