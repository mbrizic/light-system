lightSystem.directive('uploadForm', function(){

	return {
		scope: {
			onSubmit: "=",
		},
		restrict: 'E', 
		templateUrl: 'components/uploadForm.html',
		controller: function ($scope) {
			$scope._onSubmit = function () {
        		if ($scope.uploadForm.file.$valid && $scope.file) {
        			$scope.onSubmit($scope.file);
        		}
			}
		}
	};
});