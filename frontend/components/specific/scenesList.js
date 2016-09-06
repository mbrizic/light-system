lightSystem.directive('scenesList', function() {
	scenesListController.$inject = ['$scope', 'sceneRepository'];
	function scenesListController($scope, sceneRepository) {
		$scope.newScene = {};

		$scope.addScene = addScene;

		function addScene() {
			$scope.newScene.floorplanId = $scope.floorplanId;

			sceneRepository.create($scope.newScene).then(function (response) {
				$scope.scenes.push(response[0]);
			});
		}
	}

	return {
		scope: {
			scenes: '=',
			isEditMode: '=',
			floorplanId: '=',
			onSceneToggle: '=',
		},
		restrict: 'E',
		controller: scenesListController,
		templateUrl: 'components/specific/scenesList.html'
	};
});