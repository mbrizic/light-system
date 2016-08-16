allLightsController.$inject = ['$scope', 'lightRepository']; 
function allLightsController($scope, lightRepository){
	$scope.toggleLight = toggleLight;

	init();

	function init(){
		lightRepository.getAll().then(function (response) {
			$scope.lights = response;
		});	
	}

	function toggleLight(light){
		if(light.isDiscrete)
			light.intensity = !light.intensity ? 1 : 0;

		$http.post('api/lights/' + light.id, light).then(function (response) {
			console.log(response);
		})
	}
}

lightSystem.controller('allLightsController', allLightsController);
