var light = require('../models').Light;
var floorplan = require('../models').Floorplan;

var floorplanRelation = light.belongsTo(floorplan, {
	as: 'floorplan',
	foreignKey: 'floorplanId'
});

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
	return light.findAll({
		include: [ floorplanRelation ]
	});
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