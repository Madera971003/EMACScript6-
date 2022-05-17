// se agrego ahora import dinámicos
const button = document.getElementById("btn");

button.addEventListener("click", async function(){
    const module = await import("./file.js"); //Esta parte es el import dinamico
    module.hello();
});

//Caracteristicas agregadas de los numeros grandes en ES11
const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);


//Nueva forma para trabajar con las promesas; ahora se puede trabajar con
//un arreglo de promesas. Cabe mencionar que el metodo allSettled ejecuta todas las promesas
//mientras que el metodo "all" dejara de ejecutar al encontrar la primera promesa rechazada
const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));
    //Este es el resultado de lo anterior
// [
//     { status: 'rejected', reason: 'reject' },
//     { status: 'fulfilled', value: 'resolve' },
//     { status: 'fulfilled', value: 'resolve 1' }
// ]


//Ahora se puede trabajar mejor con GlobalThis
console.log(Window);
console.log(globalThis); //Este funciona como el anterior y funciona en todas las plataformas



//Nuevo operador lógico: null
//En caso de que la variable sea nula, se le colocara un valor por defecto
//que nosotros queramos
const fooo = null ?? 'default string';
console.log(fooo);

const fooo2 = 'Hola' ?? 'default string';
console.log(fooo2);


//Optional Chaining
const user = {};
//Esta manera nos detiene la aplicacion
//porque esas variables aun no se han cargado
console.log(user.profile.email); 

const user2 = {};
//Una solucion a lo anterior es usar lo siguiente:
console.log(user2?.profile?.email);

//Otro ejemplo usando if
if(user2?.profile?.email){
    console.log("email");
}else{
    console.log("fail");
}

