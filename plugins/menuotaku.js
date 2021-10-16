let handler = async (m) => {
  
let teks = `
┌── *〔 How to be an Otaku 〕*
│
│      Ⓛ  = limit
│      Ⓟ  = Fitur premium
│
│
├ ♡ _${usedPrefix}anime_  [ judul ] Ⓛ
├ ♡ _${usedPrefix}anime_  [ waifu, husbu, loli ] Ⓛ
├ ♡ _${usedPrefix}animelink_  Ⓛ
├ ♡ _${usedPrefix}bacakomik_  [ judul ] Ⓛ
├ ♡ _${usedPrefix}anmovie_  Ⓛ
├ ♡ _${usedPrefix}aot_  Ⓛ
├ ♡ _${usedPrefix}chara_  [ nama ] Ⓛ
├ ♡ _${usedPrefix}dark_  Ⓛ
├ ♡ _${usedPrefix}fate_  Ⓛ
├ ♡ _${usedPrefix}healer_  Ⓟ
├ ♡ _${usedPrefix}husbu_  Ⓛ
├ ♡ _${usedPrefix}kanji_  Ⓛ
├ ♡ _${usedPrefix}kodenuklir_  Ⓛ
├ ♡ _${usedPrefix}kusonime_  [ judul ] Ⓛ
├ ♡ _${usedPrefix}mangainfo_  [ judul ] Ⓛ
├ ♡ _${usedPrefix}mangalink_  Ⓛ
├ ♡ _${usedPrefix}overf_  Ⓟ
├ ♡ _${usedPrefix}ovlord_  Ⓛ
├ ♡ _${usedPrefix}nekonime_  Ⓛ
├ ♡ _${usedPrefix}snsou_  [ food war ] Ⓛ
├ ♡ _${usedPrefix}tensura_  Ⓛ
├ ♡ _${usedPrefix}waifu_  Ⓛ
├ ♡ _${usedPrefix}wpanime_  Ⓛ
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
