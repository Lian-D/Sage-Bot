module.exports = {
    keywords: ["who is ", "what is "],
    response: function(message, search) {
        var Wiki = require('wikijs');

		var query = search;
		if(!query) {
			return;
        }
        
		new Wiki().search(query,1).then(function(data) {
			new Wiki().page(data.results[0]).then(function(page) {
				page.summary().then(function(summary) {
					var sumText = summary.toString().split('\n');
					var continuation = function() {
						var paragraph = sumText.shift();
						if(paragraph){
							message.channel.send(paragraph,continuation);
						}
					};
					continuation();
				});
			});
		},function(err){
			message.channel.send(err);
		});
	}
};