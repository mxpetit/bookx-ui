(function() {
	'use strict';

	angular
		.module('bookx', ['ngRoute', 'translate', 'book', 'home', 'menu'])
		.config(configure);

	configure.$inject = ['$locationProvider', '$routeProvider'];

	function configure($locationProvider, $routeProvider) {
		$locationProvider.hashPrefix('!');

		$routeProvider.
			when('/404', {
				template: '<p>404</p>'
			}).
			otherwise({
				redirectTo: '/404'
			});
	}
})();
