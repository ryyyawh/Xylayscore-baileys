const { default: makeWASocket, useMultiFileAuthState } = require('@whiskeysockets/baileys');
const path = require('path');

const connectToWhatsApp = async (token) => {
  const sessionPath = path.resolve(`./sessions/${token}`);
  const { state, saveCreds } = await useMultiFileAuthState(sessionPath);

  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: true,
  });

  sock.ev.on('creds.update', saveCreds);
  return sock;
};

module.exports = connectToWhatsApp;