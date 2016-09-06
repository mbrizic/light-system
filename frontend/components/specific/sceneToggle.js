lightSystem.directive('sceneToggle', function(){
	
	sceneToggleController.$inject = ['$scope', 'sceneRepository'];
	function sceneToggleController($scope, sceneRepository) {
		$scope.isSceneOn = $scope.scene.isTurnedOn();

		$scope.toggleScene = toggleScene;

		function toggleScene(scene){
			sceneRepository.toggleScene(scene.id, $scope.isSceneOn);
			$scope.onToggle();
		}
	}

	return {
		scope: {
			scene: '=',
			onToggle: '=',
		},
		restrict: 'E',
		controller: sceneToggleController,
		templateUrl: 'components/specific/sceneToggle.html'
	};
});