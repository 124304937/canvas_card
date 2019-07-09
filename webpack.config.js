const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    output: {
        filename: '[hash].min.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            // inject: 'head',
            title: '测试页面',
            template: path.resolve(__dirname, 'public/index.html'),
        })
    ],
    devServer: {
        host: '0.0.0.0',
        port: 8000,
        inline: true
    }
};