var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
var env       = process.env.NODE_ENV || "development";
var config    = require('./config');
var sequelize = new Sequelize(config.connectionString);
var db        = {};

var modelsDirectoryPath = __dirname + '/models';

fs
.readdirSync(modelsDirectoryPath)
.filter(function(file) {
    return (file.indexOf(".") !== 0);
})
.forEach(function(file) {
    var model = sequelize.import(path.join(modelsDirectoryPath, file));
    db[model.name] = model;
});

Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
    if("seed" in db[modelName]){
        //db[modelName].seed();
    }
});

//Uncomment this to reset db
//sequelize.sync({force: true});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;