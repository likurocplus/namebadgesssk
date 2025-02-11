const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Rule mới cho các tệp ảnh
        type: "asset/resource",
      },
      {
        test: /\.(mp4|webm|ogg)$/i, // Rule cho file video
        type: "asset/resource", // Xử lý file video tương tự như hình ảnh
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Production",
      template: "./src/index.html",
    }),
  ],
};
