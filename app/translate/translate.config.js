(function() {
	'use strict';

	angular
		.module('translate', ['pascalprecht.translate'])
		.config(configure);

	configure.$inject = ['$translateProvider'];

	function configure($translateProvider) {
		$translateProvider
			.translations('fr', {
				'ALL': 'Toutes',
				'COLLECTIONS': 'Collections',
				'CONNECT': 'Connexion',
				'NO_BOOKS': 'Pas de livres disponible',
				'NUMBER_OF_PAGES': 'Nombre de pages',
				'SEARCH': 'Recherche',
				'SUBMIT': 'Envoyer',
				'TITLE': 'Titre',
				'TRENDING': 'Tendance',
				'LANGUAGES' : 'Langue'
			})
			.translations('en', {
				'ALL': 'All',
				'COLLECTIONS': 'Collections',
				'CONNECT': 'Connection',
				'NO_BOOKS': 'No books available',
				'NUMBER_OF_PAGES': 'Number of pages',
				'SEARCH': 'Search',
				'SUBMIT': 'Submit',
				'TITLE': 'Title',
				'TRENDING': 'Trending',
				'LANGUAGES' : 'Languages'
			});

		$translateProvider.preferredLanguage('fr');
		$translateProvider.useSanitizeValueStrategy('escape');
	}
})();