var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var pagesRouter = require('./routes/pages');

var app = express();
// var router = express.Router();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/indianapolis', pagesRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
  // const err = new Error('Not Found');
  // err.message = 'Page Not Found';
  // err.status = 404;
  // console.log(`Error ${err.status}: ${err.message}`);
  // res.render('error/error', { err });
  // next();
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error/error', {err});
});

module.exports = app;
