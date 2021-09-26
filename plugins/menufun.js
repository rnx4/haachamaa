let handler = async (m) => {
  
let teks = `
┌─ *〔 Fun Menu 〕*
│
│     Ⓛ  = limit
│
│
├ ▪ _.apakah_  [ teks ]
├ ▪ _.apakah_  [ pertanyaan ]
├ ▪ _.bisakah_  [ teks ]
├ ▪ _.bisakah_  [ pertanyaan ]
├ ▪ _.kapan + kah_  [ teks ]
├ ▪ _.kapan + kah_  [ pertanyaan ]
├ ▪ _.siapa + kah_  [ teks ]
├ ▪ _.siapa + kah_  [ pertanyaan ]
├ ▪ _.artimimpi_  [ teks ] Ⓛ
├ ▪ _.artinama_  [ nama ] Ⓛ
├ ▪ _.kbbi_  [ teks ] Ⓛ
├ ▪ _.zodiak_  [ nama|tgl-bln-thn ] Ⓛ
├ ▪ _.bass_  [ reply audio ] Ⓛ
├ ▪ _.blown_  [ reply audio ] Ⓛ
├ ▪ _.deep_  [ reply audio ] Ⓛ
├ ▪ _.earrape_  [ reply audio ] Ⓛ
├ ▪ _.fast_  [ reply audio ] Ⓛ
├ ▪ _.fat_  [ reply audio ] Ⓛ
├ ▪ _.nightcore_  [ reply audio ] Ⓛ
├ ▪ _.reverse_  [ reply audio ] Ⓛ
├ ▪ _.robot_  [ reply audio ] Ⓛ
├ ▪ _.slow_  [ reply audio ] Ⓛ
├ ▪ _.smooth_  [ reply audio ] Ⓛ
├ ▪ _.tupai_  [ reply audio ] Ⓛ
├ ▪ _.tomp3_  [ reply media ] Ⓛ
├ ▪ _.tovn_  [ reply media ] Ⓛ
├ ▪ _.alay_  [ teks ]
├ ▪ _.halah_
├ ▪ _.hilih_
├ ▪ _.huluh_
├ ▪ _.heleh_
├ ▪ _.holoh_
├ ▪ _.bucincek_
├ ▪ _.cantikcek_
├ ▪ _.furrycek_
├ ▪ _.gabutcek_
├ ▪ _.gantengcek_
├ ▪ _.gaycek_
├ ▪ _.gilacek_
├ ▪ _.halucek_
├ ▪ _.hornycek_
├ ▪ _.jonescek_
├ ▪ _.lesbicek_
├ ▪ _.pedocek_
├ ▪ _.pintarcek_
├ ▪ _.sadboycek_
├ ▪ _.sadgirlcek_
├ ▪ _.stresscek_
├ ▪ _.tololcek_
├ ▪ _.wibucek_
├ ▪ _.jadian_
├ ▪ _.mention_  [ user ]
├ ▪ _.say_  [ teks ]
├ ▪ _.simi_  [ teks ]
├ ▪ _.simsimi_  [ teks ]
├ ▪ _.simih_  [ teks ]
├ ▪ _.bacot_  [ user ]
├ ▪ _.bucin_
├ ▪ _.motivasi_
├ ▪ _.pantun_
├ ▪ _.puisi_
├ ▪ _.syair_
├ ▪ _.quotes_
├ ▪ _.getaudio_  [ teks ]
├ ▪ _.getimg_  [ teks ]
├ ▪ _.getmsg_  [ teks ]
├ ▪ _.getsticker_  [ teks ]
├ ▪ _.getvideo_  [ teks ]
├ ▪ _.getvn_  [ teks ]
├ ▪ _.listaudio_  [ teks ]
├ ▪ _.listimg_  [ teks ]
├ ▪ _.listmsg_  [ teks ]
├ ▪ _.liststicker_  [ teks ]
├ ▪ _.listvideo_  [ teks ]
├ ▪ _.listvn_  [ teks ]
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