import path from 'path';
import loopback from 'loopback';
import boot from 'loopback-boot';

export default function(options) {
  const defaultOptions = {
    appRootDir: path.resolve(__dirname, '../../server'),
    scriptExtensions: ['.js', '.json', '.node', '.ejs'],
  };

  return new Promise((resolve) => {
    const server = loopback();
    boot(
      server,
      Object.assign(defaultOptions, options),
      () => resolve(server)
    );
  });
}
