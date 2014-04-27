/*
 * as3
 * https://github.com/victorpotasso/grunt-as3
 *
 * Copyright (c) 2014 Victor
 * Licensed under the MIT license.
 */

'use strict';

//var flexSDK = require('flex-sdk');
//var childProcess = require('child_process');

module.exports = function(grunt) 
{
    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerTask('as3', 'Compile AS3 projects', function()  
    {
        /**
         * Plugin variables
         */

         var argsStr = "";

        /**
         * Get objects from Gruntfile.js
         */

        var as3   = grunt.config.get('as3');
        var args  = as3.args;
        var libs  = as3.libs;
        var files = as3.files;
        var SDK   = as3.sdk;
        var MXMLC = SDK + "/bin/mxmlc";

        /**
         * Arguments
         */
        
        for(var arg in args)
        {                        
            argsStr += arg + "=" + args[arg] + " ";
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
         * Compiling
         */

        grunt.loadNpmTasks('grunt-shell');        
        grunt.config('shell', {
            compile : {
                command: MXMLC + " " + argsStr
            }
        });
        grunt.task.run("shell");

        /*
        childProcess.execFile(flexSDK.bin.mxmlc, argsStr, function(err, stdout, stderr) 
        {
            grunt.log.writeln("Compiling: " + argsStr); 

            if (!err) 
            {
              grunt.log.ok('File created successfully');
            }
            else 
            {
                grunt.log.error(err.toString());
                grunt.verbose.writeln('stdout: ' + stdout);
                grunt.verbose.writeln('stderr: ' + stderr);

                if (grunt.option('force') === true) 
                {
                    grunt.log.warn('Should have failed but will continue because this task had the `force` option set to `true`.');
                }
                else {
                    grunt.fail.warn('FAILED');
                }
            }
        });
        */
    });
};
