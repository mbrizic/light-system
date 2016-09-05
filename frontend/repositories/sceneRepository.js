sceneRepository.$inject = ['$http', 'modelMapper', 'repoBuilder']
function sceneRepository($http, modelMapper, repoBuilder) {
	return repoBuilder.create({
		baseUrl: '/api/scenes/',
		modelMapper: modelMapper.scene,
		additionalActions: [ addLight, toggleScene ],
	});

	function addLight(light) {
		$http.post('api/scenes/light', light).then(function (response) {
			console.log(response);
		});
	}

	function toggleScene(sceneId, isTurnedOn) {
		var dto = {
			sceneId: sceneId,
			isTurnedOn: isTurnedOn,
		};

		$http.put('api/scenes/status', dto);
	}
}

lightSystem.service('sceneRepository', sceneRepository);