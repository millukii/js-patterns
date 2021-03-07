const perro = {
    raza: 'Kilterrier',
    ladrar: function () {
        console.log(`Guau! ${this.raza}`)
    }
}

const kiltro = Object.create(perro)

kiltro.ladrar()

kiltro.raza = 'Super perro'

kiltro.ladrar()