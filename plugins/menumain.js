let handler = async (m) => {
  
let teks = `
╭─ *「 Menu Utama 」*
│
│   [ Informasi ]
│  Ⓗ  = perhari
│  Ⓙ  = perjam
│  Ⓟ  = Fitur premium
│
│
│ - _.afk_  [ alasan ]
│ - _.buy_
│ - _.buy_  [ jumlah limit ]
│ - _.buyall_
│ - _.claim_ Ⓗ
│ - _.daily_ Ⓗ
│ - _.gift_ Ⓟ Ⓙ
│ - _.leaderboard_  [ jumlah user ]
│ - _.lb_  [ jumlah user ]
│ - _.levelup_
│ - _.limit_  [ @user mountt ]
│ - _.paylimit_  [ @user mountt ]
│ - _.mining_ Ⓙ
│ - _.profile_
│ - _.rank_
│ - _.rankcard_
│ - _.daftar_  [ nama|umur ]
│ - _.register_  [ nama|umur ]
│ - _.tf_  [ uang @user ] Ⓛ
│ - _.transfer_  [ uang @user ]
│ - _.unreg_  [ SN|Serial number ]
│ - _.unregister_  [ SN|Serial number ]
╰──────
`.trim()
  conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', 'Menu Utama', 'status@broadcast')
  }
handler.help = ['mainmenu']
handler.tags = ['menutest']
handler.command = /^mainmenu$/i
handler.register = false
handler.group = false
handler.private = false
handler.limit = false

module.exports = handler