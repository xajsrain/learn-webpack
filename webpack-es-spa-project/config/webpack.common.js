const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "../src/index.js"),
  },
  output: {
    filename: "[name].[contenthash:8].js",
    path: path.resolve(__dirname, "../dist"),
    clean: true,
    // publicPath: "./",
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset",
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack项目",
      template: path.resolve(__dirname, "../public/index.html"),
    }),
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
  optimization: {
    runtimeChunk: "single",
    moduleIds: "deterministic",
    splitChunks: {
      cacheGroups: {
        echarts: {
          test: /[\\/]node_modules[\\/]echarts/,
          name: "echarts",
          chunks: "all",
        },
        vue: {
          test: /[\\/]node_modules[\\/]vue/,
          name: "vue",
          chunks: "all",
        },
        vendors: {
          test: /[\\/]node_modules[\\/][^(vue|echarts)]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};
