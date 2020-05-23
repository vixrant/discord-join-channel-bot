const Discord = require('discord.js');

const intentStream = require('./events/stream');
const serviceMap = require('./service-map');
const logger = require('./helpers/logger');

///////////////////
// Define client //
///////////////////

const client = new Discord.Client();

//////////////////
// Add services //
//////////////////

for (const e in serviceMap) {
  intentStream.on(e, serviceMap[e]);
}

/////////////////////////////////
// Subscribe to discord events //
/////////////////////////////////

client.on('message', async (message) => {
  const { mentions, author, channel } = message;

  if (!mentions.has(client.user)) {
    return;
  }

  logger.log(`Unibot mentioned by ${author.username} in ${channel.name}`);

  intentStream.evaluateMessage(message);
});

////////////
// Export //
////////////

module.exports = client;
