const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const process = require("process")
const path = require("path");
const fs = require("fs");

const config = require("./config");

let srcPath = path.resolve(__dirname, "../src");
let pagesPath = path.resolve(srcPath, "pages");
let icoPath = path.resolve(srcPath, config.icoPath);

let entries = fs.readdirSync(pagesPath).reduce((entries, dir) => {
  const fullDir = path.resolve(pagesPath, dir);
  const entry = path.resolve(fullDir, config.entryName);
  if (fs.existsSync(entry)) {
    entries[dir] = entry;
  }
  return entries;
}, {});


const sourceMap = false

let plugins = [
  // new CopyPlugin([
  //   {
  //     from: path.resolve(__dirname, "../src/assets"),
  //     to: path.resolve(__dirname, "../dist/assets"),
  //   }
  // ]),
  new CleanWebpackPlugin(),
  // new MiniCssExtractPlugin({
  //   // Options similar to the same options in webpackOptions.output
  //   // all options are optional
  //   filename: "css/[name].[hash].css",
  //   chunkFilename: "[id].css",
  //   ignoreOrder: false, // Enable to remove warnings about conflicting order
  // }),
];

Object.keys(entries).forEach((key) => {
  plugins.push(
    new HtmlWebpackPlugin({
      title: `${key}`,
      filename: `${key}.html`,
      template: `src/pages/${key}/index.html`,
      chunks: [key],
      minify: {
        // 压缩HTML文件
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: true, // 删除空白符与换行符
        minifyCSS: true, // 压缩内联css
      },
      favicon: icoPath,
      inject: true,
    })
  );
});

module.exports = {
  stats: { children: false },
  context: path.resolve(__dirname, "../"),
  entry: entries,
  output: {
    path: path.resolve(__dirname, "../dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.less$/,
        use: [
          // {
          //   // 默认打包后css会在js中
          //   // 用于分离js中css
            // loader: MiniCssExtractPlugin.loader
          // },
          "style-loader",
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              name: "img/[name].[hash:7].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "fonts/[name].[hash:7].[ext]",
        },
      },
    ],
  },
  externals: {
    respond: "respond",
    html5shiv: "html5shiv",
  },
  plugins: plugins,
};