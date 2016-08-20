repoBuilder.$inject = ['$http'];
function repoBuilder($http) {

	function create(options) {
		var baseUrl = options.baseUrl;
		var modelMapper = options.modelMapper;

		return {
			getAll: getAll,
			getById: getById,
			create: create,
			update: update,
		};

		function getAll() {
			return $http.get(baseUrl).then(modelMapper);
		}

		function getById(id) {
			return $http.get(baseUrl + id);
		}

		function create(dto) {
			return $http.post(baseUrl, dto);
		}

		function update(dto){
			return $http.post(baseUrl + dto.id, dto);
		}
	}

	return {
		create: create,
	};
}

lightSystem.service('repoBuilder', repoBuilder);