const e = require('./events/constants');
const s = require('./services');

module.exports = {
  [e.EVENT_HELP]: s.helpMessage,
  [e.EVENT_JOIN_GROUP]: s.joinGroup,
  [e.EVENT_JOIN_GROUP_SUCCESS]: s.logJoinGroup,
};
