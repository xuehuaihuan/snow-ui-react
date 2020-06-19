const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const terser = require('terser');
const rollup = require('rollup');
const config = require('./config');

if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

build(config);

function build (items) {
  let built = 0;
  const total = items.length;
  const next = () => {
    buildEntry(items[built])
      .then(() => {
        built++;
        if (built < total) {
          next();
        }
      })
      .catch(logError);
  };

  next();
}

function buildEntry ({ input, output, external }) {
  const { file, banner } = output;
  const isProd = /min\.js$/.test(file);
  return rollup
    .rollup(input, external)
    .then(bundle => bundle.generate(output))
    .then(bundle => {
      const code = bundle.output[0].code;
      if (isProd) {
        const minified =
          (banner ? banner + '\n' : '') +
          terser.minify(code, {
            toplevel: true,
            output: {
              ascii_only: true,
            },
            compress: {
              pure_funcs: ['makeMap'],
            },
          }).code;
        return write(file, minified, true);
      } else {
        return write(file, code);
      }
    });
}

function write (dest, code, zip) {
  return new Promise((resolve, reject) => {
    function report (extra) {
      console.log(
        blue(path.relative(process.cwd(), dest)) +
          ' ' +
          getSize(code) +
          (extra || ''),
      );
      resolve();
    }

    fs.writeFile(dest, code, err => {
      if (err) return reject(err);
      if (zip) {
        zlib.gzip(code, (err, zipped) => {
          if (err) return reject(err);
          report(' (gzipped: ' + getSize(zipped) + ')');
        });
      } else {
        report();
      }
    });
  });
}

function getSize (code) {
  return (code.length / 1024).toFixed(2) + 'kb';
}

function logError (e) {
  console.log(e);
}

function blue (str) {
  return '\x1b[1m\x1b[34m' + str + '\x1b[39m\x1b[22m';
}
