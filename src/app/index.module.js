(function() {
  'use strict';

  angular.module('fabwareTest.best', ['ngRoute']);
  angular.module('fabwareTest.decade', ['ngRoute']);
  angular.module('fabwareTest.favorites', ['ngRoute']);

  angular
    .module('fabwareTest', ['ngRoute', 'ui.bootstrap', 'toastr', 'fabwareTest.best',
    	'fabwareTest.decade', 'fabwareTest.favorites',])
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/html/content.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
