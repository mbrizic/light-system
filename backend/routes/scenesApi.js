var express = require('express');
var router = express.Router();
var scenesRepo = require('../repositories/scenesRepo');

router.get('/', (req, res, next) => {
	scenesRepo.getAll().then(response => {
		res.send(response);
	});
});

router.get('/:id', (req, res, next) => {
	var id = req.params.id;

	scenesRepo.getById(id).then(response => {
		res.send(response);
	});
});

router.post('/', (req, res, next) => {
	var dto = req.body;
	
	scenesRepo.create(dto).then(response => {
		res.send(response);
	});
});

router.put('/', (req, res, next) => {
	var id = req.params.id;
	var dto = req.body;

	scenesRepo.update(dto).then(response => {
		res.send(response);
	});
});

module.exports = router;