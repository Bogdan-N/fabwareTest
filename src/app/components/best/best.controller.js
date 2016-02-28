(function(){

	angular.module('fabwareTest.best')
	.controller('bestController', ['$http', 'filmsListResource', function($http, filmsListResource){


		var bestController = Class.extend({
			init: function(){
				this.getFilmsList();
			},

			getFilmsList: function(){
				filmsListResource.getList()
				.then(function(response){
					 this.response = response.data.data.movies;
					 return response;
				}.bind(this));

			},

			selectAsFavorite: function(event, favoriteMovie){
				alert(favoriteMovie);
				localStorage.setItem(favoriteMovie.title, JSON.stringify(favoriteMovie));
				var heardIconWrap = angular.element(event.currentTarget);

					heardIconWrap.hasClass('selected') ? 
					heardIconWrap.removeClass('selected') : heardIconWrap.addClass('selected');
					//localStorage.clear();
			}

		})
		return new bestController();
	
		
	}]);
})();