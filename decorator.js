class Mackbook {
 constructor(){
    this.precio = 1000
    this.pantalla = 11.6 
 }
}

const mackbook = new Mackbook()

mackbook.agregarMemoria = function() {
    this.precio += 100
}

mackbook.agregarMemoria()

console.log(mackbook.precio)