dashboardController.$inject = ['$scope', 'floorplanRepository', '$location', 'sharedDataService'];
function dashboardController($scope, floorplanRepository, $location, sharedDataService) {
	$scope.selectFloorplan = selectFloorplan;

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
}

lightSystem.controller('dashboardController', dashboardController);