var webpack = require('webpack');
var gulp = require('gulp');
var gutil = require('gulp-util');
var path = require('path');
var webpackConfig = require('./webpack.config.js');
var less = require('gulp-less');
var cssmin = require('gulp-cssmin');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var webserver = require('gulp-webserver');
var copy = require('gulp-contrib-copy');
var ChildProcess = require('child_process');

gulp.task('server', function() {
  gulp.src('build')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task('default', function(callback) {

    // Setup sourcemapping
    webpackConfig.devtool = 'source-map';

    lessBuild(false, function() {
        gutil.log("Less", ': Built');
    });

    webpackBuild(function() {
        gulp.watch([
            'src/**/*.js',
            'src/**/*.jsx'
        ], ["wepback:build"]);
        gulp.watch([
            'src/**/*.less'
        ], ["less:build"]);
        callback();
    });

    gulp.src('src/index.html')
        .pipe(copy())
        .pipe(gulp.dest('build'))

    gulp.src('src/fonts/*')
        .pipe(copy())
        .pipe(gulp.dest('build/fonts'))

    gulp.src('src/icons/*')
        .pipe(copy())
        .pipe(gulp.dest('build/icons'))

});

gulp.task('wepback:build', function(callback) {

    webpackBuild(callback);

});

gulp.task('less:build', function(callback) {

    lessBuild(false, callback);

});

gulp.task('less:dist', function(callback) {

    lessDist(false, callback);

});

gulp.task('docs', function(callback) {
    documentationBuild(callback);
});

function webpackBuild(callback) {
    
    webpack(webpackConfig, function(err, stats) {
        
        gutil.log("Webpack", stats.toString({colors: true}));

        callback();

    }); 

}

function lessBuild(isProduction, callback) {
    gulp.src(['src/index.less'])
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(rename("aptr-uikit.css"))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build'));
    
    callback();
            
}

function lessDist(isProduction, callback) {
    gulp.src(['src/uiElements/less/index.less'])
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(rename("aptr-uikit.less"))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/less'));
    
    callback();
}

function documentationBuild(callback) {
    var buildProcess = ChildProcess.exec("docco src/* src/**/* src/**/**/* src/**/**/**/*", {cwd: global.root}, function(error, stdout, stderr) {
        if (error) {
            console.log(error.stack);
            console.log('Error code: '+error.code);
            console.log('Signal received: '+error.signal);
        }
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        buildProcess.kill();
        callback();
    });
}