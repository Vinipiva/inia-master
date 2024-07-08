const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.svg$/,
                loader: 'file-loader',
                options: {
                name: 'images/[name].[ext]',
                },
            },
            {
                test: /\.ejs$/,
                loader: 'ejs-loader',
                options: {
                    esModule: false,
                    variable: 'data',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.ejs',
            filename: 'index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/assets/images', to: 'images' }
            ],
        }),
    ],
    devServer: {
        static: [{
            directory: path.resolve(__dirname, 'dist'),
        },
        {
            directory: path.resolve(__dirname, 'src'),
        },
        ],
        compress: true,
        port: 3000,
        open: true,
        hot: true,
    },
};
