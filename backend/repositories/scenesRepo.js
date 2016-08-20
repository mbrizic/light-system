var scene = require('../models').Scene; 

function getById (id) {
	return scene.findById(id);
}

function getForFloorplan (floorplanId){
	return scene.findOne({
		where: {
			floorplanId: floorplanId,
		}
	});
}

function getAll() {
	return scene.findAll();
}

function create (lightDto) {
	return scene.create(lightDto);
}

function update (lightDto) {
	return scene.update(lightDto, {
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