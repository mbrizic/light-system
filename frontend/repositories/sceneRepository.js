sceneRepository.$inject = ['$http', 'modelMapper', 'repoBuilder']
function sceneRepository($http, modelMapper, repoBuilder) {
	return repoBuilder.create({
		baseUrl: '/api/scenes/',
		modelMapper: modelMapper.scene,
		additionalActions: [ { name: 'addLight', action: addLight } ],
	});

	function addLight(light) {
		$http.post('api/scenes/light', light).then(function (response) {
			console.log(response);
		});
	}
}

lightSystem.service('sceneRepository', sceneRepository);