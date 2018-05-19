const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlgin = require('html-webpack-plugin');
//打开浏览器
const open = require('open-browser-webpack-plugin');
module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  devServer: {
    contentBase: path.join(__dirname, "./dist"), //网站的根目录为 根目录/dist，如果配置不对，会报Cannot GET /错误
    port: 9000, //端口改为9000
    open: true, // 自动打开浏览器，适合懒人
    hot: true,
    host: '127.0.0.1'
  },
  plugins: [
    new htmlWebpackPlgin({
      template: path.join(__dirname, './index.html'),
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: { // 用来配置 非JS文件对应的loader的
    rules: [ // 就是这些 非 JS 文件 和 loader 之间的对应关系
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }, // 创建处理 css 文件的 loader 匹配规则
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, // 配置处理less文件的规则
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, // 配置 处理 scss 文件的规则
      { test: /\.jpg|png|gif|bmp$/, use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]' }, // 配置 处理 样式表中图片的 loader规则
      // 可以使用?给 url-loader传递参数，其中，有一个固定的参数，叫做 limit，表示图片的大小，需要给定一个 数值；
      // limit 给定的这个数值，是 图片的大小，单位是 Byte（字节）
      // 如果指定了 limit 参数，则只有图片的大小，小于给定的 值时候，才会转为base64格式的图片；否则，就不转换；
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ } // 添加转换JS文件的loader，其中，必须把 node_modules 目录设置为 排除项，这样，在打包的时候，会忽略node_modules 目录下的所有JS文件；否则项目运行不起来！
    ]
  }
} 