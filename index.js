const { token, prefix } = require("./config");
const { Client } = require("discord.js");
const client = new Client({
    disableMentions: "everyone"
});
client.once("ready", () => {
    console.log(`${client.user.tag} is now online and ready.`)
});
client.on("message", (message) => {
    if (message.content.toLowerCase().startsWith(`${prefix} ping`)) {
        return message.channel.send(`\`${client.ws.ping}\``)
    }
});
client.login(token);