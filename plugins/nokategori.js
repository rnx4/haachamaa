let handler = async (m) => {
  
let teks = `
╭═══ *〘 Tanpa Kategori 〙*
┊
║ ┅ ๑————————————๑
┊
║     Ⓛ  = limit
┊
║
┊ × _.owner_
║ + _.creator_
┊ ÷ _.del_
║ = _.delete_
┊ / _.donasi_
║ ! _.grouplist_
┊ # _.bannedlist_
║ $ _.bug_  [ laporan ]
┊ % _.report_  [ laporan ]
║ : _.rules_
┊ & _.readmore_  [ teks|teks ] Ⓛ
║ \ _.spoiler_  [ teks|teks ] Ⓛ
┊ - _.repeat_  [ teks ] Ⓛ
║ > _.premium_
╰═ ┅ ═══════
`.trim()
    conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', 'Menu Tanpa Kategori', 'status@broadcast')
  }
handler.help = ['nocategori']
handler.tags = ['menutest']
handler.command = /^nocategori$/i
handler.register = false
handler.group = false
handler.private = false
handler.limit = false

module.exports = handler