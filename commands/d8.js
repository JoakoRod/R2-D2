const { MessageEmbed } = require("discord.js");
const i18n = require("../util/i18n");

module.exports = {
  name: "D8",
  aliases: ["d8"],
  description: "dado sexo",
  execute(message) {
    let d20 = Math.floor(Math.random() * (8 - 1 + 1) + 1);
    let mensaje = d20.toString();
    if (d20 == 8) {
      mensaje += ', QUE PRO!'
    } else if (d20 >= 6) {
      mensaje += ', Nice Nice!'
    }
    else if (d20 >= 4) {
      mensaje += ', meh...'
    }
    else if (d20 >= 2) {
      mensaje += ', a casa'
    } else {
      mensaje += ', dormiste zzZzzZz'
    }
    return message.channel.send(mensaje).catch(console.error)
  }
};