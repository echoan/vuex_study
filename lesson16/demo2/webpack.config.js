const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    mode:process.env.NODE_ENV,
    entry:'./src/index.js',
    resolve:{
        alias:{
            vue:'vue/dist/vue.esm.js',
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
        })
    ],
}
//在package.json文件中设置"dev": "cross-env NODE_ENV=development webpack-dev-server",
//"build": "cross-env NODE_ENV=production webpack" window系统下需要加上前缀 cross-env 并在全局安装 cross-env npm install -g cross-env mac系统下不需要