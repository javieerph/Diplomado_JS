const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];

//.length
console.log('%c.length', 'color: blue');
console.log(meses.length);

//.push agregar elementos al final del array
//este metodo es mutable, es decir que modifica el array original
//retorna la nueva longitud
console.log('%c.push', 'color: blue');

meses.push('junio');
console.log(meses);

//fill rellena los elementos de un array con un valor estatico
console.log('%c.fill', 'color: blue');

const animales = ['vaca', 'caballo', 'gallo', 'pez'];
animales.fill('alcon');
console.log(animales);

//pop elimina el ultimo elemento del array y lo retorna
console.log('%c.pop', 'color: blue');

const planetas = ['saturno', 'neptuno', 'tierra', 'venus', 'marte'];
planetas.pop();
console.log(planetas);

//shift elimina el primer elemento de un array
//retorna el elemento
//este metodo es mutable
console.log('%c.shift', 'color: blue');

const numeros = [12, 24, 42, 13, 26];

numeros.shift();
console.log(numeros);

//inshift agrega nuevos elelemtos al inicio del array
//retorna la nueva longitud
//es mutable
console.log('%c.unshift', 'color: blue');

numeros.unshift(32);
console.log(numeros);

//isArray comprueba si un elemto es un array
console.log('%cisArray', 'color: blue');

console.log(numeros.isArray);//es un metodo estatico del objeto global
//Array por eso no se puede usar sin citar la clase Array primero.
console.log(Array.isArray(numeros));
console.log(Array.isArray('23'));

//forEach llama una funcion para cada elemento de un array
//no modifica el array porque cada each es una copia del original.
console.log('%c.forEach', 'color: blue; font-size: 15px');

const pares = [2, 4, 6, 8];
//tradicional
pares.forEach(function(par){
	console.log(par);
});
//con => lo que esta antes es la lista de parametros
//lo que esta despues el cuerpo de la funcion
pares.forEach(par => {console.log(`numero: ${par}`)});

//find devuelve el valor del primer elemento de un array
//que cumpla con una prueba
//const result = nombreDelArray.find()
console.log('%c.find', 'color: blue; font-size: 15px');

const result = pares.find(par => par == 6 );
console.log(result);
