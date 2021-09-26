let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, command, args, text, usedPrefix, DevMode }) => {
  try {
    let bruh = `${usedPrefix}open <crate name> < 1 | 10 | 100 | 1000 >\n\nContoh penggunaan: *${usedPrefix}open common 10*\n\nlist crate:\n*common*\n*uncommon*\n*rare*\n*epic*\n*rare*\n*epic*\n*mythic*\n*legendary*`
    let _lmao = args[0]
    let Lmao = `Hanya support 1, 10, 100, 1000\nContoh penggunaan: *${usedPrefix}open ${args > 2 ? _lmao : pickRandom(['common', 'uncommon', 'rare', 'epic', 'mythic', 'legendary'])} 10*`
    let type = (args[0] || '').toLowerCase()
    let jumlah = (args[1] || '').toLowerCase()
    switch (type) {
        case 'common':
            switch (jumlah) {
                case '1':
                case 'crate':
                    let _ck = `${Math.floor(Math.random() * 50)}`.trim()
                    let _cc = `${Math.floor(Math.random() * 2)}`.trim()
                    let _cp = `${Math.floor(Math.random() * 1)}`.trim()
                    let _ce = `${Math.floor(Math.random() * 100)}`.trim()
                    let _cu = `${Math.floor(Math.random() * 1)}`.trim()
                    let ck = (_ck * 1)
                    let cc = (_cc * 1)
                    let cp = (_cp * 1)
                    let ce = (_ce * 1)
                    let cu = (_cu * 1)
                    let Hcom = `
Anda telah membuka *Common crate* dan mendapatkan:${ck > 0 ? `\nKoin: ${ck}` : ''}${ce > 0 ? `\nExp: ${ce} *exp*` : ''}${cp > 0 ? `\nPotion: ${cp} *potion*` : ''}${cc > 0 ? `\ncommon crate: ${cc} *crate*` : ''}${cu > 0 ? `\nUncommon crate: ${cu} *crate*` : ''}
`.trim()
                    if (global.DATABASE._data.users[m.sender].common >= 1) {
                        global.DATABASE._data.users[m.sender].common -= 1
                        global.DATABASE._data.users[m.sender].koin += ck * 1
                        global.DATABASE._data.users[m.sender].exp += ce * 1
                        global.DATABASE._data.users[m.sender].potion += cp * 1
                        global.DATABASE._data.users[m.sender].uncommon += cu * 1
                        global.DATABASE._data.users[m.sender].common += cc * 1
                        conn.reply(m.chat, Hcom, m)
                    } else conn.reply(m.chat, 'Common crate anda tidak cukup', m)
                    break
                case '10':
                    let _ck1 = `${Math.floor(Math.random() * 500)}`.trim()
                    let _cc1 = `${Math.floor(Math.random() * 5)}`.trim()
                    let _cp1 = `${Math.floor(Math.random() * 3)}`.trim()
                    let _ce1 = `${Math.floor(Math.random() * 700)}`.trim()
                    let _cu1 = `${Math.floor(Math.random() * 3)}`.trim()
                    let ck1 = (_ck1 * 1)
                    let cc1 = (_cc1 * 1)
                    let cp1 = (_cp1 * 1)
                    let ce1 = (_ce1 * 1)
                    let cu1 = (_cu1 * 1)
                    let Hcom1 = `
Anda telah membuka *Common crate* dan mendapatkan:${ck1 > 0 ? `\nKoin: ${ck1}` : ''}${ce1 > 0 ? `\nExp: ${ce1} *exp*` : ''}${cp1 > 0 ? `\nPotion: ${cp1} *potion*` : ''}${cc1 > 0 ? `\ncommon crate: ${cc1} *crate*` : ''}${cu1 > 0 ? `\nUncommon crate: ${cu1} *crate*` : ''}
`.trim()
                    if (global.DATABASE._data.users[m.sender].common >= 10) {
                        global.DATABASE._data.users[m.sender].common -= 10
                        global.DATABASE._data.users[m.sender].koin += ck1 * 1
                        global.DATABASE._data.users[m.sender].exp += ce1 * 1
                        global.DATABASE._data.users[m.sender].potion += cp1 * 1
                        global.DATABASE._data.users[m.sender].uncommon += cu1 * 1
                        global.DATABASE._data.users[m.sender].common += cc1 * 1
                        conn.reply(m.chat, Hcom1, m)
                    } else conn.reply(m.chat, 'Common crate anda tidak cukup', m)
                    break
                case '100':
                    let _ck2 = `${Math.floor(Math.random() * 5000)}`.trim()
                    let _cc2 = `${Math.floor(Math.random() * 50)}`.trim()
                    let _cp2 = `${Math.floor(Math.random() * 20)}`.trim()
                    let _ce2 = `${Math.floor(Math.random() * 7500)}`.trim()
                    let _cu2 = `${Math.floor(Math.random() * 30)}`.trim()
                    let ck2 = (_ck2 * 1)
                    let cc2 = (_cc2 * 1)
                    let cp2 = (_cp2 * 1)
                    let ce2 = (_ce2 * 1)
                    let cu2 = (_cu2 * 1)
                    let Hcom2 = `
Anda telah membuka *Common crate* dan mendapatkan:${ck2 > 0 ? `\nKoin: ${ck2}` : ''}${ce2 > 0 ? `\nExp: ${ce2} *exp*` : ''}${cp2 > 0 ? `\nPotion: ${cp2} *potion*` : ''}${cc2 > 0 ? `\ncommon crate: ${cc2} *crate*` : ''}${cu2 > 0 ? `\nUncommon crate: ${cu2} *crate*` : ''}
`.trim()
                    if (global.DATABASE._data.users[m.sender].common >= 100) {
                        global.DATABASE._data.users[m.sender].common -= 100
                        global.DATABASE._data.users[m.sender].koin += ck2 * 1
                        global.DATABASE._data.users[m.sender].exp += ce2 * 1
                        global.DATABASE._data.users[m.sender].potion += cp2 * 1
                        global.DATABASE._data.users[m.sender].uncommon += cu2 * 1
                        global.DATABASE._data.users[m.sender].common += cc2 * 1
                        conn.reply(m.chat, Hcom2, m)
                    } else conn.reply(m.chat, 'Common crate anda tidak cukup', m)
                    break
                case '1000':
                    let _ck3 = `${Math.floor(Math.random() * 50000)}`.trim()
                    let _cc3 = `${Math.floor(Math.random() * 350)}`.trim()
                    let _cp3 = `${Math.floor(Math.random() * 100)}`.trim()
                    let _ce3 = `${Math.floor(Math.random() * 80000)}`.trim()
                    let _cu3 = `${Math.floor(Math.random() * 200)}`.trim()
                    let ck3 = (_ck3 * 1)
                    let cc3 = (_cc3 * 1)
                    let cp3 = (_cp3 * 1)
                    let ce3 = (_ce3 * 1)
                    let cu3 = (_cu3 * 1)
                    let Hcom3 = `
Anda telah membuka *Common crate* dan mendapatkan:${ck3 > 0 ? `\nKoin: ${ck3}` : ''}${ce3 > 0 ? `\nExp: ${ce3} *exp*` : ''}${cp3 > 0 ? `\nPotion: ${cp3} *potion*` : ''}${cc3 > 0 ? `\ncommon crate: ${cc3} *crate*` : ''}${cu3 > 0 ? `\nUncommon crate: ${cu3} *crate*` : ''}
`.trim()
                    if (global.DATABASE._data.users[m.sender].common >= 1000) {
                        global.DATABASE._data.users[m.sender].common -= 1000
                        global.DATABASE._data.users[m.sender].koin += ck3 * 1
                        global.DATABASE._data.users[m.sender].exp += ce3 * 1
                        global.DATABASE._data.users[m.sender].potion += cp3 * 1
                        global.DATABASE._data.users[m.sender].uncommon += cu3 * 1
                        global.DATABASE._data.users[m.sender].common += cc3 * 1
                        conn.reply(m.chat, Hcom3, m)
                    } else conn.reply(m.chat, 'Common crate anda tidak cukup', m)
                    break
                default:
                    return conn.reply(m.chat, Lmao, m)
            }
            break
        case 'uncommon':
            switch (jumlah) {
                case '1':
                case 'crate':
                    let _ue = `${Math.floor(Math.random() * 100)}`.trim()
                    let _uk = `${Math.floor(Math.random() * 150)}`.trim()
                    let _up = `${Math.floor(Math.random() * 2)}`.trim()
                    let _uu = `${Math.floor(Math.random() * 2)}`.trim()
                    let _uc = `${Math.floor(Math.random() * 3)}`.trim()
                    let ue = (_ue * 1)
                    let uk = (_uk * 1)
                    let up = (_up * 1)
                    let uu = (_uu * 1)
                    let uc = (_uc * 1)
                    let Hun = `
Anda telah membuka *Uncommon crate* dan mendapatkan:${um > 0 ? `\nKoin: ${um}` : ''}${ue > 0 ? `\nExp: ${ue} *exp*` : ''}${up > 0 ? `\nPotion: ${up} *potion*` : ''}${uc > 0 ? `\nCommon crate: ${uc} *crate*` : ''}${uu > 0 ? `\nUncommon crate: ${uu} *crate*` : ''}
`.trim()
                    if (global.DATABASE._data.users[m.sender].uncommon >= 1) {
                        global.DATABASE._data.users[m.sender].uncommon -= 1
                        global.DATABASE._data.users[m.sender].koin += uk * 1
                        global.DATABASE._data.users[m.sender].exp += ue * 1
                        global.DATABASE._data.users[m.sender].potion += up * 1
                        global.DATABASE._data.users[m.sender].common += uc * 1
                        global.DATABASE._data.users[m.sender].uncommon += uu * 1
                        conn.reply(m.chat, Hun, m)
                    } else conn.reply(m.chat, 'Uncommon crate anda tidak cukup', m)
                    break
                case '10':
                    let _ue1 = `${Math.floor(Math.random() * 750)}`.trim()
                    let _uk1 = `${Math.floor(Math.random() * 400)}`.trim()
                    let _up1 = `${Math.floor(Math.random() * 7)}`.trim()
                    let _uu1 = `${Math.floor(Math.random() * 4)}`.trim()
                    let _uc1 = `${Math.floor(Math.random() * 7)}`.trim()
                    let ue1 = (_ue1 * 1)
                    let uk1 = (_uk1 * 1)
                    let up1 = (_up1 * 1)
                    let uu1 = (_uu1 * 1)
                    let uc1 = (_uc1 * 1)
                    let Hun1 = `
Anda telah membuka *Uncommon crate* dan mendapatkan:${uk1 > 0 ? `\nKoin: ${uk1}` : ''}${ue1 > 0 ? `\nExp: ${ue1} *exp*` : ''}${up1 > 0 ? `\nPotion: ${up1} *potion*` : ''}${uc1 > 0 ? `\nCommon crate: ${uc1} *crate*` : ''}${uu1 > 0 ? `\nUncommon crate: ${uu1} *crate*` : ''}
`.trim()
                    if (global.DATABASE._data.users[m.sender].uncommon >= 10) {
                        global.DATABASE._data.users[m.sender].uncommon -= 10
                        global.DATABASE._data.users[m.sender].koin += uk1 * 1
                        global.DATABASE._data.users[m.sender].exp += ue1 * 1
                        global.DATABASE._data.users[m.sender].potion += up1 * 1
                        global.DATABASE._data.users[m.sender].common += uc1 * 1
                        global.DATABASE._data.users[m.sender].uncommon += uu1 * 1
                        conn.reply(m.chat, Hun1, m)
                    } else conn.reply(m.chat, 'Uncommon crate anda tidak cukup', m)
                    break
                case '100':
                    let _ue2 = `${Math.floor(Math.random() * 8000)}`.trim()
                    let _uk2 = `${Math.floor(Math.random() * 5000)}`.trim()
                    let _up2 = `${Math.floor(Math.random() * 20)}`.trim()
                    let _uu2 = `${Math.floor(Math.random() * 25)}`.trim()
                    let _uc2 = `${Math.floor(Math.random() * 50)}`.trim()
                    let ue2 = (_ue2 * 1)
                    let uk2 = (_uk2 * 1)
                    let up2 = (_up2 * 1)
                    let uu2 = (_uu2 * 1)
                    let uc2 = (_uc2 * 1)
                    let Hun2 = `
Anda telah membuka *Uncommon crate* dan mendapatkan:${uk2 > 0 ? `\nKoin: ${uk2}` : ''}${ue2 > 0 ? `\nExp: ${ue2} *exp*` : ''}${up2 > 0 ? `\nPotion: ${up2} *potion*` : ''}${uc2 > 0 ? `\nCommon crate: ${uc2} *crate*` : ''}${uu2 > 0 ? `\nUncommon crate: ${uu2} *crate*` : ''}
`.trim()
                    if (global.DATABASE._data.users[m.sender].uncommon >= 100) {
                        global.DATABASE._data.users[m.sender].uncommon -= 100
                        global.DATABASE._data.users[m.sender].koin += uk2 * 1
                        global.DATABASE._data.users[m.sender].exp += ue2 * 1
                        global.DATABASE._data.users[m.sender].potion += up2 * 1
                        global.DATABASE._data.users[m.sender].common += uc2 * 1
                        global.DATABASE._data.users[m.sender].uncommon += uu2 * 1
                        conn.reply(m.chat, Hun2, m)
                    } else conn.reply(m.chat, 'Uncommon crate anda tidak cukup', m)
                    break
                case '1000':
                    let _ue3 = `${Math.floor(Math.random() * 100000)}`.trim()
                    let _uk3 = `${Math.floor(Math.random() * 50000)}`.trim()
                    let _up3 = `${Math.floor(Math.random() * 100)}`.trim()
                    let _uu3 = `${Math.floor(Math.random() * 100)}`.trim()
                    let _uc3 = `${Math.floor(Math.random() * 200)}`.trim()
                    let ue3 = (_ue3 * 1)
                    let uk3 = (_uk3 * 1)
                    let up3 = (_up3 * 1)
                    let uu3 = (_uu3 * 1)
                    let uc3 = (_uc3 * 1)
                    let Hun3 = `
Anda telah membuka *Uncommon crate* dan mendapatkan:${uk3 > 0 ? `\nKoin: ${uk3}` : ''}${ue3 > 0 ? `\nExp: ${ue3} *exp*` : ''}${up3 > 0 ? `\nPotion: ${up3} *potion*` : ''}${uc3 > 0 ? `\nCommon crate: ${uc3} *crate*` : ''}${uu3 > 0 ? `\nUncommon crate: ${uu3} *crate*` : ''}
`.trim()
                    if (global.DATABASE._data.users[m.sender].uncommon >= 1000) {
                        global.DATABASE._data.users[m.sender].uncommon -= 1000
                        global.DATABASE._data.users[m.sender].koin += uk3 * 1
                        global.DATABASE._data.users[m.sender].exp += ue3 * 1
                        global.DATABASE._data.users[m.sender].potion += up3 * 1
                        global.DATABASE._data.users[m.sender].common += uc3 * 1
                        global.DATABASE._data.users[m.sender].uncommon += uu3 * 1
                        conn.reply(m.chat, Hun3, m)
                    } else conn.reply(m.chat, 'Uncommon crate anda tidak cukup', m)
                    break
                default:
                    return conn.reply(m.chat, Lmao ,m)
            }
            break
        case 'rare':
            switch (jumlah) {
                case '1':
                case 'crate':
                    let _re = `${Math.floor(Math.random() * 100)}`.trim()
                    let _rk = `${Math.floor(Math.random() * 250)}`.trim()
                    let _rp = `${Math.floor(Math.random() * 3)}`.trim()
                    let _ru = `${Math.floor(Math.random() * 3)}`.trim()
                    let _rc = `${Math.floor(Math.random() * 3)}`.trim()
                    let rz = (_rz * 1)
                    let re = (_re * 1)
                    let rk = (_rk * 1)
                    let rp = (_rp * 1)
                    let ru = (_ru * 1)
                    let rc = (_rc * 1)
                    let Rachat = `
Anda telah membuka *Rare crate* dan mendapatkan:${rk > 0 ? `\nKoin: ${rk}` : ''}${re > 0 ? `\nExp: ${re} *exp*` : ''}${rz > 0 ? `\nZamrud: ${rz} *zamrud*` : ''}${rp > 0 ? `\nPotion: ${rp} *potion*` : ''}${rc > 0 ? `\nCommon crate: ${rc} *crate*` : ''}${ru > 0 ? `\nUncommon crate: ${ru} *crate*` : ''}
`.trim()
                    if (global.DATABASE._data.users[m.sender].uncommon >= 1) {
                        global.DATABASE._data.users[m.sender].uncommon -= 1
                        global.DATABASE._data.users[m.sender].koin += rk * 1
                        global.DATABASE._data.users[m.sender].exp += re * 1
                        global.DATABASE._data.users[m.sender].potion += rp * 1
                        global.DATABASE._data.users[m.sender].common += rc * 1
                        global.DATABASE._data.users[m.sender].uncommon += ru * 1
                        conn.reply(m.chat, Rachat, m)
                    } else conn.reply(m.chat, 'Rare crate anda tidak cukup', m)
                    break
                case '10':
                    let _re1 = `${Math.floor(Math.random() * 2500)}`.trim()
                    let _rk1 = `${Math.floor(Math.random() * 4000)}`.trim()
                    let _rp1 = `${Math.floor(Math.random() * 7)}`.trim()
                    let _ru1 = `${Math.floor(Math.random() * 4)}`.trim()
                    let _rc1 = `${Math.floor(Math.random() * 7)}`.trim()
                    let re1 = (_re1 * 1)
                    let rk1 = (_rk1 * 1)
                    let rp1 = (_rp1 * 1)
                    let ru1 = (_ru1 * 1)
                    let rc1 = (_rc1 * 1)
                    let Rachat1 = `
Anda telah membuka *Rare crate* dan mendapatkan:${rk1 > 0 ? `\nKoin: ${rk1}` : ''}${re1 > 0 ? `\nExp: ${re1} *exp*` : ''}${rp1 > 0 ? `\nPotion: ${rp1} *potion*` : ''}${rc1 > 0 ? `\nCommon crate: ${rc1} *crate*` : ''}${ru1 > 0 ? `\nUncommon crate: ${ru1} *crate*` : ''}
`.trim()
                    if (global.DATABASE._data.users[m.sender].uncommon >= 10) {
                        global.DATABASE._data.users[m.sender].uncommon -= 10
                        global.DATABASE._data.users[m.sender].koin += rk1 * 1
                        global.DATABASE._data.users[m.sender].exp += re1 * 1
                        global.DATABASE._data.users[m.sender].potion += rp1 * 1
                        global.DATABASE._data.users[m.sender].common += rc1 * 1
                        global.DATABASE._data.users[m.sender].uncommon += ru1 * 1
                        conn.reply(m.chat, Rachat1, m)
                    } else conn.reply(m.chat, 'Rare crate anda tidak cukup', m)
                    break
                case '100':
                    let _re2 = `${Math.floor(Math.random() * 10000)}`.trim()
                    let _rk2 = `${Math.floor(Math.random() * 15000)}`.trim()
                    let _rp2 = `${Math.floor(Math.random() * 20)}`.trim()
                    let _ru2 = `${Math.floor(Math.random() * 25)}`.trim()
                    let _dc2 = `${Math.floor(Math.random() * 50)}`.trim()
                    let re2 = (_re2 * 1)
                    let rk2 = (_rk2 * 1)
                    let rp2 = (_rp2 * 1)
                    let ru2 = (_ru2 * 1)
                    let rc2 = (_rc2 * 1)
                    let Rachat2 = `
Anda telah membuka *Rare crate* dan mendapatkan:${rk2 > 0 ? `\nKoin: ${rk2}` : ''}${re2 > 0 ? `\nExp: ${re2} *exp*` : ''}${rp2 > 0 ? `\nPotion: ${rp2} *potion*` : ''}${rc2 > 0 ? `\nCommon crate: ${rc2} *crate*` : ''}${ru2 > 0 ? `\nUncommon crate: ${ru2} *crate*` : ''}
`.trim()
                    if (global.DATABASE._data.users[m.sender].uncommon >= 100) {
                        global.DATABASE._data.users[m.sender].uncommon -= 100
                        global.DATABASE._data.users[m.sender].koin += rk2 * 1
                        global.DATABASE._data.users[m.sender].exp += re2 * 1
                        global.DATABASE._data.users[m.sender].potion += rp2 * 1
                        global.DATABASE._data.users[m.sender].common += rc2 * 1
                        global.DATABASE._data.users[m.sender].uncommon += ru2 * 1
                        conn.reply(m.chat, Rachat2, m)
                    } else conn.reply(m.chat, 'Rare crate anda tidak cukup', m)
                    break
                case '1000':
                    let _re3 = `${Math.floor(Math.random() * 100000)}`.trim()
                    let _rk3 = `${Math.floor(Math.random() * 50000)}`.trim()
                    let _rp3 = `${Math.floor(Math.random() * 150)}`.trim()
                    let _ru3 = `${Math.floor(Math.random() * 120)}`.trim()
                    let _rc3 = `${Math.floor(Math.random() * 200)}`.trim()
                    let re3 = (_re3 * 1)
                    let rk3 = (_rk3 * 1)
                    let rp3 = (_rp3 * 1)
                    let ru3 = (_ru3 * 1)
                    let rc3 = (_rc3 * 1)
                    let Rachat3 = `
Anda telah membuka *Rare crate* dan mendapatkan:${rk3 > 0 ? `\nKoin: ${rk3}` : ''}${re3 > 0 ? `\nExp: ${re3} *exp*` : ''}${rp3 > 0 ? `\nPotion: ${rp3} *potion*` : ''}${rc3 > 0 ? `\nCommon crate: ${rc3} *crate*` : ''}${ru3 > 0 ? `\nUncommon crate: ${ru3} *crate*` : ''}
`.trim()
                    if (global.DATABASE._data.users[m.sender].uncommon >= 1000) {
                        global.DATABASE._data.users[m.sender].uncommon -= 1000
                        global.DATABASE._data.users[m.sender].koin += rk3 * 1
                        global.DATABASE._data.users[m.sender].exp += re3 * 1
                        global.DATABASE._data.users[m.sender].potion += rp3 * 1
                        global.DATABASE._data.users[m.sender].common += rc3 * 1
                        global.DATABASE._data.users[m.sender].uncommon += ru3 * 1
                        conn.reply(m.chat, Rachat3, m)
                    } else conn.reply(m.chat, 'Rare crate anda tidak cukup', m)
                    break
                default:
                    return conn.reply(m.chat, Lmao ,m)
            }
            break
        case 'epic':
            switch (jumlah) {
                case '1':
                case 'crate':
                    let _ek = `${Math.floor(Math.random() * 100)}`.trim()
                    let _es = `${Math.floor(Math.random() * 2000)}`.trim()
                    let _emm = `${pickRandom(['0', '0', '0', '1', '0'])}`.trim()
                    let _ee = `${Math.floor(Math.random() * 1000)}`.trim()
                    let _ep = `${Math.floor(Math.random() * 3)}`.trim()
                    let _eu = `${Math.floor(Math.random() * 3)}`.trim()
                    let _er = `${Math.floor(Math.random() * 2)}`.trim()
                    let _ec = `${Math.floor(Math.random() * 5)}`.trim()
                    let _el = `${pickRandom(['0', '0', '0', '1', '0',  '0'])}`.trim()
                    let _ed = `${Math.floor(Math.random() * 3)}`.trim()
                    let ek = (_ek * 1)
                    let es = (_es * 1)
                    let emm = (_emm * 1)
                    let ee = (_se * 1)
                    let ep = (_ep * 1)
                    let eu = (_eu * 1)
                    let er = (_er * 1)
                    let ec = (_ec * 1)
                    let el = (_el * 1)
                    let ed = (_ed * 1)
                    let Epchat = `
Anda telah membuka *Epic crate* dan mendapatkan:${ek > 0 ? `\nKoin: ${ek}` : ''}${es > 0 ? `\nSaldo: ${es}` : ''}${ee > 0 ? `\nExp: ${ee} *exp*` : ''}${ed > 0 ? `\nDiamond: ${ed} *diamond*` : ''}${ep > 0 ? `\nPotion: ${ep} *potion*` : ''}${ec > 0 ? `\nCommon crate: ${ec} *crate*` : ''}${eu > 0 ? `\nUncommon crate: ${eu} *crate*` : ''}${er > 0 ? `\nRare crate: ${er} *crate*` : ''}
`.trim()
                    if (global.DATABASE._data.users[m.sender].mythic >= 1) {
                        global.DATABASE._data.users[m.sender].mythic -= 1
                        global.DATABASE._data.users[m.sender].koin += ek * 1
                        global.DATABASE._data.users[m.sender].uang += es * 1
                        global.DATABASE._data.users[m.sender].diamond += ed * 1
                        global.DATABASE._data.users[m.sender].exp += ee * 1
                        global.DATABASE._data.users[m.sender].potion += ep * 1
                        global.DATABASE._data.users[m.sender].common += ec * 1
                        global.DATABASE._data.users[m.sender].uncommon += eu * 1
                        global.DATABASE._data.users[m.sender].rare += er * 1
                        conn.reply(m.chat, Epchat, m)
                        if (emm > 0) {
                            m.reply(`*Selamat anda mendapatkan item Langka yaitu*\n${emm} Mythic Crate`)
                            global.DATABASE._data.users[m.sender].mythic += emm * 1
                        }
                        if (el > 0) {
                            m.reply(`*Selamat anda mendapatkan item Spesial yaitu*\n${el} Legendary Crate`)
                            global.DATABASE._data.users[m.sender].legendary += el * 1
                        }
                    } else conn.reply(m.chat, 'Epic crate anda tidak cukup', m)
                    break
                case '10':
                    let _ek1 = `${Math.floor(Math.random() * 175)}`.trim()
                    let _es1 = `${Math.floor(Math.random() * 5500)}`.trim()
                    let _emm1 = `${Math.floor(Math.random() * 4)}`.trim()
                    let _ee1 = `${Math.floor(Math.random() * 3000)}`.trim()
                    let _ep1 = `${Math.floor(Math.random() * 6)}`.trim()
                    let _eu1 = `${Math.floor(Math.random() * 6)}`.trim()
                    let _ec1 = `${Math.floor(Math.random() * 11)}`.trim()
                    let _er1 = `${Math.floor(Math.random() * 5)}`.trim()
                    let _el1 = `${Math.floor(Math.random() * 1)}`.trim()
                    let _ed1 = `${Math.floor(Math.random() * 5)}`.trim()
                    let ek1 = (_ek1 * 1)
                    let es1 = (_es1 * 1)
                    let emm1 = (_emm1 * 1)
                    let ee1 = (_ee1 * 1)
                    let ep1 = (_ep1 * 1)
                    let eu1 = (_eu1 * 1)
                    let er1 = (_er1 * 1)
                    let ec1 = (_ec1 * 1)
                    let el1 = (_el1 * 1)
                    let ed1 = (_ed1 * 1)
                    let Epchat1 = `
Anda telah membuka *Epic crate* dan mendapatkan:${ek1 > 0 ? `\nKoin: ${ek1}` : ''}${es1 > 0 ? `\nSaldo: ${es1}` : ''}${ee1 > 0 ? `\nExp: ${ee1} *exp*` : ''}${ed1 > 0 ? `\nDiamond: ${ed1} *diamond*` : ''}${ep1 > 0 ? `\nPotion: ${ep1} *potion*` : ''}${ec1 > 0 ? `\nCommon crate: ${ec1} *crate*` : ''}${eu1 > 0 ? `\nUncommon crate: ${eu1} *crate*` : ''}${er1 > 0 ? `\nRare crate: ${er1} *crate*` : ''}
`.trim()
                    if (global.DATABASE._data.users[m.sender].mythic >= 10) {
                        global.DATABASE._data.users[m.sender].mythic -= 10
                        global.DATABASE._data.users[m.sender].koin += ek1 * 1
                        global.DATABASE._data.users[m.sender].saldo += es1 * 1
                        global.DATABASE._data.users[m.sender].diamond += ed1 * 1
                        global.DATABASE._data.users[m.sender].exp += ee1 * 1
                        global.DATABASE._data.users[m.sender].potion += ep1 * 1
                        global.DATABASE._data.users[m.sender].common += ec1 * 1
                        global.DATABASE._data.users[m.sender].uncommon += eu1 * 1
                        global.DATABASE._data.users[m.sender].rare += er1 * 1
                        conn.reply(m.chat, Epchat1, m)
                        if (emm1 > 0) {
                            m.reply(`*Selamat anda mendapatkan item Langka yaitu*\n${emm1} Mythic Crate`)
                            global.DATABASE._data.users[m.sender].mythic += emm1 * 1
                        }
                        if (el1 > 0) {
                            m.reply(`*Selamat anda mendapatkan item Spesial yaitu*\n${el1} Legendary Crate`)
                            global.DATABASE._data.users[m.sender].legendary += el1 * 1
                        }
                    } else conn.reply(m.chat, 'Epic crate anda tidak cukup', m)
                    break
                case '100':
                    let _ek2 = `${Math.floor(Math.random() * 19999)}`.trim()
                    let _es2 = `${Math.floor(Math.random() * 19999)}`.trim()
                    let _emm2 = `${Math.floor(Math.random() * 10)}`.trim()
                    let _ee2 = `${Math.floor(Math.random() * 30000)}`.trim()
                    let _ep2 = `${Math.floor(Math.random() * 50)}`.trim()
                    let _eu2 = `${Math.floor(Math.random() * 80)}`.trim()
                    let _er2 = `${Math.floor(Math.random() * 40)}`.trim()
                    let _ec2 = `${Math.floor(Math.random() * 150)}`.trim()
                    let _el2 = `${Math.floor(Math.random() * 6)}`.trim()
                    let _ed2 = `${Math.floor(Math.random() * 20)}`.trim()
                    let ek2 = (_ek2 * 1)
                    let es2 = (_es2 * 1)
                    let emm2 = (_emm2 * 1)
                    let ee2 = (_ee2 * 1)
                    let ep2 = (_ep2 * 1)
                    let eu2 = (_eu2 * 1)
                    let er2 = (_er2 * 1)
                    let ec2 = (_ec2 * 1)
                    let el2 = (_el2 * 1)
                    let ed2 = (_ed2 * 1)
                    let Epchat2 = `
Anda telah membuka *Epic crate* dan mendapatkan:${ek2 > 0 ? `\nKoin: ${ek2}` : ''}${es2 > 0 ? `\nSaldo: ${es2}` : ''}${ee2 > 0 ? `\nExp: ${ee2} *exp*` : ''}${ed2 > 0 ? `\nDiamond: ${ed2} *diamond*` : ''}${ep2 > 0 ? `\nPotion: ${ep2} *potion*` : ''}${ec2 > 0 ? `\nCommon crate: ${ec2} *crate*` : ''}${eu2 > 0 ? `\nUncommon crate: ${eu2} *crate*` : ''}${er2 > 0 ? `\nRare crate: ${er2} *crate*` : ''}
`.trim()
                    if (global.DATABASE._data.users[m.sender].mythic >= 100) {
                        global.DATABASE._data.users[m.sender].mythic -= 100
                        global.DATABASE._data.users[m.sender].koin += ek2 * 1
                        global.DATABASE._data.users[m.sender].uang += es2 * 1
                        global.DATABASE._data.users[m.sender].diamond += ed2 * 1
                        global.DATABASE._data.users[m.sender].exp += ee2 * 1
                        global.DATABASE._data.users[m.sender].potion += ep2 * 1
                        global.DATABASE._data.users[m.sender].common += ec2 * 1
                        global.DATABASE._data.users[m.sender].uncommon += eu2 * 1
                        global.DATABASE._data.users[m.sender].rare += er2 * 1
                        conn.reply(m.chat, Epchat2, m)
                    } else conn.reply(m.chat, 'Epic crate anda tidak cukup', m)
                    break
                case '1000':
                    let _ek3 = `${Math.floor(Math.random() * 45000)}`.trim()
                    let _es3 = `${Math.floor(Math.random() * 50000)}`.trim()
                    let _emm3 = `${Math.floor(Math.random() * 50)}`.trim()
                    let _ee3 = `${Math.floor(Math.random() * 750000)}`.trim()
                    let _ep3 = `${Math.floor(Math.random() * 70)}`.trim()
                    let _eu3 = `${Math.floor(Math.random() * 250)}`.trim()
                    let _er3 = `${Math.floor(Math.random() * 199)}`.trim()
                    let _ec3 = `${Math.floor(Math.random() * 750)}`.trim()
                    let _el3 = `${Math.floor(Math.random() * 10)}`.trim()
                    let _ed3 = `${Math.floor(Math.random() * 50)}`.trim()
                    let ek3 = (_ek3 * 1)
                    let es3 = (_es3 * 1)
                    let emm3 = (_emm3 * 1)
                    let ee3 = (_ee3 * 1)
                    let ep3 = (_ep3 * 1)
                    let eu3 = (_eu3 * 1)
                    let er3 = (_er3 * 1)
                    let ec3 = (_ec3 * 1)
                    let el3 = (_el3 * 1)
                    let ed3 = (_ed3 * 1)
                    let Epchat3 = `
Anda telah membuka *Epic crate* dan mendapatkan:${ek3 > 0 ? `\nKoin: ${ek3}` : ''}${es3 > 0 ? `\nSaldo: ${es3}` : ''}${ee3 > 0 ? `\nExp: ${ee3} *exp*` : ''}${ed3 > 0 ? `\nDiamond: ${ed3} *diamond*` : ''}${ep3 > 0 ? `\nPotion: ${ep3} *potion*` : ''}${ec3 > 0 ? `\nCommon crate: ${ec3} *crate*` : ''}${eu3 > 0 ? `\nUncommon crate: ${eu3} *crate*` : ''}${er3 > 0 ? `\nRare crate: ${er3} *crate*` : ''}
`.trim()
                    if (global.DATABASE._data.users[m.sender].mythic >= 1000) {
                        global.DATABASE._data.users[m.sender].mythic -= 1000
                        global.DATABASE._data.users[m.sender].koin += ek3 * 1
                        global.DATABASE._data.users[m.sender].uang += es3 * 1
                        global.DATABASE._data.users[m.sender].diamond += ed3 * 1
                        global.DATABASE._data.users[m.sender].exp += ee3 * 1
                        global.DATABASE._data.users[m.sender].potion += ep3 * 1
                        global.DATABASE._data.users[m.sender].common += ec3 * 1
                        global.DATABASE._data.users[m.sender].uncommon += eu3 * 1
                        conn.reply(m.chat, Epchat3, m)
                        if (emm3 > 0) {
                            m.reply(`*Selamat anda mendapatkan item Langka yaitu*\n${emm3} Mythic Crate`)
                            global.DATABASE._data.users[m.sender].mythic += emm3 * 1
                        }
                        if (el3 > 0) {
                            m.reply(`*Selamat anda mendapatkan item Spesial yaitu*\n${el3} Legendary Crate`)
                            global.DATABASE._data.users[m.sender].legendary += el3 * 1
                        }
                    } else conn.reply(m.chat, 'Epic crate anda tidak cukup', m)
                    break
                default:
                    return conn.reply(m.chat, Lmao, m)
            }
            break
        case 'mythic':
            switch (jumlah) {
                case '1':
                case 'crate':
                    let _mk = `${Math.floor(Math.random() * 200)}`.trim()
                    let _ms = `${Math.floor(Math.random() * 2000)}`.trim()
                    let _mmm = `${pickRandom(['0', '0', '1', '0', '0', '0'])}`.trim()
                    let _me = `${Math.floor(Math.random() * 1000)}`.trim()
                    let _mp = `${Math.floor(Math.random() * 5)}`.trim()
                    let _mu = `${Math.floor(Math.random() * 5)}`.trim()
                    let _mr = `${Math.floor(Math.random() * 3)}`.trim()
                    let _mf = `${pickRandom(['0', '0', '1', '0', '0'])}`.trim()
                    let _mc = `${Math.floor(Math.random() * 7)}`.trim()
                    let _ml = `${pickRandom(['0', '0', '0', '1', '0', '0', '0'])}`.trim()
                    let _md = `${Math.floor(Math.random() * 3)}`.trim()
                    let mk = (_mk * 1)
                    let ms = (_ms * 1)
                    let mmm = (_mmm * 1)
                    let me = (_me * 1)
                    let mp = (_mp * 1)
                    let mu = (_mu * 1)
                    let mr = (_mr * 1)
                    let mf = (_mf * 1) //untuk crate Epig :v
                    let mc = (_mc * 1)
                    let ml = (_ml * 1)
                    let md = (_md * 1)
                    let Mychat = `
Anda telah membuka *Mythic crate* dan mendapatkan:${mk > 0 ? `\nKoin: ${mk}` : ''}${ms > 0 ? `\nSaldo: ${ms}` : ''}${me > 0 ? `\nExp: ${me} *exp*` : ''}${md > 0 ? `\nDiamond: ${md} *diamond*` : ''}${mp > 0 ? `\nPotion: ${mp} *potion*` : ''}${mc > 0 ? `\nCommon crate: ${mc} *crate*` : ''}${mu > 0 ? `\nUncommon crate: ${mu} *crate*` : ''}${mr > 0 ? `\nRare crate: ${mr} *crate*` : ''}${mf > 0 ? `\nEpic crate: ${mf} *crate*` : ''}
`.trim()
                    if (global.DATABASE._data.users[m.sender].mythic >= 1) {
                        global.DATABASE._data.users[m.sender].mythic -= 1
                        global.DATABASE._data.users[m.sender].koin += mk * 1
                        global.DATABASE._data.users[m.sender].uang += ms * 1
                        global.DATABASE._data.users[m.sender].diamond += md * 1
                        global.DATABASE._data.users[m.sender].exp += me * 1
                        global.DATABASE._data.users[m.sender].potion += mp * 1
                        global.DATABASE._data.users[m.sender].common += mc * 1
                        global.DATABASE._data.users[m.sender].uncommon += mu * 1
                        global.DATABASE._data.users[m.sender].rare += mr * 1
                        conn.reply(m.chat, Mychat, m)
                        if (mf > 0) {
                            m.reply(`*Selamat anda mendapatkan item Langka yaitu*\n${mf} Epic Crate`)
                            global.DATABASE._data.users[m.sender].epic += mf * 1
                        }
                        if (mmm > 0) {
                            m.reply(`*Selamat anda mendapatkan item Special yaitu*\n${mmm} Mythic Crate`)
                            global.DATABASE._data.users[m.sender].mythic += mmm * 1
                        }
                        if (ml > 0) {
                            m.reply(`*Selamat anda mendapatkan item Sempurna yaitu*\n${ml} Legendary Crate`)
                            global.DATABASE._data.users[m.sender].legendary += ml * 1
                        }
                    } else conn.reply(m.chat, 'Mythic crate anda tidak cukup', m)
                    break
                case '10':
                    let _mk1 = `${Math.floor(Math.random() * 2000)}`.trim()
                    let _ms1 = `${Math.floor(Math.random() * 20000)}`.trim()
                    let _mmm1 = `${Math.floor(Math.random() * 4)}`.trim()
                    let _me1 = `${Math.floor(Math.random() * 3000)}`.trim()
                    let _mp1 = `${Math.floor(Math.random() * 10)}`.trim()
                    let _mu1 = `${Math.floor(Math.random() * 8)}`.trim()
                    let _mr1 = `${Math.floor(Math.random() * 7)}`.trim()
                    let _mf1 = `${Math.floor(Math.random() * 5)}`.trim()
                    let _mc1 = `${Math.floor(Math.random() * 11)}`.trim()
                    let _ml1 = `${Math.floor(Math.random() * 1)}`.trim()
                    let _md1 = `${Math.floor(Math.random() * 5)}`.trim()
                    let mk1 = (_mk1 * 1)
                    let ms1 = (_ms1 * 1)
                    let mmm1 = (_mmm1 * 1)
                    let me1 = (_me1 * 1)
                    let mp1 = (_mp1 * 1)
                    let mu1 = (_mu1 * 1)
                    let mr1 = (_mr1 * 1)
                    let mf1 = (_mf1 * 1) //untuk crate Epig :v
                    let mc1 = (_mc1 * 1)
                    let ml1 = (_ml1 * 1)
                    let md1 = (_md1 * 1)
                    let Mychat1 = `
Anda telah membuka *Mythic crate* dan mendapatkan:${mk1 > 0 ? `\nKoin: ${mk1}` : ''}${ms1 > 0 ? `\nSaldo: ${ms1}` : ''}${me1 > 0 ? `\nExp: ${me1} *exp*` : ''}${md1 > 0 ? `\nDiamond: ${md1} *diamond*` : ''}${mp1 > 0 ? `\nPotion: ${mp1} *potion*` : ''}${mc1 > 0 ? `\nCommon crate: ${mc1} *crate*` : ''}${mu1 > 0 ? `\nUncommon crate: ${mu1} *crate*` : ''}${mr1 > 0 ? `\nRare crate: ${mr1} *crate*` : ''}${mf1 > 0 ? `\nEpic crate: ${mf1} *crate*` : ''}
`.trim()
                    if (global.DATABASE._data.users[m.sender].mythic >= 10) {
                        global.DATABASE._data.users[m.sender].mythic -= 10
                        global.DATABASE._data.users[m.sender].koin += mk1 * 1
                        global.DATABASE._data.users[m.sender].uang += ms1 * 1
                        global.DATABASE._data.users[m.sender].diamond += md1 * 1
                        global.DATABASE._data.users[m.sender].exp += me1 * 1
                        global.DATABASE._data.users[m.sender].potion += mp1 * 1
                        global.DATABASE._data.users[m.sender].common += mc1 * 1
                        global.DATABASE._data.users[m.sender].uncommon += mu1 * 1
                        global.DATABASE._data.users[m.sender].rare += mr1 * 1
                        conn.reply(m.chat, Mychat1, m)
                        if (mf1 > 0) {
                            m.reply(`*Selamat anda mendapatkan item Langka yaitu*\n${mf1} Epic Crate`)
                            global.DATABASE._data.users[m.sender].epic += mf1 * 1
                        }
                        if (mmm1 > 0) {
                            m.reply(`*Selamat anda mendapatkan item Special yaitu*\n${mmm1} Mythic Crate`)
                            global.DATABASE._data.users[m.sender].mythic += mmm1 * 1
                        }
                        if (ml1 > 0) {
                            m.reply(`*Selamat anda mendapatkan item Sempurna yaitu*\n${ml1} Legendary Crate`)
                            global.DATABASE._data.users[m.sender].legendary += ml1 * 1
                        }
                    } else conn.reply(m.chat, 'Mythic crate anda tidak cukup', m)
                    break
                case '100':
                    let _mk2 = `${Math.floor(Math.random() * 25000)}`.trim()
                    let _ms2 = `${Math.floor(Math.random() * 79000)}`.trim()
                    let _mmm2 = `${Math.floor(Math.random() * 10)}`.trim()
                    let _me2 = `${Math.floor(Math.random() * 30000)}`.trim()
                    let _mp2 = `${Math.floor(Math.random() * 50)}`.trim()
                    let _mu2 = `${Math.floor(Math.random() * 80)}`.trim()
                    let _mr2 = `${Math.floor(Math.random() * 30)}`.trim()
                    let _mf2 = `${Math.floor(Math.random() * 20)}`.trim()
                    let _mc2 = `${Math.floor(Math.random() * 150)}`.trim()
                    let _ml2 = `${Math.floor(Math.random() * 6)}`.trim()
                    let _md2 = `${Math.floor(Math.random() * 20)}`.trim()
                    let mk2 = (_mk2 * 1)
                    let ms2 = (_ms2 * 1)
                    let mmm2 = (_mmm2 * 1)
                    let me2 = (_me2 * 1)
                    let mp2 = (_mp2 * 1)
                    let mu2 = (_mu2 * 1)
                    let mr2 = (_mr2 * 1)
                    let mf2 = (_mf2 * 1) //untuk crate Epig :v
                    let mc2 = (_mc2 * 1)
                    let ml2 = (_ml2 * 1)
                    let md2 = (_md2 * 1)
                    let Mychat2 = `
Anda telah membuka *Mythic crate* dan mendapatkan:${mk2 > 0 ? `\nKoin: ${mk2}` : ''}${ms2 > 0 ? `\nSaldo: ${ms2}` : ''}${me2 > 0 ? `\nExp: ${me2} *exp*` : ''}${md2 > 0 ? `\nDiamond: ${md2} *diamond*` : ''}${mp2 > 0 ? `\nPotion: ${mp2} *potion*` : ''}${mc2 > 0 ? `\nCommon crate: ${mc2} *crate*` : ''}${mu2 > 0 ? `\nUncommon crate: ${mu2} *crate*` : ''}${mr2 > 0 ? `\nRare crate: ${mr2} *crate*` : ''}${mf2 > 0 ? `\nEpic crate: ${mf2} *crate*` : ''}
`.trim()
                    if (global.DATABASE._data.users[m.sender].mythic >= 100) {
                        global.DATABASE._data.users[m.sender].mythic -= 100
                        global.DATABASE._data.users[m.sender].koin += mk2 * 1
                        global.DATABASE._data.users[m.sender].uang += ms2 * 1
                        global.DATABASE._data.users[m.sender].diamond += md2 * 1
                        global.DATABASE._data.users[m.sender].exp += me2 * 1
                        global.DATABASE._data.users[m.sender].potion += mp2 * 1
                        global.DATABASE._data.users[m.sender].common += mc2 * 1
                        global.DATABASE._data.users[m.sender].rare += mr2 * 1
                        global.DATABASE._data.users[m.sender].epic += mf2 * 1
                        global.DATABASE._data.users[m.sender].uncommon += mu2 * 1
                        conn.reply(m.chat, Mychat2, m)
                    } else conn.reply(m.chat, 'Mythic crate anda tidak cukup', m)
                    break
                case '1000':
                    let _mk3 = `${Math.floor(Math.random() * 95000)}`.trim()
                    let _ms3 = `${Math.floor(Math.random() * 157000)}`.trim()
                    let _mmm3 = `${Math.floor(Math.random() * 50)}`.trim()
                    let _me3 = `${Math.floor(Math.random() * 75000)}`.trim()
                    let _mp3 = `${Math.floor(Math.random() * 70)}`.trim()
                    let _mu3 = `${Math.floor(Math.random() * 250)}`.trim()
                    let _mr3 = `${Math.floor(Math.random() * 190)}`.trim()
                    let _mf3 = `${Math.floor(Math.random() * 80)}`.trim()
                    let _mc3 = `${Math.floor(Math.random() * 750)}`.trim()
                    let _ml3 = `${Math.floor(Math.random() * 10)}`.trim()
                    let _md3 = `${Math.floor(Math.random() * 50)}`.trim()
                    let mk3 = (_mk3 * 1)
                    let ms3 = (_ms3 * 1)
                    let mmm3 = (_mmm3 * 1)
                    let me3 = (_me3 * 1)
                    let mp3 = (_mp3 * 1)
                    let mu3 = (_mu3 * 1)
                    let mr3 = (_mr3 * 1)
                    let mf3 = (_mf3 * 1)
                    let mc3 = (_mc3 * 1)
                    let ml3 = (_ml3 * 1)
                    let md3 = (_md3 * 1)
                    let Mychat3 = `
Anda telah membuka *Mythic crate* dan mendapatkan:${mk3 > 0 ? `\nKoin: ${mk3}` : ''}${ms3 > 0 ? `\nSaldo: ${ms3}` : ''}${me3 > 0 ? `\nExp: ${me3} *exp*` : ''}${md3 > 0 ? `\nDiamond: ${md3} *diamond*` : ''}${mp3 > 0 ? `\nPotion: ${mp3} *potion*` : ''}${mc3 > 0 ? `\nCommon crate: ${mc3} *crate*` : ''}${mu3 > 0 ? `\nUncommon crate: ${mu3} *crate*` : ''}${mr3 > 0 ? `\nRare crate: ${mr3} *crate*` : ''}${mf3 > 0 ? `\nEpic crate: ${mf3} *crate*` : ''}
`.trim()
                    if (global.DATABASE._data.users[m.sender].mythic >= 1000) {
                        global.DATABASE._data.users[m.sender].mythic -= 1000
                        global.DATABASE._data.users[m.sender].koin += mk3 * 1
                        global.DATABASE._data.users[m.sender].uang += ms3 * 1
                        global.DATABASE._data.users[m.sender].diamond += md3 * 1
                        global.DATABASE._data.users[m.sender].exp += me3 * 1
                        global.DATABASE._data.users[m.sender].potion += mp3 * 1
                        global.DATABASE._data.users[m.sender].common += mc3 * 1
                        global.DATABASE._data.users[m.sender].uncommon += mu3 * 1
                        global.DATABASE._data.users[m.sender].rare += mr3 * 1
                        conn.reply(m.chat, Mychat3, m)
                        if (mf3 > 0) {
                            m.reply(`*Selamat anda mendapatkan item Langka yaitu*\n${mf3} Epic Crate`)
                            global.DATABASE._data.users[m.sender].epic += mf3 * 1
                        }
                        if (mmm3 > 0) {
                            m.reply(`*Selamat anda mendapatkan item Special yaitu*\n${mmm3} Mythic Crate`)
                            global.DATABASE._data.users[m.sender].mythic += mmm3 * 1
                        }
                        if (ml3 > 0) {
                            m.reply(`*Selamat anda mendapatkan item Sempurna yaitu*\n${ml3} Legendary Crate`)
                            global.DATABASE._data.users[m.sender].legendary += ml3 * 1
                        }
                    } else conn.reply(m.chat, 'Mythic crate anda tidak cukup', m)
                    break
                default:
                    return conn.reply(m.chat, Lmao, m)
            }
            break
        case 'legendary':
            switch (jumlah) {
                case '1':
                case 'crate':
                    let _lk = `${Math.floor(Math.random() * 450)}`.trim()
                    let _ls = `${Math.floor(Math.random() * 7000)}`.trim()
                    let _le = `${Math.floor(Math.random() * 550)}`.trim()
                    let _lp = `${Math.floor(Math.random() * 5)}`.trim()
                    let _lpp = `${pickRandom(['0', '1', '0'])}`.trim()
                    let _ld = `${Math.floor(Math.random() * 5)}`.trim()
                    let _lmm = `${pickRandom(['0', '1', '0', '1', '0', '0'])}`.trim()
                    let lk = (_lk * 1)
                    let ls = (_ls * 1)
                    let le = (_le * 1)
                    let lp = (_lp * 1) 
                    let lpp = (_lpp * 1)       
                    let ld = (_ld * 1) 
                    let lmm = (_lmm * 1)
                    let Lechat = `
Anda telah membuka *Legendary crate* dan mendapatkan:${lk > 0 ? `\nKoin: ${lk}` : ''}${ls > 0 ? `\nSaldo: ${ls}` : ''}${le > 0 ? `\nExp: ${le} *exp*` : ''}${ld > 0 ? `\nDiamond: ${ld} *diamond*` : ''}${lp > 0 ? `\nPotion: ${lp} *potion*` : ''}
`.trim()  
                    if (global.DATABASE._data.users[m.sender].legendary >= 1) {
                        global.DATABASE._data.users[m.sender].legendary -= 1
                        global.DATABASE._data.users[m.sender].koin += lk * 1
                        global.DATABASE._data.users[m.sender].uang += ls * 1
                        global.DATABASE._data.users[m.sender].diamond += ld * 1
                        global.DATABASE._data.users[m.sender].exp += le * 1
                        global.DATABASE._data.users[m.sender].potion += lp * 1
                        conn.reply(m.chat, Lechat, m)
                        if (lmm > 0) {
                            m.reply(`*Selamat anda mendapatkan item Special yaitu*\n${lmm} Mythic Crate`)
                            global.DATABASE._data.users[m.sender].mythic += lmm * 1
                        }
                        if (lpp > 0) {
                             m.reply(`*Selamat anda mendapatkan item Pet yaitu*\n${lpp} Pet Crate`)
                            global.DATABASE._data.users[m.sender].pet += lpp * 1
                        }
                    } else conn.reply(m.chat, 'Legendary crate anda tidak cukup', m)
                    break
                case '10':
                    let _lk1 = `${Math.floor(Math.random() * 9999)}`.trim()
                    let _ls1 = `${Math.floor(Math.random() * 28000)}`.trim()
                    let _le1 = `${Math.floor(Math.random() * 15000)}`.trim()
                    let _lp1 = `${Math.floor(Math.random() * 30)}`.trim()
                    let _lpp1 = `${Math.floor(Math.random() * 6)}`.trim()
                    let _ld1 = `${Math.floor(Math.random() * 16)}`.trim()
                    let _lmm1 = `${Math.floor(Math.random() * 4)}`.trim()
                    let lk1 = (_lk1 * 1)
                    let ls1 = (_ls1 * 1)
                    let le1 = (_le1 * 1)
                    let lp1 = (_lp1 * 1) 
                    let lpp1 = (_lpp1 * 1)       
                    let ld1 = (_ld1 * 1) 
                    let lmm1 = (_lmm1 * 1)
                    let Lechat1 = `
Anda telah membuka *Legendary crate* dan mendapatkan:${lk1 > 0 ? `\nKoin: ${lk1}` : ''}${ls1 > 0 ? `\nSaldo: ${ls1}` : ''}${le1 > 0 ? `\nExp: ${le1} *exp*` : ''}${ld1 > 0 ? `\nDiamond: ${ld1} *diamond*` : ''}${lp1 > 0 ? `\nPotion: ${lp1} *potion*` : ''}
`.trim()  
                    if (global.DATABASE._data.users[m.sender].legendary >= 10) {
                        global.DATABASE._data.users[m.sender].legendary -= 10
                        global.DATABASE._data.users[m.sender].koin += lk1 * 1
                        global.DATABASE._data.users[m.sender].uang += ls1 * 1
                        global.DATABASE._data.users[m.sender].diamond += ld1 * 1
                        global.DATABASE._data.users[m.sender].exp += le1 * 1
                        global.DATABASE._data.users[m.sender].potion += lp1 * 1
                        conn.reply(m.chat, Lechat1, m)
                        if (lmm1 > 0) {
                            m.reply(`*Selamat anda mendapatkan item Special yaitu*\n${lmm1} Mythic Crate`)
                            global.DATABASE._data.users[m.sender].mythic += lmm1 * 1
                        }
                        if (lpp1 > 0) {
                             m.reply(`*Selamat anda mendapatkan item Pet yaitu*\n${lpp1} Pet Crate`)
                            global.DATABASE._data.users[m.sender].pet += lpp1 * 1
                        }
                    } else conn.reply(m.chat, 'Legendary crate anda tidak cukup', m)
                    break
                case '100':
                    let _lk2 = `${Math.floor(Math.random() * 155000)}`.trim()
                    let _ls2 = `${Math.floor(Math.random() * 77000)}`.trim()
                    let _le2 = `${Math.floor(Math.random() * 200000)}`.trim()
                    let _lp2 = `${Math.floor(Math.random() * 100)}`.trim()
                    let _lpp2 = `${Math.floor(Math.random() * 51)}`.trim()
                    let _ld2 = `${Math.floor(Math.random() * 50)}`.trim()
                    let _lmm2 = `${Math.floor(Math.random() * 11)}`.trim()
                    let lk2 = (_lk2 * 1)
                    let ls2 = (_ls2 * 1)
                    let le2 = (_le2 * 1)
                    let lp2 = (_lp2 * 1) 
                    let lpp2 = (_lpp2 * 1)       
                    let ld2 = (_ld2 * 1) 
                    let lmm2 = (_lmm2 * 1)
                    let Lechat2 = `
Anda telah membuka *Legendary crate* dan mendapatkan:${lk2 > 0 ? `\nKoin: ${lk2}` : ''}${ls2 > 0 ? `\nSaldo: ${ls2}` : ''}${le2 > 0 ? `\nExp: ${le2} *exp*` : ''}${ld2 > 0 ? `\nDiamond: ${ld2} *diamond*` : ''}${lp2 > 0 ? `\nPotion: ${lp2} *potion*` : ''}
`.trim()  
                    if (global.DATABASE._data.users[m.sender].legendary >= 100) {
                        global.DATABASE._data.users[m.sender].legendary -= 100
                        global.DATABASE._data.users[m.sender].koin += lk2 * 1
                        global.DATABASE._data.users[m.sender].uang += ls2 * 1
                        global.DATABASE._data.users[m.sender].diamond += ld2 * 1
                        global.DATABASE._data.users[m.sender].exp += le2 * 1
                        global.DATABASE._data.users[m.sender].potion += lp2 * 1
                        conn.reply(m.chat, Lechat2, m)
                        if (lmm2 > 0) {
                            m.reply(`*Selamat anda mendapatkan item Special yaitu*\n${lmm2} Mythic Crate`)
                            global.DATABASE._data.users[m.sender].mythic += lmm2 * 1
                        }
                        if (lpp2 > 0) {
                             m.reply(`*Selamat anda mendapatkan item Pet yaitu*\n${lpp2} Pet Crate`)
                            global.DATABASE._data.users[m.sender].pet += lpp2 * 1
                        }
                    } else conn.reply(m.chat, 'Legendary crate anda tidak cukup', m)
                    break
                case '1000':
                    let _lk3 = `${Math.floor(Math.random() * 500000)}`.trim()
                    let _ls3 = `${Math.floor(Math.random() * 180000)}`.trim()
                    let _le3 = `${Math.floor(Math.random() * 5000000)}`.trim()
                    let _lp3 = `${Math.floor(Math.random() * 500)}`.trim()
                    let _lpp3 = `${Math.floor(Math.random() * 222)}`.trim()
                    let _ld3 = `${Math.floor(Math.random() * 250)}`.trim()
                    let _lmm3 = `${Math.floor(Math.random() * 111)}`.trim()
                    let lk3 = (_lk3 * 1)
                    let ls3 = (_ls3 * 1)
                    let le3 = (_le3 * 1)
                    let lp3 = (_lp3 * 1) 
                    let lpp3 = (_lpp3 * 1)       
                    let ld3 = (_ld3 * 1) 
                    let lmm3 = (_lmm3 * 1)
                    let Lechat3 = `
Anda telah membuka *Legendary crate* dan mendapatkan:${lk3 > 0 ? `\nKoin: ${lk3}` : ''}${ls3 > 0 ? `\nSaldo: ${ls3}` : ''}${le3 > 0 ? `\nExp: ${le3} *exp*` : ''}${ld3 > 0 ? `\nDiamond: ${ld3} *diamond*` : ''}${lp3 > 0 ? `\nPotion: ${lp3} *potion*` : ''}
`.trim()  
                    if (global.DATABASE._data.users[m.sender].legendary >= 1000) {
                        global.DATABASE._data.users[m.sender].legendary -= 1000
                        global.DATABASE._data.users[m.sender].koin += lk3 * 1
                        global.DATABASE._data.users[m.sender].uang += ls3 * 1
                        global.DATABASE._data.users[m.sender].diamond += ld3 * 1
                        global.DATABASE._data.users[m.sender].exp += le3 * 1
                        global.DATABASE._data.users[m.sender].potion += lp3 * 1
                        conn.reply(m.chat, Lechat3, m)
                        if (lmm3 > 0) {
                            m.reply(`*Selamat anda mendapatkan item Special yaitu*\n${lmm3} Mythic Crate`)
                            global.DATABASE._data.users[m.sender].mythic += lmm3 * 1
                        }
                        if (lpp3 > 0) {
                             m.reply(`*Selamat anda mendapatkan item Pet yaitu*\n${lpp3} Pet Crate`)
                            global.DATABASE._data.users[m.sender].pet += lpp3 * 1
                        }
                    } else conn.reply(m.chat, 'Legendary crate anda tidak cukup', m)
                    break
                default:
                    return conn.reply(m.chat, Lmao, m)
            }
            break
        case 'pet':
            let _mknp = pickRandom([1, 2, 1, 5, 3, 2, 1, 2, 4, 1, 3, 5, 2, 4, 3])
            let mknp = (_mknp * 1)
            let kucing = global.DATABASE._data.users[m.sender].kucing
            let anjing = global.DATABASE._data.users[m.sender].anjing
            let rubah = global.DATABASE._data.users[m.sender].rubah
            let kuda = global.DATABASE._data.users[m.sender].kuda
            let _pet = `${pickRandom(['kucing', 'anjing', 'rubah', 'kuda'])}`.trim()
            if (global.DATABASE._data.users[m.sender].pet > 0) { 
                global.DATABASE._data.users[m.sender].pet -= 1
                if (_pet == 'kucing' && kucing > 0) {
                    global.DATABASE._data.users[m.sender].potion += 2
                    global.DATABASE._data.users[m.sender].makananpet += mknp * 1
                    conn.reply(m.chat, `Anda sudah memiliki pet ${_pet}, Hadiahmu diganti dengan 2 potion${mknp > 0 ? ` Dan ${mknp} Makanan Pet` : ''}`, m)
                } else if (_pet == 'kucing' && kucing == 0) {
                    global.DATABASE._data.users[m.sender].kucing += 1
                    global.DATABASE._data.users[m.sender].makananpet += mknp * 1
                    conn.reply(m.chat, `*Selamat Anda mendapatkan pet${_pet} ${mknp > 0 ? ` Dan ${mknp} Makanan Pet*` : '*'}`, m)
                } else if (_pet == 'anjing' && anjing > 0) {
                    global.DATABASE._data.users[m.sender].potion += 2
                    global.DATABASE._data.users[m.sender].makananpet += mknp * 1
                    conn.reply(m.chat, `Anda sudah memiliki pet ${_pet}, Hadiahmu diganti dengan 2 potion${mknp > 0 ? ` Dan ${mknp} Makanan Pet` : ''}`, m)
                } else if (_pet == 'anjing' && anjing == 0) {
                    global.DATABASE._data.users[m.sender].anjing += 1
                    global.DATABASE._data.users[m.sender].makananpet += mknp * 1
                    conn.reply(m.chat, `*Selamat Anda mendapatkan pet${_pet} ${mknp > 0 ? ` Dan ${mknp} Makanan Pet*` : '*'}`, m)
                } else if (_pet == 'rubah' && rubah > 0) {
                    global.DATABASE._data.users[m.sender].potion += 2
                    global.DATABASE._data.users[m.sender].makananpet += mknp * 1
                    conn.reply(m.chat, `Anda sudah memiliki pet ${_pet}, Hadiahmu diganti dengan 2 potion ${mknp > 0 ? `Dan ${mknp} Makanan Pet` : ''}`, m)
                } else if (_pet == 'rubah' && rubah == 0) {
                    global.DATABASE._data.users[m.sender].rubah += 1
                    global.DATABASE._data.users[m.sender].makananpet += mknp * 1
                    conn.reply(m.chat, `*Selamat Anda mendapatkan pet ${_pet}${mknp > 0 ? ` Dan ${mknp} Makanan Pet*` : '*'}`, m)
                } else if (_pet == 'kuda' && kuda  > 0) {
                    global.DATABASE._data.users[m.sender].potion += 2
                    global.DATABASE._data.users[m.sender].makananpet += mknp * 1
                    conn.reply(m.chat, `Anda sudah memiliki pet ${_pet}, Hadiahmu diganti dengan 2 potion${mknp > 0 ? ` Dan ${mknp} Makanan Pet` : ''}`, m)
                } else if (_pet == 'kuda' && kuda == 0) {
                    global.DATABASE._data.users[m.sender].kuda += 1
                    global.DATABASE._data.users[m.sender].makananpet += mknp * 1
                    conn.reply(m.chat, `*Selamat Anda mendapatkan pet ${_pet}${mknp > 0 ? ` Dan ${mknp} Makanan Pet*` : '*'}`, m)
                } else {
                    global.DATABASE._data.users[m.sender].makananpet += mknp * 1
                    m.reply(pickRandom(['Anda kurang beruntung', 'Coba buka lagi lain kali, karena gk dapet pet', 'kasian gk dapet pet', 'Mungkin lagi gk hoki dan gk dapet pet', 'wkwkkwkwke']) + '. Anda hanya mendapatkan *' + mknp + '* makanan pet')
                }
            } else m.reply('Pet Crate kamu tidak cukup')
            break
        default:
            return conn.reply(m.chat, bruh, m)
    }
  } catch (e) {
      console.log(e)
      conn.reply(m.chat, `${usedPrefix}open <crate name> < 1 | 10 | 100 | 1000 >\n\nContoh penggunaan: *${usedPrefix}open common 10*\n\nlist crate:\n*common*\n*uncommon*\n*rare*\n*epic*\n*mythic*\n*legendary*`, m)
      if (DevMode) {
        for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
            conn.sendMessage(jid, 'Open.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
        }
    }
  }
}
handler.command = /^(open|buka|gacha)$/i
handler.register = true

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
