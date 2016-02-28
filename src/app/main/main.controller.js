(function () {
	angular.module('fabwareTest')
	.controller('mainController', ['filmsListResource', function(filmsListResource){
		var mainController = Class.extend({
			init: function(){
				filmsListResource.getList().then(function(response){
					var movies = response.data.data.movies;
					localStorage.setItem('movies', JSON.stringify(movies));
				})
			}
		})
		return new mainController();
	}])

})();