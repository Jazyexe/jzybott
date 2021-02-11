const Discord = require("discord.js");
exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()
    .setColor(11027200)

    /*YAZAR*/
    .setAuthor("JazyBot")

    /*BAŞLIK*/
    .setTitle("Doğruluk Mu? Cesaret Mi?")

    /*AÇIKLAMA*/
    .setDescription(
      "Hey Sen!, DC Oynuyoruz Bize Katılmak İstersen Odalara Geçebilirsin!"
    )

    /*AKTIF RESMI*/
    .setImage(
      "https://cdn.discordapp.com/attachments/783965156714872872/790347167784370181/giphy.gif"
    )

    /*YAPIMCI YAZISI*/
    .setFooter("Made By Jazy");

  message.channel.send({ embed });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["dc","dogruluk"],
  permLevel: 1,
  kategori: "genel"
};

exports.help = {
  name: "dc",
  description: "Kişileri Dc Oynamaya Davet Edersiniz!",
  usage: "!aktif"
};
