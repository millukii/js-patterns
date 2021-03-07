const axios = require('axios')

const instance = axios.create({
    baseUrl: 'https://jsonplaceholder.typice.com'
})

module.exports = instance