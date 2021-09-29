let handler = async (m) => {
  
let teks = `
╭── *〘 EPIC RPG 〙*
│
│
│ 》》 _.adventure_
│ 》》 _.berpetualang_
│ 》》 _.mulung_
│ 》》 _.work_
│ 》》 _.feed_  [ pet ]
│ 》》 _.inv_
│ 》》 _.inventory_
│ 》》 _.open_  [ crate ]
│ 》》 _.perlengkapan_
│ 》》 _.shop_  [ buy/sell  item ]
│ 》》 _.toko_  [ buy/sell  item ]
│ 》》 _.use_  [ item  jumlah ]
│ 》》 _.heal_
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
