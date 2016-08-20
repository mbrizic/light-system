dashboardController.$inject = ['$scope', 'floorplanRepository', '$location', 'sharedDataService'];
function dashboardController($scope, floorplanRepository, $location, sharedDataService) {
	$scope.light = null;
	$scope.isEditMode = true;

	$scope.selectFloorplan = selectFloorplan;
	$scope.onFloorplanClick = onFloorplanClick;
	$scope.onMarkerClick = onMarkerClick;

	$scope.isFloorplanSelected = isFloorplanSelected;

    $scope.popover = {
        templateId: 'popovers/toggleLightPopover.html',
        title: "Add new light to floorplan",
        isOpen: false,
    };

	init();

	function init(){
		floorplanRepository.getAll().then(function (response) {
			$scope.floorplans = response;
			$scope.selectedFloorplan = response[0];
		});	
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

	function isFloorplanSelected(floorplan) {
		return floorplan.id === $scope.selectedFloorplan.id;
	}
}

lightSystem.controller('dashboardController', dashboardController);