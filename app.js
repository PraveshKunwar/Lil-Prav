const Discord = require("discord.js");
const bot = new Discord.Client({ disableEveryone: true });
const config = require("./Config/config");

bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.tag}`);
  bot.user
    .setPresence({
      activity: {
        name: "To my owners instructions!",
        type: "LISTENING",
      },
      status: "dnd",
    })
    .catch(console.error());
});

bot.login(config.token);
