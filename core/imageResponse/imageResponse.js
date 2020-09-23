/**
* @Author Lian Duan, Chris Wang
* @params string message
*/
module.exports = {
    keywords: ["dab", "kaj", "epic", "our lord and savior", "minion", "festive"],
    response: function(message){
        console.log("Image Response For "+message.member.user.tag);
        if (message.content == "dab"){
            message.channel.send("", { files: ["./core/imageResponse/resources/memes/dab2.png"]});
        }
        else if (message.content == "our lord and savior"){
            message.channel.send("", { files: ["./core/imageResponse/resources/memes/lord.png"]});
        }
        else if (message.content == "kaj"){
            message.channel.send("", { files: ["./core/imageResponse/resources/memes/kaj.gif"]});
        }
        else if (message.content == "epic"){
            message.channel.send("**Le epic win**", { files: ["./core/imageResponse/resources/memes/epic.gif"]});
        }
        else if (message.content.includes ("minion")){
            var randomIndex = (Math.floor(Math.random() * 17));
            message.channel.send("**GOD I LOVE MINIONS**", { files: ["./core/imageResponse/resources/minion/minion"+randomIndex+".png"]});
        }
    }
}
