const path = require("path");

module.exports = {
  mode:"development",
  entry: "./index.js",
  target:"node",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {loader:"babel-loader"},
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  devServer: {
    port:"9500",
    contentBase: ['./public'],
    open: true,
  },
};