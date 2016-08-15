lightSystem.directive('textBox', function(){

	return {
		scope: {
			model: '=',
			label: '@',
			helpText: '@',
			inputClass: '@',
			buttonAction: '=',
			buttonText: '@'
		},
		restrict: 'E', 
		templateUrl: 'components/textBox.html',
		controller: function ($scope) {
			$scope.inputClass = $scope.inputClass || 'input-lg';
		}
	};
});