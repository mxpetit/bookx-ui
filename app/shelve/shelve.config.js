(function() {
	'use strict';

	angular
		.module('shelve', [
			'authentication',
			'ngRoute'
		])
		.config(configure);

	configure.$inject = ['$routeProvider'];

	function configure($routeProvider) {
		$routeProvider
			.when('/shelve', {
				template: '<h1>Shelve</h1>',
				requireAuth: true
			});
	}
})();