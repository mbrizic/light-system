var floorplan = require('../models').Floorplan;
var Light = require('../models').Light;
var Scene = require('../models').Scene;
var config = require('../config');

var lightsRelation = floorplan.hasMany(Light, { 
	as: 'lights',
	foreignKey: 'floorplanId'
});

var scenesRelation = floorplan.hasMany(Scene, { 
	as: 'scenes',
	foreignKey: 'floorplanId'
});

function getById (id) {
	return floorplan.findById(id, {
		include: [ lightsRelation, scenesRelation ]
	}).then(mapImageUrlPath);
}

function getAll() {
	return floorplan.findAll({
		include: [ lightsRelation, scenesRelation ]
	}).then(mapImageUrlPaths);
}

function create (floorplanDto) {
	floorplanDto.lights = [];
	return floorplan.create(floorplanDto, {
		include: [ lightsRelation, scenesRelation ]
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