let handler = async (m) => {
  
let teks = `
╭── *〘 Sticker Expression 〙*
┊
┊      Ⓛ  = limit
┊
┊
┊ ⍚ _.awoo_  Ⓛ
┊ ⍚ _.blush_  Ⓛ
┊ ⍚ _.bonk_  [ @user ] Ⓛ
┊ ⍚ _.bums_  Ⓛ
┊ ⍚ _.cringe_  Ⓛ
┊ ⍚ _.cry_  Ⓛ
┊ ⍚ _.cuddle_  Ⓛ
┊ ⍚ _.facepalm_  Ⓛ
┊ ⍚ _.glomp_  Ⓛ
┊ ⍚ _.happy_  Ⓛ
┊ ⍚ _.highfive_  Ⓛ
┊ ⍚ _.hug_  Ⓛ
┊ ⍚ _.kick_  Ⓛ
┊ ⍚ _.kiss_  Ⓛ
┊ ⍚ _.kitsune_  Ⓛ
┊ ⍚ _.nom_  Ⓛ
┊ ⍚ _.notstonk_  Ⓛ
┊ ⍚ _.nyan_  Ⓛ
┊ ⍚ _.pat_  Ⓛ
┊ ⍚ _.poke_  Ⓛ
┊ ⍚ _.punch_  Ⓛ
┊ ⍚ _.slap_  Ⓛ
┊ ⍚ _.smile_  Ⓛ
┊ ⍚ _.smug_  Ⓛ
┊ ⍚ _.stonk_  Ⓛ
┊ ⍚ _.wave_  Ⓛ
┊ ⍚ _.wink_  Ⓛ
┊ ⍚ _.yeet_  Ⓛ
╰────────
`.trim()
  conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', 'Menu Sticker Wibu', 'status@broadcast')
  }
handler.help = ['eksmenu']
handler.tags = ['menutest']
handler.command = /^eksmenu$/i
handler.register = false
handler.group = false
handler.private = false
handler.limit = false

module.exports = handler
