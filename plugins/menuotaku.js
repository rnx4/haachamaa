let handler = async (m) => {
  
let teks = `
┌── *〔 How to be an Otaku 〕*
│
│      Ⓛ  = limit
│      Ⓟ  = Fitur premium
│
│
├ ♡ _.anime_  [ judul ] Ⓛ
├ ♡ _.anime_  [ waifu, husbu, loli ] Ⓛ
├ ♡ _.animelink_  Ⓛ
├ ♡ _.bacakomik_  [ judul ] Ⓛ
├ ♡ _.anmovie_  Ⓛ
├ ♡ _.aot_  Ⓛ
├ ♡ _.chara_  [ nama ] Ⓛ
├ ♡ _.dark_  Ⓛ
├ ♡ _.fate_  Ⓛ
├ ♡ _.healer_  Ⓟ
├ ♡ _.husbu_  Ⓛ
├ ♡ _.kanji_  Ⓛ
├ ♡ _.kodenuklir_  Ⓛ
├ ♡ _.kusonime_  [ judul ] Ⓛ
├ ♡ _.mangainfo_  [ judul ] Ⓛ
├ ♡ _.mangalink_  Ⓛ
├ ♡ _.overf_  Ⓟ
├ ♡ _.ovlord_  Ⓛ
├ ♡ _.nekonime_  Ⓛ
├ ♡ _.snsou_  [ food war ] Ⓛ
├ ♡ _.tensura_  Ⓛ
├ ♡ _.waifu_  Ⓛ
├ ♡ _.wpanime  Ⓛ
└──────────
`.trim()
  conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', 'Cara Menjadi Wibu Elit', 'status@broadcast')
  }
handler.help = ['otakumenu']
handler.tags = ['menutest']
handler.command = /^otakumenu$/i
handler.register = false
handler.group = false
handler.private = false
handler.limit = false

module.exports = handler