let handler  = async (m, { conn, usedPrefix }) => {
  
let teks = `
┏━ *「 Maker and Sticker 」*
┃━━━━━━━
┃
┃    Ⓛ  = limit
┃    Ⓟ  = Fitur premium
┃
┃ ❖ _${usedPrefix}attp_  [ teks ] Ⓛ
┃ ❖ _${usedPrefix}getexif_  [ reply sticker ]
┃ ❖ _${usedPrefix}horny_  [ reply media ] Ⓛ
┃ ❖ _${usedPrefix}memecreator_  [ teks|teks ] Ⓛ
┃ ❖ _${usedPrefix}quotemaker_  [ teks|nama ] Ⓛ
┃ ❖ _${usedPrefix}run_ Ⓛ
┃ ❖ _${usedPrefix}rip_  [ @user ] Ⓛ
┃ ❖ _${usedPrefix}semoji_  [ type|emoji ] Ⓛ
┃ ❖ _${usedPrefix}sgay_  [ reply media ] Ⓛ
┃ ❖ _${usedPrefix}simpcard_  [ reply media ] Ⓛ
┃ ❖ _${usedPrefix}smeme_  [ teks|teks ] Ⓛ
┃ ❖ _${usedPrefix}stickermeme_  [ teks|teks ] Ⓛ
┃ ❖ _${usedPrefix}sticker_  [ reply media ] Ⓛ
┃ ❖ _${usedPrefix}sticker_  [ url ] Ⓛ
┃ ❖ _${usedPrefix}stickergif_  [ reply media ] Ⓛ
┃ ❖ _${usedPrefix}stickergif_  [ url ] Ⓛ
┃ ❖ _${usedPrefix}stickfilter_  [ filter ] Ⓛ
┃ ❖ _${usedPrefix}stickerrip_  [ reply media ] Ⓛ
┃ ❖ _${usedPrefix}togif_  [ reply sticker ] Ⓛ
┃ ❖ _${usedPrefix}toimg_  [ reply sticker ] Ⓛ
┃ ❖ _${usedPrefix}tovideo_  [ reply sticker ] Ⓛ
┃ ❖ _${usedPrefix}trigger_  [ reply media ] Ⓛ
┃ ❖ _${usedPrefix}ttp_  [ teks ] Ⓛ
┃ ❖ _${usedPrefix}tweet_  [ username|tweet ] Ⓟ
┃ ❖ _${usedPrefix}dttp_  [ teks ] Ⓛ
┃ ❖ _${usedPrefix}wanted_  [ reply media ] Ⓛ
┃ ❖ _${usedPrefix}wasted_  [ reply media ] Ⓛ
┃ ❖ _${usedPrefix}wm_  [ teks|teks ] Ⓟ
┃ ❖ _${usedPrefix}ytcomment_  [ teks ] Ⓛ
┗ ┅ ━━━━━━━━━━
`.trim()
    conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', 'Menu Sticker and Maker', 'status@broadcast')
  }
handler.help = ['stickermenu']
handler.tags = ['menutest']
handler.command = /^stickermenu$/i
handler.register = false
handler.group = false
handler.private = false
handler.limit = false

module.exports = handler
