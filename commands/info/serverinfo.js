const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../../functions.js");

module.exports = {
    name: "serverinfo",
    aliases: ["server"],
    description: "Returns server info",
    run: (client, message, args) => {
        const member = getMember(message, args.join(" "));

        const joined = formatDate(member.joinedAt);

        const created = formatDate(message.guild.createdAt);
        
    let sicon = message.guild.iconURL
    let serverembed = new RichEmbed()
    .setDescription("Server Info")
    .setColor("3346FF")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount)

    return message.channel.send(serverembed);
  }
    }
