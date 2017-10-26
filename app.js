var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var cors = require('cors')
var index = require('./routes/index');
var users = require('./routes/users');
var suggestions = require('./routes/suggestions');
var connections = require('./routes/connections');
var seed = require('./routes/seed');
var seedChat = require('./routes/chatSeed');
var chat = require('./routes/chat');
var lessons = require('./routes/lessons');
var auth = require('./routes/auth');
var sockets = require('./sockets')
var app = express();
var server = http.createServer(app);
var io = require('socket.io')(server);
sockets(io);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/seed', seed);
app.use('/suggestions', suggestions);
app.use('/network', connections);
app.use('/seedChat', seedChat);
app.use('/chat', chat);
app.use('/lessons', lessons)
app.use('/auth', auth)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = {
  app,
  server
};
