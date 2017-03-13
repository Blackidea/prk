import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import named from 'vinyl-named';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import webpackConfig from '../webpack.config';
import { bs } from './server';

export default (callback) => {
  let firstBuildReady = false;

  const done = (err, stats) => {
    firstBuildReady = true;

    if (err) {
      console.error(err);
      return;
    }

  };

  return gulp.src('./app/scripts/club/pages/*.js')
    .pipe(plumber({
      errorHandler: notify.onError(err => ({
        title: 'scripts',
        message: err.message
      }))
    }))
    .pipe(named())
    .pipe(webpackStream(webpackConfig, webpack, done))
    .pipe(gulp.dest('dist/assets/scripts'))
    .on('data', () => {
      if (firstBuildReady) {
        callback();
      }
    })
    .pipe(bs.stream());
}
