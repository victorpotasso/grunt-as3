# grunt-as3

> Compile AS3 projects

## Getting Started
This plugin requires Grunt `~0.4.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-as3 --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-as3');
```

## The "yes" task

### Overview
In your project's Gruntfile, add a section named `yes` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    as3: {
        sdk : "<%= SDK_PATH %>",

        args : {
            "-debug": "true",
            "-target-player": ""<%= FLASHPLAYER_VERSION %>"",
            "-use-network": "true",
            "-static-link-runtime-shared-libraries": true,
            "-source-path" : "<%= SOURCE_PATH %>"
        },

        libs : ["<%= SWC_FILES %>"],

        files : {            
            ""<%= SWF_FILE %>"" : [""<%= CLASS FILE %>""]
        }
    },
});
```

### Options

#### sdk
Type: `String`

Full path to Flex SDK. 

#### args
Type: `String`

These are exactly MXMLC arguments.

#### libs
Type: `String`

List of .swc libraries to include in the compilation.

#### files
Type: `String`

Destination and List of files to compile.



### Usage Examples

#### Default Options
This is a simple example to use grunt-as3 plugin.

```js
grunt.initConfig({
    as3: {
        sdk : "~/Sources/flex_air/sdks/flex_4.6.0",

        args : {
            "-debug": "true",
            "-target-player": "11.1",
            "-use-network": "true",
            "-static-link-runtime-shared-libraries": true,
            "-source-path" : "src/classes"
        },

        libs : ["src/libs/swc/third-party/lib_name.swc"],

        files : {            
            "deploy/assets/swf/test.swf" : ["src/classes/Main.as"]
        }
    },

  });
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
