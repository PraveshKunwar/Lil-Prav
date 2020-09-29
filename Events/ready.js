const { GridFSBucket } = require("mongodb");

module.exports = (bot) => {
  /* const MongoClient = require("mongodb").MongoClient;
  const { url } = require("../Config/config");
  MongoClient.connect(
    url,
    { useUnifiedTopology: true, useNewUrlParser: true },
    (err, db) => {
      if (err) {
        console.error(err);
      }
      console.log(`Connected to Database.`);
    }
  );*/
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
