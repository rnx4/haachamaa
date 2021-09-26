let handler = async (m) => {
  
let teks = `
╭── *〘 Menu Grup 〙*
│
│     Ⓐ  = Only admin
│
│
│ ➥ _.absen_
│ ➥ _.cekabsen_
│ ➥ _.hapusabsen_  Ⓐ
│ ➥ _.mulaiabsen_  [ teks ] Ⓐ
│ ➥ _.enable_  [ option ] Ⓐ
│ ➥ _.disable_  [ option ] Ⓐ
│ ➥ _.group_  [ close ] Ⓐ
│ ➥ _.group_  [ open ] Ⓐ
│ ➥ _.groupinfo_
│ ➥ _.htag_  [ jumlah  pesan ] Ⓐ
│ ➥ _.linkgroup_
│ ➥ _.listonline_
│ ➥ _.here_
│ ➥ _.pengumuman_  [ teks ] Ⓐ
│ ➥ _.announce_  [ teks ] Ⓐ
│ ➥ _.hidetag_  [ teks ] Ⓐ
│ ➥ _.revoke_  Ⓐ
│ ➥ _.setbye_  [ teks ] Ⓐ
│ ➥ _.setwelcome_  [ teks ] Ⓐ
│ ➥ _.simulate_  [ event  @mention ]
│ ➥ _.tagall_  Ⓐ
│ ➥ _.totalpesan_
│ ➥ _.warn_  Ⓐ
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