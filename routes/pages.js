var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Welcome to Indianapolis!' })
});

router.get('/about', function(req, res, next) {
  res.render('pages/about', { title: 'About Indianapolis' })
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
