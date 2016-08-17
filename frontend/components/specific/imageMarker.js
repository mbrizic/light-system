lightSystem.directive('imageMarker', function(){
	imageMarkerController.$inject = ['$scope'];
	function imageMarkerController($scope) {

	}

	function imageMarkerLink($scope, $el, $attrs){
		var elementMargin = 40;
		
		var imageElement = $('img.floorplan-image');
		var imageElementOffset = imageElement.offset();

		$el.offset({ 
			top: imageElementOffset.top + $scope.marker.y - elementMargin, 
			left: imageElementOffset.left + $scope.marker.x - elementMargin,
		});
	}

	return {
		scope: {
			marker: '='
		},
		restrict: 'E',
		controller: imageMarkerController,
		link: imageMarkerLink,
	};
});