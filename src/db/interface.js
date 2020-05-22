const { User } = require('./models');

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
    newUser.save();

    return newUser;
  }

  return doc;
}

/////////////////////////
// Interface functions //
///////////////////////

/**
 * @param {import('discord.js').User} user
 * @param {import('discord.js').TextChannel} channel
 */
exports.addUserToGroup = async (user, channel) => {
  const doc = await findOrCreateUser(user);

  const channelName = channel.name;

  await doc.updateOne({
    $push: {
      groups: channelName,
    },
  });
};
