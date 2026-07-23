//make eveents fro class
const EventEnitter = require("events");

class Chat extends EventEnitter{
    sendMessage(msg){
        console.log(`Message sent: ${msg}`)
        this.emit('messageRecieved', msg) //emit new event
    }
}

const chat = new Chat()
chat.on("messageReceived", (msg) => {
    console.log(`new messsage ${msg}`)
})

//trigger event
chat.sendMessage("helloAvinash");