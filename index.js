const mongoose = require('mongoose');
const bot = require('./src/bot');
const web = require('./src/web');
const config = require('./src/config');
const logger = require('./src/helpers/logger');

async function main() {
  // --- DB connect
  await mongoose.connect(config.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  logger.priority.info('👾 Mongoose Connected');

  // --- Discord connect
  await bot.login(config.DISCORD_TOKEN);
  logger.priority.info('🤖 Bot ready');

  // --- HTTP connect
  web.listen(config.PORT, () => {
    logger.priority.info('🔹 HTTP Server Active');
  });
}

///////////////////
// Start the bot //
///////////////////

main().catch(logger.error);
