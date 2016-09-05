lightSystem.factory('Scene', SceneFactory);

function SceneFactory() {
	function SceneConstructor(sceneViewModel) {
		var scene = sceneViewModel;

		scene.isTurnedOn = function () {
			return scene.lights.every(light => light.isTurnedOn());
		};

		return scene;
	}

	return SceneConstructor;
}
