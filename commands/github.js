const fs = require('fs');
const path = require('path');

async function githubCommand(sock, chatId, message) {
  try {
    // Create a fancy styled message
    let txt = `
╭━━━━━━━━━━━━━━━━━━╮
┃  *🔒 𝑷𝒓𝒊𝒗𝒂𝒕𝒆 𝑷𝒓𝒐𝒋𝒆𝒄𝒕 🔒*  ┃
╰━━━━━━━━━━━━━━━━━━╯

💫 𝑻𝒉𝒊𝒔 𝒊𝒔 𝒂 𝒑𝒓𝒊𝒗𝒂𝒕𝒆 𝒑𝒓𝒐𝒋𝒆𝒄𝒕

➤ 𝐃𝐌 𝐭𝐡𝐞 𝐨𝐰𝐧𝐞𝐫 𝐭𝐨 𝐠𝐞𝐭 𝐭𝐡𝐞 𝐫𝐞𝐩𝐨

➤ 𝐈𝐟 𝐲𝐨𝐮 𝐰𝐚𝐧𝐭 𝐭𝐨 𝐚𝐝𝐝 𝐭𝐡𝐞 𝐛𝐨𝐭 𝐢𝐧 
   𝐲𝐨𝐮𝐫 𝐠𝐫𝐨𝐮𝐩, 𝐃𝐌 𝐭𝐡𝐞 𝐛𝐨𝐭 𝐧𝐮𝐦𝐛𝐞𝐫 
   𝐰𝐢𝐭𝐡 𝐲𝐨𝐮𝐫 𝐠𝐫𝐨𝐮𝐩 𝐥𝐢𝐧𝐤

╭━━━━━━━━━━━━━━━━━━╮
┃    *Noah-𝑴𝑫*    ┃
╰━━━━━━━━━━━━━━━━━━╯`;

    // Use the local asset image
    const imgPath = path.join(__dirname, '../assets/bot_image.jpg');
    
    if (fs.existsSync(imgPath)) {
      const imgBuffer = fs.readFileSync(imgPath);
      await sock.sendMessage(chatId, { image: imgBuffer, caption: txt }, { quoted: message });
    } else {
      // If image doesn't exist, just send text
      await sock.sendMessage(chatId, { text: txt }, { quoted: message });
    }
  } catch (error) {
    await sock.sendMessage(chatId, { text: '❌ Error processing command.' }, { quoted: message });
  }
}

module.exports = githubCommand;
