const path = require('path');

module.exports = {
    entry: {
        'bundle': './src/Application.tsx',
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'assets/js')
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },    
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: [
                    "style-loader",
                    "css-loader?url=false",
                    "sass-loader"
                ]
            }
        ]
    },
    node: {
        fs: 'empty'
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }    
};