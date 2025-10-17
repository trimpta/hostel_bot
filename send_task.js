const { client } = require('./client');
const { task_group_id, tasks } = require('./config');

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