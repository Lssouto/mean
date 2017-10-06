let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/dbloja";
let ObjectId = require('mongodb').ObjectID;

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

module.exports = {
	criarDocumento : _criarDocumento,
	getListaDocumento : _getListaDocumento,
	insertDadosDocumento : _insertDadosDocumento,
	delDadosDocumento  : _delDadosDocumento,
	getDadosDocumento : _getDadosDocumento
}