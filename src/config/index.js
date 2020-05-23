const dotenv = require('dotenv');

///////////////////////
// Configure Process //
///////////////////////

dotenv.config();

////////////////////////
// Extract properties //
////////////////////////

const {
  NODE_ENV,
  PORT,
  MONGODB_URL,
  TOKEN,
} = process.env;

///////////////////////
// Derive properties //
///////////////////////

// --- For testing if development

const ENV = {
  DEV: ['dev', 'development'],
  PROD: ['prod', 'production'],
  TEST: ['test', 'testing'],
};
const isDevelopment = ENV.DEV.includes(NODE_ENV);

////////////////
// Export map //
////////////////

module.exports = {
  NODE_ENV,
  PORT,
  MONGODB_URL,
  DISCORD_TOKEN: TOKEN,

  isDevelopment,
};
