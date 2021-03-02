const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

const devConfig = {
    // 开发模式
    mode: "development",
    // 调试模式
    devtool: 'eval-cheap-module-source-map',
    /**
     * webpack开发服务器 注意：
     *  1. contentBase需对应output目录
     *  2. devServer默认打开index.html，既：htmlWebpackPlugin的输出的html名一应为“index.html”
     */
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),   // 本地服务路径
      compress: true,   // 启动gzip压缩
      open: true,       // 自动打开浏览器
      port: 3000,       // 端口
      hot : true,       // 重新加载改变的部分，HRM失败-刷新页面
      // inline: true,  // 刷新页面 
      proxy: [{
        /**
         * http://localhost:3000/user/xxxx 转为 http://localhost:9090/api/xxx
         * 支持跨域、支持https跨域
         */
        context: ["/user", "/login"],
        target: 'http://localhost:9090/',
        changeOrigin: true,
        secure: true,
        pathRewrite: {"": '.api'}
      }],
      hot: true, // 开启热更新
      hotOnly: true // 不刷新网页
    },
    plugins: [
        new htmlWebpackPlugin({
          template: './src/index.html',
          title: '你好 webpack',
          filename: 'index.html',
          chunks: ['index'],
          hash: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}



module.exports = webpackMerge.merge(commonConfig, devConfig);