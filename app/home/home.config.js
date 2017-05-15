(function() {
	'use strict';

	angular
		.module('home', [])
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
