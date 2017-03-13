import webpack from 'webpack';

const DEBUG = process.env.NODE_ENV !== 'production';

export default {
    watch: DEBUG,
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        })
    ],
    devtool: DEBUG ? "eval" : false
};
