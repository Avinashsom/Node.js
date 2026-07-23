//create events and using them
const console = require("console");
const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

//add listener to events
eventEmitter.on("greet", (name) => {
    console.log(`hello ${name} and welcome`);
});
//execute only once
eventEmitter.once('pushnotify', () => {
    console.log("this event will run only once")
});



//emit the event
eventEmitter.emit('greet', "Avinash");
eventEmitter.emit('greet', "Som");
eventEmitter.emit('pushnotify'); //this call also once



const myListener = () => console.log("i am a test listener");
eventEmitter.on("test", myListener);
eventEmitter.emit("test");
eventEmitter.removeListener("test", myListener);
eventEmitter.emit("test");

console.log(eventEmitter.listeners("test"));
console.log(eventEmitter.listeners("greet"));