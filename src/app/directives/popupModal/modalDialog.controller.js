(function(){
	angular.module('fabwareTest.common')
	.controller('modalController', ['modalBridge', function(modalBridge){
		var modalController = Class.extend({

			init: function(){
				this.configLink();
			},

			configLink: function(){
				var link = modalBridge.getTrailerLink();
				this.trailerLink = link + '/imdb/embed?format=SD';
			}

		})

		return new modalController();
	}]);
})();
