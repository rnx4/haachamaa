let handler = async (m) => {
  
let teks = `
๑—————— *〔 Premium Menu 〕*
┊
┊
┊ ⌬ _${usedPrefix}addaudio_  [ teks ]
┊ ⌬ _${usedPrefix}addimg_  [ teks ]
┊ ⌬ _${usedPrefix}addmsg_  [ teks ]
┊ ⌬ _${usedPrefix}addsticker_  [ teks ]
┊ ⌬ _${usedPrefix}addvideo_  [ teks ]
┊ ⌬ _${usedPrefix}addvn_  [ teks ]
┊ ⌬ _${usedPrefix}delaudio_  [ teks ]
┊ ⌬ _${usedPrefix}delimg_  [ teks ]
┊ ⌬ _${usedPrefix}delmsg_  [ teks ]
┊ ⌬ _${usedPrefix}delsticker_  [ teks ]
┊ ⌬ _${usedPrefix}delvideo_  [ teks ]
┊ ⌬ _${usedPrefix}delvn_  [ teks ]
┊ ⌬ _${usedPrefix}fb_  [ url ]
┊ ⌬ _${usedPrefix}gift_
┊ ⌬ _${usedPrefix}glasses_
┊ ⌬ _${usedPrefix}healer_
┊ ⌬ _${usedPrefix}ig_  [ url ]
┊ ⌬ _${usedPrefix}igstalk_  [ username ]
┊ ⌬ _${usedPrefix}igstory_  [ username ]
┊ ⌬ _${usedPrefix}getcode_
┊ ⌬ _${usedPrefix}jadibot_
┊ ⌬ _${usedPrefix}stop_
┊ ⌬ _${usedPrefix}berhenti_
┊ ⌬ _${usedPrefix}join_  [ link whatsapp ]
┊ ⌬ _${usedPrefix}nsfwneko_
┊ ⌬ _${usedPrefix}nsftrap_
┊ ⌬ _${usedPrefix}nsfwaifu_
┊ ⌬ _${usedPrefix}overf_
┊ ⌬ _${usedPrefix}play_  [ judul musik ]
┊ ⌬ _${usedPrefix}pinterest_  [ pencarian ]
┊ ⌬ _${usedPrefix}shaunthesheep_  [ reply media ]
┊ ⌬ _${usedPrefix}start_
┊ ⌬ _${usedPrefix}next_
┊ ⌬ _${usedPrefix}leave_
┊ ⌬ _${usedPrefix}tiktok_  [ url ]
┊ ⌬ _${usedPrefix}twitter_  [ url ]
┊ ⌬ _${usedPrefix}uniform_
┊ ⌬ _${usedPrefix}wallp_  [ pencarian ]
┊ ⌬ _${usedPrefix}wallpaper_
┊ ⌬ _${usedPrefix}wm_  [ reply sticker ]
┊ ⌬ _${usedPrefix}wphen_
┊ ⌬ _${usedPrefix}wpnsfw_
┊ ⌬ _${usedPrefix}yta_  [ url ]
┊ ⌬ _${usedPrefix}ytmp3_  [ url ]
┊ ⌬ _${usedPrefix}ytmp4_  [ url ]
┊ ⌬ _${usedPrefix}yts_  [ pencarian ]
┊ ⌬ _${usedPrefix}ytv_  [ url ]
┊ ⌬ _${usedPrefix}zettairyouiki
๑———————————————๑
`.trim()
  conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', 'Menu Spesial Premium User', 'status@broadcast')
  }
handler.help = ['premsmenu']
handler.tags = ['menutest']
handler.command = /^premsmenu$/i
handler.register = false
handler.group = false
handler.private = false
handler.limit = false

module.exports = handler
