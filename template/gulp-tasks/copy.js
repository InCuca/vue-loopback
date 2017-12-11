import gulp from 'gulp';
import path from 'path';
import {dirs} from './config.js';

gulp.task('copy:client:fa', function() {
  return gulp.src(path.resolve(dirs.modules, 'font-awesome/fonts/*'))
  .pipe(gulp.dest(path.resolve(dirs.buildClient, 'static/fonts')));
});

gulp.task('copy:client', ['copy:client:fa'], function() {
  return gulp.src(dirs.srcClient + '/**/!(*.vue|*.js)')
  .pipe(gulp.dest(path.resolve(dirs.buildClient)));
});
