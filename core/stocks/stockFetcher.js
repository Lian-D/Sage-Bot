module.exports = {
    keywords: ["getstock "],
    response: function(message, suffix){
        var yahooFinance = require('yahoo-finance');
        yahooFinance.quote({
            symbol: suffix,
            modules: [ 'price', 'summaryDetail' ],
          }, function (error, snapshot) {
              if(error){
                    message.channel.send("couldn't get stock: " + error);
              } else {
                    // message.channel.send(JSON.stringify(snapshot));
                    message.channel.send("**"+snapshot.price.longName+"** - "+snapshot.price.symbol
                      + "\n**Current Market Price:** $"+snapshot.price.regularMarketPrice+" "+snapshot.summaryDetai.currency
                      + "\n**Fifty Day Avg:** $"+snapshot.summaryDetai.fiftyDayAverage+" "+snapshot.summaryDetai.currency
                      + "\n**Two Hundred Day Avg:** $"+snapshot.summaryDetai.twoHundredDayAverage+" "+snapshot.summaryDetai.currency);
              }
          });
    }
}