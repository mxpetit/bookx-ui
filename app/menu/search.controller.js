(function() {
	'use strict';

	angular
		.module('menu')
		.controller('SearchController', SearchController);

	SearchController.$inject = ['$log'];

	function SearchController($log) {
		var vm = this;
		vm.search = search;
		vm.keyword = '';

		function search(keyword) {
			$log.log('Searched ' + keyword	);
		}
	}
})();
