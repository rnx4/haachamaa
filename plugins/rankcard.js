let levelling = require('../lib/levelling')
let fetch = require('node-fetch')
let fs = require('fs')

let handler  = async (m, { conn, text }) => {
	let pp = './src/avatar_contact.png'

let { exp, limit, level, role } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
let nama = conn.getName(m.sender)
try {
  } catch (e) {

  } finally {
await m.reply(global.wait)
let res = global.API('http://hardianto-chan.herokuapp.com', '/api/rankcard', {
    profile: await conn.getProfilePicture(m.sender).catch(_ => ''),
    name: nama,
    bg: 'https://telegra.ph/file/b58b1d7c23a0294cf2516.jpg',
    needxp: max,
    curxp: exp,
    level: level,
    logorank: await conn.getProfilePicture(m.chat).catch(_ => '')
  })
let caption = `
*👾Your Profile:*

*👤Name:* ${nama}
*⚜️Rank:* ${role}
*🔰Level:* ${level}
*🔗Exp :* ${exp} --> ${max}
`.trim()
    conn.sendFile(m.chat, res, 'test.jpg', caption, m, false)
} 
    
    }

handler.command = /^(rank|rankcard)$/i

handler.register = true
handler.fail = null

module.exports = handler
