const Discord = require('discord.js');
module.exports = {
    response: function(message){
        if (message.toLowerCase().includes("cs")){
            return  "ℂ𝕊?";
        }
        else if (message.toLowerCase().includes("garf"))
        {
            var randomNumber = (Math.floor(Math.random() * 10) + 1);
            
            if (randomNumber == 1){
                return "Get up, Gayfred. I won't harm a man who is defenceless https://www.youtube.com/watch?v=OGbhJjXl9Rk";
            }
            else if (randomNumber == 2){
                return "It cannot be! Newspper sword https://www.youtube.com/watch?v=2vWFEylvELI";
            }
            else if (randomNumber == 3){
                return "Not everyoen is evil, Naermo. Some are just misguide. https://www.youtube.com/watch?v=_4e3wV2b3P0";
            }
            else if (randomNumber == 4){
                return "You think you can beat me, Marmalade? I'll cut you to rubble! https://www.youtube.com/watch?v=dQPvhRlcmzs";
            }
            else if (randomNumber == 5){
                return "Lasagna breath https://www.youtube.com/watch?v=yfN-Zhyw-Bg";
            }
            else if (randomNumber == 6){
                return "Well, Miracleduck, it seems you lost https://www.youtube.com/watch?v=cf3QUyEUI-s";
            }
            else if (randomNumber == 7){
                return "The Sunday funnies belong to no man https://www.youtube.com/watch?v=gRVLGbqsKAw";
            }       
            else if (randomNumber == 8){
                return "I cannot allow you to clam another life, Gayfrindle https://www.youtube.com/watch?v=s9rwn0oGIj8";
            }
            else if (randomNumber == 9){
                return "Then give me all you'vee got John Aldrin, cause I won't stop https://www.youtube.com/watch?v=ss6hwhyFwdM";
            }
            else if (randomNumber == 10){
                return "It's over, Garrfellini, I won't waste Antober Seventh https://www.youtube.com/watch?v=qJTF0ogoHpQ";
            }
        }
        
        else if (message.toLowerCase().includes("borf")){
            return "https://www.youtube.com/watch?v=X25P5gsB-2I";
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
        // else if ( message.toLowerCase().includes("fuck") || message.toLowerCase().includes("shit") || message.toLowerCase().includes("cunt") || message.toLowerCase().includes("bitch")){
        //     return "SWEARING OF ANY KIND IS WRONGTHINK AND PROHIBITED. REPEATED OFFENCES WILL RESULT IN FORCED ESTROGEN INTAKE";
        // }
        
        // else if ( message.toLowerCase().includes("frick") || message.toLowerCase().includes("shiet") || message.toLowerCase().includes("damn") || message.toLowerCase().includes("fick") || message.toLowerCase().includes("biatch") || message.toLowerCase().includes("shet") || message.toLowerCase().includes("heck")){
        //     return "YOU ARE SPARED THIS TIME, CITIZEN.";
        // }
        
        else if (message.toLowerCase().includes("nigger")){
            return "HOL UP";
        }
        
        else if (message.toLowerCase().includes("jew")){
            return "OY VEY";
        }
        
        else if (message == "no u"){
            return "GOTTEM HAHAHAHAHAHAHAHAHHAAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHAHAHAHAHAHHAHAHAHAHAHAHHAHAHAH HILARIOUS HAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHAHAHHAHAHAHAHAHAHAHHAHAHAAHHAHAHAHAHAHHAHAHAHAHHA";
        }
        
        else if (message.toLowerCase().includes("420")){
            return "DUDE WEED LMAO";
        }
        
        else if (message == "!help"){
            return "Help yourself, fag";
        }
        
        else if (message == "benis"){
            return "in bagina :DDDDD";
        }
        
        else if (message.toLowerCase() == "chris is a faggot"){
            return "No, YOU'RE a faggot";
        }
        
        else if (message.toLowerCase().includes("donate")){
            return "Help my boy out https://www.gofundme.com/f/help-my-man-wonchan-get-an-ethernet-cable";
        }
            
        else {
            return null;
        }
    }
};
