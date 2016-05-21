/*eslint-env node */
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
      new webpack.DefinePlugin({ 'PROD_ENV': true }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
         compressor: { warnings: false }
      })
    ],
    stats: { colors: true }
};
