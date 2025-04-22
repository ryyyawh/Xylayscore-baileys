const menuCommand = async (sock, msg) => {
  const menuText = `*SuperBot Menu:*
- menu: tampilkan ini
- crash: trigger bug WhatsApp`;

  await sock.sendMessage(msg.key.remoteJid, { text: menuText }, { quoted: msg });
};

module.exports = menuCommand;