let persona = {
	nombre: "Diego",
	edad: 25,
	empleado: true,
	familia: ["Ana", "Pedro", "Juan"],
	direccion: {
		calle: "Calle 123",
		numero: 123,
		ciudad: "Medellin",
	}
}

let personaje = {
	nombre: "Nesuko",
	puntosVida: 100,
	ataque: 10,
	defensa: 5,
	atacar: function() {
		console.log("Atacando");
	},
	defender: function() {
		console.log("Defendiendo");
	}
}
//acceder a las propiedades
console.log("%c1. Propiedades", "color: green");
console.log(personaje);
console.log(persona);
console.log(personaje.atacar);
console.log(persona.familia);
console.log(persona.direccion);

//agragr propiedades
console.log("%c2. Agregar propiedades", "color: green");

personaje.poder = "4000";

console.log(personaje);
//modificar propiedades

personaje["poder"] = 9000;
console.log(personaje);

//Destructuring
//es una forma de extraer valores de un objeto y asignarlos a
//variables de manera mas concisa
//se imprimen los datos directamente de las variables

const { puntosVida, ataque } = personaje;
console.log(puntosVida);
console.log(ataque);

//Delete, se usa la palabra delete delete personaje.poder
console.log("%c3. Delete", "color: green");

delete personaje.poder;
console.log(personaje);

//objetos en objetos
personaje.informacion = {
	planeta: "Tierra",
	serie: "Dragon ball",
	coordenadas: {
		latitud: 12.3456,
		longitud: 45.6789,
	},
}

console.log("%c4. Objetos en objetos", "color: green");
console.log(personaje);

const { nombre, informacion: {planeta, serie}} = personaje;

console.log(nombre);
console.log(planeta);
console.log(serie);

//Object.assign, se usa para unir objetos
console.log("%c5. Unir objetos", "color: green");

const personajeFinal = Object.assign(personaje, persona);
console.log(personajeFinal);

//Metodos con Object
//keys Object.keys, se accede a las propiedades
console.log("%c6. keys", "color: green");

console.log(Object.keys(personaje));

//Metodos con Object
//Values Object.values, se accede a los valores de las propiedades
console.log("%c7. values", "color: green");

console.log(Object.values(personaje));

//Metodos con Object
//Entries Object.entries, se accede a las claves y a sus valores
console.log("%c8. Entries", "color: green");

console.log(Object.entries(personaje));
