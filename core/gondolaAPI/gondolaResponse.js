module.exports = {
    keywords: ["gondola "],
    response: function(message){
        var http = require('follow-redirects').http;
        
        http.get('http://bit.ly/900913', function (res) {
            res.on('data', function (chunk) {
             console.log(chunk);
             message.channel.send(chunk);
            });
        }).on('error', function (err) {
        console.error(err);
        message.channel.send(err);
        });    
    }
}