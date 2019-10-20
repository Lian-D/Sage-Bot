const Discord = require('discord.js');
const client = new Discord.Client();
const responsesHandler = require('./core/responseHandler.js');

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setPresence({ game: { name: 'undergoing testing4', type: 0 } });
});

 
client.on('message', message => {
    //Ignore itself and other bots
    if(message.author.bot) return;

    message.channel.send("hi");
    responsesHandler.response(client,message);
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
