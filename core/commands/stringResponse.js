/** @Author Chris Wang, refactored by Lian Duan
* @params string message
* @returns a message
*/
module.exports = {
    keywords: ["cs", "keikaku", "benis", "test", "karen"],
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
        else if (message.content.toLowerCase.includes("test")){
            message.channel.send("this was supposed to be a meme");     
        }
    }
};
