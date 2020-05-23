const dotenv = require('dotenv');
const mongoose = require('mongoose');
const logger = require('./src/helpers/logger');
const bot = require('./src/bot');
const web = require('./src/web');

///////////////////////
// Configure Process //
///////////////////////

dotenv.config();

async function main() {
  await mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  logger.priority.info('👾 Mongoose Connected');

  web.listen(process.env.PORT, () => {
    logger.priority.info('🔹 HTTP Server Active');
  });

  await bot.login(process.env.TOKEN);
  logger.priority.info('🤖 Bot ready');
}

///////////////////
// Start the bot //
///////////////////

main().catch(logger.error);
