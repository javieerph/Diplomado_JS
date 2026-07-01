const numeros = [1, 2, 3, 4];

const nombres = ['Juan', 'Pedro', 'Javier'];

const personas = [
	{ nombre: 'Juan', edad: 20, },
	{ nombre: 'Pedro', edad: 30, },
	{ nombre: 'Maria', edad: 40, },
];

//acceder a los elementos
console.log('%cAcceder a los elementos', 'color: blue');
console.log(numeros[1]);
console.log(nombres[2]);
console.log(personas[1]);

//agregar o modificar elementos
console.log('%cAcceder o modificar elementos', 'color: blue');
numeros[4] = 5;
console.log(numeros);
personas[0][0] = 'Davison';
personas[0][1] = 25;
console.log(personas[0]);

//recorrer el array
console.log('%cReccorer array', 'color: blue');

for(let i = 0; i < nombres.length; i++)
	console.log(nombres[i]);

//for of
console.log('%cFor of', 'color: green')
for(nombre of nombres)
	console.log(nombre);

//console.table
console.log('%cConsole.table', 'color: blue');
console.table(nombres);
