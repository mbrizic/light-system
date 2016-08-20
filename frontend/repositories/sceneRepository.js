lightSystem.service('sceneRepository', ['$http', 'Scene', function ($http, Scene) {
	var baseUrl = '/api/scenes/';

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

	function createNew(newSceneDto) {
		return $http.post(baseUrl, newSceneDto);
	}

	function update(sceneDto){
		return $http.post(baseUrl + sceneDto.id, sceneDto);
	}

	function mapIntoModel(scenes){
		if(scenes.constructor !== Array){
			scenes = [scenes];
		}

		return scenes.map(function (scene) {
			return Scene(scene);
		});
	}
}]);