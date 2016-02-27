(function() {
  'use strict';
  angular.module('fabwareTest.common', ['ngAnimate', 'ui.bootstrap']);
  angular.module('fabwareTest.best', ['ngRoute', 'fabwareTest.common']);
  angular.module('fabwareTest.decade', ['ngRoute']);
  angular.module('fabwareTest.favorites', ['ngRoute']);

  angular
    .module('fabwareTest', ['fabwareTest.common', 'ngRoute', 'ui.bootstrap', 'ui.bootstrap.modal','toastr', 'fabwareTest.best',
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
