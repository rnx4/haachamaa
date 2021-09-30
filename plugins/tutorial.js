let handler  = async (m, { conn, usedPrefix }) => {
  
let teks = `
╭─「 *Tutorial Main RPG* 」
│ 
│
│╭─[ *Profile* ]
││
││ • *${usedPrefix}profile*
││    Untuk mengetahui Informasimu, dll
││
││ • *${usedPrefix}inv*
││ • *${usedPrefix}inventory*
││ • *${usedPrefix}perlengkapan*
││    Untuk mengecek nyawa, uang, dll.
│╰────────────────
│
│
│╭─[ *Bekerja* ]
││
││ • *${usedPrefix}mulung*
││ • *${usedPrefix}adventure*
││ • *${usedPrefix}work*
││   Untuk mencari resource seperti 
││   Uang, Koin, Exp, dll..,dibutuhkan  
││   minimal 80 nyawa untuk bisa 
││   melakukannya dan, kamu tidak 
││   dapat spam karena ada delay 5 menit
││
││ • *${usedPrefix}use potion <jumlah>*
││    Untuk memakai potion dan untuk 
││    mengisi nyawa/health
││
││ • *${usedPrefix}open <crate> <jumlah>*
││    Untuk membuka crate mu
│╰────────────────
│
│
│╭─[ *Toko* ]
││ 
││ • *${usedPrefix}shop*
││    Untuk melihat item dan harganya
││
││ • *${usedPrefix}shop buy potion <jumlah>*
││    Untuk membeli potion
││
││ • *${usedPrefix}shop buy <item> <jumlah>*
││    Untuk membeli item
││
││ • *${usedPrefix}shop sell <item> < jumlah>*
││    Untuk menjual item
│╰────────────────
│
│
│╭─[ *Pet* ]
││
││ • *${usedPrefix}open <pet>*
││    Untuk mendapatkan pet
││
││ • *${usedPrefix}feed <pet>*
││    Untuk memberi makan pet
││
││ • *${usedPrefix}shop <sell> <pet>*
││    Untuk menjual pet kamu
│╰────────────────
│
│
╰─「 *Tutorial Main RPG* 」
`.trim()
  conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', 'Tutorial Bermain RPG', 'status@broadcast')
  }
handler.command = /^tutorial$/i
handler.register = true
handler.group = false
handler.private = false
handler.limit = false

module.exports = handler
