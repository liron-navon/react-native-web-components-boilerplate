const path = require('path');
const packageJson = require('./package');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const camelCase = require('lodash/camelCase');

const [distDirectory, distFile] = packageJson.main.trim().split('/');

const isProduction = process.env.NODE_ENV === 'production';

const config = {
    mode: isProduction ? 'production' : 'development',
    entry: path.resolve('src/index.js'),
    devtool: "source-map",
    output: {
        path: path.resolve(distDirectory),
        filename: distFile,
        library: camelCase(packageJson.name),
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            // solve js/jsx files
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            // solve asset files
            {
                test: /\.(jpe?g|png|gif)$/i,
                use: [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack-loader',
                ],
            }
        ]
    },
    plugins: [new CleanWebpackPlugin()],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    externals: ['react-native', 'react', 'react-art', 'react-dom'],
};

module.exports = config;
