var scene = require('../models').Scene;
var light = require('../models').Light;
var floorplan = require('../models').Floorplan; 
var lightScene = require('../models').LightScene;

var lightsRelation = light.belongsToMany(scene, { 
	as: 'lights',
	through: lightScene,
	foreignKey: 'lightId',
});

var scenesRelation = light.belongsToMany(scene, { 
	as: 'scenes',
	through: lightScene,
	foreignKey: 'sceneId',
});

var floorplanRelation = scene.belongsTo(floorplan, {
	as: 'floorplan',
	foreignKey: 'floorplanId',
});

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
	return scene.findAll({
		include: [ lightsRelation, floorplanRelation ],
	});
}

function create (sceneDto) {
	return scene.create(sceneDto, {
		include: [ lightsRelation, scenesRelation ],
	});
}

function update (sceneDto) {
	return scene.update(sceneDto, {
		where: {
			id: sceneDto.id
		}
	});
}

function addLight(lightSceneDto) {
	return lightScene.create(lightSceneDto, {
		include: [ lightsRelation, scenesRelation ],
	});
}

function toggleLights(sceneId, isTurnedOn) {
	var fieldsToUpdate = { intensity: isTurnedOn ? 1 : 0 };

	return scene.find({
 		where: { id: sceneId }, 
  		include: [ lightsRelation ],
	}).then (scene => {
		return scene.lights.map(light => light.updateAttributes(fieldsToUpdate));
	});
}

module.exports = {
	getById,
	getForFloorplan,
	getAll,
	create,
	update,
	addLight,
	toggleLights,
};