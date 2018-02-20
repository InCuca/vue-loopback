import gulp from 'gulp';
import gutil from 'gulp-util';
import connect from 'gulp-connect';
import historyApiFallback from 'connect-history-api-fallback';
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
    dirs.srcServer + '/**/*.json',
    dirs.srcCommon + '/**/*.js',
  ], ['reload:server']);
});

gulp.task('reload:client', ['build:client'], () => {
  gutil.log('Reloading client');
  gulp.src(dirs.buildClient)
    .pipe(connect.reload());
});

gulp.task('watch:client', () => {
  gulp.watch([
    dirs.srcClient + '/**/*',
    dirs.srcCommon + '/**/*.js',
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
    middleware: (connect, opt) => {
      return [historyApiFallback()];
    },
  });
});

gulp.task('serve', ['serve:server', 'serve:client']);
