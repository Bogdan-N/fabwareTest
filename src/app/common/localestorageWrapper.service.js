(function(){
	angular.module('fabwareTest.common')
	.factory('localestorageWrapper', [ function(){

		var localestorageWrapper = function(){};

		localestorageWrapper.prototype.getDataArray = function(key) {
			var movies = localStorage.getItem(key);
			return JSON.parse(movies);
		};

		return new localestorageWrapper();
	}])

})()
