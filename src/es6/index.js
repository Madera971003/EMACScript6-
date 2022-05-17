function newFunction(name, age, country){
    var name = name || 'oscar'; //El Or se asigna como valor por defecto
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

//Con es6 (ECMAScript6) default Params

function newFunction2(name = 'oscar', age = 32, country = 'MX'){
    console.log(name, age, country);
}

newFunction2(); //Solo es una llamada a la funcion dejando los valores de las variables por defecto
newFunction2('Ricardo', 23, 'CO')

//
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase)

//Templates literals con las comillas inversas en ES6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2)


//Usando salto de línea con \n
let lorem = "Qui consequatur. Commodi. Ipsum vel duis yet minima\n"
+ "otra frase extra que se necesita en el texto."

//Multilinea en ES6
//En este caso usando las comillas inversas basta con dar enter y escribir
//en otra línea para que se considere como salto de linea
let lorem2 = `otra frase épica
ahora es otra frase épica`;
console.log(lorem2)



let person = {
    name: 'oscar',
    age: 32,
    country: 'MX'
};
console.log(person.name, person.age, person.country);
//Con ES6
let {name, age, country} = person; //Se declaran las variables con la informacion de cada elemento del objeto
console.log(name, age, country);
//Incluso se pueden recolectar solo las variables de interes
// let {age, country} = person;
// console.log(age, country);


let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];
//ES6
let education = ['David', ...team1, ...team2] //Esto nos une todos los elementos
console.log(education)

{
    var globalVar = 'Variable con alcance global'; //global scope
}
{
    let globalLet = 'Variable con alcance local'; //local scope
}
console.log(globalVar); //Esta linea si se ejecutara
console.log(globalLet); //Este marcara error, ya que el alcance de la variable es local


const a = 'b';
a = 'a'; //Esto no sería posible ya que "a" fue declarado como una constante


/////////////////////////////////////////////

