const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
  const yardım = new Discord.RichEmbed()
.setColor('3066993')
.setTitle(`${client.user.username} - Komutlarım`)
.setDescription(`
**\`Komutlar\`**
» \`${prefix}8ball <soru>\`: **Sihirli 8ball sorularınızı Cevaplar**
» \`${prefix}aşk <kişi> \`: **İki Kullanıcı Arasındaki Aşkı Ölçer.**
» \`${prefix}csgo\`: **CS:GO kasa açma simülasyonu Oynarsınız**
» \`${prefix}dc \`: **Dc Oyunu Duyurusu Yaparsınız**
» \`${prefix}dm <kullanıcı> <mesaj>\`: **Kullanıcıya DM'den Mesaj Yollar**
» \`${prefix}mute <kullanıcı> <süre> <sebep>\`: **Kullanıcıyı Belirtilen Süre Boyunca Sohbet Kanalında Susturur**
» \`${prefix}sesli <kullanıcı> <süre> <sebep>\`: **Kullanıcıyı Belirtilen Süre Boyunca Sesli Kanalda Susturur**
» \`${prefix}sunucu \`: **Sunucunun istatistiklerini gösterir**
» \`${prefix}duyuru <mesaj>\`: **Hoş Bir Duyuru Yapmanızı Sağlar**
» \`${prefix}fakemesaj <kişi> <mesaj> \`: **Kişiyi Mesaj Atmış Gibi Gösterirsiniz**
» \`${prefix}haber\`: **Gündemdeki Haberleri Listeler**
» \`${prefix}i\`: **Botun İstatistiklerini Gösterir**
» \`${prefix}cm\`: **Kaç Cm Olduğunu Gösterir**
» \`${prefix}kafasınasık <kişi> \`: **Belirttiğiniz Kişinin Kafasına Sıkar**
» \`${prefix}kilitle <süre>\`: **belirttiğiniz Süre Kadar Kanalı Kilitler**
» \`${prefix}küfür <aktif/deaktif> \`: **Küfür Filtresini Açarsınız**
» \`${prefix}oylama\`: **Oylama Yaparsınız**
» \`${prefix}ping\`: **Botun pingini Gösterir**
» \`${prefix}reboot\`: **Botu Tekrardan Başlatır <Sahip Özel>**
» \`${prefix}rolver <kişi> <rol>\`: **Belirttiğiniz Kişiye Belirttiğiniz Rolü Verir**
» \`${prefix}saat\`: **Türkiye Saatini Gösterir**
» \`${prefix}sahip\`: **Botun Sahibini Gösterir**
» \`${prefix}sarıl <kişi>\`: **Belirttiğiniz Kişiye Sarılır**
» \`${prefix}temizle <miktar> \`: **Belirttiğiniz Miktar Kadar Mesaj Siler**

.setImage("https://cdn.discordapp.com/attachments/783965156714872872/790347167784370181/giphy.gif"`)

.setThumbnail(message.author.avatarURL({dynamic: true}))
.setTimestamp()
message.channel.send(yardım)
  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["help"], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'yardım kodu.',
  usage: 'yardım'
};