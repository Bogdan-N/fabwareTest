(function(){
	angular.module('fabwareTest.common')
	.factory('modalBridge', [function(){
		var modalBridge = function(){
			this.trailerId = '';
		};

		modalBridge.prototype.setTrailerId = function(trailerId) {
			this.trailerId = trailerId;
		};

		modalBridge.prototype.getTrailerId = function() {
			return this.trailerId;
		};

		return new modalBridge();
	}]);
})();
