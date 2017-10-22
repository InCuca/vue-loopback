import gulp from 'gulp';
import gutil from 'gulp-util';
import connect from 'gulp-connect';
import {dirs} from './config.js';
import server from '../server/server.js';

gulp.task('reload:server', ['build:server'], () => {
  gutil.log('Reloading server');
  server.close();
  server.start();
});

gulp.task('watch:server', () => {
  gulp.watch([
    dirs.srcServer + '/**/*.js',
    dirs.srcCommon + '/**/*.js',
  ], ['reload:server']);
});

gulp.task('reload:client', ['build:client'], () => {
  gutil.log('Reloading client');
  connect.reload();
});

gulp.task('watch:client', () => {
  gulp.watch([
    dirs.srcClient + '/**/*.js',
    dirs.srcCommon + '/**/*.js',
    dirs.srcClient + '/**/*.vue',
  ], ['reload:client']);
});

gulp.task('serve:server', ['build:server', 'watch:server'], () => {
  server.start();
});

gulp.task('serve:client', ['build:client', 'watch:client'], () => {
  connect.server({
    name: 'Client App',
    root: dirs.buildClient,
    livereload: true,
  });
});

gulp.task('serve', ['serve:server', 'serve:client']);
