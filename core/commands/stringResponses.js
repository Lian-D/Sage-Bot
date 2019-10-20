module.exports = {
    response: function(message){
        var responseObj = {
            responseType: "string",
            context: null,
        };
        function setResponseObj(msg){
            responseObj.context = msg;
        };

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