module.exports = {
    entry: "./src/index.js",
    output: {
        path: "dist/assets",
        filename: "bundle.js",
        publicPath: "assets"
    },
    devServer: {
        inline: "./dist",
        contentBase: "./dist",
        port: 3001
    },
    module: {
        loaders:[
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: ["babel"],
                query: {
                    presets: ["latest", "stage-0"]
                }
            },
            {
                test: /\.json$/,
                exclude: /(node_modules)/,
                loader: "json-loader"
            }
        ]
    }
}