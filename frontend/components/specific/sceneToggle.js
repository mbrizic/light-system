lightSystem.directive('sceneToggle', function(){
	
	sceneToggleController.$inject = ['$scope', 'sceneRepository'];
	function sceneToggleController($scope, sceneRepository) {
		$scope.isSceneOn = $scope.scene.isTurnedOn();

		$scope.toggleScene = toggleScene;

		function toggleScene(scene){
			sceneRepository.toggleScene(scene.id, $scope.isSceneOn);
			scene.lights.forEach(function (light) {
				light.intensity = light.LightScene.intensity;
			});

			if($scope.onToggle){
				$scope.onToggle();
			}
		}
	}

	return {
		scope: {
			scene: '=',
			onToggle: '=?',
		},
		restrict: 'E',
		controller: sceneToggleController,
		templateUrl: 'components/specific/sceneToggle.html'
	};
});