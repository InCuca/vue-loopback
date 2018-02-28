import gulp from 'gulp';
import mocha from 'gulp-mocha';
import {Server} from 'karma';
import path from 'path';
import {dirs} from './config';

gulp.task('test:server', () => gulp.src(path.resolve(dirs.testServer, '**/*.spec.js'))
  .pipe(mocha({
    compilers: 'js:babel-core/register',
    require: path.resolve(dirs.test, 'mocha.conf.js'),
  })));

gulp.task('test:client', (done) => {
  new Server({
    files: [path.resolve(dirs.testClient, '**/*.spec.js')],
    configFile: path.resolve(dirs.test, 'karma.conf.js'),
    singleRun: true,
  }, done).start();
});

gulp.task('test', ['test:server', 'test:client']);
