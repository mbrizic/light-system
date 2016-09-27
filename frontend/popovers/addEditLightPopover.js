addEditLightPopover.$inject = ['$scope', 'lightRepository', 'sceneRepository'];
function addEditLightPopover($scope, lightRepository, sceneRepository) {
	$scope.isEditMode = !!$scope.light.id;
    $scope.selectedSceneId = null;
    $scope.lightSceneIntensity = 0;

	$scope.addLightToScene = addLightToScene;
	$scope.saveLight = saveLight;

	function addLightToScene(sceneId) {
		var dto = {
			sceneId: sceneId,
			lightId: $scope.light.id,
            intensity: +$scope.lightSceneIntensity,
		};

		sceneRepository.addLight(dto).then(function(){
            $scope.isAddToSceneMode = false;
        });
	}

    function saveLight() {
        $scope.isEditMode ? updateLight() : createLight(); 
    }

    function createLight() {
        lightRepository.create($scope.light).then(function (response) {
            $scope.popover.isOpen = false;
            $scope.floorplan.lights.push(response[0]);
        });
    }

    function updateLight() {
        lightRepository.update($scope.light).then(function (response) {
            $scope.popover.isOpen = false;
        });
    }
}

lightSystem.controller('addEditLightPopover', addEditLightPopover);