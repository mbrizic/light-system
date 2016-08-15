var light = require('../models').Light; 

function getById (id) {
	return light.findById(id);
}

function getForFloorplan (floorplanId){
	return light.findOne({
		where: {
			floorplanId: floorplanId,
		}
	});
}

function getAll() {
	return light.findAll();
}

function create (lightDto) {
	return light.create(lightDto);
}

function update (lightDto) {
	return light.update(lightDto, {
		where: {
			id: lightDto.id
		}
	});
}

module.exports = {
	getById,
	getForFloorplan,
	getAll,
	create,
	update,
};