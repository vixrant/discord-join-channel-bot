const CK = require('chalk');
const { isDevelopment } = require('../config');

///////////////////////
// Utility functions //
///////////////////////

/**
 * @param {String} msg
 */
const utLog = (msg) => console.log(CK.magentaBright(msg));

/**
 * @param {String} msg
 */
const utInfo = (msg) => console.info(CK.cyan(msg));

/**
 * @param {String} msg
 */
const utWarn = (msg) => console.warn(CK.yellow(msg));

/**
 * @param {String} msg
 */
const utError = (msg) => console.error(CK.redBright(msg));

////////////
// Logger //
////////////

const logger = {
  log: (msg) => isDevelopment && utLog(`# ${msg}`),
  info: (msg) => isDevelopment && utInfo(`ℹ ${msg}`),
  warn: (msg) => isDevelopment && utWarn(`⚠ ${msg}`),
  error: (msg) => isDevelopment && utError(`⧳ ${msg}`),

  priority: {
    log: utLog,
    info: utInfo,
    warn: utWarn,
    error: utError,
  },
};

module.exports = logger;
