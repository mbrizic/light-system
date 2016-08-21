lightSystem.directive('selectDropdown', function(){
	dropdownController.$inject = ['$scope', '$http'];

	function dropdownController($scope, $http) {
		if($scope.options && $scope.url){
			console.error('You cant have both URL and explicit model.');
		}

		if($scope.url){
			$http.get($scope.url).then(function (response) {
				$scope.options = response;
			});
		}
	}

	return {
		scope: {
			model: '=',
			options: '=?',
			url: '@',
			label: '@'
		},
		restrict: 'E',
		controller: dropdownController, 
		templateUrl: 'components/selectDropdown.html'
	};
});