(function() {
	'use strict';

	angular
		.module('book', [])
		.config(configure);

	configure.$inject = ['$routeProvider'];

	function configure($routeProvider) {
		$routeProvider
			.when('/book', {
				templateUrl: 'html/book.html',
				controller: 'BookController',
				controllerAs: 'book'
			});
	}
})();
