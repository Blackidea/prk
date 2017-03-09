import { create as browserSync } from 'browser-sync';

export const bs = browserSync();

export default () => {
    bs.init({
        server: './dist',
        reloadOnRestart: true,
        port: 3000,
        ui: false
    });
};