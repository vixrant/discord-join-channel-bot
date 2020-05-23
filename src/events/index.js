const { EventEmitter } = require('events');
const eventRegexMap = require('./regex-map');
const logger = require('../helpers/logger');

//////////////////
// Event Stream //
//////////////////

class DiscordIntentEmitter extends EventEmitter {
  /**
   * @param {import('discord.js').Message} message
   */
  evaluateMessage(message) {
    const { content } = message;

    for (const event in eventRegexMap) {
      const regex = eventRegexMap[event];

      const match = regex.exec(content);
      if (match) {
        logger.info(`Message '${content}' matched ${event}`);

        this.emit(event, message, match);
        return;
      }
    }

    logger.info(`No event matched for '${content}'`);
  }
}

////////////
// Export //
////////////

module.exports = new DiscordIntentEmitter();
