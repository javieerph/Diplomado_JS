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
