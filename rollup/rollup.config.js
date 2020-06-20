const path = require('path');
const typescript = require('@rollup/plugin-typescript');
const { babel } = require('@rollup/plugin-babel');
const cjs = require('@rollup/plugin-commonjs');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const replace = require('@rollup/plugin-replace');
const buble = require('@rollup/plugin-buble');
const version = process.env.VERSION || require('../package.json').version;
const banner =
`/*!
  * xue-ui-react v${version}
  * (c) ${new Date().getFullYear()} Huaihuan Xue
  * @license MIT
  */`;

const resolve = _path => path.resolve(__dirname, '../', _path);

module.exports = [
  {
    file: resolve('dist/xue-ui-react.js'),
    format: 'umd',
    env: 'development',
    transpile: true,
  },
  {
    file: resolve('dist/xue-ui-react.min.js'),
    format: 'umd',
    env: 'production',
    transpile: true,
  },
  {
    file: resolve('dist/xue-ui-react.common.js'),
    format: 'cjs',
    transpile: true,
  },
  {
    file: resolve('dist/xue-ui-react.esm.js'),
    format: 'es',
    transpile: true,
  },
  {
    file: resolve('dist/xue-ui-react.esm.browser.js'),
    format: 'es',
    env: 'development',
  },
  {
    file: resolve('dist/xue-ui-react.esm.browser.min.js'),
    format: 'es',
    env: 'production',
  },
].map(genConfig);

function genConfig (options) {
  const external = ['@babel/runtime', 'react', 'styled-components', 'polished'];

  if (options.format === 'es' || options.format === 'cjs') {
    external.shift();
  }

  const config = {
    input: {
      input: resolve('src/index.tsx'),
      plugins: [
        typescript(),
        babel({
          presets: ['@babel/preset-react'],
          // plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-runtime'],
          plugins: ['@babel/plugin-proposal-class-properties'],
          babelHelpers: 'runtime',
        }),
        cjs(),
        nodeResolve(),
      ],
      external,
    },
    output: {
      file: options.file,
      format: options.format,
      banner,
      name: 'XueUIReact',
      globals: {
        react: 'React',
        'styled-components': 'styled',
      },
    },
  };

  if (options.env) {
    config.input.plugins.unshift(replace({
      'process.env.NODE_ENV': JSON.stringify(options.env),
    }));
  }

  if (options.transpile) {
    config.input.plugins.push(buble({
      transforms: {
        templateString: false,
        forOf: false,
      },
    }));
  }

  return config;
}
