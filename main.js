const connectToWhatsApp = require('./base/connect');
const msgHandler = require('./handler/msgHandler');
const log = require('./lib/log');

log.info('Bot Starting...');
log.success('Koneksi berhasil! Xylays In Here');
log.warn('Waspada: kemungkinan spam!');
log.error('Gagal connect ke WhatsApp!');

const token = process.argv[2];
if (!token) {
  console.error('Gunakan: node main.js <token_session>');
  process.exit();
}

(async () => {
  const sock = await connectToWhatsApp(token);
  msgHandler(sock);
})();