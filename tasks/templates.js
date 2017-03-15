import gulp from 'gulp';
import rigger from "gulp-rigger";
import { bs } from './server';

export default () => (
  gulp.src('./app/pages/club/*.html')
    .pipe(rigger())
    .pipe(gulp.dest('dist'))
    .pipe(bs.stream())
);
