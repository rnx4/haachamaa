let handler  = async (m, { conn, usedPrefix }) => {
  
let teks = `
┏━ *「 Menu Owner 」*
┃
┃
┃ ⌲ _${usedPrefix}addprems_  [ @user ]
┃ ⌲ _${usedPrefix}banchat_
┃ ⌲ _${usedPrefix}ban_  [ @user ]
┃ ⌲ _${usedPrefix}broadcast_  [ teks ]
┃ ⌲ _${usedPrefix}broadcastgroup_  [ teks ]
┃ ⌲ _${usedPrefix}broadcastjadibot_  [ teks ]
┃ ⌲ _${usedPrefix}creategroup_
┃ ⌲ _${usedPrefix}deletechat_
┃ ⌲ _${usedPrefix}deletechat group_
┃ ⌲ _${usedPrefix}mutechat_
┃ ⌲ _${usedPrefix}mutechat group_
┃ ⌲ _${usedPrefix}deleteallchat_
┃ ⌲ _${usedPrefix}deleteallchat group_
┃ ⌲ _${usedPrefix}muteallchat_
┃ ⌲ _${usedPrefix}muteallchat group_
┃ ⌲ _${usedPrefix}daftarulang_  [ @user ]
┃ ⌲ _${usedPrefix}delprem_  [ @user ]
┃ ⌲ _${usedPrefix}debounce_
┃ ⌲ _${usedPrefix}update_
┃ ⌲     _>_
┃ ⌲    _=>_
┃ ⌲ _${usedPrefix}kickall_
┃ ⌲ _${usedPrefix}leavegc_
┃ ⌲ _${usedPrefix}leavegroup_
┗ ┅ ━━━━━━━━━━
`.trim()
    conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', 'Menu nya Yang Punya Bot', 'status@broadcast')
  }
handler.help = ['ownermenu']
handler.tags = ['menutest']
handler.command = /^ownermenu$/i
handler.register = false
handler.group = false
handler.private = false
handler.limit = false

module.exports = handler
