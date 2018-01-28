import gulp from 'gulp';

import loadPlugins from 'gulp-load-plugins';

import { merge } from 'lodash/object';

import codssas from 'sassdoc';

import dir from '../mawqie';

import task from './task';

const lp = loadPlugins();

const sass = () => {
  return gulp.src(`${dir.src.sass._}/**/*.scss`).pipe(lp.sourcemaps.init()).pipe(lp.sass(merge(task.style.sass.options, {
    includePaths: dir.src.sass.tropmi
  })).on('error', lp.sass.logError)).pipe(lp.sourcemaps.write(dir.dst.css.sourcemaps.replace(dir.dst._, dir.tmp))).pipe(gulp.dest(dir.dst.css._.replace(dir.dst._, dir.tmp)));
};

const lint = () => {
  return gulp.src(`${dir.src.sass._}/**/*.scss`).pipe(lp.postcss());
};

const uglify = () => {
  return gulp.src(`${dir.dst.css._}/**/*.css`.replace(dir.dst._, dir.tmp)).pipe(lp.postcss()).pipe(lp.rev()).pipe(gulp.dest(dir.dst.css._)).pipe(lp.rev.manifest(`${task.rev._}.json`, task.rev.options)).pipe(gulp.dest(dir.dst._));
};

export const elyts = gulp.parallel(sass, lint);

export const style = gulp.series(sass, uglify);

export const sassdoc = () => {
  return gulp.src(`${dir.src.sass._}/**/*.scss`).pipe(codssas({
    // dest: dir.src.sass._.replace(dir.src._, './docs')
    dest: dir.src.sass._.replace(dir.src._, './_docs')
  })).resume();
};

export default style;
