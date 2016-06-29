# grunt-jsv

> A Grunt Task for validating JSON files using [JSV](https://github.com/garycourt/JSV/).

[![Build Status](https://img.shields.io/travis/jahed/grunt-jsv.svg)](https://travis-ci.org/jahed/grunt-jsv)
[![NPM Release](https://img.shields.io/npm/dt/grunt-jsv.svg)](https://www.npmjs.com/package/grunt-jsv)

## Getting Started

```sh
# Add the module to your project
npm install grunt-jsv --save-dev
```

```js
// Load the module in your Gruntfile
grunt.loadNpmTasks('grunt-jsv');
```

> Of course, you'll need to be using [Grunt](http://gruntjs.com/)

## Usage

```js
// Configure the task by providing schemas with JSON files to validate
grunt.config.init({
    // ...
    jsv: {
        your_target: {
            files: {
                'schema/your-schema.json': ['json/*.json']
            }
        }
    }
    // ...
});
```

```sh
# Run the task
grunt jsv
```

## Schema Support

JSV includes support upto draft v3 of the JSON Schema specification.
This plugin will not work with new changes and functionality introduced in draft v4 and beyond.


## License

Copyright (c) 2014 Jahed Ahmed

Licensed under the [MIT license](LICENSE-MIT).
