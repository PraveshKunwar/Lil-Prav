const Discord = require("discord.js");
const bot = new Discord.Client({ disableEveryone: true });
const config = require("./Config/config");
const { readdir } = require("fs");

bot.commands = new Discord.Collection();

//cmd handler
readdir("./Commands/Moderation", (err, files) => {
  if (err) console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) {
      return;
    } else {
      let props = require(`./Commands/Moderation/${file}`);
      let cmdName = file.split(".")[0];
      console.log(`Loaded ${cmdName}!`);
      bot.commands.set(cmdName, props);
    }
  });
});

readdir("./Commands/Misc", (err, files) => {
  if (err) console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) {
      return;
    } else {
      let props = require(`./Commands/Misc/${file}`);
      let cmdName = file.split(".")[0];
      console.log(`Loaded ${cmdName}!`);
      bot.commands.set(cmdName, props);
    }
  });
});

//evt handler
readdir("./Events", (err, files) => {
  if (err) console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) {
      return;
    } else {
      let props = require(`./Events/${file}`);
      let evtName = file.split(".")[0];
      bot.on(evtName, props.bind(null, bot));
    }
  });
});

if(!config.token) return console.log("No token to log in with.");
bot.login(config.token);
