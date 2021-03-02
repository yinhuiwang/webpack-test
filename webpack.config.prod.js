const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const terserWebpackPlugin = require('terser-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

const prodConfig = {
    // 生产模式
    mode: "production",
    // 调试模式 
    devtool: 'cheap-module-source-map',
    // 优化项
    optimization: {
      minimizer: [ new optimizeCssAssetsWebpackPlugin({}), new terserWebpackPlugin({}) ]
    },
    // 插件
    plugins: [
      new htmlWebpackPlugin({
        template: './src/index.html',
        title: 'prod - webpack环境',
        filename: 'index.html',
        chunks: ['index'],
        hash: true,
        minify: {
          removeComments: true,
          collapseWhitespace: true
        }
      })
    ]
}


module.exports = webpackMerge.merge(commonConfig, prodConfig);