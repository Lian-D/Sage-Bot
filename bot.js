const Discord = require('discord.js');
const responses = require('./core/responsesHandler.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
<<<<<<< Updated upstream
    client.user.setPresence({ game: { name: 'Vetoing powers', type: 0 } });
=======
    client.user.setPresence({ game: { name: 'I\'m sorry Jon', type: 0 } });
>>>>>>> Stashed changes
});

 
client.on('message', message => {
<<<<<<< Updated upstream
    if (message.content == "dab"){
        message.channel.send(" ", { files: ["./resources/dab2.png"] });
    }
    if (message.content == "our lord and savior"){
        message.channel.send(" ", { files: ["./resources/lord.png"] });
    }
    if (message.content == "kaj"){
        message.channel.send(" ", { files: ["./resources/tenor.gif"] });
    }
=======
    //This is how responses are handled generally
>>>>>>> Stashed changes
    var response = responses.response(message.content);
    if (response != null){
        message.channel.send(response);
    }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
