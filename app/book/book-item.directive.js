(function() {
	'use strict';

	angular
		.module('book')
		.directive('bookItem', bookItem);

	// bookItem represents an image with a button on hovering which
	// redirect to the book's details page.
	function bookItem() {
		var directive = {
			restrict: 'E',
			scope: {
				book: '='
			},
			replace: true,
			templateUrl: '../html/book-item.html'
		}

		return directive;
	}
})();
