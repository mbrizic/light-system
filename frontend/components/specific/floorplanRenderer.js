lightSystem.directive('floorplanRenderer', function(){
	floorplanRendererController.$inject = ['$scope'];
	function floorplanRendererController($scope) {

	}

	return {
		scope: {
			floorplan: '=',
			light: '=',
			popover: '=',
			onFloorplanClick: '=',
			onMarkerClick: '=',
			onPopoverSave: '=',
		},
		restrict: 'E',
		controller: floorplanRendererController,
		templateUrl: 'components/specific/floorplanRenderer.html'
	};
});