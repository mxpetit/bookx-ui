(function() {
	'use strict';

	angular
		.module('bookx')
		.run(run);

	run.$inject = ['$rootScope', '$translate'];

	function run($rootScope, $translate) {
		$rootScope.$on('$translatePartialLoaderStructureChanged', function() {
			$translate.refresh();
		});
	}
})();
