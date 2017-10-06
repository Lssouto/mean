let router = require('express')();
// Mongo
let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/dbloja";
let ObjectId = require('mongodb').ObjectID;
// endMongo
let body_parser = require('body-parser');
router.use(body_parser.urlencoded({ extended: false }));
router.use(body_parser.json());

// Mongo
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

let delDadosDocumento = (collection,dado,callback)=>{
	getConnection((db)=>{
		db.collection(collection).remove(dado, function(err, res) {
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

//Rotas

router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT,DELETE');
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
    if ('OPTIONS' == req.method) {
        return res.send(200);
    }
    next();
});

router.get('/produtos', function (req, res) {
  getDadosDocumento("produtos",(callback)=>{
  	res.send(callback);
  });
});

router.post('/produtos', function (req, res) {
  	insertDadosDocumento("produtos",req.body,(callback)=>{
  		res.send(callback);
  	});
});

router.post('/delProdutos', function (req, res) {
  	req.body.forEach((pos)=>{
	  	delDadosDocumento("produtos",{ _id: ObjectId(pos._id) },(callback)=>{
	  		res.send(callback);
	  	});
  	});
});

router.options('/produtos', function (req, res) {
  res.end();
});

module.exports = router;