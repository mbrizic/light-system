floorplanRepository.$inject = ['$http','modelMapper', 'repoBuilder']
function floorplanRepository($http, modelMapper, repoBuilder) {
	return repoBuilder.create({
		baseUrl: '/api/floorplans/',
		modelMapper: modelMapper.floorplan,
	});
}

lightSystem.service('floorplanRepository', floorplanRepository);