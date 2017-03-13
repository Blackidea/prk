import gulp from 'gulp';
import watch from 'gulp-watch';
import { bs } from './server';

export default () => {
  const stylesPath = [
    './app/styles/club/blocks/*.scss',
    './app/styles/club/global/*.scss',
    './app/styles/club/*.scss'
  ];
  watch(stylesPath, gulp.series('styles'));
  watch(['./app/**/*.pug'], gulp.series('templates', bs.reload));
  watch(['./app/resources/**/*.*'], gulp.series('resources'));
  watch(['./app/icons/club/*.svg'], gulp.series('icons'));
  watch(['./dist/*.html'], bs.reload);
};
