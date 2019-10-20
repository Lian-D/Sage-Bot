module.exports = {
    response: function(bot, message){
        //Responses
        var garfResponse = require('./commands/garf.js');
        var imageResponse = require('./imageResponse/imageResponse.js');
        var stringResponse = require('./commands/stringResponse.js');
        var stockResponse = require('./stocks/stockFetcher.js');
        var wikiResponse = require('./wikipedia/wikipedia.js');

        if (garfResponse.keywords.includes(message.content.toLowerCase()) || message.content.toLowerCase().includes("garf")){
            garfResponse.response(message);
        }
        else if (imageResponse.keywords.includes(message.content.toLowerCase())){
            imageResponse.response(message);
        }
        else if (stringResponse.keywords.includes(message.content.toLowerCase()) || message.content.toLowerCase().includes("cs")){
           stringResponse.response(message);
        }
        else if (message.content.includes(stockResponse.keywords[0])){
            var suffix = message.content.replace('stock ','');
            stockResponse.response(message,suffix);
        }
        else if (message.content.toLowerCase().includes(wikiResponse.keywords[0]) || message.content.toLowerCase().includes(wikiResponse.keywords[1])){
            var query = message.content.replace (wikiResponse.keywords[0],"");
            query = content.replace (wikiResponse.keywords[1],"");
            wikiResponse.response(message, query);
        }
    }
};
