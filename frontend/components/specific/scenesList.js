lightSystem.directive('scenesList', function(){
	scenesListController.$inject = ['$scope', 'sceneRepository'];
	function scenesListController($scope, sceneRepository) {
		$scope.newScene = {};

		$scope.addNewScene = addNewScene;

		function addNewScene() {
			$scope.newScene.floorplanId = $scope.floorplanId,

			sceneRepository.create($scope.newScene).then(function (response) {
				$scope.scenes.push(response);
			});
		}
	}

	return {
		scope: {
			scenes: '=',
			isEditMode: '=',
			floorplanId: '=',
		},
		restrict: 'E',
		controller: scenesListController,
		templateUrl: 'components/specific/scenesList.html'
	};
});