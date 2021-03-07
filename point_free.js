const f = (ruta, callback) => {
    const resultado = heavyFunction()
    callback(resultado)
}

/* 
f('/users', (resultado) => {

})

app.get('/users', (req, res) => {

})

 */

const handleResult = (resultado) => {

}

f('/users', handleResult)