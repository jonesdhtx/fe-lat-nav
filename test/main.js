require.config({
  paths: {
    "jquery": "../components/jquery/jquery",
    "lodash": "../components/lodash/lodash",
    "tpl": "../components/requirejs-text/index",
    "unit": "../test/unit",
    "dist": "../dist"
  }
});

if(typeof(QUnit) != 'undefined') {
  require(['unit/index'], function() {
    QUnit.start()
  });
}
else {
  require(['dist/nav'], function(nav) {
    nav.render();
  });
}





