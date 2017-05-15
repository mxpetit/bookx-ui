(function() {
	'use strict';

	angular
		.module('book')
		.config(configure);

	configure.$inject = ['$routeProvider'];

	function configure($routeProvider) {
		$routeProvider
			.when('/book/:id', {
				templateUrl: 'html/book-details.html',
				controller: 'BookDetailsController',
				controllerAs: 'vm'
			});
	}
})();
