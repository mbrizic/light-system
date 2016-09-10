allScenesController.$inject = ['$scope', 'sceneRepository']; 
function allScenesController($scope, sceneRepository){
	init();

	function init() {
		getScenes();
	}

	function getScenes(){
		sceneRepository.getAll().then(function (response) {
			$scope.scenes = response;
		});	
	}
}

lightSystem.controller('allScenesController', allScenesController);
