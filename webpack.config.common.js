const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // 入口js
    entry: {
      index: './src/index.js'
    },
    // 出口js
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.js/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: {
              "presets": [["@babel/preset-env", {
                targets: {
                  "chrome": "36"
                }
              }]],
              "plugins": [
                [
                  "@babel/plugin-transform-runtime",
                  {
                    "absoluteRuntime": false,
                    "corejs": 2,
                    "helpers": true,
                    "regenerator": true,
                    "version": "7.0.0-beta.0"
                  }
                ]
              ]
            }
          },
          {
            test: /\.(css|less)$/,
            /* 'style-loader',  */
            use: [ 
              {
                loader: MiniCssExtractPlugin.loader
              }
              , 'css-loader', 'less-loader', "postcss-loader" ]
          },
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'assets/images',
                  publicPath: 'http://localhost:3000/assets/images/',
                  esModule: false 
                }
              },
              {
                loader: 'image-webpack-loader',
                options: {
                  mozjpeg: {
                    progressive: true,
                  },
                  // optipng.enabled: false will disable optipng
                  optipng: {
                    enabled: false,
                  },
                  pngquant: {
                    quality: [0.65, 0.90],
                    speed: 4
                  },
                  gifsicle: {
                    interlaced: false,
                  },
                  webp: {
                    quality: 75
                  }
                }
              }
            ]
          }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
          filename: 'css/[name].css'
        })
    ]
    
}