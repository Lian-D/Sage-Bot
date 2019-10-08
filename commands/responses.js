const Discord = require('discord.js');
module.exports = {
    response: function(message){
        if (message.toLowerCase().includes("cs")){
            return  "ℂ𝕊?";
        }
        else if (message.toLowerCase().includes("garf")){
            var randomNumber = Math.random();
            if ((Math.floor(Math.random() * 3) + 1) == 1){
                return "https://www.youtube.com/watch?v=OGbhJjXl9Rk";
            }
            else if (randomNumber == 2){
                return "https://www.youtube.com/watch?v=2vWFEylvELI";
            }
            else {
                return "https://www.youtube.com/watch?v=_4e3wV2b3P0";
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
            return "SWEARING OF ANY KIND IS WRONGTHINK AND PROHIBITED. REPEATED OFFENCES WILL RESULT IN FORCED ESTROGEN INTAKE AND RECTAL INSERTION OF SILICONE OBJECTS ON GOOBYLIFES STREAMS";
        }
        else{
            return null;
        }
    }
};
