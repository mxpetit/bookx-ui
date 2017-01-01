(function() {
	'use strict';

	angular
		.module('home')
		.controller('HomeController', HomeController);

	HomeController.$inject = ['$log'];

	function HomeController($log) {
		var vm = this;
		vm.submit = submit;
		vm.message = 'toto';

		function submit() {
			$log.log('Submited ' + vm.message);
		}
	}
})();
