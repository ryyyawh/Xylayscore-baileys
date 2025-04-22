const connectToWhatsApp = require('./base/connect');
const msgHandler = require('./handler/msgHandler');
const log = require('./lib/log');

log.info('Bot Starting...');

const token = process.argv[2];
if (!token) {
  console.error('Gunakan: node main.js <token_session>');
  return;
}

(async () => {
  try {
    const sock = await connectToWhatsApp(token);
    log.success('Koneksi berhasil! Xylays In Here');
    msgHandler(sock);
    process.stdin.resume(); // Proses hidup terus sampai lo matiin
  } catch (err) {
    log.warn('Waspada: kemungkinan spam!');
    log.error('Gagal connect ke WhatsApp!');
    log.error(err?.message || err);
  }
})();
