const mongoose = require('mongoose');

////////////
// Schema //
////////////

const UserSchema = new mongoose.Schema({
  discordId: {
    type: String,
    required: true,
  },
  discordName: String,
  groups: [String],
});

////////////
// Export //
////////////

const User = mongoose.model('User', UserSchema);

module.exports = User;
