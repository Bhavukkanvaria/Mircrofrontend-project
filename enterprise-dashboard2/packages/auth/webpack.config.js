const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        publicPath: 'auto',  // Critical for dynamic imports
        uniqueName: 'auth'   // Avoid webpack conflicts
    },
    devServer: {
        port: 4003,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.jsx', '.js'],
        // alias: {
        //     '@enterprise-dashboard/shared': path.resolve(__dirname, '../../shared/dist'),
        // }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new ModuleFederationPlugin({
            name: 'auth',
            filename: 'remoteEntry.js',
            remotes: {
                shared: 'shared@http://localhost:4002/remoteEntry.js'
            },
            exposes: {
                './AuthApp': './src/AuthApp.jsx',
            },
            shared: {
                react: {
                    singleton: true,
                    requiredVersion: '^19.1.0',
                    eager: false // MUST be false
                },
                'react-dom': {
                    singleton: true,
                    requiredVersion: '^19.1.0',
                    eager: false
                },
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
        }),
    ],
};