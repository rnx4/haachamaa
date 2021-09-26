let handler = async (m) => {
  
let teks = `
┏━ *「 Menu Owner 」*
┃
┃
┃ ⌲ _.addprems_  [ @user ]
┃ ⌲ _.banchat_
┃ ⌲ _.ban_  [ @user ]
┃ ⌲ _.broadcast_  [ teks ]
┃ ⌲ _.broadcastgroup_  [ teks ]
┃ ⌲ _.broadcastjadibot_  [ teks ]
┃ ⌲ _.creategroup_
┃ ⌲ _.deletechat_
┃ ⌲ _.deletechat group_
┃ ⌲ _.mutechat_
┃ ⌲ _.mutechat group_
┃ ⌲ _.deleteallchat_
┃ ⌲ _.deleteallchat group_
┃ ⌲ _.muteallchat_
┃ ⌲ _.muteallchat group_
┃ ⌲ _.daftarulang_  [ @user ]
┃ ⌲ _.delprem_  [ @user ]
┃ ⌲ _.debounce_
┃ ⌲ _.update_
┃ ⌲ _.>_
┃ ⌲ _.=>_
┃ ⌲ _.kickall_
┃ ⌲ _.leavegc_
┃ ⌲ _.leavegroup_
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