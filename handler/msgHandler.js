const menuCommand = require('../command/menu');

const msgHandler = (sock) => {
  sock.ev.on('messages.upsert', async ({ messages }) => {
    const msg = messages[0];
    if (!msg.message || msg.key.fromMe) return;

    const text = msg.message?.conversation || msg.message?.extendedTextMessage?.text;

    if (text === 'menu') {
      await menuCommand(sock, msg);
    }
  });
};

module.exports = msgHandler;