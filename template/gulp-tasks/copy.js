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

gulp.task('copy:package', function() {
  return gulp.src(dirs.root + '/package.json')
    .pipe(gulp.dest(path.resolve(dirs.build)));
});

gulp.task('copy:server', function() {
  return gulp.src(dirs.srcServer + '/**/*.json')
    .pipe(gulp.dest(path.resolve(dirs.buildServer)));
});
