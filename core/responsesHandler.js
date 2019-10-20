module.exports = {
    response: function(bot, message){
        //Responses
        var garfResponse = require('./commands/garf.js');
        var imageResponse = require('./commands/imageResponse.js');
        var stringResponse = require('./commands/stringResponse.js');

        message.channel.send("hi2");
    }
};
