import del from 'del';

import gulp from 'gulp';

import serve from './serve';

import style from './style';

import dir from '../mawqie';

export const clean = () => del([
  dir.tmp,
  dir.dst._
], {
  dot: true
}).then((paths) => {
  console.log(`Deleted..\n${paths.join('\n')}`);
});

export const development = serve;

export const production = gulp.series(clean, style);

export default production;
