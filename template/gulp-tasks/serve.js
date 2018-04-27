import gulp from 'gulp';
import gutil from 'gulp-util';
import connect from 'gulp-connect';
import historyApiFallback from 'connect-history-api-fallback';
import clearCache from './clear-cache';
import { dirs } from './config';

let server = require('../server/server').default;

gulp.task('reload:server', ['build:server'], () => {
  gutil.log('Reloading server');
  server.close();
  clearCache(dirs.srcServer);
  /* eslint-disable-next-line global-require  */
  server = require('../server/server').default;
  server.start();
});

gulp.task('watch:server', () => {
  gulp.watch([
    `${dirs.srcServer}/**/*.js`,
    `${dirs.srcServer}/**/*.json`,
    `${dirs.srcCommon}/**/*.js`,
  ], ['reload:server']);
});

gulp.task('reload:client', ['build:client'], () => {
  gutil.log('Reloading client');
  gulp.src(dirs.buildClient)
    .pipe(connect.reload());
});

gulp.task('watch:client', () => {
  gulp.watch([
    `${dirs.srcClient}/**/*`,
    `${dirs.srcCommon}/**/*.js`,
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
    middleware: () => [historyApiFallback()],
  });
});

gulp.task('serve', ['serve:server', 'serve:client']);
