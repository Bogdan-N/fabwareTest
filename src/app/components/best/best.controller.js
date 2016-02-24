(function(){

	angular.module('fabwareTest.best')
	.controller('bestController', ['$http', function($http){

		$http.defaults.headers.put = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With'
        };
        $http.defaults.useXDomain = true;

		var bestController = function(){
			var url = 'http://www.myapifilms.com/imdb/top?start=1&end=20&token=27874fdc-d380-49d0-9610-23282c932ba4&format=json&data=1';
				$http({
					method: 'GET',
					url: url,
					dataType: 'jsonp',

				}).then(function(response){
					this.response = response.data.data.movies;
					return response;
				}.bind(this));
		}
		return new bestController();
	}]);
})();