const path = require('path')

module.exports = {
  entry:'./es6/promise/async.js',  // 入口
  output:{  // 出口
    path:__dirname,
    filename:'./build/bundle.js' // 会自动创建文件夹
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude:/(node_modules)/, // 忽略库的文件
        loader:'babel-loader'  // 使用babel编译
      }
    ]
  }
}
