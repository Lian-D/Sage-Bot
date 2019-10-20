module.exports = {
    response: function(message){
        if (message.toLowerCase().includes("cs")){
            setResponseObj("CS?");
        }  
        else if (message.toLowerCase().includes("keikaku")){
            setResponseObj("Translator's Note Keikaku means plan");
        }    
        
        else if (message == "benis"){
            setResponseObj("IN BAGINA :DDDDD");
        }   
        else {
            return null;
        }
    }
};