class Suma  {
    constructor(v = 0) {
        this.val = v
    }


    suma(v) {
        this.val += v;
        return this;
    }

}

const valor = new Suma(1)
console.log(valor
    .suma(1)
    .suma(2)
    .suma(3)
    .val)