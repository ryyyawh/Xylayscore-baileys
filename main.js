const connectToWhatsApp = require('./base/connect');
const msgHandler = require('./handler/msgHandler');
const log = require('./lib/log');

log.info('Bot Starting...');

const token = process.argv[2];
if (!token) {
  console.error('Gunakan: node main.js <token_session>');
  return; // Gak pakai process.exit()
}

(async () => {
  try {
    const sock = await connectToWhatsApp(token);
    log.success('Koneksi berhasil! Xylays In Here');
    msgHandler(sock);
  } catch (err) {
    log.warn('Waspada: kemungkinan spam!');
    log.error('Gagal connect ke WhatsApp!');
    log.error(err?.message || err);
    // Gak exit, biar container tetap hidup
  }
})();
