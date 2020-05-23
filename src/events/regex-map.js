const e = require('./constants');

module.exports = {
  [e.EVENT_HELP]: /help/i,
  [e.EVENT_JOIN_GROUP]: /join ([\w-]+)/i,
};
