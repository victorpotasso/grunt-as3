/***
 *                            _                    _____ 
 *                           | |                  |____ |
 *      __ _ _ __ _   _ _ __ | |_ ______ __ _ ___     / /
 *     / _` | '__| | | | '_ \| __|______/ _` / __|    \ \
 *    | (_| | |  | |_| | | | | |_      | (_| \__ \.___/ /
 *     \__, |_|   \__,_|_| |_|\__|      \__,_|___/\____/ 
 *      __/ |                                            
 *     |___/                                             
 *
 * https://github.com/victorpotasso/grunt-as3
 *
 * Copyright (c) 2014 Victor
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) 
{
    grunt.registerMultiTask('as3', 'Compile AS3 projects', function()  
    {   
        //console.log(this);
        
        // Shell config
                
        var shellConfig = null;

        
        // Get Flex SDK
         
        var SDK = grunt.config.get('flex_sdk');
        
        if( this.args.length > 0 )
        {
            shellConfig = shellConfig == null ? {} : shellConfig;
            shellConfig[ this.args[0] ] = 
            {
                command: SDK + "/bin/" + this.target + " " + this.data[ this.args[0] ]["args"].join().replace(/,/g , " ")
            }
            
        }
        else {
            for(var i in this.data)
            {
                shellConfig = shellConfig == null ? {} : shellConfig;
                shellConfig[i] = 
                {
                    command: SDK + "/bin/" + this.target + " " + this.data[i]["args"].join().replace(/,/g , " ")
                }
            }
        }        
        

        // Run Shell
        
        if(shellConfig != null)
        {
            grunt.loadNpmTasks('grunt-shell');        
            grunt.config('shell', shellConfig);
            grunt.task.run("shell");
        }
              
    });
};
