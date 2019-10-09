const Discord = require('discord.js');
module.exports = {
    response: function(message){
        if (message.toLowerCase().includes("cs")){
            return  "ℂ𝕊?";
        }
        else if (message.toLowerCase().includes("garf"))
        {
            var randomNumber = (Math.floor(Math.random() * 9) + 1);
            
            if (randomNumber == 1){
                return "https://www.youtube.com/watch?v=OGbhJjXl9Rk";
            }
            else if (randomNumber == 2){
                return "https://www.youtube.com/watch?v=2vWFEylvELI";
            }
            else if (randomNumber == 3){
                return "https://www.youtube.com/watch?v=_4e3wV2b3P0";
            }
            else if (randomNumber == 4){
                return "https://www.youtube.com/watch?v=dQPvhRlcmzs";
            }
            else if (randomNumber == 5){
                return "https://www.youtube.com/watch?v=yfN-Zhyw-Bg";
            }
            else if (randomNumber == 6){
                return "https://www.youtube.com/watch?v=cf3QUyEUI-s";
            }
            else if (randomNumber == 7){
                return "https://www.youtube.com/watch?v=gRVLGbqsKAw";
            }       
            else if (randomNumber == 8){
                return "https://www.youtube.com/watch?v=s9rwn0oGIj8";
            }
            else if (randomNumber == 9){
                return "https://www.youtube.com/watch?v=ss6hwhyFwdM";
            }
        }
        
        else if (message.toLowerCase().includes("trump")){
            return  "Orange Man Bad";
        }
        
        else if (message == "!gibs"){
            return "me my chicken tendies";
        }
        
        else if (message == "!gibs tendies"){
            return "I sharted and farted everywhere"; 
        }
        
        else if (message == "!gibs milkies"){
            return "m-mommy";
        }
        
        else if (message == "status"){
            return (((Math.ceil(Math.random()*10) % 2)) == 1);
        }
        
        else if (message.toLowerCase().includes("keikaku")){
            return "Translator's Note: Keikaku means plan";
            
        }
        else if ( message.toLowerCase().includes("fuck") || message.toLowerCase().includes("shit") || message.toLowerCase().includes("cunt")){
            return "SWEARING OF ANY KIND IS WRONGTHINK AND PROHIBITED. REPEATED OFFENCES WILL RESULT IN FORCED ESTROGEN INTAKE";
        }
        
        else if (message.toLowerCase().includes("nigger")){
            return "HOL UP";
        }
        
        else if (message == "kaj"){
            return "https://tenor.com/7bCg.gif";
        }
        
        else {
            return null;
        }
    }
};
