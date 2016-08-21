repoBuilder.$inject = ['$http'];
function repoBuilder($http) {

	function create(options) {
		var baseUrl = options.baseUrl;
		var modelMapper = options.modelMapper;
		var additionalActions = options.additionalActions;

		var actions = {
			getAll: getAll,
			getById: getById,
			create: create,
			update: update,
		};

		if(additionalActions){
			additionalActions.forEach(function (action) {
				actions[action.name] = action.action;
			});
		}

		return actions;

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
			return $http.put(baseUrl, dto);
		}
	}

	return {
		create: create,
	};
}

lightSystem.service('repoBuilder', repoBuilder);