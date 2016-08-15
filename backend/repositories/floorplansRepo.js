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