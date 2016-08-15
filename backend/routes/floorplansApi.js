var express = require('express');
var router = express.Router();
var floorplansRepo = require('../repositories/floorplansRepo');

router.get('/', function(req, res, next) {
	floorplansRepo.getAll().then(function(response) {
		res.send(response);
	});
});

router.get('/:id', function(req, res, next) {
	var id = req.params.id;

	floorplansRepo.getById(id).then(function(response) {
		res.send(response);
	});
});

module.exports = router;