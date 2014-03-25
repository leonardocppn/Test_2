define([
'angular',
'filters/filters',
'services/services',
'directives/directives',
'controllers/controllers',
'angularRoute',
'breeze',
'breezeAngular',
'breezeDirectives'
], function (angular) {
    'use strict'

    var app = angular.module('Timecard', ['ngRoute', 'Timecard.controllers', 'Timecard.filters', 'Timecard.services', 'Timecard.directives', 'breeze.angular']);

    app.run(['breeze', function (breeze) {

    }]);

    return app;
});