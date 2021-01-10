let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: Drawl Nag
╠➥ Script: @Ferdiardian
║
╠➥ Github: https://github.com/ferdboy/Arya-Bot
╠➥ Instagram: @ferdi_ardian21
╠➥ YouTube: NOTHING
║
╠═〘 Thanks To 〙 ═
╠➥ Ahmad sururi
╠➥ Jamil
╠➥ Harun
╠➥ Dan kawan yang lain :)
║
╠═〘 DONASI 〙 ═
╠➥ Tsel: 0821-6936-9877
╠➥ Tsel: 0821-6936-9877
╠➥ Tsel: 0815-6936-9877
║
║>Request? Wa.me/6282169369877
║
╠═〘 NfQ BOT 〙 ═
`.trim(), m)
}
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

