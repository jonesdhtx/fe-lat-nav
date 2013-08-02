define([
  'jquery',
  'lodash',
  'ys/lat/nav/nav'
],function($, _, nav) {
  QUnit.start();

  module('nav');

  test('Rendering', 1, function() {
    nav.render('#qunit-fixture');
    equal($('.nav').length, 1, 'Should render itself');
  });

});
