(function() {
	'use strict';

	angular
		.module('menu', [])
		.controller('MenuController', MenuController);

	MenuController.$inject = ['$translate'];

	function MenuController($translate) {
		var vm = this;

		vm.translate = translate;
		vm.availableLanguages = ['fr', 'en'];

		function translate(lang) {
			$translate.use(lang);
		}
	}
})();
