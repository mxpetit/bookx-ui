(function() {
	'use strict';

	angular
		.module('translate', ['pascalprecht.translate'])
		.config(configure);

	configure.$inject = ['$translateProvider'];

	function configure($translateProvider) {
		$translateProvider
			.translations('fr', {
				'NO_BOOKS': 'Pas de livres disponible',
				'NUMBER_OF_PAGES': 'Nombre de pages',
				'SEARCH': 'Recherche',
				'TITLE': 'Titre',
				'LANGUAGES' : 'Language'
			})
			.translations('en', {
				'NO_BOOKS': 'No books available',
				'NUMBER_OF_PAGES': 'Number of pages',
				'SEARCH': 'Search',
				'TITLE': 'Title',
				'LANGUAGES' : 'Langue'
			});

		$translateProvider.preferredLanguage('fr');
		$translateProvider.useSanitizeValueStrategy('escape');
	}
})();