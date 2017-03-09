import gulp from 'gulp';
import newer from 'gulp-newer';

export default () => (
    gulp.src('./app/resources/club/**/*.*')
        .pipe(newer('dist'))
        .pipe(gulp.dest('dist'))
);