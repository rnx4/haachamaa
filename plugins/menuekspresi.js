let handler = async (m) => {
  
let teks = `
╭── *〘 Sticker Expression 〙*
┊
┊      Ⓛ  = limit
┊
┊
┊ ⍚ _.bonk_  [ @user ] Ⓛ
┊ ⍚ _.cry_  Ⓛ
┊ ⍚ _.cuddle_  Ⓛ
┊ ⍚ _.facepalm_  Ⓛ
┊ ⍚ _.hug_  Ⓛ
┊ ⍚ _.kiss_  Ⓛ
┊ ⍚ _.kitsune_  Ⓛ
┊ ⍚ _.notstonk_  Ⓛ
┊ ⍚ _.nyan_  Ⓛ
┊ ⍚ _.pat_  Ⓛ
┊ ⍚ _.punch_  Ⓛ
┊ ⍚ _.slap_  Ⓛ
┊ ⍚ _.smug_  Ⓛ
┊ ⍚ _.stonk_  Ⓛ
┊ ⍚ _.wink_  Ⓛ
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