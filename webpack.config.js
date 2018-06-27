const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

const env = 'development';

module.exports = {
  mode: env,
  // devtool: 'cheap-module-eval-source-map',
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
  },
  entry: './src/index.tsx',
  //   {main: [
  //     'babel-polyfill',
  //     path.join(__dirname, 'src', 'index.tsx'),
  //   ],
  // },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].[chunkhash].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx$/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src'),
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
        exclude: /node_modules/,
      },
      // {
      //   test: /\.js$/,
      //   include: path.resolve(__dirname, 'src'),
      //   loader: 'babel-loader',
      //   exclude: /node_modules/,
      // },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    host: '0.0.0.0',
    port: 3000,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Demo Application',
      template: 'index.html',
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
  ],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
};
