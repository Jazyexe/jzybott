const Discord = require("discord.js");

exports.run = async (client, msg, args) => {
  let lozbey = msg.mentions.users.first();

  const { loadImage } = require("canvas");
  const { Canvas } = require("canvas-constructor");
  let avatar = await loadImage(lozbey.displayAvatarURL);
  let lozarkaplan = await loadImage("https://up.picr.de/28025194xo.gif");
  let lozarkaplan2 = await loadImage("https://i.hizliresim.com/cqcBa2.png");
  let canvaser = new Canvas(500, 500)
    .addBeveledImage(avatar, 0, 0, 500, 500, 0)
    .addBeveledImage(lozarkaplan, 0, 330, 500, 50, 0)
    .addBeveledImage(lozarkaplan2, 0, 200, 150, 144, 0)

    .setColor("#fff")
    .setTextFont("40px Impact")
    .addText(`${lozbey.username}`, 50, 367)
    .toBuffer();
  let attach = new Discord.Attachment().setAttachment(canvaser, "saril.png");

  const exampleEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .attachFile(attach)
    .setImage("attachment://saril.png");

  msg.channel.send(exampleEmbed);
  msg.channel.send(`${lozbey} Size Sarılan Birisi Var Adı ${msg.author}.`);
  return;
};

exports.conf = {
  enabled: true,
  aliases: ["sarıl"],
  permLevel: 0
};

exports.help = {
  name: "sarıl",
  description: "İstediğiniz Kişiye Sarılırsınız.",
  usage: "sarıl"
};
