import gulp from 'gulp';
import mocha from 'gulp-mocha';
import {Server} from 'karma';
import path from 'path';
import {argv} from 'yargs';
import {dirs} from './config';

gulp.task(
  'test:server',
  () =>
    gulp.src(argv.t || path.resolve(dirs.testServer, '**/*.spec.js'))
      .pipe(mocha({
        compilers: 'js:babel-core/register',
        require: path.resolve(dirs.test, 'mocha.conf.js'),
        exit: true,
      }))
);

gulp.task('test:client', (done) => {
  new Server({
    files: [argv.t || path.resolve(dirs.testClient, '**/*.spec.js')],
    configFile: path.resolve(dirs.test, 'karma.conf.js'),
    singleRun: true,
  }, done).start();
});

gulp.task('test', ['test:server', 'test:client']);
