const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = [
  {
    mode: "development",
    entry: [
      "@babel/polyfill",
      path.resolve(__dirname, "../../src/js/index.js"),
    ],
    output: {
      filename: "dev.[contenthash].js",
      path: path.resolve(__dirname, "../../public/js"),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: [
                "@babel/plugin-proposal-object-rest-spread",
                "@babel/plugin-transform-runtime",
              ],
            },
          },
        },
      ],
    },
    plugins: [new CleanWebpackPlugin()],
  },
  {
    mode: "development",
    entry: path.resolve(__dirname, "../../src/css/styles.scss"),
    output: {
      path: path.resolve(__dirname, "../../public/css"),
    },
    resolve: {
      alias: {
        images: path.resolve(__dirname, "../../public/images"),
      },
    },
    optimization: {
      minimizer: [new OptimizeCssAssetsPlugin()],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "dev.[contenthash].css",
      }),
      new CleanWebpackPlugin(),
      new CopyPlugin([
        {
          from: path.resolve(__dirname, "../../src/images"),
          to: path.resolve(__dirname, "../../public/images"),
        },
      ]),
      new CopyPlugin([
        {
          from: path.resolve(__dirname, "../../src/audio"),
          to: path.resolve(__dirname, "../../public/audio"),
        },
      ]),
    ],
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          loader: "file-loader",
        },
      ],
    },
  },
];
