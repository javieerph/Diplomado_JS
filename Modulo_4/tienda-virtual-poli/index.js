let productos = [];

const producto = {
	id: 4156223,
	nombre: "Arena Pokes x 25 kilos",
	categoria: "Arena",
	cantidad: 40,
	precio: 90000,
};

let categorias = [
	"Arena",
	"Accesorios",
	"Servicios",
]

productos.push(producto);

const buscador                    = document.querySelector('#buscador');
const listaProductos              = document.querySelector('#lista-productos tbody');
const formularioRegistrarProducto = document.querySelector('#formulario-registrar-producto');
const modalRegistrarProducto      = document.querySelector('#modal-registrar-producto');
const selectCategoria		  = document.querySelector('#categoria');

//Evento de carga

document.addEventListener('DOMContentLoaded', () => {
	listarCategorias();	
});

//funcion registrar producto

//Renderizar categorias

const listarCategorias = () => {
	categorias.forEach(categoria => {
		const option = document.createElement('option');
		option.value = categoria;
		option.innerText = categoria;

		selectCategoria.appendChild(option);
	});

};

