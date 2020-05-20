const dotenv = require('dotenv');
const bot = require('./src/bot');

///////////////////////
// CONFIGURE PROCESS //
///////////////////////

dotenv.config();

async function main() {
  await bot.login(process.env.TOKEN);
}

///////////////////
// START THE BOT //
///////////////////

main();
