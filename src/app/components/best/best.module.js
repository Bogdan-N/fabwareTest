(function(){

	angular.module('fabwareTest.best')
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
		.when('/best20', {
			templateUrl: 'app/components/best/best.html',
			controller: 'bestController as c'
		})
	}])
})();