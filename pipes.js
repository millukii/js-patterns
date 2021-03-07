const users = [
    { edad: 17, nombre: 'Mel', apellido: 'Soto' },
    { edad: 18, nombre: 'Chanchito', apellido: 'Feliz' },
    { edad: 12, nombre: 'Loreto', apellido: 'Fernandez' },
    { edad: 1, nombre: 'Sofia', apellido: 'Zapata' },
]

const compose = (...fns) => x =>  fns.reduceRight((y, f) => f(y), x) 
const pipe = (...fns) => x =>  fns.reduce((y, f) => f(y), x) 

const trace = x => y => console.log(x, y)
const filter = f => xs => xs.filter(f)

const head = xs => xs[0]

const formateo = x => ({
    nombreCompleto: `${x.nombre} ${x.apellido}`,
    edad: x.edad,
})

const formato = x => `${x.nombreCompleto} tiene ${x.edad} `

const traePrimerInfante = 

    pipe(
        filter(x => x.edad < 2),
        trace('despues del filter'),
        head,
        formateo,
        formato,
        //xs => xs.filter(x => x.edad < 2),
    )