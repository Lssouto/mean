let router = require('express')();
let body_parser = require('body-parser');


let produto = require('./produtosRouter');
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
  produto.produtoRouter._get((callback)=>{
    res.send(callback);
  });
});

router.put('/produtos',(req,res)=>{
  produto.produtoRouter._update(req.body,(callback)=>{
    res.send(callback);
  });
});

router.delete('/produtos/:id',(req,res)=>{
  produto.produtoRouter._deleteOne(req.params.id,(callback)=>{
    res.send(callback);
  });
});

router.post('/produtos', (req, res) => {
  produto.produtoRouter._add(req.body,(callback)=>{
    res.send(callback);
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