const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth({
        dataPath: 'whatsapp_js_data'
    })
});
exports.client = client;
client.on('ready', () => {
    console.log('Client is ready!');
});
client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});
client.initialize();
