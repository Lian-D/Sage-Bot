module.exports = {
    response: function(bot, message){
        //Responses
        var garfResponse = require('./commands/garf.js');
        var imageResponse = require('./imageResponse/imageResponse.js');
        var stringResponse = require('./commands/stringResponse.js');

        if (garfResponse.keywords.includes(message.content.toLowerCase()) || message.content.toLowerCase().includes("garf")){
            garfResponse.response(message);
        }
        // else if (imageResponse.keywords.includes(message.content.toLowerCase())){
        //     imageResponse.response(message);
        // }
    }
};
