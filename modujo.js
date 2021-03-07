const modulo = {
    prop: 'mi prop',
    config: {
        lenguaje: 'es',
        cache: true,
    },
    setConfig: conf => {
        modulo.config = conf
    },
    isCacheEnabled: () => {
        console.log(modulo.config.cache ? 'si' : 'no')
    }
}