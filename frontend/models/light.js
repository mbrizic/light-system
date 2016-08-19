lightSystem.factory('Light', LightFactory);

function LightFactory() {
	function LightConstructor(lightViewModel) {
		var light = lightViewModel;

		light.isTurnedOn = function () {
			return this.intensity != 0;
		}
		
		return light;
	}

	return LightConstructor;
}
