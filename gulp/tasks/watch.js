'use strict';

const gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: './'
    }
  });

  watch('./index.html', function() {
    browserSync.reload();
  });

  // watch for changes to any css files
  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('cssInject');
  });

  // watch for changes to any javascript files and call the scriptsRefresh
  // task to refresh the browser
  watch('./app/assets/scripts/**/*.js', function() {
    gulp.start('scriptsRefresh');
  });
});

gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/temp/styles/styles.css')
  .pipe(browserSync.stream());
});

// refresh the page when any javascript file changes once the main scripts
// task is completed
gulp.task('scriptsRefresh', ['scripts'], function() {
  browserSync.reload();
});
