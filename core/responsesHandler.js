module.exports = {
    response: function(bot, message){
        //Responses
        const garfResponse = require('./core/commands/garf.js');
        const imageResponse = require('./core/commands/imageResponse.js');
        const stringResponse = require('./core/commands/stringResponse.js');

        message.channel.send("hi2");
    }
};
