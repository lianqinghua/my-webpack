# webpack
###  内部实现模块化
### 优点：
* 减少请求次数
* 解决依赖关系
* 压缩合并,提高页面加载速度

##  安装
* $ cnpm install --save-dev webpack
* $ cnpm install --save-dev webpack-cli 

## 要在 index.js 中打包 lodash 依赖
* $ cnpm install --save-dev lodash

### 执行 npx webpack，会将我们的脚本作为入口起点，然后 输出 为 main.js。

## 资源
### 加载css
* $ cnpm install --save-dev style-loader css-loader
### 加载图片或字体
* $ cnpm install --save-dev file-loader
### 加载数据
* $ cnpm install --save-dev csv-loader xml-loader

## 设定 HtmlWebpackPlugin
* $ cnpm install --save-dev html-webpack-plugin

## 清理 /dist 文件夹
* $ cnpm install clean-webpack-plugin --save-dev

## webpack 中有几个不同的选项，可以帮助你在代码发生变化后自动编译代码：
1. webpack's Watch Mode（观察模式）
  * "watch": "webpack --watch"    （package.json）
2. webpack-dev-server
  * 多数场景中，你可能需要使用 webpack-dev-server
  * $ cnpm install --save-dev webpack-dev-server
3. webpack-dev-middleware

* $ webpack-merge
* $ webpack-merge


  "watch": "webpack --watch",
    "start": "webpack-dev-server --open --config build/webpack.dev.js",
    "build": "webpack --config build/webpack.prod.js",
https://www.webpackjs.com/guides/development

cnpm i webpack-merge file-loader url-loader babel-core babel-loader babel-plugin-transform-runtime babel-preset-es2015 babel-preset-stage-0 babel-runtime vue vue-loader vue-html-loader vue-style-loader vue-hot-reload-api -D