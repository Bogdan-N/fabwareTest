(function(){

	angular.module('fabwareTest.common')
	.directive('popupModal', [ function(){

		return{
			restrict: 'E',
            templateUrl: 'app/directives/popupModal/modalButton.template.html',
            scope: {
            	index: '='
            },
            
            controller: ['$modal', '$scope', 'modalBridge', '$http', function($modal, $scope, modalBridge, $http){
            	$scope.showModal = function(){
            		var url = 'http://www.myapifilms.com/trailerAddict/taapi?idIMDB=' + $scope.index + '&token=27874fdc-d380-49d0-9610-23282c932ba4&format=json'

            		
                	console.log($scope.index);

                	$http({
						method: 'GET',
						url: url,
						dataType: 'jsonp',
					})
					.then(function(response){
						modalBridge.setTrailerId(response.data.data.trailer[0].embed);
						return response;
					}.bind(this))
					.then(function(){
						$modal.open({
	                    size: 'lg',
	                    templateUrl: 'app/directives/popupModal/popupModal.template.html',
	                    controller: 'modalController as m'
                	})
					});

            	}

            }]

		}
	}])

})();
