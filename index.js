import connectToWhatsApp from './スクリプトフォルダー 💫/sock.js';
import { useMultiFileAuthState } from '@whiskeysockets/baileys';
import logger from './フォルダレイ 🎩/logger.js';
import bindMessageHandler from './Xylays — это разработчик👨‍💻/msg.js';
import chalk from 'chalk';

console.clear();
console.log(
  chalk.blue(`
XYLAYS BAILEYS SUCCES CONNECTED THANKS FOR USE
XYLAYS BAILEYS SUCCES CONNECTED THANKS FOR USE
XYLAYS BAILEYS SUCCES CONNECTED THANKS FOR USE
XYLAYS BAILEYS SUCCES CONNECTED THANKS FOR USE
XYLAYS BAILEYS SUCCES CONNECTED THANKS FOR USE
XYLAYS BAILEYS SUCCES CONNECTED THANKS FOR USE
XYLAYS BAILEYS SUCCES CONNECTED THANKS FOR USE
XYLAYS BAILEYS SUCCES CONNECTED THANKS FOR USE
  `)
);
console.log(chalk.green('[ SYSTEM ]'), 'Starting Your bot...\n');

const startSock = async () => {
  const { state, saveCreds } = await useMultiFileAuthState('./сеансов 🎰');
  const sock = await connectToWhatsApp({ state, saveCreds, logger });

  bindMessageHandler(sock);
  sock.ev.on('creds.update', saveCreds);
};

startSock();