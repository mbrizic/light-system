lightSystem.service('lightRepository', ['$http', 'Light', function ($http, Light) {
	var baseUrl = '/api/lights/';

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

	function createNew(newLightDto) {
		return $http.post(baseUrl, newLightDto);
	}

	function update(lightDto){
		return $http.post(baseUrl + lightDto.id, lightDto);
	}

	function mapIntoModel(lights){
		if(lights.constructor !== Array){
			lights = [lights];
		}

		return lights.map(function (light) {
			return Light(light);
		});
	}
}]);