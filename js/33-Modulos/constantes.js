/*Se exporta solo lo que se necesite con export antes de la variable*/ 


export const PI = Math.PI; //constante pi para exportarla 
let usuario = "Hernan";
let password = "qwerty"; 
export default password; //se manda la variable a exportar despues de la declaracion de la misma anteriormente.


/*Las unicas que permiten el export default en la misma linea 
son las funciones y las clases

Hacer que un archivo se importe por defecto o la funcion que se va ejecutar*/
export function saludar(){ //cuando se exporte este archivo esta funcion saludar se exporta automaticamente.
    console.log("Hola modulos ES+");
}

export /**default */ class saludo{
    constructor(){
        console.log("Hola mundo ES6");
    }
}