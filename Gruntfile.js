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
  grunt.loadTasks('tasks/');
  // Default task.
  grunt.registerTask('default', ['bower']);
};
