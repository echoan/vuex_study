import Vue from 'vue'
import Vuex from 'vuex'
//引入vuex创建的仓库
import CreateStore from './store/store.js'

Vue.use(Vuex);

//使用引入的仓库CreateStore
const store = CreateStore();
//将store暴露 否则在控制台使用store会报错
window.store = store
//创建vue实例

const app = new Vue({
    el:'#app',
    store,
    template:`
       <div class = "app">
           Vuex案例 之 {{this.$store.state.count}}
       </div>
    `
})