exports.JOIN_GROUP_REGEX = /join ([\w-]+)/i;

/**
 * @argument {import('discord.js').Message} message
 * @argument {RegExpExecArray} match
 */
exports.joinGroup = async (message, match) => {
  const { channel, author, guild } = message;

  // --- Exract group name

  const groupName = match[1]; // channel name comes after join

  if (!groupName) {
    channel.send(`${author}, I couldn't understand your group name ${groupName} (:c) `);
    return;
  }

  // --- Find channel

  const groupChannel = await guild.channels.cache.find((c) => c.name === groupName);

  if (!groupChannel) {
    channel.send(`${author}, I couldn't find channel ${groupName} (:c) `);
    return;
  }

  // --- Add user to channel

  await groupChannel.updateOverwrite(author, {
    SEND_MESSAGES: true,
  });

  channel.send(`Hey ${author}, you've been added to ${groupChannel}. Do enjoy studying and interact with others!`);
};
