editorController.$inject = ['$scope', '$http', '$routeParams', 'Upload', '$window'];
function editorController($scope, $http, $routeParams, Upload, $window) {
	$scope.floorplanId = $routeParams.id;
	$scope.isEditMode = $scope.floorplanId == undefined;

	$scope.submit = function() { 
        if ($scope.upload_form.file.$valid && $scope.file) { 
            $scope.upload($scope.file);
        }
    };

    $scope.upload = function (file) {
        Upload.upload({
            url: 'api/fileupload', 
            data: {file: file} 
        }).then(function (resp) { //upload function returns a promise
            if(resp.error_code === 0){
                $window.alert('Success ' + resp.config.data.file.name + 'uploaded. Response: ');
            } else {
                $window.alert('an error occured');
            }
        }, function (resp) {
            console.log('Error status: ' + resp.status);
            $window.alert('Error status: ' + resp.status);
        }, function (evt) { 
            console.log(evt);
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
            $scope.progress = 'progress: ' + progressPercentage + '% '; // capture upload progress
        });
    };
}

lightSystem.controller('editorController', editorController);