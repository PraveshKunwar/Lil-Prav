module.exports = (bot) => {
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
};
