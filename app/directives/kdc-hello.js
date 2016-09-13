/**
 * Created by Capital One
 */
export default ngModule => {
  if(ON_TEST) {
    require('./kdc-hello-test')(ngModule);
  }

  ngModule.directive('kcdHello', function($log) {
    require('./kdc-styles.css')
    return {
      restrict: 'E',
      scope: {},
      template: require('./kdc-hello.html'),
      controllerAs: 'vm',
      controller
    }
  })
}

let controller = (function kHello() {
  function missingParam () {
    throw new Error('Shit is required')
  }
  function greetME (greeting = missingParam()) {
    return `this is my temporary directive ${greeting}`
  }
  return class {
    /* ngInject */
    constructor ($log) {
      this.greeting = greetME('Suhas');
      $log.info('welcome')
    }
  }
}());
