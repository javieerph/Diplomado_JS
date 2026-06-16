const nombre = "Edgar";
const apellido = "Romero";

//para hallar el numero de caracteres de una cadena.
console.log('lenght');
console.log(nombre.length);

//para hallar un caracter desde una posicion.
console.log('charAt');
console.log(nombre.charAt(3));

//concatenar cadenas.
console.log('concat');
const nombreCompleto = nombre.concat(" ", apellido); 
console.log(nombreCompleto);

//buscar una coincidencia, retorna buleano
console.log('includes');

console.log(nombre.includes("ar"));
console.log(nombre.includes("Ro"));

//substrings, retorna una subcadena de la cadena original
//desde la posicion de inicio hasta la posicion de fin especificadas.
//Excluye el fin.
//si inicio > fin, intercambia los valores (4, 2) pasa a (2, 4).
//No acepta negativos.
console.log('substring');

console.log(nombre.substring(0, 2));
console.log(nombre.substring(1, 3));
console.log(nombre.substring(2, 4));
//desde la posicion dos en adelante.
console.log(nombre.substring(2));

//slice, separa la cadena en un arreglo de subcadenas, utilizando
//el separador especificado.
//Excluye el fin.
//Acepta negativos
// E d g a r
// 0 1 2 3 4
//-5-4-3-2-1
console.log('slice');

console.log(nombre.slice(0, 2));
console.log(nombre.slice(-4, -2));
//-1 substring lo convierte en 0
console.log(nombre.substring(-1));
console.log(nombre.slice(-1));

//toUpperCase, retorna la cadena en mayusculas
console.log('toUpperCase');

console.log(nombre.toUpperCase());
console.log(nombre.toLowerCase());

//replace, Remplaza la primera ocurerencia de la subcadena especificada
//con la cadena de remplazo especificada.
//devuelve una nueva cadena, la original no cambia.
//Solo remplaza la primera coincidencia
console.log('%creplace', 'color: green')

console.log(apellido.replace("mer", "xxx"));
console.log(apellido.replace("o", "x"));
console.log('%creplaceAll', 'color: green')
//Remplaza todas las coincidencias encontradas.
console.log(apellido.replaceAll("o", "x"));

//split, separa la cadena en un arreglo de subcadenas,
//utilizando el separador especificado.
console.log('%csplit', 'color: green');

//separa por caracteres
console.log(nombreCompleto.split(''));
//corta cada coma, pero como no tiene devuelve el string completo
console.log(apellido.split(','));
console.log(apellido.split('o'));
console.log(nombreCompleto.split(' '));

//repeat, Devuelve una cadena que contiene el numero de copias
//especificado de la cadena original
console.log('%crepeat', 'color: green');

console.log(nombre.repeat(4));

//endsWith, devuelve un booleano que indica si la cadena termina con
//los caracteres de la subcadena especificada
//startsWith si comienza
console.log('%cendsWith', 'color: green');

const nomMayusc = 'Edgar ROmero';

console.log(nomMayusc);
console.log(nombre.endsWith('r'));
console.log(nombre.endsWith('x'));
console.log(nombreCompleto.endsWith('Romero'));
console.log(nomMayusc.endsWith('romero'));
console.log(nomMayusc.startsWith('Edgar'));
