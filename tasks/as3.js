/*
 * as3
 * https://github.com/victorpotasso/grunt-as3
 *
 * Copyright (c) 2014 Victor
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) 
{
    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerTask('as3', 'Compile AS3 projects', function()  
    {   
        /**
         * Shell config
         */
        
        var shellConfig = {};
        
        /**
         * Get objects from Gruntfile.js
         */

        var as3   = grunt.config.get('as3');
        var SDK   = as3.sdk;
        var MXMLC = SDK + "/bin/mxmlc";
        var builds = as3.builds;

        for(var build in builds)
        {
            var args  = builds[build].args;
            var libs  = builds[build].libs;
            var files = builds[build].files;
            
            /**
             * Args String
             */

             var argsStr = "";

            /**
             * Arguments
             */
                         
            for(var arg in args)
            {   
                argsStr += args[arg] + " ";
            }

            /**
             * Libs
             */

            for(var lib in libs)
            {                        
                argsStr += "-compiler.include-libraries+=" + libs[lib] + " ";
            }

            /*
             * Files
             */

            for(var file in files)
            {  
                argsStr += "-output " + file + " " + files[file] + " ";
            }
        
            /**
             * add command to shell config
             */
            
            shellConfig[build] = {
                command: MXMLC + " " + argsStr
            }
        }

        /**
         * Compiling
         */

        grunt.loadNpmTasks('grunt-shell');        
        grunt.config('shell', shellConfig);
        grunt.task.run("shell"); 
    });
};
