
//Se agrega entries a ES8
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    desing: 'Ana',
}

const entries = Object.entries(data); //Esto devuelve una matriz de la siguiente forma
//Arreglo de arreglos, deja de ser objeto
// [
//     [ 'fronted', 'Oscar' ],
//     [ 'backend', 'Isabel' ],
//     [ 'desing', 'Ana' ]
// ]
console.log(entries);

//Con el metodo anterior es mas facil llegar a conocer cuantos elementos tiene nuestro
//objeto, porque ahora ya se dispone del metodo length
console.log(entries.length)

// Se agrega el metodo values a ES8
const data2 = {
    frontend: 'Oscar',
    backend: 'Isabel',
    desing: 'Ana',
}
const values = Object.values(data2);
//Este sera ahora el resultado de values
//[ 'Oscar', 'Isabel', 'Ana' ]
console.log(values);
console.log(values.length);


//Se agrega el padding a ES8

const string = 'hello';
console.log(string.padStart(7, 'hi')); //El 7 representa el numero de caracteres que quiero que se tenga
//en este caso como "hello" ya son 5 y quiero que sean 7, entonces en el segundo parametro
//ira el resto de caracteres
console.log(string.padEnd(12, ' -----')); //Igual que lo anterior, pero al final
