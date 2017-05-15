(function() {
	'use strict';

	angular
		.module('book')
		.controller('BookController', BookController);

	BookController.$inject = ['BookProvider'];

	function BookController(BookProvider) {
		var vm = this;

		vm.books = [];
		vm.error = false;
		vm.errorMessage = undefined;

		BookProvider.getAllBooks(6)
			.then(function(response) {
				vm.books = response.data.results;
			}).catch(function(error) {
				vm.error = true;
				vm.errorMessage = error.data.message;
			});
	}
})();
