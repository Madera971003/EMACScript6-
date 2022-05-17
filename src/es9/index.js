//creacion de objetos a partir de otros
const obj = {
    name: 'oscar',
    age: 32,
    country: 'MX',
};

let { name, ...all } = obj; //Este toma el valor del nombre; y al resto lo
//encapsula en un objeto
console.log(name, all);
// Este seria el resultado:
// oscar { age: 32, country: 'MX' }
let {country, ...all2} = obj;
console.log(all2);
//Este es el resultado de lo anterior: { name: 'oscar', age: 32 }


//Otra caracteristica que se agregó fue: unir objetos a un nuevo objeto
//Operador de propagacion
const obj2 = {
    name: 'Oscar',
};
const obj3 = {
    ...obj2, //En esta parte se agregan los demas elementos de otro objeto
    country: 'MX',
};
console.log(obj3);


//Otra caracteristica que se agrego es: .finally
//Una forma de ejecutar un bloque extra despues

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? resolve('Hello World')
            //setTimeout(() => resolve('Hello World!'), 3000) //Se puede usar tambien el setTimeout
            : reject(new Error('Test Error'));
    });
};

helloWorld()
    .then(response => console.log(response)) //Esto ejecuta la respuesta que se recibe de la funcion
    .catch(error => console.log(error))
    //El siguiente bloque se ejecutara como un extra sin importar lo que suceda anteriormente
    .finally(() => console.log('Ya ha finalizado la ejecucion de la funcion'));


//Mejoras en Regex
//Regularmente usado en las fechas
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);
