import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import babel from 'gulp-babel';
import path from 'path';
import browserify from 'browserify';
import vueify from 'vueify';
import babelify from 'babelify';
import modulesify from 'css-modulesify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import {dirs} from './config.js';
import {customSass} from './compilers.js';

gulp.task('build:test', () => {
  return gulp.src([
    path.resolve(dirs.test, '**/*.test.js'),
    path.resolve(dirs.test, 'config.js'),
  ])
  .pipe(sourcemaps.init())
  .pipe(babel())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(dirs.buildTest));
});

gulp.task('build:client', ['copy:client'], () => {
  vueify.compiler.applyConfig({
    sass: {
      includePaths: [
        dirs.modules,
      ],
    },
    customCompilers: {
      scss: customSass,
    },
  });

  let b = browserify({
    entries: path.resolve(dirs.srcClient, 'main.js'),
    debug: true,
  });

  b.transform(vueify);

  b.transform(babelify, {plugins: ['transform-runtime']});

  b.plugin(modulesify, {
    output: path.resolve(
      dirs.buildClient,
      'bundle.css'
    ),
    global: true,
    generateScopedName: function(name, filename) {
      var matches = filename.match(/^\/node_modules/);
      if (matches) return name;
      if (process.env.NODE_ENV === 'production') {
        return modulesify.generateShortName(name, filename);
      } else {
        return modulesify.generateLongName(name, filename);
      }
    },
  });

  return b.bundle()
  .pipe(source('bundle.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(dirs.buildClient));
});

gulp.task('build:common', () => {
  return gulp.src(path.resolve(dirs.srcCommon, '**/*.js'))
  .pipe(sourcemaps.init())
  .pipe(babel())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(dirs.buildCommon));
});

gulp.task('build:server', ['copy:server'], () => {
  return gulp.src([
    path.resolve(dirs.srcServer, '**/*.js'),
    path.resolve(dirs.root, 'index.js'),
  ])
  .pipe(sourcemaps.init())
  .pipe(babel())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(dirs.buildServer));
});

gulp.task('build', [
  'build:test',
  'build:client',
  'build:common',
  'build:server',
  'copy:package',
]);
