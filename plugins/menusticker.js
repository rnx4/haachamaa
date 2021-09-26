let handler = async (m) => {
  
let teks = `
┏━ *「 Maker and Sticker 」*
┃━━━━━━━
┃
┃    Ⓛ  = limit
┃    Ⓟ  = Fitur premium
┃
┃ ❖ _.attp_  [ teks ] Ⓛ
┃ ❖ _.getexif_  [ reply sticker ]
┃ ❖ _.horny_  [ reply media ] Ⓛ
┃ ❖ _.memecreator_  [ teks|teks ] Ⓛ
┃ ❖ _.quotemaker_  [ teks|nama ] Ⓛ
┃ ❖ _.run_ Ⓛ
┃ ❖ _.rip_  [ @user ] Ⓛ
┃ ❖ _.semoji_  [ type|emoji ] Ⓛ
┃ ❖ _.sgay_  [ reply media ] Ⓛ
┃ ❖ _.simpcard_  [ reply media ] Ⓛ
┃ ❖ _.smeme_  [ teks|teks ] Ⓛ
┃ ❖ _.stickermeme_  [ teks|teks ] Ⓛ
┃ ❖ _.sticker_  [ reply media ] Ⓛ
┃ ❖ _.sticker_  [ url ] Ⓛ
┃ ❖ _.stickergif_  [ reply media ] Ⓛ
┃ ❖ _.stickergif_  [ url ] Ⓛ
┃ ❖ _.stickfilter_  [ filter ] Ⓛ
┃ ❖ _.stickerrip_  [ reply media ] Ⓛ
┃ ❖ _.togif_  [ reply sticker ] Ⓛ
┃ ❖ _.toimg_  [ reply sticker ] Ⓛ
┃ ❖ _.tovideo_  [ reply sticker ] Ⓛ
┃ ❖ _.trigger_  [ reply media ] Ⓛ
┃ ❖ _.ttp_  [ teks ] Ⓛ
┃ ❖ _.tweet_  [ username|tweet ] Ⓟ
┃ ❖ _.dttp_  [ teks ] Ⓛ
┃ ❖ _.wanted_  [ reply media ] Ⓛ
┃ ❖ _.wasted_  [ reply media ] Ⓛ
┃ ❖ _.wm_  [ teks|teks ] Ⓟ
┃ ❖ _.ytcomment_  [ teks ] Ⓛ
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