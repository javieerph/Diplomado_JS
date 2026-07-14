let productos = [];

const producto = {
	id: 4156223,
	nombre: "Arena Pokes x 25 kilos",
	categoria: "Arena",
	cantidad: 40,
	precio: 90000,
};

productos.push(producto);

const buscador                    = document.querySelector('#buscador');
const listaProductos              = document.querySelector('#lista-productos tbody');
const formularioRegistrarProducto = document.querySelector('#formulario-registrar-producto');
const modalRegistrarProducto      = document.querySelector('modal-registrar-producto');

