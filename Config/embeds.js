const { MessageEmbed } = require("discord.js");

const Err = (errorMessage = String) => {
  const ErrorEmbed = new MessageEmbed()
    .setColor("#fc0303")
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setTimestamp()
    .setTitle("An Error was encountered.")
    .setDescription(errorMessage)
    .setFooter(`${bot.user.username} • Made By: PraveshK#4056`);
};

exports.Err = Err;
