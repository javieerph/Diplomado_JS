let cuentaBancaria = {
	usuario: "Javier",
	depositos: 123,
	retiros: 100,
	saldo: 0,
	historial: function(){
		console.log(this.depositos);
		console.log(this.retiros);
		console.log(this.saldo);
	},
};

console.log(cuentaBancaria);
cuentaBancaria.historial();
