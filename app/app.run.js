(function() {
	'use strict';

	angular
		.module('bookx')
		.run(run);

	run.$inject = ['$rootScope', '$log', 'AuthenticationFactory', '$location'];

	function run($rootScope, $log, AuthenticationFactory, $location) {
		$rootScope.$on('$routeChangeError', function(event, current, previous, rejection) {
			$log.log('event', event);
			$log.log('current', current);
			$log.log('previous', previous);
			$log.log('rejection', rejection);
		});

		$rootScope.$on('$routeChangeStart', function(angularEvent, newUrl) {
			if (newUrl.requireAuth) {
				if (AuthenticationFactory.isSignedIn()) {
					$log.log('WE DID IT 2');
				} else {
					$location.url('/401');
				}
			} else {
				$log.log('WE DID IT');
			}
		});
	}
})();
