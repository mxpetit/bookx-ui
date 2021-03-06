(function() {
	'use strict';

	angular
		.module('home', [
			'book'
		])
		.config(configure);

	configure.$inject = ['$routeProvider'];

	function configure($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'html/home.html',
				controller: 'HomeController',
				controllerAs: 'vm'
			});
	}
})();
