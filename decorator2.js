class Mackbook {
    precio() {
        return 1000
    }
}

const memoria = mac => {
    const v = mac.precio()
    mac.precio = function () {
        return v + 100
    }
}

const mackbook = new Mackbook()

memoria(mackbook)

console.log(mackbook.precio())