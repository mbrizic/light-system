var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var colors = require('colors');
var multer = require('multer');
var config = require('./backend/config');

var app = express();

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "http://localhost");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static('../client'));

app.set('views', path.join(__dirname, 'frontend/views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//set up public folders
app.use('/lib', express.static(__dirname + '/bower_components'));
app.use('/src', express.static(__dirname + '/frontend'));
app.use('/views', express.static(__dirname + '/frontend/views'));
app.use('/popovers', express.static(__dirname + '/frontend/popovers'));
app.use('/components', express.static(__dirname + '/frontend/components'));
app.use('/models', express.static(__dirname + '/frontend/models'));
app.use('/services', express.static(__dirname + '/frontend/services'));
app.use('/repositories', express.static(__dirname + '/frontend/repositories'));
app.use('/styles', express.static(__dirname + '/frontend/styles'));
app.use(config.imagesFolderUrl, express.static(__dirname + '/uploads'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes
var lightsApi = require('./backend/api/lightsApi');
var scenesApi = require('./backend/api/scenesApi');
var floorplansApi = require('./backend/api/floorplansApi');
var fileUploadApi = require('./backend/api/fileUploadApi');

var routes = require('./backend/api/routes');

app.use('/api/lights', lightsApi);
app.use('/api/scenes', scenesApi);
app.use('/api/floorplans', floorplansApi);
app.use('/api/fileUpload', fileUploadApi);
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