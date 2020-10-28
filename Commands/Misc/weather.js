exports.run = (bot, message, args) => {
  const Discord = require("discord.js");
  const { Err } = require("../../Config/embeds");
  const config = require("../../Config/config");
  const fetch = require("node-fetch");

  const val = args[0];
  if (!val || typeof val !== String) {
    Err("__**Make sure the location is valid and that is a valid string!**__");
  }
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=d83b37c5a2c843aea8120446201609&q=${val}`
  )
    .then((res) => res.json())
    .then((data) => {
      const WeatherEmbed = new Discord.MessageEmbed()
        .setTitle("☀️ Weather! ❄️")
        .setColor("#0cc412")
        .setTimestamp()
        .setAuthor(
          `Requested by ${message.author.tag}`,
          message.author.avatarURL()
        )
        .setDescription(
          `\n\n**Weather Info:**
            Location Requested: ${data.location.name}
            Country: ${data.location.country}
          **Temperature:** Farenheit: ${data.current.temp_f}° | Celsius: ${data.current.temp_c}°\n\n
  
          Humidity: ${data.current.humidity}
          Wind Gust: MPH: ${data.current.gust_mph} | KPH: ${data.current.gust_kph}
       `
        )
        .setFooter("Lil Prav - PraveshK#4056", bot.user.displayAvatarURL());
      message.channel.send(WeatherEmbed);
    });
};
