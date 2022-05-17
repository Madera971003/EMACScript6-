let name = 'oscar';
let age = 32;

obj = {name: name, age: age};
//Ahora con ES6
obj2 = {name, age};
console.log(obj2);


//Arrow Functions
const names = [
    {name: 'Oscar', age: 32},
    {name: 'Yesica', age: 27}
];

//Aqui es usando una funcion anonima
let ListOfNames = names.map(function(item){
    console.log(item.name);
})
//Esto hace lo mismo que lo anterior pero ahora con arrow functions con ES6
let ListOfNames2 = names.map(item => console.log(item.name))

//Otras maneras de usar Arrow Functions
const ListOfNames3 = (namme, age, country) => {
    //Bloque de codigo que desee
}

const ListOfNames4 = name => {
    //Bloque de codigo
}
const square = num => num * num;


//Las promesas; uso de funciones asíncrono

const helloPromise = () => {
    return new Promise ((resolve, reject) => {
        if(true){
            resolve('Hey!');
        }else{
            reject('Ups!!');
        }
    })
}

helloPromise()
    .then(response => console.log(response)) //Puedo anidar muchos .then
    .then(() => console.log('Hola'))
    .catch(error => console.log(error));


