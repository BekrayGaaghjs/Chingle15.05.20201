const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if(!args[0]) {
      const errEmbed = new Discord.MessageEmbed()
        .setColor ( 0xFF0000 )
        .setAuthor( 'HATA' )
        .setTitle (':exclamation: Usage: **.8ball (Soru)**' );
      message.channel.send( errEmbed )
      return;
    }
    var sayings = [
      "Kesinlikle",
			"Aynen Öyle",
			"Şüphesiz",
			"Aynen öyle",
			"Ona Güvenebilirsin",
			"Gördüğüm kadarıyla,Evet",
			"Öyle gibi",
			"İyi Görünüyor",
			"Evet",
			"Kanıtlar Eveti Gösteriyor",
			"Bir daha dene",
			"Sonra Tekrar Sor",
			"Sana söylemesem daha iyi olur",
			"Şu an tahmin edemiyorum",
			"Konstantre olup bir daha sor",
			"Sakın ona güvenme",
			"Cevabım hayır",
			"Kaynaklarım Hayır diyor",
			"Kötü görünüyor",
			"Çok Şüpheli"
    ];
		var result = Math.floor ( ( Math.random() * sayings.length ) + 0 );
    const ballEmb = new Discord.MessageEmbed()
      .setColor ( 0x00FFFF )
      .setAuthor ( '8ball', 'https://findicons.com/files/icons/1700/2d/512/8_ball.png' )
      .addField ( args, sayings[result] );
		message.channel.send ( ballEmb )
}
exports.config = {
name : "8ball",
aliases : []
}