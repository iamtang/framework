const delegate = require('delegates');

const context = {};

module.exports = context;


delegate(context, 'request')
  .access('query')