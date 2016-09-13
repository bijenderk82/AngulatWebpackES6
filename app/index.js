import angular from 'angular';
import registerDirective from './directives';

if(ON_TEST) {
  require('angular-mocks/angular-mocks');
}

const ngmodule = angular.module('app', []);

//require('./directives')(ngmodule);

registerDirective(ngmodule);