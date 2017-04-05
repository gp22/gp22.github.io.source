'use strict';

const gulp = require('gulp'),
webpack = require('webpack');

// setup the scripts task to use webpack using a callback so that gulp is aware
// when webpack completes
gulp.task('scripts', function(callback) {
  webpack(require('../../webpack.config.js'), function(err, stats) {
    if (err) {
      console.log(err.toString());
    }
    console.log(stats.toString());
    callback();
  });
});
