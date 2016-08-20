lightRepository.$inject = ['$http', 'repoBuilder', 'modelMapper']
function lightRepository($http, repoBuilder, modelMapper) {
	return repoBuilder.create({
		baseUrl: '/api/lights/',
		modelMapper: modelMapper.light,
	});
}

lightSystem.service('lightRepository', lightRepository);