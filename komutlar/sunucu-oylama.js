const Discord = require('discord.js');

 exports.run = (client, message, args) => {
 if(!message.member.permissions.has('ADMINISTRATOR')) return message.reply('Bu komutu kullanmak için yetkin yetersiz')
   message.delete();

   let question = args.join(' ');

   let user = message.author.username

   if (!question) return message.channel.send(
   
     new Discord.MessageEmbed()
	 .setColor("YELLOW")

     .addField(`Yazı Yazman Gerek.`)).then(m => m.delete(5000));

     console.log("oylama komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")
     message.channel.send(

       new Discord.MessageEmbed()

       .setColor("YELLOW")
       .setThumbnail(client.user.avatarURL())
       .setTimestamp()
       .setFooter('Chingle', client.user.avatarURL())

       .addField(`**Chingle  | Oylama**`, `**${question}**`)).then(function(message) {

         message.react('✅');

         message.react('❌');
       });
     };

exports.config = {
name: "oylama",
aliases: ["oylama-yap"]
};

