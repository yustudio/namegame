(function() {

	angular.module('Namegame', ['ui.router']);

	function config($stateProvider, $urlRouterProvider){
	
	$stateProvider
		.state('app',{
			url  : '/',
			views:{
				// 'header@' : {
				// 	templateUrl : 'common/header/header.view.html',
				// 	controller  : "HeaderController"
				// },
				'content@':{
					templateUrl : "views/home.html",
					controller  : "HomeController"
				}
				// 'footer' :{
				// 	templateUrl : "common/footer/footer.view.html",
				// 	controller  : "FooterController"
				// }
			}
		})		

	$urlRouterProvider.otherwise('/');
	};

	angular
    .module('Namegame')
    .config(['$stateProvider', '$urlRouterProvider', config]);
    //.run(['$rootScope', '$location', 'authentication', run]);

})();