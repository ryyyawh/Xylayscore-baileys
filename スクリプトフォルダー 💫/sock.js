import {
    makeWASocket,
     DisconnectReason,
     fetchLatestBaileysVersion,
     makeInMemoryStore,
     makeCacheableSignalKeyStore
   } from '@whiskeysockets/baileys';
   import P from 'pino';

import { Boom } from '@hapi/boom';
import logger from '../フォルダレイ 🎩/logger.js';

const startSock = async ({ state, saveCreds, logger }) => {
  const { version } = await fetchLatestBaileysVersion();

  const sock = makeWASocket({
    version,
    logger,
    printQRInTerminal: true,
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(state.keys, logger),
    },
    generateHighQualityLinkPreview: true,
    markOnlineOnConnect: true,
  });

  sock.ev.on('connection.update', async ({ connection, lastDisconnect }) => {
    if (connection === 'close') {
      const shouldReconnect = lastDisconnect?.error instanceof Boom &&
        lastDisconnect.error.output?.statusCode !== DisconnectReason.loggedOut;

      logger.info('connection closed. Reconnecting:', shouldReconnect);
      if (shouldReconnect) {
        startSock({ state, saveCreds, logger });
      }
    } else if (connection === 'open') {
      logger.info('connection opened');
    }
  });

  sock.ev.on('creds.update', saveCreds);
  return sock;
};

export default startSock;