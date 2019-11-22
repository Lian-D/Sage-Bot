/**
* @Author Lian Duan
* @params string message
* @returns a generated garfielf meme
*/
module.exports = {
    keywords: ["roll"],
    response: function(message){
        if (message == this.keywords[0]+" D20"){
            var randomIndex1 = (Math.floor(Math.random() * 20));
            message.reply(randomIndex1);

        }
    }
}