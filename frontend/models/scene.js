lightSystem.factory('Scene', SceneFactory);

function SceneFactory() {
	function SceneConstructor(sceneViewModel) {
		var scene = sceneViewModel;

		return scene;
	}

	return SceneConstructor;
}
