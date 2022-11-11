// Method .toUpperCase()

// devuelve el valor convertido en mayúsculas de la cadena que realiza la llamada.

let saludo = "Hola, mi nombre es Esteban";

console.log(`Texto pasado a mayúsculas: ${saludo.toUpperCase}`);

// Method .toLowerCase()

// devuelve el valor convertido en minusculas de la cadena que realiza la llamada.

let pregunta = "¿COMO ESTAS HOY ESTEBAN?";

console.log(`\n\nTexto pasado a minusculas: ${saludo.toLowerCase()}`)


// Method .trim 
// elimina los espacios en blanco en ambos extremos del string. Los espacios
// en blanco en este contexto, son todos los caracteres sin contenido (espacio,
// tabulación, etc.) y todos los caracteres de nuevas lineas (LF,CR,etc.).

let textoConEspacios = "    Bueno, Dale yqc. No se que poner.   ";

console.log(`\n\nTexto sin espacios en incio y final: ${textoConEspacios.trim()}`);


// Method .charAt() 

// devuelve en un nuevo String el carácter UTF-16 de una cadena.

let selectLetra = "Quiero ser visible";

console.log(`\n\nEsta letra es visible por su indice 8: ${selectLetra.charAt(8)}`);


// Method .slice() 

// devuelve una copia de una parte del array dentro de un nuevo
// array empezando por inicio hasta fin (fin no incluido).
// El array original no se modificará.


let nombres = ["Esteban", "Daniela", "Luis", "Juan", "Jose", "Emanuel", "Nazarena", "Victoria", "Araceli"]

let algunosNombresArray = nombres.slice(2, 6);

console.log(`\n\nNombres de array entre los indices 2 y 6: ${algunosNombresArray}`);


// Method .substring()

// devuelve un subconjunto de un objeto String.

let subStringText = "Saquemos un substring de esta cadena de texto";

console.log(`\n\nLa subcadena es: ${subStringText.substring(12, 22)}`);


// Method .replace()

// devuelve una nueva cadena con algunas o todas las coincidencias
// de un patrón, siendo cada una de estas coincidencias reemplazadas por remplazo.

let textoReplace = "Esteban esta cadena de texto es ideal";

console.log(`\n\nTexto es: ${textoReplace.replace("Esteban", "Damian")}`);


// Method .indexOf

// retorna el primer índice en el que se puede encontrar 
// un elemento dado en el array, ó retorna -1 si el elemento no esta presente.

let arrayOfCountries = ["Germany", "United Kingdom", "Argentina", "United States of America", "Mexico"];

let country = "Argentina"

let indexOfCountry = arrayOfCountries.indexOf(country);

console.log(`\n\nEste es el indice de Argenytina en arrayOfCountries: ${indexOfCountry}`);

// Method .split()

// divide un objeto de tipo String en un array (vector) de cadenas mediante la separación 
// de la cadena en subcadenas.

let textoADividir = "Hola hoy es un hermoso dia, sigue asi";

console.log(`\n\nEste texto paso por .split: ${textoADividir.split(" ")}`)


// DUDAS SOBRE COMO UTILIZAR .split()


// Method .startsWith()

// indica si una cadena de texto comienza con los caracteres de una cadena
// de texto concreta, devolviendo true o false según corresponda.

let argentinaWinnerWorldCupWQattar = "Argentina campeon Qatar 2022, Messi Crack"

console.log(`\n\nEste string comienza con A?: ${argentinaWinnerWorldCupWQattar.startsWith(`A`)}`);

