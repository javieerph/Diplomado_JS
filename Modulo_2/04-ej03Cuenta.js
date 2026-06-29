let cuentaBancaria = {
	saldo: 0,
	deposito: function(monto){
		this.saldo += monto;
		console.log(`Usted ha depositado ${monto} euros`);
	},
	retiro: function(monto){
		if(this.saldo >= monto)
		{
			this.saldo -= monto;
			console.log(`Usted ha retirado ${monto} euros`);
		}
		else
			console.log("Saldo insuficiente");
	},
	consultarSaldo: function(){
		console.log(`Su saldo es de ${this.saldo} euros`);
	},
}

cuentaBancaria.consultarSaldo();
cuentaBancaria.deposito(100);
cuentaBancaria.consultarSaldo();
cuentaBancaria.retiro(30);
cuentaBancaria.consultarSaldo();
cuentaBancaria.retiro(100);
cuentaBancaria.consultarSaldo();
