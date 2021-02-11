const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (message.author.id != "405469930260135936") return message.reply('Bunu Sadece Sahibim Kullanabilir');
      
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0x0000bf)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('Uyarı', 'Bu  komutu özel mesajlarda kullanamazsın.');
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild;
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply('Ne göndericem onuda yazı ver.');
  if (message.mentions.users.size < 1) return message.reply('Kime Mesaj atacam onuda yazı ver.').catch(console.error);
  message.delete();
  message.reply('Mesajını Gönderdim. <a:geantes_btik_1:777571729127243826> ')
  const embed = new Discord.RichEmbed()
  .setColor('0000bf')
  .setTitle(`**Bir Mesajın Var**`)
  .setTimestamp()
  .setDescription(reason);
  return user.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dm','ömesaj','dmmesaj'],
  permlevel: 4
};

exports.help = {
  name: 'mesajat',
  description: 'Belirtilen kullanıcıya özelden mesaj yollar.',
  usage: 'mesajat'
};