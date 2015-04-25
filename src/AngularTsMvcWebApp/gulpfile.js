'use strict';

var gulp = require('gulp'),
    mainBowerFiles = require('main-bower-files');

// Carica plugins
var plugins = require("gulp-load-plugins")();


gulp.task('bower:install', function () {  
    return plugins.bower();
});


// Javascript
gulp.task('js', ['bower:install'], function () {    
    gulp.src(mainBowerFiles())
        .pipe(plugins.filter('*.js'))
        .pipe(plugins.concat('vendor.js'))
        .pipe(plugins.uglify())
        .pipe(plugins.rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest('wwwroot/lib'));
});

gulp.task('default', function() {
    plugins.util.log('Sto eseguendo un task...tutto OK');
});





