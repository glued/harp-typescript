'use strict';
const webpack = require('webpack');

module.exports = {
    entry: ['./public/_js/script.ts'],
    output: {
        path: __dirname,
        filename: './public/build/script.js'
    },
    resolve: {
      extensions: ['', '.js', '.ts', '.tsx']
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude:/node_modules/
            }
        ],
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
