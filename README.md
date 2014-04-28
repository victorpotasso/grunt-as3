# grunt-as3
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

> This is an awesome plugin for who have been working with [Grunt.js](http://gruntjs.com/) and now have to implement few [AS3 modules](http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/) in the same environment. You don't need to download an exclusive [flex sdk plugin](https://github.com/JamesMGreene/node-flex-sdk) for it works. You should take advantage of the [Flex SDK](http://www.adobe.com/devnet/flex/flex-sdk-download.html) already installed in your environment, you have just to create a link into Gruntfile.js file. Also the [MXMLC](http://help.adobe.com/en_US/flex/using/WS2db454920e96a9e51e63e3d11c0bf69084-7fcc.html) remains the same arguments, thus you can read all the [documentation about it](http://help.adobe.com/en_US/flex/using/WS2db454920e96a9e51e63e3d11c0bf69084-7fcc.html) on the adobe's website.

* Source: [github.com/victorpotasso/grunt-as3](https://github.com/victorpotasso/grunt-as3)
* NPM: [npmjs.org/package/grunt-as3](https://www.npmjs.org/package/grunt-as3)
* Home Page: [victorpotasso.com/](http://www.victorpotasso.com)
* Twitter: [@victorpotasso](https://twitter.com/victorpotasso)

## Requirements

This plugin requires:
+ grunt-shell

## Getting Started
This plugin requires Grunt `~0.4.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-as3 --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks("grunt-as3");
```

## The "grunt-as3" task

### Overview
In your project's Gruntfile, add a section named `grunt-as3` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    as3: {
        sdk : "<%= SDK_PATH %>",

        builds : {
            test1 : {
                args : {
                    "-debug": "true",
                    "-target-player": "<%= FLASHPLAYER_VERSION %>",
                    "-use-network": "true",
                    "-static-link-runtime-shared-libraries": true,
                    "-source-path" : "<%= SOURCE_PATH %>"
                },

                libs : ["<%= SWC_FILES %>"],

                files : {            
                    "<%= SWF_FILE %>" : ["<%= CLASS FILE %>"]
                }
            },

            test2 : {
                args : {
                    "-debug": "true",
                    "-target-player": "<%= FLASHPLAYER_VERSION %>",
                    "-use-network": "true",
                    "-static-link-runtime-shared-libraries": true,
                    "-source-path" : "<%= SOURCE_PATH %>"
                },

                libs : ["<%= SWC_FILES %>"],

                files : {            
                    "<%= SWF_FILE %>" : ["<%= CLASS FILE %>"]
                }
            }
        }
    },
});
```

### Options

#### sdk
Type: `String`

Full path to Flex SDK.

#### buils
Type: `Object`

A list of builds.

#### args
Type: `Object`

[MXMLC](http://help.adobe.com/en_US/flex/using/WS2db454920e96a9e51e63e3d11c0bf69084-7fcc.html) remains the same arguments.

#### libs
Type: `Object`

List of .swc libraries to include in the compilation.

#### files
Type: `Object`

Destination and List of files to compile.



### Usage Examples

This is a simple example to use grunt-as3 plugin.

```js
grunt.initConfig({
    as3: {
        sdk : "~/Sources/flex_air/sdks/flex_4.6.0",

        builds : {
            test1 : {
                args : {
                    "-debug": "true",
                    "-target-player": "11.1",
                    "-use-network": "true",
                    "-static-link-runtime-shared-libraries": true,
                    "-source-path" : "src/classes"
                },

                libs : ["src/libs/swc/third-party/lib_name.swc"],

                files : {            
                    "deploy/assets/swf/test1.swf" : ["src/classes/Main.as"]
                }                
            },

            test2 : {
                args : {
                    "-debug": "true",
                    "-target-player": "11.1",
                    "-use-network": "true",
                    "-static-link-runtime-shared-libraries": true,
                    "-source-path" : "src/classes"
                },

                libs : ["src/libs/swc/third-party/lib_name.swc"],

                files : {            
                    "deploy/assets/swf/test2.swf" : ["src/classes/Main.as"]
                }  
            }
        }
    },

  });
});
```

## License
[MIT](http://opensource.org/licenses/MIT) © [Victor Potasso](http://victorpotasso.com)

