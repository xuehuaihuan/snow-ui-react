const { input, output } = require('./rollup.config')[0];

module.exports = Object.assign({}, input, { output });
