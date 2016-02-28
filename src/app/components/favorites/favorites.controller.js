(function(){

	angular.module('fabwareTest.favorites')
	.controller('favoritesController', ['localestorageWrapper', function(localestorageWrapper){
		var favoritesController = Class.extend({
			init: function(){
				this.getFilmsList();
			},

			getFilmsList: function() {
				this.movies = localestorageWrapper.getDataArray('myFavorites');
			},

			toggleFavorite: function(event, movie){
				var selectedMovies = localestorageWrapper.getDataArray('myFavorites');
				for(var i = 0; i < selectedMovies.length; ++i){
					if(selectedMovies[i].idIMDB === movie.idIMDB){
						selectedMovies.splice(i, 1);
					}
				}
				localStorage.setItem('myFavorites', JSON.stringify(selectedMovies));
				this.getFilmsList();
			}

		})
		return new favoritesController();
	}]);
})();