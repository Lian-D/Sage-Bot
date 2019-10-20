const Discord = require('discord.js');
const client;

module.exports = {
    response: function(bot, message){
        client = bot;
        message.send("hi2");
    }
};