/**
* @Author Lian Duan, Chris Wang
* @params string message
* @returns returns image objs that are to be turned into a meme
*/
module.exports = {
    keywords: ["dab", "kaj", "epic", "our lord and savior", "minion"],
    response: function(message){
        
        function sendimage(text, url){
            message.channel.send(text, { files: [url] });
        }

        function sendMinion(url){
            var randomIndex = (Math.floor(Math.random() * 8));
        }

        if (message.content == "dab"){
           sendimage(" ", "./resources/dab2.png");
        }
        else if (message.content == "our lord and savior"){
            sendimage("RUSSEL", "./resources/lord.png");
        }
        else if (message.content == "kaj"){
            sendimage(" ", "./resources/kaj.gif");
        }
        else if (message.content == "epic"){
            sendimage("Le epic win", "./resources/based.gif");
        }
    }
}