'use strict';
module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    bower: {
      target: {
        rjsConfig: 'app/scripts/main.js',
        baseUrl: 'vendor'
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-bower-requirejs');
  // Default task.
  grunt.registerTask('default', ['bower']);
};
