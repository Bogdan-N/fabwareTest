(function(){
	angular.module('fabwareTest.common')
	.factory('localestorageWrapper', [ function(){

		var localestorageWrapper = function(){};

		localestorageWrapper.prototype.getDataArray = function(key) {
			var movies = localStorage.getItem(key);
			return JSON.parse(movies);
		};

		localestorageWrapper.prototype.setData = function(key, value){
			var selectedMovies = this.getDataArray('myFavorites');
			selectedMovies.push(value);
			localStorage.setItem(key, JSON.stringify(selectedMovies));
		};

		localestorageWrapper.prototype.deleteFromKey = function(key, value){
			var selectedMovies = this.getDataArray(key);
				for(var i = 0; i < selectedMovies.length; ++i){
					if(selectedMovies[i].idIMDB === value.idIMDB){
						selectedMovies.splice(i, 1);
					}
				}
			localStorage.setItem('myFavorites', JSON.stringify(selectedMovies));
		};

		return new localestorageWrapper();
	}])

})()
