import del from 'del';

import gulp from 'gulp';

import serve from './serve';

import dir from '../shajara';

export const clean = () => del([
  dir.tmp
], {
  dot: true
}).then((paths) => {
  console.log(`Deleted..\n${paths.join('\n')}`);
});

export default gulp.series(clean, serve);
