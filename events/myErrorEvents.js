const { error } = require("console");
const EventEmitter = require("events")

const eventEmitter = new EventEmitter();

eventEmitter.on("error", (err) => {
    console.log(`Error OCUURED : ${err.message}`)
})

eventEmitter.emit("error", new Error("Something went  wrong"));