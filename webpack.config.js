module.exports = {
    entry: {
      home: "./home.js",
      page1: "./page1.js"
    },
    context: __dirname + "/src",
    output: {
        path: __dirname + "/dist",
        filename: "[name].js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.less$/, loader: "style!css!less" },
            { test: /\.js?$/, exclude: /(node_modules|bower_components)/, loader: 'babel' }
        ]
    }
};
