let handler = async (m) => {
  
let teks = `
┏━━ *「 DONASI 」*
┣ ┅ ━━━━━━━━━━
┃ ❖ Dana [0887436568613]
┃ ❖ OVO [0887436568613]
┃ ❖ Pulsa [0887436568613]
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
Terimakasih sudah berdonasi 😁
`.trim()
  conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', 'Donasi dan Pembayaran', 'status@broadcast')
  }
handler.command = /^dona(te|si)$/i
handler.register = false

module.exports = handler
