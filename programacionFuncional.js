/* BootCamp Devlights - Curso React y NodeJS
 Tarea 2 - Programacion Funcional - Ejercicios de FreeCodeCamp */

// Ejercicio 1 - "Aprende sobre programación funcional"
//  Solucion:
const prepareTea = () => 'greenTea';
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};
const tea4TeamFCC = getTea(40);

// -------------------------------------------------------------------

// Ejercicio 2 - "Comprende la terminología de la programación funcional"
//  Solucion:
const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';

const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);;
console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

// -------------------------------------------------------------------

// Ejercicio 3 - "Comprende los peligros de usar el código imperativo"
//  Solucion:
const Window = function(tabs) {
  this.tabs = tabs; 
};
Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};
Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab'); 
  return this;
};
Window.prototype.tabClose = function(index) {
const tabsBeforeIndex = this.tabs.splice(0, index); 
const tabsAfterIndex = this.tabs.splice(1); 

this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); 
return this;
 };

// -------------------------------------------------------------------

// Ejercicio 4 - "Evita mutaciones y efectos secundarios utilizando programación funcional"
// Solucion:
let fixedValue = 4;
function incrementer() {
  return fixedValue + 1;
}

// -------------------------------------------------------------------

// Ejercicio 5 - "Pasa argumentos para evitar la dependencia externa en una función"
// Solucion:
let fixedValue = 4;
function incrementer(value) {
return value + 1;
}

// -------------------------------------------------------------------

// Ejercicio 6 - "Refactoriza variables globales por fuera de funciones"
// Solucion:
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];
function add(arr, bookName) {
  let newArr = [...arr];
  newArr.push(bookName); 
  return newArr; 
}
function remove(arr, bookName) {
  let newArr = [...arr]; 
  if (newArr.indexOf(bookName) >= 0) {
    newArr.splice(newArr.indexOf(bookName), 1); 
    return newArr; 
  }
}
var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
console.log(bookList);

// -------------------------------------------------------------------

// Ejercicio 7 - "Usa el método "map" para extraer datos de un arreglo"
// Solucion:
const ratings = watchList.map(item => ({
  title: item["Title"],
  rating: item["imdbRating"]
}));

// -------------------------------------------------------------------

// Ejercicio 8 - "Implementa map en un prototipo"
// Solucion:
Array.prototype.myMap = function(callback) {
  const newArray = [];
for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};

// -------------------------------------------------------------------

// Ejercicio 9 - "Usa el método de "filter" para extraer datos de un arreglo"
// Solucion:
const filteredList = watchList
  .filter(movie => {
    return parseFloat(movie.imdbRating) >= 8.0;
  })
  .map(movie => {
    return {
      title: movie.Title,
      rating: movie.imdbRating
    };
  });

// -------------------------------------------------------------------

// Ejercicio 10 - "Devolver parte de un arreglo mediante el método slice"
// Solucion:
function sliceArray(anim, beginSlice, endSlice) {
return anim.slice(beginSlice, endSlice);
}
const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);

// -------------------------------------------------------------------

// Ejercicio 10 - "Remueve elementos de un arreglo usando slice en lugar de splice"
// Solucion:
function nonMutatingSplice(cities) {
 return cities.slice(0, 3);
}
const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);

// -------------------------------------------------------------------

// Ejercicio 11 - "Combina dos arreglos utilizando el método "concat""
// Solucion:
function nonMutatingConcat(original, attach) {
return original.concat(attach);
}
const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);

// -------------------------------------------------------------------

// Ejercicio 12 - "Agrega elementos al final de un arreglo utilizando concat en lugar de push"
// Solucion:
function nonMutatingPush(original, newItem) {
  return original.concat(newItem);
}
const first = [1, 2, 3];
const second = [4, 5];
nonMutatingPush(first, second);

// -------------------------------------------------------------------

// Ejercicio 13 - "Utiliza el método "reduce" para analizar datos"
// Solucion:
const averageRating = watchList
.filter(film => film.Director === "Christopher Nolan")
.map(film => Number(film.imdbRating))
.reduce((sumOfRatings, rating) => sumOfRatings + rating) 
watchList.filter(film => film.Director === "Christopher Nolan").length;

// -------------------------------------------------------------------

// Ejercicio 14 - "Utiliza las funciones de orden superior "map", "filter" o "reduce" para resolver un problema complejo"
// Solucion:
const squareList = arr => {
    return arr
          .filter(num => num > 0 && num % parseInt(num) === 0)
          .map(num => Math.pow(num, 2));
};
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

// -------------------------------------------------------------------

// Ejercicio 15 - "Ordena un arreglo alfabéticamente con el método sort"
// Solucion:
function alphabeticalOrder(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

// -------------------------------------------------------------------

// Ejercicio 16 - "Devuelve un arreglo ordenado sin cambiar el arreglo original"
// Solucion:
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  return [].concat(arr).sort(function(a, b) {
    return a - b;
  });
}
nonMutatingSort(globalArray);

// -------------------------------------------------------------------

// Ejercicio 17 - "Divide una cadena en un arreglo utilizando el método "split""
// Solucion:
function splitify(str) {
return str.split(/\W/);
}
splitify("Hello World,I-am code");

// -------------------------------------------------------------------

// Ejercicio 18 - "Combina un arreglo en una cadena utilizando el método "join""
// Solucion:
function sentensify(str) {
return str.split(/\W/).join(" ");
}
sentensify("May-the-force-be-with-you");

// -------------------------------------------------------------------

// Ejercicio 19 - "Aplicar programación funcional para convertir cadenas a slugs de URL"
// Solucion:
function urlSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .join("-");
}

// -------------------------------------------------------------------

// Ejercicio 20 - "Usa el método "every" para comprobar que cada elemento de un arreglo atienda un criterio"
// Solucion:
function checkPositive(arr) {
return arr.every(val => val > 0);
}
checkPositive([1, 2, 3, -4, 5]);

// -------------------------------------------------------------------

// Ejercicio 21 - "Usa el método "some" para comprobar si algún elemento en un arreglo cumple un criterio"
// Solucion:
function checkPositive(arr) {
return arr.some(elem => elem > 0);
}
checkPositive([1, 2, 3, -4, 5]);

// -------------------------------------------------------------------

// Ejercicio 22 - "Introducción a la currificación y a la aplicación de funciones parciales"
// Solucion:
function add(x) {
 return function(y) {
    return function(z) {
      return x + y + z;
    };
  };
}
add(10)(20)(30);

