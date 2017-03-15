import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import svgSymbols from 'gulp-svg-symbols';
import gulpIf from 'gulp-if';
import rename from 'gulp-rename';
import path from 'path';

export default () => (
  gulp.src('./app/icons/club/*.svg')
    .pipe(plumber({
        errorHandler: notify.onError(err => ({
          title: 'icons',
        message: err.message
      }))
    }))
    .pipe(svgSymbols({
      id: 'xfo-svg__%f',
      className: '.xfo-svg__%f',
      templates: [
        path.join(__dirname, 'icons.scss'),
        'default-svg'
      ]
    }))
    .pipe(gulpIf('*.svg', rename('xfo-svg__icons.svg')))
    .pipe(gulpIf('*.scss', rename('icons.scss')))
    .pipe(gulpIf('*.svg', gulp.dest('dist/assets/images')))
    .pipe(gulpIf('*.scss', gulp.dest('app/styles/global/')))
);
