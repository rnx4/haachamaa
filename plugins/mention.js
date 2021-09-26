let handler = async (m, { conn, text }) => {
  if (!text) throw 'Masukan teks yang akan ditirui oleh Bot!'
  m.reply(text, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}
handler.group = true
handler.register = true

handler.command = /^mention|say$/i

module.exports = handler
