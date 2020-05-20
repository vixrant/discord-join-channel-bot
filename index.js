const bot = require('./bot');
const config = require('./config.json');

async function main() {
  await bot.login(config.token);
}

///////////////////
// START THE BOT //
///////////////////

main();
