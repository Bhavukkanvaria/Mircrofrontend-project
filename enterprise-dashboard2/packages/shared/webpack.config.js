const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        library: { type: 'var', name: 'shared' },
    },
    devServer: {
        port: 4002,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            }
        ]
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'shared',
            filename: 'remoteEntry.js',
            exposes: {
                './store': './src/store.js',
                './hooks': './src/hooks.js',
                './slices': './src/slices.js'
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