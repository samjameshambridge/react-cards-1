const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./app/index.js",
  output: {
    path: path.resolve(__dirname + "../../../build/public"),
    // publicPath: "/",
    filename: "js/bundle.js",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/style.css",
    }),
    new webpack.ProvidePlugin({
      gsap: "gsap",
    }),
    // new HtmlWebPackPlugin({
    //   cache: false,
    //   filename: "index.html",
    //   inject: true,
    //   minify: true,
    //   meta: {
    //     content:
    //       "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
    //   },
    //   template: "./app/html-template/index.html",
    //   title: "React Cards",
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
