const Users = (() => {
    const recurso = '/users'

    return {
        listar: async () => {
            return await fetch(recurso).then(x => x.json())
        },
        crear: async (data) => {
            return await fetch(recurso, { type: 'POST', body: JSON.stringify(data) }).then(x => x.json())
        }
    }
})()

