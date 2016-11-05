
angular.module('Namegame')
	.constant("baseURL","http://api.namegame.willowtreemobile.com/")
	.service('nameFactory', ['$http', 'baseURL', function($http, baseURL){
		this.getNames = function() {
			console.log("------------ in services")
			return $http.get(baseURL);
		}
	}]);