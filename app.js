var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var colors = require('colors');
var config = require('./backend/config');

var app = express();

app.set('views', path.join(__dirname, 'frontend/views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//set up public folders
app.use('/lib', express.static(__dirname + '/bower_components'));
app.use('/src', express.static(__dirname + '/frontend'));
app.use('/views', express.static(__dirname + '/frontend/views'));
app.use('/components', express.static(__dirname + '/frontend/components'));
app.use('/services', express.static(__dirname + '/frontend/services'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes
var lightsApi = require('./backend/routes/lightsApi');
var floorplansApi = require('./backend/routes/floorplansApi');
var routes = require('./backend/routes/routes');

//TODO: better namespace those routes
app.use('/api/lights', lightsApi);
app.use('/api/floorplans', floorplansApi);
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        console.log('**** ERR: '.red + err.message.red);
        res.status(err.status || 500);
        res.render('error.html', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error.html', {
        message: err.message,
        error: {}
    });
});

module.exports = app;