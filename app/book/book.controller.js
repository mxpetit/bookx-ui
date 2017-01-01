(function() {
	'use strict';

	angular
		.module('book')
		.controller('BookController', BookController);

	BookController.$inject = ['$http'];

	function BookController($http) {
		var vm = this;
		vm.books = [];
		vm.error = false;

		$http
			.get('http://localhost:8080/book')
			.then(function successCallback(response) {
				vm.books = response.data;
			}, function errorCallback(response) {
				vm.error = true;
			});
	}
})();
