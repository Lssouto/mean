let mongodb = require('./mongodb');

let _initial = ()=>{

	let json = [{ nome: "caderno", tipo:"escolar" , descricao: "100 - Folhas", preco: 10, qtd: 20},
					{ nome: "lapis", tipo:"escolar" ,descricao: "Faber-Castell", preco: 2, qtd: 200 },
					{ nome: "pasta", tipo:"escritorio" ,descricao: "Tipo L", preco: 6.50, qtd: 50 }
					];

	mongodb.insertDadosDocumento("produtos",json,(callback)=>{});

	return "Base de dados Criada!";

};

let _end = ()=>{

	mongodb.dropDatabase((callback)=>{});

	return "Base de dados Deletada!";
};

module.exports = {
	initial : _initial,
	end:_end
};
