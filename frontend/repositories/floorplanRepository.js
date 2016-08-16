lightSystem.service('floorplanRepository', ['$http', function ($http) {
	var baseUrl = '/api/floorplans/';

	return {
		getAll: getAll,
		getById: getById,
		createNew: createNew,
	};

	function getAll() {
		return $http.get(baseUrl);
	}

	function getById(id) {
		return $http.get(baseUrl + id);
	}

	function createNew(newFloorplanDto) {
		return $http.post(baseUrl, newFloorplanDto);
	}

	function update(lightDto){
		return $http.post(baseUrl + lightDto.id, lightDto);
	}
}]);