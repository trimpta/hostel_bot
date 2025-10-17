const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const { tasks } = require('./user_data');
const { task_group_id } = require('./config');

const client = new Client({
    authStrategy: new LocalAuth({
        dataPath: 'whatsapp_js_data'
    })
});


client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.initialize();

function sendTaskMessage() {
    let day = new Date().getDay();
    console.log("got day!")

    let userphone = tasks[day].num;
    console.log("got userPhone! " + userphone);


    // client.sendMessage(, message);
    client.sendMessage(task_group_id, 'dishes on ' + tasks[day].person);
}

client.on('ready', () => {
    sendTaskMessage();
});