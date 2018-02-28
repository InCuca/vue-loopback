import babelify from 'babelify';
import vueify from 'vueify';
import modulesify from 'css-modulesify';
import tmp from 'tmp';
import {dirs} from '../gulp-tasks/config';
import {customSass} from '../gulp-tasks/compilers';

const cssBundleFile = tmp.fileSync();

export default (config) => {
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

  config.set({
    browsers: ['Chrome'],
    frameworks: ['browserify', 'mocha', 'chai'],
    preprocessors: {
      '**/*.js': ['browserify'],
    },
    files: [
      cssBundleFile.name,
    ],
    browserify: {
      output: cssBundleFile.name,
      debug: true,
      transform: [babelify, vueify],
      plugin: [[modulesify, {
        global: true,
        generateScopedName(name, filename) {
          const matches = filename.match(/^\/node_modules/);
          if (matches) return name;
          if (process.env.NODE_ENV === 'production') {
            return modulesify.generateShortName(name, filename);
          }
          return modulesify.generateLongName(name, filename);
        },
      }]],
    },
  });
};
