/*
 * yes
 * https://github.com/victorpotasso/grunt-as3
 *
 * Copyright (c) 2014 Victor
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    //AS3
    as3: {
        sdk : "~/Sources/flex_air/sdks/flex_4.6.0_air_sdk_3.4",

        args : {
            "-debug": "true",
            "-target-player": "11.1",
            "-use-network": "true",
            "-static-link-runtime-shared-libraries": true,
            "-source-path" : "test/src/classes"
        },

        libs : ["test/src/libs/swc/third-party/greensock.swc"],

        files : {            
            "test/deploy/test.swf" : ["test/src/classes/Main.as"]
        }
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['as3']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
