
const https = require('https');

const get = url => new Promise((resolve, reject) => {

    const comp = url.split('/')
    
    const host = comp.shift()

    const options = {
        hostname: host,
        path: `/${comp.join('/')}`,
        method: 'GET'
    };
    console.log(`Options ${options.hostname}  ${options.path} ${options.method}`)
    const req = https.request(options, res => {
        res.setEncoding('utf8')
        let body = ''
        res.on('data', d => {
            body += d
        });
        console.log('BODY', body)
        res.on('end', d => {
            const parsed = JSON.parse(body)
            console.log(parsed)
            resolve(parsed)
        });
    });
    
    req.on('error', (e) => {
        console.error(e);
        reject(e)
    });

    req.end();
})
const main = async () => {
    const result = await get('jsonplaceholder.typicode.com/users')
    console.log(result)
}

main()

/* const https = require('https');

const options = {
    hostname: 'jsonplaceholder.typicode.com',
    path: '/users',
    method: 'GET'
};

const req = https.request(options, res => {
    res.setEncoding('utf8')
    let body = ''
    res.on('data', d => {
        body += d
    });

    res.on('end', d => {
        const parsed = JSON.parse(body)
        console.log(parsed)
    });
});

req.on('error', (e) => {
    console.error(e);
});

req.end(); */