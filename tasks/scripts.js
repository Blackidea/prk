import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import rigger from 'gulp-rigger';
import gulpIf from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
import babel from 'gulp-babel';
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
    .pipe(gulpIf(DEBUG, sourcemaps.init()))
    .pipe(babel())
    .pipe(gulpIf(DEBUG, sourcemaps.write()))
    .pipe(gulp.dest('dist/assets/scripts'))
    .pipe(bs.stream())
);
