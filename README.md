# grunt-jsv

> Grunt Task for validating JSON files using [JSV](https://github.com/garycourt/JSV/).

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-jsv --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-jsv');
```

## The "jsv" task

### Overview
In your project's Gruntfile, add a section named `jsv` to the data object passed into `grunt.config.init()`.

```js
grunt.config.init({
    jsv: {
        options: {
            // Task-specific options go here.
        },
        your_target: {
            // Target-specific file lists and/or options go here.
        },
    },
});
```

### Options

Currently there are no options.

### Usage Examples

```js
grunt.config.init({
    jsv: {
        options: {},
        files: {
            'schema/your-schema.json': ['json/*.json'],
        },
    },
});
```

##Schema Support

JSV includes support upto draft v3 of the JSON Schema specification. This plugin will not work with new changes and functionality introduced in draft v4 and beyond.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
