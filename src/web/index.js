const express = require('express');

///////////////
// CONFIGURE //
///////////////

const app = express();

////////////
// ROUTES //
////////////

app.get('', (req, res) => {
  res.send('🤖 Bot online');
});

////////////
// EXPORT //
////////////

module.exports = app;
