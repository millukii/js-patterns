const express = require('express')
const parser = require('body-parser')

const services =  require('./services')
const handlers = require('./handlers')
const handlify = require('./handlers')
const userHandlers = handlify('users')

const app = express()

app.use(parser.urlencoded({ extended: false }))

app.use(parser.json())

const port = 3000

app.get('/', (req, res) => res.send('Hello World'))
app.get('/user', userHandlers(services).get)
app.get('/di', handlers(services).get)
app.get('/di', handlers(services).post)
app.get('/di/:id', handlers(services).put)
app.get('/di/:id', handlers(services).delete)

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 
