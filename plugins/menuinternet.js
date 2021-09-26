let handler = async (m) => {
  
let teks = `
╭─ *「 Menu Internet 」*
│
│     Ⓛ  = limit
│
│
│ ~ _.brainly_  [ soal ] Ⓛ
│ ~ _.cerpen_  Ⓛ
│ ~ _.chord_  [ judul lagu ] Ⓛ
│ ~ _.infocuaca_  [ kota ]
│ ~ _.drakor_  [ judul ] Ⓛ
│ ~ _.fetch_  [ url ]
│ ~ _.get_  [ url ]
│ ~ _.google_  [ pencarian ] Ⓛ
│ ~ _.kanji_  Ⓛ
│ ~ _.lirik_  [ judul lagu ] Ⓛ
│ ~ _.lrc_  [ judul lagu ] Ⓛ
│ ~ _.ss_  [ url ] Ⓛ
│ ~ _.ssweb_  [ url ] Ⓛ
│ ~ _.wiki_  [ query ] Ⓛ
│ ~ _.wikipedia_  [ query ]
│ ~ _.calc_  [ expression ]
│ ~ _.base64_
│ ~ _.carigrup_  [ pencarian ] Ⓛ
│ ~ _.githubsearch_  [ pencarian ] Ⓛ
│ ~ _.inspect_  [ link whatsapp ] Ⓛ
│ ~ _.kodebahasa_
│ ~ _.pastebin_  [ opsional ] Ⓛ
│ ~ _.ping_
│ ~ _.speed_
│ ~ _.style_  [ teks ]
│ ~ _.tr_  [ lang  teks ]
│ ~ _.tts_  [ lang  teks ]
╰────────
`.trim()
    conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', 'Menu Penelusuran dan Internet', 'status@broadcast')
  }
handler.help = ['intermenu']
handler.tags = ['menutest']
handler.command = /^intermenu$/i
handler.register = false
handler.group = false
handler.private = false
handler.limit = false

module.exports = handler