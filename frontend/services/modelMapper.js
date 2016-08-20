modelMapper.$inject = ['Floorplan', 'Light', 'Scene'];
function modelMapper(Floorplan, Light, Scene) {

	function floorplanMapper(floorplans) {
		_ensureWrappedInArray(floorplans);
		return _mapFloorplan(floorplans);
	}

	function lightMapper(lights){
		_ensureWrappedInArray(lights);
		return _map(Light, lights);
	}

	function sceneMapper(lights){
		_ensureWrappedInArray(lights);
		return _map(Light, lights);
	}

	function _ensureWrappedInArray(entity) {
		if(entity.constructor !== Array){
			entity = [entity];
		}
	}

	function _map(ModelClass, entities) {
		return entities.map(function (entity) {
			return ModelClass(entity);
		});
	}

	function _mapFloorplan(entities) {
		return entities.map(function (floorplan) {
			floorplan = Floorplan(floorplan);

			floorplan.lights = floorplan.lights.map(function(light) { 
				return Light(light);
			});

			floorplan.scenes = floorplan.scenes.map(function(scene) { 
				return Scene(scene);
			});

			return floorplan;
		});
	}

	return {
		floorplan: floorplanMapper,
		light: lightMapper,
		scene: sceneMapper,
	};
}

lightSystem.service('modelMapper', modelMapper);