const { client } = require('./client');
const { task_group_id, tasks } = require('./config');

async function sendTaskMessage() {
    let day = new Date().getDay();
    console.log("got day!")

    await client.sendMessage(task_group_id, 'dishes on ' + tasks[day].person);
}

client.on('ready', () => {
    sendTaskMessage().then(() => {
        setTimeout(client.destroy, 7000)
    });
});

