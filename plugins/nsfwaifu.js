let axios = require("axios")

let handler = async (m, { conn }) => {
      await m.reply(global.wait)
        let res = await axios("https://api.waifu.pics/nsfw/waifu")
        let json = res.data
        let url = json.url
        conn.sendFile(m.chat, url, "waifu.png", "Bonk", m)
        }
handler.command = /^nsfwaifu$/i
handler.premium = true
handler.register = true

module.exports = handler