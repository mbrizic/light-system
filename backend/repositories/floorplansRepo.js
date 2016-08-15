var floorplan = require('../models').Floorplan; 

function getById (id) {
	return floorplan.findById(id);
}

function getAll() {
	return floorplan.findAll();
}

function create (lightDto) {
	return floorplan.create(lightDto);
}

function update (lightDto) {
	return floorplan.update(lightDto, {
		where: {
			id: lightDto.id
		}
	});
}

module.exports = {
	getById,
	getAll,
	create,
	update,
};