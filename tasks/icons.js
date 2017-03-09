import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import gulpIf from 'gulp-if';
import svgSprite from 'gulp-svg-sprite';

export default () => (
    gulp.src('./app/icons/club/*.svg')
        .pipe(plumber({
            errorHandler: notify.onError(err => ({
                title: 'icons',
                message: err.message
            }))
        }))
        .pipe(svgSprite({
            mode: {
                css: {
                    dest: '.',
                    bust: false,
                    sprite: '../images/xfo-svg__icons.svg',
                    prefix: '%xfo-',
                    layout: 'vertical',
                    dimensions: true,
                    render: {
                        scss: {
                            dest: 'icons.scss'
                        }
                    }
                }
            }
        }))
        .pipe(gulpIf('*.svg', gulp.dest('dist/assets/images'), gulp.dest('./app/styles/club/global'))))