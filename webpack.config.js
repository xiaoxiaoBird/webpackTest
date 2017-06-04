module.exports = {
  devtool: 'eval-source-map',
  entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/public",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },
  module: {//在配置文件里添加JSON loader
    loaders: [
      {
        test: /\.json$/, //一个匹配loaders所处理的文件的拓展名的正则表达式
        loader: "json-loader"//：loader的名称
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,//不要处理的内容 ，表示node_modules下的js文件不需要转换
        loader: 'babel-loader',// babel的必须设置项为babel-loader
        query: {
          presets: ['es2015','react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules'//添加对样式表的处理
      }
    ]
  },
  devServer: {   //构建本地服务器
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    colors: true,//终端中输出结果为彩色
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  }
}
