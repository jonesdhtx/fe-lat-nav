define([
  'jquery',
  'lodash',
  'dist/nav'
],function($, _, nav) {

  module('nav');

  test('Rendering', 1, function() {
    nav.render('#qunit-fixture');
    equal($('.nav').length, 1, 'Should render itself');
  });

});
