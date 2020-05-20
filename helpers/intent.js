const _ = require('lodash');

const { JOIN_GROUP_REGEX, joinGroup } = require('../actions/join-group');
const { HELP_REGEX, help } = require('../actions/help');

const mapRegexAction = [
  [JOIN_GROUP_REGEX, joinGroup],
  [HELP_REGEX, help],
];

/**
 * @argument {import('discord.js').Message} message
 */
module.exports = async function matchIntent(message) {
  const { content } = message;

  console.log(content);

  let intentFound = false;
  _.forEach(mapRegexAction, (t) => {
    // Check if intent is already found
    if (intentFound) {
      console.log('tf');
      return;
    }

    // Match regex
    const [r, action] = t;
    const match = r.exec(content);
    console.log(r);
    console.log(match);
    if (!match) {
      return;
    }

    console.log('matched');

    // Execute action
    action(message, match);
    intentFound = true;
  });
};
