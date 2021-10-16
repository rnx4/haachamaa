let handler  = async (m, { conn, usedPrefix }) => {
  
let teks = `
┌─ *〔 Fun Menu 〕*
│
│     Ⓛ  = limit
│
│
├ ▪ _${usedPrefix}apakah_  [ teks ]
├ ▪ _${usedPrefix}apakah_  [ pertanyaan ]
├ ▪ _${usedPrefix}bisakah_  [ teks ]
├ ▪ _${usedPrefix}bisakah_  [ pertanyaan ]
├ ▪ _${usedPrefix}kapan + kah_  [ teks ]
├ ▪ _${usedPrefix}kapan + kah_  [ pertanyaan ]
├ ▪ _${usedPrefix}siapa + kah_  [ teks ]
├ ▪ _${usedPrefix}siapa + kah_  [ pertanyaan ]
├ ▪ _${usedPrefix}artimimpi_  [ teks ] Ⓛ
├ ▪ _${usedPrefix}artinama_  [ nama ] Ⓛ
├ ▪ _${usedPrefix}kbbi_  [ teks ] Ⓛ
├ ▪ _${usedPrefix}zodiak_  [ nama|tgl-bln-thn ] Ⓛ
├ ▪ _${usedPrefix}bass_  [ reply audio ] Ⓛ
├ ▪ _${usedPrefix}blown_  [ reply audio ] Ⓛ
├ ▪ _${usedPrefix}deep_  [ reply audio ] Ⓛ
├ ▪ _${usedPrefix}earrape_  [ reply audio ] Ⓛ
├ ▪ _${usedPrefix}fast_  [ reply audio ] Ⓛ
├ ▪ _${usedPrefix}fat_  [ reply audio ] Ⓛ
├ ▪ _${usedPrefix}nightcore_  [ reply audio ] Ⓛ
├ ▪ _${usedPrefix}reverse_  [ reply audio ] Ⓛ
├ ▪ _${usedPrefix}robot_  [ reply audio ] Ⓛ
├ ▪ _${usedPrefix}slow_  [ reply audio ] Ⓛ
├ ▪ _${usedPrefix}smooth_  [ reply audio ] Ⓛ
├ ▪ _${usedPrefix}tupai_  [ reply audio ] Ⓛ
├ ▪ _${usedPrefix}tomp3_  [ reply media ] Ⓛ
├ ▪ _${usedPrefix}tovn_  [ reply media ] Ⓛ
├ ▪ _${usedPrefix}alay_  [ teks ]
├ ▪ _${usedPrefix}halah_
├ ▪ _${usedPrefix}hilih_
├ ▪ _${usedPrefix}huluh_
├ ▪ _${usedPrefix}heleh_
├ ▪ _${usedPrefix}holoh_
├ ▪ _${usedPrefix}bucincek_
├ ▪ _${usedPrefix}cantikcek_
├ ▪ _${usedPrefix}furrycek_
├ ▪ _${usedPrefix}gabutcek_
├ ▪ _${usedPrefix}gantengcek_
├ ▪ _${usedPrefix}gaycek_
├ ▪ _${usedPrefix}gilacek_
├ ▪ _${usedPrefix}halucek_
├ ▪ _${usedPrefix}hornycek_
├ ▪ _${usedPrefix}jonescek_
├ ▪ _${usedPrefix}lesbicek_
├ ▪ _${usedPrefix}pedocek_
├ ▪ _${usedPrefix}pintarcek_
├ ▪ _${usedPrefix}sadboycek_
├ ▪ _${usedPrefix}sadgirlcek_
├ ▪ _${usedPrefix}stresscek_
├ ▪ _${usedPrefix}tololcek_
├ ▪ _${usedPrefix}wibucek_
├ ▪ _${usedPrefix}jadian_
├ ▪ _${usedPrefix}mention_  [ user ]
├ ▪ _${usedPrefix}say_  [ teks ]
├ ▪ _${usedPrefix}bacot_  [ user ]
├ ▪ _${usedPrefix}bucin_
├ ▪ _${usedPrefix}motivasi_
├ ▪ _${usedPrefix}pantun_
├ ▪ _${usedPrefix}puisi_
├ ▪ _${usedPrefix}syair_
├ ▪ _${usedPrefix}quotes_
├ ▪ _${usedPrefix}getaudio_  [ teks ]
├ ▪ _${usedPrefix}getimg_  [ teks ]
├ ▪ _${usedPrefix}getmsg_  [ teks ]
├ ▪ _${usedPrefix}getsticker_  [ teks ]
├ ▪ _${usedPrefix}getvideo_  [ teks ]
├ ▪ _${usedPrefix}getvn_  [ teks ]
├ ▪ _${usedPrefix}listaudio_  [ teks ]
├ ▪ _${usedPrefix}listimg_  [ teks ]
├ ▪ _${usedPrefix}listmsg_  [ teks ]
├ ▪ _${usedPrefix}liststicker_  [ teks ]
├ ▪ _${usedPrefix}listvideo_  [ teks ]
├ ▪ _${usedPrefix}listvn_  [ teks ]
└─────────
`.trim()
  conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', 'Menu Pengisi Kegabutan', 'status@broadcast')
  }
handler.help = ['funmenu']
handler.tags = ['menutest']
handler.command = /^funmenu$/i
handler.register = false
handler.group = false
handler.private = false
handler.limit = false

module.exports = handler
