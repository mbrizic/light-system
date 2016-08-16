lightSystem.service('fileRepository', ['Upload', function (Upload) {
	var baseUrl = '/api/fileupload/';

	return {
		upload: upload,
	};

	function upload(file) {
		return Upload.upload({
            url: baseUrl, 
            data: { file: file }
        });
	}
}]);