

const string = "JavaScript es maravillos, con JavaScript puedo crear el futuro de la web";
//con el metodo de "replace" solo reemplaza la primera frase encontrada y el resto lo deja igual
const replaceString = string.replace("JavaScript", "Python");
console.log(replaceString);
//Ahora en ES12 se puede usar replaceAll
const replaceString2 = string.replaceAll("JavaScript", "Python");
console.log(replaceString2);


//Metodos privados en ES12

class Message {
    show(val){
        console.log(val)
    };
    #show2(val){ //Este metodo es privado; significa que solo puede usarse dentro de la clase
        console.log(val);
    };
    // get #add(val){
    // }
}

const message = new Message();
message.show("Hola!");
message.show2("Hola mundo");


//Promise.any: Esto nos retornará el valor de la promesa que se resuelva primero
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3]) //Regresa el primero que se resuelva
    .then(response => console.log(response));


//WeakRef

class AnyClass {
    constructor(element){
        this.ref = new WeakRef(element); //Una referencia devil
    }
}


//Nuevos operadores logicos
//Ver la siguiente liga: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse); //Asignacion And logico: x &&= y
//x && (x=y)

let isTrue2 = true;
let isFalse2 = false;
console.log(isTrue2 ||= isFalse2); //Asignacion Or logico: x ||= y
//x || (x=y)

let isTrue3 = undefined;
let isFalse3 = false;
console.log(isTrue3 ??= isFalse3); //Asignacion de anulacion logica: x ?? y
//x ?? (x=y)


