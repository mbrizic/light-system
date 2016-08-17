editorController.$inject = ['$scope', 'floorplanRepository', 'lightRepository', '$routeParams', '$location', 'fileRepository'];
function editorController($scope, floorplanRepository, lightRepository, $routeParams, $location, fileRepository) {
    var floorplanId = $routeParams.id;

    $scope.floorplan = {};
    $scope.light = { isDiscrete: true, floorplanId: floorplanId };
	$scope.isEditMode = floorplanId != undefined;
    $scope.isLightPositionPhase = $scope.isEditMode;

    $scope.uploadImage = uploadImage;
    $scope.createNewFloorplan = createNewFloorplan;
    $scope.onFloorplanClick = onFloorplanClick;
    $scope.createNewLight = createNewLight;
 
    $scope.popover = {
        templateId: 'popovers/addEditLightPopover.html',
        title: "Add new light to floorplan",
        isOpen: false,
    };

    init();

    function init() {
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
        floorplanRepository.getById(floorplanId).then(function (response) {
            $scope.floorplan = response;
        });
    }

    function onFloorplanClick(event){
        $scope.popover.isOpen = true;
        $scope.light.x = event.offsetX; 
        $scope.light.y = event.offsetY;
    }

    function createNewLight() {
        lightRepository.createNew($scope.light).then(function (response) {
            $scope.popover.isOpen = false;
            $scope.floorplan.lights.push(response);
            $scope.light = { isDiscrete: true, floorplanId: floorplanId };
        });
    }
}

lightSystem.controller('editorController', editorController);