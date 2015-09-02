var gulp      = require('gulp');
var iconFont  = require('../config/iconFont');
var svgSprite = require('../config/svg-sprite');
var images    = require('../config/images');
var sass      = require('../config/sass');
var fonts     = require('../config/fonts');
var watch     = require('gulp-watch');

gulp.task('watch', ['browserSync'], function() {
  watch(images.src, function() { gulp.start('images'); });
  watch(sass.src, function() { gulp.start('sass'); });
  watch(iconFont.src, function() { gulp.start('iconFont'); });
  watch(svgSprite.src, function() { gulp.start('svg-sprite'); });
  watch(fonts.src, function() { gulp.start('fonts'); });
});
