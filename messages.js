const Discord = require("discord.js");
const moment = require('./utiles/moments.js');



const snekfetch = require('snekfetch');
const url_bot = "https://dev-time.eu/discordbot";
	function messages(message,prefix,client){
	if(message.content.startsWith(prefix + "add-message")){
		
	let args = message.content.split(" ").slice(1);
	let message_publish = args.join(" ")
	
	
	var someDate = new Date();
			var duration = 10; //In minutes
		var dans_10mins02 = someDate.setTime(someDate.getTime() +  (duration * 60000));
		var dans_10mins = dans_10mins02/1000;
		var date_actuel02 = someDate.setTime(someDate.getTime());
		var date_actuel = date_actuel02/1000;
		
		
	
		if(!db.get("messages").find({message: message_publish}).value()){
		moment.locale('fr');
		db.get("messages").push({message: message_publish, time: 10, time_acutel: dans_10mins}).write();
		var LastReputationAPI2 = "Disponible " + moment.unix(dans_10mins, 'YYYY-MM-DD h:mm:ss').fromNow();
		message.reply('Message ' + LastReputationAPI2);
	}else{
		message.reply('Oups ! Le message "' + message_publish + '" est déjà dans la base de donnée');
	}
	
	}
	
	
	if(message.content == prefix +"list"){
		var messages_alls = db.get("messages").filter({time: moment().locale('fr').format('mm') + ":" + moment().locale('fr').format('ss')}).find('message').value()
		var tout_les_messages = Object.values(messages_alls);		
		var xp_embed = new Discord.RichEmbed()
		
			.addField("Voici tout les messages pour "+ moment().locale('fr').format('LTS'), `**${tout_les_messages[0]}**`)
			
		message.channel.send({embed: xp_embed});
	}  
	}
module.exports = messages
