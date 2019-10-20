module.exports = {
    response: function(bot, message){
        //Responses
        var garfResponse = require('./core/commands/garf.js');
        var imageResponse = require('./core/commands/imageResponse.js');
        var stringResponse = require('./core/commands/stringResponse.js');

        message.channel.send("hi2");
    }
};
