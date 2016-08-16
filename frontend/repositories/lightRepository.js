lightSystem.service('lightRepository', ['$http', function ($http) {
	var baseUrl = '/api/lights/';

	return {
		getAll: getAll,
		getById: getById,
		createNew: createNew,
		update: update,
	};

	function getAll() {
		return $http.get(baseUrl);
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
}]);