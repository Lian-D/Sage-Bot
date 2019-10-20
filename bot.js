const Discord = require('discord.js');
// const RS = require('./core/responsesHandler.js');

const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setPresence({ game: { name: 'undergoing testing', type: 0 } });
});

 
client.on('message', message => {
    message.channel.send("hi");
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
