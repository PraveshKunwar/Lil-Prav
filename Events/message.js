module.exports = (bot, message) => {
  const prefix = "v!";
  if (message.author.bot || !message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const cmd = bot.commands.get(command);
  if (!cmd) return;
  cmd.run(bot, message, args);
};
