editorController.$inject = ['$scope', 'floorplanRepository', '$routeParams', '$location', 'fileRepository'];
function editorController($scope, floorplanRepository, $routeParams, $location, fileRepository) {
    $scope.floorplan = {};
	$scope.floorplanId = $routeParams.id;
	$scope.isEditMode = $scope.floorplanId != undefined;
    $scope.isLightPositionPhase = $scope.isEditMode;

    $scope.uploadImage = uploadImage;
    $scope.createNewFloorplan = createNewFloorplan;
    $scope.onFloorplanClick = onFloorplanClick;

    init();

    function init(){
        if($scope.isEditMode) getFloorplan();
    }

    function uploadImage (file) {
        fileRepository.upload(file)
        .then(function (response) {
            $scope.floorplan.imageUrl = response.filename;
            $scope.isEditMode = true;
        }, function (error) {

        }, function (event) { 
            var progressPercentage = parseInt(100.0 * event.loaded / event.total);
            $scope.progress = 'progress: ' + progressPercentage + '% ';
        });
    };

    function createNewFloorplan() {
        floorplanRepository.createNew($scope.floorplan).then(function (response) {
            $scope.isLightPositionPhase = true;
            $scope.floorplan = response;
        });
    }

    function getFloorplan() {
        floorplanRepository.getById($scope.floorplanId).then(function (response) {
            $scope.floorplan = response;
        });
    }

    function onFloorplanClick(event){
        var newLightDto = {
            x: event.offsetX,
            y: event.offsetY, 
        };
    }

    // function updateFloorplan(){
    //     $http.put('/api/floorplans', $scope.floorplan).then(function (response) {
    //         $scope.isLightPositionPhase = true;
    //     });
    // }
}

lightSystem.controller('editorController', editorController);