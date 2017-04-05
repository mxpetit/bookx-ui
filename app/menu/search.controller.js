(function() {
	'use strict';

	angular
		.module('menu')
		.controller('SearchController', SearchController);

	SearchController.$inject = ['$location'];

	function SearchController($location) {
		var vm = this;
		vm.search = search;
		vm.keyword = '';

		function search(keyword) {
			$location.path('search');
			$location.search('q', keyword);
		}
	}
})();
