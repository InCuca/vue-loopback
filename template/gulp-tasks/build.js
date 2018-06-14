/* eslint-disable arrow-body-style */
import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import babel from 'gulp-babel';
import path from 'path';
import browserify from 'browserify';
import vueify from 'vueify';
import babelify from 'babelify';
import tfilter from 'tfilter';
import modulesify from 'css-modulesify';
import aliasify from 'aliasify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import {argv} from 'yargs';
import {dirs, extended} from './config';
import {customSass} from './compilers';

gulp.task('build:client', ['copy:client', 'copy:config:server'], () => {
  // Node modules to be included in babel transpilation
  //  Use this with ES6 modules for example
  const bModules = [];

  if (extended) bModules.push('bootstrap-vue/es');

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

  const b = browserify({
    entries: [
      path.resolve(dirs.srcClient, 'main.js'),
      ...bModules.map(mod => path.resolve(dirs.modules, mod)),
    ],
    debug: true,
  });

  // Transpile .vue
  b.transform(vueify);

  // Babel Settings with module filter
  const bSettings = {
    plugins: ['transform-runtime'],
  };

  b.transform(tfilter(
    babelify,
    {
      filter: (filename) => {
        const exception = bModules.some(
          mod => filename.includes(
            path.resolve(dirs.modules, mod)
          )
        );
        if (exception) {
          // node module
          // console.log('Transpiling module', filename);
          return true;
        } else if (!filename.includes(dirs.modules)) {
          // filter not in node_modules
          // console.log('Transpiling src', filename);
          return true;
        }
        // console.log('NOT transpiling', filename);
        return false;
      },
    },
    {
      ...bSettings,
      global: true,
      presets: ['env'],
    }
  ));

  b.plugin(modulesify, {
    output: path.resolve(
      dirs.buildClient,
      'bundle.css'
    ),
    global: true,
    generateScopedName(name, filename) {
      const matches = filename.match(/^\/node_modules/);
      if (matches) return name;
      if (process.env.NODE_ENV === 'production') {
        return modulesify.generateShortName(name, filename);
      }
      return modulesify.generateLongName(name, filename);
    },
  });

  if (argv.production) {
    b.transform(aliasify, {
      replacements: {
        '(.+)server/config.json$': path.resolve(
          dirs.buildServer,
          'config.json',
        ),
      },
      verbose: true,
    });
  }

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

gulp.task('build:server', ['copy:server', 'copy:config:server'], () => {
  return gulp.src(path.resolve(dirs.srcServer, '**/*.js'))
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dirs.buildServer));
});

gulp.task('build:index', () => {
  return gulp.src(path.resolve(dirs.root, 'index.js'))
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dirs.build));
});

gulp.task('build', [
  'build:client',
  'build:common',
  'build:server',
  'build:index',
  'copy:package',
]);
