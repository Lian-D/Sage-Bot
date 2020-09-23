/**
 * @Author Chris Wang, refactored by Lian Duan
 * @params string message
 * @returns a generated garfielf meme
 */
module.exports = {
    keywords: ["garf"],
    response: function (message) {
        console.log("garf for "+message.member.user.tag);
        /// Some of these are possibly invalid, manually checked
        var garfComments = ["Get up, Gayfred. I won't fite a man who is defenceless",	///Valid
            "It cannot be! Newspper sword",							///Valid
            "Not everyoen is evil, Naermo. Some are just misguide",				///Valid
            "You think you can beat me, Marmalade? I'll cut you to rubble!",		///Valid
            "Lasagna breath",								///Valid
            "Well, Miracleduck, it seems you lost",						///Valid
            "The Sunday funnies belong to no man",						///Valid
            "I cannot allow you to clam another life, Gafrindle",				///Valid
            "Then give me all you'vee got John Aldrin, cause I won't stop",			///Valid
            "It's over, Garrfellini, I wont waste Antober Seventh",
            "Time to inhale lagnar",							///Valid
            "Please help this isn't a joke I'm being held to make these stupid requests please they have my wife and kids call the pol-",
            "Marbledune, Dilbart, Chalrie Bowrn... Rest in peece",				///Valid
            "Don't start with your fairly tales about stars, Mallomar",			///Valid
            "You cant kill me, Jom. What would our mother think?",				///Valid
            "It must be my brithday then, becausse now I get to kill all of you",		///Valid
            "You think you can keep getting away with your'e crimes, Graffles?",		///Valid
            "Rest in peace, Mortim3r",							///Valid
            "Time to dia, old friend",							///Valid
            "And then Jown killed everyone, including Shorler's panois",			///Valid
            "Have you come to take my Gradiffle parts?",					///Valid
            "Rest in peproni, Naromal. You're finally in Hel wereh you belgon"		///Valid
        ];
        var garfLinks = ["https://www.youtube.com/watch?v=OGbhJjXl9Rk",
            "https://www.youtube.com/watch?v=2vWFEylvELI",
            "https://www.youtube.com/watch?v=_4e3wV2b3P0",
            "https://www.youtube.com/watch?v=dQPvhRlcmzs",
            "https://www.youtube.com/watch?v=yfN-Zhyw-Bg",
            "https://www.youtube.com/watch?v=cf3QUyEUI-s",
            "https://www.youtube.com/watch?v=gRVLGbqsKAw",
            "https://www.youtube.com/watch?v=s9rwn0oGIj8",
            "https://www.youtube.com/watch?v=ss6hwhyFwdM",
            "https://www.youtube.com/watch?v=qJTF0ogoHpQ",
            "https://www.youtube.com/watch?v=vO8Sj7xv9FE",
            "https://www.youtube.com/watch?v=jzuscWiRYww",
            "https://www.youtube.com/watch?v=wzOPIiGNvVo",
            "https://www.youtube.com/watch?v=D_MubBVkTkU",
            "https://www.youtube.com/watch?v=YoUFyQYpv8M",
            "https://www.youtube.com/watch?v=5fUjGTt1G2U",
            "https://www.youtube.com/watch?v=kTfqtFgmysU",
            "https://www.youtube.com/watch?v=gvcSCIRDA7k",
            "https://www.youtube.com/watch?v=Qt7yZFuA_q0",
            "https://www.youtube.com/watch?v=C108ZJdteT4",
            "https://www.youtube.com/watch?v=5cWll6WIiEg",
            "https://www.youtube.com/watch?v=uIsfC02e1mg",
            "https://www.youtube.com/watch?v=cGzIvwupWXQ",
            "https://www.youtube.com/watch?v=8mfD5H9CSPI",
            "https://www.youtube.com/watch?v=Oj5IasqX8Ww",
            "https://www.youtube.com/watch?v=8v-9q6SwaUo",
            "https://www.youtube.com/watch?v=RrtYUU3K69k",
            "https://www.youtube.com/watch?v=qZG4UpSa740",
            "https://www.youtube.com/watch?v=gW0Sw81Uu20",
            "https://www.youtube.com/watch?v=4yhWIhP2Q60",
            "https://www.youtube.com/watch?v=K0osM3ybWys",
            "https://www.youtube.com/watch?v=kBKkpLxDKQk",
            "https://www.youtube.com/watch?v=wwEgMGfOyqU",
            "https://www.youtube.com/watch?v=cE0iYqU8QgE",
            "https://www.youtube.com/watch?v=JQutV77KMm8",
            "https://youtu.be/d_6NPlsxzrE"
        ];
        var randomIndex1 = (Math.floor(Math.random() * garfLinks.length));
        var randomIndex2 = (Math.floor(Math.random() * garfComments.length));

        var response = "**" + garfComments[randomIndex2] + "**" + "\n" + garfLinks[randomIndex1];

        message.channel.send(response);
    }
}
