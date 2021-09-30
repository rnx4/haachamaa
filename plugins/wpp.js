let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
await m.reply(global.wait)
let res = await fetch('https://raw.githubusercontent.com/unx21/ngetezz/main/src/data/tesstt.txt')
let txt = await res.text()

let arr = txt.split('\n')
let cita = arr[Math.floor(Math.random() * arr.length)]
conn.sendFile(m.chat, cita, '.png', '*©ChamaaChamaa*', m) 
}

handler.help = ['wpp']
handler.tags = ['PUNYA MASTER']
handler.command = /^wpp$/i
handler.limit = false
handler.owner = true
handler.register = true
module.exports = handler
//Made with 💙 by unx//



module.exports = handler
