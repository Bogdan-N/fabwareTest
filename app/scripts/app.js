'use strict';

/**
 * @ngdoc overview
 * @name fabwareTestApp
 * @description
 * # fabwareTestApp
 *
 * Main module of the application.
 */
angular
  .module('fabwareTestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
