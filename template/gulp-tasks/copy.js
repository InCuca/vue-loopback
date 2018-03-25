/* eslint-disable arrow-body-style */
import gulp from 'gulp';
import path from 'path';
import fs from 'fs';
import {argv} from 'yargs';
import {dirs, prod} from './config';


gulp.task('copy:client:fa', () => {
  return gulp
    .src(path.resolve(dirs.modules, 'font-awesome/fonts/*'))
    .pipe(gulp.dest(path.resolve(dirs.buildClient, 'static/fonts')));
});

gulp.task('copy:client', ['copy:client:fa'], () => {
  return gulp
    .src(`${dirs.srcClient}/**/!(*.vue|*.js)`)
    .pipe(gulp.dest(path.resolve(dirs.buildClient)));
});

gulp.task('copy:package', () => {
  return gulp.src(`${dirs.root}/package.json`)
    .pipe(gulp.dest(path.resolve(dirs.build)));
});

gulp.task('copy:server', () => {
  return gulp.src(`${dirs.srcServer}/**/*.json`)
    .pipe(gulp.dest(path.resolve(dirs.buildServer)));
});

gulp.task('copy:config:server', ['copy:server'], (done) => {
  if (argv.production) {
    const configPath = path.resolve(
      dirs.srcServer,
      'config.json'
    );

    fs.readFile(configPath, (err, data) => {
      if (err) done(err);

      fs.writeFile(
        path.resolve(dirs.buildServer, 'config.json'),
        JSON.stringify({
          ...JSON.parse(data),
          ...prod,
        }),
        done
      );
    });
  } else {
    done();
  }
});
