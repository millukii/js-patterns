
//lo recomendable es usar promesas con async await, no usar callbacks y evitar los  .then
const fn = async () => {
    const result = await ajax()
}




const fn = () => {
    ajax(() =>  {
        ajax(() =>  {
            ajax(() =>  {
        
            })
        })
    })
}

const fn1 = () => {
    ajax()
        .then(() => {
            const a =  1
            return ajax()
        })
        .then(()=> {
            return ajax()
        }) 
        .then(()=> {
            return ajax()
        }) 
        .then(()=> {
            console.log(a) //undefined proposito  async await
            return ajax()
        }) 
}