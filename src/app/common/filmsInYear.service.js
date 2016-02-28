(function(){
	angular.module('fabwareTest.common')
	.factory('createTableService', [ function(){

		

		var filmsInYear = function(){

			var sortYears = function(years) {
			years.sort(function(a, b){
				if (a > b) {
					return 1;
				} else{
					return -1
				}
			})
		};

		var getFilmsInYear = function(years) {
			var result = {},
			 	yearsLabels = [],
			 	countArray = [];

			 sortYears(years);

			for(var i = 0; i < years.length; ++i){
				var count = 1;
				yearsLabels.push(years[i]);

				while(years[i] === years[i+1]){
					++i
					++count;
				}
				countArray.push(count);
			}
			result.years = yearsLabels;
			result.count = countArray;
			return result;
		};

			return {

				initTable: function(years){

					var ctx = document.getElementById("decadeChart").getContext("2d"),
	            		filmsInYear = getFilmsInYear(years),
	            		data = {
					    labels: filmsInYear.years,
					    datasets: [
					        {
					            fillColor: "rgba(151,187,205,0.5)",
					            strokeColor: "rgba(151,187,205,0.8)",
					            highlightFill: "rgba(151,187,205,0.75)",
					            highlightStroke: "rgba(151,187,205,1)",
					            data: filmsInYear.count
					        }
					    ]
					};

					
					var myBarChart = new Chart(ctx).Bar(data);
				}
			}
		}

		return new filmsInYear();

	}])

})();