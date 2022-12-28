const { MessageEmbed } = require("discord.js");
const i18n = require("../util/i18n");

module.exports = {
  name: "oca",
  description: "mmmmmmm oca?",
  execute(message) {
    let oca = new MessageEmbed()
      .setImage("https://static.wikia.nocookie.net/reinoanimalia/images/4/43/Pato_domestico_1.png/revision/latest/scale-to-width-down/350?cb=20140620194610&path-prefix=es");

    return message.channel.send(oca).catch(console.error)
  }
};
