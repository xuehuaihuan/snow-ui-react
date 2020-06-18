const path = require('path')
const buble = require('@rollup/plugin-buble')
// const flow = require('rollup-plugin-flow-no-whitespace')
const {babel} = require('@rollup/plugin-babel')
const cjs = require('@rollup/plugin-commonjs')
const {nodeResolve} = require('@rollup/plugin-node-resolve');
const replace = require('@rollup/plugin-replace')
const version = process.env.VERSION || require('../package.json').version
const banner =
`/*!
  * xue-ui-react v${version}
  * (c) ${new Date().getFullYear()} Huaihuan Xue
  * @license MIT
  */`

const resolve = _path => path.resolve(__dirname, '../', _path)

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
    // transpile: false,
  },
  {
    file: resolve('dist/xue-ui-react.esm.browser.min.js'),
    format: 'es',
    env: 'production',
    // transpile: false,
  }
].map(genConfig)

function genConfig (options) {
  let external = ['@babel/runtime', 'react', 'styled-components', 'polished', 'prop-types']

  if (options.format === 'es' || options.format === 'cjs') {
    external.shift()
  }

  const config = {
    input: {
      input: resolve('src/index.js'),
      plugins: [
        // flow(),
        babel({
          presets: ['@babel/preset-react'],
          // plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-runtime'],
          // babelHelpers: 'runtime',
          plugins: ['@babel/plugin-proposal-class-properties'],
          babelHelpers: 'bundled',
        }),
        cjs(),
        nodeResolve(),
        // replace({
        //   __VERSION__: version
        // }),
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
        'prop-types': 'PropTypes',
        'styled-components': 'styled',
      }
    },
  }

  if (options.env) {
    config.input.plugins.unshift(replace({
      'process.env.NODE_ENV': JSON.stringify(options.env)
    }))
  }

  if (options.transpile) {
    config.input.plugins.push(buble({
      transforms: {
        templateString: false,
        forOf: false,
      },
      // transforms: {
      //   dangerousTaggedTemplateString: true,
      //   dangerousForOf: true,
      // },
    }))
  }

  return config
}
