const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src', 'js', 'index.js'),
  },
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js',
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      }, {
        test: /\.(sa|sc|c)ss$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
        }, {
          loader: 'css-loader',
        }, {
          loader: 'postcss-loader'
        }, {
          loader: 'sass-loader',
          options: {
            implementation: require('sass'),
          },
        }],
      }, {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [{
          loader: "file-loader",
          options: {
            outputPath: 'images',
          },
        }],
      }, {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [{
          loader: "file-loader",
          options: {
            outputPath: 'fonts',
          },
        }],
      }],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    }),
  ],

  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    hot: true,
    port: 5555,
  },
  mode: 'development',
};