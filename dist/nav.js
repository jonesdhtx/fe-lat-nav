define([
  'jquery',
  'lodash',
  'tpl!ys/lat/nav/templates/nav.tpl'
], function($, _, navTemplate) {
  return {
    render: function(target) {
      $(target || 'body').prepend(_.template(navTemplate, { msg: 'yea'}));
    }
  };
});