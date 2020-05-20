const joinGroupAction = require('../actions/join-group');
const helpAction = require('../actions/help');

const mapRegexAction = [
  joinGroupAction,
  helpAction,
];

/**
 * @argument {import('discord.js').Message} message
 */
module.exports = async function matchIntent(message) {
  const { content } = message;

  for (const t of mapRegexAction) {
    // Match regex
    const [r, action] = t;
    const match = r.exec(content);

    if (match) {
      action(message, match);
      break;
    }

  }
};
