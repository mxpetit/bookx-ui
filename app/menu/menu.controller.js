(function() {
	'use strict';

	angular
		.module('menu', [
			'ngCookies',
			'authentication'
		])
		.controller('MenuController', MenuController);

	MenuController.$inject = ['$translate', 'AuthenticationFactory', '$scope', '$cookies'];

	function MenuController($translate, AuthenticationFactory, $scope, $cookies) {
		var vm = this;

		vm.translate = translate;
		vm.signIn = AuthenticationFactory.signIn;
		vm.signOut = AuthenticationFactory.signOut;
		vm.availableLanguages = ['fr', 'en'];

		$scope.$watch(AuthenticationFactory.isSignedIn, function(isSignedIn) {
			vm.signedin = isSignedIn;
			vm.givenName = $cookies.get('given_name');
		});

		function translate(lang) {
			$translate.use(lang);
		}
	}
})();
