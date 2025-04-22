const { default: makeWASocket, useMultiFileAuthState } = require('Xylayscore-baileys');
const path = require('path');

async function connectToWhatsApp(token) {
  const { state, saveCreds } = await useMultiFileAuthState(path.join(__dirname, '../sessions', token));
  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: true, // tampilkan QR kalo belum login
  });

  sock.ev.on('creds.update', saveCreds);

  return sock;
}

module.exports = connectToWhatsApp;
