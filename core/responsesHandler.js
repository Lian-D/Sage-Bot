const Discord = require('discord.js');
const Garf = require('./core/commands/garf.js');
const ImageResponse = require('./core/commands/imageResponses.js');
const stringResponse = require('./core/commands/stringResponses.js');

module.exports = {
    response: function(message){
        if (message.content = "Hi"){
            message.channel.send("yes");
        }
        else {
            message.channel.send("oof");
        }
    }
};
