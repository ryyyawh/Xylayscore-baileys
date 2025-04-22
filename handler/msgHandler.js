module.exports = (sock) => {
  sock.ev.on('messages.upsert', async ({ messages }) => {
    const msg = messages[0];
    if (!msg.message) return;

    const from = msg.key.remoteJid;
    const text = msg.message?.conversation || msg.message?.extendedTextMessage?.text;

    if (text === '!ping') {
      await sock.sendMessage(from, { text: 'pong! dari Xylays' });
    }
  });
};
