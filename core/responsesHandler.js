const Discord = require('discord.js');
const client = null;

module.exports = {
    response: function(bot, message){
        client = bot;

        if (message.content = "Hi"){
            client.message.channel.send("yes");
        }
        else {
            client.message.channel.send("oof");
        }
    }
};
