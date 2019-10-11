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
    if (message.content == "kaj"){
        message.channel.send(" ", { files: ["./resources/tenor.gif"] });
    }
    if (message.content == "epic"){
        message.channel.send("Le epic win", { files: ["./resources/based.gif"] });
    }
    if (message.content == "gondola"){
        var randomNumber2 = (Math.floor(Math.random() * 2) + 1);
        if (randomNumber2 == 1){
            message.channel.send("Enjoy the ride https://gondola.stravers.net/random-raw", { files: ["./resources/gondola.webm"] });
        }
        else {
            message.channel.send("Enjoy the ride https://gondola.stravers.net/random-raw", { files: ["./resources/gondola2.webm"] });
        }
    }
    
    var response = responses.response(message.content);
    if (response != null){
        message.channel.send(response);
    }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
