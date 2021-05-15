 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Chingle Bot Yardım Menüsü`, client.user.avatarURL())
.setColor('#ffd100')
.setDescription(` Chingle Bot  botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Genel Komutlar__`,` \`${prefix}genel\``,true)
.addField(`__Mod Komutları__`,` \`${prefix}moderasyon\` `,true)
.addField(`__Guard Komutları__`,` \`${prefix}guard\`  `,true)
.addField(`__Prefix Değiştir__`,` \`${prefix}prefix\` `,true)
.addField(`__Bilgilendirme__`,` \`${prefix}davet\` | Chingle'yi Sunucunuza Davet Edersiniz\n \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n  \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
  .setImage(``)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "yardım",
  aliases: ["help"]
}