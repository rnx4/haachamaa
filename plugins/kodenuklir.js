let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`"${pickRandom(global.nuklir)}"`, m)
}
handler.command = /^(kodenuklir)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
handler.limit = 177013

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.nuklir = [
'177013',
'177013',
'177013',
'177013',
'177013',
'177013',
'177013',
'177013',
'177013',
'HORNY STONK',
'177013',
'177013',
'177013',
'177013',
'177013',
'177013',
'177013',
'177013',
'177013',
'177013',
'NOT STONK',
'177013',
'177013',
'177013',
'177013',
'177013',
'177013',
'177013',
'177013',
'177013',
'177013',
'177013',
'177013',
'177013',
'177013',
'TOBAT WOEE',
'177013',
'177013',
'177013',
'177013',
'177013',
'177013',
'177013',
'177013',
'177013',
'177013',
'HUU SANGEAN',
'177013',
'177013',
'177013',
'177013',
'177013',
'177013',
'177013',
'177013',
'177013',
'177013',
'177013',
'177013',
'BONK',
'177013',
'177013',
'177013',
'177013',
'177013',
'177013',
'177013',
'177013',
'177013',
'177013',
'177013',
'177013',
]
