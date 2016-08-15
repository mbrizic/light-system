lightSystem.directive('checkBox', function(){

	return {
		scope: {
			model: '=',
			onChange: '=',
			label: '@'
		},
		restrict: 'E', 
		templateUrl: 'components/checkBox.html'
	};
});