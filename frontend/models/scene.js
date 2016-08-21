lightSystem.factory('Scene', SceneFactory);

function SceneFactory() {
	function SceneConstructor(sceneViewModel) {
		var scene = sceneViewModel;

		scene.isTurnedOn = function () {
			//TODO: faked
			return Math.random > 0.5;
		}

		return scene;
	}

	return SceneConstructor;
}
