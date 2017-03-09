import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import gulpIf from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
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
        .pipe(sass({
            includePaths: require('node-normalize-scss').includePaths
        }))
        .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
        .pipe(gulpIf(DEBUG, sourcemaps.write()))
        .pipe(gulp.dest('dist/assets/styles'))
        .pipe(bs.stream())
);
