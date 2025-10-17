const { client } = require('./client');
const { tasks } = require('./user_data');

client.on('message_create', message => {
    if (message.body === '!duty') {
        let day = new Date().getDay();
        console.log("HERE!!")
        console.log(message.from)
        client.sendMessage(message.from, 'dishes on ' + tasks[day].person);
    }

    else if (message.body === '!table') {
        msg = ''
        tasks.forEach((e) => {
            msg = msg + (
                e.day + " : " + e.person + "\n"
            )
        })

        client.sendMessage(message.from, msg)

    }

    else if (message.body === '!ping') {
        // send back "pong" to the chat  the message was sent in
        client.sendMessage(message.from, 'pong');
    }
});
