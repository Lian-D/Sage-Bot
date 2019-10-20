module.exports = {
    keywords: ["stock"],
    response: function(message, suffix){
        var yahooFinance = require('yahoo-finance');
        yahooFinance.snapshot({
            symbol: suffix,
            fields: ['s', 'n', 'd1', 'l1', 'y', 'r'],
          }, function (error, snapshot) {
              if(error){
                    message.channel.send("couldn't get stock: " + error);
              } else {
                    message.channel.send(JSON.stringify(snapshot));
                    message.channel.send(snapshot.name
                      + "\nprice: $" + snapshot.lastTradePriceOnly);
              }
          });
    }
}