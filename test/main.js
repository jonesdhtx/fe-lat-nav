require.config({
  paths: {
    "jquery": "../components/jquery/jquery",
    "lodash": "../components/lodash/lodash",
    "tpl": "../components/requirejs-text/index",
    "unit": "../test/unit",
    "ys/lat/nav": "../dist"
  }
});

if(typeof(QUnit) != 'undefined') {
  require(['unit/index'], function() {
    QUnit.start()
  });
}
else {
  require(['ys/lat/nav/nav'], function(nav) {
    nav.render();
  });
}





