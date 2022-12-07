/* BootCamp Devlights - Curso React y NodeJS
 Tarea 2 - Estructura de Datos Basicas - Ejercicios de FreeCodeCamp */


// Ejercicio 1 - "Utiliza un arreglo para almacenar una colección de datos"
//  Solucion:
let yourArray = ["Manuel", 26, true, "Argentina", "Corrientes"];

// -------------------------------------------------------------------

// Ejercicio 2 - "Accede a los contenidos de un arreglo utilizando la notación de corchetes"
//  Solucion:
let myArray = ["a", "b", "c", "d"];
myArray[1] = "Hola"
console.log(myArray);

// -------------------------------------------------------------------

// Ejercicio 3 - "Agrega elementos a un arreglo con push() y unshift()"
// Solucion:
function mixedNumbers(arr) {
arr.push(7, 'VIII', 9);
arr.unshift('I', 2, 'three');
    return arr;
}
console.log(mixedNumbers(['IV', 5, 'six']));

// -------------------------------------------------------------------

// Ejercicio 4 - "Elimina elementos de un arreglo con pop() y shift()"
// Solucion:
function popShift(arr) {
let popped = arr.pop() 
let shifted = arr.shift() 
    return [shifted, popped];
}
console.log(popShift(['challenge', 'is', 'not', 'complete']));

// -------------------------------------------------------------------

// Ejercicio 5 - "Elimina elementos usando splice()"
// Solucion:
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1,4);
console.log(arr);

// -------------------------------------------------------------------

// Ejercicio 6 - "Agrega elementos usando splice()"
// Solucion:
function htmlColorNames(arr) {
const startIndex = 0;
const amountToDelete = 2;
arr.splice(startIndex, amountToDelete, 'DarkSalmon', 'BlanchedAlmond');
    return arr;
}
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

// --------------------------------------------------------------------

// Ejercicio 7 - "Copia elementos de un arreglo usando slice()"
// Solucion:
function forecast(arr) {
let newArray = arr.slice(2,4);
    return newArray;
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

// --------------------------------------------------------------------

// Ejercicio 8 - "Copia un arreglo con el operador de propagación"
// Solucion:
function copyMachine(arr, num) {
let newArr = [];
    while (num >= 1) {
    newArr.push([...arr]);
      num--;
}
    return newArr;
}
console.log(copyMachine([true, false, true], 2));

// --------------------------------------------------------------------

// Ejercicio 9 - "Combina arreglos con el operador de propagación"
// Solucion:
function spreadOut() {
let fragment = ['to', 'code'];
let sentence = ['learning', ...fragment, 'is', 'fun'] // Cambia esta línea
    return sentence;
}
console.log(spreadOut());

// --------------------------------------------------------------------

// Ejercicio 10 - "Comprueba la presencia de un elemento con indexOf()"
// Solucion:
function quickCheck(arr, elem) {
  if(arr.indexOf(elem) >= 0){
    return true;
  }
  else {
    return false;
    }
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// --------------------------------------------------------------------

// Ejercicio 11 - "Itera a través de todos los elementos de un arreglo utilizando bucles "for""
// Solucion:
function filteredArray(arr, elem) {
    let newArr = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i].indexOf(elem) == - 1){
      newArr.push(arr[i]);
    }
  }
    return newArr;
  }
  
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

// --------------------------------------------------------------------

// Ejercicio 12 - "Crea arreglos complejos multidimensionales"
// Solucion:
let myNestedArray = [
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    ['concat', false, true, 'spread', 'array', ['deep']],
    ['mutate', 1327.98, 'splice', 'slice', 'push', [['deeper']]],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', [[['deepest']]]]
  ];

// --------------------------------------------------------------------

// Ejercicio 13 - "Agrega pares clave-valor a objetos de JavaScript"
// Solucion:
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };

  foods.bananas = 13;
  foods.grapes = 35;
  foods.strawberries = 27;
console.log(foods);

// --------------------------------------------------------------------

// Ejercicio 14 - "Modifica un objeto anidado dentro de un objeto"
// Solucion:
let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  };
  userActivity.data.online = 45;
  console.log(userActivity);

// ---------------------------------------------------------------------

// Ejercicio 15 - "Accede a los nombres de propiedad con la notación de corchetes"
// Solucion:
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };

  function checkInventory(scannedItem) {
  return foods[scannedItem]
  } 
  console.log(checkInventory("apples"));

// ---------------------------------------------------------------------
// Ejercicio 16 - "Usa la palabra clave "delete" para eliminar las propiedades de los objetos"
// Solucion:
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };

  delete foods.oranges;
  delete foods.plums;
  delete foods.strawberries; 
  console.log(foods);

// --------------------------------------------------------------------

// Ejercicio 17 - "Evalúa si un objeto tiene una propiedad"
// Solucion:
let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
  if (userObj.hasOwnProperty("Alan") &&
  userObj.hasOwnProperty("Jeff")&&
  userObj.hasOwnProperty("Sarah")&&
  userObj.hasOwnProperty("Ryan")){
    return true
  } 
  return false;
  }
  console.log(isEveryoneHere(users));

// -----------------------------------------------------------------

// Ejercicio 18 - "Itera a través de las claves de un objeto con una sentencia "for...in""
// Solucion:
const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(usersObj) {
  let result = 0;
  for (let users in usersObj){
    if (usersObj[users].online == true){
      result++
    }
  }
  return result;
  }
  console.log(countOnline(users));

// -----------------------------------------------------------------

// Ejercicio 19 - "Genera un arreglo de todas las claves de los objetos con Object.keys()"
// Solucion:
let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function getArrayOfUsers(obj) {
  return Object.keys(obj);
  }
  console.log(getArrayOfUsers(users));
// -----------------------------------------------------------------

// Ejercicio 20 - "Modifica un arreglo almacenado en un objeto"
// Solucion:
let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  function addFriend(userObj, friend) {
  userObj.data.friends.push(friend);
  return userObj.data.friends;
  }
  console.log(addFriend(user, 'Pete'));