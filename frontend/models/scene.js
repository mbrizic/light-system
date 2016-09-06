lightSystem.factory('Scene', SceneFactory);

function SceneFactory() {
	function SceneConstructor(sceneViewModel) {
		var scene = sceneViewModel;

		scene.hasLights = function () {
			return scene.lights && scene.lights.length > 0;
		}

		scene.isTurnedOn = function () {
			return scene.hasLights() && scene.lights.every(light => light.isTurnedOn());
		};

		return scene;
	}

	return SceneConstructor;
}
