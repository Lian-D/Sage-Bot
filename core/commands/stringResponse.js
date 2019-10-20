module.exports = {
    keywords: ["cs", "keikaku", "benis"],
    response: function(message){
        if (message.content.toLowerCase().includes("cs")){
            message.channel.send("cs?");
        }  
        else if (message.content.toLowerCase().includes("keikaku")){
            message.channel.send("Translator's Note Keikaku means plan");
        }    
        else if (message.content == "benis"){
            message.channel.send("IN BAGINA :DDDDD");
        }
        else if (message.content.toLowerCase.includes("karen")){
            message.channel.send("LET ME SPEAK TO YOUR MANAGER!!1!");
        }   
    }
};