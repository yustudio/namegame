
angular.module('Namegame')		
		.controller('HomeController', ['$scope','nameFactory', function($scope, nameFactory){
			console.log('Running HomeController');

			//$scope.models = [{name: "model1", spec1: "spec1", spec2: "spec2"},{name: "model2", spec1: "spec1", spec2: "spec2"}];
			nameFactory.getNames()
			.then(
				function(response){
					console.log("response is  " + response);
					//console.log(JSON.stringify(response,null,2));
					var persons = response["data"];
					//console.log("persons " + persons)
					$scope.persons = persons;

				},
				function(response) {
                	$scope.message = "Error: "+response.status + " " + response.statusText;
            	}
			)

		}]);

