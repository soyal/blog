var express = require('express');
var router = express.Router();
var config = require('../config');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Infinite Ryvius',
    config: config
  });
});

module.exports = router;
