dashboardController.$inject = ['$scope', '$http', '$location', 'sharedDataService'];
function dashboardController($scope, $http, $location, sharedDataService) {
	$scope.selectFloorplan = selectFloorplan;

	init();

	function init(){
		$http.get('/api/floorplans').then(function (response) {
			$scope.floorplans = response;
			$scope.selectedFloorplan = response[0];
		});	
	}

	function selectFloorplan(floorplan){
		$scope.selectedFloorplan = floorplan;
	};
}

lightSystem.controller('dashboardController', dashboardController);