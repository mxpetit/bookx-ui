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
				'SIGN_IN': 'Se connecter',
				'SIGN_OUT': 'Se déconnecter',
				'SUBMIT': 'Envoyer',
				'TERMS_OF_USE': 'Conditions d\'utilisation',
				'TITLE': 'Titre',
				'TO_DISCOVER': 'À découvrir',
				'TRENDING': 'Tendance',
				'WELCOME_BACK': 'Heureux de vous revoir'
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
				'SIGN_IN': 'Sign in',
				'SIGN_OUT': 'Sign out',
				'SUBMIT': 'Submit',
				'TERMS_OF_USE': 'Terms of use',
				'TITLE': 'Title',
				'TO_DISCOVER': 'To discover',
				'TRENDING': 'Trending',
				'WELCOME_BACK': 'Welcome back'
			});

		$translateProvider.determinePreferredLanguage();
		$translateProvider.fallbackLanguage('fr');
		$translateProvider.useSanitizeValueStrategy('escape');
	}
})();