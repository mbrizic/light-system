lightSystem.directive('lightToggle', function(){
	
	lightToggleController.$inject = ['$scope', 'lightRepository'];
	function lightToggleController($scope, lightRepository) {
		$scope.toggleLight = toggleLight;

		function toggleLight(light){
			if(light.isDiscrete){
				light.intensity = light.intensity ? 1 : 0;
			}

			lightRepository.update(light);
		}
	}

	return {
		scope: {
			light: '=',
		},
		restrict: 'E',
		controller: lightToggleController,
		templateUrl: 'components/specific/lightToggle.html'
	};
});