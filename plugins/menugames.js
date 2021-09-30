let handler = async (m) => {
  
let teks = `
┏━ *「 Game List 」*
┣━━━━━━━
┃
┃    Ⓛ   = limit
┃
┃ ❖ _.asahotak_  Ⓛ
┃ ❖ _.braintest_  Ⓛ
┃ ❖ _.caklontong_  Ⓛ
┃ ❖ _.dadu_
┃ ❖ _.dare_
┃ ❖ _.delsesittt_  Ⓛ
┃ ❖ _.family100_  Ⓛ
┃ ❖ _.iqtest_  Ⓛ
┃ ❖ _.math_  [ mode ] Ⓛ
┃ ❖ _.mitologites_  Ⓛ
┃ ❖ _.siapakahaku_  Ⓛ
┃ ❖ _.slot_  [ jumlah uang ] Ⓛ
┃ ❖ _.suit_  
┃ ❖ _.susunkata_  Ⓛ
┃ ❖ _.tebakanime_  Ⓛ
┃ ❖ _.tebakbendera_  Ⓛ
┃ ❖ _.tebakgambar_  Ⓛ
┃ ❖ _.tebakkata_  Ⓛ
┃ ❖ _.tebakkimia_  Ⓛ
┃ ❖ _.tebakkota_  Ⓛ
┃ ❖ _.tebaklirik_ Ⓛ
┃ ❖ _.tebaktebakan_  Ⓛ
┃ ❖ _.tekateki_  Ⓛ
┃ ❖ _.tesotak_  Ⓛ
┃ ❖ _.tictactoe_  [ custom room name ] Ⓛ
┃ ❖ _.ttt_  [ custom room name ] Ⓛ
┃ ❖ _.truth_
┃ ❖ _.wordorder_  Ⓛ
┗ ┅ ━━━━━━━━━━
`.trim()
  conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', 'Games Menu', 'status@broadcast')
  }
handler.help = ['gamesmenu']
handler.tags = ['menutest']
handler.command = /^gamesmenu$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
