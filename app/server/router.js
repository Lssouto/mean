let router = require('express')();
let body_parser = require('body-parser');

// Mongo
let mongodb = require('./mongodb');
let ObjectId = require('mongodb').ObjectID;

//Remover depois
let init = require('./init');

router.use(body_parser.urlencoded({ extended: false }));
router.use(body_parser.json());


router.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT,DELETE');
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
    if ('OPTIONS' == req.method) {
        return res.send(200);
    }
    next();
});

router.get('/produtos', (req, res) => {
  mongodb.getDadosDocumento("produtos",(callback)=>{
  	res.send(callback);
  });
});

router.post('/produtos', (req, res) => {
  	mongodb.insertDadosDocumento("produtos",req.body,(callback)=>{
  		res.send(callback);
  	});
});

router.post('/delProdutos', (req, res) => {
  	req.body.forEach((pos)=>{
	  	mongodb.delDadosDocumento("produtos",{ _id: ObjectId(pos._id) },(callback)=>{
	  		res.send(callback);
	  	});
  	});
});

router.get('/init',(req,res)=>{
	res.end(init.initial());
});

router.get('/drop-db',(req,res)=>{
  res.end(init.end());
});

router.options('/produtos', (req, res) => {
  res.end();
});

module.exports = router;