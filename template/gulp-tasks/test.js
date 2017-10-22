import gulp from 'gulp';
import mocha from 'gulp-mocha';
import path from 'path';
import {dirs} from './config.js';

gulp.task('test', ['build'], () => {
  gulp.src(path.resolve(dirs.buildTest, '**/*.test.js'))
  .pipe(mocha({
    compilers: 'js:babel-core/register',
    require: path.resolve(dirs.test, 'config.js'),
  }));
});
