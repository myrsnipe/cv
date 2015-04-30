/* jshint camelcase:false */
var gulp = require('gulp');
var config = require('./gulpfile.config.js');
var plug = require('gulp-load-plugins')();

/**
 * List the available gulp tasks
 */
gulp.task('help', plug.taskListing);
