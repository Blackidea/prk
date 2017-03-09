import webpack from 'webpack';

const DEBUG = process.env.NODE_ENV !== 'production';

export default {
    module: {
        rules: [{
            test: /\.js$/,
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
    devtool: DEBUG ? "eval" : null
};