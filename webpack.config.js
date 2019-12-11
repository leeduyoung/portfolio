const path = require("path");

module.exports = {
    entry: {
        bundle: "./src/Application.tsx",
        career: "./src/Career.tsx"
    },
    output: {
        filename: "[name].min.js",
        path: path.resolve(__dirname, "assets/js"),
        publicPath: "assets/js"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, "./"),
        compress: true,
        port: 8080,
        inline: true,
        hot: true,
        open: 'google chrome'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpg|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: false
                        }
                    }
                ]
            }
        ]
    }
};
