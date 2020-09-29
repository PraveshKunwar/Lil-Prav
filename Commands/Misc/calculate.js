/*
exports.run = (bot, message, args) => {
  const { evaluate } = require("mathjs");
  const Discord = require("discord.js");
  const { Err } = require("../../Config/embeds");
  let calcRequest = args;

  const CalcEmbed = new Discord.MessageEmbed()

    .setColor("#0cc412")
    .setTimestamp()
    .setAuthor(`Requested by ${message.author.tag}`, message.author.avatarURL())
    .setTitle(`Calculated **${calcRequest}**`)
    .setDescription(
      `\`\`\`js\nOutput: \n${parseFloat(evaluate(calcRequest)).toFixed(
        2
      )}\`\`\``
    );
  message.channel.send(CalcEmbed);
  if (!calcRequest) {
    Err(
      "**Please make sure to enter a valid request for the bot to calculate.**"
    );
  }
  console.log(args);
};
*/

//Will work on this later.
