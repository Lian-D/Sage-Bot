/**
* @Author Lian Duan, Chris Wang
* @params string message
* @returns returns image objs that are to be turned into a meme
*/
module.exports = {
    keywords: ["dab", "kaj", "epic", "our lord and savior"],
    response: function(message){
        
        function sendimage(text, url){
            message.channel.send(text, { files: [url] })
        }

        switch (message.content.toLowerCase()){
            case "dab": 
                sendimage("","./resources/memes/dab2.png");
                break;
            
            case "kaj": 
                sendimage("","./resources/memes/kaj.png");
                break;
            
            case "epic": 
                setResponse("LE EPIC WIN", "./resources/memes/epic.gif");
                break;
            
            case "our lord and savior": 
                setResponse("RUSSEL", "./resources/memes/lord.png");
                break;
            
            default:
                break;
        }
    }
}