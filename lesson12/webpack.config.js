const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    mode:'development',
    entry:'./src/index.js',

    resolve:{
        alias:{
            vue:'vue/dist/vue.esm.js',
        }
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(jpg|jpeg|png|svg|gif|woff)$/,
                use:['file-loader']
                //对于某些体积较小的图片可以直接将其加入到html里面不必再打包到dist文件夹下
                // use:['url-loader?limit=40000']
            }
           
        ]

    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new VueLoaderPlugin({

        })
    ]
}