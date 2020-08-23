module.exports = {
    keywords: ["getstock "],
    response: function(message, suffix){
        console.log("stocks for "+message.member.user.tag);
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
                      + "\n**Current Market Price:** $"+snapshot.price.regularMarketPrice+" "+snapshot.summaryDetail.currency
                      + "\n**Fifty Day Avg:** $"+snapshot.summaryDetail.fiftyDayAverage+" "+snapshot.summaryDetail.currency
                      + "\n**Two Hundred Day Avg:** $"+snapshot.summaryDetail.twoHundredDayAverage+" "+snapshot.summaryDetail.currency);
              }
          });
    }
}