module.exports = {
    response: function(bot, message){
        //Responses
        var garfResponse = require('./commands/garf.js');
        var imageResponse = require('./imageResponse/imageResponse.js');
        var stringResponse = require('./commands/stringResponse.js');
        var stockResponse = require('./stocks/stockFetcher.js');
        // var gamble = require('./gambling/roll.js');
        var wikiResponse = require('./wikipedia/wikipedia.js');

        if (garfResponse.keywords.includes(message.content.toLowerCase()) || cycleThroughKeywords(message.content, garfResponse)){
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
    }
};

//Function for enabling the case inwhich the message contains a specific string
function cycleThroughKeywords(message, arr){
	for (var i = 0; i < arr.length; i++){
    if (message.toLowerCase().includes(arr[i])){
  	    return true;
		}
	}
  return false;
}

