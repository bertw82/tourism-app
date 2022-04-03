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
  res.render('pages/activities', { title: 'Things To Do' })
});

router.get('/stay', function(req, res, next) {
  res.render('pages/stay', { title: 'Where to Stay in Indy' })
});

router.get('/gallery', function(req, res, next) {
  res.render('pages/gallery', { title: 'Photo Gallery' })
});

router.get('/subscribe', function(req, res, next) {
  res.render('pages/subscribe', { title: 'Welcome to Indianapolis!' })
});

module.exports = router;
