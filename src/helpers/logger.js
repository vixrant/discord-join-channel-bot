/*
 * Abstraction over logging framework
 */

exports.log = (msg) => console.log(`>> LOG: ${msg}`);
exports.info = (msg) => console.info(`>> INFO: ${msg}`);
exports.warn = (msg) => console.warn(`>> WARN: ${msg}`);
exports.error = (msg) => console.error(`>> ERROR: ${msg}`);
