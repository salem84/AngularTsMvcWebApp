'use strict';

var gulp = require('gulp');

// Carica plugins
var plugins = require("gulp-load-plugins")();

gulp.task('default', function() {
    plugins.util.log('Sto eseguendo un task...tutto OK');
});





