import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import named from 'vinyl-named';
import webpackStream from 'webpack-stream';
import webpackConfig from '../webpack.config';
import { bs } from './server';

export default () => (
    gulp.src('./app/scripts/club/pages/*.js')
        .pipe(plumber({
            errorHandler: notify.onError(err => ({
                title: 'scripts',
                message: err.message
            }))
        }))
        .pipe(named())
        .pipe(webpackStream(webpackConfig))
        .pipe(gulp.dest('dist/assets/scripts'))
        .pipe(bs.stream())
);