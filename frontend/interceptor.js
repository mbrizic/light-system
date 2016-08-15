interceptor.$inject = ['$q', 'toaster'];
function interceptor($q, toaster) {

	this.response = function (config) {
		var contentType = config.headers()['content-type'];

		if(config.statusText.contains('Created')){
			toaster.success('Success.');			
		}	
		
		if(contentType && contentType.contains('application/json')){
			return config.data;
		}

		return config;
	};

	this.responseError = function (config) {
		toaster.error('Error', config.data);
		return $q.reject(config);
	};
}

lightSystem.service('interceptor', interceptor);