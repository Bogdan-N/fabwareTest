(function(){

	angular.module('fabwareTest.decade')
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
		.when('/firstByDecade', {
			templateUrl: 'app/components/decade/decade.html'
		})
	}])
})();