const { MessageEmbed } = require("discord.js");
const i18n = require("../util/i18n");

module.exports = {
  name: "D10",
  aliases: [, "d10"],
  description: "dado sexo",
  execute(message) {
    let d20 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    let mensaje = d20.toString();
    if (d20 == 10) {
      mensaje += ', QUE PRO!'
    } else if (d20 >= 7) {
      mensaje += ', Nice Nice!'
    }
    else if (d20 >= 5) {
      mensaje += ', meh...'
    }
    else if (d20 >= 3) {
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