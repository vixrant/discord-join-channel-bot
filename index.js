const dotenv = require('dotenv');
const logger = require('./src/helpers/logger');
const bot = require('./src/bot');
const web = require('./src/web');

///////////////////////
// CONFIGURE PROCESS //
///////////////////////

dotenv.config();

async function main() {
  await bot.login(process.env.TOKEN);

  web.listen(process.env.PORT, () => {
    logger.info('👾 HTTP Server Active');
  });
}

///////////////////
// START THE BOT //
///////////////////

main();
