/*
 * grunt-as3
 * https://github.com/victorpotasso/grunt-as3
 *
 * Copyright (c) 2014 Victor
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
       
        /**
         * jshint
         */

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

        /**
         * grunt-as3
         */

        flex_sdk : "~/Sources/flex_air/sdks/flex_4.5.1_air_sdk_3.0",    
        as3: {
                    
            asdoc : {
                main : {
                    args : [
                        "-source-path test/src/classes/",
                        "-doc-sources test/src/classes/", 
                        "-library-path test/src/libs/swc/third-party",
                        "-output test/docs"
                    ]
                }
            },

            mxmlc : {
                test1: {

                    args : [
                        '-language+=klingon',
                        '-title "checkintest!"', 
                        '-localized-description "it is awesome" en-us', 
                        '-localized-description "c est magnifique!" fr-fr',
                        '-creator "Victor Potasso"',

                        '-default-size 500 500',
                        '-default-frame-rate=24',

                        "-compiler.include-libraries+=test/src/libs/swc/third-party/greensock.swc",
                        
                        '-debug=true',
                        '-target-player=11.1',
                        '-use-network=true',
                        '-static-link-runtime-shared-libraries=true',
                        '-source-path=test/src/classes',
                        "-output test/deploy/swf/test1.swf test/src/classes/Main.as"
                    ]
                },

                test2: {
                    args : [
                        "-compiler.include-libraries+=test/src/libs/swc/third-party/greensock.swc",
                        
                        '-debug=true',
                        '-target-player=11.1',
                        '-use-network=true',
                        '-static-link-runtime-shared-libraries=true',
                        '-source-path=test/src/classes',
                        "-output test/deploy/swf/test2.swf test/src/classes/Main.as"
                    ]
                }
            },            
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Default Task
    grunt.registerTask('default', ['as3']);

    // Documentation
    grunt.registerTask('documentation', ['as3:asdoc']);

    // swf 
    grunt.registerTask('swf', ['as3:mxmlc']);
};
