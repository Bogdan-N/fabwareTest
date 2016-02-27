(function(){

	angular.module('fabwareTest.decade')
	.controller('decadeController', ['filmsListResource',/* 'quickSort', */function(filmsListResource/*, quickSort*/){
		decadeController = Class.extend({
			init: function(){

				this._initTable();
			},

			/*getFilmsInfo: function(){
				filmsListResource.getList()
				.then(function(response){
					var response = response.data.data.movies;
					var years = response.map(function(movie){
						return movie.year - (movie.year % 10);
					});
					


				}.bind(this))
			},

			_sortYears: function(years){
				var sortedYears = quickSort.sort(years);
				return sortedYears;
			}*/

			_initTable: function(){
				var ctx = document.getElementById("myChart").getContext("2d");
            	
            	var data = {
				    labels: ["January", "February", "March", "April", "May", "June", "July"],
				    datasets: [
				        {
				            fillColor: "rgba(151,187,205,0.5)",
				            strokeColor: "rgba(151,187,205,0.8)",
				            highlightFill: "rgba(151,187,205,0.75)",
				            highlightStroke: "rgba(151,187,205,1)",
				            data: [28, 48, 40, 19, 86, 27, 90]
				        }
				    ]
				};

				//getFilmsInfo();
				var myBarChart = new Chart(ctx).Bar(data);
			}
		})
		return new decadeController();
	}]);
})();