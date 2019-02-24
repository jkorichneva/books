const path              = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html",
});

module.exports = {
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js?v=[chunkhash]',
        chunkFilename: '[id].js?v=[chunkhash]',
    },

    module: {

        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader']

            }
        ]
    },
    plugins: [htmlPlugin]
};
