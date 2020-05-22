const client = require('./client');
const matchIntent = require('./helpers/intent');
const logger = require('./helpers/logger');

/////////////////
// Add actions //
/////////////////

client.on('message', async (message) => {
  const { mentions, author, channel } = message;

  if (!mentions.has(client.user)) {
    return;
  }

  logger.info(`Unibot mentioned by ${author.username} in ${channel.name}`);
  matchIntent(message);
});

////////////
// Export //
////////////

module.exports = client;
