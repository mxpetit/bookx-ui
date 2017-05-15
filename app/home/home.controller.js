(function() {
	'use strict';

	angular
		.module('home')
		.controller('HomeController', HomeController);

	HomeController.$inject = ['BookProvider'];

	function HomeController(BookProvider) {
		var vm = this;

		vm.books = [];
		vm.display = false;
		vm.error = undefined;
		vm.errorMessage = undefined;

		BookProvider.getAllBooks(25)
			.then(function(response) {
				vm.display = true;
				vm.books = response.data.results;
			}).catch(function(error) {
				vm.error = error;
				vm.errorMessage = error.data.message;
			});
	}
})();
