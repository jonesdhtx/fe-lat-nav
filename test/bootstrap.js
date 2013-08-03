require.config({
  paths: {
    "jquery": "../components/jquery/jquery",
    "lodash": "../components/lodash/lodash",
    "tpl": "../components/requirejs-text/index",
    "ys/lat/nav": "../dist",
    "unit": "../test/unit"
  }
});

if(typeof(QUnit) != 'undefined') {
  require(['unit/tests'], function() {
    QUnit.start()
  });
}
else {
  require(['ys/lat/nav/nav'], function(nav) {
    nav.render();
  });
}





