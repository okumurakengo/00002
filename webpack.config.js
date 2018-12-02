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
                test: /\.tsx?$/,
                loader: ["ts-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
};
