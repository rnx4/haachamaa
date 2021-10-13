let handler  = async (m, { conn, usedPrefix }) => {
  
let teks = `
╭── *〘 EPIC RPG 〙*
│
│
│ 》》 _${usedPrefix}adventure_
│ 》》 _${usedPrefix}berpetualang_
│ 》》 _${usedPrefix}mulung_
│ 》》 _${usedPrefix}work_
│ 》》 _${usedPrefix}feed_  [ pet ]
│ 》》 _${usedPrefix}inv_
│ 》》 _${usedPrefix}inventory_
│ 》》 _${usedPrefix}open_  [ crate  jumlah ]
│ 》》 _${usedPrefix}perlengkapan_
│ 》》 _${usedPrefix}shop_  [ buy/sell  item ]
│ 》》 _${usedPrefix}toko_  [ buy/sell  item ]
│ 》》 _${usedPrefix}use_  [ potion  jumlah ]
│ 》》 _${usedPrefix}heal_
│ 》》 _${usedPrefix}tutorial_
╰─────────
`.trim()
  conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', 'Menu RPG', 'status@broadcast')
  }
handler.help = ['rpgmenu']
handler.tags = ['menutest']
handler.command = /^rpgmenu$/i
handler.register = false
handler.group = false
handler.private = false
handler.limit = false

module.exports = handler
