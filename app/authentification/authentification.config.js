(function() {
	'use strict';

	angular
		.module('authentification', [])
		.config(configure);

	configure.$inject = ['$routeProvider'];

	function configure($routeProvider) {
		$routeProvider
			.when('/authentification', {
				templateUrl: 'html/authentification.html',
				controller: 'AuthentificationController',
				controllerAs: 'auth'
			});
	}
})();
