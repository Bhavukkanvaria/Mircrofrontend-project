const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.js',
  //   output: {
  //     filename: 'bundle.js',
  //     path: path.resolve(__dirname, 'dist'),
  //   },
  output: {
    publicPath: 'auto',  // Critical for dynamic imports
    uniqueName: 'host'   // Avoid webpack conflicts
  },
  mode: 'development',
  devServer: {
    port: 4000,
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              // '@babel/preset-typescript'
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        analytics: 'analytics@http://localhost:4001/remoteEntry.js', // Points to Analytics app
        shared: 'shared@http://localhost:4002/remoteEntry.js',
        auth: 'auth@http://localhost:4003/remoteEntry.js',
      },
      shared: {
        react: { singleton: true, requiredVersion: '^19.1.0' },
        'react-dom': { singleton: true, requiredVersion: '^19.1.0' },
        '@reduxjs/toolkit': { singleton: true, requiredVersion: '^2.6.1' },
        'react-redux': {
          singleton: true,
          requiredVersion: '^9.2.0',
          // eager: true  // Important for immediate loading 
        },
        '@enterprise-dashboard/shared': {
          singleton: true,
          requiredVersion: '^1.0.0'
        }
      },
    })
  ],
};