//crear un producto con detalles

let producto = {
	nombre: "Arena POKES X 25 Kilogramos",
	precio: 80000,
	saldo: 5,
	aplicarDescuento: function(porcentaje){
		let desc = porcentaje / 100;
		this.precio = this.precio - (this.precio * desc);
		console.log(`Descuento del ${porcentaje} % aplicado,\nvalor a pagar ${this.precio}`);
	},
};

producto.aplicarDescuento(50);
