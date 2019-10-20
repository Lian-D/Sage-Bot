module.exports = {
    keywords: ["who is ", "what is "],
    response: function(message, search) {
        message.channel.send('looking up in wikipedia');
        var wiki = require('wikijs');
        var response = wiki.page(search.trim()).then(page => page.summary());
        message.channel.send(response);
    }
};