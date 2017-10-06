var router = require('express')();

var body_parser = require('body-parser');
router.use(body_parser.urlencoded({ extended: false }));
router.use(body_parser.json());

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
  res.send("ok");
});

router.post('/produtos', function (req, res) {
    res.send("ok");
   res.end();
});

router.options('/produtos', function (req, res) {
  res.end();
});

module.exports = router;