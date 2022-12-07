/* BootCamp Devlights - Curso React y NodeJS
 Tarea 2 - ES6 - Ejercicios de FreeCodeCamp */


// Ejercicio 1 - "Compara el alcance de las palabras clave "var" y "let""
// Solucion:
function checkScope() {
    let i = 'function scope';
    if (true) {
        let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}

// -------------------------------------------------------------------
// Ejercicio 2 - "Muta un arreglo declarado con const"
// Solucion:
const s = [5, 7, 2];
function editInPlace() {
s[0] = 2;
s[1] = 5;
s[2] = 7;
}
editInPlace();

// -------------------------------------------------------------------
// Ejercicio 3 - "Prevenir la mutación del objeto"
// Solucion:
function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS)
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();

// -------------------------------------------------------------------
// Ejercicio 4 - "Usa funciones flecha para escribir funciones anónimas de manera breve"
// Solucion:
const magic = () =>  {
    return new Date();
  };

// -------------------------------------------------------------------
// Ejercicio 5 - "Escribe funciones flecha con parámetros"
// Solucion:
const myConcat = (arr1, arr2) => {
    return arr1.concat(arr2);
  };
  console.log(myConcat([1, 2], [3, 4, 5]));

// -------------------------------------------------------------------
// Ejercicio 6 - "Establece parámetros por defecto para tus funciones"
// Solucion:
const increment = (number, value = 1) => number + value;

// -------------------------------------------------------------------
// Ejercicio 7 - "Utiliza el parámetro rest con parámetros de función"
// Solucion:
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}
  console.log(sum(1, 2, 3)); 

// -------------------------------------------------------------------
// Ejercicio 8 - "Utiliza el operador de propagación para evaluar los arreglos en el lugar"
// Solucion:
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];
console.log(arr2);

// -------------------------------------------------------------------
// Ejercicio 9 - "Usa sintaxis de desestructuración para extraer valores de objetos"
// Solucion:
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  const {today, tomorrow} = HIGH_TEMPERATURES;

// -------------------------------------------------------------------
// Ejercicio 10 - "Usa sintaxis de desestructuración para asignar variables desde objetos"
// Solucion:  
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;

// -------------------------------------------------------------------
// Ejercicio 11 - "Usa sintaxis de desestructuración para asignar variables desde objetos anidados"
// Solucion:    
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  const {today: { low: lowToday, high: highToday}} = LOCAL_FORECAST;

// -------------------------------------------------------------------
// Ejercicio 12 - "Usa sintaxis de desestructuración para asignar variables desde arreglos"
// Solucion:  
let a = 8, b = 6;
[a, b] = [b, a];

// -------------------------------------------------------------------
// Ejercicio 13 - "Utiliza la sintaxis de desestructuración con el parámetro rest para reasignar elementos de un arreglo"
// Solucion:  
function removeFirstTwo(list) {
    const [a, b, ...shorterList] = list;
    return shorterList;
  }
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sourceWithoutFirstTwo = removeFirstTwo(source);

// -------------------------------------------------------------------
// Ejercicio 14 - "Utiliza sintaxis de desestructuración para pasar un objeto como parámetro de función"
// Solucion: 
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  const half = ({ max, min }) => (max + min) / 2.0;

// -------------------------------------------------------------------
// Ejercicio 15 - "Crea cadenas usando plantillas literales"
// Solucion: 
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    "use strict";
    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
      failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    return failureItems;
  }
  const failuresList = makeList(result.failure);

// -------------------------------------------------------------------
// Ejercicio 16 - "Escribe declaraciones concisas de objecto literales usando la abreviatura de propiedad de objeto"
// Solucion: 
const createPerson = (name, age, gender) => {
    return {
      name,
      age,
      gender
    };
  };

// -------------------------------------------------------------------
// Ejercicio 17 - "Escribe funciones breves y declarativas con ES6"
// Solucion: 
const bicycle = {
    gear: 2,
    setGear(newGear) {
      this.gear = newGear;
    }
  };
  bicycle.setGear(3);
  console.log(bicycle.gear);

// -------------------------------------------------------------------
// Ejercicio 18 - "Usa sintaxis de clases para definir una función constructora"
// Solucion: 
class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  const carrot = new Vegetable("carrot");
  console.log(carrot.name); // => should be 'carrot'

// -------------------------------------------------------------------
// Ejercicio 19 - "Utiliza getters (accesores) y setters (mutadores) para controlar el acceso a un objeto"
// Solucion:
class Thermostat {
    constructor(fahrenheit) {
      this.fahrenheit = fahrenheit;
    }
    get temperature() {
      return (5 / 9) * (this.fahrenheit - 32);
    }
    set temperature(celsius) {
      this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
  }

// -------------------------------------------------------------------
// Ejercicio 20 - "Crea un módulo para scripts"
// Solucion:
<html>
  <body>
<script type="module" src="index.js"></script>
  </body>
</html>

// -------------------------------------------------------------------
// Ejercicio 21 - "Utiliza la exportación para compartir un bloque de código"
// Solucion:
export const uppercaseString = (string) => {
    return string.toUpperCase();
  }
  export const lowercaseString = (string) => {
    return string.toLowerCase()
  }

// -------------------------------------------------------------------
// Ejercicio 22 - "Reutiliza código de JavaScript utilizando import"
// Solucion:
import { uppercaseString, lowercaseString } from './string_functions.js';
uppercaseString("hello");
lowercaseString("WORLD!");

// -------------------------------------------------------------------
// Ejercicio 23 - "Use * para importar todo de un archivo"
// Solucion:
import * as stringFunctions from "./string_functions.js";
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

// -------------------------------------------------------------------
// Ejercicio 24 - "Crear un fallback de exportación con export default"
// Solucion:
"use strict";
export default function subtract(x, y) {
  return x - y;
}

// -------------------------------------------------------------------
// Ejercicio 25 - "Importa una exportación por defecto"
// Solucion:
import subtract from "./math_functions.js";
subtract(7,4);

// -------------------------------------------------------------------
// Ejercicio 26 - "Crea una promesa de JavaScript"
// Solucion:
const makeServerRequest = new Promise((resolve, reject) => {
});

// -------------------------------------------------------------------
// Ejercicio 27 - "Cumpleta una promesa con "resolve" y "reject""
// Solucion:
const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer;
    if(responseFromServer) {
      resolve("We got the data");
    } else {	
      reject("Data not received");
    }
  });

// -------------------------------------------------------------------
// Ejercicio 28 - "Maneja una promesa cumplida usando then"
// Solucion:
const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer = true;
    if(responseFromServer) {
      resolve("We got the data");
    } else {	
      reject("Data not received");
    }
  });
  makeServerRequest.then(result => {
    console.log(result);
  });

// -------------------------------------------------------------------
// Ejercicio 29 - "Maneja una promesa rechazada usando catch"
// Solucion:
const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer = false;
    if(responseFromServer) {
      resolve("We got the data");
    } else {	
      reject("Data not received");
    }
  });
  makeServerRequest.then(result => {
    console.log(result);
  });
  makeServerRequest.catch(error => {
    console.log(error);
  });