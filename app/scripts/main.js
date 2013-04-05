require.config({
  "paths": {
    "jquery": "vendor/jquery/jquery",
    "backbone-amd": "vendor/backbone-amd/backbone",
    "underscore-amd": "vendor/underscore-amd/underscore",
    "underscore": "vendor/underscore-amd/underscore",
    "backbone": "vendor/backbone-amd/backbone"
  }
});

require(['views/app'], function(AppView) {
  new AppView;
});
