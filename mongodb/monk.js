// const environment = process.env.NODE_ENV || 'development';
const config = require('../monkfile.js')
module.exports = require('monk')(config.connection);
