(function() {
	'use strict';

	angular
		.module('book')
		.controller('BookController', BookController);

	BookController.$inject = ['$http', '$log'];

	function BookController($http, $log) {
		var vm = this;
		vm.books = [];
		vm.error = false;

		$http
			.get('http://localhost:8080/book')
			.then(function successCallback(response) {
				vm.books = response.data;
				$log.log(response.data);
			}, function errorCallback(response) {
				vm.error = true;
			});
	}
})();
