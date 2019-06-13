/*采用yarn安装的方法 先执行yarn init -y 初始化项目的package.json管理包的文件 安装vue和vuex yarn add vue vuex*/
/*采用important的方式来引入 此种引入方式需要webpack来编译才可以 yarn add webpack webpack-cli -D 或者使用npm来装*/
/*在package.json中添加scripts:{"build":"webpack"}后，在项目根目录下执行yarn build 或者 npm run build 来打包 然后进入打包之后自动生成的dist文件夹下执行node main.js来执行打包后的index.js*/
/*在package.json webpack后面添加上mode development来去除打包时出现的警告标志*/
/*或者在根目录下新建一个webpack.config.js 做相关配置也可以去除警告标志*/
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
//创建仓库
const store = new Vuex.Store({
    state:{
        count:0
    },
    mutations:{
        increment(state){
            state.count++
        }
    }
});
console.log(store.state.count);
store.commit('increment');
console.log(store.state.count);