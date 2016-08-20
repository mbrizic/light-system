lightSystem.service('floorplanRepository', ['$http', 'Floorplan', 'Light', 'Scene', function ($http, Floorplan, Light, Scene) {
	var baseUrl = '/api/floorplans/';

	return {
		getAll: getAll,
		getById: getById,
		createNew: createNew,
		update: update,
	};

	function getAll() {
		return $http.get(baseUrl).then(mapIntoModel);
	}

	function getById(id) {
		return $http.get(baseUrl + id);
	}

	function createNew(newFloorplanDto) {
		return $http.post(baseUrl, newFloorplanDto);
	}

	function update(floorplanDto){
		return $http.put(baseUrl, floorplanDto);
	}

	function mapIntoModel(floorplans){
		if(floorplans.constructor !== Array){
			floorplans = [floorplans];
		}

		return floorplans.map(function (floorplan) {
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
}]);