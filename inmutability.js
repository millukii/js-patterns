//mutabilidad: un objeto puede cambiar de propiedades y agregar metodos
//inmutabilidad: nada cambia
//usamos inmutabilidad en js con la palabra reservada const
//si necesitamos modificar, debemos crear un nuevo objeto que tome el valor
//del const original más las propiedades extra con  un spread operator para indicar que son distintos

const obj1 = {
    a: 1
}
const obj2 = {
    ...obj1,
    c: 3
}

//obj1.b = 2 no usar


console.log(obj1, obj2)