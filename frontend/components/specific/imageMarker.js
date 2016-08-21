lightSystem.directive('imageMarker', function(){
	imageMarkerController.$inject = ['$scope'];
	function imageMarkerController($scope) {


	}

	function imageMarkerLink($scope, $el, $attrs){
		var elementMargin = 40;
		
		var imageElement = $('img.floorplan-image');
		var imageElementOffset = imageElement.offset();

		$el.offset({ 
			top: imageElementOffset.top + $scope.light.y - elementMargin, 
			left: imageElementOffset.left + $scope.light.x - elementMargin,
		});

		$scope.$watch('light.intensity', function () {
			if($scope.light.isTurnedOn())
				$el.css('background-color', 'yellow');
			else
				$el.css('background-color', 'grey');
		});

	}

	return {
		scope: {
			light: '=',
		},
		restrict: 'E',
		controller: imageMarkerController,
		link: imageMarkerLink,
	};
});