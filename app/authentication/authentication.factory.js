(function() {
	'use strict';

	angular
		.module('authentication', [
			'ngRoute'
		])
		.factory('AuthenticationFactory', AuthenticationFactory);

	AuthenticationFactory.$inject = ['$http', '$cookies', '$log', '$route', '$location'];

	function AuthenticationFactory($http, $cookies, $log, $route, $location) {
		var vm = this;

		vm.isSignedIn = false;
		gapi.load('auth2', initOAuth);

		function initOAuth() {
			gapi.auth2.init({
				client_id: '866327442217-63fnsc5fqqd1r0f7loneopcfjr3dnm0t.apps.googleusercontent.com'
			});
		}

		var AuthenticationFactory = {
			isSignedIn: isSignedIn,
			signIn: signIn,
			signOut: signOut
		};

		return AuthenticationFactory;

		function isSignedIn() {
			return vm.isSignedIn;
		}

		function signIn() {
			var auth2 = gapi.auth2.getAuthInstance();

			auth2.grantOfflineAccess()
				.then(signInCallback);
		}

		function signOut() {			
			var auth2 = gapi.auth2.getAuthInstance();

			auth2.signOut()
				.then(signOutCallback);
		}

		function signOutCallback() {
			vm.isSignedIn = false;
			$location.url('/');
		}

		function signInCallback(response) {
			$http.post('http://api.book.xyz/authentication', {
					code: response.code
				}, {
					headers : {
						'Content-Type': 'application/json',
						'X-Requested-With': 'XMLHttpRequest'
					}
				}).then(function(response) {
					$log.log('response', response);
					$cookies.put('access_token', response.data.access_token);
					$cookies.put('expires', response.data.expires);
					$cookies.put('token_type', response.data.token_type);
					$cookies.put('given_name', response.data.given_name);
					$log.log('getAll();', $cookies.getAll());
					vm.isSignedIn = true;
					$location.url('/shelve');
				});
		}
	}
})();
