import gulp from 'gulp';

import loadPlugins from 'gulp-load-plugins';

import dir from '../shajara';

import task from './task';

const lp = loadPlugins();

const sass = () => {
  return gulp.src([
    `${dir.package}/**/*.scss`,
    `${dir.demo}/*/**/*.scss`,
    `!${dir.demo}/node_modules/**/*.scss`,
  ]).pipe(lp.sass(task.style.sass.options).on('error', lp.sass.logError)).pipe(gulp.dest(dir.tmp));
};

const lint = () => {
  return gulp.src([
    `${dir.package}/**/*.scss`,
    `${dir.demo}/*/**/*.scss`,
    `!${dir.demo}/node_modules/**/*.scss`,
  ]).pipe(lp.postcss());
};

export const style = gulp.parallel(sass, lint);

export default style;
