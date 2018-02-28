import path from 'path';
import sass from 'vueify/lib/compilers/sass';
import {dirs} from './config.js';

function replaceCuringas(content) {
  // FIXME: Not working
  const replacer = `@import "${dirs.srcClient}/$2";`;

  let replaced = content.replace(/@import.+(\@)(.*?)[\"\']/, replacer);
  replaced = content.replace(/@import.+(\~)(.*?)[\"\']/, replacer);
  return replaced;
}

export function customSass(content, callback, compiler, filePath) {
  const relativePath = path.relative(
    path.dirname(filePath),
    path.resolve(dirs.srcClient, 'style/global.scss')
  );

  // Global SCSS
  //
  content = `@import "${relativePath}";${content}`;

  content = replaceCuringas(content);

  sass(
    content,
    callback,
    compiler,
    filePath
  );
}
