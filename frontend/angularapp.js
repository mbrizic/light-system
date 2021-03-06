var dependencies = ['ngRoute', 'ngAnimate', 'ngFileUpload', 'toaster', 'ui.bootstrap', 'ui.toggle'];

var lightSystem = angular.module('lightSystem', dependencies)
.config(appConfig);

appConfig.$inject = ['$routeProvider', '$locationProvider', '$httpProvider'];
function appConfig($routeProvider, $locationProvider, $httpProvider){
	$routeProvider.
		when('/', {
			templateUrl: 'views/dashboard.html',
			controller: 'dashboardController'
		})
		.when('/all-scenes', {
			templateUrl: 'views/allScenes.html',
			controller: 'allScenesController'
		})
		.when('/all-lights', {
			templateUrl: 'views/allLights.html',
			controller: 'allLightsController'
		})
		.when('/editor/:id?', {
			templateUrl: 'views/editor.html',
			controller: 'editorController'
		})
		.otherwise({
			redirectTo: '/'
		});

	$locationProvider.html5Mode(true);

	$httpProvider.interceptors.push('interceptor');
}

