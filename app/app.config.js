(function() {
	'use strict';

	angular
		.module('bookx', [
			'authentication',
			'book',
			'home',
			'menu',
			'ngCookies',
			'ngRoute',
			'shelve',
			'translate'
		])
		.factory('AuthenticationInterceptor', AuthenticationInterceptor)
		.config(configure);

	AuthenticationInterceptor.$inject = ['$q', '$cookies'];

	function AuthenticationInterceptor($q, $cookies) {
		return {
			request: function (request) {
				var deferred = $q.defer();

				if (request.method == 'GET' && request.url.endsWith('.html')) {
					// resolves html template
					deferred.resolve(request);
				} else if (request.url.indexOf('api.book.xyz') !== -1 && request.method != 'GET') {
					if (request.url.indexOf('api.book.xyz/authentication') !== -1) {
						// Let the user authenticate
						deferred.resolve(request);
					} else {
						// Check if the user is authenticated
						var access_token = $cookies.get('access_token');
						var expires = $cookies.get('expires');
						var token_type = $cookies.get('token_type');

						if (access_token != undefined) {
							request.headers.Token = access_token;
							request.headers.Token_Type = token_type;
							request.headers.Expires = expires;
							deferred.resolve(request);
						} else {
							deferred.reject(request);
						}
					}
				} else {
					deferred.resolve(request);
				}

				return deferred.promise;
			}
		};
	}

	configure.$inject = ['$locationProvider', '$routeProvider', '$httpProvider'];

	function configure($locationProvider, $routeProvider, $httpProvider) {
		$httpProvider.interceptors.push('AuthenticationInterceptor');
		$locationProvider.hashPrefix('!');

		$routeProvider.
			when('/404', {
				template: '<h1>404 Not found</h1>'
			}).
			when('/401', {
				template: '<h1>401 Unauthorized</h1>'
			}).
			otherwise({
				redirectTo: '/404'
			});
	}
})();
