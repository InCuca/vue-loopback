import babelify from 'babelify';
import vueify from 'vueify';
import { dirs } from '../gulp-tasks/config';
import { customSass } from '../gulp-tasks/compilers.js';

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
    browserify: {
      debug: true,
      transform: [babelify, vueify],
    },
  });
};
