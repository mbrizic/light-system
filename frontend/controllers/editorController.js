editorController.$inject = ['$scope', '$http', '$routeParams', '$location', 'Upload'];
function editorController($scope, $http, $routeParams, $location, Upload) {
    $scope.floorplan = {};
	$scope.floorplanId = $routeParams.id;
	$scope.isEditMode = $scope.floorplanId == undefined;
    $scope.isUploadPhase = true;
    $scope.isLightPositionPhase = false;

    $scope.uploadImage = uploadImage;
    $scope.updateFloorplan = updateFloorplan;

    function uploadImage (file) {
        Upload.upload({
            url: 'api/fileupload', 
            data: { file: file }
        }).then(function (response) {
            $scope.isUploadPhase = false;

            $scope.floorplan.imageUrl = response.filename;

        }, function (error) {

        }, function (event) { 
            var progressPercentage = parseInt(100.0 * event.loaded / event.total);
            $scope.progress = 'progress: ' + progressPercentage + '% ';
        });
    };

    function createNewFloorplan(filename) {
        $http.post('/api/floorplans/', $scope.floorplan).then(function (response) {
            $scope.floorplan = response;
        });
    }

    function updateFloorplan(){
        $http.put('/api/floorplans', $scope.floorplan).then(function (response) {
            $scope.isLightPositionPhase = true;
        });
    }
}

lightSystem.controller('editorController', editorController);