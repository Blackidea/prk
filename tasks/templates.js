import gulp from 'gulp';
import rigger from "gulp-rigger";

export default () => (
  gulp.src('./app/pages/club/*.html')
    .pipe(rigger())
    .pipe(gulp.dest('dist'))
);
