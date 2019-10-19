
function determineCommand(message){
    if (message.content == "dab"){
        message.channel.send(" ", { files: ["./resources/dab2.png"] });
    }
    else if (message.content == "our lord and savior"){
        message.channel.send(" ", { files: ["./resources/lord.png"] });
    }
    else if (message.content == "kaj"){
        message.channel.send(" ", { files: ["./resources/tenor.gif"] });
    }
    else if (message.content == "epic"){
        message.channel.send("Le epic win", { files: ["./resources/based.gif"] });
    }
    else if (message.content == "Fortnite"){
        message.channel.send(" ", { files: ["./resources/27lrwk.jpg"] });
    }
    else if (message.content == "walter"){
        message.channel.send("libtard destroyed", { files: ["./resources/libtard.png"] });
    }
    else if (message.content == "Fortnite"){
        message.channel.send(" ", { files: ["./resources/27lrwk.jpg"] });
    }
   else if (message.content == "gondola"){
        var randomNumber2 = (Math.floor(Math.random() * 2) + 1);
       
        if (randomNumber2 == 1){
            message.channel.send("Enjoy the ride https://gondola.stravers.net/random-raw", { files: ["./resources/gondola.webm"] });
        }
        else {
            message.channel.send("Enjoy the ride https://gondola.stravers.net/random-raw", { files: ["./resources/gondola2.webm"] });
        }
    }
    else if (message.content == "minion"){
        var randomNumber3 = (Math.floor(Math.random() * 9) + 1);
        
        if (randomNumber3 == 1){
            message.channel.send("GOD I FUCKING LOVE MINIONS", { files: ["./resources/BLARTMINION.png"] });
        }
        if (randomNumber3 == 2){
            message.channel.send("GOD I FUCKING LOVE MINIONS", { files: ["./resources/MINION LOVER1.png"] });
        }
        if (randomNumber3 == 3){
            message.channel.send("GOD I FUCKING LOVE MINIONS", { files: ["./resources/MINION LOVER2.png"] });
        }        
        if (randomNumber3 == 4){
            message.channel.send("GOD I FUCKING LOVE MINIONS", { files: ["./resources/MINION LOVER3.png"] });
        }
        if (randomNumber3 == 5){
            message.channel.send("GOD I FUCKING LOVE MINIONS", { files: ["./resources/MINION SNIPER.png"] });
        }
        if (randomNumber3 == 6){
            message.channel.send("GOD I FUCKING LOVE MINIONS", { files: ["./resources/RED MINION.png"] });
        }
        if (randomNumber3 == 7){
            message.channel.send("GOD I FUCKING LOVE MINIONS", { files: ["./resources/SCHINDLERS MINION.png"] });
        }
        if (randomNumber3 == 8){
            message.channel.send("GOD I FUCKING LOVE MINIONS", { files: ["./resources/minion_guitar.png"] });
        }
        if (randomNumber3 == 9){
            message.channel.send("GOD I FUCKING LOVE MINIONS", { files: ["./resources/whydoeshewearthemask.png"] });
        }        
        
    }
}