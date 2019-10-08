const Discord = require('discord.js');
const responses = require('./commands/responses.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setPresence({ game: { name: 'Vetoing powers', type: 0 } });
});

 
client.on('message', message => {
    if (message.content == "dab"){
        message.channel.send(" ", { files: ["./resources/dab2.png"] });
    }
    if (message.content == "our lord and savior"){
        message.channel.send(" ", { files: ["./resources/lord.png"] });
    }
    var response = responses.response(message.content);
    if (response != null){
        message.channel.send(response);
    }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
