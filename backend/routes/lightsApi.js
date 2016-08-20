var express = require('express');
var router = express.Router();
var lightsRepo = require('../repositories/lightsRepo');

router.get('/', (req, res, next) => {
	lightsRepo.getAll().then(response => {
		res.send(response);
	});
});

router.get('/:id', (req, res, next) => {
	var id = req.params.id;

	lightsRepo.getById(id).then(response => {
		res.send(response);
	});
});

router.post('/', (req, res, next) => {
	var dto = req.body;
	
	lightsRepo.create(dto).then(response => {
		res.send(response);
	});
});

router.put('/', (req, res, next) => {
	var id = req.params.id;
	var dto = req.body;

	lightsRepo.update(dto).then(response => {
		res.send(response);
	});
});

module.exports = router;