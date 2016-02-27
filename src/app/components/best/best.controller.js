(function(){

	angular.module('fabwareTest.best')
	.controller('bestController', ['$http', 'filmsListResource', function($http, filmsListResource){


		var bestController = function(){
			filmsListResource.getList()
			.then(function(response){
				 this.response = response.data.data.movies;
				 return response;
			}.bind(this));
		}
		return new bestController();
	}]);
})();