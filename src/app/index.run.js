(function() {
  'use strict';

  angular
    .module('fabwareTest')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
