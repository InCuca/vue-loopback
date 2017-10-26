import gulp from 'gulp';
import path from 'path';
import {dirs} from './config.js';

gulp.task('copy:client', function() {
  return gulp.src(dirs.srcClient + '/**/!(*.vue|*.js)')
  .pipe(gulp.dest(path.resolve(dirs.buildClient)));
});
