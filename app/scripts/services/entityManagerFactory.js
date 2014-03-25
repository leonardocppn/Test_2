define(['angular', 'breeze', 'services/services'], function (angular, breeze, services) {
    'use strict';

    /* Services */

    services.factory('entityManagerFactory', ['breeze', '$location', emFactory]);

    function emFactory(breeze, $location) {
        configureBreeze();
        var serviceName = $location.protocol() + '//' + $location.host() + '/' + 'odata/';
        var factory = {
            newManager: newManager,
            serviceName: serviceName
        };

        return factory;

        function configureBreeze() {
            // use Web API OData to query and save
            breeze.config.initializeAdapterInstance('dataService', 'webApiOData', true);

            // convert between server-side PascalCase and client-side camelCase
            breeze.NamingConvention.camelCase.setAsDefault();
        }

        function newManager() {
            return new breeze.EntityManager(serviceName);
        }


    }
});