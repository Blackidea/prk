import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import gulpIf from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
import cssimport from 'gulp-cssimport';
import { bs } from './server';

const DEBUG = process.env.NODE_ENV !== 'prodution';

export default () => (
  gulp.src('./app/styles/club/*.scss')
    .pipe(plumber({
      errorHandler: notify.onError(err => ({
        title: 'styles',
        message: err.message
      }))
    }))
    .pipe(gulpIf(DEBUG, sourcemaps.init()))
    .pipe(sass())
    .pipe(cssimport())
    .pipe(autoprefixer({ browsers: ['last 2 versions', 'ie 10'] }))
    .pipe(gulpIf(DEBUG, sourcemaps.write()))
    .pipe(gulp.dest('dist/assets/styles'))
    .pipe(bs.stream())
);
