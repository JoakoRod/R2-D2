const { MessageEmbed } = require("discord.js");
const i18n = require("../util/i18n");

module.exports = {
  name: "D12",
  aliases: ["d12"],
  description: "dado sexo",
  execute(message) {
    let d20 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    let mensaje = d20.toString();
    if (d20 == 12) {
      mensaje += ', QUE PRO!'
    } else if (d20 >= 8) {
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