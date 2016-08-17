var express = require('express');
var router = express.Router();
var floorplansRepo = require('../repositories/floorplansRepo');

router.get('/', (req, res, next) => {
	floorplansRepo.getAll().then(response => {
		res.send(response);
	});
});

router.get('/:id', (req, res, next) => {
	var id = req.params.id;

	floorplansRepo.getById(id).then(response => {
		res.send(response);
	});
});

router.post('/', (req, res, next) => {
	var dto = req.body;

	floorplansRepo.create(dto).then(response => {
		res.send(response);
	});
});

router.put('/', (req, res, next) => {
	var dto = req.body;

	floorplansRepo.update(dto).then(response => {
		res.send(response);
	});
});
module.exports = router;