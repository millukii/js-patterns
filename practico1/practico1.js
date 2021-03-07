const services =  require('./services')
const handlers = require('./handlers')

const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => res.send('Hello World'))
app.get('/di', handlers(services).get)

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 
