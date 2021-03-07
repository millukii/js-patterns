const y = 'jaja'

const f = () => {
    const x = 'jojo'
    return () => {
        const z = 'jiji'
        console.log(x, y, z)

    }

}

const g = () => {
    const a = 'jojo'
    console.log(a, y)
    console.log(a, x)
}

f()

g()
