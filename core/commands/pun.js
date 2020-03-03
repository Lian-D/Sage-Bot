/**
* @Author Kaj Guy the Awesome Guy
* format
* pun build up, the pun
* make sure to put a "," at the end of the list containing the puns.
* This is because Math.random() goes from 0 to 1, not including 1. 
*/
module.exports = {
    keywords: ["pun","dad"],
    response: function (message) {
        var thePuns = [
            "Did you hear why Medusa broke up with her boyfriend?",                         "He was always stoned",
            "Did you hear about the napping car?",                                          "I guess it was tired",
            "Did you hear about the housekeeper who was arrested?",                         "She was laundering money",
            "Did you hear about the gymnast who filled out paperwork?",                     "She had a perfect form",
            "Did you hear about the football player who got arrested?",                     "He really needs to work on his defense",
            "Did you hear about the frog who double parked?",                               "He got toad",
            "Did you hear about the car that climbs mountains?",                            "It took the highway",
            "Did you hear about the French cheese factory that exploded?",                  "There was nothing left but de brie",
            "Did you hear about the ATM that was addicted to money?",                       "It suffered from Withdrawals",

            "Why did the banana leave the party?",                                          "He had to split",
            "Why couldn't the banana find a date?",                                         "No one found him apeeling",
            "Why did the bull fail his drivers test?",                                      "He kept laying on the horn",
            "Why did the robber give back the monkeys wallet?",                             "He wasn't in it for chimp change",
            "Why did the gorilla go searching for buried treasure?",                        "He wanted his silverback",
            "Why is it hard to win an argument with a Roman?",                              "If your not forum you're against'em",
            "Why was the Liberty tree cut down?",                                           "It commited high treeson",
            "Why was the basketball player bad at fishing?",                                "He got nothing but net",
            "Why was the poker player arrested?",                                           "He started dealing",

            "What do you call an ancient Egyptian?",                                        "An old giza",
            "What do you call a Roman leader putting on clothes?",                          "Caesar dressing",
            "What did the policeman say to the musical note?",                              "You're under a rest",
            "What do you call a bald prisoner?",                                            "A smooth criminal",
            "What do snowmen do in their spare time?",                                      "Just chill",
            "What did the Three Little Pigs say when they quit their job?",                 "This is the last straw",
            "What did the tomatoes say to the cucumbers?",                                  "Lettuce introduce ourselves",
            "What do you call a pile of cats?",                                             "A meow-tan",
            "What does an egg experience when its asked what came first?",                  "An eggsistential crisis",
            "No",                                                                           "REEEEEEEEEEEEEEEEEEEEEEEEE",
            
            "I was wondering why the ball was getting bigger,",                              "Then it hit me",
            "I have a few jokes about unemployed people,",                                   "But none of them work",
            
            "Will glass coffins ever be a success?",                                         "Remains to be seen",

            "Imagine",                                                                       "Painting a leather sofa",
            "Why did the chicken cross the road",                                            "Look up the Lavon Affair and the USS Liberty Incident, this is not a joke",
            "N",                                                                             "ice",         
        ];


        var randomIndex = (Math.floor(Math.random() * thePuns.length/2))*2;

        var response = "**" + thePuns[randomIndex] + "**\n||" +thePuns[randomIndex+1] + "||";

        message.channel.send(response);
    }
}
