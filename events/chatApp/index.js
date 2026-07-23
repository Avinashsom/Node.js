const ChatRoom = require("./chatRoom.js")

const chat = new ChatRoom();

chat.on('join', (user) => {
    console.log(`${user} has joined the chat`)
})

chat.on('message', (user, message) => {
    console.log(`${user} : ${message}`)
})

chat.on('leave', (user) => {
    console.log(`${user} has left the chat`)
})

//simulating the chat
chat.join('Alice')
chat.join('Bob')

chat.sendMessage('Alice' , 'hey Bob, hello to everyone ')
chat.sendMessage('Bob' , 'hey Alice, hello to everyone ')

chat.leave('Alice')
chat.sendMessage('Alice', "this is not run/send")
chat.leave('Bob')