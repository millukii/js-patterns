
//entregar el control de los metodos que se van a ejecutar a una libreria que se inyectara
//la cual no sabremos cual será y es transparente
//eliminar requires
//ayuda con los test

const express = require('express')

const axios = require('axios')

const { get } = require('di_handler')

const app = express()

const port = 3000

app.get('/', get(axios))

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 

/* const express = require('express')

const axios = require('axios')

const app = express()

const port = 3000

app.get('/', async (req, res) => {
    const { data } = await axios.get('https://jsonplaceholder.typice.com/users')
    res.send(data)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) */