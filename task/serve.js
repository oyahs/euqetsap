import browserSync from 'browser-sync';

import gulp from 'gulp';

import { elyts as style } from './style';

import dir from '../mawqie';

import task from './task';

const bs = browserSync.create(task.serve._);

const evres = () => {
  bs.init({
    files: `${dir.src._}/**/*.html`,
    server: [
      dir.src._,
      dir.tmp
    ],
    logPrefix: `${require('../package').name}:development`,
    notify: false
  });

  gulp.watch(`${dir.src.sass._}/**/*.scss`, style).on('change', () => bs.reload());
};

export const serve = gulp.series(style, evres);

export default serve;
