//clases
class calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sumar(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}
//Creacion de un nuevo objeto
const calc = new calculator();
console.log(calc.sumar(10,5));



//Importar modulos
import { hello } from "./module";

//ahora si ya se puede usar lo que se encuentre en el modulo que se importo
hello();
console.log(hello());



// Generadores
function* helloWorld(){
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World!';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value); //Cuando se sale de la cantidad de Yield, nos mandara un Undefined




