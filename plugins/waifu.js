let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
	await m.reply('©ハチャマ')
  let res = await fetch('https://api.waifu.pics/sfw/waifu')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'Huuu istrinya kartun', m)
}

handler.command = /^(waifu)$/i
handler.limit = 3
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
module.exports = handler
