import gulp from 'gulp';
import clean from './tasks/clean';
import scripts from './tasks/scripts';
import styles from './tasks/styles';
import templates from './tasks/templates';
import icons from './tasks/icons';
import resources from './tasks/resources';
import server from './tasks/server';
import watch from './tasks/watch';

gulp.task('templates', templates);
gulp.task('clean', clean);
gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('icons', icons);
gulp.task('resources', resources);
gulp.task('server', server);
gulp.task('watch', watch);

gulp.task('build', gulp.series('clean', gulp.parallel('styles', 'scripts', 'templates', 'icons', 'resources')));
gulp.task('dev', gulp.series('build', gulp.parallel('watch', 'server')));
gulp.task('default', gulp.series('dev'));
