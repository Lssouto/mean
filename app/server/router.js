var router = require('express')();

var body_parser = require('body-parser');
router.use(body_parser.urlencoded({ extended: false }));
router.use(body_parser.json());


router.options('/produtos', function (req, res) {
  res.end();
});

module.exports = router;