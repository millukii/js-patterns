const users = [
    { edad: 17, nombre: 'Mel', apellido: 'Soto' },
    { edad: 18, nombre: 'Chanchito', apellido: 'Feliz' },
    { edad: 12, nombre: 'Loreto', apellido: 'Fernandez' },
    { edad: 1, nombre: 'Sofia', apellido: 'Zapata' },
]

const compose = (...fns) => x =>  fns.reduceRight((y, f) => f(y), x) 

const filter = f => xs => xs.filter(f)

const head = xs => xs[0]

const formateo = x => ({
    nombreCompleto: `${x.nombre} ${x.apellido}`,
    edad: x.edad,
})

const formato = x => `${x.nombreCompleto} tiene ${x.edad} `

const traePrimerInfante = 

    compose(
        formato,
        formateo,
        head,
        filter(x => x.edad < 2),
        //xs => xs.filter(x => x.edad < 2),
    )
/* const traePrimerInfante = data => {

    compose(
        formato,
        formateo,
        head,
        xs => xs.filter(x => x.edad < 2),
    )(data)
    //composicion de funciones
    //formato(formateo(head(data.filter(x => x.edad < 2 ))))
} */

/* const traePrimerInfante = data => {
    const infantes = data.filter(x => x.edad < 2)
    const primerInfante = infantes[0]
    const infante = {
        nombreCompleto: `${primerInfante.nombre} ${primerInfante.apellido}`,
        edad: primerInfante.edad,
    }

    return `${infante.nombreCompleto} tiene ${infante.edad}`
} */