define(['controllers/controllers'], function (controllers) {
    controllers.controller('helloWorldController', ['$scope', helloWorldController]);

    function helloWorldController($scope) {
        $scope.name = "Andrea";
    }
});