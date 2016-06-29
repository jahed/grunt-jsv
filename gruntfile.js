//
// grunt-jsv
// https://github.com/Jahed/grunt-jsv
//
// Copyright (c) 2014 Jahed Ahmed
// Licensed under the MIT license.
//

'use strict';

module.exports = function(grunt) {

    grunt.config.init({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        jsv: {
            test: {
                options: {
                },
                files: {
                    './test/schema/test-schema-1.json': ['./test/json/test-1-*.json'],
                    './test/schema/test-schema-2.json': ['./test/json/test-2-1.json']
                }
            }
        }
    });

    grunt.task.loadTasks('tasks');

    grunt.task.loadNpmTasks('grunt-contrib-jshint');

    grunt.task.registerTask('test', ['jshint', 'jsv']);
    grunt.task.registerTask('default', ['test']);

};
