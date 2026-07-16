let productos = [];

let categorias = [
	"Arena",
	"Accesorios",
	"Servicios",
]


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

formularioRegistrarProducto.addEventListener('submit', (e) => {
	e.preventDefault();

	const datos = new FormData(formularioRegistrarProducto);

	const producto = {
		id: Date.now(),
		nombre: datos.get('nombre'),
		categoria: datos.get('categoria'),
		cantidad: datos.get('cantidad'),
		precio: datos.get('precio'),
	};

	productos.push(producto);
	
	const modal = bootstrap.Modal.getInstance(modalRegistrarProducto);
	modal.hide();
});

//Renderizar categorias

const listarCategorias = () => {
	categorias.forEach(categoria => {
		const option = document.createElement('option');
		option.value = categoria;
		option.innerText = categoria;

		selectCategoria.appendChild(option);
	});

};

