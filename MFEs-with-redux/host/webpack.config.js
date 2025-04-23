const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {ModuleFederationPlugin} = require('webpack').container;

module.exports = {
    entry: './src/index.jsx',
    output: {
        publicPath: 'auto',  // Critical for dynamic imports
        uniqueName: 'host'   // Avoid webpack conflicts
    },
    mode: 'development',
    devServer: {
        port: 5010,
        static: './dist',
    },
    module: {
        rules: [
        {
            test: /\.(ts|jsx|js)$/,
            exclude: /node_modules/,
            use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    '@babel/preset-react',
                ],
            },
            },
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        ],
        
    },
    resolve: {
        extensions: ['.jsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: './public/index.html',
        }),
        new ModuleFederationPlugin({
            name:'host',
            filename: 'remoteEntry.js',
            remotes:{
                'DetailCardInHost':'shared@http://localhost:5011/remoteEntry.js',
            },
            exposes:{
                './store': './src/store.js'
            },
            shared:{
                react :{singleton:true},
                'react-dom' :{singleton:true},
                '@reduxjs/toolkit': { singleton: true},
                'react-redux': { singleton: true,}
            }
        })
    ],
};