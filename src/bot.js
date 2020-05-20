const client = require('./client');
const matchIntent = require('./helpers/intent');
const logger = require('./helpers/logger');

/////////////////
// Add actions //
/////////////////

client.on('message', async (message) => {
  const { mentions } = message;

  if (!mentions.has(client.user)) {
    return;
  }

  matchIntent(message);
});

////////////
// Export //
////////////

module.exports = client;
