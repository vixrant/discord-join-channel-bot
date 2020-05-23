const { User } = require('../../db');
const logger = require('../../helpers/logger');

///////////////////////
// Utility functions //
///////////////////////

/**
 * @param {import('discord.js').User} user
 */
async function findOrCreateUser(user) {
  const {
    id: discordId,
    username: discordName,
  } = user;

  // -- Try to find
  const doc = await User.findOne({
    discordId,
  });

  // -- Create if not exist
  if (!doc) {
    const newUser = new User({
      discordId,
      discordName,
    });
    const newDoc = await newUser.save();

    return newDoc;
  }

  return doc;
}

//////////////////////
// Service function //
//////////////////////

/**
 * @argument {import('discord.js').Message} message
 * @argument {RegExpExecArray} match
 */
async function logJoinGroup(message, match) {
  const { author } = message;
  const doc = await findOrCreateUser(author);

  const channelName = match[1];

  // --- Update mongodb user

  await doc.updateOne({
    $addToSet: {
      groups: channelName,
    },
  });

  logger.log(`User doc ${doc.id} updated with ${channelName}`);
}

module.exports = logJoinGroup;
