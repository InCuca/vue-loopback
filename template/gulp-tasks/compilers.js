/* eslint no-useless-escape: 0, import/prefer-default-export: 0 */
import path from 'path';
import sass from 'vueify/lib/compilers/sass';
import {dirs} from './config';

function replaceCuringas(content) {
  // FIXME: Not working
  const replacer = `@import "${dirs.srcClient}/$2";`;

  let replaced = content.replace(/@import.+(\@)(.*?)[\"\']/, replacer);
  replaced = content.replace(/@import.+(\~)(.*?)[\"\']/, replacer);
  return replaced;
}

export function customSass(content, callback, compiler, filePath) {
  let myContent = content;
  const relativePath = path.relative(
    path.dirname(filePath),
    path.resolve(dirs.srcClient, 'style/global.scss')
  ).replace(/\\/g, '/'); // Replace backslashes with forward slashes (windows)

  // Global SCSS
  //
  myContent = `@import "${relativePath}";${myContent}`;

  myContent = replaceCuringas(myContent);

  sass(
    myContent,
    callback,
    compiler,
    filePath
  );
}
