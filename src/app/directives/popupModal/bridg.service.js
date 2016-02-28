(function(){
	angular.module('fabwareTest.common')
	.factory('modalBridge', [function(){
		var modalBridge = function(){
			this.trailerId = '';
		};

		modalBridge.prototype.setTrailerLink = function(trailerId) {
			this.trailerId = trailerId;
		};

		modalBridge.prototype.getTrailerLink = function() {
			return this.trailerId;
		};

		return new modalBridge();
	}]);
})();
