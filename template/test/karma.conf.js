import babelify from 'babelify';
import vueify from 'vueify';

export default (config) => {
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
