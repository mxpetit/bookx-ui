(function() {
	'use strict';

	angular
		.module('bookx', [
			'ngRoute',
			'translate',
			'book',
			'home',
			'menu',
			'authentification'
		])
		.config(configure);

	configure.$inject = ['$locationProvider', '$routeProvider'];

	function configure($locationProvider, $routeProvider) {
		$locationProvider.hashPrefix('!');

		$routeProvider.
			when('/404', {
				template: '<h1>404</h1>'
			}).
			otherwise({
				redirectTo: '/404'
			});
	}
})();
