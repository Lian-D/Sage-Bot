/**
* @Author Lian Duan, Chris Wang
* @params string message
* @returns returns image objs that are to be turned into a meme
*/
module.exports = {
    response: function(message){
        switch (message){
            case "dab": 
                setResponse("", "./resources/memes/dab2.png");
                break;
            
            case "kaj": 
                setResponse("Kaj...", "./resources/memes/kaj.gif");
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