require.config({
  "paths": {
    "jquery": "vendor/jquery/jquery",
    "backbone.marionette": "vendor/backbone.marionette/lib/backbone.marionette",
    "backbone": "vendor/backbone/backbone",
    "underscore": "vendor/underscore/underscore"
  },
  "shim": {
    "underscore": {
      "exports": "_",
      "path": "vendor/underscore/underscore"
    },
    "backbone": {
      "exports": "Backbone",
      "deps": [
        "underscore",
        "jquery"
      ],
      "path": "vendor/backbone/backbone"
    }
  }
});

require(['views/app'], function(AppView) {
  new AppView;
});
