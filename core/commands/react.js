/** @Author  Lian Duan
 * @params string message
 * @returns a message
 */
module.exports = {
    keywords: ["poll:"],
    response: function (message) {
        if (message.content.toLowerCase().includes("poll:")) {
            console.log("reacting to "+message.member.user.tag)
            message.react("👍");
            message.react("👎");
            message.react("🤷");
        }
    }
};