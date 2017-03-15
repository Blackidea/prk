import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import rigger from 'gulp-rigger';
import { bs } from './server';

const DEBUG = process.env.NODE_ENV !== 'production';

export default (callback) => (
  gulp.src('./app/scripts/club/pages/*.js')
    .pipe(plumber({
      errorHandler: notify.onError(err => ({
        title: 'scripts',
        message: err.message
      }))
    }))
    .pipe(rigger())
    .pipe(gulp.dest('dist/assets/scripts'))
    .pipe(bs.stream())
);
