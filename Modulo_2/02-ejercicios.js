let cantidad = 12;
let precio = 25000;
let descuento = 0;

if(cantidad >= 5 && cantidad <= 10)
	descuento = 0.10;
else if(cantidad > 10)
	descuento = 0.20;
else
	descuento = 0;
let precioTotal = cantidad * precio - (cantidad * precio * descuento);
console.log(`El precio total a pagar es de ${precioTotal} euros`);
