exports.HELP_REGEX = /help/i;

/**
 * @argument {import('discord.js').Message} message
 */
exports.help = async (message) => {
  const { channel } = message;

  channel.send("Hi! I'm Unibot, Unicode Learning's personal assistant.");
  channel.send("If you wish to join a study group, mention me and say 'join <channel-name>'");
};
