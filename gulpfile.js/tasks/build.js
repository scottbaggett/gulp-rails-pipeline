var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');

gulp.task('build', function(cb) {
  var tasks = [];
  if(process.env.RAILS_ENV != 'production') {
    tasks.push('build:development');
  } else {
    tasks.push('build:production');
  }
  gulpSequence(tasks, cb);
});
