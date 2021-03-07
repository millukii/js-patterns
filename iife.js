
//expresion de funcion ejecutada inmediatamente
const resultado = (() => {
    const x = 'holo'
    console.log(x)
})()

//console.log(x)  error de referencia porque está fuera del scope