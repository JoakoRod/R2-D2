const { MessageEmbed } = require("discord.js");
const i18n = require("../util/i18n");

module.exports = {
  name: "D100",
  aliases: ["d100"],
  description: "dado sexo",
  execute(message) {
    let d20 = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    let mensaje = d20.toString();
    if (d20 == 100) {
      mensaje += ', QUE PRO!'
    } else if (d20 >= 70) {
      mensaje += ', Nice Nice!'
    }
    else if (d20 >= 50) {
      mensaje += ', tranqui!'
    }
    else if (d20 >= 30) {
      mensaje += ', mmmmmm'
    }
    else if (d20 >= 20) {
      mensaje += ', te vas domado'
    }
    else if (d20 > 1) {
      mensaje += ', dormiste zzZzzZz'
    }
    else {
      mensaje += ', JAJAJAJAJJAJAJ'
    }
    return message.channel.send(mensaje).catch(console.error)
  }
};