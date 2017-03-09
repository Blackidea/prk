import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import pug from 'gulp-pug';

export default () => (
    gulp.src('./app/pages/club/*.pug')
        .pipe(plumber({
            errorHandler: notify.onError(err => ({
                title: 'templates',
                message: err.message
            }))
        }))
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest('dist'))
);