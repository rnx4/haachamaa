let handler = async (m) => {
  
let teks = `
๑—————— *〔 Premium Menu 〕*
┊
┊
┊ ⌬ _.addaudio_  [ teks ]
┊ ⌬ _.addimg_  [ teks ]
┊ ⌬ _.addmsg_  [ teks ]
┊ ⌬ _.addsticker_  [ teks ]
┊ ⌬ _.addvideo_  [ teks ]
┊ ⌬ _.addvn_  [ teks ]
┊ ⌬ _.delaudio_  [ teks ]
┊ ⌬ _.delimg_  [ teks ]
┊ ⌬ _.delmsg_  [ teks ]
┊ ⌬ _.delsticker_  [ teks ]
┊ ⌬ _.delvideo_  [ teks ]
┊ ⌬ _.delvn_  [ teks ]
┊ ⌬ _.fb_  [ url ]
┊ ⌬ _.gift_
┊ ⌬ _.glasses_
┊ ⌬ _.healer_
┊ ⌬ _.ig_  [ url ]
┊ ⌬ _.igstalk_  [ username ]
┊ ⌬ _.igstory_  [ username ]
┊ ⌬ _.getcode_
┊ ⌬ _.jadibot_
┊ ⌬ _.stop_
┊ ⌬ _.berhenti_
┊ ⌬ _.join_  [ link whatsapp ]
┊ ⌬ _.nsfwneko_
┊ ⌬ _.nsftrap_
┊ ⌬ _.nsfwaifu_
┊ ⌬ _.overf_
play_  [ judul musik ]
┊ ⌬ _.pinterest_  [ pencarian ]
┊ ⌬ _.shaunthesheep_  [ reply media ]
┊ ⌬ _.start_
┊ ⌬ _.next_
┊ ⌬ _.leave_
┊ ⌬ _.tiktok_  [ url ]
┊ ⌬ _.twitter_  [ url ]
┊ ⌬ _.uniform_
┊ ⌬ _.wallp_  [ pencarian ]
┊ ⌬ _.wallpaper_
┊ ⌬ _.wm_  [ reply sticker ]
┊ ⌬ _.wphen_
┊ ⌬ _.wpnsfw_
┊ ⌬ _.wpzettairyouiki
┊ ⌬ _.yta_  [ url ]
┊ ⌬ _.ytmp3_  [ url ]
┊ ⌬ _.ytmp4_  [ url ]
┊ ⌬ _.yts_  [ pencarian ]
┊ ⌬ _.ytv_  [ url ]
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