lightSystem.directive('appHeader', function(){
	headerController.$inject = ['$scope'];
	function headerController($scope) {

	}

	return {
		scope: {
			loggedInUser: '='
		},
		restrict: 'E',
		controller: headerController,
		templateUrl: 'components/appHeader.html'
	};
});