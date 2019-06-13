/*采用npm包安装的方法 先执行npm init -y 初始化项目的package.json管理包的文件 安装vue和vuex npm install vue vuex*/
/引入vue和vuex/
/*采用require的方式*/
const Vue = require('vue')
const Vuex = require('vuex')

/*如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex),不然会报错*/
Vue.use(Vuex);
//创建一个store仓库
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
console.log(store.state.count);//0
store.commit('increment');//执行mutations里面的increment方法
console.log(store.state.count);//1