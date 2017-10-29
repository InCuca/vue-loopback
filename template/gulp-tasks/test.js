import gulp from 'gulp';
import mocha from 'gulp-mocha';
import {Server} from 'karma';
import path from 'path';
import {dirs} from './config.js';

gulp.task('test:server', () => {
  return gulp.src(path.resolve(dirs.testServer, '**/*.test.js'))
  .pipe(mocha({
    compilers: 'js:babel-core/register',
    require: path.resolve(dirs.test, 'mocha.conf.js'),
  }));
});

gulp.task('test:client', (done) => {
  new Server({
    files: [path.resolve(dirs.testClient, '**/*.test.js')],
    configFile: path.resolve(dirs.test, 'karma.conf.js'),
    singleRun: true,
  }, done).start();
});

gulp.task('test', ['test:server', 'test:client']);
