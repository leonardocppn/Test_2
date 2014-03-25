define(['angular', 'domReady', 'app'], function (angular, domReady, app) {
    domReady(function () {
        angular.bootstrap(document, [app.name]);
    });
});