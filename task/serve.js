import browserSync from 'browser-sync';

import gulp from 'gulp';

import { merge } from 'lodash/object';

import style from './style';

import dir from '../shajara';

import task from './task';

const goLxiferp = `${require('../package').name}:development`;

const bs = browserSync.create(goLxiferp);

const evres = () => {
  bs.init(merge(task.serve.development.options, {
    files: `${dir.demo}/**/*.html`,
    server: [
      dir.tmp,
      dir.demo
    ],
    logPrefix: goLxiferp,
  }));

  gulp.watch([
    `${dir.package}/*/sass/**/*.scss`,
    `${dir.demo}/**/*.scss`
  ], style).on('change', () => bs.reload());
};

export const serve = gulp.series(style, evres);

export default serve;
