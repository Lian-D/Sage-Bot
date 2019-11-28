module.exports = {
    response: function(bot, message){
        //Responses
        var garfResponse = require('./commands/garf.js');
        var imageResponse = require('./imageResponse/imageResponse.js');
        var stringResponse = require('./commands/stringResponse.js');
        var stockResponse = require('./stocks/stockFetcher.js');
<<<<<<< Updated upstream
=======
        // var gondola = require('./gondolaAPI/gondolaResponse.js');
>>>>>>> Stashed changes
        // var gamble = require('./gambling/roll.js');
        // var wikiResponse = require('./wikipedia/wikipedia.js');
	var punResponse = require('./commands/pun,js');

        if (garfResponse.keywords.includes(message.content.toLowerCase()) || cycleThroughKeywords(message.content, garfResponse.keywords)){
            garfResponse.response(message);
        }
        else if (imageResponse.keywords.includes(message.content.toLowerCase()) || cycleThroughKeywords(message.content, imageResponse.keywords)){
            imageResponse.response(message);
        }
        else if (stringResponse.keywords.includes(message.content.toLowerCase()) || message.content.toLowerCase().includes("cs") || cycleThroughKeywords(message.content, imageResponse.keywords)){
           stringResponse.response(message);
        }
        else if (message.content.includes(stockResponse.keywords[0])){
            var suffix = message.content.replace('getstock ','');
            stockResponse.response(message,suffix);
        }
<<<<<<< Updated upstream
	else if (stringResponse.keywords.includes(message.content.toLowerCase().includes("pun")) {
            punResponse.response(message);
        }
=======
        // else if (message.content.includes(gondola.keywords[0])){
        //     gondola.response(message);
        // }
>>>>>>> Stashed changes
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

