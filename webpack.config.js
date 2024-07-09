const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin"); // Adiciona o TerserPlugin
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: 'production', // Definir modo para production and development
  entry: {
    index: './src/index.jsx' // Code splitting: Ponto de entrada principal
  }, 
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Limpa o diretório dist antes de cada build
  },
  optimization: { // Otimizações de código e split chunks
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true, // Processamento paralelo para agilizar a minificação
      }),
      new CssMinimizerPlugin(),
    ],
    splitChunks: { 
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', 
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset', // Otimiza imagens (webpack 5)
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024, // 8kb
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', 
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'src/assets/images', to: 'images' }],
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    compress: true,
    port: 3000,
    open: true,
    hot: true, 
    historyApiFallback: true, 
  },
};