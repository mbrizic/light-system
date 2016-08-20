sceneRepository.$inject = ['$http', 'modelMapper', 'repoBuilder']
function sceneRepository($http, modelMapper, repoBuilder) {
	return repoBuilder.create({
		baseUrl: '/api/scenes/',
		modelMapper: modelMapper.scene,
	});
}

lightSystem.service('sceneRepository', sceneRepository);