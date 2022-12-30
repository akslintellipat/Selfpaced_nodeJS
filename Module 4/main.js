const events = require("events");
const { connectHandler } = require("./handler");

let connectEvent = new events.EventEmitter();

connectEvent.on("connect", connectHandler);

connectEvent.emit("connect");
