let handler  = async (m, { conn }) => {
let name = conn.getName(m.sender)
let teks = ` _Hai ${name}_\n\n _Ada yang bisa saya bantu ?_`
conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', ' *Salam Hangat Dari Owner*', 'status@broadcast')
}
handler.customPrefix = /Bot/
handler.command = new RegExp

module.exports = handler
