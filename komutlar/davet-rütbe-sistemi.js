const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if(!args[0]) {
      const errEmbed = new Discord.MessageEmbed()
        .setColor ( 0xFF0000 )
        .setAuthor( 'HATA' )
        .setTitle (':exclamation: Usage: **.dm (link)**' );
      message.channel.send( errEmbed )
      return;
    }
    var sayings = [
      "https://is.gd/g746Cz",
			"https://is.gd/IYWtZ5",
      "https://is.gd/vwa9Ak",
      "https://is.gd/0smRt1",
      "https://is.gd/diGskv",
      "https://mega.nz/folder/r4M3DI5Q#JSDRQ3azfEyxjsLGLXfmRA",
      "https://is.gd/yOzvHG",
      "https://is.gd/rZR2At",
      "https://is.gd/uwUvvd",
      ""
    ];
		var result = Math.floor ( ( Math.random() * sayings.length ) + 0 );
    const ballEmb = new Discord.MessageEmbed()
      .setColor ( 0x00FFFF )
      .setAuthor ( '8ball', '' )
      .addField ( args, sayings[result] );
		message.member ( ballEmb )
}
exports.config = {
name : "dm",
aliases : []
}