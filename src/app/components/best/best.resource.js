(function(){

	angular.module('fabwareTest.best')
	.factory('bestResource', ['$http', function($http){
		
		var sendRequest = function(){
			var resp;
			$http({
			  method: 'GET',
			  url: 'http://www.myapifilms.com/imdb/image/tt1234567?token=27874fdc-d380-49d0-9610-23282c932ba4'
			}).then(function successCallback(response) {
			    resp = response;
			  }, function errorCallback(response) {
			    resp = response;
			  });
		
		return resp;

		}
		var bestResource = function(){
			return{
				get: sendRequest
			}
		}
			
	}]);
})();
//27874fdc-d380-49d0-9610-23282c932ba4
//C:\Program Files (x86)\Google\Chrome\Application\chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security