const { MessageEmbed } = require("discord.js");
const i18n = require("../util/i18n");

module.exports = {
  name: "D20",
  aliases: ["d", "d20"],
  description: "dado sexo",
  execute(message) {
    let d20 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
    let mensaje = d20.toString();
    if (d20 == 20) {
      mensaje += ', QUE PRO!'
    } else if (d20 >= 15) {
      mensaje += ', Nice Nice!'
    }
    else if (d20 >= 10) {
      mensaje += ', meh...'
    }
    else if (d20 >= 5) {
      mensaje += ', a casa'
    }
    else if (d20 >= 1) {
      mensaje += ', te vas domado'
    }
    else {
      mensaje += ', dormiste zzZzzZz'
    }
    return message.channel.send(mensaje).catch(console.error)
  }
};