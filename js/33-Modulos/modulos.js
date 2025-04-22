import saludar, {PI} from "./constantes.js";
import {aritmetica as calculos} from "./aritmetica.js" //se le crea el alias a aritmetica

console.log("Archivo modulos.js");
console.log(PI);

console.log(calculos.sumar(3,4)); //funcion sumar importada del archivo aritmetica.js
//saludar(); falta importar la funcion saludar


import React, {component} from React //funcion para llamar react 