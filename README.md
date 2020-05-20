# 🤖 Discord Channel Permissioning Bot
###### [WIP]

Miss the "Join Channel" button of Slack?

Want to restrict users from messaging on any channel?

Want to keep track of which user is part of which channel?

> Then this bot is for you!

All you need to do is set `@everyone`'s `send message` permission to false for the entire server or the channels you wish to restrict.
The users will then have to mention this bot and say '@botname join \[channel-name\]' to get the permission to join the channel.

### WIP

The project is still Work-In-Progress. It's made for our own Discord server, so you will have to fork and change the messages
around the project. I will work on a more generalised message template system later.

### Setup

1. `npm i` or `yarn`
2. `npm start` or `yarn start` to start the server
3. `npm run dev` or `yarn dev` to start nodemon for development

### Bot Token File

Create an env config file called `.env` and add a `TOKEN=` field. I assume you can google how to set-up a discord bot.
