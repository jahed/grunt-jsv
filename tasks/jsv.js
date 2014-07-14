/*
 * grunt-jsv
 * https://github.com/Jahed/grunt-jsv
 *
 * Copyright (c) 2014 Jahed Ahmed
 * Licensed under the MIT license.
 */

'use strict';

var JSV = require('JSV').JSV;
var JSV_URI_PREFIX_REGEX = /^.*#/g,
    ERROR_TABLE_COLUMN_WIDTHS = [10, 70];

module.exports = function(grunt) {
    grunt.registerMultiTask('jsv', 'The best Grunt plugin ever.', function() {
        var options = this.options({}),
            env = JSV.createEnvironment();

        this.files.forEach(function(f) {
            var schema;

            if (!grunt.file.exists(f.dest)) {
                grunt.fail.warn('Schema file "' + f.dest + '" not found.');
                return;
            }

            try {
                schema = JSON.parse(grunt.file.read(f.dest));     
            } catch(e) {
                grunt.log.error('Failed to parse ' + f.dest);
                grunt.fail.warn(e);
                return;
            }       

            grunt.log.subhead('Validating Against ' + (schema.title ? schema.title+' Schema' : f.dest));

            f.src.filter(function(filepath) {
                if (!grunt.file.exists(filepath)) {
                    grunt.fail.warn('Source file "' + filepath + '" not found.');
                    return false;
                }
                return true;
            }).forEach(function(filepath) {
                var data = grunt.file.read(filepath),
                    json,
                    report;

                try {
                    json = JSON.parse(data);
                } catch(e) {
                    grunt.fail.warn(e);
                    return;
                }

                grunt.log.verbose.write('Validating ' + filepath + '...');

                report = env.validate(json, schema);

                if(report.errors.length === 0) {
                    grunt.log.verbose.ok();
                    return;
                }
                
                grunt.log.verbose.error();
                grunt.log.writeln((
                    filepath + ' (' +
                    report.errors.length + ' ' + grunt.util.pluralize(report.errors.length, ' error/errors', '/') +
                    ')'
                ).red.bold);
                grunt.log.errorlns();

                report.errors.forEach(function(error) {
                    grunt.log.error(error.message.bold);
                    grunt.log.error(
                        grunt.log.table(ERROR_TABLE_COLUMN_WIDTHS, [
                            'Attribute'.grey, error.attribute
                        ])
                    );
                    grunt.log.error(
                        grunt.log.table(ERROR_TABLE_COLUMN_WIDTHS, [
                            'Details'.grey, error.details.join ? error.details.join('\n') : '' + error.details
                        ])
                    );
                    grunt.log.error(
                        grunt.log.table(ERROR_TABLE_COLUMN_WIDTHS, [
                            'Source'.grey, error.uri.replace(JSV_URI_PREFIX_REGEX, '')
                        ])
                    );
                    grunt.log.error(
                        grunt.log.table(ERROR_TABLE_COLUMN_WIDTHS, [
                            'Schema'.grey, error.schemaUri.replace(JSV_URI_PREFIX_REGEX, '')
                        ])
                    );
                    grunt.log.errorlns();
                });

                grunt.fail.warn(
                    'JSON Validation Failed (' +
                    report.errors.length + ' ' + grunt.util.pluralize(report.errors.length, ' error/errors') +
                    ')'
                );

            });

            grunt.log.oklns(
                'JSON Validation Passed (' +
                f.src.length + ' ' + grunt.util.pluralize(f.src.length, ' file/files') +
                ')'
            );
        });
    });

};
