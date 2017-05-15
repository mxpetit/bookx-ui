(function() {
	'use strict';

	angular
		.module('book')
		.service('BookProvider', BookProvider);

	BookProvider.$inject = ['$http', 'BOOK_ENDPOINT'];

	function BookProvider($http, BookEndpoint) {
		var vm = this;

		vm.getAllBooks = getAllBooks;
		vm.getBook = getBook;

		function getAllBooks(limit) {
			if (limit > 0) {
				return $http.get(BookEndpoint + '?limit=' + limit)
			}

			return $http.get(BookEndpoint)
		}

		function getBook(id) {
			return $http.get(BookEndpoint + '/' + id);
		}
	}
})();
