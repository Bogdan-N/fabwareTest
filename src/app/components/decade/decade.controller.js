(function(){

	angular.module('fabwareTest.decade')
	.controller('decadeController', ['localestorageWrapper', 'createTableService',
	 function(localestorageWrapper, createTableService){
		decadeController = Class.extend({
			init: function(){

				this.getFilmsInfo();
			},

			getFilmsInfo: function(){
				var movies = localestorageWrapper.getDataArray('movies');
				var years = movies.map(function(movie){
					return movie.year - (movie.year % 10);
				});
				
				createTableService.initTable(years);
			}
			
		})
		return new decadeController();
	}]);
})();