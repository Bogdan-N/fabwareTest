(function(){

	angular.module('fabwareTest.favorites')
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
		.when('/favorites', {
			templateUrl: 'app/components/favorites/favorites.html'
		})
	}])
})();