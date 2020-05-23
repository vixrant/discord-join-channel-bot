/*
 * Abstraction over logging framework
 */

const logger = {
  log: (msg) => console.log(`*> LOG: ${msg}`),
  info: (msg) => console.info(`*> INFO: ${msg}`),
  warn: (msg) => console.warn(`*> WARN: ${msg}`),
  error: (msg) => console.error(`*> ERROR: ${msg}`),

  priority: {
    log: (msg) => console.log(`>> LOG: ${msg}`),
    info: (msg) => console.info(`>> INFO: ${msg}`),
    warn: (msg) => console.warn(`>> WARN: ${msg}`),
    error: (msg) => console.error(`>> ERROR: ${msg}`),
  },
};

module.exports = logger;
