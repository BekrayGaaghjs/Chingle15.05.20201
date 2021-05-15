 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async(client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`AloneRP Komutları`, client.user.avatarURL())
.setColor('#ffd100')
.setDescription(`<a:hypesquad1:763723597863714857> DLive botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__YAKINDA__`,`⚙ Bu Komut Çok Yakında Eklenecektir.`)
.addField(`__Bilgilendirme__`,`<a:hypesquad1:763723597863714857> \`${prefix}davet\` | DLive'yi Sunucunuza Davet Edersiniz\n <a:hypesquad1:763723597863714857> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:hypesquad1:763723597863714857> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
  .setImage(``)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "guard",
  aliases: []
}

