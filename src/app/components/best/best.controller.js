(function(){

	angular.module('fabwareTest.best')
	.controller('bestController', ['localestorageWrapper',
	 function(localestorageWrapper){


		var bestController = Class.extend({
			init: function(){
				this.getFilmsList();
			},

			getFilmsList: function(){
				this.response = localestorageWrapper.getDataArray('movies');
			},
			
			toggleFavorite: function(event, favoriteMovie){
				
				heardIconWrap = angular.element(event.currentTarget);
				heardIconWrap.hasClass('selected') ? 
				this.deleteSelected(heardIconWrap, favoriteMovie) : this.addAsSelected(heardIconWrap, favoriteMovie);
				
			},

			addAsSelected: function(icon, movie){
				//initialize array of favorite movies if it not exist
				if(!localStorage.getItem('myFavorites')){
					var arr = [];
					arr.push(movie);
					localStorage.setItem('myFavorites', JSON.stringify(arr));
				} else {
					var selectedMovies = localestorageWrapper.getDataArray('myFavorites');
					selectedMovies.push(movie);
					localStorage.setItem('myFavorites', JSON.stringify(selectedMovies));
				}
				icon.addClass('selected');
				
			},

			deleteSelected: function(icon, movie){
				icon.removeClass('selected');
				var selectedMovies = localestorageWrapper.getDataArray('myFavorites');
				for(var i = 0; i < selectedMovies.length; ++i){
					if(selectedMovies[i].idIMDB === movie.idIMDB){
						selectedMovies.splice(i, 1);
					}
				}
				localStorage.setItem('myFavorites', JSON.stringify(selectedMovies));
				//delete localStorage[movie.title];
			}

		})
		return new bestController();
	
		
	}]);
})();