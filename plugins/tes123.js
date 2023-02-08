import fetch import 'node-fetch'

let handler = async (m, { conn }) => {
let pp = hwaifu.getRandom()
conn.send2ButtonDoc(m.chat, 'Aktif !!', botdate, '𝐋𝐢𝐬𝐭𝐌𝐞𝐧𝐮', '.listmenu', '𝐃𝐚𝐬𝐛𝗼𝐚𝐫𝐝', '.db', fkontak, {
			contextInfo: {
				forwardingScore: fsizedoc,
				externalAdReply: {
                    body: '© 𝗘𝗹𝗮𝗶𝗻𝗮-𝘉𝘰𝘵𝘻',
    containsAutoReply: true,
    mediaType: 1,
    mediaUrl: hwaifu.getRandom(), 
    renderLargerThumbnail: true,
    showAdAttribution: true,
    sourceId: '© 𝗘𝗹𝗮𝗶𝗻𝗮-𝘉𝘰𝘵𝘻',
    sourceType: 'PDF',
    previewType: 'PDF',
    sourceUrl: sgc,
    thumbnail: await(await fetch(pp)).buffer(),
    thumbnailUrl: sgc,
    title: bottime  
				}
			}
})
}
handler.command = ['tes']

export default handler