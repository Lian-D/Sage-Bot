const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    response: function(bot, message){
        message.send("hi2");
    }
};