let handler = function (m) {
  //ini hanyalah contoh, jangan di uncomment_-
  //Example this.sendContact(m.chat, '6281515860089', 'Nurutomo', m)
  this.sendContact(m.chat, '62887436568613', 'ブラック', m)
}

handler.command = /^(owner|creator)$/i
handler.group = false
handler.register = false

module.exports = handler
