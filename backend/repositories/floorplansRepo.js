var floorplan = require('../models').Floorplan;
var light = require('../models').Light;

var lightsRelation = floorplan.hasMany(light, { 
	as: 'lights',
	foreignKey: 'floorplanId'
});

function getById (id) {
	return floorplan.findById(id, {
		include: [ lightsRelation ]
	});
}

function getAll() {
	return floorplan.findAll({
		include: [ lightsRelation ]
	});
}

function create (floorplanDto) {
	return floorplan.create(floorplanDto);
}

function update (floorplanDto) {
	return floorplan.update(floorplanDto, {
		where: {
			id: floorplanDto.id
		}
	});
}

module.exports = {
	getById,
	getAll,
	create,
	update,
};