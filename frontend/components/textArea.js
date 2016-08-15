lightSystem.directive('textArea', function(){

	return {
		scope: {
			model: '=',
			label: '@'
		},
		restrict: 'E', 
		templateUrl: 'components/textArea.html'
	};
});