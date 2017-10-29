import babelify from 'babelify';
import vueify from 'vueify';

export default (config) => {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['browserify', 'mocha', 'chai', 'phantomjs-shim'],
    preprocessors: {
      '**/*.js': ['browserify'],
    },
    browserify: {
      debug: true,
      transform: [babelify, vueify],
    },
  });
};
