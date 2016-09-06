dashboardController.$inject = ['$scope', 'floorplanRepository', 'sceneRepository'];
function dashboardController($scope, floorplanRepository, sceneRepository) {
	$scope.light = null;
	$scope.vm = { isEditMode: false };
	$scope.isLoading = true;

	$scope.selectFloorplan = selectFloorplan;
	$scope.onFloorplanClick = onFloorplanClick;
	$scope.onMarkerClick = onMarkerClick;
	$scope.onSceneToggle = onSceneToggle;

	$scope.isFloorplanSelected = isFloorplanSelected;

    $scope.popover = {
        templateId: 'popovers/toggleLightPopover.html',
        title: "Add new light to floorplan",
        isOpen: false,
    };

	init();

	function init(){
		fetchFloorplans();
		fetchScenes();
	}

	function selectFloorplan(floorplan){
		$scope.selectedFloorplan = floorplan;
	};

	function onFloorplanClick() {
		$scope.popover.isOpen = false;
	}

	function onMarkerClick(light) {
		$scope.light = light;
		$scope.popover.isOpen = true;
		$scope.popover.title = light.name; 
	}

	function onSceneToggle() {
		fetchFloorplans();
	}

	function isFloorplanSelected(floorplan) {
		return floorplan.id === $scope.selectedFloorplan.id;
	}

	function fetchFloorplans() {
		floorplanRepository.getAll().then(function (response) {
			$scope.isLoading = false;
			$scope.floorplans = response;
			$scope.selectedFloorplan = response[0];
		});	
	}

	function fetchScenes() {
		sceneRepository.getAll().then(function (response) {
			$scope.scenes = response;
		});
	}
}

lightSystem.controller('dashboardController', dashboardController);