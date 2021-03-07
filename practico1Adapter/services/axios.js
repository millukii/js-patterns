const axios = require('axios')

const instance = axios.create({
    baseUrl: 'https://jsonplaceholder.typice.com'
})

const adapter =  {
    get: url => instance.get(url),
    post: (url, body)  => instance.post(url, body),
    put: (url, body)  => instance.put(url, body),
    delete: (url)  => instance.delete(url)
}

//module.exports = instance
module.exports = adapter