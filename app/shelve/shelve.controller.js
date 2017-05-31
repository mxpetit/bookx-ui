(function() {
	'use strict';

	angular
		.module('shelve')
		.controller('ShelveController', ShelveController);

	ShelveController.$inject = ['$log'];

	function ShelveController($log) {
		$log.log('ShelveController');
	}
})();
