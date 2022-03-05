var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Welcome to Indianapolis!' })
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'Welcome to Indianapolis!' })
});

router.get('/activities', function(req, res, next) {
  res.render('index', { title: 'Welcome to Indianapolis!' })
});

router.get('/hotels', function(req, res, next) {
  res.render('index', { title: 'Welcome to Indianapolis!' })
});

router.get('/gallery', function(req, res, next) {
  res.render('index', { title: 'Welcome to Indianapolis!' })
});

router.get('/subscribe', function(req, res, next) {
  res.render('index', { title: 'Welcome to Indianapolis!' })
});

module.exports = router;
