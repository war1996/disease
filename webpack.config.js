const webpack = require('webpack');


module.exports = {
    mode: 'development',
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: "./public",
        historyApiFallback: true,
        inline: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "es2015", "react"
                        ]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loaders: ['style-loader','css-loader']
            },
            {
                test: /\.scss$/,
                // exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=10000'
            }
            // .babelrc

        ]
    },
    plugins: [
        require('autoprefixer'),
        new webpack.BannerPlugin("尕然然的代码你不能随便改de～"),
        new webpack.HotModuleReplacementPlugin()
    ]  
};