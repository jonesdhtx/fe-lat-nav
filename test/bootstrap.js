require.config({
  paths: {
    "jquery": "../components/jquery/jquery",
    "lodash": "../components/lodash/lodash",
    "tpl": "../components/requirejs-text/index",
    "ys/lat/nav": "../dist"
  }
});

if(typeof(QUnit) != 'undefined') {
  require.config({
    deps: ["tests.js"]
  });
}
else {
  require(['ys/lat/nav/nav'], function(nav) {
    nav.render();
  });
}





