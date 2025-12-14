const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
╭────「 *${settings.botName || 'Noah-MD'}* 」────╮
│ ✦ Version: ${settings.version || '1.0.0'}
│ ✦ Creator: Noah ezzy
╰────────────────────────╯

╔══《 *COMMAND INDEX* 》══╗

╭─❖ *ESSENTIALS* ❖─╮
│ ⌬ .help | .menu
│ ⌬ .ping | .alive
│ ⌬ .owner | .jid
│ ⌬ .tts | .url
╰─────────────────╯

╭─❖ *MEDIA & FUN* ❖─╮
│ ⌬ .joke | .quote 
│ ⌬ .fact | .news
│ ⌬ .meme | .8ball
│ ⌬ .flirt | .shayari
│ ⌬ .wasted | .ship 
│ ⌬ .compliment | .insult
╰─────────────────╯

╭─❖ *GROUP ADMIN* ❖─╮
│ ⌬ .ban | .unban
│ ⌬ .promote | .demote
│ ⌬ .mute | .unmute
│ ⌬ .kick | .warn
│ ⌬ .tagall | .hidetag
│ ⌬ .antilink | .antitag
│ ⌬ .welcome | .goodbye
╰─────────────────╯

╭─❖ *STICKERS & IMAGES* ❖─╮
│ ⌬ .sticker | .crop
│ ⌬ .take | .blur
│ ⌬ .removebg | .remini
│ ⌬ .simage | .emojimix
│ ⌬ .attp | .tgsticker
╰─────────────────╯

╭─❖ *DOWNLOADS* ❖─╮
│ ⌬ .play | .song
│ ⌬ .instagram | .facebook
│ ⌬ .tiktok | .spotify
│ ⌬ .video | .ytmp4
╰─────────────────╯

╭─❖ *AI TOOLS* ❖─╮
│ ⌬ .gpt | .gemini
│ ⌬ .imagine | .flux
│ ⌬ .sora 
╰─────────────────╯

╭─❖ *GAMES* ❖─╮
│ ⌬ .tictactoe | .hangman
│ ⌬ .trivia | .truth
│ ⌬ .dare
╰─────────────────╯

╭─❖ *TEXT EFFECTS* ❖─╮
│ ⌬ .metallic | .ice
│ ⌬ .snow | .neon
│ ⌬ .matrix | .thunder
│ ⌬ .fire | .glitch
│ ⌬ .blackpink | .purple
╰─────────────────╯

╭─❖ *ANIME* ❖─╮
│ ⌬ .nom | .kiss
│ ⌬ .pat | .hug
│ ⌬ .cry | .wink
│ ⌬ .poke | .facepalm
╰─────────────────╯

╭─❖ *MISC EFFECTS* ❖─╮
│ ⌬ .heart | .lgbt
│ ⌬ .horny | .circle
│ ⌬ .lolice | .jail
│ ⌬ .glass | .triggered
│ ⌬ .comrade | .passed
╰─────────────────╯

╭─❖ *OWNER TOOLS* ❖─╮
│ ⌬ .mode | .settings
│ ⌬ .update | .setpp
│ ⌬ .clearsession | .cleartmp
│ ⌬ .autoreact | .autotyping
│ ⌬ .autostatus | .autoread
│ ⌬ .anticall | .pmblocker
╰─────────────────╯

╭─❖ *PIES GALLERY* ❖─╮
│ ⌬ .pies | .china
│ ⌬ .japan | .korea
│ ⌬ .indonesia | .hijab
╰─────────────────╯

╭─❖ *GITHUB* ❖─╮
│ ⌬ .git | .github
│ ⌬ .sc | .repo
╰─────────────────╯

╔══《 *USAGE INFO* 》══╗
✦ Type .help <command> for detailed usage
✦ Reply to media with commands for effects
✦ Admin commands require bot to be admin

*Tip: Use .ping to check bot status*
`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363161513685998@newsletter',
                        newsletterName: 'Noah MD',
                        serverMessageId: -1
                    }
                }
            },{ quoted: message });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363161513685998@newsletter',
                        newsletterName: 'Noah MD by ezzy',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
