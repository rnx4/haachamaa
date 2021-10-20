let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, usedPrefix, DevMode }) => { 
    try { 
        let __timers = (new Date - global.DATABASE._data.users[m.sender].lastdungeon)
        let _timers = (300000 - __timers) 
        let timers = clockString(_timers)
        if (global.DATABASE._data.users[m.sender].healt > 89) {
            if (new Date - global.DATABASE._data.users[m.sender].lastdungeon > 300000) {
            let healt = (pickRandom(['100', '99', '100', '97', '100', '98', '100', '96', '100', '95', '100', '94', '100', '93', '100', '92', '100', '91', '100', '90', '100']))
            let exp = `${Math.floor(Math.random() * 500)}`.trim() 
            let koin = `${Math.floor(Math.random() * 350)}`.trim() 
            let slime = `${Math.floor(Math.random() * 10)}`.trim() 
            let sprtgrass = `${Math.floor(Math.random() * 5)}`.trim() 
            let mdgrleaf = `${Math.floor(Math.random() * 5)}`.trim() 
            let hpktplant = `${Math.floor(Math.random() * 5)}`.trim() 
            let kayu = `${Math.floor(Math.random() * 20)}`.trim() 
            let _skeleton = `${pickRandom(['1', '0', '0', '0', '0', '1', '0', '0', '0', '0', '1'])}`
            let skeleton = (_skeleton * 1)
            let goblin = `${Math.floor(Math.random() * 7)}`.trim() 
            let _wolf = `${pickRandom(['1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'])}`
            let wolf = (_wolf * 1)
            let sampah = `${Math.floor(Math.random() * 100)}`.trim()
            let str = `
Nyawamu berkurang -${healt * 1} setelah masuk dungeon dan mendapatkan 

*「 REWARD 」*

🔗 *Exp: ${exp}*
🪙 *Koin: ${koin}*
👾 *Slime: ${slime}*
🌿 *Spirit Grass: ${sprtgrass}*
🍂 *Mandragora Leaf: ${mdgrleaf}*
🌱 *Hipokute Plant: ${hpktplant}*
🪵 *Kayu: ${kayu}*
♻️ *Sampah: ${sampah}*
`.trim()
            conn.reply(m.chat, str, m)
            if (skeleton > 0) {
                   global.DATABASE._data.users[m.sender].skeleton += skeleton * 1
                   conn.reply(m.chat, 'Anda Berhasil Membunuh ' + skeleton + ' White Skeleton 💀', m)
            }
            if (goblin > 0) {
                global.DATABASE._data.users[m.sender].goblin += goblin * 1
                conn.reply(m.chat, 'Anda Berhasil Membunuh ' + goblin + ' Goblin 🤢', m)
            }
            if (wolf > 0) {
                global.DATABASE._data.users[m.sender].wolf += wolf * 1
                conn.reply(m.chat, 'Anda Berhasil Membunuh ' + wolf + ' Dark StarWolf 🐺', m)
            }
            global.DATABASE._data.users[m.sender].healt -= healt * 1
            global.DATABASE._data.users[m.sender].exp += exp * 1
            global.DATABASE._data.users[m.sender].koin += koin * 1
            global.DATABASE._data.users[m.sender].slime += slime * 1
            global.DATABASE._data.users[m.sender].kayu += kayu * 1
            global.DATABASE._data.users[m.sender].sprtgrass += sprtgrass * 1
            global.DATABASE._data.users[m.sender].mdgrleaf += mdgrleaf * 1
            global.DATABASE._data.users[m.sender].hpktplant += hpktplant * 1
            global.DATABASE._data.users[m.sender].skeleton += skeleton * 1
            global.DATABASE._data.users[m.sender].goblin += goblin * 1
            global.DATABASE._data.users[m.sender].wolf += wolf * 1
            global.DATABASE._data.users[m.sender].sampah += sampah * 1
            global.DATABASE._data.users[m.sender].lastdungeon = new Date * 1
            } else conn.reply(m.chat, `Memasuki dungeon membuat anda lelah, silahkan coba *${timers}* lagi`, m)
        } else conn.reply(m.chat, 'Minimal 90 health untuk bisa masuk Dungeon lagi, Silahkan cek shop/toko untuk membeli Potion', m)
    } catch (e) {
        console.log(e)
        conn.reply(m.chat, 'Error', m)
        if (DevMode) {
            let file = require.resolve(__filename)
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, file + ' error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}
handler.command = /^(gasdungeon)$/i
handler.register = true
handler.fail = null

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
