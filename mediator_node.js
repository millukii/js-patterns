const Emitter = require('events')

const emitter = new Emitter()

emitter.on('jojo', x => console.log(x))

emitter.emit('jojo', {jaja: 'jiji'})