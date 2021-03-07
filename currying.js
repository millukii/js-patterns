const suma = (a, b) => a + b

suma(1, 5)

//una funcion currier transforma la función a unaria
//es decir funciones que reciben un solo argumento
//no se terminan de ejecutar hasta que se pase el ultimo parametro

const suma = a => b => a + b

suma(1)(5)

const suma1 = suma(1)

suma1(5)