const { MessageEmbed } = require("discord.js");
const i18n = require("../util/i18n");

module.exports = {
  name: "D4",
  aliases: ["d4"],
  description: "dado sexo",
  execute(message) {
    let d20 = Math.floor(Math.random() * (4 - 1 + 1) + 1);
    let mensaje = d20.toString();
    if (d20 == 4) {
      mensaje += ', QUE PRO!'
    } else if (d20 = 3) {
      mensaje += ', Nice Nice!'
    }
    else if (d20 >= 2) {
      mensaje += ', meh...'
    }
    else {
      mensaje += ', dormiste zzZzzZz'
    }
    return message.channel.send(mensaje).catch(console.error)
  }
};