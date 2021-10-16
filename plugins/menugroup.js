let handler  = async (m, { conn, usedPrefix }) => {
  
let teks = `
╭── *〘 Menu Grup 〙*
│
│     Ⓐ  = Only admin
│
│
│ ➥ _${usedPrefix}absen_
│ ➥ _${usedPrefix}cekabsen_
│ ➥ _${usedPrefix}hapusabsen_  Ⓐ
│ ➥ _${usedPrefix}mulaiabsen_  [ teks ] Ⓐ
│ ➥ _${usedPrefix}enable_  [ option ] Ⓐ
│ ➥ _${usedPrefix}disable_  [ option ] Ⓐ
│ ➥ _${usedPrefix}group_  [ close ] Ⓐ
│ ➥ _${usedPrefix}group_  [ open ] Ⓐ
│ ➥ _${usedPrefix}groupinfo_
│ ➥ _${usedPrefix}htag_  [ jumlah  pesan ] Ⓐ
│ ➥ _${usedPrefix}linkgroup_
│ ➥ _${usedPrefix}listonline_
│ ➥ _${usedPrefix}here_
│ ➥ _${usedPrefix}pengumuman_  [ teks ] Ⓐ
│ ➥ _${usedPrefix}announce_  [ teks ] Ⓐ
│ ➥ _${usedPrefix}hidetag_  [ teks ] Ⓐ
│ ➥ _${usedPrefix}revoke_  Ⓐ
│ ➥ _${usedPrefix}setbye_  [ teks ] Ⓐ
│ ➥ _${usedPrefix}setwelcome_  [ teks ] Ⓐ
│ ➥ _${usedPrefix}simulate_  [ event  @mention ]
│ ➥ _${usedPrefix}tagall_  Ⓐ
│ ➥ _${usedPrefix}totalpesan_
│ ➥ _${usedPrefix}warn_  Ⓐ
╰─────────
`.trim()
  conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', 'Menu Khusus Grup', 'status@broadcast')
  }
handler.help = ['groupmenu']
handler.tags = ['menutest']
handler.command = /^groupmenu$/i
handler.register = false
handler.group = false
handler.private = false
handler.limit = false

module.exports = handler
