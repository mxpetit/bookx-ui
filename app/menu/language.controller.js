(function() {
	'use strict';

	angular
		.module('menu', [])
		.controller('LanguageController', LanguageController);

	LanguageController.$inject = ['$translate'];

	function LanguageController($translate) {
		var vm = this;

		vm.changeLanguage = changeLanguage;
		vm.diplayLanguages = diplayLanguages;
		vm.availableLanguage = ['fr', 'en'];
		vm.showLanguages = false;

		function changeLanguage(language) {
			$translate.use(language);
		}

		function diplayLanguages() {
			vm.showLanguages = (!vm.showLanguages);
		}
	}
})();
