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

			deleteFavorite: function(event, movie){
				localestorageWrapper.deleteFromKey('myFavorites', movie)
				this.getFilmsList();
			}

		})
		return new favoritesController();
	}]);
})();