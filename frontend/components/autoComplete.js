lightSystem.directive('autoComplete', function(){

	return {
		scope: {
			model: '=',
			options: '=',
			label: '@'
		},
		restrict: 'E', 
		templateUrl: 'components/autoComplete.html'
	};
});