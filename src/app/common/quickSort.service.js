/*(function(){
	angular.module('fabwareTest.common')
	.factory('quickSort', function(){

		var quickSort = function(){
			return{

				sort: function(arr, leftBorder, rigthBorder){
					if(rigthBorder <= leftBorder){
						return;
					}
				    var i = _partition(arr, leftBorder, rigthBorder);
				    _quickSort(arr, leftBorder, i - 1);
				    _quickSort(arr, i + 1, rigthBorder);
				    return arr;
				}

				_partition: function(arr, leftBorder, rigthBorder){
					var i = leftBorder - 1,
						j = rigthBorder,
						v = arr[rigthBorder].length;

					while(true){
						while(arr[++i].length < v);
						while(v < arr[--j].length){
							if(j === leftBorder){
								break;
							}
						}
						if(i >= j){
							break;
						}
						_exchange(arr, i, j);
					}
					_exchange(arr, i, rigthBorder);
					return i;
				}

				_exchange: function(arr, indexA, indexB){
					var tmp = arr[indexA];
					arr[indexA] = arr[indexB];
					arr[indexB] = tmp;
				}

			}

		}
		return quickSort;
	})
	
})();*/