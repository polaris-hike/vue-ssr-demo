const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {merge} = require('webpack-merge')
const base = require('./webpack.base')

module.exports = merge(base, {
        target: 'node',
        entry: {
            server: path.resolve(__dirname, '../src/server-entry.js')
        },
        output: {
            libraryTarget:'commonjs2' //表示结果用 module.exports 导出
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../public/index.ssr.html'),
                filename: "server.html",
                excludeChunks: ['server'],
                minify: false,
                client:'/client.bundle.js'
            }),
        ]
    }
)