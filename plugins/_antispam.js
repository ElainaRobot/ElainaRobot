export async function all(m) {
    if (!m.message)
        return
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 5) {
            if (this.spam[m.sender].count > 5) {
                global.db.data.users[m.sender].banned = true
                m.reply('*𝘕𝘖𝘔𝘖𝘙 𝘒𝘈𝘔𝘜 𝘋𝘐 𝘉𝘈𝘕 𝘚𝘐𝘓𝘈𝘏 𝘒𝘈𝘕 𝘏𝘜𝘉𝘜𝘕𝘎𝘐𝘕 𝘖𝘞𝘕𝘌𝘙 𝘜𝘕𝘛𝘜𝘒 𝘋𝘐 𝘜𝘕𝘉𝘈𝘕*')
            }
            this.spam[m.sender].count = 0
            this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
        }
    }
    else
        this.spam[m.sender] = {
            jid: m.sender,
            count: 0,
            lastspam: 0
        }
}