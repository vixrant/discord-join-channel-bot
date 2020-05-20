const Discord = require('discord.js');
const logger = require('../helpers/logger');

///////////////////
// Define client //
///////////////////

const client = new Discord.Client();

client.on('ready', () => {
  logger.info('🚀 Bot Ready');
});

////////////
// Export //
////////////

module.exports = client;
