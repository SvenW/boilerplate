'use strict';
module.exports = function(grunt) {
  // These plugins provide necessary tasks.
  var requirejs = require('requirejs/bin/r.js');
  var path = require('path');
  var _ = grunt.util._;

  grunt.registerMultiTask('bower', 'Wire-up Bower components in RJS config', function () {
    var cb = this.async();
    var excludes = this.options({exclude: []}).exclude;
    var filePath = this.data.rjsConfig;
    var baseUrl = this.data.baseUrl;
    var file = grunt.file.read(filePath);
    var index = 0;

    require('bower').commands.list({paths: true})
    .on('data', function (data) {
      var rjsConfig;
      if (data) {
        // remove extension from JS files and remove excludes
        data = _.forOwn(data, function (val, key, obj) {
          if (excludes.indexOf(key) !== -1 || key === 'requirejs') {
            delete obj[key];
            return;
          }
          if (baseUrl) {
            index = val.indexOf(baseUrl);
          }
          obj[key] = grunt.file.isDir(val) ? val.substring(index, val.length) + "/" + key.replace(/-amd/, '') : val.substring(index, val.length).replace(/\.js$/, '');
        });

        requirejs.tools.useLib(function (require) {
          rjsConfig = require('transform').modifyConfig(file, function (config) {
            // make paths relative to baseUrl if specified
            if (config.baseUrl) {
              _.forOwn(data, function (val, key, obj) {
                obj[key] = path.relative(config.baseUrl, val);
              });
            }

            _.extend(config.paths, data);
            return config;
          });
          grunt.file.write(filePath, rjsConfig);
          grunt.log.writeln('Updated RequireJS config with installed Bower components'.green);
          cb();
        });
      }
    })
    .on('error', function (err) {
      grunt.warn(err.message);
      cb();
    });
  });
};
