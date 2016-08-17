lightSystem.directive('floorplanRenderer', function(){
	floorplanRendererController.$inject = ['$scope'];
	function floorplanRendererController($scope) {

	}

	return {
		scope: {
			floorplan: '=',
			popover: '=',
			onFloorplanClick: '=',
			onPopoverSave: '=',
		},
		restrict: 'E',
		controller: floorplanRendererController,
		templateUrl: 'components/specific/floorplanRenderer.html'
	};
});