var Floorplan = require('../models').Floorplan;
var Light = require('../models').Light;
var Scene = require('../models').Scene;
var LightScene = require('../models').LightScene;
var config = require('../config');

var lightsRelation = Floorplan.hasMany(Light, { 
	as: 'lights',
	foreignKey: 'floorplanId'
});

var scenesRelation = Floorplan.hasMany(Scene, { 
	as: 'scenes',
	foreignKey: 'floorplanId'
});

function getById (id) {
	return Floorplan.findById(id, {
		include: [ lightsRelation, scenesRelation ]
	}).then(mapImageUrlPath);
}

function getAll() {
	return Floorplan.findAll({
		include: [ lightsRelation, scenesRelation ]
	}).then(mapImageUrlPaths);
}

function create (floorplanDto) {
	floorplanDto.lights = [];
	return Floorplan.create(floorplanDto, {
		include: [ lightsRelation, scenesRelation ]
	}).then(mapImageUrlPath);
}

function update (floorplanDto) {
	return Floorplan.update(floorplanDto, {
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