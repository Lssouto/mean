var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/dbloja";
//mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]

let getConnection = (callback)=>{
	MongoClient.connect(url,(err,db)=>{
		callback(db);
	});
};
let criarDocumento = (nome,callback)=>{
	getConnection((db)=>{
	   db.createCollection(nome, (err,res)=>{
	  		if(err) throw err;
	  		callback(res);
	  		db.close();
	   });	
	});
};

let getListaDocumento = (callback)=>{
	getConnection((db)=>{
		db.listCollections().toArray((err,results)=>{
			if(err) throw err;
			callback(results);
			db.close();
		});
	});	
};

let insertDadosDocumento = (collection,dado,callback)=>{
	getConnection((db)=>{
		db.collection(collection).insert(dado, function(err, res) {
		   if (err) throw err;
		   callback(res);
		   db.close();
		});
	});
};

let getDadosDocumento = (nome,callback)=>{
	getConnection((db)=>{
		db.collection(nome).find({}).toArray((err,results)=>{
			if (err) throw err;
			callback(results);
			db.close();
		});
	});
};

let actions = ()=>{

	let _documentos = ()=>{

		// criarDocumento("clientes",(callback)=>{
		// 	console.log(callback);
		// });

		criarDocumento("produtos",(callback)=>{
			console.log(callback);
		});	
	}

	let _getDocumentos = ()=>{
		getListaDocumento((callback)=>{
			console.log(callback);
		});
	}

	let _inserts = ()=>{

		// insertDadosDocumento("clientes",{ nome: "as", address: "Floriano Peixoto", age: 21 },(callback)=>{
		// 	console.log(callback);
		// });

		// insertDadosDocumento("clientes",{ name: "Diego", address: "Floriano Peixoto", age: 15 },(callback)=>{
		// 	console.log(callback);
		// });

		let json = [{ nome: "caderno", tipo:"escolar" , descricao: "100 - Folhas", preco: 10, qtd: 20},
						{ nome: "lapis", tipo:"escolar" ,descricao: "Faber-Castell", preco: 2, qtd: 200 }
						];

		insertDadosDocumento("produtos",json,(callback)=>{
			console.log(callback);
		});
	}

	let _getDados = ()=>{

		getDadosDocumento("produtos",(callback)=>{	
			console.log(callback);
		});
	}

	return {
		documentos : _documentos,
		getDocumentos : _getDocumentos,
		inserts : _inserts,
		getDados : _getDados
	};

};

actions().getDados();
