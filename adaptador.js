class Api {
    constructor() {
        this.operations = function (url,  opts, verb) {
            switch (verb) {
                case 'get':
                    
                    break;
                case 'post':
                    
                    break;
                default:
                    return;
            }
        }
    }
}
//preferir esta implementacion
class Api2 {
    constructor()  {
        this.get = function (url, opts) {

        };
        this.post = function (url, opts) {

        };
    }
}

//vamos a estar usando la version1 pero esta llama a la version2 por debajo

class ApiAdapter {
    constructor() {
        const api2 = new Api2();

        this.operations = function (url, opts, verb) {
            switch (verb) {
                case 'get':
                    return api2.get(url, opts)
                case 'post':
                    return api2.post(url, opts)
                default:
                    return
            }
        }
    }
}

const api = new Api()

api.operations('www.google.cl', { q:1 }, 'get')

const api2 = new Api2()

api2.get('www.google.cl', { q:1} )

const adapter =  new ApiAdapter()

api.operations('www.google.cl', { q:1 }, 'get')
