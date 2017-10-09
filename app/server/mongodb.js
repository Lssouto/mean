let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://"+(process.env.IP || "localhost")+"/dbloja";


let _getConnection = (callback)=>{
	MongoClient.connect(url,(err,db)=>{
		callback(db);
	});
};

let _criarDocumento = (nome,callback)=>{
	_getConnection((db)=>{
	   db.createCollection(nome, (err,res)=>{
	  		if(err) throw err;
	  		callback(res);
	  		db.close();
	   });	
	});
};

let _getListaDocumento = (callback)=>{
	_getConnection((db)=>{
		db.listCollections().toArray((err,results)=>{
			if(err) throw err;
			callback(results);
			db.close();
		});
	});	
};

let _insertDadosDocumento = (collection,dado,callback)=>{
	_getConnection((db)=>{
		db.collection(collection).insert(dado, function(err, res) {
		   if (err) throw err;
		   callback(res);
		   db.close();
		});
	});
};

let _delDadosDocumento = (collection,dado,callback)=>{
	_getConnection((db)=>{
		db.collection(collection).remove(dado, function(err, res) {
		   if (err) throw err;
		   callback(res);
		   db.close();
		});
	});
};

let _getDadosDocumento = (nome,callback)=>{
	_getConnection((db)=>{
		db.collection(nome).find({}).toArray((err,results)=>{
			if (err) throw err;
			callback(results);
			db.close();
		});
	});
};

let _dropDatabase = (callback) =>{
	_getConnection((db)=>{
		db.dropDatabase((err,result)=>{
			if(err) throw err;
			callback(result);
			db.close();
		});
	});
};

module.exports = {
	criarDocumento : _criarDocumento,
	getListaDocumento : _getListaDocumento,
	insertDadosDocumento : _insertDadosDocumento,
	delDadosDocumento  : _delDadosDocumento,
	getDadosDocumento : _getDadosDocumento,
	dropDatabase : _dropDatabase
}