let handler  = async (m, { conn }) => {
let name = conn.getName(m.sender)
let pesan = `Mohon maaf ${name}, Saya sedang sibuk saat ini\n\nHubungi saya lain waktu, Terimakasih`
conn.reply(m.chat, pesan, m)
}
handler.customPrefix = /Bot/
handler.command = new RegExp

module.exports = handler
