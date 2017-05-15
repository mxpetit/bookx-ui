(function() {
	'use strict';

	angular
		.module('book', [])
		.controller('BookDetailsController', BookDetailsController);

	BookDetailsController.$inject = ['BookProvider', '$routeParams'];

	function BookDetailsController(BookProvider, $routeParams) {
		var vm = this;

		vm.book = undefined;
		vm.error = false;

		BookProvider.getBook($routeParams.id)
			.then(function(response) {
				vm.book = response.data.result;
			}, function(response) {
				vm.error = true;
			});
	}
})();
