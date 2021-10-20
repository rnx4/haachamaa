let handler  = async (m, { conn, usedPrefix }) => {
  
let teks = `
╭─「 *Tutorial Main RPG* 」
│ 
│
│╭─[ *Profile* ]
││
││ • *${usedPrefix}profile*
││    Untuk mengetahui Informasi saldo, dll
││
││ • *${usedPrefix}rank*
││ • *${usedPrefix}rankcard*
││    Untuk mengecek level, ranking, dll
││
││ • *${usedPrefix}inv*
││ • *${usedPrefix}inventory*
││ • *${usedPrefix}perlengkapan*
││    Untuk mengecek nyawa, item, dll.
│╰────────────────
│
│
│╭─[ *Berpetualang* ]
││
││ • *${usedPrefix}mulung*
││ • *${usedPrefix}adventure*
││ • *${usedPrefix}work*
││   Untuk mencari resource seperti 
││   Uang, Koin, Exp, dll.., dibutuhkan  
││   minimal 80 nyawa untuk bisa 
││   melakukannya dan, kamu tidak 
││   dapat spam karena ada delay 5 menit
││
││ • *${usedPrefix}heal
││ • *${usedPrefix}use potion <jumlah>*
││    Untuk memakai potion dan untuk 
││    mengisi nyawa/health
││
││ • *${usedPrefix}open <crate> <jumlah>*
││    Untuk membuka crate mu
│╰────────────────
│
│
│╭─[ *Dungeon* ]
││
││ • *${usedPrefix}gasdungeon*
││    Untuk menangkap monster dan
││    mencari tanaman herbal.., dibutuhkan
││    minimal 90 nyawa untuk bisa 
││    melakukannya dan, kamu tidak 
││    dapat spam karena ada delay 5 menit
││ 
││ • *${usedPrefix}racik*
││ • *${usedPrefix}meracik*
││    Untuk meracik Small Potion dan
││    dapat di tukarkan dengan Potion
││
││ • *${usedPrefix}barter*
││    Untuk menukarkan Small Potion
││    menjadi Potion
│╰────────────────
│
│
│╭─[ *Toko* ]
││ 
││ • *${usedPrefix}shop*
││    Untuk melihat item dan harganya
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
