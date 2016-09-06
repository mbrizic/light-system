lightSystem.factory('Scene', SceneFactory);

function SceneFactory() {
	function SceneConstructor(sceneViewModel) {
		var scene = sceneViewModel;

		scene.isTurnedOn = function () {
			var hasLights = scene.lights && scene.lights.length > 0;
			return hasLights && scene.lights.every(light => light.isTurnedOn());
		};

		return scene;
	}

	return SceneConstructor;
}
