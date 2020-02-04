var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs')

const db = require('./DB/db');
const authorization = require('./MiddleWare/authorization');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const adminRouter = require('./routes/admin');
const ordersRouter = require('./routes/orders');
const productRouter = require('./routes/products')
var app = express();


// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');



//Conf
app.disable('x-powered-by');

// setup the logger
// log all requests to access.log
app.use(morgan('common', {
  stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
}));
app.use(helmet());
app.use(cors());
app.use(function (req, res, next) {
  req.db = db;
  return next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//custom middleware
 app.use('/admin', authorization);
app.use('/orders', authorization);


//router
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/orders', ordersRouter)
app.use('/admin', adminRouter);
app.use('/product', productRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
