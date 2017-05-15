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
				'CONFIDENTIALITY_POLICY': 'Politique de confidentialité',
				'CONNECT': 'Connexion',
				'DISCOVER' : 'Découvrir',
				'LANGUAGES' : 'Langue',
				'MANAGE' : 'Gérer',
				'NO_BOOKS': 'Pas de livres disponible',
				'NUMBER_OF_PAGES': 'Nombre de pages',
				'OVERVIEW' : 'Aperçu',
				'SEARCH': 'Recherche',
				'SHARE' : 'Partager',
				'SUBMIT': 'Envoyer',
				'TERMS_OF_USE': 'Conditions d\'utilisation',
				'TITLE': 'Titre',
				'TO_DISCOVER': 'À découvrir',
				'TRENDING': 'Tendance'
			})
			.translations('en', {
				'ALL': 'All',
				'COLLECTIONS': 'Collections',
				'CONFIDENTIALITY_POLICY': 'Confidentiality policy',
				'CONNECT': 'Connection',
				'DISCOVER' : 'Discover',
				'LANGUAGES' : 'Languages',
				'MANAGE' : 'Manage',
				'NO_BOOKS': 'No books available',
				'NUMBER_OF_PAGES': 'Number of pages',
				'OVERVIEW' : 'Overview',
				'SEARCH': 'Search',
				'SHARE' : 'Share',
				'SUBMIT': 'Submit',
				'TERMS_OF_USE': 'Terms of use',
				'TITLE': 'Title',
				'TO_DISCOVER': 'To discover',
				'TRENDING': 'Trending'
			});

		$translateProvider.preferredLanguage('fr');
		$translateProvider.useSanitizeValueStrategy('escape');
	}
})();