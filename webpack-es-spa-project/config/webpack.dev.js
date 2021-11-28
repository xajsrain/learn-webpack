const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const path = require("path");
module.exports = merge(commonConfig, {
  mode: "development",
  devServer: {
    host: "localhost",
    port: 8888,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: { "^/api": "" },
      },
    },
    hot: true,
    client: {
      logging: "warn",
    },
  },
  devtool: "source-map",
  stats: {
    preset: "minimal",
  },
});
