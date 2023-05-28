const { EventEmitter } = require('events');

const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}!`);
}

const myEventEmitter = new EventEmitter();

// TODO 3
myEventEmitter.on('birthday', birthdayEventListener);
// TODO 4
myEventEmitter.emit('birthday', 'amien');