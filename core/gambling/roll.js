/**
* @Author Lian Duan
* @params string message
* @returns roll the dice!
*/
module.exports = {
    keywords: ["roll"],
    response: function(message){
        if (message.content === this.keywords[0]+" D20"){
            var randomIndex1 = (Math.floor(Math.random() * 20));
            message.channel.reply(randomIndex1);
        }
    }
}