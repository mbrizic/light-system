var express = require('express');
var router = express.Router();
var multer = require('multer');
var config = require('../config');

router.post('/', (req, res) => {
    upload(req, res, (err) => {
        if(err){
             res.json({ error_code: 1, err_desc: err });
             return;
        }

        res.json({ filename: req.file.filename });
    });
});

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, config.uploadFolder)
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
    }
});

var upload = multer({
    storage: storage
}).single('file');

module.exports = router;