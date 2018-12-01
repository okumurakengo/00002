module.exports = {
    mode: "development",
    entry: "./src/index",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: ["babel-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
};
