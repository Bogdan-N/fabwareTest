(function(){
	angular.module('fabwareTest.common')
	.controller('modalController', ['modalBridge', function(modalBridge){
		var modalController = Class.extend({

			init: function(){
				this.text = modalBridge.getTrailerId();
			},


		})

		return new modalController();
	}]);
})();
