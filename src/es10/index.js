
//Se agrego flat a ES10
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
//La utilidad de flat es aplanar los valores del arreglo
console.log(array.flat(2)) //El argumento que lleva "flat" es la profundidad
//si no se le asigna una profundidad, por defecto lo tomara como de un nivel


//Otro metodo a ES10 es flatmap
let array2 = [1,2,3,4,5];
console.log(array2.flatMap(value => [value, value * 2]));
//Esto nos da como resultado
// [
//     1, 2, 2, 4,  3,
//     6, 4, 8, 5, 10
// ]

//Otra cosa que se agrego fue trinmStart y trimEnd
let hello = '        hello World';
console.log(hello.trimStart());
let hello2 = 'hello World      ';
console.log(hello2.trimEnd());


//En esta version es opcional pasar el valor de error en el catch
try {
    
} catch (error) { //Esta forma se camnbio a lo que aparece mas abajo
    
}

try {
    
} catch { //ahora se recibe por defecto el error
    
}

//Se agrego en esta version el podre transformar un arreglo a objeto
let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries));
//{ name: 'oscar', age: 32 }


//Se agrego un metodo para poder acceder a la descripcion de un objeto de tipo simbolo
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);