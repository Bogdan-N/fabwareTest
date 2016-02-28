(function(){

	angular.module('fabwareTest.best')
	.controller('bestController', ['localestorageWrapper',
	 function(localestorageWrapper){


		var bestController = Class.extend({
			init: function(){
				this.getFilmsList();

			},

			getFilmsList: function(){
				var movies = localestorageWrapper.getDataArray('movies');
				var favoriteFilms = localestorageWrapper.getDataArray('myFavorites');
				// this ugliness need to show selected films on 20 best page
				for(var i = 0; i < favoriteFilms.length; ++i){
					for(var j = 0; j < movies.length; ++j){
						if(favoriteFilms[i].idIMDB === movies[j].idIMDB){
							movies[j].favoriteSelected = true;
						}
					}
				}
				this.categories = movies;
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
					localestorageWrapper.setData('myFavorites', movie);
				}
				icon.addClass('selected');				
			},

			deleteSelected: function(icon, movie){
				localestorageWrapper.deleteFromKey('myFavorites', movie);
				icon.removeClass('selected');
			}

		})
		return new bestController();
	
		
	}]);
})();