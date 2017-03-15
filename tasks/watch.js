import gulp from 'gulp';
import watch from 'gulp-watch';
import { bs } from './server';

export default () => {
  watch(['./app/styles/club/**/*.scss'], gulp.series('styles'));
  watch(['./app/scripts/club/**/*.js'], gulp.series('scripts'));
  watch(['./app/**/*.pug'], gulp.series('templates', bs.reload));
  watch(['./app/resources/**/*.*'], gulp.series('resources'));
  watch(['./app/icons/club/*.svg'], gulp.series('icons'));
  watch(['./dist/*.html'], bs.reload);
};
