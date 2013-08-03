define([
  'jquery',
  'lodash',
  'tpl!./templates/nav.tpl'
], function($, _, navTemplate) {
  return {
    render: function(target) {
      $(target || 'body').prepend(_.template(navTemplate, { msg: 'yea'}));
    }
  };
});