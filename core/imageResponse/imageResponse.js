/**
* @Author Lian Duan, Chris Wang
* @params string message
* @returns returns image objs that are to be turned into a meme
*/
module.exports = {
    keywords: ["dab", "kaj", "epic", "our lord and savior", "minion"],
    response: function(message){
        message.channel.send("I'm looking for image");

        if (message.content == "dab"){
            message.channel.send("", { files: ["./core/imageResponse/resources/memes/dab2.png"]});
        }
        else if (message.content == "our lord and savior"){
            message.channel.send("", { files: ["./core/imageResponse/resources/memes/lord.png"]});
        }
        else if (message.content == "kaj"){
            message.channel.send("", { files: ["./core/imageResponse/resources/memes/tenor.gif"]});
        }
        else if (message.content == "epic"){
            message.channel.send("Le epic win", { files: ["./core/imageResponse/resources/memes/epic.gif"]});
        }


    }
}

function sendMinion(url){
    var randomIndex = (Math.floor(Math.random() * 8));
}