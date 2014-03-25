require.config({
    paths: {
        angular: '../../Scripts/angular',
        angularRoute: '../../Scripts/angular-route',
        //angularMocks: '../../Scripts/angular-mocks',
        breeze: '../../Scripts/breeze.debug',
        breezeAngular: '../../Scripts/breeze.angular',
        breezeDirectives: '../../Scripts/breeze.directives',
    },
    shim: {
        'angular': { 'exports': 'angular' },
        'angularRoute': ['angular'],
        'breezeAngular' : ['angular', 'breeze'],
        'breezeDirectives': ['breezeAngular'],
//'angularMocks': {
        //    deps: ['angular'],
        //    'exports': 'angular.mock'
        //}
    },
    priority: [
    "angular"
    ]
});

require([
'angular',
'app',
'appBootstrap',
'routes',
'controllers/helloWorldController'
], function (angular, app, routes) {
    'use strict';

});