var floorplan = require('../models').Floorplan;
var light = require('../models').Light;
var config = require('../config');

var lightsRelation = floorplan.hasMany(light, { 
	as: 'lights',
	foreignKey: 'floorplanId'
});

function getById (id) {
	return floorplan.findById(id, {
		include: [ lightsRelation ]
	}).then(mapImageUrlPath);
}

function getAll() {
	return floorplan.findAll({
		include: [ lightsRelation ]
	}).then(mapImageUrlPaths);
}

function create (floorplanDto) {
	floorplanDto.lights = [];
	return floorplan.create(floorplanDto, {
		include: [ lightsRelation ]
	}).then(mapImageUrlPath);
}

function update (floorplanDto) {
	return floorplan.update(floorplanDto, {
		where: {
			id: floorplanDto.id
		}
	});
}

function mapImageUrlPath(response){
	response.imageUrl = config.imagesFolderUrl + '/' + response.imageUrl;
	return response;
}

function mapImageUrlPaths(response){
	return response.map(x => { 
		x.imageUrl = config.imagesFolderUrl + '/' + x.imageUrl;
		return x;
	});
}

module.exports = {
	getById,
	getAll,
	create,
	update,
};