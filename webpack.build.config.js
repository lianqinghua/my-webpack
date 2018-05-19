const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlgin = require('html-webpack-plugin');
const cleanWebpack = require('clean-webpack-plugin');

// 导入抽取CSS样式文件的插件
const extractTextPlugin = require('extract-text-webpack-plugin')
// 导入优化压缩CSS样式表的插件
const optimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
module.exports = {
  entry: {
    app: './src/main.js',
    vendors: ['jquery']//第三方包
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name][chunkhash].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: true,
      cacheGroups: {
        vendors: { // split `node_modules`目录下被打包的代码到 `page/vendor.js && .css` 没找到可打包文件的话，则没有。css需要依赖 `ExtractTextPlugin`
          test: /node_modules\//,
          name: 'vendors',
          priority: 10,
          enforce: false,
          chunks: "all"
        }
      }
    }
  },
  plugins: [
    new htmlWebpackPlgin({
      template: path.join(__dirname, './index.html'),
      filename: 'index.html'
    }),
    new cleanWebpack(['./dist']),
    new webpack.DefinePlugin({
      'NICE_FEATURE': JSON.stringify(true),
      'EXPERIMENTAL_FEATURE': JSON.stringify(false)
    }),
    new extractTextPlugin('css/styles.css'), // 抽取CSS文件到单独的目录中
    new optimizeCSSAssetsPlugin() // 自动压缩CSS
  ],
  module: { // 用来配置 非JS文件对应的loader的
    rules: [ // 就是这些 非 JS 文件 和 loader 之间的对应关系
      {
        test: /\.css$/, use: extractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
          publicPath: '../' // 表示，如果将来生成的样式中，包含 路径，那么，需要自动在路径前面加上 ../ 前缀
        })
      }, // 创建处理 css 文件的 loader 匹配规则
      {
        test: /\.less$/, use: extractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader'],
          publicPath: '../'
        })
      }, // 配置处理less文件的规则
      {
        test: /\.scss$/, use: extractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
          publicPath: '../'
        })
      },
      { test: /\.jpg|png|gif|bmp$/, use: 'url-loader?limit=7631&name=asseat/images/[hash:8]-[name].[ext]' }, // 配置 处理 样式表中图片的 loader规则
      // 可以使用?给 url-loader传递参数，其中，有一个固定的参数，叫做 limit，表示图片的大小，需要给定一个 数值；
      // limit 给定的这个数值，是 图片的大小，单位是 Byte（字节）
      // 如果指定了 limit 参数，则只有图片的大小，小于给定的 值时候，才会转为base64格式的图片；否则，就不转换；
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ } // 添加转换JS文件的loader，其中，必须把 node_modules 目录设置为 排除项，这样，在打包的时候，会忽略node_modules 目录下的所有JS文件；否则项目运行不起来！
    ]
  }
} 