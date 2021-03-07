//similar al observer pero con un objeto intermedio ej: redux

const Emitter = (() => {
    const topics = {}
    const hOP =  topics.hasOwnProperty

    return{
        //subscribir todas las funciones que queramos a un evento
        on: (topic, listener) => {
            if (!hOP.call(topics, topic)) topics[topic] =  []
                topics[topic].push(listener)
        },
        //despachar los eventos con info  extra
        emit: (topic, info) => {
            if (!hOP.call(topics, topic)) return 
            topics[topic].forEach(item => 
                item(info !=  undefined ? info : {}))
        }
    }
})()

Emitter.on('jojo', x => console.log(x))

Emitter.emit('jojo', { jojo: 'lala' })