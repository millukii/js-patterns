let mixin = {
    saludar() {
        console.log(`holo ${this.nombre}`);
    },
    despedir() {
        console.log(`byebye ${this.nombre}`);
    }
}

class Usuario {
    constructor(nombre){
        this.nombre =  nombre
    }
}

Object.assign(Usuario.prototype, mixin);

const usuario = new Usuario('jojo');
usuario.saludar();