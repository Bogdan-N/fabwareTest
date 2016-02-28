(function(){

	angular.module('fabwareTest.decade')
	.controller('decadeController', ['filmsListResource', 'createTableService',
	 function(filmsListResource, createTableService){
		decadeController = Class.extend({
			init: function(){

				this.getFilmsInfo();
			},

			getFilmsInfo: function(){
				filmsListResource.getList()
				.then(function(response){
					var response = response.data.data.movies;
					var years = response.map(function(movie){
						return movie.year - (movie.year % 10);
					});
					
					createTableService.initTable(years);

				}.bind(this));
			}
			
		})
		return new decadeController();
	}]);
})();