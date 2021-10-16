let handler  = async (m, { conn, usedPrefix }) => {
  
let teks = `
╭═══ *〘 Tanpa Kategori 〙*
┊
║ ┅ ๑————————————๑
┊
║     Ⓛ  = limit
┊
║
┊ × _${usedPrefix}owner_
║ + _${usedPrefix}creator_
┊ ÷ _${usedPrefix}del_
║ = _${usedPrefix}delete_
┊ / _${usedPrefix}donasi_
║ ! _${usedPrefix}grouplist_
┊ # _${usedPrefix}bannedlist_
║ $ _${usedPrefix}bug_  [ laporan ]
┊ % _${usedPrefix}report_  [ laporan ]
║ : _${usedPrefix}rules_
┊ & _${usedPrefix}readmore_  [ teks|teks ] Ⓛ
║ \ _${usedPrefix}spoiler_  [ teks|teks ] Ⓛ
┊ - _${usedPrefix}repeat_  [ teks ] Ⓛ
║ > _${usedPrefix}premium_
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
