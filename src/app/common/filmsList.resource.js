(function(){

	angular.module('fabwareTest.common')
	.factory('filmsListResource', ['$http', function($http){

		var filmsListResource = function(){};

		filmsListResource.prototype.getList = function() {
			var url = 'http://www.myapifilms.com/imdb/top?start=1&end=20&trailers=1&token=27874fdc-d380-49d0-9610-23282c932ba4&format=json&data=1';
			return $http({
					method: 'GET',
					url: url,
					dataType: 'jsonp',

				})
		};
		
		return new filmsListResource();

	}]);
})();
//27874fdc-d380-49d0-9610-23282c932ba4
//chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security
//http://www.imdb.com/name/{{id}}/
