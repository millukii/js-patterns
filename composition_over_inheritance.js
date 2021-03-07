//problema de gorila y la banana
//problema de la herencia favorece la rigidez
//composicion: en lugar de definir una clase con varios métodos, definimos pequenas funciones
//que van a tener la funcionalidad en particular que requerimos, asegurando que no habrán dependencias que no usemos


//Composicion
const saludar = name =>  console.log(`Holo soy ${name}`)
const despedir = name =>  console.log(`bye ${name}`)
const dormir = name =>  console.log(`snifff ${name}`)


class Persona {
    constructor() {
        this.nombre = 'lala'
    }
 
    saludar() {
        saludar(this.nombre)
    }
    despedir() {
        despedir(this.nombre)
    }
    dormir() {
        dormir(this.nombre)
    }
}

class Robot {
    constructor() {
        this.nombre = 'lala'
    }
 
    saludar() {
        saludar(this.nombre)
    }
    despedir() {
        despedir(this.nombre)
    }
}


const persona = {
    nombre: 'lala',
    saludar2: function() {saludar(this.name)},
    saludar: () => saludar(persona.name)
}



//Herencia
class Persona {
    constructor() {
        this.nombre = 'lala'
    }

    saludar() {
        console.log(`Holo soy ${this.name}`)
    }
}

class Perro extends Persona {

}