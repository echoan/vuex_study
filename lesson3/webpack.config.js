//引入html模板插件 先安装（npm install html-webpack-plugin -D） 再引用
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry:'./src/index.js',
    mode:'development',
    resolve:{
        alias:{
            "vue":'vue/dist/vue.esm.js'
        }
    },//为了解决vue打包时的一个问题
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
}