const Discord = require('discord.js');
const RS = require('./core/responsesHandler.js');

const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setPresence({ game: { name: 'I\'m sorry Jon', type: 0 } });
});

 
client.on('message', message => {
    //This is how responses are handled generally
    RS.response(message);
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
